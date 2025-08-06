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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TPXSR4I%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIAbHADGOdXhJUSl%2FBjhtq3fhv%2FLFdJ2IAHpFwYNiIxi1AiEAjRQBeDa8q18%2Fee66M3T07OujQnXhay7obn7gLmu1C%2BAq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDHW6xBBjzK0xl4GlwircA1EuWC6NSHQA7sO4PRk6%2FxInkcU4ux%2FZ3s0vPXBotWgAsoGtuFIzQrWE11NEJviNYclQhWD6mr%2BVSLxUV9Tntjx8gmf%2BnIt%2BXPVH3kHRMRFFqPoxOrKhsab3e7Bx%2B7WONQm%2BD4TC%2Ffnx1pgJLT6IEKb0ssfAWJqt8ocMietGs2TFDLVcKhv12HngLBYumEiHhFi%2FlBkpFRFROS%2Bufa9oBA84muQ9b4Y8zFYGoemQZB%2BSKqpxGTQWMNjIn7TdSpqztNdF4crrgTnNbRlqb6Zo49ZytBsj2L1qtm0n1MyI3RDqRU2vRuhsnr9zc68q31nE1o9pdlXq%2F23oG4IaMyU8YuH78hgeZ9boyXwjSzWnod2%2BMoLbJFR5wDOfFBgwkHiWD1MtCQDRd3EAjaFyd9zNjcfjNzxNFh7hdDUTZFzpGrT%2FF%2FOXPJMCIXPUkMV3F%2BaCZqdu3LbIVN3vTxDbinPQ8tll%2FVYHlsRm8UGWfJwlHw8%2BBdt8OaA45OJJxMbtIRSOwEe43ZE%2F33TU9ejpql2nqMfIEW5thkyfJO1fmXykcwToCa42ndQx5HOeEPnsE9hmMUGUp%2BIsfOnW5x29OXyrlHzn8OAl%2FtJtDA2KT0MqDQfXh6iR8G%2F673E2DVcbMK%2FrzsQGOqUBbY1WRvUIPQH2WYC9%2BRRrYZ1WIwhjHG3aOs%2BCEPDCDMvv%2BmUm8VNiITG1rRp5Zn6XMO%2F%2FQ%2BT%2BosqnOHXQw35ZdJ5zs15SEhUE%2Ft8B5%2FaMdA88OqFhMRlxLKXQSS2OvP8dj6b1vBTdspCwrQ5flybvFQOcBFQ4BRc8rXJvClyycNjHuZwzbhO5%2Bp0dLZsrtoam6EdejjKAyvu3PAvY0%2Fpzd2%2BGz1IX&X-Amz-Signature=41ab4747f27f8a3da45cf55bdb05791d92411b981b7c3ed1d7b7714ed26e4b0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSTFCZQS%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDYBvNP%2B9wyI78tX14AUs9u1%2FpDfNGo5CHZ2Vo%2FDPFp0gIgCF9eBuEXUEWUSFYUuFQcJuy3PcKZKf7SOmurklpYB5Mq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDEXT3js%2FewweUXl%2FYyrcAyyhXRAfSxPWySDjHLTfsYcmx89iINy8O1CoZOE9SVb4cdtksK7keY%2FKs6aoEqBEop8LYpboc8hSNjQJ2TgWIATT%2B9ujuVAgnLiz85icmUQkXHc1naO81Awkrk%2FG1k5qSxarzHE5R4GZDQy%2BTQrIyNN4NUQSr%2B0MO7SO%2Bj681lGeDgbpirqdEQTKkqDY0PrE2G9X1BlCNlZzwnyyknZ7ZWjKFSdb8A8KyJNeQLnxLjhSFqxEX7w%2FyC%2BTD4rPaTx9vcnPdmn8RLh44ypmP3OPL6QBWvbIlRQP%2F2CRE2neFFkicidkmrJ%2FydxW4zWcTlA7YLudYTDwDThPNZUlp%2BokZUrEuKpU%2FpsLGC8RjHYACwXCOj38GeGa9smSLFeMdDxNvdKP1zk%2B%2Fmj%2FX51bgafTLSemi0OIkWZYeJXfR6ttmnswA4huVmPfikaTCEFf7fPp2aS3NQ%2FEEq3q6gqWHwpyMPxrWYj7Jr%2BzgQx6%2FUj2QPf8yw1RrjjY1scVH8i%2FYMtEm31EDDgwl7IARYmr%2F4zGtQRhuB72JfMSzQO%2BDMNRDt8Kk9YqZFeMGTh9icpKewvzhRYV8sXoAus1Yd2TpPl5vjcdfmtNCCl7sPLa3WhuDr3CWXHcid1AE%2FRTnC3NMK%2FqzsQGOqUBJqK26bPRaRoGzqBvCoWbK2vStYUs%2Bc26TcU%2FnhLQfg1ZFpOC6VKmvwsEgDyQJKutAJ4NwDToTm3cYoWAr%2F%2BK3SACQnB25lOPBpOVBmOfAi5T9svMhmVAUXz5hG616%2F%2BXcsVL5%2Bzk324nXuUB5vfa3cJ2uPXpXjGzBOTgD7QOL48C4UXQGnjnZ9i0E3bicnERQsMvoys0mfgONWa1ajTR2mb7O1TY&X-Amz-Signature=66634879bbc257e2448d1aaf652e5b29ee92bd6e752788f09935c6bfb8c82fd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSTFCZQS%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDYBvNP%2B9wyI78tX14AUs9u1%2FpDfNGo5CHZ2Vo%2FDPFp0gIgCF9eBuEXUEWUSFYUuFQcJuy3PcKZKf7SOmurklpYB5Mq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDEXT3js%2FewweUXl%2FYyrcAyyhXRAfSxPWySDjHLTfsYcmx89iINy8O1CoZOE9SVb4cdtksK7keY%2FKs6aoEqBEop8LYpboc8hSNjQJ2TgWIATT%2B9ujuVAgnLiz85icmUQkXHc1naO81Awkrk%2FG1k5qSxarzHE5R4GZDQy%2BTQrIyNN4NUQSr%2B0MO7SO%2Bj681lGeDgbpirqdEQTKkqDY0PrE2G9X1BlCNlZzwnyyknZ7ZWjKFSdb8A8KyJNeQLnxLjhSFqxEX7w%2FyC%2BTD4rPaTx9vcnPdmn8RLh44ypmP3OPL6QBWvbIlRQP%2F2CRE2neFFkicidkmrJ%2FydxW4zWcTlA7YLudYTDwDThPNZUlp%2BokZUrEuKpU%2FpsLGC8RjHYACwXCOj38GeGa9smSLFeMdDxNvdKP1zk%2B%2Fmj%2FX51bgafTLSemi0OIkWZYeJXfR6ttmnswA4huVmPfikaTCEFf7fPp2aS3NQ%2FEEq3q6gqWHwpyMPxrWYj7Jr%2BzgQx6%2FUj2QPf8yw1RrjjY1scVH8i%2FYMtEm31EDDgwl7IARYmr%2F4zGtQRhuB72JfMSzQO%2BDMNRDt8Kk9YqZFeMGTh9icpKewvzhRYV8sXoAus1Yd2TpPl5vjcdfmtNCCl7sPLa3WhuDr3CWXHcid1AE%2FRTnC3NMK%2FqzsQGOqUBJqK26bPRaRoGzqBvCoWbK2vStYUs%2Bc26TcU%2FnhLQfg1ZFpOC6VKmvwsEgDyQJKutAJ4NwDToTm3cYoWAr%2F%2BK3SACQnB25lOPBpOVBmOfAi5T9svMhmVAUXz5hG616%2F%2BXcsVL5%2Bzk324nXuUB5vfa3cJ2uPXpXjGzBOTgD7QOL48C4UXQGnjnZ9i0E3bicnERQsMvoys0mfgONWa1ajTR2mb7O1TY&X-Amz-Signature=d6a119a688bdbfa74925f0a825c3557e4404ce0a0f0deb47c5ecbed9ec76a159&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSTFCZQS%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDYBvNP%2B9wyI78tX14AUs9u1%2FpDfNGo5CHZ2Vo%2FDPFp0gIgCF9eBuEXUEWUSFYUuFQcJuy3PcKZKf7SOmurklpYB5Mq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDEXT3js%2FewweUXl%2FYyrcAyyhXRAfSxPWySDjHLTfsYcmx89iINy8O1CoZOE9SVb4cdtksK7keY%2FKs6aoEqBEop8LYpboc8hSNjQJ2TgWIATT%2B9ujuVAgnLiz85icmUQkXHc1naO81Awkrk%2FG1k5qSxarzHE5R4GZDQy%2BTQrIyNN4NUQSr%2B0MO7SO%2Bj681lGeDgbpirqdEQTKkqDY0PrE2G9X1BlCNlZzwnyyknZ7ZWjKFSdb8A8KyJNeQLnxLjhSFqxEX7w%2FyC%2BTD4rPaTx9vcnPdmn8RLh44ypmP3OPL6QBWvbIlRQP%2F2CRE2neFFkicidkmrJ%2FydxW4zWcTlA7YLudYTDwDThPNZUlp%2BokZUrEuKpU%2FpsLGC8RjHYACwXCOj38GeGa9smSLFeMdDxNvdKP1zk%2B%2Fmj%2FX51bgafTLSemi0OIkWZYeJXfR6ttmnswA4huVmPfikaTCEFf7fPp2aS3NQ%2FEEq3q6gqWHwpyMPxrWYj7Jr%2BzgQx6%2FUj2QPf8yw1RrjjY1scVH8i%2FYMtEm31EDDgwl7IARYmr%2F4zGtQRhuB72JfMSzQO%2BDMNRDt8Kk9YqZFeMGTh9icpKewvzhRYV8sXoAus1Yd2TpPl5vjcdfmtNCCl7sPLa3WhuDr3CWXHcid1AE%2FRTnC3NMK%2FqzsQGOqUBJqK26bPRaRoGzqBvCoWbK2vStYUs%2Bc26TcU%2FnhLQfg1ZFpOC6VKmvwsEgDyQJKutAJ4NwDToTm3cYoWAr%2F%2BK3SACQnB25lOPBpOVBmOfAi5T9svMhmVAUXz5hG616%2F%2BXcsVL5%2Bzk324nXuUB5vfa3cJ2uPXpXjGzBOTgD7QOL48C4UXQGnjnZ9i0E3bicnERQsMvoys0mfgONWa1ajTR2mb7O1TY&X-Amz-Signature=fc6d7f0fb5d8c9b14366b4ab33bb1652b85c0578e0a61d0a8e2eab850cb4699f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSTFCZQS%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDYBvNP%2B9wyI78tX14AUs9u1%2FpDfNGo5CHZ2Vo%2FDPFp0gIgCF9eBuEXUEWUSFYUuFQcJuy3PcKZKf7SOmurklpYB5Mq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDEXT3js%2FewweUXl%2FYyrcAyyhXRAfSxPWySDjHLTfsYcmx89iINy8O1CoZOE9SVb4cdtksK7keY%2FKs6aoEqBEop8LYpboc8hSNjQJ2TgWIATT%2B9ujuVAgnLiz85icmUQkXHc1naO81Awkrk%2FG1k5qSxarzHE5R4GZDQy%2BTQrIyNN4NUQSr%2B0MO7SO%2Bj681lGeDgbpirqdEQTKkqDY0PrE2G9X1BlCNlZzwnyyknZ7ZWjKFSdb8A8KyJNeQLnxLjhSFqxEX7w%2FyC%2BTD4rPaTx9vcnPdmn8RLh44ypmP3OPL6QBWvbIlRQP%2F2CRE2neFFkicidkmrJ%2FydxW4zWcTlA7YLudYTDwDThPNZUlp%2BokZUrEuKpU%2FpsLGC8RjHYACwXCOj38GeGa9smSLFeMdDxNvdKP1zk%2B%2Fmj%2FX51bgafTLSemi0OIkWZYeJXfR6ttmnswA4huVmPfikaTCEFf7fPp2aS3NQ%2FEEq3q6gqWHwpyMPxrWYj7Jr%2BzgQx6%2FUj2QPf8yw1RrjjY1scVH8i%2FYMtEm31EDDgwl7IARYmr%2F4zGtQRhuB72JfMSzQO%2BDMNRDt8Kk9YqZFeMGTh9icpKewvzhRYV8sXoAus1Yd2TpPl5vjcdfmtNCCl7sPLa3WhuDr3CWXHcid1AE%2FRTnC3NMK%2FqzsQGOqUBJqK26bPRaRoGzqBvCoWbK2vStYUs%2Bc26TcU%2FnhLQfg1ZFpOC6VKmvwsEgDyQJKutAJ4NwDToTm3cYoWAr%2F%2BK3SACQnB25lOPBpOVBmOfAi5T9svMhmVAUXz5hG616%2F%2BXcsVL5%2Bzk324nXuUB5vfa3cJ2uPXpXjGzBOTgD7QOL48C4UXQGnjnZ9i0E3bicnERQsMvoys0mfgONWa1ajTR2mb7O1TY&X-Amz-Signature=38f570cc22839c119bdebed72559efb5901ccb1cf2683978fc5ba17ae2477a7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSTFCZQS%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDYBvNP%2B9wyI78tX14AUs9u1%2FpDfNGo5CHZ2Vo%2FDPFp0gIgCF9eBuEXUEWUSFYUuFQcJuy3PcKZKf7SOmurklpYB5Mq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDEXT3js%2FewweUXl%2FYyrcAyyhXRAfSxPWySDjHLTfsYcmx89iINy8O1CoZOE9SVb4cdtksK7keY%2FKs6aoEqBEop8LYpboc8hSNjQJ2TgWIATT%2B9ujuVAgnLiz85icmUQkXHc1naO81Awkrk%2FG1k5qSxarzHE5R4GZDQy%2BTQrIyNN4NUQSr%2B0MO7SO%2Bj681lGeDgbpirqdEQTKkqDY0PrE2G9X1BlCNlZzwnyyknZ7ZWjKFSdb8A8KyJNeQLnxLjhSFqxEX7w%2FyC%2BTD4rPaTx9vcnPdmn8RLh44ypmP3OPL6QBWvbIlRQP%2F2CRE2neFFkicidkmrJ%2FydxW4zWcTlA7YLudYTDwDThPNZUlp%2BokZUrEuKpU%2FpsLGC8RjHYACwXCOj38GeGa9smSLFeMdDxNvdKP1zk%2B%2Fmj%2FX51bgafTLSemi0OIkWZYeJXfR6ttmnswA4huVmPfikaTCEFf7fPp2aS3NQ%2FEEq3q6gqWHwpyMPxrWYj7Jr%2BzgQx6%2FUj2QPf8yw1RrjjY1scVH8i%2FYMtEm31EDDgwl7IARYmr%2F4zGtQRhuB72JfMSzQO%2BDMNRDt8Kk9YqZFeMGTh9icpKewvzhRYV8sXoAus1Yd2TpPl5vjcdfmtNCCl7sPLa3WhuDr3CWXHcid1AE%2FRTnC3NMK%2FqzsQGOqUBJqK26bPRaRoGzqBvCoWbK2vStYUs%2Bc26TcU%2FnhLQfg1ZFpOC6VKmvwsEgDyQJKutAJ4NwDToTm3cYoWAr%2F%2BK3SACQnB25lOPBpOVBmOfAi5T9svMhmVAUXz5hG616%2F%2BXcsVL5%2Bzk324nXuUB5vfa3cJ2uPXpXjGzBOTgD7QOL48C4UXQGnjnZ9i0E3bicnERQsMvoys0mfgONWa1ajTR2mb7O1TY&X-Amz-Signature=4556675c94a358e0cdb6804377e575bd9613fd96077fa259e5fa5b813edd426a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSTFCZQS%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDYBvNP%2B9wyI78tX14AUs9u1%2FpDfNGo5CHZ2Vo%2FDPFp0gIgCF9eBuEXUEWUSFYUuFQcJuy3PcKZKf7SOmurklpYB5Mq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDEXT3js%2FewweUXl%2FYyrcAyyhXRAfSxPWySDjHLTfsYcmx89iINy8O1CoZOE9SVb4cdtksK7keY%2FKs6aoEqBEop8LYpboc8hSNjQJ2TgWIATT%2B9ujuVAgnLiz85icmUQkXHc1naO81Awkrk%2FG1k5qSxarzHE5R4GZDQy%2BTQrIyNN4NUQSr%2B0MO7SO%2Bj681lGeDgbpirqdEQTKkqDY0PrE2G9X1BlCNlZzwnyyknZ7ZWjKFSdb8A8KyJNeQLnxLjhSFqxEX7w%2FyC%2BTD4rPaTx9vcnPdmn8RLh44ypmP3OPL6QBWvbIlRQP%2F2CRE2neFFkicidkmrJ%2FydxW4zWcTlA7YLudYTDwDThPNZUlp%2BokZUrEuKpU%2FpsLGC8RjHYACwXCOj38GeGa9smSLFeMdDxNvdKP1zk%2B%2Fmj%2FX51bgafTLSemi0OIkWZYeJXfR6ttmnswA4huVmPfikaTCEFf7fPp2aS3NQ%2FEEq3q6gqWHwpyMPxrWYj7Jr%2BzgQx6%2FUj2QPf8yw1RrjjY1scVH8i%2FYMtEm31EDDgwl7IARYmr%2F4zGtQRhuB72JfMSzQO%2BDMNRDt8Kk9YqZFeMGTh9icpKewvzhRYV8sXoAus1Yd2TpPl5vjcdfmtNCCl7sPLa3WhuDr3CWXHcid1AE%2FRTnC3NMK%2FqzsQGOqUBJqK26bPRaRoGzqBvCoWbK2vStYUs%2Bc26TcU%2FnhLQfg1ZFpOC6VKmvwsEgDyQJKutAJ4NwDToTm3cYoWAr%2F%2BK3SACQnB25lOPBpOVBmOfAi5T9svMhmVAUXz5hG616%2F%2BXcsVL5%2Bzk324nXuUB5vfa3cJ2uPXpXjGzBOTgD7QOL48C4UXQGnjnZ9i0E3bicnERQsMvoys0mfgONWa1ajTR2mb7O1TY&X-Amz-Signature=e28ce4a9156bbfdf64901d5981be89980659e27a3b0cb7ea6ae0d57adae61b61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSTFCZQS%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDYBvNP%2B9wyI78tX14AUs9u1%2FpDfNGo5CHZ2Vo%2FDPFp0gIgCF9eBuEXUEWUSFYUuFQcJuy3PcKZKf7SOmurklpYB5Mq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDEXT3js%2FewweUXl%2FYyrcAyyhXRAfSxPWySDjHLTfsYcmx89iINy8O1CoZOE9SVb4cdtksK7keY%2FKs6aoEqBEop8LYpboc8hSNjQJ2TgWIATT%2B9ujuVAgnLiz85icmUQkXHc1naO81Awkrk%2FG1k5qSxarzHE5R4GZDQy%2BTQrIyNN4NUQSr%2B0MO7SO%2Bj681lGeDgbpirqdEQTKkqDY0PrE2G9X1BlCNlZzwnyyknZ7ZWjKFSdb8A8KyJNeQLnxLjhSFqxEX7w%2FyC%2BTD4rPaTx9vcnPdmn8RLh44ypmP3OPL6QBWvbIlRQP%2F2CRE2neFFkicidkmrJ%2FydxW4zWcTlA7YLudYTDwDThPNZUlp%2BokZUrEuKpU%2FpsLGC8RjHYACwXCOj38GeGa9smSLFeMdDxNvdKP1zk%2B%2Fmj%2FX51bgafTLSemi0OIkWZYeJXfR6ttmnswA4huVmPfikaTCEFf7fPp2aS3NQ%2FEEq3q6gqWHwpyMPxrWYj7Jr%2BzgQx6%2FUj2QPf8yw1RrjjY1scVH8i%2FYMtEm31EDDgwl7IARYmr%2F4zGtQRhuB72JfMSzQO%2BDMNRDt8Kk9YqZFeMGTh9icpKewvzhRYV8sXoAus1Yd2TpPl5vjcdfmtNCCl7sPLa3WhuDr3CWXHcid1AE%2FRTnC3NMK%2FqzsQGOqUBJqK26bPRaRoGzqBvCoWbK2vStYUs%2Bc26TcU%2FnhLQfg1ZFpOC6VKmvwsEgDyQJKutAJ4NwDToTm3cYoWAr%2F%2BK3SACQnB25lOPBpOVBmOfAi5T9svMhmVAUXz5hG616%2F%2BXcsVL5%2Bzk324nXuUB5vfa3cJ2uPXpXjGzBOTgD7QOL48C4UXQGnjnZ9i0E3bicnERQsMvoys0mfgONWa1ajTR2mb7O1TY&X-Amz-Signature=c5822ae2c7547748682dcc599717d559beabf8953622e464885e2c323d247720&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSTFCZQS%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDYBvNP%2B9wyI78tX14AUs9u1%2FpDfNGo5CHZ2Vo%2FDPFp0gIgCF9eBuEXUEWUSFYUuFQcJuy3PcKZKf7SOmurklpYB5Mq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDEXT3js%2FewweUXl%2FYyrcAyyhXRAfSxPWySDjHLTfsYcmx89iINy8O1CoZOE9SVb4cdtksK7keY%2FKs6aoEqBEop8LYpboc8hSNjQJ2TgWIATT%2B9ujuVAgnLiz85icmUQkXHc1naO81Awkrk%2FG1k5qSxarzHE5R4GZDQy%2BTQrIyNN4NUQSr%2B0MO7SO%2Bj681lGeDgbpirqdEQTKkqDY0PrE2G9X1BlCNlZzwnyyknZ7ZWjKFSdb8A8KyJNeQLnxLjhSFqxEX7w%2FyC%2BTD4rPaTx9vcnPdmn8RLh44ypmP3OPL6QBWvbIlRQP%2F2CRE2neFFkicidkmrJ%2FydxW4zWcTlA7YLudYTDwDThPNZUlp%2BokZUrEuKpU%2FpsLGC8RjHYACwXCOj38GeGa9smSLFeMdDxNvdKP1zk%2B%2Fmj%2FX51bgafTLSemi0OIkWZYeJXfR6ttmnswA4huVmPfikaTCEFf7fPp2aS3NQ%2FEEq3q6gqWHwpyMPxrWYj7Jr%2BzgQx6%2FUj2QPf8yw1RrjjY1scVH8i%2FYMtEm31EDDgwl7IARYmr%2F4zGtQRhuB72JfMSzQO%2BDMNRDt8Kk9YqZFeMGTh9icpKewvzhRYV8sXoAus1Yd2TpPl5vjcdfmtNCCl7sPLa3WhuDr3CWXHcid1AE%2FRTnC3NMK%2FqzsQGOqUBJqK26bPRaRoGzqBvCoWbK2vStYUs%2Bc26TcU%2FnhLQfg1ZFpOC6VKmvwsEgDyQJKutAJ4NwDToTm3cYoWAr%2F%2BK3SACQnB25lOPBpOVBmOfAi5T9svMhmVAUXz5hG616%2F%2BXcsVL5%2Bzk324nXuUB5vfa3cJ2uPXpXjGzBOTgD7QOL48C4UXQGnjnZ9i0E3bicnERQsMvoys0mfgONWa1ajTR2mb7O1TY&X-Amz-Signature=f4d1f74e9ca844ba6f063cb5953506801abdd6a060e3c9ad48f9764c81d6a654&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSTFCZQS%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDYBvNP%2B9wyI78tX14AUs9u1%2FpDfNGo5CHZ2Vo%2FDPFp0gIgCF9eBuEXUEWUSFYUuFQcJuy3PcKZKf7SOmurklpYB5Mq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDEXT3js%2FewweUXl%2FYyrcAyyhXRAfSxPWySDjHLTfsYcmx89iINy8O1CoZOE9SVb4cdtksK7keY%2FKs6aoEqBEop8LYpboc8hSNjQJ2TgWIATT%2B9ujuVAgnLiz85icmUQkXHc1naO81Awkrk%2FG1k5qSxarzHE5R4GZDQy%2BTQrIyNN4NUQSr%2B0MO7SO%2Bj681lGeDgbpirqdEQTKkqDY0PrE2G9X1BlCNlZzwnyyknZ7ZWjKFSdb8A8KyJNeQLnxLjhSFqxEX7w%2FyC%2BTD4rPaTx9vcnPdmn8RLh44ypmP3OPL6QBWvbIlRQP%2F2CRE2neFFkicidkmrJ%2FydxW4zWcTlA7YLudYTDwDThPNZUlp%2BokZUrEuKpU%2FpsLGC8RjHYACwXCOj38GeGa9smSLFeMdDxNvdKP1zk%2B%2Fmj%2FX51bgafTLSemi0OIkWZYeJXfR6ttmnswA4huVmPfikaTCEFf7fPp2aS3NQ%2FEEq3q6gqWHwpyMPxrWYj7Jr%2BzgQx6%2FUj2QPf8yw1RrjjY1scVH8i%2FYMtEm31EDDgwl7IARYmr%2F4zGtQRhuB72JfMSzQO%2BDMNRDt8Kk9YqZFeMGTh9icpKewvzhRYV8sXoAus1Yd2TpPl5vjcdfmtNCCl7sPLa3WhuDr3CWXHcid1AE%2FRTnC3NMK%2FqzsQGOqUBJqK26bPRaRoGzqBvCoWbK2vStYUs%2Bc26TcU%2FnhLQfg1ZFpOC6VKmvwsEgDyQJKutAJ4NwDToTm3cYoWAr%2F%2BK3SACQnB25lOPBpOVBmOfAi5T9svMhmVAUXz5hG616%2F%2BXcsVL5%2Bzk324nXuUB5vfa3cJ2uPXpXjGzBOTgD7QOL48C4UXQGnjnZ9i0E3bicnERQsMvoys0mfgONWa1ajTR2mb7O1TY&X-Amz-Signature=0f2a05c4d3a25f9a068ba215e04b17ecd1c96017aa2f81d7fcca967fc0f3ff2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSTFCZQS%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T210912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQDYBvNP%2B9wyI78tX14AUs9u1%2FpDfNGo5CHZ2Vo%2FDPFp0gIgCF9eBuEXUEWUSFYUuFQcJuy3PcKZKf7SOmurklpYB5Mq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDEXT3js%2FewweUXl%2FYyrcAyyhXRAfSxPWySDjHLTfsYcmx89iINy8O1CoZOE9SVb4cdtksK7keY%2FKs6aoEqBEop8LYpboc8hSNjQJ2TgWIATT%2B9ujuVAgnLiz85icmUQkXHc1naO81Awkrk%2FG1k5qSxarzHE5R4GZDQy%2BTQrIyNN4NUQSr%2B0MO7SO%2Bj681lGeDgbpirqdEQTKkqDY0PrE2G9X1BlCNlZzwnyyknZ7ZWjKFSdb8A8KyJNeQLnxLjhSFqxEX7w%2FyC%2BTD4rPaTx9vcnPdmn8RLh44ypmP3OPL6QBWvbIlRQP%2F2CRE2neFFkicidkmrJ%2FydxW4zWcTlA7YLudYTDwDThPNZUlp%2BokZUrEuKpU%2FpsLGC8RjHYACwXCOj38GeGa9smSLFeMdDxNvdKP1zk%2B%2Fmj%2FX51bgafTLSemi0OIkWZYeJXfR6ttmnswA4huVmPfikaTCEFf7fPp2aS3NQ%2FEEq3q6gqWHwpyMPxrWYj7Jr%2BzgQx6%2FUj2QPf8yw1RrjjY1scVH8i%2FYMtEm31EDDgwl7IARYmr%2F4zGtQRhuB72JfMSzQO%2BDMNRDt8Kk9YqZFeMGTh9icpKewvzhRYV8sXoAus1Yd2TpPl5vjcdfmtNCCl7sPLa3WhuDr3CWXHcid1AE%2FRTnC3NMK%2FqzsQGOqUBJqK26bPRaRoGzqBvCoWbK2vStYUs%2Bc26TcU%2FnhLQfg1ZFpOC6VKmvwsEgDyQJKutAJ4NwDToTm3cYoWAr%2F%2BK3SACQnB25lOPBpOVBmOfAi5T9svMhmVAUXz5hG616%2F%2BXcsVL5%2Bzk324nXuUB5vfa3cJ2uPXpXjGzBOTgD7QOL48C4UXQGnjnZ9i0E3bicnERQsMvoys0mfgONWa1ajTR2mb7O1TY&X-Amz-Signature=38f570cc22839c119bdebed72559efb5901ccb1cf2683978fc5ba17ae2477a7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
