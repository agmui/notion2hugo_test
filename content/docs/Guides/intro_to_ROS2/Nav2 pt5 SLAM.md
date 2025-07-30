---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-30T06:25:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCJL2IL4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD22Kak06ImTOgP9DYE963WRe2QTH0Saq4TknqbwpeEWwIhAKcowkwTHcqOW9ruRz9ebukw8zepb5znm6x%2FGxGpG%2Bf0KogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxosnGZqYVW7oL8V6Qq3AMcQHcr70YKDTnFh%2FK9XpRRxawyJTn%2Fg1qaaZ5LmJVinzUcmLSvLtcpRPSwYX8n1AExjg%2FK%2B1JRSRO9UpB3hZ%2FFq6vkgghGTzPtH8WwkZzFSrFH8XiF86yikdgvevpRD60Y9vRAmL6UdQ6HIrK25gspRdvVfSTGBX9aV16KP61h4bj4l%2Ff%2FQXDP9cNhmFOADmaoX18M7jEtJu73aGsn8iGUOZJe5UMupXDwAIWZ80NFbrdxQgeXZnWcWSM2L1fXtMW%2B3XiT8RcGuiBojmkbEc%2FIkPIH%2FiQs2yzJZ%2FZbODuLvLqBgI6xgXKUl%2FY6WcYjMUywmS521346DE7t6VeszRvoLLXZKH3XLKNsbidljiCM1RbPR0oNzeDjCFKnwUGoafw219jCwKMDFb7Ug%2BlsRhLaxmrjwB2UwOsxkwMBt2rMywud8YiNc9fbCAo3XzUQlPd8V8gqSYZrT31BWNBp3JwbOVqzP5gZD0EzWgmsEXN2CL%2FaGEzA4jkH6uz27pV5i4L23ba%2FfL4eeRkaeXhZFEe2PJa%2B7X54pUO%2B2Vgt1maJlRSTqO%2FvpSHMR2lGfa3C%2BrLX6cXjfQ0AkN9YKH7brZjylJhsKZM5%2Byj6gDL4PA5pc2LCcqBKA4e79YDMjTCboqjEBjqkAbhLbdqtYmFnhYRjL%2BEmAF%2BBaMsnFr6t8p6sQ68JyvtABHLEwtYXfEjxqPpwIuYsFH2Dm%2F1qOhvKrzXTv5QfhNx7ChfxjyMuA7iES6SZPdXdW8EKiHutEy3cZBDBlMa7S008OwX7gNCUROEN3M%2B%2FUUkjhtWV10C5%2B%2BIW2JDuRnl5n%2FdudgTAWlznEME%2F61N3Qu5kPhh2YXwKO5uu2RqIZnB1dk7%2B&X-Amz-Signature=ca5c3650f3967298c70b98392568358db8526ff59ebc56263098ea9b3fe2b743&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCJL2IL4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD22Kak06ImTOgP9DYE963WRe2QTH0Saq4TknqbwpeEWwIhAKcowkwTHcqOW9ruRz9ebukw8zepb5znm6x%2FGxGpG%2Bf0KogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxosnGZqYVW7oL8V6Qq3AMcQHcr70YKDTnFh%2FK9XpRRxawyJTn%2Fg1qaaZ5LmJVinzUcmLSvLtcpRPSwYX8n1AExjg%2FK%2B1JRSRO9UpB3hZ%2FFq6vkgghGTzPtH8WwkZzFSrFH8XiF86yikdgvevpRD60Y9vRAmL6UdQ6HIrK25gspRdvVfSTGBX9aV16KP61h4bj4l%2Ff%2FQXDP9cNhmFOADmaoX18M7jEtJu73aGsn8iGUOZJe5UMupXDwAIWZ80NFbrdxQgeXZnWcWSM2L1fXtMW%2B3XiT8RcGuiBojmkbEc%2FIkPIH%2FiQs2yzJZ%2FZbODuLvLqBgI6xgXKUl%2FY6WcYjMUywmS521346DE7t6VeszRvoLLXZKH3XLKNsbidljiCM1RbPR0oNzeDjCFKnwUGoafw219jCwKMDFb7Ug%2BlsRhLaxmrjwB2UwOsxkwMBt2rMywud8YiNc9fbCAo3XzUQlPd8V8gqSYZrT31BWNBp3JwbOVqzP5gZD0EzWgmsEXN2CL%2FaGEzA4jkH6uz27pV5i4L23ba%2FfL4eeRkaeXhZFEe2PJa%2B7X54pUO%2B2Vgt1maJlRSTqO%2FvpSHMR2lGfa3C%2BrLX6cXjfQ0AkN9YKH7brZjylJhsKZM5%2Byj6gDL4PA5pc2LCcqBKA4e79YDMjTCboqjEBjqkAbhLbdqtYmFnhYRjL%2BEmAF%2BBaMsnFr6t8p6sQ68JyvtABHLEwtYXfEjxqPpwIuYsFH2Dm%2F1qOhvKrzXTv5QfhNx7ChfxjyMuA7iES6SZPdXdW8EKiHutEy3cZBDBlMa7S008OwX7gNCUROEN3M%2B%2FUUkjhtWV10C5%2B%2BIW2JDuRnl5n%2FdudgTAWlznEME%2F61N3Qu5kPhh2YXwKO5uu2RqIZnB1dk7%2B&X-Amz-Signature=93001328daf3b75407b604f3704f7df733fc9638706e8126a6dc576f61b372e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCJL2IL4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD22Kak06ImTOgP9DYE963WRe2QTH0Saq4TknqbwpeEWwIhAKcowkwTHcqOW9ruRz9ebukw8zepb5znm6x%2FGxGpG%2Bf0KogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxosnGZqYVW7oL8V6Qq3AMcQHcr70YKDTnFh%2FK9XpRRxawyJTn%2Fg1qaaZ5LmJVinzUcmLSvLtcpRPSwYX8n1AExjg%2FK%2B1JRSRO9UpB3hZ%2FFq6vkgghGTzPtH8WwkZzFSrFH8XiF86yikdgvevpRD60Y9vRAmL6UdQ6HIrK25gspRdvVfSTGBX9aV16KP61h4bj4l%2Ff%2FQXDP9cNhmFOADmaoX18M7jEtJu73aGsn8iGUOZJe5UMupXDwAIWZ80NFbrdxQgeXZnWcWSM2L1fXtMW%2B3XiT8RcGuiBojmkbEc%2FIkPIH%2FiQs2yzJZ%2FZbODuLvLqBgI6xgXKUl%2FY6WcYjMUywmS521346DE7t6VeszRvoLLXZKH3XLKNsbidljiCM1RbPR0oNzeDjCFKnwUGoafw219jCwKMDFb7Ug%2BlsRhLaxmrjwB2UwOsxkwMBt2rMywud8YiNc9fbCAo3XzUQlPd8V8gqSYZrT31BWNBp3JwbOVqzP5gZD0EzWgmsEXN2CL%2FaGEzA4jkH6uz27pV5i4L23ba%2FfL4eeRkaeXhZFEe2PJa%2B7X54pUO%2B2Vgt1maJlRSTqO%2FvpSHMR2lGfa3C%2BrLX6cXjfQ0AkN9YKH7brZjylJhsKZM5%2Byj6gDL4PA5pc2LCcqBKA4e79YDMjTCboqjEBjqkAbhLbdqtYmFnhYRjL%2BEmAF%2BBaMsnFr6t8p6sQ68JyvtABHLEwtYXfEjxqPpwIuYsFH2Dm%2F1qOhvKrzXTv5QfhNx7ChfxjyMuA7iES6SZPdXdW8EKiHutEy3cZBDBlMa7S008OwX7gNCUROEN3M%2B%2FUUkjhtWV10C5%2B%2BIW2JDuRnl5n%2FdudgTAWlznEME%2F61N3Qu5kPhh2YXwKO5uu2RqIZnB1dk7%2B&X-Amz-Signature=8d173163269f7570a642be6f3e25de60475245468dbd842b302cc7da29ba09fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCJL2IL4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD22Kak06ImTOgP9DYE963WRe2QTH0Saq4TknqbwpeEWwIhAKcowkwTHcqOW9ruRz9ebukw8zepb5znm6x%2FGxGpG%2Bf0KogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxosnGZqYVW7oL8V6Qq3AMcQHcr70YKDTnFh%2FK9XpRRxawyJTn%2Fg1qaaZ5LmJVinzUcmLSvLtcpRPSwYX8n1AExjg%2FK%2B1JRSRO9UpB3hZ%2FFq6vkgghGTzPtH8WwkZzFSrFH8XiF86yikdgvevpRD60Y9vRAmL6UdQ6HIrK25gspRdvVfSTGBX9aV16KP61h4bj4l%2Ff%2FQXDP9cNhmFOADmaoX18M7jEtJu73aGsn8iGUOZJe5UMupXDwAIWZ80NFbrdxQgeXZnWcWSM2L1fXtMW%2B3XiT8RcGuiBojmkbEc%2FIkPIH%2FiQs2yzJZ%2FZbODuLvLqBgI6xgXKUl%2FY6WcYjMUywmS521346DE7t6VeszRvoLLXZKH3XLKNsbidljiCM1RbPR0oNzeDjCFKnwUGoafw219jCwKMDFb7Ug%2BlsRhLaxmrjwB2UwOsxkwMBt2rMywud8YiNc9fbCAo3XzUQlPd8V8gqSYZrT31BWNBp3JwbOVqzP5gZD0EzWgmsEXN2CL%2FaGEzA4jkH6uz27pV5i4L23ba%2FfL4eeRkaeXhZFEe2PJa%2B7X54pUO%2B2Vgt1maJlRSTqO%2FvpSHMR2lGfa3C%2BrLX6cXjfQ0AkN9YKH7brZjylJhsKZM5%2Byj6gDL4PA5pc2LCcqBKA4e79YDMjTCboqjEBjqkAbhLbdqtYmFnhYRjL%2BEmAF%2BBaMsnFr6t8p6sQ68JyvtABHLEwtYXfEjxqPpwIuYsFH2Dm%2F1qOhvKrzXTv5QfhNx7ChfxjyMuA7iES6SZPdXdW8EKiHutEy3cZBDBlMa7S008OwX7gNCUROEN3M%2B%2FUUkjhtWV10C5%2B%2BIW2JDuRnl5n%2FdudgTAWlznEME%2F61N3Qu5kPhh2YXwKO5uu2RqIZnB1dk7%2B&X-Amz-Signature=45191e772f453516da7a6c4b60917bb11a95d421f2206cc5ba106dc9a6faef4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCJL2IL4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD22Kak06ImTOgP9DYE963WRe2QTH0Saq4TknqbwpeEWwIhAKcowkwTHcqOW9ruRz9ebukw8zepb5znm6x%2FGxGpG%2Bf0KogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxosnGZqYVW7oL8V6Qq3AMcQHcr70YKDTnFh%2FK9XpRRxawyJTn%2Fg1qaaZ5LmJVinzUcmLSvLtcpRPSwYX8n1AExjg%2FK%2B1JRSRO9UpB3hZ%2FFq6vkgghGTzPtH8WwkZzFSrFH8XiF86yikdgvevpRD60Y9vRAmL6UdQ6HIrK25gspRdvVfSTGBX9aV16KP61h4bj4l%2Ff%2FQXDP9cNhmFOADmaoX18M7jEtJu73aGsn8iGUOZJe5UMupXDwAIWZ80NFbrdxQgeXZnWcWSM2L1fXtMW%2B3XiT8RcGuiBojmkbEc%2FIkPIH%2FiQs2yzJZ%2FZbODuLvLqBgI6xgXKUl%2FY6WcYjMUywmS521346DE7t6VeszRvoLLXZKH3XLKNsbidljiCM1RbPR0oNzeDjCFKnwUGoafw219jCwKMDFb7Ug%2BlsRhLaxmrjwB2UwOsxkwMBt2rMywud8YiNc9fbCAo3XzUQlPd8V8gqSYZrT31BWNBp3JwbOVqzP5gZD0EzWgmsEXN2CL%2FaGEzA4jkH6uz27pV5i4L23ba%2FfL4eeRkaeXhZFEe2PJa%2B7X54pUO%2B2Vgt1maJlRSTqO%2FvpSHMR2lGfa3C%2BrLX6cXjfQ0AkN9YKH7brZjylJhsKZM5%2Byj6gDL4PA5pc2LCcqBKA4e79YDMjTCboqjEBjqkAbhLbdqtYmFnhYRjL%2BEmAF%2BBaMsnFr6t8p6sQ68JyvtABHLEwtYXfEjxqPpwIuYsFH2Dm%2F1qOhvKrzXTv5QfhNx7ChfxjyMuA7iES6SZPdXdW8EKiHutEy3cZBDBlMa7S008OwX7gNCUROEN3M%2B%2FUUkjhtWV10C5%2B%2BIW2JDuRnl5n%2FdudgTAWlznEME%2F61N3Qu5kPhh2YXwKO5uu2RqIZnB1dk7%2B&X-Amz-Signature=c278350403547c0c19c77b414537df8b6eb8c42ef9e9456a8ffeb204d3505b17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCJL2IL4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD22Kak06ImTOgP9DYE963WRe2QTH0Saq4TknqbwpeEWwIhAKcowkwTHcqOW9ruRz9ebukw8zepb5znm6x%2FGxGpG%2Bf0KogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxosnGZqYVW7oL8V6Qq3AMcQHcr70YKDTnFh%2FK9XpRRxawyJTn%2Fg1qaaZ5LmJVinzUcmLSvLtcpRPSwYX8n1AExjg%2FK%2B1JRSRO9UpB3hZ%2FFq6vkgghGTzPtH8WwkZzFSrFH8XiF86yikdgvevpRD60Y9vRAmL6UdQ6HIrK25gspRdvVfSTGBX9aV16KP61h4bj4l%2Ff%2FQXDP9cNhmFOADmaoX18M7jEtJu73aGsn8iGUOZJe5UMupXDwAIWZ80NFbrdxQgeXZnWcWSM2L1fXtMW%2B3XiT8RcGuiBojmkbEc%2FIkPIH%2FiQs2yzJZ%2FZbODuLvLqBgI6xgXKUl%2FY6WcYjMUywmS521346DE7t6VeszRvoLLXZKH3XLKNsbidljiCM1RbPR0oNzeDjCFKnwUGoafw219jCwKMDFb7Ug%2BlsRhLaxmrjwB2UwOsxkwMBt2rMywud8YiNc9fbCAo3XzUQlPd8V8gqSYZrT31BWNBp3JwbOVqzP5gZD0EzWgmsEXN2CL%2FaGEzA4jkH6uz27pV5i4L23ba%2FfL4eeRkaeXhZFEe2PJa%2B7X54pUO%2B2Vgt1maJlRSTqO%2FvpSHMR2lGfa3C%2BrLX6cXjfQ0AkN9YKH7brZjylJhsKZM5%2Byj6gDL4PA5pc2LCcqBKA4e79YDMjTCboqjEBjqkAbhLbdqtYmFnhYRjL%2BEmAF%2BBaMsnFr6t8p6sQ68JyvtABHLEwtYXfEjxqPpwIuYsFH2Dm%2F1qOhvKrzXTv5QfhNx7ChfxjyMuA7iES6SZPdXdW8EKiHutEy3cZBDBlMa7S008OwX7gNCUROEN3M%2B%2FUUkjhtWV10C5%2B%2BIW2JDuRnl5n%2FdudgTAWlznEME%2F61N3Qu5kPhh2YXwKO5uu2RqIZnB1dk7%2B&X-Amz-Signature=d5f7bdd7e49fbd0456df5d0a0a2349d1b348fdb679ec325cd9d7d7432665eeab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCJL2IL4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD22Kak06ImTOgP9DYE963WRe2QTH0Saq4TknqbwpeEWwIhAKcowkwTHcqOW9ruRz9ebukw8zepb5znm6x%2FGxGpG%2Bf0KogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxosnGZqYVW7oL8V6Qq3AMcQHcr70YKDTnFh%2FK9XpRRxawyJTn%2Fg1qaaZ5LmJVinzUcmLSvLtcpRPSwYX8n1AExjg%2FK%2B1JRSRO9UpB3hZ%2FFq6vkgghGTzPtH8WwkZzFSrFH8XiF86yikdgvevpRD60Y9vRAmL6UdQ6HIrK25gspRdvVfSTGBX9aV16KP61h4bj4l%2Ff%2FQXDP9cNhmFOADmaoX18M7jEtJu73aGsn8iGUOZJe5UMupXDwAIWZ80NFbrdxQgeXZnWcWSM2L1fXtMW%2B3XiT8RcGuiBojmkbEc%2FIkPIH%2FiQs2yzJZ%2FZbODuLvLqBgI6xgXKUl%2FY6WcYjMUywmS521346DE7t6VeszRvoLLXZKH3XLKNsbidljiCM1RbPR0oNzeDjCFKnwUGoafw219jCwKMDFb7Ug%2BlsRhLaxmrjwB2UwOsxkwMBt2rMywud8YiNc9fbCAo3XzUQlPd8V8gqSYZrT31BWNBp3JwbOVqzP5gZD0EzWgmsEXN2CL%2FaGEzA4jkH6uz27pV5i4L23ba%2FfL4eeRkaeXhZFEe2PJa%2B7X54pUO%2B2Vgt1maJlRSTqO%2FvpSHMR2lGfa3C%2BrLX6cXjfQ0AkN9YKH7brZjylJhsKZM5%2Byj6gDL4PA5pc2LCcqBKA4e79YDMjTCboqjEBjqkAbhLbdqtYmFnhYRjL%2BEmAF%2BBaMsnFr6t8p6sQ68JyvtABHLEwtYXfEjxqPpwIuYsFH2Dm%2F1qOhvKrzXTv5QfhNx7ChfxjyMuA7iES6SZPdXdW8EKiHutEy3cZBDBlMa7S008OwX7gNCUROEN3M%2B%2FUUkjhtWV10C5%2B%2BIW2JDuRnl5n%2FdudgTAWlznEME%2F61N3Qu5kPhh2YXwKO5uu2RqIZnB1dk7%2B&X-Amz-Signature=8c5fe73e51eba2f6959c5752a8dde302cd93d959e46d4fbec5e363106cf629df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCJL2IL4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD22Kak06ImTOgP9DYE963WRe2QTH0Saq4TknqbwpeEWwIhAKcowkwTHcqOW9ruRz9ebukw8zepb5znm6x%2FGxGpG%2Bf0KogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxosnGZqYVW7oL8V6Qq3AMcQHcr70YKDTnFh%2FK9XpRRxawyJTn%2Fg1qaaZ5LmJVinzUcmLSvLtcpRPSwYX8n1AExjg%2FK%2B1JRSRO9UpB3hZ%2FFq6vkgghGTzPtH8WwkZzFSrFH8XiF86yikdgvevpRD60Y9vRAmL6UdQ6HIrK25gspRdvVfSTGBX9aV16KP61h4bj4l%2Ff%2FQXDP9cNhmFOADmaoX18M7jEtJu73aGsn8iGUOZJe5UMupXDwAIWZ80NFbrdxQgeXZnWcWSM2L1fXtMW%2B3XiT8RcGuiBojmkbEc%2FIkPIH%2FiQs2yzJZ%2FZbODuLvLqBgI6xgXKUl%2FY6WcYjMUywmS521346DE7t6VeszRvoLLXZKH3XLKNsbidljiCM1RbPR0oNzeDjCFKnwUGoafw219jCwKMDFb7Ug%2BlsRhLaxmrjwB2UwOsxkwMBt2rMywud8YiNc9fbCAo3XzUQlPd8V8gqSYZrT31BWNBp3JwbOVqzP5gZD0EzWgmsEXN2CL%2FaGEzA4jkH6uz27pV5i4L23ba%2FfL4eeRkaeXhZFEe2PJa%2B7X54pUO%2B2Vgt1maJlRSTqO%2FvpSHMR2lGfa3C%2BrLX6cXjfQ0AkN9YKH7brZjylJhsKZM5%2Byj6gDL4PA5pc2LCcqBKA4e79YDMjTCboqjEBjqkAbhLbdqtYmFnhYRjL%2BEmAF%2BBaMsnFr6t8p6sQ68JyvtABHLEwtYXfEjxqPpwIuYsFH2Dm%2F1qOhvKrzXTv5QfhNx7ChfxjyMuA7iES6SZPdXdW8EKiHutEy3cZBDBlMa7S008OwX7gNCUROEN3M%2B%2FUUkjhtWV10C5%2B%2BIW2JDuRnl5n%2FdudgTAWlznEME%2F61N3Qu5kPhh2YXwKO5uu2RqIZnB1dk7%2B&X-Amz-Signature=8299086da17986aac738d9bd8e154b0fbbe3b99a0777bfaa4701f722293a6af4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCJL2IL4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD22Kak06ImTOgP9DYE963WRe2QTH0Saq4TknqbwpeEWwIhAKcowkwTHcqOW9ruRz9ebukw8zepb5znm6x%2FGxGpG%2Bf0KogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxosnGZqYVW7oL8V6Qq3AMcQHcr70YKDTnFh%2FK9XpRRxawyJTn%2Fg1qaaZ5LmJVinzUcmLSvLtcpRPSwYX8n1AExjg%2FK%2B1JRSRO9UpB3hZ%2FFq6vkgghGTzPtH8WwkZzFSrFH8XiF86yikdgvevpRD60Y9vRAmL6UdQ6HIrK25gspRdvVfSTGBX9aV16KP61h4bj4l%2Ff%2FQXDP9cNhmFOADmaoX18M7jEtJu73aGsn8iGUOZJe5UMupXDwAIWZ80NFbrdxQgeXZnWcWSM2L1fXtMW%2B3XiT8RcGuiBojmkbEc%2FIkPIH%2FiQs2yzJZ%2FZbODuLvLqBgI6xgXKUl%2FY6WcYjMUywmS521346DE7t6VeszRvoLLXZKH3XLKNsbidljiCM1RbPR0oNzeDjCFKnwUGoafw219jCwKMDFb7Ug%2BlsRhLaxmrjwB2UwOsxkwMBt2rMywud8YiNc9fbCAo3XzUQlPd8V8gqSYZrT31BWNBp3JwbOVqzP5gZD0EzWgmsEXN2CL%2FaGEzA4jkH6uz27pV5i4L23ba%2FfL4eeRkaeXhZFEe2PJa%2B7X54pUO%2B2Vgt1maJlRSTqO%2FvpSHMR2lGfa3C%2BrLX6cXjfQ0AkN9YKH7brZjylJhsKZM5%2Byj6gDL4PA5pc2LCcqBKA4e79YDMjTCboqjEBjqkAbhLbdqtYmFnhYRjL%2BEmAF%2BBaMsnFr6t8p6sQ68JyvtABHLEwtYXfEjxqPpwIuYsFH2Dm%2F1qOhvKrzXTv5QfhNx7ChfxjyMuA7iES6SZPdXdW8EKiHutEy3cZBDBlMa7S008OwX7gNCUROEN3M%2B%2FUUkjhtWV10C5%2B%2BIW2JDuRnl5n%2FdudgTAWlznEME%2F61N3Qu5kPhh2YXwKO5uu2RqIZnB1dk7%2B&X-Amz-Signature=6dc8e0a4d9b62135865a72be3583a688bfe55a7f4b5e1f76124f356a4ce19e04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCJL2IL4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD22Kak06ImTOgP9DYE963WRe2QTH0Saq4TknqbwpeEWwIhAKcowkwTHcqOW9ruRz9ebukw8zepb5znm6x%2FGxGpG%2Bf0KogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxosnGZqYVW7oL8V6Qq3AMcQHcr70YKDTnFh%2FK9XpRRxawyJTn%2Fg1qaaZ5LmJVinzUcmLSvLtcpRPSwYX8n1AExjg%2FK%2B1JRSRO9UpB3hZ%2FFq6vkgghGTzPtH8WwkZzFSrFH8XiF86yikdgvevpRD60Y9vRAmL6UdQ6HIrK25gspRdvVfSTGBX9aV16KP61h4bj4l%2Ff%2FQXDP9cNhmFOADmaoX18M7jEtJu73aGsn8iGUOZJe5UMupXDwAIWZ80NFbrdxQgeXZnWcWSM2L1fXtMW%2B3XiT8RcGuiBojmkbEc%2FIkPIH%2FiQs2yzJZ%2FZbODuLvLqBgI6xgXKUl%2FY6WcYjMUywmS521346DE7t6VeszRvoLLXZKH3XLKNsbidljiCM1RbPR0oNzeDjCFKnwUGoafw219jCwKMDFb7Ug%2BlsRhLaxmrjwB2UwOsxkwMBt2rMywud8YiNc9fbCAo3XzUQlPd8V8gqSYZrT31BWNBp3JwbOVqzP5gZD0EzWgmsEXN2CL%2FaGEzA4jkH6uz27pV5i4L23ba%2FfL4eeRkaeXhZFEe2PJa%2B7X54pUO%2B2Vgt1maJlRSTqO%2FvpSHMR2lGfa3C%2BrLX6cXjfQ0AkN9YKH7brZjylJhsKZM5%2Byj6gDL4PA5pc2LCcqBKA4e79YDMjTCboqjEBjqkAbhLbdqtYmFnhYRjL%2BEmAF%2BBaMsnFr6t8p6sQ68JyvtABHLEwtYXfEjxqPpwIuYsFH2Dm%2F1qOhvKrzXTv5QfhNx7ChfxjyMuA7iES6SZPdXdW8EKiHutEy3cZBDBlMa7S008OwX7gNCUROEN3M%2B%2FUUkjhtWV10C5%2B%2BIW2JDuRnl5n%2FdudgTAWlznEME%2F61N3Qu5kPhh2YXwKO5uu2RqIZnB1dk7%2B&X-Amz-Signature=d38ef52214305f0d4a3632b31658071eba53ef7871a77e76f88002b202046a19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCJL2IL4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD22Kak06ImTOgP9DYE963WRe2QTH0Saq4TknqbwpeEWwIhAKcowkwTHcqOW9ruRz9ebukw8zepb5znm6x%2FGxGpG%2Bf0KogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxosnGZqYVW7oL8V6Qq3AMcQHcr70YKDTnFh%2FK9XpRRxawyJTn%2Fg1qaaZ5LmJVinzUcmLSvLtcpRPSwYX8n1AExjg%2FK%2B1JRSRO9UpB3hZ%2FFq6vkgghGTzPtH8WwkZzFSrFH8XiF86yikdgvevpRD60Y9vRAmL6UdQ6HIrK25gspRdvVfSTGBX9aV16KP61h4bj4l%2Ff%2FQXDP9cNhmFOADmaoX18M7jEtJu73aGsn8iGUOZJe5UMupXDwAIWZ80NFbrdxQgeXZnWcWSM2L1fXtMW%2B3XiT8RcGuiBojmkbEc%2FIkPIH%2FiQs2yzJZ%2FZbODuLvLqBgI6xgXKUl%2FY6WcYjMUywmS521346DE7t6VeszRvoLLXZKH3XLKNsbidljiCM1RbPR0oNzeDjCFKnwUGoafw219jCwKMDFb7Ug%2BlsRhLaxmrjwB2UwOsxkwMBt2rMywud8YiNc9fbCAo3XzUQlPd8V8gqSYZrT31BWNBp3JwbOVqzP5gZD0EzWgmsEXN2CL%2FaGEzA4jkH6uz27pV5i4L23ba%2FfL4eeRkaeXhZFEe2PJa%2B7X54pUO%2B2Vgt1maJlRSTqO%2FvpSHMR2lGfa3C%2BrLX6cXjfQ0AkN9YKH7brZjylJhsKZM5%2Byj6gDL4PA5pc2LCcqBKA4e79YDMjTCboqjEBjqkAbhLbdqtYmFnhYRjL%2BEmAF%2BBaMsnFr6t8p6sQ68JyvtABHLEwtYXfEjxqPpwIuYsFH2Dm%2F1qOhvKrzXTv5QfhNx7ChfxjyMuA7iES6SZPdXdW8EKiHutEy3cZBDBlMa7S008OwX7gNCUROEN3M%2B%2FUUkjhtWV10C5%2B%2BIW2JDuRnl5n%2FdudgTAWlznEME%2F61N3Qu5kPhh2YXwKO5uu2RqIZnB1dk7%2B&X-Amz-Signature=6d9037b61b02514548158a1638d6dff3cf20df6063802577b051747962d83045&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCJL2IL4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD22Kak06ImTOgP9DYE963WRe2QTH0Saq4TknqbwpeEWwIhAKcowkwTHcqOW9ruRz9ebukw8zepb5znm6x%2FGxGpG%2Bf0KogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxosnGZqYVW7oL8V6Qq3AMcQHcr70YKDTnFh%2FK9XpRRxawyJTn%2Fg1qaaZ5LmJVinzUcmLSvLtcpRPSwYX8n1AExjg%2FK%2B1JRSRO9UpB3hZ%2FFq6vkgghGTzPtH8WwkZzFSrFH8XiF86yikdgvevpRD60Y9vRAmL6UdQ6HIrK25gspRdvVfSTGBX9aV16KP61h4bj4l%2Ff%2FQXDP9cNhmFOADmaoX18M7jEtJu73aGsn8iGUOZJe5UMupXDwAIWZ80NFbrdxQgeXZnWcWSM2L1fXtMW%2B3XiT8RcGuiBojmkbEc%2FIkPIH%2FiQs2yzJZ%2FZbODuLvLqBgI6xgXKUl%2FY6WcYjMUywmS521346DE7t6VeszRvoLLXZKH3XLKNsbidljiCM1RbPR0oNzeDjCFKnwUGoafw219jCwKMDFb7Ug%2BlsRhLaxmrjwB2UwOsxkwMBt2rMywud8YiNc9fbCAo3XzUQlPd8V8gqSYZrT31BWNBp3JwbOVqzP5gZD0EzWgmsEXN2CL%2FaGEzA4jkH6uz27pV5i4L23ba%2FfL4eeRkaeXhZFEe2PJa%2B7X54pUO%2B2Vgt1maJlRSTqO%2FvpSHMR2lGfa3C%2BrLX6cXjfQ0AkN9YKH7brZjylJhsKZM5%2Byj6gDL4PA5pc2LCcqBKA4e79YDMjTCboqjEBjqkAbhLbdqtYmFnhYRjL%2BEmAF%2BBaMsnFr6t8p6sQ68JyvtABHLEwtYXfEjxqPpwIuYsFH2Dm%2F1qOhvKrzXTv5QfhNx7ChfxjyMuA7iES6SZPdXdW8EKiHutEy3cZBDBlMa7S008OwX7gNCUROEN3M%2B%2FUUkjhtWV10C5%2B%2BIW2JDuRnl5n%2FdudgTAWlznEME%2F61N3Qu5kPhh2YXwKO5uu2RqIZnB1dk7%2B&X-Amz-Signature=4e896ec9364c793393e17509bb6906bd4cb0357217a366156a22c465b74dd453&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCJL2IL4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD22Kak06ImTOgP9DYE963WRe2QTH0Saq4TknqbwpeEWwIhAKcowkwTHcqOW9ruRz9ebukw8zepb5znm6x%2FGxGpG%2Bf0KogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxosnGZqYVW7oL8V6Qq3AMcQHcr70YKDTnFh%2FK9XpRRxawyJTn%2Fg1qaaZ5LmJVinzUcmLSvLtcpRPSwYX8n1AExjg%2FK%2B1JRSRO9UpB3hZ%2FFq6vkgghGTzPtH8WwkZzFSrFH8XiF86yikdgvevpRD60Y9vRAmL6UdQ6HIrK25gspRdvVfSTGBX9aV16KP61h4bj4l%2Ff%2FQXDP9cNhmFOADmaoX18M7jEtJu73aGsn8iGUOZJe5UMupXDwAIWZ80NFbrdxQgeXZnWcWSM2L1fXtMW%2B3XiT8RcGuiBojmkbEc%2FIkPIH%2FiQs2yzJZ%2FZbODuLvLqBgI6xgXKUl%2FY6WcYjMUywmS521346DE7t6VeszRvoLLXZKH3XLKNsbidljiCM1RbPR0oNzeDjCFKnwUGoafw219jCwKMDFb7Ug%2BlsRhLaxmrjwB2UwOsxkwMBt2rMywud8YiNc9fbCAo3XzUQlPd8V8gqSYZrT31BWNBp3JwbOVqzP5gZD0EzWgmsEXN2CL%2FaGEzA4jkH6uz27pV5i4L23ba%2FfL4eeRkaeXhZFEe2PJa%2B7X54pUO%2B2Vgt1maJlRSTqO%2FvpSHMR2lGfa3C%2BrLX6cXjfQ0AkN9YKH7brZjylJhsKZM5%2Byj6gDL4PA5pc2LCcqBKA4e79YDMjTCboqjEBjqkAbhLbdqtYmFnhYRjL%2BEmAF%2BBaMsnFr6t8p6sQ68JyvtABHLEwtYXfEjxqPpwIuYsFH2Dm%2F1qOhvKrzXTv5QfhNx7ChfxjyMuA7iES6SZPdXdW8EKiHutEy3cZBDBlMa7S008OwX7gNCUROEN3M%2B%2FUUkjhtWV10C5%2B%2BIW2JDuRnl5n%2FdudgTAWlznEME%2F61N3Qu5kPhh2YXwKO5uu2RqIZnB1dk7%2B&X-Amz-Signature=72a3eea8f4a13f3faa07bc844b92d191430ed824105f44b1fd208c7d3190d228&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCJL2IL4%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD22Kak06ImTOgP9DYE963WRe2QTH0Saq4TknqbwpeEWwIhAKcowkwTHcqOW9ruRz9ebukw8zepb5znm6x%2FGxGpG%2Bf0KogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxosnGZqYVW7oL8V6Qq3AMcQHcr70YKDTnFh%2FK9XpRRxawyJTn%2Fg1qaaZ5LmJVinzUcmLSvLtcpRPSwYX8n1AExjg%2FK%2B1JRSRO9UpB3hZ%2FFq6vkgghGTzPtH8WwkZzFSrFH8XiF86yikdgvevpRD60Y9vRAmL6UdQ6HIrK25gspRdvVfSTGBX9aV16KP61h4bj4l%2Ff%2FQXDP9cNhmFOADmaoX18M7jEtJu73aGsn8iGUOZJe5UMupXDwAIWZ80NFbrdxQgeXZnWcWSM2L1fXtMW%2B3XiT8RcGuiBojmkbEc%2FIkPIH%2FiQs2yzJZ%2FZbODuLvLqBgI6xgXKUl%2FY6WcYjMUywmS521346DE7t6VeszRvoLLXZKH3XLKNsbidljiCM1RbPR0oNzeDjCFKnwUGoafw219jCwKMDFb7Ug%2BlsRhLaxmrjwB2UwOsxkwMBt2rMywud8YiNc9fbCAo3XzUQlPd8V8gqSYZrT31BWNBp3JwbOVqzP5gZD0EzWgmsEXN2CL%2FaGEzA4jkH6uz27pV5i4L23ba%2FfL4eeRkaeXhZFEe2PJa%2B7X54pUO%2B2Vgt1maJlRSTqO%2FvpSHMR2lGfa3C%2BrLX6cXjfQ0AkN9YKH7brZjylJhsKZM5%2Byj6gDL4PA5pc2LCcqBKA4e79YDMjTCboqjEBjqkAbhLbdqtYmFnhYRjL%2BEmAF%2BBaMsnFr6t8p6sQ68JyvtABHLEwtYXfEjxqPpwIuYsFH2Dm%2F1qOhvKrzXTv5QfhNx7ChfxjyMuA7iES6SZPdXdW8EKiHutEy3cZBDBlMa7S008OwX7gNCUROEN3M%2B%2FUUkjhtWV10C5%2B%2BIW2JDuRnl5n%2FdudgTAWlznEME%2F61N3Qu5kPhh2YXwKO5uu2RqIZnB1dk7%2B&X-Amz-Signature=090c7cb6a6f15305bc76cc3773fd96bf67903781da414ca7b06d2bb9e899d53b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
