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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ7MKCZF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIDMdx3gxGIIOpH7%2BRY6kcqy7NBFgXWfxwRQnIRJV%2B1doAiEA2Y9okJCk6bu78PqHhwEI0n99hpRxe0D6IOHypPusmDcqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBSGhsFT%2FQOGjDXfmSrcAwEETZH4Z90l%2Br2AJMwJGJcrR6lPYsg0A%2BPkeMlFvTF0NZlD%2BJjRofk%2BUYCF2tdShWeuNR7wdYucUxevcj%2F7Q%2BGASSf380gjLIdhcBdQW0sg0pwL3XeQ2GuyeqUYzKFZLi0VsB0PYKvI%2FBN9s2dVyPX3iJywwA4TLADYmB3m0H390TletUSH6McfIcmdaVqCGBhYWhAYJEDvQLFTZcwbQcFRYpZXX2hPvewdUnib2BM1rLP7%2BLIEwH4AcRN7jub7QctK7EC6O3aeBtysEVuw0WYgshkJEO3y9egYqnc6E%2Fr1Fg5ddY9ghLigLsLor%2FCgJ7TnCGmblU3Tlm2rWaLD%2FOuBNmbilk%2Bm%2B4kc77ZgkMJwcPd1iKJYGIjXHFRrQpAZ2ry5v6T4pcUskMjUAzJjZdOujWQbaSAum2jXNyesPHt6MohmdpJBrNp%2F2NFx0dB%2Bzv25vg5lY%2F1cWrPEfV9kI%2FpbwfcCkMnmuADRXZZxE48%2B3x8gp2GjsYxVRwdh3zVYGFpdZlwbTHrdGiLrnZUYXJ6SnheBi1OFPKjlWxpBgY%2BDuJj6NARa%2FvvenKclIbIlsRRcbIwwKwjJRQKF%2F1purmoPC9p78J2oGgdNsdRGAbYcwAPaP76OO9xU0mV6MKfQ2sQGOqUBC1aZbv3mIMPsVlYk%2BqgoE%2FS9av2%2F%2FQm7i4RkJ5KshN489qxVHn8alwxbRNHdDBi0XOJspXtJ0pAzObXBA%2By110VN3NJXrjuAyN91pqKglRytIwAl6caJcuIQ0LzL0hLwQtSG1zsC7E%2B9k7dKwg9yzskmylv6rx4lOwrCG%2BYanvK0Qc5Rmc0Z6I36%2FWIgovwR8tHSJS3pshHcexltwzH9WcQi%2Fq4M&X-Amz-Signature=42b5fade491ba7dae19dcf798fd7562b6574fcfc0e1043f3f976ac03b008054a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ7MKCZF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIDMdx3gxGIIOpH7%2BRY6kcqy7NBFgXWfxwRQnIRJV%2B1doAiEA2Y9okJCk6bu78PqHhwEI0n99hpRxe0D6IOHypPusmDcqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBSGhsFT%2FQOGjDXfmSrcAwEETZH4Z90l%2Br2AJMwJGJcrR6lPYsg0A%2BPkeMlFvTF0NZlD%2BJjRofk%2BUYCF2tdShWeuNR7wdYucUxevcj%2F7Q%2BGASSf380gjLIdhcBdQW0sg0pwL3XeQ2GuyeqUYzKFZLi0VsB0PYKvI%2FBN9s2dVyPX3iJywwA4TLADYmB3m0H390TletUSH6McfIcmdaVqCGBhYWhAYJEDvQLFTZcwbQcFRYpZXX2hPvewdUnib2BM1rLP7%2BLIEwH4AcRN7jub7QctK7EC6O3aeBtysEVuw0WYgshkJEO3y9egYqnc6E%2Fr1Fg5ddY9ghLigLsLor%2FCgJ7TnCGmblU3Tlm2rWaLD%2FOuBNmbilk%2Bm%2B4kc77ZgkMJwcPd1iKJYGIjXHFRrQpAZ2ry5v6T4pcUskMjUAzJjZdOujWQbaSAum2jXNyesPHt6MohmdpJBrNp%2F2NFx0dB%2Bzv25vg5lY%2F1cWrPEfV9kI%2FpbwfcCkMnmuADRXZZxE48%2B3x8gp2GjsYxVRwdh3zVYGFpdZlwbTHrdGiLrnZUYXJ6SnheBi1OFPKjlWxpBgY%2BDuJj6NARa%2FvvenKclIbIlsRRcbIwwKwjJRQKF%2F1purmoPC9p78J2oGgdNsdRGAbYcwAPaP76OO9xU0mV6MKfQ2sQGOqUBC1aZbv3mIMPsVlYk%2BqgoE%2FS9av2%2F%2FQm7i4RkJ5KshN489qxVHn8alwxbRNHdDBi0XOJspXtJ0pAzObXBA%2By110VN3NJXrjuAyN91pqKglRytIwAl6caJcuIQ0LzL0hLwQtSG1zsC7E%2B9k7dKwg9yzskmylv6rx4lOwrCG%2BYanvK0Qc5Rmc0Z6I36%2FWIgovwR8tHSJS3pshHcexltwzH9WcQi%2Fq4M&X-Amz-Signature=f76e4f502725d1c4226241da3a8c7559ae1ed0df6b74ef9b0b37675e84467c90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ7MKCZF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIDMdx3gxGIIOpH7%2BRY6kcqy7NBFgXWfxwRQnIRJV%2B1doAiEA2Y9okJCk6bu78PqHhwEI0n99hpRxe0D6IOHypPusmDcqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBSGhsFT%2FQOGjDXfmSrcAwEETZH4Z90l%2Br2AJMwJGJcrR6lPYsg0A%2BPkeMlFvTF0NZlD%2BJjRofk%2BUYCF2tdShWeuNR7wdYucUxevcj%2F7Q%2BGASSf380gjLIdhcBdQW0sg0pwL3XeQ2GuyeqUYzKFZLi0VsB0PYKvI%2FBN9s2dVyPX3iJywwA4TLADYmB3m0H390TletUSH6McfIcmdaVqCGBhYWhAYJEDvQLFTZcwbQcFRYpZXX2hPvewdUnib2BM1rLP7%2BLIEwH4AcRN7jub7QctK7EC6O3aeBtysEVuw0WYgshkJEO3y9egYqnc6E%2Fr1Fg5ddY9ghLigLsLor%2FCgJ7TnCGmblU3Tlm2rWaLD%2FOuBNmbilk%2Bm%2B4kc77ZgkMJwcPd1iKJYGIjXHFRrQpAZ2ry5v6T4pcUskMjUAzJjZdOujWQbaSAum2jXNyesPHt6MohmdpJBrNp%2F2NFx0dB%2Bzv25vg5lY%2F1cWrPEfV9kI%2FpbwfcCkMnmuADRXZZxE48%2B3x8gp2GjsYxVRwdh3zVYGFpdZlwbTHrdGiLrnZUYXJ6SnheBi1OFPKjlWxpBgY%2BDuJj6NARa%2FvvenKclIbIlsRRcbIwwKwjJRQKF%2F1purmoPC9p78J2oGgdNsdRGAbYcwAPaP76OO9xU0mV6MKfQ2sQGOqUBC1aZbv3mIMPsVlYk%2BqgoE%2FS9av2%2F%2FQm7i4RkJ5KshN489qxVHn8alwxbRNHdDBi0XOJspXtJ0pAzObXBA%2By110VN3NJXrjuAyN91pqKglRytIwAl6caJcuIQ0LzL0hLwQtSG1zsC7E%2B9k7dKwg9yzskmylv6rx4lOwrCG%2BYanvK0Qc5Rmc0Z6I36%2FWIgovwR8tHSJS3pshHcexltwzH9WcQi%2Fq4M&X-Amz-Signature=23477b23629531286c7068b846254464f6a7137f5167f6c6cf843f603aaa1f69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ7MKCZF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIDMdx3gxGIIOpH7%2BRY6kcqy7NBFgXWfxwRQnIRJV%2B1doAiEA2Y9okJCk6bu78PqHhwEI0n99hpRxe0D6IOHypPusmDcqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBSGhsFT%2FQOGjDXfmSrcAwEETZH4Z90l%2Br2AJMwJGJcrR6lPYsg0A%2BPkeMlFvTF0NZlD%2BJjRofk%2BUYCF2tdShWeuNR7wdYucUxevcj%2F7Q%2BGASSf380gjLIdhcBdQW0sg0pwL3XeQ2GuyeqUYzKFZLi0VsB0PYKvI%2FBN9s2dVyPX3iJywwA4TLADYmB3m0H390TletUSH6McfIcmdaVqCGBhYWhAYJEDvQLFTZcwbQcFRYpZXX2hPvewdUnib2BM1rLP7%2BLIEwH4AcRN7jub7QctK7EC6O3aeBtysEVuw0WYgshkJEO3y9egYqnc6E%2Fr1Fg5ddY9ghLigLsLor%2FCgJ7TnCGmblU3Tlm2rWaLD%2FOuBNmbilk%2Bm%2B4kc77ZgkMJwcPd1iKJYGIjXHFRrQpAZ2ry5v6T4pcUskMjUAzJjZdOujWQbaSAum2jXNyesPHt6MohmdpJBrNp%2F2NFx0dB%2Bzv25vg5lY%2F1cWrPEfV9kI%2FpbwfcCkMnmuADRXZZxE48%2B3x8gp2GjsYxVRwdh3zVYGFpdZlwbTHrdGiLrnZUYXJ6SnheBi1OFPKjlWxpBgY%2BDuJj6NARa%2FvvenKclIbIlsRRcbIwwKwjJRQKF%2F1purmoPC9p78J2oGgdNsdRGAbYcwAPaP76OO9xU0mV6MKfQ2sQGOqUBC1aZbv3mIMPsVlYk%2BqgoE%2FS9av2%2F%2FQm7i4RkJ5KshN489qxVHn8alwxbRNHdDBi0XOJspXtJ0pAzObXBA%2By110VN3NJXrjuAyN91pqKglRytIwAl6caJcuIQ0LzL0hLwQtSG1zsC7E%2B9k7dKwg9yzskmylv6rx4lOwrCG%2BYanvK0Qc5Rmc0Z6I36%2FWIgovwR8tHSJS3pshHcexltwzH9WcQi%2Fq4M&X-Amz-Signature=963bcab98df6f6b86d96df54eb24983556e1477e38345466b1d6d2c0c064b207&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ7MKCZF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIDMdx3gxGIIOpH7%2BRY6kcqy7NBFgXWfxwRQnIRJV%2B1doAiEA2Y9okJCk6bu78PqHhwEI0n99hpRxe0D6IOHypPusmDcqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBSGhsFT%2FQOGjDXfmSrcAwEETZH4Z90l%2Br2AJMwJGJcrR6lPYsg0A%2BPkeMlFvTF0NZlD%2BJjRofk%2BUYCF2tdShWeuNR7wdYucUxevcj%2F7Q%2BGASSf380gjLIdhcBdQW0sg0pwL3XeQ2GuyeqUYzKFZLi0VsB0PYKvI%2FBN9s2dVyPX3iJywwA4TLADYmB3m0H390TletUSH6McfIcmdaVqCGBhYWhAYJEDvQLFTZcwbQcFRYpZXX2hPvewdUnib2BM1rLP7%2BLIEwH4AcRN7jub7QctK7EC6O3aeBtysEVuw0WYgshkJEO3y9egYqnc6E%2Fr1Fg5ddY9ghLigLsLor%2FCgJ7TnCGmblU3Tlm2rWaLD%2FOuBNmbilk%2Bm%2B4kc77ZgkMJwcPd1iKJYGIjXHFRrQpAZ2ry5v6T4pcUskMjUAzJjZdOujWQbaSAum2jXNyesPHt6MohmdpJBrNp%2F2NFx0dB%2Bzv25vg5lY%2F1cWrPEfV9kI%2FpbwfcCkMnmuADRXZZxE48%2B3x8gp2GjsYxVRwdh3zVYGFpdZlwbTHrdGiLrnZUYXJ6SnheBi1OFPKjlWxpBgY%2BDuJj6NARa%2FvvenKclIbIlsRRcbIwwKwjJRQKF%2F1purmoPC9p78J2oGgdNsdRGAbYcwAPaP76OO9xU0mV6MKfQ2sQGOqUBC1aZbv3mIMPsVlYk%2BqgoE%2FS9av2%2F%2FQm7i4RkJ5KshN489qxVHn8alwxbRNHdDBi0XOJspXtJ0pAzObXBA%2By110VN3NJXrjuAyN91pqKglRytIwAl6caJcuIQ0LzL0hLwQtSG1zsC7E%2B9k7dKwg9yzskmylv6rx4lOwrCG%2BYanvK0Qc5Rmc0Z6I36%2FWIgovwR8tHSJS3pshHcexltwzH9WcQi%2Fq4M&X-Amz-Signature=7c6810301848adf96ebc5bd027dd140507c22c1d4cd4734d4cb536ae9ad36a91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ7MKCZF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIDMdx3gxGIIOpH7%2BRY6kcqy7NBFgXWfxwRQnIRJV%2B1doAiEA2Y9okJCk6bu78PqHhwEI0n99hpRxe0D6IOHypPusmDcqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBSGhsFT%2FQOGjDXfmSrcAwEETZH4Z90l%2Br2AJMwJGJcrR6lPYsg0A%2BPkeMlFvTF0NZlD%2BJjRofk%2BUYCF2tdShWeuNR7wdYucUxevcj%2F7Q%2BGASSf380gjLIdhcBdQW0sg0pwL3XeQ2GuyeqUYzKFZLi0VsB0PYKvI%2FBN9s2dVyPX3iJywwA4TLADYmB3m0H390TletUSH6McfIcmdaVqCGBhYWhAYJEDvQLFTZcwbQcFRYpZXX2hPvewdUnib2BM1rLP7%2BLIEwH4AcRN7jub7QctK7EC6O3aeBtysEVuw0WYgshkJEO3y9egYqnc6E%2Fr1Fg5ddY9ghLigLsLor%2FCgJ7TnCGmblU3Tlm2rWaLD%2FOuBNmbilk%2Bm%2B4kc77ZgkMJwcPd1iKJYGIjXHFRrQpAZ2ry5v6T4pcUskMjUAzJjZdOujWQbaSAum2jXNyesPHt6MohmdpJBrNp%2F2NFx0dB%2Bzv25vg5lY%2F1cWrPEfV9kI%2FpbwfcCkMnmuADRXZZxE48%2B3x8gp2GjsYxVRwdh3zVYGFpdZlwbTHrdGiLrnZUYXJ6SnheBi1OFPKjlWxpBgY%2BDuJj6NARa%2FvvenKclIbIlsRRcbIwwKwjJRQKF%2F1purmoPC9p78J2oGgdNsdRGAbYcwAPaP76OO9xU0mV6MKfQ2sQGOqUBC1aZbv3mIMPsVlYk%2BqgoE%2FS9av2%2F%2FQm7i4RkJ5KshN489qxVHn8alwxbRNHdDBi0XOJspXtJ0pAzObXBA%2By110VN3NJXrjuAyN91pqKglRytIwAl6caJcuIQ0LzL0hLwQtSG1zsC7E%2B9k7dKwg9yzskmylv6rx4lOwrCG%2BYanvK0Qc5Rmc0Z6I36%2FWIgovwR8tHSJS3pshHcexltwzH9WcQi%2Fq4M&X-Amz-Signature=167b05f149988c232fe58ffed94a1e09e1e5c07d34089376bcf23a3ee0dc8413&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ7MKCZF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIDMdx3gxGIIOpH7%2BRY6kcqy7NBFgXWfxwRQnIRJV%2B1doAiEA2Y9okJCk6bu78PqHhwEI0n99hpRxe0D6IOHypPusmDcqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBSGhsFT%2FQOGjDXfmSrcAwEETZH4Z90l%2Br2AJMwJGJcrR6lPYsg0A%2BPkeMlFvTF0NZlD%2BJjRofk%2BUYCF2tdShWeuNR7wdYucUxevcj%2F7Q%2BGASSf380gjLIdhcBdQW0sg0pwL3XeQ2GuyeqUYzKFZLi0VsB0PYKvI%2FBN9s2dVyPX3iJywwA4TLADYmB3m0H390TletUSH6McfIcmdaVqCGBhYWhAYJEDvQLFTZcwbQcFRYpZXX2hPvewdUnib2BM1rLP7%2BLIEwH4AcRN7jub7QctK7EC6O3aeBtysEVuw0WYgshkJEO3y9egYqnc6E%2Fr1Fg5ddY9ghLigLsLor%2FCgJ7TnCGmblU3Tlm2rWaLD%2FOuBNmbilk%2Bm%2B4kc77ZgkMJwcPd1iKJYGIjXHFRrQpAZ2ry5v6T4pcUskMjUAzJjZdOujWQbaSAum2jXNyesPHt6MohmdpJBrNp%2F2NFx0dB%2Bzv25vg5lY%2F1cWrPEfV9kI%2FpbwfcCkMnmuADRXZZxE48%2B3x8gp2GjsYxVRwdh3zVYGFpdZlwbTHrdGiLrnZUYXJ6SnheBi1OFPKjlWxpBgY%2BDuJj6NARa%2FvvenKclIbIlsRRcbIwwKwjJRQKF%2F1purmoPC9p78J2oGgdNsdRGAbYcwAPaP76OO9xU0mV6MKfQ2sQGOqUBC1aZbv3mIMPsVlYk%2BqgoE%2FS9av2%2F%2FQm7i4RkJ5KshN489qxVHn8alwxbRNHdDBi0XOJspXtJ0pAzObXBA%2By110VN3NJXrjuAyN91pqKglRytIwAl6caJcuIQ0LzL0hLwQtSG1zsC7E%2B9k7dKwg9yzskmylv6rx4lOwrCG%2BYanvK0Qc5Rmc0Z6I36%2FWIgovwR8tHSJS3pshHcexltwzH9WcQi%2Fq4M&X-Amz-Signature=cb0a4b4e9cb842ea69a06c06e8a1cc11be418004ce79babd065f2ff6066a1a33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ7MKCZF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIDMdx3gxGIIOpH7%2BRY6kcqy7NBFgXWfxwRQnIRJV%2B1doAiEA2Y9okJCk6bu78PqHhwEI0n99hpRxe0D6IOHypPusmDcqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBSGhsFT%2FQOGjDXfmSrcAwEETZH4Z90l%2Br2AJMwJGJcrR6lPYsg0A%2BPkeMlFvTF0NZlD%2BJjRofk%2BUYCF2tdShWeuNR7wdYucUxevcj%2F7Q%2BGASSf380gjLIdhcBdQW0sg0pwL3XeQ2GuyeqUYzKFZLi0VsB0PYKvI%2FBN9s2dVyPX3iJywwA4TLADYmB3m0H390TletUSH6McfIcmdaVqCGBhYWhAYJEDvQLFTZcwbQcFRYpZXX2hPvewdUnib2BM1rLP7%2BLIEwH4AcRN7jub7QctK7EC6O3aeBtysEVuw0WYgshkJEO3y9egYqnc6E%2Fr1Fg5ddY9ghLigLsLor%2FCgJ7TnCGmblU3Tlm2rWaLD%2FOuBNmbilk%2Bm%2B4kc77ZgkMJwcPd1iKJYGIjXHFRrQpAZ2ry5v6T4pcUskMjUAzJjZdOujWQbaSAum2jXNyesPHt6MohmdpJBrNp%2F2NFx0dB%2Bzv25vg5lY%2F1cWrPEfV9kI%2FpbwfcCkMnmuADRXZZxE48%2B3x8gp2GjsYxVRwdh3zVYGFpdZlwbTHrdGiLrnZUYXJ6SnheBi1OFPKjlWxpBgY%2BDuJj6NARa%2FvvenKclIbIlsRRcbIwwKwjJRQKF%2F1purmoPC9p78J2oGgdNsdRGAbYcwAPaP76OO9xU0mV6MKfQ2sQGOqUBC1aZbv3mIMPsVlYk%2BqgoE%2FS9av2%2F%2FQm7i4RkJ5KshN489qxVHn8alwxbRNHdDBi0XOJspXtJ0pAzObXBA%2By110VN3NJXrjuAyN91pqKglRytIwAl6caJcuIQ0LzL0hLwQtSG1zsC7E%2B9k7dKwg9yzskmylv6rx4lOwrCG%2BYanvK0Qc5Rmc0Z6I36%2FWIgovwR8tHSJS3pshHcexltwzH9WcQi%2Fq4M&X-Amz-Signature=b411d9feb66e6b3b7ab891e6b4b0cf9795bc2f0f0acf21d05e782e6427c346e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ7MKCZF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIDMdx3gxGIIOpH7%2BRY6kcqy7NBFgXWfxwRQnIRJV%2B1doAiEA2Y9okJCk6bu78PqHhwEI0n99hpRxe0D6IOHypPusmDcqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBSGhsFT%2FQOGjDXfmSrcAwEETZH4Z90l%2Br2AJMwJGJcrR6lPYsg0A%2BPkeMlFvTF0NZlD%2BJjRofk%2BUYCF2tdShWeuNR7wdYucUxevcj%2F7Q%2BGASSf380gjLIdhcBdQW0sg0pwL3XeQ2GuyeqUYzKFZLi0VsB0PYKvI%2FBN9s2dVyPX3iJywwA4TLADYmB3m0H390TletUSH6McfIcmdaVqCGBhYWhAYJEDvQLFTZcwbQcFRYpZXX2hPvewdUnib2BM1rLP7%2BLIEwH4AcRN7jub7QctK7EC6O3aeBtysEVuw0WYgshkJEO3y9egYqnc6E%2Fr1Fg5ddY9ghLigLsLor%2FCgJ7TnCGmblU3Tlm2rWaLD%2FOuBNmbilk%2Bm%2B4kc77ZgkMJwcPd1iKJYGIjXHFRrQpAZ2ry5v6T4pcUskMjUAzJjZdOujWQbaSAum2jXNyesPHt6MohmdpJBrNp%2F2NFx0dB%2Bzv25vg5lY%2F1cWrPEfV9kI%2FpbwfcCkMnmuADRXZZxE48%2B3x8gp2GjsYxVRwdh3zVYGFpdZlwbTHrdGiLrnZUYXJ6SnheBi1OFPKjlWxpBgY%2BDuJj6NARa%2FvvenKclIbIlsRRcbIwwKwjJRQKF%2F1purmoPC9p78J2oGgdNsdRGAbYcwAPaP76OO9xU0mV6MKfQ2sQGOqUBC1aZbv3mIMPsVlYk%2BqgoE%2FS9av2%2F%2FQm7i4RkJ5KshN489qxVHn8alwxbRNHdDBi0XOJspXtJ0pAzObXBA%2By110VN3NJXrjuAyN91pqKglRytIwAl6caJcuIQ0LzL0hLwQtSG1zsC7E%2B9k7dKwg9yzskmylv6rx4lOwrCG%2BYanvK0Qc5Rmc0Z6I36%2FWIgovwR8tHSJS3pshHcexltwzH9WcQi%2Fq4M&X-Amz-Signature=5e6db214c97670433a5cd0407fe88291cc20a0b034610d08d3cc50ff645d130c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ7MKCZF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIDMdx3gxGIIOpH7%2BRY6kcqy7NBFgXWfxwRQnIRJV%2B1doAiEA2Y9okJCk6bu78PqHhwEI0n99hpRxe0D6IOHypPusmDcqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBSGhsFT%2FQOGjDXfmSrcAwEETZH4Z90l%2Br2AJMwJGJcrR6lPYsg0A%2BPkeMlFvTF0NZlD%2BJjRofk%2BUYCF2tdShWeuNR7wdYucUxevcj%2F7Q%2BGASSf380gjLIdhcBdQW0sg0pwL3XeQ2GuyeqUYzKFZLi0VsB0PYKvI%2FBN9s2dVyPX3iJywwA4TLADYmB3m0H390TletUSH6McfIcmdaVqCGBhYWhAYJEDvQLFTZcwbQcFRYpZXX2hPvewdUnib2BM1rLP7%2BLIEwH4AcRN7jub7QctK7EC6O3aeBtysEVuw0WYgshkJEO3y9egYqnc6E%2Fr1Fg5ddY9ghLigLsLor%2FCgJ7TnCGmblU3Tlm2rWaLD%2FOuBNmbilk%2Bm%2B4kc77ZgkMJwcPd1iKJYGIjXHFRrQpAZ2ry5v6T4pcUskMjUAzJjZdOujWQbaSAum2jXNyesPHt6MohmdpJBrNp%2F2NFx0dB%2Bzv25vg5lY%2F1cWrPEfV9kI%2FpbwfcCkMnmuADRXZZxE48%2B3x8gp2GjsYxVRwdh3zVYGFpdZlwbTHrdGiLrnZUYXJ6SnheBi1OFPKjlWxpBgY%2BDuJj6NARa%2FvvenKclIbIlsRRcbIwwKwjJRQKF%2F1purmoPC9p78J2oGgdNsdRGAbYcwAPaP76OO9xU0mV6MKfQ2sQGOqUBC1aZbv3mIMPsVlYk%2BqgoE%2FS9av2%2F%2FQm7i4RkJ5KshN489qxVHn8alwxbRNHdDBi0XOJspXtJ0pAzObXBA%2By110VN3NJXrjuAyN91pqKglRytIwAl6caJcuIQ0LzL0hLwQtSG1zsC7E%2B9k7dKwg9yzskmylv6rx4lOwrCG%2BYanvK0Qc5Rmc0Z6I36%2FWIgovwR8tHSJS3pshHcexltwzH9WcQi%2Fq4M&X-Amz-Signature=b257582af2e85bac6c40e85d01749d9679f9222a644939021eb2052b9c257a8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ7MKCZF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIDMdx3gxGIIOpH7%2BRY6kcqy7NBFgXWfxwRQnIRJV%2B1doAiEA2Y9okJCk6bu78PqHhwEI0n99hpRxe0D6IOHypPusmDcqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBSGhsFT%2FQOGjDXfmSrcAwEETZH4Z90l%2Br2AJMwJGJcrR6lPYsg0A%2BPkeMlFvTF0NZlD%2BJjRofk%2BUYCF2tdShWeuNR7wdYucUxevcj%2F7Q%2BGASSf380gjLIdhcBdQW0sg0pwL3XeQ2GuyeqUYzKFZLi0VsB0PYKvI%2FBN9s2dVyPX3iJywwA4TLADYmB3m0H390TletUSH6McfIcmdaVqCGBhYWhAYJEDvQLFTZcwbQcFRYpZXX2hPvewdUnib2BM1rLP7%2BLIEwH4AcRN7jub7QctK7EC6O3aeBtysEVuw0WYgshkJEO3y9egYqnc6E%2Fr1Fg5ddY9ghLigLsLor%2FCgJ7TnCGmblU3Tlm2rWaLD%2FOuBNmbilk%2Bm%2B4kc77ZgkMJwcPd1iKJYGIjXHFRrQpAZ2ry5v6T4pcUskMjUAzJjZdOujWQbaSAum2jXNyesPHt6MohmdpJBrNp%2F2NFx0dB%2Bzv25vg5lY%2F1cWrPEfV9kI%2FpbwfcCkMnmuADRXZZxE48%2B3x8gp2GjsYxVRwdh3zVYGFpdZlwbTHrdGiLrnZUYXJ6SnheBi1OFPKjlWxpBgY%2BDuJj6NARa%2FvvenKclIbIlsRRcbIwwKwjJRQKF%2F1purmoPC9p78J2oGgdNsdRGAbYcwAPaP76OO9xU0mV6MKfQ2sQGOqUBC1aZbv3mIMPsVlYk%2BqgoE%2FS9av2%2F%2FQm7i4RkJ5KshN489qxVHn8alwxbRNHdDBi0XOJspXtJ0pAzObXBA%2By110VN3NJXrjuAyN91pqKglRytIwAl6caJcuIQ0LzL0hLwQtSG1zsC7E%2B9k7dKwg9yzskmylv6rx4lOwrCG%2BYanvK0Qc5Rmc0Z6I36%2FWIgovwR8tHSJS3pshHcexltwzH9WcQi%2Fq4M&X-Amz-Signature=d6a0f45b2c6a2ab09c1d01eb95ae67b7079388d9e006f61ed2f4f675b58ebfd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ7MKCZF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIDMdx3gxGIIOpH7%2BRY6kcqy7NBFgXWfxwRQnIRJV%2B1doAiEA2Y9okJCk6bu78PqHhwEI0n99hpRxe0D6IOHypPusmDcqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBSGhsFT%2FQOGjDXfmSrcAwEETZH4Z90l%2Br2AJMwJGJcrR6lPYsg0A%2BPkeMlFvTF0NZlD%2BJjRofk%2BUYCF2tdShWeuNR7wdYucUxevcj%2F7Q%2BGASSf380gjLIdhcBdQW0sg0pwL3XeQ2GuyeqUYzKFZLi0VsB0PYKvI%2FBN9s2dVyPX3iJywwA4TLADYmB3m0H390TletUSH6McfIcmdaVqCGBhYWhAYJEDvQLFTZcwbQcFRYpZXX2hPvewdUnib2BM1rLP7%2BLIEwH4AcRN7jub7QctK7EC6O3aeBtysEVuw0WYgshkJEO3y9egYqnc6E%2Fr1Fg5ddY9ghLigLsLor%2FCgJ7TnCGmblU3Tlm2rWaLD%2FOuBNmbilk%2Bm%2B4kc77ZgkMJwcPd1iKJYGIjXHFRrQpAZ2ry5v6T4pcUskMjUAzJjZdOujWQbaSAum2jXNyesPHt6MohmdpJBrNp%2F2NFx0dB%2Bzv25vg5lY%2F1cWrPEfV9kI%2FpbwfcCkMnmuADRXZZxE48%2B3x8gp2GjsYxVRwdh3zVYGFpdZlwbTHrdGiLrnZUYXJ6SnheBi1OFPKjlWxpBgY%2BDuJj6NARa%2FvvenKclIbIlsRRcbIwwKwjJRQKF%2F1purmoPC9p78J2oGgdNsdRGAbYcwAPaP76OO9xU0mV6MKfQ2sQGOqUBC1aZbv3mIMPsVlYk%2BqgoE%2FS9av2%2F%2FQm7i4RkJ5KshN489qxVHn8alwxbRNHdDBi0XOJspXtJ0pAzObXBA%2By110VN3NJXrjuAyN91pqKglRytIwAl6caJcuIQ0LzL0hLwQtSG1zsC7E%2B9k7dKwg9yzskmylv6rx4lOwrCG%2BYanvK0Qc5Rmc0Z6I36%2FWIgovwR8tHSJS3pshHcexltwzH9WcQi%2Fq4M&X-Amz-Signature=4674e75ef401f6e35ad8d82d161efbabb13c40f54f996dc2d3809807dcfbb358&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ7MKCZF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIDMdx3gxGIIOpH7%2BRY6kcqy7NBFgXWfxwRQnIRJV%2B1doAiEA2Y9okJCk6bu78PqHhwEI0n99hpRxe0D6IOHypPusmDcqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBSGhsFT%2FQOGjDXfmSrcAwEETZH4Z90l%2Br2AJMwJGJcrR6lPYsg0A%2BPkeMlFvTF0NZlD%2BJjRofk%2BUYCF2tdShWeuNR7wdYucUxevcj%2F7Q%2BGASSf380gjLIdhcBdQW0sg0pwL3XeQ2GuyeqUYzKFZLi0VsB0PYKvI%2FBN9s2dVyPX3iJywwA4TLADYmB3m0H390TletUSH6McfIcmdaVqCGBhYWhAYJEDvQLFTZcwbQcFRYpZXX2hPvewdUnib2BM1rLP7%2BLIEwH4AcRN7jub7QctK7EC6O3aeBtysEVuw0WYgshkJEO3y9egYqnc6E%2Fr1Fg5ddY9ghLigLsLor%2FCgJ7TnCGmblU3Tlm2rWaLD%2FOuBNmbilk%2Bm%2B4kc77ZgkMJwcPd1iKJYGIjXHFRrQpAZ2ry5v6T4pcUskMjUAzJjZdOujWQbaSAum2jXNyesPHt6MohmdpJBrNp%2F2NFx0dB%2Bzv25vg5lY%2F1cWrPEfV9kI%2FpbwfcCkMnmuADRXZZxE48%2B3x8gp2GjsYxVRwdh3zVYGFpdZlwbTHrdGiLrnZUYXJ6SnheBi1OFPKjlWxpBgY%2BDuJj6NARa%2FvvenKclIbIlsRRcbIwwKwjJRQKF%2F1purmoPC9p78J2oGgdNsdRGAbYcwAPaP76OO9xU0mV6MKfQ2sQGOqUBC1aZbv3mIMPsVlYk%2BqgoE%2FS9av2%2F%2FQm7i4RkJ5KshN489qxVHn8alwxbRNHdDBi0XOJspXtJ0pAzObXBA%2By110VN3NJXrjuAyN91pqKglRytIwAl6caJcuIQ0LzL0hLwQtSG1zsC7E%2B9k7dKwg9yzskmylv6rx4lOwrCG%2BYanvK0Qc5Rmc0Z6I36%2FWIgovwR8tHSJS3pshHcexltwzH9WcQi%2Fq4M&X-Amz-Signature=bf31dc15c8beb616937a4f10a6431053db481113ce16f9f6109412f988ba9398&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ7MKCZF%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T024140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIDMdx3gxGIIOpH7%2BRY6kcqy7NBFgXWfxwRQnIRJV%2B1doAiEA2Y9okJCk6bu78PqHhwEI0n99hpRxe0D6IOHypPusmDcqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBSGhsFT%2FQOGjDXfmSrcAwEETZH4Z90l%2Br2AJMwJGJcrR6lPYsg0A%2BPkeMlFvTF0NZlD%2BJjRofk%2BUYCF2tdShWeuNR7wdYucUxevcj%2F7Q%2BGASSf380gjLIdhcBdQW0sg0pwL3XeQ2GuyeqUYzKFZLi0VsB0PYKvI%2FBN9s2dVyPX3iJywwA4TLADYmB3m0H390TletUSH6McfIcmdaVqCGBhYWhAYJEDvQLFTZcwbQcFRYpZXX2hPvewdUnib2BM1rLP7%2BLIEwH4AcRN7jub7QctK7EC6O3aeBtysEVuw0WYgshkJEO3y9egYqnc6E%2Fr1Fg5ddY9ghLigLsLor%2FCgJ7TnCGmblU3Tlm2rWaLD%2FOuBNmbilk%2Bm%2B4kc77ZgkMJwcPd1iKJYGIjXHFRrQpAZ2ry5v6T4pcUskMjUAzJjZdOujWQbaSAum2jXNyesPHt6MohmdpJBrNp%2F2NFx0dB%2Bzv25vg5lY%2F1cWrPEfV9kI%2FpbwfcCkMnmuADRXZZxE48%2B3x8gp2GjsYxVRwdh3zVYGFpdZlwbTHrdGiLrnZUYXJ6SnheBi1OFPKjlWxpBgY%2BDuJj6NARa%2FvvenKclIbIlsRRcbIwwKwjJRQKF%2F1purmoPC9p78J2oGgdNsdRGAbYcwAPaP76OO9xU0mV6MKfQ2sQGOqUBC1aZbv3mIMPsVlYk%2BqgoE%2FS9av2%2F%2FQm7i4RkJ5KshN489qxVHn8alwxbRNHdDBi0XOJspXtJ0pAzObXBA%2By110VN3NJXrjuAyN91pqKglRytIwAl6caJcuIQ0LzL0hLwQtSG1zsC7E%2B9k7dKwg9yzskmylv6rx4lOwrCG%2BYanvK0Qc5Rmc0Z6I36%2FWIgovwR8tHSJS3pshHcexltwzH9WcQi%2Fq4M&X-Amz-Signature=9ac10f83ad30933f90636bb13d116108bfe217a80d43da147d9baaab9fc82934&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
