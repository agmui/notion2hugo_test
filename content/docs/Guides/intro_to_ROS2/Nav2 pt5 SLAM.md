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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QNL5DEW%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc9VYwGeVZUr%2Fyr9cV65KPNxQJlnaLGtT819jzuNYT3gIgT5eKwZa%2FOXrSvZ4XC0Cz8nSZH4wWCT7kn1Ou5OFSVucq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDGgqTjIkZ8ws%2FBDu5ircAzwVc%2B9sP0YJ2bw%2F7UUFVrScz%2FUGNCk9CVObz8kYVyrI2xWJZ%2FxBqQ1lkElQrlbPOtXinBygA5aywiEyQobk%2BhUPF1R00fABV4VYS5uQYpDZG%2F4P%2FsQIRDTAPwYfNTtbjoQ8NvVEq3fAMhpCBazXD5oFdFMBFd22V%2F%2BlDLiqfGd0T0319KL%2FUvJwPU1xXhx8SQZg93gFnT1epKgjoD7oeYabgfUpfsrnOnDTSI8cxYzbJdz0jS5DQiqBptHC2kzWW1KB5RAGHRpZxlNiOs17Q0OGplo1LsZSOV7xBC%2FCCqvj4L7vHj93qL9T1lfUNkg6V0BcCOpyW7XuC%2BxxUQnuKe3R9i3wjq%2F2lgK1lRrP0Kyx%2FBopeoh5cYKq8AhlAM58%2Bj%2BxRqKZlLElne3v%2BB2YHRn7Mr%2BrpZqKYcuMbw06wqV6aeBybYbv4Ke25tlV5y8POyGltK%2B1410WRhQSsVjbh32TzdSS9t802Z2A5s1uT3KIHtdLlg6fG3IKZ322k3OGuB8%2Fmpw6Sy92cnMtDOvczbIl7nUezorjUY%2Bvp5uPQV2VMk1W1gu7YWeQ4UTsEUG%2B2%2BhAMvV6M2qI4VPHh8fDIjP5pCk%2FQJaKnAZHav7byl%2BAN6TFGqBxYRmQ5LQcMI3v5ccGOqUBXGmopRAIruddCWtUx1BYWfHPNTxJ4x1hj4yzITy7YPOLyvvGKSekUkV7FEMyyuTlC52ihk3TZLsisONCsRwQ%2BSfL%2FWszz9%2BSsCywyz%2BBgl446bmotxeqLUaxc3B3frHSQkAQkzaxrWaoYam6BFvon868zfmC0YAbjIJKglTXwcb0kiq4faPHvDMSYzvovX9vtmmA1to1YVSGEpSD25g%2F2PtumFM%2F&X-Amz-Signature=74020494370c0d06eafd0d53e06e048282bfd150de814c09a988f148c8c41e2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QNL5DEW%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc9VYwGeVZUr%2Fyr9cV65KPNxQJlnaLGtT819jzuNYT3gIgT5eKwZa%2FOXrSvZ4XC0Cz8nSZH4wWCT7kn1Ou5OFSVucq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDGgqTjIkZ8ws%2FBDu5ircAzwVc%2B9sP0YJ2bw%2F7UUFVrScz%2FUGNCk9CVObz8kYVyrI2xWJZ%2FxBqQ1lkElQrlbPOtXinBygA5aywiEyQobk%2BhUPF1R00fABV4VYS5uQYpDZG%2F4P%2FsQIRDTAPwYfNTtbjoQ8NvVEq3fAMhpCBazXD5oFdFMBFd22V%2F%2BlDLiqfGd0T0319KL%2FUvJwPU1xXhx8SQZg93gFnT1epKgjoD7oeYabgfUpfsrnOnDTSI8cxYzbJdz0jS5DQiqBptHC2kzWW1KB5RAGHRpZxlNiOs17Q0OGplo1LsZSOV7xBC%2FCCqvj4L7vHj93qL9T1lfUNkg6V0BcCOpyW7XuC%2BxxUQnuKe3R9i3wjq%2F2lgK1lRrP0Kyx%2FBopeoh5cYKq8AhlAM58%2Bj%2BxRqKZlLElne3v%2BB2YHRn7Mr%2BrpZqKYcuMbw06wqV6aeBybYbv4Ke25tlV5y8POyGltK%2B1410WRhQSsVjbh32TzdSS9t802Z2A5s1uT3KIHtdLlg6fG3IKZ322k3OGuB8%2Fmpw6Sy92cnMtDOvczbIl7nUezorjUY%2Bvp5uPQV2VMk1W1gu7YWeQ4UTsEUG%2B2%2BhAMvV6M2qI4VPHh8fDIjP5pCk%2FQJaKnAZHav7byl%2BAN6TFGqBxYRmQ5LQcMI3v5ccGOqUBXGmopRAIruddCWtUx1BYWfHPNTxJ4x1hj4yzITy7YPOLyvvGKSekUkV7FEMyyuTlC52ihk3TZLsisONCsRwQ%2BSfL%2FWszz9%2BSsCywyz%2BBgl446bmotxeqLUaxc3B3frHSQkAQkzaxrWaoYam6BFvon868zfmC0YAbjIJKglTXwcb0kiq4faPHvDMSYzvovX9vtmmA1to1YVSGEpSD25g%2F2PtumFM%2F&X-Amz-Signature=757f3f4c29c9d6276e8be7574f027ce1d8e73168764811ffce9b3b4a89e90952&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QNL5DEW%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc9VYwGeVZUr%2Fyr9cV65KPNxQJlnaLGtT819jzuNYT3gIgT5eKwZa%2FOXrSvZ4XC0Cz8nSZH4wWCT7kn1Ou5OFSVucq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDGgqTjIkZ8ws%2FBDu5ircAzwVc%2B9sP0YJ2bw%2F7UUFVrScz%2FUGNCk9CVObz8kYVyrI2xWJZ%2FxBqQ1lkElQrlbPOtXinBygA5aywiEyQobk%2BhUPF1R00fABV4VYS5uQYpDZG%2F4P%2FsQIRDTAPwYfNTtbjoQ8NvVEq3fAMhpCBazXD5oFdFMBFd22V%2F%2BlDLiqfGd0T0319KL%2FUvJwPU1xXhx8SQZg93gFnT1epKgjoD7oeYabgfUpfsrnOnDTSI8cxYzbJdz0jS5DQiqBptHC2kzWW1KB5RAGHRpZxlNiOs17Q0OGplo1LsZSOV7xBC%2FCCqvj4L7vHj93qL9T1lfUNkg6V0BcCOpyW7XuC%2BxxUQnuKe3R9i3wjq%2F2lgK1lRrP0Kyx%2FBopeoh5cYKq8AhlAM58%2Bj%2BxRqKZlLElne3v%2BB2YHRn7Mr%2BrpZqKYcuMbw06wqV6aeBybYbv4Ke25tlV5y8POyGltK%2B1410WRhQSsVjbh32TzdSS9t802Z2A5s1uT3KIHtdLlg6fG3IKZ322k3OGuB8%2Fmpw6Sy92cnMtDOvczbIl7nUezorjUY%2Bvp5uPQV2VMk1W1gu7YWeQ4UTsEUG%2B2%2BhAMvV6M2qI4VPHh8fDIjP5pCk%2FQJaKnAZHav7byl%2BAN6TFGqBxYRmQ5LQcMI3v5ccGOqUBXGmopRAIruddCWtUx1BYWfHPNTxJ4x1hj4yzITy7YPOLyvvGKSekUkV7FEMyyuTlC52ihk3TZLsisONCsRwQ%2BSfL%2FWszz9%2BSsCywyz%2BBgl446bmotxeqLUaxc3B3frHSQkAQkzaxrWaoYam6BFvon868zfmC0YAbjIJKglTXwcb0kiq4faPHvDMSYzvovX9vtmmA1to1YVSGEpSD25g%2F2PtumFM%2F&X-Amz-Signature=0aecf72f414a583c3e867ec9644c68ef844a0ee5ecdf8ad6921d2900b7590fb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QNL5DEW%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc9VYwGeVZUr%2Fyr9cV65KPNxQJlnaLGtT819jzuNYT3gIgT5eKwZa%2FOXrSvZ4XC0Cz8nSZH4wWCT7kn1Ou5OFSVucq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDGgqTjIkZ8ws%2FBDu5ircAzwVc%2B9sP0YJ2bw%2F7UUFVrScz%2FUGNCk9CVObz8kYVyrI2xWJZ%2FxBqQ1lkElQrlbPOtXinBygA5aywiEyQobk%2BhUPF1R00fABV4VYS5uQYpDZG%2F4P%2FsQIRDTAPwYfNTtbjoQ8NvVEq3fAMhpCBazXD5oFdFMBFd22V%2F%2BlDLiqfGd0T0319KL%2FUvJwPU1xXhx8SQZg93gFnT1epKgjoD7oeYabgfUpfsrnOnDTSI8cxYzbJdz0jS5DQiqBptHC2kzWW1KB5RAGHRpZxlNiOs17Q0OGplo1LsZSOV7xBC%2FCCqvj4L7vHj93qL9T1lfUNkg6V0BcCOpyW7XuC%2BxxUQnuKe3R9i3wjq%2F2lgK1lRrP0Kyx%2FBopeoh5cYKq8AhlAM58%2Bj%2BxRqKZlLElne3v%2BB2YHRn7Mr%2BrpZqKYcuMbw06wqV6aeBybYbv4Ke25tlV5y8POyGltK%2B1410WRhQSsVjbh32TzdSS9t802Z2A5s1uT3KIHtdLlg6fG3IKZ322k3OGuB8%2Fmpw6Sy92cnMtDOvczbIl7nUezorjUY%2Bvp5uPQV2VMk1W1gu7YWeQ4UTsEUG%2B2%2BhAMvV6M2qI4VPHh8fDIjP5pCk%2FQJaKnAZHav7byl%2BAN6TFGqBxYRmQ5LQcMI3v5ccGOqUBXGmopRAIruddCWtUx1BYWfHPNTxJ4x1hj4yzITy7YPOLyvvGKSekUkV7FEMyyuTlC52ihk3TZLsisONCsRwQ%2BSfL%2FWszz9%2BSsCywyz%2BBgl446bmotxeqLUaxc3B3frHSQkAQkzaxrWaoYam6BFvon868zfmC0YAbjIJKglTXwcb0kiq4faPHvDMSYzvovX9vtmmA1to1YVSGEpSD25g%2F2PtumFM%2F&X-Amz-Signature=d62d78f4c7ba7fe4d0a1dbb5e0b38a9311e3efe84506e37f041418f8615dab95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QNL5DEW%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc9VYwGeVZUr%2Fyr9cV65KPNxQJlnaLGtT819jzuNYT3gIgT5eKwZa%2FOXrSvZ4XC0Cz8nSZH4wWCT7kn1Ou5OFSVucq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDGgqTjIkZ8ws%2FBDu5ircAzwVc%2B9sP0YJ2bw%2F7UUFVrScz%2FUGNCk9CVObz8kYVyrI2xWJZ%2FxBqQ1lkElQrlbPOtXinBygA5aywiEyQobk%2BhUPF1R00fABV4VYS5uQYpDZG%2F4P%2FsQIRDTAPwYfNTtbjoQ8NvVEq3fAMhpCBazXD5oFdFMBFd22V%2F%2BlDLiqfGd0T0319KL%2FUvJwPU1xXhx8SQZg93gFnT1epKgjoD7oeYabgfUpfsrnOnDTSI8cxYzbJdz0jS5DQiqBptHC2kzWW1KB5RAGHRpZxlNiOs17Q0OGplo1LsZSOV7xBC%2FCCqvj4L7vHj93qL9T1lfUNkg6V0BcCOpyW7XuC%2BxxUQnuKe3R9i3wjq%2F2lgK1lRrP0Kyx%2FBopeoh5cYKq8AhlAM58%2Bj%2BxRqKZlLElne3v%2BB2YHRn7Mr%2BrpZqKYcuMbw06wqV6aeBybYbv4Ke25tlV5y8POyGltK%2B1410WRhQSsVjbh32TzdSS9t802Z2A5s1uT3KIHtdLlg6fG3IKZ322k3OGuB8%2Fmpw6Sy92cnMtDOvczbIl7nUezorjUY%2Bvp5uPQV2VMk1W1gu7YWeQ4UTsEUG%2B2%2BhAMvV6M2qI4VPHh8fDIjP5pCk%2FQJaKnAZHav7byl%2BAN6TFGqBxYRmQ5LQcMI3v5ccGOqUBXGmopRAIruddCWtUx1BYWfHPNTxJ4x1hj4yzITy7YPOLyvvGKSekUkV7FEMyyuTlC52ihk3TZLsisONCsRwQ%2BSfL%2FWszz9%2BSsCywyz%2BBgl446bmotxeqLUaxc3B3frHSQkAQkzaxrWaoYam6BFvon868zfmC0YAbjIJKglTXwcb0kiq4faPHvDMSYzvovX9vtmmA1to1YVSGEpSD25g%2F2PtumFM%2F&X-Amz-Signature=75643534f957287f0ca11c4c7d5c517573503b8dd1444694b95cd9f46a14d3a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QNL5DEW%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc9VYwGeVZUr%2Fyr9cV65KPNxQJlnaLGtT819jzuNYT3gIgT5eKwZa%2FOXrSvZ4XC0Cz8nSZH4wWCT7kn1Ou5OFSVucq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDGgqTjIkZ8ws%2FBDu5ircAzwVc%2B9sP0YJ2bw%2F7UUFVrScz%2FUGNCk9CVObz8kYVyrI2xWJZ%2FxBqQ1lkElQrlbPOtXinBygA5aywiEyQobk%2BhUPF1R00fABV4VYS5uQYpDZG%2F4P%2FsQIRDTAPwYfNTtbjoQ8NvVEq3fAMhpCBazXD5oFdFMBFd22V%2F%2BlDLiqfGd0T0319KL%2FUvJwPU1xXhx8SQZg93gFnT1epKgjoD7oeYabgfUpfsrnOnDTSI8cxYzbJdz0jS5DQiqBptHC2kzWW1KB5RAGHRpZxlNiOs17Q0OGplo1LsZSOV7xBC%2FCCqvj4L7vHj93qL9T1lfUNkg6V0BcCOpyW7XuC%2BxxUQnuKe3R9i3wjq%2F2lgK1lRrP0Kyx%2FBopeoh5cYKq8AhlAM58%2Bj%2BxRqKZlLElne3v%2BB2YHRn7Mr%2BrpZqKYcuMbw06wqV6aeBybYbv4Ke25tlV5y8POyGltK%2B1410WRhQSsVjbh32TzdSS9t802Z2A5s1uT3KIHtdLlg6fG3IKZ322k3OGuB8%2Fmpw6Sy92cnMtDOvczbIl7nUezorjUY%2Bvp5uPQV2VMk1W1gu7YWeQ4UTsEUG%2B2%2BhAMvV6M2qI4VPHh8fDIjP5pCk%2FQJaKnAZHav7byl%2BAN6TFGqBxYRmQ5LQcMI3v5ccGOqUBXGmopRAIruddCWtUx1BYWfHPNTxJ4x1hj4yzITy7YPOLyvvGKSekUkV7FEMyyuTlC52ihk3TZLsisONCsRwQ%2BSfL%2FWszz9%2BSsCywyz%2BBgl446bmotxeqLUaxc3B3frHSQkAQkzaxrWaoYam6BFvon868zfmC0YAbjIJKglTXwcb0kiq4faPHvDMSYzvovX9vtmmA1to1YVSGEpSD25g%2F2PtumFM%2F&X-Amz-Signature=f81be862cab622a18dd3d41d491b17a75a2c874a6d59f73372a37f7ecf609639&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QNL5DEW%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc9VYwGeVZUr%2Fyr9cV65KPNxQJlnaLGtT819jzuNYT3gIgT5eKwZa%2FOXrSvZ4XC0Cz8nSZH4wWCT7kn1Ou5OFSVucq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDGgqTjIkZ8ws%2FBDu5ircAzwVc%2B9sP0YJ2bw%2F7UUFVrScz%2FUGNCk9CVObz8kYVyrI2xWJZ%2FxBqQ1lkElQrlbPOtXinBygA5aywiEyQobk%2BhUPF1R00fABV4VYS5uQYpDZG%2F4P%2FsQIRDTAPwYfNTtbjoQ8NvVEq3fAMhpCBazXD5oFdFMBFd22V%2F%2BlDLiqfGd0T0319KL%2FUvJwPU1xXhx8SQZg93gFnT1epKgjoD7oeYabgfUpfsrnOnDTSI8cxYzbJdz0jS5DQiqBptHC2kzWW1KB5RAGHRpZxlNiOs17Q0OGplo1LsZSOV7xBC%2FCCqvj4L7vHj93qL9T1lfUNkg6V0BcCOpyW7XuC%2BxxUQnuKe3R9i3wjq%2F2lgK1lRrP0Kyx%2FBopeoh5cYKq8AhlAM58%2Bj%2BxRqKZlLElne3v%2BB2YHRn7Mr%2BrpZqKYcuMbw06wqV6aeBybYbv4Ke25tlV5y8POyGltK%2B1410WRhQSsVjbh32TzdSS9t802Z2A5s1uT3KIHtdLlg6fG3IKZ322k3OGuB8%2Fmpw6Sy92cnMtDOvczbIl7nUezorjUY%2Bvp5uPQV2VMk1W1gu7YWeQ4UTsEUG%2B2%2BhAMvV6M2qI4VPHh8fDIjP5pCk%2FQJaKnAZHav7byl%2BAN6TFGqBxYRmQ5LQcMI3v5ccGOqUBXGmopRAIruddCWtUx1BYWfHPNTxJ4x1hj4yzITy7YPOLyvvGKSekUkV7FEMyyuTlC52ihk3TZLsisONCsRwQ%2BSfL%2FWszz9%2BSsCywyz%2BBgl446bmotxeqLUaxc3B3frHSQkAQkzaxrWaoYam6BFvon868zfmC0YAbjIJKglTXwcb0kiq4faPHvDMSYzvovX9vtmmA1to1YVSGEpSD25g%2F2PtumFM%2F&X-Amz-Signature=8d06cb3092a7d1f5d59d09ed89f68ec13c31c3aa545516de9017073012277f97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QNL5DEW%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc9VYwGeVZUr%2Fyr9cV65KPNxQJlnaLGtT819jzuNYT3gIgT5eKwZa%2FOXrSvZ4XC0Cz8nSZH4wWCT7kn1Ou5OFSVucq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDGgqTjIkZ8ws%2FBDu5ircAzwVc%2B9sP0YJ2bw%2F7UUFVrScz%2FUGNCk9CVObz8kYVyrI2xWJZ%2FxBqQ1lkElQrlbPOtXinBygA5aywiEyQobk%2BhUPF1R00fABV4VYS5uQYpDZG%2F4P%2FsQIRDTAPwYfNTtbjoQ8NvVEq3fAMhpCBazXD5oFdFMBFd22V%2F%2BlDLiqfGd0T0319KL%2FUvJwPU1xXhx8SQZg93gFnT1epKgjoD7oeYabgfUpfsrnOnDTSI8cxYzbJdz0jS5DQiqBptHC2kzWW1KB5RAGHRpZxlNiOs17Q0OGplo1LsZSOV7xBC%2FCCqvj4L7vHj93qL9T1lfUNkg6V0BcCOpyW7XuC%2BxxUQnuKe3R9i3wjq%2F2lgK1lRrP0Kyx%2FBopeoh5cYKq8AhlAM58%2Bj%2BxRqKZlLElne3v%2BB2YHRn7Mr%2BrpZqKYcuMbw06wqV6aeBybYbv4Ke25tlV5y8POyGltK%2B1410WRhQSsVjbh32TzdSS9t802Z2A5s1uT3KIHtdLlg6fG3IKZ322k3OGuB8%2Fmpw6Sy92cnMtDOvczbIl7nUezorjUY%2Bvp5uPQV2VMk1W1gu7YWeQ4UTsEUG%2B2%2BhAMvV6M2qI4VPHh8fDIjP5pCk%2FQJaKnAZHav7byl%2BAN6TFGqBxYRmQ5LQcMI3v5ccGOqUBXGmopRAIruddCWtUx1BYWfHPNTxJ4x1hj4yzITy7YPOLyvvGKSekUkV7FEMyyuTlC52ihk3TZLsisONCsRwQ%2BSfL%2FWszz9%2BSsCywyz%2BBgl446bmotxeqLUaxc3B3frHSQkAQkzaxrWaoYam6BFvon868zfmC0YAbjIJKglTXwcb0kiq4faPHvDMSYzvovX9vtmmA1to1YVSGEpSD25g%2F2PtumFM%2F&X-Amz-Signature=f871c66f4f442d69ed7379579ca5db36aafc62a894cce89804581b52252e7bb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QNL5DEW%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc9VYwGeVZUr%2Fyr9cV65KPNxQJlnaLGtT819jzuNYT3gIgT5eKwZa%2FOXrSvZ4XC0Cz8nSZH4wWCT7kn1Ou5OFSVucq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDGgqTjIkZ8ws%2FBDu5ircAzwVc%2B9sP0YJ2bw%2F7UUFVrScz%2FUGNCk9CVObz8kYVyrI2xWJZ%2FxBqQ1lkElQrlbPOtXinBygA5aywiEyQobk%2BhUPF1R00fABV4VYS5uQYpDZG%2F4P%2FsQIRDTAPwYfNTtbjoQ8NvVEq3fAMhpCBazXD5oFdFMBFd22V%2F%2BlDLiqfGd0T0319KL%2FUvJwPU1xXhx8SQZg93gFnT1epKgjoD7oeYabgfUpfsrnOnDTSI8cxYzbJdz0jS5DQiqBptHC2kzWW1KB5RAGHRpZxlNiOs17Q0OGplo1LsZSOV7xBC%2FCCqvj4L7vHj93qL9T1lfUNkg6V0BcCOpyW7XuC%2BxxUQnuKe3R9i3wjq%2F2lgK1lRrP0Kyx%2FBopeoh5cYKq8AhlAM58%2Bj%2BxRqKZlLElne3v%2BB2YHRn7Mr%2BrpZqKYcuMbw06wqV6aeBybYbv4Ke25tlV5y8POyGltK%2B1410WRhQSsVjbh32TzdSS9t802Z2A5s1uT3KIHtdLlg6fG3IKZ322k3OGuB8%2Fmpw6Sy92cnMtDOvczbIl7nUezorjUY%2Bvp5uPQV2VMk1W1gu7YWeQ4UTsEUG%2B2%2BhAMvV6M2qI4VPHh8fDIjP5pCk%2FQJaKnAZHav7byl%2BAN6TFGqBxYRmQ5LQcMI3v5ccGOqUBXGmopRAIruddCWtUx1BYWfHPNTxJ4x1hj4yzITy7YPOLyvvGKSekUkV7FEMyyuTlC52ihk3TZLsisONCsRwQ%2BSfL%2FWszz9%2BSsCywyz%2BBgl446bmotxeqLUaxc3B3frHSQkAQkzaxrWaoYam6BFvon868zfmC0YAbjIJKglTXwcb0kiq4faPHvDMSYzvovX9vtmmA1to1YVSGEpSD25g%2F2PtumFM%2F&X-Amz-Signature=c62a3bfe43a0dbb4a42567342cf30965b928cf2619302f5125babce2a4ec3fd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QNL5DEW%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc9VYwGeVZUr%2Fyr9cV65KPNxQJlnaLGtT819jzuNYT3gIgT5eKwZa%2FOXrSvZ4XC0Cz8nSZH4wWCT7kn1Ou5OFSVucq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDGgqTjIkZ8ws%2FBDu5ircAzwVc%2B9sP0YJ2bw%2F7UUFVrScz%2FUGNCk9CVObz8kYVyrI2xWJZ%2FxBqQ1lkElQrlbPOtXinBygA5aywiEyQobk%2BhUPF1R00fABV4VYS5uQYpDZG%2F4P%2FsQIRDTAPwYfNTtbjoQ8NvVEq3fAMhpCBazXD5oFdFMBFd22V%2F%2BlDLiqfGd0T0319KL%2FUvJwPU1xXhx8SQZg93gFnT1epKgjoD7oeYabgfUpfsrnOnDTSI8cxYzbJdz0jS5DQiqBptHC2kzWW1KB5RAGHRpZxlNiOs17Q0OGplo1LsZSOV7xBC%2FCCqvj4L7vHj93qL9T1lfUNkg6V0BcCOpyW7XuC%2BxxUQnuKe3R9i3wjq%2F2lgK1lRrP0Kyx%2FBopeoh5cYKq8AhlAM58%2Bj%2BxRqKZlLElne3v%2BB2YHRn7Mr%2BrpZqKYcuMbw06wqV6aeBybYbv4Ke25tlV5y8POyGltK%2B1410WRhQSsVjbh32TzdSS9t802Z2A5s1uT3KIHtdLlg6fG3IKZ322k3OGuB8%2Fmpw6Sy92cnMtDOvczbIl7nUezorjUY%2Bvp5uPQV2VMk1W1gu7YWeQ4UTsEUG%2B2%2BhAMvV6M2qI4VPHh8fDIjP5pCk%2FQJaKnAZHav7byl%2BAN6TFGqBxYRmQ5LQcMI3v5ccGOqUBXGmopRAIruddCWtUx1BYWfHPNTxJ4x1hj4yzITy7YPOLyvvGKSekUkV7FEMyyuTlC52ihk3TZLsisONCsRwQ%2BSfL%2FWszz9%2BSsCywyz%2BBgl446bmotxeqLUaxc3B3frHSQkAQkzaxrWaoYam6BFvon868zfmC0YAbjIJKglTXwcb0kiq4faPHvDMSYzvovX9vtmmA1to1YVSGEpSD25g%2F2PtumFM%2F&X-Amz-Signature=f6da60815fb2e035dee835ae2387e4ea501df5775edbbeee9ef94789914ef8e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QNL5DEW%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc9VYwGeVZUr%2Fyr9cV65KPNxQJlnaLGtT819jzuNYT3gIgT5eKwZa%2FOXrSvZ4XC0Cz8nSZH4wWCT7kn1Ou5OFSVucq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDGgqTjIkZ8ws%2FBDu5ircAzwVc%2B9sP0YJ2bw%2F7UUFVrScz%2FUGNCk9CVObz8kYVyrI2xWJZ%2FxBqQ1lkElQrlbPOtXinBygA5aywiEyQobk%2BhUPF1R00fABV4VYS5uQYpDZG%2F4P%2FsQIRDTAPwYfNTtbjoQ8NvVEq3fAMhpCBazXD5oFdFMBFd22V%2F%2BlDLiqfGd0T0319KL%2FUvJwPU1xXhx8SQZg93gFnT1epKgjoD7oeYabgfUpfsrnOnDTSI8cxYzbJdz0jS5DQiqBptHC2kzWW1KB5RAGHRpZxlNiOs17Q0OGplo1LsZSOV7xBC%2FCCqvj4L7vHj93qL9T1lfUNkg6V0BcCOpyW7XuC%2BxxUQnuKe3R9i3wjq%2F2lgK1lRrP0Kyx%2FBopeoh5cYKq8AhlAM58%2Bj%2BxRqKZlLElne3v%2BB2YHRn7Mr%2BrpZqKYcuMbw06wqV6aeBybYbv4Ke25tlV5y8POyGltK%2B1410WRhQSsVjbh32TzdSS9t802Z2A5s1uT3KIHtdLlg6fG3IKZ322k3OGuB8%2Fmpw6Sy92cnMtDOvczbIl7nUezorjUY%2Bvp5uPQV2VMk1W1gu7YWeQ4UTsEUG%2B2%2BhAMvV6M2qI4VPHh8fDIjP5pCk%2FQJaKnAZHav7byl%2BAN6TFGqBxYRmQ5LQcMI3v5ccGOqUBXGmopRAIruddCWtUx1BYWfHPNTxJ4x1hj4yzITy7YPOLyvvGKSekUkV7FEMyyuTlC52ihk3TZLsisONCsRwQ%2BSfL%2FWszz9%2BSsCywyz%2BBgl446bmotxeqLUaxc3B3frHSQkAQkzaxrWaoYam6BFvon868zfmC0YAbjIJKglTXwcb0kiq4faPHvDMSYzvovX9vtmmA1to1YVSGEpSD25g%2F2PtumFM%2F&X-Amz-Signature=bcc8e82bb7791d4ddcca9286fa38787368ae5c6bd516eac5d434620255c9dbdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QNL5DEW%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc9VYwGeVZUr%2Fyr9cV65KPNxQJlnaLGtT819jzuNYT3gIgT5eKwZa%2FOXrSvZ4XC0Cz8nSZH4wWCT7kn1Ou5OFSVucq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDGgqTjIkZ8ws%2FBDu5ircAzwVc%2B9sP0YJ2bw%2F7UUFVrScz%2FUGNCk9CVObz8kYVyrI2xWJZ%2FxBqQ1lkElQrlbPOtXinBygA5aywiEyQobk%2BhUPF1R00fABV4VYS5uQYpDZG%2F4P%2FsQIRDTAPwYfNTtbjoQ8NvVEq3fAMhpCBazXD5oFdFMBFd22V%2F%2BlDLiqfGd0T0319KL%2FUvJwPU1xXhx8SQZg93gFnT1epKgjoD7oeYabgfUpfsrnOnDTSI8cxYzbJdz0jS5DQiqBptHC2kzWW1KB5RAGHRpZxlNiOs17Q0OGplo1LsZSOV7xBC%2FCCqvj4L7vHj93qL9T1lfUNkg6V0BcCOpyW7XuC%2BxxUQnuKe3R9i3wjq%2F2lgK1lRrP0Kyx%2FBopeoh5cYKq8AhlAM58%2Bj%2BxRqKZlLElne3v%2BB2YHRn7Mr%2BrpZqKYcuMbw06wqV6aeBybYbv4Ke25tlV5y8POyGltK%2B1410WRhQSsVjbh32TzdSS9t802Z2A5s1uT3KIHtdLlg6fG3IKZ322k3OGuB8%2Fmpw6Sy92cnMtDOvczbIl7nUezorjUY%2Bvp5uPQV2VMk1W1gu7YWeQ4UTsEUG%2B2%2BhAMvV6M2qI4VPHh8fDIjP5pCk%2FQJaKnAZHav7byl%2BAN6TFGqBxYRmQ5LQcMI3v5ccGOqUBXGmopRAIruddCWtUx1BYWfHPNTxJ4x1hj4yzITy7YPOLyvvGKSekUkV7FEMyyuTlC52ihk3TZLsisONCsRwQ%2BSfL%2FWszz9%2BSsCywyz%2BBgl446bmotxeqLUaxc3B3frHSQkAQkzaxrWaoYam6BFvon868zfmC0YAbjIJKglTXwcb0kiq4faPHvDMSYzvovX9vtmmA1to1YVSGEpSD25g%2F2PtumFM%2F&X-Amz-Signature=d36b3356ba0abc63058444802a95dfbca4228d8e9cfe3fc610d6a377bb4e47da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QNL5DEW%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc9VYwGeVZUr%2Fyr9cV65KPNxQJlnaLGtT819jzuNYT3gIgT5eKwZa%2FOXrSvZ4XC0Cz8nSZH4wWCT7kn1Ou5OFSVucq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDGgqTjIkZ8ws%2FBDu5ircAzwVc%2B9sP0YJ2bw%2F7UUFVrScz%2FUGNCk9CVObz8kYVyrI2xWJZ%2FxBqQ1lkElQrlbPOtXinBygA5aywiEyQobk%2BhUPF1R00fABV4VYS5uQYpDZG%2F4P%2FsQIRDTAPwYfNTtbjoQ8NvVEq3fAMhpCBazXD5oFdFMBFd22V%2F%2BlDLiqfGd0T0319KL%2FUvJwPU1xXhx8SQZg93gFnT1epKgjoD7oeYabgfUpfsrnOnDTSI8cxYzbJdz0jS5DQiqBptHC2kzWW1KB5RAGHRpZxlNiOs17Q0OGplo1LsZSOV7xBC%2FCCqvj4L7vHj93qL9T1lfUNkg6V0BcCOpyW7XuC%2BxxUQnuKe3R9i3wjq%2F2lgK1lRrP0Kyx%2FBopeoh5cYKq8AhlAM58%2Bj%2BxRqKZlLElne3v%2BB2YHRn7Mr%2BrpZqKYcuMbw06wqV6aeBybYbv4Ke25tlV5y8POyGltK%2B1410WRhQSsVjbh32TzdSS9t802Z2A5s1uT3KIHtdLlg6fG3IKZ322k3OGuB8%2Fmpw6Sy92cnMtDOvczbIl7nUezorjUY%2Bvp5uPQV2VMk1W1gu7YWeQ4UTsEUG%2B2%2BhAMvV6M2qI4VPHh8fDIjP5pCk%2FQJaKnAZHav7byl%2BAN6TFGqBxYRmQ5LQcMI3v5ccGOqUBXGmopRAIruddCWtUx1BYWfHPNTxJ4x1hj4yzITy7YPOLyvvGKSekUkV7FEMyyuTlC52ihk3TZLsisONCsRwQ%2BSfL%2FWszz9%2BSsCywyz%2BBgl446bmotxeqLUaxc3B3frHSQkAQkzaxrWaoYam6BFvon868zfmC0YAbjIJKglTXwcb0kiq4faPHvDMSYzvovX9vtmmA1to1YVSGEpSD25g%2F2PtumFM%2F&X-Amz-Signature=16e06153752a2b61711816cb2ce3adf8b22bbe802a683d4160ffcc2e7e65b535&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QNL5DEW%2F20251023%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251023T012719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDc9VYwGeVZUr%2Fyr9cV65KPNxQJlnaLGtT819jzuNYT3gIgT5eKwZa%2FOXrSvZ4XC0Cz8nSZH4wWCT7kn1Ou5OFSVucq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDGgqTjIkZ8ws%2FBDu5ircAzwVc%2B9sP0YJ2bw%2F7UUFVrScz%2FUGNCk9CVObz8kYVyrI2xWJZ%2FxBqQ1lkElQrlbPOtXinBygA5aywiEyQobk%2BhUPF1R00fABV4VYS5uQYpDZG%2F4P%2FsQIRDTAPwYfNTtbjoQ8NvVEq3fAMhpCBazXD5oFdFMBFd22V%2F%2BlDLiqfGd0T0319KL%2FUvJwPU1xXhx8SQZg93gFnT1epKgjoD7oeYabgfUpfsrnOnDTSI8cxYzbJdz0jS5DQiqBptHC2kzWW1KB5RAGHRpZxlNiOs17Q0OGplo1LsZSOV7xBC%2FCCqvj4L7vHj93qL9T1lfUNkg6V0BcCOpyW7XuC%2BxxUQnuKe3R9i3wjq%2F2lgK1lRrP0Kyx%2FBopeoh5cYKq8AhlAM58%2Bj%2BxRqKZlLElne3v%2BB2YHRn7Mr%2BrpZqKYcuMbw06wqV6aeBybYbv4Ke25tlV5y8POyGltK%2B1410WRhQSsVjbh32TzdSS9t802Z2A5s1uT3KIHtdLlg6fG3IKZ322k3OGuB8%2Fmpw6Sy92cnMtDOvczbIl7nUezorjUY%2Bvp5uPQV2VMk1W1gu7YWeQ4UTsEUG%2B2%2BhAMvV6M2qI4VPHh8fDIjP5pCk%2FQJaKnAZHav7byl%2BAN6TFGqBxYRmQ5LQcMI3v5ccGOqUBXGmopRAIruddCWtUx1BYWfHPNTxJ4x1hj4yzITy7YPOLyvvGKSekUkV7FEMyyuTlC52ihk3TZLsisONCsRwQ%2BSfL%2FWszz9%2BSsCywyz%2BBgl446bmotxeqLUaxc3B3frHSQkAQkzaxrWaoYam6BFvon868zfmC0YAbjIJKglTXwcb0kiq4faPHvDMSYzvovX9vtmmA1to1YVSGEpSD25g%2F2PtumFM%2F&X-Amz-Signature=126191e1139238a46d68fefa6f33f9245d7cff596738df277cdf2889cc7da52b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
