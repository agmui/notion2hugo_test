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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEFXCJC3%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIDgxtpcHxvOi8mebuhEBqMEQizUy%2BJ1CSy4FWUN04GMlAiAf2RkXjGbEn%2B%2BWhYaXu5zGjmojS5x6Ti8fQ4sYB9v24iqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv4ar6cYy%2F4%2Bu6hxGKtwDQ3PB%2FVRmlAD3o16BzGwJ3rMr9VWgciZnXGWbOV9VPT1hzyKz8MWUvrFsBupfaUgir%2BcLtIEThBQDTVhxN3dklpmtLXNFe5Uk9vgSokKnuGxCSrw8j4xLSOz8%2FU5e80b109Gkv6LGPJ0n9c3h4T6QIf%2FeE6ZZrii6fC5TBvKO5U4KMnotbrDLOJ9DI8g0DnHAaAGwCadgnq3fSB1AGg4OuWd3ReQ2W%2Fsg9Qj%2BLbytPH02cACwPJqVMsbSqpEt2C1ZCpbfHToyjdT5OJ98XtHrYOufrF6Qxc83kBFkXQhH81z5ToBqRc9C2uMtoYmLl%2F1L6Rwe9MkiUHMVC3xOVSC3ifuSq6CfU25yUgAdi3ByB1%2Bidcs2sCT6goksVkA9bP4ZsrHsuC0hGbbLS4WMrRtiJ3vBgA3E0NH6Ic1OiHKeEupayKvItX8iRIx%2BuqppoxKxIUROQdLlAE4Zmkhhbaw1caBsrp3GBAlxEkzpgjFyIPyHYOT9bcAWSBnYaMLQFRzjdCd973G%2FeGConR4QYf7mRLauaJ8kfV4RTgrKuS6K1vS3hw42x2LgHCQ00KP7cjMJD%2F3BciDl%2F3TxD3Fp4oZhbzosO0m744mv53Q4uDBe2L7hZJhQOdQK%2B8Do7kUw4rGixAY6pgGJcTkKCrQKbad%2Fve9elPYkgdiUjfLtVz1LCgJVurqhDWKxmotq6dGqSUQgqUg2wcNQAbOPKePpB35iVeL3JP1YaHtDYg4GqEvgwikuhau90BQWopB40vQ%2BIFsjA%2B%2BSPKS8ULAmyjDNE%2FTRJTLk9rdgW4rooCmHLF%2FOIvKeB2ndyKC7JZmns5S%2BmBNEO4lGzprWeU9kX87pRnBw%2F35ujwnSPSQM9vAG&X-Amz-Signature=2db2675cced1439523aae57b2f8beabb6674137f354952e86fb34b1f7334b7a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEFXCJC3%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIDgxtpcHxvOi8mebuhEBqMEQizUy%2BJ1CSy4FWUN04GMlAiAf2RkXjGbEn%2B%2BWhYaXu5zGjmojS5x6Ti8fQ4sYB9v24iqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv4ar6cYy%2F4%2Bu6hxGKtwDQ3PB%2FVRmlAD3o16BzGwJ3rMr9VWgciZnXGWbOV9VPT1hzyKz8MWUvrFsBupfaUgir%2BcLtIEThBQDTVhxN3dklpmtLXNFe5Uk9vgSokKnuGxCSrw8j4xLSOz8%2FU5e80b109Gkv6LGPJ0n9c3h4T6QIf%2FeE6ZZrii6fC5TBvKO5U4KMnotbrDLOJ9DI8g0DnHAaAGwCadgnq3fSB1AGg4OuWd3ReQ2W%2Fsg9Qj%2BLbytPH02cACwPJqVMsbSqpEt2C1ZCpbfHToyjdT5OJ98XtHrYOufrF6Qxc83kBFkXQhH81z5ToBqRc9C2uMtoYmLl%2F1L6Rwe9MkiUHMVC3xOVSC3ifuSq6CfU25yUgAdi3ByB1%2Bidcs2sCT6goksVkA9bP4ZsrHsuC0hGbbLS4WMrRtiJ3vBgA3E0NH6Ic1OiHKeEupayKvItX8iRIx%2BuqppoxKxIUROQdLlAE4Zmkhhbaw1caBsrp3GBAlxEkzpgjFyIPyHYOT9bcAWSBnYaMLQFRzjdCd973G%2FeGConR4QYf7mRLauaJ8kfV4RTgrKuS6K1vS3hw42x2LgHCQ00KP7cjMJD%2F3BciDl%2F3TxD3Fp4oZhbzosO0m744mv53Q4uDBe2L7hZJhQOdQK%2B8Do7kUw4rGixAY6pgGJcTkKCrQKbad%2Fve9elPYkgdiUjfLtVz1LCgJVurqhDWKxmotq6dGqSUQgqUg2wcNQAbOPKePpB35iVeL3JP1YaHtDYg4GqEvgwikuhau90BQWopB40vQ%2BIFsjA%2B%2BSPKS8ULAmyjDNE%2FTRJTLk9rdgW4rooCmHLF%2FOIvKeB2ndyKC7JZmns5S%2BmBNEO4lGzprWeU9kX87pRnBw%2F35ujwnSPSQM9vAG&X-Amz-Signature=82b8d44096af27e7321ab591283b29dfc8a410a235417a80931c055148b7e7f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEFXCJC3%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIDgxtpcHxvOi8mebuhEBqMEQizUy%2BJ1CSy4FWUN04GMlAiAf2RkXjGbEn%2B%2BWhYaXu5zGjmojS5x6Ti8fQ4sYB9v24iqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv4ar6cYy%2F4%2Bu6hxGKtwDQ3PB%2FVRmlAD3o16BzGwJ3rMr9VWgciZnXGWbOV9VPT1hzyKz8MWUvrFsBupfaUgir%2BcLtIEThBQDTVhxN3dklpmtLXNFe5Uk9vgSokKnuGxCSrw8j4xLSOz8%2FU5e80b109Gkv6LGPJ0n9c3h4T6QIf%2FeE6ZZrii6fC5TBvKO5U4KMnotbrDLOJ9DI8g0DnHAaAGwCadgnq3fSB1AGg4OuWd3ReQ2W%2Fsg9Qj%2BLbytPH02cACwPJqVMsbSqpEt2C1ZCpbfHToyjdT5OJ98XtHrYOufrF6Qxc83kBFkXQhH81z5ToBqRc9C2uMtoYmLl%2F1L6Rwe9MkiUHMVC3xOVSC3ifuSq6CfU25yUgAdi3ByB1%2Bidcs2sCT6goksVkA9bP4ZsrHsuC0hGbbLS4WMrRtiJ3vBgA3E0NH6Ic1OiHKeEupayKvItX8iRIx%2BuqppoxKxIUROQdLlAE4Zmkhhbaw1caBsrp3GBAlxEkzpgjFyIPyHYOT9bcAWSBnYaMLQFRzjdCd973G%2FeGConR4QYf7mRLauaJ8kfV4RTgrKuS6K1vS3hw42x2LgHCQ00KP7cjMJD%2F3BciDl%2F3TxD3Fp4oZhbzosO0m744mv53Q4uDBe2L7hZJhQOdQK%2B8Do7kUw4rGixAY6pgGJcTkKCrQKbad%2Fve9elPYkgdiUjfLtVz1LCgJVurqhDWKxmotq6dGqSUQgqUg2wcNQAbOPKePpB35iVeL3JP1YaHtDYg4GqEvgwikuhau90BQWopB40vQ%2BIFsjA%2B%2BSPKS8ULAmyjDNE%2FTRJTLk9rdgW4rooCmHLF%2FOIvKeB2ndyKC7JZmns5S%2BmBNEO4lGzprWeU9kX87pRnBw%2F35ujwnSPSQM9vAG&X-Amz-Signature=3c05f81cee40c0989b86e5b5a7362004266d07264f9506c1f07e78255c0ca65c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEFXCJC3%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIDgxtpcHxvOi8mebuhEBqMEQizUy%2BJ1CSy4FWUN04GMlAiAf2RkXjGbEn%2B%2BWhYaXu5zGjmojS5x6Ti8fQ4sYB9v24iqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv4ar6cYy%2F4%2Bu6hxGKtwDQ3PB%2FVRmlAD3o16BzGwJ3rMr9VWgciZnXGWbOV9VPT1hzyKz8MWUvrFsBupfaUgir%2BcLtIEThBQDTVhxN3dklpmtLXNFe5Uk9vgSokKnuGxCSrw8j4xLSOz8%2FU5e80b109Gkv6LGPJ0n9c3h4T6QIf%2FeE6ZZrii6fC5TBvKO5U4KMnotbrDLOJ9DI8g0DnHAaAGwCadgnq3fSB1AGg4OuWd3ReQ2W%2Fsg9Qj%2BLbytPH02cACwPJqVMsbSqpEt2C1ZCpbfHToyjdT5OJ98XtHrYOufrF6Qxc83kBFkXQhH81z5ToBqRc9C2uMtoYmLl%2F1L6Rwe9MkiUHMVC3xOVSC3ifuSq6CfU25yUgAdi3ByB1%2Bidcs2sCT6goksVkA9bP4ZsrHsuC0hGbbLS4WMrRtiJ3vBgA3E0NH6Ic1OiHKeEupayKvItX8iRIx%2BuqppoxKxIUROQdLlAE4Zmkhhbaw1caBsrp3GBAlxEkzpgjFyIPyHYOT9bcAWSBnYaMLQFRzjdCd973G%2FeGConR4QYf7mRLauaJ8kfV4RTgrKuS6K1vS3hw42x2LgHCQ00KP7cjMJD%2F3BciDl%2F3TxD3Fp4oZhbzosO0m744mv53Q4uDBe2L7hZJhQOdQK%2B8Do7kUw4rGixAY6pgGJcTkKCrQKbad%2Fve9elPYkgdiUjfLtVz1LCgJVurqhDWKxmotq6dGqSUQgqUg2wcNQAbOPKePpB35iVeL3JP1YaHtDYg4GqEvgwikuhau90BQWopB40vQ%2BIFsjA%2B%2BSPKS8ULAmyjDNE%2FTRJTLk9rdgW4rooCmHLF%2FOIvKeB2ndyKC7JZmns5S%2BmBNEO4lGzprWeU9kX87pRnBw%2F35ujwnSPSQM9vAG&X-Amz-Signature=238e72c1dcfa3795af8d71f4ed0c1b72b828f35c7fb1ec083aeb6184252cf302&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEFXCJC3%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIDgxtpcHxvOi8mebuhEBqMEQizUy%2BJ1CSy4FWUN04GMlAiAf2RkXjGbEn%2B%2BWhYaXu5zGjmojS5x6Ti8fQ4sYB9v24iqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv4ar6cYy%2F4%2Bu6hxGKtwDQ3PB%2FVRmlAD3o16BzGwJ3rMr9VWgciZnXGWbOV9VPT1hzyKz8MWUvrFsBupfaUgir%2BcLtIEThBQDTVhxN3dklpmtLXNFe5Uk9vgSokKnuGxCSrw8j4xLSOz8%2FU5e80b109Gkv6LGPJ0n9c3h4T6QIf%2FeE6ZZrii6fC5TBvKO5U4KMnotbrDLOJ9DI8g0DnHAaAGwCadgnq3fSB1AGg4OuWd3ReQ2W%2Fsg9Qj%2BLbytPH02cACwPJqVMsbSqpEt2C1ZCpbfHToyjdT5OJ98XtHrYOufrF6Qxc83kBFkXQhH81z5ToBqRc9C2uMtoYmLl%2F1L6Rwe9MkiUHMVC3xOVSC3ifuSq6CfU25yUgAdi3ByB1%2Bidcs2sCT6goksVkA9bP4ZsrHsuC0hGbbLS4WMrRtiJ3vBgA3E0NH6Ic1OiHKeEupayKvItX8iRIx%2BuqppoxKxIUROQdLlAE4Zmkhhbaw1caBsrp3GBAlxEkzpgjFyIPyHYOT9bcAWSBnYaMLQFRzjdCd973G%2FeGConR4QYf7mRLauaJ8kfV4RTgrKuS6K1vS3hw42x2LgHCQ00KP7cjMJD%2F3BciDl%2F3TxD3Fp4oZhbzosO0m744mv53Q4uDBe2L7hZJhQOdQK%2B8Do7kUw4rGixAY6pgGJcTkKCrQKbad%2Fve9elPYkgdiUjfLtVz1LCgJVurqhDWKxmotq6dGqSUQgqUg2wcNQAbOPKePpB35iVeL3JP1YaHtDYg4GqEvgwikuhau90BQWopB40vQ%2BIFsjA%2B%2BSPKS8ULAmyjDNE%2FTRJTLk9rdgW4rooCmHLF%2FOIvKeB2ndyKC7JZmns5S%2BmBNEO4lGzprWeU9kX87pRnBw%2F35ujwnSPSQM9vAG&X-Amz-Signature=7d7486de1bd235a761e843082f150a2582ff98e59e90c0b83bdbdf4882de374d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEFXCJC3%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIDgxtpcHxvOi8mebuhEBqMEQizUy%2BJ1CSy4FWUN04GMlAiAf2RkXjGbEn%2B%2BWhYaXu5zGjmojS5x6Ti8fQ4sYB9v24iqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv4ar6cYy%2F4%2Bu6hxGKtwDQ3PB%2FVRmlAD3o16BzGwJ3rMr9VWgciZnXGWbOV9VPT1hzyKz8MWUvrFsBupfaUgir%2BcLtIEThBQDTVhxN3dklpmtLXNFe5Uk9vgSokKnuGxCSrw8j4xLSOz8%2FU5e80b109Gkv6LGPJ0n9c3h4T6QIf%2FeE6ZZrii6fC5TBvKO5U4KMnotbrDLOJ9DI8g0DnHAaAGwCadgnq3fSB1AGg4OuWd3ReQ2W%2Fsg9Qj%2BLbytPH02cACwPJqVMsbSqpEt2C1ZCpbfHToyjdT5OJ98XtHrYOufrF6Qxc83kBFkXQhH81z5ToBqRc9C2uMtoYmLl%2F1L6Rwe9MkiUHMVC3xOVSC3ifuSq6CfU25yUgAdi3ByB1%2Bidcs2sCT6goksVkA9bP4ZsrHsuC0hGbbLS4WMrRtiJ3vBgA3E0NH6Ic1OiHKeEupayKvItX8iRIx%2BuqppoxKxIUROQdLlAE4Zmkhhbaw1caBsrp3GBAlxEkzpgjFyIPyHYOT9bcAWSBnYaMLQFRzjdCd973G%2FeGConR4QYf7mRLauaJ8kfV4RTgrKuS6K1vS3hw42x2LgHCQ00KP7cjMJD%2F3BciDl%2F3TxD3Fp4oZhbzosO0m744mv53Q4uDBe2L7hZJhQOdQK%2B8Do7kUw4rGixAY6pgGJcTkKCrQKbad%2Fve9elPYkgdiUjfLtVz1LCgJVurqhDWKxmotq6dGqSUQgqUg2wcNQAbOPKePpB35iVeL3JP1YaHtDYg4GqEvgwikuhau90BQWopB40vQ%2BIFsjA%2B%2BSPKS8ULAmyjDNE%2FTRJTLk9rdgW4rooCmHLF%2FOIvKeB2ndyKC7JZmns5S%2BmBNEO4lGzprWeU9kX87pRnBw%2F35ujwnSPSQM9vAG&X-Amz-Signature=86d5e39362e15d53c5faddce79dc220cea450aaa251e0580699da7b0b63ee602&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEFXCJC3%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIDgxtpcHxvOi8mebuhEBqMEQizUy%2BJ1CSy4FWUN04GMlAiAf2RkXjGbEn%2B%2BWhYaXu5zGjmojS5x6Ti8fQ4sYB9v24iqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv4ar6cYy%2F4%2Bu6hxGKtwDQ3PB%2FVRmlAD3o16BzGwJ3rMr9VWgciZnXGWbOV9VPT1hzyKz8MWUvrFsBupfaUgir%2BcLtIEThBQDTVhxN3dklpmtLXNFe5Uk9vgSokKnuGxCSrw8j4xLSOz8%2FU5e80b109Gkv6LGPJ0n9c3h4T6QIf%2FeE6ZZrii6fC5TBvKO5U4KMnotbrDLOJ9DI8g0DnHAaAGwCadgnq3fSB1AGg4OuWd3ReQ2W%2Fsg9Qj%2BLbytPH02cACwPJqVMsbSqpEt2C1ZCpbfHToyjdT5OJ98XtHrYOufrF6Qxc83kBFkXQhH81z5ToBqRc9C2uMtoYmLl%2F1L6Rwe9MkiUHMVC3xOVSC3ifuSq6CfU25yUgAdi3ByB1%2Bidcs2sCT6goksVkA9bP4ZsrHsuC0hGbbLS4WMrRtiJ3vBgA3E0NH6Ic1OiHKeEupayKvItX8iRIx%2BuqppoxKxIUROQdLlAE4Zmkhhbaw1caBsrp3GBAlxEkzpgjFyIPyHYOT9bcAWSBnYaMLQFRzjdCd973G%2FeGConR4QYf7mRLauaJ8kfV4RTgrKuS6K1vS3hw42x2LgHCQ00KP7cjMJD%2F3BciDl%2F3TxD3Fp4oZhbzosO0m744mv53Q4uDBe2L7hZJhQOdQK%2B8Do7kUw4rGixAY6pgGJcTkKCrQKbad%2Fve9elPYkgdiUjfLtVz1LCgJVurqhDWKxmotq6dGqSUQgqUg2wcNQAbOPKePpB35iVeL3JP1YaHtDYg4GqEvgwikuhau90BQWopB40vQ%2BIFsjA%2B%2BSPKS8ULAmyjDNE%2FTRJTLk9rdgW4rooCmHLF%2FOIvKeB2ndyKC7JZmns5S%2BmBNEO4lGzprWeU9kX87pRnBw%2F35ujwnSPSQM9vAG&X-Amz-Signature=5b221e40914de4654ad25de43fb68689745f29c1ccc6f7cacc20337a9f35aa15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

