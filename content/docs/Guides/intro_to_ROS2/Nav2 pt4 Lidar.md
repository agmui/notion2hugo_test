---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-08-02T01:09:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-08-02T01:09:00.000Z"
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

TODO: check inertial block

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

    ~~<inertial>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <mass value="0.125"/>
      <inertia ixx="0.001" ixy="0" ixz="0" iyy="0.001" iyz="0" izz="0.001" />
    </inertial>~~

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KPENSSR%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3STdm26GqGfftyDTLoSVkznGY0ZlT9Koub40LMcSufwIgREab0TQxJi7GKaglqxudT6UvE6uTrOUELdVb7hBIp8oqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLicguxysLcpF4hVTCrcA90SEOQvRdqYJzCUz22SE5vOZvOIHrhxIIAWZsce16Wh737Luby%2BMX%2BAaJVeuYAmSd3CNMnkLh4kFs2y6I5ANABUSfM8GaZx663VnoWTrfCSQJi0JvAyNu04NcQ1sNMEJAW6D8wNslx03xFR%2B4sd13da2Cj2kEUkL2A6jiPp0tQkLDucUqft6NyTV6kk3sCuhxDlw7MsPDf%2Fedna7VOnWYPLAO%2BvpXRUA%2BVEfRPvzbmmMyLs6kT59W9tFlteGNkK2R%2Ff39Z3aJ33iZvnzrp7AAazZXYbPo8hcqs9ruBzig3ub2IJg5jvPTlcAajqPwdwjJMKUtK99Q%2BIMuatbhdHJ8Ocj2rZwE%2FIt4%2BLu5LsPg8hJ2fnNt0KHyU6%2BRgmhiu0fAFzFs%2FcNnUoE7bnMqNA4rHIXFzBfKtF2cLBaVoH0knHC6Ehapx2%2B2C0Elxzfa%2Fwp3EkO%2BrIggd0muG3Orwn3fdtv3x3UmnEJlskMcmDDxZIvYOmeFxBbbRP1FYuiwirkruth0heVKYWeyKD9HR9%2B5GPCd1rdS4lrVH%2FUTJsFmsFHvh1ldfIjecfsYTpdK8%2Fa1ONGxARLM7PTdeFWF1As2%2FKOl3JYGnUNeg6agKOp3teaipkJ4F2SPcIbSHFMM3KtsQGOqUBLHQHlZ9it9GHUrblJj%2FiEj4WM8QHhsz97y62xZVCDushBOMQSgghVT3%2B1s%2BjkyEIZWo0ezg6S8zXF2gA0c904v0bYLIBqhmHJvnmgl6DDlQKEJC1Ry7MD9KKHIwBbrWtyWphiEDVlRrglPzbS2UpTQOqxRhe727aDEwcZzdP3yUZJebr1aMde%2B%2FdcG5Hi7h7zRdwD46SkpLigdHYhG4jvNyJ%2B4bT&X-Amz-Signature=d3f8d9bae068d37bbb0830da88409db7156d3b462197a8f8fa0a4f2b024313f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DMOVYJI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKYKIjUWpYUHrHJJmaSh%2BXytISoZLd8COiIU7BHuUP4AiEAvPPIKNiSB7IgYrOeUIgjOpTp4Q%2FaX4Y00NNkUXGtfEEqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrnIm%2FWagxunvUqkyrcA%2BiJjfxOnyHMXyohBoaqXvvFB7LDDoHOdKv5k8qc8%2FkEEbYdDZnOJlEGZ%2Bv0HG6cwqfI5nDu7in%2F%2F5qk8nol37cGniOPm%2BcUQgh5yhSE5yiS2daaZJbY5J4JW6qUURledySUMdiM1QAmxalYkRRsgXYzZf7dAx0NG5rhOaZ4J8FkhiRCpUhuFmqwpTxGQTG1O%2F6zsTMlrcOiPwxRx9jp83moUIgk%2F%2FBXUyY7Nb3sdF7UYXIW7OBBZee9LMuY2a6EvEqjBHjh2BYZfktp1CZYPiiahLUyBsOU9ZAysHgj42NOtccWtpcufW%2Bg47kQKbYPOEq0z%2BXwZqW2y4CyUZFRn4lkwjekm0Zanc6zFxo8Z3OsnLsil044WUbSeZVv5u8%2BDqn5muhbh57kF2BLN%2By7tGDTWvv4lke16Q3JVT6OHpKYiQcFQqWaibVKAtXjQluPYZlxya%2B4EwU1EsB%2FdXpNb400zzYdfC0wPfIDQg78ZZYQhycfrRvp5zD6BeFfWE2xBtCOhq5Ai%2Fequ%2B2yKMiHwqSvRqbUKVkrTjzg8Dl%2Bhm76Eju23nJzfqvHq9jRjzBW5eBlN9RSCs26T07IrAnVJlkTZ6fE8kdcI9563LAlRVGhNUf3redzkSqH4VepMO3KtsQGOqUBkvyN7Dw0a8tguZzzBHE7EFL1Sy5dYQpe699PPmn3Y2zMmWQXJBcGx%2BYx5j0N4sgdPhs27pox8payuMknI16t%2BG0ThEBjW5cKHp9pY47jr8KGS7ojse2DLxcbxXt58OvAjMHIsyaxauTtOSEtsPKsk1BONs9WRquci66rkadxazHgymkSUPU%2FWcDc1p%2Fz4YbQehjCrGhzsmYpzmAPBt3sYgvDSnom&X-Amz-Signature=2cae19fd7d4be7083035081b3812a973554d2456ee0a0f92d2a164c21d46e67c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DMOVYJI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKYKIjUWpYUHrHJJmaSh%2BXytISoZLd8COiIU7BHuUP4AiEAvPPIKNiSB7IgYrOeUIgjOpTp4Q%2FaX4Y00NNkUXGtfEEqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrnIm%2FWagxunvUqkyrcA%2BiJjfxOnyHMXyohBoaqXvvFB7LDDoHOdKv5k8qc8%2FkEEbYdDZnOJlEGZ%2Bv0HG6cwqfI5nDu7in%2F%2F5qk8nol37cGniOPm%2BcUQgh5yhSE5yiS2daaZJbY5J4JW6qUURledySUMdiM1QAmxalYkRRsgXYzZf7dAx0NG5rhOaZ4J8FkhiRCpUhuFmqwpTxGQTG1O%2F6zsTMlrcOiPwxRx9jp83moUIgk%2F%2FBXUyY7Nb3sdF7UYXIW7OBBZee9LMuY2a6EvEqjBHjh2BYZfktp1CZYPiiahLUyBsOU9ZAysHgj42NOtccWtpcufW%2Bg47kQKbYPOEq0z%2BXwZqW2y4CyUZFRn4lkwjekm0Zanc6zFxo8Z3OsnLsil044WUbSeZVv5u8%2BDqn5muhbh57kF2BLN%2By7tGDTWvv4lke16Q3JVT6OHpKYiQcFQqWaibVKAtXjQluPYZlxya%2B4EwU1EsB%2FdXpNb400zzYdfC0wPfIDQg78ZZYQhycfrRvp5zD6BeFfWE2xBtCOhq5Ai%2Fequ%2B2yKMiHwqSvRqbUKVkrTjzg8Dl%2Bhm76Eju23nJzfqvHq9jRjzBW5eBlN9RSCs26T07IrAnVJlkTZ6fE8kdcI9563LAlRVGhNUf3redzkSqH4VepMO3KtsQGOqUBkvyN7Dw0a8tguZzzBHE7EFL1Sy5dYQpe699PPmn3Y2zMmWQXJBcGx%2BYx5j0N4sgdPhs27pox8payuMknI16t%2BG0ThEBjW5cKHp9pY47jr8KGS7ojse2DLxcbxXt58OvAjMHIsyaxauTtOSEtsPKsk1BONs9WRquci66rkadxazHgymkSUPU%2FWcDc1p%2Fz4YbQehjCrGhzsmYpzmAPBt3sYgvDSnom&X-Amz-Signature=7bb90200f4f2b2d3f0c8fba1d87405bcaaaddb5ebbff731257e15fa23924467a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DMOVYJI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKYKIjUWpYUHrHJJmaSh%2BXytISoZLd8COiIU7BHuUP4AiEAvPPIKNiSB7IgYrOeUIgjOpTp4Q%2FaX4Y00NNkUXGtfEEqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrnIm%2FWagxunvUqkyrcA%2BiJjfxOnyHMXyohBoaqXvvFB7LDDoHOdKv5k8qc8%2FkEEbYdDZnOJlEGZ%2Bv0HG6cwqfI5nDu7in%2F%2F5qk8nol37cGniOPm%2BcUQgh5yhSE5yiS2daaZJbY5J4JW6qUURledySUMdiM1QAmxalYkRRsgXYzZf7dAx0NG5rhOaZ4J8FkhiRCpUhuFmqwpTxGQTG1O%2F6zsTMlrcOiPwxRx9jp83moUIgk%2F%2FBXUyY7Nb3sdF7UYXIW7OBBZee9LMuY2a6EvEqjBHjh2BYZfktp1CZYPiiahLUyBsOU9ZAysHgj42NOtccWtpcufW%2Bg47kQKbYPOEq0z%2BXwZqW2y4CyUZFRn4lkwjekm0Zanc6zFxo8Z3OsnLsil044WUbSeZVv5u8%2BDqn5muhbh57kF2BLN%2By7tGDTWvv4lke16Q3JVT6OHpKYiQcFQqWaibVKAtXjQluPYZlxya%2B4EwU1EsB%2FdXpNb400zzYdfC0wPfIDQg78ZZYQhycfrRvp5zD6BeFfWE2xBtCOhq5Ai%2Fequ%2B2yKMiHwqSvRqbUKVkrTjzg8Dl%2Bhm76Eju23nJzfqvHq9jRjzBW5eBlN9RSCs26T07IrAnVJlkTZ6fE8kdcI9563LAlRVGhNUf3redzkSqH4VepMO3KtsQGOqUBkvyN7Dw0a8tguZzzBHE7EFL1Sy5dYQpe699PPmn3Y2zMmWQXJBcGx%2BYx5j0N4sgdPhs27pox8payuMknI16t%2BG0ThEBjW5cKHp9pY47jr8KGS7ojse2DLxcbxXt58OvAjMHIsyaxauTtOSEtsPKsk1BONs9WRquci66rkadxazHgymkSUPU%2FWcDc1p%2Fz4YbQehjCrGhzsmYpzmAPBt3sYgvDSnom&X-Amz-Signature=0f7e7da05d94673b543bc95ffabf7b711dbfa2a354893618e6d85ffd58c8f2eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DMOVYJI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKYKIjUWpYUHrHJJmaSh%2BXytISoZLd8COiIU7BHuUP4AiEAvPPIKNiSB7IgYrOeUIgjOpTp4Q%2FaX4Y00NNkUXGtfEEqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrnIm%2FWagxunvUqkyrcA%2BiJjfxOnyHMXyohBoaqXvvFB7LDDoHOdKv5k8qc8%2FkEEbYdDZnOJlEGZ%2Bv0HG6cwqfI5nDu7in%2F%2F5qk8nol37cGniOPm%2BcUQgh5yhSE5yiS2daaZJbY5J4JW6qUURledySUMdiM1QAmxalYkRRsgXYzZf7dAx0NG5rhOaZ4J8FkhiRCpUhuFmqwpTxGQTG1O%2F6zsTMlrcOiPwxRx9jp83moUIgk%2F%2FBXUyY7Nb3sdF7UYXIW7OBBZee9LMuY2a6EvEqjBHjh2BYZfktp1CZYPiiahLUyBsOU9ZAysHgj42NOtccWtpcufW%2Bg47kQKbYPOEq0z%2BXwZqW2y4CyUZFRn4lkwjekm0Zanc6zFxo8Z3OsnLsil044WUbSeZVv5u8%2BDqn5muhbh57kF2BLN%2By7tGDTWvv4lke16Q3JVT6OHpKYiQcFQqWaibVKAtXjQluPYZlxya%2B4EwU1EsB%2FdXpNb400zzYdfC0wPfIDQg78ZZYQhycfrRvp5zD6BeFfWE2xBtCOhq5Ai%2Fequ%2B2yKMiHwqSvRqbUKVkrTjzg8Dl%2Bhm76Eju23nJzfqvHq9jRjzBW5eBlN9RSCs26T07IrAnVJlkTZ6fE8kdcI9563LAlRVGhNUf3redzkSqH4VepMO3KtsQGOqUBkvyN7Dw0a8tguZzzBHE7EFL1Sy5dYQpe699PPmn3Y2zMmWQXJBcGx%2BYx5j0N4sgdPhs27pox8payuMknI16t%2BG0ThEBjW5cKHp9pY47jr8KGS7ojse2DLxcbxXt58OvAjMHIsyaxauTtOSEtsPKsk1BONs9WRquci66rkadxazHgymkSUPU%2FWcDc1p%2Fz4YbQehjCrGhzsmYpzmAPBt3sYgvDSnom&X-Amz-Signature=c85de616f250bc6d422f817a99c0e8dd01b085693f4c8fa042b222d9670935c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DMOVYJI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKYKIjUWpYUHrHJJmaSh%2BXytISoZLd8COiIU7BHuUP4AiEAvPPIKNiSB7IgYrOeUIgjOpTp4Q%2FaX4Y00NNkUXGtfEEqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrnIm%2FWagxunvUqkyrcA%2BiJjfxOnyHMXyohBoaqXvvFB7LDDoHOdKv5k8qc8%2FkEEbYdDZnOJlEGZ%2Bv0HG6cwqfI5nDu7in%2F%2F5qk8nol37cGniOPm%2BcUQgh5yhSE5yiS2daaZJbY5J4JW6qUURledySUMdiM1QAmxalYkRRsgXYzZf7dAx0NG5rhOaZ4J8FkhiRCpUhuFmqwpTxGQTG1O%2F6zsTMlrcOiPwxRx9jp83moUIgk%2F%2FBXUyY7Nb3sdF7UYXIW7OBBZee9LMuY2a6EvEqjBHjh2BYZfktp1CZYPiiahLUyBsOU9ZAysHgj42NOtccWtpcufW%2Bg47kQKbYPOEq0z%2BXwZqW2y4CyUZFRn4lkwjekm0Zanc6zFxo8Z3OsnLsil044WUbSeZVv5u8%2BDqn5muhbh57kF2BLN%2By7tGDTWvv4lke16Q3JVT6OHpKYiQcFQqWaibVKAtXjQluPYZlxya%2B4EwU1EsB%2FdXpNb400zzYdfC0wPfIDQg78ZZYQhycfrRvp5zD6BeFfWE2xBtCOhq5Ai%2Fequ%2B2yKMiHwqSvRqbUKVkrTjzg8Dl%2Bhm76Eju23nJzfqvHq9jRjzBW5eBlN9RSCs26T07IrAnVJlkTZ6fE8kdcI9563LAlRVGhNUf3redzkSqH4VepMO3KtsQGOqUBkvyN7Dw0a8tguZzzBHE7EFL1Sy5dYQpe699PPmn3Y2zMmWQXJBcGx%2BYx5j0N4sgdPhs27pox8payuMknI16t%2BG0ThEBjW5cKHp9pY47jr8KGS7ojse2DLxcbxXt58OvAjMHIsyaxauTtOSEtsPKsk1BONs9WRquci66rkadxazHgymkSUPU%2FWcDc1p%2Fz4YbQehjCrGhzsmYpzmAPBt3sYgvDSnom&X-Amz-Signature=fc7a459e65320042ac074f706ad995235dbaba3b2f0be717d0a70fa751158272&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DMOVYJI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKYKIjUWpYUHrHJJmaSh%2BXytISoZLd8COiIU7BHuUP4AiEAvPPIKNiSB7IgYrOeUIgjOpTp4Q%2FaX4Y00NNkUXGtfEEqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrnIm%2FWagxunvUqkyrcA%2BiJjfxOnyHMXyohBoaqXvvFB7LDDoHOdKv5k8qc8%2FkEEbYdDZnOJlEGZ%2Bv0HG6cwqfI5nDu7in%2F%2F5qk8nol37cGniOPm%2BcUQgh5yhSE5yiS2daaZJbY5J4JW6qUURledySUMdiM1QAmxalYkRRsgXYzZf7dAx0NG5rhOaZ4J8FkhiRCpUhuFmqwpTxGQTG1O%2F6zsTMlrcOiPwxRx9jp83moUIgk%2F%2FBXUyY7Nb3sdF7UYXIW7OBBZee9LMuY2a6EvEqjBHjh2BYZfktp1CZYPiiahLUyBsOU9ZAysHgj42NOtccWtpcufW%2Bg47kQKbYPOEq0z%2BXwZqW2y4CyUZFRn4lkwjekm0Zanc6zFxo8Z3OsnLsil044WUbSeZVv5u8%2BDqn5muhbh57kF2BLN%2By7tGDTWvv4lke16Q3JVT6OHpKYiQcFQqWaibVKAtXjQluPYZlxya%2B4EwU1EsB%2FdXpNb400zzYdfC0wPfIDQg78ZZYQhycfrRvp5zD6BeFfWE2xBtCOhq5Ai%2Fequ%2B2yKMiHwqSvRqbUKVkrTjzg8Dl%2Bhm76Eju23nJzfqvHq9jRjzBW5eBlN9RSCs26T07IrAnVJlkTZ6fE8kdcI9563LAlRVGhNUf3redzkSqH4VepMO3KtsQGOqUBkvyN7Dw0a8tguZzzBHE7EFL1Sy5dYQpe699PPmn3Y2zMmWQXJBcGx%2BYx5j0N4sgdPhs27pox8payuMknI16t%2BG0ThEBjW5cKHp9pY47jr8KGS7ojse2DLxcbxXt58OvAjMHIsyaxauTtOSEtsPKsk1BONs9WRquci66rkadxazHgymkSUPU%2FWcDc1p%2Fz4YbQehjCrGhzsmYpzmAPBt3sYgvDSnom&X-Amz-Signature=8ad610baf26f48affa079b5718e3e425f01c20b9c71d30e03ebe3c4bafaa2b7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DMOVYJI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKYKIjUWpYUHrHJJmaSh%2BXytISoZLd8COiIU7BHuUP4AiEAvPPIKNiSB7IgYrOeUIgjOpTp4Q%2FaX4Y00NNkUXGtfEEqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrnIm%2FWagxunvUqkyrcA%2BiJjfxOnyHMXyohBoaqXvvFB7LDDoHOdKv5k8qc8%2FkEEbYdDZnOJlEGZ%2Bv0HG6cwqfI5nDu7in%2F%2F5qk8nol37cGniOPm%2BcUQgh5yhSE5yiS2daaZJbY5J4JW6qUURledySUMdiM1QAmxalYkRRsgXYzZf7dAx0NG5rhOaZ4J8FkhiRCpUhuFmqwpTxGQTG1O%2F6zsTMlrcOiPwxRx9jp83moUIgk%2F%2FBXUyY7Nb3sdF7UYXIW7OBBZee9LMuY2a6EvEqjBHjh2BYZfktp1CZYPiiahLUyBsOU9ZAysHgj42NOtccWtpcufW%2Bg47kQKbYPOEq0z%2BXwZqW2y4CyUZFRn4lkwjekm0Zanc6zFxo8Z3OsnLsil044WUbSeZVv5u8%2BDqn5muhbh57kF2BLN%2By7tGDTWvv4lke16Q3JVT6OHpKYiQcFQqWaibVKAtXjQluPYZlxya%2B4EwU1EsB%2FdXpNb400zzYdfC0wPfIDQg78ZZYQhycfrRvp5zD6BeFfWE2xBtCOhq5Ai%2Fequ%2B2yKMiHwqSvRqbUKVkrTjzg8Dl%2Bhm76Eju23nJzfqvHq9jRjzBW5eBlN9RSCs26T07IrAnVJlkTZ6fE8kdcI9563LAlRVGhNUf3redzkSqH4VepMO3KtsQGOqUBkvyN7Dw0a8tguZzzBHE7EFL1Sy5dYQpe699PPmn3Y2zMmWQXJBcGx%2BYx5j0N4sgdPhs27pox8payuMknI16t%2BG0ThEBjW5cKHp9pY47jr8KGS7ojse2DLxcbxXt58OvAjMHIsyaxauTtOSEtsPKsk1BONs9WRquci66rkadxazHgymkSUPU%2FWcDc1p%2Fz4YbQehjCrGhzsmYpzmAPBt3sYgvDSnom&X-Amz-Signature=71b634b1043b34b9f4abd8841e858a5f6a9c36b69d0898b415f28457f0ae2588&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DMOVYJI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKYKIjUWpYUHrHJJmaSh%2BXytISoZLd8COiIU7BHuUP4AiEAvPPIKNiSB7IgYrOeUIgjOpTp4Q%2FaX4Y00NNkUXGtfEEqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrnIm%2FWagxunvUqkyrcA%2BiJjfxOnyHMXyohBoaqXvvFB7LDDoHOdKv5k8qc8%2FkEEbYdDZnOJlEGZ%2Bv0HG6cwqfI5nDu7in%2F%2F5qk8nol37cGniOPm%2BcUQgh5yhSE5yiS2daaZJbY5J4JW6qUURledySUMdiM1QAmxalYkRRsgXYzZf7dAx0NG5rhOaZ4J8FkhiRCpUhuFmqwpTxGQTG1O%2F6zsTMlrcOiPwxRx9jp83moUIgk%2F%2FBXUyY7Nb3sdF7UYXIW7OBBZee9LMuY2a6EvEqjBHjh2BYZfktp1CZYPiiahLUyBsOU9ZAysHgj42NOtccWtpcufW%2Bg47kQKbYPOEq0z%2BXwZqW2y4CyUZFRn4lkwjekm0Zanc6zFxo8Z3OsnLsil044WUbSeZVv5u8%2BDqn5muhbh57kF2BLN%2By7tGDTWvv4lke16Q3JVT6OHpKYiQcFQqWaibVKAtXjQluPYZlxya%2B4EwU1EsB%2FdXpNb400zzYdfC0wPfIDQg78ZZYQhycfrRvp5zD6BeFfWE2xBtCOhq5Ai%2Fequ%2B2yKMiHwqSvRqbUKVkrTjzg8Dl%2Bhm76Eju23nJzfqvHq9jRjzBW5eBlN9RSCs26T07IrAnVJlkTZ6fE8kdcI9563LAlRVGhNUf3redzkSqH4VepMO3KtsQGOqUBkvyN7Dw0a8tguZzzBHE7EFL1Sy5dYQpe699PPmn3Y2zMmWQXJBcGx%2BYx5j0N4sgdPhs27pox8payuMknI16t%2BG0ThEBjW5cKHp9pY47jr8KGS7ojse2DLxcbxXt58OvAjMHIsyaxauTtOSEtsPKsk1BONs9WRquci66rkadxazHgymkSUPU%2FWcDc1p%2Fz4YbQehjCrGhzsmYpzmAPBt3sYgvDSnom&X-Amz-Signature=ca41fd2772cad4547522a5edbf6629a34088a07a40cb58c10e5473c5c2451b5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: get official docs link

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DMOVYJI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKYKIjUWpYUHrHJJmaSh%2BXytISoZLd8COiIU7BHuUP4AiEAvPPIKNiSB7IgYrOeUIgjOpTp4Q%2FaX4Y00NNkUXGtfEEqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrnIm%2FWagxunvUqkyrcA%2BiJjfxOnyHMXyohBoaqXvvFB7LDDoHOdKv5k8qc8%2FkEEbYdDZnOJlEGZ%2Bv0HG6cwqfI5nDu7in%2F%2F5qk8nol37cGniOPm%2BcUQgh5yhSE5yiS2daaZJbY5J4JW6qUURledySUMdiM1QAmxalYkRRsgXYzZf7dAx0NG5rhOaZ4J8FkhiRCpUhuFmqwpTxGQTG1O%2F6zsTMlrcOiPwxRx9jp83moUIgk%2F%2FBXUyY7Nb3sdF7UYXIW7OBBZee9LMuY2a6EvEqjBHjh2BYZfktp1CZYPiiahLUyBsOU9ZAysHgj42NOtccWtpcufW%2Bg47kQKbYPOEq0z%2BXwZqW2y4CyUZFRn4lkwjekm0Zanc6zFxo8Z3OsnLsil044WUbSeZVv5u8%2BDqn5muhbh57kF2BLN%2By7tGDTWvv4lke16Q3JVT6OHpKYiQcFQqWaibVKAtXjQluPYZlxya%2B4EwU1EsB%2FdXpNb400zzYdfC0wPfIDQg78ZZYQhycfrRvp5zD6BeFfWE2xBtCOhq5Ai%2Fequ%2B2yKMiHwqSvRqbUKVkrTjzg8Dl%2Bhm76Eju23nJzfqvHq9jRjzBW5eBlN9RSCs26T07IrAnVJlkTZ6fE8kdcI9563LAlRVGhNUf3redzkSqH4VepMO3KtsQGOqUBkvyN7Dw0a8tguZzzBHE7EFL1Sy5dYQpe699PPmn3Y2zMmWQXJBcGx%2BYx5j0N4sgdPhs27pox8payuMknI16t%2BG0ThEBjW5cKHp9pY47jr8KGS7ojse2DLxcbxXt58OvAjMHIsyaxauTtOSEtsPKsk1BONs9WRquci66rkadxazHgymkSUPU%2FWcDc1p%2Fz4YbQehjCrGhzsmYpzmAPBt3sYgvDSnom&X-Amz-Signature=127b92e7489396e63d7835d0fa5583cf86f5cb87ae1d5812ac7d26747ee1779b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO: rviz img

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

