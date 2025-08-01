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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIFYDZ2R%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCDePY3VNuiQ60SHorPtOrIGsLiRheB5Jq2TDe%2BI0taAiB4K0K6whs1pOWfiNhAGe%2BfKIJZpUUHV4VtXuGM8O1ufCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHBPmgMqvA2CIQqtAKtwDaCLiB%2Bxy5e%2BMVxsFvhObTmei1oBO%2B6GeOK6vRunbCJOf7mNz0%2BpaCd9bnyfNk40SLdoiVkTbaLJRQSJTeOO6WDJQJ%2BBOnBe%2Bv%2B9vKrgdesonoREqGONR%2BGBsGRjNg7bAjWFbHWhhZAD8rPPuPgvdTx%2FFCW%2BXGX87cH6%2BMgyx0%2FNbdaHi4Xz4HyBFLZ9%2FHEf5LmrJPutf73bQf0HXCtqawgbz%2FzobV3r3VsfLOFOWVEXouCWlPasH0arvA6ZEEwSirT1pXZ5nJ80fbj9JzSW6Y8S8Hc%2FbeRcg9rrcTVui9rien7nQ7I%2FEktpgIZ5RjsLUxqk4Yb3UZys4iRGnWe6t35qRKgIVrI3yHSg2171LQlbgmg%2BXR5h6NSv8%2BdZp36lGL%2B%2FJbVI%2B27WoIyB1t8CuwWtBQqt6DqAfF6mqqlKmeUGlnkcpKZrNR8BPV%2B4a3Glx3KWK4lGscjFDtwyVDmBfmm%2B3h0lDuJHExPFvFE4D2haJYt6YUQzjSBD%2FUXgp8i6AYnKo3kY7SAbr9NnU49pM%2FE1g%2BzkW45RpeUONjREpEn5fzV%2BYYBL7BYtjkQkPdi7aVxFWCQ9KAcjUkfxEd7Sbmr4x9E9lRmKBAKi4aAKTN05l6b%2FW%2BuG5OCX1OR0wgKG0xAY6pgFrreWli4OvyB3eCGXKB0vKQ2HdN9mwPhDjLVIPE67jHp18wMcgjlgjEETaYNTysu3uNkj6uGcZa1P%2FuDBlVW4gPpI5a8dzn9IT4L6nhXOGos8iwl7VLNwc5Dzbie1CE0t5Q3GRsLE17UwmiFRk7%2FV9VKgpf5%2Fgclwz2jKSRdtfCmLcPZEtmkIIAT8%2FGuySssAJ0Q7%2FLpM4xYojGFd4YsPoUognNg12&X-Amz-Signature=c2005cdd4e05dba6dd64d042bd91fea964be26903ab9fa4d20d221e1fcbe35c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIFYDZ2R%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCDePY3VNuiQ60SHorPtOrIGsLiRheB5Jq2TDe%2BI0taAiB4K0K6whs1pOWfiNhAGe%2BfKIJZpUUHV4VtXuGM8O1ufCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHBPmgMqvA2CIQqtAKtwDaCLiB%2Bxy5e%2BMVxsFvhObTmei1oBO%2B6GeOK6vRunbCJOf7mNz0%2BpaCd9bnyfNk40SLdoiVkTbaLJRQSJTeOO6WDJQJ%2BBOnBe%2Bv%2B9vKrgdesonoREqGONR%2BGBsGRjNg7bAjWFbHWhhZAD8rPPuPgvdTx%2FFCW%2BXGX87cH6%2BMgyx0%2FNbdaHi4Xz4HyBFLZ9%2FHEf5LmrJPutf73bQf0HXCtqawgbz%2FzobV3r3VsfLOFOWVEXouCWlPasH0arvA6ZEEwSirT1pXZ5nJ80fbj9JzSW6Y8S8Hc%2FbeRcg9rrcTVui9rien7nQ7I%2FEktpgIZ5RjsLUxqk4Yb3UZys4iRGnWe6t35qRKgIVrI3yHSg2171LQlbgmg%2BXR5h6NSv8%2BdZp36lGL%2B%2FJbVI%2B27WoIyB1t8CuwWtBQqt6DqAfF6mqqlKmeUGlnkcpKZrNR8BPV%2B4a3Glx3KWK4lGscjFDtwyVDmBfmm%2B3h0lDuJHExPFvFE4D2haJYt6YUQzjSBD%2FUXgp8i6AYnKo3kY7SAbr9NnU49pM%2FE1g%2BzkW45RpeUONjREpEn5fzV%2BYYBL7BYtjkQkPdi7aVxFWCQ9KAcjUkfxEd7Sbmr4x9E9lRmKBAKi4aAKTN05l6b%2FW%2BuG5OCX1OR0wgKG0xAY6pgFrreWli4OvyB3eCGXKB0vKQ2HdN9mwPhDjLVIPE67jHp18wMcgjlgjEETaYNTysu3uNkj6uGcZa1P%2FuDBlVW4gPpI5a8dzn9IT4L6nhXOGos8iwl7VLNwc5Dzbie1CE0t5Q3GRsLE17UwmiFRk7%2FV9VKgpf5%2Fgclwz2jKSRdtfCmLcPZEtmkIIAT8%2FGuySssAJ0Q7%2FLpM4xYojGFd4YsPoUognNg12&X-Amz-Signature=8d1a24b006be98232f77027730e39ce84d5f956f228e45fdb6fb1218741b1ca6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIFYDZ2R%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCDePY3VNuiQ60SHorPtOrIGsLiRheB5Jq2TDe%2BI0taAiB4K0K6whs1pOWfiNhAGe%2BfKIJZpUUHV4VtXuGM8O1ufCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHBPmgMqvA2CIQqtAKtwDaCLiB%2Bxy5e%2BMVxsFvhObTmei1oBO%2B6GeOK6vRunbCJOf7mNz0%2BpaCd9bnyfNk40SLdoiVkTbaLJRQSJTeOO6WDJQJ%2BBOnBe%2Bv%2B9vKrgdesonoREqGONR%2BGBsGRjNg7bAjWFbHWhhZAD8rPPuPgvdTx%2FFCW%2BXGX87cH6%2BMgyx0%2FNbdaHi4Xz4HyBFLZ9%2FHEf5LmrJPutf73bQf0HXCtqawgbz%2FzobV3r3VsfLOFOWVEXouCWlPasH0arvA6ZEEwSirT1pXZ5nJ80fbj9JzSW6Y8S8Hc%2FbeRcg9rrcTVui9rien7nQ7I%2FEktpgIZ5RjsLUxqk4Yb3UZys4iRGnWe6t35qRKgIVrI3yHSg2171LQlbgmg%2BXR5h6NSv8%2BdZp36lGL%2B%2FJbVI%2B27WoIyB1t8CuwWtBQqt6DqAfF6mqqlKmeUGlnkcpKZrNR8BPV%2B4a3Glx3KWK4lGscjFDtwyVDmBfmm%2B3h0lDuJHExPFvFE4D2haJYt6YUQzjSBD%2FUXgp8i6AYnKo3kY7SAbr9NnU49pM%2FE1g%2BzkW45RpeUONjREpEn5fzV%2BYYBL7BYtjkQkPdi7aVxFWCQ9KAcjUkfxEd7Sbmr4x9E9lRmKBAKi4aAKTN05l6b%2FW%2BuG5OCX1OR0wgKG0xAY6pgFrreWli4OvyB3eCGXKB0vKQ2HdN9mwPhDjLVIPE67jHp18wMcgjlgjEETaYNTysu3uNkj6uGcZa1P%2FuDBlVW4gPpI5a8dzn9IT4L6nhXOGos8iwl7VLNwc5Dzbie1CE0t5Q3GRsLE17UwmiFRk7%2FV9VKgpf5%2Fgclwz2jKSRdtfCmLcPZEtmkIIAT8%2FGuySssAJ0Q7%2FLpM4xYojGFd4YsPoUognNg12&X-Amz-Signature=b870be18334416da34dad539b3db853ccc3e6ac82337c0abafd97857148b25aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIFYDZ2R%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCDePY3VNuiQ60SHorPtOrIGsLiRheB5Jq2TDe%2BI0taAiB4K0K6whs1pOWfiNhAGe%2BfKIJZpUUHV4VtXuGM8O1ufCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHBPmgMqvA2CIQqtAKtwDaCLiB%2Bxy5e%2BMVxsFvhObTmei1oBO%2B6GeOK6vRunbCJOf7mNz0%2BpaCd9bnyfNk40SLdoiVkTbaLJRQSJTeOO6WDJQJ%2BBOnBe%2Bv%2B9vKrgdesonoREqGONR%2BGBsGRjNg7bAjWFbHWhhZAD8rPPuPgvdTx%2FFCW%2BXGX87cH6%2BMgyx0%2FNbdaHi4Xz4HyBFLZ9%2FHEf5LmrJPutf73bQf0HXCtqawgbz%2FzobV3r3VsfLOFOWVEXouCWlPasH0arvA6ZEEwSirT1pXZ5nJ80fbj9JzSW6Y8S8Hc%2FbeRcg9rrcTVui9rien7nQ7I%2FEktpgIZ5RjsLUxqk4Yb3UZys4iRGnWe6t35qRKgIVrI3yHSg2171LQlbgmg%2BXR5h6NSv8%2BdZp36lGL%2B%2FJbVI%2B27WoIyB1t8CuwWtBQqt6DqAfF6mqqlKmeUGlnkcpKZrNR8BPV%2B4a3Glx3KWK4lGscjFDtwyVDmBfmm%2B3h0lDuJHExPFvFE4D2haJYt6YUQzjSBD%2FUXgp8i6AYnKo3kY7SAbr9NnU49pM%2FE1g%2BzkW45RpeUONjREpEn5fzV%2BYYBL7BYtjkQkPdi7aVxFWCQ9KAcjUkfxEd7Sbmr4x9E9lRmKBAKi4aAKTN05l6b%2FW%2BuG5OCX1OR0wgKG0xAY6pgFrreWli4OvyB3eCGXKB0vKQ2HdN9mwPhDjLVIPE67jHp18wMcgjlgjEETaYNTysu3uNkj6uGcZa1P%2FuDBlVW4gPpI5a8dzn9IT4L6nhXOGos8iwl7VLNwc5Dzbie1CE0t5Q3GRsLE17UwmiFRk7%2FV9VKgpf5%2Fgclwz2jKSRdtfCmLcPZEtmkIIAT8%2FGuySssAJ0Q7%2FLpM4xYojGFd4YsPoUognNg12&X-Amz-Signature=ce8a78e6e2b2aa8f5928cc33c6e6f1603a5cd76ae9dfef906393e67f0ebd567b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIFYDZ2R%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCDePY3VNuiQ60SHorPtOrIGsLiRheB5Jq2TDe%2BI0taAiB4K0K6whs1pOWfiNhAGe%2BfKIJZpUUHV4VtXuGM8O1ufCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHBPmgMqvA2CIQqtAKtwDaCLiB%2Bxy5e%2BMVxsFvhObTmei1oBO%2B6GeOK6vRunbCJOf7mNz0%2BpaCd9bnyfNk40SLdoiVkTbaLJRQSJTeOO6WDJQJ%2BBOnBe%2Bv%2B9vKrgdesonoREqGONR%2BGBsGRjNg7bAjWFbHWhhZAD8rPPuPgvdTx%2FFCW%2BXGX87cH6%2BMgyx0%2FNbdaHi4Xz4HyBFLZ9%2FHEf5LmrJPutf73bQf0HXCtqawgbz%2FzobV3r3VsfLOFOWVEXouCWlPasH0arvA6ZEEwSirT1pXZ5nJ80fbj9JzSW6Y8S8Hc%2FbeRcg9rrcTVui9rien7nQ7I%2FEktpgIZ5RjsLUxqk4Yb3UZys4iRGnWe6t35qRKgIVrI3yHSg2171LQlbgmg%2BXR5h6NSv8%2BdZp36lGL%2B%2FJbVI%2B27WoIyB1t8CuwWtBQqt6DqAfF6mqqlKmeUGlnkcpKZrNR8BPV%2B4a3Glx3KWK4lGscjFDtwyVDmBfmm%2B3h0lDuJHExPFvFE4D2haJYt6YUQzjSBD%2FUXgp8i6AYnKo3kY7SAbr9NnU49pM%2FE1g%2BzkW45RpeUONjREpEn5fzV%2BYYBL7BYtjkQkPdi7aVxFWCQ9KAcjUkfxEd7Sbmr4x9E9lRmKBAKi4aAKTN05l6b%2FW%2BuG5OCX1OR0wgKG0xAY6pgFrreWli4OvyB3eCGXKB0vKQ2HdN9mwPhDjLVIPE67jHp18wMcgjlgjEETaYNTysu3uNkj6uGcZa1P%2FuDBlVW4gPpI5a8dzn9IT4L6nhXOGos8iwl7VLNwc5Dzbie1CE0t5Q3GRsLE17UwmiFRk7%2FV9VKgpf5%2Fgclwz2jKSRdtfCmLcPZEtmkIIAT8%2FGuySssAJ0Q7%2FLpM4xYojGFd4YsPoUognNg12&X-Amz-Signature=c4c3b6f06d94a55326efb2265082e54f8f7b112442f9237b3c343a317857d075&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIFYDZ2R%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCDePY3VNuiQ60SHorPtOrIGsLiRheB5Jq2TDe%2BI0taAiB4K0K6whs1pOWfiNhAGe%2BfKIJZpUUHV4VtXuGM8O1ufCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHBPmgMqvA2CIQqtAKtwDaCLiB%2Bxy5e%2BMVxsFvhObTmei1oBO%2B6GeOK6vRunbCJOf7mNz0%2BpaCd9bnyfNk40SLdoiVkTbaLJRQSJTeOO6WDJQJ%2BBOnBe%2Bv%2B9vKrgdesonoREqGONR%2BGBsGRjNg7bAjWFbHWhhZAD8rPPuPgvdTx%2FFCW%2BXGX87cH6%2BMgyx0%2FNbdaHi4Xz4HyBFLZ9%2FHEf5LmrJPutf73bQf0HXCtqawgbz%2FzobV3r3VsfLOFOWVEXouCWlPasH0arvA6ZEEwSirT1pXZ5nJ80fbj9JzSW6Y8S8Hc%2FbeRcg9rrcTVui9rien7nQ7I%2FEktpgIZ5RjsLUxqk4Yb3UZys4iRGnWe6t35qRKgIVrI3yHSg2171LQlbgmg%2BXR5h6NSv8%2BdZp36lGL%2B%2FJbVI%2B27WoIyB1t8CuwWtBQqt6DqAfF6mqqlKmeUGlnkcpKZrNR8BPV%2B4a3Glx3KWK4lGscjFDtwyVDmBfmm%2B3h0lDuJHExPFvFE4D2haJYt6YUQzjSBD%2FUXgp8i6AYnKo3kY7SAbr9NnU49pM%2FE1g%2BzkW45RpeUONjREpEn5fzV%2BYYBL7BYtjkQkPdi7aVxFWCQ9KAcjUkfxEd7Sbmr4x9E9lRmKBAKi4aAKTN05l6b%2FW%2BuG5OCX1OR0wgKG0xAY6pgFrreWli4OvyB3eCGXKB0vKQ2HdN9mwPhDjLVIPE67jHp18wMcgjlgjEETaYNTysu3uNkj6uGcZa1P%2FuDBlVW4gPpI5a8dzn9IT4L6nhXOGos8iwl7VLNwc5Dzbie1CE0t5Q3GRsLE17UwmiFRk7%2FV9VKgpf5%2Fgclwz2jKSRdtfCmLcPZEtmkIIAT8%2FGuySssAJ0Q7%2FLpM4xYojGFd4YsPoUognNg12&X-Amz-Signature=42c39ce8fcb95264f730136f2c6487c9490d1c2912874b6abf7a30ab1434d421&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIFYDZ2R%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCDePY3VNuiQ60SHorPtOrIGsLiRheB5Jq2TDe%2BI0taAiB4K0K6whs1pOWfiNhAGe%2BfKIJZpUUHV4VtXuGM8O1ufCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHBPmgMqvA2CIQqtAKtwDaCLiB%2Bxy5e%2BMVxsFvhObTmei1oBO%2B6GeOK6vRunbCJOf7mNz0%2BpaCd9bnyfNk40SLdoiVkTbaLJRQSJTeOO6WDJQJ%2BBOnBe%2Bv%2B9vKrgdesonoREqGONR%2BGBsGRjNg7bAjWFbHWhhZAD8rPPuPgvdTx%2FFCW%2BXGX87cH6%2BMgyx0%2FNbdaHi4Xz4HyBFLZ9%2FHEf5LmrJPutf73bQf0HXCtqawgbz%2FzobV3r3VsfLOFOWVEXouCWlPasH0arvA6ZEEwSirT1pXZ5nJ80fbj9JzSW6Y8S8Hc%2FbeRcg9rrcTVui9rien7nQ7I%2FEktpgIZ5RjsLUxqk4Yb3UZys4iRGnWe6t35qRKgIVrI3yHSg2171LQlbgmg%2BXR5h6NSv8%2BdZp36lGL%2B%2FJbVI%2B27WoIyB1t8CuwWtBQqt6DqAfF6mqqlKmeUGlnkcpKZrNR8BPV%2B4a3Glx3KWK4lGscjFDtwyVDmBfmm%2B3h0lDuJHExPFvFE4D2haJYt6YUQzjSBD%2FUXgp8i6AYnKo3kY7SAbr9NnU49pM%2FE1g%2BzkW45RpeUONjREpEn5fzV%2BYYBL7BYtjkQkPdi7aVxFWCQ9KAcjUkfxEd7Sbmr4x9E9lRmKBAKi4aAKTN05l6b%2FW%2BuG5OCX1OR0wgKG0xAY6pgFrreWli4OvyB3eCGXKB0vKQ2HdN9mwPhDjLVIPE67jHp18wMcgjlgjEETaYNTysu3uNkj6uGcZa1P%2FuDBlVW4gPpI5a8dzn9IT4L6nhXOGos8iwl7VLNwc5Dzbie1CE0t5Q3GRsLE17UwmiFRk7%2FV9VKgpf5%2Fgclwz2jKSRdtfCmLcPZEtmkIIAT8%2FGuySssAJ0Q7%2FLpM4xYojGFd4YsPoUognNg12&X-Amz-Signature=c4a74810e95cdf4f78c8582c95ea4bbdd89c171fff5497cfeaade9dde881c739&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIFYDZ2R%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCDePY3VNuiQ60SHorPtOrIGsLiRheB5Jq2TDe%2BI0taAiB4K0K6whs1pOWfiNhAGe%2BfKIJZpUUHV4VtXuGM8O1ufCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHBPmgMqvA2CIQqtAKtwDaCLiB%2Bxy5e%2BMVxsFvhObTmei1oBO%2B6GeOK6vRunbCJOf7mNz0%2BpaCd9bnyfNk40SLdoiVkTbaLJRQSJTeOO6WDJQJ%2BBOnBe%2Bv%2B9vKrgdesonoREqGONR%2BGBsGRjNg7bAjWFbHWhhZAD8rPPuPgvdTx%2FFCW%2BXGX87cH6%2BMgyx0%2FNbdaHi4Xz4HyBFLZ9%2FHEf5LmrJPutf73bQf0HXCtqawgbz%2FzobV3r3VsfLOFOWVEXouCWlPasH0arvA6ZEEwSirT1pXZ5nJ80fbj9JzSW6Y8S8Hc%2FbeRcg9rrcTVui9rien7nQ7I%2FEktpgIZ5RjsLUxqk4Yb3UZys4iRGnWe6t35qRKgIVrI3yHSg2171LQlbgmg%2BXR5h6NSv8%2BdZp36lGL%2B%2FJbVI%2B27WoIyB1t8CuwWtBQqt6DqAfF6mqqlKmeUGlnkcpKZrNR8BPV%2B4a3Glx3KWK4lGscjFDtwyVDmBfmm%2B3h0lDuJHExPFvFE4D2haJYt6YUQzjSBD%2FUXgp8i6AYnKo3kY7SAbr9NnU49pM%2FE1g%2BzkW45RpeUONjREpEn5fzV%2BYYBL7BYtjkQkPdi7aVxFWCQ9KAcjUkfxEd7Sbmr4x9E9lRmKBAKi4aAKTN05l6b%2FW%2BuG5OCX1OR0wgKG0xAY6pgFrreWli4OvyB3eCGXKB0vKQ2HdN9mwPhDjLVIPE67jHp18wMcgjlgjEETaYNTysu3uNkj6uGcZa1P%2FuDBlVW4gPpI5a8dzn9IT4L6nhXOGos8iwl7VLNwc5Dzbie1CE0t5Q3GRsLE17UwmiFRk7%2FV9VKgpf5%2Fgclwz2jKSRdtfCmLcPZEtmkIIAT8%2FGuySssAJ0Q7%2FLpM4xYojGFd4YsPoUognNg12&X-Amz-Signature=fdf33e370f7de440f52787b35e05aa0e9e2a2115bed8a6ed2bb573e4010981d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIFYDZ2R%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCDePY3VNuiQ60SHorPtOrIGsLiRheB5Jq2TDe%2BI0taAiB4K0K6whs1pOWfiNhAGe%2BfKIJZpUUHV4VtXuGM8O1ufCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHBPmgMqvA2CIQqtAKtwDaCLiB%2Bxy5e%2BMVxsFvhObTmei1oBO%2B6GeOK6vRunbCJOf7mNz0%2BpaCd9bnyfNk40SLdoiVkTbaLJRQSJTeOO6WDJQJ%2BBOnBe%2Bv%2B9vKrgdesonoREqGONR%2BGBsGRjNg7bAjWFbHWhhZAD8rPPuPgvdTx%2FFCW%2BXGX87cH6%2BMgyx0%2FNbdaHi4Xz4HyBFLZ9%2FHEf5LmrJPutf73bQf0HXCtqawgbz%2FzobV3r3VsfLOFOWVEXouCWlPasH0arvA6ZEEwSirT1pXZ5nJ80fbj9JzSW6Y8S8Hc%2FbeRcg9rrcTVui9rien7nQ7I%2FEktpgIZ5RjsLUxqk4Yb3UZys4iRGnWe6t35qRKgIVrI3yHSg2171LQlbgmg%2BXR5h6NSv8%2BdZp36lGL%2B%2FJbVI%2B27WoIyB1t8CuwWtBQqt6DqAfF6mqqlKmeUGlnkcpKZrNR8BPV%2B4a3Glx3KWK4lGscjFDtwyVDmBfmm%2B3h0lDuJHExPFvFE4D2haJYt6YUQzjSBD%2FUXgp8i6AYnKo3kY7SAbr9NnU49pM%2FE1g%2BzkW45RpeUONjREpEn5fzV%2BYYBL7BYtjkQkPdi7aVxFWCQ9KAcjUkfxEd7Sbmr4x9E9lRmKBAKi4aAKTN05l6b%2FW%2BuG5OCX1OR0wgKG0xAY6pgFrreWli4OvyB3eCGXKB0vKQ2HdN9mwPhDjLVIPE67jHp18wMcgjlgjEETaYNTysu3uNkj6uGcZa1P%2FuDBlVW4gPpI5a8dzn9IT4L6nhXOGos8iwl7VLNwc5Dzbie1CE0t5Q3GRsLE17UwmiFRk7%2FV9VKgpf5%2Fgclwz2jKSRdtfCmLcPZEtmkIIAT8%2FGuySssAJ0Q7%2FLpM4xYojGFd4YsPoUognNg12&X-Amz-Signature=4692bcca657cefabe331786f3cfc641f596c6108aa8f5a92d8f223218eb2f106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIFYDZ2R%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCDePY3VNuiQ60SHorPtOrIGsLiRheB5Jq2TDe%2BI0taAiB4K0K6whs1pOWfiNhAGe%2BfKIJZpUUHV4VtXuGM8O1ufCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHBPmgMqvA2CIQqtAKtwDaCLiB%2Bxy5e%2BMVxsFvhObTmei1oBO%2B6GeOK6vRunbCJOf7mNz0%2BpaCd9bnyfNk40SLdoiVkTbaLJRQSJTeOO6WDJQJ%2BBOnBe%2Bv%2B9vKrgdesonoREqGONR%2BGBsGRjNg7bAjWFbHWhhZAD8rPPuPgvdTx%2FFCW%2BXGX87cH6%2BMgyx0%2FNbdaHi4Xz4HyBFLZ9%2FHEf5LmrJPutf73bQf0HXCtqawgbz%2FzobV3r3VsfLOFOWVEXouCWlPasH0arvA6ZEEwSirT1pXZ5nJ80fbj9JzSW6Y8S8Hc%2FbeRcg9rrcTVui9rien7nQ7I%2FEktpgIZ5RjsLUxqk4Yb3UZys4iRGnWe6t35qRKgIVrI3yHSg2171LQlbgmg%2BXR5h6NSv8%2BdZp36lGL%2B%2FJbVI%2B27WoIyB1t8CuwWtBQqt6DqAfF6mqqlKmeUGlnkcpKZrNR8BPV%2B4a3Glx3KWK4lGscjFDtwyVDmBfmm%2B3h0lDuJHExPFvFE4D2haJYt6YUQzjSBD%2FUXgp8i6AYnKo3kY7SAbr9NnU49pM%2FE1g%2BzkW45RpeUONjREpEn5fzV%2BYYBL7BYtjkQkPdi7aVxFWCQ9KAcjUkfxEd7Sbmr4x9E9lRmKBAKi4aAKTN05l6b%2FW%2BuG5OCX1OR0wgKG0xAY6pgFrreWli4OvyB3eCGXKB0vKQ2HdN9mwPhDjLVIPE67jHp18wMcgjlgjEETaYNTysu3uNkj6uGcZa1P%2FuDBlVW4gPpI5a8dzn9IT4L6nhXOGos8iwl7VLNwc5Dzbie1CE0t5Q3GRsLE17UwmiFRk7%2FV9VKgpf5%2Fgclwz2jKSRdtfCmLcPZEtmkIIAT8%2FGuySssAJ0Q7%2FLpM4xYojGFd4YsPoUognNg12&X-Amz-Signature=1fba9e9d2ee0deeb474f35bbc8145c440f8f69b2afbbeaf421cd48e17ba7dff6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIFYDZ2R%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCDePY3VNuiQ60SHorPtOrIGsLiRheB5Jq2TDe%2BI0taAiB4K0K6whs1pOWfiNhAGe%2BfKIJZpUUHV4VtXuGM8O1ufCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHBPmgMqvA2CIQqtAKtwDaCLiB%2Bxy5e%2BMVxsFvhObTmei1oBO%2B6GeOK6vRunbCJOf7mNz0%2BpaCd9bnyfNk40SLdoiVkTbaLJRQSJTeOO6WDJQJ%2BBOnBe%2Bv%2B9vKrgdesonoREqGONR%2BGBsGRjNg7bAjWFbHWhhZAD8rPPuPgvdTx%2FFCW%2BXGX87cH6%2BMgyx0%2FNbdaHi4Xz4HyBFLZ9%2FHEf5LmrJPutf73bQf0HXCtqawgbz%2FzobV3r3VsfLOFOWVEXouCWlPasH0arvA6ZEEwSirT1pXZ5nJ80fbj9JzSW6Y8S8Hc%2FbeRcg9rrcTVui9rien7nQ7I%2FEktpgIZ5RjsLUxqk4Yb3UZys4iRGnWe6t35qRKgIVrI3yHSg2171LQlbgmg%2BXR5h6NSv8%2BdZp36lGL%2B%2FJbVI%2B27WoIyB1t8CuwWtBQqt6DqAfF6mqqlKmeUGlnkcpKZrNR8BPV%2B4a3Glx3KWK4lGscjFDtwyVDmBfmm%2B3h0lDuJHExPFvFE4D2haJYt6YUQzjSBD%2FUXgp8i6AYnKo3kY7SAbr9NnU49pM%2FE1g%2BzkW45RpeUONjREpEn5fzV%2BYYBL7BYtjkQkPdi7aVxFWCQ9KAcjUkfxEd7Sbmr4x9E9lRmKBAKi4aAKTN05l6b%2FW%2BuG5OCX1OR0wgKG0xAY6pgFrreWli4OvyB3eCGXKB0vKQ2HdN9mwPhDjLVIPE67jHp18wMcgjlgjEETaYNTysu3uNkj6uGcZa1P%2FuDBlVW4gPpI5a8dzn9IT4L6nhXOGos8iwl7VLNwc5Dzbie1CE0t5Q3GRsLE17UwmiFRk7%2FV9VKgpf5%2Fgclwz2jKSRdtfCmLcPZEtmkIIAT8%2FGuySssAJ0Q7%2FLpM4xYojGFd4YsPoUognNg12&X-Amz-Signature=a6840dfcfcaebe281edd8e2e99e242e4fee885a5f6624b4d4e5910708faf0aeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIFYDZ2R%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCDePY3VNuiQ60SHorPtOrIGsLiRheB5Jq2TDe%2BI0taAiB4K0K6whs1pOWfiNhAGe%2BfKIJZpUUHV4VtXuGM8O1ufCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHBPmgMqvA2CIQqtAKtwDaCLiB%2Bxy5e%2BMVxsFvhObTmei1oBO%2B6GeOK6vRunbCJOf7mNz0%2BpaCd9bnyfNk40SLdoiVkTbaLJRQSJTeOO6WDJQJ%2BBOnBe%2Bv%2B9vKrgdesonoREqGONR%2BGBsGRjNg7bAjWFbHWhhZAD8rPPuPgvdTx%2FFCW%2BXGX87cH6%2BMgyx0%2FNbdaHi4Xz4HyBFLZ9%2FHEf5LmrJPutf73bQf0HXCtqawgbz%2FzobV3r3VsfLOFOWVEXouCWlPasH0arvA6ZEEwSirT1pXZ5nJ80fbj9JzSW6Y8S8Hc%2FbeRcg9rrcTVui9rien7nQ7I%2FEktpgIZ5RjsLUxqk4Yb3UZys4iRGnWe6t35qRKgIVrI3yHSg2171LQlbgmg%2BXR5h6NSv8%2BdZp36lGL%2B%2FJbVI%2B27WoIyB1t8CuwWtBQqt6DqAfF6mqqlKmeUGlnkcpKZrNR8BPV%2B4a3Glx3KWK4lGscjFDtwyVDmBfmm%2B3h0lDuJHExPFvFE4D2haJYt6YUQzjSBD%2FUXgp8i6AYnKo3kY7SAbr9NnU49pM%2FE1g%2BzkW45RpeUONjREpEn5fzV%2BYYBL7BYtjkQkPdi7aVxFWCQ9KAcjUkfxEd7Sbmr4x9E9lRmKBAKi4aAKTN05l6b%2FW%2BuG5OCX1OR0wgKG0xAY6pgFrreWli4OvyB3eCGXKB0vKQ2HdN9mwPhDjLVIPE67jHp18wMcgjlgjEETaYNTysu3uNkj6uGcZa1P%2FuDBlVW4gPpI5a8dzn9IT4L6nhXOGos8iwl7VLNwc5Dzbie1CE0t5Q3GRsLE17UwmiFRk7%2FV9VKgpf5%2Fgclwz2jKSRdtfCmLcPZEtmkIIAT8%2FGuySssAJ0Q7%2FLpM4xYojGFd4YsPoUognNg12&X-Amz-Signature=26ed3d348da60a313df005c3e18243b07b2254f6baae53aad9f8c044a40d6787&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIFYDZ2R%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCDePY3VNuiQ60SHorPtOrIGsLiRheB5Jq2TDe%2BI0taAiB4K0K6whs1pOWfiNhAGe%2BfKIJZpUUHV4VtXuGM8O1ufCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHBPmgMqvA2CIQqtAKtwDaCLiB%2Bxy5e%2BMVxsFvhObTmei1oBO%2B6GeOK6vRunbCJOf7mNz0%2BpaCd9bnyfNk40SLdoiVkTbaLJRQSJTeOO6WDJQJ%2BBOnBe%2Bv%2B9vKrgdesonoREqGONR%2BGBsGRjNg7bAjWFbHWhhZAD8rPPuPgvdTx%2FFCW%2BXGX87cH6%2BMgyx0%2FNbdaHi4Xz4HyBFLZ9%2FHEf5LmrJPutf73bQf0HXCtqawgbz%2FzobV3r3VsfLOFOWVEXouCWlPasH0arvA6ZEEwSirT1pXZ5nJ80fbj9JzSW6Y8S8Hc%2FbeRcg9rrcTVui9rien7nQ7I%2FEktpgIZ5RjsLUxqk4Yb3UZys4iRGnWe6t35qRKgIVrI3yHSg2171LQlbgmg%2BXR5h6NSv8%2BdZp36lGL%2B%2FJbVI%2B27WoIyB1t8CuwWtBQqt6DqAfF6mqqlKmeUGlnkcpKZrNR8BPV%2B4a3Glx3KWK4lGscjFDtwyVDmBfmm%2B3h0lDuJHExPFvFE4D2haJYt6YUQzjSBD%2FUXgp8i6AYnKo3kY7SAbr9NnU49pM%2FE1g%2BzkW45RpeUONjREpEn5fzV%2BYYBL7BYtjkQkPdi7aVxFWCQ9KAcjUkfxEd7Sbmr4x9E9lRmKBAKi4aAKTN05l6b%2FW%2BuG5OCX1OR0wgKG0xAY6pgFrreWli4OvyB3eCGXKB0vKQ2HdN9mwPhDjLVIPE67jHp18wMcgjlgjEETaYNTysu3uNkj6uGcZa1P%2FuDBlVW4gPpI5a8dzn9IT4L6nhXOGos8iwl7VLNwc5Dzbie1CE0t5Q3GRsLE17UwmiFRk7%2FV9VKgpf5%2Fgclwz2jKSRdtfCmLcPZEtmkIIAT8%2FGuySssAJ0Q7%2FLpM4xYojGFd4YsPoUognNg12&X-Amz-Signature=1cb70f8a0d2f625d25477599e218c7f0de137c4bc77dd87ea55e8f1ffae23e0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIFYDZ2R%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T201047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDCDePY3VNuiQ60SHorPtOrIGsLiRheB5Jq2TDe%2BI0taAiB4K0K6whs1pOWfiNhAGe%2BfKIJZpUUHV4VtXuGM8O1ufCqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHBPmgMqvA2CIQqtAKtwDaCLiB%2Bxy5e%2BMVxsFvhObTmei1oBO%2B6GeOK6vRunbCJOf7mNz0%2BpaCd9bnyfNk40SLdoiVkTbaLJRQSJTeOO6WDJQJ%2BBOnBe%2Bv%2B9vKrgdesonoREqGONR%2BGBsGRjNg7bAjWFbHWhhZAD8rPPuPgvdTx%2FFCW%2BXGX87cH6%2BMgyx0%2FNbdaHi4Xz4HyBFLZ9%2FHEf5LmrJPutf73bQf0HXCtqawgbz%2FzobV3r3VsfLOFOWVEXouCWlPasH0arvA6ZEEwSirT1pXZ5nJ80fbj9JzSW6Y8S8Hc%2FbeRcg9rrcTVui9rien7nQ7I%2FEktpgIZ5RjsLUxqk4Yb3UZys4iRGnWe6t35qRKgIVrI3yHSg2171LQlbgmg%2BXR5h6NSv8%2BdZp36lGL%2B%2FJbVI%2B27WoIyB1t8CuwWtBQqt6DqAfF6mqqlKmeUGlnkcpKZrNR8BPV%2B4a3Glx3KWK4lGscjFDtwyVDmBfmm%2B3h0lDuJHExPFvFE4D2haJYt6YUQzjSBD%2FUXgp8i6AYnKo3kY7SAbr9NnU49pM%2FE1g%2BzkW45RpeUONjREpEn5fzV%2BYYBL7BYtjkQkPdi7aVxFWCQ9KAcjUkfxEd7Sbmr4x9E9lRmKBAKi4aAKTN05l6b%2FW%2BuG5OCX1OR0wgKG0xAY6pgFrreWli4OvyB3eCGXKB0vKQ2HdN9mwPhDjLVIPE67jHp18wMcgjlgjEETaYNTysu3uNkj6uGcZa1P%2FuDBlVW4gPpI5a8dzn9IT4L6nhXOGos8iwl7VLNwc5Dzbie1CE0t5Q3GRsLE17UwmiFRk7%2FV9VKgpf5%2Fgclwz2jKSRdtfCmLcPZEtmkIIAT8%2FGuySssAJ0Q7%2FLpM4xYojGFd4YsPoUognNg12&X-Amz-Signature=1f2b47df387f0fe9311722d70415188faf08bdd5012e476398cc84a0c7131996&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
