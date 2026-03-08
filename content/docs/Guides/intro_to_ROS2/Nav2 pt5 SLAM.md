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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLDOKZ26%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQC916YbLc6nTeGq1xuAmjgqECescO70Dk8DpDLcZYe0ygIgC56raMezawKYgFKqIdSOaPw2H9eDY1WGLnA6lmxkhlEq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDCAJ6uc7O4WBBAzaVSrcA%2BSuLNBVzth77ZqH6PTidQiW3x7awnj5oOUFwc%2FPpoLvlzr%2FtUgE4EvvU%2FX3zQqW%2BwEd6f6uQRGJG%2FW0wZelyhQ4AszlKCqwc9knZNyHehxXMxHiu4B6LsfBxpbQmSfsi%2B3rAHovIWy4LrmiX8pDnNB4IMFMKnxyJZgR3ioPyflvVQa4Ch%2FgXT%2Bx1AyR7NFjSUYQNmyytCTbNyv7p5IFdvOXg6QXWa3evQirLMEUtwM8%2BLVHdLFwX%2BrQIVpFGfNf90KOwXMq1NAI10r08UtNv3utS1ek5dWelRjRgAK21NeM5x%2BovPbCIqi1ABvdtQCtSwB1Wnckg9W364G1c5LsWf2635BAr5Y9zhGfPw5cLPVBFEcDde6qZ%2BZwfRLOE1dG758rSkcq7QMDCjfsSuFkDwuIMr5pU%2FKWATCgYmhQDedvRKgzlUvNG0Vle5jcADz1UTpVPPtIK9tkQQgKVevZddZQama4mYU93lf%2BnbYgQi8gW%2BgMM3c43nJS%2Bu5WvUj98l8XUyc6X%2Byoqut7C%2BJz9DAXhXR3RMkbo3jck8uzIolIXBq%2FkO%2B89XTrJ%2Bk%2BULnPmsGLwj3Au9qAmx6N1XBuSRurq65AoS%2B8JDlPOvUCwZ5DTSYupRMVKv7RSvPUMOqcs80GOqUBOa7H8BxBVOsXGYJNSGWMe2QWhJTY1pxWyfXu0lBj9YIATV78VVS3Tz5sHA0fI%2BwKlQssYZqiS4dkrHbi0lgIryf46fOteeFio9xI3ME18jb7F13dVZvylJm4LKSE4pWRkUX8YDwEvTsG6V827Z7PTCsOiwOX2Ey5a8aK3P6vPvsvW0VsHSvLRHBxRPx5TXh%2B0Rn4h2Q0%2BY9l1kahtxWYORjaX%2FdL&X-Amz-Signature=28bdb210b41ae288d9fb0f14a5eb9dd24eb8073be6ab7a996bde973e0d3456ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLDOKZ26%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQC916YbLc6nTeGq1xuAmjgqECescO70Dk8DpDLcZYe0ygIgC56raMezawKYgFKqIdSOaPw2H9eDY1WGLnA6lmxkhlEq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDCAJ6uc7O4WBBAzaVSrcA%2BSuLNBVzth77ZqH6PTidQiW3x7awnj5oOUFwc%2FPpoLvlzr%2FtUgE4EvvU%2FX3zQqW%2BwEd6f6uQRGJG%2FW0wZelyhQ4AszlKCqwc9knZNyHehxXMxHiu4B6LsfBxpbQmSfsi%2B3rAHovIWy4LrmiX8pDnNB4IMFMKnxyJZgR3ioPyflvVQa4Ch%2FgXT%2Bx1AyR7NFjSUYQNmyytCTbNyv7p5IFdvOXg6QXWa3evQirLMEUtwM8%2BLVHdLFwX%2BrQIVpFGfNf90KOwXMq1NAI10r08UtNv3utS1ek5dWelRjRgAK21NeM5x%2BovPbCIqi1ABvdtQCtSwB1Wnckg9W364G1c5LsWf2635BAr5Y9zhGfPw5cLPVBFEcDde6qZ%2BZwfRLOE1dG758rSkcq7QMDCjfsSuFkDwuIMr5pU%2FKWATCgYmhQDedvRKgzlUvNG0Vle5jcADz1UTpVPPtIK9tkQQgKVevZddZQama4mYU93lf%2BnbYgQi8gW%2BgMM3c43nJS%2Bu5WvUj98l8XUyc6X%2Byoqut7C%2BJz9DAXhXR3RMkbo3jck8uzIolIXBq%2FkO%2B89XTrJ%2Bk%2BULnPmsGLwj3Au9qAmx6N1XBuSRurq65AoS%2B8JDlPOvUCwZ5DTSYupRMVKv7RSvPUMOqcs80GOqUBOa7H8BxBVOsXGYJNSGWMe2QWhJTY1pxWyfXu0lBj9YIATV78VVS3Tz5sHA0fI%2BwKlQssYZqiS4dkrHbi0lgIryf46fOteeFio9xI3ME18jb7F13dVZvylJm4LKSE4pWRkUX8YDwEvTsG6V827Z7PTCsOiwOX2Ey5a8aK3P6vPvsvW0VsHSvLRHBxRPx5TXh%2B0Rn4h2Q0%2BY9l1kahtxWYORjaX%2FdL&X-Amz-Signature=848e0b1289181eb0629e3ebaa5d45ff650a53e4e0a5c9f7dbc2f35ae753cd99a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLDOKZ26%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQC916YbLc6nTeGq1xuAmjgqECescO70Dk8DpDLcZYe0ygIgC56raMezawKYgFKqIdSOaPw2H9eDY1WGLnA6lmxkhlEq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDCAJ6uc7O4WBBAzaVSrcA%2BSuLNBVzth77ZqH6PTidQiW3x7awnj5oOUFwc%2FPpoLvlzr%2FtUgE4EvvU%2FX3zQqW%2BwEd6f6uQRGJG%2FW0wZelyhQ4AszlKCqwc9knZNyHehxXMxHiu4B6LsfBxpbQmSfsi%2B3rAHovIWy4LrmiX8pDnNB4IMFMKnxyJZgR3ioPyflvVQa4Ch%2FgXT%2Bx1AyR7NFjSUYQNmyytCTbNyv7p5IFdvOXg6QXWa3evQirLMEUtwM8%2BLVHdLFwX%2BrQIVpFGfNf90KOwXMq1NAI10r08UtNv3utS1ek5dWelRjRgAK21NeM5x%2BovPbCIqi1ABvdtQCtSwB1Wnckg9W364G1c5LsWf2635BAr5Y9zhGfPw5cLPVBFEcDde6qZ%2BZwfRLOE1dG758rSkcq7QMDCjfsSuFkDwuIMr5pU%2FKWATCgYmhQDedvRKgzlUvNG0Vle5jcADz1UTpVPPtIK9tkQQgKVevZddZQama4mYU93lf%2BnbYgQi8gW%2BgMM3c43nJS%2Bu5WvUj98l8XUyc6X%2Byoqut7C%2BJz9DAXhXR3RMkbo3jck8uzIolIXBq%2FkO%2B89XTrJ%2Bk%2BULnPmsGLwj3Au9qAmx6N1XBuSRurq65AoS%2B8JDlPOvUCwZ5DTSYupRMVKv7RSvPUMOqcs80GOqUBOa7H8BxBVOsXGYJNSGWMe2QWhJTY1pxWyfXu0lBj9YIATV78VVS3Tz5sHA0fI%2BwKlQssYZqiS4dkrHbi0lgIryf46fOteeFio9xI3ME18jb7F13dVZvylJm4LKSE4pWRkUX8YDwEvTsG6V827Z7PTCsOiwOX2Ey5a8aK3P6vPvsvW0VsHSvLRHBxRPx5TXh%2B0Rn4h2Q0%2BY9l1kahtxWYORjaX%2FdL&X-Amz-Signature=654f6d843ef8c45feb1506af7df873c22c0f657fa2ff7e30410af9e7a9a4390b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLDOKZ26%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQC916YbLc6nTeGq1xuAmjgqECescO70Dk8DpDLcZYe0ygIgC56raMezawKYgFKqIdSOaPw2H9eDY1WGLnA6lmxkhlEq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDCAJ6uc7O4WBBAzaVSrcA%2BSuLNBVzth77ZqH6PTidQiW3x7awnj5oOUFwc%2FPpoLvlzr%2FtUgE4EvvU%2FX3zQqW%2BwEd6f6uQRGJG%2FW0wZelyhQ4AszlKCqwc9knZNyHehxXMxHiu4B6LsfBxpbQmSfsi%2B3rAHovIWy4LrmiX8pDnNB4IMFMKnxyJZgR3ioPyflvVQa4Ch%2FgXT%2Bx1AyR7NFjSUYQNmyytCTbNyv7p5IFdvOXg6QXWa3evQirLMEUtwM8%2BLVHdLFwX%2BrQIVpFGfNf90KOwXMq1NAI10r08UtNv3utS1ek5dWelRjRgAK21NeM5x%2BovPbCIqi1ABvdtQCtSwB1Wnckg9W364G1c5LsWf2635BAr5Y9zhGfPw5cLPVBFEcDde6qZ%2BZwfRLOE1dG758rSkcq7QMDCjfsSuFkDwuIMr5pU%2FKWATCgYmhQDedvRKgzlUvNG0Vle5jcADz1UTpVPPtIK9tkQQgKVevZddZQama4mYU93lf%2BnbYgQi8gW%2BgMM3c43nJS%2Bu5WvUj98l8XUyc6X%2Byoqut7C%2BJz9DAXhXR3RMkbo3jck8uzIolIXBq%2FkO%2B89XTrJ%2Bk%2BULnPmsGLwj3Au9qAmx6N1XBuSRurq65AoS%2B8JDlPOvUCwZ5DTSYupRMVKv7RSvPUMOqcs80GOqUBOa7H8BxBVOsXGYJNSGWMe2QWhJTY1pxWyfXu0lBj9YIATV78VVS3Tz5sHA0fI%2BwKlQssYZqiS4dkrHbi0lgIryf46fOteeFio9xI3ME18jb7F13dVZvylJm4LKSE4pWRkUX8YDwEvTsG6V827Z7PTCsOiwOX2Ey5a8aK3P6vPvsvW0VsHSvLRHBxRPx5TXh%2B0Rn4h2Q0%2BY9l1kahtxWYORjaX%2FdL&X-Amz-Signature=f44a7b2a487766068d3c329e85cdbe72cdb662045e02edb2b6a5d93ea06e6e6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLDOKZ26%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQC916YbLc6nTeGq1xuAmjgqECescO70Dk8DpDLcZYe0ygIgC56raMezawKYgFKqIdSOaPw2H9eDY1WGLnA6lmxkhlEq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDCAJ6uc7O4WBBAzaVSrcA%2BSuLNBVzth77ZqH6PTidQiW3x7awnj5oOUFwc%2FPpoLvlzr%2FtUgE4EvvU%2FX3zQqW%2BwEd6f6uQRGJG%2FW0wZelyhQ4AszlKCqwc9knZNyHehxXMxHiu4B6LsfBxpbQmSfsi%2B3rAHovIWy4LrmiX8pDnNB4IMFMKnxyJZgR3ioPyflvVQa4Ch%2FgXT%2Bx1AyR7NFjSUYQNmyytCTbNyv7p5IFdvOXg6QXWa3evQirLMEUtwM8%2BLVHdLFwX%2BrQIVpFGfNf90KOwXMq1NAI10r08UtNv3utS1ek5dWelRjRgAK21NeM5x%2BovPbCIqi1ABvdtQCtSwB1Wnckg9W364G1c5LsWf2635BAr5Y9zhGfPw5cLPVBFEcDde6qZ%2BZwfRLOE1dG758rSkcq7QMDCjfsSuFkDwuIMr5pU%2FKWATCgYmhQDedvRKgzlUvNG0Vle5jcADz1UTpVPPtIK9tkQQgKVevZddZQama4mYU93lf%2BnbYgQi8gW%2BgMM3c43nJS%2Bu5WvUj98l8XUyc6X%2Byoqut7C%2BJz9DAXhXR3RMkbo3jck8uzIolIXBq%2FkO%2B89XTrJ%2Bk%2BULnPmsGLwj3Au9qAmx6N1XBuSRurq65AoS%2B8JDlPOvUCwZ5DTSYupRMVKv7RSvPUMOqcs80GOqUBOa7H8BxBVOsXGYJNSGWMe2QWhJTY1pxWyfXu0lBj9YIATV78VVS3Tz5sHA0fI%2BwKlQssYZqiS4dkrHbi0lgIryf46fOteeFio9xI3ME18jb7F13dVZvylJm4LKSE4pWRkUX8YDwEvTsG6V827Z7PTCsOiwOX2Ey5a8aK3P6vPvsvW0VsHSvLRHBxRPx5TXh%2B0Rn4h2Q0%2BY9l1kahtxWYORjaX%2FdL&X-Amz-Signature=9591cce070f9de9ceeccceb91bdea47d5cc1c40b86e1f05426c81e8d4d12c5dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLDOKZ26%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQC916YbLc6nTeGq1xuAmjgqECescO70Dk8DpDLcZYe0ygIgC56raMezawKYgFKqIdSOaPw2H9eDY1WGLnA6lmxkhlEq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDCAJ6uc7O4WBBAzaVSrcA%2BSuLNBVzth77ZqH6PTidQiW3x7awnj5oOUFwc%2FPpoLvlzr%2FtUgE4EvvU%2FX3zQqW%2BwEd6f6uQRGJG%2FW0wZelyhQ4AszlKCqwc9knZNyHehxXMxHiu4B6LsfBxpbQmSfsi%2B3rAHovIWy4LrmiX8pDnNB4IMFMKnxyJZgR3ioPyflvVQa4Ch%2FgXT%2Bx1AyR7NFjSUYQNmyytCTbNyv7p5IFdvOXg6QXWa3evQirLMEUtwM8%2BLVHdLFwX%2BrQIVpFGfNf90KOwXMq1NAI10r08UtNv3utS1ek5dWelRjRgAK21NeM5x%2BovPbCIqi1ABvdtQCtSwB1Wnckg9W364G1c5LsWf2635BAr5Y9zhGfPw5cLPVBFEcDde6qZ%2BZwfRLOE1dG758rSkcq7QMDCjfsSuFkDwuIMr5pU%2FKWATCgYmhQDedvRKgzlUvNG0Vle5jcADz1UTpVPPtIK9tkQQgKVevZddZQama4mYU93lf%2BnbYgQi8gW%2BgMM3c43nJS%2Bu5WvUj98l8XUyc6X%2Byoqut7C%2BJz9DAXhXR3RMkbo3jck8uzIolIXBq%2FkO%2B89XTrJ%2Bk%2BULnPmsGLwj3Au9qAmx6N1XBuSRurq65AoS%2B8JDlPOvUCwZ5DTSYupRMVKv7RSvPUMOqcs80GOqUBOa7H8BxBVOsXGYJNSGWMe2QWhJTY1pxWyfXu0lBj9YIATV78VVS3Tz5sHA0fI%2BwKlQssYZqiS4dkrHbi0lgIryf46fOteeFio9xI3ME18jb7F13dVZvylJm4LKSE4pWRkUX8YDwEvTsG6V827Z7PTCsOiwOX2Ey5a8aK3P6vPvsvW0VsHSvLRHBxRPx5TXh%2B0Rn4h2Q0%2BY9l1kahtxWYORjaX%2FdL&X-Amz-Signature=7ae04677bea653d1456f7fab5a9c75f8bb26aa085f91de0d146fb370fde69773&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLDOKZ26%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQC916YbLc6nTeGq1xuAmjgqECescO70Dk8DpDLcZYe0ygIgC56raMezawKYgFKqIdSOaPw2H9eDY1WGLnA6lmxkhlEq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDCAJ6uc7O4WBBAzaVSrcA%2BSuLNBVzth77ZqH6PTidQiW3x7awnj5oOUFwc%2FPpoLvlzr%2FtUgE4EvvU%2FX3zQqW%2BwEd6f6uQRGJG%2FW0wZelyhQ4AszlKCqwc9knZNyHehxXMxHiu4B6LsfBxpbQmSfsi%2B3rAHovIWy4LrmiX8pDnNB4IMFMKnxyJZgR3ioPyflvVQa4Ch%2FgXT%2Bx1AyR7NFjSUYQNmyytCTbNyv7p5IFdvOXg6QXWa3evQirLMEUtwM8%2BLVHdLFwX%2BrQIVpFGfNf90KOwXMq1NAI10r08UtNv3utS1ek5dWelRjRgAK21NeM5x%2BovPbCIqi1ABvdtQCtSwB1Wnckg9W364G1c5LsWf2635BAr5Y9zhGfPw5cLPVBFEcDde6qZ%2BZwfRLOE1dG758rSkcq7QMDCjfsSuFkDwuIMr5pU%2FKWATCgYmhQDedvRKgzlUvNG0Vle5jcADz1UTpVPPtIK9tkQQgKVevZddZQama4mYU93lf%2BnbYgQi8gW%2BgMM3c43nJS%2Bu5WvUj98l8XUyc6X%2Byoqut7C%2BJz9DAXhXR3RMkbo3jck8uzIolIXBq%2FkO%2B89XTrJ%2Bk%2BULnPmsGLwj3Au9qAmx6N1XBuSRurq65AoS%2B8JDlPOvUCwZ5DTSYupRMVKv7RSvPUMOqcs80GOqUBOa7H8BxBVOsXGYJNSGWMe2QWhJTY1pxWyfXu0lBj9YIATV78VVS3Tz5sHA0fI%2BwKlQssYZqiS4dkrHbi0lgIryf46fOteeFio9xI3ME18jb7F13dVZvylJm4LKSE4pWRkUX8YDwEvTsG6V827Z7PTCsOiwOX2Ey5a8aK3P6vPvsvW0VsHSvLRHBxRPx5TXh%2B0Rn4h2Q0%2BY9l1kahtxWYORjaX%2FdL&X-Amz-Signature=45fb4eb9af753896492c6092bccaae3109e0f81aea185502b3f0647b2143fdc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLDOKZ26%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQC916YbLc6nTeGq1xuAmjgqECescO70Dk8DpDLcZYe0ygIgC56raMezawKYgFKqIdSOaPw2H9eDY1WGLnA6lmxkhlEq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDCAJ6uc7O4WBBAzaVSrcA%2BSuLNBVzth77ZqH6PTidQiW3x7awnj5oOUFwc%2FPpoLvlzr%2FtUgE4EvvU%2FX3zQqW%2BwEd6f6uQRGJG%2FW0wZelyhQ4AszlKCqwc9knZNyHehxXMxHiu4B6LsfBxpbQmSfsi%2B3rAHovIWy4LrmiX8pDnNB4IMFMKnxyJZgR3ioPyflvVQa4Ch%2FgXT%2Bx1AyR7NFjSUYQNmyytCTbNyv7p5IFdvOXg6QXWa3evQirLMEUtwM8%2BLVHdLFwX%2BrQIVpFGfNf90KOwXMq1NAI10r08UtNv3utS1ek5dWelRjRgAK21NeM5x%2BovPbCIqi1ABvdtQCtSwB1Wnckg9W364G1c5LsWf2635BAr5Y9zhGfPw5cLPVBFEcDde6qZ%2BZwfRLOE1dG758rSkcq7QMDCjfsSuFkDwuIMr5pU%2FKWATCgYmhQDedvRKgzlUvNG0Vle5jcADz1UTpVPPtIK9tkQQgKVevZddZQama4mYU93lf%2BnbYgQi8gW%2BgMM3c43nJS%2Bu5WvUj98l8XUyc6X%2Byoqut7C%2BJz9DAXhXR3RMkbo3jck8uzIolIXBq%2FkO%2B89XTrJ%2Bk%2BULnPmsGLwj3Au9qAmx6N1XBuSRurq65AoS%2B8JDlPOvUCwZ5DTSYupRMVKv7RSvPUMOqcs80GOqUBOa7H8BxBVOsXGYJNSGWMe2QWhJTY1pxWyfXu0lBj9YIATV78VVS3Tz5sHA0fI%2BwKlQssYZqiS4dkrHbi0lgIryf46fOteeFio9xI3ME18jb7F13dVZvylJm4LKSE4pWRkUX8YDwEvTsG6V827Z7PTCsOiwOX2Ey5a8aK3P6vPvsvW0VsHSvLRHBxRPx5TXh%2B0Rn4h2Q0%2BY9l1kahtxWYORjaX%2FdL&X-Amz-Signature=a3265afe9e68e9ac06761bc3074ecd7c325d70ff99276aa3b60b844b5c036a4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLDOKZ26%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQC916YbLc6nTeGq1xuAmjgqECescO70Dk8DpDLcZYe0ygIgC56raMezawKYgFKqIdSOaPw2H9eDY1WGLnA6lmxkhlEq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDCAJ6uc7O4WBBAzaVSrcA%2BSuLNBVzth77ZqH6PTidQiW3x7awnj5oOUFwc%2FPpoLvlzr%2FtUgE4EvvU%2FX3zQqW%2BwEd6f6uQRGJG%2FW0wZelyhQ4AszlKCqwc9knZNyHehxXMxHiu4B6LsfBxpbQmSfsi%2B3rAHovIWy4LrmiX8pDnNB4IMFMKnxyJZgR3ioPyflvVQa4Ch%2FgXT%2Bx1AyR7NFjSUYQNmyytCTbNyv7p5IFdvOXg6QXWa3evQirLMEUtwM8%2BLVHdLFwX%2BrQIVpFGfNf90KOwXMq1NAI10r08UtNv3utS1ek5dWelRjRgAK21NeM5x%2BovPbCIqi1ABvdtQCtSwB1Wnckg9W364G1c5LsWf2635BAr5Y9zhGfPw5cLPVBFEcDde6qZ%2BZwfRLOE1dG758rSkcq7QMDCjfsSuFkDwuIMr5pU%2FKWATCgYmhQDedvRKgzlUvNG0Vle5jcADz1UTpVPPtIK9tkQQgKVevZddZQama4mYU93lf%2BnbYgQi8gW%2BgMM3c43nJS%2Bu5WvUj98l8XUyc6X%2Byoqut7C%2BJz9DAXhXR3RMkbo3jck8uzIolIXBq%2FkO%2B89XTrJ%2Bk%2BULnPmsGLwj3Au9qAmx6N1XBuSRurq65AoS%2B8JDlPOvUCwZ5DTSYupRMVKv7RSvPUMOqcs80GOqUBOa7H8BxBVOsXGYJNSGWMe2QWhJTY1pxWyfXu0lBj9YIATV78VVS3Tz5sHA0fI%2BwKlQssYZqiS4dkrHbi0lgIryf46fOteeFio9xI3ME18jb7F13dVZvylJm4LKSE4pWRkUX8YDwEvTsG6V827Z7PTCsOiwOX2Ey5a8aK3P6vPvsvW0VsHSvLRHBxRPx5TXh%2B0Rn4h2Q0%2BY9l1kahtxWYORjaX%2FdL&X-Amz-Signature=dc9e5372d01186fd71566be49c267e81a19ba7065ab58c41fa611cbd805c7f2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLDOKZ26%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQC916YbLc6nTeGq1xuAmjgqECescO70Dk8DpDLcZYe0ygIgC56raMezawKYgFKqIdSOaPw2H9eDY1WGLnA6lmxkhlEq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDCAJ6uc7O4WBBAzaVSrcA%2BSuLNBVzth77ZqH6PTidQiW3x7awnj5oOUFwc%2FPpoLvlzr%2FtUgE4EvvU%2FX3zQqW%2BwEd6f6uQRGJG%2FW0wZelyhQ4AszlKCqwc9knZNyHehxXMxHiu4B6LsfBxpbQmSfsi%2B3rAHovIWy4LrmiX8pDnNB4IMFMKnxyJZgR3ioPyflvVQa4Ch%2FgXT%2Bx1AyR7NFjSUYQNmyytCTbNyv7p5IFdvOXg6QXWa3evQirLMEUtwM8%2BLVHdLFwX%2BrQIVpFGfNf90KOwXMq1NAI10r08UtNv3utS1ek5dWelRjRgAK21NeM5x%2BovPbCIqi1ABvdtQCtSwB1Wnckg9W364G1c5LsWf2635BAr5Y9zhGfPw5cLPVBFEcDde6qZ%2BZwfRLOE1dG758rSkcq7QMDCjfsSuFkDwuIMr5pU%2FKWATCgYmhQDedvRKgzlUvNG0Vle5jcADz1UTpVPPtIK9tkQQgKVevZddZQama4mYU93lf%2BnbYgQi8gW%2BgMM3c43nJS%2Bu5WvUj98l8XUyc6X%2Byoqut7C%2BJz9DAXhXR3RMkbo3jck8uzIolIXBq%2FkO%2B89XTrJ%2Bk%2BULnPmsGLwj3Au9qAmx6N1XBuSRurq65AoS%2B8JDlPOvUCwZ5DTSYupRMVKv7RSvPUMOqcs80GOqUBOa7H8BxBVOsXGYJNSGWMe2QWhJTY1pxWyfXu0lBj9YIATV78VVS3Tz5sHA0fI%2BwKlQssYZqiS4dkrHbi0lgIryf46fOteeFio9xI3ME18jb7F13dVZvylJm4LKSE4pWRkUX8YDwEvTsG6V827Z7PTCsOiwOX2Ey5a8aK3P6vPvsvW0VsHSvLRHBxRPx5TXh%2B0Rn4h2Q0%2BY9l1kahtxWYORjaX%2FdL&X-Amz-Signature=9ed464f5289b2d10fea533d05922a9e45307924c6568527f9a141f68bb758f68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLDOKZ26%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQC916YbLc6nTeGq1xuAmjgqECescO70Dk8DpDLcZYe0ygIgC56raMezawKYgFKqIdSOaPw2H9eDY1WGLnA6lmxkhlEq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDCAJ6uc7O4WBBAzaVSrcA%2BSuLNBVzth77ZqH6PTidQiW3x7awnj5oOUFwc%2FPpoLvlzr%2FtUgE4EvvU%2FX3zQqW%2BwEd6f6uQRGJG%2FW0wZelyhQ4AszlKCqwc9knZNyHehxXMxHiu4B6LsfBxpbQmSfsi%2B3rAHovIWy4LrmiX8pDnNB4IMFMKnxyJZgR3ioPyflvVQa4Ch%2FgXT%2Bx1AyR7NFjSUYQNmyytCTbNyv7p5IFdvOXg6QXWa3evQirLMEUtwM8%2BLVHdLFwX%2BrQIVpFGfNf90KOwXMq1NAI10r08UtNv3utS1ek5dWelRjRgAK21NeM5x%2BovPbCIqi1ABvdtQCtSwB1Wnckg9W364G1c5LsWf2635BAr5Y9zhGfPw5cLPVBFEcDde6qZ%2BZwfRLOE1dG758rSkcq7QMDCjfsSuFkDwuIMr5pU%2FKWATCgYmhQDedvRKgzlUvNG0Vle5jcADz1UTpVPPtIK9tkQQgKVevZddZQama4mYU93lf%2BnbYgQi8gW%2BgMM3c43nJS%2Bu5WvUj98l8XUyc6X%2Byoqut7C%2BJz9DAXhXR3RMkbo3jck8uzIolIXBq%2FkO%2B89XTrJ%2Bk%2BULnPmsGLwj3Au9qAmx6N1XBuSRurq65AoS%2B8JDlPOvUCwZ5DTSYupRMVKv7RSvPUMOqcs80GOqUBOa7H8BxBVOsXGYJNSGWMe2QWhJTY1pxWyfXu0lBj9YIATV78VVS3Tz5sHA0fI%2BwKlQssYZqiS4dkrHbi0lgIryf46fOteeFio9xI3ME18jb7F13dVZvylJm4LKSE4pWRkUX8YDwEvTsG6V827Z7PTCsOiwOX2Ey5a8aK3P6vPvsvW0VsHSvLRHBxRPx5TXh%2B0Rn4h2Q0%2BY9l1kahtxWYORjaX%2FdL&X-Amz-Signature=9d92f4459b3fd9e2c88265d1a0160a65d2a744bbdd639e75eb40ab87f73421e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLDOKZ26%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQC916YbLc6nTeGq1xuAmjgqECescO70Dk8DpDLcZYe0ygIgC56raMezawKYgFKqIdSOaPw2H9eDY1WGLnA6lmxkhlEq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDCAJ6uc7O4WBBAzaVSrcA%2BSuLNBVzth77ZqH6PTidQiW3x7awnj5oOUFwc%2FPpoLvlzr%2FtUgE4EvvU%2FX3zQqW%2BwEd6f6uQRGJG%2FW0wZelyhQ4AszlKCqwc9knZNyHehxXMxHiu4B6LsfBxpbQmSfsi%2B3rAHovIWy4LrmiX8pDnNB4IMFMKnxyJZgR3ioPyflvVQa4Ch%2FgXT%2Bx1AyR7NFjSUYQNmyytCTbNyv7p5IFdvOXg6QXWa3evQirLMEUtwM8%2BLVHdLFwX%2BrQIVpFGfNf90KOwXMq1NAI10r08UtNv3utS1ek5dWelRjRgAK21NeM5x%2BovPbCIqi1ABvdtQCtSwB1Wnckg9W364G1c5LsWf2635BAr5Y9zhGfPw5cLPVBFEcDde6qZ%2BZwfRLOE1dG758rSkcq7QMDCjfsSuFkDwuIMr5pU%2FKWATCgYmhQDedvRKgzlUvNG0Vle5jcADz1UTpVPPtIK9tkQQgKVevZddZQama4mYU93lf%2BnbYgQi8gW%2BgMM3c43nJS%2Bu5WvUj98l8XUyc6X%2Byoqut7C%2BJz9DAXhXR3RMkbo3jck8uzIolIXBq%2FkO%2B89XTrJ%2Bk%2BULnPmsGLwj3Au9qAmx6N1XBuSRurq65AoS%2B8JDlPOvUCwZ5DTSYupRMVKv7RSvPUMOqcs80GOqUBOa7H8BxBVOsXGYJNSGWMe2QWhJTY1pxWyfXu0lBj9YIATV78VVS3Tz5sHA0fI%2BwKlQssYZqiS4dkrHbi0lgIryf46fOteeFio9xI3ME18jb7F13dVZvylJm4LKSE4pWRkUX8YDwEvTsG6V827Z7PTCsOiwOX2Ey5a8aK3P6vPvsvW0VsHSvLRHBxRPx5TXh%2B0Rn4h2Q0%2BY9l1kahtxWYORjaX%2FdL&X-Amz-Signature=4f38c652270b344438d7770c134192b81e4ae31b765e0af662db8a8e7f0a1a69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLDOKZ26%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQC916YbLc6nTeGq1xuAmjgqECescO70Dk8DpDLcZYe0ygIgC56raMezawKYgFKqIdSOaPw2H9eDY1WGLnA6lmxkhlEq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDCAJ6uc7O4WBBAzaVSrcA%2BSuLNBVzth77ZqH6PTidQiW3x7awnj5oOUFwc%2FPpoLvlzr%2FtUgE4EvvU%2FX3zQqW%2BwEd6f6uQRGJG%2FW0wZelyhQ4AszlKCqwc9knZNyHehxXMxHiu4B6LsfBxpbQmSfsi%2B3rAHovIWy4LrmiX8pDnNB4IMFMKnxyJZgR3ioPyflvVQa4Ch%2FgXT%2Bx1AyR7NFjSUYQNmyytCTbNyv7p5IFdvOXg6QXWa3evQirLMEUtwM8%2BLVHdLFwX%2BrQIVpFGfNf90KOwXMq1NAI10r08UtNv3utS1ek5dWelRjRgAK21NeM5x%2BovPbCIqi1ABvdtQCtSwB1Wnckg9W364G1c5LsWf2635BAr5Y9zhGfPw5cLPVBFEcDde6qZ%2BZwfRLOE1dG758rSkcq7QMDCjfsSuFkDwuIMr5pU%2FKWATCgYmhQDedvRKgzlUvNG0Vle5jcADz1UTpVPPtIK9tkQQgKVevZddZQama4mYU93lf%2BnbYgQi8gW%2BgMM3c43nJS%2Bu5WvUj98l8XUyc6X%2Byoqut7C%2BJz9DAXhXR3RMkbo3jck8uzIolIXBq%2FkO%2B89XTrJ%2Bk%2BULnPmsGLwj3Au9qAmx6N1XBuSRurq65AoS%2B8JDlPOvUCwZ5DTSYupRMVKv7RSvPUMOqcs80GOqUBOa7H8BxBVOsXGYJNSGWMe2QWhJTY1pxWyfXu0lBj9YIATV78VVS3Tz5sHA0fI%2BwKlQssYZqiS4dkrHbi0lgIryf46fOteeFio9xI3ME18jb7F13dVZvylJm4LKSE4pWRkUX8YDwEvTsG6V827Z7PTCsOiwOX2Ey5a8aK3P6vPvsvW0VsHSvLRHBxRPx5TXh%2B0Rn4h2Q0%2BY9l1kahtxWYORjaX%2FdL&X-Amz-Signature=5324f965b09528b3a9e6e36c69a32afa5ac98161ab8927a430905dda2559825a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLDOKZ26%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIQC916YbLc6nTeGq1xuAmjgqECescO70Dk8DpDLcZYe0ygIgC56raMezawKYgFKqIdSOaPw2H9eDY1WGLnA6lmxkhlEq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDCAJ6uc7O4WBBAzaVSrcA%2BSuLNBVzth77ZqH6PTidQiW3x7awnj5oOUFwc%2FPpoLvlzr%2FtUgE4EvvU%2FX3zQqW%2BwEd6f6uQRGJG%2FW0wZelyhQ4AszlKCqwc9knZNyHehxXMxHiu4B6LsfBxpbQmSfsi%2B3rAHovIWy4LrmiX8pDnNB4IMFMKnxyJZgR3ioPyflvVQa4Ch%2FgXT%2Bx1AyR7NFjSUYQNmyytCTbNyv7p5IFdvOXg6QXWa3evQirLMEUtwM8%2BLVHdLFwX%2BrQIVpFGfNf90KOwXMq1NAI10r08UtNv3utS1ek5dWelRjRgAK21NeM5x%2BovPbCIqi1ABvdtQCtSwB1Wnckg9W364G1c5LsWf2635BAr5Y9zhGfPw5cLPVBFEcDde6qZ%2BZwfRLOE1dG758rSkcq7QMDCjfsSuFkDwuIMr5pU%2FKWATCgYmhQDedvRKgzlUvNG0Vle5jcADz1UTpVPPtIK9tkQQgKVevZddZQama4mYU93lf%2BnbYgQi8gW%2BgMM3c43nJS%2Bu5WvUj98l8XUyc6X%2Byoqut7C%2BJz9DAXhXR3RMkbo3jck8uzIolIXBq%2FkO%2B89XTrJ%2Bk%2BULnPmsGLwj3Au9qAmx6N1XBuSRurq65AoS%2B8JDlPOvUCwZ5DTSYupRMVKv7RSvPUMOqcs80GOqUBOa7H8BxBVOsXGYJNSGWMe2QWhJTY1pxWyfXu0lBj9YIATV78VVS3Tz5sHA0fI%2BwKlQssYZqiS4dkrHbi0lgIryf46fOteeFio9xI3ME18jb7F13dVZvylJm4LKSE4pWRkUX8YDwEvTsG6V827Z7PTCsOiwOX2Ey5a8aK3P6vPvsvW0VsHSvLRHBxRPx5TXh%2B0Rn4h2Q0%2BY9l1kahtxWYORjaX%2FdL&X-Amz-Signature=0cdbf2f78d0f5bab05711cbf8ce06700f15492daecdec8e8638d64ed22d58e42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
