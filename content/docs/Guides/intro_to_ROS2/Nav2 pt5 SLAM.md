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
      <summary>What is slam?</summary>
      TODO:
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663UQQFMZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtTZZOnYzSoe6G9yN1U8ULSYPhfmUDGz7YPPq%2BeV8TKQIhAK7KaE2nQV6gvwqr8yi24w4vSk88TCWPNHimgYWoOoQRKv8DCCQQABoMNjM3NDIzMTgzODA1IgwNsVsXqHkHWmf3D6Yq3AM%2FW8ctoPW7UZpjF23WOpPODJEmMq23CXn2Wr76H%2F8Mc2K4kgp3nRQEUJe35rkR33WSM8TyvJm5XKvrmeUGysekVPqcwIjdL%2FN4PIZ3NLaoS9arhkgVjfAXT4h9rn3fSLaEWX%2FF4L1KOPOLAJGdQArW38lnlq7ErUv8P31ROLfaaCSuviMXsBUirRB6G7IH0IfwGV1jXUuDQ4pjfp9p5KINdQ3DZojoOJ9UcrwdGXzjjZoVTb%2BjwzABJDmg89J8N0sDBfsBtyHv47tiTz2B1m500oIBW2P2L9fdFoHvb%2FRWM7ASmouITClJ5moQ0tbtIdzCB0y45ayhdnFZSz10ANPxhbou3nnrJHrqhHO6ALFVG96jXCVhctiPBtYBJsO9ielzrhyVCb9uolsvS917LIPurVnqymWlsmfcca6%2FIQK14P3owa5LFDvQiFrgxkWrb1muLN1FX%2F41V2jyTVhMfblAghzq41TdEkWHDHX4jtGkYfoUQlx52tizTTB%2B%2FgKGpnN5pNMY55WmM0yPhJzmgSoJ%2BAom5jHizSO3T9NKMgDNyd%2BRspVlhKpHSibzPBtiGHZijargxveqEA%2BVsdg3C8va1SsRgvJi9W5S35Kpii4p%2Fj3blj0brTZ%2F%2FdIDLzCnprvEBjqkAQRwvJ0JydfbnDU5U01dJAp37%2F9Qyj4BSZeaStMTZhV48uzRlgYSZ63NOnB0WgoCCo7py9p9Q6dfA36DsgggqdYNwTs8kP%2FGNiCNzC276TKD%2FXG5mqGo%2FJBujITR2JwwfcW9dOMA8bjflCuu38y2fwkSsCyF59uFEIYjU3Tk4f8NuLwORnIn9%2FNEtowVEVELzv66CmUB0IjCt0hS9AFNy%2FNcL4ls&X-Amz-Signature=84ab699fe0b352b0c7a85f3d1153e25a798723e92b286f1589711ecd113826b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**               |
| -------- | ---------------------- |
| `/tf`    | map ⇒ odom             |
| `/map`   | nav_msgs/OccupancyGrid |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**           | **Type** |
| ------------------ | -------- |
| `slam_params_file` | file     |
| `use_sim_time`     | bool     |

{{< /table >}}

#### description:

Given a `/scan` from a Lidar it outputs a map

{{% /alert %}}

# Simulating SLAM in Gazebo

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

Remember to turn on Gazebo again:

