---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-07-30T06:25:00.000Z"
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

```xml

  <link name="lidar_link">
    <inertial>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <mass value="0.125"/>
      <inertia ixx="0.001" ixy="0" ixz="0" iyy="0.001" iyz="0" izz="0.001" />
    </inertial>

    <collision>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </collision>

    <visual>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </visual>

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E4KVZZA%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0IelcpwYPxYQ%2FQmvEOBOhcolLj47R3kFJ53wEwv2TGwIhAI2EL2BgR6luMsCkErNVNiO9buIBe14FRW3FzkMTH%2FgiKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWvcTsDe2wNG%2B%2BKdkq3ANdqOSbmJc2gwS2jhmT%2FIuiCUKjT7dZAQF0UQZpk%2FSL8jqT691ya6kVoE5oeIXT4XjjvIU9S826WG2NnWzMtJfyeH9krkaELvuIEOIvSxD5dipkYRmtNDVe3kq5gpO3PcBPUBxZPsvqVoY%2BDOkGo2ffFNOim%2FWJ6nD1Qs0iMsYiIkwPJft7YEIQgcBz71tXEtfWmpRrzHURmSOVYusk8BmHFKCw4NMDxKZ0%2FYkDa%2FGOVhAhoKE5V1bJkfPNakhzo06h2VD%2BOgG2%2BvYcY8wEEn8EF%2BKdO5EtAwXM1UOp6P1RX7PW4IZwMUdRtiXJioh2XSHWZwgJgZnVHaUZxDUezvHFgbjfwd8cYLi8m6PPBDnaW%2B8Hee8%2FTtQe1IrUyVq3YvqooSU9aHLnXoKSqv1trGbxwYiu8%2B7AT85CFnk%2BCffFSi%2B3N6oGkc0Wn%2BFY2NWRt76gfNYZRmMA5MVLaSV%2BSN12ezSKPAPGrxMPGDbN%2FzXfqnRp31xpssnp4znuxcmFM98MTgmJiCT3nj5a%2FnT9jUW0%2B7RjDHpAm7jPxdKgs7qVWQq3An%2FVXrji6y50kscjWz5nR5qoaeoGHt3qGN6GrtGYLYeR68RtAxENJkGl8UkC68ahE4s%2FqpbH7IzCljCDtrLEBjqkAbqz6J4I88ERPRMWthi5AnsNvU5NmPVQlMLBf5K7h5MIrY%2BdcMmL4yDVh%2FV7BGqn2fVW6rJ%2F60a54391oAa4IX0Lfz4mCxQgr4wTl9Pcr5sJ9exzoxVdnFCjvDYqPEStGsZGiip6aDQ8vkW8P2m47no4MEUib3V%2FqmLBXLmq00DbmIKmV5vzaD26JzldQ8x2t%2F9PUTgnPCJ9IzYiARjR7Xn107d%2F&X-Amz-Signature=ff5e8b4454ee239ca6cdabb815ac6d188177c803c731ab3c8f36348f414225e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E4KVZZA%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0IelcpwYPxYQ%2FQmvEOBOhcolLj47R3kFJ53wEwv2TGwIhAI2EL2BgR6luMsCkErNVNiO9buIBe14FRW3FzkMTH%2FgiKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWvcTsDe2wNG%2B%2BKdkq3ANdqOSbmJc2gwS2jhmT%2FIuiCUKjT7dZAQF0UQZpk%2FSL8jqT691ya6kVoE5oeIXT4XjjvIU9S826WG2NnWzMtJfyeH9krkaELvuIEOIvSxD5dipkYRmtNDVe3kq5gpO3PcBPUBxZPsvqVoY%2BDOkGo2ffFNOim%2FWJ6nD1Qs0iMsYiIkwPJft7YEIQgcBz71tXEtfWmpRrzHURmSOVYusk8BmHFKCw4NMDxKZ0%2FYkDa%2FGOVhAhoKE5V1bJkfPNakhzo06h2VD%2BOgG2%2BvYcY8wEEn8EF%2BKdO5EtAwXM1UOp6P1RX7PW4IZwMUdRtiXJioh2XSHWZwgJgZnVHaUZxDUezvHFgbjfwd8cYLi8m6PPBDnaW%2B8Hee8%2FTtQe1IrUyVq3YvqooSU9aHLnXoKSqv1trGbxwYiu8%2B7AT85CFnk%2BCffFSi%2B3N6oGkc0Wn%2BFY2NWRt76gfNYZRmMA5MVLaSV%2BSN12ezSKPAPGrxMPGDbN%2FzXfqnRp31xpssnp4znuxcmFM98MTgmJiCT3nj5a%2FnT9jUW0%2B7RjDHpAm7jPxdKgs7qVWQq3An%2FVXrji6y50kscjWz5nR5qoaeoGHt3qGN6GrtGYLYeR68RtAxENJkGl8UkC68ahE4s%2FqpbH7IzCljCDtrLEBjqkAbqz6J4I88ERPRMWthi5AnsNvU5NmPVQlMLBf5K7h5MIrY%2BdcMmL4yDVh%2FV7BGqn2fVW6rJ%2F60a54391oAa4IX0Lfz4mCxQgr4wTl9Pcr5sJ9exzoxVdnFCjvDYqPEStGsZGiip6aDQ8vkW8P2m47no4MEUib3V%2FqmLBXLmq00DbmIKmV5vzaD26JzldQ8x2t%2F9PUTgnPCJ9IzYiARjR7Xn107d%2F&X-Amz-Signature=9ce5b4da9d1590f09519f72aadb63bb54ed6e9ad33b0483a0dd87881bf9586f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E4KVZZA%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0IelcpwYPxYQ%2FQmvEOBOhcolLj47R3kFJ53wEwv2TGwIhAI2EL2BgR6luMsCkErNVNiO9buIBe14FRW3FzkMTH%2FgiKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWvcTsDe2wNG%2B%2BKdkq3ANdqOSbmJc2gwS2jhmT%2FIuiCUKjT7dZAQF0UQZpk%2FSL8jqT691ya6kVoE5oeIXT4XjjvIU9S826WG2NnWzMtJfyeH9krkaELvuIEOIvSxD5dipkYRmtNDVe3kq5gpO3PcBPUBxZPsvqVoY%2BDOkGo2ffFNOim%2FWJ6nD1Qs0iMsYiIkwPJft7YEIQgcBz71tXEtfWmpRrzHURmSOVYusk8BmHFKCw4NMDxKZ0%2FYkDa%2FGOVhAhoKE5V1bJkfPNakhzo06h2VD%2BOgG2%2BvYcY8wEEn8EF%2BKdO5EtAwXM1UOp6P1RX7PW4IZwMUdRtiXJioh2XSHWZwgJgZnVHaUZxDUezvHFgbjfwd8cYLi8m6PPBDnaW%2B8Hee8%2FTtQe1IrUyVq3YvqooSU9aHLnXoKSqv1trGbxwYiu8%2B7AT85CFnk%2BCffFSi%2B3N6oGkc0Wn%2BFY2NWRt76gfNYZRmMA5MVLaSV%2BSN12ezSKPAPGrxMPGDbN%2FzXfqnRp31xpssnp4znuxcmFM98MTgmJiCT3nj5a%2FnT9jUW0%2B7RjDHpAm7jPxdKgs7qVWQq3An%2FVXrji6y50kscjWz5nR5qoaeoGHt3qGN6GrtGYLYeR68RtAxENJkGl8UkC68ahE4s%2FqpbH7IzCljCDtrLEBjqkAbqz6J4I88ERPRMWthi5AnsNvU5NmPVQlMLBf5K7h5MIrY%2BdcMmL4yDVh%2FV7BGqn2fVW6rJ%2F60a54391oAa4IX0Lfz4mCxQgr4wTl9Pcr5sJ9exzoxVdnFCjvDYqPEStGsZGiip6aDQ8vkW8P2m47no4MEUib3V%2FqmLBXLmq00DbmIKmV5vzaD26JzldQ8x2t%2F9PUTgnPCJ9IzYiARjR7Xn107d%2F&X-Amz-Signature=833389880a18f86491e481c73560e3624a1607e98135132281fd7e4f708532ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E4KVZZA%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0IelcpwYPxYQ%2FQmvEOBOhcolLj47R3kFJ53wEwv2TGwIhAI2EL2BgR6luMsCkErNVNiO9buIBe14FRW3FzkMTH%2FgiKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWvcTsDe2wNG%2B%2BKdkq3ANdqOSbmJc2gwS2jhmT%2FIuiCUKjT7dZAQF0UQZpk%2FSL8jqT691ya6kVoE5oeIXT4XjjvIU9S826WG2NnWzMtJfyeH9krkaELvuIEOIvSxD5dipkYRmtNDVe3kq5gpO3PcBPUBxZPsvqVoY%2BDOkGo2ffFNOim%2FWJ6nD1Qs0iMsYiIkwPJft7YEIQgcBz71tXEtfWmpRrzHURmSOVYusk8BmHFKCw4NMDxKZ0%2FYkDa%2FGOVhAhoKE5V1bJkfPNakhzo06h2VD%2BOgG2%2BvYcY8wEEn8EF%2BKdO5EtAwXM1UOp6P1RX7PW4IZwMUdRtiXJioh2XSHWZwgJgZnVHaUZxDUezvHFgbjfwd8cYLi8m6PPBDnaW%2B8Hee8%2FTtQe1IrUyVq3YvqooSU9aHLnXoKSqv1trGbxwYiu8%2B7AT85CFnk%2BCffFSi%2B3N6oGkc0Wn%2BFY2NWRt76gfNYZRmMA5MVLaSV%2BSN12ezSKPAPGrxMPGDbN%2FzXfqnRp31xpssnp4znuxcmFM98MTgmJiCT3nj5a%2FnT9jUW0%2B7RjDHpAm7jPxdKgs7qVWQq3An%2FVXrji6y50kscjWz5nR5qoaeoGHt3qGN6GrtGYLYeR68RtAxENJkGl8UkC68ahE4s%2FqpbH7IzCljCDtrLEBjqkAbqz6J4I88ERPRMWthi5AnsNvU5NmPVQlMLBf5K7h5MIrY%2BdcMmL4yDVh%2FV7BGqn2fVW6rJ%2F60a54391oAa4IX0Lfz4mCxQgr4wTl9Pcr5sJ9exzoxVdnFCjvDYqPEStGsZGiip6aDQ8vkW8P2m47no4MEUib3V%2FqmLBXLmq00DbmIKmV5vzaD26JzldQ8x2t%2F9PUTgnPCJ9IzYiARjR7Xn107d%2F&X-Amz-Signature=6122f6ac3f5538e8e28d4f2dfb693f17860fd2c4f25afe1137000dbcb1f45006&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E4KVZZA%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0IelcpwYPxYQ%2FQmvEOBOhcolLj47R3kFJ53wEwv2TGwIhAI2EL2BgR6luMsCkErNVNiO9buIBe14FRW3FzkMTH%2FgiKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWvcTsDe2wNG%2B%2BKdkq3ANdqOSbmJc2gwS2jhmT%2FIuiCUKjT7dZAQF0UQZpk%2FSL8jqT691ya6kVoE5oeIXT4XjjvIU9S826WG2NnWzMtJfyeH9krkaELvuIEOIvSxD5dipkYRmtNDVe3kq5gpO3PcBPUBxZPsvqVoY%2BDOkGo2ffFNOim%2FWJ6nD1Qs0iMsYiIkwPJft7YEIQgcBz71tXEtfWmpRrzHURmSOVYusk8BmHFKCw4NMDxKZ0%2FYkDa%2FGOVhAhoKE5V1bJkfPNakhzo06h2VD%2BOgG2%2BvYcY8wEEn8EF%2BKdO5EtAwXM1UOp6P1RX7PW4IZwMUdRtiXJioh2XSHWZwgJgZnVHaUZxDUezvHFgbjfwd8cYLi8m6PPBDnaW%2B8Hee8%2FTtQe1IrUyVq3YvqooSU9aHLnXoKSqv1trGbxwYiu8%2B7AT85CFnk%2BCffFSi%2B3N6oGkc0Wn%2BFY2NWRt76gfNYZRmMA5MVLaSV%2BSN12ezSKPAPGrxMPGDbN%2FzXfqnRp31xpssnp4znuxcmFM98MTgmJiCT3nj5a%2FnT9jUW0%2B7RjDHpAm7jPxdKgs7qVWQq3An%2FVXrji6y50kscjWz5nR5qoaeoGHt3qGN6GrtGYLYeR68RtAxENJkGl8UkC68ahE4s%2FqpbH7IzCljCDtrLEBjqkAbqz6J4I88ERPRMWthi5AnsNvU5NmPVQlMLBf5K7h5MIrY%2BdcMmL4yDVh%2FV7BGqn2fVW6rJ%2F60a54391oAa4IX0Lfz4mCxQgr4wTl9Pcr5sJ9exzoxVdnFCjvDYqPEStGsZGiip6aDQ8vkW8P2m47no4MEUib3V%2FqmLBXLmq00DbmIKmV5vzaD26JzldQ8x2t%2F9PUTgnPCJ9IzYiARjR7Xn107d%2F&X-Amz-Signature=845f00f1a7592da0728a7b964130b34a65ccabff47c35e6c9416848e2df7eddf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E4KVZZA%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0IelcpwYPxYQ%2FQmvEOBOhcolLj47R3kFJ53wEwv2TGwIhAI2EL2BgR6luMsCkErNVNiO9buIBe14FRW3FzkMTH%2FgiKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWvcTsDe2wNG%2B%2BKdkq3ANdqOSbmJc2gwS2jhmT%2FIuiCUKjT7dZAQF0UQZpk%2FSL8jqT691ya6kVoE5oeIXT4XjjvIU9S826WG2NnWzMtJfyeH9krkaELvuIEOIvSxD5dipkYRmtNDVe3kq5gpO3PcBPUBxZPsvqVoY%2BDOkGo2ffFNOim%2FWJ6nD1Qs0iMsYiIkwPJft7YEIQgcBz71tXEtfWmpRrzHURmSOVYusk8BmHFKCw4NMDxKZ0%2FYkDa%2FGOVhAhoKE5V1bJkfPNakhzo06h2VD%2BOgG2%2BvYcY8wEEn8EF%2BKdO5EtAwXM1UOp6P1RX7PW4IZwMUdRtiXJioh2XSHWZwgJgZnVHaUZxDUezvHFgbjfwd8cYLi8m6PPBDnaW%2B8Hee8%2FTtQe1IrUyVq3YvqooSU9aHLnXoKSqv1trGbxwYiu8%2B7AT85CFnk%2BCffFSi%2B3N6oGkc0Wn%2BFY2NWRt76gfNYZRmMA5MVLaSV%2BSN12ezSKPAPGrxMPGDbN%2FzXfqnRp31xpssnp4znuxcmFM98MTgmJiCT3nj5a%2FnT9jUW0%2B7RjDHpAm7jPxdKgs7qVWQq3An%2FVXrji6y50kscjWz5nR5qoaeoGHt3qGN6GrtGYLYeR68RtAxENJkGl8UkC68ahE4s%2FqpbH7IzCljCDtrLEBjqkAbqz6J4I88ERPRMWthi5AnsNvU5NmPVQlMLBf5K7h5MIrY%2BdcMmL4yDVh%2FV7BGqn2fVW6rJ%2F60a54391oAa4IX0Lfz4mCxQgr4wTl9Pcr5sJ9exzoxVdnFCjvDYqPEStGsZGiip6aDQ8vkW8P2m47no4MEUib3V%2FqmLBXLmq00DbmIKmV5vzaD26JzldQ8x2t%2F9PUTgnPCJ9IzYiARjR7Xn107d%2F&X-Amz-Signature=39b4a5c075cda3eb592a8420cc31f8bb2ffc4f6da9415a3dd3593584cbb7db20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E4KVZZA%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0IelcpwYPxYQ%2FQmvEOBOhcolLj47R3kFJ53wEwv2TGwIhAI2EL2BgR6luMsCkErNVNiO9buIBe14FRW3FzkMTH%2FgiKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWvcTsDe2wNG%2B%2BKdkq3ANdqOSbmJc2gwS2jhmT%2FIuiCUKjT7dZAQF0UQZpk%2FSL8jqT691ya6kVoE5oeIXT4XjjvIU9S826WG2NnWzMtJfyeH9krkaELvuIEOIvSxD5dipkYRmtNDVe3kq5gpO3PcBPUBxZPsvqVoY%2BDOkGo2ffFNOim%2FWJ6nD1Qs0iMsYiIkwPJft7YEIQgcBz71tXEtfWmpRrzHURmSOVYusk8BmHFKCw4NMDxKZ0%2FYkDa%2FGOVhAhoKE5V1bJkfPNakhzo06h2VD%2BOgG2%2BvYcY8wEEn8EF%2BKdO5EtAwXM1UOp6P1RX7PW4IZwMUdRtiXJioh2XSHWZwgJgZnVHaUZxDUezvHFgbjfwd8cYLi8m6PPBDnaW%2B8Hee8%2FTtQe1IrUyVq3YvqooSU9aHLnXoKSqv1trGbxwYiu8%2B7AT85CFnk%2BCffFSi%2B3N6oGkc0Wn%2BFY2NWRt76gfNYZRmMA5MVLaSV%2BSN12ezSKPAPGrxMPGDbN%2FzXfqnRp31xpssnp4znuxcmFM98MTgmJiCT3nj5a%2FnT9jUW0%2B7RjDHpAm7jPxdKgs7qVWQq3An%2FVXrji6y50kscjWz5nR5qoaeoGHt3qGN6GrtGYLYeR68RtAxENJkGl8UkC68ahE4s%2FqpbH7IzCljCDtrLEBjqkAbqz6J4I88ERPRMWthi5AnsNvU5NmPVQlMLBf5K7h5MIrY%2BdcMmL4yDVh%2FV7BGqn2fVW6rJ%2F60a54391oAa4IX0Lfz4mCxQgr4wTl9Pcr5sJ9exzoxVdnFCjvDYqPEStGsZGiip6aDQ8vkW8P2m47no4MEUib3V%2FqmLBXLmq00DbmIKmV5vzaD26JzldQ8x2t%2F9PUTgnPCJ9IzYiARjR7Xn107d%2F&X-Amz-Signature=eb890b530444c284868495850306c835634d5885002ff2966c000ecfce1aa9c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E4KVZZA%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0IelcpwYPxYQ%2FQmvEOBOhcolLj47R3kFJ53wEwv2TGwIhAI2EL2BgR6luMsCkErNVNiO9buIBe14FRW3FzkMTH%2FgiKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWvcTsDe2wNG%2B%2BKdkq3ANdqOSbmJc2gwS2jhmT%2FIuiCUKjT7dZAQF0UQZpk%2FSL8jqT691ya6kVoE5oeIXT4XjjvIU9S826WG2NnWzMtJfyeH9krkaELvuIEOIvSxD5dipkYRmtNDVe3kq5gpO3PcBPUBxZPsvqVoY%2BDOkGo2ffFNOim%2FWJ6nD1Qs0iMsYiIkwPJft7YEIQgcBz71tXEtfWmpRrzHURmSOVYusk8BmHFKCw4NMDxKZ0%2FYkDa%2FGOVhAhoKE5V1bJkfPNakhzo06h2VD%2BOgG2%2BvYcY8wEEn8EF%2BKdO5EtAwXM1UOp6P1RX7PW4IZwMUdRtiXJioh2XSHWZwgJgZnVHaUZxDUezvHFgbjfwd8cYLi8m6PPBDnaW%2B8Hee8%2FTtQe1IrUyVq3YvqooSU9aHLnXoKSqv1trGbxwYiu8%2B7AT85CFnk%2BCffFSi%2B3N6oGkc0Wn%2BFY2NWRt76gfNYZRmMA5MVLaSV%2BSN12ezSKPAPGrxMPGDbN%2FzXfqnRp31xpssnp4znuxcmFM98MTgmJiCT3nj5a%2FnT9jUW0%2B7RjDHpAm7jPxdKgs7qVWQq3An%2FVXrji6y50kscjWz5nR5qoaeoGHt3qGN6GrtGYLYeR68RtAxENJkGl8UkC68ahE4s%2FqpbH7IzCljCDtrLEBjqkAbqz6J4I88ERPRMWthi5AnsNvU5NmPVQlMLBf5K7h5MIrY%2BdcMmL4yDVh%2FV7BGqn2fVW6rJ%2F60a54391oAa4IX0Lfz4mCxQgr4wTl9Pcr5sJ9exzoxVdnFCjvDYqPEStGsZGiip6aDQ8vkW8P2m47no4MEUib3V%2FqmLBXLmq00DbmIKmV5vzaD26JzldQ8x2t%2F9PUTgnPCJ9IzYiARjR7Xn107d%2F&X-Amz-Signature=012eb4f6b721337a238599eb532809c5b7a5fa4e368e85f478cab37b6be8be84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E4KVZZA%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0IelcpwYPxYQ%2FQmvEOBOhcolLj47R3kFJ53wEwv2TGwIhAI2EL2BgR6luMsCkErNVNiO9buIBe14FRW3FzkMTH%2FgiKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWvcTsDe2wNG%2B%2BKdkq3ANdqOSbmJc2gwS2jhmT%2FIuiCUKjT7dZAQF0UQZpk%2FSL8jqT691ya6kVoE5oeIXT4XjjvIU9S826WG2NnWzMtJfyeH9krkaELvuIEOIvSxD5dipkYRmtNDVe3kq5gpO3PcBPUBxZPsvqVoY%2BDOkGo2ffFNOim%2FWJ6nD1Qs0iMsYiIkwPJft7YEIQgcBz71tXEtfWmpRrzHURmSOVYusk8BmHFKCw4NMDxKZ0%2FYkDa%2FGOVhAhoKE5V1bJkfPNakhzo06h2VD%2BOgG2%2BvYcY8wEEn8EF%2BKdO5EtAwXM1UOp6P1RX7PW4IZwMUdRtiXJioh2XSHWZwgJgZnVHaUZxDUezvHFgbjfwd8cYLi8m6PPBDnaW%2B8Hee8%2FTtQe1IrUyVq3YvqooSU9aHLnXoKSqv1trGbxwYiu8%2B7AT85CFnk%2BCffFSi%2B3N6oGkc0Wn%2BFY2NWRt76gfNYZRmMA5MVLaSV%2BSN12ezSKPAPGrxMPGDbN%2FzXfqnRp31xpssnp4znuxcmFM98MTgmJiCT3nj5a%2FnT9jUW0%2B7RjDHpAm7jPxdKgs7qVWQq3An%2FVXrji6y50kscjWz5nR5qoaeoGHt3qGN6GrtGYLYeR68RtAxENJkGl8UkC68ahE4s%2FqpbH7IzCljCDtrLEBjqkAbqz6J4I88ERPRMWthi5AnsNvU5NmPVQlMLBf5K7h5MIrY%2BdcMmL4yDVh%2FV7BGqn2fVW6rJ%2F60a54391oAa4IX0Lfz4mCxQgr4wTl9Pcr5sJ9exzoxVdnFCjvDYqPEStGsZGiip6aDQ8vkW8P2m47no4MEUib3V%2FqmLBXLmq00DbmIKmV5vzaD26JzldQ8x2t%2F9PUTgnPCJ9IzYiARjR7Xn107d%2F&X-Amz-Signature=811f873629921f7fd0b23b753209bc73f4c85e76ba701eb92be77f3de5f9273d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E4KVZZA%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0IelcpwYPxYQ%2FQmvEOBOhcolLj47R3kFJ53wEwv2TGwIhAI2EL2BgR6luMsCkErNVNiO9buIBe14FRW3FzkMTH%2FgiKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWvcTsDe2wNG%2B%2BKdkq3ANdqOSbmJc2gwS2jhmT%2FIuiCUKjT7dZAQF0UQZpk%2FSL8jqT691ya6kVoE5oeIXT4XjjvIU9S826WG2NnWzMtJfyeH9krkaELvuIEOIvSxD5dipkYRmtNDVe3kq5gpO3PcBPUBxZPsvqVoY%2BDOkGo2ffFNOim%2FWJ6nD1Qs0iMsYiIkwPJft7YEIQgcBz71tXEtfWmpRrzHURmSOVYusk8BmHFKCw4NMDxKZ0%2FYkDa%2FGOVhAhoKE5V1bJkfPNakhzo06h2VD%2BOgG2%2BvYcY8wEEn8EF%2BKdO5EtAwXM1UOp6P1RX7PW4IZwMUdRtiXJioh2XSHWZwgJgZnVHaUZxDUezvHFgbjfwd8cYLi8m6PPBDnaW%2B8Hee8%2FTtQe1IrUyVq3YvqooSU9aHLnXoKSqv1trGbxwYiu8%2B7AT85CFnk%2BCffFSi%2B3N6oGkc0Wn%2BFY2NWRt76gfNYZRmMA5MVLaSV%2BSN12ezSKPAPGrxMPGDbN%2FzXfqnRp31xpssnp4znuxcmFM98MTgmJiCT3nj5a%2FnT9jUW0%2B7RjDHpAm7jPxdKgs7qVWQq3An%2FVXrji6y50kscjWz5nR5qoaeoGHt3qGN6GrtGYLYeR68RtAxENJkGl8UkC68ahE4s%2FqpbH7IzCljCDtrLEBjqkAbqz6J4I88ERPRMWthi5AnsNvU5NmPVQlMLBf5K7h5MIrY%2BdcMmL4yDVh%2FV7BGqn2fVW6rJ%2F60a54391oAa4IX0Lfz4mCxQgr4wTl9Pcr5sJ9exzoxVdnFCjvDYqPEStGsZGiip6aDQ8vkW8P2m47no4MEUib3V%2FqmLBXLmq00DbmIKmV5vzaD26JzldQ8x2t%2F9PUTgnPCJ9IzYiARjR7Xn107d%2F&X-Amz-Signature=7ef055e2d4a71b1c3609d6f79a4c1fbd5bab7189984756acc9c3f987b3120168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