TODO: add rviz section

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DMOVYJI%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBKYKIjUWpYUHrHJJmaSh%2BXytISoZLd8COiIU7BHuUP4AiEAvPPIKNiSB7IgYrOeUIgjOpTp4Q%2FaX4Y00NNkUXGtfEEqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMrnIm%2FWagxunvUqkyrcA%2BiJjfxOnyHMXyohBoaqXvvFB7LDDoHOdKv5k8qc8%2FkEEbYdDZnOJlEGZ%2Bv0HG6cwqfI5nDu7in%2F%2F5qk8nol37cGniOPm%2BcUQgh5yhSE5yiS2daaZJbY5J4JW6qUURledySUMdiM1QAmxalYkRRsgXYzZf7dAx0NG5rhOaZ4J8FkhiRCpUhuFmqwpTxGQTG1O%2F6zsTMlrcOiPwxRx9jp83moUIgk%2F%2FBXUyY7Nb3sdF7UYXIW7OBBZee9LMuY2a6EvEqjBHjh2BYZfktp1CZYPiiahLUyBsOU9ZAysHgj42NOtccWtpcufW%2Bg47kQKbYPOEq0z%2BXwZqW2y4CyUZFRn4lkwjekm0Zanc6zFxo8Z3OsnLsil044WUbSeZVv5u8%2BDqn5muhbh57kF2BLN%2By7tGDTWvv4lke16Q3JVT6OHpKYiQcFQqWaibVKAtXjQluPYZlxya%2B4EwU1EsB%2FdXpNb400zzYdfC0wPfIDQg78ZZYQhycfrRvp5zD6BeFfWE2xBtCOhq5Ai%2Fequ%2B2yKMiHwqSvRqbUKVkrTjzg8Dl%2Bhm76Eju23nJzfqvHq9jRjzBW5eBlN9RSCs26T07IrAnVJlkTZ6fE8kdcI9563LAlRVGhNUf3redzkSqH4VepMO3KtsQGOqUBkvyN7Dw0a8tguZzzBHE7EFL1Sy5dYQpe699PPmn3Y2zMmWQXJBcGx%2BYx5j0N4sgdPhs27pox8payuMknI16t%2BG0ThEBjW5cKHp9pY47jr8KGS7ojse2DLxcbxXt58OvAjMHIsyaxauTtOSEtsPKsk1BONs9WRquci66rkadxazHgymkSUPU%2FWcDc1p%2Fz4YbQehjCrGhzsmYpzmAPBt3sYgvDSnom&X-Amz-Signature=ff215b855a604f51105f53ba82a08a120c6cf2e0e7d5f9ffbaf428ec15bdc8ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
