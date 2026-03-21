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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXO4I3HX%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC%2FUPUnuS%2FcEJhjBZJ8SFCM6m%2F9e9L379zp6JUFdMTZMgIgTwhZdwGbprCaN23K%2F47UNQsf2G2rP5wNcgYqzJCifRgq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDJjWEB1yCazh2IQl%2ByrcAxdX6pTaaH8s7wCbn7T%2FDxtsXNL0v%2BmAH168IMG8BCU4wVOqGgMSDYRK6v2zN9WibSTcQKReGNHPaOE5uxshy9gDijW3DJzAVgDGdoE3NOnHmDF%2B3IsLRr8m46zbHa5f5u9P%2BCxatO%2BYiNJiXMdQuhmPEWQcRO%2FwIxXSIhYqz1KAdO1T1ngbSTQGTm8aciFUP%2F2U2XcyTCFXMAwSPvOQ4mdnkPnIpwOjVhDBfdv1GC2mqvqsN4N98GuClcWdUyrFB6%2FMNzzvU8rgHgvLDD1ihFC1fDvDASdjGkPBjN%2FTaukzTj5pYeRF9BrD7Is3E8jqOefCVpNK64kdad%2Fo0LhID7Uv18zbfnIS31Q6vBeJRDPvTzUuLCOpsfKSkSqhV46W8HHWoQ9iQaGe5s7iQdXx06LriLKDXjl8VS27Kj5eAMG9UNR3UaIkVDeu803iSFjUNm0zEg3w1EpLUwgHSw89YU5L7PXfebVLZ4wofXP%2F2crO2voSa1A1xh5nwRQr21Q1JGMs%2Bn30Sz8j1HlSalBntFSSlvmvUVuPD7gj5N7mOCQO4rZ8J8p2p4qS3KzL4DurjPMy%2Ff4Ve61LMDlc9I0xAVtHHm6SbDH6RsV8tcTAbNq48fHGZYlgsJgVkXexMNzg980GOqUBF%2BaVnByt8iB%2FGZFT1mLwbn5nETIuRrLog%2BjEegwTUzCd3ddsvxqm7Fzmd1WHZUZ%2FVzrckiVDckncoXvoQJZxtP4ShE5i8v0FlG%2BHO2c0jYn3wy7Q3UIxkol6cNZQsPmHUgoz9e8sY6XUuQuWghXiYKxKW6PSngCtVXET1UncJ7xENVMqW19hyp0uIwe%2BqpkZXYQVDy5wI3kp0qTZEVDG%2Ff0v1TDk&X-Amz-Signature=f6cb0b5c13797a6d8ddb9fe2204b6f93ed40706257ac09b4619ccdcda68d17ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXO4I3HX%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC%2FUPUnuS%2FcEJhjBZJ8SFCM6m%2F9e9L379zp6JUFdMTZMgIgTwhZdwGbprCaN23K%2F47UNQsf2G2rP5wNcgYqzJCifRgq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDJjWEB1yCazh2IQl%2ByrcAxdX6pTaaH8s7wCbn7T%2FDxtsXNL0v%2BmAH168IMG8BCU4wVOqGgMSDYRK6v2zN9WibSTcQKReGNHPaOE5uxshy9gDijW3DJzAVgDGdoE3NOnHmDF%2B3IsLRr8m46zbHa5f5u9P%2BCxatO%2BYiNJiXMdQuhmPEWQcRO%2FwIxXSIhYqz1KAdO1T1ngbSTQGTm8aciFUP%2F2U2XcyTCFXMAwSPvOQ4mdnkPnIpwOjVhDBfdv1GC2mqvqsN4N98GuClcWdUyrFB6%2FMNzzvU8rgHgvLDD1ihFC1fDvDASdjGkPBjN%2FTaukzTj5pYeRF9BrD7Is3E8jqOefCVpNK64kdad%2Fo0LhID7Uv18zbfnIS31Q6vBeJRDPvTzUuLCOpsfKSkSqhV46W8HHWoQ9iQaGe5s7iQdXx06LriLKDXjl8VS27Kj5eAMG9UNR3UaIkVDeu803iSFjUNm0zEg3w1EpLUwgHSw89YU5L7PXfebVLZ4wofXP%2F2crO2voSa1A1xh5nwRQr21Q1JGMs%2Bn30Sz8j1HlSalBntFSSlvmvUVuPD7gj5N7mOCQO4rZ8J8p2p4qS3KzL4DurjPMy%2Ff4Ve61LMDlc9I0xAVtHHm6SbDH6RsV8tcTAbNq48fHGZYlgsJgVkXexMNzg980GOqUBF%2BaVnByt8iB%2FGZFT1mLwbn5nETIuRrLog%2BjEegwTUzCd3ddsvxqm7Fzmd1WHZUZ%2FVzrckiVDckncoXvoQJZxtP4ShE5i8v0FlG%2BHO2c0jYn3wy7Q3UIxkol6cNZQsPmHUgoz9e8sY6XUuQuWghXiYKxKW6PSngCtVXET1UncJ7xENVMqW19hyp0uIwe%2BqpkZXYQVDy5wI3kp0qTZEVDG%2Ff0v1TDk&X-Amz-Signature=cad66c91e05b43c6ed8e28ac12be96bc6699e6bf226d00fb690091126d97453d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXO4I3HX%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC%2FUPUnuS%2FcEJhjBZJ8SFCM6m%2F9e9L379zp6JUFdMTZMgIgTwhZdwGbprCaN23K%2F47UNQsf2G2rP5wNcgYqzJCifRgq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDJjWEB1yCazh2IQl%2ByrcAxdX6pTaaH8s7wCbn7T%2FDxtsXNL0v%2BmAH168IMG8BCU4wVOqGgMSDYRK6v2zN9WibSTcQKReGNHPaOE5uxshy9gDijW3DJzAVgDGdoE3NOnHmDF%2B3IsLRr8m46zbHa5f5u9P%2BCxatO%2BYiNJiXMdQuhmPEWQcRO%2FwIxXSIhYqz1KAdO1T1ngbSTQGTm8aciFUP%2F2U2XcyTCFXMAwSPvOQ4mdnkPnIpwOjVhDBfdv1GC2mqvqsN4N98GuClcWdUyrFB6%2FMNzzvU8rgHgvLDD1ihFC1fDvDASdjGkPBjN%2FTaukzTj5pYeRF9BrD7Is3E8jqOefCVpNK64kdad%2Fo0LhID7Uv18zbfnIS31Q6vBeJRDPvTzUuLCOpsfKSkSqhV46W8HHWoQ9iQaGe5s7iQdXx06LriLKDXjl8VS27Kj5eAMG9UNR3UaIkVDeu803iSFjUNm0zEg3w1EpLUwgHSw89YU5L7PXfebVLZ4wofXP%2F2crO2voSa1A1xh5nwRQr21Q1JGMs%2Bn30Sz8j1HlSalBntFSSlvmvUVuPD7gj5N7mOCQO4rZ8J8p2p4qS3KzL4DurjPMy%2Ff4Ve61LMDlc9I0xAVtHHm6SbDH6RsV8tcTAbNq48fHGZYlgsJgVkXexMNzg980GOqUBF%2BaVnByt8iB%2FGZFT1mLwbn5nETIuRrLog%2BjEegwTUzCd3ddsvxqm7Fzmd1WHZUZ%2FVzrckiVDckncoXvoQJZxtP4ShE5i8v0FlG%2BHO2c0jYn3wy7Q3UIxkol6cNZQsPmHUgoz9e8sY6XUuQuWghXiYKxKW6PSngCtVXET1UncJ7xENVMqW19hyp0uIwe%2BqpkZXYQVDy5wI3kp0qTZEVDG%2Ff0v1TDk&X-Amz-Signature=37ec1455e5c05e01622e4c9cefdd7c4b5901950c3b0676c617bd200f014d2006&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXO4I3HX%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC%2FUPUnuS%2FcEJhjBZJ8SFCM6m%2F9e9L379zp6JUFdMTZMgIgTwhZdwGbprCaN23K%2F47UNQsf2G2rP5wNcgYqzJCifRgq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDJjWEB1yCazh2IQl%2ByrcAxdX6pTaaH8s7wCbn7T%2FDxtsXNL0v%2BmAH168IMG8BCU4wVOqGgMSDYRK6v2zN9WibSTcQKReGNHPaOE5uxshy9gDijW3DJzAVgDGdoE3NOnHmDF%2B3IsLRr8m46zbHa5f5u9P%2BCxatO%2BYiNJiXMdQuhmPEWQcRO%2FwIxXSIhYqz1KAdO1T1ngbSTQGTm8aciFUP%2F2U2XcyTCFXMAwSPvOQ4mdnkPnIpwOjVhDBfdv1GC2mqvqsN4N98GuClcWdUyrFB6%2FMNzzvU8rgHgvLDD1ihFC1fDvDASdjGkPBjN%2FTaukzTj5pYeRF9BrD7Is3E8jqOefCVpNK64kdad%2Fo0LhID7Uv18zbfnIS31Q6vBeJRDPvTzUuLCOpsfKSkSqhV46W8HHWoQ9iQaGe5s7iQdXx06LriLKDXjl8VS27Kj5eAMG9UNR3UaIkVDeu803iSFjUNm0zEg3w1EpLUwgHSw89YU5L7PXfebVLZ4wofXP%2F2crO2voSa1A1xh5nwRQr21Q1JGMs%2Bn30Sz8j1HlSalBntFSSlvmvUVuPD7gj5N7mOCQO4rZ8J8p2p4qS3KzL4DurjPMy%2Ff4Ve61LMDlc9I0xAVtHHm6SbDH6RsV8tcTAbNq48fHGZYlgsJgVkXexMNzg980GOqUBF%2BaVnByt8iB%2FGZFT1mLwbn5nETIuRrLog%2BjEegwTUzCd3ddsvxqm7Fzmd1WHZUZ%2FVzrckiVDckncoXvoQJZxtP4ShE5i8v0FlG%2BHO2c0jYn3wy7Q3UIxkol6cNZQsPmHUgoz9e8sY6XUuQuWghXiYKxKW6PSngCtVXET1UncJ7xENVMqW19hyp0uIwe%2BqpkZXYQVDy5wI3kp0qTZEVDG%2Ff0v1TDk&X-Amz-Signature=4f9f663cb386f2bf8752e11e8f44c809080dc67cd5bc91f8b0d4a666e8ea0583&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXO4I3HX%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC%2FUPUnuS%2FcEJhjBZJ8SFCM6m%2F9e9L379zp6JUFdMTZMgIgTwhZdwGbprCaN23K%2F47UNQsf2G2rP5wNcgYqzJCifRgq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDJjWEB1yCazh2IQl%2ByrcAxdX6pTaaH8s7wCbn7T%2FDxtsXNL0v%2BmAH168IMG8BCU4wVOqGgMSDYRK6v2zN9WibSTcQKReGNHPaOE5uxshy9gDijW3DJzAVgDGdoE3NOnHmDF%2B3IsLRr8m46zbHa5f5u9P%2BCxatO%2BYiNJiXMdQuhmPEWQcRO%2FwIxXSIhYqz1KAdO1T1ngbSTQGTm8aciFUP%2F2U2XcyTCFXMAwSPvOQ4mdnkPnIpwOjVhDBfdv1GC2mqvqsN4N98GuClcWdUyrFB6%2FMNzzvU8rgHgvLDD1ihFC1fDvDASdjGkPBjN%2FTaukzTj5pYeRF9BrD7Is3E8jqOefCVpNK64kdad%2Fo0LhID7Uv18zbfnIS31Q6vBeJRDPvTzUuLCOpsfKSkSqhV46W8HHWoQ9iQaGe5s7iQdXx06LriLKDXjl8VS27Kj5eAMG9UNR3UaIkVDeu803iSFjUNm0zEg3w1EpLUwgHSw89YU5L7PXfebVLZ4wofXP%2F2crO2voSa1A1xh5nwRQr21Q1JGMs%2Bn30Sz8j1HlSalBntFSSlvmvUVuPD7gj5N7mOCQO4rZ8J8p2p4qS3KzL4DurjPMy%2Ff4Ve61LMDlc9I0xAVtHHm6SbDH6RsV8tcTAbNq48fHGZYlgsJgVkXexMNzg980GOqUBF%2BaVnByt8iB%2FGZFT1mLwbn5nETIuRrLog%2BjEegwTUzCd3ddsvxqm7Fzmd1WHZUZ%2FVzrckiVDckncoXvoQJZxtP4ShE5i8v0FlG%2BHO2c0jYn3wy7Q3UIxkol6cNZQsPmHUgoz9e8sY6XUuQuWghXiYKxKW6PSngCtVXET1UncJ7xENVMqW19hyp0uIwe%2BqpkZXYQVDy5wI3kp0qTZEVDG%2Ff0v1TDk&X-Amz-Signature=acfd9410590893c624c1f79e5313bee7f93fc870d2ff797bf5cb2ab51c52b7e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXO4I3HX%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC%2FUPUnuS%2FcEJhjBZJ8SFCM6m%2F9e9L379zp6JUFdMTZMgIgTwhZdwGbprCaN23K%2F47UNQsf2G2rP5wNcgYqzJCifRgq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDJjWEB1yCazh2IQl%2ByrcAxdX6pTaaH8s7wCbn7T%2FDxtsXNL0v%2BmAH168IMG8BCU4wVOqGgMSDYRK6v2zN9WibSTcQKReGNHPaOE5uxshy9gDijW3DJzAVgDGdoE3NOnHmDF%2B3IsLRr8m46zbHa5f5u9P%2BCxatO%2BYiNJiXMdQuhmPEWQcRO%2FwIxXSIhYqz1KAdO1T1ngbSTQGTm8aciFUP%2F2U2XcyTCFXMAwSPvOQ4mdnkPnIpwOjVhDBfdv1GC2mqvqsN4N98GuClcWdUyrFB6%2FMNzzvU8rgHgvLDD1ihFC1fDvDASdjGkPBjN%2FTaukzTj5pYeRF9BrD7Is3E8jqOefCVpNK64kdad%2Fo0LhID7Uv18zbfnIS31Q6vBeJRDPvTzUuLCOpsfKSkSqhV46W8HHWoQ9iQaGe5s7iQdXx06LriLKDXjl8VS27Kj5eAMG9UNR3UaIkVDeu803iSFjUNm0zEg3w1EpLUwgHSw89YU5L7PXfebVLZ4wofXP%2F2crO2voSa1A1xh5nwRQr21Q1JGMs%2Bn30Sz8j1HlSalBntFSSlvmvUVuPD7gj5N7mOCQO4rZ8J8p2p4qS3KzL4DurjPMy%2Ff4Ve61LMDlc9I0xAVtHHm6SbDH6RsV8tcTAbNq48fHGZYlgsJgVkXexMNzg980GOqUBF%2BaVnByt8iB%2FGZFT1mLwbn5nETIuRrLog%2BjEegwTUzCd3ddsvxqm7Fzmd1WHZUZ%2FVzrckiVDckncoXvoQJZxtP4ShE5i8v0FlG%2BHO2c0jYn3wy7Q3UIxkol6cNZQsPmHUgoz9e8sY6XUuQuWghXiYKxKW6PSngCtVXET1UncJ7xENVMqW19hyp0uIwe%2BqpkZXYQVDy5wI3kp0qTZEVDG%2Ff0v1TDk&X-Amz-Signature=f29a96df1d77b3de01244be354bc632ff6562b03e955bcbfbe1da0f2f7f24547&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXO4I3HX%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC%2FUPUnuS%2FcEJhjBZJ8SFCM6m%2F9e9L379zp6JUFdMTZMgIgTwhZdwGbprCaN23K%2F47UNQsf2G2rP5wNcgYqzJCifRgq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDJjWEB1yCazh2IQl%2ByrcAxdX6pTaaH8s7wCbn7T%2FDxtsXNL0v%2BmAH168IMG8BCU4wVOqGgMSDYRK6v2zN9WibSTcQKReGNHPaOE5uxshy9gDijW3DJzAVgDGdoE3NOnHmDF%2B3IsLRr8m46zbHa5f5u9P%2BCxatO%2BYiNJiXMdQuhmPEWQcRO%2FwIxXSIhYqz1KAdO1T1ngbSTQGTm8aciFUP%2F2U2XcyTCFXMAwSPvOQ4mdnkPnIpwOjVhDBfdv1GC2mqvqsN4N98GuClcWdUyrFB6%2FMNzzvU8rgHgvLDD1ihFC1fDvDASdjGkPBjN%2FTaukzTj5pYeRF9BrD7Is3E8jqOefCVpNK64kdad%2Fo0LhID7Uv18zbfnIS31Q6vBeJRDPvTzUuLCOpsfKSkSqhV46W8HHWoQ9iQaGe5s7iQdXx06LriLKDXjl8VS27Kj5eAMG9UNR3UaIkVDeu803iSFjUNm0zEg3w1EpLUwgHSw89YU5L7PXfebVLZ4wofXP%2F2crO2voSa1A1xh5nwRQr21Q1JGMs%2Bn30Sz8j1HlSalBntFSSlvmvUVuPD7gj5N7mOCQO4rZ8J8p2p4qS3KzL4DurjPMy%2Ff4Ve61LMDlc9I0xAVtHHm6SbDH6RsV8tcTAbNq48fHGZYlgsJgVkXexMNzg980GOqUBF%2BaVnByt8iB%2FGZFT1mLwbn5nETIuRrLog%2BjEegwTUzCd3ddsvxqm7Fzmd1WHZUZ%2FVzrckiVDckncoXvoQJZxtP4ShE5i8v0FlG%2BHO2c0jYn3wy7Q3UIxkol6cNZQsPmHUgoz9e8sY6XUuQuWghXiYKxKW6PSngCtVXET1UncJ7xENVMqW19hyp0uIwe%2BqpkZXYQVDy5wI3kp0qTZEVDG%2Ff0v1TDk&X-Amz-Signature=afb3b41ec0eb2342997bdc83aa1570ef3635a309b123501c3ad7b3956b3b0c0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXO4I3HX%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC%2FUPUnuS%2FcEJhjBZJ8SFCM6m%2F9e9L379zp6JUFdMTZMgIgTwhZdwGbprCaN23K%2F47UNQsf2G2rP5wNcgYqzJCifRgq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDJjWEB1yCazh2IQl%2ByrcAxdX6pTaaH8s7wCbn7T%2FDxtsXNL0v%2BmAH168IMG8BCU4wVOqGgMSDYRK6v2zN9WibSTcQKReGNHPaOE5uxshy9gDijW3DJzAVgDGdoE3NOnHmDF%2B3IsLRr8m46zbHa5f5u9P%2BCxatO%2BYiNJiXMdQuhmPEWQcRO%2FwIxXSIhYqz1KAdO1T1ngbSTQGTm8aciFUP%2F2U2XcyTCFXMAwSPvOQ4mdnkPnIpwOjVhDBfdv1GC2mqvqsN4N98GuClcWdUyrFB6%2FMNzzvU8rgHgvLDD1ihFC1fDvDASdjGkPBjN%2FTaukzTj5pYeRF9BrD7Is3E8jqOefCVpNK64kdad%2Fo0LhID7Uv18zbfnIS31Q6vBeJRDPvTzUuLCOpsfKSkSqhV46W8HHWoQ9iQaGe5s7iQdXx06LriLKDXjl8VS27Kj5eAMG9UNR3UaIkVDeu803iSFjUNm0zEg3w1EpLUwgHSw89YU5L7PXfebVLZ4wofXP%2F2crO2voSa1A1xh5nwRQr21Q1JGMs%2Bn30Sz8j1HlSalBntFSSlvmvUVuPD7gj5N7mOCQO4rZ8J8p2p4qS3KzL4DurjPMy%2Ff4Ve61LMDlc9I0xAVtHHm6SbDH6RsV8tcTAbNq48fHGZYlgsJgVkXexMNzg980GOqUBF%2BaVnByt8iB%2FGZFT1mLwbn5nETIuRrLog%2BjEegwTUzCd3ddsvxqm7Fzmd1WHZUZ%2FVzrckiVDckncoXvoQJZxtP4ShE5i8v0FlG%2BHO2c0jYn3wy7Q3UIxkol6cNZQsPmHUgoz9e8sY6XUuQuWghXiYKxKW6PSngCtVXET1UncJ7xENVMqW19hyp0uIwe%2BqpkZXYQVDy5wI3kp0qTZEVDG%2Ff0v1TDk&X-Amz-Signature=71acc5ffc59bd0e99423fceb859ffd27704be102128d1bccce546c3b473b6a5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXO4I3HX%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC%2FUPUnuS%2FcEJhjBZJ8SFCM6m%2F9e9L379zp6JUFdMTZMgIgTwhZdwGbprCaN23K%2F47UNQsf2G2rP5wNcgYqzJCifRgq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDJjWEB1yCazh2IQl%2ByrcAxdX6pTaaH8s7wCbn7T%2FDxtsXNL0v%2BmAH168IMG8BCU4wVOqGgMSDYRK6v2zN9WibSTcQKReGNHPaOE5uxshy9gDijW3DJzAVgDGdoE3NOnHmDF%2B3IsLRr8m46zbHa5f5u9P%2BCxatO%2BYiNJiXMdQuhmPEWQcRO%2FwIxXSIhYqz1KAdO1T1ngbSTQGTm8aciFUP%2F2U2XcyTCFXMAwSPvOQ4mdnkPnIpwOjVhDBfdv1GC2mqvqsN4N98GuClcWdUyrFB6%2FMNzzvU8rgHgvLDD1ihFC1fDvDASdjGkPBjN%2FTaukzTj5pYeRF9BrD7Is3E8jqOefCVpNK64kdad%2Fo0LhID7Uv18zbfnIS31Q6vBeJRDPvTzUuLCOpsfKSkSqhV46W8HHWoQ9iQaGe5s7iQdXx06LriLKDXjl8VS27Kj5eAMG9UNR3UaIkVDeu803iSFjUNm0zEg3w1EpLUwgHSw89YU5L7PXfebVLZ4wofXP%2F2crO2voSa1A1xh5nwRQr21Q1JGMs%2Bn30Sz8j1HlSalBntFSSlvmvUVuPD7gj5N7mOCQO4rZ8J8p2p4qS3KzL4DurjPMy%2Ff4Ve61LMDlc9I0xAVtHHm6SbDH6RsV8tcTAbNq48fHGZYlgsJgVkXexMNzg980GOqUBF%2BaVnByt8iB%2FGZFT1mLwbn5nETIuRrLog%2BjEegwTUzCd3ddsvxqm7Fzmd1WHZUZ%2FVzrckiVDckncoXvoQJZxtP4ShE5i8v0FlG%2BHO2c0jYn3wy7Q3UIxkol6cNZQsPmHUgoz9e8sY6XUuQuWghXiYKxKW6PSngCtVXET1UncJ7xENVMqW19hyp0uIwe%2BqpkZXYQVDy5wI3kp0qTZEVDG%2Ff0v1TDk&X-Amz-Signature=10958ae401c579fef92f71609ac7b1b05d0e84adb28b497c693dc0d483f8765a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXO4I3HX%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC%2FUPUnuS%2FcEJhjBZJ8SFCM6m%2F9e9L379zp6JUFdMTZMgIgTwhZdwGbprCaN23K%2F47UNQsf2G2rP5wNcgYqzJCifRgq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDJjWEB1yCazh2IQl%2ByrcAxdX6pTaaH8s7wCbn7T%2FDxtsXNL0v%2BmAH168IMG8BCU4wVOqGgMSDYRK6v2zN9WibSTcQKReGNHPaOE5uxshy9gDijW3DJzAVgDGdoE3NOnHmDF%2B3IsLRr8m46zbHa5f5u9P%2BCxatO%2BYiNJiXMdQuhmPEWQcRO%2FwIxXSIhYqz1KAdO1T1ngbSTQGTm8aciFUP%2F2U2XcyTCFXMAwSPvOQ4mdnkPnIpwOjVhDBfdv1GC2mqvqsN4N98GuClcWdUyrFB6%2FMNzzvU8rgHgvLDD1ihFC1fDvDASdjGkPBjN%2FTaukzTj5pYeRF9BrD7Is3E8jqOefCVpNK64kdad%2Fo0LhID7Uv18zbfnIS31Q6vBeJRDPvTzUuLCOpsfKSkSqhV46W8HHWoQ9iQaGe5s7iQdXx06LriLKDXjl8VS27Kj5eAMG9UNR3UaIkVDeu803iSFjUNm0zEg3w1EpLUwgHSw89YU5L7PXfebVLZ4wofXP%2F2crO2voSa1A1xh5nwRQr21Q1JGMs%2Bn30Sz8j1HlSalBntFSSlvmvUVuPD7gj5N7mOCQO4rZ8J8p2p4qS3KzL4DurjPMy%2Ff4Ve61LMDlc9I0xAVtHHm6SbDH6RsV8tcTAbNq48fHGZYlgsJgVkXexMNzg980GOqUBF%2BaVnByt8iB%2FGZFT1mLwbn5nETIuRrLog%2BjEegwTUzCd3ddsvxqm7Fzmd1WHZUZ%2FVzrckiVDckncoXvoQJZxtP4ShE5i8v0FlG%2BHO2c0jYn3wy7Q3UIxkol6cNZQsPmHUgoz9e8sY6XUuQuWghXiYKxKW6PSngCtVXET1UncJ7xENVMqW19hyp0uIwe%2BqpkZXYQVDy5wI3kp0qTZEVDG%2Ff0v1TDk&X-Amz-Signature=23d1cf6a819cdc2934737f4e675434e8213eb2e81cb4aaf86343d5959ff3740c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXO4I3HX%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC%2FUPUnuS%2FcEJhjBZJ8SFCM6m%2F9e9L379zp6JUFdMTZMgIgTwhZdwGbprCaN23K%2F47UNQsf2G2rP5wNcgYqzJCifRgq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDJjWEB1yCazh2IQl%2ByrcAxdX6pTaaH8s7wCbn7T%2FDxtsXNL0v%2BmAH168IMG8BCU4wVOqGgMSDYRK6v2zN9WibSTcQKReGNHPaOE5uxshy9gDijW3DJzAVgDGdoE3NOnHmDF%2B3IsLRr8m46zbHa5f5u9P%2BCxatO%2BYiNJiXMdQuhmPEWQcRO%2FwIxXSIhYqz1KAdO1T1ngbSTQGTm8aciFUP%2F2U2XcyTCFXMAwSPvOQ4mdnkPnIpwOjVhDBfdv1GC2mqvqsN4N98GuClcWdUyrFB6%2FMNzzvU8rgHgvLDD1ihFC1fDvDASdjGkPBjN%2FTaukzTj5pYeRF9BrD7Is3E8jqOefCVpNK64kdad%2Fo0LhID7Uv18zbfnIS31Q6vBeJRDPvTzUuLCOpsfKSkSqhV46W8HHWoQ9iQaGe5s7iQdXx06LriLKDXjl8VS27Kj5eAMG9UNR3UaIkVDeu803iSFjUNm0zEg3w1EpLUwgHSw89YU5L7PXfebVLZ4wofXP%2F2crO2voSa1A1xh5nwRQr21Q1JGMs%2Bn30Sz8j1HlSalBntFSSlvmvUVuPD7gj5N7mOCQO4rZ8J8p2p4qS3KzL4DurjPMy%2Ff4Ve61LMDlc9I0xAVtHHm6SbDH6RsV8tcTAbNq48fHGZYlgsJgVkXexMNzg980GOqUBF%2BaVnByt8iB%2FGZFT1mLwbn5nETIuRrLog%2BjEegwTUzCd3ddsvxqm7Fzmd1WHZUZ%2FVzrckiVDckncoXvoQJZxtP4ShE5i8v0FlG%2BHO2c0jYn3wy7Q3UIxkol6cNZQsPmHUgoz9e8sY6XUuQuWghXiYKxKW6PSngCtVXET1UncJ7xENVMqW19hyp0uIwe%2BqpkZXYQVDy5wI3kp0qTZEVDG%2Ff0v1TDk&X-Amz-Signature=9a916cbc7906a2f451610220bc8bb459cd053b1ff759b363b311800f28c6ebcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXO4I3HX%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC%2FUPUnuS%2FcEJhjBZJ8SFCM6m%2F9e9L379zp6JUFdMTZMgIgTwhZdwGbprCaN23K%2F47UNQsf2G2rP5wNcgYqzJCifRgq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDJjWEB1yCazh2IQl%2ByrcAxdX6pTaaH8s7wCbn7T%2FDxtsXNL0v%2BmAH168IMG8BCU4wVOqGgMSDYRK6v2zN9WibSTcQKReGNHPaOE5uxshy9gDijW3DJzAVgDGdoE3NOnHmDF%2B3IsLRr8m46zbHa5f5u9P%2BCxatO%2BYiNJiXMdQuhmPEWQcRO%2FwIxXSIhYqz1KAdO1T1ngbSTQGTm8aciFUP%2F2U2XcyTCFXMAwSPvOQ4mdnkPnIpwOjVhDBfdv1GC2mqvqsN4N98GuClcWdUyrFB6%2FMNzzvU8rgHgvLDD1ihFC1fDvDASdjGkPBjN%2FTaukzTj5pYeRF9BrD7Is3E8jqOefCVpNK64kdad%2Fo0LhID7Uv18zbfnIS31Q6vBeJRDPvTzUuLCOpsfKSkSqhV46W8HHWoQ9iQaGe5s7iQdXx06LriLKDXjl8VS27Kj5eAMG9UNR3UaIkVDeu803iSFjUNm0zEg3w1EpLUwgHSw89YU5L7PXfebVLZ4wofXP%2F2crO2voSa1A1xh5nwRQr21Q1JGMs%2Bn30Sz8j1HlSalBntFSSlvmvUVuPD7gj5N7mOCQO4rZ8J8p2p4qS3KzL4DurjPMy%2Ff4Ve61LMDlc9I0xAVtHHm6SbDH6RsV8tcTAbNq48fHGZYlgsJgVkXexMNzg980GOqUBF%2BaVnByt8iB%2FGZFT1mLwbn5nETIuRrLog%2BjEegwTUzCd3ddsvxqm7Fzmd1WHZUZ%2FVzrckiVDckncoXvoQJZxtP4ShE5i8v0FlG%2BHO2c0jYn3wy7Q3UIxkol6cNZQsPmHUgoz9e8sY6XUuQuWghXiYKxKW6PSngCtVXET1UncJ7xENVMqW19hyp0uIwe%2BqpkZXYQVDy5wI3kp0qTZEVDG%2Ff0v1TDk&X-Amz-Signature=ff14c34247254214995eec6a317d2dface8d76a87b98fe172e3d5960267338d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXO4I3HX%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC%2FUPUnuS%2FcEJhjBZJ8SFCM6m%2F9e9L379zp6JUFdMTZMgIgTwhZdwGbprCaN23K%2F47UNQsf2G2rP5wNcgYqzJCifRgq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDJjWEB1yCazh2IQl%2ByrcAxdX6pTaaH8s7wCbn7T%2FDxtsXNL0v%2BmAH168IMG8BCU4wVOqGgMSDYRK6v2zN9WibSTcQKReGNHPaOE5uxshy9gDijW3DJzAVgDGdoE3NOnHmDF%2B3IsLRr8m46zbHa5f5u9P%2BCxatO%2BYiNJiXMdQuhmPEWQcRO%2FwIxXSIhYqz1KAdO1T1ngbSTQGTm8aciFUP%2F2U2XcyTCFXMAwSPvOQ4mdnkPnIpwOjVhDBfdv1GC2mqvqsN4N98GuClcWdUyrFB6%2FMNzzvU8rgHgvLDD1ihFC1fDvDASdjGkPBjN%2FTaukzTj5pYeRF9BrD7Is3E8jqOefCVpNK64kdad%2Fo0LhID7Uv18zbfnIS31Q6vBeJRDPvTzUuLCOpsfKSkSqhV46W8HHWoQ9iQaGe5s7iQdXx06LriLKDXjl8VS27Kj5eAMG9UNR3UaIkVDeu803iSFjUNm0zEg3w1EpLUwgHSw89YU5L7PXfebVLZ4wofXP%2F2crO2voSa1A1xh5nwRQr21Q1JGMs%2Bn30Sz8j1HlSalBntFSSlvmvUVuPD7gj5N7mOCQO4rZ8J8p2p4qS3KzL4DurjPMy%2Ff4Ve61LMDlc9I0xAVtHHm6SbDH6RsV8tcTAbNq48fHGZYlgsJgVkXexMNzg980GOqUBF%2BaVnByt8iB%2FGZFT1mLwbn5nETIuRrLog%2BjEegwTUzCd3ddsvxqm7Fzmd1WHZUZ%2FVzrckiVDckncoXvoQJZxtP4ShE5i8v0FlG%2BHO2c0jYn3wy7Q3UIxkol6cNZQsPmHUgoz9e8sY6XUuQuWghXiYKxKW6PSngCtVXET1UncJ7xENVMqW19hyp0uIwe%2BqpkZXYQVDy5wI3kp0qTZEVDG%2Ff0v1TDk&X-Amz-Signature=c2054ccf694af3a1975bd47057b7d21c822f735ac07980689f5e330c5b6b533c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXO4I3HX%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQC%2FUPUnuS%2FcEJhjBZJ8SFCM6m%2F9e9L379zp6JUFdMTZMgIgTwhZdwGbprCaN23K%2F47UNQsf2G2rP5wNcgYqzJCifRgq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDJjWEB1yCazh2IQl%2ByrcAxdX6pTaaH8s7wCbn7T%2FDxtsXNL0v%2BmAH168IMG8BCU4wVOqGgMSDYRK6v2zN9WibSTcQKReGNHPaOE5uxshy9gDijW3DJzAVgDGdoE3NOnHmDF%2B3IsLRr8m46zbHa5f5u9P%2BCxatO%2BYiNJiXMdQuhmPEWQcRO%2FwIxXSIhYqz1KAdO1T1ngbSTQGTm8aciFUP%2F2U2XcyTCFXMAwSPvOQ4mdnkPnIpwOjVhDBfdv1GC2mqvqsN4N98GuClcWdUyrFB6%2FMNzzvU8rgHgvLDD1ihFC1fDvDASdjGkPBjN%2FTaukzTj5pYeRF9BrD7Is3E8jqOefCVpNK64kdad%2Fo0LhID7Uv18zbfnIS31Q6vBeJRDPvTzUuLCOpsfKSkSqhV46W8HHWoQ9iQaGe5s7iQdXx06LriLKDXjl8VS27Kj5eAMG9UNR3UaIkVDeu803iSFjUNm0zEg3w1EpLUwgHSw89YU5L7PXfebVLZ4wofXP%2F2crO2voSa1A1xh5nwRQr21Q1JGMs%2Bn30Sz8j1HlSalBntFSSlvmvUVuPD7gj5N7mOCQO4rZ8J8p2p4qS3KzL4DurjPMy%2Ff4Ve61LMDlc9I0xAVtHHm6SbDH6RsV8tcTAbNq48fHGZYlgsJgVkXexMNzg980GOqUBF%2BaVnByt8iB%2FGZFT1mLwbn5nETIuRrLog%2BjEegwTUzCd3ddsvxqm7Fzmd1WHZUZ%2FVzrckiVDckncoXvoQJZxtP4ShE5i8v0FlG%2BHO2c0jYn3wy7Q3UIxkol6cNZQsPmHUgoz9e8sY6XUuQuWghXiYKxKW6PSngCtVXET1UncJ7xENVMqW19hyp0uIwe%2BqpkZXYQVDy5wI3kp0qTZEVDG%2Ff0v1TDk&X-Amz-Signature=df541cf5386dbca898f60211c0866121b3f852c80a4a199b0d3db2bdb13a81fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
