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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHW2RWR4%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCg%2Bs5%2FO9QU8okbh072l7olCvIo%2F9XsVm9E7fU5L3emRAIgEiA2wX4VmVUFhGOEfsHLjMzzOlGfPW3w7JnHJxRieJIq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFR8M9Whnp4Yess54ircA%2BL2fhJc2B24KLCUQTCOshHMFPoS6jpiASnE84qVqLqf2qD24mnj4nEA%2BgHys6KV2nJbQJzjSCc8leySJ3vvUjWmXU%2FUJy%2BgPFhtpH0CDFZyW2zBNUC6CedTk6pKE0Mm9%2BGjYRwXKoANWztuhXawLpy5v3yqj2yaW2IIRO7DxBqztnDiZJY454RU5crQHlzDLqec6aEcIx1UdEnzBVyED981CbEi5%2BLQq48fa1dMqupfVO29koAujw4oidBxERmZOkZk5Mpn5Aj9UCIl2WGcBZp4tejRujIzB7kkmdGaFqu68bxWGIjF1XLDUDPSvtTR4xd9mowC73XGn4s7CvAcw1TczP9Gb5leyp5YiHhQ09BtP9RobmRtJOcefixCijDCE4Iay%2Bawx8PWH628Gcu7m3LqO5eqk3Y%2Fr56ifUoiWRD0uHjPrLAJFhah4tGSzQ3XdjsQXf5D%2FF9C%2BMRXijkgFreLqOvHlHjk7IK1iUEStkYEHT5RT8RpHPG5ioXUTdxaX%2FhcgI9KEnH9Y%2B3KUD%2Bgiu%2FDRmpsBRcAbY9eFdeU0ySHMht4vBYcZc0DWcBBNAjKD3UaGYuYEh%2FAhgkSmGBy%2FY4QnNsMfufWc334qOPbw7vaLZm6c5latejWrMvRMLO2wcQGOqUB%2FUl9krKfhEdwPC82i3HIrD3jiL5HiCOzujPhWjm8DMc7B7eQUzdI8wg8%2Bn31rx5SJgekINALfl%2FlWIgOJmjFGvDoCpTwHFiDcr7kAZ%2BgT0sV1vQgkCCs%2BGabQcow79%2FhID%2BOdKigLjuTmSOSOO3I9m8D2bAovlfW3Knei4icFRk4QfRnGNzKCQ5OKymmBG583JYwGX09OyfNI1N13EDf8%2BjqJFVL&X-Amz-Signature=9a4f2db5d39752c1e7d5b801fb8c8cabe24cc8edab8f5c6b99d0001358aaffe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHW2RWR4%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCg%2Bs5%2FO9QU8okbh072l7olCvIo%2F9XsVm9E7fU5L3emRAIgEiA2wX4VmVUFhGOEfsHLjMzzOlGfPW3w7JnHJxRieJIq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFR8M9Whnp4Yess54ircA%2BL2fhJc2B24KLCUQTCOshHMFPoS6jpiASnE84qVqLqf2qD24mnj4nEA%2BgHys6KV2nJbQJzjSCc8leySJ3vvUjWmXU%2FUJy%2BgPFhtpH0CDFZyW2zBNUC6CedTk6pKE0Mm9%2BGjYRwXKoANWztuhXawLpy5v3yqj2yaW2IIRO7DxBqztnDiZJY454RU5crQHlzDLqec6aEcIx1UdEnzBVyED981CbEi5%2BLQq48fa1dMqupfVO29koAujw4oidBxERmZOkZk5Mpn5Aj9UCIl2WGcBZp4tejRujIzB7kkmdGaFqu68bxWGIjF1XLDUDPSvtTR4xd9mowC73XGn4s7CvAcw1TczP9Gb5leyp5YiHhQ09BtP9RobmRtJOcefixCijDCE4Iay%2Bawx8PWH628Gcu7m3LqO5eqk3Y%2Fr56ifUoiWRD0uHjPrLAJFhah4tGSzQ3XdjsQXf5D%2FF9C%2BMRXijkgFreLqOvHlHjk7IK1iUEStkYEHT5RT8RpHPG5ioXUTdxaX%2FhcgI9KEnH9Y%2B3KUD%2Bgiu%2FDRmpsBRcAbY9eFdeU0ySHMht4vBYcZc0DWcBBNAjKD3UaGYuYEh%2FAhgkSmGBy%2FY4QnNsMfufWc334qOPbw7vaLZm6c5latejWrMvRMLO2wcQGOqUB%2FUl9krKfhEdwPC82i3HIrD3jiL5HiCOzujPhWjm8DMc7B7eQUzdI8wg8%2Bn31rx5SJgekINALfl%2FlWIgOJmjFGvDoCpTwHFiDcr7kAZ%2BgT0sV1vQgkCCs%2BGabQcow79%2FhID%2BOdKigLjuTmSOSOO3I9m8D2bAovlfW3Knei4icFRk4QfRnGNzKCQ5OKymmBG583JYwGX09OyfNI1N13EDf8%2BjqJFVL&X-Amz-Signature=4c9d1c6cc42ec8349d0b9dd1d39b8005ee379c8190bf5d5799cf76570a3a8802&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHW2RWR4%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCg%2Bs5%2FO9QU8okbh072l7olCvIo%2F9XsVm9E7fU5L3emRAIgEiA2wX4VmVUFhGOEfsHLjMzzOlGfPW3w7JnHJxRieJIq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFR8M9Whnp4Yess54ircA%2BL2fhJc2B24KLCUQTCOshHMFPoS6jpiASnE84qVqLqf2qD24mnj4nEA%2BgHys6KV2nJbQJzjSCc8leySJ3vvUjWmXU%2FUJy%2BgPFhtpH0CDFZyW2zBNUC6CedTk6pKE0Mm9%2BGjYRwXKoANWztuhXawLpy5v3yqj2yaW2IIRO7DxBqztnDiZJY454RU5crQHlzDLqec6aEcIx1UdEnzBVyED981CbEi5%2BLQq48fa1dMqupfVO29koAujw4oidBxERmZOkZk5Mpn5Aj9UCIl2WGcBZp4tejRujIzB7kkmdGaFqu68bxWGIjF1XLDUDPSvtTR4xd9mowC73XGn4s7CvAcw1TczP9Gb5leyp5YiHhQ09BtP9RobmRtJOcefixCijDCE4Iay%2Bawx8PWH628Gcu7m3LqO5eqk3Y%2Fr56ifUoiWRD0uHjPrLAJFhah4tGSzQ3XdjsQXf5D%2FF9C%2BMRXijkgFreLqOvHlHjk7IK1iUEStkYEHT5RT8RpHPG5ioXUTdxaX%2FhcgI9KEnH9Y%2B3KUD%2Bgiu%2FDRmpsBRcAbY9eFdeU0ySHMht4vBYcZc0DWcBBNAjKD3UaGYuYEh%2FAhgkSmGBy%2FY4QnNsMfufWc334qOPbw7vaLZm6c5latejWrMvRMLO2wcQGOqUB%2FUl9krKfhEdwPC82i3HIrD3jiL5HiCOzujPhWjm8DMc7B7eQUzdI8wg8%2Bn31rx5SJgekINALfl%2FlWIgOJmjFGvDoCpTwHFiDcr7kAZ%2BgT0sV1vQgkCCs%2BGabQcow79%2FhID%2BOdKigLjuTmSOSOO3I9m8D2bAovlfW3Knei4icFRk4QfRnGNzKCQ5OKymmBG583JYwGX09OyfNI1N13EDf8%2BjqJFVL&X-Amz-Signature=343b396b5d403593dabb78600b727c6790412ff794b7a078af474c97c58f9b53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHW2RWR4%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCg%2Bs5%2FO9QU8okbh072l7olCvIo%2F9XsVm9E7fU5L3emRAIgEiA2wX4VmVUFhGOEfsHLjMzzOlGfPW3w7JnHJxRieJIq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFR8M9Whnp4Yess54ircA%2BL2fhJc2B24KLCUQTCOshHMFPoS6jpiASnE84qVqLqf2qD24mnj4nEA%2BgHys6KV2nJbQJzjSCc8leySJ3vvUjWmXU%2FUJy%2BgPFhtpH0CDFZyW2zBNUC6CedTk6pKE0Mm9%2BGjYRwXKoANWztuhXawLpy5v3yqj2yaW2IIRO7DxBqztnDiZJY454RU5crQHlzDLqec6aEcIx1UdEnzBVyED981CbEi5%2BLQq48fa1dMqupfVO29koAujw4oidBxERmZOkZk5Mpn5Aj9UCIl2WGcBZp4tejRujIzB7kkmdGaFqu68bxWGIjF1XLDUDPSvtTR4xd9mowC73XGn4s7CvAcw1TczP9Gb5leyp5YiHhQ09BtP9RobmRtJOcefixCijDCE4Iay%2Bawx8PWH628Gcu7m3LqO5eqk3Y%2Fr56ifUoiWRD0uHjPrLAJFhah4tGSzQ3XdjsQXf5D%2FF9C%2BMRXijkgFreLqOvHlHjk7IK1iUEStkYEHT5RT8RpHPG5ioXUTdxaX%2FhcgI9KEnH9Y%2B3KUD%2Bgiu%2FDRmpsBRcAbY9eFdeU0ySHMht4vBYcZc0DWcBBNAjKD3UaGYuYEh%2FAhgkSmGBy%2FY4QnNsMfufWc334qOPbw7vaLZm6c5latejWrMvRMLO2wcQGOqUB%2FUl9krKfhEdwPC82i3HIrD3jiL5HiCOzujPhWjm8DMc7B7eQUzdI8wg8%2Bn31rx5SJgekINALfl%2FlWIgOJmjFGvDoCpTwHFiDcr7kAZ%2BgT0sV1vQgkCCs%2BGabQcow79%2FhID%2BOdKigLjuTmSOSOO3I9m8D2bAovlfW3Knei4icFRk4QfRnGNzKCQ5OKymmBG583JYwGX09OyfNI1N13EDf8%2BjqJFVL&X-Amz-Signature=d41d646eee066afffa12e98251d5f158bd953eaba3daf6f5bb6114e771e5c8ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHW2RWR4%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCg%2Bs5%2FO9QU8okbh072l7olCvIo%2F9XsVm9E7fU5L3emRAIgEiA2wX4VmVUFhGOEfsHLjMzzOlGfPW3w7JnHJxRieJIq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFR8M9Whnp4Yess54ircA%2BL2fhJc2B24KLCUQTCOshHMFPoS6jpiASnE84qVqLqf2qD24mnj4nEA%2BgHys6KV2nJbQJzjSCc8leySJ3vvUjWmXU%2FUJy%2BgPFhtpH0CDFZyW2zBNUC6CedTk6pKE0Mm9%2BGjYRwXKoANWztuhXawLpy5v3yqj2yaW2IIRO7DxBqztnDiZJY454RU5crQHlzDLqec6aEcIx1UdEnzBVyED981CbEi5%2BLQq48fa1dMqupfVO29koAujw4oidBxERmZOkZk5Mpn5Aj9UCIl2WGcBZp4tejRujIzB7kkmdGaFqu68bxWGIjF1XLDUDPSvtTR4xd9mowC73XGn4s7CvAcw1TczP9Gb5leyp5YiHhQ09BtP9RobmRtJOcefixCijDCE4Iay%2Bawx8PWH628Gcu7m3LqO5eqk3Y%2Fr56ifUoiWRD0uHjPrLAJFhah4tGSzQ3XdjsQXf5D%2FF9C%2BMRXijkgFreLqOvHlHjk7IK1iUEStkYEHT5RT8RpHPG5ioXUTdxaX%2FhcgI9KEnH9Y%2B3KUD%2Bgiu%2FDRmpsBRcAbY9eFdeU0ySHMht4vBYcZc0DWcBBNAjKD3UaGYuYEh%2FAhgkSmGBy%2FY4QnNsMfufWc334qOPbw7vaLZm6c5latejWrMvRMLO2wcQGOqUB%2FUl9krKfhEdwPC82i3HIrD3jiL5HiCOzujPhWjm8DMc7B7eQUzdI8wg8%2Bn31rx5SJgekINALfl%2FlWIgOJmjFGvDoCpTwHFiDcr7kAZ%2BgT0sV1vQgkCCs%2BGabQcow79%2FhID%2BOdKigLjuTmSOSOO3I9m8D2bAovlfW3Knei4icFRk4QfRnGNzKCQ5OKymmBG583JYwGX09OyfNI1N13EDf8%2BjqJFVL&X-Amz-Signature=53f782942cf2656f1ec5b27f7ed6e97b47622c835d2fc088fa0c2bae2f820f73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHW2RWR4%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCg%2Bs5%2FO9QU8okbh072l7olCvIo%2F9XsVm9E7fU5L3emRAIgEiA2wX4VmVUFhGOEfsHLjMzzOlGfPW3w7JnHJxRieJIq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFR8M9Whnp4Yess54ircA%2BL2fhJc2B24KLCUQTCOshHMFPoS6jpiASnE84qVqLqf2qD24mnj4nEA%2BgHys6KV2nJbQJzjSCc8leySJ3vvUjWmXU%2FUJy%2BgPFhtpH0CDFZyW2zBNUC6CedTk6pKE0Mm9%2BGjYRwXKoANWztuhXawLpy5v3yqj2yaW2IIRO7DxBqztnDiZJY454RU5crQHlzDLqec6aEcIx1UdEnzBVyED981CbEi5%2BLQq48fa1dMqupfVO29koAujw4oidBxERmZOkZk5Mpn5Aj9UCIl2WGcBZp4tejRujIzB7kkmdGaFqu68bxWGIjF1XLDUDPSvtTR4xd9mowC73XGn4s7CvAcw1TczP9Gb5leyp5YiHhQ09BtP9RobmRtJOcefixCijDCE4Iay%2Bawx8PWH628Gcu7m3LqO5eqk3Y%2Fr56ifUoiWRD0uHjPrLAJFhah4tGSzQ3XdjsQXf5D%2FF9C%2BMRXijkgFreLqOvHlHjk7IK1iUEStkYEHT5RT8RpHPG5ioXUTdxaX%2FhcgI9KEnH9Y%2B3KUD%2Bgiu%2FDRmpsBRcAbY9eFdeU0ySHMht4vBYcZc0DWcBBNAjKD3UaGYuYEh%2FAhgkSmGBy%2FY4QnNsMfufWc334qOPbw7vaLZm6c5latejWrMvRMLO2wcQGOqUB%2FUl9krKfhEdwPC82i3HIrD3jiL5HiCOzujPhWjm8DMc7B7eQUzdI8wg8%2Bn31rx5SJgekINALfl%2FlWIgOJmjFGvDoCpTwHFiDcr7kAZ%2BgT0sV1vQgkCCs%2BGabQcow79%2FhID%2BOdKigLjuTmSOSOO3I9m8D2bAovlfW3Knei4icFRk4QfRnGNzKCQ5OKymmBG583JYwGX09OyfNI1N13EDf8%2BjqJFVL&X-Amz-Signature=073c19b28722fc2825980ffe67beca4452627d3bc9eb8f085aaf8d22d772911a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHW2RWR4%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCg%2Bs5%2FO9QU8okbh072l7olCvIo%2F9XsVm9E7fU5L3emRAIgEiA2wX4VmVUFhGOEfsHLjMzzOlGfPW3w7JnHJxRieJIq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFR8M9Whnp4Yess54ircA%2BL2fhJc2B24KLCUQTCOshHMFPoS6jpiASnE84qVqLqf2qD24mnj4nEA%2BgHys6KV2nJbQJzjSCc8leySJ3vvUjWmXU%2FUJy%2BgPFhtpH0CDFZyW2zBNUC6CedTk6pKE0Mm9%2BGjYRwXKoANWztuhXawLpy5v3yqj2yaW2IIRO7DxBqztnDiZJY454RU5crQHlzDLqec6aEcIx1UdEnzBVyED981CbEi5%2BLQq48fa1dMqupfVO29koAujw4oidBxERmZOkZk5Mpn5Aj9UCIl2WGcBZp4tejRujIzB7kkmdGaFqu68bxWGIjF1XLDUDPSvtTR4xd9mowC73XGn4s7CvAcw1TczP9Gb5leyp5YiHhQ09BtP9RobmRtJOcefixCijDCE4Iay%2Bawx8PWH628Gcu7m3LqO5eqk3Y%2Fr56ifUoiWRD0uHjPrLAJFhah4tGSzQ3XdjsQXf5D%2FF9C%2BMRXijkgFreLqOvHlHjk7IK1iUEStkYEHT5RT8RpHPG5ioXUTdxaX%2FhcgI9KEnH9Y%2B3KUD%2Bgiu%2FDRmpsBRcAbY9eFdeU0ySHMht4vBYcZc0DWcBBNAjKD3UaGYuYEh%2FAhgkSmGBy%2FY4QnNsMfufWc334qOPbw7vaLZm6c5latejWrMvRMLO2wcQGOqUB%2FUl9krKfhEdwPC82i3HIrD3jiL5HiCOzujPhWjm8DMc7B7eQUzdI8wg8%2Bn31rx5SJgekINALfl%2FlWIgOJmjFGvDoCpTwHFiDcr7kAZ%2BgT0sV1vQgkCCs%2BGabQcow79%2FhID%2BOdKigLjuTmSOSOO3I9m8D2bAovlfW3Knei4icFRk4QfRnGNzKCQ5OKymmBG583JYwGX09OyfNI1N13EDf8%2BjqJFVL&X-Amz-Signature=49a49f27cd9e4a2362b5ca00bf6ffc56b613d12a05d04325adc232a9f513ae8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHW2RWR4%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCg%2Bs5%2FO9QU8okbh072l7olCvIo%2F9XsVm9E7fU5L3emRAIgEiA2wX4VmVUFhGOEfsHLjMzzOlGfPW3w7JnHJxRieJIq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFR8M9Whnp4Yess54ircA%2BL2fhJc2B24KLCUQTCOshHMFPoS6jpiASnE84qVqLqf2qD24mnj4nEA%2BgHys6KV2nJbQJzjSCc8leySJ3vvUjWmXU%2FUJy%2BgPFhtpH0CDFZyW2zBNUC6CedTk6pKE0Mm9%2BGjYRwXKoANWztuhXawLpy5v3yqj2yaW2IIRO7DxBqztnDiZJY454RU5crQHlzDLqec6aEcIx1UdEnzBVyED981CbEi5%2BLQq48fa1dMqupfVO29koAujw4oidBxERmZOkZk5Mpn5Aj9UCIl2WGcBZp4tejRujIzB7kkmdGaFqu68bxWGIjF1XLDUDPSvtTR4xd9mowC73XGn4s7CvAcw1TczP9Gb5leyp5YiHhQ09BtP9RobmRtJOcefixCijDCE4Iay%2Bawx8PWH628Gcu7m3LqO5eqk3Y%2Fr56ifUoiWRD0uHjPrLAJFhah4tGSzQ3XdjsQXf5D%2FF9C%2BMRXijkgFreLqOvHlHjk7IK1iUEStkYEHT5RT8RpHPG5ioXUTdxaX%2FhcgI9KEnH9Y%2B3KUD%2Bgiu%2FDRmpsBRcAbY9eFdeU0ySHMht4vBYcZc0DWcBBNAjKD3UaGYuYEh%2FAhgkSmGBy%2FY4QnNsMfufWc334qOPbw7vaLZm6c5latejWrMvRMLO2wcQGOqUB%2FUl9krKfhEdwPC82i3HIrD3jiL5HiCOzujPhWjm8DMc7B7eQUzdI8wg8%2Bn31rx5SJgekINALfl%2FlWIgOJmjFGvDoCpTwHFiDcr7kAZ%2BgT0sV1vQgkCCs%2BGabQcow79%2FhID%2BOdKigLjuTmSOSOO3I9m8D2bAovlfW3Knei4icFRk4QfRnGNzKCQ5OKymmBG583JYwGX09OyfNI1N13EDf8%2BjqJFVL&X-Amz-Signature=7a1e36908ede452e244b88a3cd8dd383219bcbcc877028ab46c8d330dff5703a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHW2RWR4%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCg%2Bs5%2FO9QU8okbh072l7olCvIo%2F9XsVm9E7fU5L3emRAIgEiA2wX4VmVUFhGOEfsHLjMzzOlGfPW3w7JnHJxRieJIq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFR8M9Whnp4Yess54ircA%2BL2fhJc2B24KLCUQTCOshHMFPoS6jpiASnE84qVqLqf2qD24mnj4nEA%2BgHys6KV2nJbQJzjSCc8leySJ3vvUjWmXU%2FUJy%2BgPFhtpH0CDFZyW2zBNUC6CedTk6pKE0Mm9%2BGjYRwXKoANWztuhXawLpy5v3yqj2yaW2IIRO7DxBqztnDiZJY454RU5crQHlzDLqec6aEcIx1UdEnzBVyED981CbEi5%2BLQq48fa1dMqupfVO29koAujw4oidBxERmZOkZk5Mpn5Aj9UCIl2WGcBZp4tejRujIzB7kkmdGaFqu68bxWGIjF1XLDUDPSvtTR4xd9mowC73XGn4s7CvAcw1TczP9Gb5leyp5YiHhQ09BtP9RobmRtJOcefixCijDCE4Iay%2Bawx8PWH628Gcu7m3LqO5eqk3Y%2Fr56ifUoiWRD0uHjPrLAJFhah4tGSzQ3XdjsQXf5D%2FF9C%2BMRXijkgFreLqOvHlHjk7IK1iUEStkYEHT5RT8RpHPG5ioXUTdxaX%2FhcgI9KEnH9Y%2B3KUD%2Bgiu%2FDRmpsBRcAbY9eFdeU0ySHMht4vBYcZc0DWcBBNAjKD3UaGYuYEh%2FAhgkSmGBy%2FY4QnNsMfufWc334qOPbw7vaLZm6c5latejWrMvRMLO2wcQGOqUB%2FUl9krKfhEdwPC82i3HIrD3jiL5HiCOzujPhWjm8DMc7B7eQUzdI8wg8%2Bn31rx5SJgekINALfl%2FlWIgOJmjFGvDoCpTwHFiDcr7kAZ%2BgT0sV1vQgkCCs%2BGabQcow79%2FhID%2BOdKigLjuTmSOSOO3I9m8D2bAovlfW3Knei4icFRk4QfRnGNzKCQ5OKymmBG583JYwGX09OyfNI1N13EDf8%2BjqJFVL&X-Amz-Signature=6bca9f7e6eb532c2574a353a409410a972084014b578c0c7488fb87362b29152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHW2RWR4%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCg%2Bs5%2FO9QU8okbh072l7olCvIo%2F9XsVm9E7fU5L3emRAIgEiA2wX4VmVUFhGOEfsHLjMzzOlGfPW3w7JnHJxRieJIq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFR8M9Whnp4Yess54ircA%2BL2fhJc2B24KLCUQTCOshHMFPoS6jpiASnE84qVqLqf2qD24mnj4nEA%2BgHys6KV2nJbQJzjSCc8leySJ3vvUjWmXU%2FUJy%2BgPFhtpH0CDFZyW2zBNUC6CedTk6pKE0Mm9%2BGjYRwXKoANWztuhXawLpy5v3yqj2yaW2IIRO7DxBqztnDiZJY454RU5crQHlzDLqec6aEcIx1UdEnzBVyED981CbEi5%2BLQq48fa1dMqupfVO29koAujw4oidBxERmZOkZk5Mpn5Aj9UCIl2WGcBZp4tejRujIzB7kkmdGaFqu68bxWGIjF1XLDUDPSvtTR4xd9mowC73XGn4s7CvAcw1TczP9Gb5leyp5YiHhQ09BtP9RobmRtJOcefixCijDCE4Iay%2Bawx8PWH628Gcu7m3LqO5eqk3Y%2Fr56ifUoiWRD0uHjPrLAJFhah4tGSzQ3XdjsQXf5D%2FF9C%2BMRXijkgFreLqOvHlHjk7IK1iUEStkYEHT5RT8RpHPG5ioXUTdxaX%2FhcgI9KEnH9Y%2B3KUD%2Bgiu%2FDRmpsBRcAbY9eFdeU0ySHMht4vBYcZc0DWcBBNAjKD3UaGYuYEh%2FAhgkSmGBy%2FY4QnNsMfufWc334qOPbw7vaLZm6c5latejWrMvRMLO2wcQGOqUB%2FUl9krKfhEdwPC82i3HIrD3jiL5HiCOzujPhWjm8DMc7B7eQUzdI8wg8%2Bn31rx5SJgekINALfl%2FlWIgOJmjFGvDoCpTwHFiDcr7kAZ%2BgT0sV1vQgkCCs%2BGabQcow79%2FhID%2BOdKigLjuTmSOSOO3I9m8D2bAovlfW3Knei4icFRk4QfRnGNzKCQ5OKymmBG583JYwGX09OyfNI1N13EDf8%2BjqJFVL&X-Amz-Signature=ad12849bda2fd988ddd80c5f1c2ceae4aa1031a9d92c60b721e2b4a1b70f4913&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHW2RWR4%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCg%2Bs5%2FO9QU8okbh072l7olCvIo%2F9XsVm9E7fU5L3emRAIgEiA2wX4VmVUFhGOEfsHLjMzzOlGfPW3w7JnHJxRieJIq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFR8M9Whnp4Yess54ircA%2BL2fhJc2B24KLCUQTCOshHMFPoS6jpiASnE84qVqLqf2qD24mnj4nEA%2BgHys6KV2nJbQJzjSCc8leySJ3vvUjWmXU%2FUJy%2BgPFhtpH0CDFZyW2zBNUC6CedTk6pKE0Mm9%2BGjYRwXKoANWztuhXawLpy5v3yqj2yaW2IIRO7DxBqztnDiZJY454RU5crQHlzDLqec6aEcIx1UdEnzBVyED981CbEi5%2BLQq48fa1dMqupfVO29koAujw4oidBxERmZOkZk5Mpn5Aj9UCIl2WGcBZp4tejRujIzB7kkmdGaFqu68bxWGIjF1XLDUDPSvtTR4xd9mowC73XGn4s7CvAcw1TczP9Gb5leyp5YiHhQ09BtP9RobmRtJOcefixCijDCE4Iay%2Bawx8PWH628Gcu7m3LqO5eqk3Y%2Fr56ifUoiWRD0uHjPrLAJFhah4tGSzQ3XdjsQXf5D%2FF9C%2BMRXijkgFreLqOvHlHjk7IK1iUEStkYEHT5RT8RpHPG5ioXUTdxaX%2FhcgI9KEnH9Y%2B3KUD%2Bgiu%2FDRmpsBRcAbY9eFdeU0ySHMht4vBYcZc0DWcBBNAjKD3UaGYuYEh%2FAhgkSmGBy%2FY4QnNsMfufWc334qOPbw7vaLZm6c5latejWrMvRMLO2wcQGOqUB%2FUl9krKfhEdwPC82i3HIrD3jiL5HiCOzujPhWjm8DMc7B7eQUzdI8wg8%2Bn31rx5SJgekINALfl%2FlWIgOJmjFGvDoCpTwHFiDcr7kAZ%2BgT0sV1vQgkCCs%2BGabQcow79%2FhID%2BOdKigLjuTmSOSOO3I9m8D2bAovlfW3Knei4icFRk4QfRnGNzKCQ5OKymmBG583JYwGX09OyfNI1N13EDf8%2BjqJFVL&X-Amz-Signature=507668e0bb76928e0a60f0961f77f8d38541e2830fc8706fef4eb0ae7a34549b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHW2RWR4%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCg%2Bs5%2FO9QU8okbh072l7olCvIo%2F9XsVm9E7fU5L3emRAIgEiA2wX4VmVUFhGOEfsHLjMzzOlGfPW3w7JnHJxRieJIq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFR8M9Whnp4Yess54ircA%2BL2fhJc2B24KLCUQTCOshHMFPoS6jpiASnE84qVqLqf2qD24mnj4nEA%2BgHys6KV2nJbQJzjSCc8leySJ3vvUjWmXU%2FUJy%2BgPFhtpH0CDFZyW2zBNUC6CedTk6pKE0Mm9%2BGjYRwXKoANWztuhXawLpy5v3yqj2yaW2IIRO7DxBqztnDiZJY454RU5crQHlzDLqec6aEcIx1UdEnzBVyED981CbEi5%2BLQq48fa1dMqupfVO29koAujw4oidBxERmZOkZk5Mpn5Aj9UCIl2WGcBZp4tejRujIzB7kkmdGaFqu68bxWGIjF1XLDUDPSvtTR4xd9mowC73XGn4s7CvAcw1TczP9Gb5leyp5YiHhQ09BtP9RobmRtJOcefixCijDCE4Iay%2Bawx8PWH628Gcu7m3LqO5eqk3Y%2Fr56ifUoiWRD0uHjPrLAJFhah4tGSzQ3XdjsQXf5D%2FF9C%2BMRXijkgFreLqOvHlHjk7IK1iUEStkYEHT5RT8RpHPG5ioXUTdxaX%2FhcgI9KEnH9Y%2B3KUD%2Bgiu%2FDRmpsBRcAbY9eFdeU0ySHMht4vBYcZc0DWcBBNAjKD3UaGYuYEh%2FAhgkSmGBy%2FY4QnNsMfufWc334qOPbw7vaLZm6c5latejWrMvRMLO2wcQGOqUB%2FUl9krKfhEdwPC82i3HIrD3jiL5HiCOzujPhWjm8DMc7B7eQUzdI8wg8%2Bn31rx5SJgekINALfl%2FlWIgOJmjFGvDoCpTwHFiDcr7kAZ%2BgT0sV1vQgkCCs%2BGabQcow79%2FhID%2BOdKigLjuTmSOSOO3I9m8D2bAovlfW3Knei4icFRk4QfRnGNzKCQ5OKymmBG583JYwGX09OyfNI1N13EDf8%2BjqJFVL&X-Amz-Signature=1acb0155686fe9365afbdce341d8bfccaa1f1ed9726d4c69824f8558dbeda69d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHW2RWR4%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCg%2Bs5%2FO9QU8okbh072l7olCvIo%2F9XsVm9E7fU5L3emRAIgEiA2wX4VmVUFhGOEfsHLjMzzOlGfPW3w7JnHJxRieJIq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFR8M9Whnp4Yess54ircA%2BL2fhJc2B24KLCUQTCOshHMFPoS6jpiASnE84qVqLqf2qD24mnj4nEA%2BgHys6KV2nJbQJzjSCc8leySJ3vvUjWmXU%2FUJy%2BgPFhtpH0CDFZyW2zBNUC6CedTk6pKE0Mm9%2BGjYRwXKoANWztuhXawLpy5v3yqj2yaW2IIRO7DxBqztnDiZJY454RU5crQHlzDLqec6aEcIx1UdEnzBVyED981CbEi5%2BLQq48fa1dMqupfVO29koAujw4oidBxERmZOkZk5Mpn5Aj9UCIl2WGcBZp4tejRujIzB7kkmdGaFqu68bxWGIjF1XLDUDPSvtTR4xd9mowC73XGn4s7CvAcw1TczP9Gb5leyp5YiHhQ09BtP9RobmRtJOcefixCijDCE4Iay%2Bawx8PWH628Gcu7m3LqO5eqk3Y%2Fr56ifUoiWRD0uHjPrLAJFhah4tGSzQ3XdjsQXf5D%2FF9C%2BMRXijkgFreLqOvHlHjk7IK1iUEStkYEHT5RT8RpHPG5ioXUTdxaX%2FhcgI9KEnH9Y%2B3KUD%2Bgiu%2FDRmpsBRcAbY9eFdeU0ySHMht4vBYcZc0DWcBBNAjKD3UaGYuYEh%2FAhgkSmGBy%2FY4QnNsMfufWc334qOPbw7vaLZm6c5latejWrMvRMLO2wcQGOqUB%2FUl9krKfhEdwPC82i3HIrD3jiL5HiCOzujPhWjm8DMc7B7eQUzdI8wg8%2Bn31rx5SJgekINALfl%2FlWIgOJmjFGvDoCpTwHFiDcr7kAZ%2BgT0sV1vQgkCCs%2BGabQcow79%2FhID%2BOdKigLjuTmSOSOO3I9m8D2bAovlfW3Knei4icFRk4QfRnGNzKCQ5OKymmBG583JYwGX09OyfNI1N13EDf8%2BjqJFVL&X-Amz-Signature=3cf5136602e98f5318ac6baf7fd2a11038caf0e376588959a92ab6cf9275aafa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHW2RWR4%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCg%2Bs5%2FO9QU8okbh072l7olCvIo%2F9XsVm9E7fU5L3emRAIgEiA2wX4VmVUFhGOEfsHLjMzzOlGfPW3w7JnHJxRieJIq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFR8M9Whnp4Yess54ircA%2BL2fhJc2B24KLCUQTCOshHMFPoS6jpiASnE84qVqLqf2qD24mnj4nEA%2BgHys6KV2nJbQJzjSCc8leySJ3vvUjWmXU%2FUJy%2BgPFhtpH0CDFZyW2zBNUC6CedTk6pKE0Mm9%2BGjYRwXKoANWztuhXawLpy5v3yqj2yaW2IIRO7DxBqztnDiZJY454RU5crQHlzDLqec6aEcIx1UdEnzBVyED981CbEi5%2BLQq48fa1dMqupfVO29koAujw4oidBxERmZOkZk5Mpn5Aj9UCIl2WGcBZp4tejRujIzB7kkmdGaFqu68bxWGIjF1XLDUDPSvtTR4xd9mowC73XGn4s7CvAcw1TczP9Gb5leyp5YiHhQ09BtP9RobmRtJOcefixCijDCE4Iay%2Bawx8PWH628Gcu7m3LqO5eqk3Y%2Fr56ifUoiWRD0uHjPrLAJFhah4tGSzQ3XdjsQXf5D%2FF9C%2BMRXijkgFreLqOvHlHjk7IK1iUEStkYEHT5RT8RpHPG5ioXUTdxaX%2FhcgI9KEnH9Y%2B3KUD%2Bgiu%2FDRmpsBRcAbY9eFdeU0ySHMht4vBYcZc0DWcBBNAjKD3UaGYuYEh%2FAhgkSmGBy%2FY4QnNsMfufWc334qOPbw7vaLZm6c5latejWrMvRMLO2wcQGOqUB%2FUl9krKfhEdwPC82i3HIrD3jiL5HiCOzujPhWjm8DMc7B7eQUzdI8wg8%2Bn31rx5SJgekINALfl%2FlWIgOJmjFGvDoCpTwHFiDcr7kAZ%2BgT0sV1vQgkCCs%2BGabQcow79%2FhID%2BOdKigLjuTmSOSOO3I9m8D2bAovlfW3Knei4icFRk4QfRnGNzKCQ5OKymmBG583JYwGX09OyfNI1N13EDf8%2BjqJFVL&X-Amz-Signature=2d6ec91ccde556cfa65584e6dea47010f34f68d6e2ac47b081f7077f236c5205&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
