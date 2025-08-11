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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYBZLSMG%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDeuPf2dSM%2B1H3xuyYoXpVr3ZrGuDifyi7HT44mcvgq7wIhALQ1P0M8BPiIIQuDJDMN2voq%2B706%2BlN%2B8vDYFp3qOEHcKogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHYNvjBGUfZKeTZpoq3AOQkL%2BAxAZcCMXd6WHNeF%2FEwl5rVsBXoReL1WCEusfzzqRYVc1GmqQFtifwON2uifiSDRIIy5tRkPS4YDaOT5%2BVejyHekV5VZmChb2ul8fisB0VFkgWALKkrOgS50G2QCODMueJuULKjLU%2BxnAAdJ%2FFbJ5g45iq6FUY8P3iWXgfChH%2BOnY58bxdn7qPSDGjLJEynBQXCMaPr3jumVSFRuGGK3j5I%2FvWKF8jKzguu5kPShOZAggV42RcDNAUboYH5rpUUfbxkLi2xqNzmOCheyYyWao2I7DxNESeRyb7w1Jli%2BGfK4rLdWK6Z8Th1d8uMO5UYUeU5lS4dEC6FDUqnxTVnKWYf5mKOq94R6iLRX6cfY0MU7eS89u8eLjcfDLa%2B0h3Nchr4d4MIycyYOXAw9HDj1WTwoGg4LaHjQp7MZaRER85rI0UJZcrBeluX2Ne%2FTN8emPOs3KxqAC%2BaxdNC%2BSQxJ6EXZ5XGH6zqXIhaxjd2HOoyLUwI2B%2B2FDNvrW4iker%2Fz5KXlJvJRsmLO4R0Wmz8BKKbQIZWETwQTPngSO%2BdgoHtPr3%2F3Koc6UiznUKcsSLyX5vgvUA9qOHbzmTLLwUW5CTPg0SZoZjxZORjyvFRrnmezjGBVaQW%2BJQdDCx%2BebEBjqkAR2%2FRzLC%2FF%2FxZVimv2dyQigqXCYmuLQtEzYw4nxq7iaM3mkZslqYOgtTmnbUhSm%2BPMkAiEQocEiUdCF92UNIsHUNmBBKSCwapMNxPyF1xPzFCSD5p1iY3Zv8RjfWA4yUf8u5TcFDY57zJvrVDImE7t9ZzLerZpzFoObLnLOhSg5nF%2BAtyDpIxXmJixnfKjOSWjy8GSn7WaGDuptoFdaB%2BSTO0o51&X-Amz-Signature=ab9e1e143eb3ad88a4492071abd67eb67ed8cc4d0ba91fae163bded6642e6a0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5GCU3ES%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJzlJ778a4XGMGRCdpAOgiwTSRiC9OjHlyhm2S0JgqfAiEA2MbTsvArHFZe9P5mXQRWMvFALhiGvnLRZvxkMKGblycqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNagDOtY4cRBaJCmsircA2aIOfrgZy6jr8%2BsPVIApQHtbz6f2YEssDq4FzIuI40%2B%2FueIR1ahgEjtVndvdiq%2Fz974cz94NDT5qmPau1FMTIqeLA4Yt6Ry3kjL7XIfih9XMx4HK2ZgNfoUNyrf%2F0W9%2Fm%2FZLQ5NG6wa8PSFxJ1QnzxxAxpFwb3qlVNFf%2BNsOZf1N6rZhXpcWjejLAhvtzZC9c%2Fls%2B5SocpjRcpmUsRDsfCWjnZx6p9PVOOqdFnS9qIF4kjndf7pcUZ%2BBsPOO7T0ibQzzKTaj4LNFQyjyTyT2L1o4H6ixalIrbcGrEnqx5vpc8VqyjY9xIhaluqSf0ezz%2BfKP3FC2UCPcrGS2mm%2F2sx0Q%2Fp%2BUmhYxWRZH4CWfzK6MVhW6isrte5b%2Bk7TjHPG%2F3EVlaKfDvZXt%2FfaU6WiFevOiItAnuliX23S8ND9S7fWcmLQcWaTBBRgP7GTM%2BR64M%2BKvfcpUKUIzNRqcPvAfwYnW1EejNPIz8a6rHelMypzwupYH4I%2F%2FRhMbNY4surOL%2BOELYSsQkrFK%2BjE%2B6S1N6OQZFNlB324thWOvI%2Blc6uxFgxUCaGyfvmLBsCmIB2%2FirEO5tSBeMLZPjnlosE4xUm64q5%2BYmX5r88aUJBfHFFqJCHSIJl2Zkv2UUSmMIb65sQGOqUBhY8KZHGUGlur0a%2FB3Lq9RkeoB%2BYKPWacM0WSAMYu%2FEWIQjDv3Q4UA1IbS3eJQMbN%2Fn3SQ7LaS9pTah1QrAdma4E%2FiqZBrg95J9Ky68yn%2FWJlULGKe55B0leN%2Fml7qcnTR2F%2F9qeJH5HkcL%2Bo6mG0ZYrm5I0OI6JTzQYRp%2BRzMQpQA4LjN7GgH5K98G0aKZq5fCgAR%2FSQch9oid2Aj4ZxeubPhB46&X-Amz-Signature=11a95349b82fb01c8a580dc69032dc337bd681fa674ef223327ab0f5d546cf33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5GCU3ES%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJzlJ778a4XGMGRCdpAOgiwTSRiC9OjHlyhm2S0JgqfAiEA2MbTsvArHFZe9P5mXQRWMvFALhiGvnLRZvxkMKGblycqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNagDOtY4cRBaJCmsircA2aIOfrgZy6jr8%2BsPVIApQHtbz6f2YEssDq4FzIuI40%2B%2FueIR1ahgEjtVndvdiq%2Fz974cz94NDT5qmPau1FMTIqeLA4Yt6Ry3kjL7XIfih9XMx4HK2ZgNfoUNyrf%2F0W9%2Fm%2FZLQ5NG6wa8PSFxJ1QnzxxAxpFwb3qlVNFf%2BNsOZf1N6rZhXpcWjejLAhvtzZC9c%2Fls%2B5SocpjRcpmUsRDsfCWjnZx6p9PVOOqdFnS9qIF4kjndf7pcUZ%2BBsPOO7T0ibQzzKTaj4LNFQyjyTyT2L1o4H6ixalIrbcGrEnqx5vpc8VqyjY9xIhaluqSf0ezz%2BfKP3FC2UCPcrGS2mm%2F2sx0Q%2Fp%2BUmhYxWRZH4CWfzK6MVhW6isrte5b%2Bk7TjHPG%2F3EVlaKfDvZXt%2FfaU6WiFevOiItAnuliX23S8ND9S7fWcmLQcWaTBBRgP7GTM%2BR64M%2BKvfcpUKUIzNRqcPvAfwYnW1EejNPIz8a6rHelMypzwupYH4I%2F%2FRhMbNY4surOL%2BOELYSsQkrFK%2BjE%2B6S1N6OQZFNlB324thWOvI%2Blc6uxFgxUCaGyfvmLBsCmIB2%2FirEO5tSBeMLZPjnlosE4xUm64q5%2BYmX5r88aUJBfHFFqJCHSIJl2Zkv2UUSmMIb65sQGOqUBhY8KZHGUGlur0a%2FB3Lq9RkeoB%2BYKPWacM0WSAMYu%2FEWIQjDv3Q4UA1IbS3eJQMbN%2Fn3SQ7LaS9pTah1QrAdma4E%2FiqZBrg95J9Ky68yn%2FWJlULGKe55B0leN%2Fml7qcnTR2F%2F9qeJH5HkcL%2Bo6mG0ZYrm5I0OI6JTzQYRp%2BRzMQpQA4LjN7GgH5K98G0aKZq5fCgAR%2FSQch9oid2Aj4ZxeubPhB46&X-Amz-Signature=71034fa46cdf095fae49dae46d93495061037385908e6aa3af84324391689d33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5GCU3ES%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJzlJ778a4XGMGRCdpAOgiwTSRiC9OjHlyhm2S0JgqfAiEA2MbTsvArHFZe9P5mXQRWMvFALhiGvnLRZvxkMKGblycqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNagDOtY4cRBaJCmsircA2aIOfrgZy6jr8%2BsPVIApQHtbz6f2YEssDq4FzIuI40%2B%2FueIR1ahgEjtVndvdiq%2Fz974cz94NDT5qmPau1FMTIqeLA4Yt6Ry3kjL7XIfih9XMx4HK2ZgNfoUNyrf%2F0W9%2Fm%2FZLQ5NG6wa8PSFxJ1QnzxxAxpFwb3qlVNFf%2BNsOZf1N6rZhXpcWjejLAhvtzZC9c%2Fls%2B5SocpjRcpmUsRDsfCWjnZx6p9PVOOqdFnS9qIF4kjndf7pcUZ%2BBsPOO7T0ibQzzKTaj4LNFQyjyTyT2L1o4H6ixalIrbcGrEnqx5vpc8VqyjY9xIhaluqSf0ezz%2BfKP3FC2UCPcrGS2mm%2F2sx0Q%2Fp%2BUmhYxWRZH4CWfzK6MVhW6isrte5b%2Bk7TjHPG%2F3EVlaKfDvZXt%2FfaU6WiFevOiItAnuliX23S8ND9S7fWcmLQcWaTBBRgP7GTM%2BR64M%2BKvfcpUKUIzNRqcPvAfwYnW1EejNPIz8a6rHelMypzwupYH4I%2F%2FRhMbNY4surOL%2BOELYSsQkrFK%2BjE%2B6S1N6OQZFNlB324thWOvI%2Blc6uxFgxUCaGyfvmLBsCmIB2%2FirEO5tSBeMLZPjnlosE4xUm64q5%2BYmX5r88aUJBfHFFqJCHSIJl2Zkv2UUSmMIb65sQGOqUBhY8KZHGUGlur0a%2FB3Lq9RkeoB%2BYKPWacM0WSAMYu%2FEWIQjDv3Q4UA1IbS3eJQMbN%2Fn3SQ7LaS9pTah1QrAdma4E%2FiqZBrg95J9Ky68yn%2FWJlULGKe55B0leN%2Fml7qcnTR2F%2F9qeJH5HkcL%2Bo6mG0ZYrm5I0OI6JTzQYRp%2BRzMQpQA4LjN7GgH5K98G0aKZq5fCgAR%2FSQch9oid2Aj4ZxeubPhB46&X-Amz-Signature=1053f43843d7a77e934fef067be715e8c42cdf974caf396f24919915f09d92f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5GCU3ES%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJzlJ778a4XGMGRCdpAOgiwTSRiC9OjHlyhm2S0JgqfAiEA2MbTsvArHFZe9P5mXQRWMvFALhiGvnLRZvxkMKGblycqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNagDOtY4cRBaJCmsircA2aIOfrgZy6jr8%2BsPVIApQHtbz6f2YEssDq4FzIuI40%2B%2FueIR1ahgEjtVndvdiq%2Fz974cz94NDT5qmPau1FMTIqeLA4Yt6Ry3kjL7XIfih9XMx4HK2ZgNfoUNyrf%2F0W9%2Fm%2FZLQ5NG6wa8PSFxJ1QnzxxAxpFwb3qlVNFf%2BNsOZf1N6rZhXpcWjejLAhvtzZC9c%2Fls%2B5SocpjRcpmUsRDsfCWjnZx6p9PVOOqdFnS9qIF4kjndf7pcUZ%2BBsPOO7T0ibQzzKTaj4LNFQyjyTyT2L1o4H6ixalIrbcGrEnqx5vpc8VqyjY9xIhaluqSf0ezz%2BfKP3FC2UCPcrGS2mm%2F2sx0Q%2Fp%2BUmhYxWRZH4CWfzK6MVhW6isrte5b%2Bk7TjHPG%2F3EVlaKfDvZXt%2FfaU6WiFevOiItAnuliX23S8ND9S7fWcmLQcWaTBBRgP7GTM%2BR64M%2BKvfcpUKUIzNRqcPvAfwYnW1EejNPIz8a6rHelMypzwupYH4I%2F%2FRhMbNY4surOL%2BOELYSsQkrFK%2BjE%2B6S1N6OQZFNlB324thWOvI%2Blc6uxFgxUCaGyfvmLBsCmIB2%2FirEO5tSBeMLZPjnlosE4xUm64q5%2BYmX5r88aUJBfHFFqJCHSIJl2Zkv2UUSmMIb65sQGOqUBhY8KZHGUGlur0a%2FB3Lq9RkeoB%2BYKPWacM0WSAMYu%2FEWIQjDv3Q4UA1IbS3eJQMbN%2Fn3SQ7LaS9pTah1QrAdma4E%2FiqZBrg95J9Ky68yn%2FWJlULGKe55B0leN%2Fml7qcnTR2F%2F9qeJH5HkcL%2Bo6mG0ZYrm5I0OI6JTzQYRp%2BRzMQpQA4LjN7GgH5K98G0aKZq5fCgAR%2FSQch9oid2Aj4ZxeubPhB46&X-Amz-Signature=da263eaf07e71000eb50692a16bca2a18eb9758925f7a16dafb07170fda48ade&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5GCU3ES%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJzlJ778a4XGMGRCdpAOgiwTSRiC9OjHlyhm2S0JgqfAiEA2MbTsvArHFZe9P5mXQRWMvFALhiGvnLRZvxkMKGblycqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNagDOtY4cRBaJCmsircA2aIOfrgZy6jr8%2BsPVIApQHtbz6f2YEssDq4FzIuI40%2B%2FueIR1ahgEjtVndvdiq%2Fz974cz94NDT5qmPau1FMTIqeLA4Yt6Ry3kjL7XIfih9XMx4HK2ZgNfoUNyrf%2F0W9%2Fm%2FZLQ5NG6wa8PSFxJ1QnzxxAxpFwb3qlVNFf%2BNsOZf1N6rZhXpcWjejLAhvtzZC9c%2Fls%2B5SocpjRcpmUsRDsfCWjnZx6p9PVOOqdFnS9qIF4kjndf7pcUZ%2BBsPOO7T0ibQzzKTaj4LNFQyjyTyT2L1o4H6ixalIrbcGrEnqx5vpc8VqyjY9xIhaluqSf0ezz%2BfKP3FC2UCPcrGS2mm%2F2sx0Q%2Fp%2BUmhYxWRZH4CWfzK6MVhW6isrte5b%2Bk7TjHPG%2F3EVlaKfDvZXt%2FfaU6WiFevOiItAnuliX23S8ND9S7fWcmLQcWaTBBRgP7GTM%2BR64M%2BKvfcpUKUIzNRqcPvAfwYnW1EejNPIz8a6rHelMypzwupYH4I%2F%2FRhMbNY4surOL%2BOELYSsQkrFK%2BjE%2B6S1N6OQZFNlB324thWOvI%2Blc6uxFgxUCaGyfvmLBsCmIB2%2FirEO5tSBeMLZPjnlosE4xUm64q5%2BYmX5r88aUJBfHFFqJCHSIJl2Zkv2UUSmMIb65sQGOqUBhY8KZHGUGlur0a%2FB3Lq9RkeoB%2BYKPWacM0WSAMYu%2FEWIQjDv3Q4UA1IbS3eJQMbN%2Fn3SQ7LaS9pTah1QrAdma4E%2FiqZBrg95J9Ky68yn%2FWJlULGKe55B0leN%2Fml7qcnTR2F%2F9qeJH5HkcL%2Bo6mG0ZYrm5I0OI6JTzQYRp%2BRzMQpQA4LjN7GgH5K98G0aKZq5fCgAR%2FSQch9oid2Aj4ZxeubPhB46&X-Amz-Signature=4826fff4ee7427b22e9f217af9f4e10dc56a7db6808c01465748319d90b051b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5GCU3ES%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJzlJ778a4XGMGRCdpAOgiwTSRiC9OjHlyhm2S0JgqfAiEA2MbTsvArHFZe9P5mXQRWMvFALhiGvnLRZvxkMKGblycqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNagDOtY4cRBaJCmsircA2aIOfrgZy6jr8%2BsPVIApQHtbz6f2YEssDq4FzIuI40%2B%2FueIR1ahgEjtVndvdiq%2Fz974cz94NDT5qmPau1FMTIqeLA4Yt6Ry3kjL7XIfih9XMx4HK2ZgNfoUNyrf%2F0W9%2Fm%2FZLQ5NG6wa8PSFxJ1QnzxxAxpFwb3qlVNFf%2BNsOZf1N6rZhXpcWjejLAhvtzZC9c%2Fls%2B5SocpjRcpmUsRDsfCWjnZx6p9PVOOqdFnS9qIF4kjndf7pcUZ%2BBsPOO7T0ibQzzKTaj4LNFQyjyTyT2L1o4H6ixalIrbcGrEnqx5vpc8VqyjY9xIhaluqSf0ezz%2BfKP3FC2UCPcrGS2mm%2F2sx0Q%2Fp%2BUmhYxWRZH4CWfzK6MVhW6isrte5b%2Bk7TjHPG%2F3EVlaKfDvZXt%2FfaU6WiFevOiItAnuliX23S8ND9S7fWcmLQcWaTBBRgP7GTM%2BR64M%2BKvfcpUKUIzNRqcPvAfwYnW1EejNPIz8a6rHelMypzwupYH4I%2F%2FRhMbNY4surOL%2BOELYSsQkrFK%2BjE%2B6S1N6OQZFNlB324thWOvI%2Blc6uxFgxUCaGyfvmLBsCmIB2%2FirEO5tSBeMLZPjnlosE4xUm64q5%2BYmX5r88aUJBfHFFqJCHSIJl2Zkv2UUSmMIb65sQGOqUBhY8KZHGUGlur0a%2FB3Lq9RkeoB%2BYKPWacM0WSAMYu%2FEWIQjDv3Q4UA1IbS3eJQMbN%2Fn3SQ7LaS9pTah1QrAdma4E%2FiqZBrg95J9Ky68yn%2FWJlULGKe55B0leN%2Fml7qcnTR2F%2F9qeJH5HkcL%2Bo6mG0ZYrm5I0OI6JTzQYRp%2BRzMQpQA4LjN7GgH5K98G0aKZq5fCgAR%2FSQch9oid2Aj4ZxeubPhB46&X-Amz-Signature=d45cec73f4547fd6cacdefa584add261cbde909f260460b144e7155290668785&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5GCU3ES%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJzlJ778a4XGMGRCdpAOgiwTSRiC9OjHlyhm2S0JgqfAiEA2MbTsvArHFZe9P5mXQRWMvFALhiGvnLRZvxkMKGblycqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNagDOtY4cRBaJCmsircA2aIOfrgZy6jr8%2BsPVIApQHtbz6f2YEssDq4FzIuI40%2B%2FueIR1ahgEjtVndvdiq%2Fz974cz94NDT5qmPau1FMTIqeLA4Yt6Ry3kjL7XIfih9XMx4HK2ZgNfoUNyrf%2F0W9%2Fm%2FZLQ5NG6wa8PSFxJ1QnzxxAxpFwb3qlVNFf%2BNsOZf1N6rZhXpcWjejLAhvtzZC9c%2Fls%2B5SocpjRcpmUsRDsfCWjnZx6p9PVOOqdFnS9qIF4kjndf7pcUZ%2BBsPOO7T0ibQzzKTaj4LNFQyjyTyT2L1o4H6ixalIrbcGrEnqx5vpc8VqyjY9xIhaluqSf0ezz%2BfKP3FC2UCPcrGS2mm%2F2sx0Q%2Fp%2BUmhYxWRZH4CWfzK6MVhW6isrte5b%2Bk7TjHPG%2F3EVlaKfDvZXt%2FfaU6WiFevOiItAnuliX23S8ND9S7fWcmLQcWaTBBRgP7GTM%2BR64M%2BKvfcpUKUIzNRqcPvAfwYnW1EejNPIz8a6rHelMypzwupYH4I%2F%2FRhMbNY4surOL%2BOELYSsQkrFK%2BjE%2B6S1N6OQZFNlB324thWOvI%2Blc6uxFgxUCaGyfvmLBsCmIB2%2FirEO5tSBeMLZPjnlosE4xUm64q5%2BYmX5r88aUJBfHFFqJCHSIJl2Zkv2UUSmMIb65sQGOqUBhY8KZHGUGlur0a%2FB3Lq9RkeoB%2BYKPWacM0WSAMYu%2FEWIQjDv3Q4UA1IbS3eJQMbN%2Fn3SQ7LaS9pTah1QrAdma4E%2FiqZBrg95J9Ky68yn%2FWJlULGKe55B0leN%2Fml7qcnTR2F%2F9qeJH5HkcL%2Bo6mG0ZYrm5I0OI6JTzQYRp%2BRzMQpQA4LjN7GgH5K98G0aKZq5fCgAR%2FSQch9oid2Aj4ZxeubPhB46&X-Amz-Signature=a5a751b886d025238571900d1a7fc4797c0fa298a04523d78adbade0349c2f85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5GCU3ES%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJzlJ778a4XGMGRCdpAOgiwTSRiC9OjHlyhm2S0JgqfAiEA2MbTsvArHFZe9P5mXQRWMvFALhiGvnLRZvxkMKGblycqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNagDOtY4cRBaJCmsircA2aIOfrgZy6jr8%2BsPVIApQHtbz6f2YEssDq4FzIuI40%2B%2FueIR1ahgEjtVndvdiq%2Fz974cz94NDT5qmPau1FMTIqeLA4Yt6Ry3kjL7XIfih9XMx4HK2ZgNfoUNyrf%2F0W9%2Fm%2FZLQ5NG6wa8PSFxJ1QnzxxAxpFwb3qlVNFf%2BNsOZf1N6rZhXpcWjejLAhvtzZC9c%2Fls%2B5SocpjRcpmUsRDsfCWjnZx6p9PVOOqdFnS9qIF4kjndf7pcUZ%2BBsPOO7T0ibQzzKTaj4LNFQyjyTyT2L1o4H6ixalIrbcGrEnqx5vpc8VqyjY9xIhaluqSf0ezz%2BfKP3FC2UCPcrGS2mm%2F2sx0Q%2Fp%2BUmhYxWRZH4CWfzK6MVhW6isrte5b%2Bk7TjHPG%2F3EVlaKfDvZXt%2FfaU6WiFevOiItAnuliX23S8ND9S7fWcmLQcWaTBBRgP7GTM%2BR64M%2BKvfcpUKUIzNRqcPvAfwYnW1EejNPIz8a6rHelMypzwupYH4I%2F%2FRhMbNY4surOL%2BOELYSsQkrFK%2BjE%2B6S1N6OQZFNlB324thWOvI%2Blc6uxFgxUCaGyfvmLBsCmIB2%2FirEO5tSBeMLZPjnlosE4xUm64q5%2BYmX5r88aUJBfHFFqJCHSIJl2Zkv2UUSmMIb65sQGOqUBhY8KZHGUGlur0a%2FB3Lq9RkeoB%2BYKPWacM0WSAMYu%2FEWIQjDv3Q4UA1IbS3eJQMbN%2Fn3SQ7LaS9pTah1QrAdma4E%2FiqZBrg95J9Ky68yn%2FWJlULGKe55B0leN%2Fml7qcnTR2F%2F9qeJH5HkcL%2Bo6mG0ZYrm5I0OI6JTzQYRp%2BRzMQpQA4LjN7GgH5K98G0aKZq5fCgAR%2FSQch9oid2Aj4ZxeubPhB46&X-Amz-Signature=6298db85b20d823b6920f4aae422c2cbe912ed7b5ede03e92823a060f18f20b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5GCU3ES%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJzlJ778a4XGMGRCdpAOgiwTSRiC9OjHlyhm2S0JgqfAiEA2MbTsvArHFZe9P5mXQRWMvFALhiGvnLRZvxkMKGblycqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNagDOtY4cRBaJCmsircA2aIOfrgZy6jr8%2BsPVIApQHtbz6f2YEssDq4FzIuI40%2B%2FueIR1ahgEjtVndvdiq%2Fz974cz94NDT5qmPau1FMTIqeLA4Yt6Ry3kjL7XIfih9XMx4HK2ZgNfoUNyrf%2F0W9%2Fm%2FZLQ5NG6wa8PSFxJ1QnzxxAxpFwb3qlVNFf%2BNsOZf1N6rZhXpcWjejLAhvtzZC9c%2Fls%2B5SocpjRcpmUsRDsfCWjnZx6p9PVOOqdFnS9qIF4kjndf7pcUZ%2BBsPOO7T0ibQzzKTaj4LNFQyjyTyT2L1o4H6ixalIrbcGrEnqx5vpc8VqyjY9xIhaluqSf0ezz%2BfKP3FC2UCPcrGS2mm%2F2sx0Q%2Fp%2BUmhYxWRZH4CWfzK6MVhW6isrte5b%2Bk7TjHPG%2F3EVlaKfDvZXt%2FfaU6WiFevOiItAnuliX23S8ND9S7fWcmLQcWaTBBRgP7GTM%2BR64M%2BKvfcpUKUIzNRqcPvAfwYnW1EejNPIz8a6rHelMypzwupYH4I%2F%2FRhMbNY4surOL%2BOELYSsQkrFK%2BjE%2B6S1N6OQZFNlB324thWOvI%2Blc6uxFgxUCaGyfvmLBsCmIB2%2FirEO5tSBeMLZPjnlosE4xUm64q5%2BYmX5r88aUJBfHFFqJCHSIJl2Zkv2UUSmMIb65sQGOqUBhY8KZHGUGlur0a%2FB3Lq9RkeoB%2BYKPWacM0WSAMYu%2FEWIQjDv3Q4UA1IbS3eJQMbN%2Fn3SQ7LaS9pTah1QrAdma4E%2FiqZBrg95J9Ky68yn%2FWJlULGKe55B0leN%2Fml7qcnTR2F%2F9qeJH5HkcL%2Bo6mG0ZYrm5I0OI6JTzQYRp%2BRzMQpQA4LjN7GgH5K98G0aKZq5fCgAR%2FSQch9oid2Aj4ZxeubPhB46&X-Amz-Signature=ab192b5e88b5503af2cc9de8dd7e033e61a10b6815f2873b035211b0b9e7b7e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5GCU3ES%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T110947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJzlJ778a4XGMGRCdpAOgiwTSRiC9OjHlyhm2S0JgqfAiEA2MbTsvArHFZe9P5mXQRWMvFALhiGvnLRZvxkMKGblycqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNagDOtY4cRBaJCmsircA2aIOfrgZy6jr8%2BsPVIApQHtbz6f2YEssDq4FzIuI40%2B%2FueIR1ahgEjtVndvdiq%2Fz974cz94NDT5qmPau1FMTIqeLA4Yt6Ry3kjL7XIfih9XMx4HK2ZgNfoUNyrf%2F0W9%2Fm%2FZLQ5NG6wa8PSFxJ1QnzxxAxpFwb3qlVNFf%2BNsOZf1N6rZhXpcWjejLAhvtzZC9c%2Fls%2B5SocpjRcpmUsRDsfCWjnZx6p9PVOOqdFnS9qIF4kjndf7pcUZ%2BBsPOO7T0ibQzzKTaj4LNFQyjyTyT2L1o4H6ixalIrbcGrEnqx5vpc8VqyjY9xIhaluqSf0ezz%2BfKP3FC2UCPcrGS2mm%2F2sx0Q%2Fp%2BUmhYxWRZH4CWfzK6MVhW6isrte5b%2Bk7TjHPG%2F3EVlaKfDvZXt%2FfaU6WiFevOiItAnuliX23S8ND9S7fWcmLQcWaTBBRgP7GTM%2BR64M%2BKvfcpUKUIzNRqcPvAfwYnW1EejNPIz8a6rHelMypzwupYH4I%2F%2FRhMbNY4surOL%2BOELYSsQkrFK%2BjE%2B6S1N6OQZFNlB324thWOvI%2Blc6uxFgxUCaGyfvmLBsCmIB2%2FirEO5tSBeMLZPjnlosE4xUm64q5%2BYmX5r88aUJBfHFFqJCHSIJl2Zkv2UUSmMIb65sQGOqUBhY8KZHGUGlur0a%2FB3Lq9RkeoB%2BYKPWacM0WSAMYu%2FEWIQjDv3Q4UA1IbS3eJQMbN%2Fn3SQ7LaS9pTah1QrAdma4E%2FiqZBrg95J9Ky68yn%2FWJlULGKe55B0leN%2Fml7qcnTR2F%2F9qeJH5HkcL%2Bo6mG0ZYrm5I0OI6JTzQYRp%2BRzMQpQA4LjN7GgH5K98G0aKZq5fCgAR%2FSQch9oid2Aj4ZxeubPhB46&X-Amz-Signature=da263eaf07e71000eb50692a16bca2a18eb9758925f7a16dafb07170fda48ade&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
