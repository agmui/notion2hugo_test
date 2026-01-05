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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7ENFBVL%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFui9Epu%2FpBhwKTOmlDX7SGg8hClHHg%2FyHDd4z3McxWtAiEAvYINCwBrCYjfMLoVMoeOOqtEn52IpXqYx7AgVruAnLsq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKsc0YUSDqO3RVwK2yrcAx15NALrat0oA9K9txr6sSembl%2B99mjNIxRaoKSAR2muBunIgEbKNiPPcBnPoGQ%2BYFaVfIy6Fc0RAyVZy0epEF9qpsGTgrigzC1PknkV3TGN3xj1YJzsm0U6Bg6XmIz4c%2BHK%2FBXxlNT46%2FWLAvYo8Ih5%2F8jYWIqdIqwzWd1YFtrFGsWc%2FDItb1hxkGqIf0O1uiFPYLd9%2BnBKeK0vaQejnw%2BcaInyQW7zZuB7WHGB7H0S73s2jDfnKV3r3CozWRyXuBqP1hFEBa28ITeGEeq0lFr%2FXUpZzq9aQK9l8bsQ1g5kAJ%2FgtLW2PokVsNrq%2FrrBkFqpr3HRR1URWzlOyiIAgfwO2%2B12o9BhblbmNvVL9MrLv3PUM2%2BqECZy5nDxQd4QNK2XpZfabt%2Bt2yY6NvvjyyztN7vI0JeT6Q3dtAsJ0bHjoUyyYNh2TRv8GJShS8I7bNFZzpbmjOGBAQGk1ZySyxzKyaZclP57Q6cpJXZfqL%2FJ7KV1fdJ3%2BieZi0H2ntWx4ebvHQJVjchah%2FUQkNki4W4acASGeltID3rSLRtYYeEn2iNIiwgcOC5O9S8lrtiTcf9Mh0yPOcNKUyOPtTBxvpKEFzqxZ7MUCawf%2BzNwrcFnzluMnqciu%2Bwk%2Bb2fMKe568oGOqUBAU11LiUFvGxbSZ6Noxrcta2N86ziLPyQjGENsxsmewrZgoShsotgKKs6MXeRLxtSXAwIxWHtilIJLRAQMOc8Jhp3tEYBEh2HnZdATZoXAF6y8GsJcmzHxAuPYKgkRswWOE8wqGZ8X1L8M9xWmIYSkJbmVMNl2W7TGDZLcrsGYUWkCCpd1zJdixMbwK2v2t7ZRWsICN0%2BD7q5G2c8P9jW8frp%2FZlt&X-Amz-Signature=c26833b5828e90b30d17115fadb24f4ee1d351a7dd7b2037f6907d6ed7a2d276&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7ENFBVL%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFui9Epu%2FpBhwKTOmlDX7SGg8hClHHg%2FyHDd4z3McxWtAiEAvYINCwBrCYjfMLoVMoeOOqtEn52IpXqYx7AgVruAnLsq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKsc0YUSDqO3RVwK2yrcAx15NALrat0oA9K9txr6sSembl%2B99mjNIxRaoKSAR2muBunIgEbKNiPPcBnPoGQ%2BYFaVfIy6Fc0RAyVZy0epEF9qpsGTgrigzC1PknkV3TGN3xj1YJzsm0U6Bg6XmIz4c%2BHK%2FBXxlNT46%2FWLAvYo8Ih5%2F8jYWIqdIqwzWd1YFtrFGsWc%2FDItb1hxkGqIf0O1uiFPYLd9%2BnBKeK0vaQejnw%2BcaInyQW7zZuB7WHGB7H0S73s2jDfnKV3r3CozWRyXuBqP1hFEBa28ITeGEeq0lFr%2FXUpZzq9aQK9l8bsQ1g5kAJ%2FgtLW2PokVsNrq%2FrrBkFqpr3HRR1URWzlOyiIAgfwO2%2B12o9BhblbmNvVL9MrLv3PUM2%2BqECZy5nDxQd4QNK2XpZfabt%2Bt2yY6NvvjyyztN7vI0JeT6Q3dtAsJ0bHjoUyyYNh2TRv8GJShS8I7bNFZzpbmjOGBAQGk1ZySyxzKyaZclP57Q6cpJXZfqL%2FJ7KV1fdJ3%2BieZi0H2ntWx4ebvHQJVjchah%2FUQkNki4W4acASGeltID3rSLRtYYeEn2iNIiwgcOC5O9S8lrtiTcf9Mh0yPOcNKUyOPtTBxvpKEFzqxZ7MUCawf%2BzNwrcFnzluMnqciu%2Bwk%2Bb2fMKe568oGOqUBAU11LiUFvGxbSZ6Noxrcta2N86ziLPyQjGENsxsmewrZgoShsotgKKs6MXeRLxtSXAwIxWHtilIJLRAQMOc8Jhp3tEYBEh2HnZdATZoXAF6y8GsJcmzHxAuPYKgkRswWOE8wqGZ8X1L8M9xWmIYSkJbmVMNl2W7TGDZLcrsGYUWkCCpd1zJdixMbwK2v2t7ZRWsICN0%2BD7q5G2c8P9jW8frp%2FZlt&X-Amz-Signature=4e431b78bfbb87e46373233fe435e13f6cb1deaf525afc365503d7a676602708&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7ENFBVL%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFui9Epu%2FpBhwKTOmlDX7SGg8hClHHg%2FyHDd4z3McxWtAiEAvYINCwBrCYjfMLoVMoeOOqtEn52IpXqYx7AgVruAnLsq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKsc0YUSDqO3RVwK2yrcAx15NALrat0oA9K9txr6sSembl%2B99mjNIxRaoKSAR2muBunIgEbKNiPPcBnPoGQ%2BYFaVfIy6Fc0RAyVZy0epEF9qpsGTgrigzC1PknkV3TGN3xj1YJzsm0U6Bg6XmIz4c%2BHK%2FBXxlNT46%2FWLAvYo8Ih5%2F8jYWIqdIqwzWd1YFtrFGsWc%2FDItb1hxkGqIf0O1uiFPYLd9%2BnBKeK0vaQejnw%2BcaInyQW7zZuB7WHGB7H0S73s2jDfnKV3r3CozWRyXuBqP1hFEBa28ITeGEeq0lFr%2FXUpZzq9aQK9l8bsQ1g5kAJ%2FgtLW2PokVsNrq%2FrrBkFqpr3HRR1URWzlOyiIAgfwO2%2B12o9BhblbmNvVL9MrLv3PUM2%2BqECZy5nDxQd4QNK2XpZfabt%2Bt2yY6NvvjyyztN7vI0JeT6Q3dtAsJ0bHjoUyyYNh2TRv8GJShS8I7bNFZzpbmjOGBAQGk1ZySyxzKyaZclP57Q6cpJXZfqL%2FJ7KV1fdJ3%2BieZi0H2ntWx4ebvHQJVjchah%2FUQkNki4W4acASGeltID3rSLRtYYeEn2iNIiwgcOC5O9S8lrtiTcf9Mh0yPOcNKUyOPtTBxvpKEFzqxZ7MUCawf%2BzNwrcFnzluMnqciu%2Bwk%2Bb2fMKe568oGOqUBAU11LiUFvGxbSZ6Noxrcta2N86ziLPyQjGENsxsmewrZgoShsotgKKs6MXeRLxtSXAwIxWHtilIJLRAQMOc8Jhp3tEYBEh2HnZdATZoXAF6y8GsJcmzHxAuPYKgkRswWOE8wqGZ8X1L8M9xWmIYSkJbmVMNl2W7TGDZLcrsGYUWkCCpd1zJdixMbwK2v2t7ZRWsICN0%2BD7q5G2c8P9jW8frp%2FZlt&X-Amz-Signature=ec0775e65fbe6aa0c395ea4662e46501a15498c8bf7e1528461e3ad29505b04b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7ENFBVL%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFui9Epu%2FpBhwKTOmlDX7SGg8hClHHg%2FyHDd4z3McxWtAiEAvYINCwBrCYjfMLoVMoeOOqtEn52IpXqYx7AgVruAnLsq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKsc0YUSDqO3RVwK2yrcAx15NALrat0oA9K9txr6sSembl%2B99mjNIxRaoKSAR2muBunIgEbKNiPPcBnPoGQ%2BYFaVfIy6Fc0RAyVZy0epEF9qpsGTgrigzC1PknkV3TGN3xj1YJzsm0U6Bg6XmIz4c%2BHK%2FBXxlNT46%2FWLAvYo8Ih5%2F8jYWIqdIqwzWd1YFtrFGsWc%2FDItb1hxkGqIf0O1uiFPYLd9%2BnBKeK0vaQejnw%2BcaInyQW7zZuB7WHGB7H0S73s2jDfnKV3r3CozWRyXuBqP1hFEBa28ITeGEeq0lFr%2FXUpZzq9aQK9l8bsQ1g5kAJ%2FgtLW2PokVsNrq%2FrrBkFqpr3HRR1URWzlOyiIAgfwO2%2B12o9BhblbmNvVL9MrLv3PUM2%2BqECZy5nDxQd4QNK2XpZfabt%2Bt2yY6NvvjyyztN7vI0JeT6Q3dtAsJ0bHjoUyyYNh2TRv8GJShS8I7bNFZzpbmjOGBAQGk1ZySyxzKyaZclP57Q6cpJXZfqL%2FJ7KV1fdJ3%2BieZi0H2ntWx4ebvHQJVjchah%2FUQkNki4W4acASGeltID3rSLRtYYeEn2iNIiwgcOC5O9S8lrtiTcf9Mh0yPOcNKUyOPtTBxvpKEFzqxZ7MUCawf%2BzNwrcFnzluMnqciu%2Bwk%2Bb2fMKe568oGOqUBAU11LiUFvGxbSZ6Noxrcta2N86ziLPyQjGENsxsmewrZgoShsotgKKs6MXeRLxtSXAwIxWHtilIJLRAQMOc8Jhp3tEYBEh2HnZdATZoXAF6y8GsJcmzHxAuPYKgkRswWOE8wqGZ8X1L8M9xWmIYSkJbmVMNl2W7TGDZLcrsGYUWkCCpd1zJdixMbwK2v2t7ZRWsICN0%2BD7q5G2c8P9jW8frp%2FZlt&X-Amz-Signature=938131d3c46cd6bdb8fefd9ce4dc819f0a213de0bf5fb53794d2a49dec139439&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7ENFBVL%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFui9Epu%2FpBhwKTOmlDX7SGg8hClHHg%2FyHDd4z3McxWtAiEAvYINCwBrCYjfMLoVMoeOOqtEn52IpXqYx7AgVruAnLsq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKsc0YUSDqO3RVwK2yrcAx15NALrat0oA9K9txr6sSembl%2B99mjNIxRaoKSAR2muBunIgEbKNiPPcBnPoGQ%2BYFaVfIy6Fc0RAyVZy0epEF9qpsGTgrigzC1PknkV3TGN3xj1YJzsm0U6Bg6XmIz4c%2BHK%2FBXxlNT46%2FWLAvYo8Ih5%2F8jYWIqdIqwzWd1YFtrFGsWc%2FDItb1hxkGqIf0O1uiFPYLd9%2BnBKeK0vaQejnw%2BcaInyQW7zZuB7WHGB7H0S73s2jDfnKV3r3CozWRyXuBqP1hFEBa28ITeGEeq0lFr%2FXUpZzq9aQK9l8bsQ1g5kAJ%2FgtLW2PokVsNrq%2FrrBkFqpr3HRR1URWzlOyiIAgfwO2%2B12o9BhblbmNvVL9MrLv3PUM2%2BqECZy5nDxQd4QNK2XpZfabt%2Bt2yY6NvvjyyztN7vI0JeT6Q3dtAsJ0bHjoUyyYNh2TRv8GJShS8I7bNFZzpbmjOGBAQGk1ZySyxzKyaZclP57Q6cpJXZfqL%2FJ7KV1fdJ3%2BieZi0H2ntWx4ebvHQJVjchah%2FUQkNki4W4acASGeltID3rSLRtYYeEn2iNIiwgcOC5O9S8lrtiTcf9Mh0yPOcNKUyOPtTBxvpKEFzqxZ7MUCawf%2BzNwrcFnzluMnqciu%2Bwk%2Bb2fMKe568oGOqUBAU11LiUFvGxbSZ6Noxrcta2N86ziLPyQjGENsxsmewrZgoShsotgKKs6MXeRLxtSXAwIxWHtilIJLRAQMOc8Jhp3tEYBEh2HnZdATZoXAF6y8GsJcmzHxAuPYKgkRswWOE8wqGZ8X1L8M9xWmIYSkJbmVMNl2W7TGDZLcrsGYUWkCCpd1zJdixMbwK2v2t7ZRWsICN0%2BD7q5G2c8P9jW8frp%2FZlt&X-Amz-Signature=aabd055e50002cd434d191244fe1a90471172823b63b9c5318764ce916019af9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7ENFBVL%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFui9Epu%2FpBhwKTOmlDX7SGg8hClHHg%2FyHDd4z3McxWtAiEAvYINCwBrCYjfMLoVMoeOOqtEn52IpXqYx7AgVruAnLsq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKsc0YUSDqO3RVwK2yrcAx15NALrat0oA9K9txr6sSembl%2B99mjNIxRaoKSAR2muBunIgEbKNiPPcBnPoGQ%2BYFaVfIy6Fc0RAyVZy0epEF9qpsGTgrigzC1PknkV3TGN3xj1YJzsm0U6Bg6XmIz4c%2BHK%2FBXxlNT46%2FWLAvYo8Ih5%2F8jYWIqdIqwzWd1YFtrFGsWc%2FDItb1hxkGqIf0O1uiFPYLd9%2BnBKeK0vaQejnw%2BcaInyQW7zZuB7WHGB7H0S73s2jDfnKV3r3CozWRyXuBqP1hFEBa28ITeGEeq0lFr%2FXUpZzq9aQK9l8bsQ1g5kAJ%2FgtLW2PokVsNrq%2FrrBkFqpr3HRR1URWzlOyiIAgfwO2%2B12o9BhblbmNvVL9MrLv3PUM2%2BqECZy5nDxQd4QNK2XpZfabt%2Bt2yY6NvvjyyztN7vI0JeT6Q3dtAsJ0bHjoUyyYNh2TRv8GJShS8I7bNFZzpbmjOGBAQGk1ZySyxzKyaZclP57Q6cpJXZfqL%2FJ7KV1fdJ3%2BieZi0H2ntWx4ebvHQJVjchah%2FUQkNki4W4acASGeltID3rSLRtYYeEn2iNIiwgcOC5O9S8lrtiTcf9Mh0yPOcNKUyOPtTBxvpKEFzqxZ7MUCawf%2BzNwrcFnzluMnqciu%2Bwk%2Bb2fMKe568oGOqUBAU11LiUFvGxbSZ6Noxrcta2N86ziLPyQjGENsxsmewrZgoShsotgKKs6MXeRLxtSXAwIxWHtilIJLRAQMOc8Jhp3tEYBEh2HnZdATZoXAF6y8GsJcmzHxAuPYKgkRswWOE8wqGZ8X1L8M9xWmIYSkJbmVMNl2W7TGDZLcrsGYUWkCCpd1zJdixMbwK2v2t7ZRWsICN0%2BD7q5G2c8P9jW8frp%2FZlt&X-Amz-Signature=35c75d6d30db6a3a5596db814baa351911cd135acb7762d1fb1e3d58c227134e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7ENFBVL%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFui9Epu%2FpBhwKTOmlDX7SGg8hClHHg%2FyHDd4z3McxWtAiEAvYINCwBrCYjfMLoVMoeOOqtEn52IpXqYx7AgVruAnLsq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKsc0YUSDqO3RVwK2yrcAx15NALrat0oA9K9txr6sSembl%2B99mjNIxRaoKSAR2muBunIgEbKNiPPcBnPoGQ%2BYFaVfIy6Fc0RAyVZy0epEF9qpsGTgrigzC1PknkV3TGN3xj1YJzsm0U6Bg6XmIz4c%2BHK%2FBXxlNT46%2FWLAvYo8Ih5%2F8jYWIqdIqwzWd1YFtrFGsWc%2FDItb1hxkGqIf0O1uiFPYLd9%2BnBKeK0vaQejnw%2BcaInyQW7zZuB7WHGB7H0S73s2jDfnKV3r3CozWRyXuBqP1hFEBa28ITeGEeq0lFr%2FXUpZzq9aQK9l8bsQ1g5kAJ%2FgtLW2PokVsNrq%2FrrBkFqpr3HRR1URWzlOyiIAgfwO2%2B12o9BhblbmNvVL9MrLv3PUM2%2BqECZy5nDxQd4QNK2XpZfabt%2Bt2yY6NvvjyyztN7vI0JeT6Q3dtAsJ0bHjoUyyYNh2TRv8GJShS8I7bNFZzpbmjOGBAQGk1ZySyxzKyaZclP57Q6cpJXZfqL%2FJ7KV1fdJ3%2BieZi0H2ntWx4ebvHQJVjchah%2FUQkNki4W4acASGeltID3rSLRtYYeEn2iNIiwgcOC5O9S8lrtiTcf9Mh0yPOcNKUyOPtTBxvpKEFzqxZ7MUCawf%2BzNwrcFnzluMnqciu%2Bwk%2Bb2fMKe568oGOqUBAU11LiUFvGxbSZ6Noxrcta2N86ziLPyQjGENsxsmewrZgoShsotgKKs6MXeRLxtSXAwIxWHtilIJLRAQMOc8Jhp3tEYBEh2HnZdATZoXAF6y8GsJcmzHxAuPYKgkRswWOE8wqGZ8X1L8M9xWmIYSkJbmVMNl2W7TGDZLcrsGYUWkCCpd1zJdixMbwK2v2t7ZRWsICN0%2BD7q5G2c8P9jW8frp%2FZlt&X-Amz-Signature=adb9089bdf7d4ccb48bba46ee0557f0479dbf1020e632939d4817dae9b79028e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7ENFBVL%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFui9Epu%2FpBhwKTOmlDX7SGg8hClHHg%2FyHDd4z3McxWtAiEAvYINCwBrCYjfMLoVMoeOOqtEn52IpXqYx7AgVruAnLsq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKsc0YUSDqO3RVwK2yrcAx15NALrat0oA9K9txr6sSembl%2B99mjNIxRaoKSAR2muBunIgEbKNiPPcBnPoGQ%2BYFaVfIy6Fc0RAyVZy0epEF9qpsGTgrigzC1PknkV3TGN3xj1YJzsm0U6Bg6XmIz4c%2BHK%2FBXxlNT46%2FWLAvYo8Ih5%2F8jYWIqdIqwzWd1YFtrFGsWc%2FDItb1hxkGqIf0O1uiFPYLd9%2BnBKeK0vaQejnw%2BcaInyQW7zZuB7WHGB7H0S73s2jDfnKV3r3CozWRyXuBqP1hFEBa28ITeGEeq0lFr%2FXUpZzq9aQK9l8bsQ1g5kAJ%2FgtLW2PokVsNrq%2FrrBkFqpr3HRR1URWzlOyiIAgfwO2%2B12o9BhblbmNvVL9MrLv3PUM2%2BqECZy5nDxQd4QNK2XpZfabt%2Bt2yY6NvvjyyztN7vI0JeT6Q3dtAsJ0bHjoUyyYNh2TRv8GJShS8I7bNFZzpbmjOGBAQGk1ZySyxzKyaZclP57Q6cpJXZfqL%2FJ7KV1fdJ3%2BieZi0H2ntWx4ebvHQJVjchah%2FUQkNki4W4acASGeltID3rSLRtYYeEn2iNIiwgcOC5O9S8lrtiTcf9Mh0yPOcNKUyOPtTBxvpKEFzqxZ7MUCawf%2BzNwrcFnzluMnqciu%2Bwk%2Bb2fMKe568oGOqUBAU11LiUFvGxbSZ6Noxrcta2N86ziLPyQjGENsxsmewrZgoShsotgKKs6MXeRLxtSXAwIxWHtilIJLRAQMOc8Jhp3tEYBEh2HnZdATZoXAF6y8GsJcmzHxAuPYKgkRswWOE8wqGZ8X1L8M9xWmIYSkJbmVMNl2W7TGDZLcrsGYUWkCCpd1zJdixMbwK2v2t7ZRWsICN0%2BD7q5G2c8P9jW8frp%2FZlt&X-Amz-Signature=960fa9821c8ebcda4e16859961f4263cc7a9c3ff33d5adae6df81119b5a3019b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7ENFBVL%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFui9Epu%2FpBhwKTOmlDX7SGg8hClHHg%2FyHDd4z3McxWtAiEAvYINCwBrCYjfMLoVMoeOOqtEn52IpXqYx7AgVruAnLsq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKsc0YUSDqO3RVwK2yrcAx15NALrat0oA9K9txr6sSembl%2B99mjNIxRaoKSAR2muBunIgEbKNiPPcBnPoGQ%2BYFaVfIy6Fc0RAyVZy0epEF9qpsGTgrigzC1PknkV3TGN3xj1YJzsm0U6Bg6XmIz4c%2BHK%2FBXxlNT46%2FWLAvYo8Ih5%2F8jYWIqdIqwzWd1YFtrFGsWc%2FDItb1hxkGqIf0O1uiFPYLd9%2BnBKeK0vaQejnw%2BcaInyQW7zZuB7WHGB7H0S73s2jDfnKV3r3CozWRyXuBqP1hFEBa28ITeGEeq0lFr%2FXUpZzq9aQK9l8bsQ1g5kAJ%2FgtLW2PokVsNrq%2FrrBkFqpr3HRR1URWzlOyiIAgfwO2%2B12o9BhblbmNvVL9MrLv3PUM2%2BqECZy5nDxQd4QNK2XpZfabt%2Bt2yY6NvvjyyztN7vI0JeT6Q3dtAsJ0bHjoUyyYNh2TRv8GJShS8I7bNFZzpbmjOGBAQGk1ZySyxzKyaZclP57Q6cpJXZfqL%2FJ7KV1fdJ3%2BieZi0H2ntWx4ebvHQJVjchah%2FUQkNki4W4acASGeltID3rSLRtYYeEn2iNIiwgcOC5O9S8lrtiTcf9Mh0yPOcNKUyOPtTBxvpKEFzqxZ7MUCawf%2BzNwrcFnzluMnqciu%2Bwk%2Bb2fMKe568oGOqUBAU11LiUFvGxbSZ6Noxrcta2N86ziLPyQjGENsxsmewrZgoShsotgKKs6MXeRLxtSXAwIxWHtilIJLRAQMOc8Jhp3tEYBEh2HnZdATZoXAF6y8GsJcmzHxAuPYKgkRswWOE8wqGZ8X1L8M9xWmIYSkJbmVMNl2W7TGDZLcrsGYUWkCCpd1zJdixMbwK2v2t7ZRWsICN0%2BD7q5G2c8P9jW8frp%2FZlt&X-Amz-Signature=6237246328415a3b2b17f335158a33b06c197275f41d6706fc55ecd6c5949742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7ENFBVL%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFui9Epu%2FpBhwKTOmlDX7SGg8hClHHg%2FyHDd4z3McxWtAiEAvYINCwBrCYjfMLoVMoeOOqtEn52IpXqYx7AgVruAnLsq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKsc0YUSDqO3RVwK2yrcAx15NALrat0oA9K9txr6sSembl%2B99mjNIxRaoKSAR2muBunIgEbKNiPPcBnPoGQ%2BYFaVfIy6Fc0RAyVZy0epEF9qpsGTgrigzC1PknkV3TGN3xj1YJzsm0U6Bg6XmIz4c%2BHK%2FBXxlNT46%2FWLAvYo8Ih5%2F8jYWIqdIqwzWd1YFtrFGsWc%2FDItb1hxkGqIf0O1uiFPYLd9%2BnBKeK0vaQejnw%2BcaInyQW7zZuB7WHGB7H0S73s2jDfnKV3r3CozWRyXuBqP1hFEBa28ITeGEeq0lFr%2FXUpZzq9aQK9l8bsQ1g5kAJ%2FgtLW2PokVsNrq%2FrrBkFqpr3HRR1URWzlOyiIAgfwO2%2B12o9BhblbmNvVL9MrLv3PUM2%2BqECZy5nDxQd4QNK2XpZfabt%2Bt2yY6NvvjyyztN7vI0JeT6Q3dtAsJ0bHjoUyyYNh2TRv8GJShS8I7bNFZzpbmjOGBAQGk1ZySyxzKyaZclP57Q6cpJXZfqL%2FJ7KV1fdJ3%2BieZi0H2ntWx4ebvHQJVjchah%2FUQkNki4W4acASGeltID3rSLRtYYeEn2iNIiwgcOC5O9S8lrtiTcf9Mh0yPOcNKUyOPtTBxvpKEFzqxZ7MUCawf%2BzNwrcFnzluMnqciu%2Bwk%2Bb2fMKe568oGOqUBAU11LiUFvGxbSZ6Noxrcta2N86ziLPyQjGENsxsmewrZgoShsotgKKs6MXeRLxtSXAwIxWHtilIJLRAQMOc8Jhp3tEYBEh2HnZdATZoXAF6y8GsJcmzHxAuPYKgkRswWOE8wqGZ8X1L8M9xWmIYSkJbmVMNl2W7TGDZLcrsGYUWkCCpd1zJdixMbwK2v2t7ZRWsICN0%2BD7q5G2c8P9jW8frp%2FZlt&X-Amz-Signature=f468d16f3048eceea1c4988308e709c8dcb96007d9a112118f24e48249a01962&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7ENFBVL%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFui9Epu%2FpBhwKTOmlDX7SGg8hClHHg%2FyHDd4z3McxWtAiEAvYINCwBrCYjfMLoVMoeOOqtEn52IpXqYx7AgVruAnLsq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKsc0YUSDqO3RVwK2yrcAx15NALrat0oA9K9txr6sSembl%2B99mjNIxRaoKSAR2muBunIgEbKNiPPcBnPoGQ%2BYFaVfIy6Fc0RAyVZy0epEF9qpsGTgrigzC1PknkV3TGN3xj1YJzsm0U6Bg6XmIz4c%2BHK%2FBXxlNT46%2FWLAvYo8Ih5%2F8jYWIqdIqwzWd1YFtrFGsWc%2FDItb1hxkGqIf0O1uiFPYLd9%2BnBKeK0vaQejnw%2BcaInyQW7zZuB7WHGB7H0S73s2jDfnKV3r3CozWRyXuBqP1hFEBa28ITeGEeq0lFr%2FXUpZzq9aQK9l8bsQ1g5kAJ%2FgtLW2PokVsNrq%2FrrBkFqpr3HRR1URWzlOyiIAgfwO2%2B12o9BhblbmNvVL9MrLv3PUM2%2BqECZy5nDxQd4QNK2XpZfabt%2Bt2yY6NvvjyyztN7vI0JeT6Q3dtAsJ0bHjoUyyYNh2TRv8GJShS8I7bNFZzpbmjOGBAQGk1ZySyxzKyaZclP57Q6cpJXZfqL%2FJ7KV1fdJ3%2BieZi0H2ntWx4ebvHQJVjchah%2FUQkNki4W4acASGeltID3rSLRtYYeEn2iNIiwgcOC5O9S8lrtiTcf9Mh0yPOcNKUyOPtTBxvpKEFzqxZ7MUCawf%2BzNwrcFnzluMnqciu%2Bwk%2Bb2fMKe568oGOqUBAU11LiUFvGxbSZ6Noxrcta2N86ziLPyQjGENsxsmewrZgoShsotgKKs6MXeRLxtSXAwIxWHtilIJLRAQMOc8Jhp3tEYBEh2HnZdATZoXAF6y8GsJcmzHxAuPYKgkRswWOE8wqGZ8X1L8M9xWmIYSkJbmVMNl2W7TGDZLcrsGYUWkCCpd1zJdixMbwK2v2t7ZRWsICN0%2BD7q5G2c8P9jW8frp%2FZlt&X-Amz-Signature=8037d0d7953168cffc04a6d2bbf1db29e8a0d93ef4d1df76693c796ff212dc85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7ENFBVL%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFui9Epu%2FpBhwKTOmlDX7SGg8hClHHg%2FyHDd4z3McxWtAiEAvYINCwBrCYjfMLoVMoeOOqtEn52IpXqYx7AgVruAnLsq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKsc0YUSDqO3RVwK2yrcAx15NALrat0oA9K9txr6sSembl%2B99mjNIxRaoKSAR2muBunIgEbKNiPPcBnPoGQ%2BYFaVfIy6Fc0RAyVZy0epEF9qpsGTgrigzC1PknkV3TGN3xj1YJzsm0U6Bg6XmIz4c%2BHK%2FBXxlNT46%2FWLAvYo8Ih5%2F8jYWIqdIqwzWd1YFtrFGsWc%2FDItb1hxkGqIf0O1uiFPYLd9%2BnBKeK0vaQejnw%2BcaInyQW7zZuB7WHGB7H0S73s2jDfnKV3r3CozWRyXuBqP1hFEBa28ITeGEeq0lFr%2FXUpZzq9aQK9l8bsQ1g5kAJ%2FgtLW2PokVsNrq%2FrrBkFqpr3HRR1URWzlOyiIAgfwO2%2B12o9BhblbmNvVL9MrLv3PUM2%2BqECZy5nDxQd4QNK2XpZfabt%2Bt2yY6NvvjyyztN7vI0JeT6Q3dtAsJ0bHjoUyyYNh2TRv8GJShS8I7bNFZzpbmjOGBAQGk1ZySyxzKyaZclP57Q6cpJXZfqL%2FJ7KV1fdJ3%2BieZi0H2ntWx4ebvHQJVjchah%2FUQkNki4W4acASGeltID3rSLRtYYeEn2iNIiwgcOC5O9S8lrtiTcf9Mh0yPOcNKUyOPtTBxvpKEFzqxZ7MUCawf%2BzNwrcFnzluMnqciu%2Bwk%2Bb2fMKe568oGOqUBAU11LiUFvGxbSZ6Noxrcta2N86ziLPyQjGENsxsmewrZgoShsotgKKs6MXeRLxtSXAwIxWHtilIJLRAQMOc8Jhp3tEYBEh2HnZdATZoXAF6y8GsJcmzHxAuPYKgkRswWOE8wqGZ8X1L8M9xWmIYSkJbmVMNl2W7TGDZLcrsGYUWkCCpd1zJdixMbwK2v2t7ZRWsICN0%2BD7q5G2c8P9jW8frp%2FZlt&X-Amz-Signature=2a29d554c68d6e56e7aae5bcc003ac40a21c7cc94716c3fd353faa2453ae5973&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7ENFBVL%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFui9Epu%2FpBhwKTOmlDX7SGg8hClHHg%2FyHDd4z3McxWtAiEAvYINCwBrCYjfMLoVMoeOOqtEn52IpXqYx7AgVruAnLsq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKsc0YUSDqO3RVwK2yrcAx15NALrat0oA9K9txr6sSembl%2B99mjNIxRaoKSAR2muBunIgEbKNiPPcBnPoGQ%2BYFaVfIy6Fc0RAyVZy0epEF9qpsGTgrigzC1PknkV3TGN3xj1YJzsm0U6Bg6XmIz4c%2BHK%2FBXxlNT46%2FWLAvYo8Ih5%2F8jYWIqdIqwzWd1YFtrFGsWc%2FDItb1hxkGqIf0O1uiFPYLd9%2BnBKeK0vaQejnw%2BcaInyQW7zZuB7WHGB7H0S73s2jDfnKV3r3CozWRyXuBqP1hFEBa28ITeGEeq0lFr%2FXUpZzq9aQK9l8bsQ1g5kAJ%2FgtLW2PokVsNrq%2FrrBkFqpr3HRR1URWzlOyiIAgfwO2%2B12o9BhblbmNvVL9MrLv3PUM2%2BqECZy5nDxQd4QNK2XpZfabt%2Bt2yY6NvvjyyztN7vI0JeT6Q3dtAsJ0bHjoUyyYNh2TRv8GJShS8I7bNFZzpbmjOGBAQGk1ZySyxzKyaZclP57Q6cpJXZfqL%2FJ7KV1fdJ3%2BieZi0H2ntWx4ebvHQJVjchah%2FUQkNki4W4acASGeltID3rSLRtYYeEn2iNIiwgcOC5O9S8lrtiTcf9Mh0yPOcNKUyOPtTBxvpKEFzqxZ7MUCawf%2BzNwrcFnzluMnqciu%2Bwk%2Bb2fMKe568oGOqUBAU11LiUFvGxbSZ6Noxrcta2N86ziLPyQjGENsxsmewrZgoShsotgKKs6MXeRLxtSXAwIxWHtilIJLRAQMOc8Jhp3tEYBEh2HnZdATZoXAF6y8GsJcmzHxAuPYKgkRswWOE8wqGZ8X1L8M9xWmIYSkJbmVMNl2W7TGDZLcrsGYUWkCCpd1zJdixMbwK2v2t7ZRWsICN0%2BD7q5G2c8P9jW8frp%2FZlt&X-Amz-Signature=8f0f4f77c860be04d2f1d69ba6e3d3ae62a3b336dc254442ccc65142bd5243ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7ENFBVL%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFui9Epu%2FpBhwKTOmlDX7SGg8hClHHg%2FyHDd4z3McxWtAiEAvYINCwBrCYjfMLoVMoeOOqtEn52IpXqYx7AgVruAnLsq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDKsc0YUSDqO3RVwK2yrcAx15NALrat0oA9K9txr6sSembl%2B99mjNIxRaoKSAR2muBunIgEbKNiPPcBnPoGQ%2BYFaVfIy6Fc0RAyVZy0epEF9qpsGTgrigzC1PknkV3TGN3xj1YJzsm0U6Bg6XmIz4c%2BHK%2FBXxlNT46%2FWLAvYo8Ih5%2F8jYWIqdIqwzWd1YFtrFGsWc%2FDItb1hxkGqIf0O1uiFPYLd9%2BnBKeK0vaQejnw%2BcaInyQW7zZuB7WHGB7H0S73s2jDfnKV3r3CozWRyXuBqP1hFEBa28ITeGEeq0lFr%2FXUpZzq9aQK9l8bsQ1g5kAJ%2FgtLW2PokVsNrq%2FrrBkFqpr3HRR1URWzlOyiIAgfwO2%2B12o9BhblbmNvVL9MrLv3PUM2%2BqECZy5nDxQd4QNK2XpZfabt%2Bt2yY6NvvjyyztN7vI0JeT6Q3dtAsJ0bHjoUyyYNh2TRv8GJShS8I7bNFZzpbmjOGBAQGk1ZySyxzKyaZclP57Q6cpJXZfqL%2FJ7KV1fdJ3%2BieZi0H2ntWx4ebvHQJVjchah%2FUQkNki4W4acASGeltID3rSLRtYYeEn2iNIiwgcOC5O9S8lrtiTcf9Mh0yPOcNKUyOPtTBxvpKEFzqxZ7MUCawf%2BzNwrcFnzluMnqciu%2Bwk%2Bb2fMKe568oGOqUBAU11LiUFvGxbSZ6Noxrcta2N86ziLPyQjGENsxsmewrZgoShsotgKKs6MXeRLxtSXAwIxWHtilIJLRAQMOc8Jhp3tEYBEh2HnZdATZoXAF6y8GsJcmzHxAuPYKgkRswWOE8wqGZ8X1L8M9xWmIYSkJbmVMNl2W7TGDZLcrsGYUWkCCpd1zJdixMbwK2v2t7ZRWsICN0%2BD7q5G2c8P9jW8frp%2FZlt&X-Amz-Signature=283af02e576f534d92a3563daade8f0a92436981d1c3ac31a1f01b359d9323fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
