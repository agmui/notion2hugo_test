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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6PV2GJZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4eq%2BI3UkdgaHyXQz3ByEYtzE03reaDFwte3LLqV%2BP9QIhAKdQj8T9NXU58jlqMloVZbxc7xcrZ2euB8CwfL6858GsKv8DCB4QABoMNjM3NDIzMTgzODA1IgwNKTg0SZVHRUE86tMq3ANK5bthNhUhusxhudxvfONL2qJHfhDDbnB3nPJyKxov8DbwzfibFjDulhZAr8tDp89nnBHO1V1U9O46UMoF1hkB%2FkNGQL2dhTi7Ch11SYSlyhODbZBYKjpsLYz1mpPp6JpYrNDcnBLCpk41gMteGTGW90XLeLhc4mH8e7KSiaehEXK%2FxSrcQzFBZeQcWqUHhQ8s%2B%2FowgPTHUQx0%2FzBNfKtWqRxtk9CYbsFohA9Gp9Q7YMsCs%2Fur0%2BWZP%2F3Auz80TNxVtGd%2FUk46rCysuT7xPi%2BivO3vuC%2Fk1i5ABVIqXSiyKJHYt5MKSU70v6ZBOtT%2BqfM0W%2FBl0nuJOhT3bUS6Zxl1vBsjq%2FhygMzplI%2FUProhUJKtsbIGjt7%2FJUA8YG1KLQ3g%2FdI%2BuL24oU71ign2SS0ZmBX%2ByRTHDSt7XANvt5YFseU1rJROKVZzvrXJc2R%2FSSlw1GaZDiFk9XgdEGBVjFkmL8F1a703XZ%2F7%2FG5dMHK3Wxp7kXruO%2F%2BBeLYVaSVh0BFC8Lyy32FA2aOKX7t0LeSU%2FFoDHspV5MdENgD3QdUqdJyIJf10WDwlgFCiwOffAqBI6gmEIg1IlcdJKsSnqAh8Ik9FNiVouYOfAc8Wb4eStij8%2FAbkGH0bGwmYPjCggLrEBjqkAWp09QKBvaCZyj%2FG5ZNBG6zX3%2BcJJwVRLAmF9m92sYy18ZmjS3h140pOW9XyT1RyBpvQdiyKfGgH0%2BZYb7AKJncNw9UcQWRbQ7%2Fi%2F2nx%2FWqTkKIy8%2BwJUNc%2Fr9UFLrGUt5PCJoJ0vlIswk0%2FsURMrB3Z8vTr60gjg0PrTCVG6%2F91Rr%2BkhknFjESPzyAurc%2BkKHp7MUwTQ4qqZiQ%2FApuoaPJ6HGr%2B&X-Amz-Signature=a13210d9bf3133c0434a8973f6e6e8493fcd703a76aad837707fb3212a69526d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6PV2GJZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4eq%2BI3UkdgaHyXQz3ByEYtzE03reaDFwte3LLqV%2BP9QIhAKdQj8T9NXU58jlqMloVZbxc7xcrZ2euB8CwfL6858GsKv8DCB4QABoMNjM3NDIzMTgzODA1IgwNKTg0SZVHRUE86tMq3ANK5bthNhUhusxhudxvfONL2qJHfhDDbnB3nPJyKxov8DbwzfibFjDulhZAr8tDp89nnBHO1V1U9O46UMoF1hkB%2FkNGQL2dhTi7Ch11SYSlyhODbZBYKjpsLYz1mpPp6JpYrNDcnBLCpk41gMteGTGW90XLeLhc4mH8e7KSiaehEXK%2FxSrcQzFBZeQcWqUHhQ8s%2B%2FowgPTHUQx0%2FzBNfKtWqRxtk9CYbsFohA9Gp9Q7YMsCs%2Fur0%2BWZP%2F3Auz80TNxVtGd%2FUk46rCysuT7xPi%2BivO3vuC%2Fk1i5ABVIqXSiyKJHYt5MKSU70v6ZBOtT%2BqfM0W%2FBl0nuJOhT3bUS6Zxl1vBsjq%2FhygMzplI%2FUProhUJKtsbIGjt7%2FJUA8YG1KLQ3g%2FdI%2BuL24oU71ign2SS0ZmBX%2ByRTHDSt7XANvt5YFseU1rJROKVZzvrXJc2R%2FSSlw1GaZDiFk9XgdEGBVjFkmL8F1a703XZ%2F7%2FG5dMHK3Wxp7kXruO%2F%2BBeLYVaSVh0BFC8Lyy32FA2aOKX7t0LeSU%2FFoDHspV5MdENgD3QdUqdJyIJf10WDwlgFCiwOffAqBI6gmEIg1IlcdJKsSnqAh8Ik9FNiVouYOfAc8Wb4eStij8%2FAbkGH0bGwmYPjCggLrEBjqkAWp09QKBvaCZyj%2FG5ZNBG6zX3%2BcJJwVRLAmF9m92sYy18ZmjS3h140pOW9XyT1RyBpvQdiyKfGgH0%2BZYb7AKJncNw9UcQWRbQ7%2Fi%2F2nx%2FWqTkKIy8%2BwJUNc%2Fr9UFLrGUt5PCJoJ0vlIswk0%2FsURMrB3Z8vTr60gjg0PrTCVG6%2F91Rr%2BkhknFjESPzyAurc%2BkKHp7MUwTQ4qqZiQ%2FApuoaPJ6HGr%2B&X-Amz-Signature=78bfb945021d851fc28f3f9d28b9928ecf9d47b4bccffd44bf8ac1743d28225e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6PV2GJZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4eq%2BI3UkdgaHyXQz3ByEYtzE03reaDFwte3LLqV%2BP9QIhAKdQj8T9NXU58jlqMloVZbxc7xcrZ2euB8CwfL6858GsKv8DCB4QABoMNjM3NDIzMTgzODA1IgwNKTg0SZVHRUE86tMq3ANK5bthNhUhusxhudxvfONL2qJHfhDDbnB3nPJyKxov8DbwzfibFjDulhZAr8tDp89nnBHO1V1U9O46UMoF1hkB%2FkNGQL2dhTi7Ch11SYSlyhODbZBYKjpsLYz1mpPp6JpYrNDcnBLCpk41gMteGTGW90XLeLhc4mH8e7KSiaehEXK%2FxSrcQzFBZeQcWqUHhQ8s%2B%2FowgPTHUQx0%2FzBNfKtWqRxtk9CYbsFohA9Gp9Q7YMsCs%2Fur0%2BWZP%2F3Auz80TNxVtGd%2FUk46rCysuT7xPi%2BivO3vuC%2Fk1i5ABVIqXSiyKJHYt5MKSU70v6ZBOtT%2BqfM0W%2FBl0nuJOhT3bUS6Zxl1vBsjq%2FhygMzplI%2FUProhUJKtsbIGjt7%2FJUA8YG1KLQ3g%2FdI%2BuL24oU71ign2SS0ZmBX%2ByRTHDSt7XANvt5YFseU1rJROKVZzvrXJc2R%2FSSlw1GaZDiFk9XgdEGBVjFkmL8F1a703XZ%2F7%2FG5dMHK3Wxp7kXruO%2F%2BBeLYVaSVh0BFC8Lyy32FA2aOKX7t0LeSU%2FFoDHspV5MdENgD3QdUqdJyIJf10WDwlgFCiwOffAqBI6gmEIg1IlcdJKsSnqAh8Ik9FNiVouYOfAc8Wb4eStij8%2FAbkGH0bGwmYPjCggLrEBjqkAWp09QKBvaCZyj%2FG5ZNBG6zX3%2BcJJwVRLAmF9m92sYy18ZmjS3h140pOW9XyT1RyBpvQdiyKfGgH0%2BZYb7AKJncNw9UcQWRbQ7%2Fi%2F2nx%2FWqTkKIy8%2BwJUNc%2Fr9UFLrGUt5PCJoJ0vlIswk0%2FsURMrB3Z8vTr60gjg0PrTCVG6%2F91Rr%2BkhknFjESPzyAurc%2BkKHp7MUwTQ4qqZiQ%2FApuoaPJ6HGr%2B&X-Amz-Signature=026f1da93aedf6e12cff1872c4616432c44c0a45972bf205dd23e2787b63d22b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6PV2GJZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4eq%2BI3UkdgaHyXQz3ByEYtzE03reaDFwte3LLqV%2BP9QIhAKdQj8T9NXU58jlqMloVZbxc7xcrZ2euB8CwfL6858GsKv8DCB4QABoMNjM3NDIzMTgzODA1IgwNKTg0SZVHRUE86tMq3ANK5bthNhUhusxhudxvfONL2qJHfhDDbnB3nPJyKxov8DbwzfibFjDulhZAr8tDp89nnBHO1V1U9O46UMoF1hkB%2FkNGQL2dhTi7Ch11SYSlyhODbZBYKjpsLYz1mpPp6JpYrNDcnBLCpk41gMteGTGW90XLeLhc4mH8e7KSiaehEXK%2FxSrcQzFBZeQcWqUHhQ8s%2B%2FowgPTHUQx0%2FzBNfKtWqRxtk9CYbsFohA9Gp9Q7YMsCs%2Fur0%2BWZP%2F3Auz80TNxVtGd%2FUk46rCysuT7xPi%2BivO3vuC%2Fk1i5ABVIqXSiyKJHYt5MKSU70v6ZBOtT%2BqfM0W%2FBl0nuJOhT3bUS6Zxl1vBsjq%2FhygMzplI%2FUProhUJKtsbIGjt7%2FJUA8YG1KLQ3g%2FdI%2BuL24oU71ign2SS0ZmBX%2ByRTHDSt7XANvt5YFseU1rJROKVZzvrXJc2R%2FSSlw1GaZDiFk9XgdEGBVjFkmL8F1a703XZ%2F7%2FG5dMHK3Wxp7kXruO%2F%2BBeLYVaSVh0BFC8Lyy32FA2aOKX7t0LeSU%2FFoDHspV5MdENgD3QdUqdJyIJf10WDwlgFCiwOffAqBI6gmEIg1IlcdJKsSnqAh8Ik9FNiVouYOfAc8Wb4eStij8%2FAbkGH0bGwmYPjCggLrEBjqkAWp09QKBvaCZyj%2FG5ZNBG6zX3%2BcJJwVRLAmF9m92sYy18ZmjS3h140pOW9XyT1RyBpvQdiyKfGgH0%2BZYb7AKJncNw9UcQWRbQ7%2Fi%2F2nx%2FWqTkKIy8%2BwJUNc%2Fr9UFLrGUt5PCJoJ0vlIswk0%2FsURMrB3Z8vTr60gjg0PrTCVG6%2F91Rr%2BkhknFjESPzyAurc%2BkKHp7MUwTQ4qqZiQ%2FApuoaPJ6HGr%2B&X-Amz-Signature=ac473e525fe41031f40fac1e418bcb92bca117c59bfe9fe20a3f44285185f5cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6PV2GJZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4eq%2BI3UkdgaHyXQz3ByEYtzE03reaDFwte3LLqV%2BP9QIhAKdQj8T9NXU58jlqMloVZbxc7xcrZ2euB8CwfL6858GsKv8DCB4QABoMNjM3NDIzMTgzODA1IgwNKTg0SZVHRUE86tMq3ANK5bthNhUhusxhudxvfONL2qJHfhDDbnB3nPJyKxov8DbwzfibFjDulhZAr8tDp89nnBHO1V1U9O46UMoF1hkB%2FkNGQL2dhTi7Ch11SYSlyhODbZBYKjpsLYz1mpPp6JpYrNDcnBLCpk41gMteGTGW90XLeLhc4mH8e7KSiaehEXK%2FxSrcQzFBZeQcWqUHhQ8s%2B%2FowgPTHUQx0%2FzBNfKtWqRxtk9CYbsFohA9Gp9Q7YMsCs%2Fur0%2BWZP%2F3Auz80TNxVtGd%2FUk46rCysuT7xPi%2BivO3vuC%2Fk1i5ABVIqXSiyKJHYt5MKSU70v6ZBOtT%2BqfM0W%2FBl0nuJOhT3bUS6Zxl1vBsjq%2FhygMzplI%2FUProhUJKtsbIGjt7%2FJUA8YG1KLQ3g%2FdI%2BuL24oU71ign2SS0ZmBX%2ByRTHDSt7XANvt5YFseU1rJROKVZzvrXJc2R%2FSSlw1GaZDiFk9XgdEGBVjFkmL8F1a703XZ%2F7%2FG5dMHK3Wxp7kXruO%2F%2BBeLYVaSVh0BFC8Lyy32FA2aOKX7t0LeSU%2FFoDHspV5MdENgD3QdUqdJyIJf10WDwlgFCiwOffAqBI6gmEIg1IlcdJKsSnqAh8Ik9FNiVouYOfAc8Wb4eStij8%2FAbkGH0bGwmYPjCggLrEBjqkAWp09QKBvaCZyj%2FG5ZNBG6zX3%2BcJJwVRLAmF9m92sYy18ZmjS3h140pOW9XyT1RyBpvQdiyKfGgH0%2BZYb7AKJncNw9UcQWRbQ7%2Fi%2F2nx%2FWqTkKIy8%2BwJUNc%2Fr9UFLrGUt5PCJoJ0vlIswk0%2FsURMrB3Z8vTr60gjg0PrTCVG6%2F91Rr%2BkhknFjESPzyAurc%2BkKHp7MUwTQ4qqZiQ%2FApuoaPJ6HGr%2B&X-Amz-Signature=cbc62b2c5bb0d6bc5b3fa6fc0bf26bdd4af34402255e101ba25098eece5f2bb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6PV2GJZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4eq%2BI3UkdgaHyXQz3ByEYtzE03reaDFwte3LLqV%2BP9QIhAKdQj8T9NXU58jlqMloVZbxc7xcrZ2euB8CwfL6858GsKv8DCB4QABoMNjM3NDIzMTgzODA1IgwNKTg0SZVHRUE86tMq3ANK5bthNhUhusxhudxvfONL2qJHfhDDbnB3nPJyKxov8DbwzfibFjDulhZAr8tDp89nnBHO1V1U9O46UMoF1hkB%2FkNGQL2dhTi7Ch11SYSlyhODbZBYKjpsLYz1mpPp6JpYrNDcnBLCpk41gMteGTGW90XLeLhc4mH8e7KSiaehEXK%2FxSrcQzFBZeQcWqUHhQ8s%2B%2FowgPTHUQx0%2FzBNfKtWqRxtk9CYbsFohA9Gp9Q7YMsCs%2Fur0%2BWZP%2F3Auz80TNxVtGd%2FUk46rCysuT7xPi%2BivO3vuC%2Fk1i5ABVIqXSiyKJHYt5MKSU70v6ZBOtT%2BqfM0W%2FBl0nuJOhT3bUS6Zxl1vBsjq%2FhygMzplI%2FUProhUJKtsbIGjt7%2FJUA8YG1KLQ3g%2FdI%2BuL24oU71ign2SS0ZmBX%2ByRTHDSt7XANvt5YFseU1rJROKVZzvrXJc2R%2FSSlw1GaZDiFk9XgdEGBVjFkmL8F1a703XZ%2F7%2FG5dMHK3Wxp7kXruO%2F%2BBeLYVaSVh0BFC8Lyy32FA2aOKX7t0LeSU%2FFoDHspV5MdENgD3QdUqdJyIJf10WDwlgFCiwOffAqBI6gmEIg1IlcdJKsSnqAh8Ik9FNiVouYOfAc8Wb4eStij8%2FAbkGH0bGwmYPjCggLrEBjqkAWp09QKBvaCZyj%2FG5ZNBG6zX3%2BcJJwVRLAmF9m92sYy18ZmjS3h140pOW9XyT1RyBpvQdiyKfGgH0%2BZYb7AKJncNw9UcQWRbQ7%2Fi%2F2nx%2FWqTkKIy8%2BwJUNc%2Fr9UFLrGUt5PCJoJ0vlIswk0%2FsURMrB3Z8vTr60gjg0PrTCVG6%2F91Rr%2BkhknFjESPzyAurc%2BkKHp7MUwTQ4qqZiQ%2FApuoaPJ6HGr%2B&X-Amz-Signature=41eb546da627353b1c3236ac16eb4d30b50f1cc450bf2eb6d714635c33be95a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6PV2GJZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4eq%2BI3UkdgaHyXQz3ByEYtzE03reaDFwte3LLqV%2BP9QIhAKdQj8T9NXU58jlqMloVZbxc7xcrZ2euB8CwfL6858GsKv8DCB4QABoMNjM3NDIzMTgzODA1IgwNKTg0SZVHRUE86tMq3ANK5bthNhUhusxhudxvfONL2qJHfhDDbnB3nPJyKxov8DbwzfibFjDulhZAr8tDp89nnBHO1V1U9O46UMoF1hkB%2FkNGQL2dhTi7Ch11SYSlyhODbZBYKjpsLYz1mpPp6JpYrNDcnBLCpk41gMteGTGW90XLeLhc4mH8e7KSiaehEXK%2FxSrcQzFBZeQcWqUHhQ8s%2B%2FowgPTHUQx0%2FzBNfKtWqRxtk9CYbsFohA9Gp9Q7YMsCs%2Fur0%2BWZP%2F3Auz80TNxVtGd%2FUk46rCysuT7xPi%2BivO3vuC%2Fk1i5ABVIqXSiyKJHYt5MKSU70v6ZBOtT%2BqfM0W%2FBl0nuJOhT3bUS6Zxl1vBsjq%2FhygMzplI%2FUProhUJKtsbIGjt7%2FJUA8YG1KLQ3g%2FdI%2BuL24oU71ign2SS0ZmBX%2ByRTHDSt7XANvt5YFseU1rJROKVZzvrXJc2R%2FSSlw1GaZDiFk9XgdEGBVjFkmL8F1a703XZ%2F7%2FG5dMHK3Wxp7kXruO%2F%2BBeLYVaSVh0BFC8Lyy32FA2aOKX7t0LeSU%2FFoDHspV5MdENgD3QdUqdJyIJf10WDwlgFCiwOffAqBI6gmEIg1IlcdJKsSnqAh8Ik9FNiVouYOfAc8Wb4eStij8%2FAbkGH0bGwmYPjCggLrEBjqkAWp09QKBvaCZyj%2FG5ZNBG6zX3%2BcJJwVRLAmF9m92sYy18ZmjS3h140pOW9XyT1RyBpvQdiyKfGgH0%2BZYb7AKJncNw9UcQWRbQ7%2Fi%2F2nx%2FWqTkKIy8%2BwJUNc%2Fr9UFLrGUt5PCJoJ0vlIswk0%2FsURMrB3Z8vTr60gjg0PrTCVG6%2F91Rr%2BkhknFjESPzyAurc%2BkKHp7MUwTQ4qqZiQ%2FApuoaPJ6HGr%2B&X-Amz-Signature=66321e89b82cf3829a752eb601b8d776ad8cd7545944eea8d99f07133302e507&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6PV2GJZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4eq%2BI3UkdgaHyXQz3ByEYtzE03reaDFwte3LLqV%2BP9QIhAKdQj8T9NXU58jlqMloVZbxc7xcrZ2euB8CwfL6858GsKv8DCB4QABoMNjM3NDIzMTgzODA1IgwNKTg0SZVHRUE86tMq3ANK5bthNhUhusxhudxvfONL2qJHfhDDbnB3nPJyKxov8DbwzfibFjDulhZAr8tDp89nnBHO1V1U9O46UMoF1hkB%2FkNGQL2dhTi7Ch11SYSlyhODbZBYKjpsLYz1mpPp6JpYrNDcnBLCpk41gMteGTGW90XLeLhc4mH8e7KSiaehEXK%2FxSrcQzFBZeQcWqUHhQ8s%2B%2FowgPTHUQx0%2FzBNfKtWqRxtk9CYbsFohA9Gp9Q7YMsCs%2Fur0%2BWZP%2F3Auz80TNxVtGd%2FUk46rCysuT7xPi%2BivO3vuC%2Fk1i5ABVIqXSiyKJHYt5MKSU70v6ZBOtT%2BqfM0W%2FBl0nuJOhT3bUS6Zxl1vBsjq%2FhygMzplI%2FUProhUJKtsbIGjt7%2FJUA8YG1KLQ3g%2FdI%2BuL24oU71ign2SS0ZmBX%2ByRTHDSt7XANvt5YFseU1rJROKVZzvrXJc2R%2FSSlw1GaZDiFk9XgdEGBVjFkmL8F1a703XZ%2F7%2FG5dMHK3Wxp7kXruO%2F%2BBeLYVaSVh0BFC8Lyy32FA2aOKX7t0LeSU%2FFoDHspV5MdENgD3QdUqdJyIJf10WDwlgFCiwOffAqBI6gmEIg1IlcdJKsSnqAh8Ik9FNiVouYOfAc8Wb4eStij8%2FAbkGH0bGwmYPjCggLrEBjqkAWp09QKBvaCZyj%2FG5ZNBG6zX3%2BcJJwVRLAmF9m92sYy18ZmjS3h140pOW9XyT1RyBpvQdiyKfGgH0%2BZYb7AKJncNw9UcQWRbQ7%2Fi%2F2nx%2FWqTkKIy8%2BwJUNc%2Fr9UFLrGUt5PCJoJ0vlIswk0%2FsURMrB3Z8vTr60gjg0PrTCVG6%2F91Rr%2BkhknFjESPzyAurc%2BkKHp7MUwTQ4qqZiQ%2FApuoaPJ6HGr%2B&X-Amz-Signature=9bab13099ee0addf9e8c5b2c1ad930288f89962b05a2c9202a666a6b4e03b0e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6PV2GJZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4eq%2BI3UkdgaHyXQz3ByEYtzE03reaDFwte3LLqV%2BP9QIhAKdQj8T9NXU58jlqMloVZbxc7xcrZ2euB8CwfL6858GsKv8DCB4QABoMNjM3NDIzMTgzODA1IgwNKTg0SZVHRUE86tMq3ANK5bthNhUhusxhudxvfONL2qJHfhDDbnB3nPJyKxov8DbwzfibFjDulhZAr8tDp89nnBHO1V1U9O46UMoF1hkB%2FkNGQL2dhTi7Ch11SYSlyhODbZBYKjpsLYz1mpPp6JpYrNDcnBLCpk41gMteGTGW90XLeLhc4mH8e7KSiaehEXK%2FxSrcQzFBZeQcWqUHhQ8s%2B%2FowgPTHUQx0%2FzBNfKtWqRxtk9CYbsFohA9Gp9Q7YMsCs%2Fur0%2BWZP%2F3Auz80TNxVtGd%2FUk46rCysuT7xPi%2BivO3vuC%2Fk1i5ABVIqXSiyKJHYt5MKSU70v6ZBOtT%2BqfM0W%2FBl0nuJOhT3bUS6Zxl1vBsjq%2FhygMzplI%2FUProhUJKtsbIGjt7%2FJUA8YG1KLQ3g%2FdI%2BuL24oU71ign2SS0ZmBX%2ByRTHDSt7XANvt5YFseU1rJROKVZzvrXJc2R%2FSSlw1GaZDiFk9XgdEGBVjFkmL8F1a703XZ%2F7%2FG5dMHK3Wxp7kXruO%2F%2BBeLYVaSVh0BFC8Lyy32FA2aOKX7t0LeSU%2FFoDHspV5MdENgD3QdUqdJyIJf10WDwlgFCiwOffAqBI6gmEIg1IlcdJKsSnqAh8Ik9FNiVouYOfAc8Wb4eStij8%2FAbkGH0bGwmYPjCggLrEBjqkAWp09QKBvaCZyj%2FG5ZNBG6zX3%2BcJJwVRLAmF9m92sYy18ZmjS3h140pOW9XyT1RyBpvQdiyKfGgH0%2BZYb7AKJncNw9UcQWRbQ7%2Fi%2F2nx%2FWqTkKIy8%2BwJUNc%2Fr9UFLrGUt5PCJoJ0vlIswk0%2FsURMrB3Z8vTr60gjg0PrTCVG6%2F91Rr%2BkhknFjESPzyAurc%2BkKHp7MUwTQ4qqZiQ%2FApuoaPJ6HGr%2B&X-Amz-Signature=dbc86ba5eca41a189529ea9e1c97c5f045f47bac5791215c8368af257be69857&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6PV2GJZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4eq%2BI3UkdgaHyXQz3ByEYtzE03reaDFwte3LLqV%2BP9QIhAKdQj8T9NXU58jlqMloVZbxc7xcrZ2euB8CwfL6858GsKv8DCB4QABoMNjM3NDIzMTgzODA1IgwNKTg0SZVHRUE86tMq3ANK5bthNhUhusxhudxvfONL2qJHfhDDbnB3nPJyKxov8DbwzfibFjDulhZAr8tDp89nnBHO1V1U9O46UMoF1hkB%2FkNGQL2dhTi7Ch11SYSlyhODbZBYKjpsLYz1mpPp6JpYrNDcnBLCpk41gMteGTGW90XLeLhc4mH8e7KSiaehEXK%2FxSrcQzFBZeQcWqUHhQ8s%2B%2FowgPTHUQx0%2FzBNfKtWqRxtk9CYbsFohA9Gp9Q7YMsCs%2Fur0%2BWZP%2F3Auz80TNxVtGd%2FUk46rCysuT7xPi%2BivO3vuC%2Fk1i5ABVIqXSiyKJHYt5MKSU70v6ZBOtT%2BqfM0W%2FBl0nuJOhT3bUS6Zxl1vBsjq%2FhygMzplI%2FUProhUJKtsbIGjt7%2FJUA8YG1KLQ3g%2FdI%2BuL24oU71ign2SS0ZmBX%2ByRTHDSt7XANvt5YFseU1rJROKVZzvrXJc2R%2FSSlw1GaZDiFk9XgdEGBVjFkmL8F1a703XZ%2F7%2FG5dMHK3Wxp7kXruO%2F%2BBeLYVaSVh0BFC8Lyy32FA2aOKX7t0LeSU%2FFoDHspV5MdENgD3QdUqdJyIJf10WDwlgFCiwOffAqBI6gmEIg1IlcdJKsSnqAh8Ik9FNiVouYOfAc8Wb4eStij8%2FAbkGH0bGwmYPjCggLrEBjqkAWp09QKBvaCZyj%2FG5ZNBG6zX3%2BcJJwVRLAmF9m92sYy18ZmjS3h140pOW9XyT1RyBpvQdiyKfGgH0%2BZYb7AKJncNw9UcQWRbQ7%2Fi%2F2nx%2FWqTkKIy8%2BwJUNc%2Fr9UFLrGUt5PCJoJ0vlIswk0%2FsURMrB3Z8vTr60gjg0PrTCVG6%2F91Rr%2BkhknFjESPzyAurc%2BkKHp7MUwTQ4qqZiQ%2FApuoaPJ6HGr%2B&X-Amz-Signature=93fcc9089b00fb20b74331c71ea8ea28004165c34ecb50867ed706e46ebb214b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6PV2GJZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4eq%2BI3UkdgaHyXQz3ByEYtzE03reaDFwte3LLqV%2BP9QIhAKdQj8T9NXU58jlqMloVZbxc7xcrZ2euB8CwfL6858GsKv8DCB4QABoMNjM3NDIzMTgzODA1IgwNKTg0SZVHRUE86tMq3ANK5bthNhUhusxhudxvfONL2qJHfhDDbnB3nPJyKxov8DbwzfibFjDulhZAr8tDp89nnBHO1V1U9O46UMoF1hkB%2FkNGQL2dhTi7Ch11SYSlyhODbZBYKjpsLYz1mpPp6JpYrNDcnBLCpk41gMteGTGW90XLeLhc4mH8e7KSiaehEXK%2FxSrcQzFBZeQcWqUHhQ8s%2B%2FowgPTHUQx0%2FzBNfKtWqRxtk9CYbsFohA9Gp9Q7YMsCs%2Fur0%2BWZP%2F3Auz80TNxVtGd%2FUk46rCysuT7xPi%2BivO3vuC%2Fk1i5ABVIqXSiyKJHYt5MKSU70v6ZBOtT%2BqfM0W%2FBl0nuJOhT3bUS6Zxl1vBsjq%2FhygMzplI%2FUProhUJKtsbIGjt7%2FJUA8YG1KLQ3g%2FdI%2BuL24oU71ign2SS0ZmBX%2ByRTHDSt7XANvt5YFseU1rJROKVZzvrXJc2R%2FSSlw1GaZDiFk9XgdEGBVjFkmL8F1a703XZ%2F7%2FG5dMHK3Wxp7kXruO%2F%2BBeLYVaSVh0BFC8Lyy32FA2aOKX7t0LeSU%2FFoDHspV5MdENgD3QdUqdJyIJf10WDwlgFCiwOffAqBI6gmEIg1IlcdJKsSnqAh8Ik9FNiVouYOfAc8Wb4eStij8%2FAbkGH0bGwmYPjCggLrEBjqkAWp09QKBvaCZyj%2FG5ZNBG6zX3%2BcJJwVRLAmF9m92sYy18ZmjS3h140pOW9XyT1RyBpvQdiyKfGgH0%2BZYb7AKJncNw9UcQWRbQ7%2Fi%2F2nx%2FWqTkKIy8%2BwJUNc%2Fr9UFLrGUt5PCJoJ0vlIswk0%2FsURMrB3Z8vTr60gjg0PrTCVG6%2F91Rr%2BkhknFjESPzyAurc%2BkKHp7MUwTQ4qqZiQ%2FApuoaPJ6HGr%2B&X-Amz-Signature=b6121f50dee8224fc784fb58573a2ca6630e2ee7aaab1e0cbe48fb5154f74e6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6PV2GJZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4eq%2BI3UkdgaHyXQz3ByEYtzE03reaDFwte3LLqV%2BP9QIhAKdQj8T9NXU58jlqMloVZbxc7xcrZ2euB8CwfL6858GsKv8DCB4QABoMNjM3NDIzMTgzODA1IgwNKTg0SZVHRUE86tMq3ANK5bthNhUhusxhudxvfONL2qJHfhDDbnB3nPJyKxov8DbwzfibFjDulhZAr8tDp89nnBHO1V1U9O46UMoF1hkB%2FkNGQL2dhTi7Ch11SYSlyhODbZBYKjpsLYz1mpPp6JpYrNDcnBLCpk41gMteGTGW90XLeLhc4mH8e7KSiaehEXK%2FxSrcQzFBZeQcWqUHhQ8s%2B%2FowgPTHUQx0%2FzBNfKtWqRxtk9CYbsFohA9Gp9Q7YMsCs%2Fur0%2BWZP%2F3Auz80TNxVtGd%2FUk46rCysuT7xPi%2BivO3vuC%2Fk1i5ABVIqXSiyKJHYt5MKSU70v6ZBOtT%2BqfM0W%2FBl0nuJOhT3bUS6Zxl1vBsjq%2FhygMzplI%2FUProhUJKtsbIGjt7%2FJUA8YG1KLQ3g%2FdI%2BuL24oU71ign2SS0ZmBX%2ByRTHDSt7XANvt5YFseU1rJROKVZzvrXJc2R%2FSSlw1GaZDiFk9XgdEGBVjFkmL8F1a703XZ%2F7%2FG5dMHK3Wxp7kXruO%2F%2BBeLYVaSVh0BFC8Lyy32FA2aOKX7t0LeSU%2FFoDHspV5MdENgD3QdUqdJyIJf10WDwlgFCiwOffAqBI6gmEIg1IlcdJKsSnqAh8Ik9FNiVouYOfAc8Wb4eStij8%2FAbkGH0bGwmYPjCggLrEBjqkAWp09QKBvaCZyj%2FG5ZNBG6zX3%2BcJJwVRLAmF9m92sYy18ZmjS3h140pOW9XyT1RyBpvQdiyKfGgH0%2BZYb7AKJncNw9UcQWRbQ7%2Fi%2F2nx%2FWqTkKIy8%2BwJUNc%2Fr9UFLrGUt5PCJoJ0vlIswk0%2FsURMrB3Z8vTr60gjg0PrTCVG6%2F91Rr%2BkhknFjESPzyAurc%2BkKHp7MUwTQ4qqZiQ%2FApuoaPJ6HGr%2B&X-Amz-Signature=204a9e53ab8204639e92f3d366333611c9a0654acb07094b94d316ff45e0185f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6PV2GJZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4eq%2BI3UkdgaHyXQz3ByEYtzE03reaDFwte3LLqV%2BP9QIhAKdQj8T9NXU58jlqMloVZbxc7xcrZ2euB8CwfL6858GsKv8DCB4QABoMNjM3NDIzMTgzODA1IgwNKTg0SZVHRUE86tMq3ANK5bthNhUhusxhudxvfONL2qJHfhDDbnB3nPJyKxov8DbwzfibFjDulhZAr8tDp89nnBHO1V1U9O46UMoF1hkB%2FkNGQL2dhTi7Ch11SYSlyhODbZBYKjpsLYz1mpPp6JpYrNDcnBLCpk41gMteGTGW90XLeLhc4mH8e7KSiaehEXK%2FxSrcQzFBZeQcWqUHhQ8s%2B%2FowgPTHUQx0%2FzBNfKtWqRxtk9CYbsFohA9Gp9Q7YMsCs%2Fur0%2BWZP%2F3Auz80TNxVtGd%2FUk46rCysuT7xPi%2BivO3vuC%2Fk1i5ABVIqXSiyKJHYt5MKSU70v6ZBOtT%2BqfM0W%2FBl0nuJOhT3bUS6Zxl1vBsjq%2FhygMzplI%2FUProhUJKtsbIGjt7%2FJUA8YG1KLQ3g%2FdI%2BuL24oU71ign2SS0ZmBX%2ByRTHDSt7XANvt5YFseU1rJROKVZzvrXJc2R%2FSSlw1GaZDiFk9XgdEGBVjFkmL8F1a703XZ%2F7%2FG5dMHK3Wxp7kXruO%2F%2BBeLYVaSVh0BFC8Lyy32FA2aOKX7t0LeSU%2FFoDHspV5MdENgD3QdUqdJyIJf10WDwlgFCiwOffAqBI6gmEIg1IlcdJKsSnqAh8Ik9FNiVouYOfAc8Wb4eStij8%2FAbkGH0bGwmYPjCggLrEBjqkAWp09QKBvaCZyj%2FG5ZNBG6zX3%2BcJJwVRLAmF9m92sYy18ZmjS3h140pOW9XyT1RyBpvQdiyKfGgH0%2BZYb7AKJncNw9UcQWRbQ7%2Fi%2F2nx%2FWqTkKIy8%2BwJUNc%2Fr9UFLrGUt5PCJoJ0vlIswk0%2FsURMrB3Z8vTr60gjg0PrTCVG6%2F91Rr%2BkhknFjESPzyAurc%2BkKHp7MUwTQ4qqZiQ%2FApuoaPJ6HGr%2B&X-Amz-Signature=794a24f0be3ff5fed8114c52a745e5d55897a77ee60b5fe27064d349b3a027fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6PV2GJZ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4eq%2BI3UkdgaHyXQz3ByEYtzE03reaDFwte3LLqV%2BP9QIhAKdQj8T9NXU58jlqMloVZbxc7xcrZ2euB8CwfL6858GsKv8DCB4QABoMNjM3NDIzMTgzODA1IgwNKTg0SZVHRUE86tMq3ANK5bthNhUhusxhudxvfONL2qJHfhDDbnB3nPJyKxov8DbwzfibFjDulhZAr8tDp89nnBHO1V1U9O46UMoF1hkB%2FkNGQL2dhTi7Ch11SYSlyhODbZBYKjpsLYz1mpPp6JpYrNDcnBLCpk41gMteGTGW90XLeLhc4mH8e7KSiaehEXK%2FxSrcQzFBZeQcWqUHhQ8s%2B%2FowgPTHUQx0%2FzBNfKtWqRxtk9CYbsFohA9Gp9Q7YMsCs%2Fur0%2BWZP%2F3Auz80TNxVtGd%2FUk46rCysuT7xPi%2BivO3vuC%2Fk1i5ABVIqXSiyKJHYt5MKSU70v6ZBOtT%2BqfM0W%2FBl0nuJOhT3bUS6Zxl1vBsjq%2FhygMzplI%2FUProhUJKtsbIGjt7%2FJUA8YG1KLQ3g%2FdI%2BuL24oU71ign2SS0ZmBX%2ByRTHDSt7XANvt5YFseU1rJROKVZzvrXJc2R%2FSSlw1GaZDiFk9XgdEGBVjFkmL8F1a703XZ%2F7%2FG5dMHK3Wxp7kXruO%2F%2BBeLYVaSVh0BFC8Lyy32FA2aOKX7t0LeSU%2FFoDHspV5MdENgD3QdUqdJyIJf10WDwlgFCiwOffAqBI6gmEIg1IlcdJKsSnqAh8Ik9FNiVouYOfAc8Wb4eStij8%2FAbkGH0bGwmYPjCggLrEBjqkAWp09QKBvaCZyj%2FG5ZNBG6zX3%2BcJJwVRLAmF9m92sYy18ZmjS3h140pOW9XyT1RyBpvQdiyKfGgH0%2BZYb7AKJncNw9UcQWRbQ7%2Fi%2F2nx%2FWqTkKIy8%2BwJUNc%2Fr9UFLrGUt5PCJoJ0vlIswk0%2FsURMrB3Z8vTr60gjg0PrTCVG6%2F91Rr%2BkhknFjESPzyAurc%2BkKHp7MUwTQ4qqZiQ%2FApuoaPJ6HGr%2B&X-Amz-Signature=0c9ebda5dba8fa321ec449f914ec8b2549342f6365b3a654a521c5a14a37b0e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
