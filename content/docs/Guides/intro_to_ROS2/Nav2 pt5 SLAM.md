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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ML55IO2%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCGPzQqvi%2B4CPRxB3A20XKRGQyFUYPSrXGeIIeM7bZRogIgAIDYc0PMU7u8zTRxBy5rgtFEcEG7WEbGmOb9LaO1T0wqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3xnJ711H%2BRLbVIKircA7knDerrekgTDnfkjcD515dro4t7Q5LRDX%2FfN2mEAxb3lAXQ8e8nhJrkKxvTdzCwOBcG4yk5kn%2BZvN4PIXHyMtJhzVBYibghY2DUuUKGsS9B1JLQDDGm0KZE17QIBXKVojePMJxN7VOTa%2FMIX3lohZM9Womlbic5ljlywa%2BAI1I%2FuTkYasC4wBSYvjKLQxrl7a7zFBptYDgK1Zt2am7JoRpX1996AMterEGATXOyA4pe%2FIubJwkRb8TUJmJkJiKuslNZvYBAz69s3QRAmw7tGO4f3wDIkcXA7up3kxQ32ixKqgaXVtzAx94nn09WdxtFZ%2Bp9TVMd4bAfgs7ZPg6gaea8rYgzT%2FRH%2FpAwZYrZbdj29QcK87WrNUwIkLKmjilrKbVf6fXucVQPo9I2lXeaSQAeoS70RvKJ8v1Lapi%2BkNQO8cYgr6TohS81zHnuYJbWgk2sHfAZTZXwujaNnLIQDDid5F8jhRKMa%2FkgjvLGkMXArB14Nw%2BCkwp%2Fgm4cw4%2B7nOmMYUQ2nZQWXUOR01rGQwgv2Bf7JpfPk3Yr3TJ7utBxkxuEXjc6rl%2Fi1OmbyTULM5%2F%2Bw720rC8WPc%2F%2FLwQgMTbi43xWa%2BOdKX9VeWu%2F2oXLeabOdymGZLzmbuh6MPzXpscGOqUBiD%2B16fMUO1dqHlSzFG6ut%2BHVG6%2FJp6wu8jr0%2FzuZf3wIYhanDW3mjrfTdK9zJjvddCWxnNMKAA7UWX8QSXO2CmSOIBbCNVT5w54Vm1xoGK5u0LFyXI9M51Mb%2BcR%2FnVo%2Bmwkx0a5AP6TjxuGSwbd7fPw4ufgVVmwtCTeuB8e4psu%2FfBUq%2FG5zXmQPyCGs7LNE%2BlJLbrnAfaAL%2BZs3SqSISEHL3Mt2&X-Amz-Signature=8c5c3d28fc2f56bf842571087ee428e6148ec8d7c902b937af784301814572bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ML55IO2%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCGPzQqvi%2B4CPRxB3A20XKRGQyFUYPSrXGeIIeM7bZRogIgAIDYc0PMU7u8zTRxBy5rgtFEcEG7WEbGmOb9LaO1T0wqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3xnJ711H%2BRLbVIKircA7knDerrekgTDnfkjcD515dro4t7Q5LRDX%2FfN2mEAxb3lAXQ8e8nhJrkKxvTdzCwOBcG4yk5kn%2BZvN4PIXHyMtJhzVBYibghY2DUuUKGsS9B1JLQDDGm0KZE17QIBXKVojePMJxN7VOTa%2FMIX3lohZM9Womlbic5ljlywa%2BAI1I%2FuTkYasC4wBSYvjKLQxrl7a7zFBptYDgK1Zt2am7JoRpX1996AMterEGATXOyA4pe%2FIubJwkRb8TUJmJkJiKuslNZvYBAz69s3QRAmw7tGO4f3wDIkcXA7up3kxQ32ixKqgaXVtzAx94nn09WdxtFZ%2Bp9TVMd4bAfgs7ZPg6gaea8rYgzT%2FRH%2FpAwZYrZbdj29QcK87WrNUwIkLKmjilrKbVf6fXucVQPo9I2lXeaSQAeoS70RvKJ8v1Lapi%2BkNQO8cYgr6TohS81zHnuYJbWgk2sHfAZTZXwujaNnLIQDDid5F8jhRKMa%2FkgjvLGkMXArB14Nw%2BCkwp%2Fgm4cw4%2B7nOmMYUQ2nZQWXUOR01rGQwgv2Bf7JpfPk3Yr3TJ7utBxkxuEXjc6rl%2Fi1OmbyTULM5%2F%2Bw720rC8WPc%2F%2FLwQgMTbi43xWa%2BOdKX9VeWu%2F2oXLeabOdymGZLzmbuh6MPzXpscGOqUBiD%2B16fMUO1dqHlSzFG6ut%2BHVG6%2FJp6wu8jr0%2FzuZf3wIYhanDW3mjrfTdK9zJjvddCWxnNMKAA7UWX8QSXO2CmSOIBbCNVT5w54Vm1xoGK5u0LFyXI9M51Mb%2BcR%2FnVo%2Bmwkx0a5AP6TjxuGSwbd7fPw4ufgVVmwtCTeuB8e4psu%2FfBUq%2FG5zXmQPyCGs7LNE%2BlJLbrnAfaAL%2BZs3SqSISEHL3Mt2&X-Amz-Signature=c2d3b74bf1e305de2593e902022728f8785b619d1ef94ffb961fe090aad90432&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ML55IO2%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCGPzQqvi%2B4CPRxB3A20XKRGQyFUYPSrXGeIIeM7bZRogIgAIDYc0PMU7u8zTRxBy5rgtFEcEG7WEbGmOb9LaO1T0wqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3xnJ711H%2BRLbVIKircA7knDerrekgTDnfkjcD515dro4t7Q5LRDX%2FfN2mEAxb3lAXQ8e8nhJrkKxvTdzCwOBcG4yk5kn%2BZvN4PIXHyMtJhzVBYibghY2DUuUKGsS9B1JLQDDGm0KZE17QIBXKVojePMJxN7VOTa%2FMIX3lohZM9Womlbic5ljlywa%2BAI1I%2FuTkYasC4wBSYvjKLQxrl7a7zFBptYDgK1Zt2am7JoRpX1996AMterEGATXOyA4pe%2FIubJwkRb8TUJmJkJiKuslNZvYBAz69s3QRAmw7tGO4f3wDIkcXA7up3kxQ32ixKqgaXVtzAx94nn09WdxtFZ%2Bp9TVMd4bAfgs7ZPg6gaea8rYgzT%2FRH%2FpAwZYrZbdj29QcK87WrNUwIkLKmjilrKbVf6fXucVQPo9I2lXeaSQAeoS70RvKJ8v1Lapi%2BkNQO8cYgr6TohS81zHnuYJbWgk2sHfAZTZXwujaNnLIQDDid5F8jhRKMa%2FkgjvLGkMXArB14Nw%2BCkwp%2Fgm4cw4%2B7nOmMYUQ2nZQWXUOR01rGQwgv2Bf7JpfPk3Yr3TJ7utBxkxuEXjc6rl%2Fi1OmbyTULM5%2F%2Bw720rC8WPc%2F%2FLwQgMTbi43xWa%2BOdKX9VeWu%2F2oXLeabOdymGZLzmbuh6MPzXpscGOqUBiD%2B16fMUO1dqHlSzFG6ut%2BHVG6%2FJp6wu8jr0%2FzuZf3wIYhanDW3mjrfTdK9zJjvddCWxnNMKAA7UWX8QSXO2CmSOIBbCNVT5w54Vm1xoGK5u0LFyXI9M51Mb%2BcR%2FnVo%2Bmwkx0a5AP6TjxuGSwbd7fPw4ufgVVmwtCTeuB8e4psu%2FfBUq%2FG5zXmQPyCGs7LNE%2BlJLbrnAfaAL%2BZs3SqSISEHL3Mt2&X-Amz-Signature=2f1a0eb3056ba662bc8b4ccd9ee7f8b27aeb1cc0f156d109ce6de58314c24219&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ML55IO2%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCGPzQqvi%2B4CPRxB3A20XKRGQyFUYPSrXGeIIeM7bZRogIgAIDYc0PMU7u8zTRxBy5rgtFEcEG7WEbGmOb9LaO1T0wqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3xnJ711H%2BRLbVIKircA7knDerrekgTDnfkjcD515dro4t7Q5LRDX%2FfN2mEAxb3lAXQ8e8nhJrkKxvTdzCwOBcG4yk5kn%2BZvN4PIXHyMtJhzVBYibghY2DUuUKGsS9B1JLQDDGm0KZE17QIBXKVojePMJxN7VOTa%2FMIX3lohZM9Womlbic5ljlywa%2BAI1I%2FuTkYasC4wBSYvjKLQxrl7a7zFBptYDgK1Zt2am7JoRpX1996AMterEGATXOyA4pe%2FIubJwkRb8TUJmJkJiKuslNZvYBAz69s3QRAmw7tGO4f3wDIkcXA7up3kxQ32ixKqgaXVtzAx94nn09WdxtFZ%2Bp9TVMd4bAfgs7ZPg6gaea8rYgzT%2FRH%2FpAwZYrZbdj29QcK87WrNUwIkLKmjilrKbVf6fXucVQPo9I2lXeaSQAeoS70RvKJ8v1Lapi%2BkNQO8cYgr6TohS81zHnuYJbWgk2sHfAZTZXwujaNnLIQDDid5F8jhRKMa%2FkgjvLGkMXArB14Nw%2BCkwp%2Fgm4cw4%2B7nOmMYUQ2nZQWXUOR01rGQwgv2Bf7JpfPk3Yr3TJ7utBxkxuEXjc6rl%2Fi1OmbyTULM5%2F%2Bw720rC8WPc%2F%2FLwQgMTbi43xWa%2BOdKX9VeWu%2F2oXLeabOdymGZLzmbuh6MPzXpscGOqUBiD%2B16fMUO1dqHlSzFG6ut%2BHVG6%2FJp6wu8jr0%2FzuZf3wIYhanDW3mjrfTdK9zJjvddCWxnNMKAA7UWX8QSXO2CmSOIBbCNVT5w54Vm1xoGK5u0LFyXI9M51Mb%2BcR%2FnVo%2Bmwkx0a5AP6TjxuGSwbd7fPw4ufgVVmwtCTeuB8e4psu%2FfBUq%2FG5zXmQPyCGs7LNE%2BlJLbrnAfaAL%2BZs3SqSISEHL3Mt2&X-Amz-Signature=92b89e9d0b4d89e33be1d6aa83d0c26727f267647274af565293bfc33558efb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ML55IO2%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCGPzQqvi%2B4CPRxB3A20XKRGQyFUYPSrXGeIIeM7bZRogIgAIDYc0PMU7u8zTRxBy5rgtFEcEG7WEbGmOb9LaO1T0wqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3xnJ711H%2BRLbVIKircA7knDerrekgTDnfkjcD515dro4t7Q5LRDX%2FfN2mEAxb3lAXQ8e8nhJrkKxvTdzCwOBcG4yk5kn%2BZvN4PIXHyMtJhzVBYibghY2DUuUKGsS9B1JLQDDGm0KZE17QIBXKVojePMJxN7VOTa%2FMIX3lohZM9Womlbic5ljlywa%2BAI1I%2FuTkYasC4wBSYvjKLQxrl7a7zFBptYDgK1Zt2am7JoRpX1996AMterEGATXOyA4pe%2FIubJwkRb8TUJmJkJiKuslNZvYBAz69s3QRAmw7tGO4f3wDIkcXA7up3kxQ32ixKqgaXVtzAx94nn09WdxtFZ%2Bp9TVMd4bAfgs7ZPg6gaea8rYgzT%2FRH%2FpAwZYrZbdj29QcK87WrNUwIkLKmjilrKbVf6fXucVQPo9I2lXeaSQAeoS70RvKJ8v1Lapi%2BkNQO8cYgr6TohS81zHnuYJbWgk2sHfAZTZXwujaNnLIQDDid5F8jhRKMa%2FkgjvLGkMXArB14Nw%2BCkwp%2Fgm4cw4%2B7nOmMYUQ2nZQWXUOR01rGQwgv2Bf7JpfPk3Yr3TJ7utBxkxuEXjc6rl%2Fi1OmbyTULM5%2F%2Bw720rC8WPc%2F%2FLwQgMTbi43xWa%2BOdKX9VeWu%2F2oXLeabOdymGZLzmbuh6MPzXpscGOqUBiD%2B16fMUO1dqHlSzFG6ut%2BHVG6%2FJp6wu8jr0%2FzuZf3wIYhanDW3mjrfTdK9zJjvddCWxnNMKAA7UWX8QSXO2CmSOIBbCNVT5w54Vm1xoGK5u0LFyXI9M51Mb%2BcR%2FnVo%2Bmwkx0a5AP6TjxuGSwbd7fPw4ufgVVmwtCTeuB8e4psu%2FfBUq%2FG5zXmQPyCGs7LNE%2BlJLbrnAfaAL%2BZs3SqSISEHL3Mt2&X-Amz-Signature=fa6f48356262070ede3f659add8a6c37075e6fea283b977098a6b0c72528194b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ML55IO2%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCGPzQqvi%2B4CPRxB3A20XKRGQyFUYPSrXGeIIeM7bZRogIgAIDYc0PMU7u8zTRxBy5rgtFEcEG7WEbGmOb9LaO1T0wqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3xnJ711H%2BRLbVIKircA7knDerrekgTDnfkjcD515dro4t7Q5LRDX%2FfN2mEAxb3lAXQ8e8nhJrkKxvTdzCwOBcG4yk5kn%2BZvN4PIXHyMtJhzVBYibghY2DUuUKGsS9B1JLQDDGm0KZE17QIBXKVojePMJxN7VOTa%2FMIX3lohZM9Womlbic5ljlywa%2BAI1I%2FuTkYasC4wBSYvjKLQxrl7a7zFBptYDgK1Zt2am7JoRpX1996AMterEGATXOyA4pe%2FIubJwkRb8TUJmJkJiKuslNZvYBAz69s3QRAmw7tGO4f3wDIkcXA7up3kxQ32ixKqgaXVtzAx94nn09WdxtFZ%2Bp9TVMd4bAfgs7ZPg6gaea8rYgzT%2FRH%2FpAwZYrZbdj29QcK87WrNUwIkLKmjilrKbVf6fXucVQPo9I2lXeaSQAeoS70RvKJ8v1Lapi%2BkNQO8cYgr6TohS81zHnuYJbWgk2sHfAZTZXwujaNnLIQDDid5F8jhRKMa%2FkgjvLGkMXArB14Nw%2BCkwp%2Fgm4cw4%2B7nOmMYUQ2nZQWXUOR01rGQwgv2Bf7JpfPk3Yr3TJ7utBxkxuEXjc6rl%2Fi1OmbyTULM5%2F%2Bw720rC8WPc%2F%2FLwQgMTbi43xWa%2BOdKX9VeWu%2F2oXLeabOdymGZLzmbuh6MPzXpscGOqUBiD%2B16fMUO1dqHlSzFG6ut%2BHVG6%2FJp6wu8jr0%2FzuZf3wIYhanDW3mjrfTdK9zJjvddCWxnNMKAA7UWX8QSXO2CmSOIBbCNVT5w54Vm1xoGK5u0LFyXI9M51Mb%2BcR%2FnVo%2Bmwkx0a5AP6TjxuGSwbd7fPw4ufgVVmwtCTeuB8e4psu%2FfBUq%2FG5zXmQPyCGs7LNE%2BlJLbrnAfaAL%2BZs3SqSISEHL3Mt2&X-Amz-Signature=736c8be973cd646dd1fc149e4051d08048355e80824a1656e926a12f53172fe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ML55IO2%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCGPzQqvi%2B4CPRxB3A20XKRGQyFUYPSrXGeIIeM7bZRogIgAIDYc0PMU7u8zTRxBy5rgtFEcEG7WEbGmOb9LaO1T0wqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3xnJ711H%2BRLbVIKircA7knDerrekgTDnfkjcD515dro4t7Q5LRDX%2FfN2mEAxb3lAXQ8e8nhJrkKxvTdzCwOBcG4yk5kn%2BZvN4PIXHyMtJhzVBYibghY2DUuUKGsS9B1JLQDDGm0KZE17QIBXKVojePMJxN7VOTa%2FMIX3lohZM9Womlbic5ljlywa%2BAI1I%2FuTkYasC4wBSYvjKLQxrl7a7zFBptYDgK1Zt2am7JoRpX1996AMterEGATXOyA4pe%2FIubJwkRb8TUJmJkJiKuslNZvYBAz69s3QRAmw7tGO4f3wDIkcXA7up3kxQ32ixKqgaXVtzAx94nn09WdxtFZ%2Bp9TVMd4bAfgs7ZPg6gaea8rYgzT%2FRH%2FpAwZYrZbdj29QcK87WrNUwIkLKmjilrKbVf6fXucVQPo9I2lXeaSQAeoS70RvKJ8v1Lapi%2BkNQO8cYgr6TohS81zHnuYJbWgk2sHfAZTZXwujaNnLIQDDid5F8jhRKMa%2FkgjvLGkMXArB14Nw%2BCkwp%2Fgm4cw4%2B7nOmMYUQ2nZQWXUOR01rGQwgv2Bf7JpfPk3Yr3TJ7utBxkxuEXjc6rl%2Fi1OmbyTULM5%2F%2Bw720rC8WPc%2F%2FLwQgMTbi43xWa%2BOdKX9VeWu%2F2oXLeabOdymGZLzmbuh6MPzXpscGOqUBiD%2B16fMUO1dqHlSzFG6ut%2BHVG6%2FJp6wu8jr0%2FzuZf3wIYhanDW3mjrfTdK9zJjvddCWxnNMKAA7UWX8QSXO2CmSOIBbCNVT5w54Vm1xoGK5u0LFyXI9M51Mb%2BcR%2FnVo%2Bmwkx0a5AP6TjxuGSwbd7fPw4ufgVVmwtCTeuB8e4psu%2FfBUq%2FG5zXmQPyCGs7LNE%2BlJLbrnAfaAL%2BZs3SqSISEHL3Mt2&X-Amz-Signature=b3acbd329adadfb2f0d200c947a7ade4004a28c960c1847aaee887b601165370&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ML55IO2%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCGPzQqvi%2B4CPRxB3A20XKRGQyFUYPSrXGeIIeM7bZRogIgAIDYc0PMU7u8zTRxBy5rgtFEcEG7WEbGmOb9LaO1T0wqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3xnJ711H%2BRLbVIKircA7knDerrekgTDnfkjcD515dro4t7Q5LRDX%2FfN2mEAxb3lAXQ8e8nhJrkKxvTdzCwOBcG4yk5kn%2BZvN4PIXHyMtJhzVBYibghY2DUuUKGsS9B1JLQDDGm0KZE17QIBXKVojePMJxN7VOTa%2FMIX3lohZM9Womlbic5ljlywa%2BAI1I%2FuTkYasC4wBSYvjKLQxrl7a7zFBptYDgK1Zt2am7JoRpX1996AMterEGATXOyA4pe%2FIubJwkRb8TUJmJkJiKuslNZvYBAz69s3QRAmw7tGO4f3wDIkcXA7up3kxQ32ixKqgaXVtzAx94nn09WdxtFZ%2Bp9TVMd4bAfgs7ZPg6gaea8rYgzT%2FRH%2FpAwZYrZbdj29QcK87WrNUwIkLKmjilrKbVf6fXucVQPo9I2lXeaSQAeoS70RvKJ8v1Lapi%2BkNQO8cYgr6TohS81zHnuYJbWgk2sHfAZTZXwujaNnLIQDDid5F8jhRKMa%2FkgjvLGkMXArB14Nw%2BCkwp%2Fgm4cw4%2B7nOmMYUQ2nZQWXUOR01rGQwgv2Bf7JpfPk3Yr3TJ7utBxkxuEXjc6rl%2Fi1OmbyTULM5%2F%2Bw720rC8WPc%2F%2FLwQgMTbi43xWa%2BOdKX9VeWu%2F2oXLeabOdymGZLzmbuh6MPzXpscGOqUBiD%2B16fMUO1dqHlSzFG6ut%2BHVG6%2FJp6wu8jr0%2FzuZf3wIYhanDW3mjrfTdK9zJjvddCWxnNMKAA7UWX8QSXO2CmSOIBbCNVT5w54Vm1xoGK5u0LFyXI9M51Mb%2BcR%2FnVo%2Bmwkx0a5AP6TjxuGSwbd7fPw4ufgVVmwtCTeuB8e4psu%2FfBUq%2FG5zXmQPyCGs7LNE%2BlJLbrnAfaAL%2BZs3SqSISEHL3Mt2&X-Amz-Signature=257360255be8c67eae51574a7a4d5ceae05482d301f7b2b981227c813289377d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ML55IO2%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCGPzQqvi%2B4CPRxB3A20XKRGQyFUYPSrXGeIIeM7bZRogIgAIDYc0PMU7u8zTRxBy5rgtFEcEG7WEbGmOb9LaO1T0wqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3xnJ711H%2BRLbVIKircA7knDerrekgTDnfkjcD515dro4t7Q5LRDX%2FfN2mEAxb3lAXQ8e8nhJrkKxvTdzCwOBcG4yk5kn%2BZvN4PIXHyMtJhzVBYibghY2DUuUKGsS9B1JLQDDGm0KZE17QIBXKVojePMJxN7VOTa%2FMIX3lohZM9Womlbic5ljlywa%2BAI1I%2FuTkYasC4wBSYvjKLQxrl7a7zFBptYDgK1Zt2am7JoRpX1996AMterEGATXOyA4pe%2FIubJwkRb8TUJmJkJiKuslNZvYBAz69s3QRAmw7tGO4f3wDIkcXA7up3kxQ32ixKqgaXVtzAx94nn09WdxtFZ%2Bp9TVMd4bAfgs7ZPg6gaea8rYgzT%2FRH%2FpAwZYrZbdj29QcK87WrNUwIkLKmjilrKbVf6fXucVQPo9I2lXeaSQAeoS70RvKJ8v1Lapi%2BkNQO8cYgr6TohS81zHnuYJbWgk2sHfAZTZXwujaNnLIQDDid5F8jhRKMa%2FkgjvLGkMXArB14Nw%2BCkwp%2Fgm4cw4%2B7nOmMYUQ2nZQWXUOR01rGQwgv2Bf7JpfPk3Yr3TJ7utBxkxuEXjc6rl%2Fi1OmbyTULM5%2F%2Bw720rC8WPc%2F%2FLwQgMTbi43xWa%2BOdKX9VeWu%2F2oXLeabOdymGZLzmbuh6MPzXpscGOqUBiD%2B16fMUO1dqHlSzFG6ut%2BHVG6%2FJp6wu8jr0%2FzuZf3wIYhanDW3mjrfTdK9zJjvddCWxnNMKAA7UWX8QSXO2CmSOIBbCNVT5w54Vm1xoGK5u0LFyXI9M51Mb%2BcR%2FnVo%2Bmwkx0a5AP6TjxuGSwbd7fPw4ufgVVmwtCTeuB8e4psu%2FfBUq%2FG5zXmQPyCGs7LNE%2BlJLbrnAfaAL%2BZs3SqSISEHL3Mt2&X-Amz-Signature=70930b98fc38fd065cc9f943334db5b4436206396dc1565f29179125c7312bb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ML55IO2%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCGPzQqvi%2B4CPRxB3A20XKRGQyFUYPSrXGeIIeM7bZRogIgAIDYc0PMU7u8zTRxBy5rgtFEcEG7WEbGmOb9LaO1T0wqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3xnJ711H%2BRLbVIKircA7knDerrekgTDnfkjcD515dro4t7Q5LRDX%2FfN2mEAxb3lAXQ8e8nhJrkKxvTdzCwOBcG4yk5kn%2BZvN4PIXHyMtJhzVBYibghY2DUuUKGsS9B1JLQDDGm0KZE17QIBXKVojePMJxN7VOTa%2FMIX3lohZM9Womlbic5ljlywa%2BAI1I%2FuTkYasC4wBSYvjKLQxrl7a7zFBptYDgK1Zt2am7JoRpX1996AMterEGATXOyA4pe%2FIubJwkRb8TUJmJkJiKuslNZvYBAz69s3QRAmw7tGO4f3wDIkcXA7up3kxQ32ixKqgaXVtzAx94nn09WdxtFZ%2Bp9TVMd4bAfgs7ZPg6gaea8rYgzT%2FRH%2FpAwZYrZbdj29QcK87WrNUwIkLKmjilrKbVf6fXucVQPo9I2lXeaSQAeoS70RvKJ8v1Lapi%2BkNQO8cYgr6TohS81zHnuYJbWgk2sHfAZTZXwujaNnLIQDDid5F8jhRKMa%2FkgjvLGkMXArB14Nw%2BCkwp%2Fgm4cw4%2B7nOmMYUQ2nZQWXUOR01rGQwgv2Bf7JpfPk3Yr3TJ7utBxkxuEXjc6rl%2Fi1OmbyTULM5%2F%2Bw720rC8WPc%2F%2FLwQgMTbi43xWa%2BOdKX9VeWu%2F2oXLeabOdymGZLzmbuh6MPzXpscGOqUBiD%2B16fMUO1dqHlSzFG6ut%2BHVG6%2FJp6wu8jr0%2FzuZf3wIYhanDW3mjrfTdK9zJjvddCWxnNMKAA7UWX8QSXO2CmSOIBbCNVT5w54Vm1xoGK5u0LFyXI9M51Mb%2BcR%2FnVo%2Bmwkx0a5AP6TjxuGSwbd7fPw4ufgVVmwtCTeuB8e4psu%2FfBUq%2FG5zXmQPyCGs7LNE%2BlJLbrnAfaAL%2BZs3SqSISEHL3Mt2&X-Amz-Signature=054f81b065c49f46e799ce86293acae2356cfc267228eb60c28ab53413744e50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ML55IO2%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCGPzQqvi%2B4CPRxB3A20XKRGQyFUYPSrXGeIIeM7bZRogIgAIDYc0PMU7u8zTRxBy5rgtFEcEG7WEbGmOb9LaO1T0wqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3xnJ711H%2BRLbVIKircA7knDerrekgTDnfkjcD515dro4t7Q5LRDX%2FfN2mEAxb3lAXQ8e8nhJrkKxvTdzCwOBcG4yk5kn%2BZvN4PIXHyMtJhzVBYibghY2DUuUKGsS9B1JLQDDGm0KZE17QIBXKVojePMJxN7VOTa%2FMIX3lohZM9Womlbic5ljlywa%2BAI1I%2FuTkYasC4wBSYvjKLQxrl7a7zFBptYDgK1Zt2am7JoRpX1996AMterEGATXOyA4pe%2FIubJwkRb8TUJmJkJiKuslNZvYBAz69s3QRAmw7tGO4f3wDIkcXA7up3kxQ32ixKqgaXVtzAx94nn09WdxtFZ%2Bp9TVMd4bAfgs7ZPg6gaea8rYgzT%2FRH%2FpAwZYrZbdj29QcK87WrNUwIkLKmjilrKbVf6fXucVQPo9I2lXeaSQAeoS70RvKJ8v1Lapi%2BkNQO8cYgr6TohS81zHnuYJbWgk2sHfAZTZXwujaNnLIQDDid5F8jhRKMa%2FkgjvLGkMXArB14Nw%2BCkwp%2Fgm4cw4%2B7nOmMYUQ2nZQWXUOR01rGQwgv2Bf7JpfPk3Yr3TJ7utBxkxuEXjc6rl%2Fi1OmbyTULM5%2F%2Bw720rC8WPc%2F%2FLwQgMTbi43xWa%2BOdKX9VeWu%2F2oXLeabOdymGZLzmbuh6MPzXpscGOqUBiD%2B16fMUO1dqHlSzFG6ut%2BHVG6%2FJp6wu8jr0%2FzuZf3wIYhanDW3mjrfTdK9zJjvddCWxnNMKAA7UWX8QSXO2CmSOIBbCNVT5w54Vm1xoGK5u0LFyXI9M51Mb%2BcR%2FnVo%2Bmwkx0a5AP6TjxuGSwbd7fPw4ufgVVmwtCTeuB8e4psu%2FfBUq%2FG5zXmQPyCGs7LNE%2BlJLbrnAfaAL%2BZs3SqSISEHL3Mt2&X-Amz-Signature=43e6336413cb3f513a7bf707c13bdbea88b4377f23093be040de5157e3f3b1a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ML55IO2%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCGPzQqvi%2B4CPRxB3A20XKRGQyFUYPSrXGeIIeM7bZRogIgAIDYc0PMU7u8zTRxBy5rgtFEcEG7WEbGmOb9LaO1T0wqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3xnJ711H%2BRLbVIKircA7knDerrekgTDnfkjcD515dro4t7Q5LRDX%2FfN2mEAxb3lAXQ8e8nhJrkKxvTdzCwOBcG4yk5kn%2BZvN4PIXHyMtJhzVBYibghY2DUuUKGsS9B1JLQDDGm0KZE17QIBXKVojePMJxN7VOTa%2FMIX3lohZM9Womlbic5ljlywa%2BAI1I%2FuTkYasC4wBSYvjKLQxrl7a7zFBptYDgK1Zt2am7JoRpX1996AMterEGATXOyA4pe%2FIubJwkRb8TUJmJkJiKuslNZvYBAz69s3QRAmw7tGO4f3wDIkcXA7up3kxQ32ixKqgaXVtzAx94nn09WdxtFZ%2Bp9TVMd4bAfgs7ZPg6gaea8rYgzT%2FRH%2FpAwZYrZbdj29QcK87WrNUwIkLKmjilrKbVf6fXucVQPo9I2lXeaSQAeoS70RvKJ8v1Lapi%2BkNQO8cYgr6TohS81zHnuYJbWgk2sHfAZTZXwujaNnLIQDDid5F8jhRKMa%2FkgjvLGkMXArB14Nw%2BCkwp%2Fgm4cw4%2B7nOmMYUQ2nZQWXUOR01rGQwgv2Bf7JpfPk3Yr3TJ7utBxkxuEXjc6rl%2Fi1OmbyTULM5%2F%2Bw720rC8WPc%2F%2FLwQgMTbi43xWa%2BOdKX9VeWu%2F2oXLeabOdymGZLzmbuh6MPzXpscGOqUBiD%2B16fMUO1dqHlSzFG6ut%2BHVG6%2FJp6wu8jr0%2FzuZf3wIYhanDW3mjrfTdK9zJjvddCWxnNMKAA7UWX8QSXO2CmSOIBbCNVT5w54Vm1xoGK5u0LFyXI9M51Mb%2BcR%2FnVo%2Bmwkx0a5AP6TjxuGSwbd7fPw4ufgVVmwtCTeuB8e4psu%2FfBUq%2FG5zXmQPyCGs7LNE%2BlJLbrnAfaAL%2BZs3SqSISEHL3Mt2&X-Amz-Signature=2f5b682785ee6529a329c41b7ba06e0a4e17a282b3d96a627b4e238a353be9e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ML55IO2%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCGPzQqvi%2B4CPRxB3A20XKRGQyFUYPSrXGeIIeM7bZRogIgAIDYc0PMU7u8zTRxBy5rgtFEcEG7WEbGmOb9LaO1T0wqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3xnJ711H%2BRLbVIKircA7knDerrekgTDnfkjcD515dro4t7Q5LRDX%2FfN2mEAxb3lAXQ8e8nhJrkKxvTdzCwOBcG4yk5kn%2BZvN4PIXHyMtJhzVBYibghY2DUuUKGsS9B1JLQDDGm0KZE17QIBXKVojePMJxN7VOTa%2FMIX3lohZM9Womlbic5ljlywa%2BAI1I%2FuTkYasC4wBSYvjKLQxrl7a7zFBptYDgK1Zt2am7JoRpX1996AMterEGATXOyA4pe%2FIubJwkRb8TUJmJkJiKuslNZvYBAz69s3QRAmw7tGO4f3wDIkcXA7up3kxQ32ixKqgaXVtzAx94nn09WdxtFZ%2Bp9TVMd4bAfgs7ZPg6gaea8rYgzT%2FRH%2FpAwZYrZbdj29QcK87WrNUwIkLKmjilrKbVf6fXucVQPo9I2lXeaSQAeoS70RvKJ8v1Lapi%2BkNQO8cYgr6TohS81zHnuYJbWgk2sHfAZTZXwujaNnLIQDDid5F8jhRKMa%2FkgjvLGkMXArB14Nw%2BCkwp%2Fgm4cw4%2B7nOmMYUQ2nZQWXUOR01rGQwgv2Bf7JpfPk3Yr3TJ7utBxkxuEXjc6rl%2Fi1OmbyTULM5%2F%2Bw720rC8WPc%2F%2FLwQgMTbi43xWa%2BOdKX9VeWu%2F2oXLeabOdymGZLzmbuh6MPzXpscGOqUBiD%2B16fMUO1dqHlSzFG6ut%2BHVG6%2FJp6wu8jr0%2FzuZf3wIYhanDW3mjrfTdK9zJjvddCWxnNMKAA7UWX8QSXO2CmSOIBbCNVT5w54Vm1xoGK5u0LFyXI9M51Mb%2BcR%2FnVo%2Bmwkx0a5AP6TjxuGSwbd7fPw4ufgVVmwtCTeuB8e4psu%2FfBUq%2FG5zXmQPyCGs7LNE%2BlJLbrnAfaAL%2BZs3SqSISEHL3Mt2&X-Amz-Signature=a964f35ac9a8663e7ec4eb558dc6328166309ce0b86d052b1995bb4e89c1e4d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ML55IO2%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCGPzQqvi%2B4CPRxB3A20XKRGQyFUYPSrXGeIIeM7bZRogIgAIDYc0PMU7u8zTRxBy5rgtFEcEG7WEbGmOb9LaO1T0wqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI3xnJ711H%2BRLbVIKircA7knDerrekgTDnfkjcD515dro4t7Q5LRDX%2FfN2mEAxb3lAXQ8e8nhJrkKxvTdzCwOBcG4yk5kn%2BZvN4PIXHyMtJhzVBYibghY2DUuUKGsS9B1JLQDDGm0KZE17QIBXKVojePMJxN7VOTa%2FMIX3lohZM9Womlbic5ljlywa%2BAI1I%2FuTkYasC4wBSYvjKLQxrl7a7zFBptYDgK1Zt2am7JoRpX1996AMterEGATXOyA4pe%2FIubJwkRb8TUJmJkJiKuslNZvYBAz69s3QRAmw7tGO4f3wDIkcXA7up3kxQ32ixKqgaXVtzAx94nn09WdxtFZ%2Bp9TVMd4bAfgs7ZPg6gaea8rYgzT%2FRH%2FpAwZYrZbdj29QcK87WrNUwIkLKmjilrKbVf6fXucVQPo9I2lXeaSQAeoS70RvKJ8v1Lapi%2BkNQO8cYgr6TohS81zHnuYJbWgk2sHfAZTZXwujaNnLIQDDid5F8jhRKMa%2FkgjvLGkMXArB14Nw%2BCkwp%2Fgm4cw4%2B7nOmMYUQ2nZQWXUOR01rGQwgv2Bf7JpfPk3Yr3TJ7utBxkxuEXjc6rl%2Fi1OmbyTULM5%2F%2Bw720rC8WPc%2F%2FLwQgMTbi43xWa%2BOdKX9VeWu%2F2oXLeabOdymGZLzmbuh6MPzXpscGOqUBiD%2B16fMUO1dqHlSzFG6ut%2BHVG6%2FJp6wu8jr0%2FzuZf3wIYhanDW3mjrfTdK9zJjvddCWxnNMKAA7UWX8QSXO2CmSOIBbCNVT5w54Vm1xoGK5u0LFyXI9M51Mb%2BcR%2FnVo%2Bmwkx0a5AP6TjxuGSwbd7fPw4ufgVVmwtCTeuB8e4psu%2FfBUq%2FG5zXmQPyCGs7LNE%2BlJLbrnAfaAL%2BZs3SqSISEHL3Mt2&X-Amz-Signature=9359e7090aa067917c63f98b3135d422edcd71219e2e1d577ab38e5ebe2754f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
