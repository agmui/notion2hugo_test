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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHRS7OJ6%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYQWrg7RkvuGiHXmsfCkp1joJDTntc3GrSe6IEGSqoEAiEAl1hduCG4QMMbaPOAhxfG7xF6QKd06ezllZriOdCUyWUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDG8ZTDLSqz1IW2wOQCrcAxUOMj1zJYo8h5mfjFJjQVtYf5pN605zoSKrn9QNmgrWfh9dkZzL6h7cKtXxLRC4rS0%2FUq0fwL%2B1YWAP7NegcQ%2FozHJkYObSNoP95n4ZVaAT7Sx0MH2pVvUvNyfN3m6su7Ux3OrAfin7mwDFerTC2aU4ZFD1ibp0kNtxRNEjGDiD5EEZPXP%2BMc1OITJ%2FYE8QDxAK%2FFHnL9uVUm3pH8yQsFln1pHGDQLZQWiIXdMdCBYNa7WYSKL8CUUCjG5%2FtnTciG4dBaLkbF4UDDfqTL9UrImipx%2BHrDnaw7lcjwEnVeo9YD0oKcT7lNxkKQFVvUtIccxr3KsvZODapQ5RgwuAPo59LOTyhGwvPLFM687u9HughcCBMhMAEjTtb%2BzTI2A7x5BOWckv3IwWfdI37yQ18c9vI51rrqfhV9VUDN3ih4zhZSKI781pMQawxOe4wyh8vMK%2BvmwD1t6LTu4wiu4VeT8u9GDAG%2BMVHxUND2El6nomyzwVqPMGW6d4w88AOVTvTrQp8rEfNoJ7V%2FUBwEC5v8iUupwNT%2B4CYIPl8RaETEBSBH8IXpSW6SAgSgQgJfzX2BBZlZNuMRhOXPpTVkTqy7mLgmQtWthZ6S6iyxzVWV%2BcwNBRKb4VGbwLy5UuMKfx5dIGOqUBi8h%2BacbItFMtK4YH6wORgpHksmBO8d%2FCM0JNRI1YRbIRkimSak85YceOsStfCRei%2FTB6dTMm9V9PCIPT6RMDbPBxZfw9FLAoKoPMQeEJA%2B6Yq7qAM%2Fjd%2F3PdDzZyduWTuJwRHCdXAElgXTEKBV3C5%2F06vFNxpExGhZyYFNxAs4Ig%2FdSsMMTjmkJ9EbFoPF6iT4idMd%2F73u80c%2FX21tLyC0e7SRTn&X-Amz-Signature=6fd3bb15aa213c15286e2c623a1cfda2a8256ddcf3d6bdb1ad39abab6f08b014&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHRS7OJ6%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYQWrg7RkvuGiHXmsfCkp1joJDTntc3GrSe6IEGSqoEAiEAl1hduCG4QMMbaPOAhxfG7xF6QKd06ezllZriOdCUyWUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDG8ZTDLSqz1IW2wOQCrcAxUOMj1zJYo8h5mfjFJjQVtYf5pN605zoSKrn9QNmgrWfh9dkZzL6h7cKtXxLRC4rS0%2FUq0fwL%2B1YWAP7NegcQ%2FozHJkYObSNoP95n4ZVaAT7Sx0MH2pVvUvNyfN3m6su7Ux3OrAfin7mwDFerTC2aU4ZFD1ibp0kNtxRNEjGDiD5EEZPXP%2BMc1OITJ%2FYE8QDxAK%2FFHnL9uVUm3pH8yQsFln1pHGDQLZQWiIXdMdCBYNa7WYSKL8CUUCjG5%2FtnTciG4dBaLkbF4UDDfqTL9UrImipx%2BHrDnaw7lcjwEnVeo9YD0oKcT7lNxkKQFVvUtIccxr3KsvZODapQ5RgwuAPo59LOTyhGwvPLFM687u9HughcCBMhMAEjTtb%2BzTI2A7x5BOWckv3IwWfdI37yQ18c9vI51rrqfhV9VUDN3ih4zhZSKI781pMQawxOe4wyh8vMK%2BvmwD1t6LTu4wiu4VeT8u9GDAG%2BMVHxUND2El6nomyzwVqPMGW6d4w88AOVTvTrQp8rEfNoJ7V%2FUBwEC5v8iUupwNT%2B4CYIPl8RaETEBSBH8IXpSW6SAgSgQgJfzX2BBZlZNuMRhOXPpTVkTqy7mLgmQtWthZ6S6iyxzVWV%2BcwNBRKb4VGbwLy5UuMKfx5dIGOqUBi8h%2BacbItFMtK4YH6wORgpHksmBO8d%2FCM0JNRI1YRbIRkimSak85YceOsStfCRei%2FTB6dTMm9V9PCIPT6RMDbPBxZfw9FLAoKoPMQeEJA%2B6Yq7qAM%2Fjd%2F3PdDzZyduWTuJwRHCdXAElgXTEKBV3C5%2F06vFNxpExGhZyYFNxAs4Ig%2FdSsMMTjmkJ9EbFoPF6iT4idMd%2F73u80c%2FX21tLyC0e7SRTn&X-Amz-Signature=1852406849e24f5b9715d65bbe0cb19df57ea6dee1babfaa503eb65a78d894c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHRS7OJ6%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYQWrg7RkvuGiHXmsfCkp1joJDTntc3GrSe6IEGSqoEAiEAl1hduCG4QMMbaPOAhxfG7xF6QKd06ezllZriOdCUyWUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDG8ZTDLSqz1IW2wOQCrcAxUOMj1zJYo8h5mfjFJjQVtYf5pN605zoSKrn9QNmgrWfh9dkZzL6h7cKtXxLRC4rS0%2FUq0fwL%2B1YWAP7NegcQ%2FozHJkYObSNoP95n4ZVaAT7Sx0MH2pVvUvNyfN3m6su7Ux3OrAfin7mwDFerTC2aU4ZFD1ibp0kNtxRNEjGDiD5EEZPXP%2BMc1OITJ%2FYE8QDxAK%2FFHnL9uVUm3pH8yQsFln1pHGDQLZQWiIXdMdCBYNa7WYSKL8CUUCjG5%2FtnTciG4dBaLkbF4UDDfqTL9UrImipx%2BHrDnaw7lcjwEnVeo9YD0oKcT7lNxkKQFVvUtIccxr3KsvZODapQ5RgwuAPo59LOTyhGwvPLFM687u9HughcCBMhMAEjTtb%2BzTI2A7x5BOWckv3IwWfdI37yQ18c9vI51rrqfhV9VUDN3ih4zhZSKI781pMQawxOe4wyh8vMK%2BvmwD1t6LTu4wiu4VeT8u9GDAG%2BMVHxUND2El6nomyzwVqPMGW6d4w88AOVTvTrQp8rEfNoJ7V%2FUBwEC5v8iUupwNT%2B4CYIPl8RaETEBSBH8IXpSW6SAgSgQgJfzX2BBZlZNuMRhOXPpTVkTqy7mLgmQtWthZ6S6iyxzVWV%2BcwNBRKb4VGbwLy5UuMKfx5dIGOqUBi8h%2BacbItFMtK4YH6wORgpHksmBO8d%2FCM0JNRI1YRbIRkimSak85YceOsStfCRei%2FTB6dTMm9V9PCIPT6RMDbPBxZfw9FLAoKoPMQeEJA%2B6Yq7qAM%2Fjd%2F3PdDzZyduWTuJwRHCdXAElgXTEKBV3C5%2F06vFNxpExGhZyYFNxAs4Ig%2FdSsMMTjmkJ9EbFoPF6iT4idMd%2F73u80c%2FX21tLyC0e7SRTn&X-Amz-Signature=295981a860e072b078c81f15dff617e0539babf75130084671fc83e4dbe49c31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHRS7OJ6%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYQWrg7RkvuGiHXmsfCkp1joJDTntc3GrSe6IEGSqoEAiEAl1hduCG4QMMbaPOAhxfG7xF6QKd06ezllZriOdCUyWUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDG8ZTDLSqz1IW2wOQCrcAxUOMj1zJYo8h5mfjFJjQVtYf5pN605zoSKrn9QNmgrWfh9dkZzL6h7cKtXxLRC4rS0%2FUq0fwL%2B1YWAP7NegcQ%2FozHJkYObSNoP95n4ZVaAT7Sx0MH2pVvUvNyfN3m6su7Ux3OrAfin7mwDFerTC2aU4ZFD1ibp0kNtxRNEjGDiD5EEZPXP%2BMc1OITJ%2FYE8QDxAK%2FFHnL9uVUm3pH8yQsFln1pHGDQLZQWiIXdMdCBYNa7WYSKL8CUUCjG5%2FtnTciG4dBaLkbF4UDDfqTL9UrImipx%2BHrDnaw7lcjwEnVeo9YD0oKcT7lNxkKQFVvUtIccxr3KsvZODapQ5RgwuAPo59LOTyhGwvPLFM687u9HughcCBMhMAEjTtb%2BzTI2A7x5BOWckv3IwWfdI37yQ18c9vI51rrqfhV9VUDN3ih4zhZSKI781pMQawxOe4wyh8vMK%2BvmwD1t6LTu4wiu4VeT8u9GDAG%2BMVHxUND2El6nomyzwVqPMGW6d4w88AOVTvTrQp8rEfNoJ7V%2FUBwEC5v8iUupwNT%2B4CYIPl8RaETEBSBH8IXpSW6SAgSgQgJfzX2BBZlZNuMRhOXPpTVkTqy7mLgmQtWthZ6S6iyxzVWV%2BcwNBRKb4VGbwLy5UuMKfx5dIGOqUBi8h%2BacbItFMtK4YH6wORgpHksmBO8d%2FCM0JNRI1YRbIRkimSak85YceOsStfCRei%2FTB6dTMm9V9PCIPT6RMDbPBxZfw9FLAoKoPMQeEJA%2B6Yq7qAM%2Fjd%2F3PdDzZyduWTuJwRHCdXAElgXTEKBV3C5%2F06vFNxpExGhZyYFNxAs4Ig%2FdSsMMTjmkJ9EbFoPF6iT4idMd%2F73u80c%2FX21tLyC0e7SRTn&X-Amz-Signature=783e765df561a0158b6950ff2faa2e8674f48395e9712a9a04dcfab4f99c12a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHRS7OJ6%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYQWrg7RkvuGiHXmsfCkp1joJDTntc3GrSe6IEGSqoEAiEAl1hduCG4QMMbaPOAhxfG7xF6QKd06ezllZriOdCUyWUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDG8ZTDLSqz1IW2wOQCrcAxUOMj1zJYo8h5mfjFJjQVtYf5pN605zoSKrn9QNmgrWfh9dkZzL6h7cKtXxLRC4rS0%2FUq0fwL%2B1YWAP7NegcQ%2FozHJkYObSNoP95n4ZVaAT7Sx0MH2pVvUvNyfN3m6su7Ux3OrAfin7mwDFerTC2aU4ZFD1ibp0kNtxRNEjGDiD5EEZPXP%2BMc1OITJ%2FYE8QDxAK%2FFHnL9uVUm3pH8yQsFln1pHGDQLZQWiIXdMdCBYNa7WYSKL8CUUCjG5%2FtnTciG4dBaLkbF4UDDfqTL9UrImipx%2BHrDnaw7lcjwEnVeo9YD0oKcT7lNxkKQFVvUtIccxr3KsvZODapQ5RgwuAPo59LOTyhGwvPLFM687u9HughcCBMhMAEjTtb%2BzTI2A7x5BOWckv3IwWfdI37yQ18c9vI51rrqfhV9VUDN3ih4zhZSKI781pMQawxOe4wyh8vMK%2BvmwD1t6LTu4wiu4VeT8u9GDAG%2BMVHxUND2El6nomyzwVqPMGW6d4w88AOVTvTrQp8rEfNoJ7V%2FUBwEC5v8iUupwNT%2B4CYIPl8RaETEBSBH8IXpSW6SAgSgQgJfzX2BBZlZNuMRhOXPpTVkTqy7mLgmQtWthZ6S6iyxzVWV%2BcwNBRKb4VGbwLy5UuMKfx5dIGOqUBi8h%2BacbItFMtK4YH6wORgpHksmBO8d%2FCM0JNRI1YRbIRkimSak85YceOsStfCRei%2FTB6dTMm9V9PCIPT6RMDbPBxZfw9FLAoKoPMQeEJA%2B6Yq7qAM%2Fjd%2F3PdDzZyduWTuJwRHCdXAElgXTEKBV3C5%2F06vFNxpExGhZyYFNxAs4Ig%2FdSsMMTjmkJ9EbFoPF6iT4idMd%2F73u80c%2FX21tLyC0e7SRTn&X-Amz-Signature=23a990fa3ab9df285d627f8c93df3c4ae525566ad26143068853762973f15516&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHRS7OJ6%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYQWrg7RkvuGiHXmsfCkp1joJDTntc3GrSe6IEGSqoEAiEAl1hduCG4QMMbaPOAhxfG7xF6QKd06ezllZriOdCUyWUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDG8ZTDLSqz1IW2wOQCrcAxUOMj1zJYo8h5mfjFJjQVtYf5pN605zoSKrn9QNmgrWfh9dkZzL6h7cKtXxLRC4rS0%2FUq0fwL%2B1YWAP7NegcQ%2FozHJkYObSNoP95n4ZVaAT7Sx0MH2pVvUvNyfN3m6su7Ux3OrAfin7mwDFerTC2aU4ZFD1ibp0kNtxRNEjGDiD5EEZPXP%2BMc1OITJ%2FYE8QDxAK%2FFHnL9uVUm3pH8yQsFln1pHGDQLZQWiIXdMdCBYNa7WYSKL8CUUCjG5%2FtnTciG4dBaLkbF4UDDfqTL9UrImipx%2BHrDnaw7lcjwEnVeo9YD0oKcT7lNxkKQFVvUtIccxr3KsvZODapQ5RgwuAPo59LOTyhGwvPLFM687u9HughcCBMhMAEjTtb%2BzTI2A7x5BOWckv3IwWfdI37yQ18c9vI51rrqfhV9VUDN3ih4zhZSKI781pMQawxOe4wyh8vMK%2BvmwD1t6LTu4wiu4VeT8u9GDAG%2BMVHxUND2El6nomyzwVqPMGW6d4w88AOVTvTrQp8rEfNoJ7V%2FUBwEC5v8iUupwNT%2B4CYIPl8RaETEBSBH8IXpSW6SAgSgQgJfzX2BBZlZNuMRhOXPpTVkTqy7mLgmQtWthZ6S6iyxzVWV%2BcwNBRKb4VGbwLy5UuMKfx5dIGOqUBi8h%2BacbItFMtK4YH6wORgpHksmBO8d%2FCM0JNRI1YRbIRkimSak85YceOsStfCRei%2FTB6dTMm9V9PCIPT6RMDbPBxZfw9FLAoKoPMQeEJA%2B6Yq7qAM%2Fjd%2F3PdDzZyduWTuJwRHCdXAElgXTEKBV3C5%2F06vFNxpExGhZyYFNxAs4Ig%2FdSsMMTjmkJ9EbFoPF6iT4idMd%2F73u80c%2FX21tLyC0e7SRTn&X-Amz-Signature=fc61b58ffaf958e0f7590f29a932667fbdb803f579bf48f05c622d131e902f30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHRS7OJ6%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYQWrg7RkvuGiHXmsfCkp1joJDTntc3GrSe6IEGSqoEAiEAl1hduCG4QMMbaPOAhxfG7xF6QKd06ezllZriOdCUyWUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDG8ZTDLSqz1IW2wOQCrcAxUOMj1zJYo8h5mfjFJjQVtYf5pN605zoSKrn9QNmgrWfh9dkZzL6h7cKtXxLRC4rS0%2FUq0fwL%2B1YWAP7NegcQ%2FozHJkYObSNoP95n4ZVaAT7Sx0MH2pVvUvNyfN3m6su7Ux3OrAfin7mwDFerTC2aU4ZFD1ibp0kNtxRNEjGDiD5EEZPXP%2BMc1OITJ%2FYE8QDxAK%2FFHnL9uVUm3pH8yQsFln1pHGDQLZQWiIXdMdCBYNa7WYSKL8CUUCjG5%2FtnTciG4dBaLkbF4UDDfqTL9UrImipx%2BHrDnaw7lcjwEnVeo9YD0oKcT7lNxkKQFVvUtIccxr3KsvZODapQ5RgwuAPo59LOTyhGwvPLFM687u9HughcCBMhMAEjTtb%2BzTI2A7x5BOWckv3IwWfdI37yQ18c9vI51rrqfhV9VUDN3ih4zhZSKI781pMQawxOe4wyh8vMK%2BvmwD1t6LTu4wiu4VeT8u9GDAG%2BMVHxUND2El6nomyzwVqPMGW6d4w88AOVTvTrQp8rEfNoJ7V%2FUBwEC5v8iUupwNT%2B4CYIPl8RaETEBSBH8IXpSW6SAgSgQgJfzX2BBZlZNuMRhOXPpTVkTqy7mLgmQtWthZ6S6iyxzVWV%2BcwNBRKb4VGbwLy5UuMKfx5dIGOqUBi8h%2BacbItFMtK4YH6wORgpHksmBO8d%2FCM0JNRI1YRbIRkimSak85YceOsStfCRei%2FTB6dTMm9V9PCIPT6RMDbPBxZfw9FLAoKoPMQeEJA%2B6Yq7qAM%2Fjd%2F3PdDzZyduWTuJwRHCdXAElgXTEKBV3C5%2F06vFNxpExGhZyYFNxAs4Ig%2FdSsMMTjmkJ9EbFoPF6iT4idMd%2F73u80c%2FX21tLyC0e7SRTn&X-Amz-Signature=e52401125afcfbafcb3b4fe829c940766b76125ec35c0eed5033c02755eccf0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHRS7OJ6%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYQWrg7RkvuGiHXmsfCkp1joJDTntc3GrSe6IEGSqoEAiEAl1hduCG4QMMbaPOAhxfG7xF6QKd06ezllZriOdCUyWUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDG8ZTDLSqz1IW2wOQCrcAxUOMj1zJYo8h5mfjFJjQVtYf5pN605zoSKrn9QNmgrWfh9dkZzL6h7cKtXxLRC4rS0%2FUq0fwL%2B1YWAP7NegcQ%2FozHJkYObSNoP95n4ZVaAT7Sx0MH2pVvUvNyfN3m6su7Ux3OrAfin7mwDFerTC2aU4ZFD1ibp0kNtxRNEjGDiD5EEZPXP%2BMc1OITJ%2FYE8QDxAK%2FFHnL9uVUm3pH8yQsFln1pHGDQLZQWiIXdMdCBYNa7WYSKL8CUUCjG5%2FtnTciG4dBaLkbF4UDDfqTL9UrImipx%2BHrDnaw7lcjwEnVeo9YD0oKcT7lNxkKQFVvUtIccxr3KsvZODapQ5RgwuAPo59LOTyhGwvPLFM687u9HughcCBMhMAEjTtb%2BzTI2A7x5BOWckv3IwWfdI37yQ18c9vI51rrqfhV9VUDN3ih4zhZSKI781pMQawxOe4wyh8vMK%2BvmwD1t6LTu4wiu4VeT8u9GDAG%2BMVHxUND2El6nomyzwVqPMGW6d4w88AOVTvTrQp8rEfNoJ7V%2FUBwEC5v8iUupwNT%2B4CYIPl8RaETEBSBH8IXpSW6SAgSgQgJfzX2BBZlZNuMRhOXPpTVkTqy7mLgmQtWthZ6S6iyxzVWV%2BcwNBRKb4VGbwLy5UuMKfx5dIGOqUBi8h%2BacbItFMtK4YH6wORgpHksmBO8d%2FCM0JNRI1YRbIRkimSak85YceOsStfCRei%2FTB6dTMm9V9PCIPT6RMDbPBxZfw9FLAoKoPMQeEJA%2B6Yq7qAM%2Fjd%2F3PdDzZyduWTuJwRHCdXAElgXTEKBV3C5%2F06vFNxpExGhZyYFNxAs4Ig%2FdSsMMTjmkJ9EbFoPF6iT4idMd%2F73u80c%2FX21tLyC0e7SRTn&X-Amz-Signature=19b88f782c5cf3b86600abbce77be01fd40b0358c5cc82eb5cbb61a9d83f548b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHRS7OJ6%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYQWrg7RkvuGiHXmsfCkp1joJDTntc3GrSe6IEGSqoEAiEAl1hduCG4QMMbaPOAhxfG7xF6QKd06ezllZriOdCUyWUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDG8ZTDLSqz1IW2wOQCrcAxUOMj1zJYo8h5mfjFJjQVtYf5pN605zoSKrn9QNmgrWfh9dkZzL6h7cKtXxLRC4rS0%2FUq0fwL%2B1YWAP7NegcQ%2FozHJkYObSNoP95n4ZVaAT7Sx0MH2pVvUvNyfN3m6su7Ux3OrAfin7mwDFerTC2aU4ZFD1ibp0kNtxRNEjGDiD5EEZPXP%2BMc1OITJ%2FYE8QDxAK%2FFHnL9uVUm3pH8yQsFln1pHGDQLZQWiIXdMdCBYNa7WYSKL8CUUCjG5%2FtnTciG4dBaLkbF4UDDfqTL9UrImipx%2BHrDnaw7lcjwEnVeo9YD0oKcT7lNxkKQFVvUtIccxr3KsvZODapQ5RgwuAPo59LOTyhGwvPLFM687u9HughcCBMhMAEjTtb%2BzTI2A7x5BOWckv3IwWfdI37yQ18c9vI51rrqfhV9VUDN3ih4zhZSKI781pMQawxOe4wyh8vMK%2BvmwD1t6LTu4wiu4VeT8u9GDAG%2BMVHxUND2El6nomyzwVqPMGW6d4w88AOVTvTrQp8rEfNoJ7V%2FUBwEC5v8iUupwNT%2B4CYIPl8RaETEBSBH8IXpSW6SAgSgQgJfzX2BBZlZNuMRhOXPpTVkTqy7mLgmQtWthZ6S6iyxzVWV%2BcwNBRKb4VGbwLy5UuMKfx5dIGOqUBi8h%2BacbItFMtK4YH6wORgpHksmBO8d%2FCM0JNRI1YRbIRkimSak85YceOsStfCRei%2FTB6dTMm9V9PCIPT6RMDbPBxZfw9FLAoKoPMQeEJA%2B6Yq7qAM%2Fjd%2F3PdDzZyduWTuJwRHCdXAElgXTEKBV3C5%2F06vFNxpExGhZyYFNxAs4Ig%2FdSsMMTjmkJ9EbFoPF6iT4idMd%2F73u80c%2FX21tLyC0e7SRTn&X-Amz-Signature=0a5107ee432bb986cd4710426e82e1cf3768e5ab85df0d37b1583a24834652d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHRS7OJ6%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYQWrg7RkvuGiHXmsfCkp1joJDTntc3GrSe6IEGSqoEAiEAl1hduCG4QMMbaPOAhxfG7xF6QKd06ezllZriOdCUyWUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDG8ZTDLSqz1IW2wOQCrcAxUOMj1zJYo8h5mfjFJjQVtYf5pN605zoSKrn9QNmgrWfh9dkZzL6h7cKtXxLRC4rS0%2FUq0fwL%2B1YWAP7NegcQ%2FozHJkYObSNoP95n4ZVaAT7Sx0MH2pVvUvNyfN3m6su7Ux3OrAfin7mwDFerTC2aU4ZFD1ibp0kNtxRNEjGDiD5EEZPXP%2BMc1OITJ%2FYE8QDxAK%2FFHnL9uVUm3pH8yQsFln1pHGDQLZQWiIXdMdCBYNa7WYSKL8CUUCjG5%2FtnTciG4dBaLkbF4UDDfqTL9UrImipx%2BHrDnaw7lcjwEnVeo9YD0oKcT7lNxkKQFVvUtIccxr3KsvZODapQ5RgwuAPo59LOTyhGwvPLFM687u9HughcCBMhMAEjTtb%2BzTI2A7x5BOWckv3IwWfdI37yQ18c9vI51rrqfhV9VUDN3ih4zhZSKI781pMQawxOe4wyh8vMK%2BvmwD1t6LTu4wiu4VeT8u9GDAG%2BMVHxUND2El6nomyzwVqPMGW6d4w88AOVTvTrQp8rEfNoJ7V%2FUBwEC5v8iUupwNT%2B4CYIPl8RaETEBSBH8IXpSW6SAgSgQgJfzX2BBZlZNuMRhOXPpTVkTqy7mLgmQtWthZ6S6iyxzVWV%2BcwNBRKb4VGbwLy5UuMKfx5dIGOqUBi8h%2BacbItFMtK4YH6wORgpHksmBO8d%2FCM0JNRI1YRbIRkimSak85YceOsStfCRei%2FTB6dTMm9V9PCIPT6RMDbPBxZfw9FLAoKoPMQeEJA%2B6Yq7qAM%2Fjd%2F3PdDzZyduWTuJwRHCdXAElgXTEKBV3C5%2F06vFNxpExGhZyYFNxAs4Ig%2FdSsMMTjmkJ9EbFoPF6iT4idMd%2F73u80c%2FX21tLyC0e7SRTn&X-Amz-Signature=53b809b95ee7cb84365bc3532cdf06e26b68ffd67f9b6b04b3b2a956a9b635a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHRS7OJ6%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYQWrg7RkvuGiHXmsfCkp1joJDTntc3GrSe6IEGSqoEAiEAl1hduCG4QMMbaPOAhxfG7xF6QKd06ezllZriOdCUyWUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDG8ZTDLSqz1IW2wOQCrcAxUOMj1zJYo8h5mfjFJjQVtYf5pN605zoSKrn9QNmgrWfh9dkZzL6h7cKtXxLRC4rS0%2FUq0fwL%2B1YWAP7NegcQ%2FozHJkYObSNoP95n4ZVaAT7Sx0MH2pVvUvNyfN3m6su7Ux3OrAfin7mwDFerTC2aU4ZFD1ibp0kNtxRNEjGDiD5EEZPXP%2BMc1OITJ%2FYE8QDxAK%2FFHnL9uVUm3pH8yQsFln1pHGDQLZQWiIXdMdCBYNa7WYSKL8CUUCjG5%2FtnTciG4dBaLkbF4UDDfqTL9UrImipx%2BHrDnaw7lcjwEnVeo9YD0oKcT7lNxkKQFVvUtIccxr3KsvZODapQ5RgwuAPo59LOTyhGwvPLFM687u9HughcCBMhMAEjTtb%2BzTI2A7x5BOWckv3IwWfdI37yQ18c9vI51rrqfhV9VUDN3ih4zhZSKI781pMQawxOe4wyh8vMK%2BvmwD1t6LTu4wiu4VeT8u9GDAG%2BMVHxUND2El6nomyzwVqPMGW6d4w88AOVTvTrQp8rEfNoJ7V%2FUBwEC5v8iUupwNT%2B4CYIPl8RaETEBSBH8IXpSW6SAgSgQgJfzX2BBZlZNuMRhOXPpTVkTqy7mLgmQtWthZ6S6iyxzVWV%2BcwNBRKb4VGbwLy5UuMKfx5dIGOqUBi8h%2BacbItFMtK4YH6wORgpHksmBO8d%2FCM0JNRI1YRbIRkimSak85YceOsStfCRei%2FTB6dTMm9V9PCIPT6RMDbPBxZfw9FLAoKoPMQeEJA%2B6Yq7qAM%2Fjd%2F3PdDzZyduWTuJwRHCdXAElgXTEKBV3C5%2F06vFNxpExGhZyYFNxAs4Ig%2FdSsMMTjmkJ9EbFoPF6iT4idMd%2F73u80c%2FX21tLyC0e7SRTn&X-Amz-Signature=7e968b093141797e27f7db2a31e3f5581f29c8d0babaa0a9348773f60e9f40de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHRS7OJ6%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYQWrg7RkvuGiHXmsfCkp1joJDTntc3GrSe6IEGSqoEAiEAl1hduCG4QMMbaPOAhxfG7xF6QKd06ezllZriOdCUyWUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDG8ZTDLSqz1IW2wOQCrcAxUOMj1zJYo8h5mfjFJjQVtYf5pN605zoSKrn9QNmgrWfh9dkZzL6h7cKtXxLRC4rS0%2FUq0fwL%2B1YWAP7NegcQ%2FozHJkYObSNoP95n4ZVaAT7Sx0MH2pVvUvNyfN3m6su7Ux3OrAfin7mwDFerTC2aU4ZFD1ibp0kNtxRNEjGDiD5EEZPXP%2BMc1OITJ%2FYE8QDxAK%2FFHnL9uVUm3pH8yQsFln1pHGDQLZQWiIXdMdCBYNa7WYSKL8CUUCjG5%2FtnTciG4dBaLkbF4UDDfqTL9UrImipx%2BHrDnaw7lcjwEnVeo9YD0oKcT7lNxkKQFVvUtIccxr3KsvZODapQ5RgwuAPo59LOTyhGwvPLFM687u9HughcCBMhMAEjTtb%2BzTI2A7x5BOWckv3IwWfdI37yQ18c9vI51rrqfhV9VUDN3ih4zhZSKI781pMQawxOe4wyh8vMK%2BvmwD1t6LTu4wiu4VeT8u9GDAG%2BMVHxUND2El6nomyzwVqPMGW6d4w88AOVTvTrQp8rEfNoJ7V%2FUBwEC5v8iUupwNT%2B4CYIPl8RaETEBSBH8IXpSW6SAgSgQgJfzX2BBZlZNuMRhOXPpTVkTqy7mLgmQtWthZ6S6iyxzVWV%2BcwNBRKb4VGbwLy5UuMKfx5dIGOqUBi8h%2BacbItFMtK4YH6wORgpHksmBO8d%2FCM0JNRI1YRbIRkimSak85YceOsStfCRei%2FTB6dTMm9V9PCIPT6RMDbPBxZfw9FLAoKoPMQeEJA%2B6Yq7qAM%2Fjd%2F3PdDzZyduWTuJwRHCdXAElgXTEKBV3C5%2F06vFNxpExGhZyYFNxAs4Ig%2FdSsMMTjmkJ9EbFoPF6iT4idMd%2F73u80c%2FX21tLyC0e7SRTn&X-Amz-Signature=f807378bcb2a2ffc383cfd6d91a02970d10937e2015484741a9873cf44326426&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHRS7OJ6%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYQWrg7RkvuGiHXmsfCkp1joJDTntc3GrSe6IEGSqoEAiEAl1hduCG4QMMbaPOAhxfG7xF6QKd06ezllZriOdCUyWUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDG8ZTDLSqz1IW2wOQCrcAxUOMj1zJYo8h5mfjFJjQVtYf5pN605zoSKrn9QNmgrWfh9dkZzL6h7cKtXxLRC4rS0%2FUq0fwL%2B1YWAP7NegcQ%2FozHJkYObSNoP95n4ZVaAT7Sx0MH2pVvUvNyfN3m6su7Ux3OrAfin7mwDFerTC2aU4ZFD1ibp0kNtxRNEjGDiD5EEZPXP%2BMc1OITJ%2FYE8QDxAK%2FFHnL9uVUm3pH8yQsFln1pHGDQLZQWiIXdMdCBYNa7WYSKL8CUUCjG5%2FtnTciG4dBaLkbF4UDDfqTL9UrImipx%2BHrDnaw7lcjwEnVeo9YD0oKcT7lNxkKQFVvUtIccxr3KsvZODapQ5RgwuAPo59LOTyhGwvPLFM687u9HughcCBMhMAEjTtb%2BzTI2A7x5BOWckv3IwWfdI37yQ18c9vI51rrqfhV9VUDN3ih4zhZSKI781pMQawxOe4wyh8vMK%2BvmwD1t6LTu4wiu4VeT8u9GDAG%2BMVHxUND2El6nomyzwVqPMGW6d4w88AOVTvTrQp8rEfNoJ7V%2FUBwEC5v8iUupwNT%2B4CYIPl8RaETEBSBH8IXpSW6SAgSgQgJfzX2BBZlZNuMRhOXPpTVkTqy7mLgmQtWthZ6S6iyxzVWV%2BcwNBRKb4VGbwLy5UuMKfx5dIGOqUBi8h%2BacbItFMtK4YH6wORgpHksmBO8d%2FCM0JNRI1YRbIRkimSak85YceOsStfCRei%2FTB6dTMm9V9PCIPT6RMDbPBxZfw9FLAoKoPMQeEJA%2B6Yq7qAM%2Fjd%2F3PdDzZyduWTuJwRHCdXAElgXTEKBV3C5%2F06vFNxpExGhZyYFNxAs4Ig%2FdSsMMTjmkJ9EbFoPF6iT4idMd%2F73u80c%2FX21tLyC0e7SRTn&X-Amz-Signature=f502bc7d200bd935bb66a4d6ecce0ef7d78e3a5738362686549c0b951325a4c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHRS7OJ6%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDYQWrg7RkvuGiHXmsfCkp1joJDTntc3GrSe6IEGSqoEAiEAl1hduCG4QMMbaPOAhxfG7xF6QKd06ezllZriOdCUyWUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDG8ZTDLSqz1IW2wOQCrcAxUOMj1zJYo8h5mfjFJjQVtYf5pN605zoSKrn9QNmgrWfh9dkZzL6h7cKtXxLRC4rS0%2FUq0fwL%2B1YWAP7NegcQ%2FozHJkYObSNoP95n4ZVaAT7Sx0MH2pVvUvNyfN3m6su7Ux3OrAfin7mwDFerTC2aU4ZFD1ibp0kNtxRNEjGDiD5EEZPXP%2BMc1OITJ%2FYE8QDxAK%2FFHnL9uVUm3pH8yQsFln1pHGDQLZQWiIXdMdCBYNa7WYSKL8CUUCjG5%2FtnTciG4dBaLkbF4UDDfqTL9UrImipx%2BHrDnaw7lcjwEnVeo9YD0oKcT7lNxkKQFVvUtIccxr3KsvZODapQ5RgwuAPo59LOTyhGwvPLFM687u9HughcCBMhMAEjTtb%2BzTI2A7x5BOWckv3IwWfdI37yQ18c9vI51rrqfhV9VUDN3ih4zhZSKI781pMQawxOe4wyh8vMK%2BvmwD1t6LTu4wiu4VeT8u9GDAG%2BMVHxUND2El6nomyzwVqPMGW6d4w88AOVTvTrQp8rEfNoJ7V%2FUBwEC5v8iUupwNT%2B4CYIPl8RaETEBSBH8IXpSW6SAgSgQgJfzX2BBZlZNuMRhOXPpTVkTqy7mLgmQtWthZ6S6iyxzVWV%2BcwNBRKb4VGbwLy5UuMKfx5dIGOqUBi8h%2BacbItFMtK4YH6wORgpHksmBO8d%2FCM0JNRI1YRbIRkimSak85YceOsStfCRei%2FTB6dTMm9V9PCIPT6RMDbPBxZfw9FLAoKoPMQeEJA%2B6Yq7qAM%2Fjd%2F3PdDzZyduWTuJwRHCdXAElgXTEKBV3C5%2F06vFNxpExGhZyYFNxAs4Ig%2FdSsMMTjmkJ9EbFoPF6iT4idMd%2F73u80c%2FX21tLyC0e7SRTn&X-Amz-Signature=8ddb2797a92b8d567d53d42b926f56ddafb4e721d7e27e33173e2cc8508d5784&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
