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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6HNSQ7G%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH86zx5e4zmerVCuB2hPq3JpAC5sovzs%2FmB%2BfoDocLfSAiEA45xG1uzUJ%2F4Hm9GH3SDWvDnezTJhmntv%2F4DwE2Tm8lUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKlPWzlQSzurV%2FL9ircA%2Fw%2F3%2BN1Qp%2B7Nu53Di6LCFszSmD7sl3PUUkcuQOIea%2BrfIdeFROHWMQxOGGxy8fnp6LEvE3lOrWdQdsVA4qgcp5AxnKisMjGhUcM5%2BwBZHL5M7eV9YYVRuc37sp9HJGN%2BWafZiogcu%2F1NQD%2BtaGxud8R9jFqW%2FXGmVwAmzsagfl%2FVkiFxz2hsaIGDJjtDYzOXBlVXfHnFjzdpW6QEJ8wJ2RCnm3N7w%2B3hmMLk2P3OizxjnCknzeH3HKddIH9h7EByWFc9J1zo%2FLVpG9zyVDBQSDyPsBlKNewLan2KDJW5G6K1y2rCIfvYsX09VksfzgK9rUtSXHuCWF4MV1DQXS%2FHyeXGnNUYZR2YN4G1EpfQAvRFVjGyP%2F3juE1dK6O43mkZgMe4WWyOe%2BZcsGD3gAxPoXAMrWaxERaefBWFHurx2xm6gBGc5sK7c223MDGq4Nckuz3EpWKUaRB%2BOgh%2FSj%2FyIHJuF3zc6kKyQ%2F40vhJfQrodZZEz151%2F84lTIyeOfhFKqDliN1iELhl%2FXfynYOOlCIB2THcA6Q6%2BdQOII81NkgZdyjIZiJNgBgsnVSMLCpwaMn%2FNjlQC9H2qpnjcmBmKjkBJDfEXNYuJeZqKEc0I4C1rLxVLVTM79tlUf6FMOXn3MQGOqUBIm41UPQ7TXeTWAPsdfUQi0gRJ8GDvFkGuDmVrwfKCTAVSVTPce4JGkev8dfIBvlgvAbBTLG6KfdOWcIEiUJL5vD0Uq5LgKzmMNWqymkD7c7i2fmKqBC0aqGpDz%2FVZXNJrVC6x%2Fg5cFiKxILq5yJ8lVXvIQIwBH6fUymKDlmmqEWbRhDkUrTt%2BMPXAOzPgKruwA%2B8MKFGyqRJ4ll%2FhUmXiMuViOZ3&X-Amz-Signature=fe75517e686957a5e1d9756517d657581bc925629ad4b43b5a9090af0e115e2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6HNSQ7G%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH86zx5e4zmerVCuB2hPq3JpAC5sovzs%2FmB%2BfoDocLfSAiEA45xG1uzUJ%2F4Hm9GH3SDWvDnezTJhmntv%2F4DwE2Tm8lUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKlPWzlQSzurV%2FL9ircA%2Fw%2F3%2BN1Qp%2B7Nu53Di6LCFszSmD7sl3PUUkcuQOIea%2BrfIdeFROHWMQxOGGxy8fnp6LEvE3lOrWdQdsVA4qgcp5AxnKisMjGhUcM5%2BwBZHL5M7eV9YYVRuc37sp9HJGN%2BWafZiogcu%2F1NQD%2BtaGxud8R9jFqW%2FXGmVwAmzsagfl%2FVkiFxz2hsaIGDJjtDYzOXBlVXfHnFjzdpW6QEJ8wJ2RCnm3N7w%2B3hmMLk2P3OizxjnCknzeH3HKddIH9h7EByWFc9J1zo%2FLVpG9zyVDBQSDyPsBlKNewLan2KDJW5G6K1y2rCIfvYsX09VksfzgK9rUtSXHuCWF4MV1DQXS%2FHyeXGnNUYZR2YN4G1EpfQAvRFVjGyP%2F3juE1dK6O43mkZgMe4WWyOe%2BZcsGD3gAxPoXAMrWaxERaefBWFHurx2xm6gBGc5sK7c223MDGq4Nckuz3EpWKUaRB%2BOgh%2FSj%2FyIHJuF3zc6kKyQ%2F40vhJfQrodZZEz151%2F84lTIyeOfhFKqDliN1iELhl%2FXfynYOOlCIB2THcA6Q6%2BdQOII81NkgZdyjIZiJNgBgsnVSMLCpwaMn%2FNjlQC9H2qpnjcmBmKjkBJDfEXNYuJeZqKEc0I4C1rLxVLVTM79tlUf6FMOXn3MQGOqUBIm41UPQ7TXeTWAPsdfUQi0gRJ8GDvFkGuDmVrwfKCTAVSVTPce4JGkev8dfIBvlgvAbBTLG6KfdOWcIEiUJL5vD0Uq5LgKzmMNWqymkD7c7i2fmKqBC0aqGpDz%2FVZXNJrVC6x%2Fg5cFiKxILq5yJ8lVXvIQIwBH6fUymKDlmmqEWbRhDkUrTt%2BMPXAOzPgKruwA%2B8MKFGyqRJ4ll%2FhUmXiMuViOZ3&X-Amz-Signature=714ccfb13bcb9b2c0f3efecb260a2a425baf5d2fde5bef7db918481976e35f0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6HNSQ7G%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH86zx5e4zmerVCuB2hPq3JpAC5sovzs%2FmB%2BfoDocLfSAiEA45xG1uzUJ%2F4Hm9GH3SDWvDnezTJhmntv%2F4DwE2Tm8lUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKlPWzlQSzurV%2FL9ircA%2Fw%2F3%2BN1Qp%2B7Nu53Di6LCFszSmD7sl3PUUkcuQOIea%2BrfIdeFROHWMQxOGGxy8fnp6LEvE3lOrWdQdsVA4qgcp5AxnKisMjGhUcM5%2BwBZHL5M7eV9YYVRuc37sp9HJGN%2BWafZiogcu%2F1NQD%2BtaGxud8R9jFqW%2FXGmVwAmzsagfl%2FVkiFxz2hsaIGDJjtDYzOXBlVXfHnFjzdpW6QEJ8wJ2RCnm3N7w%2B3hmMLk2P3OizxjnCknzeH3HKddIH9h7EByWFc9J1zo%2FLVpG9zyVDBQSDyPsBlKNewLan2KDJW5G6K1y2rCIfvYsX09VksfzgK9rUtSXHuCWF4MV1DQXS%2FHyeXGnNUYZR2YN4G1EpfQAvRFVjGyP%2F3juE1dK6O43mkZgMe4WWyOe%2BZcsGD3gAxPoXAMrWaxERaefBWFHurx2xm6gBGc5sK7c223MDGq4Nckuz3EpWKUaRB%2BOgh%2FSj%2FyIHJuF3zc6kKyQ%2F40vhJfQrodZZEz151%2F84lTIyeOfhFKqDliN1iELhl%2FXfynYOOlCIB2THcA6Q6%2BdQOII81NkgZdyjIZiJNgBgsnVSMLCpwaMn%2FNjlQC9H2qpnjcmBmKjkBJDfEXNYuJeZqKEc0I4C1rLxVLVTM79tlUf6FMOXn3MQGOqUBIm41UPQ7TXeTWAPsdfUQi0gRJ8GDvFkGuDmVrwfKCTAVSVTPce4JGkev8dfIBvlgvAbBTLG6KfdOWcIEiUJL5vD0Uq5LgKzmMNWqymkD7c7i2fmKqBC0aqGpDz%2FVZXNJrVC6x%2Fg5cFiKxILq5yJ8lVXvIQIwBH6fUymKDlmmqEWbRhDkUrTt%2BMPXAOzPgKruwA%2B8MKFGyqRJ4ll%2FhUmXiMuViOZ3&X-Amz-Signature=9948a6f0b49d03c054922695409224e842ce585a6d369edbc0e29ff376272cc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6HNSQ7G%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH86zx5e4zmerVCuB2hPq3JpAC5sovzs%2FmB%2BfoDocLfSAiEA45xG1uzUJ%2F4Hm9GH3SDWvDnezTJhmntv%2F4DwE2Tm8lUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKlPWzlQSzurV%2FL9ircA%2Fw%2F3%2BN1Qp%2B7Nu53Di6LCFszSmD7sl3PUUkcuQOIea%2BrfIdeFROHWMQxOGGxy8fnp6LEvE3lOrWdQdsVA4qgcp5AxnKisMjGhUcM5%2BwBZHL5M7eV9YYVRuc37sp9HJGN%2BWafZiogcu%2F1NQD%2BtaGxud8R9jFqW%2FXGmVwAmzsagfl%2FVkiFxz2hsaIGDJjtDYzOXBlVXfHnFjzdpW6QEJ8wJ2RCnm3N7w%2B3hmMLk2P3OizxjnCknzeH3HKddIH9h7EByWFc9J1zo%2FLVpG9zyVDBQSDyPsBlKNewLan2KDJW5G6K1y2rCIfvYsX09VksfzgK9rUtSXHuCWF4MV1DQXS%2FHyeXGnNUYZR2YN4G1EpfQAvRFVjGyP%2F3juE1dK6O43mkZgMe4WWyOe%2BZcsGD3gAxPoXAMrWaxERaefBWFHurx2xm6gBGc5sK7c223MDGq4Nckuz3EpWKUaRB%2BOgh%2FSj%2FyIHJuF3zc6kKyQ%2F40vhJfQrodZZEz151%2F84lTIyeOfhFKqDliN1iELhl%2FXfynYOOlCIB2THcA6Q6%2BdQOII81NkgZdyjIZiJNgBgsnVSMLCpwaMn%2FNjlQC9H2qpnjcmBmKjkBJDfEXNYuJeZqKEc0I4C1rLxVLVTM79tlUf6FMOXn3MQGOqUBIm41UPQ7TXeTWAPsdfUQi0gRJ8GDvFkGuDmVrwfKCTAVSVTPce4JGkev8dfIBvlgvAbBTLG6KfdOWcIEiUJL5vD0Uq5LgKzmMNWqymkD7c7i2fmKqBC0aqGpDz%2FVZXNJrVC6x%2Fg5cFiKxILq5yJ8lVXvIQIwBH6fUymKDlmmqEWbRhDkUrTt%2BMPXAOzPgKruwA%2B8MKFGyqRJ4ll%2FhUmXiMuViOZ3&X-Amz-Signature=71721ead2a53f4e1e227dc41edea821e4ec3ed39c0be12fa941b2053fae5db91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6HNSQ7G%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH86zx5e4zmerVCuB2hPq3JpAC5sovzs%2FmB%2BfoDocLfSAiEA45xG1uzUJ%2F4Hm9GH3SDWvDnezTJhmntv%2F4DwE2Tm8lUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKlPWzlQSzurV%2FL9ircA%2Fw%2F3%2BN1Qp%2B7Nu53Di6LCFszSmD7sl3PUUkcuQOIea%2BrfIdeFROHWMQxOGGxy8fnp6LEvE3lOrWdQdsVA4qgcp5AxnKisMjGhUcM5%2BwBZHL5M7eV9YYVRuc37sp9HJGN%2BWafZiogcu%2F1NQD%2BtaGxud8R9jFqW%2FXGmVwAmzsagfl%2FVkiFxz2hsaIGDJjtDYzOXBlVXfHnFjzdpW6QEJ8wJ2RCnm3N7w%2B3hmMLk2P3OizxjnCknzeH3HKddIH9h7EByWFc9J1zo%2FLVpG9zyVDBQSDyPsBlKNewLan2KDJW5G6K1y2rCIfvYsX09VksfzgK9rUtSXHuCWF4MV1DQXS%2FHyeXGnNUYZR2YN4G1EpfQAvRFVjGyP%2F3juE1dK6O43mkZgMe4WWyOe%2BZcsGD3gAxPoXAMrWaxERaefBWFHurx2xm6gBGc5sK7c223MDGq4Nckuz3EpWKUaRB%2BOgh%2FSj%2FyIHJuF3zc6kKyQ%2F40vhJfQrodZZEz151%2F84lTIyeOfhFKqDliN1iELhl%2FXfynYOOlCIB2THcA6Q6%2BdQOII81NkgZdyjIZiJNgBgsnVSMLCpwaMn%2FNjlQC9H2qpnjcmBmKjkBJDfEXNYuJeZqKEc0I4C1rLxVLVTM79tlUf6FMOXn3MQGOqUBIm41UPQ7TXeTWAPsdfUQi0gRJ8GDvFkGuDmVrwfKCTAVSVTPce4JGkev8dfIBvlgvAbBTLG6KfdOWcIEiUJL5vD0Uq5LgKzmMNWqymkD7c7i2fmKqBC0aqGpDz%2FVZXNJrVC6x%2Fg5cFiKxILq5yJ8lVXvIQIwBH6fUymKDlmmqEWbRhDkUrTt%2BMPXAOzPgKruwA%2B8MKFGyqRJ4ll%2FhUmXiMuViOZ3&X-Amz-Signature=224d3eda7a3cd10668a7201ade1b98a106c3975437dd9a7f25d8e8bbc59aa7cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6HNSQ7G%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH86zx5e4zmerVCuB2hPq3JpAC5sovzs%2FmB%2BfoDocLfSAiEA45xG1uzUJ%2F4Hm9GH3SDWvDnezTJhmntv%2F4DwE2Tm8lUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKlPWzlQSzurV%2FL9ircA%2Fw%2F3%2BN1Qp%2B7Nu53Di6LCFszSmD7sl3PUUkcuQOIea%2BrfIdeFROHWMQxOGGxy8fnp6LEvE3lOrWdQdsVA4qgcp5AxnKisMjGhUcM5%2BwBZHL5M7eV9YYVRuc37sp9HJGN%2BWafZiogcu%2F1NQD%2BtaGxud8R9jFqW%2FXGmVwAmzsagfl%2FVkiFxz2hsaIGDJjtDYzOXBlVXfHnFjzdpW6QEJ8wJ2RCnm3N7w%2B3hmMLk2P3OizxjnCknzeH3HKddIH9h7EByWFc9J1zo%2FLVpG9zyVDBQSDyPsBlKNewLan2KDJW5G6K1y2rCIfvYsX09VksfzgK9rUtSXHuCWF4MV1DQXS%2FHyeXGnNUYZR2YN4G1EpfQAvRFVjGyP%2F3juE1dK6O43mkZgMe4WWyOe%2BZcsGD3gAxPoXAMrWaxERaefBWFHurx2xm6gBGc5sK7c223MDGq4Nckuz3EpWKUaRB%2BOgh%2FSj%2FyIHJuF3zc6kKyQ%2F40vhJfQrodZZEz151%2F84lTIyeOfhFKqDliN1iELhl%2FXfynYOOlCIB2THcA6Q6%2BdQOII81NkgZdyjIZiJNgBgsnVSMLCpwaMn%2FNjlQC9H2qpnjcmBmKjkBJDfEXNYuJeZqKEc0I4C1rLxVLVTM79tlUf6FMOXn3MQGOqUBIm41UPQ7TXeTWAPsdfUQi0gRJ8GDvFkGuDmVrwfKCTAVSVTPce4JGkev8dfIBvlgvAbBTLG6KfdOWcIEiUJL5vD0Uq5LgKzmMNWqymkD7c7i2fmKqBC0aqGpDz%2FVZXNJrVC6x%2Fg5cFiKxILq5yJ8lVXvIQIwBH6fUymKDlmmqEWbRhDkUrTt%2BMPXAOzPgKruwA%2B8MKFGyqRJ4ll%2FhUmXiMuViOZ3&X-Amz-Signature=efa232d6f4d3e5c91cfbbf4a3f445c9e28c1e6c09f484df802a493c3a311d24b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6HNSQ7G%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH86zx5e4zmerVCuB2hPq3JpAC5sovzs%2FmB%2BfoDocLfSAiEA45xG1uzUJ%2F4Hm9GH3SDWvDnezTJhmntv%2F4DwE2Tm8lUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKlPWzlQSzurV%2FL9ircA%2Fw%2F3%2BN1Qp%2B7Nu53Di6LCFszSmD7sl3PUUkcuQOIea%2BrfIdeFROHWMQxOGGxy8fnp6LEvE3lOrWdQdsVA4qgcp5AxnKisMjGhUcM5%2BwBZHL5M7eV9YYVRuc37sp9HJGN%2BWafZiogcu%2F1NQD%2BtaGxud8R9jFqW%2FXGmVwAmzsagfl%2FVkiFxz2hsaIGDJjtDYzOXBlVXfHnFjzdpW6QEJ8wJ2RCnm3N7w%2B3hmMLk2P3OizxjnCknzeH3HKddIH9h7EByWFc9J1zo%2FLVpG9zyVDBQSDyPsBlKNewLan2KDJW5G6K1y2rCIfvYsX09VksfzgK9rUtSXHuCWF4MV1DQXS%2FHyeXGnNUYZR2YN4G1EpfQAvRFVjGyP%2F3juE1dK6O43mkZgMe4WWyOe%2BZcsGD3gAxPoXAMrWaxERaefBWFHurx2xm6gBGc5sK7c223MDGq4Nckuz3EpWKUaRB%2BOgh%2FSj%2FyIHJuF3zc6kKyQ%2F40vhJfQrodZZEz151%2F84lTIyeOfhFKqDliN1iELhl%2FXfynYOOlCIB2THcA6Q6%2BdQOII81NkgZdyjIZiJNgBgsnVSMLCpwaMn%2FNjlQC9H2qpnjcmBmKjkBJDfEXNYuJeZqKEc0I4C1rLxVLVTM79tlUf6FMOXn3MQGOqUBIm41UPQ7TXeTWAPsdfUQi0gRJ8GDvFkGuDmVrwfKCTAVSVTPce4JGkev8dfIBvlgvAbBTLG6KfdOWcIEiUJL5vD0Uq5LgKzmMNWqymkD7c7i2fmKqBC0aqGpDz%2FVZXNJrVC6x%2Fg5cFiKxILq5yJ8lVXvIQIwBH6fUymKDlmmqEWbRhDkUrTt%2BMPXAOzPgKruwA%2B8MKFGyqRJ4ll%2FhUmXiMuViOZ3&X-Amz-Signature=620e7ea24b31a2ee2a45bf7d23e4f57a401f9adcd1ee951989c82c23dfead555&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6HNSQ7G%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH86zx5e4zmerVCuB2hPq3JpAC5sovzs%2FmB%2BfoDocLfSAiEA45xG1uzUJ%2F4Hm9GH3SDWvDnezTJhmntv%2F4DwE2Tm8lUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKlPWzlQSzurV%2FL9ircA%2Fw%2F3%2BN1Qp%2B7Nu53Di6LCFszSmD7sl3PUUkcuQOIea%2BrfIdeFROHWMQxOGGxy8fnp6LEvE3lOrWdQdsVA4qgcp5AxnKisMjGhUcM5%2BwBZHL5M7eV9YYVRuc37sp9HJGN%2BWafZiogcu%2F1NQD%2BtaGxud8R9jFqW%2FXGmVwAmzsagfl%2FVkiFxz2hsaIGDJjtDYzOXBlVXfHnFjzdpW6QEJ8wJ2RCnm3N7w%2B3hmMLk2P3OizxjnCknzeH3HKddIH9h7EByWFc9J1zo%2FLVpG9zyVDBQSDyPsBlKNewLan2KDJW5G6K1y2rCIfvYsX09VksfzgK9rUtSXHuCWF4MV1DQXS%2FHyeXGnNUYZR2YN4G1EpfQAvRFVjGyP%2F3juE1dK6O43mkZgMe4WWyOe%2BZcsGD3gAxPoXAMrWaxERaefBWFHurx2xm6gBGc5sK7c223MDGq4Nckuz3EpWKUaRB%2BOgh%2FSj%2FyIHJuF3zc6kKyQ%2F40vhJfQrodZZEz151%2F84lTIyeOfhFKqDliN1iELhl%2FXfynYOOlCIB2THcA6Q6%2BdQOII81NkgZdyjIZiJNgBgsnVSMLCpwaMn%2FNjlQC9H2qpnjcmBmKjkBJDfEXNYuJeZqKEc0I4C1rLxVLVTM79tlUf6FMOXn3MQGOqUBIm41UPQ7TXeTWAPsdfUQi0gRJ8GDvFkGuDmVrwfKCTAVSVTPce4JGkev8dfIBvlgvAbBTLG6KfdOWcIEiUJL5vD0Uq5LgKzmMNWqymkD7c7i2fmKqBC0aqGpDz%2FVZXNJrVC6x%2Fg5cFiKxILq5yJ8lVXvIQIwBH6fUymKDlmmqEWbRhDkUrTt%2BMPXAOzPgKruwA%2B8MKFGyqRJ4ll%2FhUmXiMuViOZ3&X-Amz-Signature=a6aea311544099bc86d75cd11b61c289d6d1305bac10d0c072189a4fb6f52bc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6HNSQ7G%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH86zx5e4zmerVCuB2hPq3JpAC5sovzs%2FmB%2BfoDocLfSAiEA45xG1uzUJ%2F4Hm9GH3SDWvDnezTJhmntv%2F4DwE2Tm8lUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKlPWzlQSzurV%2FL9ircA%2Fw%2F3%2BN1Qp%2B7Nu53Di6LCFszSmD7sl3PUUkcuQOIea%2BrfIdeFROHWMQxOGGxy8fnp6LEvE3lOrWdQdsVA4qgcp5AxnKisMjGhUcM5%2BwBZHL5M7eV9YYVRuc37sp9HJGN%2BWafZiogcu%2F1NQD%2BtaGxud8R9jFqW%2FXGmVwAmzsagfl%2FVkiFxz2hsaIGDJjtDYzOXBlVXfHnFjzdpW6QEJ8wJ2RCnm3N7w%2B3hmMLk2P3OizxjnCknzeH3HKddIH9h7EByWFc9J1zo%2FLVpG9zyVDBQSDyPsBlKNewLan2KDJW5G6K1y2rCIfvYsX09VksfzgK9rUtSXHuCWF4MV1DQXS%2FHyeXGnNUYZR2YN4G1EpfQAvRFVjGyP%2F3juE1dK6O43mkZgMe4WWyOe%2BZcsGD3gAxPoXAMrWaxERaefBWFHurx2xm6gBGc5sK7c223MDGq4Nckuz3EpWKUaRB%2BOgh%2FSj%2FyIHJuF3zc6kKyQ%2F40vhJfQrodZZEz151%2F84lTIyeOfhFKqDliN1iELhl%2FXfynYOOlCIB2THcA6Q6%2BdQOII81NkgZdyjIZiJNgBgsnVSMLCpwaMn%2FNjlQC9H2qpnjcmBmKjkBJDfEXNYuJeZqKEc0I4C1rLxVLVTM79tlUf6FMOXn3MQGOqUBIm41UPQ7TXeTWAPsdfUQi0gRJ8GDvFkGuDmVrwfKCTAVSVTPce4JGkev8dfIBvlgvAbBTLG6KfdOWcIEiUJL5vD0Uq5LgKzmMNWqymkD7c7i2fmKqBC0aqGpDz%2FVZXNJrVC6x%2Fg5cFiKxILq5yJ8lVXvIQIwBH6fUymKDlmmqEWbRhDkUrTt%2BMPXAOzPgKruwA%2B8MKFGyqRJ4ll%2FhUmXiMuViOZ3&X-Amz-Signature=114809bcbabaffce90df97cf9bd032a591eefa311cec261c6018034ffea91a9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6HNSQ7G%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH86zx5e4zmerVCuB2hPq3JpAC5sovzs%2FmB%2BfoDocLfSAiEA45xG1uzUJ%2F4Hm9GH3SDWvDnezTJhmntv%2F4DwE2Tm8lUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKlPWzlQSzurV%2FL9ircA%2Fw%2F3%2BN1Qp%2B7Nu53Di6LCFszSmD7sl3PUUkcuQOIea%2BrfIdeFROHWMQxOGGxy8fnp6LEvE3lOrWdQdsVA4qgcp5AxnKisMjGhUcM5%2BwBZHL5M7eV9YYVRuc37sp9HJGN%2BWafZiogcu%2F1NQD%2BtaGxud8R9jFqW%2FXGmVwAmzsagfl%2FVkiFxz2hsaIGDJjtDYzOXBlVXfHnFjzdpW6QEJ8wJ2RCnm3N7w%2B3hmMLk2P3OizxjnCknzeH3HKddIH9h7EByWFc9J1zo%2FLVpG9zyVDBQSDyPsBlKNewLan2KDJW5G6K1y2rCIfvYsX09VksfzgK9rUtSXHuCWF4MV1DQXS%2FHyeXGnNUYZR2YN4G1EpfQAvRFVjGyP%2F3juE1dK6O43mkZgMe4WWyOe%2BZcsGD3gAxPoXAMrWaxERaefBWFHurx2xm6gBGc5sK7c223MDGq4Nckuz3EpWKUaRB%2BOgh%2FSj%2FyIHJuF3zc6kKyQ%2F40vhJfQrodZZEz151%2F84lTIyeOfhFKqDliN1iELhl%2FXfynYOOlCIB2THcA6Q6%2BdQOII81NkgZdyjIZiJNgBgsnVSMLCpwaMn%2FNjlQC9H2qpnjcmBmKjkBJDfEXNYuJeZqKEc0I4C1rLxVLVTM79tlUf6FMOXn3MQGOqUBIm41UPQ7TXeTWAPsdfUQi0gRJ8GDvFkGuDmVrwfKCTAVSVTPce4JGkev8dfIBvlgvAbBTLG6KfdOWcIEiUJL5vD0Uq5LgKzmMNWqymkD7c7i2fmKqBC0aqGpDz%2FVZXNJrVC6x%2Fg5cFiKxILq5yJ8lVXvIQIwBH6fUymKDlmmqEWbRhDkUrTt%2BMPXAOzPgKruwA%2B8MKFGyqRJ4ll%2FhUmXiMuViOZ3&X-Amz-Signature=b2d1a1e9fce8d5b7007d186dffd67f5e72da3b2fc8eb51e8a9dfd3fe08026ca9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6HNSQ7G%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH86zx5e4zmerVCuB2hPq3JpAC5sovzs%2FmB%2BfoDocLfSAiEA45xG1uzUJ%2F4Hm9GH3SDWvDnezTJhmntv%2F4DwE2Tm8lUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKlPWzlQSzurV%2FL9ircA%2Fw%2F3%2BN1Qp%2B7Nu53Di6LCFszSmD7sl3PUUkcuQOIea%2BrfIdeFROHWMQxOGGxy8fnp6LEvE3lOrWdQdsVA4qgcp5AxnKisMjGhUcM5%2BwBZHL5M7eV9YYVRuc37sp9HJGN%2BWafZiogcu%2F1NQD%2BtaGxud8R9jFqW%2FXGmVwAmzsagfl%2FVkiFxz2hsaIGDJjtDYzOXBlVXfHnFjzdpW6QEJ8wJ2RCnm3N7w%2B3hmMLk2P3OizxjnCknzeH3HKddIH9h7EByWFc9J1zo%2FLVpG9zyVDBQSDyPsBlKNewLan2KDJW5G6K1y2rCIfvYsX09VksfzgK9rUtSXHuCWF4MV1DQXS%2FHyeXGnNUYZR2YN4G1EpfQAvRFVjGyP%2F3juE1dK6O43mkZgMe4WWyOe%2BZcsGD3gAxPoXAMrWaxERaefBWFHurx2xm6gBGc5sK7c223MDGq4Nckuz3EpWKUaRB%2BOgh%2FSj%2FyIHJuF3zc6kKyQ%2F40vhJfQrodZZEz151%2F84lTIyeOfhFKqDliN1iELhl%2FXfynYOOlCIB2THcA6Q6%2BdQOII81NkgZdyjIZiJNgBgsnVSMLCpwaMn%2FNjlQC9H2qpnjcmBmKjkBJDfEXNYuJeZqKEc0I4C1rLxVLVTM79tlUf6FMOXn3MQGOqUBIm41UPQ7TXeTWAPsdfUQi0gRJ8GDvFkGuDmVrwfKCTAVSVTPce4JGkev8dfIBvlgvAbBTLG6KfdOWcIEiUJL5vD0Uq5LgKzmMNWqymkD7c7i2fmKqBC0aqGpDz%2FVZXNJrVC6x%2Fg5cFiKxILq5yJ8lVXvIQIwBH6fUymKDlmmqEWbRhDkUrTt%2BMPXAOzPgKruwA%2B8MKFGyqRJ4ll%2FhUmXiMuViOZ3&X-Amz-Signature=13b3275be06940d05ff02324dcc630fcb09e2d1947dbb84b1bf8ef49cb67faec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6HNSQ7G%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH86zx5e4zmerVCuB2hPq3JpAC5sovzs%2FmB%2BfoDocLfSAiEA45xG1uzUJ%2F4Hm9GH3SDWvDnezTJhmntv%2F4DwE2Tm8lUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKlPWzlQSzurV%2FL9ircA%2Fw%2F3%2BN1Qp%2B7Nu53Di6LCFszSmD7sl3PUUkcuQOIea%2BrfIdeFROHWMQxOGGxy8fnp6LEvE3lOrWdQdsVA4qgcp5AxnKisMjGhUcM5%2BwBZHL5M7eV9YYVRuc37sp9HJGN%2BWafZiogcu%2F1NQD%2BtaGxud8R9jFqW%2FXGmVwAmzsagfl%2FVkiFxz2hsaIGDJjtDYzOXBlVXfHnFjzdpW6QEJ8wJ2RCnm3N7w%2B3hmMLk2P3OizxjnCknzeH3HKddIH9h7EByWFc9J1zo%2FLVpG9zyVDBQSDyPsBlKNewLan2KDJW5G6K1y2rCIfvYsX09VksfzgK9rUtSXHuCWF4MV1DQXS%2FHyeXGnNUYZR2YN4G1EpfQAvRFVjGyP%2F3juE1dK6O43mkZgMe4WWyOe%2BZcsGD3gAxPoXAMrWaxERaefBWFHurx2xm6gBGc5sK7c223MDGq4Nckuz3EpWKUaRB%2BOgh%2FSj%2FyIHJuF3zc6kKyQ%2F40vhJfQrodZZEz151%2F84lTIyeOfhFKqDliN1iELhl%2FXfynYOOlCIB2THcA6Q6%2BdQOII81NkgZdyjIZiJNgBgsnVSMLCpwaMn%2FNjlQC9H2qpnjcmBmKjkBJDfEXNYuJeZqKEc0I4C1rLxVLVTM79tlUf6FMOXn3MQGOqUBIm41UPQ7TXeTWAPsdfUQi0gRJ8GDvFkGuDmVrwfKCTAVSVTPce4JGkev8dfIBvlgvAbBTLG6KfdOWcIEiUJL5vD0Uq5LgKzmMNWqymkD7c7i2fmKqBC0aqGpDz%2FVZXNJrVC6x%2Fg5cFiKxILq5yJ8lVXvIQIwBH6fUymKDlmmqEWbRhDkUrTt%2BMPXAOzPgKruwA%2B8MKFGyqRJ4ll%2FhUmXiMuViOZ3&X-Amz-Signature=5b1671785b76ae921d8a85e6e3c18ce196311dc4b27538ceff82a98850722efe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6HNSQ7G%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH86zx5e4zmerVCuB2hPq3JpAC5sovzs%2FmB%2BfoDocLfSAiEA45xG1uzUJ%2F4Hm9GH3SDWvDnezTJhmntv%2F4DwE2Tm8lUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKlPWzlQSzurV%2FL9ircA%2Fw%2F3%2BN1Qp%2B7Nu53Di6LCFszSmD7sl3PUUkcuQOIea%2BrfIdeFROHWMQxOGGxy8fnp6LEvE3lOrWdQdsVA4qgcp5AxnKisMjGhUcM5%2BwBZHL5M7eV9YYVRuc37sp9HJGN%2BWafZiogcu%2F1NQD%2BtaGxud8R9jFqW%2FXGmVwAmzsagfl%2FVkiFxz2hsaIGDJjtDYzOXBlVXfHnFjzdpW6QEJ8wJ2RCnm3N7w%2B3hmMLk2P3OizxjnCknzeH3HKddIH9h7EByWFc9J1zo%2FLVpG9zyVDBQSDyPsBlKNewLan2KDJW5G6K1y2rCIfvYsX09VksfzgK9rUtSXHuCWF4MV1DQXS%2FHyeXGnNUYZR2YN4G1EpfQAvRFVjGyP%2F3juE1dK6O43mkZgMe4WWyOe%2BZcsGD3gAxPoXAMrWaxERaefBWFHurx2xm6gBGc5sK7c223MDGq4Nckuz3EpWKUaRB%2BOgh%2FSj%2FyIHJuF3zc6kKyQ%2F40vhJfQrodZZEz151%2F84lTIyeOfhFKqDliN1iELhl%2FXfynYOOlCIB2THcA6Q6%2BdQOII81NkgZdyjIZiJNgBgsnVSMLCpwaMn%2FNjlQC9H2qpnjcmBmKjkBJDfEXNYuJeZqKEc0I4C1rLxVLVTM79tlUf6FMOXn3MQGOqUBIm41UPQ7TXeTWAPsdfUQi0gRJ8GDvFkGuDmVrwfKCTAVSVTPce4JGkev8dfIBvlgvAbBTLG6KfdOWcIEiUJL5vD0Uq5LgKzmMNWqymkD7c7i2fmKqBC0aqGpDz%2FVZXNJrVC6x%2Fg5cFiKxILq5yJ8lVXvIQIwBH6fUymKDlmmqEWbRhDkUrTt%2BMPXAOzPgKruwA%2B8MKFGyqRJ4ll%2FhUmXiMuViOZ3&X-Amz-Signature=5cac8dba8925d306b9281b508daf0a28ac76a7f7e1e8df299a12954a1a3c3264&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6HNSQ7G%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T150835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH86zx5e4zmerVCuB2hPq3JpAC5sovzs%2FmB%2BfoDocLfSAiEA45xG1uzUJ%2F4Hm9GH3SDWvDnezTJhmntv%2F4DwE2Tm8lUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKlPWzlQSzurV%2FL9ircA%2Fw%2F3%2BN1Qp%2B7Nu53Di6LCFszSmD7sl3PUUkcuQOIea%2BrfIdeFROHWMQxOGGxy8fnp6LEvE3lOrWdQdsVA4qgcp5AxnKisMjGhUcM5%2BwBZHL5M7eV9YYVRuc37sp9HJGN%2BWafZiogcu%2F1NQD%2BtaGxud8R9jFqW%2FXGmVwAmzsagfl%2FVkiFxz2hsaIGDJjtDYzOXBlVXfHnFjzdpW6QEJ8wJ2RCnm3N7w%2B3hmMLk2P3OizxjnCknzeH3HKddIH9h7EByWFc9J1zo%2FLVpG9zyVDBQSDyPsBlKNewLan2KDJW5G6K1y2rCIfvYsX09VksfzgK9rUtSXHuCWF4MV1DQXS%2FHyeXGnNUYZR2YN4G1EpfQAvRFVjGyP%2F3juE1dK6O43mkZgMe4WWyOe%2BZcsGD3gAxPoXAMrWaxERaefBWFHurx2xm6gBGc5sK7c223MDGq4Nckuz3EpWKUaRB%2BOgh%2FSj%2FyIHJuF3zc6kKyQ%2F40vhJfQrodZZEz151%2F84lTIyeOfhFKqDliN1iELhl%2FXfynYOOlCIB2THcA6Q6%2BdQOII81NkgZdyjIZiJNgBgsnVSMLCpwaMn%2FNjlQC9H2qpnjcmBmKjkBJDfEXNYuJeZqKEc0I4C1rLxVLVTM79tlUf6FMOXn3MQGOqUBIm41UPQ7TXeTWAPsdfUQi0gRJ8GDvFkGuDmVrwfKCTAVSVTPce4JGkev8dfIBvlgvAbBTLG6KfdOWcIEiUJL5vD0Uq5LgKzmMNWqymkD7c7i2fmKqBC0aqGpDz%2FVZXNJrVC6x%2Fg5cFiKxILq5yJ8lVXvIQIwBH6fUymKDlmmqEWbRhDkUrTt%2BMPXAOzPgKruwA%2B8MKFGyqRJ4ll%2FhUmXiMuViOZ3&X-Amz-Signature=538a3423fdc65fd572d9fb6db36cdf84ffe0a489bbc2ca1b452eadb855330d28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
