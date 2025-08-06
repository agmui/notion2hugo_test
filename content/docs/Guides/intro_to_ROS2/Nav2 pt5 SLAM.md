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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGE3KWC4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDgMcatDswEPYXWZXXG6znYnZQImbKerwRiOA%2Bdj6XIYQIhANryKxDOuK32Pq%2B%2BFh4OZcC%2FqL7wVcb0yuuotedVvaKeKv8DCHUQABoMNjM3NDIzMTgzODA1IgzKbWkF8DlXGXloyMwq3ANXCxbUtCutnrId9vHputiSZ6bg2MIIg5t4tEt1F4K12r5%2FpoMMmLuITs%2Bm6vXgaYYOENz%2B7kZMzvAEwsgXdS5NQhuGzTrhZXDtn3ph%2BXplsvaplNv2m1p9eNg03XAdZfhmdQaprl6qhbM3MOCL6HDJyAOlbSMtEeJm5CRcxHurKFcTm8crron7Td%2FShwEHE1mh9qZ%2B4oKOgaSwtl10pC59EKmkab3a4%2BGVP42cjNK3Uy2YXEIlHuKd3HqRgg2sBGEL6V1K57ovkCR40kSnzt3hdIXUpKivaZ0Myx%2B%2BIlFFR8CrZ6Bz69OR8fxsQ6ww5zdUtR%2FjoEjFM2RmD5oddmgJY4n%2B9YiBrZVzkNi8IhcG3EU8ItwLtVxg9GNxpRxvcP3%2BqIH2sRXD87f7ApIASn5cSQIpqOuwhqsqNkkWxJ0lY8Qf9BTefRWxZFKdP1zW313MS3iGc3PWFjv98QK5m60lGTyB9gFkWz0MkMaj6hmyxxovI%2Bc%2BdIMS3p45CwC1y6uhS5%2BBe0Miei4MmC4ajAhYu8pLjtPIOeQHeQwAfmeVFajWDEPKG1L5Yf2fvbcnwpqyyrDqcxZ3%2B6PohMERdziRIVFwT5X6IbsbeCLhlW7LYMvjE0FpKGYzcg3viTC4hc3EBjqkASWIswUztUQMbt35n75%2FVCBVtO3hmXyFoMddeVWFn9kPMZJymIMI4nSr0z3ooGwuBgI%2FykzYpt19Bj4fUKmGSzecCkNT96f3nLWf2vYnlv%2BAWd6kagsdUPbG7uDsSfoJ%2FjCN%2FkXFeiHpdhuUvIE0hd7qgfqyQO33qim5hetPKKUVy5%2FT8EiysW4ZaW1%2Bm9P4KshnEpajJjeMiKeEfiNLzs8Sf%2BmB&X-Amz-Signature=c30dde310798ef078c340f4162d0ca01c6f427ebcce8f2e4d2dc7f836f65ae5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGE3KWC4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDgMcatDswEPYXWZXXG6znYnZQImbKerwRiOA%2Bdj6XIYQIhANryKxDOuK32Pq%2B%2BFh4OZcC%2FqL7wVcb0yuuotedVvaKeKv8DCHUQABoMNjM3NDIzMTgzODA1IgzKbWkF8DlXGXloyMwq3ANXCxbUtCutnrId9vHputiSZ6bg2MIIg5t4tEt1F4K12r5%2FpoMMmLuITs%2Bm6vXgaYYOENz%2B7kZMzvAEwsgXdS5NQhuGzTrhZXDtn3ph%2BXplsvaplNv2m1p9eNg03XAdZfhmdQaprl6qhbM3MOCL6HDJyAOlbSMtEeJm5CRcxHurKFcTm8crron7Td%2FShwEHE1mh9qZ%2B4oKOgaSwtl10pC59EKmkab3a4%2BGVP42cjNK3Uy2YXEIlHuKd3HqRgg2sBGEL6V1K57ovkCR40kSnzt3hdIXUpKivaZ0Myx%2B%2BIlFFR8CrZ6Bz69OR8fxsQ6ww5zdUtR%2FjoEjFM2RmD5oddmgJY4n%2B9YiBrZVzkNi8IhcG3EU8ItwLtVxg9GNxpRxvcP3%2BqIH2sRXD87f7ApIASn5cSQIpqOuwhqsqNkkWxJ0lY8Qf9BTefRWxZFKdP1zW313MS3iGc3PWFjv98QK5m60lGTyB9gFkWz0MkMaj6hmyxxovI%2Bc%2BdIMS3p45CwC1y6uhS5%2BBe0Miei4MmC4ajAhYu8pLjtPIOeQHeQwAfmeVFajWDEPKG1L5Yf2fvbcnwpqyyrDqcxZ3%2B6PohMERdziRIVFwT5X6IbsbeCLhlW7LYMvjE0FpKGYzcg3viTC4hc3EBjqkASWIswUztUQMbt35n75%2FVCBVtO3hmXyFoMddeVWFn9kPMZJymIMI4nSr0z3ooGwuBgI%2FykzYpt19Bj4fUKmGSzecCkNT96f3nLWf2vYnlv%2BAWd6kagsdUPbG7uDsSfoJ%2FjCN%2FkXFeiHpdhuUvIE0hd7qgfqyQO33qim5hetPKKUVy5%2FT8EiysW4ZaW1%2Bm9P4KshnEpajJjeMiKeEfiNLzs8Sf%2BmB&X-Amz-Signature=1d7321bfa82820a6e70f64654bf62573fe78534546e3b9ca7c510b8fac2fec90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGE3KWC4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDgMcatDswEPYXWZXXG6znYnZQImbKerwRiOA%2Bdj6XIYQIhANryKxDOuK32Pq%2B%2BFh4OZcC%2FqL7wVcb0yuuotedVvaKeKv8DCHUQABoMNjM3NDIzMTgzODA1IgzKbWkF8DlXGXloyMwq3ANXCxbUtCutnrId9vHputiSZ6bg2MIIg5t4tEt1F4K12r5%2FpoMMmLuITs%2Bm6vXgaYYOENz%2B7kZMzvAEwsgXdS5NQhuGzTrhZXDtn3ph%2BXplsvaplNv2m1p9eNg03XAdZfhmdQaprl6qhbM3MOCL6HDJyAOlbSMtEeJm5CRcxHurKFcTm8crron7Td%2FShwEHE1mh9qZ%2B4oKOgaSwtl10pC59EKmkab3a4%2BGVP42cjNK3Uy2YXEIlHuKd3HqRgg2sBGEL6V1K57ovkCR40kSnzt3hdIXUpKivaZ0Myx%2B%2BIlFFR8CrZ6Bz69OR8fxsQ6ww5zdUtR%2FjoEjFM2RmD5oddmgJY4n%2B9YiBrZVzkNi8IhcG3EU8ItwLtVxg9GNxpRxvcP3%2BqIH2sRXD87f7ApIASn5cSQIpqOuwhqsqNkkWxJ0lY8Qf9BTefRWxZFKdP1zW313MS3iGc3PWFjv98QK5m60lGTyB9gFkWz0MkMaj6hmyxxovI%2Bc%2BdIMS3p45CwC1y6uhS5%2BBe0Miei4MmC4ajAhYu8pLjtPIOeQHeQwAfmeVFajWDEPKG1L5Yf2fvbcnwpqyyrDqcxZ3%2B6PohMERdziRIVFwT5X6IbsbeCLhlW7LYMvjE0FpKGYzcg3viTC4hc3EBjqkASWIswUztUQMbt35n75%2FVCBVtO3hmXyFoMddeVWFn9kPMZJymIMI4nSr0z3ooGwuBgI%2FykzYpt19Bj4fUKmGSzecCkNT96f3nLWf2vYnlv%2BAWd6kagsdUPbG7uDsSfoJ%2FjCN%2FkXFeiHpdhuUvIE0hd7qgfqyQO33qim5hetPKKUVy5%2FT8EiysW4ZaW1%2Bm9P4KshnEpajJjeMiKeEfiNLzs8Sf%2BmB&X-Amz-Signature=df8be9d447cc908e4555ba9fa30dcbdbd4cf0abfc2ecba940ed24054cab1bed1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGE3KWC4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDgMcatDswEPYXWZXXG6znYnZQImbKerwRiOA%2Bdj6XIYQIhANryKxDOuK32Pq%2B%2BFh4OZcC%2FqL7wVcb0yuuotedVvaKeKv8DCHUQABoMNjM3NDIzMTgzODA1IgzKbWkF8DlXGXloyMwq3ANXCxbUtCutnrId9vHputiSZ6bg2MIIg5t4tEt1F4K12r5%2FpoMMmLuITs%2Bm6vXgaYYOENz%2B7kZMzvAEwsgXdS5NQhuGzTrhZXDtn3ph%2BXplsvaplNv2m1p9eNg03XAdZfhmdQaprl6qhbM3MOCL6HDJyAOlbSMtEeJm5CRcxHurKFcTm8crron7Td%2FShwEHE1mh9qZ%2B4oKOgaSwtl10pC59EKmkab3a4%2BGVP42cjNK3Uy2YXEIlHuKd3HqRgg2sBGEL6V1K57ovkCR40kSnzt3hdIXUpKivaZ0Myx%2B%2BIlFFR8CrZ6Bz69OR8fxsQ6ww5zdUtR%2FjoEjFM2RmD5oddmgJY4n%2B9YiBrZVzkNi8IhcG3EU8ItwLtVxg9GNxpRxvcP3%2BqIH2sRXD87f7ApIASn5cSQIpqOuwhqsqNkkWxJ0lY8Qf9BTefRWxZFKdP1zW313MS3iGc3PWFjv98QK5m60lGTyB9gFkWz0MkMaj6hmyxxovI%2Bc%2BdIMS3p45CwC1y6uhS5%2BBe0Miei4MmC4ajAhYu8pLjtPIOeQHeQwAfmeVFajWDEPKG1L5Yf2fvbcnwpqyyrDqcxZ3%2B6PohMERdziRIVFwT5X6IbsbeCLhlW7LYMvjE0FpKGYzcg3viTC4hc3EBjqkASWIswUztUQMbt35n75%2FVCBVtO3hmXyFoMddeVWFn9kPMZJymIMI4nSr0z3ooGwuBgI%2FykzYpt19Bj4fUKmGSzecCkNT96f3nLWf2vYnlv%2BAWd6kagsdUPbG7uDsSfoJ%2FjCN%2FkXFeiHpdhuUvIE0hd7qgfqyQO33qim5hetPKKUVy5%2FT8EiysW4ZaW1%2Bm9P4KshnEpajJjeMiKeEfiNLzs8Sf%2BmB&X-Amz-Signature=282c5b8f6bca543edc0edddaa282590d3bbc4cf9e47ec2c3e4a44af33d9f7e86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGE3KWC4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDgMcatDswEPYXWZXXG6znYnZQImbKerwRiOA%2Bdj6XIYQIhANryKxDOuK32Pq%2B%2BFh4OZcC%2FqL7wVcb0yuuotedVvaKeKv8DCHUQABoMNjM3NDIzMTgzODA1IgzKbWkF8DlXGXloyMwq3ANXCxbUtCutnrId9vHputiSZ6bg2MIIg5t4tEt1F4K12r5%2FpoMMmLuITs%2Bm6vXgaYYOENz%2B7kZMzvAEwsgXdS5NQhuGzTrhZXDtn3ph%2BXplsvaplNv2m1p9eNg03XAdZfhmdQaprl6qhbM3MOCL6HDJyAOlbSMtEeJm5CRcxHurKFcTm8crron7Td%2FShwEHE1mh9qZ%2B4oKOgaSwtl10pC59EKmkab3a4%2BGVP42cjNK3Uy2YXEIlHuKd3HqRgg2sBGEL6V1K57ovkCR40kSnzt3hdIXUpKivaZ0Myx%2B%2BIlFFR8CrZ6Bz69OR8fxsQ6ww5zdUtR%2FjoEjFM2RmD5oddmgJY4n%2B9YiBrZVzkNi8IhcG3EU8ItwLtVxg9GNxpRxvcP3%2BqIH2sRXD87f7ApIASn5cSQIpqOuwhqsqNkkWxJ0lY8Qf9BTefRWxZFKdP1zW313MS3iGc3PWFjv98QK5m60lGTyB9gFkWz0MkMaj6hmyxxovI%2Bc%2BdIMS3p45CwC1y6uhS5%2BBe0Miei4MmC4ajAhYu8pLjtPIOeQHeQwAfmeVFajWDEPKG1L5Yf2fvbcnwpqyyrDqcxZ3%2B6PohMERdziRIVFwT5X6IbsbeCLhlW7LYMvjE0FpKGYzcg3viTC4hc3EBjqkASWIswUztUQMbt35n75%2FVCBVtO3hmXyFoMddeVWFn9kPMZJymIMI4nSr0z3ooGwuBgI%2FykzYpt19Bj4fUKmGSzecCkNT96f3nLWf2vYnlv%2BAWd6kagsdUPbG7uDsSfoJ%2FjCN%2FkXFeiHpdhuUvIE0hd7qgfqyQO33qim5hetPKKUVy5%2FT8EiysW4ZaW1%2Bm9P4KshnEpajJjeMiKeEfiNLzs8Sf%2BmB&X-Amz-Signature=26bc8db99ad249eb200d40c4170e75d607d77ea864a75650da21af269bc60f52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGE3KWC4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDgMcatDswEPYXWZXXG6znYnZQImbKerwRiOA%2Bdj6XIYQIhANryKxDOuK32Pq%2B%2BFh4OZcC%2FqL7wVcb0yuuotedVvaKeKv8DCHUQABoMNjM3NDIzMTgzODA1IgzKbWkF8DlXGXloyMwq3ANXCxbUtCutnrId9vHputiSZ6bg2MIIg5t4tEt1F4K12r5%2FpoMMmLuITs%2Bm6vXgaYYOENz%2B7kZMzvAEwsgXdS5NQhuGzTrhZXDtn3ph%2BXplsvaplNv2m1p9eNg03XAdZfhmdQaprl6qhbM3MOCL6HDJyAOlbSMtEeJm5CRcxHurKFcTm8crron7Td%2FShwEHE1mh9qZ%2B4oKOgaSwtl10pC59EKmkab3a4%2BGVP42cjNK3Uy2YXEIlHuKd3HqRgg2sBGEL6V1K57ovkCR40kSnzt3hdIXUpKivaZ0Myx%2B%2BIlFFR8CrZ6Bz69OR8fxsQ6ww5zdUtR%2FjoEjFM2RmD5oddmgJY4n%2B9YiBrZVzkNi8IhcG3EU8ItwLtVxg9GNxpRxvcP3%2BqIH2sRXD87f7ApIASn5cSQIpqOuwhqsqNkkWxJ0lY8Qf9BTefRWxZFKdP1zW313MS3iGc3PWFjv98QK5m60lGTyB9gFkWz0MkMaj6hmyxxovI%2Bc%2BdIMS3p45CwC1y6uhS5%2BBe0Miei4MmC4ajAhYu8pLjtPIOeQHeQwAfmeVFajWDEPKG1L5Yf2fvbcnwpqyyrDqcxZ3%2B6PohMERdziRIVFwT5X6IbsbeCLhlW7LYMvjE0FpKGYzcg3viTC4hc3EBjqkASWIswUztUQMbt35n75%2FVCBVtO3hmXyFoMddeVWFn9kPMZJymIMI4nSr0z3ooGwuBgI%2FykzYpt19Bj4fUKmGSzecCkNT96f3nLWf2vYnlv%2BAWd6kagsdUPbG7uDsSfoJ%2FjCN%2FkXFeiHpdhuUvIE0hd7qgfqyQO33qim5hetPKKUVy5%2FT8EiysW4ZaW1%2Bm9P4KshnEpajJjeMiKeEfiNLzs8Sf%2BmB&X-Amz-Signature=1978305cda8e35b4ad4d445c3978241e140b824deb50ffd690bff5ed771b8d9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGE3KWC4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDgMcatDswEPYXWZXXG6znYnZQImbKerwRiOA%2Bdj6XIYQIhANryKxDOuK32Pq%2B%2BFh4OZcC%2FqL7wVcb0yuuotedVvaKeKv8DCHUQABoMNjM3NDIzMTgzODA1IgzKbWkF8DlXGXloyMwq3ANXCxbUtCutnrId9vHputiSZ6bg2MIIg5t4tEt1F4K12r5%2FpoMMmLuITs%2Bm6vXgaYYOENz%2B7kZMzvAEwsgXdS5NQhuGzTrhZXDtn3ph%2BXplsvaplNv2m1p9eNg03XAdZfhmdQaprl6qhbM3MOCL6HDJyAOlbSMtEeJm5CRcxHurKFcTm8crron7Td%2FShwEHE1mh9qZ%2B4oKOgaSwtl10pC59EKmkab3a4%2BGVP42cjNK3Uy2YXEIlHuKd3HqRgg2sBGEL6V1K57ovkCR40kSnzt3hdIXUpKivaZ0Myx%2B%2BIlFFR8CrZ6Bz69OR8fxsQ6ww5zdUtR%2FjoEjFM2RmD5oddmgJY4n%2B9YiBrZVzkNi8IhcG3EU8ItwLtVxg9GNxpRxvcP3%2BqIH2sRXD87f7ApIASn5cSQIpqOuwhqsqNkkWxJ0lY8Qf9BTefRWxZFKdP1zW313MS3iGc3PWFjv98QK5m60lGTyB9gFkWz0MkMaj6hmyxxovI%2Bc%2BdIMS3p45CwC1y6uhS5%2BBe0Miei4MmC4ajAhYu8pLjtPIOeQHeQwAfmeVFajWDEPKG1L5Yf2fvbcnwpqyyrDqcxZ3%2B6PohMERdziRIVFwT5X6IbsbeCLhlW7LYMvjE0FpKGYzcg3viTC4hc3EBjqkASWIswUztUQMbt35n75%2FVCBVtO3hmXyFoMddeVWFn9kPMZJymIMI4nSr0z3ooGwuBgI%2FykzYpt19Bj4fUKmGSzecCkNT96f3nLWf2vYnlv%2BAWd6kagsdUPbG7uDsSfoJ%2FjCN%2FkXFeiHpdhuUvIE0hd7qgfqyQO33qim5hetPKKUVy5%2FT8EiysW4ZaW1%2Bm9P4KshnEpajJjeMiKeEfiNLzs8Sf%2BmB&X-Amz-Signature=5d663e608d6c425d2803829b70b1062e3a8bdba743f0b98f9d335cb7aeffdace&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGE3KWC4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDgMcatDswEPYXWZXXG6znYnZQImbKerwRiOA%2Bdj6XIYQIhANryKxDOuK32Pq%2B%2BFh4OZcC%2FqL7wVcb0yuuotedVvaKeKv8DCHUQABoMNjM3NDIzMTgzODA1IgzKbWkF8DlXGXloyMwq3ANXCxbUtCutnrId9vHputiSZ6bg2MIIg5t4tEt1F4K12r5%2FpoMMmLuITs%2Bm6vXgaYYOENz%2B7kZMzvAEwsgXdS5NQhuGzTrhZXDtn3ph%2BXplsvaplNv2m1p9eNg03XAdZfhmdQaprl6qhbM3MOCL6HDJyAOlbSMtEeJm5CRcxHurKFcTm8crron7Td%2FShwEHE1mh9qZ%2B4oKOgaSwtl10pC59EKmkab3a4%2BGVP42cjNK3Uy2YXEIlHuKd3HqRgg2sBGEL6V1K57ovkCR40kSnzt3hdIXUpKivaZ0Myx%2B%2BIlFFR8CrZ6Bz69OR8fxsQ6ww5zdUtR%2FjoEjFM2RmD5oddmgJY4n%2B9YiBrZVzkNi8IhcG3EU8ItwLtVxg9GNxpRxvcP3%2BqIH2sRXD87f7ApIASn5cSQIpqOuwhqsqNkkWxJ0lY8Qf9BTefRWxZFKdP1zW313MS3iGc3PWFjv98QK5m60lGTyB9gFkWz0MkMaj6hmyxxovI%2Bc%2BdIMS3p45CwC1y6uhS5%2BBe0Miei4MmC4ajAhYu8pLjtPIOeQHeQwAfmeVFajWDEPKG1L5Yf2fvbcnwpqyyrDqcxZ3%2B6PohMERdziRIVFwT5X6IbsbeCLhlW7LYMvjE0FpKGYzcg3viTC4hc3EBjqkASWIswUztUQMbt35n75%2FVCBVtO3hmXyFoMddeVWFn9kPMZJymIMI4nSr0z3ooGwuBgI%2FykzYpt19Bj4fUKmGSzecCkNT96f3nLWf2vYnlv%2BAWd6kagsdUPbG7uDsSfoJ%2FjCN%2FkXFeiHpdhuUvIE0hd7qgfqyQO33qim5hetPKKUVy5%2FT8EiysW4ZaW1%2Bm9P4KshnEpajJjeMiKeEfiNLzs8Sf%2BmB&X-Amz-Signature=b54e022056ffd82cc8405aae29edd5f016bd9dd0b6ff581a4d10c2846eb49419&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGE3KWC4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDgMcatDswEPYXWZXXG6znYnZQImbKerwRiOA%2Bdj6XIYQIhANryKxDOuK32Pq%2B%2BFh4OZcC%2FqL7wVcb0yuuotedVvaKeKv8DCHUQABoMNjM3NDIzMTgzODA1IgzKbWkF8DlXGXloyMwq3ANXCxbUtCutnrId9vHputiSZ6bg2MIIg5t4tEt1F4K12r5%2FpoMMmLuITs%2Bm6vXgaYYOENz%2B7kZMzvAEwsgXdS5NQhuGzTrhZXDtn3ph%2BXplsvaplNv2m1p9eNg03XAdZfhmdQaprl6qhbM3MOCL6HDJyAOlbSMtEeJm5CRcxHurKFcTm8crron7Td%2FShwEHE1mh9qZ%2B4oKOgaSwtl10pC59EKmkab3a4%2BGVP42cjNK3Uy2YXEIlHuKd3HqRgg2sBGEL6V1K57ovkCR40kSnzt3hdIXUpKivaZ0Myx%2B%2BIlFFR8CrZ6Bz69OR8fxsQ6ww5zdUtR%2FjoEjFM2RmD5oddmgJY4n%2B9YiBrZVzkNi8IhcG3EU8ItwLtVxg9GNxpRxvcP3%2BqIH2sRXD87f7ApIASn5cSQIpqOuwhqsqNkkWxJ0lY8Qf9BTefRWxZFKdP1zW313MS3iGc3PWFjv98QK5m60lGTyB9gFkWz0MkMaj6hmyxxovI%2Bc%2BdIMS3p45CwC1y6uhS5%2BBe0Miei4MmC4ajAhYu8pLjtPIOeQHeQwAfmeVFajWDEPKG1L5Yf2fvbcnwpqyyrDqcxZ3%2B6PohMERdziRIVFwT5X6IbsbeCLhlW7LYMvjE0FpKGYzcg3viTC4hc3EBjqkASWIswUztUQMbt35n75%2FVCBVtO3hmXyFoMddeVWFn9kPMZJymIMI4nSr0z3ooGwuBgI%2FykzYpt19Bj4fUKmGSzecCkNT96f3nLWf2vYnlv%2BAWd6kagsdUPbG7uDsSfoJ%2FjCN%2FkXFeiHpdhuUvIE0hd7qgfqyQO33qim5hetPKKUVy5%2FT8EiysW4ZaW1%2Bm9P4KshnEpajJjeMiKeEfiNLzs8Sf%2BmB&X-Amz-Signature=6cc3950f20f0d1bc65be51228d8f81d6d6e06c103517dea7f143696486a2461b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGE3KWC4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDgMcatDswEPYXWZXXG6znYnZQImbKerwRiOA%2Bdj6XIYQIhANryKxDOuK32Pq%2B%2BFh4OZcC%2FqL7wVcb0yuuotedVvaKeKv8DCHUQABoMNjM3NDIzMTgzODA1IgzKbWkF8DlXGXloyMwq3ANXCxbUtCutnrId9vHputiSZ6bg2MIIg5t4tEt1F4K12r5%2FpoMMmLuITs%2Bm6vXgaYYOENz%2B7kZMzvAEwsgXdS5NQhuGzTrhZXDtn3ph%2BXplsvaplNv2m1p9eNg03XAdZfhmdQaprl6qhbM3MOCL6HDJyAOlbSMtEeJm5CRcxHurKFcTm8crron7Td%2FShwEHE1mh9qZ%2B4oKOgaSwtl10pC59EKmkab3a4%2BGVP42cjNK3Uy2YXEIlHuKd3HqRgg2sBGEL6V1K57ovkCR40kSnzt3hdIXUpKivaZ0Myx%2B%2BIlFFR8CrZ6Bz69OR8fxsQ6ww5zdUtR%2FjoEjFM2RmD5oddmgJY4n%2B9YiBrZVzkNi8IhcG3EU8ItwLtVxg9GNxpRxvcP3%2BqIH2sRXD87f7ApIASn5cSQIpqOuwhqsqNkkWxJ0lY8Qf9BTefRWxZFKdP1zW313MS3iGc3PWFjv98QK5m60lGTyB9gFkWz0MkMaj6hmyxxovI%2Bc%2BdIMS3p45CwC1y6uhS5%2BBe0Miei4MmC4ajAhYu8pLjtPIOeQHeQwAfmeVFajWDEPKG1L5Yf2fvbcnwpqyyrDqcxZ3%2B6PohMERdziRIVFwT5X6IbsbeCLhlW7LYMvjE0FpKGYzcg3viTC4hc3EBjqkASWIswUztUQMbt35n75%2FVCBVtO3hmXyFoMddeVWFn9kPMZJymIMI4nSr0z3ooGwuBgI%2FykzYpt19Bj4fUKmGSzecCkNT96f3nLWf2vYnlv%2BAWd6kagsdUPbG7uDsSfoJ%2FjCN%2FkXFeiHpdhuUvIE0hd7qgfqyQO33qim5hetPKKUVy5%2FT8EiysW4ZaW1%2Bm9P4KshnEpajJjeMiKeEfiNLzs8Sf%2BmB&X-Amz-Signature=19e73961a6382ff1b7a1335f96470d02ce665a2ce0149e908f352bf93faf192d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGE3KWC4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDgMcatDswEPYXWZXXG6znYnZQImbKerwRiOA%2Bdj6XIYQIhANryKxDOuK32Pq%2B%2BFh4OZcC%2FqL7wVcb0yuuotedVvaKeKv8DCHUQABoMNjM3NDIzMTgzODA1IgzKbWkF8DlXGXloyMwq3ANXCxbUtCutnrId9vHputiSZ6bg2MIIg5t4tEt1F4K12r5%2FpoMMmLuITs%2Bm6vXgaYYOENz%2B7kZMzvAEwsgXdS5NQhuGzTrhZXDtn3ph%2BXplsvaplNv2m1p9eNg03XAdZfhmdQaprl6qhbM3MOCL6HDJyAOlbSMtEeJm5CRcxHurKFcTm8crron7Td%2FShwEHE1mh9qZ%2B4oKOgaSwtl10pC59EKmkab3a4%2BGVP42cjNK3Uy2YXEIlHuKd3HqRgg2sBGEL6V1K57ovkCR40kSnzt3hdIXUpKivaZ0Myx%2B%2BIlFFR8CrZ6Bz69OR8fxsQ6ww5zdUtR%2FjoEjFM2RmD5oddmgJY4n%2B9YiBrZVzkNi8IhcG3EU8ItwLtVxg9GNxpRxvcP3%2BqIH2sRXD87f7ApIASn5cSQIpqOuwhqsqNkkWxJ0lY8Qf9BTefRWxZFKdP1zW313MS3iGc3PWFjv98QK5m60lGTyB9gFkWz0MkMaj6hmyxxovI%2Bc%2BdIMS3p45CwC1y6uhS5%2BBe0Miei4MmC4ajAhYu8pLjtPIOeQHeQwAfmeVFajWDEPKG1L5Yf2fvbcnwpqyyrDqcxZ3%2B6PohMERdziRIVFwT5X6IbsbeCLhlW7LYMvjE0FpKGYzcg3viTC4hc3EBjqkASWIswUztUQMbt35n75%2FVCBVtO3hmXyFoMddeVWFn9kPMZJymIMI4nSr0z3ooGwuBgI%2FykzYpt19Bj4fUKmGSzecCkNT96f3nLWf2vYnlv%2BAWd6kagsdUPbG7uDsSfoJ%2FjCN%2FkXFeiHpdhuUvIE0hd7qgfqyQO33qim5hetPKKUVy5%2FT8EiysW4ZaW1%2Bm9P4KshnEpajJjeMiKeEfiNLzs8Sf%2BmB&X-Amz-Signature=28fee0ea417e8443d99f6c8c4c0174d2f22875498c0c3a3504061ba6b2ccfbbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGE3KWC4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDgMcatDswEPYXWZXXG6znYnZQImbKerwRiOA%2Bdj6XIYQIhANryKxDOuK32Pq%2B%2BFh4OZcC%2FqL7wVcb0yuuotedVvaKeKv8DCHUQABoMNjM3NDIzMTgzODA1IgzKbWkF8DlXGXloyMwq3ANXCxbUtCutnrId9vHputiSZ6bg2MIIg5t4tEt1F4K12r5%2FpoMMmLuITs%2Bm6vXgaYYOENz%2B7kZMzvAEwsgXdS5NQhuGzTrhZXDtn3ph%2BXplsvaplNv2m1p9eNg03XAdZfhmdQaprl6qhbM3MOCL6HDJyAOlbSMtEeJm5CRcxHurKFcTm8crron7Td%2FShwEHE1mh9qZ%2B4oKOgaSwtl10pC59EKmkab3a4%2BGVP42cjNK3Uy2YXEIlHuKd3HqRgg2sBGEL6V1K57ovkCR40kSnzt3hdIXUpKivaZ0Myx%2B%2BIlFFR8CrZ6Bz69OR8fxsQ6ww5zdUtR%2FjoEjFM2RmD5oddmgJY4n%2B9YiBrZVzkNi8IhcG3EU8ItwLtVxg9GNxpRxvcP3%2BqIH2sRXD87f7ApIASn5cSQIpqOuwhqsqNkkWxJ0lY8Qf9BTefRWxZFKdP1zW313MS3iGc3PWFjv98QK5m60lGTyB9gFkWz0MkMaj6hmyxxovI%2Bc%2BdIMS3p45CwC1y6uhS5%2BBe0Miei4MmC4ajAhYu8pLjtPIOeQHeQwAfmeVFajWDEPKG1L5Yf2fvbcnwpqyyrDqcxZ3%2B6PohMERdziRIVFwT5X6IbsbeCLhlW7LYMvjE0FpKGYzcg3viTC4hc3EBjqkASWIswUztUQMbt35n75%2FVCBVtO3hmXyFoMddeVWFn9kPMZJymIMI4nSr0z3ooGwuBgI%2FykzYpt19Bj4fUKmGSzecCkNT96f3nLWf2vYnlv%2BAWd6kagsdUPbG7uDsSfoJ%2FjCN%2FkXFeiHpdhuUvIE0hd7qgfqyQO33qim5hetPKKUVy5%2FT8EiysW4ZaW1%2Bm9P4KshnEpajJjeMiKeEfiNLzs8Sf%2BmB&X-Amz-Signature=fa4fb025d6a1361e6e5fca1d057c63a99a33827807db568fe0604d23cec10fa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGE3KWC4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDgMcatDswEPYXWZXXG6znYnZQImbKerwRiOA%2Bdj6XIYQIhANryKxDOuK32Pq%2B%2BFh4OZcC%2FqL7wVcb0yuuotedVvaKeKv8DCHUQABoMNjM3NDIzMTgzODA1IgzKbWkF8DlXGXloyMwq3ANXCxbUtCutnrId9vHputiSZ6bg2MIIg5t4tEt1F4K12r5%2FpoMMmLuITs%2Bm6vXgaYYOENz%2B7kZMzvAEwsgXdS5NQhuGzTrhZXDtn3ph%2BXplsvaplNv2m1p9eNg03XAdZfhmdQaprl6qhbM3MOCL6HDJyAOlbSMtEeJm5CRcxHurKFcTm8crron7Td%2FShwEHE1mh9qZ%2B4oKOgaSwtl10pC59EKmkab3a4%2BGVP42cjNK3Uy2YXEIlHuKd3HqRgg2sBGEL6V1K57ovkCR40kSnzt3hdIXUpKivaZ0Myx%2B%2BIlFFR8CrZ6Bz69OR8fxsQ6ww5zdUtR%2FjoEjFM2RmD5oddmgJY4n%2B9YiBrZVzkNi8IhcG3EU8ItwLtVxg9GNxpRxvcP3%2BqIH2sRXD87f7ApIASn5cSQIpqOuwhqsqNkkWxJ0lY8Qf9BTefRWxZFKdP1zW313MS3iGc3PWFjv98QK5m60lGTyB9gFkWz0MkMaj6hmyxxovI%2Bc%2BdIMS3p45CwC1y6uhS5%2BBe0Miei4MmC4ajAhYu8pLjtPIOeQHeQwAfmeVFajWDEPKG1L5Yf2fvbcnwpqyyrDqcxZ3%2B6PohMERdziRIVFwT5X6IbsbeCLhlW7LYMvjE0FpKGYzcg3viTC4hc3EBjqkASWIswUztUQMbt35n75%2FVCBVtO3hmXyFoMddeVWFn9kPMZJymIMI4nSr0z3ooGwuBgI%2FykzYpt19Bj4fUKmGSzecCkNT96f3nLWf2vYnlv%2BAWd6kagsdUPbG7uDsSfoJ%2FjCN%2FkXFeiHpdhuUvIE0hd7qgfqyQO33qim5hetPKKUVy5%2FT8EiysW4ZaW1%2Bm9P4KshnEpajJjeMiKeEfiNLzs8Sf%2BmB&X-Amz-Signature=1c41fb983a72f654e06f1b8aa311ce237396328a361002ab515fae6f1947508c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGE3KWC4%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T121914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDgMcatDswEPYXWZXXG6znYnZQImbKerwRiOA%2Bdj6XIYQIhANryKxDOuK32Pq%2B%2BFh4OZcC%2FqL7wVcb0yuuotedVvaKeKv8DCHUQABoMNjM3NDIzMTgzODA1IgzKbWkF8DlXGXloyMwq3ANXCxbUtCutnrId9vHputiSZ6bg2MIIg5t4tEt1F4K12r5%2FpoMMmLuITs%2Bm6vXgaYYOENz%2B7kZMzvAEwsgXdS5NQhuGzTrhZXDtn3ph%2BXplsvaplNv2m1p9eNg03XAdZfhmdQaprl6qhbM3MOCL6HDJyAOlbSMtEeJm5CRcxHurKFcTm8crron7Td%2FShwEHE1mh9qZ%2B4oKOgaSwtl10pC59EKmkab3a4%2BGVP42cjNK3Uy2YXEIlHuKd3HqRgg2sBGEL6V1K57ovkCR40kSnzt3hdIXUpKivaZ0Myx%2B%2BIlFFR8CrZ6Bz69OR8fxsQ6ww5zdUtR%2FjoEjFM2RmD5oddmgJY4n%2B9YiBrZVzkNi8IhcG3EU8ItwLtVxg9GNxpRxvcP3%2BqIH2sRXD87f7ApIASn5cSQIpqOuwhqsqNkkWxJ0lY8Qf9BTefRWxZFKdP1zW313MS3iGc3PWFjv98QK5m60lGTyB9gFkWz0MkMaj6hmyxxovI%2Bc%2BdIMS3p45CwC1y6uhS5%2BBe0Miei4MmC4ajAhYu8pLjtPIOeQHeQwAfmeVFajWDEPKG1L5Yf2fvbcnwpqyyrDqcxZ3%2B6PohMERdziRIVFwT5X6IbsbeCLhlW7LYMvjE0FpKGYzcg3viTC4hc3EBjqkASWIswUztUQMbt35n75%2FVCBVtO3hmXyFoMddeVWFn9kPMZJymIMI4nSr0z3ooGwuBgI%2FykzYpt19Bj4fUKmGSzecCkNT96f3nLWf2vYnlv%2BAWd6kagsdUPbG7uDsSfoJ%2FjCN%2FkXFeiHpdhuUvIE0hd7qgfqyQO33qim5hetPKKUVy5%2FT8EiysW4ZaW1%2Bm9P4KshnEpajJjeMiKeEfiNLzs8Sf%2BmB&X-Amz-Signature=ee8e2c7d1b9f4364eb1da2d82507135164669130e8b8f7f0846bae243b49bfe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
