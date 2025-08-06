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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSVSJUJQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCHJlAUefAUAsWGKWdkDqFnjSwsE8F4K2I1oW%2FZtx8jhQIgeFoWlZsvI%2F5Meglbf2buUQxVHRhDj4JAE4unZH0WdL0q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDCUb5KJJpV%2FnQ4vQayrcA%2Boixs%2BjEX6Iqu67NCH8vFzlRIEKv9q7%2B8uuMdQ7IDliVyqeLuULgTVQc4H6UluCT9gP1Io8cAvCe3RwPrM1%2Foalu%2B%2F%2FK%2BKvAd6V4qv2p9969fq3PcSYy%2Fp2nyERRsZsGmJczFSu3Vhfga%2BmkVp%2FLwiY1mRoT3AXS4EA8ErxJ15i6408%2FtWbtxbIxU3DmyODg5u8oOiS20eTqWgMfu9QI87etgPJ7sFm%2FE986Sfa4BLdh0Y%2Bgan60QpyVto6mlaaKDPGsNvqdpBPRl5y0PUIYjF3uFyeY4D2LXaR8FyvKI8Qp0Ro1j%2FsRW2mWuTtTNShlp5iGHo7dC1h7wRbB7teMlDXODNCKMgmzU7Fgi6jSljP5UnWPE%2BzvdZ9UwOSlnLTj83xzY6kGTfYoGCBiJo6oFGh3LcKgw7537QV87kpd5wq1%2BHw4zH07pKDk6sxJeFXCsKMNjoBPDgyoGPB05Tzz7tYeREG3t8U74Ratga5tOC2alEFNRh0jTC0ao1a9rMy1uuN28Z7G%2BrRQIsca%2Bs7BibGSjKtKsbzbO3t4cb26uoBV02sNzUuz7dSnVVFI3KZpIHHpwGrEsJQT5mk7PHsRiXJNWIEqq4qYUJcstMba7MLUE9Y5lazCVJ%2BNfVMML3Ly8QGOqUBhc2Fw6%2F3ihqcmKKroG2wM8LiCyoohlk3wo6m%2Fv7bBUHQ6i2bV0bjQGvzA2H0on%2BWcQtd2IUXPILqBisH9QH1Gd0zZQ%2BpOlNnudMpDQ3xWLWMu4Jb2rJAp824c9la37NjpX5tQbqI8pbQKLcX%2Beao%2FZVaubhGvJ1Z2xtqG3WgOk31jUvYSBaNqXSL%2BxybRmhgEGXSMxA1UwkGzAmqwW2nml%2FeBkfs&X-Amz-Signature=26a7e62d4ac59af5d4dadaf3b3c5dc32928cd2d0362efa52f7e33d781f842262&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSVSJUJQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCHJlAUefAUAsWGKWdkDqFnjSwsE8F4K2I1oW%2FZtx8jhQIgeFoWlZsvI%2F5Meglbf2buUQxVHRhDj4JAE4unZH0WdL0q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDCUb5KJJpV%2FnQ4vQayrcA%2Boixs%2BjEX6Iqu67NCH8vFzlRIEKv9q7%2B8uuMdQ7IDliVyqeLuULgTVQc4H6UluCT9gP1Io8cAvCe3RwPrM1%2Foalu%2B%2F%2FK%2BKvAd6V4qv2p9969fq3PcSYy%2Fp2nyERRsZsGmJczFSu3Vhfga%2BmkVp%2FLwiY1mRoT3AXS4EA8ErxJ15i6408%2FtWbtxbIxU3DmyODg5u8oOiS20eTqWgMfu9QI87etgPJ7sFm%2FE986Sfa4BLdh0Y%2Bgan60QpyVto6mlaaKDPGsNvqdpBPRl5y0PUIYjF3uFyeY4D2LXaR8FyvKI8Qp0Ro1j%2FsRW2mWuTtTNShlp5iGHo7dC1h7wRbB7teMlDXODNCKMgmzU7Fgi6jSljP5UnWPE%2BzvdZ9UwOSlnLTj83xzY6kGTfYoGCBiJo6oFGh3LcKgw7537QV87kpd5wq1%2BHw4zH07pKDk6sxJeFXCsKMNjoBPDgyoGPB05Tzz7tYeREG3t8U74Ratga5tOC2alEFNRh0jTC0ao1a9rMy1uuN28Z7G%2BrRQIsca%2Bs7BibGSjKtKsbzbO3t4cb26uoBV02sNzUuz7dSnVVFI3KZpIHHpwGrEsJQT5mk7PHsRiXJNWIEqq4qYUJcstMba7MLUE9Y5lazCVJ%2BNfVMML3Ly8QGOqUBhc2Fw6%2F3ihqcmKKroG2wM8LiCyoohlk3wo6m%2Fv7bBUHQ6i2bV0bjQGvzA2H0on%2BWcQtd2IUXPILqBisH9QH1Gd0zZQ%2BpOlNnudMpDQ3xWLWMu4Jb2rJAp824c9la37NjpX5tQbqI8pbQKLcX%2Beao%2FZVaubhGvJ1Z2xtqG3WgOk31jUvYSBaNqXSL%2BxybRmhgEGXSMxA1UwkGzAmqwW2nml%2FeBkfs&X-Amz-Signature=6f7bf4344d65692b75a434ac7a7ddc13076c8a2a3d8ef521663bf7ac1332dbba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSVSJUJQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCHJlAUefAUAsWGKWdkDqFnjSwsE8F4K2I1oW%2FZtx8jhQIgeFoWlZsvI%2F5Meglbf2buUQxVHRhDj4JAE4unZH0WdL0q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDCUb5KJJpV%2FnQ4vQayrcA%2Boixs%2BjEX6Iqu67NCH8vFzlRIEKv9q7%2B8uuMdQ7IDliVyqeLuULgTVQc4H6UluCT9gP1Io8cAvCe3RwPrM1%2Foalu%2B%2F%2FK%2BKvAd6V4qv2p9969fq3PcSYy%2Fp2nyERRsZsGmJczFSu3Vhfga%2BmkVp%2FLwiY1mRoT3AXS4EA8ErxJ15i6408%2FtWbtxbIxU3DmyODg5u8oOiS20eTqWgMfu9QI87etgPJ7sFm%2FE986Sfa4BLdh0Y%2Bgan60QpyVto6mlaaKDPGsNvqdpBPRl5y0PUIYjF3uFyeY4D2LXaR8FyvKI8Qp0Ro1j%2FsRW2mWuTtTNShlp5iGHo7dC1h7wRbB7teMlDXODNCKMgmzU7Fgi6jSljP5UnWPE%2BzvdZ9UwOSlnLTj83xzY6kGTfYoGCBiJo6oFGh3LcKgw7537QV87kpd5wq1%2BHw4zH07pKDk6sxJeFXCsKMNjoBPDgyoGPB05Tzz7tYeREG3t8U74Ratga5tOC2alEFNRh0jTC0ao1a9rMy1uuN28Z7G%2BrRQIsca%2Bs7BibGSjKtKsbzbO3t4cb26uoBV02sNzUuz7dSnVVFI3KZpIHHpwGrEsJQT5mk7PHsRiXJNWIEqq4qYUJcstMba7MLUE9Y5lazCVJ%2BNfVMML3Ly8QGOqUBhc2Fw6%2F3ihqcmKKroG2wM8LiCyoohlk3wo6m%2Fv7bBUHQ6i2bV0bjQGvzA2H0on%2BWcQtd2IUXPILqBisH9QH1Gd0zZQ%2BpOlNnudMpDQ3xWLWMu4Jb2rJAp824c9la37NjpX5tQbqI8pbQKLcX%2Beao%2FZVaubhGvJ1Z2xtqG3WgOk31jUvYSBaNqXSL%2BxybRmhgEGXSMxA1UwkGzAmqwW2nml%2FeBkfs&X-Amz-Signature=760df309b09de3019d09297700f3e8721a863622eceb674ba22623b0aa49c185&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSVSJUJQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCHJlAUefAUAsWGKWdkDqFnjSwsE8F4K2I1oW%2FZtx8jhQIgeFoWlZsvI%2F5Meglbf2buUQxVHRhDj4JAE4unZH0WdL0q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDCUb5KJJpV%2FnQ4vQayrcA%2Boixs%2BjEX6Iqu67NCH8vFzlRIEKv9q7%2B8uuMdQ7IDliVyqeLuULgTVQc4H6UluCT9gP1Io8cAvCe3RwPrM1%2Foalu%2B%2F%2FK%2BKvAd6V4qv2p9969fq3PcSYy%2Fp2nyERRsZsGmJczFSu3Vhfga%2BmkVp%2FLwiY1mRoT3AXS4EA8ErxJ15i6408%2FtWbtxbIxU3DmyODg5u8oOiS20eTqWgMfu9QI87etgPJ7sFm%2FE986Sfa4BLdh0Y%2Bgan60QpyVto6mlaaKDPGsNvqdpBPRl5y0PUIYjF3uFyeY4D2LXaR8FyvKI8Qp0Ro1j%2FsRW2mWuTtTNShlp5iGHo7dC1h7wRbB7teMlDXODNCKMgmzU7Fgi6jSljP5UnWPE%2BzvdZ9UwOSlnLTj83xzY6kGTfYoGCBiJo6oFGh3LcKgw7537QV87kpd5wq1%2BHw4zH07pKDk6sxJeFXCsKMNjoBPDgyoGPB05Tzz7tYeREG3t8U74Ratga5tOC2alEFNRh0jTC0ao1a9rMy1uuN28Z7G%2BrRQIsca%2Bs7BibGSjKtKsbzbO3t4cb26uoBV02sNzUuz7dSnVVFI3KZpIHHpwGrEsJQT5mk7PHsRiXJNWIEqq4qYUJcstMba7MLUE9Y5lazCVJ%2BNfVMML3Ly8QGOqUBhc2Fw6%2F3ihqcmKKroG2wM8LiCyoohlk3wo6m%2Fv7bBUHQ6i2bV0bjQGvzA2H0on%2BWcQtd2IUXPILqBisH9QH1Gd0zZQ%2BpOlNnudMpDQ3xWLWMu4Jb2rJAp824c9la37NjpX5tQbqI8pbQKLcX%2Beao%2FZVaubhGvJ1Z2xtqG3WgOk31jUvYSBaNqXSL%2BxybRmhgEGXSMxA1UwkGzAmqwW2nml%2FeBkfs&X-Amz-Signature=5d975eb7882a7d25455f904a2967392b521806deb4f947b195a7a0a69b4465bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSVSJUJQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCHJlAUefAUAsWGKWdkDqFnjSwsE8F4K2I1oW%2FZtx8jhQIgeFoWlZsvI%2F5Meglbf2buUQxVHRhDj4JAE4unZH0WdL0q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDCUb5KJJpV%2FnQ4vQayrcA%2Boixs%2BjEX6Iqu67NCH8vFzlRIEKv9q7%2B8uuMdQ7IDliVyqeLuULgTVQc4H6UluCT9gP1Io8cAvCe3RwPrM1%2Foalu%2B%2F%2FK%2BKvAd6V4qv2p9969fq3PcSYy%2Fp2nyERRsZsGmJczFSu3Vhfga%2BmkVp%2FLwiY1mRoT3AXS4EA8ErxJ15i6408%2FtWbtxbIxU3DmyODg5u8oOiS20eTqWgMfu9QI87etgPJ7sFm%2FE986Sfa4BLdh0Y%2Bgan60QpyVto6mlaaKDPGsNvqdpBPRl5y0PUIYjF3uFyeY4D2LXaR8FyvKI8Qp0Ro1j%2FsRW2mWuTtTNShlp5iGHo7dC1h7wRbB7teMlDXODNCKMgmzU7Fgi6jSljP5UnWPE%2BzvdZ9UwOSlnLTj83xzY6kGTfYoGCBiJo6oFGh3LcKgw7537QV87kpd5wq1%2BHw4zH07pKDk6sxJeFXCsKMNjoBPDgyoGPB05Tzz7tYeREG3t8U74Ratga5tOC2alEFNRh0jTC0ao1a9rMy1uuN28Z7G%2BrRQIsca%2Bs7BibGSjKtKsbzbO3t4cb26uoBV02sNzUuz7dSnVVFI3KZpIHHpwGrEsJQT5mk7PHsRiXJNWIEqq4qYUJcstMba7MLUE9Y5lazCVJ%2BNfVMML3Ly8QGOqUBhc2Fw6%2F3ihqcmKKroG2wM8LiCyoohlk3wo6m%2Fv7bBUHQ6i2bV0bjQGvzA2H0on%2BWcQtd2IUXPILqBisH9QH1Gd0zZQ%2BpOlNnudMpDQ3xWLWMu4Jb2rJAp824c9la37NjpX5tQbqI8pbQKLcX%2Beao%2FZVaubhGvJ1Z2xtqG3WgOk31jUvYSBaNqXSL%2BxybRmhgEGXSMxA1UwkGzAmqwW2nml%2FeBkfs&X-Amz-Signature=38807de00ee0d64d6e528d4a81a2c7c92f8b4a3129e506fd408fe670b2727ffb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSVSJUJQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCHJlAUefAUAsWGKWdkDqFnjSwsE8F4K2I1oW%2FZtx8jhQIgeFoWlZsvI%2F5Meglbf2buUQxVHRhDj4JAE4unZH0WdL0q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDCUb5KJJpV%2FnQ4vQayrcA%2Boixs%2BjEX6Iqu67NCH8vFzlRIEKv9q7%2B8uuMdQ7IDliVyqeLuULgTVQc4H6UluCT9gP1Io8cAvCe3RwPrM1%2Foalu%2B%2F%2FK%2BKvAd6V4qv2p9969fq3PcSYy%2Fp2nyERRsZsGmJczFSu3Vhfga%2BmkVp%2FLwiY1mRoT3AXS4EA8ErxJ15i6408%2FtWbtxbIxU3DmyODg5u8oOiS20eTqWgMfu9QI87etgPJ7sFm%2FE986Sfa4BLdh0Y%2Bgan60QpyVto6mlaaKDPGsNvqdpBPRl5y0PUIYjF3uFyeY4D2LXaR8FyvKI8Qp0Ro1j%2FsRW2mWuTtTNShlp5iGHo7dC1h7wRbB7teMlDXODNCKMgmzU7Fgi6jSljP5UnWPE%2BzvdZ9UwOSlnLTj83xzY6kGTfYoGCBiJo6oFGh3LcKgw7537QV87kpd5wq1%2BHw4zH07pKDk6sxJeFXCsKMNjoBPDgyoGPB05Tzz7tYeREG3t8U74Ratga5tOC2alEFNRh0jTC0ao1a9rMy1uuN28Z7G%2BrRQIsca%2Bs7BibGSjKtKsbzbO3t4cb26uoBV02sNzUuz7dSnVVFI3KZpIHHpwGrEsJQT5mk7PHsRiXJNWIEqq4qYUJcstMba7MLUE9Y5lazCVJ%2BNfVMML3Ly8QGOqUBhc2Fw6%2F3ihqcmKKroG2wM8LiCyoohlk3wo6m%2Fv7bBUHQ6i2bV0bjQGvzA2H0on%2BWcQtd2IUXPILqBisH9QH1Gd0zZQ%2BpOlNnudMpDQ3xWLWMu4Jb2rJAp824c9la37NjpX5tQbqI8pbQKLcX%2Beao%2FZVaubhGvJ1Z2xtqG3WgOk31jUvYSBaNqXSL%2BxybRmhgEGXSMxA1UwkGzAmqwW2nml%2FeBkfs&X-Amz-Signature=be97469836b216aa4539ca617aa52d484d631639ce2396b341432bc075a7d956&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSVSJUJQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCHJlAUefAUAsWGKWdkDqFnjSwsE8F4K2I1oW%2FZtx8jhQIgeFoWlZsvI%2F5Meglbf2buUQxVHRhDj4JAE4unZH0WdL0q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDCUb5KJJpV%2FnQ4vQayrcA%2Boixs%2BjEX6Iqu67NCH8vFzlRIEKv9q7%2B8uuMdQ7IDliVyqeLuULgTVQc4H6UluCT9gP1Io8cAvCe3RwPrM1%2Foalu%2B%2F%2FK%2BKvAd6V4qv2p9969fq3PcSYy%2Fp2nyERRsZsGmJczFSu3Vhfga%2BmkVp%2FLwiY1mRoT3AXS4EA8ErxJ15i6408%2FtWbtxbIxU3DmyODg5u8oOiS20eTqWgMfu9QI87etgPJ7sFm%2FE986Sfa4BLdh0Y%2Bgan60QpyVto6mlaaKDPGsNvqdpBPRl5y0PUIYjF3uFyeY4D2LXaR8FyvKI8Qp0Ro1j%2FsRW2mWuTtTNShlp5iGHo7dC1h7wRbB7teMlDXODNCKMgmzU7Fgi6jSljP5UnWPE%2BzvdZ9UwOSlnLTj83xzY6kGTfYoGCBiJo6oFGh3LcKgw7537QV87kpd5wq1%2BHw4zH07pKDk6sxJeFXCsKMNjoBPDgyoGPB05Tzz7tYeREG3t8U74Ratga5tOC2alEFNRh0jTC0ao1a9rMy1uuN28Z7G%2BrRQIsca%2Bs7BibGSjKtKsbzbO3t4cb26uoBV02sNzUuz7dSnVVFI3KZpIHHpwGrEsJQT5mk7PHsRiXJNWIEqq4qYUJcstMba7MLUE9Y5lazCVJ%2BNfVMML3Ly8QGOqUBhc2Fw6%2F3ihqcmKKroG2wM8LiCyoohlk3wo6m%2Fv7bBUHQ6i2bV0bjQGvzA2H0on%2BWcQtd2IUXPILqBisH9QH1Gd0zZQ%2BpOlNnudMpDQ3xWLWMu4Jb2rJAp824c9la37NjpX5tQbqI8pbQKLcX%2Beao%2FZVaubhGvJ1Z2xtqG3WgOk31jUvYSBaNqXSL%2BxybRmhgEGXSMxA1UwkGzAmqwW2nml%2FeBkfs&X-Amz-Signature=35d94bfc5acfa508f367b1314b858ebe99b887a69e4b4022afbc7e295fa0ea57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSVSJUJQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCHJlAUefAUAsWGKWdkDqFnjSwsE8F4K2I1oW%2FZtx8jhQIgeFoWlZsvI%2F5Meglbf2buUQxVHRhDj4JAE4unZH0WdL0q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDCUb5KJJpV%2FnQ4vQayrcA%2Boixs%2BjEX6Iqu67NCH8vFzlRIEKv9q7%2B8uuMdQ7IDliVyqeLuULgTVQc4H6UluCT9gP1Io8cAvCe3RwPrM1%2Foalu%2B%2F%2FK%2BKvAd6V4qv2p9969fq3PcSYy%2Fp2nyERRsZsGmJczFSu3Vhfga%2BmkVp%2FLwiY1mRoT3AXS4EA8ErxJ15i6408%2FtWbtxbIxU3DmyODg5u8oOiS20eTqWgMfu9QI87etgPJ7sFm%2FE986Sfa4BLdh0Y%2Bgan60QpyVto6mlaaKDPGsNvqdpBPRl5y0PUIYjF3uFyeY4D2LXaR8FyvKI8Qp0Ro1j%2FsRW2mWuTtTNShlp5iGHo7dC1h7wRbB7teMlDXODNCKMgmzU7Fgi6jSljP5UnWPE%2BzvdZ9UwOSlnLTj83xzY6kGTfYoGCBiJo6oFGh3LcKgw7537QV87kpd5wq1%2BHw4zH07pKDk6sxJeFXCsKMNjoBPDgyoGPB05Tzz7tYeREG3t8U74Ratga5tOC2alEFNRh0jTC0ao1a9rMy1uuN28Z7G%2BrRQIsca%2Bs7BibGSjKtKsbzbO3t4cb26uoBV02sNzUuz7dSnVVFI3KZpIHHpwGrEsJQT5mk7PHsRiXJNWIEqq4qYUJcstMba7MLUE9Y5lazCVJ%2BNfVMML3Ly8QGOqUBhc2Fw6%2F3ihqcmKKroG2wM8LiCyoohlk3wo6m%2Fv7bBUHQ6i2bV0bjQGvzA2H0on%2BWcQtd2IUXPILqBisH9QH1Gd0zZQ%2BpOlNnudMpDQ3xWLWMu4Jb2rJAp824c9la37NjpX5tQbqI8pbQKLcX%2Beao%2FZVaubhGvJ1Z2xtqG3WgOk31jUvYSBaNqXSL%2BxybRmhgEGXSMxA1UwkGzAmqwW2nml%2FeBkfs&X-Amz-Signature=f17e163c78f4d10b3130ff082359a5b02a9424fb158f52a4f9e072f1fc68ab51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSVSJUJQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCHJlAUefAUAsWGKWdkDqFnjSwsE8F4K2I1oW%2FZtx8jhQIgeFoWlZsvI%2F5Meglbf2buUQxVHRhDj4JAE4unZH0WdL0q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDCUb5KJJpV%2FnQ4vQayrcA%2Boixs%2BjEX6Iqu67NCH8vFzlRIEKv9q7%2B8uuMdQ7IDliVyqeLuULgTVQc4H6UluCT9gP1Io8cAvCe3RwPrM1%2Foalu%2B%2F%2FK%2BKvAd6V4qv2p9969fq3PcSYy%2Fp2nyERRsZsGmJczFSu3Vhfga%2BmkVp%2FLwiY1mRoT3AXS4EA8ErxJ15i6408%2FtWbtxbIxU3DmyODg5u8oOiS20eTqWgMfu9QI87etgPJ7sFm%2FE986Sfa4BLdh0Y%2Bgan60QpyVto6mlaaKDPGsNvqdpBPRl5y0PUIYjF3uFyeY4D2LXaR8FyvKI8Qp0Ro1j%2FsRW2mWuTtTNShlp5iGHo7dC1h7wRbB7teMlDXODNCKMgmzU7Fgi6jSljP5UnWPE%2BzvdZ9UwOSlnLTj83xzY6kGTfYoGCBiJo6oFGh3LcKgw7537QV87kpd5wq1%2BHw4zH07pKDk6sxJeFXCsKMNjoBPDgyoGPB05Tzz7tYeREG3t8U74Ratga5tOC2alEFNRh0jTC0ao1a9rMy1uuN28Z7G%2BrRQIsca%2Bs7BibGSjKtKsbzbO3t4cb26uoBV02sNzUuz7dSnVVFI3KZpIHHpwGrEsJQT5mk7PHsRiXJNWIEqq4qYUJcstMba7MLUE9Y5lazCVJ%2BNfVMML3Ly8QGOqUBhc2Fw6%2F3ihqcmKKroG2wM8LiCyoohlk3wo6m%2Fv7bBUHQ6i2bV0bjQGvzA2H0on%2BWcQtd2IUXPILqBisH9QH1Gd0zZQ%2BpOlNnudMpDQ3xWLWMu4Jb2rJAp824c9la37NjpX5tQbqI8pbQKLcX%2Beao%2FZVaubhGvJ1Z2xtqG3WgOk31jUvYSBaNqXSL%2BxybRmhgEGXSMxA1UwkGzAmqwW2nml%2FeBkfs&X-Amz-Signature=8d4cbe96d63d58367f632c93733e8b71725b22c907107b0bcf0e214701369ffa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSVSJUJQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCHJlAUefAUAsWGKWdkDqFnjSwsE8F4K2I1oW%2FZtx8jhQIgeFoWlZsvI%2F5Meglbf2buUQxVHRhDj4JAE4unZH0WdL0q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDCUb5KJJpV%2FnQ4vQayrcA%2Boixs%2BjEX6Iqu67NCH8vFzlRIEKv9q7%2B8uuMdQ7IDliVyqeLuULgTVQc4H6UluCT9gP1Io8cAvCe3RwPrM1%2Foalu%2B%2F%2FK%2BKvAd6V4qv2p9969fq3PcSYy%2Fp2nyERRsZsGmJczFSu3Vhfga%2BmkVp%2FLwiY1mRoT3AXS4EA8ErxJ15i6408%2FtWbtxbIxU3DmyODg5u8oOiS20eTqWgMfu9QI87etgPJ7sFm%2FE986Sfa4BLdh0Y%2Bgan60QpyVto6mlaaKDPGsNvqdpBPRl5y0PUIYjF3uFyeY4D2LXaR8FyvKI8Qp0Ro1j%2FsRW2mWuTtTNShlp5iGHo7dC1h7wRbB7teMlDXODNCKMgmzU7Fgi6jSljP5UnWPE%2BzvdZ9UwOSlnLTj83xzY6kGTfYoGCBiJo6oFGh3LcKgw7537QV87kpd5wq1%2BHw4zH07pKDk6sxJeFXCsKMNjoBPDgyoGPB05Tzz7tYeREG3t8U74Ratga5tOC2alEFNRh0jTC0ao1a9rMy1uuN28Z7G%2BrRQIsca%2Bs7BibGSjKtKsbzbO3t4cb26uoBV02sNzUuz7dSnVVFI3KZpIHHpwGrEsJQT5mk7PHsRiXJNWIEqq4qYUJcstMba7MLUE9Y5lazCVJ%2BNfVMML3Ly8QGOqUBhc2Fw6%2F3ihqcmKKroG2wM8LiCyoohlk3wo6m%2Fv7bBUHQ6i2bV0bjQGvzA2H0on%2BWcQtd2IUXPILqBisH9QH1Gd0zZQ%2BpOlNnudMpDQ3xWLWMu4Jb2rJAp824c9la37NjpX5tQbqI8pbQKLcX%2Beao%2FZVaubhGvJ1Z2xtqG3WgOk31jUvYSBaNqXSL%2BxybRmhgEGXSMxA1UwkGzAmqwW2nml%2FeBkfs&X-Amz-Signature=40e2e3508f56bd27a21502768a677f7663874fb30478b4673a5289b6f73420d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSVSJUJQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCHJlAUefAUAsWGKWdkDqFnjSwsE8F4K2I1oW%2FZtx8jhQIgeFoWlZsvI%2F5Meglbf2buUQxVHRhDj4JAE4unZH0WdL0q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDCUb5KJJpV%2FnQ4vQayrcA%2Boixs%2BjEX6Iqu67NCH8vFzlRIEKv9q7%2B8uuMdQ7IDliVyqeLuULgTVQc4H6UluCT9gP1Io8cAvCe3RwPrM1%2Foalu%2B%2F%2FK%2BKvAd6V4qv2p9969fq3PcSYy%2Fp2nyERRsZsGmJczFSu3Vhfga%2BmkVp%2FLwiY1mRoT3AXS4EA8ErxJ15i6408%2FtWbtxbIxU3DmyODg5u8oOiS20eTqWgMfu9QI87etgPJ7sFm%2FE986Sfa4BLdh0Y%2Bgan60QpyVto6mlaaKDPGsNvqdpBPRl5y0PUIYjF3uFyeY4D2LXaR8FyvKI8Qp0Ro1j%2FsRW2mWuTtTNShlp5iGHo7dC1h7wRbB7teMlDXODNCKMgmzU7Fgi6jSljP5UnWPE%2BzvdZ9UwOSlnLTj83xzY6kGTfYoGCBiJo6oFGh3LcKgw7537QV87kpd5wq1%2BHw4zH07pKDk6sxJeFXCsKMNjoBPDgyoGPB05Tzz7tYeREG3t8U74Ratga5tOC2alEFNRh0jTC0ao1a9rMy1uuN28Z7G%2BrRQIsca%2Bs7BibGSjKtKsbzbO3t4cb26uoBV02sNzUuz7dSnVVFI3KZpIHHpwGrEsJQT5mk7PHsRiXJNWIEqq4qYUJcstMba7MLUE9Y5lazCVJ%2BNfVMML3Ly8QGOqUBhc2Fw6%2F3ihqcmKKroG2wM8LiCyoohlk3wo6m%2Fv7bBUHQ6i2bV0bjQGvzA2H0on%2BWcQtd2IUXPILqBisH9QH1Gd0zZQ%2BpOlNnudMpDQ3xWLWMu4Jb2rJAp824c9la37NjpX5tQbqI8pbQKLcX%2Beao%2FZVaubhGvJ1Z2xtqG3WgOk31jUvYSBaNqXSL%2BxybRmhgEGXSMxA1UwkGzAmqwW2nml%2FeBkfs&X-Amz-Signature=0f6d0f748ee8c526de8ab7eea99557cd7460715014c5e53f0b8ecdba4c2ae959&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSVSJUJQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCHJlAUefAUAsWGKWdkDqFnjSwsE8F4K2I1oW%2FZtx8jhQIgeFoWlZsvI%2F5Meglbf2buUQxVHRhDj4JAE4unZH0WdL0q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDCUb5KJJpV%2FnQ4vQayrcA%2Boixs%2BjEX6Iqu67NCH8vFzlRIEKv9q7%2B8uuMdQ7IDliVyqeLuULgTVQc4H6UluCT9gP1Io8cAvCe3RwPrM1%2Foalu%2B%2F%2FK%2BKvAd6V4qv2p9969fq3PcSYy%2Fp2nyERRsZsGmJczFSu3Vhfga%2BmkVp%2FLwiY1mRoT3AXS4EA8ErxJ15i6408%2FtWbtxbIxU3DmyODg5u8oOiS20eTqWgMfu9QI87etgPJ7sFm%2FE986Sfa4BLdh0Y%2Bgan60QpyVto6mlaaKDPGsNvqdpBPRl5y0PUIYjF3uFyeY4D2LXaR8FyvKI8Qp0Ro1j%2FsRW2mWuTtTNShlp5iGHo7dC1h7wRbB7teMlDXODNCKMgmzU7Fgi6jSljP5UnWPE%2BzvdZ9UwOSlnLTj83xzY6kGTfYoGCBiJo6oFGh3LcKgw7537QV87kpd5wq1%2BHw4zH07pKDk6sxJeFXCsKMNjoBPDgyoGPB05Tzz7tYeREG3t8U74Ratga5tOC2alEFNRh0jTC0ao1a9rMy1uuN28Z7G%2BrRQIsca%2Bs7BibGSjKtKsbzbO3t4cb26uoBV02sNzUuz7dSnVVFI3KZpIHHpwGrEsJQT5mk7PHsRiXJNWIEqq4qYUJcstMba7MLUE9Y5lazCVJ%2BNfVMML3Ly8QGOqUBhc2Fw6%2F3ihqcmKKroG2wM8LiCyoohlk3wo6m%2Fv7bBUHQ6i2bV0bjQGvzA2H0on%2BWcQtd2IUXPILqBisH9QH1Gd0zZQ%2BpOlNnudMpDQ3xWLWMu4Jb2rJAp824c9la37NjpX5tQbqI8pbQKLcX%2Beao%2FZVaubhGvJ1Z2xtqG3WgOk31jUvYSBaNqXSL%2BxybRmhgEGXSMxA1UwkGzAmqwW2nml%2FeBkfs&X-Amz-Signature=63bb1be378cdf63b83b9e32ee69a13b15e47529dac56e3a0df953c61ae2ab60e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSVSJUJQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCHJlAUefAUAsWGKWdkDqFnjSwsE8F4K2I1oW%2FZtx8jhQIgeFoWlZsvI%2F5Meglbf2buUQxVHRhDj4JAE4unZH0WdL0q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDCUb5KJJpV%2FnQ4vQayrcA%2Boixs%2BjEX6Iqu67NCH8vFzlRIEKv9q7%2B8uuMdQ7IDliVyqeLuULgTVQc4H6UluCT9gP1Io8cAvCe3RwPrM1%2Foalu%2B%2F%2FK%2BKvAd6V4qv2p9969fq3PcSYy%2Fp2nyERRsZsGmJczFSu3Vhfga%2BmkVp%2FLwiY1mRoT3AXS4EA8ErxJ15i6408%2FtWbtxbIxU3DmyODg5u8oOiS20eTqWgMfu9QI87etgPJ7sFm%2FE986Sfa4BLdh0Y%2Bgan60QpyVto6mlaaKDPGsNvqdpBPRl5y0PUIYjF3uFyeY4D2LXaR8FyvKI8Qp0Ro1j%2FsRW2mWuTtTNShlp5iGHo7dC1h7wRbB7teMlDXODNCKMgmzU7Fgi6jSljP5UnWPE%2BzvdZ9UwOSlnLTj83xzY6kGTfYoGCBiJo6oFGh3LcKgw7537QV87kpd5wq1%2BHw4zH07pKDk6sxJeFXCsKMNjoBPDgyoGPB05Tzz7tYeREG3t8U74Ratga5tOC2alEFNRh0jTC0ao1a9rMy1uuN28Z7G%2BrRQIsca%2Bs7BibGSjKtKsbzbO3t4cb26uoBV02sNzUuz7dSnVVFI3KZpIHHpwGrEsJQT5mk7PHsRiXJNWIEqq4qYUJcstMba7MLUE9Y5lazCVJ%2BNfVMML3Ly8QGOqUBhc2Fw6%2F3ihqcmKKroG2wM8LiCyoohlk3wo6m%2Fv7bBUHQ6i2bV0bjQGvzA2H0on%2BWcQtd2IUXPILqBisH9QH1Gd0zZQ%2BpOlNnudMpDQ3xWLWMu4Jb2rJAp824c9la37NjpX5tQbqI8pbQKLcX%2Beao%2FZVaubhGvJ1Z2xtqG3WgOk31jUvYSBaNqXSL%2BxybRmhgEGXSMxA1UwkGzAmqwW2nml%2FeBkfs&X-Amz-Signature=121bcd398ed726a9641356fe051e739e124c34ef274e61dbd27a30b1db95c64a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSVSJUJQ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T052208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCHJlAUefAUAsWGKWdkDqFnjSwsE8F4K2I1oW%2FZtx8jhQIgeFoWlZsvI%2F5Meglbf2buUQxVHRhDj4JAE4unZH0WdL0q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDCUb5KJJpV%2FnQ4vQayrcA%2Boixs%2BjEX6Iqu67NCH8vFzlRIEKv9q7%2B8uuMdQ7IDliVyqeLuULgTVQc4H6UluCT9gP1Io8cAvCe3RwPrM1%2Foalu%2B%2F%2FK%2BKvAd6V4qv2p9969fq3PcSYy%2Fp2nyERRsZsGmJczFSu3Vhfga%2BmkVp%2FLwiY1mRoT3AXS4EA8ErxJ15i6408%2FtWbtxbIxU3DmyODg5u8oOiS20eTqWgMfu9QI87etgPJ7sFm%2FE986Sfa4BLdh0Y%2Bgan60QpyVto6mlaaKDPGsNvqdpBPRl5y0PUIYjF3uFyeY4D2LXaR8FyvKI8Qp0Ro1j%2FsRW2mWuTtTNShlp5iGHo7dC1h7wRbB7teMlDXODNCKMgmzU7Fgi6jSljP5UnWPE%2BzvdZ9UwOSlnLTj83xzY6kGTfYoGCBiJo6oFGh3LcKgw7537QV87kpd5wq1%2BHw4zH07pKDk6sxJeFXCsKMNjoBPDgyoGPB05Tzz7tYeREG3t8U74Ratga5tOC2alEFNRh0jTC0ao1a9rMy1uuN28Z7G%2BrRQIsca%2Bs7BibGSjKtKsbzbO3t4cb26uoBV02sNzUuz7dSnVVFI3KZpIHHpwGrEsJQT5mk7PHsRiXJNWIEqq4qYUJcstMba7MLUE9Y5lazCVJ%2BNfVMML3Ly8QGOqUBhc2Fw6%2F3ihqcmKKroG2wM8LiCyoohlk3wo6m%2Fv7bBUHQ6i2bV0bjQGvzA2H0on%2BWcQtd2IUXPILqBisH9QH1Gd0zZQ%2BpOlNnudMpDQ3xWLWMu4Jb2rJAp824c9la37NjpX5tQbqI8pbQKLcX%2Beao%2FZVaubhGvJ1Z2xtqG3WgOk31jUvYSBaNqXSL%2BxybRmhgEGXSMxA1UwkGzAmqwW2nml%2FeBkfs&X-Amz-Signature=21e2c3e0ffbb20d58801613522582f795dbad935f1614970cc1ea4e1bc6e0e06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
