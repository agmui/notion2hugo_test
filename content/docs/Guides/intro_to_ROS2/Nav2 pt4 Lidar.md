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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673QRCG56%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIH9eJawKFfvZDm5t6xVFJ9ex3aZdLzn3s6eh691FljKBAiEA1Cs672u0LaFbfFz6KE3EwHmKpNNGa5u41ln9LCBsBrUq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDGKVVxjECg8xkH%2BVVyrcA31ggL%2F78OlwmZt7PzTi9xdkNYu78pI2Fg6YHOraVfnuutYYPySfBOUkJirjb77vOI0UNHFjtpvWUHcdA%2FOV0gmUhw1fa4KYLfyB%2BSqGvbM0J7cuTrFFcf5oH1cE7k056lYFl4n%2FkXvmR1X4SFPc%2Be5NwsZMbla3TWNrUSPn9UiZnDRFZ5AENxUfyBrLd6%2FdsHj39T7R8A7o3xylqajEsJnCLEA9TOEZI0K4s1DbZMDAVCybYgHgnTKbh2%2F%2Fz4b48mfJRMARzG4kLWb1zyvTddfF1RNVf2texaweYcQ4ehzODE%2BdE67Rx3UB9EbZNvmxt25x2ylvMkujutSa6n2pUl6kQzMJDj%2B9CV8hDyWfuKre4fZYuDvroG2GHJ5LuXm4sr7w875yc7Iwr1r8F4VhtJoyAGnywlMWNOQ%2FyZ4wgEBsfIYiC%2F4bkY6D%2BmNR7zDX3tb2RfIZwo7H4ajYj8ValjY8WBKS%2BzdsM5hjlCu7HDH16dE4cloEEjULE7ru8LkzI%2BR8bf4MXXWl2uM%2BC8j4PZk4rn0IspCH4D9e41MdFzAKC%2FK1UC8YDrhd9Vm%2FrtxPxiGZ%2B9x97UNtlaq5D6gvI90qpgfLh23%2BPY8KkRcK0kEmpahlXE3o0qzNU76gMLnk%2F8QGOqUBGTtbP1A2QSZ%2BIgFiiwq2OCJbDNbfvvoS8KcYkE4FQIA23wFjb80JnSvOwtx1xYY8O7n3PLTf%2BexKy%2BNVYZsFItgXXCSOp%2FdhguNpAPr5qxO8Uckn1bzdddkQChgZJMmiXQfpLP19O2Ce%2B1kFz2v7ijWWcF3TsBo6IPr3Vw%2F8dMibPvBXaNTWXdgEAu2PPjeWIsEsMKdtjhV0R6nCnhbVweUksMov&X-Amz-Signature=fcc06d0bbe427087da596624c84364b260b2c081a7910d9cc2f71bab7c7f518e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYYWF3XQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIHX8mTxl31UwC1UkI7ymaMmGM5VPNgCt4E1e9OddA%2BkrAiAB%2FpAjyAcvJ0eXD3zwG2WtvMtpH80L0pni5YvZDYpUfyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMcAnWioh6y10bu2myKtwDD%2FlyKX6WlEa7X9O%2B9Jdi%2FmU%2FytAt7SIayFKtvbS9HtPX1J3O9MLh3ZF6bHQCR3v0R7rN6fEBPc%2F6%2B3GZLhN1DdesCbLr3umxbTDqxgVldaKRyY2HuESKr29qU0nE9M3Po34NHGjmYJTNkBI4S%2B%2BYuzRBAIM%2FuMQ2jTZDUXR6hNwb9h2X02dlQ5byUrd%2BfSCgQnbeSenVqpq%2Fs%2Fu%2FcDljw6C77%2FbCCq6S9KldiEUT0vsDiwAzJMRZm0mRDhGA8wkUpayHLWeRbbMbAa3AExntN2wMCPECoCPFuW0VVGQMdsIcyqJ5x%2FFSqUZVSR3Cso8W6XHSJyE6KWfg0DD6WCu%2BATttXkp4eSIZOkG7vvaK%2Fim0pGbvOlCKRuXto0qg2kJrhD4oRVOaivOcGQRbvZ22upo3HkBRXWgqPz3GO7vKnFqjBGqoMzNEh1KIhg1oD0p1yO5Ol4KUhvGrZSE4oAFgqLt%2F6BG1L75f%2BYhOiND9AWEBLNoxlxmKxl0pqrUstC%2FpSzRedADqUDN9%2BGuD3tmP9JrnHElO8lje1MB%2Bx6ihFfC5hcLD%2FN%2BJRv%2FvL8xGWoQW4Pe3hxLlF22YbtRQkdfbYTqx0TTkbKCnGtVvoPkZyG%2BnOg4hCRjcVdMx9mUwxOP%2FxAY6pgFEDAmcCA7SqLSMPWAkcSoCguZABj%2B9yTyGklAIuyH2ZQ5gd8rv7wSLYLVDr7Yy%2BSusCoL1sypDbyAVUEBsNQ7IpDTw2kUn6vshxELvG%2Fl3NclHNR8wXbW8it4uxNhRy2Ix9atACOPTQny6FNRvqOX%2FR2j5zMd%2BTzpNq1bUDqS7K%2FgvcjjSiEIC639nKvRUX%2F4oggpXNkVbOb5H8U5BuBRCAeVVt9Fb&X-Amz-Signature=d021fdef77462cef5d6616e4cc86160eceb4e47b9d96b1b9a66b30f13a3d3551&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYYWF3XQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIHX8mTxl31UwC1UkI7ymaMmGM5VPNgCt4E1e9OddA%2BkrAiAB%2FpAjyAcvJ0eXD3zwG2WtvMtpH80L0pni5YvZDYpUfyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMcAnWioh6y10bu2myKtwDD%2FlyKX6WlEa7X9O%2B9Jdi%2FmU%2FytAt7SIayFKtvbS9HtPX1J3O9MLh3ZF6bHQCR3v0R7rN6fEBPc%2F6%2B3GZLhN1DdesCbLr3umxbTDqxgVldaKRyY2HuESKr29qU0nE9M3Po34NHGjmYJTNkBI4S%2B%2BYuzRBAIM%2FuMQ2jTZDUXR6hNwb9h2X02dlQ5byUrd%2BfSCgQnbeSenVqpq%2Fs%2Fu%2FcDljw6C77%2FbCCq6S9KldiEUT0vsDiwAzJMRZm0mRDhGA8wkUpayHLWeRbbMbAa3AExntN2wMCPECoCPFuW0VVGQMdsIcyqJ5x%2FFSqUZVSR3Cso8W6XHSJyE6KWfg0DD6WCu%2BATttXkp4eSIZOkG7vvaK%2Fim0pGbvOlCKRuXto0qg2kJrhD4oRVOaivOcGQRbvZ22upo3HkBRXWgqPz3GO7vKnFqjBGqoMzNEh1KIhg1oD0p1yO5Ol4KUhvGrZSE4oAFgqLt%2F6BG1L75f%2BYhOiND9AWEBLNoxlxmKxl0pqrUstC%2FpSzRedADqUDN9%2BGuD3tmP9JrnHElO8lje1MB%2Bx6ihFfC5hcLD%2FN%2BJRv%2FvL8xGWoQW4Pe3hxLlF22YbtRQkdfbYTqx0TTkbKCnGtVvoPkZyG%2BnOg4hCRjcVdMx9mUwxOP%2FxAY6pgFEDAmcCA7SqLSMPWAkcSoCguZABj%2B9yTyGklAIuyH2ZQ5gd8rv7wSLYLVDr7Yy%2BSusCoL1sypDbyAVUEBsNQ7IpDTw2kUn6vshxELvG%2Fl3NclHNR8wXbW8it4uxNhRy2Ix9atACOPTQny6FNRvqOX%2FR2j5zMd%2BTzpNq1bUDqS7K%2FgvcjjSiEIC639nKvRUX%2F4oggpXNkVbOb5H8U5BuBRCAeVVt9Fb&X-Amz-Signature=5a6ad82a8402fe788917f7aed86cbd9b1d2ac216c176072836715ad87340e721&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYYWF3XQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIHX8mTxl31UwC1UkI7ymaMmGM5VPNgCt4E1e9OddA%2BkrAiAB%2FpAjyAcvJ0eXD3zwG2WtvMtpH80L0pni5YvZDYpUfyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMcAnWioh6y10bu2myKtwDD%2FlyKX6WlEa7X9O%2B9Jdi%2FmU%2FytAt7SIayFKtvbS9HtPX1J3O9MLh3ZF6bHQCR3v0R7rN6fEBPc%2F6%2B3GZLhN1DdesCbLr3umxbTDqxgVldaKRyY2HuESKr29qU0nE9M3Po34NHGjmYJTNkBI4S%2B%2BYuzRBAIM%2FuMQ2jTZDUXR6hNwb9h2X02dlQ5byUrd%2BfSCgQnbeSenVqpq%2Fs%2Fu%2FcDljw6C77%2FbCCq6S9KldiEUT0vsDiwAzJMRZm0mRDhGA8wkUpayHLWeRbbMbAa3AExntN2wMCPECoCPFuW0VVGQMdsIcyqJ5x%2FFSqUZVSR3Cso8W6XHSJyE6KWfg0DD6WCu%2BATttXkp4eSIZOkG7vvaK%2Fim0pGbvOlCKRuXto0qg2kJrhD4oRVOaivOcGQRbvZ22upo3HkBRXWgqPz3GO7vKnFqjBGqoMzNEh1KIhg1oD0p1yO5Ol4KUhvGrZSE4oAFgqLt%2F6BG1L75f%2BYhOiND9AWEBLNoxlxmKxl0pqrUstC%2FpSzRedADqUDN9%2BGuD3tmP9JrnHElO8lje1MB%2Bx6ihFfC5hcLD%2FN%2BJRv%2FvL8xGWoQW4Pe3hxLlF22YbtRQkdfbYTqx0TTkbKCnGtVvoPkZyG%2BnOg4hCRjcVdMx9mUwxOP%2FxAY6pgFEDAmcCA7SqLSMPWAkcSoCguZABj%2B9yTyGklAIuyH2ZQ5gd8rv7wSLYLVDr7Yy%2BSusCoL1sypDbyAVUEBsNQ7IpDTw2kUn6vshxELvG%2Fl3NclHNR8wXbW8it4uxNhRy2Ix9atACOPTQny6FNRvqOX%2FR2j5zMd%2BTzpNq1bUDqS7K%2FgvcjjSiEIC639nKvRUX%2F4oggpXNkVbOb5H8U5BuBRCAeVVt9Fb&X-Amz-Signature=18f83e95197c179167ff49c2cf17ca03b9b7d55bd2b34eeb2497e15753aad752&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYYWF3XQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIHX8mTxl31UwC1UkI7ymaMmGM5VPNgCt4E1e9OddA%2BkrAiAB%2FpAjyAcvJ0eXD3zwG2WtvMtpH80L0pni5YvZDYpUfyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMcAnWioh6y10bu2myKtwDD%2FlyKX6WlEa7X9O%2B9Jdi%2FmU%2FytAt7SIayFKtvbS9HtPX1J3O9MLh3ZF6bHQCR3v0R7rN6fEBPc%2F6%2B3GZLhN1DdesCbLr3umxbTDqxgVldaKRyY2HuESKr29qU0nE9M3Po34NHGjmYJTNkBI4S%2B%2BYuzRBAIM%2FuMQ2jTZDUXR6hNwb9h2X02dlQ5byUrd%2BfSCgQnbeSenVqpq%2Fs%2Fu%2FcDljw6C77%2FbCCq6S9KldiEUT0vsDiwAzJMRZm0mRDhGA8wkUpayHLWeRbbMbAa3AExntN2wMCPECoCPFuW0VVGQMdsIcyqJ5x%2FFSqUZVSR3Cso8W6XHSJyE6KWfg0DD6WCu%2BATttXkp4eSIZOkG7vvaK%2Fim0pGbvOlCKRuXto0qg2kJrhD4oRVOaivOcGQRbvZ22upo3HkBRXWgqPz3GO7vKnFqjBGqoMzNEh1KIhg1oD0p1yO5Ol4KUhvGrZSE4oAFgqLt%2F6BG1L75f%2BYhOiND9AWEBLNoxlxmKxl0pqrUstC%2FpSzRedADqUDN9%2BGuD3tmP9JrnHElO8lje1MB%2Bx6ihFfC5hcLD%2FN%2BJRv%2FvL8xGWoQW4Pe3hxLlF22YbtRQkdfbYTqx0TTkbKCnGtVvoPkZyG%2BnOg4hCRjcVdMx9mUwxOP%2FxAY6pgFEDAmcCA7SqLSMPWAkcSoCguZABj%2B9yTyGklAIuyH2ZQ5gd8rv7wSLYLVDr7Yy%2BSusCoL1sypDbyAVUEBsNQ7IpDTw2kUn6vshxELvG%2Fl3NclHNR8wXbW8it4uxNhRy2Ix9atACOPTQny6FNRvqOX%2FR2j5zMd%2BTzpNq1bUDqS7K%2FgvcjjSiEIC639nKvRUX%2F4oggpXNkVbOb5H8U5BuBRCAeVVt9Fb&X-Amz-Signature=453f6e6032bc43eecb3ab8724635803ff975b3a2e4c0332cbc6fe907fb5e4f88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYYWF3XQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIHX8mTxl31UwC1UkI7ymaMmGM5VPNgCt4E1e9OddA%2BkrAiAB%2FpAjyAcvJ0eXD3zwG2WtvMtpH80L0pni5YvZDYpUfyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMcAnWioh6y10bu2myKtwDD%2FlyKX6WlEa7X9O%2B9Jdi%2FmU%2FytAt7SIayFKtvbS9HtPX1J3O9MLh3ZF6bHQCR3v0R7rN6fEBPc%2F6%2B3GZLhN1DdesCbLr3umxbTDqxgVldaKRyY2HuESKr29qU0nE9M3Po34NHGjmYJTNkBI4S%2B%2BYuzRBAIM%2FuMQ2jTZDUXR6hNwb9h2X02dlQ5byUrd%2BfSCgQnbeSenVqpq%2Fs%2Fu%2FcDljw6C77%2FbCCq6S9KldiEUT0vsDiwAzJMRZm0mRDhGA8wkUpayHLWeRbbMbAa3AExntN2wMCPECoCPFuW0VVGQMdsIcyqJ5x%2FFSqUZVSR3Cso8W6XHSJyE6KWfg0DD6WCu%2BATttXkp4eSIZOkG7vvaK%2Fim0pGbvOlCKRuXto0qg2kJrhD4oRVOaivOcGQRbvZ22upo3HkBRXWgqPz3GO7vKnFqjBGqoMzNEh1KIhg1oD0p1yO5Ol4KUhvGrZSE4oAFgqLt%2F6BG1L75f%2BYhOiND9AWEBLNoxlxmKxl0pqrUstC%2FpSzRedADqUDN9%2BGuD3tmP9JrnHElO8lje1MB%2Bx6ihFfC5hcLD%2FN%2BJRv%2FvL8xGWoQW4Pe3hxLlF22YbtRQkdfbYTqx0TTkbKCnGtVvoPkZyG%2BnOg4hCRjcVdMx9mUwxOP%2FxAY6pgFEDAmcCA7SqLSMPWAkcSoCguZABj%2B9yTyGklAIuyH2ZQ5gd8rv7wSLYLVDr7Yy%2BSusCoL1sypDbyAVUEBsNQ7IpDTw2kUn6vshxELvG%2Fl3NclHNR8wXbW8it4uxNhRy2Ix9atACOPTQny6FNRvqOX%2FR2j5zMd%2BTzpNq1bUDqS7K%2FgvcjjSiEIC639nKvRUX%2F4oggpXNkVbOb5H8U5BuBRCAeVVt9Fb&X-Amz-Signature=200f18f1c9c1bf4130a8f507499e88cab5228a9f2b18a58e6100c22e3b93e7d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYYWF3XQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIHX8mTxl31UwC1UkI7ymaMmGM5VPNgCt4E1e9OddA%2BkrAiAB%2FpAjyAcvJ0eXD3zwG2WtvMtpH80L0pni5YvZDYpUfyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMcAnWioh6y10bu2myKtwDD%2FlyKX6WlEa7X9O%2B9Jdi%2FmU%2FytAt7SIayFKtvbS9HtPX1J3O9MLh3ZF6bHQCR3v0R7rN6fEBPc%2F6%2B3GZLhN1DdesCbLr3umxbTDqxgVldaKRyY2HuESKr29qU0nE9M3Po34NHGjmYJTNkBI4S%2B%2BYuzRBAIM%2FuMQ2jTZDUXR6hNwb9h2X02dlQ5byUrd%2BfSCgQnbeSenVqpq%2Fs%2Fu%2FcDljw6C77%2FbCCq6S9KldiEUT0vsDiwAzJMRZm0mRDhGA8wkUpayHLWeRbbMbAa3AExntN2wMCPECoCPFuW0VVGQMdsIcyqJ5x%2FFSqUZVSR3Cso8W6XHSJyE6KWfg0DD6WCu%2BATttXkp4eSIZOkG7vvaK%2Fim0pGbvOlCKRuXto0qg2kJrhD4oRVOaivOcGQRbvZ22upo3HkBRXWgqPz3GO7vKnFqjBGqoMzNEh1KIhg1oD0p1yO5Ol4KUhvGrZSE4oAFgqLt%2F6BG1L75f%2BYhOiND9AWEBLNoxlxmKxl0pqrUstC%2FpSzRedADqUDN9%2BGuD3tmP9JrnHElO8lje1MB%2Bx6ihFfC5hcLD%2FN%2BJRv%2FvL8xGWoQW4Pe3hxLlF22YbtRQkdfbYTqx0TTkbKCnGtVvoPkZyG%2BnOg4hCRjcVdMx9mUwxOP%2FxAY6pgFEDAmcCA7SqLSMPWAkcSoCguZABj%2B9yTyGklAIuyH2ZQ5gd8rv7wSLYLVDr7Yy%2BSusCoL1sypDbyAVUEBsNQ7IpDTw2kUn6vshxELvG%2Fl3NclHNR8wXbW8it4uxNhRy2Ix9atACOPTQny6FNRvqOX%2FR2j5zMd%2BTzpNq1bUDqS7K%2FgvcjjSiEIC639nKvRUX%2F4oggpXNkVbOb5H8U5BuBRCAeVVt9Fb&X-Amz-Signature=c55916114b94f6635cc391920429906e92fd05a7ad3bc521a3d99d094ba9a8ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYYWF3XQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIHX8mTxl31UwC1UkI7ymaMmGM5VPNgCt4E1e9OddA%2BkrAiAB%2FpAjyAcvJ0eXD3zwG2WtvMtpH80L0pni5YvZDYpUfyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMcAnWioh6y10bu2myKtwDD%2FlyKX6WlEa7X9O%2B9Jdi%2FmU%2FytAt7SIayFKtvbS9HtPX1J3O9MLh3ZF6bHQCR3v0R7rN6fEBPc%2F6%2B3GZLhN1DdesCbLr3umxbTDqxgVldaKRyY2HuESKr29qU0nE9M3Po34NHGjmYJTNkBI4S%2B%2BYuzRBAIM%2FuMQ2jTZDUXR6hNwb9h2X02dlQ5byUrd%2BfSCgQnbeSenVqpq%2Fs%2Fu%2FcDljw6C77%2FbCCq6S9KldiEUT0vsDiwAzJMRZm0mRDhGA8wkUpayHLWeRbbMbAa3AExntN2wMCPECoCPFuW0VVGQMdsIcyqJ5x%2FFSqUZVSR3Cso8W6XHSJyE6KWfg0DD6WCu%2BATttXkp4eSIZOkG7vvaK%2Fim0pGbvOlCKRuXto0qg2kJrhD4oRVOaivOcGQRbvZ22upo3HkBRXWgqPz3GO7vKnFqjBGqoMzNEh1KIhg1oD0p1yO5Ol4KUhvGrZSE4oAFgqLt%2F6BG1L75f%2BYhOiND9AWEBLNoxlxmKxl0pqrUstC%2FpSzRedADqUDN9%2BGuD3tmP9JrnHElO8lje1MB%2Bx6ihFfC5hcLD%2FN%2BJRv%2FvL8xGWoQW4Pe3hxLlF22YbtRQkdfbYTqx0TTkbKCnGtVvoPkZyG%2BnOg4hCRjcVdMx9mUwxOP%2FxAY6pgFEDAmcCA7SqLSMPWAkcSoCguZABj%2B9yTyGklAIuyH2ZQ5gd8rv7wSLYLVDr7Yy%2BSusCoL1sypDbyAVUEBsNQ7IpDTw2kUn6vshxELvG%2Fl3NclHNR8wXbW8it4uxNhRy2Ix9atACOPTQny6FNRvqOX%2FR2j5zMd%2BTzpNq1bUDqS7K%2FgvcjjSiEIC639nKvRUX%2F4oggpXNkVbOb5H8U5BuBRCAeVVt9Fb&X-Amz-Signature=5f703fbe8b3462e37c1eb404bd4de2afe5a5d6613a87fe96f45a690515fbe18e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYYWF3XQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIHX8mTxl31UwC1UkI7ymaMmGM5VPNgCt4E1e9OddA%2BkrAiAB%2FpAjyAcvJ0eXD3zwG2WtvMtpH80L0pni5YvZDYpUfyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMcAnWioh6y10bu2myKtwDD%2FlyKX6WlEa7X9O%2B9Jdi%2FmU%2FytAt7SIayFKtvbS9HtPX1J3O9MLh3ZF6bHQCR3v0R7rN6fEBPc%2F6%2B3GZLhN1DdesCbLr3umxbTDqxgVldaKRyY2HuESKr29qU0nE9M3Po34NHGjmYJTNkBI4S%2B%2BYuzRBAIM%2FuMQ2jTZDUXR6hNwb9h2X02dlQ5byUrd%2BfSCgQnbeSenVqpq%2Fs%2Fu%2FcDljw6C77%2FbCCq6S9KldiEUT0vsDiwAzJMRZm0mRDhGA8wkUpayHLWeRbbMbAa3AExntN2wMCPECoCPFuW0VVGQMdsIcyqJ5x%2FFSqUZVSR3Cso8W6XHSJyE6KWfg0DD6WCu%2BATttXkp4eSIZOkG7vvaK%2Fim0pGbvOlCKRuXto0qg2kJrhD4oRVOaivOcGQRbvZ22upo3HkBRXWgqPz3GO7vKnFqjBGqoMzNEh1KIhg1oD0p1yO5Ol4KUhvGrZSE4oAFgqLt%2F6BG1L75f%2BYhOiND9AWEBLNoxlxmKxl0pqrUstC%2FpSzRedADqUDN9%2BGuD3tmP9JrnHElO8lje1MB%2Bx6ihFfC5hcLD%2FN%2BJRv%2FvL8xGWoQW4Pe3hxLlF22YbtRQkdfbYTqx0TTkbKCnGtVvoPkZyG%2BnOg4hCRjcVdMx9mUwxOP%2FxAY6pgFEDAmcCA7SqLSMPWAkcSoCguZABj%2B9yTyGklAIuyH2ZQ5gd8rv7wSLYLVDr7Yy%2BSusCoL1sypDbyAVUEBsNQ7IpDTw2kUn6vshxELvG%2Fl3NclHNR8wXbW8it4uxNhRy2Ix9atACOPTQny6FNRvqOX%2FR2j5zMd%2BTzpNq1bUDqS7K%2FgvcjjSiEIC639nKvRUX%2F4oggpXNkVbOb5H8U5BuBRCAeVVt9Fb&X-Amz-Signature=b22e8e544f2240b1656d3c0e668f5e31e5f54095df034d22660273f4159ca968&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYYWF3XQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIHX8mTxl31UwC1UkI7ymaMmGM5VPNgCt4E1e9OddA%2BkrAiAB%2FpAjyAcvJ0eXD3zwG2WtvMtpH80L0pni5YvZDYpUfyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMcAnWioh6y10bu2myKtwDD%2FlyKX6WlEa7X9O%2B9Jdi%2FmU%2FytAt7SIayFKtvbS9HtPX1J3O9MLh3ZF6bHQCR3v0R7rN6fEBPc%2F6%2B3GZLhN1DdesCbLr3umxbTDqxgVldaKRyY2HuESKr29qU0nE9M3Po34NHGjmYJTNkBI4S%2B%2BYuzRBAIM%2FuMQ2jTZDUXR6hNwb9h2X02dlQ5byUrd%2BfSCgQnbeSenVqpq%2Fs%2Fu%2FcDljw6C77%2FbCCq6S9KldiEUT0vsDiwAzJMRZm0mRDhGA8wkUpayHLWeRbbMbAa3AExntN2wMCPECoCPFuW0VVGQMdsIcyqJ5x%2FFSqUZVSR3Cso8W6XHSJyE6KWfg0DD6WCu%2BATttXkp4eSIZOkG7vvaK%2Fim0pGbvOlCKRuXto0qg2kJrhD4oRVOaivOcGQRbvZ22upo3HkBRXWgqPz3GO7vKnFqjBGqoMzNEh1KIhg1oD0p1yO5Ol4KUhvGrZSE4oAFgqLt%2F6BG1L75f%2BYhOiND9AWEBLNoxlxmKxl0pqrUstC%2FpSzRedADqUDN9%2BGuD3tmP9JrnHElO8lje1MB%2Bx6ihFfC5hcLD%2FN%2BJRv%2FvL8xGWoQW4Pe3hxLlF22YbtRQkdfbYTqx0TTkbKCnGtVvoPkZyG%2BnOg4hCRjcVdMx9mUwxOP%2FxAY6pgFEDAmcCA7SqLSMPWAkcSoCguZABj%2B9yTyGklAIuyH2ZQ5gd8rv7wSLYLVDr7Yy%2BSusCoL1sypDbyAVUEBsNQ7IpDTw2kUn6vshxELvG%2Fl3NclHNR8wXbW8it4uxNhRy2Ix9atACOPTQny6FNRvqOX%2FR2j5zMd%2BTzpNq1bUDqS7K%2FgvcjjSiEIC639nKvRUX%2F4oggpXNkVbOb5H8U5BuBRCAeVVt9Fb&X-Amz-Signature=1f04921c7300ea0be90c54244a4a8704ec18c2a7a390f384f17833b22cb67778&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYYWF3XQ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIHX8mTxl31UwC1UkI7ymaMmGM5VPNgCt4E1e9OddA%2BkrAiAB%2FpAjyAcvJ0eXD3zwG2WtvMtpH80L0pni5YvZDYpUfyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMcAnWioh6y10bu2myKtwDD%2FlyKX6WlEa7X9O%2B9Jdi%2FmU%2FytAt7SIayFKtvbS9HtPX1J3O9MLh3ZF6bHQCR3v0R7rN6fEBPc%2F6%2B3GZLhN1DdesCbLr3umxbTDqxgVldaKRyY2HuESKr29qU0nE9M3Po34NHGjmYJTNkBI4S%2B%2BYuzRBAIM%2FuMQ2jTZDUXR6hNwb9h2X02dlQ5byUrd%2BfSCgQnbeSenVqpq%2Fs%2Fu%2FcDljw6C77%2FbCCq6S9KldiEUT0vsDiwAzJMRZm0mRDhGA8wkUpayHLWeRbbMbAa3AExntN2wMCPECoCPFuW0VVGQMdsIcyqJ5x%2FFSqUZVSR3Cso8W6XHSJyE6KWfg0DD6WCu%2BATttXkp4eSIZOkG7vvaK%2Fim0pGbvOlCKRuXto0qg2kJrhD4oRVOaivOcGQRbvZ22upo3HkBRXWgqPz3GO7vKnFqjBGqoMzNEh1KIhg1oD0p1yO5Ol4KUhvGrZSE4oAFgqLt%2F6BG1L75f%2BYhOiND9AWEBLNoxlxmKxl0pqrUstC%2FpSzRedADqUDN9%2BGuD3tmP9JrnHElO8lje1MB%2Bx6ihFfC5hcLD%2FN%2BJRv%2FvL8xGWoQW4Pe3hxLlF22YbtRQkdfbYTqx0TTkbKCnGtVvoPkZyG%2BnOg4hCRjcVdMx9mUwxOP%2FxAY6pgFEDAmcCA7SqLSMPWAkcSoCguZABj%2B9yTyGklAIuyH2ZQ5gd8rv7wSLYLVDr7Yy%2BSusCoL1sypDbyAVUEBsNQ7IpDTw2kUn6vshxELvG%2Fl3NclHNR8wXbW8it4uxNhRy2Ix9atACOPTQny6FNRvqOX%2FR2j5zMd%2BTzpNq1bUDqS7K%2FgvcjjSiEIC639nKvRUX%2F4oggpXNkVbOb5H8U5BuBRCAeVVt9Fb&X-Amz-Signature=453f6e6032bc43eecb3ab8724635803ff975b3a2e4c0332cbc6fe907fb5e4f88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