```python
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663UQQFMZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtTZZOnYzSoe6G9yN1U8ULSYPhfmUDGz7YPPq%2BeV8TKQIhAK7KaE2nQV6gvwqr8yi24w4vSk88TCWPNHimgYWoOoQRKv8DCCQQABoMNjM3NDIzMTgzODA1IgwNsVsXqHkHWmf3D6Yq3AM%2FW8ctoPW7UZpjF23WOpPODJEmMq23CXn2Wr76H%2F8Mc2K4kgp3nRQEUJe35rkR33WSM8TyvJm5XKvrmeUGysekVPqcwIjdL%2FN4PIZ3NLaoS9arhkgVjfAXT4h9rn3fSLaEWX%2FF4L1KOPOLAJGdQArW38lnlq7ErUv8P31ROLfaaCSuviMXsBUirRB6G7IH0IfwGV1jXUuDQ4pjfp9p5KINdQ3DZojoOJ9UcrwdGXzjjZoVTb%2BjwzABJDmg89J8N0sDBfsBtyHv47tiTz2B1m500oIBW2P2L9fdFoHvb%2FRWM7ASmouITClJ5moQ0tbtIdzCB0y45ayhdnFZSz10ANPxhbou3nnrJHrqhHO6ALFVG96jXCVhctiPBtYBJsO9ielzrhyVCb9uolsvS917LIPurVnqymWlsmfcca6%2FIQK14P3owa5LFDvQiFrgxkWrb1muLN1FX%2F41V2jyTVhMfblAghzq41TdEkWHDHX4jtGkYfoUQlx52tizTTB%2B%2FgKGpnN5pNMY55WmM0yPhJzmgSoJ%2BAom5jHizSO3T9NKMgDNyd%2BRspVlhKpHSibzPBtiGHZijargxveqEA%2BVsdg3C8va1SsRgvJi9W5S35Kpii4p%2Fj3blj0brTZ%2F%2FdIDLzCnprvEBjqkAQRwvJ0JydfbnDU5U01dJAp37%2F9Qyj4BSZeaStMTZhV48uzRlgYSZ63NOnB0WgoCCo7py9p9Q6dfA36DsgggqdYNwTs8kP%2FGNiCNzC276TKD%2FXG5mqGo%2FJBujITR2JwwfcW9dOMA8bjflCuu38y2fwkSsCyF59uFEIYjU3Tk4f8NuLwORnIn9%2FNEtowVEVELzv66CmUB0IjCt0hS9AFNy%2FNcL4ls&X-Amz-Signature=081161274c412b508701832fe71458fd4a662aa21b7abf70123978d5cfa344ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663UQQFMZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtTZZOnYzSoe6G9yN1U8ULSYPhfmUDGz7YPPq%2BeV8TKQIhAK7KaE2nQV6gvwqr8yi24w4vSk88TCWPNHimgYWoOoQRKv8DCCQQABoMNjM3NDIzMTgzODA1IgwNsVsXqHkHWmf3D6Yq3AM%2FW8ctoPW7UZpjF23WOpPODJEmMq23CXn2Wr76H%2F8Mc2K4kgp3nRQEUJe35rkR33WSM8TyvJm5XKvrmeUGysekVPqcwIjdL%2FN4PIZ3NLaoS9arhkgVjfAXT4h9rn3fSLaEWX%2FF4L1KOPOLAJGdQArW38lnlq7ErUv8P31ROLfaaCSuviMXsBUirRB6G7IH0IfwGV1jXUuDQ4pjfp9p5KINdQ3DZojoOJ9UcrwdGXzjjZoVTb%2BjwzABJDmg89J8N0sDBfsBtyHv47tiTz2B1m500oIBW2P2L9fdFoHvb%2FRWM7ASmouITClJ5moQ0tbtIdzCB0y45ayhdnFZSz10ANPxhbou3nnrJHrqhHO6ALFVG96jXCVhctiPBtYBJsO9ielzrhyVCb9uolsvS917LIPurVnqymWlsmfcca6%2FIQK14P3owa5LFDvQiFrgxkWrb1muLN1FX%2F41V2jyTVhMfblAghzq41TdEkWHDHX4jtGkYfoUQlx52tizTTB%2B%2FgKGpnN5pNMY55WmM0yPhJzmgSoJ%2BAom5jHizSO3T9NKMgDNyd%2BRspVlhKpHSibzPBtiGHZijargxveqEA%2BVsdg3C8va1SsRgvJi9W5S35Kpii4p%2Fj3blj0brTZ%2F%2FdIDLzCnprvEBjqkAQRwvJ0JydfbnDU5U01dJAp37%2F9Qyj4BSZeaStMTZhV48uzRlgYSZ63NOnB0WgoCCo7py9p9Q6dfA36DsgggqdYNwTs8kP%2FGNiCNzC276TKD%2FXG5mqGo%2FJBujITR2JwwfcW9dOMA8bjflCuu38y2fwkSsCyF59uFEIYjU3Tk4f8NuLwORnIn9%2FNEtowVEVELzv66CmUB0IjCt0hS9AFNy%2FNcL4ls&X-Amz-Signature=503e6173957d82a1ed50181bb15a4726479f8fe49fd752d20df5ef4247fe1b45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663UQQFMZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtTZZOnYzSoe6G9yN1U8ULSYPhfmUDGz7YPPq%2BeV8TKQIhAK7KaE2nQV6gvwqr8yi24w4vSk88TCWPNHimgYWoOoQRKv8DCCQQABoMNjM3NDIzMTgzODA1IgwNsVsXqHkHWmf3D6Yq3AM%2FW8ctoPW7UZpjF23WOpPODJEmMq23CXn2Wr76H%2F8Mc2K4kgp3nRQEUJe35rkR33WSM8TyvJm5XKvrmeUGysekVPqcwIjdL%2FN4PIZ3NLaoS9arhkgVjfAXT4h9rn3fSLaEWX%2FF4L1KOPOLAJGdQArW38lnlq7ErUv8P31ROLfaaCSuviMXsBUirRB6G7IH0IfwGV1jXUuDQ4pjfp9p5KINdQ3DZojoOJ9UcrwdGXzjjZoVTb%2BjwzABJDmg89J8N0sDBfsBtyHv47tiTz2B1m500oIBW2P2L9fdFoHvb%2FRWM7ASmouITClJ5moQ0tbtIdzCB0y45ayhdnFZSz10ANPxhbou3nnrJHrqhHO6ALFVG96jXCVhctiPBtYBJsO9ielzrhyVCb9uolsvS917LIPurVnqymWlsmfcca6%2FIQK14P3owa5LFDvQiFrgxkWrb1muLN1FX%2F41V2jyTVhMfblAghzq41TdEkWHDHX4jtGkYfoUQlx52tizTTB%2B%2FgKGpnN5pNMY55WmM0yPhJzmgSoJ%2BAom5jHizSO3T9NKMgDNyd%2BRspVlhKpHSibzPBtiGHZijargxveqEA%2BVsdg3C8va1SsRgvJi9W5S35Kpii4p%2Fj3blj0brTZ%2F%2FdIDLzCnprvEBjqkAQRwvJ0JydfbnDU5U01dJAp37%2F9Qyj4BSZeaStMTZhV48uzRlgYSZ63NOnB0WgoCCo7py9p9Q6dfA36DsgggqdYNwTs8kP%2FGNiCNzC276TKD%2FXG5mqGo%2FJBujITR2JwwfcW9dOMA8bjflCuu38y2fwkSsCyF59uFEIYjU3Tk4f8NuLwORnIn9%2FNEtowVEVELzv66CmUB0IjCt0hS9AFNy%2FNcL4ls&X-Amz-Signature=a12d96e1db623d80b467321e894c1ddaee29d445fb704a3f567b5c1ec257407d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663UQQFMZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtTZZOnYzSoe6G9yN1U8ULSYPhfmUDGz7YPPq%2BeV8TKQIhAK7KaE2nQV6gvwqr8yi24w4vSk88TCWPNHimgYWoOoQRKv8DCCQQABoMNjM3NDIzMTgzODA1IgwNsVsXqHkHWmf3D6Yq3AM%2FW8ctoPW7UZpjF23WOpPODJEmMq23CXn2Wr76H%2F8Mc2K4kgp3nRQEUJe35rkR33WSM8TyvJm5XKvrmeUGysekVPqcwIjdL%2FN4PIZ3NLaoS9arhkgVjfAXT4h9rn3fSLaEWX%2FF4L1KOPOLAJGdQArW38lnlq7ErUv8P31ROLfaaCSuviMXsBUirRB6G7IH0IfwGV1jXUuDQ4pjfp9p5KINdQ3DZojoOJ9UcrwdGXzjjZoVTb%2BjwzABJDmg89J8N0sDBfsBtyHv47tiTz2B1m500oIBW2P2L9fdFoHvb%2FRWM7ASmouITClJ5moQ0tbtIdzCB0y45ayhdnFZSz10ANPxhbou3nnrJHrqhHO6ALFVG96jXCVhctiPBtYBJsO9ielzrhyVCb9uolsvS917LIPurVnqymWlsmfcca6%2FIQK14P3owa5LFDvQiFrgxkWrb1muLN1FX%2F41V2jyTVhMfblAghzq41TdEkWHDHX4jtGkYfoUQlx52tizTTB%2B%2FgKGpnN5pNMY55WmM0yPhJzmgSoJ%2BAom5jHizSO3T9NKMgDNyd%2BRspVlhKpHSibzPBtiGHZijargxveqEA%2BVsdg3C8va1SsRgvJi9W5S35Kpii4p%2Fj3blj0brTZ%2F%2FdIDLzCnprvEBjqkAQRwvJ0JydfbnDU5U01dJAp37%2F9Qyj4BSZeaStMTZhV48uzRlgYSZ63NOnB0WgoCCo7py9p9Q6dfA36DsgggqdYNwTs8kP%2FGNiCNzC276TKD%2FXG5mqGo%2FJBujITR2JwwfcW9dOMA8bjflCuu38y2fwkSsCyF59uFEIYjU3Tk4f8NuLwORnIn9%2FNEtowVEVELzv66CmUB0IjCt0hS9AFNy%2FNcL4ls&X-Amz-Signature=e93a4dd113314bb553714d2f3df9b4e3563b2fa602b996f3d51c12e7cc868b64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663UQQFMZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtTZZOnYzSoe6G9yN1U8ULSYPhfmUDGz7YPPq%2BeV8TKQIhAK7KaE2nQV6gvwqr8yi24w4vSk88TCWPNHimgYWoOoQRKv8DCCQQABoMNjM3NDIzMTgzODA1IgwNsVsXqHkHWmf3D6Yq3AM%2FW8ctoPW7UZpjF23WOpPODJEmMq23CXn2Wr76H%2F8Mc2K4kgp3nRQEUJe35rkR33WSM8TyvJm5XKvrmeUGysekVPqcwIjdL%2FN4PIZ3NLaoS9arhkgVjfAXT4h9rn3fSLaEWX%2FF4L1KOPOLAJGdQArW38lnlq7ErUv8P31ROLfaaCSuviMXsBUirRB6G7IH0IfwGV1jXUuDQ4pjfp9p5KINdQ3DZojoOJ9UcrwdGXzjjZoVTb%2BjwzABJDmg89J8N0sDBfsBtyHv47tiTz2B1m500oIBW2P2L9fdFoHvb%2FRWM7ASmouITClJ5moQ0tbtIdzCB0y45ayhdnFZSz10ANPxhbou3nnrJHrqhHO6ALFVG96jXCVhctiPBtYBJsO9ielzrhyVCb9uolsvS917LIPurVnqymWlsmfcca6%2FIQK14P3owa5LFDvQiFrgxkWrb1muLN1FX%2F41V2jyTVhMfblAghzq41TdEkWHDHX4jtGkYfoUQlx52tizTTB%2B%2FgKGpnN5pNMY55WmM0yPhJzmgSoJ%2BAom5jHizSO3T9NKMgDNyd%2BRspVlhKpHSibzPBtiGHZijargxveqEA%2BVsdg3C8va1SsRgvJi9W5S35Kpii4p%2Fj3blj0brTZ%2F%2FdIDLzCnprvEBjqkAQRwvJ0JydfbnDU5U01dJAp37%2F9Qyj4BSZeaStMTZhV48uzRlgYSZ63NOnB0WgoCCo7py9p9Q6dfA36DsgggqdYNwTs8kP%2FGNiCNzC276TKD%2FXG5mqGo%2FJBujITR2JwwfcW9dOMA8bjflCuu38y2fwkSsCyF59uFEIYjU3Tk4f8NuLwORnIn9%2FNEtowVEVELzv66CmUB0IjCt0hS9AFNy%2FNcL4ls&X-Amz-Signature=ae5a022cb069660f2743107b1557b2e80e63c249514d7653919fe6f1f8aa6a6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663UQQFMZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtTZZOnYzSoe6G9yN1U8ULSYPhfmUDGz7YPPq%2BeV8TKQIhAK7KaE2nQV6gvwqr8yi24w4vSk88TCWPNHimgYWoOoQRKv8DCCQQABoMNjM3NDIzMTgzODA1IgwNsVsXqHkHWmf3D6Yq3AM%2FW8ctoPW7UZpjF23WOpPODJEmMq23CXn2Wr76H%2F8Mc2K4kgp3nRQEUJe35rkR33WSM8TyvJm5XKvrmeUGysekVPqcwIjdL%2FN4PIZ3NLaoS9arhkgVjfAXT4h9rn3fSLaEWX%2FF4L1KOPOLAJGdQArW38lnlq7ErUv8P31ROLfaaCSuviMXsBUirRB6G7IH0IfwGV1jXUuDQ4pjfp9p5KINdQ3DZojoOJ9UcrwdGXzjjZoVTb%2BjwzABJDmg89J8N0sDBfsBtyHv47tiTz2B1m500oIBW2P2L9fdFoHvb%2FRWM7ASmouITClJ5moQ0tbtIdzCB0y45ayhdnFZSz10ANPxhbou3nnrJHrqhHO6ALFVG96jXCVhctiPBtYBJsO9ielzrhyVCb9uolsvS917LIPurVnqymWlsmfcca6%2FIQK14P3owa5LFDvQiFrgxkWrb1muLN1FX%2F41V2jyTVhMfblAghzq41TdEkWHDHX4jtGkYfoUQlx52tizTTB%2B%2FgKGpnN5pNMY55WmM0yPhJzmgSoJ%2BAom5jHizSO3T9NKMgDNyd%2BRspVlhKpHSibzPBtiGHZijargxveqEA%2BVsdg3C8va1SsRgvJi9W5S35Kpii4p%2Fj3blj0brTZ%2F%2FdIDLzCnprvEBjqkAQRwvJ0JydfbnDU5U01dJAp37%2F9Qyj4BSZeaStMTZhV48uzRlgYSZ63NOnB0WgoCCo7py9p9Q6dfA36DsgggqdYNwTs8kP%2FGNiCNzC276TKD%2FXG5mqGo%2FJBujITR2JwwfcW9dOMA8bjflCuu38y2fwkSsCyF59uFEIYjU3Tk4f8NuLwORnIn9%2FNEtowVEVELzv66CmUB0IjCt0hS9AFNy%2FNcL4ls&X-Amz-Signature=8d3e1c03b413b61fd42a44c464bc138c8ff93c6c40b0f5b0918488e7bf335c3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to turn off Gazebo again:

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663UQQFMZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtTZZOnYzSoe6G9yN1U8ULSYPhfmUDGz7YPPq%2BeV8TKQIhAK7KaE2nQV6gvwqr8yi24w4vSk88TCWPNHimgYWoOoQRKv8DCCQQABoMNjM3NDIzMTgzODA1IgwNsVsXqHkHWmf3D6Yq3AM%2FW8ctoPW7UZpjF23WOpPODJEmMq23CXn2Wr76H%2F8Mc2K4kgp3nRQEUJe35rkR33WSM8TyvJm5XKvrmeUGysekVPqcwIjdL%2FN4PIZ3NLaoS9arhkgVjfAXT4h9rn3fSLaEWX%2FF4L1KOPOLAJGdQArW38lnlq7ErUv8P31ROLfaaCSuviMXsBUirRB6G7IH0IfwGV1jXUuDQ4pjfp9p5KINdQ3DZojoOJ9UcrwdGXzjjZoVTb%2BjwzABJDmg89J8N0sDBfsBtyHv47tiTz2B1m500oIBW2P2L9fdFoHvb%2FRWM7ASmouITClJ5moQ0tbtIdzCB0y45ayhdnFZSz10ANPxhbou3nnrJHrqhHO6ALFVG96jXCVhctiPBtYBJsO9ielzrhyVCb9uolsvS917LIPurVnqymWlsmfcca6%2FIQK14P3owa5LFDvQiFrgxkWrb1muLN1FX%2F41V2jyTVhMfblAghzq41TdEkWHDHX4jtGkYfoUQlx52tizTTB%2B%2FgKGpnN5pNMY55WmM0yPhJzmgSoJ%2BAom5jHizSO3T9NKMgDNyd%2BRspVlhKpHSibzPBtiGHZijargxveqEA%2BVsdg3C8va1SsRgvJi9W5S35Kpii4p%2Fj3blj0brTZ%2F%2FdIDLzCnprvEBjqkAQRwvJ0JydfbnDU5U01dJAp37%2F9Qyj4BSZeaStMTZhV48uzRlgYSZ63NOnB0WgoCCo7py9p9Q6dfA36DsgggqdYNwTs8kP%2FGNiCNzC276TKD%2FXG5mqGo%2FJBujITR2JwwfcW9dOMA8bjflCuu38y2fwkSsCyF59uFEIYjU3Tk4f8NuLwORnIn9%2FNEtowVEVELzv66CmUB0IjCt0hS9AFNy%2FNcL4ls&X-Amz-Signature=41845f2fc8d4846dd207d85f5408b9940f852908ade6309dec765f6f4e0606d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663UQQFMZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtTZZOnYzSoe6G9yN1U8ULSYPhfmUDGz7YPPq%2BeV8TKQIhAK7KaE2nQV6gvwqr8yi24w4vSk88TCWPNHimgYWoOoQRKv8DCCQQABoMNjM3NDIzMTgzODA1IgwNsVsXqHkHWmf3D6Yq3AM%2FW8ctoPW7UZpjF23WOpPODJEmMq23CXn2Wr76H%2F8Mc2K4kgp3nRQEUJe35rkR33WSM8TyvJm5XKvrmeUGysekVPqcwIjdL%2FN4PIZ3NLaoS9arhkgVjfAXT4h9rn3fSLaEWX%2FF4L1KOPOLAJGdQArW38lnlq7ErUv8P31ROLfaaCSuviMXsBUirRB6G7IH0IfwGV1jXUuDQ4pjfp9p5KINdQ3DZojoOJ9UcrwdGXzjjZoVTb%2BjwzABJDmg89J8N0sDBfsBtyHv47tiTz2B1m500oIBW2P2L9fdFoHvb%2FRWM7ASmouITClJ5moQ0tbtIdzCB0y45ayhdnFZSz10ANPxhbou3nnrJHrqhHO6ALFVG96jXCVhctiPBtYBJsO9ielzrhyVCb9uolsvS917LIPurVnqymWlsmfcca6%2FIQK14P3owa5LFDvQiFrgxkWrb1muLN1FX%2F41V2jyTVhMfblAghzq41TdEkWHDHX4jtGkYfoUQlx52tizTTB%2B%2FgKGpnN5pNMY55WmM0yPhJzmgSoJ%2BAom5jHizSO3T9NKMgDNyd%2BRspVlhKpHSibzPBtiGHZijargxveqEA%2BVsdg3C8va1SsRgvJi9W5S35Kpii4p%2Fj3blj0brTZ%2F%2FdIDLzCnprvEBjqkAQRwvJ0JydfbnDU5U01dJAp37%2F9Qyj4BSZeaStMTZhV48uzRlgYSZ63NOnB0WgoCCo7py9p9Q6dfA36DsgggqdYNwTs8kP%2FGNiCNzC276TKD%2FXG5mqGo%2FJBujITR2JwwfcW9dOMA8bjflCuu38y2fwkSsCyF59uFEIYjU3Tk4f8NuLwORnIn9%2FNEtowVEVELzv66CmUB0IjCt0hS9AFNy%2FNcL4ls&X-Amz-Signature=de4d0df7b04bcca10b62b8c3737b1b30772f8f9724a795efb6aaf2d47cb06fb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

```python

   
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663UQQFMZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtTZZOnYzSoe6G9yN1U8ULSYPhfmUDGz7YPPq%2BeV8TKQIhAK7KaE2nQV6gvwqr8yi24w4vSk88TCWPNHimgYWoOoQRKv8DCCQQABoMNjM3NDIzMTgzODA1IgwNsVsXqHkHWmf3D6Yq3AM%2FW8ctoPW7UZpjF23WOpPODJEmMq23CXn2Wr76H%2F8Mc2K4kgp3nRQEUJe35rkR33WSM8TyvJm5XKvrmeUGysekVPqcwIjdL%2FN4PIZ3NLaoS9arhkgVjfAXT4h9rn3fSLaEWX%2FF4L1KOPOLAJGdQArW38lnlq7ErUv8P31ROLfaaCSuviMXsBUirRB6G7IH0IfwGV1jXUuDQ4pjfp9p5KINdQ3DZojoOJ9UcrwdGXzjjZoVTb%2BjwzABJDmg89J8N0sDBfsBtyHv47tiTz2B1m500oIBW2P2L9fdFoHvb%2FRWM7ASmouITClJ5moQ0tbtIdzCB0y45ayhdnFZSz10ANPxhbou3nnrJHrqhHO6ALFVG96jXCVhctiPBtYBJsO9ielzrhyVCb9uolsvS917LIPurVnqymWlsmfcca6%2FIQK14P3owa5LFDvQiFrgxkWrb1muLN1FX%2F41V2jyTVhMfblAghzq41TdEkWHDHX4jtGkYfoUQlx52tizTTB%2B%2FgKGpnN5pNMY55WmM0yPhJzmgSoJ%2BAom5jHizSO3T9NKMgDNyd%2BRspVlhKpHSibzPBtiGHZijargxveqEA%2BVsdg3C8va1SsRgvJi9W5S35Kpii4p%2Fj3blj0brTZ%2F%2FdIDLzCnprvEBjqkAQRwvJ0JydfbnDU5U01dJAp37%2F9Qyj4BSZeaStMTZhV48uzRlgYSZ63NOnB0WgoCCo7py9p9Q6dfA36DsgggqdYNwTs8kP%2FGNiCNzC276TKD%2FXG5mqGo%2FJBujITR2JwwfcW9dOMA8bjflCuu38y2fwkSsCyF59uFEIYjU3Tk4f8NuLwORnIn9%2FNEtowVEVELzv66CmUB0IjCt0hS9AFNy%2FNcL4ls&X-Amz-Signature=3696079eaf959a1406855ecfcae9bf08bb5d94d21e9640556fa2db29c2837b77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663UQQFMZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtTZZOnYzSoe6G9yN1U8ULSYPhfmUDGz7YPPq%2BeV8TKQIhAK7KaE2nQV6gvwqr8yi24w4vSk88TCWPNHimgYWoOoQRKv8DCCQQABoMNjM3NDIzMTgzODA1IgwNsVsXqHkHWmf3D6Yq3AM%2FW8ctoPW7UZpjF23WOpPODJEmMq23CXn2Wr76H%2F8Mc2K4kgp3nRQEUJe35rkR33WSM8TyvJm5XKvrmeUGysekVPqcwIjdL%2FN4PIZ3NLaoS9arhkgVjfAXT4h9rn3fSLaEWX%2FF4L1KOPOLAJGdQArW38lnlq7ErUv8P31ROLfaaCSuviMXsBUirRB6G7IH0IfwGV1jXUuDQ4pjfp9p5KINdQ3DZojoOJ9UcrwdGXzjjZoVTb%2BjwzABJDmg89J8N0sDBfsBtyHv47tiTz2B1m500oIBW2P2L9fdFoHvb%2FRWM7ASmouITClJ5moQ0tbtIdzCB0y45ayhdnFZSz10ANPxhbou3nnrJHrqhHO6ALFVG96jXCVhctiPBtYBJsO9ielzrhyVCb9uolsvS917LIPurVnqymWlsmfcca6%2FIQK14P3owa5LFDvQiFrgxkWrb1muLN1FX%2F41V2jyTVhMfblAghzq41TdEkWHDHX4jtGkYfoUQlx52tizTTB%2B%2FgKGpnN5pNMY55WmM0yPhJzmgSoJ%2BAom5jHizSO3T9NKMgDNyd%2BRspVlhKpHSibzPBtiGHZijargxveqEA%2BVsdg3C8va1SsRgvJi9W5S35Kpii4p%2Fj3blj0brTZ%2F%2FdIDLzCnprvEBjqkAQRwvJ0JydfbnDU5U01dJAp37%2F9Qyj4BSZeaStMTZhV48uzRlgYSZ63NOnB0WgoCCo7py9p9Q6dfA36DsgggqdYNwTs8kP%2FGNiCNzC276TKD%2FXG5mqGo%2FJBujITR2JwwfcW9dOMA8bjflCuu38y2fwkSsCyF59uFEIYjU3Tk4f8NuLwORnIn9%2FNEtowVEVELzv66CmUB0IjCt0hS9AFNy%2FNcL4ls&X-Amz-Signature=a70ce4ef149eb0c4473299741ba877129eac06ec07b3fd1d43d65ff19fe6705a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663UQQFMZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtTZZOnYzSoe6G9yN1U8ULSYPhfmUDGz7YPPq%2BeV8TKQIhAK7KaE2nQV6gvwqr8yi24w4vSk88TCWPNHimgYWoOoQRKv8DCCQQABoMNjM3NDIzMTgzODA1IgwNsVsXqHkHWmf3D6Yq3AM%2FW8ctoPW7UZpjF23WOpPODJEmMq23CXn2Wr76H%2F8Mc2K4kgp3nRQEUJe35rkR33WSM8TyvJm5XKvrmeUGysekVPqcwIjdL%2FN4PIZ3NLaoS9arhkgVjfAXT4h9rn3fSLaEWX%2FF4L1KOPOLAJGdQArW38lnlq7ErUv8P31ROLfaaCSuviMXsBUirRB6G7IH0IfwGV1jXUuDQ4pjfp9p5KINdQ3DZojoOJ9UcrwdGXzjjZoVTb%2BjwzABJDmg89J8N0sDBfsBtyHv47tiTz2B1m500oIBW2P2L9fdFoHvb%2FRWM7ASmouITClJ5moQ0tbtIdzCB0y45ayhdnFZSz10ANPxhbou3nnrJHrqhHO6ALFVG96jXCVhctiPBtYBJsO9ielzrhyVCb9uolsvS917LIPurVnqymWlsmfcca6%2FIQK14P3owa5LFDvQiFrgxkWrb1muLN1FX%2F41V2jyTVhMfblAghzq41TdEkWHDHX4jtGkYfoUQlx52tizTTB%2B%2FgKGpnN5pNMY55WmM0yPhJzmgSoJ%2BAom5jHizSO3T9NKMgDNyd%2BRspVlhKpHSibzPBtiGHZijargxveqEA%2BVsdg3C8va1SsRgvJi9W5S35Kpii4p%2Fj3blj0brTZ%2F%2FdIDLzCnprvEBjqkAQRwvJ0JydfbnDU5U01dJAp37%2F9Qyj4BSZeaStMTZhV48uzRlgYSZ63NOnB0WgoCCo7py9p9Q6dfA36DsgggqdYNwTs8kP%2FGNiCNzC276TKD%2FXG5mqGo%2FJBujITR2JwwfcW9dOMA8bjflCuu38y2fwkSsCyF59uFEIYjU3Tk4f8NuLwORnIn9%2FNEtowVEVELzv66CmUB0IjCt0hS9AFNy%2FNcL4ls&X-Amz-Signature=1a8e3cd07134e766d59c4927b7dabacf760d6a4de5583ff9640861991dfb565f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663UQQFMZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtTZZOnYzSoe6G9yN1U8ULSYPhfmUDGz7YPPq%2BeV8TKQIhAK7KaE2nQV6gvwqr8yi24w4vSk88TCWPNHimgYWoOoQRKv8DCCQQABoMNjM3NDIzMTgzODA1IgwNsVsXqHkHWmf3D6Yq3AM%2FW8ctoPW7UZpjF23WOpPODJEmMq23CXn2Wr76H%2F8Mc2K4kgp3nRQEUJe35rkR33WSM8TyvJm5XKvrmeUGysekVPqcwIjdL%2FN4PIZ3NLaoS9arhkgVjfAXT4h9rn3fSLaEWX%2FF4L1KOPOLAJGdQArW38lnlq7ErUv8P31ROLfaaCSuviMXsBUirRB6G7IH0IfwGV1jXUuDQ4pjfp9p5KINdQ3DZojoOJ9UcrwdGXzjjZoVTb%2BjwzABJDmg89J8N0sDBfsBtyHv47tiTz2B1m500oIBW2P2L9fdFoHvb%2FRWM7ASmouITClJ5moQ0tbtIdzCB0y45ayhdnFZSz10ANPxhbou3nnrJHrqhHO6ALFVG96jXCVhctiPBtYBJsO9ielzrhyVCb9uolsvS917LIPurVnqymWlsmfcca6%2FIQK14P3owa5LFDvQiFrgxkWrb1muLN1FX%2F41V2jyTVhMfblAghzq41TdEkWHDHX4jtGkYfoUQlx52tizTTB%2B%2FgKGpnN5pNMY55WmM0yPhJzmgSoJ%2BAom5jHizSO3T9NKMgDNyd%2BRspVlhKpHSibzPBtiGHZijargxveqEA%2BVsdg3C8va1SsRgvJi9W5S35Kpii4p%2Fj3blj0brTZ%2F%2FdIDLzCnprvEBjqkAQRwvJ0JydfbnDU5U01dJAp37%2F9Qyj4BSZeaStMTZhV48uzRlgYSZ63NOnB0WgoCCo7py9p9Q6dfA36DsgggqdYNwTs8kP%2FGNiCNzC276TKD%2FXG5mqGo%2FJBujITR2JwwfcW9dOMA8bjflCuu38y2fwkSsCyF59uFEIYjU3Tk4f8NuLwORnIn9%2FNEtowVEVELzv66CmUB0IjCt0hS9AFNy%2FNcL4ls&X-Amz-Signature=e72b66039c21e622e18f8a33914b6b8c883d04f011fdc9c64356a51894398e83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

