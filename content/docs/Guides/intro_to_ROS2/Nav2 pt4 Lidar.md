---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-08-03T21:37:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-08-03T21:37:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 154
toc: false
icon: ""
---

[Articulated Robotics guide](https://youtu.be/eJZXRncGaGM?si=p88bRTyt1R9TyuiY)

---

<details>
  <summary>{{< markdownify >}}What is Lidar?{{< /markdownify >}}</summary>
  
Lidar (light detection and ranging) is using lases to determine how far objects are.

TODO

</details>



TODO:

[link to add other sensors (realsense)](https://docs.nav2.org/setup_guides/sensors/setup_sensors_gz.html)

Often in robotics Odometry is updates very quickly but is prone to drift.

On the other hand Lidar is effectively _“ground truth”_ because it can see the world around it however updates very slowly.

By using these two sensors together we can cover each others weaknesses.

In between the long update periods of Lidar we can use Odometry to get an accurate measurement of where we are. Then when the Lidar measurement eventually comes we correct the Odometry’s drift.

Just for this guide we will be sticking to a 2D Lidar but these instructions can be adapted to any kind of Lidar.

Nav2 expects Lidar data to be published on the `/scan` topic with type `sensor_msgs/LaserScan`

## Simulating Lidar in Gazebo

We must first add a Lidar link into our `urdf` to know where it is on the robot.

Also we have to add a Gazebo plugin to tell Gazebo simulate the Lidar

past this at the bottom of the file before the `</robot>` tag

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

```xml

  <link name="lidar_link">
    <visual>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </visual>

    <collision>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </collision>

    <xacro:cylinder_inertia m="0.125" r="0.0508" h="0.055"/>
  </link>

  <joint name="lidar_joint" type="fixed">
    <parent link="base_link"/>
    <child link="lidar_link"/>
    <origin xyz="0 0 0.12" rpy="0 0 0"/>
  </joint>



  <!-- 2D Lidar New Gazebo Sensor Plugin  -->
  <gazebo reference="lidar_link">
    <sensor name="lidar" type="gpu_lidar">
      <always_on>true</always_on>
      <visualize>true</visualize>
      <update_rate>5</update_rate>
      <topic>scan</topic>
      <gz_frame_id>lidar_link</gz_frame_id>
      <lidar>
        <scan>
          <horizontal>
            <samples>360</samples>
            <resolution>1.000000</resolution>
            <min_angle>0.000000</min_angle>
            <max_angle>6.280000</max_angle>
          </horizontal>
        </scan>
        <range>
          <min>0.120000</min>
          <max>12.0</max>
          <resolution>0.015000</resolution>
        </range>
        <noise>
          <type>gaussian</type>
          <mean>0.0</mean>
          <stddev>0.02</stddev>
        </noise>
      </lidar>
    </sensor>
  </gazebo>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAWI6HAV%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIFN86Fqx%2BlyAQ8j5AkY1%2FJ%2BboZVjUX34v8gnhpCJNoQdAiBWikofej4odDDmoRO3gvj8BOE%2Bnr9Rcnxinnf%2B4NJRpyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJkiorLw59PMNsicLKtwD8hFgHXqvVZtFOtgYc%2BZ56bh5JC2tZpNSUuH369HmdsSF2%2FKedmwCzEUpKCqblxtqgs6Zeb27FdzjhiO2u7eGdib5N%2BWMQDfFmMRvTjcIYLos6GdYCgJrJxPn%2B%2FdjUdtyX4fQCTs5BPI43UgFsu1RIS%2FcMNc5%2BcqKfk48LUQQ6rQ7aq9AGynxuNVYkvCuByBDDqnOYfdi1uHJkppLlVmOU4wqR8IyqHpLO9u60749Xvy206LxBvpMg7cm3lu00H%2BfmfVbA2sCH%2Fbmru7WLVFQjpKxmzFGUTQaZbl2CKVwrueulV7gZa0wqiC5fZC3K54nn1J5QbfcTGYTcrtdIvK7eH8O8yAGPs1Tv%2BK6%2FsfEM6cItKCievBu5PwKHcKv6hNnOarw%2FZmxmO4wp7Rwk%2BkAMiI%2FpFWmq3nbyyADPLzEPNYB3WQca3uNEQZl1Ebsry63MPtfRjZykj%2BIKQWRlJzS46cA1bmjpFr2wWdgF6v8P5PQzWdN6y8f4pxwNgcK87kA9uD%2FSeyZtZ%2FtLPZ51i7CgmfOruuWsvxuazOGkvyi0wwUq6oqd6yrQnJ5eh3sV5nXOHCX6mehQZJxTy0ZshXzivqRfyRO7hc3Xgz88pwqmZPgTsPQy%2F4sGLTePhowgKihxwY6pgGLSLv1zWHd8oiv4fqBa%2BQKtBQkyTWQNkKf88pr%2BEHNMo%2BzkfWw%2FBBJ7op2wiwhv%2BwKJFNq7oa9VZHPww%2F0IjQbnsgFX0JAH14pA2YwGQ9MlgUr2j3q4TZAZ4wDxOo0xMiNJVxTRNS43QkHeZIzGNfLtP%2BKE1shrWddA%2BUiQ9VV1JPDVa8XEyrC%2FL4CSK1EkmQLJYdIT9ShsVmy3MThPSjZXcPpCi5k&X-Amz-Signature=d45c918e184f6b91b8aed11e14edcd9683178c57b60d5d69b680b88255ac0b9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Adding `/scan` topic in `bridge_config.yaml`

We have to bridge over the `/scan` topic from Gazebo

```yaml
- ros_topic_name: "/scan"
	gz_topic_name: "/scan"
	ros_type_name: "sensor_msgs/msg/LaserScan"
	gz_type_name: "gz.msgs.LaserScan"
	direction: GZ_TO_ROS
```

**Run:**

```xml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

### Lidar Rviz display

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V357ZUZ4%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIBg%2F74x0eN%2FzKgnQoTaYoWyJq4Yas0AD%2FPGh8q7eFUNQAiATjoV%2FY9mNoy4IKHdLqTUffYoy0BiHNUA2exlgcFLqHCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzeXsvX9z9Eq5OAqtKtwDSvtmq7cYktmXgANSGutNzGmKb0aTqc4uA1zW6PQAUWwGMx%2FbcMtrKSADgYyiz9SYbiniGDWcKw6M%2Fl14mDIt8xrehoOqITR65IxRnHK9W1losEWLybHJpOO3SjdeoUKbqpBdQxGzKqSxa1bbTiyUjDO3u%2FD06X%2FyuEqd3RvkZDBV1LZJB1yGeVvq%2FXefr2JxOYHpzKRH9QofwthOTFwVld1g4QSy6B5FcUbOeb1jxs%2FubL24nAEuzsAyeZkyBvWZLqcuyQI7hFOyLSnp3ibaML2BbTvkER711b5tquxudfSIpDZ3lQWkJWE%2FlvU3rxKsbMWcvzHu93XZFdjWPf4ybMTKHRf7Ws71cENvIAe1aXqpfLkHsSfvUeBfoNopFHBHyNgwMWyuL3aAKkLcX2HMSZtZ9x5jUIcKmJk4WziYpBcwvXfobGOkF3cmxBZUu8iFGBuUbGM3QP0TMDcsAjXDN5PIjr3xmv%2FCbAVsRbThAKPmx6t3RLPjCERRqhefUzOUJCwMaLNXnAPpJa42cccNu9ieRav1j%2B8mCHJzDKDBVIdkMXAPu0gkuJxKSRltDRNOrUR5Mflnq3ezmYh%2FKr2DQz2jfNXm%2BSDbf70aTgT5XpHU2Oy5JrebjPnznCMwiKmhxwY6pgH1Vc32dv5jOSMeD3J%2FCk4t88fbBs4DfSjvvmjY9ui%2F4ZcqSOpL4d%2FDzQn2JeQ2kwJvsvGNP25cLNfEfgUU3RU2KBpCxCm8x6B4RZALOF9SjCG8HRnIukMBbB95WYLiJM4mP5XzYIxrx%2F6f2chQHm56LPb%2Bf4Qn%2F51nwJkWbznqHbqMDtmWrz3AtX4NVM%2BYlM8TmzIalgdRmGf3qT6dJkFMTKElqE16&X-Amz-Signature=dc5e6d93da667408ecec3cd68797110c311e87448772a068d96dfb7daba7f7da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V357ZUZ4%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIBg%2F74x0eN%2FzKgnQoTaYoWyJq4Yas0AD%2FPGh8q7eFUNQAiATjoV%2FY9mNoy4IKHdLqTUffYoy0BiHNUA2exlgcFLqHCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzeXsvX9z9Eq5OAqtKtwDSvtmq7cYktmXgANSGutNzGmKb0aTqc4uA1zW6PQAUWwGMx%2FbcMtrKSADgYyiz9SYbiniGDWcKw6M%2Fl14mDIt8xrehoOqITR65IxRnHK9W1losEWLybHJpOO3SjdeoUKbqpBdQxGzKqSxa1bbTiyUjDO3u%2FD06X%2FyuEqd3RvkZDBV1LZJB1yGeVvq%2FXefr2JxOYHpzKRH9QofwthOTFwVld1g4QSy6B5FcUbOeb1jxs%2FubL24nAEuzsAyeZkyBvWZLqcuyQI7hFOyLSnp3ibaML2BbTvkER711b5tquxudfSIpDZ3lQWkJWE%2FlvU3rxKsbMWcvzHu93XZFdjWPf4ybMTKHRf7Ws71cENvIAe1aXqpfLkHsSfvUeBfoNopFHBHyNgwMWyuL3aAKkLcX2HMSZtZ9x5jUIcKmJk4WziYpBcwvXfobGOkF3cmxBZUu8iFGBuUbGM3QP0TMDcsAjXDN5PIjr3xmv%2FCbAVsRbThAKPmx6t3RLPjCERRqhefUzOUJCwMaLNXnAPpJa42cccNu9ieRav1j%2B8mCHJzDKDBVIdkMXAPu0gkuJxKSRltDRNOrUR5Mflnq3ezmYh%2FKr2DQz2jfNXm%2BSDbf70aTgT5XpHU2Oy5JrebjPnznCMwiKmhxwY6pgH1Vc32dv5jOSMeD3J%2FCk4t88fbBs4DfSjvvmjY9ui%2F4ZcqSOpL4d%2FDzQn2JeQ2kwJvsvGNP25cLNfEfgUU3RU2KBpCxCm8x6B4RZALOF9SjCG8HRnIukMBbB95WYLiJM4mP5XzYIxrx%2F6f2chQHm56LPb%2Bf4Qn%2F51nwJkWbznqHbqMDtmWrz3AtX4NVM%2BYlM8TmzIalgdRmGf3qT6dJkFMTKElqE16&X-Amz-Signature=20fcdd86e080a5f9d5adf9ade46b0d0bd607c5488f31e315e003c9f31c7dea16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V357ZUZ4%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIBg%2F74x0eN%2FzKgnQoTaYoWyJq4Yas0AD%2FPGh8q7eFUNQAiATjoV%2FY9mNoy4IKHdLqTUffYoy0BiHNUA2exlgcFLqHCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzeXsvX9z9Eq5OAqtKtwDSvtmq7cYktmXgANSGutNzGmKb0aTqc4uA1zW6PQAUWwGMx%2FbcMtrKSADgYyiz9SYbiniGDWcKw6M%2Fl14mDIt8xrehoOqITR65IxRnHK9W1losEWLybHJpOO3SjdeoUKbqpBdQxGzKqSxa1bbTiyUjDO3u%2FD06X%2FyuEqd3RvkZDBV1LZJB1yGeVvq%2FXefr2JxOYHpzKRH9QofwthOTFwVld1g4QSy6B5FcUbOeb1jxs%2FubL24nAEuzsAyeZkyBvWZLqcuyQI7hFOyLSnp3ibaML2BbTvkER711b5tquxudfSIpDZ3lQWkJWE%2FlvU3rxKsbMWcvzHu93XZFdjWPf4ybMTKHRf7Ws71cENvIAe1aXqpfLkHsSfvUeBfoNopFHBHyNgwMWyuL3aAKkLcX2HMSZtZ9x5jUIcKmJk4WziYpBcwvXfobGOkF3cmxBZUu8iFGBuUbGM3QP0TMDcsAjXDN5PIjr3xmv%2FCbAVsRbThAKPmx6t3RLPjCERRqhefUzOUJCwMaLNXnAPpJa42cccNu9ieRav1j%2B8mCHJzDKDBVIdkMXAPu0gkuJxKSRltDRNOrUR5Mflnq3ezmYh%2FKr2DQz2jfNXm%2BSDbf70aTgT5XpHU2Oy5JrebjPnznCMwiKmhxwY6pgH1Vc32dv5jOSMeD3J%2FCk4t88fbBs4DfSjvvmjY9ui%2F4ZcqSOpL4d%2FDzQn2JeQ2kwJvsvGNP25cLNfEfgUU3RU2KBpCxCm8x6B4RZALOF9SjCG8HRnIukMBbB95WYLiJM4mP5XzYIxrx%2F6f2chQHm56LPb%2Bf4Qn%2F51nwJkWbznqHbqMDtmWrz3AtX4NVM%2BYlM8TmzIalgdRmGf3qT6dJkFMTKElqE16&X-Amz-Signature=8f4f2fba1db9e788c64348f78fb4b515c115dd28032233b52202753914d349c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V357ZUZ4%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIBg%2F74x0eN%2FzKgnQoTaYoWyJq4Yas0AD%2FPGh8q7eFUNQAiATjoV%2FY9mNoy4IKHdLqTUffYoy0BiHNUA2exlgcFLqHCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzeXsvX9z9Eq5OAqtKtwDSvtmq7cYktmXgANSGutNzGmKb0aTqc4uA1zW6PQAUWwGMx%2FbcMtrKSADgYyiz9SYbiniGDWcKw6M%2Fl14mDIt8xrehoOqITR65IxRnHK9W1losEWLybHJpOO3SjdeoUKbqpBdQxGzKqSxa1bbTiyUjDO3u%2FD06X%2FyuEqd3RvkZDBV1LZJB1yGeVvq%2FXefr2JxOYHpzKRH9QofwthOTFwVld1g4QSy6B5FcUbOeb1jxs%2FubL24nAEuzsAyeZkyBvWZLqcuyQI7hFOyLSnp3ibaML2BbTvkER711b5tquxudfSIpDZ3lQWkJWE%2FlvU3rxKsbMWcvzHu93XZFdjWPf4ybMTKHRf7Ws71cENvIAe1aXqpfLkHsSfvUeBfoNopFHBHyNgwMWyuL3aAKkLcX2HMSZtZ9x5jUIcKmJk4WziYpBcwvXfobGOkF3cmxBZUu8iFGBuUbGM3QP0TMDcsAjXDN5PIjr3xmv%2FCbAVsRbThAKPmx6t3RLPjCERRqhefUzOUJCwMaLNXnAPpJa42cccNu9ieRav1j%2B8mCHJzDKDBVIdkMXAPu0gkuJxKSRltDRNOrUR5Mflnq3ezmYh%2FKr2DQz2jfNXm%2BSDbf70aTgT5XpHU2Oy5JrebjPnznCMwiKmhxwY6pgH1Vc32dv5jOSMeD3J%2FCk4t88fbBs4DfSjvvmjY9ui%2F4ZcqSOpL4d%2FDzQn2JeQ2kwJvsvGNP25cLNfEfgUU3RU2KBpCxCm8x6B4RZALOF9SjCG8HRnIukMBbB95WYLiJM4mP5XzYIxrx%2F6f2chQHm56LPb%2Bf4Qn%2F51nwJkWbznqHbqMDtmWrz3AtX4NVM%2BYlM8TmzIalgdRmGf3qT6dJkFMTKElqE16&X-Amz-Signature=80dda6bc562f89c6d1c2c3d0aa1d36af1118d35a16935f88d89f3eb280dc61df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V357ZUZ4%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIBg%2F74x0eN%2FzKgnQoTaYoWyJq4Yas0AD%2FPGh8q7eFUNQAiATjoV%2FY9mNoy4IKHdLqTUffYoy0BiHNUA2exlgcFLqHCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzeXsvX9z9Eq5OAqtKtwDSvtmq7cYktmXgANSGutNzGmKb0aTqc4uA1zW6PQAUWwGMx%2FbcMtrKSADgYyiz9SYbiniGDWcKw6M%2Fl14mDIt8xrehoOqITR65IxRnHK9W1losEWLybHJpOO3SjdeoUKbqpBdQxGzKqSxa1bbTiyUjDO3u%2FD06X%2FyuEqd3RvkZDBV1LZJB1yGeVvq%2FXefr2JxOYHpzKRH9QofwthOTFwVld1g4QSy6B5FcUbOeb1jxs%2FubL24nAEuzsAyeZkyBvWZLqcuyQI7hFOyLSnp3ibaML2BbTvkER711b5tquxudfSIpDZ3lQWkJWE%2FlvU3rxKsbMWcvzHu93XZFdjWPf4ybMTKHRf7Ws71cENvIAe1aXqpfLkHsSfvUeBfoNopFHBHyNgwMWyuL3aAKkLcX2HMSZtZ9x5jUIcKmJk4WziYpBcwvXfobGOkF3cmxBZUu8iFGBuUbGM3QP0TMDcsAjXDN5PIjr3xmv%2FCbAVsRbThAKPmx6t3RLPjCERRqhefUzOUJCwMaLNXnAPpJa42cccNu9ieRav1j%2B8mCHJzDKDBVIdkMXAPu0gkuJxKSRltDRNOrUR5Mflnq3ezmYh%2FKr2DQz2jfNXm%2BSDbf70aTgT5XpHU2Oy5JrebjPnznCMwiKmhxwY6pgH1Vc32dv5jOSMeD3J%2FCk4t88fbBs4DfSjvvmjY9ui%2F4ZcqSOpL4d%2FDzQn2JeQ2kwJvsvGNP25cLNfEfgUU3RU2KBpCxCm8x6B4RZALOF9SjCG8HRnIukMBbB95WYLiJM4mP5XzYIxrx%2F6f2chQHm56LPb%2Bf4Qn%2F51nwJkWbznqHbqMDtmWrz3AtX4NVM%2BYlM8TmzIalgdRmGf3qT6dJkFMTKElqE16&X-Amz-Signature=e614765c3e1744202d32fbc223431b65cf8e4530eac87ec52c3bfdece6829bab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V357ZUZ4%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIBg%2F74x0eN%2FzKgnQoTaYoWyJq4Yas0AD%2FPGh8q7eFUNQAiATjoV%2FY9mNoy4IKHdLqTUffYoy0BiHNUA2exlgcFLqHCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzeXsvX9z9Eq5OAqtKtwDSvtmq7cYktmXgANSGutNzGmKb0aTqc4uA1zW6PQAUWwGMx%2FbcMtrKSADgYyiz9SYbiniGDWcKw6M%2Fl14mDIt8xrehoOqITR65IxRnHK9W1losEWLybHJpOO3SjdeoUKbqpBdQxGzKqSxa1bbTiyUjDO3u%2FD06X%2FyuEqd3RvkZDBV1LZJB1yGeVvq%2FXefr2JxOYHpzKRH9QofwthOTFwVld1g4QSy6B5FcUbOeb1jxs%2FubL24nAEuzsAyeZkyBvWZLqcuyQI7hFOyLSnp3ibaML2BbTvkER711b5tquxudfSIpDZ3lQWkJWE%2FlvU3rxKsbMWcvzHu93XZFdjWPf4ybMTKHRf7Ws71cENvIAe1aXqpfLkHsSfvUeBfoNopFHBHyNgwMWyuL3aAKkLcX2HMSZtZ9x5jUIcKmJk4WziYpBcwvXfobGOkF3cmxBZUu8iFGBuUbGM3QP0TMDcsAjXDN5PIjr3xmv%2FCbAVsRbThAKPmx6t3RLPjCERRqhefUzOUJCwMaLNXnAPpJa42cccNu9ieRav1j%2B8mCHJzDKDBVIdkMXAPu0gkuJxKSRltDRNOrUR5Mflnq3ezmYh%2FKr2DQz2jfNXm%2BSDbf70aTgT5XpHU2Oy5JrebjPnznCMwiKmhxwY6pgH1Vc32dv5jOSMeD3J%2FCk4t88fbBs4DfSjvvmjY9ui%2F4ZcqSOpL4d%2FDzQn2JeQ2kwJvsvGNP25cLNfEfgUU3RU2KBpCxCm8x6B4RZALOF9SjCG8HRnIukMBbB95WYLiJM4mP5XzYIxrx%2F6f2chQHm56LPb%2Bf4Qn%2F51nwJkWbznqHbqMDtmWrz3AtX4NVM%2BYlM8TmzIalgdRmGf3qT6dJkFMTKElqE16&X-Amz-Signature=6d4124a8ae5aaa6bb932900eb307f535c69cf9360d63c0f352a8a30143412f25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V357ZUZ4%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIBg%2F74x0eN%2FzKgnQoTaYoWyJq4Yas0AD%2FPGh8q7eFUNQAiATjoV%2FY9mNoy4IKHdLqTUffYoy0BiHNUA2exlgcFLqHCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzeXsvX9z9Eq5OAqtKtwDSvtmq7cYktmXgANSGutNzGmKb0aTqc4uA1zW6PQAUWwGMx%2FbcMtrKSADgYyiz9SYbiniGDWcKw6M%2Fl14mDIt8xrehoOqITR65IxRnHK9W1losEWLybHJpOO3SjdeoUKbqpBdQxGzKqSxa1bbTiyUjDO3u%2FD06X%2FyuEqd3RvkZDBV1LZJB1yGeVvq%2FXefr2JxOYHpzKRH9QofwthOTFwVld1g4QSy6B5FcUbOeb1jxs%2FubL24nAEuzsAyeZkyBvWZLqcuyQI7hFOyLSnp3ibaML2BbTvkER711b5tquxudfSIpDZ3lQWkJWE%2FlvU3rxKsbMWcvzHu93XZFdjWPf4ybMTKHRf7Ws71cENvIAe1aXqpfLkHsSfvUeBfoNopFHBHyNgwMWyuL3aAKkLcX2HMSZtZ9x5jUIcKmJk4WziYpBcwvXfobGOkF3cmxBZUu8iFGBuUbGM3QP0TMDcsAjXDN5PIjr3xmv%2FCbAVsRbThAKPmx6t3RLPjCERRqhefUzOUJCwMaLNXnAPpJa42cccNu9ieRav1j%2B8mCHJzDKDBVIdkMXAPu0gkuJxKSRltDRNOrUR5Mflnq3ezmYh%2FKr2DQz2jfNXm%2BSDbf70aTgT5XpHU2Oy5JrebjPnznCMwiKmhxwY6pgH1Vc32dv5jOSMeD3J%2FCk4t88fbBs4DfSjvvmjY9ui%2F4ZcqSOpL4d%2FDzQn2JeQ2kwJvsvGNP25cLNfEfgUU3RU2KBpCxCm8x6B4RZALOF9SjCG8HRnIukMBbB95WYLiJM4mP5XzYIxrx%2F6f2chQHm56LPb%2Bf4Qn%2F51nwJkWbznqHbqMDtmWrz3AtX4NVM%2BYlM8TmzIalgdRmGf3qT6dJkFMTKElqE16&X-Amz-Signature=92f6b26cbc8b2f0257fa8e9bd916d7e7eb0472c64957110cc893faea3da5a71a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V357ZUZ4%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIBg%2F74x0eN%2FzKgnQoTaYoWyJq4Yas0AD%2FPGh8q7eFUNQAiATjoV%2FY9mNoy4IKHdLqTUffYoy0BiHNUA2exlgcFLqHCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzeXsvX9z9Eq5OAqtKtwDSvtmq7cYktmXgANSGutNzGmKb0aTqc4uA1zW6PQAUWwGMx%2FbcMtrKSADgYyiz9SYbiniGDWcKw6M%2Fl14mDIt8xrehoOqITR65IxRnHK9W1losEWLybHJpOO3SjdeoUKbqpBdQxGzKqSxa1bbTiyUjDO3u%2FD06X%2FyuEqd3RvkZDBV1LZJB1yGeVvq%2FXefr2JxOYHpzKRH9QofwthOTFwVld1g4QSy6B5FcUbOeb1jxs%2FubL24nAEuzsAyeZkyBvWZLqcuyQI7hFOyLSnp3ibaML2BbTvkER711b5tquxudfSIpDZ3lQWkJWE%2FlvU3rxKsbMWcvzHu93XZFdjWPf4ybMTKHRf7Ws71cENvIAe1aXqpfLkHsSfvUeBfoNopFHBHyNgwMWyuL3aAKkLcX2HMSZtZ9x5jUIcKmJk4WziYpBcwvXfobGOkF3cmxBZUu8iFGBuUbGM3QP0TMDcsAjXDN5PIjr3xmv%2FCbAVsRbThAKPmx6t3RLPjCERRqhefUzOUJCwMaLNXnAPpJa42cccNu9ieRav1j%2B8mCHJzDKDBVIdkMXAPu0gkuJxKSRltDRNOrUR5Mflnq3ezmYh%2FKr2DQz2jfNXm%2BSDbf70aTgT5XpHU2Oy5JrebjPnznCMwiKmhxwY6pgH1Vc32dv5jOSMeD3J%2FCk4t88fbBs4DfSjvvmjY9ui%2F4ZcqSOpL4d%2FDzQn2JeQ2kwJvsvGNP25cLNfEfgUU3RU2KBpCxCm8x6B4RZALOF9SjCG8HRnIukMBbB95WYLiJM4mP5XzYIxrx%2F6f2chQHm56LPb%2Bf4Qn%2F51nwJkWbznqHbqMDtmWrz3AtX4NVM%2BYlM8TmzIalgdRmGf3qT6dJkFMTKElqE16&X-Amz-Signature=70e77aa8a766a57d6135bd64b9ffc9bd0b84db3f8aa8cf68ac1f3238237c9f4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}


#### Params:

| **Name**          | **Type**             |
| ----------------- | -------------------- |
| `serial_port`     | string               |
| `serial_baudrate` | int (model specific) |
| `frame_id`        | string               |
| `scan_mode`       | string               |

#### description:

publishes the `/scan` topic for RPLIDAR products

[official docs link](https://github.com/Slamtec/rplidar_ros/tree/ros2#slamtec-lidar-ros2-package)

{{% /alert %}}

Remember to disable gazebo nodes for physical setup

```python "5-5","10-13"

    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        # ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        # gz_server,
        # ros_gz_bridge,
        # spawn_entity,
    ])
```

<details>
  <summary>{{< markdownify >}}Finding Lidar USB port:{{< /markdownify >}}</summary>
  
```bash
ls /dev/ttyUSB*
```

</details>



{{% alert context="info" %}}

If you are developing in a dev container you have to forward the USB port into the dev container.

in the file `.devcontainer/devcontainer.json` add this line into the  `runArgs:` array

`"--device=/dev/tty<your device>",` to find what your device is outside of your devcontainer, probably in your WSL shell, run `ls /dev/tty*` to find which tty device to use. If you are not sure unplug and re run the command to see the difference.

you may also need to run `sudo chmod 777 /dev/tty<your device>` to use the device depending on how your hardware is setup

{{% /alert %}}

To launch the Lidar node use this command below.

 

{{% alert context="warning" %}}

# NOTE: YOUR RPLIDAR MODEL MIGHT BE DIFFERENT

I am using the a2m8 model so I run the launch file below.

However, your model may be different so please look at this guide to find which launch file to run.

[https://github.com/Slamtec/rplidar_ros/tree/ros2#run-rplidar-node-and-view-in-the-rviz](https://github.com/Slamtec/rplidar_ros/tree/ros2#run-rplidar-node-and-view-in-the-rviz)

{{% /alert %}}

```bash
ros2 launch rplidar_ros view_rplidar_a2m8_launch.py scan_mode:=Boost serial_port:=/dev/ttyUSB0
```

```xml
ros2 launch mbot_pkg display.launch.py
```

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V357ZUZ4%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIBg%2F74x0eN%2FzKgnQoTaYoWyJq4Yas0AD%2FPGh8q7eFUNQAiATjoV%2FY9mNoy4IKHdLqTUffYoy0BiHNUA2exlgcFLqHCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzeXsvX9z9Eq5OAqtKtwDSvtmq7cYktmXgANSGutNzGmKb0aTqc4uA1zW6PQAUWwGMx%2FbcMtrKSADgYyiz9SYbiniGDWcKw6M%2Fl14mDIt8xrehoOqITR65IxRnHK9W1losEWLybHJpOO3SjdeoUKbqpBdQxGzKqSxa1bbTiyUjDO3u%2FD06X%2FyuEqd3RvkZDBV1LZJB1yGeVvq%2FXefr2JxOYHpzKRH9QofwthOTFwVld1g4QSy6B5FcUbOeb1jxs%2FubL24nAEuzsAyeZkyBvWZLqcuyQI7hFOyLSnp3ibaML2BbTvkER711b5tquxudfSIpDZ3lQWkJWE%2FlvU3rxKsbMWcvzHu93XZFdjWPf4ybMTKHRf7Ws71cENvIAe1aXqpfLkHsSfvUeBfoNopFHBHyNgwMWyuL3aAKkLcX2HMSZtZ9x5jUIcKmJk4WziYpBcwvXfobGOkF3cmxBZUu8iFGBuUbGM3QP0TMDcsAjXDN5PIjr3xmv%2FCbAVsRbThAKPmx6t3RLPjCERRqhefUzOUJCwMaLNXnAPpJa42cccNu9ieRav1j%2B8mCHJzDKDBVIdkMXAPu0gkuJxKSRltDRNOrUR5Mflnq3ezmYh%2FKr2DQz2jfNXm%2BSDbf70aTgT5XpHU2Oy5JrebjPnznCMwiKmhxwY6pgH1Vc32dv5jOSMeD3J%2FCk4t88fbBs4DfSjvvmjY9ui%2F4ZcqSOpL4d%2FDzQn2JeQ2kwJvsvGNP25cLNfEfgUU3RU2KBpCxCm8x6B4RZALOF9SjCG8HRnIukMBbB95WYLiJM4mP5XzYIxrx%2F6f2chQHm56LPb%2Bf4Qn%2F51nwJkWbznqHbqMDtmWrz3AtX4NVM%2BYlM8TmzIalgdRmGf3qT6dJkFMTKElqE16&X-Amz-Signature=5b50a6a62b0e3470864b304ec04bc6fe75598f3b32972fb53254461c5235e1cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V357ZUZ4%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIBg%2F74x0eN%2FzKgnQoTaYoWyJq4Yas0AD%2FPGh8q7eFUNQAiATjoV%2FY9mNoy4IKHdLqTUffYoy0BiHNUA2exlgcFLqHCqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzeXsvX9z9Eq5OAqtKtwDSvtmq7cYktmXgANSGutNzGmKb0aTqc4uA1zW6PQAUWwGMx%2FbcMtrKSADgYyiz9SYbiniGDWcKw6M%2Fl14mDIt8xrehoOqITR65IxRnHK9W1losEWLybHJpOO3SjdeoUKbqpBdQxGzKqSxa1bbTiyUjDO3u%2FD06X%2FyuEqd3RvkZDBV1LZJB1yGeVvq%2FXefr2JxOYHpzKRH9QofwthOTFwVld1g4QSy6B5FcUbOeb1jxs%2FubL24nAEuzsAyeZkyBvWZLqcuyQI7hFOyLSnp3ibaML2BbTvkER711b5tquxudfSIpDZ3lQWkJWE%2FlvU3rxKsbMWcvzHu93XZFdjWPf4ybMTKHRf7Ws71cENvIAe1aXqpfLkHsSfvUeBfoNopFHBHyNgwMWyuL3aAKkLcX2HMSZtZ9x5jUIcKmJk4WziYpBcwvXfobGOkF3cmxBZUu8iFGBuUbGM3QP0TMDcsAjXDN5PIjr3xmv%2FCbAVsRbThAKPmx6t3RLPjCERRqhefUzOUJCwMaLNXnAPpJa42cccNu9ieRav1j%2B8mCHJzDKDBVIdkMXAPu0gkuJxKSRltDRNOrUR5Mflnq3ezmYh%2FKr2DQz2jfNXm%2BSDbf70aTgT5XpHU2Oy5JrebjPnznCMwiKmhxwY6pgH1Vc32dv5jOSMeD3J%2FCk4t88fbBs4DfSjvvmjY9ui%2F4ZcqSOpL4d%2FDzQn2JeQ2kwJvsvGNP25cLNfEfgUU3RU2KBpCxCm8x6B4RZALOF9SjCG8HRnIukMBbB95WYLiJM4mP5XzYIxrx%2F6f2chQHm56LPb%2Bf4Qn%2F51nwJkWbznqHbqMDtmWrz3AtX4NVM%2BYlM8TmzIalgdRmGf3qT6dJkFMTKElqE16&X-Amz-Signature=80dda6bc562f89c6d1c2c3d0aa1d36af1118d35a16935f88d89f3eb280dc61df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Adding RPLidar to launch

idk tell them to look at the launch file to see which exact prams to put in

```python "5-14","30-30"

 def generate_launch_description():
		 ...
		 
     lidar_node = Node(
        package='rplidar_ros',
        executable='rplidar_node',
        name='rplidar_node',
        parameters=[{'channel_type': 'serial',
                     'serial_port': '/dev/ttyUSB0', #recomended to do /dev/serial/by-path/...
                     'serial_baudrate': 115200,
                     'frame_id': 'lidar_link',
                     'scan_mode': 'Boost'}],
        output='screen')

 
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        # ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        # gz_server,
        # ros_gz_bridge,
        # spawn_entity,
        
        lidar_node # lidar for physical setup 
    ])
```

**Result:**

```xml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```
