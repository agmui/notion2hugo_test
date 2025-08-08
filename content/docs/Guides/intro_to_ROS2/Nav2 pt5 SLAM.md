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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZKHKFL5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIH7A4m94j73qHUEFDWHSWwwmSbtwB%2BbVNvw1hDXg%2FrlYAiAYkXsMevaUseP3RV6fUdofYskuPX3lRS%2BEpfR92FPDAyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqDxfAqEDzw3Y%2Bml8KtwDPC5%2BJ3M9LSAwVMqq2B%2F3syo9sCXwP%2FI%2FE2TrWHDPS%2FC5LMHyBwWQNb36BUK6hjC272INyqw9i5MZ%2FtG%2BEgOMcr5bucQ3Salvo4vnN6jdZ4hSE99DbALcsUg9xF%2FAvljiZDnQoJo57H6baajcoSbzI9dfC%2BN5m1Ierw4RNN4hyKzfr1C%2Bg8CQB9A0gl6uzrGbIpGsXboutMDyFTnkjmuFbhYpcXejXAVppmpnXu48AWhjaTMaABrvFpOAtcTDKRXCoPzLilCKjSV%2BoERPtNiLBYnmXq%2BdlQ%2BUwOjlcyTKuGxw2LUHDnEclrbfnySdy8r8to78yVppPDmNRoJ8PJeSmvOZOR6B3WBCwIjRK%2FRykgrguce1XpbUyW5QcQS1c4glOBzjlwEygCVDikDjraBHn2kGGx71FzO223TQCjtaocKlzMbfbvwCKaeVuu8Y9W%2BtZgPXgLSWr1%2BN1CJKb6%2B7oqTtLgVE8ArWHNR2nDFnElfXUbEdOMIV%2Fn6A6NTq%2FYYdm%2BKD4hL%2Bb2UlEUzRmgJiUep7ohVLiwn%2FLbZc5FusOFcwDj4gn%2Bb8GUsaazODW9DBz9WwP%2FbS%2Ba7LpLQR89cr1QHIAKUBHS2H7P6DmZ9mWJVWz9Fs9OpbJA9Vz%2FEwkPvVxAY6pgFqT5Cfx1ZgaXmnt2hKZNQjpZWF0xhHuaZThPoQl%2BF6RV6wIP7JX4%2BW%2FAIZIAp5j0Y5tOsQrBwZxwgiL3rNFhp%2FRgXaDtCrRSuHUYyzaeXChc0I46d2Q4Xeu9KBQt3lP46HFjXoRiPiEMVrGvV2q2JX72OJ%2FDnV27XJ2iqxmMsbd0hpzfUm%2BO8vtJvShAbh8S8CkNkaVfLmsfm%2FWeJaXf6Co9c0eP23&X-Amz-Signature=af4097e3ac4e15aa595b485e03ed7820371c21af614b630af95d4a9ee6ed95df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZKHKFL5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIH7A4m94j73qHUEFDWHSWwwmSbtwB%2BbVNvw1hDXg%2FrlYAiAYkXsMevaUseP3RV6fUdofYskuPX3lRS%2BEpfR92FPDAyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqDxfAqEDzw3Y%2Bml8KtwDPC5%2BJ3M9LSAwVMqq2B%2F3syo9sCXwP%2FI%2FE2TrWHDPS%2FC5LMHyBwWQNb36BUK6hjC272INyqw9i5MZ%2FtG%2BEgOMcr5bucQ3Salvo4vnN6jdZ4hSE99DbALcsUg9xF%2FAvljiZDnQoJo57H6baajcoSbzI9dfC%2BN5m1Ierw4RNN4hyKzfr1C%2Bg8CQB9A0gl6uzrGbIpGsXboutMDyFTnkjmuFbhYpcXejXAVppmpnXu48AWhjaTMaABrvFpOAtcTDKRXCoPzLilCKjSV%2BoERPtNiLBYnmXq%2BdlQ%2BUwOjlcyTKuGxw2LUHDnEclrbfnySdy8r8to78yVppPDmNRoJ8PJeSmvOZOR6B3WBCwIjRK%2FRykgrguce1XpbUyW5QcQS1c4glOBzjlwEygCVDikDjraBHn2kGGx71FzO223TQCjtaocKlzMbfbvwCKaeVuu8Y9W%2BtZgPXgLSWr1%2BN1CJKb6%2B7oqTtLgVE8ArWHNR2nDFnElfXUbEdOMIV%2Fn6A6NTq%2FYYdm%2BKD4hL%2Bb2UlEUzRmgJiUep7ohVLiwn%2FLbZc5FusOFcwDj4gn%2Bb8GUsaazODW9DBz9WwP%2FbS%2Ba7LpLQR89cr1QHIAKUBHS2H7P6DmZ9mWJVWz9Fs9OpbJA9Vz%2FEwkPvVxAY6pgFqT5Cfx1ZgaXmnt2hKZNQjpZWF0xhHuaZThPoQl%2BF6RV6wIP7JX4%2BW%2FAIZIAp5j0Y5tOsQrBwZxwgiL3rNFhp%2FRgXaDtCrRSuHUYyzaeXChc0I46d2Q4Xeu9KBQt3lP46HFjXoRiPiEMVrGvV2q2JX72OJ%2FDnV27XJ2iqxmMsbd0hpzfUm%2BO8vtJvShAbh8S8CkNkaVfLmsfm%2FWeJaXf6Co9c0eP23&X-Amz-Signature=ff5045d222bc7af076d2dbb74d9bf4006a20b96f722b2381e209146c92150045&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZKHKFL5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIH7A4m94j73qHUEFDWHSWwwmSbtwB%2BbVNvw1hDXg%2FrlYAiAYkXsMevaUseP3RV6fUdofYskuPX3lRS%2BEpfR92FPDAyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqDxfAqEDzw3Y%2Bml8KtwDPC5%2BJ3M9LSAwVMqq2B%2F3syo9sCXwP%2FI%2FE2TrWHDPS%2FC5LMHyBwWQNb36BUK6hjC272INyqw9i5MZ%2FtG%2BEgOMcr5bucQ3Salvo4vnN6jdZ4hSE99DbALcsUg9xF%2FAvljiZDnQoJo57H6baajcoSbzI9dfC%2BN5m1Ierw4RNN4hyKzfr1C%2Bg8CQB9A0gl6uzrGbIpGsXboutMDyFTnkjmuFbhYpcXejXAVppmpnXu48AWhjaTMaABrvFpOAtcTDKRXCoPzLilCKjSV%2BoERPtNiLBYnmXq%2BdlQ%2BUwOjlcyTKuGxw2LUHDnEclrbfnySdy8r8to78yVppPDmNRoJ8PJeSmvOZOR6B3WBCwIjRK%2FRykgrguce1XpbUyW5QcQS1c4glOBzjlwEygCVDikDjraBHn2kGGx71FzO223TQCjtaocKlzMbfbvwCKaeVuu8Y9W%2BtZgPXgLSWr1%2BN1CJKb6%2B7oqTtLgVE8ArWHNR2nDFnElfXUbEdOMIV%2Fn6A6NTq%2FYYdm%2BKD4hL%2Bb2UlEUzRmgJiUep7ohVLiwn%2FLbZc5FusOFcwDj4gn%2Bb8GUsaazODW9DBz9WwP%2FbS%2Ba7LpLQR89cr1QHIAKUBHS2H7P6DmZ9mWJVWz9Fs9OpbJA9Vz%2FEwkPvVxAY6pgFqT5Cfx1ZgaXmnt2hKZNQjpZWF0xhHuaZThPoQl%2BF6RV6wIP7JX4%2BW%2FAIZIAp5j0Y5tOsQrBwZxwgiL3rNFhp%2FRgXaDtCrRSuHUYyzaeXChc0I46d2Q4Xeu9KBQt3lP46HFjXoRiPiEMVrGvV2q2JX72OJ%2FDnV27XJ2iqxmMsbd0hpzfUm%2BO8vtJvShAbh8S8CkNkaVfLmsfm%2FWeJaXf6Co9c0eP23&X-Amz-Signature=1a7a2aa6960e34b3c63e58f7f9b581e58b05cccdd5fcd3a240123fe6048ba56e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZKHKFL5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIH7A4m94j73qHUEFDWHSWwwmSbtwB%2BbVNvw1hDXg%2FrlYAiAYkXsMevaUseP3RV6fUdofYskuPX3lRS%2BEpfR92FPDAyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqDxfAqEDzw3Y%2Bml8KtwDPC5%2BJ3M9LSAwVMqq2B%2F3syo9sCXwP%2FI%2FE2TrWHDPS%2FC5LMHyBwWQNb36BUK6hjC272INyqw9i5MZ%2FtG%2BEgOMcr5bucQ3Salvo4vnN6jdZ4hSE99DbALcsUg9xF%2FAvljiZDnQoJo57H6baajcoSbzI9dfC%2BN5m1Ierw4RNN4hyKzfr1C%2Bg8CQB9A0gl6uzrGbIpGsXboutMDyFTnkjmuFbhYpcXejXAVppmpnXu48AWhjaTMaABrvFpOAtcTDKRXCoPzLilCKjSV%2BoERPtNiLBYnmXq%2BdlQ%2BUwOjlcyTKuGxw2LUHDnEclrbfnySdy8r8to78yVppPDmNRoJ8PJeSmvOZOR6B3WBCwIjRK%2FRykgrguce1XpbUyW5QcQS1c4glOBzjlwEygCVDikDjraBHn2kGGx71FzO223TQCjtaocKlzMbfbvwCKaeVuu8Y9W%2BtZgPXgLSWr1%2BN1CJKb6%2B7oqTtLgVE8ArWHNR2nDFnElfXUbEdOMIV%2Fn6A6NTq%2FYYdm%2BKD4hL%2Bb2UlEUzRmgJiUep7ohVLiwn%2FLbZc5FusOFcwDj4gn%2Bb8GUsaazODW9DBz9WwP%2FbS%2Ba7LpLQR89cr1QHIAKUBHS2H7P6DmZ9mWJVWz9Fs9OpbJA9Vz%2FEwkPvVxAY6pgFqT5Cfx1ZgaXmnt2hKZNQjpZWF0xhHuaZThPoQl%2BF6RV6wIP7JX4%2BW%2FAIZIAp5j0Y5tOsQrBwZxwgiL3rNFhp%2FRgXaDtCrRSuHUYyzaeXChc0I46d2Q4Xeu9KBQt3lP46HFjXoRiPiEMVrGvV2q2JX72OJ%2FDnV27XJ2iqxmMsbd0hpzfUm%2BO8vtJvShAbh8S8CkNkaVfLmsfm%2FWeJaXf6Co9c0eP23&X-Amz-Signature=6cc67d1dbaedea5c4da4cd0ab0f5998e2d01aa67e53c05cd6d37db7b180c2b0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZKHKFL5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIH7A4m94j73qHUEFDWHSWwwmSbtwB%2BbVNvw1hDXg%2FrlYAiAYkXsMevaUseP3RV6fUdofYskuPX3lRS%2BEpfR92FPDAyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqDxfAqEDzw3Y%2Bml8KtwDPC5%2BJ3M9LSAwVMqq2B%2F3syo9sCXwP%2FI%2FE2TrWHDPS%2FC5LMHyBwWQNb36BUK6hjC272INyqw9i5MZ%2FtG%2BEgOMcr5bucQ3Salvo4vnN6jdZ4hSE99DbALcsUg9xF%2FAvljiZDnQoJo57H6baajcoSbzI9dfC%2BN5m1Ierw4RNN4hyKzfr1C%2Bg8CQB9A0gl6uzrGbIpGsXboutMDyFTnkjmuFbhYpcXejXAVppmpnXu48AWhjaTMaABrvFpOAtcTDKRXCoPzLilCKjSV%2BoERPtNiLBYnmXq%2BdlQ%2BUwOjlcyTKuGxw2LUHDnEclrbfnySdy8r8to78yVppPDmNRoJ8PJeSmvOZOR6B3WBCwIjRK%2FRykgrguce1XpbUyW5QcQS1c4glOBzjlwEygCVDikDjraBHn2kGGx71FzO223TQCjtaocKlzMbfbvwCKaeVuu8Y9W%2BtZgPXgLSWr1%2BN1CJKb6%2B7oqTtLgVE8ArWHNR2nDFnElfXUbEdOMIV%2Fn6A6NTq%2FYYdm%2BKD4hL%2Bb2UlEUzRmgJiUep7ohVLiwn%2FLbZc5FusOFcwDj4gn%2Bb8GUsaazODW9DBz9WwP%2FbS%2Ba7LpLQR89cr1QHIAKUBHS2H7P6DmZ9mWJVWz9Fs9OpbJA9Vz%2FEwkPvVxAY6pgFqT5Cfx1ZgaXmnt2hKZNQjpZWF0xhHuaZThPoQl%2BF6RV6wIP7JX4%2BW%2FAIZIAp5j0Y5tOsQrBwZxwgiL3rNFhp%2FRgXaDtCrRSuHUYyzaeXChc0I46d2Q4Xeu9KBQt3lP46HFjXoRiPiEMVrGvV2q2JX72OJ%2FDnV27XJ2iqxmMsbd0hpzfUm%2BO8vtJvShAbh8S8CkNkaVfLmsfm%2FWeJaXf6Co9c0eP23&X-Amz-Signature=3b8ecf88ee39936604bbb97b45c735e537fb0ea14d524c6d0c2bdb506c29ce8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZKHKFL5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIH7A4m94j73qHUEFDWHSWwwmSbtwB%2BbVNvw1hDXg%2FrlYAiAYkXsMevaUseP3RV6fUdofYskuPX3lRS%2BEpfR92FPDAyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqDxfAqEDzw3Y%2Bml8KtwDPC5%2BJ3M9LSAwVMqq2B%2F3syo9sCXwP%2FI%2FE2TrWHDPS%2FC5LMHyBwWQNb36BUK6hjC272INyqw9i5MZ%2FtG%2BEgOMcr5bucQ3Salvo4vnN6jdZ4hSE99DbALcsUg9xF%2FAvljiZDnQoJo57H6baajcoSbzI9dfC%2BN5m1Ierw4RNN4hyKzfr1C%2Bg8CQB9A0gl6uzrGbIpGsXboutMDyFTnkjmuFbhYpcXejXAVppmpnXu48AWhjaTMaABrvFpOAtcTDKRXCoPzLilCKjSV%2BoERPtNiLBYnmXq%2BdlQ%2BUwOjlcyTKuGxw2LUHDnEclrbfnySdy8r8to78yVppPDmNRoJ8PJeSmvOZOR6B3WBCwIjRK%2FRykgrguce1XpbUyW5QcQS1c4glOBzjlwEygCVDikDjraBHn2kGGx71FzO223TQCjtaocKlzMbfbvwCKaeVuu8Y9W%2BtZgPXgLSWr1%2BN1CJKb6%2B7oqTtLgVE8ArWHNR2nDFnElfXUbEdOMIV%2Fn6A6NTq%2FYYdm%2BKD4hL%2Bb2UlEUzRmgJiUep7ohVLiwn%2FLbZc5FusOFcwDj4gn%2Bb8GUsaazODW9DBz9WwP%2FbS%2Ba7LpLQR89cr1QHIAKUBHS2H7P6DmZ9mWJVWz9Fs9OpbJA9Vz%2FEwkPvVxAY6pgFqT5Cfx1ZgaXmnt2hKZNQjpZWF0xhHuaZThPoQl%2BF6RV6wIP7JX4%2BW%2FAIZIAp5j0Y5tOsQrBwZxwgiL3rNFhp%2FRgXaDtCrRSuHUYyzaeXChc0I46d2Q4Xeu9KBQt3lP46HFjXoRiPiEMVrGvV2q2JX72OJ%2FDnV27XJ2iqxmMsbd0hpzfUm%2BO8vtJvShAbh8S8CkNkaVfLmsfm%2FWeJaXf6Co9c0eP23&X-Amz-Signature=77f3478dd5fe9580546485d524378964f9e7d5cc8ea9def519df10417ebf3a80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZKHKFL5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIH7A4m94j73qHUEFDWHSWwwmSbtwB%2BbVNvw1hDXg%2FrlYAiAYkXsMevaUseP3RV6fUdofYskuPX3lRS%2BEpfR92FPDAyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqDxfAqEDzw3Y%2Bml8KtwDPC5%2BJ3M9LSAwVMqq2B%2F3syo9sCXwP%2FI%2FE2TrWHDPS%2FC5LMHyBwWQNb36BUK6hjC272INyqw9i5MZ%2FtG%2BEgOMcr5bucQ3Salvo4vnN6jdZ4hSE99DbALcsUg9xF%2FAvljiZDnQoJo57H6baajcoSbzI9dfC%2BN5m1Ierw4RNN4hyKzfr1C%2Bg8CQB9A0gl6uzrGbIpGsXboutMDyFTnkjmuFbhYpcXejXAVppmpnXu48AWhjaTMaABrvFpOAtcTDKRXCoPzLilCKjSV%2BoERPtNiLBYnmXq%2BdlQ%2BUwOjlcyTKuGxw2LUHDnEclrbfnySdy8r8to78yVppPDmNRoJ8PJeSmvOZOR6B3WBCwIjRK%2FRykgrguce1XpbUyW5QcQS1c4glOBzjlwEygCVDikDjraBHn2kGGx71FzO223TQCjtaocKlzMbfbvwCKaeVuu8Y9W%2BtZgPXgLSWr1%2BN1CJKb6%2B7oqTtLgVE8ArWHNR2nDFnElfXUbEdOMIV%2Fn6A6NTq%2FYYdm%2BKD4hL%2Bb2UlEUzRmgJiUep7ohVLiwn%2FLbZc5FusOFcwDj4gn%2Bb8GUsaazODW9DBz9WwP%2FbS%2Ba7LpLQR89cr1QHIAKUBHS2H7P6DmZ9mWJVWz9Fs9OpbJA9Vz%2FEwkPvVxAY6pgFqT5Cfx1ZgaXmnt2hKZNQjpZWF0xhHuaZThPoQl%2BF6RV6wIP7JX4%2BW%2FAIZIAp5j0Y5tOsQrBwZxwgiL3rNFhp%2FRgXaDtCrRSuHUYyzaeXChc0I46d2Q4Xeu9KBQt3lP46HFjXoRiPiEMVrGvV2q2JX72OJ%2FDnV27XJ2iqxmMsbd0hpzfUm%2BO8vtJvShAbh8S8CkNkaVfLmsfm%2FWeJaXf6Co9c0eP23&X-Amz-Signature=c9ecdee8b57252555f3a6fd0b688a0ca835ecc5db3658289b152a1d35ce13444&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZKHKFL5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIH7A4m94j73qHUEFDWHSWwwmSbtwB%2BbVNvw1hDXg%2FrlYAiAYkXsMevaUseP3RV6fUdofYskuPX3lRS%2BEpfR92FPDAyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqDxfAqEDzw3Y%2Bml8KtwDPC5%2BJ3M9LSAwVMqq2B%2F3syo9sCXwP%2FI%2FE2TrWHDPS%2FC5LMHyBwWQNb36BUK6hjC272INyqw9i5MZ%2FtG%2BEgOMcr5bucQ3Salvo4vnN6jdZ4hSE99DbALcsUg9xF%2FAvljiZDnQoJo57H6baajcoSbzI9dfC%2BN5m1Ierw4RNN4hyKzfr1C%2Bg8CQB9A0gl6uzrGbIpGsXboutMDyFTnkjmuFbhYpcXejXAVppmpnXu48AWhjaTMaABrvFpOAtcTDKRXCoPzLilCKjSV%2BoERPtNiLBYnmXq%2BdlQ%2BUwOjlcyTKuGxw2LUHDnEclrbfnySdy8r8to78yVppPDmNRoJ8PJeSmvOZOR6B3WBCwIjRK%2FRykgrguce1XpbUyW5QcQS1c4glOBzjlwEygCVDikDjraBHn2kGGx71FzO223TQCjtaocKlzMbfbvwCKaeVuu8Y9W%2BtZgPXgLSWr1%2BN1CJKb6%2B7oqTtLgVE8ArWHNR2nDFnElfXUbEdOMIV%2Fn6A6NTq%2FYYdm%2BKD4hL%2Bb2UlEUzRmgJiUep7ohVLiwn%2FLbZc5FusOFcwDj4gn%2Bb8GUsaazODW9DBz9WwP%2FbS%2Ba7LpLQR89cr1QHIAKUBHS2H7P6DmZ9mWJVWz9Fs9OpbJA9Vz%2FEwkPvVxAY6pgFqT5Cfx1ZgaXmnt2hKZNQjpZWF0xhHuaZThPoQl%2BF6RV6wIP7JX4%2BW%2FAIZIAp5j0Y5tOsQrBwZxwgiL3rNFhp%2FRgXaDtCrRSuHUYyzaeXChc0I46d2Q4Xeu9KBQt3lP46HFjXoRiPiEMVrGvV2q2JX72OJ%2FDnV27XJ2iqxmMsbd0hpzfUm%2BO8vtJvShAbh8S8CkNkaVfLmsfm%2FWeJaXf6Co9c0eP23&X-Amz-Signature=063aa26e2edf6019a4828ddeb8aa649e90dc4741b0122f4d408a997266cf1226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZKHKFL5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIH7A4m94j73qHUEFDWHSWwwmSbtwB%2BbVNvw1hDXg%2FrlYAiAYkXsMevaUseP3RV6fUdofYskuPX3lRS%2BEpfR92FPDAyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqDxfAqEDzw3Y%2Bml8KtwDPC5%2BJ3M9LSAwVMqq2B%2F3syo9sCXwP%2FI%2FE2TrWHDPS%2FC5LMHyBwWQNb36BUK6hjC272INyqw9i5MZ%2FtG%2BEgOMcr5bucQ3Salvo4vnN6jdZ4hSE99DbALcsUg9xF%2FAvljiZDnQoJo57H6baajcoSbzI9dfC%2BN5m1Ierw4RNN4hyKzfr1C%2Bg8CQB9A0gl6uzrGbIpGsXboutMDyFTnkjmuFbhYpcXejXAVppmpnXu48AWhjaTMaABrvFpOAtcTDKRXCoPzLilCKjSV%2BoERPtNiLBYnmXq%2BdlQ%2BUwOjlcyTKuGxw2LUHDnEclrbfnySdy8r8to78yVppPDmNRoJ8PJeSmvOZOR6B3WBCwIjRK%2FRykgrguce1XpbUyW5QcQS1c4glOBzjlwEygCVDikDjraBHn2kGGx71FzO223TQCjtaocKlzMbfbvwCKaeVuu8Y9W%2BtZgPXgLSWr1%2BN1CJKb6%2B7oqTtLgVE8ArWHNR2nDFnElfXUbEdOMIV%2Fn6A6NTq%2FYYdm%2BKD4hL%2Bb2UlEUzRmgJiUep7ohVLiwn%2FLbZc5FusOFcwDj4gn%2Bb8GUsaazODW9DBz9WwP%2FbS%2Ba7LpLQR89cr1QHIAKUBHS2H7P6DmZ9mWJVWz9Fs9OpbJA9Vz%2FEwkPvVxAY6pgFqT5Cfx1ZgaXmnt2hKZNQjpZWF0xhHuaZThPoQl%2BF6RV6wIP7JX4%2BW%2FAIZIAp5j0Y5tOsQrBwZxwgiL3rNFhp%2FRgXaDtCrRSuHUYyzaeXChc0I46d2Q4Xeu9KBQt3lP46HFjXoRiPiEMVrGvV2q2JX72OJ%2FDnV27XJ2iqxmMsbd0hpzfUm%2BO8vtJvShAbh8S8CkNkaVfLmsfm%2FWeJaXf6Co9c0eP23&X-Amz-Signature=d690333f2dd4f8abe78b640c3477341eb163935fe61a6c0008a586c656dcde45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZKHKFL5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIH7A4m94j73qHUEFDWHSWwwmSbtwB%2BbVNvw1hDXg%2FrlYAiAYkXsMevaUseP3RV6fUdofYskuPX3lRS%2BEpfR92FPDAyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqDxfAqEDzw3Y%2Bml8KtwDPC5%2BJ3M9LSAwVMqq2B%2F3syo9sCXwP%2FI%2FE2TrWHDPS%2FC5LMHyBwWQNb36BUK6hjC272INyqw9i5MZ%2FtG%2BEgOMcr5bucQ3Salvo4vnN6jdZ4hSE99DbALcsUg9xF%2FAvljiZDnQoJo57H6baajcoSbzI9dfC%2BN5m1Ierw4RNN4hyKzfr1C%2Bg8CQB9A0gl6uzrGbIpGsXboutMDyFTnkjmuFbhYpcXejXAVppmpnXu48AWhjaTMaABrvFpOAtcTDKRXCoPzLilCKjSV%2BoERPtNiLBYnmXq%2BdlQ%2BUwOjlcyTKuGxw2LUHDnEclrbfnySdy8r8to78yVppPDmNRoJ8PJeSmvOZOR6B3WBCwIjRK%2FRykgrguce1XpbUyW5QcQS1c4glOBzjlwEygCVDikDjraBHn2kGGx71FzO223TQCjtaocKlzMbfbvwCKaeVuu8Y9W%2BtZgPXgLSWr1%2BN1CJKb6%2B7oqTtLgVE8ArWHNR2nDFnElfXUbEdOMIV%2Fn6A6NTq%2FYYdm%2BKD4hL%2Bb2UlEUzRmgJiUep7ohVLiwn%2FLbZc5FusOFcwDj4gn%2Bb8GUsaazODW9DBz9WwP%2FbS%2Ba7LpLQR89cr1QHIAKUBHS2H7P6DmZ9mWJVWz9Fs9OpbJA9Vz%2FEwkPvVxAY6pgFqT5Cfx1ZgaXmnt2hKZNQjpZWF0xhHuaZThPoQl%2BF6RV6wIP7JX4%2BW%2FAIZIAp5j0Y5tOsQrBwZxwgiL3rNFhp%2FRgXaDtCrRSuHUYyzaeXChc0I46d2Q4Xeu9KBQt3lP46HFjXoRiPiEMVrGvV2q2JX72OJ%2FDnV27XJ2iqxmMsbd0hpzfUm%2BO8vtJvShAbh8S8CkNkaVfLmsfm%2FWeJaXf6Co9c0eP23&X-Amz-Signature=695440c642e1c5e6c2d94083ad0c97001d2b3f35bede356254ae2eada9305bfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZKHKFL5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIH7A4m94j73qHUEFDWHSWwwmSbtwB%2BbVNvw1hDXg%2FrlYAiAYkXsMevaUseP3RV6fUdofYskuPX3lRS%2BEpfR92FPDAyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqDxfAqEDzw3Y%2Bml8KtwDPC5%2BJ3M9LSAwVMqq2B%2F3syo9sCXwP%2FI%2FE2TrWHDPS%2FC5LMHyBwWQNb36BUK6hjC272INyqw9i5MZ%2FtG%2BEgOMcr5bucQ3Salvo4vnN6jdZ4hSE99DbALcsUg9xF%2FAvljiZDnQoJo57H6baajcoSbzI9dfC%2BN5m1Ierw4RNN4hyKzfr1C%2Bg8CQB9A0gl6uzrGbIpGsXboutMDyFTnkjmuFbhYpcXejXAVppmpnXu48AWhjaTMaABrvFpOAtcTDKRXCoPzLilCKjSV%2BoERPtNiLBYnmXq%2BdlQ%2BUwOjlcyTKuGxw2LUHDnEclrbfnySdy8r8to78yVppPDmNRoJ8PJeSmvOZOR6B3WBCwIjRK%2FRykgrguce1XpbUyW5QcQS1c4glOBzjlwEygCVDikDjraBHn2kGGx71FzO223TQCjtaocKlzMbfbvwCKaeVuu8Y9W%2BtZgPXgLSWr1%2BN1CJKb6%2B7oqTtLgVE8ArWHNR2nDFnElfXUbEdOMIV%2Fn6A6NTq%2FYYdm%2BKD4hL%2Bb2UlEUzRmgJiUep7ohVLiwn%2FLbZc5FusOFcwDj4gn%2Bb8GUsaazODW9DBz9WwP%2FbS%2Ba7LpLQR89cr1QHIAKUBHS2H7P6DmZ9mWJVWz9Fs9OpbJA9Vz%2FEwkPvVxAY6pgFqT5Cfx1ZgaXmnt2hKZNQjpZWF0xhHuaZThPoQl%2BF6RV6wIP7JX4%2BW%2FAIZIAp5j0Y5tOsQrBwZxwgiL3rNFhp%2FRgXaDtCrRSuHUYyzaeXChc0I46d2Q4Xeu9KBQt3lP46HFjXoRiPiEMVrGvV2q2JX72OJ%2FDnV27XJ2iqxmMsbd0hpzfUm%2BO8vtJvShAbh8S8CkNkaVfLmsfm%2FWeJaXf6Co9c0eP23&X-Amz-Signature=012fe00a572f58169501c0d702e2f2a309da7b72e595eef4dc8f6dba78c0c7d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZKHKFL5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIH7A4m94j73qHUEFDWHSWwwmSbtwB%2BbVNvw1hDXg%2FrlYAiAYkXsMevaUseP3RV6fUdofYskuPX3lRS%2BEpfR92FPDAyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqDxfAqEDzw3Y%2Bml8KtwDPC5%2BJ3M9LSAwVMqq2B%2F3syo9sCXwP%2FI%2FE2TrWHDPS%2FC5LMHyBwWQNb36BUK6hjC272INyqw9i5MZ%2FtG%2BEgOMcr5bucQ3Salvo4vnN6jdZ4hSE99DbALcsUg9xF%2FAvljiZDnQoJo57H6baajcoSbzI9dfC%2BN5m1Ierw4RNN4hyKzfr1C%2Bg8CQB9A0gl6uzrGbIpGsXboutMDyFTnkjmuFbhYpcXejXAVppmpnXu48AWhjaTMaABrvFpOAtcTDKRXCoPzLilCKjSV%2BoERPtNiLBYnmXq%2BdlQ%2BUwOjlcyTKuGxw2LUHDnEclrbfnySdy8r8to78yVppPDmNRoJ8PJeSmvOZOR6B3WBCwIjRK%2FRykgrguce1XpbUyW5QcQS1c4glOBzjlwEygCVDikDjraBHn2kGGx71FzO223TQCjtaocKlzMbfbvwCKaeVuu8Y9W%2BtZgPXgLSWr1%2BN1CJKb6%2B7oqTtLgVE8ArWHNR2nDFnElfXUbEdOMIV%2Fn6A6NTq%2FYYdm%2BKD4hL%2Bb2UlEUzRmgJiUep7ohVLiwn%2FLbZc5FusOFcwDj4gn%2Bb8GUsaazODW9DBz9WwP%2FbS%2Ba7LpLQR89cr1QHIAKUBHS2H7P6DmZ9mWJVWz9Fs9OpbJA9Vz%2FEwkPvVxAY6pgFqT5Cfx1ZgaXmnt2hKZNQjpZWF0xhHuaZThPoQl%2BF6RV6wIP7JX4%2BW%2FAIZIAp5j0Y5tOsQrBwZxwgiL3rNFhp%2FRgXaDtCrRSuHUYyzaeXChc0I46d2Q4Xeu9KBQt3lP46HFjXoRiPiEMVrGvV2q2JX72OJ%2FDnV27XJ2iqxmMsbd0hpzfUm%2BO8vtJvShAbh8S8CkNkaVfLmsfm%2FWeJaXf6Co9c0eP23&X-Amz-Signature=84066542dff84eed9c44b6be2a09ec2f1237f1ad80802bf56c365df664c612f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZKHKFL5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIH7A4m94j73qHUEFDWHSWwwmSbtwB%2BbVNvw1hDXg%2FrlYAiAYkXsMevaUseP3RV6fUdofYskuPX3lRS%2BEpfR92FPDAyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqDxfAqEDzw3Y%2Bml8KtwDPC5%2BJ3M9LSAwVMqq2B%2F3syo9sCXwP%2FI%2FE2TrWHDPS%2FC5LMHyBwWQNb36BUK6hjC272INyqw9i5MZ%2FtG%2BEgOMcr5bucQ3Salvo4vnN6jdZ4hSE99DbALcsUg9xF%2FAvljiZDnQoJo57H6baajcoSbzI9dfC%2BN5m1Ierw4RNN4hyKzfr1C%2Bg8CQB9A0gl6uzrGbIpGsXboutMDyFTnkjmuFbhYpcXejXAVppmpnXu48AWhjaTMaABrvFpOAtcTDKRXCoPzLilCKjSV%2BoERPtNiLBYnmXq%2BdlQ%2BUwOjlcyTKuGxw2LUHDnEclrbfnySdy8r8to78yVppPDmNRoJ8PJeSmvOZOR6B3WBCwIjRK%2FRykgrguce1XpbUyW5QcQS1c4glOBzjlwEygCVDikDjraBHn2kGGx71FzO223TQCjtaocKlzMbfbvwCKaeVuu8Y9W%2BtZgPXgLSWr1%2BN1CJKb6%2B7oqTtLgVE8ArWHNR2nDFnElfXUbEdOMIV%2Fn6A6NTq%2FYYdm%2BKD4hL%2Bb2UlEUzRmgJiUep7ohVLiwn%2FLbZc5FusOFcwDj4gn%2Bb8GUsaazODW9DBz9WwP%2FbS%2Ba7LpLQR89cr1QHIAKUBHS2H7P6DmZ9mWJVWz9Fs9OpbJA9Vz%2FEwkPvVxAY6pgFqT5Cfx1ZgaXmnt2hKZNQjpZWF0xhHuaZThPoQl%2BF6RV6wIP7JX4%2BW%2FAIZIAp5j0Y5tOsQrBwZxwgiL3rNFhp%2FRgXaDtCrRSuHUYyzaeXChc0I46d2Q4Xeu9KBQt3lP46HFjXoRiPiEMVrGvV2q2JX72OJ%2FDnV27XJ2iqxmMsbd0hpzfUm%2BO8vtJvShAbh8S8CkNkaVfLmsfm%2FWeJaXf6Co9c0eP23&X-Amz-Signature=569588186679c68d99edb50cebc32ef206a3de32ba302ac52378d28159a2a3eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZKHKFL5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIH7A4m94j73qHUEFDWHSWwwmSbtwB%2BbVNvw1hDXg%2FrlYAiAYkXsMevaUseP3RV6fUdofYskuPX3lRS%2BEpfR92FPDAyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqDxfAqEDzw3Y%2Bml8KtwDPC5%2BJ3M9LSAwVMqq2B%2F3syo9sCXwP%2FI%2FE2TrWHDPS%2FC5LMHyBwWQNb36BUK6hjC272INyqw9i5MZ%2FtG%2BEgOMcr5bucQ3Salvo4vnN6jdZ4hSE99DbALcsUg9xF%2FAvljiZDnQoJo57H6baajcoSbzI9dfC%2BN5m1Ierw4RNN4hyKzfr1C%2Bg8CQB9A0gl6uzrGbIpGsXboutMDyFTnkjmuFbhYpcXejXAVppmpnXu48AWhjaTMaABrvFpOAtcTDKRXCoPzLilCKjSV%2BoERPtNiLBYnmXq%2BdlQ%2BUwOjlcyTKuGxw2LUHDnEclrbfnySdy8r8to78yVppPDmNRoJ8PJeSmvOZOR6B3WBCwIjRK%2FRykgrguce1XpbUyW5QcQS1c4glOBzjlwEygCVDikDjraBHn2kGGx71FzO223TQCjtaocKlzMbfbvwCKaeVuu8Y9W%2BtZgPXgLSWr1%2BN1CJKb6%2B7oqTtLgVE8ArWHNR2nDFnElfXUbEdOMIV%2Fn6A6NTq%2FYYdm%2BKD4hL%2Bb2UlEUzRmgJiUep7ohVLiwn%2FLbZc5FusOFcwDj4gn%2Bb8GUsaazODW9DBz9WwP%2FbS%2Ba7LpLQR89cr1QHIAKUBHS2H7P6DmZ9mWJVWz9Fs9OpbJA9Vz%2FEwkPvVxAY6pgFqT5Cfx1ZgaXmnt2hKZNQjpZWF0xhHuaZThPoQl%2BF6RV6wIP7JX4%2BW%2FAIZIAp5j0Y5tOsQrBwZxwgiL3rNFhp%2FRgXaDtCrRSuHUYyzaeXChc0I46d2Q4Xeu9KBQt3lP46HFjXoRiPiEMVrGvV2q2JX72OJ%2FDnV27XJ2iqxmMsbd0hpzfUm%2BO8vtJvShAbh8S8CkNkaVfLmsfm%2FWeJaXf6Co9c0eP23&X-Amz-Signature=87bb0c98597e0228ef5178f49772bf4fc9815b9cf25ab26f5075b4f728438ec3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
