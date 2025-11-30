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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLL6DX3N%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIHcdOzayHLSxwgBTMGKz%2Fy%2BzZiimgMWV41VgM2DNiJLlAiEApucfkHbrvORW5goQ9wZuVNzZCrXPPicSNfNpdpmvuckqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzYFE7B6sQ2kso9LircAyCpNjypPsHtIXNqjg0qi2pTR%2B%2Fcu7HIsehZClGww8M0eql2yITmjImbVZw03aadyVMTPzkg8LcwyJheacPA1X9r3un3mX4jK9Wg%2F5BweFkCEiEE8%2FIwrgWUChR4O3gj8zLpbmrtDFA4naZeP48pWkD3GOzfzbQY4bd5Y54kBihKrJo8C802pn38F5etMRq5gm0N18ZU7UIinHKutwckEsiD7v1lVZ1cAgCW2xa6BjSi1K5B%2F3IdHTVL9c3OcYoze0xyG%2BJhn3dHHo5n22c5Q%2FXXxroJiQ5jv51gfHeUidjlFr0IIIsq1fg0G6dxpPDm%2FgooC0da%2FyQhy9GLNUxk6%2Bw4Si00GMuN64nZZ1M%2FLnGUhNqgsF9ov8fvUgbkKRVKn6G3Amc1YwQy%2FK5nQt8e8xj3jVbBWaf6uIgdN23z1Lz46s0aCsR7uFpFLFBcKVjMDpxPLsNn9%2BfpyaZX3Ab%2FB2fdN2%2F4N%2FMBK2a1%2BYVeWwS3A%2BeIuWHCF3qmMFqlEBNBmX7zRE0gjXh9Ga4OaS5jtTlAGtG6FHZ7G69LuqruldNA%2BjFrHY7bHaBlk%2FrhXr%2BLt3lOqYjD3vAqNnKQsfPn4e6R%2FC3sQFND8MTjsvp%2BLwUhwVw7ddP%2BEbqy9%2B8eMM%2FRrckGOqUBCVa0Bp7Ccc7i7hbmMRtKCraVLi2CBirA8r1QOtCZuFVgvOpIeHCzm%2Bf89Mv8g2tMiTWV7w6cTBjayHv0kLaVFCMO3rM8KYXG1U1xzF4u6FnC4LM%2BTdYFVc626YjKD9nLL%2Fo541Niyrs5b8BBMPM%2FYJcwUsaxJtaHJLrtxRsaaa6bwHUC0DlLJvd4aHA26fNVKyuAsBa0D3jvbSBqpJEEdGZOmajC&X-Amz-Signature=8a28902c25bad93867e1acabd8495d3649d545d30cf4e4fbbeefd195290299de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLL6DX3N%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIHcdOzayHLSxwgBTMGKz%2Fy%2BzZiimgMWV41VgM2DNiJLlAiEApucfkHbrvORW5goQ9wZuVNzZCrXPPicSNfNpdpmvuckqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzYFE7B6sQ2kso9LircAyCpNjypPsHtIXNqjg0qi2pTR%2B%2Fcu7HIsehZClGww8M0eql2yITmjImbVZw03aadyVMTPzkg8LcwyJheacPA1X9r3un3mX4jK9Wg%2F5BweFkCEiEE8%2FIwrgWUChR4O3gj8zLpbmrtDFA4naZeP48pWkD3GOzfzbQY4bd5Y54kBihKrJo8C802pn38F5etMRq5gm0N18ZU7UIinHKutwckEsiD7v1lVZ1cAgCW2xa6BjSi1K5B%2F3IdHTVL9c3OcYoze0xyG%2BJhn3dHHo5n22c5Q%2FXXxroJiQ5jv51gfHeUidjlFr0IIIsq1fg0G6dxpPDm%2FgooC0da%2FyQhy9GLNUxk6%2Bw4Si00GMuN64nZZ1M%2FLnGUhNqgsF9ov8fvUgbkKRVKn6G3Amc1YwQy%2FK5nQt8e8xj3jVbBWaf6uIgdN23z1Lz46s0aCsR7uFpFLFBcKVjMDpxPLsNn9%2BfpyaZX3Ab%2FB2fdN2%2F4N%2FMBK2a1%2BYVeWwS3A%2BeIuWHCF3qmMFqlEBNBmX7zRE0gjXh9Ga4OaS5jtTlAGtG6FHZ7G69LuqruldNA%2BjFrHY7bHaBlk%2FrhXr%2BLt3lOqYjD3vAqNnKQsfPn4e6R%2FC3sQFND8MTjsvp%2BLwUhwVw7ddP%2BEbqy9%2B8eMM%2FRrckGOqUBCVa0Bp7Ccc7i7hbmMRtKCraVLi2CBirA8r1QOtCZuFVgvOpIeHCzm%2Bf89Mv8g2tMiTWV7w6cTBjayHv0kLaVFCMO3rM8KYXG1U1xzF4u6FnC4LM%2BTdYFVc626YjKD9nLL%2Fo541Niyrs5b8BBMPM%2FYJcwUsaxJtaHJLrtxRsaaa6bwHUC0DlLJvd4aHA26fNVKyuAsBa0D3jvbSBqpJEEdGZOmajC&X-Amz-Signature=865d1fa5b5c6d54b8c7b9cd35c261fabbdb25b252fb0bba63bba22750da90f8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLL6DX3N%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIHcdOzayHLSxwgBTMGKz%2Fy%2BzZiimgMWV41VgM2DNiJLlAiEApucfkHbrvORW5goQ9wZuVNzZCrXPPicSNfNpdpmvuckqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzYFE7B6sQ2kso9LircAyCpNjypPsHtIXNqjg0qi2pTR%2B%2Fcu7HIsehZClGww8M0eql2yITmjImbVZw03aadyVMTPzkg8LcwyJheacPA1X9r3un3mX4jK9Wg%2F5BweFkCEiEE8%2FIwrgWUChR4O3gj8zLpbmrtDFA4naZeP48pWkD3GOzfzbQY4bd5Y54kBihKrJo8C802pn38F5etMRq5gm0N18ZU7UIinHKutwckEsiD7v1lVZ1cAgCW2xa6BjSi1K5B%2F3IdHTVL9c3OcYoze0xyG%2BJhn3dHHo5n22c5Q%2FXXxroJiQ5jv51gfHeUidjlFr0IIIsq1fg0G6dxpPDm%2FgooC0da%2FyQhy9GLNUxk6%2Bw4Si00GMuN64nZZ1M%2FLnGUhNqgsF9ov8fvUgbkKRVKn6G3Amc1YwQy%2FK5nQt8e8xj3jVbBWaf6uIgdN23z1Lz46s0aCsR7uFpFLFBcKVjMDpxPLsNn9%2BfpyaZX3Ab%2FB2fdN2%2F4N%2FMBK2a1%2BYVeWwS3A%2BeIuWHCF3qmMFqlEBNBmX7zRE0gjXh9Ga4OaS5jtTlAGtG6FHZ7G69LuqruldNA%2BjFrHY7bHaBlk%2FrhXr%2BLt3lOqYjD3vAqNnKQsfPn4e6R%2FC3sQFND8MTjsvp%2BLwUhwVw7ddP%2BEbqy9%2B8eMM%2FRrckGOqUBCVa0Bp7Ccc7i7hbmMRtKCraVLi2CBirA8r1QOtCZuFVgvOpIeHCzm%2Bf89Mv8g2tMiTWV7w6cTBjayHv0kLaVFCMO3rM8KYXG1U1xzF4u6FnC4LM%2BTdYFVc626YjKD9nLL%2Fo541Niyrs5b8BBMPM%2FYJcwUsaxJtaHJLrtxRsaaa6bwHUC0DlLJvd4aHA26fNVKyuAsBa0D3jvbSBqpJEEdGZOmajC&X-Amz-Signature=3f9077359dde20169593254ca691caa14d8a90c6a3bded288a8e2adbd1a32a62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLL6DX3N%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIHcdOzayHLSxwgBTMGKz%2Fy%2BzZiimgMWV41VgM2DNiJLlAiEApucfkHbrvORW5goQ9wZuVNzZCrXPPicSNfNpdpmvuckqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzYFE7B6sQ2kso9LircAyCpNjypPsHtIXNqjg0qi2pTR%2B%2Fcu7HIsehZClGww8M0eql2yITmjImbVZw03aadyVMTPzkg8LcwyJheacPA1X9r3un3mX4jK9Wg%2F5BweFkCEiEE8%2FIwrgWUChR4O3gj8zLpbmrtDFA4naZeP48pWkD3GOzfzbQY4bd5Y54kBihKrJo8C802pn38F5etMRq5gm0N18ZU7UIinHKutwckEsiD7v1lVZ1cAgCW2xa6BjSi1K5B%2F3IdHTVL9c3OcYoze0xyG%2BJhn3dHHo5n22c5Q%2FXXxroJiQ5jv51gfHeUidjlFr0IIIsq1fg0G6dxpPDm%2FgooC0da%2FyQhy9GLNUxk6%2Bw4Si00GMuN64nZZ1M%2FLnGUhNqgsF9ov8fvUgbkKRVKn6G3Amc1YwQy%2FK5nQt8e8xj3jVbBWaf6uIgdN23z1Lz46s0aCsR7uFpFLFBcKVjMDpxPLsNn9%2BfpyaZX3Ab%2FB2fdN2%2F4N%2FMBK2a1%2BYVeWwS3A%2BeIuWHCF3qmMFqlEBNBmX7zRE0gjXh9Ga4OaS5jtTlAGtG6FHZ7G69LuqruldNA%2BjFrHY7bHaBlk%2FrhXr%2BLt3lOqYjD3vAqNnKQsfPn4e6R%2FC3sQFND8MTjsvp%2BLwUhwVw7ddP%2BEbqy9%2B8eMM%2FRrckGOqUBCVa0Bp7Ccc7i7hbmMRtKCraVLi2CBirA8r1QOtCZuFVgvOpIeHCzm%2Bf89Mv8g2tMiTWV7w6cTBjayHv0kLaVFCMO3rM8KYXG1U1xzF4u6FnC4LM%2BTdYFVc626YjKD9nLL%2Fo541Niyrs5b8BBMPM%2FYJcwUsaxJtaHJLrtxRsaaa6bwHUC0DlLJvd4aHA26fNVKyuAsBa0D3jvbSBqpJEEdGZOmajC&X-Amz-Signature=e1196b5436fc9d873af85b85278a5f6e2db693e1bf5ee4689f7572e39337dc7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLL6DX3N%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIHcdOzayHLSxwgBTMGKz%2Fy%2BzZiimgMWV41VgM2DNiJLlAiEApucfkHbrvORW5goQ9wZuVNzZCrXPPicSNfNpdpmvuckqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzYFE7B6sQ2kso9LircAyCpNjypPsHtIXNqjg0qi2pTR%2B%2Fcu7HIsehZClGww8M0eql2yITmjImbVZw03aadyVMTPzkg8LcwyJheacPA1X9r3un3mX4jK9Wg%2F5BweFkCEiEE8%2FIwrgWUChR4O3gj8zLpbmrtDFA4naZeP48pWkD3GOzfzbQY4bd5Y54kBihKrJo8C802pn38F5etMRq5gm0N18ZU7UIinHKutwckEsiD7v1lVZ1cAgCW2xa6BjSi1K5B%2F3IdHTVL9c3OcYoze0xyG%2BJhn3dHHo5n22c5Q%2FXXxroJiQ5jv51gfHeUidjlFr0IIIsq1fg0G6dxpPDm%2FgooC0da%2FyQhy9GLNUxk6%2Bw4Si00GMuN64nZZ1M%2FLnGUhNqgsF9ov8fvUgbkKRVKn6G3Amc1YwQy%2FK5nQt8e8xj3jVbBWaf6uIgdN23z1Lz46s0aCsR7uFpFLFBcKVjMDpxPLsNn9%2BfpyaZX3Ab%2FB2fdN2%2F4N%2FMBK2a1%2BYVeWwS3A%2BeIuWHCF3qmMFqlEBNBmX7zRE0gjXh9Ga4OaS5jtTlAGtG6FHZ7G69LuqruldNA%2BjFrHY7bHaBlk%2FrhXr%2BLt3lOqYjD3vAqNnKQsfPn4e6R%2FC3sQFND8MTjsvp%2BLwUhwVw7ddP%2BEbqy9%2B8eMM%2FRrckGOqUBCVa0Bp7Ccc7i7hbmMRtKCraVLi2CBirA8r1QOtCZuFVgvOpIeHCzm%2Bf89Mv8g2tMiTWV7w6cTBjayHv0kLaVFCMO3rM8KYXG1U1xzF4u6FnC4LM%2BTdYFVc626YjKD9nLL%2Fo541Niyrs5b8BBMPM%2FYJcwUsaxJtaHJLrtxRsaaa6bwHUC0DlLJvd4aHA26fNVKyuAsBa0D3jvbSBqpJEEdGZOmajC&X-Amz-Signature=dccac48bde8a7c8f5c7373878a343bdfc5da7f16f2a3ccdc2a40c85505cd8ac3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLL6DX3N%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIHcdOzayHLSxwgBTMGKz%2Fy%2BzZiimgMWV41VgM2DNiJLlAiEApucfkHbrvORW5goQ9wZuVNzZCrXPPicSNfNpdpmvuckqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzYFE7B6sQ2kso9LircAyCpNjypPsHtIXNqjg0qi2pTR%2B%2Fcu7HIsehZClGww8M0eql2yITmjImbVZw03aadyVMTPzkg8LcwyJheacPA1X9r3un3mX4jK9Wg%2F5BweFkCEiEE8%2FIwrgWUChR4O3gj8zLpbmrtDFA4naZeP48pWkD3GOzfzbQY4bd5Y54kBihKrJo8C802pn38F5etMRq5gm0N18ZU7UIinHKutwckEsiD7v1lVZ1cAgCW2xa6BjSi1K5B%2F3IdHTVL9c3OcYoze0xyG%2BJhn3dHHo5n22c5Q%2FXXxroJiQ5jv51gfHeUidjlFr0IIIsq1fg0G6dxpPDm%2FgooC0da%2FyQhy9GLNUxk6%2Bw4Si00GMuN64nZZ1M%2FLnGUhNqgsF9ov8fvUgbkKRVKn6G3Amc1YwQy%2FK5nQt8e8xj3jVbBWaf6uIgdN23z1Lz46s0aCsR7uFpFLFBcKVjMDpxPLsNn9%2BfpyaZX3Ab%2FB2fdN2%2F4N%2FMBK2a1%2BYVeWwS3A%2BeIuWHCF3qmMFqlEBNBmX7zRE0gjXh9Ga4OaS5jtTlAGtG6FHZ7G69LuqruldNA%2BjFrHY7bHaBlk%2FrhXr%2BLt3lOqYjD3vAqNnKQsfPn4e6R%2FC3sQFND8MTjsvp%2BLwUhwVw7ddP%2BEbqy9%2B8eMM%2FRrckGOqUBCVa0Bp7Ccc7i7hbmMRtKCraVLi2CBirA8r1QOtCZuFVgvOpIeHCzm%2Bf89Mv8g2tMiTWV7w6cTBjayHv0kLaVFCMO3rM8KYXG1U1xzF4u6FnC4LM%2BTdYFVc626YjKD9nLL%2Fo541Niyrs5b8BBMPM%2FYJcwUsaxJtaHJLrtxRsaaa6bwHUC0DlLJvd4aHA26fNVKyuAsBa0D3jvbSBqpJEEdGZOmajC&X-Amz-Signature=dafb1ed08214fb27cdb2a49be2f6d845dd3a72e8c3116d42f8fcfd36ceafb9d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLL6DX3N%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIHcdOzayHLSxwgBTMGKz%2Fy%2BzZiimgMWV41VgM2DNiJLlAiEApucfkHbrvORW5goQ9wZuVNzZCrXPPicSNfNpdpmvuckqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzYFE7B6sQ2kso9LircAyCpNjypPsHtIXNqjg0qi2pTR%2B%2Fcu7HIsehZClGww8M0eql2yITmjImbVZw03aadyVMTPzkg8LcwyJheacPA1X9r3un3mX4jK9Wg%2F5BweFkCEiEE8%2FIwrgWUChR4O3gj8zLpbmrtDFA4naZeP48pWkD3GOzfzbQY4bd5Y54kBihKrJo8C802pn38F5etMRq5gm0N18ZU7UIinHKutwckEsiD7v1lVZ1cAgCW2xa6BjSi1K5B%2F3IdHTVL9c3OcYoze0xyG%2BJhn3dHHo5n22c5Q%2FXXxroJiQ5jv51gfHeUidjlFr0IIIsq1fg0G6dxpPDm%2FgooC0da%2FyQhy9GLNUxk6%2Bw4Si00GMuN64nZZ1M%2FLnGUhNqgsF9ov8fvUgbkKRVKn6G3Amc1YwQy%2FK5nQt8e8xj3jVbBWaf6uIgdN23z1Lz46s0aCsR7uFpFLFBcKVjMDpxPLsNn9%2BfpyaZX3Ab%2FB2fdN2%2F4N%2FMBK2a1%2BYVeWwS3A%2BeIuWHCF3qmMFqlEBNBmX7zRE0gjXh9Ga4OaS5jtTlAGtG6FHZ7G69LuqruldNA%2BjFrHY7bHaBlk%2FrhXr%2BLt3lOqYjD3vAqNnKQsfPn4e6R%2FC3sQFND8MTjsvp%2BLwUhwVw7ddP%2BEbqy9%2B8eMM%2FRrckGOqUBCVa0Bp7Ccc7i7hbmMRtKCraVLi2CBirA8r1QOtCZuFVgvOpIeHCzm%2Bf89Mv8g2tMiTWV7w6cTBjayHv0kLaVFCMO3rM8KYXG1U1xzF4u6FnC4LM%2BTdYFVc626YjKD9nLL%2Fo541Niyrs5b8BBMPM%2FYJcwUsaxJtaHJLrtxRsaaa6bwHUC0DlLJvd4aHA26fNVKyuAsBa0D3jvbSBqpJEEdGZOmajC&X-Amz-Signature=43a1d19ad78480c3141f325f28364179358dd54b31ebbfec24939b849e1b6752&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLL6DX3N%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIHcdOzayHLSxwgBTMGKz%2Fy%2BzZiimgMWV41VgM2DNiJLlAiEApucfkHbrvORW5goQ9wZuVNzZCrXPPicSNfNpdpmvuckqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzYFE7B6sQ2kso9LircAyCpNjypPsHtIXNqjg0qi2pTR%2B%2Fcu7HIsehZClGww8M0eql2yITmjImbVZw03aadyVMTPzkg8LcwyJheacPA1X9r3un3mX4jK9Wg%2F5BweFkCEiEE8%2FIwrgWUChR4O3gj8zLpbmrtDFA4naZeP48pWkD3GOzfzbQY4bd5Y54kBihKrJo8C802pn38F5etMRq5gm0N18ZU7UIinHKutwckEsiD7v1lVZ1cAgCW2xa6BjSi1K5B%2F3IdHTVL9c3OcYoze0xyG%2BJhn3dHHo5n22c5Q%2FXXxroJiQ5jv51gfHeUidjlFr0IIIsq1fg0G6dxpPDm%2FgooC0da%2FyQhy9GLNUxk6%2Bw4Si00GMuN64nZZ1M%2FLnGUhNqgsF9ov8fvUgbkKRVKn6G3Amc1YwQy%2FK5nQt8e8xj3jVbBWaf6uIgdN23z1Lz46s0aCsR7uFpFLFBcKVjMDpxPLsNn9%2BfpyaZX3Ab%2FB2fdN2%2F4N%2FMBK2a1%2BYVeWwS3A%2BeIuWHCF3qmMFqlEBNBmX7zRE0gjXh9Ga4OaS5jtTlAGtG6FHZ7G69LuqruldNA%2BjFrHY7bHaBlk%2FrhXr%2BLt3lOqYjD3vAqNnKQsfPn4e6R%2FC3sQFND8MTjsvp%2BLwUhwVw7ddP%2BEbqy9%2B8eMM%2FRrckGOqUBCVa0Bp7Ccc7i7hbmMRtKCraVLi2CBirA8r1QOtCZuFVgvOpIeHCzm%2Bf89Mv8g2tMiTWV7w6cTBjayHv0kLaVFCMO3rM8KYXG1U1xzF4u6FnC4LM%2BTdYFVc626YjKD9nLL%2Fo541Niyrs5b8BBMPM%2FYJcwUsaxJtaHJLrtxRsaaa6bwHUC0DlLJvd4aHA26fNVKyuAsBa0D3jvbSBqpJEEdGZOmajC&X-Amz-Signature=15879d9545591276296e4d3e4042676b6ebe609e16d4d30bb2a9082c4bf5474c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLL6DX3N%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIHcdOzayHLSxwgBTMGKz%2Fy%2BzZiimgMWV41VgM2DNiJLlAiEApucfkHbrvORW5goQ9wZuVNzZCrXPPicSNfNpdpmvuckqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzYFE7B6sQ2kso9LircAyCpNjypPsHtIXNqjg0qi2pTR%2B%2Fcu7HIsehZClGww8M0eql2yITmjImbVZw03aadyVMTPzkg8LcwyJheacPA1X9r3un3mX4jK9Wg%2F5BweFkCEiEE8%2FIwrgWUChR4O3gj8zLpbmrtDFA4naZeP48pWkD3GOzfzbQY4bd5Y54kBihKrJo8C802pn38F5etMRq5gm0N18ZU7UIinHKutwckEsiD7v1lVZ1cAgCW2xa6BjSi1K5B%2F3IdHTVL9c3OcYoze0xyG%2BJhn3dHHo5n22c5Q%2FXXxroJiQ5jv51gfHeUidjlFr0IIIsq1fg0G6dxpPDm%2FgooC0da%2FyQhy9GLNUxk6%2Bw4Si00GMuN64nZZ1M%2FLnGUhNqgsF9ov8fvUgbkKRVKn6G3Amc1YwQy%2FK5nQt8e8xj3jVbBWaf6uIgdN23z1Lz46s0aCsR7uFpFLFBcKVjMDpxPLsNn9%2BfpyaZX3Ab%2FB2fdN2%2F4N%2FMBK2a1%2BYVeWwS3A%2BeIuWHCF3qmMFqlEBNBmX7zRE0gjXh9Ga4OaS5jtTlAGtG6FHZ7G69LuqruldNA%2BjFrHY7bHaBlk%2FrhXr%2BLt3lOqYjD3vAqNnKQsfPn4e6R%2FC3sQFND8MTjsvp%2BLwUhwVw7ddP%2BEbqy9%2B8eMM%2FRrckGOqUBCVa0Bp7Ccc7i7hbmMRtKCraVLi2CBirA8r1QOtCZuFVgvOpIeHCzm%2Bf89Mv8g2tMiTWV7w6cTBjayHv0kLaVFCMO3rM8KYXG1U1xzF4u6FnC4LM%2BTdYFVc626YjKD9nLL%2Fo541Niyrs5b8BBMPM%2FYJcwUsaxJtaHJLrtxRsaaa6bwHUC0DlLJvd4aHA26fNVKyuAsBa0D3jvbSBqpJEEdGZOmajC&X-Amz-Signature=22dc63e426f3e82df953e59a6ee2c07a4244f8d8eb59a2cec44f5b75e4aa21ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLL6DX3N%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIHcdOzayHLSxwgBTMGKz%2Fy%2BzZiimgMWV41VgM2DNiJLlAiEApucfkHbrvORW5goQ9wZuVNzZCrXPPicSNfNpdpmvuckqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzYFE7B6sQ2kso9LircAyCpNjypPsHtIXNqjg0qi2pTR%2B%2Fcu7HIsehZClGww8M0eql2yITmjImbVZw03aadyVMTPzkg8LcwyJheacPA1X9r3un3mX4jK9Wg%2F5BweFkCEiEE8%2FIwrgWUChR4O3gj8zLpbmrtDFA4naZeP48pWkD3GOzfzbQY4bd5Y54kBihKrJo8C802pn38F5etMRq5gm0N18ZU7UIinHKutwckEsiD7v1lVZ1cAgCW2xa6BjSi1K5B%2F3IdHTVL9c3OcYoze0xyG%2BJhn3dHHo5n22c5Q%2FXXxroJiQ5jv51gfHeUidjlFr0IIIsq1fg0G6dxpPDm%2FgooC0da%2FyQhy9GLNUxk6%2Bw4Si00GMuN64nZZ1M%2FLnGUhNqgsF9ov8fvUgbkKRVKn6G3Amc1YwQy%2FK5nQt8e8xj3jVbBWaf6uIgdN23z1Lz46s0aCsR7uFpFLFBcKVjMDpxPLsNn9%2BfpyaZX3Ab%2FB2fdN2%2F4N%2FMBK2a1%2BYVeWwS3A%2BeIuWHCF3qmMFqlEBNBmX7zRE0gjXh9Ga4OaS5jtTlAGtG6FHZ7G69LuqruldNA%2BjFrHY7bHaBlk%2FrhXr%2BLt3lOqYjD3vAqNnKQsfPn4e6R%2FC3sQFND8MTjsvp%2BLwUhwVw7ddP%2BEbqy9%2B8eMM%2FRrckGOqUBCVa0Bp7Ccc7i7hbmMRtKCraVLi2CBirA8r1QOtCZuFVgvOpIeHCzm%2Bf89Mv8g2tMiTWV7w6cTBjayHv0kLaVFCMO3rM8KYXG1U1xzF4u6FnC4LM%2BTdYFVc626YjKD9nLL%2Fo541Niyrs5b8BBMPM%2FYJcwUsaxJtaHJLrtxRsaaa6bwHUC0DlLJvd4aHA26fNVKyuAsBa0D3jvbSBqpJEEdGZOmajC&X-Amz-Signature=969cfad9a617eb045f27b90688d4d8ef86681804b0d50fa02a245db3e933fe43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLL6DX3N%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIHcdOzayHLSxwgBTMGKz%2Fy%2BzZiimgMWV41VgM2DNiJLlAiEApucfkHbrvORW5goQ9wZuVNzZCrXPPicSNfNpdpmvuckqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzYFE7B6sQ2kso9LircAyCpNjypPsHtIXNqjg0qi2pTR%2B%2Fcu7HIsehZClGww8M0eql2yITmjImbVZw03aadyVMTPzkg8LcwyJheacPA1X9r3un3mX4jK9Wg%2F5BweFkCEiEE8%2FIwrgWUChR4O3gj8zLpbmrtDFA4naZeP48pWkD3GOzfzbQY4bd5Y54kBihKrJo8C802pn38F5etMRq5gm0N18ZU7UIinHKutwckEsiD7v1lVZ1cAgCW2xa6BjSi1K5B%2F3IdHTVL9c3OcYoze0xyG%2BJhn3dHHo5n22c5Q%2FXXxroJiQ5jv51gfHeUidjlFr0IIIsq1fg0G6dxpPDm%2FgooC0da%2FyQhy9GLNUxk6%2Bw4Si00GMuN64nZZ1M%2FLnGUhNqgsF9ov8fvUgbkKRVKn6G3Amc1YwQy%2FK5nQt8e8xj3jVbBWaf6uIgdN23z1Lz46s0aCsR7uFpFLFBcKVjMDpxPLsNn9%2BfpyaZX3Ab%2FB2fdN2%2F4N%2FMBK2a1%2BYVeWwS3A%2BeIuWHCF3qmMFqlEBNBmX7zRE0gjXh9Ga4OaS5jtTlAGtG6FHZ7G69LuqruldNA%2BjFrHY7bHaBlk%2FrhXr%2BLt3lOqYjD3vAqNnKQsfPn4e6R%2FC3sQFND8MTjsvp%2BLwUhwVw7ddP%2BEbqy9%2B8eMM%2FRrckGOqUBCVa0Bp7Ccc7i7hbmMRtKCraVLi2CBirA8r1QOtCZuFVgvOpIeHCzm%2Bf89Mv8g2tMiTWV7w6cTBjayHv0kLaVFCMO3rM8KYXG1U1xzF4u6FnC4LM%2BTdYFVc626YjKD9nLL%2Fo541Niyrs5b8BBMPM%2FYJcwUsaxJtaHJLrtxRsaaa6bwHUC0DlLJvd4aHA26fNVKyuAsBa0D3jvbSBqpJEEdGZOmajC&X-Amz-Signature=8a2867f17219adad1986d8a9bb0d295ddc45bdcc0806a86b2ffee40e9bfce6d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLL6DX3N%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIHcdOzayHLSxwgBTMGKz%2Fy%2BzZiimgMWV41VgM2DNiJLlAiEApucfkHbrvORW5goQ9wZuVNzZCrXPPicSNfNpdpmvuckqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzYFE7B6sQ2kso9LircAyCpNjypPsHtIXNqjg0qi2pTR%2B%2Fcu7HIsehZClGww8M0eql2yITmjImbVZw03aadyVMTPzkg8LcwyJheacPA1X9r3un3mX4jK9Wg%2F5BweFkCEiEE8%2FIwrgWUChR4O3gj8zLpbmrtDFA4naZeP48pWkD3GOzfzbQY4bd5Y54kBihKrJo8C802pn38F5etMRq5gm0N18ZU7UIinHKutwckEsiD7v1lVZ1cAgCW2xa6BjSi1K5B%2F3IdHTVL9c3OcYoze0xyG%2BJhn3dHHo5n22c5Q%2FXXxroJiQ5jv51gfHeUidjlFr0IIIsq1fg0G6dxpPDm%2FgooC0da%2FyQhy9GLNUxk6%2Bw4Si00GMuN64nZZ1M%2FLnGUhNqgsF9ov8fvUgbkKRVKn6G3Amc1YwQy%2FK5nQt8e8xj3jVbBWaf6uIgdN23z1Lz46s0aCsR7uFpFLFBcKVjMDpxPLsNn9%2BfpyaZX3Ab%2FB2fdN2%2F4N%2FMBK2a1%2BYVeWwS3A%2BeIuWHCF3qmMFqlEBNBmX7zRE0gjXh9Ga4OaS5jtTlAGtG6FHZ7G69LuqruldNA%2BjFrHY7bHaBlk%2FrhXr%2BLt3lOqYjD3vAqNnKQsfPn4e6R%2FC3sQFND8MTjsvp%2BLwUhwVw7ddP%2BEbqy9%2B8eMM%2FRrckGOqUBCVa0Bp7Ccc7i7hbmMRtKCraVLi2CBirA8r1QOtCZuFVgvOpIeHCzm%2Bf89Mv8g2tMiTWV7w6cTBjayHv0kLaVFCMO3rM8KYXG1U1xzF4u6FnC4LM%2BTdYFVc626YjKD9nLL%2Fo541Niyrs5b8BBMPM%2FYJcwUsaxJtaHJLrtxRsaaa6bwHUC0DlLJvd4aHA26fNVKyuAsBa0D3jvbSBqpJEEdGZOmajC&X-Amz-Signature=52fccac317cbf79d0acb45a3e5c6fb5a78c6b9223a8a87f71d55c2f658177e3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLL6DX3N%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIHcdOzayHLSxwgBTMGKz%2Fy%2BzZiimgMWV41VgM2DNiJLlAiEApucfkHbrvORW5goQ9wZuVNzZCrXPPicSNfNpdpmvuckqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzYFE7B6sQ2kso9LircAyCpNjypPsHtIXNqjg0qi2pTR%2B%2Fcu7HIsehZClGww8M0eql2yITmjImbVZw03aadyVMTPzkg8LcwyJheacPA1X9r3un3mX4jK9Wg%2F5BweFkCEiEE8%2FIwrgWUChR4O3gj8zLpbmrtDFA4naZeP48pWkD3GOzfzbQY4bd5Y54kBihKrJo8C802pn38F5etMRq5gm0N18ZU7UIinHKutwckEsiD7v1lVZ1cAgCW2xa6BjSi1K5B%2F3IdHTVL9c3OcYoze0xyG%2BJhn3dHHo5n22c5Q%2FXXxroJiQ5jv51gfHeUidjlFr0IIIsq1fg0G6dxpPDm%2FgooC0da%2FyQhy9GLNUxk6%2Bw4Si00GMuN64nZZ1M%2FLnGUhNqgsF9ov8fvUgbkKRVKn6G3Amc1YwQy%2FK5nQt8e8xj3jVbBWaf6uIgdN23z1Lz46s0aCsR7uFpFLFBcKVjMDpxPLsNn9%2BfpyaZX3Ab%2FB2fdN2%2F4N%2FMBK2a1%2BYVeWwS3A%2BeIuWHCF3qmMFqlEBNBmX7zRE0gjXh9Ga4OaS5jtTlAGtG6FHZ7G69LuqruldNA%2BjFrHY7bHaBlk%2FrhXr%2BLt3lOqYjD3vAqNnKQsfPn4e6R%2FC3sQFND8MTjsvp%2BLwUhwVw7ddP%2BEbqy9%2B8eMM%2FRrckGOqUBCVa0Bp7Ccc7i7hbmMRtKCraVLi2CBirA8r1QOtCZuFVgvOpIeHCzm%2Bf89Mv8g2tMiTWV7w6cTBjayHv0kLaVFCMO3rM8KYXG1U1xzF4u6FnC4LM%2BTdYFVc626YjKD9nLL%2Fo541Niyrs5b8BBMPM%2FYJcwUsaxJtaHJLrtxRsaaa6bwHUC0DlLJvd4aHA26fNVKyuAsBa0D3jvbSBqpJEEdGZOmajC&X-Amz-Signature=6d5ecbb3b1c8b877f7bdcda8f159eee79f0dc77ffb49db72d736d2c3399317be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLL6DX3N%2F20251130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251130T014915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIHcdOzayHLSxwgBTMGKz%2Fy%2BzZiimgMWV41VgM2DNiJLlAiEApucfkHbrvORW5goQ9wZuVNzZCrXPPicSNfNpdpmvuckqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzYFE7B6sQ2kso9LircAyCpNjypPsHtIXNqjg0qi2pTR%2B%2Fcu7HIsehZClGww8M0eql2yITmjImbVZw03aadyVMTPzkg8LcwyJheacPA1X9r3un3mX4jK9Wg%2F5BweFkCEiEE8%2FIwrgWUChR4O3gj8zLpbmrtDFA4naZeP48pWkD3GOzfzbQY4bd5Y54kBihKrJo8C802pn38F5etMRq5gm0N18ZU7UIinHKutwckEsiD7v1lVZ1cAgCW2xa6BjSi1K5B%2F3IdHTVL9c3OcYoze0xyG%2BJhn3dHHo5n22c5Q%2FXXxroJiQ5jv51gfHeUidjlFr0IIIsq1fg0G6dxpPDm%2FgooC0da%2FyQhy9GLNUxk6%2Bw4Si00GMuN64nZZ1M%2FLnGUhNqgsF9ov8fvUgbkKRVKn6G3Amc1YwQy%2FK5nQt8e8xj3jVbBWaf6uIgdN23z1Lz46s0aCsR7uFpFLFBcKVjMDpxPLsNn9%2BfpyaZX3Ab%2FB2fdN2%2F4N%2FMBK2a1%2BYVeWwS3A%2BeIuWHCF3qmMFqlEBNBmX7zRE0gjXh9Ga4OaS5jtTlAGtG6FHZ7G69LuqruldNA%2BjFrHY7bHaBlk%2FrhXr%2BLt3lOqYjD3vAqNnKQsfPn4e6R%2FC3sQFND8MTjsvp%2BLwUhwVw7ddP%2BEbqy9%2B8eMM%2FRrckGOqUBCVa0Bp7Ccc7i7hbmMRtKCraVLi2CBirA8r1QOtCZuFVgvOpIeHCzm%2Bf89Mv8g2tMiTWV7w6cTBjayHv0kLaVFCMO3rM8KYXG1U1xzF4u6FnC4LM%2BTdYFVc626YjKD9nLL%2Fo541Niyrs5b8BBMPM%2FYJcwUsaxJtaHJLrtxRsaaa6bwHUC0DlLJvd4aHA26fNVKyuAsBa0D3jvbSBqpJEEdGZOmajC&X-Amz-Signature=58176f94cba012bbf62893a3c64b1e29579e1cb8efaa90dc7f9ae78bfccd9a6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
