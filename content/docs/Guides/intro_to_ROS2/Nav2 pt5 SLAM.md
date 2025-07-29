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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3LWHFL5%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCdwPocBbvbWeDzM9YSnKUMhaqpo4NB1OhyoIIFX%2B%2Fg%2FQIgHH6V5irmeKwLQK4Gnjp4ippYdZlSKSQSJ5lV%2F6Sjw7EqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwGXg8RG%2FgctSdLDyrcA1F%2FQOwpFM9nJLFAXt3vNdGArKqTmuHR5rZPPuvmN32yq9Imbpr5IEseNaK3fsMAS2U1%2BkyJLfOkld2QcssFcCMVOqqgQLqDSAx2sarWToML25K6XViF8W8lf9OTOVyxmV0fM59LZfYiO2e3y3agk91ioFOWdB%2BSEc%2BZo4LPvpmPY%2B9RNyTsPiVI6SLqRU%2BNQBKLjP7X9GZfI7OLE3Byzn7gi0rQamTo8pw17wkuVuCXf%2BGMKI13CbOe8PeyBShFvkkyrhNpTrwKLc71FDyS88vbQDPx6IElVjDHRhYJy%2FvzcBdDW0H80%2BFzuo77QRTj%2BngZiXQOZMQ8qTWCGIdn4lmVl8yDLKuMqT%2FXeNO1aZJ0%2F4PnxbhwfADhAXIkd7jRE9U8e%2BEsWijdOT4SFEtKkXIEFVsKt9w10%2BvHWJ2zqs5GBJjNlM4G19Lx%2FK8fz5sbiChX0NgguK1ldluhe6d2X%2BJpRzW2rtuC2MlABFSOoWLjoyNeJnsYkboTm1XHJ3wX3wbQ9lWaw9P63ZEIvgWOWuJPHfIKOkez8iuHaBDejYfy4VScEWabw%2Bf0NXV1reKhd5N30AZOisWmSogHXS8U%2BiO%2BFY0cWZWLFH%2FYq14vsdYlGQf1Bg8VGS7kRSvfMMfNoMQGOqUBgGEfXIqMujw0XGhmYWzeV0Gzk374lyz%2FSOWlTDyMbS%2BqqEjzOZu6lEZKW4N9mFUHUNWHhPgOD%2BEhcI8rhK%2FAogPODNNjPxQwfj5xnr7RhIr6F9uxYw7icw88r2M6i%2B%2B26pJbOGjZ8XLMi3NcwntOuVYLDHqsOfSkMgKcDb27zDMBx0DyrYGa2wRzMrcD9LV7erod%2FHvVKW8byUwUnXG1AKD%2BDR7F&X-Amz-Signature=aa32ef0949353a6a252ec74792f5da2acbc9e5d215c7c816bedf6bdf38943821&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3LWHFL5%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCdwPocBbvbWeDzM9YSnKUMhaqpo4NB1OhyoIIFX%2B%2Fg%2FQIgHH6V5irmeKwLQK4Gnjp4ippYdZlSKSQSJ5lV%2F6Sjw7EqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwGXg8RG%2FgctSdLDyrcA1F%2FQOwpFM9nJLFAXt3vNdGArKqTmuHR5rZPPuvmN32yq9Imbpr5IEseNaK3fsMAS2U1%2BkyJLfOkld2QcssFcCMVOqqgQLqDSAx2sarWToML25K6XViF8W8lf9OTOVyxmV0fM59LZfYiO2e3y3agk91ioFOWdB%2BSEc%2BZo4LPvpmPY%2B9RNyTsPiVI6SLqRU%2BNQBKLjP7X9GZfI7OLE3Byzn7gi0rQamTo8pw17wkuVuCXf%2BGMKI13CbOe8PeyBShFvkkyrhNpTrwKLc71FDyS88vbQDPx6IElVjDHRhYJy%2FvzcBdDW0H80%2BFzuo77QRTj%2BngZiXQOZMQ8qTWCGIdn4lmVl8yDLKuMqT%2FXeNO1aZJ0%2F4PnxbhwfADhAXIkd7jRE9U8e%2BEsWijdOT4SFEtKkXIEFVsKt9w10%2BvHWJ2zqs5GBJjNlM4G19Lx%2FK8fz5sbiChX0NgguK1ldluhe6d2X%2BJpRzW2rtuC2MlABFSOoWLjoyNeJnsYkboTm1XHJ3wX3wbQ9lWaw9P63ZEIvgWOWuJPHfIKOkez8iuHaBDejYfy4VScEWabw%2Bf0NXV1reKhd5N30AZOisWmSogHXS8U%2BiO%2BFY0cWZWLFH%2FYq14vsdYlGQf1Bg8VGS7kRSvfMMfNoMQGOqUBgGEfXIqMujw0XGhmYWzeV0Gzk374lyz%2FSOWlTDyMbS%2BqqEjzOZu6lEZKW4N9mFUHUNWHhPgOD%2BEhcI8rhK%2FAogPODNNjPxQwfj5xnr7RhIr6F9uxYw7icw88r2M6i%2B%2B26pJbOGjZ8XLMi3NcwntOuVYLDHqsOfSkMgKcDb27zDMBx0DyrYGa2wRzMrcD9LV7erod%2FHvVKW8byUwUnXG1AKD%2BDR7F&X-Amz-Signature=4842068bc15692ef70b83dafd457e81d7d1ce23fe5c92a9e2634bec0bbb9639e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3LWHFL5%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCdwPocBbvbWeDzM9YSnKUMhaqpo4NB1OhyoIIFX%2B%2Fg%2FQIgHH6V5irmeKwLQK4Gnjp4ippYdZlSKSQSJ5lV%2F6Sjw7EqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwGXg8RG%2FgctSdLDyrcA1F%2FQOwpFM9nJLFAXt3vNdGArKqTmuHR5rZPPuvmN32yq9Imbpr5IEseNaK3fsMAS2U1%2BkyJLfOkld2QcssFcCMVOqqgQLqDSAx2sarWToML25K6XViF8W8lf9OTOVyxmV0fM59LZfYiO2e3y3agk91ioFOWdB%2BSEc%2BZo4LPvpmPY%2B9RNyTsPiVI6SLqRU%2BNQBKLjP7X9GZfI7OLE3Byzn7gi0rQamTo8pw17wkuVuCXf%2BGMKI13CbOe8PeyBShFvkkyrhNpTrwKLc71FDyS88vbQDPx6IElVjDHRhYJy%2FvzcBdDW0H80%2BFzuo77QRTj%2BngZiXQOZMQ8qTWCGIdn4lmVl8yDLKuMqT%2FXeNO1aZJ0%2F4PnxbhwfADhAXIkd7jRE9U8e%2BEsWijdOT4SFEtKkXIEFVsKt9w10%2BvHWJ2zqs5GBJjNlM4G19Lx%2FK8fz5sbiChX0NgguK1ldluhe6d2X%2BJpRzW2rtuC2MlABFSOoWLjoyNeJnsYkboTm1XHJ3wX3wbQ9lWaw9P63ZEIvgWOWuJPHfIKOkez8iuHaBDejYfy4VScEWabw%2Bf0NXV1reKhd5N30AZOisWmSogHXS8U%2BiO%2BFY0cWZWLFH%2FYq14vsdYlGQf1Bg8VGS7kRSvfMMfNoMQGOqUBgGEfXIqMujw0XGhmYWzeV0Gzk374lyz%2FSOWlTDyMbS%2BqqEjzOZu6lEZKW4N9mFUHUNWHhPgOD%2BEhcI8rhK%2FAogPODNNjPxQwfj5xnr7RhIr6F9uxYw7icw88r2M6i%2B%2B26pJbOGjZ8XLMi3NcwntOuVYLDHqsOfSkMgKcDb27zDMBx0DyrYGa2wRzMrcD9LV7erod%2FHvVKW8byUwUnXG1AKD%2BDR7F&X-Amz-Signature=1bef9d8e9e7abcc1a47aff0c980c9c67a17817107febf5380054fdfedcbb00d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3LWHFL5%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCdwPocBbvbWeDzM9YSnKUMhaqpo4NB1OhyoIIFX%2B%2Fg%2FQIgHH6V5irmeKwLQK4Gnjp4ippYdZlSKSQSJ5lV%2F6Sjw7EqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwGXg8RG%2FgctSdLDyrcA1F%2FQOwpFM9nJLFAXt3vNdGArKqTmuHR5rZPPuvmN32yq9Imbpr5IEseNaK3fsMAS2U1%2BkyJLfOkld2QcssFcCMVOqqgQLqDSAx2sarWToML25K6XViF8W8lf9OTOVyxmV0fM59LZfYiO2e3y3agk91ioFOWdB%2BSEc%2BZo4LPvpmPY%2B9RNyTsPiVI6SLqRU%2BNQBKLjP7X9GZfI7OLE3Byzn7gi0rQamTo8pw17wkuVuCXf%2BGMKI13CbOe8PeyBShFvkkyrhNpTrwKLc71FDyS88vbQDPx6IElVjDHRhYJy%2FvzcBdDW0H80%2BFzuo77QRTj%2BngZiXQOZMQ8qTWCGIdn4lmVl8yDLKuMqT%2FXeNO1aZJ0%2F4PnxbhwfADhAXIkd7jRE9U8e%2BEsWijdOT4SFEtKkXIEFVsKt9w10%2BvHWJ2zqs5GBJjNlM4G19Lx%2FK8fz5sbiChX0NgguK1ldluhe6d2X%2BJpRzW2rtuC2MlABFSOoWLjoyNeJnsYkboTm1XHJ3wX3wbQ9lWaw9P63ZEIvgWOWuJPHfIKOkez8iuHaBDejYfy4VScEWabw%2Bf0NXV1reKhd5N30AZOisWmSogHXS8U%2BiO%2BFY0cWZWLFH%2FYq14vsdYlGQf1Bg8VGS7kRSvfMMfNoMQGOqUBgGEfXIqMujw0XGhmYWzeV0Gzk374lyz%2FSOWlTDyMbS%2BqqEjzOZu6lEZKW4N9mFUHUNWHhPgOD%2BEhcI8rhK%2FAogPODNNjPxQwfj5xnr7RhIr6F9uxYw7icw88r2M6i%2B%2B26pJbOGjZ8XLMi3NcwntOuVYLDHqsOfSkMgKcDb27zDMBx0DyrYGa2wRzMrcD9LV7erod%2FHvVKW8byUwUnXG1AKD%2BDR7F&X-Amz-Signature=bd882505fdcb4c6b3bb129b382cda51387ca33f6068706a695cd781c551f0b37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3LWHFL5%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCdwPocBbvbWeDzM9YSnKUMhaqpo4NB1OhyoIIFX%2B%2Fg%2FQIgHH6V5irmeKwLQK4Gnjp4ippYdZlSKSQSJ5lV%2F6Sjw7EqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwGXg8RG%2FgctSdLDyrcA1F%2FQOwpFM9nJLFAXt3vNdGArKqTmuHR5rZPPuvmN32yq9Imbpr5IEseNaK3fsMAS2U1%2BkyJLfOkld2QcssFcCMVOqqgQLqDSAx2sarWToML25K6XViF8W8lf9OTOVyxmV0fM59LZfYiO2e3y3agk91ioFOWdB%2BSEc%2BZo4LPvpmPY%2B9RNyTsPiVI6SLqRU%2BNQBKLjP7X9GZfI7OLE3Byzn7gi0rQamTo8pw17wkuVuCXf%2BGMKI13CbOe8PeyBShFvkkyrhNpTrwKLc71FDyS88vbQDPx6IElVjDHRhYJy%2FvzcBdDW0H80%2BFzuo77QRTj%2BngZiXQOZMQ8qTWCGIdn4lmVl8yDLKuMqT%2FXeNO1aZJ0%2F4PnxbhwfADhAXIkd7jRE9U8e%2BEsWijdOT4SFEtKkXIEFVsKt9w10%2BvHWJ2zqs5GBJjNlM4G19Lx%2FK8fz5sbiChX0NgguK1ldluhe6d2X%2BJpRzW2rtuC2MlABFSOoWLjoyNeJnsYkboTm1XHJ3wX3wbQ9lWaw9P63ZEIvgWOWuJPHfIKOkez8iuHaBDejYfy4VScEWabw%2Bf0NXV1reKhd5N30AZOisWmSogHXS8U%2BiO%2BFY0cWZWLFH%2FYq14vsdYlGQf1Bg8VGS7kRSvfMMfNoMQGOqUBgGEfXIqMujw0XGhmYWzeV0Gzk374lyz%2FSOWlTDyMbS%2BqqEjzOZu6lEZKW4N9mFUHUNWHhPgOD%2BEhcI8rhK%2FAogPODNNjPxQwfj5xnr7RhIr6F9uxYw7icw88r2M6i%2B%2B26pJbOGjZ8XLMi3NcwntOuVYLDHqsOfSkMgKcDb27zDMBx0DyrYGa2wRzMrcD9LV7erod%2FHvVKW8byUwUnXG1AKD%2BDR7F&X-Amz-Signature=01f2ed8c8d52ed650d2cd7354341183f63072ec6a5b5f032d439d8e4d4c92cb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3LWHFL5%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCdwPocBbvbWeDzM9YSnKUMhaqpo4NB1OhyoIIFX%2B%2Fg%2FQIgHH6V5irmeKwLQK4Gnjp4ippYdZlSKSQSJ5lV%2F6Sjw7EqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwGXg8RG%2FgctSdLDyrcA1F%2FQOwpFM9nJLFAXt3vNdGArKqTmuHR5rZPPuvmN32yq9Imbpr5IEseNaK3fsMAS2U1%2BkyJLfOkld2QcssFcCMVOqqgQLqDSAx2sarWToML25K6XViF8W8lf9OTOVyxmV0fM59LZfYiO2e3y3agk91ioFOWdB%2BSEc%2BZo4LPvpmPY%2B9RNyTsPiVI6SLqRU%2BNQBKLjP7X9GZfI7OLE3Byzn7gi0rQamTo8pw17wkuVuCXf%2BGMKI13CbOe8PeyBShFvkkyrhNpTrwKLc71FDyS88vbQDPx6IElVjDHRhYJy%2FvzcBdDW0H80%2BFzuo77QRTj%2BngZiXQOZMQ8qTWCGIdn4lmVl8yDLKuMqT%2FXeNO1aZJ0%2F4PnxbhwfADhAXIkd7jRE9U8e%2BEsWijdOT4SFEtKkXIEFVsKt9w10%2BvHWJ2zqs5GBJjNlM4G19Lx%2FK8fz5sbiChX0NgguK1ldluhe6d2X%2BJpRzW2rtuC2MlABFSOoWLjoyNeJnsYkboTm1XHJ3wX3wbQ9lWaw9P63ZEIvgWOWuJPHfIKOkez8iuHaBDejYfy4VScEWabw%2Bf0NXV1reKhd5N30AZOisWmSogHXS8U%2BiO%2BFY0cWZWLFH%2FYq14vsdYlGQf1Bg8VGS7kRSvfMMfNoMQGOqUBgGEfXIqMujw0XGhmYWzeV0Gzk374lyz%2FSOWlTDyMbS%2BqqEjzOZu6lEZKW4N9mFUHUNWHhPgOD%2BEhcI8rhK%2FAogPODNNjPxQwfj5xnr7RhIr6F9uxYw7icw88r2M6i%2B%2B26pJbOGjZ8XLMi3NcwntOuVYLDHqsOfSkMgKcDb27zDMBx0DyrYGa2wRzMrcD9LV7erod%2FHvVKW8byUwUnXG1AKD%2BDR7F&X-Amz-Signature=25d89b0b67bb37fa8df25c6d37f3ea1b164a7645712837fde5ccef0bb4ce92a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3LWHFL5%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCdwPocBbvbWeDzM9YSnKUMhaqpo4NB1OhyoIIFX%2B%2Fg%2FQIgHH6V5irmeKwLQK4Gnjp4ippYdZlSKSQSJ5lV%2F6Sjw7EqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwGXg8RG%2FgctSdLDyrcA1F%2FQOwpFM9nJLFAXt3vNdGArKqTmuHR5rZPPuvmN32yq9Imbpr5IEseNaK3fsMAS2U1%2BkyJLfOkld2QcssFcCMVOqqgQLqDSAx2sarWToML25K6XViF8W8lf9OTOVyxmV0fM59LZfYiO2e3y3agk91ioFOWdB%2BSEc%2BZo4LPvpmPY%2B9RNyTsPiVI6SLqRU%2BNQBKLjP7X9GZfI7OLE3Byzn7gi0rQamTo8pw17wkuVuCXf%2BGMKI13CbOe8PeyBShFvkkyrhNpTrwKLc71FDyS88vbQDPx6IElVjDHRhYJy%2FvzcBdDW0H80%2BFzuo77QRTj%2BngZiXQOZMQ8qTWCGIdn4lmVl8yDLKuMqT%2FXeNO1aZJ0%2F4PnxbhwfADhAXIkd7jRE9U8e%2BEsWijdOT4SFEtKkXIEFVsKt9w10%2BvHWJ2zqs5GBJjNlM4G19Lx%2FK8fz5sbiChX0NgguK1ldluhe6d2X%2BJpRzW2rtuC2MlABFSOoWLjoyNeJnsYkboTm1XHJ3wX3wbQ9lWaw9P63ZEIvgWOWuJPHfIKOkez8iuHaBDejYfy4VScEWabw%2Bf0NXV1reKhd5N30AZOisWmSogHXS8U%2BiO%2BFY0cWZWLFH%2FYq14vsdYlGQf1Bg8VGS7kRSvfMMfNoMQGOqUBgGEfXIqMujw0XGhmYWzeV0Gzk374lyz%2FSOWlTDyMbS%2BqqEjzOZu6lEZKW4N9mFUHUNWHhPgOD%2BEhcI8rhK%2FAogPODNNjPxQwfj5xnr7RhIr6F9uxYw7icw88r2M6i%2B%2B26pJbOGjZ8XLMi3NcwntOuVYLDHqsOfSkMgKcDb27zDMBx0DyrYGa2wRzMrcD9LV7erod%2FHvVKW8byUwUnXG1AKD%2BDR7F&X-Amz-Signature=a914cb426f2e25cfc460ca899821911ecf8ea3e9d16acfbb24ba3990b7b32a13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

