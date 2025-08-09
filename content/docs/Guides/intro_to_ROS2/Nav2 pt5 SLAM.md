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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7LLL4E%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGHeMeIiTMxzyg5GAgpIMltp3dj%2Ffd826CoXcwv4rfjAiBq2TsD5oZsoOpYNHW10RhZrw8n1pSy66Jh2hdeO05%2BoiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMemWFmcy906OlnOpjKtwDf4MkPHWaikc52BijDMFTKNWXjvgs7Ub72luoGpORX5NodRvLzJ1K8%2FHVuingH3M%2BBfXTPk67NQPPdGx%2BlBvVChFSghm0uXOtEFQ9Pwn7d2SVQqROpnPbnRZQ3mSMBuReAIw1HYmj4fe2QiTJcuGb7KubAfAjiRLWIEvF7%2F%2BC%2BGT%2FgtbbzB0Ge4EfmeABlBsenFwflZiZRdf14AC30kI9axCjh8JN9P6ZQ5%2BHoSilBQmouoXqVZfWFBQZw29WcnSXbsU6JN7054PjGp1vcFgBcPSch6Q9CKCdk%2FcYxzjakkFNiPGoKsShDNSWSsR63YN1ows3N7NqsB55L0r1C0rqRJLQAbRbDDgKoX5BEAU%2BsWXpdZPuHlVpRqSlYIXpdxMbzP0tfeigfB%2F7azeebxKyuSw5PB5LahfgdjYmx1eL7xm5YCWKDEB%2BUe%2BI%2BePjqiB14HqtAheyKKhjQHqb8SoqCPFQV8Kh4BVdSAX7oc4nmBjkdcJeS8CbqKJWhLkJRaiXQVpnpk%2FTw626sVqu0NVzbJDYzXHx4HZTPzT142oPPhJz%2B%2F%2BRLu3nwZNkzvpbYOzuqPL6rHRY7rFxdNn5KMsFWi7oEJTwTSgHL5oczP8Ewo2MMfzN1erZZRQf4Fowi4zexAY6pgEaPNUUUjXF9h0lSkD8MFnK%2BKDOojLYMnnnylpCB16te52bEeKwtGzp99mAKZt0HKUqIJCiEOerRW1p7jMSwW70N%2Fs4G9Od%2FGY1u5e452HejyFX4zCdq4fkV9q3N%2FEczb9srA7Si6CMMvmbwmS2NNteZGZAp1rOmnAbVRClkhETHkcNnccj92gvb8cWZvEsr3qh61FyUR%2FstMsMVQudAZhvl9u1444v&X-Amz-Signature=5b771f02ab6f0bde5bcc24312a6d07c1fa7d9919be87822a4a0232e8860189e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7LLL4E%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGHeMeIiTMxzyg5GAgpIMltp3dj%2Ffd826CoXcwv4rfjAiBq2TsD5oZsoOpYNHW10RhZrw8n1pSy66Jh2hdeO05%2BoiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMemWFmcy906OlnOpjKtwDf4MkPHWaikc52BijDMFTKNWXjvgs7Ub72luoGpORX5NodRvLzJ1K8%2FHVuingH3M%2BBfXTPk67NQPPdGx%2BlBvVChFSghm0uXOtEFQ9Pwn7d2SVQqROpnPbnRZQ3mSMBuReAIw1HYmj4fe2QiTJcuGb7KubAfAjiRLWIEvF7%2F%2BC%2BGT%2FgtbbzB0Ge4EfmeABlBsenFwflZiZRdf14AC30kI9axCjh8JN9P6ZQ5%2BHoSilBQmouoXqVZfWFBQZw29WcnSXbsU6JN7054PjGp1vcFgBcPSch6Q9CKCdk%2FcYxzjakkFNiPGoKsShDNSWSsR63YN1ows3N7NqsB55L0r1C0rqRJLQAbRbDDgKoX5BEAU%2BsWXpdZPuHlVpRqSlYIXpdxMbzP0tfeigfB%2F7azeebxKyuSw5PB5LahfgdjYmx1eL7xm5YCWKDEB%2BUe%2BI%2BePjqiB14HqtAheyKKhjQHqb8SoqCPFQV8Kh4BVdSAX7oc4nmBjkdcJeS8CbqKJWhLkJRaiXQVpnpk%2FTw626sVqu0NVzbJDYzXHx4HZTPzT142oPPhJz%2B%2F%2BRLu3nwZNkzvpbYOzuqPL6rHRY7rFxdNn5KMsFWi7oEJTwTSgHL5oczP8Ewo2MMfzN1erZZRQf4Fowi4zexAY6pgEaPNUUUjXF9h0lSkD8MFnK%2BKDOojLYMnnnylpCB16te52bEeKwtGzp99mAKZt0HKUqIJCiEOerRW1p7jMSwW70N%2Fs4G9Od%2FGY1u5e452HejyFX4zCdq4fkV9q3N%2FEczb9srA7Si6CMMvmbwmS2NNteZGZAp1rOmnAbVRClkhETHkcNnccj92gvb8cWZvEsr3qh61FyUR%2FstMsMVQudAZhvl9u1444v&X-Amz-Signature=3256337765fec2ff647d28c53f0fe28a6fcdd46921f15a9c3d5ebd882b9991b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7LLL4E%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGHeMeIiTMxzyg5GAgpIMltp3dj%2Ffd826CoXcwv4rfjAiBq2TsD5oZsoOpYNHW10RhZrw8n1pSy66Jh2hdeO05%2BoiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMemWFmcy906OlnOpjKtwDf4MkPHWaikc52BijDMFTKNWXjvgs7Ub72luoGpORX5NodRvLzJ1K8%2FHVuingH3M%2BBfXTPk67NQPPdGx%2BlBvVChFSghm0uXOtEFQ9Pwn7d2SVQqROpnPbnRZQ3mSMBuReAIw1HYmj4fe2QiTJcuGb7KubAfAjiRLWIEvF7%2F%2BC%2BGT%2FgtbbzB0Ge4EfmeABlBsenFwflZiZRdf14AC30kI9axCjh8JN9P6ZQ5%2BHoSilBQmouoXqVZfWFBQZw29WcnSXbsU6JN7054PjGp1vcFgBcPSch6Q9CKCdk%2FcYxzjakkFNiPGoKsShDNSWSsR63YN1ows3N7NqsB55L0r1C0rqRJLQAbRbDDgKoX5BEAU%2BsWXpdZPuHlVpRqSlYIXpdxMbzP0tfeigfB%2F7azeebxKyuSw5PB5LahfgdjYmx1eL7xm5YCWKDEB%2BUe%2BI%2BePjqiB14HqtAheyKKhjQHqb8SoqCPFQV8Kh4BVdSAX7oc4nmBjkdcJeS8CbqKJWhLkJRaiXQVpnpk%2FTw626sVqu0NVzbJDYzXHx4HZTPzT142oPPhJz%2B%2F%2BRLu3nwZNkzvpbYOzuqPL6rHRY7rFxdNn5KMsFWi7oEJTwTSgHL5oczP8Ewo2MMfzN1erZZRQf4Fowi4zexAY6pgEaPNUUUjXF9h0lSkD8MFnK%2BKDOojLYMnnnylpCB16te52bEeKwtGzp99mAKZt0HKUqIJCiEOerRW1p7jMSwW70N%2Fs4G9Od%2FGY1u5e452HejyFX4zCdq4fkV9q3N%2FEczb9srA7Si6CMMvmbwmS2NNteZGZAp1rOmnAbVRClkhETHkcNnccj92gvb8cWZvEsr3qh61FyUR%2FstMsMVQudAZhvl9u1444v&X-Amz-Signature=d84c606f4ed0173baa26fd4b01853d3a7a3dc440748265b01c4920ed998fabdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7LLL4E%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGHeMeIiTMxzyg5GAgpIMltp3dj%2Ffd826CoXcwv4rfjAiBq2TsD5oZsoOpYNHW10RhZrw8n1pSy66Jh2hdeO05%2BoiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMemWFmcy906OlnOpjKtwDf4MkPHWaikc52BijDMFTKNWXjvgs7Ub72luoGpORX5NodRvLzJ1K8%2FHVuingH3M%2BBfXTPk67NQPPdGx%2BlBvVChFSghm0uXOtEFQ9Pwn7d2SVQqROpnPbnRZQ3mSMBuReAIw1HYmj4fe2QiTJcuGb7KubAfAjiRLWIEvF7%2F%2BC%2BGT%2FgtbbzB0Ge4EfmeABlBsenFwflZiZRdf14AC30kI9axCjh8JN9P6ZQ5%2BHoSilBQmouoXqVZfWFBQZw29WcnSXbsU6JN7054PjGp1vcFgBcPSch6Q9CKCdk%2FcYxzjakkFNiPGoKsShDNSWSsR63YN1ows3N7NqsB55L0r1C0rqRJLQAbRbDDgKoX5BEAU%2BsWXpdZPuHlVpRqSlYIXpdxMbzP0tfeigfB%2F7azeebxKyuSw5PB5LahfgdjYmx1eL7xm5YCWKDEB%2BUe%2BI%2BePjqiB14HqtAheyKKhjQHqb8SoqCPFQV8Kh4BVdSAX7oc4nmBjkdcJeS8CbqKJWhLkJRaiXQVpnpk%2FTw626sVqu0NVzbJDYzXHx4HZTPzT142oPPhJz%2B%2F%2BRLu3nwZNkzvpbYOzuqPL6rHRY7rFxdNn5KMsFWi7oEJTwTSgHL5oczP8Ewo2MMfzN1erZZRQf4Fowi4zexAY6pgEaPNUUUjXF9h0lSkD8MFnK%2BKDOojLYMnnnylpCB16te52bEeKwtGzp99mAKZt0HKUqIJCiEOerRW1p7jMSwW70N%2Fs4G9Od%2FGY1u5e452HejyFX4zCdq4fkV9q3N%2FEczb9srA7Si6CMMvmbwmS2NNteZGZAp1rOmnAbVRClkhETHkcNnccj92gvb8cWZvEsr3qh61FyUR%2FstMsMVQudAZhvl9u1444v&X-Amz-Signature=5caa8cbe4677fb3dbd331095df22ac21f7954a4760b14ee5aa70b24c63d97c5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7LLL4E%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGHeMeIiTMxzyg5GAgpIMltp3dj%2Ffd826CoXcwv4rfjAiBq2TsD5oZsoOpYNHW10RhZrw8n1pSy66Jh2hdeO05%2BoiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMemWFmcy906OlnOpjKtwDf4MkPHWaikc52BijDMFTKNWXjvgs7Ub72luoGpORX5NodRvLzJ1K8%2FHVuingH3M%2BBfXTPk67NQPPdGx%2BlBvVChFSghm0uXOtEFQ9Pwn7d2SVQqROpnPbnRZQ3mSMBuReAIw1HYmj4fe2QiTJcuGb7KubAfAjiRLWIEvF7%2F%2BC%2BGT%2FgtbbzB0Ge4EfmeABlBsenFwflZiZRdf14AC30kI9axCjh8JN9P6ZQ5%2BHoSilBQmouoXqVZfWFBQZw29WcnSXbsU6JN7054PjGp1vcFgBcPSch6Q9CKCdk%2FcYxzjakkFNiPGoKsShDNSWSsR63YN1ows3N7NqsB55L0r1C0rqRJLQAbRbDDgKoX5BEAU%2BsWXpdZPuHlVpRqSlYIXpdxMbzP0tfeigfB%2F7azeebxKyuSw5PB5LahfgdjYmx1eL7xm5YCWKDEB%2BUe%2BI%2BePjqiB14HqtAheyKKhjQHqb8SoqCPFQV8Kh4BVdSAX7oc4nmBjkdcJeS8CbqKJWhLkJRaiXQVpnpk%2FTw626sVqu0NVzbJDYzXHx4HZTPzT142oPPhJz%2B%2F%2BRLu3nwZNkzvpbYOzuqPL6rHRY7rFxdNn5KMsFWi7oEJTwTSgHL5oczP8Ewo2MMfzN1erZZRQf4Fowi4zexAY6pgEaPNUUUjXF9h0lSkD8MFnK%2BKDOojLYMnnnylpCB16te52bEeKwtGzp99mAKZt0HKUqIJCiEOerRW1p7jMSwW70N%2Fs4G9Od%2FGY1u5e452HejyFX4zCdq4fkV9q3N%2FEczb9srA7Si6CMMvmbwmS2NNteZGZAp1rOmnAbVRClkhETHkcNnccj92gvb8cWZvEsr3qh61FyUR%2FstMsMVQudAZhvl9u1444v&X-Amz-Signature=9544be3fe386372906e166718273e5ad9d3692d94fa6812de9570f4a06c6c24b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7LLL4E%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGHeMeIiTMxzyg5GAgpIMltp3dj%2Ffd826CoXcwv4rfjAiBq2TsD5oZsoOpYNHW10RhZrw8n1pSy66Jh2hdeO05%2BoiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMemWFmcy906OlnOpjKtwDf4MkPHWaikc52BijDMFTKNWXjvgs7Ub72luoGpORX5NodRvLzJ1K8%2FHVuingH3M%2BBfXTPk67NQPPdGx%2BlBvVChFSghm0uXOtEFQ9Pwn7d2SVQqROpnPbnRZQ3mSMBuReAIw1HYmj4fe2QiTJcuGb7KubAfAjiRLWIEvF7%2F%2BC%2BGT%2FgtbbzB0Ge4EfmeABlBsenFwflZiZRdf14AC30kI9axCjh8JN9P6ZQ5%2BHoSilBQmouoXqVZfWFBQZw29WcnSXbsU6JN7054PjGp1vcFgBcPSch6Q9CKCdk%2FcYxzjakkFNiPGoKsShDNSWSsR63YN1ows3N7NqsB55L0r1C0rqRJLQAbRbDDgKoX5BEAU%2BsWXpdZPuHlVpRqSlYIXpdxMbzP0tfeigfB%2F7azeebxKyuSw5PB5LahfgdjYmx1eL7xm5YCWKDEB%2BUe%2BI%2BePjqiB14HqtAheyKKhjQHqb8SoqCPFQV8Kh4BVdSAX7oc4nmBjkdcJeS8CbqKJWhLkJRaiXQVpnpk%2FTw626sVqu0NVzbJDYzXHx4HZTPzT142oPPhJz%2B%2F%2BRLu3nwZNkzvpbYOzuqPL6rHRY7rFxdNn5KMsFWi7oEJTwTSgHL5oczP8Ewo2MMfzN1erZZRQf4Fowi4zexAY6pgEaPNUUUjXF9h0lSkD8MFnK%2BKDOojLYMnnnylpCB16te52bEeKwtGzp99mAKZt0HKUqIJCiEOerRW1p7jMSwW70N%2Fs4G9Od%2FGY1u5e452HejyFX4zCdq4fkV9q3N%2FEczb9srA7Si6CMMvmbwmS2NNteZGZAp1rOmnAbVRClkhETHkcNnccj92gvb8cWZvEsr3qh61FyUR%2FstMsMVQudAZhvl9u1444v&X-Amz-Signature=470bd13ab94552453724c884c4a245694639e1d751ebe4ec99ec3a2c00b3a983&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7LLL4E%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGHeMeIiTMxzyg5GAgpIMltp3dj%2Ffd826CoXcwv4rfjAiBq2TsD5oZsoOpYNHW10RhZrw8n1pSy66Jh2hdeO05%2BoiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMemWFmcy906OlnOpjKtwDf4MkPHWaikc52BijDMFTKNWXjvgs7Ub72luoGpORX5NodRvLzJ1K8%2FHVuingH3M%2BBfXTPk67NQPPdGx%2BlBvVChFSghm0uXOtEFQ9Pwn7d2SVQqROpnPbnRZQ3mSMBuReAIw1HYmj4fe2QiTJcuGb7KubAfAjiRLWIEvF7%2F%2BC%2BGT%2FgtbbzB0Ge4EfmeABlBsenFwflZiZRdf14AC30kI9axCjh8JN9P6ZQ5%2BHoSilBQmouoXqVZfWFBQZw29WcnSXbsU6JN7054PjGp1vcFgBcPSch6Q9CKCdk%2FcYxzjakkFNiPGoKsShDNSWSsR63YN1ows3N7NqsB55L0r1C0rqRJLQAbRbDDgKoX5BEAU%2BsWXpdZPuHlVpRqSlYIXpdxMbzP0tfeigfB%2F7azeebxKyuSw5PB5LahfgdjYmx1eL7xm5YCWKDEB%2BUe%2BI%2BePjqiB14HqtAheyKKhjQHqb8SoqCPFQV8Kh4BVdSAX7oc4nmBjkdcJeS8CbqKJWhLkJRaiXQVpnpk%2FTw626sVqu0NVzbJDYzXHx4HZTPzT142oPPhJz%2B%2F%2BRLu3nwZNkzvpbYOzuqPL6rHRY7rFxdNn5KMsFWi7oEJTwTSgHL5oczP8Ewo2MMfzN1erZZRQf4Fowi4zexAY6pgEaPNUUUjXF9h0lSkD8MFnK%2BKDOojLYMnnnylpCB16te52bEeKwtGzp99mAKZt0HKUqIJCiEOerRW1p7jMSwW70N%2Fs4G9Od%2FGY1u5e452HejyFX4zCdq4fkV9q3N%2FEczb9srA7Si6CMMvmbwmS2NNteZGZAp1rOmnAbVRClkhETHkcNnccj92gvb8cWZvEsr3qh61FyUR%2FstMsMVQudAZhvl9u1444v&X-Amz-Signature=416462fec9555ef38323e15088e1f1a48a5873d9446c1ff59f458ef6f6efed29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7LLL4E%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGHeMeIiTMxzyg5GAgpIMltp3dj%2Ffd826CoXcwv4rfjAiBq2TsD5oZsoOpYNHW10RhZrw8n1pSy66Jh2hdeO05%2BoiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMemWFmcy906OlnOpjKtwDf4MkPHWaikc52BijDMFTKNWXjvgs7Ub72luoGpORX5NodRvLzJ1K8%2FHVuingH3M%2BBfXTPk67NQPPdGx%2BlBvVChFSghm0uXOtEFQ9Pwn7d2SVQqROpnPbnRZQ3mSMBuReAIw1HYmj4fe2QiTJcuGb7KubAfAjiRLWIEvF7%2F%2BC%2BGT%2FgtbbzB0Ge4EfmeABlBsenFwflZiZRdf14AC30kI9axCjh8JN9P6ZQ5%2BHoSilBQmouoXqVZfWFBQZw29WcnSXbsU6JN7054PjGp1vcFgBcPSch6Q9CKCdk%2FcYxzjakkFNiPGoKsShDNSWSsR63YN1ows3N7NqsB55L0r1C0rqRJLQAbRbDDgKoX5BEAU%2BsWXpdZPuHlVpRqSlYIXpdxMbzP0tfeigfB%2F7azeebxKyuSw5PB5LahfgdjYmx1eL7xm5YCWKDEB%2BUe%2BI%2BePjqiB14HqtAheyKKhjQHqb8SoqCPFQV8Kh4BVdSAX7oc4nmBjkdcJeS8CbqKJWhLkJRaiXQVpnpk%2FTw626sVqu0NVzbJDYzXHx4HZTPzT142oPPhJz%2B%2F%2BRLu3nwZNkzvpbYOzuqPL6rHRY7rFxdNn5KMsFWi7oEJTwTSgHL5oczP8Ewo2MMfzN1erZZRQf4Fowi4zexAY6pgEaPNUUUjXF9h0lSkD8MFnK%2BKDOojLYMnnnylpCB16te52bEeKwtGzp99mAKZt0HKUqIJCiEOerRW1p7jMSwW70N%2Fs4G9Od%2FGY1u5e452HejyFX4zCdq4fkV9q3N%2FEczb9srA7Si6CMMvmbwmS2NNteZGZAp1rOmnAbVRClkhETHkcNnccj92gvb8cWZvEsr3qh61FyUR%2FstMsMVQudAZhvl9u1444v&X-Amz-Signature=e59b5e982e73cf5efa4a3cd4344718973dfcf5899c6d45ca4a689d96b276a560&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7LLL4E%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGHeMeIiTMxzyg5GAgpIMltp3dj%2Ffd826CoXcwv4rfjAiBq2TsD5oZsoOpYNHW10RhZrw8n1pSy66Jh2hdeO05%2BoiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMemWFmcy906OlnOpjKtwDf4MkPHWaikc52BijDMFTKNWXjvgs7Ub72luoGpORX5NodRvLzJ1K8%2FHVuingH3M%2BBfXTPk67NQPPdGx%2BlBvVChFSghm0uXOtEFQ9Pwn7d2SVQqROpnPbnRZQ3mSMBuReAIw1HYmj4fe2QiTJcuGb7KubAfAjiRLWIEvF7%2F%2BC%2BGT%2FgtbbzB0Ge4EfmeABlBsenFwflZiZRdf14AC30kI9axCjh8JN9P6ZQ5%2BHoSilBQmouoXqVZfWFBQZw29WcnSXbsU6JN7054PjGp1vcFgBcPSch6Q9CKCdk%2FcYxzjakkFNiPGoKsShDNSWSsR63YN1ows3N7NqsB55L0r1C0rqRJLQAbRbDDgKoX5BEAU%2BsWXpdZPuHlVpRqSlYIXpdxMbzP0tfeigfB%2F7azeebxKyuSw5PB5LahfgdjYmx1eL7xm5YCWKDEB%2BUe%2BI%2BePjqiB14HqtAheyKKhjQHqb8SoqCPFQV8Kh4BVdSAX7oc4nmBjkdcJeS8CbqKJWhLkJRaiXQVpnpk%2FTw626sVqu0NVzbJDYzXHx4HZTPzT142oPPhJz%2B%2F%2BRLu3nwZNkzvpbYOzuqPL6rHRY7rFxdNn5KMsFWi7oEJTwTSgHL5oczP8Ewo2MMfzN1erZZRQf4Fowi4zexAY6pgEaPNUUUjXF9h0lSkD8MFnK%2BKDOojLYMnnnylpCB16te52bEeKwtGzp99mAKZt0HKUqIJCiEOerRW1p7jMSwW70N%2Fs4G9Od%2FGY1u5e452HejyFX4zCdq4fkV9q3N%2FEczb9srA7Si6CMMvmbwmS2NNteZGZAp1rOmnAbVRClkhETHkcNnccj92gvb8cWZvEsr3qh61FyUR%2FstMsMVQudAZhvl9u1444v&X-Amz-Signature=bc220a033065ac3007e955b93f34461d77d0fc45ef5cd115bd5cd4f2c5931e6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7LLL4E%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGHeMeIiTMxzyg5GAgpIMltp3dj%2Ffd826CoXcwv4rfjAiBq2TsD5oZsoOpYNHW10RhZrw8n1pSy66Jh2hdeO05%2BoiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMemWFmcy906OlnOpjKtwDf4MkPHWaikc52BijDMFTKNWXjvgs7Ub72luoGpORX5NodRvLzJ1K8%2FHVuingH3M%2BBfXTPk67NQPPdGx%2BlBvVChFSghm0uXOtEFQ9Pwn7d2SVQqROpnPbnRZQ3mSMBuReAIw1HYmj4fe2QiTJcuGb7KubAfAjiRLWIEvF7%2F%2BC%2BGT%2FgtbbzB0Ge4EfmeABlBsenFwflZiZRdf14AC30kI9axCjh8JN9P6ZQ5%2BHoSilBQmouoXqVZfWFBQZw29WcnSXbsU6JN7054PjGp1vcFgBcPSch6Q9CKCdk%2FcYxzjakkFNiPGoKsShDNSWSsR63YN1ows3N7NqsB55L0r1C0rqRJLQAbRbDDgKoX5BEAU%2BsWXpdZPuHlVpRqSlYIXpdxMbzP0tfeigfB%2F7azeebxKyuSw5PB5LahfgdjYmx1eL7xm5YCWKDEB%2BUe%2BI%2BePjqiB14HqtAheyKKhjQHqb8SoqCPFQV8Kh4BVdSAX7oc4nmBjkdcJeS8CbqKJWhLkJRaiXQVpnpk%2FTw626sVqu0NVzbJDYzXHx4HZTPzT142oPPhJz%2B%2F%2BRLu3nwZNkzvpbYOzuqPL6rHRY7rFxdNn5KMsFWi7oEJTwTSgHL5oczP8Ewo2MMfzN1erZZRQf4Fowi4zexAY6pgEaPNUUUjXF9h0lSkD8MFnK%2BKDOojLYMnnnylpCB16te52bEeKwtGzp99mAKZt0HKUqIJCiEOerRW1p7jMSwW70N%2Fs4G9Od%2FGY1u5e452HejyFX4zCdq4fkV9q3N%2FEczb9srA7Si6CMMvmbwmS2NNteZGZAp1rOmnAbVRClkhETHkcNnccj92gvb8cWZvEsr3qh61FyUR%2FstMsMVQudAZhvl9u1444v&X-Amz-Signature=b263cd535b0b7cd9803fe48ca11f05c28cc06de8b282318b68b328669cf55304&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7LLL4E%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGHeMeIiTMxzyg5GAgpIMltp3dj%2Ffd826CoXcwv4rfjAiBq2TsD5oZsoOpYNHW10RhZrw8n1pSy66Jh2hdeO05%2BoiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMemWFmcy906OlnOpjKtwDf4MkPHWaikc52BijDMFTKNWXjvgs7Ub72luoGpORX5NodRvLzJ1K8%2FHVuingH3M%2BBfXTPk67NQPPdGx%2BlBvVChFSghm0uXOtEFQ9Pwn7d2SVQqROpnPbnRZQ3mSMBuReAIw1HYmj4fe2QiTJcuGb7KubAfAjiRLWIEvF7%2F%2BC%2BGT%2FgtbbzB0Ge4EfmeABlBsenFwflZiZRdf14AC30kI9axCjh8JN9P6ZQ5%2BHoSilBQmouoXqVZfWFBQZw29WcnSXbsU6JN7054PjGp1vcFgBcPSch6Q9CKCdk%2FcYxzjakkFNiPGoKsShDNSWSsR63YN1ows3N7NqsB55L0r1C0rqRJLQAbRbDDgKoX5BEAU%2BsWXpdZPuHlVpRqSlYIXpdxMbzP0tfeigfB%2F7azeebxKyuSw5PB5LahfgdjYmx1eL7xm5YCWKDEB%2BUe%2BI%2BePjqiB14HqtAheyKKhjQHqb8SoqCPFQV8Kh4BVdSAX7oc4nmBjkdcJeS8CbqKJWhLkJRaiXQVpnpk%2FTw626sVqu0NVzbJDYzXHx4HZTPzT142oPPhJz%2B%2F%2BRLu3nwZNkzvpbYOzuqPL6rHRY7rFxdNn5KMsFWi7oEJTwTSgHL5oczP8Ewo2MMfzN1erZZRQf4Fowi4zexAY6pgEaPNUUUjXF9h0lSkD8MFnK%2BKDOojLYMnnnylpCB16te52bEeKwtGzp99mAKZt0HKUqIJCiEOerRW1p7jMSwW70N%2Fs4G9Od%2FGY1u5e452HejyFX4zCdq4fkV9q3N%2FEczb9srA7Si6CMMvmbwmS2NNteZGZAp1rOmnAbVRClkhETHkcNnccj92gvb8cWZvEsr3qh61FyUR%2FstMsMVQudAZhvl9u1444v&X-Amz-Signature=3323e65de70ccff04818fa3b1b674bc3fab97fe0b729c76228f6048fc2f21385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7LLL4E%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGHeMeIiTMxzyg5GAgpIMltp3dj%2Ffd826CoXcwv4rfjAiBq2TsD5oZsoOpYNHW10RhZrw8n1pSy66Jh2hdeO05%2BoiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMemWFmcy906OlnOpjKtwDf4MkPHWaikc52BijDMFTKNWXjvgs7Ub72luoGpORX5NodRvLzJ1K8%2FHVuingH3M%2BBfXTPk67NQPPdGx%2BlBvVChFSghm0uXOtEFQ9Pwn7d2SVQqROpnPbnRZQ3mSMBuReAIw1HYmj4fe2QiTJcuGb7KubAfAjiRLWIEvF7%2F%2BC%2BGT%2FgtbbzB0Ge4EfmeABlBsenFwflZiZRdf14AC30kI9axCjh8JN9P6ZQ5%2BHoSilBQmouoXqVZfWFBQZw29WcnSXbsU6JN7054PjGp1vcFgBcPSch6Q9CKCdk%2FcYxzjakkFNiPGoKsShDNSWSsR63YN1ows3N7NqsB55L0r1C0rqRJLQAbRbDDgKoX5BEAU%2BsWXpdZPuHlVpRqSlYIXpdxMbzP0tfeigfB%2F7azeebxKyuSw5PB5LahfgdjYmx1eL7xm5YCWKDEB%2BUe%2BI%2BePjqiB14HqtAheyKKhjQHqb8SoqCPFQV8Kh4BVdSAX7oc4nmBjkdcJeS8CbqKJWhLkJRaiXQVpnpk%2FTw626sVqu0NVzbJDYzXHx4HZTPzT142oPPhJz%2B%2F%2BRLu3nwZNkzvpbYOzuqPL6rHRY7rFxdNn5KMsFWi7oEJTwTSgHL5oczP8Ewo2MMfzN1erZZRQf4Fowi4zexAY6pgEaPNUUUjXF9h0lSkD8MFnK%2BKDOojLYMnnnylpCB16te52bEeKwtGzp99mAKZt0HKUqIJCiEOerRW1p7jMSwW70N%2Fs4G9Od%2FGY1u5e452HejyFX4zCdq4fkV9q3N%2FEczb9srA7Si6CMMvmbwmS2NNteZGZAp1rOmnAbVRClkhETHkcNnccj92gvb8cWZvEsr3qh61FyUR%2FstMsMVQudAZhvl9u1444v&X-Amz-Signature=651ddbfbce50d9745b998cf65ebb93e18fda170c1eaef071ca6835735f577119&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7LLL4E%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGHeMeIiTMxzyg5GAgpIMltp3dj%2Ffd826CoXcwv4rfjAiBq2TsD5oZsoOpYNHW10RhZrw8n1pSy66Jh2hdeO05%2BoiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMemWFmcy906OlnOpjKtwDf4MkPHWaikc52BijDMFTKNWXjvgs7Ub72luoGpORX5NodRvLzJ1K8%2FHVuingH3M%2BBfXTPk67NQPPdGx%2BlBvVChFSghm0uXOtEFQ9Pwn7d2SVQqROpnPbnRZQ3mSMBuReAIw1HYmj4fe2QiTJcuGb7KubAfAjiRLWIEvF7%2F%2BC%2BGT%2FgtbbzB0Ge4EfmeABlBsenFwflZiZRdf14AC30kI9axCjh8JN9P6ZQ5%2BHoSilBQmouoXqVZfWFBQZw29WcnSXbsU6JN7054PjGp1vcFgBcPSch6Q9CKCdk%2FcYxzjakkFNiPGoKsShDNSWSsR63YN1ows3N7NqsB55L0r1C0rqRJLQAbRbDDgKoX5BEAU%2BsWXpdZPuHlVpRqSlYIXpdxMbzP0tfeigfB%2F7azeebxKyuSw5PB5LahfgdjYmx1eL7xm5YCWKDEB%2BUe%2BI%2BePjqiB14HqtAheyKKhjQHqb8SoqCPFQV8Kh4BVdSAX7oc4nmBjkdcJeS8CbqKJWhLkJRaiXQVpnpk%2FTw626sVqu0NVzbJDYzXHx4HZTPzT142oPPhJz%2B%2F%2BRLu3nwZNkzvpbYOzuqPL6rHRY7rFxdNn5KMsFWi7oEJTwTSgHL5oczP8Ewo2MMfzN1erZZRQf4Fowi4zexAY6pgEaPNUUUjXF9h0lSkD8MFnK%2BKDOojLYMnnnylpCB16te52bEeKwtGzp99mAKZt0HKUqIJCiEOerRW1p7jMSwW70N%2Fs4G9Od%2FGY1u5e452HejyFX4zCdq4fkV9q3N%2FEczb9srA7Si6CMMvmbwmS2NNteZGZAp1rOmnAbVRClkhETHkcNnccj92gvb8cWZvEsr3qh61FyUR%2FstMsMVQudAZhvl9u1444v&X-Amz-Signature=ca9cf51146e85956bc16ce92666f7e65a7c5e96c3fd9befe5f64bde7184edf90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK7LLL4E%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGHeMeIiTMxzyg5GAgpIMltp3dj%2Ffd826CoXcwv4rfjAiBq2TsD5oZsoOpYNHW10RhZrw8n1pSy66Jh2hdeO05%2BoiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMemWFmcy906OlnOpjKtwDf4MkPHWaikc52BijDMFTKNWXjvgs7Ub72luoGpORX5NodRvLzJ1K8%2FHVuingH3M%2BBfXTPk67NQPPdGx%2BlBvVChFSghm0uXOtEFQ9Pwn7d2SVQqROpnPbnRZQ3mSMBuReAIw1HYmj4fe2QiTJcuGb7KubAfAjiRLWIEvF7%2F%2BC%2BGT%2FgtbbzB0Ge4EfmeABlBsenFwflZiZRdf14AC30kI9axCjh8JN9P6ZQ5%2BHoSilBQmouoXqVZfWFBQZw29WcnSXbsU6JN7054PjGp1vcFgBcPSch6Q9CKCdk%2FcYxzjakkFNiPGoKsShDNSWSsR63YN1ows3N7NqsB55L0r1C0rqRJLQAbRbDDgKoX5BEAU%2BsWXpdZPuHlVpRqSlYIXpdxMbzP0tfeigfB%2F7azeebxKyuSw5PB5LahfgdjYmx1eL7xm5YCWKDEB%2BUe%2BI%2BePjqiB14HqtAheyKKhjQHqb8SoqCPFQV8Kh4BVdSAX7oc4nmBjkdcJeS8CbqKJWhLkJRaiXQVpnpk%2FTw626sVqu0NVzbJDYzXHx4HZTPzT142oPPhJz%2B%2F%2BRLu3nwZNkzvpbYOzuqPL6rHRY7rFxdNn5KMsFWi7oEJTwTSgHL5oczP8Ewo2MMfzN1erZZRQf4Fowi4zexAY6pgEaPNUUUjXF9h0lSkD8MFnK%2BKDOojLYMnnnylpCB16te52bEeKwtGzp99mAKZt0HKUqIJCiEOerRW1p7jMSwW70N%2Fs4G9Od%2FGY1u5e452HejyFX4zCdq4fkV9q3N%2FEczb9srA7Si6CMMvmbwmS2NNteZGZAp1rOmnAbVRClkhETHkcNnccj92gvb8cWZvEsr3qh61FyUR%2FstMsMVQudAZhvl9u1444v&X-Amz-Signature=26ad719ba9baf11beaf3758c34f5400e892d92e118975ca0dd1398db27ad50b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
