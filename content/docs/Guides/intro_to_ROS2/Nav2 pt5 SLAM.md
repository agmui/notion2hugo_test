---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-29T01:30:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-29T01:30:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 155
toc: false
icon: ""
---

[Good video explaining slam](https://www.youtube.com/watch?v=ZaiA3hWaRzE&t=979s)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL6LRYTW%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICSbXsxpEaKiYEvOe3cZF3Yisuj%2ByKVvgW00l9gHfH%2F2AiEAyMF0sPeFIELWI1jScFOlq5lzf1R7BsoCaW2W8UjoTZsqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5ALfzNsXZwJ1I4TSrcA89J46tY0Kwi6ADHK9vffvSWG2q5S0%2B7YUHHKvwOtUGyeWxrIl3u7kwD7JH2ykCG0TabVmlrURakhk05moHaeXIgdxGYO2vgS3eGjq5jRrpNnpUTd9bzJVD%2BDfSMEX5%2BuTroope5dI4JO4bWnUJ2aTvzM%2FOZCf5xgqyHllC16k4G0R87r75tILpzyJrXUArPAFvoFpG4njsLAbdWY%2BedZvDGBsNa6XqMrYISTn1MQ8YubRPz093OUw3dQh%2FTT4RXn2Pxty4ySwwFWHO%2F9qvGHgAkpgR%2F1K06GtaWRhoa8qxcgA6CxBF2lr1sFbpg9MQ9zNc2xy5T2r5mltX30P1jEA%2FnZsKK7UqTwUqEH%2FOA2U9Vo3Kv3iMrZmXLoMM7r%2BG4R93Z3izXd%2F5buYJF9cQCRLQOwp67eyFRmSih4RG3dqXi5ZZLISzwoybEfHzKi%2BAPSTQxO8S9XMuEfApDcTmbRn5QS2K%2F3vKvCVFLfLidsyskI65DImU5APeqxFmZl8SS0b5%2BocYtuX9LIK5ZJJZEZCyrE1p0i2skKCu%2F7NQ4gc1Z27TR%2F1FhjYznmV7gt2Xh9JqhqPB3I6jIxA3wQh9AxB9HqRqr1AKSLiFVWzBx3EWMnmZA0cinfWfqGlbpMLLMoMQGOqUBIIS6aXuKLVsoX%2B2JzlXmDPNk12UGGd00moRl5vCx7RWl3%2BzQYQalIkNK6u6rB4MpwaLGGq6NKdDn4spacXy%2FeUKpnSd%2BPslnzFA2RbZ2E%2Fr2m%2FYpI7Sdi9R3wjv1arp%2FoMJt%2FssPYDqPqM39iY65AniwhoH%2BB1MOp2TTxMTvDS%2FN1wka7Px5wMCHMlQwCSLBQyErQL1WjjFi97poNjcQ92f5T2GH&X-Amz-Signature=670371f632e1747a8efc4a12ebb8f4e01755fd6449ef4d0e46c1bb1bfc047f61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: add rviz guide of viewing scanned map

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL6LRYTW%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICSbXsxpEaKiYEvOe3cZF3Yisuj%2ByKVvgW00l9gHfH%2F2AiEAyMF0sPeFIELWI1jScFOlq5lzf1R7BsoCaW2W8UjoTZsqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5ALfzNsXZwJ1I4TSrcA89J46tY0Kwi6ADHK9vffvSWG2q5S0%2B7YUHHKvwOtUGyeWxrIl3u7kwD7JH2ykCG0TabVmlrURakhk05moHaeXIgdxGYO2vgS3eGjq5jRrpNnpUTd9bzJVD%2BDfSMEX5%2BuTroope5dI4JO4bWnUJ2aTvzM%2FOZCf5xgqyHllC16k4G0R87r75tILpzyJrXUArPAFvoFpG4njsLAbdWY%2BedZvDGBsNa6XqMrYISTn1MQ8YubRPz093OUw3dQh%2FTT4RXn2Pxty4ySwwFWHO%2F9qvGHgAkpgR%2F1K06GtaWRhoa8qxcgA6CxBF2lr1sFbpg9MQ9zNc2xy5T2r5mltX30P1jEA%2FnZsKK7UqTwUqEH%2FOA2U9Vo3Kv3iMrZmXLoMM7r%2BG4R93Z3izXd%2F5buYJF9cQCRLQOwp67eyFRmSih4RG3dqXi5ZZLISzwoybEfHzKi%2BAPSTQxO8S9XMuEfApDcTmbRn5QS2K%2F3vKvCVFLfLidsyskI65DImU5APeqxFmZl8SS0b5%2BocYtuX9LIK5ZJJZEZCyrE1p0i2skKCu%2F7NQ4gc1Z27TR%2F1FhjYznmV7gt2Xh9JqhqPB3I6jIxA3wQh9AxB9HqRqr1AKSLiFVWzBx3EWMnmZA0cinfWfqGlbpMLLMoMQGOqUBIIS6aXuKLVsoX%2B2JzlXmDPNk12UGGd00moRl5vCx7RWl3%2BzQYQalIkNK6u6rB4MpwaLGGq6NKdDn4spacXy%2FeUKpnSd%2BPslnzFA2RbZ2E%2Fr2m%2FYpI7Sdi9R3wjv1arp%2FoMJt%2FssPYDqPqM39iY65AniwhoH%2BB1MOp2TTxMTvDS%2FN1wka7Px5wMCHMlQwCSLBQyErQL1WjjFi97poNjcQ92f5T2GH&X-Amz-Signature=b6f245414d40906f2a26f7e9713089e61b206667f8bbab775a2a208551069c17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL6LRYTW%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICSbXsxpEaKiYEvOe3cZF3Yisuj%2ByKVvgW00l9gHfH%2F2AiEAyMF0sPeFIELWI1jScFOlq5lzf1R7BsoCaW2W8UjoTZsqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5ALfzNsXZwJ1I4TSrcA89J46tY0Kwi6ADHK9vffvSWG2q5S0%2B7YUHHKvwOtUGyeWxrIl3u7kwD7JH2ykCG0TabVmlrURakhk05moHaeXIgdxGYO2vgS3eGjq5jRrpNnpUTd9bzJVD%2BDfSMEX5%2BuTroope5dI4JO4bWnUJ2aTvzM%2FOZCf5xgqyHllC16k4G0R87r75tILpzyJrXUArPAFvoFpG4njsLAbdWY%2BedZvDGBsNa6XqMrYISTn1MQ8YubRPz093OUw3dQh%2FTT4RXn2Pxty4ySwwFWHO%2F9qvGHgAkpgR%2F1K06GtaWRhoa8qxcgA6CxBF2lr1sFbpg9MQ9zNc2xy5T2r5mltX30P1jEA%2FnZsKK7UqTwUqEH%2FOA2U9Vo3Kv3iMrZmXLoMM7r%2BG4R93Z3izXd%2F5buYJF9cQCRLQOwp67eyFRmSih4RG3dqXi5ZZLISzwoybEfHzKi%2BAPSTQxO8S9XMuEfApDcTmbRn5QS2K%2F3vKvCVFLfLidsyskI65DImU5APeqxFmZl8SS0b5%2BocYtuX9LIK5ZJJZEZCyrE1p0i2skKCu%2F7NQ4gc1Z27TR%2F1FhjYznmV7gt2Xh9JqhqPB3I6jIxA3wQh9AxB9HqRqr1AKSLiFVWzBx3EWMnmZA0cinfWfqGlbpMLLMoMQGOqUBIIS6aXuKLVsoX%2B2JzlXmDPNk12UGGd00moRl5vCx7RWl3%2BzQYQalIkNK6u6rB4MpwaLGGq6NKdDn4spacXy%2FeUKpnSd%2BPslnzFA2RbZ2E%2Fr2m%2FYpI7Sdi9R3wjv1arp%2FoMJt%2FssPYDqPqM39iY65AniwhoH%2BB1MOp2TTxMTvDS%2FN1wka7Px5wMCHMlQwCSLBQyErQL1WjjFi97poNjcQ92f5T2GH&X-Amz-Signature=4301ff6416cad2fef397ad889cb6720f8749f3510d6f1e4294b325c3cfd4d2f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

### SLAM Rviz display

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL6LRYTW%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICSbXsxpEaKiYEvOe3cZF3Yisuj%2ByKVvgW00l9gHfH%2F2AiEAyMF0sPeFIELWI1jScFOlq5lzf1R7BsoCaW2W8UjoTZsqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5ALfzNsXZwJ1I4TSrcA89J46tY0Kwi6ADHK9vffvSWG2q5S0%2B7YUHHKvwOtUGyeWxrIl3u7kwD7JH2ykCG0TabVmlrURakhk05moHaeXIgdxGYO2vgS3eGjq5jRrpNnpUTd9bzJVD%2BDfSMEX5%2BuTroope5dI4JO4bWnUJ2aTvzM%2FOZCf5xgqyHllC16k4G0R87r75tILpzyJrXUArPAFvoFpG4njsLAbdWY%2BedZvDGBsNa6XqMrYISTn1MQ8YubRPz093OUw3dQh%2FTT4RXn2Pxty4ySwwFWHO%2F9qvGHgAkpgR%2F1K06GtaWRhoa8qxcgA6CxBF2lr1sFbpg9MQ9zNc2xy5T2r5mltX30P1jEA%2FnZsKK7UqTwUqEH%2FOA2U9Vo3Kv3iMrZmXLoMM7r%2BG4R93Z3izXd%2F5buYJF9cQCRLQOwp67eyFRmSih4RG3dqXi5ZZLISzwoybEfHzKi%2BAPSTQxO8S9XMuEfApDcTmbRn5QS2K%2F3vKvCVFLfLidsyskI65DImU5APeqxFmZl8SS0b5%2BocYtuX9LIK5ZJJZEZCyrE1p0i2skKCu%2F7NQ4gc1Z27TR%2F1FhjYznmV7gt2Xh9JqhqPB3I6jIxA3wQh9AxB9HqRqr1AKSLiFVWzBx3EWMnmZA0cinfWfqGlbpMLLMoMQGOqUBIIS6aXuKLVsoX%2B2JzlXmDPNk12UGGd00moRl5vCx7RWl3%2BzQYQalIkNK6u6rB4MpwaLGGq6NKdDn4spacXy%2FeUKpnSd%2BPslnzFA2RbZ2E%2Fr2m%2FYpI7Sdi9R3wjv1arp%2FoMJt%2FssPYDqPqM39iY65AniwhoH%2BB1MOp2TTxMTvDS%2FN1wka7Px5wMCHMlQwCSLBQyErQL1WjjFi97poNjcQ92f5T2GH&X-Amz-Signature=fbdf4a20f00cba423cc856ac09f481b30b2f35613e01c0592c04da4d89a62f57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL6LRYTW%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICSbXsxpEaKiYEvOe3cZF3Yisuj%2ByKVvgW00l9gHfH%2F2AiEAyMF0sPeFIELWI1jScFOlq5lzf1R7BsoCaW2W8UjoTZsqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5ALfzNsXZwJ1I4TSrcA89J46tY0Kwi6ADHK9vffvSWG2q5S0%2B7YUHHKvwOtUGyeWxrIl3u7kwD7JH2ykCG0TabVmlrURakhk05moHaeXIgdxGYO2vgS3eGjq5jRrpNnpUTd9bzJVD%2BDfSMEX5%2BuTroope5dI4JO4bWnUJ2aTvzM%2FOZCf5xgqyHllC16k4G0R87r75tILpzyJrXUArPAFvoFpG4njsLAbdWY%2BedZvDGBsNa6XqMrYISTn1MQ8YubRPz093OUw3dQh%2FTT4RXn2Pxty4ySwwFWHO%2F9qvGHgAkpgR%2F1K06GtaWRhoa8qxcgA6CxBF2lr1sFbpg9MQ9zNc2xy5T2r5mltX30P1jEA%2FnZsKK7UqTwUqEH%2FOA2U9Vo3Kv3iMrZmXLoMM7r%2BG4R93Z3izXd%2F5buYJF9cQCRLQOwp67eyFRmSih4RG3dqXi5ZZLISzwoybEfHzKi%2BAPSTQxO8S9XMuEfApDcTmbRn5QS2K%2F3vKvCVFLfLidsyskI65DImU5APeqxFmZl8SS0b5%2BocYtuX9LIK5ZJJZEZCyrE1p0i2skKCu%2F7NQ4gc1Z27TR%2F1FhjYznmV7gt2Xh9JqhqPB3I6jIxA3wQh9AxB9HqRqr1AKSLiFVWzBx3EWMnmZA0cinfWfqGlbpMLLMoMQGOqUBIIS6aXuKLVsoX%2B2JzlXmDPNk12UGGd00moRl5vCx7RWl3%2BzQYQalIkNK6u6rB4MpwaLGGq6NKdDn4spacXy%2FeUKpnSd%2BPslnzFA2RbZ2E%2Fr2m%2FYpI7Sdi9R3wjv1arp%2FoMJt%2FssPYDqPqM39iY65AniwhoH%2BB1MOp2TTxMTvDS%2FN1wka7Px5wMCHMlQwCSLBQyErQL1WjjFi97poNjcQ92f5T2GH&X-Amz-Signature=ce8ab819a8f1fe9f7dbb630daeec6dc93c6f54c7419612f304998371098f7583&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL6LRYTW%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICSbXsxpEaKiYEvOe3cZF3Yisuj%2ByKVvgW00l9gHfH%2F2AiEAyMF0sPeFIELWI1jScFOlq5lzf1R7BsoCaW2W8UjoTZsqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5ALfzNsXZwJ1I4TSrcA89J46tY0Kwi6ADHK9vffvSWG2q5S0%2B7YUHHKvwOtUGyeWxrIl3u7kwD7JH2ykCG0TabVmlrURakhk05moHaeXIgdxGYO2vgS3eGjq5jRrpNnpUTd9bzJVD%2BDfSMEX5%2BuTroope5dI4JO4bWnUJ2aTvzM%2FOZCf5xgqyHllC16k4G0R87r75tILpzyJrXUArPAFvoFpG4njsLAbdWY%2BedZvDGBsNa6XqMrYISTn1MQ8YubRPz093OUw3dQh%2FTT4RXn2Pxty4ySwwFWHO%2F9qvGHgAkpgR%2F1K06GtaWRhoa8qxcgA6CxBF2lr1sFbpg9MQ9zNc2xy5T2r5mltX30P1jEA%2FnZsKK7UqTwUqEH%2FOA2U9Vo3Kv3iMrZmXLoMM7r%2BG4R93Z3izXd%2F5buYJF9cQCRLQOwp67eyFRmSih4RG3dqXi5ZZLISzwoybEfHzKi%2BAPSTQxO8S9XMuEfApDcTmbRn5QS2K%2F3vKvCVFLfLidsyskI65DImU5APeqxFmZl8SS0b5%2BocYtuX9LIK5ZJJZEZCyrE1p0i2skKCu%2F7NQ4gc1Z27TR%2F1FhjYznmV7gt2Xh9JqhqPB3I6jIxA3wQh9AxB9HqRqr1AKSLiFVWzBx3EWMnmZA0cinfWfqGlbpMLLMoMQGOqUBIIS6aXuKLVsoX%2B2JzlXmDPNk12UGGd00moRl5vCx7RWl3%2BzQYQalIkNK6u6rB4MpwaLGGq6NKdDn4spacXy%2FeUKpnSd%2BPslnzFA2RbZ2E%2Fr2m%2FYpI7Sdi9R3wjv1arp%2FoMJt%2FssPYDqPqM39iY65AniwhoH%2BB1MOp2TTxMTvDS%2FN1wka7Px5wMCHMlQwCSLBQyErQL1WjjFi97poNjcQ92f5T2GH&X-Amz-Signature=35c52ec10bd761211771de60cabdb0ac169f1f01abb6a5676696869fec897391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL6LRYTW%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICSbXsxpEaKiYEvOe3cZF3Yisuj%2ByKVvgW00l9gHfH%2F2AiEAyMF0sPeFIELWI1jScFOlq5lzf1R7BsoCaW2W8UjoTZsqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5ALfzNsXZwJ1I4TSrcA89J46tY0Kwi6ADHK9vffvSWG2q5S0%2B7YUHHKvwOtUGyeWxrIl3u7kwD7JH2ykCG0TabVmlrURakhk05moHaeXIgdxGYO2vgS3eGjq5jRrpNnpUTd9bzJVD%2BDfSMEX5%2BuTroope5dI4JO4bWnUJ2aTvzM%2FOZCf5xgqyHllC16k4G0R87r75tILpzyJrXUArPAFvoFpG4njsLAbdWY%2BedZvDGBsNa6XqMrYISTn1MQ8YubRPz093OUw3dQh%2FTT4RXn2Pxty4ySwwFWHO%2F9qvGHgAkpgR%2F1K06GtaWRhoa8qxcgA6CxBF2lr1sFbpg9MQ9zNc2xy5T2r5mltX30P1jEA%2FnZsKK7UqTwUqEH%2FOA2U9Vo3Kv3iMrZmXLoMM7r%2BG4R93Z3izXd%2F5buYJF9cQCRLQOwp67eyFRmSih4RG3dqXi5ZZLISzwoybEfHzKi%2BAPSTQxO8S9XMuEfApDcTmbRn5QS2K%2F3vKvCVFLfLidsyskI65DImU5APeqxFmZl8SS0b5%2BocYtuX9LIK5ZJJZEZCyrE1p0i2skKCu%2F7NQ4gc1Z27TR%2F1FhjYznmV7gt2Xh9JqhqPB3I6jIxA3wQh9AxB9HqRqr1AKSLiFVWzBx3EWMnmZA0cinfWfqGlbpMLLMoMQGOqUBIIS6aXuKLVsoX%2B2JzlXmDPNk12UGGd00moRl5vCx7RWl3%2BzQYQalIkNK6u6rB4MpwaLGGq6NKdDn4spacXy%2FeUKpnSd%2BPslnzFA2RbZ2E%2Fr2m%2FYpI7Sdi9R3wjv1arp%2FoMJt%2FssPYDqPqM39iY65AniwhoH%2BB1MOp2TTxMTvDS%2FN1wka7Px5wMCHMlQwCSLBQyErQL1WjjFi97poNjcQ92f5T2GH&X-Amz-Signature=772f86f9dae6feed6326380f0f5eab4473d453c37c2ceea9150fcf0280383c7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

drive around with `teleop_twist_keyboard` to scan more of the map

## Updating launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL6LRYTW%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICSbXsxpEaKiYEvOe3cZF3Yisuj%2ByKVvgW00l9gHfH%2F2AiEAyMF0sPeFIELWI1jScFOlq5lzf1R7BsoCaW2W8UjoTZsqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5ALfzNsXZwJ1I4TSrcA89J46tY0Kwi6ADHK9vffvSWG2q5S0%2B7YUHHKvwOtUGyeWxrIl3u7kwD7JH2ykCG0TabVmlrURakhk05moHaeXIgdxGYO2vgS3eGjq5jRrpNnpUTd9bzJVD%2BDfSMEX5%2BuTroope5dI4JO4bWnUJ2aTvzM%2FOZCf5xgqyHllC16k4G0R87r75tILpzyJrXUArPAFvoFpG4njsLAbdWY%2BedZvDGBsNa6XqMrYISTn1MQ8YubRPz093OUw3dQh%2FTT4RXn2Pxty4ySwwFWHO%2F9qvGHgAkpgR%2F1K06GtaWRhoa8qxcgA6CxBF2lr1sFbpg9MQ9zNc2xy5T2r5mltX30P1jEA%2FnZsKK7UqTwUqEH%2FOA2U9Vo3Kv3iMrZmXLoMM7r%2BG4R93Z3izXd%2F5buYJF9cQCRLQOwp67eyFRmSih4RG3dqXi5ZZLISzwoybEfHzKi%2BAPSTQxO8S9XMuEfApDcTmbRn5QS2K%2F3vKvCVFLfLidsyskI65DImU5APeqxFmZl8SS0b5%2BocYtuX9LIK5ZJJZEZCyrE1p0i2skKCu%2F7NQ4gc1Z27TR%2F1FhjYznmV7gt2Xh9JqhqPB3I6jIxA3wQh9AxB9HqRqr1AKSLiFVWzBx3EWMnmZA0cinfWfqGlbpMLLMoMQGOqUBIIS6aXuKLVsoX%2B2JzlXmDPNk12UGGd00moRl5vCx7RWl3%2BzQYQalIkNK6u6rB4MpwaLGGq6NKdDn4spacXy%2FeUKpnSd%2BPslnzFA2RbZ2E%2Fr2m%2FYpI7Sdi9R3wjv1arp%2FoMJt%2FssPYDqPqM39iY65AniwhoH%2BB1MOp2TTxMTvDS%2FN1wka7Px5wMCHMlQwCSLBQyErQL1WjjFi97poNjcQ92f5T2GH&X-Amz-Signature=ea0d2c31971935a0aee7bc718ef525890923920a5e5cd39694f2669d1c72926d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL6LRYTW%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICSbXsxpEaKiYEvOe3cZF3Yisuj%2ByKVvgW00l9gHfH%2F2AiEAyMF0sPeFIELWI1jScFOlq5lzf1R7BsoCaW2W8UjoTZsqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5ALfzNsXZwJ1I4TSrcA89J46tY0Kwi6ADHK9vffvSWG2q5S0%2B7YUHHKvwOtUGyeWxrIl3u7kwD7JH2ykCG0TabVmlrURakhk05moHaeXIgdxGYO2vgS3eGjq5jRrpNnpUTd9bzJVD%2BDfSMEX5%2BuTroope5dI4JO4bWnUJ2aTvzM%2FOZCf5xgqyHllC16k4G0R87r75tILpzyJrXUArPAFvoFpG4njsLAbdWY%2BedZvDGBsNa6XqMrYISTn1MQ8YubRPz093OUw3dQh%2FTT4RXn2Pxty4ySwwFWHO%2F9qvGHgAkpgR%2F1K06GtaWRhoa8qxcgA6CxBF2lr1sFbpg9MQ9zNc2xy5T2r5mltX30P1jEA%2FnZsKK7UqTwUqEH%2FOA2U9Vo3Kv3iMrZmXLoMM7r%2BG4R93Z3izXd%2F5buYJF9cQCRLQOwp67eyFRmSih4RG3dqXi5ZZLISzwoybEfHzKi%2BAPSTQxO8S9XMuEfApDcTmbRn5QS2K%2F3vKvCVFLfLidsyskI65DImU5APeqxFmZl8SS0b5%2BocYtuX9LIK5ZJJZEZCyrE1p0i2skKCu%2F7NQ4gc1Z27TR%2F1FhjYznmV7gt2Xh9JqhqPB3I6jIxA3wQh9AxB9HqRqr1AKSLiFVWzBx3EWMnmZA0cinfWfqGlbpMLLMoMQGOqUBIIS6aXuKLVsoX%2B2JzlXmDPNk12UGGd00moRl5vCx7RWl3%2BzQYQalIkNK6u6rB4MpwaLGGq6NKdDn4spacXy%2FeUKpnSd%2BPslnzFA2RbZ2E%2Fr2m%2FYpI7Sdi9R3wjv1arp%2FoMJt%2FssPYDqPqM39iY65AniwhoH%2BB1MOp2TTxMTvDS%2FN1wka7Px5wMCHMlQwCSLBQyErQL1WjjFi97poNjcQ92f5T2GH&X-Amz-Signature=2473ce627c77a91da1b9b7de67ccc6211ba0aa202b307a606ec229e9bf8c4c43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL6LRYTW%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICSbXsxpEaKiYEvOe3cZF3Yisuj%2ByKVvgW00l9gHfH%2F2AiEAyMF0sPeFIELWI1jScFOlq5lzf1R7BsoCaW2W8UjoTZsqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5ALfzNsXZwJ1I4TSrcA89J46tY0Kwi6ADHK9vffvSWG2q5S0%2B7YUHHKvwOtUGyeWxrIl3u7kwD7JH2ykCG0TabVmlrURakhk05moHaeXIgdxGYO2vgS3eGjq5jRrpNnpUTd9bzJVD%2BDfSMEX5%2BuTroope5dI4JO4bWnUJ2aTvzM%2FOZCf5xgqyHllC16k4G0R87r75tILpzyJrXUArPAFvoFpG4njsLAbdWY%2BedZvDGBsNa6XqMrYISTn1MQ8YubRPz093OUw3dQh%2FTT4RXn2Pxty4ySwwFWHO%2F9qvGHgAkpgR%2F1K06GtaWRhoa8qxcgA6CxBF2lr1sFbpg9MQ9zNc2xy5T2r5mltX30P1jEA%2FnZsKK7UqTwUqEH%2FOA2U9Vo3Kv3iMrZmXLoMM7r%2BG4R93Z3izXd%2F5buYJF9cQCRLQOwp67eyFRmSih4RG3dqXi5ZZLISzwoybEfHzKi%2BAPSTQxO8S9XMuEfApDcTmbRn5QS2K%2F3vKvCVFLfLidsyskI65DImU5APeqxFmZl8SS0b5%2BocYtuX9LIK5ZJJZEZCyrE1p0i2skKCu%2F7NQ4gc1Z27TR%2F1FhjYznmV7gt2Xh9JqhqPB3I6jIxA3wQh9AxB9HqRqr1AKSLiFVWzBx3EWMnmZA0cinfWfqGlbpMLLMoMQGOqUBIIS6aXuKLVsoX%2B2JzlXmDPNk12UGGd00moRl5vCx7RWl3%2BzQYQalIkNK6u6rB4MpwaLGGq6NKdDn4spacXy%2FeUKpnSd%2BPslnzFA2RbZ2E%2Fr2m%2FYpI7Sdi9R3wjv1arp%2FoMJt%2FssPYDqPqM39iY65AniwhoH%2BB1MOp2TTxMTvDS%2FN1wka7Px5wMCHMlQwCSLBQyErQL1WjjFi97poNjcQ92f5T2GH&X-Amz-Signature=93572e6feedf4f5cc0c010ea5fc987dd4a521af558305e4c51104bb80bac5e05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL6LRYTW%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICSbXsxpEaKiYEvOe3cZF3Yisuj%2ByKVvgW00l9gHfH%2F2AiEAyMF0sPeFIELWI1jScFOlq5lzf1R7BsoCaW2W8UjoTZsqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5ALfzNsXZwJ1I4TSrcA89J46tY0Kwi6ADHK9vffvSWG2q5S0%2B7YUHHKvwOtUGyeWxrIl3u7kwD7JH2ykCG0TabVmlrURakhk05moHaeXIgdxGYO2vgS3eGjq5jRrpNnpUTd9bzJVD%2BDfSMEX5%2BuTroope5dI4JO4bWnUJ2aTvzM%2FOZCf5xgqyHllC16k4G0R87r75tILpzyJrXUArPAFvoFpG4njsLAbdWY%2BedZvDGBsNa6XqMrYISTn1MQ8YubRPz093OUw3dQh%2FTT4RXn2Pxty4ySwwFWHO%2F9qvGHgAkpgR%2F1K06GtaWRhoa8qxcgA6CxBF2lr1sFbpg9MQ9zNc2xy5T2r5mltX30P1jEA%2FnZsKK7UqTwUqEH%2FOA2U9Vo3Kv3iMrZmXLoMM7r%2BG4R93Z3izXd%2F5buYJF9cQCRLQOwp67eyFRmSih4RG3dqXi5ZZLISzwoybEfHzKi%2BAPSTQxO8S9XMuEfApDcTmbRn5QS2K%2F3vKvCVFLfLidsyskI65DImU5APeqxFmZl8SS0b5%2BocYtuX9LIK5ZJJZEZCyrE1p0i2skKCu%2F7NQ4gc1Z27TR%2F1FhjYznmV7gt2Xh9JqhqPB3I6jIxA3wQh9AxB9HqRqr1AKSLiFVWzBx3EWMnmZA0cinfWfqGlbpMLLMoMQGOqUBIIS6aXuKLVsoX%2B2JzlXmDPNk12UGGd00moRl5vCx7RWl3%2BzQYQalIkNK6u6rB4MpwaLGGq6NKdDn4spacXy%2FeUKpnSd%2BPslnzFA2RbZ2E%2Fr2m%2FYpI7Sdi9R3wjv1arp%2FoMJt%2FssPYDqPqM39iY65AniwhoH%2BB1MOp2TTxMTvDS%2FN1wka7Px5wMCHMlQwCSLBQyErQL1WjjFi97poNjcQ92f5T2GH&X-Amz-Signature=062ecaa0e81437073a0bfcb8ff6adddf3480eae27b6b868fc873202a74ef8d4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL6LRYTW%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICSbXsxpEaKiYEvOe3cZF3Yisuj%2ByKVvgW00l9gHfH%2F2AiEAyMF0sPeFIELWI1jScFOlq5lzf1R7BsoCaW2W8UjoTZsqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5ALfzNsXZwJ1I4TSrcA89J46tY0Kwi6ADHK9vffvSWG2q5S0%2B7YUHHKvwOtUGyeWxrIl3u7kwD7JH2ykCG0TabVmlrURakhk05moHaeXIgdxGYO2vgS3eGjq5jRrpNnpUTd9bzJVD%2BDfSMEX5%2BuTroope5dI4JO4bWnUJ2aTvzM%2FOZCf5xgqyHllC16k4G0R87r75tILpzyJrXUArPAFvoFpG4njsLAbdWY%2BedZvDGBsNa6XqMrYISTn1MQ8YubRPz093OUw3dQh%2FTT4RXn2Pxty4ySwwFWHO%2F9qvGHgAkpgR%2F1K06GtaWRhoa8qxcgA6CxBF2lr1sFbpg9MQ9zNc2xy5T2r5mltX30P1jEA%2FnZsKK7UqTwUqEH%2FOA2U9Vo3Kv3iMrZmXLoMM7r%2BG4R93Z3izXd%2F5buYJF9cQCRLQOwp67eyFRmSih4RG3dqXi5ZZLISzwoybEfHzKi%2BAPSTQxO8S9XMuEfApDcTmbRn5QS2K%2F3vKvCVFLfLidsyskI65DImU5APeqxFmZl8SS0b5%2BocYtuX9LIK5ZJJZEZCyrE1p0i2skKCu%2F7NQ4gc1Z27TR%2F1FhjYznmV7gt2Xh9JqhqPB3I6jIxA3wQh9AxB9HqRqr1AKSLiFVWzBx3EWMnmZA0cinfWfqGlbpMLLMoMQGOqUBIIS6aXuKLVsoX%2B2JzlXmDPNk12UGGd00moRl5vCx7RWl3%2BzQYQalIkNK6u6rB4MpwaLGGq6NKdDn4spacXy%2FeUKpnSd%2BPslnzFA2RbZ2E%2Fr2m%2FYpI7Sdi9R3wjv1arp%2FoMJt%2FssPYDqPqM39iY65AniwhoH%2BB1MOp2TTxMTvDS%2FN1wka7Px5wMCHMlQwCSLBQyErQL1WjjFi97poNjcQ92f5T2GH&X-Amz-Signature=cb68ad07e8ba7bde5220a6948b71e9bacaeb9a878dc7751acefd855df507008e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL6LRYTW%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T052008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICSbXsxpEaKiYEvOe3cZF3Yisuj%2ByKVvgW00l9gHfH%2F2AiEAyMF0sPeFIELWI1jScFOlq5lzf1R7BsoCaW2W8UjoTZsqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN5ALfzNsXZwJ1I4TSrcA89J46tY0Kwi6ADHK9vffvSWG2q5S0%2B7YUHHKvwOtUGyeWxrIl3u7kwD7JH2ykCG0TabVmlrURakhk05moHaeXIgdxGYO2vgS3eGjq5jRrpNnpUTd9bzJVD%2BDfSMEX5%2BuTroope5dI4JO4bWnUJ2aTvzM%2FOZCf5xgqyHllC16k4G0R87r75tILpzyJrXUArPAFvoFpG4njsLAbdWY%2BedZvDGBsNa6XqMrYISTn1MQ8YubRPz093OUw3dQh%2FTT4RXn2Pxty4ySwwFWHO%2F9qvGHgAkpgR%2F1K06GtaWRhoa8qxcgA6CxBF2lr1sFbpg9MQ9zNc2xy5T2r5mltX30P1jEA%2FnZsKK7UqTwUqEH%2FOA2U9Vo3Kv3iMrZmXLoMM7r%2BG4R93Z3izXd%2F5buYJF9cQCRLQOwp67eyFRmSih4RG3dqXi5ZZLISzwoybEfHzKi%2BAPSTQxO8S9XMuEfApDcTmbRn5QS2K%2F3vKvCVFLfLidsyskI65DImU5APeqxFmZl8SS0b5%2BocYtuX9LIK5ZJJZEZCyrE1p0i2skKCu%2F7NQ4gc1Z27TR%2F1FhjYznmV7gt2Xh9JqhqPB3I6jIxA3wQh9AxB9HqRqr1AKSLiFVWzBx3EWMnmZA0cinfWfqGlbpMLLMoMQGOqUBIIS6aXuKLVsoX%2B2JzlXmDPNk12UGGd00moRl5vCx7RWl3%2BzQYQalIkNK6u6rB4MpwaLGGq6NKdDn4spacXy%2FeUKpnSd%2BPslnzFA2RbZ2E%2Fr2m%2FYpI7Sdi9R3wjv1arp%2FoMJt%2FssPYDqPqM39iY65AniwhoH%2BB1MOp2TTxMTvDS%2FN1wka7Px5wMCHMlQwCSLBQyErQL1WjjFi97poNjcQ92f5T2GH&X-Amz-Signature=d9123f00ba7adc23bae1dc10a664e2380eb3f3f97800e88e0a8f24cdabd6c4ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored map

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

TODO: add pic

For further configuration go to: TODO: link to slam docs config guide 
