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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y7MT64A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjKemTkk0dMzQ%2BWBQDFCTNsTwOzkLODBObkEppnoY2qAiEAo%2FpZkDmZXEz2YXPtKh39KEs98VLoNBCPh3Caxw2m2v8qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrCOlnapZh1h89UACrcAy41ty%2BFCx19cEerOPAzSGLkDkGZI%2FcfoVRBTzsMnfxyAYrSscdlejcWZQRLrmmBCQavZnQ2%2B0hjqKr4y1e6LCBpRGNrjc9pyr9PoZCE206i2cNJE%2FwWlP2sgPtpFz%2Fj1kDPrcvKAqs1b8EIPNk8qCVst%2FB%2BlSXWN0rUqcsfc0EFs%2FRdmRoLxNCp%2Bd4e8btu47GYxprjju8GUR24P70zhK8i0tU47PBLRSvnsk9%2FO1fOmpfXalwryvdsQlUjnLsm5WcZ68i1iUDAcwLmAxAPWVM0dMrBJM6n4UIw5ikGfRs2%2FszXTiUUaNBf31JPzuv6IQG9gw7B533U%2FsoGpwzjMUxFBTgxYuvqF2DvEWpji3pe7jOd0ZY7RjvfbOKw%2Bhr8SrhrG%2F%2BH4Geg%2FiUc2d1Dj34hhWPmEts5JosObcwYdzm9D64L0rtMMEOSwQHfH5JFxdxmAP%2BiWIhLm92kw3dDsUuzYM9eY2V6dd00uS%2B1LKI%2Btb4KDPTmd6got5GBj2yfkpsYNxnawBK1vW7cXkUl8ZuloI%2FLNGU7uzPqvVlYtiHZnWrQmw6kK317aQ6TDDXRDGZajbzIaeUY60dOHQmDnnrg2cmgee1snBvhCIQ8S4udvoByOUYvWcCscxU0MICz38QGOqUBpeMZy7lyR%2FMlAAZ%2FiQyDI8cz0VDj5uBPRBxyGxdpHlFa6pg2rBFdSa%2FI5nY0kQdNguipZ3%2FVJ57E7d35RlY87DUWl0kzVU6GLB8SFibVuJzyo8LhNzeRpuz1C6d5Q9BA5gwkFN%2F4uXjKNFB4ZDKvcVZ6FSw8yEdcQcr1UReuYto3qrt8EA89CeRG06da%2FIb%2BSVxZshYqEZ%2FXc7PSUibtxtJLSVsQ&X-Amz-Signature=46398d3bc36b34604c5f23fc0b9832502030107bec4a6e5f346d6ea32ebc8f3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y7MT64A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjKemTkk0dMzQ%2BWBQDFCTNsTwOzkLODBObkEppnoY2qAiEAo%2FpZkDmZXEz2YXPtKh39KEs98VLoNBCPh3Caxw2m2v8qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrCOlnapZh1h89UACrcAy41ty%2BFCx19cEerOPAzSGLkDkGZI%2FcfoVRBTzsMnfxyAYrSscdlejcWZQRLrmmBCQavZnQ2%2B0hjqKr4y1e6LCBpRGNrjc9pyr9PoZCE206i2cNJE%2FwWlP2sgPtpFz%2Fj1kDPrcvKAqs1b8EIPNk8qCVst%2FB%2BlSXWN0rUqcsfc0EFs%2FRdmRoLxNCp%2Bd4e8btu47GYxprjju8GUR24P70zhK8i0tU47PBLRSvnsk9%2FO1fOmpfXalwryvdsQlUjnLsm5WcZ68i1iUDAcwLmAxAPWVM0dMrBJM6n4UIw5ikGfRs2%2FszXTiUUaNBf31JPzuv6IQG9gw7B533U%2FsoGpwzjMUxFBTgxYuvqF2DvEWpji3pe7jOd0ZY7RjvfbOKw%2Bhr8SrhrG%2F%2BH4Geg%2FiUc2d1Dj34hhWPmEts5JosObcwYdzm9D64L0rtMMEOSwQHfH5JFxdxmAP%2BiWIhLm92kw3dDsUuzYM9eY2V6dd00uS%2B1LKI%2Btb4KDPTmd6got5GBj2yfkpsYNxnawBK1vW7cXkUl8ZuloI%2FLNGU7uzPqvVlYtiHZnWrQmw6kK317aQ6TDDXRDGZajbzIaeUY60dOHQmDnnrg2cmgee1snBvhCIQ8S4udvoByOUYvWcCscxU0MICz38QGOqUBpeMZy7lyR%2FMlAAZ%2FiQyDI8cz0VDj5uBPRBxyGxdpHlFa6pg2rBFdSa%2FI5nY0kQdNguipZ3%2FVJ57E7d35RlY87DUWl0kzVU6GLB8SFibVuJzyo8LhNzeRpuz1C6d5Q9BA5gwkFN%2F4uXjKNFB4ZDKvcVZ6FSw8yEdcQcr1UReuYto3qrt8EA89CeRG06da%2FIb%2BSVxZshYqEZ%2FXc7PSUibtxtJLSVsQ&X-Amz-Signature=ce0be57d1711a1d8e5ace3dec13b7442c7fa71bc7f8541e087290cffc9e8543b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y7MT64A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjKemTkk0dMzQ%2BWBQDFCTNsTwOzkLODBObkEppnoY2qAiEAo%2FpZkDmZXEz2YXPtKh39KEs98VLoNBCPh3Caxw2m2v8qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrCOlnapZh1h89UACrcAy41ty%2BFCx19cEerOPAzSGLkDkGZI%2FcfoVRBTzsMnfxyAYrSscdlejcWZQRLrmmBCQavZnQ2%2B0hjqKr4y1e6LCBpRGNrjc9pyr9PoZCE206i2cNJE%2FwWlP2sgPtpFz%2Fj1kDPrcvKAqs1b8EIPNk8qCVst%2FB%2BlSXWN0rUqcsfc0EFs%2FRdmRoLxNCp%2Bd4e8btu47GYxprjju8GUR24P70zhK8i0tU47PBLRSvnsk9%2FO1fOmpfXalwryvdsQlUjnLsm5WcZ68i1iUDAcwLmAxAPWVM0dMrBJM6n4UIw5ikGfRs2%2FszXTiUUaNBf31JPzuv6IQG9gw7B533U%2FsoGpwzjMUxFBTgxYuvqF2DvEWpji3pe7jOd0ZY7RjvfbOKw%2Bhr8SrhrG%2F%2BH4Geg%2FiUc2d1Dj34hhWPmEts5JosObcwYdzm9D64L0rtMMEOSwQHfH5JFxdxmAP%2BiWIhLm92kw3dDsUuzYM9eY2V6dd00uS%2B1LKI%2Btb4KDPTmd6got5GBj2yfkpsYNxnawBK1vW7cXkUl8ZuloI%2FLNGU7uzPqvVlYtiHZnWrQmw6kK317aQ6TDDXRDGZajbzIaeUY60dOHQmDnnrg2cmgee1snBvhCIQ8S4udvoByOUYvWcCscxU0MICz38QGOqUBpeMZy7lyR%2FMlAAZ%2FiQyDI8cz0VDj5uBPRBxyGxdpHlFa6pg2rBFdSa%2FI5nY0kQdNguipZ3%2FVJ57E7d35RlY87DUWl0kzVU6GLB8SFibVuJzyo8LhNzeRpuz1C6d5Q9BA5gwkFN%2F4uXjKNFB4ZDKvcVZ6FSw8yEdcQcr1UReuYto3qrt8EA89CeRG06da%2FIb%2BSVxZshYqEZ%2FXc7PSUibtxtJLSVsQ&X-Amz-Signature=6f3421639ee6ba8dc1108ea8afeac33aefd652230e85e2782957078da481e66b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y7MT64A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjKemTkk0dMzQ%2BWBQDFCTNsTwOzkLODBObkEppnoY2qAiEAo%2FpZkDmZXEz2YXPtKh39KEs98VLoNBCPh3Caxw2m2v8qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrCOlnapZh1h89UACrcAy41ty%2BFCx19cEerOPAzSGLkDkGZI%2FcfoVRBTzsMnfxyAYrSscdlejcWZQRLrmmBCQavZnQ2%2B0hjqKr4y1e6LCBpRGNrjc9pyr9PoZCE206i2cNJE%2FwWlP2sgPtpFz%2Fj1kDPrcvKAqs1b8EIPNk8qCVst%2FB%2BlSXWN0rUqcsfc0EFs%2FRdmRoLxNCp%2Bd4e8btu47GYxprjju8GUR24P70zhK8i0tU47PBLRSvnsk9%2FO1fOmpfXalwryvdsQlUjnLsm5WcZ68i1iUDAcwLmAxAPWVM0dMrBJM6n4UIw5ikGfRs2%2FszXTiUUaNBf31JPzuv6IQG9gw7B533U%2FsoGpwzjMUxFBTgxYuvqF2DvEWpji3pe7jOd0ZY7RjvfbOKw%2Bhr8SrhrG%2F%2BH4Geg%2FiUc2d1Dj34hhWPmEts5JosObcwYdzm9D64L0rtMMEOSwQHfH5JFxdxmAP%2BiWIhLm92kw3dDsUuzYM9eY2V6dd00uS%2B1LKI%2Btb4KDPTmd6got5GBj2yfkpsYNxnawBK1vW7cXkUl8ZuloI%2FLNGU7uzPqvVlYtiHZnWrQmw6kK317aQ6TDDXRDGZajbzIaeUY60dOHQmDnnrg2cmgee1snBvhCIQ8S4udvoByOUYvWcCscxU0MICz38QGOqUBpeMZy7lyR%2FMlAAZ%2FiQyDI8cz0VDj5uBPRBxyGxdpHlFa6pg2rBFdSa%2FI5nY0kQdNguipZ3%2FVJ57E7d35RlY87DUWl0kzVU6GLB8SFibVuJzyo8LhNzeRpuz1C6d5Q9BA5gwkFN%2F4uXjKNFB4ZDKvcVZ6FSw8yEdcQcr1UReuYto3qrt8EA89CeRG06da%2FIb%2BSVxZshYqEZ%2FXc7PSUibtxtJLSVsQ&X-Amz-Signature=c93125e495008af31d4b7bac61541ec420b2a0e09174f1c5817b74ed2387b190&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y7MT64A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjKemTkk0dMzQ%2BWBQDFCTNsTwOzkLODBObkEppnoY2qAiEAo%2FpZkDmZXEz2YXPtKh39KEs98VLoNBCPh3Caxw2m2v8qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrCOlnapZh1h89UACrcAy41ty%2BFCx19cEerOPAzSGLkDkGZI%2FcfoVRBTzsMnfxyAYrSscdlejcWZQRLrmmBCQavZnQ2%2B0hjqKr4y1e6LCBpRGNrjc9pyr9PoZCE206i2cNJE%2FwWlP2sgPtpFz%2Fj1kDPrcvKAqs1b8EIPNk8qCVst%2FB%2BlSXWN0rUqcsfc0EFs%2FRdmRoLxNCp%2Bd4e8btu47GYxprjju8GUR24P70zhK8i0tU47PBLRSvnsk9%2FO1fOmpfXalwryvdsQlUjnLsm5WcZ68i1iUDAcwLmAxAPWVM0dMrBJM6n4UIw5ikGfRs2%2FszXTiUUaNBf31JPzuv6IQG9gw7B533U%2FsoGpwzjMUxFBTgxYuvqF2DvEWpji3pe7jOd0ZY7RjvfbOKw%2Bhr8SrhrG%2F%2BH4Geg%2FiUc2d1Dj34hhWPmEts5JosObcwYdzm9D64L0rtMMEOSwQHfH5JFxdxmAP%2BiWIhLm92kw3dDsUuzYM9eY2V6dd00uS%2B1LKI%2Btb4KDPTmd6got5GBj2yfkpsYNxnawBK1vW7cXkUl8ZuloI%2FLNGU7uzPqvVlYtiHZnWrQmw6kK317aQ6TDDXRDGZajbzIaeUY60dOHQmDnnrg2cmgee1snBvhCIQ8S4udvoByOUYvWcCscxU0MICz38QGOqUBpeMZy7lyR%2FMlAAZ%2FiQyDI8cz0VDj5uBPRBxyGxdpHlFa6pg2rBFdSa%2FI5nY0kQdNguipZ3%2FVJ57E7d35RlY87DUWl0kzVU6GLB8SFibVuJzyo8LhNzeRpuz1C6d5Q9BA5gwkFN%2F4uXjKNFB4ZDKvcVZ6FSw8yEdcQcr1UReuYto3qrt8EA89CeRG06da%2FIb%2BSVxZshYqEZ%2FXc7PSUibtxtJLSVsQ&X-Amz-Signature=14fe22532eb3eb05af6984a8e9008617b44c47092f558bfc9aac4e2b7d4030d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y7MT64A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjKemTkk0dMzQ%2BWBQDFCTNsTwOzkLODBObkEppnoY2qAiEAo%2FpZkDmZXEz2YXPtKh39KEs98VLoNBCPh3Caxw2m2v8qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrCOlnapZh1h89UACrcAy41ty%2BFCx19cEerOPAzSGLkDkGZI%2FcfoVRBTzsMnfxyAYrSscdlejcWZQRLrmmBCQavZnQ2%2B0hjqKr4y1e6LCBpRGNrjc9pyr9PoZCE206i2cNJE%2FwWlP2sgPtpFz%2Fj1kDPrcvKAqs1b8EIPNk8qCVst%2FB%2BlSXWN0rUqcsfc0EFs%2FRdmRoLxNCp%2Bd4e8btu47GYxprjju8GUR24P70zhK8i0tU47PBLRSvnsk9%2FO1fOmpfXalwryvdsQlUjnLsm5WcZ68i1iUDAcwLmAxAPWVM0dMrBJM6n4UIw5ikGfRs2%2FszXTiUUaNBf31JPzuv6IQG9gw7B533U%2FsoGpwzjMUxFBTgxYuvqF2DvEWpji3pe7jOd0ZY7RjvfbOKw%2Bhr8SrhrG%2F%2BH4Geg%2FiUc2d1Dj34hhWPmEts5JosObcwYdzm9D64L0rtMMEOSwQHfH5JFxdxmAP%2BiWIhLm92kw3dDsUuzYM9eY2V6dd00uS%2B1LKI%2Btb4KDPTmd6got5GBj2yfkpsYNxnawBK1vW7cXkUl8ZuloI%2FLNGU7uzPqvVlYtiHZnWrQmw6kK317aQ6TDDXRDGZajbzIaeUY60dOHQmDnnrg2cmgee1snBvhCIQ8S4udvoByOUYvWcCscxU0MICz38QGOqUBpeMZy7lyR%2FMlAAZ%2FiQyDI8cz0VDj5uBPRBxyGxdpHlFa6pg2rBFdSa%2FI5nY0kQdNguipZ3%2FVJ57E7d35RlY87DUWl0kzVU6GLB8SFibVuJzyo8LhNzeRpuz1C6d5Q9BA5gwkFN%2F4uXjKNFB4ZDKvcVZ6FSw8yEdcQcr1UReuYto3qrt8EA89CeRG06da%2FIb%2BSVxZshYqEZ%2FXc7PSUibtxtJLSVsQ&X-Amz-Signature=3e0878e0f8e40f05a90c38ffc85f4cd4effd54568f832b24b8caee8fd666b196&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y7MT64A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjKemTkk0dMzQ%2BWBQDFCTNsTwOzkLODBObkEppnoY2qAiEAo%2FpZkDmZXEz2YXPtKh39KEs98VLoNBCPh3Caxw2m2v8qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrCOlnapZh1h89UACrcAy41ty%2BFCx19cEerOPAzSGLkDkGZI%2FcfoVRBTzsMnfxyAYrSscdlejcWZQRLrmmBCQavZnQ2%2B0hjqKr4y1e6LCBpRGNrjc9pyr9PoZCE206i2cNJE%2FwWlP2sgPtpFz%2Fj1kDPrcvKAqs1b8EIPNk8qCVst%2FB%2BlSXWN0rUqcsfc0EFs%2FRdmRoLxNCp%2Bd4e8btu47GYxprjju8GUR24P70zhK8i0tU47PBLRSvnsk9%2FO1fOmpfXalwryvdsQlUjnLsm5WcZ68i1iUDAcwLmAxAPWVM0dMrBJM6n4UIw5ikGfRs2%2FszXTiUUaNBf31JPzuv6IQG9gw7B533U%2FsoGpwzjMUxFBTgxYuvqF2DvEWpji3pe7jOd0ZY7RjvfbOKw%2Bhr8SrhrG%2F%2BH4Geg%2FiUc2d1Dj34hhWPmEts5JosObcwYdzm9D64L0rtMMEOSwQHfH5JFxdxmAP%2BiWIhLm92kw3dDsUuzYM9eY2V6dd00uS%2B1LKI%2Btb4KDPTmd6got5GBj2yfkpsYNxnawBK1vW7cXkUl8ZuloI%2FLNGU7uzPqvVlYtiHZnWrQmw6kK317aQ6TDDXRDGZajbzIaeUY60dOHQmDnnrg2cmgee1snBvhCIQ8S4udvoByOUYvWcCscxU0MICz38QGOqUBpeMZy7lyR%2FMlAAZ%2FiQyDI8cz0VDj5uBPRBxyGxdpHlFa6pg2rBFdSa%2FI5nY0kQdNguipZ3%2FVJ57E7d35RlY87DUWl0kzVU6GLB8SFibVuJzyo8LhNzeRpuz1C6d5Q9BA5gwkFN%2F4uXjKNFB4ZDKvcVZ6FSw8yEdcQcr1UReuYto3qrt8EA89CeRG06da%2FIb%2BSVxZshYqEZ%2FXc7PSUibtxtJLSVsQ&X-Amz-Signature=c41dec8c712a8da822d66a7e55396765afd8d8c05b281a59b390f28707eab8dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y7MT64A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjKemTkk0dMzQ%2BWBQDFCTNsTwOzkLODBObkEppnoY2qAiEAo%2FpZkDmZXEz2YXPtKh39KEs98VLoNBCPh3Caxw2m2v8qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrCOlnapZh1h89UACrcAy41ty%2BFCx19cEerOPAzSGLkDkGZI%2FcfoVRBTzsMnfxyAYrSscdlejcWZQRLrmmBCQavZnQ2%2B0hjqKr4y1e6LCBpRGNrjc9pyr9PoZCE206i2cNJE%2FwWlP2sgPtpFz%2Fj1kDPrcvKAqs1b8EIPNk8qCVst%2FB%2BlSXWN0rUqcsfc0EFs%2FRdmRoLxNCp%2Bd4e8btu47GYxprjju8GUR24P70zhK8i0tU47PBLRSvnsk9%2FO1fOmpfXalwryvdsQlUjnLsm5WcZ68i1iUDAcwLmAxAPWVM0dMrBJM6n4UIw5ikGfRs2%2FszXTiUUaNBf31JPzuv6IQG9gw7B533U%2FsoGpwzjMUxFBTgxYuvqF2DvEWpji3pe7jOd0ZY7RjvfbOKw%2Bhr8SrhrG%2F%2BH4Geg%2FiUc2d1Dj34hhWPmEts5JosObcwYdzm9D64L0rtMMEOSwQHfH5JFxdxmAP%2BiWIhLm92kw3dDsUuzYM9eY2V6dd00uS%2B1LKI%2Btb4KDPTmd6got5GBj2yfkpsYNxnawBK1vW7cXkUl8ZuloI%2FLNGU7uzPqvVlYtiHZnWrQmw6kK317aQ6TDDXRDGZajbzIaeUY60dOHQmDnnrg2cmgee1snBvhCIQ8S4udvoByOUYvWcCscxU0MICz38QGOqUBpeMZy7lyR%2FMlAAZ%2FiQyDI8cz0VDj5uBPRBxyGxdpHlFa6pg2rBFdSa%2FI5nY0kQdNguipZ3%2FVJ57E7d35RlY87DUWl0kzVU6GLB8SFibVuJzyo8LhNzeRpuz1C6d5Q9BA5gwkFN%2F4uXjKNFB4ZDKvcVZ6FSw8yEdcQcr1UReuYto3qrt8EA89CeRG06da%2FIb%2BSVxZshYqEZ%2FXc7PSUibtxtJLSVsQ&X-Amz-Signature=4a445aa77ba1b927704b66538675758e7045ecd46bd8e6cf8680b949e401b6da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y7MT64A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjKemTkk0dMzQ%2BWBQDFCTNsTwOzkLODBObkEppnoY2qAiEAo%2FpZkDmZXEz2YXPtKh39KEs98VLoNBCPh3Caxw2m2v8qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrCOlnapZh1h89UACrcAy41ty%2BFCx19cEerOPAzSGLkDkGZI%2FcfoVRBTzsMnfxyAYrSscdlejcWZQRLrmmBCQavZnQ2%2B0hjqKr4y1e6LCBpRGNrjc9pyr9PoZCE206i2cNJE%2FwWlP2sgPtpFz%2Fj1kDPrcvKAqs1b8EIPNk8qCVst%2FB%2BlSXWN0rUqcsfc0EFs%2FRdmRoLxNCp%2Bd4e8btu47GYxprjju8GUR24P70zhK8i0tU47PBLRSvnsk9%2FO1fOmpfXalwryvdsQlUjnLsm5WcZ68i1iUDAcwLmAxAPWVM0dMrBJM6n4UIw5ikGfRs2%2FszXTiUUaNBf31JPzuv6IQG9gw7B533U%2FsoGpwzjMUxFBTgxYuvqF2DvEWpji3pe7jOd0ZY7RjvfbOKw%2Bhr8SrhrG%2F%2BH4Geg%2FiUc2d1Dj34hhWPmEts5JosObcwYdzm9D64L0rtMMEOSwQHfH5JFxdxmAP%2BiWIhLm92kw3dDsUuzYM9eY2V6dd00uS%2B1LKI%2Btb4KDPTmd6got5GBj2yfkpsYNxnawBK1vW7cXkUl8ZuloI%2FLNGU7uzPqvVlYtiHZnWrQmw6kK317aQ6TDDXRDGZajbzIaeUY60dOHQmDnnrg2cmgee1snBvhCIQ8S4udvoByOUYvWcCscxU0MICz38QGOqUBpeMZy7lyR%2FMlAAZ%2FiQyDI8cz0VDj5uBPRBxyGxdpHlFa6pg2rBFdSa%2FI5nY0kQdNguipZ3%2FVJ57E7d35RlY87DUWl0kzVU6GLB8SFibVuJzyo8LhNzeRpuz1C6d5Q9BA5gwkFN%2F4uXjKNFB4ZDKvcVZ6FSw8yEdcQcr1UReuYto3qrt8EA89CeRG06da%2FIb%2BSVxZshYqEZ%2FXc7PSUibtxtJLSVsQ&X-Amz-Signature=d63e0ce2199c1102ecc4346d4263b6bd23534c18510f16b08702b12353c34634&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y7MT64A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjKemTkk0dMzQ%2BWBQDFCTNsTwOzkLODBObkEppnoY2qAiEAo%2FpZkDmZXEz2YXPtKh39KEs98VLoNBCPh3Caxw2m2v8qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrCOlnapZh1h89UACrcAy41ty%2BFCx19cEerOPAzSGLkDkGZI%2FcfoVRBTzsMnfxyAYrSscdlejcWZQRLrmmBCQavZnQ2%2B0hjqKr4y1e6LCBpRGNrjc9pyr9PoZCE206i2cNJE%2FwWlP2sgPtpFz%2Fj1kDPrcvKAqs1b8EIPNk8qCVst%2FB%2BlSXWN0rUqcsfc0EFs%2FRdmRoLxNCp%2Bd4e8btu47GYxprjju8GUR24P70zhK8i0tU47PBLRSvnsk9%2FO1fOmpfXalwryvdsQlUjnLsm5WcZ68i1iUDAcwLmAxAPWVM0dMrBJM6n4UIw5ikGfRs2%2FszXTiUUaNBf31JPzuv6IQG9gw7B533U%2FsoGpwzjMUxFBTgxYuvqF2DvEWpji3pe7jOd0ZY7RjvfbOKw%2Bhr8SrhrG%2F%2BH4Geg%2FiUc2d1Dj34hhWPmEts5JosObcwYdzm9D64L0rtMMEOSwQHfH5JFxdxmAP%2BiWIhLm92kw3dDsUuzYM9eY2V6dd00uS%2B1LKI%2Btb4KDPTmd6got5GBj2yfkpsYNxnawBK1vW7cXkUl8ZuloI%2FLNGU7uzPqvVlYtiHZnWrQmw6kK317aQ6TDDXRDGZajbzIaeUY60dOHQmDnnrg2cmgee1snBvhCIQ8S4udvoByOUYvWcCscxU0MICz38QGOqUBpeMZy7lyR%2FMlAAZ%2FiQyDI8cz0VDj5uBPRBxyGxdpHlFa6pg2rBFdSa%2FI5nY0kQdNguipZ3%2FVJ57E7d35RlY87DUWl0kzVU6GLB8SFibVuJzyo8LhNzeRpuz1C6d5Q9BA5gwkFN%2F4uXjKNFB4ZDKvcVZ6FSw8yEdcQcr1UReuYto3qrt8EA89CeRG06da%2FIb%2BSVxZshYqEZ%2FXc7PSUibtxtJLSVsQ&X-Amz-Signature=fd5b347977aa0fbd7fccd544cccb8f1a645bb5ec66d8c720d40d5084c538ba0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y7MT64A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjKemTkk0dMzQ%2BWBQDFCTNsTwOzkLODBObkEppnoY2qAiEAo%2FpZkDmZXEz2YXPtKh39KEs98VLoNBCPh3Caxw2m2v8qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrCOlnapZh1h89UACrcAy41ty%2BFCx19cEerOPAzSGLkDkGZI%2FcfoVRBTzsMnfxyAYrSscdlejcWZQRLrmmBCQavZnQ2%2B0hjqKr4y1e6LCBpRGNrjc9pyr9PoZCE206i2cNJE%2FwWlP2sgPtpFz%2Fj1kDPrcvKAqs1b8EIPNk8qCVst%2FB%2BlSXWN0rUqcsfc0EFs%2FRdmRoLxNCp%2Bd4e8btu47GYxprjju8GUR24P70zhK8i0tU47PBLRSvnsk9%2FO1fOmpfXalwryvdsQlUjnLsm5WcZ68i1iUDAcwLmAxAPWVM0dMrBJM6n4UIw5ikGfRs2%2FszXTiUUaNBf31JPzuv6IQG9gw7B533U%2FsoGpwzjMUxFBTgxYuvqF2DvEWpji3pe7jOd0ZY7RjvfbOKw%2Bhr8SrhrG%2F%2BH4Geg%2FiUc2d1Dj34hhWPmEts5JosObcwYdzm9D64L0rtMMEOSwQHfH5JFxdxmAP%2BiWIhLm92kw3dDsUuzYM9eY2V6dd00uS%2B1LKI%2Btb4KDPTmd6got5GBj2yfkpsYNxnawBK1vW7cXkUl8ZuloI%2FLNGU7uzPqvVlYtiHZnWrQmw6kK317aQ6TDDXRDGZajbzIaeUY60dOHQmDnnrg2cmgee1snBvhCIQ8S4udvoByOUYvWcCscxU0MICz38QGOqUBpeMZy7lyR%2FMlAAZ%2FiQyDI8cz0VDj5uBPRBxyGxdpHlFa6pg2rBFdSa%2FI5nY0kQdNguipZ3%2FVJ57E7d35RlY87DUWl0kzVU6GLB8SFibVuJzyo8LhNzeRpuz1C6d5Q9BA5gwkFN%2F4uXjKNFB4ZDKvcVZ6FSw8yEdcQcr1UReuYto3qrt8EA89CeRG06da%2FIb%2BSVxZshYqEZ%2FXc7PSUibtxtJLSVsQ&X-Amz-Signature=674369bea51a37e26fd6396b33482696e4b37fc191d818a39c335fa460449ad9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y7MT64A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjKemTkk0dMzQ%2BWBQDFCTNsTwOzkLODBObkEppnoY2qAiEAo%2FpZkDmZXEz2YXPtKh39KEs98VLoNBCPh3Caxw2m2v8qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrCOlnapZh1h89UACrcAy41ty%2BFCx19cEerOPAzSGLkDkGZI%2FcfoVRBTzsMnfxyAYrSscdlejcWZQRLrmmBCQavZnQ2%2B0hjqKr4y1e6LCBpRGNrjc9pyr9PoZCE206i2cNJE%2FwWlP2sgPtpFz%2Fj1kDPrcvKAqs1b8EIPNk8qCVst%2FB%2BlSXWN0rUqcsfc0EFs%2FRdmRoLxNCp%2Bd4e8btu47GYxprjju8GUR24P70zhK8i0tU47PBLRSvnsk9%2FO1fOmpfXalwryvdsQlUjnLsm5WcZ68i1iUDAcwLmAxAPWVM0dMrBJM6n4UIw5ikGfRs2%2FszXTiUUaNBf31JPzuv6IQG9gw7B533U%2FsoGpwzjMUxFBTgxYuvqF2DvEWpji3pe7jOd0ZY7RjvfbOKw%2Bhr8SrhrG%2F%2BH4Geg%2FiUc2d1Dj34hhWPmEts5JosObcwYdzm9D64L0rtMMEOSwQHfH5JFxdxmAP%2BiWIhLm92kw3dDsUuzYM9eY2V6dd00uS%2B1LKI%2Btb4KDPTmd6got5GBj2yfkpsYNxnawBK1vW7cXkUl8ZuloI%2FLNGU7uzPqvVlYtiHZnWrQmw6kK317aQ6TDDXRDGZajbzIaeUY60dOHQmDnnrg2cmgee1snBvhCIQ8S4udvoByOUYvWcCscxU0MICz38QGOqUBpeMZy7lyR%2FMlAAZ%2FiQyDI8cz0VDj5uBPRBxyGxdpHlFa6pg2rBFdSa%2FI5nY0kQdNguipZ3%2FVJ57E7d35RlY87DUWl0kzVU6GLB8SFibVuJzyo8LhNzeRpuz1C6d5Q9BA5gwkFN%2F4uXjKNFB4ZDKvcVZ6FSw8yEdcQcr1UReuYto3qrt8EA89CeRG06da%2FIb%2BSVxZshYqEZ%2FXc7PSUibtxtJLSVsQ&X-Amz-Signature=a38379178a9b879756405afb4bd8a0c0aa54e0058efc69479efd33f59ebcea8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y7MT64A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjKemTkk0dMzQ%2BWBQDFCTNsTwOzkLODBObkEppnoY2qAiEAo%2FpZkDmZXEz2YXPtKh39KEs98VLoNBCPh3Caxw2m2v8qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrCOlnapZh1h89UACrcAy41ty%2BFCx19cEerOPAzSGLkDkGZI%2FcfoVRBTzsMnfxyAYrSscdlejcWZQRLrmmBCQavZnQ2%2B0hjqKr4y1e6LCBpRGNrjc9pyr9PoZCE206i2cNJE%2FwWlP2sgPtpFz%2Fj1kDPrcvKAqs1b8EIPNk8qCVst%2FB%2BlSXWN0rUqcsfc0EFs%2FRdmRoLxNCp%2Bd4e8btu47GYxprjju8GUR24P70zhK8i0tU47PBLRSvnsk9%2FO1fOmpfXalwryvdsQlUjnLsm5WcZ68i1iUDAcwLmAxAPWVM0dMrBJM6n4UIw5ikGfRs2%2FszXTiUUaNBf31JPzuv6IQG9gw7B533U%2FsoGpwzjMUxFBTgxYuvqF2DvEWpji3pe7jOd0ZY7RjvfbOKw%2Bhr8SrhrG%2F%2BH4Geg%2FiUc2d1Dj34hhWPmEts5JosObcwYdzm9D64L0rtMMEOSwQHfH5JFxdxmAP%2BiWIhLm92kw3dDsUuzYM9eY2V6dd00uS%2B1LKI%2Btb4KDPTmd6got5GBj2yfkpsYNxnawBK1vW7cXkUl8ZuloI%2FLNGU7uzPqvVlYtiHZnWrQmw6kK317aQ6TDDXRDGZajbzIaeUY60dOHQmDnnrg2cmgee1snBvhCIQ8S4udvoByOUYvWcCscxU0MICz38QGOqUBpeMZy7lyR%2FMlAAZ%2FiQyDI8cz0VDj5uBPRBxyGxdpHlFa6pg2rBFdSa%2FI5nY0kQdNguipZ3%2FVJ57E7d35RlY87DUWl0kzVU6GLB8SFibVuJzyo8LhNzeRpuz1C6d5Q9BA5gwkFN%2F4uXjKNFB4ZDKvcVZ6FSw8yEdcQcr1UReuYto3qrt8EA89CeRG06da%2FIb%2BSVxZshYqEZ%2FXc7PSUibtxtJLSVsQ&X-Amz-Signature=f09f94694c10db4184458fdd9ac75ccaefde8fbc76ad60959fca20324112170a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y7MT64A%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T044047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICjKemTkk0dMzQ%2BWBQDFCTNsTwOzkLODBObkEppnoY2qAiEAo%2FpZkDmZXEz2YXPtKh39KEs98VLoNBCPh3Caxw2m2v8qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPrCOlnapZh1h89UACrcAy41ty%2BFCx19cEerOPAzSGLkDkGZI%2FcfoVRBTzsMnfxyAYrSscdlejcWZQRLrmmBCQavZnQ2%2B0hjqKr4y1e6LCBpRGNrjc9pyr9PoZCE206i2cNJE%2FwWlP2sgPtpFz%2Fj1kDPrcvKAqs1b8EIPNk8qCVst%2FB%2BlSXWN0rUqcsfc0EFs%2FRdmRoLxNCp%2Bd4e8btu47GYxprjju8GUR24P70zhK8i0tU47PBLRSvnsk9%2FO1fOmpfXalwryvdsQlUjnLsm5WcZ68i1iUDAcwLmAxAPWVM0dMrBJM6n4UIw5ikGfRs2%2FszXTiUUaNBf31JPzuv6IQG9gw7B533U%2FsoGpwzjMUxFBTgxYuvqF2DvEWpji3pe7jOd0ZY7RjvfbOKw%2Bhr8SrhrG%2F%2BH4Geg%2FiUc2d1Dj34hhWPmEts5JosObcwYdzm9D64L0rtMMEOSwQHfH5JFxdxmAP%2BiWIhLm92kw3dDsUuzYM9eY2V6dd00uS%2B1LKI%2Btb4KDPTmd6got5GBj2yfkpsYNxnawBK1vW7cXkUl8ZuloI%2FLNGU7uzPqvVlYtiHZnWrQmw6kK317aQ6TDDXRDGZajbzIaeUY60dOHQmDnnrg2cmgee1snBvhCIQ8S4udvoByOUYvWcCscxU0MICz38QGOqUBpeMZy7lyR%2FMlAAZ%2FiQyDI8cz0VDj5uBPRBxyGxdpHlFa6pg2rBFdSa%2FI5nY0kQdNguipZ3%2FVJ57E7d35RlY87DUWl0kzVU6GLB8SFibVuJzyo8LhNzeRpuz1C6d5Q9BA5gwkFN%2F4uXjKNFB4ZDKvcVZ6FSw8yEdcQcr1UReuYto3qrt8EA89CeRG06da%2FIb%2BSVxZshYqEZ%2FXc7PSUibtxtJLSVsQ&X-Amz-Signature=775dfbf0611ac31f8bb0e3d87deeb155af71997ba7521eff65d919a6a2482cfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
