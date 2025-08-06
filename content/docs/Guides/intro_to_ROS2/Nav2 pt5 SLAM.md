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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVT3W2IH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIGbBAbGDeJDPKzN89b2nNMgFYve9RGHgAWD1c1rvfUf2AiEA0Z3XuVPbtcKd9YM3sZJKcJz29nHy%2FmsF91dARn5hZ28q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEIH3f8cNxpvWOEheSrcA%2B1zJxc7lHyBHp0bT7tKwiYOAw7rnfC0e9suWwYGi2fxg5xtna5NbUweA6DlujAc%2BIaGXXYxWkjqcBaE9ZvOeUFM5d3qkUy76upEWRtNAKbpdoGu73NdFVHZE0wKudHvk35VXrGEe%2FdU7VgS8l7UbIxMjWyR6pNckY7sMfL%2F5Bs9qmNJXqq0PFHW5BtcFKVidxTH%2Fa7O5HWGU3ZO%2FMnpq1dmeajD5K1mo2vH6uVGNo5v8XG94tDt%2Fp0t5jJ7Yt4C6csK9fESNK2x%2B2FEcHYWx6M0WEXn5gj7aFZGStMyqwuG28lxHcuwefJ0eq9Ud%2FjOLs4n0W9Ekio%2BELKnFLvOCOoFKDCrfWUxKofC5qHpXFgCHhSie5XA%2B36Iw8OcxVmc4zB8TOEgFT26rL1fX6YwomQyiYEVjZZz3q%2FVD%2BshfOcuYkspKFrminVXINTGbIY8QUsVKWkReb0mScavwKwP7IkAA8Eelh9RoQ%2BL45oD9t9K7oEH%2BJd9WwPsAIm6mr85lK1VnambQ0g1cpNpNJF5tuRdNFFgQ98nBw%2BplQ01Z2r30ptlV8wZGjsLmrElHr8MGcsIDQPqK%2Bak19Rep03ar%2FYDbBU%2F5Flim55aHnkdiyl%2BQXp0VcbONDhQdO20MKaOz8QGOqUBV00ao3Af71LZZOBt%2FFx9Zmg2wLtZEBtxf2FsKQS%2F43tC5bf3lXOSLgtK24eenwnBVja1h7rE%2FTlK7xi8c%2BYulLINfcwTHrH%2F0Rss9dgXDVyY598Uc%2F8QhWSPY%2F%2B0o%2FsAedgwLLsGzukqVhxFz9%2F1DeiFh2irNrAdIJznTNqa6Re3TwBteZVzB1LwGRwhmslNIkh0%2FadMjlf8upfDTEQX3d0nvAqW&X-Amz-Signature=e403d988602d4e1217787fadf2651e7816f267b85a1218cdab96081fbbfa363f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVT3W2IH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIGbBAbGDeJDPKzN89b2nNMgFYve9RGHgAWD1c1rvfUf2AiEA0Z3XuVPbtcKd9YM3sZJKcJz29nHy%2FmsF91dARn5hZ28q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEIH3f8cNxpvWOEheSrcA%2B1zJxc7lHyBHp0bT7tKwiYOAw7rnfC0e9suWwYGi2fxg5xtna5NbUweA6DlujAc%2BIaGXXYxWkjqcBaE9ZvOeUFM5d3qkUy76upEWRtNAKbpdoGu73NdFVHZE0wKudHvk35VXrGEe%2FdU7VgS8l7UbIxMjWyR6pNckY7sMfL%2F5Bs9qmNJXqq0PFHW5BtcFKVidxTH%2Fa7O5HWGU3ZO%2FMnpq1dmeajD5K1mo2vH6uVGNo5v8XG94tDt%2Fp0t5jJ7Yt4C6csK9fESNK2x%2B2FEcHYWx6M0WEXn5gj7aFZGStMyqwuG28lxHcuwefJ0eq9Ud%2FjOLs4n0W9Ekio%2BELKnFLvOCOoFKDCrfWUxKofC5qHpXFgCHhSie5XA%2B36Iw8OcxVmc4zB8TOEgFT26rL1fX6YwomQyiYEVjZZz3q%2FVD%2BshfOcuYkspKFrminVXINTGbIY8QUsVKWkReb0mScavwKwP7IkAA8Eelh9RoQ%2BL45oD9t9K7oEH%2BJd9WwPsAIm6mr85lK1VnambQ0g1cpNpNJF5tuRdNFFgQ98nBw%2BplQ01Z2r30ptlV8wZGjsLmrElHr8MGcsIDQPqK%2Bak19Rep03ar%2FYDbBU%2F5Flim55aHnkdiyl%2BQXp0VcbONDhQdO20MKaOz8QGOqUBV00ao3Af71LZZOBt%2FFx9Zmg2wLtZEBtxf2FsKQS%2F43tC5bf3lXOSLgtK24eenwnBVja1h7rE%2FTlK7xi8c%2BYulLINfcwTHrH%2F0Rss9dgXDVyY598Uc%2F8QhWSPY%2F%2B0o%2FsAedgwLLsGzukqVhxFz9%2F1DeiFh2irNrAdIJznTNqa6Re3TwBteZVzB1LwGRwhmslNIkh0%2FadMjlf8upfDTEQX3d0nvAqW&X-Amz-Signature=9cdc4a6cc1e63eb51e4700378ad799b4ee299b483d62ca3b415302d5c5cd88d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVT3W2IH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIGbBAbGDeJDPKzN89b2nNMgFYve9RGHgAWD1c1rvfUf2AiEA0Z3XuVPbtcKd9YM3sZJKcJz29nHy%2FmsF91dARn5hZ28q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEIH3f8cNxpvWOEheSrcA%2B1zJxc7lHyBHp0bT7tKwiYOAw7rnfC0e9suWwYGi2fxg5xtna5NbUweA6DlujAc%2BIaGXXYxWkjqcBaE9ZvOeUFM5d3qkUy76upEWRtNAKbpdoGu73NdFVHZE0wKudHvk35VXrGEe%2FdU7VgS8l7UbIxMjWyR6pNckY7sMfL%2F5Bs9qmNJXqq0PFHW5BtcFKVidxTH%2Fa7O5HWGU3ZO%2FMnpq1dmeajD5K1mo2vH6uVGNo5v8XG94tDt%2Fp0t5jJ7Yt4C6csK9fESNK2x%2B2FEcHYWx6M0WEXn5gj7aFZGStMyqwuG28lxHcuwefJ0eq9Ud%2FjOLs4n0W9Ekio%2BELKnFLvOCOoFKDCrfWUxKofC5qHpXFgCHhSie5XA%2B36Iw8OcxVmc4zB8TOEgFT26rL1fX6YwomQyiYEVjZZz3q%2FVD%2BshfOcuYkspKFrminVXINTGbIY8QUsVKWkReb0mScavwKwP7IkAA8Eelh9RoQ%2BL45oD9t9K7oEH%2BJd9WwPsAIm6mr85lK1VnambQ0g1cpNpNJF5tuRdNFFgQ98nBw%2BplQ01Z2r30ptlV8wZGjsLmrElHr8MGcsIDQPqK%2Bak19Rep03ar%2FYDbBU%2F5Flim55aHnkdiyl%2BQXp0VcbONDhQdO20MKaOz8QGOqUBV00ao3Af71LZZOBt%2FFx9Zmg2wLtZEBtxf2FsKQS%2F43tC5bf3lXOSLgtK24eenwnBVja1h7rE%2FTlK7xi8c%2BYulLINfcwTHrH%2F0Rss9dgXDVyY598Uc%2F8QhWSPY%2F%2B0o%2FsAedgwLLsGzukqVhxFz9%2F1DeiFh2irNrAdIJznTNqa6Re3TwBteZVzB1LwGRwhmslNIkh0%2FadMjlf8upfDTEQX3d0nvAqW&X-Amz-Signature=c1806750fa79a6d0ea9237941530a87874c22cd144f62d702a55f7a281da3269&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVT3W2IH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIGbBAbGDeJDPKzN89b2nNMgFYve9RGHgAWD1c1rvfUf2AiEA0Z3XuVPbtcKd9YM3sZJKcJz29nHy%2FmsF91dARn5hZ28q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEIH3f8cNxpvWOEheSrcA%2B1zJxc7lHyBHp0bT7tKwiYOAw7rnfC0e9suWwYGi2fxg5xtna5NbUweA6DlujAc%2BIaGXXYxWkjqcBaE9ZvOeUFM5d3qkUy76upEWRtNAKbpdoGu73NdFVHZE0wKudHvk35VXrGEe%2FdU7VgS8l7UbIxMjWyR6pNckY7sMfL%2F5Bs9qmNJXqq0PFHW5BtcFKVidxTH%2Fa7O5HWGU3ZO%2FMnpq1dmeajD5K1mo2vH6uVGNo5v8XG94tDt%2Fp0t5jJ7Yt4C6csK9fESNK2x%2B2FEcHYWx6M0WEXn5gj7aFZGStMyqwuG28lxHcuwefJ0eq9Ud%2FjOLs4n0W9Ekio%2BELKnFLvOCOoFKDCrfWUxKofC5qHpXFgCHhSie5XA%2B36Iw8OcxVmc4zB8TOEgFT26rL1fX6YwomQyiYEVjZZz3q%2FVD%2BshfOcuYkspKFrminVXINTGbIY8QUsVKWkReb0mScavwKwP7IkAA8Eelh9RoQ%2BL45oD9t9K7oEH%2BJd9WwPsAIm6mr85lK1VnambQ0g1cpNpNJF5tuRdNFFgQ98nBw%2BplQ01Z2r30ptlV8wZGjsLmrElHr8MGcsIDQPqK%2Bak19Rep03ar%2FYDbBU%2F5Flim55aHnkdiyl%2BQXp0VcbONDhQdO20MKaOz8QGOqUBV00ao3Af71LZZOBt%2FFx9Zmg2wLtZEBtxf2FsKQS%2F43tC5bf3lXOSLgtK24eenwnBVja1h7rE%2FTlK7xi8c%2BYulLINfcwTHrH%2F0Rss9dgXDVyY598Uc%2F8QhWSPY%2F%2B0o%2FsAedgwLLsGzukqVhxFz9%2F1DeiFh2irNrAdIJznTNqa6Re3TwBteZVzB1LwGRwhmslNIkh0%2FadMjlf8upfDTEQX3d0nvAqW&X-Amz-Signature=80879c4e9761b39a04f922b5c217f377afc8f90dde51a5d9281f0f743aff82a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVT3W2IH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIGbBAbGDeJDPKzN89b2nNMgFYve9RGHgAWD1c1rvfUf2AiEA0Z3XuVPbtcKd9YM3sZJKcJz29nHy%2FmsF91dARn5hZ28q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEIH3f8cNxpvWOEheSrcA%2B1zJxc7lHyBHp0bT7tKwiYOAw7rnfC0e9suWwYGi2fxg5xtna5NbUweA6DlujAc%2BIaGXXYxWkjqcBaE9ZvOeUFM5d3qkUy76upEWRtNAKbpdoGu73NdFVHZE0wKudHvk35VXrGEe%2FdU7VgS8l7UbIxMjWyR6pNckY7sMfL%2F5Bs9qmNJXqq0PFHW5BtcFKVidxTH%2Fa7O5HWGU3ZO%2FMnpq1dmeajD5K1mo2vH6uVGNo5v8XG94tDt%2Fp0t5jJ7Yt4C6csK9fESNK2x%2B2FEcHYWx6M0WEXn5gj7aFZGStMyqwuG28lxHcuwefJ0eq9Ud%2FjOLs4n0W9Ekio%2BELKnFLvOCOoFKDCrfWUxKofC5qHpXFgCHhSie5XA%2B36Iw8OcxVmc4zB8TOEgFT26rL1fX6YwomQyiYEVjZZz3q%2FVD%2BshfOcuYkspKFrminVXINTGbIY8QUsVKWkReb0mScavwKwP7IkAA8Eelh9RoQ%2BL45oD9t9K7oEH%2BJd9WwPsAIm6mr85lK1VnambQ0g1cpNpNJF5tuRdNFFgQ98nBw%2BplQ01Z2r30ptlV8wZGjsLmrElHr8MGcsIDQPqK%2Bak19Rep03ar%2FYDbBU%2F5Flim55aHnkdiyl%2BQXp0VcbONDhQdO20MKaOz8QGOqUBV00ao3Af71LZZOBt%2FFx9Zmg2wLtZEBtxf2FsKQS%2F43tC5bf3lXOSLgtK24eenwnBVja1h7rE%2FTlK7xi8c%2BYulLINfcwTHrH%2F0Rss9dgXDVyY598Uc%2F8QhWSPY%2F%2B0o%2FsAedgwLLsGzukqVhxFz9%2F1DeiFh2irNrAdIJznTNqa6Re3TwBteZVzB1LwGRwhmslNIkh0%2FadMjlf8upfDTEQX3d0nvAqW&X-Amz-Signature=07dd04a1a851ef77dc0eb44d23c977c5c11faf092126676aed3f5eabd1bb2ac9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVT3W2IH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIGbBAbGDeJDPKzN89b2nNMgFYve9RGHgAWD1c1rvfUf2AiEA0Z3XuVPbtcKd9YM3sZJKcJz29nHy%2FmsF91dARn5hZ28q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEIH3f8cNxpvWOEheSrcA%2B1zJxc7lHyBHp0bT7tKwiYOAw7rnfC0e9suWwYGi2fxg5xtna5NbUweA6DlujAc%2BIaGXXYxWkjqcBaE9ZvOeUFM5d3qkUy76upEWRtNAKbpdoGu73NdFVHZE0wKudHvk35VXrGEe%2FdU7VgS8l7UbIxMjWyR6pNckY7sMfL%2F5Bs9qmNJXqq0PFHW5BtcFKVidxTH%2Fa7O5HWGU3ZO%2FMnpq1dmeajD5K1mo2vH6uVGNo5v8XG94tDt%2Fp0t5jJ7Yt4C6csK9fESNK2x%2B2FEcHYWx6M0WEXn5gj7aFZGStMyqwuG28lxHcuwefJ0eq9Ud%2FjOLs4n0W9Ekio%2BELKnFLvOCOoFKDCrfWUxKofC5qHpXFgCHhSie5XA%2B36Iw8OcxVmc4zB8TOEgFT26rL1fX6YwomQyiYEVjZZz3q%2FVD%2BshfOcuYkspKFrminVXINTGbIY8QUsVKWkReb0mScavwKwP7IkAA8Eelh9RoQ%2BL45oD9t9K7oEH%2BJd9WwPsAIm6mr85lK1VnambQ0g1cpNpNJF5tuRdNFFgQ98nBw%2BplQ01Z2r30ptlV8wZGjsLmrElHr8MGcsIDQPqK%2Bak19Rep03ar%2FYDbBU%2F5Flim55aHnkdiyl%2BQXp0VcbONDhQdO20MKaOz8QGOqUBV00ao3Af71LZZOBt%2FFx9Zmg2wLtZEBtxf2FsKQS%2F43tC5bf3lXOSLgtK24eenwnBVja1h7rE%2FTlK7xi8c%2BYulLINfcwTHrH%2F0Rss9dgXDVyY598Uc%2F8QhWSPY%2F%2B0o%2FsAedgwLLsGzukqVhxFz9%2F1DeiFh2irNrAdIJznTNqa6Re3TwBteZVzB1LwGRwhmslNIkh0%2FadMjlf8upfDTEQX3d0nvAqW&X-Amz-Signature=86c9293e3fa22c003b72b35f2e5b0ba7bbcc9b13b9b980c4851b352857070ff1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVT3W2IH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIGbBAbGDeJDPKzN89b2nNMgFYve9RGHgAWD1c1rvfUf2AiEA0Z3XuVPbtcKd9YM3sZJKcJz29nHy%2FmsF91dARn5hZ28q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEIH3f8cNxpvWOEheSrcA%2B1zJxc7lHyBHp0bT7tKwiYOAw7rnfC0e9suWwYGi2fxg5xtna5NbUweA6DlujAc%2BIaGXXYxWkjqcBaE9ZvOeUFM5d3qkUy76upEWRtNAKbpdoGu73NdFVHZE0wKudHvk35VXrGEe%2FdU7VgS8l7UbIxMjWyR6pNckY7sMfL%2F5Bs9qmNJXqq0PFHW5BtcFKVidxTH%2Fa7O5HWGU3ZO%2FMnpq1dmeajD5K1mo2vH6uVGNo5v8XG94tDt%2Fp0t5jJ7Yt4C6csK9fESNK2x%2B2FEcHYWx6M0WEXn5gj7aFZGStMyqwuG28lxHcuwefJ0eq9Ud%2FjOLs4n0W9Ekio%2BELKnFLvOCOoFKDCrfWUxKofC5qHpXFgCHhSie5XA%2B36Iw8OcxVmc4zB8TOEgFT26rL1fX6YwomQyiYEVjZZz3q%2FVD%2BshfOcuYkspKFrminVXINTGbIY8QUsVKWkReb0mScavwKwP7IkAA8Eelh9RoQ%2BL45oD9t9K7oEH%2BJd9WwPsAIm6mr85lK1VnambQ0g1cpNpNJF5tuRdNFFgQ98nBw%2BplQ01Z2r30ptlV8wZGjsLmrElHr8MGcsIDQPqK%2Bak19Rep03ar%2FYDbBU%2F5Flim55aHnkdiyl%2BQXp0VcbONDhQdO20MKaOz8QGOqUBV00ao3Af71LZZOBt%2FFx9Zmg2wLtZEBtxf2FsKQS%2F43tC5bf3lXOSLgtK24eenwnBVja1h7rE%2FTlK7xi8c%2BYulLINfcwTHrH%2F0Rss9dgXDVyY598Uc%2F8QhWSPY%2F%2B0o%2FsAedgwLLsGzukqVhxFz9%2F1DeiFh2irNrAdIJznTNqa6Re3TwBteZVzB1LwGRwhmslNIkh0%2FadMjlf8upfDTEQX3d0nvAqW&X-Amz-Signature=f4499b2488ed68b4a98518736d02c1a9286200ae5be09a79cd3fd10f6ebb11ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVT3W2IH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIGbBAbGDeJDPKzN89b2nNMgFYve9RGHgAWD1c1rvfUf2AiEA0Z3XuVPbtcKd9YM3sZJKcJz29nHy%2FmsF91dARn5hZ28q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEIH3f8cNxpvWOEheSrcA%2B1zJxc7lHyBHp0bT7tKwiYOAw7rnfC0e9suWwYGi2fxg5xtna5NbUweA6DlujAc%2BIaGXXYxWkjqcBaE9ZvOeUFM5d3qkUy76upEWRtNAKbpdoGu73NdFVHZE0wKudHvk35VXrGEe%2FdU7VgS8l7UbIxMjWyR6pNckY7sMfL%2F5Bs9qmNJXqq0PFHW5BtcFKVidxTH%2Fa7O5HWGU3ZO%2FMnpq1dmeajD5K1mo2vH6uVGNo5v8XG94tDt%2Fp0t5jJ7Yt4C6csK9fESNK2x%2B2FEcHYWx6M0WEXn5gj7aFZGStMyqwuG28lxHcuwefJ0eq9Ud%2FjOLs4n0W9Ekio%2BELKnFLvOCOoFKDCrfWUxKofC5qHpXFgCHhSie5XA%2B36Iw8OcxVmc4zB8TOEgFT26rL1fX6YwomQyiYEVjZZz3q%2FVD%2BshfOcuYkspKFrminVXINTGbIY8QUsVKWkReb0mScavwKwP7IkAA8Eelh9RoQ%2BL45oD9t9K7oEH%2BJd9WwPsAIm6mr85lK1VnambQ0g1cpNpNJF5tuRdNFFgQ98nBw%2BplQ01Z2r30ptlV8wZGjsLmrElHr8MGcsIDQPqK%2Bak19Rep03ar%2FYDbBU%2F5Flim55aHnkdiyl%2BQXp0VcbONDhQdO20MKaOz8QGOqUBV00ao3Af71LZZOBt%2FFx9Zmg2wLtZEBtxf2FsKQS%2F43tC5bf3lXOSLgtK24eenwnBVja1h7rE%2FTlK7xi8c%2BYulLINfcwTHrH%2F0Rss9dgXDVyY598Uc%2F8QhWSPY%2F%2B0o%2FsAedgwLLsGzukqVhxFz9%2F1DeiFh2irNrAdIJznTNqa6Re3TwBteZVzB1LwGRwhmslNIkh0%2FadMjlf8upfDTEQX3d0nvAqW&X-Amz-Signature=3dcb6d787f81ccc703ec27cb5a171a303e921b89df8894722a097ae8df483664&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVT3W2IH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIGbBAbGDeJDPKzN89b2nNMgFYve9RGHgAWD1c1rvfUf2AiEA0Z3XuVPbtcKd9YM3sZJKcJz29nHy%2FmsF91dARn5hZ28q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEIH3f8cNxpvWOEheSrcA%2B1zJxc7lHyBHp0bT7tKwiYOAw7rnfC0e9suWwYGi2fxg5xtna5NbUweA6DlujAc%2BIaGXXYxWkjqcBaE9ZvOeUFM5d3qkUy76upEWRtNAKbpdoGu73NdFVHZE0wKudHvk35VXrGEe%2FdU7VgS8l7UbIxMjWyR6pNckY7sMfL%2F5Bs9qmNJXqq0PFHW5BtcFKVidxTH%2Fa7O5HWGU3ZO%2FMnpq1dmeajD5K1mo2vH6uVGNo5v8XG94tDt%2Fp0t5jJ7Yt4C6csK9fESNK2x%2B2FEcHYWx6M0WEXn5gj7aFZGStMyqwuG28lxHcuwefJ0eq9Ud%2FjOLs4n0W9Ekio%2BELKnFLvOCOoFKDCrfWUxKofC5qHpXFgCHhSie5XA%2B36Iw8OcxVmc4zB8TOEgFT26rL1fX6YwomQyiYEVjZZz3q%2FVD%2BshfOcuYkspKFrminVXINTGbIY8QUsVKWkReb0mScavwKwP7IkAA8Eelh9RoQ%2BL45oD9t9K7oEH%2BJd9WwPsAIm6mr85lK1VnambQ0g1cpNpNJF5tuRdNFFgQ98nBw%2BplQ01Z2r30ptlV8wZGjsLmrElHr8MGcsIDQPqK%2Bak19Rep03ar%2FYDbBU%2F5Flim55aHnkdiyl%2BQXp0VcbONDhQdO20MKaOz8QGOqUBV00ao3Af71LZZOBt%2FFx9Zmg2wLtZEBtxf2FsKQS%2F43tC5bf3lXOSLgtK24eenwnBVja1h7rE%2FTlK7xi8c%2BYulLINfcwTHrH%2F0Rss9dgXDVyY598Uc%2F8QhWSPY%2F%2B0o%2FsAedgwLLsGzukqVhxFz9%2F1DeiFh2irNrAdIJznTNqa6Re3TwBteZVzB1LwGRwhmslNIkh0%2FadMjlf8upfDTEQX3d0nvAqW&X-Amz-Signature=34ed61941316a8db2f2e42a7c66b0aab54431274e11eb48b7e827b34432b563d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVT3W2IH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIGbBAbGDeJDPKzN89b2nNMgFYve9RGHgAWD1c1rvfUf2AiEA0Z3XuVPbtcKd9YM3sZJKcJz29nHy%2FmsF91dARn5hZ28q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEIH3f8cNxpvWOEheSrcA%2B1zJxc7lHyBHp0bT7tKwiYOAw7rnfC0e9suWwYGi2fxg5xtna5NbUweA6DlujAc%2BIaGXXYxWkjqcBaE9ZvOeUFM5d3qkUy76upEWRtNAKbpdoGu73NdFVHZE0wKudHvk35VXrGEe%2FdU7VgS8l7UbIxMjWyR6pNckY7sMfL%2F5Bs9qmNJXqq0PFHW5BtcFKVidxTH%2Fa7O5HWGU3ZO%2FMnpq1dmeajD5K1mo2vH6uVGNo5v8XG94tDt%2Fp0t5jJ7Yt4C6csK9fESNK2x%2B2FEcHYWx6M0WEXn5gj7aFZGStMyqwuG28lxHcuwefJ0eq9Ud%2FjOLs4n0W9Ekio%2BELKnFLvOCOoFKDCrfWUxKofC5qHpXFgCHhSie5XA%2B36Iw8OcxVmc4zB8TOEgFT26rL1fX6YwomQyiYEVjZZz3q%2FVD%2BshfOcuYkspKFrminVXINTGbIY8QUsVKWkReb0mScavwKwP7IkAA8Eelh9RoQ%2BL45oD9t9K7oEH%2BJd9WwPsAIm6mr85lK1VnambQ0g1cpNpNJF5tuRdNFFgQ98nBw%2BplQ01Z2r30ptlV8wZGjsLmrElHr8MGcsIDQPqK%2Bak19Rep03ar%2FYDbBU%2F5Flim55aHnkdiyl%2BQXp0VcbONDhQdO20MKaOz8QGOqUBV00ao3Af71LZZOBt%2FFx9Zmg2wLtZEBtxf2FsKQS%2F43tC5bf3lXOSLgtK24eenwnBVja1h7rE%2FTlK7xi8c%2BYulLINfcwTHrH%2F0Rss9dgXDVyY598Uc%2F8QhWSPY%2F%2B0o%2FsAedgwLLsGzukqVhxFz9%2F1DeiFh2irNrAdIJznTNqa6Re3TwBteZVzB1LwGRwhmslNIkh0%2FadMjlf8upfDTEQX3d0nvAqW&X-Amz-Signature=5ae41042914a69ccae5bfa143e05348d8ebaa91fa636e6d7eaff7a259d99d3b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVT3W2IH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIGbBAbGDeJDPKzN89b2nNMgFYve9RGHgAWD1c1rvfUf2AiEA0Z3XuVPbtcKd9YM3sZJKcJz29nHy%2FmsF91dARn5hZ28q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEIH3f8cNxpvWOEheSrcA%2B1zJxc7lHyBHp0bT7tKwiYOAw7rnfC0e9suWwYGi2fxg5xtna5NbUweA6DlujAc%2BIaGXXYxWkjqcBaE9ZvOeUFM5d3qkUy76upEWRtNAKbpdoGu73NdFVHZE0wKudHvk35VXrGEe%2FdU7VgS8l7UbIxMjWyR6pNckY7sMfL%2F5Bs9qmNJXqq0PFHW5BtcFKVidxTH%2Fa7O5HWGU3ZO%2FMnpq1dmeajD5K1mo2vH6uVGNo5v8XG94tDt%2Fp0t5jJ7Yt4C6csK9fESNK2x%2B2FEcHYWx6M0WEXn5gj7aFZGStMyqwuG28lxHcuwefJ0eq9Ud%2FjOLs4n0W9Ekio%2BELKnFLvOCOoFKDCrfWUxKofC5qHpXFgCHhSie5XA%2B36Iw8OcxVmc4zB8TOEgFT26rL1fX6YwomQyiYEVjZZz3q%2FVD%2BshfOcuYkspKFrminVXINTGbIY8QUsVKWkReb0mScavwKwP7IkAA8Eelh9RoQ%2BL45oD9t9K7oEH%2BJd9WwPsAIm6mr85lK1VnambQ0g1cpNpNJF5tuRdNFFgQ98nBw%2BplQ01Z2r30ptlV8wZGjsLmrElHr8MGcsIDQPqK%2Bak19Rep03ar%2FYDbBU%2F5Flim55aHnkdiyl%2BQXp0VcbONDhQdO20MKaOz8QGOqUBV00ao3Af71LZZOBt%2FFx9Zmg2wLtZEBtxf2FsKQS%2F43tC5bf3lXOSLgtK24eenwnBVja1h7rE%2FTlK7xi8c%2BYulLINfcwTHrH%2F0Rss9dgXDVyY598Uc%2F8QhWSPY%2F%2B0o%2FsAedgwLLsGzukqVhxFz9%2F1DeiFh2irNrAdIJznTNqa6Re3TwBteZVzB1LwGRwhmslNIkh0%2FadMjlf8upfDTEQX3d0nvAqW&X-Amz-Signature=6abc3922fcfce5b391e7a62708a4e31947ca3bc728c1ad0a4ee0cfdd9a9a0392&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVT3W2IH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIGbBAbGDeJDPKzN89b2nNMgFYve9RGHgAWD1c1rvfUf2AiEA0Z3XuVPbtcKd9YM3sZJKcJz29nHy%2FmsF91dARn5hZ28q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEIH3f8cNxpvWOEheSrcA%2B1zJxc7lHyBHp0bT7tKwiYOAw7rnfC0e9suWwYGi2fxg5xtna5NbUweA6DlujAc%2BIaGXXYxWkjqcBaE9ZvOeUFM5d3qkUy76upEWRtNAKbpdoGu73NdFVHZE0wKudHvk35VXrGEe%2FdU7VgS8l7UbIxMjWyR6pNckY7sMfL%2F5Bs9qmNJXqq0PFHW5BtcFKVidxTH%2Fa7O5HWGU3ZO%2FMnpq1dmeajD5K1mo2vH6uVGNo5v8XG94tDt%2Fp0t5jJ7Yt4C6csK9fESNK2x%2B2FEcHYWx6M0WEXn5gj7aFZGStMyqwuG28lxHcuwefJ0eq9Ud%2FjOLs4n0W9Ekio%2BELKnFLvOCOoFKDCrfWUxKofC5qHpXFgCHhSie5XA%2B36Iw8OcxVmc4zB8TOEgFT26rL1fX6YwomQyiYEVjZZz3q%2FVD%2BshfOcuYkspKFrminVXINTGbIY8QUsVKWkReb0mScavwKwP7IkAA8Eelh9RoQ%2BL45oD9t9K7oEH%2BJd9WwPsAIm6mr85lK1VnambQ0g1cpNpNJF5tuRdNFFgQ98nBw%2BplQ01Z2r30ptlV8wZGjsLmrElHr8MGcsIDQPqK%2Bak19Rep03ar%2FYDbBU%2F5Flim55aHnkdiyl%2BQXp0VcbONDhQdO20MKaOz8QGOqUBV00ao3Af71LZZOBt%2FFx9Zmg2wLtZEBtxf2FsKQS%2F43tC5bf3lXOSLgtK24eenwnBVja1h7rE%2FTlK7xi8c%2BYulLINfcwTHrH%2F0Rss9dgXDVyY598Uc%2F8QhWSPY%2F%2B0o%2FsAedgwLLsGzukqVhxFz9%2F1DeiFh2irNrAdIJznTNqa6Re3TwBteZVzB1LwGRwhmslNIkh0%2FadMjlf8upfDTEQX3d0nvAqW&X-Amz-Signature=b01875eb5f37fc848511ea884775598765bced80c55a270ccadb288321648a85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVT3W2IH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIGbBAbGDeJDPKzN89b2nNMgFYve9RGHgAWD1c1rvfUf2AiEA0Z3XuVPbtcKd9YM3sZJKcJz29nHy%2FmsF91dARn5hZ28q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEIH3f8cNxpvWOEheSrcA%2B1zJxc7lHyBHp0bT7tKwiYOAw7rnfC0e9suWwYGi2fxg5xtna5NbUweA6DlujAc%2BIaGXXYxWkjqcBaE9ZvOeUFM5d3qkUy76upEWRtNAKbpdoGu73NdFVHZE0wKudHvk35VXrGEe%2FdU7VgS8l7UbIxMjWyR6pNckY7sMfL%2F5Bs9qmNJXqq0PFHW5BtcFKVidxTH%2Fa7O5HWGU3ZO%2FMnpq1dmeajD5K1mo2vH6uVGNo5v8XG94tDt%2Fp0t5jJ7Yt4C6csK9fESNK2x%2B2FEcHYWx6M0WEXn5gj7aFZGStMyqwuG28lxHcuwefJ0eq9Ud%2FjOLs4n0W9Ekio%2BELKnFLvOCOoFKDCrfWUxKofC5qHpXFgCHhSie5XA%2B36Iw8OcxVmc4zB8TOEgFT26rL1fX6YwomQyiYEVjZZz3q%2FVD%2BshfOcuYkspKFrminVXINTGbIY8QUsVKWkReb0mScavwKwP7IkAA8Eelh9RoQ%2BL45oD9t9K7oEH%2BJd9WwPsAIm6mr85lK1VnambQ0g1cpNpNJF5tuRdNFFgQ98nBw%2BplQ01Z2r30ptlV8wZGjsLmrElHr8MGcsIDQPqK%2Bak19Rep03ar%2FYDbBU%2F5Flim55aHnkdiyl%2BQXp0VcbONDhQdO20MKaOz8QGOqUBV00ao3Af71LZZOBt%2FFx9Zmg2wLtZEBtxf2FsKQS%2F43tC5bf3lXOSLgtK24eenwnBVja1h7rE%2FTlK7xi8c%2BYulLINfcwTHrH%2F0Rss9dgXDVyY598Uc%2F8QhWSPY%2F%2B0o%2FsAedgwLLsGzukqVhxFz9%2F1DeiFh2irNrAdIJznTNqa6Re3TwBteZVzB1LwGRwhmslNIkh0%2FadMjlf8upfDTEQX3d0nvAqW&X-Amz-Signature=465fba4c4ea3d9d3f0837c72c42435f9a9f689723aa1fbff4534b4e2b3574b91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVT3W2IH%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T221016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJHMEUCIGbBAbGDeJDPKzN89b2nNMgFYve9RGHgAWD1c1rvfUf2AiEA0Z3XuVPbtcKd9YM3sZJKcJz29nHy%2FmsF91dARn5hZ28q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDEIH3f8cNxpvWOEheSrcA%2B1zJxc7lHyBHp0bT7tKwiYOAw7rnfC0e9suWwYGi2fxg5xtna5NbUweA6DlujAc%2BIaGXXYxWkjqcBaE9ZvOeUFM5d3qkUy76upEWRtNAKbpdoGu73NdFVHZE0wKudHvk35VXrGEe%2FdU7VgS8l7UbIxMjWyR6pNckY7sMfL%2F5Bs9qmNJXqq0PFHW5BtcFKVidxTH%2Fa7O5HWGU3ZO%2FMnpq1dmeajD5K1mo2vH6uVGNo5v8XG94tDt%2Fp0t5jJ7Yt4C6csK9fESNK2x%2B2FEcHYWx6M0WEXn5gj7aFZGStMyqwuG28lxHcuwefJ0eq9Ud%2FjOLs4n0W9Ekio%2BELKnFLvOCOoFKDCrfWUxKofC5qHpXFgCHhSie5XA%2B36Iw8OcxVmc4zB8TOEgFT26rL1fX6YwomQyiYEVjZZz3q%2FVD%2BshfOcuYkspKFrminVXINTGbIY8QUsVKWkReb0mScavwKwP7IkAA8Eelh9RoQ%2BL45oD9t9K7oEH%2BJd9WwPsAIm6mr85lK1VnambQ0g1cpNpNJF5tuRdNFFgQ98nBw%2BplQ01Z2r30ptlV8wZGjsLmrElHr8MGcsIDQPqK%2Bak19Rep03ar%2FYDbBU%2F5Flim55aHnkdiyl%2BQXp0VcbONDhQdO20MKaOz8QGOqUBV00ao3Af71LZZOBt%2FFx9Zmg2wLtZEBtxf2FsKQS%2F43tC5bf3lXOSLgtK24eenwnBVja1h7rE%2FTlK7xi8c%2BYulLINfcwTHrH%2F0Rss9dgXDVyY598Uc%2F8QhWSPY%2F%2B0o%2FsAedgwLLsGzukqVhxFz9%2F1DeiFh2irNrAdIJznTNqa6Re3TwBteZVzB1LwGRwhmslNIkh0%2FadMjlf8upfDTEQX3d0nvAqW&X-Amz-Signature=cea4e9b20f0f6d5ddc47a222d6458ae0fc1f8db07a1c9ad63ccfe1b2146ea27a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
