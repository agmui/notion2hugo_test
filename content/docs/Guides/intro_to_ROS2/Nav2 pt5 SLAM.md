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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXY4U6GR%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIBgdCy0vUfYbtAQaE%2FySq0HUajevY8J5fEBa5tGJDhL9AiA33CHjEkBw1JnQMjUuoooOyTPuec0rlvzGlkFJhWZYCir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMMt0RFwXA4ntgz%2BTZKtwDHopwPHVh%2BwKpC2PdDeS0Yi78JZe1E5%2F3bwLoTXh5mlhGJyOWbz%2B7Jo%2FIQmqn5TLun6QFhUwYNXQ2CSsiCYgr5LZewMSnh04gvuGIEe6kUeInBPYuN5xNySiHwlgXGq4fYjot0A%2BFlwBoeysY5iXt83ZOR4U3fZGSK4nK4hb9%2FgRP6Sz1vRi9U3gBZp%2FfH8%2BtBKxWgTmWxCRxBWNEbZarIaEAW4NrmXp7nbme6kozc6QEjNn0YyDJu7w4KegLb1XSdwFB8PDYj3bxRNVomg6LQPoxb5L0bX97A3uXtgFBKd%2BJ7Ihr83Oj5j6ySxAA8jr%2FNsJS9LT3Xm2vcnKI3vGHz2k327uS0EnVHDAyi%2Fd8W7fUcPfo2AOZ4FQXrf%2BkZi8WcxijugWAHFUQLXs2yMYHarY4NhxWqeXMgpGEczcGi9yicqAd62cW420o8W%2F3CCFsIqJyhqLV0Y2JM0ljaZmYWeYfx7GqiudW3XOvn9umWv%2BoWdPJKHH5TQfq2P2Sd3PUSg8LdJE8dUHRHbjWk75LsZlpl36a8vesxPvkiQm1S7IJXNOx6od92PBoAg1jJU1DbyzqH%2BsOiGc3nfwBOwvh6xoRx%2BT44Pw1%2BQL5tkXOU7e8QWyAxAQG4sEN59Ywu86PzAY6pgE3CpOZRWuBI3lzrVY8XXpCLSZCUcdw4uCjaKA1TmsZB6pzTg2kQ4QSSKkLZjDbr%2BtB1IpZhz%2BSeb78eWVKpjVbRtMT%2B%2BRWji2od4IUk7TYwMRvA6bYxA1UhNUESFvTZokmrBCrOqL%2Fg3aMXu8jOQHpLmWrYgU091xYNPg7HZMRQrC63dyhcuTK%2Bv%2F4vv2JD%2F5MVieVo0Qj9T8G6yfxuLuAKtOXRUIp&X-Amz-Signature=11cd05b363f6f06a4fbcebcbd12b61ddff63b6698c05c626a9012ea3dbb2ca77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXY4U6GR%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIBgdCy0vUfYbtAQaE%2FySq0HUajevY8J5fEBa5tGJDhL9AiA33CHjEkBw1JnQMjUuoooOyTPuec0rlvzGlkFJhWZYCir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMMt0RFwXA4ntgz%2BTZKtwDHopwPHVh%2BwKpC2PdDeS0Yi78JZe1E5%2F3bwLoTXh5mlhGJyOWbz%2B7Jo%2FIQmqn5TLun6QFhUwYNXQ2CSsiCYgr5LZewMSnh04gvuGIEe6kUeInBPYuN5xNySiHwlgXGq4fYjot0A%2BFlwBoeysY5iXt83ZOR4U3fZGSK4nK4hb9%2FgRP6Sz1vRi9U3gBZp%2FfH8%2BtBKxWgTmWxCRxBWNEbZarIaEAW4NrmXp7nbme6kozc6QEjNn0YyDJu7w4KegLb1XSdwFB8PDYj3bxRNVomg6LQPoxb5L0bX97A3uXtgFBKd%2BJ7Ihr83Oj5j6ySxAA8jr%2FNsJS9LT3Xm2vcnKI3vGHz2k327uS0EnVHDAyi%2Fd8W7fUcPfo2AOZ4FQXrf%2BkZi8WcxijugWAHFUQLXs2yMYHarY4NhxWqeXMgpGEczcGi9yicqAd62cW420o8W%2F3CCFsIqJyhqLV0Y2JM0ljaZmYWeYfx7GqiudW3XOvn9umWv%2BoWdPJKHH5TQfq2P2Sd3PUSg8LdJE8dUHRHbjWk75LsZlpl36a8vesxPvkiQm1S7IJXNOx6od92PBoAg1jJU1DbyzqH%2BsOiGc3nfwBOwvh6xoRx%2BT44Pw1%2BQL5tkXOU7e8QWyAxAQG4sEN59Ywu86PzAY6pgE3CpOZRWuBI3lzrVY8XXpCLSZCUcdw4uCjaKA1TmsZB6pzTg2kQ4QSSKkLZjDbr%2BtB1IpZhz%2BSeb78eWVKpjVbRtMT%2B%2BRWji2od4IUk7TYwMRvA6bYxA1UhNUESFvTZokmrBCrOqL%2Fg3aMXu8jOQHpLmWrYgU091xYNPg7HZMRQrC63dyhcuTK%2Bv%2F4vv2JD%2F5MVieVo0Qj9T8G6yfxuLuAKtOXRUIp&X-Amz-Signature=1846259b0b881b31fcca2c082bfa8e3ea4a6101dcf994eeb94709213bca013ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXY4U6GR%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIBgdCy0vUfYbtAQaE%2FySq0HUajevY8J5fEBa5tGJDhL9AiA33CHjEkBw1JnQMjUuoooOyTPuec0rlvzGlkFJhWZYCir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMMt0RFwXA4ntgz%2BTZKtwDHopwPHVh%2BwKpC2PdDeS0Yi78JZe1E5%2F3bwLoTXh5mlhGJyOWbz%2B7Jo%2FIQmqn5TLun6QFhUwYNXQ2CSsiCYgr5LZewMSnh04gvuGIEe6kUeInBPYuN5xNySiHwlgXGq4fYjot0A%2BFlwBoeysY5iXt83ZOR4U3fZGSK4nK4hb9%2FgRP6Sz1vRi9U3gBZp%2FfH8%2BtBKxWgTmWxCRxBWNEbZarIaEAW4NrmXp7nbme6kozc6QEjNn0YyDJu7w4KegLb1XSdwFB8PDYj3bxRNVomg6LQPoxb5L0bX97A3uXtgFBKd%2BJ7Ihr83Oj5j6ySxAA8jr%2FNsJS9LT3Xm2vcnKI3vGHz2k327uS0EnVHDAyi%2Fd8W7fUcPfo2AOZ4FQXrf%2BkZi8WcxijugWAHFUQLXs2yMYHarY4NhxWqeXMgpGEczcGi9yicqAd62cW420o8W%2F3CCFsIqJyhqLV0Y2JM0ljaZmYWeYfx7GqiudW3XOvn9umWv%2BoWdPJKHH5TQfq2P2Sd3PUSg8LdJE8dUHRHbjWk75LsZlpl36a8vesxPvkiQm1S7IJXNOx6od92PBoAg1jJU1DbyzqH%2BsOiGc3nfwBOwvh6xoRx%2BT44Pw1%2BQL5tkXOU7e8QWyAxAQG4sEN59Ywu86PzAY6pgE3CpOZRWuBI3lzrVY8XXpCLSZCUcdw4uCjaKA1TmsZB6pzTg2kQ4QSSKkLZjDbr%2BtB1IpZhz%2BSeb78eWVKpjVbRtMT%2B%2BRWji2od4IUk7TYwMRvA6bYxA1UhNUESFvTZokmrBCrOqL%2Fg3aMXu8jOQHpLmWrYgU091xYNPg7HZMRQrC63dyhcuTK%2Bv%2F4vv2JD%2F5MVieVo0Qj9T8G6yfxuLuAKtOXRUIp&X-Amz-Signature=72318fb3a4006daa438ecd617481948fd0cd8f312ab2666a4af25fc89523d5e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXY4U6GR%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIBgdCy0vUfYbtAQaE%2FySq0HUajevY8J5fEBa5tGJDhL9AiA33CHjEkBw1JnQMjUuoooOyTPuec0rlvzGlkFJhWZYCir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMMt0RFwXA4ntgz%2BTZKtwDHopwPHVh%2BwKpC2PdDeS0Yi78JZe1E5%2F3bwLoTXh5mlhGJyOWbz%2B7Jo%2FIQmqn5TLun6QFhUwYNXQ2CSsiCYgr5LZewMSnh04gvuGIEe6kUeInBPYuN5xNySiHwlgXGq4fYjot0A%2BFlwBoeysY5iXt83ZOR4U3fZGSK4nK4hb9%2FgRP6Sz1vRi9U3gBZp%2FfH8%2BtBKxWgTmWxCRxBWNEbZarIaEAW4NrmXp7nbme6kozc6QEjNn0YyDJu7w4KegLb1XSdwFB8PDYj3bxRNVomg6LQPoxb5L0bX97A3uXtgFBKd%2BJ7Ihr83Oj5j6ySxAA8jr%2FNsJS9LT3Xm2vcnKI3vGHz2k327uS0EnVHDAyi%2Fd8W7fUcPfo2AOZ4FQXrf%2BkZi8WcxijugWAHFUQLXs2yMYHarY4NhxWqeXMgpGEczcGi9yicqAd62cW420o8W%2F3CCFsIqJyhqLV0Y2JM0ljaZmYWeYfx7GqiudW3XOvn9umWv%2BoWdPJKHH5TQfq2P2Sd3PUSg8LdJE8dUHRHbjWk75LsZlpl36a8vesxPvkiQm1S7IJXNOx6od92PBoAg1jJU1DbyzqH%2BsOiGc3nfwBOwvh6xoRx%2BT44Pw1%2BQL5tkXOU7e8QWyAxAQG4sEN59Ywu86PzAY6pgE3CpOZRWuBI3lzrVY8XXpCLSZCUcdw4uCjaKA1TmsZB6pzTg2kQ4QSSKkLZjDbr%2BtB1IpZhz%2BSeb78eWVKpjVbRtMT%2B%2BRWji2od4IUk7TYwMRvA6bYxA1UhNUESFvTZokmrBCrOqL%2Fg3aMXu8jOQHpLmWrYgU091xYNPg7HZMRQrC63dyhcuTK%2Bv%2F4vv2JD%2F5MVieVo0Qj9T8G6yfxuLuAKtOXRUIp&X-Amz-Signature=e6c16b54fe76a14adc0ff94733915692fe189071bd5a1aa89972c47529a06cd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXY4U6GR%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIBgdCy0vUfYbtAQaE%2FySq0HUajevY8J5fEBa5tGJDhL9AiA33CHjEkBw1JnQMjUuoooOyTPuec0rlvzGlkFJhWZYCir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMMt0RFwXA4ntgz%2BTZKtwDHopwPHVh%2BwKpC2PdDeS0Yi78JZe1E5%2F3bwLoTXh5mlhGJyOWbz%2B7Jo%2FIQmqn5TLun6QFhUwYNXQ2CSsiCYgr5LZewMSnh04gvuGIEe6kUeInBPYuN5xNySiHwlgXGq4fYjot0A%2BFlwBoeysY5iXt83ZOR4U3fZGSK4nK4hb9%2FgRP6Sz1vRi9U3gBZp%2FfH8%2BtBKxWgTmWxCRxBWNEbZarIaEAW4NrmXp7nbme6kozc6QEjNn0YyDJu7w4KegLb1XSdwFB8PDYj3bxRNVomg6LQPoxb5L0bX97A3uXtgFBKd%2BJ7Ihr83Oj5j6ySxAA8jr%2FNsJS9LT3Xm2vcnKI3vGHz2k327uS0EnVHDAyi%2Fd8W7fUcPfo2AOZ4FQXrf%2BkZi8WcxijugWAHFUQLXs2yMYHarY4NhxWqeXMgpGEczcGi9yicqAd62cW420o8W%2F3CCFsIqJyhqLV0Y2JM0ljaZmYWeYfx7GqiudW3XOvn9umWv%2BoWdPJKHH5TQfq2P2Sd3PUSg8LdJE8dUHRHbjWk75LsZlpl36a8vesxPvkiQm1S7IJXNOx6od92PBoAg1jJU1DbyzqH%2BsOiGc3nfwBOwvh6xoRx%2BT44Pw1%2BQL5tkXOU7e8QWyAxAQG4sEN59Ywu86PzAY6pgE3CpOZRWuBI3lzrVY8XXpCLSZCUcdw4uCjaKA1TmsZB6pzTg2kQ4QSSKkLZjDbr%2BtB1IpZhz%2BSeb78eWVKpjVbRtMT%2B%2BRWji2od4IUk7TYwMRvA6bYxA1UhNUESFvTZokmrBCrOqL%2Fg3aMXu8jOQHpLmWrYgU091xYNPg7HZMRQrC63dyhcuTK%2Bv%2F4vv2JD%2F5MVieVo0Qj9T8G6yfxuLuAKtOXRUIp&X-Amz-Signature=442031e95b50b2958b2bed7f1275ab9e3b3130ab11a36fa6bf27421f91cde90a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXY4U6GR%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIBgdCy0vUfYbtAQaE%2FySq0HUajevY8J5fEBa5tGJDhL9AiA33CHjEkBw1JnQMjUuoooOyTPuec0rlvzGlkFJhWZYCir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMMt0RFwXA4ntgz%2BTZKtwDHopwPHVh%2BwKpC2PdDeS0Yi78JZe1E5%2F3bwLoTXh5mlhGJyOWbz%2B7Jo%2FIQmqn5TLun6QFhUwYNXQ2CSsiCYgr5LZewMSnh04gvuGIEe6kUeInBPYuN5xNySiHwlgXGq4fYjot0A%2BFlwBoeysY5iXt83ZOR4U3fZGSK4nK4hb9%2FgRP6Sz1vRi9U3gBZp%2FfH8%2BtBKxWgTmWxCRxBWNEbZarIaEAW4NrmXp7nbme6kozc6QEjNn0YyDJu7w4KegLb1XSdwFB8PDYj3bxRNVomg6LQPoxb5L0bX97A3uXtgFBKd%2BJ7Ihr83Oj5j6ySxAA8jr%2FNsJS9LT3Xm2vcnKI3vGHz2k327uS0EnVHDAyi%2Fd8W7fUcPfo2AOZ4FQXrf%2BkZi8WcxijugWAHFUQLXs2yMYHarY4NhxWqeXMgpGEczcGi9yicqAd62cW420o8W%2F3CCFsIqJyhqLV0Y2JM0ljaZmYWeYfx7GqiudW3XOvn9umWv%2BoWdPJKHH5TQfq2P2Sd3PUSg8LdJE8dUHRHbjWk75LsZlpl36a8vesxPvkiQm1S7IJXNOx6od92PBoAg1jJU1DbyzqH%2BsOiGc3nfwBOwvh6xoRx%2BT44Pw1%2BQL5tkXOU7e8QWyAxAQG4sEN59Ywu86PzAY6pgE3CpOZRWuBI3lzrVY8XXpCLSZCUcdw4uCjaKA1TmsZB6pzTg2kQ4QSSKkLZjDbr%2BtB1IpZhz%2BSeb78eWVKpjVbRtMT%2B%2BRWji2od4IUk7TYwMRvA6bYxA1UhNUESFvTZokmrBCrOqL%2Fg3aMXu8jOQHpLmWrYgU091xYNPg7HZMRQrC63dyhcuTK%2Bv%2F4vv2JD%2F5MVieVo0Qj9T8G6yfxuLuAKtOXRUIp&X-Amz-Signature=961f5ece46a4505741ff914deccc24a16d916b111ac371735dc4e5107c7c100c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXY4U6GR%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIBgdCy0vUfYbtAQaE%2FySq0HUajevY8J5fEBa5tGJDhL9AiA33CHjEkBw1JnQMjUuoooOyTPuec0rlvzGlkFJhWZYCir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMMt0RFwXA4ntgz%2BTZKtwDHopwPHVh%2BwKpC2PdDeS0Yi78JZe1E5%2F3bwLoTXh5mlhGJyOWbz%2B7Jo%2FIQmqn5TLun6QFhUwYNXQ2CSsiCYgr5LZewMSnh04gvuGIEe6kUeInBPYuN5xNySiHwlgXGq4fYjot0A%2BFlwBoeysY5iXt83ZOR4U3fZGSK4nK4hb9%2FgRP6Sz1vRi9U3gBZp%2FfH8%2BtBKxWgTmWxCRxBWNEbZarIaEAW4NrmXp7nbme6kozc6QEjNn0YyDJu7w4KegLb1XSdwFB8PDYj3bxRNVomg6LQPoxb5L0bX97A3uXtgFBKd%2BJ7Ihr83Oj5j6ySxAA8jr%2FNsJS9LT3Xm2vcnKI3vGHz2k327uS0EnVHDAyi%2Fd8W7fUcPfo2AOZ4FQXrf%2BkZi8WcxijugWAHFUQLXs2yMYHarY4NhxWqeXMgpGEczcGi9yicqAd62cW420o8W%2F3CCFsIqJyhqLV0Y2JM0ljaZmYWeYfx7GqiudW3XOvn9umWv%2BoWdPJKHH5TQfq2P2Sd3PUSg8LdJE8dUHRHbjWk75LsZlpl36a8vesxPvkiQm1S7IJXNOx6od92PBoAg1jJU1DbyzqH%2BsOiGc3nfwBOwvh6xoRx%2BT44Pw1%2BQL5tkXOU7e8QWyAxAQG4sEN59Ywu86PzAY6pgE3CpOZRWuBI3lzrVY8XXpCLSZCUcdw4uCjaKA1TmsZB6pzTg2kQ4QSSKkLZjDbr%2BtB1IpZhz%2BSeb78eWVKpjVbRtMT%2B%2BRWji2od4IUk7TYwMRvA6bYxA1UhNUESFvTZokmrBCrOqL%2Fg3aMXu8jOQHpLmWrYgU091xYNPg7HZMRQrC63dyhcuTK%2Bv%2F4vv2JD%2F5MVieVo0Qj9T8G6yfxuLuAKtOXRUIp&X-Amz-Signature=4aced2d2d7bbb32bdb2fe6e3fb6c01d3b9db6897232d768347703791f85820de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXY4U6GR%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIBgdCy0vUfYbtAQaE%2FySq0HUajevY8J5fEBa5tGJDhL9AiA33CHjEkBw1JnQMjUuoooOyTPuec0rlvzGlkFJhWZYCir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMMt0RFwXA4ntgz%2BTZKtwDHopwPHVh%2BwKpC2PdDeS0Yi78JZe1E5%2F3bwLoTXh5mlhGJyOWbz%2B7Jo%2FIQmqn5TLun6QFhUwYNXQ2CSsiCYgr5LZewMSnh04gvuGIEe6kUeInBPYuN5xNySiHwlgXGq4fYjot0A%2BFlwBoeysY5iXt83ZOR4U3fZGSK4nK4hb9%2FgRP6Sz1vRi9U3gBZp%2FfH8%2BtBKxWgTmWxCRxBWNEbZarIaEAW4NrmXp7nbme6kozc6QEjNn0YyDJu7w4KegLb1XSdwFB8PDYj3bxRNVomg6LQPoxb5L0bX97A3uXtgFBKd%2BJ7Ihr83Oj5j6ySxAA8jr%2FNsJS9LT3Xm2vcnKI3vGHz2k327uS0EnVHDAyi%2Fd8W7fUcPfo2AOZ4FQXrf%2BkZi8WcxijugWAHFUQLXs2yMYHarY4NhxWqeXMgpGEczcGi9yicqAd62cW420o8W%2F3CCFsIqJyhqLV0Y2JM0ljaZmYWeYfx7GqiudW3XOvn9umWv%2BoWdPJKHH5TQfq2P2Sd3PUSg8LdJE8dUHRHbjWk75LsZlpl36a8vesxPvkiQm1S7IJXNOx6od92PBoAg1jJU1DbyzqH%2BsOiGc3nfwBOwvh6xoRx%2BT44Pw1%2BQL5tkXOU7e8QWyAxAQG4sEN59Ywu86PzAY6pgE3CpOZRWuBI3lzrVY8XXpCLSZCUcdw4uCjaKA1TmsZB6pzTg2kQ4QSSKkLZjDbr%2BtB1IpZhz%2BSeb78eWVKpjVbRtMT%2B%2BRWji2od4IUk7TYwMRvA6bYxA1UhNUESFvTZokmrBCrOqL%2Fg3aMXu8jOQHpLmWrYgU091xYNPg7HZMRQrC63dyhcuTK%2Bv%2F4vv2JD%2F5MVieVo0Qj9T8G6yfxuLuAKtOXRUIp&X-Amz-Signature=5b911ebce486f5d6bb38cd44b401c2d0263615b379ef690a28c87e3326cbafbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXY4U6GR%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIBgdCy0vUfYbtAQaE%2FySq0HUajevY8J5fEBa5tGJDhL9AiA33CHjEkBw1JnQMjUuoooOyTPuec0rlvzGlkFJhWZYCir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMMt0RFwXA4ntgz%2BTZKtwDHopwPHVh%2BwKpC2PdDeS0Yi78JZe1E5%2F3bwLoTXh5mlhGJyOWbz%2B7Jo%2FIQmqn5TLun6QFhUwYNXQ2CSsiCYgr5LZewMSnh04gvuGIEe6kUeInBPYuN5xNySiHwlgXGq4fYjot0A%2BFlwBoeysY5iXt83ZOR4U3fZGSK4nK4hb9%2FgRP6Sz1vRi9U3gBZp%2FfH8%2BtBKxWgTmWxCRxBWNEbZarIaEAW4NrmXp7nbme6kozc6QEjNn0YyDJu7w4KegLb1XSdwFB8PDYj3bxRNVomg6LQPoxb5L0bX97A3uXtgFBKd%2BJ7Ihr83Oj5j6ySxAA8jr%2FNsJS9LT3Xm2vcnKI3vGHz2k327uS0EnVHDAyi%2Fd8W7fUcPfo2AOZ4FQXrf%2BkZi8WcxijugWAHFUQLXs2yMYHarY4NhxWqeXMgpGEczcGi9yicqAd62cW420o8W%2F3CCFsIqJyhqLV0Y2JM0ljaZmYWeYfx7GqiudW3XOvn9umWv%2BoWdPJKHH5TQfq2P2Sd3PUSg8LdJE8dUHRHbjWk75LsZlpl36a8vesxPvkiQm1S7IJXNOx6od92PBoAg1jJU1DbyzqH%2BsOiGc3nfwBOwvh6xoRx%2BT44Pw1%2BQL5tkXOU7e8QWyAxAQG4sEN59Ywu86PzAY6pgE3CpOZRWuBI3lzrVY8XXpCLSZCUcdw4uCjaKA1TmsZB6pzTg2kQ4QSSKkLZjDbr%2BtB1IpZhz%2BSeb78eWVKpjVbRtMT%2B%2BRWji2od4IUk7TYwMRvA6bYxA1UhNUESFvTZokmrBCrOqL%2Fg3aMXu8jOQHpLmWrYgU091xYNPg7HZMRQrC63dyhcuTK%2Bv%2F4vv2JD%2F5MVieVo0Qj9T8G6yfxuLuAKtOXRUIp&X-Amz-Signature=8e2790cc01d24b95f0aadf89c297eaf2cb6d38511b339fa300ea16105b0be185&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXY4U6GR%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIBgdCy0vUfYbtAQaE%2FySq0HUajevY8J5fEBa5tGJDhL9AiA33CHjEkBw1JnQMjUuoooOyTPuec0rlvzGlkFJhWZYCir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMMt0RFwXA4ntgz%2BTZKtwDHopwPHVh%2BwKpC2PdDeS0Yi78JZe1E5%2F3bwLoTXh5mlhGJyOWbz%2B7Jo%2FIQmqn5TLun6QFhUwYNXQ2CSsiCYgr5LZewMSnh04gvuGIEe6kUeInBPYuN5xNySiHwlgXGq4fYjot0A%2BFlwBoeysY5iXt83ZOR4U3fZGSK4nK4hb9%2FgRP6Sz1vRi9U3gBZp%2FfH8%2BtBKxWgTmWxCRxBWNEbZarIaEAW4NrmXp7nbme6kozc6QEjNn0YyDJu7w4KegLb1XSdwFB8PDYj3bxRNVomg6LQPoxb5L0bX97A3uXtgFBKd%2BJ7Ihr83Oj5j6ySxAA8jr%2FNsJS9LT3Xm2vcnKI3vGHz2k327uS0EnVHDAyi%2Fd8W7fUcPfo2AOZ4FQXrf%2BkZi8WcxijugWAHFUQLXs2yMYHarY4NhxWqeXMgpGEczcGi9yicqAd62cW420o8W%2F3CCFsIqJyhqLV0Y2JM0ljaZmYWeYfx7GqiudW3XOvn9umWv%2BoWdPJKHH5TQfq2P2Sd3PUSg8LdJE8dUHRHbjWk75LsZlpl36a8vesxPvkiQm1S7IJXNOx6od92PBoAg1jJU1DbyzqH%2BsOiGc3nfwBOwvh6xoRx%2BT44Pw1%2BQL5tkXOU7e8QWyAxAQG4sEN59Ywu86PzAY6pgE3CpOZRWuBI3lzrVY8XXpCLSZCUcdw4uCjaKA1TmsZB6pzTg2kQ4QSSKkLZjDbr%2BtB1IpZhz%2BSeb78eWVKpjVbRtMT%2B%2BRWji2od4IUk7TYwMRvA6bYxA1UhNUESFvTZokmrBCrOqL%2Fg3aMXu8jOQHpLmWrYgU091xYNPg7HZMRQrC63dyhcuTK%2Bv%2F4vv2JD%2F5MVieVo0Qj9T8G6yfxuLuAKtOXRUIp&X-Amz-Signature=95913104108642364b7485661c76c6c82ee28f8d33754666ef7f2f387028e13f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXY4U6GR%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIBgdCy0vUfYbtAQaE%2FySq0HUajevY8J5fEBa5tGJDhL9AiA33CHjEkBw1JnQMjUuoooOyTPuec0rlvzGlkFJhWZYCir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMMt0RFwXA4ntgz%2BTZKtwDHopwPHVh%2BwKpC2PdDeS0Yi78JZe1E5%2F3bwLoTXh5mlhGJyOWbz%2B7Jo%2FIQmqn5TLun6QFhUwYNXQ2CSsiCYgr5LZewMSnh04gvuGIEe6kUeInBPYuN5xNySiHwlgXGq4fYjot0A%2BFlwBoeysY5iXt83ZOR4U3fZGSK4nK4hb9%2FgRP6Sz1vRi9U3gBZp%2FfH8%2BtBKxWgTmWxCRxBWNEbZarIaEAW4NrmXp7nbme6kozc6QEjNn0YyDJu7w4KegLb1XSdwFB8PDYj3bxRNVomg6LQPoxb5L0bX97A3uXtgFBKd%2BJ7Ihr83Oj5j6ySxAA8jr%2FNsJS9LT3Xm2vcnKI3vGHz2k327uS0EnVHDAyi%2Fd8W7fUcPfo2AOZ4FQXrf%2BkZi8WcxijugWAHFUQLXs2yMYHarY4NhxWqeXMgpGEczcGi9yicqAd62cW420o8W%2F3CCFsIqJyhqLV0Y2JM0ljaZmYWeYfx7GqiudW3XOvn9umWv%2BoWdPJKHH5TQfq2P2Sd3PUSg8LdJE8dUHRHbjWk75LsZlpl36a8vesxPvkiQm1S7IJXNOx6od92PBoAg1jJU1DbyzqH%2BsOiGc3nfwBOwvh6xoRx%2BT44Pw1%2BQL5tkXOU7e8QWyAxAQG4sEN59Ywu86PzAY6pgE3CpOZRWuBI3lzrVY8XXpCLSZCUcdw4uCjaKA1TmsZB6pzTg2kQ4QSSKkLZjDbr%2BtB1IpZhz%2BSeb78eWVKpjVbRtMT%2B%2BRWji2od4IUk7TYwMRvA6bYxA1UhNUESFvTZokmrBCrOqL%2Fg3aMXu8jOQHpLmWrYgU091xYNPg7HZMRQrC63dyhcuTK%2Bv%2F4vv2JD%2F5MVieVo0Qj9T8G6yfxuLuAKtOXRUIp&X-Amz-Signature=d18c1958f76631687ffe3ddf5cba79c8abdc6947ef868f376989036ccd95d8e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXY4U6GR%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIBgdCy0vUfYbtAQaE%2FySq0HUajevY8J5fEBa5tGJDhL9AiA33CHjEkBw1JnQMjUuoooOyTPuec0rlvzGlkFJhWZYCir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMMt0RFwXA4ntgz%2BTZKtwDHopwPHVh%2BwKpC2PdDeS0Yi78JZe1E5%2F3bwLoTXh5mlhGJyOWbz%2B7Jo%2FIQmqn5TLun6QFhUwYNXQ2CSsiCYgr5LZewMSnh04gvuGIEe6kUeInBPYuN5xNySiHwlgXGq4fYjot0A%2BFlwBoeysY5iXt83ZOR4U3fZGSK4nK4hb9%2FgRP6Sz1vRi9U3gBZp%2FfH8%2BtBKxWgTmWxCRxBWNEbZarIaEAW4NrmXp7nbme6kozc6QEjNn0YyDJu7w4KegLb1XSdwFB8PDYj3bxRNVomg6LQPoxb5L0bX97A3uXtgFBKd%2BJ7Ihr83Oj5j6ySxAA8jr%2FNsJS9LT3Xm2vcnKI3vGHz2k327uS0EnVHDAyi%2Fd8W7fUcPfo2AOZ4FQXrf%2BkZi8WcxijugWAHFUQLXs2yMYHarY4NhxWqeXMgpGEczcGi9yicqAd62cW420o8W%2F3CCFsIqJyhqLV0Y2JM0ljaZmYWeYfx7GqiudW3XOvn9umWv%2BoWdPJKHH5TQfq2P2Sd3PUSg8LdJE8dUHRHbjWk75LsZlpl36a8vesxPvkiQm1S7IJXNOx6od92PBoAg1jJU1DbyzqH%2BsOiGc3nfwBOwvh6xoRx%2BT44Pw1%2BQL5tkXOU7e8QWyAxAQG4sEN59Ywu86PzAY6pgE3CpOZRWuBI3lzrVY8XXpCLSZCUcdw4uCjaKA1TmsZB6pzTg2kQ4QSSKkLZjDbr%2BtB1IpZhz%2BSeb78eWVKpjVbRtMT%2B%2BRWji2od4IUk7TYwMRvA6bYxA1UhNUESFvTZokmrBCrOqL%2Fg3aMXu8jOQHpLmWrYgU091xYNPg7HZMRQrC63dyhcuTK%2Bv%2F4vv2JD%2F5MVieVo0Qj9T8G6yfxuLuAKtOXRUIp&X-Amz-Signature=5a2e61c2eaa159492d71e2a9dbf5a5ab710ca0249a87c1622db29a7dfb0c46aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXY4U6GR%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIBgdCy0vUfYbtAQaE%2FySq0HUajevY8J5fEBa5tGJDhL9AiA33CHjEkBw1JnQMjUuoooOyTPuec0rlvzGlkFJhWZYCir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMMt0RFwXA4ntgz%2BTZKtwDHopwPHVh%2BwKpC2PdDeS0Yi78JZe1E5%2F3bwLoTXh5mlhGJyOWbz%2B7Jo%2FIQmqn5TLun6QFhUwYNXQ2CSsiCYgr5LZewMSnh04gvuGIEe6kUeInBPYuN5xNySiHwlgXGq4fYjot0A%2BFlwBoeysY5iXt83ZOR4U3fZGSK4nK4hb9%2FgRP6Sz1vRi9U3gBZp%2FfH8%2BtBKxWgTmWxCRxBWNEbZarIaEAW4NrmXp7nbme6kozc6QEjNn0YyDJu7w4KegLb1XSdwFB8PDYj3bxRNVomg6LQPoxb5L0bX97A3uXtgFBKd%2BJ7Ihr83Oj5j6ySxAA8jr%2FNsJS9LT3Xm2vcnKI3vGHz2k327uS0EnVHDAyi%2Fd8W7fUcPfo2AOZ4FQXrf%2BkZi8WcxijugWAHFUQLXs2yMYHarY4NhxWqeXMgpGEczcGi9yicqAd62cW420o8W%2F3CCFsIqJyhqLV0Y2JM0ljaZmYWeYfx7GqiudW3XOvn9umWv%2BoWdPJKHH5TQfq2P2Sd3PUSg8LdJE8dUHRHbjWk75LsZlpl36a8vesxPvkiQm1S7IJXNOx6od92PBoAg1jJU1DbyzqH%2BsOiGc3nfwBOwvh6xoRx%2BT44Pw1%2BQL5tkXOU7e8QWyAxAQG4sEN59Ywu86PzAY6pgE3CpOZRWuBI3lzrVY8XXpCLSZCUcdw4uCjaKA1TmsZB6pzTg2kQ4QSSKkLZjDbr%2BtB1IpZhz%2BSeb78eWVKpjVbRtMT%2B%2BRWji2od4IUk7TYwMRvA6bYxA1UhNUESFvTZokmrBCrOqL%2Fg3aMXu8jOQHpLmWrYgU091xYNPg7HZMRQrC63dyhcuTK%2Bv%2F4vv2JD%2F5MVieVo0Qj9T8G6yfxuLuAKtOXRUIp&X-Amz-Signature=9dc07569a3f11cad09793e4ec62a6e037e54492f694dd506b8438aebb0bac411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXY4U6GR%2F20260205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260205T020734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIBgdCy0vUfYbtAQaE%2FySq0HUajevY8J5fEBa5tGJDhL9AiA33CHjEkBw1JnQMjUuoooOyTPuec0rlvzGlkFJhWZYCir%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMMt0RFwXA4ntgz%2BTZKtwDHopwPHVh%2BwKpC2PdDeS0Yi78JZe1E5%2F3bwLoTXh5mlhGJyOWbz%2B7Jo%2FIQmqn5TLun6QFhUwYNXQ2CSsiCYgr5LZewMSnh04gvuGIEe6kUeInBPYuN5xNySiHwlgXGq4fYjot0A%2BFlwBoeysY5iXt83ZOR4U3fZGSK4nK4hb9%2FgRP6Sz1vRi9U3gBZp%2FfH8%2BtBKxWgTmWxCRxBWNEbZarIaEAW4NrmXp7nbme6kozc6QEjNn0YyDJu7w4KegLb1XSdwFB8PDYj3bxRNVomg6LQPoxb5L0bX97A3uXtgFBKd%2BJ7Ihr83Oj5j6ySxAA8jr%2FNsJS9LT3Xm2vcnKI3vGHz2k327uS0EnVHDAyi%2Fd8W7fUcPfo2AOZ4FQXrf%2BkZi8WcxijugWAHFUQLXs2yMYHarY4NhxWqeXMgpGEczcGi9yicqAd62cW420o8W%2F3CCFsIqJyhqLV0Y2JM0ljaZmYWeYfx7GqiudW3XOvn9umWv%2BoWdPJKHH5TQfq2P2Sd3PUSg8LdJE8dUHRHbjWk75LsZlpl36a8vesxPvkiQm1S7IJXNOx6od92PBoAg1jJU1DbyzqH%2BsOiGc3nfwBOwvh6xoRx%2BT44Pw1%2BQL5tkXOU7e8QWyAxAQG4sEN59Ywu86PzAY6pgE3CpOZRWuBI3lzrVY8XXpCLSZCUcdw4uCjaKA1TmsZB6pzTg2kQ4QSSKkLZjDbr%2BtB1IpZhz%2BSeb78eWVKpjVbRtMT%2B%2BRWji2od4IUk7TYwMRvA6bYxA1UhNUESFvTZokmrBCrOqL%2Fg3aMXu8jOQHpLmWrYgU091xYNPg7HZMRQrC63dyhcuTK%2Bv%2F4vv2JD%2F5MVieVo0Qj9T8G6yfxuLuAKtOXRUIp&X-Amz-Signature=848a55a9bdd68100a94a2f7586569a597427c0ba3d0bf1ccbef9a2d678ed0ad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
