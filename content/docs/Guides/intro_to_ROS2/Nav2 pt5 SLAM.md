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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R67LS2QP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD5CKhdChtrlMKrje8%2BHN3V1uKpPPeoyJTe2VkeVytdPAIhAPBznCxVNc0bkBWWDS5JxpO6HYWYpno7EcOFNNOze9VoKv8DCFcQABoMNjM3NDIzMTgzODA1Igw4DMRM%2BJQzkWDd4TIq3APLxOstOmEKO7ytIJk4G1TIL5B01mypFZVSfxIZTrQNMSftFsKVp9pZ5Us%2FCi82pkZKRRzT29BdreISOxBw8cpB6wv0cNW0fMZXCWgpGOMn%2Bn3YL305B9itDYW7VHT6gzyHYhiucESOs5XF%2Fqa5G8%2BJFYuYG96GwhHIcG9GB7%2FBdsgU%2B0rHHJpiTfGXwFD03QlJ%2FgiFCPmWR8MPoBaz%2BfNUrmfMbVzXEpzrlyO60K1wItVI1d%2BAk2NL8tWFpESTrbup2Lye%2FLBGKHW4sqpV4bcL7crS7QL%2BdGcAUM2ZrRX5ZsmJKehnsMqwY0245x3Vd6Ov%2B%2BG9kLp%2FXX8MjHUO%2FBN5n%2F7aLeBeCZ52JbQxhnnsfBha8kAm0IV3878BgdRifH7tFGH8HFeq02Ql578Fe8J2LlmNmbAzeRSr6tVG2qTNwMN5JIqHa4e%2FZ98xl4beu7C7cbAE4SoI7YZAO330KpkmUAmcxb7n1FeSkVwHHb8dNNvQ3%2B%2FY5rZIt6pMT%2FPyudC01bqon65bLCvn6MPSIRq8arUy5EJhikg%2FRpwBnpWDuDIExskv22BnYvvJ8B5uEEADNiQq5OGtsBtRzgpQsVr08qNLbnUP3IZAGzsjymQE3WipZ0Doe0HmiFhEMzCNs8bEBjqkAacIC1pHpeeExtSzbvMnfWVyeTwsdc0ClJ3n162UKvzzU%2F2qw2y1Bl6KH8Uc9WfABTsMGF0H5c%2FvXnKgpQ5TIQOdbCBpEgQwpr1MSy9O4TFjljfOalOkt0%2FxGvsadJUakZ5wClEfbffvBLpHflGKMNGov%2BSPhQihqqo1t5JhZrbyX0ZBdWIunUKqjf6pfvaSq5dzQlADpeKeNMwrywalalFqiq1C&X-Amz-Signature=bf88cba5e238a1f4828d01fcef17c8c634643308158abc20f2fe3da68a3df075&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R67LS2QP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD5CKhdChtrlMKrje8%2BHN3V1uKpPPeoyJTe2VkeVytdPAIhAPBznCxVNc0bkBWWDS5JxpO6HYWYpno7EcOFNNOze9VoKv8DCFcQABoMNjM3NDIzMTgzODA1Igw4DMRM%2BJQzkWDd4TIq3APLxOstOmEKO7ytIJk4G1TIL5B01mypFZVSfxIZTrQNMSftFsKVp9pZ5Us%2FCi82pkZKRRzT29BdreISOxBw8cpB6wv0cNW0fMZXCWgpGOMn%2Bn3YL305B9itDYW7VHT6gzyHYhiucESOs5XF%2Fqa5G8%2BJFYuYG96GwhHIcG9GB7%2FBdsgU%2B0rHHJpiTfGXwFD03QlJ%2FgiFCPmWR8MPoBaz%2BfNUrmfMbVzXEpzrlyO60K1wItVI1d%2BAk2NL8tWFpESTrbup2Lye%2FLBGKHW4sqpV4bcL7crS7QL%2BdGcAUM2ZrRX5ZsmJKehnsMqwY0245x3Vd6Ov%2B%2BG9kLp%2FXX8MjHUO%2FBN5n%2F7aLeBeCZ52JbQxhnnsfBha8kAm0IV3878BgdRifH7tFGH8HFeq02Ql578Fe8J2LlmNmbAzeRSr6tVG2qTNwMN5JIqHa4e%2FZ98xl4beu7C7cbAE4SoI7YZAO330KpkmUAmcxb7n1FeSkVwHHb8dNNvQ3%2B%2FY5rZIt6pMT%2FPyudC01bqon65bLCvn6MPSIRq8arUy5EJhikg%2FRpwBnpWDuDIExskv22BnYvvJ8B5uEEADNiQq5OGtsBtRzgpQsVr08qNLbnUP3IZAGzsjymQE3WipZ0Doe0HmiFhEMzCNs8bEBjqkAacIC1pHpeeExtSzbvMnfWVyeTwsdc0ClJ3n162UKvzzU%2F2qw2y1Bl6KH8Uc9WfABTsMGF0H5c%2FvXnKgpQ5TIQOdbCBpEgQwpr1MSy9O4TFjljfOalOkt0%2FxGvsadJUakZ5wClEfbffvBLpHflGKMNGov%2BSPhQihqqo1t5JhZrbyX0ZBdWIunUKqjf6pfvaSq5dzQlADpeKeNMwrywalalFqiq1C&X-Amz-Signature=101b0bc742b12ff1a201640975b9d8791dd4d3473f7422ddea6205fba16ece01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R67LS2QP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD5CKhdChtrlMKrje8%2BHN3V1uKpPPeoyJTe2VkeVytdPAIhAPBznCxVNc0bkBWWDS5JxpO6HYWYpno7EcOFNNOze9VoKv8DCFcQABoMNjM3NDIzMTgzODA1Igw4DMRM%2BJQzkWDd4TIq3APLxOstOmEKO7ytIJk4G1TIL5B01mypFZVSfxIZTrQNMSftFsKVp9pZ5Us%2FCi82pkZKRRzT29BdreISOxBw8cpB6wv0cNW0fMZXCWgpGOMn%2Bn3YL305B9itDYW7VHT6gzyHYhiucESOs5XF%2Fqa5G8%2BJFYuYG96GwhHIcG9GB7%2FBdsgU%2B0rHHJpiTfGXwFD03QlJ%2FgiFCPmWR8MPoBaz%2BfNUrmfMbVzXEpzrlyO60K1wItVI1d%2BAk2NL8tWFpESTrbup2Lye%2FLBGKHW4sqpV4bcL7crS7QL%2BdGcAUM2ZrRX5ZsmJKehnsMqwY0245x3Vd6Ov%2B%2BG9kLp%2FXX8MjHUO%2FBN5n%2F7aLeBeCZ52JbQxhnnsfBha8kAm0IV3878BgdRifH7tFGH8HFeq02Ql578Fe8J2LlmNmbAzeRSr6tVG2qTNwMN5JIqHa4e%2FZ98xl4beu7C7cbAE4SoI7YZAO330KpkmUAmcxb7n1FeSkVwHHb8dNNvQ3%2B%2FY5rZIt6pMT%2FPyudC01bqon65bLCvn6MPSIRq8arUy5EJhikg%2FRpwBnpWDuDIExskv22BnYvvJ8B5uEEADNiQq5OGtsBtRzgpQsVr08qNLbnUP3IZAGzsjymQE3WipZ0Doe0HmiFhEMzCNs8bEBjqkAacIC1pHpeeExtSzbvMnfWVyeTwsdc0ClJ3n162UKvzzU%2F2qw2y1Bl6KH8Uc9WfABTsMGF0H5c%2FvXnKgpQ5TIQOdbCBpEgQwpr1MSy9O4TFjljfOalOkt0%2FxGvsadJUakZ5wClEfbffvBLpHflGKMNGov%2BSPhQihqqo1t5JhZrbyX0ZBdWIunUKqjf6pfvaSq5dzQlADpeKeNMwrywalalFqiq1C&X-Amz-Signature=fa70c45f0f38ece5e1caa87f8cf0143431dfd65e959c4f78d3fe356280daf401&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R67LS2QP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD5CKhdChtrlMKrje8%2BHN3V1uKpPPeoyJTe2VkeVytdPAIhAPBznCxVNc0bkBWWDS5JxpO6HYWYpno7EcOFNNOze9VoKv8DCFcQABoMNjM3NDIzMTgzODA1Igw4DMRM%2BJQzkWDd4TIq3APLxOstOmEKO7ytIJk4G1TIL5B01mypFZVSfxIZTrQNMSftFsKVp9pZ5Us%2FCi82pkZKRRzT29BdreISOxBw8cpB6wv0cNW0fMZXCWgpGOMn%2Bn3YL305B9itDYW7VHT6gzyHYhiucESOs5XF%2Fqa5G8%2BJFYuYG96GwhHIcG9GB7%2FBdsgU%2B0rHHJpiTfGXwFD03QlJ%2FgiFCPmWR8MPoBaz%2BfNUrmfMbVzXEpzrlyO60K1wItVI1d%2BAk2NL8tWFpESTrbup2Lye%2FLBGKHW4sqpV4bcL7crS7QL%2BdGcAUM2ZrRX5ZsmJKehnsMqwY0245x3Vd6Ov%2B%2BG9kLp%2FXX8MjHUO%2FBN5n%2F7aLeBeCZ52JbQxhnnsfBha8kAm0IV3878BgdRifH7tFGH8HFeq02Ql578Fe8J2LlmNmbAzeRSr6tVG2qTNwMN5JIqHa4e%2FZ98xl4beu7C7cbAE4SoI7YZAO330KpkmUAmcxb7n1FeSkVwHHb8dNNvQ3%2B%2FY5rZIt6pMT%2FPyudC01bqon65bLCvn6MPSIRq8arUy5EJhikg%2FRpwBnpWDuDIExskv22BnYvvJ8B5uEEADNiQq5OGtsBtRzgpQsVr08qNLbnUP3IZAGzsjymQE3WipZ0Doe0HmiFhEMzCNs8bEBjqkAacIC1pHpeeExtSzbvMnfWVyeTwsdc0ClJ3n162UKvzzU%2F2qw2y1Bl6KH8Uc9WfABTsMGF0H5c%2FvXnKgpQ5TIQOdbCBpEgQwpr1MSy9O4TFjljfOalOkt0%2FxGvsadJUakZ5wClEfbffvBLpHflGKMNGov%2BSPhQihqqo1t5JhZrbyX0ZBdWIunUKqjf6pfvaSq5dzQlADpeKeNMwrywalalFqiq1C&X-Amz-Signature=67606de133e79de553644674456ad6c6d7c5eb76680ea7af00c0c9a943436755&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R67LS2QP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD5CKhdChtrlMKrje8%2BHN3V1uKpPPeoyJTe2VkeVytdPAIhAPBznCxVNc0bkBWWDS5JxpO6HYWYpno7EcOFNNOze9VoKv8DCFcQABoMNjM3NDIzMTgzODA1Igw4DMRM%2BJQzkWDd4TIq3APLxOstOmEKO7ytIJk4G1TIL5B01mypFZVSfxIZTrQNMSftFsKVp9pZ5Us%2FCi82pkZKRRzT29BdreISOxBw8cpB6wv0cNW0fMZXCWgpGOMn%2Bn3YL305B9itDYW7VHT6gzyHYhiucESOs5XF%2Fqa5G8%2BJFYuYG96GwhHIcG9GB7%2FBdsgU%2B0rHHJpiTfGXwFD03QlJ%2FgiFCPmWR8MPoBaz%2BfNUrmfMbVzXEpzrlyO60K1wItVI1d%2BAk2NL8tWFpESTrbup2Lye%2FLBGKHW4sqpV4bcL7crS7QL%2BdGcAUM2ZrRX5ZsmJKehnsMqwY0245x3Vd6Ov%2B%2BG9kLp%2FXX8MjHUO%2FBN5n%2F7aLeBeCZ52JbQxhnnsfBha8kAm0IV3878BgdRifH7tFGH8HFeq02Ql578Fe8J2LlmNmbAzeRSr6tVG2qTNwMN5JIqHa4e%2FZ98xl4beu7C7cbAE4SoI7YZAO330KpkmUAmcxb7n1FeSkVwHHb8dNNvQ3%2B%2FY5rZIt6pMT%2FPyudC01bqon65bLCvn6MPSIRq8arUy5EJhikg%2FRpwBnpWDuDIExskv22BnYvvJ8B5uEEADNiQq5OGtsBtRzgpQsVr08qNLbnUP3IZAGzsjymQE3WipZ0Doe0HmiFhEMzCNs8bEBjqkAacIC1pHpeeExtSzbvMnfWVyeTwsdc0ClJ3n162UKvzzU%2F2qw2y1Bl6KH8Uc9WfABTsMGF0H5c%2FvXnKgpQ5TIQOdbCBpEgQwpr1MSy9O4TFjljfOalOkt0%2FxGvsadJUakZ5wClEfbffvBLpHflGKMNGov%2BSPhQihqqo1t5JhZrbyX0ZBdWIunUKqjf6pfvaSq5dzQlADpeKeNMwrywalalFqiq1C&X-Amz-Signature=1bef366a00d928acc1fc3f434755d0dac451f73de16627bf7bf1b02fe3e06390&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R67LS2QP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD5CKhdChtrlMKrje8%2BHN3V1uKpPPeoyJTe2VkeVytdPAIhAPBznCxVNc0bkBWWDS5JxpO6HYWYpno7EcOFNNOze9VoKv8DCFcQABoMNjM3NDIzMTgzODA1Igw4DMRM%2BJQzkWDd4TIq3APLxOstOmEKO7ytIJk4G1TIL5B01mypFZVSfxIZTrQNMSftFsKVp9pZ5Us%2FCi82pkZKRRzT29BdreISOxBw8cpB6wv0cNW0fMZXCWgpGOMn%2Bn3YL305B9itDYW7VHT6gzyHYhiucESOs5XF%2Fqa5G8%2BJFYuYG96GwhHIcG9GB7%2FBdsgU%2B0rHHJpiTfGXwFD03QlJ%2FgiFCPmWR8MPoBaz%2BfNUrmfMbVzXEpzrlyO60K1wItVI1d%2BAk2NL8tWFpESTrbup2Lye%2FLBGKHW4sqpV4bcL7crS7QL%2BdGcAUM2ZrRX5ZsmJKehnsMqwY0245x3Vd6Ov%2B%2BG9kLp%2FXX8MjHUO%2FBN5n%2F7aLeBeCZ52JbQxhnnsfBha8kAm0IV3878BgdRifH7tFGH8HFeq02Ql578Fe8J2LlmNmbAzeRSr6tVG2qTNwMN5JIqHa4e%2FZ98xl4beu7C7cbAE4SoI7YZAO330KpkmUAmcxb7n1FeSkVwHHb8dNNvQ3%2B%2FY5rZIt6pMT%2FPyudC01bqon65bLCvn6MPSIRq8arUy5EJhikg%2FRpwBnpWDuDIExskv22BnYvvJ8B5uEEADNiQq5OGtsBtRzgpQsVr08qNLbnUP3IZAGzsjymQE3WipZ0Doe0HmiFhEMzCNs8bEBjqkAacIC1pHpeeExtSzbvMnfWVyeTwsdc0ClJ3n162UKvzzU%2F2qw2y1Bl6KH8Uc9WfABTsMGF0H5c%2FvXnKgpQ5TIQOdbCBpEgQwpr1MSy9O4TFjljfOalOkt0%2FxGvsadJUakZ5wClEfbffvBLpHflGKMNGov%2BSPhQihqqo1t5JhZrbyX0ZBdWIunUKqjf6pfvaSq5dzQlADpeKeNMwrywalalFqiq1C&X-Amz-Signature=c91c8bbecd5f6305569c5051dbe9c629b3e5cc935450e233b7bec10cccaf98c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R67LS2QP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD5CKhdChtrlMKrje8%2BHN3V1uKpPPeoyJTe2VkeVytdPAIhAPBznCxVNc0bkBWWDS5JxpO6HYWYpno7EcOFNNOze9VoKv8DCFcQABoMNjM3NDIzMTgzODA1Igw4DMRM%2BJQzkWDd4TIq3APLxOstOmEKO7ytIJk4G1TIL5B01mypFZVSfxIZTrQNMSftFsKVp9pZ5Us%2FCi82pkZKRRzT29BdreISOxBw8cpB6wv0cNW0fMZXCWgpGOMn%2Bn3YL305B9itDYW7VHT6gzyHYhiucESOs5XF%2Fqa5G8%2BJFYuYG96GwhHIcG9GB7%2FBdsgU%2B0rHHJpiTfGXwFD03QlJ%2FgiFCPmWR8MPoBaz%2BfNUrmfMbVzXEpzrlyO60K1wItVI1d%2BAk2NL8tWFpESTrbup2Lye%2FLBGKHW4sqpV4bcL7crS7QL%2BdGcAUM2ZrRX5ZsmJKehnsMqwY0245x3Vd6Ov%2B%2BG9kLp%2FXX8MjHUO%2FBN5n%2F7aLeBeCZ52JbQxhnnsfBha8kAm0IV3878BgdRifH7tFGH8HFeq02Ql578Fe8J2LlmNmbAzeRSr6tVG2qTNwMN5JIqHa4e%2FZ98xl4beu7C7cbAE4SoI7YZAO330KpkmUAmcxb7n1FeSkVwHHb8dNNvQ3%2B%2FY5rZIt6pMT%2FPyudC01bqon65bLCvn6MPSIRq8arUy5EJhikg%2FRpwBnpWDuDIExskv22BnYvvJ8B5uEEADNiQq5OGtsBtRzgpQsVr08qNLbnUP3IZAGzsjymQE3WipZ0Doe0HmiFhEMzCNs8bEBjqkAacIC1pHpeeExtSzbvMnfWVyeTwsdc0ClJ3n162UKvzzU%2F2qw2y1Bl6KH8Uc9WfABTsMGF0H5c%2FvXnKgpQ5TIQOdbCBpEgQwpr1MSy9O4TFjljfOalOkt0%2FxGvsadJUakZ5wClEfbffvBLpHflGKMNGov%2BSPhQihqqo1t5JhZrbyX0ZBdWIunUKqjf6pfvaSq5dzQlADpeKeNMwrywalalFqiq1C&X-Amz-Signature=ca26fce317015ed72dfdc8f6d8babfae9a4f418a1aefadd42ca219c6494d2266&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R67LS2QP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD5CKhdChtrlMKrje8%2BHN3V1uKpPPeoyJTe2VkeVytdPAIhAPBznCxVNc0bkBWWDS5JxpO6HYWYpno7EcOFNNOze9VoKv8DCFcQABoMNjM3NDIzMTgzODA1Igw4DMRM%2BJQzkWDd4TIq3APLxOstOmEKO7ytIJk4G1TIL5B01mypFZVSfxIZTrQNMSftFsKVp9pZ5Us%2FCi82pkZKRRzT29BdreISOxBw8cpB6wv0cNW0fMZXCWgpGOMn%2Bn3YL305B9itDYW7VHT6gzyHYhiucESOs5XF%2Fqa5G8%2BJFYuYG96GwhHIcG9GB7%2FBdsgU%2B0rHHJpiTfGXwFD03QlJ%2FgiFCPmWR8MPoBaz%2BfNUrmfMbVzXEpzrlyO60K1wItVI1d%2BAk2NL8tWFpESTrbup2Lye%2FLBGKHW4sqpV4bcL7crS7QL%2BdGcAUM2ZrRX5ZsmJKehnsMqwY0245x3Vd6Ov%2B%2BG9kLp%2FXX8MjHUO%2FBN5n%2F7aLeBeCZ52JbQxhnnsfBha8kAm0IV3878BgdRifH7tFGH8HFeq02Ql578Fe8J2LlmNmbAzeRSr6tVG2qTNwMN5JIqHa4e%2FZ98xl4beu7C7cbAE4SoI7YZAO330KpkmUAmcxb7n1FeSkVwHHb8dNNvQ3%2B%2FY5rZIt6pMT%2FPyudC01bqon65bLCvn6MPSIRq8arUy5EJhikg%2FRpwBnpWDuDIExskv22BnYvvJ8B5uEEADNiQq5OGtsBtRzgpQsVr08qNLbnUP3IZAGzsjymQE3WipZ0Doe0HmiFhEMzCNs8bEBjqkAacIC1pHpeeExtSzbvMnfWVyeTwsdc0ClJ3n162UKvzzU%2F2qw2y1Bl6KH8Uc9WfABTsMGF0H5c%2FvXnKgpQ5TIQOdbCBpEgQwpr1MSy9O4TFjljfOalOkt0%2FxGvsadJUakZ5wClEfbffvBLpHflGKMNGov%2BSPhQihqqo1t5JhZrbyX0ZBdWIunUKqjf6pfvaSq5dzQlADpeKeNMwrywalalFqiq1C&X-Amz-Signature=c8f7facaf4815ec109fb27dd839690b05066f706773416f86b4e682fa0df233d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R67LS2QP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD5CKhdChtrlMKrje8%2BHN3V1uKpPPeoyJTe2VkeVytdPAIhAPBznCxVNc0bkBWWDS5JxpO6HYWYpno7EcOFNNOze9VoKv8DCFcQABoMNjM3NDIzMTgzODA1Igw4DMRM%2BJQzkWDd4TIq3APLxOstOmEKO7ytIJk4G1TIL5B01mypFZVSfxIZTrQNMSftFsKVp9pZ5Us%2FCi82pkZKRRzT29BdreISOxBw8cpB6wv0cNW0fMZXCWgpGOMn%2Bn3YL305B9itDYW7VHT6gzyHYhiucESOs5XF%2Fqa5G8%2BJFYuYG96GwhHIcG9GB7%2FBdsgU%2B0rHHJpiTfGXwFD03QlJ%2FgiFCPmWR8MPoBaz%2BfNUrmfMbVzXEpzrlyO60K1wItVI1d%2BAk2NL8tWFpESTrbup2Lye%2FLBGKHW4sqpV4bcL7crS7QL%2BdGcAUM2ZrRX5ZsmJKehnsMqwY0245x3Vd6Ov%2B%2BG9kLp%2FXX8MjHUO%2FBN5n%2F7aLeBeCZ52JbQxhnnsfBha8kAm0IV3878BgdRifH7tFGH8HFeq02Ql578Fe8J2LlmNmbAzeRSr6tVG2qTNwMN5JIqHa4e%2FZ98xl4beu7C7cbAE4SoI7YZAO330KpkmUAmcxb7n1FeSkVwHHb8dNNvQ3%2B%2FY5rZIt6pMT%2FPyudC01bqon65bLCvn6MPSIRq8arUy5EJhikg%2FRpwBnpWDuDIExskv22BnYvvJ8B5uEEADNiQq5OGtsBtRzgpQsVr08qNLbnUP3IZAGzsjymQE3WipZ0Doe0HmiFhEMzCNs8bEBjqkAacIC1pHpeeExtSzbvMnfWVyeTwsdc0ClJ3n162UKvzzU%2F2qw2y1Bl6KH8Uc9WfABTsMGF0H5c%2FvXnKgpQ5TIQOdbCBpEgQwpr1MSy9O4TFjljfOalOkt0%2FxGvsadJUakZ5wClEfbffvBLpHflGKMNGov%2BSPhQihqqo1t5JhZrbyX0ZBdWIunUKqjf6pfvaSq5dzQlADpeKeNMwrywalalFqiq1C&X-Amz-Signature=817fedad09850c244c7063197a1c15c063e5253f4341fc1f9c77cb733fabb3d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R67LS2QP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD5CKhdChtrlMKrje8%2BHN3V1uKpPPeoyJTe2VkeVytdPAIhAPBznCxVNc0bkBWWDS5JxpO6HYWYpno7EcOFNNOze9VoKv8DCFcQABoMNjM3NDIzMTgzODA1Igw4DMRM%2BJQzkWDd4TIq3APLxOstOmEKO7ytIJk4G1TIL5B01mypFZVSfxIZTrQNMSftFsKVp9pZ5Us%2FCi82pkZKRRzT29BdreISOxBw8cpB6wv0cNW0fMZXCWgpGOMn%2Bn3YL305B9itDYW7VHT6gzyHYhiucESOs5XF%2Fqa5G8%2BJFYuYG96GwhHIcG9GB7%2FBdsgU%2B0rHHJpiTfGXwFD03QlJ%2FgiFCPmWR8MPoBaz%2BfNUrmfMbVzXEpzrlyO60K1wItVI1d%2BAk2NL8tWFpESTrbup2Lye%2FLBGKHW4sqpV4bcL7crS7QL%2BdGcAUM2ZrRX5ZsmJKehnsMqwY0245x3Vd6Ov%2B%2BG9kLp%2FXX8MjHUO%2FBN5n%2F7aLeBeCZ52JbQxhnnsfBha8kAm0IV3878BgdRifH7tFGH8HFeq02Ql578Fe8J2LlmNmbAzeRSr6tVG2qTNwMN5JIqHa4e%2FZ98xl4beu7C7cbAE4SoI7YZAO330KpkmUAmcxb7n1FeSkVwHHb8dNNvQ3%2B%2FY5rZIt6pMT%2FPyudC01bqon65bLCvn6MPSIRq8arUy5EJhikg%2FRpwBnpWDuDIExskv22BnYvvJ8B5uEEADNiQq5OGtsBtRzgpQsVr08qNLbnUP3IZAGzsjymQE3WipZ0Doe0HmiFhEMzCNs8bEBjqkAacIC1pHpeeExtSzbvMnfWVyeTwsdc0ClJ3n162UKvzzU%2F2qw2y1Bl6KH8Uc9WfABTsMGF0H5c%2FvXnKgpQ5TIQOdbCBpEgQwpr1MSy9O4TFjljfOalOkt0%2FxGvsadJUakZ5wClEfbffvBLpHflGKMNGov%2BSPhQihqqo1t5JhZrbyX0ZBdWIunUKqjf6pfvaSq5dzQlADpeKeNMwrywalalFqiq1C&X-Amz-Signature=9fc8727fcaa621e63ff9d69e04dcefb15fa8d92c7ef2a0e1eb6443693f9c7208&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R67LS2QP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD5CKhdChtrlMKrje8%2BHN3V1uKpPPeoyJTe2VkeVytdPAIhAPBznCxVNc0bkBWWDS5JxpO6HYWYpno7EcOFNNOze9VoKv8DCFcQABoMNjM3NDIzMTgzODA1Igw4DMRM%2BJQzkWDd4TIq3APLxOstOmEKO7ytIJk4G1TIL5B01mypFZVSfxIZTrQNMSftFsKVp9pZ5Us%2FCi82pkZKRRzT29BdreISOxBw8cpB6wv0cNW0fMZXCWgpGOMn%2Bn3YL305B9itDYW7VHT6gzyHYhiucESOs5XF%2Fqa5G8%2BJFYuYG96GwhHIcG9GB7%2FBdsgU%2B0rHHJpiTfGXwFD03QlJ%2FgiFCPmWR8MPoBaz%2BfNUrmfMbVzXEpzrlyO60K1wItVI1d%2BAk2NL8tWFpESTrbup2Lye%2FLBGKHW4sqpV4bcL7crS7QL%2BdGcAUM2ZrRX5ZsmJKehnsMqwY0245x3Vd6Ov%2B%2BG9kLp%2FXX8MjHUO%2FBN5n%2F7aLeBeCZ52JbQxhnnsfBha8kAm0IV3878BgdRifH7tFGH8HFeq02Ql578Fe8J2LlmNmbAzeRSr6tVG2qTNwMN5JIqHa4e%2FZ98xl4beu7C7cbAE4SoI7YZAO330KpkmUAmcxb7n1FeSkVwHHb8dNNvQ3%2B%2FY5rZIt6pMT%2FPyudC01bqon65bLCvn6MPSIRq8arUy5EJhikg%2FRpwBnpWDuDIExskv22BnYvvJ8B5uEEADNiQq5OGtsBtRzgpQsVr08qNLbnUP3IZAGzsjymQE3WipZ0Doe0HmiFhEMzCNs8bEBjqkAacIC1pHpeeExtSzbvMnfWVyeTwsdc0ClJ3n162UKvzzU%2F2qw2y1Bl6KH8Uc9WfABTsMGF0H5c%2FvXnKgpQ5TIQOdbCBpEgQwpr1MSy9O4TFjljfOalOkt0%2FxGvsadJUakZ5wClEfbffvBLpHflGKMNGov%2BSPhQihqqo1t5JhZrbyX0ZBdWIunUKqjf6pfvaSq5dzQlADpeKeNMwrywalalFqiq1C&X-Amz-Signature=946bc46fcc3c47ff3628c987d837d1d6b2a6702ed2f362935b94bb7afe8e0875&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R67LS2QP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD5CKhdChtrlMKrje8%2BHN3V1uKpPPeoyJTe2VkeVytdPAIhAPBznCxVNc0bkBWWDS5JxpO6HYWYpno7EcOFNNOze9VoKv8DCFcQABoMNjM3NDIzMTgzODA1Igw4DMRM%2BJQzkWDd4TIq3APLxOstOmEKO7ytIJk4G1TIL5B01mypFZVSfxIZTrQNMSftFsKVp9pZ5Us%2FCi82pkZKRRzT29BdreISOxBw8cpB6wv0cNW0fMZXCWgpGOMn%2Bn3YL305B9itDYW7VHT6gzyHYhiucESOs5XF%2Fqa5G8%2BJFYuYG96GwhHIcG9GB7%2FBdsgU%2B0rHHJpiTfGXwFD03QlJ%2FgiFCPmWR8MPoBaz%2BfNUrmfMbVzXEpzrlyO60K1wItVI1d%2BAk2NL8tWFpESTrbup2Lye%2FLBGKHW4sqpV4bcL7crS7QL%2BdGcAUM2ZrRX5ZsmJKehnsMqwY0245x3Vd6Ov%2B%2BG9kLp%2FXX8MjHUO%2FBN5n%2F7aLeBeCZ52JbQxhnnsfBha8kAm0IV3878BgdRifH7tFGH8HFeq02Ql578Fe8J2LlmNmbAzeRSr6tVG2qTNwMN5JIqHa4e%2FZ98xl4beu7C7cbAE4SoI7YZAO330KpkmUAmcxb7n1FeSkVwHHb8dNNvQ3%2B%2FY5rZIt6pMT%2FPyudC01bqon65bLCvn6MPSIRq8arUy5EJhikg%2FRpwBnpWDuDIExskv22BnYvvJ8B5uEEADNiQq5OGtsBtRzgpQsVr08qNLbnUP3IZAGzsjymQE3WipZ0Doe0HmiFhEMzCNs8bEBjqkAacIC1pHpeeExtSzbvMnfWVyeTwsdc0ClJ3n162UKvzzU%2F2qw2y1Bl6KH8Uc9WfABTsMGF0H5c%2FvXnKgpQ5TIQOdbCBpEgQwpr1MSy9O4TFjljfOalOkt0%2FxGvsadJUakZ5wClEfbffvBLpHflGKMNGov%2BSPhQihqqo1t5JhZrbyX0ZBdWIunUKqjf6pfvaSq5dzQlADpeKeNMwrywalalFqiq1C&X-Amz-Signature=45a38341aee5f87c00e8cfbd097547ec529ea275c5ec223413f33377b013fae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R67LS2QP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD5CKhdChtrlMKrje8%2BHN3V1uKpPPeoyJTe2VkeVytdPAIhAPBznCxVNc0bkBWWDS5JxpO6HYWYpno7EcOFNNOze9VoKv8DCFcQABoMNjM3NDIzMTgzODA1Igw4DMRM%2BJQzkWDd4TIq3APLxOstOmEKO7ytIJk4G1TIL5B01mypFZVSfxIZTrQNMSftFsKVp9pZ5Us%2FCi82pkZKRRzT29BdreISOxBw8cpB6wv0cNW0fMZXCWgpGOMn%2Bn3YL305B9itDYW7VHT6gzyHYhiucESOs5XF%2Fqa5G8%2BJFYuYG96GwhHIcG9GB7%2FBdsgU%2B0rHHJpiTfGXwFD03QlJ%2FgiFCPmWR8MPoBaz%2BfNUrmfMbVzXEpzrlyO60K1wItVI1d%2BAk2NL8tWFpESTrbup2Lye%2FLBGKHW4sqpV4bcL7crS7QL%2BdGcAUM2ZrRX5ZsmJKehnsMqwY0245x3Vd6Ov%2B%2BG9kLp%2FXX8MjHUO%2FBN5n%2F7aLeBeCZ52JbQxhnnsfBha8kAm0IV3878BgdRifH7tFGH8HFeq02Ql578Fe8J2LlmNmbAzeRSr6tVG2qTNwMN5JIqHa4e%2FZ98xl4beu7C7cbAE4SoI7YZAO330KpkmUAmcxb7n1FeSkVwHHb8dNNvQ3%2B%2FY5rZIt6pMT%2FPyudC01bqon65bLCvn6MPSIRq8arUy5EJhikg%2FRpwBnpWDuDIExskv22BnYvvJ8B5uEEADNiQq5OGtsBtRzgpQsVr08qNLbnUP3IZAGzsjymQE3WipZ0Doe0HmiFhEMzCNs8bEBjqkAacIC1pHpeeExtSzbvMnfWVyeTwsdc0ClJ3n162UKvzzU%2F2qw2y1Bl6KH8Uc9WfABTsMGF0H5c%2FvXnKgpQ5TIQOdbCBpEgQwpr1MSy9O4TFjljfOalOkt0%2FxGvsadJUakZ5wClEfbffvBLpHflGKMNGov%2BSPhQihqqo1t5JhZrbyX0ZBdWIunUKqjf6pfvaSq5dzQlADpeKeNMwrywalalFqiq1C&X-Amz-Signature=3ff0c50051cb70c12fd87a35ceaf1907e5ad8ccd185d1b429bdef2d5b23d475f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R67LS2QP%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T061716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD5CKhdChtrlMKrje8%2BHN3V1uKpPPeoyJTe2VkeVytdPAIhAPBznCxVNc0bkBWWDS5JxpO6HYWYpno7EcOFNNOze9VoKv8DCFcQABoMNjM3NDIzMTgzODA1Igw4DMRM%2BJQzkWDd4TIq3APLxOstOmEKO7ytIJk4G1TIL5B01mypFZVSfxIZTrQNMSftFsKVp9pZ5Us%2FCi82pkZKRRzT29BdreISOxBw8cpB6wv0cNW0fMZXCWgpGOMn%2Bn3YL305B9itDYW7VHT6gzyHYhiucESOs5XF%2Fqa5G8%2BJFYuYG96GwhHIcG9GB7%2FBdsgU%2B0rHHJpiTfGXwFD03QlJ%2FgiFCPmWR8MPoBaz%2BfNUrmfMbVzXEpzrlyO60K1wItVI1d%2BAk2NL8tWFpESTrbup2Lye%2FLBGKHW4sqpV4bcL7crS7QL%2BdGcAUM2ZrRX5ZsmJKehnsMqwY0245x3Vd6Ov%2B%2BG9kLp%2FXX8MjHUO%2FBN5n%2F7aLeBeCZ52JbQxhnnsfBha8kAm0IV3878BgdRifH7tFGH8HFeq02Ql578Fe8J2LlmNmbAzeRSr6tVG2qTNwMN5JIqHa4e%2FZ98xl4beu7C7cbAE4SoI7YZAO330KpkmUAmcxb7n1FeSkVwHHb8dNNvQ3%2B%2FY5rZIt6pMT%2FPyudC01bqon65bLCvn6MPSIRq8arUy5EJhikg%2FRpwBnpWDuDIExskv22BnYvvJ8B5uEEADNiQq5OGtsBtRzgpQsVr08qNLbnUP3IZAGzsjymQE3WipZ0Doe0HmiFhEMzCNs8bEBjqkAacIC1pHpeeExtSzbvMnfWVyeTwsdc0ClJ3n162UKvzzU%2F2qw2y1Bl6KH8Uc9WfABTsMGF0H5c%2FvXnKgpQ5TIQOdbCBpEgQwpr1MSy9O4TFjljfOalOkt0%2FxGvsadJUakZ5wClEfbffvBLpHflGKMNGov%2BSPhQihqqo1t5JhZrbyX0ZBdWIunUKqjf6pfvaSq5dzQlADpeKeNMwrywalalFqiq1C&X-Amz-Signature=91eb14290fa2932221bece599e28d5b34e11fc42d3ec4376e04bd287f933bfbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
