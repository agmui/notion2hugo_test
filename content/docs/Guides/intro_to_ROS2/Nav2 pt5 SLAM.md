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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLW5XQUU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFf4pdpAm5OIWa9vX04awR33bhuzDMsYkyMaEavHXn2CAiEA%2FXePwe2MlSxTbCEP4O0kJBXEuCGTPeOd6lg2qZAcVBEq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJaoEOnpqsd6HL0A3SrcA87mJpz7DOrjRDghbBew%2BkZA2xuo8Aupl6yJYH2XI1Z9dfVaoAcXv66a2FZSbJMChC1RVEFG2am3vLydm%2F9EyKavoZ81PId2g5z3N7LKsw6nFmngm13D3zgsw3jtBVJx7kJE3z7ecLeMpWHSIJF0cH8YccL%2Bh9s2jMpLw5ijJ43mtFJe1W1pKkqwT%2F%2F5dTQH93aNbELUAe4hD4LbKsqYk0ziEgIkfqBFZoN0P%2BA26kyGAUIEu%2FV3ytiSrj0h4lvfGaSJgorMT9DWzphWDAzgvJgUt36xR3z2TtOSn00WU%2FwyKq6MmXgkmYUWKVFu0ZLAARIrZf4RbCa0HzvklTkxnrR05LNC00IaCiaSIZrsjZzuadljEadLvgli3HnetiRcYuU6trnyqFBzQpqNB6WWxy5dX%2FQbI%2Fo48zGaRYw%2FZtVjtYbRp4RCjoON86LfDykXXDr7oOcoxaqwvPDUjgUH4e4mVL2gEeTB%2FPoi0BJqsygqjDfUVLjVsRD7IV2uI57%2BQLGQHi5RrK%2FPOZvqFST5DI1Hrvk5bQPznmXOwh48dJ%2B6VpQ6TYS9MFis%2B4zDQ6wpEOUBXdvGAxXwAQleOyX2jkgsWeV9ZJpOAxUVLW0vf4A%2B7bdoyxVyBvAiW5E0MIHavsQGOqUBLGNzkMdFkBTBW0altjWzDqAN7IR%2Fh2L42kVGqDcVi32pEXFCY29sUDcPPTqtXxUQahtgWcZMutKZnkbB2quNspDRSWu%2Fn%2BRLc2Qj%2B6iw6cVjAsSI1vog0KhM%2BhUfCg1jrcXtw%2FiDAB6AxzDhDgLw8wGOLTdwYz7NaSEw58L3C8swD0SWFk%2Fzf4WSMjnMZ%2Bg3J5yft%2B%2BdQBaYpfQ%2FsQ9hr2QJvCu3&X-Amz-Signature=975fc203bf06279688116c73a30a1c734758028050b8f7278cc270f1f51a2882&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLW5XQUU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFf4pdpAm5OIWa9vX04awR33bhuzDMsYkyMaEavHXn2CAiEA%2FXePwe2MlSxTbCEP4O0kJBXEuCGTPeOd6lg2qZAcVBEq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJaoEOnpqsd6HL0A3SrcA87mJpz7DOrjRDghbBew%2BkZA2xuo8Aupl6yJYH2XI1Z9dfVaoAcXv66a2FZSbJMChC1RVEFG2am3vLydm%2F9EyKavoZ81PId2g5z3N7LKsw6nFmngm13D3zgsw3jtBVJx7kJE3z7ecLeMpWHSIJF0cH8YccL%2Bh9s2jMpLw5ijJ43mtFJe1W1pKkqwT%2F%2F5dTQH93aNbELUAe4hD4LbKsqYk0ziEgIkfqBFZoN0P%2BA26kyGAUIEu%2FV3ytiSrj0h4lvfGaSJgorMT9DWzphWDAzgvJgUt36xR3z2TtOSn00WU%2FwyKq6MmXgkmYUWKVFu0ZLAARIrZf4RbCa0HzvklTkxnrR05LNC00IaCiaSIZrsjZzuadljEadLvgli3HnetiRcYuU6trnyqFBzQpqNB6WWxy5dX%2FQbI%2Fo48zGaRYw%2FZtVjtYbRp4RCjoON86LfDykXXDr7oOcoxaqwvPDUjgUH4e4mVL2gEeTB%2FPoi0BJqsygqjDfUVLjVsRD7IV2uI57%2BQLGQHi5RrK%2FPOZvqFST5DI1Hrvk5bQPznmXOwh48dJ%2B6VpQ6TYS9MFis%2B4zDQ6wpEOUBXdvGAxXwAQleOyX2jkgsWeV9ZJpOAxUVLW0vf4A%2B7bdoyxVyBvAiW5E0MIHavsQGOqUBLGNzkMdFkBTBW0altjWzDqAN7IR%2Fh2L42kVGqDcVi32pEXFCY29sUDcPPTqtXxUQahtgWcZMutKZnkbB2quNspDRSWu%2Fn%2BRLc2Qj%2B6iw6cVjAsSI1vog0KhM%2BhUfCg1jrcXtw%2FiDAB6AxzDhDgLw8wGOLTdwYz7NaSEw58L3C8swD0SWFk%2Fzf4WSMjnMZ%2Bg3J5yft%2B%2BdQBaYpfQ%2FsQ9hr2QJvCu3&X-Amz-Signature=0dae9a825c3732ce757b2d73f86cdd526bec134c23eba4c4e70af1865bd0e3be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLW5XQUU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFf4pdpAm5OIWa9vX04awR33bhuzDMsYkyMaEavHXn2CAiEA%2FXePwe2MlSxTbCEP4O0kJBXEuCGTPeOd6lg2qZAcVBEq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJaoEOnpqsd6HL0A3SrcA87mJpz7DOrjRDghbBew%2BkZA2xuo8Aupl6yJYH2XI1Z9dfVaoAcXv66a2FZSbJMChC1RVEFG2am3vLydm%2F9EyKavoZ81PId2g5z3N7LKsw6nFmngm13D3zgsw3jtBVJx7kJE3z7ecLeMpWHSIJF0cH8YccL%2Bh9s2jMpLw5ijJ43mtFJe1W1pKkqwT%2F%2F5dTQH93aNbELUAe4hD4LbKsqYk0ziEgIkfqBFZoN0P%2BA26kyGAUIEu%2FV3ytiSrj0h4lvfGaSJgorMT9DWzphWDAzgvJgUt36xR3z2TtOSn00WU%2FwyKq6MmXgkmYUWKVFu0ZLAARIrZf4RbCa0HzvklTkxnrR05LNC00IaCiaSIZrsjZzuadljEadLvgli3HnetiRcYuU6trnyqFBzQpqNB6WWxy5dX%2FQbI%2Fo48zGaRYw%2FZtVjtYbRp4RCjoON86LfDykXXDr7oOcoxaqwvPDUjgUH4e4mVL2gEeTB%2FPoi0BJqsygqjDfUVLjVsRD7IV2uI57%2BQLGQHi5RrK%2FPOZvqFST5DI1Hrvk5bQPznmXOwh48dJ%2B6VpQ6TYS9MFis%2B4zDQ6wpEOUBXdvGAxXwAQleOyX2jkgsWeV9ZJpOAxUVLW0vf4A%2B7bdoyxVyBvAiW5E0MIHavsQGOqUBLGNzkMdFkBTBW0altjWzDqAN7IR%2Fh2L42kVGqDcVi32pEXFCY29sUDcPPTqtXxUQahtgWcZMutKZnkbB2quNspDRSWu%2Fn%2BRLc2Qj%2B6iw6cVjAsSI1vog0KhM%2BhUfCg1jrcXtw%2FiDAB6AxzDhDgLw8wGOLTdwYz7NaSEw58L3C8swD0SWFk%2Fzf4WSMjnMZ%2Bg3J5yft%2B%2BdQBaYpfQ%2FsQ9hr2QJvCu3&X-Amz-Signature=28437d62c42f412b3babc58369e974bb310622bc12e0f353f09e597931455d71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLW5XQUU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFf4pdpAm5OIWa9vX04awR33bhuzDMsYkyMaEavHXn2CAiEA%2FXePwe2MlSxTbCEP4O0kJBXEuCGTPeOd6lg2qZAcVBEq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJaoEOnpqsd6HL0A3SrcA87mJpz7DOrjRDghbBew%2BkZA2xuo8Aupl6yJYH2XI1Z9dfVaoAcXv66a2FZSbJMChC1RVEFG2am3vLydm%2F9EyKavoZ81PId2g5z3N7LKsw6nFmngm13D3zgsw3jtBVJx7kJE3z7ecLeMpWHSIJF0cH8YccL%2Bh9s2jMpLw5ijJ43mtFJe1W1pKkqwT%2F%2F5dTQH93aNbELUAe4hD4LbKsqYk0ziEgIkfqBFZoN0P%2BA26kyGAUIEu%2FV3ytiSrj0h4lvfGaSJgorMT9DWzphWDAzgvJgUt36xR3z2TtOSn00WU%2FwyKq6MmXgkmYUWKVFu0ZLAARIrZf4RbCa0HzvklTkxnrR05LNC00IaCiaSIZrsjZzuadljEadLvgli3HnetiRcYuU6trnyqFBzQpqNB6WWxy5dX%2FQbI%2Fo48zGaRYw%2FZtVjtYbRp4RCjoON86LfDykXXDr7oOcoxaqwvPDUjgUH4e4mVL2gEeTB%2FPoi0BJqsygqjDfUVLjVsRD7IV2uI57%2BQLGQHi5RrK%2FPOZvqFST5DI1Hrvk5bQPznmXOwh48dJ%2B6VpQ6TYS9MFis%2B4zDQ6wpEOUBXdvGAxXwAQleOyX2jkgsWeV9ZJpOAxUVLW0vf4A%2B7bdoyxVyBvAiW5E0MIHavsQGOqUBLGNzkMdFkBTBW0altjWzDqAN7IR%2Fh2L42kVGqDcVi32pEXFCY29sUDcPPTqtXxUQahtgWcZMutKZnkbB2quNspDRSWu%2Fn%2BRLc2Qj%2B6iw6cVjAsSI1vog0KhM%2BhUfCg1jrcXtw%2FiDAB6AxzDhDgLw8wGOLTdwYz7NaSEw58L3C8swD0SWFk%2Fzf4WSMjnMZ%2Bg3J5yft%2B%2BdQBaYpfQ%2FsQ9hr2QJvCu3&X-Amz-Signature=cae3ccfcbad62f5eac99d417adbefdfbde058f35a42b881ed9edde3b5a73a155&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLW5XQUU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFf4pdpAm5OIWa9vX04awR33bhuzDMsYkyMaEavHXn2CAiEA%2FXePwe2MlSxTbCEP4O0kJBXEuCGTPeOd6lg2qZAcVBEq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJaoEOnpqsd6HL0A3SrcA87mJpz7DOrjRDghbBew%2BkZA2xuo8Aupl6yJYH2XI1Z9dfVaoAcXv66a2FZSbJMChC1RVEFG2am3vLydm%2F9EyKavoZ81PId2g5z3N7LKsw6nFmngm13D3zgsw3jtBVJx7kJE3z7ecLeMpWHSIJF0cH8YccL%2Bh9s2jMpLw5ijJ43mtFJe1W1pKkqwT%2F%2F5dTQH93aNbELUAe4hD4LbKsqYk0ziEgIkfqBFZoN0P%2BA26kyGAUIEu%2FV3ytiSrj0h4lvfGaSJgorMT9DWzphWDAzgvJgUt36xR3z2TtOSn00WU%2FwyKq6MmXgkmYUWKVFu0ZLAARIrZf4RbCa0HzvklTkxnrR05LNC00IaCiaSIZrsjZzuadljEadLvgli3HnetiRcYuU6trnyqFBzQpqNB6WWxy5dX%2FQbI%2Fo48zGaRYw%2FZtVjtYbRp4RCjoON86LfDykXXDr7oOcoxaqwvPDUjgUH4e4mVL2gEeTB%2FPoi0BJqsygqjDfUVLjVsRD7IV2uI57%2BQLGQHi5RrK%2FPOZvqFST5DI1Hrvk5bQPznmXOwh48dJ%2B6VpQ6TYS9MFis%2B4zDQ6wpEOUBXdvGAxXwAQleOyX2jkgsWeV9ZJpOAxUVLW0vf4A%2B7bdoyxVyBvAiW5E0MIHavsQGOqUBLGNzkMdFkBTBW0altjWzDqAN7IR%2Fh2L42kVGqDcVi32pEXFCY29sUDcPPTqtXxUQahtgWcZMutKZnkbB2quNspDRSWu%2Fn%2BRLc2Qj%2B6iw6cVjAsSI1vog0KhM%2BhUfCg1jrcXtw%2FiDAB6AxzDhDgLw8wGOLTdwYz7NaSEw58L3C8swD0SWFk%2Fzf4WSMjnMZ%2Bg3J5yft%2B%2BdQBaYpfQ%2FsQ9hr2QJvCu3&X-Amz-Signature=29ce305e060a383d1c47dbaa3fc53080a4177d7c1f0c21ca50c021fcff0f3287&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLW5XQUU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFf4pdpAm5OIWa9vX04awR33bhuzDMsYkyMaEavHXn2CAiEA%2FXePwe2MlSxTbCEP4O0kJBXEuCGTPeOd6lg2qZAcVBEq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJaoEOnpqsd6HL0A3SrcA87mJpz7DOrjRDghbBew%2BkZA2xuo8Aupl6yJYH2XI1Z9dfVaoAcXv66a2FZSbJMChC1RVEFG2am3vLydm%2F9EyKavoZ81PId2g5z3N7LKsw6nFmngm13D3zgsw3jtBVJx7kJE3z7ecLeMpWHSIJF0cH8YccL%2Bh9s2jMpLw5ijJ43mtFJe1W1pKkqwT%2F%2F5dTQH93aNbELUAe4hD4LbKsqYk0ziEgIkfqBFZoN0P%2BA26kyGAUIEu%2FV3ytiSrj0h4lvfGaSJgorMT9DWzphWDAzgvJgUt36xR3z2TtOSn00WU%2FwyKq6MmXgkmYUWKVFu0ZLAARIrZf4RbCa0HzvklTkxnrR05LNC00IaCiaSIZrsjZzuadljEadLvgli3HnetiRcYuU6trnyqFBzQpqNB6WWxy5dX%2FQbI%2Fo48zGaRYw%2FZtVjtYbRp4RCjoON86LfDykXXDr7oOcoxaqwvPDUjgUH4e4mVL2gEeTB%2FPoi0BJqsygqjDfUVLjVsRD7IV2uI57%2BQLGQHi5RrK%2FPOZvqFST5DI1Hrvk5bQPznmXOwh48dJ%2B6VpQ6TYS9MFis%2B4zDQ6wpEOUBXdvGAxXwAQleOyX2jkgsWeV9ZJpOAxUVLW0vf4A%2B7bdoyxVyBvAiW5E0MIHavsQGOqUBLGNzkMdFkBTBW0altjWzDqAN7IR%2Fh2L42kVGqDcVi32pEXFCY29sUDcPPTqtXxUQahtgWcZMutKZnkbB2quNspDRSWu%2Fn%2BRLc2Qj%2B6iw6cVjAsSI1vog0KhM%2BhUfCg1jrcXtw%2FiDAB6AxzDhDgLw8wGOLTdwYz7NaSEw58L3C8swD0SWFk%2Fzf4WSMjnMZ%2Bg3J5yft%2B%2BdQBaYpfQ%2FsQ9hr2QJvCu3&X-Amz-Signature=809ec4fd62a932f170effb501116cc0ca2058a1ffdd421fc614b37f1e65c2e8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLW5XQUU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFf4pdpAm5OIWa9vX04awR33bhuzDMsYkyMaEavHXn2CAiEA%2FXePwe2MlSxTbCEP4O0kJBXEuCGTPeOd6lg2qZAcVBEq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJaoEOnpqsd6HL0A3SrcA87mJpz7DOrjRDghbBew%2BkZA2xuo8Aupl6yJYH2XI1Z9dfVaoAcXv66a2FZSbJMChC1RVEFG2am3vLydm%2F9EyKavoZ81PId2g5z3N7LKsw6nFmngm13D3zgsw3jtBVJx7kJE3z7ecLeMpWHSIJF0cH8YccL%2Bh9s2jMpLw5ijJ43mtFJe1W1pKkqwT%2F%2F5dTQH93aNbELUAe4hD4LbKsqYk0ziEgIkfqBFZoN0P%2BA26kyGAUIEu%2FV3ytiSrj0h4lvfGaSJgorMT9DWzphWDAzgvJgUt36xR3z2TtOSn00WU%2FwyKq6MmXgkmYUWKVFu0ZLAARIrZf4RbCa0HzvklTkxnrR05LNC00IaCiaSIZrsjZzuadljEadLvgli3HnetiRcYuU6trnyqFBzQpqNB6WWxy5dX%2FQbI%2Fo48zGaRYw%2FZtVjtYbRp4RCjoON86LfDykXXDr7oOcoxaqwvPDUjgUH4e4mVL2gEeTB%2FPoi0BJqsygqjDfUVLjVsRD7IV2uI57%2BQLGQHi5RrK%2FPOZvqFST5DI1Hrvk5bQPznmXOwh48dJ%2B6VpQ6TYS9MFis%2B4zDQ6wpEOUBXdvGAxXwAQleOyX2jkgsWeV9ZJpOAxUVLW0vf4A%2B7bdoyxVyBvAiW5E0MIHavsQGOqUBLGNzkMdFkBTBW0altjWzDqAN7IR%2Fh2L42kVGqDcVi32pEXFCY29sUDcPPTqtXxUQahtgWcZMutKZnkbB2quNspDRSWu%2Fn%2BRLc2Qj%2B6iw6cVjAsSI1vog0KhM%2BhUfCg1jrcXtw%2FiDAB6AxzDhDgLw8wGOLTdwYz7NaSEw58L3C8swD0SWFk%2Fzf4WSMjnMZ%2Bg3J5yft%2B%2BdQBaYpfQ%2FsQ9hr2QJvCu3&X-Amz-Signature=6685c49b52b9492ec7b24e09cf3370c5b66dcbcbf4260adbae3bded6386f0011&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLW5XQUU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFf4pdpAm5OIWa9vX04awR33bhuzDMsYkyMaEavHXn2CAiEA%2FXePwe2MlSxTbCEP4O0kJBXEuCGTPeOd6lg2qZAcVBEq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJaoEOnpqsd6HL0A3SrcA87mJpz7DOrjRDghbBew%2BkZA2xuo8Aupl6yJYH2XI1Z9dfVaoAcXv66a2FZSbJMChC1RVEFG2am3vLydm%2F9EyKavoZ81PId2g5z3N7LKsw6nFmngm13D3zgsw3jtBVJx7kJE3z7ecLeMpWHSIJF0cH8YccL%2Bh9s2jMpLw5ijJ43mtFJe1W1pKkqwT%2F%2F5dTQH93aNbELUAe4hD4LbKsqYk0ziEgIkfqBFZoN0P%2BA26kyGAUIEu%2FV3ytiSrj0h4lvfGaSJgorMT9DWzphWDAzgvJgUt36xR3z2TtOSn00WU%2FwyKq6MmXgkmYUWKVFu0ZLAARIrZf4RbCa0HzvklTkxnrR05LNC00IaCiaSIZrsjZzuadljEadLvgli3HnetiRcYuU6trnyqFBzQpqNB6WWxy5dX%2FQbI%2Fo48zGaRYw%2FZtVjtYbRp4RCjoON86LfDykXXDr7oOcoxaqwvPDUjgUH4e4mVL2gEeTB%2FPoi0BJqsygqjDfUVLjVsRD7IV2uI57%2BQLGQHi5RrK%2FPOZvqFST5DI1Hrvk5bQPznmXOwh48dJ%2B6VpQ6TYS9MFis%2B4zDQ6wpEOUBXdvGAxXwAQleOyX2jkgsWeV9ZJpOAxUVLW0vf4A%2B7bdoyxVyBvAiW5E0MIHavsQGOqUBLGNzkMdFkBTBW0altjWzDqAN7IR%2Fh2L42kVGqDcVi32pEXFCY29sUDcPPTqtXxUQahtgWcZMutKZnkbB2quNspDRSWu%2Fn%2BRLc2Qj%2B6iw6cVjAsSI1vog0KhM%2BhUfCg1jrcXtw%2FiDAB6AxzDhDgLw8wGOLTdwYz7NaSEw58L3C8swD0SWFk%2Fzf4WSMjnMZ%2Bg3J5yft%2B%2BdQBaYpfQ%2FsQ9hr2QJvCu3&X-Amz-Signature=785c4811f417ac3aecc673234f0d352d9b83da1b72f2cd65a4de22836725a47f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLW5XQUU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFf4pdpAm5OIWa9vX04awR33bhuzDMsYkyMaEavHXn2CAiEA%2FXePwe2MlSxTbCEP4O0kJBXEuCGTPeOd6lg2qZAcVBEq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJaoEOnpqsd6HL0A3SrcA87mJpz7DOrjRDghbBew%2BkZA2xuo8Aupl6yJYH2XI1Z9dfVaoAcXv66a2FZSbJMChC1RVEFG2am3vLydm%2F9EyKavoZ81PId2g5z3N7LKsw6nFmngm13D3zgsw3jtBVJx7kJE3z7ecLeMpWHSIJF0cH8YccL%2Bh9s2jMpLw5ijJ43mtFJe1W1pKkqwT%2F%2F5dTQH93aNbELUAe4hD4LbKsqYk0ziEgIkfqBFZoN0P%2BA26kyGAUIEu%2FV3ytiSrj0h4lvfGaSJgorMT9DWzphWDAzgvJgUt36xR3z2TtOSn00WU%2FwyKq6MmXgkmYUWKVFu0ZLAARIrZf4RbCa0HzvklTkxnrR05LNC00IaCiaSIZrsjZzuadljEadLvgli3HnetiRcYuU6trnyqFBzQpqNB6WWxy5dX%2FQbI%2Fo48zGaRYw%2FZtVjtYbRp4RCjoON86LfDykXXDr7oOcoxaqwvPDUjgUH4e4mVL2gEeTB%2FPoi0BJqsygqjDfUVLjVsRD7IV2uI57%2BQLGQHi5RrK%2FPOZvqFST5DI1Hrvk5bQPznmXOwh48dJ%2B6VpQ6TYS9MFis%2B4zDQ6wpEOUBXdvGAxXwAQleOyX2jkgsWeV9ZJpOAxUVLW0vf4A%2B7bdoyxVyBvAiW5E0MIHavsQGOqUBLGNzkMdFkBTBW0altjWzDqAN7IR%2Fh2L42kVGqDcVi32pEXFCY29sUDcPPTqtXxUQahtgWcZMutKZnkbB2quNspDRSWu%2Fn%2BRLc2Qj%2B6iw6cVjAsSI1vog0KhM%2BhUfCg1jrcXtw%2FiDAB6AxzDhDgLw8wGOLTdwYz7NaSEw58L3C8swD0SWFk%2Fzf4WSMjnMZ%2Bg3J5yft%2B%2BdQBaYpfQ%2FsQ9hr2QJvCu3&X-Amz-Signature=5013d74d4cedad74965cb34a4a18e382fcc73568a377c04940a26876d7cfba00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLW5XQUU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFf4pdpAm5OIWa9vX04awR33bhuzDMsYkyMaEavHXn2CAiEA%2FXePwe2MlSxTbCEP4O0kJBXEuCGTPeOd6lg2qZAcVBEq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJaoEOnpqsd6HL0A3SrcA87mJpz7DOrjRDghbBew%2BkZA2xuo8Aupl6yJYH2XI1Z9dfVaoAcXv66a2FZSbJMChC1RVEFG2am3vLydm%2F9EyKavoZ81PId2g5z3N7LKsw6nFmngm13D3zgsw3jtBVJx7kJE3z7ecLeMpWHSIJF0cH8YccL%2Bh9s2jMpLw5ijJ43mtFJe1W1pKkqwT%2F%2F5dTQH93aNbELUAe4hD4LbKsqYk0ziEgIkfqBFZoN0P%2BA26kyGAUIEu%2FV3ytiSrj0h4lvfGaSJgorMT9DWzphWDAzgvJgUt36xR3z2TtOSn00WU%2FwyKq6MmXgkmYUWKVFu0ZLAARIrZf4RbCa0HzvklTkxnrR05LNC00IaCiaSIZrsjZzuadljEadLvgli3HnetiRcYuU6trnyqFBzQpqNB6WWxy5dX%2FQbI%2Fo48zGaRYw%2FZtVjtYbRp4RCjoON86LfDykXXDr7oOcoxaqwvPDUjgUH4e4mVL2gEeTB%2FPoi0BJqsygqjDfUVLjVsRD7IV2uI57%2BQLGQHi5RrK%2FPOZvqFST5DI1Hrvk5bQPznmXOwh48dJ%2B6VpQ6TYS9MFis%2B4zDQ6wpEOUBXdvGAxXwAQleOyX2jkgsWeV9ZJpOAxUVLW0vf4A%2B7bdoyxVyBvAiW5E0MIHavsQGOqUBLGNzkMdFkBTBW0altjWzDqAN7IR%2Fh2L42kVGqDcVi32pEXFCY29sUDcPPTqtXxUQahtgWcZMutKZnkbB2quNspDRSWu%2Fn%2BRLc2Qj%2B6iw6cVjAsSI1vog0KhM%2BhUfCg1jrcXtw%2FiDAB6AxzDhDgLw8wGOLTdwYz7NaSEw58L3C8swD0SWFk%2Fzf4WSMjnMZ%2Bg3J5yft%2B%2BdQBaYpfQ%2FsQ9hr2QJvCu3&X-Amz-Signature=a1158461f2f5440e50fb16b0cbc907cb14b8a6f6f57ad4606a501f7841511e06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLW5XQUU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFf4pdpAm5OIWa9vX04awR33bhuzDMsYkyMaEavHXn2CAiEA%2FXePwe2MlSxTbCEP4O0kJBXEuCGTPeOd6lg2qZAcVBEq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJaoEOnpqsd6HL0A3SrcA87mJpz7DOrjRDghbBew%2BkZA2xuo8Aupl6yJYH2XI1Z9dfVaoAcXv66a2FZSbJMChC1RVEFG2am3vLydm%2F9EyKavoZ81PId2g5z3N7LKsw6nFmngm13D3zgsw3jtBVJx7kJE3z7ecLeMpWHSIJF0cH8YccL%2Bh9s2jMpLw5ijJ43mtFJe1W1pKkqwT%2F%2F5dTQH93aNbELUAe4hD4LbKsqYk0ziEgIkfqBFZoN0P%2BA26kyGAUIEu%2FV3ytiSrj0h4lvfGaSJgorMT9DWzphWDAzgvJgUt36xR3z2TtOSn00WU%2FwyKq6MmXgkmYUWKVFu0ZLAARIrZf4RbCa0HzvklTkxnrR05LNC00IaCiaSIZrsjZzuadljEadLvgli3HnetiRcYuU6trnyqFBzQpqNB6WWxy5dX%2FQbI%2Fo48zGaRYw%2FZtVjtYbRp4RCjoON86LfDykXXDr7oOcoxaqwvPDUjgUH4e4mVL2gEeTB%2FPoi0BJqsygqjDfUVLjVsRD7IV2uI57%2BQLGQHi5RrK%2FPOZvqFST5DI1Hrvk5bQPznmXOwh48dJ%2B6VpQ6TYS9MFis%2B4zDQ6wpEOUBXdvGAxXwAQleOyX2jkgsWeV9ZJpOAxUVLW0vf4A%2B7bdoyxVyBvAiW5E0MIHavsQGOqUBLGNzkMdFkBTBW0altjWzDqAN7IR%2Fh2L42kVGqDcVi32pEXFCY29sUDcPPTqtXxUQahtgWcZMutKZnkbB2quNspDRSWu%2Fn%2BRLc2Qj%2B6iw6cVjAsSI1vog0KhM%2BhUfCg1jrcXtw%2FiDAB6AxzDhDgLw8wGOLTdwYz7NaSEw58L3C8swD0SWFk%2Fzf4WSMjnMZ%2Bg3J5yft%2B%2BdQBaYpfQ%2FsQ9hr2QJvCu3&X-Amz-Signature=eb85db7853945c8e7f6f99fcce80e5857e39257c1ec754cdf206d7045e45894f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLW5XQUU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFf4pdpAm5OIWa9vX04awR33bhuzDMsYkyMaEavHXn2CAiEA%2FXePwe2MlSxTbCEP4O0kJBXEuCGTPeOd6lg2qZAcVBEq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJaoEOnpqsd6HL0A3SrcA87mJpz7DOrjRDghbBew%2BkZA2xuo8Aupl6yJYH2XI1Z9dfVaoAcXv66a2FZSbJMChC1RVEFG2am3vLydm%2F9EyKavoZ81PId2g5z3N7LKsw6nFmngm13D3zgsw3jtBVJx7kJE3z7ecLeMpWHSIJF0cH8YccL%2Bh9s2jMpLw5ijJ43mtFJe1W1pKkqwT%2F%2F5dTQH93aNbELUAe4hD4LbKsqYk0ziEgIkfqBFZoN0P%2BA26kyGAUIEu%2FV3ytiSrj0h4lvfGaSJgorMT9DWzphWDAzgvJgUt36xR3z2TtOSn00WU%2FwyKq6MmXgkmYUWKVFu0ZLAARIrZf4RbCa0HzvklTkxnrR05LNC00IaCiaSIZrsjZzuadljEadLvgli3HnetiRcYuU6trnyqFBzQpqNB6WWxy5dX%2FQbI%2Fo48zGaRYw%2FZtVjtYbRp4RCjoON86LfDykXXDr7oOcoxaqwvPDUjgUH4e4mVL2gEeTB%2FPoi0BJqsygqjDfUVLjVsRD7IV2uI57%2BQLGQHi5RrK%2FPOZvqFST5DI1Hrvk5bQPznmXOwh48dJ%2B6VpQ6TYS9MFis%2B4zDQ6wpEOUBXdvGAxXwAQleOyX2jkgsWeV9ZJpOAxUVLW0vf4A%2B7bdoyxVyBvAiW5E0MIHavsQGOqUBLGNzkMdFkBTBW0altjWzDqAN7IR%2Fh2L42kVGqDcVi32pEXFCY29sUDcPPTqtXxUQahtgWcZMutKZnkbB2quNspDRSWu%2Fn%2BRLc2Qj%2B6iw6cVjAsSI1vog0KhM%2BhUfCg1jrcXtw%2FiDAB6AxzDhDgLw8wGOLTdwYz7NaSEw58L3C8swD0SWFk%2Fzf4WSMjnMZ%2Bg3J5yft%2B%2BdQBaYpfQ%2FsQ9hr2QJvCu3&X-Amz-Signature=8ef515f2717b16f22837cec47698cc694c4c65e3301aef4c5f0368afa37adf9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLW5XQUU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFf4pdpAm5OIWa9vX04awR33bhuzDMsYkyMaEavHXn2CAiEA%2FXePwe2MlSxTbCEP4O0kJBXEuCGTPeOd6lg2qZAcVBEq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJaoEOnpqsd6HL0A3SrcA87mJpz7DOrjRDghbBew%2BkZA2xuo8Aupl6yJYH2XI1Z9dfVaoAcXv66a2FZSbJMChC1RVEFG2am3vLydm%2F9EyKavoZ81PId2g5z3N7LKsw6nFmngm13D3zgsw3jtBVJx7kJE3z7ecLeMpWHSIJF0cH8YccL%2Bh9s2jMpLw5ijJ43mtFJe1W1pKkqwT%2F%2F5dTQH93aNbELUAe4hD4LbKsqYk0ziEgIkfqBFZoN0P%2BA26kyGAUIEu%2FV3ytiSrj0h4lvfGaSJgorMT9DWzphWDAzgvJgUt36xR3z2TtOSn00WU%2FwyKq6MmXgkmYUWKVFu0ZLAARIrZf4RbCa0HzvklTkxnrR05LNC00IaCiaSIZrsjZzuadljEadLvgli3HnetiRcYuU6trnyqFBzQpqNB6WWxy5dX%2FQbI%2Fo48zGaRYw%2FZtVjtYbRp4RCjoON86LfDykXXDr7oOcoxaqwvPDUjgUH4e4mVL2gEeTB%2FPoi0BJqsygqjDfUVLjVsRD7IV2uI57%2BQLGQHi5RrK%2FPOZvqFST5DI1Hrvk5bQPznmXOwh48dJ%2B6VpQ6TYS9MFis%2B4zDQ6wpEOUBXdvGAxXwAQleOyX2jkgsWeV9ZJpOAxUVLW0vf4A%2B7bdoyxVyBvAiW5E0MIHavsQGOqUBLGNzkMdFkBTBW0altjWzDqAN7IR%2Fh2L42kVGqDcVi32pEXFCY29sUDcPPTqtXxUQahtgWcZMutKZnkbB2quNspDRSWu%2Fn%2BRLc2Qj%2B6iw6cVjAsSI1vog0KhM%2BhUfCg1jrcXtw%2FiDAB6AxzDhDgLw8wGOLTdwYz7NaSEw58L3C8swD0SWFk%2Fzf4WSMjnMZ%2Bg3J5yft%2B%2BdQBaYpfQ%2FsQ9hr2QJvCu3&X-Amz-Signature=fa7e3f0dca5a4ac596cf20966a975aa77319ab1fcc8bc426045aec1474e11fc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLW5XQUU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFf4pdpAm5OIWa9vX04awR33bhuzDMsYkyMaEavHXn2CAiEA%2FXePwe2MlSxTbCEP4O0kJBXEuCGTPeOd6lg2qZAcVBEq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDJaoEOnpqsd6HL0A3SrcA87mJpz7DOrjRDghbBew%2BkZA2xuo8Aupl6yJYH2XI1Z9dfVaoAcXv66a2FZSbJMChC1RVEFG2am3vLydm%2F9EyKavoZ81PId2g5z3N7LKsw6nFmngm13D3zgsw3jtBVJx7kJE3z7ecLeMpWHSIJF0cH8YccL%2Bh9s2jMpLw5ijJ43mtFJe1W1pKkqwT%2F%2F5dTQH93aNbELUAe4hD4LbKsqYk0ziEgIkfqBFZoN0P%2BA26kyGAUIEu%2FV3ytiSrj0h4lvfGaSJgorMT9DWzphWDAzgvJgUt36xR3z2TtOSn00WU%2FwyKq6MmXgkmYUWKVFu0ZLAARIrZf4RbCa0HzvklTkxnrR05LNC00IaCiaSIZrsjZzuadljEadLvgli3HnetiRcYuU6trnyqFBzQpqNB6WWxy5dX%2FQbI%2Fo48zGaRYw%2FZtVjtYbRp4RCjoON86LfDykXXDr7oOcoxaqwvPDUjgUH4e4mVL2gEeTB%2FPoi0BJqsygqjDfUVLjVsRD7IV2uI57%2BQLGQHi5RrK%2FPOZvqFST5DI1Hrvk5bQPznmXOwh48dJ%2B6VpQ6TYS9MFis%2B4zDQ6wpEOUBXdvGAxXwAQleOyX2jkgsWeV9ZJpOAxUVLW0vf4A%2B7bdoyxVyBvAiW5E0MIHavsQGOqUBLGNzkMdFkBTBW0altjWzDqAN7IR%2Fh2L42kVGqDcVi32pEXFCY29sUDcPPTqtXxUQahtgWcZMutKZnkbB2quNspDRSWu%2Fn%2BRLc2Qj%2B6iw6cVjAsSI1vog0KhM%2BhUfCg1jrcXtw%2FiDAB6AxzDhDgLw8wGOLTdwYz7NaSEw58L3C8swD0SWFk%2Fzf4WSMjnMZ%2Bg3J5yft%2B%2BdQBaYpfQ%2FsQ9hr2QJvCu3&X-Amz-Signature=410a40c983a69ff74b0cb3b90397ce61da9751ce50e5b87833bb71366baba87f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
