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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZP6525Y%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCzmzNqP4ZQ%2B%2F3ekjjkk0MjQTISxoCoOmL2P3IMqt9XxgIhAMnRKLRdj9fXfSxcmxE45I3vkb%2FejDsCs5pqaYhNIrlzKv8DCHEQABoMNjM3NDIzMTgzODA1IgzClaKJktcThMQ6tBUq3AM%2FHewC3%2Fg4mwquZOkbYrNRPsowqExvcLoXKAt2Ii1ZPUkqjGGPyMqTL0dHTwpkGGYeS8MIY8jNnII2tpxPLMcpnBrr9NGMBo%2BTeGDrlM0YUWKEM%2Bgr1%2FZzyPCiyRMczodLbpzCRInIDXy5WPlKY6FaKn1iEePw3oEm9HUN7xdM%2BbiAedQ7YJWDSAJ54JNLIPvz35cWcC45gs5nFzBCL8XFO%2BXVEXOg4UlI74jZqSd9AcFJwPcD1PQAdOVwwIy4BCMeQtKcUPrnv5YRfCzxEdbsKrY7%2BvQN0nSMRSWVhHLf5jXPGj%2F8EGY%2BZNoIcli%2B79%2BFToPS3beO%2B%2Fj5AUAv4eYRT34lPQsbV6d0ymi2i3jaq%2FGTWQ8K6E1tRDAyMcS%2B8qk9OmBFRfhFRij3gRYLcn1o7s8ws0pJ1bCCI3WNg35cW5sp%2Flojx8Sbdo8kWOhtnzHtCywcB5PDt90DosUhRrePNona6%2FMtigXUTIu%2FwZpSZCnZlXl5cZx98%2FuPBaAZ23rCN9UawzJAInnDAeIFlLXv9rKwBPPPWziUkApVbX8AqyteRyWiN9Ji9xYOazMi1gVwHHYrmbCi%2FyDfzCdRN03pI6wTalR0KPPjqK9YiHGfTUqjaDPUzGmA2LSClTCvl8zEBjqkAXB06%2BRtnDuAARoal6nGt9Ee34tKs2nn7DuYLjRgwSp3nj7l9dqtIAv3BQVxfffgc0aKY8euohkJdW0mHQgOB4SpTSFlmf0ksXjkUbL9tvHaPOfdZOibtmaMMh8thGJADuPpbsFZCva1huyculym8GnoF43brrWNezYJkY7UCjjGbNpI6CvflNyPQAF3WlUMYjYa1RQhh3N3XIheWm3duLl38HCa&X-Amz-Signature=cab82e4ec86f85b9fdbc2107f7221d50eaaa85aa994ffc212ec5796dfa07a60a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZP6525Y%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCzmzNqP4ZQ%2B%2F3ekjjkk0MjQTISxoCoOmL2P3IMqt9XxgIhAMnRKLRdj9fXfSxcmxE45I3vkb%2FejDsCs5pqaYhNIrlzKv8DCHEQABoMNjM3NDIzMTgzODA1IgzClaKJktcThMQ6tBUq3AM%2FHewC3%2Fg4mwquZOkbYrNRPsowqExvcLoXKAt2Ii1ZPUkqjGGPyMqTL0dHTwpkGGYeS8MIY8jNnII2tpxPLMcpnBrr9NGMBo%2BTeGDrlM0YUWKEM%2Bgr1%2FZzyPCiyRMczodLbpzCRInIDXy5WPlKY6FaKn1iEePw3oEm9HUN7xdM%2BbiAedQ7YJWDSAJ54JNLIPvz35cWcC45gs5nFzBCL8XFO%2BXVEXOg4UlI74jZqSd9AcFJwPcD1PQAdOVwwIy4BCMeQtKcUPrnv5YRfCzxEdbsKrY7%2BvQN0nSMRSWVhHLf5jXPGj%2F8EGY%2BZNoIcli%2B79%2BFToPS3beO%2B%2Fj5AUAv4eYRT34lPQsbV6d0ymi2i3jaq%2FGTWQ8K6E1tRDAyMcS%2B8qk9OmBFRfhFRij3gRYLcn1o7s8ws0pJ1bCCI3WNg35cW5sp%2Flojx8Sbdo8kWOhtnzHtCywcB5PDt90DosUhRrePNona6%2FMtigXUTIu%2FwZpSZCnZlXl5cZx98%2FuPBaAZ23rCN9UawzJAInnDAeIFlLXv9rKwBPPPWziUkApVbX8AqyteRyWiN9Ji9xYOazMi1gVwHHYrmbCi%2FyDfzCdRN03pI6wTalR0KPPjqK9YiHGfTUqjaDPUzGmA2LSClTCvl8zEBjqkAXB06%2BRtnDuAARoal6nGt9Ee34tKs2nn7DuYLjRgwSp3nj7l9dqtIAv3BQVxfffgc0aKY8euohkJdW0mHQgOB4SpTSFlmf0ksXjkUbL9tvHaPOfdZOibtmaMMh8thGJADuPpbsFZCva1huyculym8GnoF43brrWNezYJkY7UCjjGbNpI6CvflNyPQAF3WlUMYjYa1RQhh3N3XIheWm3duLl38HCa&X-Amz-Signature=87f35398fb16a791b8dbc091b1812d0704a5403d6c3028fc9f2d73a700b3cd88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZP6525Y%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCzmzNqP4ZQ%2B%2F3ekjjkk0MjQTISxoCoOmL2P3IMqt9XxgIhAMnRKLRdj9fXfSxcmxE45I3vkb%2FejDsCs5pqaYhNIrlzKv8DCHEQABoMNjM3NDIzMTgzODA1IgzClaKJktcThMQ6tBUq3AM%2FHewC3%2Fg4mwquZOkbYrNRPsowqExvcLoXKAt2Ii1ZPUkqjGGPyMqTL0dHTwpkGGYeS8MIY8jNnII2tpxPLMcpnBrr9NGMBo%2BTeGDrlM0YUWKEM%2Bgr1%2FZzyPCiyRMczodLbpzCRInIDXy5WPlKY6FaKn1iEePw3oEm9HUN7xdM%2BbiAedQ7YJWDSAJ54JNLIPvz35cWcC45gs5nFzBCL8XFO%2BXVEXOg4UlI74jZqSd9AcFJwPcD1PQAdOVwwIy4BCMeQtKcUPrnv5YRfCzxEdbsKrY7%2BvQN0nSMRSWVhHLf5jXPGj%2F8EGY%2BZNoIcli%2B79%2BFToPS3beO%2B%2Fj5AUAv4eYRT34lPQsbV6d0ymi2i3jaq%2FGTWQ8K6E1tRDAyMcS%2B8qk9OmBFRfhFRij3gRYLcn1o7s8ws0pJ1bCCI3WNg35cW5sp%2Flojx8Sbdo8kWOhtnzHtCywcB5PDt90DosUhRrePNona6%2FMtigXUTIu%2FwZpSZCnZlXl5cZx98%2FuPBaAZ23rCN9UawzJAInnDAeIFlLXv9rKwBPPPWziUkApVbX8AqyteRyWiN9Ji9xYOazMi1gVwHHYrmbCi%2FyDfzCdRN03pI6wTalR0KPPjqK9YiHGfTUqjaDPUzGmA2LSClTCvl8zEBjqkAXB06%2BRtnDuAARoal6nGt9Ee34tKs2nn7DuYLjRgwSp3nj7l9dqtIAv3BQVxfffgc0aKY8euohkJdW0mHQgOB4SpTSFlmf0ksXjkUbL9tvHaPOfdZOibtmaMMh8thGJADuPpbsFZCva1huyculym8GnoF43brrWNezYJkY7UCjjGbNpI6CvflNyPQAF3WlUMYjYa1RQhh3N3XIheWm3duLl38HCa&X-Amz-Signature=edd7ef72ecde200f7086f858914bc86147199a1fcb7037edfdd6f107d0d6bade&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZP6525Y%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCzmzNqP4ZQ%2B%2F3ekjjkk0MjQTISxoCoOmL2P3IMqt9XxgIhAMnRKLRdj9fXfSxcmxE45I3vkb%2FejDsCs5pqaYhNIrlzKv8DCHEQABoMNjM3NDIzMTgzODA1IgzClaKJktcThMQ6tBUq3AM%2FHewC3%2Fg4mwquZOkbYrNRPsowqExvcLoXKAt2Ii1ZPUkqjGGPyMqTL0dHTwpkGGYeS8MIY8jNnII2tpxPLMcpnBrr9NGMBo%2BTeGDrlM0YUWKEM%2Bgr1%2FZzyPCiyRMczodLbpzCRInIDXy5WPlKY6FaKn1iEePw3oEm9HUN7xdM%2BbiAedQ7YJWDSAJ54JNLIPvz35cWcC45gs5nFzBCL8XFO%2BXVEXOg4UlI74jZqSd9AcFJwPcD1PQAdOVwwIy4BCMeQtKcUPrnv5YRfCzxEdbsKrY7%2BvQN0nSMRSWVhHLf5jXPGj%2F8EGY%2BZNoIcli%2B79%2BFToPS3beO%2B%2Fj5AUAv4eYRT34lPQsbV6d0ymi2i3jaq%2FGTWQ8K6E1tRDAyMcS%2B8qk9OmBFRfhFRij3gRYLcn1o7s8ws0pJ1bCCI3WNg35cW5sp%2Flojx8Sbdo8kWOhtnzHtCywcB5PDt90DosUhRrePNona6%2FMtigXUTIu%2FwZpSZCnZlXl5cZx98%2FuPBaAZ23rCN9UawzJAInnDAeIFlLXv9rKwBPPPWziUkApVbX8AqyteRyWiN9Ji9xYOazMi1gVwHHYrmbCi%2FyDfzCdRN03pI6wTalR0KPPjqK9YiHGfTUqjaDPUzGmA2LSClTCvl8zEBjqkAXB06%2BRtnDuAARoal6nGt9Ee34tKs2nn7DuYLjRgwSp3nj7l9dqtIAv3BQVxfffgc0aKY8euohkJdW0mHQgOB4SpTSFlmf0ksXjkUbL9tvHaPOfdZOibtmaMMh8thGJADuPpbsFZCva1huyculym8GnoF43brrWNezYJkY7UCjjGbNpI6CvflNyPQAF3WlUMYjYa1RQhh3N3XIheWm3duLl38HCa&X-Amz-Signature=53ffab7d3b2bd0d5c4bba9b8d548dfc3fb3cb1915307a1c95c553f10a9efb864&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZP6525Y%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCzmzNqP4ZQ%2B%2F3ekjjkk0MjQTISxoCoOmL2P3IMqt9XxgIhAMnRKLRdj9fXfSxcmxE45I3vkb%2FejDsCs5pqaYhNIrlzKv8DCHEQABoMNjM3NDIzMTgzODA1IgzClaKJktcThMQ6tBUq3AM%2FHewC3%2Fg4mwquZOkbYrNRPsowqExvcLoXKAt2Ii1ZPUkqjGGPyMqTL0dHTwpkGGYeS8MIY8jNnII2tpxPLMcpnBrr9NGMBo%2BTeGDrlM0YUWKEM%2Bgr1%2FZzyPCiyRMczodLbpzCRInIDXy5WPlKY6FaKn1iEePw3oEm9HUN7xdM%2BbiAedQ7YJWDSAJ54JNLIPvz35cWcC45gs5nFzBCL8XFO%2BXVEXOg4UlI74jZqSd9AcFJwPcD1PQAdOVwwIy4BCMeQtKcUPrnv5YRfCzxEdbsKrY7%2BvQN0nSMRSWVhHLf5jXPGj%2F8EGY%2BZNoIcli%2B79%2BFToPS3beO%2B%2Fj5AUAv4eYRT34lPQsbV6d0ymi2i3jaq%2FGTWQ8K6E1tRDAyMcS%2B8qk9OmBFRfhFRij3gRYLcn1o7s8ws0pJ1bCCI3WNg35cW5sp%2Flojx8Sbdo8kWOhtnzHtCywcB5PDt90DosUhRrePNona6%2FMtigXUTIu%2FwZpSZCnZlXl5cZx98%2FuPBaAZ23rCN9UawzJAInnDAeIFlLXv9rKwBPPPWziUkApVbX8AqyteRyWiN9Ji9xYOazMi1gVwHHYrmbCi%2FyDfzCdRN03pI6wTalR0KPPjqK9YiHGfTUqjaDPUzGmA2LSClTCvl8zEBjqkAXB06%2BRtnDuAARoal6nGt9Ee34tKs2nn7DuYLjRgwSp3nj7l9dqtIAv3BQVxfffgc0aKY8euohkJdW0mHQgOB4SpTSFlmf0ksXjkUbL9tvHaPOfdZOibtmaMMh8thGJADuPpbsFZCva1huyculym8GnoF43brrWNezYJkY7UCjjGbNpI6CvflNyPQAF3WlUMYjYa1RQhh3N3XIheWm3duLl38HCa&X-Amz-Signature=80344756b5eaab829a6ac460bab99708076fd233001f02412b2743692fc7505b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZP6525Y%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCzmzNqP4ZQ%2B%2F3ekjjkk0MjQTISxoCoOmL2P3IMqt9XxgIhAMnRKLRdj9fXfSxcmxE45I3vkb%2FejDsCs5pqaYhNIrlzKv8DCHEQABoMNjM3NDIzMTgzODA1IgzClaKJktcThMQ6tBUq3AM%2FHewC3%2Fg4mwquZOkbYrNRPsowqExvcLoXKAt2Ii1ZPUkqjGGPyMqTL0dHTwpkGGYeS8MIY8jNnII2tpxPLMcpnBrr9NGMBo%2BTeGDrlM0YUWKEM%2Bgr1%2FZzyPCiyRMczodLbpzCRInIDXy5WPlKY6FaKn1iEePw3oEm9HUN7xdM%2BbiAedQ7YJWDSAJ54JNLIPvz35cWcC45gs5nFzBCL8XFO%2BXVEXOg4UlI74jZqSd9AcFJwPcD1PQAdOVwwIy4BCMeQtKcUPrnv5YRfCzxEdbsKrY7%2BvQN0nSMRSWVhHLf5jXPGj%2F8EGY%2BZNoIcli%2B79%2BFToPS3beO%2B%2Fj5AUAv4eYRT34lPQsbV6d0ymi2i3jaq%2FGTWQ8K6E1tRDAyMcS%2B8qk9OmBFRfhFRij3gRYLcn1o7s8ws0pJ1bCCI3WNg35cW5sp%2Flojx8Sbdo8kWOhtnzHtCywcB5PDt90DosUhRrePNona6%2FMtigXUTIu%2FwZpSZCnZlXl5cZx98%2FuPBaAZ23rCN9UawzJAInnDAeIFlLXv9rKwBPPPWziUkApVbX8AqyteRyWiN9Ji9xYOazMi1gVwHHYrmbCi%2FyDfzCdRN03pI6wTalR0KPPjqK9YiHGfTUqjaDPUzGmA2LSClTCvl8zEBjqkAXB06%2BRtnDuAARoal6nGt9Ee34tKs2nn7DuYLjRgwSp3nj7l9dqtIAv3BQVxfffgc0aKY8euohkJdW0mHQgOB4SpTSFlmf0ksXjkUbL9tvHaPOfdZOibtmaMMh8thGJADuPpbsFZCva1huyculym8GnoF43brrWNezYJkY7UCjjGbNpI6CvflNyPQAF3WlUMYjYa1RQhh3N3XIheWm3duLl38HCa&X-Amz-Signature=ced86b0090be974c2ca132f4c0e3d308e130d21071c8d9676601ee9d0371859f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZP6525Y%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCzmzNqP4ZQ%2B%2F3ekjjkk0MjQTISxoCoOmL2P3IMqt9XxgIhAMnRKLRdj9fXfSxcmxE45I3vkb%2FejDsCs5pqaYhNIrlzKv8DCHEQABoMNjM3NDIzMTgzODA1IgzClaKJktcThMQ6tBUq3AM%2FHewC3%2Fg4mwquZOkbYrNRPsowqExvcLoXKAt2Ii1ZPUkqjGGPyMqTL0dHTwpkGGYeS8MIY8jNnII2tpxPLMcpnBrr9NGMBo%2BTeGDrlM0YUWKEM%2Bgr1%2FZzyPCiyRMczodLbpzCRInIDXy5WPlKY6FaKn1iEePw3oEm9HUN7xdM%2BbiAedQ7YJWDSAJ54JNLIPvz35cWcC45gs5nFzBCL8XFO%2BXVEXOg4UlI74jZqSd9AcFJwPcD1PQAdOVwwIy4BCMeQtKcUPrnv5YRfCzxEdbsKrY7%2BvQN0nSMRSWVhHLf5jXPGj%2F8EGY%2BZNoIcli%2B79%2BFToPS3beO%2B%2Fj5AUAv4eYRT34lPQsbV6d0ymi2i3jaq%2FGTWQ8K6E1tRDAyMcS%2B8qk9OmBFRfhFRij3gRYLcn1o7s8ws0pJ1bCCI3WNg35cW5sp%2Flojx8Sbdo8kWOhtnzHtCywcB5PDt90DosUhRrePNona6%2FMtigXUTIu%2FwZpSZCnZlXl5cZx98%2FuPBaAZ23rCN9UawzJAInnDAeIFlLXv9rKwBPPPWziUkApVbX8AqyteRyWiN9Ji9xYOazMi1gVwHHYrmbCi%2FyDfzCdRN03pI6wTalR0KPPjqK9YiHGfTUqjaDPUzGmA2LSClTCvl8zEBjqkAXB06%2BRtnDuAARoal6nGt9Ee34tKs2nn7DuYLjRgwSp3nj7l9dqtIAv3BQVxfffgc0aKY8euohkJdW0mHQgOB4SpTSFlmf0ksXjkUbL9tvHaPOfdZOibtmaMMh8thGJADuPpbsFZCva1huyculym8GnoF43brrWNezYJkY7UCjjGbNpI6CvflNyPQAF3WlUMYjYa1RQhh3N3XIheWm3duLl38HCa&X-Amz-Signature=ce8207b4db01f44d3e04e892031eb91a5cebd3c50bf65292584bb90058121136&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZP6525Y%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCzmzNqP4ZQ%2B%2F3ekjjkk0MjQTISxoCoOmL2P3IMqt9XxgIhAMnRKLRdj9fXfSxcmxE45I3vkb%2FejDsCs5pqaYhNIrlzKv8DCHEQABoMNjM3NDIzMTgzODA1IgzClaKJktcThMQ6tBUq3AM%2FHewC3%2Fg4mwquZOkbYrNRPsowqExvcLoXKAt2Ii1ZPUkqjGGPyMqTL0dHTwpkGGYeS8MIY8jNnII2tpxPLMcpnBrr9NGMBo%2BTeGDrlM0YUWKEM%2Bgr1%2FZzyPCiyRMczodLbpzCRInIDXy5WPlKY6FaKn1iEePw3oEm9HUN7xdM%2BbiAedQ7YJWDSAJ54JNLIPvz35cWcC45gs5nFzBCL8XFO%2BXVEXOg4UlI74jZqSd9AcFJwPcD1PQAdOVwwIy4BCMeQtKcUPrnv5YRfCzxEdbsKrY7%2BvQN0nSMRSWVhHLf5jXPGj%2F8EGY%2BZNoIcli%2B79%2BFToPS3beO%2B%2Fj5AUAv4eYRT34lPQsbV6d0ymi2i3jaq%2FGTWQ8K6E1tRDAyMcS%2B8qk9OmBFRfhFRij3gRYLcn1o7s8ws0pJ1bCCI3WNg35cW5sp%2Flojx8Sbdo8kWOhtnzHtCywcB5PDt90DosUhRrePNona6%2FMtigXUTIu%2FwZpSZCnZlXl5cZx98%2FuPBaAZ23rCN9UawzJAInnDAeIFlLXv9rKwBPPPWziUkApVbX8AqyteRyWiN9Ji9xYOazMi1gVwHHYrmbCi%2FyDfzCdRN03pI6wTalR0KPPjqK9YiHGfTUqjaDPUzGmA2LSClTCvl8zEBjqkAXB06%2BRtnDuAARoal6nGt9Ee34tKs2nn7DuYLjRgwSp3nj7l9dqtIAv3BQVxfffgc0aKY8euohkJdW0mHQgOB4SpTSFlmf0ksXjkUbL9tvHaPOfdZOibtmaMMh8thGJADuPpbsFZCva1huyculym8GnoF43brrWNezYJkY7UCjjGbNpI6CvflNyPQAF3WlUMYjYa1RQhh3N3XIheWm3duLl38HCa&X-Amz-Signature=92b77f1707220aca9b7da00c22ea9f7969179babc559aa8d98db0469d34c11fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZP6525Y%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCzmzNqP4ZQ%2B%2F3ekjjkk0MjQTISxoCoOmL2P3IMqt9XxgIhAMnRKLRdj9fXfSxcmxE45I3vkb%2FejDsCs5pqaYhNIrlzKv8DCHEQABoMNjM3NDIzMTgzODA1IgzClaKJktcThMQ6tBUq3AM%2FHewC3%2Fg4mwquZOkbYrNRPsowqExvcLoXKAt2Ii1ZPUkqjGGPyMqTL0dHTwpkGGYeS8MIY8jNnII2tpxPLMcpnBrr9NGMBo%2BTeGDrlM0YUWKEM%2Bgr1%2FZzyPCiyRMczodLbpzCRInIDXy5WPlKY6FaKn1iEePw3oEm9HUN7xdM%2BbiAedQ7YJWDSAJ54JNLIPvz35cWcC45gs5nFzBCL8XFO%2BXVEXOg4UlI74jZqSd9AcFJwPcD1PQAdOVwwIy4BCMeQtKcUPrnv5YRfCzxEdbsKrY7%2BvQN0nSMRSWVhHLf5jXPGj%2F8EGY%2BZNoIcli%2B79%2BFToPS3beO%2B%2Fj5AUAv4eYRT34lPQsbV6d0ymi2i3jaq%2FGTWQ8K6E1tRDAyMcS%2B8qk9OmBFRfhFRij3gRYLcn1o7s8ws0pJ1bCCI3WNg35cW5sp%2Flojx8Sbdo8kWOhtnzHtCywcB5PDt90DosUhRrePNona6%2FMtigXUTIu%2FwZpSZCnZlXl5cZx98%2FuPBaAZ23rCN9UawzJAInnDAeIFlLXv9rKwBPPPWziUkApVbX8AqyteRyWiN9Ji9xYOazMi1gVwHHYrmbCi%2FyDfzCdRN03pI6wTalR0KPPjqK9YiHGfTUqjaDPUzGmA2LSClTCvl8zEBjqkAXB06%2BRtnDuAARoal6nGt9Ee34tKs2nn7DuYLjRgwSp3nj7l9dqtIAv3BQVxfffgc0aKY8euohkJdW0mHQgOB4SpTSFlmf0ksXjkUbL9tvHaPOfdZOibtmaMMh8thGJADuPpbsFZCva1huyculym8GnoF43brrWNezYJkY7UCjjGbNpI6CvflNyPQAF3WlUMYjYa1RQhh3N3XIheWm3duLl38HCa&X-Amz-Signature=b2c72e99e63a1551b221096b92ba2b514c6345853388f0c84310fab382e2fb81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZP6525Y%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCzmzNqP4ZQ%2B%2F3ekjjkk0MjQTISxoCoOmL2P3IMqt9XxgIhAMnRKLRdj9fXfSxcmxE45I3vkb%2FejDsCs5pqaYhNIrlzKv8DCHEQABoMNjM3NDIzMTgzODA1IgzClaKJktcThMQ6tBUq3AM%2FHewC3%2Fg4mwquZOkbYrNRPsowqExvcLoXKAt2Ii1ZPUkqjGGPyMqTL0dHTwpkGGYeS8MIY8jNnII2tpxPLMcpnBrr9NGMBo%2BTeGDrlM0YUWKEM%2Bgr1%2FZzyPCiyRMczodLbpzCRInIDXy5WPlKY6FaKn1iEePw3oEm9HUN7xdM%2BbiAedQ7YJWDSAJ54JNLIPvz35cWcC45gs5nFzBCL8XFO%2BXVEXOg4UlI74jZqSd9AcFJwPcD1PQAdOVwwIy4BCMeQtKcUPrnv5YRfCzxEdbsKrY7%2BvQN0nSMRSWVhHLf5jXPGj%2F8EGY%2BZNoIcli%2B79%2BFToPS3beO%2B%2Fj5AUAv4eYRT34lPQsbV6d0ymi2i3jaq%2FGTWQ8K6E1tRDAyMcS%2B8qk9OmBFRfhFRij3gRYLcn1o7s8ws0pJ1bCCI3WNg35cW5sp%2Flojx8Sbdo8kWOhtnzHtCywcB5PDt90DosUhRrePNona6%2FMtigXUTIu%2FwZpSZCnZlXl5cZx98%2FuPBaAZ23rCN9UawzJAInnDAeIFlLXv9rKwBPPPWziUkApVbX8AqyteRyWiN9Ji9xYOazMi1gVwHHYrmbCi%2FyDfzCdRN03pI6wTalR0KPPjqK9YiHGfTUqjaDPUzGmA2LSClTCvl8zEBjqkAXB06%2BRtnDuAARoal6nGt9Ee34tKs2nn7DuYLjRgwSp3nj7l9dqtIAv3BQVxfffgc0aKY8euohkJdW0mHQgOB4SpTSFlmf0ksXjkUbL9tvHaPOfdZOibtmaMMh8thGJADuPpbsFZCva1huyculym8GnoF43brrWNezYJkY7UCjjGbNpI6CvflNyPQAF3WlUMYjYa1RQhh3N3XIheWm3duLl38HCa&X-Amz-Signature=2ff098abe6a6b6eb5e7c972a6c89d0def4936fdd0b8ae19963dbf788bf452bd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZP6525Y%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCzmzNqP4ZQ%2B%2F3ekjjkk0MjQTISxoCoOmL2P3IMqt9XxgIhAMnRKLRdj9fXfSxcmxE45I3vkb%2FejDsCs5pqaYhNIrlzKv8DCHEQABoMNjM3NDIzMTgzODA1IgzClaKJktcThMQ6tBUq3AM%2FHewC3%2Fg4mwquZOkbYrNRPsowqExvcLoXKAt2Ii1ZPUkqjGGPyMqTL0dHTwpkGGYeS8MIY8jNnII2tpxPLMcpnBrr9NGMBo%2BTeGDrlM0YUWKEM%2Bgr1%2FZzyPCiyRMczodLbpzCRInIDXy5WPlKY6FaKn1iEePw3oEm9HUN7xdM%2BbiAedQ7YJWDSAJ54JNLIPvz35cWcC45gs5nFzBCL8XFO%2BXVEXOg4UlI74jZqSd9AcFJwPcD1PQAdOVwwIy4BCMeQtKcUPrnv5YRfCzxEdbsKrY7%2BvQN0nSMRSWVhHLf5jXPGj%2F8EGY%2BZNoIcli%2B79%2BFToPS3beO%2B%2Fj5AUAv4eYRT34lPQsbV6d0ymi2i3jaq%2FGTWQ8K6E1tRDAyMcS%2B8qk9OmBFRfhFRij3gRYLcn1o7s8ws0pJ1bCCI3WNg35cW5sp%2Flojx8Sbdo8kWOhtnzHtCywcB5PDt90DosUhRrePNona6%2FMtigXUTIu%2FwZpSZCnZlXl5cZx98%2FuPBaAZ23rCN9UawzJAInnDAeIFlLXv9rKwBPPPWziUkApVbX8AqyteRyWiN9Ji9xYOazMi1gVwHHYrmbCi%2FyDfzCdRN03pI6wTalR0KPPjqK9YiHGfTUqjaDPUzGmA2LSClTCvl8zEBjqkAXB06%2BRtnDuAARoal6nGt9Ee34tKs2nn7DuYLjRgwSp3nj7l9dqtIAv3BQVxfffgc0aKY8euohkJdW0mHQgOB4SpTSFlmf0ksXjkUbL9tvHaPOfdZOibtmaMMh8thGJADuPpbsFZCva1huyculym8GnoF43brrWNezYJkY7UCjjGbNpI6CvflNyPQAF3WlUMYjYa1RQhh3N3XIheWm3duLl38HCa&X-Amz-Signature=b65c30d9f92a0617320a8b225563d80be464cd261cd6db6b6b009d6aa9ccfe43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZP6525Y%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCzmzNqP4ZQ%2B%2F3ekjjkk0MjQTISxoCoOmL2P3IMqt9XxgIhAMnRKLRdj9fXfSxcmxE45I3vkb%2FejDsCs5pqaYhNIrlzKv8DCHEQABoMNjM3NDIzMTgzODA1IgzClaKJktcThMQ6tBUq3AM%2FHewC3%2Fg4mwquZOkbYrNRPsowqExvcLoXKAt2Ii1ZPUkqjGGPyMqTL0dHTwpkGGYeS8MIY8jNnII2tpxPLMcpnBrr9NGMBo%2BTeGDrlM0YUWKEM%2Bgr1%2FZzyPCiyRMczodLbpzCRInIDXy5WPlKY6FaKn1iEePw3oEm9HUN7xdM%2BbiAedQ7YJWDSAJ54JNLIPvz35cWcC45gs5nFzBCL8XFO%2BXVEXOg4UlI74jZqSd9AcFJwPcD1PQAdOVwwIy4BCMeQtKcUPrnv5YRfCzxEdbsKrY7%2BvQN0nSMRSWVhHLf5jXPGj%2F8EGY%2BZNoIcli%2B79%2BFToPS3beO%2B%2Fj5AUAv4eYRT34lPQsbV6d0ymi2i3jaq%2FGTWQ8K6E1tRDAyMcS%2B8qk9OmBFRfhFRij3gRYLcn1o7s8ws0pJ1bCCI3WNg35cW5sp%2Flojx8Sbdo8kWOhtnzHtCywcB5PDt90DosUhRrePNona6%2FMtigXUTIu%2FwZpSZCnZlXl5cZx98%2FuPBaAZ23rCN9UawzJAInnDAeIFlLXv9rKwBPPPWziUkApVbX8AqyteRyWiN9Ji9xYOazMi1gVwHHYrmbCi%2FyDfzCdRN03pI6wTalR0KPPjqK9YiHGfTUqjaDPUzGmA2LSClTCvl8zEBjqkAXB06%2BRtnDuAARoal6nGt9Ee34tKs2nn7DuYLjRgwSp3nj7l9dqtIAv3BQVxfffgc0aKY8euohkJdW0mHQgOB4SpTSFlmf0ksXjkUbL9tvHaPOfdZOibtmaMMh8thGJADuPpbsFZCva1huyculym8GnoF43brrWNezYJkY7UCjjGbNpI6CvflNyPQAF3WlUMYjYa1RQhh3N3XIheWm3duLl38HCa&X-Amz-Signature=36e1d4177f0465a38be796fff4fe9238b6ff7afd01bb0fbe82721cc312825acb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZP6525Y%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCzmzNqP4ZQ%2B%2F3ekjjkk0MjQTISxoCoOmL2P3IMqt9XxgIhAMnRKLRdj9fXfSxcmxE45I3vkb%2FejDsCs5pqaYhNIrlzKv8DCHEQABoMNjM3NDIzMTgzODA1IgzClaKJktcThMQ6tBUq3AM%2FHewC3%2Fg4mwquZOkbYrNRPsowqExvcLoXKAt2Ii1ZPUkqjGGPyMqTL0dHTwpkGGYeS8MIY8jNnII2tpxPLMcpnBrr9NGMBo%2BTeGDrlM0YUWKEM%2Bgr1%2FZzyPCiyRMczodLbpzCRInIDXy5WPlKY6FaKn1iEePw3oEm9HUN7xdM%2BbiAedQ7YJWDSAJ54JNLIPvz35cWcC45gs5nFzBCL8XFO%2BXVEXOg4UlI74jZqSd9AcFJwPcD1PQAdOVwwIy4BCMeQtKcUPrnv5YRfCzxEdbsKrY7%2BvQN0nSMRSWVhHLf5jXPGj%2F8EGY%2BZNoIcli%2B79%2BFToPS3beO%2B%2Fj5AUAv4eYRT34lPQsbV6d0ymi2i3jaq%2FGTWQ8K6E1tRDAyMcS%2B8qk9OmBFRfhFRij3gRYLcn1o7s8ws0pJ1bCCI3WNg35cW5sp%2Flojx8Sbdo8kWOhtnzHtCywcB5PDt90DosUhRrePNona6%2FMtigXUTIu%2FwZpSZCnZlXl5cZx98%2FuPBaAZ23rCN9UawzJAInnDAeIFlLXv9rKwBPPPWziUkApVbX8AqyteRyWiN9Ji9xYOazMi1gVwHHYrmbCi%2FyDfzCdRN03pI6wTalR0KPPjqK9YiHGfTUqjaDPUzGmA2LSClTCvl8zEBjqkAXB06%2BRtnDuAARoal6nGt9Ee34tKs2nn7DuYLjRgwSp3nj7l9dqtIAv3BQVxfffgc0aKY8euohkJdW0mHQgOB4SpTSFlmf0ksXjkUbL9tvHaPOfdZOibtmaMMh8thGJADuPpbsFZCva1huyculym8GnoF43brrWNezYJkY7UCjjGbNpI6CvflNyPQAF3WlUMYjYa1RQhh3N3XIheWm3duLl38HCa&X-Amz-Signature=43b8d9c28991bdfa79b5ed053a87da2c195504819737d806b067845437345704&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZP6525Y%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T091706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQCzmzNqP4ZQ%2B%2F3ekjjkk0MjQTISxoCoOmL2P3IMqt9XxgIhAMnRKLRdj9fXfSxcmxE45I3vkb%2FejDsCs5pqaYhNIrlzKv8DCHEQABoMNjM3NDIzMTgzODA1IgzClaKJktcThMQ6tBUq3AM%2FHewC3%2Fg4mwquZOkbYrNRPsowqExvcLoXKAt2Ii1ZPUkqjGGPyMqTL0dHTwpkGGYeS8MIY8jNnII2tpxPLMcpnBrr9NGMBo%2BTeGDrlM0YUWKEM%2Bgr1%2FZzyPCiyRMczodLbpzCRInIDXy5WPlKY6FaKn1iEePw3oEm9HUN7xdM%2BbiAedQ7YJWDSAJ54JNLIPvz35cWcC45gs5nFzBCL8XFO%2BXVEXOg4UlI74jZqSd9AcFJwPcD1PQAdOVwwIy4BCMeQtKcUPrnv5YRfCzxEdbsKrY7%2BvQN0nSMRSWVhHLf5jXPGj%2F8EGY%2BZNoIcli%2B79%2BFToPS3beO%2B%2Fj5AUAv4eYRT34lPQsbV6d0ymi2i3jaq%2FGTWQ8K6E1tRDAyMcS%2B8qk9OmBFRfhFRij3gRYLcn1o7s8ws0pJ1bCCI3WNg35cW5sp%2Flojx8Sbdo8kWOhtnzHtCywcB5PDt90DosUhRrePNona6%2FMtigXUTIu%2FwZpSZCnZlXl5cZx98%2FuPBaAZ23rCN9UawzJAInnDAeIFlLXv9rKwBPPPWziUkApVbX8AqyteRyWiN9Ji9xYOazMi1gVwHHYrmbCi%2FyDfzCdRN03pI6wTalR0KPPjqK9YiHGfTUqjaDPUzGmA2LSClTCvl8zEBjqkAXB06%2BRtnDuAARoal6nGt9Ee34tKs2nn7DuYLjRgwSp3nj7l9dqtIAv3BQVxfffgc0aKY8euohkJdW0mHQgOB4SpTSFlmf0ksXjkUbL9tvHaPOfdZOibtmaMMh8thGJADuPpbsFZCva1huyculym8GnoF43brrWNezYJkY7UCjjGbNpI6CvflNyPQAF3WlUMYjYa1RQhh3N3XIheWm3duLl38HCa&X-Amz-Signature=817e4cfa036002f27e224413902ceb078493b996ab208233a0df82081c130294&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