drive around with `teleop_twist_keyboard` to scan more of the map

## Updating launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3LWHFL5%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCdwPocBbvbWeDzM9YSnKUMhaqpo4NB1OhyoIIFX%2B%2Fg%2FQIgHH6V5irmeKwLQK4Gnjp4ippYdZlSKSQSJ5lV%2F6Sjw7EqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwGXg8RG%2FgctSdLDyrcA1F%2FQOwpFM9nJLFAXt3vNdGArKqTmuHR5rZPPuvmN32yq9Imbpr5IEseNaK3fsMAS2U1%2BkyJLfOkld2QcssFcCMVOqqgQLqDSAx2sarWToML25K6XViF8W8lf9OTOVyxmV0fM59LZfYiO2e3y3agk91ioFOWdB%2BSEc%2BZo4LPvpmPY%2B9RNyTsPiVI6SLqRU%2BNQBKLjP7X9GZfI7OLE3Byzn7gi0rQamTo8pw17wkuVuCXf%2BGMKI13CbOe8PeyBShFvkkyrhNpTrwKLc71FDyS88vbQDPx6IElVjDHRhYJy%2FvzcBdDW0H80%2BFzuo77QRTj%2BngZiXQOZMQ8qTWCGIdn4lmVl8yDLKuMqT%2FXeNO1aZJ0%2F4PnxbhwfADhAXIkd7jRE9U8e%2BEsWijdOT4SFEtKkXIEFVsKt9w10%2BvHWJ2zqs5GBJjNlM4G19Lx%2FK8fz5sbiChX0NgguK1ldluhe6d2X%2BJpRzW2rtuC2MlABFSOoWLjoyNeJnsYkboTm1XHJ3wX3wbQ9lWaw9P63ZEIvgWOWuJPHfIKOkez8iuHaBDejYfy4VScEWabw%2Bf0NXV1reKhd5N30AZOisWmSogHXS8U%2BiO%2BFY0cWZWLFH%2FYq14vsdYlGQf1Bg8VGS7kRSvfMMfNoMQGOqUBgGEfXIqMujw0XGhmYWzeV0Gzk374lyz%2FSOWlTDyMbS%2BqqEjzOZu6lEZKW4N9mFUHUNWHhPgOD%2BEhcI8rhK%2FAogPODNNjPxQwfj5xnr7RhIr6F9uxYw7icw88r2M6i%2B%2B26pJbOGjZ8XLMi3NcwntOuVYLDHqsOfSkMgKcDb27zDMBx0DyrYGa2wRzMrcD9LV7erod%2FHvVKW8byUwUnXG1AKD%2BDR7F&X-Amz-Signature=76fecbf34b9f80282551d46f35233aa8bb3c37237dbc92c59961e3d0fa4896c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3LWHFL5%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCdwPocBbvbWeDzM9YSnKUMhaqpo4NB1OhyoIIFX%2B%2Fg%2FQIgHH6V5irmeKwLQK4Gnjp4ippYdZlSKSQSJ5lV%2F6Sjw7EqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwGXg8RG%2FgctSdLDyrcA1F%2FQOwpFM9nJLFAXt3vNdGArKqTmuHR5rZPPuvmN32yq9Imbpr5IEseNaK3fsMAS2U1%2BkyJLfOkld2QcssFcCMVOqqgQLqDSAx2sarWToML25K6XViF8W8lf9OTOVyxmV0fM59LZfYiO2e3y3agk91ioFOWdB%2BSEc%2BZo4LPvpmPY%2B9RNyTsPiVI6SLqRU%2BNQBKLjP7X9GZfI7OLE3Byzn7gi0rQamTo8pw17wkuVuCXf%2BGMKI13CbOe8PeyBShFvkkyrhNpTrwKLc71FDyS88vbQDPx6IElVjDHRhYJy%2FvzcBdDW0H80%2BFzuo77QRTj%2BngZiXQOZMQ8qTWCGIdn4lmVl8yDLKuMqT%2FXeNO1aZJ0%2F4PnxbhwfADhAXIkd7jRE9U8e%2BEsWijdOT4SFEtKkXIEFVsKt9w10%2BvHWJ2zqs5GBJjNlM4G19Lx%2FK8fz5sbiChX0NgguK1ldluhe6d2X%2BJpRzW2rtuC2MlABFSOoWLjoyNeJnsYkboTm1XHJ3wX3wbQ9lWaw9P63ZEIvgWOWuJPHfIKOkez8iuHaBDejYfy4VScEWabw%2Bf0NXV1reKhd5N30AZOisWmSogHXS8U%2BiO%2BFY0cWZWLFH%2FYq14vsdYlGQf1Bg8VGS7kRSvfMMfNoMQGOqUBgGEfXIqMujw0XGhmYWzeV0Gzk374lyz%2FSOWlTDyMbS%2BqqEjzOZu6lEZKW4N9mFUHUNWHhPgOD%2BEhcI8rhK%2FAogPODNNjPxQwfj5xnr7RhIr6F9uxYw7icw88r2M6i%2B%2B26pJbOGjZ8XLMi3NcwntOuVYLDHqsOfSkMgKcDb27zDMBx0DyrYGa2wRzMrcD9LV7erod%2FHvVKW8byUwUnXG1AKD%2BDR7F&X-Amz-Signature=0771a530311ad3edff3d60e8717face5fd204417bf56db5a6579adee21c41b12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3LWHFL5%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCdwPocBbvbWeDzM9YSnKUMhaqpo4NB1OhyoIIFX%2B%2Fg%2FQIgHH6V5irmeKwLQK4Gnjp4ippYdZlSKSQSJ5lV%2F6Sjw7EqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwGXg8RG%2FgctSdLDyrcA1F%2FQOwpFM9nJLFAXt3vNdGArKqTmuHR5rZPPuvmN32yq9Imbpr5IEseNaK3fsMAS2U1%2BkyJLfOkld2QcssFcCMVOqqgQLqDSAx2sarWToML25K6XViF8W8lf9OTOVyxmV0fM59LZfYiO2e3y3agk91ioFOWdB%2BSEc%2BZo4LPvpmPY%2B9RNyTsPiVI6SLqRU%2BNQBKLjP7X9GZfI7OLE3Byzn7gi0rQamTo8pw17wkuVuCXf%2BGMKI13CbOe8PeyBShFvkkyrhNpTrwKLc71FDyS88vbQDPx6IElVjDHRhYJy%2FvzcBdDW0H80%2BFzuo77QRTj%2BngZiXQOZMQ8qTWCGIdn4lmVl8yDLKuMqT%2FXeNO1aZJ0%2F4PnxbhwfADhAXIkd7jRE9U8e%2BEsWijdOT4SFEtKkXIEFVsKt9w10%2BvHWJ2zqs5GBJjNlM4G19Lx%2FK8fz5sbiChX0NgguK1ldluhe6d2X%2BJpRzW2rtuC2MlABFSOoWLjoyNeJnsYkboTm1XHJ3wX3wbQ9lWaw9P63ZEIvgWOWuJPHfIKOkez8iuHaBDejYfy4VScEWabw%2Bf0NXV1reKhd5N30AZOisWmSogHXS8U%2BiO%2BFY0cWZWLFH%2FYq14vsdYlGQf1Bg8VGS7kRSvfMMfNoMQGOqUBgGEfXIqMujw0XGhmYWzeV0Gzk374lyz%2FSOWlTDyMbS%2BqqEjzOZu6lEZKW4N9mFUHUNWHhPgOD%2BEhcI8rhK%2FAogPODNNjPxQwfj5xnr7RhIr6F9uxYw7icw88r2M6i%2B%2B26pJbOGjZ8XLMi3NcwntOuVYLDHqsOfSkMgKcDb27zDMBx0DyrYGa2wRzMrcD9LV7erod%2FHvVKW8byUwUnXG1AKD%2BDR7F&X-Amz-Signature=56ef15b20ace38dd507178f71a28fdf7bb9cf86cac67da21557952ef22c5a0f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3LWHFL5%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCdwPocBbvbWeDzM9YSnKUMhaqpo4NB1OhyoIIFX%2B%2Fg%2FQIgHH6V5irmeKwLQK4Gnjp4ippYdZlSKSQSJ5lV%2F6Sjw7EqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwGXg8RG%2FgctSdLDyrcA1F%2FQOwpFM9nJLFAXt3vNdGArKqTmuHR5rZPPuvmN32yq9Imbpr5IEseNaK3fsMAS2U1%2BkyJLfOkld2QcssFcCMVOqqgQLqDSAx2sarWToML25K6XViF8W8lf9OTOVyxmV0fM59LZfYiO2e3y3agk91ioFOWdB%2BSEc%2BZo4LPvpmPY%2B9RNyTsPiVI6SLqRU%2BNQBKLjP7X9GZfI7OLE3Byzn7gi0rQamTo8pw17wkuVuCXf%2BGMKI13CbOe8PeyBShFvkkyrhNpTrwKLc71FDyS88vbQDPx6IElVjDHRhYJy%2FvzcBdDW0H80%2BFzuo77QRTj%2BngZiXQOZMQ8qTWCGIdn4lmVl8yDLKuMqT%2FXeNO1aZJ0%2F4PnxbhwfADhAXIkd7jRE9U8e%2BEsWijdOT4SFEtKkXIEFVsKt9w10%2BvHWJ2zqs5GBJjNlM4G19Lx%2FK8fz5sbiChX0NgguK1ldluhe6d2X%2BJpRzW2rtuC2MlABFSOoWLjoyNeJnsYkboTm1XHJ3wX3wbQ9lWaw9P63ZEIvgWOWuJPHfIKOkez8iuHaBDejYfy4VScEWabw%2Bf0NXV1reKhd5N30AZOisWmSogHXS8U%2BiO%2BFY0cWZWLFH%2FYq14vsdYlGQf1Bg8VGS7kRSvfMMfNoMQGOqUBgGEfXIqMujw0XGhmYWzeV0Gzk374lyz%2FSOWlTDyMbS%2BqqEjzOZu6lEZKW4N9mFUHUNWHhPgOD%2BEhcI8rhK%2FAogPODNNjPxQwfj5xnr7RhIr6F9uxYw7icw88r2M6i%2B%2B26pJbOGjZ8XLMi3NcwntOuVYLDHqsOfSkMgKcDb27zDMBx0DyrYGa2wRzMrcD9LV7erod%2FHvVKW8byUwUnXG1AKD%2BDR7F&X-Amz-Signature=bf30daafa58a0e82f93f5264c3ae15d37a861afbe827395e62282e6cfdeda2c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3LWHFL5%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCdwPocBbvbWeDzM9YSnKUMhaqpo4NB1OhyoIIFX%2B%2Fg%2FQIgHH6V5irmeKwLQK4Gnjp4ippYdZlSKSQSJ5lV%2F6Sjw7EqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwGXg8RG%2FgctSdLDyrcA1F%2FQOwpFM9nJLFAXt3vNdGArKqTmuHR5rZPPuvmN32yq9Imbpr5IEseNaK3fsMAS2U1%2BkyJLfOkld2QcssFcCMVOqqgQLqDSAx2sarWToML25K6XViF8W8lf9OTOVyxmV0fM59LZfYiO2e3y3agk91ioFOWdB%2BSEc%2BZo4LPvpmPY%2B9RNyTsPiVI6SLqRU%2BNQBKLjP7X9GZfI7OLE3Byzn7gi0rQamTo8pw17wkuVuCXf%2BGMKI13CbOe8PeyBShFvkkyrhNpTrwKLc71FDyS88vbQDPx6IElVjDHRhYJy%2FvzcBdDW0H80%2BFzuo77QRTj%2BngZiXQOZMQ8qTWCGIdn4lmVl8yDLKuMqT%2FXeNO1aZJ0%2F4PnxbhwfADhAXIkd7jRE9U8e%2BEsWijdOT4SFEtKkXIEFVsKt9w10%2BvHWJ2zqs5GBJjNlM4G19Lx%2FK8fz5sbiChX0NgguK1ldluhe6d2X%2BJpRzW2rtuC2MlABFSOoWLjoyNeJnsYkboTm1XHJ3wX3wbQ9lWaw9P63ZEIvgWOWuJPHfIKOkez8iuHaBDejYfy4VScEWabw%2Bf0NXV1reKhd5N30AZOisWmSogHXS8U%2BiO%2BFY0cWZWLFH%2FYq14vsdYlGQf1Bg8VGS7kRSvfMMfNoMQGOqUBgGEfXIqMujw0XGhmYWzeV0Gzk374lyz%2FSOWlTDyMbS%2BqqEjzOZu6lEZKW4N9mFUHUNWHhPgOD%2BEhcI8rhK%2FAogPODNNjPxQwfj5xnr7RhIr6F9uxYw7icw88r2M6i%2B%2B26pJbOGjZ8XLMi3NcwntOuVYLDHqsOfSkMgKcDb27zDMBx0DyrYGa2wRzMrcD9LV7erod%2FHvVKW8byUwUnXG1AKD%2BDR7F&X-Amz-Signature=5c62558592505865606217e6799198e30a2194b9bbcee1d11107cfba5a64e3ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3LWHFL5%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCdwPocBbvbWeDzM9YSnKUMhaqpo4NB1OhyoIIFX%2B%2Fg%2FQIgHH6V5irmeKwLQK4Gnjp4ippYdZlSKSQSJ5lV%2F6Sjw7EqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDwGXg8RG%2FgctSdLDyrcA1F%2FQOwpFM9nJLFAXt3vNdGArKqTmuHR5rZPPuvmN32yq9Imbpr5IEseNaK3fsMAS2U1%2BkyJLfOkld2QcssFcCMVOqqgQLqDSAx2sarWToML25K6XViF8W8lf9OTOVyxmV0fM59LZfYiO2e3y3agk91ioFOWdB%2BSEc%2BZo4LPvpmPY%2B9RNyTsPiVI6SLqRU%2BNQBKLjP7X9GZfI7OLE3Byzn7gi0rQamTo8pw17wkuVuCXf%2BGMKI13CbOe8PeyBShFvkkyrhNpTrwKLc71FDyS88vbQDPx6IElVjDHRhYJy%2FvzcBdDW0H80%2BFzuo77QRTj%2BngZiXQOZMQ8qTWCGIdn4lmVl8yDLKuMqT%2FXeNO1aZJ0%2F4PnxbhwfADhAXIkd7jRE9U8e%2BEsWijdOT4SFEtKkXIEFVsKt9w10%2BvHWJ2zqs5GBJjNlM4G19Lx%2FK8fz5sbiChX0NgguK1ldluhe6d2X%2BJpRzW2rtuC2MlABFSOoWLjoyNeJnsYkboTm1XHJ3wX3wbQ9lWaw9P63ZEIvgWOWuJPHfIKOkez8iuHaBDejYfy4VScEWabw%2Bf0NXV1reKhd5N30AZOisWmSogHXS8U%2BiO%2BFY0cWZWLFH%2FYq14vsdYlGQf1Bg8VGS7kRSvfMMfNoMQGOqUBgGEfXIqMujw0XGhmYWzeV0Gzk374lyz%2FSOWlTDyMbS%2BqqEjzOZu6lEZKW4N9mFUHUNWHhPgOD%2BEhcI8rhK%2FAogPODNNjPxQwfj5xnr7RhIr6F9uxYw7icw88r2M6i%2B%2B26pJbOGjZ8XLMi3NcwntOuVYLDHqsOfSkMgKcDb27zDMBx0DyrYGa2wRzMrcD9LV7erod%2FHvVKW8byUwUnXG1AKD%2BDR7F&X-Amz-Signature=197bc2f5dece1d55f9ca75ef0331485496190bc95ce480a2bdb1d5284e77d5d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
