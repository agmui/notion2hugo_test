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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCBKEZ6N%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoQ7VN39UQf%2BGDOIlnWPuArQUvYqo%2B21ZDwmc4cQzqoAIhAIKUqTd7T9XiFkzpWsEYALWmANK0pAtSW4Z24BpSKQAdKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx685MrcnDlmn%2F8oP0q3ANx8DL1%2FmeZkU6k6ZPGbcZctXcjzMYMcKtHbIBXo9h40h0MdBuGGT4w3dW9AzKxKXNX7cAqA6Hqlr94eRwEOHMre2D22IMpfI1ojVT2cbWvHpDrJqN481K%2FwSAq0SZB3xT84QEZlh1m6trnqALbJPdNgywqH9bLzqXVrzGGT9ch0clLVAEbl6hTb9q45urjFwax0%2FicZH%2BRN1DSxWEQ8U77PzY%2BMtAc5E%2F0K2kEfk4dmd5HcqFu7jL8K%2BU4iqr3xW75dzAqeK8S%2B3z7WXQaADRG5NO58tLXynuWsZKvlB1tda1iSnPcM%2BA%2BzYr89VsuvxLkC0lr3HdfGdoM1VX1CwUmJpSN6euuatzeLx5Yop5R2fYUf1UksgOfEJOHlh5jpIn%2FrPkw5%2BICvbmdNyCfiUDn8NWE4KgqNoMhhLJr80vAh3hIp%2FqSM0AdJYMcpB54B8cNpMSe78HLth9nsQLCLPIcZDV9HF0gF%2FDgyhalAstNzZJrfD03OlFicVg4KaocIcyEd7RZN2d1NzSAfHT1fSPaJAB%2BQnBcXnYKe3sJlOVbXLT0E3Fc8xbkfx6Dv6x0q%2FBMZZIGomwuuirTUjOVJ7ldQ3U6wmwAFfWrQH2wBWlpRzR8%2F3JBQx9gt3R1KjDcuuPEBjqkAb%2F6Q4qGp06AOV7D9aAZ9UNJ7dh6%2Fczmo3VdkewITQCTa5JMKPDjHIqH7xoT0hbP56HFHCeY7hWcUoGtPIc%2BiYbpZN7s5guObXhN0%2BVZqAH6bWQX6vbXUPyTx3a9HZ3BUVUY4cThiSpnFrReYJOIzHGkLmycn9LZfIY%2FXQf0Nhe%2Fa1VhjE5RmdoVqg3KE1GjMH4X6z%2BKuCiYpHvA4xEnwn%2FK4%2F6O&X-Amz-Signature=a35ed26f339e5a1c98451682d852685967fa175444784edd8e892ee1c2d5bd2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCBKEZ6N%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoQ7VN39UQf%2BGDOIlnWPuArQUvYqo%2B21ZDwmc4cQzqoAIhAIKUqTd7T9XiFkzpWsEYALWmANK0pAtSW4Z24BpSKQAdKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx685MrcnDlmn%2F8oP0q3ANx8DL1%2FmeZkU6k6ZPGbcZctXcjzMYMcKtHbIBXo9h40h0MdBuGGT4w3dW9AzKxKXNX7cAqA6Hqlr94eRwEOHMre2D22IMpfI1ojVT2cbWvHpDrJqN481K%2FwSAq0SZB3xT84QEZlh1m6trnqALbJPdNgywqH9bLzqXVrzGGT9ch0clLVAEbl6hTb9q45urjFwax0%2FicZH%2BRN1DSxWEQ8U77PzY%2BMtAc5E%2F0K2kEfk4dmd5HcqFu7jL8K%2BU4iqr3xW75dzAqeK8S%2B3z7WXQaADRG5NO58tLXynuWsZKvlB1tda1iSnPcM%2BA%2BzYr89VsuvxLkC0lr3HdfGdoM1VX1CwUmJpSN6euuatzeLx5Yop5R2fYUf1UksgOfEJOHlh5jpIn%2FrPkw5%2BICvbmdNyCfiUDn8NWE4KgqNoMhhLJr80vAh3hIp%2FqSM0AdJYMcpB54B8cNpMSe78HLth9nsQLCLPIcZDV9HF0gF%2FDgyhalAstNzZJrfD03OlFicVg4KaocIcyEd7RZN2d1NzSAfHT1fSPaJAB%2BQnBcXnYKe3sJlOVbXLT0E3Fc8xbkfx6Dv6x0q%2FBMZZIGomwuuirTUjOVJ7ldQ3U6wmwAFfWrQH2wBWlpRzR8%2F3JBQx9gt3R1KjDcuuPEBjqkAb%2F6Q4qGp06AOV7D9aAZ9UNJ7dh6%2Fczmo3VdkewITQCTa5JMKPDjHIqH7xoT0hbP56HFHCeY7hWcUoGtPIc%2BiYbpZN7s5guObXhN0%2BVZqAH6bWQX6vbXUPyTx3a9HZ3BUVUY4cThiSpnFrReYJOIzHGkLmycn9LZfIY%2FXQf0Nhe%2Fa1VhjE5RmdoVqg3KE1GjMH4X6z%2BKuCiYpHvA4xEnwn%2FK4%2F6O&X-Amz-Signature=cd01d59d629a7aeab630e960a4076325658967d1cf6438517f3f539016e64c67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCBKEZ6N%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoQ7VN39UQf%2BGDOIlnWPuArQUvYqo%2B21ZDwmc4cQzqoAIhAIKUqTd7T9XiFkzpWsEYALWmANK0pAtSW4Z24BpSKQAdKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx685MrcnDlmn%2F8oP0q3ANx8DL1%2FmeZkU6k6ZPGbcZctXcjzMYMcKtHbIBXo9h40h0MdBuGGT4w3dW9AzKxKXNX7cAqA6Hqlr94eRwEOHMre2D22IMpfI1ojVT2cbWvHpDrJqN481K%2FwSAq0SZB3xT84QEZlh1m6trnqALbJPdNgywqH9bLzqXVrzGGT9ch0clLVAEbl6hTb9q45urjFwax0%2FicZH%2BRN1DSxWEQ8U77PzY%2BMtAc5E%2F0K2kEfk4dmd5HcqFu7jL8K%2BU4iqr3xW75dzAqeK8S%2B3z7WXQaADRG5NO58tLXynuWsZKvlB1tda1iSnPcM%2BA%2BzYr89VsuvxLkC0lr3HdfGdoM1VX1CwUmJpSN6euuatzeLx5Yop5R2fYUf1UksgOfEJOHlh5jpIn%2FrPkw5%2BICvbmdNyCfiUDn8NWE4KgqNoMhhLJr80vAh3hIp%2FqSM0AdJYMcpB54B8cNpMSe78HLth9nsQLCLPIcZDV9HF0gF%2FDgyhalAstNzZJrfD03OlFicVg4KaocIcyEd7RZN2d1NzSAfHT1fSPaJAB%2BQnBcXnYKe3sJlOVbXLT0E3Fc8xbkfx6Dv6x0q%2FBMZZIGomwuuirTUjOVJ7ldQ3U6wmwAFfWrQH2wBWlpRzR8%2F3JBQx9gt3R1KjDcuuPEBjqkAb%2F6Q4qGp06AOV7D9aAZ9UNJ7dh6%2Fczmo3VdkewITQCTa5JMKPDjHIqH7xoT0hbP56HFHCeY7hWcUoGtPIc%2BiYbpZN7s5guObXhN0%2BVZqAH6bWQX6vbXUPyTx3a9HZ3BUVUY4cThiSpnFrReYJOIzHGkLmycn9LZfIY%2FXQf0Nhe%2Fa1VhjE5RmdoVqg3KE1GjMH4X6z%2BKuCiYpHvA4xEnwn%2FK4%2F6O&X-Amz-Signature=210f02befb96a91514483a1a200f8bcbf0bcce1bb8a9d031a96a424eef57a78e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCBKEZ6N%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoQ7VN39UQf%2BGDOIlnWPuArQUvYqo%2B21ZDwmc4cQzqoAIhAIKUqTd7T9XiFkzpWsEYALWmANK0pAtSW4Z24BpSKQAdKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx685MrcnDlmn%2F8oP0q3ANx8DL1%2FmeZkU6k6ZPGbcZctXcjzMYMcKtHbIBXo9h40h0MdBuGGT4w3dW9AzKxKXNX7cAqA6Hqlr94eRwEOHMre2D22IMpfI1ojVT2cbWvHpDrJqN481K%2FwSAq0SZB3xT84QEZlh1m6trnqALbJPdNgywqH9bLzqXVrzGGT9ch0clLVAEbl6hTb9q45urjFwax0%2FicZH%2BRN1DSxWEQ8U77PzY%2BMtAc5E%2F0K2kEfk4dmd5HcqFu7jL8K%2BU4iqr3xW75dzAqeK8S%2B3z7WXQaADRG5NO58tLXynuWsZKvlB1tda1iSnPcM%2BA%2BzYr89VsuvxLkC0lr3HdfGdoM1VX1CwUmJpSN6euuatzeLx5Yop5R2fYUf1UksgOfEJOHlh5jpIn%2FrPkw5%2BICvbmdNyCfiUDn8NWE4KgqNoMhhLJr80vAh3hIp%2FqSM0AdJYMcpB54B8cNpMSe78HLth9nsQLCLPIcZDV9HF0gF%2FDgyhalAstNzZJrfD03OlFicVg4KaocIcyEd7RZN2d1NzSAfHT1fSPaJAB%2BQnBcXnYKe3sJlOVbXLT0E3Fc8xbkfx6Dv6x0q%2FBMZZIGomwuuirTUjOVJ7ldQ3U6wmwAFfWrQH2wBWlpRzR8%2F3JBQx9gt3R1KjDcuuPEBjqkAb%2F6Q4qGp06AOV7D9aAZ9UNJ7dh6%2Fczmo3VdkewITQCTa5JMKPDjHIqH7xoT0hbP56HFHCeY7hWcUoGtPIc%2BiYbpZN7s5guObXhN0%2BVZqAH6bWQX6vbXUPyTx3a9HZ3BUVUY4cThiSpnFrReYJOIzHGkLmycn9LZfIY%2FXQf0Nhe%2Fa1VhjE5RmdoVqg3KE1GjMH4X6z%2BKuCiYpHvA4xEnwn%2FK4%2F6O&X-Amz-Signature=0ba992d9f3ef3023d45875997108a0bcd4427faf7ef92efe9ca0b4b48b0bbfdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCBKEZ6N%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoQ7VN39UQf%2BGDOIlnWPuArQUvYqo%2B21ZDwmc4cQzqoAIhAIKUqTd7T9XiFkzpWsEYALWmANK0pAtSW4Z24BpSKQAdKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx685MrcnDlmn%2F8oP0q3ANx8DL1%2FmeZkU6k6ZPGbcZctXcjzMYMcKtHbIBXo9h40h0MdBuGGT4w3dW9AzKxKXNX7cAqA6Hqlr94eRwEOHMre2D22IMpfI1ojVT2cbWvHpDrJqN481K%2FwSAq0SZB3xT84QEZlh1m6trnqALbJPdNgywqH9bLzqXVrzGGT9ch0clLVAEbl6hTb9q45urjFwax0%2FicZH%2BRN1DSxWEQ8U77PzY%2BMtAc5E%2F0K2kEfk4dmd5HcqFu7jL8K%2BU4iqr3xW75dzAqeK8S%2B3z7WXQaADRG5NO58tLXynuWsZKvlB1tda1iSnPcM%2BA%2BzYr89VsuvxLkC0lr3HdfGdoM1VX1CwUmJpSN6euuatzeLx5Yop5R2fYUf1UksgOfEJOHlh5jpIn%2FrPkw5%2BICvbmdNyCfiUDn8NWE4KgqNoMhhLJr80vAh3hIp%2FqSM0AdJYMcpB54B8cNpMSe78HLth9nsQLCLPIcZDV9HF0gF%2FDgyhalAstNzZJrfD03OlFicVg4KaocIcyEd7RZN2d1NzSAfHT1fSPaJAB%2BQnBcXnYKe3sJlOVbXLT0E3Fc8xbkfx6Dv6x0q%2FBMZZIGomwuuirTUjOVJ7ldQ3U6wmwAFfWrQH2wBWlpRzR8%2F3JBQx9gt3R1KjDcuuPEBjqkAb%2F6Q4qGp06AOV7D9aAZ9UNJ7dh6%2Fczmo3VdkewITQCTa5JMKPDjHIqH7xoT0hbP56HFHCeY7hWcUoGtPIc%2BiYbpZN7s5guObXhN0%2BVZqAH6bWQX6vbXUPyTx3a9HZ3BUVUY4cThiSpnFrReYJOIzHGkLmycn9LZfIY%2FXQf0Nhe%2Fa1VhjE5RmdoVqg3KE1GjMH4X6z%2BKuCiYpHvA4xEnwn%2FK4%2F6O&X-Amz-Signature=a6da46e4f146c49663c1cc62a297b321426655b93e353d08c97791298487951c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCBKEZ6N%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoQ7VN39UQf%2BGDOIlnWPuArQUvYqo%2B21ZDwmc4cQzqoAIhAIKUqTd7T9XiFkzpWsEYALWmANK0pAtSW4Z24BpSKQAdKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx685MrcnDlmn%2F8oP0q3ANx8DL1%2FmeZkU6k6ZPGbcZctXcjzMYMcKtHbIBXo9h40h0MdBuGGT4w3dW9AzKxKXNX7cAqA6Hqlr94eRwEOHMre2D22IMpfI1ojVT2cbWvHpDrJqN481K%2FwSAq0SZB3xT84QEZlh1m6trnqALbJPdNgywqH9bLzqXVrzGGT9ch0clLVAEbl6hTb9q45urjFwax0%2FicZH%2BRN1DSxWEQ8U77PzY%2BMtAc5E%2F0K2kEfk4dmd5HcqFu7jL8K%2BU4iqr3xW75dzAqeK8S%2B3z7WXQaADRG5NO58tLXynuWsZKvlB1tda1iSnPcM%2BA%2BzYr89VsuvxLkC0lr3HdfGdoM1VX1CwUmJpSN6euuatzeLx5Yop5R2fYUf1UksgOfEJOHlh5jpIn%2FrPkw5%2BICvbmdNyCfiUDn8NWE4KgqNoMhhLJr80vAh3hIp%2FqSM0AdJYMcpB54B8cNpMSe78HLth9nsQLCLPIcZDV9HF0gF%2FDgyhalAstNzZJrfD03OlFicVg4KaocIcyEd7RZN2d1NzSAfHT1fSPaJAB%2BQnBcXnYKe3sJlOVbXLT0E3Fc8xbkfx6Dv6x0q%2FBMZZIGomwuuirTUjOVJ7ldQ3U6wmwAFfWrQH2wBWlpRzR8%2F3JBQx9gt3R1KjDcuuPEBjqkAb%2F6Q4qGp06AOV7D9aAZ9UNJ7dh6%2Fczmo3VdkewITQCTa5JMKPDjHIqH7xoT0hbP56HFHCeY7hWcUoGtPIc%2BiYbpZN7s5guObXhN0%2BVZqAH6bWQX6vbXUPyTx3a9HZ3BUVUY4cThiSpnFrReYJOIzHGkLmycn9LZfIY%2FXQf0Nhe%2Fa1VhjE5RmdoVqg3KE1GjMH4X6z%2BKuCiYpHvA4xEnwn%2FK4%2F6O&X-Amz-Signature=b0d6af3d406a6a00fdf5c3072c3836a38dbb59744af44a80fff00366a27c3509&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCBKEZ6N%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoQ7VN39UQf%2BGDOIlnWPuArQUvYqo%2B21ZDwmc4cQzqoAIhAIKUqTd7T9XiFkzpWsEYALWmANK0pAtSW4Z24BpSKQAdKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx685MrcnDlmn%2F8oP0q3ANx8DL1%2FmeZkU6k6ZPGbcZctXcjzMYMcKtHbIBXo9h40h0MdBuGGT4w3dW9AzKxKXNX7cAqA6Hqlr94eRwEOHMre2D22IMpfI1ojVT2cbWvHpDrJqN481K%2FwSAq0SZB3xT84QEZlh1m6trnqALbJPdNgywqH9bLzqXVrzGGT9ch0clLVAEbl6hTb9q45urjFwax0%2FicZH%2BRN1DSxWEQ8U77PzY%2BMtAc5E%2F0K2kEfk4dmd5HcqFu7jL8K%2BU4iqr3xW75dzAqeK8S%2B3z7WXQaADRG5NO58tLXynuWsZKvlB1tda1iSnPcM%2BA%2BzYr89VsuvxLkC0lr3HdfGdoM1VX1CwUmJpSN6euuatzeLx5Yop5R2fYUf1UksgOfEJOHlh5jpIn%2FrPkw5%2BICvbmdNyCfiUDn8NWE4KgqNoMhhLJr80vAh3hIp%2FqSM0AdJYMcpB54B8cNpMSe78HLth9nsQLCLPIcZDV9HF0gF%2FDgyhalAstNzZJrfD03OlFicVg4KaocIcyEd7RZN2d1NzSAfHT1fSPaJAB%2BQnBcXnYKe3sJlOVbXLT0E3Fc8xbkfx6Dv6x0q%2FBMZZIGomwuuirTUjOVJ7ldQ3U6wmwAFfWrQH2wBWlpRzR8%2F3JBQx9gt3R1KjDcuuPEBjqkAb%2F6Q4qGp06AOV7D9aAZ9UNJ7dh6%2Fczmo3VdkewITQCTa5JMKPDjHIqH7xoT0hbP56HFHCeY7hWcUoGtPIc%2BiYbpZN7s5guObXhN0%2BVZqAH6bWQX6vbXUPyTx3a9HZ3BUVUY4cThiSpnFrReYJOIzHGkLmycn9LZfIY%2FXQf0Nhe%2Fa1VhjE5RmdoVqg3KE1GjMH4X6z%2BKuCiYpHvA4xEnwn%2FK4%2F6O&X-Amz-Signature=17f13156be425a11bfe8eaf2e2c1b25c9f0a365de1cad284bd10df6795179da0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCBKEZ6N%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoQ7VN39UQf%2BGDOIlnWPuArQUvYqo%2B21ZDwmc4cQzqoAIhAIKUqTd7T9XiFkzpWsEYALWmANK0pAtSW4Z24BpSKQAdKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx685MrcnDlmn%2F8oP0q3ANx8DL1%2FmeZkU6k6ZPGbcZctXcjzMYMcKtHbIBXo9h40h0MdBuGGT4w3dW9AzKxKXNX7cAqA6Hqlr94eRwEOHMre2D22IMpfI1ojVT2cbWvHpDrJqN481K%2FwSAq0SZB3xT84QEZlh1m6trnqALbJPdNgywqH9bLzqXVrzGGT9ch0clLVAEbl6hTb9q45urjFwax0%2FicZH%2BRN1DSxWEQ8U77PzY%2BMtAc5E%2F0K2kEfk4dmd5HcqFu7jL8K%2BU4iqr3xW75dzAqeK8S%2B3z7WXQaADRG5NO58tLXynuWsZKvlB1tda1iSnPcM%2BA%2BzYr89VsuvxLkC0lr3HdfGdoM1VX1CwUmJpSN6euuatzeLx5Yop5R2fYUf1UksgOfEJOHlh5jpIn%2FrPkw5%2BICvbmdNyCfiUDn8NWE4KgqNoMhhLJr80vAh3hIp%2FqSM0AdJYMcpB54B8cNpMSe78HLth9nsQLCLPIcZDV9HF0gF%2FDgyhalAstNzZJrfD03OlFicVg4KaocIcyEd7RZN2d1NzSAfHT1fSPaJAB%2BQnBcXnYKe3sJlOVbXLT0E3Fc8xbkfx6Dv6x0q%2FBMZZIGomwuuirTUjOVJ7ldQ3U6wmwAFfWrQH2wBWlpRzR8%2F3JBQx9gt3R1KjDcuuPEBjqkAb%2F6Q4qGp06AOV7D9aAZ9UNJ7dh6%2Fczmo3VdkewITQCTa5JMKPDjHIqH7xoT0hbP56HFHCeY7hWcUoGtPIc%2BiYbpZN7s5guObXhN0%2BVZqAH6bWQX6vbXUPyTx3a9HZ3BUVUY4cThiSpnFrReYJOIzHGkLmycn9LZfIY%2FXQf0Nhe%2Fa1VhjE5RmdoVqg3KE1GjMH4X6z%2BKuCiYpHvA4xEnwn%2FK4%2F6O&X-Amz-Signature=d9dea309c4374beba1a3cd34e0b5ebcb7ef5a5f5204743ff306b1fb7923bf33a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCBKEZ6N%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoQ7VN39UQf%2BGDOIlnWPuArQUvYqo%2B21ZDwmc4cQzqoAIhAIKUqTd7T9XiFkzpWsEYALWmANK0pAtSW4Z24BpSKQAdKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx685MrcnDlmn%2F8oP0q3ANx8DL1%2FmeZkU6k6ZPGbcZctXcjzMYMcKtHbIBXo9h40h0MdBuGGT4w3dW9AzKxKXNX7cAqA6Hqlr94eRwEOHMre2D22IMpfI1ojVT2cbWvHpDrJqN481K%2FwSAq0SZB3xT84QEZlh1m6trnqALbJPdNgywqH9bLzqXVrzGGT9ch0clLVAEbl6hTb9q45urjFwax0%2FicZH%2BRN1DSxWEQ8U77PzY%2BMtAc5E%2F0K2kEfk4dmd5HcqFu7jL8K%2BU4iqr3xW75dzAqeK8S%2B3z7WXQaADRG5NO58tLXynuWsZKvlB1tda1iSnPcM%2BA%2BzYr89VsuvxLkC0lr3HdfGdoM1VX1CwUmJpSN6euuatzeLx5Yop5R2fYUf1UksgOfEJOHlh5jpIn%2FrPkw5%2BICvbmdNyCfiUDn8NWE4KgqNoMhhLJr80vAh3hIp%2FqSM0AdJYMcpB54B8cNpMSe78HLth9nsQLCLPIcZDV9HF0gF%2FDgyhalAstNzZJrfD03OlFicVg4KaocIcyEd7RZN2d1NzSAfHT1fSPaJAB%2BQnBcXnYKe3sJlOVbXLT0E3Fc8xbkfx6Dv6x0q%2FBMZZIGomwuuirTUjOVJ7ldQ3U6wmwAFfWrQH2wBWlpRzR8%2F3JBQx9gt3R1KjDcuuPEBjqkAb%2F6Q4qGp06AOV7D9aAZ9UNJ7dh6%2Fczmo3VdkewITQCTa5JMKPDjHIqH7xoT0hbP56HFHCeY7hWcUoGtPIc%2BiYbpZN7s5guObXhN0%2BVZqAH6bWQX6vbXUPyTx3a9HZ3BUVUY4cThiSpnFrReYJOIzHGkLmycn9LZfIY%2FXQf0Nhe%2Fa1VhjE5RmdoVqg3KE1GjMH4X6z%2BKuCiYpHvA4xEnwn%2FK4%2F6O&X-Amz-Signature=dca153d33070c73a39ac77df971138954460116592d33a42691f2d423215cbbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCBKEZ6N%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoQ7VN39UQf%2BGDOIlnWPuArQUvYqo%2B21ZDwmc4cQzqoAIhAIKUqTd7T9XiFkzpWsEYALWmANK0pAtSW4Z24BpSKQAdKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx685MrcnDlmn%2F8oP0q3ANx8DL1%2FmeZkU6k6ZPGbcZctXcjzMYMcKtHbIBXo9h40h0MdBuGGT4w3dW9AzKxKXNX7cAqA6Hqlr94eRwEOHMre2D22IMpfI1ojVT2cbWvHpDrJqN481K%2FwSAq0SZB3xT84QEZlh1m6trnqALbJPdNgywqH9bLzqXVrzGGT9ch0clLVAEbl6hTb9q45urjFwax0%2FicZH%2BRN1DSxWEQ8U77PzY%2BMtAc5E%2F0K2kEfk4dmd5HcqFu7jL8K%2BU4iqr3xW75dzAqeK8S%2B3z7WXQaADRG5NO58tLXynuWsZKvlB1tda1iSnPcM%2BA%2BzYr89VsuvxLkC0lr3HdfGdoM1VX1CwUmJpSN6euuatzeLx5Yop5R2fYUf1UksgOfEJOHlh5jpIn%2FrPkw5%2BICvbmdNyCfiUDn8NWE4KgqNoMhhLJr80vAh3hIp%2FqSM0AdJYMcpB54B8cNpMSe78HLth9nsQLCLPIcZDV9HF0gF%2FDgyhalAstNzZJrfD03OlFicVg4KaocIcyEd7RZN2d1NzSAfHT1fSPaJAB%2BQnBcXnYKe3sJlOVbXLT0E3Fc8xbkfx6Dv6x0q%2FBMZZIGomwuuirTUjOVJ7ldQ3U6wmwAFfWrQH2wBWlpRzR8%2F3JBQx9gt3R1KjDcuuPEBjqkAb%2F6Q4qGp06AOV7D9aAZ9UNJ7dh6%2Fczmo3VdkewITQCTa5JMKPDjHIqH7xoT0hbP56HFHCeY7hWcUoGtPIc%2BiYbpZN7s5guObXhN0%2BVZqAH6bWQX6vbXUPyTx3a9HZ3BUVUY4cThiSpnFrReYJOIzHGkLmycn9LZfIY%2FXQf0Nhe%2Fa1VhjE5RmdoVqg3KE1GjMH4X6z%2BKuCiYpHvA4xEnwn%2FK4%2F6O&X-Amz-Signature=8988a73814b60ae0ce43bc30741456b266652998828157933fe6d79ce36a7849&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCBKEZ6N%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoQ7VN39UQf%2BGDOIlnWPuArQUvYqo%2B21ZDwmc4cQzqoAIhAIKUqTd7T9XiFkzpWsEYALWmANK0pAtSW4Z24BpSKQAdKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx685MrcnDlmn%2F8oP0q3ANx8DL1%2FmeZkU6k6ZPGbcZctXcjzMYMcKtHbIBXo9h40h0MdBuGGT4w3dW9AzKxKXNX7cAqA6Hqlr94eRwEOHMre2D22IMpfI1ojVT2cbWvHpDrJqN481K%2FwSAq0SZB3xT84QEZlh1m6trnqALbJPdNgywqH9bLzqXVrzGGT9ch0clLVAEbl6hTb9q45urjFwax0%2FicZH%2BRN1DSxWEQ8U77PzY%2BMtAc5E%2F0K2kEfk4dmd5HcqFu7jL8K%2BU4iqr3xW75dzAqeK8S%2B3z7WXQaADRG5NO58tLXynuWsZKvlB1tda1iSnPcM%2BA%2BzYr89VsuvxLkC0lr3HdfGdoM1VX1CwUmJpSN6euuatzeLx5Yop5R2fYUf1UksgOfEJOHlh5jpIn%2FrPkw5%2BICvbmdNyCfiUDn8NWE4KgqNoMhhLJr80vAh3hIp%2FqSM0AdJYMcpB54B8cNpMSe78HLth9nsQLCLPIcZDV9HF0gF%2FDgyhalAstNzZJrfD03OlFicVg4KaocIcyEd7RZN2d1NzSAfHT1fSPaJAB%2BQnBcXnYKe3sJlOVbXLT0E3Fc8xbkfx6Dv6x0q%2FBMZZIGomwuuirTUjOVJ7ldQ3U6wmwAFfWrQH2wBWlpRzR8%2F3JBQx9gt3R1KjDcuuPEBjqkAb%2F6Q4qGp06AOV7D9aAZ9UNJ7dh6%2Fczmo3VdkewITQCTa5JMKPDjHIqH7xoT0hbP56HFHCeY7hWcUoGtPIc%2BiYbpZN7s5guObXhN0%2BVZqAH6bWQX6vbXUPyTx3a9HZ3BUVUY4cThiSpnFrReYJOIzHGkLmycn9LZfIY%2FXQf0Nhe%2Fa1VhjE5RmdoVqg3KE1GjMH4X6z%2BKuCiYpHvA4xEnwn%2FK4%2F6O&X-Amz-Signature=79cb60954a4b1cc6423ff313d9dfa61566afbf7c4ef83e38fae1aebee5fc7066&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCBKEZ6N%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoQ7VN39UQf%2BGDOIlnWPuArQUvYqo%2B21ZDwmc4cQzqoAIhAIKUqTd7T9XiFkzpWsEYALWmANK0pAtSW4Z24BpSKQAdKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx685MrcnDlmn%2F8oP0q3ANx8DL1%2FmeZkU6k6ZPGbcZctXcjzMYMcKtHbIBXo9h40h0MdBuGGT4w3dW9AzKxKXNX7cAqA6Hqlr94eRwEOHMre2D22IMpfI1ojVT2cbWvHpDrJqN481K%2FwSAq0SZB3xT84QEZlh1m6trnqALbJPdNgywqH9bLzqXVrzGGT9ch0clLVAEbl6hTb9q45urjFwax0%2FicZH%2BRN1DSxWEQ8U77PzY%2BMtAc5E%2F0K2kEfk4dmd5HcqFu7jL8K%2BU4iqr3xW75dzAqeK8S%2B3z7WXQaADRG5NO58tLXynuWsZKvlB1tda1iSnPcM%2BA%2BzYr89VsuvxLkC0lr3HdfGdoM1VX1CwUmJpSN6euuatzeLx5Yop5R2fYUf1UksgOfEJOHlh5jpIn%2FrPkw5%2BICvbmdNyCfiUDn8NWE4KgqNoMhhLJr80vAh3hIp%2FqSM0AdJYMcpB54B8cNpMSe78HLth9nsQLCLPIcZDV9HF0gF%2FDgyhalAstNzZJrfD03OlFicVg4KaocIcyEd7RZN2d1NzSAfHT1fSPaJAB%2BQnBcXnYKe3sJlOVbXLT0E3Fc8xbkfx6Dv6x0q%2FBMZZIGomwuuirTUjOVJ7ldQ3U6wmwAFfWrQH2wBWlpRzR8%2F3JBQx9gt3R1KjDcuuPEBjqkAb%2F6Q4qGp06AOV7D9aAZ9UNJ7dh6%2Fczmo3VdkewITQCTa5JMKPDjHIqH7xoT0hbP56HFHCeY7hWcUoGtPIc%2BiYbpZN7s5guObXhN0%2BVZqAH6bWQX6vbXUPyTx3a9HZ3BUVUY4cThiSpnFrReYJOIzHGkLmycn9LZfIY%2FXQf0Nhe%2Fa1VhjE5RmdoVqg3KE1GjMH4X6z%2BKuCiYpHvA4xEnwn%2FK4%2F6O&X-Amz-Signature=e6f460f34154f4634a484de57bc5c3b6bd1aecd198b5ec5f10499f01492f88d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCBKEZ6N%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoQ7VN39UQf%2BGDOIlnWPuArQUvYqo%2B21ZDwmc4cQzqoAIhAIKUqTd7T9XiFkzpWsEYALWmANK0pAtSW4Z24BpSKQAdKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx685MrcnDlmn%2F8oP0q3ANx8DL1%2FmeZkU6k6ZPGbcZctXcjzMYMcKtHbIBXo9h40h0MdBuGGT4w3dW9AzKxKXNX7cAqA6Hqlr94eRwEOHMre2D22IMpfI1ojVT2cbWvHpDrJqN481K%2FwSAq0SZB3xT84QEZlh1m6trnqALbJPdNgywqH9bLzqXVrzGGT9ch0clLVAEbl6hTb9q45urjFwax0%2FicZH%2BRN1DSxWEQ8U77PzY%2BMtAc5E%2F0K2kEfk4dmd5HcqFu7jL8K%2BU4iqr3xW75dzAqeK8S%2B3z7WXQaADRG5NO58tLXynuWsZKvlB1tda1iSnPcM%2BA%2BzYr89VsuvxLkC0lr3HdfGdoM1VX1CwUmJpSN6euuatzeLx5Yop5R2fYUf1UksgOfEJOHlh5jpIn%2FrPkw5%2BICvbmdNyCfiUDn8NWE4KgqNoMhhLJr80vAh3hIp%2FqSM0AdJYMcpB54B8cNpMSe78HLth9nsQLCLPIcZDV9HF0gF%2FDgyhalAstNzZJrfD03OlFicVg4KaocIcyEd7RZN2d1NzSAfHT1fSPaJAB%2BQnBcXnYKe3sJlOVbXLT0E3Fc8xbkfx6Dv6x0q%2FBMZZIGomwuuirTUjOVJ7ldQ3U6wmwAFfWrQH2wBWlpRzR8%2F3JBQx9gt3R1KjDcuuPEBjqkAb%2F6Q4qGp06AOV7D9aAZ9UNJ7dh6%2Fczmo3VdkewITQCTa5JMKPDjHIqH7xoT0hbP56HFHCeY7hWcUoGtPIc%2BiYbpZN7s5guObXhN0%2BVZqAH6bWQX6vbXUPyTx3a9HZ3BUVUY4cThiSpnFrReYJOIzHGkLmycn9LZfIY%2FXQf0Nhe%2Fa1VhjE5RmdoVqg3KE1GjMH4X6z%2BKuCiYpHvA4xEnwn%2FK4%2F6O&X-Amz-Signature=de6d51f230659b72b9b299a28406b82e8b814fd12aed1153947d7afc0ef80e3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCBKEZ6N%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoQ7VN39UQf%2BGDOIlnWPuArQUvYqo%2B21ZDwmc4cQzqoAIhAIKUqTd7T9XiFkzpWsEYALWmANK0pAtSW4Z24BpSKQAdKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx685MrcnDlmn%2F8oP0q3ANx8DL1%2FmeZkU6k6ZPGbcZctXcjzMYMcKtHbIBXo9h40h0MdBuGGT4w3dW9AzKxKXNX7cAqA6Hqlr94eRwEOHMre2D22IMpfI1ojVT2cbWvHpDrJqN481K%2FwSAq0SZB3xT84QEZlh1m6trnqALbJPdNgywqH9bLzqXVrzGGT9ch0clLVAEbl6hTb9q45urjFwax0%2FicZH%2BRN1DSxWEQ8U77PzY%2BMtAc5E%2F0K2kEfk4dmd5HcqFu7jL8K%2BU4iqr3xW75dzAqeK8S%2B3z7WXQaADRG5NO58tLXynuWsZKvlB1tda1iSnPcM%2BA%2BzYr89VsuvxLkC0lr3HdfGdoM1VX1CwUmJpSN6euuatzeLx5Yop5R2fYUf1UksgOfEJOHlh5jpIn%2FrPkw5%2BICvbmdNyCfiUDn8NWE4KgqNoMhhLJr80vAh3hIp%2FqSM0AdJYMcpB54B8cNpMSe78HLth9nsQLCLPIcZDV9HF0gF%2FDgyhalAstNzZJrfD03OlFicVg4KaocIcyEd7RZN2d1NzSAfHT1fSPaJAB%2BQnBcXnYKe3sJlOVbXLT0E3Fc8xbkfx6Dv6x0q%2FBMZZIGomwuuirTUjOVJ7ldQ3U6wmwAFfWrQH2wBWlpRzR8%2F3JBQx9gt3R1KjDcuuPEBjqkAb%2F6Q4qGp06AOV7D9aAZ9UNJ7dh6%2Fczmo3VdkewITQCTa5JMKPDjHIqH7xoT0hbP56HFHCeY7hWcUoGtPIc%2BiYbpZN7s5guObXhN0%2BVZqAH6bWQX6vbXUPyTx3a9HZ3BUVUY4cThiSpnFrReYJOIzHGkLmycn9LZfIY%2FXQf0Nhe%2Fa1VhjE5RmdoVqg3KE1GjMH4X6z%2BKuCiYpHvA4xEnwn%2FK4%2F6O&X-Amz-Signature=5e2bdff6666c1cc24beebc6993ce672f55428fa659ac1e35ad0dcdafe84922b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
