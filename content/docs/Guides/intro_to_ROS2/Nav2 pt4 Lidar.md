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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666735HLXQ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIACLNBBFxrvCyCTsNgHq3i8XBYJbHbhqXOQ7qSP4hyc3AiEApS1uTxXdPwlr64xpfeTWA4fHK3Y0kYXlJO9Bd11838Qq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDC5vns753SqTgJakLSrcA%2FNztzrWBi4XXXZeEjgvNxVaBkYO%2BG7brO14OnovUof0Xh0F%2BnT9yTOEZAVR0KleDEz46ZbbLnJnm6bVXQydZEpF9ClCyzIO1yXymudDOpKBM665fHVsUxA4ek2c2FIBKaE3qrMb5oBfa6nWk8bDODHytEJs53fOiTSMiqyEkKgVM3IPRGpfO2D%2BK4NaIPYnvH%2FtZVE7CoQ8b4jkYNJ2yqXwhj4SmXKJynT82vat3lCsbT2w0YVZ4TnT22xjgbJ%2BxoR5cR4l6QkFrw2QBl0FJpc9yXtcps68v%2Fc5b%2FHaUbhBPeBVX4wEbM2hWbdYRX1ZYOh%2Fx3yAOyntxLlFEiEHEgGNV4H5Sw0V1Wl4ATRIfRWt8CSTlnYoRtcKfDVNWcga9RZdTfzMmqXw3%2Bkdaz25q4sYO9cB0N1cMzOH3Jw8tKf8osBD7jDgV1%2FtnAcpxfMxJN1bQ%2BHmXX4ytVQsnKb0YgsXzDO9%2BsR2NfkYq0OCC6QS9T50UbTyUZnS1U6uBsB7bjtOrXt6qMocgpz7Fx4Yq53VB023wuOMenGW3alOmUX%2FKeE2hqK98vSPwaw0avPhebx5X6LfJyJhDQiyJPV6AjHJQKheI3XMvFAzwhd%2FOEP5QkiOJqZc%2F2xqvBlnMOyi%2BsQGOqUBlnUt5ZdcbCsJEltjgyOHx1q6zMOhUc2T5z4JPy7fuIovHYjFH%2F8xeT%2F3OoxPU%2Bwty5rP8UA%2Fm2BBfjML8pBT7eVOqooMekx3a18v7M5ytjqXRWhIC4RDT0LX87n4S0nt7UBVWmDB0JEfEvQBFD0HG2dYc3LbHggQoWJIEWZMdHCiTXwPjG76HMmAxh361Zon4f%2BxhxJGMogM93ubBjzRxOqxSxtX&X-Amz-Signature=9245dd7b129873d6d630d2049cc788bfcb69edae5ae790420a7e93c5a0f61d80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVACFZOA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCID4yJHw%2Bc32sasrUj46NMYTqk2woaW%2BDK1cmfSzgmtH2AiEAs1QnqofnGA0IQwF7tUkw2QiIsSgbhjzX2%2FrYVtAglaMq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJjjoWNrvn3TM9dyqSrcA8vYNYOSGu6ILDsFXwCejxfXaXrDPzgcTZ7wqObp8TW8sjICLb6r%2F%2B2x0vQuJyBbZRexqUJXO7ComyrO1rRBmXr38KnkGbcNS1cjM3VF734%2B3RwrEoetrIJsx4FRmZm1Zut%2B0jR%2FH0DmJWT3PSzHpYLVTvY4M3JlH7OtHrWHBWOG%2FQ0P4LiFlKNnhglhBwg6tQWIbbfOXfDQtMqmKi%2BkUgpkviv1AHSefZg0ccM3iktsDuTuz7dkrc%2FyJAqKWF2MM4rSlM6mF6tSgWVwDBXQAgll%2FUBKgNXlMcdeR4YIzIY7gPAV4nfSQmeBrvg70%2BjW8OdXWoYgg6WNMEKPKp7W%2FyL8u1M0nrUIGFtDehvWU%2FsJHl6WYROVtdQ4dFVYN43jCM%2FgPzrkzmTx2OIPh%2Fmf3%2B%2FxM%2FBuXXD0%2B9v7sTTsNQ8lSo8E48HMq7IIi56cCHVyD2zwz3vFfPm4%2F85B3g3yvolsShCby5VL5Atc%2BcXVAzjftpAQidw0XnoD4xMmOywHtMkzChqYvrAmlpn%2BRYvxiVVJbY0DTcGVnsi8%2Bnp6fMs0UqaSyZfC8VRfaad2wuvwL88sn%2Bj4tNaEXDlAPQr18sCVKdmyNjFjS0s1lzQk3BcRAXFm1oFwvNwvySE%2BMLmj%2BsQGOqUBY%2B%2B4Ol2N5y8TjA5QP1yyJ0E%2Bsg46o4RL1MrhjmykdiWG06vpKpmfCucelpWuFQ7W7Pi%2FCCx3pIcV9fMWDl6pYNfHy0syDTu2sBsVJQcDf6HfuVtorwWNxXs1%2B%2FEb%2B2xw%2FVN%2F82zMWP6%2BDFZeYCbH7kc9M9EceGZ7efL7V9nJgJKsmInr0sbXMbNn5MGDvXxMRl5M50xxnAwv9XU5FYkcT2sbzSiB&X-Amz-Signature=c8537b6dfc159eb026f8f31cabe0fc65fad10396a936931b4bdb1fbdb3c5e418&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVACFZOA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCID4yJHw%2Bc32sasrUj46NMYTqk2woaW%2BDK1cmfSzgmtH2AiEAs1QnqofnGA0IQwF7tUkw2QiIsSgbhjzX2%2FrYVtAglaMq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJjjoWNrvn3TM9dyqSrcA8vYNYOSGu6ILDsFXwCejxfXaXrDPzgcTZ7wqObp8TW8sjICLb6r%2F%2B2x0vQuJyBbZRexqUJXO7ComyrO1rRBmXr38KnkGbcNS1cjM3VF734%2B3RwrEoetrIJsx4FRmZm1Zut%2B0jR%2FH0DmJWT3PSzHpYLVTvY4M3JlH7OtHrWHBWOG%2FQ0P4LiFlKNnhglhBwg6tQWIbbfOXfDQtMqmKi%2BkUgpkviv1AHSefZg0ccM3iktsDuTuz7dkrc%2FyJAqKWF2MM4rSlM6mF6tSgWVwDBXQAgll%2FUBKgNXlMcdeR4YIzIY7gPAV4nfSQmeBrvg70%2BjW8OdXWoYgg6WNMEKPKp7W%2FyL8u1M0nrUIGFtDehvWU%2FsJHl6WYROVtdQ4dFVYN43jCM%2FgPzrkzmTx2OIPh%2Fmf3%2B%2FxM%2FBuXXD0%2B9v7sTTsNQ8lSo8E48HMq7IIi56cCHVyD2zwz3vFfPm4%2F85B3g3yvolsShCby5VL5Atc%2BcXVAzjftpAQidw0XnoD4xMmOywHtMkzChqYvrAmlpn%2BRYvxiVVJbY0DTcGVnsi8%2Bnp6fMs0UqaSyZfC8VRfaad2wuvwL88sn%2Bj4tNaEXDlAPQr18sCVKdmyNjFjS0s1lzQk3BcRAXFm1oFwvNwvySE%2BMLmj%2BsQGOqUBY%2B%2B4Ol2N5y8TjA5QP1yyJ0E%2Bsg46o4RL1MrhjmykdiWG06vpKpmfCucelpWuFQ7W7Pi%2FCCx3pIcV9fMWDl6pYNfHy0syDTu2sBsVJQcDf6HfuVtorwWNxXs1%2B%2FEb%2B2xw%2FVN%2F82zMWP6%2BDFZeYCbH7kc9M9EceGZ7efL7V9nJgJKsmInr0sbXMbNn5MGDvXxMRl5M50xxnAwv9XU5FYkcT2sbzSiB&X-Amz-Signature=8fd27563c5dc8e49b552bbe0d925ceed0fd2f9f6f1a68502d0fcb1a7d9d98d10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVACFZOA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCID4yJHw%2Bc32sasrUj46NMYTqk2woaW%2BDK1cmfSzgmtH2AiEAs1QnqofnGA0IQwF7tUkw2QiIsSgbhjzX2%2FrYVtAglaMq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJjjoWNrvn3TM9dyqSrcA8vYNYOSGu6ILDsFXwCejxfXaXrDPzgcTZ7wqObp8TW8sjICLb6r%2F%2B2x0vQuJyBbZRexqUJXO7ComyrO1rRBmXr38KnkGbcNS1cjM3VF734%2B3RwrEoetrIJsx4FRmZm1Zut%2B0jR%2FH0DmJWT3PSzHpYLVTvY4M3JlH7OtHrWHBWOG%2FQ0P4LiFlKNnhglhBwg6tQWIbbfOXfDQtMqmKi%2BkUgpkviv1AHSefZg0ccM3iktsDuTuz7dkrc%2FyJAqKWF2MM4rSlM6mF6tSgWVwDBXQAgll%2FUBKgNXlMcdeR4YIzIY7gPAV4nfSQmeBrvg70%2BjW8OdXWoYgg6WNMEKPKp7W%2FyL8u1M0nrUIGFtDehvWU%2FsJHl6WYROVtdQ4dFVYN43jCM%2FgPzrkzmTx2OIPh%2Fmf3%2B%2FxM%2FBuXXD0%2B9v7sTTsNQ8lSo8E48HMq7IIi56cCHVyD2zwz3vFfPm4%2F85B3g3yvolsShCby5VL5Atc%2BcXVAzjftpAQidw0XnoD4xMmOywHtMkzChqYvrAmlpn%2BRYvxiVVJbY0DTcGVnsi8%2Bnp6fMs0UqaSyZfC8VRfaad2wuvwL88sn%2Bj4tNaEXDlAPQr18sCVKdmyNjFjS0s1lzQk3BcRAXFm1oFwvNwvySE%2BMLmj%2BsQGOqUBY%2B%2B4Ol2N5y8TjA5QP1yyJ0E%2Bsg46o4RL1MrhjmykdiWG06vpKpmfCucelpWuFQ7W7Pi%2FCCx3pIcV9fMWDl6pYNfHy0syDTu2sBsVJQcDf6HfuVtorwWNxXs1%2B%2FEb%2B2xw%2FVN%2F82zMWP6%2BDFZeYCbH7kc9M9EceGZ7efL7V9nJgJKsmInr0sbXMbNn5MGDvXxMRl5M50xxnAwv9XU5FYkcT2sbzSiB&X-Amz-Signature=32d6f2991492e8db3e8631e2f79d573d13c0429d0ba8d08efc11f1687a52e6a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVACFZOA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCID4yJHw%2Bc32sasrUj46NMYTqk2woaW%2BDK1cmfSzgmtH2AiEAs1QnqofnGA0IQwF7tUkw2QiIsSgbhjzX2%2FrYVtAglaMq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJjjoWNrvn3TM9dyqSrcA8vYNYOSGu6ILDsFXwCejxfXaXrDPzgcTZ7wqObp8TW8sjICLb6r%2F%2B2x0vQuJyBbZRexqUJXO7ComyrO1rRBmXr38KnkGbcNS1cjM3VF734%2B3RwrEoetrIJsx4FRmZm1Zut%2B0jR%2FH0DmJWT3PSzHpYLVTvY4M3JlH7OtHrWHBWOG%2FQ0P4LiFlKNnhglhBwg6tQWIbbfOXfDQtMqmKi%2BkUgpkviv1AHSefZg0ccM3iktsDuTuz7dkrc%2FyJAqKWF2MM4rSlM6mF6tSgWVwDBXQAgll%2FUBKgNXlMcdeR4YIzIY7gPAV4nfSQmeBrvg70%2BjW8OdXWoYgg6WNMEKPKp7W%2FyL8u1M0nrUIGFtDehvWU%2FsJHl6WYROVtdQ4dFVYN43jCM%2FgPzrkzmTx2OIPh%2Fmf3%2B%2FxM%2FBuXXD0%2B9v7sTTsNQ8lSo8E48HMq7IIi56cCHVyD2zwz3vFfPm4%2F85B3g3yvolsShCby5VL5Atc%2BcXVAzjftpAQidw0XnoD4xMmOywHtMkzChqYvrAmlpn%2BRYvxiVVJbY0DTcGVnsi8%2Bnp6fMs0UqaSyZfC8VRfaad2wuvwL88sn%2Bj4tNaEXDlAPQr18sCVKdmyNjFjS0s1lzQk3BcRAXFm1oFwvNwvySE%2BMLmj%2BsQGOqUBY%2B%2B4Ol2N5y8TjA5QP1yyJ0E%2Bsg46o4RL1MrhjmykdiWG06vpKpmfCucelpWuFQ7W7Pi%2FCCx3pIcV9fMWDl6pYNfHy0syDTu2sBsVJQcDf6HfuVtorwWNxXs1%2B%2FEb%2B2xw%2FVN%2F82zMWP6%2BDFZeYCbH7kc9M9EceGZ7efL7V9nJgJKsmInr0sbXMbNn5MGDvXxMRl5M50xxnAwv9XU5FYkcT2sbzSiB&X-Amz-Signature=814bbae3dfa0389c63505b058b85704b2429e1dc606ed509d693f761199d5341&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVACFZOA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCID4yJHw%2Bc32sasrUj46NMYTqk2woaW%2BDK1cmfSzgmtH2AiEAs1QnqofnGA0IQwF7tUkw2QiIsSgbhjzX2%2FrYVtAglaMq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJjjoWNrvn3TM9dyqSrcA8vYNYOSGu6ILDsFXwCejxfXaXrDPzgcTZ7wqObp8TW8sjICLb6r%2F%2B2x0vQuJyBbZRexqUJXO7ComyrO1rRBmXr38KnkGbcNS1cjM3VF734%2B3RwrEoetrIJsx4FRmZm1Zut%2B0jR%2FH0DmJWT3PSzHpYLVTvY4M3JlH7OtHrWHBWOG%2FQ0P4LiFlKNnhglhBwg6tQWIbbfOXfDQtMqmKi%2BkUgpkviv1AHSefZg0ccM3iktsDuTuz7dkrc%2FyJAqKWF2MM4rSlM6mF6tSgWVwDBXQAgll%2FUBKgNXlMcdeR4YIzIY7gPAV4nfSQmeBrvg70%2BjW8OdXWoYgg6WNMEKPKp7W%2FyL8u1M0nrUIGFtDehvWU%2FsJHl6WYROVtdQ4dFVYN43jCM%2FgPzrkzmTx2OIPh%2Fmf3%2B%2FxM%2FBuXXD0%2B9v7sTTsNQ8lSo8E48HMq7IIi56cCHVyD2zwz3vFfPm4%2F85B3g3yvolsShCby5VL5Atc%2BcXVAzjftpAQidw0XnoD4xMmOywHtMkzChqYvrAmlpn%2BRYvxiVVJbY0DTcGVnsi8%2Bnp6fMs0UqaSyZfC8VRfaad2wuvwL88sn%2Bj4tNaEXDlAPQr18sCVKdmyNjFjS0s1lzQk3BcRAXFm1oFwvNwvySE%2BMLmj%2BsQGOqUBY%2B%2B4Ol2N5y8TjA5QP1yyJ0E%2Bsg46o4RL1MrhjmykdiWG06vpKpmfCucelpWuFQ7W7Pi%2FCCx3pIcV9fMWDl6pYNfHy0syDTu2sBsVJQcDf6HfuVtorwWNxXs1%2B%2FEb%2B2xw%2FVN%2F82zMWP6%2BDFZeYCbH7kc9M9EceGZ7efL7V9nJgJKsmInr0sbXMbNn5MGDvXxMRl5M50xxnAwv9XU5FYkcT2sbzSiB&X-Amz-Signature=4d47a2a015969edbe4acdf443f1a72acf7682559a5229f80143872d3ee068ba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVACFZOA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCID4yJHw%2Bc32sasrUj46NMYTqk2woaW%2BDK1cmfSzgmtH2AiEAs1QnqofnGA0IQwF7tUkw2QiIsSgbhjzX2%2FrYVtAglaMq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJjjoWNrvn3TM9dyqSrcA8vYNYOSGu6ILDsFXwCejxfXaXrDPzgcTZ7wqObp8TW8sjICLb6r%2F%2B2x0vQuJyBbZRexqUJXO7ComyrO1rRBmXr38KnkGbcNS1cjM3VF734%2B3RwrEoetrIJsx4FRmZm1Zut%2B0jR%2FH0DmJWT3PSzHpYLVTvY4M3JlH7OtHrWHBWOG%2FQ0P4LiFlKNnhglhBwg6tQWIbbfOXfDQtMqmKi%2BkUgpkviv1AHSefZg0ccM3iktsDuTuz7dkrc%2FyJAqKWF2MM4rSlM6mF6tSgWVwDBXQAgll%2FUBKgNXlMcdeR4YIzIY7gPAV4nfSQmeBrvg70%2BjW8OdXWoYgg6WNMEKPKp7W%2FyL8u1M0nrUIGFtDehvWU%2FsJHl6WYROVtdQ4dFVYN43jCM%2FgPzrkzmTx2OIPh%2Fmf3%2B%2FxM%2FBuXXD0%2B9v7sTTsNQ8lSo8E48HMq7IIi56cCHVyD2zwz3vFfPm4%2F85B3g3yvolsShCby5VL5Atc%2BcXVAzjftpAQidw0XnoD4xMmOywHtMkzChqYvrAmlpn%2BRYvxiVVJbY0DTcGVnsi8%2Bnp6fMs0UqaSyZfC8VRfaad2wuvwL88sn%2Bj4tNaEXDlAPQr18sCVKdmyNjFjS0s1lzQk3BcRAXFm1oFwvNwvySE%2BMLmj%2BsQGOqUBY%2B%2B4Ol2N5y8TjA5QP1yyJ0E%2Bsg46o4RL1MrhjmykdiWG06vpKpmfCucelpWuFQ7W7Pi%2FCCx3pIcV9fMWDl6pYNfHy0syDTu2sBsVJQcDf6HfuVtorwWNxXs1%2B%2FEb%2B2xw%2FVN%2F82zMWP6%2BDFZeYCbH7kc9M9EceGZ7efL7V9nJgJKsmInr0sbXMbNn5MGDvXxMRl5M50xxnAwv9XU5FYkcT2sbzSiB&X-Amz-Signature=0a8c0949119bb841c4e35694a027537c314057591837303c64e0610d8b9fca23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVACFZOA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCID4yJHw%2Bc32sasrUj46NMYTqk2woaW%2BDK1cmfSzgmtH2AiEAs1QnqofnGA0IQwF7tUkw2QiIsSgbhjzX2%2FrYVtAglaMq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJjjoWNrvn3TM9dyqSrcA8vYNYOSGu6ILDsFXwCejxfXaXrDPzgcTZ7wqObp8TW8sjICLb6r%2F%2B2x0vQuJyBbZRexqUJXO7ComyrO1rRBmXr38KnkGbcNS1cjM3VF734%2B3RwrEoetrIJsx4FRmZm1Zut%2B0jR%2FH0DmJWT3PSzHpYLVTvY4M3JlH7OtHrWHBWOG%2FQ0P4LiFlKNnhglhBwg6tQWIbbfOXfDQtMqmKi%2BkUgpkviv1AHSefZg0ccM3iktsDuTuz7dkrc%2FyJAqKWF2MM4rSlM6mF6tSgWVwDBXQAgll%2FUBKgNXlMcdeR4YIzIY7gPAV4nfSQmeBrvg70%2BjW8OdXWoYgg6WNMEKPKp7W%2FyL8u1M0nrUIGFtDehvWU%2FsJHl6WYROVtdQ4dFVYN43jCM%2FgPzrkzmTx2OIPh%2Fmf3%2B%2FxM%2FBuXXD0%2B9v7sTTsNQ8lSo8E48HMq7IIi56cCHVyD2zwz3vFfPm4%2F85B3g3yvolsShCby5VL5Atc%2BcXVAzjftpAQidw0XnoD4xMmOywHtMkzChqYvrAmlpn%2BRYvxiVVJbY0DTcGVnsi8%2Bnp6fMs0UqaSyZfC8VRfaad2wuvwL88sn%2Bj4tNaEXDlAPQr18sCVKdmyNjFjS0s1lzQk3BcRAXFm1oFwvNwvySE%2BMLmj%2BsQGOqUBY%2B%2B4Ol2N5y8TjA5QP1yyJ0E%2Bsg46o4RL1MrhjmykdiWG06vpKpmfCucelpWuFQ7W7Pi%2FCCx3pIcV9fMWDl6pYNfHy0syDTu2sBsVJQcDf6HfuVtorwWNxXs1%2B%2FEb%2B2xw%2FVN%2F82zMWP6%2BDFZeYCbH7kc9M9EceGZ7efL7V9nJgJKsmInr0sbXMbNn5MGDvXxMRl5M50xxnAwv9XU5FYkcT2sbzSiB&X-Amz-Signature=ec492b5d32c4cf2b0de277c373563b06ca737bb2b38b2a8ea93355ffb36df4e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVACFZOA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCID4yJHw%2Bc32sasrUj46NMYTqk2woaW%2BDK1cmfSzgmtH2AiEAs1QnqofnGA0IQwF7tUkw2QiIsSgbhjzX2%2FrYVtAglaMq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJjjoWNrvn3TM9dyqSrcA8vYNYOSGu6ILDsFXwCejxfXaXrDPzgcTZ7wqObp8TW8sjICLb6r%2F%2B2x0vQuJyBbZRexqUJXO7ComyrO1rRBmXr38KnkGbcNS1cjM3VF734%2B3RwrEoetrIJsx4FRmZm1Zut%2B0jR%2FH0DmJWT3PSzHpYLVTvY4M3JlH7OtHrWHBWOG%2FQ0P4LiFlKNnhglhBwg6tQWIbbfOXfDQtMqmKi%2BkUgpkviv1AHSefZg0ccM3iktsDuTuz7dkrc%2FyJAqKWF2MM4rSlM6mF6tSgWVwDBXQAgll%2FUBKgNXlMcdeR4YIzIY7gPAV4nfSQmeBrvg70%2BjW8OdXWoYgg6WNMEKPKp7W%2FyL8u1M0nrUIGFtDehvWU%2FsJHl6WYROVtdQ4dFVYN43jCM%2FgPzrkzmTx2OIPh%2Fmf3%2B%2FxM%2FBuXXD0%2B9v7sTTsNQ8lSo8E48HMq7IIi56cCHVyD2zwz3vFfPm4%2F85B3g3yvolsShCby5VL5Atc%2BcXVAzjftpAQidw0XnoD4xMmOywHtMkzChqYvrAmlpn%2BRYvxiVVJbY0DTcGVnsi8%2Bnp6fMs0UqaSyZfC8VRfaad2wuvwL88sn%2Bj4tNaEXDlAPQr18sCVKdmyNjFjS0s1lzQk3BcRAXFm1oFwvNwvySE%2BMLmj%2BsQGOqUBY%2B%2B4Ol2N5y8TjA5QP1yyJ0E%2Bsg46o4RL1MrhjmykdiWG06vpKpmfCucelpWuFQ7W7Pi%2FCCx3pIcV9fMWDl6pYNfHy0syDTu2sBsVJQcDf6HfuVtorwWNxXs1%2B%2FEb%2B2xw%2FVN%2F82zMWP6%2BDFZeYCbH7kc9M9EceGZ7efL7V9nJgJKsmInr0sbXMbNn5MGDvXxMRl5M50xxnAwv9XU5FYkcT2sbzSiB&X-Amz-Signature=d2c219ea25eca1175a0d824e34f1f8be16d61b882f558cae18ef34d1a712350b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVACFZOA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCID4yJHw%2Bc32sasrUj46NMYTqk2woaW%2BDK1cmfSzgmtH2AiEAs1QnqofnGA0IQwF7tUkw2QiIsSgbhjzX2%2FrYVtAglaMq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJjjoWNrvn3TM9dyqSrcA8vYNYOSGu6ILDsFXwCejxfXaXrDPzgcTZ7wqObp8TW8sjICLb6r%2F%2B2x0vQuJyBbZRexqUJXO7ComyrO1rRBmXr38KnkGbcNS1cjM3VF734%2B3RwrEoetrIJsx4FRmZm1Zut%2B0jR%2FH0DmJWT3PSzHpYLVTvY4M3JlH7OtHrWHBWOG%2FQ0P4LiFlKNnhglhBwg6tQWIbbfOXfDQtMqmKi%2BkUgpkviv1AHSefZg0ccM3iktsDuTuz7dkrc%2FyJAqKWF2MM4rSlM6mF6tSgWVwDBXQAgll%2FUBKgNXlMcdeR4YIzIY7gPAV4nfSQmeBrvg70%2BjW8OdXWoYgg6WNMEKPKp7W%2FyL8u1M0nrUIGFtDehvWU%2FsJHl6WYROVtdQ4dFVYN43jCM%2FgPzrkzmTx2OIPh%2Fmf3%2B%2FxM%2FBuXXD0%2B9v7sTTsNQ8lSo8E48HMq7IIi56cCHVyD2zwz3vFfPm4%2F85B3g3yvolsShCby5VL5Atc%2BcXVAzjftpAQidw0XnoD4xMmOywHtMkzChqYvrAmlpn%2BRYvxiVVJbY0DTcGVnsi8%2Bnp6fMs0UqaSyZfC8VRfaad2wuvwL88sn%2Bj4tNaEXDlAPQr18sCVKdmyNjFjS0s1lzQk3BcRAXFm1oFwvNwvySE%2BMLmj%2BsQGOqUBY%2B%2B4Ol2N5y8TjA5QP1yyJ0E%2Bsg46o4RL1MrhjmykdiWG06vpKpmfCucelpWuFQ7W7Pi%2FCCx3pIcV9fMWDl6pYNfHy0syDTu2sBsVJQcDf6HfuVtorwWNxXs1%2B%2FEb%2B2xw%2FVN%2F82zMWP6%2BDFZeYCbH7kc9M9EceGZ7efL7V9nJgJKsmInr0sbXMbNn5MGDvXxMRl5M50xxnAwv9XU5FYkcT2sbzSiB&X-Amz-Signature=564a3dfad218840b52243e95b3404e2b295e11e6133664855886cb839df1f317&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVACFZOA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T024508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCID4yJHw%2Bc32sasrUj46NMYTqk2woaW%2BDK1cmfSzgmtH2AiEAs1QnqofnGA0IQwF7tUkw2QiIsSgbhjzX2%2FrYVtAglaMq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJjjoWNrvn3TM9dyqSrcA8vYNYOSGu6ILDsFXwCejxfXaXrDPzgcTZ7wqObp8TW8sjICLb6r%2F%2B2x0vQuJyBbZRexqUJXO7ComyrO1rRBmXr38KnkGbcNS1cjM3VF734%2B3RwrEoetrIJsx4FRmZm1Zut%2B0jR%2FH0DmJWT3PSzHpYLVTvY4M3JlH7OtHrWHBWOG%2FQ0P4LiFlKNnhglhBwg6tQWIbbfOXfDQtMqmKi%2BkUgpkviv1AHSefZg0ccM3iktsDuTuz7dkrc%2FyJAqKWF2MM4rSlM6mF6tSgWVwDBXQAgll%2FUBKgNXlMcdeR4YIzIY7gPAV4nfSQmeBrvg70%2BjW8OdXWoYgg6WNMEKPKp7W%2FyL8u1M0nrUIGFtDehvWU%2FsJHl6WYROVtdQ4dFVYN43jCM%2FgPzrkzmTx2OIPh%2Fmf3%2B%2FxM%2FBuXXD0%2B9v7sTTsNQ8lSo8E48HMq7IIi56cCHVyD2zwz3vFfPm4%2F85B3g3yvolsShCby5VL5Atc%2BcXVAzjftpAQidw0XnoD4xMmOywHtMkzChqYvrAmlpn%2BRYvxiVVJbY0DTcGVnsi8%2Bnp6fMs0UqaSyZfC8VRfaad2wuvwL88sn%2Bj4tNaEXDlAPQr18sCVKdmyNjFjS0s1lzQk3BcRAXFm1oFwvNwvySE%2BMLmj%2BsQGOqUBY%2B%2B4Ol2N5y8TjA5QP1yyJ0E%2Bsg46o4RL1MrhjmykdiWG06vpKpmfCucelpWuFQ7W7Pi%2FCCx3pIcV9fMWDl6pYNfHy0syDTu2sBsVJQcDf6HfuVtorwWNxXs1%2B%2FEb%2B2xw%2FVN%2F82zMWP6%2BDFZeYCbH7kc9M9EceGZ7efL7V9nJgJKsmInr0sbXMbNn5MGDvXxMRl5M50xxnAwv9XU5FYkcT2sbzSiB&X-Amz-Signature=814bbae3dfa0389c63505b058b85704b2429e1dc606ed509d693f761199d5341&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
