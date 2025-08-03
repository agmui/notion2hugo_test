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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NCEV2UO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgaAa3V%2FQR9Kbn9TKmMN07PbrGDU3Hc4rMLYXf3mLWlwIgOeSMkPnsF6LQb%2BPEMHjNsBT%2BVkVL8n7SwIrTdPKqU9Iq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJNsgJPHzjBylv%2FDryrcAwaXastqz6gdXYiYPSOCSgqPUxmPR5O2WeCVY4PMxP%2Fmsc0rrDx4H2%2Bdh5KEbJS%2FfPOwcr3MHzaS04b59gxMJx7ML9tITRAt%2BUhOqktLssE55RcaaX5Av2V1u4o%2FV6vDqAz8EPqFIRuxhSh9S1K%2BDRdvXdOUlOIA%2F%2FBC2d%2BBcmlXbNU0n2NtQcGk8%2B5mivZs08pzKbj5fHnmUIw9CIIC3jSt9KN%2Ba%2BBRv1YCmZr0PHnnHKYaTKsLsZ9qFp69oyu2D%2BNhPjj9OLRgtn6yLdxSVbjZjCfbO2je821wrj1F52bY6I7zqxNV2TLT%2F0Brf3H0%2B9u6v%2FVRpVgoMR0ZU4ZajOF0nItO0eX7Lz0hoCiAMVae2%2BpTgh5DEfQFoB2ksoLaM6Ub0HMKVFnbKtaWzIXtFpdyDFt9xAOMt3aXpjij9qlBXAEFvqsTmNV9kweJuvLGvGszylLTn85ZTGBsQF%2F9JM63O%2FY%2FN6F3KoFT61u27%2BwtL90w%2BIDoYlzJErxCA5HH2i4InTPDmqguh0moyFNr17aU%2B0L73nRmBgdI%2Bjvd%2FIVKwn3VpB1FcUH5zQ1Bpw6ieBziBdnKNvMbOoufG6oV9bDiTfkQmYejRvKdtn59NCQf494VoOaKKHT5T0N0MLChu8QGOqUBhnDZBb3KqjccqSPoFkX0stdC0%2FssEuxnLs%2B8SiBM17oLWnFh45gDUqT5%2Bbe0I0ROiG%2BC5UdPZhlVDcTMwEj51QS4agJdHUvZ0nMumV6E7e6%2F25O4y1q736RYthHQ8mh09awH1Gu%2FBNvK%2FMLZZoLR5jUMgHXvpoO2kKKC5teQ1stZraHyKXZ6jCbp9Vs5e%2FogkL9IxFX05LkB8a%2Fj5fxzGjQYhUny&X-Amz-Signature=d199d03ac5dae8d85228d3e4dedb7a2b5d30db35a49525e3676fa91492ab1fbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NCEV2UO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgaAa3V%2FQR9Kbn9TKmMN07PbrGDU3Hc4rMLYXf3mLWlwIgOeSMkPnsF6LQb%2BPEMHjNsBT%2BVkVL8n7SwIrTdPKqU9Iq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJNsgJPHzjBylv%2FDryrcAwaXastqz6gdXYiYPSOCSgqPUxmPR5O2WeCVY4PMxP%2Fmsc0rrDx4H2%2Bdh5KEbJS%2FfPOwcr3MHzaS04b59gxMJx7ML9tITRAt%2BUhOqktLssE55RcaaX5Av2V1u4o%2FV6vDqAz8EPqFIRuxhSh9S1K%2BDRdvXdOUlOIA%2F%2FBC2d%2BBcmlXbNU0n2NtQcGk8%2B5mivZs08pzKbj5fHnmUIw9CIIC3jSt9KN%2Ba%2BBRv1YCmZr0PHnnHKYaTKsLsZ9qFp69oyu2D%2BNhPjj9OLRgtn6yLdxSVbjZjCfbO2je821wrj1F52bY6I7zqxNV2TLT%2F0Brf3H0%2B9u6v%2FVRpVgoMR0ZU4ZajOF0nItO0eX7Lz0hoCiAMVae2%2BpTgh5DEfQFoB2ksoLaM6Ub0HMKVFnbKtaWzIXtFpdyDFt9xAOMt3aXpjij9qlBXAEFvqsTmNV9kweJuvLGvGszylLTn85ZTGBsQF%2F9JM63O%2FY%2FN6F3KoFT61u27%2BwtL90w%2BIDoYlzJErxCA5HH2i4InTPDmqguh0moyFNr17aU%2B0L73nRmBgdI%2Bjvd%2FIVKwn3VpB1FcUH5zQ1Bpw6ieBziBdnKNvMbOoufG6oV9bDiTfkQmYejRvKdtn59NCQf494VoOaKKHT5T0N0MLChu8QGOqUBhnDZBb3KqjccqSPoFkX0stdC0%2FssEuxnLs%2B8SiBM17oLWnFh45gDUqT5%2Bbe0I0ROiG%2BC5UdPZhlVDcTMwEj51QS4agJdHUvZ0nMumV6E7e6%2F25O4y1q736RYthHQ8mh09awH1Gu%2FBNvK%2FMLZZoLR5jUMgHXvpoO2kKKC5teQ1stZraHyKXZ6jCbp9Vs5e%2FogkL9IxFX05LkB8a%2Fj5fxzGjQYhUny&X-Amz-Signature=65ae475401ddc5e4258d276440b7f51066e7ad1f68103036bfc547c5d858f9a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NCEV2UO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgaAa3V%2FQR9Kbn9TKmMN07PbrGDU3Hc4rMLYXf3mLWlwIgOeSMkPnsF6LQb%2BPEMHjNsBT%2BVkVL8n7SwIrTdPKqU9Iq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJNsgJPHzjBylv%2FDryrcAwaXastqz6gdXYiYPSOCSgqPUxmPR5O2WeCVY4PMxP%2Fmsc0rrDx4H2%2Bdh5KEbJS%2FfPOwcr3MHzaS04b59gxMJx7ML9tITRAt%2BUhOqktLssE55RcaaX5Av2V1u4o%2FV6vDqAz8EPqFIRuxhSh9S1K%2BDRdvXdOUlOIA%2F%2FBC2d%2BBcmlXbNU0n2NtQcGk8%2B5mivZs08pzKbj5fHnmUIw9CIIC3jSt9KN%2Ba%2BBRv1YCmZr0PHnnHKYaTKsLsZ9qFp69oyu2D%2BNhPjj9OLRgtn6yLdxSVbjZjCfbO2je821wrj1F52bY6I7zqxNV2TLT%2F0Brf3H0%2B9u6v%2FVRpVgoMR0ZU4ZajOF0nItO0eX7Lz0hoCiAMVae2%2BpTgh5DEfQFoB2ksoLaM6Ub0HMKVFnbKtaWzIXtFpdyDFt9xAOMt3aXpjij9qlBXAEFvqsTmNV9kweJuvLGvGszylLTn85ZTGBsQF%2F9JM63O%2FY%2FN6F3KoFT61u27%2BwtL90w%2BIDoYlzJErxCA5HH2i4InTPDmqguh0moyFNr17aU%2B0L73nRmBgdI%2Bjvd%2FIVKwn3VpB1FcUH5zQ1Bpw6ieBziBdnKNvMbOoufG6oV9bDiTfkQmYejRvKdtn59NCQf494VoOaKKHT5T0N0MLChu8QGOqUBhnDZBb3KqjccqSPoFkX0stdC0%2FssEuxnLs%2B8SiBM17oLWnFh45gDUqT5%2Bbe0I0ROiG%2BC5UdPZhlVDcTMwEj51QS4agJdHUvZ0nMumV6E7e6%2F25O4y1q736RYthHQ8mh09awH1Gu%2FBNvK%2FMLZZoLR5jUMgHXvpoO2kKKC5teQ1stZraHyKXZ6jCbp9Vs5e%2FogkL9IxFX05LkB8a%2Fj5fxzGjQYhUny&X-Amz-Signature=ed736d64057f7a6509ce273f98cbe3c557184cdb3a7b2269312912a0f525fcb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NCEV2UO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgaAa3V%2FQR9Kbn9TKmMN07PbrGDU3Hc4rMLYXf3mLWlwIgOeSMkPnsF6LQb%2BPEMHjNsBT%2BVkVL8n7SwIrTdPKqU9Iq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJNsgJPHzjBylv%2FDryrcAwaXastqz6gdXYiYPSOCSgqPUxmPR5O2WeCVY4PMxP%2Fmsc0rrDx4H2%2Bdh5KEbJS%2FfPOwcr3MHzaS04b59gxMJx7ML9tITRAt%2BUhOqktLssE55RcaaX5Av2V1u4o%2FV6vDqAz8EPqFIRuxhSh9S1K%2BDRdvXdOUlOIA%2F%2FBC2d%2BBcmlXbNU0n2NtQcGk8%2B5mivZs08pzKbj5fHnmUIw9CIIC3jSt9KN%2Ba%2BBRv1YCmZr0PHnnHKYaTKsLsZ9qFp69oyu2D%2BNhPjj9OLRgtn6yLdxSVbjZjCfbO2je821wrj1F52bY6I7zqxNV2TLT%2F0Brf3H0%2B9u6v%2FVRpVgoMR0ZU4ZajOF0nItO0eX7Lz0hoCiAMVae2%2BpTgh5DEfQFoB2ksoLaM6Ub0HMKVFnbKtaWzIXtFpdyDFt9xAOMt3aXpjij9qlBXAEFvqsTmNV9kweJuvLGvGszylLTn85ZTGBsQF%2F9JM63O%2FY%2FN6F3KoFT61u27%2BwtL90w%2BIDoYlzJErxCA5HH2i4InTPDmqguh0moyFNr17aU%2B0L73nRmBgdI%2Bjvd%2FIVKwn3VpB1FcUH5zQ1Bpw6ieBziBdnKNvMbOoufG6oV9bDiTfkQmYejRvKdtn59NCQf494VoOaKKHT5T0N0MLChu8QGOqUBhnDZBb3KqjccqSPoFkX0stdC0%2FssEuxnLs%2B8SiBM17oLWnFh45gDUqT5%2Bbe0I0ROiG%2BC5UdPZhlVDcTMwEj51QS4agJdHUvZ0nMumV6E7e6%2F25O4y1q736RYthHQ8mh09awH1Gu%2FBNvK%2FMLZZoLR5jUMgHXvpoO2kKKC5teQ1stZraHyKXZ6jCbp9Vs5e%2FogkL9IxFX05LkB8a%2Fj5fxzGjQYhUny&X-Amz-Signature=0ab2e68ecacf221270551e98485e72026496349e04eda466b303f5bb046eb195&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NCEV2UO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgaAa3V%2FQR9Kbn9TKmMN07PbrGDU3Hc4rMLYXf3mLWlwIgOeSMkPnsF6LQb%2BPEMHjNsBT%2BVkVL8n7SwIrTdPKqU9Iq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJNsgJPHzjBylv%2FDryrcAwaXastqz6gdXYiYPSOCSgqPUxmPR5O2WeCVY4PMxP%2Fmsc0rrDx4H2%2Bdh5KEbJS%2FfPOwcr3MHzaS04b59gxMJx7ML9tITRAt%2BUhOqktLssE55RcaaX5Av2V1u4o%2FV6vDqAz8EPqFIRuxhSh9S1K%2BDRdvXdOUlOIA%2F%2FBC2d%2BBcmlXbNU0n2NtQcGk8%2B5mivZs08pzKbj5fHnmUIw9CIIC3jSt9KN%2Ba%2BBRv1YCmZr0PHnnHKYaTKsLsZ9qFp69oyu2D%2BNhPjj9OLRgtn6yLdxSVbjZjCfbO2je821wrj1F52bY6I7zqxNV2TLT%2F0Brf3H0%2B9u6v%2FVRpVgoMR0ZU4ZajOF0nItO0eX7Lz0hoCiAMVae2%2BpTgh5DEfQFoB2ksoLaM6Ub0HMKVFnbKtaWzIXtFpdyDFt9xAOMt3aXpjij9qlBXAEFvqsTmNV9kweJuvLGvGszylLTn85ZTGBsQF%2F9JM63O%2FY%2FN6F3KoFT61u27%2BwtL90w%2BIDoYlzJErxCA5HH2i4InTPDmqguh0moyFNr17aU%2B0L73nRmBgdI%2Bjvd%2FIVKwn3VpB1FcUH5zQ1Bpw6ieBziBdnKNvMbOoufG6oV9bDiTfkQmYejRvKdtn59NCQf494VoOaKKHT5T0N0MLChu8QGOqUBhnDZBb3KqjccqSPoFkX0stdC0%2FssEuxnLs%2B8SiBM17oLWnFh45gDUqT5%2Bbe0I0ROiG%2BC5UdPZhlVDcTMwEj51QS4agJdHUvZ0nMumV6E7e6%2F25O4y1q736RYthHQ8mh09awH1Gu%2FBNvK%2FMLZZoLR5jUMgHXvpoO2kKKC5teQ1stZraHyKXZ6jCbp9Vs5e%2FogkL9IxFX05LkB8a%2Fj5fxzGjQYhUny&X-Amz-Signature=3ab7a8287417ad8ea1480a9502dd7c1b5e1af9ee5b76831deb59d3add3320c92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NCEV2UO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgaAa3V%2FQR9Kbn9TKmMN07PbrGDU3Hc4rMLYXf3mLWlwIgOeSMkPnsF6LQb%2BPEMHjNsBT%2BVkVL8n7SwIrTdPKqU9Iq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJNsgJPHzjBylv%2FDryrcAwaXastqz6gdXYiYPSOCSgqPUxmPR5O2WeCVY4PMxP%2Fmsc0rrDx4H2%2Bdh5KEbJS%2FfPOwcr3MHzaS04b59gxMJx7ML9tITRAt%2BUhOqktLssE55RcaaX5Av2V1u4o%2FV6vDqAz8EPqFIRuxhSh9S1K%2BDRdvXdOUlOIA%2F%2FBC2d%2BBcmlXbNU0n2NtQcGk8%2B5mivZs08pzKbj5fHnmUIw9CIIC3jSt9KN%2Ba%2BBRv1YCmZr0PHnnHKYaTKsLsZ9qFp69oyu2D%2BNhPjj9OLRgtn6yLdxSVbjZjCfbO2je821wrj1F52bY6I7zqxNV2TLT%2F0Brf3H0%2B9u6v%2FVRpVgoMR0ZU4ZajOF0nItO0eX7Lz0hoCiAMVae2%2BpTgh5DEfQFoB2ksoLaM6Ub0HMKVFnbKtaWzIXtFpdyDFt9xAOMt3aXpjij9qlBXAEFvqsTmNV9kweJuvLGvGszylLTn85ZTGBsQF%2F9JM63O%2FY%2FN6F3KoFT61u27%2BwtL90w%2BIDoYlzJErxCA5HH2i4InTPDmqguh0moyFNr17aU%2B0L73nRmBgdI%2Bjvd%2FIVKwn3VpB1FcUH5zQ1Bpw6ieBziBdnKNvMbOoufG6oV9bDiTfkQmYejRvKdtn59NCQf494VoOaKKHT5T0N0MLChu8QGOqUBhnDZBb3KqjccqSPoFkX0stdC0%2FssEuxnLs%2B8SiBM17oLWnFh45gDUqT5%2Bbe0I0ROiG%2BC5UdPZhlVDcTMwEj51QS4agJdHUvZ0nMumV6E7e6%2F25O4y1q736RYthHQ8mh09awH1Gu%2FBNvK%2FMLZZoLR5jUMgHXvpoO2kKKC5teQ1stZraHyKXZ6jCbp9Vs5e%2FogkL9IxFX05LkB8a%2Fj5fxzGjQYhUny&X-Amz-Signature=0e82af2059b136b4f04af350800ecdd26df99fff6a56fe22adc588f8fa738532&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NCEV2UO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgaAa3V%2FQR9Kbn9TKmMN07PbrGDU3Hc4rMLYXf3mLWlwIgOeSMkPnsF6LQb%2BPEMHjNsBT%2BVkVL8n7SwIrTdPKqU9Iq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJNsgJPHzjBylv%2FDryrcAwaXastqz6gdXYiYPSOCSgqPUxmPR5O2WeCVY4PMxP%2Fmsc0rrDx4H2%2Bdh5KEbJS%2FfPOwcr3MHzaS04b59gxMJx7ML9tITRAt%2BUhOqktLssE55RcaaX5Av2V1u4o%2FV6vDqAz8EPqFIRuxhSh9S1K%2BDRdvXdOUlOIA%2F%2FBC2d%2BBcmlXbNU0n2NtQcGk8%2B5mivZs08pzKbj5fHnmUIw9CIIC3jSt9KN%2Ba%2BBRv1YCmZr0PHnnHKYaTKsLsZ9qFp69oyu2D%2BNhPjj9OLRgtn6yLdxSVbjZjCfbO2je821wrj1F52bY6I7zqxNV2TLT%2F0Brf3H0%2B9u6v%2FVRpVgoMR0ZU4ZajOF0nItO0eX7Lz0hoCiAMVae2%2BpTgh5DEfQFoB2ksoLaM6Ub0HMKVFnbKtaWzIXtFpdyDFt9xAOMt3aXpjij9qlBXAEFvqsTmNV9kweJuvLGvGszylLTn85ZTGBsQF%2F9JM63O%2FY%2FN6F3KoFT61u27%2BwtL90w%2BIDoYlzJErxCA5HH2i4InTPDmqguh0moyFNr17aU%2B0L73nRmBgdI%2Bjvd%2FIVKwn3VpB1FcUH5zQ1Bpw6ieBziBdnKNvMbOoufG6oV9bDiTfkQmYejRvKdtn59NCQf494VoOaKKHT5T0N0MLChu8QGOqUBhnDZBb3KqjccqSPoFkX0stdC0%2FssEuxnLs%2B8SiBM17oLWnFh45gDUqT5%2Bbe0I0ROiG%2BC5UdPZhlVDcTMwEj51QS4agJdHUvZ0nMumV6E7e6%2F25O4y1q736RYthHQ8mh09awH1Gu%2FBNvK%2FMLZZoLR5jUMgHXvpoO2kKKC5teQ1stZraHyKXZ6jCbp9Vs5e%2FogkL9IxFX05LkB8a%2Fj5fxzGjQYhUny&X-Amz-Signature=995000fca7e20b04eadaedce9ae8e061ed45a753465707417b77bd5bcbcf51f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NCEV2UO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgaAa3V%2FQR9Kbn9TKmMN07PbrGDU3Hc4rMLYXf3mLWlwIgOeSMkPnsF6LQb%2BPEMHjNsBT%2BVkVL8n7SwIrTdPKqU9Iq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJNsgJPHzjBylv%2FDryrcAwaXastqz6gdXYiYPSOCSgqPUxmPR5O2WeCVY4PMxP%2Fmsc0rrDx4H2%2Bdh5KEbJS%2FfPOwcr3MHzaS04b59gxMJx7ML9tITRAt%2BUhOqktLssE55RcaaX5Av2V1u4o%2FV6vDqAz8EPqFIRuxhSh9S1K%2BDRdvXdOUlOIA%2F%2FBC2d%2BBcmlXbNU0n2NtQcGk8%2B5mivZs08pzKbj5fHnmUIw9CIIC3jSt9KN%2Ba%2BBRv1YCmZr0PHnnHKYaTKsLsZ9qFp69oyu2D%2BNhPjj9OLRgtn6yLdxSVbjZjCfbO2je821wrj1F52bY6I7zqxNV2TLT%2F0Brf3H0%2B9u6v%2FVRpVgoMR0ZU4ZajOF0nItO0eX7Lz0hoCiAMVae2%2BpTgh5DEfQFoB2ksoLaM6Ub0HMKVFnbKtaWzIXtFpdyDFt9xAOMt3aXpjij9qlBXAEFvqsTmNV9kweJuvLGvGszylLTn85ZTGBsQF%2F9JM63O%2FY%2FN6F3KoFT61u27%2BwtL90w%2BIDoYlzJErxCA5HH2i4InTPDmqguh0moyFNr17aU%2B0L73nRmBgdI%2Bjvd%2FIVKwn3VpB1FcUH5zQ1Bpw6ieBziBdnKNvMbOoufG6oV9bDiTfkQmYejRvKdtn59NCQf494VoOaKKHT5T0N0MLChu8QGOqUBhnDZBb3KqjccqSPoFkX0stdC0%2FssEuxnLs%2B8SiBM17oLWnFh45gDUqT5%2Bbe0I0ROiG%2BC5UdPZhlVDcTMwEj51QS4agJdHUvZ0nMumV6E7e6%2F25O4y1q736RYthHQ8mh09awH1Gu%2FBNvK%2FMLZZoLR5jUMgHXvpoO2kKKC5teQ1stZraHyKXZ6jCbp9Vs5e%2FogkL9IxFX05LkB8a%2Fj5fxzGjQYhUny&X-Amz-Signature=4570595ce99894d73e84782601f5dff93bb8b17eb314dab19769928b47a64f19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NCEV2UO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgaAa3V%2FQR9Kbn9TKmMN07PbrGDU3Hc4rMLYXf3mLWlwIgOeSMkPnsF6LQb%2BPEMHjNsBT%2BVkVL8n7SwIrTdPKqU9Iq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJNsgJPHzjBylv%2FDryrcAwaXastqz6gdXYiYPSOCSgqPUxmPR5O2WeCVY4PMxP%2Fmsc0rrDx4H2%2Bdh5KEbJS%2FfPOwcr3MHzaS04b59gxMJx7ML9tITRAt%2BUhOqktLssE55RcaaX5Av2V1u4o%2FV6vDqAz8EPqFIRuxhSh9S1K%2BDRdvXdOUlOIA%2F%2FBC2d%2BBcmlXbNU0n2NtQcGk8%2B5mivZs08pzKbj5fHnmUIw9CIIC3jSt9KN%2Ba%2BBRv1YCmZr0PHnnHKYaTKsLsZ9qFp69oyu2D%2BNhPjj9OLRgtn6yLdxSVbjZjCfbO2je821wrj1F52bY6I7zqxNV2TLT%2F0Brf3H0%2B9u6v%2FVRpVgoMR0ZU4ZajOF0nItO0eX7Lz0hoCiAMVae2%2BpTgh5DEfQFoB2ksoLaM6Ub0HMKVFnbKtaWzIXtFpdyDFt9xAOMt3aXpjij9qlBXAEFvqsTmNV9kweJuvLGvGszylLTn85ZTGBsQF%2F9JM63O%2FY%2FN6F3KoFT61u27%2BwtL90w%2BIDoYlzJErxCA5HH2i4InTPDmqguh0moyFNr17aU%2B0L73nRmBgdI%2Bjvd%2FIVKwn3VpB1FcUH5zQ1Bpw6ieBziBdnKNvMbOoufG6oV9bDiTfkQmYejRvKdtn59NCQf494VoOaKKHT5T0N0MLChu8QGOqUBhnDZBb3KqjccqSPoFkX0stdC0%2FssEuxnLs%2B8SiBM17oLWnFh45gDUqT5%2Bbe0I0ROiG%2BC5UdPZhlVDcTMwEj51QS4agJdHUvZ0nMumV6E7e6%2F25O4y1q736RYthHQ8mh09awH1Gu%2FBNvK%2FMLZZoLR5jUMgHXvpoO2kKKC5teQ1stZraHyKXZ6jCbp9Vs5e%2FogkL9IxFX05LkB8a%2Fj5fxzGjQYhUny&X-Amz-Signature=dc2b5b65d896bd8e6e44b8826702b8ab5c569d182f7b6f3c13b4e3bb0229ccb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NCEV2UO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgaAa3V%2FQR9Kbn9TKmMN07PbrGDU3Hc4rMLYXf3mLWlwIgOeSMkPnsF6LQb%2BPEMHjNsBT%2BVkVL8n7SwIrTdPKqU9Iq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJNsgJPHzjBylv%2FDryrcAwaXastqz6gdXYiYPSOCSgqPUxmPR5O2WeCVY4PMxP%2Fmsc0rrDx4H2%2Bdh5KEbJS%2FfPOwcr3MHzaS04b59gxMJx7ML9tITRAt%2BUhOqktLssE55RcaaX5Av2V1u4o%2FV6vDqAz8EPqFIRuxhSh9S1K%2BDRdvXdOUlOIA%2F%2FBC2d%2BBcmlXbNU0n2NtQcGk8%2B5mivZs08pzKbj5fHnmUIw9CIIC3jSt9KN%2Ba%2BBRv1YCmZr0PHnnHKYaTKsLsZ9qFp69oyu2D%2BNhPjj9OLRgtn6yLdxSVbjZjCfbO2je821wrj1F52bY6I7zqxNV2TLT%2F0Brf3H0%2B9u6v%2FVRpVgoMR0ZU4ZajOF0nItO0eX7Lz0hoCiAMVae2%2BpTgh5DEfQFoB2ksoLaM6Ub0HMKVFnbKtaWzIXtFpdyDFt9xAOMt3aXpjij9qlBXAEFvqsTmNV9kweJuvLGvGszylLTn85ZTGBsQF%2F9JM63O%2FY%2FN6F3KoFT61u27%2BwtL90w%2BIDoYlzJErxCA5HH2i4InTPDmqguh0moyFNr17aU%2B0L73nRmBgdI%2Bjvd%2FIVKwn3VpB1FcUH5zQ1Bpw6ieBziBdnKNvMbOoufG6oV9bDiTfkQmYejRvKdtn59NCQf494VoOaKKHT5T0N0MLChu8QGOqUBhnDZBb3KqjccqSPoFkX0stdC0%2FssEuxnLs%2B8SiBM17oLWnFh45gDUqT5%2Bbe0I0ROiG%2BC5UdPZhlVDcTMwEj51QS4agJdHUvZ0nMumV6E7e6%2F25O4y1q736RYthHQ8mh09awH1Gu%2FBNvK%2FMLZZoLR5jUMgHXvpoO2kKKC5teQ1stZraHyKXZ6jCbp9Vs5e%2FogkL9IxFX05LkB8a%2Fj5fxzGjQYhUny&X-Amz-Signature=de000aa14fb1ee031bf3fff9e0c76eb6cbef1b10581c4571bcb156a0014ac0e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NCEV2UO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgaAa3V%2FQR9Kbn9TKmMN07PbrGDU3Hc4rMLYXf3mLWlwIgOeSMkPnsF6LQb%2BPEMHjNsBT%2BVkVL8n7SwIrTdPKqU9Iq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJNsgJPHzjBylv%2FDryrcAwaXastqz6gdXYiYPSOCSgqPUxmPR5O2WeCVY4PMxP%2Fmsc0rrDx4H2%2Bdh5KEbJS%2FfPOwcr3MHzaS04b59gxMJx7ML9tITRAt%2BUhOqktLssE55RcaaX5Av2V1u4o%2FV6vDqAz8EPqFIRuxhSh9S1K%2BDRdvXdOUlOIA%2F%2FBC2d%2BBcmlXbNU0n2NtQcGk8%2B5mivZs08pzKbj5fHnmUIw9CIIC3jSt9KN%2Ba%2BBRv1YCmZr0PHnnHKYaTKsLsZ9qFp69oyu2D%2BNhPjj9OLRgtn6yLdxSVbjZjCfbO2je821wrj1F52bY6I7zqxNV2TLT%2F0Brf3H0%2B9u6v%2FVRpVgoMR0ZU4ZajOF0nItO0eX7Lz0hoCiAMVae2%2BpTgh5DEfQFoB2ksoLaM6Ub0HMKVFnbKtaWzIXtFpdyDFt9xAOMt3aXpjij9qlBXAEFvqsTmNV9kweJuvLGvGszylLTn85ZTGBsQF%2F9JM63O%2FY%2FN6F3KoFT61u27%2BwtL90w%2BIDoYlzJErxCA5HH2i4InTPDmqguh0moyFNr17aU%2B0L73nRmBgdI%2Bjvd%2FIVKwn3VpB1FcUH5zQ1Bpw6ieBziBdnKNvMbOoufG6oV9bDiTfkQmYejRvKdtn59NCQf494VoOaKKHT5T0N0MLChu8QGOqUBhnDZBb3KqjccqSPoFkX0stdC0%2FssEuxnLs%2B8SiBM17oLWnFh45gDUqT5%2Bbe0I0ROiG%2BC5UdPZhlVDcTMwEj51QS4agJdHUvZ0nMumV6E7e6%2F25O4y1q736RYthHQ8mh09awH1Gu%2FBNvK%2FMLZZoLR5jUMgHXvpoO2kKKC5teQ1stZraHyKXZ6jCbp9Vs5e%2FogkL9IxFX05LkB8a%2Fj5fxzGjQYhUny&X-Amz-Signature=bd22fdfa94558718071f1a6f01d2ad81ac0ff0d8d520648a6cf796f649d83a87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NCEV2UO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgaAa3V%2FQR9Kbn9TKmMN07PbrGDU3Hc4rMLYXf3mLWlwIgOeSMkPnsF6LQb%2BPEMHjNsBT%2BVkVL8n7SwIrTdPKqU9Iq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJNsgJPHzjBylv%2FDryrcAwaXastqz6gdXYiYPSOCSgqPUxmPR5O2WeCVY4PMxP%2Fmsc0rrDx4H2%2Bdh5KEbJS%2FfPOwcr3MHzaS04b59gxMJx7ML9tITRAt%2BUhOqktLssE55RcaaX5Av2V1u4o%2FV6vDqAz8EPqFIRuxhSh9S1K%2BDRdvXdOUlOIA%2F%2FBC2d%2BBcmlXbNU0n2NtQcGk8%2B5mivZs08pzKbj5fHnmUIw9CIIC3jSt9KN%2Ba%2BBRv1YCmZr0PHnnHKYaTKsLsZ9qFp69oyu2D%2BNhPjj9OLRgtn6yLdxSVbjZjCfbO2je821wrj1F52bY6I7zqxNV2TLT%2F0Brf3H0%2B9u6v%2FVRpVgoMR0ZU4ZajOF0nItO0eX7Lz0hoCiAMVae2%2BpTgh5DEfQFoB2ksoLaM6Ub0HMKVFnbKtaWzIXtFpdyDFt9xAOMt3aXpjij9qlBXAEFvqsTmNV9kweJuvLGvGszylLTn85ZTGBsQF%2F9JM63O%2FY%2FN6F3KoFT61u27%2BwtL90w%2BIDoYlzJErxCA5HH2i4InTPDmqguh0moyFNr17aU%2B0L73nRmBgdI%2Bjvd%2FIVKwn3VpB1FcUH5zQ1Bpw6ieBziBdnKNvMbOoufG6oV9bDiTfkQmYejRvKdtn59NCQf494VoOaKKHT5T0N0MLChu8QGOqUBhnDZBb3KqjccqSPoFkX0stdC0%2FssEuxnLs%2B8SiBM17oLWnFh45gDUqT5%2Bbe0I0ROiG%2BC5UdPZhlVDcTMwEj51QS4agJdHUvZ0nMumV6E7e6%2F25O4y1q736RYthHQ8mh09awH1Gu%2FBNvK%2FMLZZoLR5jUMgHXvpoO2kKKC5teQ1stZraHyKXZ6jCbp9Vs5e%2FogkL9IxFX05LkB8a%2Fj5fxzGjQYhUny&X-Amz-Signature=0f82e0ccf8c7de1b72152f5a1bbc1a88484d3feb470fecad459667f8c65228ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NCEV2UO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgaAa3V%2FQR9Kbn9TKmMN07PbrGDU3Hc4rMLYXf3mLWlwIgOeSMkPnsF6LQb%2BPEMHjNsBT%2BVkVL8n7SwIrTdPKqU9Iq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJNsgJPHzjBylv%2FDryrcAwaXastqz6gdXYiYPSOCSgqPUxmPR5O2WeCVY4PMxP%2Fmsc0rrDx4H2%2Bdh5KEbJS%2FfPOwcr3MHzaS04b59gxMJx7ML9tITRAt%2BUhOqktLssE55RcaaX5Av2V1u4o%2FV6vDqAz8EPqFIRuxhSh9S1K%2BDRdvXdOUlOIA%2F%2FBC2d%2BBcmlXbNU0n2NtQcGk8%2B5mivZs08pzKbj5fHnmUIw9CIIC3jSt9KN%2Ba%2BBRv1YCmZr0PHnnHKYaTKsLsZ9qFp69oyu2D%2BNhPjj9OLRgtn6yLdxSVbjZjCfbO2je821wrj1F52bY6I7zqxNV2TLT%2F0Brf3H0%2B9u6v%2FVRpVgoMR0ZU4ZajOF0nItO0eX7Lz0hoCiAMVae2%2BpTgh5DEfQFoB2ksoLaM6Ub0HMKVFnbKtaWzIXtFpdyDFt9xAOMt3aXpjij9qlBXAEFvqsTmNV9kweJuvLGvGszylLTn85ZTGBsQF%2F9JM63O%2FY%2FN6F3KoFT61u27%2BwtL90w%2BIDoYlzJErxCA5HH2i4InTPDmqguh0moyFNr17aU%2B0L73nRmBgdI%2Bjvd%2FIVKwn3VpB1FcUH5zQ1Bpw6ieBziBdnKNvMbOoufG6oV9bDiTfkQmYejRvKdtn59NCQf494VoOaKKHT5T0N0MLChu8QGOqUBhnDZBb3KqjccqSPoFkX0stdC0%2FssEuxnLs%2B8SiBM17oLWnFh45gDUqT5%2Bbe0I0ROiG%2BC5UdPZhlVDcTMwEj51QS4agJdHUvZ0nMumV6E7e6%2F25O4y1q736RYthHQ8mh09awH1Gu%2FBNvK%2FMLZZoLR5jUMgHXvpoO2kKKC5teQ1stZraHyKXZ6jCbp9Vs5e%2FogkL9IxFX05LkB8a%2Fj5fxzGjQYhUny&X-Amz-Signature=7326bf933147508daaa400ed1a67fcf016635f5a89afc127380638d570a3a892&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NCEV2UO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgaAa3V%2FQR9Kbn9TKmMN07PbrGDU3Hc4rMLYXf3mLWlwIgOeSMkPnsF6LQb%2BPEMHjNsBT%2BVkVL8n7SwIrTdPKqU9Iq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDJNsgJPHzjBylv%2FDryrcAwaXastqz6gdXYiYPSOCSgqPUxmPR5O2WeCVY4PMxP%2Fmsc0rrDx4H2%2Bdh5KEbJS%2FfPOwcr3MHzaS04b59gxMJx7ML9tITRAt%2BUhOqktLssE55RcaaX5Av2V1u4o%2FV6vDqAz8EPqFIRuxhSh9S1K%2BDRdvXdOUlOIA%2F%2FBC2d%2BBcmlXbNU0n2NtQcGk8%2B5mivZs08pzKbj5fHnmUIw9CIIC3jSt9KN%2Ba%2BBRv1YCmZr0PHnnHKYaTKsLsZ9qFp69oyu2D%2BNhPjj9OLRgtn6yLdxSVbjZjCfbO2je821wrj1F52bY6I7zqxNV2TLT%2F0Brf3H0%2B9u6v%2FVRpVgoMR0ZU4ZajOF0nItO0eX7Lz0hoCiAMVae2%2BpTgh5DEfQFoB2ksoLaM6Ub0HMKVFnbKtaWzIXtFpdyDFt9xAOMt3aXpjij9qlBXAEFvqsTmNV9kweJuvLGvGszylLTn85ZTGBsQF%2F9JM63O%2FY%2FN6F3KoFT61u27%2BwtL90w%2BIDoYlzJErxCA5HH2i4InTPDmqguh0moyFNr17aU%2B0L73nRmBgdI%2Bjvd%2FIVKwn3VpB1FcUH5zQ1Bpw6ieBziBdnKNvMbOoufG6oV9bDiTfkQmYejRvKdtn59NCQf494VoOaKKHT5T0N0MLChu8QGOqUBhnDZBb3KqjccqSPoFkX0stdC0%2FssEuxnLs%2B8SiBM17oLWnFh45gDUqT5%2Bbe0I0ROiG%2BC5UdPZhlVDcTMwEj51QS4agJdHUvZ0nMumV6E7e6%2F25O4y1q736RYthHQ8mh09awH1Gu%2FBNvK%2FMLZZoLR5jUMgHXvpoO2kKKC5teQ1stZraHyKXZ6jCbp9Vs5e%2FogkL9IxFX05LkB8a%2Fj5fxzGjQYhUny&X-Amz-Signature=61f3d5e201a0bcef43f14ffd2721ebc8865d0cc6c9a1e816b6ecfb07794dfedb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
