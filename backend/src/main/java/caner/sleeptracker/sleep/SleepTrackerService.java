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

  public void deleteSleep() {
    // delete sleep
  }

  public void updateSleep() {
    // update sleep
  }

  public void getSleep() {
    // get sleep
  }

  public List<SleepTracker> getAllSleep(GetAllSleepRequest request) {
    var email = request.getEmail();
    var userId = userRepository.findByEmail(email)
      .orElseThrow(() -> new RuntimeException("User not found"));

    return sleepTrackerRepository.findAllByUserId(userId.getId());
  }
}
