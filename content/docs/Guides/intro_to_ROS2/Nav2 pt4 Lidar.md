---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-07-29T01:28:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-07-29T01:28:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627AULLCU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGAjqTuybHi%2FBysga45KJmcsf%2BdmGs6Kjz9TS8aHubLAAiAvzbeX8JDpl4Dpe1KV2zZRKRIop7bntJVVQjybw3nSWCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BCdFqGIIilt%2BFs6jKtwD5HnnN52MDiZIyceFBUSVl%2FGwFqoFp%2Fec56ozLBD66aHRFLyBZ1RtrplW7vSeDs45Yl%2BGKNUSlUkuOVMRpRQU8U%2FZ2Jwl3rudfE%2Bw3PL5mteIkoMMyxZJpiFiSiGemC20hwnydcSnjjRuxjzI8tNtd8jUMQVc7muMp7nXQskfknOi4ctdt4nFedJLnOha8uDDvElfb%2FkjgZv6Uy%2B6EyrCmPpDo33WAeCHwll%2FD4ppZ76ueCaIXNsmmEGbb0JQz5J%2FI0SWeRf7sF9V8wKInuCBJyVYquJgrdKGltatDs0r9k5ruMo0VcFzaYTBL7rYkaokw%2FRUo%2BAWikk6Zwp2qcldphJnzPHDoTyPR1hU0O5DJQlfTfqPVteCGvAVnBrt%2Buny53lar3mUmrAliZlwRZsdAoPxUHVWNB2OONmdICvkSvAy85DN2J5akxkJj1zeatWT5UwyPmC0fo%2FntJ5c4LbzE2MZlaTnzYe72c5YlHw7h974RP6YM5zVfUaqUrGNmnr5cEoIpBa%2BvUaqc8Rl9ASdejIaiFc3R%2FLSSclnZer9WCfXNiCAjjzhQpEXZoeD3CnM6iD4PHeWLFIf%2Fa5ZG4U6oB%2Ba%2Fo%2F6XjGnqvKJyK%2BZ8Zl8ORYMT6jrlJgazncwxpijxAY6pgFigLjuPjIPntfcxrsha6Qg8rvO5ZcJpSTvzKDiQOvX%2FAc1lrJVNB58mRkcgq8%2FKi2I9Ob4NI6%2FCXe3PzBt6L8EFVNxEVigvUkqOssu6S3AfIwQZwyLKsZ9mrhnD8EZOuLaAYoXzxnr%2BiQ7PxLIyHtpwT3xw4V94eKb7AfRx9ms9fcGc9ZIPbPrRgxzXNRONqCmBRZFgKU3TGee7wscvOKSLQl2tBgt&X-Amz-Signature=b5bd64fec9724c552530fd6679a00f11beec8a58295c7bc2ef9dcdbd2252c274&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627AULLCU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGAjqTuybHi%2FBysga45KJmcsf%2BdmGs6Kjz9TS8aHubLAAiAvzbeX8JDpl4Dpe1KV2zZRKRIop7bntJVVQjybw3nSWCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BCdFqGIIilt%2BFs6jKtwD5HnnN52MDiZIyceFBUSVl%2FGwFqoFp%2Fec56ozLBD66aHRFLyBZ1RtrplW7vSeDs45Yl%2BGKNUSlUkuOVMRpRQU8U%2FZ2Jwl3rudfE%2Bw3PL5mteIkoMMyxZJpiFiSiGemC20hwnydcSnjjRuxjzI8tNtd8jUMQVc7muMp7nXQskfknOi4ctdt4nFedJLnOha8uDDvElfb%2FkjgZv6Uy%2B6EyrCmPpDo33WAeCHwll%2FD4ppZ76ueCaIXNsmmEGbb0JQz5J%2FI0SWeRf7sF9V8wKInuCBJyVYquJgrdKGltatDs0r9k5ruMo0VcFzaYTBL7rYkaokw%2FRUo%2BAWikk6Zwp2qcldphJnzPHDoTyPR1hU0O5DJQlfTfqPVteCGvAVnBrt%2Buny53lar3mUmrAliZlwRZsdAoPxUHVWNB2OONmdICvkSvAy85DN2J5akxkJj1zeatWT5UwyPmC0fo%2FntJ5c4LbzE2MZlaTnzYe72c5YlHw7h974RP6YM5zVfUaqUrGNmnr5cEoIpBa%2BvUaqc8Rl9ASdejIaiFc3R%2FLSSclnZer9WCfXNiCAjjzhQpEXZoeD3CnM6iD4PHeWLFIf%2Fa5ZG4U6oB%2Ba%2Fo%2F6XjGnqvKJyK%2BZ8Zl8ORYMT6jrlJgazncwxpijxAY6pgFigLjuPjIPntfcxrsha6Qg8rvO5ZcJpSTvzKDiQOvX%2FAc1lrJVNB58mRkcgq8%2FKi2I9Ob4NI6%2FCXe3PzBt6L8EFVNxEVigvUkqOssu6S3AfIwQZwyLKsZ9mrhnD8EZOuLaAYoXzxnr%2BiQ7PxLIyHtpwT3xw4V94eKb7AfRx9ms9fcGc9ZIPbPrRgxzXNRONqCmBRZFgKU3TGee7wscvOKSLQl2tBgt&X-Amz-Signature=80d2f582667d0bc832ec7ff2abaa17771a76eaca97b07f820bb5b39397e0fb39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627AULLCU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGAjqTuybHi%2FBysga45KJmcsf%2BdmGs6Kjz9TS8aHubLAAiAvzbeX8JDpl4Dpe1KV2zZRKRIop7bntJVVQjybw3nSWCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BCdFqGIIilt%2BFs6jKtwD5HnnN52MDiZIyceFBUSVl%2FGwFqoFp%2Fec56ozLBD66aHRFLyBZ1RtrplW7vSeDs45Yl%2BGKNUSlUkuOVMRpRQU8U%2FZ2Jwl3rudfE%2Bw3PL5mteIkoMMyxZJpiFiSiGemC20hwnydcSnjjRuxjzI8tNtd8jUMQVc7muMp7nXQskfknOi4ctdt4nFedJLnOha8uDDvElfb%2FkjgZv6Uy%2B6EyrCmPpDo33WAeCHwll%2FD4ppZ76ueCaIXNsmmEGbb0JQz5J%2FI0SWeRf7sF9V8wKInuCBJyVYquJgrdKGltatDs0r9k5ruMo0VcFzaYTBL7rYkaokw%2FRUo%2BAWikk6Zwp2qcldphJnzPHDoTyPR1hU0O5DJQlfTfqPVteCGvAVnBrt%2Buny53lar3mUmrAliZlwRZsdAoPxUHVWNB2OONmdICvkSvAy85DN2J5akxkJj1zeatWT5UwyPmC0fo%2FntJ5c4LbzE2MZlaTnzYe72c5YlHw7h974RP6YM5zVfUaqUrGNmnr5cEoIpBa%2BvUaqc8Rl9ASdejIaiFc3R%2FLSSclnZer9WCfXNiCAjjzhQpEXZoeD3CnM6iD4PHeWLFIf%2Fa5ZG4U6oB%2Ba%2Fo%2F6XjGnqvKJyK%2BZ8Zl8ORYMT6jrlJgazncwxpijxAY6pgFigLjuPjIPntfcxrsha6Qg8rvO5ZcJpSTvzKDiQOvX%2FAc1lrJVNB58mRkcgq8%2FKi2I9Ob4NI6%2FCXe3PzBt6L8EFVNxEVigvUkqOssu6S3AfIwQZwyLKsZ9mrhnD8EZOuLaAYoXzxnr%2BiQ7PxLIyHtpwT3xw4V94eKb7AfRx9ms9fcGc9ZIPbPrRgxzXNRONqCmBRZFgKU3TGee7wscvOKSLQl2tBgt&X-Amz-Signature=1b6f8da120388328ad88e765970f6a9e342f6ead0b1d527fe8fb46e809132d4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627AULLCU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGAjqTuybHi%2FBysga45KJmcsf%2BdmGs6Kjz9TS8aHubLAAiAvzbeX8JDpl4Dpe1KV2zZRKRIop7bntJVVQjybw3nSWCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BCdFqGIIilt%2BFs6jKtwD5HnnN52MDiZIyceFBUSVl%2FGwFqoFp%2Fec56ozLBD66aHRFLyBZ1RtrplW7vSeDs45Yl%2BGKNUSlUkuOVMRpRQU8U%2FZ2Jwl3rudfE%2Bw3PL5mteIkoMMyxZJpiFiSiGemC20hwnydcSnjjRuxjzI8tNtd8jUMQVc7muMp7nXQskfknOi4ctdt4nFedJLnOha8uDDvElfb%2FkjgZv6Uy%2B6EyrCmPpDo33WAeCHwll%2FD4ppZ76ueCaIXNsmmEGbb0JQz5J%2FI0SWeRf7sF9V8wKInuCBJyVYquJgrdKGltatDs0r9k5ruMo0VcFzaYTBL7rYkaokw%2FRUo%2BAWikk6Zwp2qcldphJnzPHDoTyPR1hU0O5DJQlfTfqPVteCGvAVnBrt%2Buny53lar3mUmrAliZlwRZsdAoPxUHVWNB2OONmdICvkSvAy85DN2J5akxkJj1zeatWT5UwyPmC0fo%2FntJ5c4LbzE2MZlaTnzYe72c5YlHw7h974RP6YM5zVfUaqUrGNmnr5cEoIpBa%2BvUaqc8Rl9ASdejIaiFc3R%2FLSSclnZer9WCfXNiCAjjzhQpEXZoeD3CnM6iD4PHeWLFIf%2Fa5ZG4U6oB%2Ba%2Fo%2F6XjGnqvKJyK%2BZ8Zl8ORYMT6jrlJgazncwxpijxAY6pgFigLjuPjIPntfcxrsha6Qg8rvO5ZcJpSTvzKDiQOvX%2FAc1lrJVNB58mRkcgq8%2FKi2I9Ob4NI6%2FCXe3PzBt6L8EFVNxEVigvUkqOssu6S3AfIwQZwyLKsZ9mrhnD8EZOuLaAYoXzxnr%2BiQ7PxLIyHtpwT3xw4V94eKb7AfRx9ms9fcGc9ZIPbPrRgxzXNRONqCmBRZFgKU3TGee7wscvOKSLQl2tBgt&X-Amz-Signature=6cda34f576248a607d68b73a1b9e1d737a920ac841c312839e3ba24d0ce38bb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627AULLCU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGAjqTuybHi%2FBysga45KJmcsf%2BdmGs6Kjz9TS8aHubLAAiAvzbeX8JDpl4Dpe1KV2zZRKRIop7bntJVVQjybw3nSWCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BCdFqGIIilt%2BFs6jKtwD5HnnN52MDiZIyceFBUSVl%2FGwFqoFp%2Fec56ozLBD66aHRFLyBZ1RtrplW7vSeDs45Yl%2BGKNUSlUkuOVMRpRQU8U%2FZ2Jwl3rudfE%2Bw3PL5mteIkoMMyxZJpiFiSiGemC20hwnydcSnjjRuxjzI8tNtd8jUMQVc7muMp7nXQskfknOi4ctdt4nFedJLnOha8uDDvElfb%2FkjgZv6Uy%2B6EyrCmPpDo33WAeCHwll%2FD4ppZ76ueCaIXNsmmEGbb0JQz5J%2FI0SWeRf7sF9V8wKInuCBJyVYquJgrdKGltatDs0r9k5ruMo0VcFzaYTBL7rYkaokw%2FRUo%2BAWikk6Zwp2qcldphJnzPHDoTyPR1hU0O5DJQlfTfqPVteCGvAVnBrt%2Buny53lar3mUmrAliZlwRZsdAoPxUHVWNB2OONmdICvkSvAy85DN2J5akxkJj1zeatWT5UwyPmC0fo%2FntJ5c4LbzE2MZlaTnzYe72c5YlHw7h974RP6YM5zVfUaqUrGNmnr5cEoIpBa%2BvUaqc8Rl9ASdejIaiFc3R%2FLSSclnZer9WCfXNiCAjjzhQpEXZoeD3CnM6iD4PHeWLFIf%2Fa5ZG4U6oB%2Ba%2Fo%2F6XjGnqvKJyK%2BZ8Zl8ORYMT6jrlJgazncwxpijxAY6pgFigLjuPjIPntfcxrsha6Qg8rvO5ZcJpSTvzKDiQOvX%2FAc1lrJVNB58mRkcgq8%2FKi2I9Ob4NI6%2FCXe3PzBt6L8EFVNxEVigvUkqOssu6S3AfIwQZwyLKsZ9mrhnD8EZOuLaAYoXzxnr%2BiQ7PxLIyHtpwT3xw4V94eKb7AfRx9ms9fcGc9ZIPbPrRgxzXNRONqCmBRZFgKU3TGee7wscvOKSLQl2tBgt&X-Amz-Signature=40f87f7e4d8ea497766afe8f13a20fe2e405a3c58bcd8a0c77bfa81182286970&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627AULLCU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGAjqTuybHi%2FBysga45KJmcsf%2BdmGs6Kjz9TS8aHubLAAiAvzbeX8JDpl4Dpe1KV2zZRKRIop7bntJVVQjybw3nSWCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BCdFqGIIilt%2BFs6jKtwD5HnnN52MDiZIyceFBUSVl%2FGwFqoFp%2Fec56ozLBD66aHRFLyBZ1RtrplW7vSeDs45Yl%2BGKNUSlUkuOVMRpRQU8U%2FZ2Jwl3rudfE%2Bw3PL5mteIkoMMyxZJpiFiSiGemC20hwnydcSnjjRuxjzI8tNtd8jUMQVc7muMp7nXQskfknOi4ctdt4nFedJLnOha8uDDvElfb%2FkjgZv6Uy%2B6EyrCmPpDo33WAeCHwll%2FD4ppZ76ueCaIXNsmmEGbb0JQz5J%2FI0SWeRf7sF9V8wKInuCBJyVYquJgrdKGltatDs0r9k5ruMo0VcFzaYTBL7rYkaokw%2FRUo%2BAWikk6Zwp2qcldphJnzPHDoTyPR1hU0O5DJQlfTfqPVteCGvAVnBrt%2Buny53lar3mUmrAliZlwRZsdAoPxUHVWNB2OONmdICvkSvAy85DN2J5akxkJj1zeatWT5UwyPmC0fo%2FntJ5c4LbzE2MZlaTnzYe72c5YlHw7h974RP6YM5zVfUaqUrGNmnr5cEoIpBa%2BvUaqc8Rl9ASdejIaiFc3R%2FLSSclnZer9WCfXNiCAjjzhQpEXZoeD3CnM6iD4PHeWLFIf%2Fa5ZG4U6oB%2Ba%2Fo%2F6XjGnqvKJyK%2BZ8Zl8ORYMT6jrlJgazncwxpijxAY6pgFigLjuPjIPntfcxrsha6Qg8rvO5ZcJpSTvzKDiQOvX%2FAc1lrJVNB58mRkcgq8%2FKi2I9Ob4NI6%2FCXe3PzBt6L8EFVNxEVigvUkqOssu6S3AfIwQZwyLKsZ9mrhnD8EZOuLaAYoXzxnr%2BiQ7PxLIyHtpwT3xw4V94eKb7AfRx9ms9fcGc9ZIPbPrRgxzXNRONqCmBRZFgKU3TGee7wscvOKSLQl2tBgt&X-Amz-Signature=73dd05a9307dc843372984907fc89c57fed7210e9965e8b588e1d8b992984cb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627AULLCU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGAjqTuybHi%2FBysga45KJmcsf%2BdmGs6Kjz9TS8aHubLAAiAvzbeX8JDpl4Dpe1KV2zZRKRIop7bntJVVQjybw3nSWCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BCdFqGIIilt%2BFs6jKtwD5HnnN52MDiZIyceFBUSVl%2FGwFqoFp%2Fec56ozLBD66aHRFLyBZ1RtrplW7vSeDs45Yl%2BGKNUSlUkuOVMRpRQU8U%2FZ2Jwl3rudfE%2Bw3PL5mteIkoMMyxZJpiFiSiGemC20hwnydcSnjjRuxjzI8tNtd8jUMQVc7muMp7nXQskfknOi4ctdt4nFedJLnOha8uDDvElfb%2FkjgZv6Uy%2B6EyrCmPpDo33WAeCHwll%2FD4ppZ76ueCaIXNsmmEGbb0JQz5J%2FI0SWeRf7sF9V8wKInuCBJyVYquJgrdKGltatDs0r9k5ruMo0VcFzaYTBL7rYkaokw%2FRUo%2BAWikk6Zwp2qcldphJnzPHDoTyPR1hU0O5DJQlfTfqPVteCGvAVnBrt%2Buny53lar3mUmrAliZlwRZsdAoPxUHVWNB2OONmdICvkSvAy85DN2J5akxkJj1zeatWT5UwyPmC0fo%2FntJ5c4LbzE2MZlaTnzYe72c5YlHw7h974RP6YM5zVfUaqUrGNmnr5cEoIpBa%2BvUaqc8Rl9ASdejIaiFc3R%2FLSSclnZer9WCfXNiCAjjzhQpEXZoeD3CnM6iD4PHeWLFIf%2Fa5ZG4U6oB%2Ba%2Fo%2F6XjGnqvKJyK%2BZ8Zl8ORYMT6jrlJgazncwxpijxAY6pgFigLjuPjIPntfcxrsha6Qg8rvO5ZcJpSTvzKDiQOvX%2FAc1lrJVNB58mRkcgq8%2FKi2I9Ob4NI6%2FCXe3PzBt6L8EFVNxEVigvUkqOssu6S3AfIwQZwyLKsZ9mrhnD8EZOuLaAYoXzxnr%2BiQ7PxLIyHtpwT3xw4V94eKb7AfRx9ms9fcGc9ZIPbPrRgxzXNRONqCmBRZFgKU3TGee7wscvOKSLQl2tBgt&X-Amz-Signature=7b2fe86dedbbba118edd8a28dcc474b386209d2f3f5cd8715aff37a949ff4208&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627AULLCU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGAjqTuybHi%2FBysga45KJmcsf%2BdmGs6Kjz9TS8aHubLAAiAvzbeX8JDpl4Dpe1KV2zZRKRIop7bntJVVQjybw3nSWCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BCdFqGIIilt%2BFs6jKtwD5HnnN52MDiZIyceFBUSVl%2FGwFqoFp%2Fec56ozLBD66aHRFLyBZ1RtrplW7vSeDs45Yl%2BGKNUSlUkuOVMRpRQU8U%2FZ2Jwl3rudfE%2Bw3PL5mteIkoMMyxZJpiFiSiGemC20hwnydcSnjjRuxjzI8tNtd8jUMQVc7muMp7nXQskfknOi4ctdt4nFedJLnOha8uDDvElfb%2FkjgZv6Uy%2B6EyrCmPpDo33WAeCHwll%2FD4ppZ76ueCaIXNsmmEGbb0JQz5J%2FI0SWeRf7sF9V8wKInuCBJyVYquJgrdKGltatDs0r9k5ruMo0VcFzaYTBL7rYkaokw%2FRUo%2BAWikk6Zwp2qcldphJnzPHDoTyPR1hU0O5DJQlfTfqPVteCGvAVnBrt%2Buny53lar3mUmrAliZlwRZsdAoPxUHVWNB2OONmdICvkSvAy85DN2J5akxkJj1zeatWT5UwyPmC0fo%2FntJ5c4LbzE2MZlaTnzYe72c5YlHw7h974RP6YM5zVfUaqUrGNmnr5cEoIpBa%2BvUaqc8Rl9ASdejIaiFc3R%2FLSSclnZer9WCfXNiCAjjzhQpEXZoeD3CnM6iD4PHeWLFIf%2Fa5ZG4U6oB%2Ba%2Fo%2F6XjGnqvKJyK%2BZ8Zl8ORYMT6jrlJgazncwxpijxAY6pgFigLjuPjIPntfcxrsha6Qg8rvO5ZcJpSTvzKDiQOvX%2FAc1lrJVNB58mRkcgq8%2FKi2I9Ob4NI6%2FCXe3PzBt6L8EFVNxEVigvUkqOssu6S3AfIwQZwyLKsZ9mrhnD8EZOuLaAYoXzxnr%2BiQ7PxLIyHtpwT3xw4V94eKb7AfRx9ms9fcGc9ZIPbPrRgxzXNRONqCmBRZFgKU3TGee7wscvOKSLQl2tBgt&X-Amz-Signature=1d7f6e2e3f0c755d3d511cd4a7d9790b7a923fa5642111dc7e8c37d47602678a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627AULLCU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGAjqTuybHi%2FBysga45KJmcsf%2BdmGs6Kjz9TS8aHubLAAiAvzbeX8JDpl4Dpe1KV2zZRKRIop7bntJVVQjybw3nSWCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BCdFqGIIilt%2BFs6jKtwD5HnnN52MDiZIyceFBUSVl%2FGwFqoFp%2Fec56ozLBD66aHRFLyBZ1RtrplW7vSeDs45Yl%2BGKNUSlUkuOVMRpRQU8U%2FZ2Jwl3rudfE%2Bw3PL5mteIkoMMyxZJpiFiSiGemC20hwnydcSnjjRuxjzI8tNtd8jUMQVc7muMp7nXQskfknOi4ctdt4nFedJLnOha8uDDvElfb%2FkjgZv6Uy%2B6EyrCmPpDo33WAeCHwll%2FD4ppZ76ueCaIXNsmmEGbb0JQz5J%2FI0SWeRf7sF9V8wKInuCBJyVYquJgrdKGltatDs0r9k5ruMo0VcFzaYTBL7rYkaokw%2FRUo%2BAWikk6Zwp2qcldphJnzPHDoTyPR1hU0O5DJQlfTfqPVteCGvAVnBrt%2Buny53lar3mUmrAliZlwRZsdAoPxUHVWNB2OONmdICvkSvAy85DN2J5akxkJj1zeatWT5UwyPmC0fo%2FntJ5c4LbzE2MZlaTnzYe72c5YlHw7h974RP6YM5zVfUaqUrGNmnr5cEoIpBa%2BvUaqc8Rl9ASdejIaiFc3R%2FLSSclnZer9WCfXNiCAjjzhQpEXZoeD3CnM6iD4PHeWLFIf%2Fa5ZG4U6oB%2Ba%2Fo%2F6XjGnqvKJyK%2BZ8Zl8ORYMT6jrlJgazncwxpijxAY6pgFigLjuPjIPntfcxrsha6Qg8rvO5ZcJpSTvzKDiQOvX%2FAc1lrJVNB58mRkcgq8%2FKi2I9Ob4NI6%2FCXe3PzBt6L8EFVNxEVigvUkqOssu6S3AfIwQZwyLKsZ9mrhnD8EZOuLaAYoXzxnr%2BiQ7PxLIyHtpwT3xw4V94eKb7AfRx9ms9fcGc9ZIPbPrRgxzXNRONqCmBRZFgKU3TGee7wscvOKSLQl2tBgt&X-Amz-Signature=344fd33cd2f170599d26f733525fd8369a94847a10b6ceffdcb993cfb70b8c35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO: rviz img

