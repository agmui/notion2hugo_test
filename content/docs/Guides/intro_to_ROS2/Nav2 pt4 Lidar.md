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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PD6JZGD%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8OrnE4ZN9nwLGSB91WQKbosEwm%2BU3PXc3DS%2BNb921bAiEAhi1d0C4pcOwezuVbZ3xYpfZ6zGWGImCTybgVJsXmdxMqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDErnCRXguPdcNTQYBircA%2FixsDf%2FrxJcSNsWfd9eFP171yrWKHcxB9n4SACTso97WJckjbAj83rHRNOFTEKQ%2FZ6f%2FsXc1a6wDMvNjz%2Bno0dzNHJ7hh8SsFw6d6DE86xwoVAME1t7PqLYFZQZQC6I3FVowx5reNIzIbP2kW%2B4Q4UJhAb6nX6tEg3Gkx8jZuxKORnW%2B%2B3zXcRYFl9h9LFhdffEpi7ZRVvIQjPZdEslYBCNMU%2F7Ltr2R6P08blz67H8FjvuAzbq83jjYLF%2B3WHRcJwJwCiblQlrfVgKvPdgcwawS9q7Cxi0pscTyoB3fihpDt4wqBxhHRZkdcJ%2FkIeFcsWcsNRNeJmxQUS%2Bs4aGCg1LPd4eulxf496NBua8yiaI%2BasGYzNA7LLWRdawHEne2UBLsGS89lWCFaoBnqWR7mhJnuL%2FJHDo9%2Fwh1S0o2WeGxTMYqXCv%2BVJYk%2F9f8URf9SoS%2F0Sib64JTBnLHWAW7eYifOfesoWlMIRoX37AZTJ0p2ZudUzsZCWuEhiEhjYoH55hCUnpJ9Wq%2Ft6T%2FQgwY8KYuL7J5naoXAh7m0bCxhweAEUH5OC1Rw%2BNkNMCs8QFqBM4OckQqiG8QVLCedWZlk2Zl9huS75SPyDfX2RMcqGF8Qgw6Xg%2F%2BZaKriQbMM7R4MQGOqUBEQgYrD9JD9KcKxDU1da4cF3KUogmTGs7DGEx9Q%2FUCEI%2BvJblu1rjDaPiDIFai5Gqu7LGRPAX119yhPWIJRFVZUq41FNOHJWnCm%2FEt3vwD9B0SGCis9MJco0BPjjlSUaqblWz%2Bz89cpOItdUkonZNKKtON5rI6hTglUqDOObqrhoRExV6errlmGzW35SnCbiVAWk9TP3BG7GThsq4fUE4Ry%2B6sLf9&X-Amz-Signature=71a1c7e0b8017288cb2a6e86e812a031af33ce695dfffa41e5bfe4a3637dcd81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBJC7JF3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnatTHg2oKMHKeIkiDonVlwXtoQ0Myl6GgjIDCZsGUpAiByGAI%2Bjq8%2Bd%2Fl49ENSndi0WWkpV%2FQh9MQjXIHgW98zNSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9UG1NXdjGi4yyHgQKtwDKIHPTRVlV8RciXeMQJVPrMTtxEDYL2Gk3BzNlhUU3bSnBKcYn5OAS9iq%2Bi6MaJ5KGwHz6V7amSPJBlkyi8OQdyTAovcXB0STv5gmwK2uN5HkzALBdaU9moZp2a1DHffqPFjAIe4Ny%2BX23cd9Y%2BXD9xwQ1hflZUieVn0e9IwOpYiuPs9WfbhjejfF2JZnaEGbV0ilQjbe4Y5z5xIORdtonn%2BMi55bxFXahOaMuz1xujcPIMc6dy4K4mOfpL6ouryapdlrUnN5L8NWrq8D1%2B%2B8m5E17mHoXSub6fcfQJSQFZVudGxE3thUlZZ6uXsC3U5yAvPjt7VMbxoJS3FLgnPKQgKZMWxShZ%2BziAI0lEYaMnylddCta0g2SnvnY%2F7F7e0iVnpqdKVRbdbxsPJyVztylHBwutGdYOh%2BDJq6K9%2Bh7fSOZwXDDGd8aBA1sVAmWlb%2FhMXxjrHSRSE3qNlYGMNFsgp7gbEMiW0x4%2BANrrcBoCY%2FALylC6aX4QBmgDgmrg7dsSx4pMTQ%2FFaJp788xFBOxcfAU%2FiBnXsoxA2w%2BcmdDRqxgqYgNPJ%2FY5b%2BQ4Ek20pPBeRaMOAdZHL%2FcL7pzO8cITH4970vi17rIHGJQ%2FGTO9Pdw97WCnGJISEabCYwl9HgxAY6pgG3oTOB6BomnX9jm%2FyCbhTr31gNEMgnqMZNvzpKdUoWJfXYMKJJVKVKi%2FySTvZKxSN7T53afrfmN3qbnQTjoPDc6WSDxUieFYW6BM4bzNbfMOSJoLFDYh02B02mLC%2BNkRSMJZwXGn7bR9Rrpi79%2BXhcHs%2F8XAxlcpmQazSikycgsU8AePe3gej9w8CkIRjc%2BFxqj%2FHN7m2zxb288M%2Bje4VPPFzXdlB0&X-Amz-Signature=736ff3c1759dde765ca37b5734e2eb91b7899d26516dfc622bb5a0402774b1a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBJC7JF3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnatTHg2oKMHKeIkiDonVlwXtoQ0Myl6GgjIDCZsGUpAiByGAI%2Bjq8%2Bd%2Fl49ENSndi0WWkpV%2FQh9MQjXIHgW98zNSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9UG1NXdjGi4yyHgQKtwDKIHPTRVlV8RciXeMQJVPrMTtxEDYL2Gk3BzNlhUU3bSnBKcYn5OAS9iq%2Bi6MaJ5KGwHz6V7amSPJBlkyi8OQdyTAovcXB0STv5gmwK2uN5HkzALBdaU9moZp2a1DHffqPFjAIe4Ny%2BX23cd9Y%2BXD9xwQ1hflZUieVn0e9IwOpYiuPs9WfbhjejfF2JZnaEGbV0ilQjbe4Y5z5xIORdtonn%2BMi55bxFXahOaMuz1xujcPIMc6dy4K4mOfpL6ouryapdlrUnN5L8NWrq8D1%2B%2B8m5E17mHoXSub6fcfQJSQFZVudGxE3thUlZZ6uXsC3U5yAvPjt7VMbxoJS3FLgnPKQgKZMWxShZ%2BziAI0lEYaMnylddCta0g2SnvnY%2F7F7e0iVnpqdKVRbdbxsPJyVztylHBwutGdYOh%2BDJq6K9%2Bh7fSOZwXDDGd8aBA1sVAmWlb%2FhMXxjrHSRSE3qNlYGMNFsgp7gbEMiW0x4%2BANrrcBoCY%2FALylC6aX4QBmgDgmrg7dsSx4pMTQ%2FFaJp788xFBOxcfAU%2FiBnXsoxA2w%2BcmdDRqxgqYgNPJ%2FY5b%2BQ4Ek20pPBeRaMOAdZHL%2FcL7pzO8cITH4970vi17rIHGJQ%2FGTO9Pdw97WCnGJISEabCYwl9HgxAY6pgG3oTOB6BomnX9jm%2FyCbhTr31gNEMgnqMZNvzpKdUoWJfXYMKJJVKVKi%2FySTvZKxSN7T53afrfmN3qbnQTjoPDc6WSDxUieFYW6BM4bzNbfMOSJoLFDYh02B02mLC%2BNkRSMJZwXGn7bR9Rrpi79%2BXhcHs%2F8XAxlcpmQazSikycgsU8AePe3gej9w8CkIRjc%2BFxqj%2FHN7m2zxb288M%2Bje4VPPFzXdlB0&X-Amz-Signature=34f837ce03fce69429ef0c43f9994093d4b1e63358b46a4e577aa82df7b92f7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBJC7JF3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnatTHg2oKMHKeIkiDonVlwXtoQ0Myl6GgjIDCZsGUpAiByGAI%2Bjq8%2Bd%2Fl49ENSndi0WWkpV%2FQh9MQjXIHgW98zNSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9UG1NXdjGi4yyHgQKtwDKIHPTRVlV8RciXeMQJVPrMTtxEDYL2Gk3BzNlhUU3bSnBKcYn5OAS9iq%2Bi6MaJ5KGwHz6V7amSPJBlkyi8OQdyTAovcXB0STv5gmwK2uN5HkzALBdaU9moZp2a1DHffqPFjAIe4Ny%2BX23cd9Y%2BXD9xwQ1hflZUieVn0e9IwOpYiuPs9WfbhjejfF2JZnaEGbV0ilQjbe4Y5z5xIORdtonn%2BMi55bxFXahOaMuz1xujcPIMc6dy4K4mOfpL6ouryapdlrUnN5L8NWrq8D1%2B%2B8m5E17mHoXSub6fcfQJSQFZVudGxE3thUlZZ6uXsC3U5yAvPjt7VMbxoJS3FLgnPKQgKZMWxShZ%2BziAI0lEYaMnylddCta0g2SnvnY%2F7F7e0iVnpqdKVRbdbxsPJyVztylHBwutGdYOh%2BDJq6K9%2Bh7fSOZwXDDGd8aBA1sVAmWlb%2FhMXxjrHSRSE3qNlYGMNFsgp7gbEMiW0x4%2BANrrcBoCY%2FALylC6aX4QBmgDgmrg7dsSx4pMTQ%2FFaJp788xFBOxcfAU%2FiBnXsoxA2w%2BcmdDRqxgqYgNPJ%2FY5b%2BQ4Ek20pPBeRaMOAdZHL%2FcL7pzO8cITH4970vi17rIHGJQ%2FGTO9Pdw97WCnGJISEabCYwl9HgxAY6pgG3oTOB6BomnX9jm%2FyCbhTr31gNEMgnqMZNvzpKdUoWJfXYMKJJVKVKi%2FySTvZKxSN7T53afrfmN3qbnQTjoPDc6WSDxUieFYW6BM4bzNbfMOSJoLFDYh02B02mLC%2BNkRSMJZwXGn7bR9Rrpi79%2BXhcHs%2F8XAxlcpmQazSikycgsU8AePe3gej9w8CkIRjc%2BFxqj%2FHN7m2zxb288M%2Bje4VPPFzXdlB0&X-Amz-Signature=bd19b4a68323164db4625be16a92e3a42345672ecb85cd3e7f4537111f6930a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBJC7JF3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnatTHg2oKMHKeIkiDonVlwXtoQ0Myl6GgjIDCZsGUpAiByGAI%2Bjq8%2Bd%2Fl49ENSndi0WWkpV%2FQh9MQjXIHgW98zNSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9UG1NXdjGi4yyHgQKtwDKIHPTRVlV8RciXeMQJVPrMTtxEDYL2Gk3BzNlhUU3bSnBKcYn5OAS9iq%2Bi6MaJ5KGwHz6V7amSPJBlkyi8OQdyTAovcXB0STv5gmwK2uN5HkzALBdaU9moZp2a1DHffqPFjAIe4Ny%2BX23cd9Y%2BXD9xwQ1hflZUieVn0e9IwOpYiuPs9WfbhjejfF2JZnaEGbV0ilQjbe4Y5z5xIORdtonn%2BMi55bxFXahOaMuz1xujcPIMc6dy4K4mOfpL6ouryapdlrUnN5L8NWrq8D1%2B%2B8m5E17mHoXSub6fcfQJSQFZVudGxE3thUlZZ6uXsC3U5yAvPjt7VMbxoJS3FLgnPKQgKZMWxShZ%2BziAI0lEYaMnylddCta0g2SnvnY%2F7F7e0iVnpqdKVRbdbxsPJyVztylHBwutGdYOh%2BDJq6K9%2Bh7fSOZwXDDGd8aBA1sVAmWlb%2FhMXxjrHSRSE3qNlYGMNFsgp7gbEMiW0x4%2BANrrcBoCY%2FALylC6aX4QBmgDgmrg7dsSx4pMTQ%2FFaJp788xFBOxcfAU%2FiBnXsoxA2w%2BcmdDRqxgqYgNPJ%2FY5b%2BQ4Ek20pPBeRaMOAdZHL%2FcL7pzO8cITH4970vi17rIHGJQ%2FGTO9Pdw97WCnGJISEabCYwl9HgxAY6pgG3oTOB6BomnX9jm%2FyCbhTr31gNEMgnqMZNvzpKdUoWJfXYMKJJVKVKi%2FySTvZKxSN7T53afrfmN3qbnQTjoPDc6WSDxUieFYW6BM4bzNbfMOSJoLFDYh02B02mLC%2BNkRSMJZwXGn7bR9Rrpi79%2BXhcHs%2F8XAxlcpmQazSikycgsU8AePe3gej9w8CkIRjc%2BFxqj%2FHN7m2zxb288M%2Bje4VPPFzXdlB0&X-Amz-Signature=41a612bec55f97c0e6a7c2d817cbbc3d526929e3329e75fb695b54143f3a105a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBJC7JF3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnatTHg2oKMHKeIkiDonVlwXtoQ0Myl6GgjIDCZsGUpAiByGAI%2Bjq8%2Bd%2Fl49ENSndi0WWkpV%2FQh9MQjXIHgW98zNSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9UG1NXdjGi4yyHgQKtwDKIHPTRVlV8RciXeMQJVPrMTtxEDYL2Gk3BzNlhUU3bSnBKcYn5OAS9iq%2Bi6MaJ5KGwHz6V7amSPJBlkyi8OQdyTAovcXB0STv5gmwK2uN5HkzALBdaU9moZp2a1DHffqPFjAIe4Ny%2BX23cd9Y%2BXD9xwQ1hflZUieVn0e9IwOpYiuPs9WfbhjejfF2JZnaEGbV0ilQjbe4Y5z5xIORdtonn%2BMi55bxFXahOaMuz1xujcPIMc6dy4K4mOfpL6ouryapdlrUnN5L8NWrq8D1%2B%2B8m5E17mHoXSub6fcfQJSQFZVudGxE3thUlZZ6uXsC3U5yAvPjt7VMbxoJS3FLgnPKQgKZMWxShZ%2BziAI0lEYaMnylddCta0g2SnvnY%2F7F7e0iVnpqdKVRbdbxsPJyVztylHBwutGdYOh%2BDJq6K9%2Bh7fSOZwXDDGd8aBA1sVAmWlb%2FhMXxjrHSRSE3qNlYGMNFsgp7gbEMiW0x4%2BANrrcBoCY%2FALylC6aX4QBmgDgmrg7dsSx4pMTQ%2FFaJp788xFBOxcfAU%2FiBnXsoxA2w%2BcmdDRqxgqYgNPJ%2FY5b%2BQ4Ek20pPBeRaMOAdZHL%2FcL7pzO8cITH4970vi17rIHGJQ%2FGTO9Pdw97WCnGJISEabCYwl9HgxAY6pgG3oTOB6BomnX9jm%2FyCbhTr31gNEMgnqMZNvzpKdUoWJfXYMKJJVKVKi%2FySTvZKxSN7T53afrfmN3qbnQTjoPDc6WSDxUieFYW6BM4bzNbfMOSJoLFDYh02B02mLC%2BNkRSMJZwXGn7bR9Rrpi79%2BXhcHs%2F8XAxlcpmQazSikycgsU8AePe3gej9w8CkIRjc%2BFxqj%2FHN7m2zxb288M%2Bje4VPPFzXdlB0&X-Amz-Signature=743cc58bc55ac6835604b7d344fc3613fc55a2e0d591a213f0b9b45d95845c2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBJC7JF3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnatTHg2oKMHKeIkiDonVlwXtoQ0Myl6GgjIDCZsGUpAiByGAI%2Bjq8%2Bd%2Fl49ENSndi0WWkpV%2FQh9MQjXIHgW98zNSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9UG1NXdjGi4yyHgQKtwDKIHPTRVlV8RciXeMQJVPrMTtxEDYL2Gk3BzNlhUU3bSnBKcYn5OAS9iq%2Bi6MaJ5KGwHz6V7amSPJBlkyi8OQdyTAovcXB0STv5gmwK2uN5HkzALBdaU9moZp2a1DHffqPFjAIe4Ny%2BX23cd9Y%2BXD9xwQ1hflZUieVn0e9IwOpYiuPs9WfbhjejfF2JZnaEGbV0ilQjbe4Y5z5xIORdtonn%2BMi55bxFXahOaMuz1xujcPIMc6dy4K4mOfpL6ouryapdlrUnN5L8NWrq8D1%2B%2B8m5E17mHoXSub6fcfQJSQFZVudGxE3thUlZZ6uXsC3U5yAvPjt7VMbxoJS3FLgnPKQgKZMWxShZ%2BziAI0lEYaMnylddCta0g2SnvnY%2F7F7e0iVnpqdKVRbdbxsPJyVztylHBwutGdYOh%2BDJq6K9%2Bh7fSOZwXDDGd8aBA1sVAmWlb%2FhMXxjrHSRSE3qNlYGMNFsgp7gbEMiW0x4%2BANrrcBoCY%2FALylC6aX4QBmgDgmrg7dsSx4pMTQ%2FFaJp788xFBOxcfAU%2FiBnXsoxA2w%2BcmdDRqxgqYgNPJ%2FY5b%2BQ4Ek20pPBeRaMOAdZHL%2FcL7pzO8cITH4970vi17rIHGJQ%2FGTO9Pdw97WCnGJISEabCYwl9HgxAY6pgG3oTOB6BomnX9jm%2FyCbhTr31gNEMgnqMZNvzpKdUoWJfXYMKJJVKVKi%2FySTvZKxSN7T53afrfmN3qbnQTjoPDc6WSDxUieFYW6BM4bzNbfMOSJoLFDYh02B02mLC%2BNkRSMJZwXGn7bR9Rrpi79%2BXhcHs%2F8XAxlcpmQazSikycgsU8AePe3gej9w8CkIRjc%2BFxqj%2FHN7m2zxb288M%2Bje4VPPFzXdlB0&X-Amz-Signature=5884676fda851f5cf448058590dabcfb8fae7b9d3c4108a8f26acfadc40a5250&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBJC7JF3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnatTHg2oKMHKeIkiDonVlwXtoQ0Myl6GgjIDCZsGUpAiByGAI%2Bjq8%2Bd%2Fl49ENSndi0WWkpV%2FQh9MQjXIHgW98zNSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9UG1NXdjGi4yyHgQKtwDKIHPTRVlV8RciXeMQJVPrMTtxEDYL2Gk3BzNlhUU3bSnBKcYn5OAS9iq%2Bi6MaJ5KGwHz6V7amSPJBlkyi8OQdyTAovcXB0STv5gmwK2uN5HkzALBdaU9moZp2a1DHffqPFjAIe4Ny%2BX23cd9Y%2BXD9xwQ1hflZUieVn0e9IwOpYiuPs9WfbhjejfF2JZnaEGbV0ilQjbe4Y5z5xIORdtonn%2BMi55bxFXahOaMuz1xujcPIMc6dy4K4mOfpL6ouryapdlrUnN5L8NWrq8D1%2B%2B8m5E17mHoXSub6fcfQJSQFZVudGxE3thUlZZ6uXsC3U5yAvPjt7VMbxoJS3FLgnPKQgKZMWxShZ%2BziAI0lEYaMnylddCta0g2SnvnY%2F7F7e0iVnpqdKVRbdbxsPJyVztylHBwutGdYOh%2BDJq6K9%2Bh7fSOZwXDDGd8aBA1sVAmWlb%2FhMXxjrHSRSE3qNlYGMNFsgp7gbEMiW0x4%2BANrrcBoCY%2FALylC6aX4QBmgDgmrg7dsSx4pMTQ%2FFaJp788xFBOxcfAU%2FiBnXsoxA2w%2BcmdDRqxgqYgNPJ%2FY5b%2BQ4Ek20pPBeRaMOAdZHL%2FcL7pzO8cITH4970vi17rIHGJQ%2FGTO9Pdw97WCnGJISEabCYwl9HgxAY6pgG3oTOB6BomnX9jm%2FyCbhTr31gNEMgnqMZNvzpKdUoWJfXYMKJJVKVKi%2FySTvZKxSN7T53afrfmN3qbnQTjoPDc6WSDxUieFYW6BM4bzNbfMOSJoLFDYh02B02mLC%2BNkRSMJZwXGn7bR9Rrpi79%2BXhcHs%2F8XAxlcpmQazSikycgsU8AePe3gej9w8CkIRjc%2BFxqj%2FHN7m2zxb288M%2Bje4VPPFzXdlB0&X-Amz-Signature=5a6f1e7f7f9eb31a4b16a544d274e98ec118cfc92ab8cd6728d9e231fd7f2d59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBJC7JF3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnatTHg2oKMHKeIkiDonVlwXtoQ0Myl6GgjIDCZsGUpAiByGAI%2Bjq8%2Bd%2Fl49ENSndi0WWkpV%2FQh9MQjXIHgW98zNSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9UG1NXdjGi4yyHgQKtwDKIHPTRVlV8RciXeMQJVPrMTtxEDYL2Gk3BzNlhUU3bSnBKcYn5OAS9iq%2Bi6MaJ5KGwHz6V7amSPJBlkyi8OQdyTAovcXB0STv5gmwK2uN5HkzALBdaU9moZp2a1DHffqPFjAIe4Ny%2BX23cd9Y%2BXD9xwQ1hflZUieVn0e9IwOpYiuPs9WfbhjejfF2JZnaEGbV0ilQjbe4Y5z5xIORdtonn%2BMi55bxFXahOaMuz1xujcPIMc6dy4K4mOfpL6ouryapdlrUnN5L8NWrq8D1%2B%2B8m5E17mHoXSub6fcfQJSQFZVudGxE3thUlZZ6uXsC3U5yAvPjt7VMbxoJS3FLgnPKQgKZMWxShZ%2BziAI0lEYaMnylddCta0g2SnvnY%2F7F7e0iVnpqdKVRbdbxsPJyVztylHBwutGdYOh%2BDJq6K9%2Bh7fSOZwXDDGd8aBA1sVAmWlb%2FhMXxjrHSRSE3qNlYGMNFsgp7gbEMiW0x4%2BANrrcBoCY%2FALylC6aX4QBmgDgmrg7dsSx4pMTQ%2FFaJp788xFBOxcfAU%2FiBnXsoxA2w%2BcmdDRqxgqYgNPJ%2FY5b%2BQ4Ek20pPBeRaMOAdZHL%2FcL7pzO8cITH4970vi17rIHGJQ%2FGTO9Pdw97WCnGJISEabCYwl9HgxAY6pgG3oTOB6BomnX9jm%2FyCbhTr31gNEMgnqMZNvzpKdUoWJfXYMKJJVKVKi%2FySTvZKxSN7T53afrfmN3qbnQTjoPDc6WSDxUieFYW6BM4bzNbfMOSJoLFDYh02B02mLC%2BNkRSMJZwXGn7bR9Rrpi79%2BXhcHs%2F8XAxlcpmQazSikycgsU8AePe3gej9w8CkIRjc%2BFxqj%2FHN7m2zxb288M%2Bje4VPPFzXdlB0&X-Amz-Signature=618f66130e290915af4cfab3d5d76d13d586abd65e47f8df8035549245b69f30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBJC7JF3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnatTHg2oKMHKeIkiDonVlwXtoQ0Myl6GgjIDCZsGUpAiByGAI%2Bjq8%2Bd%2Fl49ENSndi0WWkpV%2FQh9MQjXIHgW98zNSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9UG1NXdjGi4yyHgQKtwDKIHPTRVlV8RciXeMQJVPrMTtxEDYL2Gk3BzNlhUU3bSnBKcYn5OAS9iq%2Bi6MaJ5KGwHz6V7amSPJBlkyi8OQdyTAovcXB0STv5gmwK2uN5HkzALBdaU9moZp2a1DHffqPFjAIe4Ny%2BX23cd9Y%2BXD9xwQ1hflZUieVn0e9IwOpYiuPs9WfbhjejfF2JZnaEGbV0ilQjbe4Y5z5xIORdtonn%2BMi55bxFXahOaMuz1xujcPIMc6dy4K4mOfpL6ouryapdlrUnN5L8NWrq8D1%2B%2B8m5E17mHoXSub6fcfQJSQFZVudGxE3thUlZZ6uXsC3U5yAvPjt7VMbxoJS3FLgnPKQgKZMWxShZ%2BziAI0lEYaMnylddCta0g2SnvnY%2F7F7e0iVnpqdKVRbdbxsPJyVztylHBwutGdYOh%2BDJq6K9%2Bh7fSOZwXDDGd8aBA1sVAmWlb%2FhMXxjrHSRSE3qNlYGMNFsgp7gbEMiW0x4%2BANrrcBoCY%2FALylC6aX4QBmgDgmrg7dsSx4pMTQ%2FFaJp788xFBOxcfAU%2FiBnXsoxA2w%2BcmdDRqxgqYgNPJ%2FY5b%2BQ4Ek20pPBeRaMOAdZHL%2FcL7pzO8cITH4970vi17rIHGJQ%2FGTO9Pdw97WCnGJISEabCYwl9HgxAY6pgG3oTOB6BomnX9jm%2FyCbhTr31gNEMgnqMZNvzpKdUoWJfXYMKJJVKVKi%2FySTvZKxSN7T53afrfmN3qbnQTjoPDc6WSDxUieFYW6BM4bzNbfMOSJoLFDYh02B02mLC%2BNkRSMJZwXGn7bR9Rrpi79%2BXhcHs%2F8XAxlcpmQazSikycgsU8AePe3gej9w8CkIRjc%2BFxqj%2FHN7m2zxb288M%2Bje4VPPFzXdlB0&X-Amz-Signature=4e8773bec58b45dd25c7cc96c7085239df19bd37263671955d9ecdf3b96ff57c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBJC7JF3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBnatTHg2oKMHKeIkiDonVlwXtoQ0Myl6GgjIDCZsGUpAiByGAI%2Bjq8%2Bd%2Fl49ENSndi0WWkpV%2FQh9MQjXIHgW98zNSqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9UG1NXdjGi4yyHgQKtwDKIHPTRVlV8RciXeMQJVPrMTtxEDYL2Gk3BzNlhUU3bSnBKcYn5OAS9iq%2Bi6MaJ5KGwHz6V7amSPJBlkyi8OQdyTAovcXB0STv5gmwK2uN5HkzALBdaU9moZp2a1DHffqPFjAIe4Ny%2BX23cd9Y%2BXD9xwQ1hflZUieVn0e9IwOpYiuPs9WfbhjejfF2JZnaEGbV0ilQjbe4Y5z5xIORdtonn%2BMi55bxFXahOaMuz1xujcPIMc6dy4K4mOfpL6ouryapdlrUnN5L8NWrq8D1%2B%2B8m5E17mHoXSub6fcfQJSQFZVudGxE3thUlZZ6uXsC3U5yAvPjt7VMbxoJS3FLgnPKQgKZMWxShZ%2BziAI0lEYaMnylddCta0g2SnvnY%2F7F7e0iVnpqdKVRbdbxsPJyVztylHBwutGdYOh%2BDJq6K9%2Bh7fSOZwXDDGd8aBA1sVAmWlb%2FhMXxjrHSRSE3qNlYGMNFsgp7gbEMiW0x4%2BANrrcBoCY%2FALylC6aX4QBmgDgmrg7dsSx4pMTQ%2FFaJp788xFBOxcfAU%2FiBnXsoxA2w%2BcmdDRqxgqYgNPJ%2FY5b%2BQ4Ek20pPBeRaMOAdZHL%2FcL7pzO8cITH4970vi17rIHGJQ%2FGTO9Pdw97WCnGJISEabCYwl9HgxAY6pgG3oTOB6BomnX9jm%2FyCbhTr31gNEMgnqMZNvzpKdUoWJfXYMKJJVKVKi%2FySTvZKxSN7T53afrfmN3qbnQTjoPDc6WSDxUieFYW6BM4bzNbfMOSJoLFDYh02B02mLC%2BNkRSMJZwXGn7bR9Rrpi79%2BXhcHs%2F8XAxlcpmQazSikycgsU8AePe3gej9w8CkIRjc%2BFxqj%2FHN7m2zxb288M%2Bje4VPPFzXdlB0&X-Amz-Signature=41a612bec55f97c0e6a7c2d817cbbc3d526929e3329e75fb695b54143f3a105a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
