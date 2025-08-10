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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TU3KXY5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2Bs0BosnPnXtkCWssf1Hbb1vGzeKedIHYwoo5AKMcjOAiB%2FdpxxVlszygvask%2FNtAtfhoOALMzpdLwJ7OPmBSKj8CqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZDegilw5KEPmjggGKtwD1jpUE63JunW0ItkMSdlB40GWMhTYO7VtS9brkJQWvCL6XSPZBReLAf%2F%2B6G0IV51xC32H5v7TAe2QPL06%2BTcQOoXbn7qME7G5rPE9an2I3I6mAvKrlj5XSUviP8ovR3KfWPudUDfe4XW38jtFyb8aNkzpjkL9iAKTtekasDloodFtmKqDcvyGIAYDNHOZoVC%2B%2FAQALjrTVqtf%2BYOcLzZFUrntIUZ59oP6V4yqFpkk8rS5k2A7F%2BX9UIKGm4od%2BoZQpV8BUHVEtSlqeUA5aMZlA9lldc%2BuJFGEzo3rk8MhiKKwmgJ0OTeuulsgwcLFkaB4TMndLNrYnDtG%2BRS%2ByVpq9Gy7%2BMMd9kgdXWgL3ZfPA6akVXh%2BUPBDRTefr5V2CxPmXgQkjyE9Sz3ToPx3EGvw%2FYn%2BUHDX28KxYev0dPO8xl1gaBZTh0P0dpqkRFixBN8YrVJzvIHAbOF7bMTnDJnP62Gn%2F43BtDHn0lmJl3ZfceIQqsNZc6KfBVZ8PRuMTZdLj%2BNxzCEfWhXIIvfShvEaFYEbxRLoyowk3n0eEhOdXsBo8PPPbj1qIE3Wqm%2FPSpfrxBoAx2uTSrypSu6ZnDZOEmC422tU4%2F2wrJIW2e1fZfuwSMohaynjjund9M8wj%2FXgxAY6pgEwIeTamm2De9mK6epOyI9ngHablNdR1uuY1EE4zsykLFi7452CnenuBkpxa%2BHKOhXPhEqWSJZlbz%2BHxarlJMM%2FKifHF7yhSzHcvg144DI0O7m5DhWS%2Fql4mtYqHqzeLlIGQHQ6jSgojWyoNSsKnQnaKgAjED9D9xIePN1ijb3I5KpmWtjkyOYK%2FH10W1Bb%2Bj6Cwdare3xTL0DDgDABRSniOhSf2K5J&X-Amz-Signature=2e0011c689c629efcd491511ee9691b36975c51ee4b3cd081563d411f0727f5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TU3KXY5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2Bs0BosnPnXtkCWssf1Hbb1vGzeKedIHYwoo5AKMcjOAiB%2FdpxxVlszygvask%2FNtAtfhoOALMzpdLwJ7OPmBSKj8CqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZDegilw5KEPmjggGKtwD1jpUE63JunW0ItkMSdlB40GWMhTYO7VtS9brkJQWvCL6XSPZBReLAf%2F%2B6G0IV51xC32H5v7TAe2QPL06%2BTcQOoXbn7qME7G5rPE9an2I3I6mAvKrlj5XSUviP8ovR3KfWPudUDfe4XW38jtFyb8aNkzpjkL9iAKTtekasDloodFtmKqDcvyGIAYDNHOZoVC%2B%2FAQALjrTVqtf%2BYOcLzZFUrntIUZ59oP6V4yqFpkk8rS5k2A7F%2BX9UIKGm4od%2BoZQpV8BUHVEtSlqeUA5aMZlA9lldc%2BuJFGEzo3rk8MhiKKwmgJ0OTeuulsgwcLFkaB4TMndLNrYnDtG%2BRS%2ByVpq9Gy7%2BMMd9kgdXWgL3ZfPA6akVXh%2BUPBDRTefr5V2CxPmXgQkjyE9Sz3ToPx3EGvw%2FYn%2BUHDX28KxYev0dPO8xl1gaBZTh0P0dpqkRFixBN8YrVJzvIHAbOF7bMTnDJnP62Gn%2F43BtDHn0lmJl3ZfceIQqsNZc6KfBVZ8PRuMTZdLj%2BNxzCEfWhXIIvfShvEaFYEbxRLoyowk3n0eEhOdXsBo8PPPbj1qIE3Wqm%2FPSpfrxBoAx2uTSrypSu6ZnDZOEmC422tU4%2F2wrJIW2e1fZfuwSMohaynjjund9M8wj%2FXgxAY6pgEwIeTamm2De9mK6epOyI9ngHablNdR1uuY1EE4zsykLFi7452CnenuBkpxa%2BHKOhXPhEqWSJZlbz%2BHxarlJMM%2FKifHF7yhSzHcvg144DI0O7m5DhWS%2Fql4mtYqHqzeLlIGQHQ6jSgojWyoNSsKnQnaKgAjED9D9xIePN1ijb3I5KpmWtjkyOYK%2FH10W1Bb%2Bj6Cwdare3xTL0DDgDABRSniOhSf2K5J&X-Amz-Signature=d8dc5fd923bfc9ad9f6233a9201c8194315d2a1368cdf0afb5094c6b0e32d362&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TU3KXY5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2Bs0BosnPnXtkCWssf1Hbb1vGzeKedIHYwoo5AKMcjOAiB%2FdpxxVlszygvask%2FNtAtfhoOALMzpdLwJ7OPmBSKj8CqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZDegilw5KEPmjggGKtwD1jpUE63JunW0ItkMSdlB40GWMhTYO7VtS9brkJQWvCL6XSPZBReLAf%2F%2B6G0IV51xC32H5v7TAe2QPL06%2BTcQOoXbn7qME7G5rPE9an2I3I6mAvKrlj5XSUviP8ovR3KfWPudUDfe4XW38jtFyb8aNkzpjkL9iAKTtekasDloodFtmKqDcvyGIAYDNHOZoVC%2B%2FAQALjrTVqtf%2BYOcLzZFUrntIUZ59oP6V4yqFpkk8rS5k2A7F%2BX9UIKGm4od%2BoZQpV8BUHVEtSlqeUA5aMZlA9lldc%2BuJFGEzo3rk8MhiKKwmgJ0OTeuulsgwcLFkaB4TMndLNrYnDtG%2BRS%2ByVpq9Gy7%2BMMd9kgdXWgL3ZfPA6akVXh%2BUPBDRTefr5V2CxPmXgQkjyE9Sz3ToPx3EGvw%2FYn%2BUHDX28KxYev0dPO8xl1gaBZTh0P0dpqkRFixBN8YrVJzvIHAbOF7bMTnDJnP62Gn%2F43BtDHn0lmJl3ZfceIQqsNZc6KfBVZ8PRuMTZdLj%2BNxzCEfWhXIIvfShvEaFYEbxRLoyowk3n0eEhOdXsBo8PPPbj1qIE3Wqm%2FPSpfrxBoAx2uTSrypSu6ZnDZOEmC422tU4%2F2wrJIW2e1fZfuwSMohaynjjund9M8wj%2FXgxAY6pgEwIeTamm2De9mK6epOyI9ngHablNdR1uuY1EE4zsykLFi7452CnenuBkpxa%2BHKOhXPhEqWSJZlbz%2BHxarlJMM%2FKifHF7yhSzHcvg144DI0O7m5DhWS%2Fql4mtYqHqzeLlIGQHQ6jSgojWyoNSsKnQnaKgAjED9D9xIePN1ijb3I5KpmWtjkyOYK%2FH10W1Bb%2Bj6Cwdare3xTL0DDgDABRSniOhSf2K5J&X-Amz-Signature=d59db1bdfa836468c6e8f60a234bd5582989d7c292ec99c754af86b6d4354a5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TU3KXY5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2Bs0BosnPnXtkCWssf1Hbb1vGzeKedIHYwoo5AKMcjOAiB%2FdpxxVlszygvask%2FNtAtfhoOALMzpdLwJ7OPmBSKj8CqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZDegilw5KEPmjggGKtwD1jpUE63JunW0ItkMSdlB40GWMhTYO7VtS9brkJQWvCL6XSPZBReLAf%2F%2B6G0IV51xC32H5v7TAe2QPL06%2BTcQOoXbn7qME7G5rPE9an2I3I6mAvKrlj5XSUviP8ovR3KfWPudUDfe4XW38jtFyb8aNkzpjkL9iAKTtekasDloodFtmKqDcvyGIAYDNHOZoVC%2B%2FAQALjrTVqtf%2BYOcLzZFUrntIUZ59oP6V4yqFpkk8rS5k2A7F%2BX9UIKGm4od%2BoZQpV8BUHVEtSlqeUA5aMZlA9lldc%2BuJFGEzo3rk8MhiKKwmgJ0OTeuulsgwcLFkaB4TMndLNrYnDtG%2BRS%2ByVpq9Gy7%2BMMd9kgdXWgL3ZfPA6akVXh%2BUPBDRTefr5V2CxPmXgQkjyE9Sz3ToPx3EGvw%2FYn%2BUHDX28KxYev0dPO8xl1gaBZTh0P0dpqkRFixBN8YrVJzvIHAbOF7bMTnDJnP62Gn%2F43BtDHn0lmJl3ZfceIQqsNZc6KfBVZ8PRuMTZdLj%2BNxzCEfWhXIIvfShvEaFYEbxRLoyowk3n0eEhOdXsBo8PPPbj1qIE3Wqm%2FPSpfrxBoAx2uTSrypSu6ZnDZOEmC422tU4%2F2wrJIW2e1fZfuwSMohaynjjund9M8wj%2FXgxAY6pgEwIeTamm2De9mK6epOyI9ngHablNdR1uuY1EE4zsykLFi7452CnenuBkpxa%2BHKOhXPhEqWSJZlbz%2BHxarlJMM%2FKifHF7yhSzHcvg144DI0O7m5DhWS%2Fql4mtYqHqzeLlIGQHQ6jSgojWyoNSsKnQnaKgAjED9D9xIePN1ijb3I5KpmWtjkyOYK%2FH10W1Bb%2Bj6Cwdare3xTL0DDgDABRSniOhSf2K5J&X-Amz-Signature=820b82e74bd9cef9d2b5df6f1a88d2d0283ab73b15af8613ba24963ce5e7d796&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TU3KXY5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2Bs0BosnPnXtkCWssf1Hbb1vGzeKedIHYwoo5AKMcjOAiB%2FdpxxVlszygvask%2FNtAtfhoOALMzpdLwJ7OPmBSKj8CqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZDegilw5KEPmjggGKtwD1jpUE63JunW0ItkMSdlB40GWMhTYO7VtS9brkJQWvCL6XSPZBReLAf%2F%2B6G0IV51xC32H5v7TAe2QPL06%2BTcQOoXbn7qME7G5rPE9an2I3I6mAvKrlj5XSUviP8ovR3KfWPudUDfe4XW38jtFyb8aNkzpjkL9iAKTtekasDloodFtmKqDcvyGIAYDNHOZoVC%2B%2FAQALjrTVqtf%2BYOcLzZFUrntIUZ59oP6V4yqFpkk8rS5k2A7F%2BX9UIKGm4od%2BoZQpV8BUHVEtSlqeUA5aMZlA9lldc%2BuJFGEzo3rk8MhiKKwmgJ0OTeuulsgwcLFkaB4TMndLNrYnDtG%2BRS%2ByVpq9Gy7%2BMMd9kgdXWgL3ZfPA6akVXh%2BUPBDRTefr5V2CxPmXgQkjyE9Sz3ToPx3EGvw%2FYn%2BUHDX28KxYev0dPO8xl1gaBZTh0P0dpqkRFixBN8YrVJzvIHAbOF7bMTnDJnP62Gn%2F43BtDHn0lmJl3ZfceIQqsNZc6KfBVZ8PRuMTZdLj%2BNxzCEfWhXIIvfShvEaFYEbxRLoyowk3n0eEhOdXsBo8PPPbj1qIE3Wqm%2FPSpfrxBoAx2uTSrypSu6ZnDZOEmC422tU4%2F2wrJIW2e1fZfuwSMohaynjjund9M8wj%2FXgxAY6pgEwIeTamm2De9mK6epOyI9ngHablNdR1uuY1EE4zsykLFi7452CnenuBkpxa%2BHKOhXPhEqWSJZlbz%2BHxarlJMM%2FKifHF7yhSzHcvg144DI0O7m5DhWS%2Fql4mtYqHqzeLlIGQHQ6jSgojWyoNSsKnQnaKgAjED9D9xIePN1ijb3I5KpmWtjkyOYK%2FH10W1Bb%2Bj6Cwdare3xTL0DDgDABRSniOhSf2K5J&X-Amz-Signature=9cbc0c981e005a5f596071725845ca3a885eb53f42394423bf874c08ae771b45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TU3KXY5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2Bs0BosnPnXtkCWssf1Hbb1vGzeKedIHYwoo5AKMcjOAiB%2FdpxxVlszygvask%2FNtAtfhoOALMzpdLwJ7OPmBSKj8CqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZDegilw5KEPmjggGKtwD1jpUE63JunW0ItkMSdlB40GWMhTYO7VtS9brkJQWvCL6XSPZBReLAf%2F%2B6G0IV51xC32H5v7TAe2QPL06%2BTcQOoXbn7qME7G5rPE9an2I3I6mAvKrlj5XSUviP8ovR3KfWPudUDfe4XW38jtFyb8aNkzpjkL9iAKTtekasDloodFtmKqDcvyGIAYDNHOZoVC%2B%2FAQALjrTVqtf%2BYOcLzZFUrntIUZ59oP6V4yqFpkk8rS5k2A7F%2BX9UIKGm4od%2BoZQpV8BUHVEtSlqeUA5aMZlA9lldc%2BuJFGEzo3rk8MhiKKwmgJ0OTeuulsgwcLFkaB4TMndLNrYnDtG%2BRS%2ByVpq9Gy7%2BMMd9kgdXWgL3ZfPA6akVXh%2BUPBDRTefr5V2CxPmXgQkjyE9Sz3ToPx3EGvw%2FYn%2BUHDX28KxYev0dPO8xl1gaBZTh0P0dpqkRFixBN8YrVJzvIHAbOF7bMTnDJnP62Gn%2F43BtDHn0lmJl3ZfceIQqsNZc6KfBVZ8PRuMTZdLj%2BNxzCEfWhXIIvfShvEaFYEbxRLoyowk3n0eEhOdXsBo8PPPbj1qIE3Wqm%2FPSpfrxBoAx2uTSrypSu6ZnDZOEmC422tU4%2F2wrJIW2e1fZfuwSMohaynjjund9M8wj%2FXgxAY6pgEwIeTamm2De9mK6epOyI9ngHablNdR1uuY1EE4zsykLFi7452CnenuBkpxa%2BHKOhXPhEqWSJZlbz%2BHxarlJMM%2FKifHF7yhSzHcvg144DI0O7m5DhWS%2Fql4mtYqHqzeLlIGQHQ6jSgojWyoNSsKnQnaKgAjED9D9xIePN1ijb3I5KpmWtjkyOYK%2FH10W1Bb%2Bj6Cwdare3xTL0DDgDABRSniOhSf2K5J&X-Amz-Signature=7e4109ff63f31c0dbf7a7084f80b677c830322e248d900b3141c4ca796f12be2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TU3KXY5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2Bs0BosnPnXtkCWssf1Hbb1vGzeKedIHYwoo5AKMcjOAiB%2FdpxxVlszygvask%2FNtAtfhoOALMzpdLwJ7OPmBSKj8CqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZDegilw5KEPmjggGKtwD1jpUE63JunW0ItkMSdlB40GWMhTYO7VtS9brkJQWvCL6XSPZBReLAf%2F%2B6G0IV51xC32H5v7TAe2QPL06%2BTcQOoXbn7qME7G5rPE9an2I3I6mAvKrlj5XSUviP8ovR3KfWPudUDfe4XW38jtFyb8aNkzpjkL9iAKTtekasDloodFtmKqDcvyGIAYDNHOZoVC%2B%2FAQALjrTVqtf%2BYOcLzZFUrntIUZ59oP6V4yqFpkk8rS5k2A7F%2BX9UIKGm4od%2BoZQpV8BUHVEtSlqeUA5aMZlA9lldc%2BuJFGEzo3rk8MhiKKwmgJ0OTeuulsgwcLFkaB4TMndLNrYnDtG%2BRS%2ByVpq9Gy7%2BMMd9kgdXWgL3ZfPA6akVXh%2BUPBDRTefr5V2CxPmXgQkjyE9Sz3ToPx3EGvw%2FYn%2BUHDX28KxYev0dPO8xl1gaBZTh0P0dpqkRFixBN8YrVJzvIHAbOF7bMTnDJnP62Gn%2F43BtDHn0lmJl3ZfceIQqsNZc6KfBVZ8PRuMTZdLj%2BNxzCEfWhXIIvfShvEaFYEbxRLoyowk3n0eEhOdXsBo8PPPbj1qIE3Wqm%2FPSpfrxBoAx2uTSrypSu6ZnDZOEmC422tU4%2F2wrJIW2e1fZfuwSMohaynjjund9M8wj%2FXgxAY6pgEwIeTamm2De9mK6epOyI9ngHablNdR1uuY1EE4zsykLFi7452CnenuBkpxa%2BHKOhXPhEqWSJZlbz%2BHxarlJMM%2FKifHF7yhSzHcvg144DI0O7m5DhWS%2Fql4mtYqHqzeLlIGQHQ6jSgojWyoNSsKnQnaKgAjED9D9xIePN1ijb3I5KpmWtjkyOYK%2FH10W1Bb%2Bj6Cwdare3xTL0DDgDABRSniOhSf2K5J&X-Amz-Signature=81049e3e71749531e381689c046f3d01e30c1fd39c656de90a6b36a9fbf8106a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TU3KXY5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2Bs0BosnPnXtkCWssf1Hbb1vGzeKedIHYwoo5AKMcjOAiB%2FdpxxVlszygvask%2FNtAtfhoOALMzpdLwJ7OPmBSKj8CqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZDegilw5KEPmjggGKtwD1jpUE63JunW0ItkMSdlB40GWMhTYO7VtS9brkJQWvCL6XSPZBReLAf%2F%2B6G0IV51xC32H5v7TAe2QPL06%2BTcQOoXbn7qME7G5rPE9an2I3I6mAvKrlj5XSUviP8ovR3KfWPudUDfe4XW38jtFyb8aNkzpjkL9iAKTtekasDloodFtmKqDcvyGIAYDNHOZoVC%2B%2FAQALjrTVqtf%2BYOcLzZFUrntIUZ59oP6V4yqFpkk8rS5k2A7F%2BX9UIKGm4od%2BoZQpV8BUHVEtSlqeUA5aMZlA9lldc%2BuJFGEzo3rk8MhiKKwmgJ0OTeuulsgwcLFkaB4TMndLNrYnDtG%2BRS%2ByVpq9Gy7%2BMMd9kgdXWgL3ZfPA6akVXh%2BUPBDRTefr5V2CxPmXgQkjyE9Sz3ToPx3EGvw%2FYn%2BUHDX28KxYev0dPO8xl1gaBZTh0P0dpqkRFixBN8YrVJzvIHAbOF7bMTnDJnP62Gn%2F43BtDHn0lmJl3ZfceIQqsNZc6KfBVZ8PRuMTZdLj%2BNxzCEfWhXIIvfShvEaFYEbxRLoyowk3n0eEhOdXsBo8PPPbj1qIE3Wqm%2FPSpfrxBoAx2uTSrypSu6ZnDZOEmC422tU4%2F2wrJIW2e1fZfuwSMohaynjjund9M8wj%2FXgxAY6pgEwIeTamm2De9mK6epOyI9ngHablNdR1uuY1EE4zsykLFi7452CnenuBkpxa%2BHKOhXPhEqWSJZlbz%2BHxarlJMM%2FKifHF7yhSzHcvg144DI0O7m5DhWS%2Fql4mtYqHqzeLlIGQHQ6jSgojWyoNSsKnQnaKgAjED9D9xIePN1ijb3I5KpmWtjkyOYK%2FH10W1Bb%2Bj6Cwdare3xTL0DDgDABRSniOhSf2K5J&X-Amz-Signature=9d376540cca32897b8de98e3164c254fd3c5de519fc71280718fcf7c3061985d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TU3KXY5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2Bs0BosnPnXtkCWssf1Hbb1vGzeKedIHYwoo5AKMcjOAiB%2FdpxxVlszygvask%2FNtAtfhoOALMzpdLwJ7OPmBSKj8CqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZDegilw5KEPmjggGKtwD1jpUE63JunW0ItkMSdlB40GWMhTYO7VtS9brkJQWvCL6XSPZBReLAf%2F%2B6G0IV51xC32H5v7TAe2QPL06%2BTcQOoXbn7qME7G5rPE9an2I3I6mAvKrlj5XSUviP8ovR3KfWPudUDfe4XW38jtFyb8aNkzpjkL9iAKTtekasDloodFtmKqDcvyGIAYDNHOZoVC%2B%2FAQALjrTVqtf%2BYOcLzZFUrntIUZ59oP6V4yqFpkk8rS5k2A7F%2BX9UIKGm4od%2BoZQpV8BUHVEtSlqeUA5aMZlA9lldc%2BuJFGEzo3rk8MhiKKwmgJ0OTeuulsgwcLFkaB4TMndLNrYnDtG%2BRS%2ByVpq9Gy7%2BMMd9kgdXWgL3ZfPA6akVXh%2BUPBDRTefr5V2CxPmXgQkjyE9Sz3ToPx3EGvw%2FYn%2BUHDX28KxYev0dPO8xl1gaBZTh0P0dpqkRFixBN8YrVJzvIHAbOF7bMTnDJnP62Gn%2F43BtDHn0lmJl3ZfceIQqsNZc6KfBVZ8PRuMTZdLj%2BNxzCEfWhXIIvfShvEaFYEbxRLoyowk3n0eEhOdXsBo8PPPbj1qIE3Wqm%2FPSpfrxBoAx2uTSrypSu6ZnDZOEmC422tU4%2F2wrJIW2e1fZfuwSMohaynjjund9M8wj%2FXgxAY6pgEwIeTamm2De9mK6epOyI9ngHablNdR1uuY1EE4zsykLFi7452CnenuBkpxa%2BHKOhXPhEqWSJZlbz%2BHxarlJMM%2FKifHF7yhSzHcvg144DI0O7m5DhWS%2Fql4mtYqHqzeLlIGQHQ6jSgojWyoNSsKnQnaKgAjED9D9xIePN1ijb3I5KpmWtjkyOYK%2FH10W1Bb%2Bj6Cwdare3xTL0DDgDABRSniOhSf2K5J&X-Amz-Signature=67e1cfd61b9058cd0718a8dde19204c92e40ef70bc57c9f086b3b52aff004391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TU3KXY5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2Bs0BosnPnXtkCWssf1Hbb1vGzeKedIHYwoo5AKMcjOAiB%2FdpxxVlszygvask%2FNtAtfhoOALMzpdLwJ7OPmBSKj8CqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZDegilw5KEPmjggGKtwD1jpUE63JunW0ItkMSdlB40GWMhTYO7VtS9brkJQWvCL6XSPZBReLAf%2F%2B6G0IV51xC32H5v7TAe2QPL06%2BTcQOoXbn7qME7G5rPE9an2I3I6mAvKrlj5XSUviP8ovR3KfWPudUDfe4XW38jtFyb8aNkzpjkL9iAKTtekasDloodFtmKqDcvyGIAYDNHOZoVC%2B%2FAQALjrTVqtf%2BYOcLzZFUrntIUZ59oP6V4yqFpkk8rS5k2A7F%2BX9UIKGm4od%2BoZQpV8BUHVEtSlqeUA5aMZlA9lldc%2BuJFGEzo3rk8MhiKKwmgJ0OTeuulsgwcLFkaB4TMndLNrYnDtG%2BRS%2ByVpq9Gy7%2BMMd9kgdXWgL3ZfPA6akVXh%2BUPBDRTefr5V2CxPmXgQkjyE9Sz3ToPx3EGvw%2FYn%2BUHDX28KxYev0dPO8xl1gaBZTh0P0dpqkRFixBN8YrVJzvIHAbOF7bMTnDJnP62Gn%2F43BtDHn0lmJl3ZfceIQqsNZc6KfBVZ8PRuMTZdLj%2BNxzCEfWhXIIvfShvEaFYEbxRLoyowk3n0eEhOdXsBo8PPPbj1qIE3Wqm%2FPSpfrxBoAx2uTSrypSu6ZnDZOEmC422tU4%2F2wrJIW2e1fZfuwSMohaynjjund9M8wj%2FXgxAY6pgEwIeTamm2De9mK6epOyI9ngHablNdR1uuY1EE4zsykLFi7452CnenuBkpxa%2BHKOhXPhEqWSJZlbz%2BHxarlJMM%2FKifHF7yhSzHcvg144DI0O7m5DhWS%2Fql4mtYqHqzeLlIGQHQ6jSgojWyoNSsKnQnaKgAjED9D9xIePN1ijb3I5KpmWtjkyOYK%2FH10W1Bb%2Bj6Cwdare3xTL0DDgDABRSniOhSf2K5J&X-Amz-Signature=19b6ad329e24e1be166ab25a29af89ee46b723365774d5a4b421159a19b5bf5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TU3KXY5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2Bs0BosnPnXtkCWssf1Hbb1vGzeKedIHYwoo5AKMcjOAiB%2FdpxxVlszygvask%2FNtAtfhoOALMzpdLwJ7OPmBSKj8CqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZDegilw5KEPmjggGKtwD1jpUE63JunW0ItkMSdlB40GWMhTYO7VtS9brkJQWvCL6XSPZBReLAf%2F%2B6G0IV51xC32H5v7TAe2QPL06%2BTcQOoXbn7qME7G5rPE9an2I3I6mAvKrlj5XSUviP8ovR3KfWPudUDfe4XW38jtFyb8aNkzpjkL9iAKTtekasDloodFtmKqDcvyGIAYDNHOZoVC%2B%2FAQALjrTVqtf%2BYOcLzZFUrntIUZ59oP6V4yqFpkk8rS5k2A7F%2BX9UIKGm4od%2BoZQpV8BUHVEtSlqeUA5aMZlA9lldc%2BuJFGEzo3rk8MhiKKwmgJ0OTeuulsgwcLFkaB4TMndLNrYnDtG%2BRS%2ByVpq9Gy7%2BMMd9kgdXWgL3ZfPA6akVXh%2BUPBDRTefr5V2CxPmXgQkjyE9Sz3ToPx3EGvw%2FYn%2BUHDX28KxYev0dPO8xl1gaBZTh0P0dpqkRFixBN8YrVJzvIHAbOF7bMTnDJnP62Gn%2F43BtDHn0lmJl3ZfceIQqsNZc6KfBVZ8PRuMTZdLj%2BNxzCEfWhXIIvfShvEaFYEbxRLoyowk3n0eEhOdXsBo8PPPbj1qIE3Wqm%2FPSpfrxBoAx2uTSrypSu6ZnDZOEmC422tU4%2F2wrJIW2e1fZfuwSMohaynjjund9M8wj%2FXgxAY6pgEwIeTamm2De9mK6epOyI9ngHablNdR1uuY1EE4zsykLFi7452CnenuBkpxa%2BHKOhXPhEqWSJZlbz%2BHxarlJMM%2FKifHF7yhSzHcvg144DI0O7m5DhWS%2Fql4mtYqHqzeLlIGQHQ6jSgojWyoNSsKnQnaKgAjED9D9xIePN1ijb3I5KpmWtjkyOYK%2FH10W1Bb%2Bj6Cwdare3xTL0DDgDABRSniOhSf2K5J&X-Amz-Signature=9d5282b57e83202abee874a48c2bd9e4afe42a17c4722ebc10d059cdb12f2fbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TU3KXY5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2Bs0BosnPnXtkCWssf1Hbb1vGzeKedIHYwoo5AKMcjOAiB%2FdpxxVlszygvask%2FNtAtfhoOALMzpdLwJ7OPmBSKj8CqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZDegilw5KEPmjggGKtwD1jpUE63JunW0ItkMSdlB40GWMhTYO7VtS9brkJQWvCL6XSPZBReLAf%2F%2B6G0IV51xC32H5v7TAe2QPL06%2BTcQOoXbn7qME7G5rPE9an2I3I6mAvKrlj5XSUviP8ovR3KfWPudUDfe4XW38jtFyb8aNkzpjkL9iAKTtekasDloodFtmKqDcvyGIAYDNHOZoVC%2B%2FAQALjrTVqtf%2BYOcLzZFUrntIUZ59oP6V4yqFpkk8rS5k2A7F%2BX9UIKGm4od%2BoZQpV8BUHVEtSlqeUA5aMZlA9lldc%2BuJFGEzo3rk8MhiKKwmgJ0OTeuulsgwcLFkaB4TMndLNrYnDtG%2BRS%2ByVpq9Gy7%2BMMd9kgdXWgL3ZfPA6akVXh%2BUPBDRTefr5V2CxPmXgQkjyE9Sz3ToPx3EGvw%2FYn%2BUHDX28KxYev0dPO8xl1gaBZTh0P0dpqkRFixBN8YrVJzvIHAbOF7bMTnDJnP62Gn%2F43BtDHn0lmJl3ZfceIQqsNZc6KfBVZ8PRuMTZdLj%2BNxzCEfWhXIIvfShvEaFYEbxRLoyowk3n0eEhOdXsBo8PPPbj1qIE3Wqm%2FPSpfrxBoAx2uTSrypSu6ZnDZOEmC422tU4%2F2wrJIW2e1fZfuwSMohaynjjund9M8wj%2FXgxAY6pgEwIeTamm2De9mK6epOyI9ngHablNdR1uuY1EE4zsykLFi7452CnenuBkpxa%2BHKOhXPhEqWSJZlbz%2BHxarlJMM%2FKifHF7yhSzHcvg144DI0O7m5DhWS%2Fql4mtYqHqzeLlIGQHQ6jSgojWyoNSsKnQnaKgAjED9D9xIePN1ijb3I5KpmWtjkyOYK%2FH10W1Bb%2Bj6Cwdare3xTL0DDgDABRSniOhSf2K5J&X-Amz-Signature=a94e671e392ad3458c23da694359ef3e0d81a0e924843617072ef48ff245cca4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TU3KXY5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2Bs0BosnPnXtkCWssf1Hbb1vGzeKedIHYwoo5AKMcjOAiB%2FdpxxVlszygvask%2FNtAtfhoOALMzpdLwJ7OPmBSKj8CqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZDegilw5KEPmjggGKtwD1jpUE63JunW0ItkMSdlB40GWMhTYO7VtS9brkJQWvCL6XSPZBReLAf%2F%2B6G0IV51xC32H5v7TAe2QPL06%2BTcQOoXbn7qME7G5rPE9an2I3I6mAvKrlj5XSUviP8ovR3KfWPudUDfe4XW38jtFyb8aNkzpjkL9iAKTtekasDloodFtmKqDcvyGIAYDNHOZoVC%2B%2FAQALjrTVqtf%2BYOcLzZFUrntIUZ59oP6V4yqFpkk8rS5k2A7F%2BX9UIKGm4od%2BoZQpV8BUHVEtSlqeUA5aMZlA9lldc%2BuJFGEzo3rk8MhiKKwmgJ0OTeuulsgwcLFkaB4TMndLNrYnDtG%2BRS%2ByVpq9Gy7%2BMMd9kgdXWgL3ZfPA6akVXh%2BUPBDRTefr5V2CxPmXgQkjyE9Sz3ToPx3EGvw%2FYn%2BUHDX28KxYev0dPO8xl1gaBZTh0P0dpqkRFixBN8YrVJzvIHAbOF7bMTnDJnP62Gn%2F43BtDHn0lmJl3ZfceIQqsNZc6KfBVZ8PRuMTZdLj%2BNxzCEfWhXIIvfShvEaFYEbxRLoyowk3n0eEhOdXsBo8PPPbj1qIE3Wqm%2FPSpfrxBoAx2uTSrypSu6ZnDZOEmC422tU4%2F2wrJIW2e1fZfuwSMohaynjjund9M8wj%2FXgxAY6pgEwIeTamm2De9mK6epOyI9ngHablNdR1uuY1EE4zsykLFi7452CnenuBkpxa%2BHKOhXPhEqWSJZlbz%2BHxarlJMM%2FKifHF7yhSzHcvg144DI0O7m5DhWS%2Fql4mtYqHqzeLlIGQHQ6jSgojWyoNSsKnQnaKgAjED9D9xIePN1ijb3I5KpmWtjkyOYK%2FH10W1Bb%2Bj6Cwdare3xTL0DDgDABRSniOhSf2K5J&X-Amz-Signature=e94b5482e53506dccb902c6525051434f747bf963b22abd73a0b55008d555ddc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TU3KXY5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2Bs0BosnPnXtkCWssf1Hbb1vGzeKedIHYwoo5AKMcjOAiB%2FdpxxVlszygvask%2FNtAtfhoOALMzpdLwJ7OPmBSKj8CqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZDegilw5KEPmjggGKtwD1jpUE63JunW0ItkMSdlB40GWMhTYO7VtS9brkJQWvCL6XSPZBReLAf%2F%2B6G0IV51xC32H5v7TAe2QPL06%2BTcQOoXbn7qME7G5rPE9an2I3I6mAvKrlj5XSUviP8ovR3KfWPudUDfe4XW38jtFyb8aNkzpjkL9iAKTtekasDloodFtmKqDcvyGIAYDNHOZoVC%2B%2FAQALjrTVqtf%2BYOcLzZFUrntIUZ59oP6V4yqFpkk8rS5k2A7F%2BX9UIKGm4od%2BoZQpV8BUHVEtSlqeUA5aMZlA9lldc%2BuJFGEzo3rk8MhiKKwmgJ0OTeuulsgwcLFkaB4TMndLNrYnDtG%2BRS%2ByVpq9Gy7%2BMMd9kgdXWgL3ZfPA6akVXh%2BUPBDRTefr5V2CxPmXgQkjyE9Sz3ToPx3EGvw%2FYn%2BUHDX28KxYev0dPO8xl1gaBZTh0P0dpqkRFixBN8YrVJzvIHAbOF7bMTnDJnP62Gn%2F43BtDHn0lmJl3ZfceIQqsNZc6KfBVZ8PRuMTZdLj%2BNxzCEfWhXIIvfShvEaFYEbxRLoyowk3n0eEhOdXsBo8PPPbj1qIE3Wqm%2FPSpfrxBoAx2uTSrypSu6ZnDZOEmC422tU4%2F2wrJIW2e1fZfuwSMohaynjjund9M8wj%2FXgxAY6pgEwIeTamm2De9mK6epOyI9ngHablNdR1uuY1EE4zsykLFi7452CnenuBkpxa%2BHKOhXPhEqWSJZlbz%2BHxarlJMM%2FKifHF7yhSzHcvg144DI0O7m5DhWS%2Fql4mtYqHqzeLlIGQHQ6jSgojWyoNSsKnQnaKgAjED9D9xIePN1ijb3I5KpmWtjkyOYK%2FH10W1Bb%2Bj6Cwdare3xTL0DDgDABRSniOhSf2K5J&X-Amz-Signature=6dff2fb530969cf63b9b13907839e887eef37e13e75f224311441ba511c894ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
