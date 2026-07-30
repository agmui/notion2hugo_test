---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-08-02T09:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-08-02T09:48:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 155
toc: false
icon: ""
---

[Good video explaining slam](https://www.youtube.com/watch?v=ZaiA3hWaRzE&t=979s)

[https://www.youtube.com/watch?v=saVZtgPyyJQ](https://www.youtube.com/watch?v=saVZtgPyyJQ)

<details>
  <summary>{{< markdownify >}}What is slam?{{< /markdownify >}}</summary>
  
TODO:

ROS has a package called `slam_toolbox` where …

</details>



ROS has a package for SLAM called `slam toolbox`.

If you have a Lidar and Odometry it is able to scan and map the room out.

---

## Install

```bash
sudo apt install ros-$ROS_DISTRO-slam-toolbox
```

{{% alert icon=”👾” context="success" %}}

### **New Node** **`online_async_launch`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVYJVZXC%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMisaAMEBul%2FTKdphyb5%2Fm5Yf6lmdl9%2B4QMRaoTFtpmQIhAKvBfdJKbRWJtqx%2FLuU8De2k%2Bdka2Z0jlYynZ97QAZp0KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy78OXT96zhpaRzIVwq3AN1pnMXroDlNGGq%2Fmz5cDS2HUhf1u3GCvVbbAW66VnxvYaVcctpM8aVzXHRXti0UTrP7S8aOY4mnqFG%2FiZLykyFCTIwwubqoBIEO%2F070sL8IEOP%2B5G1yHXafIy%2BB6kyhmvSqXrZ8RE5WwfJwXmFuHW7cVVfO%2FhlQbvJwmpQmM1WE5aEekzFq9irTqzMh47JZGuDNc990a2N82v%2BaN0RGtzVha4XXE41Mbqv0VMGP7dyaBcHMsP9dO92SP3SMTj76mynhdFbYYYm9GHVrAGSDSFtXM5nO5NjTnYM8VBBNQX0BJRvRHmOtlTFtaZEhAcqluUfz9ogl1MPCsUHUuDVfGuDTjyL%2FnwuyN0fK0ZjfokvwZewPXG63Nw3XDSgpmp5ajvbK7XUnCoDNluxdd7yx%2BZhUkfmja81C6sbXgOqvH1tEeIrS6T9hTTgTzzD%2FHVuomcHikEnM7STWgRIkRJHVHqOUKXSt%2Fc80K%2FEgh0fdcl6vBNLRu0JbjRXN3WLdaiJyIIXaxVp487lHzdUP0XiOyOJ6exWzfIyKZ8sebVZMeItc5YSElSpgHpgdAZYoG%2FYW%2FI77NL0L5oEnPV%2BgFnH5wsPge44KEd7qr7wYQxoS70gYWvy4ZIpw7zJjovRlDCG4qrTBjqkAUnOH73G1ylJT4OH6FsLbLoTq38WwfYJaTYer5W4gKxxVeJGtT4ww6k2pbML9aFkt0PdUgII0%2BQxv%2B5HJRAliJPrnWauBK3XbPWKC75uu1kffAbgjWQb9JflmIxy0mrc%2F2MoTQV7P%2B5cdIfXz7amVGozXRxC9ubXFtWPkgz5XNnpqNU2UF30IEJUC7ywLNoTw0CFvu35wYZpCnbwDReuD0EpSPcK&X-Amz-Signature=b77d7eaf2bd61ebe9baf0bd9a9aeadc3d99ce485de1498a21a847439526d020c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}


#### Outputs:

| **Name** | **Type**               |
| -------- | ---------------------- |
| `/tf`    | map ⇒ odom             |
| `/map`   | nav_msgs/OccupancyGrid |

#### Params:

| **Name**           | **Type** |
| ------------------ | -------- |
| `slam_params_file` | file     |
| `use_sim_time`     | bool     |

#### description:

Given a `/scan` from a Lidar it outputs a map

{{% /alert %}}

# Simulating SLAM in Gazebo

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

Remember to turn on Gazebo again:

```python "4-4","9-12","14-14"
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        # my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        gz_server,
        ros_gz_bridge,
        spawn_entity,
        
        # lidar_node # lidar for physical setup 
    ])
```

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `slam_toolbox` ran correctly, in logs wait for “Registering sensor”

### Viewing scanned SLAM map

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVYJVZXC%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMisaAMEBul%2FTKdphyb5%2Fm5Yf6lmdl9%2B4QMRaoTFtpmQIhAKvBfdJKbRWJtqx%2FLuU8De2k%2Bdka2Z0jlYynZ97QAZp0KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy78OXT96zhpaRzIVwq3AN1pnMXroDlNGGq%2Fmz5cDS2HUhf1u3GCvVbbAW66VnxvYaVcctpM8aVzXHRXti0UTrP7S8aOY4mnqFG%2FiZLykyFCTIwwubqoBIEO%2F070sL8IEOP%2B5G1yHXafIy%2BB6kyhmvSqXrZ8RE5WwfJwXmFuHW7cVVfO%2FhlQbvJwmpQmM1WE5aEekzFq9irTqzMh47JZGuDNc990a2N82v%2BaN0RGtzVha4XXE41Mbqv0VMGP7dyaBcHMsP9dO92SP3SMTj76mynhdFbYYYm9GHVrAGSDSFtXM5nO5NjTnYM8VBBNQX0BJRvRHmOtlTFtaZEhAcqluUfz9ogl1MPCsUHUuDVfGuDTjyL%2FnwuyN0fK0ZjfokvwZewPXG63Nw3XDSgpmp5ajvbK7XUnCoDNluxdd7yx%2BZhUkfmja81C6sbXgOqvH1tEeIrS6T9hTTgTzzD%2FHVuomcHikEnM7STWgRIkRJHVHqOUKXSt%2Fc80K%2FEgh0fdcl6vBNLRu0JbjRXN3WLdaiJyIIXaxVp487lHzdUP0XiOyOJ6exWzfIyKZ8sebVZMeItc5YSElSpgHpgdAZYoG%2FYW%2FI77NL0L5oEnPV%2BgFnH5wsPge44KEd7qr7wYQxoS70gYWvy4ZIpw7zJjovRlDCG4qrTBjqkAUnOH73G1ylJT4OH6FsLbLoTq38WwfYJaTYer5W4gKxxVeJGtT4ww6k2pbML9aFkt0PdUgII0%2BQxv%2B5HJRAliJPrnWauBK3XbPWKC75uu1kffAbgjWQb9JflmIxy0mrc%2F2MoTQV7P%2B5cdIfXz7amVGozXRxC9ubXFtWPkgz5XNnpqNU2UF30IEJUC7ywLNoTw0CFvu35wYZpCnbwDReuD0EpSPcK&X-Amz-Signature=381f706da5fd7eac31b26bbb9c69a9c232609c0fb9c15372a04b23717b7a9fc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVYJVZXC%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMisaAMEBul%2FTKdphyb5%2Fm5Yf6lmdl9%2B4QMRaoTFtpmQIhAKvBfdJKbRWJtqx%2FLuU8De2k%2Bdka2Z0jlYynZ97QAZp0KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy78OXT96zhpaRzIVwq3AN1pnMXroDlNGGq%2Fmz5cDS2HUhf1u3GCvVbbAW66VnxvYaVcctpM8aVzXHRXti0UTrP7S8aOY4mnqFG%2FiZLykyFCTIwwubqoBIEO%2F070sL8IEOP%2B5G1yHXafIy%2BB6kyhmvSqXrZ8RE5WwfJwXmFuHW7cVVfO%2FhlQbvJwmpQmM1WE5aEekzFq9irTqzMh47JZGuDNc990a2N82v%2BaN0RGtzVha4XXE41Mbqv0VMGP7dyaBcHMsP9dO92SP3SMTj76mynhdFbYYYm9GHVrAGSDSFtXM5nO5NjTnYM8VBBNQX0BJRvRHmOtlTFtaZEhAcqluUfz9ogl1MPCsUHUuDVfGuDTjyL%2FnwuyN0fK0ZjfokvwZewPXG63Nw3XDSgpmp5ajvbK7XUnCoDNluxdd7yx%2BZhUkfmja81C6sbXgOqvH1tEeIrS6T9hTTgTzzD%2FHVuomcHikEnM7STWgRIkRJHVHqOUKXSt%2Fc80K%2FEgh0fdcl6vBNLRu0JbjRXN3WLdaiJyIIXaxVp487lHzdUP0XiOyOJ6exWzfIyKZ8sebVZMeItc5YSElSpgHpgdAZYoG%2FYW%2FI77NL0L5oEnPV%2BgFnH5wsPge44KEd7qr7wYQxoS70gYWvy4ZIpw7zJjovRlDCG4qrTBjqkAUnOH73G1ylJT4OH6FsLbLoTq38WwfYJaTYer5W4gKxxVeJGtT4ww6k2pbML9aFkt0PdUgII0%2BQxv%2B5HJRAliJPrnWauBK3XbPWKC75uu1kffAbgjWQb9JflmIxy0mrc%2F2MoTQV7P%2B5cdIfXz7amVGozXRxC9ubXFtWPkgz5XNnpqNU2UF30IEJUC7ywLNoTw0CFvu35wYZpCnbwDReuD0EpSPcK&X-Amz-Signature=eb1e756c335f18744518aa763487287fdaef7d9f1d70a9b7135194fb60bb5a88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVYJVZXC%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMisaAMEBul%2FTKdphyb5%2Fm5Yf6lmdl9%2B4QMRaoTFtpmQIhAKvBfdJKbRWJtqx%2FLuU8De2k%2Bdka2Z0jlYynZ97QAZp0KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy78OXT96zhpaRzIVwq3AN1pnMXroDlNGGq%2Fmz5cDS2HUhf1u3GCvVbbAW66VnxvYaVcctpM8aVzXHRXti0UTrP7S8aOY4mnqFG%2FiZLykyFCTIwwubqoBIEO%2F070sL8IEOP%2B5G1yHXafIy%2BB6kyhmvSqXrZ8RE5WwfJwXmFuHW7cVVfO%2FhlQbvJwmpQmM1WE5aEekzFq9irTqzMh47JZGuDNc990a2N82v%2BaN0RGtzVha4XXE41Mbqv0VMGP7dyaBcHMsP9dO92SP3SMTj76mynhdFbYYYm9GHVrAGSDSFtXM5nO5NjTnYM8VBBNQX0BJRvRHmOtlTFtaZEhAcqluUfz9ogl1MPCsUHUuDVfGuDTjyL%2FnwuyN0fK0ZjfokvwZewPXG63Nw3XDSgpmp5ajvbK7XUnCoDNluxdd7yx%2BZhUkfmja81C6sbXgOqvH1tEeIrS6T9hTTgTzzD%2FHVuomcHikEnM7STWgRIkRJHVHqOUKXSt%2Fc80K%2FEgh0fdcl6vBNLRu0JbjRXN3WLdaiJyIIXaxVp487lHzdUP0XiOyOJ6exWzfIyKZ8sebVZMeItc5YSElSpgHpgdAZYoG%2FYW%2FI77NL0L5oEnPV%2BgFnH5wsPge44KEd7qr7wYQxoS70gYWvy4ZIpw7zJjovRlDCG4qrTBjqkAUnOH73G1ylJT4OH6FsLbLoTq38WwfYJaTYer5W4gKxxVeJGtT4ww6k2pbML9aFkt0PdUgII0%2BQxv%2B5HJRAliJPrnWauBK3XbPWKC75uu1kffAbgjWQb9JflmIxy0mrc%2F2MoTQV7P%2B5cdIfXz7amVGozXRxC9ubXFtWPkgz5XNnpqNU2UF30IEJUC7ywLNoTw0CFvu35wYZpCnbwDReuD0EpSPcK&X-Amz-Signature=e277f4916a42758fdd71d3adf113237c9397a4bba6e3f0614ec152e54e355e02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVYJVZXC%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMisaAMEBul%2FTKdphyb5%2Fm5Yf6lmdl9%2B4QMRaoTFtpmQIhAKvBfdJKbRWJtqx%2FLuU8De2k%2Bdka2Z0jlYynZ97QAZp0KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy78OXT96zhpaRzIVwq3AN1pnMXroDlNGGq%2Fmz5cDS2HUhf1u3GCvVbbAW66VnxvYaVcctpM8aVzXHRXti0UTrP7S8aOY4mnqFG%2FiZLykyFCTIwwubqoBIEO%2F070sL8IEOP%2B5G1yHXafIy%2BB6kyhmvSqXrZ8RE5WwfJwXmFuHW7cVVfO%2FhlQbvJwmpQmM1WE5aEekzFq9irTqzMh47JZGuDNc990a2N82v%2BaN0RGtzVha4XXE41Mbqv0VMGP7dyaBcHMsP9dO92SP3SMTj76mynhdFbYYYm9GHVrAGSDSFtXM5nO5NjTnYM8VBBNQX0BJRvRHmOtlTFtaZEhAcqluUfz9ogl1MPCsUHUuDVfGuDTjyL%2FnwuyN0fK0ZjfokvwZewPXG63Nw3XDSgpmp5ajvbK7XUnCoDNluxdd7yx%2BZhUkfmja81C6sbXgOqvH1tEeIrS6T9hTTgTzzD%2FHVuomcHikEnM7STWgRIkRJHVHqOUKXSt%2Fc80K%2FEgh0fdcl6vBNLRu0JbjRXN3WLdaiJyIIXaxVp487lHzdUP0XiOyOJ6exWzfIyKZ8sebVZMeItc5YSElSpgHpgdAZYoG%2FYW%2FI77NL0L5oEnPV%2BgFnH5wsPge44KEd7qr7wYQxoS70gYWvy4ZIpw7zJjovRlDCG4qrTBjqkAUnOH73G1ylJT4OH6FsLbLoTq38WwfYJaTYer5W4gKxxVeJGtT4ww6k2pbML9aFkt0PdUgII0%2BQxv%2B5HJRAliJPrnWauBK3XbPWKC75uu1kffAbgjWQb9JflmIxy0mrc%2F2MoTQV7P%2B5cdIfXz7amVGozXRxC9ubXFtWPkgz5XNnpqNU2UF30IEJUC7ywLNoTw0CFvu35wYZpCnbwDReuD0EpSPcK&X-Amz-Signature=4810b4a3b95739712ba5965edcc5d422ad0ee9ac3dfee181691639300c515081&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVYJVZXC%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMisaAMEBul%2FTKdphyb5%2Fm5Yf6lmdl9%2B4QMRaoTFtpmQIhAKvBfdJKbRWJtqx%2FLuU8De2k%2Bdka2Z0jlYynZ97QAZp0KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy78OXT96zhpaRzIVwq3AN1pnMXroDlNGGq%2Fmz5cDS2HUhf1u3GCvVbbAW66VnxvYaVcctpM8aVzXHRXti0UTrP7S8aOY4mnqFG%2FiZLykyFCTIwwubqoBIEO%2F070sL8IEOP%2B5G1yHXafIy%2BB6kyhmvSqXrZ8RE5WwfJwXmFuHW7cVVfO%2FhlQbvJwmpQmM1WE5aEekzFq9irTqzMh47JZGuDNc990a2N82v%2BaN0RGtzVha4XXE41Mbqv0VMGP7dyaBcHMsP9dO92SP3SMTj76mynhdFbYYYm9GHVrAGSDSFtXM5nO5NjTnYM8VBBNQX0BJRvRHmOtlTFtaZEhAcqluUfz9ogl1MPCsUHUuDVfGuDTjyL%2FnwuyN0fK0ZjfokvwZewPXG63Nw3XDSgpmp5ajvbK7XUnCoDNluxdd7yx%2BZhUkfmja81C6sbXgOqvH1tEeIrS6T9hTTgTzzD%2FHVuomcHikEnM7STWgRIkRJHVHqOUKXSt%2Fc80K%2FEgh0fdcl6vBNLRu0JbjRXN3WLdaiJyIIXaxVp487lHzdUP0XiOyOJ6exWzfIyKZ8sebVZMeItc5YSElSpgHpgdAZYoG%2FYW%2FI77NL0L5oEnPV%2BgFnH5wsPge44KEd7qr7wYQxoS70gYWvy4ZIpw7zJjovRlDCG4qrTBjqkAUnOH73G1ylJT4OH6FsLbLoTq38WwfYJaTYer5W4gKxxVeJGtT4ww6k2pbML9aFkt0PdUgII0%2BQxv%2B5HJRAliJPrnWauBK3XbPWKC75uu1kffAbgjWQb9JflmIxy0mrc%2F2MoTQV7P%2B5cdIfXz7amVGozXRxC9ubXFtWPkgz5XNnpqNU2UF30IEJUC7ywLNoTw0CFvu35wYZpCnbwDReuD0EpSPcK&X-Amz-Signature=ad6edc5af2b1a77d608b58f2cf593fa37fa89d4fe4c42828ae1efd7d3c1c0694&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVYJVZXC%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMisaAMEBul%2FTKdphyb5%2Fm5Yf6lmdl9%2B4QMRaoTFtpmQIhAKvBfdJKbRWJtqx%2FLuU8De2k%2Bdka2Z0jlYynZ97QAZp0KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy78OXT96zhpaRzIVwq3AN1pnMXroDlNGGq%2Fmz5cDS2HUhf1u3GCvVbbAW66VnxvYaVcctpM8aVzXHRXti0UTrP7S8aOY4mnqFG%2FiZLykyFCTIwwubqoBIEO%2F070sL8IEOP%2B5G1yHXafIy%2BB6kyhmvSqXrZ8RE5WwfJwXmFuHW7cVVfO%2FhlQbvJwmpQmM1WE5aEekzFq9irTqzMh47JZGuDNc990a2N82v%2BaN0RGtzVha4XXE41Mbqv0VMGP7dyaBcHMsP9dO92SP3SMTj76mynhdFbYYYm9GHVrAGSDSFtXM5nO5NjTnYM8VBBNQX0BJRvRHmOtlTFtaZEhAcqluUfz9ogl1MPCsUHUuDVfGuDTjyL%2FnwuyN0fK0ZjfokvwZewPXG63Nw3XDSgpmp5ajvbK7XUnCoDNluxdd7yx%2BZhUkfmja81C6sbXgOqvH1tEeIrS6T9hTTgTzzD%2FHVuomcHikEnM7STWgRIkRJHVHqOUKXSt%2Fc80K%2FEgh0fdcl6vBNLRu0JbjRXN3WLdaiJyIIXaxVp487lHzdUP0XiOyOJ6exWzfIyKZ8sebVZMeItc5YSElSpgHpgdAZYoG%2FYW%2FI77NL0L5oEnPV%2BgFnH5wsPge44KEd7qr7wYQxoS70gYWvy4ZIpw7zJjovRlDCG4qrTBjqkAUnOH73G1ylJT4OH6FsLbLoTq38WwfYJaTYer5W4gKxxVeJGtT4ww6k2pbML9aFkt0PdUgII0%2BQxv%2B5HJRAliJPrnWauBK3XbPWKC75uu1kffAbgjWQb9JflmIxy0mrc%2F2MoTQV7P%2B5cdIfXz7amVGozXRxC9ubXFtWPkgz5XNnpqNU2UF30IEJUC7ywLNoTw0CFvu35wYZpCnbwDReuD0EpSPcK&X-Amz-Signature=265c59c473f3d67667e4ba4cb5a20a586ebef299937d3dc76097e287ca2f3783&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to turn off Gazebo again:

```python "4-4","9-12","14-14"
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

in 3 different terminals run:

```xml
ros2 launch mbot_pkg display.launch.py
```

```xml
ros2 launch slam_toolbox online_async_launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

drive around with `teleop_twist_keyboard` to scan more of the map

## Adding `slam_toolbox` to launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVYJVZXC%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMisaAMEBul%2FTKdphyb5%2Fm5Yf6lmdl9%2B4QMRaoTFtpmQIhAKvBfdJKbRWJtqx%2FLuU8De2k%2Bdka2Z0jlYynZ97QAZp0KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy78OXT96zhpaRzIVwq3AN1pnMXroDlNGGq%2Fmz5cDS2HUhf1u3GCvVbbAW66VnxvYaVcctpM8aVzXHRXti0UTrP7S8aOY4mnqFG%2FiZLykyFCTIwwubqoBIEO%2F070sL8IEOP%2B5G1yHXafIy%2BB6kyhmvSqXrZ8RE5WwfJwXmFuHW7cVVfO%2FhlQbvJwmpQmM1WE5aEekzFq9irTqzMh47JZGuDNc990a2N82v%2BaN0RGtzVha4XXE41Mbqv0VMGP7dyaBcHMsP9dO92SP3SMTj76mynhdFbYYYm9GHVrAGSDSFtXM5nO5NjTnYM8VBBNQX0BJRvRHmOtlTFtaZEhAcqluUfz9ogl1MPCsUHUuDVfGuDTjyL%2FnwuyN0fK0ZjfokvwZewPXG63Nw3XDSgpmp5ajvbK7XUnCoDNluxdd7yx%2BZhUkfmja81C6sbXgOqvH1tEeIrS6T9hTTgTzzD%2FHVuomcHikEnM7STWgRIkRJHVHqOUKXSt%2Fc80K%2FEgh0fdcl6vBNLRu0JbjRXN3WLdaiJyIIXaxVp487lHzdUP0XiOyOJ6exWzfIyKZ8sebVZMeItc5YSElSpgHpgdAZYoG%2FYW%2FI77NL0L5oEnPV%2BgFnH5wsPge44KEd7qr7wYQxoS70gYWvy4ZIpw7zJjovRlDCG4qrTBjqkAUnOH73G1ylJT4OH6FsLbLoTq38WwfYJaTYer5W4gKxxVeJGtT4ww6k2pbML9aFkt0PdUgII0%2BQxv%2B5HJRAliJPrnWauBK3XbPWKC75uu1kffAbgjWQb9JflmIxy0mrc%2F2MoTQV7P%2B5cdIfXz7amVGozXRxC9ubXFtWPkgz5XNnpqNU2UF30IEJUC7ywLNoTw0CFvu35wYZpCnbwDReuD0EpSPcK&X-Amz-Signature=dbf3ed3f2c7e1bc74532dd2c75abb71d1601cb99be4b829288d135953722df72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVYJVZXC%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMisaAMEBul%2FTKdphyb5%2Fm5Yf6lmdl9%2B4QMRaoTFtpmQIhAKvBfdJKbRWJtqx%2FLuU8De2k%2Bdka2Z0jlYynZ97QAZp0KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy78OXT96zhpaRzIVwq3AN1pnMXroDlNGGq%2Fmz5cDS2HUhf1u3GCvVbbAW66VnxvYaVcctpM8aVzXHRXti0UTrP7S8aOY4mnqFG%2FiZLykyFCTIwwubqoBIEO%2F070sL8IEOP%2B5G1yHXafIy%2BB6kyhmvSqXrZ8RE5WwfJwXmFuHW7cVVfO%2FhlQbvJwmpQmM1WE5aEekzFq9irTqzMh47JZGuDNc990a2N82v%2BaN0RGtzVha4XXE41Mbqv0VMGP7dyaBcHMsP9dO92SP3SMTj76mynhdFbYYYm9GHVrAGSDSFtXM5nO5NjTnYM8VBBNQX0BJRvRHmOtlTFtaZEhAcqluUfz9ogl1MPCsUHUuDVfGuDTjyL%2FnwuyN0fK0ZjfokvwZewPXG63Nw3XDSgpmp5ajvbK7XUnCoDNluxdd7yx%2BZhUkfmja81C6sbXgOqvH1tEeIrS6T9hTTgTzzD%2FHVuomcHikEnM7STWgRIkRJHVHqOUKXSt%2Fc80K%2FEgh0fdcl6vBNLRu0JbjRXN3WLdaiJyIIXaxVp487lHzdUP0XiOyOJ6exWzfIyKZ8sebVZMeItc5YSElSpgHpgdAZYoG%2FYW%2FI77NL0L5oEnPV%2BgFnH5wsPge44KEd7qr7wYQxoS70gYWvy4ZIpw7zJjovRlDCG4qrTBjqkAUnOH73G1ylJT4OH6FsLbLoTq38WwfYJaTYer5W4gKxxVeJGtT4ww6k2pbML9aFkt0PdUgII0%2BQxv%2B5HJRAliJPrnWauBK3XbPWKC75uu1kffAbgjWQb9JflmIxy0mrc%2F2MoTQV7P%2B5cdIfXz7amVGozXRxC9ubXFtWPkgz5XNnpqNU2UF30IEJUC7ywLNoTw0CFvu35wYZpCnbwDReuD0EpSPcK&X-Amz-Signature=1eed31518b9661803cf50a34686904481b547eb8d73d47e458d9c1d8e300b537&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

```python "9-9","13-20","38-38"

   
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    slam_yaml_path = os.path.join(pkg_share, 'config', 'slam.yaml') # gets the slam config file
    
    ...
    
    slam_toolbox_node = IncludeLaunchDescription(
        PythonLaunchDescriptionSource([
            FindPackageShare("slam_toolbox"), '/launch', '/online_async_launch.py']),
        launch_arguments={
            'slam_params_file': slam_yaml_path,
            'use_sim_time': LaunchConfiguration('use_sim_time'),
        }.items()
    )
    
    
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
        
        slam_toolbox_node #  providing the map => odom transform.
    ])
```

# Saving map

`slam_toolbox` also has the feature where you can pre scan a map and save it to load it again.

Press on Panels → Add New Panel

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVYJVZXC%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMisaAMEBul%2FTKdphyb5%2Fm5Yf6lmdl9%2B4QMRaoTFtpmQIhAKvBfdJKbRWJtqx%2FLuU8De2k%2Bdka2Z0jlYynZ97QAZp0KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy78OXT96zhpaRzIVwq3AN1pnMXroDlNGGq%2Fmz5cDS2HUhf1u3GCvVbbAW66VnxvYaVcctpM8aVzXHRXti0UTrP7S8aOY4mnqFG%2FiZLykyFCTIwwubqoBIEO%2F070sL8IEOP%2B5G1yHXafIy%2BB6kyhmvSqXrZ8RE5WwfJwXmFuHW7cVVfO%2FhlQbvJwmpQmM1WE5aEekzFq9irTqzMh47JZGuDNc990a2N82v%2BaN0RGtzVha4XXE41Mbqv0VMGP7dyaBcHMsP9dO92SP3SMTj76mynhdFbYYYm9GHVrAGSDSFtXM5nO5NjTnYM8VBBNQX0BJRvRHmOtlTFtaZEhAcqluUfz9ogl1MPCsUHUuDVfGuDTjyL%2FnwuyN0fK0ZjfokvwZewPXG63Nw3XDSgpmp5ajvbK7XUnCoDNluxdd7yx%2BZhUkfmja81C6sbXgOqvH1tEeIrS6T9hTTgTzzD%2FHVuomcHikEnM7STWgRIkRJHVHqOUKXSt%2Fc80K%2FEgh0fdcl6vBNLRu0JbjRXN3WLdaiJyIIXaxVp487lHzdUP0XiOyOJ6exWzfIyKZ8sebVZMeItc5YSElSpgHpgdAZYoG%2FYW%2FI77NL0L5oEnPV%2BgFnH5wsPge44KEd7qr7wYQxoS70gYWvy4ZIpw7zJjovRlDCG4qrTBjqkAUnOH73G1ylJT4OH6FsLbLoTq38WwfYJaTYer5W4gKxxVeJGtT4ww6k2pbML9aFkt0PdUgII0%2BQxv%2B5HJRAliJPrnWauBK3XbPWKC75uu1kffAbgjWQb9JflmIxy0mrc%2F2MoTQV7P%2B5cdIfXz7amVGozXRxC9ubXFtWPkgz5XNnpqNU2UF30IEJUC7ywLNoTw0CFvu35wYZpCnbwDReuD0EpSPcK&X-Amz-Signature=e61c3b0cc15b1e3b268147d2d2fa4f359a3e138afa472a422aa367581fbe8f55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVYJVZXC%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMisaAMEBul%2FTKdphyb5%2Fm5Yf6lmdl9%2B4QMRaoTFtpmQIhAKvBfdJKbRWJtqx%2FLuU8De2k%2Bdka2Z0jlYynZ97QAZp0KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy78OXT96zhpaRzIVwq3AN1pnMXroDlNGGq%2Fmz5cDS2HUhf1u3GCvVbbAW66VnxvYaVcctpM8aVzXHRXti0UTrP7S8aOY4mnqFG%2FiZLykyFCTIwwubqoBIEO%2F070sL8IEOP%2B5G1yHXafIy%2BB6kyhmvSqXrZ8RE5WwfJwXmFuHW7cVVfO%2FhlQbvJwmpQmM1WE5aEekzFq9irTqzMh47JZGuDNc990a2N82v%2BaN0RGtzVha4XXE41Mbqv0VMGP7dyaBcHMsP9dO92SP3SMTj76mynhdFbYYYm9GHVrAGSDSFtXM5nO5NjTnYM8VBBNQX0BJRvRHmOtlTFtaZEhAcqluUfz9ogl1MPCsUHUuDVfGuDTjyL%2FnwuyN0fK0ZjfokvwZewPXG63Nw3XDSgpmp5ajvbK7XUnCoDNluxdd7yx%2BZhUkfmja81C6sbXgOqvH1tEeIrS6T9hTTgTzzD%2FHVuomcHikEnM7STWgRIkRJHVHqOUKXSt%2Fc80K%2FEgh0fdcl6vBNLRu0JbjRXN3WLdaiJyIIXaxVp487lHzdUP0XiOyOJ6exWzfIyKZ8sebVZMeItc5YSElSpgHpgdAZYoG%2FYW%2FI77NL0L5oEnPV%2BgFnH5wsPge44KEd7qr7wYQxoS70gYWvy4ZIpw7zJjovRlDCG4qrTBjqkAUnOH73G1ylJT4OH6FsLbLoTq38WwfYJaTYer5W4gKxxVeJGtT4ww6k2pbML9aFkt0PdUgII0%2BQxv%2B5HJRAliJPrnWauBK3XbPWKC75uu1kffAbgjWQb9JflmIxy0mrc%2F2MoTQV7P%2B5cdIfXz7amVGozXRxC9ubXFtWPkgz5XNnpqNU2UF30IEJUC7ywLNoTw0CFvu35wYZpCnbwDReuD0EpSPcK&X-Amz-Signature=85672ee001511b40332abbc8612677e8241ce64fc5d3f93c29db0ed3489eb7ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVYJVZXC%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMisaAMEBul%2FTKdphyb5%2Fm5Yf6lmdl9%2B4QMRaoTFtpmQIhAKvBfdJKbRWJtqx%2FLuU8De2k%2Bdka2Z0jlYynZ97QAZp0KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy78OXT96zhpaRzIVwq3AN1pnMXroDlNGGq%2Fmz5cDS2HUhf1u3GCvVbbAW66VnxvYaVcctpM8aVzXHRXti0UTrP7S8aOY4mnqFG%2FiZLykyFCTIwwubqoBIEO%2F070sL8IEOP%2B5G1yHXafIy%2BB6kyhmvSqXrZ8RE5WwfJwXmFuHW7cVVfO%2FhlQbvJwmpQmM1WE5aEekzFq9irTqzMh47JZGuDNc990a2N82v%2BaN0RGtzVha4XXE41Mbqv0VMGP7dyaBcHMsP9dO92SP3SMTj76mynhdFbYYYm9GHVrAGSDSFtXM5nO5NjTnYM8VBBNQX0BJRvRHmOtlTFtaZEhAcqluUfz9ogl1MPCsUHUuDVfGuDTjyL%2FnwuyN0fK0ZjfokvwZewPXG63Nw3XDSgpmp5ajvbK7XUnCoDNluxdd7yx%2BZhUkfmja81C6sbXgOqvH1tEeIrS6T9hTTgTzzD%2FHVuomcHikEnM7STWgRIkRJHVHqOUKXSt%2Fc80K%2FEgh0fdcl6vBNLRu0JbjRXN3WLdaiJyIIXaxVp487lHzdUP0XiOyOJ6exWzfIyKZ8sebVZMeItc5YSElSpgHpgdAZYoG%2FYW%2FI77NL0L5oEnPV%2BgFnH5wsPge44KEd7qr7wYQxoS70gYWvy4ZIpw7zJjovRlDCG4qrTBjqkAUnOH73G1ylJT4OH6FsLbLoTq38WwfYJaTYer5W4gKxxVeJGtT4ww6k2pbML9aFkt0PdUgII0%2BQxv%2B5HJRAliJPrnWauBK3XbPWKC75uu1kffAbgjWQb9JflmIxy0mrc%2F2MoTQV7P%2B5cdIfXz7amVGozXRxC9ubXFtWPkgz5XNnpqNU2UF30IEJUC7ywLNoTw0CFvu35wYZpCnbwDReuD0EpSPcK&X-Amz-Signature=dc46ec23e5d7d333c02594a56e0d2a63a37e598678e44dc1a9dba337754aba59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVYJVZXC%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMisaAMEBul%2FTKdphyb5%2Fm5Yf6lmdl9%2B4QMRaoTFtpmQIhAKvBfdJKbRWJtqx%2FLuU8De2k%2Bdka2Z0jlYynZ97QAZp0KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy78OXT96zhpaRzIVwq3AN1pnMXroDlNGGq%2Fmz5cDS2HUhf1u3GCvVbbAW66VnxvYaVcctpM8aVzXHRXti0UTrP7S8aOY4mnqFG%2FiZLykyFCTIwwubqoBIEO%2F070sL8IEOP%2B5G1yHXafIy%2BB6kyhmvSqXrZ8RE5WwfJwXmFuHW7cVVfO%2FhlQbvJwmpQmM1WE5aEekzFq9irTqzMh47JZGuDNc990a2N82v%2BaN0RGtzVha4XXE41Mbqv0VMGP7dyaBcHMsP9dO92SP3SMTj76mynhdFbYYYm9GHVrAGSDSFtXM5nO5NjTnYM8VBBNQX0BJRvRHmOtlTFtaZEhAcqluUfz9ogl1MPCsUHUuDVfGuDTjyL%2FnwuyN0fK0ZjfokvwZewPXG63Nw3XDSgpmp5ajvbK7XUnCoDNluxdd7yx%2BZhUkfmja81C6sbXgOqvH1tEeIrS6T9hTTgTzzD%2FHVuomcHikEnM7STWgRIkRJHVHqOUKXSt%2Fc80K%2FEgh0fdcl6vBNLRu0JbjRXN3WLdaiJyIIXaxVp487lHzdUP0XiOyOJ6exWzfIyKZ8sebVZMeItc5YSElSpgHpgdAZYoG%2FYW%2FI77NL0L5oEnPV%2BgFnH5wsPge44KEd7qr7wYQxoS70gYWvy4ZIpw7zJjovRlDCG4qrTBjqkAUnOH73G1ylJT4OH6FsLbLoTq38WwfYJaTYer5W4gKxxVeJGtT4ww6k2pbML9aFkt0PdUgII0%2BQxv%2B5HJRAliJPrnWauBK3XbPWKC75uu1kffAbgjWQb9JflmIxy0mrc%2F2MoTQV7P%2B5cdIfXz7amVGozXRxC9ubXFtWPkgz5XNnpqNU2UF30IEJUC7ywLNoTw0CFvu35wYZpCnbwDReuD0EpSPcK&X-Amz-Signature=a3efead668a083d377f943dfda822b62ca526090531fd5c91e7dc74a021fdb67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

```yaml "18-19","24-24"
slam_toolbox:
  ros__parameters:

    # Plugin params
    solver_plugin: solver_plugins::CeresSolver
    ceres_linear_solver: SPARSE_NORMAL_CHOLESKY
    ceres_preconditioner: SCHUR_JACOBI
    ceres_trust_strategy: LEVENBERG_MARQUARDT
    ceres_dogleg_type: TRADITIONAL_DOGLEG
    ceres_loss_function: None

    # ROS Parameters
    odom_frame: odom
    map_frame: map
    base_frame: base_footprint
    scan_topic: /scan
    use_map_saver: true
    # mode: mapping 
    mode: localization 

    # if you'd like to immediately start continuing a map at a given pose
    # or at the dock, but they are mutually exclusive, if pose is given
    # will use pose
    map_file_name: /path/to/map/test # NOTE: no file extension
    # map_start_pose: [0.0, 0.0, 0.0]
    # map_start_at_dock: true

    debug_logging: false
```

Running the launch file again you will see your map preload into rviz

```yaml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVYJVZXC%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMisaAMEBul%2FTKdphyb5%2Fm5Yf6lmdl9%2B4QMRaoTFtpmQIhAKvBfdJKbRWJtqx%2FLuU8De2k%2Bdka2Z0jlYynZ97QAZp0KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy78OXT96zhpaRzIVwq3AN1pnMXroDlNGGq%2Fmz5cDS2HUhf1u3GCvVbbAW66VnxvYaVcctpM8aVzXHRXti0UTrP7S8aOY4mnqFG%2FiZLykyFCTIwwubqoBIEO%2F070sL8IEOP%2B5G1yHXafIy%2BB6kyhmvSqXrZ8RE5WwfJwXmFuHW7cVVfO%2FhlQbvJwmpQmM1WE5aEekzFq9irTqzMh47JZGuDNc990a2N82v%2BaN0RGtzVha4XXE41Mbqv0VMGP7dyaBcHMsP9dO92SP3SMTj76mynhdFbYYYm9GHVrAGSDSFtXM5nO5NjTnYM8VBBNQX0BJRvRHmOtlTFtaZEhAcqluUfz9ogl1MPCsUHUuDVfGuDTjyL%2FnwuyN0fK0ZjfokvwZewPXG63Nw3XDSgpmp5ajvbK7XUnCoDNluxdd7yx%2BZhUkfmja81C6sbXgOqvH1tEeIrS6T9hTTgTzzD%2FHVuomcHikEnM7STWgRIkRJHVHqOUKXSt%2Fc80K%2FEgh0fdcl6vBNLRu0JbjRXN3WLdaiJyIIXaxVp487lHzdUP0XiOyOJ6exWzfIyKZ8sebVZMeItc5YSElSpgHpgdAZYoG%2FYW%2FI77NL0L5oEnPV%2BgFnH5wsPge44KEd7qr7wYQxoS70gYWvy4ZIpw7zJjovRlDCG4qrTBjqkAUnOH73G1ylJT4OH6FsLbLoTq38WwfYJaTYer5W4gKxxVeJGtT4ww6k2pbML9aFkt0PdUgII0%2BQxv%2B5HJRAliJPrnWauBK3XbPWKC75uu1kffAbgjWQb9JflmIxy0mrc%2F2MoTQV7P%2B5cdIfXz7amVGozXRxC9ubXFtWPkgz5XNnpqNU2UF30IEJUC7ywLNoTw0CFvu35wYZpCnbwDReuD0EpSPcK&X-Amz-Signature=71b6c94f91a142d58d71e9b2ec77cd74bb8f4ffc8cb5f2d604199081b494aed8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
