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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLEDNQMN%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCICJFsD7UIosWoT8ZyDVkVy7qW1Mk1BmkZrUcyhqEHH0LAiEApM92cJZ30RFffydesJasCeFcv%2FnYWYR2KnILIWbDiLQqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0z7NMjD6vGJd6WFCrcA8NBCf2TYuywAU%2BFZJpjVOpP%2BxdTxNCv3v%2FxY774dy56xMFDMI2MVdbjaqzZ%2FIHxbJRyd4OX3P0aP%2Bjcmvj%2BK6JvoSq1g4GZrrO4vPCtjUyA5QsXxHDnzH3pyJeXEC32oDsE7FBfrrHiN3pv%2B80A71DTBZzNNkdZFVoYPflk%2FdJWrpIVGLzg%2FKpmu0CBQqAaOUk00W8JQeVjL%2FzBcHSTUrUiy6E6%2FZPWr7dAWiR2f8ejYIRnM%2FnjLH%2BVMlGJ1gWSnrjIxAntLjY1vucCilspSXfnJkW4XKnFZmhZQK7W0Hn74y%2BF5IUfLWh9793lkJHAScBXO8Xys257OY8ubOtyD5WkdnL3ITF%2FdduMGl0XNGdPmpe9TZkigN58px1g27bO9ZIBlVS4Vm%2BBMlEBqbLh9UKZ0o6RL3VyI%2BU6wYCyTIG7fQRDr3aAE0Y2NOgaaAcVb9i9agiLudrDRodZQlfdNp%2BeBqPuU0NaAumBxWmX3bj83s2qyXOEJWjOpHiPpAaprUWSvN5lgkklHMgCEJpTyXmgCrkG2yEAApfFJrfiV4IpzFg%2BuhrFz3szaZBjSwICQ%2B0mo%2BC%2FHZd36UGvHnds8JH9FVlUva3gqNKpbvzcPVzkQn5mh%2B338M1rK%2BuaML6nqNEGOqUB%2Bg35NTCCgrMwchhPHSo8vGa9L8qKMX919bU6uGy7gstEVSTqa3sEYKmmSOwNClczptg0Vj267r%2B3n%2BFDz7O1riL0ypu7DEk4sKGQjhkSjIUMTdhbiB3mgD%2FoakEl9Z5LFa9S3494Q0mxOYfslAAb0lv0aQKQMx1ylyqVCMFwh%2BiKRL98HUbFqfH2i6%2FRTQ3zpn1gypTZFTntno2NkbM%2B45uTL%2Bri&X-Amz-Signature=3aab5a8d9ff9a243d62572bfdc56257fa26d871961003748fd7a8eab55ff954e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLEDNQMN%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCICJFsD7UIosWoT8ZyDVkVy7qW1Mk1BmkZrUcyhqEHH0LAiEApM92cJZ30RFffydesJasCeFcv%2FnYWYR2KnILIWbDiLQqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0z7NMjD6vGJd6WFCrcA8NBCf2TYuywAU%2BFZJpjVOpP%2BxdTxNCv3v%2FxY774dy56xMFDMI2MVdbjaqzZ%2FIHxbJRyd4OX3P0aP%2Bjcmvj%2BK6JvoSq1g4GZrrO4vPCtjUyA5QsXxHDnzH3pyJeXEC32oDsE7FBfrrHiN3pv%2B80A71DTBZzNNkdZFVoYPflk%2FdJWrpIVGLzg%2FKpmu0CBQqAaOUk00W8JQeVjL%2FzBcHSTUrUiy6E6%2FZPWr7dAWiR2f8ejYIRnM%2FnjLH%2BVMlGJ1gWSnrjIxAntLjY1vucCilspSXfnJkW4XKnFZmhZQK7W0Hn74y%2BF5IUfLWh9793lkJHAScBXO8Xys257OY8ubOtyD5WkdnL3ITF%2FdduMGl0XNGdPmpe9TZkigN58px1g27bO9ZIBlVS4Vm%2BBMlEBqbLh9UKZ0o6RL3VyI%2BU6wYCyTIG7fQRDr3aAE0Y2NOgaaAcVb9i9agiLudrDRodZQlfdNp%2BeBqPuU0NaAumBxWmX3bj83s2qyXOEJWjOpHiPpAaprUWSvN5lgkklHMgCEJpTyXmgCrkG2yEAApfFJrfiV4IpzFg%2BuhrFz3szaZBjSwICQ%2B0mo%2BC%2FHZd36UGvHnds8JH9FVlUva3gqNKpbvzcPVzkQn5mh%2B338M1rK%2BuaML6nqNEGOqUB%2Bg35NTCCgrMwchhPHSo8vGa9L8qKMX919bU6uGy7gstEVSTqa3sEYKmmSOwNClczptg0Vj267r%2B3n%2BFDz7O1riL0ypu7DEk4sKGQjhkSjIUMTdhbiB3mgD%2FoakEl9Z5LFa9S3494Q0mxOYfslAAb0lv0aQKQMx1ylyqVCMFwh%2BiKRL98HUbFqfH2i6%2FRTQ3zpn1gypTZFTntno2NkbM%2B45uTL%2Bri&X-Amz-Signature=727c2836723aeec0ed443119543e9e46d8484390e787f81ed626707becea54d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLEDNQMN%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCICJFsD7UIosWoT8ZyDVkVy7qW1Mk1BmkZrUcyhqEHH0LAiEApM92cJZ30RFffydesJasCeFcv%2FnYWYR2KnILIWbDiLQqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0z7NMjD6vGJd6WFCrcA8NBCf2TYuywAU%2BFZJpjVOpP%2BxdTxNCv3v%2FxY774dy56xMFDMI2MVdbjaqzZ%2FIHxbJRyd4OX3P0aP%2Bjcmvj%2BK6JvoSq1g4GZrrO4vPCtjUyA5QsXxHDnzH3pyJeXEC32oDsE7FBfrrHiN3pv%2B80A71DTBZzNNkdZFVoYPflk%2FdJWrpIVGLzg%2FKpmu0CBQqAaOUk00W8JQeVjL%2FzBcHSTUrUiy6E6%2FZPWr7dAWiR2f8ejYIRnM%2FnjLH%2BVMlGJ1gWSnrjIxAntLjY1vucCilspSXfnJkW4XKnFZmhZQK7W0Hn74y%2BF5IUfLWh9793lkJHAScBXO8Xys257OY8ubOtyD5WkdnL3ITF%2FdduMGl0XNGdPmpe9TZkigN58px1g27bO9ZIBlVS4Vm%2BBMlEBqbLh9UKZ0o6RL3VyI%2BU6wYCyTIG7fQRDr3aAE0Y2NOgaaAcVb9i9agiLudrDRodZQlfdNp%2BeBqPuU0NaAumBxWmX3bj83s2qyXOEJWjOpHiPpAaprUWSvN5lgkklHMgCEJpTyXmgCrkG2yEAApfFJrfiV4IpzFg%2BuhrFz3szaZBjSwICQ%2B0mo%2BC%2FHZd36UGvHnds8JH9FVlUva3gqNKpbvzcPVzkQn5mh%2B338M1rK%2BuaML6nqNEGOqUB%2Bg35NTCCgrMwchhPHSo8vGa9L8qKMX919bU6uGy7gstEVSTqa3sEYKmmSOwNClczptg0Vj267r%2B3n%2BFDz7O1riL0ypu7DEk4sKGQjhkSjIUMTdhbiB3mgD%2FoakEl9Z5LFa9S3494Q0mxOYfslAAb0lv0aQKQMx1ylyqVCMFwh%2BiKRL98HUbFqfH2i6%2FRTQ3zpn1gypTZFTntno2NkbM%2B45uTL%2Bri&X-Amz-Signature=9a8b462045578e6f89a44277a0b4f1fb146d9c8c12d185855800e85f36229666&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLEDNQMN%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCICJFsD7UIosWoT8ZyDVkVy7qW1Mk1BmkZrUcyhqEHH0LAiEApM92cJZ30RFffydesJasCeFcv%2FnYWYR2KnILIWbDiLQqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0z7NMjD6vGJd6WFCrcA8NBCf2TYuywAU%2BFZJpjVOpP%2BxdTxNCv3v%2FxY774dy56xMFDMI2MVdbjaqzZ%2FIHxbJRyd4OX3P0aP%2Bjcmvj%2BK6JvoSq1g4GZrrO4vPCtjUyA5QsXxHDnzH3pyJeXEC32oDsE7FBfrrHiN3pv%2B80A71DTBZzNNkdZFVoYPflk%2FdJWrpIVGLzg%2FKpmu0CBQqAaOUk00W8JQeVjL%2FzBcHSTUrUiy6E6%2FZPWr7dAWiR2f8ejYIRnM%2FnjLH%2BVMlGJ1gWSnrjIxAntLjY1vucCilspSXfnJkW4XKnFZmhZQK7W0Hn74y%2BF5IUfLWh9793lkJHAScBXO8Xys257OY8ubOtyD5WkdnL3ITF%2FdduMGl0XNGdPmpe9TZkigN58px1g27bO9ZIBlVS4Vm%2BBMlEBqbLh9UKZ0o6RL3VyI%2BU6wYCyTIG7fQRDr3aAE0Y2NOgaaAcVb9i9agiLudrDRodZQlfdNp%2BeBqPuU0NaAumBxWmX3bj83s2qyXOEJWjOpHiPpAaprUWSvN5lgkklHMgCEJpTyXmgCrkG2yEAApfFJrfiV4IpzFg%2BuhrFz3szaZBjSwICQ%2B0mo%2BC%2FHZd36UGvHnds8JH9FVlUva3gqNKpbvzcPVzkQn5mh%2B338M1rK%2BuaML6nqNEGOqUB%2Bg35NTCCgrMwchhPHSo8vGa9L8qKMX919bU6uGy7gstEVSTqa3sEYKmmSOwNClczptg0Vj267r%2B3n%2BFDz7O1riL0ypu7DEk4sKGQjhkSjIUMTdhbiB3mgD%2FoakEl9Z5LFa9S3494Q0mxOYfslAAb0lv0aQKQMx1ylyqVCMFwh%2BiKRL98HUbFqfH2i6%2FRTQ3zpn1gypTZFTntno2NkbM%2B45uTL%2Bri&X-Amz-Signature=cea32fa6ee0f4b2e45b04f42d8bedd94b72e0fb4e9e433b2ce0daed9af73ca9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLEDNQMN%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCICJFsD7UIosWoT8ZyDVkVy7qW1Mk1BmkZrUcyhqEHH0LAiEApM92cJZ30RFffydesJasCeFcv%2FnYWYR2KnILIWbDiLQqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0z7NMjD6vGJd6WFCrcA8NBCf2TYuywAU%2BFZJpjVOpP%2BxdTxNCv3v%2FxY774dy56xMFDMI2MVdbjaqzZ%2FIHxbJRyd4OX3P0aP%2Bjcmvj%2BK6JvoSq1g4GZrrO4vPCtjUyA5QsXxHDnzH3pyJeXEC32oDsE7FBfrrHiN3pv%2B80A71DTBZzNNkdZFVoYPflk%2FdJWrpIVGLzg%2FKpmu0CBQqAaOUk00W8JQeVjL%2FzBcHSTUrUiy6E6%2FZPWr7dAWiR2f8ejYIRnM%2FnjLH%2BVMlGJ1gWSnrjIxAntLjY1vucCilspSXfnJkW4XKnFZmhZQK7W0Hn74y%2BF5IUfLWh9793lkJHAScBXO8Xys257OY8ubOtyD5WkdnL3ITF%2FdduMGl0XNGdPmpe9TZkigN58px1g27bO9ZIBlVS4Vm%2BBMlEBqbLh9UKZ0o6RL3VyI%2BU6wYCyTIG7fQRDr3aAE0Y2NOgaaAcVb9i9agiLudrDRodZQlfdNp%2BeBqPuU0NaAumBxWmX3bj83s2qyXOEJWjOpHiPpAaprUWSvN5lgkklHMgCEJpTyXmgCrkG2yEAApfFJrfiV4IpzFg%2BuhrFz3szaZBjSwICQ%2B0mo%2BC%2FHZd36UGvHnds8JH9FVlUva3gqNKpbvzcPVzkQn5mh%2B338M1rK%2BuaML6nqNEGOqUB%2Bg35NTCCgrMwchhPHSo8vGa9L8qKMX919bU6uGy7gstEVSTqa3sEYKmmSOwNClczptg0Vj267r%2B3n%2BFDz7O1riL0ypu7DEk4sKGQjhkSjIUMTdhbiB3mgD%2FoakEl9Z5LFa9S3494Q0mxOYfslAAb0lv0aQKQMx1ylyqVCMFwh%2BiKRL98HUbFqfH2i6%2FRTQ3zpn1gypTZFTntno2NkbM%2B45uTL%2Bri&X-Amz-Signature=141f9d884abd433912c7dfa4f18655e28e2e4fb44919a7460d780bb29c01ece6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLEDNQMN%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCICJFsD7UIosWoT8ZyDVkVy7qW1Mk1BmkZrUcyhqEHH0LAiEApM92cJZ30RFffydesJasCeFcv%2FnYWYR2KnILIWbDiLQqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0z7NMjD6vGJd6WFCrcA8NBCf2TYuywAU%2BFZJpjVOpP%2BxdTxNCv3v%2FxY774dy56xMFDMI2MVdbjaqzZ%2FIHxbJRyd4OX3P0aP%2Bjcmvj%2BK6JvoSq1g4GZrrO4vPCtjUyA5QsXxHDnzH3pyJeXEC32oDsE7FBfrrHiN3pv%2B80A71DTBZzNNkdZFVoYPflk%2FdJWrpIVGLzg%2FKpmu0CBQqAaOUk00W8JQeVjL%2FzBcHSTUrUiy6E6%2FZPWr7dAWiR2f8ejYIRnM%2FnjLH%2BVMlGJ1gWSnrjIxAntLjY1vucCilspSXfnJkW4XKnFZmhZQK7W0Hn74y%2BF5IUfLWh9793lkJHAScBXO8Xys257OY8ubOtyD5WkdnL3ITF%2FdduMGl0XNGdPmpe9TZkigN58px1g27bO9ZIBlVS4Vm%2BBMlEBqbLh9UKZ0o6RL3VyI%2BU6wYCyTIG7fQRDr3aAE0Y2NOgaaAcVb9i9agiLudrDRodZQlfdNp%2BeBqPuU0NaAumBxWmX3bj83s2qyXOEJWjOpHiPpAaprUWSvN5lgkklHMgCEJpTyXmgCrkG2yEAApfFJrfiV4IpzFg%2BuhrFz3szaZBjSwICQ%2B0mo%2BC%2FHZd36UGvHnds8JH9FVlUva3gqNKpbvzcPVzkQn5mh%2B338M1rK%2BuaML6nqNEGOqUB%2Bg35NTCCgrMwchhPHSo8vGa9L8qKMX919bU6uGy7gstEVSTqa3sEYKmmSOwNClczptg0Vj267r%2B3n%2BFDz7O1riL0ypu7DEk4sKGQjhkSjIUMTdhbiB3mgD%2FoakEl9Z5LFa9S3494Q0mxOYfslAAb0lv0aQKQMx1ylyqVCMFwh%2BiKRL98HUbFqfH2i6%2FRTQ3zpn1gypTZFTntno2NkbM%2B45uTL%2Bri&X-Amz-Signature=dfea9365c0d0f17f36cf53235008e79b2b6ac420f12620d813f50e7ba446a2a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLEDNQMN%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCICJFsD7UIosWoT8ZyDVkVy7qW1Mk1BmkZrUcyhqEHH0LAiEApM92cJZ30RFffydesJasCeFcv%2FnYWYR2KnILIWbDiLQqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0z7NMjD6vGJd6WFCrcA8NBCf2TYuywAU%2BFZJpjVOpP%2BxdTxNCv3v%2FxY774dy56xMFDMI2MVdbjaqzZ%2FIHxbJRyd4OX3P0aP%2Bjcmvj%2BK6JvoSq1g4GZrrO4vPCtjUyA5QsXxHDnzH3pyJeXEC32oDsE7FBfrrHiN3pv%2B80A71DTBZzNNkdZFVoYPflk%2FdJWrpIVGLzg%2FKpmu0CBQqAaOUk00W8JQeVjL%2FzBcHSTUrUiy6E6%2FZPWr7dAWiR2f8ejYIRnM%2FnjLH%2BVMlGJ1gWSnrjIxAntLjY1vucCilspSXfnJkW4XKnFZmhZQK7W0Hn74y%2BF5IUfLWh9793lkJHAScBXO8Xys257OY8ubOtyD5WkdnL3ITF%2FdduMGl0XNGdPmpe9TZkigN58px1g27bO9ZIBlVS4Vm%2BBMlEBqbLh9UKZ0o6RL3VyI%2BU6wYCyTIG7fQRDr3aAE0Y2NOgaaAcVb9i9agiLudrDRodZQlfdNp%2BeBqPuU0NaAumBxWmX3bj83s2qyXOEJWjOpHiPpAaprUWSvN5lgkklHMgCEJpTyXmgCrkG2yEAApfFJrfiV4IpzFg%2BuhrFz3szaZBjSwICQ%2B0mo%2BC%2FHZd36UGvHnds8JH9FVlUva3gqNKpbvzcPVzkQn5mh%2B338M1rK%2BuaML6nqNEGOqUB%2Bg35NTCCgrMwchhPHSo8vGa9L8qKMX919bU6uGy7gstEVSTqa3sEYKmmSOwNClczptg0Vj267r%2B3n%2BFDz7O1riL0ypu7DEk4sKGQjhkSjIUMTdhbiB3mgD%2FoakEl9Z5LFa9S3494Q0mxOYfslAAb0lv0aQKQMx1ylyqVCMFwh%2BiKRL98HUbFqfH2i6%2FRTQ3zpn1gypTZFTntno2NkbM%2B45uTL%2Bri&X-Amz-Signature=35e0a97ef16fe38ebc8873668af85d74adc5f709f09f3eb9a4b8494f85723262&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLEDNQMN%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCICJFsD7UIosWoT8ZyDVkVy7qW1Mk1BmkZrUcyhqEHH0LAiEApM92cJZ30RFffydesJasCeFcv%2FnYWYR2KnILIWbDiLQqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0z7NMjD6vGJd6WFCrcA8NBCf2TYuywAU%2BFZJpjVOpP%2BxdTxNCv3v%2FxY774dy56xMFDMI2MVdbjaqzZ%2FIHxbJRyd4OX3P0aP%2Bjcmvj%2BK6JvoSq1g4GZrrO4vPCtjUyA5QsXxHDnzH3pyJeXEC32oDsE7FBfrrHiN3pv%2B80A71DTBZzNNkdZFVoYPflk%2FdJWrpIVGLzg%2FKpmu0CBQqAaOUk00W8JQeVjL%2FzBcHSTUrUiy6E6%2FZPWr7dAWiR2f8ejYIRnM%2FnjLH%2BVMlGJ1gWSnrjIxAntLjY1vucCilspSXfnJkW4XKnFZmhZQK7W0Hn74y%2BF5IUfLWh9793lkJHAScBXO8Xys257OY8ubOtyD5WkdnL3ITF%2FdduMGl0XNGdPmpe9TZkigN58px1g27bO9ZIBlVS4Vm%2BBMlEBqbLh9UKZ0o6RL3VyI%2BU6wYCyTIG7fQRDr3aAE0Y2NOgaaAcVb9i9agiLudrDRodZQlfdNp%2BeBqPuU0NaAumBxWmX3bj83s2qyXOEJWjOpHiPpAaprUWSvN5lgkklHMgCEJpTyXmgCrkG2yEAApfFJrfiV4IpzFg%2BuhrFz3szaZBjSwICQ%2B0mo%2BC%2FHZd36UGvHnds8JH9FVlUva3gqNKpbvzcPVzkQn5mh%2B338M1rK%2BuaML6nqNEGOqUB%2Bg35NTCCgrMwchhPHSo8vGa9L8qKMX919bU6uGy7gstEVSTqa3sEYKmmSOwNClczptg0Vj267r%2B3n%2BFDz7O1riL0ypu7DEk4sKGQjhkSjIUMTdhbiB3mgD%2FoakEl9Z5LFa9S3494Q0mxOYfslAAb0lv0aQKQMx1ylyqVCMFwh%2BiKRL98HUbFqfH2i6%2FRTQ3zpn1gypTZFTntno2NkbM%2B45uTL%2Bri&X-Amz-Signature=6fa7bd3c27a67b67694563b08a8f2e8565b190991cb47d2e6f5fc2f69d9e7e9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLEDNQMN%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCICJFsD7UIosWoT8ZyDVkVy7qW1Mk1BmkZrUcyhqEHH0LAiEApM92cJZ30RFffydesJasCeFcv%2FnYWYR2KnILIWbDiLQqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0z7NMjD6vGJd6WFCrcA8NBCf2TYuywAU%2BFZJpjVOpP%2BxdTxNCv3v%2FxY774dy56xMFDMI2MVdbjaqzZ%2FIHxbJRyd4OX3P0aP%2Bjcmvj%2BK6JvoSq1g4GZrrO4vPCtjUyA5QsXxHDnzH3pyJeXEC32oDsE7FBfrrHiN3pv%2B80A71DTBZzNNkdZFVoYPflk%2FdJWrpIVGLzg%2FKpmu0CBQqAaOUk00W8JQeVjL%2FzBcHSTUrUiy6E6%2FZPWr7dAWiR2f8ejYIRnM%2FnjLH%2BVMlGJ1gWSnrjIxAntLjY1vucCilspSXfnJkW4XKnFZmhZQK7W0Hn74y%2BF5IUfLWh9793lkJHAScBXO8Xys257OY8ubOtyD5WkdnL3ITF%2FdduMGl0XNGdPmpe9TZkigN58px1g27bO9ZIBlVS4Vm%2BBMlEBqbLh9UKZ0o6RL3VyI%2BU6wYCyTIG7fQRDr3aAE0Y2NOgaaAcVb9i9agiLudrDRodZQlfdNp%2BeBqPuU0NaAumBxWmX3bj83s2qyXOEJWjOpHiPpAaprUWSvN5lgkklHMgCEJpTyXmgCrkG2yEAApfFJrfiV4IpzFg%2BuhrFz3szaZBjSwICQ%2B0mo%2BC%2FHZd36UGvHnds8JH9FVlUva3gqNKpbvzcPVzkQn5mh%2B338M1rK%2BuaML6nqNEGOqUB%2Bg35NTCCgrMwchhPHSo8vGa9L8qKMX919bU6uGy7gstEVSTqa3sEYKmmSOwNClczptg0Vj267r%2B3n%2BFDz7O1riL0ypu7DEk4sKGQjhkSjIUMTdhbiB3mgD%2FoakEl9Z5LFa9S3494Q0mxOYfslAAb0lv0aQKQMx1ylyqVCMFwh%2BiKRL98HUbFqfH2i6%2FRTQ3zpn1gypTZFTntno2NkbM%2B45uTL%2Bri&X-Amz-Signature=1aec1ece94380d8dcb9278d0c8dbe3b5b04d2a65b0355ec0b719253075b8b79d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLEDNQMN%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCICJFsD7UIosWoT8ZyDVkVy7qW1Mk1BmkZrUcyhqEHH0LAiEApM92cJZ30RFffydesJasCeFcv%2FnYWYR2KnILIWbDiLQqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0z7NMjD6vGJd6WFCrcA8NBCf2TYuywAU%2BFZJpjVOpP%2BxdTxNCv3v%2FxY774dy56xMFDMI2MVdbjaqzZ%2FIHxbJRyd4OX3P0aP%2Bjcmvj%2BK6JvoSq1g4GZrrO4vPCtjUyA5QsXxHDnzH3pyJeXEC32oDsE7FBfrrHiN3pv%2B80A71DTBZzNNkdZFVoYPflk%2FdJWrpIVGLzg%2FKpmu0CBQqAaOUk00W8JQeVjL%2FzBcHSTUrUiy6E6%2FZPWr7dAWiR2f8ejYIRnM%2FnjLH%2BVMlGJ1gWSnrjIxAntLjY1vucCilspSXfnJkW4XKnFZmhZQK7W0Hn74y%2BF5IUfLWh9793lkJHAScBXO8Xys257OY8ubOtyD5WkdnL3ITF%2FdduMGl0XNGdPmpe9TZkigN58px1g27bO9ZIBlVS4Vm%2BBMlEBqbLh9UKZ0o6RL3VyI%2BU6wYCyTIG7fQRDr3aAE0Y2NOgaaAcVb9i9agiLudrDRodZQlfdNp%2BeBqPuU0NaAumBxWmX3bj83s2qyXOEJWjOpHiPpAaprUWSvN5lgkklHMgCEJpTyXmgCrkG2yEAApfFJrfiV4IpzFg%2BuhrFz3szaZBjSwICQ%2B0mo%2BC%2FHZd36UGvHnds8JH9FVlUva3gqNKpbvzcPVzkQn5mh%2B338M1rK%2BuaML6nqNEGOqUB%2Bg35NTCCgrMwchhPHSo8vGa9L8qKMX919bU6uGy7gstEVSTqa3sEYKmmSOwNClczptg0Vj267r%2B3n%2BFDz7O1riL0ypu7DEk4sKGQjhkSjIUMTdhbiB3mgD%2FoakEl9Z5LFa9S3494Q0mxOYfslAAb0lv0aQKQMx1ylyqVCMFwh%2BiKRL98HUbFqfH2i6%2FRTQ3zpn1gypTZFTntno2NkbM%2B45uTL%2Bri&X-Amz-Signature=6206686c39a8114b520678662b3c87f31615e6c3c4f6ad7e19ca7651bd69dd69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLEDNQMN%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCICJFsD7UIosWoT8ZyDVkVy7qW1Mk1BmkZrUcyhqEHH0LAiEApM92cJZ30RFffydesJasCeFcv%2FnYWYR2KnILIWbDiLQqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0z7NMjD6vGJd6WFCrcA8NBCf2TYuywAU%2BFZJpjVOpP%2BxdTxNCv3v%2FxY774dy56xMFDMI2MVdbjaqzZ%2FIHxbJRyd4OX3P0aP%2Bjcmvj%2BK6JvoSq1g4GZrrO4vPCtjUyA5QsXxHDnzH3pyJeXEC32oDsE7FBfrrHiN3pv%2B80A71DTBZzNNkdZFVoYPflk%2FdJWrpIVGLzg%2FKpmu0CBQqAaOUk00W8JQeVjL%2FzBcHSTUrUiy6E6%2FZPWr7dAWiR2f8ejYIRnM%2FnjLH%2BVMlGJ1gWSnrjIxAntLjY1vucCilspSXfnJkW4XKnFZmhZQK7W0Hn74y%2BF5IUfLWh9793lkJHAScBXO8Xys257OY8ubOtyD5WkdnL3ITF%2FdduMGl0XNGdPmpe9TZkigN58px1g27bO9ZIBlVS4Vm%2BBMlEBqbLh9UKZ0o6RL3VyI%2BU6wYCyTIG7fQRDr3aAE0Y2NOgaaAcVb9i9agiLudrDRodZQlfdNp%2BeBqPuU0NaAumBxWmX3bj83s2qyXOEJWjOpHiPpAaprUWSvN5lgkklHMgCEJpTyXmgCrkG2yEAApfFJrfiV4IpzFg%2BuhrFz3szaZBjSwICQ%2B0mo%2BC%2FHZd36UGvHnds8JH9FVlUva3gqNKpbvzcPVzkQn5mh%2B338M1rK%2BuaML6nqNEGOqUB%2Bg35NTCCgrMwchhPHSo8vGa9L8qKMX919bU6uGy7gstEVSTqa3sEYKmmSOwNClczptg0Vj267r%2B3n%2BFDz7O1riL0ypu7DEk4sKGQjhkSjIUMTdhbiB3mgD%2FoakEl9Z5LFa9S3494Q0mxOYfslAAb0lv0aQKQMx1ylyqVCMFwh%2BiKRL98HUbFqfH2i6%2FRTQ3zpn1gypTZFTntno2NkbM%2B45uTL%2Bri&X-Amz-Signature=dbaa7cd45a04a8c6c89454afc4ef25bbe1414a29ccec42cc9af455763097432b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLEDNQMN%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCICJFsD7UIosWoT8ZyDVkVy7qW1Mk1BmkZrUcyhqEHH0LAiEApM92cJZ30RFffydesJasCeFcv%2FnYWYR2KnILIWbDiLQqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0z7NMjD6vGJd6WFCrcA8NBCf2TYuywAU%2BFZJpjVOpP%2BxdTxNCv3v%2FxY774dy56xMFDMI2MVdbjaqzZ%2FIHxbJRyd4OX3P0aP%2Bjcmvj%2BK6JvoSq1g4GZrrO4vPCtjUyA5QsXxHDnzH3pyJeXEC32oDsE7FBfrrHiN3pv%2B80A71DTBZzNNkdZFVoYPflk%2FdJWrpIVGLzg%2FKpmu0CBQqAaOUk00W8JQeVjL%2FzBcHSTUrUiy6E6%2FZPWr7dAWiR2f8ejYIRnM%2FnjLH%2BVMlGJ1gWSnrjIxAntLjY1vucCilspSXfnJkW4XKnFZmhZQK7W0Hn74y%2BF5IUfLWh9793lkJHAScBXO8Xys257OY8ubOtyD5WkdnL3ITF%2FdduMGl0XNGdPmpe9TZkigN58px1g27bO9ZIBlVS4Vm%2BBMlEBqbLh9UKZ0o6RL3VyI%2BU6wYCyTIG7fQRDr3aAE0Y2NOgaaAcVb9i9agiLudrDRodZQlfdNp%2BeBqPuU0NaAumBxWmX3bj83s2qyXOEJWjOpHiPpAaprUWSvN5lgkklHMgCEJpTyXmgCrkG2yEAApfFJrfiV4IpzFg%2BuhrFz3szaZBjSwICQ%2B0mo%2BC%2FHZd36UGvHnds8JH9FVlUva3gqNKpbvzcPVzkQn5mh%2B338M1rK%2BuaML6nqNEGOqUB%2Bg35NTCCgrMwchhPHSo8vGa9L8qKMX919bU6uGy7gstEVSTqa3sEYKmmSOwNClczptg0Vj267r%2B3n%2BFDz7O1riL0ypu7DEk4sKGQjhkSjIUMTdhbiB3mgD%2FoakEl9Z5LFa9S3494Q0mxOYfslAAb0lv0aQKQMx1ylyqVCMFwh%2BiKRL98HUbFqfH2i6%2FRTQ3zpn1gypTZFTntno2NkbM%2B45uTL%2Bri&X-Amz-Signature=b5b63517592024527f3545c1c0743f74b5b39c744ca1c6d0a9330928ce509f71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLEDNQMN%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCICJFsD7UIosWoT8ZyDVkVy7qW1Mk1BmkZrUcyhqEHH0LAiEApM92cJZ30RFffydesJasCeFcv%2FnYWYR2KnILIWbDiLQqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0z7NMjD6vGJd6WFCrcA8NBCf2TYuywAU%2BFZJpjVOpP%2BxdTxNCv3v%2FxY774dy56xMFDMI2MVdbjaqzZ%2FIHxbJRyd4OX3P0aP%2Bjcmvj%2BK6JvoSq1g4GZrrO4vPCtjUyA5QsXxHDnzH3pyJeXEC32oDsE7FBfrrHiN3pv%2B80A71DTBZzNNkdZFVoYPflk%2FdJWrpIVGLzg%2FKpmu0CBQqAaOUk00W8JQeVjL%2FzBcHSTUrUiy6E6%2FZPWr7dAWiR2f8ejYIRnM%2FnjLH%2BVMlGJ1gWSnrjIxAntLjY1vucCilspSXfnJkW4XKnFZmhZQK7W0Hn74y%2BF5IUfLWh9793lkJHAScBXO8Xys257OY8ubOtyD5WkdnL3ITF%2FdduMGl0XNGdPmpe9TZkigN58px1g27bO9ZIBlVS4Vm%2BBMlEBqbLh9UKZ0o6RL3VyI%2BU6wYCyTIG7fQRDr3aAE0Y2NOgaaAcVb9i9agiLudrDRodZQlfdNp%2BeBqPuU0NaAumBxWmX3bj83s2qyXOEJWjOpHiPpAaprUWSvN5lgkklHMgCEJpTyXmgCrkG2yEAApfFJrfiV4IpzFg%2BuhrFz3szaZBjSwICQ%2B0mo%2BC%2FHZd36UGvHnds8JH9FVlUva3gqNKpbvzcPVzkQn5mh%2B338M1rK%2BuaML6nqNEGOqUB%2Bg35NTCCgrMwchhPHSo8vGa9L8qKMX919bU6uGy7gstEVSTqa3sEYKmmSOwNClczptg0Vj267r%2B3n%2BFDz7O1riL0ypu7DEk4sKGQjhkSjIUMTdhbiB3mgD%2FoakEl9Z5LFa9S3494Q0mxOYfslAAb0lv0aQKQMx1ylyqVCMFwh%2BiKRL98HUbFqfH2i6%2FRTQ3zpn1gypTZFTntno2NkbM%2B45uTL%2Bri&X-Amz-Signature=a6162ee207b7dc566c91f682a7c6087d35ee8cea579402929aacb14326c88c3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLEDNQMN%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCICJFsD7UIosWoT8ZyDVkVy7qW1Mk1BmkZrUcyhqEHH0LAiEApM92cJZ30RFffydesJasCeFcv%2FnYWYR2KnILIWbDiLQqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0z7NMjD6vGJd6WFCrcA8NBCf2TYuywAU%2BFZJpjVOpP%2BxdTxNCv3v%2FxY774dy56xMFDMI2MVdbjaqzZ%2FIHxbJRyd4OX3P0aP%2Bjcmvj%2BK6JvoSq1g4GZrrO4vPCtjUyA5QsXxHDnzH3pyJeXEC32oDsE7FBfrrHiN3pv%2B80A71DTBZzNNkdZFVoYPflk%2FdJWrpIVGLzg%2FKpmu0CBQqAaOUk00W8JQeVjL%2FzBcHSTUrUiy6E6%2FZPWr7dAWiR2f8ejYIRnM%2FnjLH%2BVMlGJ1gWSnrjIxAntLjY1vucCilspSXfnJkW4XKnFZmhZQK7W0Hn74y%2BF5IUfLWh9793lkJHAScBXO8Xys257OY8ubOtyD5WkdnL3ITF%2FdduMGl0XNGdPmpe9TZkigN58px1g27bO9ZIBlVS4Vm%2BBMlEBqbLh9UKZ0o6RL3VyI%2BU6wYCyTIG7fQRDr3aAE0Y2NOgaaAcVb9i9agiLudrDRodZQlfdNp%2BeBqPuU0NaAumBxWmX3bj83s2qyXOEJWjOpHiPpAaprUWSvN5lgkklHMgCEJpTyXmgCrkG2yEAApfFJrfiV4IpzFg%2BuhrFz3szaZBjSwICQ%2B0mo%2BC%2FHZd36UGvHnds8JH9FVlUva3gqNKpbvzcPVzkQn5mh%2B338M1rK%2BuaML6nqNEGOqUB%2Bg35NTCCgrMwchhPHSo8vGa9L8qKMX919bU6uGy7gstEVSTqa3sEYKmmSOwNClczptg0Vj267r%2B3n%2BFDz7O1riL0ypu7DEk4sKGQjhkSjIUMTdhbiB3mgD%2FoakEl9Z5LFa9S3494Q0mxOYfslAAb0lv0aQKQMx1ylyqVCMFwh%2BiKRL98HUbFqfH2i6%2FRTQ3zpn1gypTZFTntno2NkbM%2B45uTL%2Bri&X-Amz-Signature=060ae193817d7a56ac1dda556e8e373fde18a5fc044af48a02d7746b6aabd603&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
