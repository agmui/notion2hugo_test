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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUT7W43N%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqmHbGMv7Zl9Mi29OEACf%2FJfRKMynITkY8%2FbEi%2FylcgAIgFXk%2Ffty5rswlABrSc5U9MYyWpXFMkdNzwGSth6swwV8q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDNsOLXQRlzp5438QHSrcAxeeRTTUQN7Xbqby8erPyqu14%2BZPXnX7TXFMdwG71kvyqKQb3T1DQpTXxjHAjjX1p3q3JHm76BYRADgypsjROkbFNuerKZkC0mEXJmraVLC%2FwZW0hbrsw%2BHtuKmtTxC2u9P8BmnZSF3OxK0TPSa2dNi%2FnxyZdQp9czRclPgFcPqlpfCssRClyFfZ20q9%2Fz6die53H8bwblkLtn8mcD%2Fb4pWW3u1tMiHN0dLeVBFDxx%2BnKHfPRIq4BI05wPK3BiumzBTaIEI%2FmGU5NKS%2F1VWAqM93JmNIxmREXl1qWt1bd8Ivd3RR7VA0pKQTYXHD7XTZVnpnGrLe2XSy2AvzixP0A1hmqJQqGFSekAJUR5GZZ4we9DBBzLetmBVw%2Fqq2MrYIZjK%2B2qn%2BPuw8e91m7w0%2FOk%2BzIeL40xd12YpMhjmNf90SblIjIbM%2BSmxi3RTO8M1QJjU0%2FWJRZHa2xB5rI%2FXBAzwPoqZVFauIHJaw%2B8OCgbAj21pIYMV98UEQ60AYA%2F%2FaHQ61MyLxyA%2FjouvuFQODzobMqsLlaLEPdCGewPIpP8M5kQknuu%2BMn%2BtkhT4UbMDdVqrIoMkzmt6vu0xyCM1LDdZHs0YCXJWgwbYKcvPuWCRNGVojiSZ71cL2LnRrMI%2BqtscGOqUBSFtqHeKtxkOAgCkv6ILyDhMG1D8pPps21fxhJpE3IAIm7TyuDk4ysx%2Bgbc6kQ%2Bqvq%2F5dGkx17%2B1WXobo4lPWRBK13%2FyV3fnr5eb%2B1pBC629fHrsVsDgetYQY77%2FiulnnZjfi5FKH0xUL3ujJfNpkA5mdl5hJQAATYYY6vVqXpir4RdPz9PEy3Y4DQNvr0fvj99n5SHqCBRMvUfHC%2BdRXY%2BdXStLZ&X-Amz-Signature=9da43205020077e80f776cba97a9a9233809691851e557b37ac4e55233bd694d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUT7W43N%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqmHbGMv7Zl9Mi29OEACf%2FJfRKMynITkY8%2FbEi%2FylcgAIgFXk%2Ffty5rswlABrSc5U9MYyWpXFMkdNzwGSth6swwV8q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDNsOLXQRlzp5438QHSrcAxeeRTTUQN7Xbqby8erPyqu14%2BZPXnX7TXFMdwG71kvyqKQb3T1DQpTXxjHAjjX1p3q3JHm76BYRADgypsjROkbFNuerKZkC0mEXJmraVLC%2FwZW0hbrsw%2BHtuKmtTxC2u9P8BmnZSF3OxK0TPSa2dNi%2FnxyZdQp9czRclPgFcPqlpfCssRClyFfZ20q9%2Fz6die53H8bwblkLtn8mcD%2Fb4pWW3u1tMiHN0dLeVBFDxx%2BnKHfPRIq4BI05wPK3BiumzBTaIEI%2FmGU5NKS%2F1VWAqM93JmNIxmREXl1qWt1bd8Ivd3RR7VA0pKQTYXHD7XTZVnpnGrLe2XSy2AvzixP0A1hmqJQqGFSekAJUR5GZZ4we9DBBzLetmBVw%2Fqq2MrYIZjK%2B2qn%2BPuw8e91m7w0%2FOk%2BzIeL40xd12YpMhjmNf90SblIjIbM%2BSmxi3RTO8M1QJjU0%2FWJRZHa2xB5rI%2FXBAzwPoqZVFauIHJaw%2B8OCgbAj21pIYMV98UEQ60AYA%2F%2FaHQ61MyLxyA%2FjouvuFQODzobMqsLlaLEPdCGewPIpP8M5kQknuu%2BMn%2BtkhT4UbMDdVqrIoMkzmt6vu0xyCM1LDdZHs0YCXJWgwbYKcvPuWCRNGVojiSZ71cL2LnRrMI%2BqtscGOqUBSFtqHeKtxkOAgCkv6ILyDhMG1D8pPps21fxhJpE3IAIm7TyuDk4ysx%2Bgbc6kQ%2Bqvq%2F5dGkx17%2B1WXobo4lPWRBK13%2FyV3fnr5eb%2B1pBC629fHrsVsDgetYQY77%2FiulnnZjfi5FKH0xUL3ujJfNpkA5mdl5hJQAATYYY6vVqXpir4RdPz9PEy3Y4DQNvr0fvj99n5SHqCBRMvUfHC%2BdRXY%2BdXStLZ&X-Amz-Signature=5bd8b41368dcc2b4ca010f837d2c3e2d666f7a7731efdfb108c5ef18cc41188f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUT7W43N%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqmHbGMv7Zl9Mi29OEACf%2FJfRKMynITkY8%2FbEi%2FylcgAIgFXk%2Ffty5rswlABrSc5U9MYyWpXFMkdNzwGSth6swwV8q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDNsOLXQRlzp5438QHSrcAxeeRTTUQN7Xbqby8erPyqu14%2BZPXnX7TXFMdwG71kvyqKQb3T1DQpTXxjHAjjX1p3q3JHm76BYRADgypsjROkbFNuerKZkC0mEXJmraVLC%2FwZW0hbrsw%2BHtuKmtTxC2u9P8BmnZSF3OxK0TPSa2dNi%2FnxyZdQp9czRclPgFcPqlpfCssRClyFfZ20q9%2Fz6die53H8bwblkLtn8mcD%2Fb4pWW3u1tMiHN0dLeVBFDxx%2BnKHfPRIq4BI05wPK3BiumzBTaIEI%2FmGU5NKS%2F1VWAqM93JmNIxmREXl1qWt1bd8Ivd3RR7VA0pKQTYXHD7XTZVnpnGrLe2XSy2AvzixP0A1hmqJQqGFSekAJUR5GZZ4we9DBBzLetmBVw%2Fqq2MrYIZjK%2B2qn%2BPuw8e91m7w0%2FOk%2BzIeL40xd12YpMhjmNf90SblIjIbM%2BSmxi3RTO8M1QJjU0%2FWJRZHa2xB5rI%2FXBAzwPoqZVFauIHJaw%2B8OCgbAj21pIYMV98UEQ60AYA%2F%2FaHQ61MyLxyA%2FjouvuFQODzobMqsLlaLEPdCGewPIpP8M5kQknuu%2BMn%2BtkhT4UbMDdVqrIoMkzmt6vu0xyCM1LDdZHs0YCXJWgwbYKcvPuWCRNGVojiSZ71cL2LnRrMI%2BqtscGOqUBSFtqHeKtxkOAgCkv6ILyDhMG1D8pPps21fxhJpE3IAIm7TyuDk4ysx%2Bgbc6kQ%2Bqvq%2F5dGkx17%2B1WXobo4lPWRBK13%2FyV3fnr5eb%2B1pBC629fHrsVsDgetYQY77%2FiulnnZjfi5FKH0xUL3ujJfNpkA5mdl5hJQAATYYY6vVqXpir4RdPz9PEy3Y4DQNvr0fvj99n5SHqCBRMvUfHC%2BdRXY%2BdXStLZ&X-Amz-Signature=a71838a8aa963f987516e68bdc407ca39545dfadc53199ee4d0da50a4e740c23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUT7W43N%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqmHbGMv7Zl9Mi29OEACf%2FJfRKMynITkY8%2FbEi%2FylcgAIgFXk%2Ffty5rswlABrSc5U9MYyWpXFMkdNzwGSth6swwV8q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDNsOLXQRlzp5438QHSrcAxeeRTTUQN7Xbqby8erPyqu14%2BZPXnX7TXFMdwG71kvyqKQb3T1DQpTXxjHAjjX1p3q3JHm76BYRADgypsjROkbFNuerKZkC0mEXJmraVLC%2FwZW0hbrsw%2BHtuKmtTxC2u9P8BmnZSF3OxK0TPSa2dNi%2FnxyZdQp9czRclPgFcPqlpfCssRClyFfZ20q9%2Fz6die53H8bwblkLtn8mcD%2Fb4pWW3u1tMiHN0dLeVBFDxx%2BnKHfPRIq4BI05wPK3BiumzBTaIEI%2FmGU5NKS%2F1VWAqM93JmNIxmREXl1qWt1bd8Ivd3RR7VA0pKQTYXHD7XTZVnpnGrLe2XSy2AvzixP0A1hmqJQqGFSekAJUR5GZZ4we9DBBzLetmBVw%2Fqq2MrYIZjK%2B2qn%2BPuw8e91m7w0%2FOk%2BzIeL40xd12YpMhjmNf90SblIjIbM%2BSmxi3RTO8M1QJjU0%2FWJRZHa2xB5rI%2FXBAzwPoqZVFauIHJaw%2B8OCgbAj21pIYMV98UEQ60AYA%2F%2FaHQ61MyLxyA%2FjouvuFQODzobMqsLlaLEPdCGewPIpP8M5kQknuu%2BMn%2BtkhT4UbMDdVqrIoMkzmt6vu0xyCM1LDdZHs0YCXJWgwbYKcvPuWCRNGVojiSZ71cL2LnRrMI%2BqtscGOqUBSFtqHeKtxkOAgCkv6ILyDhMG1D8pPps21fxhJpE3IAIm7TyuDk4ysx%2Bgbc6kQ%2Bqvq%2F5dGkx17%2B1WXobo4lPWRBK13%2FyV3fnr5eb%2B1pBC629fHrsVsDgetYQY77%2FiulnnZjfi5FKH0xUL3ujJfNpkA5mdl5hJQAATYYY6vVqXpir4RdPz9PEy3Y4DQNvr0fvj99n5SHqCBRMvUfHC%2BdRXY%2BdXStLZ&X-Amz-Signature=58ba8187dba56a2f2b36e937930c1adde52113893d38cf54c14e2e8daef5f695&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUT7W43N%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqmHbGMv7Zl9Mi29OEACf%2FJfRKMynITkY8%2FbEi%2FylcgAIgFXk%2Ffty5rswlABrSc5U9MYyWpXFMkdNzwGSth6swwV8q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDNsOLXQRlzp5438QHSrcAxeeRTTUQN7Xbqby8erPyqu14%2BZPXnX7TXFMdwG71kvyqKQb3T1DQpTXxjHAjjX1p3q3JHm76BYRADgypsjROkbFNuerKZkC0mEXJmraVLC%2FwZW0hbrsw%2BHtuKmtTxC2u9P8BmnZSF3OxK0TPSa2dNi%2FnxyZdQp9czRclPgFcPqlpfCssRClyFfZ20q9%2Fz6die53H8bwblkLtn8mcD%2Fb4pWW3u1tMiHN0dLeVBFDxx%2BnKHfPRIq4BI05wPK3BiumzBTaIEI%2FmGU5NKS%2F1VWAqM93JmNIxmREXl1qWt1bd8Ivd3RR7VA0pKQTYXHD7XTZVnpnGrLe2XSy2AvzixP0A1hmqJQqGFSekAJUR5GZZ4we9DBBzLetmBVw%2Fqq2MrYIZjK%2B2qn%2BPuw8e91m7w0%2FOk%2BzIeL40xd12YpMhjmNf90SblIjIbM%2BSmxi3RTO8M1QJjU0%2FWJRZHa2xB5rI%2FXBAzwPoqZVFauIHJaw%2B8OCgbAj21pIYMV98UEQ60AYA%2F%2FaHQ61MyLxyA%2FjouvuFQODzobMqsLlaLEPdCGewPIpP8M5kQknuu%2BMn%2BtkhT4UbMDdVqrIoMkzmt6vu0xyCM1LDdZHs0YCXJWgwbYKcvPuWCRNGVojiSZ71cL2LnRrMI%2BqtscGOqUBSFtqHeKtxkOAgCkv6ILyDhMG1D8pPps21fxhJpE3IAIm7TyuDk4ysx%2Bgbc6kQ%2Bqvq%2F5dGkx17%2B1WXobo4lPWRBK13%2FyV3fnr5eb%2B1pBC629fHrsVsDgetYQY77%2FiulnnZjfi5FKH0xUL3ujJfNpkA5mdl5hJQAATYYY6vVqXpir4RdPz9PEy3Y4DQNvr0fvj99n5SHqCBRMvUfHC%2BdRXY%2BdXStLZ&X-Amz-Signature=e5792009bc851a1cabe123b449d97dd9eb240049f9db3bd9f7d0eeb941ef0ee6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUT7W43N%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqmHbGMv7Zl9Mi29OEACf%2FJfRKMynITkY8%2FbEi%2FylcgAIgFXk%2Ffty5rswlABrSc5U9MYyWpXFMkdNzwGSth6swwV8q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDNsOLXQRlzp5438QHSrcAxeeRTTUQN7Xbqby8erPyqu14%2BZPXnX7TXFMdwG71kvyqKQb3T1DQpTXxjHAjjX1p3q3JHm76BYRADgypsjROkbFNuerKZkC0mEXJmraVLC%2FwZW0hbrsw%2BHtuKmtTxC2u9P8BmnZSF3OxK0TPSa2dNi%2FnxyZdQp9czRclPgFcPqlpfCssRClyFfZ20q9%2Fz6die53H8bwblkLtn8mcD%2Fb4pWW3u1tMiHN0dLeVBFDxx%2BnKHfPRIq4BI05wPK3BiumzBTaIEI%2FmGU5NKS%2F1VWAqM93JmNIxmREXl1qWt1bd8Ivd3RR7VA0pKQTYXHD7XTZVnpnGrLe2XSy2AvzixP0A1hmqJQqGFSekAJUR5GZZ4we9DBBzLetmBVw%2Fqq2MrYIZjK%2B2qn%2BPuw8e91m7w0%2FOk%2BzIeL40xd12YpMhjmNf90SblIjIbM%2BSmxi3RTO8M1QJjU0%2FWJRZHa2xB5rI%2FXBAzwPoqZVFauIHJaw%2B8OCgbAj21pIYMV98UEQ60AYA%2F%2FaHQ61MyLxyA%2FjouvuFQODzobMqsLlaLEPdCGewPIpP8M5kQknuu%2BMn%2BtkhT4UbMDdVqrIoMkzmt6vu0xyCM1LDdZHs0YCXJWgwbYKcvPuWCRNGVojiSZ71cL2LnRrMI%2BqtscGOqUBSFtqHeKtxkOAgCkv6ILyDhMG1D8pPps21fxhJpE3IAIm7TyuDk4ysx%2Bgbc6kQ%2Bqvq%2F5dGkx17%2B1WXobo4lPWRBK13%2FyV3fnr5eb%2B1pBC629fHrsVsDgetYQY77%2FiulnnZjfi5FKH0xUL3ujJfNpkA5mdl5hJQAATYYY6vVqXpir4RdPz9PEy3Y4DQNvr0fvj99n5SHqCBRMvUfHC%2BdRXY%2BdXStLZ&X-Amz-Signature=8cf1aa24023110677f889a787b96261a0c36e8a9b9f68ee00c6c2591d43c299a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUT7W43N%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqmHbGMv7Zl9Mi29OEACf%2FJfRKMynITkY8%2FbEi%2FylcgAIgFXk%2Ffty5rswlABrSc5U9MYyWpXFMkdNzwGSth6swwV8q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDNsOLXQRlzp5438QHSrcAxeeRTTUQN7Xbqby8erPyqu14%2BZPXnX7TXFMdwG71kvyqKQb3T1DQpTXxjHAjjX1p3q3JHm76BYRADgypsjROkbFNuerKZkC0mEXJmraVLC%2FwZW0hbrsw%2BHtuKmtTxC2u9P8BmnZSF3OxK0TPSa2dNi%2FnxyZdQp9czRclPgFcPqlpfCssRClyFfZ20q9%2Fz6die53H8bwblkLtn8mcD%2Fb4pWW3u1tMiHN0dLeVBFDxx%2BnKHfPRIq4BI05wPK3BiumzBTaIEI%2FmGU5NKS%2F1VWAqM93JmNIxmREXl1qWt1bd8Ivd3RR7VA0pKQTYXHD7XTZVnpnGrLe2XSy2AvzixP0A1hmqJQqGFSekAJUR5GZZ4we9DBBzLetmBVw%2Fqq2MrYIZjK%2B2qn%2BPuw8e91m7w0%2FOk%2BzIeL40xd12YpMhjmNf90SblIjIbM%2BSmxi3RTO8M1QJjU0%2FWJRZHa2xB5rI%2FXBAzwPoqZVFauIHJaw%2B8OCgbAj21pIYMV98UEQ60AYA%2F%2FaHQ61MyLxyA%2FjouvuFQODzobMqsLlaLEPdCGewPIpP8M5kQknuu%2BMn%2BtkhT4UbMDdVqrIoMkzmt6vu0xyCM1LDdZHs0YCXJWgwbYKcvPuWCRNGVojiSZ71cL2LnRrMI%2BqtscGOqUBSFtqHeKtxkOAgCkv6ILyDhMG1D8pPps21fxhJpE3IAIm7TyuDk4ysx%2Bgbc6kQ%2Bqvq%2F5dGkx17%2B1WXobo4lPWRBK13%2FyV3fnr5eb%2B1pBC629fHrsVsDgetYQY77%2FiulnnZjfi5FKH0xUL3ujJfNpkA5mdl5hJQAATYYY6vVqXpir4RdPz9PEy3Y4DQNvr0fvj99n5SHqCBRMvUfHC%2BdRXY%2BdXStLZ&X-Amz-Signature=82a87e3a0b1dcf367a48c501a42c74da8217880ab85335417fbebb8783da0866&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUT7W43N%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqmHbGMv7Zl9Mi29OEACf%2FJfRKMynITkY8%2FbEi%2FylcgAIgFXk%2Ffty5rswlABrSc5U9MYyWpXFMkdNzwGSth6swwV8q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDNsOLXQRlzp5438QHSrcAxeeRTTUQN7Xbqby8erPyqu14%2BZPXnX7TXFMdwG71kvyqKQb3T1DQpTXxjHAjjX1p3q3JHm76BYRADgypsjROkbFNuerKZkC0mEXJmraVLC%2FwZW0hbrsw%2BHtuKmtTxC2u9P8BmnZSF3OxK0TPSa2dNi%2FnxyZdQp9czRclPgFcPqlpfCssRClyFfZ20q9%2Fz6die53H8bwblkLtn8mcD%2Fb4pWW3u1tMiHN0dLeVBFDxx%2BnKHfPRIq4BI05wPK3BiumzBTaIEI%2FmGU5NKS%2F1VWAqM93JmNIxmREXl1qWt1bd8Ivd3RR7VA0pKQTYXHD7XTZVnpnGrLe2XSy2AvzixP0A1hmqJQqGFSekAJUR5GZZ4we9DBBzLetmBVw%2Fqq2MrYIZjK%2B2qn%2BPuw8e91m7w0%2FOk%2BzIeL40xd12YpMhjmNf90SblIjIbM%2BSmxi3RTO8M1QJjU0%2FWJRZHa2xB5rI%2FXBAzwPoqZVFauIHJaw%2B8OCgbAj21pIYMV98UEQ60AYA%2F%2FaHQ61MyLxyA%2FjouvuFQODzobMqsLlaLEPdCGewPIpP8M5kQknuu%2BMn%2BtkhT4UbMDdVqrIoMkzmt6vu0xyCM1LDdZHs0YCXJWgwbYKcvPuWCRNGVojiSZ71cL2LnRrMI%2BqtscGOqUBSFtqHeKtxkOAgCkv6ILyDhMG1D8pPps21fxhJpE3IAIm7TyuDk4ysx%2Bgbc6kQ%2Bqvq%2F5dGkx17%2B1WXobo4lPWRBK13%2FyV3fnr5eb%2B1pBC629fHrsVsDgetYQY77%2FiulnnZjfi5FKH0xUL3ujJfNpkA5mdl5hJQAATYYY6vVqXpir4RdPz9PEy3Y4DQNvr0fvj99n5SHqCBRMvUfHC%2BdRXY%2BdXStLZ&X-Amz-Signature=51e1986a1c302722eae068f820017ec4bf32f9d6e8ba8a1aaa0fe4f080982d50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUT7W43N%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqmHbGMv7Zl9Mi29OEACf%2FJfRKMynITkY8%2FbEi%2FylcgAIgFXk%2Ffty5rswlABrSc5U9MYyWpXFMkdNzwGSth6swwV8q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDNsOLXQRlzp5438QHSrcAxeeRTTUQN7Xbqby8erPyqu14%2BZPXnX7TXFMdwG71kvyqKQb3T1DQpTXxjHAjjX1p3q3JHm76BYRADgypsjROkbFNuerKZkC0mEXJmraVLC%2FwZW0hbrsw%2BHtuKmtTxC2u9P8BmnZSF3OxK0TPSa2dNi%2FnxyZdQp9czRclPgFcPqlpfCssRClyFfZ20q9%2Fz6die53H8bwblkLtn8mcD%2Fb4pWW3u1tMiHN0dLeVBFDxx%2BnKHfPRIq4BI05wPK3BiumzBTaIEI%2FmGU5NKS%2F1VWAqM93JmNIxmREXl1qWt1bd8Ivd3RR7VA0pKQTYXHD7XTZVnpnGrLe2XSy2AvzixP0A1hmqJQqGFSekAJUR5GZZ4we9DBBzLetmBVw%2Fqq2MrYIZjK%2B2qn%2BPuw8e91m7w0%2FOk%2BzIeL40xd12YpMhjmNf90SblIjIbM%2BSmxi3RTO8M1QJjU0%2FWJRZHa2xB5rI%2FXBAzwPoqZVFauIHJaw%2B8OCgbAj21pIYMV98UEQ60AYA%2F%2FaHQ61MyLxyA%2FjouvuFQODzobMqsLlaLEPdCGewPIpP8M5kQknuu%2BMn%2BtkhT4UbMDdVqrIoMkzmt6vu0xyCM1LDdZHs0YCXJWgwbYKcvPuWCRNGVojiSZ71cL2LnRrMI%2BqtscGOqUBSFtqHeKtxkOAgCkv6ILyDhMG1D8pPps21fxhJpE3IAIm7TyuDk4ysx%2Bgbc6kQ%2Bqvq%2F5dGkx17%2B1WXobo4lPWRBK13%2FyV3fnr5eb%2B1pBC629fHrsVsDgetYQY77%2FiulnnZjfi5FKH0xUL3ujJfNpkA5mdl5hJQAATYYY6vVqXpir4RdPz9PEy3Y4DQNvr0fvj99n5SHqCBRMvUfHC%2BdRXY%2BdXStLZ&X-Amz-Signature=b4fe91a0cdd5b9e2d793ddb7417e6ccf75c64eec7180933193f71d661fca2c42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUT7W43N%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqmHbGMv7Zl9Mi29OEACf%2FJfRKMynITkY8%2FbEi%2FylcgAIgFXk%2Ffty5rswlABrSc5U9MYyWpXFMkdNzwGSth6swwV8q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDNsOLXQRlzp5438QHSrcAxeeRTTUQN7Xbqby8erPyqu14%2BZPXnX7TXFMdwG71kvyqKQb3T1DQpTXxjHAjjX1p3q3JHm76BYRADgypsjROkbFNuerKZkC0mEXJmraVLC%2FwZW0hbrsw%2BHtuKmtTxC2u9P8BmnZSF3OxK0TPSa2dNi%2FnxyZdQp9czRclPgFcPqlpfCssRClyFfZ20q9%2Fz6die53H8bwblkLtn8mcD%2Fb4pWW3u1tMiHN0dLeVBFDxx%2BnKHfPRIq4BI05wPK3BiumzBTaIEI%2FmGU5NKS%2F1VWAqM93JmNIxmREXl1qWt1bd8Ivd3RR7VA0pKQTYXHD7XTZVnpnGrLe2XSy2AvzixP0A1hmqJQqGFSekAJUR5GZZ4we9DBBzLetmBVw%2Fqq2MrYIZjK%2B2qn%2BPuw8e91m7w0%2FOk%2BzIeL40xd12YpMhjmNf90SblIjIbM%2BSmxi3RTO8M1QJjU0%2FWJRZHa2xB5rI%2FXBAzwPoqZVFauIHJaw%2B8OCgbAj21pIYMV98UEQ60AYA%2F%2FaHQ61MyLxyA%2FjouvuFQODzobMqsLlaLEPdCGewPIpP8M5kQknuu%2BMn%2BtkhT4UbMDdVqrIoMkzmt6vu0xyCM1LDdZHs0YCXJWgwbYKcvPuWCRNGVojiSZ71cL2LnRrMI%2BqtscGOqUBSFtqHeKtxkOAgCkv6ILyDhMG1D8pPps21fxhJpE3IAIm7TyuDk4ysx%2Bgbc6kQ%2Bqvq%2F5dGkx17%2B1WXobo4lPWRBK13%2FyV3fnr5eb%2B1pBC629fHrsVsDgetYQY77%2FiulnnZjfi5FKH0xUL3ujJfNpkA5mdl5hJQAATYYY6vVqXpir4RdPz9PEy3Y4DQNvr0fvj99n5SHqCBRMvUfHC%2BdRXY%2BdXStLZ&X-Amz-Signature=4a45676abf2d58e940b9d955e0cc9f916e08ed3a9cb4361f96d7ebbfd0c0500d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUT7W43N%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqmHbGMv7Zl9Mi29OEACf%2FJfRKMynITkY8%2FbEi%2FylcgAIgFXk%2Ffty5rswlABrSc5U9MYyWpXFMkdNzwGSth6swwV8q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDNsOLXQRlzp5438QHSrcAxeeRTTUQN7Xbqby8erPyqu14%2BZPXnX7TXFMdwG71kvyqKQb3T1DQpTXxjHAjjX1p3q3JHm76BYRADgypsjROkbFNuerKZkC0mEXJmraVLC%2FwZW0hbrsw%2BHtuKmtTxC2u9P8BmnZSF3OxK0TPSa2dNi%2FnxyZdQp9czRclPgFcPqlpfCssRClyFfZ20q9%2Fz6die53H8bwblkLtn8mcD%2Fb4pWW3u1tMiHN0dLeVBFDxx%2BnKHfPRIq4BI05wPK3BiumzBTaIEI%2FmGU5NKS%2F1VWAqM93JmNIxmREXl1qWt1bd8Ivd3RR7VA0pKQTYXHD7XTZVnpnGrLe2XSy2AvzixP0A1hmqJQqGFSekAJUR5GZZ4we9DBBzLetmBVw%2Fqq2MrYIZjK%2B2qn%2BPuw8e91m7w0%2FOk%2BzIeL40xd12YpMhjmNf90SblIjIbM%2BSmxi3RTO8M1QJjU0%2FWJRZHa2xB5rI%2FXBAzwPoqZVFauIHJaw%2B8OCgbAj21pIYMV98UEQ60AYA%2F%2FaHQ61MyLxyA%2FjouvuFQODzobMqsLlaLEPdCGewPIpP8M5kQknuu%2BMn%2BtkhT4UbMDdVqrIoMkzmt6vu0xyCM1LDdZHs0YCXJWgwbYKcvPuWCRNGVojiSZ71cL2LnRrMI%2BqtscGOqUBSFtqHeKtxkOAgCkv6ILyDhMG1D8pPps21fxhJpE3IAIm7TyuDk4ysx%2Bgbc6kQ%2Bqvq%2F5dGkx17%2B1WXobo4lPWRBK13%2FyV3fnr5eb%2B1pBC629fHrsVsDgetYQY77%2FiulnnZjfi5FKH0xUL3ujJfNpkA5mdl5hJQAATYYY6vVqXpir4RdPz9PEy3Y4DQNvr0fvj99n5SHqCBRMvUfHC%2BdRXY%2BdXStLZ&X-Amz-Signature=7060aa4221298ad83d54cf62082fa63d063d51bf3ad7d047175aa4c4ff7f71b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUT7W43N%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqmHbGMv7Zl9Mi29OEACf%2FJfRKMynITkY8%2FbEi%2FylcgAIgFXk%2Ffty5rswlABrSc5U9MYyWpXFMkdNzwGSth6swwV8q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDNsOLXQRlzp5438QHSrcAxeeRTTUQN7Xbqby8erPyqu14%2BZPXnX7TXFMdwG71kvyqKQb3T1DQpTXxjHAjjX1p3q3JHm76BYRADgypsjROkbFNuerKZkC0mEXJmraVLC%2FwZW0hbrsw%2BHtuKmtTxC2u9P8BmnZSF3OxK0TPSa2dNi%2FnxyZdQp9czRclPgFcPqlpfCssRClyFfZ20q9%2Fz6die53H8bwblkLtn8mcD%2Fb4pWW3u1tMiHN0dLeVBFDxx%2BnKHfPRIq4BI05wPK3BiumzBTaIEI%2FmGU5NKS%2F1VWAqM93JmNIxmREXl1qWt1bd8Ivd3RR7VA0pKQTYXHD7XTZVnpnGrLe2XSy2AvzixP0A1hmqJQqGFSekAJUR5GZZ4we9DBBzLetmBVw%2Fqq2MrYIZjK%2B2qn%2BPuw8e91m7w0%2FOk%2BzIeL40xd12YpMhjmNf90SblIjIbM%2BSmxi3RTO8M1QJjU0%2FWJRZHa2xB5rI%2FXBAzwPoqZVFauIHJaw%2B8OCgbAj21pIYMV98UEQ60AYA%2F%2FaHQ61MyLxyA%2FjouvuFQODzobMqsLlaLEPdCGewPIpP8M5kQknuu%2BMn%2BtkhT4UbMDdVqrIoMkzmt6vu0xyCM1LDdZHs0YCXJWgwbYKcvPuWCRNGVojiSZ71cL2LnRrMI%2BqtscGOqUBSFtqHeKtxkOAgCkv6ILyDhMG1D8pPps21fxhJpE3IAIm7TyuDk4ysx%2Bgbc6kQ%2Bqvq%2F5dGkx17%2B1WXobo4lPWRBK13%2FyV3fnr5eb%2B1pBC629fHrsVsDgetYQY77%2FiulnnZjfi5FKH0xUL3ujJfNpkA5mdl5hJQAATYYY6vVqXpir4RdPz9PEy3Y4DQNvr0fvj99n5SHqCBRMvUfHC%2BdRXY%2BdXStLZ&X-Amz-Signature=8dc22d52e9390cedcc9b5a39ef0d4936e855736371d6be49ae78ca1bcee1343e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUT7W43N%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqmHbGMv7Zl9Mi29OEACf%2FJfRKMynITkY8%2FbEi%2FylcgAIgFXk%2Ffty5rswlABrSc5U9MYyWpXFMkdNzwGSth6swwV8q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDNsOLXQRlzp5438QHSrcAxeeRTTUQN7Xbqby8erPyqu14%2BZPXnX7TXFMdwG71kvyqKQb3T1DQpTXxjHAjjX1p3q3JHm76BYRADgypsjROkbFNuerKZkC0mEXJmraVLC%2FwZW0hbrsw%2BHtuKmtTxC2u9P8BmnZSF3OxK0TPSa2dNi%2FnxyZdQp9czRclPgFcPqlpfCssRClyFfZ20q9%2Fz6die53H8bwblkLtn8mcD%2Fb4pWW3u1tMiHN0dLeVBFDxx%2BnKHfPRIq4BI05wPK3BiumzBTaIEI%2FmGU5NKS%2F1VWAqM93JmNIxmREXl1qWt1bd8Ivd3RR7VA0pKQTYXHD7XTZVnpnGrLe2XSy2AvzixP0A1hmqJQqGFSekAJUR5GZZ4we9DBBzLetmBVw%2Fqq2MrYIZjK%2B2qn%2BPuw8e91m7w0%2FOk%2BzIeL40xd12YpMhjmNf90SblIjIbM%2BSmxi3RTO8M1QJjU0%2FWJRZHa2xB5rI%2FXBAzwPoqZVFauIHJaw%2B8OCgbAj21pIYMV98UEQ60AYA%2F%2FaHQ61MyLxyA%2FjouvuFQODzobMqsLlaLEPdCGewPIpP8M5kQknuu%2BMn%2BtkhT4UbMDdVqrIoMkzmt6vu0xyCM1LDdZHs0YCXJWgwbYKcvPuWCRNGVojiSZ71cL2LnRrMI%2BqtscGOqUBSFtqHeKtxkOAgCkv6ILyDhMG1D8pPps21fxhJpE3IAIm7TyuDk4ysx%2Bgbc6kQ%2Bqvq%2F5dGkx17%2B1WXobo4lPWRBK13%2FyV3fnr5eb%2B1pBC629fHrsVsDgetYQY77%2FiulnnZjfi5FKH0xUL3ujJfNpkA5mdl5hJQAATYYY6vVqXpir4RdPz9PEy3Y4DQNvr0fvj99n5SHqCBRMvUfHC%2BdRXY%2BdXStLZ&X-Amz-Signature=ff1bc95a694931e5db1b6916ad45e1d9eca0402c22c1fcad0fb6bfafca2036a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUT7W43N%2F20251014%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251014T012423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqmHbGMv7Zl9Mi29OEACf%2FJfRKMynITkY8%2FbEi%2FylcgAIgFXk%2Ffty5rswlABrSc5U9MYyWpXFMkdNzwGSth6swwV8q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDNsOLXQRlzp5438QHSrcAxeeRTTUQN7Xbqby8erPyqu14%2BZPXnX7TXFMdwG71kvyqKQb3T1DQpTXxjHAjjX1p3q3JHm76BYRADgypsjROkbFNuerKZkC0mEXJmraVLC%2FwZW0hbrsw%2BHtuKmtTxC2u9P8BmnZSF3OxK0TPSa2dNi%2FnxyZdQp9czRclPgFcPqlpfCssRClyFfZ20q9%2Fz6die53H8bwblkLtn8mcD%2Fb4pWW3u1tMiHN0dLeVBFDxx%2BnKHfPRIq4BI05wPK3BiumzBTaIEI%2FmGU5NKS%2F1VWAqM93JmNIxmREXl1qWt1bd8Ivd3RR7VA0pKQTYXHD7XTZVnpnGrLe2XSy2AvzixP0A1hmqJQqGFSekAJUR5GZZ4we9DBBzLetmBVw%2Fqq2MrYIZjK%2B2qn%2BPuw8e91m7w0%2FOk%2BzIeL40xd12YpMhjmNf90SblIjIbM%2BSmxi3RTO8M1QJjU0%2FWJRZHa2xB5rI%2FXBAzwPoqZVFauIHJaw%2B8OCgbAj21pIYMV98UEQ60AYA%2F%2FaHQ61MyLxyA%2FjouvuFQODzobMqsLlaLEPdCGewPIpP8M5kQknuu%2BMn%2BtkhT4UbMDdVqrIoMkzmt6vu0xyCM1LDdZHs0YCXJWgwbYKcvPuWCRNGVojiSZ71cL2LnRrMI%2BqtscGOqUBSFtqHeKtxkOAgCkv6ILyDhMG1D8pPps21fxhJpE3IAIm7TyuDk4ysx%2Bgbc6kQ%2Bqvq%2F5dGkx17%2B1WXobo4lPWRBK13%2FyV3fnr5eb%2B1pBC629fHrsVsDgetYQY77%2FiulnnZjfi5FKH0xUL3ujJfNpkA5mdl5hJQAATYYY6vVqXpir4RdPz9PEy3Y4DQNvr0fvj99n5SHqCBRMvUfHC%2BdRXY%2BdXStLZ&X-Amz-Signature=5d8c784ff0a18f70b6f740333c7b335d47e9424c9b27275c8022c13b83e562d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
