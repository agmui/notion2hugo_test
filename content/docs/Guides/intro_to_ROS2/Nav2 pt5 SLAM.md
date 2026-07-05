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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWHCIL3P%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQC6LePzzUO77SiYBBdvh%2BObAszdN82bxVMkyXcf5YDWdwIhAI2m1DdHKIZ11kjFP3fJMCxeTC9HlLK9wG6cit8EuxS3Kv8DCDIQABoMNjM3NDIzMTgzODA1IgxTDBDMS0FrA9Ri%2FVgq3APzVVCIh%2FWbRd%2BdwYeUjm0b2BOYigxNC%2B3ACYQ3IkeslQAu3QrxmbGw0K3aKNPRGywxQLbk%2FNmzd2QmnuKvni0XozmrpxHMbR8%2B%2FZsGPVAak0WC1s6bd%2BplMhbVqHd%2F4M0aYJE9XJ1wsIxIb9HU6ootEk9jdZokYOz32vi2U3wyWXs8N4tYMAjpvhE%2BN2ovSXZEP3vptd0HPipK0FrAH8kEDDQsFl1YJAShffjmjfvBJkQz7xZoX12iktDIUwfF8O6fOX8hdfwIzYBmBZumVoUtFcDbWORU850vDeYK3HkxE34Y%2FUjAYkq%2Bb5EQo87CAUStzea%2FPHb8HtPJkQ0K5OGI3ZiOz%2FtHaxaVTl9DAvMQpod1E4nZ%2FLv5GcfC3TcpZ0%2BMEU5lkngBpxAxlmU%2B01c1GCAF6pLpygdR5%2B2eHY5q5mwwEj0PfritNwv%2FelfEiWFyVlfDRG%2BNTvQU1pVLiNv5TmFcvW2%2BRy1w40aCe0jFfZcxTXUY7jWYo%2BqHBClDtr5MyYYEg3Z%2BCxLojkXA6lNTNTagzoJLlS0RgN3t1m94eRb2n3LcetsM0hn1lnGmkraod2MZ7z8i%2BUIpE%2F8YAHime1ible3mtiAGz8KZ0Pux3FLQ2sYHC53BvX12oTD426bSBjqkAd3AmEhlX%2Bve8EKpFZe0PcSjeRl1XBAnWN5HOi5W6wLVlpIS0c2lCqa4cXMTuntpIsi90dzy6UOVVCtjQji0wNatZjWL6VFvDqfvSRQS%2Fp8pVxA4wHecK7d6elR%2BYxLgER7alcpT7vBhX9GzueMsAgbc5KEjxP1TcUIBdzF89CSCH8%2F7Zn4cfrJ3vzD7iqB34pEdNb9yNaVhGpdlpj05XcL0HHMb&X-Amz-Signature=b8cb17b07ddc9f8ae544467b66015143bec56ef4cdf00697562e2c8c77032f67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWHCIL3P%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQC6LePzzUO77SiYBBdvh%2BObAszdN82bxVMkyXcf5YDWdwIhAI2m1DdHKIZ11kjFP3fJMCxeTC9HlLK9wG6cit8EuxS3Kv8DCDIQABoMNjM3NDIzMTgzODA1IgxTDBDMS0FrA9Ri%2FVgq3APzVVCIh%2FWbRd%2BdwYeUjm0b2BOYigxNC%2B3ACYQ3IkeslQAu3QrxmbGw0K3aKNPRGywxQLbk%2FNmzd2QmnuKvni0XozmrpxHMbR8%2B%2FZsGPVAak0WC1s6bd%2BplMhbVqHd%2F4M0aYJE9XJ1wsIxIb9HU6ootEk9jdZokYOz32vi2U3wyWXs8N4tYMAjpvhE%2BN2ovSXZEP3vptd0HPipK0FrAH8kEDDQsFl1YJAShffjmjfvBJkQz7xZoX12iktDIUwfF8O6fOX8hdfwIzYBmBZumVoUtFcDbWORU850vDeYK3HkxE34Y%2FUjAYkq%2Bb5EQo87CAUStzea%2FPHb8HtPJkQ0K5OGI3ZiOz%2FtHaxaVTl9DAvMQpod1E4nZ%2FLv5GcfC3TcpZ0%2BMEU5lkngBpxAxlmU%2B01c1GCAF6pLpygdR5%2B2eHY5q5mwwEj0PfritNwv%2FelfEiWFyVlfDRG%2BNTvQU1pVLiNv5TmFcvW2%2BRy1w40aCe0jFfZcxTXUY7jWYo%2BqHBClDtr5MyYYEg3Z%2BCxLojkXA6lNTNTagzoJLlS0RgN3t1m94eRb2n3LcetsM0hn1lnGmkraod2MZ7z8i%2BUIpE%2F8YAHime1ible3mtiAGz8KZ0Pux3FLQ2sYHC53BvX12oTD426bSBjqkAd3AmEhlX%2Bve8EKpFZe0PcSjeRl1XBAnWN5HOi5W6wLVlpIS0c2lCqa4cXMTuntpIsi90dzy6UOVVCtjQji0wNatZjWL6VFvDqfvSRQS%2Fp8pVxA4wHecK7d6elR%2BYxLgER7alcpT7vBhX9GzueMsAgbc5KEjxP1TcUIBdzF89CSCH8%2F7Zn4cfrJ3vzD7iqB34pEdNb9yNaVhGpdlpj05XcL0HHMb&X-Amz-Signature=b618f79e7afe00174b84bca39118410454bab5c2f4e8009277cd7e5c8b520e9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWHCIL3P%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQC6LePzzUO77SiYBBdvh%2BObAszdN82bxVMkyXcf5YDWdwIhAI2m1DdHKIZ11kjFP3fJMCxeTC9HlLK9wG6cit8EuxS3Kv8DCDIQABoMNjM3NDIzMTgzODA1IgxTDBDMS0FrA9Ri%2FVgq3APzVVCIh%2FWbRd%2BdwYeUjm0b2BOYigxNC%2B3ACYQ3IkeslQAu3QrxmbGw0K3aKNPRGywxQLbk%2FNmzd2QmnuKvni0XozmrpxHMbR8%2B%2FZsGPVAak0WC1s6bd%2BplMhbVqHd%2F4M0aYJE9XJ1wsIxIb9HU6ootEk9jdZokYOz32vi2U3wyWXs8N4tYMAjpvhE%2BN2ovSXZEP3vptd0HPipK0FrAH8kEDDQsFl1YJAShffjmjfvBJkQz7xZoX12iktDIUwfF8O6fOX8hdfwIzYBmBZumVoUtFcDbWORU850vDeYK3HkxE34Y%2FUjAYkq%2Bb5EQo87CAUStzea%2FPHb8HtPJkQ0K5OGI3ZiOz%2FtHaxaVTl9DAvMQpod1E4nZ%2FLv5GcfC3TcpZ0%2BMEU5lkngBpxAxlmU%2B01c1GCAF6pLpygdR5%2B2eHY5q5mwwEj0PfritNwv%2FelfEiWFyVlfDRG%2BNTvQU1pVLiNv5TmFcvW2%2BRy1w40aCe0jFfZcxTXUY7jWYo%2BqHBClDtr5MyYYEg3Z%2BCxLojkXA6lNTNTagzoJLlS0RgN3t1m94eRb2n3LcetsM0hn1lnGmkraod2MZ7z8i%2BUIpE%2F8YAHime1ible3mtiAGz8KZ0Pux3FLQ2sYHC53BvX12oTD426bSBjqkAd3AmEhlX%2Bve8EKpFZe0PcSjeRl1XBAnWN5HOi5W6wLVlpIS0c2lCqa4cXMTuntpIsi90dzy6UOVVCtjQji0wNatZjWL6VFvDqfvSRQS%2Fp8pVxA4wHecK7d6elR%2BYxLgER7alcpT7vBhX9GzueMsAgbc5KEjxP1TcUIBdzF89CSCH8%2F7Zn4cfrJ3vzD7iqB34pEdNb9yNaVhGpdlpj05XcL0HHMb&X-Amz-Signature=d6d4a4be54adba14cdb712a55b1322a12e614946d150dcae12149e687bf8d49b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWHCIL3P%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQC6LePzzUO77SiYBBdvh%2BObAszdN82bxVMkyXcf5YDWdwIhAI2m1DdHKIZ11kjFP3fJMCxeTC9HlLK9wG6cit8EuxS3Kv8DCDIQABoMNjM3NDIzMTgzODA1IgxTDBDMS0FrA9Ri%2FVgq3APzVVCIh%2FWbRd%2BdwYeUjm0b2BOYigxNC%2B3ACYQ3IkeslQAu3QrxmbGw0K3aKNPRGywxQLbk%2FNmzd2QmnuKvni0XozmrpxHMbR8%2B%2FZsGPVAak0WC1s6bd%2BplMhbVqHd%2F4M0aYJE9XJ1wsIxIb9HU6ootEk9jdZokYOz32vi2U3wyWXs8N4tYMAjpvhE%2BN2ovSXZEP3vptd0HPipK0FrAH8kEDDQsFl1YJAShffjmjfvBJkQz7xZoX12iktDIUwfF8O6fOX8hdfwIzYBmBZumVoUtFcDbWORU850vDeYK3HkxE34Y%2FUjAYkq%2Bb5EQo87CAUStzea%2FPHb8HtPJkQ0K5OGI3ZiOz%2FtHaxaVTl9DAvMQpod1E4nZ%2FLv5GcfC3TcpZ0%2BMEU5lkngBpxAxlmU%2B01c1GCAF6pLpygdR5%2B2eHY5q5mwwEj0PfritNwv%2FelfEiWFyVlfDRG%2BNTvQU1pVLiNv5TmFcvW2%2BRy1w40aCe0jFfZcxTXUY7jWYo%2BqHBClDtr5MyYYEg3Z%2BCxLojkXA6lNTNTagzoJLlS0RgN3t1m94eRb2n3LcetsM0hn1lnGmkraod2MZ7z8i%2BUIpE%2F8YAHime1ible3mtiAGz8KZ0Pux3FLQ2sYHC53BvX12oTD426bSBjqkAd3AmEhlX%2Bve8EKpFZe0PcSjeRl1XBAnWN5HOi5W6wLVlpIS0c2lCqa4cXMTuntpIsi90dzy6UOVVCtjQji0wNatZjWL6VFvDqfvSRQS%2Fp8pVxA4wHecK7d6elR%2BYxLgER7alcpT7vBhX9GzueMsAgbc5KEjxP1TcUIBdzF89CSCH8%2F7Zn4cfrJ3vzD7iqB34pEdNb9yNaVhGpdlpj05XcL0HHMb&X-Amz-Signature=10dc8e279ad0faa51d10eb74dd53a5916903c4a7bbff9301bdf950d09ea1d70e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWHCIL3P%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQC6LePzzUO77SiYBBdvh%2BObAszdN82bxVMkyXcf5YDWdwIhAI2m1DdHKIZ11kjFP3fJMCxeTC9HlLK9wG6cit8EuxS3Kv8DCDIQABoMNjM3NDIzMTgzODA1IgxTDBDMS0FrA9Ri%2FVgq3APzVVCIh%2FWbRd%2BdwYeUjm0b2BOYigxNC%2B3ACYQ3IkeslQAu3QrxmbGw0K3aKNPRGywxQLbk%2FNmzd2QmnuKvni0XozmrpxHMbR8%2B%2FZsGPVAak0WC1s6bd%2BplMhbVqHd%2F4M0aYJE9XJ1wsIxIb9HU6ootEk9jdZokYOz32vi2U3wyWXs8N4tYMAjpvhE%2BN2ovSXZEP3vptd0HPipK0FrAH8kEDDQsFl1YJAShffjmjfvBJkQz7xZoX12iktDIUwfF8O6fOX8hdfwIzYBmBZumVoUtFcDbWORU850vDeYK3HkxE34Y%2FUjAYkq%2Bb5EQo87CAUStzea%2FPHb8HtPJkQ0K5OGI3ZiOz%2FtHaxaVTl9DAvMQpod1E4nZ%2FLv5GcfC3TcpZ0%2BMEU5lkngBpxAxlmU%2B01c1GCAF6pLpygdR5%2B2eHY5q5mwwEj0PfritNwv%2FelfEiWFyVlfDRG%2BNTvQU1pVLiNv5TmFcvW2%2BRy1w40aCe0jFfZcxTXUY7jWYo%2BqHBClDtr5MyYYEg3Z%2BCxLojkXA6lNTNTagzoJLlS0RgN3t1m94eRb2n3LcetsM0hn1lnGmkraod2MZ7z8i%2BUIpE%2F8YAHime1ible3mtiAGz8KZ0Pux3FLQ2sYHC53BvX12oTD426bSBjqkAd3AmEhlX%2Bve8EKpFZe0PcSjeRl1XBAnWN5HOi5W6wLVlpIS0c2lCqa4cXMTuntpIsi90dzy6UOVVCtjQji0wNatZjWL6VFvDqfvSRQS%2Fp8pVxA4wHecK7d6elR%2BYxLgER7alcpT7vBhX9GzueMsAgbc5KEjxP1TcUIBdzF89CSCH8%2F7Zn4cfrJ3vzD7iqB34pEdNb9yNaVhGpdlpj05XcL0HHMb&X-Amz-Signature=4f80bcf2427faf15408b57e032eae2b2e08c03e4890578c2cab751e19dce42a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWHCIL3P%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQC6LePzzUO77SiYBBdvh%2BObAszdN82bxVMkyXcf5YDWdwIhAI2m1DdHKIZ11kjFP3fJMCxeTC9HlLK9wG6cit8EuxS3Kv8DCDIQABoMNjM3NDIzMTgzODA1IgxTDBDMS0FrA9Ri%2FVgq3APzVVCIh%2FWbRd%2BdwYeUjm0b2BOYigxNC%2B3ACYQ3IkeslQAu3QrxmbGw0K3aKNPRGywxQLbk%2FNmzd2QmnuKvni0XozmrpxHMbR8%2B%2FZsGPVAak0WC1s6bd%2BplMhbVqHd%2F4M0aYJE9XJ1wsIxIb9HU6ootEk9jdZokYOz32vi2U3wyWXs8N4tYMAjpvhE%2BN2ovSXZEP3vptd0HPipK0FrAH8kEDDQsFl1YJAShffjmjfvBJkQz7xZoX12iktDIUwfF8O6fOX8hdfwIzYBmBZumVoUtFcDbWORU850vDeYK3HkxE34Y%2FUjAYkq%2Bb5EQo87CAUStzea%2FPHb8HtPJkQ0K5OGI3ZiOz%2FtHaxaVTl9DAvMQpod1E4nZ%2FLv5GcfC3TcpZ0%2BMEU5lkngBpxAxlmU%2B01c1GCAF6pLpygdR5%2B2eHY5q5mwwEj0PfritNwv%2FelfEiWFyVlfDRG%2BNTvQU1pVLiNv5TmFcvW2%2BRy1w40aCe0jFfZcxTXUY7jWYo%2BqHBClDtr5MyYYEg3Z%2BCxLojkXA6lNTNTagzoJLlS0RgN3t1m94eRb2n3LcetsM0hn1lnGmkraod2MZ7z8i%2BUIpE%2F8YAHime1ible3mtiAGz8KZ0Pux3FLQ2sYHC53BvX12oTD426bSBjqkAd3AmEhlX%2Bve8EKpFZe0PcSjeRl1XBAnWN5HOi5W6wLVlpIS0c2lCqa4cXMTuntpIsi90dzy6UOVVCtjQji0wNatZjWL6VFvDqfvSRQS%2Fp8pVxA4wHecK7d6elR%2BYxLgER7alcpT7vBhX9GzueMsAgbc5KEjxP1TcUIBdzF89CSCH8%2F7Zn4cfrJ3vzD7iqB34pEdNb9yNaVhGpdlpj05XcL0HHMb&X-Amz-Signature=3ba43679c3e9190da8924bbb1ff7553b518c4601536e9590f995f404c0091c9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWHCIL3P%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQC6LePzzUO77SiYBBdvh%2BObAszdN82bxVMkyXcf5YDWdwIhAI2m1DdHKIZ11kjFP3fJMCxeTC9HlLK9wG6cit8EuxS3Kv8DCDIQABoMNjM3NDIzMTgzODA1IgxTDBDMS0FrA9Ri%2FVgq3APzVVCIh%2FWbRd%2BdwYeUjm0b2BOYigxNC%2B3ACYQ3IkeslQAu3QrxmbGw0K3aKNPRGywxQLbk%2FNmzd2QmnuKvni0XozmrpxHMbR8%2B%2FZsGPVAak0WC1s6bd%2BplMhbVqHd%2F4M0aYJE9XJ1wsIxIb9HU6ootEk9jdZokYOz32vi2U3wyWXs8N4tYMAjpvhE%2BN2ovSXZEP3vptd0HPipK0FrAH8kEDDQsFl1YJAShffjmjfvBJkQz7xZoX12iktDIUwfF8O6fOX8hdfwIzYBmBZumVoUtFcDbWORU850vDeYK3HkxE34Y%2FUjAYkq%2Bb5EQo87CAUStzea%2FPHb8HtPJkQ0K5OGI3ZiOz%2FtHaxaVTl9DAvMQpod1E4nZ%2FLv5GcfC3TcpZ0%2BMEU5lkngBpxAxlmU%2B01c1GCAF6pLpygdR5%2B2eHY5q5mwwEj0PfritNwv%2FelfEiWFyVlfDRG%2BNTvQU1pVLiNv5TmFcvW2%2BRy1w40aCe0jFfZcxTXUY7jWYo%2BqHBClDtr5MyYYEg3Z%2BCxLojkXA6lNTNTagzoJLlS0RgN3t1m94eRb2n3LcetsM0hn1lnGmkraod2MZ7z8i%2BUIpE%2F8YAHime1ible3mtiAGz8KZ0Pux3FLQ2sYHC53BvX12oTD426bSBjqkAd3AmEhlX%2Bve8EKpFZe0PcSjeRl1XBAnWN5HOi5W6wLVlpIS0c2lCqa4cXMTuntpIsi90dzy6UOVVCtjQji0wNatZjWL6VFvDqfvSRQS%2Fp8pVxA4wHecK7d6elR%2BYxLgER7alcpT7vBhX9GzueMsAgbc5KEjxP1TcUIBdzF89CSCH8%2F7Zn4cfrJ3vzD7iqB34pEdNb9yNaVhGpdlpj05XcL0HHMb&X-Amz-Signature=9ab105c5034c34aa62949a854bca01b3139735cff95c1113e30546e0d05eed52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWHCIL3P%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQC6LePzzUO77SiYBBdvh%2BObAszdN82bxVMkyXcf5YDWdwIhAI2m1DdHKIZ11kjFP3fJMCxeTC9HlLK9wG6cit8EuxS3Kv8DCDIQABoMNjM3NDIzMTgzODA1IgxTDBDMS0FrA9Ri%2FVgq3APzVVCIh%2FWbRd%2BdwYeUjm0b2BOYigxNC%2B3ACYQ3IkeslQAu3QrxmbGw0K3aKNPRGywxQLbk%2FNmzd2QmnuKvni0XozmrpxHMbR8%2B%2FZsGPVAak0WC1s6bd%2BplMhbVqHd%2F4M0aYJE9XJ1wsIxIb9HU6ootEk9jdZokYOz32vi2U3wyWXs8N4tYMAjpvhE%2BN2ovSXZEP3vptd0HPipK0FrAH8kEDDQsFl1YJAShffjmjfvBJkQz7xZoX12iktDIUwfF8O6fOX8hdfwIzYBmBZumVoUtFcDbWORU850vDeYK3HkxE34Y%2FUjAYkq%2Bb5EQo87CAUStzea%2FPHb8HtPJkQ0K5OGI3ZiOz%2FtHaxaVTl9DAvMQpod1E4nZ%2FLv5GcfC3TcpZ0%2BMEU5lkngBpxAxlmU%2B01c1GCAF6pLpygdR5%2B2eHY5q5mwwEj0PfritNwv%2FelfEiWFyVlfDRG%2BNTvQU1pVLiNv5TmFcvW2%2BRy1w40aCe0jFfZcxTXUY7jWYo%2BqHBClDtr5MyYYEg3Z%2BCxLojkXA6lNTNTagzoJLlS0RgN3t1m94eRb2n3LcetsM0hn1lnGmkraod2MZ7z8i%2BUIpE%2F8YAHime1ible3mtiAGz8KZ0Pux3FLQ2sYHC53BvX12oTD426bSBjqkAd3AmEhlX%2Bve8EKpFZe0PcSjeRl1XBAnWN5HOi5W6wLVlpIS0c2lCqa4cXMTuntpIsi90dzy6UOVVCtjQji0wNatZjWL6VFvDqfvSRQS%2Fp8pVxA4wHecK7d6elR%2BYxLgER7alcpT7vBhX9GzueMsAgbc5KEjxP1TcUIBdzF89CSCH8%2F7Zn4cfrJ3vzD7iqB34pEdNb9yNaVhGpdlpj05XcL0HHMb&X-Amz-Signature=505b5f916ecdc8c68b4954e8ec524eeac55a872a40df2814c15624ea029baf33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWHCIL3P%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQC6LePzzUO77SiYBBdvh%2BObAszdN82bxVMkyXcf5YDWdwIhAI2m1DdHKIZ11kjFP3fJMCxeTC9HlLK9wG6cit8EuxS3Kv8DCDIQABoMNjM3NDIzMTgzODA1IgxTDBDMS0FrA9Ri%2FVgq3APzVVCIh%2FWbRd%2BdwYeUjm0b2BOYigxNC%2B3ACYQ3IkeslQAu3QrxmbGw0K3aKNPRGywxQLbk%2FNmzd2QmnuKvni0XozmrpxHMbR8%2B%2FZsGPVAak0WC1s6bd%2BplMhbVqHd%2F4M0aYJE9XJ1wsIxIb9HU6ootEk9jdZokYOz32vi2U3wyWXs8N4tYMAjpvhE%2BN2ovSXZEP3vptd0HPipK0FrAH8kEDDQsFl1YJAShffjmjfvBJkQz7xZoX12iktDIUwfF8O6fOX8hdfwIzYBmBZumVoUtFcDbWORU850vDeYK3HkxE34Y%2FUjAYkq%2Bb5EQo87CAUStzea%2FPHb8HtPJkQ0K5OGI3ZiOz%2FtHaxaVTl9DAvMQpod1E4nZ%2FLv5GcfC3TcpZ0%2BMEU5lkngBpxAxlmU%2B01c1GCAF6pLpygdR5%2B2eHY5q5mwwEj0PfritNwv%2FelfEiWFyVlfDRG%2BNTvQU1pVLiNv5TmFcvW2%2BRy1w40aCe0jFfZcxTXUY7jWYo%2BqHBClDtr5MyYYEg3Z%2BCxLojkXA6lNTNTagzoJLlS0RgN3t1m94eRb2n3LcetsM0hn1lnGmkraod2MZ7z8i%2BUIpE%2F8YAHime1ible3mtiAGz8KZ0Pux3FLQ2sYHC53BvX12oTD426bSBjqkAd3AmEhlX%2Bve8EKpFZe0PcSjeRl1XBAnWN5HOi5W6wLVlpIS0c2lCqa4cXMTuntpIsi90dzy6UOVVCtjQji0wNatZjWL6VFvDqfvSRQS%2Fp8pVxA4wHecK7d6elR%2BYxLgER7alcpT7vBhX9GzueMsAgbc5KEjxP1TcUIBdzF89CSCH8%2F7Zn4cfrJ3vzD7iqB34pEdNb9yNaVhGpdlpj05XcL0HHMb&X-Amz-Signature=cbecbdf5fa9c8e56c2d349bc6e51f3cab2976ca4377a7c710ac1449f596c6955&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWHCIL3P%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQC6LePzzUO77SiYBBdvh%2BObAszdN82bxVMkyXcf5YDWdwIhAI2m1DdHKIZ11kjFP3fJMCxeTC9HlLK9wG6cit8EuxS3Kv8DCDIQABoMNjM3NDIzMTgzODA1IgxTDBDMS0FrA9Ri%2FVgq3APzVVCIh%2FWbRd%2BdwYeUjm0b2BOYigxNC%2B3ACYQ3IkeslQAu3QrxmbGw0K3aKNPRGywxQLbk%2FNmzd2QmnuKvni0XozmrpxHMbR8%2B%2FZsGPVAak0WC1s6bd%2BplMhbVqHd%2F4M0aYJE9XJ1wsIxIb9HU6ootEk9jdZokYOz32vi2U3wyWXs8N4tYMAjpvhE%2BN2ovSXZEP3vptd0HPipK0FrAH8kEDDQsFl1YJAShffjmjfvBJkQz7xZoX12iktDIUwfF8O6fOX8hdfwIzYBmBZumVoUtFcDbWORU850vDeYK3HkxE34Y%2FUjAYkq%2Bb5EQo87CAUStzea%2FPHb8HtPJkQ0K5OGI3ZiOz%2FtHaxaVTl9DAvMQpod1E4nZ%2FLv5GcfC3TcpZ0%2BMEU5lkngBpxAxlmU%2B01c1GCAF6pLpygdR5%2B2eHY5q5mwwEj0PfritNwv%2FelfEiWFyVlfDRG%2BNTvQU1pVLiNv5TmFcvW2%2BRy1w40aCe0jFfZcxTXUY7jWYo%2BqHBClDtr5MyYYEg3Z%2BCxLojkXA6lNTNTagzoJLlS0RgN3t1m94eRb2n3LcetsM0hn1lnGmkraod2MZ7z8i%2BUIpE%2F8YAHime1ible3mtiAGz8KZ0Pux3FLQ2sYHC53BvX12oTD426bSBjqkAd3AmEhlX%2Bve8EKpFZe0PcSjeRl1XBAnWN5HOi5W6wLVlpIS0c2lCqa4cXMTuntpIsi90dzy6UOVVCtjQji0wNatZjWL6VFvDqfvSRQS%2Fp8pVxA4wHecK7d6elR%2BYxLgER7alcpT7vBhX9GzueMsAgbc5KEjxP1TcUIBdzF89CSCH8%2F7Zn4cfrJ3vzD7iqB34pEdNb9yNaVhGpdlpj05XcL0HHMb&X-Amz-Signature=dfb1cca63652a0a34fcd724187280db3412051d850f6e53dc2a5ba77c1def4f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWHCIL3P%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQC6LePzzUO77SiYBBdvh%2BObAszdN82bxVMkyXcf5YDWdwIhAI2m1DdHKIZ11kjFP3fJMCxeTC9HlLK9wG6cit8EuxS3Kv8DCDIQABoMNjM3NDIzMTgzODA1IgxTDBDMS0FrA9Ri%2FVgq3APzVVCIh%2FWbRd%2BdwYeUjm0b2BOYigxNC%2B3ACYQ3IkeslQAu3QrxmbGw0K3aKNPRGywxQLbk%2FNmzd2QmnuKvni0XozmrpxHMbR8%2B%2FZsGPVAak0WC1s6bd%2BplMhbVqHd%2F4M0aYJE9XJ1wsIxIb9HU6ootEk9jdZokYOz32vi2U3wyWXs8N4tYMAjpvhE%2BN2ovSXZEP3vptd0HPipK0FrAH8kEDDQsFl1YJAShffjmjfvBJkQz7xZoX12iktDIUwfF8O6fOX8hdfwIzYBmBZumVoUtFcDbWORU850vDeYK3HkxE34Y%2FUjAYkq%2Bb5EQo87CAUStzea%2FPHb8HtPJkQ0K5OGI3ZiOz%2FtHaxaVTl9DAvMQpod1E4nZ%2FLv5GcfC3TcpZ0%2BMEU5lkngBpxAxlmU%2B01c1GCAF6pLpygdR5%2B2eHY5q5mwwEj0PfritNwv%2FelfEiWFyVlfDRG%2BNTvQU1pVLiNv5TmFcvW2%2BRy1w40aCe0jFfZcxTXUY7jWYo%2BqHBClDtr5MyYYEg3Z%2BCxLojkXA6lNTNTagzoJLlS0RgN3t1m94eRb2n3LcetsM0hn1lnGmkraod2MZ7z8i%2BUIpE%2F8YAHime1ible3mtiAGz8KZ0Pux3FLQ2sYHC53BvX12oTD426bSBjqkAd3AmEhlX%2Bve8EKpFZe0PcSjeRl1XBAnWN5HOi5W6wLVlpIS0c2lCqa4cXMTuntpIsi90dzy6UOVVCtjQji0wNatZjWL6VFvDqfvSRQS%2Fp8pVxA4wHecK7d6elR%2BYxLgER7alcpT7vBhX9GzueMsAgbc5KEjxP1TcUIBdzF89CSCH8%2F7Zn4cfrJ3vzD7iqB34pEdNb9yNaVhGpdlpj05XcL0HHMb&X-Amz-Signature=76f563fd4cfd996251d33bbef3843daae51fa551338c043b584eb490fb115036&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWHCIL3P%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQC6LePzzUO77SiYBBdvh%2BObAszdN82bxVMkyXcf5YDWdwIhAI2m1DdHKIZ11kjFP3fJMCxeTC9HlLK9wG6cit8EuxS3Kv8DCDIQABoMNjM3NDIzMTgzODA1IgxTDBDMS0FrA9Ri%2FVgq3APzVVCIh%2FWbRd%2BdwYeUjm0b2BOYigxNC%2B3ACYQ3IkeslQAu3QrxmbGw0K3aKNPRGywxQLbk%2FNmzd2QmnuKvni0XozmrpxHMbR8%2B%2FZsGPVAak0WC1s6bd%2BplMhbVqHd%2F4M0aYJE9XJ1wsIxIb9HU6ootEk9jdZokYOz32vi2U3wyWXs8N4tYMAjpvhE%2BN2ovSXZEP3vptd0HPipK0FrAH8kEDDQsFl1YJAShffjmjfvBJkQz7xZoX12iktDIUwfF8O6fOX8hdfwIzYBmBZumVoUtFcDbWORU850vDeYK3HkxE34Y%2FUjAYkq%2Bb5EQo87CAUStzea%2FPHb8HtPJkQ0K5OGI3ZiOz%2FtHaxaVTl9DAvMQpod1E4nZ%2FLv5GcfC3TcpZ0%2BMEU5lkngBpxAxlmU%2B01c1GCAF6pLpygdR5%2B2eHY5q5mwwEj0PfritNwv%2FelfEiWFyVlfDRG%2BNTvQU1pVLiNv5TmFcvW2%2BRy1w40aCe0jFfZcxTXUY7jWYo%2BqHBClDtr5MyYYEg3Z%2BCxLojkXA6lNTNTagzoJLlS0RgN3t1m94eRb2n3LcetsM0hn1lnGmkraod2MZ7z8i%2BUIpE%2F8YAHime1ible3mtiAGz8KZ0Pux3FLQ2sYHC53BvX12oTD426bSBjqkAd3AmEhlX%2Bve8EKpFZe0PcSjeRl1XBAnWN5HOi5W6wLVlpIS0c2lCqa4cXMTuntpIsi90dzy6UOVVCtjQji0wNatZjWL6VFvDqfvSRQS%2Fp8pVxA4wHecK7d6elR%2BYxLgER7alcpT7vBhX9GzueMsAgbc5KEjxP1TcUIBdzF89CSCH8%2F7Zn4cfrJ3vzD7iqB34pEdNb9yNaVhGpdlpj05XcL0HHMb&X-Amz-Signature=862a88edabe8b6f12909719e64aa17fc9b3fa01e9f4b316c1adf9da6bb82c286&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWHCIL3P%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQC6LePzzUO77SiYBBdvh%2BObAszdN82bxVMkyXcf5YDWdwIhAI2m1DdHKIZ11kjFP3fJMCxeTC9HlLK9wG6cit8EuxS3Kv8DCDIQABoMNjM3NDIzMTgzODA1IgxTDBDMS0FrA9Ri%2FVgq3APzVVCIh%2FWbRd%2BdwYeUjm0b2BOYigxNC%2B3ACYQ3IkeslQAu3QrxmbGw0K3aKNPRGywxQLbk%2FNmzd2QmnuKvni0XozmrpxHMbR8%2B%2FZsGPVAak0WC1s6bd%2BplMhbVqHd%2F4M0aYJE9XJ1wsIxIb9HU6ootEk9jdZokYOz32vi2U3wyWXs8N4tYMAjpvhE%2BN2ovSXZEP3vptd0HPipK0FrAH8kEDDQsFl1YJAShffjmjfvBJkQz7xZoX12iktDIUwfF8O6fOX8hdfwIzYBmBZumVoUtFcDbWORU850vDeYK3HkxE34Y%2FUjAYkq%2Bb5EQo87CAUStzea%2FPHb8HtPJkQ0K5OGI3ZiOz%2FtHaxaVTl9DAvMQpod1E4nZ%2FLv5GcfC3TcpZ0%2BMEU5lkngBpxAxlmU%2B01c1GCAF6pLpygdR5%2B2eHY5q5mwwEj0PfritNwv%2FelfEiWFyVlfDRG%2BNTvQU1pVLiNv5TmFcvW2%2BRy1w40aCe0jFfZcxTXUY7jWYo%2BqHBClDtr5MyYYEg3Z%2BCxLojkXA6lNTNTagzoJLlS0RgN3t1m94eRb2n3LcetsM0hn1lnGmkraod2MZ7z8i%2BUIpE%2F8YAHime1ible3mtiAGz8KZ0Pux3FLQ2sYHC53BvX12oTD426bSBjqkAd3AmEhlX%2Bve8EKpFZe0PcSjeRl1XBAnWN5HOi5W6wLVlpIS0c2lCqa4cXMTuntpIsi90dzy6UOVVCtjQji0wNatZjWL6VFvDqfvSRQS%2Fp8pVxA4wHecK7d6elR%2BYxLgER7alcpT7vBhX9GzueMsAgbc5KEjxP1TcUIBdzF89CSCH8%2F7Zn4cfrJ3vzD7iqB34pEdNb9yNaVhGpdlpj05XcL0HHMb&X-Amz-Signature=397f1c1563f547480a288b2655946acb05439f61dad98940a503f503098acc02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWHCIL3P%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQC6LePzzUO77SiYBBdvh%2BObAszdN82bxVMkyXcf5YDWdwIhAI2m1DdHKIZ11kjFP3fJMCxeTC9HlLK9wG6cit8EuxS3Kv8DCDIQABoMNjM3NDIzMTgzODA1IgxTDBDMS0FrA9Ri%2FVgq3APzVVCIh%2FWbRd%2BdwYeUjm0b2BOYigxNC%2B3ACYQ3IkeslQAu3QrxmbGw0K3aKNPRGywxQLbk%2FNmzd2QmnuKvni0XozmrpxHMbR8%2B%2FZsGPVAak0WC1s6bd%2BplMhbVqHd%2F4M0aYJE9XJ1wsIxIb9HU6ootEk9jdZokYOz32vi2U3wyWXs8N4tYMAjpvhE%2BN2ovSXZEP3vptd0HPipK0FrAH8kEDDQsFl1YJAShffjmjfvBJkQz7xZoX12iktDIUwfF8O6fOX8hdfwIzYBmBZumVoUtFcDbWORU850vDeYK3HkxE34Y%2FUjAYkq%2Bb5EQo87CAUStzea%2FPHb8HtPJkQ0K5OGI3ZiOz%2FtHaxaVTl9DAvMQpod1E4nZ%2FLv5GcfC3TcpZ0%2BMEU5lkngBpxAxlmU%2B01c1GCAF6pLpygdR5%2B2eHY5q5mwwEj0PfritNwv%2FelfEiWFyVlfDRG%2BNTvQU1pVLiNv5TmFcvW2%2BRy1w40aCe0jFfZcxTXUY7jWYo%2BqHBClDtr5MyYYEg3Z%2BCxLojkXA6lNTNTagzoJLlS0RgN3t1m94eRb2n3LcetsM0hn1lnGmkraod2MZ7z8i%2BUIpE%2F8YAHime1ible3mtiAGz8KZ0Pux3FLQ2sYHC53BvX12oTD426bSBjqkAd3AmEhlX%2Bve8EKpFZe0PcSjeRl1XBAnWN5HOi5W6wLVlpIS0c2lCqa4cXMTuntpIsi90dzy6UOVVCtjQji0wNatZjWL6VFvDqfvSRQS%2Fp8pVxA4wHecK7d6elR%2BYxLgER7alcpT7vBhX9GzueMsAgbc5KEjxP1TcUIBdzF89CSCH8%2F7Zn4cfrJ3vzD7iqB34pEdNb9yNaVhGpdlpj05XcL0HHMb&X-Amz-Signature=3445cb668fa748c037c60d18bc26c4db4e6fba1d4bf5268a3f977238e549485a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