```yaml
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663UQQFMZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCtTZZOnYzSoe6G9yN1U8ULSYPhfmUDGz7YPPq%2BeV8TKQIhAK7KaE2nQV6gvwqr8yi24w4vSk88TCWPNHimgYWoOoQRKv8DCCQQABoMNjM3NDIzMTgzODA1IgwNsVsXqHkHWmf3D6Yq3AM%2FW8ctoPW7UZpjF23WOpPODJEmMq23CXn2Wr76H%2F8Mc2K4kgp3nRQEUJe35rkR33WSM8TyvJm5XKvrmeUGysekVPqcwIjdL%2FN4PIZ3NLaoS9arhkgVjfAXT4h9rn3fSLaEWX%2FF4L1KOPOLAJGdQArW38lnlq7ErUv8P31ROLfaaCSuviMXsBUirRB6G7IH0IfwGV1jXUuDQ4pjfp9p5KINdQ3DZojoOJ9UcrwdGXzjjZoVTb%2BjwzABJDmg89J8N0sDBfsBtyHv47tiTz2B1m500oIBW2P2L9fdFoHvb%2FRWM7ASmouITClJ5moQ0tbtIdzCB0y45ayhdnFZSz10ANPxhbou3nnrJHrqhHO6ALFVG96jXCVhctiPBtYBJsO9ielzrhyVCb9uolsvS917LIPurVnqymWlsmfcca6%2FIQK14P3owa5LFDvQiFrgxkWrb1muLN1FX%2F41V2jyTVhMfblAghzq41TdEkWHDHX4jtGkYfoUQlx52tizTTB%2B%2FgKGpnN5pNMY55WmM0yPhJzmgSoJ%2BAom5jHizSO3T9NKMgDNyd%2BRspVlhKpHSibzPBtiGHZijargxveqEA%2BVsdg3C8va1SsRgvJi9W5S35Kpii4p%2Fj3blj0brTZ%2F%2FdIDLzCnprvEBjqkAQRwvJ0JydfbnDU5U01dJAp37%2F9Qyj4BSZeaStMTZhV48uzRlgYSZ63NOnB0WgoCCo7py9p9Q6dfA36DsgggqdYNwTs8kP%2FGNiCNzC276TKD%2FXG5mqGo%2FJBujITR2JwwfcW9dOMA8bjflCuu38y2fwkSsCyF59uFEIYjU3Tk4f8NuLwORnIn9%2FNEtowVEVELzv66CmUB0IjCt0hS9AFNy%2FNcL4ls&X-Amz-Signature=a7fa7e4335eac97e268682993f18b7e287c6af5933e782875dca1ebc5fe7d192&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
