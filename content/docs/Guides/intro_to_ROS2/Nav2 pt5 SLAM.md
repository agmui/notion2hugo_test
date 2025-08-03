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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JKUQDVB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWX116zzze2w6papsiI2FMkxlLerw9So6V3Vh6XnZq8gIgSWnBvv%2F03ZNpO33jL0417NMTOmpWu%2Fsch1zowXahRVkq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDImfc%2FYmvYJKyjBB9ircA%2FqyTJNsk2gNRlTnKbHqoDh9OER7PjnwsaaKqs4yL8SLxh1W3h0le6oS4aHIAxWHrAmmLMWNg7d33RpkFtKi8KoRtFMUOBG3Finkt5YidPF35%2BPRDnT3NLeGS2MEthN8O2%2FHSlARCqEsIDEDuhRGgcqEhPLFy4DNjDrT%2F46JUxnW787tORGI723Bs8R2p60yvNuYGv0PSf3vbrspxj12SLJ05l5QpQhaLaJoaVgIxWM6B9KJgxPTm9S6RNIm67DJ3D2w4Qxm%2Fo%2FkhIMOHloVkGjsMS%2B6DOWkT9fo%2FAEY507P6ZIIYfjsH%2FtQ8DUisYzUF84rduQMtAvrE0GmdyPHbf7ytpngQPJtzlXRA%2B%2FBN1%2FktcaPZsuxgpnWKimvYylzgtwCyOV1AamO4Tx4gnd4IdY4Y3Wn8%2FqvwAZHyKtUWehriQ%2Fuu%2BMC%2F6eI5YEmwGx6bdeCcoojo6vw1FJIqjA1odGEOmM1mcuAf22jnVfcjnjF0aH0upSXZ8Q2Zg2yuypiLPrjKOr0eRFyPiAAxbJVj4AgWnap2C%2BcLk5ceOPRMUXaKjNcp2CWiWzPAlNTg3BhJ3kf4kWQmJegyjegY7li0evliNfeYgMnnmHrjGXTTR7DWtnMZZRIR8z%2FYa13MNelu8QGOqUBnVCV%2F0Cr9E7jqLvG5uK1VCAQ3rxN7qT5hgStBoCHr0IVRPda64UizDMbhoDJs0Hxb79Sjb%2FB0yj71He5m9foIuKTFONFODQX4wDzcmALqn4FIWsk0p0MhlweBdntN%2FOQOSTIMv3i4pYU5iS2keW4iLVGQ7bD6JMLxEI%2BictC1gxUga0kjgGgNVKZ3G7OdmwbpH5PjZRORCc%2BrJrF%2B6EA7mdjeF5u&X-Amz-Signature=4a3470b3a02bfdd7ad1fce8e20da335622df76a5294f9cec83858a075a02ec7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JKUQDVB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWX116zzze2w6papsiI2FMkxlLerw9So6V3Vh6XnZq8gIgSWnBvv%2F03ZNpO33jL0417NMTOmpWu%2Fsch1zowXahRVkq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDImfc%2FYmvYJKyjBB9ircA%2FqyTJNsk2gNRlTnKbHqoDh9OER7PjnwsaaKqs4yL8SLxh1W3h0le6oS4aHIAxWHrAmmLMWNg7d33RpkFtKi8KoRtFMUOBG3Finkt5YidPF35%2BPRDnT3NLeGS2MEthN8O2%2FHSlARCqEsIDEDuhRGgcqEhPLFy4DNjDrT%2F46JUxnW787tORGI723Bs8R2p60yvNuYGv0PSf3vbrspxj12SLJ05l5QpQhaLaJoaVgIxWM6B9KJgxPTm9S6RNIm67DJ3D2w4Qxm%2Fo%2FkhIMOHloVkGjsMS%2B6DOWkT9fo%2FAEY507P6ZIIYfjsH%2FtQ8DUisYzUF84rduQMtAvrE0GmdyPHbf7ytpngQPJtzlXRA%2B%2FBN1%2FktcaPZsuxgpnWKimvYylzgtwCyOV1AamO4Tx4gnd4IdY4Y3Wn8%2FqvwAZHyKtUWehriQ%2Fuu%2BMC%2F6eI5YEmwGx6bdeCcoojo6vw1FJIqjA1odGEOmM1mcuAf22jnVfcjnjF0aH0upSXZ8Q2Zg2yuypiLPrjKOr0eRFyPiAAxbJVj4AgWnap2C%2BcLk5ceOPRMUXaKjNcp2CWiWzPAlNTg3BhJ3kf4kWQmJegyjegY7li0evliNfeYgMnnmHrjGXTTR7DWtnMZZRIR8z%2FYa13MNelu8QGOqUBnVCV%2F0Cr9E7jqLvG5uK1VCAQ3rxN7qT5hgStBoCHr0IVRPda64UizDMbhoDJs0Hxb79Sjb%2FB0yj71He5m9foIuKTFONFODQX4wDzcmALqn4FIWsk0p0MhlweBdntN%2FOQOSTIMv3i4pYU5iS2keW4iLVGQ7bD6JMLxEI%2BictC1gxUga0kjgGgNVKZ3G7OdmwbpH5PjZRORCc%2BrJrF%2B6EA7mdjeF5u&X-Amz-Signature=a20ecadc0b1d943de49747bebf862adc2ab961be3c3c2ab6b0cd484fe6b3fc46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JKUQDVB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWX116zzze2w6papsiI2FMkxlLerw9So6V3Vh6XnZq8gIgSWnBvv%2F03ZNpO33jL0417NMTOmpWu%2Fsch1zowXahRVkq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDImfc%2FYmvYJKyjBB9ircA%2FqyTJNsk2gNRlTnKbHqoDh9OER7PjnwsaaKqs4yL8SLxh1W3h0le6oS4aHIAxWHrAmmLMWNg7d33RpkFtKi8KoRtFMUOBG3Finkt5YidPF35%2BPRDnT3NLeGS2MEthN8O2%2FHSlARCqEsIDEDuhRGgcqEhPLFy4DNjDrT%2F46JUxnW787tORGI723Bs8R2p60yvNuYGv0PSf3vbrspxj12SLJ05l5QpQhaLaJoaVgIxWM6B9KJgxPTm9S6RNIm67DJ3D2w4Qxm%2Fo%2FkhIMOHloVkGjsMS%2B6DOWkT9fo%2FAEY507P6ZIIYfjsH%2FtQ8DUisYzUF84rduQMtAvrE0GmdyPHbf7ytpngQPJtzlXRA%2B%2FBN1%2FktcaPZsuxgpnWKimvYylzgtwCyOV1AamO4Tx4gnd4IdY4Y3Wn8%2FqvwAZHyKtUWehriQ%2Fuu%2BMC%2F6eI5YEmwGx6bdeCcoojo6vw1FJIqjA1odGEOmM1mcuAf22jnVfcjnjF0aH0upSXZ8Q2Zg2yuypiLPrjKOr0eRFyPiAAxbJVj4AgWnap2C%2BcLk5ceOPRMUXaKjNcp2CWiWzPAlNTg3BhJ3kf4kWQmJegyjegY7li0evliNfeYgMnnmHrjGXTTR7DWtnMZZRIR8z%2FYa13MNelu8QGOqUBnVCV%2F0Cr9E7jqLvG5uK1VCAQ3rxN7qT5hgStBoCHr0IVRPda64UizDMbhoDJs0Hxb79Sjb%2FB0yj71He5m9foIuKTFONFODQX4wDzcmALqn4FIWsk0p0MhlweBdntN%2FOQOSTIMv3i4pYU5iS2keW4iLVGQ7bD6JMLxEI%2BictC1gxUga0kjgGgNVKZ3G7OdmwbpH5PjZRORCc%2BrJrF%2B6EA7mdjeF5u&X-Amz-Signature=78084ef7ddda44e47be295d5f6f7e6930a9963e4c04bdc5ffd5f2173ce6c908a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JKUQDVB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWX116zzze2w6papsiI2FMkxlLerw9So6V3Vh6XnZq8gIgSWnBvv%2F03ZNpO33jL0417NMTOmpWu%2Fsch1zowXahRVkq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDImfc%2FYmvYJKyjBB9ircA%2FqyTJNsk2gNRlTnKbHqoDh9OER7PjnwsaaKqs4yL8SLxh1W3h0le6oS4aHIAxWHrAmmLMWNg7d33RpkFtKi8KoRtFMUOBG3Finkt5YidPF35%2BPRDnT3NLeGS2MEthN8O2%2FHSlARCqEsIDEDuhRGgcqEhPLFy4DNjDrT%2F46JUxnW787tORGI723Bs8R2p60yvNuYGv0PSf3vbrspxj12SLJ05l5QpQhaLaJoaVgIxWM6B9KJgxPTm9S6RNIm67DJ3D2w4Qxm%2Fo%2FkhIMOHloVkGjsMS%2B6DOWkT9fo%2FAEY507P6ZIIYfjsH%2FtQ8DUisYzUF84rduQMtAvrE0GmdyPHbf7ytpngQPJtzlXRA%2B%2FBN1%2FktcaPZsuxgpnWKimvYylzgtwCyOV1AamO4Tx4gnd4IdY4Y3Wn8%2FqvwAZHyKtUWehriQ%2Fuu%2BMC%2F6eI5YEmwGx6bdeCcoojo6vw1FJIqjA1odGEOmM1mcuAf22jnVfcjnjF0aH0upSXZ8Q2Zg2yuypiLPrjKOr0eRFyPiAAxbJVj4AgWnap2C%2BcLk5ceOPRMUXaKjNcp2CWiWzPAlNTg3BhJ3kf4kWQmJegyjegY7li0evliNfeYgMnnmHrjGXTTR7DWtnMZZRIR8z%2FYa13MNelu8QGOqUBnVCV%2F0Cr9E7jqLvG5uK1VCAQ3rxN7qT5hgStBoCHr0IVRPda64UizDMbhoDJs0Hxb79Sjb%2FB0yj71He5m9foIuKTFONFODQX4wDzcmALqn4FIWsk0p0MhlweBdntN%2FOQOSTIMv3i4pYU5iS2keW4iLVGQ7bD6JMLxEI%2BictC1gxUga0kjgGgNVKZ3G7OdmwbpH5PjZRORCc%2BrJrF%2B6EA7mdjeF5u&X-Amz-Signature=02c845c953e192ce38c0141ad6f08d31f5705159dc5289207f432b923cf01bca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JKUQDVB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWX116zzze2w6papsiI2FMkxlLerw9So6V3Vh6XnZq8gIgSWnBvv%2F03ZNpO33jL0417NMTOmpWu%2Fsch1zowXahRVkq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDImfc%2FYmvYJKyjBB9ircA%2FqyTJNsk2gNRlTnKbHqoDh9OER7PjnwsaaKqs4yL8SLxh1W3h0le6oS4aHIAxWHrAmmLMWNg7d33RpkFtKi8KoRtFMUOBG3Finkt5YidPF35%2BPRDnT3NLeGS2MEthN8O2%2FHSlARCqEsIDEDuhRGgcqEhPLFy4DNjDrT%2F46JUxnW787tORGI723Bs8R2p60yvNuYGv0PSf3vbrspxj12SLJ05l5QpQhaLaJoaVgIxWM6B9KJgxPTm9S6RNIm67DJ3D2w4Qxm%2Fo%2FkhIMOHloVkGjsMS%2B6DOWkT9fo%2FAEY507P6ZIIYfjsH%2FtQ8DUisYzUF84rduQMtAvrE0GmdyPHbf7ytpngQPJtzlXRA%2B%2FBN1%2FktcaPZsuxgpnWKimvYylzgtwCyOV1AamO4Tx4gnd4IdY4Y3Wn8%2FqvwAZHyKtUWehriQ%2Fuu%2BMC%2F6eI5YEmwGx6bdeCcoojo6vw1FJIqjA1odGEOmM1mcuAf22jnVfcjnjF0aH0upSXZ8Q2Zg2yuypiLPrjKOr0eRFyPiAAxbJVj4AgWnap2C%2BcLk5ceOPRMUXaKjNcp2CWiWzPAlNTg3BhJ3kf4kWQmJegyjegY7li0evliNfeYgMnnmHrjGXTTR7DWtnMZZRIR8z%2FYa13MNelu8QGOqUBnVCV%2F0Cr9E7jqLvG5uK1VCAQ3rxN7qT5hgStBoCHr0IVRPda64UizDMbhoDJs0Hxb79Sjb%2FB0yj71He5m9foIuKTFONFODQX4wDzcmALqn4FIWsk0p0MhlweBdntN%2FOQOSTIMv3i4pYU5iS2keW4iLVGQ7bD6JMLxEI%2BictC1gxUga0kjgGgNVKZ3G7OdmwbpH5PjZRORCc%2BrJrF%2B6EA7mdjeF5u&X-Amz-Signature=949c766a6cf65c15c2f5eff6b09c780037fb9b9c4e1593f7ffe2504cc51c56d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JKUQDVB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWX116zzze2w6papsiI2FMkxlLerw9So6V3Vh6XnZq8gIgSWnBvv%2F03ZNpO33jL0417NMTOmpWu%2Fsch1zowXahRVkq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDImfc%2FYmvYJKyjBB9ircA%2FqyTJNsk2gNRlTnKbHqoDh9OER7PjnwsaaKqs4yL8SLxh1W3h0le6oS4aHIAxWHrAmmLMWNg7d33RpkFtKi8KoRtFMUOBG3Finkt5YidPF35%2BPRDnT3NLeGS2MEthN8O2%2FHSlARCqEsIDEDuhRGgcqEhPLFy4DNjDrT%2F46JUxnW787tORGI723Bs8R2p60yvNuYGv0PSf3vbrspxj12SLJ05l5QpQhaLaJoaVgIxWM6B9KJgxPTm9S6RNIm67DJ3D2w4Qxm%2Fo%2FkhIMOHloVkGjsMS%2B6DOWkT9fo%2FAEY507P6ZIIYfjsH%2FtQ8DUisYzUF84rduQMtAvrE0GmdyPHbf7ytpngQPJtzlXRA%2B%2FBN1%2FktcaPZsuxgpnWKimvYylzgtwCyOV1AamO4Tx4gnd4IdY4Y3Wn8%2FqvwAZHyKtUWehriQ%2Fuu%2BMC%2F6eI5YEmwGx6bdeCcoojo6vw1FJIqjA1odGEOmM1mcuAf22jnVfcjnjF0aH0upSXZ8Q2Zg2yuypiLPrjKOr0eRFyPiAAxbJVj4AgWnap2C%2BcLk5ceOPRMUXaKjNcp2CWiWzPAlNTg3BhJ3kf4kWQmJegyjegY7li0evliNfeYgMnnmHrjGXTTR7DWtnMZZRIR8z%2FYa13MNelu8QGOqUBnVCV%2F0Cr9E7jqLvG5uK1VCAQ3rxN7qT5hgStBoCHr0IVRPda64UizDMbhoDJs0Hxb79Sjb%2FB0yj71He5m9foIuKTFONFODQX4wDzcmALqn4FIWsk0p0MhlweBdntN%2FOQOSTIMv3i4pYU5iS2keW4iLVGQ7bD6JMLxEI%2BictC1gxUga0kjgGgNVKZ3G7OdmwbpH5PjZRORCc%2BrJrF%2B6EA7mdjeF5u&X-Amz-Signature=c3626fe591458e5eb8dd51ff72a2913bad013c06da00556eda3de9db495cdeff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JKUQDVB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWX116zzze2w6papsiI2FMkxlLerw9So6V3Vh6XnZq8gIgSWnBvv%2F03ZNpO33jL0417NMTOmpWu%2Fsch1zowXahRVkq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDImfc%2FYmvYJKyjBB9ircA%2FqyTJNsk2gNRlTnKbHqoDh9OER7PjnwsaaKqs4yL8SLxh1W3h0le6oS4aHIAxWHrAmmLMWNg7d33RpkFtKi8KoRtFMUOBG3Finkt5YidPF35%2BPRDnT3NLeGS2MEthN8O2%2FHSlARCqEsIDEDuhRGgcqEhPLFy4DNjDrT%2F46JUxnW787tORGI723Bs8R2p60yvNuYGv0PSf3vbrspxj12SLJ05l5QpQhaLaJoaVgIxWM6B9KJgxPTm9S6RNIm67DJ3D2w4Qxm%2Fo%2FkhIMOHloVkGjsMS%2B6DOWkT9fo%2FAEY507P6ZIIYfjsH%2FtQ8DUisYzUF84rduQMtAvrE0GmdyPHbf7ytpngQPJtzlXRA%2B%2FBN1%2FktcaPZsuxgpnWKimvYylzgtwCyOV1AamO4Tx4gnd4IdY4Y3Wn8%2FqvwAZHyKtUWehriQ%2Fuu%2BMC%2F6eI5YEmwGx6bdeCcoojo6vw1FJIqjA1odGEOmM1mcuAf22jnVfcjnjF0aH0upSXZ8Q2Zg2yuypiLPrjKOr0eRFyPiAAxbJVj4AgWnap2C%2BcLk5ceOPRMUXaKjNcp2CWiWzPAlNTg3BhJ3kf4kWQmJegyjegY7li0evliNfeYgMnnmHrjGXTTR7DWtnMZZRIR8z%2FYa13MNelu8QGOqUBnVCV%2F0Cr9E7jqLvG5uK1VCAQ3rxN7qT5hgStBoCHr0IVRPda64UizDMbhoDJs0Hxb79Sjb%2FB0yj71He5m9foIuKTFONFODQX4wDzcmALqn4FIWsk0p0MhlweBdntN%2FOQOSTIMv3i4pYU5iS2keW4iLVGQ7bD6JMLxEI%2BictC1gxUga0kjgGgNVKZ3G7OdmwbpH5PjZRORCc%2BrJrF%2B6EA7mdjeF5u&X-Amz-Signature=7c84eaf548d7faddbaad0ba9ce08e1bf1bb3daa9b793557f3e470f6c0fb48abe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JKUQDVB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWX116zzze2w6papsiI2FMkxlLerw9So6V3Vh6XnZq8gIgSWnBvv%2F03ZNpO33jL0417NMTOmpWu%2Fsch1zowXahRVkq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDImfc%2FYmvYJKyjBB9ircA%2FqyTJNsk2gNRlTnKbHqoDh9OER7PjnwsaaKqs4yL8SLxh1W3h0le6oS4aHIAxWHrAmmLMWNg7d33RpkFtKi8KoRtFMUOBG3Finkt5YidPF35%2BPRDnT3NLeGS2MEthN8O2%2FHSlARCqEsIDEDuhRGgcqEhPLFy4DNjDrT%2F46JUxnW787tORGI723Bs8R2p60yvNuYGv0PSf3vbrspxj12SLJ05l5QpQhaLaJoaVgIxWM6B9KJgxPTm9S6RNIm67DJ3D2w4Qxm%2Fo%2FkhIMOHloVkGjsMS%2B6DOWkT9fo%2FAEY507P6ZIIYfjsH%2FtQ8DUisYzUF84rduQMtAvrE0GmdyPHbf7ytpngQPJtzlXRA%2B%2FBN1%2FktcaPZsuxgpnWKimvYylzgtwCyOV1AamO4Tx4gnd4IdY4Y3Wn8%2FqvwAZHyKtUWehriQ%2Fuu%2BMC%2F6eI5YEmwGx6bdeCcoojo6vw1FJIqjA1odGEOmM1mcuAf22jnVfcjnjF0aH0upSXZ8Q2Zg2yuypiLPrjKOr0eRFyPiAAxbJVj4AgWnap2C%2BcLk5ceOPRMUXaKjNcp2CWiWzPAlNTg3BhJ3kf4kWQmJegyjegY7li0evliNfeYgMnnmHrjGXTTR7DWtnMZZRIR8z%2FYa13MNelu8QGOqUBnVCV%2F0Cr9E7jqLvG5uK1VCAQ3rxN7qT5hgStBoCHr0IVRPda64UizDMbhoDJs0Hxb79Sjb%2FB0yj71He5m9foIuKTFONFODQX4wDzcmALqn4FIWsk0p0MhlweBdntN%2FOQOSTIMv3i4pYU5iS2keW4iLVGQ7bD6JMLxEI%2BictC1gxUga0kjgGgNVKZ3G7OdmwbpH5PjZRORCc%2BrJrF%2B6EA7mdjeF5u&X-Amz-Signature=1a643904eda968d150b0dc339575fe3dc9f41006bda08a0f965bf4682bceb746&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JKUQDVB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWX116zzze2w6papsiI2FMkxlLerw9So6V3Vh6XnZq8gIgSWnBvv%2F03ZNpO33jL0417NMTOmpWu%2Fsch1zowXahRVkq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDImfc%2FYmvYJKyjBB9ircA%2FqyTJNsk2gNRlTnKbHqoDh9OER7PjnwsaaKqs4yL8SLxh1W3h0le6oS4aHIAxWHrAmmLMWNg7d33RpkFtKi8KoRtFMUOBG3Finkt5YidPF35%2BPRDnT3NLeGS2MEthN8O2%2FHSlARCqEsIDEDuhRGgcqEhPLFy4DNjDrT%2F46JUxnW787tORGI723Bs8R2p60yvNuYGv0PSf3vbrspxj12SLJ05l5QpQhaLaJoaVgIxWM6B9KJgxPTm9S6RNIm67DJ3D2w4Qxm%2Fo%2FkhIMOHloVkGjsMS%2B6DOWkT9fo%2FAEY507P6ZIIYfjsH%2FtQ8DUisYzUF84rduQMtAvrE0GmdyPHbf7ytpngQPJtzlXRA%2B%2FBN1%2FktcaPZsuxgpnWKimvYylzgtwCyOV1AamO4Tx4gnd4IdY4Y3Wn8%2FqvwAZHyKtUWehriQ%2Fuu%2BMC%2F6eI5YEmwGx6bdeCcoojo6vw1FJIqjA1odGEOmM1mcuAf22jnVfcjnjF0aH0upSXZ8Q2Zg2yuypiLPrjKOr0eRFyPiAAxbJVj4AgWnap2C%2BcLk5ceOPRMUXaKjNcp2CWiWzPAlNTg3BhJ3kf4kWQmJegyjegY7li0evliNfeYgMnnmHrjGXTTR7DWtnMZZRIR8z%2FYa13MNelu8QGOqUBnVCV%2F0Cr9E7jqLvG5uK1VCAQ3rxN7qT5hgStBoCHr0IVRPda64UizDMbhoDJs0Hxb79Sjb%2FB0yj71He5m9foIuKTFONFODQX4wDzcmALqn4FIWsk0p0MhlweBdntN%2FOQOSTIMv3i4pYU5iS2keW4iLVGQ7bD6JMLxEI%2BictC1gxUga0kjgGgNVKZ3G7OdmwbpH5PjZRORCc%2BrJrF%2B6EA7mdjeF5u&X-Amz-Signature=49844d0dd9b649d31ee0732e355b2e80916431cea0a522ed37cf1737df168066&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JKUQDVB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWX116zzze2w6papsiI2FMkxlLerw9So6V3Vh6XnZq8gIgSWnBvv%2F03ZNpO33jL0417NMTOmpWu%2Fsch1zowXahRVkq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDImfc%2FYmvYJKyjBB9ircA%2FqyTJNsk2gNRlTnKbHqoDh9OER7PjnwsaaKqs4yL8SLxh1W3h0le6oS4aHIAxWHrAmmLMWNg7d33RpkFtKi8KoRtFMUOBG3Finkt5YidPF35%2BPRDnT3NLeGS2MEthN8O2%2FHSlARCqEsIDEDuhRGgcqEhPLFy4DNjDrT%2F46JUxnW787tORGI723Bs8R2p60yvNuYGv0PSf3vbrspxj12SLJ05l5QpQhaLaJoaVgIxWM6B9KJgxPTm9S6RNIm67DJ3D2w4Qxm%2Fo%2FkhIMOHloVkGjsMS%2B6DOWkT9fo%2FAEY507P6ZIIYfjsH%2FtQ8DUisYzUF84rduQMtAvrE0GmdyPHbf7ytpngQPJtzlXRA%2B%2FBN1%2FktcaPZsuxgpnWKimvYylzgtwCyOV1AamO4Tx4gnd4IdY4Y3Wn8%2FqvwAZHyKtUWehriQ%2Fuu%2BMC%2F6eI5YEmwGx6bdeCcoojo6vw1FJIqjA1odGEOmM1mcuAf22jnVfcjnjF0aH0upSXZ8Q2Zg2yuypiLPrjKOr0eRFyPiAAxbJVj4AgWnap2C%2BcLk5ceOPRMUXaKjNcp2CWiWzPAlNTg3BhJ3kf4kWQmJegyjegY7li0evliNfeYgMnnmHrjGXTTR7DWtnMZZRIR8z%2FYa13MNelu8QGOqUBnVCV%2F0Cr9E7jqLvG5uK1VCAQ3rxN7qT5hgStBoCHr0IVRPda64UizDMbhoDJs0Hxb79Sjb%2FB0yj71He5m9foIuKTFONFODQX4wDzcmALqn4FIWsk0p0MhlweBdntN%2FOQOSTIMv3i4pYU5iS2keW4iLVGQ7bD6JMLxEI%2BictC1gxUga0kjgGgNVKZ3G7OdmwbpH5PjZRORCc%2BrJrF%2B6EA7mdjeF5u&X-Amz-Signature=f115fb6c755b2df8d3a18b43cb7b8e23c2c0b0c47e71fa88ebc43865ae551bb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JKUQDVB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWX116zzze2w6papsiI2FMkxlLerw9So6V3Vh6XnZq8gIgSWnBvv%2F03ZNpO33jL0417NMTOmpWu%2Fsch1zowXahRVkq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDImfc%2FYmvYJKyjBB9ircA%2FqyTJNsk2gNRlTnKbHqoDh9OER7PjnwsaaKqs4yL8SLxh1W3h0le6oS4aHIAxWHrAmmLMWNg7d33RpkFtKi8KoRtFMUOBG3Finkt5YidPF35%2BPRDnT3NLeGS2MEthN8O2%2FHSlARCqEsIDEDuhRGgcqEhPLFy4DNjDrT%2F46JUxnW787tORGI723Bs8R2p60yvNuYGv0PSf3vbrspxj12SLJ05l5QpQhaLaJoaVgIxWM6B9KJgxPTm9S6RNIm67DJ3D2w4Qxm%2Fo%2FkhIMOHloVkGjsMS%2B6DOWkT9fo%2FAEY507P6ZIIYfjsH%2FtQ8DUisYzUF84rduQMtAvrE0GmdyPHbf7ytpngQPJtzlXRA%2B%2FBN1%2FktcaPZsuxgpnWKimvYylzgtwCyOV1AamO4Tx4gnd4IdY4Y3Wn8%2FqvwAZHyKtUWehriQ%2Fuu%2BMC%2F6eI5YEmwGx6bdeCcoojo6vw1FJIqjA1odGEOmM1mcuAf22jnVfcjnjF0aH0upSXZ8Q2Zg2yuypiLPrjKOr0eRFyPiAAxbJVj4AgWnap2C%2BcLk5ceOPRMUXaKjNcp2CWiWzPAlNTg3BhJ3kf4kWQmJegyjegY7li0evliNfeYgMnnmHrjGXTTR7DWtnMZZRIR8z%2FYa13MNelu8QGOqUBnVCV%2F0Cr9E7jqLvG5uK1VCAQ3rxN7qT5hgStBoCHr0IVRPda64UizDMbhoDJs0Hxb79Sjb%2FB0yj71He5m9foIuKTFONFODQX4wDzcmALqn4FIWsk0p0MhlweBdntN%2FOQOSTIMv3i4pYU5iS2keW4iLVGQ7bD6JMLxEI%2BictC1gxUga0kjgGgNVKZ3G7OdmwbpH5PjZRORCc%2BrJrF%2B6EA7mdjeF5u&X-Amz-Signature=a8186cba80f0619f50b603dec6bf382596ba619f8a1285df342103eaccc95fff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JKUQDVB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWX116zzze2w6papsiI2FMkxlLerw9So6V3Vh6XnZq8gIgSWnBvv%2F03ZNpO33jL0417NMTOmpWu%2Fsch1zowXahRVkq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDImfc%2FYmvYJKyjBB9ircA%2FqyTJNsk2gNRlTnKbHqoDh9OER7PjnwsaaKqs4yL8SLxh1W3h0le6oS4aHIAxWHrAmmLMWNg7d33RpkFtKi8KoRtFMUOBG3Finkt5YidPF35%2BPRDnT3NLeGS2MEthN8O2%2FHSlARCqEsIDEDuhRGgcqEhPLFy4DNjDrT%2F46JUxnW787tORGI723Bs8R2p60yvNuYGv0PSf3vbrspxj12SLJ05l5QpQhaLaJoaVgIxWM6B9KJgxPTm9S6RNIm67DJ3D2w4Qxm%2Fo%2FkhIMOHloVkGjsMS%2B6DOWkT9fo%2FAEY507P6ZIIYfjsH%2FtQ8DUisYzUF84rduQMtAvrE0GmdyPHbf7ytpngQPJtzlXRA%2B%2FBN1%2FktcaPZsuxgpnWKimvYylzgtwCyOV1AamO4Tx4gnd4IdY4Y3Wn8%2FqvwAZHyKtUWehriQ%2Fuu%2BMC%2F6eI5YEmwGx6bdeCcoojo6vw1FJIqjA1odGEOmM1mcuAf22jnVfcjnjF0aH0upSXZ8Q2Zg2yuypiLPrjKOr0eRFyPiAAxbJVj4AgWnap2C%2BcLk5ceOPRMUXaKjNcp2CWiWzPAlNTg3BhJ3kf4kWQmJegyjegY7li0evliNfeYgMnnmHrjGXTTR7DWtnMZZRIR8z%2FYa13MNelu8QGOqUBnVCV%2F0Cr9E7jqLvG5uK1VCAQ3rxN7qT5hgStBoCHr0IVRPda64UizDMbhoDJs0Hxb79Sjb%2FB0yj71He5m9foIuKTFONFODQX4wDzcmALqn4FIWsk0p0MhlweBdntN%2FOQOSTIMv3i4pYU5iS2keW4iLVGQ7bD6JMLxEI%2BictC1gxUga0kjgGgNVKZ3G7OdmwbpH5PjZRORCc%2BrJrF%2B6EA7mdjeF5u&X-Amz-Signature=017bd96a8cbcff687ac15f79878218bb8869f53823c30c71fc9d8a381bfe20af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JKUQDVB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWX116zzze2w6papsiI2FMkxlLerw9So6V3Vh6XnZq8gIgSWnBvv%2F03ZNpO33jL0417NMTOmpWu%2Fsch1zowXahRVkq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDImfc%2FYmvYJKyjBB9ircA%2FqyTJNsk2gNRlTnKbHqoDh9OER7PjnwsaaKqs4yL8SLxh1W3h0le6oS4aHIAxWHrAmmLMWNg7d33RpkFtKi8KoRtFMUOBG3Finkt5YidPF35%2BPRDnT3NLeGS2MEthN8O2%2FHSlARCqEsIDEDuhRGgcqEhPLFy4DNjDrT%2F46JUxnW787tORGI723Bs8R2p60yvNuYGv0PSf3vbrspxj12SLJ05l5QpQhaLaJoaVgIxWM6B9KJgxPTm9S6RNIm67DJ3D2w4Qxm%2Fo%2FkhIMOHloVkGjsMS%2B6DOWkT9fo%2FAEY507P6ZIIYfjsH%2FtQ8DUisYzUF84rduQMtAvrE0GmdyPHbf7ytpngQPJtzlXRA%2B%2FBN1%2FktcaPZsuxgpnWKimvYylzgtwCyOV1AamO4Tx4gnd4IdY4Y3Wn8%2FqvwAZHyKtUWehriQ%2Fuu%2BMC%2F6eI5YEmwGx6bdeCcoojo6vw1FJIqjA1odGEOmM1mcuAf22jnVfcjnjF0aH0upSXZ8Q2Zg2yuypiLPrjKOr0eRFyPiAAxbJVj4AgWnap2C%2BcLk5ceOPRMUXaKjNcp2CWiWzPAlNTg3BhJ3kf4kWQmJegyjegY7li0evliNfeYgMnnmHrjGXTTR7DWtnMZZRIR8z%2FYa13MNelu8QGOqUBnVCV%2F0Cr9E7jqLvG5uK1VCAQ3rxN7qT5hgStBoCHr0IVRPda64UizDMbhoDJs0Hxb79Sjb%2FB0yj71He5m9foIuKTFONFODQX4wDzcmALqn4FIWsk0p0MhlweBdntN%2FOQOSTIMv3i4pYU5iS2keW4iLVGQ7bD6JMLxEI%2BictC1gxUga0kjgGgNVKZ3G7OdmwbpH5PjZRORCc%2BrJrF%2B6EA7mdjeF5u&X-Amz-Signature=43f11cbf0c60bbb0b3186461da9581c684739c0f12f81d9400fcbf5c77949e6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JKUQDVB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWX116zzze2w6papsiI2FMkxlLerw9So6V3Vh6XnZq8gIgSWnBvv%2F03ZNpO33jL0417NMTOmpWu%2Fsch1zowXahRVkq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDImfc%2FYmvYJKyjBB9ircA%2FqyTJNsk2gNRlTnKbHqoDh9OER7PjnwsaaKqs4yL8SLxh1W3h0le6oS4aHIAxWHrAmmLMWNg7d33RpkFtKi8KoRtFMUOBG3Finkt5YidPF35%2BPRDnT3NLeGS2MEthN8O2%2FHSlARCqEsIDEDuhRGgcqEhPLFy4DNjDrT%2F46JUxnW787tORGI723Bs8R2p60yvNuYGv0PSf3vbrspxj12SLJ05l5QpQhaLaJoaVgIxWM6B9KJgxPTm9S6RNIm67DJ3D2w4Qxm%2Fo%2FkhIMOHloVkGjsMS%2B6DOWkT9fo%2FAEY507P6ZIIYfjsH%2FtQ8DUisYzUF84rduQMtAvrE0GmdyPHbf7ytpngQPJtzlXRA%2B%2FBN1%2FktcaPZsuxgpnWKimvYylzgtwCyOV1AamO4Tx4gnd4IdY4Y3Wn8%2FqvwAZHyKtUWehriQ%2Fuu%2BMC%2F6eI5YEmwGx6bdeCcoojo6vw1FJIqjA1odGEOmM1mcuAf22jnVfcjnjF0aH0upSXZ8Q2Zg2yuypiLPrjKOr0eRFyPiAAxbJVj4AgWnap2C%2BcLk5ceOPRMUXaKjNcp2CWiWzPAlNTg3BhJ3kf4kWQmJegyjegY7li0evliNfeYgMnnmHrjGXTTR7DWtnMZZRIR8z%2FYa13MNelu8QGOqUBnVCV%2F0Cr9E7jqLvG5uK1VCAQ3rxN7qT5hgStBoCHr0IVRPda64UizDMbhoDJs0Hxb79Sjb%2FB0yj71He5m9foIuKTFONFODQX4wDzcmALqn4FIWsk0p0MhlweBdntN%2FOQOSTIMv3i4pYU5iS2keW4iLVGQ7bD6JMLxEI%2BictC1gxUga0kjgGgNVKZ3G7OdmwbpH5PjZRORCc%2BrJrF%2B6EA7mdjeF5u&X-Amz-Signature=77e71518d343fab52e956f789331d6b1b5e0c1d5091d52be96b272f4db53e004&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
