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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGC4IFBT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIF06LPfnJy2zJWuKZi4NgYZyr1Iylb2ZhcR7r8dvV9mUAiEA%2BygCarIuLLqaMljcERlTWv7h5WhJcI0yFO1xVCKVAP4q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDGGu%2FYuxxqgKI50AkCrcA%2BMHTJJxyBJsHjaWS70A1KTLRUwJLmDqFfpWsz2kPMwJNaejSB0wge31llUsNa1E0NXodubPVak7BGPravUHmtpfU05liisxFqyJSr6NVuGFj5uuU4uEr6SQz88XuTqpbCclxCj3vJN9uFD3GU7xc08TJcFihJHH5EfNNOa5i6Um1qGbGHPlVpFLzzlPRXAWNX1x%2Fz%2Bq3Tt3LSoVyyW9Vxr7NhEeYugT3e7dGkapw%2FQpaxDxY9lpnvMCWaMd9AJlL00n%2BpJeRz0WdcvfunrDrtOeRLZXwzyNPdRIsDsTe%2FoZSr6voeO8de0SIS7FQFjlalxsQS0ORIYulh%2BxUSiFab4Y95%2BMu15scISH45orKmd3b528KvgJ8aZxjv1u%2FxTEYe5j4%2BrjH%2Bv3sDHUvKfoD9tG6d8SET4%2FgeBqCyiAnnxl22ZXMcOq6VpGKeAOG1z22GbxFSlrLjn8Zn7H8dl8zN5VOw%2BFp1Y7jrHcqevroA0Sxjj1vSHJ8%2BwTSC2fcYsvH%2BeCxxHMheNeR%2FPpLRywEoxvaYHFIAJPZvNVjeOBZz667Yw4qEr9W%2F6WGFzy12GpU1l8CQvUo3DbLaBW0RvNCNj9l6lZWU6HoaxXfBN8wDtFkRdH5OoBkWXXbm%2BTMJvAxMQGOqUBVsQiHTANfaHB%2Ba6Dtw%2BcZV0Bj0WB8Gj3gTd4UucwI9PIhlScovinJ8u0M1Fr0jy18I%2FYlus6jx9LWVMdrpxoFTSxjTX5nKU7vYIjiLHUmtpEsssdfdk9tt3LYhf3xFpDA5NgtlRMUy4W%2BBv%2B%2FiKTxSjB%2F1I5GBiju5BFHDcgnQIWveTZJR0n2DXLX1j7R1g2085Z9TwlYR0fPod2M4SUAN828W4w&X-Amz-Signature=e5af4e87ef816b3b4e6e15dccdebfd44e889bb363c9f7bc9125c4028d9e1d7b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGC4IFBT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIF06LPfnJy2zJWuKZi4NgYZyr1Iylb2ZhcR7r8dvV9mUAiEA%2BygCarIuLLqaMljcERlTWv7h5WhJcI0yFO1xVCKVAP4q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDGGu%2FYuxxqgKI50AkCrcA%2BMHTJJxyBJsHjaWS70A1KTLRUwJLmDqFfpWsz2kPMwJNaejSB0wge31llUsNa1E0NXodubPVak7BGPravUHmtpfU05liisxFqyJSr6NVuGFj5uuU4uEr6SQz88XuTqpbCclxCj3vJN9uFD3GU7xc08TJcFihJHH5EfNNOa5i6Um1qGbGHPlVpFLzzlPRXAWNX1x%2Fz%2Bq3Tt3LSoVyyW9Vxr7NhEeYugT3e7dGkapw%2FQpaxDxY9lpnvMCWaMd9AJlL00n%2BpJeRz0WdcvfunrDrtOeRLZXwzyNPdRIsDsTe%2FoZSr6voeO8de0SIS7FQFjlalxsQS0ORIYulh%2BxUSiFab4Y95%2BMu15scISH45orKmd3b528KvgJ8aZxjv1u%2FxTEYe5j4%2BrjH%2Bv3sDHUvKfoD9tG6d8SET4%2FgeBqCyiAnnxl22ZXMcOq6VpGKeAOG1z22GbxFSlrLjn8Zn7H8dl8zN5VOw%2BFp1Y7jrHcqevroA0Sxjj1vSHJ8%2BwTSC2fcYsvH%2BeCxxHMheNeR%2FPpLRywEoxvaYHFIAJPZvNVjeOBZz667Yw4qEr9W%2F6WGFzy12GpU1l8CQvUo3DbLaBW0RvNCNj9l6lZWU6HoaxXfBN8wDtFkRdH5OoBkWXXbm%2BTMJvAxMQGOqUBVsQiHTANfaHB%2Ba6Dtw%2BcZV0Bj0WB8Gj3gTd4UucwI9PIhlScovinJ8u0M1Fr0jy18I%2FYlus6jx9LWVMdrpxoFTSxjTX5nKU7vYIjiLHUmtpEsssdfdk9tt3LYhf3xFpDA5NgtlRMUy4W%2BBv%2B%2FiKTxSjB%2F1I5GBiju5BFHDcgnQIWveTZJR0n2DXLX1j7R1g2085Z9TwlYR0fPod2M4SUAN828W4w&X-Amz-Signature=5341eafe374c7edfc631ea95ab9e4bdb7e8fce3d1a96cc13bf7a96f25fc22418&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGC4IFBT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIF06LPfnJy2zJWuKZi4NgYZyr1Iylb2ZhcR7r8dvV9mUAiEA%2BygCarIuLLqaMljcERlTWv7h5WhJcI0yFO1xVCKVAP4q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDGGu%2FYuxxqgKI50AkCrcA%2BMHTJJxyBJsHjaWS70A1KTLRUwJLmDqFfpWsz2kPMwJNaejSB0wge31llUsNa1E0NXodubPVak7BGPravUHmtpfU05liisxFqyJSr6NVuGFj5uuU4uEr6SQz88XuTqpbCclxCj3vJN9uFD3GU7xc08TJcFihJHH5EfNNOa5i6Um1qGbGHPlVpFLzzlPRXAWNX1x%2Fz%2Bq3Tt3LSoVyyW9Vxr7NhEeYugT3e7dGkapw%2FQpaxDxY9lpnvMCWaMd9AJlL00n%2BpJeRz0WdcvfunrDrtOeRLZXwzyNPdRIsDsTe%2FoZSr6voeO8de0SIS7FQFjlalxsQS0ORIYulh%2BxUSiFab4Y95%2BMu15scISH45orKmd3b528KvgJ8aZxjv1u%2FxTEYe5j4%2BrjH%2Bv3sDHUvKfoD9tG6d8SET4%2FgeBqCyiAnnxl22ZXMcOq6VpGKeAOG1z22GbxFSlrLjn8Zn7H8dl8zN5VOw%2BFp1Y7jrHcqevroA0Sxjj1vSHJ8%2BwTSC2fcYsvH%2BeCxxHMheNeR%2FPpLRywEoxvaYHFIAJPZvNVjeOBZz667Yw4qEr9W%2F6WGFzy12GpU1l8CQvUo3DbLaBW0RvNCNj9l6lZWU6HoaxXfBN8wDtFkRdH5OoBkWXXbm%2BTMJvAxMQGOqUBVsQiHTANfaHB%2Ba6Dtw%2BcZV0Bj0WB8Gj3gTd4UucwI9PIhlScovinJ8u0M1Fr0jy18I%2FYlus6jx9LWVMdrpxoFTSxjTX5nKU7vYIjiLHUmtpEsssdfdk9tt3LYhf3xFpDA5NgtlRMUy4W%2BBv%2B%2FiKTxSjB%2F1I5GBiju5BFHDcgnQIWveTZJR0n2DXLX1j7R1g2085Z9TwlYR0fPod2M4SUAN828W4w&X-Amz-Signature=70ffb6c3e263e165b144d02d3cab19fc4c0a7c1b274776d74330ae8084f71035&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGC4IFBT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIF06LPfnJy2zJWuKZi4NgYZyr1Iylb2ZhcR7r8dvV9mUAiEA%2BygCarIuLLqaMljcERlTWv7h5WhJcI0yFO1xVCKVAP4q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDGGu%2FYuxxqgKI50AkCrcA%2BMHTJJxyBJsHjaWS70A1KTLRUwJLmDqFfpWsz2kPMwJNaejSB0wge31llUsNa1E0NXodubPVak7BGPravUHmtpfU05liisxFqyJSr6NVuGFj5uuU4uEr6SQz88XuTqpbCclxCj3vJN9uFD3GU7xc08TJcFihJHH5EfNNOa5i6Um1qGbGHPlVpFLzzlPRXAWNX1x%2Fz%2Bq3Tt3LSoVyyW9Vxr7NhEeYugT3e7dGkapw%2FQpaxDxY9lpnvMCWaMd9AJlL00n%2BpJeRz0WdcvfunrDrtOeRLZXwzyNPdRIsDsTe%2FoZSr6voeO8de0SIS7FQFjlalxsQS0ORIYulh%2BxUSiFab4Y95%2BMu15scISH45orKmd3b528KvgJ8aZxjv1u%2FxTEYe5j4%2BrjH%2Bv3sDHUvKfoD9tG6d8SET4%2FgeBqCyiAnnxl22ZXMcOq6VpGKeAOG1z22GbxFSlrLjn8Zn7H8dl8zN5VOw%2BFp1Y7jrHcqevroA0Sxjj1vSHJ8%2BwTSC2fcYsvH%2BeCxxHMheNeR%2FPpLRywEoxvaYHFIAJPZvNVjeOBZz667Yw4qEr9W%2F6WGFzy12GpU1l8CQvUo3DbLaBW0RvNCNj9l6lZWU6HoaxXfBN8wDtFkRdH5OoBkWXXbm%2BTMJvAxMQGOqUBVsQiHTANfaHB%2Ba6Dtw%2BcZV0Bj0WB8Gj3gTd4UucwI9PIhlScovinJ8u0M1Fr0jy18I%2FYlus6jx9LWVMdrpxoFTSxjTX5nKU7vYIjiLHUmtpEsssdfdk9tt3LYhf3xFpDA5NgtlRMUy4W%2BBv%2B%2FiKTxSjB%2F1I5GBiju5BFHDcgnQIWveTZJR0n2DXLX1j7R1g2085Z9TwlYR0fPod2M4SUAN828W4w&X-Amz-Signature=2fb59a0962d6d52cb18a324f5306eb879804b15a094e4eb33c278d06b60bc534&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGC4IFBT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIF06LPfnJy2zJWuKZi4NgYZyr1Iylb2ZhcR7r8dvV9mUAiEA%2BygCarIuLLqaMljcERlTWv7h5WhJcI0yFO1xVCKVAP4q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDGGu%2FYuxxqgKI50AkCrcA%2BMHTJJxyBJsHjaWS70A1KTLRUwJLmDqFfpWsz2kPMwJNaejSB0wge31llUsNa1E0NXodubPVak7BGPravUHmtpfU05liisxFqyJSr6NVuGFj5uuU4uEr6SQz88XuTqpbCclxCj3vJN9uFD3GU7xc08TJcFihJHH5EfNNOa5i6Um1qGbGHPlVpFLzzlPRXAWNX1x%2Fz%2Bq3Tt3LSoVyyW9Vxr7NhEeYugT3e7dGkapw%2FQpaxDxY9lpnvMCWaMd9AJlL00n%2BpJeRz0WdcvfunrDrtOeRLZXwzyNPdRIsDsTe%2FoZSr6voeO8de0SIS7FQFjlalxsQS0ORIYulh%2BxUSiFab4Y95%2BMu15scISH45orKmd3b528KvgJ8aZxjv1u%2FxTEYe5j4%2BrjH%2Bv3sDHUvKfoD9tG6d8SET4%2FgeBqCyiAnnxl22ZXMcOq6VpGKeAOG1z22GbxFSlrLjn8Zn7H8dl8zN5VOw%2BFp1Y7jrHcqevroA0Sxjj1vSHJ8%2BwTSC2fcYsvH%2BeCxxHMheNeR%2FPpLRywEoxvaYHFIAJPZvNVjeOBZz667Yw4qEr9W%2F6WGFzy12GpU1l8CQvUo3DbLaBW0RvNCNj9l6lZWU6HoaxXfBN8wDtFkRdH5OoBkWXXbm%2BTMJvAxMQGOqUBVsQiHTANfaHB%2Ba6Dtw%2BcZV0Bj0WB8Gj3gTd4UucwI9PIhlScovinJ8u0M1Fr0jy18I%2FYlus6jx9LWVMdrpxoFTSxjTX5nKU7vYIjiLHUmtpEsssdfdk9tt3LYhf3xFpDA5NgtlRMUy4W%2BBv%2B%2FiKTxSjB%2F1I5GBiju5BFHDcgnQIWveTZJR0n2DXLX1j7R1g2085Z9TwlYR0fPod2M4SUAN828W4w&X-Amz-Signature=eda7a7063f7f579e9a78044e9179f02bcc310972d6c61a7e0e4aea32c8deb9ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGC4IFBT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIF06LPfnJy2zJWuKZi4NgYZyr1Iylb2ZhcR7r8dvV9mUAiEA%2BygCarIuLLqaMljcERlTWv7h5WhJcI0yFO1xVCKVAP4q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDGGu%2FYuxxqgKI50AkCrcA%2BMHTJJxyBJsHjaWS70A1KTLRUwJLmDqFfpWsz2kPMwJNaejSB0wge31llUsNa1E0NXodubPVak7BGPravUHmtpfU05liisxFqyJSr6NVuGFj5uuU4uEr6SQz88XuTqpbCclxCj3vJN9uFD3GU7xc08TJcFihJHH5EfNNOa5i6Um1qGbGHPlVpFLzzlPRXAWNX1x%2Fz%2Bq3Tt3LSoVyyW9Vxr7NhEeYugT3e7dGkapw%2FQpaxDxY9lpnvMCWaMd9AJlL00n%2BpJeRz0WdcvfunrDrtOeRLZXwzyNPdRIsDsTe%2FoZSr6voeO8de0SIS7FQFjlalxsQS0ORIYulh%2BxUSiFab4Y95%2BMu15scISH45orKmd3b528KvgJ8aZxjv1u%2FxTEYe5j4%2BrjH%2Bv3sDHUvKfoD9tG6d8SET4%2FgeBqCyiAnnxl22ZXMcOq6VpGKeAOG1z22GbxFSlrLjn8Zn7H8dl8zN5VOw%2BFp1Y7jrHcqevroA0Sxjj1vSHJ8%2BwTSC2fcYsvH%2BeCxxHMheNeR%2FPpLRywEoxvaYHFIAJPZvNVjeOBZz667Yw4qEr9W%2F6WGFzy12GpU1l8CQvUo3DbLaBW0RvNCNj9l6lZWU6HoaxXfBN8wDtFkRdH5OoBkWXXbm%2BTMJvAxMQGOqUBVsQiHTANfaHB%2Ba6Dtw%2BcZV0Bj0WB8Gj3gTd4UucwI9PIhlScovinJ8u0M1Fr0jy18I%2FYlus6jx9LWVMdrpxoFTSxjTX5nKU7vYIjiLHUmtpEsssdfdk9tt3LYhf3xFpDA5NgtlRMUy4W%2BBv%2B%2FiKTxSjB%2F1I5GBiju5BFHDcgnQIWveTZJR0n2DXLX1j7R1g2085Z9TwlYR0fPod2M4SUAN828W4w&X-Amz-Signature=7b086b0a7d46594a954a3b888c2549e581621a986855f043c4238ee02b965fec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGC4IFBT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIF06LPfnJy2zJWuKZi4NgYZyr1Iylb2ZhcR7r8dvV9mUAiEA%2BygCarIuLLqaMljcERlTWv7h5WhJcI0yFO1xVCKVAP4q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDGGu%2FYuxxqgKI50AkCrcA%2BMHTJJxyBJsHjaWS70A1KTLRUwJLmDqFfpWsz2kPMwJNaejSB0wge31llUsNa1E0NXodubPVak7BGPravUHmtpfU05liisxFqyJSr6NVuGFj5uuU4uEr6SQz88XuTqpbCclxCj3vJN9uFD3GU7xc08TJcFihJHH5EfNNOa5i6Um1qGbGHPlVpFLzzlPRXAWNX1x%2Fz%2Bq3Tt3LSoVyyW9Vxr7NhEeYugT3e7dGkapw%2FQpaxDxY9lpnvMCWaMd9AJlL00n%2BpJeRz0WdcvfunrDrtOeRLZXwzyNPdRIsDsTe%2FoZSr6voeO8de0SIS7FQFjlalxsQS0ORIYulh%2BxUSiFab4Y95%2BMu15scISH45orKmd3b528KvgJ8aZxjv1u%2FxTEYe5j4%2BrjH%2Bv3sDHUvKfoD9tG6d8SET4%2FgeBqCyiAnnxl22ZXMcOq6VpGKeAOG1z22GbxFSlrLjn8Zn7H8dl8zN5VOw%2BFp1Y7jrHcqevroA0Sxjj1vSHJ8%2BwTSC2fcYsvH%2BeCxxHMheNeR%2FPpLRywEoxvaYHFIAJPZvNVjeOBZz667Yw4qEr9W%2F6WGFzy12GpU1l8CQvUo3DbLaBW0RvNCNj9l6lZWU6HoaxXfBN8wDtFkRdH5OoBkWXXbm%2BTMJvAxMQGOqUBVsQiHTANfaHB%2Ba6Dtw%2BcZV0Bj0WB8Gj3gTd4UucwI9PIhlScovinJ8u0M1Fr0jy18I%2FYlus6jx9LWVMdrpxoFTSxjTX5nKU7vYIjiLHUmtpEsssdfdk9tt3LYhf3xFpDA5NgtlRMUy4W%2BBv%2B%2FiKTxSjB%2F1I5GBiju5BFHDcgnQIWveTZJR0n2DXLX1j7R1g2085Z9TwlYR0fPod2M4SUAN828W4w&X-Amz-Signature=a90733618118ef27bf5acc7954515366dddd78fb7b4026d3604dcd06a8f7061a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGC4IFBT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIF06LPfnJy2zJWuKZi4NgYZyr1Iylb2ZhcR7r8dvV9mUAiEA%2BygCarIuLLqaMljcERlTWv7h5WhJcI0yFO1xVCKVAP4q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDGGu%2FYuxxqgKI50AkCrcA%2BMHTJJxyBJsHjaWS70A1KTLRUwJLmDqFfpWsz2kPMwJNaejSB0wge31llUsNa1E0NXodubPVak7BGPravUHmtpfU05liisxFqyJSr6NVuGFj5uuU4uEr6SQz88XuTqpbCclxCj3vJN9uFD3GU7xc08TJcFihJHH5EfNNOa5i6Um1qGbGHPlVpFLzzlPRXAWNX1x%2Fz%2Bq3Tt3LSoVyyW9Vxr7NhEeYugT3e7dGkapw%2FQpaxDxY9lpnvMCWaMd9AJlL00n%2BpJeRz0WdcvfunrDrtOeRLZXwzyNPdRIsDsTe%2FoZSr6voeO8de0SIS7FQFjlalxsQS0ORIYulh%2BxUSiFab4Y95%2BMu15scISH45orKmd3b528KvgJ8aZxjv1u%2FxTEYe5j4%2BrjH%2Bv3sDHUvKfoD9tG6d8SET4%2FgeBqCyiAnnxl22ZXMcOq6VpGKeAOG1z22GbxFSlrLjn8Zn7H8dl8zN5VOw%2BFp1Y7jrHcqevroA0Sxjj1vSHJ8%2BwTSC2fcYsvH%2BeCxxHMheNeR%2FPpLRywEoxvaYHFIAJPZvNVjeOBZz667Yw4qEr9W%2F6WGFzy12GpU1l8CQvUo3DbLaBW0RvNCNj9l6lZWU6HoaxXfBN8wDtFkRdH5OoBkWXXbm%2BTMJvAxMQGOqUBVsQiHTANfaHB%2Ba6Dtw%2BcZV0Bj0WB8Gj3gTd4UucwI9PIhlScovinJ8u0M1Fr0jy18I%2FYlus6jx9LWVMdrpxoFTSxjTX5nKU7vYIjiLHUmtpEsssdfdk9tt3LYhf3xFpDA5NgtlRMUy4W%2BBv%2B%2FiKTxSjB%2F1I5GBiju5BFHDcgnQIWveTZJR0n2DXLX1j7R1g2085Z9TwlYR0fPod2M4SUAN828W4w&X-Amz-Signature=3bbb473b900a2154b4247b1f47e1887a5df38030865f61cd362f02965b865a93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGC4IFBT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIF06LPfnJy2zJWuKZi4NgYZyr1Iylb2ZhcR7r8dvV9mUAiEA%2BygCarIuLLqaMljcERlTWv7h5WhJcI0yFO1xVCKVAP4q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDGGu%2FYuxxqgKI50AkCrcA%2BMHTJJxyBJsHjaWS70A1KTLRUwJLmDqFfpWsz2kPMwJNaejSB0wge31llUsNa1E0NXodubPVak7BGPravUHmtpfU05liisxFqyJSr6NVuGFj5uuU4uEr6SQz88XuTqpbCclxCj3vJN9uFD3GU7xc08TJcFihJHH5EfNNOa5i6Um1qGbGHPlVpFLzzlPRXAWNX1x%2Fz%2Bq3Tt3LSoVyyW9Vxr7NhEeYugT3e7dGkapw%2FQpaxDxY9lpnvMCWaMd9AJlL00n%2BpJeRz0WdcvfunrDrtOeRLZXwzyNPdRIsDsTe%2FoZSr6voeO8de0SIS7FQFjlalxsQS0ORIYulh%2BxUSiFab4Y95%2BMu15scISH45orKmd3b528KvgJ8aZxjv1u%2FxTEYe5j4%2BrjH%2Bv3sDHUvKfoD9tG6d8SET4%2FgeBqCyiAnnxl22ZXMcOq6VpGKeAOG1z22GbxFSlrLjn8Zn7H8dl8zN5VOw%2BFp1Y7jrHcqevroA0Sxjj1vSHJ8%2BwTSC2fcYsvH%2BeCxxHMheNeR%2FPpLRywEoxvaYHFIAJPZvNVjeOBZz667Yw4qEr9W%2F6WGFzy12GpU1l8CQvUo3DbLaBW0RvNCNj9l6lZWU6HoaxXfBN8wDtFkRdH5OoBkWXXbm%2BTMJvAxMQGOqUBVsQiHTANfaHB%2Ba6Dtw%2BcZV0Bj0WB8Gj3gTd4UucwI9PIhlScovinJ8u0M1Fr0jy18I%2FYlus6jx9LWVMdrpxoFTSxjTX5nKU7vYIjiLHUmtpEsssdfdk9tt3LYhf3xFpDA5NgtlRMUy4W%2BBv%2B%2FiKTxSjB%2F1I5GBiju5BFHDcgnQIWveTZJR0n2DXLX1j7R1g2085Z9TwlYR0fPod2M4SUAN828W4w&X-Amz-Signature=4c9fc87bf73502a1f0754fd4cf071ae870030137e5b4b763ec3b8ae2c9fa172d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGC4IFBT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIF06LPfnJy2zJWuKZi4NgYZyr1Iylb2ZhcR7r8dvV9mUAiEA%2BygCarIuLLqaMljcERlTWv7h5WhJcI0yFO1xVCKVAP4q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDGGu%2FYuxxqgKI50AkCrcA%2BMHTJJxyBJsHjaWS70A1KTLRUwJLmDqFfpWsz2kPMwJNaejSB0wge31llUsNa1E0NXodubPVak7BGPravUHmtpfU05liisxFqyJSr6NVuGFj5uuU4uEr6SQz88XuTqpbCclxCj3vJN9uFD3GU7xc08TJcFihJHH5EfNNOa5i6Um1qGbGHPlVpFLzzlPRXAWNX1x%2Fz%2Bq3Tt3LSoVyyW9Vxr7NhEeYugT3e7dGkapw%2FQpaxDxY9lpnvMCWaMd9AJlL00n%2BpJeRz0WdcvfunrDrtOeRLZXwzyNPdRIsDsTe%2FoZSr6voeO8de0SIS7FQFjlalxsQS0ORIYulh%2BxUSiFab4Y95%2BMu15scISH45orKmd3b528KvgJ8aZxjv1u%2FxTEYe5j4%2BrjH%2Bv3sDHUvKfoD9tG6d8SET4%2FgeBqCyiAnnxl22ZXMcOq6VpGKeAOG1z22GbxFSlrLjn8Zn7H8dl8zN5VOw%2BFp1Y7jrHcqevroA0Sxjj1vSHJ8%2BwTSC2fcYsvH%2BeCxxHMheNeR%2FPpLRywEoxvaYHFIAJPZvNVjeOBZz667Yw4qEr9W%2F6WGFzy12GpU1l8CQvUo3DbLaBW0RvNCNj9l6lZWU6HoaxXfBN8wDtFkRdH5OoBkWXXbm%2BTMJvAxMQGOqUBVsQiHTANfaHB%2Ba6Dtw%2BcZV0Bj0WB8Gj3gTd4UucwI9PIhlScovinJ8u0M1Fr0jy18I%2FYlus6jx9LWVMdrpxoFTSxjTX5nKU7vYIjiLHUmtpEsssdfdk9tt3LYhf3xFpDA5NgtlRMUy4W%2BBv%2B%2FiKTxSjB%2F1I5GBiju5BFHDcgnQIWveTZJR0n2DXLX1j7R1g2085Z9TwlYR0fPod2M4SUAN828W4w&X-Amz-Signature=d5ee13eccaa4e2142932135629321d325baf91163d4a5dcbe92e1c1823d27b94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGC4IFBT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIF06LPfnJy2zJWuKZi4NgYZyr1Iylb2ZhcR7r8dvV9mUAiEA%2BygCarIuLLqaMljcERlTWv7h5WhJcI0yFO1xVCKVAP4q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDGGu%2FYuxxqgKI50AkCrcA%2BMHTJJxyBJsHjaWS70A1KTLRUwJLmDqFfpWsz2kPMwJNaejSB0wge31llUsNa1E0NXodubPVak7BGPravUHmtpfU05liisxFqyJSr6NVuGFj5uuU4uEr6SQz88XuTqpbCclxCj3vJN9uFD3GU7xc08TJcFihJHH5EfNNOa5i6Um1qGbGHPlVpFLzzlPRXAWNX1x%2Fz%2Bq3Tt3LSoVyyW9Vxr7NhEeYugT3e7dGkapw%2FQpaxDxY9lpnvMCWaMd9AJlL00n%2BpJeRz0WdcvfunrDrtOeRLZXwzyNPdRIsDsTe%2FoZSr6voeO8de0SIS7FQFjlalxsQS0ORIYulh%2BxUSiFab4Y95%2BMu15scISH45orKmd3b528KvgJ8aZxjv1u%2FxTEYe5j4%2BrjH%2Bv3sDHUvKfoD9tG6d8SET4%2FgeBqCyiAnnxl22ZXMcOq6VpGKeAOG1z22GbxFSlrLjn8Zn7H8dl8zN5VOw%2BFp1Y7jrHcqevroA0Sxjj1vSHJ8%2BwTSC2fcYsvH%2BeCxxHMheNeR%2FPpLRywEoxvaYHFIAJPZvNVjeOBZz667Yw4qEr9W%2F6WGFzy12GpU1l8CQvUo3DbLaBW0RvNCNj9l6lZWU6HoaxXfBN8wDtFkRdH5OoBkWXXbm%2BTMJvAxMQGOqUBVsQiHTANfaHB%2Ba6Dtw%2BcZV0Bj0WB8Gj3gTd4UucwI9PIhlScovinJ8u0M1Fr0jy18I%2FYlus6jx9LWVMdrpxoFTSxjTX5nKU7vYIjiLHUmtpEsssdfdk9tt3LYhf3xFpDA5NgtlRMUy4W%2BBv%2B%2FiKTxSjB%2F1I5GBiju5BFHDcgnQIWveTZJR0n2DXLX1j7R1g2085Z9TwlYR0fPod2M4SUAN828W4w&X-Amz-Signature=31f38145c67629d7ec49237222db953209187bab34d5a07f4d3aa86da81f787d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGC4IFBT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIF06LPfnJy2zJWuKZi4NgYZyr1Iylb2ZhcR7r8dvV9mUAiEA%2BygCarIuLLqaMljcERlTWv7h5WhJcI0yFO1xVCKVAP4q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDGGu%2FYuxxqgKI50AkCrcA%2BMHTJJxyBJsHjaWS70A1KTLRUwJLmDqFfpWsz2kPMwJNaejSB0wge31llUsNa1E0NXodubPVak7BGPravUHmtpfU05liisxFqyJSr6NVuGFj5uuU4uEr6SQz88XuTqpbCclxCj3vJN9uFD3GU7xc08TJcFihJHH5EfNNOa5i6Um1qGbGHPlVpFLzzlPRXAWNX1x%2Fz%2Bq3Tt3LSoVyyW9Vxr7NhEeYugT3e7dGkapw%2FQpaxDxY9lpnvMCWaMd9AJlL00n%2BpJeRz0WdcvfunrDrtOeRLZXwzyNPdRIsDsTe%2FoZSr6voeO8de0SIS7FQFjlalxsQS0ORIYulh%2BxUSiFab4Y95%2BMu15scISH45orKmd3b528KvgJ8aZxjv1u%2FxTEYe5j4%2BrjH%2Bv3sDHUvKfoD9tG6d8SET4%2FgeBqCyiAnnxl22ZXMcOq6VpGKeAOG1z22GbxFSlrLjn8Zn7H8dl8zN5VOw%2BFp1Y7jrHcqevroA0Sxjj1vSHJ8%2BwTSC2fcYsvH%2BeCxxHMheNeR%2FPpLRywEoxvaYHFIAJPZvNVjeOBZz667Yw4qEr9W%2F6WGFzy12GpU1l8CQvUo3DbLaBW0RvNCNj9l6lZWU6HoaxXfBN8wDtFkRdH5OoBkWXXbm%2BTMJvAxMQGOqUBVsQiHTANfaHB%2Ba6Dtw%2BcZV0Bj0WB8Gj3gTd4UucwI9PIhlScovinJ8u0M1Fr0jy18I%2FYlus6jx9LWVMdrpxoFTSxjTX5nKU7vYIjiLHUmtpEsssdfdk9tt3LYhf3xFpDA5NgtlRMUy4W%2BBv%2B%2FiKTxSjB%2F1I5GBiju5BFHDcgnQIWveTZJR0n2DXLX1j7R1g2085Z9TwlYR0fPod2M4SUAN828W4w&X-Amz-Signature=6a5bb0805736da152891e56b2d8f7ffa44bdd38b7055c89856c77640481d9b6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGC4IFBT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIF06LPfnJy2zJWuKZi4NgYZyr1Iylb2ZhcR7r8dvV9mUAiEA%2BygCarIuLLqaMljcERlTWv7h5WhJcI0yFO1xVCKVAP4q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDGGu%2FYuxxqgKI50AkCrcA%2BMHTJJxyBJsHjaWS70A1KTLRUwJLmDqFfpWsz2kPMwJNaejSB0wge31llUsNa1E0NXodubPVak7BGPravUHmtpfU05liisxFqyJSr6NVuGFj5uuU4uEr6SQz88XuTqpbCclxCj3vJN9uFD3GU7xc08TJcFihJHH5EfNNOa5i6Um1qGbGHPlVpFLzzlPRXAWNX1x%2Fz%2Bq3Tt3LSoVyyW9Vxr7NhEeYugT3e7dGkapw%2FQpaxDxY9lpnvMCWaMd9AJlL00n%2BpJeRz0WdcvfunrDrtOeRLZXwzyNPdRIsDsTe%2FoZSr6voeO8de0SIS7FQFjlalxsQS0ORIYulh%2BxUSiFab4Y95%2BMu15scISH45orKmd3b528KvgJ8aZxjv1u%2FxTEYe5j4%2BrjH%2Bv3sDHUvKfoD9tG6d8SET4%2FgeBqCyiAnnxl22ZXMcOq6VpGKeAOG1z22GbxFSlrLjn8Zn7H8dl8zN5VOw%2BFp1Y7jrHcqevroA0Sxjj1vSHJ8%2BwTSC2fcYsvH%2BeCxxHMheNeR%2FPpLRywEoxvaYHFIAJPZvNVjeOBZz667Yw4qEr9W%2F6WGFzy12GpU1l8CQvUo3DbLaBW0RvNCNj9l6lZWU6HoaxXfBN8wDtFkRdH5OoBkWXXbm%2BTMJvAxMQGOqUBVsQiHTANfaHB%2Ba6Dtw%2BcZV0Bj0WB8Gj3gTd4UucwI9PIhlScovinJ8u0M1Fr0jy18I%2FYlus6jx9LWVMdrpxoFTSxjTX5nKU7vYIjiLHUmtpEsssdfdk9tt3LYhf3xFpDA5NgtlRMUy4W%2BBv%2B%2FiKTxSjB%2F1I5GBiju5BFHDcgnQIWveTZJR0n2DXLX1j7R1g2085Z9TwlYR0fPod2M4SUAN828W4w&X-Amz-Signature=d4cdce3a173ee1a2d597db427814ab7f3f8642b44ba344229b560056064e89e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGC4IFBT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T210950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIF06LPfnJy2zJWuKZi4NgYZyr1Iylb2ZhcR7r8dvV9mUAiEA%2BygCarIuLLqaMljcERlTWv7h5WhJcI0yFO1xVCKVAP4q%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDGGu%2FYuxxqgKI50AkCrcA%2BMHTJJxyBJsHjaWS70A1KTLRUwJLmDqFfpWsz2kPMwJNaejSB0wge31llUsNa1E0NXodubPVak7BGPravUHmtpfU05liisxFqyJSr6NVuGFj5uuU4uEr6SQz88XuTqpbCclxCj3vJN9uFD3GU7xc08TJcFihJHH5EfNNOa5i6Um1qGbGHPlVpFLzzlPRXAWNX1x%2Fz%2Bq3Tt3LSoVyyW9Vxr7NhEeYugT3e7dGkapw%2FQpaxDxY9lpnvMCWaMd9AJlL00n%2BpJeRz0WdcvfunrDrtOeRLZXwzyNPdRIsDsTe%2FoZSr6voeO8de0SIS7FQFjlalxsQS0ORIYulh%2BxUSiFab4Y95%2BMu15scISH45orKmd3b528KvgJ8aZxjv1u%2FxTEYe5j4%2BrjH%2Bv3sDHUvKfoD9tG6d8SET4%2FgeBqCyiAnnxl22ZXMcOq6VpGKeAOG1z22GbxFSlrLjn8Zn7H8dl8zN5VOw%2BFp1Y7jrHcqevroA0Sxjj1vSHJ8%2BwTSC2fcYsvH%2BeCxxHMheNeR%2FPpLRywEoxvaYHFIAJPZvNVjeOBZz667Yw4qEr9W%2F6WGFzy12GpU1l8CQvUo3DbLaBW0RvNCNj9l6lZWU6HoaxXfBN8wDtFkRdH5OoBkWXXbm%2BTMJvAxMQGOqUBVsQiHTANfaHB%2Ba6Dtw%2BcZV0Bj0WB8Gj3gTd4UucwI9PIhlScovinJ8u0M1Fr0jy18I%2FYlus6jx9LWVMdrpxoFTSxjTX5nKU7vYIjiLHUmtpEsssdfdk9tt3LYhf3xFpDA5NgtlRMUy4W%2BBv%2B%2FiKTxSjB%2F1I5GBiju5BFHDcgnQIWveTZJR0n2DXLX1j7R1g2085Z9TwlYR0fPod2M4SUAN828W4w&X-Amz-Signature=a8bd36fb27f113f36265af119332dd4bf2b3f4b3a35097035de40bf4ce1eaacf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
