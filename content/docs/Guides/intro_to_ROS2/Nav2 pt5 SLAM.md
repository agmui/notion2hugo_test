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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MA2DOR7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDwN4tOKMLPluuVSvdNG0b%2FW3k7n1%2Bz015jMZdP68fycgIgPCNX1vY4ndgclpYe8pT1BN8iBem3v4NdZF29OwVZWIkq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDNnepDjbTUwxBGXYEyrcA5mK6E4yK1ucky5nzMyajIkcnxHWGQWvXsAGKBq3Utj%2B6BJnvh29lkb5ruDPA0Zm0dqNeJnaHAL79TCjLgTi8NHPCIf5KOv6DgE4yl81cW5O8IyvFsA57Pq45Fiu2UCvlZs6HeVzeHLJP2K0WH%2FAJlPu%2F9f39y6dEPmlYnaioaKwRw2ByD08ElvbrxWP8QlX9IsZcUuFM%2F498i58CjEzwwZZefb8cOTKg9P1llbxMNUuMDjAUneGO3E0MMKTNSrMN%2BcgPladPWDI3Wm7Qex5R4lusqkAnUA15UxVdM%2FXcM5UFkssKC3Xhd9A8zLNPyfb8t%2BmjgqSdxCxXYhXmBTtHwkyrbihNmImiF0VZDFeMTWOf7cVXjtcSFMHVB%2BfL4KKLoUz16LmB3cysWJTSupg%2BBFrcy8HauvPaETF9n0%2B9iOed4ciYBA9mF39%2B3rVHHuclj%2ByGztJhrKepEeiKrtcR2AkekVFcupqgZ3OaxqVCLygcgSkZx63S4%2FFkh7S%2FAJsFZV6Qp0tgg64pDqBpwNcp%2BXLybP7%2BonjYf5CKWYvHtvYzFrX0erKNsM0ttbShjC%2BCeBWp8%2BXs%2BoRNLiRAgWo4%2Bt%2BEq80%2B9Q4m7AxtNB%2FOVw2fYPcHZKkC0nrELp8MIC8ycQGOqUBXUVEhuvrFnsjF6gxN1bOSrQ9i2p3X28bhLcWsUUEyvHgTBbk9HYClV%2BINH5J8qW73%2BAPOhIROy5%2Buy327zuGzr%2F9BoUMoapN8fg6enxhHYI22WDIhLOLGcknZsOD4l3dvBckrHimufUW5bTDEYN1PhCu%2BClFQtqfz%2BfEkODhL3bFahSvaPZS1ENtmjOb0qD%2FxRyTCjfIrg5HpeJMlZUleNatDTjN&X-Amz-Signature=914bba7f57ea0b781eed765ddd483200dd152f9bc8ad1b292f2deb8216d879c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MA2DOR7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDwN4tOKMLPluuVSvdNG0b%2FW3k7n1%2Bz015jMZdP68fycgIgPCNX1vY4ndgclpYe8pT1BN8iBem3v4NdZF29OwVZWIkq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDNnepDjbTUwxBGXYEyrcA5mK6E4yK1ucky5nzMyajIkcnxHWGQWvXsAGKBq3Utj%2B6BJnvh29lkb5ruDPA0Zm0dqNeJnaHAL79TCjLgTi8NHPCIf5KOv6DgE4yl81cW5O8IyvFsA57Pq45Fiu2UCvlZs6HeVzeHLJP2K0WH%2FAJlPu%2F9f39y6dEPmlYnaioaKwRw2ByD08ElvbrxWP8QlX9IsZcUuFM%2F498i58CjEzwwZZefb8cOTKg9P1llbxMNUuMDjAUneGO3E0MMKTNSrMN%2BcgPladPWDI3Wm7Qex5R4lusqkAnUA15UxVdM%2FXcM5UFkssKC3Xhd9A8zLNPyfb8t%2BmjgqSdxCxXYhXmBTtHwkyrbihNmImiF0VZDFeMTWOf7cVXjtcSFMHVB%2BfL4KKLoUz16LmB3cysWJTSupg%2BBFrcy8HauvPaETF9n0%2B9iOed4ciYBA9mF39%2B3rVHHuclj%2ByGztJhrKepEeiKrtcR2AkekVFcupqgZ3OaxqVCLygcgSkZx63S4%2FFkh7S%2FAJsFZV6Qp0tgg64pDqBpwNcp%2BXLybP7%2BonjYf5CKWYvHtvYzFrX0erKNsM0ttbShjC%2BCeBWp8%2BXs%2BoRNLiRAgWo4%2Bt%2BEq80%2B9Q4m7AxtNB%2FOVw2fYPcHZKkC0nrELp8MIC8ycQGOqUBXUVEhuvrFnsjF6gxN1bOSrQ9i2p3X28bhLcWsUUEyvHgTBbk9HYClV%2BINH5J8qW73%2BAPOhIROy5%2Buy327zuGzr%2F9BoUMoapN8fg6enxhHYI22WDIhLOLGcknZsOD4l3dvBckrHimufUW5bTDEYN1PhCu%2BClFQtqfz%2BfEkODhL3bFahSvaPZS1ENtmjOb0qD%2FxRyTCjfIrg5HpeJMlZUleNatDTjN&X-Amz-Signature=2039810c9941324c617b0448d7af95bae8fc306f4f37f821aa43b0942112d321&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MA2DOR7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDwN4tOKMLPluuVSvdNG0b%2FW3k7n1%2Bz015jMZdP68fycgIgPCNX1vY4ndgclpYe8pT1BN8iBem3v4NdZF29OwVZWIkq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDNnepDjbTUwxBGXYEyrcA5mK6E4yK1ucky5nzMyajIkcnxHWGQWvXsAGKBq3Utj%2B6BJnvh29lkb5ruDPA0Zm0dqNeJnaHAL79TCjLgTi8NHPCIf5KOv6DgE4yl81cW5O8IyvFsA57Pq45Fiu2UCvlZs6HeVzeHLJP2K0WH%2FAJlPu%2F9f39y6dEPmlYnaioaKwRw2ByD08ElvbrxWP8QlX9IsZcUuFM%2F498i58CjEzwwZZefb8cOTKg9P1llbxMNUuMDjAUneGO3E0MMKTNSrMN%2BcgPladPWDI3Wm7Qex5R4lusqkAnUA15UxVdM%2FXcM5UFkssKC3Xhd9A8zLNPyfb8t%2BmjgqSdxCxXYhXmBTtHwkyrbihNmImiF0VZDFeMTWOf7cVXjtcSFMHVB%2BfL4KKLoUz16LmB3cysWJTSupg%2BBFrcy8HauvPaETF9n0%2B9iOed4ciYBA9mF39%2B3rVHHuclj%2ByGztJhrKepEeiKrtcR2AkekVFcupqgZ3OaxqVCLygcgSkZx63S4%2FFkh7S%2FAJsFZV6Qp0tgg64pDqBpwNcp%2BXLybP7%2BonjYf5CKWYvHtvYzFrX0erKNsM0ttbShjC%2BCeBWp8%2BXs%2BoRNLiRAgWo4%2Bt%2BEq80%2B9Q4m7AxtNB%2FOVw2fYPcHZKkC0nrELp8MIC8ycQGOqUBXUVEhuvrFnsjF6gxN1bOSrQ9i2p3X28bhLcWsUUEyvHgTBbk9HYClV%2BINH5J8qW73%2BAPOhIROy5%2Buy327zuGzr%2F9BoUMoapN8fg6enxhHYI22WDIhLOLGcknZsOD4l3dvBckrHimufUW5bTDEYN1PhCu%2BClFQtqfz%2BfEkODhL3bFahSvaPZS1ENtmjOb0qD%2FxRyTCjfIrg5HpeJMlZUleNatDTjN&X-Amz-Signature=d663d39a6ac9bf0c35ed1a431241cf97eae673adcffccfe3460db4c8456946e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MA2DOR7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDwN4tOKMLPluuVSvdNG0b%2FW3k7n1%2Bz015jMZdP68fycgIgPCNX1vY4ndgclpYe8pT1BN8iBem3v4NdZF29OwVZWIkq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDNnepDjbTUwxBGXYEyrcA5mK6E4yK1ucky5nzMyajIkcnxHWGQWvXsAGKBq3Utj%2B6BJnvh29lkb5ruDPA0Zm0dqNeJnaHAL79TCjLgTi8NHPCIf5KOv6DgE4yl81cW5O8IyvFsA57Pq45Fiu2UCvlZs6HeVzeHLJP2K0WH%2FAJlPu%2F9f39y6dEPmlYnaioaKwRw2ByD08ElvbrxWP8QlX9IsZcUuFM%2F498i58CjEzwwZZefb8cOTKg9P1llbxMNUuMDjAUneGO3E0MMKTNSrMN%2BcgPladPWDI3Wm7Qex5R4lusqkAnUA15UxVdM%2FXcM5UFkssKC3Xhd9A8zLNPyfb8t%2BmjgqSdxCxXYhXmBTtHwkyrbihNmImiF0VZDFeMTWOf7cVXjtcSFMHVB%2BfL4KKLoUz16LmB3cysWJTSupg%2BBFrcy8HauvPaETF9n0%2B9iOed4ciYBA9mF39%2B3rVHHuclj%2ByGztJhrKepEeiKrtcR2AkekVFcupqgZ3OaxqVCLygcgSkZx63S4%2FFkh7S%2FAJsFZV6Qp0tgg64pDqBpwNcp%2BXLybP7%2BonjYf5CKWYvHtvYzFrX0erKNsM0ttbShjC%2BCeBWp8%2BXs%2BoRNLiRAgWo4%2Bt%2BEq80%2B9Q4m7AxtNB%2FOVw2fYPcHZKkC0nrELp8MIC8ycQGOqUBXUVEhuvrFnsjF6gxN1bOSrQ9i2p3X28bhLcWsUUEyvHgTBbk9HYClV%2BINH5J8qW73%2BAPOhIROy5%2Buy327zuGzr%2F9BoUMoapN8fg6enxhHYI22WDIhLOLGcknZsOD4l3dvBckrHimufUW5bTDEYN1PhCu%2BClFQtqfz%2BfEkODhL3bFahSvaPZS1ENtmjOb0qD%2FxRyTCjfIrg5HpeJMlZUleNatDTjN&X-Amz-Signature=2f4b273c71e5c895acf882e653b62bebdf50c4b426a74e8ba7acdb7fc9661dbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MA2DOR7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDwN4tOKMLPluuVSvdNG0b%2FW3k7n1%2Bz015jMZdP68fycgIgPCNX1vY4ndgclpYe8pT1BN8iBem3v4NdZF29OwVZWIkq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDNnepDjbTUwxBGXYEyrcA5mK6E4yK1ucky5nzMyajIkcnxHWGQWvXsAGKBq3Utj%2B6BJnvh29lkb5ruDPA0Zm0dqNeJnaHAL79TCjLgTi8NHPCIf5KOv6DgE4yl81cW5O8IyvFsA57Pq45Fiu2UCvlZs6HeVzeHLJP2K0WH%2FAJlPu%2F9f39y6dEPmlYnaioaKwRw2ByD08ElvbrxWP8QlX9IsZcUuFM%2F498i58CjEzwwZZefb8cOTKg9P1llbxMNUuMDjAUneGO3E0MMKTNSrMN%2BcgPladPWDI3Wm7Qex5R4lusqkAnUA15UxVdM%2FXcM5UFkssKC3Xhd9A8zLNPyfb8t%2BmjgqSdxCxXYhXmBTtHwkyrbihNmImiF0VZDFeMTWOf7cVXjtcSFMHVB%2BfL4KKLoUz16LmB3cysWJTSupg%2BBFrcy8HauvPaETF9n0%2B9iOed4ciYBA9mF39%2B3rVHHuclj%2ByGztJhrKepEeiKrtcR2AkekVFcupqgZ3OaxqVCLygcgSkZx63S4%2FFkh7S%2FAJsFZV6Qp0tgg64pDqBpwNcp%2BXLybP7%2BonjYf5CKWYvHtvYzFrX0erKNsM0ttbShjC%2BCeBWp8%2BXs%2BoRNLiRAgWo4%2Bt%2BEq80%2B9Q4m7AxtNB%2FOVw2fYPcHZKkC0nrELp8MIC8ycQGOqUBXUVEhuvrFnsjF6gxN1bOSrQ9i2p3X28bhLcWsUUEyvHgTBbk9HYClV%2BINH5J8qW73%2BAPOhIROy5%2Buy327zuGzr%2F9BoUMoapN8fg6enxhHYI22WDIhLOLGcknZsOD4l3dvBckrHimufUW5bTDEYN1PhCu%2BClFQtqfz%2BfEkODhL3bFahSvaPZS1ENtmjOb0qD%2FxRyTCjfIrg5HpeJMlZUleNatDTjN&X-Amz-Signature=829c011c0368ef8791c830bd7ec6e1aa2d5305c0452075a803e7cc6031f0d81d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MA2DOR7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDwN4tOKMLPluuVSvdNG0b%2FW3k7n1%2Bz015jMZdP68fycgIgPCNX1vY4ndgclpYe8pT1BN8iBem3v4NdZF29OwVZWIkq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDNnepDjbTUwxBGXYEyrcA5mK6E4yK1ucky5nzMyajIkcnxHWGQWvXsAGKBq3Utj%2B6BJnvh29lkb5ruDPA0Zm0dqNeJnaHAL79TCjLgTi8NHPCIf5KOv6DgE4yl81cW5O8IyvFsA57Pq45Fiu2UCvlZs6HeVzeHLJP2K0WH%2FAJlPu%2F9f39y6dEPmlYnaioaKwRw2ByD08ElvbrxWP8QlX9IsZcUuFM%2F498i58CjEzwwZZefb8cOTKg9P1llbxMNUuMDjAUneGO3E0MMKTNSrMN%2BcgPladPWDI3Wm7Qex5R4lusqkAnUA15UxVdM%2FXcM5UFkssKC3Xhd9A8zLNPyfb8t%2BmjgqSdxCxXYhXmBTtHwkyrbihNmImiF0VZDFeMTWOf7cVXjtcSFMHVB%2BfL4KKLoUz16LmB3cysWJTSupg%2BBFrcy8HauvPaETF9n0%2B9iOed4ciYBA9mF39%2B3rVHHuclj%2ByGztJhrKepEeiKrtcR2AkekVFcupqgZ3OaxqVCLygcgSkZx63S4%2FFkh7S%2FAJsFZV6Qp0tgg64pDqBpwNcp%2BXLybP7%2BonjYf5CKWYvHtvYzFrX0erKNsM0ttbShjC%2BCeBWp8%2BXs%2BoRNLiRAgWo4%2Bt%2BEq80%2B9Q4m7AxtNB%2FOVw2fYPcHZKkC0nrELp8MIC8ycQGOqUBXUVEhuvrFnsjF6gxN1bOSrQ9i2p3X28bhLcWsUUEyvHgTBbk9HYClV%2BINH5J8qW73%2BAPOhIROy5%2Buy327zuGzr%2F9BoUMoapN8fg6enxhHYI22WDIhLOLGcknZsOD4l3dvBckrHimufUW5bTDEYN1PhCu%2BClFQtqfz%2BfEkODhL3bFahSvaPZS1ENtmjOb0qD%2FxRyTCjfIrg5HpeJMlZUleNatDTjN&X-Amz-Signature=5f388ef558044593d3169e2402b7226b8c2a696b809812badcade3bc91915be2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MA2DOR7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDwN4tOKMLPluuVSvdNG0b%2FW3k7n1%2Bz015jMZdP68fycgIgPCNX1vY4ndgclpYe8pT1BN8iBem3v4NdZF29OwVZWIkq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDNnepDjbTUwxBGXYEyrcA5mK6E4yK1ucky5nzMyajIkcnxHWGQWvXsAGKBq3Utj%2B6BJnvh29lkb5ruDPA0Zm0dqNeJnaHAL79TCjLgTi8NHPCIf5KOv6DgE4yl81cW5O8IyvFsA57Pq45Fiu2UCvlZs6HeVzeHLJP2K0WH%2FAJlPu%2F9f39y6dEPmlYnaioaKwRw2ByD08ElvbrxWP8QlX9IsZcUuFM%2F498i58CjEzwwZZefb8cOTKg9P1llbxMNUuMDjAUneGO3E0MMKTNSrMN%2BcgPladPWDI3Wm7Qex5R4lusqkAnUA15UxVdM%2FXcM5UFkssKC3Xhd9A8zLNPyfb8t%2BmjgqSdxCxXYhXmBTtHwkyrbihNmImiF0VZDFeMTWOf7cVXjtcSFMHVB%2BfL4KKLoUz16LmB3cysWJTSupg%2BBFrcy8HauvPaETF9n0%2B9iOed4ciYBA9mF39%2B3rVHHuclj%2ByGztJhrKepEeiKrtcR2AkekVFcupqgZ3OaxqVCLygcgSkZx63S4%2FFkh7S%2FAJsFZV6Qp0tgg64pDqBpwNcp%2BXLybP7%2BonjYf5CKWYvHtvYzFrX0erKNsM0ttbShjC%2BCeBWp8%2BXs%2BoRNLiRAgWo4%2Bt%2BEq80%2B9Q4m7AxtNB%2FOVw2fYPcHZKkC0nrELp8MIC8ycQGOqUBXUVEhuvrFnsjF6gxN1bOSrQ9i2p3X28bhLcWsUUEyvHgTBbk9HYClV%2BINH5J8qW73%2BAPOhIROy5%2Buy327zuGzr%2F9BoUMoapN8fg6enxhHYI22WDIhLOLGcknZsOD4l3dvBckrHimufUW5bTDEYN1PhCu%2BClFQtqfz%2BfEkODhL3bFahSvaPZS1ENtmjOb0qD%2FxRyTCjfIrg5HpeJMlZUleNatDTjN&X-Amz-Signature=8148ea2f772a2db79e3e59a496d41c7b124039df2b7404ffaebda00f2e81b0f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MA2DOR7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDwN4tOKMLPluuVSvdNG0b%2FW3k7n1%2Bz015jMZdP68fycgIgPCNX1vY4ndgclpYe8pT1BN8iBem3v4NdZF29OwVZWIkq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDNnepDjbTUwxBGXYEyrcA5mK6E4yK1ucky5nzMyajIkcnxHWGQWvXsAGKBq3Utj%2B6BJnvh29lkb5ruDPA0Zm0dqNeJnaHAL79TCjLgTi8NHPCIf5KOv6DgE4yl81cW5O8IyvFsA57Pq45Fiu2UCvlZs6HeVzeHLJP2K0WH%2FAJlPu%2F9f39y6dEPmlYnaioaKwRw2ByD08ElvbrxWP8QlX9IsZcUuFM%2F498i58CjEzwwZZefb8cOTKg9P1llbxMNUuMDjAUneGO3E0MMKTNSrMN%2BcgPladPWDI3Wm7Qex5R4lusqkAnUA15UxVdM%2FXcM5UFkssKC3Xhd9A8zLNPyfb8t%2BmjgqSdxCxXYhXmBTtHwkyrbihNmImiF0VZDFeMTWOf7cVXjtcSFMHVB%2BfL4KKLoUz16LmB3cysWJTSupg%2BBFrcy8HauvPaETF9n0%2B9iOed4ciYBA9mF39%2B3rVHHuclj%2ByGztJhrKepEeiKrtcR2AkekVFcupqgZ3OaxqVCLygcgSkZx63S4%2FFkh7S%2FAJsFZV6Qp0tgg64pDqBpwNcp%2BXLybP7%2BonjYf5CKWYvHtvYzFrX0erKNsM0ttbShjC%2BCeBWp8%2BXs%2BoRNLiRAgWo4%2Bt%2BEq80%2B9Q4m7AxtNB%2FOVw2fYPcHZKkC0nrELp8MIC8ycQGOqUBXUVEhuvrFnsjF6gxN1bOSrQ9i2p3X28bhLcWsUUEyvHgTBbk9HYClV%2BINH5J8qW73%2BAPOhIROy5%2Buy327zuGzr%2F9BoUMoapN8fg6enxhHYI22WDIhLOLGcknZsOD4l3dvBckrHimufUW5bTDEYN1PhCu%2BClFQtqfz%2BfEkODhL3bFahSvaPZS1ENtmjOb0qD%2FxRyTCjfIrg5HpeJMlZUleNatDTjN&X-Amz-Signature=3007d51dd2606c0674795cbe4861d3d175e46fda96135d54f2a0ffdf7c3591ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MA2DOR7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDwN4tOKMLPluuVSvdNG0b%2FW3k7n1%2Bz015jMZdP68fycgIgPCNX1vY4ndgclpYe8pT1BN8iBem3v4NdZF29OwVZWIkq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDNnepDjbTUwxBGXYEyrcA5mK6E4yK1ucky5nzMyajIkcnxHWGQWvXsAGKBq3Utj%2B6BJnvh29lkb5ruDPA0Zm0dqNeJnaHAL79TCjLgTi8NHPCIf5KOv6DgE4yl81cW5O8IyvFsA57Pq45Fiu2UCvlZs6HeVzeHLJP2K0WH%2FAJlPu%2F9f39y6dEPmlYnaioaKwRw2ByD08ElvbrxWP8QlX9IsZcUuFM%2F498i58CjEzwwZZefb8cOTKg9P1llbxMNUuMDjAUneGO3E0MMKTNSrMN%2BcgPladPWDI3Wm7Qex5R4lusqkAnUA15UxVdM%2FXcM5UFkssKC3Xhd9A8zLNPyfb8t%2BmjgqSdxCxXYhXmBTtHwkyrbihNmImiF0VZDFeMTWOf7cVXjtcSFMHVB%2BfL4KKLoUz16LmB3cysWJTSupg%2BBFrcy8HauvPaETF9n0%2B9iOed4ciYBA9mF39%2B3rVHHuclj%2ByGztJhrKepEeiKrtcR2AkekVFcupqgZ3OaxqVCLygcgSkZx63S4%2FFkh7S%2FAJsFZV6Qp0tgg64pDqBpwNcp%2BXLybP7%2BonjYf5CKWYvHtvYzFrX0erKNsM0ttbShjC%2BCeBWp8%2BXs%2BoRNLiRAgWo4%2Bt%2BEq80%2B9Q4m7AxtNB%2FOVw2fYPcHZKkC0nrELp8MIC8ycQGOqUBXUVEhuvrFnsjF6gxN1bOSrQ9i2p3X28bhLcWsUUEyvHgTBbk9HYClV%2BINH5J8qW73%2BAPOhIROy5%2Buy327zuGzr%2F9BoUMoapN8fg6enxhHYI22WDIhLOLGcknZsOD4l3dvBckrHimufUW5bTDEYN1PhCu%2BClFQtqfz%2BfEkODhL3bFahSvaPZS1ENtmjOb0qD%2FxRyTCjfIrg5HpeJMlZUleNatDTjN&X-Amz-Signature=99ff346aaffebbd9c8745b91512489f3022b23acfbd909b425c1f9fbc44727cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MA2DOR7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDwN4tOKMLPluuVSvdNG0b%2FW3k7n1%2Bz015jMZdP68fycgIgPCNX1vY4ndgclpYe8pT1BN8iBem3v4NdZF29OwVZWIkq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDNnepDjbTUwxBGXYEyrcA5mK6E4yK1ucky5nzMyajIkcnxHWGQWvXsAGKBq3Utj%2B6BJnvh29lkb5ruDPA0Zm0dqNeJnaHAL79TCjLgTi8NHPCIf5KOv6DgE4yl81cW5O8IyvFsA57Pq45Fiu2UCvlZs6HeVzeHLJP2K0WH%2FAJlPu%2F9f39y6dEPmlYnaioaKwRw2ByD08ElvbrxWP8QlX9IsZcUuFM%2F498i58CjEzwwZZefb8cOTKg9P1llbxMNUuMDjAUneGO3E0MMKTNSrMN%2BcgPladPWDI3Wm7Qex5R4lusqkAnUA15UxVdM%2FXcM5UFkssKC3Xhd9A8zLNPyfb8t%2BmjgqSdxCxXYhXmBTtHwkyrbihNmImiF0VZDFeMTWOf7cVXjtcSFMHVB%2BfL4KKLoUz16LmB3cysWJTSupg%2BBFrcy8HauvPaETF9n0%2B9iOed4ciYBA9mF39%2B3rVHHuclj%2ByGztJhrKepEeiKrtcR2AkekVFcupqgZ3OaxqVCLygcgSkZx63S4%2FFkh7S%2FAJsFZV6Qp0tgg64pDqBpwNcp%2BXLybP7%2BonjYf5CKWYvHtvYzFrX0erKNsM0ttbShjC%2BCeBWp8%2BXs%2BoRNLiRAgWo4%2Bt%2BEq80%2B9Q4m7AxtNB%2FOVw2fYPcHZKkC0nrELp8MIC8ycQGOqUBXUVEhuvrFnsjF6gxN1bOSrQ9i2p3X28bhLcWsUUEyvHgTBbk9HYClV%2BINH5J8qW73%2BAPOhIROy5%2Buy327zuGzr%2F9BoUMoapN8fg6enxhHYI22WDIhLOLGcknZsOD4l3dvBckrHimufUW5bTDEYN1PhCu%2BClFQtqfz%2BfEkODhL3bFahSvaPZS1ENtmjOb0qD%2FxRyTCjfIrg5HpeJMlZUleNatDTjN&X-Amz-Signature=49ba07a3257c1919dd6d1789354f07da4398564caff85b38122f0510c6d265db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MA2DOR7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDwN4tOKMLPluuVSvdNG0b%2FW3k7n1%2Bz015jMZdP68fycgIgPCNX1vY4ndgclpYe8pT1BN8iBem3v4NdZF29OwVZWIkq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDNnepDjbTUwxBGXYEyrcA5mK6E4yK1ucky5nzMyajIkcnxHWGQWvXsAGKBq3Utj%2B6BJnvh29lkb5ruDPA0Zm0dqNeJnaHAL79TCjLgTi8NHPCIf5KOv6DgE4yl81cW5O8IyvFsA57Pq45Fiu2UCvlZs6HeVzeHLJP2K0WH%2FAJlPu%2F9f39y6dEPmlYnaioaKwRw2ByD08ElvbrxWP8QlX9IsZcUuFM%2F498i58CjEzwwZZefb8cOTKg9P1llbxMNUuMDjAUneGO3E0MMKTNSrMN%2BcgPladPWDI3Wm7Qex5R4lusqkAnUA15UxVdM%2FXcM5UFkssKC3Xhd9A8zLNPyfb8t%2BmjgqSdxCxXYhXmBTtHwkyrbihNmImiF0VZDFeMTWOf7cVXjtcSFMHVB%2BfL4KKLoUz16LmB3cysWJTSupg%2BBFrcy8HauvPaETF9n0%2B9iOed4ciYBA9mF39%2B3rVHHuclj%2ByGztJhrKepEeiKrtcR2AkekVFcupqgZ3OaxqVCLygcgSkZx63S4%2FFkh7S%2FAJsFZV6Qp0tgg64pDqBpwNcp%2BXLybP7%2BonjYf5CKWYvHtvYzFrX0erKNsM0ttbShjC%2BCeBWp8%2BXs%2BoRNLiRAgWo4%2Bt%2BEq80%2B9Q4m7AxtNB%2FOVw2fYPcHZKkC0nrELp8MIC8ycQGOqUBXUVEhuvrFnsjF6gxN1bOSrQ9i2p3X28bhLcWsUUEyvHgTBbk9HYClV%2BINH5J8qW73%2BAPOhIROy5%2Buy327zuGzr%2F9BoUMoapN8fg6enxhHYI22WDIhLOLGcknZsOD4l3dvBckrHimufUW5bTDEYN1PhCu%2BClFQtqfz%2BfEkODhL3bFahSvaPZS1ENtmjOb0qD%2FxRyTCjfIrg5HpeJMlZUleNatDTjN&X-Amz-Signature=d5fe0ccd4a0133737d4624f4ce692b0f5fec6cbc698ce42943392aab6c4f2793&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MA2DOR7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDwN4tOKMLPluuVSvdNG0b%2FW3k7n1%2Bz015jMZdP68fycgIgPCNX1vY4ndgclpYe8pT1BN8iBem3v4NdZF29OwVZWIkq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDNnepDjbTUwxBGXYEyrcA5mK6E4yK1ucky5nzMyajIkcnxHWGQWvXsAGKBq3Utj%2B6BJnvh29lkb5ruDPA0Zm0dqNeJnaHAL79TCjLgTi8NHPCIf5KOv6DgE4yl81cW5O8IyvFsA57Pq45Fiu2UCvlZs6HeVzeHLJP2K0WH%2FAJlPu%2F9f39y6dEPmlYnaioaKwRw2ByD08ElvbrxWP8QlX9IsZcUuFM%2F498i58CjEzwwZZefb8cOTKg9P1llbxMNUuMDjAUneGO3E0MMKTNSrMN%2BcgPladPWDI3Wm7Qex5R4lusqkAnUA15UxVdM%2FXcM5UFkssKC3Xhd9A8zLNPyfb8t%2BmjgqSdxCxXYhXmBTtHwkyrbihNmImiF0VZDFeMTWOf7cVXjtcSFMHVB%2BfL4KKLoUz16LmB3cysWJTSupg%2BBFrcy8HauvPaETF9n0%2B9iOed4ciYBA9mF39%2B3rVHHuclj%2ByGztJhrKepEeiKrtcR2AkekVFcupqgZ3OaxqVCLygcgSkZx63S4%2FFkh7S%2FAJsFZV6Qp0tgg64pDqBpwNcp%2BXLybP7%2BonjYf5CKWYvHtvYzFrX0erKNsM0ttbShjC%2BCeBWp8%2BXs%2BoRNLiRAgWo4%2Bt%2BEq80%2B9Q4m7AxtNB%2FOVw2fYPcHZKkC0nrELp8MIC8ycQGOqUBXUVEhuvrFnsjF6gxN1bOSrQ9i2p3X28bhLcWsUUEyvHgTBbk9HYClV%2BINH5J8qW73%2BAPOhIROy5%2Buy327zuGzr%2F9BoUMoapN8fg6enxhHYI22WDIhLOLGcknZsOD4l3dvBckrHimufUW5bTDEYN1PhCu%2BClFQtqfz%2BfEkODhL3bFahSvaPZS1ENtmjOb0qD%2FxRyTCjfIrg5HpeJMlZUleNatDTjN&X-Amz-Signature=1149086792b65c6c543bd20a0f827fd989424f7f6759a9a703176c34d14a995f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MA2DOR7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDwN4tOKMLPluuVSvdNG0b%2FW3k7n1%2Bz015jMZdP68fycgIgPCNX1vY4ndgclpYe8pT1BN8iBem3v4NdZF29OwVZWIkq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDNnepDjbTUwxBGXYEyrcA5mK6E4yK1ucky5nzMyajIkcnxHWGQWvXsAGKBq3Utj%2B6BJnvh29lkb5ruDPA0Zm0dqNeJnaHAL79TCjLgTi8NHPCIf5KOv6DgE4yl81cW5O8IyvFsA57Pq45Fiu2UCvlZs6HeVzeHLJP2K0WH%2FAJlPu%2F9f39y6dEPmlYnaioaKwRw2ByD08ElvbrxWP8QlX9IsZcUuFM%2F498i58CjEzwwZZefb8cOTKg9P1llbxMNUuMDjAUneGO3E0MMKTNSrMN%2BcgPladPWDI3Wm7Qex5R4lusqkAnUA15UxVdM%2FXcM5UFkssKC3Xhd9A8zLNPyfb8t%2BmjgqSdxCxXYhXmBTtHwkyrbihNmImiF0VZDFeMTWOf7cVXjtcSFMHVB%2BfL4KKLoUz16LmB3cysWJTSupg%2BBFrcy8HauvPaETF9n0%2B9iOed4ciYBA9mF39%2B3rVHHuclj%2ByGztJhrKepEeiKrtcR2AkekVFcupqgZ3OaxqVCLygcgSkZx63S4%2FFkh7S%2FAJsFZV6Qp0tgg64pDqBpwNcp%2BXLybP7%2BonjYf5CKWYvHtvYzFrX0erKNsM0ttbShjC%2BCeBWp8%2BXs%2BoRNLiRAgWo4%2Bt%2BEq80%2B9Q4m7AxtNB%2FOVw2fYPcHZKkC0nrELp8MIC8ycQGOqUBXUVEhuvrFnsjF6gxN1bOSrQ9i2p3X28bhLcWsUUEyvHgTBbk9HYClV%2BINH5J8qW73%2BAPOhIROy5%2Buy327zuGzr%2F9BoUMoapN8fg6enxhHYI22WDIhLOLGcknZsOD4l3dvBckrHimufUW5bTDEYN1PhCu%2BClFQtqfz%2BfEkODhL3bFahSvaPZS1ENtmjOb0qD%2FxRyTCjfIrg5HpeJMlZUleNatDTjN&X-Amz-Signature=a9e4778a17b04fddea815082f3e1b3ef7250941823a54d64427a63256dc6df98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MA2DOR7%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T201116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDwN4tOKMLPluuVSvdNG0b%2FW3k7n1%2Bz015jMZdP68fycgIgPCNX1vY4ndgclpYe8pT1BN8iBem3v4NdZF29OwVZWIkq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDNnepDjbTUwxBGXYEyrcA5mK6E4yK1ucky5nzMyajIkcnxHWGQWvXsAGKBq3Utj%2B6BJnvh29lkb5ruDPA0Zm0dqNeJnaHAL79TCjLgTi8NHPCIf5KOv6DgE4yl81cW5O8IyvFsA57Pq45Fiu2UCvlZs6HeVzeHLJP2K0WH%2FAJlPu%2F9f39y6dEPmlYnaioaKwRw2ByD08ElvbrxWP8QlX9IsZcUuFM%2F498i58CjEzwwZZefb8cOTKg9P1llbxMNUuMDjAUneGO3E0MMKTNSrMN%2BcgPladPWDI3Wm7Qex5R4lusqkAnUA15UxVdM%2FXcM5UFkssKC3Xhd9A8zLNPyfb8t%2BmjgqSdxCxXYhXmBTtHwkyrbihNmImiF0VZDFeMTWOf7cVXjtcSFMHVB%2BfL4KKLoUz16LmB3cysWJTSupg%2BBFrcy8HauvPaETF9n0%2B9iOed4ciYBA9mF39%2B3rVHHuclj%2ByGztJhrKepEeiKrtcR2AkekVFcupqgZ3OaxqVCLygcgSkZx63S4%2FFkh7S%2FAJsFZV6Qp0tgg64pDqBpwNcp%2BXLybP7%2BonjYf5CKWYvHtvYzFrX0erKNsM0ttbShjC%2BCeBWp8%2BXs%2BoRNLiRAgWo4%2Bt%2BEq80%2B9Q4m7AxtNB%2FOVw2fYPcHZKkC0nrELp8MIC8ycQGOqUBXUVEhuvrFnsjF6gxN1bOSrQ9i2p3X28bhLcWsUUEyvHgTBbk9HYClV%2BINH5J8qW73%2BAPOhIROy5%2Buy327zuGzr%2F9BoUMoapN8fg6enxhHYI22WDIhLOLGcknZsOD4l3dvBckrHimufUW5bTDEYN1PhCu%2BClFQtqfz%2BfEkODhL3bFahSvaPZS1ENtmjOb0qD%2FxRyTCjfIrg5HpeJMlZUleNatDTjN&X-Amz-Signature=cb1adbc9e2122edaa4024eecd2fc86956f81ba6627288c9aa17d7658989359c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
