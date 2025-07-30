---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-30T06:25:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAJFEZ6E%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKhr0TBcIJk9hlq6doxpbp%2BXLkdnL0f4AsuFP3F4XpUAiA4XulEGJdpehuM%2F%2Fh9PuE7Y1f%2Fg7jdgRuffQAg3HBO7iqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1uufdrpgWqg7ovYtKtwD2CSwXoNa1AXUN%2FRLxh1QpawgP7p9WgjBSBJYjMh1yOIsLD1oUnKN2MYw6svCmpm2DN8a3hL2mUpq%2B%2Bk%2BPQnBuZIVTTlbBKz417hF9y5ItmanzfCmim81yYj2wEUA2MlHiubcMkpDBfKC1mn%2BuhcwjyKO6KJMuNX6Kth8u5ERrlckypxiysuHk2B1TUpH0UYqXxKYPRZwxJ0942jCxsNbKPEUWgMae9MnUguCcHFpFBhLA1zlY8u7mHnL%2BYHmhkkDk1Tj9bPx9Yq%2FF37a7CogzJVu70y4gFtckllsrhSZmMqZxkL34vqp%2FT%2BfWZ6kZhP4SADP9GKIulStvsj5ao%2FhGkiI0vf0AKB4oitzOzOziwc0aL3%2B%2FmsjRTRkYDyUZiHK8LvbeZ6jxtElbZo59N%2B8v2goTbyfhIbHgeQCB%2BqSZ6FLwKVw8HREeaFB7C1zE4a8p1U5vKt2zGnKSlwnjNDNaYXsHwqMEomrufvpFiVoJlIXHNr%2BQmNbDtVC5J0aHkFryinFYdo3SH0%2FAggo1pUh%2Fbf8JCzxAdx9AYG8Ie0X2E3HPBRnvWZ9FHHncuNQrQJZRTqTUplX3yY8m8ja2HTOUgLjYMJyi%2BB1CBcszv97TdWKdI2kZgiApicMV2swlbupxAY6pgHh16WO%2FKkf%2Fl6gD9Qq1elGRkzZ11xGtr%2Btx%2F0YnzIpNW8SvK9LbMn7vYDgdrk26yh465vwTu0ycB63PgKT4uHZLotI3yzXlms4Z8a%2BVNqt%2Bzzd2P9Fyn%2BdJLtj2SrfBjW8SpvT8LU1uMXsQTEAINEfkRbUliEM4kcBzDiC7NRKV9eY7SmpunQqclHjSPZd9pX%2BtZwdJG%2Bwk6pdXHCOqcfCiTNk17sd&X-Amz-Signature=23b6335248c56dbeb57c29ad547cb1b222707d03ab2df40abad892195f8b58db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAJFEZ6E%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKhr0TBcIJk9hlq6doxpbp%2BXLkdnL0f4AsuFP3F4XpUAiA4XulEGJdpehuM%2F%2Fh9PuE7Y1f%2Fg7jdgRuffQAg3HBO7iqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1uufdrpgWqg7ovYtKtwD2CSwXoNa1AXUN%2FRLxh1QpawgP7p9WgjBSBJYjMh1yOIsLD1oUnKN2MYw6svCmpm2DN8a3hL2mUpq%2B%2Bk%2BPQnBuZIVTTlbBKz417hF9y5ItmanzfCmim81yYj2wEUA2MlHiubcMkpDBfKC1mn%2BuhcwjyKO6KJMuNX6Kth8u5ERrlckypxiysuHk2B1TUpH0UYqXxKYPRZwxJ0942jCxsNbKPEUWgMae9MnUguCcHFpFBhLA1zlY8u7mHnL%2BYHmhkkDk1Tj9bPx9Yq%2FF37a7CogzJVu70y4gFtckllsrhSZmMqZxkL34vqp%2FT%2BfWZ6kZhP4SADP9GKIulStvsj5ao%2FhGkiI0vf0AKB4oitzOzOziwc0aL3%2B%2FmsjRTRkYDyUZiHK8LvbeZ6jxtElbZo59N%2B8v2goTbyfhIbHgeQCB%2BqSZ6FLwKVw8HREeaFB7C1zE4a8p1U5vKt2zGnKSlwnjNDNaYXsHwqMEomrufvpFiVoJlIXHNr%2BQmNbDtVC5J0aHkFryinFYdo3SH0%2FAggo1pUh%2Fbf8JCzxAdx9AYG8Ie0X2E3HPBRnvWZ9FHHncuNQrQJZRTqTUplX3yY8m8ja2HTOUgLjYMJyi%2BB1CBcszv97TdWKdI2kZgiApicMV2swlbupxAY6pgHh16WO%2FKkf%2Fl6gD9Qq1elGRkzZ11xGtr%2Btx%2F0YnzIpNW8SvK9LbMn7vYDgdrk26yh465vwTu0ycB63PgKT4uHZLotI3yzXlms4Z8a%2BVNqt%2Bzzd2P9Fyn%2BdJLtj2SrfBjW8SpvT8LU1uMXsQTEAINEfkRbUliEM4kcBzDiC7NRKV9eY7SmpunQqclHjSPZd9pX%2BtZwdJG%2Bwk6pdXHCOqcfCiTNk17sd&X-Amz-Signature=35e47a5bed133bf40d2c9ad8ad5ecdd31b3b52aaec6f296e08ee23b5e30aeb95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAJFEZ6E%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKhr0TBcIJk9hlq6doxpbp%2BXLkdnL0f4AsuFP3F4XpUAiA4XulEGJdpehuM%2F%2Fh9PuE7Y1f%2Fg7jdgRuffQAg3HBO7iqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1uufdrpgWqg7ovYtKtwD2CSwXoNa1AXUN%2FRLxh1QpawgP7p9WgjBSBJYjMh1yOIsLD1oUnKN2MYw6svCmpm2DN8a3hL2mUpq%2B%2Bk%2BPQnBuZIVTTlbBKz417hF9y5ItmanzfCmim81yYj2wEUA2MlHiubcMkpDBfKC1mn%2BuhcwjyKO6KJMuNX6Kth8u5ERrlckypxiysuHk2B1TUpH0UYqXxKYPRZwxJ0942jCxsNbKPEUWgMae9MnUguCcHFpFBhLA1zlY8u7mHnL%2BYHmhkkDk1Tj9bPx9Yq%2FF37a7CogzJVu70y4gFtckllsrhSZmMqZxkL34vqp%2FT%2BfWZ6kZhP4SADP9GKIulStvsj5ao%2FhGkiI0vf0AKB4oitzOzOziwc0aL3%2B%2FmsjRTRkYDyUZiHK8LvbeZ6jxtElbZo59N%2B8v2goTbyfhIbHgeQCB%2BqSZ6FLwKVw8HREeaFB7C1zE4a8p1U5vKt2zGnKSlwnjNDNaYXsHwqMEomrufvpFiVoJlIXHNr%2BQmNbDtVC5J0aHkFryinFYdo3SH0%2FAggo1pUh%2Fbf8JCzxAdx9AYG8Ie0X2E3HPBRnvWZ9FHHncuNQrQJZRTqTUplX3yY8m8ja2HTOUgLjYMJyi%2BB1CBcszv97TdWKdI2kZgiApicMV2swlbupxAY6pgHh16WO%2FKkf%2Fl6gD9Qq1elGRkzZ11xGtr%2Btx%2F0YnzIpNW8SvK9LbMn7vYDgdrk26yh465vwTu0ycB63PgKT4uHZLotI3yzXlms4Z8a%2BVNqt%2Bzzd2P9Fyn%2BdJLtj2SrfBjW8SpvT8LU1uMXsQTEAINEfkRbUliEM4kcBzDiC7NRKV9eY7SmpunQqclHjSPZd9pX%2BtZwdJG%2Bwk6pdXHCOqcfCiTNk17sd&X-Amz-Signature=f5c106c2e937bdefef1abf792baf16d5ae4420cfa1a74ba923199da2968cd93d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAJFEZ6E%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKhr0TBcIJk9hlq6doxpbp%2BXLkdnL0f4AsuFP3F4XpUAiA4XulEGJdpehuM%2F%2Fh9PuE7Y1f%2Fg7jdgRuffQAg3HBO7iqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1uufdrpgWqg7ovYtKtwD2CSwXoNa1AXUN%2FRLxh1QpawgP7p9WgjBSBJYjMh1yOIsLD1oUnKN2MYw6svCmpm2DN8a3hL2mUpq%2B%2Bk%2BPQnBuZIVTTlbBKz417hF9y5ItmanzfCmim81yYj2wEUA2MlHiubcMkpDBfKC1mn%2BuhcwjyKO6KJMuNX6Kth8u5ERrlckypxiysuHk2B1TUpH0UYqXxKYPRZwxJ0942jCxsNbKPEUWgMae9MnUguCcHFpFBhLA1zlY8u7mHnL%2BYHmhkkDk1Tj9bPx9Yq%2FF37a7CogzJVu70y4gFtckllsrhSZmMqZxkL34vqp%2FT%2BfWZ6kZhP4SADP9GKIulStvsj5ao%2FhGkiI0vf0AKB4oitzOzOziwc0aL3%2B%2FmsjRTRkYDyUZiHK8LvbeZ6jxtElbZo59N%2B8v2goTbyfhIbHgeQCB%2BqSZ6FLwKVw8HREeaFB7C1zE4a8p1U5vKt2zGnKSlwnjNDNaYXsHwqMEomrufvpFiVoJlIXHNr%2BQmNbDtVC5J0aHkFryinFYdo3SH0%2FAggo1pUh%2Fbf8JCzxAdx9AYG8Ie0X2E3HPBRnvWZ9FHHncuNQrQJZRTqTUplX3yY8m8ja2HTOUgLjYMJyi%2BB1CBcszv97TdWKdI2kZgiApicMV2swlbupxAY6pgHh16WO%2FKkf%2Fl6gD9Qq1elGRkzZ11xGtr%2Btx%2F0YnzIpNW8SvK9LbMn7vYDgdrk26yh465vwTu0ycB63PgKT4uHZLotI3yzXlms4Z8a%2BVNqt%2Bzzd2P9Fyn%2BdJLtj2SrfBjW8SpvT8LU1uMXsQTEAINEfkRbUliEM4kcBzDiC7NRKV9eY7SmpunQqclHjSPZd9pX%2BtZwdJG%2Bwk6pdXHCOqcfCiTNk17sd&X-Amz-Signature=b9640c851bf4d7190976e1e533e009958d1758366d1a66624e4b88b98beaf106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAJFEZ6E%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKhr0TBcIJk9hlq6doxpbp%2BXLkdnL0f4AsuFP3F4XpUAiA4XulEGJdpehuM%2F%2Fh9PuE7Y1f%2Fg7jdgRuffQAg3HBO7iqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1uufdrpgWqg7ovYtKtwD2CSwXoNa1AXUN%2FRLxh1QpawgP7p9WgjBSBJYjMh1yOIsLD1oUnKN2MYw6svCmpm2DN8a3hL2mUpq%2B%2Bk%2BPQnBuZIVTTlbBKz417hF9y5ItmanzfCmim81yYj2wEUA2MlHiubcMkpDBfKC1mn%2BuhcwjyKO6KJMuNX6Kth8u5ERrlckypxiysuHk2B1TUpH0UYqXxKYPRZwxJ0942jCxsNbKPEUWgMae9MnUguCcHFpFBhLA1zlY8u7mHnL%2BYHmhkkDk1Tj9bPx9Yq%2FF37a7CogzJVu70y4gFtckllsrhSZmMqZxkL34vqp%2FT%2BfWZ6kZhP4SADP9GKIulStvsj5ao%2FhGkiI0vf0AKB4oitzOzOziwc0aL3%2B%2FmsjRTRkYDyUZiHK8LvbeZ6jxtElbZo59N%2B8v2goTbyfhIbHgeQCB%2BqSZ6FLwKVw8HREeaFB7C1zE4a8p1U5vKt2zGnKSlwnjNDNaYXsHwqMEomrufvpFiVoJlIXHNr%2BQmNbDtVC5J0aHkFryinFYdo3SH0%2FAggo1pUh%2Fbf8JCzxAdx9AYG8Ie0X2E3HPBRnvWZ9FHHncuNQrQJZRTqTUplX3yY8m8ja2HTOUgLjYMJyi%2BB1CBcszv97TdWKdI2kZgiApicMV2swlbupxAY6pgHh16WO%2FKkf%2Fl6gD9Qq1elGRkzZ11xGtr%2Btx%2F0YnzIpNW8SvK9LbMn7vYDgdrk26yh465vwTu0ycB63PgKT4uHZLotI3yzXlms4Z8a%2BVNqt%2Bzzd2P9Fyn%2BdJLtj2SrfBjW8SpvT8LU1uMXsQTEAINEfkRbUliEM4kcBzDiC7NRKV9eY7SmpunQqclHjSPZd9pX%2BtZwdJG%2Bwk6pdXHCOqcfCiTNk17sd&X-Amz-Signature=8869ec1309cd4f64c50ba65f16e45117dadf5319d2612243a87a11ffa6b02ba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAJFEZ6E%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKhr0TBcIJk9hlq6doxpbp%2BXLkdnL0f4AsuFP3F4XpUAiA4XulEGJdpehuM%2F%2Fh9PuE7Y1f%2Fg7jdgRuffQAg3HBO7iqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1uufdrpgWqg7ovYtKtwD2CSwXoNa1AXUN%2FRLxh1QpawgP7p9WgjBSBJYjMh1yOIsLD1oUnKN2MYw6svCmpm2DN8a3hL2mUpq%2B%2Bk%2BPQnBuZIVTTlbBKz417hF9y5ItmanzfCmim81yYj2wEUA2MlHiubcMkpDBfKC1mn%2BuhcwjyKO6KJMuNX6Kth8u5ERrlckypxiysuHk2B1TUpH0UYqXxKYPRZwxJ0942jCxsNbKPEUWgMae9MnUguCcHFpFBhLA1zlY8u7mHnL%2BYHmhkkDk1Tj9bPx9Yq%2FF37a7CogzJVu70y4gFtckllsrhSZmMqZxkL34vqp%2FT%2BfWZ6kZhP4SADP9GKIulStvsj5ao%2FhGkiI0vf0AKB4oitzOzOziwc0aL3%2B%2FmsjRTRkYDyUZiHK8LvbeZ6jxtElbZo59N%2B8v2goTbyfhIbHgeQCB%2BqSZ6FLwKVw8HREeaFB7C1zE4a8p1U5vKt2zGnKSlwnjNDNaYXsHwqMEomrufvpFiVoJlIXHNr%2BQmNbDtVC5J0aHkFryinFYdo3SH0%2FAggo1pUh%2Fbf8JCzxAdx9AYG8Ie0X2E3HPBRnvWZ9FHHncuNQrQJZRTqTUplX3yY8m8ja2HTOUgLjYMJyi%2BB1CBcszv97TdWKdI2kZgiApicMV2swlbupxAY6pgHh16WO%2FKkf%2Fl6gD9Qq1elGRkzZ11xGtr%2Btx%2F0YnzIpNW8SvK9LbMn7vYDgdrk26yh465vwTu0ycB63PgKT4uHZLotI3yzXlms4Z8a%2BVNqt%2Bzzd2P9Fyn%2BdJLtj2SrfBjW8SpvT8LU1uMXsQTEAINEfkRbUliEM4kcBzDiC7NRKV9eY7SmpunQqclHjSPZd9pX%2BtZwdJG%2Bwk6pdXHCOqcfCiTNk17sd&X-Amz-Signature=68cb713a855ada81b424ff6816fcf882037d43ca998df47a13f427a8f99f781e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAJFEZ6E%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKhr0TBcIJk9hlq6doxpbp%2BXLkdnL0f4AsuFP3F4XpUAiA4XulEGJdpehuM%2F%2Fh9PuE7Y1f%2Fg7jdgRuffQAg3HBO7iqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1uufdrpgWqg7ovYtKtwD2CSwXoNa1AXUN%2FRLxh1QpawgP7p9WgjBSBJYjMh1yOIsLD1oUnKN2MYw6svCmpm2DN8a3hL2mUpq%2B%2Bk%2BPQnBuZIVTTlbBKz417hF9y5ItmanzfCmim81yYj2wEUA2MlHiubcMkpDBfKC1mn%2BuhcwjyKO6KJMuNX6Kth8u5ERrlckypxiysuHk2B1TUpH0UYqXxKYPRZwxJ0942jCxsNbKPEUWgMae9MnUguCcHFpFBhLA1zlY8u7mHnL%2BYHmhkkDk1Tj9bPx9Yq%2FF37a7CogzJVu70y4gFtckllsrhSZmMqZxkL34vqp%2FT%2BfWZ6kZhP4SADP9GKIulStvsj5ao%2FhGkiI0vf0AKB4oitzOzOziwc0aL3%2B%2FmsjRTRkYDyUZiHK8LvbeZ6jxtElbZo59N%2B8v2goTbyfhIbHgeQCB%2BqSZ6FLwKVw8HREeaFB7C1zE4a8p1U5vKt2zGnKSlwnjNDNaYXsHwqMEomrufvpFiVoJlIXHNr%2BQmNbDtVC5J0aHkFryinFYdo3SH0%2FAggo1pUh%2Fbf8JCzxAdx9AYG8Ie0X2E3HPBRnvWZ9FHHncuNQrQJZRTqTUplX3yY8m8ja2HTOUgLjYMJyi%2BB1CBcszv97TdWKdI2kZgiApicMV2swlbupxAY6pgHh16WO%2FKkf%2Fl6gD9Qq1elGRkzZ11xGtr%2Btx%2F0YnzIpNW8SvK9LbMn7vYDgdrk26yh465vwTu0ycB63PgKT4uHZLotI3yzXlms4Z8a%2BVNqt%2Bzzd2P9Fyn%2BdJLtj2SrfBjW8SpvT8LU1uMXsQTEAINEfkRbUliEM4kcBzDiC7NRKV9eY7SmpunQqclHjSPZd9pX%2BtZwdJG%2Bwk6pdXHCOqcfCiTNk17sd&X-Amz-Signature=97c4e653fccf0e47cf80832837e049b97b889fdb5c595e39bdd4464c7ccc1a11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAJFEZ6E%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKhr0TBcIJk9hlq6doxpbp%2BXLkdnL0f4AsuFP3F4XpUAiA4XulEGJdpehuM%2F%2Fh9PuE7Y1f%2Fg7jdgRuffQAg3HBO7iqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1uufdrpgWqg7ovYtKtwD2CSwXoNa1AXUN%2FRLxh1QpawgP7p9WgjBSBJYjMh1yOIsLD1oUnKN2MYw6svCmpm2DN8a3hL2mUpq%2B%2Bk%2BPQnBuZIVTTlbBKz417hF9y5ItmanzfCmim81yYj2wEUA2MlHiubcMkpDBfKC1mn%2BuhcwjyKO6KJMuNX6Kth8u5ERrlckypxiysuHk2B1TUpH0UYqXxKYPRZwxJ0942jCxsNbKPEUWgMae9MnUguCcHFpFBhLA1zlY8u7mHnL%2BYHmhkkDk1Tj9bPx9Yq%2FF37a7CogzJVu70y4gFtckllsrhSZmMqZxkL34vqp%2FT%2BfWZ6kZhP4SADP9GKIulStvsj5ao%2FhGkiI0vf0AKB4oitzOzOziwc0aL3%2B%2FmsjRTRkYDyUZiHK8LvbeZ6jxtElbZo59N%2B8v2goTbyfhIbHgeQCB%2BqSZ6FLwKVw8HREeaFB7C1zE4a8p1U5vKt2zGnKSlwnjNDNaYXsHwqMEomrufvpFiVoJlIXHNr%2BQmNbDtVC5J0aHkFryinFYdo3SH0%2FAggo1pUh%2Fbf8JCzxAdx9AYG8Ie0X2E3HPBRnvWZ9FHHncuNQrQJZRTqTUplX3yY8m8ja2HTOUgLjYMJyi%2BB1CBcszv97TdWKdI2kZgiApicMV2swlbupxAY6pgHh16WO%2FKkf%2Fl6gD9Qq1elGRkzZ11xGtr%2Btx%2F0YnzIpNW8SvK9LbMn7vYDgdrk26yh465vwTu0ycB63PgKT4uHZLotI3yzXlms4Z8a%2BVNqt%2Bzzd2P9Fyn%2BdJLtj2SrfBjW8SpvT8LU1uMXsQTEAINEfkRbUliEM4kcBzDiC7NRKV9eY7SmpunQqclHjSPZd9pX%2BtZwdJG%2Bwk6pdXHCOqcfCiTNk17sd&X-Amz-Signature=9b0ef2fa4899101c924643c0a7016e69b16ab6fe0484ec36eedf6262c40850c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAJFEZ6E%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKhr0TBcIJk9hlq6doxpbp%2BXLkdnL0f4AsuFP3F4XpUAiA4XulEGJdpehuM%2F%2Fh9PuE7Y1f%2Fg7jdgRuffQAg3HBO7iqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1uufdrpgWqg7ovYtKtwD2CSwXoNa1AXUN%2FRLxh1QpawgP7p9WgjBSBJYjMh1yOIsLD1oUnKN2MYw6svCmpm2DN8a3hL2mUpq%2B%2Bk%2BPQnBuZIVTTlbBKz417hF9y5ItmanzfCmim81yYj2wEUA2MlHiubcMkpDBfKC1mn%2BuhcwjyKO6KJMuNX6Kth8u5ERrlckypxiysuHk2B1TUpH0UYqXxKYPRZwxJ0942jCxsNbKPEUWgMae9MnUguCcHFpFBhLA1zlY8u7mHnL%2BYHmhkkDk1Tj9bPx9Yq%2FF37a7CogzJVu70y4gFtckllsrhSZmMqZxkL34vqp%2FT%2BfWZ6kZhP4SADP9GKIulStvsj5ao%2FhGkiI0vf0AKB4oitzOzOziwc0aL3%2B%2FmsjRTRkYDyUZiHK8LvbeZ6jxtElbZo59N%2B8v2goTbyfhIbHgeQCB%2BqSZ6FLwKVw8HREeaFB7C1zE4a8p1U5vKt2zGnKSlwnjNDNaYXsHwqMEomrufvpFiVoJlIXHNr%2BQmNbDtVC5J0aHkFryinFYdo3SH0%2FAggo1pUh%2Fbf8JCzxAdx9AYG8Ie0X2E3HPBRnvWZ9FHHncuNQrQJZRTqTUplX3yY8m8ja2HTOUgLjYMJyi%2BB1CBcszv97TdWKdI2kZgiApicMV2swlbupxAY6pgHh16WO%2FKkf%2Fl6gD9Qq1elGRkzZ11xGtr%2Btx%2F0YnzIpNW8SvK9LbMn7vYDgdrk26yh465vwTu0ycB63PgKT4uHZLotI3yzXlms4Z8a%2BVNqt%2Bzzd2P9Fyn%2BdJLtj2SrfBjW8SpvT8LU1uMXsQTEAINEfkRbUliEM4kcBzDiC7NRKV9eY7SmpunQqclHjSPZd9pX%2BtZwdJG%2Bwk6pdXHCOqcfCiTNk17sd&X-Amz-Signature=3eec70844b12a087a775385291ba385f069268cbbe5e18d44140e4e4f27587e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAJFEZ6E%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKhr0TBcIJk9hlq6doxpbp%2BXLkdnL0f4AsuFP3F4XpUAiA4XulEGJdpehuM%2F%2Fh9PuE7Y1f%2Fg7jdgRuffQAg3HBO7iqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1uufdrpgWqg7ovYtKtwD2CSwXoNa1AXUN%2FRLxh1QpawgP7p9WgjBSBJYjMh1yOIsLD1oUnKN2MYw6svCmpm2DN8a3hL2mUpq%2B%2Bk%2BPQnBuZIVTTlbBKz417hF9y5ItmanzfCmim81yYj2wEUA2MlHiubcMkpDBfKC1mn%2BuhcwjyKO6KJMuNX6Kth8u5ERrlckypxiysuHk2B1TUpH0UYqXxKYPRZwxJ0942jCxsNbKPEUWgMae9MnUguCcHFpFBhLA1zlY8u7mHnL%2BYHmhkkDk1Tj9bPx9Yq%2FF37a7CogzJVu70y4gFtckllsrhSZmMqZxkL34vqp%2FT%2BfWZ6kZhP4SADP9GKIulStvsj5ao%2FhGkiI0vf0AKB4oitzOzOziwc0aL3%2B%2FmsjRTRkYDyUZiHK8LvbeZ6jxtElbZo59N%2B8v2goTbyfhIbHgeQCB%2BqSZ6FLwKVw8HREeaFB7C1zE4a8p1U5vKt2zGnKSlwnjNDNaYXsHwqMEomrufvpFiVoJlIXHNr%2BQmNbDtVC5J0aHkFryinFYdo3SH0%2FAggo1pUh%2Fbf8JCzxAdx9AYG8Ie0X2E3HPBRnvWZ9FHHncuNQrQJZRTqTUplX3yY8m8ja2HTOUgLjYMJyi%2BB1CBcszv97TdWKdI2kZgiApicMV2swlbupxAY6pgHh16WO%2FKkf%2Fl6gD9Qq1elGRkzZ11xGtr%2Btx%2F0YnzIpNW8SvK9LbMn7vYDgdrk26yh465vwTu0ycB63PgKT4uHZLotI3yzXlms4Z8a%2BVNqt%2Bzzd2P9Fyn%2BdJLtj2SrfBjW8SpvT8LU1uMXsQTEAINEfkRbUliEM4kcBzDiC7NRKV9eY7SmpunQqclHjSPZd9pX%2BtZwdJG%2Bwk6pdXHCOqcfCiTNk17sd&X-Amz-Signature=624931c4e2d497be5c17b1bec8640fe8d85c87e1d7022a2c89dc439c82d4066d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAJFEZ6E%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKhr0TBcIJk9hlq6doxpbp%2BXLkdnL0f4AsuFP3F4XpUAiA4XulEGJdpehuM%2F%2Fh9PuE7Y1f%2Fg7jdgRuffQAg3HBO7iqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1uufdrpgWqg7ovYtKtwD2CSwXoNa1AXUN%2FRLxh1QpawgP7p9WgjBSBJYjMh1yOIsLD1oUnKN2MYw6svCmpm2DN8a3hL2mUpq%2B%2Bk%2BPQnBuZIVTTlbBKz417hF9y5ItmanzfCmim81yYj2wEUA2MlHiubcMkpDBfKC1mn%2BuhcwjyKO6KJMuNX6Kth8u5ERrlckypxiysuHk2B1TUpH0UYqXxKYPRZwxJ0942jCxsNbKPEUWgMae9MnUguCcHFpFBhLA1zlY8u7mHnL%2BYHmhkkDk1Tj9bPx9Yq%2FF37a7CogzJVu70y4gFtckllsrhSZmMqZxkL34vqp%2FT%2BfWZ6kZhP4SADP9GKIulStvsj5ao%2FhGkiI0vf0AKB4oitzOzOziwc0aL3%2B%2FmsjRTRkYDyUZiHK8LvbeZ6jxtElbZo59N%2B8v2goTbyfhIbHgeQCB%2BqSZ6FLwKVw8HREeaFB7C1zE4a8p1U5vKt2zGnKSlwnjNDNaYXsHwqMEomrufvpFiVoJlIXHNr%2BQmNbDtVC5J0aHkFryinFYdo3SH0%2FAggo1pUh%2Fbf8JCzxAdx9AYG8Ie0X2E3HPBRnvWZ9FHHncuNQrQJZRTqTUplX3yY8m8ja2HTOUgLjYMJyi%2BB1CBcszv97TdWKdI2kZgiApicMV2swlbupxAY6pgHh16WO%2FKkf%2Fl6gD9Qq1elGRkzZ11xGtr%2Btx%2F0YnzIpNW8SvK9LbMn7vYDgdrk26yh465vwTu0ycB63PgKT4uHZLotI3yzXlms4Z8a%2BVNqt%2Bzzd2P9Fyn%2BdJLtj2SrfBjW8SpvT8LU1uMXsQTEAINEfkRbUliEM4kcBzDiC7NRKV9eY7SmpunQqclHjSPZd9pX%2BtZwdJG%2Bwk6pdXHCOqcfCiTNk17sd&X-Amz-Signature=d8244a0406dfcf20a4da16a9252b63bc823467f4f9e07b7693c9ba181b1a5c35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAJFEZ6E%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKhr0TBcIJk9hlq6doxpbp%2BXLkdnL0f4AsuFP3F4XpUAiA4XulEGJdpehuM%2F%2Fh9PuE7Y1f%2Fg7jdgRuffQAg3HBO7iqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1uufdrpgWqg7ovYtKtwD2CSwXoNa1AXUN%2FRLxh1QpawgP7p9WgjBSBJYjMh1yOIsLD1oUnKN2MYw6svCmpm2DN8a3hL2mUpq%2B%2Bk%2BPQnBuZIVTTlbBKz417hF9y5ItmanzfCmim81yYj2wEUA2MlHiubcMkpDBfKC1mn%2BuhcwjyKO6KJMuNX6Kth8u5ERrlckypxiysuHk2B1TUpH0UYqXxKYPRZwxJ0942jCxsNbKPEUWgMae9MnUguCcHFpFBhLA1zlY8u7mHnL%2BYHmhkkDk1Tj9bPx9Yq%2FF37a7CogzJVu70y4gFtckllsrhSZmMqZxkL34vqp%2FT%2BfWZ6kZhP4SADP9GKIulStvsj5ao%2FhGkiI0vf0AKB4oitzOzOziwc0aL3%2B%2FmsjRTRkYDyUZiHK8LvbeZ6jxtElbZo59N%2B8v2goTbyfhIbHgeQCB%2BqSZ6FLwKVw8HREeaFB7C1zE4a8p1U5vKt2zGnKSlwnjNDNaYXsHwqMEomrufvpFiVoJlIXHNr%2BQmNbDtVC5J0aHkFryinFYdo3SH0%2FAggo1pUh%2Fbf8JCzxAdx9AYG8Ie0X2E3HPBRnvWZ9FHHncuNQrQJZRTqTUplX3yY8m8ja2HTOUgLjYMJyi%2BB1CBcszv97TdWKdI2kZgiApicMV2swlbupxAY6pgHh16WO%2FKkf%2Fl6gD9Qq1elGRkzZ11xGtr%2Btx%2F0YnzIpNW8SvK9LbMn7vYDgdrk26yh465vwTu0ycB63PgKT4uHZLotI3yzXlms4Z8a%2BVNqt%2Bzzd2P9Fyn%2BdJLtj2SrfBjW8SpvT8LU1uMXsQTEAINEfkRbUliEM4kcBzDiC7NRKV9eY7SmpunQqclHjSPZd9pX%2BtZwdJG%2Bwk6pdXHCOqcfCiTNk17sd&X-Amz-Signature=ebc477ac67633db08b3de3db280075d4cc3eb702894c0588ee2392303f46b0c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAJFEZ6E%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKhr0TBcIJk9hlq6doxpbp%2BXLkdnL0f4AsuFP3F4XpUAiA4XulEGJdpehuM%2F%2Fh9PuE7Y1f%2Fg7jdgRuffQAg3HBO7iqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1uufdrpgWqg7ovYtKtwD2CSwXoNa1AXUN%2FRLxh1QpawgP7p9WgjBSBJYjMh1yOIsLD1oUnKN2MYw6svCmpm2DN8a3hL2mUpq%2B%2Bk%2BPQnBuZIVTTlbBKz417hF9y5ItmanzfCmim81yYj2wEUA2MlHiubcMkpDBfKC1mn%2BuhcwjyKO6KJMuNX6Kth8u5ERrlckypxiysuHk2B1TUpH0UYqXxKYPRZwxJ0942jCxsNbKPEUWgMae9MnUguCcHFpFBhLA1zlY8u7mHnL%2BYHmhkkDk1Tj9bPx9Yq%2FF37a7CogzJVu70y4gFtckllsrhSZmMqZxkL34vqp%2FT%2BfWZ6kZhP4SADP9GKIulStvsj5ao%2FhGkiI0vf0AKB4oitzOzOziwc0aL3%2B%2FmsjRTRkYDyUZiHK8LvbeZ6jxtElbZo59N%2B8v2goTbyfhIbHgeQCB%2BqSZ6FLwKVw8HREeaFB7C1zE4a8p1U5vKt2zGnKSlwnjNDNaYXsHwqMEomrufvpFiVoJlIXHNr%2BQmNbDtVC5J0aHkFryinFYdo3SH0%2FAggo1pUh%2Fbf8JCzxAdx9AYG8Ie0X2E3HPBRnvWZ9FHHncuNQrQJZRTqTUplX3yY8m8ja2HTOUgLjYMJyi%2BB1CBcszv97TdWKdI2kZgiApicMV2swlbupxAY6pgHh16WO%2FKkf%2Fl6gD9Qq1elGRkzZ11xGtr%2Btx%2F0YnzIpNW8SvK9LbMn7vYDgdrk26yh465vwTu0ycB63PgKT4uHZLotI3yzXlms4Z8a%2BVNqt%2Bzzd2P9Fyn%2BdJLtj2SrfBjW8SpvT8LU1uMXsQTEAINEfkRbUliEM4kcBzDiC7NRKV9eY7SmpunQqclHjSPZd9pX%2BtZwdJG%2Bwk6pdXHCOqcfCiTNk17sd&X-Amz-Signature=ddee82102bde77fd6ad599483152851d05b5c7b85ac41a65bcb40bc8fd770cbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAJFEZ6E%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T191128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKhr0TBcIJk9hlq6doxpbp%2BXLkdnL0f4AsuFP3F4XpUAiA4XulEGJdpehuM%2F%2Fh9PuE7Y1f%2Fg7jdgRuffQAg3HBO7iqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1uufdrpgWqg7ovYtKtwD2CSwXoNa1AXUN%2FRLxh1QpawgP7p9WgjBSBJYjMh1yOIsLD1oUnKN2MYw6svCmpm2DN8a3hL2mUpq%2B%2Bk%2BPQnBuZIVTTlbBKz417hF9y5ItmanzfCmim81yYj2wEUA2MlHiubcMkpDBfKC1mn%2BuhcwjyKO6KJMuNX6Kth8u5ERrlckypxiysuHk2B1TUpH0UYqXxKYPRZwxJ0942jCxsNbKPEUWgMae9MnUguCcHFpFBhLA1zlY8u7mHnL%2BYHmhkkDk1Tj9bPx9Yq%2FF37a7CogzJVu70y4gFtckllsrhSZmMqZxkL34vqp%2FT%2BfWZ6kZhP4SADP9GKIulStvsj5ao%2FhGkiI0vf0AKB4oitzOzOziwc0aL3%2B%2FmsjRTRkYDyUZiHK8LvbeZ6jxtElbZo59N%2B8v2goTbyfhIbHgeQCB%2BqSZ6FLwKVw8HREeaFB7C1zE4a8p1U5vKt2zGnKSlwnjNDNaYXsHwqMEomrufvpFiVoJlIXHNr%2BQmNbDtVC5J0aHkFryinFYdo3SH0%2FAggo1pUh%2Fbf8JCzxAdx9AYG8Ie0X2E3HPBRnvWZ9FHHncuNQrQJZRTqTUplX3yY8m8ja2HTOUgLjYMJyi%2BB1CBcszv97TdWKdI2kZgiApicMV2swlbupxAY6pgHh16WO%2FKkf%2Fl6gD9Qq1elGRkzZ11xGtr%2Btx%2F0YnzIpNW8SvK9LbMn7vYDgdrk26yh465vwTu0ycB63PgKT4uHZLotI3yzXlms4Z8a%2BVNqt%2Bzzd2P9Fyn%2BdJLtj2SrfBjW8SpvT8LU1uMXsQTEAINEfkRbUliEM4kcBzDiC7NRKV9eY7SmpunQqclHjSPZd9pX%2BtZwdJG%2Bwk6pdXHCOqcfCiTNk17sd&X-Amz-Signature=82731741afa7469fbd074bdfa97a9135fdb06e98498d115669e70b82396e074f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
