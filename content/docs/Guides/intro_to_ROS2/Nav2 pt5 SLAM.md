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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634GRHXAT%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIAoZ9A1T%2FF1aC5CvDfSvvISO4ugrZiizfiSKglZfBRA5AiEAwrEnBW6tG0584IaEpsNV1XTItgJJy%2BquEfq2H9fbXQcqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGelP7zO2Ek9ZrVhqyrcA8B0BFz%2Fw7Ha%2FhXGZtLIHwwEZIaua1I63IsUcGoCbSfhmB6f90yUTvIS%2FzhgOiKLeo7fTyN46m%2BTr6M1pIppivtmNqUmCWqGorQjPr8X4l%2Bqln51%2B%2FgXYcKRV%2ByZQdbEvkzaw%2FzA%2Bb9z2cdIdn2l%2BaJ%2BC7FeyoPxbs5THUB9qVkuZKnPWkdcpTF1GZoWkMJ7yFhxrqZbbRiIus170FIPBryhUYyPwJFCF7k5KpTZRLQkzL5ZXIB9S5tohsgD3M%2FfOd8JaqP8t2sv%2B9G0ZOzNvOyV8grEVbAPIjsbA8wYZnDcg9jThPIXqn3MUNr1rzcqR8Bao2mnAEeat6iTcvpli%2BbAoTS4PLuTE8F00e%2B7FoGIsk03YXD74ffPvjyBCH2y64wKITr9oyUb4Gul9l34xUSD8l4bqqTnitErJXjckyiX5TpDLbj728uqkTYoadRSVYA0okptHHSN%2B961Ybi4kp2yrCjh%2BTQ5LNNXdp1sC9c1qCS78UpWMfFhuHnA%2FL2FY9S1Kg1ReVSfMz%2B%2FEpw7s5qSSGZPpGvF5JOVV9s59jdJolhD9f0a9PgVOCn%2FntmoS74VRcPP8y4QtZKJx4KBX6QdGA7wbaD7oP9rqKpga9cNu3FJ5w%2BhC2pZBifrMO%2Fwp8YGOqUBywtzWM5%2BBABZg%2F06UEn%2BlvoqAL1STyybF0ExOedz2s9zEuWy1TnYys2vVzHZXzu2eMXr%2FC7g9i37sDD2O4F0Cvoddj624oqS6RQPzXj8sL0wwipjiaVtApAgvwIxyPndRpYivS99IV%2FpRUj%2FkGjQObiE26zf%2BVQkjf1Fsr3jjil1GAarFYWtqlnlFHDZuyon%2FKMYTbZPftJnZk8UYcRSxNNOVEuV&X-Amz-Signature=7d9abba6f1580212e90e8ead626d10ff0ad6312d531b14d128a8854f0c9d0265&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634GRHXAT%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIAoZ9A1T%2FF1aC5CvDfSvvISO4ugrZiizfiSKglZfBRA5AiEAwrEnBW6tG0584IaEpsNV1XTItgJJy%2BquEfq2H9fbXQcqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGelP7zO2Ek9ZrVhqyrcA8B0BFz%2Fw7Ha%2FhXGZtLIHwwEZIaua1I63IsUcGoCbSfhmB6f90yUTvIS%2FzhgOiKLeo7fTyN46m%2BTr6M1pIppivtmNqUmCWqGorQjPr8X4l%2Bqln51%2B%2FgXYcKRV%2ByZQdbEvkzaw%2FzA%2Bb9z2cdIdn2l%2BaJ%2BC7FeyoPxbs5THUB9qVkuZKnPWkdcpTF1GZoWkMJ7yFhxrqZbbRiIus170FIPBryhUYyPwJFCF7k5KpTZRLQkzL5ZXIB9S5tohsgD3M%2FfOd8JaqP8t2sv%2B9G0ZOzNvOyV8grEVbAPIjsbA8wYZnDcg9jThPIXqn3MUNr1rzcqR8Bao2mnAEeat6iTcvpli%2BbAoTS4PLuTE8F00e%2B7FoGIsk03YXD74ffPvjyBCH2y64wKITr9oyUb4Gul9l34xUSD8l4bqqTnitErJXjckyiX5TpDLbj728uqkTYoadRSVYA0okptHHSN%2B961Ybi4kp2yrCjh%2BTQ5LNNXdp1sC9c1qCS78UpWMfFhuHnA%2FL2FY9S1Kg1ReVSfMz%2B%2FEpw7s5qSSGZPpGvF5JOVV9s59jdJolhD9f0a9PgVOCn%2FntmoS74VRcPP8y4QtZKJx4KBX6QdGA7wbaD7oP9rqKpga9cNu3FJ5w%2BhC2pZBifrMO%2Fwp8YGOqUBywtzWM5%2BBABZg%2F06UEn%2BlvoqAL1STyybF0ExOedz2s9zEuWy1TnYys2vVzHZXzu2eMXr%2FC7g9i37sDD2O4F0Cvoddj624oqS6RQPzXj8sL0wwipjiaVtApAgvwIxyPndRpYivS99IV%2FpRUj%2FkGjQObiE26zf%2BVQkjf1Fsr3jjil1GAarFYWtqlnlFHDZuyon%2FKMYTbZPftJnZk8UYcRSxNNOVEuV&X-Amz-Signature=6ee5d413562b6534518c98d4a7d23b49d07c573a798a10d925073199ee091036&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634GRHXAT%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIAoZ9A1T%2FF1aC5CvDfSvvISO4ugrZiizfiSKglZfBRA5AiEAwrEnBW6tG0584IaEpsNV1XTItgJJy%2BquEfq2H9fbXQcqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGelP7zO2Ek9ZrVhqyrcA8B0BFz%2Fw7Ha%2FhXGZtLIHwwEZIaua1I63IsUcGoCbSfhmB6f90yUTvIS%2FzhgOiKLeo7fTyN46m%2BTr6M1pIppivtmNqUmCWqGorQjPr8X4l%2Bqln51%2B%2FgXYcKRV%2ByZQdbEvkzaw%2FzA%2Bb9z2cdIdn2l%2BaJ%2BC7FeyoPxbs5THUB9qVkuZKnPWkdcpTF1GZoWkMJ7yFhxrqZbbRiIus170FIPBryhUYyPwJFCF7k5KpTZRLQkzL5ZXIB9S5tohsgD3M%2FfOd8JaqP8t2sv%2B9G0ZOzNvOyV8grEVbAPIjsbA8wYZnDcg9jThPIXqn3MUNr1rzcqR8Bao2mnAEeat6iTcvpli%2BbAoTS4PLuTE8F00e%2B7FoGIsk03YXD74ffPvjyBCH2y64wKITr9oyUb4Gul9l34xUSD8l4bqqTnitErJXjckyiX5TpDLbj728uqkTYoadRSVYA0okptHHSN%2B961Ybi4kp2yrCjh%2BTQ5LNNXdp1sC9c1qCS78UpWMfFhuHnA%2FL2FY9S1Kg1ReVSfMz%2B%2FEpw7s5qSSGZPpGvF5JOVV9s59jdJolhD9f0a9PgVOCn%2FntmoS74VRcPP8y4QtZKJx4KBX6QdGA7wbaD7oP9rqKpga9cNu3FJ5w%2BhC2pZBifrMO%2Fwp8YGOqUBywtzWM5%2BBABZg%2F06UEn%2BlvoqAL1STyybF0ExOedz2s9zEuWy1TnYys2vVzHZXzu2eMXr%2FC7g9i37sDD2O4F0Cvoddj624oqS6RQPzXj8sL0wwipjiaVtApAgvwIxyPndRpYivS99IV%2FpRUj%2FkGjQObiE26zf%2BVQkjf1Fsr3jjil1GAarFYWtqlnlFHDZuyon%2FKMYTbZPftJnZk8UYcRSxNNOVEuV&X-Amz-Signature=5e3ffa990e6327b0cc1483bc3721b3b27120f2b600cc85321fe5ba49f27d1c0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634GRHXAT%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIAoZ9A1T%2FF1aC5CvDfSvvISO4ugrZiizfiSKglZfBRA5AiEAwrEnBW6tG0584IaEpsNV1XTItgJJy%2BquEfq2H9fbXQcqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGelP7zO2Ek9ZrVhqyrcA8B0BFz%2Fw7Ha%2FhXGZtLIHwwEZIaua1I63IsUcGoCbSfhmB6f90yUTvIS%2FzhgOiKLeo7fTyN46m%2BTr6M1pIppivtmNqUmCWqGorQjPr8X4l%2Bqln51%2B%2FgXYcKRV%2ByZQdbEvkzaw%2FzA%2Bb9z2cdIdn2l%2BaJ%2BC7FeyoPxbs5THUB9qVkuZKnPWkdcpTF1GZoWkMJ7yFhxrqZbbRiIus170FIPBryhUYyPwJFCF7k5KpTZRLQkzL5ZXIB9S5tohsgD3M%2FfOd8JaqP8t2sv%2B9G0ZOzNvOyV8grEVbAPIjsbA8wYZnDcg9jThPIXqn3MUNr1rzcqR8Bao2mnAEeat6iTcvpli%2BbAoTS4PLuTE8F00e%2B7FoGIsk03YXD74ffPvjyBCH2y64wKITr9oyUb4Gul9l34xUSD8l4bqqTnitErJXjckyiX5TpDLbj728uqkTYoadRSVYA0okptHHSN%2B961Ybi4kp2yrCjh%2BTQ5LNNXdp1sC9c1qCS78UpWMfFhuHnA%2FL2FY9S1Kg1ReVSfMz%2B%2FEpw7s5qSSGZPpGvF5JOVV9s59jdJolhD9f0a9PgVOCn%2FntmoS74VRcPP8y4QtZKJx4KBX6QdGA7wbaD7oP9rqKpga9cNu3FJ5w%2BhC2pZBifrMO%2Fwp8YGOqUBywtzWM5%2BBABZg%2F06UEn%2BlvoqAL1STyybF0ExOedz2s9zEuWy1TnYys2vVzHZXzu2eMXr%2FC7g9i37sDD2O4F0Cvoddj624oqS6RQPzXj8sL0wwipjiaVtApAgvwIxyPndRpYivS99IV%2FpRUj%2FkGjQObiE26zf%2BVQkjf1Fsr3jjil1GAarFYWtqlnlFHDZuyon%2FKMYTbZPftJnZk8UYcRSxNNOVEuV&X-Amz-Signature=022f2411899a9a4b8a8f086ab2ffbe491a99b30ef52b683fcc743bd30244e900&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634GRHXAT%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIAoZ9A1T%2FF1aC5CvDfSvvISO4ugrZiizfiSKglZfBRA5AiEAwrEnBW6tG0584IaEpsNV1XTItgJJy%2BquEfq2H9fbXQcqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGelP7zO2Ek9ZrVhqyrcA8B0BFz%2Fw7Ha%2FhXGZtLIHwwEZIaua1I63IsUcGoCbSfhmB6f90yUTvIS%2FzhgOiKLeo7fTyN46m%2BTr6M1pIppivtmNqUmCWqGorQjPr8X4l%2Bqln51%2B%2FgXYcKRV%2ByZQdbEvkzaw%2FzA%2Bb9z2cdIdn2l%2BaJ%2BC7FeyoPxbs5THUB9qVkuZKnPWkdcpTF1GZoWkMJ7yFhxrqZbbRiIus170FIPBryhUYyPwJFCF7k5KpTZRLQkzL5ZXIB9S5tohsgD3M%2FfOd8JaqP8t2sv%2B9G0ZOzNvOyV8grEVbAPIjsbA8wYZnDcg9jThPIXqn3MUNr1rzcqR8Bao2mnAEeat6iTcvpli%2BbAoTS4PLuTE8F00e%2B7FoGIsk03YXD74ffPvjyBCH2y64wKITr9oyUb4Gul9l34xUSD8l4bqqTnitErJXjckyiX5TpDLbj728uqkTYoadRSVYA0okptHHSN%2B961Ybi4kp2yrCjh%2BTQ5LNNXdp1sC9c1qCS78UpWMfFhuHnA%2FL2FY9S1Kg1ReVSfMz%2B%2FEpw7s5qSSGZPpGvF5JOVV9s59jdJolhD9f0a9PgVOCn%2FntmoS74VRcPP8y4QtZKJx4KBX6QdGA7wbaD7oP9rqKpga9cNu3FJ5w%2BhC2pZBifrMO%2Fwp8YGOqUBywtzWM5%2BBABZg%2F06UEn%2BlvoqAL1STyybF0ExOedz2s9zEuWy1TnYys2vVzHZXzu2eMXr%2FC7g9i37sDD2O4F0Cvoddj624oqS6RQPzXj8sL0wwipjiaVtApAgvwIxyPndRpYivS99IV%2FpRUj%2FkGjQObiE26zf%2BVQkjf1Fsr3jjil1GAarFYWtqlnlFHDZuyon%2FKMYTbZPftJnZk8UYcRSxNNOVEuV&X-Amz-Signature=9f8768b03024a6bd6e41543fb1cdfc4ec17a2000d3b7f328f8ae97e5049ada59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634GRHXAT%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIAoZ9A1T%2FF1aC5CvDfSvvISO4ugrZiizfiSKglZfBRA5AiEAwrEnBW6tG0584IaEpsNV1XTItgJJy%2BquEfq2H9fbXQcqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGelP7zO2Ek9ZrVhqyrcA8B0BFz%2Fw7Ha%2FhXGZtLIHwwEZIaua1I63IsUcGoCbSfhmB6f90yUTvIS%2FzhgOiKLeo7fTyN46m%2BTr6M1pIppivtmNqUmCWqGorQjPr8X4l%2Bqln51%2B%2FgXYcKRV%2ByZQdbEvkzaw%2FzA%2Bb9z2cdIdn2l%2BaJ%2BC7FeyoPxbs5THUB9qVkuZKnPWkdcpTF1GZoWkMJ7yFhxrqZbbRiIus170FIPBryhUYyPwJFCF7k5KpTZRLQkzL5ZXIB9S5tohsgD3M%2FfOd8JaqP8t2sv%2B9G0ZOzNvOyV8grEVbAPIjsbA8wYZnDcg9jThPIXqn3MUNr1rzcqR8Bao2mnAEeat6iTcvpli%2BbAoTS4PLuTE8F00e%2B7FoGIsk03YXD74ffPvjyBCH2y64wKITr9oyUb4Gul9l34xUSD8l4bqqTnitErJXjckyiX5TpDLbj728uqkTYoadRSVYA0okptHHSN%2B961Ybi4kp2yrCjh%2BTQ5LNNXdp1sC9c1qCS78UpWMfFhuHnA%2FL2FY9S1Kg1ReVSfMz%2B%2FEpw7s5qSSGZPpGvF5JOVV9s59jdJolhD9f0a9PgVOCn%2FntmoS74VRcPP8y4QtZKJx4KBX6QdGA7wbaD7oP9rqKpga9cNu3FJ5w%2BhC2pZBifrMO%2Fwp8YGOqUBywtzWM5%2BBABZg%2F06UEn%2BlvoqAL1STyybF0ExOedz2s9zEuWy1TnYys2vVzHZXzu2eMXr%2FC7g9i37sDD2O4F0Cvoddj624oqS6RQPzXj8sL0wwipjiaVtApAgvwIxyPndRpYivS99IV%2FpRUj%2FkGjQObiE26zf%2BVQkjf1Fsr3jjil1GAarFYWtqlnlFHDZuyon%2FKMYTbZPftJnZk8UYcRSxNNOVEuV&X-Amz-Signature=a98fe6c31d0317dd551cae13c302d547ccb67985d7b4be85ac59c7e3ed4076e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634GRHXAT%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIAoZ9A1T%2FF1aC5CvDfSvvISO4ugrZiizfiSKglZfBRA5AiEAwrEnBW6tG0584IaEpsNV1XTItgJJy%2BquEfq2H9fbXQcqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGelP7zO2Ek9ZrVhqyrcA8B0BFz%2Fw7Ha%2FhXGZtLIHwwEZIaua1I63IsUcGoCbSfhmB6f90yUTvIS%2FzhgOiKLeo7fTyN46m%2BTr6M1pIppivtmNqUmCWqGorQjPr8X4l%2Bqln51%2B%2FgXYcKRV%2ByZQdbEvkzaw%2FzA%2Bb9z2cdIdn2l%2BaJ%2BC7FeyoPxbs5THUB9qVkuZKnPWkdcpTF1GZoWkMJ7yFhxrqZbbRiIus170FIPBryhUYyPwJFCF7k5KpTZRLQkzL5ZXIB9S5tohsgD3M%2FfOd8JaqP8t2sv%2B9G0ZOzNvOyV8grEVbAPIjsbA8wYZnDcg9jThPIXqn3MUNr1rzcqR8Bao2mnAEeat6iTcvpli%2BbAoTS4PLuTE8F00e%2B7FoGIsk03YXD74ffPvjyBCH2y64wKITr9oyUb4Gul9l34xUSD8l4bqqTnitErJXjckyiX5TpDLbj728uqkTYoadRSVYA0okptHHSN%2B961Ybi4kp2yrCjh%2BTQ5LNNXdp1sC9c1qCS78UpWMfFhuHnA%2FL2FY9S1Kg1ReVSfMz%2B%2FEpw7s5qSSGZPpGvF5JOVV9s59jdJolhD9f0a9PgVOCn%2FntmoS74VRcPP8y4QtZKJx4KBX6QdGA7wbaD7oP9rqKpga9cNu3FJ5w%2BhC2pZBifrMO%2Fwp8YGOqUBywtzWM5%2BBABZg%2F06UEn%2BlvoqAL1STyybF0ExOedz2s9zEuWy1TnYys2vVzHZXzu2eMXr%2FC7g9i37sDD2O4F0Cvoddj624oqS6RQPzXj8sL0wwipjiaVtApAgvwIxyPndRpYivS99IV%2FpRUj%2FkGjQObiE26zf%2BVQkjf1Fsr3jjil1GAarFYWtqlnlFHDZuyon%2FKMYTbZPftJnZk8UYcRSxNNOVEuV&X-Amz-Signature=11d87160c46ecaf2c9c3ffe347c9d7b4abbda340498cc007cf8470cabc5c04bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634GRHXAT%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIAoZ9A1T%2FF1aC5CvDfSvvISO4ugrZiizfiSKglZfBRA5AiEAwrEnBW6tG0584IaEpsNV1XTItgJJy%2BquEfq2H9fbXQcqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGelP7zO2Ek9ZrVhqyrcA8B0BFz%2Fw7Ha%2FhXGZtLIHwwEZIaua1I63IsUcGoCbSfhmB6f90yUTvIS%2FzhgOiKLeo7fTyN46m%2BTr6M1pIppivtmNqUmCWqGorQjPr8X4l%2Bqln51%2B%2FgXYcKRV%2ByZQdbEvkzaw%2FzA%2Bb9z2cdIdn2l%2BaJ%2BC7FeyoPxbs5THUB9qVkuZKnPWkdcpTF1GZoWkMJ7yFhxrqZbbRiIus170FIPBryhUYyPwJFCF7k5KpTZRLQkzL5ZXIB9S5tohsgD3M%2FfOd8JaqP8t2sv%2B9G0ZOzNvOyV8grEVbAPIjsbA8wYZnDcg9jThPIXqn3MUNr1rzcqR8Bao2mnAEeat6iTcvpli%2BbAoTS4PLuTE8F00e%2B7FoGIsk03YXD74ffPvjyBCH2y64wKITr9oyUb4Gul9l34xUSD8l4bqqTnitErJXjckyiX5TpDLbj728uqkTYoadRSVYA0okptHHSN%2B961Ybi4kp2yrCjh%2BTQ5LNNXdp1sC9c1qCS78UpWMfFhuHnA%2FL2FY9S1Kg1ReVSfMz%2B%2FEpw7s5qSSGZPpGvF5JOVV9s59jdJolhD9f0a9PgVOCn%2FntmoS74VRcPP8y4QtZKJx4KBX6QdGA7wbaD7oP9rqKpga9cNu3FJ5w%2BhC2pZBifrMO%2Fwp8YGOqUBywtzWM5%2BBABZg%2F06UEn%2BlvoqAL1STyybF0ExOedz2s9zEuWy1TnYys2vVzHZXzu2eMXr%2FC7g9i37sDD2O4F0Cvoddj624oqS6RQPzXj8sL0wwipjiaVtApAgvwIxyPndRpYivS99IV%2FpRUj%2FkGjQObiE26zf%2BVQkjf1Fsr3jjil1GAarFYWtqlnlFHDZuyon%2FKMYTbZPftJnZk8UYcRSxNNOVEuV&X-Amz-Signature=b5106163d1bf504d53177264e00c23b5e981041c4747dc0b687bd6437eb737e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634GRHXAT%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIAoZ9A1T%2FF1aC5CvDfSvvISO4ugrZiizfiSKglZfBRA5AiEAwrEnBW6tG0584IaEpsNV1XTItgJJy%2BquEfq2H9fbXQcqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGelP7zO2Ek9ZrVhqyrcA8B0BFz%2Fw7Ha%2FhXGZtLIHwwEZIaua1I63IsUcGoCbSfhmB6f90yUTvIS%2FzhgOiKLeo7fTyN46m%2BTr6M1pIppivtmNqUmCWqGorQjPr8X4l%2Bqln51%2B%2FgXYcKRV%2ByZQdbEvkzaw%2FzA%2Bb9z2cdIdn2l%2BaJ%2BC7FeyoPxbs5THUB9qVkuZKnPWkdcpTF1GZoWkMJ7yFhxrqZbbRiIus170FIPBryhUYyPwJFCF7k5KpTZRLQkzL5ZXIB9S5tohsgD3M%2FfOd8JaqP8t2sv%2B9G0ZOzNvOyV8grEVbAPIjsbA8wYZnDcg9jThPIXqn3MUNr1rzcqR8Bao2mnAEeat6iTcvpli%2BbAoTS4PLuTE8F00e%2B7FoGIsk03YXD74ffPvjyBCH2y64wKITr9oyUb4Gul9l34xUSD8l4bqqTnitErJXjckyiX5TpDLbj728uqkTYoadRSVYA0okptHHSN%2B961Ybi4kp2yrCjh%2BTQ5LNNXdp1sC9c1qCS78UpWMfFhuHnA%2FL2FY9S1Kg1ReVSfMz%2B%2FEpw7s5qSSGZPpGvF5JOVV9s59jdJolhD9f0a9PgVOCn%2FntmoS74VRcPP8y4QtZKJx4KBX6QdGA7wbaD7oP9rqKpga9cNu3FJ5w%2BhC2pZBifrMO%2Fwp8YGOqUBywtzWM5%2BBABZg%2F06UEn%2BlvoqAL1STyybF0ExOedz2s9zEuWy1TnYys2vVzHZXzu2eMXr%2FC7g9i37sDD2O4F0Cvoddj624oqS6RQPzXj8sL0wwipjiaVtApAgvwIxyPndRpYivS99IV%2FpRUj%2FkGjQObiE26zf%2BVQkjf1Fsr3jjil1GAarFYWtqlnlFHDZuyon%2FKMYTbZPftJnZk8UYcRSxNNOVEuV&X-Amz-Signature=eda4c469604487aa1c6cd1c90f330299fe7e53468683351b3a43c994c84add97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634GRHXAT%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIAoZ9A1T%2FF1aC5CvDfSvvISO4ugrZiizfiSKglZfBRA5AiEAwrEnBW6tG0584IaEpsNV1XTItgJJy%2BquEfq2H9fbXQcqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGelP7zO2Ek9ZrVhqyrcA8B0BFz%2Fw7Ha%2FhXGZtLIHwwEZIaua1I63IsUcGoCbSfhmB6f90yUTvIS%2FzhgOiKLeo7fTyN46m%2BTr6M1pIppivtmNqUmCWqGorQjPr8X4l%2Bqln51%2B%2FgXYcKRV%2ByZQdbEvkzaw%2FzA%2Bb9z2cdIdn2l%2BaJ%2BC7FeyoPxbs5THUB9qVkuZKnPWkdcpTF1GZoWkMJ7yFhxrqZbbRiIus170FIPBryhUYyPwJFCF7k5KpTZRLQkzL5ZXIB9S5tohsgD3M%2FfOd8JaqP8t2sv%2B9G0ZOzNvOyV8grEVbAPIjsbA8wYZnDcg9jThPIXqn3MUNr1rzcqR8Bao2mnAEeat6iTcvpli%2BbAoTS4PLuTE8F00e%2B7FoGIsk03YXD74ffPvjyBCH2y64wKITr9oyUb4Gul9l34xUSD8l4bqqTnitErJXjckyiX5TpDLbj728uqkTYoadRSVYA0okptHHSN%2B961Ybi4kp2yrCjh%2BTQ5LNNXdp1sC9c1qCS78UpWMfFhuHnA%2FL2FY9S1Kg1ReVSfMz%2B%2FEpw7s5qSSGZPpGvF5JOVV9s59jdJolhD9f0a9PgVOCn%2FntmoS74VRcPP8y4QtZKJx4KBX6QdGA7wbaD7oP9rqKpga9cNu3FJ5w%2BhC2pZBifrMO%2Fwp8YGOqUBywtzWM5%2BBABZg%2F06UEn%2BlvoqAL1STyybF0ExOedz2s9zEuWy1TnYys2vVzHZXzu2eMXr%2FC7g9i37sDD2O4F0Cvoddj624oqS6RQPzXj8sL0wwipjiaVtApAgvwIxyPndRpYivS99IV%2FpRUj%2FkGjQObiE26zf%2BVQkjf1Fsr3jjil1GAarFYWtqlnlFHDZuyon%2FKMYTbZPftJnZk8UYcRSxNNOVEuV&X-Amz-Signature=fdf392bf8a4769449762de0d207e152e5230b431c137d184021d76566437182b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634GRHXAT%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIAoZ9A1T%2FF1aC5CvDfSvvISO4ugrZiizfiSKglZfBRA5AiEAwrEnBW6tG0584IaEpsNV1XTItgJJy%2BquEfq2H9fbXQcqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGelP7zO2Ek9ZrVhqyrcA8B0BFz%2Fw7Ha%2FhXGZtLIHwwEZIaua1I63IsUcGoCbSfhmB6f90yUTvIS%2FzhgOiKLeo7fTyN46m%2BTr6M1pIppivtmNqUmCWqGorQjPr8X4l%2Bqln51%2B%2FgXYcKRV%2ByZQdbEvkzaw%2FzA%2Bb9z2cdIdn2l%2BaJ%2BC7FeyoPxbs5THUB9qVkuZKnPWkdcpTF1GZoWkMJ7yFhxrqZbbRiIus170FIPBryhUYyPwJFCF7k5KpTZRLQkzL5ZXIB9S5tohsgD3M%2FfOd8JaqP8t2sv%2B9G0ZOzNvOyV8grEVbAPIjsbA8wYZnDcg9jThPIXqn3MUNr1rzcqR8Bao2mnAEeat6iTcvpli%2BbAoTS4PLuTE8F00e%2B7FoGIsk03YXD74ffPvjyBCH2y64wKITr9oyUb4Gul9l34xUSD8l4bqqTnitErJXjckyiX5TpDLbj728uqkTYoadRSVYA0okptHHSN%2B961Ybi4kp2yrCjh%2BTQ5LNNXdp1sC9c1qCS78UpWMfFhuHnA%2FL2FY9S1Kg1ReVSfMz%2B%2FEpw7s5qSSGZPpGvF5JOVV9s59jdJolhD9f0a9PgVOCn%2FntmoS74VRcPP8y4QtZKJx4KBX6QdGA7wbaD7oP9rqKpga9cNu3FJ5w%2BhC2pZBifrMO%2Fwp8YGOqUBywtzWM5%2BBABZg%2F06UEn%2BlvoqAL1STyybF0ExOedz2s9zEuWy1TnYys2vVzHZXzu2eMXr%2FC7g9i37sDD2O4F0Cvoddj624oqS6RQPzXj8sL0wwipjiaVtApAgvwIxyPndRpYivS99IV%2FpRUj%2FkGjQObiE26zf%2BVQkjf1Fsr3jjil1GAarFYWtqlnlFHDZuyon%2FKMYTbZPftJnZk8UYcRSxNNOVEuV&X-Amz-Signature=d3ecf410bb7138786d30abecc01d1e175f12f0481d87e5c42ecaeefe39164220&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634GRHXAT%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIAoZ9A1T%2FF1aC5CvDfSvvISO4ugrZiizfiSKglZfBRA5AiEAwrEnBW6tG0584IaEpsNV1XTItgJJy%2BquEfq2H9fbXQcqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGelP7zO2Ek9ZrVhqyrcA8B0BFz%2Fw7Ha%2FhXGZtLIHwwEZIaua1I63IsUcGoCbSfhmB6f90yUTvIS%2FzhgOiKLeo7fTyN46m%2BTr6M1pIppivtmNqUmCWqGorQjPr8X4l%2Bqln51%2B%2FgXYcKRV%2ByZQdbEvkzaw%2FzA%2Bb9z2cdIdn2l%2BaJ%2BC7FeyoPxbs5THUB9qVkuZKnPWkdcpTF1GZoWkMJ7yFhxrqZbbRiIus170FIPBryhUYyPwJFCF7k5KpTZRLQkzL5ZXIB9S5tohsgD3M%2FfOd8JaqP8t2sv%2B9G0ZOzNvOyV8grEVbAPIjsbA8wYZnDcg9jThPIXqn3MUNr1rzcqR8Bao2mnAEeat6iTcvpli%2BbAoTS4PLuTE8F00e%2B7FoGIsk03YXD74ffPvjyBCH2y64wKITr9oyUb4Gul9l34xUSD8l4bqqTnitErJXjckyiX5TpDLbj728uqkTYoadRSVYA0okptHHSN%2B961Ybi4kp2yrCjh%2BTQ5LNNXdp1sC9c1qCS78UpWMfFhuHnA%2FL2FY9S1Kg1ReVSfMz%2B%2FEpw7s5qSSGZPpGvF5JOVV9s59jdJolhD9f0a9PgVOCn%2FntmoS74VRcPP8y4QtZKJx4KBX6QdGA7wbaD7oP9rqKpga9cNu3FJ5w%2BhC2pZBifrMO%2Fwp8YGOqUBywtzWM5%2BBABZg%2F06UEn%2BlvoqAL1STyybF0ExOedz2s9zEuWy1TnYys2vVzHZXzu2eMXr%2FC7g9i37sDD2O4F0Cvoddj624oqS6RQPzXj8sL0wwipjiaVtApAgvwIxyPndRpYivS99IV%2FpRUj%2FkGjQObiE26zf%2BVQkjf1Fsr3jjil1GAarFYWtqlnlFHDZuyon%2FKMYTbZPftJnZk8UYcRSxNNOVEuV&X-Amz-Signature=b3ed7d949b6169bc71568d0dc2f760e04757148bbbf2b7441ea3e220e7521906&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634GRHXAT%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIAoZ9A1T%2FF1aC5CvDfSvvISO4ugrZiizfiSKglZfBRA5AiEAwrEnBW6tG0584IaEpsNV1XTItgJJy%2BquEfq2H9fbXQcqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGelP7zO2Ek9ZrVhqyrcA8B0BFz%2Fw7Ha%2FhXGZtLIHwwEZIaua1I63IsUcGoCbSfhmB6f90yUTvIS%2FzhgOiKLeo7fTyN46m%2BTr6M1pIppivtmNqUmCWqGorQjPr8X4l%2Bqln51%2B%2FgXYcKRV%2ByZQdbEvkzaw%2FzA%2Bb9z2cdIdn2l%2BaJ%2BC7FeyoPxbs5THUB9qVkuZKnPWkdcpTF1GZoWkMJ7yFhxrqZbbRiIus170FIPBryhUYyPwJFCF7k5KpTZRLQkzL5ZXIB9S5tohsgD3M%2FfOd8JaqP8t2sv%2B9G0ZOzNvOyV8grEVbAPIjsbA8wYZnDcg9jThPIXqn3MUNr1rzcqR8Bao2mnAEeat6iTcvpli%2BbAoTS4PLuTE8F00e%2B7FoGIsk03YXD74ffPvjyBCH2y64wKITr9oyUb4Gul9l34xUSD8l4bqqTnitErJXjckyiX5TpDLbj728uqkTYoadRSVYA0okptHHSN%2B961Ybi4kp2yrCjh%2BTQ5LNNXdp1sC9c1qCS78UpWMfFhuHnA%2FL2FY9S1Kg1ReVSfMz%2B%2FEpw7s5qSSGZPpGvF5JOVV9s59jdJolhD9f0a9PgVOCn%2FntmoS74VRcPP8y4QtZKJx4KBX6QdGA7wbaD7oP9rqKpga9cNu3FJ5w%2BhC2pZBifrMO%2Fwp8YGOqUBywtzWM5%2BBABZg%2F06UEn%2BlvoqAL1STyybF0ExOedz2s9zEuWy1TnYys2vVzHZXzu2eMXr%2FC7g9i37sDD2O4F0Cvoddj624oqS6RQPzXj8sL0wwipjiaVtApAgvwIxyPndRpYivS99IV%2FpRUj%2FkGjQObiE26zf%2BVQkjf1Fsr3jjil1GAarFYWtqlnlFHDZuyon%2FKMYTbZPftJnZk8UYcRSxNNOVEuV&X-Amz-Signature=10b7cc8a5228fcd0aa2ddb2c65e4a8c97d1d50617c07aba832598f99c0fd3a71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634GRHXAT%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIAoZ9A1T%2FF1aC5CvDfSvvISO4ugrZiizfiSKglZfBRA5AiEAwrEnBW6tG0584IaEpsNV1XTItgJJy%2BquEfq2H9fbXQcqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGelP7zO2Ek9ZrVhqyrcA8B0BFz%2Fw7Ha%2FhXGZtLIHwwEZIaua1I63IsUcGoCbSfhmB6f90yUTvIS%2FzhgOiKLeo7fTyN46m%2BTr6M1pIppivtmNqUmCWqGorQjPr8X4l%2Bqln51%2B%2FgXYcKRV%2ByZQdbEvkzaw%2FzA%2Bb9z2cdIdn2l%2BaJ%2BC7FeyoPxbs5THUB9qVkuZKnPWkdcpTF1GZoWkMJ7yFhxrqZbbRiIus170FIPBryhUYyPwJFCF7k5KpTZRLQkzL5ZXIB9S5tohsgD3M%2FfOd8JaqP8t2sv%2B9G0ZOzNvOyV8grEVbAPIjsbA8wYZnDcg9jThPIXqn3MUNr1rzcqR8Bao2mnAEeat6iTcvpli%2BbAoTS4PLuTE8F00e%2B7FoGIsk03YXD74ffPvjyBCH2y64wKITr9oyUb4Gul9l34xUSD8l4bqqTnitErJXjckyiX5TpDLbj728uqkTYoadRSVYA0okptHHSN%2B961Ybi4kp2yrCjh%2BTQ5LNNXdp1sC9c1qCS78UpWMfFhuHnA%2FL2FY9S1Kg1ReVSfMz%2B%2FEpw7s5qSSGZPpGvF5JOVV9s59jdJolhD9f0a9PgVOCn%2FntmoS74VRcPP8y4QtZKJx4KBX6QdGA7wbaD7oP9rqKpga9cNu3FJ5w%2BhC2pZBifrMO%2Fwp8YGOqUBywtzWM5%2BBABZg%2F06UEn%2BlvoqAL1STyybF0ExOedz2s9zEuWy1TnYys2vVzHZXzu2eMXr%2FC7g9i37sDD2O4F0Cvoddj624oqS6RQPzXj8sL0wwipjiaVtApAgvwIxyPndRpYivS99IV%2FpRUj%2FkGjQObiE26zf%2BVQkjf1Fsr3jjil1GAarFYWtqlnlFHDZuyon%2FKMYTbZPftJnZk8UYcRSxNNOVEuV&X-Amz-Signature=5fcb2276d79a0d5ca5c310924f9b86863ffe6e74a2c89af0efba9671d253f079&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
