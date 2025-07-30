---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-29T23:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-29T23:56:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6ZQ4KLN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClJKl5aKNNbhjXwJXqIlCnQ6mqMCbvoLSQL3d6XLcSkgIgZQqFk6fQ4S2zwKZZrKHVpX7fSLwwnP7W%2F%2Fq%2Bbo2w89MqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDN3PoA9vv2CEvf6lyrcA5uX%2F4%2BCDFgyEVnmLh1MdXMZp6ANuqhv1BO1gVgDqha1oKv5dDxwy%2B%2Fd5L7GrhJJSXetRo9wdHFzcHlAWiTAqQv%2BsXuRCSLhg0kjgwc4Yj1je688frUX8GlnzKXKfMwft%2B%2F9PCuddidGx02nzRYOnhmspnaJ%2FumTb9Pt3wOJHg3%2FITGr6jhLm%2B%2B1VuRVyzv9ofI0W1dApd9mq61CDBV%2BJm8uVOaWNO%2FL84JKI%2BIRn%2FkQmszFBskuGFhXE%2By5qV%2Fs4pwDtk6i4Kxl%2FMjwp%2BBXYXv3mry5SUUG153Y34CrQwzjwG0U8NsD0amq6lf%2FoVwNFZyLLTSNMQ58q%2BwyFlStmS2SCEu2RZT4dtoICrrAXfKZyZIBVBTtrONqBhcEl%2Bd2lpR537wAQjfiJX%2BVcEBSozl0cT1vXm13edz0PDFcCs4NnQENeAOckNTEx4iqpqzyetd%2BkLt2vblsW0n%2BB8OqPoTp%2BvPn7AZQv%2BOFXQlVAY0%2BpaUbNCJr5OcMSQsSkSRkIMTzUT1bwuynyXm9CvYjNWT%2FwJuabTf74LX2i3zOSQWaizZoN0ckBVLjijRWDDWA2bG4HwC9P9p9y4N26%2Fa%2BLlnqkHaCt5QweXMpSZa0tyKJA7HlF5Fl4p7NIgeFML3apsQGOqUBgdjB5O90ZgHcX7q4Jm8RxKlsotcm3gTLQGHS2D8fzocF7ET2IJ2YFBWoG91nCqfUtMLCgFXw8KoUu58JUDFwxGQnKSpB%2BgTlSsjHdHj2Y2eJM1CGzG1SZTDXn1J8yWhpoLxy%2FwMdiewXB%2BeXTDE0LNDDvhs%2Byqziq8l3U3Shck%2FKqFOPIKpoFWGsdkudglA51Pkjy8VkmFQTaMuCOP9zEbYIx6MJ&X-Amz-Signature=c73bfe9e7eaaf94b633be1b6ee68a59cb6aba17a5829d92a4ae9c6d854e94e0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6ZQ4KLN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClJKl5aKNNbhjXwJXqIlCnQ6mqMCbvoLSQL3d6XLcSkgIgZQqFk6fQ4S2zwKZZrKHVpX7fSLwwnP7W%2F%2Fq%2Bbo2w89MqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDN3PoA9vv2CEvf6lyrcA5uX%2F4%2BCDFgyEVnmLh1MdXMZp6ANuqhv1BO1gVgDqha1oKv5dDxwy%2B%2Fd5L7GrhJJSXetRo9wdHFzcHlAWiTAqQv%2BsXuRCSLhg0kjgwc4Yj1je688frUX8GlnzKXKfMwft%2B%2F9PCuddidGx02nzRYOnhmspnaJ%2FumTb9Pt3wOJHg3%2FITGr6jhLm%2B%2B1VuRVyzv9ofI0W1dApd9mq61CDBV%2BJm8uVOaWNO%2FL84JKI%2BIRn%2FkQmszFBskuGFhXE%2By5qV%2Fs4pwDtk6i4Kxl%2FMjwp%2BBXYXv3mry5SUUG153Y34CrQwzjwG0U8NsD0amq6lf%2FoVwNFZyLLTSNMQ58q%2BwyFlStmS2SCEu2RZT4dtoICrrAXfKZyZIBVBTtrONqBhcEl%2Bd2lpR537wAQjfiJX%2BVcEBSozl0cT1vXm13edz0PDFcCs4NnQENeAOckNTEx4iqpqzyetd%2BkLt2vblsW0n%2BB8OqPoTp%2BvPn7AZQv%2BOFXQlVAY0%2BpaUbNCJr5OcMSQsSkSRkIMTzUT1bwuynyXm9CvYjNWT%2FwJuabTf74LX2i3zOSQWaizZoN0ckBVLjijRWDDWA2bG4HwC9P9p9y4N26%2Fa%2BLlnqkHaCt5QweXMpSZa0tyKJA7HlF5Fl4p7NIgeFML3apsQGOqUBgdjB5O90ZgHcX7q4Jm8RxKlsotcm3gTLQGHS2D8fzocF7ET2IJ2YFBWoG91nCqfUtMLCgFXw8KoUu58JUDFwxGQnKSpB%2BgTlSsjHdHj2Y2eJM1CGzG1SZTDXn1J8yWhpoLxy%2FwMdiewXB%2BeXTDE0LNDDvhs%2Byqziq8l3U3Shck%2FKqFOPIKpoFWGsdkudglA51Pkjy8VkmFQTaMuCOP9zEbYIx6MJ&X-Amz-Signature=c72a56a839b773d836dedb9c9cb4a3aa288af6fea7e04af75cf6b6cf510b49ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6ZQ4KLN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClJKl5aKNNbhjXwJXqIlCnQ6mqMCbvoLSQL3d6XLcSkgIgZQqFk6fQ4S2zwKZZrKHVpX7fSLwwnP7W%2F%2Fq%2Bbo2w89MqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDN3PoA9vv2CEvf6lyrcA5uX%2F4%2BCDFgyEVnmLh1MdXMZp6ANuqhv1BO1gVgDqha1oKv5dDxwy%2B%2Fd5L7GrhJJSXetRo9wdHFzcHlAWiTAqQv%2BsXuRCSLhg0kjgwc4Yj1je688frUX8GlnzKXKfMwft%2B%2F9PCuddidGx02nzRYOnhmspnaJ%2FumTb9Pt3wOJHg3%2FITGr6jhLm%2B%2B1VuRVyzv9ofI0W1dApd9mq61CDBV%2BJm8uVOaWNO%2FL84JKI%2BIRn%2FkQmszFBskuGFhXE%2By5qV%2Fs4pwDtk6i4Kxl%2FMjwp%2BBXYXv3mry5SUUG153Y34CrQwzjwG0U8NsD0amq6lf%2FoVwNFZyLLTSNMQ58q%2BwyFlStmS2SCEu2RZT4dtoICrrAXfKZyZIBVBTtrONqBhcEl%2Bd2lpR537wAQjfiJX%2BVcEBSozl0cT1vXm13edz0PDFcCs4NnQENeAOckNTEx4iqpqzyetd%2BkLt2vblsW0n%2BB8OqPoTp%2BvPn7AZQv%2BOFXQlVAY0%2BpaUbNCJr5OcMSQsSkSRkIMTzUT1bwuynyXm9CvYjNWT%2FwJuabTf74LX2i3zOSQWaizZoN0ckBVLjijRWDDWA2bG4HwC9P9p9y4N26%2Fa%2BLlnqkHaCt5QweXMpSZa0tyKJA7HlF5Fl4p7NIgeFML3apsQGOqUBgdjB5O90ZgHcX7q4Jm8RxKlsotcm3gTLQGHS2D8fzocF7ET2IJ2YFBWoG91nCqfUtMLCgFXw8KoUu58JUDFwxGQnKSpB%2BgTlSsjHdHj2Y2eJM1CGzG1SZTDXn1J8yWhpoLxy%2FwMdiewXB%2BeXTDE0LNDDvhs%2Byqziq8l3U3Shck%2FKqFOPIKpoFWGsdkudglA51Pkjy8VkmFQTaMuCOP9zEbYIx6MJ&X-Amz-Signature=b8c89de2a84f049f1ba2af259d2802078ed2ed71b448941c1d5d254d3ea7c645&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6ZQ4KLN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClJKl5aKNNbhjXwJXqIlCnQ6mqMCbvoLSQL3d6XLcSkgIgZQqFk6fQ4S2zwKZZrKHVpX7fSLwwnP7W%2F%2Fq%2Bbo2w89MqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDN3PoA9vv2CEvf6lyrcA5uX%2F4%2BCDFgyEVnmLh1MdXMZp6ANuqhv1BO1gVgDqha1oKv5dDxwy%2B%2Fd5L7GrhJJSXetRo9wdHFzcHlAWiTAqQv%2BsXuRCSLhg0kjgwc4Yj1je688frUX8GlnzKXKfMwft%2B%2F9PCuddidGx02nzRYOnhmspnaJ%2FumTb9Pt3wOJHg3%2FITGr6jhLm%2B%2B1VuRVyzv9ofI0W1dApd9mq61CDBV%2BJm8uVOaWNO%2FL84JKI%2BIRn%2FkQmszFBskuGFhXE%2By5qV%2Fs4pwDtk6i4Kxl%2FMjwp%2BBXYXv3mry5SUUG153Y34CrQwzjwG0U8NsD0amq6lf%2FoVwNFZyLLTSNMQ58q%2BwyFlStmS2SCEu2RZT4dtoICrrAXfKZyZIBVBTtrONqBhcEl%2Bd2lpR537wAQjfiJX%2BVcEBSozl0cT1vXm13edz0PDFcCs4NnQENeAOckNTEx4iqpqzyetd%2BkLt2vblsW0n%2BB8OqPoTp%2BvPn7AZQv%2BOFXQlVAY0%2BpaUbNCJr5OcMSQsSkSRkIMTzUT1bwuynyXm9CvYjNWT%2FwJuabTf74LX2i3zOSQWaizZoN0ckBVLjijRWDDWA2bG4HwC9P9p9y4N26%2Fa%2BLlnqkHaCt5QweXMpSZa0tyKJA7HlF5Fl4p7NIgeFML3apsQGOqUBgdjB5O90ZgHcX7q4Jm8RxKlsotcm3gTLQGHS2D8fzocF7ET2IJ2YFBWoG91nCqfUtMLCgFXw8KoUu58JUDFwxGQnKSpB%2BgTlSsjHdHj2Y2eJM1CGzG1SZTDXn1J8yWhpoLxy%2FwMdiewXB%2BeXTDE0LNDDvhs%2Byqziq8l3U3Shck%2FKqFOPIKpoFWGsdkudglA51Pkjy8VkmFQTaMuCOP9zEbYIx6MJ&X-Amz-Signature=464838b5224d55aa530623ee5e1e53469e5c969b7aad8e9737688071a14925e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6ZQ4KLN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClJKl5aKNNbhjXwJXqIlCnQ6mqMCbvoLSQL3d6XLcSkgIgZQqFk6fQ4S2zwKZZrKHVpX7fSLwwnP7W%2F%2Fq%2Bbo2w89MqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDN3PoA9vv2CEvf6lyrcA5uX%2F4%2BCDFgyEVnmLh1MdXMZp6ANuqhv1BO1gVgDqha1oKv5dDxwy%2B%2Fd5L7GrhJJSXetRo9wdHFzcHlAWiTAqQv%2BsXuRCSLhg0kjgwc4Yj1je688frUX8GlnzKXKfMwft%2B%2F9PCuddidGx02nzRYOnhmspnaJ%2FumTb9Pt3wOJHg3%2FITGr6jhLm%2B%2B1VuRVyzv9ofI0W1dApd9mq61CDBV%2BJm8uVOaWNO%2FL84JKI%2BIRn%2FkQmszFBskuGFhXE%2By5qV%2Fs4pwDtk6i4Kxl%2FMjwp%2BBXYXv3mry5SUUG153Y34CrQwzjwG0U8NsD0amq6lf%2FoVwNFZyLLTSNMQ58q%2BwyFlStmS2SCEu2RZT4dtoICrrAXfKZyZIBVBTtrONqBhcEl%2Bd2lpR537wAQjfiJX%2BVcEBSozl0cT1vXm13edz0PDFcCs4NnQENeAOckNTEx4iqpqzyetd%2BkLt2vblsW0n%2BB8OqPoTp%2BvPn7AZQv%2BOFXQlVAY0%2BpaUbNCJr5OcMSQsSkSRkIMTzUT1bwuynyXm9CvYjNWT%2FwJuabTf74LX2i3zOSQWaizZoN0ckBVLjijRWDDWA2bG4HwC9P9p9y4N26%2Fa%2BLlnqkHaCt5QweXMpSZa0tyKJA7HlF5Fl4p7NIgeFML3apsQGOqUBgdjB5O90ZgHcX7q4Jm8RxKlsotcm3gTLQGHS2D8fzocF7ET2IJ2YFBWoG91nCqfUtMLCgFXw8KoUu58JUDFwxGQnKSpB%2BgTlSsjHdHj2Y2eJM1CGzG1SZTDXn1J8yWhpoLxy%2FwMdiewXB%2BeXTDE0LNDDvhs%2Byqziq8l3U3Shck%2FKqFOPIKpoFWGsdkudglA51Pkjy8VkmFQTaMuCOP9zEbYIx6MJ&X-Amz-Signature=68f2ae338777ab5d407128eef20299b173fe7aa9e5c4153a03420edaf8b2908a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6ZQ4KLN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClJKl5aKNNbhjXwJXqIlCnQ6mqMCbvoLSQL3d6XLcSkgIgZQqFk6fQ4S2zwKZZrKHVpX7fSLwwnP7W%2F%2Fq%2Bbo2w89MqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDN3PoA9vv2CEvf6lyrcA5uX%2F4%2BCDFgyEVnmLh1MdXMZp6ANuqhv1BO1gVgDqha1oKv5dDxwy%2B%2Fd5L7GrhJJSXetRo9wdHFzcHlAWiTAqQv%2BsXuRCSLhg0kjgwc4Yj1je688frUX8GlnzKXKfMwft%2B%2F9PCuddidGx02nzRYOnhmspnaJ%2FumTb9Pt3wOJHg3%2FITGr6jhLm%2B%2B1VuRVyzv9ofI0W1dApd9mq61CDBV%2BJm8uVOaWNO%2FL84JKI%2BIRn%2FkQmszFBskuGFhXE%2By5qV%2Fs4pwDtk6i4Kxl%2FMjwp%2BBXYXv3mry5SUUG153Y34CrQwzjwG0U8NsD0amq6lf%2FoVwNFZyLLTSNMQ58q%2BwyFlStmS2SCEu2RZT4dtoICrrAXfKZyZIBVBTtrONqBhcEl%2Bd2lpR537wAQjfiJX%2BVcEBSozl0cT1vXm13edz0PDFcCs4NnQENeAOckNTEx4iqpqzyetd%2BkLt2vblsW0n%2BB8OqPoTp%2BvPn7AZQv%2BOFXQlVAY0%2BpaUbNCJr5OcMSQsSkSRkIMTzUT1bwuynyXm9CvYjNWT%2FwJuabTf74LX2i3zOSQWaizZoN0ckBVLjijRWDDWA2bG4HwC9P9p9y4N26%2Fa%2BLlnqkHaCt5QweXMpSZa0tyKJA7HlF5Fl4p7NIgeFML3apsQGOqUBgdjB5O90ZgHcX7q4Jm8RxKlsotcm3gTLQGHS2D8fzocF7ET2IJ2YFBWoG91nCqfUtMLCgFXw8KoUu58JUDFwxGQnKSpB%2BgTlSsjHdHj2Y2eJM1CGzG1SZTDXn1J8yWhpoLxy%2FwMdiewXB%2BeXTDE0LNDDvhs%2Byqziq8l3U3Shck%2FKqFOPIKpoFWGsdkudglA51Pkjy8VkmFQTaMuCOP9zEbYIx6MJ&X-Amz-Signature=a279b2098fe19e19dc192eae64a42cfc2fd5ce2db5cf8668798d9018ed69c8fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6ZQ4KLN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClJKl5aKNNbhjXwJXqIlCnQ6mqMCbvoLSQL3d6XLcSkgIgZQqFk6fQ4S2zwKZZrKHVpX7fSLwwnP7W%2F%2Fq%2Bbo2w89MqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDN3PoA9vv2CEvf6lyrcA5uX%2F4%2BCDFgyEVnmLh1MdXMZp6ANuqhv1BO1gVgDqha1oKv5dDxwy%2B%2Fd5L7GrhJJSXetRo9wdHFzcHlAWiTAqQv%2BsXuRCSLhg0kjgwc4Yj1je688frUX8GlnzKXKfMwft%2B%2F9PCuddidGx02nzRYOnhmspnaJ%2FumTb9Pt3wOJHg3%2FITGr6jhLm%2B%2B1VuRVyzv9ofI0W1dApd9mq61CDBV%2BJm8uVOaWNO%2FL84JKI%2BIRn%2FkQmszFBskuGFhXE%2By5qV%2Fs4pwDtk6i4Kxl%2FMjwp%2BBXYXv3mry5SUUG153Y34CrQwzjwG0U8NsD0amq6lf%2FoVwNFZyLLTSNMQ58q%2BwyFlStmS2SCEu2RZT4dtoICrrAXfKZyZIBVBTtrONqBhcEl%2Bd2lpR537wAQjfiJX%2BVcEBSozl0cT1vXm13edz0PDFcCs4NnQENeAOckNTEx4iqpqzyetd%2BkLt2vblsW0n%2BB8OqPoTp%2BvPn7AZQv%2BOFXQlVAY0%2BpaUbNCJr5OcMSQsSkSRkIMTzUT1bwuynyXm9CvYjNWT%2FwJuabTf74LX2i3zOSQWaizZoN0ckBVLjijRWDDWA2bG4HwC9P9p9y4N26%2Fa%2BLlnqkHaCt5QweXMpSZa0tyKJA7HlF5Fl4p7NIgeFML3apsQGOqUBgdjB5O90ZgHcX7q4Jm8RxKlsotcm3gTLQGHS2D8fzocF7ET2IJ2YFBWoG91nCqfUtMLCgFXw8KoUu58JUDFwxGQnKSpB%2BgTlSsjHdHj2Y2eJM1CGzG1SZTDXn1J8yWhpoLxy%2FwMdiewXB%2BeXTDE0LNDDvhs%2Byqziq8l3U3Shck%2FKqFOPIKpoFWGsdkudglA51Pkjy8VkmFQTaMuCOP9zEbYIx6MJ&X-Amz-Signature=802485612545b5b20c1db92ab739095d6255acfacf8e1c2e9dd8e81f0209f1f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

