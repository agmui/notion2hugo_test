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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JBW4HT5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BhJ6zGSy44GfTu%2Bx%2FPhFg7%2BnbIuuyhQ9c%2FvdpDB4LkAiEA40nQGLsYBmT1vWLWc4PeL8AQm2hqgo1S49NTOyH%2BT%2F8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIY8UzUzW0SL%2FksiayrcA5sAH6u8YqQFyq3uy7nIe5M88%2Bq1MQbPHh%2FVj8UUgw6I7CuWrsWxcZyOGV4KWkw6S2fEu0mE%2FoFhJerbFXtGqt%2BYUymqNNFGyHn8fcBSg2Uparbv4b8rTkaL2dzuf5LVKqAKORTfJDru8MtfHR6XZ2a%2Bg3FsPvs%2FRpo3IRwilgLksu9sN6pc53B9l3J4FHIqOEaYepbsK5k9h1%2B32sUPaZ5XeHKkBSagV5%2FkoGMS3vpLvoomAH%2BUGOwpBD1bFo8la9IpQHutOUogfMSuFmu0rRQaRUDjqc34GGxxCnZmMOHKpCrXDQJWWpDNecCdUFVw6z62Pq5ai8PoxM%2FaRuCdOfUi8Pv4UvDs7UxOnPYn8swJxX35slRMl%2BmAmGqfoN6rbrYKi2q8a2bsMMh%2BRkLmjPRUEWiZEAgrEfIMRCS7%2FU5HY2uMMZ0%2Bo2tCv0WRPL29u90BF0YYktLshIFgbBMlIQI4jH5MUYURG2Ic1YFtEV3p7a8TaIm7ie5aPFb5pqz198qYsa6DYkOnoVRE6auumhkyOa%2Ff%2Fx%2FkxEj3ar0YSDbDWGDIokQb60%2BlKGVK9xhac1MBNPVtzE4VNDd7MpiyL3iHhTQc%2FclcumtRDwT564wauV%2BzvIyKwzX%2BNQljMOmQssQGOqUBWP5yvy77pYcxT9fOo5r1Gk3tEpr9HtyvWR2TLnvubIvHiiQxfpq4FJ9RixNevpvY%2BNH56DRTASAmdBlTMlK8CeQzHrpVpQPLhOeZQjFmjke0j5JJGx44zsDB3jawV%2FqD4yu2LGyMPA0mQ8q5MOkysMVR1bonpf9ahzuFCxJ1WRABWaitNExuTZ9UaJhNc5POCQo5V42KK5VyROBb%2B3he3b3A7ei1&X-Amz-Signature=bee978f7759e9fb659b7d07c6d98c4a71448df1ecbb030f5a18b37ae567b5b1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JBW4HT5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BhJ6zGSy44GfTu%2Bx%2FPhFg7%2BnbIuuyhQ9c%2FvdpDB4LkAiEA40nQGLsYBmT1vWLWc4PeL8AQm2hqgo1S49NTOyH%2BT%2F8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIY8UzUzW0SL%2FksiayrcA5sAH6u8YqQFyq3uy7nIe5M88%2Bq1MQbPHh%2FVj8UUgw6I7CuWrsWxcZyOGV4KWkw6S2fEu0mE%2FoFhJerbFXtGqt%2BYUymqNNFGyHn8fcBSg2Uparbv4b8rTkaL2dzuf5LVKqAKORTfJDru8MtfHR6XZ2a%2Bg3FsPvs%2FRpo3IRwilgLksu9sN6pc53B9l3J4FHIqOEaYepbsK5k9h1%2B32sUPaZ5XeHKkBSagV5%2FkoGMS3vpLvoomAH%2BUGOwpBD1bFo8la9IpQHutOUogfMSuFmu0rRQaRUDjqc34GGxxCnZmMOHKpCrXDQJWWpDNecCdUFVw6z62Pq5ai8PoxM%2FaRuCdOfUi8Pv4UvDs7UxOnPYn8swJxX35slRMl%2BmAmGqfoN6rbrYKi2q8a2bsMMh%2BRkLmjPRUEWiZEAgrEfIMRCS7%2FU5HY2uMMZ0%2Bo2tCv0WRPL29u90BF0YYktLshIFgbBMlIQI4jH5MUYURG2Ic1YFtEV3p7a8TaIm7ie5aPFb5pqz198qYsa6DYkOnoVRE6auumhkyOa%2Ff%2Fx%2FkxEj3ar0YSDbDWGDIokQb60%2BlKGVK9xhac1MBNPVtzE4VNDd7MpiyL3iHhTQc%2FclcumtRDwT564wauV%2BzvIyKwzX%2BNQljMOmQssQGOqUBWP5yvy77pYcxT9fOo5r1Gk3tEpr9HtyvWR2TLnvubIvHiiQxfpq4FJ9RixNevpvY%2BNH56DRTASAmdBlTMlK8CeQzHrpVpQPLhOeZQjFmjke0j5JJGx44zsDB3jawV%2FqD4yu2LGyMPA0mQ8q5MOkysMVR1bonpf9ahzuFCxJ1WRABWaitNExuTZ9UaJhNc5POCQo5V42KK5VyROBb%2B3he3b3A7ei1&X-Amz-Signature=fe609f4c85ccf3f05016edb96907a3fa8937d0d07edd5ba016f31a8ed59a3678&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JBW4HT5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BhJ6zGSy44GfTu%2Bx%2FPhFg7%2BnbIuuyhQ9c%2FvdpDB4LkAiEA40nQGLsYBmT1vWLWc4PeL8AQm2hqgo1S49NTOyH%2BT%2F8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIY8UzUzW0SL%2FksiayrcA5sAH6u8YqQFyq3uy7nIe5M88%2Bq1MQbPHh%2FVj8UUgw6I7CuWrsWxcZyOGV4KWkw6S2fEu0mE%2FoFhJerbFXtGqt%2BYUymqNNFGyHn8fcBSg2Uparbv4b8rTkaL2dzuf5LVKqAKORTfJDru8MtfHR6XZ2a%2Bg3FsPvs%2FRpo3IRwilgLksu9sN6pc53B9l3J4FHIqOEaYepbsK5k9h1%2B32sUPaZ5XeHKkBSagV5%2FkoGMS3vpLvoomAH%2BUGOwpBD1bFo8la9IpQHutOUogfMSuFmu0rRQaRUDjqc34GGxxCnZmMOHKpCrXDQJWWpDNecCdUFVw6z62Pq5ai8PoxM%2FaRuCdOfUi8Pv4UvDs7UxOnPYn8swJxX35slRMl%2BmAmGqfoN6rbrYKi2q8a2bsMMh%2BRkLmjPRUEWiZEAgrEfIMRCS7%2FU5HY2uMMZ0%2Bo2tCv0WRPL29u90BF0YYktLshIFgbBMlIQI4jH5MUYURG2Ic1YFtEV3p7a8TaIm7ie5aPFb5pqz198qYsa6DYkOnoVRE6auumhkyOa%2Ff%2Fx%2FkxEj3ar0YSDbDWGDIokQb60%2BlKGVK9xhac1MBNPVtzE4VNDd7MpiyL3iHhTQc%2FclcumtRDwT564wauV%2BzvIyKwzX%2BNQljMOmQssQGOqUBWP5yvy77pYcxT9fOo5r1Gk3tEpr9HtyvWR2TLnvubIvHiiQxfpq4FJ9RixNevpvY%2BNH56DRTASAmdBlTMlK8CeQzHrpVpQPLhOeZQjFmjke0j5JJGx44zsDB3jawV%2FqD4yu2LGyMPA0mQ8q5MOkysMVR1bonpf9ahzuFCxJ1WRABWaitNExuTZ9UaJhNc5POCQo5V42KK5VyROBb%2B3he3b3A7ei1&X-Amz-Signature=eac348dedb7647059960075823c3105d98f7c66a68bfabe28be5826d3d087c0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JBW4HT5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BhJ6zGSy44GfTu%2Bx%2FPhFg7%2BnbIuuyhQ9c%2FvdpDB4LkAiEA40nQGLsYBmT1vWLWc4PeL8AQm2hqgo1S49NTOyH%2BT%2F8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIY8UzUzW0SL%2FksiayrcA5sAH6u8YqQFyq3uy7nIe5M88%2Bq1MQbPHh%2FVj8UUgw6I7CuWrsWxcZyOGV4KWkw6S2fEu0mE%2FoFhJerbFXtGqt%2BYUymqNNFGyHn8fcBSg2Uparbv4b8rTkaL2dzuf5LVKqAKORTfJDru8MtfHR6XZ2a%2Bg3FsPvs%2FRpo3IRwilgLksu9sN6pc53B9l3J4FHIqOEaYepbsK5k9h1%2B32sUPaZ5XeHKkBSagV5%2FkoGMS3vpLvoomAH%2BUGOwpBD1bFo8la9IpQHutOUogfMSuFmu0rRQaRUDjqc34GGxxCnZmMOHKpCrXDQJWWpDNecCdUFVw6z62Pq5ai8PoxM%2FaRuCdOfUi8Pv4UvDs7UxOnPYn8swJxX35slRMl%2BmAmGqfoN6rbrYKi2q8a2bsMMh%2BRkLmjPRUEWiZEAgrEfIMRCS7%2FU5HY2uMMZ0%2Bo2tCv0WRPL29u90BF0YYktLshIFgbBMlIQI4jH5MUYURG2Ic1YFtEV3p7a8TaIm7ie5aPFb5pqz198qYsa6DYkOnoVRE6auumhkyOa%2Ff%2Fx%2FkxEj3ar0YSDbDWGDIokQb60%2BlKGVK9xhac1MBNPVtzE4VNDd7MpiyL3iHhTQc%2FclcumtRDwT564wauV%2BzvIyKwzX%2BNQljMOmQssQGOqUBWP5yvy77pYcxT9fOo5r1Gk3tEpr9HtyvWR2TLnvubIvHiiQxfpq4FJ9RixNevpvY%2BNH56DRTASAmdBlTMlK8CeQzHrpVpQPLhOeZQjFmjke0j5JJGx44zsDB3jawV%2FqD4yu2LGyMPA0mQ8q5MOkysMVR1bonpf9ahzuFCxJ1WRABWaitNExuTZ9UaJhNc5POCQo5V42KK5VyROBb%2B3he3b3A7ei1&X-Amz-Signature=97d8ded3df416e4d1639b6a38ef9567eb5f0bb3d49c6fea0c63fe9b58ea1936b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JBW4HT5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BhJ6zGSy44GfTu%2Bx%2FPhFg7%2BnbIuuyhQ9c%2FvdpDB4LkAiEA40nQGLsYBmT1vWLWc4PeL8AQm2hqgo1S49NTOyH%2BT%2F8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIY8UzUzW0SL%2FksiayrcA5sAH6u8YqQFyq3uy7nIe5M88%2Bq1MQbPHh%2FVj8UUgw6I7CuWrsWxcZyOGV4KWkw6S2fEu0mE%2FoFhJerbFXtGqt%2BYUymqNNFGyHn8fcBSg2Uparbv4b8rTkaL2dzuf5LVKqAKORTfJDru8MtfHR6XZ2a%2Bg3FsPvs%2FRpo3IRwilgLksu9sN6pc53B9l3J4FHIqOEaYepbsK5k9h1%2B32sUPaZ5XeHKkBSagV5%2FkoGMS3vpLvoomAH%2BUGOwpBD1bFo8la9IpQHutOUogfMSuFmu0rRQaRUDjqc34GGxxCnZmMOHKpCrXDQJWWpDNecCdUFVw6z62Pq5ai8PoxM%2FaRuCdOfUi8Pv4UvDs7UxOnPYn8swJxX35slRMl%2BmAmGqfoN6rbrYKi2q8a2bsMMh%2BRkLmjPRUEWiZEAgrEfIMRCS7%2FU5HY2uMMZ0%2Bo2tCv0WRPL29u90BF0YYktLshIFgbBMlIQI4jH5MUYURG2Ic1YFtEV3p7a8TaIm7ie5aPFb5pqz198qYsa6DYkOnoVRE6auumhkyOa%2Ff%2Fx%2FkxEj3ar0YSDbDWGDIokQb60%2BlKGVK9xhac1MBNPVtzE4VNDd7MpiyL3iHhTQc%2FclcumtRDwT564wauV%2BzvIyKwzX%2BNQljMOmQssQGOqUBWP5yvy77pYcxT9fOo5r1Gk3tEpr9HtyvWR2TLnvubIvHiiQxfpq4FJ9RixNevpvY%2BNH56DRTASAmdBlTMlK8CeQzHrpVpQPLhOeZQjFmjke0j5JJGx44zsDB3jawV%2FqD4yu2LGyMPA0mQ8q5MOkysMVR1bonpf9ahzuFCxJ1WRABWaitNExuTZ9UaJhNc5POCQo5V42KK5VyROBb%2B3he3b3A7ei1&X-Amz-Signature=b2b0b7be431ce69cd951fd1bae663753c31a141d62bdca15b77829fee10ca400&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JBW4HT5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BhJ6zGSy44GfTu%2Bx%2FPhFg7%2BnbIuuyhQ9c%2FvdpDB4LkAiEA40nQGLsYBmT1vWLWc4PeL8AQm2hqgo1S49NTOyH%2BT%2F8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIY8UzUzW0SL%2FksiayrcA5sAH6u8YqQFyq3uy7nIe5M88%2Bq1MQbPHh%2FVj8UUgw6I7CuWrsWxcZyOGV4KWkw6S2fEu0mE%2FoFhJerbFXtGqt%2BYUymqNNFGyHn8fcBSg2Uparbv4b8rTkaL2dzuf5LVKqAKORTfJDru8MtfHR6XZ2a%2Bg3FsPvs%2FRpo3IRwilgLksu9sN6pc53B9l3J4FHIqOEaYepbsK5k9h1%2B32sUPaZ5XeHKkBSagV5%2FkoGMS3vpLvoomAH%2BUGOwpBD1bFo8la9IpQHutOUogfMSuFmu0rRQaRUDjqc34GGxxCnZmMOHKpCrXDQJWWpDNecCdUFVw6z62Pq5ai8PoxM%2FaRuCdOfUi8Pv4UvDs7UxOnPYn8swJxX35slRMl%2BmAmGqfoN6rbrYKi2q8a2bsMMh%2BRkLmjPRUEWiZEAgrEfIMRCS7%2FU5HY2uMMZ0%2Bo2tCv0WRPL29u90BF0YYktLshIFgbBMlIQI4jH5MUYURG2Ic1YFtEV3p7a8TaIm7ie5aPFb5pqz198qYsa6DYkOnoVRE6auumhkyOa%2Ff%2Fx%2FkxEj3ar0YSDbDWGDIokQb60%2BlKGVK9xhac1MBNPVtzE4VNDd7MpiyL3iHhTQc%2FclcumtRDwT564wauV%2BzvIyKwzX%2BNQljMOmQssQGOqUBWP5yvy77pYcxT9fOo5r1Gk3tEpr9HtyvWR2TLnvubIvHiiQxfpq4FJ9RixNevpvY%2BNH56DRTASAmdBlTMlK8CeQzHrpVpQPLhOeZQjFmjke0j5JJGx44zsDB3jawV%2FqD4yu2LGyMPA0mQ8q5MOkysMVR1bonpf9ahzuFCxJ1WRABWaitNExuTZ9UaJhNc5POCQo5V42KK5VyROBb%2B3he3b3A7ei1&X-Amz-Signature=0afd5335e33f87013856418a6da748e0ded5922555c1ff488c1d25b39614b7a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JBW4HT5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BhJ6zGSy44GfTu%2Bx%2FPhFg7%2BnbIuuyhQ9c%2FvdpDB4LkAiEA40nQGLsYBmT1vWLWc4PeL8AQm2hqgo1S49NTOyH%2BT%2F8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIY8UzUzW0SL%2FksiayrcA5sAH6u8YqQFyq3uy7nIe5M88%2Bq1MQbPHh%2FVj8UUgw6I7CuWrsWxcZyOGV4KWkw6S2fEu0mE%2FoFhJerbFXtGqt%2BYUymqNNFGyHn8fcBSg2Uparbv4b8rTkaL2dzuf5LVKqAKORTfJDru8MtfHR6XZ2a%2Bg3FsPvs%2FRpo3IRwilgLksu9sN6pc53B9l3J4FHIqOEaYepbsK5k9h1%2B32sUPaZ5XeHKkBSagV5%2FkoGMS3vpLvoomAH%2BUGOwpBD1bFo8la9IpQHutOUogfMSuFmu0rRQaRUDjqc34GGxxCnZmMOHKpCrXDQJWWpDNecCdUFVw6z62Pq5ai8PoxM%2FaRuCdOfUi8Pv4UvDs7UxOnPYn8swJxX35slRMl%2BmAmGqfoN6rbrYKi2q8a2bsMMh%2BRkLmjPRUEWiZEAgrEfIMRCS7%2FU5HY2uMMZ0%2Bo2tCv0WRPL29u90BF0YYktLshIFgbBMlIQI4jH5MUYURG2Ic1YFtEV3p7a8TaIm7ie5aPFb5pqz198qYsa6DYkOnoVRE6auumhkyOa%2Ff%2Fx%2FkxEj3ar0YSDbDWGDIokQb60%2BlKGVK9xhac1MBNPVtzE4VNDd7MpiyL3iHhTQc%2FclcumtRDwT564wauV%2BzvIyKwzX%2BNQljMOmQssQGOqUBWP5yvy77pYcxT9fOo5r1Gk3tEpr9HtyvWR2TLnvubIvHiiQxfpq4FJ9RixNevpvY%2BNH56DRTASAmdBlTMlK8CeQzHrpVpQPLhOeZQjFmjke0j5JJGx44zsDB3jawV%2FqD4yu2LGyMPA0mQ8q5MOkysMVR1bonpf9ahzuFCxJ1WRABWaitNExuTZ9UaJhNc5POCQo5V42KK5VyROBb%2B3he3b3A7ei1&X-Amz-Signature=1f762294c58bce30b52a0dcb4fdfad9d22855755e7ea49fa5d0d83418fa0a63e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JBW4HT5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BhJ6zGSy44GfTu%2Bx%2FPhFg7%2BnbIuuyhQ9c%2FvdpDB4LkAiEA40nQGLsYBmT1vWLWc4PeL8AQm2hqgo1S49NTOyH%2BT%2F8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIY8UzUzW0SL%2FksiayrcA5sAH6u8YqQFyq3uy7nIe5M88%2Bq1MQbPHh%2FVj8UUgw6I7CuWrsWxcZyOGV4KWkw6S2fEu0mE%2FoFhJerbFXtGqt%2BYUymqNNFGyHn8fcBSg2Uparbv4b8rTkaL2dzuf5LVKqAKORTfJDru8MtfHR6XZ2a%2Bg3FsPvs%2FRpo3IRwilgLksu9sN6pc53B9l3J4FHIqOEaYepbsK5k9h1%2B32sUPaZ5XeHKkBSagV5%2FkoGMS3vpLvoomAH%2BUGOwpBD1bFo8la9IpQHutOUogfMSuFmu0rRQaRUDjqc34GGxxCnZmMOHKpCrXDQJWWpDNecCdUFVw6z62Pq5ai8PoxM%2FaRuCdOfUi8Pv4UvDs7UxOnPYn8swJxX35slRMl%2BmAmGqfoN6rbrYKi2q8a2bsMMh%2BRkLmjPRUEWiZEAgrEfIMRCS7%2FU5HY2uMMZ0%2Bo2tCv0WRPL29u90BF0YYktLshIFgbBMlIQI4jH5MUYURG2Ic1YFtEV3p7a8TaIm7ie5aPFb5pqz198qYsa6DYkOnoVRE6auumhkyOa%2Ff%2Fx%2FkxEj3ar0YSDbDWGDIokQb60%2BlKGVK9xhac1MBNPVtzE4VNDd7MpiyL3iHhTQc%2FclcumtRDwT564wauV%2BzvIyKwzX%2BNQljMOmQssQGOqUBWP5yvy77pYcxT9fOo5r1Gk3tEpr9HtyvWR2TLnvubIvHiiQxfpq4FJ9RixNevpvY%2BNH56DRTASAmdBlTMlK8CeQzHrpVpQPLhOeZQjFmjke0j5JJGx44zsDB3jawV%2FqD4yu2LGyMPA0mQ8q5MOkysMVR1bonpf9ahzuFCxJ1WRABWaitNExuTZ9UaJhNc5POCQo5V42KK5VyROBb%2B3he3b3A7ei1&X-Amz-Signature=626d49b19bfec5f84f73b0e1224f24b5c147db820ad35a0712620d4cdeee1428&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JBW4HT5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BhJ6zGSy44GfTu%2Bx%2FPhFg7%2BnbIuuyhQ9c%2FvdpDB4LkAiEA40nQGLsYBmT1vWLWc4PeL8AQm2hqgo1S49NTOyH%2BT%2F8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIY8UzUzW0SL%2FksiayrcA5sAH6u8YqQFyq3uy7nIe5M88%2Bq1MQbPHh%2FVj8UUgw6I7CuWrsWxcZyOGV4KWkw6S2fEu0mE%2FoFhJerbFXtGqt%2BYUymqNNFGyHn8fcBSg2Uparbv4b8rTkaL2dzuf5LVKqAKORTfJDru8MtfHR6XZ2a%2Bg3FsPvs%2FRpo3IRwilgLksu9sN6pc53B9l3J4FHIqOEaYepbsK5k9h1%2B32sUPaZ5XeHKkBSagV5%2FkoGMS3vpLvoomAH%2BUGOwpBD1bFo8la9IpQHutOUogfMSuFmu0rRQaRUDjqc34GGxxCnZmMOHKpCrXDQJWWpDNecCdUFVw6z62Pq5ai8PoxM%2FaRuCdOfUi8Pv4UvDs7UxOnPYn8swJxX35slRMl%2BmAmGqfoN6rbrYKi2q8a2bsMMh%2BRkLmjPRUEWiZEAgrEfIMRCS7%2FU5HY2uMMZ0%2Bo2tCv0WRPL29u90BF0YYktLshIFgbBMlIQI4jH5MUYURG2Ic1YFtEV3p7a8TaIm7ie5aPFb5pqz198qYsa6DYkOnoVRE6auumhkyOa%2Ff%2Fx%2FkxEj3ar0YSDbDWGDIokQb60%2BlKGVK9xhac1MBNPVtzE4VNDd7MpiyL3iHhTQc%2FclcumtRDwT564wauV%2BzvIyKwzX%2BNQljMOmQssQGOqUBWP5yvy77pYcxT9fOo5r1Gk3tEpr9HtyvWR2TLnvubIvHiiQxfpq4FJ9RixNevpvY%2BNH56DRTASAmdBlTMlK8CeQzHrpVpQPLhOeZQjFmjke0j5JJGx44zsDB3jawV%2FqD4yu2LGyMPA0mQ8q5MOkysMVR1bonpf9ahzuFCxJ1WRABWaitNExuTZ9UaJhNc5POCQo5V42KK5VyROBb%2B3he3b3A7ei1&X-Amz-Signature=15d4c2fdabc41e6ab39fc3e44dd66f7fb76f46c12cadb0258dc784ee93c9c963&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JBW4HT5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BhJ6zGSy44GfTu%2Bx%2FPhFg7%2BnbIuuyhQ9c%2FvdpDB4LkAiEA40nQGLsYBmT1vWLWc4PeL8AQm2hqgo1S49NTOyH%2BT%2F8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIY8UzUzW0SL%2FksiayrcA5sAH6u8YqQFyq3uy7nIe5M88%2Bq1MQbPHh%2FVj8UUgw6I7CuWrsWxcZyOGV4KWkw6S2fEu0mE%2FoFhJerbFXtGqt%2BYUymqNNFGyHn8fcBSg2Uparbv4b8rTkaL2dzuf5LVKqAKORTfJDru8MtfHR6XZ2a%2Bg3FsPvs%2FRpo3IRwilgLksu9sN6pc53B9l3J4FHIqOEaYepbsK5k9h1%2B32sUPaZ5XeHKkBSagV5%2FkoGMS3vpLvoomAH%2BUGOwpBD1bFo8la9IpQHutOUogfMSuFmu0rRQaRUDjqc34GGxxCnZmMOHKpCrXDQJWWpDNecCdUFVw6z62Pq5ai8PoxM%2FaRuCdOfUi8Pv4UvDs7UxOnPYn8swJxX35slRMl%2BmAmGqfoN6rbrYKi2q8a2bsMMh%2BRkLmjPRUEWiZEAgrEfIMRCS7%2FU5HY2uMMZ0%2Bo2tCv0WRPL29u90BF0YYktLshIFgbBMlIQI4jH5MUYURG2Ic1YFtEV3p7a8TaIm7ie5aPFb5pqz198qYsa6DYkOnoVRE6auumhkyOa%2Ff%2Fx%2FkxEj3ar0YSDbDWGDIokQb60%2BlKGVK9xhac1MBNPVtzE4VNDd7MpiyL3iHhTQc%2FclcumtRDwT564wauV%2BzvIyKwzX%2BNQljMOmQssQGOqUBWP5yvy77pYcxT9fOo5r1Gk3tEpr9HtyvWR2TLnvubIvHiiQxfpq4FJ9RixNevpvY%2BNH56DRTASAmdBlTMlK8CeQzHrpVpQPLhOeZQjFmjke0j5JJGx44zsDB3jawV%2FqD4yu2LGyMPA0mQ8q5MOkysMVR1bonpf9ahzuFCxJ1WRABWaitNExuTZ9UaJhNc5POCQo5V42KK5VyROBb%2B3he3b3A7ei1&X-Amz-Signature=df23bc5e5501d1e9dceb5713de815c56231bb9152b5410a880af0e32e80bfd80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JBW4HT5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BhJ6zGSy44GfTu%2Bx%2FPhFg7%2BnbIuuyhQ9c%2FvdpDB4LkAiEA40nQGLsYBmT1vWLWc4PeL8AQm2hqgo1S49NTOyH%2BT%2F8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIY8UzUzW0SL%2FksiayrcA5sAH6u8YqQFyq3uy7nIe5M88%2Bq1MQbPHh%2FVj8UUgw6I7CuWrsWxcZyOGV4KWkw6S2fEu0mE%2FoFhJerbFXtGqt%2BYUymqNNFGyHn8fcBSg2Uparbv4b8rTkaL2dzuf5LVKqAKORTfJDru8MtfHR6XZ2a%2Bg3FsPvs%2FRpo3IRwilgLksu9sN6pc53B9l3J4FHIqOEaYepbsK5k9h1%2B32sUPaZ5XeHKkBSagV5%2FkoGMS3vpLvoomAH%2BUGOwpBD1bFo8la9IpQHutOUogfMSuFmu0rRQaRUDjqc34GGxxCnZmMOHKpCrXDQJWWpDNecCdUFVw6z62Pq5ai8PoxM%2FaRuCdOfUi8Pv4UvDs7UxOnPYn8swJxX35slRMl%2BmAmGqfoN6rbrYKi2q8a2bsMMh%2BRkLmjPRUEWiZEAgrEfIMRCS7%2FU5HY2uMMZ0%2Bo2tCv0WRPL29u90BF0YYktLshIFgbBMlIQI4jH5MUYURG2Ic1YFtEV3p7a8TaIm7ie5aPFb5pqz198qYsa6DYkOnoVRE6auumhkyOa%2Ff%2Fx%2FkxEj3ar0YSDbDWGDIokQb60%2BlKGVK9xhac1MBNPVtzE4VNDd7MpiyL3iHhTQc%2FclcumtRDwT564wauV%2BzvIyKwzX%2BNQljMOmQssQGOqUBWP5yvy77pYcxT9fOo5r1Gk3tEpr9HtyvWR2TLnvubIvHiiQxfpq4FJ9RixNevpvY%2BNH56DRTASAmdBlTMlK8CeQzHrpVpQPLhOeZQjFmjke0j5JJGx44zsDB3jawV%2FqD4yu2LGyMPA0mQ8q5MOkysMVR1bonpf9ahzuFCxJ1WRABWaitNExuTZ9UaJhNc5POCQo5V42KK5VyROBb%2B3he3b3A7ei1&X-Amz-Signature=af399b216b22ddfbdaa2590864f9efb77c3a770e631aab0257d4a58b84db1388&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JBW4HT5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BhJ6zGSy44GfTu%2Bx%2FPhFg7%2BnbIuuyhQ9c%2FvdpDB4LkAiEA40nQGLsYBmT1vWLWc4PeL8AQm2hqgo1S49NTOyH%2BT%2F8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIY8UzUzW0SL%2FksiayrcA5sAH6u8YqQFyq3uy7nIe5M88%2Bq1MQbPHh%2FVj8UUgw6I7CuWrsWxcZyOGV4KWkw6S2fEu0mE%2FoFhJerbFXtGqt%2BYUymqNNFGyHn8fcBSg2Uparbv4b8rTkaL2dzuf5LVKqAKORTfJDru8MtfHR6XZ2a%2Bg3FsPvs%2FRpo3IRwilgLksu9sN6pc53B9l3J4FHIqOEaYepbsK5k9h1%2B32sUPaZ5XeHKkBSagV5%2FkoGMS3vpLvoomAH%2BUGOwpBD1bFo8la9IpQHutOUogfMSuFmu0rRQaRUDjqc34GGxxCnZmMOHKpCrXDQJWWpDNecCdUFVw6z62Pq5ai8PoxM%2FaRuCdOfUi8Pv4UvDs7UxOnPYn8swJxX35slRMl%2BmAmGqfoN6rbrYKi2q8a2bsMMh%2BRkLmjPRUEWiZEAgrEfIMRCS7%2FU5HY2uMMZ0%2Bo2tCv0WRPL29u90BF0YYktLshIFgbBMlIQI4jH5MUYURG2Ic1YFtEV3p7a8TaIm7ie5aPFb5pqz198qYsa6DYkOnoVRE6auumhkyOa%2Ff%2Fx%2FkxEj3ar0YSDbDWGDIokQb60%2BlKGVK9xhac1MBNPVtzE4VNDd7MpiyL3iHhTQc%2FclcumtRDwT564wauV%2BzvIyKwzX%2BNQljMOmQssQGOqUBWP5yvy77pYcxT9fOo5r1Gk3tEpr9HtyvWR2TLnvubIvHiiQxfpq4FJ9RixNevpvY%2BNH56DRTASAmdBlTMlK8CeQzHrpVpQPLhOeZQjFmjke0j5JJGx44zsDB3jawV%2FqD4yu2LGyMPA0mQ8q5MOkysMVR1bonpf9ahzuFCxJ1WRABWaitNExuTZ9UaJhNc5POCQo5V42KK5VyROBb%2B3he3b3A7ei1&X-Amz-Signature=bb94b2848fa15a9a18098d2a0998c77ebccda2b3605f2a52d2a97d67f5989fb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JBW4HT5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BhJ6zGSy44GfTu%2Bx%2FPhFg7%2BnbIuuyhQ9c%2FvdpDB4LkAiEA40nQGLsYBmT1vWLWc4PeL8AQm2hqgo1S49NTOyH%2BT%2F8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIY8UzUzW0SL%2FksiayrcA5sAH6u8YqQFyq3uy7nIe5M88%2Bq1MQbPHh%2FVj8UUgw6I7CuWrsWxcZyOGV4KWkw6S2fEu0mE%2FoFhJerbFXtGqt%2BYUymqNNFGyHn8fcBSg2Uparbv4b8rTkaL2dzuf5LVKqAKORTfJDru8MtfHR6XZ2a%2Bg3FsPvs%2FRpo3IRwilgLksu9sN6pc53B9l3J4FHIqOEaYepbsK5k9h1%2B32sUPaZ5XeHKkBSagV5%2FkoGMS3vpLvoomAH%2BUGOwpBD1bFo8la9IpQHutOUogfMSuFmu0rRQaRUDjqc34GGxxCnZmMOHKpCrXDQJWWpDNecCdUFVw6z62Pq5ai8PoxM%2FaRuCdOfUi8Pv4UvDs7UxOnPYn8swJxX35slRMl%2BmAmGqfoN6rbrYKi2q8a2bsMMh%2BRkLmjPRUEWiZEAgrEfIMRCS7%2FU5HY2uMMZ0%2Bo2tCv0WRPL29u90BF0YYktLshIFgbBMlIQI4jH5MUYURG2Ic1YFtEV3p7a8TaIm7ie5aPFb5pqz198qYsa6DYkOnoVRE6auumhkyOa%2Ff%2Fx%2FkxEj3ar0YSDbDWGDIokQb60%2BlKGVK9xhac1MBNPVtzE4VNDd7MpiyL3iHhTQc%2FclcumtRDwT564wauV%2BzvIyKwzX%2BNQljMOmQssQGOqUBWP5yvy77pYcxT9fOo5r1Gk3tEpr9HtyvWR2TLnvubIvHiiQxfpq4FJ9RixNevpvY%2BNH56DRTASAmdBlTMlK8CeQzHrpVpQPLhOeZQjFmjke0j5JJGx44zsDB3jawV%2FqD4yu2LGyMPA0mQ8q5MOkysMVR1bonpf9ahzuFCxJ1WRABWaitNExuTZ9UaJhNc5POCQo5V42KK5VyROBb%2B3he3b3A7ei1&X-Amz-Signature=361751f1adcf03a4eb64240773a2daea0533b85e669fde4e65f7365d23290d25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JBW4HT5%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BhJ6zGSy44GfTu%2Bx%2FPhFg7%2BnbIuuyhQ9c%2FvdpDB4LkAiEA40nQGLsYBmT1vWLWc4PeL8AQm2hqgo1S49NTOyH%2BT%2F8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIY8UzUzW0SL%2FksiayrcA5sAH6u8YqQFyq3uy7nIe5M88%2Bq1MQbPHh%2FVj8UUgw6I7CuWrsWxcZyOGV4KWkw6S2fEu0mE%2FoFhJerbFXtGqt%2BYUymqNNFGyHn8fcBSg2Uparbv4b8rTkaL2dzuf5LVKqAKORTfJDru8MtfHR6XZ2a%2Bg3FsPvs%2FRpo3IRwilgLksu9sN6pc53B9l3J4FHIqOEaYepbsK5k9h1%2B32sUPaZ5XeHKkBSagV5%2FkoGMS3vpLvoomAH%2BUGOwpBD1bFo8la9IpQHutOUogfMSuFmu0rRQaRUDjqc34GGxxCnZmMOHKpCrXDQJWWpDNecCdUFVw6z62Pq5ai8PoxM%2FaRuCdOfUi8Pv4UvDs7UxOnPYn8swJxX35slRMl%2BmAmGqfoN6rbrYKi2q8a2bsMMh%2BRkLmjPRUEWiZEAgrEfIMRCS7%2FU5HY2uMMZ0%2Bo2tCv0WRPL29u90BF0YYktLshIFgbBMlIQI4jH5MUYURG2Ic1YFtEV3p7a8TaIm7ie5aPFb5pqz198qYsa6DYkOnoVRE6auumhkyOa%2Ff%2Fx%2FkxEj3ar0YSDbDWGDIokQb60%2BlKGVK9xhac1MBNPVtzE4VNDd7MpiyL3iHhTQc%2FclcumtRDwT564wauV%2BzvIyKwzX%2BNQljMOmQssQGOqUBWP5yvy77pYcxT9fOo5r1Gk3tEpr9HtyvWR2TLnvubIvHiiQxfpq4FJ9RixNevpvY%2BNH56DRTASAmdBlTMlK8CeQzHrpVpQPLhOeZQjFmjke0j5JJGx44zsDB3jawV%2FqD4yu2LGyMPA0mQ8q5MOkysMVR1bonpf9ahzuFCxJ1WRABWaitNExuTZ9UaJhNc5POCQo5V42KK5VyROBb%2B3he3b3A7ei1&X-Amz-Signature=23d2bc78d8b6eb1d82bd891d927b818bacfb85fd56f5198786bfe4e29b1009fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
