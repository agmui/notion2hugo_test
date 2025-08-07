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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FSBD3J4%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIErkwZ8HAebr%2FwMRbtiUfeV6WJ%2FNoYrHL1xarhmriPruAiBaL%2FBRM%2BoPheISIyiLNS%2Bx%2Fkg6ASAeyIO6r5r0RxahjyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWox8B0VW35tiaRONKtwDSBg0AAzvhhcLjRgVXe0lcGEcu2bAVNLkGPLB%2FrRyGlNS63bnsXFXTYxEfBBvTpPdL6PmE8R4gdpuhJqbgzAAThGKxsVSNPdbpLidkeU43WmwXgYYxlrgXrGBe0zpyCTFls9SLE%2B4IzOlr%2BnRjbdN7qFOmJst%2FnbE5aJFi9G9cID7zhJd7pIjIIqvZLMzwteGHDCOztCEsv3a%2BymMJSQQg3Y61WW31kMOE4YVpynsSPI3wPvVQlcxgSEvAB%2BUNyy%2BvS%2FtkxotqMCBQOfHEHRRbxHdU2E%2F%2BjvaDaEaiQVf5UjA4CtQeF9cNrP%2FCYBOBCkcjb0R6Zc9P3wzxtWLrOPKyPcEfb14OMuzn9g%2BxkiPlaEL8Im46J40%2FJ2QYRCO2hkcSGrYLjVH7D%2B7GxtEqBlRgyHKeQ1P8scc0NlQ1pMVmH%2BJG%2B%2FPlA3TpJ%2BKb8xRNWSftQsuFxAReRt2pwz180eP1%2BVKQWuvCwj2aWRlYG%2Baj9B5nzcrGjpCpWITiJdriaeUraPthkqLaFuqUF4NOhDJ04u6Mjy4gWwsjH0GqNN611mDWn7T7GrYC1MCogx3SAEbPn7Z%2BEkX3jeWvQhhAEoRxMmgwktrTr6on0Q1mX4rzQRe3ugq7wQ7NLQsCJcwvMjQxAY6pgEs9y9%2BuUkCv49VJmzLWCskZ5%2Bg3AT6BV7MM9sKuIkQAIP4TdTlRt%2BYRc%2BJRjND1sYgmztJVYqMAQKjttAGZDpCQkRMevFX4CQVQhwHh0QH4A3josmFfWwIPDY7SeS0S44NKWaWZfAL3vf%2BKOjA5MZ7ZoVx5ywdobLfVQJomsAQagS94Nq%2Fbhg2PvpTkgXVsSZHAW87VSZXHwypCHWEJqldRMNN5hEZ&X-Amz-Signature=77bead9d32d8ff249be90198f73e6abc44bc2ec148b0e3ed82153474d7789945&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KWH3YSS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDWRaJz68YPqEy79UDaC4W4yBTpdHELbZjO8Dq8Bd4A1QIgYaCl6YWWcFpOdvi%2BKGyXbn%2BbAbyxWzOTJnn%2BBZdqOmIqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOheRqbFo0AVz54OeyrcA%2BzGKGIg2bx7PzEZqQUXFCZx3viRr5h7QBUcyXc276FgjAapESQoZhjRiaSdc2%2BkKCVeU0u4jV0hKwKdPfg5eMbPoov9lPek87LopCmppXx9c0T%2F3R%2FOMt%2B0e8EulNNfMug7oI7IEe4MwQII1N%2FURGIHT8lR7I1q2%2FlFMQuZbIE42neF4koysojOgvX%2F3KUsE7hMUUedjgElhDjz92SyIZdd6i6NdYCS3qHC0x4kGsscWqEkWVfwbgF4SPNtCpfd%2FUIdCAqmGx7Vkc4QHUntcJwWBIfHGcO%2Bj0qbHI7hMSv%2F8FZtWgVDQgc%2ByY3i1o1N6q4rGI5yZACDLuuuHUa%2FY%2BB94z2MGhaEL4%2FfYw0IzAfdr0l4KGJ9fdgsy378TnKhYTd%2BudFfFoL49HKaWC3YwCiQTBWAfnXlKcVBzsPQwuj2qxuG3yyBlVhOXauCtsRxuqQac%2BYdqXJgv1MeoWlZMZpSlZAipf9TjRZwZbQgP6QmqXL%2BwFlfA6bHLHpIHyOeVC4CVcSnVr7uOyZLv1s8Hmz75bU8lBFVTxVWBtwr5Xko%2FIedasiLsWPIYLXs6At7Q3S3TXUgbgVxwwF9%2B1fwaPlxHr7DjilmQaOK0N1LumvqdqQeY0u1lRZb4LpwMO2i0MQGOqUBSd5fg0sJNfQVQNh5PySAP7bxWvYZYwVpMT4x4x0dR4jRWxig4rt8l9nLi0C%2Fn9fGF2koNW5si30ND%2BPnQVhE%2FGyWjKnz%2BG%2B%2FqqVkSYqHYM6gOvl3aYtlkI29WTTMNG3iwlX%2BcDPtaYxqcUtvfciG4CanEeqsci5KFEph55yeH8S6UNcSFU56WiRxBigR0CE9D9CSo3SoQSuaxxjHlNkbcqdPW9PQ&X-Amz-Signature=d9605055f72d4efc356ba284fa08f57d824c74d6e1ff3b27eabd3a5969e62dd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KWH3YSS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDWRaJz68YPqEy79UDaC4W4yBTpdHELbZjO8Dq8Bd4A1QIgYaCl6YWWcFpOdvi%2BKGyXbn%2BbAbyxWzOTJnn%2BBZdqOmIqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOheRqbFo0AVz54OeyrcA%2BzGKGIg2bx7PzEZqQUXFCZx3viRr5h7QBUcyXc276FgjAapESQoZhjRiaSdc2%2BkKCVeU0u4jV0hKwKdPfg5eMbPoov9lPek87LopCmppXx9c0T%2F3R%2FOMt%2B0e8EulNNfMug7oI7IEe4MwQII1N%2FURGIHT8lR7I1q2%2FlFMQuZbIE42neF4koysojOgvX%2F3KUsE7hMUUedjgElhDjz92SyIZdd6i6NdYCS3qHC0x4kGsscWqEkWVfwbgF4SPNtCpfd%2FUIdCAqmGx7Vkc4QHUntcJwWBIfHGcO%2Bj0qbHI7hMSv%2F8FZtWgVDQgc%2ByY3i1o1N6q4rGI5yZACDLuuuHUa%2FY%2BB94z2MGhaEL4%2FfYw0IzAfdr0l4KGJ9fdgsy378TnKhYTd%2BudFfFoL49HKaWC3YwCiQTBWAfnXlKcVBzsPQwuj2qxuG3yyBlVhOXauCtsRxuqQac%2BYdqXJgv1MeoWlZMZpSlZAipf9TjRZwZbQgP6QmqXL%2BwFlfA6bHLHpIHyOeVC4CVcSnVr7uOyZLv1s8Hmz75bU8lBFVTxVWBtwr5Xko%2FIedasiLsWPIYLXs6At7Q3S3TXUgbgVxwwF9%2B1fwaPlxHr7DjilmQaOK0N1LumvqdqQeY0u1lRZb4LpwMO2i0MQGOqUBSd5fg0sJNfQVQNh5PySAP7bxWvYZYwVpMT4x4x0dR4jRWxig4rt8l9nLi0C%2Fn9fGF2koNW5si30ND%2BPnQVhE%2FGyWjKnz%2BG%2B%2FqqVkSYqHYM6gOvl3aYtlkI29WTTMNG3iwlX%2BcDPtaYxqcUtvfciG4CanEeqsci5KFEph55yeH8S6UNcSFU56WiRxBigR0CE9D9CSo3SoQSuaxxjHlNkbcqdPW9PQ&X-Amz-Signature=ee73813f86978bff9ab74ef40a37931eb444fa8abcf6379cb1d9b2426b1895f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KWH3YSS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDWRaJz68YPqEy79UDaC4W4yBTpdHELbZjO8Dq8Bd4A1QIgYaCl6YWWcFpOdvi%2BKGyXbn%2BbAbyxWzOTJnn%2BBZdqOmIqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOheRqbFo0AVz54OeyrcA%2BzGKGIg2bx7PzEZqQUXFCZx3viRr5h7QBUcyXc276FgjAapESQoZhjRiaSdc2%2BkKCVeU0u4jV0hKwKdPfg5eMbPoov9lPek87LopCmppXx9c0T%2F3R%2FOMt%2B0e8EulNNfMug7oI7IEe4MwQII1N%2FURGIHT8lR7I1q2%2FlFMQuZbIE42neF4koysojOgvX%2F3KUsE7hMUUedjgElhDjz92SyIZdd6i6NdYCS3qHC0x4kGsscWqEkWVfwbgF4SPNtCpfd%2FUIdCAqmGx7Vkc4QHUntcJwWBIfHGcO%2Bj0qbHI7hMSv%2F8FZtWgVDQgc%2ByY3i1o1N6q4rGI5yZACDLuuuHUa%2FY%2BB94z2MGhaEL4%2FfYw0IzAfdr0l4KGJ9fdgsy378TnKhYTd%2BudFfFoL49HKaWC3YwCiQTBWAfnXlKcVBzsPQwuj2qxuG3yyBlVhOXauCtsRxuqQac%2BYdqXJgv1MeoWlZMZpSlZAipf9TjRZwZbQgP6QmqXL%2BwFlfA6bHLHpIHyOeVC4CVcSnVr7uOyZLv1s8Hmz75bU8lBFVTxVWBtwr5Xko%2FIedasiLsWPIYLXs6At7Q3S3TXUgbgVxwwF9%2B1fwaPlxHr7DjilmQaOK0N1LumvqdqQeY0u1lRZb4LpwMO2i0MQGOqUBSd5fg0sJNfQVQNh5PySAP7bxWvYZYwVpMT4x4x0dR4jRWxig4rt8l9nLi0C%2Fn9fGF2koNW5si30ND%2BPnQVhE%2FGyWjKnz%2BG%2B%2FqqVkSYqHYM6gOvl3aYtlkI29WTTMNG3iwlX%2BcDPtaYxqcUtvfciG4CanEeqsci5KFEph55yeH8S6UNcSFU56WiRxBigR0CE9D9CSo3SoQSuaxxjHlNkbcqdPW9PQ&X-Amz-Signature=dd00e37a2ba88a671d5395072f20793ed19e4ab91e50dafc929e3ace8148c037&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KWH3YSS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDWRaJz68YPqEy79UDaC4W4yBTpdHELbZjO8Dq8Bd4A1QIgYaCl6YWWcFpOdvi%2BKGyXbn%2BbAbyxWzOTJnn%2BBZdqOmIqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOheRqbFo0AVz54OeyrcA%2BzGKGIg2bx7PzEZqQUXFCZx3viRr5h7QBUcyXc276FgjAapESQoZhjRiaSdc2%2BkKCVeU0u4jV0hKwKdPfg5eMbPoov9lPek87LopCmppXx9c0T%2F3R%2FOMt%2B0e8EulNNfMug7oI7IEe4MwQII1N%2FURGIHT8lR7I1q2%2FlFMQuZbIE42neF4koysojOgvX%2F3KUsE7hMUUedjgElhDjz92SyIZdd6i6NdYCS3qHC0x4kGsscWqEkWVfwbgF4SPNtCpfd%2FUIdCAqmGx7Vkc4QHUntcJwWBIfHGcO%2Bj0qbHI7hMSv%2F8FZtWgVDQgc%2ByY3i1o1N6q4rGI5yZACDLuuuHUa%2FY%2BB94z2MGhaEL4%2FfYw0IzAfdr0l4KGJ9fdgsy378TnKhYTd%2BudFfFoL49HKaWC3YwCiQTBWAfnXlKcVBzsPQwuj2qxuG3yyBlVhOXauCtsRxuqQac%2BYdqXJgv1MeoWlZMZpSlZAipf9TjRZwZbQgP6QmqXL%2BwFlfA6bHLHpIHyOeVC4CVcSnVr7uOyZLv1s8Hmz75bU8lBFVTxVWBtwr5Xko%2FIedasiLsWPIYLXs6At7Q3S3TXUgbgVxwwF9%2B1fwaPlxHr7DjilmQaOK0N1LumvqdqQeY0u1lRZb4LpwMO2i0MQGOqUBSd5fg0sJNfQVQNh5PySAP7bxWvYZYwVpMT4x4x0dR4jRWxig4rt8l9nLi0C%2Fn9fGF2koNW5si30ND%2BPnQVhE%2FGyWjKnz%2BG%2B%2FqqVkSYqHYM6gOvl3aYtlkI29WTTMNG3iwlX%2BcDPtaYxqcUtvfciG4CanEeqsci5KFEph55yeH8S6UNcSFU56WiRxBigR0CE9D9CSo3SoQSuaxxjHlNkbcqdPW9PQ&X-Amz-Signature=4d924c7fd0ec8488dd13efb41e9d9afd5c304925450259d5a679a680fb3649fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KWH3YSS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDWRaJz68YPqEy79UDaC4W4yBTpdHELbZjO8Dq8Bd4A1QIgYaCl6YWWcFpOdvi%2BKGyXbn%2BbAbyxWzOTJnn%2BBZdqOmIqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOheRqbFo0AVz54OeyrcA%2BzGKGIg2bx7PzEZqQUXFCZx3viRr5h7QBUcyXc276FgjAapESQoZhjRiaSdc2%2BkKCVeU0u4jV0hKwKdPfg5eMbPoov9lPek87LopCmppXx9c0T%2F3R%2FOMt%2B0e8EulNNfMug7oI7IEe4MwQII1N%2FURGIHT8lR7I1q2%2FlFMQuZbIE42neF4koysojOgvX%2F3KUsE7hMUUedjgElhDjz92SyIZdd6i6NdYCS3qHC0x4kGsscWqEkWVfwbgF4SPNtCpfd%2FUIdCAqmGx7Vkc4QHUntcJwWBIfHGcO%2Bj0qbHI7hMSv%2F8FZtWgVDQgc%2ByY3i1o1N6q4rGI5yZACDLuuuHUa%2FY%2BB94z2MGhaEL4%2FfYw0IzAfdr0l4KGJ9fdgsy378TnKhYTd%2BudFfFoL49HKaWC3YwCiQTBWAfnXlKcVBzsPQwuj2qxuG3yyBlVhOXauCtsRxuqQac%2BYdqXJgv1MeoWlZMZpSlZAipf9TjRZwZbQgP6QmqXL%2BwFlfA6bHLHpIHyOeVC4CVcSnVr7uOyZLv1s8Hmz75bU8lBFVTxVWBtwr5Xko%2FIedasiLsWPIYLXs6At7Q3S3TXUgbgVxwwF9%2B1fwaPlxHr7DjilmQaOK0N1LumvqdqQeY0u1lRZb4LpwMO2i0MQGOqUBSd5fg0sJNfQVQNh5PySAP7bxWvYZYwVpMT4x4x0dR4jRWxig4rt8l9nLi0C%2Fn9fGF2koNW5si30ND%2BPnQVhE%2FGyWjKnz%2BG%2B%2FqqVkSYqHYM6gOvl3aYtlkI29WTTMNG3iwlX%2BcDPtaYxqcUtvfciG4CanEeqsci5KFEph55yeH8S6UNcSFU56WiRxBigR0CE9D9CSo3SoQSuaxxjHlNkbcqdPW9PQ&X-Amz-Signature=d8a6886a5d9515896f23e734040ea3e1c57bd5d799341757d77465215e250493&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KWH3YSS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDWRaJz68YPqEy79UDaC4W4yBTpdHELbZjO8Dq8Bd4A1QIgYaCl6YWWcFpOdvi%2BKGyXbn%2BbAbyxWzOTJnn%2BBZdqOmIqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOheRqbFo0AVz54OeyrcA%2BzGKGIg2bx7PzEZqQUXFCZx3viRr5h7QBUcyXc276FgjAapESQoZhjRiaSdc2%2BkKCVeU0u4jV0hKwKdPfg5eMbPoov9lPek87LopCmppXx9c0T%2F3R%2FOMt%2B0e8EulNNfMug7oI7IEe4MwQII1N%2FURGIHT8lR7I1q2%2FlFMQuZbIE42neF4koysojOgvX%2F3KUsE7hMUUedjgElhDjz92SyIZdd6i6NdYCS3qHC0x4kGsscWqEkWVfwbgF4SPNtCpfd%2FUIdCAqmGx7Vkc4QHUntcJwWBIfHGcO%2Bj0qbHI7hMSv%2F8FZtWgVDQgc%2ByY3i1o1N6q4rGI5yZACDLuuuHUa%2FY%2BB94z2MGhaEL4%2FfYw0IzAfdr0l4KGJ9fdgsy378TnKhYTd%2BudFfFoL49HKaWC3YwCiQTBWAfnXlKcVBzsPQwuj2qxuG3yyBlVhOXauCtsRxuqQac%2BYdqXJgv1MeoWlZMZpSlZAipf9TjRZwZbQgP6QmqXL%2BwFlfA6bHLHpIHyOeVC4CVcSnVr7uOyZLv1s8Hmz75bU8lBFVTxVWBtwr5Xko%2FIedasiLsWPIYLXs6At7Q3S3TXUgbgVxwwF9%2B1fwaPlxHr7DjilmQaOK0N1LumvqdqQeY0u1lRZb4LpwMO2i0MQGOqUBSd5fg0sJNfQVQNh5PySAP7bxWvYZYwVpMT4x4x0dR4jRWxig4rt8l9nLi0C%2Fn9fGF2koNW5si30ND%2BPnQVhE%2FGyWjKnz%2BG%2B%2FqqVkSYqHYM6gOvl3aYtlkI29WTTMNG3iwlX%2BcDPtaYxqcUtvfciG4CanEeqsci5KFEph55yeH8S6UNcSFU56WiRxBigR0CE9D9CSo3SoQSuaxxjHlNkbcqdPW9PQ&X-Amz-Signature=33214f41c017eaa394ba493d4866be52ac16d1919f017f964916b43b876a6d72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KWH3YSS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDWRaJz68YPqEy79UDaC4W4yBTpdHELbZjO8Dq8Bd4A1QIgYaCl6YWWcFpOdvi%2BKGyXbn%2BbAbyxWzOTJnn%2BBZdqOmIqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOheRqbFo0AVz54OeyrcA%2BzGKGIg2bx7PzEZqQUXFCZx3viRr5h7QBUcyXc276FgjAapESQoZhjRiaSdc2%2BkKCVeU0u4jV0hKwKdPfg5eMbPoov9lPek87LopCmppXx9c0T%2F3R%2FOMt%2B0e8EulNNfMug7oI7IEe4MwQII1N%2FURGIHT8lR7I1q2%2FlFMQuZbIE42neF4koysojOgvX%2F3KUsE7hMUUedjgElhDjz92SyIZdd6i6NdYCS3qHC0x4kGsscWqEkWVfwbgF4SPNtCpfd%2FUIdCAqmGx7Vkc4QHUntcJwWBIfHGcO%2Bj0qbHI7hMSv%2F8FZtWgVDQgc%2ByY3i1o1N6q4rGI5yZACDLuuuHUa%2FY%2BB94z2MGhaEL4%2FfYw0IzAfdr0l4KGJ9fdgsy378TnKhYTd%2BudFfFoL49HKaWC3YwCiQTBWAfnXlKcVBzsPQwuj2qxuG3yyBlVhOXauCtsRxuqQac%2BYdqXJgv1MeoWlZMZpSlZAipf9TjRZwZbQgP6QmqXL%2BwFlfA6bHLHpIHyOeVC4CVcSnVr7uOyZLv1s8Hmz75bU8lBFVTxVWBtwr5Xko%2FIedasiLsWPIYLXs6At7Q3S3TXUgbgVxwwF9%2B1fwaPlxHr7DjilmQaOK0N1LumvqdqQeY0u1lRZb4LpwMO2i0MQGOqUBSd5fg0sJNfQVQNh5PySAP7bxWvYZYwVpMT4x4x0dR4jRWxig4rt8l9nLi0C%2Fn9fGF2koNW5si30ND%2BPnQVhE%2FGyWjKnz%2BG%2B%2FqqVkSYqHYM6gOvl3aYtlkI29WTTMNG3iwlX%2BcDPtaYxqcUtvfciG4CanEeqsci5KFEph55yeH8S6UNcSFU56WiRxBigR0CE9D9CSo3SoQSuaxxjHlNkbcqdPW9PQ&X-Amz-Signature=4edabe46ec82984dc688c24284f28eb139287da1b68617d1cd1553bc8fc5bba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KWH3YSS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDWRaJz68YPqEy79UDaC4W4yBTpdHELbZjO8Dq8Bd4A1QIgYaCl6YWWcFpOdvi%2BKGyXbn%2BbAbyxWzOTJnn%2BBZdqOmIqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOheRqbFo0AVz54OeyrcA%2BzGKGIg2bx7PzEZqQUXFCZx3viRr5h7QBUcyXc276FgjAapESQoZhjRiaSdc2%2BkKCVeU0u4jV0hKwKdPfg5eMbPoov9lPek87LopCmppXx9c0T%2F3R%2FOMt%2B0e8EulNNfMug7oI7IEe4MwQII1N%2FURGIHT8lR7I1q2%2FlFMQuZbIE42neF4koysojOgvX%2F3KUsE7hMUUedjgElhDjz92SyIZdd6i6NdYCS3qHC0x4kGsscWqEkWVfwbgF4SPNtCpfd%2FUIdCAqmGx7Vkc4QHUntcJwWBIfHGcO%2Bj0qbHI7hMSv%2F8FZtWgVDQgc%2ByY3i1o1N6q4rGI5yZACDLuuuHUa%2FY%2BB94z2MGhaEL4%2FfYw0IzAfdr0l4KGJ9fdgsy378TnKhYTd%2BudFfFoL49HKaWC3YwCiQTBWAfnXlKcVBzsPQwuj2qxuG3yyBlVhOXauCtsRxuqQac%2BYdqXJgv1MeoWlZMZpSlZAipf9TjRZwZbQgP6QmqXL%2BwFlfA6bHLHpIHyOeVC4CVcSnVr7uOyZLv1s8Hmz75bU8lBFVTxVWBtwr5Xko%2FIedasiLsWPIYLXs6At7Q3S3TXUgbgVxwwF9%2B1fwaPlxHr7DjilmQaOK0N1LumvqdqQeY0u1lRZb4LpwMO2i0MQGOqUBSd5fg0sJNfQVQNh5PySAP7bxWvYZYwVpMT4x4x0dR4jRWxig4rt8l9nLi0C%2Fn9fGF2koNW5si30ND%2BPnQVhE%2FGyWjKnz%2BG%2B%2FqqVkSYqHYM6gOvl3aYtlkI29WTTMNG3iwlX%2BcDPtaYxqcUtvfciG4CanEeqsci5KFEph55yeH8S6UNcSFU56WiRxBigR0CE9D9CSo3SoQSuaxxjHlNkbcqdPW9PQ&X-Amz-Signature=a00ce46600ee0851edfe9a244d5c1a4a0d6a03f64d04a519e9f7966c1b3c076e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KWH3YSS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDWRaJz68YPqEy79UDaC4W4yBTpdHELbZjO8Dq8Bd4A1QIgYaCl6YWWcFpOdvi%2BKGyXbn%2BbAbyxWzOTJnn%2BBZdqOmIqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOheRqbFo0AVz54OeyrcA%2BzGKGIg2bx7PzEZqQUXFCZx3viRr5h7QBUcyXc276FgjAapESQoZhjRiaSdc2%2BkKCVeU0u4jV0hKwKdPfg5eMbPoov9lPek87LopCmppXx9c0T%2F3R%2FOMt%2B0e8EulNNfMug7oI7IEe4MwQII1N%2FURGIHT8lR7I1q2%2FlFMQuZbIE42neF4koysojOgvX%2F3KUsE7hMUUedjgElhDjz92SyIZdd6i6NdYCS3qHC0x4kGsscWqEkWVfwbgF4SPNtCpfd%2FUIdCAqmGx7Vkc4QHUntcJwWBIfHGcO%2Bj0qbHI7hMSv%2F8FZtWgVDQgc%2ByY3i1o1N6q4rGI5yZACDLuuuHUa%2FY%2BB94z2MGhaEL4%2FfYw0IzAfdr0l4KGJ9fdgsy378TnKhYTd%2BudFfFoL49HKaWC3YwCiQTBWAfnXlKcVBzsPQwuj2qxuG3yyBlVhOXauCtsRxuqQac%2BYdqXJgv1MeoWlZMZpSlZAipf9TjRZwZbQgP6QmqXL%2BwFlfA6bHLHpIHyOeVC4CVcSnVr7uOyZLv1s8Hmz75bU8lBFVTxVWBtwr5Xko%2FIedasiLsWPIYLXs6At7Q3S3TXUgbgVxwwF9%2B1fwaPlxHr7DjilmQaOK0N1LumvqdqQeY0u1lRZb4LpwMO2i0MQGOqUBSd5fg0sJNfQVQNh5PySAP7bxWvYZYwVpMT4x4x0dR4jRWxig4rt8l9nLi0C%2Fn9fGF2koNW5si30ND%2BPnQVhE%2FGyWjKnz%2BG%2B%2FqqVkSYqHYM6gOvl3aYtlkI29WTTMNG3iwlX%2BcDPtaYxqcUtvfciG4CanEeqsci5KFEph55yeH8S6UNcSFU56WiRxBigR0CE9D9CSo3SoQSuaxxjHlNkbcqdPW9PQ&X-Amz-Signature=e11c20558cb447c1c98c678d66212348a63f77ddd0f87f0dfc3d31b89d87b383&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KWH3YSS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T040038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDWRaJz68YPqEy79UDaC4W4yBTpdHELbZjO8Dq8Bd4A1QIgYaCl6YWWcFpOdvi%2BKGyXbn%2BbAbyxWzOTJnn%2BBZdqOmIqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOheRqbFo0AVz54OeyrcA%2BzGKGIg2bx7PzEZqQUXFCZx3viRr5h7QBUcyXc276FgjAapESQoZhjRiaSdc2%2BkKCVeU0u4jV0hKwKdPfg5eMbPoov9lPek87LopCmppXx9c0T%2F3R%2FOMt%2B0e8EulNNfMug7oI7IEe4MwQII1N%2FURGIHT8lR7I1q2%2FlFMQuZbIE42neF4koysojOgvX%2F3KUsE7hMUUedjgElhDjz92SyIZdd6i6NdYCS3qHC0x4kGsscWqEkWVfwbgF4SPNtCpfd%2FUIdCAqmGx7Vkc4QHUntcJwWBIfHGcO%2Bj0qbHI7hMSv%2F8FZtWgVDQgc%2ByY3i1o1N6q4rGI5yZACDLuuuHUa%2FY%2BB94z2MGhaEL4%2FfYw0IzAfdr0l4KGJ9fdgsy378TnKhYTd%2BudFfFoL49HKaWC3YwCiQTBWAfnXlKcVBzsPQwuj2qxuG3yyBlVhOXauCtsRxuqQac%2BYdqXJgv1MeoWlZMZpSlZAipf9TjRZwZbQgP6QmqXL%2BwFlfA6bHLHpIHyOeVC4CVcSnVr7uOyZLv1s8Hmz75bU8lBFVTxVWBtwr5Xko%2FIedasiLsWPIYLXs6At7Q3S3TXUgbgVxwwF9%2B1fwaPlxHr7DjilmQaOK0N1LumvqdqQeY0u1lRZb4LpwMO2i0MQGOqUBSd5fg0sJNfQVQNh5PySAP7bxWvYZYwVpMT4x4x0dR4jRWxig4rt8l9nLi0C%2Fn9fGF2koNW5si30ND%2BPnQVhE%2FGyWjKnz%2BG%2B%2FqqVkSYqHYM6gOvl3aYtlkI29WTTMNG3iwlX%2BcDPtaYxqcUtvfciG4CanEeqsci5KFEph55yeH8S6UNcSFU56WiRxBigR0CE9D9CSo3SoQSuaxxjHlNkbcqdPW9PQ&X-Amz-Signature=4d924c7fd0ec8488dd13efb41e9d9afd5c304925450259d5a679a680fb3649fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