drive around with `teleop_twist_keyboard` to scan more of the map

## Updating launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6ZQ4KLN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClJKl5aKNNbhjXwJXqIlCnQ6mqMCbvoLSQL3d6XLcSkgIgZQqFk6fQ4S2zwKZZrKHVpX7fSLwwnP7W%2F%2Fq%2Bbo2w89MqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDN3PoA9vv2CEvf6lyrcA5uX%2F4%2BCDFgyEVnmLh1MdXMZp6ANuqhv1BO1gVgDqha1oKv5dDxwy%2B%2Fd5L7GrhJJSXetRo9wdHFzcHlAWiTAqQv%2BsXuRCSLhg0kjgwc4Yj1je688frUX8GlnzKXKfMwft%2B%2F9PCuddidGx02nzRYOnhmspnaJ%2FumTb9Pt3wOJHg3%2FITGr6jhLm%2B%2B1VuRVyzv9ofI0W1dApd9mq61CDBV%2BJm8uVOaWNO%2FL84JKI%2BIRn%2FkQmszFBskuGFhXE%2By5qV%2Fs4pwDtk6i4Kxl%2FMjwp%2BBXYXv3mry5SUUG153Y34CrQwzjwG0U8NsD0amq6lf%2FoVwNFZyLLTSNMQ58q%2BwyFlStmS2SCEu2RZT4dtoICrrAXfKZyZIBVBTtrONqBhcEl%2Bd2lpR537wAQjfiJX%2BVcEBSozl0cT1vXm13edz0PDFcCs4NnQENeAOckNTEx4iqpqzyetd%2BkLt2vblsW0n%2BB8OqPoTp%2BvPn7AZQv%2BOFXQlVAY0%2BpaUbNCJr5OcMSQsSkSRkIMTzUT1bwuynyXm9CvYjNWT%2FwJuabTf74LX2i3zOSQWaizZoN0ckBVLjijRWDDWA2bG4HwC9P9p9y4N26%2Fa%2BLlnqkHaCt5QweXMpSZa0tyKJA7HlF5Fl4p7NIgeFML3apsQGOqUBgdjB5O90ZgHcX7q4Jm8RxKlsotcm3gTLQGHS2D8fzocF7ET2IJ2YFBWoG91nCqfUtMLCgFXw8KoUu58JUDFwxGQnKSpB%2BgTlSsjHdHj2Y2eJM1CGzG1SZTDXn1J8yWhpoLxy%2FwMdiewXB%2BeXTDE0LNDDvhs%2Byqziq8l3U3Shck%2FKqFOPIKpoFWGsdkudglA51Pkjy8VkmFQTaMuCOP9zEbYIx6MJ&X-Amz-Signature=9b9602ace08ea1c1c6282c8f86d5d98897f7e4d15899a60906d1ce405d244402&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6ZQ4KLN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClJKl5aKNNbhjXwJXqIlCnQ6mqMCbvoLSQL3d6XLcSkgIgZQqFk6fQ4S2zwKZZrKHVpX7fSLwwnP7W%2F%2Fq%2Bbo2w89MqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDN3PoA9vv2CEvf6lyrcA5uX%2F4%2BCDFgyEVnmLh1MdXMZp6ANuqhv1BO1gVgDqha1oKv5dDxwy%2B%2Fd5L7GrhJJSXetRo9wdHFzcHlAWiTAqQv%2BsXuRCSLhg0kjgwc4Yj1je688frUX8GlnzKXKfMwft%2B%2F9PCuddidGx02nzRYOnhmspnaJ%2FumTb9Pt3wOJHg3%2FITGr6jhLm%2B%2B1VuRVyzv9ofI0W1dApd9mq61CDBV%2BJm8uVOaWNO%2FL84JKI%2BIRn%2FkQmszFBskuGFhXE%2By5qV%2Fs4pwDtk6i4Kxl%2FMjwp%2BBXYXv3mry5SUUG153Y34CrQwzjwG0U8NsD0amq6lf%2FoVwNFZyLLTSNMQ58q%2BwyFlStmS2SCEu2RZT4dtoICrrAXfKZyZIBVBTtrONqBhcEl%2Bd2lpR537wAQjfiJX%2BVcEBSozl0cT1vXm13edz0PDFcCs4NnQENeAOckNTEx4iqpqzyetd%2BkLt2vblsW0n%2BB8OqPoTp%2BvPn7AZQv%2BOFXQlVAY0%2BpaUbNCJr5OcMSQsSkSRkIMTzUT1bwuynyXm9CvYjNWT%2FwJuabTf74LX2i3zOSQWaizZoN0ckBVLjijRWDDWA2bG4HwC9P9p9y4N26%2Fa%2BLlnqkHaCt5QweXMpSZa0tyKJA7HlF5Fl4p7NIgeFML3apsQGOqUBgdjB5O90ZgHcX7q4Jm8RxKlsotcm3gTLQGHS2D8fzocF7ET2IJ2YFBWoG91nCqfUtMLCgFXw8KoUu58JUDFwxGQnKSpB%2BgTlSsjHdHj2Y2eJM1CGzG1SZTDXn1J8yWhpoLxy%2FwMdiewXB%2BeXTDE0LNDDvhs%2Byqziq8l3U3Shck%2FKqFOPIKpoFWGsdkudglA51Pkjy8VkmFQTaMuCOP9zEbYIx6MJ&X-Amz-Signature=0b165c2650dc40e3ce092fea3913cc9d1f3ae392dba8c2faef308cc5de501433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6ZQ4KLN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClJKl5aKNNbhjXwJXqIlCnQ6mqMCbvoLSQL3d6XLcSkgIgZQqFk6fQ4S2zwKZZrKHVpX7fSLwwnP7W%2F%2Fq%2Bbo2w89MqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDN3PoA9vv2CEvf6lyrcA5uX%2F4%2BCDFgyEVnmLh1MdXMZp6ANuqhv1BO1gVgDqha1oKv5dDxwy%2B%2Fd5L7GrhJJSXetRo9wdHFzcHlAWiTAqQv%2BsXuRCSLhg0kjgwc4Yj1je688frUX8GlnzKXKfMwft%2B%2F9PCuddidGx02nzRYOnhmspnaJ%2FumTb9Pt3wOJHg3%2FITGr6jhLm%2B%2B1VuRVyzv9ofI0W1dApd9mq61CDBV%2BJm8uVOaWNO%2FL84JKI%2BIRn%2FkQmszFBskuGFhXE%2By5qV%2Fs4pwDtk6i4Kxl%2FMjwp%2BBXYXv3mry5SUUG153Y34CrQwzjwG0U8NsD0amq6lf%2FoVwNFZyLLTSNMQ58q%2BwyFlStmS2SCEu2RZT4dtoICrrAXfKZyZIBVBTtrONqBhcEl%2Bd2lpR537wAQjfiJX%2BVcEBSozl0cT1vXm13edz0PDFcCs4NnQENeAOckNTEx4iqpqzyetd%2BkLt2vblsW0n%2BB8OqPoTp%2BvPn7AZQv%2BOFXQlVAY0%2BpaUbNCJr5OcMSQsSkSRkIMTzUT1bwuynyXm9CvYjNWT%2FwJuabTf74LX2i3zOSQWaizZoN0ckBVLjijRWDDWA2bG4HwC9P9p9y4N26%2Fa%2BLlnqkHaCt5QweXMpSZa0tyKJA7HlF5Fl4p7NIgeFML3apsQGOqUBgdjB5O90ZgHcX7q4Jm8RxKlsotcm3gTLQGHS2D8fzocF7ET2IJ2YFBWoG91nCqfUtMLCgFXw8KoUu58JUDFwxGQnKSpB%2BgTlSsjHdHj2Y2eJM1CGzG1SZTDXn1J8yWhpoLxy%2FwMdiewXB%2BeXTDE0LNDDvhs%2Byqziq8l3U3Shck%2FKqFOPIKpoFWGsdkudglA51Pkjy8VkmFQTaMuCOP9zEbYIx6MJ&X-Amz-Signature=83d3c807e524bf1e3c8d5523e5c06753dc3336a31e7bb642e0d1cdd1c38eed0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6ZQ4KLN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClJKl5aKNNbhjXwJXqIlCnQ6mqMCbvoLSQL3d6XLcSkgIgZQqFk6fQ4S2zwKZZrKHVpX7fSLwwnP7W%2F%2Fq%2Bbo2w89MqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDN3PoA9vv2CEvf6lyrcA5uX%2F4%2BCDFgyEVnmLh1MdXMZp6ANuqhv1BO1gVgDqha1oKv5dDxwy%2B%2Fd5L7GrhJJSXetRo9wdHFzcHlAWiTAqQv%2BsXuRCSLhg0kjgwc4Yj1je688frUX8GlnzKXKfMwft%2B%2F9PCuddidGx02nzRYOnhmspnaJ%2FumTb9Pt3wOJHg3%2FITGr6jhLm%2B%2B1VuRVyzv9ofI0W1dApd9mq61CDBV%2BJm8uVOaWNO%2FL84JKI%2BIRn%2FkQmszFBskuGFhXE%2By5qV%2Fs4pwDtk6i4Kxl%2FMjwp%2BBXYXv3mry5SUUG153Y34CrQwzjwG0U8NsD0amq6lf%2FoVwNFZyLLTSNMQ58q%2BwyFlStmS2SCEu2RZT4dtoICrrAXfKZyZIBVBTtrONqBhcEl%2Bd2lpR537wAQjfiJX%2BVcEBSozl0cT1vXm13edz0PDFcCs4NnQENeAOckNTEx4iqpqzyetd%2BkLt2vblsW0n%2BB8OqPoTp%2BvPn7AZQv%2BOFXQlVAY0%2BpaUbNCJr5OcMSQsSkSRkIMTzUT1bwuynyXm9CvYjNWT%2FwJuabTf74LX2i3zOSQWaizZoN0ckBVLjijRWDDWA2bG4HwC9P9p9y4N26%2Fa%2BLlnqkHaCt5QweXMpSZa0tyKJA7HlF5Fl4p7NIgeFML3apsQGOqUBgdjB5O90ZgHcX7q4Jm8RxKlsotcm3gTLQGHS2D8fzocF7ET2IJ2YFBWoG91nCqfUtMLCgFXw8KoUu58JUDFwxGQnKSpB%2BgTlSsjHdHj2Y2eJM1CGzG1SZTDXn1J8yWhpoLxy%2FwMdiewXB%2BeXTDE0LNDDvhs%2Byqziq8l3U3Shck%2FKqFOPIKpoFWGsdkudglA51Pkjy8VkmFQTaMuCOP9zEbYIx6MJ&X-Amz-Signature=70e087bfe4ce7aba32f68e9fcecf45b003fd1c2a2109f63d9acf7b70700151e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6ZQ4KLN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClJKl5aKNNbhjXwJXqIlCnQ6mqMCbvoLSQL3d6XLcSkgIgZQqFk6fQ4S2zwKZZrKHVpX7fSLwwnP7W%2F%2Fq%2Bbo2w89MqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDN3PoA9vv2CEvf6lyrcA5uX%2F4%2BCDFgyEVnmLh1MdXMZp6ANuqhv1BO1gVgDqha1oKv5dDxwy%2B%2Fd5L7GrhJJSXetRo9wdHFzcHlAWiTAqQv%2BsXuRCSLhg0kjgwc4Yj1je688frUX8GlnzKXKfMwft%2B%2F9PCuddidGx02nzRYOnhmspnaJ%2FumTb9Pt3wOJHg3%2FITGr6jhLm%2B%2B1VuRVyzv9ofI0W1dApd9mq61CDBV%2BJm8uVOaWNO%2FL84JKI%2BIRn%2FkQmszFBskuGFhXE%2By5qV%2Fs4pwDtk6i4Kxl%2FMjwp%2BBXYXv3mry5SUUG153Y34CrQwzjwG0U8NsD0amq6lf%2FoVwNFZyLLTSNMQ58q%2BwyFlStmS2SCEu2RZT4dtoICrrAXfKZyZIBVBTtrONqBhcEl%2Bd2lpR537wAQjfiJX%2BVcEBSozl0cT1vXm13edz0PDFcCs4NnQENeAOckNTEx4iqpqzyetd%2BkLt2vblsW0n%2BB8OqPoTp%2BvPn7AZQv%2BOFXQlVAY0%2BpaUbNCJr5OcMSQsSkSRkIMTzUT1bwuynyXm9CvYjNWT%2FwJuabTf74LX2i3zOSQWaizZoN0ckBVLjijRWDDWA2bG4HwC9P9p9y4N26%2Fa%2BLlnqkHaCt5QweXMpSZa0tyKJA7HlF5Fl4p7NIgeFML3apsQGOqUBgdjB5O90ZgHcX7q4Jm8RxKlsotcm3gTLQGHS2D8fzocF7ET2IJ2YFBWoG91nCqfUtMLCgFXw8KoUu58JUDFwxGQnKSpB%2BgTlSsjHdHj2Y2eJM1CGzG1SZTDXn1J8yWhpoLxy%2FwMdiewXB%2BeXTDE0LNDDvhs%2Byqziq8l3U3Shck%2FKqFOPIKpoFWGsdkudglA51Pkjy8VkmFQTaMuCOP9zEbYIx6MJ&X-Amz-Signature=6f870dcf669ea6dee60670e8661c2230b26c7bc582bae09b6d553bbad1628e02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6ZQ4KLN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClJKl5aKNNbhjXwJXqIlCnQ6mqMCbvoLSQL3d6XLcSkgIgZQqFk6fQ4S2zwKZZrKHVpX7fSLwwnP7W%2F%2Fq%2Bbo2w89MqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDN3PoA9vv2CEvf6lyrcA5uX%2F4%2BCDFgyEVnmLh1MdXMZp6ANuqhv1BO1gVgDqha1oKv5dDxwy%2B%2Fd5L7GrhJJSXetRo9wdHFzcHlAWiTAqQv%2BsXuRCSLhg0kjgwc4Yj1je688frUX8GlnzKXKfMwft%2B%2F9PCuddidGx02nzRYOnhmspnaJ%2FumTb9Pt3wOJHg3%2FITGr6jhLm%2B%2B1VuRVyzv9ofI0W1dApd9mq61CDBV%2BJm8uVOaWNO%2FL84JKI%2BIRn%2FkQmszFBskuGFhXE%2By5qV%2Fs4pwDtk6i4Kxl%2FMjwp%2BBXYXv3mry5SUUG153Y34CrQwzjwG0U8NsD0amq6lf%2FoVwNFZyLLTSNMQ58q%2BwyFlStmS2SCEu2RZT4dtoICrrAXfKZyZIBVBTtrONqBhcEl%2Bd2lpR537wAQjfiJX%2BVcEBSozl0cT1vXm13edz0PDFcCs4NnQENeAOckNTEx4iqpqzyetd%2BkLt2vblsW0n%2BB8OqPoTp%2BvPn7AZQv%2BOFXQlVAY0%2BpaUbNCJr5OcMSQsSkSRkIMTzUT1bwuynyXm9CvYjNWT%2FwJuabTf74LX2i3zOSQWaizZoN0ckBVLjijRWDDWA2bG4HwC9P9p9y4N26%2Fa%2BLlnqkHaCt5QweXMpSZa0tyKJA7HlF5Fl4p7NIgeFML3apsQGOqUBgdjB5O90ZgHcX7q4Jm8RxKlsotcm3gTLQGHS2D8fzocF7ET2IJ2YFBWoG91nCqfUtMLCgFXw8KoUu58JUDFwxGQnKSpB%2BgTlSsjHdHj2Y2eJM1CGzG1SZTDXn1J8yWhpoLxy%2FwMdiewXB%2BeXTDE0LNDDvhs%2Byqziq8l3U3Shck%2FKqFOPIKpoFWGsdkudglA51Pkjy8VkmFQTaMuCOP9zEbYIx6MJ&X-Amz-Signature=f829377123004efa596024dfab7fd9a8d9105835ff0f0df14abf38a6209bdfe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6ZQ4KLN%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClJKl5aKNNbhjXwJXqIlCnQ6mqMCbvoLSQL3d6XLcSkgIgZQqFk6fQ4S2zwKZZrKHVpX7fSLwwnP7W%2F%2Fq%2Bbo2w89MqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDN3PoA9vv2CEvf6lyrcA5uX%2F4%2BCDFgyEVnmLh1MdXMZp6ANuqhv1BO1gVgDqha1oKv5dDxwy%2B%2Fd5L7GrhJJSXetRo9wdHFzcHlAWiTAqQv%2BsXuRCSLhg0kjgwc4Yj1je688frUX8GlnzKXKfMwft%2B%2F9PCuddidGx02nzRYOnhmspnaJ%2FumTb9Pt3wOJHg3%2FITGr6jhLm%2B%2B1VuRVyzv9ofI0W1dApd9mq61CDBV%2BJm8uVOaWNO%2FL84JKI%2BIRn%2FkQmszFBskuGFhXE%2By5qV%2Fs4pwDtk6i4Kxl%2FMjwp%2BBXYXv3mry5SUUG153Y34CrQwzjwG0U8NsD0amq6lf%2FoVwNFZyLLTSNMQ58q%2BwyFlStmS2SCEu2RZT4dtoICrrAXfKZyZIBVBTtrONqBhcEl%2Bd2lpR537wAQjfiJX%2BVcEBSozl0cT1vXm13edz0PDFcCs4NnQENeAOckNTEx4iqpqzyetd%2BkLt2vblsW0n%2BB8OqPoTp%2BvPn7AZQv%2BOFXQlVAY0%2BpaUbNCJr5OcMSQsSkSRkIMTzUT1bwuynyXm9CvYjNWT%2FwJuabTf74LX2i3zOSQWaizZoN0ckBVLjijRWDDWA2bG4HwC9P9p9y4N26%2Fa%2BLlnqkHaCt5QweXMpSZa0tyKJA7HlF5Fl4p7NIgeFML3apsQGOqUBgdjB5O90ZgHcX7q4Jm8RxKlsotcm3gTLQGHS2D8fzocF7ET2IJ2YFBWoG91nCqfUtMLCgFXw8KoUu58JUDFwxGQnKSpB%2BgTlSsjHdHj2Y2eJM1CGzG1SZTDXn1J8yWhpoLxy%2FwMdiewXB%2BeXTDE0LNDDvhs%2Byqziq8l3U3Shck%2FKqFOPIKpoFWGsdkudglA51Pkjy8VkmFQTaMuCOP9zEbYIx6MJ&X-Amz-Signature=980a39d82b010bafd133fef8ffa5cd6cf0b27fd293c8dbda0b17b39eb4fba2f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
