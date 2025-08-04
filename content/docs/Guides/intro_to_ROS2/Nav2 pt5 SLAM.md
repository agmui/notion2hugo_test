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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622J4GJXK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCIUfyZ19HvpRU9YqgJ%2F6Gn3hhYGCb%2BaAHG6GRctvC6WQIhAKwnCQJ62BdNq0WaxcX0K1DFbbZQC1OC6e5rQonEMC4DKv8DCDoQABoMNjM3NDIzMTgzODA1IgyWm45HG2kpQmSHgv0q3APhnm2ZcOu978YtIy4Pj6pwRld%2Fcdn69h3kHDhSyHx7WseH3bSehVmlsA5QZ%2BGDJH%2BQp905zKCVYm%2BjKsqp6Z7PKJIuIe1LZtVhkVD8xnraR0B3uf6plNLqvbviuGVTEhNwb17TJ3BUWAY%2F%2FFLuJyQLnSoBdHkF7D907A5PdfyKS1aX3d%2B5vXllXTx8r0gy3QS7lx4T2iY8Ins6VA7CQRXG%2BUM8QRssfwf%2BN4pII3Fy1rd13t46avE2giru0L8VJ5ATHZogwkxi7IalR3xhwqoe9WRqp5w1IKOpxLlonktu9E52XxxrkNdc9g3ZkmBtYGfDr95wfbDvpv46XOEcck28Sj0Fhzvp80l6x5DbQwvct2i9UrDvJHokL7axrI1IL6BmjkWo95DkmauHSEu9fgfSfxH1MCPTwgfI%2B3b7VufEH8%2FObgM0iG9n1je%2FXxtXfilQtk%2BUCCistoDDDNkgTw2t8cptY17%2FrT8LQjM%2BOEpyYtD%2BySRA%2Fm6beCznamXXuwarJ01IAzY7QNk%2BMSqfN%2FtOtJMwGeFxkWomgDnc%2Fok9YpOEzLozHFtgyCLAK2bZYGkqKvlu0PO%2Bzild45GwHn95xiCAbEBasloCocgjlwZDnwLUuGrrbMhm2U2KZjDc%2F7%2FEBjqkAeRyKQm31cfq0o3tfCnLClcGjWM7xtMZXT5QklrjKe09Cv31yfwxgos%2BIwN98UpD%2Bprm8MyXXCxoXfbmYD%2BgMFB75lCRj4FJNgAD6Ud6GJ6IGnhmLOS3TRADr8AdcYgLFd4kwRO1aWPuMEVlzFaXe62me2PEG4fSgDxflWkAH55hA7%2BtnzurOBeHOBRopjCDqqWcZAlnunxf1Ujjied6o%2B%2F2yZmp&X-Amz-Signature=7027ee60611f6b943d6848b183182c32089d2c8e1f1166064eca3dd500f7c41f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622J4GJXK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCIUfyZ19HvpRU9YqgJ%2F6Gn3hhYGCb%2BaAHG6GRctvC6WQIhAKwnCQJ62BdNq0WaxcX0K1DFbbZQC1OC6e5rQonEMC4DKv8DCDoQABoMNjM3NDIzMTgzODA1IgyWm45HG2kpQmSHgv0q3APhnm2ZcOu978YtIy4Pj6pwRld%2Fcdn69h3kHDhSyHx7WseH3bSehVmlsA5QZ%2BGDJH%2BQp905zKCVYm%2BjKsqp6Z7PKJIuIe1LZtVhkVD8xnraR0B3uf6plNLqvbviuGVTEhNwb17TJ3BUWAY%2F%2FFLuJyQLnSoBdHkF7D907A5PdfyKS1aX3d%2B5vXllXTx8r0gy3QS7lx4T2iY8Ins6VA7CQRXG%2BUM8QRssfwf%2BN4pII3Fy1rd13t46avE2giru0L8VJ5ATHZogwkxi7IalR3xhwqoe9WRqp5w1IKOpxLlonktu9E52XxxrkNdc9g3ZkmBtYGfDr95wfbDvpv46XOEcck28Sj0Fhzvp80l6x5DbQwvct2i9UrDvJHokL7axrI1IL6BmjkWo95DkmauHSEu9fgfSfxH1MCPTwgfI%2B3b7VufEH8%2FObgM0iG9n1je%2FXxtXfilQtk%2BUCCistoDDDNkgTw2t8cptY17%2FrT8LQjM%2BOEpyYtD%2BySRA%2Fm6beCznamXXuwarJ01IAzY7QNk%2BMSqfN%2FtOtJMwGeFxkWomgDnc%2Fok9YpOEzLozHFtgyCLAK2bZYGkqKvlu0PO%2Bzild45GwHn95xiCAbEBasloCocgjlwZDnwLUuGrrbMhm2U2KZjDc%2F7%2FEBjqkAeRyKQm31cfq0o3tfCnLClcGjWM7xtMZXT5QklrjKe09Cv31yfwxgos%2BIwN98UpD%2Bprm8MyXXCxoXfbmYD%2BgMFB75lCRj4FJNgAD6Ud6GJ6IGnhmLOS3TRADr8AdcYgLFd4kwRO1aWPuMEVlzFaXe62me2PEG4fSgDxflWkAH55hA7%2BtnzurOBeHOBRopjCDqqWcZAlnunxf1Ujjied6o%2B%2F2yZmp&X-Amz-Signature=8b7aa610b1c5e7f400e268eecafd633679673132a8f9bff5d4584b828b651842&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622J4GJXK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCIUfyZ19HvpRU9YqgJ%2F6Gn3hhYGCb%2BaAHG6GRctvC6WQIhAKwnCQJ62BdNq0WaxcX0K1DFbbZQC1OC6e5rQonEMC4DKv8DCDoQABoMNjM3NDIzMTgzODA1IgyWm45HG2kpQmSHgv0q3APhnm2ZcOu978YtIy4Pj6pwRld%2Fcdn69h3kHDhSyHx7WseH3bSehVmlsA5QZ%2BGDJH%2BQp905zKCVYm%2BjKsqp6Z7PKJIuIe1LZtVhkVD8xnraR0B3uf6plNLqvbviuGVTEhNwb17TJ3BUWAY%2F%2FFLuJyQLnSoBdHkF7D907A5PdfyKS1aX3d%2B5vXllXTx8r0gy3QS7lx4T2iY8Ins6VA7CQRXG%2BUM8QRssfwf%2BN4pII3Fy1rd13t46avE2giru0L8VJ5ATHZogwkxi7IalR3xhwqoe9WRqp5w1IKOpxLlonktu9E52XxxrkNdc9g3ZkmBtYGfDr95wfbDvpv46XOEcck28Sj0Fhzvp80l6x5DbQwvct2i9UrDvJHokL7axrI1IL6BmjkWo95DkmauHSEu9fgfSfxH1MCPTwgfI%2B3b7VufEH8%2FObgM0iG9n1je%2FXxtXfilQtk%2BUCCistoDDDNkgTw2t8cptY17%2FrT8LQjM%2BOEpyYtD%2BySRA%2Fm6beCznamXXuwarJ01IAzY7QNk%2BMSqfN%2FtOtJMwGeFxkWomgDnc%2Fok9YpOEzLozHFtgyCLAK2bZYGkqKvlu0PO%2Bzild45GwHn95xiCAbEBasloCocgjlwZDnwLUuGrrbMhm2U2KZjDc%2F7%2FEBjqkAeRyKQm31cfq0o3tfCnLClcGjWM7xtMZXT5QklrjKe09Cv31yfwxgos%2BIwN98UpD%2Bprm8MyXXCxoXfbmYD%2BgMFB75lCRj4FJNgAD6Ud6GJ6IGnhmLOS3TRADr8AdcYgLFd4kwRO1aWPuMEVlzFaXe62me2PEG4fSgDxflWkAH55hA7%2BtnzurOBeHOBRopjCDqqWcZAlnunxf1Ujjied6o%2B%2F2yZmp&X-Amz-Signature=136051ffd8b2b2dcfc892afb88451e32c8f00dfe646f777ff7b2d0325d523bca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622J4GJXK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCIUfyZ19HvpRU9YqgJ%2F6Gn3hhYGCb%2BaAHG6GRctvC6WQIhAKwnCQJ62BdNq0WaxcX0K1DFbbZQC1OC6e5rQonEMC4DKv8DCDoQABoMNjM3NDIzMTgzODA1IgyWm45HG2kpQmSHgv0q3APhnm2ZcOu978YtIy4Pj6pwRld%2Fcdn69h3kHDhSyHx7WseH3bSehVmlsA5QZ%2BGDJH%2BQp905zKCVYm%2BjKsqp6Z7PKJIuIe1LZtVhkVD8xnraR0B3uf6plNLqvbviuGVTEhNwb17TJ3BUWAY%2F%2FFLuJyQLnSoBdHkF7D907A5PdfyKS1aX3d%2B5vXllXTx8r0gy3QS7lx4T2iY8Ins6VA7CQRXG%2BUM8QRssfwf%2BN4pII3Fy1rd13t46avE2giru0L8VJ5ATHZogwkxi7IalR3xhwqoe9WRqp5w1IKOpxLlonktu9E52XxxrkNdc9g3ZkmBtYGfDr95wfbDvpv46XOEcck28Sj0Fhzvp80l6x5DbQwvct2i9UrDvJHokL7axrI1IL6BmjkWo95DkmauHSEu9fgfSfxH1MCPTwgfI%2B3b7VufEH8%2FObgM0iG9n1je%2FXxtXfilQtk%2BUCCistoDDDNkgTw2t8cptY17%2FrT8LQjM%2BOEpyYtD%2BySRA%2Fm6beCznamXXuwarJ01IAzY7QNk%2BMSqfN%2FtOtJMwGeFxkWomgDnc%2Fok9YpOEzLozHFtgyCLAK2bZYGkqKvlu0PO%2Bzild45GwHn95xiCAbEBasloCocgjlwZDnwLUuGrrbMhm2U2KZjDc%2F7%2FEBjqkAeRyKQm31cfq0o3tfCnLClcGjWM7xtMZXT5QklrjKe09Cv31yfwxgos%2BIwN98UpD%2Bprm8MyXXCxoXfbmYD%2BgMFB75lCRj4FJNgAD6Ud6GJ6IGnhmLOS3TRADr8AdcYgLFd4kwRO1aWPuMEVlzFaXe62me2PEG4fSgDxflWkAH55hA7%2BtnzurOBeHOBRopjCDqqWcZAlnunxf1Ujjied6o%2B%2F2yZmp&X-Amz-Signature=806a2ccbcfbfb7aef74e6eea54299b5b03d55d9a0c427bbf7b6bba757d8787ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622J4GJXK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCIUfyZ19HvpRU9YqgJ%2F6Gn3hhYGCb%2BaAHG6GRctvC6WQIhAKwnCQJ62BdNq0WaxcX0K1DFbbZQC1OC6e5rQonEMC4DKv8DCDoQABoMNjM3NDIzMTgzODA1IgyWm45HG2kpQmSHgv0q3APhnm2ZcOu978YtIy4Pj6pwRld%2Fcdn69h3kHDhSyHx7WseH3bSehVmlsA5QZ%2BGDJH%2BQp905zKCVYm%2BjKsqp6Z7PKJIuIe1LZtVhkVD8xnraR0B3uf6plNLqvbviuGVTEhNwb17TJ3BUWAY%2F%2FFLuJyQLnSoBdHkF7D907A5PdfyKS1aX3d%2B5vXllXTx8r0gy3QS7lx4T2iY8Ins6VA7CQRXG%2BUM8QRssfwf%2BN4pII3Fy1rd13t46avE2giru0L8VJ5ATHZogwkxi7IalR3xhwqoe9WRqp5w1IKOpxLlonktu9E52XxxrkNdc9g3ZkmBtYGfDr95wfbDvpv46XOEcck28Sj0Fhzvp80l6x5DbQwvct2i9UrDvJHokL7axrI1IL6BmjkWo95DkmauHSEu9fgfSfxH1MCPTwgfI%2B3b7VufEH8%2FObgM0iG9n1je%2FXxtXfilQtk%2BUCCistoDDDNkgTw2t8cptY17%2FrT8LQjM%2BOEpyYtD%2BySRA%2Fm6beCznamXXuwarJ01IAzY7QNk%2BMSqfN%2FtOtJMwGeFxkWomgDnc%2Fok9YpOEzLozHFtgyCLAK2bZYGkqKvlu0PO%2Bzild45GwHn95xiCAbEBasloCocgjlwZDnwLUuGrrbMhm2U2KZjDc%2F7%2FEBjqkAeRyKQm31cfq0o3tfCnLClcGjWM7xtMZXT5QklrjKe09Cv31yfwxgos%2BIwN98UpD%2Bprm8MyXXCxoXfbmYD%2BgMFB75lCRj4FJNgAD6Ud6GJ6IGnhmLOS3TRADr8AdcYgLFd4kwRO1aWPuMEVlzFaXe62me2PEG4fSgDxflWkAH55hA7%2BtnzurOBeHOBRopjCDqqWcZAlnunxf1Ujjied6o%2B%2F2yZmp&X-Amz-Signature=7ae9693b900a8baf59857e8648544f0a96ac98ab6d39de856a7be51f1fc45a43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622J4GJXK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCIUfyZ19HvpRU9YqgJ%2F6Gn3hhYGCb%2BaAHG6GRctvC6WQIhAKwnCQJ62BdNq0WaxcX0K1DFbbZQC1OC6e5rQonEMC4DKv8DCDoQABoMNjM3NDIzMTgzODA1IgyWm45HG2kpQmSHgv0q3APhnm2ZcOu978YtIy4Pj6pwRld%2Fcdn69h3kHDhSyHx7WseH3bSehVmlsA5QZ%2BGDJH%2BQp905zKCVYm%2BjKsqp6Z7PKJIuIe1LZtVhkVD8xnraR0B3uf6plNLqvbviuGVTEhNwb17TJ3BUWAY%2F%2FFLuJyQLnSoBdHkF7D907A5PdfyKS1aX3d%2B5vXllXTx8r0gy3QS7lx4T2iY8Ins6VA7CQRXG%2BUM8QRssfwf%2BN4pII3Fy1rd13t46avE2giru0L8VJ5ATHZogwkxi7IalR3xhwqoe9WRqp5w1IKOpxLlonktu9E52XxxrkNdc9g3ZkmBtYGfDr95wfbDvpv46XOEcck28Sj0Fhzvp80l6x5DbQwvct2i9UrDvJHokL7axrI1IL6BmjkWo95DkmauHSEu9fgfSfxH1MCPTwgfI%2B3b7VufEH8%2FObgM0iG9n1je%2FXxtXfilQtk%2BUCCistoDDDNkgTw2t8cptY17%2FrT8LQjM%2BOEpyYtD%2BySRA%2Fm6beCznamXXuwarJ01IAzY7QNk%2BMSqfN%2FtOtJMwGeFxkWomgDnc%2Fok9YpOEzLozHFtgyCLAK2bZYGkqKvlu0PO%2Bzild45GwHn95xiCAbEBasloCocgjlwZDnwLUuGrrbMhm2U2KZjDc%2F7%2FEBjqkAeRyKQm31cfq0o3tfCnLClcGjWM7xtMZXT5QklrjKe09Cv31yfwxgos%2BIwN98UpD%2Bprm8MyXXCxoXfbmYD%2BgMFB75lCRj4FJNgAD6Ud6GJ6IGnhmLOS3TRADr8AdcYgLFd4kwRO1aWPuMEVlzFaXe62me2PEG4fSgDxflWkAH55hA7%2BtnzurOBeHOBRopjCDqqWcZAlnunxf1Ujjied6o%2B%2F2yZmp&X-Amz-Signature=e7e17219b352201d23404136c7c69fde669ae3328c43eb559e3a7eef8d0b4dd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622J4GJXK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCIUfyZ19HvpRU9YqgJ%2F6Gn3hhYGCb%2BaAHG6GRctvC6WQIhAKwnCQJ62BdNq0WaxcX0K1DFbbZQC1OC6e5rQonEMC4DKv8DCDoQABoMNjM3NDIzMTgzODA1IgyWm45HG2kpQmSHgv0q3APhnm2ZcOu978YtIy4Pj6pwRld%2Fcdn69h3kHDhSyHx7WseH3bSehVmlsA5QZ%2BGDJH%2BQp905zKCVYm%2BjKsqp6Z7PKJIuIe1LZtVhkVD8xnraR0B3uf6plNLqvbviuGVTEhNwb17TJ3BUWAY%2F%2FFLuJyQLnSoBdHkF7D907A5PdfyKS1aX3d%2B5vXllXTx8r0gy3QS7lx4T2iY8Ins6VA7CQRXG%2BUM8QRssfwf%2BN4pII3Fy1rd13t46avE2giru0L8VJ5ATHZogwkxi7IalR3xhwqoe9WRqp5w1IKOpxLlonktu9E52XxxrkNdc9g3ZkmBtYGfDr95wfbDvpv46XOEcck28Sj0Fhzvp80l6x5DbQwvct2i9UrDvJHokL7axrI1IL6BmjkWo95DkmauHSEu9fgfSfxH1MCPTwgfI%2B3b7VufEH8%2FObgM0iG9n1je%2FXxtXfilQtk%2BUCCistoDDDNkgTw2t8cptY17%2FrT8LQjM%2BOEpyYtD%2BySRA%2Fm6beCznamXXuwarJ01IAzY7QNk%2BMSqfN%2FtOtJMwGeFxkWomgDnc%2Fok9YpOEzLozHFtgyCLAK2bZYGkqKvlu0PO%2Bzild45GwHn95xiCAbEBasloCocgjlwZDnwLUuGrrbMhm2U2KZjDc%2F7%2FEBjqkAeRyKQm31cfq0o3tfCnLClcGjWM7xtMZXT5QklrjKe09Cv31yfwxgos%2BIwN98UpD%2Bprm8MyXXCxoXfbmYD%2BgMFB75lCRj4FJNgAD6Ud6GJ6IGnhmLOS3TRADr8AdcYgLFd4kwRO1aWPuMEVlzFaXe62me2PEG4fSgDxflWkAH55hA7%2BtnzurOBeHOBRopjCDqqWcZAlnunxf1Ujjied6o%2B%2F2yZmp&X-Amz-Signature=592ed004d42f0918bd1ad2c467e46da20a001498ff8dfa5950637e16d2afdefa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622J4GJXK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCIUfyZ19HvpRU9YqgJ%2F6Gn3hhYGCb%2BaAHG6GRctvC6WQIhAKwnCQJ62BdNq0WaxcX0K1DFbbZQC1OC6e5rQonEMC4DKv8DCDoQABoMNjM3NDIzMTgzODA1IgyWm45HG2kpQmSHgv0q3APhnm2ZcOu978YtIy4Pj6pwRld%2Fcdn69h3kHDhSyHx7WseH3bSehVmlsA5QZ%2BGDJH%2BQp905zKCVYm%2BjKsqp6Z7PKJIuIe1LZtVhkVD8xnraR0B3uf6plNLqvbviuGVTEhNwb17TJ3BUWAY%2F%2FFLuJyQLnSoBdHkF7D907A5PdfyKS1aX3d%2B5vXllXTx8r0gy3QS7lx4T2iY8Ins6VA7CQRXG%2BUM8QRssfwf%2BN4pII3Fy1rd13t46avE2giru0L8VJ5ATHZogwkxi7IalR3xhwqoe9WRqp5w1IKOpxLlonktu9E52XxxrkNdc9g3ZkmBtYGfDr95wfbDvpv46XOEcck28Sj0Fhzvp80l6x5DbQwvct2i9UrDvJHokL7axrI1IL6BmjkWo95DkmauHSEu9fgfSfxH1MCPTwgfI%2B3b7VufEH8%2FObgM0iG9n1je%2FXxtXfilQtk%2BUCCistoDDDNkgTw2t8cptY17%2FrT8LQjM%2BOEpyYtD%2BySRA%2Fm6beCznamXXuwarJ01IAzY7QNk%2BMSqfN%2FtOtJMwGeFxkWomgDnc%2Fok9YpOEzLozHFtgyCLAK2bZYGkqKvlu0PO%2Bzild45GwHn95xiCAbEBasloCocgjlwZDnwLUuGrrbMhm2U2KZjDc%2F7%2FEBjqkAeRyKQm31cfq0o3tfCnLClcGjWM7xtMZXT5QklrjKe09Cv31yfwxgos%2BIwN98UpD%2Bprm8MyXXCxoXfbmYD%2BgMFB75lCRj4FJNgAD6Ud6GJ6IGnhmLOS3TRADr8AdcYgLFd4kwRO1aWPuMEVlzFaXe62me2PEG4fSgDxflWkAH55hA7%2BtnzurOBeHOBRopjCDqqWcZAlnunxf1Ujjied6o%2B%2F2yZmp&X-Amz-Signature=2d4a1f1c99278ccdc4ab088603614ef88dfb74d2d2afe419bac5c0d2e280570e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622J4GJXK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCIUfyZ19HvpRU9YqgJ%2F6Gn3hhYGCb%2BaAHG6GRctvC6WQIhAKwnCQJ62BdNq0WaxcX0K1DFbbZQC1OC6e5rQonEMC4DKv8DCDoQABoMNjM3NDIzMTgzODA1IgyWm45HG2kpQmSHgv0q3APhnm2ZcOu978YtIy4Pj6pwRld%2Fcdn69h3kHDhSyHx7WseH3bSehVmlsA5QZ%2BGDJH%2BQp905zKCVYm%2BjKsqp6Z7PKJIuIe1LZtVhkVD8xnraR0B3uf6plNLqvbviuGVTEhNwb17TJ3BUWAY%2F%2FFLuJyQLnSoBdHkF7D907A5PdfyKS1aX3d%2B5vXllXTx8r0gy3QS7lx4T2iY8Ins6VA7CQRXG%2BUM8QRssfwf%2BN4pII3Fy1rd13t46avE2giru0L8VJ5ATHZogwkxi7IalR3xhwqoe9WRqp5w1IKOpxLlonktu9E52XxxrkNdc9g3ZkmBtYGfDr95wfbDvpv46XOEcck28Sj0Fhzvp80l6x5DbQwvct2i9UrDvJHokL7axrI1IL6BmjkWo95DkmauHSEu9fgfSfxH1MCPTwgfI%2B3b7VufEH8%2FObgM0iG9n1je%2FXxtXfilQtk%2BUCCistoDDDNkgTw2t8cptY17%2FrT8LQjM%2BOEpyYtD%2BySRA%2Fm6beCznamXXuwarJ01IAzY7QNk%2BMSqfN%2FtOtJMwGeFxkWomgDnc%2Fok9YpOEzLozHFtgyCLAK2bZYGkqKvlu0PO%2Bzild45GwHn95xiCAbEBasloCocgjlwZDnwLUuGrrbMhm2U2KZjDc%2F7%2FEBjqkAeRyKQm31cfq0o3tfCnLClcGjWM7xtMZXT5QklrjKe09Cv31yfwxgos%2BIwN98UpD%2Bprm8MyXXCxoXfbmYD%2BgMFB75lCRj4FJNgAD6Ud6GJ6IGnhmLOS3TRADr8AdcYgLFd4kwRO1aWPuMEVlzFaXe62me2PEG4fSgDxflWkAH55hA7%2BtnzurOBeHOBRopjCDqqWcZAlnunxf1Ujjied6o%2B%2F2yZmp&X-Amz-Signature=8e251522dc32a0398f179b4731ba7834d70b45e306c8b9f845a689006c95d4ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622J4GJXK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCIUfyZ19HvpRU9YqgJ%2F6Gn3hhYGCb%2BaAHG6GRctvC6WQIhAKwnCQJ62BdNq0WaxcX0K1DFbbZQC1OC6e5rQonEMC4DKv8DCDoQABoMNjM3NDIzMTgzODA1IgyWm45HG2kpQmSHgv0q3APhnm2ZcOu978YtIy4Pj6pwRld%2Fcdn69h3kHDhSyHx7WseH3bSehVmlsA5QZ%2BGDJH%2BQp905zKCVYm%2BjKsqp6Z7PKJIuIe1LZtVhkVD8xnraR0B3uf6plNLqvbviuGVTEhNwb17TJ3BUWAY%2F%2FFLuJyQLnSoBdHkF7D907A5PdfyKS1aX3d%2B5vXllXTx8r0gy3QS7lx4T2iY8Ins6VA7CQRXG%2BUM8QRssfwf%2BN4pII3Fy1rd13t46avE2giru0L8VJ5ATHZogwkxi7IalR3xhwqoe9WRqp5w1IKOpxLlonktu9E52XxxrkNdc9g3ZkmBtYGfDr95wfbDvpv46XOEcck28Sj0Fhzvp80l6x5DbQwvct2i9UrDvJHokL7axrI1IL6BmjkWo95DkmauHSEu9fgfSfxH1MCPTwgfI%2B3b7VufEH8%2FObgM0iG9n1je%2FXxtXfilQtk%2BUCCistoDDDNkgTw2t8cptY17%2FrT8LQjM%2BOEpyYtD%2BySRA%2Fm6beCznamXXuwarJ01IAzY7QNk%2BMSqfN%2FtOtJMwGeFxkWomgDnc%2Fok9YpOEzLozHFtgyCLAK2bZYGkqKvlu0PO%2Bzild45GwHn95xiCAbEBasloCocgjlwZDnwLUuGrrbMhm2U2KZjDc%2F7%2FEBjqkAeRyKQm31cfq0o3tfCnLClcGjWM7xtMZXT5QklrjKe09Cv31yfwxgos%2BIwN98UpD%2Bprm8MyXXCxoXfbmYD%2BgMFB75lCRj4FJNgAD6Ud6GJ6IGnhmLOS3TRADr8AdcYgLFd4kwRO1aWPuMEVlzFaXe62me2PEG4fSgDxflWkAH55hA7%2BtnzurOBeHOBRopjCDqqWcZAlnunxf1Ujjied6o%2B%2F2yZmp&X-Amz-Signature=9fa19de9070e074285d13fc990cb11ba5f7edfe4d76b4368fa283d6f98d1416e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622J4GJXK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCIUfyZ19HvpRU9YqgJ%2F6Gn3hhYGCb%2BaAHG6GRctvC6WQIhAKwnCQJ62BdNq0WaxcX0K1DFbbZQC1OC6e5rQonEMC4DKv8DCDoQABoMNjM3NDIzMTgzODA1IgyWm45HG2kpQmSHgv0q3APhnm2ZcOu978YtIy4Pj6pwRld%2Fcdn69h3kHDhSyHx7WseH3bSehVmlsA5QZ%2BGDJH%2BQp905zKCVYm%2BjKsqp6Z7PKJIuIe1LZtVhkVD8xnraR0B3uf6plNLqvbviuGVTEhNwb17TJ3BUWAY%2F%2FFLuJyQLnSoBdHkF7D907A5PdfyKS1aX3d%2B5vXllXTx8r0gy3QS7lx4T2iY8Ins6VA7CQRXG%2BUM8QRssfwf%2BN4pII3Fy1rd13t46avE2giru0L8VJ5ATHZogwkxi7IalR3xhwqoe9WRqp5w1IKOpxLlonktu9E52XxxrkNdc9g3ZkmBtYGfDr95wfbDvpv46XOEcck28Sj0Fhzvp80l6x5DbQwvct2i9UrDvJHokL7axrI1IL6BmjkWo95DkmauHSEu9fgfSfxH1MCPTwgfI%2B3b7VufEH8%2FObgM0iG9n1je%2FXxtXfilQtk%2BUCCistoDDDNkgTw2t8cptY17%2FrT8LQjM%2BOEpyYtD%2BySRA%2Fm6beCznamXXuwarJ01IAzY7QNk%2BMSqfN%2FtOtJMwGeFxkWomgDnc%2Fok9YpOEzLozHFtgyCLAK2bZYGkqKvlu0PO%2Bzild45GwHn95xiCAbEBasloCocgjlwZDnwLUuGrrbMhm2U2KZjDc%2F7%2FEBjqkAeRyKQm31cfq0o3tfCnLClcGjWM7xtMZXT5QklrjKe09Cv31yfwxgos%2BIwN98UpD%2Bprm8MyXXCxoXfbmYD%2BgMFB75lCRj4FJNgAD6Ud6GJ6IGnhmLOS3TRADr8AdcYgLFd4kwRO1aWPuMEVlzFaXe62me2PEG4fSgDxflWkAH55hA7%2BtnzurOBeHOBRopjCDqqWcZAlnunxf1Ujjied6o%2B%2F2yZmp&X-Amz-Signature=e7413e2365a03ca5550e8f11992b21d9cba1b9797eb1fbc90bddf4f864926f61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622J4GJXK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCIUfyZ19HvpRU9YqgJ%2F6Gn3hhYGCb%2BaAHG6GRctvC6WQIhAKwnCQJ62BdNq0WaxcX0K1DFbbZQC1OC6e5rQonEMC4DKv8DCDoQABoMNjM3NDIzMTgzODA1IgyWm45HG2kpQmSHgv0q3APhnm2ZcOu978YtIy4Pj6pwRld%2Fcdn69h3kHDhSyHx7WseH3bSehVmlsA5QZ%2BGDJH%2BQp905zKCVYm%2BjKsqp6Z7PKJIuIe1LZtVhkVD8xnraR0B3uf6plNLqvbviuGVTEhNwb17TJ3BUWAY%2F%2FFLuJyQLnSoBdHkF7D907A5PdfyKS1aX3d%2B5vXllXTx8r0gy3QS7lx4T2iY8Ins6VA7CQRXG%2BUM8QRssfwf%2BN4pII3Fy1rd13t46avE2giru0L8VJ5ATHZogwkxi7IalR3xhwqoe9WRqp5w1IKOpxLlonktu9E52XxxrkNdc9g3ZkmBtYGfDr95wfbDvpv46XOEcck28Sj0Fhzvp80l6x5DbQwvct2i9UrDvJHokL7axrI1IL6BmjkWo95DkmauHSEu9fgfSfxH1MCPTwgfI%2B3b7VufEH8%2FObgM0iG9n1je%2FXxtXfilQtk%2BUCCistoDDDNkgTw2t8cptY17%2FrT8LQjM%2BOEpyYtD%2BySRA%2Fm6beCznamXXuwarJ01IAzY7QNk%2BMSqfN%2FtOtJMwGeFxkWomgDnc%2Fok9YpOEzLozHFtgyCLAK2bZYGkqKvlu0PO%2Bzild45GwHn95xiCAbEBasloCocgjlwZDnwLUuGrrbMhm2U2KZjDc%2F7%2FEBjqkAeRyKQm31cfq0o3tfCnLClcGjWM7xtMZXT5QklrjKe09Cv31yfwxgos%2BIwN98UpD%2Bprm8MyXXCxoXfbmYD%2BgMFB75lCRj4FJNgAD6Ud6GJ6IGnhmLOS3TRADr8AdcYgLFd4kwRO1aWPuMEVlzFaXe62me2PEG4fSgDxflWkAH55hA7%2BtnzurOBeHOBRopjCDqqWcZAlnunxf1Ujjied6o%2B%2F2yZmp&X-Amz-Signature=c03b4904306c9a74d999ca221ebcda738b9ef57bb5280f4e5d41efa157d1c8cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622J4GJXK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCIUfyZ19HvpRU9YqgJ%2F6Gn3hhYGCb%2BaAHG6GRctvC6WQIhAKwnCQJ62BdNq0WaxcX0K1DFbbZQC1OC6e5rQonEMC4DKv8DCDoQABoMNjM3NDIzMTgzODA1IgyWm45HG2kpQmSHgv0q3APhnm2ZcOu978YtIy4Pj6pwRld%2Fcdn69h3kHDhSyHx7WseH3bSehVmlsA5QZ%2BGDJH%2BQp905zKCVYm%2BjKsqp6Z7PKJIuIe1LZtVhkVD8xnraR0B3uf6plNLqvbviuGVTEhNwb17TJ3BUWAY%2F%2FFLuJyQLnSoBdHkF7D907A5PdfyKS1aX3d%2B5vXllXTx8r0gy3QS7lx4T2iY8Ins6VA7CQRXG%2BUM8QRssfwf%2BN4pII3Fy1rd13t46avE2giru0L8VJ5ATHZogwkxi7IalR3xhwqoe9WRqp5w1IKOpxLlonktu9E52XxxrkNdc9g3ZkmBtYGfDr95wfbDvpv46XOEcck28Sj0Fhzvp80l6x5DbQwvct2i9UrDvJHokL7axrI1IL6BmjkWo95DkmauHSEu9fgfSfxH1MCPTwgfI%2B3b7VufEH8%2FObgM0iG9n1je%2FXxtXfilQtk%2BUCCistoDDDNkgTw2t8cptY17%2FrT8LQjM%2BOEpyYtD%2BySRA%2Fm6beCznamXXuwarJ01IAzY7QNk%2BMSqfN%2FtOtJMwGeFxkWomgDnc%2Fok9YpOEzLozHFtgyCLAK2bZYGkqKvlu0PO%2Bzild45GwHn95xiCAbEBasloCocgjlwZDnwLUuGrrbMhm2U2KZjDc%2F7%2FEBjqkAeRyKQm31cfq0o3tfCnLClcGjWM7xtMZXT5QklrjKe09Cv31yfwxgos%2BIwN98UpD%2Bprm8MyXXCxoXfbmYD%2BgMFB75lCRj4FJNgAD6Ud6GJ6IGnhmLOS3TRADr8AdcYgLFd4kwRO1aWPuMEVlzFaXe62me2PEG4fSgDxflWkAH55hA7%2BtnzurOBeHOBRopjCDqqWcZAlnunxf1Ujjied6o%2B%2F2yZmp&X-Amz-Signature=663dcd8c7d7f5fcb89578a95b2a071c7f2d60e7de37c393a6dd70d4c15b4a311&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622J4GJXK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T030623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCIUfyZ19HvpRU9YqgJ%2F6Gn3hhYGCb%2BaAHG6GRctvC6WQIhAKwnCQJ62BdNq0WaxcX0K1DFbbZQC1OC6e5rQonEMC4DKv8DCDoQABoMNjM3NDIzMTgzODA1IgyWm45HG2kpQmSHgv0q3APhnm2ZcOu978YtIy4Pj6pwRld%2Fcdn69h3kHDhSyHx7WseH3bSehVmlsA5QZ%2BGDJH%2BQp905zKCVYm%2BjKsqp6Z7PKJIuIe1LZtVhkVD8xnraR0B3uf6plNLqvbviuGVTEhNwb17TJ3BUWAY%2F%2FFLuJyQLnSoBdHkF7D907A5PdfyKS1aX3d%2B5vXllXTx8r0gy3QS7lx4T2iY8Ins6VA7CQRXG%2BUM8QRssfwf%2BN4pII3Fy1rd13t46avE2giru0L8VJ5ATHZogwkxi7IalR3xhwqoe9WRqp5w1IKOpxLlonktu9E52XxxrkNdc9g3ZkmBtYGfDr95wfbDvpv46XOEcck28Sj0Fhzvp80l6x5DbQwvct2i9UrDvJHokL7axrI1IL6BmjkWo95DkmauHSEu9fgfSfxH1MCPTwgfI%2B3b7VufEH8%2FObgM0iG9n1je%2FXxtXfilQtk%2BUCCistoDDDNkgTw2t8cptY17%2FrT8LQjM%2BOEpyYtD%2BySRA%2Fm6beCznamXXuwarJ01IAzY7QNk%2BMSqfN%2FtOtJMwGeFxkWomgDnc%2Fok9YpOEzLozHFtgyCLAK2bZYGkqKvlu0PO%2Bzild45GwHn95xiCAbEBasloCocgjlwZDnwLUuGrrbMhm2U2KZjDc%2F7%2FEBjqkAeRyKQm31cfq0o3tfCnLClcGjWM7xtMZXT5QklrjKe09Cv31yfwxgos%2BIwN98UpD%2Bprm8MyXXCxoXfbmYD%2BgMFB75lCRj4FJNgAD6Ud6GJ6IGnhmLOS3TRADr8AdcYgLFd4kwRO1aWPuMEVlzFaXe62me2PEG4fSgDxflWkAH55hA7%2BtnzurOBeHOBRopjCDqqWcZAlnunxf1Ujjied6o%2B%2F2yZmp&X-Amz-Signature=53dd9b92e230a33a57ccea017e5e52dfd8b1156ccb0289a3eb78ce91a2a5c494&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
