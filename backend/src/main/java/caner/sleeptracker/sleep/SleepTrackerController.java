package caner.sleeptracker.sleep;


import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/api/v1/sleep")
@RequiredArgsConstructor
public class SleepTrackerController {
  private final SleepTrackerService sleepTrackerService;

  @PostMapping("/add")
  public ResponseEntity<String> addSleep(
      @RequestBody AddSleepRequest addSleepRequest
  ) {

    return ResponseEntity.ok(sleepTrackerService.addSleep(addSleepRequest));
  }

  @PostMapping("/delete")
  public ResponseEntity<String> delete(
      @RequestBody Integer sleepId) {
    return ResponseEntity.ok(sleepTrackerService.deleteSleep(sleepId));
  }

  @PostMapping("/update")
  public ResponseEntity<SleepTracker> updateSleep(
      @RequestBody UpdateSleepRequest updateSleepRequest
  ) {
    return ResponseEntity.ok(sleepTrackerService.updateSleep(updateSleepRequest));
  }

  @GetMapping("/get")
  public ResponseEntity<SleepTracker> getSleep(
      @RequestBody Integer sleepId
  ) {
    return ResponseEntity.ok(sleepTrackerService.getSleep(sleepId));
  }

  @GetMapping("/get-all")
  public ResponseEntity<List<SleepTracker>> getAllSleep(@RequestBody GetAllSleepRequest request) {

    return ResponseEntity.ok(sleepTrackerService.getAllSleep(request));
  }

}
