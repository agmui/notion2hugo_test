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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5YWGF2P%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIgPWbxBCn7bqUpnxB1PInnCVub7L31c0oEpcEBVWE1AiArC64z9f6rFd2u0bPxsVcraKehfylQ6uTYxEIh8sVtCSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMDSLI7rYjMyn3Jx8uKtwDC2cfVFdVfuJq%2Fs4K%2BaJCz9Kz%2BmtVi%2B3BwvUzE5IgDPutBbsq5Kc1VmP6G7hNyINvoMW%2FcvYz6lQ4oTBKcw9UpPwbIqu3R7L%2FXfc6JKl%2F%2BWxuomzbxQadxuhoroAYigxlZmYDB5ZT%2Br9Xdjaf1c%2FqNBwYeFeG8zRYkS6OqJkIwGi1hN62opOK8Risy2GHvEPDdOc%2Ft1yZf4q4nOlIXP5aYabnaI8XO5XoSz4XeL%2FqAvwxCUhFj3mRsJB0cjbwx1LNGUaSfZyeOA1mcdadfPY%2Fg5fp%2BeDXOSc24pEANYx01yfUf1wdWHxdNdaJHlqYFNLDi6BYRIoY%2BMgdIaDm2CJ9r8ynUO4n36fLLpvqxbJDqh4WLy%2FQL%2FhjXV6erhsCz6P9uWCdqy%2BF2QFCAlVrVsS8U3V4Nb4nwrezH72J4P9dWlrxyb49fWUV1QLZ2STUhp7zxLAYOkQ1IT22BIjclu0iPhyf09NRZYeOHBKsIVWo9%2Bfb4ew86P37W8v2UaTTSwEzO2okh%2BwUYhrWE2o9sNa%2BRqYsWexEVxsRzy1TLQ%2BxMJWSGHA6Q3hY%2F2aYOsnRvOYDsKrg70mCozFr9cC4KLJMZCZKR2mA7YdKd9ky0TbIiS%2BrtxSx3dWOYEO18Lswydm%2BxAY6pgGloqoaaALy%2FY3BNTd0bDPCbROO89jYhm5i5qSWb7yNr2l7tzG158TF9201q4rXPtljZ2bNuqlqhIlkV%2FD4UsCZB6QVzamquPCqn9yx5HdPg%2FSss7MXzZewMl752gVpqWZ9oex7zO2DZl3ktKcXFAbYAnP6FiXx6LpQqtOf4CA6gnO05uJHdjcRFUyj1wdovpvEf7ub7sRjv%2FACYHWJQiOSwn6jDevk&X-Amz-Signature=242bdea4af74b9a6bc59f86d70afc15ca36b91c2135c7ae8898c583905a68936&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5YWGF2P%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIgPWbxBCn7bqUpnxB1PInnCVub7L31c0oEpcEBVWE1AiArC64z9f6rFd2u0bPxsVcraKehfylQ6uTYxEIh8sVtCSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMDSLI7rYjMyn3Jx8uKtwDC2cfVFdVfuJq%2Fs4K%2BaJCz9Kz%2BmtVi%2B3BwvUzE5IgDPutBbsq5Kc1VmP6G7hNyINvoMW%2FcvYz6lQ4oTBKcw9UpPwbIqu3R7L%2FXfc6JKl%2F%2BWxuomzbxQadxuhoroAYigxlZmYDB5ZT%2Br9Xdjaf1c%2FqNBwYeFeG8zRYkS6OqJkIwGi1hN62opOK8Risy2GHvEPDdOc%2Ft1yZf4q4nOlIXP5aYabnaI8XO5XoSz4XeL%2FqAvwxCUhFj3mRsJB0cjbwx1LNGUaSfZyeOA1mcdadfPY%2Fg5fp%2BeDXOSc24pEANYx01yfUf1wdWHxdNdaJHlqYFNLDi6BYRIoY%2BMgdIaDm2CJ9r8ynUO4n36fLLpvqxbJDqh4WLy%2FQL%2FhjXV6erhsCz6P9uWCdqy%2BF2QFCAlVrVsS8U3V4Nb4nwrezH72J4P9dWlrxyb49fWUV1QLZ2STUhp7zxLAYOkQ1IT22BIjclu0iPhyf09NRZYeOHBKsIVWo9%2Bfb4ew86P37W8v2UaTTSwEzO2okh%2BwUYhrWE2o9sNa%2BRqYsWexEVxsRzy1TLQ%2BxMJWSGHA6Q3hY%2F2aYOsnRvOYDsKrg70mCozFr9cC4KLJMZCZKR2mA7YdKd9ky0TbIiS%2BrtxSx3dWOYEO18Lswydm%2BxAY6pgGloqoaaALy%2FY3BNTd0bDPCbROO89jYhm5i5qSWb7yNr2l7tzG158TF9201q4rXPtljZ2bNuqlqhIlkV%2FD4UsCZB6QVzamquPCqn9yx5HdPg%2FSss7MXzZewMl752gVpqWZ9oex7zO2DZl3ktKcXFAbYAnP6FiXx6LpQqtOf4CA6gnO05uJHdjcRFUyj1wdovpvEf7ub7sRjv%2FACYHWJQiOSwn6jDevk&X-Amz-Signature=0d552eb98df64bf4e162178017e7b1e2a1eec7ffb7de079e175b142cd1a0ccbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5YWGF2P%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIgPWbxBCn7bqUpnxB1PInnCVub7L31c0oEpcEBVWE1AiArC64z9f6rFd2u0bPxsVcraKehfylQ6uTYxEIh8sVtCSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMDSLI7rYjMyn3Jx8uKtwDC2cfVFdVfuJq%2Fs4K%2BaJCz9Kz%2BmtVi%2B3BwvUzE5IgDPutBbsq5Kc1VmP6G7hNyINvoMW%2FcvYz6lQ4oTBKcw9UpPwbIqu3R7L%2FXfc6JKl%2F%2BWxuomzbxQadxuhoroAYigxlZmYDB5ZT%2Br9Xdjaf1c%2FqNBwYeFeG8zRYkS6OqJkIwGi1hN62opOK8Risy2GHvEPDdOc%2Ft1yZf4q4nOlIXP5aYabnaI8XO5XoSz4XeL%2FqAvwxCUhFj3mRsJB0cjbwx1LNGUaSfZyeOA1mcdadfPY%2Fg5fp%2BeDXOSc24pEANYx01yfUf1wdWHxdNdaJHlqYFNLDi6BYRIoY%2BMgdIaDm2CJ9r8ynUO4n36fLLpvqxbJDqh4WLy%2FQL%2FhjXV6erhsCz6P9uWCdqy%2BF2QFCAlVrVsS8U3V4Nb4nwrezH72J4P9dWlrxyb49fWUV1QLZ2STUhp7zxLAYOkQ1IT22BIjclu0iPhyf09NRZYeOHBKsIVWo9%2Bfb4ew86P37W8v2UaTTSwEzO2okh%2BwUYhrWE2o9sNa%2BRqYsWexEVxsRzy1TLQ%2BxMJWSGHA6Q3hY%2F2aYOsnRvOYDsKrg70mCozFr9cC4KLJMZCZKR2mA7YdKd9ky0TbIiS%2BrtxSx3dWOYEO18Lswydm%2BxAY6pgGloqoaaALy%2FY3BNTd0bDPCbROO89jYhm5i5qSWb7yNr2l7tzG158TF9201q4rXPtljZ2bNuqlqhIlkV%2FD4UsCZB6QVzamquPCqn9yx5HdPg%2FSss7MXzZewMl752gVpqWZ9oex7zO2DZl3ktKcXFAbYAnP6FiXx6LpQqtOf4CA6gnO05uJHdjcRFUyj1wdovpvEf7ub7sRjv%2FACYHWJQiOSwn6jDevk&X-Amz-Signature=df6d3c96ffde6776361759735de95d800470695b5c254d38d4b627247fef853d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5YWGF2P%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIgPWbxBCn7bqUpnxB1PInnCVub7L31c0oEpcEBVWE1AiArC64z9f6rFd2u0bPxsVcraKehfylQ6uTYxEIh8sVtCSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMDSLI7rYjMyn3Jx8uKtwDC2cfVFdVfuJq%2Fs4K%2BaJCz9Kz%2BmtVi%2B3BwvUzE5IgDPutBbsq5Kc1VmP6G7hNyINvoMW%2FcvYz6lQ4oTBKcw9UpPwbIqu3R7L%2FXfc6JKl%2F%2BWxuomzbxQadxuhoroAYigxlZmYDB5ZT%2Br9Xdjaf1c%2FqNBwYeFeG8zRYkS6OqJkIwGi1hN62opOK8Risy2GHvEPDdOc%2Ft1yZf4q4nOlIXP5aYabnaI8XO5XoSz4XeL%2FqAvwxCUhFj3mRsJB0cjbwx1LNGUaSfZyeOA1mcdadfPY%2Fg5fp%2BeDXOSc24pEANYx01yfUf1wdWHxdNdaJHlqYFNLDi6BYRIoY%2BMgdIaDm2CJ9r8ynUO4n36fLLpvqxbJDqh4WLy%2FQL%2FhjXV6erhsCz6P9uWCdqy%2BF2QFCAlVrVsS8U3V4Nb4nwrezH72J4P9dWlrxyb49fWUV1QLZ2STUhp7zxLAYOkQ1IT22BIjclu0iPhyf09NRZYeOHBKsIVWo9%2Bfb4ew86P37W8v2UaTTSwEzO2okh%2BwUYhrWE2o9sNa%2BRqYsWexEVxsRzy1TLQ%2BxMJWSGHA6Q3hY%2F2aYOsnRvOYDsKrg70mCozFr9cC4KLJMZCZKR2mA7YdKd9ky0TbIiS%2BrtxSx3dWOYEO18Lswydm%2BxAY6pgGloqoaaALy%2FY3BNTd0bDPCbROO89jYhm5i5qSWb7yNr2l7tzG158TF9201q4rXPtljZ2bNuqlqhIlkV%2FD4UsCZB6QVzamquPCqn9yx5HdPg%2FSss7MXzZewMl752gVpqWZ9oex7zO2DZl3ktKcXFAbYAnP6FiXx6LpQqtOf4CA6gnO05uJHdjcRFUyj1wdovpvEf7ub7sRjv%2FACYHWJQiOSwn6jDevk&X-Amz-Signature=89fb23906ebe1da88c639e248e4cdf182c8b1baa22fbc144ea82b31d79f11d18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5YWGF2P%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIgPWbxBCn7bqUpnxB1PInnCVub7L31c0oEpcEBVWE1AiArC64z9f6rFd2u0bPxsVcraKehfylQ6uTYxEIh8sVtCSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMDSLI7rYjMyn3Jx8uKtwDC2cfVFdVfuJq%2Fs4K%2BaJCz9Kz%2BmtVi%2B3BwvUzE5IgDPutBbsq5Kc1VmP6G7hNyINvoMW%2FcvYz6lQ4oTBKcw9UpPwbIqu3R7L%2FXfc6JKl%2F%2BWxuomzbxQadxuhoroAYigxlZmYDB5ZT%2Br9Xdjaf1c%2FqNBwYeFeG8zRYkS6OqJkIwGi1hN62opOK8Risy2GHvEPDdOc%2Ft1yZf4q4nOlIXP5aYabnaI8XO5XoSz4XeL%2FqAvwxCUhFj3mRsJB0cjbwx1LNGUaSfZyeOA1mcdadfPY%2Fg5fp%2BeDXOSc24pEANYx01yfUf1wdWHxdNdaJHlqYFNLDi6BYRIoY%2BMgdIaDm2CJ9r8ynUO4n36fLLpvqxbJDqh4WLy%2FQL%2FhjXV6erhsCz6P9uWCdqy%2BF2QFCAlVrVsS8U3V4Nb4nwrezH72J4P9dWlrxyb49fWUV1QLZ2STUhp7zxLAYOkQ1IT22BIjclu0iPhyf09NRZYeOHBKsIVWo9%2Bfb4ew86P37W8v2UaTTSwEzO2okh%2BwUYhrWE2o9sNa%2BRqYsWexEVxsRzy1TLQ%2BxMJWSGHA6Q3hY%2F2aYOsnRvOYDsKrg70mCozFr9cC4KLJMZCZKR2mA7YdKd9ky0TbIiS%2BrtxSx3dWOYEO18Lswydm%2BxAY6pgGloqoaaALy%2FY3BNTd0bDPCbROO89jYhm5i5qSWb7yNr2l7tzG158TF9201q4rXPtljZ2bNuqlqhIlkV%2FD4UsCZB6QVzamquPCqn9yx5HdPg%2FSss7MXzZewMl752gVpqWZ9oex7zO2DZl3ktKcXFAbYAnP6FiXx6LpQqtOf4CA6gnO05uJHdjcRFUyj1wdovpvEf7ub7sRjv%2FACYHWJQiOSwn6jDevk&X-Amz-Signature=3e335f93dc4a17558c48ba04e0e39f68a2cbdd3fc51ed97909756b03918d8550&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5YWGF2P%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIgPWbxBCn7bqUpnxB1PInnCVub7L31c0oEpcEBVWE1AiArC64z9f6rFd2u0bPxsVcraKehfylQ6uTYxEIh8sVtCSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMDSLI7rYjMyn3Jx8uKtwDC2cfVFdVfuJq%2Fs4K%2BaJCz9Kz%2BmtVi%2B3BwvUzE5IgDPutBbsq5Kc1VmP6G7hNyINvoMW%2FcvYz6lQ4oTBKcw9UpPwbIqu3R7L%2FXfc6JKl%2F%2BWxuomzbxQadxuhoroAYigxlZmYDB5ZT%2Br9Xdjaf1c%2FqNBwYeFeG8zRYkS6OqJkIwGi1hN62opOK8Risy2GHvEPDdOc%2Ft1yZf4q4nOlIXP5aYabnaI8XO5XoSz4XeL%2FqAvwxCUhFj3mRsJB0cjbwx1LNGUaSfZyeOA1mcdadfPY%2Fg5fp%2BeDXOSc24pEANYx01yfUf1wdWHxdNdaJHlqYFNLDi6BYRIoY%2BMgdIaDm2CJ9r8ynUO4n36fLLpvqxbJDqh4WLy%2FQL%2FhjXV6erhsCz6P9uWCdqy%2BF2QFCAlVrVsS8U3V4Nb4nwrezH72J4P9dWlrxyb49fWUV1QLZ2STUhp7zxLAYOkQ1IT22BIjclu0iPhyf09NRZYeOHBKsIVWo9%2Bfb4ew86P37W8v2UaTTSwEzO2okh%2BwUYhrWE2o9sNa%2BRqYsWexEVxsRzy1TLQ%2BxMJWSGHA6Q3hY%2F2aYOsnRvOYDsKrg70mCozFr9cC4KLJMZCZKR2mA7YdKd9ky0TbIiS%2BrtxSx3dWOYEO18Lswydm%2BxAY6pgGloqoaaALy%2FY3BNTd0bDPCbROO89jYhm5i5qSWb7yNr2l7tzG158TF9201q4rXPtljZ2bNuqlqhIlkV%2FD4UsCZB6QVzamquPCqn9yx5HdPg%2FSss7MXzZewMl752gVpqWZ9oex7zO2DZl3ktKcXFAbYAnP6FiXx6LpQqtOf4CA6gnO05uJHdjcRFUyj1wdovpvEf7ub7sRjv%2FACYHWJQiOSwn6jDevk&X-Amz-Signature=241d17f4c331129ff554d60867c33e33d29c92826b1526e68cea8e411c6ae349&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5YWGF2P%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIgPWbxBCn7bqUpnxB1PInnCVub7L31c0oEpcEBVWE1AiArC64z9f6rFd2u0bPxsVcraKehfylQ6uTYxEIh8sVtCSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMDSLI7rYjMyn3Jx8uKtwDC2cfVFdVfuJq%2Fs4K%2BaJCz9Kz%2BmtVi%2B3BwvUzE5IgDPutBbsq5Kc1VmP6G7hNyINvoMW%2FcvYz6lQ4oTBKcw9UpPwbIqu3R7L%2FXfc6JKl%2F%2BWxuomzbxQadxuhoroAYigxlZmYDB5ZT%2Br9Xdjaf1c%2FqNBwYeFeG8zRYkS6OqJkIwGi1hN62opOK8Risy2GHvEPDdOc%2Ft1yZf4q4nOlIXP5aYabnaI8XO5XoSz4XeL%2FqAvwxCUhFj3mRsJB0cjbwx1LNGUaSfZyeOA1mcdadfPY%2Fg5fp%2BeDXOSc24pEANYx01yfUf1wdWHxdNdaJHlqYFNLDi6BYRIoY%2BMgdIaDm2CJ9r8ynUO4n36fLLpvqxbJDqh4WLy%2FQL%2FhjXV6erhsCz6P9uWCdqy%2BF2QFCAlVrVsS8U3V4Nb4nwrezH72J4P9dWlrxyb49fWUV1QLZ2STUhp7zxLAYOkQ1IT22BIjclu0iPhyf09NRZYeOHBKsIVWo9%2Bfb4ew86P37W8v2UaTTSwEzO2okh%2BwUYhrWE2o9sNa%2BRqYsWexEVxsRzy1TLQ%2BxMJWSGHA6Q3hY%2F2aYOsnRvOYDsKrg70mCozFr9cC4KLJMZCZKR2mA7YdKd9ky0TbIiS%2BrtxSx3dWOYEO18Lswydm%2BxAY6pgGloqoaaALy%2FY3BNTd0bDPCbROO89jYhm5i5qSWb7yNr2l7tzG158TF9201q4rXPtljZ2bNuqlqhIlkV%2FD4UsCZB6QVzamquPCqn9yx5HdPg%2FSss7MXzZewMl752gVpqWZ9oex7zO2DZl3ktKcXFAbYAnP6FiXx6LpQqtOf4CA6gnO05uJHdjcRFUyj1wdovpvEf7ub7sRjv%2FACYHWJQiOSwn6jDevk&X-Amz-Signature=13bc39f0b32f3823453791a023ec91b9b9b05675aedbb2276b11c73c024cc0bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5YWGF2P%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIgPWbxBCn7bqUpnxB1PInnCVub7L31c0oEpcEBVWE1AiArC64z9f6rFd2u0bPxsVcraKehfylQ6uTYxEIh8sVtCSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMDSLI7rYjMyn3Jx8uKtwDC2cfVFdVfuJq%2Fs4K%2BaJCz9Kz%2BmtVi%2B3BwvUzE5IgDPutBbsq5Kc1VmP6G7hNyINvoMW%2FcvYz6lQ4oTBKcw9UpPwbIqu3R7L%2FXfc6JKl%2F%2BWxuomzbxQadxuhoroAYigxlZmYDB5ZT%2Br9Xdjaf1c%2FqNBwYeFeG8zRYkS6OqJkIwGi1hN62opOK8Risy2GHvEPDdOc%2Ft1yZf4q4nOlIXP5aYabnaI8XO5XoSz4XeL%2FqAvwxCUhFj3mRsJB0cjbwx1LNGUaSfZyeOA1mcdadfPY%2Fg5fp%2BeDXOSc24pEANYx01yfUf1wdWHxdNdaJHlqYFNLDi6BYRIoY%2BMgdIaDm2CJ9r8ynUO4n36fLLpvqxbJDqh4WLy%2FQL%2FhjXV6erhsCz6P9uWCdqy%2BF2QFCAlVrVsS8U3V4Nb4nwrezH72J4P9dWlrxyb49fWUV1QLZ2STUhp7zxLAYOkQ1IT22BIjclu0iPhyf09NRZYeOHBKsIVWo9%2Bfb4ew86P37W8v2UaTTSwEzO2okh%2BwUYhrWE2o9sNa%2BRqYsWexEVxsRzy1TLQ%2BxMJWSGHA6Q3hY%2F2aYOsnRvOYDsKrg70mCozFr9cC4KLJMZCZKR2mA7YdKd9ky0TbIiS%2BrtxSx3dWOYEO18Lswydm%2BxAY6pgGloqoaaALy%2FY3BNTd0bDPCbROO89jYhm5i5qSWb7yNr2l7tzG158TF9201q4rXPtljZ2bNuqlqhIlkV%2FD4UsCZB6QVzamquPCqn9yx5HdPg%2FSss7MXzZewMl752gVpqWZ9oex7zO2DZl3ktKcXFAbYAnP6FiXx6LpQqtOf4CA6gnO05uJHdjcRFUyj1wdovpvEf7ub7sRjv%2FACYHWJQiOSwn6jDevk&X-Amz-Signature=7aa4d9a27b03da4e4dbae7b6955512acff5f05cecc9e3722c8d4d1f2fd4eb90d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5YWGF2P%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIgPWbxBCn7bqUpnxB1PInnCVub7L31c0oEpcEBVWE1AiArC64z9f6rFd2u0bPxsVcraKehfylQ6uTYxEIh8sVtCSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMDSLI7rYjMyn3Jx8uKtwDC2cfVFdVfuJq%2Fs4K%2BaJCz9Kz%2BmtVi%2B3BwvUzE5IgDPutBbsq5Kc1VmP6G7hNyINvoMW%2FcvYz6lQ4oTBKcw9UpPwbIqu3R7L%2FXfc6JKl%2F%2BWxuomzbxQadxuhoroAYigxlZmYDB5ZT%2Br9Xdjaf1c%2FqNBwYeFeG8zRYkS6OqJkIwGi1hN62opOK8Risy2GHvEPDdOc%2Ft1yZf4q4nOlIXP5aYabnaI8XO5XoSz4XeL%2FqAvwxCUhFj3mRsJB0cjbwx1LNGUaSfZyeOA1mcdadfPY%2Fg5fp%2BeDXOSc24pEANYx01yfUf1wdWHxdNdaJHlqYFNLDi6BYRIoY%2BMgdIaDm2CJ9r8ynUO4n36fLLpvqxbJDqh4WLy%2FQL%2FhjXV6erhsCz6P9uWCdqy%2BF2QFCAlVrVsS8U3V4Nb4nwrezH72J4P9dWlrxyb49fWUV1QLZ2STUhp7zxLAYOkQ1IT22BIjclu0iPhyf09NRZYeOHBKsIVWo9%2Bfb4ew86P37W8v2UaTTSwEzO2okh%2BwUYhrWE2o9sNa%2BRqYsWexEVxsRzy1TLQ%2BxMJWSGHA6Q3hY%2F2aYOsnRvOYDsKrg70mCozFr9cC4KLJMZCZKR2mA7YdKd9ky0TbIiS%2BrtxSx3dWOYEO18Lswydm%2BxAY6pgGloqoaaALy%2FY3BNTd0bDPCbROO89jYhm5i5qSWb7yNr2l7tzG158TF9201q4rXPtljZ2bNuqlqhIlkV%2FD4UsCZB6QVzamquPCqn9yx5HdPg%2FSss7MXzZewMl752gVpqWZ9oex7zO2DZl3ktKcXFAbYAnP6FiXx6LpQqtOf4CA6gnO05uJHdjcRFUyj1wdovpvEf7ub7sRjv%2FACYHWJQiOSwn6jDevk&X-Amz-Signature=fea4aa330c2bd51f6f6f35f2355a7952ae40b0432b2a570280ab2cbdb6433c61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5YWGF2P%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIgPWbxBCn7bqUpnxB1PInnCVub7L31c0oEpcEBVWE1AiArC64z9f6rFd2u0bPxsVcraKehfylQ6uTYxEIh8sVtCSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMDSLI7rYjMyn3Jx8uKtwDC2cfVFdVfuJq%2Fs4K%2BaJCz9Kz%2BmtVi%2B3BwvUzE5IgDPutBbsq5Kc1VmP6G7hNyINvoMW%2FcvYz6lQ4oTBKcw9UpPwbIqu3R7L%2FXfc6JKl%2F%2BWxuomzbxQadxuhoroAYigxlZmYDB5ZT%2Br9Xdjaf1c%2FqNBwYeFeG8zRYkS6OqJkIwGi1hN62opOK8Risy2GHvEPDdOc%2Ft1yZf4q4nOlIXP5aYabnaI8XO5XoSz4XeL%2FqAvwxCUhFj3mRsJB0cjbwx1LNGUaSfZyeOA1mcdadfPY%2Fg5fp%2BeDXOSc24pEANYx01yfUf1wdWHxdNdaJHlqYFNLDi6BYRIoY%2BMgdIaDm2CJ9r8ynUO4n36fLLpvqxbJDqh4WLy%2FQL%2FhjXV6erhsCz6P9uWCdqy%2BF2QFCAlVrVsS8U3V4Nb4nwrezH72J4P9dWlrxyb49fWUV1QLZ2STUhp7zxLAYOkQ1IT22BIjclu0iPhyf09NRZYeOHBKsIVWo9%2Bfb4ew86P37W8v2UaTTSwEzO2okh%2BwUYhrWE2o9sNa%2BRqYsWexEVxsRzy1TLQ%2BxMJWSGHA6Q3hY%2F2aYOsnRvOYDsKrg70mCozFr9cC4KLJMZCZKR2mA7YdKd9ky0TbIiS%2BrtxSx3dWOYEO18Lswydm%2BxAY6pgGloqoaaALy%2FY3BNTd0bDPCbROO89jYhm5i5qSWb7yNr2l7tzG158TF9201q4rXPtljZ2bNuqlqhIlkV%2FD4UsCZB6QVzamquPCqn9yx5HdPg%2FSss7MXzZewMl752gVpqWZ9oex7zO2DZl3ktKcXFAbYAnP6FiXx6LpQqtOf4CA6gnO05uJHdjcRFUyj1wdovpvEf7ub7sRjv%2FACYHWJQiOSwn6jDevk&X-Amz-Signature=f45cea78fcc389be16590116e3111d0d700b2e261bbcd6028e62274d1d95c70f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5YWGF2P%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIgPWbxBCn7bqUpnxB1PInnCVub7L31c0oEpcEBVWE1AiArC64z9f6rFd2u0bPxsVcraKehfylQ6uTYxEIh8sVtCSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMDSLI7rYjMyn3Jx8uKtwDC2cfVFdVfuJq%2Fs4K%2BaJCz9Kz%2BmtVi%2B3BwvUzE5IgDPutBbsq5Kc1VmP6G7hNyINvoMW%2FcvYz6lQ4oTBKcw9UpPwbIqu3R7L%2FXfc6JKl%2F%2BWxuomzbxQadxuhoroAYigxlZmYDB5ZT%2Br9Xdjaf1c%2FqNBwYeFeG8zRYkS6OqJkIwGi1hN62opOK8Risy2GHvEPDdOc%2Ft1yZf4q4nOlIXP5aYabnaI8XO5XoSz4XeL%2FqAvwxCUhFj3mRsJB0cjbwx1LNGUaSfZyeOA1mcdadfPY%2Fg5fp%2BeDXOSc24pEANYx01yfUf1wdWHxdNdaJHlqYFNLDi6BYRIoY%2BMgdIaDm2CJ9r8ynUO4n36fLLpvqxbJDqh4WLy%2FQL%2FhjXV6erhsCz6P9uWCdqy%2BF2QFCAlVrVsS8U3V4Nb4nwrezH72J4P9dWlrxyb49fWUV1QLZ2STUhp7zxLAYOkQ1IT22BIjclu0iPhyf09NRZYeOHBKsIVWo9%2Bfb4ew86P37W8v2UaTTSwEzO2okh%2BwUYhrWE2o9sNa%2BRqYsWexEVxsRzy1TLQ%2BxMJWSGHA6Q3hY%2F2aYOsnRvOYDsKrg70mCozFr9cC4KLJMZCZKR2mA7YdKd9ky0TbIiS%2BrtxSx3dWOYEO18Lswydm%2BxAY6pgGloqoaaALy%2FY3BNTd0bDPCbROO89jYhm5i5qSWb7yNr2l7tzG158TF9201q4rXPtljZ2bNuqlqhIlkV%2FD4UsCZB6QVzamquPCqn9yx5HdPg%2FSss7MXzZewMl752gVpqWZ9oex7zO2DZl3ktKcXFAbYAnP6FiXx6LpQqtOf4CA6gnO05uJHdjcRFUyj1wdovpvEf7ub7sRjv%2FACYHWJQiOSwn6jDevk&X-Amz-Signature=2d5b0c726a00914f2dd5a74fd6b89e33289e6798e1d0bbe10ef24ef2c5fe6a82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5YWGF2P%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIgPWbxBCn7bqUpnxB1PInnCVub7L31c0oEpcEBVWE1AiArC64z9f6rFd2u0bPxsVcraKehfylQ6uTYxEIh8sVtCSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMDSLI7rYjMyn3Jx8uKtwDC2cfVFdVfuJq%2Fs4K%2BaJCz9Kz%2BmtVi%2B3BwvUzE5IgDPutBbsq5Kc1VmP6G7hNyINvoMW%2FcvYz6lQ4oTBKcw9UpPwbIqu3R7L%2FXfc6JKl%2F%2BWxuomzbxQadxuhoroAYigxlZmYDB5ZT%2Br9Xdjaf1c%2FqNBwYeFeG8zRYkS6OqJkIwGi1hN62opOK8Risy2GHvEPDdOc%2Ft1yZf4q4nOlIXP5aYabnaI8XO5XoSz4XeL%2FqAvwxCUhFj3mRsJB0cjbwx1LNGUaSfZyeOA1mcdadfPY%2Fg5fp%2BeDXOSc24pEANYx01yfUf1wdWHxdNdaJHlqYFNLDi6BYRIoY%2BMgdIaDm2CJ9r8ynUO4n36fLLpvqxbJDqh4WLy%2FQL%2FhjXV6erhsCz6P9uWCdqy%2BF2QFCAlVrVsS8U3V4Nb4nwrezH72J4P9dWlrxyb49fWUV1QLZ2STUhp7zxLAYOkQ1IT22BIjclu0iPhyf09NRZYeOHBKsIVWo9%2Bfb4ew86P37W8v2UaTTSwEzO2okh%2BwUYhrWE2o9sNa%2BRqYsWexEVxsRzy1TLQ%2BxMJWSGHA6Q3hY%2F2aYOsnRvOYDsKrg70mCozFr9cC4KLJMZCZKR2mA7YdKd9ky0TbIiS%2BrtxSx3dWOYEO18Lswydm%2BxAY6pgGloqoaaALy%2FY3BNTd0bDPCbROO89jYhm5i5qSWb7yNr2l7tzG158TF9201q4rXPtljZ2bNuqlqhIlkV%2FD4UsCZB6QVzamquPCqn9yx5HdPg%2FSss7MXzZewMl752gVpqWZ9oex7zO2DZl3ktKcXFAbYAnP6FiXx6LpQqtOf4CA6gnO05uJHdjcRFUyj1wdovpvEf7ub7sRjv%2FACYHWJQiOSwn6jDevk&X-Amz-Signature=abcea9ba5cfc132b7d777f485b8f3207a0eb1950fde637dbc935ca2c6676ed2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5YWGF2P%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIgPWbxBCn7bqUpnxB1PInnCVub7L31c0oEpcEBVWE1AiArC64z9f6rFd2u0bPxsVcraKehfylQ6uTYxEIh8sVtCSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMDSLI7rYjMyn3Jx8uKtwDC2cfVFdVfuJq%2Fs4K%2BaJCz9Kz%2BmtVi%2B3BwvUzE5IgDPutBbsq5Kc1VmP6G7hNyINvoMW%2FcvYz6lQ4oTBKcw9UpPwbIqu3R7L%2FXfc6JKl%2F%2BWxuomzbxQadxuhoroAYigxlZmYDB5ZT%2Br9Xdjaf1c%2FqNBwYeFeG8zRYkS6OqJkIwGi1hN62opOK8Risy2GHvEPDdOc%2Ft1yZf4q4nOlIXP5aYabnaI8XO5XoSz4XeL%2FqAvwxCUhFj3mRsJB0cjbwx1LNGUaSfZyeOA1mcdadfPY%2Fg5fp%2BeDXOSc24pEANYx01yfUf1wdWHxdNdaJHlqYFNLDi6BYRIoY%2BMgdIaDm2CJ9r8ynUO4n36fLLpvqxbJDqh4WLy%2FQL%2FhjXV6erhsCz6P9uWCdqy%2BF2QFCAlVrVsS8U3V4Nb4nwrezH72J4P9dWlrxyb49fWUV1QLZ2STUhp7zxLAYOkQ1IT22BIjclu0iPhyf09NRZYeOHBKsIVWo9%2Bfb4ew86P37W8v2UaTTSwEzO2okh%2BwUYhrWE2o9sNa%2BRqYsWexEVxsRzy1TLQ%2BxMJWSGHA6Q3hY%2F2aYOsnRvOYDsKrg70mCozFr9cC4KLJMZCZKR2mA7YdKd9ky0TbIiS%2BrtxSx3dWOYEO18Lswydm%2BxAY6pgGloqoaaALy%2FY3BNTd0bDPCbROO89jYhm5i5qSWb7yNr2l7tzG158TF9201q4rXPtljZ2bNuqlqhIlkV%2FD4UsCZB6QVzamquPCqn9yx5HdPg%2FSss7MXzZewMl752gVpqWZ9oex7zO2DZl3ktKcXFAbYAnP6FiXx6LpQqtOf4CA6gnO05uJHdjcRFUyj1wdovpvEf7ub7sRjv%2FACYHWJQiOSwn6jDevk&X-Amz-Signature=aa4eb646c92648bbb1077520b8e5605b2fa4417a95fa8b1dc2ff9d2a26fbe52f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5YWGF2P%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T201035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIgPWbxBCn7bqUpnxB1PInnCVub7L31c0oEpcEBVWE1AiArC64z9f6rFd2u0bPxsVcraKehfylQ6uTYxEIh8sVtCSr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMDSLI7rYjMyn3Jx8uKtwDC2cfVFdVfuJq%2Fs4K%2BaJCz9Kz%2BmtVi%2B3BwvUzE5IgDPutBbsq5Kc1VmP6G7hNyINvoMW%2FcvYz6lQ4oTBKcw9UpPwbIqu3R7L%2FXfc6JKl%2F%2BWxuomzbxQadxuhoroAYigxlZmYDB5ZT%2Br9Xdjaf1c%2FqNBwYeFeG8zRYkS6OqJkIwGi1hN62opOK8Risy2GHvEPDdOc%2Ft1yZf4q4nOlIXP5aYabnaI8XO5XoSz4XeL%2FqAvwxCUhFj3mRsJB0cjbwx1LNGUaSfZyeOA1mcdadfPY%2Fg5fp%2BeDXOSc24pEANYx01yfUf1wdWHxdNdaJHlqYFNLDi6BYRIoY%2BMgdIaDm2CJ9r8ynUO4n36fLLpvqxbJDqh4WLy%2FQL%2FhjXV6erhsCz6P9uWCdqy%2BF2QFCAlVrVsS8U3V4Nb4nwrezH72J4P9dWlrxyb49fWUV1QLZ2STUhp7zxLAYOkQ1IT22BIjclu0iPhyf09NRZYeOHBKsIVWo9%2Bfb4ew86P37W8v2UaTTSwEzO2okh%2BwUYhrWE2o9sNa%2BRqYsWexEVxsRzy1TLQ%2BxMJWSGHA6Q3hY%2F2aYOsnRvOYDsKrg70mCozFr9cC4KLJMZCZKR2mA7YdKd9ky0TbIiS%2BrtxSx3dWOYEO18Lswydm%2BxAY6pgGloqoaaALy%2FY3BNTd0bDPCbROO89jYhm5i5qSWb7yNr2l7tzG158TF9201q4rXPtljZ2bNuqlqhIlkV%2FD4UsCZB6QVzamquPCqn9yx5HdPg%2FSss7MXzZewMl752gVpqWZ9oex7zO2DZl3ktKcXFAbYAnP6FiXx6LpQqtOf4CA6gnO05uJHdjcRFUyj1wdovpvEf7ub7sRjv%2FACYHWJQiOSwn6jDevk&X-Amz-Signature=c134e79e0169d722b3543a235556298d6e8226a59cc94c82bdbfaf9cd8954225&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
