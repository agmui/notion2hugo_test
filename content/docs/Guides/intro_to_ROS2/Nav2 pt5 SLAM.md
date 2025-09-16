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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7XOPFE%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIFlnF3TyY8edC26Jr5EewYjnVQQF%2FBKS3RfcBi3bzEGDAiBPCx8sFwmn6f5iCE6AkaeTJXtN2eCy8lD68fMV5hz1YCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtRxrXBLxSdPkTJsIKtwDFaW5S1ssUVKePK%2BpjPwKjO8Fi8Xqc7YVpSWEFf9fUA98cQyODOkkAC3ehgBSiXj5yU4e0BzD1LidWIWF4w1PAhz2IJ3cmJUnYie%2BE7tTQSwV2zAOjy7XABCBj5ZearTwQj9H6Wkl7R6gMNPvTd2Ra9Loi6PqppV41J1eEd6RhWFZDImIFN2FZBe%2Bnf1f2gspsIAH4ty6twnLy83kSTOvxCrbTnJUugrMGKStxaG6dCEcmzUWBeO8LZp%2FENdfDz32pv8AffS1mm4UzFKriYF2zhLnPm%2BuSS7H7IImnbkH1RA8oGNE4tPQhY8h%2FcVeAmeuX3eHet8voBqp5%2Fa63nBmr8EHJN7Rdx%2FOaByoDfNT4adlZnILl5tnxnpMtAAiwW%2B9ralCMbK2lS6dwUh4eFWBCvJbekTxxEUsOObnCLV75NqYIVXOli1UsI7XrgWQqn0z3X1oh0TcnrHfXXrsSwUnEHmeiqsKBX9iAZMJTDlpogLNd3rm21xgTxU6qPu9atr54k5R8OJXIvMpeQmj%2BVcP60xA1GYRNfwFDgSJVBZHYuKVK6iJ2cXEK28Q%2Bw3VWk61g0Oka1B2fXUNNAxBVXBzu%2Fl0qu301nT7CPD%2F%2B0czpm5pq9iV2eQKuXPYQOswtfCixgY6pgGFwwfmrTgK5BK9HcdtTOuGwYnnFRm1gdc%2Br2MFw25zyajAJxz%2FU6l1H%2F0mjGC7ifQpEJ4y4OB5yVOiofuLihDfRiBRMUoLBP0NsBGbuQykp%2BUZ%2BvA3F2twG5iiJEJc%2FFEsTQobStVLDkiObSoFyCSu7rKlFpo9HLBb4%2FUMNfaV%2BMqT8N0LKqziWN1A%2Fv2OWLO8D1Pw57dkRReKyViOgjsKcYnqT8SH&X-Amz-Signature=232414ef6209c22a58abc7d8bbec63ea314eb083465d5e1e020b4e961d10ceed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7XOPFE%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIFlnF3TyY8edC26Jr5EewYjnVQQF%2FBKS3RfcBi3bzEGDAiBPCx8sFwmn6f5iCE6AkaeTJXtN2eCy8lD68fMV5hz1YCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtRxrXBLxSdPkTJsIKtwDFaW5S1ssUVKePK%2BpjPwKjO8Fi8Xqc7YVpSWEFf9fUA98cQyODOkkAC3ehgBSiXj5yU4e0BzD1LidWIWF4w1PAhz2IJ3cmJUnYie%2BE7tTQSwV2zAOjy7XABCBj5ZearTwQj9H6Wkl7R6gMNPvTd2Ra9Loi6PqppV41J1eEd6RhWFZDImIFN2FZBe%2Bnf1f2gspsIAH4ty6twnLy83kSTOvxCrbTnJUugrMGKStxaG6dCEcmzUWBeO8LZp%2FENdfDz32pv8AffS1mm4UzFKriYF2zhLnPm%2BuSS7H7IImnbkH1RA8oGNE4tPQhY8h%2FcVeAmeuX3eHet8voBqp5%2Fa63nBmr8EHJN7Rdx%2FOaByoDfNT4adlZnILl5tnxnpMtAAiwW%2B9ralCMbK2lS6dwUh4eFWBCvJbekTxxEUsOObnCLV75NqYIVXOli1UsI7XrgWQqn0z3X1oh0TcnrHfXXrsSwUnEHmeiqsKBX9iAZMJTDlpogLNd3rm21xgTxU6qPu9atr54k5R8OJXIvMpeQmj%2BVcP60xA1GYRNfwFDgSJVBZHYuKVK6iJ2cXEK28Q%2Bw3VWk61g0Oka1B2fXUNNAxBVXBzu%2Fl0qu301nT7CPD%2F%2B0czpm5pq9iV2eQKuXPYQOswtfCixgY6pgGFwwfmrTgK5BK9HcdtTOuGwYnnFRm1gdc%2Br2MFw25zyajAJxz%2FU6l1H%2F0mjGC7ifQpEJ4y4OB5yVOiofuLihDfRiBRMUoLBP0NsBGbuQykp%2BUZ%2BvA3F2twG5iiJEJc%2FFEsTQobStVLDkiObSoFyCSu7rKlFpo9HLBb4%2FUMNfaV%2BMqT8N0LKqziWN1A%2Fv2OWLO8D1Pw57dkRReKyViOgjsKcYnqT8SH&X-Amz-Signature=2fb725cca60a0c9d740e193d183a3c79a2ee267111814cfdd30247c74c493cfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7XOPFE%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIFlnF3TyY8edC26Jr5EewYjnVQQF%2FBKS3RfcBi3bzEGDAiBPCx8sFwmn6f5iCE6AkaeTJXtN2eCy8lD68fMV5hz1YCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtRxrXBLxSdPkTJsIKtwDFaW5S1ssUVKePK%2BpjPwKjO8Fi8Xqc7YVpSWEFf9fUA98cQyODOkkAC3ehgBSiXj5yU4e0BzD1LidWIWF4w1PAhz2IJ3cmJUnYie%2BE7tTQSwV2zAOjy7XABCBj5ZearTwQj9H6Wkl7R6gMNPvTd2Ra9Loi6PqppV41J1eEd6RhWFZDImIFN2FZBe%2Bnf1f2gspsIAH4ty6twnLy83kSTOvxCrbTnJUugrMGKStxaG6dCEcmzUWBeO8LZp%2FENdfDz32pv8AffS1mm4UzFKriYF2zhLnPm%2BuSS7H7IImnbkH1RA8oGNE4tPQhY8h%2FcVeAmeuX3eHet8voBqp5%2Fa63nBmr8EHJN7Rdx%2FOaByoDfNT4adlZnILl5tnxnpMtAAiwW%2B9ralCMbK2lS6dwUh4eFWBCvJbekTxxEUsOObnCLV75NqYIVXOli1UsI7XrgWQqn0z3X1oh0TcnrHfXXrsSwUnEHmeiqsKBX9iAZMJTDlpogLNd3rm21xgTxU6qPu9atr54k5R8OJXIvMpeQmj%2BVcP60xA1GYRNfwFDgSJVBZHYuKVK6iJ2cXEK28Q%2Bw3VWk61g0Oka1B2fXUNNAxBVXBzu%2Fl0qu301nT7CPD%2F%2B0czpm5pq9iV2eQKuXPYQOswtfCixgY6pgGFwwfmrTgK5BK9HcdtTOuGwYnnFRm1gdc%2Br2MFw25zyajAJxz%2FU6l1H%2F0mjGC7ifQpEJ4y4OB5yVOiofuLihDfRiBRMUoLBP0NsBGbuQykp%2BUZ%2BvA3F2twG5iiJEJc%2FFEsTQobStVLDkiObSoFyCSu7rKlFpo9HLBb4%2FUMNfaV%2BMqT8N0LKqziWN1A%2Fv2OWLO8D1Pw57dkRReKyViOgjsKcYnqT8SH&X-Amz-Signature=97f36408fc043e0eec1718c5806c2d5d614da27c21151b863af6b8d65825aa6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7XOPFE%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIFlnF3TyY8edC26Jr5EewYjnVQQF%2FBKS3RfcBi3bzEGDAiBPCx8sFwmn6f5iCE6AkaeTJXtN2eCy8lD68fMV5hz1YCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtRxrXBLxSdPkTJsIKtwDFaW5S1ssUVKePK%2BpjPwKjO8Fi8Xqc7YVpSWEFf9fUA98cQyODOkkAC3ehgBSiXj5yU4e0BzD1LidWIWF4w1PAhz2IJ3cmJUnYie%2BE7tTQSwV2zAOjy7XABCBj5ZearTwQj9H6Wkl7R6gMNPvTd2Ra9Loi6PqppV41J1eEd6RhWFZDImIFN2FZBe%2Bnf1f2gspsIAH4ty6twnLy83kSTOvxCrbTnJUugrMGKStxaG6dCEcmzUWBeO8LZp%2FENdfDz32pv8AffS1mm4UzFKriYF2zhLnPm%2BuSS7H7IImnbkH1RA8oGNE4tPQhY8h%2FcVeAmeuX3eHet8voBqp5%2Fa63nBmr8EHJN7Rdx%2FOaByoDfNT4adlZnILl5tnxnpMtAAiwW%2B9ralCMbK2lS6dwUh4eFWBCvJbekTxxEUsOObnCLV75NqYIVXOli1UsI7XrgWQqn0z3X1oh0TcnrHfXXrsSwUnEHmeiqsKBX9iAZMJTDlpogLNd3rm21xgTxU6qPu9atr54k5R8OJXIvMpeQmj%2BVcP60xA1GYRNfwFDgSJVBZHYuKVK6iJ2cXEK28Q%2Bw3VWk61g0Oka1B2fXUNNAxBVXBzu%2Fl0qu301nT7CPD%2F%2B0czpm5pq9iV2eQKuXPYQOswtfCixgY6pgGFwwfmrTgK5BK9HcdtTOuGwYnnFRm1gdc%2Br2MFw25zyajAJxz%2FU6l1H%2F0mjGC7ifQpEJ4y4OB5yVOiofuLihDfRiBRMUoLBP0NsBGbuQykp%2BUZ%2BvA3F2twG5iiJEJc%2FFEsTQobStVLDkiObSoFyCSu7rKlFpo9HLBb4%2FUMNfaV%2BMqT8N0LKqziWN1A%2Fv2OWLO8D1Pw57dkRReKyViOgjsKcYnqT8SH&X-Amz-Signature=d08c680d9fc63968abdfac299a7d780d53d2cf48996120aed9baa9a3f163b743&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7XOPFE%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIFlnF3TyY8edC26Jr5EewYjnVQQF%2FBKS3RfcBi3bzEGDAiBPCx8sFwmn6f5iCE6AkaeTJXtN2eCy8lD68fMV5hz1YCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtRxrXBLxSdPkTJsIKtwDFaW5S1ssUVKePK%2BpjPwKjO8Fi8Xqc7YVpSWEFf9fUA98cQyODOkkAC3ehgBSiXj5yU4e0BzD1LidWIWF4w1PAhz2IJ3cmJUnYie%2BE7tTQSwV2zAOjy7XABCBj5ZearTwQj9H6Wkl7R6gMNPvTd2Ra9Loi6PqppV41J1eEd6RhWFZDImIFN2FZBe%2Bnf1f2gspsIAH4ty6twnLy83kSTOvxCrbTnJUugrMGKStxaG6dCEcmzUWBeO8LZp%2FENdfDz32pv8AffS1mm4UzFKriYF2zhLnPm%2BuSS7H7IImnbkH1RA8oGNE4tPQhY8h%2FcVeAmeuX3eHet8voBqp5%2Fa63nBmr8EHJN7Rdx%2FOaByoDfNT4adlZnILl5tnxnpMtAAiwW%2B9ralCMbK2lS6dwUh4eFWBCvJbekTxxEUsOObnCLV75NqYIVXOli1UsI7XrgWQqn0z3X1oh0TcnrHfXXrsSwUnEHmeiqsKBX9iAZMJTDlpogLNd3rm21xgTxU6qPu9atr54k5R8OJXIvMpeQmj%2BVcP60xA1GYRNfwFDgSJVBZHYuKVK6iJ2cXEK28Q%2Bw3VWk61g0Oka1B2fXUNNAxBVXBzu%2Fl0qu301nT7CPD%2F%2B0czpm5pq9iV2eQKuXPYQOswtfCixgY6pgGFwwfmrTgK5BK9HcdtTOuGwYnnFRm1gdc%2Br2MFw25zyajAJxz%2FU6l1H%2F0mjGC7ifQpEJ4y4OB5yVOiofuLihDfRiBRMUoLBP0NsBGbuQykp%2BUZ%2BvA3F2twG5iiJEJc%2FFEsTQobStVLDkiObSoFyCSu7rKlFpo9HLBb4%2FUMNfaV%2BMqT8N0LKqziWN1A%2Fv2OWLO8D1Pw57dkRReKyViOgjsKcYnqT8SH&X-Amz-Signature=6395c0ee69194c9432df788413c2275f127a6d22efec9f035120ebf670539b80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7XOPFE%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIFlnF3TyY8edC26Jr5EewYjnVQQF%2FBKS3RfcBi3bzEGDAiBPCx8sFwmn6f5iCE6AkaeTJXtN2eCy8lD68fMV5hz1YCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtRxrXBLxSdPkTJsIKtwDFaW5S1ssUVKePK%2BpjPwKjO8Fi8Xqc7YVpSWEFf9fUA98cQyODOkkAC3ehgBSiXj5yU4e0BzD1LidWIWF4w1PAhz2IJ3cmJUnYie%2BE7tTQSwV2zAOjy7XABCBj5ZearTwQj9H6Wkl7R6gMNPvTd2Ra9Loi6PqppV41J1eEd6RhWFZDImIFN2FZBe%2Bnf1f2gspsIAH4ty6twnLy83kSTOvxCrbTnJUugrMGKStxaG6dCEcmzUWBeO8LZp%2FENdfDz32pv8AffS1mm4UzFKriYF2zhLnPm%2BuSS7H7IImnbkH1RA8oGNE4tPQhY8h%2FcVeAmeuX3eHet8voBqp5%2Fa63nBmr8EHJN7Rdx%2FOaByoDfNT4adlZnILl5tnxnpMtAAiwW%2B9ralCMbK2lS6dwUh4eFWBCvJbekTxxEUsOObnCLV75NqYIVXOli1UsI7XrgWQqn0z3X1oh0TcnrHfXXrsSwUnEHmeiqsKBX9iAZMJTDlpogLNd3rm21xgTxU6qPu9atr54k5R8OJXIvMpeQmj%2BVcP60xA1GYRNfwFDgSJVBZHYuKVK6iJ2cXEK28Q%2Bw3VWk61g0Oka1B2fXUNNAxBVXBzu%2Fl0qu301nT7CPD%2F%2B0czpm5pq9iV2eQKuXPYQOswtfCixgY6pgGFwwfmrTgK5BK9HcdtTOuGwYnnFRm1gdc%2Br2MFw25zyajAJxz%2FU6l1H%2F0mjGC7ifQpEJ4y4OB5yVOiofuLihDfRiBRMUoLBP0NsBGbuQykp%2BUZ%2BvA3F2twG5iiJEJc%2FFEsTQobStVLDkiObSoFyCSu7rKlFpo9HLBb4%2FUMNfaV%2BMqT8N0LKqziWN1A%2Fv2OWLO8D1Pw57dkRReKyViOgjsKcYnqT8SH&X-Amz-Signature=0fbc98506587ca4f7b564f631750ed3d16a5b00d376c3ffef02039cc7b951cdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7XOPFE%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIFlnF3TyY8edC26Jr5EewYjnVQQF%2FBKS3RfcBi3bzEGDAiBPCx8sFwmn6f5iCE6AkaeTJXtN2eCy8lD68fMV5hz1YCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtRxrXBLxSdPkTJsIKtwDFaW5S1ssUVKePK%2BpjPwKjO8Fi8Xqc7YVpSWEFf9fUA98cQyODOkkAC3ehgBSiXj5yU4e0BzD1LidWIWF4w1PAhz2IJ3cmJUnYie%2BE7tTQSwV2zAOjy7XABCBj5ZearTwQj9H6Wkl7R6gMNPvTd2Ra9Loi6PqppV41J1eEd6RhWFZDImIFN2FZBe%2Bnf1f2gspsIAH4ty6twnLy83kSTOvxCrbTnJUugrMGKStxaG6dCEcmzUWBeO8LZp%2FENdfDz32pv8AffS1mm4UzFKriYF2zhLnPm%2BuSS7H7IImnbkH1RA8oGNE4tPQhY8h%2FcVeAmeuX3eHet8voBqp5%2Fa63nBmr8EHJN7Rdx%2FOaByoDfNT4adlZnILl5tnxnpMtAAiwW%2B9ralCMbK2lS6dwUh4eFWBCvJbekTxxEUsOObnCLV75NqYIVXOli1UsI7XrgWQqn0z3X1oh0TcnrHfXXrsSwUnEHmeiqsKBX9iAZMJTDlpogLNd3rm21xgTxU6qPu9atr54k5R8OJXIvMpeQmj%2BVcP60xA1GYRNfwFDgSJVBZHYuKVK6iJ2cXEK28Q%2Bw3VWk61g0Oka1B2fXUNNAxBVXBzu%2Fl0qu301nT7CPD%2F%2B0czpm5pq9iV2eQKuXPYQOswtfCixgY6pgGFwwfmrTgK5BK9HcdtTOuGwYnnFRm1gdc%2Br2MFw25zyajAJxz%2FU6l1H%2F0mjGC7ifQpEJ4y4OB5yVOiofuLihDfRiBRMUoLBP0NsBGbuQykp%2BUZ%2BvA3F2twG5iiJEJc%2FFEsTQobStVLDkiObSoFyCSu7rKlFpo9HLBb4%2FUMNfaV%2BMqT8N0LKqziWN1A%2Fv2OWLO8D1Pw57dkRReKyViOgjsKcYnqT8SH&X-Amz-Signature=c0a19e41170187b18b0483739ed1304bd9660a894d69592a530b3161f1dbc920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7XOPFE%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIFlnF3TyY8edC26Jr5EewYjnVQQF%2FBKS3RfcBi3bzEGDAiBPCx8sFwmn6f5iCE6AkaeTJXtN2eCy8lD68fMV5hz1YCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtRxrXBLxSdPkTJsIKtwDFaW5S1ssUVKePK%2BpjPwKjO8Fi8Xqc7YVpSWEFf9fUA98cQyODOkkAC3ehgBSiXj5yU4e0BzD1LidWIWF4w1PAhz2IJ3cmJUnYie%2BE7tTQSwV2zAOjy7XABCBj5ZearTwQj9H6Wkl7R6gMNPvTd2Ra9Loi6PqppV41J1eEd6RhWFZDImIFN2FZBe%2Bnf1f2gspsIAH4ty6twnLy83kSTOvxCrbTnJUugrMGKStxaG6dCEcmzUWBeO8LZp%2FENdfDz32pv8AffS1mm4UzFKriYF2zhLnPm%2BuSS7H7IImnbkH1RA8oGNE4tPQhY8h%2FcVeAmeuX3eHet8voBqp5%2Fa63nBmr8EHJN7Rdx%2FOaByoDfNT4adlZnILl5tnxnpMtAAiwW%2B9ralCMbK2lS6dwUh4eFWBCvJbekTxxEUsOObnCLV75NqYIVXOli1UsI7XrgWQqn0z3X1oh0TcnrHfXXrsSwUnEHmeiqsKBX9iAZMJTDlpogLNd3rm21xgTxU6qPu9atr54k5R8OJXIvMpeQmj%2BVcP60xA1GYRNfwFDgSJVBZHYuKVK6iJ2cXEK28Q%2Bw3VWk61g0Oka1B2fXUNNAxBVXBzu%2Fl0qu301nT7CPD%2F%2B0czpm5pq9iV2eQKuXPYQOswtfCixgY6pgGFwwfmrTgK5BK9HcdtTOuGwYnnFRm1gdc%2Br2MFw25zyajAJxz%2FU6l1H%2F0mjGC7ifQpEJ4y4OB5yVOiofuLihDfRiBRMUoLBP0NsBGbuQykp%2BUZ%2BvA3F2twG5iiJEJc%2FFEsTQobStVLDkiObSoFyCSu7rKlFpo9HLBb4%2FUMNfaV%2BMqT8N0LKqziWN1A%2Fv2OWLO8D1Pw57dkRReKyViOgjsKcYnqT8SH&X-Amz-Signature=af0ba360ff405a5e604609aadaff7b5953267ab4c7d6ea9740c0f60b0dac3636&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7XOPFE%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIFlnF3TyY8edC26Jr5EewYjnVQQF%2FBKS3RfcBi3bzEGDAiBPCx8sFwmn6f5iCE6AkaeTJXtN2eCy8lD68fMV5hz1YCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtRxrXBLxSdPkTJsIKtwDFaW5S1ssUVKePK%2BpjPwKjO8Fi8Xqc7YVpSWEFf9fUA98cQyODOkkAC3ehgBSiXj5yU4e0BzD1LidWIWF4w1PAhz2IJ3cmJUnYie%2BE7tTQSwV2zAOjy7XABCBj5ZearTwQj9H6Wkl7R6gMNPvTd2Ra9Loi6PqppV41J1eEd6RhWFZDImIFN2FZBe%2Bnf1f2gspsIAH4ty6twnLy83kSTOvxCrbTnJUugrMGKStxaG6dCEcmzUWBeO8LZp%2FENdfDz32pv8AffS1mm4UzFKriYF2zhLnPm%2BuSS7H7IImnbkH1RA8oGNE4tPQhY8h%2FcVeAmeuX3eHet8voBqp5%2Fa63nBmr8EHJN7Rdx%2FOaByoDfNT4adlZnILl5tnxnpMtAAiwW%2B9ralCMbK2lS6dwUh4eFWBCvJbekTxxEUsOObnCLV75NqYIVXOli1UsI7XrgWQqn0z3X1oh0TcnrHfXXrsSwUnEHmeiqsKBX9iAZMJTDlpogLNd3rm21xgTxU6qPu9atr54k5R8OJXIvMpeQmj%2BVcP60xA1GYRNfwFDgSJVBZHYuKVK6iJ2cXEK28Q%2Bw3VWk61g0Oka1B2fXUNNAxBVXBzu%2Fl0qu301nT7CPD%2F%2B0czpm5pq9iV2eQKuXPYQOswtfCixgY6pgGFwwfmrTgK5BK9HcdtTOuGwYnnFRm1gdc%2Br2MFw25zyajAJxz%2FU6l1H%2F0mjGC7ifQpEJ4y4OB5yVOiofuLihDfRiBRMUoLBP0NsBGbuQykp%2BUZ%2BvA3F2twG5iiJEJc%2FFEsTQobStVLDkiObSoFyCSu7rKlFpo9HLBb4%2FUMNfaV%2BMqT8N0LKqziWN1A%2Fv2OWLO8D1Pw57dkRReKyViOgjsKcYnqT8SH&X-Amz-Signature=628779bd2fa1de24942c4a4e34258f4d63ddb9399a3a0c7d57ee7ef2200ebd4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7XOPFE%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIFlnF3TyY8edC26Jr5EewYjnVQQF%2FBKS3RfcBi3bzEGDAiBPCx8sFwmn6f5iCE6AkaeTJXtN2eCy8lD68fMV5hz1YCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtRxrXBLxSdPkTJsIKtwDFaW5S1ssUVKePK%2BpjPwKjO8Fi8Xqc7YVpSWEFf9fUA98cQyODOkkAC3ehgBSiXj5yU4e0BzD1LidWIWF4w1PAhz2IJ3cmJUnYie%2BE7tTQSwV2zAOjy7XABCBj5ZearTwQj9H6Wkl7R6gMNPvTd2Ra9Loi6PqppV41J1eEd6RhWFZDImIFN2FZBe%2Bnf1f2gspsIAH4ty6twnLy83kSTOvxCrbTnJUugrMGKStxaG6dCEcmzUWBeO8LZp%2FENdfDz32pv8AffS1mm4UzFKriYF2zhLnPm%2BuSS7H7IImnbkH1RA8oGNE4tPQhY8h%2FcVeAmeuX3eHet8voBqp5%2Fa63nBmr8EHJN7Rdx%2FOaByoDfNT4adlZnILl5tnxnpMtAAiwW%2B9ralCMbK2lS6dwUh4eFWBCvJbekTxxEUsOObnCLV75NqYIVXOli1UsI7XrgWQqn0z3X1oh0TcnrHfXXrsSwUnEHmeiqsKBX9iAZMJTDlpogLNd3rm21xgTxU6qPu9atr54k5R8OJXIvMpeQmj%2BVcP60xA1GYRNfwFDgSJVBZHYuKVK6iJ2cXEK28Q%2Bw3VWk61g0Oka1B2fXUNNAxBVXBzu%2Fl0qu301nT7CPD%2F%2B0czpm5pq9iV2eQKuXPYQOswtfCixgY6pgGFwwfmrTgK5BK9HcdtTOuGwYnnFRm1gdc%2Br2MFw25zyajAJxz%2FU6l1H%2F0mjGC7ifQpEJ4y4OB5yVOiofuLihDfRiBRMUoLBP0NsBGbuQykp%2BUZ%2BvA3F2twG5iiJEJc%2FFEsTQobStVLDkiObSoFyCSu7rKlFpo9HLBb4%2FUMNfaV%2BMqT8N0LKqziWN1A%2Fv2OWLO8D1Pw57dkRReKyViOgjsKcYnqT8SH&X-Amz-Signature=9c127d64c8509f129c28de95479eab6a3fe607d9bc0a0ee1980604fd192f77f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7XOPFE%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIFlnF3TyY8edC26Jr5EewYjnVQQF%2FBKS3RfcBi3bzEGDAiBPCx8sFwmn6f5iCE6AkaeTJXtN2eCy8lD68fMV5hz1YCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtRxrXBLxSdPkTJsIKtwDFaW5S1ssUVKePK%2BpjPwKjO8Fi8Xqc7YVpSWEFf9fUA98cQyODOkkAC3ehgBSiXj5yU4e0BzD1LidWIWF4w1PAhz2IJ3cmJUnYie%2BE7tTQSwV2zAOjy7XABCBj5ZearTwQj9H6Wkl7R6gMNPvTd2Ra9Loi6PqppV41J1eEd6RhWFZDImIFN2FZBe%2Bnf1f2gspsIAH4ty6twnLy83kSTOvxCrbTnJUugrMGKStxaG6dCEcmzUWBeO8LZp%2FENdfDz32pv8AffS1mm4UzFKriYF2zhLnPm%2BuSS7H7IImnbkH1RA8oGNE4tPQhY8h%2FcVeAmeuX3eHet8voBqp5%2Fa63nBmr8EHJN7Rdx%2FOaByoDfNT4adlZnILl5tnxnpMtAAiwW%2B9ralCMbK2lS6dwUh4eFWBCvJbekTxxEUsOObnCLV75NqYIVXOli1UsI7XrgWQqn0z3X1oh0TcnrHfXXrsSwUnEHmeiqsKBX9iAZMJTDlpogLNd3rm21xgTxU6qPu9atr54k5R8OJXIvMpeQmj%2BVcP60xA1GYRNfwFDgSJVBZHYuKVK6iJ2cXEK28Q%2Bw3VWk61g0Oka1B2fXUNNAxBVXBzu%2Fl0qu301nT7CPD%2F%2B0czpm5pq9iV2eQKuXPYQOswtfCixgY6pgGFwwfmrTgK5BK9HcdtTOuGwYnnFRm1gdc%2Br2MFw25zyajAJxz%2FU6l1H%2F0mjGC7ifQpEJ4y4OB5yVOiofuLihDfRiBRMUoLBP0NsBGbuQykp%2BUZ%2BvA3F2twG5iiJEJc%2FFEsTQobStVLDkiObSoFyCSu7rKlFpo9HLBb4%2FUMNfaV%2BMqT8N0LKqziWN1A%2Fv2OWLO8D1Pw57dkRReKyViOgjsKcYnqT8SH&X-Amz-Signature=978103915c66070e4c4acaff3ac5c04f5ac7473ac9a98e4725c78c2d31245e91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7XOPFE%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIFlnF3TyY8edC26Jr5EewYjnVQQF%2FBKS3RfcBi3bzEGDAiBPCx8sFwmn6f5iCE6AkaeTJXtN2eCy8lD68fMV5hz1YCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtRxrXBLxSdPkTJsIKtwDFaW5S1ssUVKePK%2BpjPwKjO8Fi8Xqc7YVpSWEFf9fUA98cQyODOkkAC3ehgBSiXj5yU4e0BzD1LidWIWF4w1PAhz2IJ3cmJUnYie%2BE7tTQSwV2zAOjy7XABCBj5ZearTwQj9H6Wkl7R6gMNPvTd2Ra9Loi6PqppV41J1eEd6RhWFZDImIFN2FZBe%2Bnf1f2gspsIAH4ty6twnLy83kSTOvxCrbTnJUugrMGKStxaG6dCEcmzUWBeO8LZp%2FENdfDz32pv8AffS1mm4UzFKriYF2zhLnPm%2BuSS7H7IImnbkH1RA8oGNE4tPQhY8h%2FcVeAmeuX3eHet8voBqp5%2Fa63nBmr8EHJN7Rdx%2FOaByoDfNT4adlZnILl5tnxnpMtAAiwW%2B9ralCMbK2lS6dwUh4eFWBCvJbekTxxEUsOObnCLV75NqYIVXOli1UsI7XrgWQqn0z3X1oh0TcnrHfXXrsSwUnEHmeiqsKBX9iAZMJTDlpogLNd3rm21xgTxU6qPu9atr54k5R8OJXIvMpeQmj%2BVcP60xA1GYRNfwFDgSJVBZHYuKVK6iJ2cXEK28Q%2Bw3VWk61g0Oka1B2fXUNNAxBVXBzu%2Fl0qu301nT7CPD%2F%2B0czpm5pq9iV2eQKuXPYQOswtfCixgY6pgGFwwfmrTgK5BK9HcdtTOuGwYnnFRm1gdc%2Br2MFw25zyajAJxz%2FU6l1H%2F0mjGC7ifQpEJ4y4OB5yVOiofuLihDfRiBRMUoLBP0NsBGbuQykp%2BUZ%2BvA3F2twG5iiJEJc%2FFEsTQobStVLDkiObSoFyCSu7rKlFpo9HLBb4%2FUMNfaV%2BMqT8N0LKqziWN1A%2Fv2OWLO8D1Pw57dkRReKyViOgjsKcYnqT8SH&X-Amz-Signature=3bf2f3e2c93ae2c6f6d3c4e341fc1de2c0c679e660c38f61da16a2d3400b4854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7XOPFE%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIFlnF3TyY8edC26Jr5EewYjnVQQF%2FBKS3RfcBi3bzEGDAiBPCx8sFwmn6f5iCE6AkaeTJXtN2eCy8lD68fMV5hz1YCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtRxrXBLxSdPkTJsIKtwDFaW5S1ssUVKePK%2BpjPwKjO8Fi8Xqc7YVpSWEFf9fUA98cQyODOkkAC3ehgBSiXj5yU4e0BzD1LidWIWF4w1PAhz2IJ3cmJUnYie%2BE7tTQSwV2zAOjy7XABCBj5ZearTwQj9H6Wkl7R6gMNPvTd2Ra9Loi6PqppV41J1eEd6RhWFZDImIFN2FZBe%2Bnf1f2gspsIAH4ty6twnLy83kSTOvxCrbTnJUugrMGKStxaG6dCEcmzUWBeO8LZp%2FENdfDz32pv8AffS1mm4UzFKriYF2zhLnPm%2BuSS7H7IImnbkH1RA8oGNE4tPQhY8h%2FcVeAmeuX3eHet8voBqp5%2Fa63nBmr8EHJN7Rdx%2FOaByoDfNT4adlZnILl5tnxnpMtAAiwW%2B9ralCMbK2lS6dwUh4eFWBCvJbekTxxEUsOObnCLV75NqYIVXOli1UsI7XrgWQqn0z3X1oh0TcnrHfXXrsSwUnEHmeiqsKBX9iAZMJTDlpogLNd3rm21xgTxU6qPu9atr54k5R8OJXIvMpeQmj%2BVcP60xA1GYRNfwFDgSJVBZHYuKVK6iJ2cXEK28Q%2Bw3VWk61g0Oka1B2fXUNNAxBVXBzu%2Fl0qu301nT7CPD%2F%2B0czpm5pq9iV2eQKuXPYQOswtfCixgY6pgGFwwfmrTgK5BK9HcdtTOuGwYnnFRm1gdc%2Br2MFw25zyajAJxz%2FU6l1H%2F0mjGC7ifQpEJ4y4OB5yVOiofuLihDfRiBRMUoLBP0NsBGbuQykp%2BUZ%2BvA3F2twG5iiJEJc%2FFEsTQobStVLDkiObSoFyCSu7rKlFpo9HLBb4%2FUMNfaV%2BMqT8N0LKqziWN1A%2Fv2OWLO8D1Pw57dkRReKyViOgjsKcYnqT8SH&X-Amz-Signature=1b37b636b119764c00976f8854fefb0865f8e36330e772b39bd1f6e6aead69a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7XOPFE%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIFlnF3TyY8edC26Jr5EewYjnVQQF%2FBKS3RfcBi3bzEGDAiBPCx8sFwmn6f5iCE6AkaeTJXtN2eCy8lD68fMV5hz1YCqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtRxrXBLxSdPkTJsIKtwDFaW5S1ssUVKePK%2BpjPwKjO8Fi8Xqc7YVpSWEFf9fUA98cQyODOkkAC3ehgBSiXj5yU4e0BzD1LidWIWF4w1PAhz2IJ3cmJUnYie%2BE7tTQSwV2zAOjy7XABCBj5ZearTwQj9H6Wkl7R6gMNPvTd2Ra9Loi6PqppV41J1eEd6RhWFZDImIFN2FZBe%2Bnf1f2gspsIAH4ty6twnLy83kSTOvxCrbTnJUugrMGKStxaG6dCEcmzUWBeO8LZp%2FENdfDz32pv8AffS1mm4UzFKriYF2zhLnPm%2BuSS7H7IImnbkH1RA8oGNE4tPQhY8h%2FcVeAmeuX3eHet8voBqp5%2Fa63nBmr8EHJN7Rdx%2FOaByoDfNT4adlZnILl5tnxnpMtAAiwW%2B9ralCMbK2lS6dwUh4eFWBCvJbekTxxEUsOObnCLV75NqYIVXOli1UsI7XrgWQqn0z3X1oh0TcnrHfXXrsSwUnEHmeiqsKBX9iAZMJTDlpogLNd3rm21xgTxU6qPu9atr54k5R8OJXIvMpeQmj%2BVcP60xA1GYRNfwFDgSJVBZHYuKVK6iJ2cXEK28Q%2Bw3VWk61g0Oka1B2fXUNNAxBVXBzu%2Fl0qu301nT7CPD%2F%2B0czpm5pq9iV2eQKuXPYQOswtfCixgY6pgGFwwfmrTgK5BK9HcdtTOuGwYnnFRm1gdc%2Br2MFw25zyajAJxz%2FU6l1H%2F0mjGC7ifQpEJ4y4OB5yVOiofuLihDfRiBRMUoLBP0NsBGbuQykp%2BUZ%2BvA3F2twG5iiJEJc%2FFEsTQobStVLDkiObSoFyCSu7rKlFpo9HLBb4%2FUMNfaV%2BMqT8N0LKqziWN1A%2Fv2OWLO8D1Pw57dkRReKyViOgjsKcYnqT8SH&X-Amz-Signature=842e2eeddcd7332c8a818d4643cf088daab5bc04548d6da96664da5b8772a0ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
