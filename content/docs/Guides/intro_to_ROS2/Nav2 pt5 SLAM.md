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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWQBHOZ5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6pWY2Jk%2B04mjEZ3OKR3WsXOBujBGNw4hDI8tRmIchQgIhAM789tG1xKj6miP4LMzMW0LPRnTyYO68%2FZSH%2BGl%2BZNNiKv8DCB4QABoMNjM3NDIzMTgzODA1IgzH2d%2FB3M2VFc7F0YQq3AO80KhlptTjeVtuUibFlQGlIirsaQhXg%2BBPkilCvluWH%2FSg0NBvthyZ%2BPFdd5wTGoFRdNJUB%2BqdU3UmBhhKBYbxiXt5pxDFNUw8dM%2Be%2FWBcBf3YB360CYPLPjkDUjG0jLfT0yTMQ0BooVprTly58m8%2FZChyJlICqQh1tUdWdBqEbVK4AlAktd8120kHr7M25Oj8yzvQIvD0Yl9frIduJFRdiQWMXEolFMZu%2BgP8yzTkrpucG6TsYoDOGlZZGnl83f3RGj%2FGaqS3afvobXSmGtw8SzFJX1SjfCHdBiblpkBxZMuz0oOlF7Ajs5u8q856AmBUwesilajMukQ9TpB1OMOiPD9xjDMOfynysWWqPHacdXUbtIU7WWpU2noYVAaZst3JrN3UFCNFSQ1%2FHbTPGm%2BfcDl3rZkEcPpue%2BrnEOwIbXzGS2uHwDZ4eCj%2FdrbHhGCcHZhk7LwWsI8jh8GxynzaUfpPJ6Ght97wHYSIBEZYr%2FzBQlvraL6uIdZE0UzS6dgbQiIdQgOKUhCfy4FV5UHykZ9S2Vh0Wuh5CpgDt7KnfK2Ku8ar5OVVlk5AIlV1i9ud4yCGAoRYgdXIS6uGUF%2BvUKRdaEi506sLS6252wA1DZwHN9Z2RHbub3q89DDogLrEBjqkAceHb0NrDmMnoDYM4bSyXrZ4Gve05DhDEBZEccbnXqUg%2FnVdobNv4Mv1wI%2Fn4nmkZEZGYysUUXPLZZtysgh44ifyLbIDDTVf%2Fu886nHvNHYyaHxf9BoFiRwpNtpXh5UvTDqr5ItvXapsvZqHIS8WKqFL3IxDCw209kGu1aKd%2BMFFDTlfhgn%2Bfp5meFeXWnRtE5qIow%2BXbF331BMyBonouDdZ4d1o&X-Amz-Signature=72b1b68c2310ab0e092561f7f82e49b3f8f9599db0bbb2c1b901350f4a4fa373&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWQBHOZ5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6pWY2Jk%2B04mjEZ3OKR3WsXOBujBGNw4hDI8tRmIchQgIhAM789tG1xKj6miP4LMzMW0LPRnTyYO68%2FZSH%2BGl%2BZNNiKv8DCB4QABoMNjM3NDIzMTgzODA1IgzH2d%2FB3M2VFc7F0YQq3AO80KhlptTjeVtuUibFlQGlIirsaQhXg%2BBPkilCvluWH%2FSg0NBvthyZ%2BPFdd5wTGoFRdNJUB%2BqdU3UmBhhKBYbxiXt5pxDFNUw8dM%2Be%2FWBcBf3YB360CYPLPjkDUjG0jLfT0yTMQ0BooVprTly58m8%2FZChyJlICqQh1tUdWdBqEbVK4AlAktd8120kHr7M25Oj8yzvQIvD0Yl9frIduJFRdiQWMXEolFMZu%2BgP8yzTkrpucG6TsYoDOGlZZGnl83f3RGj%2FGaqS3afvobXSmGtw8SzFJX1SjfCHdBiblpkBxZMuz0oOlF7Ajs5u8q856AmBUwesilajMukQ9TpB1OMOiPD9xjDMOfynysWWqPHacdXUbtIU7WWpU2noYVAaZst3JrN3UFCNFSQ1%2FHbTPGm%2BfcDl3rZkEcPpue%2BrnEOwIbXzGS2uHwDZ4eCj%2FdrbHhGCcHZhk7LwWsI8jh8GxynzaUfpPJ6Ght97wHYSIBEZYr%2FzBQlvraL6uIdZE0UzS6dgbQiIdQgOKUhCfy4FV5UHykZ9S2Vh0Wuh5CpgDt7KnfK2Ku8ar5OVVlk5AIlV1i9ud4yCGAoRYgdXIS6uGUF%2BvUKRdaEi506sLS6252wA1DZwHN9Z2RHbub3q89DDogLrEBjqkAceHb0NrDmMnoDYM4bSyXrZ4Gve05DhDEBZEccbnXqUg%2FnVdobNv4Mv1wI%2Fn4nmkZEZGYysUUXPLZZtysgh44ifyLbIDDTVf%2Fu886nHvNHYyaHxf9BoFiRwpNtpXh5UvTDqr5ItvXapsvZqHIS8WKqFL3IxDCw209kGu1aKd%2BMFFDTlfhgn%2Bfp5meFeXWnRtE5qIow%2BXbF331BMyBonouDdZ4d1o&X-Amz-Signature=1e152ad1e94a8df476d37f5a598b745a0d96ab40beed9eb5b217c129f19899bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWQBHOZ5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6pWY2Jk%2B04mjEZ3OKR3WsXOBujBGNw4hDI8tRmIchQgIhAM789tG1xKj6miP4LMzMW0LPRnTyYO68%2FZSH%2BGl%2BZNNiKv8DCB4QABoMNjM3NDIzMTgzODA1IgzH2d%2FB3M2VFc7F0YQq3AO80KhlptTjeVtuUibFlQGlIirsaQhXg%2BBPkilCvluWH%2FSg0NBvthyZ%2BPFdd5wTGoFRdNJUB%2BqdU3UmBhhKBYbxiXt5pxDFNUw8dM%2Be%2FWBcBf3YB360CYPLPjkDUjG0jLfT0yTMQ0BooVprTly58m8%2FZChyJlICqQh1tUdWdBqEbVK4AlAktd8120kHr7M25Oj8yzvQIvD0Yl9frIduJFRdiQWMXEolFMZu%2BgP8yzTkrpucG6TsYoDOGlZZGnl83f3RGj%2FGaqS3afvobXSmGtw8SzFJX1SjfCHdBiblpkBxZMuz0oOlF7Ajs5u8q856AmBUwesilajMukQ9TpB1OMOiPD9xjDMOfynysWWqPHacdXUbtIU7WWpU2noYVAaZst3JrN3UFCNFSQ1%2FHbTPGm%2BfcDl3rZkEcPpue%2BrnEOwIbXzGS2uHwDZ4eCj%2FdrbHhGCcHZhk7LwWsI8jh8GxynzaUfpPJ6Ght97wHYSIBEZYr%2FzBQlvraL6uIdZE0UzS6dgbQiIdQgOKUhCfy4FV5UHykZ9S2Vh0Wuh5CpgDt7KnfK2Ku8ar5OVVlk5AIlV1i9ud4yCGAoRYgdXIS6uGUF%2BvUKRdaEi506sLS6252wA1DZwHN9Z2RHbub3q89DDogLrEBjqkAceHb0NrDmMnoDYM4bSyXrZ4Gve05DhDEBZEccbnXqUg%2FnVdobNv4Mv1wI%2Fn4nmkZEZGYysUUXPLZZtysgh44ifyLbIDDTVf%2Fu886nHvNHYyaHxf9BoFiRwpNtpXh5UvTDqr5ItvXapsvZqHIS8WKqFL3IxDCw209kGu1aKd%2BMFFDTlfhgn%2Bfp5meFeXWnRtE5qIow%2BXbF331BMyBonouDdZ4d1o&X-Amz-Signature=ee1553d9758483de8d369dc5a6fc645be5ff1751765d59b01062e1fd9c7354b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWQBHOZ5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6pWY2Jk%2B04mjEZ3OKR3WsXOBujBGNw4hDI8tRmIchQgIhAM789tG1xKj6miP4LMzMW0LPRnTyYO68%2FZSH%2BGl%2BZNNiKv8DCB4QABoMNjM3NDIzMTgzODA1IgzH2d%2FB3M2VFc7F0YQq3AO80KhlptTjeVtuUibFlQGlIirsaQhXg%2BBPkilCvluWH%2FSg0NBvthyZ%2BPFdd5wTGoFRdNJUB%2BqdU3UmBhhKBYbxiXt5pxDFNUw8dM%2Be%2FWBcBf3YB360CYPLPjkDUjG0jLfT0yTMQ0BooVprTly58m8%2FZChyJlICqQh1tUdWdBqEbVK4AlAktd8120kHr7M25Oj8yzvQIvD0Yl9frIduJFRdiQWMXEolFMZu%2BgP8yzTkrpucG6TsYoDOGlZZGnl83f3RGj%2FGaqS3afvobXSmGtw8SzFJX1SjfCHdBiblpkBxZMuz0oOlF7Ajs5u8q856AmBUwesilajMukQ9TpB1OMOiPD9xjDMOfynysWWqPHacdXUbtIU7WWpU2noYVAaZst3JrN3UFCNFSQ1%2FHbTPGm%2BfcDl3rZkEcPpue%2BrnEOwIbXzGS2uHwDZ4eCj%2FdrbHhGCcHZhk7LwWsI8jh8GxynzaUfpPJ6Ght97wHYSIBEZYr%2FzBQlvraL6uIdZE0UzS6dgbQiIdQgOKUhCfy4FV5UHykZ9S2Vh0Wuh5CpgDt7KnfK2Ku8ar5OVVlk5AIlV1i9ud4yCGAoRYgdXIS6uGUF%2BvUKRdaEi506sLS6252wA1DZwHN9Z2RHbub3q89DDogLrEBjqkAceHb0NrDmMnoDYM4bSyXrZ4Gve05DhDEBZEccbnXqUg%2FnVdobNv4Mv1wI%2Fn4nmkZEZGYysUUXPLZZtysgh44ifyLbIDDTVf%2Fu886nHvNHYyaHxf9BoFiRwpNtpXh5UvTDqr5ItvXapsvZqHIS8WKqFL3IxDCw209kGu1aKd%2BMFFDTlfhgn%2Bfp5meFeXWnRtE5qIow%2BXbF331BMyBonouDdZ4d1o&X-Amz-Signature=27dd1ddcbb530e42aceb2f4823f1639faa62697f5423b90b9e0ab80e0d1cb54a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWQBHOZ5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6pWY2Jk%2B04mjEZ3OKR3WsXOBujBGNw4hDI8tRmIchQgIhAM789tG1xKj6miP4LMzMW0LPRnTyYO68%2FZSH%2BGl%2BZNNiKv8DCB4QABoMNjM3NDIzMTgzODA1IgzH2d%2FB3M2VFc7F0YQq3AO80KhlptTjeVtuUibFlQGlIirsaQhXg%2BBPkilCvluWH%2FSg0NBvthyZ%2BPFdd5wTGoFRdNJUB%2BqdU3UmBhhKBYbxiXt5pxDFNUw8dM%2Be%2FWBcBf3YB360CYPLPjkDUjG0jLfT0yTMQ0BooVprTly58m8%2FZChyJlICqQh1tUdWdBqEbVK4AlAktd8120kHr7M25Oj8yzvQIvD0Yl9frIduJFRdiQWMXEolFMZu%2BgP8yzTkrpucG6TsYoDOGlZZGnl83f3RGj%2FGaqS3afvobXSmGtw8SzFJX1SjfCHdBiblpkBxZMuz0oOlF7Ajs5u8q856AmBUwesilajMukQ9TpB1OMOiPD9xjDMOfynysWWqPHacdXUbtIU7WWpU2noYVAaZst3JrN3UFCNFSQ1%2FHbTPGm%2BfcDl3rZkEcPpue%2BrnEOwIbXzGS2uHwDZ4eCj%2FdrbHhGCcHZhk7LwWsI8jh8GxynzaUfpPJ6Ght97wHYSIBEZYr%2FzBQlvraL6uIdZE0UzS6dgbQiIdQgOKUhCfy4FV5UHykZ9S2Vh0Wuh5CpgDt7KnfK2Ku8ar5OVVlk5AIlV1i9ud4yCGAoRYgdXIS6uGUF%2BvUKRdaEi506sLS6252wA1DZwHN9Z2RHbub3q89DDogLrEBjqkAceHb0NrDmMnoDYM4bSyXrZ4Gve05DhDEBZEccbnXqUg%2FnVdobNv4Mv1wI%2Fn4nmkZEZGYysUUXPLZZtysgh44ifyLbIDDTVf%2Fu886nHvNHYyaHxf9BoFiRwpNtpXh5UvTDqr5ItvXapsvZqHIS8WKqFL3IxDCw209kGu1aKd%2BMFFDTlfhgn%2Bfp5meFeXWnRtE5qIow%2BXbF331BMyBonouDdZ4d1o&X-Amz-Signature=034b42a1d4e1608c3fbc7e7d70a6ec68f8bde3ee3a12bac73e2145ffe6433f38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWQBHOZ5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6pWY2Jk%2B04mjEZ3OKR3WsXOBujBGNw4hDI8tRmIchQgIhAM789tG1xKj6miP4LMzMW0LPRnTyYO68%2FZSH%2BGl%2BZNNiKv8DCB4QABoMNjM3NDIzMTgzODA1IgzH2d%2FB3M2VFc7F0YQq3AO80KhlptTjeVtuUibFlQGlIirsaQhXg%2BBPkilCvluWH%2FSg0NBvthyZ%2BPFdd5wTGoFRdNJUB%2BqdU3UmBhhKBYbxiXt5pxDFNUw8dM%2Be%2FWBcBf3YB360CYPLPjkDUjG0jLfT0yTMQ0BooVprTly58m8%2FZChyJlICqQh1tUdWdBqEbVK4AlAktd8120kHr7M25Oj8yzvQIvD0Yl9frIduJFRdiQWMXEolFMZu%2BgP8yzTkrpucG6TsYoDOGlZZGnl83f3RGj%2FGaqS3afvobXSmGtw8SzFJX1SjfCHdBiblpkBxZMuz0oOlF7Ajs5u8q856AmBUwesilajMukQ9TpB1OMOiPD9xjDMOfynysWWqPHacdXUbtIU7WWpU2noYVAaZst3JrN3UFCNFSQ1%2FHbTPGm%2BfcDl3rZkEcPpue%2BrnEOwIbXzGS2uHwDZ4eCj%2FdrbHhGCcHZhk7LwWsI8jh8GxynzaUfpPJ6Ght97wHYSIBEZYr%2FzBQlvraL6uIdZE0UzS6dgbQiIdQgOKUhCfy4FV5UHykZ9S2Vh0Wuh5CpgDt7KnfK2Ku8ar5OVVlk5AIlV1i9ud4yCGAoRYgdXIS6uGUF%2BvUKRdaEi506sLS6252wA1DZwHN9Z2RHbub3q89DDogLrEBjqkAceHb0NrDmMnoDYM4bSyXrZ4Gve05DhDEBZEccbnXqUg%2FnVdobNv4Mv1wI%2Fn4nmkZEZGYysUUXPLZZtysgh44ifyLbIDDTVf%2Fu886nHvNHYyaHxf9BoFiRwpNtpXh5UvTDqr5ItvXapsvZqHIS8WKqFL3IxDCw209kGu1aKd%2BMFFDTlfhgn%2Bfp5meFeXWnRtE5qIow%2BXbF331BMyBonouDdZ4d1o&X-Amz-Signature=88ca3df036e82d506467d4f764eda37215d61c2334ec055122a83330b6e810fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWQBHOZ5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6pWY2Jk%2B04mjEZ3OKR3WsXOBujBGNw4hDI8tRmIchQgIhAM789tG1xKj6miP4LMzMW0LPRnTyYO68%2FZSH%2BGl%2BZNNiKv8DCB4QABoMNjM3NDIzMTgzODA1IgzH2d%2FB3M2VFc7F0YQq3AO80KhlptTjeVtuUibFlQGlIirsaQhXg%2BBPkilCvluWH%2FSg0NBvthyZ%2BPFdd5wTGoFRdNJUB%2BqdU3UmBhhKBYbxiXt5pxDFNUw8dM%2Be%2FWBcBf3YB360CYPLPjkDUjG0jLfT0yTMQ0BooVprTly58m8%2FZChyJlICqQh1tUdWdBqEbVK4AlAktd8120kHr7M25Oj8yzvQIvD0Yl9frIduJFRdiQWMXEolFMZu%2BgP8yzTkrpucG6TsYoDOGlZZGnl83f3RGj%2FGaqS3afvobXSmGtw8SzFJX1SjfCHdBiblpkBxZMuz0oOlF7Ajs5u8q856AmBUwesilajMukQ9TpB1OMOiPD9xjDMOfynysWWqPHacdXUbtIU7WWpU2noYVAaZst3JrN3UFCNFSQ1%2FHbTPGm%2BfcDl3rZkEcPpue%2BrnEOwIbXzGS2uHwDZ4eCj%2FdrbHhGCcHZhk7LwWsI8jh8GxynzaUfpPJ6Ght97wHYSIBEZYr%2FzBQlvraL6uIdZE0UzS6dgbQiIdQgOKUhCfy4FV5UHykZ9S2Vh0Wuh5CpgDt7KnfK2Ku8ar5OVVlk5AIlV1i9ud4yCGAoRYgdXIS6uGUF%2BvUKRdaEi506sLS6252wA1DZwHN9Z2RHbub3q89DDogLrEBjqkAceHb0NrDmMnoDYM4bSyXrZ4Gve05DhDEBZEccbnXqUg%2FnVdobNv4Mv1wI%2Fn4nmkZEZGYysUUXPLZZtysgh44ifyLbIDDTVf%2Fu886nHvNHYyaHxf9BoFiRwpNtpXh5UvTDqr5ItvXapsvZqHIS8WKqFL3IxDCw209kGu1aKd%2BMFFDTlfhgn%2Bfp5meFeXWnRtE5qIow%2BXbF331BMyBonouDdZ4d1o&X-Amz-Signature=f0bd51f7a22526be08fa4f25d29b5504b74cd5f11087dbb5f127cb86a076ba7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWQBHOZ5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6pWY2Jk%2B04mjEZ3OKR3WsXOBujBGNw4hDI8tRmIchQgIhAM789tG1xKj6miP4LMzMW0LPRnTyYO68%2FZSH%2BGl%2BZNNiKv8DCB4QABoMNjM3NDIzMTgzODA1IgzH2d%2FB3M2VFc7F0YQq3AO80KhlptTjeVtuUibFlQGlIirsaQhXg%2BBPkilCvluWH%2FSg0NBvthyZ%2BPFdd5wTGoFRdNJUB%2BqdU3UmBhhKBYbxiXt5pxDFNUw8dM%2Be%2FWBcBf3YB360CYPLPjkDUjG0jLfT0yTMQ0BooVprTly58m8%2FZChyJlICqQh1tUdWdBqEbVK4AlAktd8120kHr7M25Oj8yzvQIvD0Yl9frIduJFRdiQWMXEolFMZu%2BgP8yzTkrpucG6TsYoDOGlZZGnl83f3RGj%2FGaqS3afvobXSmGtw8SzFJX1SjfCHdBiblpkBxZMuz0oOlF7Ajs5u8q856AmBUwesilajMukQ9TpB1OMOiPD9xjDMOfynysWWqPHacdXUbtIU7WWpU2noYVAaZst3JrN3UFCNFSQ1%2FHbTPGm%2BfcDl3rZkEcPpue%2BrnEOwIbXzGS2uHwDZ4eCj%2FdrbHhGCcHZhk7LwWsI8jh8GxynzaUfpPJ6Ght97wHYSIBEZYr%2FzBQlvraL6uIdZE0UzS6dgbQiIdQgOKUhCfy4FV5UHykZ9S2Vh0Wuh5CpgDt7KnfK2Ku8ar5OVVlk5AIlV1i9ud4yCGAoRYgdXIS6uGUF%2BvUKRdaEi506sLS6252wA1DZwHN9Z2RHbub3q89DDogLrEBjqkAceHb0NrDmMnoDYM4bSyXrZ4Gve05DhDEBZEccbnXqUg%2FnVdobNv4Mv1wI%2Fn4nmkZEZGYysUUXPLZZtysgh44ifyLbIDDTVf%2Fu886nHvNHYyaHxf9BoFiRwpNtpXh5UvTDqr5ItvXapsvZqHIS8WKqFL3IxDCw209kGu1aKd%2BMFFDTlfhgn%2Bfp5meFeXWnRtE5qIow%2BXbF331BMyBonouDdZ4d1o&X-Amz-Signature=6d84f1ebddaa9aa68e1c019d9344b3023914005d42380933ac56c06037d8f1fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWQBHOZ5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6pWY2Jk%2B04mjEZ3OKR3WsXOBujBGNw4hDI8tRmIchQgIhAM789tG1xKj6miP4LMzMW0LPRnTyYO68%2FZSH%2BGl%2BZNNiKv8DCB4QABoMNjM3NDIzMTgzODA1IgzH2d%2FB3M2VFc7F0YQq3AO80KhlptTjeVtuUibFlQGlIirsaQhXg%2BBPkilCvluWH%2FSg0NBvthyZ%2BPFdd5wTGoFRdNJUB%2BqdU3UmBhhKBYbxiXt5pxDFNUw8dM%2Be%2FWBcBf3YB360CYPLPjkDUjG0jLfT0yTMQ0BooVprTly58m8%2FZChyJlICqQh1tUdWdBqEbVK4AlAktd8120kHr7M25Oj8yzvQIvD0Yl9frIduJFRdiQWMXEolFMZu%2BgP8yzTkrpucG6TsYoDOGlZZGnl83f3RGj%2FGaqS3afvobXSmGtw8SzFJX1SjfCHdBiblpkBxZMuz0oOlF7Ajs5u8q856AmBUwesilajMukQ9TpB1OMOiPD9xjDMOfynysWWqPHacdXUbtIU7WWpU2noYVAaZst3JrN3UFCNFSQ1%2FHbTPGm%2BfcDl3rZkEcPpue%2BrnEOwIbXzGS2uHwDZ4eCj%2FdrbHhGCcHZhk7LwWsI8jh8GxynzaUfpPJ6Ght97wHYSIBEZYr%2FzBQlvraL6uIdZE0UzS6dgbQiIdQgOKUhCfy4FV5UHykZ9S2Vh0Wuh5CpgDt7KnfK2Ku8ar5OVVlk5AIlV1i9ud4yCGAoRYgdXIS6uGUF%2BvUKRdaEi506sLS6252wA1DZwHN9Z2RHbub3q89DDogLrEBjqkAceHb0NrDmMnoDYM4bSyXrZ4Gve05DhDEBZEccbnXqUg%2FnVdobNv4Mv1wI%2Fn4nmkZEZGYysUUXPLZZtysgh44ifyLbIDDTVf%2Fu886nHvNHYyaHxf9BoFiRwpNtpXh5UvTDqr5ItvXapsvZqHIS8WKqFL3IxDCw209kGu1aKd%2BMFFDTlfhgn%2Bfp5meFeXWnRtE5qIow%2BXbF331BMyBonouDdZ4d1o&X-Amz-Signature=41b8c229b13448ba157f5d92a04f45f26d70f648800c3992efc382c1bd49366a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWQBHOZ5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6pWY2Jk%2B04mjEZ3OKR3WsXOBujBGNw4hDI8tRmIchQgIhAM789tG1xKj6miP4LMzMW0LPRnTyYO68%2FZSH%2BGl%2BZNNiKv8DCB4QABoMNjM3NDIzMTgzODA1IgzH2d%2FB3M2VFc7F0YQq3AO80KhlptTjeVtuUibFlQGlIirsaQhXg%2BBPkilCvluWH%2FSg0NBvthyZ%2BPFdd5wTGoFRdNJUB%2BqdU3UmBhhKBYbxiXt5pxDFNUw8dM%2Be%2FWBcBf3YB360CYPLPjkDUjG0jLfT0yTMQ0BooVprTly58m8%2FZChyJlICqQh1tUdWdBqEbVK4AlAktd8120kHr7M25Oj8yzvQIvD0Yl9frIduJFRdiQWMXEolFMZu%2BgP8yzTkrpucG6TsYoDOGlZZGnl83f3RGj%2FGaqS3afvobXSmGtw8SzFJX1SjfCHdBiblpkBxZMuz0oOlF7Ajs5u8q856AmBUwesilajMukQ9TpB1OMOiPD9xjDMOfynysWWqPHacdXUbtIU7WWpU2noYVAaZst3JrN3UFCNFSQ1%2FHbTPGm%2BfcDl3rZkEcPpue%2BrnEOwIbXzGS2uHwDZ4eCj%2FdrbHhGCcHZhk7LwWsI8jh8GxynzaUfpPJ6Ght97wHYSIBEZYr%2FzBQlvraL6uIdZE0UzS6dgbQiIdQgOKUhCfy4FV5UHykZ9S2Vh0Wuh5CpgDt7KnfK2Ku8ar5OVVlk5AIlV1i9ud4yCGAoRYgdXIS6uGUF%2BvUKRdaEi506sLS6252wA1DZwHN9Z2RHbub3q89DDogLrEBjqkAceHb0NrDmMnoDYM4bSyXrZ4Gve05DhDEBZEccbnXqUg%2FnVdobNv4Mv1wI%2Fn4nmkZEZGYysUUXPLZZtysgh44ifyLbIDDTVf%2Fu886nHvNHYyaHxf9BoFiRwpNtpXh5UvTDqr5ItvXapsvZqHIS8WKqFL3IxDCw209kGu1aKd%2BMFFDTlfhgn%2Bfp5meFeXWnRtE5qIow%2BXbF331BMyBonouDdZ4d1o&X-Amz-Signature=7a543ccc830128267dc8f3e3f0bcc27bdfe1445e20dac582f751ac515e5d6c98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWQBHOZ5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6pWY2Jk%2B04mjEZ3OKR3WsXOBujBGNw4hDI8tRmIchQgIhAM789tG1xKj6miP4LMzMW0LPRnTyYO68%2FZSH%2BGl%2BZNNiKv8DCB4QABoMNjM3NDIzMTgzODA1IgzH2d%2FB3M2VFc7F0YQq3AO80KhlptTjeVtuUibFlQGlIirsaQhXg%2BBPkilCvluWH%2FSg0NBvthyZ%2BPFdd5wTGoFRdNJUB%2BqdU3UmBhhKBYbxiXt5pxDFNUw8dM%2Be%2FWBcBf3YB360CYPLPjkDUjG0jLfT0yTMQ0BooVprTly58m8%2FZChyJlICqQh1tUdWdBqEbVK4AlAktd8120kHr7M25Oj8yzvQIvD0Yl9frIduJFRdiQWMXEolFMZu%2BgP8yzTkrpucG6TsYoDOGlZZGnl83f3RGj%2FGaqS3afvobXSmGtw8SzFJX1SjfCHdBiblpkBxZMuz0oOlF7Ajs5u8q856AmBUwesilajMukQ9TpB1OMOiPD9xjDMOfynysWWqPHacdXUbtIU7WWpU2noYVAaZst3JrN3UFCNFSQ1%2FHbTPGm%2BfcDl3rZkEcPpue%2BrnEOwIbXzGS2uHwDZ4eCj%2FdrbHhGCcHZhk7LwWsI8jh8GxynzaUfpPJ6Ght97wHYSIBEZYr%2FzBQlvraL6uIdZE0UzS6dgbQiIdQgOKUhCfy4FV5UHykZ9S2Vh0Wuh5CpgDt7KnfK2Ku8ar5OVVlk5AIlV1i9ud4yCGAoRYgdXIS6uGUF%2BvUKRdaEi506sLS6252wA1DZwHN9Z2RHbub3q89DDogLrEBjqkAceHb0NrDmMnoDYM4bSyXrZ4Gve05DhDEBZEccbnXqUg%2FnVdobNv4Mv1wI%2Fn4nmkZEZGYysUUXPLZZtysgh44ifyLbIDDTVf%2Fu886nHvNHYyaHxf9BoFiRwpNtpXh5UvTDqr5ItvXapsvZqHIS8WKqFL3IxDCw209kGu1aKd%2BMFFDTlfhgn%2Bfp5meFeXWnRtE5qIow%2BXbF331BMyBonouDdZ4d1o&X-Amz-Signature=b3c0d896a6fbead1e46dc28117f4fc8e4244fc487c603a92ddd6dec64420bdd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWQBHOZ5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6pWY2Jk%2B04mjEZ3OKR3WsXOBujBGNw4hDI8tRmIchQgIhAM789tG1xKj6miP4LMzMW0LPRnTyYO68%2FZSH%2BGl%2BZNNiKv8DCB4QABoMNjM3NDIzMTgzODA1IgzH2d%2FB3M2VFc7F0YQq3AO80KhlptTjeVtuUibFlQGlIirsaQhXg%2BBPkilCvluWH%2FSg0NBvthyZ%2BPFdd5wTGoFRdNJUB%2BqdU3UmBhhKBYbxiXt5pxDFNUw8dM%2Be%2FWBcBf3YB360CYPLPjkDUjG0jLfT0yTMQ0BooVprTly58m8%2FZChyJlICqQh1tUdWdBqEbVK4AlAktd8120kHr7M25Oj8yzvQIvD0Yl9frIduJFRdiQWMXEolFMZu%2BgP8yzTkrpucG6TsYoDOGlZZGnl83f3RGj%2FGaqS3afvobXSmGtw8SzFJX1SjfCHdBiblpkBxZMuz0oOlF7Ajs5u8q856AmBUwesilajMukQ9TpB1OMOiPD9xjDMOfynysWWqPHacdXUbtIU7WWpU2noYVAaZst3JrN3UFCNFSQ1%2FHbTPGm%2BfcDl3rZkEcPpue%2BrnEOwIbXzGS2uHwDZ4eCj%2FdrbHhGCcHZhk7LwWsI8jh8GxynzaUfpPJ6Ght97wHYSIBEZYr%2FzBQlvraL6uIdZE0UzS6dgbQiIdQgOKUhCfy4FV5UHykZ9S2Vh0Wuh5CpgDt7KnfK2Ku8ar5OVVlk5AIlV1i9ud4yCGAoRYgdXIS6uGUF%2BvUKRdaEi506sLS6252wA1DZwHN9Z2RHbub3q89DDogLrEBjqkAceHb0NrDmMnoDYM4bSyXrZ4Gve05DhDEBZEccbnXqUg%2FnVdobNv4Mv1wI%2Fn4nmkZEZGYysUUXPLZZtysgh44ifyLbIDDTVf%2Fu886nHvNHYyaHxf9BoFiRwpNtpXh5UvTDqr5ItvXapsvZqHIS8WKqFL3IxDCw209kGu1aKd%2BMFFDTlfhgn%2Bfp5meFeXWnRtE5qIow%2BXbF331BMyBonouDdZ4d1o&X-Amz-Signature=d883db0fbf0609eec12d3ab2aac8055ff34c0e56545bf9fd558abf67a79b5352&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWQBHOZ5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6pWY2Jk%2B04mjEZ3OKR3WsXOBujBGNw4hDI8tRmIchQgIhAM789tG1xKj6miP4LMzMW0LPRnTyYO68%2FZSH%2BGl%2BZNNiKv8DCB4QABoMNjM3NDIzMTgzODA1IgzH2d%2FB3M2VFc7F0YQq3AO80KhlptTjeVtuUibFlQGlIirsaQhXg%2BBPkilCvluWH%2FSg0NBvthyZ%2BPFdd5wTGoFRdNJUB%2BqdU3UmBhhKBYbxiXt5pxDFNUw8dM%2Be%2FWBcBf3YB360CYPLPjkDUjG0jLfT0yTMQ0BooVprTly58m8%2FZChyJlICqQh1tUdWdBqEbVK4AlAktd8120kHr7M25Oj8yzvQIvD0Yl9frIduJFRdiQWMXEolFMZu%2BgP8yzTkrpucG6TsYoDOGlZZGnl83f3RGj%2FGaqS3afvobXSmGtw8SzFJX1SjfCHdBiblpkBxZMuz0oOlF7Ajs5u8q856AmBUwesilajMukQ9TpB1OMOiPD9xjDMOfynysWWqPHacdXUbtIU7WWpU2noYVAaZst3JrN3UFCNFSQ1%2FHbTPGm%2BfcDl3rZkEcPpue%2BrnEOwIbXzGS2uHwDZ4eCj%2FdrbHhGCcHZhk7LwWsI8jh8GxynzaUfpPJ6Ght97wHYSIBEZYr%2FzBQlvraL6uIdZE0UzS6dgbQiIdQgOKUhCfy4FV5UHykZ9S2Vh0Wuh5CpgDt7KnfK2Ku8ar5OVVlk5AIlV1i9ud4yCGAoRYgdXIS6uGUF%2BvUKRdaEi506sLS6252wA1DZwHN9Z2RHbub3q89DDogLrEBjqkAceHb0NrDmMnoDYM4bSyXrZ4Gve05DhDEBZEccbnXqUg%2FnVdobNv4Mv1wI%2Fn4nmkZEZGYysUUXPLZZtysgh44ifyLbIDDTVf%2Fu886nHvNHYyaHxf9BoFiRwpNtpXh5UvTDqr5ItvXapsvZqHIS8WKqFL3IxDCw209kGu1aKd%2BMFFDTlfhgn%2Bfp5meFeXWnRtE5qIow%2BXbF331BMyBonouDdZ4d1o&X-Amz-Signature=b71685fd2e997a59b9d2c0014c036b27b5fdf66ee28c948c8ec32c704ce176a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWQBHOZ5%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T030354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6pWY2Jk%2B04mjEZ3OKR3WsXOBujBGNw4hDI8tRmIchQgIhAM789tG1xKj6miP4LMzMW0LPRnTyYO68%2FZSH%2BGl%2BZNNiKv8DCB4QABoMNjM3NDIzMTgzODA1IgzH2d%2FB3M2VFc7F0YQq3AO80KhlptTjeVtuUibFlQGlIirsaQhXg%2BBPkilCvluWH%2FSg0NBvthyZ%2BPFdd5wTGoFRdNJUB%2BqdU3UmBhhKBYbxiXt5pxDFNUw8dM%2Be%2FWBcBf3YB360CYPLPjkDUjG0jLfT0yTMQ0BooVprTly58m8%2FZChyJlICqQh1tUdWdBqEbVK4AlAktd8120kHr7M25Oj8yzvQIvD0Yl9frIduJFRdiQWMXEolFMZu%2BgP8yzTkrpucG6TsYoDOGlZZGnl83f3RGj%2FGaqS3afvobXSmGtw8SzFJX1SjfCHdBiblpkBxZMuz0oOlF7Ajs5u8q856AmBUwesilajMukQ9TpB1OMOiPD9xjDMOfynysWWqPHacdXUbtIU7WWpU2noYVAaZst3JrN3UFCNFSQ1%2FHbTPGm%2BfcDl3rZkEcPpue%2BrnEOwIbXzGS2uHwDZ4eCj%2FdrbHhGCcHZhk7LwWsI8jh8GxynzaUfpPJ6Ght97wHYSIBEZYr%2FzBQlvraL6uIdZE0UzS6dgbQiIdQgOKUhCfy4FV5UHykZ9S2Vh0Wuh5CpgDt7KnfK2Ku8ar5OVVlk5AIlV1i9ud4yCGAoRYgdXIS6uGUF%2BvUKRdaEi506sLS6252wA1DZwHN9Z2RHbub3q89DDogLrEBjqkAceHb0NrDmMnoDYM4bSyXrZ4Gve05DhDEBZEccbnXqUg%2FnVdobNv4Mv1wI%2Fn4nmkZEZGYysUUXPLZZtysgh44ifyLbIDDTVf%2Fu886nHvNHYyaHxf9BoFiRwpNtpXh5UvTDqr5ItvXapsvZqHIS8WKqFL3IxDCw209kGu1aKd%2BMFFDTlfhgn%2Bfp5meFeXWnRtE5qIow%2BXbF331BMyBonouDdZ4d1o&X-Amz-Signature=5f59f3c917cc6fddd61ee253ab46952e30188b45a78a7c2b441c57985a02fbff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
