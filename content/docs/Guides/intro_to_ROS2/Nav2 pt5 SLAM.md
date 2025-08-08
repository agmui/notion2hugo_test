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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUJR4VNR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCDMk3dYBF1%2FK7zlrRKXB%2BAGRgId3IEYxV3qKXyfhyPoAIgRtbtqfKTA08urBOdRbjWHh5ktk9CiUvxEpoxaIm6v8MqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyIwaqG2f1nRSZ1RyrcA2mTHyO4JGLCSAlbFQk00y0sxPrZfybAUeHnLQNz1A9J4gAwkLd1VJt8A5ZMHNX2KCb0WQdDHdvuAdInvhUHbb%2FpnA6PccRUG8sZBb6VA0VM%2FTVgutUjRQi9QG0SU6P2jyjoq5188L3RQM9uMb3dMNYdHWy2MJaHuzpiZGdbmcGOa5gh4zBopvqC9ydDLn8uUJ13P22l0GPeoUggZh5%2FtDjZHaWNWxvbbn%2B7jTtX14di18Y7h9Hn%2FbbLwpJbiSAUHjOUdlaBbmE1ASTv%2BhpDAv8qHgPzS9tWj4rr3G91f8Gc9EwdhlIiNaLJuAGAAIPgJm80q2tvD2lQ2scbIASp3u2igja0ajg%2B76BLZm39oXOxWmzbLnCaIY1Ssj8lqc7MQcVsbClhMHkIoBVppEzYhDEEXO6%2FrQrW%2BlXHmucwxh2yTIE85Lo20Y1pdQMrhgfgnAOUjstjX%2B7mXg4vkoKa5uCKCa%2FsRDTwzkGTXSbrfs%2BN3KPbCYC4Tnfm5JknlDcjJwN5fZ8s5PGBWg6aohuTtQaWmgvhHCXDWNH%2FCR55D2vJ8yGOPNDdN0%2FkHB3BhepMgjStoBzBGWBwEgEwO0ECR6E3%2Bkh0DO8PsmURxG0hkikn3%2BBXQZzq3xUfox1tMLnH1sQGOqUB9o%2BXOM8GSb2sXHOjj%2F3WWJsG%2BVMRN%2BMsuf7uqQBk%2BQnTg6tVVd5vu5OOhjjrWCrKZw%2FHBBeqCYHNvaKDm9ZYbsGDTe9WlPkrayYNzmC9PCtTZHh3SmGXldsWzf%2FOAATf8iZiPVfIa%2F7wlcvqBYXT3Zw1rzQli0V20qpxHl2kuugtt%2BY1g6PTa2Wod7KOq92%2BWGoYpyV5RFaeD1Xd0V%2FG0hZ87h3e&X-Amz-Signature=215ecd0e8e886aabb11439489149d8ea736a830be73165e53976a1d5e1e0df96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUJR4VNR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCDMk3dYBF1%2FK7zlrRKXB%2BAGRgId3IEYxV3qKXyfhyPoAIgRtbtqfKTA08urBOdRbjWHh5ktk9CiUvxEpoxaIm6v8MqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyIwaqG2f1nRSZ1RyrcA2mTHyO4JGLCSAlbFQk00y0sxPrZfybAUeHnLQNz1A9J4gAwkLd1VJt8A5ZMHNX2KCb0WQdDHdvuAdInvhUHbb%2FpnA6PccRUG8sZBb6VA0VM%2FTVgutUjRQi9QG0SU6P2jyjoq5188L3RQM9uMb3dMNYdHWy2MJaHuzpiZGdbmcGOa5gh4zBopvqC9ydDLn8uUJ13P22l0GPeoUggZh5%2FtDjZHaWNWxvbbn%2B7jTtX14di18Y7h9Hn%2FbbLwpJbiSAUHjOUdlaBbmE1ASTv%2BhpDAv8qHgPzS9tWj4rr3G91f8Gc9EwdhlIiNaLJuAGAAIPgJm80q2tvD2lQ2scbIASp3u2igja0ajg%2B76BLZm39oXOxWmzbLnCaIY1Ssj8lqc7MQcVsbClhMHkIoBVppEzYhDEEXO6%2FrQrW%2BlXHmucwxh2yTIE85Lo20Y1pdQMrhgfgnAOUjstjX%2B7mXg4vkoKa5uCKCa%2FsRDTwzkGTXSbrfs%2BN3KPbCYC4Tnfm5JknlDcjJwN5fZ8s5PGBWg6aohuTtQaWmgvhHCXDWNH%2FCR55D2vJ8yGOPNDdN0%2FkHB3BhepMgjStoBzBGWBwEgEwO0ECR6E3%2Bkh0DO8PsmURxG0hkikn3%2BBXQZzq3xUfox1tMLnH1sQGOqUB9o%2BXOM8GSb2sXHOjj%2F3WWJsG%2BVMRN%2BMsuf7uqQBk%2BQnTg6tVVd5vu5OOhjjrWCrKZw%2FHBBeqCYHNvaKDm9ZYbsGDTe9WlPkrayYNzmC9PCtTZHh3SmGXldsWzf%2FOAATf8iZiPVfIa%2F7wlcvqBYXT3Zw1rzQli0V20qpxHl2kuugtt%2BY1g6PTa2Wod7KOq92%2BWGoYpyV5RFaeD1Xd0V%2FG0hZ87h3e&X-Amz-Signature=e96816db361ded41321717514a2c8bb670369017b36dc0c953c3ef9cae5f29d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUJR4VNR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCDMk3dYBF1%2FK7zlrRKXB%2BAGRgId3IEYxV3qKXyfhyPoAIgRtbtqfKTA08urBOdRbjWHh5ktk9CiUvxEpoxaIm6v8MqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyIwaqG2f1nRSZ1RyrcA2mTHyO4JGLCSAlbFQk00y0sxPrZfybAUeHnLQNz1A9J4gAwkLd1VJt8A5ZMHNX2KCb0WQdDHdvuAdInvhUHbb%2FpnA6PccRUG8sZBb6VA0VM%2FTVgutUjRQi9QG0SU6P2jyjoq5188L3RQM9uMb3dMNYdHWy2MJaHuzpiZGdbmcGOa5gh4zBopvqC9ydDLn8uUJ13P22l0GPeoUggZh5%2FtDjZHaWNWxvbbn%2B7jTtX14di18Y7h9Hn%2FbbLwpJbiSAUHjOUdlaBbmE1ASTv%2BhpDAv8qHgPzS9tWj4rr3G91f8Gc9EwdhlIiNaLJuAGAAIPgJm80q2tvD2lQ2scbIASp3u2igja0ajg%2B76BLZm39oXOxWmzbLnCaIY1Ssj8lqc7MQcVsbClhMHkIoBVppEzYhDEEXO6%2FrQrW%2BlXHmucwxh2yTIE85Lo20Y1pdQMrhgfgnAOUjstjX%2B7mXg4vkoKa5uCKCa%2FsRDTwzkGTXSbrfs%2BN3KPbCYC4Tnfm5JknlDcjJwN5fZ8s5PGBWg6aohuTtQaWmgvhHCXDWNH%2FCR55D2vJ8yGOPNDdN0%2FkHB3BhepMgjStoBzBGWBwEgEwO0ECR6E3%2Bkh0DO8PsmURxG0hkikn3%2BBXQZzq3xUfox1tMLnH1sQGOqUB9o%2BXOM8GSb2sXHOjj%2F3WWJsG%2BVMRN%2BMsuf7uqQBk%2BQnTg6tVVd5vu5OOhjjrWCrKZw%2FHBBeqCYHNvaKDm9ZYbsGDTe9WlPkrayYNzmC9PCtTZHh3SmGXldsWzf%2FOAATf8iZiPVfIa%2F7wlcvqBYXT3Zw1rzQli0V20qpxHl2kuugtt%2BY1g6PTa2Wod7KOq92%2BWGoYpyV5RFaeD1Xd0V%2FG0hZ87h3e&X-Amz-Signature=069380eda24667965d1b508443fa023049bb5fbbfa4c0f6b5325dcb260622abd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUJR4VNR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCDMk3dYBF1%2FK7zlrRKXB%2BAGRgId3IEYxV3qKXyfhyPoAIgRtbtqfKTA08urBOdRbjWHh5ktk9CiUvxEpoxaIm6v8MqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyIwaqG2f1nRSZ1RyrcA2mTHyO4JGLCSAlbFQk00y0sxPrZfybAUeHnLQNz1A9J4gAwkLd1VJt8A5ZMHNX2KCb0WQdDHdvuAdInvhUHbb%2FpnA6PccRUG8sZBb6VA0VM%2FTVgutUjRQi9QG0SU6P2jyjoq5188L3RQM9uMb3dMNYdHWy2MJaHuzpiZGdbmcGOa5gh4zBopvqC9ydDLn8uUJ13P22l0GPeoUggZh5%2FtDjZHaWNWxvbbn%2B7jTtX14di18Y7h9Hn%2FbbLwpJbiSAUHjOUdlaBbmE1ASTv%2BhpDAv8qHgPzS9tWj4rr3G91f8Gc9EwdhlIiNaLJuAGAAIPgJm80q2tvD2lQ2scbIASp3u2igja0ajg%2B76BLZm39oXOxWmzbLnCaIY1Ssj8lqc7MQcVsbClhMHkIoBVppEzYhDEEXO6%2FrQrW%2BlXHmucwxh2yTIE85Lo20Y1pdQMrhgfgnAOUjstjX%2B7mXg4vkoKa5uCKCa%2FsRDTwzkGTXSbrfs%2BN3KPbCYC4Tnfm5JknlDcjJwN5fZ8s5PGBWg6aohuTtQaWmgvhHCXDWNH%2FCR55D2vJ8yGOPNDdN0%2FkHB3BhepMgjStoBzBGWBwEgEwO0ECR6E3%2Bkh0DO8PsmURxG0hkikn3%2BBXQZzq3xUfox1tMLnH1sQGOqUB9o%2BXOM8GSb2sXHOjj%2F3WWJsG%2BVMRN%2BMsuf7uqQBk%2BQnTg6tVVd5vu5OOhjjrWCrKZw%2FHBBeqCYHNvaKDm9ZYbsGDTe9WlPkrayYNzmC9PCtTZHh3SmGXldsWzf%2FOAATf8iZiPVfIa%2F7wlcvqBYXT3Zw1rzQli0V20qpxHl2kuugtt%2BY1g6PTa2Wod7KOq92%2BWGoYpyV5RFaeD1Xd0V%2FG0hZ87h3e&X-Amz-Signature=fb0d5c48e3c2348edafc167b0f8eaba849e925f37ef749d8a4c4b16ae397e9b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUJR4VNR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCDMk3dYBF1%2FK7zlrRKXB%2BAGRgId3IEYxV3qKXyfhyPoAIgRtbtqfKTA08urBOdRbjWHh5ktk9CiUvxEpoxaIm6v8MqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyIwaqG2f1nRSZ1RyrcA2mTHyO4JGLCSAlbFQk00y0sxPrZfybAUeHnLQNz1A9J4gAwkLd1VJt8A5ZMHNX2KCb0WQdDHdvuAdInvhUHbb%2FpnA6PccRUG8sZBb6VA0VM%2FTVgutUjRQi9QG0SU6P2jyjoq5188L3RQM9uMb3dMNYdHWy2MJaHuzpiZGdbmcGOa5gh4zBopvqC9ydDLn8uUJ13P22l0GPeoUggZh5%2FtDjZHaWNWxvbbn%2B7jTtX14di18Y7h9Hn%2FbbLwpJbiSAUHjOUdlaBbmE1ASTv%2BhpDAv8qHgPzS9tWj4rr3G91f8Gc9EwdhlIiNaLJuAGAAIPgJm80q2tvD2lQ2scbIASp3u2igja0ajg%2B76BLZm39oXOxWmzbLnCaIY1Ssj8lqc7MQcVsbClhMHkIoBVppEzYhDEEXO6%2FrQrW%2BlXHmucwxh2yTIE85Lo20Y1pdQMrhgfgnAOUjstjX%2B7mXg4vkoKa5uCKCa%2FsRDTwzkGTXSbrfs%2BN3KPbCYC4Tnfm5JknlDcjJwN5fZ8s5PGBWg6aohuTtQaWmgvhHCXDWNH%2FCR55D2vJ8yGOPNDdN0%2FkHB3BhepMgjStoBzBGWBwEgEwO0ECR6E3%2Bkh0DO8PsmURxG0hkikn3%2BBXQZzq3xUfox1tMLnH1sQGOqUB9o%2BXOM8GSb2sXHOjj%2F3WWJsG%2BVMRN%2BMsuf7uqQBk%2BQnTg6tVVd5vu5OOhjjrWCrKZw%2FHBBeqCYHNvaKDm9ZYbsGDTe9WlPkrayYNzmC9PCtTZHh3SmGXldsWzf%2FOAATf8iZiPVfIa%2F7wlcvqBYXT3Zw1rzQli0V20qpxHl2kuugtt%2BY1g6PTa2Wod7KOq92%2BWGoYpyV5RFaeD1Xd0V%2FG0hZ87h3e&X-Amz-Signature=9359eb2b3df8d0d8b14e69d827be43778d208ecf38a150ff3d051c1e292bb37d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUJR4VNR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCDMk3dYBF1%2FK7zlrRKXB%2BAGRgId3IEYxV3qKXyfhyPoAIgRtbtqfKTA08urBOdRbjWHh5ktk9CiUvxEpoxaIm6v8MqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyIwaqG2f1nRSZ1RyrcA2mTHyO4JGLCSAlbFQk00y0sxPrZfybAUeHnLQNz1A9J4gAwkLd1VJt8A5ZMHNX2KCb0WQdDHdvuAdInvhUHbb%2FpnA6PccRUG8sZBb6VA0VM%2FTVgutUjRQi9QG0SU6P2jyjoq5188L3RQM9uMb3dMNYdHWy2MJaHuzpiZGdbmcGOa5gh4zBopvqC9ydDLn8uUJ13P22l0GPeoUggZh5%2FtDjZHaWNWxvbbn%2B7jTtX14di18Y7h9Hn%2FbbLwpJbiSAUHjOUdlaBbmE1ASTv%2BhpDAv8qHgPzS9tWj4rr3G91f8Gc9EwdhlIiNaLJuAGAAIPgJm80q2tvD2lQ2scbIASp3u2igja0ajg%2B76BLZm39oXOxWmzbLnCaIY1Ssj8lqc7MQcVsbClhMHkIoBVppEzYhDEEXO6%2FrQrW%2BlXHmucwxh2yTIE85Lo20Y1pdQMrhgfgnAOUjstjX%2B7mXg4vkoKa5uCKCa%2FsRDTwzkGTXSbrfs%2BN3KPbCYC4Tnfm5JknlDcjJwN5fZ8s5PGBWg6aohuTtQaWmgvhHCXDWNH%2FCR55D2vJ8yGOPNDdN0%2FkHB3BhepMgjStoBzBGWBwEgEwO0ECR6E3%2Bkh0DO8PsmURxG0hkikn3%2BBXQZzq3xUfox1tMLnH1sQGOqUB9o%2BXOM8GSb2sXHOjj%2F3WWJsG%2BVMRN%2BMsuf7uqQBk%2BQnTg6tVVd5vu5OOhjjrWCrKZw%2FHBBeqCYHNvaKDm9ZYbsGDTe9WlPkrayYNzmC9PCtTZHh3SmGXldsWzf%2FOAATf8iZiPVfIa%2F7wlcvqBYXT3Zw1rzQli0V20qpxHl2kuugtt%2BY1g6PTa2Wod7KOq92%2BWGoYpyV5RFaeD1Xd0V%2FG0hZ87h3e&X-Amz-Signature=0ac6263e29921e3f745406cd921d5c90a968ae6794c93f2606641b721f5de9a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUJR4VNR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCDMk3dYBF1%2FK7zlrRKXB%2BAGRgId3IEYxV3qKXyfhyPoAIgRtbtqfKTA08urBOdRbjWHh5ktk9CiUvxEpoxaIm6v8MqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyIwaqG2f1nRSZ1RyrcA2mTHyO4JGLCSAlbFQk00y0sxPrZfybAUeHnLQNz1A9J4gAwkLd1VJt8A5ZMHNX2KCb0WQdDHdvuAdInvhUHbb%2FpnA6PccRUG8sZBb6VA0VM%2FTVgutUjRQi9QG0SU6P2jyjoq5188L3RQM9uMb3dMNYdHWy2MJaHuzpiZGdbmcGOa5gh4zBopvqC9ydDLn8uUJ13P22l0GPeoUggZh5%2FtDjZHaWNWxvbbn%2B7jTtX14di18Y7h9Hn%2FbbLwpJbiSAUHjOUdlaBbmE1ASTv%2BhpDAv8qHgPzS9tWj4rr3G91f8Gc9EwdhlIiNaLJuAGAAIPgJm80q2tvD2lQ2scbIASp3u2igja0ajg%2B76BLZm39oXOxWmzbLnCaIY1Ssj8lqc7MQcVsbClhMHkIoBVppEzYhDEEXO6%2FrQrW%2BlXHmucwxh2yTIE85Lo20Y1pdQMrhgfgnAOUjstjX%2B7mXg4vkoKa5uCKCa%2FsRDTwzkGTXSbrfs%2BN3KPbCYC4Tnfm5JknlDcjJwN5fZ8s5PGBWg6aohuTtQaWmgvhHCXDWNH%2FCR55D2vJ8yGOPNDdN0%2FkHB3BhepMgjStoBzBGWBwEgEwO0ECR6E3%2Bkh0DO8PsmURxG0hkikn3%2BBXQZzq3xUfox1tMLnH1sQGOqUB9o%2BXOM8GSb2sXHOjj%2F3WWJsG%2BVMRN%2BMsuf7uqQBk%2BQnTg6tVVd5vu5OOhjjrWCrKZw%2FHBBeqCYHNvaKDm9ZYbsGDTe9WlPkrayYNzmC9PCtTZHh3SmGXldsWzf%2FOAATf8iZiPVfIa%2F7wlcvqBYXT3Zw1rzQli0V20qpxHl2kuugtt%2BY1g6PTa2Wod7KOq92%2BWGoYpyV5RFaeD1Xd0V%2FG0hZ87h3e&X-Amz-Signature=5808b81629a8150de76a031ca4f9987895d62ef8d81744730ba7687ae0ed6df8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUJR4VNR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCDMk3dYBF1%2FK7zlrRKXB%2BAGRgId3IEYxV3qKXyfhyPoAIgRtbtqfKTA08urBOdRbjWHh5ktk9CiUvxEpoxaIm6v8MqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyIwaqG2f1nRSZ1RyrcA2mTHyO4JGLCSAlbFQk00y0sxPrZfybAUeHnLQNz1A9J4gAwkLd1VJt8A5ZMHNX2KCb0WQdDHdvuAdInvhUHbb%2FpnA6PccRUG8sZBb6VA0VM%2FTVgutUjRQi9QG0SU6P2jyjoq5188L3RQM9uMb3dMNYdHWy2MJaHuzpiZGdbmcGOa5gh4zBopvqC9ydDLn8uUJ13P22l0GPeoUggZh5%2FtDjZHaWNWxvbbn%2B7jTtX14di18Y7h9Hn%2FbbLwpJbiSAUHjOUdlaBbmE1ASTv%2BhpDAv8qHgPzS9tWj4rr3G91f8Gc9EwdhlIiNaLJuAGAAIPgJm80q2tvD2lQ2scbIASp3u2igja0ajg%2B76BLZm39oXOxWmzbLnCaIY1Ssj8lqc7MQcVsbClhMHkIoBVppEzYhDEEXO6%2FrQrW%2BlXHmucwxh2yTIE85Lo20Y1pdQMrhgfgnAOUjstjX%2B7mXg4vkoKa5uCKCa%2FsRDTwzkGTXSbrfs%2BN3KPbCYC4Tnfm5JknlDcjJwN5fZ8s5PGBWg6aohuTtQaWmgvhHCXDWNH%2FCR55D2vJ8yGOPNDdN0%2FkHB3BhepMgjStoBzBGWBwEgEwO0ECR6E3%2Bkh0DO8PsmURxG0hkikn3%2BBXQZzq3xUfox1tMLnH1sQGOqUB9o%2BXOM8GSb2sXHOjj%2F3WWJsG%2BVMRN%2BMsuf7uqQBk%2BQnTg6tVVd5vu5OOhjjrWCrKZw%2FHBBeqCYHNvaKDm9ZYbsGDTe9WlPkrayYNzmC9PCtTZHh3SmGXldsWzf%2FOAATf8iZiPVfIa%2F7wlcvqBYXT3Zw1rzQli0V20qpxHl2kuugtt%2BY1g6PTa2Wod7KOq92%2BWGoYpyV5RFaeD1Xd0V%2FG0hZ87h3e&X-Amz-Signature=82d8d16a1357b5376748d74cba7c1e859a9785c72caace0722eb3dcfd9f541db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUJR4VNR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCDMk3dYBF1%2FK7zlrRKXB%2BAGRgId3IEYxV3qKXyfhyPoAIgRtbtqfKTA08urBOdRbjWHh5ktk9CiUvxEpoxaIm6v8MqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyIwaqG2f1nRSZ1RyrcA2mTHyO4JGLCSAlbFQk00y0sxPrZfybAUeHnLQNz1A9J4gAwkLd1VJt8A5ZMHNX2KCb0WQdDHdvuAdInvhUHbb%2FpnA6PccRUG8sZBb6VA0VM%2FTVgutUjRQi9QG0SU6P2jyjoq5188L3RQM9uMb3dMNYdHWy2MJaHuzpiZGdbmcGOa5gh4zBopvqC9ydDLn8uUJ13P22l0GPeoUggZh5%2FtDjZHaWNWxvbbn%2B7jTtX14di18Y7h9Hn%2FbbLwpJbiSAUHjOUdlaBbmE1ASTv%2BhpDAv8qHgPzS9tWj4rr3G91f8Gc9EwdhlIiNaLJuAGAAIPgJm80q2tvD2lQ2scbIASp3u2igja0ajg%2B76BLZm39oXOxWmzbLnCaIY1Ssj8lqc7MQcVsbClhMHkIoBVppEzYhDEEXO6%2FrQrW%2BlXHmucwxh2yTIE85Lo20Y1pdQMrhgfgnAOUjstjX%2B7mXg4vkoKa5uCKCa%2FsRDTwzkGTXSbrfs%2BN3KPbCYC4Tnfm5JknlDcjJwN5fZ8s5PGBWg6aohuTtQaWmgvhHCXDWNH%2FCR55D2vJ8yGOPNDdN0%2FkHB3BhepMgjStoBzBGWBwEgEwO0ECR6E3%2Bkh0DO8PsmURxG0hkikn3%2BBXQZzq3xUfox1tMLnH1sQGOqUB9o%2BXOM8GSb2sXHOjj%2F3WWJsG%2BVMRN%2BMsuf7uqQBk%2BQnTg6tVVd5vu5OOhjjrWCrKZw%2FHBBeqCYHNvaKDm9ZYbsGDTe9WlPkrayYNzmC9PCtTZHh3SmGXldsWzf%2FOAATf8iZiPVfIa%2F7wlcvqBYXT3Zw1rzQli0V20qpxHl2kuugtt%2BY1g6PTa2Wod7KOq92%2BWGoYpyV5RFaeD1Xd0V%2FG0hZ87h3e&X-Amz-Signature=6aad2da0de87910caf01553a43fafc4727ca4059f84935811ebbb718ab97ef5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUJR4VNR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCDMk3dYBF1%2FK7zlrRKXB%2BAGRgId3IEYxV3qKXyfhyPoAIgRtbtqfKTA08urBOdRbjWHh5ktk9CiUvxEpoxaIm6v8MqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyIwaqG2f1nRSZ1RyrcA2mTHyO4JGLCSAlbFQk00y0sxPrZfybAUeHnLQNz1A9J4gAwkLd1VJt8A5ZMHNX2KCb0WQdDHdvuAdInvhUHbb%2FpnA6PccRUG8sZBb6VA0VM%2FTVgutUjRQi9QG0SU6P2jyjoq5188L3RQM9uMb3dMNYdHWy2MJaHuzpiZGdbmcGOa5gh4zBopvqC9ydDLn8uUJ13P22l0GPeoUggZh5%2FtDjZHaWNWxvbbn%2B7jTtX14di18Y7h9Hn%2FbbLwpJbiSAUHjOUdlaBbmE1ASTv%2BhpDAv8qHgPzS9tWj4rr3G91f8Gc9EwdhlIiNaLJuAGAAIPgJm80q2tvD2lQ2scbIASp3u2igja0ajg%2B76BLZm39oXOxWmzbLnCaIY1Ssj8lqc7MQcVsbClhMHkIoBVppEzYhDEEXO6%2FrQrW%2BlXHmucwxh2yTIE85Lo20Y1pdQMrhgfgnAOUjstjX%2B7mXg4vkoKa5uCKCa%2FsRDTwzkGTXSbrfs%2BN3KPbCYC4Tnfm5JknlDcjJwN5fZ8s5PGBWg6aohuTtQaWmgvhHCXDWNH%2FCR55D2vJ8yGOPNDdN0%2FkHB3BhepMgjStoBzBGWBwEgEwO0ECR6E3%2Bkh0DO8PsmURxG0hkikn3%2BBXQZzq3xUfox1tMLnH1sQGOqUB9o%2BXOM8GSb2sXHOjj%2F3WWJsG%2BVMRN%2BMsuf7uqQBk%2BQnTg6tVVd5vu5OOhjjrWCrKZw%2FHBBeqCYHNvaKDm9ZYbsGDTe9WlPkrayYNzmC9PCtTZHh3SmGXldsWzf%2FOAATf8iZiPVfIa%2F7wlcvqBYXT3Zw1rzQli0V20qpxHl2kuugtt%2BY1g6PTa2Wod7KOq92%2BWGoYpyV5RFaeD1Xd0V%2FG0hZ87h3e&X-Amz-Signature=dd97f6ea259c43b1bd7dd0cc60b515ab0d0e384ebfbaedc2a746c3739a8ce742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUJR4VNR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCDMk3dYBF1%2FK7zlrRKXB%2BAGRgId3IEYxV3qKXyfhyPoAIgRtbtqfKTA08urBOdRbjWHh5ktk9CiUvxEpoxaIm6v8MqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyIwaqG2f1nRSZ1RyrcA2mTHyO4JGLCSAlbFQk00y0sxPrZfybAUeHnLQNz1A9J4gAwkLd1VJt8A5ZMHNX2KCb0WQdDHdvuAdInvhUHbb%2FpnA6PccRUG8sZBb6VA0VM%2FTVgutUjRQi9QG0SU6P2jyjoq5188L3RQM9uMb3dMNYdHWy2MJaHuzpiZGdbmcGOa5gh4zBopvqC9ydDLn8uUJ13P22l0GPeoUggZh5%2FtDjZHaWNWxvbbn%2B7jTtX14di18Y7h9Hn%2FbbLwpJbiSAUHjOUdlaBbmE1ASTv%2BhpDAv8qHgPzS9tWj4rr3G91f8Gc9EwdhlIiNaLJuAGAAIPgJm80q2tvD2lQ2scbIASp3u2igja0ajg%2B76BLZm39oXOxWmzbLnCaIY1Ssj8lqc7MQcVsbClhMHkIoBVppEzYhDEEXO6%2FrQrW%2BlXHmucwxh2yTIE85Lo20Y1pdQMrhgfgnAOUjstjX%2B7mXg4vkoKa5uCKCa%2FsRDTwzkGTXSbrfs%2BN3KPbCYC4Tnfm5JknlDcjJwN5fZ8s5PGBWg6aohuTtQaWmgvhHCXDWNH%2FCR55D2vJ8yGOPNDdN0%2FkHB3BhepMgjStoBzBGWBwEgEwO0ECR6E3%2Bkh0DO8PsmURxG0hkikn3%2BBXQZzq3xUfox1tMLnH1sQGOqUB9o%2BXOM8GSb2sXHOjj%2F3WWJsG%2BVMRN%2BMsuf7uqQBk%2BQnTg6tVVd5vu5OOhjjrWCrKZw%2FHBBeqCYHNvaKDm9ZYbsGDTe9WlPkrayYNzmC9PCtTZHh3SmGXldsWzf%2FOAATf8iZiPVfIa%2F7wlcvqBYXT3Zw1rzQli0V20qpxHl2kuugtt%2BY1g6PTa2Wod7KOq92%2BWGoYpyV5RFaeD1Xd0V%2FG0hZ87h3e&X-Amz-Signature=e585aba81027c49d1b5914b0b783daf43fef09afbbaf2fedf763fb42fc521720&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUJR4VNR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCDMk3dYBF1%2FK7zlrRKXB%2BAGRgId3IEYxV3qKXyfhyPoAIgRtbtqfKTA08urBOdRbjWHh5ktk9CiUvxEpoxaIm6v8MqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyIwaqG2f1nRSZ1RyrcA2mTHyO4JGLCSAlbFQk00y0sxPrZfybAUeHnLQNz1A9J4gAwkLd1VJt8A5ZMHNX2KCb0WQdDHdvuAdInvhUHbb%2FpnA6PccRUG8sZBb6VA0VM%2FTVgutUjRQi9QG0SU6P2jyjoq5188L3RQM9uMb3dMNYdHWy2MJaHuzpiZGdbmcGOa5gh4zBopvqC9ydDLn8uUJ13P22l0GPeoUggZh5%2FtDjZHaWNWxvbbn%2B7jTtX14di18Y7h9Hn%2FbbLwpJbiSAUHjOUdlaBbmE1ASTv%2BhpDAv8qHgPzS9tWj4rr3G91f8Gc9EwdhlIiNaLJuAGAAIPgJm80q2tvD2lQ2scbIASp3u2igja0ajg%2B76BLZm39oXOxWmzbLnCaIY1Ssj8lqc7MQcVsbClhMHkIoBVppEzYhDEEXO6%2FrQrW%2BlXHmucwxh2yTIE85Lo20Y1pdQMrhgfgnAOUjstjX%2B7mXg4vkoKa5uCKCa%2FsRDTwzkGTXSbrfs%2BN3KPbCYC4Tnfm5JknlDcjJwN5fZ8s5PGBWg6aohuTtQaWmgvhHCXDWNH%2FCR55D2vJ8yGOPNDdN0%2FkHB3BhepMgjStoBzBGWBwEgEwO0ECR6E3%2Bkh0DO8PsmURxG0hkikn3%2BBXQZzq3xUfox1tMLnH1sQGOqUB9o%2BXOM8GSb2sXHOjj%2F3WWJsG%2BVMRN%2BMsuf7uqQBk%2BQnTg6tVVd5vu5OOhjjrWCrKZw%2FHBBeqCYHNvaKDm9ZYbsGDTe9WlPkrayYNzmC9PCtTZHh3SmGXldsWzf%2FOAATf8iZiPVfIa%2F7wlcvqBYXT3Zw1rzQli0V20qpxHl2kuugtt%2BY1g6PTa2Wod7KOq92%2BWGoYpyV5RFaeD1Xd0V%2FG0hZ87h3e&X-Amz-Signature=049d97e0a09ab1490e4fc5ff6f9e0f61f617c505b50863ecfc0fd1facbad00f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUJR4VNR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCDMk3dYBF1%2FK7zlrRKXB%2BAGRgId3IEYxV3qKXyfhyPoAIgRtbtqfKTA08urBOdRbjWHh5ktk9CiUvxEpoxaIm6v8MqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyIwaqG2f1nRSZ1RyrcA2mTHyO4JGLCSAlbFQk00y0sxPrZfybAUeHnLQNz1A9J4gAwkLd1VJt8A5ZMHNX2KCb0WQdDHdvuAdInvhUHbb%2FpnA6PccRUG8sZBb6VA0VM%2FTVgutUjRQi9QG0SU6P2jyjoq5188L3RQM9uMb3dMNYdHWy2MJaHuzpiZGdbmcGOa5gh4zBopvqC9ydDLn8uUJ13P22l0GPeoUggZh5%2FtDjZHaWNWxvbbn%2B7jTtX14di18Y7h9Hn%2FbbLwpJbiSAUHjOUdlaBbmE1ASTv%2BhpDAv8qHgPzS9tWj4rr3G91f8Gc9EwdhlIiNaLJuAGAAIPgJm80q2tvD2lQ2scbIASp3u2igja0ajg%2B76BLZm39oXOxWmzbLnCaIY1Ssj8lqc7MQcVsbClhMHkIoBVppEzYhDEEXO6%2FrQrW%2BlXHmucwxh2yTIE85Lo20Y1pdQMrhgfgnAOUjstjX%2B7mXg4vkoKa5uCKCa%2FsRDTwzkGTXSbrfs%2BN3KPbCYC4Tnfm5JknlDcjJwN5fZ8s5PGBWg6aohuTtQaWmgvhHCXDWNH%2FCR55D2vJ8yGOPNDdN0%2FkHB3BhepMgjStoBzBGWBwEgEwO0ECR6E3%2Bkh0DO8PsmURxG0hkikn3%2BBXQZzq3xUfox1tMLnH1sQGOqUB9o%2BXOM8GSb2sXHOjj%2F3WWJsG%2BVMRN%2BMsuf7uqQBk%2BQnTg6tVVd5vu5OOhjjrWCrKZw%2FHBBeqCYHNvaKDm9ZYbsGDTe9WlPkrayYNzmC9PCtTZHh3SmGXldsWzf%2FOAATf8iZiPVfIa%2F7wlcvqBYXT3Zw1rzQli0V20qpxHl2kuugtt%2BY1g6PTa2Wod7KOq92%2BWGoYpyV5RFaeD1Xd0V%2FG0hZ87h3e&X-Amz-Signature=443447ea334623342aacb0e7b98261d4f584096664d3ade4aebb9960c9f52623&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUJR4VNR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCDMk3dYBF1%2FK7zlrRKXB%2BAGRgId3IEYxV3qKXyfhyPoAIgRtbtqfKTA08urBOdRbjWHh5ktk9CiUvxEpoxaIm6v8MqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGyIwaqG2f1nRSZ1RyrcA2mTHyO4JGLCSAlbFQk00y0sxPrZfybAUeHnLQNz1A9J4gAwkLd1VJt8A5ZMHNX2KCb0WQdDHdvuAdInvhUHbb%2FpnA6PccRUG8sZBb6VA0VM%2FTVgutUjRQi9QG0SU6P2jyjoq5188L3RQM9uMb3dMNYdHWy2MJaHuzpiZGdbmcGOa5gh4zBopvqC9ydDLn8uUJ13P22l0GPeoUggZh5%2FtDjZHaWNWxvbbn%2B7jTtX14di18Y7h9Hn%2FbbLwpJbiSAUHjOUdlaBbmE1ASTv%2BhpDAv8qHgPzS9tWj4rr3G91f8Gc9EwdhlIiNaLJuAGAAIPgJm80q2tvD2lQ2scbIASp3u2igja0ajg%2B76BLZm39oXOxWmzbLnCaIY1Ssj8lqc7MQcVsbClhMHkIoBVppEzYhDEEXO6%2FrQrW%2BlXHmucwxh2yTIE85Lo20Y1pdQMrhgfgnAOUjstjX%2B7mXg4vkoKa5uCKCa%2FsRDTwzkGTXSbrfs%2BN3KPbCYC4Tnfm5JknlDcjJwN5fZ8s5PGBWg6aohuTtQaWmgvhHCXDWNH%2FCR55D2vJ8yGOPNDdN0%2FkHB3BhepMgjStoBzBGWBwEgEwO0ECR6E3%2Bkh0DO8PsmURxG0hkikn3%2BBXQZzq3xUfox1tMLnH1sQGOqUB9o%2BXOM8GSb2sXHOjj%2F3WWJsG%2BVMRN%2BMsuf7uqQBk%2BQnTg6tVVd5vu5OOhjjrWCrKZw%2FHBBeqCYHNvaKDm9ZYbsGDTe9WlPkrayYNzmC9PCtTZHh3SmGXldsWzf%2FOAATf8iZiPVfIa%2F7wlcvqBYXT3Zw1rzQli0V20qpxHl2kuugtt%2BY1g6PTa2Wod7KOq92%2BWGoYpyV5RFaeD1Xd0V%2FG0hZ87h3e&X-Amz-Signature=eb78f934b68d47fe62b2f41bbbb9555e84c8ca476d20d86d5ec491b65379d6c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
