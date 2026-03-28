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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW7O364S%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHn%2BWl2qhKMWVoSX7MEIQCkR0C56u2RaGsZteIhVA40%2BAiBWm5GQz4kLWD0WWD69LiEJWwZt0AUK5Dv2xbs4WbLAhyqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8SqEeow2iJCwWzzPKtwDTZXM8B6nBnRfG85UFLSilwODSj%2B5VkDU1tC76QRCUhVDKgrmK3e8tHPIREZsY5n6ua23yGR5jl1CWdpBXNxWbPKeOF651Z97zEPq6La3ta7%2FACkYpoz%2Bc5VMr%2FzNfZ0R9DLiceBlBP7Utyb1PuJ%2BzfvbTfVuQfdH%2Br3ocGfdHP8PkaSlOVXsogJMxl3vQFoEfMdwHAnobyzZ566qrfdR4HKj9finw9LxynDyrrugIkbSFjLpLAByreVdw7MrqXhe6wzujCTH8m2%2FxNLzmaUX1g8yOPlGHWYDh1QX0%2FVrS6mYZMjpNOqMAM68m6whasw8CX3esSFwh0PI%2FPDjqxqKShpWgf9HsA4DNylfYCIOV1PIT%2FXqfYO9GsTzoY80q0H640FsL61hhMkmk4W6WJReoDZNOpISYdT3%2FwSPwVjr%2Fc42FNgzsPhHVJBlSd4MCXkgPpowa8J6B6uqEMMavnUvUmyt%2B2j5b%2BI1fAG%2BpGrz%2FNuTh3qFyGDEwFR6ZUYaWTI%2FeVsuBbA9F8VkBaz%2F%2BHdS3OfLjY3LpKOf1N9nMoOO7kMLppOcPKG%2FkguttBLbEepjssSLUJ2KWgm20dmFobweAJ%2BogQFAfctEc3AWnUZA23%2FBeeAJspr7UDS8YGkwle2czgY6pgEqc8rPV6wHIQEmGScncVII9OInMmxkBvg5zYjykh5xFCJGP1iM2TwPcH7BPyiWIEYtFCWC%2FQ8Twyg2vRaO%2BN27NLpFDHQha%2BkOK1vkK9eoBLSIhTCnrV6%2BHPkzx5dEvrBNUMQRvMn9KTdXgyAySroGNvkVjw6gFktP83b5s7X9Et8jfLUvF26oasWF1oUs7qsAZG6dnzaciz6DkZjUA4HOn6zoGAtH&X-Amz-Signature=74abae318f9aa29971e0a38dabd914d7e992660692614beb92d28ca60caad225&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKCSVPAU%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDkgjyZnPX1dGlp2QdQC7Zr3wzR%2B2AduVSncO8wWHkF7wIgRESUn%2FlY8RHI8ze0C9%2FzE%2FKUTwK3ZgHF6FaiUy7sDokqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOhYgjlfpcsd0GK6BSrcA3GRoqd7Yll4iIRhUmrZYWIb3VwKBzSlIbkKHRBlvQBLRMAhtBTXPbE7h94xyIj9GWU2ttOn6ilHBYheVYYuTBhV%2BePlrlhjcmEh8%2FhRvoMGxSj7DY8G1ZM54nMUc9g5YwpRhxOAdogNRTEAap1T3AiKnNHXid%2BLwNOr%2FNjpwwUUbLYamkgLwquRBFmZTq4Y%2BqHzFvmiWdXwuOnaSHMDNzcjCek5jBsJk%2FO79qA%2F2KsG9ulo14fANdIw8vL4fiNCrJQfNT4q66icTjirwVGzaQyirQq2USWsJYjEj3%2FNWFuVMvSj9ZKAUf%2FSo9BQMUvMb2548hjgqZ7h2ygny2RHvVkFa6knyLO5dLqcbgGM1WHiNdEwgX7gftLfUO%2B8Mzsp2%2BDlevf624MXu%2FEpoO0j5hYtb6cc1Mi05wYudQ3cKMEEJaQFXc9E6XT%2Fl8oDIp8x6vepRTASwmxPf6onaVKglN0CbfEZv8YrwGNmttHvBlo%2By1Zvq8UQrH6%2B7Hjpwx1yMLmVOg2ernz7Td6RdNe2asBdrTW%2Br9i3Qh%2FGx83%2BQfb%2BFfm5sXX%2BcHUImI%2BRDIYTGZOc416bBU8RB90sxLKSkWEAOxMWBkQNyEhwAN%2FaJQgS%2FLQu2i2LU%2FRA82TVMOrsnM4GOqUB%2FUOPoltTBo6eu4bCuRzE%2FshzENKND1qJnV8mfYnR9eBUkTIGHLyOku7lQo%2FqCtICX2fk4YSD0RUPk1HGfnaTxaco4VNzabInAWi1c6y%2BqSwyh380ZaRwpmlu%2FhyWzWveOVTqrKB4qh2%2Fnti1wrQn%2FoZEUc6BgI7scVi0R9OHu%2BTl%2BU%2F9Yl5ogPNyGr2e11diX5Y4ccUgaKP0bCglr3%2BIMlg6mfV%2B&X-Amz-Signature=746944566040fc0d291393015687f8fe68fe03e558c3a4b2f08ccb67dcaaf1fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKCSVPAU%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDkgjyZnPX1dGlp2QdQC7Zr3wzR%2B2AduVSncO8wWHkF7wIgRESUn%2FlY8RHI8ze0C9%2FzE%2FKUTwK3ZgHF6FaiUy7sDokqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOhYgjlfpcsd0GK6BSrcA3GRoqd7Yll4iIRhUmrZYWIb3VwKBzSlIbkKHRBlvQBLRMAhtBTXPbE7h94xyIj9GWU2ttOn6ilHBYheVYYuTBhV%2BePlrlhjcmEh8%2FhRvoMGxSj7DY8G1ZM54nMUc9g5YwpRhxOAdogNRTEAap1T3AiKnNHXid%2BLwNOr%2FNjpwwUUbLYamkgLwquRBFmZTq4Y%2BqHzFvmiWdXwuOnaSHMDNzcjCek5jBsJk%2FO79qA%2F2KsG9ulo14fANdIw8vL4fiNCrJQfNT4q66icTjirwVGzaQyirQq2USWsJYjEj3%2FNWFuVMvSj9ZKAUf%2FSo9BQMUvMb2548hjgqZ7h2ygny2RHvVkFa6knyLO5dLqcbgGM1WHiNdEwgX7gftLfUO%2B8Mzsp2%2BDlevf624MXu%2FEpoO0j5hYtb6cc1Mi05wYudQ3cKMEEJaQFXc9E6XT%2Fl8oDIp8x6vepRTASwmxPf6onaVKglN0CbfEZv8YrwGNmttHvBlo%2By1Zvq8UQrH6%2B7Hjpwx1yMLmVOg2ernz7Td6RdNe2asBdrTW%2Br9i3Qh%2FGx83%2BQfb%2BFfm5sXX%2BcHUImI%2BRDIYTGZOc416bBU8RB90sxLKSkWEAOxMWBkQNyEhwAN%2FaJQgS%2FLQu2i2LU%2FRA82TVMOrsnM4GOqUB%2FUOPoltTBo6eu4bCuRzE%2FshzENKND1qJnV8mfYnR9eBUkTIGHLyOku7lQo%2FqCtICX2fk4YSD0RUPk1HGfnaTxaco4VNzabInAWi1c6y%2BqSwyh380ZaRwpmlu%2FhyWzWveOVTqrKB4qh2%2Fnti1wrQn%2FoZEUc6BgI7scVi0R9OHu%2BTl%2BU%2F9Yl5ogPNyGr2e11diX5Y4ccUgaKP0bCglr3%2BIMlg6mfV%2B&X-Amz-Signature=042e0d9c9651ce259080e40ac51efb950436af4826f70f3b5a6fd674c1895ef9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKCSVPAU%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDkgjyZnPX1dGlp2QdQC7Zr3wzR%2B2AduVSncO8wWHkF7wIgRESUn%2FlY8RHI8ze0C9%2FzE%2FKUTwK3ZgHF6FaiUy7sDokqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOhYgjlfpcsd0GK6BSrcA3GRoqd7Yll4iIRhUmrZYWIb3VwKBzSlIbkKHRBlvQBLRMAhtBTXPbE7h94xyIj9GWU2ttOn6ilHBYheVYYuTBhV%2BePlrlhjcmEh8%2FhRvoMGxSj7DY8G1ZM54nMUc9g5YwpRhxOAdogNRTEAap1T3AiKnNHXid%2BLwNOr%2FNjpwwUUbLYamkgLwquRBFmZTq4Y%2BqHzFvmiWdXwuOnaSHMDNzcjCek5jBsJk%2FO79qA%2F2KsG9ulo14fANdIw8vL4fiNCrJQfNT4q66icTjirwVGzaQyirQq2USWsJYjEj3%2FNWFuVMvSj9ZKAUf%2FSo9BQMUvMb2548hjgqZ7h2ygny2RHvVkFa6knyLO5dLqcbgGM1WHiNdEwgX7gftLfUO%2B8Mzsp2%2BDlevf624MXu%2FEpoO0j5hYtb6cc1Mi05wYudQ3cKMEEJaQFXc9E6XT%2Fl8oDIp8x6vepRTASwmxPf6onaVKglN0CbfEZv8YrwGNmttHvBlo%2By1Zvq8UQrH6%2B7Hjpwx1yMLmVOg2ernz7Td6RdNe2asBdrTW%2Br9i3Qh%2FGx83%2BQfb%2BFfm5sXX%2BcHUImI%2BRDIYTGZOc416bBU8RB90sxLKSkWEAOxMWBkQNyEhwAN%2FaJQgS%2FLQu2i2LU%2FRA82TVMOrsnM4GOqUB%2FUOPoltTBo6eu4bCuRzE%2FshzENKND1qJnV8mfYnR9eBUkTIGHLyOku7lQo%2FqCtICX2fk4YSD0RUPk1HGfnaTxaco4VNzabInAWi1c6y%2BqSwyh380ZaRwpmlu%2FhyWzWveOVTqrKB4qh2%2Fnti1wrQn%2FoZEUc6BgI7scVi0R9OHu%2BTl%2BU%2F9Yl5ogPNyGr2e11diX5Y4ccUgaKP0bCglr3%2BIMlg6mfV%2B&X-Amz-Signature=057e00bf385efa6e0fc5e01cf14ecc5707f4094675478c3518380973ff3564eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKCSVPAU%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDkgjyZnPX1dGlp2QdQC7Zr3wzR%2B2AduVSncO8wWHkF7wIgRESUn%2FlY8RHI8ze0C9%2FzE%2FKUTwK3ZgHF6FaiUy7sDokqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOhYgjlfpcsd0GK6BSrcA3GRoqd7Yll4iIRhUmrZYWIb3VwKBzSlIbkKHRBlvQBLRMAhtBTXPbE7h94xyIj9GWU2ttOn6ilHBYheVYYuTBhV%2BePlrlhjcmEh8%2FhRvoMGxSj7DY8G1ZM54nMUc9g5YwpRhxOAdogNRTEAap1T3AiKnNHXid%2BLwNOr%2FNjpwwUUbLYamkgLwquRBFmZTq4Y%2BqHzFvmiWdXwuOnaSHMDNzcjCek5jBsJk%2FO79qA%2F2KsG9ulo14fANdIw8vL4fiNCrJQfNT4q66icTjirwVGzaQyirQq2USWsJYjEj3%2FNWFuVMvSj9ZKAUf%2FSo9BQMUvMb2548hjgqZ7h2ygny2RHvVkFa6knyLO5dLqcbgGM1WHiNdEwgX7gftLfUO%2B8Mzsp2%2BDlevf624MXu%2FEpoO0j5hYtb6cc1Mi05wYudQ3cKMEEJaQFXc9E6XT%2Fl8oDIp8x6vepRTASwmxPf6onaVKglN0CbfEZv8YrwGNmttHvBlo%2By1Zvq8UQrH6%2B7Hjpwx1yMLmVOg2ernz7Td6RdNe2asBdrTW%2Br9i3Qh%2FGx83%2BQfb%2BFfm5sXX%2BcHUImI%2BRDIYTGZOc416bBU8RB90sxLKSkWEAOxMWBkQNyEhwAN%2FaJQgS%2FLQu2i2LU%2FRA82TVMOrsnM4GOqUB%2FUOPoltTBo6eu4bCuRzE%2FshzENKND1qJnV8mfYnR9eBUkTIGHLyOku7lQo%2FqCtICX2fk4YSD0RUPk1HGfnaTxaco4VNzabInAWi1c6y%2BqSwyh380ZaRwpmlu%2FhyWzWveOVTqrKB4qh2%2Fnti1wrQn%2FoZEUc6BgI7scVi0R9OHu%2BTl%2BU%2F9Yl5ogPNyGr2e11diX5Y4ccUgaKP0bCglr3%2BIMlg6mfV%2B&X-Amz-Signature=8bf1d5fb750b6e3f49e4c3c66533cea3e03876ec62175fc1a374a215489c6c68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKCSVPAU%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDkgjyZnPX1dGlp2QdQC7Zr3wzR%2B2AduVSncO8wWHkF7wIgRESUn%2FlY8RHI8ze0C9%2FzE%2FKUTwK3ZgHF6FaiUy7sDokqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOhYgjlfpcsd0GK6BSrcA3GRoqd7Yll4iIRhUmrZYWIb3VwKBzSlIbkKHRBlvQBLRMAhtBTXPbE7h94xyIj9GWU2ttOn6ilHBYheVYYuTBhV%2BePlrlhjcmEh8%2FhRvoMGxSj7DY8G1ZM54nMUc9g5YwpRhxOAdogNRTEAap1T3AiKnNHXid%2BLwNOr%2FNjpwwUUbLYamkgLwquRBFmZTq4Y%2BqHzFvmiWdXwuOnaSHMDNzcjCek5jBsJk%2FO79qA%2F2KsG9ulo14fANdIw8vL4fiNCrJQfNT4q66icTjirwVGzaQyirQq2USWsJYjEj3%2FNWFuVMvSj9ZKAUf%2FSo9BQMUvMb2548hjgqZ7h2ygny2RHvVkFa6knyLO5dLqcbgGM1WHiNdEwgX7gftLfUO%2B8Mzsp2%2BDlevf624MXu%2FEpoO0j5hYtb6cc1Mi05wYudQ3cKMEEJaQFXc9E6XT%2Fl8oDIp8x6vepRTASwmxPf6onaVKglN0CbfEZv8YrwGNmttHvBlo%2By1Zvq8UQrH6%2B7Hjpwx1yMLmVOg2ernz7Td6RdNe2asBdrTW%2Br9i3Qh%2FGx83%2BQfb%2BFfm5sXX%2BcHUImI%2BRDIYTGZOc416bBU8RB90sxLKSkWEAOxMWBkQNyEhwAN%2FaJQgS%2FLQu2i2LU%2FRA82TVMOrsnM4GOqUB%2FUOPoltTBo6eu4bCuRzE%2FshzENKND1qJnV8mfYnR9eBUkTIGHLyOku7lQo%2FqCtICX2fk4YSD0RUPk1HGfnaTxaco4VNzabInAWi1c6y%2BqSwyh380ZaRwpmlu%2FhyWzWveOVTqrKB4qh2%2Fnti1wrQn%2FoZEUc6BgI7scVi0R9OHu%2BTl%2BU%2F9Yl5ogPNyGr2e11diX5Y4ccUgaKP0bCglr3%2BIMlg6mfV%2B&X-Amz-Signature=a0eeff7b902043a899866c3ce7239dd1fc286e336f5bb6f0a35e0be587b3384f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKCSVPAU%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDkgjyZnPX1dGlp2QdQC7Zr3wzR%2B2AduVSncO8wWHkF7wIgRESUn%2FlY8RHI8ze0C9%2FzE%2FKUTwK3ZgHF6FaiUy7sDokqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOhYgjlfpcsd0GK6BSrcA3GRoqd7Yll4iIRhUmrZYWIb3VwKBzSlIbkKHRBlvQBLRMAhtBTXPbE7h94xyIj9GWU2ttOn6ilHBYheVYYuTBhV%2BePlrlhjcmEh8%2FhRvoMGxSj7DY8G1ZM54nMUc9g5YwpRhxOAdogNRTEAap1T3AiKnNHXid%2BLwNOr%2FNjpwwUUbLYamkgLwquRBFmZTq4Y%2BqHzFvmiWdXwuOnaSHMDNzcjCek5jBsJk%2FO79qA%2F2KsG9ulo14fANdIw8vL4fiNCrJQfNT4q66icTjirwVGzaQyirQq2USWsJYjEj3%2FNWFuVMvSj9ZKAUf%2FSo9BQMUvMb2548hjgqZ7h2ygny2RHvVkFa6knyLO5dLqcbgGM1WHiNdEwgX7gftLfUO%2B8Mzsp2%2BDlevf624MXu%2FEpoO0j5hYtb6cc1Mi05wYudQ3cKMEEJaQFXc9E6XT%2Fl8oDIp8x6vepRTASwmxPf6onaVKglN0CbfEZv8YrwGNmttHvBlo%2By1Zvq8UQrH6%2B7Hjpwx1yMLmVOg2ernz7Td6RdNe2asBdrTW%2Br9i3Qh%2FGx83%2BQfb%2BFfm5sXX%2BcHUImI%2BRDIYTGZOc416bBU8RB90sxLKSkWEAOxMWBkQNyEhwAN%2FaJQgS%2FLQu2i2LU%2FRA82TVMOrsnM4GOqUB%2FUOPoltTBo6eu4bCuRzE%2FshzENKND1qJnV8mfYnR9eBUkTIGHLyOku7lQo%2FqCtICX2fk4YSD0RUPk1HGfnaTxaco4VNzabInAWi1c6y%2BqSwyh380ZaRwpmlu%2FhyWzWveOVTqrKB4qh2%2Fnti1wrQn%2FoZEUc6BgI7scVi0R9OHu%2BTl%2BU%2F9Yl5ogPNyGr2e11diX5Y4ccUgaKP0bCglr3%2BIMlg6mfV%2B&X-Amz-Signature=5928294894e9aad9075dc0ac18fbdf542d66dea4f40cc593e6fc0f50f2596c6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKCSVPAU%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDkgjyZnPX1dGlp2QdQC7Zr3wzR%2B2AduVSncO8wWHkF7wIgRESUn%2FlY8RHI8ze0C9%2FzE%2FKUTwK3ZgHF6FaiUy7sDokqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOhYgjlfpcsd0GK6BSrcA3GRoqd7Yll4iIRhUmrZYWIb3VwKBzSlIbkKHRBlvQBLRMAhtBTXPbE7h94xyIj9GWU2ttOn6ilHBYheVYYuTBhV%2BePlrlhjcmEh8%2FhRvoMGxSj7DY8G1ZM54nMUc9g5YwpRhxOAdogNRTEAap1T3AiKnNHXid%2BLwNOr%2FNjpwwUUbLYamkgLwquRBFmZTq4Y%2BqHzFvmiWdXwuOnaSHMDNzcjCek5jBsJk%2FO79qA%2F2KsG9ulo14fANdIw8vL4fiNCrJQfNT4q66icTjirwVGzaQyirQq2USWsJYjEj3%2FNWFuVMvSj9ZKAUf%2FSo9BQMUvMb2548hjgqZ7h2ygny2RHvVkFa6knyLO5dLqcbgGM1WHiNdEwgX7gftLfUO%2B8Mzsp2%2BDlevf624MXu%2FEpoO0j5hYtb6cc1Mi05wYudQ3cKMEEJaQFXc9E6XT%2Fl8oDIp8x6vepRTASwmxPf6onaVKglN0CbfEZv8YrwGNmttHvBlo%2By1Zvq8UQrH6%2B7Hjpwx1yMLmVOg2ernz7Td6RdNe2asBdrTW%2Br9i3Qh%2FGx83%2BQfb%2BFfm5sXX%2BcHUImI%2BRDIYTGZOc416bBU8RB90sxLKSkWEAOxMWBkQNyEhwAN%2FaJQgS%2FLQu2i2LU%2FRA82TVMOrsnM4GOqUB%2FUOPoltTBo6eu4bCuRzE%2FshzENKND1qJnV8mfYnR9eBUkTIGHLyOku7lQo%2FqCtICX2fk4YSD0RUPk1HGfnaTxaco4VNzabInAWi1c6y%2BqSwyh380ZaRwpmlu%2FhyWzWveOVTqrKB4qh2%2Fnti1wrQn%2FoZEUc6BgI7scVi0R9OHu%2BTl%2BU%2F9Yl5ogPNyGr2e11diX5Y4ccUgaKP0bCglr3%2BIMlg6mfV%2B&X-Amz-Signature=f3cb4b088e262058d28703c1770521f1c9b1571db46ae3786e63c6ddf0ca00ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKCSVPAU%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDkgjyZnPX1dGlp2QdQC7Zr3wzR%2B2AduVSncO8wWHkF7wIgRESUn%2FlY8RHI8ze0C9%2FzE%2FKUTwK3ZgHF6FaiUy7sDokqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOhYgjlfpcsd0GK6BSrcA3GRoqd7Yll4iIRhUmrZYWIb3VwKBzSlIbkKHRBlvQBLRMAhtBTXPbE7h94xyIj9GWU2ttOn6ilHBYheVYYuTBhV%2BePlrlhjcmEh8%2FhRvoMGxSj7DY8G1ZM54nMUc9g5YwpRhxOAdogNRTEAap1T3AiKnNHXid%2BLwNOr%2FNjpwwUUbLYamkgLwquRBFmZTq4Y%2BqHzFvmiWdXwuOnaSHMDNzcjCek5jBsJk%2FO79qA%2F2KsG9ulo14fANdIw8vL4fiNCrJQfNT4q66icTjirwVGzaQyirQq2USWsJYjEj3%2FNWFuVMvSj9ZKAUf%2FSo9BQMUvMb2548hjgqZ7h2ygny2RHvVkFa6knyLO5dLqcbgGM1WHiNdEwgX7gftLfUO%2B8Mzsp2%2BDlevf624MXu%2FEpoO0j5hYtb6cc1Mi05wYudQ3cKMEEJaQFXc9E6XT%2Fl8oDIp8x6vepRTASwmxPf6onaVKglN0CbfEZv8YrwGNmttHvBlo%2By1Zvq8UQrH6%2B7Hjpwx1yMLmVOg2ernz7Td6RdNe2asBdrTW%2Br9i3Qh%2FGx83%2BQfb%2BFfm5sXX%2BcHUImI%2BRDIYTGZOc416bBU8RB90sxLKSkWEAOxMWBkQNyEhwAN%2FaJQgS%2FLQu2i2LU%2FRA82TVMOrsnM4GOqUB%2FUOPoltTBo6eu4bCuRzE%2FshzENKND1qJnV8mfYnR9eBUkTIGHLyOku7lQo%2FqCtICX2fk4YSD0RUPk1HGfnaTxaco4VNzabInAWi1c6y%2BqSwyh380ZaRwpmlu%2FhyWzWveOVTqrKB4qh2%2Fnti1wrQn%2FoZEUc6BgI7scVi0R9OHu%2BTl%2BU%2F9Yl5ogPNyGr2e11diX5Y4ccUgaKP0bCglr3%2BIMlg6mfV%2B&X-Amz-Signature=71ff5ad38c41014ff3ac3cc9a6db45040a5b69b9649a97d5ed2769a9540b166c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKCSVPAU%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDkgjyZnPX1dGlp2QdQC7Zr3wzR%2B2AduVSncO8wWHkF7wIgRESUn%2FlY8RHI8ze0C9%2FzE%2FKUTwK3ZgHF6FaiUy7sDokqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOhYgjlfpcsd0GK6BSrcA3GRoqd7Yll4iIRhUmrZYWIb3VwKBzSlIbkKHRBlvQBLRMAhtBTXPbE7h94xyIj9GWU2ttOn6ilHBYheVYYuTBhV%2BePlrlhjcmEh8%2FhRvoMGxSj7DY8G1ZM54nMUc9g5YwpRhxOAdogNRTEAap1T3AiKnNHXid%2BLwNOr%2FNjpwwUUbLYamkgLwquRBFmZTq4Y%2BqHzFvmiWdXwuOnaSHMDNzcjCek5jBsJk%2FO79qA%2F2KsG9ulo14fANdIw8vL4fiNCrJQfNT4q66icTjirwVGzaQyirQq2USWsJYjEj3%2FNWFuVMvSj9ZKAUf%2FSo9BQMUvMb2548hjgqZ7h2ygny2RHvVkFa6knyLO5dLqcbgGM1WHiNdEwgX7gftLfUO%2B8Mzsp2%2BDlevf624MXu%2FEpoO0j5hYtb6cc1Mi05wYudQ3cKMEEJaQFXc9E6XT%2Fl8oDIp8x6vepRTASwmxPf6onaVKglN0CbfEZv8YrwGNmttHvBlo%2By1Zvq8UQrH6%2B7Hjpwx1yMLmVOg2ernz7Td6RdNe2asBdrTW%2Br9i3Qh%2FGx83%2BQfb%2BFfm5sXX%2BcHUImI%2BRDIYTGZOc416bBU8RB90sxLKSkWEAOxMWBkQNyEhwAN%2FaJQgS%2FLQu2i2LU%2FRA82TVMOrsnM4GOqUB%2FUOPoltTBo6eu4bCuRzE%2FshzENKND1qJnV8mfYnR9eBUkTIGHLyOku7lQo%2FqCtICX2fk4YSD0RUPk1HGfnaTxaco4VNzabInAWi1c6y%2BqSwyh380ZaRwpmlu%2FhyWzWveOVTqrKB4qh2%2Fnti1wrQn%2FoZEUc6BgI7scVi0R9OHu%2BTl%2BU%2F9Yl5ogPNyGr2e11diX5Y4ccUgaKP0bCglr3%2BIMlg6mfV%2B&X-Amz-Signature=3c1e93283ad46792d8f62dac7a2a62dda99be16c8d18293f53b1251ea63457c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKCSVPAU%2F20260328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260328T021140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDkgjyZnPX1dGlp2QdQC7Zr3wzR%2B2AduVSncO8wWHkF7wIgRESUn%2FlY8RHI8ze0C9%2FzE%2FKUTwK3ZgHF6FaiUy7sDokqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOhYgjlfpcsd0GK6BSrcA3GRoqd7Yll4iIRhUmrZYWIb3VwKBzSlIbkKHRBlvQBLRMAhtBTXPbE7h94xyIj9GWU2ttOn6ilHBYheVYYuTBhV%2BePlrlhjcmEh8%2FhRvoMGxSj7DY8G1ZM54nMUc9g5YwpRhxOAdogNRTEAap1T3AiKnNHXid%2BLwNOr%2FNjpwwUUbLYamkgLwquRBFmZTq4Y%2BqHzFvmiWdXwuOnaSHMDNzcjCek5jBsJk%2FO79qA%2F2KsG9ulo14fANdIw8vL4fiNCrJQfNT4q66icTjirwVGzaQyirQq2USWsJYjEj3%2FNWFuVMvSj9ZKAUf%2FSo9BQMUvMb2548hjgqZ7h2ygny2RHvVkFa6knyLO5dLqcbgGM1WHiNdEwgX7gftLfUO%2B8Mzsp2%2BDlevf624MXu%2FEpoO0j5hYtb6cc1Mi05wYudQ3cKMEEJaQFXc9E6XT%2Fl8oDIp8x6vepRTASwmxPf6onaVKglN0CbfEZv8YrwGNmttHvBlo%2By1Zvq8UQrH6%2B7Hjpwx1yMLmVOg2ernz7Td6RdNe2asBdrTW%2Br9i3Qh%2FGx83%2BQfb%2BFfm5sXX%2BcHUImI%2BRDIYTGZOc416bBU8RB90sxLKSkWEAOxMWBkQNyEhwAN%2FaJQgS%2FLQu2i2LU%2FRA82TVMOrsnM4GOqUB%2FUOPoltTBo6eu4bCuRzE%2FshzENKND1qJnV8mfYnR9eBUkTIGHLyOku7lQo%2FqCtICX2fk4YSD0RUPk1HGfnaTxaco4VNzabInAWi1c6y%2BqSwyh380ZaRwpmlu%2FhyWzWveOVTqrKB4qh2%2Fnti1wrQn%2FoZEUc6BgI7scVi0R9OHu%2BTl%2BU%2F9Yl5ogPNyGr2e11diX5Y4ccUgaKP0bCglr3%2BIMlg6mfV%2B&X-Amz-Signature=e1149e3f99e4e0a01756d27b4e2e96f6cee711ea1fc894cc80553b5b985c3266&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
