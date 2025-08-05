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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FHJN2DQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIC%2Bv4b2yYXPNzfqtKGMqrFZ9T3MDqNqrexIz6ivzeHy2AiEAnrP2GMw%2FQR88h3Dlrcq0KpmbwnWb03wvHoCysRhGjeMq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJnTb%2F4FvekhM8%2F71yrcA2w6WfXK8qAzKRGdeYz%2FewxSDV6HVxtnFzrSS9wxnWZHgClmzikjv53V%2BZrByFGvurbgWUsu%2FZWO7s1br6J7rDn2uldtbTmqTx33jWmPu42wX8fdRlIfePhrILtzHhr8k8XP5hF2zmagnicubKAWqetTF30lhwHv7ycoNqvHZ3M5K4f6orbQPxr2q10xneoTj8%2BckkrZ1qLQKwS8Jv1TPuM5BlhLBwkQwJJCYHXrDrWR7xwg9KWCGF8CUwVtP5neT54yaFs7lNCOHzDETS5I5L4Pd4m0%2Bq30pcY5tdOb8tkvbGGwfzym85iXeV7qlEDURKq%2F0G92RLxZGnL0aaIpZLdTyHTi%2Bz5bwrPDNKoMyIFWikTHHVFIhnYPT5sU0YVOVW4kdhD5y%2BiV1RbW%2B20oP3jY8xCltRTVfB%2FaiNlZQTfMGx8yfzlmv0Q0vxGyYCLoIA3Fglem8baEKwjnFnXZquzZXLzleuq0tIyvpzYjPYcF9nJCPSejGyQloLM7vW8kdEi1O%2FQrSJQ9dlXcBlwEwYgPMemyj%2FHQGCKQ1PzIScjSsW1tsFL2cBV7qnNNU3oFCZm5oU5oSaP9uADoU8E9G4LWHjGAYaDkAoYmup2WNpbk6wyVztioiqlKAVSMMKLMyMQGOqUBbsKuf1xw8GWGj4KO5GOu2E2E%2FX68%2BOrlz8tKAIs6y4372765AdxbNM3sOPY2fknOCWs3ZeOjWoM1R8eE9Wy41OtJ6kkkEBXIE2V9xGeb6PqvrinfnHe6s7yxvHYroQvmCe93jKMKlkS%2F4IxQhstcX87ceKBieLgYQv2OuyCJm%2BHwkE13J6vCBWeUWW%2BlMMoV4zF0NC5SMKNO%2BUY5BhQI994ykkc7&X-Amz-Signature=105365a90c700c5c630e74df66869744371cf93b16515509e5545f1453169501&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FHJN2DQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIC%2Bv4b2yYXPNzfqtKGMqrFZ9T3MDqNqrexIz6ivzeHy2AiEAnrP2GMw%2FQR88h3Dlrcq0KpmbwnWb03wvHoCysRhGjeMq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJnTb%2F4FvekhM8%2F71yrcA2w6WfXK8qAzKRGdeYz%2FewxSDV6HVxtnFzrSS9wxnWZHgClmzikjv53V%2BZrByFGvurbgWUsu%2FZWO7s1br6J7rDn2uldtbTmqTx33jWmPu42wX8fdRlIfePhrILtzHhr8k8XP5hF2zmagnicubKAWqetTF30lhwHv7ycoNqvHZ3M5K4f6orbQPxr2q10xneoTj8%2BckkrZ1qLQKwS8Jv1TPuM5BlhLBwkQwJJCYHXrDrWR7xwg9KWCGF8CUwVtP5neT54yaFs7lNCOHzDETS5I5L4Pd4m0%2Bq30pcY5tdOb8tkvbGGwfzym85iXeV7qlEDURKq%2F0G92RLxZGnL0aaIpZLdTyHTi%2Bz5bwrPDNKoMyIFWikTHHVFIhnYPT5sU0YVOVW4kdhD5y%2BiV1RbW%2B20oP3jY8xCltRTVfB%2FaiNlZQTfMGx8yfzlmv0Q0vxGyYCLoIA3Fglem8baEKwjnFnXZquzZXLzleuq0tIyvpzYjPYcF9nJCPSejGyQloLM7vW8kdEi1O%2FQrSJQ9dlXcBlwEwYgPMemyj%2FHQGCKQ1PzIScjSsW1tsFL2cBV7qnNNU3oFCZm5oU5oSaP9uADoU8E9G4LWHjGAYaDkAoYmup2WNpbk6wyVztioiqlKAVSMMKLMyMQGOqUBbsKuf1xw8GWGj4KO5GOu2E2E%2FX68%2BOrlz8tKAIs6y4372765AdxbNM3sOPY2fknOCWs3ZeOjWoM1R8eE9Wy41OtJ6kkkEBXIE2V9xGeb6PqvrinfnHe6s7yxvHYroQvmCe93jKMKlkS%2F4IxQhstcX87ceKBieLgYQv2OuyCJm%2BHwkE13J6vCBWeUWW%2BlMMoV4zF0NC5SMKNO%2BUY5BhQI994ykkc7&X-Amz-Signature=dea50b66654c76fc52b2addd1e3aaba83818adade98f96252780b4bf4b1e6c51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FHJN2DQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIC%2Bv4b2yYXPNzfqtKGMqrFZ9T3MDqNqrexIz6ivzeHy2AiEAnrP2GMw%2FQR88h3Dlrcq0KpmbwnWb03wvHoCysRhGjeMq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJnTb%2F4FvekhM8%2F71yrcA2w6WfXK8qAzKRGdeYz%2FewxSDV6HVxtnFzrSS9wxnWZHgClmzikjv53V%2BZrByFGvurbgWUsu%2FZWO7s1br6J7rDn2uldtbTmqTx33jWmPu42wX8fdRlIfePhrILtzHhr8k8XP5hF2zmagnicubKAWqetTF30lhwHv7ycoNqvHZ3M5K4f6orbQPxr2q10xneoTj8%2BckkrZ1qLQKwS8Jv1TPuM5BlhLBwkQwJJCYHXrDrWR7xwg9KWCGF8CUwVtP5neT54yaFs7lNCOHzDETS5I5L4Pd4m0%2Bq30pcY5tdOb8tkvbGGwfzym85iXeV7qlEDURKq%2F0G92RLxZGnL0aaIpZLdTyHTi%2Bz5bwrPDNKoMyIFWikTHHVFIhnYPT5sU0YVOVW4kdhD5y%2BiV1RbW%2B20oP3jY8xCltRTVfB%2FaiNlZQTfMGx8yfzlmv0Q0vxGyYCLoIA3Fglem8baEKwjnFnXZquzZXLzleuq0tIyvpzYjPYcF9nJCPSejGyQloLM7vW8kdEi1O%2FQrSJQ9dlXcBlwEwYgPMemyj%2FHQGCKQ1PzIScjSsW1tsFL2cBV7qnNNU3oFCZm5oU5oSaP9uADoU8E9G4LWHjGAYaDkAoYmup2WNpbk6wyVztioiqlKAVSMMKLMyMQGOqUBbsKuf1xw8GWGj4KO5GOu2E2E%2FX68%2BOrlz8tKAIs6y4372765AdxbNM3sOPY2fknOCWs3ZeOjWoM1R8eE9Wy41OtJ6kkkEBXIE2V9xGeb6PqvrinfnHe6s7yxvHYroQvmCe93jKMKlkS%2F4IxQhstcX87ceKBieLgYQv2OuyCJm%2BHwkE13J6vCBWeUWW%2BlMMoV4zF0NC5SMKNO%2BUY5BhQI994ykkc7&X-Amz-Signature=5b0e5b7522b2801bb623aa5fc482cde8824e9e77e07f3ae307ee08807e33b10f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FHJN2DQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIC%2Bv4b2yYXPNzfqtKGMqrFZ9T3MDqNqrexIz6ivzeHy2AiEAnrP2GMw%2FQR88h3Dlrcq0KpmbwnWb03wvHoCysRhGjeMq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJnTb%2F4FvekhM8%2F71yrcA2w6WfXK8qAzKRGdeYz%2FewxSDV6HVxtnFzrSS9wxnWZHgClmzikjv53V%2BZrByFGvurbgWUsu%2FZWO7s1br6J7rDn2uldtbTmqTx33jWmPu42wX8fdRlIfePhrILtzHhr8k8XP5hF2zmagnicubKAWqetTF30lhwHv7ycoNqvHZ3M5K4f6orbQPxr2q10xneoTj8%2BckkrZ1qLQKwS8Jv1TPuM5BlhLBwkQwJJCYHXrDrWR7xwg9KWCGF8CUwVtP5neT54yaFs7lNCOHzDETS5I5L4Pd4m0%2Bq30pcY5tdOb8tkvbGGwfzym85iXeV7qlEDURKq%2F0G92RLxZGnL0aaIpZLdTyHTi%2Bz5bwrPDNKoMyIFWikTHHVFIhnYPT5sU0YVOVW4kdhD5y%2BiV1RbW%2B20oP3jY8xCltRTVfB%2FaiNlZQTfMGx8yfzlmv0Q0vxGyYCLoIA3Fglem8baEKwjnFnXZquzZXLzleuq0tIyvpzYjPYcF9nJCPSejGyQloLM7vW8kdEi1O%2FQrSJQ9dlXcBlwEwYgPMemyj%2FHQGCKQ1PzIScjSsW1tsFL2cBV7qnNNU3oFCZm5oU5oSaP9uADoU8E9G4LWHjGAYaDkAoYmup2WNpbk6wyVztioiqlKAVSMMKLMyMQGOqUBbsKuf1xw8GWGj4KO5GOu2E2E%2FX68%2BOrlz8tKAIs6y4372765AdxbNM3sOPY2fknOCWs3ZeOjWoM1R8eE9Wy41OtJ6kkkEBXIE2V9xGeb6PqvrinfnHe6s7yxvHYroQvmCe93jKMKlkS%2F4IxQhstcX87ceKBieLgYQv2OuyCJm%2BHwkE13J6vCBWeUWW%2BlMMoV4zF0NC5SMKNO%2BUY5BhQI994ykkc7&X-Amz-Signature=1cd681952c2e6413d611bc875998b32d2c286627cd4177d3916f5214de32c839&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FHJN2DQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIC%2Bv4b2yYXPNzfqtKGMqrFZ9T3MDqNqrexIz6ivzeHy2AiEAnrP2GMw%2FQR88h3Dlrcq0KpmbwnWb03wvHoCysRhGjeMq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJnTb%2F4FvekhM8%2F71yrcA2w6WfXK8qAzKRGdeYz%2FewxSDV6HVxtnFzrSS9wxnWZHgClmzikjv53V%2BZrByFGvurbgWUsu%2FZWO7s1br6J7rDn2uldtbTmqTx33jWmPu42wX8fdRlIfePhrILtzHhr8k8XP5hF2zmagnicubKAWqetTF30lhwHv7ycoNqvHZ3M5K4f6orbQPxr2q10xneoTj8%2BckkrZ1qLQKwS8Jv1TPuM5BlhLBwkQwJJCYHXrDrWR7xwg9KWCGF8CUwVtP5neT54yaFs7lNCOHzDETS5I5L4Pd4m0%2Bq30pcY5tdOb8tkvbGGwfzym85iXeV7qlEDURKq%2F0G92RLxZGnL0aaIpZLdTyHTi%2Bz5bwrPDNKoMyIFWikTHHVFIhnYPT5sU0YVOVW4kdhD5y%2BiV1RbW%2B20oP3jY8xCltRTVfB%2FaiNlZQTfMGx8yfzlmv0Q0vxGyYCLoIA3Fglem8baEKwjnFnXZquzZXLzleuq0tIyvpzYjPYcF9nJCPSejGyQloLM7vW8kdEi1O%2FQrSJQ9dlXcBlwEwYgPMemyj%2FHQGCKQ1PzIScjSsW1tsFL2cBV7qnNNU3oFCZm5oU5oSaP9uADoU8E9G4LWHjGAYaDkAoYmup2WNpbk6wyVztioiqlKAVSMMKLMyMQGOqUBbsKuf1xw8GWGj4KO5GOu2E2E%2FX68%2BOrlz8tKAIs6y4372765AdxbNM3sOPY2fknOCWs3ZeOjWoM1R8eE9Wy41OtJ6kkkEBXIE2V9xGeb6PqvrinfnHe6s7yxvHYroQvmCe93jKMKlkS%2F4IxQhstcX87ceKBieLgYQv2OuyCJm%2BHwkE13J6vCBWeUWW%2BlMMoV4zF0NC5SMKNO%2BUY5BhQI994ykkc7&X-Amz-Signature=7c31ee1020f9e7a5c06ae9800027407c02ebdfa4ef6df45e320ca43cb4a0c85f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FHJN2DQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIC%2Bv4b2yYXPNzfqtKGMqrFZ9T3MDqNqrexIz6ivzeHy2AiEAnrP2GMw%2FQR88h3Dlrcq0KpmbwnWb03wvHoCysRhGjeMq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJnTb%2F4FvekhM8%2F71yrcA2w6WfXK8qAzKRGdeYz%2FewxSDV6HVxtnFzrSS9wxnWZHgClmzikjv53V%2BZrByFGvurbgWUsu%2FZWO7s1br6J7rDn2uldtbTmqTx33jWmPu42wX8fdRlIfePhrILtzHhr8k8XP5hF2zmagnicubKAWqetTF30lhwHv7ycoNqvHZ3M5K4f6orbQPxr2q10xneoTj8%2BckkrZ1qLQKwS8Jv1TPuM5BlhLBwkQwJJCYHXrDrWR7xwg9KWCGF8CUwVtP5neT54yaFs7lNCOHzDETS5I5L4Pd4m0%2Bq30pcY5tdOb8tkvbGGwfzym85iXeV7qlEDURKq%2F0G92RLxZGnL0aaIpZLdTyHTi%2Bz5bwrPDNKoMyIFWikTHHVFIhnYPT5sU0YVOVW4kdhD5y%2BiV1RbW%2B20oP3jY8xCltRTVfB%2FaiNlZQTfMGx8yfzlmv0Q0vxGyYCLoIA3Fglem8baEKwjnFnXZquzZXLzleuq0tIyvpzYjPYcF9nJCPSejGyQloLM7vW8kdEi1O%2FQrSJQ9dlXcBlwEwYgPMemyj%2FHQGCKQ1PzIScjSsW1tsFL2cBV7qnNNU3oFCZm5oU5oSaP9uADoU8E9G4LWHjGAYaDkAoYmup2WNpbk6wyVztioiqlKAVSMMKLMyMQGOqUBbsKuf1xw8GWGj4KO5GOu2E2E%2FX68%2BOrlz8tKAIs6y4372765AdxbNM3sOPY2fknOCWs3ZeOjWoM1R8eE9Wy41OtJ6kkkEBXIE2V9xGeb6PqvrinfnHe6s7yxvHYroQvmCe93jKMKlkS%2F4IxQhstcX87ceKBieLgYQv2OuyCJm%2BHwkE13J6vCBWeUWW%2BlMMoV4zF0NC5SMKNO%2BUY5BhQI994ykkc7&X-Amz-Signature=7446a6e8b4e40b1e1d3d82985c9400c3106a999f2194658325294f24bfcda741&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FHJN2DQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIC%2Bv4b2yYXPNzfqtKGMqrFZ9T3MDqNqrexIz6ivzeHy2AiEAnrP2GMw%2FQR88h3Dlrcq0KpmbwnWb03wvHoCysRhGjeMq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJnTb%2F4FvekhM8%2F71yrcA2w6WfXK8qAzKRGdeYz%2FewxSDV6HVxtnFzrSS9wxnWZHgClmzikjv53V%2BZrByFGvurbgWUsu%2FZWO7s1br6J7rDn2uldtbTmqTx33jWmPu42wX8fdRlIfePhrILtzHhr8k8XP5hF2zmagnicubKAWqetTF30lhwHv7ycoNqvHZ3M5K4f6orbQPxr2q10xneoTj8%2BckkrZ1qLQKwS8Jv1TPuM5BlhLBwkQwJJCYHXrDrWR7xwg9KWCGF8CUwVtP5neT54yaFs7lNCOHzDETS5I5L4Pd4m0%2Bq30pcY5tdOb8tkvbGGwfzym85iXeV7qlEDURKq%2F0G92RLxZGnL0aaIpZLdTyHTi%2Bz5bwrPDNKoMyIFWikTHHVFIhnYPT5sU0YVOVW4kdhD5y%2BiV1RbW%2B20oP3jY8xCltRTVfB%2FaiNlZQTfMGx8yfzlmv0Q0vxGyYCLoIA3Fglem8baEKwjnFnXZquzZXLzleuq0tIyvpzYjPYcF9nJCPSejGyQloLM7vW8kdEi1O%2FQrSJQ9dlXcBlwEwYgPMemyj%2FHQGCKQ1PzIScjSsW1tsFL2cBV7qnNNU3oFCZm5oU5oSaP9uADoU8E9G4LWHjGAYaDkAoYmup2WNpbk6wyVztioiqlKAVSMMKLMyMQGOqUBbsKuf1xw8GWGj4KO5GOu2E2E%2FX68%2BOrlz8tKAIs6y4372765AdxbNM3sOPY2fknOCWs3ZeOjWoM1R8eE9Wy41OtJ6kkkEBXIE2V9xGeb6PqvrinfnHe6s7yxvHYroQvmCe93jKMKlkS%2F4IxQhstcX87ceKBieLgYQv2OuyCJm%2BHwkE13J6vCBWeUWW%2BlMMoV4zF0NC5SMKNO%2BUY5BhQI994ykkc7&X-Amz-Signature=774fd7ebf6eb7fe3eb009e87a5b6d39ba4eba95010bc17bf1c9126d3724c0632&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FHJN2DQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIC%2Bv4b2yYXPNzfqtKGMqrFZ9T3MDqNqrexIz6ivzeHy2AiEAnrP2GMw%2FQR88h3Dlrcq0KpmbwnWb03wvHoCysRhGjeMq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJnTb%2F4FvekhM8%2F71yrcA2w6WfXK8qAzKRGdeYz%2FewxSDV6HVxtnFzrSS9wxnWZHgClmzikjv53V%2BZrByFGvurbgWUsu%2FZWO7s1br6J7rDn2uldtbTmqTx33jWmPu42wX8fdRlIfePhrILtzHhr8k8XP5hF2zmagnicubKAWqetTF30lhwHv7ycoNqvHZ3M5K4f6orbQPxr2q10xneoTj8%2BckkrZ1qLQKwS8Jv1TPuM5BlhLBwkQwJJCYHXrDrWR7xwg9KWCGF8CUwVtP5neT54yaFs7lNCOHzDETS5I5L4Pd4m0%2Bq30pcY5tdOb8tkvbGGwfzym85iXeV7qlEDURKq%2F0G92RLxZGnL0aaIpZLdTyHTi%2Bz5bwrPDNKoMyIFWikTHHVFIhnYPT5sU0YVOVW4kdhD5y%2BiV1RbW%2B20oP3jY8xCltRTVfB%2FaiNlZQTfMGx8yfzlmv0Q0vxGyYCLoIA3Fglem8baEKwjnFnXZquzZXLzleuq0tIyvpzYjPYcF9nJCPSejGyQloLM7vW8kdEi1O%2FQrSJQ9dlXcBlwEwYgPMemyj%2FHQGCKQ1PzIScjSsW1tsFL2cBV7qnNNU3oFCZm5oU5oSaP9uADoU8E9G4LWHjGAYaDkAoYmup2WNpbk6wyVztioiqlKAVSMMKLMyMQGOqUBbsKuf1xw8GWGj4KO5GOu2E2E%2FX68%2BOrlz8tKAIs6y4372765AdxbNM3sOPY2fknOCWs3ZeOjWoM1R8eE9Wy41OtJ6kkkEBXIE2V9xGeb6PqvrinfnHe6s7yxvHYroQvmCe93jKMKlkS%2F4IxQhstcX87ceKBieLgYQv2OuyCJm%2BHwkE13J6vCBWeUWW%2BlMMoV4zF0NC5SMKNO%2BUY5BhQI994ykkc7&X-Amz-Signature=ed3505e981121897eb9ae24a34709f4f1b8553dbe62659d69a24822d91bfa02f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FHJN2DQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIC%2Bv4b2yYXPNzfqtKGMqrFZ9T3MDqNqrexIz6ivzeHy2AiEAnrP2GMw%2FQR88h3Dlrcq0KpmbwnWb03wvHoCysRhGjeMq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJnTb%2F4FvekhM8%2F71yrcA2w6WfXK8qAzKRGdeYz%2FewxSDV6HVxtnFzrSS9wxnWZHgClmzikjv53V%2BZrByFGvurbgWUsu%2FZWO7s1br6J7rDn2uldtbTmqTx33jWmPu42wX8fdRlIfePhrILtzHhr8k8XP5hF2zmagnicubKAWqetTF30lhwHv7ycoNqvHZ3M5K4f6orbQPxr2q10xneoTj8%2BckkrZ1qLQKwS8Jv1TPuM5BlhLBwkQwJJCYHXrDrWR7xwg9KWCGF8CUwVtP5neT54yaFs7lNCOHzDETS5I5L4Pd4m0%2Bq30pcY5tdOb8tkvbGGwfzym85iXeV7qlEDURKq%2F0G92RLxZGnL0aaIpZLdTyHTi%2Bz5bwrPDNKoMyIFWikTHHVFIhnYPT5sU0YVOVW4kdhD5y%2BiV1RbW%2B20oP3jY8xCltRTVfB%2FaiNlZQTfMGx8yfzlmv0Q0vxGyYCLoIA3Fglem8baEKwjnFnXZquzZXLzleuq0tIyvpzYjPYcF9nJCPSejGyQloLM7vW8kdEi1O%2FQrSJQ9dlXcBlwEwYgPMemyj%2FHQGCKQ1PzIScjSsW1tsFL2cBV7qnNNU3oFCZm5oU5oSaP9uADoU8E9G4LWHjGAYaDkAoYmup2WNpbk6wyVztioiqlKAVSMMKLMyMQGOqUBbsKuf1xw8GWGj4KO5GOu2E2E%2FX68%2BOrlz8tKAIs6y4372765AdxbNM3sOPY2fknOCWs3ZeOjWoM1R8eE9Wy41OtJ6kkkEBXIE2V9xGeb6PqvrinfnHe6s7yxvHYroQvmCe93jKMKlkS%2F4IxQhstcX87ceKBieLgYQv2OuyCJm%2BHwkE13J6vCBWeUWW%2BlMMoV4zF0NC5SMKNO%2BUY5BhQI994ykkc7&X-Amz-Signature=d3c1d42baa8cc92d831f59fa693cfcc49bb3fe95afcbe1ba2c2e024a7a3fa45d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FHJN2DQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIC%2Bv4b2yYXPNzfqtKGMqrFZ9T3MDqNqrexIz6ivzeHy2AiEAnrP2GMw%2FQR88h3Dlrcq0KpmbwnWb03wvHoCysRhGjeMq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJnTb%2F4FvekhM8%2F71yrcA2w6WfXK8qAzKRGdeYz%2FewxSDV6HVxtnFzrSS9wxnWZHgClmzikjv53V%2BZrByFGvurbgWUsu%2FZWO7s1br6J7rDn2uldtbTmqTx33jWmPu42wX8fdRlIfePhrILtzHhr8k8XP5hF2zmagnicubKAWqetTF30lhwHv7ycoNqvHZ3M5K4f6orbQPxr2q10xneoTj8%2BckkrZ1qLQKwS8Jv1TPuM5BlhLBwkQwJJCYHXrDrWR7xwg9KWCGF8CUwVtP5neT54yaFs7lNCOHzDETS5I5L4Pd4m0%2Bq30pcY5tdOb8tkvbGGwfzym85iXeV7qlEDURKq%2F0G92RLxZGnL0aaIpZLdTyHTi%2Bz5bwrPDNKoMyIFWikTHHVFIhnYPT5sU0YVOVW4kdhD5y%2BiV1RbW%2B20oP3jY8xCltRTVfB%2FaiNlZQTfMGx8yfzlmv0Q0vxGyYCLoIA3Fglem8baEKwjnFnXZquzZXLzleuq0tIyvpzYjPYcF9nJCPSejGyQloLM7vW8kdEi1O%2FQrSJQ9dlXcBlwEwYgPMemyj%2FHQGCKQ1PzIScjSsW1tsFL2cBV7qnNNU3oFCZm5oU5oSaP9uADoU8E9G4LWHjGAYaDkAoYmup2WNpbk6wyVztioiqlKAVSMMKLMyMQGOqUBbsKuf1xw8GWGj4KO5GOu2E2E%2FX68%2BOrlz8tKAIs6y4372765AdxbNM3sOPY2fknOCWs3ZeOjWoM1R8eE9Wy41OtJ6kkkEBXIE2V9xGeb6PqvrinfnHe6s7yxvHYroQvmCe93jKMKlkS%2F4IxQhstcX87ceKBieLgYQv2OuyCJm%2BHwkE13J6vCBWeUWW%2BlMMoV4zF0NC5SMKNO%2BUY5BhQI994ykkc7&X-Amz-Signature=0c5306e45ef240f0b6e140c69a466ec0d678c91cc4ff864c348edc1eea8b71ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FHJN2DQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIC%2Bv4b2yYXPNzfqtKGMqrFZ9T3MDqNqrexIz6ivzeHy2AiEAnrP2GMw%2FQR88h3Dlrcq0KpmbwnWb03wvHoCysRhGjeMq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJnTb%2F4FvekhM8%2F71yrcA2w6WfXK8qAzKRGdeYz%2FewxSDV6HVxtnFzrSS9wxnWZHgClmzikjv53V%2BZrByFGvurbgWUsu%2FZWO7s1br6J7rDn2uldtbTmqTx33jWmPu42wX8fdRlIfePhrILtzHhr8k8XP5hF2zmagnicubKAWqetTF30lhwHv7ycoNqvHZ3M5K4f6orbQPxr2q10xneoTj8%2BckkrZ1qLQKwS8Jv1TPuM5BlhLBwkQwJJCYHXrDrWR7xwg9KWCGF8CUwVtP5neT54yaFs7lNCOHzDETS5I5L4Pd4m0%2Bq30pcY5tdOb8tkvbGGwfzym85iXeV7qlEDURKq%2F0G92RLxZGnL0aaIpZLdTyHTi%2Bz5bwrPDNKoMyIFWikTHHVFIhnYPT5sU0YVOVW4kdhD5y%2BiV1RbW%2B20oP3jY8xCltRTVfB%2FaiNlZQTfMGx8yfzlmv0Q0vxGyYCLoIA3Fglem8baEKwjnFnXZquzZXLzleuq0tIyvpzYjPYcF9nJCPSejGyQloLM7vW8kdEi1O%2FQrSJQ9dlXcBlwEwYgPMemyj%2FHQGCKQ1PzIScjSsW1tsFL2cBV7qnNNU3oFCZm5oU5oSaP9uADoU8E9G4LWHjGAYaDkAoYmup2WNpbk6wyVztioiqlKAVSMMKLMyMQGOqUBbsKuf1xw8GWGj4KO5GOu2E2E%2FX68%2BOrlz8tKAIs6y4372765AdxbNM3sOPY2fknOCWs3ZeOjWoM1R8eE9Wy41OtJ6kkkEBXIE2V9xGeb6PqvrinfnHe6s7yxvHYroQvmCe93jKMKlkS%2F4IxQhstcX87ceKBieLgYQv2OuyCJm%2BHwkE13J6vCBWeUWW%2BlMMoV4zF0NC5SMKNO%2BUY5BhQI994ykkc7&X-Amz-Signature=40595548beac782cec2257af8470ba3ff1322a0e2beb1e7a2dfb87df2dada3a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FHJN2DQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIC%2Bv4b2yYXPNzfqtKGMqrFZ9T3MDqNqrexIz6ivzeHy2AiEAnrP2GMw%2FQR88h3Dlrcq0KpmbwnWb03wvHoCysRhGjeMq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJnTb%2F4FvekhM8%2F71yrcA2w6WfXK8qAzKRGdeYz%2FewxSDV6HVxtnFzrSS9wxnWZHgClmzikjv53V%2BZrByFGvurbgWUsu%2FZWO7s1br6J7rDn2uldtbTmqTx33jWmPu42wX8fdRlIfePhrILtzHhr8k8XP5hF2zmagnicubKAWqetTF30lhwHv7ycoNqvHZ3M5K4f6orbQPxr2q10xneoTj8%2BckkrZ1qLQKwS8Jv1TPuM5BlhLBwkQwJJCYHXrDrWR7xwg9KWCGF8CUwVtP5neT54yaFs7lNCOHzDETS5I5L4Pd4m0%2Bq30pcY5tdOb8tkvbGGwfzym85iXeV7qlEDURKq%2F0G92RLxZGnL0aaIpZLdTyHTi%2Bz5bwrPDNKoMyIFWikTHHVFIhnYPT5sU0YVOVW4kdhD5y%2BiV1RbW%2B20oP3jY8xCltRTVfB%2FaiNlZQTfMGx8yfzlmv0Q0vxGyYCLoIA3Fglem8baEKwjnFnXZquzZXLzleuq0tIyvpzYjPYcF9nJCPSejGyQloLM7vW8kdEi1O%2FQrSJQ9dlXcBlwEwYgPMemyj%2FHQGCKQ1PzIScjSsW1tsFL2cBV7qnNNU3oFCZm5oU5oSaP9uADoU8E9G4LWHjGAYaDkAoYmup2WNpbk6wyVztioiqlKAVSMMKLMyMQGOqUBbsKuf1xw8GWGj4KO5GOu2E2E%2FX68%2BOrlz8tKAIs6y4372765AdxbNM3sOPY2fknOCWs3ZeOjWoM1R8eE9Wy41OtJ6kkkEBXIE2V9xGeb6PqvrinfnHe6s7yxvHYroQvmCe93jKMKlkS%2F4IxQhstcX87ceKBieLgYQv2OuyCJm%2BHwkE13J6vCBWeUWW%2BlMMoV4zF0NC5SMKNO%2BUY5BhQI994ykkc7&X-Amz-Signature=73e8ab43f6eae5171f112a90f1f16705bf5db41e4fb4e09009ca842440c2bd31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FHJN2DQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIC%2Bv4b2yYXPNzfqtKGMqrFZ9T3MDqNqrexIz6ivzeHy2AiEAnrP2GMw%2FQR88h3Dlrcq0KpmbwnWb03wvHoCysRhGjeMq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJnTb%2F4FvekhM8%2F71yrcA2w6WfXK8qAzKRGdeYz%2FewxSDV6HVxtnFzrSS9wxnWZHgClmzikjv53V%2BZrByFGvurbgWUsu%2FZWO7s1br6J7rDn2uldtbTmqTx33jWmPu42wX8fdRlIfePhrILtzHhr8k8XP5hF2zmagnicubKAWqetTF30lhwHv7ycoNqvHZ3M5K4f6orbQPxr2q10xneoTj8%2BckkrZ1qLQKwS8Jv1TPuM5BlhLBwkQwJJCYHXrDrWR7xwg9KWCGF8CUwVtP5neT54yaFs7lNCOHzDETS5I5L4Pd4m0%2Bq30pcY5tdOb8tkvbGGwfzym85iXeV7qlEDURKq%2F0G92RLxZGnL0aaIpZLdTyHTi%2Bz5bwrPDNKoMyIFWikTHHVFIhnYPT5sU0YVOVW4kdhD5y%2BiV1RbW%2B20oP3jY8xCltRTVfB%2FaiNlZQTfMGx8yfzlmv0Q0vxGyYCLoIA3Fglem8baEKwjnFnXZquzZXLzleuq0tIyvpzYjPYcF9nJCPSejGyQloLM7vW8kdEi1O%2FQrSJQ9dlXcBlwEwYgPMemyj%2FHQGCKQ1PzIScjSsW1tsFL2cBV7qnNNU3oFCZm5oU5oSaP9uADoU8E9G4LWHjGAYaDkAoYmup2WNpbk6wyVztioiqlKAVSMMKLMyMQGOqUBbsKuf1xw8GWGj4KO5GOu2E2E%2FX68%2BOrlz8tKAIs6y4372765AdxbNM3sOPY2fknOCWs3ZeOjWoM1R8eE9Wy41OtJ6kkkEBXIE2V9xGeb6PqvrinfnHe6s7yxvHYroQvmCe93jKMKlkS%2F4IxQhstcX87ceKBieLgYQv2OuyCJm%2BHwkE13J6vCBWeUWW%2BlMMoV4zF0NC5SMKNO%2BUY5BhQI994ykkc7&X-Amz-Signature=b0a28673a57a28d2bd30ea4aaba391a8ec9d0ba2c9931f2a673cd0edb980d18b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FHJN2DQ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIC%2Bv4b2yYXPNzfqtKGMqrFZ9T3MDqNqrexIz6ivzeHy2AiEAnrP2GMw%2FQR88h3Dlrcq0KpmbwnWb03wvHoCysRhGjeMq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJnTb%2F4FvekhM8%2F71yrcA2w6WfXK8qAzKRGdeYz%2FewxSDV6HVxtnFzrSS9wxnWZHgClmzikjv53V%2BZrByFGvurbgWUsu%2FZWO7s1br6J7rDn2uldtbTmqTx33jWmPu42wX8fdRlIfePhrILtzHhr8k8XP5hF2zmagnicubKAWqetTF30lhwHv7ycoNqvHZ3M5K4f6orbQPxr2q10xneoTj8%2BckkrZ1qLQKwS8Jv1TPuM5BlhLBwkQwJJCYHXrDrWR7xwg9KWCGF8CUwVtP5neT54yaFs7lNCOHzDETS5I5L4Pd4m0%2Bq30pcY5tdOb8tkvbGGwfzym85iXeV7qlEDURKq%2F0G92RLxZGnL0aaIpZLdTyHTi%2Bz5bwrPDNKoMyIFWikTHHVFIhnYPT5sU0YVOVW4kdhD5y%2BiV1RbW%2B20oP3jY8xCltRTVfB%2FaiNlZQTfMGx8yfzlmv0Q0vxGyYCLoIA3Fglem8baEKwjnFnXZquzZXLzleuq0tIyvpzYjPYcF9nJCPSejGyQloLM7vW8kdEi1O%2FQrSJQ9dlXcBlwEwYgPMemyj%2FHQGCKQ1PzIScjSsW1tsFL2cBV7qnNNU3oFCZm5oU5oSaP9uADoU8E9G4LWHjGAYaDkAoYmup2WNpbk6wyVztioiqlKAVSMMKLMyMQGOqUBbsKuf1xw8GWGj4KO5GOu2E2E%2FX68%2BOrlz8tKAIs6y4372765AdxbNM3sOPY2fknOCWs3ZeOjWoM1R8eE9Wy41OtJ6kkkEBXIE2V9xGeb6PqvrinfnHe6s7yxvHYroQvmCe93jKMKlkS%2F4IxQhstcX87ceKBieLgYQv2OuyCJm%2BHwkE13J6vCBWeUWW%2BlMMoV4zF0NC5SMKNO%2BUY5BhQI994ykkc7&X-Amz-Signature=d3a670039842d26141aa1642778735c8a62b919ddafded4ee851427063b025a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
