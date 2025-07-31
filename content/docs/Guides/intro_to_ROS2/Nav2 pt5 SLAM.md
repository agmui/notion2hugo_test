---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-30T06:25:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUO6STM5%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqVM48%2F5MlbzX5KWjpEgyXkBDrgkQs9U2pMSDSQyWd5wIgZFJgxPgF3c1xDb82RhmFz8a5pm%2B6y9Y6VFq2XgNyof4qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0UsZcEl8mZsqfX3yrcAwhpJ5i3eKXpjwxNcPkbw4sm4u%2BsArXK7tJXfTbZphuRc3gOm6Qh6EVZzd90aA8BHKWYMjl1AfTYH3DMnvAdnCFqVogh4QmJP0xrHddPAGbm9eyMxRSn0Ilu2nhHY77B7RqvZrEazMxBF1m2Y%2FN8mCVNrqEprIu555bfkTDdw2%2B38epjbP5X9HK9JRDNlPpGMlziXuxD65b4Sv2380XJcDwOfMpIz%2Bb5yLySx3v6WG0%2FnSbgn8N7Ifq%2BsG5KcbjmLf79D3BmCRmNy7nu5lmB%2BjqmM94mkZTgGaUj8ZEi6Fe1qRjAibXQt9T31tMETKQNzSiq02zOf7GgwUzLeE9OdiyUjH3n6m6tWXLbAhYbcqHDmyPyzAm99PawUohRf4JuKwDvjJ2DK5MLFsK%2FK9TB2pv396KGWsCHX2NScrlwrzSQPV6ktN6F8ML5JBekmxaG7HSNJlxxCXwPJvhC42q2%2BjRjbcgk1cQNlNxwRI%2F8VBdWRPe%2Bk1z1wtpMksJldMglV2Yr%2Fr0HCa4hxYkoiUuq4lD07884s8vQex0ZZNwGkh9K%2FHOoll36y%2FdVRdEUe7sdMoStWD69zVgVnX9xB5rK1%2FFLdLxXyR1%2Be6RD7YV4eqZjVA%2FNVHjN6QtZLS52MLrKq8QGOqUB6trFHu3cOkSMyfPxv4y%2F92dukbq1MsAE9dsXQivqPUuwrtqh5tZu4rKw9qSbWMwMPGl2zJRHnv4P5w2o3GX53R71p5rs8ibE1UB1IoKMPtXwxI8JClT88uGZl2szSnCrLqllIWMilIYwr7xyuEf1VBAsNTEiuV4D6eF3s%2F2IjFpV9LPTCUcVGFLUdGNmFYFkiOtaKxHC8M1AP9VS1kzOZogKhSX0&X-Amz-Signature=bd0fec6b3bb099957c23563007f203fab281d1effdd56c650a0f87774a613570&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUO6STM5%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqVM48%2F5MlbzX5KWjpEgyXkBDrgkQs9U2pMSDSQyWd5wIgZFJgxPgF3c1xDb82RhmFz8a5pm%2B6y9Y6VFq2XgNyof4qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0UsZcEl8mZsqfX3yrcAwhpJ5i3eKXpjwxNcPkbw4sm4u%2BsArXK7tJXfTbZphuRc3gOm6Qh6EVZzd90aA8BHKWYMjl1AfTYH3DMnvAdnCFqVogh4QmJP0xrHddPAGbm9eyMxRSn0Ilu2nhHY77B7RqvZrEazMxBF1m2Y%2FN8mCVNrqEprIu555bfkTDdw2%2B38epjbP5X9HK9JRDNlPpGMlziXuxD65b4Sv2380XJcDwOfMpIz%2Bb5yLySx3v6WG0%2FnSbgn8N7Ifq%2BsG5KcbjmLf79D3BmCRmNy7nu5lmB%2BjqmM94mkZTgGaUj8ZEi6Fe1qRjAibXQt9T31tMETKQNzSiq02zOf7GgwUzLeE9OdiyUjH3n6m6tWXLbAhYbcqHDmyPyzAm99PawUohRf4JuKwDvjJ2DK5MLFsK%2FK9TB2pv396KGWsCHX2NScrlwrzSQPV6ktN6F8ML5JBekmxaG7HSNJlxxCXwPJvhC42q2%2BjRjbcgk1cQNlNxwRI%2F8VBdWRPe%2Bk1z1wtpMksJldMglV2Yr%2Fr0HCa4hxYkoiUuq4lD07884s8vQex0ZZNwGkh9K%2FHOoll36y%2FdVRdEUe7sdMoStWD69zVgVnX9xB5rK1%2FFLdLxXyR1%2Be6RD7YV4eqZjVA%2FNVHjN6QtZLS52MLrKq8QGOqUB6trFHu3cOkSMyfPxv4y%2F92dukbq1MsAE9dsXQivqPUuwrtqh5tZu4rKw9qSbWMwMPGl2zJRHnv4P5w2o3GX53R71p5rs8ibE1UB1IoKMPtXwxI8JClT88uGZl2szSnCrLqllIWMilIYwr7xyuEf1VBAsNTEiuV4D6eF3s%2F2IjFpV9LPTCUcVGFLUdGNmFYFkiOtaKxHC8M1AP9VS1kzOZogKhSX0&X-Amz-Signature=b78bd2549a88f3bb078ceffd9adfda670e1d7f42989f085f8f70cb047eea0e5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUO6STM5%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqVM48%2F5MlbzX5KWjpEgyXkBDrgkQs9U2pMSDSQyWd5wIgZFJgxPgF3c1xDb82RhmFz8a5pm%2B6y9Y6VFq2XgNyof4qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0UsZcEl8mZsqfX3yrcAwhpJ5i3eKXpjwxNcPkbw4sm4u%2BsArXK7tJXfTbZphuRc3gOm6Qh6EVZzd90aA8BHKWYMjl1AfTYH3DMnvAdnCFqVogh4QmJP0xrHddPAGbm9eyMxRSn0Ilu2nhHY77B7RqvZrEazMxBF1m2Y%2FN8mCVNrqEprIu555bfkTDdw2%2B38epjbP5X9HK9JRDNlPpGMlziXuxD65b4Sv2380XJcDwOfMpIz%2Bb5yLySx3v6WG0%2FnSbgn8N7Ifq%2BsG5KcbjmLf79D3BmCRmNy7nu5lmB%2BjqmM94mkZTgGaUj8ZEi6Fe1qRjAibXQt9T31tMETKQNzSiq02zOf7GgwUzLeE9OdiyUjH3n6m6tWXLbAhYbcqHDmyPyzAm99PawUohRf4JuKwDvjJ2DK5MLFsK%2FK9TB2pv396KGWsCHX2NScrlwrzSQPV6ktN6F8ML5JBekmxaG7HSNJlxxCXwPJvhC42q2%2BjRjbcgk1cQNlNxwRI%2F8VBdWRPe%2Bk1z1wtpMksJldMglV2Yr%2Fr0HCa4hxYkoiUuq4lD07884s8vQex0ZZNwGkh9K%2FHOoll36y%2FdVRdEUe7sdMoStWD69zVgVnX9xB5rK1%2FFLdLxXyR1%2Be6RD7YV4eqZjVA%2FNVHjN6QtZLS52MLrKq8QGOqUB6trFHu3cOkSMyfPxv4y%2F92dukbq1MsAE9dsXQivqPUuwrtqh5tZu4rKw9qSbWMwMPGl2zJRHnv4P5w2o3GX53R71p5rs8ibE1UB1IoKMPtXwxI8JClT88uGZl2szSnCrLqllIWMilIYwr7xyuEf1VBAsNTEiuV4D6eF3s%2F2IjFpV9LPTCUcVGFLUdGNmFYFkiOtaKxHC8M1AP9VS1kzOZogKhSX0&X-Amz-Signature=8cd0c10554ff574a3990b095122ad6061149e016c82f4d9c15e779d77e731bc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUO6STM5%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqVM48%2F5MlbzX5KWjpEgyXkBDrgkQs9U2pMSDSQyWd5wIgZFJgxPgF3c1xDb82RhmFz8a5pm%2B6y9Y6VFq2XgNyof4qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0UsZcEl8mZsqfX3yrcAwhpJ5i3eKXpjwxNcPkbw4sm4u%2BsArXK7tJXfTbZphuRc3gOm6Qh6EVZzd90aA8BHKWYMjl1AfTYH3DMnvAdnCFqVogh4QmJP0xrHddPAGbm9eyMxRSn0Ilu2nhHY77B7RqvZrEazMxBF1m2Y%2FN8mCVNrqEprIu555bfkTDdw2%2B38epjbP5X9HK9JRDNlPpGMlziXuxD65b4Sv2380XJcDwOfMpIz%2Bb5yLySx3v6WG0%2FnSbgn8N7Ifq%2BsG5KcbjmLf79D3BmCRmNy7nu5lmB%2BjqmM94mkZTgGaUj8ZEi6Fe1qRjAibXQt9T31tMETKQNzSiq02zOf7GgwUzLeE9OdiyUjH3n6m6tWXLbAhYbcqHDmyPyzAm99PawUohRf4JuKwDvjJ2DK5MLFsK%2FK9TB2pv396KGWsCHX2NScrlwrzSQPV6ktN6F8ML5JBekmxaG7HSNJlxxCXwPJvhC42q2%2BjRjbcgk1cQNlNxwRI%2F8VBdWRPe%2Bk1z1wtpMksJldMglV2Yr%2Fr0HCa4hxYkoiUuq4lD07884s8vQex0ZZNwGkh9K%2FHOoll36y%2FdVRdEUe7sdMoStWD69zVgVnX9xB5rK1%2FFLdLxXyR1%2Be6RD7YV4eqZjVA%2FNVHjN6QtZLS52MLrKq8QGOqUB6trFHu3cOkSMyfPxv4y%2F92dukbq1MsAE9dsXQivqPUuwrtqh5tZu4rKw9qSbWMwMPGl2zJRHnv4P5w2o3GX53R71p5rs8ibE1UB1IoKMPtXwxI8JClT88uGZl2szSnCrLqllIWMilIYwr7xyuEf1VBAsNTEiuV4D6eF3s%2F2IjFpV9LPTCUcVGFLUdGNmFYFkiOtaKxHC8M1AP9VS1kzOZogKhSX0&X-Amz-Signature=f752a4e28569a372f2a5ab159199cb3633134da6dc7a68421470c22a365a3fe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUO6STM5%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqVM48%2F5MlbzX5KWjpEgyXkBDrgkQs9U2pMSDSQyWd5wIgZFJgxPgF3c1xDb82RhmFz8a5pm%2B6y9Y6VFq2XgNyof4qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0UsZcEl8mZsqfX3yrcAwhpJ5i3eKXpjwxNcPkbw4sm4u%2BsArXK7tJXfTbZphuRc3gOm6Qh6EVZzd90aA8BHKWYMjl1AfTYH3DMnvAdnCFqVogh4QmJP0xrHddPAGbm9eyMxRSn0Ilu2nhHY77B7RqvZrEazMxBF1m2Y%2FN8mCVNrqEprIu555bfkTDdw2%2B38epjbP5X9HK9JRDNlPpGMlziXuxD65b4Sv2380XJcDwOfMpIz%2Bb5yLySx3v6WG0%2FnSbgn8N7Ifq%2BsG5KcbjmLf79D3BmCRmNy7nu5lmB%2BjqmM94mkZTgGaUj8ZEi6Fe1qRjAibXQt9T31tMETKQNzSiq02zOf7GgwUzLeE9OdiyUjH3n6m6tWXLbAhYbcqHDmyPyzAm99PawUohRf4JuKwDvjJ2DK5MLFsK%2FK9TB2pv396KGWsCHX2NScrlwrzSQPV6ktN6F8ML5JBekmxaG7HSNJlxxCXwPJvhC42q2%2BjRjbcgk1cQNlNxwRI%2F8VBdWRPe%2Bk1z1wtpMksJldMglV2Yr%2Fr0HCa4hxYkoiUuq4lD07884s8vQex0ZZNwGkh9K%2FHOoll36y%2FdVRdEUe7sdMoStWD69zVgVnX9xB5rK1%2FFLdLxXyR1%2Be6RD7YV4eqZjVA%2FNVHjN6QtZLS52MLrKq8QGOqUB6trFHu3cOkSMyfPxv4y%2F92dukbq1MsAE9dsXQivqPUuwrtqh5tZu4rKw9qSbWMwMPGl2zJRHnv4P5w2o3GX53R71p5rs8ibE1UB1IoKMPtXwxI8JClT88uGZl2szSnCrLqllIWMilIYwr7xyuEf1VBAsNTEiuV4D6eF3s%2F2IjFpV9LPTCUcVGFLUdGNmFYFkiOtaKxHC8M1AP9VS1kzOZogKhSX0&X-Amz-Signature=4a1e3841d0082a079404f7c565e149222c15908439bda523a7919b83ce3eaecb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUO6STM5%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqVM48%2F5MlbzX5KWjpEgyXkBDrgkQs9U2pMSDSQyWd5wIgZFJgxPgF3c1xDb82RhmFz8a5pm%2B6y9Y6VFq2XgNyof4qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0UsZcEl8mZsqfX3yrcAwhpJ5i3eKXpjwxNcPkbw4sm4u%2BsArXK7tJXfTbZphuRc3gOm6Qh6EVZzd90aA8BHKWYMjl1AfTYH3DMnvAdnCFqVogh4QmJP0xrHddPAGbm9eyMxRSn0Ilu2nhHY77B7RqvZrEazMxBF1m2Y%2FN8mCVNrqEprIu555bfkTDdw2%2B38epjbP5X9HK9JRDNlPpGMlziXuxD65b4Sv2380XJcDwOfMpIz%2Bb5yLySx3v6WG0%2FnSbgn8N7Ifq%2BsG5KcbjmLf79D3BmCRmNy7nu5lmB%2BjqmM94mkZTgGaUj8ZEi6Fe1qRjAibXQt9T31tMETKQNzSiq02zOf7GgwUzLeE9OdiyUjH3n6m6tWXLbAhYbcqHDmyPyzAm99PawUohRf4JuKwDvjJ2DK5MLFsK%2FK9TB2pv396KGWsCHX2NScrlwrzSQPV6ktN6F8ML5JBekmxaG7HSNJlxxCXwPJvhC42q2%2BjRjbcgk1cQNlNxwRI%2F8VBdWRPe%2Bk1z1wtpMksJldMglV2Yr%2Fr0HCa4hxYkoiUuq4lD07884s8vQex0ZZNwGkh9K%2FHOoll36y%2FdVRdEUe7sdMoStWD69zVgVnX9xB5rK1%2FFLdLxXyR1%2Be6RD7YV4eqZjVA%2FNVHjN6QtZLS52MLrKq8QGOqUB6trFHu3cOkSMyfPxv4y%2F92dukbq1MsAE9dsXQivqPUuwrtqh5tZu4rKw9qSbWMwMPGl2zJRHnv4P5w2o3GX53R71p5rs8ibE1UB1IoKMPtXwxI8JClT88uGZl2szSnCrLqllIWMilIYwr7xyuEf1VBAsNTEiuV4D6eF3s%2F2IjFpV9LPTCUcVGFLUdGNmFYFkiOtaKxHC8M1AP9VS1kzOZogKhSX0&X-Amz-Signature=0d73727435e0eb02089abed10c8027eee821803183d5fd7f9c498335e6a12634&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUO6STM5%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqVM48%2F5MlbzX5KWjpEgyXkBDrgkQs9U2pMSDSQyWd5wIgZFJgxPgF3c1xDb82RhmFz8a5pm%2B6y9Y6VFq2XgNyof4qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0UsZcEl8mZsqfX3yrcAwhpJ5i3eKXpjwxNcPkbw4sm4u%2BsArXK7tJXfTbZphuRc3gOm6Qh6EVZzd90aA8BHKWYMjl1AfTYH3DMnvAdnCFqVogh4QmJP0xrHddPAGbm9eyMxRSn0Ilu2nhHY77B7RqvZrEazMxBF1m2Y%2FN8mCVNrqEprIu555bfkTDdw2%2B38epjbP5X9HK9JRDNlPpGMlziXuxD65b4Sv2380XJcDwOfMpIz%2Bb5yLySx3v6WG0%2FnSbgn8N7Ifq%2BsG5KcbjmLf79D3BmCRmNy7nu5lmB%2BjqmM94mkZTgGaUj8ZEi6Fe1qRjAibXQt9T31tMETKQNzSiq02zOf7GgwUzLeE9OdiyUjH3n6m6tWXLbAhYbcqHDmyPyzAm99PawUohRf4JuKwDvjJ2DK5MLFsK%2FK9TB2pv396KGWsCHX2NScrlwrzSQPV6ktN6F8ML5JBekmxaG7HSNJlxxCXwPJvhC42q2%2BjRjbcgk1cQNlNxwRI%2F8VBdWRPe%2Bk1z1wtpMksJldMglV2Yr%2Fr0HCa4hxYkoiUuq4lD07884s8vQex0ZZNwGkh9K%2FHOoll36y%2FdVRdEUe7sdMoStWD69zVgVnX9xB5rK1%2FFLdLxXyR1%2Be6RD7YV4eqZjVA%2FNVHjN6QtZLS52MLrKq8QGOqUB6trFHu3cOkSMyfPxv4y%2F92dukbq1MsAE9dsXQivqPUuwrtqh5tZu4rKw9qSbWMwMPGl2zJRHnv4P5w2o3GX53R71p5rs8ibE1UB1IoKMPtXwxI8JClT88uGZl2szSnCrLqllIWMilIYwr7xyuEf1VBAsNTEiuV4D6eF3s%2F2IjFpV9LPTCUcVGFLUdGNmFYFkiOtaKxHC8M1AP9VS1kzOZogKhSX0&X-Amz-Signature=953cd496cce3244dd606cb255cd9dcf9de7d5921246010ba469fbb6bd98f8ce7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUO6STM5%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqVM48%2F5MlbzX5KWjpEgyXkBDrgkQs9U2pMSDSQyWd5wIgZFJgxPgF3c1xDb82RhmFz8a5pm%2B6y9Y6VFq2XgNyof4qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0UsZcEl8mZsqfX3yrcAwhpJ5i3eKXpjwxNcPkbw4sm4u%2BsArXK7tJXfTbZphuRc3gOm6Qh6EVZzd90aA8BHKWYMjl1AfTYH3DMnvAdnCFqVogh4QmJP0xrHddPAGbm9eyMxRSn0Ilu2nhHY77B7RqvZrEazMxBF1m2Y%2FN8mCVNrqEprIu555bfkTDdw2%2B38epjbP5X9HK9JRDNlPpGMlziXuxD65b4Sv2380XJcDwOfMpIz%2Bb5yLySx3v6WG0%2FnSbgn8N7Ifq%2BsG5KcbjmLf79D3BmCRmNy7nu5lmB%2BjqmM94mkZTgGaUj8ZEi6Fe1qRjAibXQt9T31tMETKQNzSiq02zOf7GgwUzLeE9OdiyUjH3n6m6tWXLbAhYbcqHDmyPyzAm99PawUohRf4JuKwDvjJ2DK5MLFsK%2FK9TB2pv396KGWsCHX2NScrlwrzSQPV6ktN6F8ML5JBekmxaG7HSNJlxxCXwPJvhC42q2%2BjRjbcgk1cQNlNxwRI%2F8VBdWRPe%2Bk1z1wtpMksJldMglV2Yr%2Fr0HCa4hxYkoiUuq4lD07884s8vQex0ZZNwGkh9K%2FHOoll36y%2FdVRdEUe7sdMoStWD69zVgVnX9xB5rK1%2FFLdLxXyR1%2Be6RD7YV4eqZjVA%2FNVHjN6QtZLS52MLrKq8QGOqUB6trFHu3cOkSMyfPxv4y%2F92dukbq1MsAE9dsXQivqPUuwrtqh5tZu4rKw9qSbWMwMPGl2zJRHnv4P5w2o3GX53R71p5rs8ibE1UB1IoKMPtXwxI8JClT88uGZl2szSnCrLqllIWMilIYwr7xyuEf1VBAsNTEiuV4D6eF3s%2F2IjFpV9LPTCUcVGFLUdGNmFYFkiOtaKxHC8M1AP9VS1kzOZogKhSX0&X-Amz-Signature=00558fcef3e1d5e89cd26159673bc4e3bf7cb4275a27c95093823f45922f69e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUO6STM5%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqVM48%2F5MlbzX5KWjpEgyXkBDrgkQs9U2pMSDSQyWd5wIgZFJgxPgF3c1xDb82RhmFz8a5pm%2B6y9Y6VFq2XgNyof4qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0UsZcEl8mZsqfX3yrcAwhpJ5i3eKXpjwxNcPkbw4sm4u%2BsArXK7tJXfTbZphuRc3gOm6Qh6EVZzd90aA8BHKWYMjl1AfTYH3DMnvAdnCFqVogh4QmJP0xrHddPAGbm9eyMxRSn0Ilu2nhHY77B7RqvZrEazMxBF1m2Y%2FN8mCVNrqEprIu555bfkTDdw2%2B38epjbP5X9HK9JRDNlPpGMlziXuxD65b4Sv2380XJcDwOfMpIz%2Bb5yLySx3v6WG0%2FnSbgn8N7Ifq%2BsG5KcbjmLf79D3BmCRmNy7nu5lmB%2BjqmM94mkZTgGaUj8ZEi6Fe1qRjAibXQt9T31tMETKQNzSiq02zOf7GgwUzLeE9OdiyUjH3n6m6tWXLbAhYbcqHDmyPyzAm99PawUohRf4JuKwDvjJ2DK5MLFsK%2FK9TB2pv396KGWsCHX2NScrlwrzSQPV6ktN6F8ML5JBekmxaG7HSNJlxxCXwPJvhC42q2%2BjRjbcgk1cQNlNxwRI%2F8VBdWRPe%2Bk1z1wtpMksJldMglV2Yr%2Fr0HCa4hxYkoiUuq4lD07884s8vQex0ZZNwGkh9K%2FHOoll36y%2FdVRdEUe7sdMoStWD69zVgVnX9xB5rK1%2FFLdLxXyR1%2Be6RD7YV4eqZjVA%2FNVHjN6QtZLS52MLrKq8QGOqUB6trFHu3cOkSMyfPxv4y%2F92dukbq1MsAE9dsXQivqPUuwrtqh5tZu4rKw9qSbWMwMPGl2zJRHnv4P5w2o3GX53R71p5rs8ibE1UB1IoKMPtXwxI8JClT88uGZl2szSnCrLqllIWMilIYwr7xyuEf1VBAsNTEiuV4D6eF3s%2F2IjFpV9LPTCUcVGFLUdGNmFYFkiOtaKxHC8M1AP9VS1kzOZogKhSX0&X-Amz-Signature=9298254a5d9bb843e0607d5fb57c4bfe5e0a394ca754fccef25d254c888ac3e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUO6STM5%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqVM48%2F5MlbzX5KWjpEgyXkBDrgkQs9U2pMSDSQyWd5wIgZFJgxPgF3c1xDb82RhmFz8a5pm%2B6y9Y6VFq2XgNyof4qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0UsZcEl8mZsqfX3yrcAwhpJ5i3eKXpjwxNcPkbw4sm4u%2BsArXK7tJXfTbZphuRc3gOm6Qh6EVZzd90aA8BHKWYMjl1AfTYH3DMnvAdnCFqVogh4QmJP0xrHddPAGbm9eyMxRSn0Ilu2nhHY77B7RqvZrEazMxBF1m2Y%2FN8mCVNrqEprIu555bfkTDdw2%2B38epjbP5X9HK9JRDNlPpGMlziXuxD65b4Sv2380XJcDwOfMpIz%2Bb5yLySx3v6WG0%2FnSbgn8N7Ifq%2BsG5KcbjmLf79D3BmCRmNy7nu5lmB%2BjqmM94mkZTgGaUj8ZEi6Fe1qRjAibXQt9T31tMETKQNzSiq02zOf7GgwUzLeE9OdiyUjH3n6m6tWXLbAhYbcqHDmyPyzAm99PawUohRf4JuKwDvjJ2DK5MLFsK%2FK9TB2pv396KGWsCHX2NScrlwrzSQPV6ktN6F8ML5JBekmxaG7HSNJlxxCXwPJvhC42q2%2BjRjbcgk1cQNlNxwRI%2F8VBdWRPe%2Bk1z1wtpMksJldMglV2Yr%2Fr0HCa4hxYkoiUuq4lD07884s8vQex0ZZNwGkh9K%2FHOoll36y%2FdVRdEUe7sdMoStWD69zVgVnX9xB5rK1%2FFLdLxXyR1%2Be6RD7YV4eqZjVA%2FNVHjN6QtZLS52MLrKq8QGOqUB6trFHu3cOkSMyfPxv4y%2F92dukbq1MsAE9dsXQivqPUuwrtqh5tZu4rKw9qSbWMwMPGl2zJRHnv4P5w2o3GX53R71p5rs8ibE1UB1IoKMPtXwxI8JClT88uGZl2szSnCrLqllIWMilIYwr7xyuEf1VBAsNTEiuV4D6eF3s%2F2IjFpV9LPTCUcVGFLUdGNmFYFkiOtaKxHC8M1AP9VS1kzOZogKhSX0&X-Amz-Signature=8b46b3b3f41aadb2d4234e11c84f0a8937b0b647e63d7c9cd2d5e50c06e3af06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUO6STM5%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqVM48%2F5MlbzX5KWjpEgyXkBDrgkQs9U2pMSDSQyWd5wIgZFJgxPgF3c1xDb82RhmFz8a5pm%2B6y9Y6VFq2XgNyof4qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0UsZcEl8mZsqfX3yrcAwhpJ5i3eKXpjwxNcPkbw4sm4u%2BsArXK7tJXfTbZphuRc3gOm6Qh6EVZzd90aA8BHKWYMjl1AfTYH3DMnvAdnCFqVogh4QmJP0xrHddPAGbm9eyMxRSn0Ilu2nhHY77B7RqvZrEazMxBF1m2Y%2FN8mCVNrqEprIu555bfkTDdw2%2B38epjbP5X9HK9JRDNlPpGMlziXuxD65b4Sv2380XJcDwOfMpIz%2Bb5yLySx3v6WG0%2FnSbgn8N7Ifq%2BsG5KcbjmLf79D3BmCRmNy7nu5lmB%2BjqmM94mkZTgGaUj8ZEi6Fe1qRjAibXQt9T31tMETKQNzSiq02zOf7GgwUzLeE9OdiyUjH3n6m6tWXLbAhYbcqHDmyPyzAm99PawUohRf4JuKwDvjJ2DK5MLFsK%2FK9TB2pv396KGWsCHX2NScrlwrzSQPV6ktN6F8ML5JBekmxaG7HSNJlxxCXwPJvhC42q2%2BjRjbcgk1cQNlNxwRI%2F8VBdWRPe%2Bk1z1wtpMksJldMglV2Yr%2Fr0HCa4hxYkoiUuq4lD07884s8vQex0ZZNwGkh9K%2FHOoll36y%2FdVRdEUe7sdMoStWD69zVgVnX9xB5rK1%2FFLdLxXyR1%2Be6RD7YV4eqZjVA%2FNVHjN6QtZLS52MLrKq8QGOqUB6trFHu3cOkSMyfPxv4y%2F92dukbq1MsAE9dsXQivqPUuwrtqh5tZu4rKw9qSbWMwMPGl2zJRHnv4P5w2o3GX53R71p5rs8ibE1UB1IoKMPtXwxI8JClT88uGZl2szSnCrLqllIWMilIYwr7xyuEf1VBAsNTEiuV4D6eF3s%2F2IjFpV9LPTCUcVGFLUdGNmFYFkiOtaKxHC8M1AP9VS1kzOZogKhSX0&X-Amz-Signature=e0047fc3eb0db96e3b52ccb9177e3f6a00f5f04dd6e3744bd2a111ec0cd3fa36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUO6STM5%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqVM48%2F5MlbzX5KWjpEgyXkBDrgkQs9U2pMSDSQyWd5wIgZFJgxPgF3c1xDb82RhmFz8a5pm%2B6y9Y6VFq2XgNyof4qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0UsZcEl8mZsqfX3yrcAwhpJ5i3eKXpjwxNcPkbw4sm4u%2BsArXK7tJXfTbZphuRc3gOm6Qh6EVZzd90aA8BHKWYMjl1AfTYH3DMnvAdnCFqVogh4QmJP0xrHddPAGbm9eyMxRSn0Ilu2nhHY77B7RqvZrEazMxBF1m2Y%2FN8mCVNrqEprIu555bfkTDdw2%2B38epjbP5X9HK9JRDNlPpGMlziXuxD65b4Sv2380XJcDwOfMpIz%2Bb5yLySx3v6WG0%2FnSbgn8N7Ifq%2BsG5KcbjmLf79D3BmCRmNy7nu5lmB%2BjqmM94mkZTgGaUj8ZEi6Fe1qRjAibXQt9T31tMETKQNzSiq02zOf7GgwUzLeE9OdiyUjH3n6m6tWXLbAhYbcqHDmyPyzAm99PawUohRf4JuKwDvjJ2DK5MLFsK%2FK9TB2pv396KGWsCHX2NScrlwrzSQPV6ktN6F8ML5JBekmxaG7HSNJlxxCXwPJvhC42q2%2BjRjbcgk1cQNlNxwRI%2F8VBdWRPe%2Bk1z1wtpMksJldMglV2Yr%2Fr0HCa4hxYkoiUuq4lD07884s8vQex0ZZNwGkh9K%2FHOoll36y%2FdVRdEUe7sdMoStWD69zVgVnX9xB5rK1%2FFLdLxXyR1%2Be6RD7YV4eqZjVA%2FNVHjN6QtZLS52MLrKq8QGOqUB6trFHu3cOkSMyfPxv4y%2F92dukbq1MsAE9dsXQivqPUuwrtqh5tZu4rKw9qSbWMwMPGl2zJRHnv4P5w2o3GX53R71p5rs8ibE1UB1IoKMPtXwxI8JClT88uGZl2szSnCrLqllIWMilIYwr7xyuEf1VBAsNTEiuV4D6eF3s%2F2IjFpV9LPTCUcVGFLUdGNmFYFkiOtaKxHC8M1AP9VS1kzOZogKhSX0&X-Amz-Signature=3b69fc425856a2bd8c1781149c4e3f4ca6e9a7fdad10d00dddf5c89462de02c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUO6STM5%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqVM48%2F5MlbzX5KWjpEgyXkBDrgkQs9U2pMSDSQyWd5wIgZFJgxPgF3c1xDb82RhmFz8a5pm%2B6y9Y6VFq2XgNyof4qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0UsZcEl8mZsqfX3yrcAwhpJ5i3eKXpjwxNcPkbw4sm4u%2BsArXK7tJXfTbZphuRc3gOm6Qh6EVZzd90aA8BHKWYMjl1AfTYH3DMnvAdnCFqVogh4QmJP0xrHddPAGbm9eyMxRSn0Ilu2nhHY77B7RqvZrEazMxBF1m2Y%2FN8mCVNrqEprIu555bfkTDdw2%2B38epjbP5X9HK9JRDNlPpGMlziXuxD65b4Sv2380XJcDwOfMpIz%2Bb5yLySx3v6WG0%2FnSbgn8N7Ifq%2BsG5KcbjmLf79D3BmCRmNy7nu5lmB%2BjqmM94mkZTgGaUj8ZEi6Fe1qRjAibXQt9T31tMETKQNzSiq02zOf7GgwUzLeE9OdiyUjH3n6m6tWXLbAhYbcqHDmyPyzAm99PawUohRf4JuKwDvjJ2DK5MLFsK%2FK9TB2pv396KGWsCHX2NScrlwrzSQPV6ktN6F8ML5JBekmxaG7HSNJlxxCXwPJvhC42q2%2BjRjbcgk1cQNlNxwRI%2F8VBdWRPe%2Bk1z1wtpMksJldMglV2Yr%2Fr0HCa4hxYkoiUuq4lD07884s8vQex0ZZNwGkh9K%2FHOoll36y%2FdVRdEUe7sdMoStWD69zVgVnX9xB5rK1%2FFLdLxXyR1%2Be6RD7YV4eqZjVA%2FNVHjN6QtZLS52MLrKq8QGOqUB6trFHu3cOkSMyfPxv4y%2F92dukbq1MsAE9dsXQivqPUuwrtqh5tZu4rKw9qSbWMwMPGl2zJRHnv4P5w2o3GX53R71p5rs8ibE1UB1IoKMPtXwxI8JClT88uGZl2szSnCrLqllIWMilIYwr7xyuEf1VBAsNTEiuV4D6eF3s%2F2IjFpV9LPTCUcVGFLUdGNmFYFkiOtaKxHC8M1AP9VS1kzOZogKhSX0&X-Amz-Signature=7947e8077fdc4350e6508edc29db76aad07a9ebae0f382d310632ba035d30a26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUO6STM5%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T043605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqVM48%2F5MlbzX5KWjpEgyXkBDrgkQs9U2pMSDSQyWd5wIgZFJgxPgF3c1xDb82RhmFz8a5pm%2B6y9Y6VFq2XgNyof4qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0UsZcEl8mZsqfX3yrcAwhpJ5i3eKXpjwxNcPkbw4sm4u%2BsArXK7tJXfTbZphuRc3gOm6Qh6EVZzd90aA8BHKWYMjl1AfTYH3DMnvAdnCFqVogh4QmJP0xrHddPAGbm9eyMxRSn0Ilu2nhHY77B7RqvZrEazMxBF1m2Y%2FN8mCVNrqEprIu555bfkTDdw2%2B38epjbP5X9HK9JRDNlPpGMlziXuxD65b4Sv2380XJcDwOfMpIz%2Bb5yLySx3v6WG0%2FnSbgn8N7Ifq%2BsG5KcbjmLf79D3BmCRmNy7nu5lmB%2BjqmM94mkZTgGaUj8ZEi6Fe1qRjAibXQt9T31tMETKQNzSiq02zOf7GgwUzLeE9OdiyUjH3n6m6tWXLbAhYbcqHDmyPyzAm99PawUohRf4JuKwDvjJ2DK5MLFsK%2FK9TB2pv396KGWsCHX2NScrlwrzSQPV6ktN6F8ML5JBekmxaG7HSNJlxxCXwPJvhC42q2%2BjRjbcgk1cQNlNxwRI%2F8VBdWRPe%2Bk1z1wtpMksJldMglV2Yr%2Fr0HCa4hxYkoiUuq4lD07884s8vQex0ZZNwGkh9K%2FHOoll36y%2FdVRdEUe7sdMoStWD69zVgVnX9xB5rK1%2FFLdLxXyR1%2Be6RD7YV4eqZjVA%2FNVHjN6QtZLS52MLrKq8QGOqUB6trFHu3cOkSMyfPxv4y%2F92dukbq1MsAE9dsXQivqPUuwrtqh5tZu4rKw9qSbWMwMPGl2zJRHnv4P5w2o3GX53R71p5rs8ibE1UB1IoKMPtXwxI8JClT88uGZl2szSnCrLqllIWMilIYwr7xyuEf1VBAsNTEiuV4D6eF3s%2F2IjFpV9LPTCUcVGFLUdGNmFYFkiOtaKxHC8M1AP9VS1kzOZogKhSX0&X-Amz-Signature=0719ce9c9122e60cacdfffc697230b7cf63191bfb54b22fe67a47b79dfee2779&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
