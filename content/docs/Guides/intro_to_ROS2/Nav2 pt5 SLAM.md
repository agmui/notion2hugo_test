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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VZUE67U%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDRIn33yWivNZEqu8P%2FdgrLKxhOib1N4S6MUD0zFKafCAiBQYAGz2QUNT4DDPiP9ry3qhNNgNMQt5gQAo0HPjXlYBSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMj6SoWUroJ7suN%2FR1KtwDQ3elyMeaSUf%2BxN2DsilcLSXiOxFW9aSFxR2OpJkNxVP4bh%2FwdmHsegJUtgGu4BoMHIRlhop%2FJ%2FOSEdopt7J0PG5C%2Flpw4qYLyztxEIiuO4iRoG6L16Z3UiKGhWSaWr4KS026Jz6tESs0XOn2iqGFp6iDeeq3zFYCbzXCk0Gi71PImKI3kD532F%2FyHjgKwo87YsNpKCE5Qb3fa5qQ%2BWi5yBYKuU64so16CRmFsCAyP%2FJw%2B%2B0kvpPa3Zl9ypqi%2BFajsJRY533XHv4N%2BfFtg1nJFf02BC6KbuQ60E9LJ%2BmD0y777SE6rbWglC2jM%2BhLoXEZzVvdZ4RMb38od6GKYaZ4dGajZDt5bolElhUgB2oPMnTuPc41IRK8W3ZjuTa66aShjpOdKPjEWMKE%2BITxPg7DN7rcUhlsljtZRmchvWE0Oy5FKAxfYuSCeXCpa9ygku%2BhWyy085G34GMs5mfoy9zS8A10nUseaQdL1195sCwFJwuKCqPJCPy8NNGlUrI7qon%2F32mRg%2F9xDh6isY2h2mlZ%2BwbaerBGkfh5U7kVF3CMPouskB453qGibJuIuVpfHLISoDizzD8DPZRY%2BlzbbAD2gKR2YzL0GnxeEE9AmqWA49hCLYHsCMM6E7RccW8wh9j%2BxAY6pgFtMXxqTdNckYI1pNYVStgq7p9hd4GY2wX8gob%2BXqCC0v1jMx14P1oZm0T6hlgsnnC8Zkhhk95FTtuvsDMmQSVXfNGsehIy1tBOGWzTO%2Fwuz%2F%2BmpCz%2FDbdv2ZYeXcf%2FusuH%2F0uEPNDQNTaTMWYSjcWOjaFD7TTHKXE19MBps0qNybmwltBAz9Q2N%2FDiZKVbxOYeXuAlg%2F9nn83Ki4X2mR%2FOvpaHes%2Fa&X-Amz-Signature=889d18f5df592f6536d0e2c57e520375a717ffaba3b8b68648c11aefc25bc3ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VZUE67U%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDRIn33yWivNZEqu8P%2FdgrLKxhOib1N4S6MUD0zFKafCAiBQYAGz2QUNT4DDPiP9ry3qhNNgNMQt5gQAo0HPjXlYBSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMj6SoWUroJ7suN%2FR1KtwDQ3elyMeaSUf%2BxN2DsilcLSXiOxFW9aSFxR2OpJkNxVP4bh%2FwdmHsegJUtgGu4BoMHIRlhop%2FJ%2FOSEdopt7J0PG5C%2Flpw4qYLyztxEIiuO4iRoG6L16Z3UiKGhWSaWr4KS026Jz6tESs0XOn2iqGFp6iDeeq3zFYCbzXCk0Gi71PImKI3kD532F%2FyHjgKwo87YsNpKCE5Qb3fa5qQ%2BWi5yBYKuU64so16CRmFsCAyP%2FJw%2B%2B0kvpPa3Zl9ypqi%2BFajsJRY533XHv4N%2BfFtg1nJFf02BC6KbuQ60E9LJ%2BmD0y777SE6rbWglC2jM%2BhLoXEZzVvdZ4RMb38od6GKYaZ4dGajZDt5bolElhUgB2oPMnTuPc41IRK8W3ZjuTa66aShjpOdKPjEWMKE%2BITxPg7DN7rcUhlsljtZRmchvWE0Oy5FKAxfYuSCeXCpa9ygku%2BhWyy085G34GMs5mfoy9zS8A10nUseaQdL1195sCwFJwuKCqPJCPy8NNGlUrI7qon%2F32mRg%2F9xDh6isY2h2mlZ%2BwbaerBGkfh5U7kVF3CMPouskB453qGibJuIuVpfHLISoDizzD8DPZRY%2BlzbbAD2gKR2YzL0GnxeEE9AmqWA49hCLYHsCMM6E7RccW8wh9j%2BxAY6pgFtMXxqTdNckYI1pNYVStgq7p9hd4GY2wX8gob%2BXqCC0v1jMx14P1oZm0T6hlgsnnC8Zkhhk95FTtuvsDMmQSVXfNGsehIy1tBOGWzTO%2Fwuz%2F%2BmpCz%2FDbdv2ZYeXcf%2FusuH%2F0uEPNDQNTaTMWYSjcWOjaFD7TTHKXE19MBps0qNybmwltBAz9Q2N%2FDiZKVbxOYeXuAlg%2F9nn83Ki4X2mR%2FOvpaHes%2Fa&X-Amz-Signature=01f03fd01dfdbf7de161ae96e2fa2691124c8539e29286298ce8617b2b4d6c2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VZUE67U%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDRIn33yWivNZEqu8P%2FdgrLKxhOib1N4S6MUD0zFKafCAiBQYAGz2QUNT4DDPiP9ry3qhNNgNMQt5gQAo0HPjXlYBSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMj6SoWUroJ7suN%2FR1KtwDQ3elyMeaSUf%2BxN2DsilcLSXiOxFW9aSFxR2OpJkNxVP4bh%2FwdmHsegJUtgGu4BoMHIRlhop%2FJ%2FOSEdopt7J0PG5C%2Flpw4qYLyztxEIiuO4iRoG6L16Z3UiKGhWSaWr4KS026Jz6tESs0XOn2iqGFp6iDeeq3zFYCbzXCk0Gi71PImKI3kD532F%2FyHjgKwo87YsNpKCE5Qb3fa5qQ%2BWi5yBYKuU64so16CRmFsCAyP%2FJw%2B%2B0kvpPa3Zl9ypqi%2BFajsJRY533XHv4N%2BfFtg1nJFf02BC6KbuQ60E9LJ%2BmD0y777SE6rbWglC2jM%2BhLoXEZzVvdZ4RMb38od6GKYaZ4dGajZDt5bolElhUgB2oPMnTuPc41IRK8W3ZjuTa66aShjpOdKPjEWMKE%2BITxPg7DN7rcUhlsljtZRmchvWE0Oy5FKAxfYuSCeXCpa9ygku%2BhWyy085G34GMs5mfoy9zS8A10nUseaQdL1195sCwFJwuKCqPJCPy8NNGlUrI7qon%2F32mRg%2F9xDh6isY2h2mlZ%2BwbaerBGkfh5U7kVF3CMPouskB453qGibJuIuVpfHLISoDizzD8DPZRY%2BlzbbAD2gKR2YzL0GnxeEE9AmqWA49hCLYHsCMM6E7RccW8wh9j%2BxAY6pgFtMXxqTdNckYI1pNYVStgq7p9hd4GY2wX8gob%2BXqCC0v1jMx14P1oZm0T6hlgsnnC8Zkhhk95FTtuvsDMmQSVXfNGsehIy1tBOGWzTO%2Fwuz%2F%2BmpCz%2FDbdv2ZYeXcf%2FusuH%2F0uEPNDQNTaTMWYSjcWOjaFD7TTHKXE19MBps0qNybmwltBAz9Q2N%2FDiZKVbxOYeXuAlg%2F9nn83Ki4X2mR%2FOvpaHes%2Fa&X-Amz-Signature=fb573e25e4c7db433778dba8fe6ac5ffaa1425a1c40aec8d2aba1c6711f65c5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VZUE67U%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDRIn33yWivNZEqu8P%2FdgrLKxhOib1N4S6MUD0zFKafCAiBQYAGz2QUNT4DDPiP9ry3qhNNgNMQt5gQAo0HPjXlYBSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMj6SoWUroJ7suN%2FR1KtwDQ3elyMeaSUf%2BxN2DsilcLSXiOxFW9aSFxR2OpJkNxVP4bh%2FwdmHsegJUtgGu4BoMHIRlhop%2FJ%2FOSEdopt7J0PG5C%2Flpw4qYLyztxEIiuO4iRoG6L16Z3UiKGhWSaWr4KS026Jz6tESs0XOn2iqGFp6iDeeq3zFYCbzXCk0Gi71PImKI3kD532F%2FyHjgKwo87YsNpKCE5Qb3fa5qQ%2BWi5yBYKuU64so16CRmFsCAyP%2FJw%2B%2B0kvpPa3Zl9ypqi%2BFajsJRY533XHv4N%2BfFtg1nJFf02BC6KbuQ60E9LJ%2BmD0y777SE6rbWglC2jM%2BhLoXEZzVvdZ4RMb38od6GKYaZ4dGajZDt5bolElhUgB2oPMnTuPc41IRK8W3ZjuTa66aShjpOdKPjEWMKE%2BITxPg7DN7rcUhlsljtZRmchvWE0Oy5FKAxfYuSCeXCpa9ygku%2BhWyy085G34GMs5mfoy9zS8A10nUseaQdL1195sCwFJwuKCqPJCPy8NNGlUrI7qon%2F32mRg%2F9xDh6isY2h2mlZ%2BwbaerBGkfh5U7kVF3CMPouskB453qGibJuIuVpfHLISoDizzD8DPZRY%2BlzbbAD2gKR2YzL0GnxeEE9AmqWA49hCLYHsCMM6E7RccW8wh9j%2BxAY6pgFtMXxqTdNckYI1pNYVStgq7p9hd4GY2wX8gob%2BXqCC0v1jMx14P1oZm0T6hlgsnnC8Zkhhk95FTtuvsDMmQSVXfNGsehIy1tBOGWzTO%2Fwuz%2F%2BmpCz%2FDbdv2ZYeXcf%2FusuH%2F0uEPNDQNTaTMWYSjcWOjaFD7TTHKXE19MBps0qNybmwltBAz9Q2N%2FDiZKVbxOYeXuAlg%2F9nn83Ki4X2mR%2FOvpaHes%2Fa&X-Amz-Signature=95dc5b64e635a958bd38fa9c356e0f44bf8fd717e420a10f27ed7eac74e86a67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VZUE67U%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDRIn33yWivNZEqu8P%2FdgrLKxhOib1N4S6MUD0zFKafCAiBQYAGz2QUNT4DDPiP9ry3qhNNgNMQt5gQAo0HPjXlYBSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMj6SoWUroJ7suN%2FR1KtwDQ3elyMeaSUf%2BxN2DsilcLSXiOxFW9aSFxR2OpJkNxVP4bh%2FwdmHsegJUtgGu4BoMHIRlhop%2FJ%2FOSEdopt7J0PG5C%2Flpw4qYLyztxEIiuO4iRoG6L16Z3UiKGhWSaWr4KS026Jz6tESs0XOn2iqGFp6iDeeq3zFYCbzXCk0Gi71PImKI3kD532F%2FyHjgKwo87YsNpKCE5Qb3fa5qQ%2BWi5yBYKuU64so16CRmFsCAyP%2FJw%2B%2B0kvpPa3Zl9ypqi%2BFajsJRY533XHv4N%2BfFtg1nJFf02BC6KbuQ60E9LJ%2BmD0y777SE6rbWglC2jM%2BhLoXEZzVvdZ4RMb38od6GKYaZ4dGajZDt5bolElhUgB2oPMnTuPc41IRK8W3ZjuTa66aShjpOdKPjEWMKE%2BITxPg7DN7rcUhlsljtZRmchvWE0Oy5FKAxfYuSCeXCpa9ygku%2BhWyy085G34GMs5mfoy9zS8A10nUseaQdL1195sCwFJwuKCqPJCPy8NNGlUrI7qon%2F32mRg%2F9xDh6isY2h2mlZ%2BwbaerBGkfh5U7kVF3CMPouskB453qGibJuIuVpfHLISoDizzD8DPZRY%2BlzbbAD2gKR2YzL0GnxeEE9AmqWA49hCLYHsCMM6E7RccW8wh9j%2BxAY6pgFtMXxqTdNckYI1pNYVStgq7p9hd4GY2wX8gob%2BXqCC0v1jMx14P1oZm0T6hlgsnnC8Zkhhk95FTtuvsDMmQSVXfNGsehIy1tBOGWzTO%2Fwuz%2F%2BmpCz%2FDbdv2ZYeXcf%2FusuH%2F0uEPNDQNTaTMWYSjcWOjaFD7TTHKXE19MBps0qNybmwltBAz9Q2N%2FDiZKVbxOYeXuAlg%2F9nn83Ki4X2mR%2FOvpaHes%2Fa&X-Amz-Signature=dc9313f3802b367b2996d8e6e511e57c7354808dcc088f93270a4d579c3cf17f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VZUE67U%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDRIn33yWivNZEqu8P%2FdgrLKxhOib1N4S6MUD0zFKafCAiBQYAGz2QUNT4DDPiP9ry3qhNNgNMQt5gQAo0HPjXlYBSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMj6SoWUroJ7suN%2FR1KtwDQ3elyMeaSUf%2BxN2DsilcLSXiOxFW9aSFxR2OpJkNxVP4bh%2FwdmHsegJUtgGu4BoMHIRlhop%2FJ%2FOSEdopt7J0PG5C%2Flpw4qYLyztxEIiuO4iRoG6L16Z3UiKGhWSaWr4KS026Jz6tESs0XOn2iqGFp6iDeeq3zFYCbzXCk0Gi71PImKI3kD532F%2FyHjgKwo87YsNpKCE5Qb3fa5qQ%2BWi5yBYKuU64so16CRmFsCAyP%2FJw%2B%2B0kvpPa3Zl9ypqi%2BFajsJRY533XHv4N%2BfFtg1nJFf02BC6KbuQ60E9LJ%2BmD0y777SE6rbWglC2jM%2BhLoXEZzVvdZ4RMb38od6GKYaZ4dGajZDt5bolElhUgB2oPMnTuPc41IRK8W3ZjuTa66aShjpOdKPjEWMKE%2BITxPg7DN7rcUhlsljtZRmchvWE0Oy5FKAxfYuSCeXCpa9ygku%2BhWyy085G34GMs5mfoy9zS8A10nUseaQdL1195sCwFJwuKCqPJCPy8NNGlUrI7qon%2F32mRg%2F9xDh6isY2h2mlZ%2BwbaerBGkfh5U7kVF3CMPouskB453qGibJuIuVpfHLISoDizzD8DPZRY%2BlzbbAD2gKR2YzL0GnxeEE9AmqWA49hCLYHsCMM6E7RccW8wh9j%2BxAY6pgFtMXxqTdNckYI1pNYVStgq7p9hd4GY2wX8gob%2BXqCC0v1jMx14P1oZm0T6hlgsnnC8Zkhhk95FTtuvsDMmQSVXfNGsehIy1tBOGWzTO%2Fwuz%2F%2BmpCz%2FDbdv2ZYeXcf%2FusuH%2F0uEPNDQNTaTMWYSjcWOjaFD7TTHKXE19MBps0qNybmwltBAz9Q2N%2FDiZKVbxOYeXuAlg%2F9nn83Ki4X2mR%2FOvpaHes%2Fa&X-Amz-Signature=80a2c657f7189557e5e206209815081e43f967a66b7d39908a070b19f92db48a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VZUE67U%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDRIn33yWivNZEqu8P%2FdgrLKxhOib1N4S6MUD0zFKafCAiBQYAGz2QUNT4DDPiP9ry3qhNNgNMQt5gQAo0HPjXlYBSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMj6SoWUroJ7suN%2FR1KtwDQ3elyMeaSUf%2BxN2DsilcLSXiOxFW9aSFxR2OpJkNxVP4bh%2FwdmHsegJUtgGu4BoMHIRlhop%2FJ%2FOSEdopt7J0PG5C%2Flpw4qYLyztxEIiuO4iRoG6L16Z3UiKGhWSaWr4KS026Jz6tESs0XOn2iqGFp6iDeeq3zFYCbzXCk0Gi71PImKI3kD532F%2FyHjgKwo87YsNpKCE5Qb3fa5qQ%2BWi5yBYKuU64so16CRmFsCAyP%2FJw%2B%2B0kvpPa3Zl9ypqi%2BFajsJRY533XHv4N%2BfFtg1nJFf02BC6KbuQ60E9LJ%2BmD0y777SE6rbWglC2jM%2BhLoXEZzVvdZ4RMb38od6GKYaZ4dGajZDt5bolElhUgB2oPMnTuPc41IRK8W3ZjuTa66aShjpOdKPjEWMKE%2BITxPg7DN7rcUhlsljtZRmchvWE0Oy5FKAxfYuSCeXCpa9ygku%2BhWyy085G34GMs5mfoy9zS8A10nUseaQdL1195sCwFJwuKCqPJCPy8NNGlUrI7qon%2F32mRg%2F9xDh6isY2h2mlZ%2BwbaerBGkfh5U7kVF3CMPouskB453qGibJuIuVpfHLISoDizzD8DPZRY%2BlzbbAD2gKR2YzL0GnxeEE9AmqWA49hCLYHsCMM6E7RccW8wh9j%2BxAY6pgFtMXxqTdNckYI1pNYVStgq7p9hd4GY2wX8gob%2BXqCC0v1jMx14P1oZm0T6hlgsnnC8Zkhhk95FTtuvsDMmQSVXfNGsehIy1tBOGWzTO%2Fwuz%2F%2BmpCz%2FDbdv2ZYeXcf%2FusuH%2F0uEPNDQNTaTMWYSjcWOjaFD7TTHKXE19MBps0qNybmwltBAz9Q2N%2FDiZKVbxOYeXuAlg%2F9nn83Ki4X2mR%2FOvpaHes%2Fa&X-Amz-Signature=e77fa6705a79dae4991f7c336650ec2312d482cd45e3aa53a57d650a26e0f207&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VZUE67U%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDRIn33yWivNZEqu8P%2FdgrLKxhOib1N4S6MUD0zFKafCAiBQYAGz2QUNT4DDPiP9ry3qhNNgNMQt5gQAo0HPjXlYBSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMj6SoWUroJ7suN%2FR1KtwDQ3elyMeaSUf%2BxN2DsilcLSXiOxFW9aSFxR2OpJkNxVP4bh%2FwdmHsegJUtgGu4BoMHIRlhop%2FJ%2FOSEdopt7J0PG5C%2Flpw4qYLyztxEIiuO4iRoG6L16Z3UiKGhWSaWr4KS026Jz6tESs0XOn2iqGFp6iDeeq3zFYCbzXCk0Gi71PImKI3kD532F%2FyHjgKwo87YsNpKCE5Qb3fa5qQ%2BWi5yBYKuU64so16CRmFsCAyP%2FJw%2B%2B0kvpPa3Zl9ypqi%2BFajsJRY533XHv4N%2BfFtg1nJFf02BC6KbuQ60E9LJ%2BmD0y777SE6rbWglC2jM%2BhLoXEZzVvdZ4RMb38od6GKYaZ4dGajZDt5bolElhUgB2oPMnTuPc41IRK8W3ZjuTa66aShjpOdKPjEWMKE%2BITxPg7DN7rcUhlsljtZRmchvWE0Oy5FKAxfYuSCeXCpa9ygku%2BhWyy085G34GMs5mfoy9zS8A10nUseaQdL1195sCwFJwuKCqPJCPy8NNGlUrI7qon%2F32mRg%2F9xDh6isY2h2mlZ%2BwbaerBGkfh5U7kVF3CMPouskB453qGibJuIuVpfHLISoDizzD8DPZRY%2BlzbbAD2gKR2YzL0GnxeEE9AmqWA49hCLYHsCMM6E7RccW8wh9j%2BxAY6pgFtMXxqTdNckYI1pNYVStgq7p9hd4GY2wX8gob%2BXqCC0v1jMx14P1oZm0T6hlgsnnC8Zkhhk95FTtuvsDMmQSVXfNGsehIy1tBOGWzTO%2Fwuz%2F%2BmpCz%2FDbdv2ZYeXcf%2FusuH%2F0uEPNDQNTaTMWYSjcWOjaFD7TTHKXE19MBps0qNybmwltBAz9Q2N%2FDiZKVbxOYeXuAlg%2F9nn83Ki4X2mR%2FOvpaHes%2Fa&X-Amz-Signature=d6da45b6b022a26c38e653d70fd2cc402c15a0eeeb40e82c945e69f1bd42a29f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VZUE67U%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDRIn33yWivNZEqu8P%2FdgrLKxhOib1N4S6MUD0zFKafCAiBQYAGz2QUNT4DDPiP9ry3qhNNgNMQt5gQAo0HPjXlYBSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMj6SoWUroJ7suN%2FR1KtwDQ3elyMeaSUf%2BxN2DsilcLSXiOxFW9aSFxR2OpJkNxVP4bh%2FwdmHsegJUtgGu4BoMHIRlhop%2FJ%2FOSEdopt7J0PG5C%2Flpw4qYLyztxEIiuO4iRoG6L16Z3UiKGhWSaWr4KS026Jz6tESs0XOn2iqGFp6iDeeq3zFYCbzXCk0Gi71PImKI3kD532F%2FyHjgKwo87YsNpKCE5Qb3fa5qQ%2BWi5yBYKuU64so16CRmFsCAyP%2FJw%2B%2B0kvpPa3Zl9ypqi%2BFajsJRY533XHv4N%2BfFtg1nJFf02BC6KbuQ60E9LJ%2BmD0y777SE6rbWglC2jM%2BhLoXEZzVvdZ4RMb38od6GKYaZ4dGajZDt5bolElhUgB2oPMnTuPc41IRK8W3ZjuTa66aShjpOdKPjEWMKE%2BITxPg7DN7rcUhlsljtZRmchvWE0Oy5FKAxfYuSCeXCpa9ygku%2BhWyy085G34GMs5mfoy9zS8A10nUseaQdL1195sCwFJwuKCqPJCPy8NNGlUrI7qon%2F32mRg%2F9xDh6isY2h2mlZ%2BwbaerBGkfh5U7kVF3CMPouskB453qGibJuIuVpfHLISoDizzD8DPZRY%2BlzbbAD2gKR2YzL0GnxeEE9AmqWA49hCLYHsCMM6E7RccW8wh9j%2BxAY6pgFtMXxqTdNckYI1pNYVStgq7p9hd4GY2wX8gob%2BXqCC0v1jMx14P1oZm0T6hlgsnnC8Zkhhk95FTtuvsDMmQSVXfNGsehIy1tBOGWzTO%2Fwuz%2F%2BmpCz%2FDbdv2ZYeXcf%2FusuH%2F0uEPNDQNTaTMWYSjcWOjaFD7TTHKXE19MBps0qNybmwltBAz9Q2N%2FDiZKVbxOYeXuAlg%2F9nn83Ki4X2mR%2FOvpaHes%2Fa&X-Amz-Signature=df07cf6b6c1948eebe458034433c7dcf50b990ceb1f809a1bf95046bfc3e1f5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VZUE67U%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDRIn33yWivNZEqu8P%2FdgrLKxhOib1N4S6MUD0zFKafCAiBQYAGz2QUNT4DDPiP9ry3qhNNgNMQt5gQAo0HPjXlYBSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMj6SoWUroJ7suN%2FR1KtwDQ3elyMeaSUf%2BxN2DsilcLSXiOxFW9aSFxR2OpJkNxVP4bh%2FwdmHsegJUtgGu4BoMHIRlhop%2FJ%2FOSEdopt7J0PG5C%2Flpw4qYLyztxEIiuO4iRoG6L16Z3UiKGhWSaWr4KS026Jz6tESs0XOn2iqGFp6iDeeq3zFYCbzXCk0Gi71PImKI3kD532F%2FyHjgKwo87YsNpKCE5Qb3fa5qQ%2BWi5yBYKuU64so16CRmFsCAyP%2FJw%2B%2B0kvpPa3Zl9ypqi%2BFajsJRY533XHv4N%2BfFtg1nJFf02BC6KbuQ60E9LJ%2BmD0y777SE6rbWglC2jM%2BhLoXEZzVvdZ4RMb38od6GKYaZ4dGajZDt5bolElhUgB2oPMnTuPc41IRK8W3ZjuTa66aShjpOdKPjEWMKE%2BITxPg7DN7rcUhlsljtZRmchvWE0Oy5FKAxfYuSCeXCpa9ygku%2BhWyy085G34GMs5mfoy9zS8A10nUseaQdL1195sCwFJwuKCqPJCPy8NNGlUrI7qon%2F32mRg%2F9xDh6isY2h2mlZ%2BwbaerBGkfh5U7kVF3CMPouskB453qGibJuIuVpfHLISoDizzD8DPZRY%2BlzbbAD2gKR2YzL0GnxeEE9AmqWA49hCLYHsCMM6E7RccW8wh9j%2BxAY6pgFtMXxqTdNckYI1pNYVStgq7p9hd4GY2wX8gob%2BXqCC0v1jMx14P1oZm0T6hlgsnnC8Zkhhk95FTtuvsDMmQSVXfNGsehIy1tBOGWzTO%2Fwuz%2F%2BmpCz%2FDbdv2ZYeXcf%2FusuH%2F0uEPNDQNTaTMWYSjcWOjaFD7TTHKXE19MBps0qNybmwltBAz9Q2N%2FDiZKVbxOYeXuAlg%2F9nn83Ki4X2mR%2FOvpaHes%2Fa&X-Amz-Signature=ecc6e4e67a3afaa555504f1a00814522cef74a436e941c2107525d8db5c61419&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VZUE67U%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDRIn33yWivNZEqu8P%2FdgrLKxhOib1N4S6MUD0zFKafCAiBQYAGz2QUNT4DDPiP9ry3qhNNgNMQt5gQAo0HPjXlYBSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMj6SoWUroJ7suN%2FR1KtwDQ3elyMeaSUf%2BxN2DsilcLSXiOxFW9aSFxR2OpJkNxVP4bh%2FwdmHsegJUtgGu4BoMHIRlhop%2FJ%2FOSEdopt7J0PG5C%2Flpw4qYLyztxEIiuO4iRoG6L16Z3UiKGhWSaWr4KS026Jz6tESs0XOn2iqGFp6iDeeq3zFYCbzXCk0Gi71PImKI3kD532F%2FyHjgKwo87YsNpKCE5Qb3fa5qQ%2BWi5yBYKuU64so16CRmFsCAyP%2FJw%2B%2B0kvpPa3Zl9ypqi%2BFajsJRY533XHv4N%2BfFtg1nJFf02BC6KbuQ60E9LJ%2BmD0y777SE6rbWglC2jM%2BhLoXEZzVvdZ4RMb38od6GKYaZ4dGajZDt5bolElhUgB2oPMnTuPc41IRK8W3ZjuTa66aShjpOdKPjEWMKE%2BITxPg7DN7rcUhlsljtZRmchvWE0Oy5FKAxfYuSCeXCpa9ygku%2BhWyy085G34GMs5mfoy9zS8A10nUseaQdL1195sCwFJwuKCqPJCPy8NNGlUrI7qon%2F32mRg%2F9xDh6isY2h2mlZ%2BwbaerBGkfh5U7kVF3CMPouskB453qGibJuIuVpfHLISoDizzD8DPZRY%2BlzbbAD2gKR2YzL0GnxeEE9AmqWA49hCLYHsCMM6E7RccW8wh9j%2BxAY6pgFtMXxqTdNckYI1pNYVStgq7p9hd4GY2wX8gob%2BXqCC0v1jMx14P1oZm0T6hlgsnnC8Zkhhk95FTtuvsDMmQSVXfNGsehIy1tBOGWzTO%2Fwuz%2F%2BmpCz%2FDbdv2ZYeXcf%2FusuH%2F0uEPNDQNTaTMWYSjcWOjaFD7TTHKXE19MBps0qNybmwltBAz9Q2N%2FDiZKVbxOYeXuAlg%2F9nn83Ki4X2mR%2FOvpaHes%2Fa&X-Amz-Signature=a8b866904dcccb9d4eb3863397799c64d3e50b4f714f5be59fd5a34836589eb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VZUE67U%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDRIn33yWivNZEqu8P%2FdgrLKxhOib1N4S6MUD0zFKafCAiBQYAGz2QUNT4DDPiP9ry3qhNNgNMQt5gQAo0HPjXlYBSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMj6SoWUroJ7suN%2FR1KtwDQ3elyMeaSUf%2BxN2DsilcLSXiOxFW9aSFxR2OpJkNxVP4bh%2FwdmHsegJUtgGu4BoMHIRlhop%2FJ%2FOSEdopt7J0PG5C%2Flpw4qYLyztxEIiuO4iRoG6L16Z3UiKGhWSaWr4KS026Jz6tESs0XOn2iqGFp6iDeeq3zFYCbzXCk0Gi71PImKI3kD532F%2FyHjgKwo87YsNpKCE5Qb3fa5qQ%2BWi5yBYKuU64so16CRmFsCAyP%2FJw%2B%2B0kvpPa3Zl9ypqi%2BFajsJRY533XHv4N%2BfFtg1nJFf02BC6KbuQ60E9LJ%2BmD0y777SE6rbWglC2jM%2BhLoXEZzVvdZ4RMb38od6GKYaZ4dGajZDt5bolElhUgB2oPMnTuPc41IRK8W3ZjuTa66aShjpOdKPjEWMKE%2BITxPg7DN7rcUhlsljtZRmchvWE0Oy5FKAxfYuSCeXCpa9ygku%2BhWyy085G34GMs5mfoy9zS8A10nUseaQdL1195sCwFJwuKCqPJCPy8NNGlUrI7qon%2F32mRg%2F9xDh6isY2h2mlZ%2BwbaerBGkfh5U7kVF3CMPouskB453qGibJuIuVpfHLISoDizzD8DPZRY%2BlzbbAD2gKR2YzL0GnxeEE9AmqWA49hCLYHsCMM6E7RccW8wh9j%2BxAY6pgFtMXxqTdNckYI1pNYVStgq7p9hd4GY2wX8gob%2BXqCC0v1jMx14P1oZm0T6hlgsnnC8Zkhhk95FTtuvsDMmQSVXfNGsehIy1tBOGWzTO%2Fwuz%2F%2BmpCz%2FDbdv2ZYeXcf%2FusuH%2F0uEPNDQNTaTMWYSjcWOjaFD7TTHKXE19MBps0qNybmwltBAz9Q2N%2FDiZKVbxOYeXuAlg%2F9nn83Ki4X2mR%2FOvpaHes%2Fa&X-Amz-Signature=c796d3069d48e58f4c63d7f6a85c4122927f240d8ba808ee30b183a8677afb96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VZUE67U%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDRIn33yWivNZEqu8P%2FdgrLKxhOib1N4S6MUD0zFKafCAiBQYAGz2QUNT4DDPiP9ry3qhNNgNMQt5gQAo0HPjXlYBSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMj6SoWUroJ7suN%2FR1KtwDQ3elyMeaSUf%2BxN2DsilcLSXiOxFW9aSFxR2OpJkNxVP4bh%2FwdmHsegJUtgGu4BoMHIRlhop%2FJ%2FOSEdopt7J0PG5C%2Flpw4qYLyztxEIiuO4iRoG6L16Z3UiKGhWSaWr4KS026Jz6tESs0XOn2iqGFp6iDeeq3zFYCbzXCk0Gi71PImKI3kD532F%2FyHjgKwo87YsNpKCE5Qb3fa5qQ%2BWi5yBYKuU64so16CRmFsCAyP%2FJw%2B%2B0kvpPa3Zl9ypqi%2BFajsJRY533XHv4N%2BfFtg1nJFf02BC6KbuQ60E9LJ%2BmD0y777SE6rbWglC2jM%2BhLoXEZzVvdZ4RMb38od6GKYaZ4dGajZDt5bolElhUgB2oPMnTuPc41IRK8W3ZjuTa66aShjpOdKPjEWMKE%2BITxPg7DN7rcUhlsljtZRmchvWE0Oy5FKAxfYuSCeXCpa9ygku%2BhWyy085G34GMs5mfoy9zS8A10nUseaQdL1195sCwFJwuKCqPJCPy8NNGlUrI7qon%2F32mRg%2F9xDh6isY2h2mlZ%2BwbaerBGkfh5U7kVF3CMPouskB453qGibJuIuVpfHLISoDizzD8DPZRY%2BlzbbAD2gKR2YzL0GnxeEE9AmqWA49hCLYHsCMM6E7RccW8wh9j%2BxAY6pgFtMXxqTdNckYI1pNYVStgq7p9hd4GY2wX8gob%2BXqCC0v1jMx14P1oZm0T6hlgsnnC8Zkhhk95FTtuvsDMmQSVXfNGsehIy1tBOGWzTO%2Fwuz%2F%2BmpCz%2FDbdv2ZYeXcf%2FusuH%2F0uEPNDQNTaTMWYSjcWOjaFD7TTHKXE19MBps0qNybmwltBAz9Q2N%2FDiZKVbxOYeXuAlg%2F9nn83Ki4X2mR%2FOvpaHes%2Fa&X-Amz-Signature=cdb4e2c551f9985c2095ecf223bffb0292ed6ed40066542fbe485b9b33053d9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VZUE67U%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T004151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDRIn33yWivNZEqu8P%2FdgrLKxhOib1N4S6MUD0zFKafCAiBQYAGz2QUNT4DDPiP9ry3qhNNgNMQt5gQAo0HPjXlYBSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMj6SoWUroJ7suN%2FR1KtwDQ3elyMeaSUf%2BxN2DsilcLSXiOxFW9aSFxR2OpJkNxVP4bh%2FwdmHsegJUtgGu4BoMHIRlhop%2FJ%2FOSEdopt7J0PG5C%2Flpw4qYLyztxEIiuO4iRoG6L16Z3UiKGhWSaWr4KS026Jz6tESs0XOn2iqGFp6iDeeq3zFYCbzXCk0Gi71PImKI3kD532F%2FyHjgKwo87YsNpKCE5Qb3fa5qQ%2BWi5yBYKuU64so16CRmFsCAyP%2FJw%2B%2B0kvpPa3Zl9ypqi%2BFajsJRY533XHv4N%2BfFtg1nJFf02BC6KbuQ60E9LJ%2BmD0y777SE6rbWglC2jM%2BhLoXEZzVvdZ4RMb38od6GKYaZ4dGajZDt5bolElhUgB2oPMnTuPc41IRK8W3ZjuTa66aShjpOdKPjEWMKE%2BITxPg7DN7rcUhlsljtZRmchvWE0Oy5FKAxfYuSCeXCpa9ygku%2BhWyy085G34GMs5mfoy9zS8A10nUseaQdL1195sCwFJwuKCqPJCPy8NNGlUrI7qon%2F32mRg%2F9xDh6isY2h2mlZ%2BwbaerBGkfh5U7kVF3CMPouskB453qGibJuIuVpfHLISoDizzD8DPZRY%2BlzbbAD2gKR2YzL0GnxeEE9AmqWA49hCLYHsCMM6E7RccW8wh9j%2BxAY6pgFtMXxqTdNckYI1pNYVStgq7p9hd4GY2wX8gob%2BXqCC0v1jMx14P1oZm0T6hlgsnnC8Zkhhk95FTtuvsDMmQSVXfNGsehIy1tBOGWzTO%2Fwuz%2F%2BmpCz%2FDbdv2ZYeXcf%2FusuH%2F0uEPNDQNTaTMWYSjcWOjaFD7TTHKXE19MBps0qNybmwltBAz9Q2N%2FDiZKVbxOYeXuAlg%2F9nn83Ki4X2mR%2FOvpaHes%2Fa&X-Amz-Signature=7efebedd06b87fcb58b73190f658aa7b4d5c1c670c4485a757cac25a180f3757&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
