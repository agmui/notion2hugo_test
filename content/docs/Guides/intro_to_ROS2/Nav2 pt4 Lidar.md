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
      <summary>What is Lidar?</summary>
      Lidar (light detection and ranging) is using lases to determine how far objects are.
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

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ6MRPBD%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDkEr0NPHBs9RBH2yBAyXH8sl0s6GOS0WZMFCsohHyacgIhANQk2Q1aWmkhHeXxFcKn6eZ9rqAYqahuNcpN3mSl%2BCnwKv8DCCoQABoMNjM3NDIzMTgzODA1Igx%2Bxn4hhhXc0T%2FWW5kq3AOlCadGG5w6pea%2BVVnhBvGabCFGlPe%2BslHKyNN48QIWQm4WXc5EL2dOCNApLIz49%2Fw23a2K3FiK3HPJCVwIdvPiokOdFEzO3SuY6WbCR9kGxt%2FT%2B76HixLM3OCSo%2BEu4NrAKS0K%2BhZa6geFpTW5ApDbjKBIJArcyUmxFWEBHWks7uT7GkQ%2BWZ%2FGjXNZBsKP1HZ5oXotj8LRYEbwBjwNCK%2Bs0BpitD4IYSIKvJqIcj6c6MbsLCEK%2BpJ7UAMj8tQRtUwXZAaokdygSkUtLsFSy%2BW8Nye%2FcW9grjAfxyjxSVodDZNPwR1u3XPCJGxpJIVmK1jmhVt6gMEh0fWfpZ7j6ITrD4K%2B%2B5w1BwSZB%2Bv5kOlU3sO37zyDsa3GedNuAjPUQXjPeAD8%2BJ60MrUl6jffBbe4ymH0C1d%2FfJJmcvwfvJ3l4aRWOOmlmU6nMYRn42PthaGve0rPMD86JlwYDdnfjl4FTr9i6Qog87vC3j3si7jne7mnY1%2Fd74ITAuQWT3yqfT3hBf8omfkzltYHWmJOICm4Hx1adCUFeSaJInFPKyhI3yWwiCjhbOfzzHD%2B66p3ye01qvPsvGsfHlQLfDZiDJ%2F1zXpZvRO5XKQbmtT5lAEAqkXQmOcYgZYMXyNMcjCPn%2FHEBjqkAbOytKWmhI2E%2FS7tIGE3M0CHe1h5NvraNOuUUjzE9OcJ1sZ8piEjjVuAqZbTYJnkhJvRWwWjBUu5isnOPx6LK3QR2AU2mlwLLdT3S%2BYQtV3JrzsySOtQteiNiT0ow3owXnkb6xcsNDx%2FxFgWKatgXDdsRZwaHOxisNBhhe1jsjZrRjJZNnEPMM8nQzlBqtRQbokb3hz4eil1%2Bz2%2BXcdrWFasD1JS&X-Amz-Signature=93b2e1b94e200831d0abe5ef6c41ba5cbb6905ccbf10cd36a322cde1025ed64e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT3RZ2QF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWkgCShiesNmZAam74hp8h95l8szY9qqTTq%2FWf9ICheAIgSpmSxqcZJqdyuMvQEjd6sQqTTwAmOIOB4R8M1dfgQ3Mq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNA1Iqrdk10MRI8w4yrcA%2Fxb6BzXUZ6MAfe8deEAejZvH%2BO%2BP4%2Fz3d9CTSNaDxRBTPqrIWjB1e%2B2t2xa2ASKsHOuWGFcKBmetax8M6%2FiqCNQ%2BnHoRq5ev8L2cAdWtl6DXTLo%2FtxDBi3so7H60qfD3P9GqBz3lU2K2FAExCYLNw4trasE6jfWY4Wa9BXDxX352xEuWCjBDqBEGbEKopmwbDc8uOGMo8pER5YK55eDyRtnHUoVMdn3UL6BVinW%2Fm5t%2FNcMcYWef5YYdKsRTY3T%2FZMs71UZ7hI4MO4%2Fw5OONTsoJpTDicgO5ZZoFx9YNO91xZ0Fcp2W9pxMyqpQFgYul4018V5I8muoaci2MEmC7HKAGgjCZbizgtn2IK19wd5FmJP2tb%2BAjSaC265pfr1AyPKrHt55yu07GV%2F66tUKTWEnt70qRCMvBO4l%2FCsYDWoUVqSjpoTdVLEvtQqegJ8ppsM0UbY%2B3ncEdTKRPGHabH3%2BfouyX8BVragLRmadH5XEt07OWDW%2FJFcaRlao%2FU33DB4nkcvUHWvKvqfsTa0BO0Vz9P2CJSER2SLWO3KZH%2BcGIvPABodDblFXk8l%2FZ%2BrbATs4go3QPlIwWHDPO8f8SMW1YzAgEXRF%2B1z%2FP1q8mY0sml8fQC9WTT%2BOlWIWMM6e8cQGOqUBCqI1EtJP7sUmwtEynfbwQ1HbqvZGOO43dE5xZapRdi01EToV7Q7mCO4BMxrSbf39UpuYXUngKNF%2F9uxLKNkStwMYeh6Dcp5iNb5W2U6aC6k8RO81%2BbRlW8CP0v2q6LSDO%2FnvovkaR1KT8zBZEXqWBWZ2nXNotxmUUsZn98i2%2BVJXkvHpKBG2d650%2BjFdDJm03AR8XrCp9eCX70S9i2DQzDTc4ZG4&X-Amz-Signature=5bc6ea4a0822d90df5fa42c29d5d8597897c23ca4e3e09d40e2136d29a2892a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT3RZ2QF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWkgCShiesNmZAam74hp8h95l8szY9qqTTq%2FWf9ICheAIgSpmSxqcZJqdyuMvQEjd6sQqTTwAmOIOB4R8M1dfgQ3Mq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNA1Iqrdk10MRI8w4yrcA%2Fxb6BzXUZ6MAfe8deEAejZvH%2BO%2BP4%2Fz3d9CTSNaDxRBTPqrIWjB1e%2B2t2xa2ASKsHOuWGFcKBmetax8M6%2FiqCNQ%2BnHoRq5ev8L2cAdWtl6DXTLo%2FtxDBi3so7H60qfD3P9GqBz3lU2K2FAExCYLNw4trasE6jfWY4Wa9BXDxX352xEuWCjBDqBEGbEKopmwbDc8uOGMo8pER5YK55eDyRtnHUoVMdn3UL6BVinW%2Fm5t%2FNcMcYWef5YYdKsRTY3T%2FZMs71UZ7hI4MO4%2Fw5OONTsoJpTDicgO5ZZoFx9YNO91xZ0Fcp2W9pxMyqpQFgYul4018V5I8muoaci2MEmC7HKAGgjCZbizgtn2IK19wd5FmJP2tb%2BAjSaC265pfr1AyPKrHt55yu07GV%2F66tUKTWEnt70qRCMvBO4l%2FCsYDWoUVqSjpoTdVLEvtQqegJ8ppsM0UbY%2B3ncEdTKRPGHabH3%2BfouyX8BVragLRmadH5XEt07OWDW%2FJFcaRlao%2FU33DB4nkcvUHWvKvqfsTa0BO0Vz9P2CJSER2SLWO3KZH%2BcGIvPABodDblFXk8l%2FZ%2BrbATs4go3QPlIwWHDPO8f8SMW1YzAgEXRF%2B1z%2FP1q8mY0sml8fQC9WTT%2BOlWIWMM6e8cQGOqUBCqI1EtJP7sUmwtEynfbwQ1HbqvZGOO43dE5xZapRdi01EToV7Q7mCO4BMxrSbf39UpuYXUngKNF%2F9uxLKNkStwMYeh6Dcp5iNb5W2U6aC6k8RO81%2BbRlW8CP0v2q6LSDO%2FnvovkaR1KT8zBZEXqWBWZ2nXNotxmUUsZn98i2%2BVJXkvHpKBG2d650%2BjFdDJm03AR8XrCp9eCX70S9i2DQzDTc4ZG4&X-Amz-Signature=34a3b5d089cd69ab85994d3c937fb80f801e05cf1d51fb7ff70afdfc1e53f873&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT3RZ2QF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWkgCShiesNmZAam74hp8h95l8szY9qqTTq%2FWf9ICheAIgSpmSxqcZJqdyuMvQEjd6sQqTTwAmOIOB4R8M1dfgQ3Mq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNA1Iqrdk10MRI8w4yrcA%2Fxb6BzXUZ6MAfe8deEAejZvH%2BO%2BP4%2Fz3d9CTSNaDxRBTPqrIWjB1e%2B2t2xa2ASKsHOuWGFcKBmetax8M6%2FiqCNQ%2BnHoRq5ev8L2cAdWtl6DXTLo%2FtxDBi3so7H60qfD3P9GqBz3lU2K2FAExCYLNw4trasE6jfWY4Wa9BXDxX352xEuWCjBDqBEGbEKopmwbDc8uOGMo8pER5YK55eDyRtnHUoVMdn3UL6BVinW%2Fm5t%2FNcMcYWef5YYdKsRTY3T%2FZMs71UZ7hI4MO4%2Fw5OONTsoJpTDicgO5ZZoFx9YNO91xZ0Fcp2W9pxMyqpQFgYul4018V5I8muoaci2MEmC7HKAGgjCZbizgtn2IK19wd5FmJP2tb%2BAjSaC265pfr1AyPKrHt55yu07GV%2F66tUKTWEnt70qRCMvBO4l%2FCsYDWoUVqSjpoTdVLEvtQqegJ8ppsM0UbY%2B3ncEdTKRPGHabH3%2BfouyX8BVragLRmadH5XEt07OWDW%2FJFcaRlao%2FU33DB4nkcvUHWvKvqfsTa0BO0Vz9P2CJSER2SLWO3KZH%2BcGIvPABodDblFXk8l%2FZ%2BrbATs4go3QPlIwWHDPO8f8SMW1YzAgEXRF%2B1z%2FP1q8mY0sml8fQC9WTT%2BOlWIWMM6e8cQGOqUBCqI1EtJP7sUmwtEynfbwQ1HbqvZGOO43dE5xZapRdi01EToV7Q7mCO4BMxrSbf39UpuYXUngKNF%2F9uxLKNkStwMYeh6Dcp5iNb5W2U6aC6k8RO81%2BbRlW8CP0v2q6LSDO%2FnvovkaR1KT8zBZEXqWBWZ2nXNotxmUUsZn98i2%2BVJXkvHpKBG2d650%2BjFdDJm03AR8XrCp9eCX70S9i2DQzDTc4ZG4&X-Amz-Signature=3c0dba180ff195431bf036a6f37b02d5c07f05e37dfce2b1c2cfc968821195d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT3RZ2QF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWkgCShiesNmZAam74hp8h95l8szY9qqTTq%2FWf9ICheAIgSpmSxqcZJqdyuMvQEjd6sQqTTwAmOIOB4R8M1dfgQ3Mq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNA1Iqrdk10MRI8w4yrcA%2Fxb6BzXUZ6MAfe8deEAejZvH%2BO%2BP4%2Fz3d9CTSNaDxRBTPqrIWjB1e%2B2t2xa2ASKsHOuWGFcKBmetax8M6%2FiqCNQ%2BnHoRq5ev8L2cAdWtl6DXTLo%2FtxDBi3so7H60qfD3P9GqBz3lU2K2FAExCYLNw4trasE6jfWY4Wa9BXDxX352xEuWCjBDqBEGbEKopmwbDc8uOGMo8pER5YK55eDyRtnHUoVMdn3UL6BVinW%2Fm5t%2FNcMcYWef5YYdKsRTY3T%2FZMs71UZ7hI4MO4%2Fw5OONTsoJpTDicgO5ZZoFx9YNO91xZ0Fcp2W9pxMyqpQFgYul4018V5I8muoaci2MEmC7HKAGgjCZbizgtn2IK19wd5FmJP2tb%2BAjSaC265pfr1AyPKrHt55yu07GV%2F66tUKTWEnt70qRCMvBO4l%2FCsYDWoUVqSjpoTdVLEvtQqegJ8ppsM0UbY%2B3ncEdTKRPGHabH3%2BfouyX8BVragLRmadH5XEt07OWDW%2FJFcaRlao%2FU33DB4nkcvUHWvKvqfsTa0BO0Vz9P2CJSER2SLWO3KZH%2BcGIvPABodDblFXk8l%2FZ%2BrbATs4go3QPlIwWHDPO8f8SMW1YzAgEXRF%2B1z%2FP1q8mY0sml8fQC9WTT%2BOlWIWMM6e8cQGOqUBCqI1EtJP7sUmwtEynfbwQ1HbqvZGOO43dE5xZapRdi01EToV7Q7mCO4BMxrSbf39UpuYXUngKNF%2F9uxLKNkStwMYeh6Dcp5iNb5W2U6aC6k8RO81%2BbRlW8CP0v2q6LSDO%2FnvovkaR1KT8zBZEXqWBWZ2nXNotxmUUsZn98i2%2BVJXkvHpKBG2d650%2BjFdDJm03AR8XrCp9eCX70S9i2DQzDTc4ZG4&X-Amz-Signature=a42b386b6ee8d599071384a1efb6d4142da1a08b851470bd80180ccd8fc956ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT3RZ2QF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWkgCShiesNmZAam74hp8h95l8szY9qqTTq%2FWf9ICheAIgSpmSxqcZJqdyuMvQEjd6sQqTTwAmOIOB4R8M1dfgQ3Mq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNA1Iqrdk10MRI8w4yrcA%2Fxb6BzXUZ6MAfe8deEAejZvH%2BO%2BP4%2Fz3d9CTSNaDxRBTPqrIWjB1e%2B2t2xa2ASKsHOuWGFcKBmetax8M6%2FiqCNQ%2BnHoRq5ev8L2cAdWtl6DXTLo%2FtxDBi3so7H60qfD3P9GqBz3lU2K2FAExCYLNw4trasE6jfWY4Wa9BXDxX352xEuWCjBDqBEGbEKopmwbDc8uOGMo8pER5YK55eDyRtnHUoVMdn3UL6BVinW%2Fm5t%2FNcMcYWef5YYdKsRTY3T%2FZMs71UZ7hI4MO4%2Fw5OONTsoJpTDicgO5ZZoFx9YNO91xZ0Fcp2W9pxMyqpQFgYul4018V5I8muoaci2MEmC7HKAGgjCZbizgtn2IK19wd5FmJP2tb%2BAjSaC265pfr1AyPKrHt55yu07GV%2F66tUKTWEnt70qRCMvBO4l%2FCsYDWoUVqSjpoTdVLEvtQqegJ8ppsM0UbY%2B3ncEdTKRPGHabH3%2BfouyX8BVragLRmadH5XEt07OWDW%2FJFcaRlao%2FU33DB4nkcvUHWvKvqfsTa0BO0Vz9P2CJSER2SLWO3KZH%2BcGIvPABodDblFXk8l%2FZ%2BrbATs4go3QPlIwWHDPO8f8SMW1YzAgEXRF%2B1z%2FP1q8mY0sml8fQC9WTT%2BOlWIWMM6e8cQGOqUBCqI1EtJP7sUmwtEynfbwQ1HbqvZGOO43dE5xZapRdi01EToV7Q7mCO4BMxrSbf39UpuYXUngKNF%2F9uxLKNkStwMYeh6Dcp5iNb5W2U6aC6k8RO81%2BbRlW8CP0v2q6LSDO%2FnvovkaR1KT8zBZEXqWBWZ2nXNotxmUUsZn98i2%2BVJXkvHpKBG2d650%2BjFdDJm03AR8XrCp9eCX70S9i2DQzDTc4ZG4&X-Amz-Signature=717e77b26f94ee5f052d5d0ca580c13472d53e677b3b7d7cf22b50fa40fd1ee7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT3RZ2QF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWkgCShiesNmZAam74hp8h95l8szY9qqTTq%2FWf9ICheAIgSpmSxqcZJqdyuMvQEjd6sQqTTwAmOIOB4R8M1dfgQ3Mq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNA1Iqrdk10MRI8w4yrcA%2Fxb6BzXUZ6MAfe8deEAejZvH%2BO%2BP4%2Fz3d9CTSNaDxRBTPqrIWjB1e%2B2t2xa2ASKsHOuWGFcKBmetax8M6%2FiqCNQ%2BnHoRq5ev8L2cAdWtl6DXTLo%2FtxDBi3so7H60qfD3P9GqBz3lU2K2FAExCYLNw4trasE6jfWY4Wa9BXDxX352xEuWCjBDqBEGbEKopmwbDc8uOGMo8pER5YK55eDyRtnHUoVMdn3UL6BVinW%2Fm5t%2FNcMcYWef5YYdKsRTY3T%2FZMs71UZ7hI4MO4%2Fw5OONTsoJpTDicgO5ZZoFx9YNO91xZ0Fcp2W9pxMyqpQFgYul4018V5I8muoaci2MEmC7HKAGgjCZbizgtn2IK19wd5FmJP2tb%2BAjSaC265pfr1AyPKrHt55yu07GV%2F66tUKTWEnt70qRCMvBO4l%2FCsYDWoUVqSjpoTdVLEvtQqegJ8ppsM0UbY%2B3ncEdTKRPGHabH3%2BfouyX8BVragLRmadH5XEt07OWDW%2FJFcaRlao%2FU33DB4nkcvUHWvKvqfsTa0BO0Vz9P2CJSER2SLWO3KZH%2BcGIvPABodDblFXk8l%2FZ%2BrbATs4go3QPlIwWHDPO8f8SMW1YzAgEXRF%2B1z%2FP1q8mY0sml8fQC9WTT%2BOlWIWMM6e8cQGOqUBCqI1EtJP7sUmwtEynfbwQ1HbqvZGOO43dE5xZapRdi01EToV7Q7mCO4BMxrSbf39UpuYXUngKNF%2F9uxLKNkStwMYeh6Dcp5iNb5W2U6aC6k8RO81%2BbRlW8CP0v2q6LSDO%2FnvovkaR1KT8zBZEXqWBWZ2nXNotxmUUsZn98i2%2BVJXkvHpKBG2d650%2BjFdDJm03AR8XrCp9eCX70S9i2DQzDTc4ZG4&X-Amz-Signature=05700dc9ecd027fc850e9c6831343f71238053aea0e08326d69a8b65a9c96161&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT3RZ2QF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWkgCShiesNmZAam74hp8h95l8szY9qqTTq%2FWf9ICheAIgSpmSxqcZJqdyuMvQEjd6sQqTTwAmOIOB4R8M1dfgQ3Mq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNA1Iqrdk10MRI8w4yrcA%2Fxb6BzXUZ6MAfe8deEAejZvH%2BO%2BP4%2Fz3d9CTSNaDxRBTPqrIWjB1e%2B2t2xa2ASKsHOuWGFcKBmetax8M6%2FiqCNQ%2BnHoRq5ev8L2cAdWtl6DXTLo%2FtxDBi3so7H60qfD3P9GqBz3lU2K2FAExCYLNw4trasE6jfWY4Wa9BXDxX352xEuWCjBDqBEGbEKopmwbDc8uOGMo8pER5YK55eDyRtnHUoVMdn3UL6BVinW%2Fm5t%2FNcMcYWef5YYdKsRTY3T%2FZMs71UZ7hI4MO4%2Fw5OONTsoJpTDicgO5ZZoFx9YNO91xZ0Fcp2W9pxMyqpQFgYul4018V5I8muoaci2MEmC7HKAGgjCZbizgtn2IK19wd5FmJP2tb%2BAjSaC265pfr1AyPKrHt55yu07GV%2F66tUKTWEnt70qRCMvBO4l%2FCsYDWoUVqSjpoTdVLEvtQqegJ8ppsM0UbY%2B3ncEdTKRPGHabH3%2BfouyX8BVragLRmadH5XEt07OWDW%2FJFcaRlao%2FU33DB4nkcvUHWvKvqfsTa0BO0Vz9P2CJSER2SLWO3KZH%2BcGIvPABodDblFXk8l%2FZ%2BrbATs4go3QPlIwWHDPO8f8SMW1YzAgEXRF%2B1z%2FP1q8mY0sml8fQC9WTT%2BOlWIWMM6e8cQGOqUBCqI1EtJP7sUmwtEynfbwQ1HbqvZGOO43dE5xZapRdi01EToV7Q7mCO4BMxrSbf39UpuYXUngKNF%2F9uxLKNkStwMYeh6Dcp5iNb5W2U6aC6k8RO81%2BbRlW8CP0v2q6LSDO%2FnvovkaR1KT8zBZEXqWBWZ2nXNotxmUUsZn98i2%2BVJXkvHpKBG2d650%2BjFdDJm03AR8XrCp9eCX70S9i2DQzDTc4ZG4&X-Amz-Signature=17e4dbd2f80eb0721ac111cd6b8e3dc675b1ef324d32221283cb5f5b97102b84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT3RZ2QF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWkgCShiesNmZAam74hp8h95l8szY9qqTTq%2FWf9ICheAIgSpmSxqcZJqdyuMvQEjd6sQqTTwAmOIOB4R8M1dfgQ3Mq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNA1Iqrdk10MRI8w4yrcA%2Fxb6BzXUZ6MAfe8deEAejZvH%2BO%2BP4%2Fz3d9CTSNaDxRBTPqrIWjB1e%2B2t2xa2ASKsHOuWGFcKBmetax8M6%2FiqCNQ%2BnHoRq5ev8L2cAdWtl6DXTLo%2FtxDBi3so7H60qfD3P9GqBz3lU2K2FAExCYLNw4trasE6jfWY4Wa9BXDxX352xEuWCjBDqBEGbEKopmwbDc8uOGMo8pER5YK55eDyRtnHUoVMdn3UL6BVinW%2Fm5t%2FNcMcYWef5YYdKsRTY3T%2FZMs71UZ7hI4MO4%2Fw5OONTsoJpTDicgO5ZZoFx9YNO91xZ0Fcp2W9pxMyqpQFgYul4018V5I8muoaci2MEmC7HKAGgjCZbizgtn2IK19wd5FmJP2tb%2BAjSaC265pfr1AyPKrHt55yu07GV%2F66tUKTWEnt70qRCMvBO4l%2FCsYDWoUVqSjpoTdVLEvtQqegJ8ppsM0UbY%2B3ncEdTKRPGHabH3%2BfouyX8BVragLRmadH5XEt07OWDW%2FJFcaRlao%2FU33DB4nkcvUHWvKvqfsTa0BO0Vz9P2CJSER2SLWO3KZH%2BcGIvPABodDblFXk8l%2FZ%2BrbATs4go3QPlIwWHDPO8f8SMW1YzAgEXRF%2B1z%2FP1q8mY0sml8fQC9WTT%2BOlWIWMM6e8cQGOqUBCqI1EtJP7sUmwtEynfbwQ1HbqvZGOO43dE5xZapRdi01EToV7Q7mCO4BMxrSbf39UpuYXUngKNF%2F9uxLKNkStwMYeh6Dcp5iNb5W2U6aC6k8RO81%2BbRlW8CP0v2q6LSDO%2FnvovkaR1KT8zBZEXqWBWZ2nXNotxmUUsZn98i2%2BVJXkvHpKBG2d650%2BjFdDJm03AR8XrCp9eCX70S9i2DQzDTc4ZG4&X-Amz-Signature=bd3b6a1669eca38eaf9edc1a465c286860c6c8630c53a55cf74cf8ada5773719&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**          | **Type**             |
| ----------------- | -------------------- |
| `serial_port`     | string               |
| `serial_baudrate` | int (model specific) |
| `frame_id`        | string               |
| `scan_mode`       | string               |

