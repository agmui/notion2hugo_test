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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RWLGMRC%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDbsGDfjCV3lojqdus%2F9Wd6ftT2wedhmAZO0SI%2B8TwQAAIgahgSrx4dUhZnS1ARmp3ydvGnuDrYUUs4gjXCQK5wswEq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDJPGtAQ9czaz9G8Z3ircA6PYpDTIRKhZsY9sdVKiPZMZ3Ix6hEtDcjA9Gb09uhoMLQx8iFcneMzOO0VLQ2d%2FYviBb%2FzS%2BafbIG5rxeH%2FGfgY6Jthf1vNIVYo1KH0Y9v927axO4KaZyL9ec5s10l1BpLB0whnEwkUf3hsp2Ue2yb4rdd75fYjhvHfimJcDOBaMS3%2FlDfRQsXrikzBedWugswBuM2ClZIX6FHXSXynzXChROHcndpXBFtljl4jYqlNui6flw5twbZpGmXru5u5vwd4jhmgvClsNeK78L0svqKrPX8IsQ3odh0SRBnNQUK6nRuXc77yZJE5g5zkHSpV3CtcDoD6PflsqUWjoselTXaGyruZNCEknyYeGm9MFfZxlXo0oBYQI0ARegGU8F3TSGWxJFQFW35%2FLuP08brRMO%2FhweQE%2FSUucLqKuNtxGPEBlWeoHx65OeFfNPsd39q0hz6YJJ3PrX4fqidELQ%2BcM4isb0V3koyg6Z4vzp4qwHkCrOQpYk0AR7fQjK1OYmtzLXJS7eEgw49BvTVzQrppeooRJbistbW8ttRfsVlNcFNrbQNNmue1hPZA3D61CRD%2B36iUeeO0H4r%2FbRRcEX0AtaPZNco5ua0vjCXwQEc799DOEfPHUybYET937xa1MOzhycQGOqUB1E7qozs5B4h8qhlg4boH1Jv2E4eG18Y6DgGxh%2Fp1E557BUP1fjpdL5VWkiYwTG7qtvA%2FSDjM9uX%2B3bB0QQNBJr1kIbgW5Mh7fy7oFmH7Y%2FFNlhADLdy59V1geicn98lZD8idiHEak8dOSA7GlXkblZje8igd4pOQOHJ3BidMAmtfabJg14PMMbuMqMncGrBwLcqvgXvmB%2BMtxXBRXzAMJzFagfYk&X-Amz-Signature=b4f5af048f9e2aba44a864bb2f48c1d3b5587dcd90617076686d27c9eeed19fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WVMUCP3%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIEkLLk23MBuEiwJBtQcibIxew3k87fuTA5vIDPLW98GeAiAcvVdktBRuCDs5K54gooxuzyGPMtyvqVNihFSO4zlRfir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMJdyMz22n6pCsyJ7mKtwDfXwV2lholsYWTKSYMxRjQFf%2Fa%2FF%2BCFsH3uXxm69dcCFYTO4SOKXF3RIVX9riNTLsRuJZTG%2Fi%2FFNQgCHeyOjwSyDEGt6j0WIE91Gmr%2BjX1HNUkluEI2d2GILDKLa0RlHQS41WmIBIwHnEXQ%2FdzsQZctoRLY4aQFw%2FEGU8g07moyZyEcOvdHrkjFCVTim9pL4x4dWXJvcCxJ2R5DjGxg26JgURctW6nYnSnkxjlrpPRDoG4%2BJHe2%2Fkmk8LLMXaKbyIuZEeZMDu0kdiDKorfNEUJYVzFrMmsFHbdMpMGmxkpBtfRfixMVjolN997I8k3Y8Ix%2BEBNgQ8ccUIcnbHcMcncQQkEGOELkHzcnfWJqM9SWojCOAZ9H%2BZJ25a7J27UN5LXgwCk0ssctHLwyLfh5vxJBOHMhiY7Ed1u24Jx%2F%2BCqpbMbv8gEJG9KjmcAYirCYlfH07fcsnw40mhxZZgT2tfY51lmNV6Wu3ZPR%2BAiwK53cjNBVzIkC767lw8weL%2FXZfAQWhcjNXK4aKR3xRoc1Ab33hbgtLynkZkd9PRZLDtQ%2B3pylBYedfjQdPlWrLP84Y3FOv7GHf%2FHJLVLVQt21zGwv3HYDR9gSc%2BW7Mbrs90mPskyHq7%2FJWaaql%2BtLEw2eHJxAY6pgH21xRlZqRPTkSdHawAsqt9BCgBI7bX0pv5MBhGdzmW9%2BLmMpZ2bPvZrbYb3TiB8spVSdHOzw530cCtPOz0hvpZsmoyfZJFbelbajywyMnYDXUzaUwHILqdIvLcy7bpGjvuLeNaQw%2F%2BRVen0r7ns%2B%2BPlVE4zwx%2BTeZ0FtiGP%2FeTPbjE855LMccpxGwDk6RQ77oA3QUDfMRZye6xQrSCCrYRmMG7HCNc&X-Amz-Signature=c231d7d7e6c65389664a0450f6e0665d847c5e051aa5deb05436257eb9be0a8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WVMUCP3%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIEkLLk23MBuEiwJBtQcibIxew3k87fuTA5vIDPLW98GeAiAcvVdktBRuCDs5K54gooxuzyGPMtyvqVNihFSO4zlRfir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMJdyMz22n6pCsyJ7mKtwDfXwV2lholsYWTKSYMxRjQFf%2Fa%2FF%2BCFsH3uXxm69dcCFYTO4SOKXF3RIVX9riNTLsRuJZTG%2Fi%2FFNQgCHeyOjwSyDEGt6j0WIE91Gmr%2BjX1HNUkluEI2d2GILDKLa0RlHQS41WmIBIwHnEXQ%2FdzsQZctoRLY4aQFw%2FEGU8g07moyZyEcOvdHrkjFCVTim9pL4x4dWXJvcCxJ2R5DjGxg26JgURctW6nYnSnkxjlrpPRDoG4%2BJHe2%2Fkmk8LLMXaKbyIuZEeZMDu0kdiDKorfNEUJYVzFrMmsFHbdMpMGmxkpBtfRfixMVjolN997I8k3Y8Ix%2BEBNgQ8ccUIcnbHcMcncQQkEGOELkHzcnfWJqM9SWojCOAZ9H%2BZJ25a7J27UN5LXgwCk0ssctHLwyLfh5vxJBOHMhiY7Ed1u24Jx%2F%2BCqpbMbv8gEJG9KjmcAYirCYlfH07fcsnw40mhxZZgT2tfY51lmNV6Wu3ZPR%2BAiwK53cjNBVzIkC767lw8weL%2FXZfAQWhcjNXK4aKR3xRoc1Ab33hbgtLynkZkd9PRZLDtQ%2B3pylBYedfjQdPlWrLP84Y3FOv7GHf%2FHJLVLVQt21zGwv3HYDR9gSc%2BW7Mbrs90mPskyHq7%2FJWaaql%2BtLEw2eHJxAY6pgH21xRlZqRPTkSdHawAsqt9BCgBI7bX0pv5MBhGdzmW9%2BLmMpZ2bPvZrbYb3TiB8spVSdHOzw530cCtPOz0hvpZsmoyfZJFbelbajywyMnYDXUzaUwHILqdIvLcy7bpGjvuLeNaQw%2F%2BRVen0r7ns%2B%2BPlVE4zwx%2BTeZ0FtiGP%2FeTPbjE855LMccpxGwDk6RQ77oA3QUDfMRZye6xQrSCCrYRmMG7HCNc&X-Amz-Signature=65971104ebb00f180341dffa3c2835aaee615a38db652601c9069c77230c9f05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WVMUCP3%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIEkLLk23MBuEiwJBtQcibIxew3k87fuTA5vIDPLW98GeAiAcvVdktBRuCDs5K54gooxuzyGPMtyvqVNihFSO4zlRfir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMJdyMz22n6pCsyJ7mKtwDfXwV2lholsYWTKSYMxRjQFf%2Fa%2FF%2BCFsH3uXxm69dcCFYTO4SOKXF3RIVX9riNTLsRuJZTG%2Fi%2FFNQgCHeyOjwSyDEGt6j0WIE91Gmr%2BjX1HNUkluEI2d2GILDKLa0RlHQS41WmIBIwHnEXQ%2FdzsQZctoRLY4aQFw%2FEGU8g07moyZyEcOvdHrkjFCVTim9pL4x4dWXJvcCxJ2R5DjGxg26JgURctW6nYnSnkxjlrpPRDoG4%2BJHe2%2Fkmk8LLMXaKbyIuZEeZMDu0kdiDKorfNEUJYVzFrMmsFHbdMpMGmxkpBtfRfixMVjolN997I8k3Y8Ix%2BEBNgQ8ccUIcnbHcMcncQQkEGOELkHzcnfWJqM9SWojCOAZ9H%2BZJ25a7J27UN5LXgwCk0ssctHLwyLfh5vxJBOHMhiY7Ed1u24Jx%2F%2BCqpbMbv8gEJG9KjmcAYirCYlfH07fcsnw40mhxZZgT2tfY51lmNV6Wu3ZPR%2BAiwK53cjNBVzIkC767lw8weL%2FXZfAQWhcjNXK4aKR3xRoc1Ab33hbgtLynkZkd9PRZLDtQ%2B3pylBYedfjQdPlWrLP84Y3FOv7GHf%2FHJLVLVQt21zGwv3HYDR9gSc%2BW7Mbrs90mPskyHq7%2FJWaaql%2BtLEw2eHJxAY6pgH21xRlZqRPTkSdHawAsqt9BCgBI7bX0pv5MBhGdzmW9%2BLmMpZ2bPvZrbYb3TiB8spVSdHOzw530cCtPOz0hvpZsmoyfZJFbelbajywyMnYDXUzaUwHILqdIvLcy7bpGjvuLeNaQw%2F%2BRVen0r7ns%2B%2BPlVE4zwx%2BTeZ0FtiGP%2FeTPbjE855LMccpxGwDk6RQ77oA3QUDfMRZye6xQrSCCrYRmMG7HCNc&X-Amz-Signature=9c4158450d1510f004ff778ba1c5a3ce72ab6cdbce418af0ae0117dbeb0a7ca5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WVMUCP3%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIEkLLk23MBuEiwJBtQcibIxew3k87fuTA5vIDPLW98GeAiAcvVdktBRuCDs5K54gooxuzyGPMtyvqVNihFSO4zlRfir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMJdyMz22n6pCsyJ7mKtwDfXwV2lholsYWTKSYMxRjQFf%2Fa%2FF%2BCFsH3uXxm69dcCFYTO4SOKXF3RIVX9riNTLsRuJZTG%2Fi%2FFNQgCHeyOjwSyDEGt6j0WIE91Gmr%2BjX1HNUkluEI2d2GILDKLa0RlHQS41WmIBIwHnEXQ%2FdzsQZctoRLY4aQFw%2FEGU8g07moyZyEcOvdHrkjFCVTim9pL4x4dWXJvcCxJ2R5DjGxg26JgURctW6nYnSnkxjlrpPRDoG4%2BJHe2%2Fkmk8LLMXaKbyIuZEeZMDu0kdiDKorfNEUJYVzFrMmsFHbdMpMGmxkpBtfRfixMVjolN997I8k3Y8Ix%2BEBNgQ8ccUIcnbHcMcncQQkEGOELkHzcnfWJqM9SWojCOAZ9H%2BZJ25a7J27UN5LXgwCk0ssctHLwyLfh5vxJBOHMhiY7Ed1u24Jx%2F%2BCqpbMbv8gEJG9KjmcAYirCYlfH07fcsnw40mhxZZgT2tfY51lmNV6Wu3ZPR%2BAiwK53cjNBVzIkC767lw8weL%2FXZfAQWhcjNXK4aKR3xRoc1Ab33hbgtLynkZkd9PRZLDtQ%2B3pylBYedfjQdPlWrLP84Y3FOv7GHf%2FHJLVLVQt21zGwv3HYDR9gSc%2BW7Mbrs90mPskyHq7%2FJWaaql%2BtLEw2eHJxAY6pgH21xRlZqRPTkSdHawAsqt9BCgBI7bX0pv5MBhGdzmW9%2BLmMpZ2bPvZrbYb3TiB8spVSdHOzw530cCtPOz0hvpZsmoyfZJFbelbajywyMnYDXUzaUwHILqdIvLcy7bpGjvuLeNaQw%2F%2BRVen0r7ns%2B%2BPlVE4zwx%2BTeZ0FtiGP%2FeTPbjE855LMccpxGwDk6RQ77oA3QUDfMRZye6xQrSCCrYRmMG7HCNc&X-Amz-Signature=5ac58081fdcbbf900f13bf1ebbb678f371461fde7cfbbfd11a08e7b102b45063&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WVMUCP3%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIEkLLk23MBuEiwJBtQcibIxew3k87fuTA5vIDPLW98GeAiAcvVdktBRuCDs5K54gooxuzyGPMtyvqVNihFSO4zlRfir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMJdyMz22n6pCsyJ7mKtwDfXwV2lholsYWTKSYMxRjQFf%2Fa%2FF%2BCFsH3uXxm69dcCFYTO4SOKXF3RIVX9riNTLsRuJZTG%2Fi%2FFNQgCHeyOjwSyDEGt6j0WIE91Gmr%2BjX1HNUkluEI2d2GILDKLa0RlHQS41WmIBIwHnEXQ%2FdzsQZctoRLY4aQFw%2FEGU8g07moyZyEcOvdHrkjFCVTim9pL4x4dWXJvcCxJ2R5DjGxg26JgURctW6nYnSnkxjlrpPRDoG4%2BJHe2%2Fkmk8LLMXaKbyIuZEeZMDu0kdiDKorfNEUJYVzFrMmsFHbdMpMGmxkpBtfRfixMVjolN997I8k3Y8Ix%2BEBNgQ8ccUIcnbHcMcncQQkEGOELkHzcnfWJqM9SWojCOAZ9H%2BZJ25a7J27UN5LXgwCk0ssctHLwyLfh5vxJBOHMhiY7Ed1u24Jx%2F%2BCqpbMbv8gEJG9KjmcAYirCYlfH07fcsnw40mhxZZgT2tfY51lmNV6Wu3ZPR%2BAiwK53cjNBVzIkC767lw8weL%2FXZfAQWhcjNXK4aKR3xRoc1Ab33hbgtLynkZkd9PRZLDtQ%2B3pylBYedfjQdPlWrLP84Y3FOv7GHf%2FHJLVLVQt21zGwv3HYDR9gSc%2BW7Mbrs90mPskyHq7%2FJWaaql%2BtLEw2eHJxAY6pgH21xRlZqRPTkSdHawAsqt9BCgBI7bX0pv5MBhGdzmW9%2BLmMpZ2bPvZrbYb3TiB8spVSdHOzw530cCtPOz0hvpZsmoyfZJFbelbajywyMnYDXUzaUwHILqdIvLcy7bpGjvuLeNaQw%2F%2BRVen0r7ns%2B%2BPlVE4zwx%2BTeZ0FtiGP%2FeTPbjE855LMccpxGwDk6RQ77oA3QUDfMRZye6xQrSCCrYRmMG7HCNc&X-Amz-Signature=dd0b96e8b5e0a3c0a4c35a115332e5489d963d56f7c5bfde9490bdfe0cf2e233&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WVMUCP3%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIEkLLk23MBuEiwJBtQcibIxew3k87fuTA5vIDPLW98GeAiAcvVdktBRuCDs5K54gooxuzyGPMtyvqVNihFSO4zlRfir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMJdyMz22n6pCsyJ7mKtwDfXwV2lholsYWTKSYMxRjQFf%2Fa%2FF%2BCFsH3uXxm69dcCFYTO4SOKXF3RIVX9riNTLsRuJZTG%2Fi%2FFNQgCHeyOjwSyDEGt6j0WIE91Gmr%2BjX1HNUkluEI2d2GILDKLa0RlHQS41WmIBIwHnEXQ%2FdzsQZctoRLY4aQFw%2FEGU8g07moyZyEcOvdHrkjFCVTim9pL4x4dWXJvcCxJ2R5DjGxg26JgURctW6nYnSnkxjlrpPRDoG4%2BJHe2%2Fkmk8LLMXaKbyIuZEeZMDu0kdiDKorfNEUJYVzFrMmsFHbdMpMGmxkpBtfRfixMVjolN997I8k3Y8Ix%2BEBNgQ8ccUIcnbHcMcncQQkEGOELkHzcnfWJqM9SWojCOAZ9H%2BZJ25a7J27UN5LXgwCk0ssctHLwyLfh5vxJBOHMhiY7Ed1u24Jx%2F%2BCqpbMbv8gEJG9KjmcAYirCYlfH07fcsnw40mhxZZgT2tfY51lmNV6Wu3ZPR%2BAiwK53cjNBVzIkC767lw8weL%2FXZfAQWhcjNXK4aKR3xRoc1Ab33hbgtLynkZkd9PRZLDtQ%2B3pylBYedfjQdPlWrLP84Y3FOv7GHf%2FHJLVLVQt21zGwv3HYDR9gSc%2BW7Mbrs90mPskyHq7%2FJWaaql%2BtLEw2eHJxAY6pgH21xRlZqRPTkSdHawAsqt9BCgBI7bX0pv5MBhGdzmW9%2BLmMpZ2bPvZrbYb3TiB8spVSdHOzw530cCtPOz0hvpZsmoyfZJFbelbajywyMnYDXUzaUwHILqdIvLcy7bpGjvuLeNaQw%2F%2BRVen0r7ns%2B%2BPlVE4zwx%2BTeZ0FtiGP%2FeTPbjE855LMccpxGwDk6RQ77oA3QUDfMRZye6xQrSCCrYRmMG7HCNc&X-Amz-Signature=9f1818bd5b109c7fb79d5b11d4e17e7243b9bda9f2b648cd3e820ed399d5b411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WVMUCP3%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIEkLLk23MBuEiwJBtQcibIxew3k87fuTA5vIDPLW98GeAiAcvVdktBRuCDs5K54gooxuzyGPMtyvqVNihFSO4zlRfir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMJdyMz22n6pCsyJ7mKtwDfXwV2lholsYWTKSYMxRjQFf%2Fa%2FF%2BCFsH3uXxm69dcCFYTO4SOKXF3RIVX9riNTLsRuJZTG%2Fi%2FFNQgCHeyOjwSyDEGt6j0WIE91Gmr%2BjX1HNUkluEI2d2GILDKLa0RlHQS41WmIBIwHnEXQ%2FdzsQZctoRLY4aQFw%2FEGU8g07moyZyEcOvdHrkjFCVTim9pL4x4dWXJvcCxJ2R5DjGxg26JgURctW6nYnSnkxjlrpPRDoG4%2BJHe2%2Fkmk8LLMXaKbyIuZEeZMDu0kdiDKorfNEUJYVzFrMmsFHbdMpMGmxkpBtfRfixMVjolN997I8k3Y8Ix%2BEBNgQ8ccUIcnbHcMcncQQkEGOELkHzcnfWJqM9SWojCOAZ9H%2BZJ25a7J27UN5LXgwCk0ssctHLwyLfh5vxJBOHMhiY7Ed1u24Jx%2F%2BCqpbMbv8gEJG9KjmcAYirCYlfH07fcsnw40mhxZZgT2tfY51lmNV6Wu3ZPR%2BAiwK53cjNBVzIkC767lw8weL%2FXZfAQWhcjNXK4aKR3xRoc1Ab33hbgtLynkZkd9PRZLDtQ%2B3pylBYedfjQdPlWrLP84Y3FOv7GHf%2FHJLVLVQt21zGwv3HYDR9gSc%2BW7Mbrs90mPskyHq7%2FJWaaql%2BtLEw2eHJxAY6pgH21xRlZqRPTkSdHawAsqt9BCgBI7bX0pv5MBhGdzmW9%2BLmMpZ2bPvZrbYb3TiB8spVSdHOzw530cCtPOz0hvpZsmoyfZJFbelbajywyMnYDXUzaUwHILqdIvLcy7bpGjvuLeNaQw%2F%2BRVen0r7ns%2B%2BPlVE4zwx%2BTeZ0FtiGP%2FeTPbjE855LMccpxGwDk6RQ77oA3QUDfMRZye6xQrSCCrYRmMG7HCNc&X-Amz-Signature=623c9b0316ff4fca6af75c997e81e2ef454d7dc5936198a9e43a98e8fa74fe1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WVMUCP3%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIEkLLk23MBuEiwJBtQcibIxew3k87fuTA5vIDPLW98GeAiAcvVdktBRuCDs5K54gooxuzyGPMtyvqVNihFSO4zlRfir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMJdyMz22n6pCsyJ7mKtwDfXwV2lholsYWTKSYMxRjQFf%2Fa%2FF%2BCFsH3uXxm69dcCFYTO4SOKXF3RIVX9riNTLsRuJZTG%2Fi%2FFNQgCHeyOjwSyDEGt6j0WIE91Gmr%2BjX1HNUkluEI2d2GILDKLa0RlHQS41WmIBIwHnEXQ%2FdzsQZctoRLY4aQFw%2FEGU8g07moyZyEcOvdHrkjFCVTim9pL4x4dWXJvcCxJ2R5DjGxg26JgURctW6nYnSnkxjlrpPRDoG4%2BJHe2%2Fkmk8LLMXaKbyIuZEeZMDu0kdiDKorfNEUJYVzFrMmsFHbdMpMGmxkpBtfRfixMVjolN997I8k3Y8Ix%2BEBNgQ8ccUIcnbHcMcncQQkEGOELkHzcnfWJqM9SWojCOAZ9H%2BZJ25a7J27UN5LXgwCk0ssctHLwyLfh5vxJBOHMhiY7Ed1u24Jx%2F%2BCqpbMbv8gEJG9KjmcAYirCYlfH07fcsnw40mhxZZgT2tfY51lmNV6Wu3ZPR%2BAiwK53cjNBVzIkC767lw8weL%2FXZfAQWhcjNXK4aKR3xRoc1Ab33hbgtLynkZkd9PRZLDtQ%2B3pylBYedfjQdPlWrLP84Y3FOv7GHf%2FHJLVLVQt21zGwv3HYDR9gSc%2BW7Mbrs90mPskyHq7%2FJWaaql%2BtLEw2eHJxAY6pgH21xRlZqRPTkSdHawAsqt9BCgBI7bX0pv5MBhGdzmW9%2BLmMpZ2bPvZrbYb3TiB8spVSdHOzw530cCtPOz0hvpZsmoyfZJFbelbajywyMnYDXUzaUwHILqdIvLcy7bpGjvuLeNaQw%2F%2BRVen0r7ns%2B%2BPlVE4zwx%2BTeZ0FtiGP%2FeTPbjE855LMccpxGwDk6RQ77oA3QUDfMRZye6xQrSCCrYRmMG7HCNc&X-Amz-Signature=c2abf87d8df9dbfd4d62ce18e7a841511603be869817848f8af783345d7b3576&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WVMUCP3%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIEkLLk23MBuEiwJBtQcibIxew3k87fuTA5vIDPLW98GeAiAcvVdktBRuCDs5K54gooxuzyGPMtyvqVNihFSO4zlRfir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMJdyMz22n6pCsyJ7mKtwDfXwV2lholsYWTKSYMxRjQFf%2Fa%2FF%2BCFsH3uXxm69dcCFYTO4SOKXF3RIVX9riNTLsRuJZTG%2Fi%2FFNQgCHeyOjwSyDEGt6j0WIE91Gmr%2BjX1HNUkluEI2d2GILDKLa0RlHQS41WmIBIwHnEXQ%2FdzsQZctoRLY4aQFw%2FEGU8g07moyZyEcOvdHrkjFCVTim9pL4x4dWXJvcCxJ2R5DjGxg26JgURctW6nYnSnkxjlrpPRDoG4%2BJHe2%2Fkmk8LLMXaKbyIuZEeZMDu0kdiDKorfNEUJYVzFrMmsFHbdMpMGmxkpBtfRfixMVjolN997I8k3Y8Ix%2BEBNgQ8ccUIcnbHcMcncQQkEGOELkHzcnfWJqM9SWojCOAZ9H%2BZJ25a7J27UN5LXgwCk0ssctHLwyLfh5vxJBOHMhiY7Ed1u24Jx%2F%2BCqpbMbv8gEJG9KjmcAYirCYlfH07fcsnw40mhxZZgT2tfY51lmNV6Wu3ZPR%2BAiwK53cjNBVzIkC767lw8weL%2FXZfAQWhcjNXK4aKR3xRoc1Ab33hbgtLynkZkd9PRZLDtQ%2B3pylBYedfjQdPlWrLP84Y3FOv7GHf%2FHJLVLVQt21zGwv3HYDR9gSc%2BW7Mbrs90mPskyHq7%2FJWaaql%2BtLEw2eHJxAY6pgH21xRlZqRPTkSdHawAsqt9BCgBI7bX0pv5MBhGdzmW9%2BLmMpZ2bPvZrbYb3TiB8spVSdHOzw530cCtPOz0hvpZsmoyfZJFbelbajywyMnYDXUzaUwHILqdIvLcy7bpGjvuLeNaQw%2F%2BRVen0r7ns%2B%2BPlVE4zwx%2BTeZ0FtiGP%2FeTPbjE855LMccpxGwDk6RQ77oA3QUDfMRZye6xQrSCCrYRmMG7HCNc&X-Amz-Signature=61008399812a2cfc53bce115d7e61b35df38518b5668b331eb6e813ae6492e8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WVMUCP3%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T210921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIEkLLk23MBuEiwJBtQcibIxew3k87fuTA5vIDPLW98GeAiAcvVdktBRuCDs5K54gooxuzyGPMtyvqVNihFSO4zlRfir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMJdyMz22n6pCsyJ7mKtwDfXwV2lholsYWTKSYMxRjQFf%2Fa%2FF%2BCFsH3uXxm69dcCFYTO4SOKXF3RIVX9riNTLsRuJZTG%2Fi%2FFNQgCHeyOjwSyDEGt6j0WIE91Gmr%2BjX1HNUkluEI2d2GILDKLa0RlHQS41WmIBIwHnEXQ%2FdzsQZctoRLY4aQFw%2FEGU8g07moyZyEcOvdHrkjFCVTim9pL4x4dWXJvcCxJ2R5DjGxg26JgURctW6nYnSnkxjlrpPRDoG4%2BJHe2%2Fkmk8LLMXaKbyIuZEeZMDu0kdiDKorfNEUJYVzFrMmsFHbdMpMGmxkpBtfRfixMVjolN997I8k3Y8Ix%2BEBNgQ8ccUIcnbHcMcncQQkEGOELkHzcnfWJqM9SWojCOAZ9H%2BZJ25a7J27UN5LXgwCk0ssctHLwyLfh5vxJBOHMhiY7Ed1u24Jx%2F%2BCqpbMbv8gEJG9KjmcAYirCYlfH07fcsnw40mhxZZgT2tfY51lmNV6Wu3ZPR%2BAiwK53cjNBVzIkC767lw8weL%2FXZfAQWhcjNXK4aKR3xRoc1Ab33hbgtLynkZkd9PRZLDtQ%2B3pylBYedfjQdPlWrLP84Y3FOv7GHf%2FHJLVLVQt21zGwv3HYDR9gSc%2BW7Mbrs90mPskyHq7%2FJWaaql%2BtLEw2eHJxAY6pgH21xRlZqRPTkSdHawAsqt9BCgBI7bX0pv5MBhGdzmW9%2BLmMpZ2bPvZrbYb3TiB8spVSdHOzw530cCtPOz0hvpZsmoyfZJFbelbajywyMnYDXUzaUwHILqdIvLcy7bpGjvuLeNaQw%2F%2BRVen0r7ns%2B%2BPlVE4zwx%2BTeZ0FtiGP%2FeTPbjE855LMccpxGwDk6RQ77oA3QUDfMRZye6xQrSCCrYRmMG7HCNc&X-Amz-Signature=5ac58081fdcbbf900f13bf1ebbb678f371461fde7cfbbfd11a08e7b102b45063&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
