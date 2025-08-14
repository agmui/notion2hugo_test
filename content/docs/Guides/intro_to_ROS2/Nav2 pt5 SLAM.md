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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ICIP5Z%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFmNgAboCAglObijyV5hUZEz8VIbvDorIaqTJ0K3wGPKAiEAzxXVuXNoX%2FAGUuc78ojCouPj5MzhTxTpkJdRZ%2BYFPQgq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPDPnOaC82%2FQzTKwwyrcA461fZb0Bw47m%2BfIgcpew41J2ps5bc3XUcw14MC9M2EIp2q3R%2BwJlO8QTS%2F3Fa3NX4Il1N7sUi%2FrRDswmOck2s9VRVGMUCI%2B9fP2WGox2n9F937jgagSLHYJALXB7cVpTzjlBvn9hJ459Lafo%2B7fzlY5SVgUZyrGwpztp%2FzEdshdRCQ9YUhQv9NDZXy61zGCD6Wl4aZR9vhcRxKP8W0lbxs3NhJU46QlmLc9MNMYeCk9KQX9VxCX1pRKp1dyTnmEChTW%2B3CmoG0a7QQ14zYUGgUm6De6P0%2BZbRsOYX8OHMPrSNbOKESKeqfc8TsN4V3Xn4uw60rq%2B3fTgJ8jvYiN31zzsiac69VNT1jiDmA0qKbxsAH7Ur%2BCM35%2F7Rbp9EEXTXpNV5zNIhSHhNCkPhiHM75ZI47pFgwzdhcZW0QZH7uliWAOtJK8qwun5f7H1hsepf4cTQVuPGeAdJ%2F5%2Fxi5AgdUL0C1%2Fslf6P2WSXMbQ6aH%2FArW6oHyG7GUojSkNMMBtK%2FInFDpoXuqeYk1OOzXLk8Z14X72pZCZybmZiz6b8oCS8vlsPGLpgLnmUjsKKdbujVuRZq%2B6G5oHmRrxjChsDYEkBcFNFLqDAi1VaMbGAW6J%2FzfNTddsiLeMD8rMKmM%2BcQGOqUBJBBuDZxUoQ%2B%2FrGcZtbSdKi%2FI19Zb%2F25uEfKLD7AMsNa%2FBUiSAsVPoqL8bBgY0bOJo1yivcm7H5ydq80tAasXgnCoEkZ2AZmL7a4hhHMte16is%2B3OsZvSaA5ZAxKk4ShSCjo%2BaU7QEQzSdeAhUPoo%2F2IxPuNHr%2FJMVNd3bK4zWfuDItm0%2FRyr73cAu%2BRaOw9DcFAnmnhKjyTdvMHYlbDLO7DF%2BWJm&X-Amz-Signature=05d608aa548dfedd22ece414db78866b794cb10d830b2988644eabb894f9d9a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ICIP5Z%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFmNgAboCAglObijyV5hUZEz8VIbvDorIaqTJ0K3wGPKAiEAzxXVuXNoX%2FAGUuc78ojCouPj5MzhTxTpkJdRZ%2BYFPQgq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPDPnOaC82%2FQzTKwwyrcA461fZb0Bw47m%2BfIgcpew41J2ps5bc3XUcw14MC9M2EIp2q3R%2BwJlO8QTS%2F3Fa3NX4Il1N7sUi%2FrRDswmOck2s9VRVGMUCI%2B9fP2WGox2n9F937jgagSLHYJALXB7cVpTzjlBvn9hJ459Lafo%2B7fzlY5SVgUZyrGwpztp%2FzEdshdRCQ9YUhQv9NDZXy61zGCD6Wl4aZR9vhcRxKP8W0lbxs3NhJU46QlmLc9MNMYeCk9KQX9VxCX1pRKp1dyTnmEChTW%2B3CmoG0a7QQ14zYUGgUm6De6P0%2BZbRsOYX8OHMPrSNbOKESKeqfc8TsN4V3Xn4uw60rq%2B3fTgJ8jvYiN31zzsiac69VNT1jiDmA0qKbxsAH7Ur%2BCM35%2F7Rbp9EEXTXpNV5zNIhSHhNCkPhiHM75ZI47pFgwzdhcZW0QZH7uliWAOtJK8qwun5f7H1hsepf4cTQVuPGeAdJ%2F5%2Fxi5AgdUL0C1%2Fslf6P2WSXMbQ6aH%2FArW6oHyG7GUojSkNMMBtK%2FInFDpoXuqeYk1OOzXLk8Z14X72pZCZybmZiz6b8oCS8vlsPGLpgLnmUjsKKdbujVuRZq%2B6G5oHmRrxjChsDYEkBcFNFLqDAi1VaMbGAW6J%2FzfNTddsiLeMD8rMKmM%2BcQGOqUBJBBuDZxUoQ%2B%2FrGcZtbSdKi%2FI19Zb%2F25uEfKLD7AMsNa%2FBUiSAsVPoqL8bBgY0bOJo1yivcm7H5ydq80tAasXgnCoEkZ2AZmL7a4hhHMte16is%2B3OsZvSaA5ZAxKk4ShSCjo%2BaU7QEQzSdeAhUPoo%2F2IxPuNHr%2FJMVNd3bK4zWfuDItm0%2FRyr73cAu%2BRaOw9DcFAnmnhKjyTdvMHYlbDLO7DF%2BWJm&X-Amz-Signature=4ae50f2bfa98ffcda19cd2f50c33e4bc7035f74c7125b9862d56efb152994710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ICIP5Z%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFmNgAboCAglObijyV5hUZEz8VIbvDorIaqTJ0K3wGPKAiEAzxXVuXNoX%2FAGUuc78ojCouPj5MzhTxTpkJdRZ%2BYFPQgq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPDPnOaC82%2FQzTKwwyrcA461fZb0Bw47m%2BfIgcpew41J2ps5bc3XUcw14MC9M2EIp2q3R%2BwJlO8QTS%2F3Fa3NX4Il1N7sUi%2FrRDswmOck2s9VRVGMUCI%2B9fP2WGox2n9F937jgagSLHYJALXB7cVpTzjlBvn9hJ459Lafo%2B7fzlY5SVgUZyrGwpztp%2FzEdshdRCQ9YUhQv9NDZXy61zGCD6Wl4aZR9vhcRxKP8W0lbxs3NhJU46QlmLc9MNMYeCk9KQX9VxCX1pRKp1dyTnmEChTW%2B3CmoG0a7QQ14zYUGgUm6De6P0%2BZbRsOYX8OHMPrSNbOKESKeqfc8TsN4V3Xn4uw60rq%2B3fTgJ8jvYiN31zzsiac69VNT1jiDmA0qKbxsAH7Ur%2BCM35%2F7Rbp9EEXTXpNV5zNIhSHhNCkPhiHM75ZI47pFgwzdhcZW0QZH7uliWAOtJK8qwun5f7H1hsepf4cTQVuPGeAdJ%2F5%2Fxi5AgdUL0C1%2Fslf6P2WSXMbQ6aH%2FArW6oHyG7GUojSkNMMBtK%2FInFDpoXuqeYk1OOzXLk8Z14X72pZCZybmZiz6b8oCS8vlsPGLpgLnmUjsKKdbujVuRZq%2B6G5oHmRrxjChsDYEkBcFNFLqDAi1VaMbGAW6J%2FzfNTddsiLeMD8rMKmM%2BcQGOqUBJBBuDZxUoQ%2B%2FrGcZtbSdKi%2FI19Zb%2F25uEfKLD7AMsNa%2FBUiSAsVPoqL8bBgY0bOJo1yivcm7H5ydq80tAasXgnCoEkZ2AZmL7a4hhHMte16is%2B3OsZvSaA5ZAxKk4ShSCjo%2BaU7QEQzSdeAhUPoo%2F2IxPuNHr%2FJMVNd3bK4zWfuDItm0%2FRyr73cAu%2BRaOw9DcFAnmnhKjyTdvMHYlbDLO7DF%2BWJm&X-Amz-Signature=7e45e2445b709d0ef21b99378f0b994a10e8588d8bce5b43b191e871927e7ace&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ICIP5Z%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFmNgAboCAglObijyV5hUZEz8VIbvDorIaqTJ0K3wGPKAiEAzxXVuXNoX%2FAGUuc78ojCouPj5MzhTxTpkJdRZ%2BYFPQgq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPDPnOaC82%2FQzTKwwyrcA461fZb0Bw47m%2BfIgcpew41J2ps5bc3XUcw14MC9M2EIp2q3R%2BwJlO8QTS%2F3Fa3NX4Il1N7sUi%2FrRDswmOck2s9VRVGMUCI%2B9fP2WGox2n9F937jgagSLHYJALXB7cVpTzjlBvn9hJ459Lafo%2B7fzlY5SVgUZyrGwpztp%2FzEdshdRCQ9YUhQv9NDZXy61zGCD6Wl4aZR9vhcRxKP8W0lbxs3NhJU46QlmLc9MNMYeCk9KQX9VxCX1pRKp1dyTnmEChTW%2B3CmoG0a7QQ14zYUGgUm6De6P0%2BZbRsOYX8OHMPrSNbOKESKeqfc8TsN4V3Xn4uw60rq%2B3fTgJ8jvYiN31zzsiac69VNT1jiDmA0qKbxsAH7Ur%2BCM35%2F7Rbp9EEXTXpNV5zNIhSHhNCkPhiHM75ZI47pFgwzdhcZW0QZH7uliWAOtJK8qwun5f7H1hsepf4cTQVuPGeAdJ%2F5%2Fxi5AgdUL0C1%2Fslf6P2WSXMbQ6aH%2FArW6oHyG7GUojSkNMMBtK%2FInFDpoXuqeYk1OOzXLk8Z14X72pZCZybmZiz6b8oCS8vlsPGLpgLnmUjsKKdbujVuRZq%2B6G5oHmRrxjChsDYEkBcFNFLqDAi1VaMbGAW6J%2FzfNTddsiLeMD8rMKmM%2BcQGOqUBJBBuDZxUoQ%2B%2FrGcZtbSdKi%2FI19Zb%2F25uEfKLD7AMsNa%2FBUiSAsVPoqL8bBgY0bOJo1yivcm7H5ydq80tAasXgnCoEkZ2AZmL7a4hhHMte16is%2B3OsZvSaA5ZAxKk4ShSCjo%2BaU7QEQzSdeAhUPoo%2F2IxPuNHr%2FJMVNd3bK4zWfuDItm0%2FRyr73cAu%2BRaOw9DcFAnmnhKjyTdvMHYlbDLO7DF%2BWJm&X-Amz-Signature=4bc46d69775817152b5c4785aca082635ee845c3fd1842bc19a4c9eaebac5679&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ICIP5Z%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFmNgAboCAglObijyV5hUZEz8VIbvDorIaqTJ0K3wGPKAiEAzxXVuXNoX%2FAGUuc78ojCouPj5MzhTxTpkJdRZ%2BYFPQgq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPDPnOaC82%2FQzTKwwyrcA461fZb0Bw47m%2BfIgcpew41J2ps5bc3XUcw14MC9M2EIp2q3R%2BwJlO8QTS%2F3Fa3NX4Il1N7sUi%2FrRDswmOck2s9VRVGMUCI%2B9fP2WGox2n9F937jgagSLHYJALXB7cVpTzjlBvn9hJ459Lafo%2B7fzlY5SVgUZyrGwpztp%2FzEdshdRCQ9YUhQv9NDZXy61zGCD6Wl4aZR9vhcRxKP8W0lbxs3NhJU46QlmLc9MNMYeCk9KQX9VxCX1pRKp1dyTnmEChTW%2B3CmoG0a7QQ14zYUGgUm6De6P0%2BZbRsOYX8OHMPrSNbOKESKeqfc8TsN4V3Xn4uw60rq%2B3fTgJ8jvYiN31zzsiac69VNT1jiDmA0qKbxsAH7Ur%2BCM35%2F7Rbp9EEXTXpNV5zNIhSHhNCkPhiHM75ZI47pFgwzdhcZW0QZH7uliWAOtJK8qwun5f7H1hsepf4cTQVuPGeAdJ%2F5%2Fxi5AgdUL0C1%2Fslf6P2WSXMbQ6aH%2FArW6oHyG7GUojSkNMMBtK%2FInFDpoXuqeYk1OOzXLk8Z14X72pZCZybmZiz6b8oCS8vlsPGLpgLnmUjsKKdbujVuRZq%2B6G5oHmRrxjChsDYEkBcFNFLqDAi1VaMbGAW6J%2FzfNTddsiLeMD8rMKmM%2BcQGOqUBJBBuDZxUoQ%2B%2FrGcZtbSdKi%2FI19Zb%2F25uEfKLD7AMsNa%2FBUiSAsVPoqL8bBgY0bOJo1yivcm7H5ydq80tAasXgnCoEkZ2AZmL7a4hhHMte16is%2B3OsZvSaA5ZAxKk4ShSCjo%2BaU7QEQzSdeAhUPoo%2F2IxPuNHr%2FJMVNd3bK4zWfuDItm0%2FRyr73cAu%2BRaOw9DcFAnmnhKjyTdvMHYlbDLO7DF%2BWJm&X-Amz-Signature=15c1939e876975bfe5421769f51730d477e6d085402792809edd68186ef45a72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ICIP5Z%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFmNgAboCAglObijyV5hUZEz8VIbvDorIaqTJ0K3wGPKAiEAzxXVuXNoX%2FAGUuc78ojCouPj5MzhTxTpkJdRZ%2BYFPQgq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPDPnOaC82%2FQzTKwwyrcA461fZb0Bw47m%2BfIgcpew41J2ps5bc3XUcw14MC9M2EIp2q3R%2BwJlO8QTS%2F3Fa3NX4Il1N7sUi%2FrRDswmOck2s9VRVGMUCI%2B9fP2WGox2n9F937jgagSLHYJALXB7cVpTzjlBvn9hJ459Lafo%2B7fzlY5SVgUZyrGwpztp%2FzEdshdRCQ9YUhQv9NDZXy61zGCD6Wl4aZR9vhcRxKP8W0lbxs3NhJU46QlmLc9MNMYeCk9KQX9VxCX1pRKp1dyTnmEChTW%2B3CmoG0a7QQ14zYUGgUm6De6P0%2BZbRsOYX8OHMPrSNbOKESKeqfc8TsN4V3Xn4uw60rq%2B3fTgJ8jvYiN31zzsiac69VNT1jiDmA0qKbxsAH7Ur%2BCM35%2F7Rbp9EEXTXpNV5zNIhSHhNCkPhiHM75ZI47pFgwzdhcZW0QZH7uliWAOtJK8qwun5f7H1hsepf4cTQVuPGeAdJ%2F5%2Fxi5AgdUL0C1%2Fslf6P2WSXMbQ6aH%2FArW6oHyG7GUojSkNMMBtK%2FInFDpoXuqeYk1OOzXLk8Z14X72pZCZybmZiz6b8oCS8vlsPGLpgLnmUjsKKdbujVuRZq%2B6G5oHmRrxjChsDYEkBcFNFLqDAi1VaMbGAW6J%2FzfNTddsiLeMD8rMKmM%2BcQGOqUBJBBuDZxUoQ%2B%2FrGcZtbSdKi%2FI19Zb%2F25uEfKLD7AMsNa%2FBUiSAsVPoqL8bBgY0bOJo1yivcm7H5ydq80tAasXgnCoEkZ2AZmL7a4hhHMte16is%2B3OsZvSaA5ZAxKk4ShSCjo%2BaU7QEQzSdeAhUPoo%2F2IxPuNHr%2FJMVNd3bK4zWfuDItm0%2FRyr73cAu%2BRaOw9DcFAnmnhKjyTdvMHYlbDLO7DF%2BWJm&X-Amz-Signature=e7b358fd4615e31042337baa0b90ddac4b4b0b7b72564c6cf67a3874f0a9cc68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ICIP5Z%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFmNgAboCAglObijyV5hUZEz8VIbvDorIaqTJ0K3wGPKAiEAzxXVuXNoX%2FAGUuc78ojCouPj5MzhTxTpkJdRZ%2BYFPQgq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPDPnOaC82%2FQzTKwwyrcA461fZb0Bw47m%2BfIgcpew41J2ps5bc3XUcw14MC9M2EIp2q3R%2BwJlO8QTS%2F3Fa3NX4Il1N7sUi%2FrRDswmOck2s9VRVGMUCI%2B9fP2WGox2n9F937jgagSLHYJALXB7cVpTzjlBvn9hJ459Lafo%2B7fzlY5SVgUZyrGwpztp%2FzEdshdRCQ9YUhQv9NDZXy61zGCD6Wl4aZR9vhcRxKP8W0lbxs3NhJU46QlmLc9MNMYeCk9KQX9VxCX1pRKp1dyTnmEChTW%2B3CmoG0a7QQ14zYUGgUm6De6P0%2BZbRsOYX8OHMPrSNbOKESKeqfc8TsN4V3Xn4uw60rq%2B3fTgJ8jvYiN31zzsiac69VNT1jiDmA0qKbxsAH7Ur%2BCM35%2F7Rbp9EEXTXpNV5zNIhSHhNCkPhiHM75ZI47pFgwzdhcZW0QZH7uliWAOtJK8qwun5f7H1hsepf4cTQVuPGeAdJ%2F5%2Fxi5AgdUL0C1%2Fslf6P2WSXMbQ6aH%2FArW6oHyG7GUojSkNMMBtK%2FInFDpoXuqeYk1OOzXLk8Z14X72pZCZybmZiz6b8oCS8vlsPGLpgLnmUjsKKdbujVuRZq%2B6G5oHmRrxjChsDYEkBcFNFLqDAi1VaMbGAW6J%2FzfNTddsiLeMD8rMKmM%2BcQGOqUBJBBuDZxUoQ%2B%2FrGcZtbSdKi%2FI19Zb%2F25uEfKLD7AMsNa%2FBUiSAsVPoqL8bBgY0bOJo1yivcm7H5ydq80tAasXgnCoEkZ2AZmL7a4hhHMte16is%2B3OsZvSaA5ZAxKk4ShSCjo%2BaU7QEQzSdeAhUPoo%2F2IxPuNHr%2FJMVNd3bK4zWfuDItm0%2FRyr73cAu%2BRaOw9DcFAnmnhKjyTdvMHYlbDLO7DF%2BWJm&X-Amz-Signature=0d2142ce68e3f74fed4fa353c36b9b8906cc4a59b5fa34075e72cddacfcbad4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ICIP5Z%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFmNgAboCAglObijyV5hUZEz8VIbvDorIaqTJ0K3wGPKAiEAzxXVuXNoX%2FAGUuc78ojCouPj5MzhTxTpkJdRZ%2BYFPQgq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPDPnOaC82%2FQzTKwwyrcA461fZb0Bw47m%2BfIgcpew41J2ps5bc3XUcw14MC9M2EIp2q3R%2BwJlO8QTS%2F3Fa3NX4Il1N7sUi%2FrRDswmOck2s9VRVGMUCI%2B9fP2WGox2n9F937jgagSLHYJALXB7cVpTzjlBvn9hJ459Lafo%2B7fzlY5SVgUZyrGwpztp%2FzEdshdRCQ9YUhQv9NDZXy61zGCD6Wl4aZR9vhcRxKP8W0lbxs3NhJU46QlmLc9MNMYeCk9KQX9VxCX1pRKp1dyTnmEChTW%2B3CmoG0a7QQ14zYUGgUm6De6P0%2BZbRsOYX8OHMPrSNbOKESKeqfc8TsN4V3Xn4uw60rq%2B3fTgJ8jvYiN31zzsiac69VNT1jiDmA0qKbxsAH7Ur%2BCM35%2F7Rbp9EEXTXpNV5zNIhSHhNCkPhiHM75ZI47pFgwzdhcZW0QZH7uliWAOtJK8qwun5f7H1hsepf4cTQVuPGeAdJ%2F5%2Fxi5AgdUL0C1%2Fslf6P2WSXMbQ6aH%2FArW6oHyG7GUojSkNMMBtK%2FInFDpoXuqeYk1OOzXLk8Z14X72pZCZybmZiz6b8oCS8vlsPGLpgLnmUjsKKdbujVuRZq%2B6G5oHmRrxjChsDYEkBcFNFLqDAi1VaMbGAW6J%2FzfNTddsiLeMD8rMKmM%2BcQGOqUBJBBuDZxUoQ%2B%2FrGcZtbSdKi%2FI19Zb%2F25uEfKLD7AMsNa%2FBUiSAsVPoqL8bBgY0bOJo1yivcm7H5ydq80tAasXgnCoEkZ2AZmL7a4hhHMte16is%2B3OsZvSaA5ZAxKk4ShSCjo%2BaU7QEQzSdeAhUPoo%2F2IxPuNHr%2FJMVNd3bK4zWfuDItm0%2FRyr73cAu%2BRaOw9DcFAnmnhKjyTdvMHYlbDLO7DF%2BWJm&X-Amz-Signature=4b49f0239e6d154761e6d016cbd58ad715271eddfdba3a99c5ef06b4d4573776&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ICIP5Z%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFmNgAboCAglObijyV5hUZEz8VIbvDorIaqTJ0K3wGPKAiEAzxXVuXNoX%2FAGUuc78ojCouPj5MzhTxTpkJdRZ%2BYFPQgq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPDPnOaC82%2FQzTKwwyrcA461fZb0Bw47m%2BfIgcpew41J2ps5bc3XUcw14MC9M2EIp2q3R%2BwJlO8QTS%2F3Fa3NX4Il1N7sUi%2FrRDswmOck2s9VRVGMUCI%2B9fP2WGox2n9F937jgagSLHYJALXB7cVpTzjlBvn9hJ459Lafo%2B7fzlY5SVgUZyrGwpztp%2FzEdshdRCQ9YUhQv9NDZXy61zGCD6Wl4aZR9vhcRxKP8W0lbxs3NhJU46QlmLc9MNMYeCk9KQX9VxCX1pRKp1dyTnmEChTW%2B3CmoG0a7QQ14zYUGgUm6De6P0%2BZbRsOYX8OHMPrSNbOKESKeqfc8TsN4V3Xn4uw60rq%2B3fTgJ8jvYiN31zzsiac69VNT1jiDmA0qKbxsAH7Ur%2BCM35%2F7Rbp9EEXTXpNV5zNIhSHhNCkPhiHM75ZI47pFgwzdhcZW0QZH7uliWAOtJK8qwun5f7H1hsepf4cTQVuPGeAdJ%2F5%2Fxi5AgdUL0C1%2Fslf6P2WSXMbQ6aH%2FArW6oHyG7GUojSkNMMBtK%2FInFDpoXuqeYk1OOzXLk8Z14X72pZCZybmZiz6b8oCS8vlsPGLpgLnmUjsKKdbujVuRZq%2B6G5oHmRrxjChsDYEkBcFNFLqDAi1VaMbGAW6J%2FzfNTddsiLeMD8rMKmM%2BcQGOqUBJBBuDZxUoQ%2B%2FrGcZtbSdKi%2FI19Zb%2F25uEfKLD7AMsNa%2FBUiSAsVPoqL8bBgY0bOJo1yivcm7H5ydq80tAasXgnCoEkZ2AZmL7a4hhHMte16is%2B3OsZvSaA5ZAxKk4ShSCjo%2BaU7QEQzSdeAhUPoo%2F2IxPuNHr%2FJMVNd3bK4zWfuDItm0%2FRyr73cAu%2BRaOw9DcFAnmnhKjyTdvMHYlbDLO7DF%2BWJm&X-Amz-Signature=3253f9b2f1705f8e2bddac08096b7a72aa2c2c9d5155fda004e9ce7303552913&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ICIP5Z%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFmNgAboCAglObijyV5hUZEz8VIbvDorIaqTJ0K3wGPKAiEAzxXVuXNoX%2FAGUuc78ojCouPj5MzhTxTpkJdRZ%2BYFPQgq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPDPnOaC82%2FQzTKwwyrcA461fZb0Bw47m%2BfIgcpew41J2ps5bc3XUcw14MC9M2EIp2q3R%2BwJlO8QTS%2F3Fa3NX4Il1N7sUi%2FrRDswmOck2s9VRVGMUCI%2B9fP2WGox2n9F937jgagSLHYJALXB7cVpTzjlBvn9hJ459Lafo%2B7fzlY5SVgUZyrGwpztp%2FzEdshdRCQ9YUhQv9NDZXy61zGCD6Wl4aZR9vhcRxKP8W0lbxs3NhJU46QlmLc9MNMYeCk9KQX9VxCX1pRKp1dyTnmEChTW%2B3CmoG0a7QQ14zYUGgUm6De6P0%2BZbRsOYX8OHMPrSNbOKESKeqfc8TsN4V3Xn4uw60rq%2B3fTgJ8jvYiN31zzsiac69VNT1jiDmA0qKbxsAH7Ur%2BCM35%2F7Rbp9EEXTXpNV5zNIhSHhNCkPhiHM75ZI47pFgwzdhcZW0QZH7uliWAOtJK8qwun5f7H1hsepf4cTQVuPGeAdJ%2F5%2Fxi5AgdUL0C1%2Fslf6P2WSXMbQ6aH%2FArW6oHyG7GUojSkNMMBtK%2FInFDpoXuqeYk1OOzXLk8Z14X72pZCZybmZiz6b8oCS8vlsPGLpgLnmUjsKKdbujVuRZq%2B6G5oHmRrxjChsDYEkBcFNFLqDAi1VaMbGAW6J%2FzfNTddsiLeMD8rMKmM%2BcQGOqUBJBBuDZxUoQ%2B%2FrGcZtbSdKi%2FI19Zb%2F25uEfKLD7AMsNa%2FBUiSAsVPoqL8bBgY0bOJo1yivcm7H5ydq80tAasXgnCoEkZ2AZmL7a4hhHMte16is%2B3OsZvSaA5ZAxKk4ShSCjo%2BaU7QEQzSdeAhUPoo%2F2IxPuNHr%2FJMVNd3bK4zWfuDItm0%2FRyr73cAu%2BRaOw9DcFAnmnhKjyTdvMHYlbDLO7DF%2BWJm&X-Amz-Signature=7d65d0bfe871664304f4c3be6e84dd449d70063366eb8c89b1380d3a6bb6307b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ICIP5Z%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFmNgAboCAglObijyV5hUZEz8VIbvDorIaqTJ0K3wGPKAiEAzxXVuXNoX%2FAGUuc78ojCouPj5MzhTxTpkJdRZ%2BYFPQgq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPDPnOaC82%2FQzTKwwyrcA461fZb0Bw47m%2BfIgcpew41J2ps5bc3XUcw14MC9M2EIp2q3R%2BwJlO8QTS%2F3Fa3NX4Il1N7sUi%2FrRDswmOck2s9VRVGMUCI%2B9fP2WGox2n9F937jgagSLHYJALXB7cVpTzjlBvn9hJ459Lafo%2B7fzlY5SVgUZyrGwpztp%2FzEdshdRCQ9YUhQv9NDZXy61zGCD6Wl4aZR9vhcRxKP8W0lbxs3NhJU46QlmLc9MNMYeCk9KQX9VxCX1pRKp1dyTnmEChTW%2B3CmoG0a7QQ14zYUGgUm6De6P0%2BZbRsOYX8OHMPrSNbOKESKeqfc8TsN4V3Xn4uw60rq%2B3fTgJ8jvYiN31zzsiac69VNT1jiDmA0qKbxsAH7Ur%2BCM35%2F7Rbp9EEXTXpNV5zNIhSHhNCkPhiHM75ZI47pFgwzdhcZW0QZH7uliWAOtJK8qwun5f7H1hsepf4cTQVuPGeAdJ%2F5%2Fxi5AgdUL0C1%2Fslf6P2WSXMbQ6aH%2FArW6oHyG7GUojSkNMMBtK%2FInFDpoXuqeYk1OOzXLk8Z14X72pZCZybmZiz6b8oCS8vlsPGLpgLnmUjsKKdbujVuRZq%2B6G5oHmRrxjChsDYEkBcFNFLqDAi1VaMbGAW6J%2FzfNTddsiLeMD8rMKmM%2BcQGOqUBJBBuDZxUoQ%2B%2FrGcZtbSdKi%2FI19Zb%2F25uEfKLD7AMsNa%2FBUiSAsVPoqL8bBgY0bOJo1yivcm7H5ydq80tAasXgnCoEkZ2AZmL7a4hhHMte16is%2B3OsZvSaA5ZAxKk4ShSCjo%2BaU7QEQzSdeAhUPoo%2F2IxPuNHr%2FJMVNd3bK4zWfuDItm0%2FRyr73cAu%2BRaOw9DcFAnmnhKjyTdvMHYlbDLO7DF%2BWJm&X-Amz-Signature=59c376b7d438ae8fdb144c5d28d86dbde71ef377e73db8a83454966c95a4b918&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ICIP5Z%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFmNgAboCAglObijyV5hUZEz8VIbvDorIaqTJ0K3wGPKAiEAzxXVuXNoX%2FAGUuc78ojCouPj5MzhTxTpkJdRZ%2BYFPQgq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPDPnOaC82%2FQzTKwwyrcA461fZb0Bw47m%2BfIgcpew41J2ps5bc3XUcw14MC9M2EIp2q3R%2BwJlO8QTS%2F3Fa3NX4Il1N7sUi%2FrRDswmOck2s9VRVGMUCI%2B9fP2WGox2n9F937jgagSLHYJALXB7cVpTzjlBvn9hJ459Lafo%2B7fzlY5SVgUZyrGwpztp%2FzEdshdRCQ9YUhQv9NDZXy61zGCD6Wl4aZR9vhcRxKP8W0lbxs3NhJU46QlmLc9MNMYeCk9KQX9VxCX1pRKp1dyTnmEChTW%2B3CmoG0a7QQ14zYUGgUm6De6P0%2BZbRsOYX8OHMPrSNbOKESKeqfc8TsN4V3Xn4uw60rq%2B3fTgJ8jvYiN31zzsiac69VNT1jiDmA0qKbxsAH7Ur%2BCM35%2F7Rbp9EEXTXpNV5zNIhSHhNCkPhiHM75ZI47pFgwzdhcZW0QZH7uliWAOtJK8qwun5f7H1hsepf4cTQVuPGeAdJ%2F5%2Fxi5AgdUL0C1%2Fslf6P2WSXMbQ6aH%2FArW6oHyG7GUojSkNMMBtK%2FInFDpoXuqeYk1OOzXLk8Z14X72pZCZybmZiz6b8oCS8vlsPGLpgLnmUjsKKdbujVuRZq%2B6G5oHmRrxjChsDYEkBcFNFLqDAi1VaMbGAW6J%2FzfNTddsiLeMD8rMKmM%2BcQGOqUBJBBuDZxUoQ%2B%2FrGcZtbSdKi%2FI19Zb%2F25uEfKLD7AMsNa%2FBUiSAsVPoqL8bBgY0bOJo1yivcm7H5ydq80tAasXgnCoEkZ2AZmL7a4hhHMte16is%2B3OsZvSaA5ZAxKk4ShSCjo%2BaU7QEQzSdeAhUPoo%2F2IxPuNHr%2FJMVNd3bK4zWfuDItm0%2FRyr73cAu%2BRaOw9DcFAnmnhKjyTdvMHYlbDLO7DF%2BWJm&X-Amz-Signature=670255af5367f0206573abb5e9c3c7cbe4a28e762972478386a895b4f01af77c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ICIP5Z%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFmNgAboCAglObijyV5hUZEz8VIbvDorIaqTJ0K3wGPKAiEAzxXVuXNoX%2FAGUuc78ojCouPj5MzhTxTpkJdRZ%2BYFPQgq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPDPnOaC82%2FQzTKwwyrcA461fZb0Bw47m%2BfIgcpew41J2ps5bc3XUcw14MC9M2EIp2q3R%2BwJlO8QTS%2F3Fa3NX4Il1N7sUi%2FrRDswmOck2s9VRVGMUCI%2B9fP2WGox2n9F937jgagSLHYJALXB7cVpTzjlBvn9hJ459Lafo%2B7fzlY5SVgUZyrGwpztp%2FzEdshdRCQ9YUhQv9NDZXy61zGCD6Wl4aZR9vhcRxKP8W0lbxs3NhJU46QlmLc9MNMYeCk9KQX9VxCX1pRKp1dyTnmEChTW%2B3CmoG0a7QQ14zYUGgUm6De6P0%2BZbRsOYX8OHMPrSNbOKESKeqfc8TsN4V3Xn4uw60rq%2B3fTgJ8jvYiN31zzsiac69VNT1jiDmA0qKbxsAH7Ur%2BCM35%2F7Rbp9EEXTXpNV5zNIhSHhNCkPhiHM75ZI47pFgwzdhcZW0QZH7uliWAOtJK8qwun5f7H1hsepf4cTQVuPGeAdJ%2F5%2Fxi5AgdUL0C1%2Fslf6P2WSXMbQ6aH%2FArW6oHyG7GUojSkNMMBtK%2FInFDpoXuqeYk1OOzXLk8Z14X72pZCZybmZiz6b8oCS8vlsPGLpgLnmUjsKKdbujVuRZq%2B6G5oHmRrxjChsDYEkBcFNFLqDAi1VaMbGAW6J%2FzfNTddsiLeMD8rMKmM%2BcQGOqUBJBBuDZxUoQ%2B%2FrGcZtbSdKi%2FI19Zb%2F25uEfKLD7AMsNa%2FBUiSAsVPoqL8bBgY0bOJo1yivcm7H5ydq80tAasXgnCoEkZ2AZmL7a4hhHMte16is%2B3OsZvSaA5ZAxKk4ShSCjo%2BaU7QEQzSdeAhUPoo%2F2IxPuNHr%2FJMVNd3bK4zWfuDItm0%2FRyr73cAu%2BRaOw9DcFAnmnhKjyTdvMHYlbDLO7DF%2BWJm&X-Amz-Signature=e759ade7c4b54409f521b6d8c38dd98da29123916b379d225240ed7c929cd567&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ICIP5Z%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T210851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFmNgAboCAglObijyV5hUZEz8VIbvDorIaqTJ0K3wGPKAiEAzxXVuXNoX%2FAGUuc78ojCouPj5MzhTxTpkJdRZ%2BYFPQgq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPDPnOaC82%2FQzTKwwyrcA461fZb0Bw47m%2BfIgcpew41J2ps5bc3XUcw14MC9M2EIp2q3R%2BwJlO8QTS%2F3Fa3NX4Il1N7sUi%2FrRDswmOck2s9VRVGMUCI%2B9fP2WGox2n9F937jgagSLHYJALXB7cVpTzjlBvn9hJ459Lafo%2B7fzlY5SVgUZyrGwpztp%2FzEdshdRCQ9YUhQv9NDZXy61zGCD6Wl4aZR9vhcRxKP8W0lbxs3NhJU46QlmLc9MNMYeCk9KQX9VxCX1pRKp1dyTnmEChTW%2B3CmoG0a7QQ14zYUGgUm6De6P0%2BZbRsOYX8OHMPrSNbOKESKeqfc8TsN4V3Xn4uw60rq%2B3fTgJ8jvYiN31zzsiac69VNT1jiDmA0qKbxsAH7Ur%2BCM35%2F7Rbp9EEXTXpNV5zNIhSHhNCkPhiHM75ZI47pFgwzdhcZW0QZH7uliWAOtJK8qwun5f7H1hsepf4cTQVuPGeAdJ%2F5%2Fxi5AgdUL0C1%2Fslf6P2WSXMbQ6aH%2FArW6oHyG7GUojSkNMMBtK%2FInFDpoXuqeYk1OOzXLk8Z14X72pZCZybmZiz6b8oCS8vlsPGLpgLnmUjsKKdbujVuRZq%2B6G5oHmRrxjChsDYEkBcFNFLqDAi1VaMbGAW6J%2FzfNTddsiLeMD8rMKmM%2BcQGOqUBJBBuDZxUoQ%2B%2FrGcZtbSdKi%2FI19Zb%2F25uEfKLD7AMsNa%2FBUiSAsVPoqL8bBgY0bOJo1yivcm7H5ydq80tAasXgnCoEkZ2AZmL7a4hhHMte16is%2B3OsZvSaA5ZAxKk4ShSCjo%2BaU7QEQzSdeAhUPoo%2F2IxPuNHr%2FJMVNd3bK4zWfuDItm0%2FRyr73cAu%2BRaOw9DcFAnmnhKjyTdvMHYlbDLO7DF%2BWJm&X-Amz-Signature=93c559b6a6b6f6b8392e2d8b4241a9e53d91a923a65978240ba018f48f7bc2a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
