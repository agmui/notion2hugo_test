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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGHVMV2B%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj63k2%2Bq1NDg58Xo%2BvIYPwdRzHurCGOERxceLvnMBdLgIgDi9ZnAhAuBuENZtKmM3KBWGSkoof0TqenG8qA417Oy4q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDJr0BCEADIjmU58JbCrcA9J0Fm%2BOraINvLKV38nrgEzmsOsJ9rSc0c%2FesFUCUk%2FBK192uaz%2FwfTtbbNCqlHyhddELnXmlF8jYtIGUUMdSxGLj%2F8dKZWp0Bn0N0P458le1gzP1x3Peo5MdSvyQ8%2Fj%2FFLEB7KCHbu7O0GX4ureLwYVWMzv95S5%2FUiUdtTdNGDy5jZP3DxNCukHfNQK%2FLOREiaFti4yKpxYO%2FAjvIUU0NzJXbUF%2Ftg5BQLhKaaOqS5EScGRWyaXVdoOr6sfvmYLWLnp3TYTG%2Fp8AF7MjC5zl%2BOW%2Fmb9CRIPpohou998XwsRptiG1i32GAIfQgrpUvCR93WbYZ879g6RXPWxmpgBaC%2B0ghNHYy9xRo8RmkVbatGMKGkHOhKRcJE4FNa4XjXq1A4D64JCw4Yc2JUyXde%2FxBVJUAIJc2%2FLlsv59YS%2BdrVET2CqWYl%2FDM8ir6COHP6wUsLgOC5ttvrpWvwlhSlTX2bnBXOpbvELbiu2deFaWscTHi3Oy1HeJTbVeqX8PJk2oC%2B0ggfGM78%2FQjpSuaV%2B81l3dA9kgFcyKid4qpBrCtdwElWYoDzOQL4LziPgppL8h602x4LwU1W6iuL66JJbdRhxdRnwB%2BFo4hVR4QMqE1X%2FYVHHil%2FOy3cqA5I%2FMPfJgsoGOqUBSmQHucexO0labjM%2FHq5kcIJ1hAP68vEDyIwg5asPjzN95eHO1r4jULKsOV8uc8hx7MAhY2iMu9qPi27KUqIULCYfYL5IEe8XcU56BZXSResqr4MloFpOXLwQ3AY%2BANkUNhB38Ez3a9s8jUTIHf%2Bdv%2BGtAMx5zSUVWE1VWgtWzDLpctXFRi%2FwDMVAieuuxuNchPKP8kabI0oGV5MXXURDSGMzT9Hk&X-Amz-Signature=843aa8746062bcb0680d5b925d5189dca6d71161948c3bc84dfa7f63b65afb98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGHVMV2B%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj63k2%2Bq1NDg58Xo%2BvIYPwdRzHurCGOERxceLvnMBdLgIgDi9ZnAhAuBuENZtKmM3KBWGSkoof0TqenG8qA417Oy4q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDJr0BCEADIjmU58JbCrcA9J0Fm%2BOraINvLKV38nrgEzmsOsJ9rSc0c%2FesFUCUk%2FBK192uaz%2FwfTtbbNCqlHyhddELnXmlF8jYtIGUUMdSxGLj%2F8dKZWp0Bn0N0P458le1gzP1x3Peo5MdSvyQ8%2Fj%2FFLEB7KCHbu7O0GX4ureLwYVWMzv95S5%2FUiUdtTdNGDy5jZP3DxNCukHfNQK%2FLOREiaFti4yKpxYO%2FAjvIUU0NzJXbUF%2Ftg5BQLhKaaOqS5EScGRWyaXVdoOr6sfvmYLWLnp3TYTG%2Fp8AF7MjC5zl%2BOW%2Fmb9CRIPpohou998XwsRptiG1i32GAIfQgrpUvCR93WbYZ879g6RXPWxmpgBaC%2B0ghNHYy9xRo8RmkVbatGMKGkHOhKRcJE4FNa4XjXq1A4D64JCw4Yc2JUyXde%2FxBVJUAIJc2%2FLlsv59YS%2BdrVET2CqWYl%2FDM8ir6COHP6wUsLgOC5ttvrpWvwlhSlTX2bnBXOpbvELbiu2deFaWscTHi3Oy1HeJTbVeqX8PJk2oC%2B0ggfGM78%2FQjpSuaV%2B81l3dA9kgFcyKid4qpBrCtdwElWYoDzOQL4LziPgppL8h602x4LwU1W6iuL66JJbdRhxdRnwB%2BFo4hVR4QMqE1X%2FYVHHil%2FOy3cqA5I%2FMPfJgsoGOqUBSmQHucexO0labjM%2FHq5kcIJ1hAP68vEDyIwg5asPjzN95eHO1r4jULKsOV8uc8hx7MAhY2iMu9qPi27KUqIULCYfYL5IEe8XcU56BZXSResqr4MloFpOXLwQ3AY%2BANkUNhB38Ez3a9s8jUTIHf%2Bdv%2BGtAMx5zSUVWE1VWgtWzDLpctXFRi%2FwDMVAieuuxuNchPKP8kabI0oGV5MXXURDSGMzT9Hk&X-Amz-Signature=7bba58ae0b71725fa882416c6b6f55697eafa48d1cf36b8ee2c4c8da65163a63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGHVMV2B%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj63k2%2Bq1NDg58Xo%2BvIYPwdRzHurCGOERxceLvnMBdLgIgDi9ZnAhAuBuENZtKmM3KBWGSkoof0TqenG8qA417Oy4q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDJr0BCEADIjmU58JbCrcA9J0Fm%2BOraINvLKV38nrgEzmsOsJ9rSc0c%2FesFUCUk%2FBK192uaz%2FwfTtbbNCqlHyhddELnXmlF8jYtIGUUMdSxGLj%2F8dKZWp0Bn0N0P458le1gzP1x3Peo5MdSvyQ8%2Fj%2FFLEB7KCHbu7O0GX4ureLwYVWMzv95S5%2FUiUdtTdNGDy5jZP3DxNCukHfNQK%2FLOREiaFti4yKpxYO%2FAjvIUU0NzJXbUF%2Ftg5BQLhKaaOqS5EScGRWyaXVdoOr6sfvmYLWLnp3TYTG%2Fp8AF7MjC5zl%2BOW%2Fmb9CRIPpohou998XwsRptiG1i32GAIfQgrpUvCR93WbYZ879g6RXPWxmpgBaC%2B0ghNHYy9xRo8RmkVbatGMKGkHOhKRcJE4FNa4XjXq1A4D64JCw4Yc2JUyXde%2FxBVJUAIJc2%2FLlsv59YS%2BdrVET2CqWYl%2FDM8ir6COHP6wUsLgOC5ttvrpWvwlhSlTX2bnBXOpbvELbiu2deFaWscTHi3Oy1HeJTbVeqX8PJk2oC%2B0ggfGM78%2FQjpSuaV%2B81l3dA9kgFcyKid4qpBrCtdwElWYoDzOQL4LziPgppL8h602x4LwU1W6iuL66JJbdRhxdRnwB%2BFo4hVR4QMqE1X%2FYVHHil%2FOy3cqA5I%2FMPfJgsoGOqUBSmQHucexO0labjM%2FHq5kcIJ1hAP68vEDyIwg5asPjzN95eHO1r4jULKsOV8uc8hx7MAhY2iMu9qPi27KUqIULCYfYL5IEe8XcU56BZXSResqr4MloFpOXLwQ3AY%2BANkUNhB38Ez3a9s8jUTIHf%2Bdv%2BGtAMx5zSUVWE1VWgtWzDLpctXFRi%2FwDMVAieuuxuNchPKP8kabI0oGV5MXXURDSGMzT9Hk&X-Amz-Signature=80b8cb7e0f3c29d517a46de7837f37cee588e7f0a2cf8e35ddeebe704ae01c9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGHVMV2B%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj63k2%2Bq1NDg58Xo%2BvIYPwdRzHurCGOERxceLvnMBdLgIgDi9ZnAhAuBuENZtKmM3KBWGSkoof0TqenG8qA417Oy4q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDJr0BCEADIjmU58JbCrcA9J0Fm%2BOraINvLKV38nrgEzmsOsJ9rSc0c%2FesFUCUk%2FBK192uaz%2FwfTtbbNCqlHyhddELnXmlF8jYtIGUUMdSxGLj%2F8dKZWp0Bn0N0P458le1gzP1x3Peo5MdSvyQ8%2Fj%2FFLEB7KCHbu7O0GX4ureLwYVWMzv95S5%2FUiUdtTdNGDy5jZP3DxNCukHfNQK%2FLOREiaFti4yKpxYO%2FAjvIUU0NzJXbUF%2Ftg5BQLhKaaOqS5EScGRWyaXVdoOr6sfvmYLWLnp3TYTG%2Fp8AF7MjC5zl%2BOW%2Fmb9CRIPpohou998XwsRptiG1i32GAIfQgrpUvCR93WbYZ879g6RXPWxmpgBaC%2B0ghNHYy9xRo8RmkVbatGMKGkHOhKRcJE4FNa4XjXq1A4D64JCw4Yc2JUyXde%2FxBVJUAIJc2%2FLlsv59YS%2BdrVET2CqWYl%2FDM8ir6COHP6wUsLgOC5ttvrpWvwlhSlTX2bnBXOpbvELbiu2deFaWscTHi3Oy1HeJTbVeqX8PJk2oC%2B0ggfGM78%2FQjpSuaV%2B81l3dA9kgFcyKid4qpBrCtdwElWYoDzOQL4LziPgppL8h602x4LwU1W6iuL66JJbdRhxdRnwB%2BFo4hVR4QMqE1X%2FYVHHil%2FOy3cqA5I%2FMPfJgsoGOqUBSmQHucexO0labjM%2FHq5kcIJ1hAP68vEDyIwg5asPjzN95eHO1r4jULKsOV8uc8hx7MAhY2iMu9qPi27KUqIULCYfYL5IEe8XcU56BZXSResqr4MloFpOXLwQ3AY%2BANkUNhB38Ez3a9s8jUTIHf%2Bdv%2BGtAMx5zSUVWE1VWgtWzDLpctXFRi%2FwDMVAieuuxuNchPKP8kabI0oGV5MXXURDSGMzT9Hk&X-Amz-Signature=8d01e3dee77794ab5371b01055841679fe44795cfd18123f514817f9f50e52c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGHVMV2B%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj63k2%2Bq1NDg58Xo%2BvIYPwdRzHurCGOERxceLvnMBdLgIgDi9ZnAhAuBuENZtKmM3KBWGSkoof0TqenG8qA417Oy4q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDJr0BCEADIjmU58JbCrcA9J0Fm%2BOraINvLKV38nrgEzmsOsJ9rSc0c%2FesFUCUk%2FBK192uaz%2FwfTtbbNCqlHyhddELnXmlF8jYtIGUUMdSxGLj%2F8dKZWp0Bn0N0P458le1gzP1x3Peo5MdSvyQ8%2Fj%2FFLEB7KCHbu7O0GX4ureLwYVWMzv95S5%2FUiUdtTdNGDy5jZP3DxNCukHfNQK%2FLOREiaFti4yKpxYO%2FAjvIUU0NzJXbUF%2Ftg5BQLhKaaOqS5EScGRWyaXVdoOr6sfvmYLWLnp3TYTG%2Fp8AF7MjC5zl%2BOW%2Fmb9CRIPpohou998XwsRptiG1i32GAIfQgrpUvCR93WbYZ879g6RXPWxmpgBaC%2B0ghNHYy9xRo8RmkVbatGMKGkHOhKRcJE4FNa4XjXq1A4D64JCw4Yc2JUyXde%2FxBVJUAIJc2%2FLlsv59YS%2BdrVET2CqWYl%2FDM8ir6COHP6wUsLgOC5ttvrpWvwlhSlTX2bnBXOpbvELbiu2deFaWscTHi3Oy1HeJTbVeqX8PJk2oC%2B0ggfGM78%2FQjpSuaV%2B81l3dA9kgFcyKid4qpBrCtdwElWYoDzOQL4LziPgppL8h602x4LwU1W6iuL66JJbdRhxdRnwB%2BFo4hVR4QMqE1X%2FYVHHil%2FOy3cqA5I%2FMPfJgsoGOqUBSmQHucexO0labjM%2FHq5kcIJ1hAP68vEDyIwg5asPjzN95eHO1r4jULKsOV8uc8hx7MAhY2iMu9qPi27KUqIULCYfYL5IEe8XcU56BZXSResqr4MloFpOXLwQ3AY%2BANkUNhB38Ez3a9s8jUTIHf%2Bdv%2BGtAMx5zSUVWE1VWgtWzDLpctXFRi%2FwDMVAieuuxuNchPKP8kabI0oGV5MXXURDSGMzT9Hk&X-Amz-Signature=7ad8e6aa9173121c7ee3cfc3caa9a8860504413fbd93084fd32a2ced7c06ddfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGHVMV2B%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj63k2%2Bq1NDg58Xo%2BvIYPwdRzHurCGOERxceLvnMBdLgIgDi9ZnAhAuBuENZtKmM3KBWGSkoof0TqenG8qA417Oy4q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDJr0BCEADIjmU58JbCrcA9J0Fm%2BOraINvLKV38nrgEzmsOsJ9rSc0c%2FesFUCUk%2FBK192uaz%2FwfTtbbNCqlHyhddELnXmlF8jYtIGUUMdSxGLj%2F8dKZWp0Bn0N0P458le1gzP1x3Peo5MdSvyQ8%2Fj%2FFLEB7KCHbu7O0GX4ureLwYVWMzv95S5%2FUiUdtTdNGDy5jZP3DxNCukHfNQK%2FLOREiaFti4yKpxYO%2FAjvIUU0NzJXbUF%2Ftg5BQLhKaaOqS5EScGRWyaXVdoOr6sfvmYLWLnp3TYTG%2Fp8AF7MjC5zl%2BOW%2Fmb9CRIPpohou998XwsRptiG1i32GAIfQgrpUvCR93WbYZ879g6RXPWxmpgBaC%2B0ghNHYy9xRo8RmkVbatGMKGkHOhKRcJE4FNa4XjXq1A4D64JCw4Yc2JUyXde%2FxBVJUAIJc2%2FLlsv59YS%2BdrVET2CqWYl%2FDM8ir6COHP6wUsLgOC5ttvrpWvwlhSlTX2bnBXOpbvELbiu2deFaWscTHi3Oy1HeJTbVeqX8PJk2oC%2B0ggfGM78%2FQjpSuaV%2B81l3dA9kgFcyKid4qpBrCtdwElWYoDzOQL4LziPgppL8h602x4LwU1W6iuL66JJbdRhxdRnwB%2BFo4hVR4QMqE1X%2FYVHHil%2FOy3cqA5I%2FMPfJgsoGOqUBSmQHucexO0labjM%2FHq5kcIJ1hAP68vEDyIwg5asPjzN95eHO1r4jULKsOV8uc8hx7MAhY2iMu9qPi27KUqIULCYfYL5IEe8XcU56BZXSResqr4MloFpOXLwQ3AY%2BANkUNhB38Ez3a9s8jUTIHf%2Bdv%2BGtAMx5zSUVWE1VWgtWzDLpctXFRi%2FwDMVAieuuxuNchPKP8kabI0oGV5MXXURDSGMzT9Hk&X-Amz-Signature=e6660d5bce31af73776d96bfe85125a973653d8d0ece295fb802979c3fde3cc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGHVMV2B%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj63k2%2Bq1NDg58Xo%2BvIYPwdRzHurCGOERxceLvnMBdLgIgDi9ZnAhAuBuENZtKmM3KBWGSkoof0TqenG8qA417Oy4q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDJr0BCEADIjmU58JbCrcA9J0Fm%2BOraINvLKV38nrgEzmsOsJ9rSc0c%2FesFUCUk%2FBK192uaz%2FwfTtbbNCqlHyhddELnXmlF8jYtIGUUMdSxGLj%2F8dKZWp0Bn0N0P458le1gzP1x3Peo5MdSvyQ8%2Fj%2FFLEB7KCHbu7O0GX4ureLwYVWMzv95S5%2FUiUdtTdNGDy5jZP3DxNCukHfNQK%2FLOREiaFti4yKpxYO%2FAjvIUU0NzJXbUF%2Ftg5BQLhKaaOqS5EScGRWyaXVdoOr6sfvmYLWLnp3TYTG%2Fp8AF7MjC5zl%2BOW%2Fmb9CRIPpohou998XwsRptiG1i32GAIfQgrpUvCR93WbYZ879g6RXPWxmpgBaC%2B0ghNHYy9xRo8RmkVbatGMKGkHOhKRcJE4FNa4XjXq1A4D64JCw4Yc2JUyXde%2FxBVJUAIJc2%2FLlsv59YS%2BdrVET2CqWYl%2FDM8ir6COHP6wUsLgOC5ttvrpWvwlhSlTX2bnBXOpbvELbiu2deFaWscTHi3Oy1HeJTbVeqX8PJk2oC%2B0ggfGM78%2FQjpSuaV%2B81l3dA9kgFcyKid4qpBrCtdwElWYoDzOQL4LziPgppL8h602x4LwU1W6iuL66JJbdRhxdRnwB%2BFo4hVR4QMqE1X%2FYVHHil%2FOy3cqA5I%2FMPfJgsoGOqUBSmQHucexO0labjM%2FHq5kcIJ1hAP68vEDyIwg5asPjzN95eHO1r4jULKsOV8uc8hx7MAhY2iMu9qPi27KUqIULCYfYL5IEe8XcU56BZXSResqr4MloFpOXLwQ3AY%2BANkUNhB38Ez3a9s8jUTIHf%2Bdv%2BGtAMx5zSUVWE1VWgtWzDLpctXFRi%2FwDMVAieuuxuNchPKP8kabI0oGV5MXXURDSGMzT9Hk&X-Amz-Signature=ad30cf8379c7ade2943a369e4e8d363c082406768fcb1617858fe5ec9a8d4598&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGHVMV2B%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj63k2%2Bq1NDg58Xo%2BvIYPwdRzHurCGOERxceLvnMBdLgIgDi9ZnAhAuBuENZtKmM3KBWGSkoof0TqenG8qA417Oy4q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDJr0BCEADIjmU58JbCrcA9J0Fm%2BOraINvLKV38nrgEzmsOsJ9rSc0c%2FesFUCUk%2FBK192uaz%2FwfTtbbNCqlHyhddELnXmlF8jYtIGUUMdSxGLj%2F8dKZWp0Bn0N0P458le1gzP1x3Peo5MdSvyQ8%2Fj%2FFLEB7KCHbu7O0GX4ureLwYVWMzv95S5%2FUiUdtTdNGDy5jZP3DxNCukHfNQK%2FLOREiaFti4yKpxYO%2FAjvIUU0NzJXbUF%2Ftg5BQLhKaaOqS5EScGRWyaXVdoOr6sfvmYLWLnp3TYTG%2Fp8AF7MjC5zl%2BOW%2Fmb9CRIPpohou998XwsRptiG1i32GAIfQgrpUvCR93WbYZ879g6RXPWxmpgBaC%2B0ghNHYy9xRo8RmkVbatGMKGkHOhKRcJE4FNa4XjXq1A4D64JCw4Yc2JUyXde%2FxBVJUAIJc2%2FLlsv59YS%2BdrVET2CqWYl%2FDM8ir6COHP6wUsLgOC5ttvrpWvwlhSlTX2bnBXOpbvELbiu2deFaWscTHi3Oy1HeJTbVeqX8PJk2oC%2B0ggfGM78%2FQjpSuaV%2B81l3dA9kgFcyKid4qpBrCtdwElWYoDzOQL4LziPgppL8h602x4LwU1W6iuL66JJbdRhxdRnwB%2BFo4hVR4QMqE1X%2FYVHHil%2FOy3cqA5I%2FMPfJgsoGOqUBSmQHucexO0labjM%2FHq5kcIJ1hAP68vEDyIwg5asPjzN95eHO1r4jULKsOV8uc8hx7MAhY2iMu9qPi27KUqIULCYfYL5IEe8XcU56BZXSResqr4MloFpOXLwQ3AY%2BANkUNhB38Ez3a9s8jUTIHf%2Bdv%2BGtAMx5zSUVWE1VWgtWzDLpctXFRi%2FwDMVAieuuxuNchPKP8kabI0oGV5MXXURDSGMzT9Hk&X-Amz-Signature=c9d197bfb41c0a4d8b80a4a7ed353fccef0089a692b91fc36965a35fe61b00fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGHVMV2B%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj63k2%2Bq1NDg58Xo%2BvIYPwdRzHurCGOERxceLvnMBdLgIgDi9ZnAhAuBuENZtKmM3KBWGSkoof0TqenG8qA417Oy4q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDJr0BCEADIjmU58JbCrcA9J0Fm%2BOraINvLKV38nrgEzmsOsJ9rSc0c%2FesFUCUk%2FBK192uaz%2FwfTtbbNCqlHyhddELnXmlF8jYtIGUUMdSxGLj%2F8dKZWp0Bn0N0P458le1gzP1x3Peo5MdSvyQ8%2Fj%2FFLEB7KCHbu7O0GX4ureLwYVWMzv95S5%2FUiUdtTdNGDy5jZP3DxNCukHfNQK%2FLOREiaFti4yKpxYO%2FAjvIUU0NzJXbUF%2Ftg5BQLhKaaOqS5EScGRWyaXVdoOr6sfvmYLWLnp3TYTG%2Fp8AF7MjC5zl%2BOW%2Fmb9CRIPpohou998XwsRptiG1i32GAIfQgrpUvCR93WbYZ879g6RXPWxmpgBaC%2B0ghNHYy9xRo8RmkVbatGMKGkHOhKRcJE4FNa4XjXq1A4D64JCw4Yc2JUyXde%2FxBVJUAIJc2%2FLlsv59YS%2BdrVET2CqWYl%2FDM8ir6COHP6wUsLgOC5ttvrpWvwlhSlTX2bnBXOpbvELbiu2deFaWscTHi3Oy1HeJTbVeqX8PJk2oC%2B0ggfGM78%2FQjpSuaV%2B81l3dA9kgFcyKid4qpBrCtdwElWYoDzOQL4LziPgppL8h602x4LwU1W6iuL66JJbdRhxdRnwB%2BFo4hVR4QMqE1X%2FYVHHil%2FOy3cqA5I%2FMPfJgsoGOqUBSmQHucexO0labjM%2FHq5kcIJ1hAP68vEDyIwg5asPjzN95eHO1r4jULKsOV8uc8hx7MAhY2iMu9qPi27KUqIULCYfYL5IEe8XcU56BZXSResqr4MloFpOXLwQ3AY%2BANkUNhB38Ez3a9s8jUTIHf%2Bdv%2BGtAMx5zSUVWE1VWgtWzDLpctXFRi%2FwDMVAieuuxuNchPKP8kabI0oGV5MXXURDSGMzT9Hk&X-Amz-Signature=d5eb7484e89409f2f293d6cb77f68b45147948e1f379c024d1043c3d9ebb72e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGHVMV2B%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj63k2%2Bq1NDg58Xo%2BvIYPwdRzHurCGOERxceLvnMBdLgIgDi9ZnAhAuBuENZtKmM3KBWGSkoof0TqenG8qA417Oy4q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDJr0BCEADIjmU58JbCrcA9J0Fm%2BOraINvLKV38nrgEzmsOsJ9rSc0c%2FesFUCUk%2FBK192uaz%2FwfTtbbNCqlHyhddELnXmlF8jYtIGUUMdSxGLj%2F8dKZWp0Bn0N0P458le1gzP1x3Peo5MdSvyQ8%2Fj%2FFLEB7KCHbu7O0GX4ureLwYVWMzv95S5%2FUiUdtTdNGDy5jZP3DxNCukHfNQK%2FLOREiaFti4yKpxYO%2FAjvIUU0NzJXbUF%2Ftg5BQLhKaaOqS5EScGRWyaXVdoOr6sfvmYLWLnp3TYTG%2Fp8AF7MjC5zl%2BOW%2Fmb9CRIPpohou998XwsRptiG1i32GAIfQgrpUvCR93WbYZ879g6RXPWxmpgBaC%2B0ghNHYy9xRo8RmkVbatGMKGkHOhKRcJE4FNa4XjXq1A4D64JCw4Yc2JUyXde%2FxBVJUAIJc2%2FLlsv59YS%2BdrVET2CqWYl%2FDM8ir6COHP6wUsLgOC5ttvrpWvwlhSlTX2bnBXOpbvELbiu2deFaWscTHi3Oy1HeJTbVeqX8PJk2oC%2B0ggfGM78%2FQjpSuaV%2B81l3dA9kgFcyKid4qpBrCtdwElWYoDzOQL4LziPgppL8h602x4LwU1W6iuL66JJbdRhxdRnwB%2BFo4hVR4QMqE1X%2FYVHHil%2FOy3cqA5I%2FMPfJgsoGOqUBSmQHucexO0labjM%2FHq5kcIJ1hAP68vEDyIwg5asPjzN95eHO1r4jULKsOV8uc8hx7MAhY2iMu9qPi27KUqIULCYfYL5IEe8XcU56BZXSResqr4MloFpOXLwQ3AY%2BANkUNhB38Ez3a9s8jUTIHf%2Bdv%2BGtAMx5zSUVWE1VWgtWzDLpctXFRi%2FwDMVAieuuxuNchPKP8kabI0oGV5MXXURDSGMzT9Hk&X-Amz-Signature=27a41ff7d6dee65c982fbd98ef6ed96413e233200a3f67d054c0263cba32fef9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGHVMV2B%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj63k2%2Bq1NDg58Xo%2BvIYPwdRzHurCGOERxceLvnMBdLgIgDi9ZnAhAuBuENZtKmM3KBWGSkoof0TqenG8qA417Oy4q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDJr0BCEADIjmU58JbCrcA9J0Fm%2BOraINvLKV38nrgEzmsOsJ9rSc0c%2FesFUCUk%2FBK192uaz%2FwfTtbbNCqlHyhddELnXmlF8jYtIGUUMdSxGLj%2F8dKZWp0Bn0N0P458le1gzP1x3Peo5MdSvyQ8%2Fj%2FFLEB7KCHbu7O0GX4ureLwYVWMzv95S5%2FUiUdtTdNGDy5jZP3DxNCukHfNQK%2FLOREiaFti4yKpxYO%2FAjvIUU0NzJXbUF%2Ftg5BQLhKaaOqS5EScGRWyaXVdoOr6sfvmYLWLnp3TYTG%2Fp8AF7MjC5zl%2BOW%2Fmb9CRIPpohou998XwsRptiG1i32GAIfQgrpUvCR93WbYZ879g6RXPWxmpgBaC%2B0ghNHYy9xRo8RmkVbatGMKGkHOhKRcJE4FNa4XjXq1A4D64JCw4Yc2JUyXde%2FxBVJUAIJc2%2FLlsv59YS%2BdrVET2CqWYl%2FDM8ir6COHP6wUsLgOC5ttvrpWvwlhSlTX2bnBXOpbvELbiu2deFaWscTHi3Oy1HeJTbVeqX8PJk2oC%2B0ggfGM78%2FQjpSuaV%2B81l3dA9kgFcyKid4qpBrCtdwElWYoDzOQL4LziPgppL8h602x4LwU1W6iuL66JJbdRhxdRnwB%2BFo4hVR4QMqE1X%2FYVHHil%2FOy3cqA5I%2FMPfJgsoGOqUBSmQHucexO0labjM%2FHq5kcIJ1hAP68vEDyIwg5asPjzN95eHO1r4jULKsOV8uc8hx7MAhY2iMu9qPi27KUqIULCYfYL5IEe8XcU56BZXSResqr4MloFpOXLwQ3AY%2BANkUNhB38Ez3a9s8jUTIHf%2Bdv%2BGtAMx5zSUVWE1VWgtWzDLpctXFRi%2FwDMVAieuuxuNchPKP8kabI0oGV5MXXURDSGMzT9Hk&X-Amz-Signature=5159166adaf216c1c3d41c049711ba93ac0d965c497a319104450114f64bde1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGHVMV2B%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj63k2%2Bq1NDg58Xo%2BvIYPwdRzHurCGOERxceLvnMBdLgIgDi9ZnAhAuBuENZtKmM3KBWGSkoof0TqenG8qA417Oy4q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDJr0BCEADIjmU58JbCrcA9J0Fm%2BOraINvLKV38nrgEzmsOsJ9rSc0c%2FesFUCUk%2FBK192uaz%2FwfTtbbNCqlHyhddELnXmlF8jYtIGUUMdSxGLj%2F8dKZWp0Bn0N0P458le1gzP1x3Peo5MdSvyQ8%2Fj%2FFLEB7KCHbu7O0GX4ureLwYVWMzv95S5%2FUiUdtTdNGDy5jZP3DxNCukHfNQK%2FLOREiaFti4yKpxYO%2FAjvIUU0NzJXbUF%2Ftg5BQLhKaaOqS5EScGRWyaXVdoOr6sfvmYLWLnp3TYTG%2Fp8AF7MjC5zl%2BOW%2Fmb9CRIPpohou998XwsRptiG1i32GAIfQgrpUvCR93WbYZ879g6RXPWxmpgBaC%2B0ghNHYy9xRo8RmkVbatGMKGkHOhKRcJE4FNa4XjXq1A4D64JCw4Yc2JUyXde%2FxBVJUAIJc2%2FLlsv59YS%2BdrVET2CqWYl%2FDM8ir6COHP6wUsLgOC5ttvrpWvwlhSlTX2bnBXOpbvELbiu2deFaWscTHi3Oy1HeJTbVeqX8PJk2oC%2B0ggfGM78%2FQjpSuaV%2B81l3dA9kgFcyKid4qpBrCtdwElWYoDzOQL4LziPgppL8h602x4LwU1W6iuL66JJbdRhxdRnwB%2BFo4hVR4QMqE1X%2FYVHHil%2FOy3cqA5I%2FMPfJgsoGOqUBSmQHucexO0labjM%2FHq5kcIJ1hAP68vEDyIwg5asPjzN95eHO1r4jULKsOV8uc8hx7MAhY2iMu9qPi27KUqIULCYfYL5IEe8XcU56BZXSResqr4MloFpOXLwQ3AY%2BANkUNhB38Ez3a9s8jUTIHf%2Bdv%2BGtAMx5zSUVWE1VWgtWzDLpctXFRi%2FwDMVAieuuxuNchPKP8kabI0oGV5MXXURDSGMzT9Hk&X-Amz-Signature=2e6aa98c624d4b1d2095e4bf1507c83efcdf0dda8ada1630bcd44f7320ba91e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGHVMV2B%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj63k2%2Bq1NDg58Xo%2BvIYPwdRzHurCGOERxceLvnMBdLgIgDi9ZnAhAuBuENZtKmM3KBWGSkoof0TqenG8qA417Oy4q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDJr0BCEADIjmU58JbCrcA9J0Fm%2BOraINvLKV38nrgEzmsOsJ9rSc0c%2FesFUCUk%2FBK192uaz%2FwfTtbbNCqlHyhddELnXmlF8jYtIGUUMdSxGLj%2F8dKZWp0Bn0N0P458le1gzP1x3Peo5MdSvyQ8%2Fj%2FFLEB7KCHbu7O0GX4ureLwYVWMzv95S5%2FUiUdtTdNGDy5jZP3DxNCukHfNQK%2FLOREiaFti4yKpxYO%2FAjvIUU0NzJXbUF%2Ftg5BQLhKaaOqS5EScGRWyaXVdoOr6sfvmYLWLnp3TYTG%2Fp8AF7MjC5zl%2BOW%2Fmb9CRIPpohou998XwsRptiG1i32GAIfQgrpUvCR93WbYZ879g6RXPWxmpgBaC%2B0ghNHYy9xRo8RmkVbatGMKGkHOhKRcJE4FNa4XjXq1A4D64JCw4Yc2JUyXde%2FxBVJUAIJc2%2FLlsv59YS%2BdrVET2CqWYl%2FDM8ir6COHP6wUsLgOC5ttvrpWvwlhSlTX2bnBXOpbvELbiu2deFaWscTHi3Oy1HeJTbVeqX8PJk2oC%2B0ggfGM78%2FQjpSuaV%2B81l3dA9kgFcyKid4qpBrCtdwElWYoDzOQL4LziPgppL8h602x4LwU1W6iuL66JJbdRhxdRnwB%2BFo4hVR4QMqE1X%2FYVHHil%2FOy3cqA5I%2FMPfJgsoGOqUBSmQHucexO0labjM%2FHq5kcIJ1hAP68vEDyIwg5asPjzN95eHO1r4jULKsOV8uc8hx7MAhY2iMu9qPi27KUqIULCYfYL5IEe8XcU56BZXSResqr4MloFpOXLwQ3AY%2BANkUNhB38Ez3a9s8jUTIHf%2Bdv%2BGtAMx5zSUVWE1VWgtWzDLpctXFRi%2FwDMVAieuuxuNchPKP8kabI0oGV5MXXURDSGMzT9Hk&X-Amz-Signature=33f5c42006b45a1a9c4f88215ca648d52b055006f8fd0cc49a7ce27c3fa0adaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGHVMV2B%2F20251216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251216T014518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCj63k2%2Bq1NDg58Xo%2BvIYPwdRzHurCGOERxceLvnMBdLgIgDi9ZnAhAuBuENZtKmM3KBWGSkoof0TqenG8qA417Oy4q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDJr0BCEADIjmU58JbCrcA9J0Fm%2BOraINvLKV38nrgEzmsOsJ9rSc0c%2FesFUCUk%2FBK192uaz%2FwfTtbbNCqlHyhddELnXmlF8jYtIGUUMdSxGLj%2F8dKZWp0Bn0N0P458le1gzP1x3Peo5MdSvyQ8%2Fj%2FFLEB7KCHbu7O0GX4ureLwYVWMzv95S5%2FUiUdtTdNGDy5jZP3DxNCukHfNQK%2FLOREiaFti4yKpxYO%2FAjvIUU0NzJXbUF%2Ftg5BQLhKaaOqS5EScGRWyaXVdoOr6sfvmYLWLnp3TYTG%2Fp8AF7MjC5zl%2BOW%2Fmb9CRIPpohou998XwsRptiG1i32GAIfQgrpUvCR93WbYZ879g6RXPWxmpgBaC%2B0ghNHYy9xRo8RmkVbatGMKGkHOhKRcJE4FNa4XjXq1A4D64JCw4Yc2JUyXde%2FxBVJUAIJc2%2FLlsv59YS%2BdrVET2CqWYl%2FDM8ir6COHP6wUsLgOC5ttvrpWvwlhSlTX2bnBXOpbvELbiu2deFaWscTHi3Oy1HeJTbVeqX8PJk2oC%2B0ggfGM78%2FQjpSuaV%2B81l3dA9kgFcyKid4qpBrCtdwElWYoDzOQL4LziPgppL8h602x4LwU1W6iuL66JJbdRhxdRnwB%2BFo4hVR4QMqE1X%2FYVHHil%2FOy3cqA5I%2FMPfJgsoGOqUBSmQHucexO0labjM%2FHq5kcIJ1hAP68vEDyIwg5asPjzN95eHO1r4jULKsOV8uc8hx7MAhY2iMu9qPi27KUqIULCYfYL5IEe8XcU56BZXSResqr4MloFpOXLwQ3AY%2BANkUNhB38Ez3a9s8jUTIHf%2Bdv%2BGtAMx5zSUVWE1VWgtWzDLpctXFRi%2FwDMVAieuuxuNchPKP8kabI0oGV5MXXURDSGMzT9Hk&X-Amz-Signature=e639439f52dd997ebb066ec3bee812af33d2322e115c3ef8835775f5db3e7b0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
