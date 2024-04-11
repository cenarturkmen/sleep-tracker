package caner.sleeptracker.sleep;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AddSleepRequest {
  private String startTime;
  private String endTime;
  private Integer duration;
  private String email;
}
