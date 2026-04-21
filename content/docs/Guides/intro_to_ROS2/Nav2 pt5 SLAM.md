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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663FDOHCM%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC%2BJe0e0ipdG5YlhuvxayJdpu0N8RC5xuDofdsDiEefZwIhAMa1CjeIJtLGgpoB%2BWTT70Q%2BOgaHQ9mhxQ2hl3gvhwCjKv8DCCsQABoMNjM3NDIzMTgzODA1IgyOzCFyHc0B4pUEbSoq3ANu745ln4Mbkmovsrq9kupKbN7JAUwf%2BSBBAd26IIe4iXRrPBJ0GYKsj%2FxoAKwAdvBLf2LEX8hjkXg%2FX%2B53Q%2F%2FMKhs541vpLZ65obYk%2FwGofRzgzYFCYBejGzCu3Ir2GOGWWCBgefi8YClm%2BHZc0KevsGo9ZnmmIMEcDd3pltep5g7GKRfuHVhPUyYyzoRYzhogkSiAeHE35Jl6VlM7XeFcmMXPPnL4srh0YO5f0nsUjHoASnGK%2FdBFJeobPrkOHwGoBuXE7C0h6fmJTMuyDSqZ9AqkUkVhjYMruo5tS65JBHJ20IaWO2plkcG5QWExtln7z%2FkHy0XZXR%2F6E1U503lKRrzTzEchFT7WutWFW5oUriQCg3gS1PpL9zvalY7APCiuUU2xkVXwRnXjWSRvqFuCpYH7JYwEnxMtPsOchWkFm0nuCjnomEaYtDHyVtXKKxnGKp0Al9ISfxbpw%2BGrnRr0uv2HkcLhc5w9uj4LIGqFZU1S5014ImHQSYBaTcvTRKcFjNuaRet0%2FFiT74gkISRPbbyLsx2WTwdJ7L9hDl1lGodFR%2FgRyC5120epVshlGj3avt5sNrlhd%2B8f4jueCM%2BMxYwz1pNCaMYMjq4cUC2QGqHi%2BkqMedvOaZLmWzCmqpvPBjqkAaNFJ08DXxhEJmMQ8qSmb%2FXxoIw%2FX%2BF5pA5oWOK2qLx7SlLi4HzayQrpk3u0kd9WI6NGZTxIHg8EVmiekDxfq7QvUi66i2RKEOXsFa5exxSv79dLeKH6yRwl1J%2FLfOX209c2ZrOV5AEGhaHMUfPJoi62KKVHq0k2tpt4yiozTPrqW6I%2FNBY2v5zzZTHdGbJCjH7SN4yUdP8K4gkhMr5sQG1tIBhz&X-Amz-Signature=ddfa8e57c4a21d1f7239c3f9371603386b221aa808710a392bb883c4b9c3a126&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663FDOHCM%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC%2BJe0e0ipdG5YlhuvxayJdpu0N8RC5xuDofdsDiEefZwIhAMa1CjeIJtLGgpoB%2BWTT70Q%2BOgaHQ9mhxQ2hl3gvhwCjKv8DCCsQABoMNjM3NDIzMTgzODA1IgyOzCFyHc0B4pUEbSoq3ANu745ln4Mbkmovsrq9kupKbN7JAUwf%2BSBBAd26IIe4iXRrPBJ0GYKsj%2FxoAKwAdvBLf2LEX8hjkXg%2FX%2B53Q%2F%2FMKhs541vpLZ65obYk%2FwGofRzgzYFCYBejGzCu3Ir2GOGWWCBgefi8YClm%2BHZc0KevsGo9ZnmmIMEcDd3pltep5g7GKRfuHVhPUyYyzoRYzhogkSiAeHE35Jl6VlM7XeFcmMXPPnL4srh0YO5f0nsUjHoASnGK%2FdBFJeobPrkOHwGoBuXE7C0h6fmJTMuyDSqZ9AqkUkVhjYMruo5tS65JBHJ20IaWO2plkcG5QWExtln7z%2FkHy0XZXR%2F6E1U503lKRrzTzEchFT7WutWFW5oUriQCg3gS1PpL9zvalY7APCiuUU2xkVXwRnXjWSRvqFuCpYH7JYwEnxMtPsOchWkFm0nuCjnomEaYtDHyVtXKKxnGKp0Al9ISfxbpw%2BGrnRr0uv2HkcLhc5w9uj4LIGqFZU1S5014ImHQSYBaTcvTRKcFjNuaRet0%2FFiT74gkISRPbbyLsx2WTwdJ7L9hDl1lGodFR%2FgRyC5120epVshlGj3avt5sNrlhd%2B8f4jueCM%2BMxYwz1pNCaMYMjq4cUC2QGqHi%2BkqMedvOaZLmWzCmqpvPBjqkAaNFJ08DXxhEJmMQ8qSmb%2FXxoIw%2FX%2BF5pA5oWOK2qLx7SlLi4HzayQrpk3u0kd9WI6NGZTxIHg8EVmiekDxfq7QvUi66i2RKEOXsFa5exxSv79dLeKH6yRwl1J%2FLfOX209c2ZrOV5AEGhaHMUfPJoi62KKVHq0k2tpt4yiozTPrqW6I%2FNBY2v5zzZTHdGbJCjH7SN4yUdP8K4gkhMr5sQG1tIBhz&X-Amz-Signature=0015e1881ac5a8480d8b53dd9f04dc7a41adb1cd4ad68132ce446f9a76189020&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663FDOHCM%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC%2BJe0e0ipdG5YlhuvxayJdpu0N8RC5xuDofdsDiEefZwIhAMa1CjeIJtLGgpoB%2BWTT70Q%2BOgaHQ9mhxQ2hl3gvhwCjKv8DCCsQABoMNjM3NDIzMTgzODA1IgyOzCFyHc0B4pUEbSoq3ANu745ln4Mbkmovsrq9kupKbN7JAUwf%2BSBBAd26IIe4iXRrPBJ0GYKsj%2FxoAKwAdvBLf2LEX8hjkXg%2FX%2B53Q%2F%2FMKhs541vpLZ65obYk%2FwGofRzgzYFCYBejGzCu3Ir2GOGWWCBgefi8YClm%2BHZc0KevsGo9ZnmmIMEcDd3pltep5g7GKRfuHVhPUyYyzoRYzhogkSiAeHE35Jl6VlM7XeFcmMXPPnL4srh0YO5f0nsUjHoASnGK%2FdBFJeobPrkOHwGoBuXE7C0h6fmJTMuyDSqZ9AqkUkVhjYMruo5tS65JBHJ20IaWO2plkcG5QWExtln7z%2FkHy0XZXR%2F6E1U503lKRrzTzEchFT7WutWFW5oUriQCg3gS1PpL9zvalY7APCiuUU2xkVXwRnXjWSRvqFuCpYH7JYwEnxMtPsOchWkFm0nuCjnomEaYtDHyVtXKKxnGKp0Al9ISfxbpw%2BGrnRr0uv2HkcLhc5w9uj4LIGqFZU1S5014ImHQSYBaTcvTRKcFjNuaRet0%2FFiT74gkISRPbbyLsx2WTwdJ7L9hDl1lGodFR%2FgRyC5120epVshlGj3avt5sNrlhd%2B8f4jueCM%2BMxYwz1pNCaMYMjq4cUC2QGqHi%2BkqMedvOaZLmWzCmqpvPBjqkAaNFJ08DXxhEJmMQ8qSmb%2FXxoIw%2FX%2BF5pA5oWOK2qLx7SlLi4HzayQrpk3u0kd9WI6NGZTxIHg8EVmiekDxfq7QvUi66i2RKEOXsFa5exxSv79dLeKH6yRwl1J%2FLfOX209c2ZrOV5AEGhaHMUfPJoi62KKVHq0k2tpt4yiozTPrqW6I%2FNBY2v5zzZTHdGbJCjH7SN4yUdP8K4gkhMr5sQG1tIBhz&X-Amz-Signature=b72f22618fe35549ffd6cba0e62ee3de8e5c112f952ef1eb5874432ad39669ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663FDOHCM%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC%2BJe0e0ipdG5YlhuvxayJdpu0N8RC5xuDofdsDiEefZwIhAMa1CjeIJtLGgpoB%2BWTT70Q%2BOgaHQ9mhxQ2hl3gvhwCjKv8DCCsQABoMNjM3NDIzMTgzODA1IgyOzCFyHc0B4pUEbSoq3ANu745ln4Mbkmovsrq9kupKbN7JAUwf%2BSBBAd26IIe4iXRrPBJ0GYKsj%2FxoAKwAdvBLf2LEX8hjkXg%2FX%2B53Q%2F%2FMKhs541vpLZ65obYk%2FwGofRzgzYFCYBejGzCu3Ir2GOGWWCBgefi8YClm%2BHZc0KevsGo9ZnmmIMEcDd3pltep5g7GKRfuHVhPUyYyzoRYzhogkSiAeHE35Jl6VlM7XeFcmMXPPnL4srh0YO5f0nsUjHoASnGK%2FdBFJeobPrkOHwGoBuXE7C0h6fmJTMuyDSqZ9AqkUkVhjYMruo5tS65JBHJ20IaWO2plkcG5QWExtln7z%2FkHy0XZXR%2F6E1U503lKRrzTzEchFT7WutWFW5oUriQCg3gS1PpL9zvalY7APCiuUU2xkVXwRnXjWSRvqFuCpYH7JYwEnxMtPsOchWkFm0nuCjnomEaYtDHyVtXKKxnGKp0Al9ISfxbpw%2BGrnRr0uv2HkcLhc5w9uj4LIGqFZU1S5014ImHQSYBaTcvTRKcFjNuaRet0%2FFiT74gkISRPbbyLsx2WTwdJ7L9hDl1lGodFR%2FgRyC5120epVshlGj3avt5sNrlhd%2B8f4jueCM%2BMxYwz1pNCaMYMjq4cUC2QGqHi%2BkqMedvOaZLmWzCmqpvPBjqkAaNFJ08DXxhEJmMQ8qSmb%2FXxoIw%2FX%2BF5pA5oWOK2qLx7SlLi4HzayQrpk3u0kd9WI6NGZTxIHg8EVmiekDxfq7QvUi66i2RKEOXsFa5exxSv79dLeKH6yRwl1J%2FLfOX209c2ZrOV5AEGhaHMUfPJoi62KKVHq0k2tpt4yiozTPrqW6I%2FNBY2v5zzZTHdGbJCjH7SN4yUdP8K4gkhMr5sQG1tIBhz&X-Amz-Signature=e8f22dadd1b2ad286e9744752ea37dcc7512f06fe064ea6535906ac12bf5de6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663FDOHCM%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC%2BJe0e0ipdG5YlhuvxayJdpu0N8RC5xuDofdsDiEefZwIhAMa1CjeIJtLGgpoB%2BWTT70Q%2BOgaHQ9mhxQ2hl3gvhwCjKv8DCCsQABoMNjM3NDIzMTgzODA1IgyOzCFyHc0B4pUEbSoq3ANu745ln4Mbkmovsrq9kupKbN7JAUwf%2BSBBAd26IIe4iXRrPBJ0GYKsj%2FxoAKwAdvBLf2LEX8hjkXg%2FX%2B53Q%2F%2FMKhs541vpLZ65obYk%2FwGofRzgzYFCYBejGzCu3Ir2GOGWWCBgefi8YClm%2BHZc0KevsGo9ZnmmIMEcDd3pltep5g7GKRfuHVhPUyYyzoRYzhogkSiAeHE35Jl6VlM7XeFcmMXPPnL4srh0YO5f0nsUjHoASnGK%2FdBFJeobPrkOHwGoBuXE7C0h6fmJTMuyDSqZ9AqkUkVhjYMruo5tS65JBHJ20IaWO2plkcG5QWExtln7z%2FkHy0XZXR%2F6E1U503lKRrzTzEchFT7WutWFW5oUriQCg3gS1PpL9zvalY7APCiuUU2xkVXwRnXjWSRvqFuCpYH7JYwEnxMtPsOchWkFm0nuCjnomEaYtDHyVtXKKxnGKp0Al9ISfxbpw%2BGrnRr0uv2HkcLhc5w9uj4LIGqFZU1S5014ImHQSYBaTcvTRKcFjNuaRet0%2FFiT74gkISRPbbyLsx2WTwdJ7L9hDl1lGodFR%2FgRyC5120epVshlGj3avt5sNrlhd%2B8f4jueCM%2BMxYwz1pNCaMYMjq4cUC2QGqHi%2BkqMedvOaZLmWzCmqpvPBjqkAaNFJ08DXxhEJmMQ8qSmb%2FXxoIw%2FX%2BF5pA5oWOK2qLx7SlLi4HzayQrpk3u0kd9WI6NGZTxIHg8EVmiekDxfq7QvUi66i2RKEOXsFa5exxSv79dLeKH6yRwl1J%2FLfOX209c2ZrOV5AEGhaHMUfPJoi62KKVHq0k2tpt4yiozTPrqW6I%2FNBY2v5zzZTHdGbJCjH7SN4yUdP8K4gkhMr5sQG1tIBhz&X-Amz-Signature=17969c565d08296e10954398a624c5f23c651f39810c11a47b4157f429ebf9ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663FDOHCM%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC%2BJe0e0ipdG5YlhuvxayJdpu0N8RC5xuDofdsDiEefZwIhAMa1CjeIJtLGgpoB%2BWTT70Q%2BOgaHQ9mhxQ2hl3gvhwCjKv8DCCsQABoMNjM3NDIzMTgzODA1IgyOzCFyHc0B4pUEbSoq3ANu745ln4Mbkmovsrq9kupKbN7JAUwf%2BSBBAd26IIe4iXRrPBJ0GYKsj%2FxoAKwAdvBLf2LEX8hjkXg%2FX%2B53Q%2F%2FMKhs541vpLZ65obYk%2FwGofRzgzYFCYBejGzCu3Ir2GOGWWCBgefi8YClm%2BHZc0KevsGo9ZnmmIMEcDd3pltep5g7GKRfuHVhPUyYyzoRYzhogkSiAeHE35Jl6VlM7XeFcmMXPPnL4srh0YO5f0nsUjHoASnGK%2FdBFJeobPrkOHwGoBuXE7C0h6fmJTMuyDSqZ9AqkUkVhjYMruo5tS65JBHJ20IaWO2plkcG5QWExtln7z%2FkHy0XZXR%2F6E1U503lKRrzTzEchFT7WutWFW5oUriQCg3gS1PpL9zvalY7APCiuUU2xkVXwRnXjWSRvqFuCpYH7JYwEnxMtPsOchWkFm0nuCjnomEaYtDHyVtXKKxnGKp0Al9ISfxbpw%2BGrnRr0uv2HkcLhc5w9uj4LIGqFZU1S5014ImHQSYBaTcvTRKcFjNuaRet0%2FFiT74gkISRPbbyLsx2WTwdJ7L9hDl1lGodFR%2FgRyC5120epVshlGj3avt5sNrlhd%2B8f4jueCM%2BMxYwz1pNCaMYMjq4cUC2QGqHi%2BkqMedvOaZLmWzCmqpvPBjqkAaNFJ08DXxhEJmMQ8qSmb%2FXxoIw%2FX%2BF5pA5oWOK2qLx7SlLi4HzayQrpk3u0kd9WI6NGZTxIHg8EVmiekDxfq7QvUi66i2RKEOXsFa5exxSv79dLeKH6yRwl1J%2FLfOX209c2ZrOV5AEGhaHMUfPJoi62KKVHq0k2tpt4yiozTPrqW6I%2FNBY2v5zzZTHdGbJCjH7SN4yUdP8K4gkhMr5sQG1tIBhz&X-Amz-Signature=73c8c56b3b96900fdc01993e7e435879386a499268de0ae1a30e4d3f304c51d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663FDOHCM%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC%2BJe0e0ipdG5YlhuvxayJdpu0N8RC5xuDofdsDiEefZwIhAMa1CjeIJtLGgpoB%2BWTT70Q%2BOgaHQ9mhxQ2hl3gvhwCjKv8DCCsQABoMNjM3NDIzMTgzODA1IgyOzCFyHc0B4pUEbSoq3ANu745ln4Mbkmovsrq9kupKbN7JAUwf%2BSBBAd26IIe4iXRrPBJ0GYKsj%2FxoAKwAdvBLf2LEX8hjkXg%2FX%2B53Q%2F%2FMKhs541vpLZ65obYk%2FwGofRzgzYFCYBejGzCu3Ir2GOGWWCBgefi8YClm%2BHZc0KevsGo9ZnmmIMEcDd3pltep5g7GKRfuHVhPUyYyzoRYzhogkSiAeHE35Jl6VlM7XeFcmMXPPnL4srh0YO5f0nsUjHoASnGK%2FdBFJeobPrkOHwGoBuXE7C0h6fmJTMuyDSqZ9AqkUkVhjYMruo5tS65JBHJ20IaWO2plkcG5QWExtln7z%2FkHy0XZXR%2F6E1U503lKRrzTzEchFT7WutWFW5oUriQCg3gS1PpL9zvalY7APCiuUU2xkVXwRnXjWSRvqFuCpYH7JYwEnxMtPsOchWkFm0nuCjnomEaYtDHyVtXKKxnGKp0Al9ISfxbpw%2BGrnRr0uv2HkcLhc5w9uj4LIGqFZU1S5014ImHQSYBaTcvTRKcFjNuaRet0%2FFiT74gkISRPbbyLsx2WTwdJ7L9hDl1lGodFR%2FgRyC5120epVshlGj3avt5sNrlhd%2B8f4jueCM%2BMxYwz1pNCaMYMjq4cUC2QGqHi%2BkqMedvOaZLmWzCmqpvPBjqkAaNFJ08DXxhEJmMQ8qSmb%2FXxoIw%2FX%2BF5pA5oWOK2qLx7SlLi4HzayQrpk3u0kd9WI6NGZTxIHg8EVmiekDxfq7QvUi66i2RKEOXsFa5exxSv79dLeKH6yRwl1J%2FLfOX209c2ZrOV5AEGhaHMUfPJoi62KKVHq0k2tpt4yiozTPrqW6I%2FNBY2v5zzZTHdGbJCjH7SN4yUdP8K4gkhMr5sQG1tIBhz&X-Amz-Signature=741166e21636dda3102438282ad1034526f87dcb8e149cc473e50cdd70383a06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663FDOHCM%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC%2BJe0e0ipdG5YlhuvxayJdpu0N8RC5xuDofdsDiEefZwIhAMa1CjeIJtLGgpoB%2BWTT70Q%2BOgaHQ9mhxQ2hl3gvhwCjKv8DCCsQABoMNjM3NDIzMTgzODA1IgyOzCFyHc0B4pUEbSoq3ANu745ln4Mbkmovsrq9kupKbN7JAUwf%2BSBBAd26IIe4iXRrPBJ0GYKsj%2FxoAKwAdvBLf2LEX8hjkXg%2FX%2B53Q%2F%2FMKhs541vpLZ65obYk%2FwGofRzgzYFCYBejGzCu3Ir2GOGWWCBgefi8YClm%2BHZc0KevsGo9ZnmmIMEcDd3pltep5g7GKRfuHVhPUyYyzoRYzhogkSiAeHE35Jl6VlM7XeFcmMXPPnL4srh0YO5f0nsUjHoASnGK%2FdBFJeobPrkOHwGoBuXE7C0h6fmJTMuyDSqZ9AqkUkVhjYMruo5tS65JBHJ20IaWO2plkcG5QWExtln7z%2FkHy0XZXR%2F6E1U503lKRrzTzEchFT7WutWFW5oUriQCg3gS1PpL9zvalY7APCiuUU2xkVXwRnXjWSRvqFuCpYH7JYwEnxMtPsOchWkFm0nuCjnomEaYtDHyVtXKKxnGKp0Al9ISfxbpw%2BGrnRr0uv2HkcLhc5w9uj4LIGqFZU1S5014ImHQSYBaTcvTRKcFjNuaRet0%2FFiT74gkISRPbbyLsx2WTwdJ7L9hDl1lGodFR%2FgRyC5120epVshlGj3avt5sNrlhd%2B8f4jueCM%2BMxYwz1pNCaMYMjq4cUC2QGqHi%2BkqMedvOaZLmWzCmqpvPBjqkAaNFJ08DXxhEJmMQ8qSmb%2FXxoIw%2FX%2BF5pA5oWOK2qLx7SlLi4HzayQrpk3u0kd9WI6NGZTxIHg8EVmiekDxfq7QvUi66i2RKEOXsFa5exxSv79dLeKH6yRwl1J%2FLfOX209c2ZrOV5AEGhaHMUfPJoi62KKVHq0k2tpt4yiozTPrqW6I%2FNBY2v5zzZTHdGbJCjH7SN4yUdP8K4gkhMr5sQG1tIBhz&X-Amz-Signature=e748a11851930daf0a9858ab9cf2d923cd34cf3dae2afe42f087ac616a9a10d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663FDOHCM%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC%2BJe0e0ipdG5YlhuvxayJdpu0N8RC5xuDofdsDiEefZwIhAMa1CjeIJtLGgpoB%2BWTT70Q%2BOgaHQ9mhxQ2hl3gvhwCjKv8DCCsQABoMNjM3NDIzMTgzODA1IgyOzCFyHc0B4pUEbSoq3ANu745ln4Mbkmovsrq9kupKbN7JAUwf%2BSBBAd26IIe4iXRrPBJ0GYKsj%2FxoAKwAdvBLf2LEX8hjkXg%2FX%2B53Q%2F%2FMKhs541vpLZ65obYk%2FwGofRzgzYFCYBejGzCu3Ir2GOGWWCBgefi8YClm%2BHZc0KevsGo9ZnmmIMEcDd3pltep5g7GKRfuHVhPUyYyzoRYzhogkSiAeHE35Jl6VlM7XeFcmMXPPnL4srh0YO5f0nsUjHoASnGK%2FdBFJeobPrkOHwGoBuXE7C0h6fmJTMuyDSqZ9AqkUkVhjYMruo5tS65JBHJ20IaWO2plkcG5QWExtln7z%2FkHy0XZXR%2F6E1U503lKRrzTzEchFT7WutWFW5oUriQCg3gS1PpL9zvalY7APCiuUU2xkVXwRnXjWSRvqFuCpYH7JYwEnxMtPsOchWkFm0nuCjnomEaYtDHyVtXKKxnGKp0Al9ISfxbpw%2BGrnRr0uv2HkcLhc5w9uj4LIGqFZU1S5014ImHQSYBaTcvTRKcFjNuaRet0%2FFiT74gkISRPbbyLsx2WTwdJ7L9hDl1lGodFR%2FgRyC5120epVshlGj3avt5sNrlhd%2B8f4jueCM%2BMxYwz1pNCaMYMjq4cUC2QGqHi%2BkqMedvOaZLmWzCmqpvPBjqkAaNFJ08DXxhEJmMQ8qSmb%2FXxoIw%2FX%2BF5pA5oWOK2qLx7SlLi4HzayQrpk3u0kd9WI6NGZTxIHg8EVmiekDxfq7QvUi66i2RKEOXsFa5exxSv79dLeKH6yRwl1J%2FLfOX209c2ZrOV5AEGhaHMUfPJoi62KKVHq0k2tpt4yiozTPrqW6I%2FNBY2v5zzZTHdGbJCjH7SN4yUdP8K4gkhMr5sQG1tIBhz&X-Amz-Signature=32a723a44b78272a3ed69c0ab00bb0aaa56d267f536dacece3c9569f1d293c14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663FDOHCM%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC%2BJe0e0ipdG5YlhuvxayJdpu0N8RC5xuDofdsDiEefZwIhAMa1CjeIJtLGgpoB%2BWTT70Q%2BOgaHQ9mhxQ2hl3gvhwCjKv8DCCsQABoMNjM3NDIzMTgzODA1IgyOzCFyHc0B4pUEbSoq3ANu745ln4Mbkmovsrq9kupKbN7JAUwf%2BSBBAd26IIe4iXRrPBJ0GYKsj%2FxoAKwAdvBLf2LEX8hjkXg%2FX%2B53Q%2F%2FMKhs541vpLZ65obYk%2FwGofRzgzYFCYBejGzCu3Ir2GOGWWCBgefi8YClm%2BHZc0KevsGo9ZnmmIMEcDd3pltep5g7GKRfuHVhPUyYyzoRYzhogkSiAeHE35Jl6VlM7XeFcmMXPPnL4srh0YO5f0nsUjHoASnGK%2FdBFJeobPrkOHwGoBuXE7C0h6fmJTMuyDSqZ9AqkUkVhjYMruo5tS65JBHJ20IaWO2plkcG5QWExtln7z%2FkHy0XZXR%2F6E1U503lKRrzTzEchFT7WutWFW5oUriQCg3gS1PpL9zvalY7APCiuUU2xkVXwRnXjWSRvqFuCpYH7JYwEnxMtPsOchWkFm0nuCjnomEaYtDHyVtXKKxnGKp0Al9ISfxbpw%2BGrnRr0uv2HkcLhc5w9uj4LIGqFZU1S5014ImHQSYBaTcvTRKcFjNuaRet0%2FFiT74gkISRPbbyLsx2WTwdJ7L9hDl1lGodFR%2FgRyC5120epVshlGj3avt5sNrlhd%2B8f4jueCM%2BMxYwz1pNCaMYMjq4cUC2QGqHi%2BkqMedvOaZLmWzCmqpvPBjqkAaNFJ08DXxhEJmMQ8qSmb%2FXxoIw%2FX%2BF5pA5oWOK2qLx7SlLi4HzayQrpk3u0kd9WI6NGZTxIHg8EVmiekDxfq7QvUi66i2RKEOXsFa5exxSv79dLeKH6yRwl1J%2FLfOX209c2ZrOV5AEGhaHMUfPJoi62KKVHq0k2tpt4yiozTPrqW6I%2FNBY2v5zzZTHdGbJCjH7SN4yUdP8K4gkhMr5sQG1tIBhz&X-Amz-Signature=5c798c154b332f3dae31354ac4634619e1615ca7340e9e43c7e7a208d6436b5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663FDOHCM%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC%2BJe0e0ipdG5YlhuvxayJdpu0N8RC5xuDofdsDiEefZwIhAMa1CjeIJtLGgpoB%2BWTT70Q%2BOgaHQ9mhxQ2hl3gvhwCjKv8DCCsQABoMNjM3NDIzMTgzODA1IgyOzCFyHc0B4pUEbSoq3ANu745ln4Mbkmovsrq9kupKbN7JAUwf%2BSBBAd26IIe4iXRrPBJ0GYKsj%2FxoAKwAdvBLf2LEX8hjkXg%2FX%2B53Q%2F%2FMKhs541vpLZ65obYk%2FwGofRzgzYFCYBejGzCu3Ir2GOGWWCBgefi8YClm%2BHZc0KevsGo9ZnmmIMEcDd3pltep5g7GKRfuHVhPUyYyzoRYzhogkSiAeHE35Jl6VlM7XeFcmMXPPnL4srh0YO5f0nsUjHoASnGK%2FdBFJeobPrkOHwGoBuXE7C0h6fmJTMuyDSqZ9AqkUkVhjYMruo5tS65JBHJ20IaWO2plkcG5QWExtln7z%2FkHy0XZXR%2F6E1U503lKRrzTzEchFT7WutWFW5oUriQCg3gS1PpL9zvalY7APCiuUU2xkVXwRnXjWSRvqFuCpYH7JYwEnxMtPsOchWkFm0nuCjnomEaYtDHyVtXKKxnGKp0Al9ISfxbpw%2BGrnRr0uv2HkcLhc5w9uj4LIGqFZU1S5014ImHQSYBaTcvTRKcFjNuaRet0%2FFiT74gkISRPbbyLsx2WTwdJ7L9hDl1lGodFR%2FgRyC5120epVshlGj3avt5sNrlhd%2B8f4jueCM%2BMxYwz1pNCaMYMjq4cUC2QGqHi%2BkqMedvOaZLmWzCmqpvPBjqkAaNFJ08DXxhEJmMQ8qSmb%2FXxoIw%2FX%2BF5pA5oWOK2qLx7SlLi4HzayQrpk3u0kd9WI6NGZTxIHg8EVmiekDxfq7QvUi66i2RKEOXsFa5exxSv79dLeKH6yRwl1J%2FLfOX209c2ZrOV5AEGhaHMUfPJoi62KKVHq0k2tpt4yiozTPrqW6I%2FNBY2v5zzZTHdGbJCjH7SN4yUdP8K4gkhMr5sQG1tIBhz&X-Amz-Signature=8c754476fb164dda11da1f3632941facefc371b0bc06abfb48c2219e6d2e9859&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663FDOHCM%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC%2BJe0e0ipdG5YlhuvxayJdpu0N8RC5xuDofdsDiEefZwIhAMa1CjeIJtLGgpoB%2BWTT70Q%2BOgaHQ9mhxQ2hl3gvhwCjKv8DCCsQABoMNjM3NDIzMTgzODA1IgyOzCFyHc0B4pUEbSoq3ANu745ln4Mbkmovsrq9kupKbN7JAUwf%2BSBBAd26IIe4iXRrPBJ0GYKsj%2FxoAKwAdvBLf2LEX8hjkXg%2FX%2B53Q%2F%2FMKhs541vpLZ65obYk%2FwGofRzgzYFCYBejGzCu3Ir2GOGWWCBgefi8YClm%2BHZc0KevsGo9ZnmmIMEcDd3pltep5g7GKRfuHVhPUyYyzoRYzhogkSiAeHE35Jl6VlM7XeFcmMXPPnL4srh0YO5f0nsUjHoASnGK%2FdBFJeobPrkOHwGoBuXE7C0h6fmJTMuyDSqZ9AqkUkVhjYMruo5tS65JBHJ20IaWO2plkcG5QWExtln7z%2FkHy0XZXR%2F6E1U503lKRrzTzEchFT7WutWFW5oUriQCg3gS1PpL9zvalY7APCiuUU2xkVXwRnXjWSRvqFuCpYH7JYwEnxMtPsOchWkFm0nuCjnomEaYtDHyVtXKKxnGKp0Al9ISfxbpw%2BGrnRr0uv2HkcLhc5w9uj4LIGqFZU1S5014ImHQSYBaTcvTRKcFjNuaRet0%2FFiT74gkISRPbbyLsx2WTwdJ7L9hDl1lGodFR%2FgRyC5120epVshlGj3avt5sNrlhd%2B8f4jueCM%2BMxYwz1pNCaMYMjq4cUC2QGqHi%2BkqMedvOaZLmWzCmqpvPBjqkAaNFJ08DXxhEJmMQ8qSmb%2FXxoIw%2FX%2BF5pA5oWOK2qLx7SlLi4HzayQrpk3u0kd9WI6NGZTxIHg8EVmiekDxfq7QvUi66i2RKEOXsFa5exxSv79dLeKH6yRwl1J%2FLfOX209c2ZrOV5AEGhaHMUfPJoi62KKVHq0k2tpt4yiozTPrqW6I%2FNBY2v5zzZTHdGbJCjH7SN4yUdP8K4gkhMr5sQG1tIBhz&X-Amz-Signature=cad9e00186390cfd5b33af1e84ea6efba4c9b930be66713a5d6518e9461fc594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663FDOHCM%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC%2BJe0e0ipdG5YlhuvxayJdpu0N8RC5xuDofdsDiEefZwIhAMa1CjeIJtLGgpoB%2BWTT70Q%2BOgaHQ9mhxQ2hl3gvhwCjKv8DCCsQABoMNjM3NDIzMTgzODA1IgyOzCFyHc0B4pUEbSoq3ANu745ln4Mbkmovsrq9kupKbN7JAUwf%2BSBBAd26IIe4iXRrPBJ0GYKsj%2FxoAKwAdvBLf2LEX8hjkXg%2FX%2B53Q%2F%2FMKhs541vpLZ65obYk%2FwGofRzgzYFCYBejGzCu3Ir2GOGWWCBgefi8YClm%2BHZc0KevsGo9ZnmmIMEcDd3pltep5g7GKRfuHVhPUyYyzoRYzhogkSiAeHE35Jl6VlM7XeFcmMXPPnL4srh0YO5f0nsUjHoASnGK%2FdBFJeobPrkOHwGoBuXE7C0h6fmJTMuyDSqZ9AqkUkVhjYMruo5tS65JBHJ20IaWO2plkcG5QWExtln7z%2FkHy0XZXR%2F6E1U503lKRrzTzEchFT7WutWFW5oUriQCg3gS1PpL9zvalY7APCiuUU2xkVXwRnXjWSRvqFuCpYH7JYwEnxMtPsOchWkFm0nuCjnomEaYtDHyVtXKKxnGKp0Al9ISfxbpw%2BGrnRr0uv2HkcLhc5w9uj4LIGqFZU1S5014ImHQSYBaTcvTRKcFjNuaRet0%2FFiT74gkISRPbbyLsx2WTwdJ7L9hDl1lGodFR%2FgRyC5120epVshlGj3avt5sNrlhd%2B8f4jueCM%2BMxYwz1pNCaMYMjq4cUC2QGqHi%2BkqMedvOaZLmWzCmqpvPBjqkAaNFJ08DXxhEJmMQ8qSmb%2FXxoIw%2FX%2BF5pA5oWOK2qLx7SlLi4HzayQrpk3u0kd9WI6NGZTxIHg8EVmiekDxfq7QvUi66i2RKEOXsFa5exxSv79dLeKH6yRwl1J%2FLfOX209c2ZrOV5AEGhaHMUfPJoi62KKVHq0k2tpt4yiozTPrqW6I%2FNBY2v5zzZTHdGbJCjH7SN4yUdP8K4gkhMr5sQG1tIBhz&X-Amz-Signature=39bdb658bf4b09ace0d1d4c9eb0193acfd3d0b0ff82868e70f156f23307f842e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663FDOHCM%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC%2BJe0e0ipdG5YlhuvxayJdpu0N8RC5xuDofdsDiEefZwIhAMa1CjeIJtLGgpoB%2BWTT70Q%2BOgaHQ9mhxQ2hl3gvhwCjKv8DCCsQABoMNjM3NDIzMTgzODA1IgyOzCFyHc0B4pUEbSoq3ANu745ln4Mbkmovsrq9kupKbN7JAUwf%2BSBBAd26IIe4iXRrPBJ0GYKsj%2FxoAKwAdvBLf2LEX8hjkXg%2FX%2B53Q%2F%2FMKhs541vpLZ65obYk%2FwGofRzgzYFCYBejGzCu3Ir2GOGWWCBgefi8YClm%2BHZc0KevsGo9ZnmmIMEcDd3pltep5g7GKRfuHVhPUyYyzoRYzhogkSiAeHE35Jl6VlM7XeFcmMXPPnL4srh0YO5f0nsUjHoASnGK%2FdBFJeobPrkOHwGoBuXE7C0h6fmJTMuyDSqZ9AqkUkVhjYMruo5tS65JBHJ20IaWO2plkcG5QWExtln7z%2FkHy0XZXR%2F6E1U503lKRrzTzEchFT7WutWFW5oUriQCg3gS1PpL9zvalY7APCiuUU2xkVXwRnXjWSRvqFuCpYH7JYwEnxMtPsOchWkFm0nuCjnomEaYtDHyVtXKKxnGKp0Al9ISfxbpw%2BGrnRr0uv2HkcLhc5w9uj4LIGqFZU1S5014ImHQSYBaTcvTRKcFjNuaRet0%2FFiT74gkISRPbbyLsx2WTwdJ7L9hDl1lGodFR%2FgRyC5120epVshlGj3avt5sNrlhd%2B8f4jueCM%2BMxYwz1pNCaMYMjq4cUC2QGqHi%2BkqMedvOaZLmWzCmqpvPBjqkAaNFJ08DXxhEJmMQ8qSmb%2FXxoIw%2FX%2BF5pA5oWOK2qLx7SlLi4HzayQrpk3u0kd9WI6NGZTxIHg8EVmiekDxfq7QvUi66i2RKEOXsFa5exxSv79dLeKH6yRwl1J%2FLfOX209c2ZrOV5AEGhaHMUfPJoi62KKVHq0k2tpt4yiozTPrqW6I%2FNBY2v5zzZTHdGbJCjH7SN4yUdP8K4gkhMr5sQG1tIBhz&X-Amz-Signature=247da39b639b7093f224cb7712bb4ac868ec958dab2280cc6f4d7a3b95ef038e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
