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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LGYBV6Q%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQD0DkuLcmR%2FRuuRRpvbHP%2Bfv7a2%2BUN57lAKvWVz66mSGAIgPMAL3cJqKtdQ2sPy6psNb0x%2F5FrwP%2B%2FPLSntzOIa%2BWUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVpb8M7QJDvg4iOAyrcA5oeoqvMxAcfgfiCxrtZWhdU6Fwn8wsD2dKxzgm%2BKh5WeGiKD7RFF5MFxaIZ5XSEztxcXeBfDG8ExWQut3hZyOttx6EvE3Vbp7QXYzT3sJ4MpyQyeGaA%2Bs0y6emmyFKMQ%2FevX9q5d7X82X%2BOUSxjrYnks%2FmyZ1tQHW65xDjlV5bxtbxOd4wb6RiW46CQMys3IEzHv2NFBTPRO%2BPN0ZHuKIYIzMfHFQhwB7SdPDcITl%2FqR8UXujGXmydw8fMSNAH%2BK57tERXF8BlwM0o1IXbyBA%2Blhd9tAdlU7iy3BiqXhLgPxcwPailtZW6JV9H2SPqUHj6KqCgPPhktIYJmPc33Tw22NjeJZ4Vk4HFRKDXggfQfSFVlZvLH7UsUDDHh1jH8v7C80ejjcpSqybVLcksy2P3yPb98t4fUkxCFUKC2JYORuX0N8uqdLrKSbkVsD3fH3i2za%2F47ybE%2FGesokZJpcHFZlacMTUbJFZZlviKyC4dmb3WkD1wYXQosN7%2FAm3wKV%2Fj3N2uwjzI%2FdiECMKHp6b%2BL9Vpz8gxjG%2Fb%2BrZpLHoMNzOftTYDXbkvyszh%2Bkx2j7MF%2BfmNwTUOXrTtGW3wru2pKuu6x0%2Fc33wMaMjfZ7YYY9g4HUQdCTRBxwLtEMMjX4tEGOqUBz1eDfvL2ZP7U2gVoksIWeS%2B%2F8tgDjqn4b0CjbbX3uh%2BFyYUmkLJzwVOHL8ltITSatj8gf5LtCKRx260olumx1N8XZBXa0EiQuFkocfSSNa0izBtXB7%2BUDuLriI3HT7%2FwLvE1Zlya6dfHhYxQjtU2z4C4r7GFkmaEYOt4Auch7mf5yy4SIYQxD%2BO44wvaYSAM1cFve1J9a9k7sKeK4hMyjKODOK4h&X-Amz-Signature=6f51a8a90bbd2d46d4384054e25379bef812dab805526abe056bbbb703c272f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LGYBV6Q%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQD0DkuLcmR%2FRuuRRpvbHP%2Bfv7a2%2BUN57lAKvWVz66mSGAIgPMAL3cJqKtdQ2sPy6psNb0x%2F5FrwP%2B%2FPLSntzOIa%2BWUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVpb8M7QJDvg4iOAyrcA5oeoqvMxAcfgfiCxrtZWhdU6Fwn8wsD2dKxzgm%2BKh5WeGiKD7RFF5MFxaIZ5XSEztxcXeBfDG8ExWQut3hZyOttx6EvE3Vbp7QXYzT3sJ4MpyQyeGaA%2Bs0y6emmyFKMQ%2FevX9q5d7X82X%2BOUSxjrYnks%2FmyZ1tQHW65xDjlV5bxtbxOd4wb6RiW46CQMys3IEzHv2NFBTPRO%2BPN0ZHuKIYIzMfHFQhwB7SdPDcITl%2FqR8UXujGXmydw8fMSNAH%2BK57tERXF8BlwM0o1IXbyBA%2Blhd9tAdlU7iy3BiqXhLgPxcwPailtZW6JV9H2SPqUHj6KqCgPPhktIYJmPc33Tw22NjeJZ4Vk4HFRKDXggfQfSFVlZvLH7UsUDDHh1jH8v7C80ejjcpSqybVLcksy2P3yPb98t4fUkxCFUKC2JYORuX0N8uqdLrKSbkVsD3fH3i2za%2F47ybE%2FGesokZJpcHFZlacMTUbJFZZlviKyC4dmb3WkD1wYXQosN7%2FAm3wKV%2Fj3N2uwjzI%2FdiECMKHp6b%2BL9Vpz8gxjG%2Fb%2BrZpLHoMNzOftTYDXbkvyszh%2Bkx2j7MF%2BfmNwTUOXrTtGW3wru2pKuu6x0%2Fc33wMaMjfZ7YYY9g4HUQdCTRBxwLtEMMjX4tEGOqUBz1eDfvL2ZP7U2gVoksIWeS%2B%2F8tgDjqn4b0CjbbX3uh%2BFyYUmkLJzwVOHL8ltITSatj8gf5LtCKRx260olumx1N8XZBXa0EiQuFkocfSSNa0izBtXB7%2BUDuLriI3HT7%2FwLvE1Zlya6dfHhYxQjtU2z4C4r7GFkmaEYOt4Auch7mf5yy4SIYQxD%2BO44wvaYSAM1cFve1J9a9k7sKeK4hMyjKODOK4h&X-Amz-Signature=5cc31973cb7b218eeb61d9a4d44211cd2de5ebefd83d4123f48f1c9373d3644f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LGYBV6Q%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQD0DkuLcmR%2FRuuRRpvbHP%2Bfv7a2%2BUN57lAKvWVz66mSGAIgPMAL3cJqKtdQ2sPy6psNb0x%2F5FrwP%2B%2FPLSntzOIa%2BWUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVpb8M7QJDvg4iOAyrcA5oeoqvMxAcfgfiCxrtZWhdU6Fwn8wsD2dKxzgm%2BKh5WeGiKD7RFF5MFxaIZ5XSEztxcXeBfDG8ExWQut3hZyOttx6EvE3Vbp7QXYzT3sJ4MpyQyeGaA%2Bs0y6emmyFKMQ%2FevX9q5d7X82X%2BOUSxjrYnks%2FmyZ1tQHW65xDjlV5bxtbxOd4wb6RiW46CQMys3IEzHv2NFBTPRO%2BPN0ZHuKIYIzMfHFQhwB7SdPDcITl%2FqR8UXujGXmydw8fMSNAH%2BK57tERXF8BlwM0o1IXbyBA%2Blhd9tAdlU7iy3BiqXhLgPxcwPailtZW6JV9H2SPqUHj6KqCgPPhktIYJmPc33Tw22NjeJZ4Vk4HFRKDXggfQfSFVlZvLH7UsUDDHh1jH8v7C80ejjcpSqybVLcksy2P3yPb98t4fUkxCFUKC2JYORuX0N8uqdLrKSbkVsD3fH3i2za%2F47ybE%2FGesokZJpcHFZlacMTUbJFZZlviKyC4dmb3WkD1wYXQosN7%2FAm3wKV%2Fj3N2uwjzI%2FdiECMKHp6b%2BL9Vpz8gxjG%2Fb%2BrZpLHoMNzOftTYDXbkvyszh%2Bkx2j7MF%2BfmNwTUOXrTtGW3wru2pKuu6x0%2Fc33wMaMjfZ7YYY9g4HUQdCTRBxwLtEMMjX4tEGOqUBz1eDfvL2ZP7U2gVoksIWeS%2B%2F8tgDjqn4b0CjbbX3uh%2BFyYUmkLJzwVOHL8ltITSatj8gf5LtCKRx260olumx1N8XZBXa0EiQuFkocfSSNa0izBtXB7%2BUDuLriI3HT7%2FwLvE1Zlya6dfHhYxQjtU2z4C4r7GFkmaEYOt4Auch7mf5yy4SIYQxD%2BO44wvaYSAM1cFve1J9a9k7sKeK4hMyjKODOK4h&X-Amz-Signature=524ffbcbfe761de89dca9fa3b212a002d58fec26667236e73519091b0f23ebdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LGYBV6Q%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQD0DkuLcmR%2FRuuRRpvbHP%2Bfv7a2%2BUN57lAKvWVz66mSGAIgPMAL3cJqKtdQ2sPy6psNb0x%2F5FrwP%2B%2FPLSntzOIa%2BWUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVpb8M7QJDvg4iOAyrcA5oeoqvMxAcfgfiCxrtZWhdU6Fwn8wsD2dKxzgm%2BKh5WeGiKD7RFF5MFxaIZ5XSEztxcXeBfDG8ExWQut3hZyOttx6EvE3Vbp7QXYzT3sJ4MpyQyeGaA%2Bs0y6emmyFKMQ%2FevX9q5d7X82X%2BOUSxjrYnks%2FmyZ1tQHW65xDjlV5bxtbxOd4wb6RiW46CQMys3IEzHv2NFBTPRO%2BPN0ZHuKIYIzMfHFQhwB7SdPDcITl%2FqR8UXujGXmydw8fMSNAH%2BK57tERXF8BlwM0o1IXbyBA%2Blhd9tAdlU7iy3BiqXhLgPxcwPailtZW6JV9H2SPqUHj6KqCgPPhktIYJmPc33Tw22NjeJZ4Vk4HFRKDXggfQfSFVlZvLH7UsUDDHh1jH8v7C80ejjcpSqybVLcksy2P3yPb98t4fUkxCFUKC2JYORuX0N8uqdLrKSbkVsD3fH3i2za%2F47ybE%2FGesokZJpcHFZlacMTUbJFZZlviKyC4dmb3WkD1wYXQosN7%2FAm3wKV%2Fj3N2uwjzI%2FdiECMKHp6b%2BL9Vpz8gxjG%2Fb%2BrZpLHoMNzOftTYDXbkvyszh%2Bkx2j7MF%2BfmNwTUOXrTtGW3wru2pKuu6x0%2Fc33wMaMjfZ7YYY9g4HUQdCTRBxwLtEMMjX4tEGOqUBz1eDfvL2ZP7U2gVoksIWeS%2B%2F8tgDjqn4b0CjbbX3uh%2BFyYUmkLJzwVOHL8ltITSatj8gf5LtCKRx260olumx1N8XZBXa0EiQuFkocfSSNa0izBtXB7%2BUDuLriI3HT7%2FwLvE1Zlya6dfHhYxQjtU2z4C4r7GFkmaEYOt4Auch7mf5yy4SIYQxD%2BO44wvaYSAM1cFve1J9a9k7sKeK4hMyjKODOK4h&X-Amz-Signature=8c72df9289c2edcb86b3af802a560bf8c167eccbc65473ce7676002b9c5eb8c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LGYBV6Q%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQD0DkuLcmR%2FRuuRRpvbHP%2Bfv7a2%2BUN57lAKvWVz66mSGAIgPMAL3cJqKtdQ2sPy6psNb0x%2F5FrwP%2B%2FPLSntzOIa%2BWUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVpb8M7QJDvg4iOAyrcA5oeoqvMxAcfgfiCxrtZWhdU6Fwn8wsD2dKxzgm%2BKh5WeGiKD7RFF5MFxaIZ5XSEztxcXeBfDG8ExWQut3hZyOttx6EvE3Vbp7QXYzT3sJ4MpyQyeGaA%2Bs0y6emmyFKMQ%2FevX9q5d7X82X%2BOUSxjrYnks%2FmyZ1tQHW65xDjlV5bxtbxOd4wb6RiW46CQMys3IEzHv2NFBTPRO%2BPN0ZHuKIYIzMfHFQhwB7SdPDcITl%2FqR8UXujGXmydw8fMSNAH%2BK57tERXF8BlwM0o1IXbyBA%2Blhd9tAdlU7iy3BiqXhLgPxcwPailtZW6JV9H2SPqUHj6KqCgPPhktIYJmPc33Tw22NjeJZ4Vk4HFRKDXggfQfSFVlZvLH7UsUDDHh1jH8v7C80ejjcpSqybVLcksy2P3yPb98t4fUkxCFUKC2JYORuX0N8uqdLrKSbkVsD3fH3i2za%2F47ybE%2FGesokZJpcHFZlacMTUbJFZZlviKyC4dmb3WkD1wYXQosN7%2FAm3wKV%2Fj3N2uwjzI%2FdiECMKHp6b%2BL9Vpz8gxjG%2Fb%2BrZpLHoMNzOftTYDXbkvyszh%2Bkx2j7MF%2BfmNwTUOXrTtGW3wru2pKuu6x0%2Fc33wMaMjfZ7YYY9g4HUQdCTRBxwLtEMMjX4tEGOqUBz1eDfvL2ZP7U2gVoksIWeS%2B%2F8tgDjqn4b0CjbbX3uh%2BFyYUmkLJzwVOHL8ltITSatj8gf5LtCKRx260olumx1N8XZBXa0EiQuFkocfSSNa0izBtXB7%2BUDuLriI3HT7%2FwLvE1Zlya6dfHhYxQjtU2z4C4r7GFkmaEYOt4Auch7mf5yy4SIYQxD%2BO44wvaYSAM1cFve1J9a9k7sKeK4hMyjKODOK4h&X-Amz-Signature=9b2c2b994c1e1e846778174dcae074b0301a355cf9f80a94b3ff32dffd2c398a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LGYBV6Q%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQD0DkuLcmR%2FRuuRRpvbHP%2Bfv7a2%2BUN57lAKvWVz66mSGAIgPMAL3cJqKtdQ2sPy6psNb0x%2F5FrwP%2B%2FPLSntzOIa%2BWUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVpb8M7QJDvg4iOAyrcA5oeoqvMxAcfgfiCxrtZWhdU6Fwn8wsD2dKxzgm%2BKh5WeGiKD7RFF5MFxaIZ5XSEztxcXeBfDG8ExWQut3hZyOttx6EvE3Vbp7QXYzT3sJ4MpyQyeGaA%2Bs0y6emmyFKMQ%2FevX9q5d7X82X%2BOUSxjrYnks%2FmyZ1tQHW65xDjlV5bxtbxOd4wb6RiW46CQMys3IEzHv2NFBTPRO%2BPN0ZHuKIYIzMfHFQhwB7SdPDcITl%2FqR8UXujGXmydw8fMSNAH%2BK57tERXF8BlwM0o1IXbyBA%2Blhd9tAdlU7iy3BiqXhLgPxcwPailtZW6JV9H2SPqUHj6KqCgPPhktIYJmPc33Tw22NjeJZ4Vk4HFRKDXggfQfSFVlZvLH7UsUDDHh1jH8v7C80ejjcpSqybVLcksy2P3yPb98t4fUkxCFUKC2JYORuX0N8uqdLrKSbkVsD3fH3i2za%2F47ybE%2FGesokZJpcHFZlacMTUbJFZZlviKyC4dmb3WkD1wYXQosN7%2FAm3wKV%2Fj3N2uwjzI%2FdiECMKHp6b%2BL9Vpz8gxjG%2Fb%2BrZpLHoMNzOftTYDXbkvyszh%2Bkx2j7MF%2BfmNwTUOXrTtGW3wru2pKuu6x0%2Fc33wMaMjfZ7YYY9g4HUQdCTRBxwLtEMMjX4tEGOqUBz1eDfvL2ZP7U2gVoksIWeS%2B%2F8tgDjqn4b0CjbbX3uh%2BFyYUmkLJzwVOHL8ltITSatj8gf5LtCKRx260olumx1N8XZBXa0EiQuFkocfSSNa0izBtXB7%2BUDuLriI3HT7%2FwLvE1Zlya6dfHhYxQjtU2z4C4r7GFkmaEYOt4Auch7mf5yy4SIYQxD%2BO44wvaYSAM1cFve1J9a9k7sKeK4hMyjKODOK4h&X-Amz-Signature=184ba5ce98f2cc370d1c26b9b67bcdf236ae03664ca49f7579e6f8a10b2ea5bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LGYBV6Q%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQD0DkuLcmR%2FRuuRRpvbHP%2Bfv7a2%2BUN57lAKvWVz66mSGAIgPMAL3cJqKtdQ2sPy6psNb0x%2F5FrwP%2B%2FPLSntzOIa%2BWUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVpb8M7QJDvg4iOAyrcA5oeoqvMxAcfgfiCxrtZWhdU6Fwn8wsD2dKxzgm%2BKh5WeGiKD7RFF5MFxaIZ5XSEztxcXeBfDG8ExWQut3hZyOttx6EvE3Vbp7QXYzT3sJ4MpyQyeGaA%2Bs0y6emmyFKMQ%2FevX9q5d7X82X%2BOUSxjrYnks%2FmyZ1tQHW65xDjlV5bxtbxOd4wb6RiW46CQMys3IEzHv2NFBTPRO%2BPN0ZHuKIYIzMfHFQhwB7SdPDcITl%2FqR8UXujGXmydw8fMSNAH%2BK57tERXF8BlwM0o1IXbyBA%2Blhd9tAdlU7iy3BiqXhLgPxcwPailtZW6JV9H2SPqUHj6KqCgPPhktIYJmPc33Tw22NjeJZ4Vk4HFRKDXggfQfSFVlZvLH7UsUDDHh1jH8v7C80ejjcpSqybVLcksy2P3yPb98t4fUkxCFUKC2JYORuX0N8uqdLrKSbkVsD3fH3i2za%2F47ybE%2FGesokZJpcHFZlacMTUbJFZZlviKyC4dmb3WkD1wYXQosN7%2FAm3wKV%2Fj3N2uwjzI%2FdiECMKHp6b%2BL9Vpz8gxjG%2Fb%2BrZpLHoMNzOftTYDXbkvyszh%2Bkx2j7MF%2BfmNwTUOXrTtGW3wru2pKuu6x0%2Fc33wMaMjfZ7YYY9g4HUQdCTRBxwLtEMMjX4tEGOqUBz1eDfvL2ZP7U2gVoksIWeS%2B%2F8tgDjqn4b0CjbbX3uh%2BFyYUmkLJzwVOHL8ltITSatj8gf5LtCKRx260olumx1N8XZBXa0EiQuFkocfSSNa0izBtXB7%2BUDuLriI3HT7%2FwLvE1Zlya6dfHhYxQjtU2z4C4r7GFkmaEYOt4Auch7mf5yy4SIYQxD%2BO44wvaYSAM1cFve1J9a9k7sKeK4hMyjKODOK4h&X-Amz-Signature=3781285ea0a8de2d3d9359631e5ae73cb47a8c28110843d7136162efb0360821&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LGYBV6Q%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQD0DkuLcmR%2FRuuRRpvbHP%2Bfv7a2%2BUN57lAKvWVz66mSGAIgPMAL3cJqKtdQ2sPy6psNb0x%2F5FrwP%2B%2FPLSntzOIa%2BWUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVpb8M7QJDvg4iOAyrcA5oeoqvMxAcfgfiCxrtZWhdU6Fwn8wsD2dKxzgm%2BKh5WeGiKD7RFF5MFxaIZ5XSEztxcXeBfDG8ExWQut3hZyOttx6EvE3Vbp7QXYzT3sJ4MpyQyeGaA%2Bs0y6emmyFKMQ%2FevX9q5d7X82X%2BOUSxjrYnks%2FmyZ1tQHW65xDjlV5bxtbxOd4wb6RiW46CQMys3IEzHv2NFBTPRO%2BPN0ZHuKIYIzMfHFQhwB7SdPDcITl%2FqR8UXujGXmydw8fMSNAH%2BK57tERXF8BlwM0o1IXbyBA%2Blhd9tAdlU7iy3BiqXhLgPxcwPailtZW6JV9H2SPqUHj6KqCgPPhktIYJmPc33Tw22NjeJZ4Vk4HFRKDXggfQfSFVlZvLH7UsUDDHh1jH8v7C80ejjcpSqybVLcksy2P3yPb98t4fUkxCFUKC2JYORuX0N8uqdLrKSbkVsD3fH3i2za%2F47ybE%2FGesokZJpcHFZlacMTUbJFZZlviKyC4dmb3WkD1wYXQosN7%2FAm3wKV%2Fj3N2uwjzI%2FdiECMKHp6b%2BL9Vpz8gxjG%2Fb%2BrZpLHoMNzOftTYDXbkvyszh%2Bkx2j7MF%2BfmNwTUOXrTtGW3wru2pKuu6x0%2Fc33wMaMjfZ7YYY9g4HUQdCTRBxwLtEMMjX4tEGOqUBz1eDfvL2ZP7U2gVoksIWeS%2B%2F8tgDjqn4b0CjbbX3uh%2BFyYUmkLJzwVOHL8ltITSatj8gf5LtCKRx260olumx1N8XZBXa0EiQuFkocfSSNa0izBtXB7%2BUDuLriI3HT7%2FwLvE1Zlya6dfHhYxQjtU2z4C4r7GFkmaEYOt4Auch7mf5yy4SIYQxD%2BO44wvaYSAM1cFve1J9a9k7sKeK4hMyjKODOK4h&X-Amz-Signature=da2fe1e11248e1b08ffa311f62daf1cb6d912e7241029039290c0798d44316c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LGYBV6Q%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQD0DkuLcmR%2FRuuRRpvbHP%2Bfv7a2%2BUN57lAKvWVz66mSGAIgPMAL3cJqKtdQ2sPy6psNb0x%2F5FrwP%2B%2FPLSntzOIa%2BWUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVpb8M7QJDvg4iOAyrcA5oeoqvMxAcfgfiCxrtZWhdU6Fwn8wsD2dKxzgm%2BKh5WeGiKD7RFF5MFxaIZ5XSEztxcXeBfDG8ExWQut3hZyOttx6EvE3Vbp7QXYzT3sJ4MpyQyeGaA%2Bs0y6emmyFKMQ%2FevX9q5d7X82X%2BOUSxjrYnks%2FmyZ1tQHW65xDjlV5bxtbxOd4wb6RiW46CQMys3IEzHv2NFBTPRO%2BPN0ZHuKIYIzMfHFQhwB7SdPDcITl%2FqR8UXujGXmydw8fMSNAH%2BK57tERXF8BlwM0o1IXbyBA%2Blhd9tAdlU7iy3BiqXhLgPxcwPailtZW6JV9H2SPqUHj6KqCgPPhktIYJmPc33Tw22NjeJZ4Vk4HFRKDXggfQfSFVlZvLH7UsUDDHh1jH8v7C80ejjcpSqybVLcksy2P3yPb98t4fUkxCFUKC2JYORuX0N8uqdLrKSbkVsD3fH3i2za%2F47ybE%2FGesokZJpcHFZlacMTUbJFZZlviKyC4dmb3WkD1wYXQosN7%2FAm3wKV%2Fj3N2uwjzI%2FdiECMKHp6b%2BL9Vpz8gxjG%2Fb%2BrZpLHoMNzOftTYDXbkvyszh%2Bkx2j7MF%2BfmNwTUOXrTtGW3wru2pKuu6x0%2Fc33wMaMjfZ7YYY9g4HUQdCTRBxwLtEMMjX4tEGOqUBz1eDfvL2ZP7U2gVoksIWeS%2B%2F8tgDjqn4b0CjbbX3uh%2BFyYUmkLJzwVOHL8ltITSatj8gf5LtCKRx260olumx1N8XZBXa0EiQuFkocfSSNa0izBtXB7%2BUDuLriI3HT7%2FwLvE1Zlya6dfHhYxQjtU2z4C4r7GFkmaEYOt4Auch7mf5yy4SIYQxD%2BO44wvaYSAM1cFve1J9a9k7sKeK4hMyjKODOK4h&X-Amz-Signature=969e53430cfdb5886d3a73467f446489c634fd008b1972726941322144e1d05e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LGYBV6Q%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQD0DkuLcmR%2FRuuRRpvbHP%2Bfv7a2%2BUN57lAKvWVz66mSGAIgPMAL3cJqKtdQ2sPy6psNb0x%2F5FrwP%2B%2FPLSntzOIa%2BWUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVpb8M7QJDvg4iOAyrcA5oeoqvMxAcfgfiCxrtZWhdU6Fwn8wsD2dKxzgm%2BKh5WeGiKD7RFF5MFxaIZ5XSEztxcXeBfDG8ExWQut3hZyOttx6EvE3Vbp7QXYzT3sJ4MpyQyeGaA%2Bs0y6emmyFKMQ%2FevX9q5d7X82X%2BOUSxjrYnks%2FmyZ1tQHW65xDjlV5bxtbxOd4wb6RiW46CQMys3IEzHv2NFBTPRO%2BPN0ZHuKIYIzMfHFQhwB7SdPDcITl%2FqR8UXujGXmydw8fMSNAH%2BK57tERXF8BlwM0o1IXbyBA%2Blhd9tAdlU7iy3BiqXhLgPxcwPailtZW6JV9H2SPqUHj6KqCgPPhktIYJmPc33Tw22NjeJZ4Vk4HFRKDXggfQfSFVlZvLH7UsUDDHh1jH8v7C80ejjcpSqybVLcksy2P3yPb98t4fUkxCFUKC2JYORuX0N8uqdLrKSbkVsD3fH3i2za%2F47ybE%2FGesokZJpcHFZlacMTUbJFZZlviKyC4dmb3WkD1wYXQosN7%2FAm3wKV%2Fj3N2uwjzI%2FdiECMKHp6b%2BL9Vpz8gxjG%2Fb%2BrZpLHoMNzOftTYDXbkvyszh%2Bkx2j7MF%2BfmNwTUOXrTtGW3wru2pKuu6x0%2Fc33wMaMjfZ7YYY9g4HUQdCTRBxwLtEMMjX4tEGOqUBz1eDfvL2ZP7U2gVoksIWeS%2B%2F8tgDjqn4b0CjbbX3uh%2BFyYUmkLJzwVOHL8ltITSatj8gf5LtCKRx260olumx1N8XZBXa0EiQuFkocfSSNa0izBtXB7%2BUDuLriI3HT7%2FwLvE1Zlya6dfHhYxQjtU2z4C4r7GFkmaEYOt4Auch7mf5yy4SIYQxD%2BO44wvaYSAM1cFve1J9a9k7sKeK4hMyjKODOK4h&X-Amz-Signature=31641a46d576d459526947f71cd2e69fbe500a8f5465226e64dc58cd0abc597e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LGYBV6Q%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQD0DkuLcmR%2FRuuRRpvbHP%2Bfv7a2%2BUN57lAKvWVz66mSGAIgPMAL3cJqKtdQ2sPy6psNb0x%2F5FrwP%2B%2FPLSntzOIa%2BWUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVpb8M7QJDvg4iOAyrcA5oeoqvMxAcfgfiCxrtZWhdU6Fwn8wsD2dKxzgm%2BKh5WeGiKD7RFF5MFxaIZ5XSEztxcXeBfDG8ExWQut3hZyOttx6EvE3Vbp7QXYzT3sJ4MpyQyeGaA%2Bs0y6emmyFKMQ%2FevX9q5d7X82X%2BOUSxjrYnks%2FmyZ1tQHW65xDjlV5bxtbxOd4wb6RiW46CQMys3IEzHv2NFBTPRO%2BPN0ZHuKIYIzMfHFQhwB7SdPDcITl%2FqR8UXujGXmydw8fMSNAH%2BK57tERXF8BlwM0o1IXbyBA%2Blhd9tAdlU7iy3BiqXhLgPxcwPailtZW6JV9H2SPqUHj6KqCgPPhktIYJmPc33Tw22NjeJZ4Vk4HFRKDXggfQfSFVlZvLH7UsUDDHh1jH8v7C80ejjcpSqybVLcksy2P3yPb98t4fUkxCFUKC2JYORuX0N8uqdLrKSbkVsD3fH3i2za%2F47ybE%2FGesokZJpcHFZlacMTUbJFZZlviKyC4dmb3WkD1wYXQosN7%2FAm3wKV%2Fj3N2uwjzI%2FdiECMKHp6b%2BL9Vpz8gxjG%2Fb%2BrZpLHoMNzOftTYDXbkvyszh%2Bkx2j7MF%2BfmNwTUOXrTtGW3wru2pKuu6x0%2Fc33wMaMjfZ7YYY9g4HUQdCTRBxwLtEMMjX4tEGOqUBz1eDfvL2ZP7U2gVoksIWeS%2B%2F8tgDjqn4b0CjbbX3uh%2BFyYUmkLJzwVOHL8ltITSatj8gf5LtCKRx260olumx1N8XZBXa0EiQuFkocfSSNa0izBtXB7%2BUDuLriI3HT7%2FwLvE1Zlya6dfHhYxQjtU2z4C4r7GFkmaEYOt4Auch7mf5yy4SIYQxD%2BO44wvaYSAM1cFve1J9a9k7sKeK4hMyjKODOK4h&X-Amz-Signature=7d9a98306cfed3f856fd0abf64459595d4afcce15c4f505158ee806874b8ec8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LGYBV6Q%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQD0DkuLcmR%2FRuuRRpvbHP%2Bfv7a2%2BUN57lAKvWVz66mSGAIgPMAL3cJqKtdQ2sPy6psNb0x%2F5FrwP%2B%2FPLSntzOIa%2BWUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVpb8M7QJDvg4iOAyrcA5oeoqvMxAcfgfiCxrtZWhdU6Fwn8wsD2dKxzgm%2BKh5WeGiKD7RFF5MFxaIZ5XSEztxcXeBfDG8ExWQut3hZyOttx6EvE3Vbp7QXYzT3sJ4MpyQyeGaA%2Bs0y6emmyFKMQ%2FevX9q5d7X82X%2BOUSxjrYnks%2FmyZ1tQHW65xDjlV5bxtbxOd4wb6RiW46CQMys3IEzHv2NFBTPRO%2BPN0ZHuKIYIzMfHFQhwB7SdPDcITl%2FqR8UXujGXmydw8fMSNAH%2BK57tERXF8BlwM0o1IXbyBA%2Blhd9tAdlU7iy3BiqXhLgPxcwPailtZW6JV9H2SPqUHj6KqCgPPhktIYJmPc33Tw22NjeJZ4Vk4HFRKDXggfQfSFVlZvLH7UsUDDHh1jH8v7C80ejjcpSqybVLcksy2P3yPb98t4fUkxCFUKC2JYORuX0N8uqdLrKSbkVsD3fH3i2za%2F47ybE%2FGesokZJpcHFZlacMTUbJFZZlviKyC4dmb3WkD1wYXQosN7%2FAm3wKV%2Fj3N2uwjzI%2FdiECMKHp6b%2BL9Vpz8gxjG%2Fb%2BrZpLHoMNzOftTYDXbkvyszh%2Bkx2j7MF%2BfmNwTUOXrTtGW3wru2pKuu6x0%2Fc33wMaMjfZ7YYY9g4HUQdCTRBxwLtEMMjX4tEGOqUBz1eDfvL2ZP7U2gVoksIWeS%2B%2F8tgDjqn4b0CjbbX3uh%2BFyYUmkLJzwVOHL8ltITSatj8gf5LtCKRx260olumx1N8XZBXa0EiQuFkocfSSNa0izBtXB7%2BUDuLriI3HT7%2FwLvE1Zlya6dfHhYxQjtU2z4C4r7GFkmaEYOt4Auch7mf5yy4SIYQxD%2BO44wvaYSAM1cFve1J9a9k7sKeK4hMyjKODOK4h&X-Amz-Signature=2b0553dd449788db22b5d38187baf92901b9447f988e365771d1bfe9483f3115&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LGYBV6Q%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQD0DkuLcmR%2FRuuRRpvbHP%2Bfv7a2%2BUN57lAKvWVz66mSGAIgPMAL3cJqKtdQ2sPy6psNb0x%2F5FrwP%2B%2FPLSntzOIa%2BWUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVpb8M7QJDvg4iOAyrcA5oeoqvMxAcfgfiCxrtZWhdU6Fwn8wsD2dKxzgm%2BKh5WeGiKD7RFF5MFxaIZ5XSEztxcXeBfDG8ExWQut3hZyOttx6EvE3Vbp7QXYzT3sJ4MpyQyeGaA%2Bs0y6emmyFKMQ%2FevX9q5d7X82X%2BOUSxjrYnks%2FmyZ1tQHW65xDjlV5bxtbxOd4wb6RiW46CQMys3IEzHv2NFBTPRO%2BPN0ZHuKIYIzMfHFQhwB7SdPDcITl%2FqR8UXujGXmydw8fMSNAH%2BK57tERXF8BlwM0o1IXbyBA%2Blhd9tAdlU7iy3BiqXhLgPxcwPailtZW6JV9H2SPqUHj6KqCgPPhktIYJmPc33Tw22NjeJZ4Vk4HFRKDXggfQfSFVlZvLH7UsUDDHh1jH8v7C80ejjcpSqybVLcksy2P3yPb98t4fUkxCFUKC2JYORuX0N8uqdLrKSbkVsD3fH3i2za%2F47ybE%2FGesokZJpcHFZlacMTUbJFZZlviKyC4dmb3WkD1wYXQosN7%2FAm3wKV%2Fj3N2uwjzI%2FdiECMKHp6b%2BL9Vpz8gxjG%2Fb%2BrZpLHoMNzOftTYDXbkvyszh%2Bkx2j7MF%2BfmNwTUOXrTtGW3wru2pKuu6x0%2Fc33wMaMjfZ7YYY9g4HUQdCTRBxwLtEMMjX4tEGOqUBz1eDfvL2ZP7U2gVoksIWeS%2B%2F8tgDjqn4b0CjbbX3uh%2BFyYUmkLJzwVOHL8ltITSatj8gf5LtCKRx260olumx1N8XZBXa0EiQuFkocfSSNa0izBtXB7%2BUDuLriI3HT7%2FwLvE1Zlya6dfHhYxQjtU2z4C4r7GFkmaEYOt4Auch7mf5yy4SIYQxD%2BO44wvaYSAM1cFve1J9a9k7sKeK4hMyjKODOK4h&X-Amz-Signature=f35c42df3faef37f37855bdd625432af9b25e68cbb74133b7ddd6c69de357561&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LGYBV6Q%2F20260622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260622T041715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQD0DkuLcmR%2FRuuRRpvbHP%2Bfv7a2%2BUN57lAKvWVz66mSGAIgPMAL3cJqKtdQ2sPy6psNb0x%2F5FrwP%2B%2FPLSntzOIa%2BWUqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOVpb8M7QJDvg4iOAyrcA5oeoqvMxAcfgfiCxrtZWhdU6Fwn8wsD2dKxzgm%2BKh5WeGiKD7RFF5MFxaIZ5XSEztxcXeBfDG8ExWQut3hZyOttx6EvE3Vbp7QXYzT3sJ4MpyQyeGaA%2Bs0y6emmyFKMQ%2FevX9q5d7X82X%2BOUSxjrYnks%2FmyZ1tQHW65xDjlV5bxtbxOd4wb6RiW46CQMys3IEzHv2NFBTPRO%2BPN0ZHuKIYIzMfHFQhwB7SdPDcITl%2FqR8UXujGXmydw8fMSNAH%2BK57tERXF8BlwM0o1IXbyBA%2Blhd9tAdlU7iy3BiqXhLgPxcwPailtZW6JV9H2SPqUHj6KqCgPPhktIYJmPc33Tw22NjeJZ4Vk4HFRKDXggfQfSFVlZvLH7UsUDDHh1jH8v7C80ejjcpSqybVLcksy2P3yPb98t4fUkxCFUKC2JYORuX0N8uqdLrKSbkVsD3fH3i2za%2F47ybE%2FGesokZJpcHFZlacMTUbJFZZlviKyC4dmb3WkD1wYXQosN7%2FAm3wKV%2Fj3N2uwjzI%2FdiECMKHp6b%2BL9Vpz8gxjG%2Fb%2BrZpLHoMNzOftTYDXbkvyszh%2Bkx2j7MF%2BfmNwTUOXrTtGW3wru2pKuu6x0%2Fc33wMaMjfZ7YYY9g4HUQdCTRBxwLtEMMjX4tEGOqUBz1eDfvL2ZP7U2gVoksIWeS%2B%2F8tgDjqn4b0CjbbX3uh%2BFyYUmkLJzwVOHL8ltITSatj8gf5LtCKRx260olumx1N8XZBXa0EiQuFkocfSSNa0izBtXB7%2BUDuLriI3HT7%2FwLvE1Zlya6dfHhYxQjtU2z4C4r7GFkmaEYOt4Auch7mf5yy4SIYQxD%2BO44wvaYSAM1cFve1J9a9k7sKeK4hMyjKODOK4h&X-Amz-Signature=b3afe500f2d93b7bb5fa2cd044302c992d55df71d0ad9a83b32612ff773b806e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
