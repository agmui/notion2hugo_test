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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBRHH5DB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICr%2BS%2BHfpaCqih4IqYnTt0WDCSjPhnEvDGl9RIpNlu%2FvAiEAsB%2B4679WznovlJEDJ4cUnZ0Pt%2B7fbPG65SmecpIZcbAqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfE1xybWEhWtOvboyrcAxqBf%2Fgp%2FAmuOMw5OvELKAansJY0BljwZX3uA9HzAQJBcbkqQSegN2zJIsLbqi%2F4MFnPY56AiXV6SgCg0lLEdpMTnmQRL6FaYrKzQeR9aBnYUvs0LE8WTxommXtBm5VRQuKPWWVG7dpUxtCSStiIPf67ki5W08SznjQY4CKkdOt8LUhCudtAjbQWsbRzXJJogNJbTVISNf8wA9rRLusSG%2FhlcZ%2Bjzx%2FGxsaWY6YUJg%2FaijK%2FLCBPfqJz6VlEjEqxgdg5QHGiaTOli17ladeK7bgaoxCTV7o%2BMMh8CZnG0gGDqn6%2FtkYcMrLWfi0sspRgrbgFtYnl56NPdoaSetHgqqg21lvN24C2FzsLWU5jKMK129qzrfss5hBzBcM0DX4wzZL5SDR%2BSpBmOih1wWQL4e5BReifXdCJ1ZOcOJKE0lYroahFpnaQnYEdM%2BYUM5eP7E8jVLc7ftPCB7g9CjduaA2NkeYZMgl2poMHl0m2d1X9HLZg4hCJBAVL0zIMpYQRMS9IiZC3u%2FYMTfellj4pH62qFvSEEz3sLsMdmgcgVxHDNdzlDEoimChuAD2M9%2BdnuwtQzFXjS6L1HBzNka6g99x3PwmV%2FyfUfXBibaitwPkYAln6Drs5%2BCcXowKoML%2FAscQGOqUB3we5YMMWiJblbQzaMT%2BvK7yT3gF1zAiUW7QSLPtJ6ZCQDc3Pcty%2FGkyd6vqxHYINVUaMS0kbLMHYRUeGHpMK5A6XkiwIW22QSiAYSor%2Fpr1D%2FyIqVau1m3jWx9LzISmzI2LpXLf4GbnCr2hsP%2FtNqalasz9OmQUQn9K46wbKCBvMZdpRw2zVMx4ku%2FRQ8AadyQnilp%2BD%2BWACd5NQn%2FecQDmXtFv%2F&X-Amz-Signature=5d0dc1b36bcc15f594789ab82d444cbc784dfae985a5f6a638d4427e911392e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBRHH5DB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICr%2BS%2BHfpaCqih4IqYnTt0WDCSjPhnEvDGl9RIpNlu%2FvAiEAsB%2B4679WznovlJEDJ4cUnZ0Pt%2B7fbPG65SmecpIZcbAqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfE1xybWEhWtOvboyrcAxqBf%2Fgp%2FAmuOMw5OvELKAansJY0BljwZX3uA9HzAQJBcbkqQSegN2zJIsLbqi%2F4MFnPY56AiXV6SgCg0lLEdpMTnmQRL6FaYrKzQeR9aBnYUvs0LE8WTxommXtBm5VRQuKPWWVG7dpUxtCSStiIPf67ki5W08SznjQY4CKkdOt8LUhCudtAjbQWsbRzXJJogNJbTVISNf8wA9rRLusSG%2FhlcZ%2Bjzx%2FGxsaWY6YUJg%2FaijK%2FLCBPfqJz6VlEjEqxgdg5QHGiaTOli17ladeK7bgaoxCTV7o%2BMMh8CZnG0gGDqn6%2FtkYcMrLWfi0sspRgrbgFtYnl56NPdoaSetHgqqg21lvN24C2FzsLWU5jKMK129qzrfss5hBzBcM0DX4wzZL5SDR%2BSpBmOih1wWQL4e5BReifXdCJ1ZOcOJKE0lYroahFpnaQnYEdM%2BYUM5eP7E8jVLc7ftPCB7g9CjduaA2NkeYZMgl2poMHl0m2d1X9HLZg4hCJBAVL0zIMpYQRMS9IiZC3u%2FYMTfellj4pH62qFvSEEz3sLsMdmgcgVxHDNdzlDEoimChuAD2M9%2BdnuwtQzFXjS6L1HBzNka6g99x3PwmV%2FyfUfXBibaitwPkYAln6Drs5%2BCcXowKoML%2FAscQGOqUB3we5YMMWiJblbQzaMT%2BvK7yT3gF1zAiUW7QSLPtJ6ZCQDc3Pcty%2FGkyd6vqxHYINVUaMS0kbLMHYRUeGHpMK5A6XkiwIW22QSiAYSor%2Fpr1D%2FyIqVau1m3jWx9LzISmzI2LpXLf4GbnCr2hsP%2FtNqalasz9OmQUQn9K46wbKCBvMZdpRw2zVMx4ku%2FRQ8AadyQnilp%2BD%2BWACd5NQn%2FecQDmXtFv%2F&X-Amz-Signature=c61332fa1b0bd2eb0d2087984c530decab1b401244e823580d300565a925e2aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBRHH5DB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICr%2BS%2BHfpaCqih4IqYnTt0WDCSjPhnEvDGl9RIpNlu%2FvAiEAsB%2B4679WznovlJEDJ4cUnZ0Pt%2B7fbPG65SmecpIZcbAqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfE1xybWEhWtOvboyrcAxqBf%2Fgp%2FAmuOMw5OvELKAansJY0BljwZX3uA9HzAQJBcbkqQSegN2zJIsLbqi%2F4MFnPY56AiXV6SgCg0lLEdpMTnmQRL6FaYrKzQeR9aBnYUvs0LE8WTxommXtBm5VRQuKPWWVG7dpUxtCSStiIPf67ki5W08SznjQY4CKkdOt8LUhCudtAjbQWsbRzXJJogNJbTVISNf8wA9rRLusSG%2FhlcZ%2Bjzx%2FGxsaWY6YUJg%2FaijK%2FLCBPfqJz6VlEjEqxgdg5QHGiaTOli17ladeK7bgaoxCTV7o%2BMMh8CZnG0gGDqn6%2FtkYcMrLWfi0sspRgrbgFtYnl56NPdoaSetHgqqg21lvN24C2FzsLWU5jKMK129qzrfss5hBzBcM0DX4wzZL5SDR%2BSpBmOih1wWQL4e5BReifXdCJ1ZOcOJKE0lYroahFpnaQnYEdM%2BYUM5eP7E8jVLc7ftPCB7g9CjduaA2NkeYZMgl2poMHl0m2d1X9HLZg4hCJBAVL0zIMpYQRMS9IiZC3u%2FYMTfellj4pH62qFvSEEz3sLsMdmgcgVxHDNdzlDEoimChuAD2M9%2BdnuwtQzFXjS6L1HBzNka6g99x3PwmV%2FyfUfXBibaitwPkYAln6Drs5%2BCcXowKoML%2FAscQGOqUB3we5YMMWiJblbQzaMT%2BvK7yT3gF1zAiUW7QSLPtJ6ZCQDc3Pcty%2FGkyd6vqxHYINVUaMS0kbLMHYRUeGHpMK5A6XkiwIW22QSiAYSor%2Fpr1D%2FyIqVau1m3jWx9LzISmzI2LpXLf4GbnCr2hsP%2FtNqalasz9OmQUQn9K46wbKCBvMZdpRw2zVMx4ku%2FRQ8AadyQnilp%2BD%2BWACd5NQn%2FecQDmXtFv%2F&X-Amz-Signature=40de1d16dedc70e340fd154077ee8a5e9a4f1302b97c14d715f284a420c54e43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBRHH5DB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICr%2BS%2BHfpaCqih4IqYnTt0WDCSjPhnEvDGl9RIpNlu%2FvAiEAsB%2B4679WznovlJEDJ4cUnZ0Pt%2B7fbPG65SmecpIZcbAqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfE1xybWEhWtOvboyrcAxqBf%2Fgp%2FAmuOMw5OvELKAansJY0BljwZX3uA9HzAQJBcbkqQSegN2zJIsLbqi%2F4MFnPY56AiXV6SgCg0lLEdpMTnmQRL6FaYrKzQeR9aBnYUvs0LE8WTxommXtBm5VRQuKPWWVG7dpUxtCSStiIPf67ki5W08SznjQY4CKkdOt8LUhCudtAjbQWsbRzXJJogNJbTVISNf8wA9rRLusSG%2FhlcZ%2Bjzx%2FGxsaWY6YUJg%2FaijK%2FLCBPfqJz6VlEjEqxgdg5QHGiaTOli17ladeK7bgaoxCTV7o%2BMMh8CZnG0gGDqn6%2FtkYcMrLWfi0sspRgrbgFtYnl56NPdoaSetHgqqg21lvN24C2FzsLWU5jKMK129qzrfss5hBzBcM0DX4wzZL5SDR%2BSpBmOih1wWQL4e5BReifXdCJ1ZOcOJKE0lYroahFpnaQnYEdM%2BYUM5eP7E8jVLc7ftPCB7g9CjduaA2NkeYZMgl2poMHl0m2d1X9HLZg4hCJBAVL0zIMpYQRMS9IiZC3u%2FYMTfellj4pH62qFvSEEz3sLsMdmgcgVxHDNdzlDEoimChuAD2M9%2BdnuwtQzFXjS6L1HBzNka6g99x3PwmV%2FyfUfXBibaitwPkYAln6Drs5%2BCcXowKoML%2FAscQGOqUB3we5YMMWiJblbQzaMT%2BvK7yT3gF1zAiUW7QSLPtJ6ZCQDc3Pcty%2FGkyd6vqxHYINVUaMS0kbLMHYRUeGHpMK5A6XkiwIW22QSiAYSor%2Fpr1D%2FyIqVau1m3jWx9LzISmzI2LpXLf4GbnCr2hsP%2FtNqalasz9OmQUQn9K46wbKCBvMZdpRw2zVMx4ku%2FRQ8AadyQnilp%2BD%2BWACd5NQn%2FecQDmXtFv%2F&X-Amz-Signature=8d944245a78b04985796d30574c3b167b9625ef886282e3ecc4c8517e88db70c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBRHH5DB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICr%2BS%2BHfpaCqih4IqYnTt0WDCSjPhnEvDGl9RIpNlu%2FvAiEAsB%2B4679WznovlJEDJ4cUnZ0Pt%2B7fbPG65SmecpIZcbAqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfE1xybWEhWtOvboyrcAxqBf%2Fgp%2FAmuOMw5OvELKAansJY0BljwZX3uA9HzAQJBcbkqQSegN2zJIsLbqi%2F4MFnPY56AiXV6SgCg0lLEdpMTnmQRL6FaYrKzQeR9aBnYUvs0LE8WTxommXtBm5VRQuKPWWVG7dpUxtCSStiIPf67ki5W08SznjQY4CKkdOt8LUhCudtAjbQWsbRzXJJogNJbTVISNf8wA9rRLusSG%2FhlcZ%2Bjzx%2FGxsaWY6YUJg%2FaijK%2FLCBPfqJz6VlEjEqxgdg5QHGiaTOli17ladeK7bgaoxCTV7o%2BMMh8CZnG0gGDqn6%2FtkYcMrLWfi0sspRgrbgFtYnl56NPdoaSetHgqqg21lvN24C2FzsLWU5jKMK129qzrfss5hBzBcM0DX4wzZL5SDR%2BSpBmOih1wWQL4e5BReifXdCJ1ZOcOJKE0lYroahFpnaQnYEdM%2BYUM5eP7E8jVLc7ftPCB7g9CjduaA2NkeYZMgl2poMHl0m2d1X9HLZg4hCJBAVL0zIMpYQRMS9IiZC3u%2FYMTfellj4pH62qFvSEEz3sLsMdmgcgVxHDNdzlDEoimChuAD2M9%2BdnuwtQzFXjS6L1HBzNka6g99x3PwmV%2FyfUfXBibaitwPkYAln6Drs5%2BCcXowKoML%2FAscQGOqUB3we5YMMWiJblbQzaMT%2BvK7yT3gF1zAiUW7QSLPtJ6ZCQDc3Pcty%2FGkyd6vqxHYINVUaMS0kbLMHYRUeGHpMK5A6XkiwIW22QSiAYSor%2Fpr1D%2FyIqVau1m3jWx9LzISmzI2LpXLf4GbnCr2hsP%2FtNqalasz9OmQUQn9K46wbKCBvMZdpRw2zVMx4ku%2FRQ8AadyQnilp%2BD%2BWACd5NQn%2FecQDmXtFv%2F&X-Amz-Signature=d8e397ce9bab005875d4a3fa5908bfc02507dd32a74dd1db2b60a629984b610f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBRHH5DB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICr%2BS%2BHfpaCqih4IqYnTt0WDCSjPhnEvDGl9RIpNlu%2FvAiEAsB%2B4679WznovlJEDJ4cUnZ0Pt%2B7fbPG65SmecpIZcbAqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfE1xybWEhWtOvboyrcAxqBf%2Fgp%2FAmuOMw5OvELKAansJY0BljwZX3uA9HzAQJBcbkqQSegN2zJIsLbqi%2F4MFnPY56AiXV6SgCg0lLEdpMTnmQRL6FaYrKzQeR9aBnYUvs0LE8WTxommXtBm5VRQuKPWWVG7dpUxtCSStiIPf67ki5W08SznjQY4CKkdOt8LUhCudtAjbQWsbRzXJJogNJbTVISNf8wA9rRLusSG%2FhlcZ%2Bjzx%2FGxsaWY6YUJg%2FaijK%2FLCBPfqJz6VlEjEqxgdg5QHGiaTOli17ladeK7bgaoxCTV7o%2BMMh8CZnG0gGDqn6%2FtkYcMrLWfi0sspRgrbgFtYnl56NPdoaSetHgqqg21lvN24C2FzsLWU5jKMK129qzrfss5hBzBcM0DX4wzZL5SDR%2BSpBmOih1wWQL4e5BReifXdCJ1ZOcOJKE0lYroahFpnaQnYEdM%2BYUM5eP7E8jVLc7ftPCB7g9CjduaA2NkeYZMgl2poMHl0m2d1X9HLZg4hCJBAVL0zIMpYQRMS9IiZC3u%2FYMTfellj4pH62qFvSEEz3sLsMdmgcgVxHDNdzlDEoimChuAD2M9%2BdnuwtQzFXjS6L1HBzNka6g99x3PwmV%2FyfUfXBibaitwPkYAln6Drs5%2BCcXowKoML%2FAscQGOqUB3we5YMMWiJblbQzaMT%2BvK7yT3gF1zAiUW7QSLPtJ6ZCQDc3Pcty%2FGkyd6vqxHYINVUaMS0kbLMHYRUeGHpMK5A6XkiwIW22QSiAYSor%2Fpr1D%2FyIqVau1m3jWx9LzISmzI2LpXLf4GbnCr2hsP%2FtNqalasz9OmQUQn9K46wbKCBvMZdpRw2zVMx4ku%2FRQ8AadyQnilp%2BD%2BWACd5NQn%2FecQDmXtFv%2F&X-Amz-Signature=5e36fb6e64d1f82ef9c209668f7f94e7e8621e576b222f284569233ee1670806&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBRHH5DB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICr%2BS%2BHfpaCqih4IqYnTt0WDCSjPhnEvDGl9RIpNlu%2FvAiEAsB%2B4679WznovlJEDJ4cUnZ0Pt%2B7fbPG65SmecpIZcbAqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfE1xybWEhWtOvboyrcAxqBf%2Fgp%2FAmuOMw5OvELKAansJY0BljwZX3uA9HzAQJBcbkqQSegN2zJIsLbqi%2F4MFnPY56AiXV6SgCg0lLEdpMTnmQRL6FaYrKzQeR9aBnYUvs0LE8WTxommXtBm5VRQuKPWWVG7dpUxtCSStiIPf67ki5W08SznjQY4CKkdOt8LUhCudtAjbQWsbRzXJJogNJbTVISNf8wA9rRLusSG%2FhlcZ%2Bjzx%2FGxsaWY6YUJg%2FaijK%2FLCBPfqJz6VlEjEqxgdg5QHGiaTOli17ladeK7bgaoxCTV7o%2BMMh8CZnG0gGDqn6%2FtkYcMrLWfi0sspRgrbgFtYnl56NPdoaSetHgqqg21lvN24C2FzsLWU5jKMK129qzrfss5hBzBcM0DX4wzZL5SDR%2BSpBmOih1wWQL4e5BReifXdCJ1ZOcOJKE0lYroahFpnaQnYEdM%2BYUM5eP7E8jVLc7ftPCB7g9CjduaA2NkeYZMgl2poMHl0m2d1X9HLZg4hCJBAVL0zIMpYQRMS9IiZC3u%2FYMTfellj4pH62qFvSEEz3sLsMdmgcgVxHDNdzlDEoimChuAD2M9%2BdnuwtQzFXjS6L1HBzNka6g99x3PwmV%2FyfUfXBibaitwPkYAln6Drs5%2BCcXowKoML%2FAscQGOqUB3we5YMMWiJblbQzaMT%2BvK7yT3gF1zAiUW7QSLPtJ6ZCQDc3Pcty%2FGkyd6vqxHYINVUaMS0kbLMHYRUeGHpMK5A6XkiwIW22QSiAYSor%2Fpr1D%2FyIqVau1m3jWx9LzISmzI2LpXLf4GbnCr2hsP%2FtNqalasz9OmQUQn9K46wbKCBvMZdpRw2zVMx4ku%2FRQ8AadyQnilp%2BD%2BWACd5NQn%2FecQDmXtFv%2F&X-Amz-Signature=f41608759e42937455df0af848a5ea5293ef7313122091f33350f5d61b1ab6b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBRHH5DB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICr%2BS%2BHfpaCqih4IqYnTt0WDCSjPhnEvDGl9RIpNlu%2FvAiEAsB%2B4679WznovlJEDJ4cUnZ0Pt%2B7fbPG65SmecpIZcbAqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfE1xybWEhWtOvboyrcAxqBf%2Fgp%2FAmuOMw5OvELKAansJY0BljwZX3uA9HzAQJBcbkqQSegN2zJIsLbqi%2F4MFnPY56AiXV6SgCg0lLEdpMTnmQRL6FaYrKzQeR9aBnYUvs0LE8WTxommXtBm5VRQuKPWWVG7dpUxtCSStiIPf67ki5W08SznjQY4CKkdOt8LUhCudtAjbQWsbRzXJJogNJbTVISNf8wA9rRLusSG%2FhlcZ%2Bjzx%2FGxsaWY6YUJg%2FaijK%2FLCBPfqJz6VlEjEqxgdg5QHGiaTOli17ladeK7bgaoxCTV7o%2BMMh8CZnG0gGDqn6%2FtkYcMrLWfi0sspRgrbgFtYnl56NPdoaSetHgqqg21lvN24C2FzsLWU5jKMK129qzrfss5hBzBcM0DX4wzZL5SDR%2BSpBmOih1wWQL4e5BReifXdCJ1ZOcOJKE0lYroahFpnaQnYEdM%2BYUM5eP7E8jVLc7ftPCB7g9CjduaA2NkeYZMgl2poMHl0m2d1X9HLZg4hCJBAVL0zIMpYQRMS9IiZC3u%2FYMTfellj4pH62qFvSEEz3sLsMdmgcgVxHDNdzlDEoimChuAD2M9%2BdnuwtQzFXjS6L1HBzNka6g99x3PwmV%2FyfUfXBibaitwPkYAln6Drs5%2BCcXowKoML%2FAscQGOqUB3we5YMMWiJblbQzaMT%2BvK7yT3gF1zAiUW7QSLPtJ6ZCQDc3Pcty%2FGkyd6vqxHYINVUaMS0kbLMHYRUeGHpMK5A6XkiwIW22QSiAYSor%2Fpr1D%2FyIqVau1m3jWx9LzISmzI2LpXLf4GbnCr2hsP%2FtNqalasz9OmQUQn9K46wbKCBvMZdpRw2zVMx4ku%2FRQ8AadyQnilp%2BD%2BWACd5NQn%2FecQDmXtFv%2F&X-Amz-Signature=67b7638b5f0237ff94fbbd7f58bfbb3211900650e4ce245cab9ffdaacbbf08cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBRHH5DB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICr%2BS%2BHfpaCqih4IqYnTt0WDCSjPhnEvDGl9RIpNlu%2FvAiEAsB%2B4679WznovlJEDJ4cUnZ0Pt%2B7fbPG65SmecpIZcbAqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfE1xybWEhWtOvboyrcAxqBf%2Fgp%2FAmuOMw5OvELKAansJY0BljwZX3uA9HzAQJBcbkqQSegN2zJIsLbqi%2F4MFnPY56AiXV6SgCg0lLEdpMTnmQRL6FaYrKzQeR9aBnYUvs0LE8WTxommXtBm5VRQuKPWWVG7dpUxtCSStiIPf67ki5W08SznjQY4CKkdOt8LUhCudtAjbQWsbRzXJJogNJbTVISNf8wA9rRLusSG%2FhlcZ%2Bjzx%2FGxsaWY6YUJg%2FaijK%2FLCBPfqJz6VlEjEqxgdg5QHGiaTOli17ladeK7bgaoxCTV7o%2BMMh8CZnG0gGDqn6%2FtkYcMrLWfi0sspRgrbgFtYnl56NPdoaSetHgqqg21lvN24C2FzsLWU5jKMK129qzrfss5hBzBcM0DX4wzZL5SDR%2BSpBmOih1wWQL4e5BReifXdCJ1ZOcOJKE0lYroahFpnaQnYEdM%2BYUM5eP7E8jVLc7ftPCB7g9CjduaA2NkeYZMgl2poMHl0m2d1X9HLZg4hCJBAVL0zIMpYQRMS9IiZC3u%2FYMTfellj4pH62qFvSEEz3sLsMdmgcgVxHDNdzlDEoimChuAD2M9%2BdnuwtQzFXjS6L1HBzNka6g99x3PwmV%2FyfUfXBibaitwPkYAln6Drs5%2BCcXowKoML%2FAscQGOqUB3we5YMMWiJblbQzaMT%2BvK7yT3gF1zAiUW7QSLPtJ6ZCQDc3Pcty%2FGkyd6vqxHYINVUaMS0kbLMHYRUeGHpMK5A6XkiwIW22QSiAYSor%2Fpr1D%2FyIqVau1m3jWx9LzISmzI2LpXLf4GbnCr2hsP%2FtNqalasz9OmQUQn9K46wbKCBvMZdpRw2zVMx4ku%2FRQ8AadyQnilp%2BD%2BWACd5NQn%2FecQDmXtFv%2F&X-Amz-Signature=c0dc3bd2c31ede618a7861807c89c5087f148be16158099146f78f169f5a552c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBRHH5DB%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T071701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICr%2BS%2BHfpaCqih4IqYnTt0WDCSjPhnEvDGl9RIpNlu%2FvAiEAsB%2B4679WznovlJEDJ4cUnZ0Pt%2B7fbPG65SmecpIZcbAqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfE1xybWEhWtOvboyrcAxqBf%2Fgp%2FAmuOMw5OvELKAansJY0BljwZX3uA9HzAQJBcbkqQSegN2zJIsLbqi%2F4MFnPY56AiXV6SgCg0lLEdpMTnmQRL6FaYrKzQeR9aBnYUvs0LE8WTxommXtBm5VRQuKPWWVG7dpUxtCSStiIPf67ki5W08SznjQY4CKkdOt8LUhCudtAjbQWsbRzXJJogNJbTVISNf8wA9rRLusSG%2FhlcZ%2Bjzx%2FGxsaWY6YUJg%2FaijK%2FLCBPfqJz6VlEjEqxgdg5QHGiaTOli17ladeK7bgaoxCTV7o%2BMMh8CZnG0gGDqn6%2FtkYcMrLWfi0sspRgrbgFtYnl56NPdoaSetHgqqg21lvN24C2FzsLWU5jKMK129qzrfss5hBzBcM0DX4wzZL5SDR%2BSpBmOih1wWQL4e5BReifXdCJ1ZOcOJKE0lYroahFpnaQnYEdM%2BYUM5eP7E8jVLc7ftPCB7g9CjduaA2NkeYZMgl2poMHl0m2d1X9HLZg4hCJBAVL0zIMpYQRMS9IiZC3u%2FYMTfellj4pH62qFvSEEz3sLsMdmgcgVxHDNdzlDEoimChuAD2M9%2BdnuwtQzFXjS6L1HBzNka6g99x3PwmV%2FyfUfXBibaitwPkYAln6Drs5%2BCcXowKoML%2FAscQGOqUB3we5YMMWiJblbQzaMT%2BvK7yT3gF1zAiUW7QSLPtJ6ZCQDc3Pcty%2FGkyd6vqxHYINVUaMS0kbLMHYRUeGHpMK5A6XkiwIW22QSiAYSor%2Fpr1D%2FyIqVau1m3jWx9LzISmzI2LpXLf4GbnCr2hsP%2FtNqalasz9OmQUQn9K46wbKCBvMZdpRw2zVMx4ku%2FRQ8AadyQnilp%2BD%2BWACd5NQn%2FecQDmXtFv%2F&X-Amz-Signature=8040f76ed214a71c9a0520ef755c7f8ca5709e43b35a9a57ef8292285c3f87ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
