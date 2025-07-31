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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBBUKPFQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUESiAkmFvMEFqI%2FmomCGP%2FxRLlOb5FLvOhyUuStYphAiEAkRTykKAMbJiUNyhpyW%2Bx%2BGnc9%2FRwWnU3m1tu9KJDHBkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2ScJoWTBWhZlevwircA207RPcCfmykh9nPMnnHl8ncU4GNuhJlhT57AE7A4nH98H2rG6%2FT3vWD%2BGEKs3n7nXXv2kFPolgrTrdDcJKZTOOKF4sfxjrODts3wySdxAeQvfq5MXfEfqCXxcUz1cdh00dgq5E1UvVKVnsvrBv7Dmjx1mOBueVhM8cqRma73oMVleUqxAp%2B0YE%2BSzHXmwsatE%2FluHVjIkH5tdQVNVPUUZt2x9%2BvmsCJS8uuvZP%2B7ZbZJI43C%2BVjNr7khSxPKl%2Ff94emti3tRqnS7fkgojSDP5FuteyBkG1aOJ9FPfrwwLqiKAZpDQ50lKnRRoNY0rGijehnt3HM4WL77urzo4ZmBzix6hSXOWAIV84LBFvAkqhj1HgsVT3Wm0Z5IFUNFq0Brvt2qDB9digTU8PVxAPvSdwsThNAv79rErvRyrHEGU1R2Iti3mTibG46Jq0skK1jkWw9mf65%2FN1%2B%2BazRbGJ%2FG92geY%2BPs5eAXfniK%2FkoLCUQh3XMMxvgZF3mBIx8S3FvYAu25rXI70xxLP8Vx1WkkO1OO0UdtWJG2Q3ost7Q2wst0tPK6AYI8lkx3IG4vRBUi%2BMOBn26MG0Kr4H4VqkftaD4RQzOG2sWtVKgP7J0F%2F3sfoHws%2FTsfbSsMicwMIjcrsQGOqUBW4nrtPLzTjiU%2BUZjHeKrXHyK0v%2B%2BevMCKCXvTwHlL8LUlSRevYBgXQUw6N%2FoJt3DRhUJxZGFxVOIT8x12eMAVkKmLKgRJOW7KOZ4OuHs5BN4dvetDb7nIVaggdSfgJZ94Ij%2FSE7ozG5yx0SN2SXBl4EwvARvkamk34wwmAJHoHJiCoK%2BQ%2F7AuMKdvDNEci64zxJX0QBbp80k%2BS1UBa1m9aNTvaRd&X-Amz-Signature=7e4016637a187e26ad85af9575f4e14b3b012b1862c28c6ea655a9ec546a5f0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBBUKPFQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUESiAkmFvMEFqI%2FmomCGP%2FxRLlOb5FLvOhyUuStYphAiEAkRTykKAMbJiUNyhpyW%2Bx%2BGnc9%2FRwWnU3m1tu9KJDHBkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2ScJoWTBWhZlevwircA207RPcCfmykh9nPMnnHl8ncU4GNuhJlhT57AE7A4nH98H2rG6%2FT3vWD%2BGEKs3n7nXXv2kFPolgrTrdDcJKZTOOKF4sfxjrODts3wySdxAeQvfq5MXfEfqCXxcUz1cdh00dgq5E1UvVKVnsvrBv7Dmjx1mOBueVhM8cqRma73oMVleUqxAp%2B0YE%2BSzHXmwsatE%2FluHVjIkH5tdQVNVPUUZt2x9%2BvmsCJS8uuvZP%2B7ZbZJI43C%2BVjNr7khSxPKl%2Ff94emti3tRqnS7fkgojSDP5FuteyBkG1aOJ9FPfrwwLqiKAZpDQ50lKnRRoNY0rGijehnt3HM4WL77urzo4ZmBzix6hSXOWAIV84LBFvAkqhj1HgsVT3Wm0Z5IFUNFq0Brvt2qDB9digTU8PVxAPvSdwsThNAv79rErvRyrHEGU1R2Iti3mTibG46Jq0skK1jkWw9mf65%2FN1%2B%2BazRbGJ%2FG92geY%2BPs5eAXfniK%2FkoLCUQh3XMMxvgZF3mBIx8S3FvYAu25rXI70xxLP8Vx1WkkO1OO0UdtWJG2Q3ost7Q2wst0tPK6AYI8lkx3IG4vRBUi%2BMOBn26MG0Kr4H4VqkftaD4RQzOG2sWtVKgP7J0F%2F3sfoHws%2FTsfbSsMicwMIjcrsQGOqUBW4nrtPLzTjiU%2BUZjHeKrXHyK0v%2B%2BevMCKCXvTwHlL8LUlSRevYBgXQUw6N%2FoJt3DRhUJxZGFxVOIT8x12eMAVkKmLKgRJOW7KOZ4OuHs5BN4dvetDb7nIVaggdSfgJZ94Ij%2FSE7ozG5yx0SN2SXBl4EwvARvkamk34wwmAJHoHJiCoK%2BQ%2F7AuMKdvDNEci64zxJX0QBbp80k%2BS1UBa1m9aNTvaRd&X-Amz-Signature=5013cd3ebb1a079651845aa88948a8c453252feb0e7f4ff2ee955f26f1a46d9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBBUKPFQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUESiAkmFvMEFqI%2FmomCGP%2FxRLlOb5FLvOhyUuStYphAiEAkRTykKAMbJiUNyhpyW%2Bx%2BGnc9%2FRwWnU3m1tu9KJDHBkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2ScJoWTBWhZlevwircA207RPcCfmykh9nPMnnHl8ncU4GNuhJlhT57AE7A4nH98H2rG6%2FT3vWD%2BGEKs3n7nXXv2kFPolgrTrdDcJKZTOOKF4sfxjrODts3wySdxAeQvfq5MXfEfqCXxcUz1cdh00dgq5E1UvVKVnsvrBv7Dmjx1mOBueVhM8cqRma73oMVleUqxAp%2B0YE%2BSzHXmwsatE%2FluHVjIkH5tdQVNVPUUZt2x9%2BvmsCJS8uuvZP%2B7ZbZJI43C%2BVjNr7khSxPKl%2Ff94emti3tRqnS7fkgojSDP5FuteyBkG1aOJ9FPfrwwLqiKAZpDQ50lKnRRoNY0rGijehnt3HM4WL77urzo4ZmBzix6hSXOWAIV84LBFvAkqhj1HgsVT3Wm0Z5IFUNFq0Brvt2qDB9digTU8PVxAPvSdwsThNAv79rErvRyrHEGU1R2Iti3mTibG46Jq0skK1jkWw9mf65%2FN1%2B%2BazRbGJ%2FG92geY%2BPs5eAXfniK%2FkoLCUQh3XMMxvgZF3mBIx8S3FvYAu25rXI70xxLP8Vx1WkkO1OO0UdtWJG2Q3ost7Q2wst0tPK6AYI8lkx3IG4vRBUi%2BMOBn26MG0Kr4H4VqkftaD4RQzOG2sWtVKgP7J0F%2F3sfoHws%2FTsfbSsMicwMIjcrsQGOqUBW4nrtPLzTjiU%2BUZjHeKrXHyK0v%2B%2BevMCKCXvTwHlL8LUlSRevYBgXQUw6N%2FoJt3DRhUJxZGFxVOIT8x12eMAVkKmLKgRJOW7KOZ4OuHs5BN4dvetDb7nIVaggdSfgJZ94Ij%2FSE7ozG5yx0SN2SXBl4EwvARvkamk34wwmAJHoHJiCoK%2BQ%2F7AuMKdvDNEci64zxJX0QBbp80k%2BS1UBa1m9aNTvaRd&X-Amz-Signature=86206eb030a1f08332741a39d126123a170e3f1dcffd4b536cf604eacfc57143&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBBUKPFQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUESiAkmFvMEFqI%2FmomCGP%2FxRLlOb5FLvOhyUuStYphAiEAkRTykKAMbJiUNyhpyW%2Bx%2BGnc9%2FRwWnU3m1tu9KJDHBkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2ScJoWTBWhZlevwircA207RPcCfmykh9nPMnnHl8ncU4GNuhJlhT57AE7A4nH98H2rG6%2FT3vWD%2BGEKs3n7nXXv2kFPolgrTrdDcJKZTOOKF4sfxjrODts3wySdxAeQvfq5MXfEfqCXxcUz1cdh00dgq5E1UvVKVnsvrBv7Dmjx1mOBueVhM8cqRma73oMVleUqxAp%2B0YE%2BSzHXmwsatE%2FluHVjIkH5tdQVNVPUUZt2x9%2BvmsCJS8uuvZP%2B7ZbZJI43C%2BVjNr7khSxPKl%2Ff94emti3tRqnS7fkgojSDP5FuteyBkG1aOJ9FPfrwwLqiKAZpDQ50lKnRRoNY0rGijehnt3HM4WL77urzo4ZmBzix6hSXOWAIV84LBFvAkqhj1HgsVT3Wm0Z5IFUNFq0Brvt2qDB9digTU8PVxAPvSdwsThNAv79rErvRyrHEGU1R2Iti3mTibG46Jq0skK1jkWw9mf65%2FN1%2B%2BazRbGJ%2FG92geY%2BPs5eAXfniK%2FkoLCUQh3XMMxvgZF3mBIx8S3FvYAu25rXI70xxLP8Vx1WkkO1OO0UdtWJG2Q3ost7Q2wst0tPK6AYI8lkx3IG4vRBUi%2BMOBn26MG0Kr4H4VqkftaD4RQzOG2sWtVKgP7J0F%2F3sfoHws%2FTsfbSsMicwMIjcrsQGOqUBW4nrtPLzTjiU%2BUZjHeKrXHyK0v%2B%2BevMCKCXvTwHlL8LUlSRevYBgXQUw6N%2FoJt3DRhUJxZGFxVOIT8x12eMAVkKmLKgRJOW7KOZ4OuHs5BN4dvetDb7nIVaggdSfgJZ94Ij%2FSE7ozG5yx0SN2SXBl4EwvARvkamk34wwmAJHoHJiCoK%2BQ%2F7AuMKdvDNEci64zxJX0QBbp80k%2BS1UBa1m9aNTvaRd&X-Amz-Signature=ba06b1f46ca885226f884c21176ee7b3e3589964946dfecea08cf3aea3151505&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBBUKPFQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUESiAkmFvMEFqI%2FmomCGP%2FxRLlOb5FLvOhyUuStYphAiEAkRTykKAMbJiUNyhpyW%2Bx%2BGnc9%2FRwWnU3m1tu9KJDHBkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2ScJoWTBWhZlevwircA207RPcCfmykh9nPMnnHl8ncU4GNuhJlhT57AE7A4nH98H2rG6%2FT3vWD%2BGEKs3n7nXXv2kFPolgrTrdDcJKZTOOKF4sfxjrODts3wySdxAeQvfq5MXfEfqCXxcUz1cdh00dgq5E1UvVKVnsvrBv7Dmjx1mOBueVhM8cqRma73oMVleUqxAp%2B0YE%2BSzHXmwsatE%2FluHVjIkH5tdQVNVPUUZt2x9%2BvmsCJS8uuvZP%2B7ZbZJI43C%2BVjNr7khSxPKl%2Ff94emti3tRqnS7fkgojSDP5FuteyBkG1aOJ9FPfrwwLqiKAZpDQ50lKnRRoNY0rGijehnt3HM4WL77urzo4ZmBzix6hSXOWAIV84LBFvAkqhj1HgsVT3Wm0Z5IFUNFq0Brvt2qDB9digTU8PVxAPvSdwsThNAv79rErvRyrHEGU1R2Iti3mTibG46Jq0skK1jkWw9mf65%2FN1%2B%2BazRbGJ%2FG92geY%2BPs5eAXfniK%2FkoLCUQh3XMMxvgZF3mBIx8S3FvYAu25rXI70xxLP8Vx1WkkO1OO0UdtWJG2Q3ost7Q2wst0tPK6AYI8lkx3IG4vRBUi%2BMOBn26MG0Kr4H4VqkftaD4RQzOG2sWtVKgP7J0F%2F3sfoHws%2FTsfbSsMicwMIjcrsQGOqUBW4nrtPLzTjiU%2BUZjHeKrXHyK0v%2B%2BevMCKCXvTwHlL8LUlSRevYBgXQUw6N%2FoJt3DRhUJxZGFxVOIT8x12eMAVkKmLKgRJOW7KOZ4OuHs5BN4dvetDb7nIVaggdSfgJZ94Ij%2FSE7ozG5yx0SN2SXBl4EwvARvkamk34wwmAJHoHJiCoK%2BQ%2F7AuMKdvDNEci64zxJX0QBbp80k%2BS1UBa1m9aNTvaRd&X-Amz-Signature=02e7fa2a363033910e1d2a2e72bedf224e6a24d5df4a8a6edeef1306df96c383&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBBUKPFQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUESiAkmFvMEFqI%2FmomCGP%2FxRLlOb5FLvOhyUuStYphAiEAkRTykKAMbJiUNyhpyW%2Bx%2BGnc9%2FRwWnU3m1tu9KJDHBkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2ScJoWTBWhZlevwircA207RPcCfmykh9nPMnnHl8ncU4GNuhJlhT57AE7A4nH98H2rG6%2FT3vWD%2BGEKs3n7nXXv2kFPolgrTrdDcJKZTOOKF4sfxjrODts3wySdxAeQvfq5MXfEfqCXxcUz1cdh00dgq5E1UvVKVnsvrBv7Dmjx1mOBueVhM8cqRma73oMVleUqxAp%2B0YE%2BSzHXmwsatE%2FluHVjIkH5tdQVNVPUUZt2x9%2BvmsCJS8uuvZP%2B7ZbZJI43C%2BVjNr7khSxPKl%2Ff94emti3tRqnS7fkgojSDP5FuteyBkG1aOJ9FPfrwwLqiKAZpDQ50lKnRRoNY0rGijehnt3HM4WL77urzo4ZmBzix6hSXOWAIV84LBFvAkqhj1HgsVT3Wm0Z5IFUNFq0Brvt2qDB9digTU8PVxAPvSdwsThNAv79rErvRyrHEGU1R2Iti3mTibG46Jq0skK1jkWw9mf65%2FN1%2B%2BazRbGJ%2FG92geY%2BPs5eAXfniK%2FkoLCUQh3XMMxvgZF3mBIx8S3FvYAu25rXI70xxLP8Vx1WkkO1OO0UdtWJG2Q3ost7Q2wst0tPK6AYI8lkx3IG4vRBUi%2BMOBn26MG0Kr4H4VqkftaD4RQzOG2sWtVKgP7J0F%2F3sfoHws%2FTsfbSsMicwMIjcrsQGOqUBW4nrtPLzTjiU%2BUZjHeKrXHyK0v%2B%2BevMCKCXvTwHlL8LUlSRevYBgXQUw6N%2FoJt3DRhUJxZGFxVOIT8x12eMAVkKmLKgRJOW7KOZ4OuHs5BN4dvetDb7nIVaggdSfgJZ94Ij%2FSE7ozG5yx0SN2SXBl4EwvARvkamk34wwmAJHoHJiCoK%2BQ%2F7AuMKdvDNEci64zxJX0QBbp80k%2BS1UBa1m9aNTvaRd&X-Amz-Signature=7ce0a5538634fcd4cfd7abc013e529dee25ee345b92a0aa03ebe3e0dde57bc3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBBUKPFQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUESiAkmFvMEFqI%2FmomCGP%2FxRLlOb5FLvOhyUuStYphAiEAkRTykKAMbJiUNyhpyW%2Bx%2BGnc9%2FRwWnU3m1tu9KJDHBkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2ScJoWTBWhZlevwircA207RPcCfmykh9nPMnnHl8ncU4GNuhJlhT57AE7A4nH98H2rG6%2FT3vWD%2BGEKs3n7nXXv2kFPolgrTrdDcJKZTOOKF4sfxjrODts3wySdxAeQvfq5MXfEfqCXxcUz1cdh00dgq5E1UvVKVnsvrBv7Dmjx1mOBueVhM8cqRma73oMVleUqxAp%2B0YE%2BSzHXmwsatE%2FluHVjIkH5tdQVNVPUUZt2x9%2BvmsCJS8uuvZP%2B7ZbZJI43C%2BVjNr7khSxPKl%2Ff94emti3tRqnS7fkgojSDP5FuteyBkG1aOJ9FPfrwwLqiKAZpDQ50lKnRRoNY0rGijehnt3HM4WL77urzo4ZmBzix6hSXOWAIV84LBFvAkqhj1HgsVT3Wm0Z5IFUNFq0Brvt2qDB9digTU8PVxAPvSdwsThNAv79rErvRyrHEGU1R2Iti3mTibG46Jq0skK1jkWw9mf65%2FN1%2B%2BazRbGJ%2FG92geY%2BPs5eAXfniK%2FkoLCUQh3XMMxvgZF3mBIx8S3FvYAu25rXI70xxLP8Vx1WkkO1OO0UdtWJG2Q3ost7Q2wst0tPK6AYI8lkx3IG4vRBUi%2BMOBn26MG0Kr4H4VqkftaD4RQzOG2sWtVKgP7J0F%2F3sfoHws%2FTsfbSsMicwMIjcrsQGOqUBW4nrtPLzTjiU%2BUZjHeKrXHyK0v%2B%2BevMCKCXvTwHlL8LUlSRevYBgXQUw6N%2FoJt3DRhUJxZGFxVOIT8x12eMAVkKmLKgRJOW7KOZ4OuHs5BN4dvetDb7nIVaggdSfgJZ94Ij%2FSE7ozG5yx0SN2SXBl4EwvARvkamk34wwmAJHoHJiCoK%2BQ%2F7AuMKdvDNEci64zxJX0QBbp80k%2BS1UBa1m9aNTvaRd&X-Amz-Signature=ffc38d3caafcbedd189553e8f01ed4ae3455dc3aee0bcbea389c3b7066a79f44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBBUKPFQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUESiAkmFvMEFqI%2FmomCGP%2FxRLlOb5FLvOhyUuStYphAiEAkRTykKAMbJiUNyhpyW%2Bx%2BGnc9%2FRwWnU3m1tu9KJDHBkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2ScJoWTBWhZlevwircA207RPcCfmykh9nPMnnHl8ncU4GNuhJlhT57AE7A4nH98H2rG6%2FT3vWD%2BGEKs3n7nXXv2kFPolgrTrdDcJKZTOOKF4sfxjrODts3wySdxAeQvfq5MXfEfqCXxcUz1cdh00dgq5E1UvVKVnsvrBv7Dmjx1mOBueVhM8cqRma73oMVleUqxAp%2B0YE%2BSzHXmwsatE%2FluHVjIkH5tdQVNVPUUZt2x9%2BvmsCJS8uuvZP%2B7ZbZJI43C%2BVjNr7khSxPKl%2Ff94emti3tRqnS7fkgojSDP5FuteyBkG1aOJ9FPfrwwLqiKAZpDQ50lKnRRoNY0rGijehnt3HM4WL77urzo4ZmBzix6hSXOWAIV84LBFvAkqhj1HgsVT3Wm0Z5IFUNFq0Brvt2qDB9digTU8PVxAPvSdwsThNAv79rErvRyrHEGU1R2Iti3mTibG46Jq0skK1jkWw9mf65%2FN1%2B%2BazRbGJ%2FG92geY%2BPs5eAXfniK%2FkoLCUQh3XMMxvgZF3mBIx8S3FvYAu25rXI70xxLP8Vx1WkkO1OO0UdtWJG2Q3ost7Q2wst0tPK6AYI8lkx3IG4vRBUi%2BMOBn26MG0Kr4H4VqkftaD4RQzOG2sWtVKgP7J0F%2F3sfoHws%2FTsfbSsMicwMIjcrsQGOqUBW4nrtPLzTjiU%2BUZjHeKrXHyK0v%2B%2BevMCKCXvTwHlL8LUlSRevYBgXQUw6N%2FoJt3DRhUJxZGFxVOIT8x12eMAVkKmLKgRJOW7KOZ4OuHs5BN4dvetDb7nIVaggdSfgJZ94Ij%2FSE7ozG5yx0SN2SXBl4EwvARvkamk34wwmAJHoHJiCoK%2BQ%2F7AuMKdvDNEci64zxJX0QBbp80k%2BS1UBa1m9aNTvaRd&X-Amz-Signature=92d578208c6fec7b70f5dfee0c7e82889206058d98819df0b0c8702f49fe157c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBBUKPFQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUESiAkmFvMEFqI%2FmomCGP%2FxRLlOb5FLvOhyUuStYphAiEAkRTykKAMbJiUNyhpyW%2Bx%2BGnc9%2FRwWnU3m1tu9KJDHBkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2ScJoWTBWhZlevwircA207RPcCfmykh9nPMnnHl8ncU4GNuhJlhT57AE7A4nH98H2rG6%2FT3vWD%2BGEKs3n7nXXv2kFPolgrTrdDcJKZTOOKF4sfxjrODts3wySdxAeQvfq5MXfEfqCXxcUz1cdh00dgq5E1UvVKVnsvrBv7Dmjx1mOBueVhM8cqRma73oMVleUqxAp%2B0YE%2BSzHXmwsatE%2FluHVjIkH5tdQVNVPUUZt2x9%2BvmsCJS8uuvZP%2B7ZbZJI43C%2BVjNr7khSxPKl%2Ff94emti3tRqnS7fkgojSDP5FuteyBkG1aOJ9FPfrwwLqiKAZpDQ50lKnRRoNY0rGijehnt3HM4WL77urzo4ZmBzix6hSXOWAIV84LBFvAkqhj1HgsVT3Wm0Z5IFUNFq0Brvt2qDB9digTU8PVxAPvSdwsThNAv79rErvRyrHEGU1R2Iti3mTibG46Jq0skK1jkWw9mf65%2FN1%2B%2BazRbGJ%2FG92geY%2BPs5eAXfniK%2FkoLCUQh3XMMxvgZF3mBIx8S3FvYAu25rXI70xxLP8Vx1WkkO1OO0UdtWJG2Q3ost7Q2wst0tPK6AYI8lkx3IG4vRBUi%2BMOBn26MG0Kr4H4VqkftaD4RQzOG2sWtVKgP7J0F%2F3sfoHws%2FTsfbSsMicwMIjcrsQGOqUBW4nrtPLzTjiU%2BUZjHeKrXHyK0v%2B%2BevMCKCXvTwHlL8LUlSRevYBgXQUw6N%2FoJt3DRhUJxZGFxVOIT8x12eMAVkKmLKgRJOW7KOZ4OuHs5BN4dvetDb7nIVaggdSfgJZ94Ij%2FSE7ozG5yx0SN2SXBl4EwvARvkamk34wwmAJHoHJiCoK%2BQ%2F7AuMKdvDNEci64zxJX0QBbp80k%2BS1UBa1m9aNTvaRd&X-Amz-Signature=ab6761b1419509650b28961387677ee5fa9b4a888eed25b9331354fdd2de5970&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBBUKPFQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUESiAkmFvMEFqI%2FmomCGP%2FxRLlOb5FLvOhyUuStYphAiEAkRTykKAMbJiUNyhpyW%2Bx%2BGnc9%2FRwWnU3m1tu9KJDHBkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2ScJoWTBWhZlevwircA207RPcCfmykh9nPMnnHl8ncU4GNuhJlhT57AE7A4nH98H2rG6%2FT3vWD%2BGEKs3n7nXXv2kFPolgrTrdDcJKZTOOKF4sfxjrODts3wySdxAeQvfq5MXfEfqCXxcUz1cdh00dgq5E1UvVKVnsvrBv7Dmjx1mOBueVhM8cqRma73oMVleUqxAp%2B0YE%2BSzHXmwsatE%2FluHVjIkH5tdQVNVPUUZt2x9%2BvmsCJS8uuvZP%2B7ZbZJI43C%2BVjNr7khSxPKl%2Ff94emti3tRqnS7fkgojSDP5FuteyBkG1aOJ9FPfrwwLqiKAZpDQ50lKnRRoNY0rGijehnt3HM4WL77urzo4ZmBzix6hSXOWAIV84LBFvAkqhj1HgsVT3Wm0Z5IFUNFq0Brvt2qDB9digTU8PVxAPvSdwsThNAv79rErvRyrHEGU1R2Iti3mTibG46Jq0skK1jkWw9mf65%2FN1%2B%2BazRbGJ%2FG92geY%2BPs5eAXfniK%2FkoLCUQh3XMMxvgZF3mBIx8S3FvYAu25rXI70xxLP8Vx1WkkO1OO0UdtWJG2Q3ost7Q2wst0tPK6AYI8lkx3IG4vRBUi%2BMOBn26MG0Kr4H4VqkftaD4RQzOG2sWtVKgP7J0F%2F3sfoHws%2FTsfbSsMicwMIjcrsQGOqUBW4nrtPLzTjiU%2BUZjHeKrXHyK0v%2B%2BevMCKCXvTwHlL8LUlSRevYBgXQUw6N%2FoJt3DRhUJxZGFxVOIT8x12eMAVkKmLKgRJOW7KOZ4OuHs5BN4dvetDb7nIVaggdSfgJZ94Ij%2FSE7ozG5yx0SN2SXBl4EwvARvkamk34wwmAJHoHJiCoK%2BQ%2F7AuMKdvDNEci64zxJX0QBbp80k%2BS1UBa1m9aNTvaRd&X-Amz-Signature=ab77a848192646097a02d9051f5c66dac22ba2e20e1b1a15dc7c58d23bdbf39f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBBUKPFQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUESiAkmFvMEFqI%2FmomCGP%2FxRLlOb5FLvOhyUuStYphAiEAkRTykKAMbJiUNyhpyW%2Bx%2BGnc9%2FRwWnU3m1tu9KJDHBkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2ScJoWTBWhZlevwircA207RPcCfmykh9nPMnnHl8ncU4GNuhJlhT57AE7A4nH98H2rG6%2FT3vWD%2BGEKs3n7nXXv2kFPolgrTrdDcJKZTOOKF4sfxjrODts3wySdxAeQvfq5MXfEfqCXxcUz1cdh00dgq5E1UvVKVnsvrBv7Dmjx1mOBueVhM8cqRma73oMVleUqxAp%2B0YE%2BSzHXmwsatE%2FluHVjIkH5tdQVNVPUUZt2x9%2BvmsCJS8uuvZP%2B7ZbZJI43C%2BVjNr7khSxPKl%2Ff94emti3tRqnS7fkgojSDP5FuteyBkG1aOJ9FPfrwwLqiKAZpDQ50lKnRRoNY0rGijehnt3HM4WL77urzo4ZmBzix6hSXOWAIV84LBFvAkqhj1HgsVT3Wm0Z5IFUNFq0Brvt2qDB9digTU8PVxAPvSdwsThNAv79rErvRyrHEGU1R2Iti3mTibG46Jq0skK1jkWw9mf65%2FN1%2B%2BazRbGJ%2FG92geY%2BPs5eAXfniK%2FkoLCUQh3XMMxvgZF3mBIx8S3FvYAu25rXI70xxLP8Vx1WkkO1OO0UdtWJG2Q3ost7Q2wst0tPK6AYI8lkx3IG4vRBUi%2BMOBn26MG0Kr4H4VqkftaD4RQzOG2sWtVKgP7J0F%2F3sfoHws%2FTsfbSsMicwMIjcrsQGOqUBW4nrtPLzTjiU%2BUZjHeKrXHyK0v%2B%2BevMCKCXvTwHlL8LUlSRevYBgXQUw6N%2FoJt3DRhUJxZGFxVOIT8x12eMAVkKmLKgRJOW7KOZ4OuHs5BN4dvetDb7nIVaggdSfgJZ94Ij%2FSE7ozG5yx0SN2SXBl4EwvARvkamk34wwmAJHoHJiCoK%2BQ%2F7AuMKdvDNEci64zxJX0QBbp80k%2BS1UBa1m9aNTvaRd&X-Amz-Signature=d61e08f7977b724ee74fee3f4254c9873a40ecbf26f7b76095fac909350d16dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBBUKPFQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUESiAkmFvMEFqI%2FmomCGP%2FxRLlOb5FLvOhyUuStYphAiEAkRTykKAMbJiUNyhpyW%2Bx%2BGnc9%2FRwWnU3m1tu9KJDHBkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2ScJoWTBWhZlevwircA207RPcCfmykh9nPMnnHl8ncU4GNuhJlhT57AE7A4nH98H2rG6%2FT3vWD%2BGEKs3n7nXXv2kFPolgrTrdDcJKZTOOKF4sfxjrODts3wySdxAeQvfq5MXfEfqCXxcUz1cdh00dgq5E1UvVKVnsvrBv7Dmjx1mOBueVhM8cqRma73oMVleUqxAp%2B0YE%2BSzHXmwsatE%2FluHVjIkH5tdQVNVPUUZt2x9%2BvmsCJS8uuvZP%2B7ZbZJI43C%2BVjNr7khSxPKl%2Ff94emti3tRqnS7fkgojSDP5FuteyBkG1aOJ9FPfrwwLqiKAZpDQ50lKnRRoNY0rGijehnt3HM4WL77urzo4ZmBzix6hSXOWAIV84LBFvAkqhj1HgsVT3Wm0Z5IFUNFq0Brvt2qDB9digTU8PVxAPvSdwsThNAv79rErvRyrHEGU1R2Iti3mTibG46Jq0skK1jkWw9mf65%2FN1%2B%2BazRbGJ%2FG92geY%2BPs5eAXfniK%2FkoLCUQh3XMMxvgZF3mBIx8S3FvYAu25rXI70xxLP8Vx1WkkO1OO0UdtWJG2Q3ost7Q2wst0tPK6AYI8lkx3IG4vRBUi%2BMOBn26MG0Kr4H4VqkftaD4RQzOG2sWtVKgP7J0F%2F3sfoHws%2FTsfbSsMicwMIjcrsQGOqUBW4nrtPLzTjiU%2BUZjHeKrXHyK0v%2B%2BevMCKCXvTwHlL8LUlSRevYBgXQUw6N%2FoJt3DRhUJxZGFxVOIT8x12eMAVkKmLKgRJOW7KOZ4OuHs5BN4dvetDb7nIVaggdSfgJZ94Ij%2FSE7ozG5yx0SN2SXBl4EwvARvkamk34wwmAJHoHJiCoK%2BQ%2F7AuMKdvDNEci64zxJX0QBbp80k%2BS1UBa1m9aNTvaRd&X-Amz-Signature=ce34253458bdaf98f3d98b18a039acbf406ae104973733bd023e40794b90af33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBBUKPFQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUESiAkmFvMEFqI%2FmomCGP%2FxRLlOb5FLvOhyUuStYphAiEAkRTykKAMbJiUNyhpyW%2Bx%2BGnc9%2FRwWnU3m1tu9KJDHBkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2ScJoWTBWhZlevwircA207RPcCfmykh9nPMnnHl8ncU4GNuhJlhT57AE7A4nH98H2rG6%2FT3vWD%2BGEKs3n7nXXv2kFPolgrTrdDcJKZTOOKF4sfxjrODts3wySdxAeQvfq5MXfEfqCXxcUz1cdh00dgq5E1UvVKVnsvrBv7Dmjx1mOBueVhM8cqRma73oMVleUqxAp%2B0YE%2BSzHXmwsatE%2FluHVjIkH5tdQVNVPUUZt2x9%2BvmsCJS8uuvZP%2B7ZbZJI43C%2BVjNr7khSxPKl%2Ff94emti3tRqnS7fkgojSDP5FuteyBkG1aOJ9FPfrwwLqiKAZpDQ50lKnRRoNY0rGijehnt3HM4WL77urzo4ZmBzix6hSXOWAIV84LBFvAkqhj1HgsVT3Wm0Z5IFUNFq0Brvt2qDB9digTU8PVxAPvSdwsThNAv79rErvRyrHEGU1R2Iti3mTibG46Jq0skK1jkWw9mf65%2FN1%2B%2BazRbGJ%2FG92geY%2BPs5eAXfniK%2FkoLCUQh3XMMxvgZF3mBIx8S3FvYAu25rXI70xxLP8Vx1WkkO1OO0UdtWJG2Q3ost7Q2wst0tPK6AYI8lkx3IG4vRBUi%2BMOBn26MG0Kr4H4VqkftaD4RQzOG2sWtVKgP7J0F%2F3sfoHws%2FTsfbSsMicwMIjcrsQGOqUBW4nrtPLzTjiU%2BUZjHeKrXHyK0v%2B%2BevMCKCXvTwHlL8LUlSRevYBgXQUw6N%2FoJt3DRhUJxZGFxVOIT8x12eMAVkKmLKgRJOW7KOZ4OuHs5BN4dvetDb7nIVaggdSfgJZ94Ij%2FSE7ozG5yx0SN2SXBl4EwvARvkamk34wwmAJHoHJiCoK%2BQ%2F7AuMKdvDNEci64zxJX0QBbp80k%2BS1UBa1m9aNTvaRd&X-Amz-Signature=311475ddb3025a246e8f29eed60989f889a33ea8b29b9e440960f81b88467a3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBBUKPFQ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEUESiAkmFvMEFqI%2FmomCGP%2FxRLlOb5FLvOhyUuStYphAiEAkRTykKAMbJiUNyhpyW%2Bx%2BGnc9%2FRwWnU3m1tu9KJDHBkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2ScJoWTBWhZlevwircA207RPcCfmykh9nPMnnHl8ncU4GNuhJlhT57AE7A4nH98H2rG6%2FT3vWD%2BGEKs3n7nXXv2kFPolgrTrdDcJKZTOOKF4sfxjrODts3wySdxAeQvfq5MXfEfqCXxcUz1cdh00dgq5E1UvVKVnsvrBv7Dmjx1mOBueVhM8cqRma73oMVleUqxAp%2B0YE%2BSzHXmwsatE%2FluHVjIkH5tdQVNVPUUZt2x9%2BvmsCJS8uuvZP%2B7ZbZJI43C%2BVjNr7khSxPKl%2Ff94emti3tRqnS7fkgojSDP5FuteyBkG1aOJ9FPfrwwLqiKAZpDQ50lKnRRoNY0rGijehnt3HM4WL77urzo4ZmBzix6hSXOWAIV84LBFvAkqhj1HgsVT3Wm0Z5IFUNFq0Brvt2qDB9digTU8PVxAPvSdwsThNAv79rErvRyrHEGU1R2Iti3mTibG46Jq0skK1jkWw9mf65%2FN1%2B%2BazRbGJ%2FG92geY%2BPs5eAXfniK%2FkoLCUQh3XMMxvgZF3mBIx8S3FvYAu25rXI70xxLP8Vx1WkkO1OO0UdtWJG2Q3ost7Q2wst0tPK6AYI8lkx3IG4vRBUi%2BMOBn26MG0Kr4H4VqkftaD4RQzOG2sWtVKgP7J0F%2F3sfoHws%2FTsfbSsMicwMIjcrsQGOqUBW4nrtPLzTjiU%2BUZjHeKrXHyK0v%2B%2BevMCKCXvTwHlL8LUlSRevYBgXQUw6N%2FoJt3DRhUJxZGFxVOIT8x12eMAVkKmLKgRJOW7KOZ4OuHs5BN4dvetDb7nIVaggdSfgJZ94Ij%2FSE7ozG5yx0SN2SXBl4EwvARvkamk34wwmAJHoHJiCoK%2BQ%2F7AuMKdvDNEci64zxJX0QBbp80k%2BS1UBa1m9aNTvaRd&X-Amz-Signature=6725df44f7137ee830bae48bf4d593d29730bc7d48d773077d25e419c0d2df98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
