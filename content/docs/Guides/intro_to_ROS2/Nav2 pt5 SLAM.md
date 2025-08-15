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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB2ONWV3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCDOjy9pb87VjhZCVC5jIoO%2FhPTsIs%2B0I%2F9NYxMf%2F3uaAIgBaBCUIWnLWzg8maGJ%2F6IZ8A7%2Fw4dsLPhTCpAugZHpfYq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDITlpbgeqD1Lgef1JircAxMswPZa0IcILvLEmyXKN03Chkq%2BintbL%2FJq1%2BTFRqSRt%2BS0GmrCBmB4RiKLEkUoscT2ICWjeIkEsIpPloGnLCcxaQn3o4rymvT0lmAIHB%2FcjYSYt8rvwLyqQRRspXl%2BMBnVcbuc5%2FwsVLx0WsJlrWVqbbay5dRqu9BjUxRz8MCNSn6ATI5qo9JkC0KvSgDTDuouyvCwBDxvFPX7GcOC8L1L2TTHWZ7MAsym3e5uDDY%2BqM0sK54dFDpJhLCx0D3DOFywG%2BE%2F6vip%2F82R7T0n3UxplttCipUeSG2uhIUkHQuL8CTHTofhEFPaNxVbtiqrnoUjebZ9Y4DFYT21uV3CDtVdwDgQqK%2Fu6WG83PDfKeSZAto3j3VlGR0R3Z8XD%2Bw0nIJ7sYAClaXfM8gKhggSTNwB%2BBsCOI%2BqeuNKClxDfFu5Nti1de0Ao%2Fmfn8tibKm3W6i%2FWuEQSe%2B3L4c8YTdMVtSeR6rjcWAIGk%2BL7WIWdWYbgA%2B95CK9muJ0SVtQQfsQ%2BAc9VQSQEHWk5d4BvKbanteJo5NH1ZGw2Mi7Pazg4P%2ByeF%2FrhFWvhApfArLsrJR3j2ooiEROEerWZD7NhwOrOp%2BsE29KNg02pV0wNi7zNux9WNo0nY0rfTDk3DSOMO6i%2B8QGOqUBtjGb86Iwzrh8KeCJa3Osge2lOpay9mE25u3AF05cDpCvA4O1pAssFB5JaNcdmP3bA7koHe0dvuZgM5Q%2FhER3Uy6arYXdNmJW1sCtH3UcpMCYlIZhFJd7NBxpKpMYe%2BccpeXsv4rD8ZeZs%2FznSQ6Myfm7O7imtrUVBwJxaP03GOYwo5m85HiAZ55dTzoPD2UlrKVWH%2BqoVxAB7Ho34ccBgqEofSf%2B&X-Amz-Signature=8e5f8a0d483a64eba9711762b0e11341435d11aa41b4612725dd718ff5794475&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB2ONWV3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCDOjy9pb87VjhZCVC5jIoO%2FhPTsIs%2B0I%2F9NYxMf%2F3uaAIgBaBCUIWnLWzg8maGJ%2F6IZ8A7%2Fw4dsLPhTCpAugZHpfYq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDITlpbgeqD1Lgef1JircAxMswPZa0IcILvLEmyXKN03Chkq%2BintbL%2FJq1%2BTFRqSRt%2BS0GmrCBmB4RiKLEkUoscT2ICWjeIkEsIpPloGnLCcxaQn3o4rymvT0lmAIHB%2FcjYSYt8rvwLyqQRRspXl%2BMBnVcbuc5%2FwsVLx0WsJlrWVqbbay5dRqu9BjUxRz8MCNSn6ATI5qo9JkC0KvSgDTDuouyvCwBDxvFPX7GcOC8L1L2TTHWZ7MAsym3e5uDDY%2BqM0sK54dFDpJhLCx0D3DOFywG%2BE%2F6vip%2F82R7T0n3UxplttCipUeSG2uhIUkHQuL8CTHTofhEFPaNxVbtiqrnoUjebZ9Y4DFYT21uV3CDtVdwDgQqK%2Fu6WG83PDfKeSZAto3j3VlGR0R3Z8XD%2Bw0nIJ7sYAClaXfM8gKhggSTNwB%2BBsCOI%2BqeuNKClxDfFu5Nti1de0Ao%2Fmfn8tibKm3W6i%2FWuEQSe%2B3L4c8YTdMVtSeR6rjcWAIGk%2BL7WIWdWYbgA%2B95CK9muJ0SVtQQfsQ%2BAc9VQSQEHWk5d4BvKbanteJo5NH1ZGw2Mi7Pazg4P%2ByeF%2FrhFWvhApfArLsrJR3j2ooiEROEerWZD7NhwOrOp%2BsE29KNg02pV0wNi7zNux9WNo0nY0rfTDk3DSOMO6i%2B8QGOqUBtjGb86Iwzrh8KeCJa3Osge2lOpay9mE25u3AF05cDpCvA4O1pAssFB5JaNcdmP3bA7koHe0dvuZgM5Q%2FhER3Uy6arYXdNmJW1sCtH3UcpMCYlIZhFJd7NBxpKpMYe%2BccpeXsv4rD8ZeZs%2FznSQ6Myfm7O7imtrUVBwJxaP03GOYwo5m85HiAZ55dTzoPD2UlrKVWH%2BqoVxAB7Ho34ccBgqEofSf%2B&X-Amz-Signature=5ddc9dbe11ae0730cb44ec2dc06364902ed605ecd8006a906a7e96f6ef9631ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB2ONWV3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCDOjy9pb87VjhZCVC5jIoO%2FhPTsIs%2B0I%2F9NYxMf%2F3uaAIgBaBCUIWnLWzg8maGJ%2F6IZ8A7%2Fw4dsLPhTCpAugZHpfYq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDITlpbgeqD1Lgef1JircAxMswPZa0IcILvLEmyXKN03Chkq%2BintbL%2FJq1%2BTFRqSRt%2BS0GmrCBmB4RiKLEkUoscT2ICWjeIkEsIpPloGnLCcxaQn3o4rymvT0lmAIHB%2FcjYSYt8rvwLyqQRRspXl%2BMBnVcbuc5%2FwsVLx0WsJlrWVqbbay5dRqu9BjUxRz8MCNSn6ATI5qo9JkC0KvSgDTDuouyvCwBDxvFPX7GcOC8L1L2TTHWZ7MAsym3e5uDDY%2BqM0sK54dFDpJhLCx0D3DOFywG%2BE%2F6vip%2F82R7T0n3UxplttCipUeSG2uhIUkHQuL8CTHTofhEFPaNxVbtiqrnoUjebZ9Y4DFYT21uV3CDtVdwDgQqK%2Fu6WG83PDfKeSZAto3j3VlGR0R3Z8XD%2Bw0nIJ7sYAClaXfM8gKhggSTNwB%2BBsCOI%2BqeuNKClxDfFu5Nti1de0Ao%2Fmfn8tibKm3W6i%2FWuEQSe%2B3L4c8YTdMVtSeR6rjcWAIGk%2BL7WIWdWYbgA%2B95CK9muJ0SVtQQfsQ%2BAc9VQSQEHWk5d4BvKbanteJo5NH1ZGw2Mi7Pazg4P%2ByeF%2FrhFWvhApfArLsrJR3j2ooiEROEerWZD7NhwOrOp%2BsE29KNg02pV0wNi7zNux9WNo0nY0rfTDk3DSOMO6i%2B8QGOqUBtjGb86Iwzrh8KeCJa3Osge2lOpay9mE25u3AF05cDpCvA4O1pAssFB5JaNcdmP3bA7koHe0dvuZgM5Q%2FhER3Uy6arYXdNmJW1sCtH3UcpMCYlIZhFJd7NBxpKpMYe%2BccpeXsv4rD8ZeZs%2FznSQ6Myfm7O7imtrUVBwJxaP03GOYwo5m85HiAZ55dTzoPD2UlrKVWH%2BqoVxAB7Ho34ccBgqEofSf%2B&X-Amz-Signature=fcd43c05fb7a0a34cbf850579bfd697a7d4a67ec2dfc27011c9f65c9f7710224&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB2ONWV3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCDOjy9pb87VjhZCVC5jIoO%2FhPTsIs%2B0I%2F9NYxMf%2F3uaAIgBaBCUIWnLWzg8maGJ%2F6IZ8A7%2Fw4dsLPhTCpAugZHpfYq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDITlpbgeqD1Lgef1JircAxMswPZa0IcILvLEmyXKN03Chkq%2BintbL%2FJq1%2BTFRqSRt%2BS0GmrCBmB4RiKLEkUoscT2ICWjeIkEsIpPloGnLCcxaQn3o4rymvT0lmAIHB%2FcjYSYt8rvwLyqQRRspXl%2BMBnVcbuc5%2FwsVLx0WsJlrWVqbbay5dRqu9BjUxRz8MCNSn6ATI5qo9JkC0KvSgDTDuouyvCwBDxvFPX7GcOC8L1L2TTHWZ7MAsym3e5uDDY%2BqM0sK54dFDpJhLCx0D3DOFywG%2BE%2F6vip%2F82R7T0n3UxplttCipUeSG2uhIUkHQuL8CTHTofhEFPaNxVbtiqrnoUjebZ9Y4DFYT21uV3CDtVdwDgQqK%2Fu6WG83PDfKeSZAto3j3VlGR0R3Z8XD%2Bw0nIJ7sYAClaXfM8gKhggSTNwB%2BBsCOI%2BqeuNKClxDfFu5Nti1de0Ao%2Fmfn8tibKm3W6i%2FWuEQSe%2B3L4c8YTdMVtSeR6rjcWAIGk%2BL7WIWdWYbgA%2B95CK9muJ0SVtQQfsQ%2BAc9VQSQEHWk5d4BvKbanteJo5NH1ZGw2Mi7Pazg4P%2ByeF%2FrhFWvhApfArLsrJR3j2ooiEROEerWZD7NhwOrOp%2BsE29KNg02pV0wNi7zNux9WNo0nY0rfTDk3DSOMO6i%2B8QGOqUBtjGb86Iwzrh8KeCJa3Osge2lOpay9mE25u3AF05cDpCvA4O1pAssFB5JaNcdmP3bA7koHe0dvuZgM5Q%2FhER3Uy6arYXdNmJW1sCtH3UcpMCYlIZhFJd7NBxpKpMYe%2BccpeXsv4rD8ZeZs%2FznSQ6Myfm7O7imtrUVBwJxaP03GOYwo5m85HiAZ55dTzoPD2UlrKVWH%2BqoVxAB7Ho34ccBgqEofSf%2B&X-Amz-Signature=3f228937d6d50a60741a3376877e4d55c1280ba749aca621521d376e6373311d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB2ONWV3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCDOjy9pb87VjhZCVC5jIoO%2FhPTsIs%2B0I%2F9NYxMf%2F3uaAIgBaBCUIWnLWzg8maGJ%2F6IZ8A7%2Fw4dsLPhTCpAugZHpfYq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDITlpbgeqD1Lgef1JircAxMswPZa0IcILvLEmyXKN03Chkq%2BintbL%2FJq1%2BTFRqSRt%2BS0GmrCBmB4RiKLEkUoscT2ICWjeIkEsIpPloGnLCcxaQn3o4rymvT0lmAIHB%2FcjYSYt8rvwLyqQRRspXl%2BMBnVcbuc5%2FwsVLx0WsJlrWVqbbay5dRqu9BjUxRz8MCNSn6ATI5qo9JkC0KvSgDTDuouyvCwBDxvFPX7GcOC8L1L2TTHWZ7MAsym3e5uDDY%2BqM0sK54dFDpJhLCx0D3DOFywG%2BE%2F6vip%2F82R7T0n3UxplttCipUeSG2uhIUkHQuL8CTHTofhEFPaNxVbtiqrnoUjebZ9Y4DFYT21uV3CDtVdwDgQqK%2Fu6WG83PDfKeSZAto3j3VlGR0R3Z8XD%2Bw0nIJ7sYAClaXfM8gKhggSTNwB%2BBsCOI%2BqeuNKClxDfFu5Nti1de0Ao%2Fmfn8tibKm3W6i%2FWuEQSe%2B3L4c8YTdMVtSeR6rjcWAIGk%2BL7WIWdWYbgA%2B95CK9muJ0SVtQQfsQ%2BAc9VQSQEHWk5d4BvKbanteJo5NH1ZGw2Mi7Pazg4P%2ByeF%2FrhFWvhApfArLsrJR3j2ooiEROEerWZD7NhwOrOp%2BsE29KNg02pV0wNi7zNux9WNo0nY0rfTDk3DSOMO6i%2B8QGOqUBtjGb86Iwzrh8KeCJa3Osge2lOpay9mE25u3AF05cDpCvA4O1pAssFB5JaNcdmP3bA7koHe0dvuZgM5Q%2FhER3Uy6arYXdNmJW1sCtH3UcpMCYlIZhFJd7NBxpKpMYe%2BccpeXsv4rD8ZeZs%2FznSQ6Myfm7O7imtrUVBwJxaP03GOYwo5m85HiAZ55dTzoPD2UlrKVWH%2BqoVxAB7Ho34ccBgqEofSf%2B&X-Amz-Signature=919536c84bb7f71f9cfbfe5a7dee8d004ee03a06ebf699e55bdea775eda2e812&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB2ONWV3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCDOjy9pb87VjhZCVC5jIoO%2FhPTsIs%2B0I%2F9NYxMf%2F3uaAIgBaBCUIWnLWzg8maGJ%2F6IZ8A7%2Fw4dsLPhTCpAugZHpfYq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDITlpbgeqD1Lgef1JircAxMswPZa0IcILvLEmyXKN03Chkq%2BintbL%2FJq1%2BTFRqSRt%2BS0GmrCBmB4RiKLEkUoscT2ICWjeIkEsIpPloGnLCcxaQn3o4rymvT0lmAIHB%2FcjYSYt8rvwLyqQRRspXl%2BMBnVcbuc5%2FwsVLx0WsJlrWVqbbay5dRqu9BjUxRz8MCNSn6ATI5qo9JkC0KvSgDTDuouyvCwBDxvFPX7GcOC8L1L2TTHWZ7MAsym3e5uDDY%2BqM0sK54dFDpJhLCx0D3DOFywG%2BE%2F6vip%2F82R7T0n3UxplttCipUeSG2uhIUkHQuL8CTHTofhEFPaNxVbtiqrnoUjebZ9Y4DFYT21uV3CDtVdwDgQqK%2Fu6WG83PDfKeSZAto3j3VlGR0R3Z8XD%2Bw0nIJ7sYAClaXfM8gKhggSTNwB%2BBsCOI%2BqeuNKClxDfFu5Nti1de0Ao%2Fmfn8tibKm3W6i%2FWuEQSe%2B3L4c8YTdMVtSeR6rjcWAIGk%2BL7WIWdWYbgA%2B95CK9muJ0SVtQQfsQ%2BAc9VQSQEHWk5d4BvKbanteJo5NH1ZGw2Mi7Pazg4P%2ByeF%2FrhFWvhApfArLsrJR3j2ooiEROEerWZD7NhwOrOp%2BsE29KNg02pV0wNi7zNux9WNo0nY0rfTDk3DSOMO6i%2B8QGOqUBtjGb86Iwzrh8KeCJa3Osge2lOpay9mE25u3AF05cDpCvA4O1pAssFB5JaNcdmP3bA7koHe0dvuZgM5Q%2FhER3Uy6arYXdNmJW1sCtH3UcpMCYlIZhFJd7NBxpKpMYe%2BccpeXsv4rD8ZeZs%2FznSQ6Myfm7O7imtrUVBwJxaP03GOYwo5m85HiAZ55dTzoPD2UlrKVWH%2BqoVxAB7Ho34ccBgqEofSf%2B&X-Amz-Signature=31fb62c8227f3c99009039c01a7b20318cc5e33fff35be10e37b878a31516e13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB2ONWV3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCDOjy9pb87VjhZCVC5jIoO%2FhPTsIs%2B0I%2F9NYxMf%2F3uaAIgBaBCUIWnLWzg8maGJ%2F6IZ8A7%2Fw4dsLPhTCpAugZHpfYq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDITlpbgeqD1Lgef1JircAxMswPZa0IcILvLEmyXKN03Chkq%2BintbL%2FJq1%2BTFRqSRt%2BS0GmrCBmB4RiKLEkUoscT2ICWjeIkEsIpPloGnLCcxaQn3o4rymvT0lmAIHB%2FcjYSYt8rvwLyqQRRspXl%2BMBnVcbuc5%2FwsVLx0WsJlrWVqbbay5dRqu9BjUxRz8MCNSn6ATI5qo9JkC0KvSgDTDuouyvCwBDxvFPX7GcOC8L1L2TTHWZ7MAsym3e5uDDY%2BqM0sK54dFDpJhLCx0D3DOFywG%2BE%2F6vip%2F82R7T0n3UxplttCipUeSG2uhIUkHQuL8CTHTofhEFPaNxVbtiqrnoUjebZ9Y4DFYT21uV3CDtVdwDgQqK%2Fu6WG83PDfKeSZAto3j3VlGR0R3Z8XD%2Bw0nIJ7sYAClaXfM8gKhggSTNwB%2BBsCOI%2BqeuNKClxDfFu5Nti1de0Ao%2Fmfn8tibKm3W6i%2FWuEQSe%2B3L4c8YTdMVtSeR6rjcWAIGk%2BL7WIWdWYbgA%2B95CK9muJ0SVtQQfsQ%2BAc9VQSQEHWk5d4BvKbanteJo5NH1ZGw2Mi7Pazg4P%2ByeF%2FrhFWvhApfArLsrJR3j2ooiEROEerWZD7NhwOrOp%2BsE29KNg02pV0wNi7zNux9WNo0nY0rfTDk3DSOMO6i%2B8QGOqUBtjGb86Iwzrh8KeCJa3Osge2lOpay9mE25u3AF05cDpCvA4O1pAssFB5JaNcdmP3bA7koHe0dvuZgM5Q%2FhER3Uy6arYXdNmJW1sCtH3UcpMCYlIZhFJd7NBxpKpMYe%2BccpeXsv4rD8ZeZs%2FznSQ6Myfm7O7imtrUVBwJxaP03GOYwo5m85HiAZ55dTzoPD2UlrKVWH%2BqoVxAB7Ho34ccBgqEofSf%2B&X-Amz-Signature=e7daaa1abcf8a1ca748e402b960cfe7140debdc8252790d391c0f202fface87a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB2ONWV3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCDOjy9pb87VjhZCVC5jIoO%2FhPTsIs%2B0I%2F9NYxMf%2F3uaAIgBaBCUIWnLWzg8maGJ%2F6IZ8A7%2Fw4dsLPhTCpAugZHpfYq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDITlpbgeqD1Lgef1JircAxMswPZa0IcILvLEmyXKN03Chkq%2BintbL%2FJq1%2BTFRqSRt%2BS0GmrCBmB4RiKLEkUoscT2ICWjeIkEsIpPloGnLCcxaQn3o4rymvT0lmAIHB%2FcjYSYt8rvwLyqQRRspXl%2BMBnVcbuc5%2FwsVLx0WsJlrWVqbbay5dRqu9BjUxRz8MCNSn6ATI5qo9JkC0KvSgDTDuouyvCwBDxvFPX7GcOC8L1L2TTHWZ7MAsym3e5uDDY%2BqM0sK54dFDpJhLCx0D3DOFywG%2BE%2F6vip%2F82R7T0n3UxplttCipUeSG2uhIUkHQuL8CTHTofhEFPaNxVbtiqrnoUjebZ9Y4DFYT21uV3CDtVdwDgQqK%2Fu6WG83PDfKeSZAto3j3VlGR0R3Z8XD%2Bw0nIJ7sYAClaXfM8gKhggSTNwB%2BBsCOI%2BqeuNKClxDfFu5Nti1de0Ao%2Fmfn8tibKm3W6i%2FWuEQSe%2B3L4c8YTdMVtSeR6rjcWAIGk%2BL7WIWdWYbgA%2B95CK9muJ0SVtQQfsQ%2BAc9VQSQEHWk5d4BvKbanteJo5NH1ZGw2Mi7Pazg4P%2ByeF%2FrhFWvhApfArLsrJR3j2ooiEROEerWZD7NhwOrOp%2BsE29KNg02pV0wNi7zNux9WNo0nY0rfTDk3DSOMO6i%2B8QGOqUBtjGb86Iwzrh8KeCJa3Osge2lOpay9mE25u3AF05cDpCvA4O1pAssFB5JaNcdmP3bA7koHe0dvuZgM5Q%2FhER3Uy6arYXdNmJW1sCtH3UcpMCYlIZhFJd7NBxpKpMYe%2BccpeXsv4rD8ZeZs%2FznSQ6Myfm7O7imtrUVBwJxaP03GOYwo5m85HiAZ55dTzoPD2UlrKVWH%2BqoVxAB7Ho34ccBgqEofSf%2B&X-Amz-Signature=7ad8e96e528a2c149dadf9400014080df4228819af36f11dad01af09aede6cbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB2ONWV3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCDOjy9pb87VjhZCVC5jIoO%2FhPTsIs%2B0I%2F9NYxMf%2F3uaAIgBaBCUIWnLWzg8maGJ%2F6IZ8A7%2Fw4dsLPhTCpAugZHpfYq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDITlpbgeqD1Lgef1JircAxMswPZa0IcILvLEmyXKN03Chkq%2BintbL%2FJq1%2BTFRqSRt%2BS0GmrCBmB4RiKLEkUoscT2ICWjeIkEsIpPloGnLCcxaQn3o4rymvT0lmAIHB%2FcjYSYt8rvwLyqQRRspXl%2BMBnVcbuc5%2FwsVLx0WsJlrWVqbbay5dRqu9BjUxRz8MCNSn6ATI5qo9JkC0KvSgDTDuouyvCwBDxvFPX7GcOC8L1L2TTHWZ7MAsym3e5uDDY%2BqM0sK54dFDpJhLCx0D3DOFywG%2BE%2F6vip%2F82R7T0n3UxplttCipUeSG2uhIUkHQuL8CTHTofhEFPaNxVbtiqrnoUjebZ9Y4DFYT21uV3CDtVdwDgQqK%2Fu6WG83PDfKeSZAto3j3VlGR0R3Z8XD%2Bw0nIJ7sYAClaXfM8gKhggSTNwB%2BBsCOI%2BqeuNKClxDfFu5Nti1de0Ao%2Fmfn8tibKm3W6i%2FWuEQSe%2B3L4c8YTdMVtSeR6rjcWAIGk%2BL7WIWdWYbgA%2B95CK9muJ0SVtQQfsQ%2BAc9VQSQEHWk5d4BvKbanteJo5NH1ZGw2Mi7Pazg4P%2ByeF%2FrhFWvhApfArLsrJR3j2ooiEROEerWZD7NhwOrOp%2BsE29KNg02pV0wNi7zNux9WNo0nY0rfTDk3DSOMO6i%2B8QGOqUBtjGb86Iwzrh8KeCJa3Osge2lOpay9mE25u3AF05cDpCvA4O1pAssFB5JaNcdmP3bA7koHe0dvuZgM5Q%2FhER3Uy6arYXdNmJW1sCtH3UcpMCYlIZhFJd7NBxpKpMYe%2BccpeXsv4rD8ZeZs%2FznSQ6Myfm7O7imtrUVBwJxaP03GOYwo5m85HiAZ55dTzoPD2UlrKVWH%2BqoVxAB7Ho34ccBgqEofSf%2B&X-Amz-Signature=3a5c53046f12a9d0ca5e01a482ea66a10ee80c75be135f3179168bb506f74fd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB2ONWV3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCDOjy9pb87VjhZCVC5jIoO%2FhPTsIs%2B0I%2F9NYxMf%2F3uaAIgBaBCUIWnLWzg8maGJ%2F6IZ8A7%2Fw4dsLPhTCpAugZHpfYq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDITlpbgeqD1Lgef1JircAxMswPZa0IcILvLEmyXKN03Chkq%2BintbL%2FJq1%2BTFRqSRt%2BS0GmrCBmB4RiKLEkUoscT2ICWjeIkEsIpPloGnLCcxaQn3o4rymvT0lmAIHB%2FcjYSYt8rvwLyqQRRspXl%2BMBnVcbuc5%2FwsVLx0WsJlrWVqbbay5dRqu9BjUxRz8MCNSn6ATI5qo9JkC0KvSgDTDuouyvCwBDxvFPX7GcOC8L1L2TTHWZ7MAsym3e5uDDY%2BqM0sK54dFDpJhLCx0D3DOFywG%2BE%2F6vip%2F82R7T0n3UxplttCipUeSG2uhIUkHQuL8CTHTofhEFPaNxVbtiqrnoUjebZ9Y4DFYT21uV3CDtVdwDgQqK%2Fu6WG83PDfKeSZAto3j3VlGR0R3Z8XD%2Bw0nIJ7sYAClaXfM8gKhggSTNwB%2BBsCOI%2BqeuNKClxDfFu5Nti1de0Ao%2Fmfn8tibKm3W6i%2FWuEQSe%2B3L4c8YTdMVtSeR6rjcWAIGk%2BL7WIWdWYbgA%2B95CK9muJ0SVtQQfsQ%2BAc9VQSQEHWk5d4BvKbanteJo5NH1ZGw2Mi7Pazg4P%2ByeF%2FrhFWvhApfArLsrJR3j2ooiEROEerWZD7NhwOrOp%2BsE29KNg02pV0wNi7zNux9WNo0nY0rfTDk3DSOMO6i%2B8QGOqUBtjGb86Iwzrh8KeCJa3Osge2lOpay9mE25u3AF05cDpCvA4O1pAssFB5JaNcdmP3bA7koHe0dvuZgM5Q%2FhER3Uy6arYXdNmJW1sCtH3UcpMCYlIZhFJd7NBxpKpMYe%2BccpeXsv4rD8ZeZs%2FznSQ6Myfm7O7imtrUVBwJxaP03GOYwo5m85HiAZ55dTzoPD2UlrKVWH%2BqoVxAB7Ho34ccBgqEofSf%2B&X-Amz-Signature=0fa442b8944f6d4cbf87f55851a325c7d8629cf7dda3dd93def230bde1b6894a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB2ONWV3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCDOjy9pb87VjhZCVC5jIoO%2FhPTsIs%2B0I%2F9NYxMf%2F3uaAIgBaBCUIWnLWzg8maGJ%2F6IZ8A7%2Fw4dsLPhTCpAugZHpfYq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDITlpbgeqD1Lgef1JircAxMswPZa0IcILvLEmyXKN03Chkq%2BintbL%2FJq1%2BTFRqSRt%2BS0GmrCBmB4RiKLEkUoscT2ICWjeIkEsIpPloGnLCcxaQn3o4rymvT0lmAIHB%2FcjYSYt8rvwLyqQRRspXl%2BMBnVcbuc5%2FwsVLx0WsJlrWVqbbay5dRqu9BjUxRz8MCNSn6ATI5qo9JkC0KvSgDTDuouyvCwBDxvFPX7GcOC8L1L2TTHWZ7MAsym3e5uDDY%2BqM0sK54dFDpJhLCx0D3DOFywG%2BE%2F6vip%2F82R7T0n3UxplttCipUeSG2uhIUkHQuL8CTHTofhEFPaNxVbtiqrnoUjebZ9Y4DFYT21uV3CDtVdwDgQqK%2Fu6WG83PDfKeSZAto3j3VlGR0R3Z8XD%2Bw0nIJ7sYAClaXfM8gKhggSTNwB%2BBsCOI%2BqeuNKClxDfFu5Nti1de0Ao%2Fmfn8tibKm3W6i%2FWuEQSe%2B3L4c8YTdMVtSeR6rjcWAIGk%2BL7WIWdWYbgA%2B95CK9muJ0SVtQQfsQ%2BAc9VQSQEHWk5d4BvKbanteJo5NH1ZGw2Mi7Pazg4P%2ByeF%2FrhFWvhApfArLsrJR3j2ooiEROEerWZD7NhwOrOp%2BsE29KNg02pV0wNi7zNux9WNo0nY0rfTDk3DSOMO6i%2B8QGOqUBtjGb86Iwzrh8KeCJa3Osge2lOpay9mE25u3AF05cDpCvA4O1pAssFB5JaNcdmP3bA7koHe0dvuZgM5Q%2FhER3Uy6arYXdNmJW1sCtH3UcpMCYlIZhFJd7NBxpKpMYe%2BccpeXsv4rD8ZeZs%2FznSQ6Myfm7O7imtrUVBwJxaP03GOYwo5m85HiAZ55dTzoPD2UlrKVWH%2BqoVxAB7Ho34ccBgqEofSf%2B&X-Amz-Signature=006f443d4cbf2697a285dff62112a972d0621a5a829230a96a8280c58ee48825&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB2ONWV3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCDOjy9pb87VjhZCVC5jIoO%2FhPTsIs%2B0I%2F9NYxMf%2F3uaAIgBaBCUIWnLWzg8maGJ%2F6IZ8A7%2Fw4dsLPhTCpAugZHpfYq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDITlpbgeqD1Lgef1JircAxMswPZa0IcILvLEmyXKN03Chkq%2BintbL%2FJq1%2BTFRqSRt%2BS0GmrCBmB4RiKLEkUoscT2ICWjeIkEsIpPloGnLCcxaQn3o4rymvT0lmAIHB%2FcjYSYt8rvwLyqQRRspXl%2BMBnVcbuc5%2FwsVLx0WsJlrWVqbbay5dRqu9BjUxRz8MCNSn6ATI5qo9JkC0KvSgDTDuouyvCwBDxvFPX7GcOC8L1L2TTHWZ7MAsym3e5uDDY%2BqM0sK54dFDpJhLCx0D3DOFywG%2BE%2F6vip%2F82R7T0n3UxplttCipUeSG2uhIUkHQuL8CTHTofhEFPaNxVbtiqrnoUjebZ9Y4DFYT21uV3CDtVdwDgQqK%2Fu6WG83PDfKeSZAto3j3VlGR0R3Z8XD%2Bw0nIJ7sYAClaXfM8gKhggSTNwB%2BBsCOI%2BqeuNKClxDfFu5Nti1de0Ao%2Fmfn8tibKm3W6i%2FWuEQSe%2B3L4c8YTdMVtSeR6rjcWAIGk%2BL7WIWdWYbgA%2B95CK9muJ0SVtQQfsQ%2BAc9VQSQEHWk5d4BvKbanteJo5NH1ZGw2Mi7Pazg4P%2ByeF%2FrhFWvhApfArLsrJR3j2ooiEROEerWZD7NhwOrOp%2BsE29KNg02pV0wNi7zNux9WNo0nY0rfTDk3DSOMO6i%2B8QGOqUBtjGb86Iwzrh8KeCJa3Osge2lOpay9mE25u3AF05cDpCvA4O1pAssFB5JaNcdmP3bA7koHe0dvuZgM5Q%2FhER3Uy6arYXdNmJW1sCtH3UcpMCYlIZhFJd7NBxpKpMYe%2BccpeXsv4rD8ZeZs%2FznSQ6Myfm7O7imtrUVBwJxaP03GOYwo5m85HiAZ55dTzoPD2UlrKVWH%2BqoVxAB7Ho34ccBgqEofSf%2B&X-Amz-Signature=ae045c425f378b443aea81357c27cdc3bd91ff5b1f861509e63785dc15873db3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB2ONWV3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCDOjy9pb87VjhZCVC5jIoO%2FhPTsIs%2B0I%2F9NYxMf%2F3uaAIgBaBCUIWnLWzg8maGJ%2F6IZ8A7%2Fw4dsLPhTCpAugZHpfYq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDITlpbgeqD1Lgef1JircAxMswPZa0IcILvLEmyXKN03Chkq%2BintbL%2FJq1%2BTFRqSRt%2BS0GmrCBmB4RiKLEkUoscT2ICWjeIkEsIpPloGnLCcxaQn3o4rymvT0lmAIHB%2FcjYSYt8rvwLyqQRRspXl%2BMBnVcbuc5%2FwsVLx0WsJlrWVqbbay5dRqu9BjUxRz8MCNSn6ATI5qo9JkC0KvSgDTDuouyvCwBDxvFPX7GcOC8L1L2TTHWZ7MAsym3e5uDDY%2BqM0sK54dFDpJhLCx0D3DOFywG%2BE%2F6vip%2F82R7T0n3UxplttCipUeSG2uhIUkHQuL8CTHTofhEFPaNxVbtiqrnoUjebZ9Y4DFYT21uV3CDtVdwDgQqK%2Fu6WG83PDfKeSZAto3j3VlGR0R3Z8XD%2Bw0nIJ7sYAClaXfM8gKhggSTNwB%2BBsCOI%2BqeuNKClxDfFu5Nti1de0Ao%2Fmfn8tibKm3W6i%2FWuEQSe%2B3L4c8YTdMVtSeR6rjcWAIGk%2BL7WIWdWYbgA%2B95CK9muJ0SVtQQfsQ%2BAc9VQSQEHWk5d4BvKbanteJo5NH1ZGw2Mi7Pazg4P%2ByeF%2FrhFWvhApfArLsrJR3j2ooiEROEerWZD7NhwOrOp%2BsE29KNg02pV0wNi7zNux9WNo0nY0rfTDk3DSOMO6i%2B8QGOqUBtjGb86Iwzrh8KeCJa3Osge2lOpay9mE25u3AF05cDpCvA4O1pAssFB5JaNcdmP3bA7koHe0dvuZgM5Q%2FhER3Uy6arYXdNmJW1sCtH3UcpMCYlIZhFJd7NBxpKpMYe%2BccpeXsv4rD8ZeZs%2FznSQ6Myfm7O7imtrUVBwJxaP03GOYwo5m85HiAZ55dTzoPD2UlrKVWH%2BqoVxAB7Ho34ccBgqEofSf%2B&X-Amz-Signature=da925b75958d5a469f4ebaae0090f5696fae1a8dd76f2ba8b5365e6082141b5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TB2ONWV3%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T071119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCDOjy9pb87VjhZCVC5jIoO%2FhPTsIs%2B0I%2F9NYxMf%2F3uaAIgBaBCUIWnLWzg8maGJ%2F6IZ8A7%2Fw4dsLPhTCpAugZHpfYq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDITlpbgeqD1Lgef1JircAxMswPZa0IcILvLEmyXKN03Chkq%2BintbL%2FJq1%2BTFRqSRt%2BS0GmrCBmB4RiKLEkUoscT2ICWjeIkEsIpPloGnLCcxaQn3o4rymvT0lmAIHB%2FcjYSYt8rvwLyqQRRspXl%2BMBnVcbuc5%2FwsVLx0WsJlrWVqbbay5dRqu9BjUxRz8MCNSn6ATI5qo9JkC0KvSgDTDuouyvCwBDxvFPX7GcOC8L1L2TTHWZ7MAsym3e5uDDY%2BqM0sK54dFDpJhLCx0D3DOFywG%2BE%2F6vip%2F82R7T0n3UxplttCipUeSG2uhIUkHQuL8CTHTofhEFPaNxVbtiqrnoUjebZ9Y4DFYT21uV3CDtVdwDgQqK%2Fu6WG83PDfKeSZAto3j3VlGR0R3Z8XD%2Bw0nIJ7sYAClaXfM8gKhggSTNwB%2BBsCOI%2BqeuNKClxDfFu5Nti1de0Ao%2Fmfn8tibKm3W6i%2FWuEQSe%2B3L4c8YTdMVtSeR6rjcWAIGk%2BL7WIWdWYbgA%2B95CK9muJ0SVtQQfsQ%2BAc9VQSQEHWk5d4BvKbanteJo5NH1ZGw2Mi7Pazg4P%2ByeF%2FrhFWvhApfArLsrJR3j2ooiEROEerWZD7NhwOrOp%2BsE29KNg02pV0wNi7zNux9WNo0nY0rfTDk3DSOMO6i%2B8QGOqUBtjGb86Iwzrh8KeCJa3Osge2lOpay9mE25u3AF05cDpCvA4O1pAssFB5JaNcdmP3bA7koHe0dvuZgM5Q%2FhER3Uy6arYXdNmJW1sCtH3UcpMCYlIZhFJd7NBxpKpMYe%2BccpeXsv4rD8ZeZs%2FznSQ6Myfm7O7imtrUVBwJxaP03GOYwo5m85HiAZ55dTzoPD2UlrKVWH%2BqoVxAB7Ho34ccBgqEofSf%2B&X-Amz-Signature=61fb4c8ce492b0c1db72b7cc1e3ec1e3792e5ee12372dc2a12f162cf68d57fdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
