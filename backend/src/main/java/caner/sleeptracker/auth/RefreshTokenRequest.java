package caner.sleeptracker.auth;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class RefreshTokenRequest {
  private String refreshToken;
  private String email;
}
