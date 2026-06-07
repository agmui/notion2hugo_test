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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D5QUAB6%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXhPfvulVRsTtIAqCGAzujf985bHecrriP27CH351w0gIhANJ8ybAsTvDGjg90DIDN0POwrk9Qh5NBL7T56vfj2BiUKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdAT4WqTjniBx3N%2Bgq3AN9FgkF%2BuBoqApBQMHCr3VFdYGEvyJW6lYl1hMNz0iZU9UzZLCufeMaPLtScwCVpm06TfjJdNAM6O0vtYZYOr1xR%2BudbOFKAmOoFHKxfyKtgsSMsG6renCw2zQS8eQiL7nAECeFsC%2FOvirXVEm0tbt9wNi456fpn%2FU8zNoGccrTlPoSd6W%2BtlY%2FNawRWwXdgpmycOYZnhy%2FtSXQF46TzmCOnsIMEVupu5g0GhvQpoUTlD%2BRSjy5KJlExbn3pIg20O%2FVMMMIMtkYON%2FvHlP0qLMfpRbNFFZzuAheDAxgy3rZDENtzWOrSR%2BSLaPuVZTQH7pBgD%2B039Br%2BFwCv3VPA%2F7kpQx1kBiQpkRy6wrxb9bf2ddSFRLwLI3k13o7CFqX8%2Fk3UozALE0mxvBSxBSwWSnpSxsdy5Uw1Xm39JXUmKtUZiIbyiw2W9fgAkiLsEpsUACID2TZuEFTqCsf5ZBJOWKYXNyQSGznGCl4KB4nMd%2FJW4YbBn2axT226WVlLq3ntZI8ZaTjGqaTKwm44XUfzLKxuwB6vjthIOwQWtVBtK%2FV23oTF8Ea75ztJT%2BQDNOE1jOSRq0WEZflUKgNVJAQBSvpJXCYZeOQ5NkfzVyTDv4binm5sudr2TI3btEAbzDZ0JPRBjqkAeYsgTnUfFGEWL59usle3gcCxcKe0ZBclRWfKkd0XiArMIgHQ7A3z4Rx9k2zlW0JpuvZkKH8C9hxVa6%2BixxlRc02VNjtaJW58s8UO7HL%2B5jz9ZxuA0DtEEJ2r5OWlAKfJzrJJT467tMkMmlva4hmKzMe%2FmxzpgfdtWFYx%2Fp9FHiBXodPtjIL7NcQ6eIOXkzZFoQKwwZKPxcjxT5zKI2sHEmBwh%2FP&X-Amz-Signature=c4eb5a0c9e1d1279351ee3f847289e1c57be57486e3053920d26f10d61dd4b79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D5QUAB6%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXhPfvulVRsTtIAqCGAzujf985bHecrriP27CH351w0gIhANJ8ybAsTvDGjg90DIDN0POwrk9Qh5NBL7T56vfj2BiUKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdAT4WqTjniBx3N%2Bgq3AN9FgkF%2BuBoqApBQMHCr3VFdYGEvyJW6lYl1hMNz0iZU9UzZLCufeMaPLtScwCVpm06TfjJdNAM6O0vtYZYOr1xR%2BudbOFKAmOoFHKxfyKtgsSMsG6renCw2zQS8eQiL7nAECeFsC%2FOvirXVEm0tbt9wNi456fpn%2FU8zNoGccrTlPoSd6W%2BtlY%2FNawRWwXdgpmycOYZnhy%2FtSXQF46TzmCOnsIMEVupu5g0GhvQpoUTlD%2BRSjy5KJlExbn3pIg20O%2FVMMMIMtkYON%2FvHlP0qLMfpRbNFFZzuAheDAxgy3rZDENtzWOrSR%2BSLaPuVZTQH7pBgD%2B039Br%2BFwCv3VPA%2F7kpQx1kBiQpkRy6wrxb9bf2ddSFRLwLI3k13o7CFqX8%2Fk3UozALE0mxvBSxBSwWSnpSxsdy5Uw1Xm39JXUmKtUZiIbyiw2W9fgAkiLsEpsUACID2TZuEFTqCsf5ZBJOWKYXNyQSGznGCl4KB4nMd%2FJW4YbBn2axT226WVlLq3ntZI8ZaTjGqaTKwm44XUfzLKxuwB6vjthIOwQWtVBtK%2FV23oTF8Ea75ztJT%2BQDNOE1jOSRq0WEZflUKgNVJAQBSvpJXCYZeOQ5NkfzVyTDv4binm5sudr2TI3btEAbzDZ0JPRBjqkAeYsgTnUfFGEWL59usle3gcCxcKe0ZBclRWfKkd0XiArMIgHQ7A3z4Rx9k2zlW0JpuvZkKH8C9hxVa6%2BixxlRc02VNjtaJW58s8UO7HL%2B5jz9ZxuA0DtEEJ2r5OWlAKfJzrJJT467tMkMmlva4hmKzMe%2FmxzpgfdtWFYx%2Fp9FHiBXodPtjIL7NcQ6eIOXkzZFoQKwwZKPxcjxT5zKI2sHEmBwh%2FP&X-Amz-Signature=a74d9854a7f31a73611aec244525a35c619f071d44d6f28f612fe2c7777d31cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D5QUAB6%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXhPfvulVRsTtIAqCGAzujf985bHecrriP27CH351w0gIhANJ8ybAsTvDGjg90DIDN0POwrk9Qh5NBL7T56vfj2BiUKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdAT4WqTjniBx3N%2Bgq3AN9FgkF%2BuBoqApBQMHCr3VFdYGEvyJW6lYl1hMNz0iZU9UzZLCufeMaPLtScwCVpm06TfjJdNAM6O0vtYZYOr1xR%2BudbOFKAmOoFHKxfyKtgsSMsG6renCw2zQS8eQiL7nAECeFsC%2FOvirXVEm0tbt9wNi456fpn%2FU8zNoGccrTlPoSd6W%2BtlY%2FNawRWwXdgpmycOYZnhy%2FtSXQF46TzmCOnsIMEVupu5g0GhvQpoUTlD%2BRSjy5KJlExbn3pIg20O%2FVMMMIMtkYON%2FvHlP0qLMfpRbNFFZzuAheDAxgy3rZDENtzWOrSR%2BSLaPuVZTQH7pBgD%2B039Br%2BFwCv3VPA%2F7kpQx1kBiQpkRy6wrxb9bf2ddSFRLwLI3k13o7CFqX8%2Fk3UozALE0mxvBSxBSwWSnpSxsdy5Uw1Xm39JXUmKtUZiIbyiw2W9fgAkiLsEpsUACID2TZuEFTqCsf5ZBJOWKYXNyQSGznGCl4KB4nMd%2FJW4YbBn2axT226WVlLq3ntZI8ZaTjGqaTKwm44XUfzLKxuwB6vjthIOwQWtVBtK%2FV23oTF8Ea75ztJT%2BQDNOE1jOSRq0WEZflUKgNVJAQBSvpJXCYZeOQ5NkfzVyTDv4binm5sudr2TI3btEAbzDZ0JPRBjqkAeYsgTnUfFGEWL59usle3gcCxcKe0ZBclRWfKkd0XiArMIgHQ7A3z4Rx9k2zlW0JpuvZkKH8C9hxVa6%2BixxlRc02VNjtaJW58s8UO7HL%2B5jz9ZxuA0DtEEJ2r5OWlAKfJzrJJT467tMkMmlva4hmKzMe%2FmxzpgfdtWFYx%2Fp9FHiBXodPtjIL7NcQ6eIOXkzZFoQKwwZKPxcjxT5zKI2sHEmBwh%2FP&X-Amz-Signature=d5d0c8a59beec35f0766c1543488053a000022d2a21daa77337d7ea82a22a594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D5QUAB6%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXhPfvulVRsTtIAqCGAzujf985bHecrriP27CH351w0gIhANJ8ybAsTvDGjg90DIDN0POwrk9Qh5NBL7T56vfj2BiUKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdAT4WqTjniBx3N%2Bgq3AN9FgkF%2BuBoqApBQMHCr3VFdYGEvyJW6lYl1hMNz0iZU9UzZLCufeMaPLtScwCVpm06TfjJdNAM6O0vtYZYOr1xR%2BudbOFKAmOoFHKxfyKtgsSMsG6renCw2zQS8eQiL7nAECeFsC%2FOvirXVEm0tbt9wNi456fpn%2FU8zNoGccrTlPoSd6W%2BtlY%2FNawRWwXdgpmycOYZnhy%2FtSXQF46TzmCOnsIMEVupu5g0GhvQpoUTlD%2BRSjy5KJlExbn3pIg20O%2FVMMMIMtkYON%2FvHlP0qLMfpRbNFFZzuAheDAxgy3rZDENtzWOrSR%2BSLaPuVZTQH7pBgD%2B039Br%2BFwCv3VPA%2F7kpQx1kBiQpkRy6wrxb9bf2ddSFRLwLI3k13o7CFqX8%2Fk3UozALE0mxvBSxBSwWSnpSxsdy5Uw1Xm39JXUmKtUZiIbyiw2W9fgAkiLsEpsUACID2TZuEFTqCsf5ZBJOWKYXNyQSGznGCl4KB4nMd%2FJW4YbBn2axT226WVlLq3ntZI8ZaTjGqaTKwm44XUfzLKxuwB6vjthIOwQWtVBtK%2FV23oTF8Ea75ztJT%2BQDNOE1jOSRq0WEZflUKgNVJAQBSvpJXCYZeOQ5NkfzVyTDv4binm5sudr2TI3btEAbzDZ0JPRBjqkAeYsgTnUfFGEWL59usle3gcCxcKe0ZBclRWfKkd0XiArMIgHQ7A3z4Rx9k2zlW0JpuvZkKH8C9hxVa6%2BixxlRc02VNjtaJW58s8UO7HL%2B5jz9ZxuA0DtEEJ2r5OWlAKfJzrJJT467tMkMmlva4hmKzMe%2FmxzpgfdtWFYx%2Fp9FHiBXodPtjIL7NcQ6eIOXkzZFoQKwwZKPxcjxT5zKI2sHEmBwh%2FP&X-Amz-Signature=188eb023e6a16a90d73cad6f4e8cfd96f0c320056206fb7af4f2ee80aaded67b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D5QUAB6%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXhPfvulVRsTtIAqCGAzujf985bHecrriP27CH351w0gIhANJ8ybAsTvDGjg90DIDN0POwrk9Qh5NBL7T56vfj2BiUKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdAT4WqTjniBx3N%2Bgq3AN9FgkF%2BuBoqApBQMHCr3VFdYGEvyJW6lYl1hMNz0iZU9UzZLCufeMaPLtScwCVpm06TfjJdNAM6O0vtYZYOr1xR%2BudbOFKAmOoFHKxfyKtgsSMsG6renCw2zQS8eQiL7nAECeFsC%2FOvirXVEm0tbt9wNi456fpn%2FU8zNoGccrTlPoSd6W%2BtlY%2FNawRWwXdgpmycOYZnhy%2FtSXQF46TzmCOnsIMEVupu5g0GhvQpoUTlD%2BRSjy5KJlExbn3pIg20O%2FVMMMIMtkYON%2FvHlP0qLMfpRbNFFZzuAheDAxgy3rZDENtzWOrSR%2BSLaPuVZTQH7pBgD%2B039Br%2BFwCv3VPA%2F7kpQx1kBiQpkRy6wrxb9bf2ddSFRLwLI3k13o7CFqX8%2Fk3UozALE0mxvBSxBSwWSnpSxsdy5Uw1Xm39JXUmKtUZiIbyiw2W9fgAkiLsEpsUACID2TZuEFTqCsf5ZBJOWKYXNyQSGznGCl4KB4nMd%2FJW4YbBn2axT226WVlLq3ntZI8ZaTjGqaTKwm44XUfzLKxuwB6vjthIOwQWtVBtK%2FV23oTF8Ea75ztJT%2BQDNOE1jOSRq0WEZflUKgNVJAQBSvpJXCYZeOQ5NkfzVyTDv4binm5sudr2TI3btEAbzDZ0JPRBjqkAeYsgTnUfFGEWL59usle3gcCxcKe0ZBclRWfKkd0XiArMIgHQ7A3z4Rx9k2zlW0JpuvZkKH8C9hxVa6%2BixxlRc02VNjtaJW58s8UO7HL%2B5jz9ZxuA0DtEEJ2r5OWlAKfJzrJJT467tMkMmlva4hmKzMe%2FmxzpgfdtWFYx%2Fp9FHiBXodPtjIL7NcQ6eIOXkzZFoQKwwZKPxcjxT5zKI2sHEmBwh%2FP&X-Amz-Signature=4f3b2215fa2d52b7c9994a9b8774d5648c5680d3e7ad4a6ac39229fcdb5edc2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D5QUAB6%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXhPfvulVRsTtIAqCGAzujf985bHecrriP27CH351w0gIhANJ8ybAsTvDGjg90DIDN0POwrk9Qh5NBL7T56vfj2BiUKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdAT4WqTjniBx3N%2Bgq3AN9FgkF%2BuBoqApBQMHCr3VFdYGEvyJW6lYl1hMNz0iZU9UzZLCufeMaPLtScwCVpm06TfjJdNAM6O0vtYZYOr1xR%2BudbOFKAmOoFHKxfyKtgsSMsG6renCw2zQS8eQiL7nAECeFsC%2FOvirXVEm0tbt9wNi456fpn%2FU8zNoGccrTlPoSd6W%2BtlY%2FNawRWwXdgpmycOYZnhy%2FtSXQF46TzmCOnsIMEVupu5g0GhvQpoUTlD%2BRSjy5KJlExbn3pIg20O%2FVMMMIMtkYON%2FvHlP0qLMfpRbNFFZzuAheDAxgy3rZDENtzWOrSR%2BSLaPuVZTQH7pBgD%2B039Br%2BFwCv3VPA%2F7kpQx1kBiQpkRy6wrxb9bf2ddSFRLwLI3k13o7CFqX8%2Fk3UozALE0mxvBSxBSwWSnpSxsdy5Uw1Xm39JXUmKtUZiIbyiw2W9fgAkiLsEpsUACID2TZuEFTqCsf5ZBJOWKYXNyQSGznGCl4KB4nMd%2FJW4YbBn2axT226WVlLq3ntZI8ZaTjGqaTKwm44XUfzLKxuwB6vjthIOwQWtVBtK%2FV23oTF8Ea75ztJT%2BQDNOE1jOSRq0WEZflUKgNVJAQBSvpJXCYZeOQ5NkfzVyTDv4binm5sudr2TI3btEAbzDZ0JPRBjqkAeYsgTnUfFGEWL59usle3gcCxcKe0ZBclRWfKkd0XiArMIgHQ7A3z4Rx9k2zlW0JpuvZkKH8C9hxVa6%2BixxlRc02VNjtaJW58s8UO7HL%2B5jz9ZxuA0DtEEJ2r5OWlAKfJzrJJT467tMkMmlva4hmKzMe%2FmxzpgfdtWFYx%2Fp9FHiBXodPtjIL7NcQ6eIOXkzZFoQKwwZKPxcjxT5zKI2sHEmBwh%2FP&X-Amz-Signature=d0f131938a9a33c3fc59b781fe977fba303863265f2db617102b54d229dadf39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D5QUAB6%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXhPfvulVRsTtIAqCGAzujf985bHecrriP27CH351w0gIhANJ8ybAsTvDGjg90DIDN0POwrk9Qh5NBL7T56vfj2BiUKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdAT4WqTjniBx3N%2Bgq3AN9FgkF%2BuBoqApBQMHCr3VFdYGEvyJW6lYl1hMNz0iZU9UzZLCufeMaPLtScwCVpm06TfjJdNAM6O0vtYZYOr1xR%2BudbOFKAmOoFHKxfyKtgsSMsG6renCw2zQS8eQiL7nAECeFsC%2FOvirXVEm0tbt9wNi456fpn%2FU8zNoGccrTlPoSd6W%2BtlY%2FNawRWwXdgpmycOYZnhy%2FtSXQF46TzmCOnsIMEVupu5g0GhvQpoUTlD%2BRSjy5KJlExbn3pIg20O%2FVMMMIMtkYON%2FvHlP0qLMfpRbNFFZzuAheDAxgy3rZDENtzWOrSR%2BSLaPuVZTQH7pBgD%2B039Br%2BFwCv3VPA%2F7kpQx1kBiQpkRy6wrxb9bf2ddSFRLwLI3k13o7CFqX8%2Fk3UozALE0mxvBSxBSwWSnpSxsdy5Uw1Xm39JXUmKtUZiIbyiw2W9fgAkiLsEpsUACID2TZuEFTqCsf5ZBJOWKYXNyQSGznGCl4KB4nMd%2FJW4YbBn2axT226WVlLq3ntZI8ZaTjGqaTKwm44XUfzLKxuwB6vjthIOwQWtVBtK%2FV23oTF8Ea75ztJT%2BQDNOE1jOSRq0WEZflUKgNVJAQBSvpJXCYZeOQ5NkfzVyTDv4binm5sudr2TI3btEAbzDZ0JPRBjqkAeYsgTnUfFGEWL59usle3gcCxcKe0ZBclRWfKkd0XiArMIgHQ7A3z4Rx9k2zlW0JpuvZkKH8C9hxVa6%2BixxlRc02VNjtaJW58s8UO7HL%2B5jz9ZxuA0DtEEJ2r5OWlAKfJzrJJT467tMkMmlva4hmKzMe%2FmxzpgfdtWFYx%2Fp9FHiBXodPtjIL7NcQ6eIOXkzZFoQKwwZKPxcjxT5zKI2sHEmBwh%2FP&X-Amz-Signature=b69e411a4210f59bcb5a7660eb777586b3d22f1794e7674d98fa23fb82a83ce9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D5QUAB6%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXhPfvulVRsTtIAqCGAzujf985bHecrriP27CH351w0gIhANJ8ybAsTvDGjg90DIDN0POwrk9Qh5NBL7T56vfj2BiUKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdAT4WqTjniBx3N%2Bgq3AN9FgkF%2BuBoqApBQMHCr3VFdYGEvyJW6lYl1hMNz0iZU9UzZLCufeMaPLtScwCVpm06TfjJdNAM6O0vtYZYOr1xR%2BudbOFKAmOoFHKxfyKtgsSMsG6renCw2zQS8eQiL7nAECeFsC%2FOvirXVEm0tbt9wNi456fpn%2FU8zNoGccrTlPoSd6W%2BtlY%2FNawRWwXdgpmycOYZnhy%2FtSXQF46TzmCOnsIMEVupu5g0GhvQpoUTlD%2BRSjy5KJlExbn3pIg20O%2FVMMMIMtkYON%2FvHlP0qLMfpRbNFFZzuAheDAxgy3rZDENtzWOrSR%2BSLaPuVZTQH7pBgD%2B039Br%2BFwCv3VPA%2F7kpQx1kBiQpkRy6wrxb9bf2ddSFRLwLI3k13o7CFqX8%2Fk3UozALE0mxvBSxBSwWSnpSxsdy5Uw1Xm39JXUmKtUZiIbyiw2W9fgAkiLsEpsUACID2TZuEFTqCsf5ZBJOWKYXNyQSGznGCl4KB4nMd%2FJW4YbBn2axT226WVlLq3ntZI8ZaTjGqaTKwm44XUfzLKxuwB6vjthIOwQWtVBtK%2FV23oTF8Ea75ztJT%2BQDNOE1jOSRq0WEZflUKgNVJAQBSvpJXCYZeOQ5NkfzVyTDv4binm5sudr2TI3btEAbzDZ0JPRBjqkAeYsgTnUfFGEWL59usle3gcCxcKe0ZBclRWfKkd0XiArMIgHQ7A3z4Rx9k2zlW0JpuvZkKH8C9hxVa6%2BixxlRc02VNjtaJW58s8UO7HL%2B5jz9ZxuA0DtEEJ2r5OWlAKfJzrJJT467tMkMmlva4hmKzMe%2FmxzpgfdtWFYx%2Fp9FHiBXodPtjIL7NcQ6eIOXkzZFoQKwwZKPxcjxT5zKI2sHEmBwh%2FP&X-Amz-Signature=f4fb73ac4bcded55637674595aa9304d35f1dc9b24f6aced0427695b1f415ac5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D5QUAB6%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXhPfvulVRsTtIAqCGAzujf985bHecrriP27CH351w0gIhANJ8ybAsTvDGjg90DIDN0POwrk9Qh5NBL7T56vfj2BiUKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdAT4WqTjniBx3N%2Bgq3AN9FgkF%2BuBoqApBQMHCr3VFdYGEvyJW6lYl1hMNz0iZU9UzZLCufeMaPLtScwCVpm06TfjJdNAM6O0vtYZYOr1xR%2BudbOFKAmOoFHKxfyKtgsSMsG6renCw2zQS8eQiL7nAECeFsC%2FOvirXVEm0tbt9wNi456fpn%2FU8zNoGccrTlPoSd6W%2BtlY%2FNawRWwXdgpmycOYZnhy%2FtSXQF46TzmCOnsIMEVupu5g0GhvQpoUTlD%2BRSjy5KJlExbn3pIg20O%2FVMMMIMtkYON%2FvHlP0qLMfpRbNFFZzuAheDAxgy3rZDENtzWOrSR%2BSLaPuVZTQH7pBgD%2B039Br%2BFwCv3VPA%2F7kpQx1kBiQpkRy6wrxb9bf2ddSFRLwLI3k13o7CFqX8%2Fk3UozALE0mxvBSxBSwWSnpSxsdy5Uw1Xm39JXUmKtUZiIbyiw2W9fgAkiLsEpsUACID2TZuEFTqCsf5ZBJOWKYXNyQSGznGCl4KB4nMd%2FJW4YbBn2axT226WVlLq3ntZI8ZaTjGqaTKwm44XUfzLKxuwB6vjthIOwQWtVBtK%2FV23oTF8Ea75ztJT%2BQDNOE1jOSRq0WEZflUKgNVJAQBSvpJXCYZeOQ5NkfzVyTDv4binm5sudr2TI3btEAbzDZ0JPRBjqkAeYsgTnUfFGEWL59usle3gcCxcKe0ZBclRWfKkd0XiArMIgHQ7A3z4Rx9k2zlW0JpuvZkKH8C9hxVa6%2BixxlRc02VNjtaJW58s8UO7HL%2B5jz9ZxuA0DtEEJ2r5OWlAKfJzrJJT467tMkMmlva4hmKzMe%2FmxzpgfdtWFYx%2Fp9FHiBXodPtjIL7NcQ6eIOXkzZFoQKwwZKPxcjxT5zKI2sHEmBwh%2FP&X-Amz-Signature=9e023195426544f92d5c33f79a0eafd9ccca8609f169951be2bef499a4db6bb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D5QUAB6%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXhPfvulVRsTtIAqCGAzujf985bHecrriP27CH351w0gIhANJ8ybAsTvDGjg90DIDN0POwrk9Qh5NBL7T56vfj2BiUKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdAT4WqTjniBx3N%2Bgq3AN9FgkF%2BuBoqApBQMHCr3VFdYGEvyJW6lYl1hMNz0iZU9UzZLCufeMaPLtScwCVpm06TfjJdNAM6O0vtYZYOr1xR%2BudbOFKAmOoFHKxfyKtgsSMsG6renCw2zQS8eQiL7nAECeFsC%2FOvirXVEm0tbt9wNi456fpn%2FU8zNoGccrTlPoSd6W%2BtlY%2FNawRWwXdgpmycOYZnhy%2FtSXQF46TzmCOnsIMEVupu5g0GhvQpoUTlD%2BRSjy5KJlExbn3pIg20O%2FVMMMIMtkYON%2FvHlP0qLMfpRbNFFZzuAheDAxgy3rZDENtzWOrSR%2BSLaPuVZTQH7pBgD%2B039Br%2BFwCv3VPA%2F7kpQx1kBiQpkRy6wrxb9bf2ddSFRLwLI3k13o7CFqX8%2Fk3UozALE0mxvBSxBSwWSnpSxsdy5Uw1Xm39JXUmKtUZiIbyiw2W9fgAkiLsEpsUACID2TZuEFTqCsf5ZBJOWKYXNyQSGznGCl4KB4nMd%2FJW4YbBn2axT226WVlLq3ntZI8ZaTjGqaTKwm44XUfzLKxuwB6vjthIOwQWtVBtK%2FV23oTF8Ea75ztJT%2BQDNOE1jOSRq0WEZflUKgNVJAQBSvpJXCYZeOQ5NkfzVyTDv4binm5sudr2TI3btEAbzDZ0JPRBjqkAeYsgTnUfFGEWL59usle3gcCxcKe0ZBclRWfKkd0XiArMIgHQ7A3z4Rx9k2zlW0JpuvZkKH8C9hxVa6%2BixxlRc02VNjtaJW58s8UO7HL%2B5jz9ZxuA0DtEEJ2r5OWlAKfJzrJJT467tMkMmlva4hmKzMe%2FmxzpgfdtWFYx%2Fp9FHiBXodPtjIL7NcQ6eIOXkzZFoQKwwZKPxcjxT5zKI2sHEmBwh%2FP&X-Amz-Signature=072397ebe024f7faff793fbdd8dde2446041283dd8b0ce3783f90c2b8a80c459&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D5QUAB6%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXhPfvulVRsTtIAqCGAzujf985bHecrriP27CH351w0gIhANJ8ybAsTvDGjg90DIDN0POwrk9Qh5NBL7T56vfj2BiUKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdAT4WqTjniBx3N%2Bgq3AN9FgkF%2BuBoqApBQMHCr3VFdYGEvyJW6lYl1hMNz0iZU9UzZLCufeMaPLtScwCVpm06TfjJdNAM6O0vtYZYOr1xR%2BudbOFKAmOoFHKxfyKtgsSMsG6renCw2zQS8eQiL7nAECeFsC%2FOvirXVEm0tbt9wNi456fpn%2FU8zNoGccrTlPoSd6W%2BtlY%2FNawRWwXdgpmycOYZnhy%2FtSXQF46TzmCOnsIMEVupu5g0GhvQpoUTlD%2BRSjy5KJlExbn3pIg20O%2FVMMMIMtkYON%2FvHlP0qLMfpRbNFFZzuAheDAxgy3rZDENtzWOrSR%2BSLaPuVZTQH7pBgD%2B039Br%2BFwCv3VPA%2F7kpQx1kBiQpkRy6wrxb9bf2ddSFRLwLI3k13o7CFqX8%2Fk3UozALE0mxvBSxBSwWSnpSxsdy5Uw1Xm39JXUmKtUZiIbyiw2W9fgAkiLsEpsUACID2TZuEFTqCsf5ZBJOWKYXNyQSGznGCl4KB4nMd%2FJW4YbBn2axT226WVlLq3ntZI8ZaTjGqaTKwm44XUfzLKxuwB6vjthIOwQWtVBtK%2FV23oTF8Ea75ztJT%2BQDNOE1jOSRq0WEZflUKgNVJAQBSvpJXCYZeOQ5NkfzVyTDv4binm5sudr2TI3btEAbzDZ0JPRBjqkAeYsgTnUfFGEWL59usle3gcCxcKe0ZBclRWfKkd0XiArMIgHQ7A3z4Rx9k2zlW0JpuvZkKH8C9hxVa6%2BixxlRc02VNjtaJW58s8UO7HL%2B5jz9ZxuA0DtEEJ2r5OWlAKfJzrJJT467tMkMmlva4hmKzMe%2FmxzpgfdtWFYx%2Fp9FHiBXodPtjIL7NcQ6eIOXkzZFoQKwwZKPxcjxT5zKI2sHEmBwh%2FP&X-Amz-Signature=a8ba1ff3766f49845edf013122df9b5b76fca82510c2beaaf445df16ab64aef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D5QUAB6%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXhPfvulVRsTtIAqCGAzujf985bHecrriP27CH351w0gIhANJ8ybAsTvDGjg90DIDN0POwrk9Qh5NBL7T56vfj2BiUKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdAT4WqTjniBx3N%2Bgq3AN9FgkF%2BuBoqApBQMHCr3VFdYGEvyJW6lYl1hMNz0iZU9UzZLCufeMaPLtScwCVpm06TfjJdNAM6O0vtYZYOr1xR%2BudbOFKAmOoFHKxfyKtgsSMsG6renCw2zQS8eQiL7nAECeFsC%2FOvirXVEm0tbt9wNi456fpn%2FU8zNoGccrTlPoSd6W%2BtlY%2FNawRWwXdgpmycOYZnhy%2FtSXQF46TzmCOnsIMEVupu5g0GhvQpoUTlD%2BRSjy5KJlExbn3pIg20O%2FVMMMIMtkYON%2FvHlP0qLMfpRbNFFZzuAheDAxgy3rZDENtzWOrSR%2BSLaPuVZTQH7pBgD%2B039Br%2BFwCv3VPA%2F7kpQx1kBiQpkRy6wrxb9bf2ddSFRLwLI3k13o7CFqX8%2Fk3UozALE0mxvBSxBSwWSnpSxsdy5Uw1Xm39JXUmKtUZiIbyiw2W9fgAkiLsEpsUACID2TZuEFTqCsf5ZBJOWKYXNyQSGznGCl4KB4nMd%2FJW4YbBn2axT226WVlLq3ntZI8ZaTjGqaTKwm44XUfzLKxuwB6vjthIOwQWtVBtK%2FV23oTF8Ea75ztJT%2BQDNOE1jOSRq0WEZflUKgNVJAQBSvpJXCYZeOQ5NkfzVyTDv4binm5sudr2TI3btEAbzDZ0JPRBjqkAeYsgTnUfFGEWL59usle3gcCxcKe0ZBclRWfKkd0XiArMIgHQ7A3z4Rx9k2zlW0JpuvZkKH8C9hxVa6%2BixxlRc02VNjtaJW58s8UO7HL%2B5jz9ZxuA0DtEEJ2r5OWlAKfJzrJJT467tMkMmlva4hmKzMe%2FmxzpgfdtWFYx%2Fp9FHiBXodPtjIL7NcQ6eIOXkzZFoQKwwZKPxcjxT5zKI2sHEmBwh%2FP&X-Amz-Signature=fb1004fbb2237078148e589d2196f21d2c80d9312a96f761dffdcb4059695197&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D5QUAB6%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXhPfvulVRsTtIAqCGAzujf985bHecrriP27CH351w0gIhANJ8ybAsTvDGjg90DIDN0POwrk9Qh5NBL7T56vfj2BiUKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdAT4WqTjniBx3N%2Bgq3AN9FgkF%2BuBoqApBQMHCr3VFdYGEvyJW6lYl1hMNz0iZU9UzZLCufeMaPLtScwCVpm06TfjJdNAM6O0vtYZYOr1xR%2BudbOFKAmOoFHKxfyKtgsSMsG6renCw2zQS8eQiL7nAECeFsC%2FOvirXVEm0tbt9wNi456fpn%2FU8zNoGccrTlPoSd6W%2BtlY%2FNawRWwXdgpmycOYZnhy%2FtSXQF46TzmCOnsIMEVupu5g0GhvQpoUTlD%2BRSjy5KJlExbn3pIg20O%2FVMMMIMtkYON%2FvHlP0qLMfpRbNFFZzuAheDAxgy3rZDENtzWOrSR%2BSLaPuVZTQH7pBgD%2B039Br%2BFwCv3VPA%2F7kpQx1kBiQpkRy6wrxb9bf2ddSFRLwLI3k13o7CFqX8%2Fk3UozALE0mxvBSxBSwWSnpSxsdy5Uw1Xm39JXUmKtUZiIbyiw2W9fgAkiLsEpsUACID2TZuEFTqCsf5ZBJOWKYXNyQSGznGCl4KB4nMd%2FJW4YbBn2axT226WVlLq3ntZI8ZaTjGqaTKwm44XUfzLKxuwB6vjthIOwQWtVBtK%2FV23oTF8Ea75ztJT%2BQDNOE1jOSRq0WEZflUKgNVJAQBSvpJXCYZeOQ5NkfzVyTDv4binm5sudr2TI3btEAbzDZ0JPRBjqkAeYsgTnUfFGEWL59usle3gcCxcKe0ZBclRWfKkd0XiArMIgHQ7A3z4Rx9k2zlW0JpuvZkKH8C9hxVa6%2BixxlRc02VNjtaJW58s8UO7HL%2B5jz9ZxuA0DtEEJ2r5OWlAKfJzrJJT467tMkMmlva4hmKzMe%2FmxzpgfdtWFYx%2Fp9FHiBXodPtjIL7NcQ6eIOXkzZFoQKwwZKPxcjxT5zKI2sHEmBwh%2FP&X-Amz-Signature=81fc2b1eee6570ad4cae7ca6ef7c3a592776ec84ef6a5d715d7d5ffbda3d9ddd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D5QUAB6%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXhPfvulVRsTtIAqCGAzujf985bHecrriP27CH351w0gIhANJ8ybAsTvDGjg90DIDN0POwrk9Qh5NBL7T56vfj2BiUKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwdAT4WqTjniBx3N%2Bgq3AN9FgkF%2BuBoqApBQMHCr3VFdYGEvyJW6lYl1hMNz0iZU9UzZLCufeMaPLtScwCVpm06TfjJdNAM6O0vtYZYOr1xR%2BudbOFKAmOoFHKxfyKtgsSMsG6renCw2zQS8eQiL7nAECeFsC%2FOvirXVEm0tbt9wNi456fpn%2FU8zNoGccrTlPoSd6W%2BtlY%2FNawRWwXdgpmycOYZnhy%2FtSXQF46TzmCOnsIMEVupu5g0GhvQpoUTlD%2BRSjy5KJlExbn3pIg20O%2FVMMMIMtkYON%2FvHlP0qLMfpRbNFFZzuAheDAxgy3rZDENtzWOrSR%2BSLaPuVZTQH7pBgD%2B039Br%2BFwCv3VPA%2F7kpQx1kBiQpkRy6wrxb9bf2ddSFRLwLI3k13o7CFqX8%2Fk3UozALE0mxvBSxBSwWSnpSxsdy5Uw1Xm39JXUmKtUZiIbyiw2W9fgAkiLsEpsUACID2TZuEFTqCsf5ZBJOWKYXNyQSGznGCl4KB4nMd%2FJW4YbBn2axT226WVlLq3ntZI8ZaTjGqaTKwm44XUfzLKxuwB6vjthIOwQWtVBtK%2FV23oTF8Ea75ztJT%2BQDNOE1jOSRq0WEZflUKgNVJAQBSvpJXCYZeOQ5NkfzVyTDv4binm5sudr2TI3btEAbzDZ0JPRBjqkAeYsgTnUfFGEWL59usle3gcCxcKe0ZBclRWfKkd0XiArMIgHQ7A3z4Rx9k2zlW0JpuvZkKH8C9hxVa6%2BixxlRc02VNjtaJW58s8UO7HL%2B5jz9ZxuA0DtEEJ2r5OWlAKfJzrJJT467tMkMmlva4hmKzMe%2FmxzpgfdtWFYx%2Fp9FHiBXodPtjIL7NcQ6eIOXkzZFoQKwwZKPxcjxT5zKI2sHEmBwh%2FP&X-Amz-Signature=96f9fbdaa8226427cb0a9c4d9d30f59ac61a70e48a469cb5bfb5332f821e51ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
