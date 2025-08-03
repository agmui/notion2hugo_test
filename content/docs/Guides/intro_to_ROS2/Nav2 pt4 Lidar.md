---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-08-02T10:06:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-08-02T10:06:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZKOVAGY%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2y%2BV2Jp4TmN46yVfWX0wOxdOoMqaskYjxstTM%2FyzedgIgbiJah6VKz5RkRdVyqo66ji%2F%2FdpKeDj8vnplsdpthXkYq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDIQzidVha5y4mTJLqCrcA4o3utWCXXNYsNU2lpCZulegrFFCdx1ftcq0oUnJwmD0f%2FlV%2BPnFGiSFzs9KzgEu%2BQHEj%2BRdS4mg4mgAkoZikrVFQ9SYdgE%2BXN0LL5grB32%2BMcLJokazMdCg5vcWYy%2BoyiaSRtPLN1vYrm0WIm1ZBSPE2UyHKcxLBB13LJu6L9b%2BOuy%2BJXwfqV5WZM%2BD3fE4wl1gVzk%2BkD2EYS15No3vzQmj8h1c2L8rSqwHnsuFpfSCh9B2K0Rw0UbWbroyxIjWRtzQ4ILOr%2B06Tmr1Fbe45sUpgX8zNQ64cQIDfhJ2OPOk7FbovltFKIhntWFxmIBNynLxW8kBkHyi2E5tBNmnFaQd17eK1wNpFopR1jVvXOEmUv2ylax%2FEmHsQQuELUG5mcjfv4UNLQdtjEK%2Bc0jzE2rO%2BfrB5yGFwk2b03anAG927L1YLZrAQVzRBKRfsR%2BySY8sJQdxkrSnhSI4iBGWVKa7R5Wv%2B6wQe%2BeH3WtyJUaWWIknfMcIjX66IqE4ZQhfaRkf4VIlgt64p6stZr8Gzkyu4s%2FsgeUsPpKDFVc1DU%2FtuK3IdZgV3qRTXbqVhDJ12PTIRZ84wAIEKu%2F27XYsHBpFH5MYt4oU%2FRP%2F3Ji7v5WmBMnGcuDOqSOtsOd9MNHSvcQGOqUBbvEuZ1X6yYHQNaZlBYo2avuUwdV15xVONDzmf7wj%2FEEwzQyOhKM%2Bvx7aHoxWkfkZnsL5zckA7Nz9x2pBgw3Yie4RK%2BCOcwkfPdvjbb1QWeOmRpVtkFnmXsPAmz9WwkG9l1RPkjm8nQyIYXbe%2BYmNDhH2lm%2F3%2B9tM8K9mNXKX5cHfBRJ7%2F%2FfrHRJsrZ0ZmAo5p564WDr%2BcTJV2fIpU7zLPxszWb2L&X-Amz-Signature=65be77378eeb5fbc9ddbe9f2fe92fe955bb38d91c37bd6759eecec5af5d55cce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NZUE3CF%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCk2P2c0iDucn5YkrvnVYJGMAqjqFuXhJNu2VX0ywG6DgIhAJOgv9DTOdpF9hFhhOMLe7iBLBqVD9BG8Ufg2fcp%2F04JKv8DCC8QABoMNjM3NDIzMTgzODA1Igwk9qS9UbDPZptegWEq3AMvthgHgQ2a0UHr19MFJO%2Fd0oAc3mopK0ZpBIR1NSHlMRQ%2Fa6rRUTE6%2Bep94RfFReKZgrx%2B%2B3xCUcOxntuXNq7atFnEo1GGtduhSYQtxvbLAO3gn%2BcBstob34qidMGjHzDzZLKbP4qM83yj%2F%2B0GU0eIhXiLtV3N6%2FY2lBsDfNbq47PMhpiMFgolG9BihcPrY2taEBTp1CJu6oHx27ZFKqHvXc9nNUDM0VjRthh7dWoGlJ4Dh8hwOQikPb3TxiAq82AV5vQE3gDK7qvyR1PETuZH8Pam%2BD%2FgvPHFD0k3CGefFWj5vKyj4DBpiNaR5PS4HyX%2BSWl4RwuZTAAGhBj5AXJiEWZREhSio%2FAGFBDpVG5w5JKrhECbaQFzXMwONVRjegfxR7JVUJg5XuPO%2FX%2BlLCGK00LT7r3THMYrdoSoHs4cxuEE251vrS9uuZpR8PMa96A8TGdshvOSVuknQyjMgu8hOLfftEIQhGcGYlLTz%2Bq3TdMAZ%2Fbhy%2BrG7vg25pn1E01DMwFOe895pEpv4d6wChC6kIGfr5OPMDO8GAPSLGfKpHakOi5h00DFOafz7jtTvQzqFtcSrNfdBvBwvavHSQeaQ%2F6gHhWrYMWG7Uwo69D0rI5tIoJEmUET0Fz8eTDb0r3EBjqkAavN1CMp0%2FKE81niiXYSlH2SzcWBiDuOaptizMlNws2y8XrKoxLRfUUxmsnTvo2yF1PJKaJVejSF989GhOtjB4YAH8kBgf0iNdvaqRSTk%2FLYu%2FuIkJ%2Fvo%2FAN2vtyCzzOXZT9mf2qpmMFTo0kGhdWrItJK6%2BK8YIE6yBWVRQbwU74Nh2ccK91m%2FWZjAjQxHcB2CxXrTMB4hMgqnA1NxUvycoRGYC%2F&X-Amz-Signature=5cdfb809907da046ed0c8fb6d6b0b35228ac27f0f680d49e8874497807d8634f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NZUE3CF%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCk2P2c0iDucn5YkrvnVYJGMAqjqFuXhJNu2VX0ywG6DgIhAJOgv9DTOdpF9hFhhOMLe7iBLBqVD9BG8Ufg2fcp%2F04JKv8DCC8QABoMNjM3NDIzMTgzODA1Igwk9qS9UbDPZptegWEq3AMvthgHgQ2a0UHr19MFJO%2Fd0oAc3mopK0ZpBIR1NSHlMRQ%2Fa6rRUTE6%2Bep94RfFReKZgrx%2B%2B3xCUcOxntuXNq7atFnEo1GGtduhSYQtxvbLAO3gn%2BcBstob34qidMGjHzDzZLKbP4qM83yj%2F%2B0GU0eIhXiLtV3N6%2FY2lBsDfNbq47PMhpiMFgolG9BihcPrY2taEBTp1CJu6oHx27ZFKqHvXc9nNUDM0VjRthh7dWoGlJ4Dh8hwOQikPb3TxiAq82AV5vQE3gDK7qvyR1PETuZH8Pam%2BD%2FgvPHFD0k3CGefFWj5vKyj4DBpiNaR5PS4HyX%2BSWl4RwuZTAAGhBj5AXJiEWZREhSio%2FAGFBDpVG5w5JKrhECbaQFzXMwONVRjegfxR7JVUJg5XuPO%2FX%2BlLCGK00LT7r3THMYrdoSoHs4cxuEE251vrS9uuZpR8PMa96A8TGdshvOSVuknQyjMgu8hOLfftEIQhGcGYlLTz%2Bq3TdMAZ%2Fbhy%2BrG7vg25pn1E01DMwFOe895pEpv4d6wChC6kIGfr5OPMDO8GAPSLGfKpHakOi5h00DFOafz7jtTvQzqFtcSrNfdBvBwvavHSQeaQ%2F6gHhWrYMWG7Uwo69D0rI5tIoJEmUET0Fz8eTDb0r3EBjqkAavN1CMp0%2FKE81niiXYSlH2SzcWBiDuOaptizMlNws2y8XrKoxLRfUUxmsnTvo2yF1PJKaJVejSF989GhOtjB4YAH8kBgf0iNdvaqRSTk%2FLYu%2FuIkJ%2Fvo%2FAN2vtyCzzOXZT9mf2qpmMFTo0kGhdWrItJK6%2BK8YIE6yBWVRQbwU74Nh2ccK91m%2FWZjAjQxHcB2CxXrTMB4hMgqnA1NxUvycoRGYC%2F&X-Amz-Signature=126db6b24d429222b815444a5bdb13fa5777b52d5be39e61c116f77946193cec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NZUE3CF%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCk2P2c0iDucn5YkrvnVYJGMAqjqFuXhJNu2VX0ywG6DgIhAJOgv9DTOdpF9hFhhOMLe7iBLBqVD9BG8Ufg2fcp%2F04JKv8DCC8QABoMNjM3NDIzMTgzODA1Igwk9qS9UbDPZptegWEq3AMvthgHgQ2a0UHr19MFJO%2Fd0oAc3mopK0ZpBIR1NSHlMRQ%2Fa6rRUTE6%2Bep94RfFReKZgrx%2B%2B3xCUcOxntuXNq7atFnEo1GGtduhSYQtxvbLAO3gn%2BcBstob34qidMGjHzDzZLKbP4qM83yj%2F%2B0GU0eIhXiLtV3N6%2FY2lBsDfNbq47PMhpiMFgolG9BihcPrY2taEBTp1CJu6oHx27ZFKqHvXc9nNUDM0VjRthh7dWoGlJ4Dh8hwOQikPb3TxiAq82AV5vQE3gDK7qvyR1PETuZH8Pam%2BD%2FgvPHFD0k3CGefFWj5vKyj4DBpiNaR5PS4HyX%2BSWl4RwuZTAAGhBj5AXJiEWZREhSio%2FAGFBDpVG5w5JKrhECbaQFzXMwONVRjegfxR7JVUJg5XuPO%2FX%2BlLCGK00LT7r3THMYrdoSoHs4cxuEE251vrS9uuZpR8PMa96A8TGdshvOSVuknQyjMgu8hOLfftEIQhGcGYlLTz%2Bq3TdMAZ%2Fbhy%2BrG7vg25pn1E01DMwFOe895pEpv4d6wChC6kIGfr5OPMDO8GAPSLGfKpHakOi5h00DFOafz7jtTvQzqFtcSrNfdBvBwvavHSQeaQ%2F6gHhWrYMWG7Uwo69D0rI5tIoJEmUET0Fz8eTDb0r3EBjqkAavN1CMp0%2FKE81niiXYSlH2SzcWBiDuOaptizMlNws2y8XrKoxLRfUUxmsnTvo2yF1PJKaJVejSF989GhOtjB4YAH8kBgf0iNdvaqRSTk%2FLYu%2FuIkJ%2Fvo%2FAN2vtyCzzOXZT9mf2qpmMFTo0kGhdWrItJK6%2BK8YIE6yBWVRQbwU74Nh2ccK91m%2FWZjAjQxHcB2CxXrTMB4hMgqnA1NxUvycoRGYC%2F&X-Amz-Signature=f432aa3c9ff346d0cf59b92869118e261ee8294208dafe1917d8879c60d38515&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NZUE3CF%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCk2P2c0iDucn5YkrvnVYJGMAqjqFuXhJNu2VX0ywG6DgIhAJOgv9DTOdpF9hFhhOMLe7iBLBqVD9BG8Ufg2fcp%2F04JKv8DCC8QABoMNjM3NDIzMTgzODA1Igwk9qS9UbDPZptegWEq3AMvthgHgQ2a0UHr19MFJO%2Fd0oAc3mopK0ZpBIR1NSHlMRQ%2Fa6rRUTE6%2Bep94RfFReKZgrx%2B%2B3xCUcOxntuXNq7atFnEo1GGtduhSYQtxvbLAO3gn%2BcBstob34qidMGjHzDzZLKbP4qM83yj%2F%2B0GU0eIhXiLtV3N6%2FY2lBsDfNbq47PMhpiMFgolG9BihcPrY2taEBTp1CJu6oHx27ZFKqHvXc9nNUDM0VjRthh7dWoGlJ4Dh8hwOQikPb3TxiAq82AV5vQE3gDK7qvyR1PETuZH8Pam%2BD%2FgvPHFD0k3CGefFWj5vKyj4DBpiNaR5PS4HyX%2BSWl4RwuZTAAGhBj5AXJiEWZREhSio%2FAGFBDpVG5w5JKrhECbaQFzXMwONVRjegfxR7JVUJg5XuPO%2FX%2BlLCGK00LT7r3THMYrdoSoHs4cxuEE251vrS9uuZpR8PMa96A8TGdshvOSVuknQyjMgu8hOLfftEIQhGcGYlLTz%2Bq3TdMAZ%2Fbhy%2BrG7vg25pn1E01DMwFOe895pEpv4d6wChC6kIGfr5OPMDO8GAPSLGfKpHakOi5h00DFOafz7jtTvQzqFtcSrNfdBvBwvavHSQeaQ%2F6gHhWrYMWG7Uwo69D0rI5tIoJEmUET0Fz8eTDb0r3EBjqkAavN1CMp0%2FKE81niiXYSlH2SzcWBiDuOaptizMlNws2y8XrKoxLRfUUxmsnTvo2yF1PJKaJVejSF989GhOtjB4YAH8kBgf0iNdvaqRSTk%2FLYu%2FuIkJ%2Fvo%2FAN2vtyCzzOXZT9mf2qpmMFTo0kGhdWrItJK6%2BK8YIE6yBWVRQbwU74Nh2ccK91m%2FWZjAjQxHcB2CxXrTMB4hMgqnA1NxUvycoRGYC%2F&X-Amz-Signature=99c222759eb497321761fd4804454ce1bf65f15cc8018d06c8141d3989b0ce7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NZUE3CF%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCk2P2c0iDucn5YkrvnVYJGMAqjqFuXhJNu2VX0ywG6DgIhAJOgv9DTOdpF9hFhhOMLe7iBLBqVD9BG8Ufg2fcp%2F04JKv8DCC8QABoMNjM3NDIzMTgzODA1Igwk9qS9UbDPZptegWEq3AMvthgHgQ2a0UHr19MFJO%2Fd0oAc3mopK0ZpBIR1NSHlMRQ%2Fa6rRUTE6%2Bep94RfFReKZgrx%2B%2B3xCUcOxntuXNq7atFnEo1GGtduhSYQtxvbLAO3gn%2BcBstob34qidMGjHzDzZLKbP4qM83yj%2F%2B0GU0eIhXiLtV3N6%2FY2lBsDfNbq47PMhpiMFgolG9BihcPrY2taEBTp1CJu6oHx27ZFKqHvXc9nNUDM0VjRthh7dWoGlJ4Dh8hwOQikPb3TxiAq82AV5vQE3gDK7qvyR1PETuZH8Pam%2BD%2FgvPHFD0k3CGefFWj5vKyj4DBpiNaR5PS4HyX%2BSWl4RwuZTAAGhBj5AXJiEWZREhSio%2FAGFBDpVG5w5JKrhECbaQFzXMwONVRjegfxR7JVUJg5XuPO%2FX%2BlLCGK00LT7r3THMYrdoSoHs4cxuEE251vrS9uuZpR8PMa96A8TGdshvOSVuknQyjMgu8hOLfftEIQhGcGYlLTz%2Bq3TdMAZ%2Fbhy%2BrG7vg25pn1E01DMwFOe895pEpv4d6wChC6kIGfr5OPMDO8GAPSLGfKpHakOi5h00DFOafz7jtTvQzqFtcSrNfdBvBwvavHSQeaQ%2F6gHhWrYMWG7Uwo69D0rI5tIoJEmUET0Fz8eTDb0r3EBjqkAavN1CMp0%2FKE81niiXYSlH2SzcWBiDuOaptizMlNws2y8XrKoxLRfUUxmsnTvo2yF1PJKaJVejSF989GhOtjB4YAH8kBgf0iNdvaqRSTk%2FLYu%2FuIkJ%2Fvo%2FAN2vtyCzzOXZT9mf2qpmMFTo0kGhdWrItJK6%2BK8YIE6yBWVRQbwU74Nh2ccK91m%2FWZjAjQxHcB2CxXrTMB4hMgqnA1NxUvycoRGYC%2F&X-Amz-Signature=96eae5641b740dd2f083cb72e00d54f648eb00beb10b9c4b603b9f6903cca080&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NZUE3CF%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCk2P2c0iDucn5YkrvnVYJGMAqjqFuXhJNu2VX0ywG6DgIhAJOgv9DTOdpF9hFhhOMLe7iBLBqVD9BG8Ufg2fcp%2F04JKv8DCC8QABoMNjM3NDIzMTgzODA1Igwk9qS9UbDPZptegWEq3AMvthgHgQ2a0UHr19MFJO%2Fd0oAc3mopK0ZpBIR1NSHlMRQ%2Fa6rRUTE6%2Bep94RfFReKZgrx%2B%2B3xCUcOxntuXNq7atFnEo1GGtduhSYQtxvbLAO3gn%2BcBstob34qidMGjHzDzZLKbP4qM83yj%2F%2B0GU0eIhXiLtV3N6%2FY2lBsDfNbq47PMhpiMFgolG9BihcPrY2taEBTp1CJu6oHx27ZFKqHvXc9nNUDM0VjRthh7dWoGlJ4Dh8hwOQikPb3TxiAq82AV5vQE3gDK7qvyR1PETuZH8Pam%2BD%2FgvPHFD0k3CGefFWj5vKyj4DBpiNaR5PS4HyX%2BSWl4RwuZTAAGhBj5AXJiEWZREhSio%2FAGFBDpVG5w5JKrhECbaQFzXMwONVRjegfxR7JVUJg5XuPO%2FX%2BlLCGK00LT7r3THMYrdoSoHs4cxuEE251vrS9uuZpR8PMa96A8TGdshvOSVuknQyjMgu8hOLfftEIQhGcGYlLTz%2Bq3TdMAZ%2Fbhy%2BrG7vg25pn1E01DMwFOe895pEpv4d6wChC6kIGfr5OPMDO8GAPSLGfKpHakOi5h00DFOafz7jtTvQzqFtcSrNfdBvBwvavHSQeaQ%2F6gHhWrYMWG7Uwo69D0rI5tIoJEmUET0Fz8eTDb0r3EBjqkAavN1CMp0%2FKE81niiXYSlH2SzcWBiDuOaptizMlNws2y8XrKoxLRfUUxmsnTvo2yF1PJKaJVejSF989GhOtjB4YAH8kBgf0iNdvaqRSTk%2FLYu%2FuIkJ%2Fvo%2FAN2vtyCzzOXZT9mf2qpmMFTo0kGhdWrItJK6%2BK8YIE6yBWVRQbwU74Nh2ccK91m%2FWZjAjQxHcB2CxXrTMB4hMgqnA1NxUvycoRGYC%2F&X-Amz-Signature=20be063f23c065b74fa3bf30d16d7f9f83607c65999a8dc47333d9174541c17f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NZUE3CF%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCk2P2c0iDucn5YkrvnVYJGMAqjqFuXhJNu2VX0ywG6DgIhAJOgv9DTOdpF9hFhhOMLe7iBLBqVD9BG8Ufg2fcp%2F04JKv8DCC8QABoMNjM3NDIzMTgzODA1Igwk9qS9UbDPZptegWEq3AMvthgHgQ2a0UHr19MFJO%2Fd0oAc3mopK0ZpBIR1NSHlMRQ%2Fa6rRUTE6%2Bep94RfFReKZgrx%2B%2B3xCUcOxntuXNq7atFnEo1GGtduhSYQtxvbLAO3gn%2BcBstob34qidMGjHzDzZLKbP4qM83yj%2F%2B0GU0eIhXiLtV3N6%2FY2lBsDfNbq47PMhpiMFgolG9BihcPrY2taEBTp1CJu6oHx27ZFKqHvXc9nNUDM0VjRthh7dWoGlJ4Dh8hwOQikPb3TxiAq82AV5vQE3gDK7qvyR1PETuZH8Pam%2BD%2FgvPHFD0k3CGefFWj5vKyj4DBpiNaR5PS4HyX%2BSWl4RwuZTAAGhBj5AXJiEWZREhSio%2FAGFBDpVG5w5JKrhECbaQFzXMwONVRjegfxR7JVUJg5XuPO%2FX%2BlLCGK00LT7r3THMYrdoSoHs4cxuEE251vrS9uuZpR8PMa96A8TGdshvOSVuknQyjMgu8hOLfftEIQhGcGYlLTz%2Bq3TdMAZ%2Fbhy%2BrG7vg25pn1E01DMwFOe895pEpv4d6wChC6kIGfr5OPMDO8GAPSLGfKpHakOi5h00DFOafz7jtTvQzqFtcSrNfdBvBwvavHSQeaQ%2F6gHhWrYMWG7Uwo69D0rI5tIoJEmUET0Fz8eTDb0r3EBjqkAavN1CMp0%2FKE81niiXYSlH2SzcWBiDuOaptizMlNws2y8XrKoxLRfUUxmsnTvo2yF1PJKaJVejSF989GhOtjB4YAH8kBgf0iNdvaqRSTk%2FLYu%2FuIkJ%2Fvo%2FAN2vtyCzzOXZT9mf2qpmMFTo0kGhdWrItJK6%2BK8YIE6yBWVRQbwU74Nh2ccK91m%2FWZjAjQxHcB2CxXrTMB4hMgqnA1NxUvycoRGYC%2F&X-Amz-Signature=48ba4633e0242bbbbc84b72ca1e93540874c57e43e64042ada93d77574454322&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NZUE3CF%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCk2P2c0iDucn5YkrvnVYJGMAqjqFuXhJNu2VX0ywG6DgIhAJOgv9DTOdpF9hFhhOMLe7iBLBqVD9BG8Ufg2fcp%2F04JKv8DCC8QABoMNjM3NDIzMTgzODA1Igwk9qS9UbDPZptegWEq3AMvthgHgQ2a0UHr19MFJO%2Fd0oAc3mopK0ZpBIR1NSHlMRQ%2Fa6rRUTE6%2Bep94RfFReKZgrx%2B%2B3xCUcOxntuXNq7atFnEo1GGtduhSYQtxvbLAO3gn%2BcBstob34qidMGjHzDzZLKbP4qM83yj%2F%2B0GU0eIhXiLtV3N6%2FY2lBsDfNbq47PMhpiMFgolG9BihcPrY2taEBTp1CJu6oHx27ZFKqHvXc9nNUDM0VjRthh7dWoGlJ4Dh8hwOQikPb3TxiAq82AV5vQE3gDK7qvyR1PETuZH8Pam%2BD%2FgvPHFD0k3CGefFWj5vKyj4DBpiNaR5PS4HyX%2BSWl4RwuZTAAGhBj5AXJiEWZREhSio%2FAGFBDpVG5w5JKrhECbaQFzXMwONVRjegfxR7JVUJg5XuPO%2FX%2BlLCGK00LT7r3THMYrdoSoHs4cxuEE251vrS9uuZpR8PMa96A8TGdshvOSVuknQyjMgu8hOLfftEIQhGcGYlLTz%2Bq3TdMAZ%2Fbhy%2BrG7vg25pn1E01DMwFOe895pEpv4d6wChC6kIGfr5OPMDO8GAPSLGfKpHakOi5h00DFOafz7jtTvQzqFtcSrNfdBvBwvavHSQeaQ%2F6gHhWrYMWG7Uwo69D0rI5tIoJEmUET0Fz8eTDb0r3EBjqkAavN1CMp0%2FKE81niiXYSlH2SzcWBiDuOaptizMlNws2y8XrKoxLRfUUxmsnTvo2yF1PJKaJVejSF989GhOtjB4YAH8kBgf0iNdvaqRSTk%2FLYu%2FuIkJ%2Fvo%2FAN2vtyCzzOXZT9mf2qpmMFTo0kGhdWrItJK6%2BK8YIE6yBWVRQbwU74Nh2ccK91m%2FWZjAjQxHcB2CxXrTMB4hMgqnA1NxUvycoRGYC%2F&X-Amz-Signature=6b57403aefef500abfe683a916b850101afacf60f24f127ba3eed7ce181eb33c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NZUE3CF%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCk2P2c0iDucn5YkrvnVYJGMAqjqFuXhJNu2VX0ywG6DgIhAJOgv9DTOdpF9hFhhOMLe7iBLBqVD9BG8Ufg2fcp%2F04JKv8DCC8QABoMNjM3NDIzMTgzODA1Igwk9qS9UbDPZptegWEq3AMvthgHgQ2a0UHr19MFJO%2Fd0oAc3mopK0ZpBIR1NSHlMRQ%2Fa6rRUTE6%2Bep94RfFReKZgrx%2B%2B3xCUcOxntuXNq7atFnEo1GGtduhSYQtxvbLAO3gn%2BcBstob34qidMGjHzDzZLKbP4qM83yj%2F%2B0GU0eIhXiLtV3N6%2FY2lBsDfNbq47PMhpiMFgolG9BihcPrY2taEBTp1CJu6oHx27ZFKqHvXc9nNUDM0VjRthh7dWoGlJ4Dh8hwOQikPb3TxiAq82AV5vQE3gDK7qvyR1PETuZH8Pam%2BD%2FgvPHFD0k3CGefFWj5vKyj4DBpiNaR5PS4HyX%2BSWl4RwuZTAAGhBj5AXJiEWZREhSio%2FAGFBDpVG5w5JKrhECbaQFzXMwONVRjegfxR7JVUJg5XuPO%2FX%2BlLCGK00LT7r3THMYrdoSoHs4cxuEE251vrS9uuZpR8PMa96A8TGdshvOSVuknQyjMgu8hOLfftEIQhGcGYlLTz%2Bq3TdMAZ%2Fbhy%2BrG7vg25pn1E01DMwFOe895pEpv4d6wChC6kIGfr5OPMDO8GAPSLGfKpHakOi5h00DFOafz7jtTvQzqFtcSrNfdBvBwvavHSQeaQ%2F6gHhWrYMWG7Uwo69D0rI5tIoJEmUET0Fz8eTDb0r3EBjqkAavN1CMp0%2FKE81niiXYSlH2SzcWBiDuOaptizMlNws2y8XrKoxLRfUUxmsnTvo2yF1PJKaJVejSF989GhOtjB4YAH8kBgf0iNdvaqRSTk%2FLYu%2FuIkJ%2Fvo%2FAN2vtyCzzOXZT9mf2qpmMFTo0kGhdWrItJK6%2BK8YIE6yBWVRQbwU74Nh2ccK91m%2FWZjAjQxHcB2CxXrTMB4hMgqnA1NxUvycoRGYC%2F&X-Amz-Signature=203a53e6bca13871270e5ce993eef9be99435a585a466e9901149ba1d8fe67ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NZUE3CF%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T140823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCk2P2c0iDucn5YkrvnVYJGMAqjqFuXhJNu2VX0ywG6DgIhAJOgv9DTOdpF9hFhhOMLe7iBLBqVD9BG8Ufg2fcp%2F04JKv8DCC8QABoMNjM3NDIzMTgzODA1Igwk9qS9UbDPZptegWEq3AMvthgHgQ2a0UHr19MFJO%2Fd0oAc3mopK0ZpBIR1NSHlMRQ%2Fa6rRUTE6%2Bep94RfFReKZgrx%2B%2B3xCUcOxntuXNq7atFnEo1GGtduhSYQtxvbLAO3gn%2BcBstob34qidMGjHzDzZLKbP4qM83yj%2F%2B0GU0eIhXiLtV3N6%2FY2lBsDfNbq47PMhpiMFgolG9BihcPrY2taEBTp1CJu6oHx27ZFKqHvXc9nNUDM0VjRthh7dWoGlJ4Dh8hwOQikPb3TxiAq82AV5vQE3gDK7qvyR1PETuZH8Pam%2BD%2FgvPHFD0k3CGefFWj5vKyj4DBpiNaR5PS4HyX%2BSWl4RwuZTAAGhBj5AXJiEWZREhSio%2FAGFBDpVG5w5JKrhECbaQFzXMwONVRjegfxR7JVUJg5XuPO%2FX%2BlLCGK00LT7r3THMYrdoSoHs4cxuEE251vrS9uuZpR8PMa96A8TGdshvOSVuknQyjMgu8hOLfftEIQhGcGYlLTz%2Bq3TdMAZ%2Fbhy%2BrG7vg25pn1E01DMwFOe895pEpv4d6wChC6kIGfr5OPMDO8GAPSLGfKpHakOi5h00DFOafz7jtTvQzqFtcSrNfdBvBwvavHSQeaQ%2F6gHhWrYMWG7Uwo69D0rI5tIoJEmUET0Fz8eTDb0r3EBjqkAavN1CMp0%2FKE81niiXYSlH2SzcWBiDuOaptizMlNws2y8XrKoxLRfUUxmsnTvo2yF1PJKaJVejSF989GhOtjB4YAH8kBgf0iNdvaqRSTk%2FLYu%2FuIkJ%2Fvo%2FAN2vtyCzzOXZT9mf2qpmMFTo0kGhdWrItJK6%2BK8YIE6yBWVRQbwU74Nh2ccK91m%2FWZjAjQxHcB2CxXrTMB4hMgqnA1NxUvycoRGYC%2F&X-Amz-Signature=99c222759eb497321761fd4804454ce1bf65f15cc8018d06c8141d3989b0ce7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
