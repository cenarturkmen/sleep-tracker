package caner.sleeptracker.sleep;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SleepTrackerRepository extends JpaRepository<SleepTracker, Integer> {
  List<SleepTracker> findAllByUserId(Integer userId);
}
