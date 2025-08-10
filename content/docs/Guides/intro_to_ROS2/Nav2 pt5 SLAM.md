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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BZVSFA6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzvP%2ByxdrGBDaiayHUJwL2hCcrykwtlmrq65CbpAt86AiBrzTS73fhN65v1sEClj5jy3ZxB4mR2bir4RL1CW6dICSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbBzad1oS%2FDrOJDpZKtwD35nLC%2F6S8OhPU02owuxw9QHYco9hOS%2FRv5xXQcaDZ17ImXXZnIGfaWnQOX6wNuBF%2BDJv1il8F%2Bqf0sNxaoGAEQD8pqwa6eEFya297ObszhBnexGaBESyS1GM8jOuXx2%2FYngue%2Bde%2FQtz%2FKaN%2BGmNFYix9vyWSPrShb9JvMvtJSWbIZLCe4ocmm6HONKscfHouJnt7jfPiAe7rkyNvevkFlq9IJ1LzmaI%2FnSD9MEjxdJbJTuuXzyF524pTymoiLfxYwlJf764v4q%2FaONiv%2F%2Buv21L9ROCc1k%2FZYuJifXqRJIsQ9hBqTp7tki%2B5V7H3dYBzcxGaNvzFbNjSOFyKVE5%2FwaI216Y8b63dPmkcYb7QmfuOzQSc%2BBSdhFqImLQIfMeLr9qXOQlBgVqCmZH6G%2FyBTqdcRt7398hv9LKjhU7PU3EC7VZHZ9e9DeKOhrvnkyMkVGfRa0MlRJRirYQnEZaOgkuFbPMAz%2B3PKaGUfIDyq1q5QaqkXi5NMozWyrLaeXy0jekrNeaHAFswnDDz8KRJp791ak9bl1YUNbsO29pDiLnu6Mwv2b6M%2B%2BU58UTFd5q2OPY0WjS833V0WhUDNhYSnv3B8DmwPhaxDDpiqnzVVrcArfpARFo1RIuo14wq5XjxAY6pgHUBjcsfEuUPqBV9w0Sg5bVRjiWkzboLYKfqqM7%2FPglsvkESmyg0Vx2KfA9oxCYjk4GxGFvzNeR9ZPP7wRaoJepHQpiSCCzTgPFvDnWVvov7yuZbM5pj0WG6OcUmTuguLLmQQw3Ibj1gd5ccTZ2NWYw3VTJ4PyJFs5N7HXg9snXRsS%2BTPmVr21WMeZDObpOQoOEYv2ruvNVTivOvoKdF3X9CO1ZIx0U&X-Amz-Signature=17afcd0b67d4499cc28c9e3ffaada656b43cefe996543ea0f20c461a3933e8ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BZVSFA6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzvP%2ByxdrGBDaiayHUJwL2hCcrykwtlmrq65CbpAt86AiBrzTS73fhN65v1sEClj5jy3ZxB4mR2bir4RL1CW6dICSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbBzad1oS%2FDrOJDpZKtwD35nLC%2F6S8OhPU02owuxw9QHYco9hOS%2FRv5xXQcaDZ17ImXXZnIGfaWnQOX6wNuBF%2BDJv1il8F%2Bqf0sNxaoGAEQD8pqwa6eEFya297ObszhBnexGaBESyS1GM8jOuXx2%2FYngue%2Bde%2FQtz%2FKaN%2BGmNFYix9vyWSPrShb9JvMvtJSWbIZLCe4ocmm6HONKscfHouJnt7jfPiAe7rkyNvevkFlq9IJ1LzmaI%2FnSD9MEjxdJbJTuuXzyF524pTymoiLfxYwlJf764v4q%2FaONiv%2F%2Buv21L9ROCc1k%2FZYuJifXqRJIsQ9hBqTp7tki%2B5V7H3dYBzcxGaNvzFbNjSOFyKVE5%2FwaI216Y8b63dPmkcYb7QmfuOzQSc%2BBSdhFqImLQIfMeLr9qXOQlBgVqCmZH6G%2FyBTqdcRt7398hv9LKjhU7PU3EC7VZHZ9e9DeKOhrvnkyMkVGfRa0MlRJRirYQnEZaOgkuFbPMAz%2B3PKaGUfIDyq1q5QaqkXi5NMozWyrLaeXy0jekrNeaHAFswnDDz8KRJp791ak9bl1YUNbsO29pDiLnu6Mwv2b6M%2B%2BU58UTFd5q2OPY0WjS833V0WhUDNhYSnv3B8DmwPhaxDDpiqnzVVrcArfpARFo1RIuo14wq5XjxAY6pgHUBjcsfEuUPqBV9w0Sg5bVRjiWkzboLYKfqqM7%2FPglsvkESmyg0Vx2KfA9oxCYjk4GxGFvzNeR9ZPP7wRaoJepHQpiSCCzTgPFvDnWVvov7yuZbM5pj0WG6OcUmTuguLLmQQw3Ibj1gd5ccTZ2NWYw3VTJ4PyJFs5N7HXg9snXRsS%2BTPmVr21WMeZDObpOQoOEYv2ruvNVTivOvoKdF3X9CO1ZIx0U&X-Amz-Signature=5a34a3480582e2c52ad40b7f0e2ca55b81aaa0a344211d502bd6847713ebb88b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BZVSFA6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzvP%2ByxdrGBDaiayHUJwL2hCcrykwtlmrq65CbpAt86AiBrzTS73fhN65v1sEClj5jy3ZxB4mR2bir4RL1CW6dICSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbBzad1oS%2FDrOJDpZKtwD35nLC%2F6S8OhPU02owuxw9QHYco9hOS%2FRv5xXQcaDZ17ImXXZnIGfaWnQOX6wNuBF%2BDJv1il8F%2Bqf0sNxaoGAEQD8pqwa6eEFya297ObszhBnexGaBESyS1GM8jOuXx2%2FYngue%2Bde%2FQtz%2FKaN%2BGmNFYix9vyWSPrShb9JvMvtJSWbIZLCe4ocmm6HONKscfHouJnt7jfPiAe7rkyNvevkFlq9IJ1LzmaI%2FnSD9MEjxdJbJTuuXzyF524pTymoiLfxYwlJf764v4q%2FaONiv%2F%2Buv21L9ROCc1k%2FZYuJifXqRJIsQ9hBqTp7tki%2B5V7H3dYBzcxGaNvzFbNjSOFyKVE5%2FwaI216Y8b63dPmkcYb7QmfuOzQSc%2BBSdhFqImLQIfMeLr9qXOQlBgVqCmZH6G%2FyBTqdcRt7398hv9LKjhU7PU3EC7VZHZ9e9DeKOhrvnkyMkVGfRa0MlRJRirYQnEZaOgkuFbPMAz%2B3PKaGUfIDyq1q5QaqkXi5NMozWyrLaeXy0jekrNeaHAFswnDDz8KRJp791ak9bl1YUNbsO29pDiLnu6Mwv2b6M%2B%2BU58UTFd5q2OPY0WjS833V0WhUDNhYSnv3B8DmwPhaxDDpiqnzVVrcArfpARFo1RIuo14wq5XjxAY6pgHUBjcsfEuUPqBV9w0Sg5bVRjiWkzboLYKfqqM7%2FPglsvkESmyg0Vx2KfA9oxCYjk4GxGFvzNeR9ZPP7wRaoJepHQpiSCCzTgPFvDnWVvov7yuZbM5pj0WG6OcUmTuguLLmQQw3Ibj1gd5ccTZ2NWYw3VTJ4PyJFs5N7HXg9snXRsS%2BTPmVr21WMeZDObpOQoOEYv2ruvNVTivOvoKdF3X9CO1ZIx0U&X-Amz-Signature=980e6082dfda70e18f492c99eacc7cf8e6400bc2ec554bd89d2d194736fd4de2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BZVSFA6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzvP%2ByxdrGBDaiayHUJwL2hCcrykwtlmrq65CbpAt86AiBrzTS73fhN65v1sEClj5jy3ZxB4mR2bir4RL1CW6dICSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbBzad1oS%2FDrOJDpZKtwD35nLC%2F6S8OhPU02owuxw9QHYco9hOS%2FRv5xXQcaDZ17ImXXZnIGfaWnQOX6wNuBF%2BDJv1il8F%2Bqf0sNxaoGAEQD8pqwa6eEFya297ObszhBnexGaBESyS1GM8jOuXx2%2FYngue%2Bde%2FQtz%2FKaN%2BGmNFYix9vyWSPrShb9JvMvtJSWbIZLCe4ocmm6HONKscfHouJnt7jfPiAe7rkyNvevkFlq9IJ1LzmaI%2FnSD9MEjxdJbJTuuXzyF524pTymoiLfxYwlJf764v4q%2FaONiv%2F%2Buv21L9ROCc1k%2FZYuJifXqRJIsQ9hBqTp7tki%2B5V7H3dYBzcxGaNvzFbNjSOFyKVE5%2FwaI216Y8b63dPmkcYb7QmfuOzQSc%2BBSdhFqImLQIfMeLr9qXOQlBgVqCmZH6G%2FyBTqdcRt7398hv9LKjhU7PU3EC7VZHZ9e9DeKOhrvnkyMkVGfRa0MlRJRirYQnEZaOgkuFbPMAz%2B3PKaGUfIDyq1q5QaqkXi5NMozWyrLaeXy0jekrNeaHAFswnDDz8KRJp791ak9bl1YUNbsO29pDiLnu6Mwv2b6M%2B%2BU58UTFd5q2OPY0WjS833V0WhUDNhYSnv3B8DmwPhaxDDpiqnzVVrcArfpARFo1RIuo14wq5XjxAY6pgHUBjcsfEuUPqBV9w0Sg5bVRjiWkzboLYKfqqM7%2FPglsvkESmyg0Vx2KfA9oxCYjk4GxGFvzNeR9ZPP7wRaoJepHQpiSCCzTgPFvDnWVvov7yuZbM5pj0WG6OcUmTuguLLmQQw3Ibj1gd5ccTZ2NWYw3VTJ4PyJFs5N7HXg9snXRsS%2BTPmVr21WMeZDObpOQoOEYv2ruvNVTivOvoKdF3X9CO1ZIx0U&X-Amz-Signature=ecd83ff35ab004720d1bcb6e7d8084b3b55f1f825d2f99993bb7b5909220ce80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BZVSFA6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzvP%2ByxdrGBDaiayHUJwL2hCcrykwtlmrq65CbpAt86AiBrzTS73fhN65v1sEClj5jy3ZxB4mR2bir4RL1CW6dICSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbBzad1oS%2FDrOJDpZKtwD35nLC%2F6S8OhPU02owuxw9QHYco9hOS%2FRv5xXQcaDZ17ImXXZnIGfaWnQOX6wNuBF%2BDJv1il8F%2Bqf0sNxaoGAEQD8pqwa6eEFya297ObszhBnexGaBESyS1GM8jOuXx2%2FYngue%2Bde%2FQtz%2FKaN%2BGmNFYix9vyWSPrShb9JvMvtJSWbIZLCe4ocmm6HONKscfHouJnt7jfPiAe7rkyNvevkFlq9IJ1LzmaI%2FnSD9MEjxdJbJTuuXzyF524pTymoiLfxYwlJf764v4q%2FaONiv%2F%2Buv21L9ROCc1k%2FZYuJifXqRJIsQ9hBqTp7tki%2B5V7H3dYBzcxGaNvzFbNjSOFyKVE5%2FwaI216Y8b63dPmkcYb7QmfuOzQSc%2BBSdhFqImLQIfMeLr9qXOQlBgVqCmZH6G%2FyBTqdcRt7398hv9LKjhU7PU3EC7VZHZ9e9DeKOhrvnkyMkVGfRa0MlRJRirYQnEZaOgkuFbPMAz%2B3PKaGUfIDyq1q5QaqkXi5NMozWyrLaeXy0jekrNeaHAFswnDDz8KRJp791ak9bl1YUNbsO29pDiLnu6Mwv2b6M%2B%2BU58UTFd5q2OPY0WjS833V0WhUDNhYSnv3B8DmwPhaxDDpiqnzVVrcArfpARFo1RIuo14wq5XjxAY6pgHUBjcsfEuUPqBV9w0Sg5bVRjiWkzboLYKfqqM7%2FPglsvkESmyg0Vx2KfA9oxCYjk4GxGFvzNeR9ZPP7wRaoJepHQpiSCCzTgPFvDnWVvov7yuZbM5pj0WG6OcUmTuguLLmQQw3Ibj1gd5ccTZ2NWYw3VTJ4PyJFs5N7HXg9snXRsS%2BTPmVr21WMeZDObpOQoOEYv2ruvNVTivOvoKdF3X9CO1ZIx0U&X-Amz-Signature=99d18c291d6c41939f2a7a68e8ebc0c0908c547eff2345c8f43e3dfc4371859b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BZVSFA6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzvP%2ByxdrGBDaiayHUJwL2hCcrykwtlmrq65CbpAt86AiBrzTS73fhN65v1sEClj5jy3ZxB4mR2bir4RL1CW6dICSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbBzad1oS%2FDrOJDpZKtwD35nLC%2F6S8OhPU02owuxw9QHYco9hOS%2FRv5xXQcaDZ17ImXXZnIGfaWnQOX6wNuBF%2BDJv1il8F%2Bqf0sNxaoGAEQD8pqwa6eEFya297ObszhBnexGaBESyS1GM8jOuXx2%2FYngue%2Bde%2FQtz%2FKaN%2BGmNFYix9vyWSPrShb9JvMvtJSWbIZLCe4ocmm6HONKscfHouJnt7jfPiAe7rkyNvevkFlq9IJ1LzmaI%2FnSD9MEjxdJbJTuuXzyF524pTymoiLfxYwlJf764v4q%2FaONiv%2F%2Buv21L9ROCc1k%2FZYuJifXqRJIsQ9hBqTp7tki%2B5V7H3dYBzcxGaNvzFbNjSOFyKVE5%2FwaI216Y8b63dPmkcYb7QmfuOzQSc%2BBSdhFqImLQIfMeLr9qXOQlBgVqCmZH6G%2FyBTqdcRt7398hv9LKjhU7PU3EC7VZHZ9e9DeKOhrvnkyMkVGfRa0MlRJRirYQnEZaOgkuFbPMAz%2B3PKaGUfIDyq1q5QaqkXi5NMozWyrLaeXy0jekrNeaHAFswnDDz8KRJp791ak9bl1YUNbsO29pDiLnu6Mwv2b6M%2B%2BU58UTFd5q2OPY0WjS833V0WhUDNhYSnv3B8DmwPhaxDDpiqnzVVrcArfpARFo1RIuo14wq5XjxAY6pgHUBjcsfEuUPqBV9w0Sg5bVRjiWkzboLYKfqqM7%2FPglsvkESmyg0Vx2KfA9oxCYjk4GxGFvzNeR9ZPP7wRaoJepHQpiSCCzTgPFvDnWVvov7yuZbM5pj0WG6OcUmTuguLLmQQw3Ibj1gd5ccTZ2NWYw3VTJ4PyJFs5N7HXg9snXRsS%2BTPmVr21WMeZDObpOQoOEYv2ruvNVTivOvoKdF3X9CO1ZIx0U&X-Amz-Signature=01c4befdf2fa56c60f84938ad4e62b3bf107ba926f8a10b68d49e630f2bef1e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BZVSFA6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzvP%2ByxdrGBDaiayHUJwL2hCcrykwtlmrq65CbpAt86AiBrzTS73fhN65v1sEClj5jy3ZxB4mR2bir4RL1CW6dICSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbBzad1oS%2FDrOJDpZKtwD35nLC%2F6S8OhPU02owuxw9QHYco9hOS%2FRv5xXQcaDZ17ImXXZnIGfaWnQOX6wNuBF%2BDJv1il8F%2Bqf0sNxaoGAEQD8pqwa6eEFya297ObszhBnexGaBESyS1GM8jOuXx2%2FYngue%2Bde%2FQtz%2FKaN%2BGmNFYix9vyWSPrShb9JvMvtJSWbIZLCe4ocmm6HONKscfHouJnt7jfPiAe7rkyNvevkFlq9IJ1LzmaI%2FnSD9MEjxdJbJTuuXzyF524pTymoiLfxYwlJf764v4q%2FaONiv%2F%2Buv21L9ROCc1k%2FZYuJifXqRJIsQ9hBqTp7tki%2B5V7H3dYBzcxGaNvzFbNjSOFyKVE5%2FwaI216Y8b63dPmkcYb7QmfuOzQSc%2BBSdhFqImLQIfMeLr9qXOQlBgVqCmZH6G%2FyBTqdcRt7398hv9LKjhU7PU3EC7VZHZ9e9DeKOhrvnkyMkVGfRa0MlRJRirYQnEZaOgkuFbPMAz%2B3PKaGUfIDyq1q5QaqkXi5NMozWyrLaeXy0jekrNeaHAFswnDDz8KRJp791ak9bl1YUNbsO29pDiLnu6Mwv2b6M%2B%2BU58UTFd5q2OPY0WjS833V0WhUDNhYSnv3B8DmwPhaxDDpiqnzVVrcArfpARFo1RIuo14wq5XjxAY6pgHUBjcsfEuUPqBV9w0Sg5bVRjiWkzboLYKfqqM7%2FPglsvkESmyg0Vx2KfA9oxCYjk4GxGFvzNeR9ZPP7wRaoJepHQpiSCCzTgPFvDnWVvov7yuZbM5pj0WG6OcUmTuguLLmQQw3Ibj1gd5ccTZ2NWYw3VTJ4PyJFs5N7HXg9snXRsS%2BTPmVr21WMeZDObpOQoOEYv2ruvNVTivOvoKdF3X9CO1ZIx0U&X-Amz-Signature=e1c63c54496dc4e94fb501a2cced380fdb636b3704733fc33305247e09d37d9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BZVSFA6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzvP%2ByxdrGBDaiayHUJwL2hCcrykwtlmrq65CbpAt86AiBrzTS73fhN65v1sEClj5jy3ZxB4mR2bir4RL1CW6dICSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbBzad1oS%2FDrOJDpZKtwD35nLC%2F6S8OhPU02owuxw9QHYco9hOS%2FRv5xXQcaDZ17ImXXZnIGfaWnQOX6wNuBF%2BDJv1il8F%2Bqf0sNxaoGAEQD8pqwa6eEFya297ObszhBnexGaBESyS1GM8jOuXx2%2FYngue%2Bde%2FQtz%2FKaN%2BGmNFYix9vyWSPrShb9JvMvtJSWbIZLCe4ocmm6HONKscfHouJnt7jfPiAe7rkyNvevkFlq9IJ1LzmaI%2FnSD9MEjxdJbJTuuXzyF524pTymoiLfxYwlJf764v4q%2FaONiv%2F%2Buv21L9ROCc1k%2FZYuJifXqRJIsQ9hBqTp7tki%2B5V7H3dYBzcxGaNvzFbNjSOFyKVE5%2FwaI216Y8b63dPmkcYb7QmfuOzQSc%2BBSdhFqImLQIfMeLr9qXOQlBgVqCmZH6G%2FyBTqdcRt7398hv9LKjhU7PU3EC7VZHZ9e9DeKOhrvnkyMkVGfRa0MlRJRirYQnEZaOgkuFbPMAz%2B3PKaGUfIDyq1q5QaqkXi5NMozWyrLaeXy0jekrNeaHAFswnDDz8KRJp791ak9bl1YUNbsO29pDiLnu6Mwv2b6M%2B%2BU58UTFd5q2OPY0WjS833V0WhUDNhYSnv3B8DmwPhaxDDpiqnzVVrcArfpARFo1RIuo14wq5XjxAY6pgHUBjcsfEuUPqBV9w0Sg5bVRjiWkzboLYKfqqM7%2FPglsvkESmyg0Vx2KfA9oxCYjk4GxGFvzNeR9ZPP7wRaoJepHQpiSCCzTgPFvDnWVvov7yuZbM5pj0WG6OcUmTuguLLmQQw3Ibj1gd5ccTZ2NWYw3VTJ4PyJFs5N7HXg9snXRsS%2BTPmVr21WMeZDObpOQoOEYv2ruvNVTivOvoKdF3X9CO1ZIx0U&X-Amz-Signature=b1514b608089941b9c977fcdae332f50fbbfd87ee6b65164b8d7878aa28c13ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BZVSFA6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzvP%2ByxdrGBDaiayHUJwL2hCcrykwtlmrq65CbpAt86AiBrzTS73fhN65v1sEClj5jy3ZxB4mR2bir4RL1CW6dICSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbBzad1oS%2FDrOJDpZKtwD35nLC%2F6S8OhPU02owuxw9QHYco9hOS%2FRv5xXQcaDZ17ImXXZnIGfaWnQOX6wNuBF%2BDJv1il8F%2Bqf0sNxaoGAEQD8pqwa6eEFya297ObszhBnexGaBESyS1GM8jOuXx2%2FYngue%2Bde%2FQtz%2FKaN%2BGmNFYix9vyWSPrShb9JvMvtJSWbIZLCe4ocmm6HONKscfHouJnt7jfPiAe7rkyNvevkFlq9IJ1LzmaI%2FnSD9MEjxdJbJTuuXzyF524pTymoiLfxYwlJf764v4q%2FaONiv%2F%2Buv21L9ROCc1k%2FZYuJifXqRJIsQ9hBqTp7tki%2B5V7H3dYBzcxGaNvzFbNjSOFyKVE5%2FwaI216Y8b63dPmkcYb7QmfuOzQSc%2BBSdhFqImLQIfMeLr9qXOQlBgVqCmZH6G%2FyBTqdcRt7398hv9LKjhU7PU3EC7VZHZ9e9DeKOhrvnkyMkVGfRa0MlRJRirYQnEZaOgkuFbPMAz%2B3PKaGUfIDyq1q5QaqkXi5NMozWyrLaeXy0jekrNeaHAFswnDDz8KRJp791ak9bl1YUNbsO29pDiLnu6Mwv2b6M%2B%2BU58UTFd5q2OPY0WjS833V0WhUDNhYSnv3B8DmwPhaxDDpiqnzVVrcArfpARFo1RIuo14wq5XjxAY6pgHUBjcsfEuUPqBV9w0Sg5bVRjiWkzboLYKfqqM7%2FPglsvkESmyg0Vx2KfA9oxCYjk4GxGFvzNeR9ZPP7wRaoJepHQpiSCCzTgPFvDnWVvov7yuZbM5pj0WG6OcUmTuguLLmQQw3Ibj1gd5ccTZ2NWYw3VTJ4PyJFs5N7HXg9snXRsS%2BTPmVr21WMeZDObpOQoOEYv2ruvNVTivOvoKdF3X9CO1ZIx0U&X-Amz-Signature=f83505dd95f4abe1c4a7d0654c117f175696406c158d079f6bf087a969ae07a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BZVSFA6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzvP%2ByxdrGBDaiayHUJwL2hCcrykwtlmrq65CbpAt86AiBrzTS73fhN65v1sEClj5jy3ZxB4mR2bir4RL1CW6dICSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbBzad1oS%2FDrOJDpZKtwD35nLC%2F6S8OhPU02owuxw9QHYco9hOS%2FRv5xXQcaDZ17ImXXZnIGfaWnQOX6wNuBF%2BDJv1il8F%2Bqf0sNxaoGAEQD8pqwa6eEFya297ObszhBnexGaBESyS1GM8jOuXx2%2FYngue%2Bde%2FQtz%2FKaN%2BGmNFYix9vyWSPrShb9JvMvtJSWbIZLCe4ocmm6HONKscfHouJnt7jfPiAe7rkyNvevkFlq9IJ1LzmaI%2FnSD9MEjxdJbJTuuXzyF524pTymoiLfxYwlJf764v4q%2FaONiv%2F%2Buv21L9ROCc1k%2FZYuJifXqRJIsQ9hBqTp7tki%2B5V7H3dYBzcxGaNvzFbNjSOFyKVE5%2FwaI216Y8b63dPmkcYb7QmfuOzQSc%2BBSdhFqImLQIfMeLr9qXOQlBgVqCmZH6G%2FyBTqdcRt7398hv9LKjhU7PU3EC7VZHZ9e9DeKOhrvnkyMkVGfRa0MlRJRirYQnEZaOgkuFbPMAz%2B3PKaGUfIDyq1q5QaqkXi5NMozWyrLaeXy0jekrNeaHAFswnDDz8KRJp791ak9bl1YUNbsO29pDiLnu6Mwv2b6M%2B%2BU58UTFd5q2OPY0WjS833V0WhUDNhYSnv3B8DmwPhaxDDpiqnzVVrcArfpARFo1RIuo14wq5XjxAY6pgHUBjcsfEuUPqBV9w0Sg5bVRjiWkzboLYKfqqM7%2FPglsvkESmyg0Vx2KfA9oxCYjk4GxGFvzNeR9ZPP7wRaoJepHQpiSCCzTgPFvDnWVvov7yuZbM5pj0WG6OcUmTuguLLmQQw3Ibj1gd5ccTZ2NWYw3VTJ4PyJFs5N7HXg9snXRsS%2BTPmVr21WMeZDObpOQoOEYv2ruvNVTivOvoKdF3X9CO1ZIx0U&X-Amz-Signature=e41bff17510a8ddde22d136b095a170a85d14ae2cd148d7af130a085b0a53411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BZVSFA6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzvP%2ByxdrGBDaiayHUJwL2hCcrykwtlmrq65CbpAt86AiBrzTS73fhN65v1sEClj5jy3ZxB4mR2bir4RL1CW6dICSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbBzad1oS%2FDrOJDpZKtwD35nLC%2F6S8OhPU02owuxw9QHYco9hOS%2FRv5xXQcaDZ17ImXXZnIGfaWnQOX6wNuBF%2BDJv1il8F%2Bqf0sNxaoGAEQD8pqwa6eEFya297ObszhBnexGaBESyS1GM8jOuXx2%2FYngue%2Bde%2FQtz%2FKaN%2BGmNFYix9vyWSPrShb9JvMvtJSWbIZLCe4ocmm6HONKscfHouJnt7jfPiAe7rkyNvevkFlq9IJ1LzmaI%2FnSD9MEjxdJbJTuuXzyF524pTymoiLfxYwlJf764v4q%2FaONiv%2F%2Buv21L9ROCc1k%2FZYuJifXqRJIsQ9hBqTp7tki%2B5V7H3dYBzcxGaNvzFbNjSOFyKVE5%2FwaI216Y8b63dPmkcYb7QmfuOzQSc%2BBSdhFqImLQIfMeLr9qXOQlBgVqCmZH6G%2FyBTqdcRt7398hv9LKjhU7PU3EC7VZHZ9e9DeKOhrvnkyMkVGfRa0MlRJRirYQnEZaOgkuFbPMAz%2B3PKaGUfIDyq1q5QaqkXi5NMozWyrLaeXy0jekrNeaHAFswnDDz8KRJp791ak9bl1YUNbsO29pDiLnu6Mwv2b6M%2B%2BU58UTFd5q2OPY0WjS833V0WhUDNhYSnv3B8DmwPhaxDDpiqnzVVrcArfpARFo1RIuo14wq5XjxAY6pgHUBjcsfEuUPqBV9w0Sg5bVRjiWkzboLYKfqqM7%2FPglsvkESmyg0Vx2KfA9oxCYjk4GxGFvzNeR9ZPP7wRaoJepHQpiSCCzTgPFvDnWVvov7yuZbM5pj0WG6OcUmTuguLLmQQw3Ibj1gd5ccTZ2NWYw3VTJ4PyJFs5N7HXg9snXRsS%2BTPmVr21WMeZDObpOQoOEYv2ruvNVTivOvoKdF3X9CO1ZIx0U&X-Amz-Signature=0e06155ade23e288a30b7b9ae6d37ae5f4322e5a880a1f03b8b14856747eca87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BZVSFA6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzvP%2ByxdrGBDaiayHUJwL2hCcrykwtlmrq65CbpAt86AiBrzTS73fhN65v1sEClj5jy3ZxB4mR2bir4RL1CW6dICSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbBzad1oS%2FDrOJDpZKtwD35nLC%2F6S8OhPU02owuxw9QHYco9hOS%2FRv5xXQcaDZ17ImXXZnIGfaWnQOX6wNuBF%2BDJv1il8F%2Bqf0sNxaoGAEQD8pqwa6eEFya297ObszhBnexGaBESyS1GM8jOuXx2%2FYngue%2Bde%2FQtz%2FKaN%2BGmNFYix9vyWSPrShb9JvMvtJSWbIZLCe4ocmm6HONKscfHouJnt7jfPiAe7rkyNvevkFlq9IJ1LzmaI%2FnSD9MEjxdJbJTuuXzyF524pTymoiLfxYwlJf764v4q%2FaONiv%2F%2Buv21L9ROCc1k%2FZYuJifXqRJIsQ9hBqTp7tki%2B5V7H3dYBzcxGaNvzFbNjSOFyKVE5%2FwaI216Y8b63dPmkcYb7QmfuOzQSc%2BBSdhFqImLQIfMeLr9qXOQlBgVqCmZH6G%2FyBTqdcRt7398hv9LKjhU7PU3EC7VZHZ9e9DeKOhrvnkyMkVGfRa0MlRJRirYQnEZaOgkuFbPMAz%2B3PKaGUfIDyq1q5QaqkXi5NMozWyrLaeXy0jekrNeaHAFswnDDz8KRJp791ak9bl1YUNbsO29pDiLnu6Mwv2b6M%2B%2BU58UTFd5q2OPY0WjS833V0WhUDNhYSnv3B8DmwPhaxDDpiqnzVVrcArfpARFo1RIuo14wq5XjxAY6pgHUBjcsfEuUPqBV9w0Sg5bVRjiWkzboLYKfqqM7%2FPglsvkESmyg0Vx2KfA9oxCYjk4GxGFvzNeR9ZPP7wRaoJepHQpiSCCzTgPFvDnWVvov7yuZbM5pj0WG6OcUmTuguLLmQQw3Ibj1gd5ccTZ2NWYw3VTJ4PyJFs5N7HXg9snXRsS%2BTPmVr21WMeZDObpOQoOEYv2ruvNVTivOvoKdF3X9CO1ZIx0U&X-Amz-Signature=67c17fe12adacd323ce57a08f5b3d26b3a5178be07f2271fa46ef8e21bf64462&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BZVSFA6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzvP%2ByxdrGBDaiayHUJwL2hCcrykwtlmrq65CbpAt86AiBrzTS73fhN65v1sEClj5jy3ZxB4mR2bir4RL1CW6dICSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbBzad1oS%2FDrOJDpZKtwD35nLC%2F6S8OhPU02owuxw9QHYco9hOS%2FRv5xXQcaDZ17ImXXZnIGfaWnQOX6wNuBF%2BDJv1il8F%2Bqf0sNxaoGAEQD8pqwa6eEFya297ObszhBnexGaBESyS1GM8jOuXx2%2FYngue%2Bde%2FQtz%2FKaN%2BGmNFYix9vyWSPrShb9JvMvtJSWbIZLCe4ocmm6HONKscfHouJnt7jfPiAe7rkyNvevkFlq9IJ1LzmaI%2FnSD9MEjxdJbJTuuXzyF524pTymoiLfxYwlJf764v4q%2FaONiv%2F%2Buv21L9ROCc1k%2FZYuJifXqRJIsQ9hBqTp7tki%2B5V7H3dYBzcxGaNvzFbNjSOFyKVE5%2FwaI216Y8b63dPmkcYb7QmfuOzQSc%2BBSdhFqImLQIfMeLr9qXOQlBgVqCmZH6G%2FyBTqdcRt7398hv9LKjhU7PU3EC7VZHZ9e9DeKOhrvnkyMkVGfRa0MlRJRirYQnEZaOgkuFbPMAz%2B3PKaGUfIDyq1q5QaqkXi5NMozWyrLaeXy0jekrNeaHAFswnDDz8KRJp791ak9bl1YUNbsO29pDiLnu6Mwv2b6M%2B%2BU58UTFd5q2OPY0WjS833V0WhUDNhYSnv3B8DmwPhaxDDpiqnzVVrcArfpARFo1RIuo14wq5XjxAY6pgHUBjcsfEuUPqBV9w0Sg5bVRjiWkzboLYKfqqM7%2FPglsvkESmyg0Vx2KfA9oxCYjk4GxGFvzNeR9ZPP7wRaoJepHQpiSCCzTgPFvDnWVvov7yuZbM5pj0WG6OcUmTuguLLmQQw3Ibj1gd5ccTZ2NWYw3VTJ4PyJFs5N7HXg9snXRsS%2BTPmVr21WMeZDObpOQoOEYv2ruvNVTivOvoKdF3X9CO1ZIx0U&X-Amz-Signature=85eb773d1e227e6f96b3722793a74dbe59c24cd5a5b6238c00aed5ea9afba102&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BZVSFA6%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzvP%2ByxdrGBDaiayHUJwL2hCcrykwtlmrq65CbpAt86AiBrzTS73fhN65v1sEClj5jy3ZxB4mR2bir4RL1CW6dICSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbBzad1oS%2FDrOJDpZKtwD35nLC%2F6S8OhPU02owuxw9QHYco9hOS%2FRv5xXQcaDZ17ImXXZnIGfaWnQOX6wNuBF%2BDJv1il8F%2Bqf0sNxaoGAEQD8pqwa6eEFya297ObszhBnexGaBESyS1GM8jOuXx2%2FYngue%2Bde%2FQtz%2FKaN%2BGmNFYix9vyWSPrShb9JvMvtJSWbIZLCe4ocmm6HONKscfHouJnt7jfPiAe7rkyNvevkFlq9IJ1LzmaI%2FnSD9MEjxdJbJTuuXzyF524pTymoiLfxYwlJf764v4q%2FaONiv%2F%2Buv21L9ROCc1k%2FZYuJifXqRJIsQ9hBqTp7tki%2B5V7H3dYBzcxGaNvzFbNjSOFyKVE5%2FwaI216Y8b63dPmkcYb7QmfuOzQSc%2BBSdhFqImLQIfMeLr9qXOQlBgVqCmZH6G%2FyBTqdcRt7398hv9LKjhU7PU3EC7VZHZ9e9DeKOhrvnkyMkVGfRa0MlRJRirYQnEZaOgkuFbPMAz%2B3PKaGUfIDyq1q5QaqkXi5NMozWyrLaeXy0jekrNeaHAFswnDDz8KRJp791ak9bl1YUNbsO29pDiLnu6Mwv2b6M%2B%2BU58UTFd5q2OPY0WjS833V0WhUDNhYSnv3B8DmwPhaxDDpiqnzVVrcArfpARFo1RIuo14wq5XjxAY6pgHUBjcsfEuUPqBV9w0Sg5bVRjiWkzboLYKfqqM7%2FPglsvkESmyg0Vx2KfA9oxCYjk4GxGFvzNeR9ZPP7wRaoJepHQpiSCCzTgPFvDnWVvov7yuZbM5pj0WG6OcUmTuguLLmQQw3Ibj1gd5ccTZ2NWYw3VTJ4PyJFs5N7HXg9snXRsS%2BTPmVr21WMeZDObpOQoOEYv2ruvNVTivOvoKdF3X9CO1ZIx0U&X-Amz-Signature=f39a269996127c4f8e1eec730836e4ad38a77582c46b88e445bf2676fd1b1f71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
