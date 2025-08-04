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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X56DNRLV%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQD6SzgnUNf2jF7y6FrsI8VdmqL7aiKJgb%2BX6op3Uu6AKgIhAJxUx4ldbpFrTewxskQtkXQ4UvKtdem%2F6gEAy%2FvcZkHlKv8DCD8QABoMNjM3NDIzMTgzODA1IgxgTNPClGBVpmeOK7Iq3AMP%2BHy5SSFHxRan7K9ZxAo5e5Shgb8VAlkCJF0KsEUY%2Fp4w1345VmCQ%2Bhs6dg%2FRjzujwPUrPx5q9wcm7j9AJ6wZJl2MnCegK%2FfaonYSvZ43qwFb5X8HY%2BwrsMmW1mISRvmzZYefc519DMOGSzYw%2BuWwddm4INSSSF0e1mf7a8ip47blCKv5EtEGpsH7N6L5EIy%2Fbo3Bid6ccrA5IgCaWn21GeU6eIBs7W5iU2i%2BDYoeDRDoflFDxlBsj63cGedhCFYj3X3GzgtNXUbm%2Bg6j7rJnmuR0mZ6O8c2fDXFoUc9Cr5OJFnSCzFJ%2BY7Km%2FiPLnqYQeE%2FTjikUi4ePZu0YKxE9dFTBWE2cQmZYm1sgPNx4R1WmSeGUS6OH9D45r2mkTx4sflCiExq7OkPxHTu12zz0wHC%2BEDHI3Mu%2FvwYour4yeMIjfML4z61BKZni5CgDGGp1l4VH9o3apRXNwPL5utzm215ngpbhy887N1gTAGK0UG5U2c1q4c42JjudF6I1LQ6purgCi7sEz6yVq0bRnFj6UYM7F%2BG7HCkOMZ6eKbWsfy30K%2BJ1U6ksX77hK%2F4vDQ0aQ7DaWw6gOGz3VV8pqSliYMp4VCx3lQrUuqLYDpIk6AC9mprSmAjvXq5lwzCZjcHEBjqkAWy%2BonoOr6JpsUBJwtqaFxR0jOD9sE38xi9VUpEzzkQGnipXHDccGJkoB2ttxnGNFjlSHltoZKtiUgo6hZn2uR3hubJBLq9xA2D19%2B0zwHlqtLjQybiMzoW6odkoUZhj%2BFp%2B5knGZ9zrH0KL9MUL4q36gibUwlbp2z13G1ZLQyLt4gPmp2YIRTGnm4o37jyE968WYpED9ewBmS7SMmalzY1FUB8u&X-Amz-Signature=2ef7bfd7d245d2089c67b6a246ca578a93c4ba5dc8d3ac5416fdb19761387ead&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X56DNRLV%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQD6SzgnUNf2jF7y6FrsI8VdmqL7aiKJgb%2BX6op3Uu6AKgIhAJxUx4ldbpFrTewxskQtkXQ4UvKtdem%2F6gEAy%2FvcZkHlKv8DCD8QABoMNjM3NDIzMTgzODA1IgxgTNPClGBVpmeOK7Iq3AMP%2BHy5SSFHxRan7K9ZxAo5e5Shgb8VAlkCJF0KsEUY%2Fp4w1345VmCQ%2Bhs6dg%2FRjzujwPUrPx5q9wcm7j9AJ6wZJl2MnCegK%2FfaonYSvZ43qwFb5X8HY%2BwrsMmW1mISRvmzZYefc519DMOGSzYw%2BuWwddm4INSSSF0e1mf7a8ip47blCKv5EtEGpsH7N6L5EIy%2Fbo3Bid6ccrA5IgCaWn21GeU6eIBs7W5iU2i%2BDYoeDRDoflFDxlBsj63cGedhCFYj3X3GzgtNXUbm%2Bg6j7rJnmuR0mZ6O8c2fDXFoUc9Cr5OJFnSCzFJ%2BY7Km%2FiPLnqYQeE%2FTjikUi4ePZu0YKxE9dFTBWE2cQmZYm1sgPNx4R1WmSeGUS6OH9D45r2mkTx4sflCiExq7OkPxHTu12zz0wHC%2BEDHI3Mu%2FvwYour4yeMIjfML4z61BKZni5CgDGGp1l4VH9o3apRXNwPL5utzm215ngpbhy887N1gTAGK0UG5U2c1q4c42JjudF6I1LQ6purgCi7sEz6yVq0bRnFj6UYM7F%2BG7HCkOMZ6eKbWsfy30K%2BJ1U6ksX77hK%2F4vDQ0aQ7DaWw6gOGz3VV8pqSliYMp4VCx3lQrUuqLYDpIk6AC9mprSmAjvXq5lwzCZjcHEBjqkAWy%2BonoOr6JpsUBJwtqaFxR0jOD9sE38xi9VUpEzzkQGnipXHDccGJkoB2ttxnGNFjlSHltoZKtiUgo6hZn2uR3hubJBLq9xA2D19%2B0zwHlqtLjQybiMzoW6odkoUZhj%2BFp%2B5knGZ9zrH0KL9MUL4q36gibUwlbp2z13G1ZLQyLt4gPmp2YIRTGnm4o37jyE968WYpED9ewBmS7SMmalzY1FUB8u&X-Amz-Signature=c9b42419755da309dd12f8798d8aee3a68afb116854167031ba35a1d00bab58e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X56DNRLV%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQD6SzgnUNf2jF7y6FrsI8VdmqL7aiKJgb%2BX6op3Uu6AKgIhAJxUx4ldbpFrTewxskQtkXQ4UvKtdem%2F6gEAy%2FvcZkHlKv8DCD8QABoMNjM3NDIzMTgzODA1IgxgTNPClGBVpmeOK7Iq3AMP%2BHy5SSFHxRan7K9ZxAo5e5Shgb8VAlkCJF0KsEUY%2Fp4w1345VmCQ%2Bhs6dg%2FRjzujwPUrPx5q9wcm7j9AJ6wZJl2MnCegK%2FfaonYSvZ43qwFb5X8HY%2BwrsMmW1mISRvmzZYefc519DMOGSzYw%2BuWwddm4INSSSF0e1mf7a8ip47blCKv5EtEGpsH7N6L5EIy%2Fbo3Bid6ccrA5IgCaWn21GeU6eIBs7W5iU2i%2BDYoeDRDoflFDxlBsj63cGedhCFYj3X3GzgtNXUbm%2Bg6j7rJnmuR0mZ6O8c2fDXFoUc9Cr5OJFnSCzFJ%2BY7Km%2FiPLnqYQeE%2FTjikUi4ePZu0YKxE9dFTBWE2cQmZYm1sgPNx4R1WmSeGUS6OH9D45r2mkTx4sflCiExq7OkPxHTu12zz0wHC%2BEDHI3Mu%2FvwYour4yeMIjfML4z61BKZni5CgDGGp1l4VH9o3apRXNwPL5utzm215ngpbhy887N1gTAGK0UG5U2c1q4c42JjudF6I1LQ6purgCi7sEz6yVq0bRnFj6UYM7F%2BG7HCkOMZ6eKbWsfy30K%2BJ1U6ksX77hK%2F4vDQ0aQ7DaWw6gOGz3VV8pqSliYMp4VCx3lQrUuqLYDpIk6AC9mprSmAjvXq5lwzCZjcHEBjqkAWy%2BonoOr6JpsUBJwtqaFxR0jOD9sE38xi9VUpEzzkQGnipXHDccGJkoB2ttxnGNFjlSHltoZKtiUgo6hZn2uR3hubJBLq9xA2D19%2B0zwHlqtLjQybiMzoW6odkoUZhj%2BFp%2B5knGZ9zrH0KL9MUL4q36gibUwlbp2z13G1ZLQyLt4gPmp2YIRTGnm4o37jyE968WYpED9ewBmS7SMmalzY1FUB8u&X-Amz-Signature=869b717f39f91fd59d723578f74d80e82dfcbd5aa181f0963d0ae4e1a0489396&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X56DNRLV%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQD6SzgnUNf2jF7y6FrsI8VdmqL7aiKJgb%2BX6op3Uu6AKgIhAJxUx4ldbpFrTewxskQtkXQ4UvKtdem%2F6gEAy%2FvcZkHlKv8DCD8QABoMNjM3NDIzMTgzODA1IgxgTNPClGBVpmeOK7Iq3AMP%2BHy5SSFHxRan7K9ZxAo5e5Shgb8VAlkCJF0KsEUY%2Fp4w1345VmCQ%2Bhs6dg%2FRjzujwPUrPx5q9wcm7j9AJ6wZJl2MnCegK%2FfaonYSvZ43qwFb5X8HY%2BwrsMmW1mISRvmzZYefc519DMOGSzYw%2BuWwddm4INSSSF0e1mf7a8ip47blCKv5EtEGpsH7N6L5EIy%2Fbo3Bid6ccrA5IgCaWn21GeU6eIBs7W5iU2i%2BDYoeDRDoflFDxlBsj63cGedhCFYj3X3GzgtNXUbm%2Bg6j7rJnmuR0mZ6O8c2fDXFoUc9Cr5OJFnSCzFJ%2BY7Km%2FiPLnqYQeE%2FTjikUi4ePZu0YKxE9dFTBWE2cQmZYm1sgPNx4R1WmSeGUS6OH9D45r2mkTx4sflCiExq7OkPxHTu12zz0wHC%2BEDHI3Mu%2FvwYour4yeMIjfML4z61BKZni5CgDGGp1l4VH9o3apRXNwPL5utzm215ngpbhy887N1gTAGK0UG5U2c1q4c42JjudF6I1LQ6purgCi7sEz6yVq0bRnFj6UYM7F%2BG7HCkOMZ6eKbWsfy30K%2BJ1U6ksX77hK%2F4vDQ0aQ7DaWw6gOGz3VV8pqSliYMp4VCx3lQrUuqLYDpIk6AC9mprSmAjvXq5lwzCZjcHEBjqkAWy%2BonoOr6JpsUBJwtqaFxR0jOD9sE38xi9VUpEzzkQGnipXHDccGJkoB2ttxnGNFjlSHltoZKtiUgo6hZn2uR3hubJBLq9xA2D19%2B0zwHlqtLjQybiMzoW6odkoUZhj%2BFp%2B5knGZ9zrH0KL9MUL4q36gibUwlbp2z13G1ZLQyLt4gPmp2YIRTGnm4o37jyE968WYpED9ewBmS7SMmalzY1FUB8u&X-Amz-Signature=345f635fd73c7090d512f88608ccae352396627e478e4752a0ea4b0c2076196c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X56DNRLV%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQD6SzgnUNf2jF7y6FrsI8VdmqL7aiKJgb%2BX6op3Uu6AKgIhAJxUx4ldbpFrTewxskQtkXQ4UvKtdem%2F6gEAy%2FvcZkHlKv8DCD8QABoMNjM3NDIzMTgzODA1IgxgTNPClGBVpmeOK7Iq3AMP%2BHy5SSFHxRan7K9ZxAo5e5Shgb8VAlkCJF0KsEUY%2Fp4w1345VmCQ%2Bhs6dg%2FRjzujwPUrPx5q9wcm7j9AJ6wZJl2MnCegK%2FfaonYSvZ43qwFb5X8HY%2BwrsMmW1mISRvmzZYefc519DMOGSzYw%2BuWwddm4INSSSF0e1mf7a8ip47blCKv5EtEGpsH7N6L5EIy%2Fbo3Bid6ccrA5IgCaWn21GeU6eIBs7W5iU2i%2BDYoeDRDoflFDxlBsj63cGedhCFYj3X3GzgtNXUbm%2Bg6j7rJnmuR0mZ6O8c2fDXFoUc9Cr5OJFnSCzFJ%2BY7Km%2FiPLnqYQeE%2FTjikUi4ePZu0YKxE9dFTBWE2cQmZYm1sgPNx4R1WmSeGUS6OH9D45r2mkTx4sflCiExq7OkPxHTu12zz0wHC%2BEDHI3Mu%2FvwYour4yeMIjfML4z61BKZni5CgDGGp1l4VH9o3apRXNwPL5utzm215ngpbhy887N1gTAGK0UG5U2c1q4c42JjudF6I1LQ6purgCi7sEz6yVq0bRnFj6UYM7F%2BG7HCkOMZ6eKbWsfy30K%2BJ1U6ksX77hK%2F4vDQ0aQ7DaWw6gOGz3VV8pqSliYMp4VCx3lQrUuqLYDpIk6AC9mprSmAjvXq5lwzCZjcHEBjqkAWy%2BonoOr6JpsUBJwtqaFxR0jOD9sE38xi9VUpEzzkQGnipXHDccGJkoB2ttxnGNFjlSHltoZKtiUgo6hZn2uR3hubJBLq9xA2D19%2B0zwHlqtLjQybiMzoW6odkoUZhj%2BFp%2B5knGZ9zrH0KL9MUL4q36gibUwlbp2z13G1ZLQyLt4gPmp2YIRTGnm4o37jyE968WYpED9ewBmS7SMmalzY1FUB8u&X-Amz-Signature=0b0c2b4279cf1be9a436fe36951005b85196a2c24eec2814687fa0bf2b0a752d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X56DNRLV%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQD6SzgnUNf2jF7y6FrsI8VdmqL7aiKJgb%2BX6op3Uu6AKgIhAJxUx4ldbpFrTewxskQtkXQ4UvKtdem%2F6gEAy%2FvcZkHlKv8DCD8QABoMNjM3NDIzMTgzODA1IgxgTNPClGBVpmeOK7Iq3AMP%2BHy5SSFHxRan7K9ZxAo5e5Shgb8VAlkCJF0KsEUY%2Fp4w1345VmCQ%2Bhs6dg%2FRjzujwPUrPx5q9wcm7j9AJ6wZJl2MnCegK%2FfaonYSvZ43qwFb5X8HY%2BwrsMmW1mISRvmzZYefc519DMOGSzYw%2BuWwddm4INSSSF0e1mf7a8ip47blCKv5EtEGpsH7N6L5EIy%2Fbo3Bid6ccrA5IgCaWn21GeU6eIBs7W5iU2i%2BDYoeDRDoflFDxlBsj63cGedhCFYj3X3GzgtNXUbm%2Bg6j7rJnmuR0mZ6O8c2fDXFoUc9Cr5OJFnSCzFJ%2BY7Km%2FiPLnqYQeE%2FTjikUi4ePZu0YKxE9dFTBWE2cQmZYm1sgPNx4R1WmSeGUS6OH9D45r2mkTx4sflCiExq7OkPxHTu12zz0wHC%2BEDHI3Mu%2FvwYour4yeMIjfML4z61BKZni5CgDGGp1l4VH9o3apRXNwPL5utzm215ngpbhy887N1gTAGK0UG5U2c1q4c42JjudF6I1LQ6purgCi7sEz6yVq0bRnFj6UYM7F%2BG7HCkOMZ6eKbWsfy30K%2BJ1U6ksX77hK%2F4vDQ0aQ7DaWw6gOGz3VV8pqSliYMp4VCx3lQrUuqLYDpIk6AC9mprSmAjvXq5lwzCZjcHEBjqkAWy%2BonoOr6JpsUBJwtqaFxR0jOD9sE38xi9VUpEzzkQGnipXHDccGJkoB2ttxnGNFjlSHltoZKtiUgo6hZn2uR3hubJBLq9xA2D19%2B0zwHlqtLjQybiMzoW6odkoUZhj%2BFp%2B5knGZ9zrH0KL9MUL4q36gibUwlbp2z13G1ZLQyLt4gPmp2YIRTGnm4o37jyE968WYpED9ewBmS7SMmalzY1FUB8u&X-Amz-Signature=e372339ff1a3b43868c794874b11fbc64a2305078e215d1a768c094549e425fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X56DNRLV%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQD6SzgnUNf2jF7y6FrsI8VdmqL7aiKJgb%2BX6op3Uu6AKgIhAJxUx4ldbpFrTewxskQtkXQ4UvKtdem%2F6gEAy%2FvcZkHlKv8DCD8QABoMNjM3NDIzMTgzODA1IgxgTNPClGBVpmeOK7Iq3AMP%2BHy5SSFHxRan7K9ZxAo5e5Shgb8VAlkCJF0KsEUY%2Fp4w1345VmCQ%2Bhs6dg%2FRjzujwPUrPx5q9wcm7j9AJ6wZJl2MnCegK%2FfaonYSvZ43qwFb5X8HY%2BwrsMmW1mISRvmzZYefc519DMOGSzYw%2BuWwddm4INSSSF0e1mf7a8ip47blCKv5EtEGpsH7N6L5EIy%2Fbo3Bid6ccrA5IgCaWn21GeU6eIBs7W5iU2i%2BDYoeDRDoflFDxlBsj63cGedhCFYj3X3GzgtNXUbm%2Bg6j7rJnmuR0mZ6O8c2fDXFoUc9Cr5OJFnSCzFJ%2BY7Km%2FiPLnqYQeE%2FTjikUi4ePZu0YKxE9dFTBWE2cQmZYm1sgPNx4R1WmSeGUS6OH9D45r2mkTx4sflCiExq7OkPxHTu12zz0wHC%2BEDHI3Mu%2FvwYour4yeMIjfML4z61BKZni5CgDGGp1l4VH9o3apRXNwPL5utzm215ngpbhy887N1gTAGK0UG5U2c1q4c42JjudF6I1LQ6purgCi7sEz6yVq0bRnFj6UYM7F%2BG7HCkOMZ6eKbWsfy30K%2BJ1U6ksX77hK%2F4vDQ0aQ7DaWw6gOGz3VV8pqSliYMp4VCx3lQrUuqLYDpIk6AC9mprSmAjvXq5lwzCZjcHEBjqkAWy%2BonoOr6JpsUBJwtqaFxR0jOD9sE38xi9VUpEzzkQGnipXHDccGJkoB2ttxnGNFjlSHltoZKtiUgo6hZn2uR3hubJBLq9xA2D19%2B0zwHlqtLjQybiMzoW6odkoUZhj%2BFp%2B5knGZ9zrH0KL9MUL4q36gibUwlbp2z13G1ZLQyLt4gPmp2YIRTGnm4o37jyE968WYpED9ewBmS7SMmalzY1FUB8u&X-Amz-Signature=6b8fcc0f122ecf5b194ba166cd517f6fb8fdf9633cb0c49b853c8964edfac8a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X56DNRLV%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQD6SzgnUNf2jF7y6FrsI8VdmqL7aiKJgb%2BX6op3Uu6AKgIhAJxUx4ldbpFrTewxskQtkXQ4UvKtdem%2F6gEAy%2FvcZkHlKv8DCD8QABoMNjM3NDIzMTgzODA1IgxgTNPClGBVpmeOK7Iq3AMP%2BHy5SSFHxRan7K9ZxAo5e5Shgb8VAlkCJF0KsEUY%2Fp4w1345VmCQ%2Bhs6dg%2FRjzujwPUrPx5q9wcm7j9AJ6wZJl2MnCegK%2FfaonYSvZ43qwFb5X8HY%2BwrsMmW1mISRvmzZYefc519DMOGSzYw%2BuWwddm4INSSSF0e1mf7a8ip47blCKv5EtEGpsH7N6L5EIy%2Fbo3Bid6ccrA5IgCaWn21GeU6eIBs7W5iU2i%2BDYoeDRDoflFDxlBsj63cGedhCFYj3X3GzgtNXUbm%2Bg6j7rJnmuR0mZ6O8c2fDXFoUc9Cr5OJFnSCzFJ%2BY7Km%2FiPLnqYQeE%2FTjikUi4ePZu0YKxE9dFTBWE2cQmZYm1sgPNx4R1WmSeGUS6OH9D45r2mkTx4sflCiExq7OkPxHTu12zz0wHC%2BEDHI3Mu%2FvwYour4yeMIjfML4z61BKZni5CgDGGp1l4VH9o3apRXNwPL5utzm215ngpbhy887N1gTAGK0UG5U2c1q4c42JjudF6I1LQ6purgCi7sEz6yVq0bRnFj6UYM7F%2BG7HCkOMZ6eKbWsfy30K%2BJ1U6ksX77hK%2F4vDQ0aQ7DaWw6gOGz3VV8pqSliYMp4VCx3lQrUuqLYDpIk6AC9mprSmAjvXq5lwzCZjcHEBjqkAWy%2BonoOr6JpsUBJwtqaFxR0jOD9sE38xi9VUpEzzkQGnipXHDccGJkoB2ttxnGNFjlSHltoZKtiUgo6hZn2uR3hubJBLq9xA2D19%2B0zwHlqtLjQybiMzoW6odkoUZhj%2BFp%2B5knGZ9zrH0KL9MUL4q36gibUwlbp2z13G1ZLQyLt4gPmp2YIRTGnm4o37jyE968WYpED9ewBmS7SMmalzY1FUB8u&X-Amz-Signature=ae3f894ea905a0c6f6576c337f301c7cf518adea2e49ae516188a6872b172378&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X56DNRLV%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQD6SzgnUNf2jF7y6FrsI8VdmqL7aiKJgb%2BX6op3Uu6AKgIhAJxUx4ldbpFrTewxskQtkXQ4UvKtdem%2F6gEAy%2FvcZkHlKv8DCD8QABoMNjM3NDIzMTgzODA1IgxgTNPClGBVpmeOK7Iq3AMP%2BHy5SSFHxRan7K9ZxAo5e5Shgb8VAlkCJF0KsEUY%2Fp4w1345VmCQ%2Bhs6dg%2FRjzujwPUrPx5q9wcm7j9AJ6wZJl2MnCegK%2FfaonYSvZ43qwFb5X8HY%2BwrsMmW1mISRvmzZYefc519DMOGSzYw%2BuWwddm4INSSSF0e1mf7a8ip47blCKv5EtEGpsH7N6L5EIy%2Fbo3Bid6ccrA5IgCaWn21GeU6eIBs7W5iU2i%2BDYoeDRDoflFDxlBsj63cGedhCFYj3X3GzgtNXUbm%2Bg6j7rJnmuR0mZ6O8c2fDXFoUc9Cr5OJFnSCzFJ%2BY7Km%2FiPLnqYQeE%2FTjikUi4ePZu0YKxE9dFTBWE2cQmZYm1sgPNx4R1WmSeGUS6OH9D45r2mkTx4sflCiExq7OkPxHTu12zz0wHC%2BEDHI3Mu%2FvwYour4yeMIjfML4z61BKZni5CgDGGp1l4VH9o3apRXNwPL5utzm215ngpbhy887N1gTAGK0UG5U2c1q4c42JjudF6I1LQ6purgCi7sEz6yVq0bRnFj6UYM7F%2BG7HCkOMZ6eKbWsfy30K%2BJ1U6ksX77hK%2F4vDQ0aQ7DaWw6gOGz3VV8pqSliYMp4VCx3lQrUuqLYDpIk6AC9mprSmAjvXq5lwzCZjcHEBjqkAWy%2BonoOr6JpsUBJwtqaFxR0jOD9sE38xi9VUpEzzkQGnipXHDccGJkoB2ttxnGNFjlSHltoZKtiUgo6hZn2uR3hubJBLq9xA2D19%2B0zwHlqtLjQybiMzoW6odkoUZhj%2BFp%2B5knGZ9zrH0KL9MUL4q36gibUwlbp2z13G1ZLQyLt4gPmp2YIRTGnm4o37jyE968WYpED9ewBmS7SMmalzY1FUB8u&X-Amz-Signature=d8f46ecb3b75d4199be817c2b3450cfaef8d575e7cf7031129db10993e1db4f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X56DNRLV%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQD6SzgnUNf2jF7y6FrsI8VdmqL7aiKJgb%2BX6op3Uu6AKgIhAJxUx4ldbpFrTewxskQtkXQ4UvKtdem%2F6gEAy%2FvcZkHlKv8DCD8QABoMNjM3NDIzMTgzODA1IgxgTNPClGBVpmeOK7Iq3AMP%2BHy5SSFHxRan7K9ZxAo5e5Shgb8VAlkCJF0KsEUY%2Fp4w1345VmCQ%2Bhs6dg%2FRjzujwPUrPx5q9wcm7j9AJ6wZJl2MnCegK%2FfaonYSvZ43qwFb5X8HY%2BwrsMmW1mISRvmzZYefc519DMOGSzYw%2BuWwddm4INSSSF0e1mf7a8ip47blCKv5EtEGpsH7N6L5EIy%2Fbo3Bid6ccrA5IgCaWn21GeU6eIBs7W5iU2i%2BDYoeDRDoflFDxlBsj63cGedhCFYj3X3GzgtNXUbm%2Bg6j7rJnmuR0mZ6O8c2fDXFoUc9Cr5OJFnSCzFJ%2BY7Km%2FiPLnqYQeE%2FTjikUi4ePZu0YKxE9dFTBWE2cQmZYm1sgPNx4R1WmSeGUS6OH9D45r2mkTx4sflCiExq7OkPxHTu12zz0wHC%2BEDHI3Mu%2FvwYour4yeMIjfML4z61BKZni5CgDGGp1l4VH9o3apRXNwPL5utzm215ngpbhy887N1gTAGK0UG5U2c1q4c42JjudF6I1LQ6purgCi7sEz6yVq0bRnFj6UYM7F%2BG7HCkOMZ6eKbWsfy30K%2BJ1U6ksX77hK%2F4vDQ0aQ7DaWw6gOGz3VV8pqSliYMp4VCx3lQrUuqLYDpIk6AC9mprSmAjvXq5lwzCZjcHEBjqkAWy%2BonoOr6JpsUBJwtqaFxR0jOD9sE38xi9VUpEzzkQGnipXHDccGJkoB2ttxnGNFjlSHltoZKtiUgo6hZn2uR3hubJBLq9xA2D19%2B0zwHlqtLjQybiMzoW6odkoUZhj%2BFp%2B5knGZ9zrH0KL9MUL4q36gibUwlbp2z13G1ZLQyLt4gPmp2YIRTGnm4o37jyE968WYpED9ewBmS7SMmalzY1FUB8u&X-Amz-Signature=8786888f1444ef5d4e53d2ff4719c8a34005a8d3112bc3e5c8c3d9842abfe8a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X56DNRLV%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQD6SzgnUNf2jF7y6FrsI8VdmqL7aiKJgb%2BX6op3Uu6AKgIhAJxUx4ldbpFrTewxskQtkXQ4UvKtdem%2F6gEAy%2FvcZkHlKv8DCD8QABoMNjM3NDIzMTgzODA1IgxgTNPClGBVpmeOK7Iq3AMP%2BHy5SSFHxRan7K9ZxAo5e5Shgb8VAlkCJF0KsEUY%2Fp4w1345VmCQ%2Bhs6dg%2FRjzujwPUrPx5q9wcm7j9AJ6wZJl2MnCegK%2FfaonYSvZ43qwFb5X8HY%2BwrsMmW1mISRvmzZYefc519DMOGSzYw%2BuWwddm4INSSSF0e1mf7a8ip47blCKv5EtEGpsH7N6L5EIy%2Fbo3Bid6ccrA5IgCaWn21GeU6eIBs7W5iU2i%2BDYoeDRDoflFDxlBsj63cGedhCFYj3X3GzgtNXUbm%2Bg6j7rJnmuR0mZ6O8c2fDXFoUc9Cr5OJFnSCzFJ%2BY7Km%2FiPLnqYQeE%2FTjikUi4ePZu0YKxE9dFTBWE2cQmZYm1sgPNx4R1WmSeGUS6OH9D45r2mkTx4sflCiExq7OkPxHTu12zz0wHC%2BEDHI3Mu%2FvwYour4yeMIjfML4z61BKZni5CgDGGp1l4VH9o3apRXNwPL5utzm215ngpbhy887N1gTAGK0UG5U2c1q4c42JjudF6I1LQ6purgCi7sEz6yVq0bRnFj6UYM7F%2BG7HCkOMZ6eKbWsfy30K%2BJ1U6ksX77hK%2F4vDQ0aQ7DaWw6gOGz3VV8pqSliYMp4VCx3lQrUuqLYDpIk6AC9mprSmAjvXq5lwzCZjcHEBjqkAWy%2BonoOr6JpsUBJwtqaFxR0jOD9sE38xi9VUpEzzkQGnipXHDccGJkoB2ttxnGNFjlSHltoZKtiUgo6hZn2uR3hubJBLq9xA2D19%2B0zwHlqtLjQybiMzoW6odkoUZhj%2BFp%2B5knGZ9zrH0KL9MUL4q36gibUwlbp2z13G1ZLQyLt4gPmp2YIRTGnm4o37jyE968WYpED9ewBmS7SMmalzY1FUB8u&X-Amz-Signature=d8f2456ea847e9713fed18e73a771ba136b10c726d33016f7ac62fb3aced632d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X56DNRLV%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQD6SzgnUNf2jF7y6FrsI8VdmqL7aiKJgb%2BX6op3Uu6AKgIhAJxUx4ldbpFrTewxskQtkXQ4UvKtdem%2F6gEAy%2FvcZkHlKv8DCD8QABoMNjM3NDIzMTgzODA1IgxgTNPClGBVpmeOK7Iq3AMP%2BHy5SSFHxRan7K9ZxAo5e5Shgb8VAlkCJF0KsEUY%2Fp4w1345VmCQ%2Bhs6dg%2FRjzujwPUrPx5q9wcm7j9AJ6wZJl2MnCegK%2FfaonYSvZ43qwFb5X8HY%2BwrsMmW1mISRvmzZYefc519DMOGSzYw%2BuWwddm4INSSSF0e1mf7a8ip47blCKv5EtEGpsH7N6L5EIy%2Fbo3Bid6ccrA5IgCaWn21GeU6eIBs7W5iU2i%2BDYoeDRDoflFDxlBsj63cGedhCFYj3X3GzgtNXUbm%2Bg6j7rJnmuR0mZ6O8c2fDXFoUc9Cr5OJFnSCzFJ%2BY7Km%2FiPLnqYQeE%2FTjikUi4ePZu0YKxE9dFTBWE2cQmZYm1sgPNx4R1WmSeGUS6OH9D45r2mkTx4sflCiExq7OkPxHTu12zz0wHC%2BEDHI3Mu%2FvwYour4yeMIjfML4z61BKZni5CgDGGp1l4VH9o3apRXNwPL5utzm215ngpbhy887N1gTAGK0UG5U2c1q4c42JjudF6I1LQ6purgCi7sEz6yVq0bRnFj6UYM7F%2BG7HCkOMZ6eKbWsfy30K%2BJ1U6ksX77hK%2F4vDQ0aQ7DaWw6gOGz3VV8pqSliYMp4VCx3lQrUuqLYDpIk6AC9mprSmAjvXq5lwzCZjcHEBjqkAWy%2BonoOr6JpsUBJwtqaFxR0jOD9sE38xi9VUpEzzkQGnipXHDccGJkoB2ttxnGNFjlSHltoZKtiUgo6hZn2uR3hubJBLq9xA2D19%2B0zwHlqtLjQybiMzoW6odkoUZhj%2BFp%2B5knGZ9zrH0KL9MUL4q36gibUwlbp2z13G1ZLQyLt4gPmp2YIRTGnm4o37jyE968WYpED9ewBmS7SMmalzY1FUB8u&X-Amz-Signature=9d37dea96c34116f907775247387586d832cf506a605fc4f1bdb81aa49e5b541&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X56DNRLV%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQD6SzgnUNf2jF7y6FrsI8VdmqL7aiKJgb%2BX6op3Uu6AKgIhAJxUx4ldbpFrTewxskQtkXQ4UvKtdem%2F6gEAy%2FvcZkHlKv8DCD8QABoMNjM3NDIzMTgzODA1IgxgTNPClGBVpmeOK7Iq3AMP%2BHy5SSFHxRan7K9ZxAo5e5Shgb8VAlkCJF0KsEUY%2Fp4w1345VmCQ%2Bhs6dg%2FRjzujwPUrPx5q9wcm7j9AJ6wZJl2MnCegK%2FfaonYSvZ43qwFb5X8HY%2BwrsMmW1mISRvmzZYefc519DMOGSzYw%2BuWwddm4INSSSF0e1mf7a8ip47blCKv5EtEGpsH7N6L5EIy%2Fbo3Bid6ccrA5IgCaWn21GeU6eIBs7W5iU2i%2BDYoeDRDoflFDxlBsj63cGedhCFYj3X3GzgtNXUbm%2Bg6j7rJnmuR0mZ6O8c2fDXFoUc9Cr5OJFnSCzFJ%2BY7Km%2FiPLnqYQeE%2FTjikUi4ePZu0YKxE9dFTBWE2cQmZYm1sgPNx4R1WmSeGUS6OH9D45r2mkTx4sflCiExq7OkPxHTu12zz0wHC%2BEDHI3Mu%2FvwYour4yeMIjfML4z61BKZni5CgDGGp1l4VH9o3apRXNwPL5utzm215ngpbhy887N1gTAGK0UG5U2c1q4c42JjudF6I1LQ6purgCi7sEz6yVq0bRnFj6UYM7F%2BG7HCkOMZ6eKbWsfy30K%2BJ1U6ksX77hK%2F4vDQ0aQ7DaWw6gOGz3VV8pqSliYMp4VCx3lQrUuqLYDpIk6AC9mprSmAjvXq5lwzCZjcHEBjqkAWy%2BonoOr6JpsUBJwtqaFxR0jOD9sE38xi9VUpEzzkQGnipXHDccGJkoB2ttxnGNFjlSHltoZKtiUgo6hZn2uR3hubJBLq9xA2D19%2B0zwHlqtLjQybiMzoW6odkoUZhj%2BFp%2B5knGZ9zrH0KL9MUL4q36gibUwlbp2z13G1ZLQyLt4gPmp2YIRTGnm4o37jyE968WYpED9ewBmS7SMmalzY1FUB8u&X-Amz-Signature=d755f7965bd63d35cd492bd015ec777846f24f1e29a9d3bb6c0f2ac89a8f723f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X56DNRLV%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T062103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJIMEYCIQD6SzgnUNf2jF7y6FrsI8VdmqL7aiKJgb%2BX6op3Uu6AKgIhAJxUx4ldbpFrTewxskQtkXQ4UvKtdem%2F6gEAy%2FvcZkHlKv8DCD8QABoMNjM3NDIzMTgzODA1IgxgTNPClGBVpmeOK7Iq3AMP%2BHy5SSFHxRan7K9ZxAo5e5Shgb8VAlkCJF0KsEUY%2Fp4w1345VmCQ%2Bhs6dg%2FRjzujwPUrPx5q9wcm7j9AJ6wZJl2MnCegK%2FfaonYSvZ43qwFb5X8HY%2BwrsMmW1mISRvmzZYefc519DMOGSzYw%2BuWwddm4INSSSF0e1mf7a8ip47blCKv5EtEGpsH7N6L5EIy%2Fbo3Bid6ccrA5IgCaWn21GeU6eIBs7W5iU2i%2BDYoeDRDoflFDxlBsj63cGedhCFYj3X3GzgtNXUbm%2Bg6j7rJnmuR0mZ6O8c2fDXFoUc9Cr5OJFnSCzFJ%2BY7Km%2FiPLnqYQeE%2FTjikUi4ePZu0YKxE9dFTBWE2cQmZYm1sgPNx4R1WmSeGUS6OH9D45r2mkTx4sflCiExq7OkPxHTu12zz0wHC%2BEDHI3Mu%2FvwYour4yeMIjfML4z61BKZni5CgDGGp1l4VH9o3apRXNwPL5utzm215ngpbhy887N1gTAGK0UG5U2c1q4c42JjudF6I1LQ6purgCi7sEz6yVq0bRnFj6UYM7F%2BG7HCkOMZ6eKbWsfy30K%2BJ1U6ksX77hK%2F4vDQ0aQ7DaWw6gOGz3VV8pqSliYMp4VCx3lQrUuqLYDpIk6AC9mprSmAjvXq5lwzCZjcHEBjqkAWy%2BonoOr6JpsUBJwtqaFxR0jOD9sE38xi9VUpEzzkQGnipXHDccGJkoB2ttxnGNFjlSHltoZKtiUgo6hZn2uR3hubJBLq9xA2D19%2B0zwHlqtLjQybiMzoW6odkoUZhj%2BFp%2B5knGZ9zrH0KL9MUL4q36gibUwlbp2z13G1ZLQyLt4gPmp2YIRTGnm4o37jyE968WYpED9ewBmS7SMmalzY1FUB8u&X-Amz-Signature=31e4715dfa5dd58975baa56154ae553f0eb64c06c007a3611315040c4eee102c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
