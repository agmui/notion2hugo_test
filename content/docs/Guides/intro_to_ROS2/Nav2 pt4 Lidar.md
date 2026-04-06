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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZK6NFU4W%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF0%2BTxkSApQZq%2F5SEMEPo9n5pZ3OFatzsXU0TUHWkWoGAiEAqqvQ8NFZFCxND26UhT69CvZYd8g5JrN%2BdaBZILSgj1AqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCojHkwO2Jw9U3PDHCrcA2s4ieTY0%2BRU%2FfAO%2FuqbLg9UNl0tEU7c5x%2FVFAJHJzLtgX9cSEGqsNAZmA9midFVUaFt1mdeUKHpZfdwrMW3wsOe4vcQ%2BG%2BfIre6TZ7UxWr04ol9I%2B1bcN%2BsIVRsYIMYWbbrZeu3VD4Hl2LVnFQ07cqnG%2BAyeeH9sm7J7XRQzi5FuiCUfB67hE%2BS7gRTyNvAvX6DObW5Qn57PsJsYiBHyuB3V%2FotjF5aUYprxepiKPZZDxMlhtKZALNIdDgFQd53dLIw5HEkwLjP19TQM4J1BjOHIc5vph34wdZPN57ArhiVLopahJ7YCYeVk2nKVOwfJsSee5qe0FdkjJPB%2F7An6b4uNg1aWpWira%2BB%2FZh8Eg3PaTAOOoO6cm3st2VhNuN2GhNtpSxe3I7UxmLVnApkbHSKdxj6g0ZWhC2vBvHbUSU%2BYkrR%2Fil0nhM4IhAr2eIoC63RDPI0QfwgowNdefl%2BRKeJv09yrcSMz9do1C9Z0MqgkjjAX1TOUnC8DLP%2BtxQSa8mZCIuRuqEyQDSlORpmrWolqeQNZb9gGY78WxQSkp1ps0%2FvMcABwNvljPlSs85AlVu2FsK7QYmQP2m%2BBVyDSSp7JQDC%2FrYCjnbjekq7NGuGS2oQe%2FYJQfZLSUeKMI2xzM4GOqUB0gHrckYyOXs%2BlE%2BwMJvfio5HaY8lIsBIhcmnbw4oGfQbD1gU5baXNnPzDbTisq6GvAoi58zS0fSJcvMgqu5bTOSXnFfHkthJhWjz5CGETHZF79D3jm6Qgn8e8XndhDO%2Fek46NZHAi4oFhF%2B3l4Q%2FxGx4zbUJGHtFLqEbX%2FCyq4QqyIzI3G%2BF6%2BfZKpF%2Bq7isPnn6LaZWd9vrVbGt9MHkkU1DacrY&X-Amz-Signature=db4988426ccc28f337fb4091af98214438b9d0ef4b8a201597924243ff5abe02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673H6L74T%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5%2BrwSlXA0x2VrupHCNFP2ZZlCb5vztZ2us0hJIW7f3AiB8RNjiVw1qptTM5OCddLU0bFFW%2BDp5GEHJjna6%2FQQDLyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWjcapjru80TIy271KtwDcJiZ9xzKxwvanGEwULnyRjirs%2Fr8tk0BMs1WTROUI3R3HD5eZhcwTKraCa8LmA1FVTAzI452Xqq6iBnTj3zl7Sfk0jdUwqR10UAuMHMbOTwWuig1IrxtI7nLPE6jAPEt6kvo5wyb7zmKE4%2FANtjWyBapbHVar%2FLj6rPjGFV04lVrw5jUdtxELUL87QFrxiZbru5mqKWRoaE4ufOlN8vGUtYaJ6xx175ZKdP5zYSCuVBhLCbI3L0S%2FtETkBwBnVgeNRaxUWAgFRoksU8rlJGPF0QuLDBrJkKsKTnQrxEegOiZpLll2oWWhs7L7PQTn4tFT%2BJ6wO9g6fsES6YZYFOfeO4rBhmQWNJPvyiMLIlVwrga8IPwsYyaBKvVBk7BnCM%2BQ3trMnWCvaA%2BnzaRk6OGQg2%2BDFWAl8NTf%2F7vpw%2BICp%2B6NYddCw4qZX430EHugmVs%2FdnjsYx3qC2ytA7qVrTm%2FjBwObB8%2Bik83Sft9CBk6Q2a08HcpuQW8gEk4k%2BWKU55YgKJRMY218gdctIXCiZeuXV8PMnMYW5xN6grJ3VAnYaeTcre7jLGHoGJyhQfmbfG0i%2BIRBwN70FYtfSjMPL7bFt2jrIGDL8yKSj8ekCLE2NqSIaO8Xsbqvo8OFcwuLLMzgY6pgFI6RDuZQH2G5ynFAeqvV%2F9IxWONfQYz78w4AvYTq1nmCQrwi%2Fg5%2BG4c2elSfbIzW%2FaD35Q2KJJhG%2BURDKltZYtf3VerNkNrM4GboendGCc07kP2whpol2272J%2BRgkE%2Brn5ME0n40z5lubUuY9Al06VW660vKqCNdNyhomJ0IPOLGuI3Jt1o%2FHCvB34AVmGDFH4zxyEYptYvWIu4SSCdeyPvQHtJYF1&X-Amz-Signature=9ffa936008a92b3c31c765e616c8f308d66acb41b4a0b363d1968389bb213f0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673H6L74T%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5%2BrwSlXA0x2VrupHCNFP2ZZlCb5vztZ2us0hJIW7f3AiB8RNjiVw1qptTM5OCddLU0bFFW%2BDp5GEHJjna6%2FQQDLyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWjcapjru80TIy271KtwDcJiZ9xzKxwvanGEwULnyRjirs%2Fr8tk0BMs1WTROUI3R3HD5eZhcwTKraCa8LmA1FVTAzI452Xqq6iBnTj3zl7Sfk0jdUwqR10UAuMHMbOTwWuig1IrxtI7nLPE6jAPEt6kvo5wyb7zmKE4%2FANtjWyBapbHVar%2FLj6rPjGFV04lVrw5jUdtxELUL87QFrxiZbru5mqKWRoaE4ufOlN8vGUtYaJ6xx175ZKdP5zYSCuVBhLCbI3L0S%2FtETkBwBnVgeNRaxUWAgFRoksU8rlJGPF0QuLDBrJkKsKTnQrxEegOiZpLll2oWWhs7L7PQTn4tFT%2BJ6wO9g6fsES6YZYFOfeO4rBhmQWNJPvyiMLIlVwrga8IPwsYyaBKvVBk7BnCM%2BQ3trMnWCvaA%2BnzaRk6OGQg2%2BDFWAl8NTf%2F7vpw%2BICp%2B6NYddCw4qZX430EHugmVs%2FdnjsYx3qC2ytA7qVrTm%2FjBwObB8%2Bik83Sft9CBk6Q2a08HcpuQW8gEk4k%2BWKU55YgKJRMY218gdctIXCiZeuXV8PMnMYW5xN6grJ3VAnYaeTcre7jLGHoGJyhQfmbfG0i%2BIRBwN70FYtfSjMPL7bFt2jrIGDL8yKSj8ekCLE2NqSIaO8Xsbqvo8OFcwuLLMzgY6pgFI6RDuZQH2G5ynFAeqvV%2F9IxWONfQYz78w4AvYTq1nmCQrwi%2Fg5%2BG4c2elSfbIzW%2FaD35Q2KJJhG%2BURDKltZYtf3VerNkNrM4GboendGCc07kP2whpol2272J%2BRgkE%2Brn5ME0n40z5lubUuY9Al06VW660vKqCNdNyhomJ0IPOLGuI3Jt1o%2FHCvB34AVmGDFH4zxyEYptYvWIu4SSCdeyPvQHtJYF1&X-Amz-Signature=da6609b7332c7c08ff88be63a3f54ac61cca8c3b4c2f2e7dd701b11019e3b69c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673H6L74T%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5%2BrwSlXA0x2VrupHCNFP2ZZlCb5vztZ2us0hJIW7f3AiB8RNjiVw1qptTM5OCddLU0bFFW%2BDp5GEHJjna6%2FQQDLyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWjcapjru80TIy271KtwDcJiZ9xzKxwvanGEwULnyRjirs%2Fr8tk0BMs1WTROUI3R3HD5eZhcwTKraCa8LmA1FVTAzI452Xqq6iBnTj3zl7Sfk0jdUwqR10UAuMHMbOTwWuig1IrxtI7nLPE6jAPEt6kvo5wyb7zmKE4%2FANtjWyBapbHVar%2FLj6rPjGFV04lVrw5jUdtxELUL87QFrxiZbru5mqKWRoaE4ufOlN8vGUtYaJ6xx175ZKdP5zYSCuVBhLCbI3L0S%2FtETkBwBnVgeNRaxUWAgFRoksU8rlJGPF0QuLDBrJkKsKTnQrxEegOiZpLll2oWWhs7L7PQTn4tFT%2BJ6wO9g6fsES6YZYFOfeO4rBhmQWNJPvyiMLIlVwrga8IPwsYyaBKvVBk7BnCM%2BQ3trMnWCvaA%2BnzaRk6OGQg2%2BDFWAl8NTf%2F7vpw%2BICp%2B6NYddCw4qZX430EHugmVs%2FdnjsYx3qC2ytA7qVrTm%2FjBwObB8%2Bik83Sft9CBk6Q2a08HcpuQW8gEk4k%2BWKU55YgKJRMY218gdctIXCiZeuXV8PMnMYW5xN6grJ3VAnYaeTcre7jLGHoGJyhQfmbfG0i%2BIRBwN70FYtfSjMPL7bFt2jrIGDL8yKSj8ekCLE2NqSIaO8Xsbqvo8OFcwuLLMzgY6pgFI6RDuZQH2G5ynFAeqvV%2F9IxWONfQYz78w4AvYTq1nmCQrwi%2Fg5%2BG4c2elSfbIzW%2FaD35Q2KJJhG%2BURDKltZYtf3VerNkNrM4GboendGCc07kP2whpol2272J%2BRgkE%2Brn5ME0n40z5lubUuY9Al06VW660vKqCNdNyhomJ0IPOLGuI3Jt1o%2FHCvB34AVmGDFH4zxyEYptYvWIu4SSCdeyPvQHtJYF1&X-Amz-Signature=008d1a65c098b0abb1f2910b762ee55742a4b1dbb2af777111680f73dcb5e035&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673H6L74T%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5%2BrwSlXA0x2VrupHCNFP2ZZlCb5vztZ2us0hJIW7f3AiB8RNjiVw1qptTM5OCddLU0bFFW%2BDp5GEHJjna6%2FQQDLyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWjcapjru80TIy271KtwDcJiZ9xzKxwvanGEwULnyRjirs%2Fr8tk0BMs1WTROUI3R3HD5eZhcwTKraCa8LmA1FVTAzI452Xqq6iBnTj3zl7Sfk0jdUwqR10UAuMHMbOTwWuig1IrxtI7nLPE6jAPEt6kvo5wyb7zmKE4%2FANtjWyBapbHVar%2FLj6rPjGFV04lVrw5jUdtxELUL87QFrxiZbru5mqKWRoaE4ufOlN8vGUtYaJ6xx175ZKdP5zYSCuVBhLCbI3L0S%2FtETkBwBnVgeNRaxUWAgFRoksU8rlJGPF0QuLDBrJkKsKTnQrxEegOiZpLll2oWWhs7L7PQTn4tFT%2BJ6wO9g6fsES6YZYFOfeO4rBhmQWNJPvyiMLIlVwrga8IPwsYyaBKvVBk7BnCM%2BQ3trMnWCvaA%2BnzaRk6OGQg2%2BDFWAl8NTf%2F7vpw%2BICp%2B6NYddCw4qZX430EHugmVs%2FdnjsYx3qC2ytA7qVrTm%2FjBwObB8%2Bik83Sft9CBk6Q2a08HcpuQW8gEk4k%2BWKU55YgKJRMY218gdctIXCiZeuXV8PMnMYW5xN6grJ3VAnYaeTcre7jLGHoGJyhQfmbfG0i%2BIRBwN70FYtfSjMPL7bFt2jrIGDL8yKSj8ekCLE2NqSIaO8Xsbqvo8OFcwuLLMzgY6pgFI6RDuZQH2G5ynFAeqvV%2F9IxWONfQYz78w4AvYTq1nmCQrwi%2Fg5%2BG4c2elSfbIzW%2FaD35Q2KJJhG%2BURDKltZYtf3VerNkNrM4GboendGCc07kP2whpol2272J%2BRgkE%2Brn5ME0n40z5lubUuY9Al06VW660vKqCNdNyhomJ0IPOLGuI3Jt1o%2FHCvB34AVmGDFH4zxyEYptYvWIu4SSCdeyPvQHtJYF1&X-Amz-Signature=2b25a26861042d210eb070ab638c8f18ec1a98f843d87e076fd04143541b4bde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673H6L74T%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5%2BrwSlXA0x2VrupHCNFP2ZZlCb5vztZ2us0hJIW7f3AiB8RNjiVw1qptTM5OCddLU0bFFW%2BDp5GEHJjna6%2FQQDLyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWjcapjru80TIy271KtwDcJiZ9xzKxwvanGEwULnyRjirs%2Fr8tk0BMs1WTROUI3R3HD5eZhcwTKraCa8LmA1FVTAzI452Xqq6iBnTj3zl7Sfk0jdUwqR10UAuMHMbOTwWuig1IrxtI7nLPE6jAPEt6kvo5wyb7zmKE4%2FANtjWyBapbHVar%2FLj6rPjGFV04lVrw5jUdtxELUL87QFrxiZbru5mqKWRoaE4ufOlN8vGUtYaJ6xx175ZKdP5zYSCuVBhLCbI3L0S%2FtETkBwBnVgeNRaxUWAgFRoksU8rlJGPF0QuLDBrJkKsKTnQrxEegOiZpLll2oWWhs7L7PQTn4tFT%2BJ6wO9g6fsES6YZYFOfeO4rBhmQWNJPvyiMLIlVwrga8IPwsYyaBKvVBk7BnCM%2BQ3trMnWCvaA%2BnzaRk6OGQg2%2BDFWAl8NTf%2F7vpw%2BICp%2B6NYddCw4qZX430EHugmVs%2FdnjsYx3qC2ytA7qVrTm%2FjBwObB8%2Bik83Sft9CBk6Q2a08HcpuQW8gEk4k%2BWKU55YgKJRMY218gdctIXCiZeuXV8PMnMYW5xN6grJ3VAnYaeTcre7jLGHoGJyhQfmbfG0i%2BIRBwN70FYtfSjMPL7bFt2jrIGDL8yKSj8ekCLE2NqSIaO8Xsbqvo8OFcwuLLMzgY6pgFI6RDuZQH2G5ynFAeqvV%2F9IxWONfQYz78w4AvYTq1nmCQrwi%2Fg5%2BG4c2elSfbIzW%2FaD35Q2KJJhG%2BURDKltZYtf3VerNkNrM4GboendGCc07kP2whpol2272J%2BRgkE%2Brn5ME0n40z5lubUuY9Al06VW660vKqCNdNyhomJ0IPOLGuI3Jt1o%2FHCvB34AVmGDFH4zxyEYptYvWIu4SSCdeyPvQHtJYF1&X-Amz-Signature=f8535a2eb5fdd432aa62622a4db5621cbe36bba65689486488cf73ad9e6508b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673H6L74T%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5%2BrwSlXA0x2VrupHCNFP2ZZlCb5vztZ2us0hJIW7f3AiB8RNjiVw1qptTM5OCddLU0bFFW%2BDp5GEHJjna6%2FQQDLyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWjcapjru80TIy271KtwDcJiZ9xzKxwvanGEwULnyRjirs%2Fr8tk0BMs1WTROUI3R3HD5eZhcwTKraCa8LmA1FVTAzI452Xqq6iBnTj3zl7Sfk0jdUwqR10UAuMHMbOTwWuig1IrxtI7nLPE6jAPEt6kvo5wyb7zmKE4%2FANtjWyBapbHVar%2FLj6rPjGFV04lVrw5jUdtxELUL87QFrxiZbru5mqKWRoaE4ufOlN8vGUtYaJ6xx175ZKdP5zYSCuVBhLCbI3L0S%2FtETkBwBnVgeNRaxUWAgFRoksU8rlJGPF0QuLDBrJkKsKTnQrxEegOiZpLll2oWWhs7L7PQTn4tFT%2BJ6wO9g6fsES6YZYFOfeO4rBhmQWNJPvyiMLIlVwrga8IPwsYyaBKvVBk7BnCM%2BQ3trMnWCvaA%2BnzaRk6OGQg2%2BDFWAl8NTf%2F7vpw%2BICp%2B6NYddCw4qZX430EHugmVs%2FdnjsYx3qC2ytA7qVrTm%2FjBwObB8%2Bik83Sft9CBk6Q2a08HcpuQW8gEk4k%2BWKU55YgKJRMY218gdctIXCiZeuXV8PMnMYW5xN6grJ3VAnYaeTcre7jLGHoGJyhQfmbfG0i%2BIRBwN70FYtfSjMPL7bFt2jrIGDL8yKSj8ekCLE2NqSIaO8Xsbqvo8OFcwuLLMzgY6pgFI6RDuZQH2G5ynFAeqvV%2F9IxWONfQYz78w4AvYTq1nmCQrwi%2Fg5%2BG4c2elSfbIzW%2FaD35Q2KJJhG%2BURDKltZYtf3VerNkNrM4GboendGCc07kP2whpol2272J%2BRgkE%2Brn5ME0n40z5lubUuY9Al06VW660vKqCNdNyhomJ0IPOLGuI3Jt1o%2FHCvB34AVmGDFH4zxyEYptYvWIu4SSCdeyPvQHtJYF1&X-Amz-Signature=f2b14fef9ad3e2d149e007c70e9f0d0101612e8d4f71f32a651b641b22a0dc00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673H6L74T%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5%2BrwSlXA0x2VrupHCNFP2ZZlCb5vztZ2us0hJIW7f3AiB8RNjiVw1qptTM5OCddLU0bFFW%2BDp5GEHJjna6%2FQQDLyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWjcapjru80TIy271KtwDcJiZ9xzKxwvanGEwULnyRjirs%2Fr8tk0BMs1WTROUI3R3HD5eZhcwTKraCa8LmA1FVTAzI452Xqq6iBnTj3zl7Sfk0jdUwqR10UAuMHMbOTwWuig1IrxtI7nLPE6jAPEt6kvo5wyb7zmKE4%2FANtjWyBapbHVar%2FLj6rPjGFV04lVrw5jUdtxELUL87QFrxiZbru5mqKWRoaE4ufOlN8vGUtYaJ6xx175ZKdP5zYSCuVBhLCbI3L0S%2FtETkBwBnVgeNRaxUWAgFRoksU8rlJGPF0QuLDBrJkKsKTnQrxEegOiZpLll2oWWhs7L7PQTn4tFT%2BJ6wO9g6fsES6YZYFOfeO4rBhmQWNJPvyiMLIlVwrga8IPwsYyaBKvVBk7BnCM%2BQ3trMnWCvaA%2BnzaRk6OGQg2%2BDFWAl8NTf%2F7vpw%2BICp%2B6NYddCw4qZX430EHugmVs%2FdnjsYx3qC2ytA7qVrTm%2FjBwObB8%2Bik83Sft9CBk6Q2a08HcpuQW8gEk4k%2BWKU55YgKJRMY218gdctIXCiZeuXV8PMnMYW5xN6grJ3VAnYaeTcre7jLGHoGJyhQfmbfG0i%2BIRBwN70FYtfSjMPL7bFt2jrIGDL8yKSj8ekCLE2NqSIaO8Xsbqvo8OFcwuLLMzgY6pgFI6RDuZQH2G5ynFAeqvV%2F9IxWONfQYz78w4AvYTq1nmCQrwi%2Fg5%2BG4c2elSfbIzW%2FaD35Q2KJJhG%2BURDKltZYtf3VerNkNrM4GboendGCc07kP2whpol2272J%2BRgkE%2Brn5ME0n40z5lubUuY9Al06VW660vKqCNdNyhomJ0IPOLGuI3Jt1o%2FHCvB34AVmGDFH4zxyEYptYvWIu4SSCdeyPvQHtJYF1&X-Amz-Signature=6c9833cd23379bc951ad0947360d82a099e8167788b429b8bba3929b5fd5ec85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673H6L74T%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5%2BrwSlXA0x2VrupHCNFP2ZZlCb5vztZ2us0hJIW7f3AiB8RNjiVw1qptTM5OCddLU0bFFW%2BDp5GEHJjna6%2FQQDLyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWjcapjru80TIy271KtwDcJiZ9xzKxwvanGEwULnyRjirs%2Fr8tk0BMs1WTROUI3R3HD5eZhcwTKraCa8LmA1FVTAzI452Xqq6iBnTj3zl7Sfk0jdUwqR10UAuMHMbOTwWuig1IrxtI7nLPE6jAPEt6kvo5wyb7zmKE4%2FANtjWyBapbHVar%2FLj6rPjGFV04lVrw5jUdtxELUL87QFrxiZbru5mqKWRoaE4ufOlN8vGUtYaJ6xx175ZKdP5zYSCuVBhLCbI3L0S%2FtETkBwBnVgeNRaxUWAgFRoksU8rlJGPF0QuLDBrJkKsKTnQrxEegOiZpLll2oWWhs7L7PQTn4tFT%2BJ6wO9g6fsES6YZYFOfeO4rBhmQWNJPvyiMLIlVwrga8IPwsYyaBKvVBk7BnCM%2BQ3trMnWCvaA%2BnzaRk6OGQg2%2BDFWAl8NTf%2F7vpw%2BICp%2B6NYddCw4qZX430EHugmVs%2FdnjsYx3qC2ytA7qVrTm%2FjBwObB8%2Bik83Sft9CBk6Q2a08HcpuQW8gEk4k%2BWKU55YgKJRMY218gdctIXCiZeuXV8PMnMYW5xN6grJ3VAnYaeTcre7jLGHoGJyhQfmbfG0i%2BIRBwN70FYtfSjMPL7bFt2jrIGDL8yKSj8ekCLE2NqSIaO8Xsbqvo8OFcwuLLMzgY6pgFI6RDuZQH2G5ynFAeqvV%2F9IxWONfQYz78w4AvYTq1nmCQrwi%2Fg5%2BG4c2elSfbIzW%2FaD35Q2KJJhG%2BURDKltZYtf3VerNkNrM4GboendGCc07kP2whpol2272J%2BRgkE%2Brn5ME0n40z5lubUuY9Al06VW660vKqCNdNyhomJ0IPOLGuI3Jt1o%2FHCvB34AVmGDFH4zxyEYptYvWIu4SSCdeyPvQHtJYF1&X-Amz-Signature=ee8ecb75de263d7f4e181e05f707a0e3bc64dae34d68e94a3e10b79b63b1f691&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673H6L74T%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5%2BrwSlXA0x2VrupHCNFP2ZZlCb5vztZ2us0hJIW7f3AiB8RNjiVw1qptTM5OCddLU0bFFW%2BDp5GEHJjna6%2FQQDLyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWjcapjru80TIy271KtwDcJiZ9xzKxwvanGEwULnyRjirs%2Fr8tk0BMs1WTROUI3R3HD5eZhcwTKraCa8LmA1FVTAzI452Xqq6iBnTj3zl7Sfk0jdUwqR10UAuMHMbOTwWuig1IrxtI7nLPE6jAPEt6kvo5wyb7zmKE4%2FANtjWyBapbHVar%2FLj6rPjGFV04lVrw5jUdtxELUL87QFrxiZbru5mqKWRoaE4ufOlN8vGUtYaJ6xx175ZKdP5zYSCuVBhLCbI3L0S%2FtETkBwBnVgeNRaxUWAgFRoksU8rlJGPF0QuLDBrJkKsKTnQrxEegOiZpLll2oWWhs7L7PQTn4tFT%2BJ6wO9g6fsES6YZYFOfeO4rBhmQWNJPvyiMLIlVwrga8IPwsYyaBKvVBk7BnCM%2BQ3trMnWCvaA%2BnzaRk6OGQg2%2BDFWAl8NTf%2F7vpw%2BICp%2B6NYddCw4qZX430EHugmVs%2FdnjsYx3qC2ytA7qVrTm%2FjBwObB8%2Bik83Sft9CBk6Q2a08HcpuQW8gEk4k%2BWKU55YgKJRMY218gdctIXCiZeuXV8PMnMYW5xN6grJ3VAnYaeTcre7jLGHoGJyhQfmbfG0i%2BIRBwN70FYtfSjMPL7bFt2jrIGDL8yKSj8ekCLE2NqSIaO8Xsbqvo8OFcwuLLMzgY6pgFI6RDuZQH2G5ynFAeqvV%2F9IxWONfQYz78w4AvYTq1nmCQrwi%2Fg5%2BG4c2elSfbIzW%2FaD35Q2KJJhG%2BURDKltZYtf3VerNkNrM4GboendGCc07kP2whpol2272J%2BRgkE%2Brn5ME0n40z5lubUuY9Al06VW660vKqCNdNyhomJ0IPOLGuI3Jt1o%2FHCvB34AVmGDFH4zxyEYptYvWIu4SSCdeyPvQHtJYF1&X-Amz-Signature=3f4d697780940941ae415ffef8e6075f10a4d5271666179d4d104e2a7c3979a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673H6L74T%2F20260406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260406T023512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG5%2BrwSlXA0x2VrupHCNFP2ZZlCb5vztZ2us0hJIW7f3AiB8RNjiVw1qptTM5OCddLU0bFFW%2BDp5GEHJjna6%2FQQDLyqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWjcapjru80TIy271KtwDcJiZ9xzKxwvanGEwULnyRjirs%2Fr8tk0BMs1WTROUI3R3HD5eZhcwTKraCa8LmA1FVTAzI452Xqq6iBnTj3zl7Sfk0jdUwqR10UAuMHMbOTwWuig1IrxtI7nLPE6jAPEt6kvo5wyb7zmKE4%2FANtjWyBapbHVar%2FLj6rPjGFV04lVrw5jUdtxELUL87QFrxiZbru5mqKWRoaE4ufOlN8vGUtYaJ6xx175ZKdP5zYSCuVBhLCbI3L0S%2FtETkBwBnVgeNRaxUWAgFRoksU8rlJGPF0QuLDBrJkKsKTnQrxEegOiZpLll2oWWhs7L7PQTn4tFT%2BJ6wO9g6fsES6YZYFOfeO4rBhmQWNJPvyiMLIlVwrga8IPwsYyaBKvVBk7BnCM%2BQ3trMnWCvaA%2BnzaRk6OGQg2%2BDFWAl8NTf%2F7vpw%2BICp%2B6NYddCw4qZX430EHugmVs%2FdnjsYx3qC2ytA7qVrTm%2FjBwObB8%2Bik83Sft9CBk6Q2a08HcpuQW8gEk4k%2BWKU55YgKJRMY218gdctIXCiZeuXV8PMnMYW5xN6grJ3VAnYaeTcre7jLGHoGJyhQfmbfG0i%2BIRBwN70FYtfSjMPL7bFt2jrIGDL8yKSj8ekCLE2NqSIaO8Xsbqvo8OFcwuLLMzgY6pgFI6RDuZQH2G5ynFAeqvV%2F9IxWONfQYz78w4AvYTq1nmCQrwi%2Fg5%2BG4c2elSfbIzW%2FaD35Q2KJJhG%2BURDKltZYtf3VerNkNrM4GboendGCc07kP2whpol2272J%2BRgkE%2Brn5ME0n40z5lubUuY9Al06VW660vKqCNdNyhomJ0IPOLGuI3Jt1o%2FHCvB34AVmGDFH4zxyEYptYvWIu4SSCdeyPvQHtJYF1&X-Amz-Signature=46fbf82b3878d2664b673c288215d9f9c8dc7879b8015615a42ce8b3d69fa172&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
