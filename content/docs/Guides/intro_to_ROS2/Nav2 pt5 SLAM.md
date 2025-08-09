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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO7VQND7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGYIqRk93zDrnz0iO33Bi2B9kl3UiIk2D3xvWLwyw7UqAiAk9pwXKFTNOxKYY7G%2FLFJWhbfqHrDEN4z%2FfwPZCgfU7CqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvYXwGJ8qhlmMz1uxKtwDSUDK%2FKGZe81LdNdMpVLEy4tZ3kgY%2BRNBqO%2FYWx0JUiANBHZpflNFYWjf1XsdC7CRc%2FXEjYo3Pv5gYBYDzTi1RfR2em5H6MEOtp%2FiuGD4V7Soh8kTUvc0u3rLa7XpfqWd4Fxn%2BwHr7qkRSLWi5pisAfNyb9eCWF5UPJ%2B7oOJHuWGjon%2Brmm%2FCOUqsLJjtL8REyF6H%2F3gEoTLyvZ0VAoIQzvGy0o%2F4vQfwuRbPyLPr3f2BoM2GLi92uzVf0ne%2BPBhHABd2i28%2F4yfukde%2FaQKGJ%2FtrBmUxHFpJ%2FOkaE9zj90SS1279gw%2Bk1R3Y3j5gF1ZY3mdRvifTqL3ehKVEUdxB8I0hGy0w4C2t8W34v%2BdIf3UnEMyIhxbPqrqSy5ScldaW1oufwzOI%2FPplPIeUU8yD7iiNu0jBnK%2BE3iHRSdkur64B0lxHENp8qlGmO6og5aG%2FCEy2O8XMwi2hi2bjaefUB6UDGv4Z3QMBSXaJQxXzXRQ5S0U6cLPBU8sCZPCGxGfDRBKcec%2F4rZrXMAke25U4R6NT3bku2FCTJ9V2KHWIUlIQj3Rk1MxFRm3fUmfBYyujrJsFjvOeAys66ovNFoQKxXnNfTdqGga73e2yupWduhFdTUlP7V%2BvOayK4hkwp8rbxAY6pgGla1Ana8FU8rh5G3sJZbifwjYssO9zDmhjcpzFI5wr9vM85DT3Cs2Azjwt%2FAWZw2bJW%2BFWuCIpsdehB%2BGjY9MuqOSBgV8eeqe3HlWhfRfWBsAVtIvqovm7ED3X2RxCc6Yt2AORHV9gmBjVtUSd3H1VYg7iWiluKeKRgt6r9XIhX5%2FIkOSRjseNPem73ir0bFuadfEHVXVGV64%2F%2F9fVQ6Cd2bL9sxEw&X-Amz-Signature=45d7eb0fe417d41528f7a69d2777d58484a7ffb6edccc16a23966f7519399b4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO7VQND7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGYIqRk93zDrnz0iO33Bi2B9kl3UiIk2D3xvWLwyw7UqAiAk9pwXKFTNOxKYY7G%2FLFJWhbfqHrDEN4z%2FfwPZCgfU7CqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvYXwGJ8qhlmMz1uxKtwDSUDK%2FKGZe81LdNdMpVLEy4tZ3kgY%2BRNBqO%2FYWx0JUiANBHZpflNFYWjf1XsdC7CRc%2FXEjYo3Pv5gYBYDzTi1RfR2em5H6MEOtp%2FiuGD4V7Soh8kTUvc0u3rLa7XpfqWd4Fxn%2BwHr7qkRSLWi5pisAfNyb9eCWF5UPJ%2B7oOJHuWGjon%2Brmm%2FCOUqsLJjtL8REyF6H%2F3gEoTLyvZ0VAoIQzvGy0o%2F4vQfwuRbPyLPr3f2BoM2GLi92uzVf0ne%2BPBhHABd2i28%2F4yfukde%2FaQKGJ%2FtrBmUxHFpJ%2FOkaE9zj90SS1279gw%2Bk1R3Y3j5gF1ZY3mdRvifTqL3ehKVEUdxB8I0hGy0w4C2t8W34v%2BdIf3UnEMyIhxbPqrqSy5ScldaW1oufwzOI%2FPplPIeUU8yD7iiNu0jBnK%2BE3iHRSdkur64B0lxHENp8qlGmO6og5aG%2FCEy2O8XMwi2hi2bjaefUB6UDGv4Z3QMBSXaJQxXzXRQ5S0U6cLPBU8sCZPCGxGfDRBKcec%2F4rZrXMAke25U4R6NT3bku2FCTJ9V2KHWIUlIQj3Rk1MxFRm3fUmfBYyujrJsFjvOeAys66ovNFoQKxXnNfTdqGga73e2yupWduhFdTUlP7V%2BvOayK4hkwp8rbxAY6pgGla1Ana8FU8rh5G3sJZbifwjYssO9zDmhjcpzFI5wr9vM85DT3Cs2Azjwt%2FAWZw2bJW%2BFWuCIpsdehB%2BGjY9MuqOSBgV8eeqe3HlWhfRfWBsAVtIvqovm7ED3X2RxCc6Yt2AORHV9gmBjVtUSd3H1VYg7iWiluKeKRgt6r9XIhX5%2FIkOSRjseNPem73ir0bFuadfEHVXVGV64%2F%2F9fVQ6Cd2bL9sxEw&X-Amz-Signature=b5b9d6c4a79c07ef2eeff72e37e2c67efadf5c91f859b049be6427ba763455c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO7VQND7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGYIqRk93zDrnz0iO33Bi2B9kl3UiIk2D3xvWLwyw7UqAiAk9pwXKFTNOxKYY7G%2FLFJWhbfqHrDEN4z%2FfwPZCgfU7CqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvYXwGJ8qhlmMz1uxKtwDSUDK%2FKGZe81LdNdMpVLEy4tZ3kgY%2BRNBqO%2FYWx0JUiANBHZpflNFYWjf1XsdC7CRc%2FXEjYo3Pv5gYBYDzTi1RfR2em5H6MEOtp%2FiuGD4V7Soh8kTUvc0u3rLa7XpfqWd4Fxn%2BwHr7qkRSLWi5pisAfNyb9eCWF5UPJ%2B7oOJHuWGjon%2Brmm%2FCOUqsLJjtL8REyF6H%2F3gEoTLyvZ0VAoIQzvGy0o%2F4vQfwuRbPyLPr3f2BoM2GLi92uzVf0ne%2BPBhHABd2i28%2F4yfukde%2FaQKGJ%2FtrBmUxHFpJ%2FOkaE9zj90SS1279gw%2Bk1R3Y3j5gF1ZY3mdRvifTqL3ehKVEUdxB8I0hGy0w4C2t8W34v%2BdIf3UnEMyIhxbPqrqSy5ScldaW1oufwzOI%2FPplPIeUU8yD7iiNu0jBnK%2BE3iHRSdkur64B0lxHENp8qlGmO6og5aG%2FCEy2O8XMwi2hi2bjaefUB6UDGv4Z3QMBSXaJQxXzXRQ5S0U6cLPBU8sCZPCGxGfDRBKcec%2F4rZrXMAke25U4R6NT3bku2FCTJ9V2KHWIUlIQj3Rk1MxFRm3fUmfBYyujrJsFjvOeAys66ovNFoQKxXnNfTdqGga73e2yupWduhFdTUlP7V%2BvOayK4hkwp8rbxAY6pgGla1Ana8FU8rh5G3sJZbifwjYssO9zDmhjcpzFI5wr9vM85DT3Cs2Azjwt%2FAWZw2bJW%2BFWuCIpsdehB%2BGjY9MuqOSBgV8eeqe3HlWhfRfWBsAVtIvqovm7ED3X2RxCc6Yt2AORHV9gmBjVtUSd3H1VYg7iWiluKeKRgt6r9XIhX5%2FIkOSRjseNPem73ir0bFuadfEHVXVGV64%2F%2F9fVQ6Cd2bL9sxEw&X-Amz-Signature=f3b956a3beeb14e02d255b9d79b3f9703742b78079b60604eac33cbc3c66913b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO7VQND7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGYIqRk93zDrnz0iO33Bi2B9kl3UiIk2D3xvWLwyw7UqAiAk9pwXKFTNOxKYY7G%2FLFJWhbfqHrDEN4z%2FfwPZCgfU7CqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvYXwGJ8qhlmMz1uxKtwDSUDK%2FKGZe81LdNdMpVLEy4tZ3kgY%2BRNBqO%2FYWx0JUiANBHZpflNFYWjf1XsdC7CRc%2FXEjYo3Pv5gYBYDzTi1RfR2em5H6MEOtp%2FiuGD4V7Soh8kTUvc0u3rLa7XpfqWd4Fxn%2BwHr7qkRSLWi5pisAfNyb9eCWF5UPJ%2B7oOJHuWGjon%2Brmm%2FCOUqsLJjtL8REyF6H%2F3gEoTLyvZ0VAoIQzvGy0o%2F4vQfwuRbPyLPr3f2BoM2GLi92uzVf0ne%2BPBhHABd2i28%2F4yfukde%2FaQKGJ%2FtrBmUxHFpJ%2FOkaE9zj90SS1279gw%2Bk1R3Y3j5gF1ZY3mdRvifTqL3ehKVEUdxB8I0hGy0w4C2t8W34v%2BdIf3UnEMyIhxbPqrqSy5ScldaW1oufwzOI%2FPplPIeUU8yD7iiNu0jBnK%2BE3iHRSdkur64B0lxHENp8qlGmO6og5aG%2FCEy2O8XMwi2hi2bjaefUB6UDGv4Z3QMBSXaJQxXzXRQ5S0U6cLPBU8sCZPCGxGfDRBKcec%2F4rZrXMAke25U4R6NT3bku2FCTJ9V2KHWIUlIQj3Rk1MxFRm3fUmfBYyujrJsFjvOeAys66ovNFoQKxXnNfTdqGga73e2yupWduhFdTUlP7V%2BvOayK4hkwp8rbxAY6pgGla1Ana8FU8rh5G3sJZbifwjYssO9zDmhjcpzFI5wr9vM85DT3Cs2Azjwt%2FAWZw2bJW%2BFWuCIpsdehB%2BGjY9MuqOSBgV8eeqe3HlWhfRfWBsAVtIvqovm7ED3X2RxCc6Yt2AORHV9gmBjVtUSd3H1VYg7iWiluKeKRgt6r9XIhX5%2FIkOSRjseNPem73ir0bFuadfEHVXVGV64%2F%2F9fVQ6Cd2bL9sxEw&X-Amz-Signature=b1e245b468a2fbe4572372cd9788b9ba52143b4642641e89afb5d3676f7a7c8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO7VQND7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGYIqRk93zDrnz0iO33Bi2B9kl3UiIk2D3xvWLwyw7UqAiAk9pwXKFTNOxKYY7G%2FLFJWhbfqHrDEN4z%2FfwPZCgfU7CqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvYXwGJ8qhlmMz1uxKtwDSUDK%2FKGZe81LdNdMpVLEy4tZ3kgY%2BRNBqO%2FYWx0JUiANBHZpflNFYWjf1XsdC7CRc%2FXEjYo3Pv5gYBYDzTi1RfR2em5H6MEOtp%2FiuGD4V7Soh8kTUvc0u3rLa7XpfqWd4Fxn%2BwHr7qkRSLWi5pisAfNyb9eCWF5UPJ%2B7oOJHuWGjon%2Brmm%2FCOUqsLJjtL8REyF6H%2F3gEoTLyvZ0VAoIQzvGy0o%2F4vQfwuRbPyLPr3f2BoM2GLi92uzVf0ne%2BPBhHABd2i28%2F4yfukde%2FaQKGJ%2FtrBmUxHFpJ%2FOkaE9zj90SS1279gw%2Bk1R3Y3j5gF1ZY3mdRvifTqL3ehKVEUdxB8I0hGy0w4C2t8W34v%2BdIf3UnEMyIhxbPqrqSy5ScldaW1oufwzOI%2FPplPIeUU8yD7iiNu0jBnK%2BE3iHRSdkur64B0lxHENp8qlGmO6og5aG%2FCEy2O8XMwi2hi2bjaefUB6UDGv4Z3QMBSXaJQxXzXRQ5S0U6cLPBU8sCZPCGxGfDRBKcec%2F4rZrXMAke25U4R6NT3bku2FCTJ9V2KHWIUlIQj3Rk1MxFRm3fUmfBYyujrJsFjvOeAys66ovNFoQKxXnNfTdqGga73e2yupWduhFdTUlP7V%2BvOayK4hkwp8rbxAY6pgGla1Ana8FU8rh5G3sJZbifwjYssO9zDmhjcpzFI5wr9vM85DT3Cs2Azjwt%2FAWZw2bJW%2BFWuCIpsdehB%2BGjY9MuqOSBgV8eeqe3HlWhfRfWBsAVtIvqovm7ED3X2RxCc6Yt2AORHV9gmBjVtUSd3H1VYg7iWiluKeKRgt6r9XIhX5%2FIkOSRjseNPem73ir0bFuadfEHVXVGV64%2F%2F9fVQ6Cd2bL9sxEw&X-Amz-Signature=cfad2697ee712ddb845f2ce4b8bf959a1d4338a2944d5571128dc26ae8b80a37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO7VQND7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGYIqRk93zDrnz0iO33Bi2B9kl3UiIk2D3xvWLwyw7UqAiAk9pwXKFTNOxKYY7G%2FLFJWhbfqHrDEN4z%2FfwPZCgfU7CqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvYXwGJ8qhlmMz1uxKtwDSUDK%2FKGZe81LdNdMpVLEy4tZ3kgY%2BRNBqO%2FYWx0JUiANBHZpflNFYWjf1XsdC7CRc%2FXEjYo3Pv5gYBYDzTi1RfR2em5H6MEOtp%2FiuGD4V7Soh8kTUvc0u3rLa7XpfqWd4Fxn%2BwHr7qkRSLWi5pisAfNyb9eCWF5UPJ%2B7oOJHuWGjon%2Brmm%2FCOUqsLJjtL8REyF6H%2F3gEoTLyvZ0VAoIQzvGy0o%2F4vQfwuRbPyLPr3f2BoM2GLi92uzVf0ne%2BPBhHABd2i28%2F4yfukde%2FaQKGJ%2FtrBmUxHFpJ%2FOkaE9zj90SS1279gw%2Bk1R3Y3j5gF1ZY3mdRvifTqL3ehKVEUdxB8I0hGy0w4C2t8W34v%2BdIf3UnEMyIhxbPqrqSy5ScldaW1oufwzOI%2FPplPIeUU8yD7iiNu0jBnK%2BE3iHRSdkur64B0lxHENp8qlGmO6og5aG%2FCEy2O8XMwi2hi2bjaefUB6UDGv4Z3QMBSXaJQxXzXRQ5S0U6cLPBU8sCZPCGxGfDRBKcec%2F4rZrXMAke25U4R6NT3bku2FCTJ9V2KHWIUlIQj3Rk1MxFRm3fUmfBYyujrJsFjvOeAys66ovNFoQKxXnNfTdqGga73e2yupWduhFdTUlP7V%2BvOayK4hkwp8rbxAY6pgGla1Ana8FU8rh5G3sJZbifwjYssO9zDmhjcpzFI5wr9vM85DT3Cs2Azjwt%2FAWZw2bJW%2BFWuCIpsdehB%2BGjY9MuqOSBgV8eeqe3HlWhfRfWBsAVtIvqovm7ED3X2RxCc6Yt2AORHV9gmBjVtUSd3H1VYg7iWiluKeKRgt6r9XIhX5%2FIkOSRjseNPem73ir0bFuadfEHVXVGV64%2F%2F9fVQ6Cd2bL9sxEw&X-Amz-Signature=2301552e60753cf0a7a16e5a3ed7aa8d5b639170d7d87e86326b1d6b2e17cd12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO7VQND7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGYIqRk93zDrnz0iO33Bi2B9kl3UiIk2D3xvWLwyw7UqAiAk9pwXKFTNOxKYY7G%2FLFJWhbfqHrDEN4z%2FfwPZCgfU7CqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvYXwGJ8qhlmMz1uxKtwDSUDK%2FKGZe81LdNdMpVLEy4tZ3kgY%2BRNBqO%2FYWx0JUiANBHZpflNFYWjf1XsdC7CRc%2FXEjYo3Pv5gYBYDzTi1RfR2em5H6MEOtp%2FiuGD4V7Soh8kTUvc0u3rLa7XpfqWd4Fxn%2BwHr7qkRSLWi5pisAfNyb9eCWF5UPJ%2B7oOJHuWGjon%2Brmm%2FCOUqsLJjtL8REyF6H%2F3gEoTLyvZ0VAoIQzvGy0o%2F4vQfwuRbPyLPr3f2BoM2GLi92uzVf0ne%2BPBhHABd2i28%2F4yfukde%2FaQKGJ%2FtrBmUxHFpJ%2FOkaE9zj90SS1279gw%2Bk1R3Y3j5gF1ZY3mdRvifTqL3ehKVEUdxB8I0hGy0w4C2t8W34v%2BdIf3UnEMyIhxbPqrqSy5ScldaW1oufwzOI%2FPplPIeUU8yD7iiNu0jBnK%2BE3iHRSdkur64B0lxHENp8qlGmO6og5aG%2FCEy2O8XMwi2hi2bjaefUB6UDGv4Z3QMBSXaJQxXzXRQ5S0U6cLPBU8sCZPCGxGfDRBKcec%2F4rZrXMAke25U4R6NT3bku2FCTJ9V2KHWIUlIQj3Rk1MxFRm3fUmfBYyujrJsFjvOeAys66ovNFoQKxXnNfTdqGga73e2yupWduhFdTUlP7V%2BvOayK4hkwp8rbxAY6pgGla1Ana8FU8rh5G3sJZbifwjYssO9zDmhjcpzFI5wr9vM85DT3Cs2Azjwt%2FAWZw2bJW%2BFWuCIpsdehB%2BGjY9MuqOSBgV8eeqe3HlWhfRfWBsAVtIvqovm7ED3X2RxCc6Yt2AORHV9gmBjVtUSd3H1VYg7iWiluKeKRgt6r9XIhX5%2FIkOSRjseNPem73ir0bFuadfEHVXVGV64%2F%2F9fVQ6Cd2bL9sxEw&X-Amz-Signature=7d13c05f350caf4657f5a7ddd9d512a86a062ac0c95ed7a007658b69747ee068&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO7VQND7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGYIqRk93zDrnz0iO33Bi2B9kl3UiIk2D3xvWLwyw7UqAiAk9pwXKFTNOxKYY7G%2FLFJWhbfqHrDEN4z%2FfwPZCgfU7CqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvYXwGJ8qhlmMz1uxKtwDSUDK%2FKGZe81LdNdMpVLEy4tZ3kgY%2BRNBqO%2FYWx0JUiANBHZpflNFYWjf1XsdC7CRc%2FXEjYo3Pv5gYBYDzTi1RfR2em5H6MEOtp%2FiuGD4V7Soh8kTUvc0u3rLa7XpfqWd4Fxn%2BwHr7qkRSLWi5pisAfNyb9eCWF5UPJ%2B7oOJHuWGjon%2Brmm%2FCOUqsLJjtL8REyF6H%2F3gEoTLyvZ0VAoIQzvGy0o%2F4vQfwuRbPyLPr3f2BoM2GLi92uzVf0ne%2BPBhHABd2i28%2F4yfukde%2FaQKGJ%2FtrBmUxHFpJ%2FOkaE9zj90SS1279gw%2Bk1R3Y3j5gF1ZY3mdRvifTqL3ehKVEUdxB8I0hGy0w4C2t8W34v%2BdIf3UnEMyIhxbPqrqSy5ScldaW1oufwzOI%2FPplPIeUU8yD7iiNu0jBnK%2BE3iHRSdkur64B0lxHENp8qlGmO6og5aG%2FCEy2O8XMwi2hi2bjaefUB6UDGv4Z3QMBSXaJQxXzXRQ5S0U6cLPBU8sCZPCGxGfDRBKcec%2F4rZrXMAke25U4R6NT3bku2FCTJ9V2KHWIUlIQj3Rk1MxFRm3fUmfBYyujrJsFjvOeAys66ovNFoQKxXnNfTdqGga73e2yupWduhFdTUlP7V%2BvOayK4hkwp8rbxAY6pgGla1Ana8FU8rh5G3sJZbifwjYssO9zDmhjcpzFI5wr9vM85DT3Cs2Azjwt%2FAWZw2bJW%2BFWuCIpsdehB%2BGjY9MuqOSBgV8eeqe3HlWhfRfWBsAVtIvqovm7ED3X2RxCc6Yt2AORHV9gmBjVtUSd3H1VYg7iWiluKeKRgt6r9XIhX5%2FIkOSRjseNPem73ir0bFuadfEHVXVGV64%2F%2F9fVQ6Cd2bL9sxEw&X-Amz-Signature=640e54dcbba61895f68540a633b82492dddf951324df3254fc45d90619881373&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO7VQND7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGYIqRk93zDrnz0iO33Bi2B9kl3UiIk2D3xvWLwyw7UqAiAk9pwXKFTNOxKYY7G%2FLFJWhbfqHrDEN4z%2FfwPZCgfU7CqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvYXwGJ8qhlmMz1uxKtwDSUDK%2FKGZe81LdNdMpVLEy4tZ3kgY%2BRNBqO%2FYWx0JUiANBHZpflNFYWjf1XsdC7CRc%2FXEjYo3Pv5gYBYDzTi1RfR2em5H6MEOtp%2FiuGD4V7Soh8kTUvc0u3rLa7XpfqWd4Fxn%2BwHr7qkRSLWi5pisAfNyb9eCWF5UPJ%2B7oOJHuWGjon%2Brmm%2FCOUqsLJjtL8REyF6H%2F3gEoTLyvZ0VAoIQzvGy0o%2F4vQfwuRbPyLPr3f2BoM2GLi92uzVf0ne%2BPBhHABd2i28%2F4yfukde%2FaQKGJ%2FtrBmUxHFpJ%2FOkaE9zj90SS1279gw%2Bk1R3Y3j5gF1ZY3mdRvifTqL3ehKVEUdxB8I0hGy0w4C2t8W34v%2BdIf3UnEMyIhxbPqrqSy5ScldaW1oufwzOI%2FPplPIeUU8yD7iiNu0jBnK%2BE3iHRSdkur64B0lxHENp8qlGmO6og5aG%2FCEy2O8XMwi2hi2bjaefUB6UDGv4Z3QMBSXaJQxXzXRQ5S0U6cLPBU8sCZPCGxGfDRBKcec%2F4rZrXMAke25U4R6NT3bku2FCTJ9V2KHWIUlIQj3Rk1MxFRm3fUmfBYyujrJsFjvOeAys66ovNFoQKxXnNfTdqGga73e2yupWduhFdTUlP7V%2BvOayK4hkwp8rbxAY6pgGla1Ana8FU8rh5G3sJZbifwjYssO9zDmhjcpzFI5wr9vM85DT3Cs2Azjwt%2FAWZw2bJW%2BFWuCIpsdehB%2BGjY9MuqOSBgV8eeqe3HlWhfRfWBsAVtIvqovm7ED3X2RxCc6Yt2AORHV9gmBjVtUSd3H1VYg7iWiluKeKRgt6r9XIhX5%2FIkOSRjseNPem73ir0bFuadfEHVXVGV64%2F%2F9fVQ6Cd2bL9sxEw&X-Amz-Signature=322d5384c7f7c9d8badafb8b2b4fb4f41c9fb29373bb8583a617f9770e995396&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO7VQND7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGYIqRk93zDrnz0iO33Bi2B9kl3UiIk2D3xvWLwyw7UqAiAk9pwXKFTNOxKYY7G%2FLFJWhbfqHrDEN4z%2FfwPZCgfU7CqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvYXwGJ8qhlmMz1uxKtwDSUDK%2FKGZe81LdNdMpVLEy4tZ3kgY%2BRNBqO%2FYWx0JUiANBHZpflNFYWjf1XsdC7CRc%2FXEjYo3Pv5gYBYDzTi1RfR2em5H6MEOtp%2FiuGD4V7Soh8kTUvc0u3rLa7XpfqWd4Fxn%2BwHr7qkRSLWi5pisAfNyb9eCWF5UPJ%2B7oOJHuWGjon%2Brmm%2FCOUqsLJjtL8REyF6H%2F3gEoTLyvZ0VAoIQzvGy0o%2F4vQfwuRbPyLPr3f2BoM2GLi92uzVf0ne%2BPBhHABd2i28%2F4yfukde%2FaQKGJ%2FtrBmUxHFpJ%2FOkaE9zj90SS1279gw%2Bk1R3Y3j5gF1ZY3mdRvifTqL3ehKVEUdxB8I0hGy0w4C2t8W34v%2BdIf3UnEMyIhxbPqrqSy5ScldaW1oufwzOI%2FPplPIeUU8yD7iiNu0jBnK%2BE3iHRSdkur64B0lxHENp8qlGmO6og5aG%2FCEy2O8XMwi2hi2bjaefUB6UDGv4Z3QMBSXaJQxXzXRQ5S0U6cLPBU8sCZPCGxGfDRBKcec%2F4rZrXMAke25U4R6NT3bku2FCTJ9V2KHWIUlIQj3Rk1MxFRm3fUmfBYyujrJsFjvOeAys66ovNFoQKxXnNfTdqGga73e2yupWduhFdTUlP7V%2BvOayK4hkwp8rbxAY6pgGla1Ana8FU8rh5G3sJZbifwjYssO9zDmhjcpzFI5wr9vM85DT3Cs2Azjwt%2FAWZw2bJW%2BFWuCIpsdehB%2BGjY9MuqOSBgV8eeqe3HlWhfRfWBsAVtIvqovm7ED3X2RxCc6Yt2AORHV9gmBjVtUSd3H1VYg7iWiluKeKRgt6r9XIhX5%2FIkOSRjseNPem73ir0bFuadfEHVXVGV64%2F%2F9fVQ6Cd2bL9sxEw&X-Amz-Signature=64b2c932ee7b5050455ab8a9380264203b40fdd79feca0fa4e5f65b18c0e4ada&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO7VQND7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGYIqRk93zDrnz0iO33Bi2B9kl3UiIk2D3xvWLwyw7UqAiAk9pwXKFTNOxKYY7G%2FLFJWhbfqHrDEN4z%2FfwPZCgfU7CqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvYXwGJ8qhlmMz1uxKtwDSUDK%2FKGZe81LdNdMpVLEy4tZ3kgY%2BRNBqO%2FYWx0JUiANBHZpflNFYWjf1XsdC7CRc%2FXEjYo3Pv5gYBYDzTi1RfR2em5H6MEOtp%2FiuGD4V7Soh8kTUvc0u3rLa7XpfqWd4Fxn%2BwHr7qkRSLWi5pisAfNyb9eCWF5UPJ%2B7oOJHuWGjon%2Brmm%2FCOUqsLJjtL8REyF6H%2F3gEoTLyvZ0VAoIQzvGy0o%2F4vQfwuRbPyLPr3f2BoM2GLi92uzVf0ne%2BPBhHABd2i28%2F4yfukde%2FaQKGJ%2FtrBmUxHFpJ%2FOkaE9zj90SS1279gw%2Bk1R3Y3j5gF1ZY3mdRvifTqL3ehKVEUdxB8I0hGy0w4C2t8W34v%2BdIf3UnEMyIhxbPqrqSy5ScldaW1oufwzOI%2FPplPIeUU8yD7iiNu0jBnK%2BE3iHRSdkur64B0lxHENp8qlGmO6og5aG%2FCEy2O8XMwi2hi2bjaefUB6UDGv4Z3QMBSXaJQxXzXRQ5S0U6cLPBU8sCZPCGxGfDRBKcec%2F4rZrXMAke25U4R6NT3bku2FCTJ9V2KHWIUlIQj3Rk1MxFRm3fUmfBYyujrJsFjvOeAys66ovNFoQKxXnNfTdqGga73e2yupWduhFdTUlP7V%2BvOayK4hkwp8rbxAY6pgGla1Ana8FU8rh5G3sJZbifwjYssO9zDmhjcpzFI5wr9vM85DT3Cs2Azjwt%2FAWZw2bJW%2BFWuCIpsdehB%2BGjY9MuqOSBgV8eeqe3HlWhfRfWBsAVtIvqovm7ED3X2RxCc6Yt2AORHV9gmBjVtUSd3H1VYg7iWiluKeKRgt6r9XIhX5%2FIkOSRjseNPem73ir0bFuadfEHVXVGV64%2F%2F9fVQ6Cd2bL9sxEw&X-Amz-Signature=0e82e4fc68098c21ff9996c171a74b212bd21251fee7f3be51c4e1fd789efa18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO7VQND7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGYIqRk93zDrnz0iO33Bi2B9kl3UiIk2D3xvWLwyw7UqAiAk9pwXKFTNOxKYY7G%2FLFJWhbfqHrDEN4z%2FfwPZCgfU7CqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvYXwGJ8qhlmMz1uxKtwDSUDK%2FKGZe81LdNdMpVLEy4tZ3kgY%2BRNBqO%2FYWx0JUiANBHZpflNFYWjf1XsdC7CRc%2FXEjYo3Pv5gYBYDzTi1RfR2em5H6MEOtp%2FiuGD4V7Soh8kTUvc0u3rLa7XpfqWd4Fxn%2BwHr7qkRSLWi5pisAfNyb9eCWF5UPJ%2B7oOJHuWGjon%2Brmm%2FCOUqsLJjtL8REyF6H%2F3gEoTLyvZ0VAoIQzvGy0o%2F4vQfwuRbPyLPr3f2BoM2GLi92uzVf0ne%2BPBhHABd2i28%2F4yfukde%2FaQKGJ%2FtrBmUxHFpJ%2FOkaE9zj90SS1279gw%2Bk1R3Y3j5gF1ZY3mdRvifTqL3ehKVEUdxB8I0hGy0w4C2t8W34v%2BdIf3UnEMyIhxbPqrqSy5ScldaW1oufwzOI%2FPplPIeUU8yD7iiNu0jBnK%2BE3iHRSdkur64B0lxHENp8qlGmO6og5aG%2FCEy2O8XMwi2hi2bjaefUB6UDGv4Z3QMBSXaJQxXzXRQ5S0U6cLPBU8sCZPCGxGfDRBKcec%2F4rZrXMAke25U4R6NT3bku2FCTJ9V2KHWIUlIQj3Rk1MxFRm3fUmfBYyujrJsFjvOeAys66ovNFoQKxXnNfTdqGga73e2yupWduhFdTUlP7V%2BvOayK4hkwp8rbxAY6pgGla1Ana8FU8rh5G3sJZbifwjYssO9zDmhjcpzFI5wr9vM85DT3Cs2Azjwt%2FAWZw2bJW%2BFWuCIpsdehB%2BGjY9MuqOSBgV8eeqe3HlWhfRfWBsAVtIvqovm7ED3X2RxCc6Yt2AORHV9gmBjVtUSd3H1VYg7iWiluKeKRgt6r9XIhX5%2FIkOSRjseNPem73ir0bFuadfEHVXVGV64%2F%2F9fVQ6Cd2bL9sxEw&X-Amz-Signature=35da489f30e294b1d337112ae3ddec95c4e80a17083a847a7818df81e277ecfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO7VQND7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGYIqRk93zDrnz0iO33Bi2B9kl3UiIk2D3xvWLwyw7UqAiAk9pwXKFTNOxKYY7G%2FLFJWhbfqHrDEN4z%2FfwPZCgfU7CqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvYXwGJ8qhlmMz1uxKtwDSUDK%2FKGZe81LdNdMpVLEy4tZ3kgY%2BRNBqO%2FYWx0JUiANBHZpflNFYWjf1XsdC7CRc%2FXEjYo3Pv5gYBYDzTi1RfR2em5H6MEOtp%2FiuGD4V7Soh8kTUvc0u3rLa7XpfqWd4Fxn%2BwHr7qkRSLWi5pisAfNyb9eCWF5UPJ%2B7oOJHuWGjon%2Brmm%2FCOUqsLJjtL8REyF6H%2F3gEoTLyvZ0VAoIQzvGy0o%2F4vQfwuRbPyLPr3f2BoM2GLi92uzVf0ne%2BPBhHABd2i28%2F4yfukde%2FaQKGJ%2FtrBmUxHFpJ%2FOkaE9zj90SS1279gw%2Bk1R3Y3j5gF1ZY3mdRvifTqL3ehKVEUdxB8I0hGy0w4C2t8W34v%2BdIf3UnEMyIhxbPqrqSy5ScldaW1oufwzOI%2FPplPIeUU8yD7iiNu0jBnK%2BE3iHRSdkur64B0lxHENp8qlGmO6og5aG%2FCEy2O8XMwi2hi2bjaefUB6UDGv4Z3QMBSXaJQxXzXRQ5S0U6cLPBU8sCZPCGxGfDRBKcec%2F4rZrXMAke25U4R6NT3bku2FCTJ9V2KHWIUlIQj3Rk1MxFRm3fUmfBYyujrJsFjvOeAys66ovNFoQKxXnNfTdqGga73e2yupWduhFdTUlP7V%2BvOayK4hkwp8rbxAY6pgGla1Ana8FU8rh5G3sJZbifwjYssO9zDmhjcpzFI5wr9vM85DT3Cs2Azjwt%2FAWZw2bJW%2BFWuCIpsdehB%2BGjY9MuqOSBgV8eeqe3HlWhfRfWBsAVtIvqovm7ED3X2RxCc6Yt2AORHV9gmBjVtUSd3H1VYg7iWiluKeKRgt6r9XIhX5%2FIkOSRjseNPem73ir0bFuadfEHVXVGV64%2F%2F9fVQ6Cd2bL9sxEw&X-Amz-Signature=a9724c992a4c7a4fa2f949930b6838290795e7f88f105f2c1c1145f1f18f7b48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TO7VQND7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIGYIqRk93zDrnz0iO33Bi2B9kl3UiIk2D3xvWLwyw7UqAiAk9pwXKFTNOxKYY7G%2FLFJWhbfqHrDEN4z%2FfwPZCgfU7CqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvYXwGJ8qhlmMz1uxKtwDSUDK%2FKGZe81LdNdMpVLEy4tZ3kgY%2BRNBqO%2FYWx0JUiANBHZpflNFYWjf1XsdC7CRc%2FXEjYo3Pv5gYBYDzTi1RfR2em5H6MEOtp%2FiuGD4V7Soh8kTUvc0u3rLa7XpfqWd4Fxn%2BwHr7qkRSLWi5pisAfNyb9eCWF5UPJ%2B7oOJHuWGjon%2Brmm%2FCOUqsLJjtL8REyF6H%2F3gEoTLyvZ0VAoIQzvGy0o%2F4vQfwuRbPyLPr3f2BoM2GLi92uzVf0ne%2BPBhHABd2i28%2F4yfukde%2FaQKGJ%2FtrBmUxHFpJ%2FOkaE9zj90SS1279gw%2Bk1R3Y3j5gF1ZY3mdRvifTqL3ehKVEUdxB8I0hGy0w4C2t8W34v%2BdIf3UnEMyIhxbPqrqSy5ScldaW1oufwzOI%2FPplPIeUU8yD7iiNu0jBnK%2BE3iHRSdkur64B0lxHENp8qlGmO6og5aG%2FCEy2O8XMwi2hi2bjaefUB6UDGv4Z3QMBSXaJQxXzXRQ5S0U6cLPBU8sCZPCGxGfDRBKcec%2F4rZrXMAke25U4R6NT3bku2FCTJ9V2KHWIUlIQj3Rk1MxFRm3fUmfBYyujrJsFjvOeAys66ovNFoQKxXnNfTdqGga73e2yupWduhFdTUlP7V%2BvOayK4hkwp8rbxAY6pgGla1Ana8FU8rh5G3sJZbifwjYssO9zDmhjcpzFI5wr9vM85DT3Cs2Azjwt%2FAWZw2bJW%2BFWuCIpsdehB%2BGjY9MuqOSBgV8eeqe3HlWhfRfWBsAVtIvqovm7ED3X2RxCc6Yt2AORHV9gmBjVtUSd3H1VYg7iWiluKeKRgt6r9XIhX5%2FIkOSRjseNPem73ir0bFuadfEHVXVGV64%2F%2F9fVQ6Cd2bL9sxEw&X-Amz-Signature=7fc63693f1639a943690d1fea1bfb3db9944d7ed2859bd1b37ce7c85f450bf53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
