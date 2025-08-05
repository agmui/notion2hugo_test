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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WACF7DIL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCC%2F1Flaf2miX6i40jE7rP4seUEEh4I%2FZpXAjf8q7NazAIgaSC4hza6NB0Ba5jY4TrldEMr9aIV7wCnWEDS6rugI5Uq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDPC9cEznidoGFEhHsSrcA%2BPgFkPK%2Bon%2Bk8YgdFbKgI9nwLHyRoRzkz%2FI62UYJ2AjCshRlg14WsMjashbEUARnv4au11b%2BYgPBLAQBhrgFBEOwvp1KdqR%2FG9NLoIpolzMh5v9vTrT0a8yv4AX%2BZazo1iEf2AWHQelJQkhm5Kp8A7Gm5uCMUiXDCijVDFRbLfS5UljyO5n6Lfs%2FzSxR%2BYiXiDzf%2B3woaRGQh5C80zdFZfAWVktzBitGgvJxe936Jy%2FlT7yeA22DtYY3rTz6ATTBiuJWQTVnSn63iY%2FG3smpvJfHxCjTNuvgjNaGzrcJkDUonIbJrwpcQ55sQiaBYASmU5YNX8DOWv%2F%2BJcOpgd938VsdiyjmU8VeDdlIOK2YDxPqhJQj2lUwZknnFr79644tZ%2Fj875bgKlFnbGzkYbr4ZDnA6Fw4AwX1xU2L3gS6YVwz57hIjuqjv6%2BcLqJb0dW%2FL7%2F%2FIjZkeR9u0tR0FZrEoU4BTNnlEs3lIVASvtBS1%2FUO6fCCpFq6B6GoNJ2stcjSnsfwvl4NdK907xmD2NNwCGwqX8ZVA5sN56YTHbkjC%2BYKQ239JfARxfzpIBjkoi96KJzfM3WxlV3y6ftOtxrI3SepB8%2BFlfXMUu0yfFOTbKQqiWRMAtqnqk%2BXruNMKr0xMQGOqUBXJEywjuxjKRAcAs6mlqQ1zSCqsH08cGsL2h4Ja8ds2mrGmzABJUdZDZ1cJcqIEreqeV5RC44U6x1nJ%2BgpUzd216mHGvsUsLu3Qf6jnqKbIDO%2Bn9%2BDH%2FVv5lXK79fjncbop2cisYJ5wENk1FjP%2BHLGvwHP6%2F2LkJfn%2B%2B8F3IbEkLMGgyVPpdn4VirSmg8nlxwTX4sJZeSQTOlfrnVsGYUXMnHsxUC&X-Amz-Signature=e13458396c44c6de4a23e4851659172dd65ad2e5af0fc3d195e3a987187b66ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WACF7DIL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCC%2F1Flaf2miX6i40jE7rP4seUEEh4I%2FZpXAjf8q7NazAIgaSC4hza6NB0Ba5jY4TrldEMr9aIV7wCnWEDS6rugI5Uq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDPC9cEznidoGFEhHsSrcA%2BPgFkPK%2Bon%2Bk8YgdFbKgI9nwLHyRoRzkz%2FI62UYJ2AjCshRlg14WsMjashbEUARnv4au11b%2BYgPBLAQBhrgFBEOwvp1KdqR%2FG9NLoIpolzMh5v9vTrT0a8yv4AX%2BZazo1iEf2AWHQelJQkhm5Kp8A7Gm5uCMUiXDCijVDFRbLfS5UljyO5n6Lfs%2FzSxR%2BYiXiDzf%2B3woaRGQh5C80zdFZfAWVktzBitGgvJxe936Jy%2FlT7yeA22DtYY3rTz6ATTBiuJWQTVnSn63iY%2FG3smpvJfHxCjTNuvgjNaGzrcJkDUonIbJrwpcQ55sQiaBYASmU5YNX8DOWv%2F%2BJcOpgd938VsdiyjmU8VeDdlIOK2YDxPqhJQj2lUwZknnFr79644tZ%2Fj875bgKlFnbGzkYbr4ZDnA6Fw4AwX1xU2L3gS6YVwz57hIjuqjv6%2BcLqJb0dW%2FL7%2F%2FIjZkeR9u0tR0FZrEoU4BTNnlEs3lIVASvtBS1%2FUO6fCCpFq6B6GoNJ2stcjSnsfwvl4NdK907xmD2NNwCGwqX8ZVA5sN56YTHbkjC%2BYKQ239JfARxfzpIBjkoi96KJzfM3WxlV3y6ftOtxrI3SepB8%2BFlfXMUu0yfFOTbKQqiWRMAtqnqk%2BXruNMKr0xMQGOqUBXJEywjuxjKRAcAs6mlqQ1zSCqsH08cGsL2h4Ja8ds2mrGmzABJUdZDZ1cJcqIEreqeV5RC44U6x1nJ%2BgpUzd216mHGvsUsLu3Qf6jnqKbIDO%2Bn9%2BDH%2FVv5lXK79fjncbop2cisYJ5wENk1FjP%2BHLGvwHP6%2F2LkJfn%2B%2B8F3IbEkLMGgyVPpdn4VirSmg8nlxwTX4sJZeSQTOlfrnVsGYUXMnHsxUC&X-Amz-Signature=222b747521ff2d2e09d5b5a0ced55cee5e64c42a6c3a50748388678e15b8bf14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WACF7DIL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCC%2F1Flaf2miX6i40jE7rP4seUEEh4I%2FZpXAjf8q7NazAIgaSC4hza6NB0Ba5jY4TrldEMr9aIV7wCnWEDS6rugI5Uq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDPC9cEznidoGFEhHsSrcA%2BPgFkPK%2Bon%2Bk8YgdFbKgI9nwLHyRoRzkz%2FI62UYJ2AjCshRlg14WsMjashbEUARnv4au11b%2BYgPBLAQBhrgFBEOwvp1KdqR%2FG9NLoIpolzMh5v9vTrT0a8yv4AX%2BZazo1iEf2AWHQelJQkhm5Kp8A7Gm5uCMUiXDCijVDFRbLfS5UljyO5n6Lfs%2FzSxR%2BYiXiDzf%2B3woaRGQh5C80zdFZfAWVktzBitGgvJxe936Jy%2FlT7yeA22DtYY3rTz6ATTBiuJWQTVnSn63iY%2FG3smpvJfHxCjTNuvgjNaGzrcJkDUonIbJrwpcQ55sQiaBYASmU5YNX8DOWv%2F%2BJcOpgd938VsdiyjmU8VeDdlIOK2YDxPqhJQj2lUwZknnFr79644tZ%2Fj875bgKlFnbGzkYbr4ZDnA6Fw4AwX1xU2L3gS6YVwz57hIjuqjv6%2BcLqJb0dW%2FL7%2F%2FIjZkeR9u0tR0FZrEoU4BTNnlEs3lIVASvtBS1%2FUO6fCCpFq6B6GoNJ2stcjSnsfwvl4NdK907xmD2NNwCGwqX8ZVA5sN56YTHbkjC%2BYKQ239JfARxfzpIBjkoi96KJzfM3WxlV3y6ftOtxrI3SepB8%2BFlfXMUu0yfFOTbKQqiWRMAtqnqk%2BXruNMKr0xMQGOqUBXJEywjuxjKRAcAs6mlqQ1zSCqsH08cGsL2h4Ja8ds2mrGmzABJUdZDZ1cJcqIEreqeV5RC44U6x1nJ%2BgpUzd216mHGvsUsLu3Qf6jnqKbIDO%2Bn9%2BDH%2FVv5lXK79fjncbop2cisYJ5wENk1FjP%2BHLGvwHP6%2F2LkJfn%2B%2B8F3IbEkLMGgyVPpdn4VirSmg8nlxwTX4sJZeSQTOlfrnVsGYUXMnHsxUC&X-Amz-Signature=42a1b6a9db5373ed44813c28aedd982100f047d4509c5c38fd890d0356244815&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WACF7DIL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCC%2F1Flaf2miX6i40jE7rP4seUEEh4I%2FZpXAjf8q7NazAIgaSC4hza6NB0Ba5jY4TrldEMr9aIV7wCnWEDS6rugI5Uq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDPC9cEznidoGFEhHsSrcA%2BPgFkPK%2Bon%2Bk8YgdFbKgI9nwLHyRoRzkz%2FI62UYJ2AjCshRlg14WsMjashbEUARnv4au11b%2BYgPBLAQBhrgFBEOwvp1KdqR%2FG9NLoIpolzMh5v9vTrT0a8yv4AX%2BZazo1iEf2AWHQelJQkhm5Kp8A7Gm5uCMUiXDCijVDFRbLfS5UljyO5n6Lfs%2FzSxR%2BYiXiDzf%2B3woaRGQh5C80zdFZfAWVktzBitGgvJxe936Jy%2FlT7yeA22DtYY3rTz6ATTBiuJWQTVnSn63iY%2FG3smpvJfHxCjTNuvgjNaGzrcJkDUonIbJrwpcQ55sQiaBYASmU5YNX8DOWv%2F%2BJcOpgd938VsdiyjmU8VeDdlIOK2YDxPqhJQj2lUwZknnFr79644tZ%2Fj875bgKlFnbGzkYbr4ZDnA6Fw4AwX1xU2L3gS6YVwz57hIjuqjv6%2BcLqJb0dW%2FL7%2F%2FIjZkeR9u0tR0FZrEoU4BTNnlEs3lIVASvtBS1%2FUO6fCCpFq6B6GoNJ2stcjSnsfwvl4NdK907xmD2NNwCGwqX8ZVA5sN56YTHbkjC%2BYKQ239JfARxfzpIBjkoi96KJzfM3WxlV3y6ftOtxrI3SepB8%2BFlfXMUu0yfFOTbKQqiWRMAtqnqk%2BXruNMKr0xMQGOqUBXJEywjuxjKRAcAs6mlqQ1zSCqsH08cGsL2h4Ja8ds2mrGmzABJUdZDZ1cJcqIEreqeV5RC44U6x1nJ%2BgpUzd216mHGvsUsLu3Qf6jnqKbIDO%2Bn9%2BDH%2FVv5lXK79fjncbop2cisYJ5wENk1FjP%2BHLGvwHP6%2F2LkJfn%2B%2B8F3IbEkLMGgyVPpdn4VirSmg8nlxwTX4sJZeSQTOlfrnVsGYUXMnHsxUC&X-Amz-Signature=04f89ccfe29727f5b11ccb3fccc81a9a2ff3bc40ea87667f83c7e9834d5e34b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WACF7DIL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCC%2F1Flaf2miX6i40jE7rP4seUEEh4I%2FZpXAjf8q7NazAIgaSC4hza6NB0Ba5jY4TrldEMr9aIV7wCnWEDS6rugI5Uq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDPC9cEznidoGFEhHsSrcA%2BPgFkPK%2Bon%2Bk8YgdFbKgI9nwLHyRoRzkz%2FI62UYJ2AjCshRlg14WsMjashbEUARnv4au11b%2BYgPBLAQBhrgFBEOwvp1KdqR%2FG9NLoIpolzMh5v9vTrT0a8yv4AX%2BZazo1iEf2AWHQelJQkhm5Kp8A7Gm5uCMUiXDCijVDFRbLfS5UljyO5n6Lfs%2FzSxR%2BYiXiDzf%2B3woaRGQh5C80zdFZfAWVktzBitGgvJxe936Jy%2FlT7yeA22DtYY3rTz6ATTBiuJWQTVnSn63iY%2FG3smpvJfHxCjTNuvgjNaGzrcJkDUonIbJrwpcQ55sQiaBYASmU5YNX8DOWv%2F%2BJcOpgd938VsdiyjmU8VeDdlIOK2YDxPqhJQj2lUwZknnFr79644tZ%2Fj875bgKlFnbGzkYbr4ZDnA6Fw4AwX1xU2L3gS6YVwz57hIjuqjv6%2BcLqJb0dW%2FL7%2F%2FIjZkeR9u0tR0FZrEoU4BTNnlEs3lIVASvtBS1%2FUO6fCCpFq6B6GoNJ2stcjSnsfwvl4NdK907xmD2NNwCGwqX8ZVA5sN56YTHbkjC%2BYKQ239JfARxfzpIBjkoi96KJzfM3WxlV3y6ftOtxrI3SepB8%2BFlfXMUu0yfFOTbKQqiWRMAtqnqk%2BXruNMKr0xMQGOqUBXJEywjuxjKRAcAs6mlqQ1zSCqsH08cGsL2h4Ja8ds2mrGmzABJUdZDZ1cJcqIEreqeV5RC44U6x1nJ%2BgpUzd216mHGvsUsLu3Qf6jnqKbIDO%2Bn9%2BDH%2FVv5lXK79fjncbop2cisYJ5wENk1FjP%2BHLGvwHP6%2F2LkJfn%2B%2B8F3IbEkLMGgyVPpdn4VirSmg8nlxwTX4sJZeSQTOlfrnVsGYUXMnHsxUC&X-Amz-Signature=b14b1ac1b70c8a0103a7c230acd31395494f97b33434cf437234d267cdf76155&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WACF7DIL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCC%2F1Flaf2miX6i40jE7rP4seUEEh4I%2FZpXAjf8q7NazAIgaSC4hza6NB0Ba5jY4TrldEMr9aIV7wCnWEDS6rugI5Uq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDPC9cEznidoGFEhHsSrcA%2BPgFkPK%2Bon%2Bk8YgdFbKgI9nwLHyRoRzkz%2FI62UYJ2AjCshRlg14WsMjashbEUARnv4au11b%2BYgPBLAQBhrgFBEOwvp1KdqR%2FG9NLoIpolzMh5v9vTrT0a8yv4AX%2BZazo1iEf2AWHQelJQkhm5Kp8A7Gm5uCMUiXDCijVDFRbLfS5UljyO5n6Lfs%2FzSxR%2BYiXiDzf%2B3woaRGQh5C80zdFZfAWVktzBitGgvJxe936Jy%2FlT7yeA22DtYY3rTz6ATTBiuJWQTVnSn63iY%2FG3smpvJfHxCjTNuvgjNaGzrcJkDUonIbJrwpcQ55sQiaBYASmU5YNX8DOWv%2F%2BJcOpgd938VsdiyjmU8VeDdlIOK2YDxPqhJQj2lUwZknnFr79644tZ%2Fj875bgKlFnbGzkYbr4ZDnA6Fw4AwX1xU2L3gS6YVwz57hIjuqjv6%2BcLqJb0dW%2FL7%2F%2FIjZkeR9u0tR0FZrEoU4BTNnlEs3lIVASvtBS1%2FUO6fCCpFq6B6GoNJ2stcjSnsfwvl4NdK907xmD2NNwCGwqX8ZVA5sN56YTHbkjC%2BYKQ239JfARxfzpIBjkoi96KJzfM3WxlV3y6ftOtxrI3SepB8%2BFlfXMUu0yfFOTbKQqiWRMAtqnqk%2BXruNMKr0xMQGOqUBXJEywjuxjKRAcAs6mlqQ1zSCqsH08cGsL2h4Ja8ds2mrGmzABJUdZDZ1cJcqIEreqeV5RC44U6x1nJ%2BgpUzd216mHGvsUsLu3Qf6jnqKbIDO%2Bn9%2BDH%2FVv5lXK79fjncbop2cisYJ5wENk1FjP%2BHLGvwHP6%2F2LkJfn%2B%2B8F3IbEkLMGgyVPpdn4VirSmg8nlxwTX4sJZeSQTOlfrnVsGYUXMnHsxUC&X-Amz-Signature=4a407f3e6f1edaaac7e8cf61163d11d76d051ce42365caddbee6865a810b5573&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WACF7DIL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCC%2F1Flaf2miX6i40jE7rP4seUEEh4I%2FZpXAjf8q7NazAIgaSC4hza6NB0Ba5jY4TrldEMr9aIV7wCnWEDS6rugI5Uq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDPC9cEznidoGFEhHsSrcA%2BPgFkPK%2Bon%2Bk8YgdFbKgI9nwLHyRoRzkz%2FI62UYJ2AjCshRlg14WsMjashbEUARnv4au11b%2BYgPBLAQBhrgFBEOwvp1KdqR%2FG9NLoIpolzMh5v9vTrT0a8yv4AX%2BZazo1iEf2AWHQelJQkhm5Kp8A7Gm5uCMUiXDCijVDFRbLfS5UljyO5n6Lfs%2FzSxR%2BYiXiDzf%2B3woaRGQh5C80zdFZfAWVktzBitGgvJxe936Jy%2FlT7yeA22DtYY3rTz6ATTBiuJWQTVnSn63iY%2FG3smpvJfHxCjTNuvgjNaGzrcJkDUonIbJrwpcQ55sQiaBYASmU5YNX8DOWv%2F%2BJcOpgd938VsdiyjmU8VeDdlIOK2YDxPqhJQj2lUwZknnFr79644tZ%2Fj875bgKlFnbGzkYbr4ZDnA6Fw4AwX1xU2L3gS6YVwz57hIjuqjv6%2BcLqJb0dW%2FL7%2F%2FIjZkeR9u0tR0FZrEoU4BTNnlEs3lIVASvtBS1%2FUO6fCCpFq6B6GoNJ2stcjSnsfwvl4NdK907xmD2NNwCGwqX8ZVA5sN56YTHbkjC%2BYKQ239JfARxfzpIBjkoi96KJzfM3WxlV3y6ftOtxrI3SepB8%2BFlfXMUu0yfFOTbKQqiWRMAtqnqk%2BXruNMKr0xMQGOqUBXJEywjuxjKRAcAs6mlqQ1zSCqsH08cGsL2h4Ja8ds2mrGmzABJUdZDZ1cJcqIEreqeV5RC44U6x1nJ%2BgpUzd216mHGvsUsLu3Qf6jnqKbIDO%2Bn9%2BDH%2FVv5lXK79fjncbop2cisYJ5wENk1FjP%2BHLGvwHP6%2F2LkJfn%2B%2B8F3IbEkLMGgyVPpdn4VirSmg8nlxwTX4sJZeSQTOlfrnVsGYUXMnHsxUC&X-Amz-Signature=fd1b18d5a47d03f9addc007acffcdd37c3a03b6d4b7687b69aea9a90f07b8abe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WACF7DIL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCC%2F1Flaf2miX6i40jE7rP4seUEEh4I%2FZpXAjf8q7NazAIgaSC4hza6NB0Ba5jY4TrldEMr9aIV7wCnWEDS6rugI5Uq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDPC9cEznidoGFEhHsSrcA%2BPgFkPK%2Bon%2Bk8YgdFbKgI9nwLHyRoRzkz%2FI62UYJ2AjCshRlg14WsMjashbEUARnv4au11b%2BYgPBLAQBhrgFBEOwvp1KdqR%2FG9NLoIpolzMh5v9vTrT0a8yv4AX%2BZazo1iEf2AWHQelJQkhm5Kp8A7Gm5uCMUiXDCijVDFRbLfS5UljyO5n6Lfs%2FzSxR%2BYiXiDzf%2B3woaRGQh5C80zdFZfAWVktzBitGgvJxe936Jy%2FlT7yeA22DtYY3rTz6ATTBiuJWQTVnSn63iY%2FG3smpvJfHxCjTNuvgjNaGzrcJkDUonIbJrwpcQ55sQiaBYASmU5YNX8DOWv%2F%2BJcOpgd938VsdiyjmU8VeDdlIOK2YDxPqhJQj2lUwZknnFr79644tZ%2Fj875bgKlFnbGzkYbr4ZDnA6Fw4AwX1xU2L3gS6YVwz57hIjuqjv6%2BcLqJb0dW%2FL7%2F%2FIjZkeR9u0tR0FZrEoU4BTNnlEs3lIVASvtBS1%2FUO6fCCpFq6B6GoNJ2stcjSnsfwvl4NdK907xmD2NNwCGwqX8ZVA5sN56YTHbkjC%2BYKQ239JfARxfzpIBjkoi96KJzfM3WxlV3y6ftOtxrI3SepB8%2BFlfXMUu0yfFOTbKQqiWRMAtqnqk%2BXruNMKr0xMQGOqUBXJEywjuxjKRAcAs6mlqQ1zSCqsH08cGsL2h4Ja8ds2mrGmzABJUdZDZ1cJcqIEreqeV5RC44U6x1nJ%2BgpUzd216mHGvsUsLu3Qf6jnqKbIDO%2Bn9%2BDH%2FVv5lXK79fjncbop2cisYJ5wENk1FjP%2BHLGvwHP6%2F2LkJfn%2B%2B8F3IbEkLMGgyVPpdn4VirSmg8nlxwTX4sJZeSQTOlfrnVsGYUXMnHsxUC&X-Amz-Signature=50c8a5a3af833964cf303ddb05d1a4ad560bb428be60a2744444ef03fcf892ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WACF7DIL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCC%2F1Flaf2miX6i40jE7rP4seUEEh4I%2FZpXAjf8q7NazAIgaSC4hza6NB0Ba5jY4TrldEMr9aIV7wCnWEDS6rugI5Uq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDPC9cEznidoGFEhHsSrcA%2BPgFkPK%2Bon%2Bk8YgdFbKgI9nwLHyRoRzkz%2FI62UYJ2AjCshRlg14WsMjashbEUARnv4au11b%2BYgPBLAQBhrgFBEOwvp1KdqR%2FG9NLoIpolzMh5v9vTrT0a8yv4AX%2BZazo1iEf2AWHQelJQkhm5Kp8A7Gm5uCMUiXDCijVDFRbLfS5UljyO5n6Lfs%2FzSxR%2BYiXiDzf%2B3woaRGQh5C80zdFZfAWVktzBitGgvJxe936Jy%2FlT7yeA22DtYY3rTz6ATTBiuJWQTVnSn63iY%2FG3smpvJfHxCjTNuvgjNaGzrcJkDUonIbJrwpcQ55sQiaBYASmU5YNX8DOWv%2F%2BJcOpgd938VsdiyjmU8VeDdlIOK2YDxPqhJQj2lUwZknnFr79644tZ%2Fj875bgKlFnbGzkYbr4ZDnA6Fw4AwX1xU2L3gS6YVwz57hIjuqjv6%2BcLqJb0dW%2FL7%2F%2FIjZkeR9u0tR0FZrEoU4BTNnlEs3lIVASvtBS1%2FUO6fCCpFq6B6GoNJ2stcjSnsfwvl4NdK907xmD2NNwCGwqX8ZVA5sN56YTHbkjC%2BYKQ239JfARxfzpIBjkoi96KJzfM3WxlV3y6ftOtxrI3SepB8%2BFlfXMUu0yfFOTbKQqiWRMAtqnqk%2BXruNMKr0xMQGOqUBXJEywjuxjKRAcAs6mlqQ1zSCqsH08cGsL2h4Ja8ds2mrGmzABJUdZDZ1cJcqIEreqeV5RC44U6x1nJ%2BgpUzd216mHGvsUsLu3Qf6jnqKbIDO%2Bn9%2BDH%2FVv5lXK79fjncbop2cisYJ5wENk1FjP%2BHLGvwHP6%2F2LkJfn%2B%2B8F3IbEkLMGgyVPpdn4VirSmg8nlxwTX4sJZeSQTOlfrnVsGYUXMnHsxUC&X-Amz-Signature=48205474d441d1c5803950ab45f6dcacd9bd852f6dac9136a80dbebba96d1f46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WACF7DIL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCC%2F1Flaf2miX6i40jE7rP4seUEEh4I%2FZpXAjf8q7NazAIgaSC4hza6NB0Ba5jY4TrldEMr9aIV7wCnWEDS6rugI5Uq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDPC9cEznidoGFEhHsSrcA%2BPgFkPK%2Bon%2Bk8YgdFbKgI9nwLHyRoRzkz%2FI62UYJ2AjCshRlg14WsMjashbEUARnv4au11b%2BYgPBLAQBhrgFBEOwvp1KdqR%2FG9NLoIpolzMh5v9vTrT0a8yv4AX%2BZazo1iEf2AWHQelJQkhm5Kp8A7Gm5uCMUiXDCijVDFRbLfS5UljyO5n6Lfs%2FzSxR%2BYiXiDzf%2B3woaRGQh5C80zdFZfAWVktzBitGgvJxe936Jy%2FlT7yeA22DtYY3rTz6ATTBiuJWQTVnSn63iY%2FG3smpvJfHxCjTNuvgjNaGzrcJkDUonIbJrwpcQ55sQiaBYASmU5YNX8DOWv%2F%2BJcOpgd938VsdiyjmU8VeDdlIOK2YDxPqhJQj2lUwZknnFr79644tZ%2Fj875bgKlFnbGzkYbr4ZDnA6Fw4AwX1xU2L3gS6YVwz57hIjuqjv6%2BcLqJb0dW%2FL7%2F%2FIjZkeR9u0tR0FZrEoU4BTNnlEs3lIVASvtBS1%2FUO6fCCpFq6B6GoNJ2stcjSnsfwvl4NdK907xmD2NNwCGwqX8ZVA5sN56YTHbkjC%2BYKQ239JfARxfzpIBjkoi96KJzfM3WxlV3y6ftOtxrI3SepB8%2BFlfXMUu0yfFOTbKQqiWRMAtqnqk%2BXruNMKr0xMQGOqUBXJEywjuxjKRAcAs6mlqQ1zSCqsH08cGsL2h4Ja8ds2mrGmzABJUdZDZ1cJcqIEreqeV5RC44U6x1nJ%2BgpUzd216mHGvsUsLu3Qf6jnqKbIDO%2Bn9%2BDH%2FVv5lXK79fjncbop2cisYJ5wENk1FjP%2BHLGvwHP6%2F2LkJfn%2B%2B8F3IbEkLMGgyVPpdn4VirSmg8nlxwTX4sJZeSQTOlfrnVsGYUXMnHsxUC&X-Amz-Signature=a5a195eba08fc8f6cf0e304ebb133cf96c1f7a0d00a655df57c61ba3f514c531&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WACF7DIL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCC%2F1Flaf2miX6i40jE7rP4seUEEh4I%2FZpXAjf8q7NazAIgaSC4hza6NB0Ba5jY4TrldEMr9aIV7wCnWEDS6rugI5Uq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDPC9cEznidoGFEhHsSrcA%2BPgFkPK%2Bon%2Bk8YgdFbKgI9nwLHyRoRzkz%2FI62UYJ2AjCshRlg14WsMjashbEUARnv4au11b%2BYgPBLAQBhrgFBEOwvp1KdqR%2FG9NLoIpolzMh5v9vTrT0a8yv4AX%2BZazo1iEf2AWHQelJQkhm5Kp8A7Gm5uCMUiXDCijVDFRbLfS5UljyO5n6Lfs%2FzSxR%2BYiXiDzf%2B3woaRGQh5C80zdFZfAWVktzBitGgvJxe936Jy%2FlT7yeA22DtYY3rTz6ATTBiuJWQTVnSn63iY%2FG3smpvJfHxCjTNuvgjNaGzrcJkDUonIbJrwpcQ55sQiaBYASmU5YNX8DOWv%2F%2BJcOpgd938VsdiyjmU8VeDdlIOK2YDxPqhJQj2lUwZknnFr79644tZ%2Fj875bgKlFnbGzkYbr4ZDnA6Fw4AwX1xU2L3gS6YVwz57hIjuqjv6%2BcLqJb0dW%2FL7%2F%2FIjZkeR9u0tR0FZrEoU4BTNnlEs3lIVASvtBS1%2FUO6fCCpFq6B6GoNJ2stcjSnsfwvl4NdK907xmD2NNwCGwqX8ZVA5sN56YTHbkjC%2BYKQ239JfARxfzpIBjkoi96KJzfM3WxlV3y6ftOtxrI3SepB8%2BFlfXMUu0yfFOTbKQqiWRMAtqnqk%2BXruNMKr0xMQGOqUBXJEywjuxjKRAcAs6mlqQ1zSCqsH08cGsL2h4Ja8ds2mrGmzABJUdZDZ1cJcqIEreqeV5RC44U6x1nJ%2BgpUzd216mHGvsUsLu3Qf6jnqKbIDO%2Bn9%2BDH%2FVv5lXK79fjncbop2cisYJ5wENk1FjP%2BHLGvwHP6%2F2LkJfn%2B%2B8F3IbEkLMGgyVPpdn4VirSmg8nlxwTX4sJZeSQTOlfrnVsGYUXMnHsxUC&X-Amz-Signature=7e9e46bf5a38adc5a4f25bebc5ec23a043ebd16ef73b418a500ec643021178fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WACF7DIL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCC%2F1Flaf2miX6i40jE7rP4seUEEh4I%2FZpXAjf8q7NazAIgaSC4hza6NB0Ba5jY4TrldEMr9aIV7wCnWEDS6rugI5Uq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDPC9cEznidoGFEhHsSrcA%2BPgFkPK%2Bon%2Bk8YgdFbKgI9nwLHyRoRzkz%2FI62UYJ2AjCshRlg14WsMjashbEUARnv4au11b%2BYgPBLAQBhrgFBEOwvp1KdqR%2FG9NLoIpolzMh5v9vTrT0a8yv4AX%2BZazo1iEf2AWHQelJQkhm5Kp8A7Gm5uCMUiXDCijVDFRbLfS5UljyO5n6Lfs%2FzSxR%2BYiXiDzf%2B3woaRGQh5C80zdFZfAWVktzBitGgvJxe936Jy%2FlT7yeA22DtYY3rTz6ATTBiuJWQTVnSn63iY%2FG3smpvJfHxCjTNuvgjNaGzrcJkDUonIbJrwpcQ55sQiaBYASmU5YNX8DOWv%2F%2BJcOpgd938VsdiyjmU8VeDdlIOK2YDxPqhJQj2lUwZknnFr79644tZ%2Fj875bgKlFnbGzkYbr4ZDnA6Fw4AwX1xU2L3gS6YVwz57hIjuqjv6%2BcLqJb0dW%2FL7%2F%2FIjZkeR9u0tR0FZrEoU4BTNnlEs3lIVASvtBS1%2FUO6fCCpFq6B6GoNJ2stcjSnsfwvl4NdK907xmD2NNwCGwqX8ZVA5sN56YTHbkjC%2BYKQ239JfARxfzpIBjkoi96KJzfM3WxlV3y6ftOtxrI3SepB8%2BFlfXMUu0yfFOTbKQqiWRMAtqnqk%2BXruNMKr0xMQGOqUBXJEywjuxjKRAcAs6mlqQ1zSCqsH08cGsL2h4Ja8ds2mrGmzABJUdZDZ1cJcqIEreqeV5RC44U6x1nJ%2BgpUzd216mHGvsUsLu3Qf6jnqKbIDO%2Bn9%2BDH%2FVv5lXK79fjncbop2cisYJ5wENk1FjP%2BHLGvwHP6%2F2LkJfn%2B%2B8F3IbEkLMGgyVPpdn4VirSmg8nlxwTX4sJZeSQTOlfrnVsGYUXMnHsxUC&X-Amz-Signature=fc5d52bd906ff94ca52845ce894b278c4810eedbdfdac8529ecd210e8c0c2ec9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WACF7DIL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCC%2F1Flaf2miX6i40jE7rP4seUEEh4I%2FZpXAjf8q7NazAIgaSC4hza6NB0Ba5jY4TrldEMr9aIV7wCnWEDS6rugI5Uq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDPC9cEznidoGFEhHsSrcA%2BPgFkPK%2Bon%2Bk8YgdFbKgI9nwLHyRoRzkz%2FI62UYJ2AjCshRlg14WsMjashbEUARnv4au11b%2BYgPBLAQBhrgFBEOwvp1KdqR%2FG9NLoIpolzMh5v9vTrT0a8yv4AX%2BZazo1iEf2AWHQelJQkhm5Kp8A7Gm5uCMUiXDCijVDFRbLfS5UljyO5n6Lfs%2FzSxR%2BYiXiDzf%2B3woaRGQh5C80zdFZfAWVktzBitGgvJxe936Jy%2FlT7yeA22DtYY3rTz6ATTBiuJWQTVnSn63iY%2FG3smpvJfHxCjTNuvgjNaGzrcJkDUonIbJrwpcQ55sQiaBYASmU5YNX8DOWv%2F%2BJcOpgd938VsdiyjmU8VeDdlIOK2YDxPqhJQj2lUwZknnFr79644tZ%2Fj875bgKlFnbGzkYbr4ZDnA6Fw4AwX1xU2L3gS6YVwz57hIjuqjv6%2BcLqJb0dW%2FL7%2F%2FIjZkeR9u0tR0FZrEoU4BTNnlEs3lIVASvtBS1%2FUO6fCCpFq6B6GoNJ2stcjSnsfwvl4NdK907xmD2NNwCGwqX8ZVA5sN56YTHbkjC%2BYKQ239JfARxfzpIBjkoi96KJzfM3WxlV3y6ftOtxrI3SepB8%2BFlfXMUu0yfFOTbKQqiWRMAtqnqk%2BXruNMKr0xMQGOqUBXJEywjuxjKRAcAs6mlqQ1zSCqsH08cGsL2h4Ja8ds2mrGmzABJUdZDZ1cJcqIEreqeV5RC44U6x1nJ%2BgpUzd216mHGvsUsLu3Qf6jnqKbIDO%2Bn9%2BDH%2FVv5lXK79fjncbop2cisYJ5wENk1FjP%2BHLGvwHP6%2F2LkJfn%2B%2B8F3IbEkLMGgyVPpdn4VirSmg8nlxwTX4sJZeSQTOlfrnVsGYUXMnHsxUC&X-Amz-Signature=39699d8af16f95d24b0d814e749779094039b6da90ae2402b6fd42ba2985ecd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WACF7DIL%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCC%2F1Flaf2miX6i40jE7rP4seUEEh4I%2FZpXAjf8q7NazAIgaSC4hza6NB0Ba5jY4TrldEMr9aIV7wCnWEDS6rugI5Uq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDPC9cEznidoGFEhHsSrcA%2BPgFkPK%2Bon%2Bk8YgdFbKgI9nwLHyRoRzkz%2FI62UYJ2AjCshRlg14WsMjashbEUARnv4au11b%2BYgPBLAQBhrgFBEOwvp1KdqR%2FG9NLoIpolzMh5v9vTrT0a8yv4AX%2BZazo1iEf2AWHQelJQkhm5Kp8A7Gm5uCMUiXDCijVDFRbLfS5UljyO5n6Lfs%2FzSxR%2BYiXiDzf%2B3woaRGQh5C80zdFZfAWVktzBitGgvJxe936Jy%2FlT7yeA22DtYY3rTz6ATTBiuJWQTVnSn63iY%2FG3smpvJfHxCjTNuvgjNaGzrcJkDUonIbJrwpcQ55sQiaBYASmU5YNX8DOWv%2F%2BJcOpgd938VsdiyjmU8VeDdlIOK2YDxPqhJQj2lUwZknnFr79644tZ%2Fj875bgKlFnbGzkYbr4ZDnA6Fw4AwX1xU2L3gS6YVwz57hIjuqjv6%2BcLqJb0dW%2FL7%2F%2FIjZkeR9u0tR0FZrEoU4BTNnlEs3lIVASvtBS1%2FUO6fCCpFq6B6GoNJ2stcjSnsfwvl4NdK907xmD2NNwCGwqX8ZVA5sN56YTHbkjC%2BYKQ239JfARxfzpIBjkoi96KJzfM3WxlV3y6ftOtxrI3SepB8%2BFlfXMUu0yfFOTbKQqiWRMAtqnqk%2BXruNMKr0xMQGOqUBXJEywjuxjKRAcAs6mlqQ1zSCqsH08cGsL2h4Ja8ds2mrGmzABJUdZDZ1cJcqIEreqeV5RC44U6x1nJ%2BgpUzd216mHGvsUsLu3Qf6jnqKbIDO%2Bn9%2BDH%2FVv5lXK79fjncbop2cisYJ5wENk1FjP%2BHLGvwHP6%2F2LkJfn%2B%2B8F3IbEkLMGgyVPpdn4VirSmg8nlxwTX4sJZeSQTOlfrnVsGYUXMnHsxUC&X-Amz-Signature=2aa068c8b5e172bbd838ef97544b1033b0d2a5ea1a7b2526cde6aeea386d8c04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
