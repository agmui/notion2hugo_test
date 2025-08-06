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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZSJ4Q4G%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQDNICQQbk8KuF1j6qhZm5zDaGC%2BvZvBbdyyBsFc2fCCjQIhAI%2FLgNMdaz%2FyPeu0RLSZPlhubPVZH%2F0di%2FpV8K3MXbWGKv8DCH4QABoMNjM3NDIzMTgzODA1Igz8dyrXmtneBOm3GE4q3AMCytUshxOnzTyPi6qRc6LWMnEvbezQ5FIagcacia4r%2FoqmMFbjuCVZ64OivM48EqRuDczd9ioUxG%2Fum7IYPtruZpbftPHzgQ3Hv20LcAREp%2FFMvF1AZukgmkBtocVtwQka%2FHH8Dhy%2BlBokpzcy0arMD0Ht6ExIbtz0E8w14FsfxDmjsoK7WpHG5q7nXZdHA8DgBOWuApAR5s8U6BM%2F733%2Fx%2BCrf2piwHZxtKEfIRhYB6xBbcG%2BkLlatl9ufPnHqqE6l3j1l93qwZt6quyLU0%2B1inwhnXw%2FXoiW8ZISA3XoV2LcL6afu6fC40Phs0K%2B2ML%2FHtthVoqJXAEyNjPQjHo%2FYIoJYhRG0fYC1wJoTgLP3081ANCNYPpMD7mnMOVSBlND%2BjKCq0KVZsKlWqr1TUE5Z5%2B%2B4MuREYxbvP9KbPjI33G1Hu2tkgyiDENgPOwsjft2b4glSBM9QyzdBmMOWx422UjGlblaDoEYsrx9M1XOheYug%2FkqrOry9xvRuWJABBWOCEjQu3db5Il%2FMksHqm%2BMzqYaWbzmIuIV%2Br67tg0vmnxq0%2Fm2VpKGNVkDt6ityBmmj8OJTuMPXOhArbtvMeg%2FH3KGcYTrlqgcWmWJ0NmnzXs5u71tjMvOYbPJ8TCmjs%2FEBjqkAdZUPCIVWhVlaiAeB4d%2BpgLKRcn4wspVQ401cSG1EDRyIoYDa0SYzJSfpf0qDc7szovHPlspx0cgXUi4wxFVIb2wBgPgGEOY7JaxAdbYhlX3DCdb1cBO54xGBd8misOcnQZ6IXLYTM5o5%2F8%2BW2%2BuhHEmZhV3ddDf9UDIlHxhgr684R594TgmDG78vuMvyrwyfOGuz29%2FOCGYSZOSqIP59ewm8rSl&X-Amz-Signature=e56bb006dd84425a8601c5d1038374cd8f77379daf7285de7357df32e400a6a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ6YJ5QB%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCx0cNHYoE0kCkEomeRyKwgPQs10EOYPGz%2BJtLKA2be9gIhAN%2Bwc5MO67YRKrsHtuM4KdbS82q4uvpS46T%2ByMNfkIuqKv8DCH4QABoMNjM3NDIzMTgzODA1IgzXFlp%2BAzAEpY0%2Fpkcq3ANivRsnpsLVCjex7qR7RvmK4GF5GCRYE9KyCgt6lvg4uePjBVN20k0HquPMiXWWPVur0jCwbURnrEvRoNdWfZZzCKciH1IrlGvYy6muRm3RfweKKeMoSqfrYuIwtbRLJ62r4jRy87A8U4aW9bdapAPDvem0OoQvigeTrVC8ATEHQmqZTXOrCqfdgEo84p9obDBgha1Jg3%2B3BkT8uv31wefnlTLVJ%2FT3vGj7drb%2Bo9XiTQ32vfirlJFJTD72SdBLyzoZpBlcp%2BKkfjtyHwz3bd7N6V4Dt3pEyYUnUdMGljIuVE02OxRR2Mp62eBKY7DX4SEAw6HEgHwejO0uhgCQxUnUdV74eB%2BOgNjVxSZj1PlOoaQi9ypHjzsJp4GOlXKbbDJCrytFvOwlyi2uSRwtCe7iTerZKHl7zoT2KAb%2BV5vM2gWKfJbok%2B6PeOYTUDQ61g8lVdmnaHVLTWJjVURBCqVxNNpomi4sztyODI4wa9NHkAnTeN3BmBbRiMr0O3%2F7NPMCAlhZz8SuvcbOoODxnXctI9%2BeHbcGujKCRZwyScESji2P1iC%2Bw67BbvvXESIDkjhPUAeHJNebDO5WNgQoJLm5R0OZsF5LNxvY%2BvvJTZutP0iZg2Q7jxyKr%2FUFcjDhjs%2FEBjqkAbDv5LOzpjUWrTfWT2tYZyZACn91mTB1xQ5DWqYexBxrTSDsyqw5LJ9Q4mUo0QY4HwSZAtH7jMeN6ZQJnYyUfZgJxJwWicgl45ZSVidzSGiQFfnkrH9%2FlgTWTH0IuhgRiTVdc518cGbCpnjHKXHvz0k0LP2sU6%2BwWNPtgfdmdg860xCiZdyLmTE%2BWIZw83Qb%2BWvZTXCNrmG0%2BK7jKLy6yjfgg1fG&X-Amz-Signature=447e7d071f2dcec7d1699b251e9a38d8b87df7e0ec1def7ec98c8de9f0fee426&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ6YJ5QB%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCx0cNHYoE0kCkEomeRyKwgPQs10EOYPGz%2BJtLKA2be9gIhAN%2Bwc5MO67YRKrsHtuM4KdbS82q4uvpS46T%2ByMNfkIuqKv8DCH4QABoMNjM3NDIzMTgzODA1IgzXFlp%2BAzAEpY0%2Fpkcq3ANivRsnpsLVCjex7qR7RvmK4GF5GCRYE9KyCgt6lvg4uePjBVN20k0HquPMiXWWPVur0jCwbURnrEvRoNdWfZZzCKciH1IrlGvYy6muRm3RfweKKeMoSqfrYuIwtbRLJ62r4jRy87A8U4aW9bdapAPDvem0OoQvigeTrVC8ATEHQmqZTXOrCqfdgEo84p9obDBgha1Jg3%2B3BkT8uv31wefnlTLVJ%2FT3vGj7drb%2Bo9XiTQ32vfirlJFJTD72SdBLyzoZpBlcp%2BKkfjtyHwz3bd7N6V4Dt3pEyYUnUdMGljIuVE02OxRR2Mp62eBKY7DX4SEAw6HEgHwejO0uhgCQxUnUdV74eB%2BOgNjVxSZj1PlOoaQi9ypHjzsJp4GOlXKbbDJCrytFvOwlyi2uSRwtCe7iTerZKHl7zoT2KAb%2BV5vM2gWKfJbok%2B6PeOYTUDQ61g8lVdmnaHVLTWJjVURBCqVxNNpomi4sztyODI4wa9NHkAnTeN3BmBbRiMr0O3%2F7NPMCAlhZz8SuvcbOoODxnXctI9%2BeHbcGujKCRZwyScESji2P1iC%2Bw67BbvvXESIDkjhPUAeHJNebDO5WNgQoJLm5R0OZsF5LNxvY%2BvvJTZutP0iZg2Q7jxyKr%2FUFcjDhjs%2FEBjqkAbDv5LOzpjUWrTfWT2tYZyZACn91mTB1xQ5DWqYexBxrTSDsyqw5LJ9Q4mUo0QY4HwSZAtH7jMeN6ZQJnYyUfZgJxJwWicgl45ZSVidzSGiQFfnkrH9%2FlgTWTH0IuhgRiTVdc518cGbCpnjHKXHvz0k0LP2sU6%2BwWNPtgfdmdg860xCiZdyLmTE%2BWIZw83Qb%2BWvZTXCNrmG0%2BK7jKLy6yjfgg1fG&X-Amz-Signature=6bcd3c5d54e0546da5c497fc5606987b9cedca00d3deb151ed71d126c75c972d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ6YJ5QB%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCx0cNHYoE0kCkEomeRyKwgPQs10EOYPGz%2BJtLKA2be9gIhAN%2Bwc5MO67YRKrsHtuM4KdbS82q4uvpS46T%2ByMNfkIuqKv8DCH4QABoMNjM3NDIzMTgzODA1IgzXFlp%2BAzAEpY0%2Fpkcq3ANivRsnpsLVCjex7qR7RvmK4GF5GCRYE9KyCgt6lvg4uePjBVN20k0HquPMiXWWPVur0jCwbURnrEvRoNdWfZZzCKciH1IrlGvYy6muRm3RfweKKeMoSqfrYuIwtbRLJ62r4jRy87A8U4aW9bdapAPDvem0OoQvigeTrVC8ATEHQmqZTXOrCqfdgEo84p9obDBgha1Jg3%2B3BkT8uv31wefnlTLVJ%2FT3vGj7drb%2Bo9XiTQ32vfirlJFJTD72SdBLyzoZpBlcp%2BKkfjtyHwz3bd7N6V4Dt3pEyYUnUdMGljIuVE02OxRR2Mp62eBKY7DX4SEAw6HEgHwejO0uhgCQxUnUdV74eB%2BOgNjVxSZj1PlOoaQi9ypHjzsJp4GOlXKbbDJCrytFvOwlyi2uSRwtCe7iTerZKHl7zoT2KAb%2BV5vM2gWKfJbok%2B6PeOYTUDQ61g8lVdmnaHVLTWJjVURBCqVxNNpomi4sztyODI4wa9NHkAnTeN3BmBbRiMr0O3%2F7NPMCAlhZz8SuvcbOoODxnXctI9%2BeHbcGujKCRZwyScESji2P1iC%2Bw67BbvvXESIDkjhPUAeHJNebDO5WNgQoJLm5R0OZsF5LNxvY%2BvvJTZutP0iZg2Q7jxyKr%2FUFcjDhjs%2FEBjqkAbDv5LOzpjUWrTfWT2tYZyZACn91mTB1xQ5DWqYexBxrTSDsyqw5LJ9Q4mUo0QY4HwSZAtH7jMeN6ZQJnYyUfZgJxJwWicgl45ZSVidzSGiQFfnkrH9%2FlgTWTH0IuhgRiTVdc518cGbCpnjHKXHvz0k0LP2sU6%2BwWNPtgfdmdg860xCiZdyLmTE%2BWIZw83Qb%2BWvZTXCNrmG0%2BK7jKLy6yjfgg1fG&X-Amz-Signature=400be38ee6ec791e3e2bd812745bb4accac9c5d18501936db79ea056579712d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ6YJ5QB%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCx0cNHYoE0kCkEomeRyKwgPQs10EOYPGz%2BJtLKA2be9gIhAN%2Bwc5MO67YRKrsHtuM4KdbS82q4uvpS46T%2ByMNfkIuqKv8DCH4QABoMNjM3NDIzMTgzODA1IgzXFlp%2BAzAEpY0%2Fpkcq3ANivRsnpsLVCjex7qR7RvmK4GF5GCRYE9KyCgt6lvg4uePjBVN20k0HquPMiXWWPVur0jCwbURnrEvRoNdWfZZzCKciH1IrlGvYy6muRm3RfweKKeMoSqfrYuIwtbRLJ62r4jRy87A8U4aW9bdapAPDvem0OoQvigeTrVC8ATEHQmqZTXOrCqfdgEo84p9obDBgha1Jg3%2B3BkT8uv31wefnlTLVJ%2FT3vGj7drb%2Bo9XiTQ32vfirlJFJTD72SdBLyzoZpBlcp%2BKkfjtyHwz3bd7N6V4Dt3pEyYUnUdMGljIuVE02OxRR2Mp62eBKY7DX4SEAw6HEgHwejO0uhgCQxUnUdV74eB%2BOgNjVxSZj1PlOoaQi9ypHjzsJp4GOlXKbbDJCrytFvOwlyi2uSRwtCe7iTerZKHl7zoT2KAb%2BV5vM2gWKfJbok%2B6PeOYTUDQ61g8lVdmnaHVLTWJjVURBCqVxNNpomi4sztyODI4wa9NHkAnTeN3BmBbRiMr0O3%2F7NPMCAlhZz8SuvcbOoODxnXctI9%2BeHbcGujKCRZwyScESji2P1iC%2Bw67BbvvXESIDkjhPUAeHJNebDO5WNgQoJLm5R0OZsF5LNxvY%2BvvJTZutP0iZg2Q7jxyKr%2FUFcjDhjs%2FEBjqkAbDv5LOzpjUWrTfWT2tYZyZACn91mTB1xQ5DWqYexBxrTSDsyqw5LJ9Q4mUo0QY4HwSZAtH7jMeN6ZQJnYyUfZgJxJwWicgl45ZSVidzSGiQFfnkrH9%2FlgTWTH0IuhgRiTVdc518cGbCpnjHKXHvz0k0LP2sU6%2BwWNPtgfdmdg860xCiZdyLmTE%2BWIZw83Qb%2BWvZTXCNrmG0%2BK7jKLy6yjfgg1fG&X-Amz-Signature=fe6b2a77b2b296f0c361fd891a9571cc80e8a283f60785ae87193416f2cf0918&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ6YJ5QB%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCx0cNHYoE0kCkEomeRyKwgPQs10EOYPGz%2BJtLKA2be9gIhAN%2Bwc5MO67YRKrsHtuM4KdbS82q4uvpS46T%2ByMNfkIuqKv8DCH4QABoMNjM3NDIzMTgzODA1IgzXFlp%2BAzAEpY0%2Fpkcq3ANivRsnpsLVCjex7qR7RvmK4GF5GCRYE9KyCgt6lvg4uePjBVN20k0HquPMiXWWPVur0jCwbURnrEvRoNdWfZZzCKciH1IrlGvYy6muRm3RfweKKeMoSqfrYuIwtbRLJ62r4jRy87A8U4aW9bdapAPDvem0OoQvigeTrVC8ATEHQmqZTXOrCqfdgEo84p9obDBgha1Jg3%2B3BkT8uv31wefnlTLVJ%2FT3vGj7drb%2Bo9XiTQ32vfirlJFJTD72SdBLyzoZpBlcp%2BKkfjtyHwz3bd7N6V4Dt3pEyYUnUdMGljIuVE02OxRR2Mp62eBKY7DX4SEAw6HEgHwejO0uhgCQxUnUdV74eB%2BOgNjVxSZj1PlOoaQi9ypHjzsJp4GOlXKbbDJCrytFvOwlyi2uSRwtCe7iTerZKHl7zoT2KAb%2BV5vM2gWKfJbok%2B6PeOYTUDQ61g8lVdmnaHVLTWJjVURBCqVxNNpomi4sztyODI4wa9NHkAnTeN3BmBbRiMr0O3%2F7NPMCAlhZz8SuvcbOoODxnXctI9%2BeHbcGujKCRZwyScESji2P1iC%2Bw67BbvvXESIDkjhPUAeHJNebDO5WNgQoJLm5R0OZsF5LNxvY%2BvvJTZutP0iZg2Q7jxyKr%2FUFcjDhjs%2FEBjqkAbDv5LOzpjUWrTfWT2tYZyZACn91mTB1xQ5DWqYexBxrTSDsyqw5LJ9Q4mUo0QY4HwSZAtH7jMeN6ZQJnYyUfZgJxJwWicgl45ZSVidzSGiQFfnkrH9%2FlgTWTH0IuhgRiTVdc518cGbCpnjHKXHvz0k0LP2sU6%2BwWNPtgfdmdg860xCiZdyLmTE%2BWIZw83Qb%2BWvZTXCNrmG0%2BK7jKLy6yjfgg1fG&X-Amz-Signature=ac074a6a5909ef64fd0d8f6b8748e08dfc639ccb4ab9585b5d78896ddeb73ab1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ6YJ5QB%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCx0cNHYoE0kCkEomeRyKwgPQs10EOYPGz%2BJtLKA2be9gIhAN%2Bwc5MO67YRKrsHtuM4KdbS82q4uvpS46T%2ByMNfkIuqKv8DCH4QABoMNjM3NDIzMTgzODA1IgzXFlp%2BAzAEpY0%2Fpkcq3ANivRsnpsLVCjex7qR7RvmK4GF5GCRYE9KyCgt6lvg4uePjBVN20k0HquPMiXWWPVur0jCwbURnrEvRoNdWfZZzCKciH1IrlGvYy6muRm3RfweKKeMoSqfrYuIwtbRLJ62r4jRy87A8U4aW9bdapAPDvem0OoQvigeTrVC8ATEHQmqZTXOrCqfdgEo84p9obDBgha1Jg3%2B3BkT8uv31wefnlTLVJ%2FT3vGj7drb%2Bo9XiTQ32vfirlJFJTD72SdBLyzoZpBlcp%2BKkfjtyHwz3bd7N6V4Dt3pEyYUnUdMGljIuVE02OxRR2Mp62eBKY7DX4SEAw6HEgHwejO0uhgCQxUnUdV74eB%2BOgNjVxSZj1PlOoaQi9ypHjzsJp4GOlXKbbDJCrytFvOwlyi2uSRwtCe7iTerZKHl7zoT2KAb%2BV5vM2gWKfJbok%2B6PeOYTUDQ61g8lVdmnaHVLTWJjVURBCqVxNNpomi4sztyODI4wa9NHkAnTeN3BmBbRiMr0O3%2F7NPMCAlhZz8SuvcbOoODxnXctI9%2BeHbcGujKCRZwyScESji2P1iC%2Bw67BbvvXESIDkjhPUAeHJNebDO5WNgQoJLm5R0OZsF5LNxvY%2BvvJTZutP0iZg2Q7jxyKr%2FUFcjDhjs%2FEBjqkAbDv5LOzpjUWrTfWT2tYZyZACn91mTB1xQ5DWqYexBxrTSDsyqw5LJ9Q4mUo0QY4HwSZAtH7jMeN6ZQJnYyUfZgJxJwWicgl45ZSVidzSGiQFfnkrH9%2FlgTWTH0IuhgRiTVdc518cGbCpnjHKXHvz0k0LP2sU6%2BwWNPtgfdmdg860xCiZdyLmTE%2BWIZw83Qb%2BWvZTXCNrmG0%2BK7jKLy6yjfgg1fG&X-Amz-Signature=4c65239b1dbcce80eaaba085129fd9ea431a2b71705e46f6a6ed1802e4806bea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ6YJ5QB%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCx0cNHYoE0kCkEomeRyKwgPQs10EOYPGz%2BJtLKA2be9gIhAN%2Bwc5MO67YRKrsHtuM4KdbS82q4uvpS46T%2ByMNfkIuqKv8DCH4QABoMNjM3NDIzMTgzODA1IgzXFlp%2BAzAEpY0%2Fpkcq3ANivRsnpsLVCjex7qR7RvmK4GF5GCRYE9KyCgt6lvg4uePjBVN20k0HquPMiXWWPVur0jCwbURnrEvRoNdWfZZzCKciH1IrlGvYy6muRm3RfweKKeMoSqfrYuIwtbRLJ62r4jRy87A8U4aW9bdapAPDvem0OoQvigeTrVC8ATEHQmqZTXOrCqfdgEo84p9obDBgha1Jg3%2B3BkT8uv31wefnlTLVJ%2FT3vGj7drb%2Bo9XiTQ32vfirlJFJTD72SdBLyzoZpBlcp%2BKkfjtyHwz3bd7N6V4Dt3pEyYUnUdMGljIuVE02OxRR2Mp62eBKY7DX4SEAw6HEgHwejO0uhgCQxUnUdV74eB%2BOgNjVxSZj1PlOoaQi9ypHjzsJp4GOlXKbbDJCrytFvOwlyi2uSRwtCe7iTerZKHl7zoT2KAb%2BV5vM2gWKfJbok%2B6PeOYTUDQ61g8lVdmnaHVLTWJjVURBCqVxNNpomi4sztyODI4wa9NHkAnTeN3BmBbRiMr0O3%2F7NPMCAlhZz8SuvcbOoODxnXctI9%2BeHbcGujKCRZwyScESji2P1iC%2Bw67BbvvXESIDkjhPUAeHJNebDO5WNgQoJLm5R0OZsF5LNxvY%2BvvJTZutP0iZg2Q7jxyKr%2FUFcjDhjs%2FEBjqkAbDv5LOzpjUWrTfWT2tYZyZACn91mTB1xQ5DWqYexBxrTSDsyqw5LJ9Q4mUo0QY4HwSZAtH7jMeN6ZQJnYyUfZgJxJwWicgl45ZSVidzSGiQFfnkrH9%2FlgTWTH0IuhgRiTVdc518cGbCpnjHKXHvz0k0LP2sU6%2BwWNPtgfdmdg860xCiZdyLmTE%2BWIZw83Qb%2BWvZTXCNrmG0%2BK7jKLy6yjfgg1fG&X-Amz-Signature=f482c002aa4b298a568c41a4dc91b6865e65484eb15d7cf3af57cd5963a30962&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ6YJ5QB%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCx0cNHYoE0kCkEomeRyKwgPQs10EOYPGz%2BJtLKA2be9gIhAN%2Bwc5MO67YRKrsHtuM4KdbS82q4uvpS46T%2ByMNfkIuqKv8DCH4QABoMNjM3NDIzMTgzODA1IgzXFlp%2BAzAEpY0%2Fpkcq3ANivRsnpsLVCjex7qR7RvmK4GF5GCRYE9KyCgt6lvg4uePjBVN20k0HquPMiXWWPVur0jCwbURnrEvRoNdWfZZzCKciH1IrlGvYy6muRm3RfweKKeMoSqfrYuIwtbRLJ62r4jRy87A8U4aW9bdapAPDvem0OoQvigeTrVC8ATEHQmqZTXOrCqfdgEo84p9obDBgha1Jg3%2B3BkT8uv31wefnlTLVJ%2FT3vGj7drb%2Bo9XiTQ32vfirlJFJTD72SdBLyzoZpBlcp%2BKkfjtyHwz3bd7N6V4Dt3pEyYUnUdMGljIuVE02OxRR2Mp62eBKY7DX4SEAw6HEgHwejO0uhgCQxUnUdV74eB%2BOgNjVxSZj1PlOoaQi9ypHjzsJp4GOlXKbbDJCrytFvOwlyi2uSRwtCe7iTerZKHl7zoT2KAb%2BV5vM2gWKfJbok%2B6PeOYTUDQ61g8lVdmnaHVLTWJjVURBCqVxNNpomi4sztyODI4wa9NHkAnTeN3BmBbRiMr0O3%2F7NPMCAlhZz8SuvcbOoODxnXctI9%2BeHbcGujKCRZwyScESji2P1iC%2Bw67BbvvXESIDkjhPUAeHJNebDO5WNgQoJLm5R0OZsF5LNxvY%2BvvJTZutP0iZg2Q7jxyKr%2FUFcjDhjs%2FEBjqkAbDv5LOzpjUWrTfWT2tYZyZACn91mTB1xQ5DWqYexBxrTSDsyqw5LJ9Q4mUo0QY4HwSZAtH7jMeN6ZQJnYyUfZgJxJwWicgl45ZSVidzSGiQFfnkrH9%2FlgTWTH0IuhgRiTVdc518cGbCpnjHKXHvz0k0LP2sU6%2BwWNPtgfdmdg860xCiZdyLmTE%2BWIZw83Qb%2BWvZTXCNrmG0%2BK7jKLy6yjfgg1fG&X-Amz-Signature=3ace6ef56061c05fdda114117478941f5984f3037a352416b57a0f869c1ee275&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ6YJ5QB%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCx0cNHYoE0kCkEomeRyKwgPQs10EOYPGz%2BJtLKA2be9gIhAN%2Bwc5MO67YRKrsHtuM4KdbS82q4uvpS46T%2ByMNfkIuqKv8DCH4QABoMNjM3NDIzMTgzODA1IgzXFlp%2BAzAEpY0%2Fpkcq3ANivRsnpsLVCjex7qR7RvmK4GF5GCRYE9KyCgt6lvg4uePjBVN20k0HquPMiXWWPVur0jCwbURnrEvRoNdWfZZzCKciH1IrlGvYy6muRm3RfweKKeMoSqfrYuIwtbRLJ62r4jRy87A8U4aW9bdapAPDvem0OoQvigeTrVC8ATEHQmqZTXOrCqfdgEo84p9obDBgha1Jg3%2B3BkT8uv31wefnlTLVJ%2FT3vGj7drb%2Bo9XiTQ32vfirlJFJTD72SdBLyzoZpBlcp%2BKkfjtyHwz3bd7N6V4Dt3pEyYUnUdMGljIuVE02OxRR2Mp62eBKY7DX4SEAw6HEgHwejO0uhgCQxUnUdV74eB%2BOgNjVxSZj1PlOoaQi9ypHjzsJp4GOlXKbbDJCrytFvOwlyi2uSRwtCe7iTerZKHl7zoT2KAb%2BV5vM2gWKfJbok%2B6PeOYTUDQ61g8lVdmnaHVLTWJjVURBCqVxNNpomi4sztyODI4wa9NHkAnTeN3BmBbRiMr0O3%2F7NPMCAlhZz8SuvcbOoODxnXctI9%2BeHbcGujKCRZwyScESji2P1iC%2Bw67BbvvXESIDkjhPUAeHJNebDO5WNgQoJLm5R0OZsF5LNxvY%2BvvJTZutP0iZg2Q7jxyKr%2FUFcjDhjs%2FEBjqkAbDv5LOzpjUWrTfWT2tYZyZACn91mTB1xQ5DWqYexBxrTSDsyqw5LJ9Q4mUo0QY4HwSZAtH7jMeN6ZQJnYyUfZgJxJwWicgl45ZSVidzSGiQFfnkrH9%2FlgTWTH0IuhgRiTVdc518cGbCpnjHKXHvz0k0LP2sU6%2BwWNPtgfdmdg860xCiZdyLmTE%2BWIZw83Qb%2BWvZTXCNrmG0%2BK7jKLy6yjfgg1fG&X-Amz-Signature=bc786d98e646bec35126996fd248e3e39e695b4dacb6cd6c82eb395740584f8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQ6YJ5QB%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQCx0cNHYoE0kCkEomeRyKwgPQs10EOYPGz%2BJtLKA2be9gIhAN%2Bwc5MO67YRKrsHtuM4KdbS82q4uvpS46T%2ByMNfkIuqKv8DCH4QABoMNjM3NDIzMTgzODA1IgzXFlp%2BAzAEpY0%2Fpkcq3ANivRsnpsLVCjex7qR7RvmK4GF5GCRYE9KyCgt6lvg4uePjBVN20k0HquPMiXWWPVur0jCwbURnrEvRoNdWfZZzCKciH1IrlGvYy6muRm3RfweKKeMoSqfrYuIwtbRLJ62r4jRy87A8U4aW9bdapAPDvem0OoQvigeTrVC8ATEHQmqZTXOrCqfdgEo84p9obDBgha1Jg3%2B3BkT8uv31wefnlTLVJ%2FT3vGj7drb%2Bo9XiTQ32vfirlJFJTD72SdBLyzoZpBlcp%2BKkfjtyHwz3bd7N6V4Dt3pEyYUnUdMGljIuVE02OxRR2Mp62eBKY7DX4SEAw6HEgHwejO0uhgCQxUnUdV74eB%2BOgNjVxSZj1PlOoaQi9ypHjzsJp4GOlXKbbDJCrytFvOwlyi2uSRwtCe7iTerZKHl7zoT2KAb%2BV5vM2gWKfJbok%2B6PeOYTUDQ61g8lVdmnaHVLTWJjVURBCqVxNNpomi4sztyODI4wa9NHkAnTeN3BmBbRiMr0O3%2F7NPMCAlhZz8SuvcbOoODxnXctI9%2BeHbcGujKCRZwyScESji2P1iC%2Bw67BbvvXESIDkjhPUAeHJNebDO5WNgQoJLm5R0OZsF5LNxvY%2BvvJTZutP0iZg2Q7jxyKr%2FUFcjDhjs%2FEBjqkAbDv5LOzpjUWrTfWT2tYZyZACn91mTB1xQ5DWqYexBxrTSDsyqw5LJ9Q4mUo0QY4HwSZAtH7jMeN6ZQJnYyUfZgJxJwWicgl45ZSVidzSGiQFfnkrH9%2FlgTWTH0IuhgRiTVdc518cGbCpnjHKXHvz0k0LP2sU6%2BwWNPtgfdmdg860xCiZdyLmTE%2BWIZw83Qb%2BWvZTXCNrmG0%2BK7jKLy6yjfgg1fG&X-Amz-Signature=70ef3a054f9f2bb0aa4d2c8201f31a3b3a76d47cdf50709fd12d8c4fc95ae093&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
