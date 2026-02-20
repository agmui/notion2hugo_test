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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YABO5YBU%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJYeCMy2XaJu0gPgslqBY56DIkd6kh%2F4UtZSjPjdI2mAiAV5BR3SP74JL5jHVnyFSt4HVxhyn2qJ7HreVNAEzxM%2ByqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrMulof3%2FYJHEAnwSKtwDwCNPtE%2BPEG3ovkJwBsl7ukfQdkAVq%2FJi1dU5MuYElVJ%2Fn7yQBRtOCwVT78UYYtpZ2p913PmVzPWuJYWxwTZ4mUtdiW8WOvj3Vd9Tk0U%2FS78Z723YFZ1nGZETvYKPYbdwMPy1evwXTkTpBmuR5sh3WWTb50REmtMKUjdryMw7qZ9lzn%2Biq36YsFWUJMIRYNq42l%2FZMPQkJs%2BOTNxkj%2F%2B0BHsOAzR%2Bv0vYdcekHuqoEpyY4yT%2FZYZTNzAeYsKS7M7v1tAXjTIDc0XKrI18v9xxD6vTG47lKSrz5bn3QLx3nrtxcGVFJSYNrzcDpQNpbosDoJgklaqdEy2yNGOauiX%2FMziYTXqaghvlxyQpoHx4%2BA3yO29mB5T5dOBWJuPAryZzQNV2IUenE2guL31YsLDr3C1EFHTFfUxC8ylEnoxkmMx7Wa0Dc%2FI8Oq5EEr6yUzUp0f4A%2FWLFHHAuPzAzHPdEM%2BXk6EX0LJUN0XRGuwvNkDTEdT%2BNU5GdA3WNUtS3UbB8i1HzNIhTMX1XXx4Uz%2BFlGVM1oGVs7L9TsDzNeEm2uIPz7Vpp8sKZtxJxO0rvZDWXUJ1ChKqrvR6ib1Bq8Y7eA52LLoqvnvbXbcrzR9E5nz1FL4gjr4dkIhjAqjQwz%2BjezAY6pgGLrJDMzrZ2CUa10LjjMnFxKiM2DRbjUwjE1s02NWTotLBr6%2BqMAHKVVlJnrZU46Dog6SyfBZTL%2F%2BB2TRO5mDkjSNj5eDvZJcNh0YxOeow8XIXthcSnQ25sPSp4yc70QiqwqwPFGASJJzVnxZRZRlhknZcrcRwix%2FJFmIhiwuoQvLCBiuO86wruQWMe3Rr16W%2FvCdqozWUhNyP0HokQr3gRouVDIhe1&X-Amz-Signature=d6243f1e55a54a158344d3e20675707e282325f6fa408e05e2dd4a15df76b461&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YABO5YBU%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJYeCMy2XaJu0gPgslqBY56DIkd6kh%2F4UtZSjPjdI2mAiAV5BR3SP74JL5jHVnyFSt4HVxhyn2qJ7HreVNAEzxM%2ByqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrMulof3%2FYJHEAnwSKtwDwCNPtE%2BPEG3ovkJwBsl7ukfQdkAVq%2FJi1dU5MuYElVJ%2Fn7yQBRtOCwVT78UYYtpZ2p913PmVzPWuJYWxwTZ4mUtdiW8WOvj3Vd9Tk0U%2FS78Z723YFZ1nGZETvYKPYbdwMPy1evwXTkTpBmuR5sh3WWTb50REmtMKUjdryMw7qZ9lzn%2Biq36YsFWUJMIRYNq42l%2FZMPQkJs%2BOTNxkj%2F%2B0BHsOAzR%2Bv0vYdcekHuqoEpyY4yT%2FZYZTNzAeYsKS7M7v1tAXjTIDc0XKrI18v9xxD6vTG47lKSrz5bn3QLx3nrtxcGVFJSYNrzcDpQNpbosDoJgklaqdEy2yNGOauiX%2FMziYTXqaghvlxyQpoHx4%2BA3yO29mB5T5dOBWJuPAryZzQNV2IUenE2guL31YsLDr3C1EFHTFfUxC8ylEnoxkmMx7Wa0Dc%2FI8Oq5EEr6yUzUp0f4A%2FWLFHHAuPzAzHPdEM%2BXk6EX0LJUN0XRGuwvNkDTEdT%2BNU5GdA3WNUtS3UbB8i1HzNIhTMX1XXx4Uz%2BFlGVM1oGVs7L9TsDzNeEm2uIPz7Vpp8sKZtxJxO0rvZDWXUJ1ChKqrvR6ib1Bq8Y7eA52LLoqvnvbXbcrzR9E5nz1FL4gjr4dkIhjAqjQwz%2BjezAY6pgGLrJDMzrZ2CUa10LjjMnFxKiM2DRbjUwjE1s02NWTotLBr6%2BqMAHKVVlJnrZU46Dog6SyfBZTL%2F%2BB2TRO5mDkjSNj5eDvZJcNh0YxOeow8XIXthcSnQ25sPSp4yc70QiqwqwPFGASJJzVnxZRZRlhknZcrcRwix%2FJFmIhiwuoQvLCBiuO86wruQWMe3Rr16W%2FvCdqozWUhNyP0HokQr3gRouVDIhe1&X-Amz-Signature=4b30f341012270ee8d94995977d606b303ab9b08406f9223a6edc77b6e4425b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YABO5YBU%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJYeCMy2XaJu0gPgslqBY56DIkd6kh%2F4UtZSjPjdI2mAiAV5BR3SP74JL5jHVnyFSt4HVxhyn2qJ7HreVNAEzxM%2ByqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrMulof3%2FYJHEAnwSKtwDwCNPtE%2BPEG3ovkJwBsl7ukfQdkAVq%2FJi1dU5MuYElVJ%2Fn7yQBRtOCwVT78UYYtpZ2p913PmVzPWuJYWxwTZ4mUtdiW8WOvj3Vd9Tk0U%2FS78Z723YFZ1nGZETvYKPYbdwMPy1evwXTkTpBmuR5sh3WWTb50REmtMKUjdryMw7qZ9lzn%2Biq36YsFWUJMIRYNq42l%2FZMPQkJs%2BOTNxkj%2F%2B0BHsOAzR%2Bv0vYdcekHuqoEpyY4yT%2FZYZTNzAeYsKS7M7v1tAXjTIDc0XKrI18v9xxD6vTG47lKSrz5bn3QLx3nrtxcGVFJSYNrzcDpQNpbosDoJgklaqdEy2yNGOauiX%2FMziYTXqaghvlxyQpoHx4%2BA3yO29mB5T5dOBWJuPAryZzQNV2IUenE2guL31YsLDr3C1EFHTFfUxC8ylEnoxkmMx7Wa0Dc%2FI8Oq5EEr6yUzUp0f4A%2FWLFHHAuPzAzHPdEM%2BXk6EX0LJUN0XRGuwvNkDTEdT%2BNU5GdA3WNUtS3UbB8i1HzNIhTMX1XXx4Uz%2BFlGVM1oGVs7L9TsDzNeEm2uIPz7Vpp8sKZtxJxO0rvZDWXUJ1ChKqrvR6ib1Bq8Y7eA52LLoqvnvbXbcrzR9E5nz1FL4gjr4dkIhjAqjQwz%2BjezAY6pgGLrJDMzrZ2CUa10LjjMnFxKiM2DRbjUwjE1s02NWTotLBr6%2BqMAHKVVlJnrZU46Dog6SyfBZTL%2F%2BB2TRO5mDkjSNj5eDvZJcNh0YxOeow8XIXthcSnQ25sPSp4yc70QiqwqwPFGASJJzVnxZRZRlhknZcrcRwix%2FJFmIhiwuoQvLCBiuO86wruQWMe3Rr16W%2FvCdqozWUhNyP0HokQr3gRouVDIhe1&X-Amz-Signature=54c8393f46979560981a63bbc8c443852c7b9425ddf747f5c78bc04a1e5817a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YABO5YBU%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJYeCMy2XaJu0gPgslqBY56DIkd6kh%2F4UtZSjPjdI2mAiAV5BR3SP74JL5jHVnyFSt4HVxhyn2qJ7HreVNAEzxM%2ByqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrMulof3%2FYJHEAnwSKtwDwCNPtE%2BPEG3ovkJwBsl7ukfQdkAVq%2FJi1dU5MuYElVJ%2Fn7yQBRtOCwVT78UYYtpZ2p913PmVzPWuJYWxwTZ4mUtdiW8WOvj3Vd9Tk0U%2FS78Z723YFZ1nGZETvYKPYbdwMPy1evwXTkTpBmuR5sh3WWTb50REmtMKUjdryMw7qZ9lzn%2Biq36YsFWUJMIRYNq42l%2FZMPQkJs%2BOTNxkj%2F%2B0BHsOAzR%2Bv0vYdcekHuqoEpyY4yT%2FZYZTNzAeYsKS7M7v1tAXjTIDc0XKrI18v9xxD6vTG47lKSrz5bn3QLx3nrtxcGVFJSYNrzcDpQNpbosDoJgklaqdEy2yNGOauiX%2FMziYTXqaghvlxyQpoHx4%2BA3yO29mB5T5dOBWJuPAryZzQNV2IUenE2guL31YsLDr3C1EFHTFfUxC8ylEnoxkmMx7Wa0Dc%2FI8Oq5EEr6yUzUp0f4A%2FWLFHHAuPzAzHPdEM%2BXk6EX0LJUN0XRGuwvNkDTEdT%2BNU5GdA3WNUtS3UbB8i1HzNIhTMX1XXx4Uz%2BFlGVM1oGVs7L9TsDzNeEm2uIPz7Vpp8sKZtxJxO0rvZDWXUJ1ChKqrvR6ib1Bq8Y7eA52LLoqvnvbXbcrzR9E5nz1FL4gjr4dkIhjAqjQwz%2BjezAY6pgGLrJDMzrZ2CUa10LjjMnFxKiM2DRbjUwjE1s02NWTotLBr6%2BqMAHKVVlJnrZU46Dog6SyfBZTL%2F%2BB2TRO5mDkjSNj5eDvZJcNh0YxOeow8XIXthcSnQ25sPSp4yc70QiqwqwPFGASJJzVnxZRZRlhknZcrcRwix%2FJFmIhiwuoQvLCBiuO86wruQWMe3Rr16W%2FvCdqozWUhNyP0HokQr3gRouVDIhe1&X-Amz-Signature=e3e7229846adcc7cb971e78f7ca7e7a93b4418432e0bdeacf17d0a35b88ae3fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YABO5YBU%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJYeCMy2XaJu0gPgslqBY56DIkd6kh%2F4UtZSjPjdI2mAiAV5BR3SP74JL5jHVnyFSt4HVxhyn2qJ7HreVNAEzxM%2ByqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrMulof3%2FYJHEAnwSKtwDwCNPtE%2BPEG3ovkJwBsl7ukfQdkAVq%2FJi1dU5MuYElVJ%2Fn7yQBRtOCwVT78UYYtpZ2p913PmVzPWuJYWxwTZ4mUtdiW8WOvj3Vd9Tk0U%2FS78Z723YFZ1nGZETvYKPYbdwMPy1evwXTkTpBmuR5sh3WWTb50REmtMKUjdryMw7qZ9lzn%2Biq36YsFWUJMIRYNq42l%2FZMPQkJs%2BOTNxkj%2F%2B0BHsOAzR%2Bv0vYdcekHuqoEpyY4yT%2FZYZTNzAeYsKS7M7v1tAXjTIDc0XKrI18v9xxD6vTG47lKSrz5bn3QLx3nrtxcGVFJSYNrzcDpQNpbosDoJgklaqdEy2yNGOauiX%2FMziYTXqaghvlxyQpoHx4%2BA3yO29mB5T5dOBWJuPAryZzQNV2IUenE2guL31YsLDr3C1EFHTFfUxC8ylEnoxkmMx7Wa0Dc%2FI8Oq5EEr6yUzUp0f4A%2FWLFHHAuPzAzHPdEM%2BXk6EX0LJUN0XRGuwvNkDTEdT%2BNU5GdA3WNUtS3UbB8i1HzNIhTMX1XXx4Uz%2BFlGVM1oGVs7L9TsDzNeEm2uIPz7Vpp8sKZtxJxO0rvZDWXUJ1ChKqrvR6ib1Bq8Y7eA52LLoqvnvbXbcrzR9E5nz1FL4gjr4dkIhjAqjQwz%2BjezAY6pgGLrJDMzrZ2CUa10LjjMnFxKiM2DRbjUwjE1s02NWTotLBr6%2BqMAHKVVlJnrZU46Dog6SyfBZTL%2F%2BB2TRO5mDkjSNj5eDvZJcNh0YxOeow8XIXthcSnQ25sPSp4yc70QiqwqwPFGASJJzVnxZRZRlhknZcrcRwix%2FJFmIhiwuoQvLCBiuO86wruQWMe3Rr16W%2FvCdqozWUhNyP0HokQr3gRouVDIhe1&X-Amz-Signature=25e379fbf61ada34b6c5088bfa221746c6431511cc337e2efc16c21b91213906&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YABO5YBU%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJYeCMy2XaJu0gPgslqBY56DIkd6kh%2F4UtZSjPjdI2mAiAV5BR3SP74JL5jHVnyFSt4HVxhyn2qJ7HreVNAEzxM%2ByqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrMulof3%2FYJHEAnwSKtwDwCNPtE%2BPEG3ovkJwBsl7ukfQdkAVq%2FJi1dU5MuYElVJ%2Fn7yQBRtOCwVT78UYYtpZ2p913PmVzPWuJYWxwTZ4mUtdiW8WOvj3Vd9Tk0U%2FS78Z723YFZ1nGZETvYKPYbdwMPy1evwXTkTpBmuR5sh3WWTb50REmtMKUjdryMw7qZ9lzn%2Biq36YsFWUJMIRYNq42l%2FZMPQkJs%2BOTNxkj%2F%2B0BHsOAzR%2Bv0vYdcekHuqoEpyY4yT%2FZYZTNzAeYsKS7M7v1tAXjTIDc0XKrI18v9xxD6vTG47lKSrz5bn3QLx3nrtxcGVFJSYNrzcDpQNpbosDoJgklaqdEy2yNGOauiX%2FMziYTXqaghvlxyQpoHx4%2BA3yO29mB5T5dOBWJuPAryZzQNV2IUenE2guL31YsLDr3C1EFHTFfUxC8ylEnoxkmMx7Wa0Dc%2FI8Oq5EEr6yUzUp0f4A%2FWLFHHAuPzAzHPdEM%2BXk6EX0LJUN0XRGuwvNkDTEdT%2BNU5GdA3WNUtS3UbB8i1HzNIhTMX1XXx4Uz%2BFlGVM1oGVs7L9TsDzNeEm2uIPz7Vpp8sKZtxJxO0rvZDWXUJ1ChKqrvR6ib1Bq8Y7eA52LLoqvnvbXbcrzR9E5nz1FL4gjr4dkIhjAqjQwz%2BjezAY6pgGLrJDMzrZ2CUa10LjjMnFxKiM2DRbjUwjE1s02NWTotLBr6%2BqMAHKVVlJnrZU46Dog6SyfBZTL%2F%2BB2TRO5mDkjSNj5eDvZJcNh0YxOeow8XIXthcSnQ25sPSp4yc70QiqwqwPFGASJJzVnxZRZRlhknZcrcRwix%2FJFmIhiwuoQvLCBiuO86wruQWMe3Rr16W%2FvCdqozWUhNyP0HokQr3gRouVDIhe1&X-Amz-Signature=848a11a0a8dcd22d8eacc034329a35c9ef47ad27abe00e5d2b7e3a28f5aca458&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YABO5YBU%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJYeCMy2XaJu0gPgslqBY56DIkd6kh%2F4UtZSjPjdI2mAiAV5BR3SP74JL5jHVnyFSt4HVxhyn2qJ7HreVNAEzxM%2ByqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrMulof3%2FYJHEAnwSKtwDwCNPtE%2BPEG3ovkJwBsl7ukfQdkAVq%2FJi1dU5MuYElVJ%2Fn7yQBRtOCwVT78UYYtpZ2p913PmVzPWuJYWxwTZ4mUtdiW8WOvj3Vd9Tk0U%2FS78Z723YFZ1nGZETvYKPYbdwMPy1evwXTkTpBmuR5sh3WWTb50REmtMKUjdryMw7qZ9lzn%2Biq36YsFWUJMIRYNq42l%2FZMPQkJs%2BOTNxkj%2F%2B0BHsOAzR%2Bv0vYdcekHuqoEpyY4yT%2FZYZTNzAeYsKS7M7v1tAXjTIDc0XKrI18v9xxD6vTG47lKSrz5bn3QLx3nrtxcGVFJSYNrzcDpQNpbosDoJgklaqdEy2yNGOauiX%2FMziYTXqaghvlxyQpoHx4%2BA3yO29mB5T5dOBWJuPAryZzQNV2IUenE2guL31YsLDr3C1EFHTFfUxC8ylEnoxkmMx7Wa0Dc%2FI8Oq5EEr6yUzUp0f4A%2FWLFHHAuPzAzHPdEM%2BXk6EX0LJUN0XRGuwvNkDTEdT%2BNU5GdA3WNUtS3UbB8i1HzNIhTMX1XXx4Uz%2BFlGVM1oGVs7L9TsDzNeEm2uIPz7Vpp8sKZtxJxO0rvZDWXUJ1ChKqrvR6ib1Bq8Y7eA52LLoqvnvbXbcrzR9E5nz1FL4gjr4dkIhjAqjQwz%2BjezAY6pgGLrJDMzrZ2CUa10LjjMnFxKiM2DRbjUwjE1s02NWTotLBr6%2BqMAHKVVlJnrZU46Dog6SyfBZTL%2F%2BB2TRO5mDkjSNj5eDvZJcNh0YxOeow8XIXthcSnQ25sPSp4yc70QiqwqwPFGASJJzVnxZRZRlhknZcrcRwix%2FJFmIhiwuoQvLCBiuO86wruQWMe3Rr16W%2FvCdqozWUhNyP0HokQr3gRouVDIhe1&X-Amz-Signature=a839ffa375c1d1a81f6edfdf1488d8a6b83339e7454549e19de0dd75a97b79ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YABO5YBU%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJYeCMy2XaJu0gPgslqBY56DIkd6kh%2F4UtZSjPjdI2mAiAV5BR3SP74JL5jHVnyFSt4HVxhyn2qJ7HreVNAEzxM%2ByqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrMulof3%2FYJHEAnwSKtwDwCNPtE%2BPEG3ovkJwBsl7ukfQdkAVq%2FJi1dU5MuYElVJ%2Fn7yQBRtOCwVT78UYYtpZ2p913PmVzPWuJYWxwTZ4mUtdiW8WOvj3Vd9Tk0U%2FS78Z723YFZ1nGZETvYKPYbdwMPy1evwXTkTpBmuR5sh3WWTb50REmtMKUjdryMw7qZ9lzn%2Biq36YsFWUJMIRYNq42l%2FZMPQkJs%2BOTNxkj%2F%2B0BHsOAzR%2Bv0vYdcekHuqoEpyY4yT%2FZYZTNzAeYsKS7M7v1tAXjTIDc0XKrI18v9xxD6vTG47lKSrz5bn3QLx3nrtxcGVFJSYNrzcDpQNpbosDoJgklaqdEy2yNGOauiX%2FMziYTXqaghvlxyQpoHx4%2BA3yO29mB5T5dOBWJuPAryZzQNV2IUenE2guL31YsLDr3C1EFHTFfUxC8ylEnoxkmMx7Wa0Dc%2FI8Oq5EEr6yUzUp0f4A%2FWLFHHAuPzAzHPdEM%2BXk6EX0LJUN0XRGuwvNkDTEdT%2BNU5GdA3WNUtS3UbB8i1HzNIhTMX1XXx4Uz%2BFlGVM1oGVs7L9TsDzNeEm2uIPz7Vpp8sKZtxJxO0rvZDWXUJ1ChKqrvR6ib1Bq8Y7eA52LLoqvnvbXbcrzR9E5nz1FL4gjr4dkIhjAqjQwz%2BjezAY6pgGLrJDMzrZ2CUa10LjjMnFxKiM2DRbjUwjE1s02NWTotLBr6%2BqMAHKVVlJnrZU46Dog6SyfBZTL%2F%2BB2TRO5mDkjSNj5eDvZJcNh0YxOeow8XIXthcSnQ25sPSp4yc70QiqwqwPFGASJJzVnxZRZRlhknZcrcRwix%2FJFmIhiwuoQvLCBiuO86wruQWMe3Rr16W%2FvCdqozWUhNyP0HokQr3gRouVDIhe1&X-Amz-Signature=3b848ef0a7b0ec99ba171e2af92af5ed5b5e0afe3f9ead6cbc614da5e01303c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YABO5YBU%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJYeCMy2XaJu0gPgslqBY56DIkd6kh%2F4UtZSjPjdI2mAiAV5BR3SP74JL5jHVnyFSt4HVxhyn2qJ7HreVNAEzxM%2ByqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrMulof3%2FYJHEAnwSKtwDwCNPtE%2BPEG3ovkJwBsl7ukfQdkAVq%2FJi1dU5MuYElVJ%2Fn7yQBRtOCwVT78UYYtpZ2p913PmVzPWuJYWxwTZ4mUtdiW8WOvj3Vd9Tk0U%2FS78Z723YFZ1nGZETvYKPYbdwMPy1evwXTkTpBmuR5sh3WWTb50REmtMKUjdryMw7qZ9lzn%2Biq36YsFWUJMIRYNq42l%2FZMPQkJs%2BOTNxkj%2F%2B0BHsOAzR%2Bv0vYdcekHuqoEpyY4yT%2FZYZTNzAeYsKS7M7v1tAXjTIDc0XKrI18v9xxD6vTG47lKSrz5bn3QLx3nrtxcGVFJSYNrzcDpQNpbosDoJgklaqdEy2yNGOauiX%2FMziYTXqaghvlxyQpoHx4%2BA3yO29mB5T5dOBWJuPAryZzQNV2IUenE2guL31YsLDr3C1EFHTFfUxC8ylEnoxkmMx7Wa0Dc%2FI8Oq5EEr6yUzUp0f4A%2FWLFHHAuPzAzHPdEM%2BXk6EX0LJUN0XRGuwvNkDTEdT%2BNU5GdA3WNUtS3UbB8i1HzNIhTMX1XXx4Uz%2BFlGVM1oGVs7L9TsDzNeEm2uIPz7Vpp8sKZtxJxO0rvZDWXUJ1ChKqrvR6ib1Bq8Y7eA52LLoqvnvbXbcrzR9E5nz1FL4gjr4dkIhjAqjQwz%2BjezAY6pgGLrJDMzrZ2CUa10LjjMnFxKiM2DRbjUwjE1s02NWTotLBr6%2BqMAHKVVlJnrZU46Dog6SyfBZTL%2F%2BB2TRO5mDkjSNj5eDvZJcNh0YxOeow8XIXthcSnQ25sPSp4yc70QiqwqwPFGASJJzVnxZRZRlhknZcrcRwix%2FJFmIhiwuoQvLCBiuO86wruQWMe3Rr16W%2FvCdqozWUhNyP0HokQr3gRouVDIhe1&X-Amz-Signature=fd67d2581316f02df8485cf0b404252975826c5f024992e0241467923d4bcb24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YABO5YBU%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJYeCMy2XaJu0gPgslqBY56DIkd6kh%2F4UtZSjPjdI2mAiAV5BR3SP74JL5jHVnyFSt4HVxhyn2qJ7HreVNAEzxM%2ByqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrMulof3%2FYJHEAnwSKtwDwCNPtE%2BPEG3ovkJwBsl7ukfQdkAVq%2FJi1dU5MuYElVJ%2Fn7yQBRtOCwVT78UYYtpZ2p913PmVzPWuJYWxwTZ4mUtdiW8WOvj3Vd9Tk0U%2FS78Z723YFZ1nGZETvYKPYbdwMPy1evwXTkTpBmuR5sh3WWTb50REmtMKUjdryMw7qZ9lzn%2Biq36YsFWUJMIRYNq42l%2FZMPQkJs%2BOTNxkj%2F%2B0BHsOAzR%2Bv0vYdcekHuqoEpyY4yT%2FZYZTNzAeYsKS7M7v1tAXjTIDc0XKrI18v9xxD6vTG47lKSrz5bn3QLx3nrtxcGVFJSYNrzcDpQNpbosDoJgklaqdEy2yNGOauiX%2FMziYTXqaghvlxyQpoHx4%2BA3yO29mB5T5dOBWJuPAryZzQNV2IUenE2guL31YsLDr3C1EFHTFfUxC8ylEnoxkmMx7Wa0Dc%2FI8Oq5EEr6yUzUp0f4A%2FWLFHHAuPzAzHPdEM%2BXk6EX0LJUN0XRGuwvNkDTEdT%2BNU5GdA3WNUtS3UbB8i1HzNIhTMX1XXx4Uz%2BFlGVM1oGVs7L9TsDzNeEm2uIPz7Vpp8sKZtxJxO0rvZDWXUJ1ChKqrvR6ib1Bq8Y7eA52LLoqvnvbXbcrzR9E5nz1FL4gjr4dkIhjAqjQwz%2BjezAY6pgGLrJDMzrZ2CUa10LjjMnFxKiM2DRbjUwjE1s02NWTotLBr6%2BqMAHKVVlJnrZU46Dog6SyfBZTL%2F%2BB2TRO5mDkjSNj5eDvZJcNh0YxOeow8XIXthcSnQ25sPSp4yc70QiqwqwPFGASJJzVnxZRZRlhknZcrcRwix%2FJFmIhiwuoQvLCBiuO86wruQWMe3Rr16W%2FvCdqozWUhNyP0HokQr3gRouVDIhe1&X-Amz-Signature=07d48c8ee89a6c44c5034e6e81b7d8677b9bf6d6a4376dba4a0693f7ff515e2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YABO5YBU%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJYeCMy2XaJu0gPgslqBY56DIkd6kh%2F4UtZSjPjdI2mAiAV5BR3SP74JL5jHVnyFSt4HVxhyn2qJ7HreVNAEzxM%2ByqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrMulof3%2FYJHEAnwSKtwDwCNPtE%2BPEG3ovkJwBsl7ukfQdkAVq%2FJi1dU5MuYElVJ%2Fn7yQBRtOCwVT78UYYtpZ2p913PmVzPWuJYWxwTZ4mUtdiW8WOvj3Vd9Tk0U%2FS78Z723YFZ1nGZETvYKPYbdwMPy1evwXTkTpBmuR5sh3WWTb50REmtMKUjdryMw7qZ9lzn%2Biq36YsFWUJMIRYNq42l%2FZMPQkJs%2BOTNxkj%2F%2B0BHsOAzR%2Bv0vYdcekHuqoEpyY4yT%2FZYZTNzAeYsKS7M7v1tAXjTIDc0XKrI18v9xxD6vTG47lKSrz5bn3QLx3nrtxcGVFJSYNrzcDpQNpbosDoJgklaqdEy2yNGOauiX%2FMziYTXqaghvlxyQpoHx4%2BA3yO29mB5T5dOBWJuPAryZzQNV2IUenE2guL31YsLDr3C1EFHTFfUxC8ylEnoxkmMx7Wa0Dc%2FI8Oq5EEr6yUzUp0f4A%2FWLFHHAuPzAzHPdEM%2BXk6EX0LJUN0XRGuwvNkDTEdT%2BNU5GdA3WNUtS3UbB8i1HzNIhTMX1XXx4Uz%2BFlGVM1oGVs7L9TsDzNeEm2uIPz7Vpp8sKZtxJxO0rvZDWXUJ1ChKqrvR6ib1Bq8Y7eA52LLoqvnvbXbcrzR9E5nz1FL4gjr4dkIhjAqjQwz%2BjezAY6pgGLrJDMzrZ2CUa10LjjMnFxKiM2DRbjUwjE1s02NWTotLBr6%2BqMAHKVVlJnrZU46Dog6SyfBZTL%2F%2BB2TRO5mDkjSNj5eDvZJcNh0YxOeow8XIXthcSnQ25sPSp4yc70QiqwqwPFGASJJzVnxZRZRlhknZcrcRwix%2FJFmIhiwuoQvLCBiuO86wruQWMe3Rr16W%2FvCdqozWUhNyP0HokQr3gRouVDIhe1&X-Amz-Signature=f9632dcae4539c6c09cbf9e57b340b7141b0a653fc7ec37a1e9fc342c96cc6fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YABO5YBU%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJYeCMy2XaJu0gPgslqBY56DIkd6kh%2F4UtZSjPjdI2mAiAV5BR3SP74JL5jHVnyFSt4HVxhyn2qJ7HreVNAEzxM%2ByqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrMulof3%2FYJHEAnwSKtwDwCNPtE%2BPEG3ovkJwBsl7ukfQdkAVq%2FJi1dU5MuYElVJ%2Fn7yQBRtOCwVT78UYYtpZ2p913PmVzPWuJYWxwTZ4mUtdiW8WOvj3Vd9Tk0U%2FS78Z723YFZ1nGZETvYKPYbdwMPy1evwXTkTpBmuR5sh3WWTb50REmtMKUjdryMw7qZ9lzn%2Biq36YsFWUJMIRYNq42l%2FZMPQkJs%2BOTNxkj%2F%2B0BHsOAzR%2Bv0vYdcekHuqoEpyY4yT%2FZYZTNzAeYsKS7M7v1tAXjTIDc0XKrI18v9xxD6vTG47lKSrz5bn3QLx3nrtxcGVFJSYNrzcDpQNpbosDoJgklaqdEy2yNGOauiX%2FMziYTXqaghvlxyQpoHx4%2BA3yO29mB5T5dOBWJuPAryZzQNV2IUenE2guL31YsLDr3C1EFHTFfUxC8ylEnoxkmMx7Wa0Dc%2FI8Oq5EEr6yUzUp0f4A%2FWLFHHAuPzAzHPdEM%2BXk6EX0LJUN0XRGuwvNkDTEdT%2BNU5GdA3WNUtS3UbB8i1HzNIhTMX1XXx4Uz%2BFlGVM1oGVs7L9TsDzNeEm2uIPz7Vpp8sKZtxJxO0rvZDWXUJ1ChKqrvR6ib1Bq8Y7eA52LLoqvnvbXbcrzR9E5nz1FL4gjr4dkIhjAqjQwz%2BjezAY6pgGLrJDMzrZ2CUa10LjjMnFxKiM2DRbjUwjE1s02NWTotLBr6%2BqMAHKVVlJnrZU46Dog6SyfBZTL%2F%2BB2TRO5mDkjSNj5eDvZJcNh0YxOeow8XIXthcSnQ25sPSp4yc70QiqwqwPFGASJJzVnxZRZRlhknZcrcRwix%2FJFmIhiwuoQvLCBiuO86wruQWMe3Rr16W%2FvCdqozWUhNyP0HokQr3gRouVDIhe1&X-Amz-Signature=8696487f4b9780a2db9f8ec3bf86f091b66a00f84fe7d985e72a4738b5dbdc66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YABO5YBU%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJYeCMy2XaJu0gPgslqBY56DIkd6kh%2F4UtZSjPjdI2mAiAV5BR3SP74JL5jHVnyFSt4HVxhyn2qJ7HreVNAEzxM%2ByqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrMulof3%2FYJHEAnwSKtwDwCNPtE%2BPEG3ovkJwBsl7ukfQdkAVq%2FJi1dU5MuYElVJ%2Fn7yQBRtOCwVT78UYYtpZ2p913PmVzPWuJYWxwTZ4mUtdiW8WOvj3Vd9Tk0U%2FS78Z723YFZ1nGZETvYKPYbdwMPy1evwXTkTpBmuR5sh3WWTb50REmtMKUjdryMw7qZ9lzn%2Biq36YsFWUJMIRYNq42l%2FZMPQkJs%2BOTNxkj%2F%2B0BHsOAzR%2Bv0vYdcekHuqoEpyY4yT%2FZYZTNzAeYsKS7M7v1tAXjTIDc0XKrI18v9xxD6vTG47lKSrz5bn3QLx3nrtxcGVFJSYNrzcDpQNpbosDoJgklaqdEy2yNGOauiX%2FMziYTXqaghvlxyQpoHx4%2BA3yO29mB5T5dOBWJuPAryZzQNV2IUenE2guL31YsLDr3C1EFHTFfUxC8ylEnoxkmMx7Wa0Dc%2FI8Oq5EEr6yUzUp0f4A%2FWLFHHAuPzAzHPdEM%2BXk6EX0LJUN0XRGuwvNkDTEdT%2BNU5GdA3WNUtS3UbB8i1HzNIhTMX1XXx4Uz%2BFlGVM1oGVs7L9TsDzNeEm2uIPz7Vpp8sKZtxJxO0rvZDWXUJ1ChKqrvR6ib1Bq8Y7eA52LLoqvnvbXbcrzR9E5nz1FL4gjr4dkIhjAqjQwz%2BjezAY6pgGLrJDMzrZ2CUa10LjjMnFxKiM2DRbjUwjE1s02NWTotLBr6%2BqMAHKVVlJnrZU46Dog6SyfBZTL%2F%2BB2TRO5mDkjSNj5eDvZJcNh0YxOeow8XIXthcSnQ25sPSp4yc70QiqwqwPFGASJJzVnxZRZRlhknZcrcRwix%2FJFmIhiwuoQvLCBiuO86wruQWMe3Rr16W%2FvCdqozWUhNyP0HokQr3gRouVDIhe1&X-Amz-Signature=7ff76200eb543e055e9504222bfda867839ed2dce0d7a615085238ca9bce415d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YABO5YBU%2F20260220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260220T020819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJYeCMy2XaJu0gPgslqBY56DIkd6kh%2F4UtZSjPjdI2mAiAV5BR3SP74JL5jHVnyFSt4HVxhyn2qJ7HreVNAEzxM%2ByqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrMulof3%2FYJHEAnwSKtwDwCNPtE%2BPEG3ovkJwBsl7ukfQdkAVq%2FJi1dU5MuYElVJ%2Fn7yQBRtOCwVT78UYYtpZ2p913PmVzPWuJYWxwTZ4mUtdiW8WOvj3Vd9Tk0U%2FS78Z723YFZ1nGZETvYKPYbdwMPy1evwXTkTpBmuR5sh3WWTb50REmtMKUjdryMw7qZ9lzn%2Biq36YsFWUJMIRYNq42l%2FZMPQkJs%2BOTNxkj%2F%2B0BHsOAzR%2Bv0vYdcekHuqoEpyY4yT%2FZYZTNzAeYsKS7M7v1tAXjTIDc0XKrI18v9xxD6vTG47lKSrz5bn3QLx3nrtxcGVFJSYNrzcDpQNpbosDoJgklaqdEy2yNGOauiX%2FMziYTXqaghvlxyQpoHx4%2BA3yO29mB5T5dOBWJuPAryZzQNV2IUenE2guL31YsLDr3C1EFHTFfUxC8ylEnoxkmMx7Wa0Dc%2FI8Oq5EEr6yUzUp0f4A%2FWLFHHAuPzAzHPdEM%2BXk6EX0LJUN0XRGuwvNkDTEdT%2BNU5GdA3WNUtS3UbB8i1HzNIhTMX1XXx4Uz%2BFlGVM1oGVs7L9TsDzNeEm2uIPz7Vpp8sKZtxJxO0rvZDWXUJ1ChKqrvR6ib1Bq8Y7eA52LLoqvnvbXbcrzR9E5nz1FL4gjr4dkIhjAqjQwz%2BjezAY6pgGLrJDMzrZ2CUa10LjjMnFxKiM2DRbjUwjE1s02NWTotLBr6%2BqMAHKVVlJnrZU46Dog6SyfBZTL%2F%2BB2TRO5mDkjSNj5eDvZJcNh0YxOeow8XIXthcSnQ25sPSp4yc70QiqwqwPFGASJJzVnxZRZRlhknZcrcRwix%2FJFmIhiwuoQvLCBiuO86wruQWMe3Rr16W%2FvCdqozWUhNyP0HokQr3gRouVDIhe1&X-Amz-Signature=ba1f340287b29715b659c223e61a7c67b5927897e533b767ee635cdc4b73643a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
