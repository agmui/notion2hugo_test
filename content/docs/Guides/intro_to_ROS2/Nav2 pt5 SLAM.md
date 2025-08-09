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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO7J56SV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIEXLkUsTpnEEAjVZMqOG4N1D6FIVC2eAeiwe1%2FmoZFEEAiAoiaQsCY1s%2FsU2QbGM%2BKcKqYYZFd7yy5XEwW%2BbLTE9NiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBgMfMgD8hWpeSjrMKtwD5AwvkSSrcyUKv1YxFFATS3CJzDdbGYijZyF0cwlrWgiS%2FJjz95KNafMyNL3KphbBRPT3bpsZ6wuVKP12mdnTFZIPPX5LIar7vtFt4vcmz0ecNkyTr37duZixC94EBomib7xqqmQoJMuJR7yhqqLOAaYyJPZeid6L%2BJZ6QTbrYU5GIwCv0zVSrfJxgHTjg9vaAPLffAMaKsFuoBAqHSVa8QaQMs0RJuhd8FQ7avCvuQh1S%2B5ehnMsFkpVwu6wM70vQh2qt5pzV0CbzmjOhtjbX3uz5cgzAvFKfn%2BbAK6fFCsJQVEsNWjet4uHVunZ1WHJ%2B4c9fY4FvxVKNfEjFCCaYUHsY1vuXxkFGkLlo3jJ18khgrC2uYZYyfSzgPgu0KmPMvm33xDVZB15g1qnkDBC37G0vonHFllSBYR28bYCzEpbM3vTq02%2Btfehe59zKZHrFRtWg%2BQbvXh1nKjZXPZpv3AeDGNsWX4cAvoCjY6WavnQ9aM0bIpL6bYAVYMsmZSsKsdIGz5V3nme2x1s6f5wmR81zEJkU6twhkYP6i%2BnAGnauMbw8QgX2NiOum%2FcwblK56Dj8akLvDiJOjj1vnoThiww8Np6TjS1zkvEKn2HTZ8Pfnmo1sH1%2FGD4y9wwuKDbxAY6pgFXNZajwDA8zJI1tuJekpYTZjvURU7d54ygPKCIDdxWwU4J71CL29Zs1udeqcDjvBuKO3ng8UoGkE0qvh3h%2BkeiPdvskRyxmD9qt5zBaNwDGE54Hmb5UOCTNSoVwSw5xAGhJjw%2BM9d6R5Q4DADWmwxQLGbXkCnCildxaxuOrmUl7Wsno6fJW6HZBp9TtFagFTZiHVdX1DCF72IIpYTadLA2aTjZUQpO&X-Amz-Signature=8b40ff9fd5118f5000a80f85ba71acf7c79af71f28fb2a7b213813b51c8cfc9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO7J56SV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIEXLkUsTpnEEAjVZMqOG4N1D6FIVC2eAeiwe1%2FmoZFEEAiAoiaQsCY1s%2FsU2QbGM%2BKcKqYYZFd7yy5XEwW%2BbLTE9NiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBgMfMgD8hWpeSjrMKtwD5AwvkSSrcyUKv1YxFFATS3CJzDdbGYijZyF0cwlrWgiS%2FJjz95KNafMyNL3KphbBRPT3bpsZ6wuVKP12mdnTFZIPPX5LIar7vtFt4vcmz0ecNkyTr37duZixC94EBomib7xqqmQoJMuJR7yhqqLOAaYyJPZeid6L%2BJZ6QTbrYU5GIwCv0zVSrfJxgHTjg9vaAPLffAMaKsFuoBAqHSVa8QaQMs0RJuhd8FQ7avCvuQh1S%2B5ehnMsFkpVwu6wM70vQh2qt5pzV0CbzmjOhtjbX3uz5cgzAvFKfn%2BbAK6fFCsJQVEsNWjet4uHVunZ1WHJ%2B4c9fY4FvxVKNfEjFCCaYUHsY1vuXxkFGkLlo3jJ18khgrC2uYZYyfSzgPgu0KmPMvm33xDVZB15g1qnkDBC37G0vonHFllSBYR28bYCzEpbM3vTq02%2Btfehe59zKZHrFRtWg%2BQbvXh1nKjZXPZpv3AeDGNsWX4cAvoCjY6WavnQ9aM0bIpL6bYAVYMsmZSsKsdIGz5V3nme2x1s6f5wmR81zEJkU6twhkYP6i%2BnAGnauMbw8QgX2NiOum%2FcwblK56Dj8akLvDiJOjj1vnoThiww8Np6TjS1zkvEKn2HTZ8Pfnmo1sH1%2FGD4y9wwuKDbxAY6pgFXNZajwDA8zJI1tuJekpYTZjvURU7d54ygPKCIDdxWwU4J71CL29Zs1udeqcDjvBuKO3ng8UoGkE0qvh3h%2BkeiPdvskRyxmD9qt5zBaNwDGE54Hmb5UOCTNSoVwSw5xAGhJjw%2BM9d6R5Q4DADWmwxQLGbXkCnCildxaxuOrmUl7Wsno6fJW6HZBp9TtFagFTZiHVdX1DCF72IIpYTadLA2aTjZUQpO&X-Amz-Signature=8e195291509b1ee2ae2f1905a5872103a571dfd240c439fc19aa5d31a88a16aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO7J56SV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIEXLkUsTpnEEAjVZMqOG4N1D6FIVC2eAeiwe1%2FmoZFEEAiAoiaQsCY1s%2FsU2QbGM%2BKcKqYYZFd7yy5XEwW%2BbLTE9NiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBgMfMgD8hWpeSjrMKtwD5AwvkSSrcyUKv1YxFFATS3CJzDdbGYijZyF0cwlrWgiS%2FJjz95KNafMyNL3KphbBRPT3bpsZ6wuVKP12mdnTFZIPPX5LIar7vtFt4vcmz0ecNkyTr37duZixC94EBomib7xqqmQoJMuJR7yhqqLOAaYyJPZeid6L%2BJZ6QTbrYU5GIwCv0zVSrfJxgHTjg9vaAPLffAMaKsFuoBAqHSVa8QaQMs0RJuhd8FQ7avCvuQh1S%2B5ehnMsFkpVwu6wM70vQh2qt5pzV0CbzmjOhtjbX3uz5cgzAvFKfn%2BbAK6fFCsJQVEsNWjet4uHVunZ1WHJ%2B4c9fY4FvxVKNfEjFCCaYUHsY1vuXxkFGkLlo3jJ18khgrC2uYZYyfSzgPgu0KmPMvm33xDVZB15g1qnkDBC37G0vonHFllSBYR28bYCzEpbM3vTq02%2Btfehe59zKZHrFRtWg%2BQbvXh1nKjZXPZpv3AeDGNsWX4cAvoCjY6WavnQ9aM0bIpL6bYAVYMsmZSsKsdIGz5V3nme2x1s6f5wmR81zEJkU6twhkYP6i%2BnAGnauMbw8QgX2NiOum%2FcwblK56Dj8akLvDiJOjj1vnoThiww8Np6TjS1zkvEKn2HTZ8Pfnmo1sH1%2FGD4y9wwuKDbxAY6pgFXNZajwDA8zJI1tuJekpYTZjvURU7d54ygPKCIDdxWwU4J71CL29Zs1udeqcDjvBuKO3ng8UoGkE0qvh3h%2BkeiPdvskRyxmD9qt5zBaNwDGE54Hmb5UOCTNSoVwSw5xAGhJjw%2BM9d6R5Q4DADWmwxQLGbXkCnCildxaxuOrmUl7Wsno6fJW6HZBp9TtFagFTZiHVdX1DCF72IIpYTadLA2aTjZUQpO&X-Amz-Signature=b05affa5b4c9af96a5a2ea8714992cb7885e0c793284be519afa186808bb1112&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO7J56SV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIEXLkUsTpnEEAjVZMqOG4N1D6FIVC2eAeiwe1%2FmoZFEEAiAoiaQsCY1s%2FsU2QbGM%2BKcKqYYZFd7yy5XEwW%2BbLTE9NiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBgMfMgD8hWpeSjrMKtwD5AwvkSSrcyUKv1YxFFATS3CJzDdbGYijZyF0cwlrWgiS%2FJjz95KNafMyNL3KphbBRPT3bpsZ6wuVKP12mdnTFZIPPX5LIar7vtFt4vcmz0ecNkyTr37duZixC94EBomib7xqqmQoJMuJR7yhqqLOAaYyJPZeid6L%2BJZ6QTbrYU5GIwCv0zVSrfJxgHTjg9vaAPLffAMaKsFuoBAqHSVa8QaQMs0RJuhd8FQ7avCvuQh1S%2B5ehnMsFkpVwu6wM70vQh2qt5pzV0CbzmjOhtjbX3uz5cgzAvFKfn%2BbAK6fFCsJQVEsNWjet4uHVunZ1WHJ%2B4c9fY4FvxVKNfEjFCCaYUHsY1vuXxkFGkLlo3jJ18khgrC2uYZYyfSzgPgu0KmPMvm33xDVZB15g1qnkDBC37G0vonHFllSBYR28bYCzEpbM3vTq02%2Btfehe59zKZHrFRtWg%2BQbvXh1nKjZXPZpv3AeDGNsWX4cAvoCjY6WavnQ9aM0bIpL6bYAVYMsmZSsKsdIGz5V3nme2x1s6f5wmR81zEJkU6twhkYP6i%2BnAGnauMbw8QgX2NiOum%2FcwblK56Dj8akLvDiJOjj1vnoThiww8Np6TjS1zkvEKn2HTZ8Pfnmo1sH1%2FGD4y9wwuKDbxAY6pgFXNZajwDA8zJI1tuJekpYTZjvURU7d54ygPKCIDdxWwU4J71CL29Zs1udeqcDjvBuKO3ng8UoGkE0qvh3h%2BkeiPdvskRyxmD9qt5zBaNwDGE54Hmb5UOCTNSoVwSw5xAGhJjw%2BM9d6R5Q4DADWmwxQLGbXkCnCildxaxuOrmUl7Wsno6fJW6HZBp9TtFagFTZiHVdX1DCF72IIpYTadLA2aTjZUQpO&X-Amz-Signature=c862d1365d06873c7c4095f934cc63d23701acd4140e211b0a273c7fe01d7804&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO7J56SV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIEXLkUsTpnEEAjVZMqOG4N1D6FIVC2eAeiwe1%2FmoZFEEAiAoiaQsCY1s%2FsU2QbGM%2BKcKqYYZFd7yy5XEwW%2BbLTE9NiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBgMfMgD8hWpeSjrMKtwD5AwvkSSrcyUKv1YxFFATS3CJzDdbGYijZyF0cwlrWgiS%2FJjz95KNafMyNL3KphbBRPT3bpsZ6wuVKP12mdnTFZIPPX5LIar7vtFt4vcmz0ecNkyTr37duZixC94EBomib7xqqmQoJMuJR7yhqqLOAaYyJPZeid6L%2BJZ6QTbrYU5GIwCv0zVSrfJxgHTjg9vaAPLffAMaKsFuoBAqHSVa8QaQMs0RJuhd8FQ7avCvuQh1S%2B5ehnMsFkpVwu6wM70vQh2qt5pzV0CbzmjOhtjbX3uz5cgzAvFKfn%2BbAK6fFCsJQVEsNWjet4uHVunZ1WHJ%2B4c9fY4FvxVKNfEjFCCaYUHsY1vuXxkFGkLlo3jJ18khgrC2uYZYyfSzgPgu0KmPMvm33xDVZB15g1qnkDBC37G0vonHFllSBYR28bYCzEpbM3vTq02%2Btfehe59zKZHrFRtWg%2BQbvXh1nKjZXPZpv3AeDGNsWX4cAvoCjY6WavnQ9aM0bIpL6bYAVYMsmZSsKsdIGz5V3nme2x1s6f5wmR81zEJkU6twhkYP6i%2BnAGnauMbw8QgX2NiOum%2FcwblK56Dj8akLvDiJOjj1vnoThiww8Np6TjS1zkvEKn2HTZ8Pfnmo1sH1%2FGD4y9wwuKDbxAY6pgFXNZajwDA8zJI1tuJekpYTZjvURU7d54ygPKCIDdxWwU4J71CL29Zs1udeqcDjvBuKO3ng8UoGkE0qvh3h%2BkeiPdvskRyxmD9qt5zBaNwDGE54Hmb5UOCTNSoVwSw5xAGhJjw%2BM9d6R5Q4DADWmwxQLGbXkCnCildxaxuOrmUl7Wsno6fJW6HZBp9TtFagFTZiHVdX1DCF72IIpYTadLA2aTjZUQpO&X-Amz-Signature=4495fb279547d6294107fb8c4a7c91ff87f666f67e4fa7247ef73ad69e66f63b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO7J56SV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIEXLkUsTpnEEAjVZMqOG4N1D6FIVC2eAeiwe1%2FmoZFEEAiAoiaQsCY1s%2FsU2QbGM%2BKcKqYYZFd7yy5XEwW%2BbLTE9NiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBgMfMgD8hWpeSjrMKtwD5AwvkSSrcyUKv1YxFFATS3CJzDdbGYijZyF0cwlrWgiS%2FJjz95KNafMyNL3KphbBRPT3bpsZ6wuVKP12mdnTFZIPPX5LIar7vtFt4vcmz0ecNkyTr37duZixC94EBomib7xqqmQoJMuJR7yhqqLOAaYyJPZeid6L%2BJZ6QTbrYU5GIwCv0zVSrfJxgHTjg9vaAPLffAMaKsFuoBAqHSVa8QaQMs0RJuhd8FQ7avCvuQh1S%2B5ehnMsFkpVwu6wM70vQh2qt5pzV0CbzmjOhtjbX3uz5cgzAvFKfn%2BbAK6fFCsJQVEsNWjet4uHVunZ1WHJ%2B4c9fY4FvxVKNfEjFCCaYUHsY1vuXxkFGkLlo3jJ18khgrC2uYZYyfSzgPgu0KmPMvm33xDVZB15g1qnkDBC37G0vonHFllSBYR28bYCzEpbM3vTq02%2Btfehe59zKZHrFRtWg%2BQbvXh1nKjZXPZpv3AeDGNsWX4cAvoCjY6WavnQ9aM0bIpL6bYAVYMsmZSsKsdIGz5V3nme2x1s6f5wmR81zEJkU6twhkYP6i%2BnAGnauMbw8QgX2NiOum%2FcwblK56Dj8akLvDiJOjj1vnoThiww8Np6TjS1zkvEKn2HTZ8Pfnmo1sH1%2FGD4y9wwuKDbxAY6pgFXNZajwDA8zJI1tuJekpYTZjvURU7d54ygPKCIDdxWwU4J71CL29Zs1udeqcDjvBuKO3ng8UoGkE0qvh3h%2BkeiPdvskRyxmD9qt5zBaNwDGE54Hmb5UOCTNSoVwSw5xAGhJjw%2BM9d6R5Q4DADWmwxQLGbXkCnCildxaxuOrmUl7Wsno6fJW6HZBp9TtFagFTZiHVdX1DCF72IIpYTadLA2aTjZUQpO&X-Amz-Signature=24e587d82098ef2d574c3fd30d49f550abb0a41df18e8cb6dca0fd282359f03b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO7J56SV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIEXLkUsTpnEEAjVZMqOG4N1D6FIVC2eAeiwe1%2FmoZFEEAiAoiaQsCY1s%2FsU2QbGM%2BKcKqYYZFd7yy5XEwW%2BbLTE9NiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBgMfMgD8hWpeSjrMKtwD5AwvkSSrcyUKv1YxFFATS3CJzDdbGYijZyF0cwlrWgiS%2FJjz95KNafMyNL3KphbBRPT3bpsZ6wuVKP12mdnTFZIPPX5LIar7vtFt4vcmz0ecNkyTr37duZixC94EBomib7xqqmQoJMuJR7yhqqLOAaYyJPZeid6L%2BJZ6QTbrYU5GIwCv0zVSrfJxgHTjg9vaAPLffAMaKsFuoBAqHSVa8QaQMs0RJuhd8FQ7avCvuQh1S%2B5ehnMsFkpVwu6wM70vQh2qt5pzV0CbzmjOhtjbX3uz5cgzAvFKfn%2BbAK6fFCsJQVEsNWjet4uHVunZ1WHJ%2B4c9fY4FvxVKNfEjFCCaYUHsY1vuXxkFGkLlo3jJ18khgrC2uYZYyfSzgPgu0KmPMvm33xDVZB15g1qnkDBC37G0vonHFllSBYR28bYCzEpbM3vTq02%2Btfehe59zKZHrFRtWg%2BQbvXh1nKjZXPZpv3AeDGNsWX4cAvoCjY6WavnQ9aM0bIpL6bYAVYMsmZSsKsdIGz5V3nme2x1s6f5wmR81zEJkU6twhkYP6i%2BnAGnauMbw8QgX2NiOum%2FcwblK56Dj8akLvDiJOjj1vnoThiww8Np6TjS1zkvEKn2HTZ8Pfnmo1sH1%2FGD4y9wwuKDbxAY6pgFXNZajwDA8zJI1tuJekpYTZjvURU7d54ygPKCIDdxWwU4J71CL29Zs1udeqcDjvBuKO3ng8UoGkE0qvh3h%2BkeiPdvskRyxmD9qt5zBaNwDGE54Hmb5UOCTNSoVwSw5xAGhJjw%2BM9d6R5Q4DADWmwxQLGbXkCnCildxaxuOrmUl7Wsno6fJW6HZBp9TtFagFTZiHVdX1DCF72IIpYTadLA2aTjZUQpO&X-Amz-Signature=6f5c61c4c2acc231e6b26c80b61dcbeb27e0c54115842a1a3b91772ba78eb12a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO7J56SV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIEXLkUsTpnEEAjVZMqOG4N1D6FIVC2eAeiwe1%2FmoZFEEAiAoiaQsCY1s%2FsU2QbGM%2BKcKqYYZFd7yy5XEwW%2BbLTE9NiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBgMfMgD8hWpeSjrMKtwD5AwvkSSrcyUKv1YxFFATS3CJzDdbGYijZyF0cwlrWgiS%2FJjz95KNafMyNL3KphbBRPT3bpsZ6wuVKP12mdnTFZIPPX5LIar7vtFt4vcmz0ecNkyTr37duZixC94EBomib7xqqmQoJMuJR7yhqqLOAaYyJPZeid6L%2BJZ6QTbrYU5GIwCv0zVSrfJxgHTjg9vaAPLffAMaKsFuoBAqHSVa8QaQMs0RJuhd8FQ7avCvuQh1S%2B5ehnMsFkpVwu6wM70vQh2qt5pzV0CbzmjOhtjbX3uz5cgzAvFKfn%2BbAK6fFCsJQVEsNWjet4uHVunZ1WHJ%2B4c9fY4FvxVKNfEjFCCaYUHsY1vuXxkFGkLlo3jJ18khgrC2uYZYyfSzgPgu0KmPMvm33xDVZB15g1qnkDBC37G0vonHFllSBYR28bYCzEpbM3vTq02%2Btfehe59zKZHrFRtWg%2BQbvXh1nKjZXPZpv3AeDGNsWX4cAvoCjY6WavnQ9aM0bIpL6bYAVYMsmZSsKsdIGz5V3nme2x1s6f5wmR81zEJkU6twhkYP6i%2BnAGnauMbw8QgX2NiOum%2FcwblK56Dj8akLvDiJOjj1vnoThiww8Np6TjS1zkvEKn2HTZ8Pfnmo1sH1%2FGD4y9wwuKDbxAY6pgFXNZajwDA8zJI1tuJekpYTZjvURU7d54ygPKCIDdxWwU4J71CL29Zs1udeqcDjvBuKO3ng8UoGkE0qvh3h%2BkeiPdvskRyxmD9qt5zBaNwDGE54Hmb5UOCTNSoVwSw5xAGhJjw%2BM9d6R5Q4DADWmwxQLGbXkCnCildxaxuOrmUl7Wsno6fJW6HZBp9TtFagFTZiHVdX1DCF72IIpYTadLA2aTjZUQpO&X-Amz-Signature=06c11295880dc6b79f1768af17a2e65569f853dc3d42d150cf0f256c143136f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO7J56SV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIEXLkUsTpnEEAjVZMqOG4N1D6FIVC2eAeiwe1%2FmoZFEEAiAoiaQsCY1s%2FsU2QbGM%2BKcKqYYZFd7yy5XEwW%2BbLTE9NiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBgMfMgD8hWpeSjrMKtwD5AwvkSSrcyUKv1YxFFATS3CJzDdbGYijZyF0cwlrWgiS%2FJjz95KNafMyNL3KphbBRPT3bpsZ6wuVKP12mdnTFZIPPX5LIar7vtFt4vcmz0ecNkyTr37duZixC94EBomib7xqqmQoJMuJR7yhqqLOAaYyJPZeid6L%2BJZ6QTbrYU5GIwCv0zVSrfJxgHTjg9vaAPLffAMaKsFuoBAqHSVa8QaQMs0RJuhd8FQ7avCvuQh1S%2B5ehnMsFkpVwu6wM70vQh2qt5pzV0CbzmjOhtjbX3uz5cgzAvFKfn%2BbAK6fFCsJQVEsNWjet4uHVunZ1WHJ%2B4c9fY4FvxVKNfEjFCCaYUHsY1vuXxkFGkLlo3jJ18khgrC2uYZYyfSzgPgu0KmPMvm33xDVZB15g1qnkDBC37G0vonHFllSBYR28bYCzEpbM3vTq02%2Btfehe59zKZHrFRtWg%2BQbvXh1nKjZXPZpv3AeDGNsWX4cAvoCjY6WavnQ9aM0bIpL6bYAVYMsmZSsKsdIGz5V3nme2x1s6f5wmR81zEJkU6twhkYP6i%2BnAGnauMbw8QgX2NiOum%2FcwblK56Dj8akLvDiJOjj1vnoThiww8Np6TjS1zkvEKn2HTZ8Pfnmo1sH1%2FGD4y9wwuKDbxAY6pgFXNZajwDA8zJI1tuJekpYTZjvURU7d54ygPKCIDdxWwU4J71CL29Zs1udeqcDjvBuKO3ng8UoGkE0qvh3h%2BkeiPdvskRyxmD9qt5zBaNwDGE54Hmb5UOCTNSoVwSw5xAGhJjw%2BM9d6R5Q4DADWmwxQLGbXkCnCildxaxuOrmUl7Wsno6fJW6HZBp9TtFagFTZiHVdX1DCF72IIpYTadLA2aTjZUQpO&X-Amz-Signature=daa8a0871426c64abd8629aba2a8551973a8ac44caaab3d01b35e189477c5ce1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO7J56SV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIEXLkUsTpnEEAjVZMqOG4N1D6FIVC2eAeiwe1%2FmoZFEEAiAoiaQsCY1s%2FsU2QbGM%2BKcKqYYZFd7yy5XEwW%2BbLTE9NiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBgMfMgD8hWpeSjrMKtwD5AwvkSSrcyUKv1YxFFATS3CJzDdbGYijZyF0cwlrWgiS%2FJjz95KNafMyNL3KphbBRPT3bpsZ6wuVKP12mdnTFZIPPX5LIar7vtFt4vcmz0ecNkyTr37duZixC94EBomib7xqqmQoJMuJR7yhqqLOAaYyJPZeid6L%2BJZ6QTbrYU5GIwCv0zVSrfJxgHTjg9vaAPLffAMaKsFuoBAqHSVa8QaQMs0RJuhd8FQ7avCvuQh1S%2B5ehnMsFkpVwu6wM70vQh2qt5pzV0CbzmjOhtjbX3uz5cgzAvFKfn%2BbAK6fFCsJQVEsNWjet4uHVunZ1WHJ%2B4c9fY4FvxVKNfEjFCCaYUHsY1vuXxkFGkLlo3jJ18khgrC2uYZYyfSzgPgu0KmPMvm33xDVZB15g1qnkDBC37G0vonHFllSBYR28bYCzEpbM3vTq02%2Btfehe59zKZHrFRtWg%2BQbvXh1nKjZXPZpv3AeDGNsWX4cAvoCjY6WavnQ9aM0bIpL6bYAVYMsmZSsKsdIGz5V3nme2x1s6f5wmR81zEJkU6twhkYP6i%2BnAGnauMbw8QgX2NiOum%2FcwblK56Dj8akLvDiJOjj1vnoThiww8Np6TjS1zkvEKn2HTZ8Pfnmo1sH1%2FGD4y9wwuKDbxAY6pgFXNZajwDA8zJI1tuJekpYTZjvURU7d54ygPKCIDdxWwU4J71CL29Zs1udeqcDjvBuKO3ng8UoGkE0qvh3h%2BkeiPdvskRyxmD9qt5zBaNwDGE54Hmb5UOCTNSoVwSw5xAGhJjw%2BM9d6R5Q4DADWmwxQLGbXkCnCildxaxuOrmUl7Wsno6fJW6HZBp9TtFagFTZiHVdX1DCF72IIpYTadLA2aTjZUQpO&X-Amz-Signature=d2fe0d5613d3d1d81a7f9e1ba8266af3a43c877417b120c365c7b2d28dfcaa25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO7J56SV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIEXLkUsTpnEEAjVZMqOG4N1D6FIVC2eAeiwe1%2FmoZFEEAiAoiaQsCY1s%2FsU2QbGM%2BKcKqYYZFd7yy5XEwW%2BbLTE9NiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBgMfMgD8hWpeSjrMKtwD5AwvkSSrcyUKv1YxFFATS3CJzDdbGYijZyF0cwlrWgiS%2FJjz95KNafMyNL3KphbBRPT3bpsZ6wuVKP12mdnTFZIPPX5LIar7vtFt4vcmz0ecNkyTr37duZixC94EBomib7xqqmQoJMuJR7yhqqLOAaYyJPZeid6L%2BJZ6QTbrYU5GIwCv0zVSrfJxgHTjg9vaAPLffAMaKsFuoBAqHSVa8QaQMs0RJuhd8FQ7avCvuQh1S%2B5ehnMsFkpVwu6wM70vQh2qt5pzV0CbzmjOhtjbX3uz5cgzAvFKfn%2BbAK6fFCsJQVEsNWjet4uHVunZ1WHJ%2B4c9fY4FvxVKNfEjFCCaYUHsY1vuXxkFGkLlo3jJ18khgrC2uYZYyfSzgPgu0KmPMvm33xDVZB15g1qnkDBC37G0vonHFllSBYR28bYCzEpbM3vTq02%2Btfehe59zKZHrFRtWg%2BQbvXh1nKjZXPZpv3AeDGNsWX4cAvoCjY6WavnQ9aM0bIpL6bYAVYMsmZSsKsdIGz5V3nme2x1s6f5wmR81zEJkU6twhkYP6i%2BnAGnauMbw8QgX2NiOum%2FcwblK56Dj8akLvDiJOjj1vnoThiww8Np6TjS1zkvEKn2HTZ8Pfnmo1sH1%2FGD4y9wwuKDbxAY6pgFXNZajwDA8zJI1tuJekpYTZjvURU7d54ygPKCIDdxWwU4J71CL29Zs1udeqcDjvBuKO3ng8UoGkE0qvh3h%2BkeiPdvskRyxmD9qt5zBaNwDGE54Hmb5UOCTNSoVwSw5xAGhJjw%2BM9d6R5Q4DADWmwxQLGbXkCnCildxaxuOrmUl7Wsno6fJW6HZBp9TtFagFTZiHVdX1DCF72IIpYTadLA2aTjZUQpO&X-Amz-Signature=34fb2d913d98bd22bc201f3218bc7f8d0353d5fed00492aef8a658511d9cee8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO7J56SV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIEXLkUsTpnEEAjVZMqOG4N1D6FIVC2eAeiwe1%2FmoZFEEAiAoiaQsCY1s%2FsU2QbGM%2BKcKqYYZFd7yy5XEwW%2BbLTE9NiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBgMfMgD8hWpeSjrMKtwD5AwvkSSrcyUKv1YxFFATS3CJzDdbGYijZyF0cwlrWgiS%2FJjz95KNafMyNL3KphbBRPT3bpsZ6wuVKP12mdnTFZIPPX5LIar7vtFt4vcmz0ecNkyTr37duZixC94EBomib7xqqmQoJMuJR7yhqqLOAaYyJPZeid6L%2BJZ6QTbrYU5GIwCv0zVSrfJxgHTjg9vaAPLffAMaKsFuoBAqHSVa8QaQMs0RJuhd8FQ7avCvuQh1S%2B5ehnMsFkpVwu6wM70vQh2qt5pzV0CbzmjOhtjbX3uz5cgzAvFKfn%2BbAK6fFCsJQVEsNWjet4uHVunZ1WHJ%2B4c9fY4FvxVKNfEjFCCaYUHsY1vuXxkFGkLlo3jJ18khgrC2uYZYyfSzgPgu0KmPMvm33xDVZB15g1qnkDBC37G0vonHFllSBYR28bYCzEpbM3vTq02%2Btfehe59zKZHrFRtWg%2BQbvXh1nKjZXPZpv3AeDGNsWX4cAvoCjY6WavnQ9aM0bIpL6bYAVYMsmZSsKsdIGz5V3nme2x1s6f5wmR81zEJkU6twhkYP6i%2BnAGnauMbw8QgX2NiOum%2FcwblK56Dj8akLvDiJOjj1vnoThiww8Np6TjS1zkvEKn2HTZ8Pfnmo1sH1%2FGD4y9wwuKDbxAY6pgFXNZajwDA8zJI1tuJekpYTZjvURU7d54ygPKCIDdxWwU4J71CL29Zs1udeqcDjvBuKO3ng8UoGkE0qvh3h%2BkeiPdvskRyxmD9qt5zBaNwDGE54Hmb5UOCTNSoVwSw5xAGhJjw%2BM9d6R5Q4DADWmwxQLGbXkCnCildxaxuOrmUl7Wsno6fJW6HZBp9TtFagFTZiHVdX1DCF72IIpYTadLA2aTjZUQpO&X-Amz-Signature=ff0d04bb51bc243f413dbeada1beb5a1384bb979e4e42fdcbf40d671a6adb60a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO7J56SV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIEXLkUsTpnEEAjVZMqOG4N1D6FIVC2eAeiwe1%2FmoZFEEAiAoiaQsCY1s%2FsU2QbGM%2BKcKqYYZFd7yy5XEwW%2BbLTE9NiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBgMfMgD8hWpeSjrMKtwD5AwvkSSrcyUKv1YxFFATS3CJzDdbGYijZyF0cwlrWgiS%2FJjz95KNafMyNL3KphbBRPT3bpsZ6wuVKP12mdnTFZIPPX5LIar7vtFt4vcmz0ecNkyTr37duZixC94EBomib7xqqmQoJMuJR7yhqqLOAaYyJPZeid6L%2BJZ6QTbrYU5GIwCv0zVSrfJxgHTjg9vaAPLffAMaKsFuoBAqHSVa8QaQMs0RJuhd8FQ7avCvuQh1S%2B5ehnMsFkpVwu6wM70vQh2qt5pzV0CbzmjOhtjbX3uz5cgzAvFKfn%2BbAK6fFCsJQVEsNWjet4uHVunZ1WHJ%2B4c9fY4FvxVKNfEjFCCaYUHsY1vuXxkFGkLlo3jJ18khgrC2uYZYyfSzgPgu0KmPMvm33xDVZB15g1qnkDBC37G0vonHFllSBYR28bYCzEpbM3vTq02%2Btfehe59zKZHrFRtWg%2BQbvXh1nKjZXPZpv3AeDGNsWX4cAvoCjY6WavnQ9aM0bIpL6bYAVYMsmZSsKsdIGz5V3nme2x1s6f5wmR81zEJkU6twhkYP6i%2BnAGnauMbw8QgX2NiOum%2FcwblK56Dj8akLvDiJOjj1vnoThiww8Np6TjS1zkvEKn2HTZ8Pfnmo1sH1%2FGD4y9wwuKDbxAY6pgFXNZajwDA8zJI1tuJekpYTZjvURU7d54ygPKCIDdxWwU4J71CL29Zs1udeqcDjvBuKO3ng8UoGkE0qvh3h%2BkeiPdvskRyxmD9qt5zBaNwDGE54Hmb5UOCTNSoVwSw5xAGhJjw%2BM9d6R5Q4DADWmwxQLGbXkCnCildxaxuOrmUl7Wsno6fJW6HZBp9TtFagFTZiHVdX1DCF72IIpYTadLA2aTjZUQpO&X-Amz-Signature=44d61adc0075a8d9a1fcebed039cc44d0946baab97e80e11af89beaa1e1c305a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO7J56SV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIEXLkUsTpnEEAjVZMqOG4N1D6FIVC2eAeiwe1%2FmoZFEEAiAoiaQsCY1s%2FsU2QbGM%2BKcKqYYZFd7yy5XEwW%2BbLTE9NiqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBgMfMgD8hWpeSjrMKtwD5AwvkSSrcyUKv1YxFFATS3CJzDdbGYijZyF0cwlrWgiS%2FJjz95KNafMyNL3KphbBRPT3bpsZ6wuVKP12mdnTFZIPPX5LIar7vtFt4vcmz0ecNkyTr37duZixC94EBomib7xqqmQoJMuJR7yhqqLOAaYyJPZeid6L%2BJZ6QTbrYU5GIwCv0zVSrfJxgHTjg9vaAPLffAMaKsFuoBAqHSVa8QaQMs0RJuhd8FQ7avCvuQh1S%2B5ehnMsFkpVwu6wM70vQh2qt5pzV0CbzmjOhtjbX3uz5cgzAvFKfn%2BbAK6fFCsJQVEsNWjet4uHVunZ1WHJ%2B4c9fY4FvxVKNfEjFCCaYUHsY1vuXxkFGkLlo3jJ18khgrC2uYZYyfSzgPgu0KmPMvm33xDVZB15g1qnkDBC37G0vonHFllSBYR28bYCzEpbM3vTq02%2Btfehe59zKZHrFRtWg%2BQbvXh1nKjZXPZpv3AeDGNsWX4cAvoCjY6WavnQ9aM0bIpL6bYAVYMsmZSsKsdIGz5V3nme2x1s6f5wmR81zEJkU6twhkYP6i%2BnAGnauMbw8QgX2NiOum%2FcwblK56Dj8akLvDiJOjj1vnoThiww8Np6TjS1zkvEKn2HTZ8Pfnmo1sH1%2FGD4y9wwuKDbxAY6pgFXNZajwDA8zJI1tuJekpYTZjvURU7d54ygPKCIDdxWwU4J71CL29Zs1udeqcDjvBuKO3ng8UoGkE0qvh3h%2BkeiPdvskRyxmD9qt5zBaNwDGE54Hmb5UOCTNSoVwSw5xAGhJjw%2BM9d6R5Q4DADWmwxQLGbXkCnCildxaxuOrmUl7Wsno6fJW6HZBp9TtFagFTZiHVdX1DCF72IIpYTadLA2aTjZUQpO&X-Amz-Signature=c631286f4a72cddb0d571a1d63f92e7bb07ed9fab1e8fd7a24fae114a681d4a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
