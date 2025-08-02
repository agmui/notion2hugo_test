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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QDYNNX7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIByAE5BmeernznqoLZfpjvQGoz7xlAw%2Bta8jVQKIDA4aAiEAxqlm44ZHqt5JaY0bGhzTwQ24ycXj0Xtfm3Snkdh2EKoqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAr%2Bgs19EYYqNdpuMircA%2BichpWeCjFdBfsi1TwSOfYo%2B5STMg1%2F2Kysq2S20V0Qv3PjIhvZxIP%2F0KLobs1hVhgBWQGObLgXCnRFRUA5REcOuMNZIrqB2cX8l%2FvyVAlWyvfvoSyaA%2BnseSStMDwkIFArK5XQkxGYZw1IIWTFZjvpME%2BTWimS1HNEkCpEzvFO1we7Pe5EuAe1InYx7PrcffdNn%2BiFIaf0eICnQefUD3POcymF%2FRUNV%2BbT36K0Xaan53uGuiTfuopiAqphcapH5ST6WscqWfnc%2Byn%2Fy0E7ubkXW16XX9aT9CRnRkAq1qOY2a%2BGHAzX5FxrGd4%2Fsn60oN7FUimCgdn57Z3FdaaxSIE98oLqfnq08nNARKnKvDv2RXnWHkrYOKb1R%2BszrQGHzHPtbIuFQiwUG%2BcMY8OCHfMSB8ANuIyKKxfv7jLPQZYhT8mj%2FNb5evsH3tPDiCm2LtJ57Awq%2BtU6bxfYi9D62H54JKAhEALBo3NR5vVPDpegHb8vPnpzj2tAZ7FRhVyb6QJGD9OPF5xo%2BesnxtD7E4b2Vj%2BySn7hquyNdTeD1wO%2Fq3WGzqIx%2F%2B%2F%2BKhRpYGHl654bagLjNaTqSdUIj6CymRFSSco7Qabs9pJrZHU70egjN%2BIMEB5zCnw4DU7DMJT3tcQGOqUBMierML3zwb07U%2FSX92fmGCvQgNc3eFds4hhTP3abrlbval%2BNPtjhDSZK9HIIWGydmhbKYoJXHDjaNQjbrlDeX7x3M%2FcynRKUp0CmXdLWNTQw5ySFaEmMZX0cX8N4lJLg0xuhdPtLWIDFZoo1QekdxfwGH8TW%2FKjQdjQmatrPfvExuQTccu%2FICfybVplZl%2BioxjCKsm%2FT6dS205gBbFNeJfFA0Y4q&X-Amz-Signature=75c164965dfffc4dde629fd406cfc4db87a794abaf5b975299fe1f9209887503&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QDYNNX7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIByAE5BmeernznqoLZfpjvQGoz7xlAw%2Bta8jVQKIDA4aAiEAxqlm44ZHqt5JaY0bGhzTwQ24ycXj0Xtfm3Snkdh2EKoqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAr%2Bgs19EYYqNdpuMircA%2BichpWeCjFdBfsi1TwSOfYo%2B5STMg1%2F2Kysq2S20V0Qv3PjIhvZxIP%2F0KLobs1hVhgBWQGObLgXCnRFRUA5REcOuMNZIrqB2cX8l%2FvyVAlWyvfvoSyaA%2BnseSStMDwkIFArK5XQkxGYZw1IIWTFZjvpME%2BTWimS1HNEkCpEzvFO1we7Pe5EuAe1InYx7PrcffdNn%2BiFIaf0eICnQefUD3POcymF%2FRUNV%2BbT36K0Xaan53uGuiTfuopiAqphcapH5ST6WscqWfnc%2Byn%2Fy0E7ubkXW16XX9aT9CRnRkAq1qOY2a%2BGHAzX5FxrGd4%2Fsn60oN7FUimCgdn57Z3FdaaxSIE98oLqfnq08nNARKnKvDv2RXnWHkrYOKb1R%2BszrQGHzHPtbIuFQiwUG%2BcMY8OCHfMSB8ANuIyKKxfv7jLPQZYhT8mj%2FNb5evsH3tPDiCm2LtJ57Awq%2BtU6bxfYi9D62H54JKAhEALBo3NR5vVPDpegHb8vPnpzj2tAZ7FRhVyb6QJGD9OPF5xo%2BesnxtD7E4b2Vj%2BySn7hquyNdTeD1wO%2Fq3WGzqIx%2F%2B%2F%2BKhRpYGHl654bagLjNaTqSdUIj6CymRFSSco7Qabs9pJrZHU70egjN%2BIMEB5zCnw4DU7DMJT3tcQGOqUBMierML3zwb07U%2FSX92fmGCvQgNc3eFds4hhTP3abrlbval%2BNPtjhDSZK9HIIWGydmhbKYoJXHDjaNQjbrlDeX7x3M%2FcynRKUp0CmXdLWNTQw5ySFaEmMZX0cX8N4lJLg0xuhdPtLWIDFZoo1QekdxfwGH8TW%2FKjQdjQmatrPfvExuQTccu%2FICfybVplZl%2BioxjCKsm%2FT6dS205gBbFNeJfFA0Y4q&X-Amz-Signature=91fd5cb7cecdb85a4f1295b0af82ce885c1396e3cda3260c9d07f58b2097b0fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QDYNNX7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIByAE5BmeernznqoLZfpjvQGoz7xlAw%2Bta8jVQKIDA4aAiEAxqlm44ZHqt5JaY0bGhzTwQ24ycXj0Xtfm3Snkdh2EKoqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAr%2Bgs19EYYqNdpuMircA%2BichpWeCjFdBfsi1TwSOfYo%2B5STMg1%2F2Kysq2S20V0Qv3PjIhvZxIP%2F0KLobs1hVhgBWQGObLgXCnRFRUA5REcOuMNZIrqB2cX8l%2FvyVAlWyvfvoSyaA%2BnseSStMDwkIFArK5XQkxGYZw1IIWTFZjvpME%2BTWimS1HNEkCpEzvFO1we7Pe5EuAe1InYx7PrcffdNn%2BiFIaf0eICnQefUD3POcymF%2FRUNV%2BbT36K0Xaan53uGuiTfuopiAqphcapH5ST6WscqWfnc%2Byn%2Fy0E7ubkXW16XX9aT9CRnRkAq1qOY2a%2BGHAzX5FxrGd4%2Fsn60oN7FUimCgdn57Z3FdaaxSIE98oLqfnq08nNARKnKvDv2RXnWHkrYOKb1R%2BszrQGHzHPtbIuFQiwUG%2BcMY8OCHfMSB8ANuIyKKxfv7jLPQZYhT8mj%2FNb5evsH3tPDiCm2LtJ57Awq%2BtU6bxfYi9D62H54JKAhEALBo3NR5vVPDpegHb8vPnpzj2tAZ7FRhVyb6QJGD9OPF5xo%2BesnxtD7E4b2Vj%2BySn7hquyNdTeD1wO%2Fq3WGzqIx%2F%2B%2F%2BKhRpYGHl654bagLjNaTqSdUIj6CymRFSSco7Qabs9pJrZHU70egjN%2BIMEB5zCnw4DU7DMJT3tcQGOqUBMierML3zwb07U%2FSX92fmGCvQgNc3eFds4hhTP3abrlbval%2BNPtjhDSZK9HIIWGydmhbKYoJXHDjaNQjbrlDeX7x3M%2FcynRKUp0CmXdLWNTQw5ySFaEmMZX0cX8N4lJLg0xuhdPtLWIDFZoo1QekdxfwGH8TW%2FKjQdjQmatrPfvExuQTccu%2FICfybVplZl%2BioxjCKsm%2FT6dS205gBbFNeJfFA0Y4q&X-Amz-Signature=b2411fc32446db44559f9a9c034c51a67108f04b768388912da30fb8faed04cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QDYNNX7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIByAE5BmeernznqoLZfpjvQGoz7xlAw%2Bta8jVQKIDA4aAiEAxqlm44ZHqt5JaY0bGhzTwQ24ycXj0Xtfm3Snkdh2EKoqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAr%2Bgs19EYYqNdpuMircA%2BichpWeCjFdBfsi1TwSOfYo%2B5STMg1%2F2Kysq2S20V0Qv3PjIhvZxIP%2F0KLobs1hVhgBWQGObLgXCnRFRUA5REcOuMNZIrqB2cX8l%2FvyVAlWyvfvoSyaA%2BnseSStMDwkIFArK5XQkxGYZw1IIWTFZjvpME%2BTWimS1HNEkCpEzvFO1we7Pe5EuAe1InYx7PrcffdNn%2BiFIaf0eICnQefUD3POcymF%2FRUNV%2BbT36K0Xaan53uGuiTfuopiAqphcapH5ST6WscqWfnc%2Byn%2Fy0E7ubkXW16XX9aT9CRnRkAq1qOY2a%2BGHAzX5FxrGd4%2Fsn60oN7FUimCgdn57Z3FdaaxSIE98oLqfnq08nNARKnKvDv2RXnWHkrYOKb1R%2BszrQGHzHPtbIuFQiwUG%2BcMY8OCHfMSB8ANuIyKKxfv7jLPQZYhT8mj%2FNb5evsH3tPDiCm2LtJ57Awq%2BtU6bxfYi9D62H54JKAhEALBo3NR5vVPDpegHb8vPnpzj2tAZ7FRhVyb6QJGD9OPF5xo%2BesnxtD7E4b2Vj%2BySn7hquyNdTeD1wO%2Fq3WGzqIx%2F%2B%2F%2BKhRpYGHl654bagLjNaTqSdUIj6CymRFSSco7Qabs9pJrZHU70egjN%2BIMEB5zCnw4DU7DMJT3tcQGOqUBMierML3zwb07U%2FSX92fmGCvQgNc3eFds4hhTP3abrlbval%2BNPtjhDSZK9HIIWGydmhbKYoJXHDjaNQjbrlDeX7x3M%2FcynRKUp0CmXdLWNTQw5ySFaEmMZX0cX8N4lJLg0xuhdPtLWIDFZoo1QekdxfwGH8TW%2FKjQdjQmatrPfvExuQTccu%2FICfybVplZl%2BioxjCKsm%2FT6dS205gBbFNeJfFA0Y4q&X-Amz-Signature=8500c7eb7f1fb42464dfd806e392a32f16f9f8183516f6cca11236bb917f79f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QDYNNX7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIByAE5BmeernznqoLZfpjvQGoz7xlAw%2Bta8jVQKIDA4aAiEAxqlm44ZHqt5JaY0bGhzTwQ24ycXj0Xtfm3Snkdh2EKoqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAr%2Bgs19EYYqNdpuMircA%2BichpWeCjFdBfsi1TwSOfYo%2B5STMg1%2F2Kysq2S20V0Qv3PjIhvZxIP%2F0KLobs1hVhgBWQGObLgXCnRFRUA5REcOuMNZIrqB2cX8l%2FvyVAlWyvfvoSyaA%2BnseSStMDwkIFArK5XQkxGYZw1IIWTFZjvpME%2BTWimS1HNEkCpEzvFO1we7Pe5EuAe1InYx7PrcffdNn%2BiFIaf0eICnQefUD3POcymF%2FRUNV%2BbT36K0Xaan53uGuiTfuopiAqphcapH5ST6WscqWfnc%2Byn%2Fy0E7ubkXW16XX9aT9CRnRkAq1qOY2a%2BGHAzX5FxrGd4%2Fsn60oN7FUimCgdn57Z3FdaaxSIE98oLqfnq08nNARKnKvDv2RXnWHkrYOKb1R%2BszrQGHzHPtbIuFQiwUG%2BcMY8OCHfMSB8ANuIyKKxfv7jLPQZYhT8mj%2FNb5evsH3tPDiCm2LtJ57Awq%2BtU6bxfYi9D62H54JKAhEALBo3NR5vVPDpegHb8vPnpzj2tAZ7FRhVyb6QJGD9OPF5xo%2BesnxtD7E4b2Vj%2BySn7hquyNdTeD1wO%2Fq3WGzqIx%2F%2B%2F%2BKhRpYGHl654bagLjNaTqSdUIj6CymRFSSco7Qabs9pJrZHU70egjN%2BIMEB5zCnw4DU7DMJT3tcQGOqUBMierML3zwb07U%2FSX92fmGCvQgNc3eFds4hhTP3abrlbval%2BNPtjhDSZK9HIIWGydmhbKYoJXHDjaNQjbrlDeX7x3M%2FcynRKUp0CmXdLWNTQw5ySFaEmMZX0cX8N4lJLg0xuhdPtLWIDFZoo1QekdxfwGH8TW%2FKjQdjQmatrPfvExuQTccu%2FICfybVplZl%2BioxjCKsm%2FT6dS205gBbFNeJfFA0Y4q&X-Amz-Signature=3832e04b460aeeccc0f27c1410027860f07527194ddc0438bcb55bb8b8523d62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QDYNNX7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIByAE5BmeernznqoLZfpjvQGoz7xlAw%2Bta8jVQKIDA4aAiEAxqlm44ZHqt5JaY0bGhzTwQ24ycXj0Xtfm3Snkdh2EKoqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAr%2Bgs19EYYqNdpuMircA%2BichpWeCjFdBfsi1TwSOfYo%2B5STMg1%2F2Kysq2S20V0Qv3PjIhvZxIP%2F0KLobs1hVhgBWQGObLgXCnRFRUA5REcOuMNZIrqB2cX8l%2FvyVAlWyvfvoSyaA%2BnseSStMDwkIFArK5XQkxGYZw1IIWTFZjvpME%2BTWimS1HNEkCpEzvFO1we7Pe5EuAe1InYx7PrcffdNn%2BiFIaf0eICnQefUD3POcymF%2FRUNV%2BbT36K0Xaan53uGuiTfuopiAqphcapH5ST6WscqWfnc%2Byn%2Fy0E7ubkXW16XX9aT9CRnRkAq1qOY2a%2BGHAzX5FxrGd4%2Fsn60oN7FUimCgdn57Z3FdaaxSIE98oLqfnq08nNARKnKvDv2RXnWHkrYOKb1R%2BszrQGHzHPtbIuFQiwUG%2BcMY8OCHfMSB8ANuIyKKxfv7jLPQZYhT8mj%2FNb5evsH3tPDiCm2LtJ57Awq%2BtU6bxfYi9D62H54JKAhEALBo3NR5vVPDpegHb8vPnpzj2tAZ7FRhVyb6QJGD9OPF5xo%2BesnxtD7E4b2Vj%2BySn7hquyNdTeD1wO%2Fq3WGzqIx%2F%2B%2F%2BKhRpYGHl654bagLjNaTqSdUIj6CymRFSSco7Qabs9pJrZHU70egjN%2BIMEB5zCnw4DU7DMJT3tcQGOqUBMierML3zwb07U%2FSX92fmGCvQgNc3eFds4hhTP3abrlbval%2BNPtjhDSZK9HIIWGydmhbKYoJXHDjaNQjbrlDeX7x3M%2FcynRKUp0CmXdLWNTQw5ySFaEmMZX0cX8N4lJLg0xuhdPtLWIDFZoo1QekdxfwGH8TW%2FKjQdjQmatrPfvExuQTccu%2FICfybVplZl%2BioxjCKsm%2FT6dS205gBbFNeJfFA0Y4q&X-Amz-Signature=d96857cd07464bb2eeefabd04c3ed872db950139bb959fd3b0eaf99c8c39eac5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QDYNNX7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIByAE5BmeernznqoLZfpjvQGoz7xlAw%2Bta8jVQKIDA4aAiEAxqlm44ZHqt5JaY0bGhzTwQ24ycXj0Xtfm3Snkdh2EKoqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAr%2Bgs19EYYqNdpuMircA%2BichpWeCjFdBfsi1TwSOfYo%2B5STMg1%2F2Kysq2S20V0Qv3PjIhvZxIP%2F0KLobs1hVhgBWQGObLgXCnRFRUA5REcOuMNZIrqB2cX8l%2FvyVAlWyvfvoSyaA%2BnseSStMDwkIFArK5XQkxGYZw1IIWTFZjvpME%2BTWimS1HNEkCpEzvFO1we7Pe5EuAe1InYx7PrcffdNn%2BiFIaf0eICnQefUD3POcymF%2FRUNV%2BbT36K0Xaan53uGuiTfuopiAqphcapH5ST6WscqWfnc%2Byn%2Fy0E7ubkXW16XX9aT9CRnRkAq1qOY2a%2BGHAzX5FxrGd4%2Fsn60oN7FUimCgdn57Z3FdaaxSIE98oLqfnq08nNARKnKvDv2RXnWHkrYOKb1R%2BszrQGHzHPtbIuFQiwUG%2BcMY8OCHfMSB8ANuIyKKxfv7jLPQZYhT8mj%2FNb5evsH3tPDiCm2LtJ57Awq%2BtU6bxfYi9D62H54JKAhEALBo3NR5vVPDpegHb8vPnpzj2tAZ7FRhVyb6QJGD9OPF5xo%2BesnxtD7E4b2Vj%2BySn7hquyNdTeD1wO%2Fq3WGzqIx%2F%2B%2F%2BKhRpYGHl654bagLjNaTqSdUIj6CymRFSSco7Qabs9pJrZHU70egjN%2BIMEB5zCnw4DU7DMJT3tcQGOqUBMierML3zwb07U%2FSX92fmGCvQgNc3eFds4hhTP3abrlbval%2BNPtjhDSZK9HIIWGydmhbKYoJXHDjaNQjbrlDeX7x3M%2FcynRKUp0CmXdLWNTQw5ySFaEmMZX0cX8N4lJLg0xuhdPtLWIDFZoo1QekdxfwGH8TW%2FKjQdjQmatrPfvExuQTccu%2FICfybVplZl%2BioxjCKsm%2FT6dS205gBbFNeJfFA0Y4q&X-Amz-Signature=4251dee8a543666374110361b0d49de5c27718e1d38d1dd4910535456e09afbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QDYNNX7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIByAE5BmeernznqoLZfpjvQGoz7xlAw%2Bta8jVQKIDA4aAiEAxqlm44ZHqt5JaY0bGhzTwQ24ycXj0Xtfm3Snkdh2EKoqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAr%2Bgs19EYYqNdpuMircA%2BichpWeCjFdBfsi1TwSOfYo%2B5STMg1%2F2Kysq2S20V0Qv3PjIhvZxIP%2F0KLobs1hVhgBWQGObLgXCnRFRUA5REcOuMNZIrqB2cX8l%2FvyVAlWyvfvoSyaA%2BnseSStMDwkIFArK5XQkxGYZw1IIWTFZjvpME%2BTWimS1HNEkCpEzvFO1we7Pe5EuAe1InYx7PrcffdNn%2BiFIaf0eICnQefUD3POcymF%2FRUNV%2BbT36K0Xaan53uGuiTfuopiAqphcapH5ST6WscqWfnc%2Byn%2Fy0E7ubkXW16XX9aT9CRnRkAq1qOY2a%2BGHAzX5FxrGd4%2Fsn60oN7FUimCgdn57Z3FdaaxSIE98oLqfnq08nNARKnKvDv2RXnWHkrYOKb1R%2BszrQGHzHPtbIuFQiwUG%2BcMY8OCHfMSB8ANuIyKKxfv7jLPQZYhT8mj%2FNb5evsH3tPDiCm2LtJ57Awq%2BtU6bxfYi9D62H54JKAhEALBo3NR5vVPDpegHb8vPnpzj2tAZ7FRhVyb6QJGD9OPF5xo%2BesnxtD7E4b2Vj%2BySn7hquyNdTeD1wO%2Fq3WGzqIx%2F%2B%2F%2BKhRpYGHl654bagLjNaTqSdUIj6CymRFSSco7Qabs9pJrZHU70egjN%2BIMEB5zCnw4DU7DMJT3tcQGOqUBMierML3zwb07U%2FSX92fmGCvQgNc3eFds4hhTP3abrlbval%2BNPtjhDSZK9HIIWGydmhbKYoJXHDjaNQjbrlDeX7x3M%2FcynRKUp0CmXdLWNTQw5ySFaEmMZX0cX8N4lJLg0xuhdPtLWIDFZoo1QekdxfwGH8TW%2FKjQdjQmatrPfvExuQTccu%2FICfybVplZl%2BioxjCKsm%2FT6dS205gBbFNeJfFA0Y4q&X-Amz-Signature=6f7fe5ba4dbf171e72084f1a10425c94031de34508e9923697ba32d4d71a577b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QDYNNX7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIByAE5BmeernznqoLZfpjvQGoz7xlAw%2Bta8jVQKIDA4aAiEAxqlm44ZHqt5JaY0bGhzTwQ24ycXj0Xtfm3Snkdh2EKoqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAr%2Bgs19EYYqNdpuMircA%2BichpWeCjFdBfsi1TwSOfYo%2B5STMg1%2F2Kysq2S20V0Qv3PjIhvZxIP%2F0KLobs1hVhgBWQGObLgXCnRFRUA5REcOuMNZIrqB2cX8l%2FvyVAlWyvfvoSyaA%2BnseSStMDwkIFArK5XQkxGYZw1IIWTFZjvpME%2BTWimS1HNEkCpEzvFO1we7Pe5EuAe1InYx7PrcffdNn%2BiFIaf0eICnQefUD3POcymF%2FRUNV%2BbT36K0Xaan53uGuiTfuopiAqphcapH5ST6WscqWfnc%2Byn%2Fy0E7ubkXW16XX9aT9CRnRkAq1qOY2a%2BGHAzX5FxrGd4%2Fsn60oN7FUimCgdn57Z3FdaaxSIE98oLqfnq08nNARKnKvDv2RXnWHkrYOKb1R%2BszrQGHzHPtbIuFQiwUG%2BcMY8OCHfMSB8ANuIyKKxfv7jLPQZYhT8mj%2FNb5evsH3tPDiCm2LtJ57Awq%2BtU6bxfYi9D62H54JKAhEALBo3NR5vVPDpegHb8vPnpzj2tAZ7FRhVyb6QJGD9OPF5xo%2BesnxtD7E4b2Vj%2BySn7hquyNdTeD1wO%2Fq3WGzqIx%2F%2B%2F%2BKhRpYGHl654bagLjNaTqSdUIj6CymRFSSco7Qabs9pJrZHU70egjN%2BIMEB5zCnw4DU7DMJT3tcQGOqUBMierML3zwb07U%2FSX92fmGCvQgNc3eFds4hhTP3abrlbval%2BNPtjhDSZK9HIIWGydmhbKYoJXHDjaNQjbrlDeX7x3M%2FcynRKUp0CmXdLWNTQw5ySFaEmMZX0cX8N4lJLg0xuhdPtLWIDFZoo1QekdxfwGH8TW%2FKjQdjQmatrPfvExuQTccu%2FICfybVplZl%2BioxjCKsm%2FT6dS205gBbFNeJfFA0Y4q&X-Amz-Signature=0b350ab382dbc332c90d4fcbdf476d77a07eedb467434e74a18d5533e46e20b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QDYNNX7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIByAE5BmeernznqoLZfpjvQGoz7xlAw%2Bta8jVQKIDA4aAiEAxqlm44ZHqt5JaY0bGhzTwQ24ycXj0Xtfm3Snkdh2EKoqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAr%2Bgs19EYYqNdpuMircA%2BichpWeCjFdBfsi1TwSOfYo%2B5STMg1%2F2Kysq2S20V0Qv3PjIhvZxIP%2F0KLobs1hVhgBWQGObLgXCnRFRUA5REcOuMNZIrqB2cX8l%2FvyVAlWyvfvoSyaA%2BnseSStMDwkIFArK5XQkxGYZw1IIWTFZjvpME%2BTWimS1HNEkCpEzvFO1we7Pe5EuAe1InYx7PrcffdNn%2BiFIaf0eICnQefUD3POcymF%2FRUNV%2BbT36K0Xaan53uGuiTfuopiAqphcapH5ST6WscqWfnc%2Byn%2Fy0E7ubkXW16XX9aT9CRnRkAq1qOY2a%2BGHAzX5FxrGd4%2Fsn60oN7FUimCgdn57Z3FdaaxSIE98oLqfnq08nNARKnKvDv2RXnWHkrYOKb1R%2BszrQGHzHPtbIuFQiwUG%2BcMY8OCHfMSB8ANuIyKKxfv7jLPQZYhT8mj%2FNb5evsH3tPDiCm2LtJ57Awq%2BtU6bxfYi9D62H54JKAhEALBo3NR5vVPDpegHb8vPnpzj2tAZ7FRhVyb6QJGD9OPF5xo%2BesnxtD7E4b2Vj%2BySn7hquyNdTeD1wO%2Fq3WGzqIx%2F%2B%2F%2BKhRpYGHl654bagLjNaTqSdUIj6CymRFSSco7Qabs9pJrZHU70egjN%2BIMEB5zCnw4DU7DMJT3tcQGOqUBMierML3zwb07U%2FSX92fmGCvQgNc3eFds4hhTP3abrlbval%2BNPtjhDSZK9HIIWGydmhbKYoJXHDjaNQjbrlDeX7x3M%2FcynRKUp0CmXdLWNTQw5ySFaEmMZX0cX8N4lJLg0xuhdPtLWIDFZoo1QekdxfwGH8TW%2FKjQdjQmatrPfvExuQTccu%2FICfybVplZl%2BioxjCKsm%2FT6dS205gBbFNeJfFA0Y4q&X-Amz-Signature=2baf7b22a22d0b13524589ef8963eed246087741e65162452d4ea1ed6dcb5a15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QDYNNX7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIByAE5BmeernznqoLZfpjvQGoz7xlAw%2Bta8jVQKIDA4aAiEAxqlm44ZHqt5JaY0bGhzTwQ24ycXj0Xtfm3Snkdh2EKoqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAr%2Bgs19EYYqNdpuMircA%2BichpWeCjFdBfsi1TwSOfYo%2B5STMg1%2F2Kysq2S20V0Qv3PjIhvZxIP%2F0KLobs1hVhgBWQGObLgXCnRFRUA5REcOuMNZIrqB2cX8l%2FvyVAlWyvfvoSyaA%2BnseSStMDwkIFArK5XQkxGYZw1IIWTFZjvpME%2BTWimS1HNEkCpEzvFO1we7Pe5EuAe1InYx7PrcffdNn%2BiFIaf0eICnQefUD3POcymF%2FRUNV%2BbT36K0Xaan53uGuiTfuopiAqphcapH5ST6WscqWfnc%2Byn%2Fy0E7ubkXW16XX9aT9CRnRkAq1qOY2a%2BGHAzX5FxrGd4%2Fsn60oN7FUimCgdn57Z3FdaaxSIE98oLqfnq08nNARKnKvDv2RXnWHkrYOKb1R%2BszrQGHzHPtbIuFQiwUG%2BcMY8OCHfMSB8ANuIyKKxfv7jLPQZYhT8mj%2FNb5evsH3tPDiCm2LtJ57Awq%2BtU6bxfYi9D62H54JKAhEALBo3NR5vVPDpegHb8vPnpzj2tAZ7FRhVyb6QJGD9OPF5xo%2BesnxtD7E4b2Vj%2BySn7hquyNdTeD1wO%2Fq3WGzqIx%2F%2B%2F%2BKhRpYGHl654bagLjNaTqSdUIj6CymRFSSco7Qabs9pJrZHU70egjN%2BIMEB5zCnw4DU7DMJT3tcQGOqUBMierML3zwb07U%2FSX92fmGCvQgNc3eFds4hhTP3abrlbval%2BNPtjhDSZK9HIIWGydmhbKYoJXHDjaNQjbrlDeX7x3M%2FcynRKUp0CmXdLWNTQw5ySFaEmMZX0cX8N4lJLg0xuhdPtLWIDFZoo1QekdxfwGH8TW%2FKjQdjQmatrPfvExuQTccu%2FICfybVplZl%2BioxjCKsm%2FT6dS205gBbFNeJfFA0Y4q&X-Amz-Signature=6db03ba2d24f6de9c64c85c6b697d3a2e4d2f05691972d71338949f7b149c8ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QDYNNX7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIByAE5BmeernznqoLZfpjvQGoz7xlAw%2Bta8jVQKIDA4aAiEAxqlm44ZHqt5JaY0bGhzTwQ24ycXj0Xtfm3Snkdh2EKoqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAr%2Bgs19EYYqNdpuMircA%2BichpWeCjFdBfsi1TwSOfYo%2B5STMg1%2F2Kysq2S20V0Qv3PjIhvZxIP%2F0KLobs1hVhgBWQGObLgXCnRFRUA5REcOuMNZIrqB2cX8l%2FvyVAlWyvfvoSyaA%2BnseSStMDwkIFArK5XQkxGYZw1IIWTFZjvpME%2BTWimS1HNEkCpEzvFO1we7Pe5EuAe1InYx7PrcffdNn%2BiFIaf0eICnQefUD3POcymF%2FRUNV%2BbT36K0Xaan53uGuiTfuopiAqphcapH5ST6WscqWfnc%2Byn%2Fy0E7ubkXW16XX9aT9CRnRkAq1qOY2a%2BGHAzX5FxrGd4%2Fsn60oN7FUimCgdn57Z3FdaaxSIE98oLqfnq08nNARKnKvDv2RXnWHkrYOKb1R%2BszrQGHzHPtbIuFQiwUG%2BcMY8OCHfMSB8ANuIyKKxfv7jLPQZYhT8mj%2FNb5evsH3tPDiCm2LtJ57Awq%2BtU6bxfYi9D62H54JKAhEALBo3NR5vVPDpegHb8vPnpzj2tAZ7FRhVyb6QJGD9OPF5xo%2BesnxtD7E4b2Vj%2BySn7hquyNdTeD1wO%2Fq3WGzqIx%2F%2B%2F%2BKhRpYGHl654bagLjNaTqSdUIj6CymRFSSco7Qabs9pJrZHU70egjN%2BIMEB5zCnw4DU7DMJT3tcQGOqUBMierML3zwb07U%2FSX92fmGCvQgNc3eFds4hhTP3abrlbval%2BNPtjhDSZK9HIIWGydmhbKYoJXHDjaNQjbrlDeX7x3M%2FcynRKUp0CmXdLWNTQw5ySFaEmMZX0cX8N4lJLg0xuhdPtLWIDFZoo1QekdxfwGH8TW%2FKjQdjQmatrPfvExuQTccu%2FICfybVplZl%2BioxjCKsm%2FT6dS205gBbFNeJfFA0Y4q&X-Amz-Signature=1c744d126972d6e7dd1429f32baebda0b2406564c42488b74ebf9eee8030d2ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QDYNNX7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIByAE5BmeernznqoLZfpjvQGoz7xlAw%2Bta8jVQKIDA4aAiEAxqlm44ZHqt5JaY0bGhzTwQ24ycXj0Xtfm3Snkdh2EKoqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAr%2Bgs19EYYqNdpuMircA%2BichpWeCjFdBfsi1TwSOfYo%2B5STMg1%2F2Kysq2S20V0Qv3PjIhvZxIP%2F0KLobs1hVhgBWQGObLgXCnRFRUA5REcOuMNZIrqB2cX8l%2FvyVAlWyvfvoSyaA%2BnseSStMDwkIFArK5XQkxGYZw1IIWTFZjvpME%2BTWimS1HNEkCpEzvFO1we7Pe5EuAe1InYx7PrcffdNn%2BiFIaf0eICnQefUD3POcymF%2FRUNV%2BbT36K0Xaan53uGuiTfuopiAqphcapH5ST6WscqWfnc%2Byn%2Fy0E7ubkXW16XX9aT9CRnRkAq1qOY2a%2BGHAzX5FxrGd4%2Fsn60oN7FUimCgdn57Z3FdaaxSIE98oLqfnq08nNARKnKvDv2RXnWHkrYOKb1R%2BszrQGHzHPtbIuFQiwUG%2BcMY8OCHfMSB8ANuIyKKxfv7jLPQZYhT8mj%2FNb5evsH3tPDiCm2LtJ57Awq%2BtU6bxfYi9D62H54JKAhEALBo3NR5vVPDpegHb8vPnpzj2tAZ7FRhVyb6QJGD9OPF5xo%2BesnxtD7E4b2Vj%2BySn7hquyNdTeD1wO%2Fq3WGzqIx%2F%2B%2F%2BKhRpYGHl654bagLjNaTqSdUIj6CymRFSSco7Qabs9pJrZHU70egjN%2BIMEB5zCnw4DU7DMJT3tcQGOqUBMierML3zwb07U%2FSX92fmGCvQgNc3eFds4hhTP3abrlbval%2BNPtjhDSZK9HIIWGydmhbKYoJXHDjaNQjbrlDeX7x3M%2FcynRKUp0CmXdLWNTQw5ySFaEmMZX0cX8N4lJLg0xuhdPtLWIDFZoo1QekdxfwGH8TW%2FKjQdjQmatrPfvExuQTccu%2FICfybVplZl%2BioxjCKsm%2FT6dS205gBbFNeJfFA0Y4q&X-Amz-Signature=916138daaf61728cebfe6c325d2a13efc4cab623806263939b18d6ee50f91af2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QDYNNX7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T034955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIByAE5BmeernznqoLZfpjvQGoz7xlAw%2Bta8jVQKIDA4aAiEAxqlm44ZHqt5JaY0bGhzTwQ24ycXj0Xtfm3Snkdh2EKoqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAr%2Bgs19EYYqNdpuMircA%2BichpWeCjFdBfsi1TwSOfYo%2B5STMg1%2F2Kysq2S20V0Qv3PjIhvZxIP%2F0KLobs1hVhgBWQGObLgXCnRFRUA5REcOuMNZIrqB2cX8l%2FvyVAlWyvfvoSyaA%2BnseSStMDwkIFArK5XQkxGYZw1IIWTFZjvpME%2BTWimS1HNEkCpEzvFO1we7Pe5EuAe1InYx7PrcffdNn%2BiFIaf0eICnQefUD3POcymF%2FRUNV%2BbT36K0Xaan53uGuiTfuopiAqphcapH5ST6WscqWfnc%2Byn%2Fy0E7ubkXW16XX9aT9CRnRkAq1qOY2a%2BGHAzX5FxrGd4%2Fsn60oN7FUimCgdn57Z3FdaaxSIE98oLqfnq08nNARKnKvDv2RXnWHkrYOKb1R%2BszrQGHzHPtbIuFQiwUG%2BcMY8OCHfMSB8ANuIyKKxfv7jLPQZYhT8mj%2FNb5evsH3tPDiCm2LtJ57Awq%2BtU6bxfYi9D62H54JKAhEALBo3NR5vVPDpegHb8vPnpzj2tAZ7FRhVyb6QJGD9OPF5xo%2BesnxtD7E4b2Vj%2BySn7hquyNdTeD1wO%2Fq3WGzqIx%2F%2B%2F%2BKhRpYGHl654bagLjNaTqSdUIj6CymRFSSco7Qabs9pJrZHU70egjN%2BIMEB5zCnw4DU7DMJT3tcQGOqUBMierML3zwb07U%2FSX92fmGCvQgNc3eFds4hhTP3abrlbval%2BNPtjhDSZK9HIIWGydmhbKYoJXHDjaNQjbrlDeX7x3M%2FcynRKUp0CmXdLWNTQw5ySFaEmMZX0cX8N4lJLg0xuhdPtLWIDFZoo1QekdxfwGH8TW%2FKjQdjQmatrPfvExuQTccu%2FICfybVplZl%2BioxjCKsm%2FT6dS205gBbFNeJfFA0Y4q&X-Amz-Signature=4394926617b61590e37a81f2f490ab732bbbd11937dd46f0eea16fb7ff43daf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
