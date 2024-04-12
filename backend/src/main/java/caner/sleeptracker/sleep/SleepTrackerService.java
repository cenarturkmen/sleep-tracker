package caner.sleeptracker.sleep;


import caner.sleeptracker.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SleepTrackerService {
  private final SleepTrackerRepository sleepTrackerRepository;
  private final UserRepository userRepository;

  public String addSleep(AddSleepRequest request) {
    var email = request.getEmail();
    var userId = userRepository.findByEmail(email)
        .orElseThrow(() -> new RuntimeException("User not found"));

    sleepTrackerRepository.save(
        SleepTracker.builder()
            .userId(userId.getId())
            .startTime(request.getStartTime())
            .endTime(request.getEndTime())
            .duration(request.getDuration())
            .build()
    );

    return "Sleep added successfully";
  }

  public String deleteSleep(Integer id) {
    sleepTrackerRepository.deleteById(id);

    return "Sleep deleted successfully";
  }

  public SleepTracker updateSleep(UpdateSleepRequest request) {
    var sleep = sleepTrackerRepository.findById(request.getSleepId())
        .orElseThrow(() -> new RuntimeException("Sleep not found"));

    sleep.setStartTime(request.getStartTime());
    sleep.setEndTime(request.getEndTime());
    sleep.setDuration(request.getDuration());

    sleepTrackerRepository.save(sleep);

    return sleep;
  }

  public SleepTracker getSleep(Integer id) {
    var sleep = sleepTrackerRepository.findById(id)
        .orElseThrow(() -> new RuntimeException("Sleep not found"));

    return sleep;
  }

  public List<SleepTracker> getAllSleep(GetAllSleepRequest request) {
    var email = request.getEmail();
    var userId = userRepository.findByEmail(email)
        .orElseThrow(() -> new RuntimeException("User not found"));

    return sleepTrackerRepository.findAllByUserId(userId.getId());
  }
}
