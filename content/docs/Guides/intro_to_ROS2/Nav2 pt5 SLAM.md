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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZNS6A7R%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDE9axMUpIqppNNXuD%2BlLJp4TLLfb6DScqeGgyLcQuwNAIhAOjWYxHpRkdQ0gdwLb1mZsG%2BUh93945gDZbkJd8y9%2FGUKv8DCGIQABoMNjM3NDIzMTgzODA1IgzJBCy%2FwdTXuHlCJQUq3AP4VPFAKf06eNf5hpyS1Sxom5jUhQ5SM1fTXClE6vf3kz%2FQWQ0068PeiUOsgAEB1to8CXzBeAHWqWnRDap0HSqBergAx%2BERL2wrhFJI1BvB1fVPtpHVhYCEPZyqDNiOy2NU9R1SPbzUUI9Nk77QOwS3K3P4I2BdxAYDEYgwK2HGs3DUeheSlBDeDlrvC5o9iQ3ANGznVjy5e3ygekZNuqE3l5tF5l9Zo1HgsRX8SDKbc9qrvDvV%2Fd7ahBmLx9sAdorIxTMxTsimXcjRZZUcU4Cnp0dcWzzlgVtQBhIYzBj4D8PpMCGWSDKSJ4ZDDFp%2FNJ2ZcwcfIfMvH0ffW8fQvCVVAkh%2BcOORrYzHUCb7KzVq%2FcXfI%2BZF%2BKiPybWwDBMglRF6Y6opO8w5lUWSa4W2XRvWZJLb6r2HudLmKZzCyWy2dxO6qMREcq%2B6WXh%2BcVOFDhqxvnYXpeg%2FykX0M8E8DFWADIO83goNstKoR1owpuF%2BkglVEqWGYRhLZVEO5jihbBIig1pCQ4sdvzTOM0WCbH35syB0z6Biol2JEEUJh64XrhYgYaJRfJTp0kmv5OmqaMc6F6Ah6dSIK4Dc3fwJ5L8%2FZ5hc6FCLFUTUbUMx1ZS1cQQcYnKquw34wK3Q3zDU2v3EBjqkAbMuSw2Y42ETAWKw99dBl7xS7YOhfcQankCwSVaRXBTICugQSqBYxtj72Vce14GnahD9JXtVs6nKeuK%2BAeABJLsXFSuuYkOYhEk2gYcUEVMhFIQh3v5W9yqHhxwqrfRQFHoj0J%2Bz%2Bd%2F2%2F7kxGs80YzmeK4X%2F8OmQ7ZNkGlOU%2BF7ugs5zCqmfm2uFwQfQsgHSWz55fn%2BK50Mq8ayD4n5AB4I4jJCS&X-Amz-Signature=70640e33becbc080f3b024a37014b46850d77eae20b49b3763f06940cf408203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZNS6A7R%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDE9axMUpIqppNNXuD%2BlLJp4TLLfb6DScqeGgyLcQuwNAIhAOjWYxHpRkdQ0gdwLb1mZsG%2BUh93945gDZbkJd8y9%2FGUKv8DCGIQABoMNjM3NDIzMTgzODA1IgzJBCy%2FwdTXuHlCJQUq3AP4VPFAKf06eNf5hpyS1Sxom5jUhQ5SM1fTXClE6vf3kz%2FQWQ0068PeiUOsgAEB1to8CXzBeAHWqWnRDap0HSqBergAx%2BERL2wrhFJI1BvB1fVPtpHVhYCEPZyqDNiOy2NU9R1SPbzUUI9Nk77QOwS3K3P4I2BdxAYDEYgwK2HGs3DUeheSlBDeDlrvC5o9iQ3ANGznVjy5e3ygekZNuqE3l5tF5l9Zo1HgsRX8SDKbc9qrvDvV%2Fd7ahBmLx9sAdorIxTMxTsimXcjRZZUcU4Cnp0dcWzzlgVtQBhIYzBj4D8PpMCGWSDKSJ4ZDDFp%2FNJ2ZcwcfIfMvH0ffW8fQvCVVAkh%2BcOORrYzHUCb7KzVq%2FcXfI%2BZF%2BKiPybWwDBMglRF6Y6opO8w5lUWSa4W2XRvWZJLb6r2HudLmKZzCyWy2dxO6qMREcq%2B6WXh%2BcVOFDhqxvnYXpeg%2FykX0M8E8DFWADIO83goNstKoR1owpuF%2BkglVEqWGYRhLZVEO5jihbBIig1pCQ4sdvzTOM0WCbH35syB0z6Biol2JEEUJh64XrhYgYaJRfJTp0kmv5OmqaMc6F6Ah6dSIK4Dc3fwJ5L8%2FZ5hc6FCLFUTUbUMx1ZS1cQQcYnKquw34wK3Q3zDU2v3EBjqkAbMuSw2Y42ETAWKw99dBl7xS7YOhfcQankCwSVaRXBTICugQSqBYxtj72Vce14GnahD9JXtVs6nKeuK%2BAeABJLsXFSuuYkOYhEk2gYcUEVMhFIQh3v5W9yqHhxwqrfRQFHoj0J%2Bz%2Bd%2F2%2F7kxGs80YzmeK4X%2F8OmQ7ZNkGlOU%2BF7ugs5zCqmfm2uFwQfQsgHSWz55fn%2BK50Mq8ayD4n5AB4I4jJCS&X-Amz-Signature=a7af4675eaa8ad9847308eb8127880a7270b9e3bdb0d793ba848ff44767cc4bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZNS6A7R%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDE9axMUpIqppNNXuD%2BlLJp4TLLfb6DScqeGgyLcQuwNAIhAOjWYxHpRkdQ0gdwLb1mZsG%2BUh93945gDZbkJd8y9%2FGUKv8DCGIQABoMNjM3NDIzMTgzODA1IgzJBCy%2FwdTXuHlCJQUq3AP4VPFAKf06eNf5hpyS1Sxom5jUhQ5SM1fTXClE6vf3kz%2FQWQ0068PeiUOsgAEB1to8CXzBeAHWqWnRDap0HSqBergAx%2BERL2wrhFJI1BvB1fVPtpHVhYCEPZyqDNiOy2NU9R1SPbzUUI9Nk77QOwS3K3P4I2BdxAYDEYgwK2HGs3DUeheSlBDeDlrvC5o9iQ3ANGznVjy5e3ygekZNuqE3l5tF5l9Zo1HgsRX8SDKbc9qrvDvV%2Fd7ahBmLx9sAdorIxTMxTsimXcjRZZUcU4Cnp0dcWzzlgVtQBhIYzBj4D8PpMCGWSDKSJ4ZDDFp%2FNJ2ZcwcfIfMvH0ffW8fQvCVVAkh%2BcOORrYzHUCb7KzVq%2FcXfI%2BZF%2BKiPybWwDBMglRF6Y6opO8w5lUWSa4W2XRvWZJLb6r2HudLmKZzCyWy2dxO6qMREcq%2B6WXh%2BcVOFDhqxvnYXpeg%2FykX0M8E8DFWADIO83goNstKoR1owpuF%2BkglVEqWGYRhLZVEO5jihbBIig1pCQ4sdvzTOM0WCbH35syB0z6Biol2JEEUJh64XrhYgYaJRfJTp0kmv5OmqaMc6F6Ah6dSIK4Dc3fwJ5L8%2FZ5hc6FCLFUTUbUMx1ZS1cQQcYnKquw34wK3Q3zDU2v3EBjqkAbMuSw2Y42ETAWKw99dBl7xS7YOhfcQankCwSVaRXBTICugQSqBYxtj72Vce14GnahD9JXtVs6nKeuK%2BAeABJLsXFSuuYkOYhEk2gYcUEVMhFIQh3v5W9yqHhxwqrfRQFHoj0J%2Bz%2Bd%2F2%2F7kxGs80YzmeK4X%2F8OmQ7ZNkGlOU%2BF7ugs5zCqmfm2uFwQfQsgHSWz55fn%2BK50Mq8ayD4n5AB4I4jJCS&X-Amz-Signature=765647ba14e6f71a2e72db0322c055a360e310260838a5cff55a5267d63260e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZNS6A7R%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDE9axMUpIqppNNXuD%2BlLJp4TLLfb6DScqeGgyLcQuwNAIhAOjWYxHpRkdQ0gdwLb1mZsG%2BUh93945gDZbkJd8y9%2FGUKv8DCGIQABoMNjM3NDIzMTgzODA1IgzJBCy%2FwdTXuHlCJQUq3AP4VPFAKf06eNf5hpyS1Sxom5jUhQ5SM1fTXClE6vf3kz%2FQWQ0068PeiUOsgAEB1to8CXzBeAHWqWnRDap0HSqBergAx%2BERL2wrhFJI1BvB1fVPtpHVhYCEPZyqDNiOy2NU9R1SPbzUUI9Nk77QOwS3K3P4I2BdxAYDEYgwK2HGs3DUeheSlBDeDlrvC5o9iQ3ANGznVjy5e3ygekZNuqE3l5tF5l9Zo1HgsRX8SDKbc9qrvDvV%2Fd7ahBmLx9sAdorIxTMxTsimXcjRZZUcU4Cnp0dcWzzlgVtQBhIYzBj4D8PpMCGWSDKSJ4ZDDFp%2FNJ2ZcwcfIfMvH0ffW8fQvCVVAkh%2BcOORrYzHUCb7KzVq%2FcXfI%2BZF%2BKiPybWwDBMglRF6Y6opO8w5lUWSa4W2XRvWZJLb6r2HudLmKZzCyWy2dxO6qMREcq%2B6WXh%2BcVOFDhqxvnYXpeg%2FykX0M8E8DFWADIO83goNstKoR1owpuF%2BkglVEqWGYRhLZVEO5jihbBIig1pCQ4sdvzTOM0WCbH35syB0z6Biol2JEEUJh64XrhYgYaJRfJTp0kmv5OmqaMc6F6Ah6dSIK4Dc3fwJ5L8%2FZ5hc6FCLFUTUbUMx1ZS1cQQcYnKquw34wK3Q3zDU2v3EBjqkAbMuSw2Y42ETAWKw99dBl7xS7YOhfcQankCwSVaRXBTICugQSqBYxtj72Vce14GnahD9JXtVs6nKeuK%2BAeABJLsXFSuuYkOYhEk2gYcUEVMhFIQh3v5W9yqHhxwqrfRQFHoj0J%2Bz%2Bd%2F2%2F7kxGs80YzmeK4X%2F8OmQ7ZNkGlOU%2BF7ugs5zCqmfm2uFwQfQsgHSWz55fn%2BK50Mq8ayD4n5AB4I4jJCS&X-Amz-Signature=aa485df701dd1fac3e438b0c3e3f77559694b96e557f81278f90c57f1b95e360&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZNS6A7R%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDE9axMUpIqppNNXuD%2BlLJp4TLLfb6DScqeGgyLcQuwNAIhAOjWYxHpRkdQ0gdwLb1mZsG%2BUh93945gDZbkJd8y9%2FGUKv8DCGIQABoMNjM3NDIzMTgzODA1IgzJBCy%2FwdTXuHlCJQUq3AP4VPFAKf06eNf5hpyS1Sxom5jUhQ5SM1fTXClE6vf3kz%2FQWQ0068PeiUOsgAEB1to8CXzBeAHWqWnRDap0HSqBergAx%2BERL2wrhFJI1BvB1fVPtpHVhYCEPZyqDNiOy2NU9R1SPbzUUI9Nk77QOwS3K3P4I2BdxAYDEYgwK2HGs3DUeheSlBDeDlrvC5o9iQ3ANGznVjy5e3ygekZNuqE3l5tF5l9Zo1HgsRX8SDKbc9qrvDvV%2Fd7ahBmLx9sAdorIxTMxTsimXcjRZZUcU4Cnp0dcWzzlgVtQBhIYzBj4D8PpMCGWSDKSJ4ZDDFp%2FNJ2ZcwcfIfMvH0ffW8fQvCVVAkh%2BcOORrYzHUCb7KzVq%2FcXfI%2BZF%2BKiPybWwDBMglRF6Y6opO8w5lUWSa4W2XRvWZJLb6r2HudLmKZzCyWy2dxO6qMREcq%2B6WXh%2BcVOFDhqxvnYXpeg%2FykX0M8E8DFWADIO83goNstKoR1owpuF%2BkglVEqWGYRhLZVEO5jihbBIig1pCQ4sdvzTOM0WCbH35syB0z6Biol2JEEUJh64XrhYgYaJRfJTp0kmv5OmqaMc6F6Ah6dSIK4Dc3fwJ5L8%2FZ5hc6FCLFUTUbUMx1ZS1cQQcYnKquw34wK3Q3zDU2v3EBjqkAbMuSw2Y42ETAWKw99dBl7xS7YOhfcQankCwSVaRXBTICugQSqBYxtj72Vce14GnahD9JXtVs6nKeuK%2BAeABJLsXFSuuYkOYhEk2gYcUEVMhFIQh3v5W9yqHhxwqrfRQFHoj0J%2Bz%2Bd%2F2%2F7kxGs80YzmeK4X%2F8OmQ7ZNkGlOU%2BF7ugs5zCqmfm2uFwQfQsgHSWz55fn%2BK50Mq8ayD4n5AB4I4jJCS&X-Amz-Signature=12ef182a2d6a4e1f8dc1bd748bbee3f4b164a097bf3b115a70b7901c3a27454d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZNS6A7R%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDE9axMUpIqppNNXuD%2BlLJp4TLLfb6DScqeGgyLcQuwNAIhAOjWYxHpRkdQ0gdwLb1mZsG%2BUh93945gDZbkJd8y9%2FGUKv8DCGIQABoMNjM3NDIzMTgzODA1IgzJBCy%2FwdTXuHlCJQUq3AP4VPFAKf06eNf5hpyS1Sxom5jUhQ5SM1fTXClE6vf3kz%2FQWQ0068PeiUOsgAEB1to8CXzBeAHWqWnRDap0HSqBergAx%2BERL2wrhFJI1BvB1fVPtpHVhYCEPZyqDNiOy2NU9R1SPbzUUI9Nk77QOwS3K3P4I2BdxAYDEYgwK2HGs3DUeheSlBDeDlrvC5o9iQ3ANGznVjy5e3ygekZNuqE3l5tF5l9Zo1HgsRX8SDKbc9qrvDvV%2Fd7ahBmLx9sAdorIxTMxTsimXcjRZZUcU4Cnp0dcWzzlgVtQBhIYzBj4D8PpMCGWSDKSJ4ZDDFp%2FNJ2ZcwcfIfMvH0ffW8fQvCVVAkh%2BcOORrYzHUCb7KzVq%2FcXfI%2BZF%2BKiPybWwDBMglRF6Y6opO8w5lUWSa4W2XRvWZJLb6r2HudLmKZzCyWy2dxO6qMREcq%2B6WXh%2BcVOFDhqxvnYXpeg%2FykX0M8E8DFWADIO83goNstKoR1owpuF%2BkglVEqWGYRhLZVEO5jihbBIig1pCQ4sdvzTOM0WCbH35syB0z6Biol2JEEUJh64XrhYgYaJRfJTp0kmv5OmqaMc6F6Ah6dSIK4Dc3fwJ5L8%2FZ5hc6FCLFUTUbUMx1ZS1cQQcYnKquw34wK3Q3zDU2v3EBjqkAbMuSw2Y42ETAWKw99dBl7xS7YOhfcQankCwSVaRXBTICugQSqBYxtj72Vce14GnahD9JXtVs6nKeuK%2BAeABJLsXFSuuYkOYhEk2gYcUEVMhFIQh3v5W9yqHhxwqrfRQFHoj0J%2Bz%2Bd%2F2%2F7kxGs80YzmeK4X%2F8OmQ7ZNkGlOU%2BF7ugs5zCqmfm2uFwQfQsgHSWz55fn%2BK50Mq8ayD4n5AB4I4jJCS&X-Amz-Signature=417c95b7c74f276f754c8d096bda9bbc00cc5af0c7778b5056e0886036f20c3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZNS6A7R%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDE9axMUpIqppNNXuD%2BlLJp4TLLfb6DScqeGgyLcQuwNAIhAOjWYxHpRkdQ0gdwLb1mZsG%2BUh93945gDZbkJd8y9%2FGUKv8DCGIQABoMNjM3NDIzMTgzODA1IgzJBCy%2FwdTXuHlCJQUq3AP4VPFAKf06eNf5hpyS1Sxom5jUhQ5SM1fTXClE6vf3kz%2FQWQ0068PeiUOsgAEB1to8CXzBeAHWqWnRDap0HSqBergAx%2BERL2wrhFJI1BvB1fVPtpHVhYCEPZyqDNiOy2NU9R1SPbzUUI9Nk77QOwS3K3P4I2BdxAYDEYgwK2HGs3DUeheSlBDeDlrvC5o9iQ3ANGznVjy5e3ygekZNuqE3l5tF5l9Zo1HgsRX8SDKbc9qrvDvV%2Fd7ahBmLx9sAdorIxTMxTsimXcjRZZUcU4Cnp0dcWzzlgVtQBhIYzBj4D8PpMCGWSDKSJ4ZDDFp%2FNJ2ZcwcfIfMvH0ffW8fQvCVVAkh%2BcOORrYzHUCb7KzVq%2FcXfI%2BZF%2BKiPybWwDBMglRF6Y6opO8w5lUWSa4W2XRvWZJLb6r2HudLmKZzCyWy2dxO6qMREcq%2B6WXh%2BcVOFDhqxvnYXpeg%2FykX0M8E8DFWADIO83goNstKoR1owpuF%2BkglVEqWGYRhLZVEO5jihbBIig1pCQ4sdvzTOM0WCbH35syB0z6Biol2JEEUJh64XrhYgYaJRfJTp0kmv5OmqaMc6F6Ah6dSIK4Dc3fwJ5L8%2FZ5hc6FCLFUTUbUMx1ZS1cQQcYnKquw34wK3Q3zDU2v3EBjqkAbMuSw2Y42ETAWKw99dBl7xS7YOhfcQankCwSVaRXBTICugQSqBYxtj72Vce14GnahD9JXtVs6nKeuK%2BAeABJLsXFSuuYkOYhEk2gYcUEVMhFIQh3v5W9yqHhxwqrfRQFHoj0J%2Bz%2Bd%2F2%2F7kxGs80YzmeK4X%2F8OmQ7ZNkGlOU%2BF7ugs5zCqmfm2uFwQfQsgHSWz55fn%2BK50Mq8ayD4n5AB4I4jJCS&X-Amz-Signature=43ec38f7d3af6e490813c90d7605624c8fd1db1703b24464ca48f57385716378&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZNS6A7R%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDE9axMUpIqppNNXuD%2BlLJp4TLLfb6DScqeGgyLcQuwNAIhAOjWYxHpRkdQ0gdwLb1mZsG%2BUh93945gDZbkJd8y9%2FGUKv8DCGIQABoMNjM3NDIzMTgzODA1IgzJBCy%2FwdTXuHlCJQUq3AP4VPFAKf06eNf5hpyS1Sxom5jUhQ5SM1fTXClE6vf3kz%2FQWQ0068PeiUOsgAEB1to8CXzBeAHWqWnRDap0HSqBergAx%2BERL2wrhFJI1BvB1fVPtpHVhYCEPZyqDNiOy2NU9R1SPbzUUI9Nk77QOwS3K3P4I2BdxAYDEYgwK2HGs3DUeheSlBDeDlrvC5o9iQ3ANGznVjy5e3ygekZNuqE3l5tF5l9Zo1HgsRX8SDKbc9qrvDvV%2Fd7ahBmLx9sAdorIxTMxTsimXcjRZZUcU4Cnp0dcWzzlgVtQBhIYzBj4D8PpMCGWSDKSJ4ZDDFp%2FNJ2ZcwcfIfMvH0ffW8fQvCVVAkh%2BcOORrYzHUCb7KzVq%2FcXfI%2BZF%2BKiPybWwDBMglRF6Y6opO8w5lUWSa4W2XRvWZJLb6r2HudLmKZzCyWy2dxO6qMREcq%2B6WXh%2BcVOFDhqxvnYXpeg%2FykX0M8E8DFWADIO83goNstKoR1owpuF%2BkglVEqWGYRhLZVEO5jihbBIig1pCQ4sdvzTOM0WCbH35syB0z6Biol2JEEUJh64XrhYgYaJRfJTp0kmv5OmqaMc6F6Ah6dSIK4Dc3fwJ5L8%2FZ5hc6FCLFUTUbUMx1ZS1cQQcYnKquw34wK3Q3zDU2v3EBjqkAbMuSw2Y42ETAWKw99dBl7xS7YOhfcQankCwSVaRXBTICugQSqBYxtj72Vce14GnahD9JXtVs6nKeuK%2BAeABJLsXFSuuYkOYhEk2gYcUEVMhFIQh3v5W9yqHhxwqrfRQFHoj0J%2Bz%2Bd%2F2%2F7kxGs80YzmeK4X%2F8OmQ7ZNkGlOU%2BF7ugs5zCqmfm2uFwQfQsgHSWz55fn%2BK50Mq8ayD4n5AB4I4jJCS&X-Amz-Signature=d6175f99c7b345699811a96f760805b6caa3b10b4f79cde6ac994103c26981df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZNS6A7R%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDE9axMUpIqppNNXuD%2BlLJp4TLLfb6DScqeGgyLcQuwNAIhAOjWYxHpRkdQ0gdwLb1mZsG%2BUh93945gDZbkJd8y9%2FGUKv8DCGIQABoMNjM3NDIzMTgzODA1IgzJBCy%2FwdTXuHlCJQUq3AP4VPFAKf06eNf5hpyS1Sxom5jUhQ5SM1fTXClE6vf3kz%2FQWQ0068PeiUOsgAEB1to8CXzBeAHWqWnRDap0HSqBergAx%2BERL2wrhFJI1BvB1fVPtpHVhYCEPZyqDNiOy2NU9R1SPbzUUI9Nk77QOwS3K3P4I2BdxAYDEYgwK2HGs3DUeheSlBDeDlrvC5o9iQ3ANGznVjy5e3ygekZNuqE3l5tF5l9Zo1HgsRX8SDKbc9qrvDvV%2Fd7ahBmLx9sAdorIxTMxTsimXcjRZZUcU4Cnp0dcWzzlgVtQBhIYzBj4D8PpMCGWSDKSJ4ZDDFp%2FNJ2ZcwcfIfMvH0ffW8fQvCVVAkh%2BcOORrYzHUCb7KzVq%2FcXfI%2BZF%2BKiPybWwDBMglRF6Y6opO8w5lUWSa4W2XRvWZJLb6r2HudLmKZzCyWy2dxO6qMREcq%2B6WXh%2BcVOFDhqxvnYXpeg%2FykX0M8E8DFWADIO83goNstKoR1owpuF%2BkglVEqWGYRhLZVEO5jihbBIig1pCQ4sdvzTOM0WCbH35syB0z6Biol2JEEUJh64XrhYgYaJRfJTp0kmv5OmqaMc6F6Ah6dSIK4Dc3fwJ5L8%2FZ5hc6FCLFUTUbUMx1ZS1cQQcYnKquw34wK3Q3zDU2v3EBjqkAbMuSw2Y42ETAWKw99dBl7xS7YOhfcQankCwSVaRXBTICugQSqBYxtj72Vce14GnahD9JXtVs6nKeuK%2BAeABJLsXFSuuYkOYhEk2gYcUEVMhFIQh3v5W9yqHhxwqrfRQFHoj0J%2Bz%2Bd%2F2%2F7kxGs80YzmeK4X%2F8OmQ7ZNkGlOU%2BF7ugs5zCqmfm2uFwQfQsgHSWz55fn%2BK50Mq8ayD4n5AB4I4jJCS&X-Amz-Signature=fabd19baa0153ca0798127ca3f0394bb149272f437817a9ad9c2258526522cc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZNS6A7R%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDE9axMUpIqppNNXuD%2BlLJp4TLLfb6DScqeGgyLcQuwNAIhAOjWYxHpRkdQ0gdwLb1mZsG%2BUh93945gDZbkJd8y9%2FGUKv8DCGIQABoMNjM3NDIzMTgzODA1IgzJBCy%2FwdTXuHlCJQUq3AP4VPFAKf06eNf5hpyS1Sxom5jUhQ5SM1fTXClE6vf3kz%2FQWQ0068PeiUOsgAEB1to8CXzBeAHWqWnRDap0HSqBergAx%2BERL2wrhFJI1BvB1fVPtpHVhYCEPZyqDNiOy2NU9R1SPbzUUI9Nk77QOwS3K3P4I2BdxAYDEYgwK2HGs3DUeheSlBDeDlrvC5o9iQ3ANGznVjy5e3ygekZNuqE3l5tF5l9Zo1HgsRX8SDKbc9qrvDvV%2Fd7ahBmLx9sAdorIxTMxTsimXcjRZZUcU4Cnp0dcWzzlgVtQBhIYzBj4D8PpMCGWSDKSJ4ZDDFp%2FNJ2ZcwcfIfMvH0ffW8fQvCVVAkh%2BcOORrYzHUCb7KzVq%2FcXfI%2BZF%2BKiPybWwDBMglRF6Y6opO8w5lUWSa4W2XRvWZJLb6r2HudLmKZzCyWy2dxO6qMREcq%2B6WXh%2BcVOFDhqxvnYXpeg%2FykX0M8E8DFWADIO83goNstKoR1owpuF%2BkglVEqWGYRhLZVEO5jihbBIig1pCQ4sdvzTOM0WCbH35syB0z6Biol2JEEUJh64XrhYgYaJRfJTp0kmv5OmqaMc6F6Ah6dSIK4Dc3fwJ5L8%2FZ5hc6FCLFUTUbUMx1ZS1cQQcYnKquw34wK3Q3zDU2v3EBjqkAbMuSw2Y42ETAWKw99dBl7xS7YOhfcQankCwSVaRXBTICugQSqBYxtj72Vce14GnahD9JXtVs6nKeuK%2BAeABJLsXFSuuYkOYhEk2gYcUEVMhFIQh3v5W9yqHhxwqrfRQFHoj0J%2Bz%2Bd%2F2%2F7kxGs80YzmeK4X%2F8OmQ7ZNkGlOU%2BF7ugs5zCqmfm2uFwQfQsgHSWz55fn%2BK50Mq8ayD4n5AB4I4jJCS&X-Amz-Signature=804beedefdd7cf1f5810e26596d0a161258b0f7cdf678c34cab410fb62498077&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZNS6A7R%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDE9axMUpIqppNNXuD%2BlLJp4TLLfb6DScqeGgyLcQuwNAIhAOjWYxHpRkdQ0gdwLb1mZsG%2BUh93945gDZbkJd8y9%2FGUKv8DCGIQABoMNjM3NDIzMTgzODA1IgzJBCy%2FwdTXuHlCJQUq3AP4VPFAKf06eNf5hpyS1Sxom5jUhQ5SM1fTXClE6vf3kz%2FQWQ0068PeiUOsgAEB1to8CXzBeAHWqWnRDap0HSqBergAx%2BERL2wrhFJI1BvB1fVPtpHVhYCEPZyqDNiOy2NU9R1SPbzUUI9Nk77QOwS3K3P4I2BdxAYDEYgwK2HGs3DUeheSlBDeDlrvC5o9iQ3ANGznVjy5e3ygekZNuqE3l5tF5l9Zo1HgsRX8SDKbc9qrvDvV%2Fd7ahBmLx9sAdorIxTMxTsimXcjRZZUcU4Cnp0dcWzzlgVtQBhIYzBj4D8PpMCGWSDKSJ4ZDDFp%2FNJ2ZcwcfIfMvH0ffW8fQvCVVAkh%2BcOORrYzHUCb7KzVq%2FcXfI%2BZF%2BKiPybWwDBMglRF6Y6opO8w5lUWSa4W2XRvWZJLb6r2HudLmKZzCyWy2dxO6qMREcq%2B6WXh%2BcVOFDhqxvnYXpeg%2FykX0M8E8DFWADIO83goNstKoR1owpuF%2BkglVEqWGYRhLZVEO5jihbBIig1pCQ4sdvzTOM0WCbH35syB0z6Biol2JEEUJh64XrhYgYaJRfJTp0kmv5OmqaMc6F6Ah6dSIK4Dc3fwJ5L8%2FZ5hc6FCLFUTUbUMx1ZS1cQQcYnKquw34wK3Q3zDU2v3EBjqkAbMuSw2Y42ETAWKw99dBl7xS7YOhfcQankCwSVaRXBTICugQSqBYxtj72Vce14GnahD9JXtVs6nKeuK%2BAeABJLsXFSuuYkOYhEk2gYcUEVMhFIQh3v5W9yqHhxwqrfRQFHoj0J%2Bz%2Bd%2F2%2F7kxGs80YzmeK4X%2F8OmQ7ZNkGlOU%2BF7ugs5zCqmfm2uFwQfQsgHSWz55fn%2BK50Mq8ayD4n5AB4I4jJCS&X-Amz-Signature=910bd987aa73c466eb6af40634fe9f1b8ce76817cdec3b01b5274965b4f7cb14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZNS6A7R%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDE9axMUpIqppNNXuD%2BlLJp4TLLfb6DScqeGgyLcQuwNAIhAOjWYxHpRkdQ0gdwLb1mZsG%2BUh93945gDZbkJd8y9%2FGUKv8DCGIQABoMNjM3NDIzMTgzODA1IgzJBCy%2FwdTXuHlCJQUq3AP4VPFAKf06eNf5hpyS1Sxom5jUhQ5SM1fTXClE6vf3kz%2FQWQ0068PeiUOsgAEB1to8CXzBeAHWqWnRDap0HSqBergAx%2BERL2wrhFJI1BvB1fVPtpHVhYCEPZyqDNiOy2NU9R1SPbzUUI9Nk77QOwS3K3P4I2BdxAYDEYgwK2HGs3DUeheSlBDeDlrvC5o9iQ3ANGznVjy5e3ygekZNuqE3l5tF5l9Zo1HgsRX8SDKbc9qrvDvV%2Fd7ahBmLx9sAdorIxTMxTsimXcjRZZUcU4Cnp0dcWzzlgVtQBhIYzBj4D8PpMCGWSDKSJ4ZDDFp%2FNJ2ZcwcfIfMvH0ffW8fQvCVVAkh%2BcOORrYzHUCb7KzVq%2FcXfI%2BZF%2BKiPybWwDBMglRF6Y6opO8w5lUWSa4W2XRvWZJLb6r2HudLmKZzCyWy2dxO6qMREcq%2B6WXh%2BcVOFDhqxvnYXpeg%2FykX0M8E8DFWADIO83goNstKoR1owpuF%2BkglVEqWGYRhLZVEO5jihbBIig1pCQ4sdvzTOM0WCbH35syB0z6Biol2JEEUJh64XrhYgYaJRfJTp0kmv5OmqaMc6F6Ah6dSIK4Dc3fwJ5L8%2FZ5hc6FCLFUTUbUMx1ZS1cQQcYnKquw34wK3Q3zDU2v3EBjqkAbMuSw2Y42ETAWKw99dBl7xS7YOhfcQankCwSVaRXBTICugQSqBYxtj72Vce14GnahD9JXtVs6nKeuK%2BAeABJLsXFSuuYkOYhEk2gYcUEVMhFIQh3v5W9yqHhxwqrfRQFHoj0J%2Bz%2Bd%2F2%2F7kxGs80YzmeK4X%2F8OmQ7ZNkGlOU%2BF7ugs5zCqmfm2uFwQfQsgHSWz55fn%2BK50Mq8ayD4n5AB4I4jJCS&X-Amz-Signature=37a067303c97cebc51af91ea6cebb87299d4d688ce150fcffe778e88cb8572b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZNS6A7R%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDE9axMUpIqppNNXuD%2BlLJp4TLLfb6DScqeGgyLcQuwNAIhAOjWYxHpRkdQ0gdwLb1mZsG%2BUh93945gDZbkJd8y9%2FGUKv8DCGIQABoMNjM3NDIzMTgzODA1IgzJBCy%2FwdTXuHlCJQUq3AP4VPFAKf06eNf5hpyS1Sxom5jUhQ5SM1fTXClE6vf3kz%2FQWQ0068PeiUOsgAEB1to8CXzBeAHWqWnRDap0HSqBergAx%2BERL2wrhFJI1BvB1fVPtpHVhYCEPZyqDNiOy2NU9R1SPbzUUI9Nk77QOwS3K3P4I2BdxAYDEYgwK2HGs3DUeheSlBDeDlrvC5o9iQ3ANGznVjy5e3ygekZNuqE3l5tF5l9Zo1HgsRX8SDKbc9qrvDvV%2Fd7ahBmLx9sAdorIxTMxTsimXcjRZZUcU4Cnp0dcWzzlgVtQBhIYzBj4D8PpMCGWSDKSJ4ZDDFp%2FNJ2ZcwcfIfMvH0ffW8fQvCVVAkh%2BcOORrYzHUCb7KzVq%2FcXfI%2BZF%2BKiPybWwDBMglRF6Y6opO8w5lUWSa4W2XRvWZJLb6r2HudLmKZzCyWy2dxO6qMREcq%2B6WXh%2BcVOFDhqxvnYXpeg%2FykX0M8E8DFWADIO83goNstKoR1owpuF%2BkglVEqWGYRhLZVEO5jihbBIig1pCQ4sdvzTOM0WCbH35syB0z6Biol2JEEUJh64XrhYgYaJRfJTp0kmv5OmqaMc6F6Ah6dSIK4Dc3fwJ5L8%2FZ5hc6FCLFUTUbUMx1ZS1cQQcYnKquw34wK3Q3zDU2v3EBjqkAbMuSw2Y42ETAWKw99dBl7xS7YOhfcQankCwSVaRXBTICugQSqBYxtj72Vce14GnahD9JXtVs6nKeuK%2BAeABJLsXFSuuYkOYhEk2gYcUEVMhFIQh3v5W9yqHhxwqrfRQFHoj0J%2Bz%2Bd%2F2%2F7kxGs80YzmeK4X%2F8OmQ7ZNkGlOU%2BF7ugs5zCqmfm2uFwQfQsgHSWz55fn%2BK50Mq8ayD4n5AB4I4jJCS&X-Amz-Signature=bbb15a3139f4c98c9f75798f0d64f280760a738727f04b64e74598fba3bdd1d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZNS6A7R%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T190801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQDE9axMUpIqppNNXuD%2BlLJp4TLLfb6DScqeGgyLcQuwNAIhAOjWYxHpRkdQ0gdwLb1mZsG%2BUh93945gDZbkJd8y9%2FGUKv8DCGIQABoMNjM3NDIzMTgzODA1IgzJBCy%2FwdTXuHlCJQUq3AP4VPFAKf06eNf5hpyS1Sxom5jUhQ5SM1fTXClE6vf3kz%2FQWQ0068PeiUOsgAEB1to8CXzBeAHWqWnRDap0HSqBergAx%2BERL2wrhFJI1BvB1fVPtpHVhYCEPZyqDNiOy2NU9R1SPbzUUI9Nk77QOwS3K3P4I2BdxAYDEYgwK2HGs3DUeheSlBDeDlrvC5o9iQ3ANGznVjy5e3ygekZNuqE3l5tF5l9Zo1HgsRX8SDKbc9qrvDvV%2Fd7ahBmLx9sAdorIxTMxTsimXcjRZZUcU4Cnp0dcWzzlgVtQBhIYzBj4D8PpMCGWSDKSJ4ZDDFp%2FNJ2ZcwcfIfMvH0ffW8fQvCVVAkh%2BcOORrYzHUCb7KzVq%2FcXfI%2BZF%2BKiPybWwDBMglRF6Y6opO8w5lUWSa4W2XRvWZJLb6r2HudLmKZzCyWy2dxO6qMREcq%2B6WXh%2BcVOFDhqxvnYXpeg%2FykX0M8E8DFWADIO83goNstKoR1owpuF%2BkglVEqWGYRhLZVEO5jihbBIig1pCQ4sdvzTOM0WCbH35syB0z6Biol2JEEUJh64XrhYgYaJRfJTp0kmv5OmqaMc6F6Ah6dSIK4Dc3fwJ5L8%2FZ5hc6FCLFUTUbUMx1ZS1cQQcYnKquw34wK3Q3zDU2v3EBjqkAbMuSw2Y42ETAWKw99dBl7xS7YOhfcQankCwSVaRXBTICugQSqBYxtj72Vce14GnahD9JXtVs6nKeuK%2BAeABJLsXFSuuYkOYhEk2gYcUEVMhFIQh3v5W9yqHhxwqrfRQFHoj0J%2Bz%2Bd%2F2%2F7kxGs80YzmeK4X%2F8OmQ7ZNkGlOU%2BF7ugs5zCqmfm2uFwQfQsgHSWz55fn%2BK50Mq8ayD4n5AB4I4jJCS&X-Amz-Signature=732d2233df62ab0d2e8e4ec1d72a18e1c8944dbc621b8c46f59b11bcf4fcbf30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
