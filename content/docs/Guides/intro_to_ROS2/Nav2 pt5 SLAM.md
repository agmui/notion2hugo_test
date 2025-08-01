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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A3XTNL4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1fJe7xNmXVi4eKTEVqtzQ%2BcXVd%2BKZz%2Fk9WSNKeMBU1AiASOXO0mErMqmlRRleB%2BerPaG%2FrqkFSX%2BK46lfKmNvMNiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4W3K6A2Yexi9y0H4KtwDvxCUUhZrlOFX9iYw9pZPZw%2B2JWLImmthfLel6JuDtGd9jQWWidcnwxE%2BDc1T1NPubcbDpkkBsxCLwxmwaxsn1Gc8PMo0WrdAsaAWkatyOmwUMv5G2Rf8kEgsRfzP9QXKH4EMHCBKAjM9FshL5kTWeulNdWy5IS4JAzFUISEuzP5Ehmb%2F%2BKN%2FH0DVFd9l37PKQSvEvMJAwLZB6SzzM%2FIQSwONJZ%2BP7gtW2qDSkIBzyqZE2yZClEUP66e%2BATcSJtp%2Fh6FdR4RYV%2F0dSUeqVHHzgCRb4WYh39Q3ZeNnaOAbZ7X4JyznepI7pAilKg89NqiqVFZgSmq%2F3k4E%2FZlx5XsUG1tzJkBSiYDA3kkkfNjbIY5yrKtiIEPpHZRNfis8nuaAGhRsnTxoHWZyLMsYqq13E2dQskxOYmhMdkRbZuZstRWIy6Jfb5HQN3YVACexfO0cLJFUQZbXYZZ4gMd88xQAMFPQxyOG245vuG0cRIK9DcTcs6J2wnJdTLYbvCzzA1JkKET%2F73ej%2F9rgPsyYEJ5QkoOl5r9%2BcQb7qaV9dExymhbmxzXSK2QQpRyy5kv%2Bt9h5LazIN8j5ojAGyEt%2BuzKUk8nvs98VZgZvxcuKTLy%2Bv%2BBTeNXCbzsuy7e0Saww0%2FqzxAY6pgEaxmO%2BIalzEKICPHsj71kCKn7mhteT9HT1sUzr2tA5yKeke1vGheRuWK01USJAynQGDQbgjzGn3bINYvmNRkYe5cJswSBLPx%2FD0jf2wsMwUem3m30sU7JPR4kYZIgFfUOUUsULy1Up0QZIOuIhGMSHsJDndmkIeVK6t833KaEedEXkVy1N9F7TbzwwU%2FBOA410XiM%2BIwxh9G0peclhY3CXUtPrX5pW&X-Amz-Signature=767757ebd45b3ac842a73512c21ab941b3cc99791104216af6bba41b77366764&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A3XTNL4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1fJe7xNmXVi4eKTEVqtzQ%2BcXVd%2BKZz%2Fk9WSNKeMBU1AiASOXO0mErMqmlRRleB%2BerPaG%2FrqkFSX%2BK46lfKmNvMNiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4W3K6A2Yexi9y0H4KtwDvxCUUhZrlOFX9iYw9pZPZw%2B2JWLImmthfLel6JuDtGd9jQWWidcnwxE%2BDc1T1NPubcbDpkkBsxCLwxmwaxsn1Gc8PMo0WrdAsaAWkatyOmwUMv5G2Rf8kEgsRfzP9QXKH4EMHCBKAjM9FshL5kTWeulNdWy5IS4JAzFUISEuzP5Ehmb%2F%2BKN%2FH0DVFd9l37PKQSvEvMJAwLZB6SzzM%2FIQSwONJZ%2BP7gtW2qDSkIBzyqZE2yZClEUP66e%2BATcSJtp%2Fh6FdR4RYV%2F0dSUeqVHHzgCRb4WYh39Q3ZeNnaOAbZ7X4JyznepI7pAilKg89NqiqVFZgSmq%2F3k4E%2FZlx5XsUG1tzJkBSiYDA3kkkfNjbIY5yrKtiIEPpHZRNfis8nuaAGhRsnTxoHWZyLMsYqq13E2dQskxOYmhMdkRbZuZstRWIy6Jfb5HQN3YVACexfO0cLJFUQZbXYZZ4gMd88xQAMFPQxyOG245vuG0cRIK9DcTcs6J2wnJdTLYbvCzzA1JkKET%2F73ej%2F9rgPsyYEJ5QkoOl5r9%2BcQb7qaV9dExymhbmxzXSK2QQpRyy5kv%2Bt9h5LazIN8j5ojAGyEt%2BuzKUk8nvs98VZgZvxcuKTLy%2Bv%2BBTeNXCbzsuy7e0Saww0%2FqzxAY6pgEaxmO%2BIalzEKICPHsj71kCKn7mhteT9HT1sUzr2tA5yKeke1vGheRuWK01USJAynQGDQbgjzGn3bINYvmNRkYe5cJswSBLPx%2FD0jf2wsMwUem3m30sU7JPR4kYZIgFfUOUUsULy1Up0QZIOuIhGMSHsJDndmkIeVK6t833KaEedEXkVy1N9F7TbzwwU%2FBOA410XiM%2BIwxh9G0peclhY3CXUtPrX5pW&X-Amz-Signature=4a391f34e111cb1e40e48fdb1c8b5c44b3e48505e206f594a39dff613728d422&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A3XTNL4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1fJe7xNmXVi4eKTEVqtzQ%2BcXVd%2BKZz%2Fk9WSNKeMBU1AiASOXO0mErMqmlRRleB%2BerPaG%2FrqkFSX%2BK46lfKmNvMNiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4W3K6A2Yexi9y0H4KtwDvxCUUhZrlOFX9iYw9pZPZw%2B2JWLImmthfLel6JuDtGd9jQWWidcnwxE%2BDc1T1NPubcbDpkkBsxCLwxmwaxsn1Gc8PMo0WrdAsaAWkatyOmwUMv5G2Rf8kEgsRfzP9QXKH4EMHCBKAjM9FshL5kTWeulNdWy5IS4JAzFUISEuzP5Ehmb%2F%2BKN%2FH0DVFd9l37PKQSvEvMJAwLZB6SzzM%2FIQSwONJZ%2BP7gtW2qDSkIBzyqZE2yZClEUP66e%2BATcSJtp%2Fh6FdR4RYV%2F0dSUeqVHHzgCRb4WYh39Q3ZeNnaOAbZ7X4JyznepI7pAilKg89NqiqVFZgSmq%2F3k4E%2FZlx5XsUG1tzJkBSiYDA3kkkfNjbIY5yrKtiIEPpHZRNfis8nuaAGhRsnTxoHWZyLMsYqq13E2dQskxOYmhMdkRbZuZstRWIy6Jfb5HQN3YVACexfO0cLJFUQZbXYZZ4gMd88xQAMFPQxyOG245vuG0cRIK9DcTcs6J2wnJdTLYbvCzzA1JkKET%2F73ej%2F9rgPsyYEJ5QkoOl5r9%2BcQb7qaV9dExymhbmxzXSK2QQpRyy5kv%2Bt9h5LazIN8j5ojAGyEt%2BuzKUk8nvs98VZgZvxcuKTLy%2Bv%2BBTeNXCbzsuy7e0Saww0%2FqzxAY6pgEaxmO%2BIalzEKICPHsj71kCKn7mhteT9HT1sUzr2tA5yKeke1vGheRuWK01USJAynQGDQbgjzGn3bINYvmNRkYe5cJswSBLPx%2FD0jf2wsMwUem3m30sU7JPR4kYZIgFfUOUUsULy1Up0QZIOuIhGMSHsJDndmkIeVK6t833KaEedEXkVy1N9F7TbzwwU%2FBOA410XiM%2BIwxh9G0peclhY3CXUtPrX5pW&X-Amz-Signature=39351e41f03ea6fc7b4017ed9e4e66e95722c4945033bc5755bfcf1dba53567c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A3XTNL4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1fJe7xNmXVi4eKTEVqtzQ%2BcXVd%2BKZz%2Fk9WSNKeMBU1AiASOXO0mErMqmlRRleB%2BerPaG%2FrqkFSX%2BK46lfKmNvMNiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4W3K6A2Yexi9y0H4KtwDvxCUUhZrlOFX9iYw9pZPZw%2B2JWLImmthfLel6JuDtGd9jQWWidcnwxE%2BDc1T1NPubcbDpkkBsxCLwxmwaxsn1Gc8PMo0WrdAsaAWkatyOmwUMv5G2Rf8kEgsRfzP9QXKH4EMHCBKAjM9FshL5kTWeulNdWy5IS4JAzFUISEuzP5Ehmb%2F%2BKN%2FH0DVFd9l37PKQSvEvMJAwLZB6SzzM%2FIQSwONJZ%2BP7gtW2qDSkIBzyqZE2yZClEUP66e%2BATcSJtp%2Fh6FdR4RYV%2F0dSUeqVHHzgCRb4WYh39Q3ZeNnaOAbZ7X4JyznepI7pAilKg89NqiqVFZgSmq%2F3k4E%2FZlx5XsUG1tzJkBSiYDA3kkkfNjbIY5yrKtiIEPpHZRNfis8nuaAGhRsnTxoHWZyLMsYqq13E2dQskxOYmhMdkRbZuZstRWIy6Jfb5HQN3YVACexfO0cLJFUQZbXYZZ4gMd88xQAMFPQxyOG245vuG0cRIK9DcTcs6J2wnJdTLYbvCzzA1JkKET%2F73ej%2F9rgPsyYEJ5QkoOl5r9%2BcQb7qaV9dExymhbmxzXSK2QQpRyy5kv%2Bt9h5LazIN8j5ojAGyEt%2BuzKUk8nvs98VZgZvxcuKTLy%2Bv%2BBTeNXCbzsuy7e0Saww0%2FqzxAY6pgEaxmO%2BIalzEKICPHsj71kCKn7mhteT9HT1sUzr2tA5yKeke1vGheRuWK01USJAynQGDQbgjzGn3bINYvmNRkYe5cJswSBLPx%2FD0jf2wsMwUem3m30sU7JPR4kYZIgFfUOUUsULy1Up0QZIOuIhGMSHsJDndmkIeVK6t833KaEedEXkVy1N9F7TbzwwU%2FBOA410XiM%2BIwxh9G0peclhY3CXUtPrX5pW&X-Amz-Signature=74a3325c0f5854d2faf4bcd4f5d6671b99f6dcfd2b8264b1544329ed10fba065&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A3XTNL4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1fJe7xNmXVi4eKTEVqtzQ%2BcXVd%2BKZz%2Fk9WSNKeMBU1AiASOXO0mErMqmlRRleB%2BerPaG%2FrqkFSX%2BK46lfKmNvMNiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4W3K6A2Yexi9y0H4KtwDvxCUUhZrlOFX9iYw9pZPZw%2B2JWLImmthfLel6JuDtGd9jQWWidcnwxE%2BDc1T1NPubcbDpkkBsxCLwxmwaxsn1Gc8PMo0WrdAsaAWkatyOmwUMv5G2Rf8kEgsRfzP9QXKH4EMHCBKAjM9FshL5kTWeulNdWy5IS4JAzFUISEuzP5Ehmb%2F%2BKN%2FH0DVFd9l37PKQSvEvMJAwLZB6SzzM%2FIQSwONJZ%2BP7gtW2qDSkIBzyqZE2yZClEUP66e%2BATcSJtp%2Fh6FdR4RYV%2F0dSUeqVHHzgCRb4WYh39Q3ZeNnaOAbZ7X4JyznepI7pAilKg89NqiqVFZgSmq%2F3k4E%2FZlx5XsUG1tzJkBSiYDA3kkkfNjbIY5yrKtiIEPpHZRNfis8nuaAGhRsnTxoHWZyLMsYqq13E2dQskxOYmhMdkRbZuZstRWIy6Jfb5HQN3YVACexfO0cLJFUQZbXYZZ4gMd88xQAMFPQxyOG245vuG0cRIK9DcTcs6J2wnJdTLYbvCzzA1JkKET%2F73ej%2F9rgPsyYEJ5QkoOl5r9%2BcQb7qaV9dExymhbmxzXSK2QQpRyy5kv%2Bt9h5LazIN8j5ojAGyEt%2BuzKUk8nvs98VZgZvxcuKTLy%2Bv%2BBTeNXCbzsuy7e0Saww0%2FqzxAY6pgEaxmO%2BIalzEKICPHsj71kCKn7mhteT9HT1sUzr2tA5yKeke1vGheRuWK01USJAynQGDQbgjzGn3bINYvmNRkYe5cJswSBLPx%2FD0jf2wsMwUem3m30sU7JPR4kYZIgFfUOUUsULy1Up0QZIOuIhGMSHsJDndmkIeVK6t833KaEedEXkVy1N9F7TbzwwU%2FBOA410XiM%2BIwxh9G0peclhY3CXUtPrX5pW&X-Amz-Signature=91319f37eb0708986e92e4e65db40875c714ef655e0f9110a5a85aa792e4e7f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A3XTNL4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1fJe7xNmXVi4eKTEVqtzQ%2BcXVd%2BKZz%2Fk9WSNKeMBU1AiASOXO0mErMqmlRRleB%2BerPaG%2FrqkFSX%2BK46lfKmNvMNiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4W3K6A2Yexi9y0H4KtwDvxCUUhZrlOFX9iYw9pZPZw%2B2JWLImmthfLel6JuDtGd9jQWWidcnwxE%2BDc1T1NPubcbDpkkBsxCLwxmwaxsn1Gc8PMo0WrdAsaAWkatyOmwUMv5G2Rf8kEgsRfzP9QXKH4EMHCBKAjM9FshL5kTWeulNdWy5IS4JAzFUISEuzP5Ehmb%2F%2BKN%2FH0DVFd9l37PKQSvEvMJAwLZB6SzzM%2FIQSwONJZ%2BP7gtW2qDSkIBzyqZE2yZClEUP66e%2BATcSJtp%2Fh6FdR4RYV%2F0dSUeqVHHzgCRb4WYh39Q3ZeNnaOAbZ7X4JyznepI7pAilKg89NqiqVFZgSmq%2F3k4E%2FZlx5XsUG1tzJkBSiYDA3kkkfNjbIY5yrKtiIEPpHZRNfis8nuaAGhRsnTxoHWZyLMsYqq13E2dQskxOYmhMdkRbZuZstRWIy6Jfb5HQN3YVACexfO0cLJFUQZbXYZZ4gMd88xQAMFPQxyOG245vuG0cRIK9DcTcs6J2wnJdTLYbvCzzA1JkKET%2F73ej%2F9rgPsyYEJ5QkoOl5r9%2BcQb7qaV9dExymhbmxzXSK2QQpRyy5kv%2Bt9h5LazIN8j5ojAGyEt%2BuzKUk8nvs98VZgZvxcuKTLy%2Bv%2BBTeNXCbzsuy7e0Saww0%2FqzxAY6pgEaxmO%2BIalzEKICPHsj71kCKn7mhteT9HT1sUzr2tA5yKeke1vGheRuWK01USJAynQGDQbgjzGn3bINYvmNRkYe5cJswSBLPx%2FD0jf2wsMwUem3m30sU7JPR4kYZIgFfUOUUsULy1Up0QZIOuIhGMSHsJDndmkIeVK6t833KaEedEXkVy1N9F7TbzwwU%2FBOA410XiM%2BIwxh9G0peclhY3CXUtPrX5pW&X-Amz-Signature=988ea2dbb1fcdfee76bd5de871b902e28f6f637baff60b0c906cab31bf3bf567&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A3XTNL4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1fJe7xNmXVi4eKTEVqtzQ%2BcXVd%2BKZz%2Fk9WSNKeMBU1AiASOXO0mErMqmlRRleB%2BerPaG%2FrqkFSX%2BK46lfKmNvMNiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4W3K6A2Yexi9y0H4KtwDvxCUUhZrlOFX9iYw9pZPZw%2B2JWLImmthfLel6JuDtGd9jQWWidcnwxE%2BDc1T1NPubcbDpkkBsxCLwxmwaxsn1Gc8PMo0WrdAsaAWkatyOmwUMv5G2Rf8kEgsRfzP9QXKH4EMHCBKAjM9FshL5kTWeulNdWy5IS4JAzFUISEuzP5Ehmb%2F%2BKN%2FH0DVFd9l37PKQSvEvMJAwLZB6SzzM%2FIQSwONJZ%2BP7gtW2qDSkIBzyqZE2yZClEUP66e%2BATcSJtp%2Fh6FdR4RYV%2F0dSUeqVHHzgCRb4WYh39Q3ZeNnaOAbZ7X4JyznepI7pAilKg89NqiqVFZgSmq%2F3k4E%2FZlx5XsUG1tzJkBSiYDA3kkkfNjbIY5yrKtiIEPpHZRNfis8nuaAGhRsnTxoHWZyLMsYqq13E2dQskxOYmhMdkRbZuZstRWIy6Jfb5HQN3YVACexfO0cLJFUQZbXYZZ4gMd88xQAMFPQxyOG245vuG0cRIK9DcTcs6J2wnJdTLYbvCzzA1JkKET%2F73ej%2F9rgPsyYEJ5QkoOl5r9%2BcQb7qaV9dExymhbmxzXSK2QQpRyy5kv%2Bt9h5LazIN8j5ojAGyEt%2BuzKUk8nvs98VZgZvxcuKTLy%2Bv%2BBTeNXCbzsuy7e0Saww0%2FqzxAY6pgEaxmO%2BIalzEKICPHsj71kCKn7mhteT9HT1sUzr2tA5yKeke1vGheRuWK01USJAynQGDQbgjzGn3bINYvmNRkYe5cJswSBLPx%2FD0jf2wsMwUem3m30sU7JPR4kYZIgFfUOUUsULy1Up0QZIOuIhGMSHsJDndmkIeVK6t833KaEedEXkVy1N9F7TbzwwU%2FBOA410XiM%2BIwxh9G0peclhY3CXUtPrX5pW&X-Amz-Signature=a829a67a7ad374703f29e8e4a7ae6cae4896c30eb2f1d8c873e7d33ffee7a997&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A3XTNL4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1fJe7xNmXVi4eKTEVqtzQ%2BcXVd%2BKZz%2Fk9WSNKeMBU1AiASOXO0mErMqmlRRleB%2BerPaG%2FrqkFSX%2BK46lfKmNvMNiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4W3K6A2Yexi9y0H4KtwDvxCUUhZrlOFX9iYw9pZPZw%2B2JWLImmthfLel6JuDtGd9jQWWidcnwxE%2BDc1T1NPubcbDpkkBsxCLwxmwaxsn1Gc8PMo0WrdAsaAWkatyOmwUMv5G2Rf8kEgsRfzP9QXKH4EMHCBKAjM9FshL5kTWeulNdWy5IS4JAzFUISEuzP5Ehmb%2F%2BKN%2FH0DVFd9l37PKQSvEvMJAwLZB6SzzM%2FIQSwONJZ%2BP7gtW2qDSkIBzyqZE2yZClEUP66e%2BATcSJtp%2Fh6FdR4RYV%2F0dSUeqVHHzgCRb4WYh39Q3ZeNnaOAbZ7X4JyznepI7pAilKg89NqiqVFZgSmq%2F3k4E%2FZlx5XsUG1tzJkBSiYDA3kkkfNjbIY5yrKtiIEPpHZRNfis8nuaAGhRsnTxoHWZyLMsYqq13E2dQskxOYmhMdkRbZuZstRWIy6Jfb5HQN3YVACexfO0cLJFUQZbXYZZ4gMd88xQAMFPQxyOG245vuG0cRIK9DcTcs6J2wnJdTLYbvCzzA1JkKET%2F73ej%2F9rgPsyYEJ5QkoOl5r9%2BcQb7qaV9dExymhbmxzXSK2QQpRyy5kv%2Bt9h5LazIN8j5ojAGyEt%2BuzKUk8nvs98VZgZvxcuKTLy%2Bv%2BBTeNXCbzsuy7e0Saww0%2FqzxAY6pgEaxmO%2BIalzEKICPHsj71kCKn7mhteT9HT1sUzr2tA5yKeke1vGheRuWK01USJAynQGDQbgjzGn3bINYvmNRkYe5cJswSBLPx%2FD0jf2wsMwUem3m30sU7JPR4kYZIgFfUOUUsULy1Up0QZIOuIhGMSHsJDndmkIeVK6t833KaEedEXkVy1N9F7TbzwwU%2FBOA410XiM%2BIwxh9G0peclhY3CXUtPrX5pW&X-Amz-Signature=aaf4b86ce663566b28138f0e6f5bce415e34fa674f81c8551720b7adae0efff8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A3XTNL4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1fJe7xNmXVi4eKTEVqtzQ%2BcXVd%2BKZz%2Fk9WSNKeMBU1AiASOXO0mErMqmlRRleB%2BerPaG%2FrqkFSX%2BK46lfKmNvMNiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4W3K6A2Yexi9y0H4KtwDvxCUUhZrlOFX9iYw9pZPZw%2B2JWLImmthfLel6JuDtGd9jQWWidcnwxE%2BDc1T1NPubcbDpkkBsxCLwxmwaxsn1Gc8PMo0WrdAsaAWkatyOmwUMv5G2Rf8kEgsRfzP9QXKH4EMHCBKAjM9FshL5kTWeulNdWy5IS4JAzFUISEuzP5Ehmb%2F%2BKN%2FH0DVFd9l37PKQSvEvMJAwLZB6SzzM%2FIQSwONJZ%2BP7gtW2qDSkIBzyqZE2yZClEUP66e%2BATcSJtp%2Fh6FdR4RYV%2F0dSUeqVHHzgCRb4WYh39Q3ZeNnaOAbZ7X4JyznepI7pAilKg89NqiqVFZgSmq%2F3k4E%2FZlx5XsUG1tzJkBSiYDA3kkkfNjbIY5yrKtiIEPpHZRNfis8nuaAGhRsnTxoHWZyLMsYqq13E2dQskxOYmhMdkRbZuZstRWIy6Jfb5HQN3YVACexfO0cLJFUQZbXYZZ4gMd88xQAMFPQxyOG245vuG0cRIK9DcTcs6J2wnJdTLYbvCzzA1JkKET%2F73ej%2F9rgPsyYEJ5QkoOl5r9%2BcQb7qaV9dExymhbmxzXSK2QQpRyy5kv%2Bt9h5LazIN8j5ojAGyEt%2BuzKUk8nvs98VZgZvxcuKTLy%2Bv%2BBTeNXCbzsuy7e0Saww0%2FqzxAY6pgEaxmO%2BIalzEKICPHsj71kCKn7mhteT9HT1sUzr2tA5yKeke1vGheRuWK01USJAynQGDQbgjzGn3bINYvmNRkYe5cJswSBLPx%2FD0jf2wsMwUem3m30sU7JPR4kYZIgFfUOUUsULy1Up0QZIOuIhGMSHsJDndmkIeVK6t833KaEedEXkVy1N9F7TbzwwU%2FBOA410XiM%2BIwxh9G0peclhY3CXUtPrX5pW&X-Amz-Signature=6e3a7a6c676cd6718ceeabffaa11eaa4be2c0812bd4d5f1fdbb50456159a63be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A3XTNL4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1fJe7xNmXVi4eKTEVqtzQ%2BcXVd%2BKZz%2Fk9WSNKeMBU1AiASOXO0mErMqmlRRleB%2BerPaG%2FrqkFSX%2BK46lfKmNvMNiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4W3K6A2Yexi9y0H4KtwDvxCUUhZrlOFX9iYw9pZPZw%2B2JWLImmthfLel6JuDtGd9jQWWidcnwxE%2BDc1T1NPubcbDpkkBsxCLwxmwaxsn1Gc8PMo0WrdAsaAWkatyOmwUMv5G2Rf8kEgsRfzP9QXKH4EMHCBKAjM9FshL5kTWeulNdWy5IS4JAzFUISEuzP5Ehmb%2F%2BKN%2FH0DVFd9l37PKQSvEvMJAwLZB6SzzM%2FIQSwONJZ%2BP7gtW2qDSkIBzyqZE2yZClEUP66e%2BATcSJtp%2Fh6FdR4RYV%2F0dSUeqVHHzgCRb4WYh39Q3ZeNnaOAbZ7X4JyznepI7pAilKg89NqiqVFZgSmq%2F3k4E%2FZlx5XsUG1tzJkBSiYDA3kkkfNjbIY5yrKtiIEPpHZRNfis8nuaAGhRsnTxoHWZyLMsYqq13E2dQskxOYmhMdkRbZuZstRWIy6Jfb5HQN3YVACexfO0cLJFUQZbXYZZ4gMd88xQAMFPQxyOG245vuG0cRIK9DcTcs6J2wnJdTLYbvCzzA1JkKET%2F73ej%2F9rgPsyYEJ5QkoOl5r9%2BcQb7qaV9dExymhbmxzXSK2QQpRyy5kv%2Bt9h5LazIN8j5ojAGyEt%2BuzKUk8nvs98VZgZvxcuKTLy%2Bv%2BBTeNXCbzsuy7e0Saww0%2FqzxAY6pgEaxmO%2BIalzEKICPHsj71kCKn7mhteT9HT1sUzr2tA5yKeke1vGheRuWK01USJAynQGDQbgjzGn3bINYvmNRkYe5cJswSBLPx%2FD0jf2wsMwUem3m30sU7JPR4kYZIgFfUOUUsULy1Up0QZIOuIhGMSHsJDndmkIeVK6t833KaEedEXkVy1N9F7TbzwwU%2FBOA410XiM%2BIwxh9G0peclhY3CXUtPrX5pW&X-Amz-Signature=47bfdb7affc9a084037f961b91e8a79203316a14ef4c2b6620c616363d35597b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A3XTNL4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1fJe7xNmXVi4eKTEVqtzQ%2BcXVd%2BKZz%2Fk9WSNKeMBU1AiASOXO0mErMqmlRRleB%2BerPaG%2FrqkFSX%2BK46lfKmNvMNiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4W3K6A2Yexi9y0H4KtwDvxCUUhZrlOFX9iYw9pZPZw%2B2JWLImmthfLel6JuDtGd9jQWWidcnwxE%2BDc1T1NPubcbDpkkBsxCLwxmwaxsn1Gc8PMo0WrdAsaAWkatyOmwUMv5G2Rf8kEgsRfzP9QXKH4EMHCBKAjM9FshL5kTWeulNdWy5IS4JAzFUISEuzP5Ehmb%2F%2BKN%2FH0DVFd9l37PKQSvEvMJAwLZB6SzzM%2FIQSwONJZ%2BP7gtW2qDSkIBzyqZE2yZClEUP66e%2BATcSJtp%2Fh6FdR4RYV%2F0dSUeqVHHzgCRb4WYh39Q3ZeNnaOAbZ7X4JyznepI7pAilKg89NqiqVFZgSmq%2F3k4E%2FZlx5XsUG1tzJkBSiYDA3kkkfNjbIY5yrKtiIEPpHZRNfis8nuaAGhRsnTxoHWZyLMsYqq13E2dQskxOYmhMdkRbZuZstRWIy6Jfb5HQN3YVACexfO0cLJFUQZbXYZZ4gMd88xQAMFPQxyOG245vuG0cRIK9DcTcs6J2wnJdTLYbvCzzA1JkKET%2F73ej%2F9rgPsyYEJ5QkoOl5r9%2BcQb7qaV9dExymhbmxzXSK2QQpRyy5kv%2Bt9h5LazIN8j5ojAGyEt%2BuzKUk8nvs98VZgZvxcuKTLy%2Bv%2BBTeNXCbzsuy7e0Saww0%2FqzxAY6pgEaxmO%2BIalzEKICPHsj71kCKn7mhteT9HT1sUzr2tA5yKeke1vGheRuWK01USJAynQGDQbgjzGn3bINYvmNRkYe5cJswSBLPx%2FD0jf2wsMwUem3m30sU7JPR4kYZIgFfUOUUsULy1Up0QZIOuIhGMSHsJDndmkIeVK6t833KaEedEXkVy1N9F7TbzwwU%2FBOA410XiM%2BIwxh9G0peclhY3CXUtPrX5pW&X-Amz-Signature=fec7d6891ea623115516ea4fb3ab61745341584e51681296250e082e177a4f8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A3XTNL4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1fJe7xNmXVi4eKTEVqtzQ%2BcXVd%2BKZz%2Fk9WSNKeMBU1AiASOXO0mErMqmlRRleB%2BerPaG%2FrqkFSX%2BK46lfKmNvMNiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4W3K6A2Yexi9y0H4KtwDvxCUUhZrlOFX9iYw9pZPZw%2B2JWLImmthfLel6JuDtGd9jQWWidcnwxE%2BDc1T1NPubcbDpkkBsxCLwxmwaxsn1Gc8PMo0WrdAsaAWkatyOmwUMv5G2Rf8kEgsRfzP9QXKH4EMHCBKAjM9FshL5kTWeulNdWy5IS4JAzFUISEuzP5Ehmb%2F%2BKN%2FH0DVFd9l37PKQSvEvMJAwLZB6SzzM%2FIQSwONJZ%2BP7gtW2qDSkIBzyqZE2yZClEUP66e%2BATcSJtp%2Fh6FdR4RYV%2F0dSUeqVHHzgCRb4WYh39Q3ZeNnaOAbZ7X4JyznepI7pAilKg89NqiqVFZgSmq%2F3k4E%2FZlx5XsUG1tzJkBSiYDA3kkkfNjbIY5yrKtiIEPpHZRNfis8nuaAGhRsnTxoHWZyLMsYqq13E2dQskxOYmhMdkRbZuZstRWIy6Jfb5HQN3YVACexfO0cLJFUQZbXYZZ4gMd88xQAMFPQxyOG245vuG0cRIK9DcTcs6J2wnJdTLYbvCzzA1JkKET%2F73ej%2F9rgPsyYEJ5QkoOl5r9%2BcQb7qaV9dExymhbmxzXSK2QQpRyy5kv%2Bt9h5LazIN8j5ojAGyEt%2BuzKUk8nvs98VZgZvxcuKTLy%2Bv%2BBTeNXCbzsuy7e0Saww0%2FqzxAY6pgEaxmO%2BIalzEKICPHsj71kCKn7mhteT9HT1sUzr2tA5yKeke1vGheRuWK01USJAynQGDQbgjzGn3bINYvmNRkYe5cJswSBLPx%2FD0jf2wsMwUem3m30sU7JPR4kYZIgFfUOUUsULy1Up0QZIOuIhGMSHsJDndmkIeVK6t833KaEedEXkVy1N9F7TbzwwU%2FBOA410XiM%2BIwxh9G0peclhY3CXUtPrX5pW&X-Amz-Signature=89781b722650520547f81dd8b27f7c1f968af600a8cfc691372ea611a1c9be8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A3XTNL4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1fJe7xNmXVi4eKTEVqtzQ%2BcXVd%2BKZz%2Fk9WSNKeMBU1AiASOXO0mErMqmlRRleB%2BerPaG%2FrqkFSX%2BK46lfKmNvMNiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4W3K6A2Yexi9y0H4KtwDvxCUUhZrlOFX9iYw9pZPZw%2B2JWLImmthfLel6JuDtGd9jQWWidcnwxE%2BDc1T1NPubcbDpkkBsxCLwxmwaxsn1Gc8PMo0WrdAsaAWkatyOmwUMv5G2Rf8kEgsRfzP9QXKH4EMHCBKAjM9FshL5kTWeulNdWy5IS4JAzFUISEuzP5Ehmb%2F%2BKN%2FH0DVFd9l37PKQSvEvMJAwLZB6SzzM%2FIQSwONJZ%2BP7gtW2qDSkIBzyqZE2yZClEUP66e%2BATcSJtp%2Fh6FdR4RYV%2F0dSUeqVHHzgCRb4WYh39Q3ZeNnaOAbZ7X4JyznepI7pAilKg89NqiqVFZgSmq%2F3k4E%2FZlx5XsUG1tzJkBSiYDA3kkkfNjbIY5yrKtiIEPpHZRNfis8nuaAGhRsnTxoHWZyLMsYqq13E2dQskxOYmhMdkRbZuZstRWIy6Jfb5HQN3YVACexfO0cLJFUQZbXYZZ4gMd88xQAMFPQxyOG245vuG0cRIK9DcTcs6J2wnJdTLYbvCzzA1JkKET%2F73ej%2F9rgPsyYEJ5QkoOl5r9%2BcQb7qaV9dExymhbmxzXSK2QQpRyy5kv%2Bt9h5LazIN8j5ojAGyEt%2BuzKUk8nvs98VZgZvxcuKTLy%2Bv%2BBTeNXCbzsuy7e0Saww0%2FqzxAY6pgEaxmO%2BIalzEKICPHsj71kCKn7mhteT9HT1sUzr2tA5yKeke1vGheRuWK01USJAynQGDQbgjzGn3bINYvmNRkYe5cJswSBLPx%2FD0jf2wsMwUem3m30sU7JPR4kYZIgFfUOUUsULy1Up0QZIOuIhGMSHsJDndmkIeVK6t833KaEedEXkVy1N9F7TbzwwU%2FBOA410XiM%2BIwxh9G0peclhY3CXUtPrX5pW&X-Amz-Signature=a3f15225e238be3180f948ac7b5939cf895018b1d0f9d7d8cdf0c1f572038ef4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A3XTNL4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T181354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1fJe7xNmXVi4eKTEVqtzQ%2BcXVd%2BKZz%2Fk9WSNKeMBU1AiASOXO0mErMqmlRRleB%2BerPaG%2FrqkFSX%2BK46lfKmNvMNiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4W3K6A2Yexi9y0H4KtwDvxCUUhZrlOFX9iYw9pZPZw%2B2JWLImmthfLel6JuDtGd9jQWWidcnwxE%2BDc1T1NPubcbDpkkBsxCLwxmwaxsn1Gc8PMo0WrdAsaAWkatyOmwUMv5G2Rf8kEgsRfzP9QXKH4EMHCBKAjM9FshL5kTWeulNdWy5IS4JAzFUISEuzP5Ehmb%2F%2BKN%2FH0DVFd9l37PKQSvEvMJAwLZB6SzzM%2FIQSwONJZ%2BP7gtW2qDSkIBzyqZE2yZClEUP66e%2BATcSJtp%2Fh6FdR4RYV%2F0dSUeqVHHzgCRb4WYh39Q3ZeNnaOAbZ7X4JyznepI7pAilKg89NqiqVFZgSmq%2F3k4E%2FZlx5XsUG1tzJkBSiYDA3kkkfNjbIY5yrKtiIEPpHZRNfis8nuaAGhRsnTxoHWZyLMsYqq13E2dQskxOYmhMdkRbZuZstRWIy6Jfb5HQN3YVACexfO0cLJFUQZbXYZZ4gMd88xQAMFPQxyOG245vuG0cRIK9DcTcs6J2wnJdTLYbvCzzA1JkKET%2F73ej%2F9rgPsyYEJ5QkoOl5r9%2BcQb7qaV9dExymhbmxzXSK2QQpRyy5kv%2Bt9h5LazIN8j5ojAGyEt%2BuzKUk8nvs98VZgZvxcuKTLy%2Bv%2BBTeNXCbzsuy7e0Saww0%2FqzxAY6pgEaxmO%2BIalzEKICPHsj71kCKn7mhteT9HT1sUzr2tA5yKeke1vGheRuWK01USJAynQGDQbgjzGn3bINYvmNRkYe5cJswSBLPx%2FD0jf2wsMwUem3m30sU7JPR4kYZIgFfUOUUsULy1Up0QZIOuIhGMSHsJDndmkIeVK6t833KaEedEXkVy1N9F7TbzwwU%2FBOA410XiM%2BIwxh9G0peclhY3CXUtPrX5pW&X-Amz-Signature=df9b2e54664768efa603e80fd75fd1773fe69302e2a18604a2f0f95d9341f38f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
