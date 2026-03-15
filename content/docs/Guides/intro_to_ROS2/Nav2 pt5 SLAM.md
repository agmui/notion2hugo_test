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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMJU3MNL%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRxK1F8vZEWqlYAedSKJi8YOiVb7ngLYHPyo3fHnI9iAiBngAp96Is4muEaAHmd8FnYDobRmNjQTr%2FIZFEIHj9%2FACqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJKNZnMyJsJbAF5WwKtwDOEc919ZQziqs4RtCAlDQ2U5CmZUjQXS0rrqn544d7RQysquAyfKrBnR7NyU%2BklJ%2FP65UBJLe3DuiLlAXVvljMEQS2vF9xyH56NZivWyA7SPA4GlenZSdkDm2SsAW%2B%2FH3gNvIeKzaIyswt0RgK4mkbJda6%2FylxpiuynRFUGB%2BqhczYOF4LKzyw2Pg2eNlN2D2Co9jOQek9O48cwja0BYZA0q%2BqO0OQJDeu4TztUbnzBD54uiQXWoVeFJEC5WyoQw1MpMQLZ1z8T8e9JwyjkJoAPE0ty1SJEqTRzhHc43XVjvmiySm9t9va%2FWYc314Vh9BRGluMnQYo18MSaAQXoKaoFqYQpvB1165Vx3FFRTkwNkFihQldYTx94kRXNZhWD4mqM50G%2Bd6GIGr5lrN7Z4fftnW9JiGVdXDhmGdnsjKzQGskia0QvxVrY%2BsXdVldhein%2FazkP82EitMvw%2BzDxO3pZh9hh6BO8Oe%2BFwimGN%2B2yPmyo5z64%2BGcKOeEh9Oih7OE5h4T9JHXLeOSBljo7o9yzHK4OBft%2BGQhzYuxmVEhdsRKpArk7jLxqq4s76f5Quqde8FuY%2F5bWZZ%2BmWB9zS4u6qzkoXuRnNVIMajW7M1U%2ByvlTV91QD9jry2hZ0w1ZDYzQY6pgEGxyFKSb9H%2FKYE8VXtkYEdasS%2FXJyH%2F808R1EKe7WQXpNjbpLGHCBdgcf7W5WH7xgxYE3vAjpXnPBiyGgPturUZkrgMObp4jvpETt3zGUYWITnGwDGd9Vk%2BoHD%2BxJUYTIrsq5cQOz6ocrg201VZLiPelKN0l%2FFzmHNmtljFF99SeIAUQVEysvBK7nMs5uRbNWdh4WN%2BzKRQv%2BISFYFo%2BxhpszkLBNy&X-Amz-Signature=ad192416994a0c42928428d98073b82f812a31b5fd03fa2c6238b2921d9be775&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMJU3MNL%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRxK1F8vZEWqlYAedSKJi8YOiVb7ngLYHPyo3fHnI9iAiBngAp96Is4muEaAHmd8FnYDobRmNjQTr%2FIZFEIHj9%2FACqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJKNZnMyJsJbAF5WwKtwDOEc919ZQziqs4RtCAlDQ2U5CmZUjQXS0rrqn544d7RQysquAyfKrBnR7NyU%2BklJ%2FP65UBJLe3DuiLlAXVvljMEQS2vF9xyH56NZivWyA7SPA4GlenZSdkDm2SsAW%2B%2FH3gNvIeKzaIyswt0RgK4mkbJda6%2FylxpiuynRFUGB%2BqhczYOF4LKzyw2Pg2eNlN2D2Co9jOQek9O48cwja0BYZA0q%2BqO0OQJDeu4TztUbnzBD54uiQXWoVeFJEC5WyoQw1MpMQLZ1z8T8e9JwyjkJoAPE0ty1SJEqTRzhHc43XVjvmiySm9t9va%2FWYc314Vh9BRGluMnQYo18MSaAQXoKaoFqYQpvB1165Vx3FFRTkwNkFihQldYTx94kRXNZhWD4mqM50G%2Bd6GIGr5lrN7Z4fftnW9JiGVdXDhmGdnsjKzQGskia0QvxVrY%2BsXdVldhein%2FazkP82EitMvw%2BzDxO3pZh9hh6BO8Oe%2BFwimGN%2B2yPmyo5z64%2BGcKOeEh9Oih7OE5h4T9JHXLeOSBljo7o9yzHK4OBft%2BGQhzYuxmVEhdsRKpArk7jLxqq4s76f5Quqde8FuY%2F5bWZZ%2BmWB9zS4u6qzkoXuRnNVIMajW7M1U%2ByvlTV91QD9jry2hZ0w1ZDYzQY6pgEGxyFKSb9H%2FKYE8VXtkYEdasS%2FXJyH%2F808R1EKe7WQXpNjbpLGHCBdgcf7W5WH7xgxYE3vAjpXnPBiyGgPturUZkrgMObp4jvpETt3zGUYWITnGwDGd9Vk%2BoHD%2BxJUYTIrsq5cQOz6ocrg201VZLiPelKN0l%2FFzmHNmtljFF99SeIAUQVEysvBK7nMs5uRbNWdh4WN%2BzKRQv%2BISFYFo%2BxhpszkLBNy&X-Amz-Signature=3557a541793e685bff4b537db92f060edfce0d78e9690d6922f57ac348a5e096&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMJU3MNL%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRxK1F8vZEWqlYAedSKJi8YOiVb7ngLYHPyo3fHnI9iAiBngAp96Is4muEaAHmd8FnYDobRmNjQTr%2FIZFEIHj9%2FACqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJKNZnMyJsJbAF5WwKtwDOEc919ZQziqs4RtCAlDQ2U5CmZUjQXS0rrqn544d7RQysquAyfKrBnR7NyU%2BklJ%2FP65UBJLe3DuiLlAXVvljMEQS2vF9xyH56NZivWyA7SPA4GlenZSdkDm2SsAW%2B%2FH3gNvIeKzaIyswt0RgK4mkbJda6%2FylxpiuynRFUGB%2BqhczYOF4LKzyw2Pg2eNlN2D2Co9jOQek9O48cwja0BYZA0q%2BqO0OQJDeu4TztUbnzBD54uiQXWoVeFJEC5WyoQw1MpMQLZ1z8T8e9JwyjkJoAPE0ty1SJEqTRzhHc43XVjvmiySm9t9va%2FWYc314Vh9BRGluMnQYo18MSaAQXoKaoFqYQpvB1165Vx3FFRTkwNkFihQldYTx94kRXNZhWD4mqM50G%2Bd6GIGr5lrN7Z4fftnW9JiGVdXDhmGdnsjKzQGskia0QvxVrY%2BsXdVldhein%2FazkP82EitMvw%2BzDxO3pZh9hh6BO8Oe%2BFwimGN%2B2yPmyo5z64%2BGcKOeEh9Oih7OE5h4T9JHXLeOSBljo7o9yzHK4OBft%2BGQhzYuxmVEhdsRKpArk7jLxqq4s76f5Quqde8FuY%2F5bWZZ%2BmWB9zS4u6qzkoXuRnNVIMajW7M1U%2ByvlTV91QD9jry2hZ0w1ZDYzQY6pgEGxyFKSb9H%2FKYE8VXtkYEdasS%2FXJyH%2F808R1EKe7WQXpNjbpLGHCBdgcf7W5WH7xgxYE3vAjpXnPBiyGgPturUZkrgMObp4jvpETt3zGUYWITnGwDGd9Vk%2BoHD%2BxJUYTIrsq5cQOz6ocrg201VZLiPelKN0l%2FFzmHNmtljFF99SeIAUQVEysvBK7nMs5uRbNWdh4WN%2BzKRQv%2BISFYFo%2BxhpszkLBNy&X-Amz-Signature=ab5e0d114595162d08449dd5ea33c27c41ac639d005a964a4e5fa535e42a052c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMJU3MNL%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRxK1F8vZEWqlYAedSKJi8YOiVb7ngLYHPyo3fHnI9iAiBngAp96Is4muEaAHmd8FnYDobRmNjQTr%2FIZFEIHj9%2FACqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJKNZnMyJsJbAF5WwKtwDOEc919ZQziqs4RtCAlDQ2U5CmZUjQXS0rrqn544d7RQysquAyfKrBnR7NyU%2BklJ%2FP65UBJLe3DuiLlAXVvljMEQS2vF9xyH56NZivWyA7SPA4GlenZSdkDm2SsAW%2B%2FH3gNvIeKzaIyswt0RgK4mkbJda6%2FylxpiuynRFUGB%2BqhczYOF4LKzyw2Pg2eNlN2D2Co9jOQek9O48cwja0BYZA0q%2BqO0OQJDeu4TztUbnzBD54uiQXWoVeFJEC5WyoQw1MpMQLZ1z8T8e9JwyjkJoAPE0ty1SJEqTRzhHc43XVjvmiySm9t9va%2FWYc314Vh9BRGluMnQYo18MSaAQXoKaoFqYQpvB1165Vx3FFRTkwNkFihQldYTx94kRXNZhWD4mqM50G%2Bd6GIGr5lrN7Z4fftnW9JiGVdXDhmGdnsjKzQGskia0QvxVrY%2BsXdVldhein%2FazkP82EitMvw%2BzDxO3pZh9hh6BO8Oe%2BFwimGN%2B2yPmyo5z64%2BGcKOeEh9Oih7OE5h4T9JHXLeOSBljo7o9yzHK4OBft%2BGQhzYuxmVEhdsRKpArk7jLxqq4s76f5Quqde8FuY%2F5bWZZ%2BmWB9zS4u6qzkoXuRnNVIMajW7M1U%2ByvlTV91QD9jry2hZ0w1ZDYzQY6pgEGxyFKSb9H%2FKYE8VXtkYEdasS%2FXJyH%2F808R1EKe7WQXpNjbpLGHCBdgcf7W5WH7xgxYE3vAjpXnPBiyGgPturUZkrgMObp4jvpETt3zGUYWITnGwDGd9Vk%2BoHD%2BxJUYTIrsq5cQOz6ocrg201VZLiPelKN0l%2FFzmHNmtljFF99SeIAUQVEysvBK7nMs5uRbNWdh4WN%2BzKRQv%2BISFYFo%2BxhpszkLBNy&X-Amz-Signature=07a1405639fe9044ce85b94467b1f913434f62f9ada85045da07a358f02f2272&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMJU3MNL%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRxK1F8vZEWqlYAedSKJi8YOiVb7ngLYHPyo3fHnI9iAiBngAp96Is4muEaAHmd8FnYDobRmNjQTr%2FIZFEIHj9%2FACqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJKNZnMyJsJbAF5WwKtwDOEc919ZQziqs4RtCAlDQ2U5CmZUjQXS0rrqn544d7RQysquAyfKrBnR7NyU%2BklJ%2FP65UBJLe3DuiLlAXVvljMEQS2vF9xyH56NZivWyA7SPA4GlenZSdkDm2SsAW%2B%2FH3gNvIeKzaIyswt0RgK4mkbJda6%2FylxpiuynRFUGB%2BqhczYOF4LKzyw2Pg2eNlN2D2Co9jOQek9O48cwja0BYZA0q%2BqO0OQJDeu4TztUbnzBD54uiQXWoVeFJEC5WyoQw1MpMQLZ1z8T8e9JwyjkJoAPE0ty1SJEqTRzhHc43XVjvmiySm9t9va%2FWYc314Vh9BRGluMnQYo18MSaAQXoKaoFqYQpvB1165Vx3FFRTkwNkFihQldYTx94kRXNZhWD4mqM50G%2Bd6GIGr5lrN7Z4fftnW9JiGVdXDhmGdnsjKzQGskia0QvxVrY%2BsXdVldhein%2FazkP82EitMvw%2BzDxO3pZh9hh6BO8Oe%2BFwimGN%2B2yPmyo5z64%2BGcKOeEh9Oih7OE5h4T9JHXLeOSBljo7o9yzHK4OBft%2BGQhzYuxmVEhdsRKpArk7jLxqq4s76f5Quqde8FuY%2F5bWZZ%2BmWB9zS4u6qzkoXuRnNVIMajW7M1U%2ByvlTV91QD9jry2hZ0w1ZDYzQY6pgEGxyFKSb9H%2FKYE8VXtkYEdasS%2FXJyH%2F808R1EKe7WQXpNjbpLGHCBdgcf7W5WH7xgxYE3vAjpXnPBiyGgPturUZkrgMObp4jvpETt3zGUYWITnGwDGd9Vk%2BoHD%2BxJUYTIrsq5cQOz6ocrg201VZLiPelKN0l%2FFzmHNmtljFF99SeIAUQVEysvBK7nMs5uRbNWdh4WN%2BzKRQv%2BISFYFo%2BxhpszkLBNy&X-Amz-Signature=edccbddd89963c3e9257e4da07728128619578a611e3afb282129d42ef810bc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMJU3MNL%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRxK1F8vZEWqlYAedSKJi8YOiVb7ngLYHPyo3fHnI9iAiBngAp96Is4muEaAHmd8FnYDobRmNjQTr%2FIZFEIHj9%2FACqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJKNZnMyJsJbAF5WwKtwDOEc919ZQziqs4RtCAlDQ2U5CmZUjQXS0rrqn544d7RQysquAyfKrBnR7NyU%2BklJ%2FP65UBJLe3DuiLlAXVvljMEQS2vF9xyH56NZivWyA7SPA4GlenZSdkDm2SsAW%2B%2FH3gNvIeKzaIyswt0RgK4mkbJda6%2FylxpiuynRFUGB%2BqhczYOF4LKzyw2Pg2eNlN2D2Co9jOQek9O48cwja0BYZA0q%2BqO0OQJDeu4TztUbnzBD54uiQXWoVeFJEC5WyoQw1MpMQLZ1z8T8e9JwyjkJoAPE0ty1SJEqTRzhHc43XVjvmiySm9t9va%2FWYc314Vh9BRGluMnQYo18MSaAQXoKaoFqYQpvB1165Vx3FFRTkwNkFihQldYTx94kRXNZhWD4mqM50G%2Bd6GIGr5lrN7Z4fftnW9JiGVdXDhmGdnsjKzQGskia0QvxVrY%2BsXdVldhein%2FazkP82EitMvw%2BzDxO3pZh9hh6BO8Oe%2BFwimGN%2B2yPmyo5z64%2BGcKOeEh9Oih7OE5h4T9JHXLeOSBljo7o9yzHK4OBft%2BGQhzYuxmVEhdsRKpArk7jLxqq4s76f5Quqde8FuY%2F5bWZZ%2BmWB9zS4u6qzkoXuRnNVIMajW7M1U%2ByvlTV91QD9jry2hZ0w1ZDYzQY6pgEGxyFKSb9H%2FKYE8VXtkYEdasS%2FXJyH%2F808R1EKe7WQXpNjbpLGHCBdgcf7W5WH7xgxYE3vAjpXnPBiyGgPturUZkrgMObp4jvpETt3zGUYWITnGwDGd9Vk%2BoHD%2BxJUYTIrsq5cQOz6ocrg201VZLiPelKN0l%2FFzmHNmtljFF99SeIAUQVEysvBK7nMs5uRbNWdh4WN%2BzKRQv%2BISFYFo%2BxhpszkLBNy&X-Amz-Signature=681395d18b298d3bc84ab31d31a82cdd6580cb53d513d889e2829b2c66297870&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMJU3MNL%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRxK1F8vZEWqlYAedSKJi8YOiVb7ngLYHPyo3fHnI9iAiBngAp96Is4muEaAHmd8FnYDobRmNjQTr%2FIZFEIHj9%2FACqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJKNZnMyJsJbAF5WwKtwDOEc919ZQziqs4RtCAlDQ2U5CmZUjQXS0rrqn544d7RQysquAyfKrBnR7NyU%2BklJ%2FP65UBJLe3DuiLlAXVvljMEQS2vF9xyH56NZivWyA7SPA4GlenZSdkDm2SsAW%2B%2FH3gNvIeKzaIyswt0RgK4mkbJda6%2FylxpiuynRFUGB%2BqhczYOF4LKzyw2Pg2eNlN2D2Co9jOQek9O48cwja0BYZA0q%2BqO0OQJDeu4TztUbnzBD54uiQXWoVeFJEC5WyoQw1MpMQLZ1z8T8e9JwyjkJoAPE0ty1SJEqTRzhHc43XVjvmiySm9t9va%2FWYc314Vh9BRGluMnQYo18MSaAQXoKaoFqYQpvB1165Vx3FFRTkwNkFihQldYTx94kRXNZhWD4mqM50G%2Bd6GIGr5lrN7Z4fftnW9JiGVdXDhmGdnsjKzQGskia0QvxVrY%2BsXdVldhein%2FazkP82EitMvw%2BzDxO3pZh9hh6BO8Oe%2BFwimGN%2B2yPmyo5z64%2BGcKOeEh9Oih7OE5h4T9JHXLeOSBljo7o9yzHK4OBft%2BGQhzYuxmVEhdsRKpArk7jLxqq4s76f5Quqde8FuY%2F5bWZZ%2BmWB9zS4u6qzkoXuRnNVIMajW7M1U%2ByvlTV91QD9jry2hZ0w1ZDYzQY6pgEGxyFKSb9H%2FKYE8VXtkYEdasS%2FXJyH%2F808R1EKe7WQXpNjbpLGHCBdgcf7W5WH7xgxYE3vAjpXnPBiyGgPturUZkrgMObp4jvpETt3zGUYWITnGwDGd9Vk%2BoHD%2BxJUYTIrsq5cQOz6ocrg201VZLiPelKN0l%2FFzmHNmtljFF99SeIAUQVEysvBK7nMs5uRbNWdh4WN%2BzKRQv%2BISFYFo%2BxhpszkLBNy&X-Amz-Signature=ecf126bc9eca7a79589c90f1bae267507c04849ce40604abb969e593df96d30d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMJU3MNL%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRxK1F8vZEWqlYAedSKJi8YOiVb7ngLYHPyo3fHnI9iAiBngAp96Is4muEaAHmd8FnYDobRmNjQTr%2FIZFEIHj9%2FACqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJKNZnMyJsJbAF5WwKtwDOEc919ZQziqs4RtCAlDQ2U5CmZUjQXS0rrqn544d7RQysquAyfKrBnR7NyU%2BklJ%2FP65UBJLe3DuiLlAXVvljMEQS2vF9xyH56NZivWyA7SPA4GlenZSdkDm2SsAW%2B%2FH3gNvIeKzaIyswt0RgK4mkbJda6%2FylxpiuynRFUGB%2BqhczYOF4LKzyw2Pg2eNlN2D2Co9jOQek9O48cwja0BYZA0q%2BqO0OQJDeu4TztUbnzBD54uiQXWoVeFJEC5WyoQw1MpMQLZ1z8T8e9JwyjkJoAPE0ty1SJEqTRzhHc43XVjvmiySm9t9va%2FWYc314Vh9BRGluMnQYo18MSaAQXoKaoFqYQpvB1165Vx3FFRTkwNkFihQldYTx94kRXNZhWD4mqM50G%2Bd6GIGr5lrN7Z4fftnW9JiGVdXDhmGdnsjKzQGskia0QvxVrY%2BsXdVldhein%2FazkP82EitMvw%2BzDxO3pZh9hh6BO8Oe%2BFwimGN%2B2yPmyo5z64%2BGcKOeEh9Oih7OE5h4T9JHXLeOSBljo7o9yzHK4OBft%2BGQhzYuxmVEhdsRKpArk7jLxqq4s76f5Quqde8FuY%2F5bWZZ%2BmWB9zS4u6qzkoXuRnNVIMajW7M1U%2ByvlTV91QD9jry2hZ0w1ZDYzQY6pgEGxyFKSb9H%2FKYE8VXtkYEdasS%2FXJyH%2F808R1EKe7WQXpNjbpLGHCBdgcf7W5WH7xgxYE3vAjpXnPBiyGgPturUZkrgMObp4jvpETt3zGUYWITnGwDGd9Vk%2BoHD%2BxJUYTIrsq5cQOz6ocrg201VZLiPelKN0l%2FFzmHNmtljFF99SeIAUQVEysvBK7nMs5uRbNWdh4WN%2BzKRQv%2BISFYFo%2BxhpszkLBNy&X-Amz-Signature=85d63cd548e853ec6858e41a5ea583288099fdda1fd8d93d3c65d5f7c5687161&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMJU3MNL%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRxK1F8vZEWqlYAedSKJi8YOiVb7ngLYHPyo3fHnI9iAiBngAp96Is4muEaAHmd8FnYDobRmNjQTr%2FIZFEIHj9%2FACqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJKNZnMyJsJbAF5WwKtwDOEc919ZQziqs4RtCAlDQ2U5CmZUjQXS0rrqn544d7RQysquAyfKrBnR7NyU%2BklJ%2FP65UBJLe3DuiLlAXVvljMEQS2vF9xyH56NZivWyA7SPA4GlenZSdkDm2SsAW%2B%2FH3gNvIeKzaIyswt0RgK4mkbJda6%2FylxpiuynRFUGB%2BqhczYOF4LKzyw2Pg2eNlN2D2Co9jOQek9O48cwja0BYZA0q%2BqO0OQJDeu4TztUbnzBD54uiQXWoVeFJEC5WyoQw1MpMQLZ1z8T8e9JwyjkJoAPE0ty1SJEqTRzhHc43XVjvmiySm9t9va%2FWYc314Vh9BRGluMnQYo18MSaAQXoKaoFqYQpvB1165Vx3FFRTkwNkFihQldYTx94kRXNZhWD4mqM50G%2Bd6GIGr5lrN7Z4fftnW9JiGVdXDhmGdnsjKzQGskia0QvxVrY%2BsXdVldhein%2FazkP82EitMvw%2BzDxO3pZh9hh6BO8Oe%2BFwimGN%2B2yPmyo5z64%2BGcKOeEh9Oih7OE5h4T9JHXLeOSBljo7o9yzHK4OBft%2BGQhzYuxmVEhdsRKpArk7jLxqq4s76f5Quqde8FuY%2F5bWZZ%2BmWB9zS4u6qzkoXuRnNVIMajW7M1U%2ByvlTV91QD9jry2hZ0w1ZDYzQY6pgEGxyFKSb9H%2FKYE8VXtkYEdasS%2FXJyH%2F808R1EKe7WQXpNjbpLGHCBdgcf7W5WH7xgxYE3vAjpXnPBiyGgPturUZkrgMObp4jvpETt3zGUYWITnGwDGd9Vk%2BoHD%2BxJUYTIrsq5cQOz6ocrg201VZLiPelKN0l%2FFzmHNmtljFF99SeIAUQVEysvBK7nMs5uRbNWdh4WN%2BzKRQv%2BISFYFo%2BxhpszkLBNy&X-Amz-Signature=a71aac985db557ce8c220a0cca3f5853363a2d9fae53a8f1a01c01bbf350dee9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMJU3MNL%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRxK1F8vZEWqlYAedSKJi8YOiVb7ngLYHPyo3fHnI9iAiBngAp96Is4muEaAHmd8FnYDobRmNjQTr%2FIZFEIHj9%2FACqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJKNZnMyJsJbAF5WwKtwDOEc919ZQziqs4RtCAlDQ2U5CmZUjQXS0rrqn544d7RQysquAyfKrBnR7NyU%2BklJ%2FP65UBJLe3DuiLlAXVvljMEQS2vF9xyH56NZivWyA7SPA4GlenZSdkDm2SsAW%2B%2FH3gNvIeKzaIyswt0RgK4mkbJda6%2FylxpiuynRFUGB%2BqhczYOF4LKzyw2Pg2eNlN2D2Co9jOQek9O48cwja0BYZA0q%2BqO0OQJDeu4TztUbnzBD54uiQXWoVeFJEC5WyoQw1MpMQLZ1z8T8e9JwyjkJoAPE0ty1SJEqTRzhHc43XVjvmiySm9t9va%2FWYc314Vh9BRGluMnQYo18MSaAQXoKaoFqYQpvB1165Vx3FFRTkwNkFihQldYTx94kRXNZhWD4mqM50G%2Bd6GIGr5lrN7Z4fftnW9JiGVdXDhmGdnsjKzQGskia0QvxVrY%2BsXdVldhein%2FazkP82EitMvw%2BzDxO3pZh9hh6BO8Oe%2BFwimGN%2B2yPmyo5z64%2BGcKOeEh9Oih7OE5h4T9JHXLeOSBljo7o9yzHK4OBft%2BGQhzYuxmVEhdsRKpArk7jLxqq4s76f5Quqde8FuY%2F5bWZZ%2BmWB9zS4u6qzkoXuRnNVIMajW7M1U%2ByvlTV91QD9jry2hZ0w1ZDYzQY6pgEGxyFKSb9H%2FKYE8VXtkYEdasS%2FXJyH%2F808R1EKe7WQXpNjbpLGHCBdgcf7W5WH7xgxYE3vAjpXnPBiyGgPturUZkrgMObp4jvpETt3zGUYWITnGwDGd9Vk%2BoHD%2BxJUYTIrsq5cQOz6ocrg201VZLiPelKN0l%2FFzmHNmtljFF99SeIAUQVEysvBK7nMs5uRbNWdh4WN%2BzKRQv%2BISFYFo%2BxhpszkLBNy&X-Amz-Signature=140cd69947ce3b7d9f58388cb27d2f4f0d75e84e65d1276452661ec91b512c05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMJU3MNL%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRxK1F8vZEWqlYAedSKJi8YOiVb7ngLYHPyo3fHnI9iAiBngAp96Is4muEaAHmd8FnYDobRmNjQTr%2FIZFEIHj9%2FACqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJKNZnMyJsJbAF5WwKtwDOEc919ZQziqs4RtCAlDQ2U5CmZUjQXS0rrqn544d7RQysquAyfKrBnR7NyU%2BklJ%2FP65UBJLe3DuiLlAXVvljMEQS2vF9xyH56NZivWyA7SPA4GlenZSdkDm2SsAW%2B%2FH3gNvIeKzaIyswt0RgK4mkbJda6%2FylxpiuynRFUGB%2BqhczYOF4LKzyw2Pg2eNlN2D2Co9jOQek9O48cwja0BYZA0q%2BqO0OQJDeu4TztUbnzBD54uiQXWoVeFJEC5WyoQw1MpMQLZ1z8T8e9JwyjkJoAPE0ty1SJEqTRzhHc43XVjvmiySm9t9va%2FWYc314Vh9BRGluMnQYo18MSaAQXoKaoFqYQpvB1165Vx3FFRTkwNkFihQldYTx94kRXNZhWD4mqM50G%2Bd6GIGr5lrN7Z4fftnW9JiGVdXDhmGdnsjKzQGskia0QvxVrY%2BsXdVldhein%2FazkP82EitMvw%2BzDxO3pZh9hh6BO8Oe%2BFwimGN%2B2yPmyo5z64%2BGcKOeEh9Oih7OE5h4T9JHXLeOSBljo7o9yzHK4OBft%2BGQhzYuxmVEhdsRKpArk7jLxqq4s76f5Quqde8FuY%2F5bWZZ%2BmWB9zS4u6qzkoXuRnNVIMajW7M1U%2ByvlTV91QD9jry2hZ0w1ZDYzQY6pgEGxyFKSb9H%2FKYE8VXtkYEdasS%2FXJyH%2F808R1EKe7WQXpNjbpLGHCBdgcf7W5WH7xgxYE3vAjpXnPBiyGgPturUZkrgMObp4jvpETt3zGUYWITnGwDGd9Vk%2BoHD%2BxJUYTIrsq5cQOz6ocrg201VZLiPelKN0l%2FFzmHNmtljFF99SeIAUQVEysvBK7nMs5uRbNWdh4WN%2BzKRQv%2BISFYFo%2BxhpszkLBNy&X-Amz-Signature=bf5da42329f0c2ef5d045861a1f4d4db627de3fc6fdc90b2b3830436f061b3d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMJU3MNL%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRxK1F8vZEWqlYAedSKJi8YOiVb7ngLYHPyo3fHnI9iAiBngAp96Is4muEaAHmd8FnYDobRmNjQTr%2FIZFEIHj9%2FACqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJKNZnMyJsJbAF5WwKtwDOEc919ZQziqs4RtCAlDQ2U5CmZUjQXS0rrqn544d7RQysquAyfKrBnR7NyU%2BklJ%2FP65UBJLe3DuiLlAXVvljMEQS2vF9xyH56NZivWyA7SPA4GlenZSdkDm2SsAW%2B%2FH3gNvIeKzaIyswt0RgK4mkbJda6%2FylxpiuynRFUGB%2BqhczYOF4LKzyw2Pg2eNlN2D2Co9jOQek9O48cwja0BYZA0q%2BqO0OQJDeu4TztUbnzBD54uiQXWoVeFJEC5WyoQw1MpMQLZ1z8T8e9JwyjkJoAPE0ty1SJEqTRzhHc43XVjvmiySm9t9va%2FWYc314Vh9BRGluMnQYo18MSaAQXoKaoFqYQpvB1165Vx3FFRTkwNkFihQldYTx94kRXNZhWD4mqM50G%2Bd6GIGr5lrN7Z4fftnW9JiGVdXDhmGdnsjKzQGskia0QvxVrY%2BsXdVldhein%2FazkP82EitMvw%2BzDxO3pZh9hh6BO8Oe%2BFwimGN%2B2yPmyo5z64%2BGcKOeEh9Oih7OE5h4T9JHXLeOSBljo7o9yzHK4OBft%2BGQhzYuxmVEhdsRKpArk7jLxqq4s76f5Quqde8FuY%2F5bWZZ%2BmWB9zS4u6qzkoXuRnNVIMajW7M1U%2ByvlTV91QD9jry2hZ0w1ZDYzQY6pgEGxyFKSb9H%2FKYE8VXtkYEdasS%2FXJyH%2F808R1EKe7WQXpNjbpLGHCBdgcf7W5WH7xgxYE3vAjpXnPBiyGgPturUZkrgMObp4jvpETt3zGUYWITnGwDGd9Vk%2BoHD%2BxJUYTIrsq5cQOz6ocrg201VZLiPelKN0l%2FFzmHNmtljFF99SeIAUQVEysvBK7nMs5uRbNWdh4WN%2BzKRQv%2BISFYFo%2BxhpszkLBNy&X-Amz-Signature=d6edf111e084346cd8c1c4b54b9c421e1ab6a7672c781e223497f27a9f6a0250&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMJU3MNL%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRxK1F8vZEWqlYAedSKJi8YOiVb7ngLYHPyo3fHnI9iAiBngAp96Is4muEaAHmd8FnYDobRmNjQTr%2FIZFEIHj9%2FACqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJKNZnMyJsJbAF5WwKtwDOEc919ZQziqs4RtCAlDQ2U5CmZUjQXS0rrqn544d7RQysquAyfKrBnR7NyU%2BklJ%2FP65UBJLe3DuiLlAXVvljMEQS2vF9xyH56NZivWyA7SPA4GlenZSdkDm2SsAW%2B%2FH3gNvIeKzaIyswt0RgK4mkbJda6%2FylxpiuynRFUGB%2BqhczYOF4LKzyw2Pg2eNlN2D2Co9jOQek9O48cwja0BYZA0q%2BqO0OQJDeu4TztUbnzBD54uiQXWoVeFJEC5WyoQw1MpMQLZ1z8T8e9JwyjkJoAPE0ty1SJEqTRzhHc43XVjvmiySm9t9va%2FWYc314Vh9BRGluMnQYo18MSaAQXoKaoFqYQpvB1165Vx3FFRTkwNkFihQldYTx94kRXNZhWD4mqM50G%2Bd6GIGr5lrN7Z4fftnW9JiGVdXDhmGdnsjKzQGskia0QvxVrY%2BsXdVldhein%2FazkP82EitMvw%2BzDxO3pZh9hh6BO8Oe%2BFwimGN%2B2yPmyo5z64%2BGcKOeEh9Oih7OE5h4T9JHXLeOSBljo7o9yzHK4OBft%2BGQhzYuxmVEhdsRKpArk7jLxqq4s76f5Quqde8FuY%2F5bWZZ%2BmWB9zS4u6qzkoXuRnNVIMajW7M1U%2ByvlTV91QD9jry2hZ0w1ZDYzQY6pgEGxyFKSb9H%2FKYE8VXtkYEdasS%2FXJyH%2F808R1EKe7WQXpNjbpLGHCBdgcf7W5WH7xgxYE3vAjpXnPBiyGgPturUZkrgMObp4jvpETt3zGUYWITnGwDGd9Vk%2BoHD%2BxJUYTIrsq5cQOz6ocrg201VZLiPelKN0l%2FFzmHNmtljFF99SeIAUQVEysvBK7nMs5uRbNWdh4WN%2BzKRQv%2BISFYFo%2BxhpszkLBNy&X-Amz-Signature=743f9433983c902d0b39720b536e90077bea3d3257eb1569cabdaaa994ead90d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMJU3MNL%2F20260315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260315T023014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRxK1F8vZEWqlYAedSKJi8YOiVb7ngLYHPyo3fHnI9iAiBngAp96Is4muEaAHmd8FnYDobRmNjQTr%2FIZFEIHj9%2FACqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJKNZnMyJsJbAF5WwKtwDOEc919ZQziqs4RtCAlDQ2U5CmZUjQXS0rrqn544d7RQysquAyfKrBnR7NyU%2BklJ%2FP65UBJLe3DuiLlAXVvljMEQS2vF9xyH56NZivWyA7SPA4GlenZSdkDm2SsAW%2B%2FH3gNvIeKzaIyswt0RgK4mkbJda6%2FylxpiuynRFUGB%2BqhczYOF4LKzyw2Pg2eNlN2D2Co9jOQek9O48cwja0BYZA0q%2BqO0OQJDeu4TztUbnzBD54uiQXWoVeFJEC5WyoQw1MpMQLZ1z8T8e9JwyjkJoAPE0ty1SJEqTRzhHc43XVjvmiySm9t9va%2FWYc314Vh9BRGluMnQYo18MSaAQXoKaoFqYQpvB1165Vx3FFRTkwNkFihQldYTx94kRXNZhWD4mqM50G%2Bd6GIGr5lrN7Z4fftnW9JiGVdXDhmGdnsjKzQGskia0QvxVrY%2BsXdVldhein%2FazkP82EitMvw%2BzDxO3pZh9hh6BO8Oe%2BFwimGN%2B2yPmyo5z64%2BGcKOeEh9Oih7OE5h4T9JHXLeOSBljo7o9yzHK4OBft%2BGQhzYuxmVEhdsRKpArk7jLxqq4s76f5Quqde8FuY%2F5bWZZ%2BmWB9zS4u6qzkoXuRnNVIMajW7M1U%2ByvlTV91QD9jry2hZ0w1ZDYzQY6pgEGxyFKSb9H%2FKYE8VXtkYEdasS%2FXJyH%2F808R1EKe7WQXpNjbpLGHCBdgcf7W5WH7xgxYE3vAjpXnPBiyGgPturUZkrgMObp4jvpETt3zGUYWITnGwDGd9Vk%2BoHD%2BxJUYTIrsq5cQOz6ocrg201VZLiPelKN0l%2FFzmHNmtljFF99SeIAUQVEysvBK7nMs5uRbNWdh4WN%2BzKRQv%2BISFYFo%2BxhpszkLBNy&X-Amz-Signature=963281d7dcd0aac2ad8fc125e90f3055cf7f6bc09fae3c86b8dcc65ea69a1005&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
