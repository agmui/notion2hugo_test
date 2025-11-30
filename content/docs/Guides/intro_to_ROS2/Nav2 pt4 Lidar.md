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
  <summary>{{< markdownify >}}What is Lidar?{{< /markdownify >}}</summary>
  
Lidar (light detection and ranging) is using lases to determine how far objects are.

TODO

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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCBVBSHV%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCjQXJes705MHgiaJp1xlP7VVLMHFGhIsLp86ZXb88khAIgbtzLaNp%2B%2Bf5UP%2FNgtMq7JQesyUQQhHGYYAU8cgCa2NIqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOnZ9%2F0ZLAbP0kqrMCrcA2UU4Hk7WWURCWP3bs3MQyoJ%2BD2l6%2Bl7TLu7MhnFfNJIXZBFDSKZ4HfTt0sH7h%2FUPbXhJ8QMz825D%2F6GA3MRahNTiKwxbLbqo2pSPknSqta2MyGcQuakcATCFovZsDqfu75r6%2FRJ1EZVhtS1V0pZKeFeNy%2Fi2k7%2FT0JPy9AR2%2BgR9bYRMq4PvRN9m1uHXW1peM7dTNg3aNa4SQGcChl1nWzUU2dSh4%2F7P2TZMMwaavcmGAIwTzktbvs%2BG%2FCZtrzF5CmHWB18R%2FIhHY%2BgH1s9iknei4yLDnbrsnI4fjLrkwS5eoGqI77NFZ3xVwYBRq53F9975ava4%2F4LXIazzoNlNEtWMZ%2F%2BzStxSBpfqqoV3facKGtYRdve9nTGuraZAzSBQAxXi9KNaX5JxsErrW6puXmL%2FJ9OHM7uLX71IPw3fzDZDpYOs49zfbeJoseeaL4KTKRZtmVjo4lXTVnsOvuAyYzoa5cfT8J6nCt4l1wngXWIffvWRGZqzRAXEDRZ1PgVdeDm37QoavY%2F073o5IEZyfbGjOAbEqx3UnoYgaPXTPGUC4QEkwY3KaGVZU%2FRO0l0nNmYRIqUxi4%2Bpf0YcQRpP7sFzfv8n7qAvaUCRXF7Nr53vHMWIQVLTMLR3xG9MN7PrckGOqUBa73fSNhdP%2BlsFf8U2oMBwmMTvOrHpel2KhtMrNkkGMSsBM%2Btmby5%2BAEmBrPBrbAdPph2pvGTT5sjbBLpbUogHOy5u8N5FJ7YJnat7ApOu%2F8nXhp%2Fotxs775%2B8N%2B6oQjEXvzCbTPwugzmIk19Pt4T7idzbieGQnl9riv6AwrVPF1p4Q0L7h4qy7iQhAqnAhgUe6qEXcHAbL4OakjjgQg9gU6xyeL7&X-Amz-Signature=0f0c9866f75aa35323f4624c524a4a5f7aa2a7c6b5c03f1f1bd7d3e5d01ec073&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQN7V3RI%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIGPlUTGsUudIjvvddWWs9hOIDfLUDv5M3hs907AGUtC%2FAiB5fz7N23IBAlfgNc%2B33BhvG6TI1OkKDDX3wVAunp6adiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1%2FDSZOQqPh1JGVUeKtwDzL2uhL9jLQPXpRxSeRr9QHV8USqMvU83%2FxT21oP0IHqdA%2FWitww4S%2FMYuw%2B3a7aO7SzzHbOib8dJMmXEF%2FJRD42wot9%2FpchKybf1kytDv21OSJexpt4EScaULtGvtCf5WioCHHDIG%2BEJPsv7tbPGaNe7eNqiYbqhPnps8g2OVOgD1eLUwMD24oolHjgL5eayJhlmfbC%2BqmHJleIDQlHZAkJvsYP%2BhmdAnWsuiut091EggG3WjX9fzeqkd0S7jkS7NmnR9EjLx2lJrfLac7jV37DF%2Bpogo43f1eEwome9NmZB2SDDzbQtzIu0D2%2BzFRBcGpfNVH7xVJufdRTfRmj9jWZWhaqB6HS%2BgJDKguA1IrX%2BIeMXnINncNEQT9i%2B4z0WL074gt2ZSo9TusYujq2AXkZpKMig3Hgxd%2Fg2zr5yctyjXJJ70l8J81Sic9ZFr8K2FiinEqvJh7JgfSz9JRDojZnQU%2F1KaiUwLpZ6DvW5q7ZOIXGJBiiqezgmHWnuwTZbR8ep7mTykRj1DJJgcmiksYSbDJmCNqT%2B3pm%2BDIlnMuszAEPzCKUseUHc48BkomW9NS8YbDXgKe3t5ZFPu8N19tj%2Bjb%2BtPdNz6cwU4%2BDb0NUSGS%2BZ1OcC6J%2F2Rh0witqtyQY6pgG4px4THpmsnOCGuZJ8PB%2FHqM5s6GyrfZGwBLbQYHMiDvK6Leu5JyhDkdf1UdEqu3Iise5m%2ByXWbFk%2FgHWmjrDiVynlOBjSpibeuIUNh2FA54lD898vcjkk%2BGqj3CzlRQWRaJrUf1QiVjCyg5%2FSQtJYEUDNzA6p%2BhJ340EQZTJDygTMmJUobt0f3XrPpF7zOiA8E5Uk3LcobACJkfb%2Bcnjq%2BvdbdZ%2Bj&X-Amz-Signature=69598f7fc5f12b8147babbb5f0d0b1d678963794968f526b7eb5f5c8b31e4390&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQN7V3RI%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIGPlUTGsUudIjvvddWWs9hOIDfLUDv5M3hs907AGUtC%2FAiB5fz7N23IBAlfgNc%2B33BhvG6TI1OkKDDX3wVAunp6adiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1%2FDSZOQqPh1JGVUeKtwDzL2uhL9jLQPXpRxSeRr9QHV8USqMvU83%2FxT21oP0IHqdA%2FWitww4S%2FMYuw%2B3a7aO7SzzHbOib8dJMmXEF%2FJRD42wot9%2FpchKybf1kytDv21OSJexpt4EScaULtGvtCf5WioCHHDIG%2BEJPsv7tbPGaNe7eNqiYbqhPnps8g2OVOgD1eLUwMD24oolHjgL5eayJhlmfbC%2BqmHJleIDQlHZAkJvsYP%2BhmdAnWsuiut091EggG3WjX9fzeqkd0S7jkS7NmnR9EjLx2lJrfLac7jV37DF%2Bpogo43f1eEwome9NmZB2SDDzbQtzIu0D2%2BzFRBcGpfNVH7xVJufdRTfRmj9jWZWhaqB6HS%2BgJDKguA1IrX%2BIeMXnINncNEQT9i%2B4z0WL074gt2ZSo9TusYujq2AXkZpKMig3Hgxd%2Fg2zr5yctyjXJJ70l8J81Sic9ZFr8K2FiinEqvJh7JgfSz9JRDojZnQU%2F1KaiUwLpZ6DvW5q7ZOIXGJBiiqezgmHWnuwTZbR8ep7mTykRj1DJJgcmiksYSbDJmCNqT%2B3pm%2BDIlnMuszAEPzCKUseUHc48BkomW9NS8YbDXgKe3t5ZFPu8N19tj%2Bjb%2BtPdNz6cwU4%2BDb0NUSGS%2BZ1OcC6J%2F2Rh0witqtyQY6pgG4px4THpmsnOCGuZJ8PB%2FHqM5s6GyrfZGwBLbQYHMiDvK6Leu5JyhDkdf1UdEqu3Iise5m%2ByXWbFk%2FgHWmjrDiVynlOBjSpibeuIUNh2FA54lD898vcjkk%2BGqj3CzlRQWRaJrUf1QiVjCyg5%2FSQtJYEUDNzA6p%2BhJ340EQZTJDygTMmJUobt0f3XrPpF7zOiA8E5Uk3LcobACJkfb%2Bcnjq%2BvdbdZ%2Bj&X-Amz-Signature=5f5a9fdc7740f623ca3fddb87d0e63b2fbf1a11b40caeee7a8a8340a6b4e396f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQN7V3RI%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIGPlUTGsUudIjvvddWWs9hOIDfLUDv5M3hs907AGUtC%2FAiB5fz7N23IBAlfgNc%2B33BhvG6TI1OkKDDX3wVAunp6adiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1%2FDSZOQqPh1JGVUeKtwDzL2uhL9jLQPXpRxSeRr9QHV8USqMvU83%2FxT21oP0IHqdA%2FWitww4S%2FMYuw%2B3a7aO7SzzHbOib8dJMmXEF%2FJRD42wot9%2FpchKybf1kytDv21OSJexpt4EScaULtGvtCf5WioCHHDIG%2BEJPsv7tbPGaNe7eNqiYbqhPnps8g2OVOgD1eLUwMD24oolHjgL5eayJhlmfbC%2BqmHJleIDQlHZAkJvsYP%2BhmdAnWsuiut091EggG3WjX9fzeqkd0S7jkS7NmnR9EjLx2lJrfLac7jV37DF%2Bpogo43f1eEwome9NmZB2SDDzbQtzIu0D2%2BzFRBcGpfNVH7xVJufdRTfRmj9jWZWhaqB6HS%2BgJDKguA1IrX%2BIeMXnINncNEQT9i%2B4z0WL074gt2ZSo9TusYujq2AXkZpKMig3Hgxd%2Fg2zr5yctyjXJJ70l8J81Sic9ZFr8K2FiinEqvJh7JgfSz9JRDojZnQU%2F1KaiUwLpZ6DvW5q7ZOIXGJBiiqezgmHWnuwTZbR8ep7mTykRj1DJJgcmiksYSbDJmCNqT%2B3pm%2BDIlnMuszAEPzCKUseUHc48BkomW9NS8YbDXgKe3t5ZFPu8N19tj%2Bjb%2BtPdNz6cwU4%2BDb0NUSGS%2BZ1OcC6J%2F2Rh0witqtyQY6pgG4px4THpmsnOCGuZJ8PB%2FHqM5s6GyrfZGwBLbQYHMiDvK6Leu5JyhDkdf1UdEqu3Iise5m%2ByXWbFk%2FgHWmjrDiVynlOBjSpibeuIUNh2FA54lD898vcjkk%2BGqj3CzlRQWRaJrUf1QiVjCyg5%2FSQtJYEUDNzA6p%2BhJ340EQZTJDygTMmJUobt0f3XrPpF7zOiA8E5Uk3LcobACJkfb%2Bcnjq%2BvdbdZ%2Bj&X-Amz-Signature=85febb119ad8921e9a5e2e4ae7f1edd706a60ab42aa38de29c8fc77ade657eba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQN7V3RI%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIGPlUTGsUudIjvvddWWs9hOIDfLUDv5M3hs907AGUtC%2FAiB5fz7N23IBAlfgNc%2B33BhvG6TI1OkKDDX3wVAunp6adiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1%2FDSZOQqPh1JGVUeKtwDzL2uhL9jLQPXpRxSeRr9QHV8USqMvU83%2FxT21oP0IHqdA%2FWitww4S%2FMYuw%2B3a7aO7SzzHbOib8dJMmXEF%2FJRD42wot9%2FpchKybf1kytDv21OSJexpt4EScaULtGvtCf5WioCHHDIG%2BEJPsv7tbPGaNe7eNqiYbqhPnps8g2OVOgD1eLUwMD24oolHjgL5eayJhlmfbC%2BqmHJleIDQlHZAkJvsYP%2BhmdAnWsuiut091EggG3WjX9fzeqkd0S7jkS7NmnR9EjLx2lJrfLac7jV37DF%2Bpogo43f1eEwome9NmZB2SDDzbQtzIu0D2%2BzFRBcGpfNVH7xVJufdRTfRmj9jWZWhaqB6HS%2BgJDKguA1IrX%2BIeMXnINncNEQT9i%2B4z0WL074gt2ZSo9TusYujq2AXkZpKMig3Hgxd%2Fg2zr5yctyjXJJ70l8J81Sic9ZFr8K2FiinEqvJh7JgfSz9JRDojZnQU%2F1KaiUwLpZ6DvW5q7ZOIXGJBiiqezgmHWnuwTZbR8ep7mTykRj1DJJgcmiksYSbDJmCNqT%2B3pm%2BDIlnMuszAEPzCKUseUHc48BkomW9NS8YbDXgKe3t5ZFPu8N19tj%2Bjb%2BtPdNz6cwU4%2BDb0NUSGS%2BZ1OcC6J%2F2Rh0witqtyQY6pgG4px4THpmsnOCGuZJ8PB%2FHqM5s6GyrfZGwBLbQYHMiDvK6Leu5JyhDkdf1UdEqu3Iise5m%2ByXWbFk%2FgHWmjrDiVynlOBjSpibeuIUNh2FA54lD898vcjkk%2BGqj3CzlRQWRaJrUf1QiVjCyg5%2FSQtJYEUDNzA6p%2BhJ340EQZTJDygTMmJUobt0f3XrPpF7zOiA8E5Uk3LcobACJkfb%2Bcnjq%2BvdbdZ%2Bj&X-Amz-Signature=822e497dea0a7c4bb774c64390eaf0653510777c875803c1e437f5a61558c6ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQN7V3RI%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIGPlUTGsUudIjvvddWWs9hOIDfLUDv5M3hs907AGUtC%2FAiB5fz7N23IBAlfgNc%2B33BhvG6TI1OkKDDX3wVAunp6adiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1%2FDSZOQqPh1JGVUeKtwDzL2uhL9jLQPXpRxSeRr9QHV8USqMvU83%2FxT21oP0IHqdA%2FWitww4S%2FMYuw%2B3a7aO7SzzHbOib8dJMmXEF%2FJRD42wot9%2FpchKybf1kytDv21OSJexpt4EScaULtGvtCf5WioCHHDIG%2BEJPsv7tbPGaNe7eNqiYbqhPnps8g2OVOgD1eLUwMD24oolHjgL5eayJhlmfbC%2BqmHJleIDQlHZAkJvsYP%2BhmdAnWsuiut091EggG3WjX9fzeqkd0S7jkS7NmnR9EjLx2lJrfLac7jV37DF%2Bpogo43f1eEwome9NmZB2SDDzbQtzIu0D2%2BzFRBcGpfNVH7xVJufdRTfRmj9jWZWhaqB6HS%2BgJDKguA1IrX%2BIeMXnINncNEQT9i%2B4z0WL074gt2ZSo9TusYujq2AXkZpKMig3Hgxd%2Fg2zr5yctyjXJJ70l8J81Sic9ZFr8K2FiinEqvJh7JgfSz9JRDojZnQU%2F1KaiUwLpZ6DvW5q7ZOIXGJBiiqezgmHWnuwTZbR8ep7mTykRj1DJJgcmiksYSbDJmCNqT%2B3pm%2BDIlnMuszAEPzCKUseUHc48BkomW9NS8YbDXgKe3t5ZFPu8N19tj%2Bjb%2BtPdNz6cwU4%2BDb0NUSGS%2BZ1OcC6J%2F2Rh0witqtyQY6pgG4px4THpmsnOCGuZJ8PB%2FHqM5s6GyrfZGwBLbQYHMiDvK6Leu5JyhDkdf1UdEqu3Iise5m%2ByXWbFk%2FgHWmjrDiVynlOBjSpibeuIUNh2FA54lD898vcjkk%2BGqj3CzlRQWRaJrUf1QiVjCyg5%2FSQtJYEUDNzA6p%2BhJ340EQZTJDygTMmJUobt0f3XrPpF7zOiA8E5Uk3LcobACJkfb%2Bcnjq%2BvdbdZ%2Bj&X-Amz-Signature=4b5befeadaacf577e3a3ee119580b27223aad2784432deeed622574c80488dd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQN7V3RI%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIGPlUTGsUudIjvvddWWs9hOIDfLUDv5M3hs907AGUtC%2FAiB5fz7N23IBAlfgNc%2B33BhvG6TI1OkKDDX3wVAunp6adiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1%2FDSZOQqPh1JGVUeKtwDzL2uhL9jLQPXpRxSeRr9QHV8USqMvU83%2FxT21oP0IHqdA%2FWitww4S%2FMYuw%2B3a7aO7SzzHbOib8dJMmXEF%2FJRD42wot9%2FpchKybf1kytDv21OSJexpt4EScaULtGvtCf5WioCHHDIG%2BEJPsv7tbPGaNe7eNqiYbqhPnps8g2OVOgD1eLUwMD24oolHjgL5eayJhlmfbC%2BqmHJleIDQlHZAkJvsYP%2BhmdAnWsuiut091EggG3WjX9fzeqkd0S7jkS7NmnR9EjLx2lJrfLac7jV37DF%2Bpogo43f1eEwome9NmZB2SDDzbQtzIu0D2%2BzFRBcGpfNVH7xVJufdRTfRmj9jWZWhaqB6HS%2BgJDKguA1IrX%2BIeMXnINncNEQT9i%2B4z0WL074gt2ZSo9TusYujq2AXkZpKMig3Hgxd%2Fg2zr5yctyjXJJ70l8J81Sic9ZFr8K2FiinEqvJh7JgfSz9JRDojZnQU%2F1KaiUwLpZ6DvW5q7ZOIXGJBiiqezgmHWnuwTZbR8ep7mTykRj1DJJgcmiksYSbDJmCNqT%2B3pm%2BDIlnMuszAEPzCKUseUHc48BkomW9NS8YbDXgKe3t5ZFPu8N19tj%2Bjb%2BtPdNz6cwU4%2BDb0NUSGS%2BZ1OcC6J%2F2Rh0witqtyQY6pgG4px4THpmsnOCGuZJ8PB%2FHqM5s6GyrfZGwBLbQYHMiDvK6Leu5JyhDkdf1UdEqu3Iise5m%2ByXWbFk%2FgHWmjrDiVynlOBjSpibeuIUNh2FA54lD898vcjkk%2BGqj3CzlRQWRaJrUf1QiVjCyg5%2FSQtJYEUDNzA6p%2BhJ340EQZTJDygTMmJUobt0f3XrPpF7zOiA8E5Uk3LcobACJkfb%2Bcnjq%2BvdbdZ%2Bj&X-Amz-Signature=c5b6f96fd9a9022c1232405ce564a5c46a257ff8e5d74c08dba63d9488c6d797&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQN7V3RI%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIGPlUTGsUudIjvvddWWs9hOIDfLUDv5M3hs907AGUtC%2FAiB5fz7N23IBAlfgNc%2B33BhvG6TI1OkKDDX3wVAunp6adiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1%2FDSZOQqPh1JGVUeKtwDzL2uhL9jLQPXpRxSeRr9QHV8USqMvU83%2FxT21oP0IHqdA%2FWitww4S%2FMYuw%2B3a7aO7SzzHbOib8dJMmXEF%2FJRD42wot9%2FpchKybf1kytDv21OSJexpt4EScaULtGvtCf5WioCHHDIG%2BEJPsv7tbPGaNe7eNqiYbqhPnps8g2OVOgD1eLUwMD24oolHjgL5eayJhlmfbC%2BqmHJleIDQlHZAkJvsYP%2BhmdAnWsuiut091EggG3WjX9fzeqkd0S7jkS7NmnR9EjLx2lJrfLac7jV37DF%2Bpogo43f1eEwome9NmZB2SDDzbQtzIu0D2%2BzFRBcGpfNVH7xVJufdRTfRmj9jWZWhaqB6HS%2BgJDKguA1IrX%2BIeMXnINncNEQT9i%2B4z0WL074gt2ZSo9TusYujq2AXkZpKMig3Hgxd%2Fg2zr5yctyjXJJ70l8J81Sic9ZFr8K2FiinEqvJh7JgfSz9JRDojZnQU%2F1KaiUwLpZ6DvW5q7ZOIXGJBiiqezgmHWnuwTZbR8ep7mTykRj1DJJgcmiksYSbDJmCNqT%2B3pm%2BDIlnMuszAEPzCKUseUHc48BkomW9NS8YbDXgKe3t5ZFPu8N19tj%2Bjb%2BtPdNz6cwU4%2BDb0NUSGS%2BZ1OcC6J%2F2Rh0witqtyQY6pgG4px4THpmsnOCGuZJ8PB%2FHqM5s6GyrfZGwBLbQYHMiDvK6Leu5JyhDkdf1UdEqu3Iise5m%2ByXWbFk%2FgHWmjrDiVynlOBjSpibeuIUNh2FA54lD898vcjkk%2BGqj3CzlRQWRaJrUf1QiVjCyg5%2FSQtJYEUDNzA6p%2BhJ340EQZTJDygTMmJUobt0f3XrPpF7zOiA8E5Uk3LcobACJkfb%2Bcnjq%2BvdbdZ%2Bj&X-Amz-Signature=66262b96b7afe99eb73f9f2355f30f0b17062c924ec85dad791325cbc470d7e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQN7V3RI%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIGPlUTGsUudIjvvddWWs9hOIDfLUDv5M3hs907AGUtC%2FAiB5fz7N23IBAlfgNc%2B33BhvG6TI1OkKDDX3wVAunp6adiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1%2FDSZOQqPh1JGVUeKtwDzL2uhL9jLQPXpRxSeRr9QHV8USqMvU83%2FxT21oP0IHqdA%2FWitww4S%2FMYuw%2B3a7aO7SzzHbOib8dJMmXEF%2FJRD42wot9%2FpchKybf1kytDv21OSJexpt4EScaULtGvtCf5WioCHHDIG%2BEJPsv7tbPGaNe7eNqiYbqhPnps8g2OVOgD1eLUwMD24oolHjgL5eayJhlmfbC%2BqmHJleIDQlHZAkJvsYP%2BhmdAnWsuiut091EggG3WjX9fzeqkd0S7jkS7NmnR9EjLx2lJrfLac7jV37DF%2Bpogo43f1eEwome9NmZB2SDDzbQtzIu0D2%2BzFRBcGpfNVH7xVJufdRTfRmj9jWZWhaqB6HS%2BgJDKguA1IrX%2BIeMXnINncNEQT9i%2B4z0WL074gt2ZSo9TusYujq2AXkZpKMig3Hgxd%2Fg2zr5yctyjXJJ70l8J81Sic9ZFr8K2FiinEqvJh7JgfSz9JRDojZnQU%2F1KaiUwLpZ6DvW5q7ZOIXGJBiiqezgmHWnuwTZbR8ep7mTykRj1DJJgcmiksYSbDJmCNqT%2B3pm%2BDIlnMuszAEPzCKUseUHc48BkomW9NS8YbDXgKe3t5ZFPu8N19tj%2Bjb%2BtPdNz6cwU4%2BDb0NUSGS%2BZ1OcC6J%2F2Rh0witqtyQY6pgG4px4THpmsnOCGuZJ8PB%2FHqM5s6GyrfZGwBLbQYHMiDvK6Leu5JyhDkdf1UdEqu3Iise5m%2ByXWbFk%2FgHWmjrDiVynlOBjSpibeuIUNh2FA54lD898vcjkk%2BGqj3CzlRQWRaJrUf1QiVjCyg5%2FSQtJYEUDNzA6p%2BhJ340EQZTJDygTMmJUobt0f3XrPpF7zOiA8E5Uk3LcobACJkfb%2Bcnjq%2BvdbdZ%2Bj&X-Amz-Signature=fc4b53eabc820ddeb52a2c1f3d8e6f4a4413fcdc2a65b377d753656b61ad0218&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}