drive around with `teleop_twist_keyboard` to scan more of the map

## Updating launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEFXCJC3%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIDgxtpcHxvOi8mebuhEBqMEQizUy%2BJ1CSy4FWUN04GMlAiAf2RkXjGbEn%2B%2BWhYaXu5zGjmojS5x6Ti8fQ4sYB9v24iqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv4ar6cYy%2F4%2Bu6hxGKtwDQ3PB%2FVRmlAD3o16BzGwJ3rMr9VWgciZnXGWbOV9VPT1hzyKz8MWUvrFsBupfaUgir%2BcLtIEThBQDTVhxN3dklpmtLXNFe5Uk9vgSokKnuGxCSrw8j4xLSOz8%2FU5e80b109Gkv6LGPJ0n9c3h4T6QIf%2FeE6ZZrii6fC5TBvKO5U4KMnotbrDLOJ9DI8g0DnHAaAGwCadgnq3fSB1AGg4OuWd3ReQ2W%2Fsg9Qj%2BLbytPH02cACwPJqVMsbSqpEt2C1ZCpbfHToyjdT5OJ98XtHrYOufrF6Qxc83kBFkXQhH81z5ToBqRc9C2uMtoYmLl%2F1L6Rwe9MkiUHMVC3xOVSC3ifuSq6CfU25yUgAdi3ByB1%2Bidcs2sCT6goksVkA9bP4ZsrHsuC0hGbbLS4WMrRtiJ3vBgA3E0NH6Ic1OiHKeEupayKvItX8iRIx%2BuqppoxKxIUROQdLlAE4Zmkhhbaw1caBsrp3GBAlxEkzpgjFyIPyHYOT9bcAWSBnYaMLQFRzjdCd973G%2FeGConR4QYf7mRLauaJ8kfV4RTgrKuS6K1vS3hw42x2LgHCQ00KP7cjMJD%2F3BciDl%2F3TxD3Fp4oZhbzosO0m744mv53Q4uDBe2L7hZJhQOdQK%2B8Do7kUw4rGixAY6pgGJcTkKCrQKbad%2Fve9elPYkgdiUjfLtVz1LCgJVurqhDWKxmotq6dGqSUQgqUg2wcNQAbOPKePpB35iVeL3JP1YaHtDYg4GqEvgwikuhau90BQWopB40vQ%2BIFsjA%2B%2BSPKS8ULAmyjDNE%2FTRJTLk9rdgW4rooCmHLF%2FOIvKeB2ndyKC7JZmns5S%2BmBNEO4lGzprWeU9kX87pRnBw%2F35ujwnSPSQM9vAG&X-Amz-Signature=d475109adfdac5d8270f1ee3b1ec520e90363bcc8281b50e895e55c81363fe52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEFXCJC3%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIDgxtpcHxvOi8mebuhEBqMEQizUy%2BJ1CSy4FWUN04GMlAiAf2RkXjGbEn%2B%2BWhYaXu5zGjmojS5x6Ti8fQ4sYB9v24iqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv4ar6cYy%2F4%2Bu6hxGKtwDQ3PB%2FVRmlAD3o16BzGwJ3rMr9VWgciZnXGWbOV9VPT1hzyKz8MWUvrFsBupfaUgir%2BcLtIEThBQDTVhxN3dklpmtLXNFe5Uk9vgSokKnuGxCSrw8j4xLSOz8%2FU5e80b109Gkv6LGPJ0n9c3h4T6QIf%2FeE6ZZrii6fC5TBvKO5U4KMnotbrDLOJ9DI8g0DnHAaAGwCadgnq3fSB1AGg4OuWd3ReQ2W%2Fsg9Qj%2BLbytPH02cACwPJqVMsbSqpEt2C1ZCpbfHToyjdT5OJ98XtHrYOufrF6Qxc83kBFkXQhH81z5ToBqRc9C2uMtoYmLl%2F1L6Rwe9MkiUHMVC3xOVSC3ifuSq6CfU25yUgAdi3ByB1%2Bidcs2sCT6goksVkA9bP4ZsrHsuC0hGbbLS4WMrRtiJ3vBgA3E0NH6Ic1OiHKeEupayKvItX8iRIx%2BuqppoxKxIUROQdLlAE4Zmkhhbaw1caBsrp3GBAlxEkzpgjFyIPyHYOT9bcAWSBnYaMLQFRzjdCd973G%2FeGConR4QYf7mRLauaJ8kfV4RTgrKuS6K1vS3hw42x2LgHCQ00KP7cjMJD%2F3BciDl%2F3TxD3Fp4oZhbzosO0m744mv53Q4uDBe2L7hZJhQOdQK%2B8Do7kUw4rGixAY6pgGJcTkKCrQKbad%2Fve9elPYkgdiUjfLtVz1LCgJVurqhDWKxmotq6dGqSUQgqUg2wcNQAbOPKePpB35iVeL3JP1YaHtDYg4GqEvgwikuhau90BQWopB40vQ%2BIFsjA%2B%2BSPKS8ULAmyjDNE%2FTRJTLk9rdgW4rooCmHLF%2FOIvKeB2ndyKC7JZmns5S%2BmBNEO4lGzprWeU9kX87pRnBw%2F35ujwnSPSQM9vAG&X-Amz-Signature=2c2bee93c261cc572d730574d7510346ce13e7370827aba413cc5c200f919f18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEFXCJC3%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIDgxtpcHxvOi8mebuhEBqMEQizUy%2BJ1CSy4FWUN04GMlAiAf2RkXjGbEn%2B%2BWhYaXu5zGjmojS5x6Ti8fQ4sYB9v24iqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv4ar6cYy%2F4%2Bu6hxGKtwDQ3PB%2FVRmlAD3o16BzGwJ3rMr9VWgciZnXGWbOV9VPT1hzyKz8MWUvrFsBupfaUgir%2BcLtIEThBQDTVhxN3dklpmtLXNFe5Uk9vgSokKnuGxCSrw8j4xLSOz8%2FU5e80b109Gkv6LGPJ0n9c3h4T6QIf%2FeE6ZZrii6fC5TBvKO5U4KMnotbrDLOJ9DI8g0DnHAaAGwCadgnq3fSB1AGg4OuWd3ReQ2W%2Fsg9Qj%2BLbytPH02cACwPJqVMsbSqpEt2C1ZCpbfHToyjdT5OJ98XtHrYOufrF6Qxc83kBFkXQhH81z5ToBqRc9C2uMtoYmLl%2F1L6Rwe9MkiUHMVC3xOVSC3ifuSq6CfU25yUgAdi3ByB1%2Bidcs2sCT6goksVkA9bP4ZsrHsuC0hGbbLS4WMrRtiJ3vBgA3E0NH6Ic1OiHKeEupayKvItX8iRIx%2BuqppoxKxIUROQdLlAE4Zmkhhbaw1caBsrp3GBAlxEkzpgjFyIPyHYOT9bcAWSBnYaMLQFRzjdCd973G%2FeGConR4QYf7mRLauaJ8kfV4RTgrKuS6K1vS3hw42x2LgHCQ00KP7cjMJD%2F3BciDl%2F3TxD3Fp4oZhbzosO0m744mv53Q4uDBe2L7hZJhQOdQK%2B8Do7kUw4rGixAY6pgGJcTkKCrQKbad%2Fve9elPYkgdiUjfLtVz1LCgJVurqhDWKxmotq6dGqSUQgqUg2wcNQAbOPKePpB35iVeL3JP1YaHtDYg4GqEvgwikuhau90BQWopB40vQ%2BIFsjA%2B%2BSPKS8ULAmyjDNE%2FTRJTLk9rdgW4rooCmHLF%2FOIvKeB2ndyKC7JZmns5S%2BmBNEO4lGzprWeU9kX87pRnBw%2F35ujwnSPSQM9vAG&X-Amz-Signature=fae72f93be4e2351872d3307c37a942dd16f6df58ae3f857c679518fd08838d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEFXCJC3%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIDgxtpcHxvOi8mebuhEBqMEQizUy%2BJ1CSy4FWUN04GMlAiAf2RkXjGbEn%2B%2BWhYaXu5zGjmojS5x6Ti8fQ4sYB9v24iqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv4ar6cYy%2F4%2Bu6hxGKtwDQ3PB%2FVRmlAD3o16BzGwJ3rMr9VWgciZnXGWbOV9VPT1hzyKz8MWUvrFsBupfaUgir%2BcLtIEThBQDTVhxN3dklpmtLXNFe5Uk9vgSokKnuGxCSrw8j4xLSOz8%2FU5e80b109Gkv6LGPJ0n9c3h4T6QIf%2FeE6ZZrii6fC5TBvKO5U4KMnotbrDLOJ9DI8g0DnHAaAGwCadgnq3fSB1AGg4OuWd3ReQ2W%2Fsg9Qj%2BLbytPH02cACwPJqVMsbSqpEt2C1ZCpbfHToyjdT5OJ98XtHrYOufrF6Qxc83kBFkXQhH81z5ToBqRc9C2uMtoYmLl%2F1L6Rwe9MkiUHMVC3xOVSC3ifuSq6CfU25yUgAdi3ByB1%2Bidcs2sCT6goksVkA9bP4ZsrHsuC0hGbbLS4WMrRtiJ3vBgA3E0NH6Ic1OiHKeEupayKvItX8iRIx%2BuqppoxKxIUROQdLlAE4Zmkhhbaw1caBsrp3GBAlxEkzpgjFyIPyHYOT9bcAWSBnYaMLQFRzjdCd973G%2FeGConR4QYf7mRLauaJ8kfV4RTgrKuS6K1vS3hw42x2LgHCQ00KP7cjMJD%2F3BciDl%2F3TxD3Fp4oZhbzosO0m744mv53Q4uDBe2L7hZJhQOdQK%2B8Do7kUw4rGixAY6pgGJcTkKCrQKbad%2Fve9elPYkgdiUjfLtVz1LCgJVurqhDWKxmotq6dGqSUQgqUg2wcNQAbOPKePpB35iVeL3JP1YaHtDYg4GqEvgwikuhau90BQWopB40vQ%2BIFsjA%2B%2BSPKS8ULAmyjDNE%2FTRJTLk9rdgW4rooCmHLF%2FOIvKeB2ndyKC7JZmns5S%2BmBNEO4lGzprWeU9kX87pRnBw%2F35ujwnSPSQM9vAG&X-Amz-Signature=e1644848cbf9293ffa434960e2455c155e3c429ad7a428acdf38e6e8a1eadffa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEFXCJC3%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIDgxtpcHxvOi8mebuhEBqMEQizUy%2BJ1CSy4FWUN04GMlAiAf2RkXjGbEn%2B%2BWhYaXu5zGjmojS5x6Ti8fQ4sYB9v24iqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv4ar6cYy%2F4%2Bu6hxGKtwDQ3PB%2FVRmlAD3o16BzGwJ3rMr9VWgciZnXGWbOV9VPT1hzyKz8MWUvrFsBupfaUgir%2BcLtIEThBQDTVhxN3dklpmtLXNFe5Uk9vgSokKnuGxCSrw8j4xLSOz8%2FU5e80b109Gkv6LGPJ0n9c3h4T6QIf%2FeE6ZZrii6fC5TBvKO5U4KMnotbrDLOJ9DI8g0DnHAaAGwCadgnq3fSB1AGg4OuWd3ReQ2W%2Fsg9Qj%2BLbytPH02cACwPJqVMsbSqpEt2C1ZCpbfHToyjdT5OJ98XtHrYOufrF6Qxc83kBFkXQhH81z5ToBqRc9C2uMtoYmLl%2F1L6Rwe9MkiUHMVC3xOVSC3ifuSq6CfU25yUgAdi3ByB1%2Bidcs2sCT6goksVkA9bP4ZsrHsuC0hGbbLS4WMrRtiJ3vBgA3E0NH6Ic1OiHKeEupayKvItX8iRIx%2BuqppoxKxIUROQdLlAE4Zmkhhbaw1caBsrp3GBAlxEkzpgjFyIPyHYOT9bcAWSBnYaMLQFRzjdCd973G%2FeGConR4QYf7mRLauaJ8kfV4RTgrKuS6K1vS3hw42x2LgHCQ00KP7cjMJD%2F3BciDl%2F3TxD3Fp4oZhbzosO0m744mv53Q4uDBe2L7hZJhQOdQK%2B8Do7kUw4rGixAY6pgGJcTkKCrQKbad%2Fve9elPYkgdiUjfLtVz1LCgJVurqhDWKxmotq6dGqSUQgqUg2wcNQAbOPKePpB35iVeL3JP1YaHtDYg4GqEvgwikuhau90BQWopB40vQ%2BIFsjA%2B%2BSPKS8ULAmyjDNE%2FTRJTLk9rdgW4rooCmHLF%2FOIvKeB2ndyKC7JZmns5S%2BmBNEO4lGzprWeU9kX87pRnBw%2F35ujwnSPSQM9vAG&X-Amz-Signature=5bdb40595f715cdd72f13e008eab01da9143880d984f2a379ccbbebf723542a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEFXCJC3%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T110918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJGMEQCIDgxtpcHxvOi8mebuhEBqMEQizUy%2BJ1CSy4FWUN04GMlAiAf2RkXjGbEn%2B%2BWhYaXu5zGjmojS5x6Ti8fQ4sYB9v24iqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMv4ar6cYy%2F4%2Bu6hxGKtwDQ3PB%2FVRmlAD3o16BzGwJ3rMr9VWgciZnXGWbOV9VPT1hzyKz8MWUvrFsBupfaUgir%2BcLtIEThBQDTVhxN3dklpmtLXNFe5Uk9vgSokKnuGxCSrw8j4xLSOz8%2FU5e80b109Gkv6LGPJ0n9c3h4T6QIf%2FeE6ZZrii6fC5TBvKO5U4KMnotbrDLOJ9DI8g0DnHAaAGwCadgnq3fSB1AGg4OuWd3ReQ2W%2Fsg9Qj%2BLbytPH02cACwPJqVMsbSqpEt2C1ZCpbfHToyjdT5OJ98XtHrYOufrF6Qxc83kBFkXQhH81z5ToBqRc9C2uMtoYmLl%2F1L6Rwe9MkiUHMVC3xOVSC3ifuSq6CfU25yUgAdi3ByB1%2Bidcs2sCT6goksVkA9bP4ZsrHsuC0hGbbLS4WMrRtiJ3vBgA3E0NH6Ic1OiHKeEupayKvItX8iRIx%2BuqppoxKxIUROQdLlAE4Zmkhhbaw1caBsrp3GBAlxEkzpgjFyIPyHYOT9bcAWSBnYaMLQFRzjdCd973G%2FeGConR4QYf7mRLauaJ8kfV4RTgrKuS6K1vS3hw42x2LgHCQ00KP7cjMJD%2F3BciDl%2F3TxD3Fp4oZhbzosO0m744mv53Q4uDBe2L7hZJhQOdQK%2B8Do7kUw4rGixAY6pgGJcTkKCrQKbad%2Fve9elPYkgdiUjfLtVz1LCgJVurqhDWKxmotq6dGqSUQgqUg2wcNQAbOPKePpB35iVeL3JP1YaHtDYg4GqEvgwikuhau90BQWopB40vQ%2BIFsjA%2B%2BSPKS8ULAmyjDNE%2FTRJTLk9rdgW4rooCmHLF%2FOIvKeB2ndyKC7JZmns5S%2BmBNEO4lGzprWeU9kX87pRnBw%2F35ujwnSPSQM9vAG&X-Amz-Signature=d68ad4ae5ad2d0abf06f9bb3ab1f62f80b17d573c5f4e981c0c148f71fbee35f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