## adding to launch

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627AULLCU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGAjqTuybHi%2FBysga45KJmcsf%2BdmGs6Kjz9TS8aHubLAAiAvzbeX8JDpl4Dpe1KV2zZRKRIop7bntJVVQjybw3nSWCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BCdFqGIIilt%2BFs6jKtwD5HnnN52MDiZIyceFBUSVl%2FGwFqoFp%2Fec56ozLBD66aHRFLyBZ1RtrplW7vSeDs45Yl%2BGKNUSlUkuOVMRpRQU8U%2FZ2Jwl3rudfE%2Bw3PL5mteIkoMMyxZJpiFiSiGemC20hwnydcSnjjRuxjzI8tNtd8jUMQVc7muMp7nXQskfknOi4ctdt4nFedJLnOha8uDDvElfb%2FkjgZv6Uy%2B6EyrCmPpDo33WAeCHwll%2FD4ppZ76ueCaIXNsmmEGbb0JQz5J%2FI0SWeRf7sF9V8wKInuCBJyVYquJgrdKGltatDs0r9k5ruMo0VcFzaYTBL7rYkaokw%2FRUo%2BAWikk6Zwp2qcldphJnzPHDoTyPR1hU0O5DJQlfTfqPVteCGvAVnBrt%2Buny53lar3mUmrAliZlwRZsdAoPxUHVWNB2OONmdICvkSvAy85DN2J5akxkJj1zeatWT5UwyPmC0fo%2FntJ5c4LbzE2MZlaTnzYe72c5YlHw7h974RP6YM5zVfUaqUrGNmnr5cEoIpBa%2BvUaqc8Rl9ASdejIaiFc3R%2FLSSclnZer9WCfXNiCAjjzhQpEXZoeD3CnM6iD4PHeWLFIf%2Fa5ZG4U6oB%2Ba%2Fo%2F6XjGnqvKJyK%2BZ8Zl8ORYMT6jrlJgazncwxpijxAY6pgFigLjuPjIPntfcxrsha6Qg8rvO5ZcJpSTvzKDiQOvX%2FAc1lrJVNB58mRkcgq8%2FKi2I9Ob4NI6%2FCXe3PzBt6L8EFVNxEVigvUkqOssu6S3AfIwQZwyLKsZ9mrhnD8EZOuLaAYoXzxnr%2BiQ7PxLIyHtpwT3xw4V94eKb7AfRx9ms9fcGc9ZIPbPrRgxzXNRONqCmBRZFgKU3TGee7wscvOKSLQl2tBgt&X-Amz-Signature=f7fb8a44fe570c333a480094f00b110bcc0b2622fe468d1de5562be22b3603a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
