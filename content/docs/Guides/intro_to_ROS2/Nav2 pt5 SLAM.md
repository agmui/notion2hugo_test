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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDKQZ7RJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQC%2B6epShyELfIwMK8cNHWaaLpUtD%2FzrtBsl5qWkzIa%2BWwIhAJfbWMlgWAVRqiBfua8vVNOIfn7gAQTXpcSuOFceUyGbKv8DCGIQABoMNjM3NDIzMTgzODA1IgzmXIth8BlHmNVqKSwq3AMmpZ3t4ShW9LgjQUgvD9QsLBizZLUjKdq1%2BRk0INh0qPUfwNCttTfZL%2F6%2Fu9fBfGrUmlZqQ%2F%2BZQ6zaTEwLYG8gxyENklk2li3grTfVk8PHxNWySuDtZyegSvyyrzDVNmHhM%2BFZRig%2Fq5ssumfnnPhQHPhP%2BTSDsF3plyVfV1SsRE6S1b%2FUbCGDow7vmEKIYl6WRSzRKamBa697Isi2NBn78CKHvyEOHp9sTLxu5Xcunn1gDmwwGxeKfLdkAzCmjx4jujW%2Bzz51Vn85a3emgJH50082d6vJ2QKC7JsupvdF%2F42u3%2Fy0rlJ6f%2FlS2W07ZHKFj7CSYdheWJf6GndS2ZTQOuZUDOs1td46Uc7W8qwQpOhLVu2cGoPkygZYONDKKEtqTCYdYEBJdzAhhYcYQ9jADBg0aFsbruv8odo0jPQvmyz9BjyewYavaMZ3saYlVvR4wx3saxzV7KG8F1xKnlyX9KjhdkRyyBw%2B0lKzE16aM1fVC3wlCIhgNm0g2Os8CN5DPlrugiB3rozcAJqBjZ2%2BREOfv5FrNeyV2I44EIyY8pnp6uJ0dj6jP0wxj7vzaOTnRYSt%2BP0%2FfcrqVioCPC3Mot6Qvwc7VUHvFyr6orTW1MByWCVzvbrg15z68DCE2%2F3EBjqkAZp07WabuBNk3OtkkBjQBHp1DoBb6yRMJgd%2B10UEMBMLKwOYaNQLpABHxYlAM%2FSlF6rBRelZR%2BkKgwkFza7gomfYQ8Q1ZR3335wNsdPBCwudIIVtSF9qa2f0Nw6ll5URJcz6LDFZT7PeFjhobayWIwwqOac4XlOInHleTNc4f%2FkYp6%2F42qLLau5FNcVDGrXVPeiyvF0UzlYF6xDVYv5J4fBK24%2Fq&X-Amz-Signature=7f10565192741954703a37cba6f4e7f410b2545fe092ce4bdd1b4536c9488930&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDKQZ7RJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQC%2B6epShyELfIwMK8cNHWaaLpUtD%2FzrtBsl5qWkzIa%2BWwIhAJfbWMlgWAVRqiBfua8vVNOIfn7gAQTXpcSuOFceUyGbKv8DCGIQABoMNjM3NDIzMTgzODA1IgzmXIth8BlHmNVqKSwq3AMmpZ3t4ShW9LgjQUgvD9QsLBizZLUjKdq1%2BRk0INh0qPUfwNCttTfZL%2F6%2Fu9fBfGrUmlZqQ%2F%2BZQ6zaTEwLYG8gxyENklk2li3grTfVk8PHxNWySuDtZyegSvyyrzDVNmHhM%2BFZRig%2Fq5ssumfnnPhQHPhP%2BTSDsF3plyVfV1SsRE6S1b%2FUbCGDow7vmEKIYl6WRSzRKamBa697Isi2NBn78CKHvyEOHp9sTLxu5Xcunn1gDmwwGxeKfLdkAzCmjx4jujW%2Bzz51Vn85a3emgJH50082d6vJ2QKC7JsupvdF%2F42u3%2Fy0rlJ6f%2FlS2W07ZHKFj7CSYdheWJf6GndS2ZTQOuZUDOs1td46Uc7W8qwQpOhLVu2cGoPkygZYONDKKEtqTCYdYEBJdzAhhYcYQ9jADBg0aFsbruv8odo0jPQvmyz9BjyewYavaMZ3saYlVvR4wx3saxzV7KG8F1xKnlyX9KjhdkRyyBw%2B0lKzE16aM1fVC3wlCIhgNm0g2Os8CN5DPlrugiB3rozcAJqBjZ2%2BREOfv5FrNeyV2I44EIyY8pnp6uJ0dj6jP0wxj7vzaOTnRYSt%2BP0%2FfcrqVioCPC3Mot6Qvwc7VUHvFyr6orTW1MByWCVzvbrg15z68DCE2%2F3EBjqkAZp07WabuBNk3OtkkBjQBHp1DoBb6yRMJgd%2B10UEMBMLKwOYaNQLpABHxYlAM%2FSlF6rBRelZR%2BkKgwkFza7gomfYQ8Q1ZR3335wNsdPBCwudIIVtSF9qa2f0Nw6ll5URJcz6LDFZT7PeFjhobayWIwwqOac4XlOInHleTNc4f%2FkYp6%2F42qLLau5FNcVDGrXVPeiyvF0UzlYF6xDVYv5J4fBK24%2Fq&X-Amz-Signature=0faf1f2bfc9b99dc1d011cd05c66aab547167f1a0086f1a425a3f4308b35699c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDKQZ7RJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQC%2B6epShyELfIwMK8cNHWaaLpUtD%2FzrtBsl5qWkzIa%2BWwIhAJfbWMlgWAVRqiBfua8vVNOIfn7gAQTXpcSuOFceUyGbKv8DCGIQABoMNjM3NDIzMTgzODA1IgzmXIth8BlHmNVqKSwq3AMmpZ3t4ShW9LgjQUgvD9QsLBizZLUjKdq1%2BRk0INh0qPUfwNCttTfZL%2F6%2Fu9fBfGrUmlZqQ%2F%2BZQ6zaTEwLYG8gxyENklk2li3grTfVk8PHxNWySuDtZyegSvyyrzDVNmHhM%2BFZRig%2Fq5ssumfnnPhQHPhP%2BTSDsF3plyVfV1SsRE6S1b%2FUbCGDow7vmEKIYl6WRSzRKamBa697Isi2NBn78CKHvyEOHp9sTLxu5Xcunn1gDmwwGxeKfLdkAzCmjx4jujW%2Bzz51Vn85a3emgJH50082d6vJ2QKC7JsupvdF%2F42u3%2Fy0rlJ6f%2FlS2W07ZHKFj7CSYdheWJf6GndS2ZTQOuZUDOs1td46Uc7W8qwQpOhLVu2cGoPkygZYONDKKEtqTCYdYEBJdzAhhYcYQ9jADBg0aFsbruv8odo0jPQvmyz9BjyewYavaMZ3saYlVvR4wx3saxzV7KG8F1xKnlyX9KjhdkRyyBw%2B0lKzE16aM1fVC3wlCIhgNm0g2Os8CN5DPlrugiB3rozcAJqBjZ2%2BREOfv5FrNeyV2I44EIyY8pnp6uJ0dj6jP0wxj7vzaOTnRYSt%2BP0%2FfcrqVioCPC3Mot6Qvwc7VUHvFyr6orTW1MByWCVzvbrg15z68DCE2%2F3EBjqkAZp07WabuBNk3OtkkBjQBHp1DoBb6yRMJgd%2B10UEMBMLKwOYaNQLpABHxYlAM%2FSlF6rBRelZR%2BkKgwkFza7gomfYQ8Q1ZR3335wNsdPBCwudIIVtSF9qa2f0Nw6ll5URJcz6LDFZT7PeFjhobayWIwwqOac4XlOInHleTNc4f%2FkYp6%2F42qLLau5FNcVDGrXVPeiyvF0UzlYF6xDVYv5J4fBK24%2Fq&X-Amz-Signature=929e1b3a9eef3010bd0cfd0a23e9621e077962414fb3c041444ad77358f82250&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDKQZ7RJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQC%2B6epShyELfIwMK8cNHWaaLpUtD%2FzrtBsl5qWkzIa%2BWwIhAJfbWMlgWAVRqiBfua8vVNOIfn7gAQTXpcSuOFceUyGbKv8DCGIQABoMNjM3NDIzMTgzODA1IgzmXIth8BlHmNVqKSwq3AMmpZ3t4ShW9LgjQUgvD9QsLBizZLUjKdq1%2BRk0INh0qPUfwNCttTfZL%2F6%2Fu9fBfGrUmlZqQ%2F%2BZQ6zaTEwLYG8gxyENklk2li3grTfVk8PHxNWySuDtZyegSvyyrzDVNmHhM%2BFZRig%2Fq5ssumfnnPhQHPhP%2BTSDsF3plyVfV1SsRE6S1b%2FUbCGDow7vmEKIYl6WRSzRKamBa697Isi2NBn78CKHvyEOHp9sTLxu5Xcunn1gDmwwGxeKfLdkAzCmjx4jujW%2Bzz51Vn85a3emgJH50082d6vJ2QKC7JsupvdF%2F42u3%2Fy0rlJ6f%2FlS2W07ZHKFj7CSYdheWJf6GndS2ZTQOuZUDOs1td46Uc7W8qwQpOhLVu2cGoPkygZYONDKKEtqTCYdYEBJdzAhhYcYQ9jADBg0aFsbruv8odo0jPQvmyz9BjyewYavaMZ3saYlVvR4wx3saxzV7KG8F1xKnlyX9KjhdkRyyBw%2B0lKzE16aM1fVC3wlCIhgNm0g2Os8CN5DPlrugiB3rozcAJqBjZ2%2BREOfv5FrNeyV2I44EIyY8pnp6uJ0dj6jP0wxj7vzaOTnRYSt%2BP0%2FfcrqVioCPC3Mot6Qvwc7VUHvFyr6orTW1MByWCVzvbrg15z68DCE2%2F3EBjqkAZp07WabuBNk3OtkkBjQBHp1DoBb6yRMJgd%2B10UEMBMLKwOYaNQLpABHxYlAM%2FSlF6rBRelZR%2BkKgwkFza7gomfYQ8Q1ZR3335wNsdPBCwudIIVtSF9qa2f0Nw6ll5URJcz6LDFZT7PeFjhobayWIwwqOac4XlOInHleTNc4f%2FkYp6%2F42qLLau5FNcVDGrXVPeiyvF0UzlYF6xDVYv5J4fBK24%2Fq&X-Amz-Signature=aeb6d7cda9bbf4b863fbbdfb6b154524696a16c2230236476552c5224546d0c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDKQZ7RJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQC%2B6epShyELfIwMK8cNHWaaLpUtD%2FzrtBsl5qWkzIa%2BWwIhAJfbWMlgWAVRqiBfua8vVNOIfn7gAQTXpcSuOFceUyGbKv8DCGIQABoMNjM3NDIzMTgzODA1IgzmXIth8BlHmNVqKSwq3AMmpZ3t4ShW9LgjQUgvD9QsLBizZLUjKdq1%2BRk0INh0qPUfwNCttTfZL%2F6%2Fu9fBfGrUmlZqQ%2F%2BZQ6zaTEwLYG8gxyENklk2li3grTfVk8PHxNWySuDtZyegSvyyrzDVNmHhM%2BFZRig%2Fq5ssumfnnPhQHPhP%2BTSDsF3plyVfV1SsRE6S1b%2FUbCGDow7vmEKIYl6WRSzRKamBa697Isi2NBn78CKHvyEOHp9sTLxu5Xcunn1gDmwwGxeKfLdkAzCmjx4jujW%2Bzz51Vn85a3emgJH50082d6vJ2QKC7JsupvdF%2F42u3%2Fy0rlJ6f%2FlS2W07ZHKFj7CSYdheWJf6GndS2ZTQOuZUDOs1td46Uc7W8qwQpOhLVu2cGoPkygZYONDKKEtqTCYdYEBJdzAhhYcYQ9jADBg0aFsbruv8odo0jPQvmyz9BjyewYavaMZ3saYlVvR4wx3saxzV7KG8F1xKnlyX9KjhdkRyyBw%2B0lKzE16aM1fVC3wlCIhgNm0g2Os8CN5DPlrugiB3rozcAJqBjZ2%2BREOfv5FrNeyV2I44EIyY8pnp6uJ0dj6jP0wxj7vzaOTnRYSt%2BP0%2FfcrqVioCPC3Mot6Qvwc7VUHvFyr6orTW1MByWCVzvbrg15z68DCE2%2F3EBjqkAZp07WabuBNk3OtkkBjQBHp1DoBb6yRMJgd%2B10UEMBMLKwOYaNQLpABHxYlAM%2FSlF6rBRelZR%2BkKgwkFza7gomfYQ8Q1ZR3335wNsdPBCwudIIVtSF9qa2f0Nw6ll5URJcz6LDFZT7PeFjhobayWIwwqOac4XlOInHleTNc4f%2FkYp6%2F42qLLau5FNcVDGrXVPeiyvF0UzlYF6xDVYv5J4fBK24%2Fq&X-Amz-Signature=a0ad04c1ac2075a31a5c0751f5e6bbb04065942486cf73cebfd37f43c10b7035&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDKQZ7RJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQC%2B6epShyELfIwMK8cNHWaaLpUtD%2FzrtBsl5qWkzIa%2BWwIhAJfbWMlgWAVRqiBfua8vVNOIfn7gAQTXpcSuOFceUyGbKv8DCGIQABoMNjM3NDIzMTgzODA1IgzmXIth8BlHmNVqKSwq3AMmpZ3t4ShW9LgjQUgvD9QsLBizZLUjKdq1%2BRk0INh0qPUfwNCttTfZL%2F6%2Fu9fBfGrUmlZqQ%2F%2BZQ6zaTEwLYG8gxyENklk2li3grTfVk8PHxNWySuDtZyegSvyyrzDVNmHhM%2BFZRig%2Fq5ssumfnnPhQHPhP%2BTSDsF3plyVfV1SsRE6S1b%2FUbCGDow7vmEKIYl6WRSzRKamBa697Isi2NBn78CKHvyEOHp9sTLxu5Xcunn1gDmwwGxeKfLdkAzCmjx4jujW%2Bzz51Vn85a3emgJH50082d6vJ2QKC7JsupvdF%2F42u3%2Fy0rlJ6f%2FlS2W07ZHKFj7CSYdheWJf6GndS2ZTQOuZUDOs1td46Uc7W8qwQpOhLVu2cGoPkygZYONDKKEtqTCYdYEBJdzAhhYcYQ9jADBg0aFsbruv8odo0jPQvmyz9BjyewYavaMZ3saYlVvR4wx3saxzV7KG8F1xKnlyX9KjhdkRyyBw%2B0lKzE16aM1fVC3wlCIhgNm0g2Os8CN5DPlrugiB3rozcAJqBjZ2%2BREOfv5FrNeyV2I44EIyY8pnp6uJ0dj6jP0wxj7vzaOTnRYSt%2BP0%2FfcrqVioCPC3Mot6Qvwc7VUHvFyr6orTW1MByWCVzvbrg15z68DCE2%2F3EBjqkAZp07WabuBNk3OtkkBjQBHp1DoBb6yRMJgd%2B10UEMBMLKwOYaNQLpABHxYlAM%2FSlF6rBRelZR%2BkKgwkFza7gomfYQ8Q1ZR3335wNsdPBCwudIIVtSF9qa2f0Nw6ll5URJcz6LDFZT7PeFjhobayWIwwqOac4XlOInHleTNc4f%2FkYp6%2F42qLLau5FNcVDGrXVPeiyvF0UzlYF6xDVYv5J4fBK24%2Fq&X-Amz-Signature=edeeffa6f6718cb82655d52db7c438aab906b6660be0df4c5bd04b3e498146c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDKQZ7RJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQC%2B6epShyELfIwMK8cNHWaaLpUtD%2FzrtBsl5qWkzIa%2BWwIhAJfbWMlgWAVRqiBfua8vVNOIfn7gAQTXpcSuOFceUyGbKv8DCGIQABoMNjM3NDIzMTgzODA1IgzmXIth8BlHmNVqKSwq3AMmpZ3t4ShW9LgjQUgvD9QsLBizZLUjKdq1%2BRk0INh0qPUfwNCttTfZL%2F6%2Fu9fBfGrUmlZqQ%2F%2BZQ6zaTEwLYG8gxyENklk2li3grTfVk8PHxNWySuDtZyegSvyyrzDVNmHhM%2BFZRig%2Fq5ssumfnnPhQHPhP%2BTSDsF3plyVfV1SsRE6S1b%2FUbCGDow7vmEKIYl6WRSzRKamBa697Isi2NBn78CKHvyEOHp9sTLxu5Xcunn1gDmwwGxeKfLdkAzCmjx4jujW%2Bzz51Vn85a3emgJH50082d6vJ2QKC7JsupvdF%2F42u3%2Fy0rlJ6f%2FlS2W07ZHKFj7CSYdheWJf6GndS2ZTQOuZUDOs1td46Uc7W8qwQpOhLVu2cGoPkygZYONDKKEtqTCYdYEBJdzAhhYcYQ9jADBg0aFsbruv8odo0jPQvmyz9BjyewYavaMZ3saYlVvR4wx3saxzV7KG8F1xKnlyX9KjhdkRyyBw%2B0lKzE16aM1fVC3wlCIhgNm0g2Os8CN5DPlrugiB3rozcAJqBjZ2%2BREOfv5FrNeyV2I44EIyY8pnp6uJ0dj6jP0wxj7vzaOTnRYSt%2BP0%2FfcrqVioCPC3Mot6Qvwc7VUHvFyr6orTW1MByWCVzvbrg15z68DCE2%2F3EBjqkAZp07WabuBNk3OtkkBjQBHp1DoBb6yRMJgd%2B10UEMBMLKwOYaNQLpABHxYlAM%2FSlF6rBRelZR%2BkKgwkFza7gomfYQ8Q1ZR3335wNsdPBCwudIIVtSF9qa2f0Nw6ll5URJcz6LDFZT7PeFjhobayWIwwqOac4XlOInHleTNc4f%2FkYp6%2F42qLLau5FNcVDGrXVPeiyvF0UzlYF6xDVYv5J4fBK24%2Fq&X-Amz-Signature=0314cee4d4eb1f62fdf9ce07ada6c1946fc3fc544e93f6155bb72667f8f6ed08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDKQZ7RJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQC%2B6epShyELfIwMK8cNHWaaLpUtD%2FzrtBsl5qWkzIa%2BWwIhAJfbWMlgWAVRqiBfua8vVNOIfn7gAQTXpcSuOFceUyGbKv8DCGIQABoMNjM3NDIzMTgzODA1IgzmXIth8BlHmNVqKSwq3AMmpZ3t4ShW9LgjQUgvD9QsLBizZLUjKdq1%2BRk0INh0qPUfwNCttTfZL%2F6%2Fu9fBfGrUmlZqQ%2F%2BZQ6zaTEwLYG8gxyENklk2li3grTfVk8PHxNWySuDtZyegSvyyrzDVNmHhM%2BFZRig%2Fq5ssumfnnPhQHPhP%2BTSDsF3plyVfV1SsRE6S1b%2FUbCGDow7vmEKIYl6WRSzRKamBa697Isi2NBn78CKHvyEOHp9sTLxu5Xcunn1gDmwwGxeKfLdkAzCmjx4jujW%2Bzz51Vn85a3emgJH50082d6vJ2QKC7JsupvdF%2F42u3%2Fy0rlJ6f%2FlS2W07ZHKFj7CSYdheWJf6GndS2ZTQOuZUDOs1td46Uc7W8qwQpOhLVu2cGoPkygZYONDKKEtqTCYdYEBJdzAhhYcYQ9jADBg0aFsbruv8odo0jPQvmyz9BjyewYavaMZ3saYlVvR4wx3saxzV7KG8F1xKnlyX9KjhdkRyyBw%2B0lKzE16aM1fVC3wlCIhgNm0g2Os8CN5DPlrugiB3rozcAJqBjZ2%2BREOfv5FrNeyV2I44EIyY8pnp6uJ0dj6jP0wxj7vzaOTnRYSt%2BP0%2FfcrqVioCPC3Mot6Qvwc7VUHvFyr6orTW1MByWCVzvbrg15z68DCE2%2F3EBjqkAZp07WabuBNk3OtkkBjQBHp1DoBb6yRMJgd%2B10UEMBMLKwOYaNQLpABHxYlAM%2FSlF6rBRelZR%2BkKgwkFza7gomfYQ8Q1ZR3335wNsdPBCwudIIVtSF9qa2f0Nw6ll5URJcz6LDFZT7PeFjhobayWIwwqOac4XlOInHleTNc4f%2FkYp6%2F42qLLau5FNcVDGrXVPeiyvF0UzlYF6xDVYv5J4fBK24%2Fq&X-Amz-Signature=c4b5559d25bccedc47d398f745eddd37e8f8b11cb78c72edf79b8205b9ef876a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDKQZ7RJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQC%2B6epShyELfIwMK8cNHWaaLpUtD%2FzrtBsl5qWkzIa%2BWwIhAJfbWMlgWAVRqiBfua8vVNOIfn7gAQTXpcSuOFceUyGbKv8DCGIQABoMNjM3NDIzMTgzODA1IgzmXIth8BlHmNVqKSwq3AMmpZ3t4ShW9LgjQUgvD9QsLBizZLUjKdq1%2BRk0INh0qPUfwNCttTfZL%2F6%2Fu9fBfGrUmlZqQ%2F%2BZQ6zaTEwLYG8gxyENklk2li3grTfVk8PHxNWySuDtZyegSvyyrzDVNmHhM%2BFZRig%2Fq5ssumfnnPhQHPhP%2BTSDsF3plyVfV1SsRE6S1b%2FUbCGDow7vmEKIYl6WRSzRKamBa697Isi2NBn78CKHvyEOHp9sTLxu5Xcunn1gDmwwGxeKfLdkAzCmjx4jujW%2Bzz51Vn85a3emgJH50082d6vJ2QKC7JsupvdF%2F42u3%2Fy0rlJ6f%2FlS2W07ZHKFj7CSYdheWJf6GndS2ZTQOuZUDOs1td46Uc7W8qwQpOhLVu2cGoPkygZYONDKKEtqTCYdYEBJdzAhhYcYQ9jADBg0aFsbruv8odo0jPQvmyz9BjyewYavaMZ3saYlVvR4wx3saxzV7KG8F1xKnlyX9KjhdkRyyBw%2B0lKzE16aM1fVC3wlCIhgNm0g2Os8CN5DPlrugiB3rozcAJqBjZ2%2BREOfv5FrNeyV2I44EIyY8pnp6uJ0dj6jP0wxj7vzaOTnRYSt%2BP0%2FfcrqVioCPC3Mot6Qvwc7VUHvFyr6orTW1MByWCVzvbrg15z68DCE2%2F3EBjqkAZp07WabuBNk3OtkkBjQBHp1DoBb6yRMJgd%2B10UEMBMLKwOYaNQLpABHxYlAM%2FSlF6rBRelZR%2BkKgwkFza7gomfYQ8Q1ZR3335wNsdPBCwudIIVtSF9qa2f0Nw6ll5URJcz6LDFZT7PeFjhobayWIwwqOac4XlOInHleTNc4f%2FkYp6%2F42qLLau5FNcVDGrXVPeiyvF0UzlYF6xDVYv5J4fBK24%2Fq&X-Amz-Signature=a0fcccfe5769278d699d3564b09fdf050833533713710ab3bffec4ffa2b89c92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDKQZ7RJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQC%2B6epShyELfIwMK8cNHWaaLpUtD%2FzrtBsl5qWkzIa%2BWwIhAJfbWMlgWAVRqiBfua8vVNOIfn7gAQTXpcSuOFceUyGbKv8DCGIQABoMNjM3NDIzMTgzODA1IgzmXIth8BlHmNVqKSwq3AMmpZ3t4ShW9LgjQUgvD9QsLBizZLUjKdq1%2BRk0INh0qPUfwNCttTfZL%2F6%2Fu9fBfGrUmlZqQ%2F%2BZQ6zaTEwLYG8gxyENklk2li3grTfVk8PHxNWySuDtZyegSvyyrzDVNmHhM%2BFZRig%2Fq5ssumfnnPhQHPhP%2BTSDsF3plyVfV1SsRE6S1b%2FUbCGDow7vmEKIYl6WRSzRKamBa697Isi2NBn78CKHvyEOHp9sTLxu5Xcunn1gDmwwGxeKfLdkAzCmjx4jujW%2Bzz51Vn85a3emgJH50082d6vJ2QKC7JsupvdF%2F42u3%2Fy0rlJ6f%2FlS2W07ZHKFj7CSYdheWJf6GndS2ZTQOuZUDOs1td46Uc7W8qwQpOhLVu2cGoPkygZYONDKKEtqTCYdYEBJdzAhhYcYQ9jADBg0aFsbruv8odo0jPQvmyz9BjyewYavaMZ3saYlVvR4wx3saxzV7KG8F1xKnlyX9KjhdkRyyBw%2B0lKzE16aM1fVC3wlCIhgNm0g2Os8CN5DPlrugiB3rozcAJqBjZ2%2BREOfv5FrNeyV2I44EIyY8pnp6uJ0dj6jP0wxj7vzaOTnRYSt%2BP0%2FfcrqVioCPC3Mot6Qvwc7VUHvFyr6orTW1MByWCVzvbrg15z68DCE2%2F3EBjqkAZp07WabuBNk3OtkkBjQBHp1DoBb6yRMJgd%2B10UEMBMLKwOYaNQLpABHxYlAM%2FSlF6rBRelZR%2BkKgwkFza7gomfYQ8Q1ZR3335wNsdPBCwudIIVtSF9qa2f0Nw6ll5URJcz6LDFZT7PeFjhobayWIwwqOac4XlOInHleTNc4f%2FkYp6%2F42qLLau5FNcVDGrXVPeiyvF0UzlYF6xDVYv5J4fBK24%2Fq&X-Amz-Signature=7d0f290da15670960e969aaebb4bbfbc89ca8907405db3dbd18edfb6704e83eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDKQZ7RJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQC%2B6epShyELfIwMK8cNHWaaLpUtD%2FzrtBsl5qWkzIa%2BWwIhAJfbWMlgWAVRqiBfua8vVNOIfn7gAQTXpcSuOFceUyGbKv8DCGIQABoMNjM3NDIzMTgzODA1IgzmXIth8BlHmNVqKSwq3AMmpZ3t4ShW9LgjQUgvD9QsLBizZLUjKdq1%2BRk0INh0qPUfwNCttTfZL%2F6%2Fu9fBfGrUmlZqQ%2F%2BZQ6zaTEwLYG8gxyENklk2li3grTfVk8PHxNWySuDtZyegSvyyrzDVNmHhM%2BFZRig%2Fq5ssumfnnPhQHPhP%2BTSDsF3plyVfV1SsRE6S1b%2FUbCGDow7vmEKIYl6WRSzRKamBa697Isi2NBn78CKHvyEOHp9sTLxu5Xcunn1gDmwwGxeKfLdkAzCmjx4jujW%2Bzz51Vn85a3emgJH50082d6vJ2QKC7JsupvdF%2F42u3%2Fy0rlJ6f%2FlS2W07ZHKFj7CSYdheWJf6GndS2ZTQOuZUDOs1td46Uc7W8qwQpOhLVu2cGoPkygZYONDKKEtqTCYdYEBJdzAhhYcYQ9jADBg0aFsbruv8odo0jPQvmyz9BjyewYavaMZ3saYlVvR4wx3saxzV7KG8F1xKnlyX9KjhdkRyyBw%2B0lKzE16aM1fVC3wlCIhgNm0g2Os8CN5DPlrugiB3rozcAJqBjZ2%2BREOfv5FrNeyV2I44EIyY8pnp6uJ0dj6jP0wxj7vzaOTnRYSt%2BP0%2FfcrqVioCPC3Mot6Qvwc7VUHvFyr6orTW1MByWCVzvbrg15z68DCE2%2F3EBjqkAZp07WabuBNk3OtkkBjQBHp1DoBb6yRMJgd%2B10UEMBMLKwOYaNQLpABHxYlAM%2FSlF6rBRelZR%2BkKgwkFza7gomfYQ8Q1ZR3335wNsdPBCwudIIVtSF9qa2f0Nw6ll5URJcz6LDFZT7PeFjhobayWIwwqOac4XlOInHleTNc4f%2FkYp6%2F42qLLau5FNcVDGrXVPeiyvF0UzlYF6xDVYv5J4fBK24%2Fq&X-Amz-Signature=9ee38b114f6de69e8f0189859b32b91f3d9465f75dedd34d656a2777b467337b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDKQZ7RJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQC%2B6epShyELfIwMK8cNHWaaLpUtD%2FzrtBsl5qWkzIa%2BWwIhAJfbWMlgWAVRqiBfua8vVNOIfn7gAQTXpcSuOFceUyGbKv8DCGIQABoMNjM3NDIzMTgzODA1IgzmXIth8BlHmNVqKSwq3AMmpZ3t4ShW9LgjQUgvD9QsLBizZLUjKdq1%2BRk0INh0qPUfwNCttTfZL%2F6%2Fu9fBfGrUmlZqQ%2F%2BZQ6zaTEwLYG8gxyENklk2li3grTfVk8PHxNWySuDtZyegSvyyrzDVNmHhM%2BFZRig%2Fq5ssumfnnPhQHPhP%2BTSDsF3plyVfV1SsRE6S1b%2FUbCGDow7vmEKIYl6WRSzRKamBa697Isi2NBn78CKHvyEOHp9sTLxu5Xcunn1gDmwwGxeKfLdkAzCmjx4jujW%2Bzz51Vn85a3emgJH50082d6vJ2QKC7JsupvdF%2F42u3%2Fy0rlJ6f%2FlS2W07ZHKFj7CSYdheWJf6GndS2ZTQOuZUDOs1td46Uc7W8qwQpOhLVu2cGoPkygZYONDKKEtqTCYdYEBJdzAhhYcYQ9jADBg0aFsbruv8odo0jPQvmyz9BjyewYavaMZ3saYlVvR4wx3saxzV7KG8F1xKnlyX9KjhdkRyyBw%2B0lKzE16aM1fVC3wlCIhgNm0g2Os8CN5DPlrugiB3rozcAJqBjZ2%2BREOfv5FrNeyV2I44EIyY8pnp6uJ0dj6jP0wxj7vzaOTnRYSt%2BP0%2FfcrqVioCPC3Mot6Qvwc7VUHvFyr6orTW1MByWCVzvbrg15z68DCE2%2F3EBjqkAZp07WabuBNk3OtkkBjQBHp1DoBb6yRMJgd%2B10UEMBMLKwOYaNQLpABHxYlAM%2FSlF6rBRelZR%2BkKgwkFza7gomfYQ8Q1ZR3335wNsdPBCwudIIVtSF9qa2f0Nw6ll5URJcz6LDFZT7PeFjhobayWIwwqOac4XlOInHleTNc4f%2FkYp6%2F42qLLau5FNcVDGrXVPeiyvF0UzlYF6xDVYv5J4fBK24%2Fq&X-Amz-Signature=e84b2ac9f6f0e1baf48f3ff3af77c1a5e0515ef07c0bddd36383f77814b34332&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDKQZ7RJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQC%2B6epShyELfIwMK8cNHWaaLpUtD%2FzrtBsl5qWkzIa%2BWwIhAJfbWMlgWAVRqiBfua8vVNOIfn7gAQTXpcSuOFceUyGbKv8DCGIQABoMNjM3NDIzMTgzODA1IgzmXIth8BlHmNVqKSwq3AMmpZ3t4ShW9LgjQUgvD9QsLBizZLUjKdq1%2BRk0INh0qPUfwNCttTfZL%2F6%2Fu9fBfGrUmlZqQ%2F%2BZQ6zaTEwLYG8gxyENklk2li3grTfVk8PHxNWySuDtZyegSvyyrzDVNmHhM%2BFZRig%2Fq5ssumfnnPhQHPhP%2BTSDsF3plyVfV1SsRE6S1b%2FUbCGDow7vmEKIYl6WRSzRKamBa697Isi2NBn78CKHvyEOHp9sTLxu5Xcunn1gDmwwGxeKfLdkAzCmjx4jujW%2Bzz51Vn85a3emgJH50082d6vJ2QKC7JsupvdF%2F42u3%2Fy0rlJ6f%2FlS2W07ZHKFj7CSYdheWJf6GndS2ZTQOuZUDOs1td46Uc7W8qwQpOhLVu2cGoPkygZYONDKKEtqTCYdYEBJdzAhhYcYQ9jADBg0aFsbruv8odo0jPQvmyz9BjyewYavaMZ3saYlVvR4wx3saxzV7KG8F1xKnlyX9KjhdkRyyBw%2B0lKzE16aM1fVC3wlCIhgNm0g2Os8CN5DPlrugiB3rozcAJqBjZ2%2BREOfv5FrNeyV2I44EIyY8pnp6uJ0dj6jP0wxj7vzaOTnRYSt%2BP0%2FfcrqVioCPC3Mot6Qvwc7VUHvFyr6orTW1MByWCVzvbrg15z68DCE2%2F3EBjqkAZp07WabuBNk3OtkkBjQBHp1DoBb6yRMJgd%2B10UEMBMLKwOYaNQLpABHxYlAM%2FSlF6rBRelZR%2BkKgwkFza7gomfYQ8Q1ZR3335wNsdPBCwudIIVtSF9qa2f0Nw6ll5URJcz6LDFZT7PeFjhobayWIwwqOac4XlOInHleTNc4f%2FkYp6%2F42qLLau5FNcVDGrXVPeiyvF0UzlYF6xDVYv5J4fBK24%2Fq&X-Amz-Signature=666f4965a3efcf1a3445fc50d663c3437ab5b766c6755cf6275a65ee6f761bcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDKQZ7RJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQC%2B6epShyELfIwMK8cNHWaaLpUtD%2FzrtBsl5qWkzIa%2BWwIhAJfbWMlgWAVRqiBfua8vVNOIfn7gAQTXpcSuOFceUyGbKv8DCGIQABoMNjM3NDIzMTgzODA1IgzmXIth8BlHmNVqKSwq3AMmpZ3t4ShW9LgjQUgvD9QsLBizZLUjKdq1%2BRk0INh0qPUfwNCttTfZL%2F6%2Fu9fBfGrUmlZqQ%2F%2BZQ6zaTEwLYG8gxyENklk2li3grTfVk8PHxNWySuDtZyegSvyyrzDVNmHhM%2BFZRig%2Fq5ssumfnnPhQHPhP%2BTSDsF3plyVfV1SsRE6S1b%2FUbCGDow7vmEKIYl6WRSzRKamBa697Isi2NBn78CKHvyEOHp9sTLxu5Xcunn1gDmwwGxeKfLdkAzCmjx4jujW%2Bzz51Vn85a3emgJH50082d6vJ2QKC7JsupvdF%2F42u3%2Fy0rlJ6f%2FlS2W07ZHKFj7CSYdheWJf6GndS2ZTQOuZUDOs1td46Uc7W8qwQpOhLVu2cGoPkygZYONDKKEtqTCYdYEBJdzAhhYcYQ9jADBg0aFsbruv8odo0jPQvmyz9BjyewYavaMZ3saYlVvR4wx3saxzV7KG8F1xKnlyX9KjhdkRyyBw%2B0lKzE16aM1fVC3wlCIhgNm0g2Os8CN5DPlrugiB3rozcAJqBjZ2%2BREOfv5FrNeyV2I44EIyY8pnp6uJ0dj6jP0wxj7vzaOTnRYSt%2BP0%2FfcrqVioCPC3Mot6Qvwc7VUHvFyr6orTW1MByWCVzvbrg15z68DCE2%2F3EBjqkAZp07WabuBNk3OtkkBjQBHp1DoBb6yRMJgd%2B10UEMBMLKwOYaNQLpABHxYlAM%2FSlF6rBRelZR%2BkKgwkFza7gomfYQ8Q1ZR3335wNsdPBCwudIIVtSF9qa2f0Nw6ll5URJcz6LDFZT7PeFjhobayWIwwqOac4XlOInHleTNc4f%2FkYp6%2F42qLLau5FNcVDGrXVPeiyvF0UzlYF6xDVYv5J4fBK24%2Fq&X-Amz-Signature=f4344fd68edc934b2455f4cfee791dd3e26ed706da67b426475e27ec121771f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
