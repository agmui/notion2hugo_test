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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5Y44SKN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDiPGNq4XoM8%2BKi0DXRz0YQCMmU6IDLK%2BA3UFWx3xYKnAIhAPDHM3yAcy5AXPxkb1cF3cEKWFyGZqzgGsPjGhkuabBxKv8DCGEQABoMNjM3NDIzMTgzODA1Igx6kil699H%2BDAGw%2BQYq3AOuHvCxQDkmA0%2BSL6OrTqedLwjv8EPXiwnKjXpBAi30pPLWf%2B6SUPzwqsMz4FzuGNCi9okUf0yaCb6smmEwcOp%2Bnc21A5iNLK2aHrQXNFI88KJwvcDsbDmph1KI1F9xDGZ6SuFUv4osJMUagLKSDbEErBOP2O0OFi79ljDzhTK1yOE4kn4YEmvexj%2Fzd5hXQ0WK8xArJ3Y1Eshg3glSkl%2FqDX%2BUK8btAnmjZdB5B6YSM3umdj4czLpm7eSX%2BOFJQijxVADFQYldTuZYv03uZd4GhJn%2B52RH4gEcMBg813Fimcbk0hdyeuFL2A2D2tuKWcOxBMfqWs3KgrzQ59qkp3JaGv1rsVkwOcBEPkYX7UenK%2FkBDb4M3NNRi74Ag%2FHnLNt7Wafa10SQCV6wcNpKUrazStWP89%2BqgBTtz%2FtVr7fAWvbQP%2FeB3ZZAfgHOhBo2OxLBxeB2wnGW%2FunqElt9C9U2bSmn17F5D%2BUQh60BJD3w4CCHUDeYji1s%2BkfoTBF83rjafRHumbuTe9tXV7LYIAldfevZDCdd9hd%2BoC0na%2FxjEZ66%2FdW9MAmPsAh9GY7k1Px0rFeSjpFuhNxWJkM6xp8czDeuxjRN4JQOFzD4AqaXnCYXFNzTN%2BfbocIipDCNtf3EBjqkAf6GQ6xZAb49NWqRcQswPgxBB9XdR%2BeQlDasEaDB0uxIlw94o8WAu%2FSX%2FZn6LokOAZ1cAOc9gkYGcaUNuO4D5pSJ1J2gVLy7%2BMe5i9zF1Fiztp9t6kwSvZxJCleVu6V1HrslzrYGk2YUIzfHfjATyv%2B5rtgN3IarFxUci4vaCTALAZW97BW1Cukrrato3ZnPc6FdvpqddlciDBy1p1oSgCmEWkSt&X-Amz-Signature=d70bd7e66c1fbd2454b18ee855496cf3b6e0637fe62adf92764276151fdd2842&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5Y44SKN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDiPGNq4XoM8%2BKi0DXRz0YQCMmU6IDLK%2BA3UFWx3xYKnAIhAPDHM3yAcy5AXPxkb1cF3cEKWFyGZqzgGsPjGhkuabBxKv8DCGEQABoMNjM3NDIzMTgzODA1Igx6kil699H%2BDAGw%2BQYq3AOuHvCxQDkmA0%2BSL6OrTqedLwjv8EPXiwnKjXpBAi30pPLWf%2B6SUPzwqsMz4FzuGNCi9okUf0yaCb6smmEwcOp%2Bnc21A5iNLK2aHrQXNFI88KJwvcDsbDmph1KI1F9xDGZ6SuFUv4osJMUagLKSDbEErBOP2O0OFi79ljDzhTK1yOE4kn4YEmvexj%2Fzd5hXQ0WK8xArJ3Y1Eshg3glSkl%2FqDX%2BUK8btAnmjZdB5B6YSM3umdj4czLpm7eSX%2BOFJQijxVADFQYldTuZYv03uZd4GhJn%2B52RH4gEcMBg813Fimcbk0hdyeuFL2A2D2tuKWcOxBMfqWs3KgrzQ59qkp3JaGv1rsVkwOcBEPkYX7UenK%2FkBDb4M3NNRi74Ag%2FHnLNt7Wafa10SQCV6wcNpKUrazStWP89%2BqgBTtz%2FtVr7fAWvbQP%2FeB3ZZAfgHOhBo2OxLBxeB2wnGW%2FunqElt9C9U2bSmn17F5D%2BUQh60BJD3w4CCHUDeYji1s%2BkfoTBF83rjafRHumbuTe9tXV7LYIAldfevZDCdd9hd%2BoC0na%2FxjEZ66%2FdW9MAmPsAh9GY7k1Px0rFeSjpFuhNxWJkM6xp8czDeuxjRN4JQOFzD4AqaXnCYXFNzTN%2BfbocIipDCNtf3EBjqkAf6GQ6xZAb49NWqRcQswPgxBB9XdR%2BeQlDasEaDB0uxIlw94o8WAu%2FSX%2FZn6LokOAZ1cAOc9gkYGcaUNuO4D5pSJ1J2gVLy7%2BMe5i9zF1Fiztp9t6kwSvZxJCleVu6V1HrslzrYGk2YUIzfHfjATyv%2B5rtgN3IarFxUci4vaCTALAZW97BW1Cukrrato3ZnPc6FdvpqddlciDBy1p1oSgCmEWkSt&X-Amz-Signature=a8b14261ac058eb284267be577e05f1f476dda789a6cb9d50fa1e11ea0e06e63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5Y44SKN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDiPGNq4XoM8%2BKi0DXRz0YQCMmU6IDLK%2BA3UFWx3xYKnAIhAPDHM3yAcy5AXPxkb1cF3cEKWFyGZqzgGsPjGhkuabBxKv8DCGEQABoMNjM3NDIzMTgzODA1Igx6kil699H%2BDAGw%2BQYq3AOuHvCxQDkmA0%2BSL6OrTqedLwjv8EPXiwnKjXpBAi30pPLWf%2B6SUPzwqsMz4FzuGNCi9okUf0yaCb6smmEwcOp%2Bnc21A5iNLK2aHrQXNFI88KJwvcDsbDmph1KI1F9xDGZ6SuFUv4osJMUagLKSDbEErBOP2O0OFi79ljDzhTK1yOE4kn4YEmvexj%2Fzd5hXQ0WK8xArJ3Y1Eshg3glSkl%2FqDX%2BUK8btAnmjZdB5B6YSM3umdj4czLpm7eSX%2BOFJQijxVADFQYldTuZYv03uZd4GhJn%2B52RH4gEcMBg813Fimcbk0hdyeuFL2A2D2tuKWcOxBMfqWs3KgrzQ59qkp3JaGv1rsVkwOcBEPkYX7UenK%2FkBDb4M3NNRi74Ag%2FHnLNt7Wafa10SQCV6wcNpKUrazStWP89%2BqgBTtz%2FtVr7fAWvbQP%2FeB3ZZAfgHOhBo2OxLBxeB2wnGW%2FunqElt9C9U2bSmn17F5D%2BUQh60BJD3w4CCHUDeYji1s%2BkfoTBF83rjafRHumbuTe9tXV7LYIAldfevZDCdd9hd%2BoC0na%2FxjEZ66%2FdW9MAmPsAh9GY7k1Px0rFeSjpFuhNxWJkM6xp8czDeuxjRN4JQOFzD4AqaXnCYXFNzTN%2BfbocIipDCNtf3EBjqkAf6GQ6xZAb49NWqRcQswPgxBB9XdR%2BeQlDasEaDB0uxIlw94o8WAu%2FSX%2FZn6LokOAZ1cAOc9gkYGcaUNuO4D5pSJ1J2gVLy7%2BMe5i9zF1Fiztp9t6kwSvZxJCleVu6V1HrslzrYGk2YUIzfHfjATyv%2B5rtgN3IarFxUci4vaCTALAZW97BW1Cukrrato3ZnPc6FdvpqddlciDBy1p1oSgCmEWkSt&X-Amz-Signature=0436b0696f8e1f3cec2d047c2ec94dc977a1eb76158d94401b137e9e71dc7b16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5Y44SKN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDiPGNq4XoM8%2BKi0DXRz0YQCMmU6IDLK%2BA3UFWx3xYKnAIhAPDHM3yAcy5AXPxkb1cF3cEKWFyGZqzgGsPjGhkuabBxKv8DCGEQABoMNjM3NDIzMTgzODA1Igx6kil699H%2BDAGw%2BQYq3AOuHvCxQDkmA0%2BSL6OrTqedLwjv8EPXiwnKjXpBAi30pPLWf%2B6SUPzwqsMz4FzuGNCi9okUf0yaCb6smmEwcOp%2Bnc21A5iNLK2aHrQXNFI88KJwvcDsbDmph1KI1F9xDGZ6SuFUv4osJMUagLKSDbEErBOP2O0OFi79ljDzhTK1yOE4kn4YEmvexj%2Fzd5hXQ0WK8xArJ3Y1Eshg3glSkl%2FqDX%2BUK8btAnmjZdB5B6YSM3umdj4czLpm7eSX%2BOFJQijxVADFQYldTuZYv03uZd4GhJn%2B52RH4gEcMBg813Fimcbk0hdyeuFL2A2D2tuKWcOxBMfqWs3KgrzQ59qkp3JaGv1rsVkwOcBEPkYX7UenK%2FkBDb4M3NNRi74Ag%2FHnLNt7Wafa10SQCV6wcNpKUrazStWP89%2BqgBTtz%2FtVr7fAWvbQP%2FeB3ZZAfgHOhBo2OxLBxeB2wnGW%2FunqElt9C9U2bSmn17F5D%2BUQh60BJD3w4CCHUDeYji1s%2BkfoTBF83rjafRHumbuTe9tXV7LYIAldfevZDCdd9hd%2BoC0na%2FxjEZ66%2FdW9MAmPsAh9GY7k1Px0rFeSjpFuhNxWJkM6xp8czDeuxjRN4JQOFzD4AqaXnCYXFNzTN%2BfbocIipDCNtf3EBjqkAf6GQ6xZAb49NWqRcQswPgxBB9XdR%2BeQlDasEaDB0uxIlw94o8WAu%2FSX%2FZn6LokOAZ1cAOc9gkYGcaUNuO4D5pSJ1J2gVLy7%2BMe5i9zF1Fiztp9t6kwSvZxJCleVu6V1HrslzrYGk2YUIzfHfjATyv%2B5rtgN3IarFxUci4vaCTALAZW97BW1Cukrrato3ZnPc6FdvpqddlciDBy1p1oSgCmEWkSt&X-Amz-Signature=121948efe57890cc09cd56738d09d583b57360d528579baec30523465dd1d726&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5Y44SKN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDiPGNq4XoM8%2BKi0DXRz0YQCMmU6IDLK%2BA3UFWx3xYKnAIhAPDHM3yAcy5AXPxkb1cF3cEKWFyGZqzgGsPjGhkuabBxKv8DCGEQABoMNjM3NDIzMTgzODA1Igx6kil699H%2BDAGw%2BQYq3AOuHvCxQDkmA0%2BSL6OrTqedLwjv8EPXiwnKjXpBAi30pPLWf%2B6SUPzwqsMz4FzuGNCi9okUf0yaCb6smmEwcOp%2Bnc21A5iNLK2aHrQXNFI88KJwvcDsbDmph1KI1F9xDGZ6SuFUv4osJMUagLKSDbEErBOP2O0OFi79ljDzhTK1yOE4kn4YEmvexj%2Fzd5hXQ0WK8xArJ3Y1Eshg3glSkl%2FqDX%2BUK8btAnmjZdB5B6YSM3umdj4czLpm7eSX%2BOFJQijxVADFQYldTuZYv03uZd4GhJn%2B52RH4gEcMBg813Fimcbk0hdyeuFL2A2D2tuKWcOxBMfqWs3KgrzQ59qkp3JaGv1rsVkwOcBEPkYX7UenK%2FkBDb4M3NNRi74Ag%2FHnLNt7Wafa10SQCV6wcNpKUrazStWP89%2BqgBTtz%2FtVr7fAWvbQP%2FeB3ZZAfgHOhBo2OxLBxeB2wnGW%2FunqElt9C9U2bSmn17F5D%2BUQh60BJD3w4CCHUDeYji1s%2BkfoTBF83rjafRHumbuTe9tXV7LYIAldfevZDCdd9hd%2BoC0na%2FxjEZ66%2FdW9MAmPsAh9GY7k1Px0rFeSjpFuhNxWJkM6xp8czDeuxjRN4JQOFzD4AqaXnCYXFNzTN%2BfbocIipDCNtf3EBjqkAf6GQ6xZAb49NWqRcQswPgxBB9XdR%2BeQlDasEaDB0uxIlw94o8WAu%2FSX%2FZn6LokOAZ1cAOc9gkYGcaUNuO4D5pSJ1J2gVLy7%2BMe5i9zF1Fiztp9t6kwSvZxJCleVu6V1HrslzrYGk2YUIzfHfjATyv%2B5rtgN3IarFxUci4vaCTALAZW97BW1Cukrrato3ZnPc6FdvpqddlciDBy1p1oSgCmEWkSt&X-Amz-Signature=a5d8696669d5b8651a6fd751be3abf000ce412899d38bd6cea0be442a6c48cb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5Y44SKN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDiPGNq4XoM8%2BKi0DXRz0YQCMmU6IDLK%2BA3UFWx3xYKnAIhAPDHM3yAcy5AXPxkb1cF3cEKWFyGZqzgGsPjGhkuabBxKv8DCGEQABoMNjM3NDIzMTgzODA1Igx6kil699H%2BDAGw%2BQYq3AOuHvCxQDkmA0%2BSL6OrTqedLwjv8EPXiwnKjXpBAi30pPLWf%2B6SUPzwqsMz4FzuGNCi9okUf0yaCb6smmEwcOp%2Bnc21A5iNLK2aHrQXNFI88KJwvcDsbDmph1KI1F9xDGZ6SuFUv4osJMUagLKSDbEErBOP2O0OFi79ljDzhTK1yOE4kn4YEmvexj%2Fzd5hXQ0WK8xArJ3Y1Eshg3glSkl%2FqDX%2BUK8btAnmjZdB5B6YSM3umdj4czLpm7eSX%2BOFJQijxVADFQYldTuZYv03uZd4GhJn%2B52RH4gEcMBg813Fimcbk0hdyeuFL2A2D2tuKWcOxBMfqWs3KgrzQ59qkp3JaGv1rsVkwOcBEPkYX7UenK%2FkBDb4M3NNRi74Ag%2FHnLNt7Wafa10SQCV6wcNpKUrazStWP89%2BqgBTtz%2FtVr7fAWvbQP%2FeB3ZZAfgHOhBo2OxLBxeB2wnGW%2FunqElt9C9U2bSmn17F5D%2BUQh60BJD3w4CCHUDeYji1s%2BkfoTBF83rjafRHumbuTe9tXV7LYIAldfevZDCdd9hd%2BoC0na%2FxjEZ66%2FdW9MAmPsAh9GY7k1Px0rFeSjpFuhNxWJkM6xp8czDeuxjRN4JQOFzD4AqaXnCYXFNzTN%2BfbocIipDCNtf3EBjqkAf6GQ6xZAb49NWqRcQswPgxBB9XdR%2BeQlDasEaDB0uxIlw94o8WAu%2FSX%2FZn6LokOAZ1cAOc9gkYGcaUNuO4D5pSJ1J2gVLy7%2BMe5i9zF1Fiztp9t6kwSvZxJCleVu6V1HrslzrYGk2YUIzfHfjATyv%2B5rtgN3IarFxUci4vaCTALAZW97BW1Cukrrato3ZnPc6FdvpqddlciDBy1p1oSgCmEWkSt&X-Amz-Signature=389abbbdf2dbcd9ccab4481a94c8f161936b64ecdb77acbf2067c237e50644b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5Y44SKN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDiPGNq4XoM8%2BKi0DXRz0YQCMmU6IDLK%2BA3UFWx3xYKnAIhAPDHM3yAcy5AXPxkb1cF3cEKWFyGZqzgGsPjGhkuabBxKv8DCGEQABoMNjM3NDIzMTgzODA1Igx6kil699H%2BDAGw%2BQYq3AOuHvCxQDkmA0%2BSL6OrTqedLwjv8EPXiwnKjXpBAi30pPLWf%2B6SUPzwqsMz4FzuGNCi9okUf0yaCb6smmEwcOp%2Bnc21A5iNLK2aHrQXNFI88KJwvcDsbDmph1KI1F9xDGZ6SuFUv4osJMUagLKSDbEErBOP2O0OFi79ljDzhTK1yOE4kn4YEmvexj%2Fzd5hXQ0WK8xArJ3Y1Eshg3glSkl%2FqDX%2BUK8btAnmjZdB5B6YSM3umdj4czLpm7eSX%2BOFJQijxVADFQYldTuZYv03uZd4GhJn%2B52RH4gEcMBg813Fimcbk0hdyeuFL2A2D2tuKWcOxBMfqWs3KgrzQ59qkp3JaGv1rsVkwOcBEPkYX7UenK%2FkBDb4M3NNRi74Ag%2FHnLNt7Wafa10SQCV6wcNpKUrazStWP89%2BqgBTtz%2FtVr7fAWvbQP%2FeB3ZZAfgHOhBo2OxLBxeB2wnGW%2FunqElt9C9U2bSmn17F5D%2BUQh60BJD3w4CCHUDeYji1s%2BkfoTBF83rjafRHumbuTe9tXV7LYIAldfevZDCdd9hd%2BoC0na%2FxjEZ66%2FdW9MAmPsAh9GY7k1Px0rFeSjpFuhNxWJkM6xp8czDeuxjRN4JQOFzD4AqaXnCYXFNzTN%2BfbocIipDCNtf3EBjqkAf6GQ6xZAb49NWqRcQswPgxBB9XdR%2BeQlDasEaDB0uxIlw94o8WAu%2FSX%2FZn6LokOAZ1cAOc9gkYGcaUNuO4D5pSJ1J2gVLy7%2BMe5i9zF1Fiztp9t6kwSvZxJCleVu6V1HrslzrYGk2YUIzfHfjATyv%2B5rtgN3IarFxUci4vaCTALAZW97BW1Cukrrato3ZnPc6FdvpqddlciDBy1p1oSgCmEWkSt&X-Amz-Signature=ad5d1027e0150fcdb240423c9cbfa475ff3d06ec6ff75ae6fc0c72ba449d12a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5Y44SKN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDiPGNq4XoM8%2BKi0DXRz0YQCMmU6IDLK%2BA3UFWx3xYKnAIhAPDHM3yAcy5AXPxkb1cF3cEKWFyGZqzgGsPjGhkuabBxKv8DCGEQABoMNjM3NDIzMTgzODA1Igx6kil699H%2BDAGw%2BQYq3AOuHvCxQDkmA0%2BSL6OrTqedLwjv8EPXiwnKjXpBAi30pPLWf%2B6SUPzwqsMz4FzuGNCi9okUf0yaCb6smmEwcOp%2Bnc21A5iNLK2aHrQXNFI88KJwvcDsbDmph1KI1F9xDGZ6SuFUv4osJMUagLKSDbEErBOP2O0OFi79ljDzhTK1yOE4kn4YEmvexj%2Fzd5hXQ0WK8xArJ3Y1Eshg3glSkl%2FqDX%2BUK8btAnmjZdB5B6YSM3umdj4czLpm7eSX%2BOFJQijxVADFQYldTuZYv03uZd4GhJn%2B52RH4gEcMBg813Fimcbk0hdyeuFL2A2D2tuKWcOxBMfqWs3KgrzQ59qkp3JaGv1rsVkwOcBEPkYX7UenK%2FkBDb4M3NNRi74Ag%2FHnLNt7Wafa10SQCV6wcNpKUrazStWP89%2BqgBTtz%2FtVr7fAWvbQP%2FeB3ZZAfgHOhBo2OxLBxeB2wnGW%2FunqElt9C9U2bSmn17F5D%2BUQh60BJD3w4CCHUDeYji1s%2BkfoTBF83rjafRHumbuTe9tXV7LYIAldfevZDCdd9hd%2BoC0na%2FxjEZ66%2FdW9MAmPsAh9GY7k1Px0rFeSjpFuhNxWJkM6xp8czDeuxjRN4JQOFzD4AqaXnCYXFNzTN%2BfbocIipDCNtf3EBjqkAf6GQ6xZAb49NWqRcQswPgxBB9XdR%2BeQlDasEaDB0uxIlw94o8WAu%2FSX%2FZn6LokOAZ1cAOc9gkYGcaUNuO4D5pSJ1J2gVLy7%2BMe5i9zF1Fiztp9t6kwSvZxJCleVu6V1HrslzrYGk2YUIzfHfjATyv%2B5rtgN3IarFxUci4vaCTALAZW97BW1Cukrrato3ZnPc6FdvpqddlciDBy1p1oSgCmEWkSt&X-Amz-Signature=90eb4ad1386b872f5bac55d178a23449f0a03415f82d486911ab2c839fb23f11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5Y44SKN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDiPGNq4XoM8%2BKi0DXRz0YQCMmU6IDLK%2BA3UFWx3xYKnAIhAPDHM3yAcy5AXPxkb1cF3cEKWFyGZqzgGsPjGhkuabBxKv8DCGEQABoMNjM3NDIzMTgzODA1Igx6kil699H%2BDAGw%2BQYq3AOuHvCxQDkmA0%2BSL6OrTqedLwjv8EPXiwnKjXpBAi30pPLWf%2B6SUPzwqsMz4FzuGNCi9okUf0yaCb6smmEwcOp%2Bnc21A5iNLK2aHrQXNFI88KJwvcDsbDmph1KI1F9xDGZ6SuFUv4osJMUagLKSDbEErBOP2O0OFi79ljDzhTK1yOE4kn4YEmvexj%2Fzd5hXQ0WK8xArJ3Y1Eshg3glSkl%2FqDX%2BUK8btAnmjZdB5B6YSM3umdj4czLpm7eSX%2BOFJQijxVADFQYldTuZYv03uZd4GhJn%2B52RH4gEcMBg813Fimcbk0hdyeuFL2A2D2tuKWcOxBMfqWs3KgrzQ59qkp3JaGv1rsVkwOcBEPkYX7UenK%2FkBDb4M3NNRi74Ag%2FHnLNt7Wafa10SQCV6wcNpKUrazStWP89%2BqgBTtz%2FtVr7fAWvbQP%2FeB3ZZAfgHOhBo2OxLBxeB2wnGW%2FunqElt9C9U2bSmn17F5D%2BUQh60BJD3w4CCHUDeYji1s%2BkfoTBF83rjafRHumbuTe9tXV7LYIAldfevZDCdd9hd%2BoC0na%2FxjEZ66%2FdW9MAmPsAh9GY7k1Px0rFeSjpFuhNxWJkM6xp8czDeuxjRN4JQOFzD4AqaXnCYXFNzTN%2BfbocIipDCNtf3EBjqkAf6GQ6xZAb49NWqRcQswPgxBB9XdR%2BeQlDasEaDB0uxIlw94o8WAu%2FSX%2FZn6LokOAZ1cAOc9gkYGcaUNuO4D5pSJ1J2gVLy7%2BMe5i9zF1Fiztp9t6kwSvZxJCleVu6V1HrslzrYGk2YUIzfHfjATyv%2B5rtgN3IarFxUci4vaCTALAZW97BW1Cukrrato3ZnPc6FdvpqddlciDBy1p1oSgCmEWkSt&X-Amz-Signature=54ba45db05b0d11fadb069c14d32e750328381a6027e2a904e73378c81c4e958&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5Y44SKN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDiPGNq4XoM8%2BKi0DXRz0YQCMmU6IDLK%2BA3UFWx3xYKnAIhAPDHM3yAcy5AXPxkb1cF3cEKWFyGZqzgGsPjGhkuabBxKv8DCGEQABoMNjM3NDIzMTgzODA1Igx6kil699H%2BDAGw%2BQYq3AOuHvCxQDkmA0%2BSL6OrTqedLwjv8EPXiwnKjXpBAi30pPLWf%2B6SUPzwqsMz4FzuGNCi9okUf0yaCb6smmEwcOp%2Bnc21A5iNLK2aHrQXNFI88KJwvcDsbDmph1KI1F9xDGZ6SuFUv4osJMUagLKSDbEErBOP2O0OFi79ljDzhTK1yOE4kn4YEmvexj%2Fzd5hXQ0WK8xArJ3Y1Eshg3glSkl%2FqDX%2BUK8btAnmjZdB5B6YSM3umdj4czLpm7eSX%2BOFJQijxVADFQYldTuZYv03uZd4GhJn%2B52RH4gEcMBg813Fimcbk0hdyeuFL2A2D2tuKWcOxBMfqWs3KgrzQ59qkp3JaGv1rsVkwOcBEPkYX7UenK%2FkBDb4M3NNRi74Ag%2FHnLNt7Wafa10SQCV6wcNpKUrazStWP89%2BqgBTtz%2FtVr7fAWvbQP%2FeB3ZZAfgHOhBo2OxLBxeB2wnGW%2FunqElt9C9U2bSmn17F5D%2BUQh60BJD3w4CCHUDeYji1s%2BkfoTBF83rjafRHumbuTe9tXV7LYIAldfevZDCdd9hd%2BoC0na%2FxjEZ66%2FdW9MAmPsAh9GY7k1Px0rFeSjpFuhNxWJkM6xp8czDeuxjRN4JQOFzD4AqaXnCYXFNzTN%2BfbocIipDCNtf3EBjqkAf6GQ6xZAb49NWqRcQswPgxBB9XdR%2BeQlDasEaDB0uxIlw94o8WAu%2FSX%2FZn6LokOAZ1cAOc9gkYGcaUNuO4D5pSJ1J2gVLy7%2BMe5i9zF1Fiztp9t6kwSvZxJCleVu6V1HrslzrYGk2YUIzfHfjATyv%2B5rtgN3IarFxUci4vaCTALAZW97BW1Cukrrato3ZnPc6FdvpqddlciDBy1p1oSgCmEWkSt&X-Amz-Signature=b6f343e720010445891070833fcc6daee52d9ef92b553aef13fb58f475dbd4f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5Y44SKN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDiPGNq4XoM8%2BKi0DXRz0YQCMmU6IDLK%2BA3UFWx3xYKnAIhAPDHM3yAcy5AXPxkb1cF3cEKWFyGZqzgGsPjGhkuabBxKv8DCGEQABoMNjM3NDIzMTgzODA1Igx6kil699H%2BDAGw%2BQYq3AOuHvCxQDkmA0%2BSL6OrTqedLwjv8EPXiwnKjXpBAi30pPLWf%2B6SUPzwqsMz4FzuGNCi9okUf0yaCb6smmEwcOp%2Bnc21A5iNLK2aHrQXNFI88KJwvcDsbDmph1KI1F9xDGZ6SuFUv4osJMUagLKSDbEErBOP2O0OFi79ljDzhTK1yOE4kn4YEmvexj%2Fzd5hXQ0WK8xArJ3Y1Eshg3glSkl%2FqDX%2BUK8btAnmjZdB5B6YSM3umdj4czLpm7eSX%2BOFJQijxVADFQYldTuZYv03uZd4GhJn%2B52RH4gEcMBg813Fimcbk0hdyeuFL2A2D2tuKWcOxBMfqWs3KgrzQ59qkp3JaGv1rsVkwOcBEPkYX7UenK%2FkBDb4M3NNRi74Ag%2FHnLNt7Wafa10SQCV6wcNpKUrazStWP89%2BqgBTtz%2FtVr7fAWvbQP%2FeB3ZZAfgHOhBo2OxLBxeB2wnGW%2FunqElt9C9U2bSmn17F5D%2BUQh60BJD3w4CCHUDeYji1s%2BkfoTBF83rjafRHumbuTe9tXV7LYIAldfevZDCdd9hd%2BoC0na%2FxjEZ66%2FdW9MAmPsAh9GY7k1Px0rFeSjpFuhNxWJkM6xp8czDeuxjRN4JQOFzD4AqaXnCYXFNzTN%2BfbocIipDCNtf3EBjqkAf6GQ6xZAb49NWqRcQswPgxBB9XdR%2BeQlDasEaDB0uxIlw94o8WAu%2FSX%2FZn6LokOAZ1cAOc9gkYGcaUNuO4D5pSJ1J2gVLy7%2BMe5i9zF1Fiztp9t6kwSvZxJCleVu6V1HrslzrYGk2YUIzfHfjATyv%2B5rtgN3IarFxUci4vaCTALAZW97BW1Cukrrato3ZnPc6FdvpqddlciDBy1p1oSgCmEWkSt&X-Amz-Signature=86eefb17c43f65819b473211218e78f0cc955815f53075feae8d7a85a97a52a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5Y44SKN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDiPGNq4XoM8%2BKi0DXRz0YQCMmU6IDLK%2BA3UFWx3xYKnAIhAPDHM3yAcy5AXPxkb1cF3cEKWFyGZqzgGsPjGhkuabBxKv8DCGEQABoMNjM3NDIzMTgzODA1Igx6kil699H%2BDAGw%2BQYq3AOuHvCxQDkmA0%2BSL6OrTqedLwjv8EPXiwnKjXpBAi30pPLWf%2B6SUPzwqsMz4FzuGNCi9okUf0yaCb6smmEwcOp%2Bnc21A5iNLK2aHrQXNFI88KJwvcDsbDmph1KI1F9xDGZ6SuFUv4osJMUagLKSDbEErBOP2O0OFi79ljDzhTK1yOE4kn4YEmvexj%2Fzd5hXQ0WK8xArJ3Y1Eshg3glSkl%2FqDX%2BUK8btAnmjZdB5B6YSM3umdj4czLpm7eSX%2BOFJQijxVADFQYldTuZYv03uZd4GhJn%2B52RH4gEcMBg813Fimcbk0hdyeuFL2A2D2tuKWcOxBMfqWs3KgrzQ59qkp3JaGv1rsVkwOcBEPkYX7UenK%2FkBDb4M3NNRi74Ag%2FHnLNt7Wafa10SQCV6wcNpKUrazStWP89%2BqgBTtz%2FtVr7fAWvbQP%2FeB3ZZAfgHOhBo2OxLBxeB2wnGW%2FunqElt9C9U2bSmn17F5D%2BUQh60BJD3w4CCHUDeYji1s%2BkfoTBF83rjafRHumbuTe9tXV7LYIAldfevZDCdd9hd%2BoC0na%2FxjEZ66%2FdW9MAmPsAh9GY7k1Px0rFeSjpFuhNxWJkM6xp8czDeuxjRN4JQOFzD4AqaXnCYXFNzTN%2BfbocIipDCNtf3EBjqkAf6GQ6xZAb49NWqRcQswPgxBB9XdR%2BeQlDasEaDB0uxIlw94o8WAu%2FSX%2FZn6LokOAZ1cAOc9gkYGcaUNuO4D5pSJ1J2gVLy7%2BMe5i9zF1Fiztp9t6kwSvZxJCleVu6V1HrslzrYGk2YUIzfHfjATyv%2B5rtgN3IarFxUci4vaCTALAZW97BW1Cukrrato3ZnPc6FdvpqddlciDBy1p1oSgCmEWkSt&X-Amz-Signature=843c594f251025ddfb3f25ed8d287c7d3d5add44f03da318ebb0802616950fda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5Y44SKN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDiPGNq4XoM8%2BKi0DXRz0YQCMmU6IDLK%2BA3UFWx3xYKnAIhAPDHM3yAcy5AXPxkb1cF3cEKWFyGZqzgGsPjGhkuabBxKv8DCGEQABoMNjM3NDIzMTgzODA1Igx6kil699H%2BDAGw%2BQYq3AOuHvCxQDkmA0%2BSL6OrTqedLwjv8EPXiwnKjXpBAi30pPLWf%2B6SUPzwqsMz4FzuGNCi9okUf0yaCb6smmEwcOp%2Bnc21A5iNLK2aHrQXNFI88KJwvcDsbDmph1KI1F9xDGZ6SuFUv4osJMUagLKSDbEErBOP2O0OFi79ljDzhTK1yOE4kn4YEmvexj%2Fzd5hXQ0WK8xArJ3Y1Eshg3glSkl%2FqDX%2BUK8btAnmjZdB5B6YSM3umdj4czLpm7eSX%2BOFJQijxVADFQYldTuZYv03uZd4GhJn%2B52RH4gEcMBg813Fimcbk0hdyeuFL2A2D2tuKWcOxBMfqWs3KgrzQ59qkp3JaGv1rsVkwOcBEPkYX7UenK%2FkBDb4M3NNRi74Ag%2FHnLNt7Wafa10SQCV6wcNpKUrazStWP89%2BqgBTtz%2FtVr7fAWvbQP%2FeB3ZZAfgHOhBo2OxLBxeB2wnGW%2FunqElt9C9U2bSmn17F5D%2BUQh60BJD3w4CCHUDeYji1s%2BkfoTBF83rjafRHumbuTe9tXV7LYIAldfevZDCdd9hd%2BoC0na%2FxjEZ66%2FdW9MAmPsAh9GY7k1Px0rFeSjpFuhNxWJkM6xp8czDeuxjRN4JQOFzD4AqaXnCYXFNzTN%2BfbocIipDCNtf3EBjqkAf6GQ6xZAb49NWqRcQswPgxBB9XdR%2BeQlDasEaDB0uxIlw94o8WAu%2FSX%2FZn6LokOAZ1cAOc9gkYGcaUNuO4D5pSJ1J2gVLy7%2BMe5i9zF1Fiztp9t6kwSvZxJCleVu6V1HrslzrYGk2YUIzfHfjATyv%2B5rtgN3IarFxUci4vaCTALAZW97BW1Cukrrato3ZnPc6FdvpqddlciDBy1p1oSgCmEWkSt&X-Amz-Signature=84c16f9eeefc3a745c037fbfdd0af8cedbd9ed5942e70fb564503a5f34aa4aa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5Y44SKN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T170855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDiPGNq4XoM8%2BKi0DXRz0YQCMmU6IDLK%2BA3UFWx3xYKnAIhAPDHM3yAcy5AXPxkb1cF3cEKWFyGZqzgGsPjGhkuabBxKv8DCGEQABoMNjM3NDIzMTgzODA1Igx6kil699H%2BDAGw%2BQYq3AOuHvCxQDkmA0%2BSL6OrTqedLwjv8EPXiwnKjXpBAi30pPLWf%2B6SUPzwqsMz4FzuGNCi9okUf0yaCb6smmEwcOp%2Bnc21A5iNLK2aHrQXNFI88KJwvcDsbDmph1KI1F9xDGZ6SuFUv4osJMUagLKSDbEErBOP2O0OFi79ljDzhTK1yOE4kn4YEmvexj%2Fzd5hXQ0WK8xArJ3Y1Eshg3glSkl%2FqDX%2BUK8btAnmjZdB5B6YSM3umdj4czLpm7eSX%2BOFJQijxVADFQYldTuZYv03uZd4GhJn%2B52RH4gEcMBg813Fimcbk0hdyeuFL2A2D2tuKWcOxBMfqWs3KgrzQ59qkp3JaGv1rsVkwOcBEPkYX7UenK%2FkBDb4M3NNRi74Ag%2FHnLNt7Wafa10SQCV6wcNpKUrazStWP89%2BqgBTtz%2FtVr7fAWvbQP%2FeB3ZZAfgHOhBo2OxLBxeB2wnGW%2FunqElt9C9U2bSmn17F5D%2BUQh60BJD3w4CCHUDeYji1s%2BkfoTBF83rjafRHumbuTe9tXV7LYIAldfevZDCdd9hd%2BoC0na%2FxjEZ66%2FdW9MAmPsAh9GY7k1Px0rFeSjpFuhNxWJkM6xp8czDeuxjRN4JQOFzD4AqaXnCYXFNzTN%2BfbocIipDCNtf3EBjqkAf6GQ6xZAb49NWqRcQswPgxBB9XdR%2BeQlDasEaDB0uxIlw94o8WAu%2FSX%2FZn6LokOAZ1cAOc9gkYGcaUNuO4D5pSJ1J2gVLy7%2BMe5i9zF1Fiztp9t6kwSvZxJCleVu6V1HrslzrYGk2YUIzfHfjATyv%2B5rtgN3IarFxUci4vaCTALAZW97BW1Cukrrato3ZnPc6FdvpqddlciDBy1p1oSgCmEWkSt&X-Amz-Signature=102490f9cd557da73ae46ffe797bef428f7d54b857a0ff9d8d6697e0786907af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
