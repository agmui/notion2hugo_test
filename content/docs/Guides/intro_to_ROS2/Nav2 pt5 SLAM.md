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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IVE5N76%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFQ7ZH3%2B0NliBF2%2F9BeBvyBQXbxVeWJHBlbaCzd1fcFAiEAu48nK3n7NRhSnungs6JuuXhdNhzqr39jAbimNbgACOwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7TIS5UYlOAEVfi%2FircA1ISknwELJOWORmLQi6m5Ywjxk4DLtbFEbM6NbX9nmDnZ5g18Ka5seE7R7AgH5f3n0%2FG1bnaHreqOW7Qvk0yMB0uWIHcfXrqi6ucHYe9UifInEw%2Bz3kP6NFfyj7VEfHErCdiH8G3yxjOsjeOK3OlRClUK964tEBHGTRFzx3xEKkJXIOzmcgLWwXZoaZVXcLCwJfV849Y3ipp2d8TGcBp9t6upuBMak1RD1k5wuy7MCFpv95AwzajJuVusML2Wj%2Bk0E5ONrogX2ZD8IyrVZSl13B3C2urqMiZMTYgdwxuRKm%2Fl10zQQr7k32GbCLNccpC8w7uVoTSNutae5BZB8Hn4gUuGEd8Zv8YaxCkJbGmfc07nVJDPjKg0C2HT%2FJ3zg17TqWIynwlhM9esCR5Otej%2F0fzN2HzgS0NmMUdo%2Bcw4xfNYUvM%2BkVHbIsKAycpOYD0oPxMlSzxo8pZiZvKkrulXXtcR6V%2BjeD4cHsVCLHhAvMpesiC4chbQrvuSVE3wjA2rX7dTQom4HXpbZiW%2Ft%2FpKDNB49gcExVFuzpszkOO4LWonq5S6Vn8DDkiIgO0xb6lIVCdPk5wi7akcP2BjDB70h55%2BQBBPe%2BlU0vRuXwHPvo51wOYkcUMmyAhxf9LMJW648QGOqUByAzCS%2FKH8qyKRG5V4ZBNJRNaD%2FBJO6MDwdzzj5nvLK%2BhT63W3sMJxkaQFtLtrEjDvv1BNUbIKPCO7z5pefVGt2TwxFJ3dHINPeMhvc75GOHXu09XumokF7mZTK0%2FfumjVN%2B4DfnPl7wvK9hAPpMIvoD9EFzxsesuZm2whfhyqGwyscETT3BIn1cytxZEoWygnTeAVkCXidFHyRZ2nAT5aLGr9kfn&X-Amz-Signature=e0db6218a7360b4d44e48e775e3d15485efb7f6f30292f3b326840df029bef5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IVE5N76%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFQ7ZH3%2B0NliBF2%2F9BeBvyBQXbxVeWJHBlbaCzd1fcFAiEAu48nK3n7NRhSnungs6JuuXhdNhzqr39jAbimNbgACOwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7TIS5UYlOAEVfi%2FircA1ISknwELJOWORmLQi6m5Ywjxk4DLtbFEbM6NbX9nmDnZ5g18Ka5seE7R7AgH5f3n0%2FG1bnaHreqOW7Qvk0yMB0uWIHcfXrqi6ucHYe9UifInEw%2Bz3kP6NFfyj7VEfHErCdiH8G3yxjOsjeOK3OlRClUK964tEBHGTRFzx3xEKkJXIOzmcgLWwXZoaZVXcLCwJfV849Y3ipp2d8TGcBp9t6upuBMak1RD1k5wuy7MCFpv95AwzajJuVusML2Wj%2Bk0E5ONrogX2ZD8IyrVZSl13B3C2urqMiZMTYgdwxuRKm%2Fl10zQQr7k32GbCLNccpC8w7uVoTSNutae5BZB8Hn4gUuGEd8Zv8YaxCkJbGmfc07nVJDPjKg0C2HT%2FJ3zg17TqWIynwlhM9esCR5Otej%2F0fzN2HzgS0NmMUdo%2Bcw4xfNYUvM%2BkVHbIsKAycpOYD0oPxMlSzxo8pZiZvKkrulXXtcR6V%2BjeD4cHsVCLHhAvMpesiC4chbQrvuSVE3wjA2rX7dTQom4HXpbZiW%2Ft%2FpKDNB49gcExVFuzpszkOO4LWonq5S6Vn8DDkiIgO0xb6lIVCdPk5wi7akcP2BjDB70h55%2BQBBPe%2BlU0vRuXwHPvo51wOYkcUMmyAhxf9LMJW648QGOqUByAzCS%2FKH8qyKRG5V4ZBNJRNaD%2FBJO6MDwdzzj5nvLK%2BhT63W3sMJxkaQFtLtrEjDvv1BNUbIKPCO7z5pefVGt2TwxFJ3dHINPeMhvc75GOHXu09XumokF7mZTK0%2FfumjVN%2B4DfnPl7wvK9hAPpMIvoD9EFzxsesuZm2whfhyqGwyscETT3BIn1cytxZEoWygnTeAVkCXidFHyRZ2nAT5aLGr9kfn&X-Amz-Signature=320c291084f599f8d37c66582f19e4a42e869e33670cd23a69b025da20e8de4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IVE5N76%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFQ7ZH3%2B0NliBF2%2F9BeBvyBQXbxVeWJHBlbaCzd1fcFAiEAu48nK3n7NRhSnungs6JuuXhdNhzqr39jAbimNbgACOwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7TIS5UYlOAEVfi%2FircA1ISknwELJOWORmLQi6m5Ywjxk4DLtbFEbM6NbX9nmDnZ5g18Ka5seE7R7AgH5f3n0%2FG1bnaHreqOW7Qvk0yMB0uWIHcfXrqi6ucHYe9UifInEw%2Bz3kP6NFfyj7VEfHErCdiH8G3yxjOsjeOK3OlRClUK964tEBHGTRFzx3xEKkJXIOzmcgLWwXZoaZVXcLCwJfV849Y3ipp2d8TGcBp9t6upuBMak1RD1k5wuy7MCFpv95AwzajJuVusML2Wj%2Bk0E5ONrogX2ZD8IyrVZSl13B3C2urqMiZMTYgdwxuRKm%2Fl10zQQr7k32GbCLNccpC8w7uVoTSNutae5BZB8Hn4gUuGEd8Zv8YaxCkJbGmfc07nVJDPjKg0C2HT%2FJ3zg17TqWIynwlhM9esCR5Otej%2F0fzN2HzgS0NmMUdo%2Bcw4xfNYUvM%2BkVHbIsKAycpOYD0oPxMlSzxo8pZiZvKkrulXXtcR6V%2BjeD4cHsVCLHhAvMpesiC4chbQrvuSVE3wjA2rX7dTQom4HXpbZiW%2Ft%2FpKDNB49gcExVFuzpszkOO4LWonq5S6Vn8DDkiIgO0xb6lIVCdPk5wi7akcP2BjDB70h55%2BQBBPe%2BlU0vRuXwHPvo51wOYkcUMmyAhxf9LMJW648QGOqUByAzCS%2FKH8qyKRG5V4ZBNJRNaD%2FBJO6MDwdzzj5nvLK%2BhT63W3sMJxkaQFtLtrEjDvv1BNUbIKPCO7z5pefVGt2TwxFJ3dHINPeMhvc75GOHXu09XumokF7mZTK0%2FfumjVN%2B4DfnPl7wvK9hAPpMIvoD9EFzxsesuZm2whfhyqGwyscETT3BIn1cytxZEoWygnTeAVkCXidFHyRZ2nAT5aLGr9kfn&X-Amz-Signature=f196632143599a12bf55ada1afc836a2e65875128a27060999c5b951cf7f9eba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IVE5N76%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFQ7ZH3%2B0NliBF2%2F9BeBvyBQXbxVeWJHBlbaCzd1fcFAiEAu48nK3n7NRhSnungs6JuuXhdNhzqr39jAbimNbgACOwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7TIS5UYlOAEVfi%2FircA1ISknwELJOWORmLQi6m5Ywjxk4DLtbFEbM6NbX9nmDnZ5g18Ka5seE7R7AgH5f3n0%2FG1bnaHreqOW7Qvk0yMB0uWIHcfXrqi6ucHYe9UifInEw%2Bz3kP6NFfyj7VEfHErCdiH8G3yxjOsjeOK3OlRClUK964tEBHGTRFzx3xEKkJXIOzmcgLWwXZoaZVXcLCwJfV849Y3ipp2d8TGcBp9t6upuBMak1RD1k5wuy7MCFpv95AwzajJuVusML2Wj%2Bk0E5ONrogX2ZD8IyrVZSl13B3C2urqMiZMTYgdwxuRKm%2Fl10zQQr7k32GbCLNccpC8w7uVoTSNutae5BZB8Hn4gUuGEd8Zv8YaxCkJbGmfc07nVJDPjKg0C2HT%2FJ3zg17TqWIynwlhM9esCR5Otej%2F0fzN2HzgS0NmMUdo%2Bcw4xfNYUvM%2BkVHbIsKAycpOYD0oPxMlSzxo8pZiZvKkrulXXtcR6V%2BjeD4cHsVCLHhAvMpesiC4chbQrvuSVE3wjA2rX7dTQom4HXpbZiW%2Ft%2FpKDNB49gcExVFuzpszkOO4LWonq5S6Vn8DDkiIgO0xb6lIVCdPk5wi7akcP2BjDB70h55%2BQBBPe%2BlU0vRuXwHPvo51wOYkcUMmyAhxf9LMJW648QGOqUByAzCS%2FKH8qyKRG5V4ZBNJRNaD%2FBJO6MDwdzzj5nvLK%2BhT63W3sMJxkaQFtLtrEjDvv1BNUbIKPCO7z5pefVGt2TwxFJ3dHINPeMhvc75GOHXu09XumokF7mZTK0%2FfumjVN%2B4DfnPl7wvK9hAPpMIvoD9EFzxsesuZm2whfhyqGwyscETT3BIn1cytxZEoWygnTeAVkCXidFHyRZ2nAT5aLGr9kfn&X-Amz-Signature=15ec05bb0b839618e03f8bdc6d0444fb69e8cb7979a72ec8ea2addc63b4dda35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IVE5N76%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFQ7ZH3%2B0NliBF2%2F9BeBvyBQXbxVeWJHBlbaCzd1fcFAiEAu48nK3n7NRhSnungs6JuuXhdNhzqr39jAbimNbgACOwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7TIS5UYlOAEVfi%2FircA1ISknwELJOWORmLQi6m5Ywjxk4DLtbFEbM6NbX9nmDnZ5g18Ka5seE7R7AgH5f3n0%2FG1bnaHreqOW7Qvk0yMB0uWIHcfXrqi6ucHYe9UifInEw%2Bz3kP6NFfyj7VEfHErCdiH8G3yxjOsjeOK3OlRClUK964tEBHGTRFzx3xEKkJXIOzmcgLWwXZoaZVXcLCwJfV849Y3ipp2d8TGcBp9t6upuBMak1RD1k5wuy7MCFpv95AwzajJuVusML2Wj%2Bk0E5ONrogX2ZD8IyrVZSl13B3C2urqMiZMTYgdwxuRKm%2Fl10zQQr7k32GbCLNccpC8w7uVoTSNutae5BZB8Hn4gUuGEd8Zv8YaxCkJbGmfc07nVJDPjKg0C2HT%2FJ3zg17TqWIynwlhM9esCR5Otej%2F0fzN2HzgS0NmMUdo%2Bcw4xfNYUvM%2BkVHbIsKAycpOYD0oPxMlSzxo8pZiZvKkrulXXtcR6V%2BjeD4cHsVCLHhAvMpesiC4chbQrvuSVE3wjA2rX7dTQom4HXpbZiW%2Ft%2FpKDNB49gcExVFuzpszkOO4LWonq5S6Vn8DDkiIgO0xb6lIVCdPk5wi7akcP2BjDB70h55%2BQBBPe%2BlU0vRuXwHPvo51wOYkcUMmyAhxf9LMJW648QGOqUByAzCS%2FKH8qyKRG5V4ZBNJRNaD%2FBJO6MDwdzzj5nvLK%2BhT63W3sMJxkaQFtLtrEjDvv1BNUbIKPCO7z5pefVGt2TwxFJ3dHINPeMhvc75GOHXu09XumokF7mZTK0%2FfumjVN%2B4DfnPl7wvK9hAPpMIvoD9EFzxsesuZm2whfhyqGwyscETT3BIn1cytxZEoWygnTeAVkCXidFHyRZ2nAT5aLGr9kfn&X-Amz-Signature=49257234b708048c71e8a586533c4131a0ebf4ea556e4c97c1eb70b50322890d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IVE5N76%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFQ7ZH3%2B0NliBF2%2F9BeBvyBQXbxVeWJHBlbaCzd1fcFAiEAu48nK3n7NRhSnungs6JuuXhdNhzqr39jAbimNbgACOwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7TIS5UYlOAEVfi%2FircA1ISknwELJOWORmLQi6m5Ywjxk4DLtbFEbM6NbX9nmDnZ5g18Ka5seE7R7AgH5f3n0%2FG1bnaHreqOW7Qvk0yMB0uWIHcfXrqi6ucHYe9UifInEw%2Bz3kP6NFfyj7VEfHErCdiH8G3yxjOsjeOK3OlRClUK964tEBHGTRFzx3xEKkJXIOzmcgLWwXZoaZVXcLCwJfV849Y3ipp2d8TGcBp9t6upuBMak1RD1k5wuy7MCFpv95AwzajJuVusML2Wj%2Bk0E5ONrogX2ZD8IyrVZSl13B3C2urqMiZMTYgdwxuRKm%2Fl10zQQr7k32GbCLNccpC8w7uVoTSNutae5BZB8Hn4gUuGEd8Zv8YaxCkJbGmfc07nVJDPjKg0C2HT%2FJ3zg17TqWIynwlhM9esCR5Otej%2F0fzN2HzgS0NmMUdo%2Bcw4xfNYUvM%2BkVHbIsKAycpOYD0oPxMlSzxo8pZiZvKkrulXXtcR6V%2BjeD4cHsVCLHhAvMpesiC4chbQrvuSVE3wjA2rX7dTQom4HXpbZiW%2Ft%2FpKDNB49gcExVFuzpszkOO4LWonq5S6Vn8DDkiIgO0xb6lIVCdPk5wi7akcP2BjDB70h55%2BQBBPe%2BlU0vRuXwHPvo51wOYkcUMmyAhxf9LMJW648QGOqUByAzCS%2FKH8qyKRG5V4ZBNJRNaD%2FBJO6MDwdzzj5nvLK%2BhT63W3sMJxkaQFtLtrEjDvv1BNUbIKPCO7z5pefVGt2TwxFJ3dHINPeMhvc75GOHXu09XumokF7mZTK0%2FfumjVN%2B4DfnPl7wvK9hAPpMIvoD9EFzxsesuZm2whfhyqGwyscETT3BIn1cytxZEoWygnTeAVkCXidFHyRZ2nAT5aLGr9kfn&X-Amz-Signature=704bb6472482bcbd6b5944a98c2c1bfe3f07754dbc60011432dfad0c14008058&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IVE5N76%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFQ7ZH3%2B0NliBF2%2F9BeBvyBQXbxVeWJHBlbaCzd1fcFAiEAu48nK3n7NRhSnungs6JuuXhdNhzqr39jAbimNbgACOwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7TIS5UYlOAEVfi%2FircA1ISknwELJOWORmLQi6m5Ywjxk4DLtbFEbM6NbX9nmDnZ5g18Ka5seE7R7AgH5f3n0%2FG1bnaHreqOW7Qvk0yMB0uWIHcfXrqi6ucHYe9UifInEw%2Bz3kP6NFfyj7VEfHErCdiH8G3yxjOsjeOK3OlRClUK964tEBHGTRFzx3xEKkJXIOzmcgLWwXZoaZVXcLCwJfV849Y3ipp2d8TGcBp9t6upuBMak1RD1k5wuy7MCFpv95AwzajJuVusML2Wj%2Bk0E5ONrogX2ZD8IyrVZSl13B3C2urqMiZMTYgdwxuRKm%2Fl10zQQr7k32GbCLNccpC8w7uVoTSNutae5BZB8Hn4gUuGEd8Zv8YaxCkJbGmfc07nVJDPjKg0C2HT%2FJ3zg17TqWIynwlhM9esCR5Otej%2F0fzN2HzgS0NmMUdo%2Bcw4xfNYUvM%2BkVHbIsKAycpOYD0oPxMlSzxo8pZiZvKkrulXXtcR6V%2BjeD4cHsVCLHhAvMpesiC4chbQrvuSVE3wjA2rX7dTQom4HXpbZiW%2Ft%2FpKDNB49gcExVFuzpszkOO4LWonq5S6Vn8DDkiIgO0xb6lIVCdPk5wi7akcP2BjDB70h55%2BQBBPe%2BlU0vRuXwHPvo51wOYkcUMmyAhxf9LMJW648QGOqUByAzCS%2FKH8qyKRG5V4ZBNJRNaD%2FBJO6MDwdzzj5nvLK%2BhT63W3sMJxkaQFtLtrEjDvv1BNUbIKPCO7z5pefVGt2TwxFJ3dHINPeMhvc75GOHXu09XumokF7mZTK0%2FfumjVN%2B4DfnPl7wvK9hAPpMIvoD9EFzxsesuZm2whfhyqGwyscETT3BIn1cytxZEoWygnTeAVkCXidFHyRZ2nAT5aLGr9kfn&X-Amz-Signature=bfa1706c3835960e5aeecbee9160a6a7bbf4fee3924032a4d5e2f410dcb8c858&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IVE5N76%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFQ7ZH3%2B0NliBF2%2F9BeBvyBQXbxVeWJHBlbaCzd1fcFAiEAu48nK3n7NRhSnungs6JuuXhdNhzqr39jAbimNbgACOwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7TIS5UYlOAEVfi%2FircA1ISknwELJOWORmLQi6m5Ywjxk4DLtbFEbM6NbX9nmDnZ5g18Ka5seE7R7AgH5f3n0%2FG1bnaHreqOW7Qvk0yMB0uWIHcfXrqi6ucHYe9UifInEw%2Bz3kP6NFfyj7VEfHErCdiH8G3yxjOsjeOK3OlRClUK964tEBHGTRFzx3xEKkJXIOzmcgLWwXZoaZVXcLCwJfV849Y3ipp2d8TGcBp9t6upuBMak1RD1k5wuy7MCFpv95AwzajJuVusML2Wj%2Bk0E5ONrogX2ZD8IyrVZSl13B3C2urqMiZMTYgdwxuRKm%2Fl10zQQr7k32GbCLNccpC8w7uVoTSNutae5BZB8Hn4gUuGEd8Zv8YaxCkJbGmfc07nVJDPjKg0C2HT%2FJ3zg17TqWIynwlhM9esCR5Otej%2F0fzN2HzgS0NmMUdo%2Bcw4xfNYUvM%2BkVHbIsKAycpOYD0oPxMlSzxo8pZiZvKkrulXXtcR6V%2BjeD4cHsVCLHhAvMpesiC4chbQrvuSVE3wjA2rX7dTQom4HXpbZiW%2Ft%2FpKDNB49gcExVFuzpszkOO4LWonq5S6Vn8DDkiIgO0xb6lIVCdPk5wi7akcP2BjDB70h55%2BQBBPe%2BlU0vRuXwHPvo51wOYkcUMmyAhxf9LMJW648QGOqUByAzCS%2FKH8qyKRG5V4ZBNJRNaD%2FBJO6MDwdzzj5nvLK%2BhT63W3sMJxkaQFtLtrEjDvv1BNUbIKPCO7z5pefVGt2TwxFJ3dHINPeMhvc75GOHXu09XumokF7mZTK0%2FfumjVN%2B4DfnPl7wvK9hAPpMIvoD9EFzxsesuZm2whfhyqGwyscETT3BIn1cytxZEoWygnTeAVkCXidFHyRZ2nAT5aLGr9kfn&X-Amz-Signature=b9d735354da98645857173132383ebfff8ef78a19c8ca0435ccef803b62429f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IVE5N76%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFQ7ZH3%2B0NliBF2%2F9BeBvyBQXbxVeWJHBlbaCzd1fcFAiEAu48nK3n7NRhSnungs6JuuXhdNhzqr39jAbimNbgACOwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7TIS5UYlOAEVfi%2FircA1ISknwELJOWORmLQi6m5Ywjxk4DLtbFEbM6NbX9nmDnZ5g18Ka5seE7R7AgH5f3n0%2FG1bnaHreqOW7Qvk0yMB0uWIHcfXrqi6ucHYe9UifInEw%2Bz3kP6NFfyj7VEfHErCdiH8G3yxjOsjeOK3OlRClUK964tEBHGTRFzx3xEKkJXIOzmcgLWwXZoaZVXcLCwJfV849Y3ipp2d8TGcBp9t6upuBMak1RD1k5wuy7MCFpv95AwzajJuVusML2Wj%2Bk0E5ONrogX2ZD8IyrVZSl13B3C2urqMiZMTYgdwxuRKm%2Fl10zQQr7k32GbCLNccpC8w7uVoTSNutae5BZB8Hn4gUuGEd8Zv8YaxCkJbGmfc07nVJDPjKg0C2HT%2FJ3zg17TqWIynwlhM9esCR5Otej%2F0fzN2HzgS0NmMUdo%2Bcw4xfNYUvM%2BkVHbIsKAycpOYD0oPxMlSzxo8pZiZvKkrulXXtcR6V%2BjeD4cHsVCLHhAvMpesiC4chbQrvuSVE3wjA2rX7dTQom4HXpbZiW%2Ft%2FpKDNB49gcExVFuzpszkOO4LWonq5S6Vn8DDkiIgO0xb6lIVCdPk5wi7akcP2BjDB70h55%2BQBBPe%2BlU0vRuXwHPvo51wOYkcUMmyAhxf9LMJW648QGOqUByAzCS%2FKH8qyKRG5V4ZBNJRNaD%2FBJO6MDwdzzj5nvLK%2BhT63W3sMJxkaQFtLtrEjDvv1BNUbIKPCO7z5pefVGt2TwxFJ3dHINPeMhvc75GOHXu09XumokF7mZTK0%2FfumjVN%2B4DfnPl7wvK9hAPpMIvoD9EFzxsesuZm2whfhyqGwyscETT3BIn1cytxZEoWygnTeAVkCXidFHyRZ2nAT5aLGr9kfn&X-Amz-Signature=aecd9006c5015edc4cd9fd0b76556e1b03737633b2e8440d0a291ada1d63073f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IVE5N76%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFQ7ZH3%2B0NliBF2%2F9BeBvyBQXbxVeWJHBlbaCzd1fcFAiEAu48nK3n7NRhSnungs6JuuXhdNhzqr39jAbimNbgACOwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7TIS5UYlOAEVfi%2FircA1ISknwELJOWORmLQi6m5Ywjxk4DLtbFEbM6NbX9nmDnZ5g18Ka5seE7R7AgH5f3n0%2FG1bnaHreqOW7Qvk0yMB0uWIHcfXrqi6ucHYe9UifInEw%2Bz3kP6NFfyj7VEfHErCdiH8G3yxjOsjeOK3OlRClUK964tEBHGTRFzx3xEKkJXIOzmcgLWwXZoaZVXcLCwJfV849Y3ipp2d8TGcBp9t6upuBMak1RD1k5wuy7MCFpv95AwzajJuVusML2Wj%2Bk0E5ONrogX2ZD8IyrVZSl13B3C2urqMiZMTYgdwxuRKm%2Fl10zQQr7k32GbCLNccpC8w7uVoTSNutae5BZB8Hn4gUuGEd8Zv8YaxCkJbGmfc07nVJDPjKg0C2HT%2FJ3zg17TqWIynwlhM9esCR5Otej%2F0fzN2HzgS0NmMUdo%2Bcw4xfNYUvM%2BkVHbIsKAycpOYD0oPxMlSzxo8pZiZvKkrulXXtcR6V%2BjeD4cHsVCLHhAvMpesiC4chbQrvuSVE3wjA2rX7dTQom4HXpbZiW%2Ft%2FpKDNB49gcExVFuzpszkOO4LWonq5S6Vn8DDkiIgO0xb6lIVCdPk5wi7akcP2BjDB70h55%2BQBBPe%2BlU0vRuXwHPvo51wOYkcUMmyAhxf9LMJW648QGOqUByAzCS%2FKH8qyKRG5V4ZBNJRNaD%2FBJO6MDwdzzj5nvLK%2BhT63W3sMJxkaQFtLtrEjDvv1BNUbIKPCO7z5pefVGt2TwxFJ3dHINPeMhvc75GOHXu09XumokF7mZTK0%2FfumjVN%2B4DfnPl7wvK9hAPpMIvoD9EFzxsesuZm2whfhyqGwyscETT3BIn1cytxZEoWygnTeAVkCXidFHyRZ2nAT5aLGr9kfn&X-Amz-Signature=813b3624242a3688544662b512a248c6abe3dd991427670b553f4d51cea7ef9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IVE5N76%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFQ7ZH3%2B0NliBF2%2F9BeBvyBQXbxVeWJHBlbaCzd1fcFAiEAu48nK3n7NRhSnungs6JuuXhdNhzqr39jAbimNbgACOwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7TIS5UYlOAEVfi%2FircA1ISknwELJOWORmLQi6m5Ywjxk4DLtbFEbM6NbX9nmDnZ5g18Ka5seE7R7AgH5f3n0%2FG1bnaHreqOW7Qvk0yMB0uWIHcfXrqi6ucHYe9UifInEw%2Bz3kP6NFfyj7VEfHErCdiH8G3yxjOsjeOK3OlRClUK964tEBHGTRFzx3xEKkJXIOzmcgLWwXZoaZVXcLCwJfV849Y3ipp2d8TGcBp9t6upuBMak1RD1k5wuy7MCFpv95AwzajJuVusML2Wj%2Bk0E5ONrogX2ZD8IyrVZSl13B3C2urqMiZMTYgdwxuRKm%2Fl10zQQr7k32GbCLNccpC8w7uVoTSNutae5BZB8Hn4gUuGEd8Zv8YaxCkJbGmfc07nVJDPjKg0C2HT%2FJ3zg17TqWIynwlhM9esCR5Otej%2F0fzN2HzgS0NmMUdo%2Bcw4xfNYUvM%2BkVHbIsKAycpOYD0oPxMlSzxo8pZiZvKkrulXXtcR6V%2BjeD4cHsVCLHhAvMpesiC4chbQrvuSVE3wjA2rX7dTQom4HXpbZiW%2Ft%2FpKDNB49gcExVFuzpszkOO4LWonq5S6Vn8DDkiIgO0xb6lIVCdPk5wi7akcP2BjDB70h55%2BQBBPe%2BlU0vRuXwHPvo51wOYkcUMmyAhxf9LMJW648QGOqUByAzCS%2FKH8qyKRG5V4ZBNJRNaD%2FBJO6MDwdzzj5nvLK%2BhT63W3sMJxkaQFtLtrEjDvv1BNUbIKPCO7z5pefVGt2TwxFJ3dHINPeMhvc75GOHXu09XumokF7mZTK0%2FfumjVN%2B4DfnPl7wvK9hAPpMIvoD9EFzxsesuZm2whfhyqGwyscETT3BIn1cytxZEoWygnTeAVkCXidFHyRZ2nAT5aLGr9kfn&X-Amz-Signature=f872580b72e7f2c4b46cb4bbf90eeb547c03125a88854bc41e334f959526fd13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IVE5N76%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFQ7ZH3%2B0NliBF2%2F9BeBvyBQXbxVeWJHBlbaCzd1fcFAiEAu48nK3n7NRhSnungs6JuuXhdNhzqr39jAbimNbgACOwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7TIS5UYlOAEVfi%2FircA1ISknwELJOWORmLQi6m5Ywjxk4DLtbFEbM6NbX9nmDnZ5g18Ka5seE7R7AgH5f3n0%2FG1bnaHreqOW7Qvk0yMB0uWIHcfXrqi6ucHYe9UifInEw%2Bz3kP6NFfyj7VEfHErCdiH8G3yxjOsjeOK3OlRClUK964tEBHGTRFzx3xEKkJXIOzmcgLWwXZoaZVXcLCwJfV849Y3ipp2d8TGcBp9t6upuBMak1RD1k5wuy7MCFpv95AwzajJuVusML2Wj%2Bk0E5ONrogX2ZD8IyrVZSl13B3C2urqMiZMTYgdwxuRKm%2Fl10zQQr7k32GbCLNccpC8w7uVoTSNutae5BZB8Hn4gUuGEd8Zv8YaxCkJbGmfc07nVJDPjKg0C2HT%2FJ3zg17TqWIynwlhM9esCR5Otej%2F0fzN2HzgS0NmMUdo%2Bcw4xfNYUvM%2BkVHbIsKAycpOYD0oPxMlSzxo8pZiZvKkrulXXtcR6V%2BjeD4cHsVCLHhAvMpesiC4chbQrvuSVE3wjA2rX7dTQom4HXpbZiW%2Ft%2FpKDNB49gcExVFuzpszkOO4LWonq5S6Vn8DDkiIgO0xb6lIVCdPk5wi7akcP2BjDB70h55%2BQBBPe%2BlU0vRuXwHPvo51wOYkcUMmyAhxf9LMJW648QGOqUByAzCS%2FKH8qyKRG5V4ZBNJRNaD%2FBJO6MDwdzzj5nvLK%2BhT63W3sMJxkaQFtLtrEjDvv1BNUbIKPCO7z5pefVGt2TwxFJ3dHINPeMhvc75GOHXu09XumokF7mZTK0%2FfumjVN%2B4DfnPl7wvK9hAPpMIvoD9EFzxsesuZm2whfhyqGwyscETT3BIn1cytxZEoWygnTeAVkCXidFHyRZ2nAT5aLGr9kfn&X-Amz-Signature=6ce9b9c302c607bbbed19ed593bcda0a0271424aba95bf154fc27aa75080df40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IVE5N76%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFQ7ZH3%2B0NliBF2%2F9BeBvyBQXbxVeWJHBlbaCzd1fcFAiEAu48nK3n7NRhSnungs6JuuXhdNhzqr39jAbimNbgACOwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7TIS5UYlOAEVfi%2FircA1ISknwELJOWORmLQi6m5Ywjxk4DLtbFEbM6NbX9nmDnZ5g18Ka5seE7R7AgH5f3n0%2FG1bnaHreqOW7Qvk0yMB0uWIHcfXrqi6ucHYe9UifInEw%2Bz3kP6NFfyj7VEfHErCdiH8G3yxjOsjeOK3OlRClUK964tEBHGTRFzx3xEKkJXIOzmcgLWwXZoaZVXcLCwJfV849Y3ipp2d8TGcBp9t6upuBMak1RD1k5wuy7MCFpv95AwzajJuVusML2Wj%2Bk0E5ONrogX2ZD8IyrVZSl13B3C2urqMiZMTYgdwxuRKm%2Fl10zQQr7k32GbCLNccpC8w7uVoTSNutae5BZB8Hn4gUuGEd8Zv8YaxCkJbGmfc07nVJDPjKg0C2HT%2FJ3zg17TqWIynwlhM9esCR5Otej%2F0fzN2HzgS0NmMUdo%2Bcw4xfNYUvM%2BkVHbIsKAycpOYD0oPxMlSzxo8pZiZvKkrulXXtcR6V%2BjeD4cHsVCLHhAvMpesiC4chbQrvuSVE3wjA2rX7dTQom4HXpbZiW%2Ft%2FpKDNB49gcExVFuzpszkOO4LWonq5S6Vn8DDkiIgO0xb6lIVCdPk5wi7akcP2BjDB70h55%2BQBBPe%2BlU0vRuXwHPvo51wOYkcUMmyAhxf9LMJW648QGOqUByAzCS%2FKH8qyKRG5V4ZBNJRNaD%2FBJO6MDwdzzj5nvLK%2BhT63W3sMJxkaQFtLtrEjDvv1BNUbIKPCO7z5pefVGt2TwxFJ3dHINPeMhvc75GOHXu09XumokF7mZTK0%2FfumjVN%2B4DfnPl7wvK9hAPpMIvoD9EFzxsesuZm2whfhyqGwyscETT3BIn1cytxZEoWygnTeAVkCXidFHyRZ2nAT5aLGr9kfn&X-Amz-Signature=929d64a770605823d87f41c3e7f72c0e434c36738dca04d90d2fc7dfd3df4fdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IVE5N76%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFQ7ZH3%2B0NliBF2%2F9BeBvyBQXbxVeWJHBlbaCzd1fcFAiEAu48nK3n7NRhSnungs6JuuXhdNhzqr39jAbimNbgACOwqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7TIS5UYlOAEVfi%2FircA1ISknwELJOWORmLQi6m5Ywjxk4DLtbFEbM6NbX9nmDnZ5g18Ka5seE7R7AgH5f3n0%2FG1bnaHreqOW7Qvk0yMB0uWIHcfXrqi6ucHYe9UifInEw%2Bz3kP6NFfyj7VEfHErCdiH8G3yxjOsjeOK3OlRClUK964tEBHGTRFzx3xEKkJXIOzmcgLWwXZoaZVXcLCwJfV849Y3ipp2d8TGcBp9t6upuBMak1RD1k5wuy7MCFpv95AwzajJuVusML2Wj%2Bk0E5ONrogX2ZD8IyrVZSl13B3C2urqMiZMTYgdwxuRKm%2Fl10zQQr7k32GbCLNccpC8w7uVoTSNutae5BZB8Hn4gUuGEd8Zv8YaxCkJbGmfc07nVJDPjKg0C2HT%2FJ3zg17TqWIynwlhM9esCR5Otej%2F0fzN2HzgS0NmMUdo%2Bcw4xfNYUvM%2BkVHbIsKAycpOYD0oPxMlSzxo8pZiZvKkrulXXtcR6V%2BjeD4cHsVCLHhAvMpesiC4chbQrvuSVE3wjA2rX7dTQom4HXpbZiW%2Ft%2FpKDNB49gcExVFuzpszkOO4LWonq5S6Vn8DDkiIgO0xb6lIVCdPk5wi7akcP2BjDB70h55%2BQBBPe%2BlU0vRuXwHPvo51wOYkcUMmyAhxf9LMJW648QGOqUByAzCS%2FKH8qyKRG5V4ZBNJRNaD%2FBJO6MDwdzzj5nvLK%2BhT63W3sMJxkaQFtLtrEjDvv1BNUbIKPCO7z5pefVGt2TwxFJ3dHINPeMhvc75GOHXu09XumokF7mZTK0%2FfumjVN%2B4DfnPl7wvK9hAPpMIvoD9EFzxsesuZm2whfhyqGwyscETT3BIn1cytxZEoWygnTeAVkCXidFHyRZ2nAT5aLGr9kfn&X-Amz-Signature=846ee55e9e63084d31eae07d5ebd4ba1589ebfece6e7a4cec3ad25ed607179ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
