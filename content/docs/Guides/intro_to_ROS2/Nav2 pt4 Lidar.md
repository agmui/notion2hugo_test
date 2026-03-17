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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673GWLVCU%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQD4pFHoImL2ekvVGqNv6U8SYVckM4MzdWwgEUSh%2B89QlAIgR9JCLzDS%2FtzSQHGUBRJeLAX7o3S4E9Z3W%2F%2FLM5e9nNEqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDESqHsPfGJe0Q5au7ircA2i6lkMGi%2FkoT8ACp9ZxtBgSSU5QHa2KcuDfRI6HmSfBlE98VlSAb3wVlrUYb9XHoUUs9lceiDmmeBQ4b0m0nCRZMo5FjAdxPP78r9beWLecQpfJw0s0L%2BhqLenuIVNGIxNSJ8dlFjhvaQ65orwQ87b5JpnK%2B%2FsvGGycNADsq0uTOkUYu6YZBKFT3DRUJ3%2BntNMWN7z%2B%2B0JUb1S2ta5tBri2kCX6L%2BjA%2FiBgeyQRQT8vR0OSHJ2%2B5iC796kj25SJhrHxRhpNPr3z89NKaNy7edED4eAXixHO3k%2F0CmHv%2F4x9fsZQcWSewx7T9GZAk%2Fg16mKWsBw1PJumpNiGlj4rTBhZnOJYDQQw8x7QKsWBoCTjQ4TDLN0d5wnAAoUkSBnnvw9JxMRWtjtD6uREzObfNp9Xtw0GNYhbxe32QmDD4rMBOrLJndgXLaQbJVblJdpZeISg0RVQmYp2MWHT7W6hSbIiQ6M1SZxNRObsRC4A4svs2KZnM00i1S%2FW2Ixl8CNwbtf5rtfh4%2B%2BD6iBHMQkism8sptYpvnhJkoeeNAF1x3RGNfat41TQGYM%2BDIPbQU%2Fvw4O6Ns2fgLsTq8WT2vb7ts5pnyDCJD7XUfLWPUYWYsUMPpyzC9v1Zr%2B20sg7ML3o4s0GOqUBvAyui3a4JnjdgRS7W7vorhDyMo9D61piXTqe8HSJAoL3OO41VrnKhPJ25FID4FQcg8cCMK1huBs%2FIzUGsmqryuglFj5chcu79Uk5aX4xS4RpzQ%2FK8Cdrkr9ZHcs3K9%2FFiLamMXK7oy68gKiBa%2FjVNdIRX1oS8%2BAT0aNwjtue8%2FmdmWEsBvbtr2x9BDoKRIZOeHS6LH%2FZEdcusv%2FoAyfFtHD6v4pv&X-Amz-Signature=15ad255d12286a0fa9d2d7a014c374072cedd54850a7c3daceeed62e50aea93b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM4W3HUQ%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDkvNDWszic40Swt%2Fza8mrGlggKtmstkHIChPcAgmJkvQIhAPcoz8ZkxwOxZaacTWU48T2WfW4A9Zc9aBAyhi4spDnnKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOpyfxBFyt17Yvy3sq3ANQfAZW76XaUwKf%2F5XkittdbZSIRExZnyRSc545NfQFr3Sk3wVNduunT6XpJ%2BsQ8wjdi0NTSnTckE9fKq%2BJjiDxJG2UYFGsPqOhUz4kVFBUT8F%2FRed8jOkWyFpn2oFN9zVlct6jU%2ByyR39x39T02QOa%2B8CD0Bt1YVt51Mpqzj41r3u7QPuaggIZRnTCU5c8aYkRN%2B5nJ5FQzhZseQL%2Fi9Hg6CruDtBHwAisn%2FNUqS2FVESCQpTbsNUKgxkJpVy%2FN3l%2FzmE8omMrFZP6pO%2F4J1kuMHg9SH%2Bm7%2FDsjMif1dgZo44EOTr3TomdGvaorzLOh8d%2BqnqgvYXQ5CHWOUdb3dyQt3jMljhScWE%2FUDFwM2mtPGi5O6w0OAcHmjc%2F30AgsiVyll5oKGBCoh6gnA9V2TujAFC0eYDDEmUj6A%2F23TPiaMo8a5YMwMVMmlxxjj2b0NpMGRsbd%2Fof%2F%2BJXXtBnWaWq2xTFPna88ly6X7m%2Bha2jxSV3z%2B7tvQ7eUHbNaRBlvA4TU9ywisYZ0q69jLGLNTxhKSwTmNd5tVEWddbuxv24qQCOb9ZuqtzaSr%2BHLT0rWpASLLOhBjJikxuBmEJLLBUy9a5okHFit0S7PbIPKrfsNHUXQEmwdKHXtPSLgzDy5%2BLNBjqkAUskvMpX5GHt9UvwreKlKK59dc9FyM6lSMkF4GOpimTZlqK%2Frcu2rtF8yDddM24xiUcAVV%2Ff%2FaNkfIUXSftjH8MWWThALmMir5YX1suo73%2BITO47b3JeraMqvK83qX8Lgr2TshXBTN209mBW5Av5h8wD7g7t%2BhtHrhtp8HBBi8CeDLTV21qUpBCxhXUlkAgoq3oYOP4kNvvacEmTaZoLwq%2FvJ9hw&X-Amz-Signature=8d8d8973d4487fd99b281c3ec291a9a8dbfc50bc4c4d130491b51c431d0a03fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM4W3HUQ%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDkvNDWszic40Swt%2Fza8mrGlggKtmstkHIChPcAgmJkvQIhAPcoz8ZkxwOxZaacTWU48T2WfW4A9Zc9aBAyhi4spDnnKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOpyfxBFyt17Yvy3sq3ANQfAZW76XaUwKf%2F5XkittdbZSIRExZnyRSc545NfQFr3Sk3wVNduunT6XpJ%2BsQ8wjdi0NTSnTckE9fKq%2BJjiDxJG2UYFGsPqOhUz4kVFBUT8F%2FRed8jOkWyFpn2oFN9zVlct6jU%2ByyR39x39T02QOa%2B8CD0Bt1YVt51Mpqzj41r3u7QPuaggIZRnTCU5c8aYkRN%2B5nJ5FQzhZseQL%2Fi9Hg6CruDtBHwAisn%2FNUqS2FVESCQpTbsNUKgxkJpVy%2FN3l%2FzmE8omMrFZP6pO%2F4J1kuMHg9SH%2Bm7%2FDsjMif1dgZo44EOTr3TomdGvaorzLOh8d%2BqnqgvYXQ5CHWOUdb3dyQt3jMljhScWE%2FUDFwM2mtPGi5O6w0OAcHmjc%2F30AgsiVyll5oKGBCoh6gnA9V2TujAFC0eYDDEmUj6A%2F23TPiaMo8a5YMwMVMmlxxjj2b0NpMGRsbd%2Fof%2F%2BJXXtBnWaWq2xTFPna88ly6X7m%2Bha2jxSV3z%2B7tvQ7eUHbNaRBlvA4TU9ywisYZ0q69jLGLNTxhKSwTmNd5tVEWddbuxv24qQCOb9ZuqtzaSr%2BHLT0rWpASLLOhBjJikxuBmEJLLBUy9a5okHFit0S7PbIPKrfsNHUXQEmwdKHXtPSLgzDy5%2BLNBjqkAUskvMpX5GHt9UvwreKlKK59dc9FyM6lSMkF4GOpimTZlqK%2Frcu2rtF8yDddM24xiUcAVV%2Ff%2FaNkfIUXSftjH8MWWThALmMir5YX1suo73%2BITO47b3JeraMqvK83qX8Lgr2TshXBTN209mBW5Av5h8wD7g7t%2BhtHrhtp8HBBi8CeDLTV21qUpBCxhXUlkAgoq3oYOP4kNvvacEmTaZoLwq%2FvJ9hw&X-Amz-Signature=8ff9c3eaf99d6c97c399937333703044a12f4c78f377899b63daa1a3dc2d3c32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM4W3HUQ%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDkvNDWszic40Swt%2Fza8mrGlggKtmstkHIChPcAgmJkvQIhAPcoz8ZkxwOxZaacTWU48T2WfW4A9Zc9aBAyhi4spDnnKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOpyfxBFyt17Yvy3sq3ANQfAZW76XaUwKf%2F5XkittdbZSIRExZnyRSc545NfQFr3Sk3wVNduunT6XpJ%2BsQ8wjdi0NTSnTckE9fKq%2BJjiDxJG2UYFGsPqOhUz4kVFBUT8F%2FRed8jOkWyFpn2oFN9zVlct6jU%2ByyR39x39T02QOa%2B8CD0Bt1YVt51Mpqzj41r3u7QPuaggIZRnTCU5c8aYkRN%2B5nJ5FQzhZseQL%2Fi9Hg6CruDtBHwAisn%2FNUqS2FVESCQpTbsNUKgxkJpVy%2FN3l%2FzmE8omMrFZP6pO%2F4J1kuMHg9SH%2Bm7%2FDsjMif1dgZo44EOTr3TomdGvaorzLOh8d%2BqnqgvYXQ5CHWOUdb3dyQt3jMljhScWE%2FUDFwM2mtPGi5O6w0OAcHmjc%2F30AgsiVyll5oKGBCoh6gnA9V2TujAFC0eYDDEmUj6A%2F23TPiaMo8a5YMwMVMmlxxjj2b0NpMGRsbd%2Fof%2F%2BJXXtBnWaWq2xTFPna88ly6X7m%2Bha2jxSV3z%2B7tvQ7eUHbNaRBlvA4TU9ywisYZ0q69jLGLNTxhKSwTmNd5tVEWddbuxv24qQCOb9ZuqtzaSr%2BHLT0rWpASLLOhBjJikxuBmEJLLBUy9a5okHFit0S7PbIPKrfsNHUXQEmwdKHXtPSLgzDy5%2BLNBjqkAUskvMpX5GHt9UvwreKlKK59dc9FyM6lSMkF4GOpimTZlqK%2Frcu2rtF8yDddM24xiUcAVV%2Ff%2FaNkfIUXSftjH8MWWThALmMir5YX1suo73%2BITO47b3JeraMqvK83qX8Lgr2TshXBTN209mBW5Av5h8wD7g7t%2BhtHrhtp8HBBi8CeDLTV21qUpBCxhXUlkAgoq3oYOP4kNvvacEmTaZoLwq%2FvJ9hw&X-Amz-Signature=50faed907c3604e405735ac65e98ca827c8a3020526a8d5b1f6f1e5bbda88ae8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM4W3HUQ%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDkvNDWszic40Swt%2Fza8mrGlggKtmstkHIChPcAgmJkvQIhAPcoz8ZkxwOxZaacTWU48T2WfW4A9Zc9aBAyhi4spDnnKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOpyfxBFyt17Yvy3sq3ANQfAZW76XaUwKf%2F5XkittdbZSIRExZnyRSc545NfQFr3Sk3wVNduunT6XpJ%2BsQ8wjdi0NTSnTckE9fKq%2BJjiDxJG2UYFGsPqOhUz4kVFBUT8F%2FRed8jOkWyFpn2oFN9zVlct6jU%2ByyR39x39T02QOa%2B8CD0Bt1YVt51Mpqzj41r3u7QPuaggIZRnTCU5c8aYkRN%2B5nJ5FQzhZseQL%2Fi9Hg6CruDtBHwAisn%2FNUqS2FVESCQpTbsNUKgxkJpVy%2FN3l%2FzmE8omMrFZP6pO%2F4J1kuMHg9SH%2Bm7%2FDsjMif1dgZo44EOTr3TomdGvaorzLOh8d%2BqnqgvYXQ5CHWOUdb3dyQt3jMljhScWE%2FUDFwM2mtPGi5O6w0OAcHmjc%2F30AgsiVyll5oKGBCoh6gnA9V2TujAFC0eYDDEmUj6A%2F23TPiaMo8a5YMwMVMmlxxjj2b0NpMGRsbd%2Fof%2F%2BJXXtBnWaWq2xTFPna88ly6X7m%2Bha2jxSV3z%2B7tvQ7eUHbNaRBlvA4TU9ywisYZ0q69jLGLNTxhKSwTmNd5tVEWddbuxv24qQCOb9ZuqtzaSr%2BHLT0rWpASLLOhBjJikxuBmEJLLBUy9a5okHFit0S7PbIPKrfsNHUXQEmwdKHXtPSLgzDy5%2BLNBjqkAUskvMpX5GHt9UvwreKlKK59dc9FyM6lSMkF4GOpimTZlqK%2Frcu2rtF8yDddM24xiUcAVV%2Ff%2FaNkfIUXSftjH8MWWThALmMir5YX1suo73%2BITO47b3JeraMqvK83qX8Lgr2TshXBTN209mBW5Av5h8wD7g7t%2BhtHrhtp8HBBi8CeDLTV21qUpBCxhXUlkAgoq3oYOP4kNvvacEmTaZoLwq%2FvJ9hw&X-Amz-Signature=c1b15221ba19eeddbb693649be56e613881744596270171672a4cdbb8f1a108e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM4W3HUQ%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDkvNDWszic40Swt%2Fza8mrGlggKtmstkHIChPcAgmJkvQIhAPcoz8ZkxwOxZaacTWU48T2WfW4A9Zc9aBAyhi4spDnnKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOpyfxBFyt17Yvy3sq3ANQfAZW76XaUwKf%2F5XkittdbZSIRExZnyRSc545NfQFr3Sk3wVNduunT6XpJ%2BsQ8wjdi0NTSnTckE9fKq%2BJjiDxJG2UYFGsPqOhUz4kVFBUT8F%2FRed8jOkWyFpn2oFN9zVlct6jU%2ByyR39x39T02QOa%2B8CD0Bt1YVt51Mpqzj41r3u7QPuaggIZRnTCU5c8aYkRN%2B5nJ5FQzhZseQL%2Fi9Hg6CruDtBHwAisn%2FNUqS2FVESCQpTbsNUKgxkJpVy%2FN3l%2FzmE8omMrFZP6pO%2F4J1kuMHg9SH%2Bm7%2FDsjMif1dgZo44EOTr3TomdGvaorzLOh8d%2BqnqgvYXQ5CHWOUdb3dyQt3jMljhScWE%2FUDFwM2mtPGi5O6w0OAcHmjc%2F30AgsiVyll5oKGBCoh6gnA9V2TujAFC0eYDDEmUj6A%2F23TPiaMo8a5YMwMVMmlxxjj2b0NpMGRsbd%2Fof%2F%2BJXXtBnWaWq2xTFPna88ly6X7m%2Bha2jxSV3z%2B7tvQ7eUHbNaRBlvA4TU9ywisYZ0q69jLGLNTxhKSwTmNd5tVEWddbuxv24qQCOb9ZuqtzaSr%2BHLT0rWpASLLOhBjJikxuBmEJLLBUy9a5okHFit0S7PbIPKrfsNHUXQEmwdKHXtPSLgzDy5%2BLNBjqkAUskvMpX5GHt9UvwreKlKK59dc9FyM6lSMkF4GOpimTZlqK%2Frcu2rtF8yDddM24xiUcAVV%2Ff%2FaNkfIUXSftjH8MWWThALmMir5YX1suo73%2BITO47b3JeraMqvK83qX8Lgr2TshXBTN209mBW5Av5h8wD7g7t%2BhtHrhtp8HBBi8CeDLTV21qUpBCxhXUlkAgoq3oYOP4kNvvacEmTaZoLwq%2FvJ9hw&X-Amz-Signature=9a98a8cc250ddd5629932713370ca5e1aa327c095cb6af90bbe1aafa48b6f4c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM4W3HUQ%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDkvNDWszic40Swt%2Fza8mrGlggKtmstkHIChPcAgmJkvQIhAPcoz8ZkxwOxZaacTWU48T2WfW4A9Zc9aBAyhi4spDnnKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOpyfxBFyt17Yvy3sq3ANQfAZW76XaUwKf%2F5XkittdbZSIRExZnyRSc545NfQFr3Sk3wVNduunT6XpJ%2BsQ8wjdi0NTSnTckE9fKq%2BJjiDxJG2UYFGsPqOhUz4kVFBUT8F%2FRed8jOkWyFpn2oFN9zVlct6jU%2ByyR39x39T02QOa%2B8CD0Bt1YVt51Mpqzj41r3u7QPuaggIZRnTCU5c8aYkRN%2B5nJ5FQzhZseQL%2Fi9Hg6CruDtBHwAisn%2FNUqS2FVESCQpTbsNUKgxkJpVy%2FN3l%2FzmE8omMrFZP6pO%2F4J1kuMHg9SH%2Bm7%2FDsjMif1dgZo44EOTr3TomdGvaorzLOh8d%2BqnqgvYXQ5CHWOUdb3dyQt3jMljhScWE%2FUDFwM2mtPGi5O6w0OAcHmjc%2F30AgsiVyll5oKGBCoh6gnA9V2TujAFC0eYDDEmUj6A%2F23TPiaMo8a5YMwMVMmlxxjj2b0NpMGRsbd%2Fof%2F%2BJXXtBnWaWq2xTFPna88ly6X7m%2Bha2jxSV3z%2B7tvQ7eUHbNaRBlvA4TU9ywisYZ0q69jLGLNTxhKSwTmNd5tVEWddbuxv24qQCOb9ZuqtzaSr%2BHLT0rWpASLLOhBjJikxuBmEJLLBUy9a5okHFit0S7PbIPKrfsNHUXQEmwdKHXtPSLgzDy5%2BLNBjqkAUskvMpX5GHt9UvwreKlKK59dc9FyM6lSMkF4GOpimTZlqK%2Frcu2rtF8yDddM24xiUcAVV%2Ff%2FaNkfIUXSftjH8MWWThALmMir5YX1suo73%2BITO47b3JeraMqvK83qX8Lgr2TshXBTN209mBW5Av5h8wD7g7t%2BhtHrhtp8HBBi8CeDLTV21qUpBCxhXUlkAgoq3oYOP4kNvvacEmTaZoLwq%2FvJ9hw&X-Amz-Signature=fae856871f51bdbb6a3a2901145a92069b78224c390c33d64febedce17015d76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM4W3HUQ%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDkvNDWszic40Swt%2Fza8mrGlggKtmstkHIChPcAgmJkvQIhAPcoz8ZkxwOxZaacTWU48T2WfW4A9Zc9aBAyhi4spDnnKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOpyfxBFyt17Yvy3sq3ANQfAZW76XaUwKf%2F5XkittdbZSIRExZnyRSc545NfQFr3Sk3wVNduunT6XpJ%2BsQ8wjdi0NTSnTckE9fKq%2BJjiDxJG2UYFGsPqOhUz4kVFBUT8F%2FRed8jOkWyFpn2oFN9zVlct6jU%2ByyR39x39T02QOa%2B8CD0Bt1YVt51Mpqzj41r3u7QPuaggIZRnTCU5c8aYkRN%2B5nJ5FQzhZseQL%2Fi9Hg6CruDtBHwAisn%2FNUqS2FVESCQpTbsNUKgxkJpVy%2FN3l%2FzmE8omMrFZP6pO%2F4J1kuMHg9SH%2Bm7%2FDsjMif1dgZo44EOTr3TomdGvaorzLOh8d%2BqnqgvYXQ5CHWOUdb3dyQt3jMljhScWE%2FUDFwM2mtPGi5O6w0OAcHmjc%2F30AgsiVyll5oKGBCoh6gnA9V2TujAFC0eYDDEmUj6A%2F23TPiaMo8a5YMwMVMmlxxjj2b0NpMGRsbd%2Fof%2F%2BJXXtBnWaWq2xTFPna88ly6X7m%2Bha2jxSV3z%2B7tvQ7eUHbNaRBlvA4TU9ywisYZ0q69jLGLNTxhKSwTmNd5tVEWddbuxv24qQCOb9ZuqtzaSr%2BHLT0rWpASLLOhBjJikxuBmEJLLBUy9a5okHFit0S7PbIPKrfsNHUXQEmwdKHXtPSLgzDy5%2BLNBjqkAUskvMpX5GHt9UvwreKlKK59dc9FyM6lSMkF4GOpimTZlqK%2Frcu2rtF8yDddM24xiUcAVV%2Ff%2FaNkfIUXSftjH8MWWThALmMir5YX1suo73%2BITO47b3JeraMqvK83qX8Lgr2TshXBTN209mBW5Av5h8wD7g7t%2BhtHrhtp8HBBi8CeDLTV21qUpBCxhXUlkAgoq3oYOP4kNvvacEmTaZoLwq%2FvJ9hw&X-Amz-Signature=d0d29698dd063aa7142855ca94c55714a32e3b849b308110667793ba3d834ccc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM4W3HUQ%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDkvNDWszic40Swt%2Fza8mrGlggKtmstkHIChPcAgmJkvQIhAPcoz8ZkxwOxZaacTWU48T2WfW4A9Zc9aBAyhi4spDnnKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOpyfxBFyt17Yvy3sq3ANQfAZW76XaUwKf%2F5XkittdbZSIRExZnyRSc545NfQFr3Sk3wVNduunT6XpJ%2BsQ8wjdi0NTSnTckE9fKq%2BJjiDxJG2UYFGsPqOhUz4kVFBUT8F%2FRed8jOkWyFpn2oFN9zVlct6jU%2ByyR39x39T02QOa%2B8CD0Bt1YVt51Mpqzj41r3u7QPuaggIZRnTCU5c8aYkRN%2B5nJ5FQzhZseQL%2Fi9Hg6CruDtBHwAisn%2FNUqS2FVESCQpTbsNUKgxkJpVy%2FN3l%2FzmE8omMrFZP6pO%2F4J1kuMHg9SH%2Bm7%2FDsjMif1dgZo44EOTr3TomdGvaorzLOh8d%2BqnqgvYXQ5CHWOUdb3dyQt3jMljhScWE%2FUDFwM2mtPGi5O6w0OAcHmjc%2F30AgsiVyll5oKGBCoh6gnA9V2TujAFC0eYDDEmUj6A%2F23TPiaMo8a5YMwMVMmlxxjj2b0NpMGRsbd%2Fof%2F%2BJXXtBnWaWq2xTFPna88ly6X7m%2Bha2jxSV3z%2B7tvQ7eUHbNaRBlvA4TU9ywisYZ0q69jLGLNTxhKSwTmNd5tVEWddbuxv24qQCOb9ZuqtzaSr%2BHLT0rWpASLLOhBjJikxuBmEJLLBUy9a5okHFit0S7PbIPKrfsNHUXQEmwdKHXtPSLgzDy5%2BLNBjqkAUskvMpX5GHt9UvwreKlKK59dc9FyM6lSMkF4GOpimTZlqK%2Frcu2rtF8yDddM24xiUcAVV%2Ff%2FaNkfIUXSftjH8MWWThALmMir5YX1suo73%2BITO47b3JeraMqvK83qX8Lgr2TshXBTN209mBW5Av5h8wD7g7t%2BhtHrhtp8HBBi8CeDLTV21qUpBCxhXUlkAgoq3oYOP4kNvvacEmTaZoLwq%2FvJ9hw&X-Amz-Signature=a836571afbb835236bf8caa398c89bcefade97afd63b4601561ccb1364a6227a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM4W3HUQ%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDkvNDWszic40Swt%2Fza8mrGlggKtmstkHIChPcAgmJkvQIhAPcoz8ZkxwOxZaacTWU48T2WfW4A9Zc9aBAyhi4spDnnKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOpyfxBFyt17Yvy3sq3ANQfAZW76XaUwKf%2F5XkittdbZSIRExZnyRSc545NfQFr3Sk3wVNduunT6XpJ%2BsQ8wjdi0NTSnTckE9fKq%2BJjiDxJG2UYFGsPqOhUz4kVFBUT8F%2FRed8jOkWyFpn2oFN9zVlct6jU%2ByyR39x39T02QOa%2B8CD0Bt1YVt51Mpqzj41r3u7QPuaggIZRnTCU5c8aYkRN%2B5nJ5FQzhZseQL%2Fi9Hg6CruDtBHwAisn%2FNUqS2FVESCQpTbsNUKgxkJpVy%2FN3l%2FzmE8omMrFZP6pO%2F4J1kuMHg9SH%2Bm7%2FDsjMif1dgZo44EOTr3TomdGvaorzLOh8d%2BqnqgvYXQ5CHWOUdb3dyQt3jMljhScWE%2FUDFwM2mtPGi5O6w0OAcHmjc%2F30AgsiVyll5oKGBCoh6gnA9V2TujAFC0eYDDEmUj6A%2F23TPiaMo8a5YMwMVMmlxxjj2b0NpMGRsbd%2Fof%2F%2BJXXtBnWaWq2xTFPna88ly6X7m%2Bha2jxSV3z%2B7tvQ7eUHbNaRBlvA4TU9ywisYZ0q69jLGLNTxhKSwTmNd5tVEWddbuxv24qQCOb9ZuqtzaSr%2BHLT0rWpASLLOhBjJikxuBmEJLLBUy9a5okHFit0S7PbIPKrfsNHUXQEmwdKHXtPSLgzDy5%2BLNBjqkAUskvMpX5GHt9UvwreKlKK59dc9FyM6lSMkF4GOpimTZlqK%2Frcu2rtF8yDddM24xiUcAVV%2Ff%2FaNkfIUXSftjH8MWWThALmMir5YX1suo73%2BITO47b3JeraMqvK83qX8Lgr2TshXBTN209mBW5Av5h8wD7g7t%2BhtHrhtp8HBBi8CeDLTV21qUpBCxhXUlkAgoq3oYOP4kNvvacEmTaZoLwq%2FvJ9hw&X-Amz-Signature=dcaa5e4a1fac1a4c1e1386faf06e2610a0a5a017a7c5dc4e9d5eb4d856cb17ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM4W3HUQ%2F20260317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260317T020946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDkvNDWszic40Swt%2Fza8mrGlggKtmstkHIChPcAgmJkvQIhAPcoz8ZkxwOxZaacTWU48T2WfW4A9Zc9aBAyhi4spDnnKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOpyfxBFyt17Yvy3sq3ANQfAZW76XaUwKf%2F5XkittdbZSIRExZnyRSc545NfQFr3Sk3wVNduunT6XpJ%2BsQ8wjdi0NTSnTckE9fKq%2BJjiDxJG2UYFGsPqOhUz4kVFBUT8F%2FRed8jOkWyFpn2oFN9zVlct6jU%2ByyR39x39T02QOa%2B8CD0Bt1YVt51Mpqzj41r3u7QPuaggIZRnTCU5c8aYkRN%2B5nJ5FQzhZseQL%2Fi9Hg6CruDtBHwAisn%2FNUqS2FVESCQpTbsNUKgxkJpVy%2FN3l%2FzmE8omMrFZP6pO%2F4J1kuMHg9SH%2Bm7%2FDsjMif1dgZo44EOTr3TomdGvaorzLOh8d%2BqnqgvYXQ5CHWOUdb3dyQt3jMljhScWE%2FUDFwM2mtPGi5O6w0OAcHmjc%2F30AgsiVyll5oKGBCoh6gnA9V2TujAFC0eYDDEmUj6A%2F23TPiaMo8a5YMwMVMmlxxjj2b0NpMGRsbd%2Fof%2F%2BJXXtBnWaWq2xTFPna88ly6X7m%2Bha2jxSV3z%2B7tvQ7eUHbNaRBlvA4TU9ywisYZ0q69jLGLNTxhKSwTmNd5tVEWddbuxv24qQCOb9ZuqtzaSr%2BHLT0rWpASLLOhBjJikxuBmEJLLBUy9a5okHFit0S7PbIPKrfsNHUXQEmwdKHXtPSLgzDy5%2BLNBjqkAUskvMpX5GHt9UvwreKlKK59dc9FyM6lSMkF4GOpimTZlqK%2Frcu2rtF8yDddM24xiUcAVV%2Ff%2FaNkfIUXSftjH8MWWThALmMir5YX1suo73%2BITO47b3JeraMqvK83qX8Lgr2TshXBTN209mBW5Av5h8wD7g7t%2BhtHrhtp8HBBi8CeDLTV21qUpBCxhXUlkAgoq3oYOP4kNvvacEmTaZoLwq%2FvJ9hw&X-Amz-Signature=c1b15221ba19eeddbb693649be56e613881744596270171672a4cdbb8f1a108e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
