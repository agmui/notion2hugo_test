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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4JV3SQH%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCICR6qQVl%2BH8it25lG5Cm1J0KxjPEfglscU81RCxYrMTyAiArR92OP39wxKaGHMBXorRKEwGMKjzrwIvzhIZ1R%2BziKCr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMnkUDQbSeS2%2FB2ajVKtwDXc1oC40IsoPc1vxv9mirKopt6JyBWeFMJwuW9WJbf1HtJoLQFFsO2nx5RiJa392uNEyo9T4AIbREBCIe5FVpdmVtYNjVae43yvNsZgmUF4%2FnXiuU0k%2BvDj2n6KoEWEui3myLhFiuBF6Hoas33FLj%2BHHxJxpF%2BNCh0XTtHSb32P6urcnC9W4H2mrlwUhSqy8B2vJkQzaW6JFODr28xf4zUF1R%2BXNLUOY8Tsgu2XE717QDeuRpfMbnJfXEyf6oc%2Bz4b6x5nKcbbt8lVfKahU8xxO9PAsPFTqhFvzUU2CZk57LgyP05naj6FqF6CBo0wGaGHPW5M7NBcjb7lSqm7OxyaPzHKGmvm5JWB8cKy7xMRYcRR1%2FfdGU1tATGv838VwCYdNLC9zbaHyRjjSOThIP2c8yIt%2BOeTRMwcjCbPnruSrpyB9SSl%2FcH90jNNw4XSBrRFGQhCB3lRugSAzYF4dxrjCM2sKQgpsRu9%2BQiMD41cctZTGDqjxXDiUDmjAcNWQKHc1d1PcMoy08uETGj6MF%2FwbMu3tcdqIsx7zfoEm0HJIQPgrS0oZjGPBRnizzX9Zi0zRogrPlOI8DfmRcjwsgsc7hcse7F1FEeNccGSeziME2BzKBwQY5J7mKKgVwwjPTExAY6pgHIPE2w3vRxwvfn9bRTop7bsa%2FgRtvWm3qWJCbFvtzfsxxqa7%2BR6Jf2QH73XXWvOG6Tndp6oNKapNbIzuZkVg5Ps7b%2BuNP0AMuqzwKJ%2F4JXOe85E85isl3hlzAI9Iggwu7GaxNsJ%2Foii0vDfnDNsKLtHK2OnEY03%2BcFI5CYGUIcgcrSeHKKrO15LQX%2FaySvBfKatJqqAPgxXOowLmofuaHpknxkpZcT&X-Amz-Signature=9e0b91987d4d2a8ff565374d5759492cf4e13b2856222e24416883a1c03563d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZRMFX76%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIBDNDu5FHqNgZ1xFv3jDJUNR9jvHjUbNi4TzoonwA6t9AiEAgljCeiaNYDfyKUGP%2FYZZBVsOdQnX08Y1P9lhs0JrYFAq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDCWrNgs9lMGyFQtp1yrcA4EaGkAu3bClQyoENkolHxjdh9%2B4uJjt2o%2Bjn3auOhspRUwRu2l51dTCD7AVAw5j9UyDjZDgfXi9wVbUTPv9AyzE1uPfJBDQFG9Z5y8AqY26C4HHy0N8QCKPIN9UsNasjChzYQ1seEuBhcpOTfqvuQywvhMNkctyki2b1yDxwA8sEYnjPAI%2Bj66ghlPV0EeH7mUj5kROhlMKihaLeHi3UVskXV2DUqgahdOMcM9K5QUkB0n3LAImlGFymaVVicJXC%2BJUQZCypmQzY3847769bAbT5VjQc2r0fL3%2BkYoborWqjrwGb%2B%2FcpU8tS2Xyu%2FwcViofrIFU%2BQZYKystRNckUk10JZYODGJ4xY57kdoVniUy7qsTLdwoGZYqMuK97VAZgxyyTsgMAUPQthlRF3b%2BX1ql%2FE122HxSgXDXv855PXVoMsoNuE2KMvB83J6kAh9LnwDXksgyGAVUlSPzU6vs0TaELPAVB%2F3lWTNR0gdXGhLUd%2BrkRsOG9A7NdyaQmqbmIso7%2BcRTTCx%2BFeE95Vsm6SNLwjP7%2Bq2F%2FZ3WXS%2BYz357OghOiESg9dcjaVumBMuw5zLJNxRM64eeC3pvoH4UiTfpvaQ5EhYWby1glDVxA%2F24du5YnJ%2BwiKHY9cDJMIn0xMQGOqUB3JlQJMkrst%2BKWxtC7%2FwqCk7f3jOkTCBMjCYh%2BKDr1Xh%2Bm%2FIT%2FW%2BRCHaazoXrqkTWntobGv0575P%2FcpZZ2iiI8sVV8WHrXnfgB5dC79EWy63mZRwxMzcxJVRHIqClZQoPkEkpLF56nArBZphc%2Bg3u0ubHyW7j8CS9bJH0NQy1cMwWPnaAengTsMnbrfM3FOJSWCq7PYJEokDPIe0wa87vuYjZG3ct&X-Amz-Signature=d65bd9c3b1c22950a7eebc0c6f617e00f36cef1d38f38fc01ef07e1ddd6ab7a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZRMFX76%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIBDNDu5FHqNgZ1xFv3jDJUNR9jvHjUbNi4TzoonwA6t9AiEAgljCeiaNYDfyKUGP%2FYZZBVsOdQnX08Y1P9lhs0JrYFAq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDCWrNgs9lMGyFQtp1yrcA4EaGkAu3bClQyoENkolHxjdh9%2B4uJjt2o%2Bjn3auOhspRUwRu2l51dTCD7AVAw5j9UyDjZDgfXi9wVbUTPv9AyzE1uPfJBDQFG9Z5y8AqY26C4HHy0N8QCKPIN9UsNasjChzYQ1seEuBhcpOTfqvuQywvhMNkctyki2b1yDxwA8sEYnjPAI%2Bj66ghlPV0EeH7mUj5kROhlMKihaLeHi3UVskXV2DUqgahdOMcM9K5QUkB0n3LAImlGFymaVVicJXC%2BJUQZCypmQzY3847769bAbT5VjQc2r0fL3%2BkYoborWqjrwGb%2B%2FcpU8tS2Xyu%2FwcViofrIFU%2BQZYKystRNckUk10JZYODGJ4xY57kdoVniUy7qsTLdwoGZYqMuK97VAZgxyyTsgMAUPQthlRF3b%2BX1ql%2FE122HxSgXDXv855PXVoMsoNuE2KMvB83J6kAh9LnwDXksgyGAVUlSPzU6vs0TaELPAVB%2F3lWTNR0gdXGhLUd%2BrkRsOG9A7NdyaQmqbmIso7%2BcRTTCx%2BFeE95Vsm6SNLwjP7%2Bq2F%2FZ3WXS%2BYz357OghOiESg9dcjaVumBMuw5zLJNxRM64eeC3pvoH4UiTfpvaQ5EhYWby1glDVxA%2F24du5YnJ%2BwiKHY9cDJMIn0xMQGOqUB3JlQJMkrst%2BKWxtC7%2FwqCk7f3jOkTCBMjCYh%2BKDr1Xh%2Bm%2FIT%2FW%2BRCHaazoXrqkTWntobGv0575P%2FcpZZ2iiI8sVV8WHrXnfgB5dC79EWy63mZRwxMzcxJVRHIqClZQoPkEkpLF56nArBZphc%2Bg3u0ubHyW7j8CS9bJH0NQy1cMwWPnaAengTsMnbrfM3FOJSWCq7PYJEokDPIe0wa87vuYjZG3ct&X-Amz-Signature=1277d14bcbde123788bd580afad9969e656b059453847c55f6dcab7acecad37a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZRMFX76%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIBDNDu5FHqNgZ1xFv3jDJUNR9jvHjUbNi4TzoonwA6t9AiEAgljCeiaNYDfyKUGP%2FYZZBVsOdQnX08Y1P9lhs0JrYFAq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDCWrNgs9lMGyFQtp1yrcA4EaGkAu3bClQyoENkolHxjdh9%2B4uJjt2o%2Bjn3auOhspRUwRu2l51dTCD7AVAw5j9UyDjZDgfXi9wVbUTPv9AyzE1uPfJBDQFG9Z5y8AqY26C4HHy0N8QCKPIN9UsNasjChzYQ1seEuBhcpOTfqvuQywvhMNkctyki2b1yDxwA8sEYnjPAI%2Bj66ghlPV0EeH7mUj5kROhlMKihaLeHi3UVskXV2DUqgahdOMcM9K5QUkB0n3LAImlGFymaVVicJXC%2BJUQZCypmQzY3847769bAbT5VjQc2r0fL3%2BkYoborWqjrwGb%2B%2FcpU8tS2Xyu%2FwcViofrIFU%2BQZYKystRNckUk10JZYODGJ4xY57kdoVniUy7qsTLdwoGZYqMuK97VAZgxyyTsgMAUPQthlRF3b%2BX1ql%2FE122HxSgXDXv855PXVoMsoNuE2KMvB83J6kAh9LnwDXksgyGAVUlSPzU6vs0TaELPAVB%2F3lWTNR0gdXGhLUd%2BrkRsOG9A7NdyaQmqbmIso7%2BcRTTCx%2BFeE95Vsm6SNLwjP7%2Bq2F%2FZ3WXS%2BYz357OghOiESg9dcjaVumBMuw5zLJNxRM64eeC3pvoH4UiTfpvaQ5EhYWby1glDVxA%2F24du5YnJ%2BwiKHY9cDJMIn0xMQGOqUB3JlQJMkrst%2BKWxtC7%2FwqCk7f3jOkTCBMjCYh%2BKDr1Xh%2Bm%2FIT%2FW%2BRCHaazoXrqkTWntobGv0575P%2FcpZZ2iiI8sVV8WHrXnfgB5dC79EWy63mZRwxMzcxJVRHIqClZQoPkEkpLF56nArBZphc%2Bg3u0ubHyW7j8CS9bJH0NQy1cMwWPnaAengTsMnbrfM3FOJSWCq7PYJEokDPIe0wa87vuYjZG3ct&X-Amz-Signature=2cdbd5f75f0bd4bbf60cbf808523746bddf3518cb0f3d328d0bc0c2d6d457bee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZRMFX76%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIBDNDu5FHqNgZ1xFv3jDJUNR9jvHjUbNi4TzoonwA6t9AiEAgljCeiaNYDfyKUGP%2FYZZBVsOdQnX08Y1P9lhs0JrYFAq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDCWrNgs9lMGyFQtp1yrcA4EaGkAu3bClQyoENkolHxjdh9%2B4uJjt2o%2Bjn3auOhspRUwRu2l51dTCD7AVAw5j9UyDjZDgfXi9wVbUTPv9AyzE1uPfJBDQFG9Z5y8AqY26C4HHy0N8QCKPIN9UsNasjChzYQ1seEuBhcpOTfqvuQywvhMNkctyki2b1yDxwA8sEYnjPAI%2Bj66ghlPV0EeH7mUj5kROhlMKihaLeHi3UVskXV2DUqgahdOMcM9K5QUkB0n3LAImlGFymaVVicJXC%2BJUQZCypmQzY3847769bAbT5VjQc2r0fL3%2BkYoborWqjrwGb%2B%2FcpU8tS2Xyu%2FwcViofrIFU%2BQZYKystRNckUk10JZYODGJ4xY57kdoVniUy7qsTLdwoGZYqMuK97VAZgxyyTsgMAUPQthlRF3b%2BX1ql%2FE122HxSgXDXv855PXVoMsoNuE2KMvB83J6kAh9LnwDXksgyGAVUlSPzU6vs0TaELPAVB%2F3lWTNR0gdXGhLUd%2BrkRsOG9A7NdyaQmqbmIso7%2BcRTTCx%2BFeE95Vsm6SNLwjP7%2Bq2F%2FZ3WXS%2BYz357OghOiESg9dcjaVumBMuw5zLJNxRM64eeC3pvoH4UiTfpvaQ5EhYWby1glDVxA%2F24du5YnJ%2BwiKHY9cDJMIn0xMQGOqUB3JlQJMkrst%2BKWxtC7%2FwqCk7f3jOkTCBMjCYh%2BKDr1Xh%2Bm%2FIT%2FW%2BRCHaazoXrqkTWntobGv0575P%2FcpZZ2iiI8sVV8WHrXnfgB5dC79EWy63mZRwxMzcxJVRHIqClZQoPkEkpLF56nArBZphc%2Bg3u0ubHyW7j8CS9bJH0NQy1cMwWPnaAengTsMnbrfM3FOJSWCq7PYJEokDPIe0wa87vuYjZG3ct&X-Amz-Signature=ceb69b4c7146dd89b5d27fb76e890332f7e758b50548311449e64d2f71b12b9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZRMFX76%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIBDNDu5FHqNgZ1xFv3jDJUNR9jvHjUbNi4TzoonwA6t9AiEAgljCeiaNYDfyKUGP%2FYZZBVsOdQnX08Y1P9lhs0JrYFAq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDCWrNgs9lMGyFQtp1yrcA4EaGkAu3bClQyoENkolHxjdh9%2B4uJjt2o%2Bjn3auOhspRUwRu2l51dTCD7AVAw5j9UyDjZDgfXi9wVbUTPv9AyzE1uPfJBDQFG9Z5y8AqY26C4HHy0N8QCKPIN9UsNasjChzYQ1seEuBhcpOTfqvuQywvhMNkctyki2b1yDxwA8sEYnjPAI%2Bj66ghlPV0EeH7mUj5kROhlMKihaLeHi3UVskXV2DUqgahdOMcM9K5QUkB0n3LAImlGFymaVVicJXC%2BJUQZCypmQzY3847769bAbT5VjQc2r0fL3%2BkYoborWqjrwGb%2B%2FcpU8tS2Xyu%2FwcViofrIFU%2BQZYKystRNckUk10JZYODGJ4xY57kdoVniUy7qsTLdwoGZYqMuK97VAZgxyyTsgMAUPQthlRF3b%2BX1ql%2FE122HxSgXDXv855PXVoMsoNuE2KMvB83J6kAh9LnwDXksgyGAVUlSPzU6vs0TaELPAVB%2F3lWTNR0gdXGhLUd%2BrkRsOG9A7NdyaQmqbmIso7%2BcRTTCx%2BFeE95Vsm6SNLwjP7%2Bq2F%2FZ3WXS%2BYz357OghOiESg9dcjaVumBMuw5zLJNxRM64eeC3pvoH4UiTfpvaQ5EhYWby1glDVxA%2F24du5YnJ%2BwiKHY9cDJMIn0xMQGOqUB3JlQJMkrst%2BKWxtC7%2FwqCk7f3jOkTCBMjCYh%2BKDr1Xh%2Bm%2FIT%2FW%2BRCHaazoXrqkTWntobGv0575P%2FcpZZ2iiI8sVV8WHrXnfgB5dC79EWy63mZRwxMzcxJVRHIqClZQoPkEkpLF56nArBZphc%2Bg3u0ubHyW7j8CS9bJH0NQy1cMwWPnaAengTsMnbrfM3FOJSWCq7PYJEokDPIe0wa87vuYjZG3ct&X-Amz-Signature=51e25880db5d6e3a94e2ffc3745d63b2bafcb3d0aeb7125a4eb0e0e2f0c4ae33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZRMFX76%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIBDNDu5FHqNgZ1xFv3jDJUNR9jvHjUbNi4TzoonwA6t9AiEAgljCeiaNYDfyKUGP%2FYZZBVsOdQnX08Y1P9lhs0JrYFAq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDCWrNgs9lMGyFQtp1yrcA4EaGkAu3bClQyoENkolHxjdh9%2B4uJjt2o%2Bjn3auOhspRUwRu2l51dTCD7AVAw5j9UyDjZDgfXi9wVbUTPv9AyzE1uPfJBDQFG9Z5y8AqY26C4HHy0N8QCKPIN9UsNasjChzYQ1seEuBhcpOTfqvuQywvhMNkctyki2b1yDxwA8sEYnjPAI%2Bj66ghlPV0EeH7mUj5kROhlMKihaLeHi3UVskXV2DUqgahdOMcM9K5QUkB0n3LAImlGFymaVVicJXC%2BJUQZCypmQzY3847769bAbT5VjQc2r0fL3%2BkYoborWqjrwGb%2B%2FcpU8tS2Xyu%2FwcViofrIFU%2BQZYKystRNckUk10JZYODGJ4xY57kdoVniUy7qsTLdwoGZYqMuK97VAZgxyyTsgMAUPQthlRF3b%2BX1ql%2FE122HxSgXDXv855PXVoMsoNuE2KMvB83J6kAh9LnwDXksgyGAVUlSPzU6vs0TaELPAVB%2F3lWTNR0gdXGhLUd%2BrkRsOG9A7NdyaQmqbmIso7%2BcRTTCx%2BFeE95Vsm6SNLwjP7%2Bq2F%2FZ3WXS%2BYz357OghOiESg9dcjaVumBMuw5zLJNxRM64eeC3pvoH4UiTfpvaQ5EhYWby1glDVxA%2F24du5YnJ%2BwiKHY9cDJMIn0xMQGOqUB3JlQJMkrst%2BKWxtC7%2FwqCk7f3jOkTCBMjCYh%2BKDr1Xh%2Bm%2FIT%2FW%2BRCHaazoXrqkTWntobGv0575P%2FcpZZ2iiI8sVV8WHrXnfgB5dC79EWy63mZRwxMzcxJVRHIqClZQoPkEkpLF56nArBZphc%2Bg3u0ubHyW7j8CS9bJH0NQy1cMwWPnaAengTsMnbrfM3FOJSWCq7PYJEokDPIe0wa87vuYjZG3ct&X-Amz-Signature=2003e346b03a49d500ec1df861d498991f4ac6efe07715c55e7b3a5b1a4f2762&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZRMFX76%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIBDNDu5FHqNgZ1xFv3jDJUNR9jvHjUbNi4TzoonwA6t9AiEAgljCeiaNYDfyKUGP%2FYZZBVsOdQnX08Y1P9lhs0JrYFAq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDCWrNgs9lMGyFQtp1yrcA4EaGkAu3bClQyoENkolHxjdh9%2B4uJjt2o%2Bjn3auOhspRUwRu2l51dTCD7AVAw5j9UyDjZDgfXi9wVbUTPv9AyzE1uPfJBDQFG9Z5y8AqY26C4HHy0N8QCKPIN9UsNasjChzYQ1seEuBhcpOTfqvuQywvhMNkctyki2b1yDxwA8sEYnjPAI%2Bj66ghlPV0EeH7mUj5kROhlMKihaLeHi3UVskXV2DUqgahdOMcM9K5QUkB0n3LAImlGFymaVVicJXC%2BJUQZCypmQzY3847769bAbT5VjQc2r0fL3%2BkYoborWqjrwGb%2B%2FcpU8tS2Xyu%2FwcViofrIFU%2BQZYKystRNckUk10JZYODGJ4xY57kdoVniUy7qsTLdwoGZYqMuK97VAZgxyyTsgMAUPQthlRF3b%2BX1ql%2FE122HxSgXDXv855PXVoMsoNuE2KMvB83J6kAh9LnwDXksgyGAVUlSPzU6vs0TaELPAVB%2F3lWTNR0gdXGhLUd%2BrkRsOG9A7NdyaQmqbmIso7%2BcRTTCx%2BFeE95Vsm6SNLwjP7%2Bq2F%2FZ3WXS%2BYz357OghOiESg9dcjaVumBMuw5zLJNxRM64eeC3pvoH4UiTfpvaQ5EhYWby1glDVxA%2F24du5YnJ%2BwiKHY9cDJMIn0xMQGOqUB3JlQJMkrst%2BKWxtC7%2FwqCk7f3jOkTCBMjCYh%2BKDr1Xh%2Bm%2FIT%2FW%2BRCHaazoXrqkTWntobGv0575P%2FcpZZ2iiI8sVV8WHrXnfgB5dC79EWy63mZRwxMzcxJVRHIqClZQoPkEkpLF56nArBZphc%2Bg3u0ubHyW7j8CS9bJH0NQy1cMwWPnaAengTsMnbrfM3FOJSWCq7PYJEokDPIe0wa87vuYjZG3ct&X-Amz-Signature=f14ee5e507076f16a4bcace71e3009528f5b1132a85116e4e6ff841e991ad8c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZRMFX76%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIBDNDu5FHqNgZ1xFv3jDJUNR9jvHjUbNi4TzoonwA6t9AiEAgljCeiaNYDfyKUGP%2FYZZBVsOdQnX08Y1P9lhs0JrYFAq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDCWrNgs9lMGyFQtp1yrcA4EaGkAu3bClQyoENkolHxjdh9%2B4uJjt2o%2Bjn3auOhspRUwRu2l51dTCD7AVAw5j9UyDjZDgfXi9wVbUTPv9AyzE1uPfJBDQFG9Z5y8AqY26C4HHy0N8QCKPIN9UsNasjChzYQ1seEuBhcpOTfqvuQywvhMNkctyki2b1yDxwA8sEYnjPAI%2Bj66ghlPV0EeH7mUj5kROhlMKihaLeHi3UVskXV2DUqgahdOMcM9K5QUkB0n3LAImlGFymaVVicJXC%2BJUQZCypmQzY3847769bAbT5VjQc2r0fL3%2BkYoborWqjrwGb%2B%2FcpU8tS2Xyu%2FwcViofrIFU%2BQZYKystRNckUk10JZYODGJ4xY57kdoVniUy7qsTLdwoGZYqMuK97VAZgxyyTsgMAUPQthlRF3b%2BX1ql%2FE122HxSgXDXv855PXVoMsoNuE2KMvB83J6kAh9LnwDXksgyGAVUlSPzU6vs0TaELPAVB%2F3lWTNR0gdXGhLUd%2BrkRsOG9A7NdyaQmqbmIso7%2BcRTTCx%2BFeE95Vsm6SNLwjP7%2Bq2F%2FZ3WXS%2BYz357OghOiESg9dcjaVumBMuw5zLJNxRM64eeC3pvoH4UiTfpvaQ5EhYWby1glDVxA%2F24du5YnJ%2BwiKHY9cDJMIn0xMQGOqUB3JlQJMkrst%2BKWxtC7%2FwqCk7f3jOkTCBMjCYh%2BKDr1Xh%2Bm%2FIT%2FW%2BRCHaazoXrqkTWntobGv0575P%2FcpZZ2iiI8sVV8WHrXnfgB5dC79EWy63mZRwxMzcxJVRHIqClZQoPkEkpLF56nArBZphc%2Bg3u0ubHyW7j8CS9bJH0NQy1cMwWPnaAengTsMnbrfM3FOJSWCq7PYJEokDPIe0wa87vuYjZG3ct&X-Amz-Signature=77b0e556b016df05c319e5c1e68b4af679175b40dd3d875e7f1ce9b80af233f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZRMFX76%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIBDNDu5FHqNgZ1xFv3jDJUNR9jvHjUbNi4TzoonwA6t9AiEAgljCeiaNYDfyKUGP%2FYZZBVsOdQnX08Y1P9lhs0JrYFAq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDCWrNgs9lMGyFQtp1yrcA4EaGkAu3bClQyoENkolHxjdh9%2B4uJjt2o%2Bjn3auOhspRUwRu2l51dTCD7AVAw5j9UyDjZDgfXi9wVbUTPv9AyzE1uPfJBDQFG9Z5y8AqY26C4HHy0N8QCKPIN9UsNasjChzYQ1seEuBhcpOTfqvuQywvhMNkctyki2b1yDxwA8sEYnjPAI%2Bj66ghlPV0EeH7mUj5kROhlMKihaLeHi3UVskXV2DUqgahdOMcM9K5QUkB0n3LAImlGFymaVVicJXC%2BJUQZCypmQzY3847769bAbT5VjQc2r0fL3%2BkYoborWqjrwGb%2B%2FcpU8tS2Xyu%2FwcViofrIFU%2BQZYKystRNckUk10JZYODGJ4xY57kdoVniUy7qsTLdwoGZYqMuK97VAZgxyyTsgMAUPQthlRF3b%2BX1ql%2FE122HxSgXDXv855PXVoMsoNuE2KMvB83J6kAh9LnwDXksgyGAVUlSPzU6vs0TaELPAVB%2F3lWTNR0gdXGhLUd%2BrkRsOG9A7NdyaQmqbmIso7%2BcRTTCx%2BFeE95Vsm6SNLwjP7%2Bq2F%2FZ3WXS%2BYz357OghOiESg9dcjaVumBMuw5zLJNxRM64eeC3pvoH4UiTfpvaQ5EhYWby1glDVxA%2F24du5YnJ%2BwiKHY9cDJMIn0xMQGOqUB3JlQJMkrst%2BKWxtC7%2FwqCk7f3jOkTCBMjCYh%2BKDr1Xh%2Bm%2FIT%2FW%2BRCHaazoXrqkTWntobGv0575P%2FcpZZ2iiI8sVV8WHrXnfgB5dC79EWy63mZRwxMzcxJVRHIqClZQoPkEkpLF56nArBZphc%2Bg3u0ubHyW7j8CS9bJH0NQy1cMwWPnaAengTsMnbrfM3FOJSWCq7PYJEokDPIe0wa87vuYjZG3ct&X-Amz-Signature=e39c5f6419194fb9841c5040e8494c036042e3c0323f3a7faaef457f628c1af8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZRMFX76%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T025819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIBDNDu5FHqNgZ1xFv3jDJUNR9jvHjUbNi4TzoonwA6t9AiEAgljCeiaNYDfyKUGP%2FYZZBVsOdQnX08Y1P9lhs0JrYFAq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDCWrNgs9lMGyFQtp1yrcA4EaGkAu3bClQyoENkolHxjdh9%2B4uJjt2o%2Bjn3auOhspRUwRu2l51dTCD7AVAw5j9UyDjZDgfXi9wVbUTPv9AyzE1uPfJBDQFG9Z5y8AqY26C4HHy0N8QCKPIN9UsNasjChzYQ1seEuBhcpOTfqvuQywvhMNkctyki2b1yDxwA8sEYnjPAI%2Bj66ghlPV0EeH7mUj5kROhlMKihaLeHi3UVskXV2DUqgahdOMcM9K5QUkB0n3LAImlGFymaVVicJXC%2BJUQZCypmQzY3847769bAbT5VjQc2r0fL3%2BkYoborWqjrwGb%2B%2FcpU8tS2Xyu%2FwcViofrIFU%2BQZYKystRNckUk10JZYODGJ4xY57kdoVniUy7qsTLdwoGZYqMuK97VAZgxyyTsgMAUPQthlRF3b%2BX1ql%2FE122HxSgXDXv855PXVoMsoNuE2KMvB83J6kAh9LnwDXksgyGAVUlSPzU6vs0TaELPAVB%2F3lWTNR0gdXGhLUd%2BrkRsOG9A7NdyaQmqbmIso7%2BcRTTCx%2BFeE95Vsm6SNLwjP7%2Bq2F%2FZ3WXS%2BYz357OghOiESg9dcjaVumBMuw5zLJNxRM64eeC3pvoH4UiTfpvaQ5EhYWby1glDVxA%2F24du5YnJ%2BwiKHY9cDJMIn0xMQGOqUB3JlQJMkrst%2BKWxtC7%2FwqCk7f3jOkTCBMjCYh%2BKDr1Xh%2Bm%2FIT%2FW%2BRCHaazoXrqkTWntobGv0575P%2FcpZZ2iiI8sVV8WHrXnfgB5dC79EWy63mZRwxMzcxJVRHIqClZQoPkEkpLF56nArBZphc%2Bg3u0ubHyW7j8CS9bJH0NQy1cMwWPnaAengTsMnbrfM3FOJSWCq7PYJEokDPIe0wa87vuYjZG3ct&X-Amz-Signature=ceb69b4c7146dd89b5d27fb76e890332f7e758b50548311449e64d2f71b12b9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
