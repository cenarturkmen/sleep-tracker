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
  public void deleteSleep() {
    // delete sleep
  }

  @PostMapping("/update")
  public void updateSleep() {
    // update sleep
  }

  @PostMapping("/get")
  public void getSleep() {
    // get sleep
  }

  @GetMapping("/get-all")
  public ResponseEntity<List<SleepTracker>> getAllSleep(@RequestBody GetAllSleepRequest request) {

    return ResponseEntity.ok(sleepTrackerService.getAllSleep(request));
  }

}