#### Params:

| **Name**          | **Type**             |
| ----------------- | -------------------- |
| `serial_port`     | string               |
| `serial_baudrate` | int (model specific) |
| `frame_id`        | string               |
| `scan_mode`       | string               |

#### description:

publishes the `/scan` topic for RPLIDAR products

[official docs link](https://github.com/Slamtec/rplidar_ros/tree/ros2#slamtec-lidar-ros2-package)

{{% /alert %}}

Remember to disable gazebo nodes for physical setup

```python "5-5","10-13"

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
  <summary>{{< markdownify >}}Finding Lidar USB port:{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQN7V3RI%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIGPlUTGsUudIjvvddWWs9hOIDfLUDv5M3hs907AGUtC%2FAiB5fz7N23IBAlfgNc%2B33BhvG6TI1OkKDDX3wVAunp6adiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1%2FDSZOQqPh1JGVUeKtwDzL2uhL9jLQPXpRxSeRr9QHV8USqMvU83%2FxT21oP0IHqdA%2FWitww4S%2FMYuw%2B3a7aO7SzzHbOib8dJMmXEF%2FJRD42wot9%2FpchKybf1kytDv21OSJexpt4EScaULtGvtCf5WioCHHDIG%2BEJPsv7tbPGaNe7eNqiYbqhPnps8g2OVOgD1eLUwMD24oolHjgL5eayJhlmfbC%2BqmHJleIDQlHZAkJvsYP%2BhmdAnWsuiut091EggG3WjX9fzeqkd0S7jkS7NmnR9EjLx2lJrfLac7jV37DF%2Bpogo43f1eEwome9NmZB2SDDzbQtzIu0D2%2BzFRBcGpfNVH7xVJufdRTfRmj9jWZWhaqB6HS%2BgJDKguA1IrX%2BIeMXnINncNEQT9i%2B4z0WL074gt2ZSo9TusYujq2AXkZpKMig3Hgxd%2Fg2zr5yctyjXJJ70l8J81Sic9ZFr8K2FiinEqvJh7JgfSz9JRDojZnQU%2F1KaiUwLpZ6DvW5q7ZOIXGJBiiqezgmHWnuwTZbR8ep7mTykRj1DJJgcmiksYSbDJmCNqT%2B3pm%2BDIlnMuszAEPzCKUseUHc48BkomW9NS8YbDXgKe3t5ZFPu8N19tj%2Bjb%2BtPdNz6cwU4%2BDb0NUSGS%2BZ1OcC6J%2F2Rh0witqtyQY6pgG4px4THpmsnOCGuZJ8PB%2FHqM5s6GyrfZGwBLbQYHMiDvK6Leu5JyhDkdf1UdEqu3Iise5m%2ByXWbFk%2FgHWmjrDiVynlOBjSpibeuIUNh2FA54lD898vcjkk%2BGqj3CzlRQWRaJrUf1QiVjCyg5%2FSQtJYEUDNzA6p%2BhJ340EQZTJDygTMmJUobt0f3XrPpF7zOiA8E5Uk3LcobACJkfb%2Bcnjq%2BvdbdZ%2Bj&X-Amz-Signature=854cff4d93217d4a60fed2abd05f57b60c593e38e9ba5ad95817f2c59720b888&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQN7V3RI%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCIGPlUTGsUudIjvvddWWs9hOIDfLUDv5M3hs907AGUtC%2FAiB5fz7N23IBAlfgNc%2B33BhvG6TI1OkKDDX3wVAunp6adiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1%2FDSZOQqPh1JGVUeKtwDzL2uhL9jLQPXpRxSeRr9QHV8USqMvU83%2FxT21oP0IHqdA%2FWitww4S%2FMYuw%2B3a7aO7SzzHbOib8dJMmXEF%2FJRD42wot9%2FpchKybf1kytDv21OSJexpt4EScaULtGvtCf5WioCHHDIG%2BEJPsv7tbPGaNe7eNqiYbqhPnps8g2OVOgD1eLUwMD24oolHjgL5eayJhlmfbC%2BqmHJleIDQlHZAkJvsYP%2BhmdAnWsuiut091EggG3WjX9fzeqkd0S7jkS7NmnR9EjLx2lJrfLac7jV37DF%2Bpogo43f1eEwome9NmZB2SDDzbQtzIu0D2%2BzFRBcGpfNVH7xVJufdRTfRmj9jWZWhaqB6HS%2BgJDKguA1IrX%2BIeMXnINncNEQT9i%2B4z0WL074gt2ZSo9TusYujq2AXkZpKMig3Hgxd%2Fg2zr5yctyjXJJ70l8J81Sic9ZFr8K2FiinEqvJh7JgfSz9JRDojZnQU%2F1KaiUwLpZ6DvW5q7ZOIXGJBiiqezgmHWnuwTZbR8ep7mTykRj1DJJgcmiksYSbDJmCNqT%2B3pm%2BDIlnMuszAEPzCKUseUHc48BkomW9NS8YbDXgKe3t5ZFPu8N19tj%2Bjb%2BtPdNz6cwU4%2BDb0NUSGS%2BZ1OcC6J%2F2Rh0witqtyQY6pgG4px4THpmsnOCGuZJ8PB%2FHqM5s6GyrfZGwBLbQYHMiDvK6Leu5JyhDkdf1UdEqu3Iise5m%2ByXWbFk%2FgHWmjrDiVynlOBjSpibeuIUNh2FA54lD898vcjkk%2BGqj3CzlRQWRaJrUf1QiVjCyg5%2FSQtJYEUDNzA6p%2BhJ340EQZTJDygTMmJUobt0f3XrPpF7zOiA8E5Uk3LcobACJkfb%2Bcnjq%2BvdbdZ%2Bj&X-Amz-Signature=822e497dea0a7c4bb774c64390eaf0653510777c875803c1e437f5a61558c6ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Adding RPLidar to launch

idk tell them to look at the launch file to see which exact prams to put in

```python "5-14","30-30"

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
