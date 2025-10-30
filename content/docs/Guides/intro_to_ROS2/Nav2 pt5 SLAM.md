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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B3PGG5F%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIGGo1uxApiWF6EgPOc0ZaJwtMGUdrVXpMN40SUp5silvAiBflFdUvQ3N67%2FYPK4uhd0nLn%2BFVpUou4yrDnUJVF9PAyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc6rtZFyebnxNAdQOKtwD8Do1vnOFzZqC%2B9DU5o8Yq3icucAAuTE%2FnAopvWaDxiPSeQvhbKX%2F1%2BqOTr57vXgmu4EqVeYTycHQtNeLYjYJbBoEbnSJIDiHLPxWMQzEtA6Cjp181UE%2BBKVWDVK20KDlgDsfOyWS%2FtwGOOCvTiZr1uyBE45ekVO5AK%2B7KyjG6AhIr%2FmknmJ2DBpTupuyf4Al%2FFP9Gei33FnhEAhHy9PweGi6C%2BRNsarUZU4XMrfFA%2BY%2F0rBYjMrbANUUDyv9kymKBvTQkbgwplDJKtb8Mf3qKo6Kuwkp13M2cSGvOxntFOVvjRzRy1VDmNJg3K8vW5hyHHMusZI3Uq6iUHcLvlt44WqZVw%2F3nvSs8XX8rFlf9K4IMqs22GUXwf24pO0ulsIi94GlYgCF3DMaYernhhDvlUGdEcQnixaLB%2FbIwY%2FOQU%2FWSwuYU21q4ybAzzoIFsgrcBjMnjwD8QPq6JsCky%2FXqfLqmL8EF4ZQ3jsfky1mb07JgosXat4Z9MmEXW0rWYJh1HJTGEdwaQY6JVYn6M%2BwjZh8jnwqqxcV9A1h9td6qAYFfTHpfvtN28BWVSIvh7NFZT5q2mnTzdjyeZuswsuz4sbq%2B2wsLrbi4xLHG8eXJKbXkMg1wO1ZZjM4H6cwoPWKyAY6pgHiSdqUWWQnBm1AyanuG5ZjFMx054mMdXA4inqYjGixw%2B5LspDsdWUbLrE1%2FE6ZpkOLqCAbU8bTmhNrhtqRMbZ9VsCea%2BRri2sc6vzk6H%2FuYERKRa%2FzM1jJ%2B3iRT2qEiMCRffQQXynnVyh2YzefBH9Sr6jmL7%2FAxfpsYAB5o6LWvnJ0hOat56MVCpuYBTEj93rBWgSxdewx3fHNK0dt%2BeM6GTBedzST&X-Amz-Signature=c9a2daf82913a2d53850028f4774566d56a75a698a7d4d9eaaac2af95001652f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B3PGG5F%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIGGo1uxApiWF6EgPOc0ZaJwtMGUdrVXpMN40SUp5silvAiBflFdUvQ3N67%2FYPK4uhd0nLn%2BFVpUou4yrDnUJVF9PAyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc6rtZFyebnxNAdQOKtwD8Do1vnOFzZqC%2B9DU5o8Yq3icucAAuTE%2FnAopvWaDxiPSeQvhbKX%2F1%2BqOTr57vXgmu4EqVeYTycHQtNeLYjYJbBoEbnSJIDiHLPxWMQzEtA6Cjp181UE%2BBKVWDVK20KDlgDsfOyWS%2FtwGOOCvTiZr1uyBE45ekVO5AK%2B7KyjG6AhIr%2FmknmJ2DBpTupuyf4Al%2FFP9Gei33FnhEAhHy9PweGi6C%2BRNsarUZU4XMrfFA%2BY%2F0rBYjMrbANUUDyv9kymKBvTQkbgwplDJKtb8Mf3qKo6Kuwkp13M2cSGvOxntFOVvjRzRy1VDmNJg3K8vW5hyHHMusZI3Uq6iUHcLvlt44WqZVw%2F3nvSs8XX8rFlf9K4IMqs22GUXwf24pO0ulsIi94GlYgCF3DMaYernhhDvlUGdEcQnixaLB%2FbIwY%2FOQU%2FWSwuYU21q4ybAzzoIFsgrcBjMnjwD8QPq6JsCky%2FXqfLqmL8EF4ZQ3jsfky1mb07JgosXat4Z9MmEXW0rWYJh1HJTGEdwaQY6JVYn6M%2BwjZh8jnwqqxcV9A1h9td6qAYFfTHpfvtN28BWVSIvh7NFZT5q2mnTzdjyeZuswsuz4sbq%2B2wsLrbi4xLHG8eXJKbXkMg1wO1ZZjM4H6cwoPWKyAY6pgHiSdqUWWQnBm1AyanuG5ZjFMx054mMdXA4inqYjGixw%2B5LspDsdWUbLrE1%2FE6ZpkOLqCAbU8bTmhNrhtqRMbZ9VsCea%2BRri2sc6vzk6H%2FuYERKRa%2FzM1jJ%2B3iRT2qEiMCRffQQXynnVyh2YzefBH9Sr6jmL7%2FAxfpsYAB5o6LWvnJ0hOat56MVCpuYBTEj93rBWgSxdewx3fHNK0dt%2BeM6GTBedzST&X-Amz-Signature=161c2eb29074edc99feb6597f797be356ad1b5d2f73a1570a3440c41992b98e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B3PGG5F%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIGGo1uxApiWF6EgPOc0ZaJwtMGUdrVXpMN40SUp5silvAiBflFdUvQ3N67%2FYPK4uhd0nLn%2BFVpUou4yrDnUJVF9PAyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc6rtZFyebnxNAdQOKtwD8Do1vnOFzZqC%2B9DU5o8Yq3icucAAuTE%2FnAopvWaDxiPSeQvhbKX%2F1%2BqOTr57vXgmu4EqVeYTycHQtNeLYjYJbBoEbnSJIDiHLPxWMQzEtA6Cjp181UE%2BBKVWDVK20KDlgDsfOyWS%2FtwGOOCvTiZr1uyBE45ekVO5AK%2B7KyjG6AhIr%2FmknmJ2DBpTupuyf4Al%2FFP9Gei33FnhEAhHy9PweGi6C%2BRNsarUZU4XMrfFA%2BY%2F0rBYjMrbANUUDyv9kymKBvTQkbgwplDJKtb8Mf3qKo6Kuwkp13M2cSGvOxntFOVvjRzRy1VDmNJg3K8vW5hyHHMusZI3Uq6iUHcLvlt44WqZVw%2F3nvSs8XX8rFlf9K4IMqs22GUXwf24pO0ulsIi94GlYgCF3DMaYernhhDvlUGdEcQnixaLB%2FbIwY%2FOQU%2FWSwuYU21q4ybAzzoIFsgrcBjMnjwD8QPq6JsCky%2FXqfLqmL8EF4ZQ3jsfky1mb07JgosXat4Z9MmEXW0rWYJh1HJTGEdwaQY6JVYn6M%2BwjZh8jnwqqxcV9A1h9td6qAYFfTHpfvtN28BWVSIvh7NFZT5q2mnTzdjyeZuswsuz4sbq%2B2wsLrbi4xLHG8eXJKbXkMg1wO1ZZjM4H6cwoPWKyAY6pgHiSdqUWWQnBm1AyanuG5ZjFMx054mMdXA4inqYjGixw%2B5LspDsdWUbLrE1%2FE6ZpkOLqCAbU8bTmhNrhtqRMbZ9VsCea%2BRri2sc6vzk6H%2FuYERKRa%2FzM1jJ%2B3iRT2qEiMCRffQQXynnVyh2YzefBH9Sr6jmL7%2FAxfpsYAB5o6LWvnJ0hOat56MVCpuYBTEj93rBWgSxdewx3fHNK0dt%2BeM6GTBedzST&X-Amz-Signature=5f16c25a750b7f39f52f437c8a4e7ab6a13ddc4c52977394f20e2b32dbeecdc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B3PGG5F%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIGGo1uxApiWF6EgPOc0ZaJwtMGUdrVXpMN40SUp5silvAiBflFdUvQ3N67%2FYPK4uhd0nLn%2BFVpUou4yrDnUJVF9PAyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc6rtZFyebnxNAdQOKtwD8Do1vnOFzZqC%2B9DU5o8Yq3icucAAuTE%2FnAopvWaDxiPSeQvhbKX%2F1%2BqOTr57vXgmu4EqVeYTycHQtNeLYjYJbBoEbnSJIDiHLPxWMQzEtA6Cjp181UE%2BBKVWDVK20KDlgDsfOyWS%2FtwGOOCvTiZr1uyBE45ekVO5AK%2B7KyjG6AhIr%2FmknmJ2DBpTupuyf4Al%2FFP9Gei33FnhEAhHy9PweGi6C%2BRNsarUZU4XMrfFA%2BY%2F0rBYjMrbANUUDyv9kymKBvTQkbgwplDJKtb8Mf3qKo6Kuwkp13M2cSGvOxntFOVvjRzRy1VDmNJg3K8vW5hyHHMusZI3Uq6iUHcLvlt44WqZVw%2F3nvSs8XX8rFlf9K4IMqs22GUXwf24pO0ulsIi94GlYgCF3DMaYernhhDvlUGdEcQnixaLB%2FbIwY%2FOQU%2FWSwuYU21q4ybAzzoIFsgrcBjMnjwD8QPq6JsCky%2FXqfLqmL8EF4ZQ3jsfky1mb07JgosXat4Z9MmEXW0rWYJh1HJTGEdwaQY6JVYn6M%2BwjZh8jnwqqxcV9A1h9td6qAYFfTHpfvtN28BWVSIvh7NFZT5q2mnTzdjyeZuswsuz4sbq%2B2wsLrbi4xLHG8eXJKbXkMg1wO1ZZjM4H6cwoPWKyAY6pgHiSdqUWWQnBm1AyanuG5ZjFMx054mMdXA4inqYjGixw%2B5LspDsdWUbLrE1%2FE6ZpkOLqCAbU8bTmhNrhtqRMbZ9VsCea%2BRri2sc6vzk6H%2FuYERKRa%2FzM1jJ%2B3iRT2qEiMCRffQQXynnVyh2YzefBH9Sr6jmL7%2FAxfpsYAB5o6LWvnJ0hOat56MVCpuYBTEj93rBWgSxdewx3fHNK0dt%2BeM6GTBedzST&X-Amz-Signature=1059e785015b33ea99a8c98f910a5c51f1f6f7eb70aa307c0d788472c5e44c3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B3PGG5F%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIGGo1uxApiWF6EgPOc0ZaJwtMGUdrVXpMN40SUp5silvAiBflFdUvQ3N67%2FYPK4uhd0nLn%2BFVpUou4yrDnUJVF9PAyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc6rtZFyebnxNAdQOKtwD8Do1vnOFzZqC%2B9DU5o8Yq3icucAAuTE%2FnAopvWaDxiPSeQvhbKX%2F1%2BqOTr57vXgmu4EqVeYTycHQtNeLYjYJbBoEbnSJIDiHLPxWMQzEtA6Cjp181UE%2BBKVWDVK20KDlgDsfOyWS%2FtwGOOCvTiZr1uyBE45ekVO5AK%2B7KyjG6AhIr%2FmknmJ2DBpTupuyf4Al%2FFP9Gei33FnhEAhHy9PweGi6C%2BRNsarUZU4XMrfFA%2BY%2F0rBYjMrbANUUDyv9kymKBvTQkbgwplDJKtb8Mf3qKo6Kuwkp13M2cSGvOxntFOVvjRzRy1VDmNJg3K8vW5hyHHMusZI3Uq6iUHcLvlt44WqZVw%2F3nvSs8XX8rFlf9K4IMqs22GUXwf24pO0ulsIi94GlYgCF3DMaYernhhDvlUGdEcQnixaLB%2FbIwY%2FOQU%2FWSwuYU21q4ybAzzoIFsgrcBjMnjwD8QPq6JsCky%2FXqfLqmL8EF4ZQ3jsfky1mb07JgosXat4Z9MmEXW0rWYJh1HJTGEdwaQY6JVYn6M%2BwjZh8jnwqqxcV9A1h9td6qAYFfTHpfvtN28BWVSIvh7NFZT5q2mnTzdjyeZuswsuz4sbq%2B2wsLrbi4xLHG8eXJKbXkMg1wO1ZZjM4H6cwoPWKyAY6pgHiSdqUWWQnBm1AyanuG5ZjFMx054mMdXA4inqYjGixw%2B5LspDsdWUbLrE1%2FE6ZpkOLqCAbU8bTmhNrhtqRMbZ9VsCea%2BRri2sc6vzk6H%2FuYERKRa%2FzM1jJ%2B3iRT2qEiMCRffQQXynnVyh2YzefBH9Sr6jmL7%2FAxfpsYAB5o6LWvnJ0hOat56MVCpuYBTEj93rBWgSxdewx3fHNK0dt%2BeM6GTBedzST&X-Amz-Signature=4bf1cfbff1f05d6ab2154a44d5fee68893296bff7f1643ebac9975f25b151f53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B3PGG5F%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIGGo1uxApiWF6EgPOc0ZaJwtMGUdrVXpMN40SUp5silvAiBflFdUvQ3N67%2FYPK4uhd0nLn%2BFVpUou4yrDnUJVF9PAyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc6rtZFyebnxNAdQOKtwD8Do1vnOFzZqC%2B9DU5o8Yq3icucAAuTE%2FnAopvWaDxiPSeQvhbKX%2F1%2BqOTr57vXgmu4EqVeYTycHQtNeLYjYJbBoEbnSJIDiHLPxWMQzEtA6Cjp181UE%2BBKVWDVK20KDlgDsfOyWS%2FtwGOOCvTiZr1uyBE45ekVO5AK%2B7KyjG6AhIr%2FmknmJ2DBpTupuyf4Al%2FFP9Gei33FnhEAhHy9PweGi6C%2BRNsarUZU4XMrfFA%2BY%2F0rBYjMrbANUUDyv9kymKBvTQkbgwplDJKtb8Mf3qKo6Kuwkp13M2cSGvOxntFOVvjRzRy1VDmNJg3K8vW5hyHHMusZI3Uq6iUHcLvlt44WqZVw%2F3nvSs8XX8rFlf9K4IMqs22GUXwf24pO0ulsIi94GlYgCF3DMaYernhhDvlUGdEcQnixaLB%2FbIwY%2FOQU%2FWSwuYU21q4ybAzzoIFsgrcBjMnjwD8QPq6JsCky%2FXqfLqmL8EF4ZQ3jsfky1mb07JgosXat4Z9MmEXW0rWYJh1HJTGEdwaQY6JVYn6M%2BwjZh8jnwqqxcV9A1h9td6qAYFfTHpfvtN28BWVSIvh7NFZT5q2mnTzdjyeZuswsuz4sbq%2B2wsLrbi4xLHG8eXJKbXkMg1wO1ZZjM4H6cwoPWKyAY6pgHiSdqUWWQnBm1AyanuG5ZjFMx054mMdXA4inqYjGixw%2B5LspDsdWUbLrE1%2FE6ZpkOLqCAbU8bTmhNrhtqRMbZ9VsCea%2BRri2sc6vzk6H%2FuYERKRa%2FzM1jJ%2B3iRT2qEiMCRffQQXynnVyh2YzefBH9Sr6jmL7%2FAxfpsYAB5o6LWvnJ0hOat56MVCpuYBTEj93rBWgSxdewx3fHNK0dt%2BeM6GTBedzST&X-Amz-Signature=413f5fca37df09bb451d17372ad2fa1a9bc1d7905f3d69c8306988d592d61a7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B3PGG5F%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIGGo1uxApiWF6EgPOc0ZaJwtMGUdrVXpMN40SUp5silvAiBflFdUvQ3N67%2FYPK4uhd0nLn%2BFVpUou4yrDnUJVF9PAyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc6rtZFyebnxNAdQOKtwD8Do1vnOFzZqC%2B9DU5o8Yq3icucAAuTE%2FnAopvWaDxiPSeQvhbKX%2F1%2BqOTr57vXgmu4EqVeYTycHQtNeLYjYJbBoEbnSJIDiHLPxWMQzEtA6Cjp181UE%2BBKVWDVK20KDlgDsfOyWS%2FtwGOOCvTiZr1uyBE45ekVO5AK%2B7KyjG6AhIr%2FmknmJ2DBpTupuyf4Al%2FFP9Gei33FnhEAhHy9PweGi6C%2BRNsarUZU4XMrfFA%2BY%2F0rBYjMrbANUUDyv9kymKBvTQkbgwplDJKtb8Mf3qKo6Kuwkp13M2cSGvOxntFOVvjRzRy1VDmNJg3K8vW5hyHHMusZI3Uq6iUHcLvlt44WqZVw%2F3nvSs8XX8rFlf9K4IMqs22GUXwf24pO0ulsIi94GlYgCF3DMaYernhhDvlUGdEcQnixaLB%2FbIwY%2FOQU%2FWSwuYU21q4ybAzzoIFsgrcBjMnjwD8QPq6JsCky%2FXqfLqmL8EF4ZQ3jsfky1mb07JgosXat4Z9MmEXW0rWYJh1HJTGEdwaQY6JVYn6M%2BwjZh8jnwqqxcV9A1h9td6qAYFfTHpfvtN28BWVSIvh7NFZT5q2mnTzdjyeZuswsuz4sbq%2B2wsLrbi4xLHG8eXJKbXkMg1wO1ZZjM4H6cwoPWKyAY6pgHiSdqUWWQnBm1AyanuG5ZjFMx054mMdXA4inqYjGixw%2B5LspDsdWUbLrE1%2FE6ZpkOLqCAbU8bTmhNrhtqRMbZ9VsCea%2BRri2sc6vzk6H%2FuYERKRa%2FzM1jJ%2B3iRT2qEiMCRffQQXynnVyh2YzefBH9Sr6jmL7%2FAxfpsYAB5o6LWvnJ0hOat56MVCpuYBTEj93rBWgSxdewx3fHNK0dt%2BeM6GTBedzST&X-Amz-Signature=1da4e594d8722e652725986441ef69acec75d8aa9c66890bd2647253df75e00b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B3PGG5F%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIGGo1uxApiWF6EgPOc0ZaJwtMGUdrVXpMN40SUp5silvAiBflFdUvQ3N67%2FYPK4uhd0nLn%2BFVpUou4yrDnUJVF9PAyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc6rtZFyebnxNAdQOKtwD8Do1vnOFzZqC%2B9DU5o8Yq3icucAAuTE%2FnAopvWaDxiPSeQvhbKX%2F1%2BqOTr57vXgmu4EqVeYTycHQtNeLYjYJbBoEbnSJIDiHLPxWMQzEtA6Cjp181UE%2BBKVWDVK20KDlgDsfOyWS%2FtwGOOCvTiZr1uyBE45ekVO5AK%2B7KyjG6AhIr%2FmknmJ2DBpTupuyf4Al%2FFP9Gei33FnhEAhHy9PweGi6C%2BRNsarUZU4XMrfFA%2BY%2F0rBYjMrbANUUDyv9kymKBvTQkbgwplDJKtb8Mf3qKo6Kuwkp13M2cSGvOxntFOVvjRzRy1VDmNJg3K8vW5hyHHMusZI3Uq6iUHcLvlt44WqZVw%2F3nvSs8XX8rFlf9K4IMqs22GUXwf24pO0ulsIi94GlYgCF3DMaYernhhDvlUGdEcQnixaLB%2FbIwY%2FOQU%2FWSwuYU21q4ybAzzoIFsgrcBjMnjwD8QPq6JsCky%2FXqfLqmL8EF4ZQ3jsfky1mb07JgosXat4Z9MmEXW0rWYJh1HJTGEdwaQY6JVYn6M%2BwjZh8jnwqqxcV9A1h9td6qAYFfTHpfvtN28BWVSIvh7NFZT5q2mnTzdjyeZuswsuz4sbq%2B2wsLrbi4xLHG8eXJKbXkMg1wO1ZZjM4H6cwoPWKyAY6pgHiSdqUWWQnBm1AyanuG5ZjFMx054mMdXA4inqYjGixw%2B5LspDsdWUbLrE1%2FE6ZpkOLqCAbU8bTmhNrhtqRMbZ9VsCea%2BRri2sc6vzk6H%2FuYERKRa%2FzM1jJ%2B3iRT2qEiMCRffQQXynnVyh2YzefBH9Sr6jmL7%2FAxfpsYAB5o6LWvnJ0hOat56MVCpuYBTEj93rBWgSxdewx3fHNK0dt%2BeM6GTBedzST&X-Amz-Signature=4f2e86dc442f6ac25cc1bc011f81fd130004b219fe59af5a95443265e6a21219&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B3PGG5F%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIGGo1uxApiWF6EgPOc0ZaJwtMGUdrVXpMN40SUp5silvAiBflFdUvQ3N67%2FYPK4uhd0nLn%2BFVpUou4yrDnUJVF9PAyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc6rtZFyebnxNAdQOKtwD8Do1vnOFzZqC%2B9DU5o8Yq3icucAAuTE%2FnAopvWaDxiPSeQvhbKX%2F1%2BqOTr57vXgmu4EqVeYTycHQtNeLYjYJbBoEbnSJIDiHLPxWMQzEtA6Cjp181UE%2BBKVWDVK20KDlgDsfOyWS%2FtwGOOCvTiZr1uyBE45ekVO5AK%2B7KyjG6AhIr%2FmknmJ2DBpTupuyf4Al%2FFP9Gei33FnhEAhHy9PweGi6C%2BRNsarUZU4XMrfFA%2BY%2F0rBYjMrbANUUDyv9kymKBvTQkbgwplDJKtb8Mf3qKo6Kuwkp13M2cSGvOxntFOVvjRzRy1VDmNJg3K8vW5hyHHMusZI3Uq6iUHcLvlt44WqZVw%2F3nvSs8XX8rFlf9K4IMqs22GUXwf24pO0ulsIi94GlYgCF3DMaYernhhDvlUGdEcQnixaLB%2FbIwY%2FOQU%2FWSwuYU21q4ybAzzoIFsgrcBjMnjwD8QPq6JsCky%2FXqfLqmL8EF4ZQ3jsfky1mb07JgosXat4Z9MmEXW0rWYJh1HJTGEdwaQY6JVYn6M%2BwjZh8jnwqqxcV9A1h9td6qAYFfTHpfvtN28BWVSIvh7NFZT5q2mnTzdjyeZuswsuz4sbq%2B2wsLrbi4xLHG8eXJKbXkMg1wO1ZZjM4H6cwoPWKyAY6pgHiSdqUWWQnBm1AyanuG5ZjFMx054mMdXA4inqYjGixw%2B5LspDsdWUbLrE1%2FE6ZpkOLqCAbU8bTmhNrhtqRMbZ9VsCea%2BRri2sc6vzk6H%2FuYERKRa%2FzM1jJ%2B3iRT2qEiMCRffQQXynnVyh2YzefBH9Sr6jmL7%2FAxfpsYAB5o6LWvnJ0hOat56MVCpuYBTEj93rBWgSxdewx3fHNK0dt%2BeM6GTBedzST&X-Amz-Signature=992c0c72287fa3fe65f0a71606adf2807d82fc0283211d6d1dc3d2a0ece79737&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B3PGG5F%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIGGo1uxApiWF6EgPOc0ZaJwtMGUdrVXpMN40SUp5silvAiBflFdUvQ3N67%2FYPK4uhd0nLn%2BFVpUou4yrDnUJVF9PAyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc6rtZFyebnxNAdQOKtwD8Do1vnOFzZqC%2B9DU5o8Yq3icucAAuTE%2FnAopvWaDxiPSeQvhbKX%2F1%2BqOTr57vXgmu4EqVeYTycHQtNeLYjYJbBoEbnSJIDiHLPxWMQzEtA6Cjp181UE%2BBKVWDVK20KDlgDsfOyWS%2FtwGOOCvTiZr1uyBE45ekVO5AK%2B7KyjG6AhIr%2FmknmJ2DBpTupuyf4Al%2FFP9Gei33FnhEAhHy9PweGi6C%2BRNsarUZU4XMrfFA%2BY%2F0rBYjMrbANUUDyv9kymKBvTQkbgwplDJKtb8Mf3qKo6Kuwkp13M2cSGvOxntFOVvjRzRy1VDmNJg3K8vW5hyHHMusZI3Uq6iUHcLvlt44WqZVw%2F3nvSs8XX8rFlf9K4IMqs22GUXwf24pO0ulsIi94GlYgCF3DMaYernhhDvlUGdEcQnixaLB%2FbIwY%2FOQU%2FWSwuYU21q4ybAzzoIFsgrcBjMnjwD8QPq6JsCky%2FXqfLqmL8EF4ZQ3jsfky1mb07JgosXat4Z9MmEXW0rWYJh1HJTGEdwaQY6JVYn6M%2BwjZh8jnwqqxcV9A1h9td6qAYFfTHpfvtN28BWVSIvh7NFZT5q2mnTzdjyeZuswsuz4sbq%2B2wsLrbi4xLHG8eXJKbXkMg1wO1ZZjM4H6cwoPWKyAY6pgHiSdqUWWQnBm1AyanuG5ZjFMx054mMdXA4inqYjGixw%2B5LspDsdWUbLrE1%2FE6ZpkOLqCAbU8bTmhNrhtqRMbZ9VsCea%2BRri2sc6vzk6H%2FuYERKRa%2FzM1jJ%2B3iRT2qEiMCRffQQXynnVyh2YzefBH9Sr6jmL7%2FAxfpsYAB5o6LWvnJ0hOat56MVCpuYBTEj93rBWgSxdewx3fHNK0dt%2BeM6GTBedzST&X-Amz-Signature=1ad200579e95234f8116612f8e766c50a5a7a0ea92f789ea209271556b784678&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B3PGG5F%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIGGo1uxApiWF6EgPOc0ZaJwtMGUdrVXpMN40SUp5silvAiBflFdUvQ3N67%2FYPK4uhd0nLn%2BFVpUou4yrDnUJVF9PAyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc6rtZFyebnxNAdQOKtwD8Do1vnOFzZqC%2B9DU5o8Yq3icucAAuTE%2FnAopvWaDxiPSeQvhbKX%2F1%2BqOTr57vXgmu4EqVeYTycHQtNeLYjYJbBoEbnSJIDiHLPxWMQzEtA6Cjp181UE%2BBKVWDVK20KDlgDsfOyWS%2FtwGOOCvTiZr1uyBE45ekVO5AK%2B7KyjG6AhIr%2FmknmJ2DBpTupuyf4Al%2FFP9Gei33FnhEAhHy9PweGi6C%2BRNsarUZU4XMrfFA%2BY%2F0rBYjMrbANUUDyv9kymKBvTQkbgwplDJKtb8Mf3qKo6Kuwkp13M2cSGvOxntFOVvjRzRy1VDmNJg3K8vW5hyHHMusZI3Uq6iUHcLvlt44WqZVw%2F3nvSs8XX8rFlf9K4IMqs22GUXwf24pO0ulsIi94GlYgCF3DMaYernhhDvlUGdEcQnixaLB%2FbIwY%2FOQU%2FWSwuYU21q4ybAzzoIFsgrcBjMnjwD8QPq6JsCky%2FXqfLqmL8EF4ZQ3jsfky1mb07JgosXat4Z9MmEXW0rWYJh1HJTGEdwaQY6JVYn6M%2BwjZh8jnwqqxcV9A1h9td6qAYFfTHpfvtN28BWVSIvh7NFZT5q2mnTzdjyeZuswsuz4sbq%2B2wsLrbi4xLHG8eXJKbXkMg1wO1ZZjM4H6cwoPWKyAY6pgHiSdqUWWQnBm1AyanuG5ZjFMx054mMdXA4inqYjGixw%2B5LspDsdWUbLrE1%2FE6ZpkOLqCAbU8bTmhNrhtqRMbZ9VsCea%2BRri2sc6vzk6H%2FuYERKRa%2FzM1jJ%2B3iRT2qEiMCRffQQXynnVyh2YzefBH9Sr6jmL7%2FAxfpsYAB5o6LWvnJ0hOat56MVCpuYBTEj93rBWgSxdewx3fHNK0dt%2BeM6GTBedzST&X-Amz-Signature=68687f5555f95ce106aa2a104bef0f8b21d66e4ed3d4fcf8f8b4c8573cabef83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B3PGG5F%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIGGo1uxApiWF6EgPOc0ZaJwtMGUdrVXpMN40SUp5silvAiBflFdUvQ3N67%2FYPK4uhd0nLn%2BFVpUou4yrDnUJVF9PAyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc6rtZFyebnxNAdQOKtwD8Do1vnOFzZqC%2B9DU5o8Yq3icucAAuTE%2FnAopvWaDxiPSeQvhbKX%2F1%2BqOTr57vXgmu4EqVeYTycHQtNeLYjYJbBoEbnSJIDiHLPxWMQzEtA6Cjp181UE%2BBKVWDVK20KDlgDsfOyWS%2FtwGOOCvTiZr1uyBE45ekVO5AK%2B7KyjG6AhIr%2FmknmJ2DBpTupuyf4Al%2FFP9Gei33FnhEAhHy9PweGi6C%2BRNsarUZU4XMrfFA%2BY%2F0rBYjMrbANUUDyv9kymKBvTQkbgwplDJKtb8Mf3qKo6Kuwkp13M2cSGvOxntFOVvjRzRy1VDmNJg3K8vW5hyHHMusZI3Uq6iUHcLvlt44WqZVw%2F3nvSs8XX8rFlf9K4IMqs22GUXwf24pO0ulsIi94GlYgCF3DMaYernhhDvlUGdEcQnixaLB%2FbIwY%2FOQU%2FWSwuYU21q4ybAzzoIFsgrcBjMnjwD8QPq6JsCky%2FXqfLqmL8EF4ZQ3jsfky1mb07JgosXat4Z9MmEXW0rWYJh1HJTGEdwaQY6JVYn6M%2BwjZh8jnwqqxcV9A1h9td6qAYFfTHpfvtN28BWVSIvh7NFZT5q2mnTzdjyeZuswsuz4sbq%2B2wsLrbi4xLHG8eXJKbXkMg1wO1ZZjM4H6cwoPWKyAY6pgHiSdqUWWQnBm1AyanuG5ZjFMx054mMdXA4inqYjGixw%2B5LspDsdWUbLrE1%2FE6ZpkOLqCAbU8bTmhNrhtqRMbZ9VsCea%2BRri2sc6vzk6H%2FuYERKRa%2FzM1jJ%2B3iRT2qEiMCRffQQXynnVyh2YzefBH9Sr6jmL7%2FAxfpsYAB5o6LWvnJ0hOat56MVCpuYBTEj93rBWgSxdewx3fHNK0dt%2BeM6GTBedzST&X-Amz-Signature=735ad7112d29c979c25de4a80eb97c5ab24d4848256a775a67a48b003b578980&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B3PGG5F%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIGGo1uxApiWF6EgPOc0ZaJwtMGUdrVXpMN40SUp5silvAiBflFdUvQ3N67%2FYPK4uhd0nLn%2BFVpUou4yrDnUJVF9PAyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc6rtZFyebnxNAdQOKtwD8Do1vnOFzZqC%2B9DU5o8Yq3icucAAuTE%2FnAopvWaDxiPSeQvhbKX%2F1%2BqOTr57vXgmu4EqVeYTycHQtNeLYjYJbBoEbnSJIDiHLPxWMQzEtA6Cjp181UE%2BBKVWDVK20KDlgDsfOyWS%2FtwGOOCvTiZr1uyBE45ekVO5AK%2B7KyjG6AhIr%2FmknmJ2DBpTupuyf4Al%2FFP9Gei33FnhEAhHy9PweGi6C%2BRNsarUZU4XMrfFA%2BY%2F0rBYjMrbANUUDyv9kymKBvTQkbgwplDJKtb8Mf3qKo6Kuwkp13M2cSGvOxntFOVvjRzRy1VDmNJg3K8vW5hyHHMusZI3Uq6iUHcLvlt44WqZVw%2F3nvSs8XX8rFlf9K4IMqs22GUXwf24pO0ulsIi94GlYgCF3DMaYernhhDvlUGdEcQnixaLB%2FbIwY%2FOQU%2FWSwuYU21q4ybAzzoIFsgrcBjMnjwD8QPq6JsCky%2FXqfLqmL8EF4ZQ3jsfky1mb07JgosXat4Z9MmEXW0rWYJh1HJTGEdwaQY6JVYn6M%2BwjZh8jnwqqxcV9A1h9td6qAYFfTHpfvtN28BWVSIvh7NFZT5q2mnTzdjyeZuswsuz4sbq%2B2wsLrbi4xLHG8eXJKbXkMg1wO1ZZjM4H6cwoPWKyAY6pgHiSdqUWWQnBm1AyanuG5ZjFMx054mMdXA4inqYjGixw%2B5LspDsdWUbLrE1%2FE6ZpkOLqCAbU8bTmhNrhtqRMbZ9VsCea%2BRri2sc6vzk6H%2FuYERKRa%2FzM1jJ%2B3iRT2qEiMCRffQQXynnVyh2YzefBH9Sr6jmL7%2FAxfpsYAB5o6LWvnJ0hOat56MVCpuYBTEj93rBWgSxdewx3fHNK0dt%2BeM6GTBedzST&X-Amz-Signature=1b5870d01f8acc55477b53fe5858bbc954c368f5bbcc11e26a656562a68446a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B3PGG5F%2F20251030%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251030T014003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIGGo1uxApiWF6EgPOc0ZaJwtMGUdrVXpMN40SUp5silvAiBflFdUvQ3N67%2FYPK4uhd0nLn%2BFVpUou4yrDnUJVF9PAyqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMc6rtZFyebnxNAdQOKtwD8Do1vnOFzZqC%2B9DU5o8Yq3icucAAuTE%2FnAopvWaDxiPSeQvhbKX%2F1%2BqOTr57vXgmu4EqVeYTycHQtNeLYjYJbBoEbnSJIDiHLPxWMQzEtA6Cjp181UE%2BBKVWDVK20KDlgDsfOyWS%2FtwGOOCvTiZr1uyBE45ekVO5AK%2B7KyjG6AhIr%2FmknmJ2DBpTupuyf4Al%2FFP9Gei33FnhEAhHy9PweGi6C%2BRNsarUZU4XMrfFA%2BY%2F0rBYjMrbANUUDyv9kymKBvTQkbgwplDJKtb8Mf3qKo6Kuwkp13M2cSGvOxntFOVvjRzRy1VDmNJg3K8vW5hyHHMusZI3Uq6iUHcLvlt44WqZVw%2F3nvSs8XX8rFlf9K4IMqs22GUXwf24pO0ulsIi94GlYgCF3DMaYernhhDvlUGdEcQnixaLB%2FbIwY%2FOQU%2FWSwuYU21q4ybAzzoIFsgrcBjMnjwD8QPq6JsCky%2FXqfLqmL8EF4ZQ3jsfky1mb07JgosXat4Z9MmEXW0rWYJh1HJTGEdwaQY6JVYn6M%2BwjZh8jnwqqxcV9A1h9td6qAYFfTHpfvtN28BWVSIvh7NFZT5q2mnTzdjyeZuswsuz4sbq%2B2wsLrbi4xLHG8eXJKbXkMg1wO1ZZjM4H6cwoPWKyAY6pgHiSdqUWWQnBm1AyanuG5ZjFMx054mMdXA4inqYjGixw%2B5LspDsdWUbLrE1%2FE6ZpkOLqCAbU8bTmhNrhtqRMbZ9VsCea%2BRri2sc6vzk6H%2FuYERKRa%2FzM1jJ%2B3iRT2qEiMCRffQQXynnVyh2YzefBH9Sr6jmL7%2FAxfpsYAB5o6LWvnJ0hOat56MVCpuYBTEj93rBWgSxdewx3fHNK0dt%2BeM6GTBedzST&X-Amz-Signature=4918cc99b1614a54fde142148d0cffb972ce409e6f3037d5de44ddd833b64d1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