{{< /table >}}

#### description:

publishes the `/scan` topic for RPLIDAR products

[official docs link](https://github.com/Slamtec/rplidar_ros/tree/ros2#slamtec-lidar-ros2-package)

{{% /alert %}}

Remember to disable gazebo nodes for physical setup

```python

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
      <summary>Finding Lidar USB port:</summary>
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT3RZ2QF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWkgCShiesNmZAam74hp8h95l8szY9qqTTq%2FWf9ICheAIgSpmSxqcZJqdyuMvQEjd6sQqTTwAmOIOB4R8M1dfgQ3Mq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNA1Iqrdk10MRI8w4yrcA%2Fxb6BzXUZ6MAfe8deEAejZvH%2BO%2BP4%2Fz3d9CTSNaDxRBTPqrIWjB1e%2B2t2xa2ASKsHOuWGFcKBmetax8M6%2FiqCNQ%2BnHoRq5ev8L2cAdWtl6DXTLo%2FtxDBi3so7H60qfD3P9GqBz3lU2K2FAExCYLNw4trasE6jfWY4Wa9BXDxX352xEuWCjBDqBEGbEKopmwbDc8uOGMo8pER5YK55eDyRtnHUoVMdn3UL6BVinW%2Fm5t%2FNcMcYWef5YYdKsRTY3T%2FZMs71UZ7hI4MO4%2Fw5OONTsoJpTDicgO5ZZoFx9YNO91xZ0Fcp2W9pxMyqpQFgYul4018V5I8muoaci2MEmC7HKAGgjCZbizgtn2IK19wd5FmJP2tb%2BAjSaC265pfr1AyPKrHt55yu07GV%2F66tUKTWEnt70qRCMvBO4l%2FCsYDWoUVqSjpoTdVLEvtQqegJ8ppsM0UbY%2B3ncEdTKRPGHabH3%2BfouyX8BVragLRmadH5XEt07OWDW%2FJFcaRlao%2FU33DB4nkcvUHWvKvqfsTa0BO0Vz9P2CJSER2SLWO3KZH%2BcGIvPABodDblFXk8l%2FZ%2BrbATs4go3QPlIwWHDPO8f8SMW1YzAgEXRF%2B1z%2FP1q8mY0sml8fQC9WTT%2BOlWIWMM6e8cQGOqUBCqI1EtJP7sUmwtEynfbwQ1HbqvZGOO43dE5xZapRdi01EToV7Q7mCO4BMxrSbf39UpuYXUngKNF%2F9uxLKNkStwMYeh6Dcp5iNb5W2U6aC6k8RO81%2BbRlW8CP0v2q6LSDO%2FnvovkaR1KT8zBZEXqWBWZ2nXNotxmUUsZn98i2%2BVJXkvHpKBG2d650%2BjFdDJm03AR8XrCp9eCX70S9i2DQzDTc4ZG4&X-Amz-Signature=ef0382bc76bf858a5a5d6067cfac0afcce8782c7f8aa9f475ea4003f3439126b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT3RZ2QF%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T091249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWkgCShiesNmZAam74hp8h95l8szY9qqTTq%2FWf9ICheAIgSpmSxqcZJqdyuMvQEjd6sQqTTwAmOIOB4R8M1dfgQ3Mq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNA1Iqrdk10MRI8w4yrcA%2Fxb6BzXUZ6MAfe8deEAejZvH%2BO%2BP4%2Fz3d9CTSNaDxRBTPqrIWjB1e%2B2t2xa2ASKsHOuWGFcKBmetax8M6%2FiqCNQ%2BnHoRq5ev8L2cAdWtl6DXTLo%2FtxDBi3so7H60qfD3P9GqBz3lU2K2FAExCYLNw4trasE6jfWY4Wa9BXDxX352xEuWCjBDqBEGbEKopmwbDc8uOGMo8pER5YK55eDyRtnHUoVMdn3UL6BVinW%2Fm5t%2FNcMcYWef5YYdKsRTY3T%2FZMs71UZ7hI4MO4%2Fw5OONTsoJpTDicgO5ZZoFx9YNO91xZ0Fcp2W9pxMyqpQFgYul4018V5I8muoaci2MEmC7HKAGgjCZbizgtn2IK19wd5FmJP2tb%2BAjSaC265pfr1AyPKrHt55yu07GV%2F66tUKTWEnt70qRCMvBO4l%2FCsYDWoUVqSjpoTdVLEvtQqegJ8ppsM0UbY%2B3ncEdTKRPGHabH3%2BfouyX8BVragLRmadH5XEt07OWDW%2FJFcaRlao%2FU33DB4nkcvUHWvKvqfsTa0BO0Vz9P2CJSER2SLWO3KZH%2BcGIvPABodDblFXk8l%2FZ%2BrbATs4go3QPlIwWHDPO8f8SMW1YzAgEXRF%2B1z%2FP1q8mY0sml8fQC9WTT%2BOlWIWMM6e8cQGOqUBCqI1EtJP7sUmwtEynfbwQ1HbqvZGOO43dE5xZapRdi01EToV7Q7mCO4BMxrSbf39UpuYXUngKNF%2F9uxLKNkStwMYeh6Dcp5iNb5W2U6aC6k8RO81%2BbRlW8CP0v2q6LSDO%2FnvovkaR1KT8zBZEXqWBWZ2nXNotxmUUsZn98i2%2BVJXkvHpKBG2d650%2BjFdDJm03AR8XrCp9eCX70S9i2DQzDTc4ZG4&X-Amz-Signature=a42b386b6ee8d599071384a1efb6d4142da1a08b851470bd80180ccd8fc956ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Adding RPLidar to launch

idk tell them to look at the launch file to see which exact prams to put in

```python

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
