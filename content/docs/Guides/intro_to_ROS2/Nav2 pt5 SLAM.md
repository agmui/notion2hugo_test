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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEL4DHQU%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCLzO9l4rdI8ns5V3WsTkv38WaLMao6m4l4ohP5sPboLgIgGPXLQfugMnezGyQHkrmyvXoMJ9hDM6wAOkybJhJhhDAqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhoBkqPunmvm9y9jircA95VuMAlau%2BmPDS5dgBusyJkeBbVpMnaWHBdKxsjBpSDZcjISvLvdlkAm5zMr4p%2FDSz24dObnakOrhRxa7yW%2BKrD1HetGRHm2GpB0Lth94QZXy82G6ITEnl8B%2Br19CPsTjgo4IkSQPUozQmasckg6MKVC7mWzjK5U00DSgCjjOAACa7pq6wdtA4YyCTVSf10RERHrCq5qNh30Bfr5sgijayNx8YWQsiFhJZXfnctSZdt0CtcSaB6H2DMkqGv3B%2Fj7oRREqX03B%2B4jhzbGD1bWyg6T171tFvByo7J%2FNCXe8UKW4Qj5Cntmhh56YgJJe%2BYJMVMEIRnRtEOq1SgJpDSMtDS%2FIM3BHrt9O1GiO7lcXIyJFTosXoG0weqjtVt7GHDnxOTW5q76xDbugHOK6G9FvhagRzBikN9%2F5RmHnhwQYFqKxzhhL7c1ZOIMr9%2Fgx3hMr52ZUZKCWImmmbWsFkPTmYl9ONCTQr6K9o8tHNJA4e1oSVs4zRpdokDgCOnuIYflPYrUwp%2FdbHorsv1CtmeQI6gJLykb9Y%2BtuaBViTYZkDrAIzfg7Ic9aXXWFHIvNtHuQa4zXSvchMipJC7KdMFSTGxZJBcFPLSMA3TLhGESNHL4dTa6i82yT5PMxfkMNPr7swGOqUBjKsKCZiDTNE3TfuDsFe2pKyz8GPbD%2FDo9IzsrHUeIeVCrL6tihgXU2Te80GAnlKWAJYutt6cEVfUegO%2B5kRJb2hDVPRREkq4zQFHFuyRpzCc5%2Fz1k4ovwZ4x7Fkv2p3nvCFf22DWj8kCf2DS1fRDhiFc7wMc6QaHgrhAjiPXKJA%2Bg1dIiEGh4lKXNjxNvSCdfpqZ5BZGsiGjy2RKv8h5BU%2ByrnBl&X-Amz-Signature=d0c27ef57229e229147a39932a37531f3cf893afb09a22435f6e935cda885a6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEL4DHQU%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCLzO9l4rdI8ns5V3WsTkv38WaLMao6m4l4ohP5sPboLgIgGPXLQfugMnezGyQHkrmyvXoMJ9hDM6wAOkybJhJhhDAqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhoBkqPunmvm9y9jircA95VuMAlau%2BmPDS5dgBusyJkeBbVpMnaWHBdKxsjBpSDZcjISvLvdlkAm5zMr4p%2FDSz24dObnakOrhRxa7yW%2BKrD1HetGRHm2GpB0Lth94QZXy82G6ITEnl8B%2Br19CPsTjgo4IkSQPUozQmasckg6MKVC7mWzjK5U00DSgCjjOAACa7pq6wdtA4YyCTVSf10RERHrCq5qNh30Bfr5sgijayNx8YWQsiFhJZXfnctSZdt0CtcSaB6H2DMkqGv3B%2Fj7oRREqX03B%2B4jhzbGD1bWyg6T171tFvByo7J%2FNCXe8UKW4Qj5Cntmhh56YgJJe%2BYJMVMEIRnRtEOq1SgJpDSMtDS%2FIM3BHrt9O1GiO7lcXIyJFTosXoG0weqjtVt7GHDnxOTW5q76xDbugHOK6G9FvhagRzBikN9%2F5RmHnhwQYFqKxzhhL7c1ZOIMr9%2Fgx3hMr52ZUZKCWImmmbWsFkPTmYl9ONCTQr6K9o8tHNJA4e1oSVs4zRpdokDgCOnuIYflPYrUwp%2FdbHorsv1CtmeQI6gJLykb9Y%2BtuaBViTYZkDrAIzfg7Ic9aXXWFHIvNtHuQa4zXSvchMipJC7KdMFSTGxZJBcFPLSMA3TLhGESNHL4dTa6i82yT5PMxfkMNPr7swGOqUBjKsKCZiDTNE3TfuDsFe2pKyz8GPbD%2FDo9IzsrHUeIeVCrL6tihgXU2Te80GAnlKWAJYutt6cEVfUegO%2B5kRJb2hDVPRREkq4zQFHFuyRpzCc5%2Fz1k4ovwZ4x7Fkv2p3nvCFf22DWj8kCf2DS1fRDhiFc7wMc6QaHgrhAjiPXKJA%2Bg1dIiEGh4lKXNjxNvSCdfpqZ5BZGsiGjy2RKv8h5BU%2ByrnBl&X-Amz-Signature=bdc780aa2a844033849f2c3f31523f74854a459a4c7a820433fa0340de248806&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEL4DHQU%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCLzO9l4rdI8ns5V3WsTkv38WaLMao6m4l4ohP5sPboLgIgGPXLQfugMnezGyQHkrmyvXoMJ9hDM6wAOkybJhJhhDAqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhoBkqPunmvm9y9jircA95VuMAlau%2BmPDS5dgBusyJkeBbVpMnaWHBdKxsjBpSDZcjISvLvdlkAm5zMr4p%2FDSz24dObnakOrhRxa7yW%2BKrD1HetGRHm2GpB0Lth94QZXy82G6ITEnl8B%2Br19CPsTjgo4IkSQPUozQmasckg6MKVC7mWzjK5U00DSgCjjOAACa7pq6wdtA4YyCTVSf10RERHrCq5qNh30Bfr5sgijayNx8YWQsiFhJZXfnctSZdt0CtcSaB6H2DMkqGv3B%2Fj7oRREqX03B%2B4jhzbGD1bWyg6T171tFvByo7J%2FNCXe8UKW4Qj5Cntmhh56YgJJe%2BYJMVMEIRnRtEOq1SgJpDSMtDS%2FIM3BHrt9O1GiO7lcXIyJFTosXoG0weqjtVt7GHDnxOTW5q76xDbugHOK6G9FvhagRzBikN9%2F5RmHnhwQYFqKxzhhL7c1ZOIMr9%2Fgx3hMr52ZUZKCWImmmbWsFkPTmYl9ONCTQr6K9o8tHNJA4e1oSVs4zRpdokDgCOnuIYflPYrUwp%2FdbHorsv1CtmeQI6gJLykb9Y%2BtuaBViTYZkDrAIzfg7Ic9aXXWFHIvNtHuQa4zXSvchMipJC7KdMFSTGxZJBcFPLSMA3TLhGESNHL4dTa6i82yT5PMxfkMNPr7swGOqUBjKsKCZiDTNE3TfuDsFe2pKyz8GPbD%2FDo9IzsrHUeIeVCrL6tihgXU2Te80GAnlKWAJYutt6cEVfUegO%2B5kRJb2hDVPRREkq4zQFHFuyRpzCc5%2Fz1k4ovwZ4x7Fkv2p3nvCFf22DWj8kCf2DS1fRDhiFc7wMc6QaHgrhAjiPXKJA%2Bg1dIiEGh4lKXNjxNvSCdfpqZ5BZGsiGjy2RKv8h5BU%2ByrnBl&X-Amz-Signature=373cc01dc2622972cb83292134d3997d800056c81d93a7139d8b2f4e4a284545&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEL4DHQU%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCLzO9l4rdI8ns5V3WsTkv38WaLMao6m4l4ohP5sPboLgIgGPXLQfugMnezGyQHkrmyvXoMJ9hDM6wAOkybJhJhhDAqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhoBkqPunmvm9y9jircA95VuMAlau%2BmPDS5dgBusyJkeBbVpMnaWHBdKxsjBpSDZcjISvLvdlkAm5zMr4p%2FDSz24dObnakOrhRxa7yW%2BKrD1HetGRHm2GpB0Lth94QZXy82G6ITEnl8B%2Br19CPsTjgo4IkSQPUozQmasckg6MKVC7mWzjK5U00DSgCjjOAACa7pq6wdtA4YyCTVSf10RERHrCq5qNh30Bfr5sgijayNx8YWQsiFhJZXfnctSZdt0CtcSaB6H2DMkqGv3B%2Fj7oRREqX03B%2B4jhzbGD1bWyg6T171tFvByo7J%2FNCXe8UKW4Qj5Cntmhh56YgJJe%2BYJMVMEIRnRtEOq1SgJpDSMtDS%2FIM3BHrt9O1GiO7lcXIyJFTosXoG0weqjtVt7GHDnxOTW5q76xDbugHOK6G9FvhagRzBikN9%2F5RmHnhwQYFqKxzhhL7c1ZOIMr9%2Fgx3hMr52ZUZKCWImmmbWsFkPTmYl9ONCTQr6K9o8tHNJA4e1oSVs4zRpdokDgCOnuIYflPYrUwp%2FdbHorsv1CtmeQI6gJLykb9Y%2BtuaBViTYZkDrAIzfg7Ic9aXXWFHIvNtHuQa4zXSvchMipJC7KdMFSTGxZJBcFPLSMA3TLhGESNHL4dTa6i82yT5PMxfkMNPr7swGOqUBjKsKCZiDTNE3TfuDsFe2pKyz8GPbD%2FDo9IzsrHUeIeVCrL6tihgXU2Te80GAnlKWAJYutt6cEVfUegO%2B5kRJb2hDVPRREkq4zQFHFuyRpzCc5%2Fz1k4ovwZ4x7Fkv2p3nvCFf22DWj8kCf2DS1fRDhiFc7wMc6QaHgrhAjiPXKJA%2Bg1dIiEGh4lKXNjxNvSCdfpqZ5BZGsiGjy2RKv8h5BU%2ByrnBl&X-Amz-Signature=07bf599da8ac3b2a37b39176f000e5608eb1a577bdbab70b29ef4a30ddeb29c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEL4DHQU%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCLzO9l4rdI8ns5V3WsTkv38WaLMao6m4l4ohP5sPboLgIgGPXLQfugMnezGyQHkrmyvXoMJ9hDM6wAOkybJhJhhDAqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhoBkqPunmvm9y9jircA95VuMAlau%2BmPDS5dgBusyJkeBbVpMnaWHBdKxsjBpSDZcjISvLvdlkAm5zMr4p%2FDSz24dObnakOrhRxa7yW%2BKrD1HetGRHm2GpB0Lth94QZXy82G6ITEnl8B%2Br19CPsTjgo4IkSQPUozQmasckg6MKVC7mWzjK5U00DSgCjjOAACa7pq6wdtA4YyCTVSf10RERHrCq5qNh30Bfr5sgijayNx8YWQsiFhJZXfnctSZdt0CtcSaB6H2DMkqGv3B%2Fj7oRREqX03B%2B4jhzbGD1bWyg6T171tFvByo7J%2FNCXe8UKW4Qj5Cntmhh56YgJJe%2BYJMVMEIRnRtEOq1SgJpDSMtDS%2FIM3BHrt9O1GiO7lcXIyJFTosXoG0weqjtVt7GHDnxOTW5q76xDbugHOK6G9FvhagRzBikN9%2F5RmHnhwQYFqKxzhhL7c1ZOIMr9%2Fgx3hMr52ZUZKCWImmmbWsFkPTmYl9ONCTQr6K9o8tHNJA4e1oSVs4zRpdokDgCOnuIYflPYrUwp%2FdbHorsv1CtmeQI6gJLykb9Y%2BtuaBViTYZkDrAIzfg7Ic9aXXWFHIvNtHuQa4zXSvchMipJC7KdMFSTGxZJBcFPLSMA3TLhGESNHL4dTa6i82yT5PMxfkMNPr7swGOqUBjKsKCZiDTNE3TfuDsFe2pKyz8GPbD%2FDo9IzsrHUeIeVCrL6tihgXU2Te80GAnlKWAJYutt6cEVfUegO%2B5kRJb2hDVPRREkq4zQFHFuyRpzCc5%2Fz1k4ovwZ4x7Fkv2p3nvCFf22DWj8kCf2DS1fRDhiFc7wMc6QaHgrhAjiPXKJA%2Bg1dIiEGh4lKXNjxNvSCdfpqZ5BZGsiGjy2RKv8h5BU%2ByrnBl&X-Amz-Signature=70fb723bc3036d4f17856487da0d5a80b2c7f094473ec620e472d117aa1b8c9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEL4DHQU%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCLzO9l4rdI8ns5V3WsTkv38WaLMao6m4l4ohP5sPboLgIgGPXLQfugMnezGyQHkrmyvXoMJ9hDM6wAOkybJhJhhDAqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhoBkqPunmvm9y9jircA95VuMAlau%2BmPDS5dgBusyJkeBbVpMnaWHBdKxsjBpSDZcjISvLvdlkAm5zMr4p%2FDSz24dObnakOrhRxa7yW%2BKrD1HetGRHm2GpB0Lth94QZXy82G6ITEnl8B%2Br19CPsTjgo4IkSQPUozQmasckg6MKVC7mWzjK5U00DSgCjjOAACa7pq6wdtA4YyCTVSf10RERHrCq5qNh30Bfr5sgijayNx8YWQsiFhJZXfnctSZdt0CtcSaB6H2DMkqGv3B%2Fj7oRREqX03B%2B4jhzbGD1bWyg6T171tFvByo7J%2FNCXe8UKW4Qj5Cntmhh56YgJJe%2BYJMVMEIRnRtEOq1SgJpDSMtDS%2FIM3BHrt9O1GiO7lcXIyJFTosXoG0weqjtVt7GHDnxOTW5q76xDbugHOK6G9FvhagRzBikN9%2F5RmHnhwQYFqKxzhhL7c1ZOIMr9%2Fgx3hMr52ZUZKCWImmmbWsFkPTmYl9ONCTQr6K9o8tHNJA4e1oSVs4zRpdokDgCOnuIYflPYrUwp%2FdbHorsv1CtmeQI6gJLykb9Y%2BtuaBViTYZkDrAIzfg7Ic9aXXWFHIvNtHuQa4zXSvchMipJC7KdMFSTGxZJBcFPLSMA3TLhGESNHL4dTa6i82yT5PMxfkMNPr7swGOqUBjKsKCZiDTNE3TfuDsFe2pKyz8GPbD%2FDo9IzsrHUeIeVCrL6tihgXU2Te80GAnlKWAJYutt6cEVfUegO%2B5kRJb2hDVPRREkq4zQFHFuyRpzCc5%2Fz1k4ovwZ4x7Fkv2p3nvCFf22DWj8kCf2DS1fRDhiFc7wMc6QaHgrhAjiPXKJA%2Bg1dIiEGh4lKXNjxNvSCdfpqZ5BZGsiGjy2RKv8h5BU%2ByrnBl&X-Amz-Signature=347a61f144f2d44a05404bbe334041a5481ba229d264f9cc744f6ea9dcc60b1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEL4DHQU%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCLzO9l4rdI8ns5V3WsTkv38WaLMao6m4l4ohP5sPboLgIgGPXLQfugMnezGyQHkrmyvXoMJ9hDM6wAOkybJhJhhDAqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhoBkqPunmvm9y9jircA95VuMAlau%2BmPDS5dgBusyJkeBbVpMnaWHBdKxsjBpSDZcjISvLvdlkAm5zMr4p%2FDSz24dObnakOrhRxa7yW%2BKrD1HetGRHm2GpB0Lth94QZXy82G6ITEnl8B%2Br19CPsTjgo4IkSQPUozQmasckg6MKVC7mWzjK5U00DSgCjjOAACa7pq6wdtA4YyCTVSf10RERHrCq5qNh30Bfr5sgijayNx8YWQsiFhJZXfnctSZdt0CtcSaB6H2DMkqGv3B%2Fj7oRREqX03B%2B4jhzbGD1bWyg6T171tFvByo7J%2FNCXe8UKW4Qj5Cntmhh56YgJJe%2BYJMVMEIRnRtEOq1SgJpDSMtDS%2FIM3BHrt9O1GiO7lcXIyJFTosXoG0weqjtVt7GHDnxOTW5q76xDbugHOK6G9FvhagRzBikN9%2F5RmHnhwQYFqKxzhhL7c1ZOIMr9%2Fgx3hMr52ZUZKCWImmmbWsFkPTmYl9ONCTQr6K9o8tHNJA4e1oSVs4zRpdokDgCOnuIYflPYrUwp%2FdbHorsv1CtmeQI6gJLykb9Y%2BtuaBViTYZkDrAIzfg7Ic9aXXWFHIvNtHuQa4zXSvchMipJC7KdMFSTGxZJBcFPLSMA3TLhGESNHL4dTa6i82yT5PMxfkMNPr7swGOqUBjKsKCZiDTNE3TfuDsFe2pKyz8GPbD%2FDo9IzsrHUeIeVCrL6tihgXU2Te80GAnlKWAJYutt6cEVfUegO%2B5kRJb2hDVPRREkq4zQFHFuyRpzCc5%2Fz1k4ovwZ4x7Fkv2p3nvCFf22DWj8kCf2DS1fRDhiFc7wMc6QaHgrhAjiPXKJA%2Bg1dIiEGh4lKXNjxNvSCdfpqZ5BZGsiGjy2RKv8h5BU%2ByrnBl&X-Amz-Signature=e31c3b7222e81829454d5b3aac3663059b3626fd466cdb1b8354d292eca53872&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEL4DHQU%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCLzO9l4rdI8ns5V3WsTkv38WaLMao6m4l4ohP5sPboLgIgGPXLQfugMnezGyQHkrmyvXoMJ9hDM6wAOkybJhJhhDAqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhoBkqPunmvm9y9jircA95VuMAlau%2BmPDS5dgBusyJkeBbVpMnaWHBdKxsjBpSDZcjISvLvdlkAm5zMr4p%2FDSz24dObnakOrhRxa7yW%2BKrD1HetGRHm2GpB0Lth94QZXy82G6ITEnl8B%2Br19CPsTjgo4IkSQPUozQmasckg6MKVC7mWzjK5U00DSgCjjOAACa7pq6wdtA4YyCTVSf10RERHrCq5qNh30Bfr5sgijayNx8YWQsiFhJZXfnctSZdt0CtcSaB6H2DMkqGv3B%2Fj7oRREqX03B%2B4jhzbGD1bWyg6T171tFvByo7J%2FNCXe8UKW4Qj5Cntmhh56YgJJe%2BYJMVMEIRnRtEOq1SgJpDSMtDS%2FIM3BHrt9O1GiO7lcXIyJFTosXoG0weqjtVt7GHDnxOTW5q76xDbugHOK6G9FvhagRzBikN9%2F5RmHnhwQYFqKxzhhL7c1ZOIMr9%2Fgx3hMr52ZUZKCWImmmbWsFkPTmYl9ONCTQr6K9o8tHNJA4e1oSVs4zRpdokDgCOnuIYflPYrUwp%2FdbHorsv1CtmeQI6gJLykb9Y%2BtuaBViTYZkDrAIzfg7Ic9aXXWFHIvNtHuQa4zXSvchMipJC7KdMFSTGxZJBcFPLSMA3TLhGESNHL4dTa6i82yT5PMxfkMNPr7swGOqUBjKsKCZiDTNE3TfuDsFe2pKyz8GPbD%2FDo9IzsrHUeIeVCrL6tihgXU2Te80GAnlKWAJYutt6cEVfUegO%2B5kRJb2hDVPRREkq4zQFHFuyRpzCc5%2Fz1k4ovwZ4x7Fkv2p3nvCFf22DWj8kCf2DS1fRDhiFc7wMc6QaHgrhAjiPXKJA%2Bg1dIiEGh4lKXNjxNvSCdfpqZ5BZGsiGjy2RKv8h5BU%2ByrnBl&X-Amz-Signature=49fcd513095a803cf1e6444cd359218b368c75ec6d602f21bd72cd91fd459a80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEL4DHQU%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCLzO9l4rdI8ns5V3WsTkv38WaLMao6m4l4ohP5sPboLgIgGPXLQfugMnezGyQHkrmyvXoMJ9hDM6wAOkybJhJhhDAqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhoBkqPunmvm9y9jircA95VuMAlau%2BmPDS5dgBusyJkeBbVpMnaWHBdKxsjBpSDZcjISvLvdlkAm5zMr4p%2FDSz24dObnakOrhRxa7yW%2BKrD1HetGRHm2GpB0Lth94QZXy82G6ITEnl8B%2Br19CPsTjgo4IkSQPUozQmasckg6MKVC7mWzjK5U00DSgCjjOAACa7pq6wdtA4YyCTVSf10RERHrCq5qNh30Bfr5sgijayNx8YWQsiFhJZXfnctSZdt0CtcSaB6H2DMkqGv3B%2Fj7oRREqX03B%2B4jhzbGD1bWyg6T171tFvByo7J%2FNCXe8UKW4Qj5Cntmhh56YgJJe%2BYJMVMEIRnRtEOq1SgJpDSMtDS%2FIM3BHrt9O1GiO7lcXIyJFTosXoG0weqjtVt7GHDnxOTW5q76xDbugHOK6G9FvhagRzBikN9%2F5RmHnhwQYFqKxzhhL7c1ZOIMr9%2Fgx3hMr52ZUZKCWImmmbWsFkPTmYl9ONCTQr6K9o8tHNJA4e1oSVs4zRpdokDgCOnuIYflPYrUwp%2FdbHorsv1CtmeQI6gJLykb9Y%2BtuaBViTYZkDrAIzfg7Ic9aXXWFHIvNtHuQa4zXSvchMipJC7KdMFSTGxZJBcFPLSMA3TLhGESNHL4dTa6i82yT5PMxfkMNPr7swGOqUBjKsKCZiDTNE3TfuDsFe2pKyz8GPbD%2FDo9IzsrHUeIeVCrL6tihgXU2Te80GAnlKWAJYutt6cEVfUegO%2B5kRJb2hDVPRREkq4zQFHFuyRpzCc5%2Fz1k4ovwZ4x7Fkv2p3nvCFf22DWj8kCf2DS1fRDhiFc7wMc6QaHgrhAjiPXKJA%2Bg1dIiEGh4lKXNjxNvSCdfpqZ5BZGsiGjy2RKv8h5BU%2ByrnBl&X-Amz-Signature=aeea4e02dc4e3b5a4142e81b6179dc3ddc1db28271c63e23a31d5969e3fc5a4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEL4DHQU%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCLzO9l4rdI8ns5V3WsTkv38WaLMao6m4l4ohP5sPboLgIgGPXLQfugMnezGyQHkrmyvXoMJ9hDM6wAOkybJhJhhDAqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhoBkqPunmvm9y9jircA95VuMAlau%2BmPDS5dgBusyJkeBbVpMnaWHBdKxsjBpSDZcjISvLvdlkAm5zMr4p%2FDSz24dObnakOrhRxa7yW%2BKrD1HetGRHm2GpB0Lth94QZXy82G6ITEnl8B%2Br19CPsTjgo4IkSQPUozQmasckg6MKVC7mWzjK5U00DSgCjjOAACa7pq6wdtA4YyCTVSf10RERHrCq5qNh30Bfr5sgijayNx8YWQsiFhJZXfnctSZdt0CtcSaB6H2DMkqGv3B%2Fj7oRREqX03B%2B4jhzbGD1bWyg6T171tFvByo7J%2FNCXe8UKW4Qj5Cntmhh56YgJJe%2BYJMVMEIRnRtEOq1SgJpDSMtDS%2FIM3BHrt9O1GiO7lcXIyJFTosXoG0weqjtVt7GHDnxOTW5q76xDbugHOK6G9FvhagRzBikN9%2F5RmHnhwQYFqKxzhhL7c1ZOIMr9%2Fgx3hMr52ZUZKCWImmmbWsFkPTmYl9ONCTQr6K9o8tHNJA4e1oSVs4zRpdokDgCOnuIYflPYrUwp%2FdbHorsv1CtmeQI6gJLykb9Y%2BtuaBViTYZkDrAIzfg7Ic9aXXWFHIvNtHuQa4zXSvchMipJC7KdMFSTGxZJBcFPLSMA3TLhGESNHL4dTa6i82yT5PMxfkMNPr7swGOqUBjKsKCZiDTNE3TfuDsFe2pKyz8GPbD%2FDo9IzsrHUeIeVCrL6tihgXU2Te80GAnlKWAJYutt6cEVfUegO%2B5kRJb2hDVPRREkq4zQFHFuyRpzCc5%2Fz1k4ovwZ4x7Fkv2p3nvCFf22DWj8kCf2DS1fRDhiFc7wMc6QaHgrhAjiPXKJA%2Bg1dIiEGh4lKXNjxNvSCdfpqZ5BZGsiGjy2RKv8h5BU%2ByrnBl&X-Amz-Signature=7bbbd490c5cd115afb3c87384db472d6d0519a877b5721fb45725fedca466d69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEL4DHQU%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCLzO9l4rdI8ns5V3WsTkv38WaLMao6m4l4ohP5sPboLgIgGPXLQfugMnezGyQHkrmyvXoMJ9hDM6wAOkybJhJhhDAqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhoBkqPunmvm9y9jircA95VuMAlau%2BmPDS5dgBusyJkeBbVpMnaWHBdKxsjBpSDZcjISvLvdlkAm5zMr4p%2FDSz24dObnakOrhRxa7yW%2BKrD1HetGRHm2GpB0Lth94QZXy82G6ITEnl8B%2Br19CPsTjgo4IkSQPUozQmasckg6MKVC7mWzjK5U00DSgCjjOAACa7pq6wdtA4YyCTVSf10RERHrCq5qNh30Bfr5sgijayNx8YWQsiFhJZXfnctSZdt0CtcSaB6H2DMkqGv3B%2Fj7oRREqX03B%2B4jhzbGD1bWyg6T171tFvByo7J%2FNCXe8UKW4Qj5Cntmhh56YgJJe%2BYJMVMEIRnRtEOq1SgJpDSMtDS%2FIM3BHrt9O1GiO7lcXIyJFTosXoG0weqjtVt7GHDnxOTW5q76xDbugHOK6G9FvhagRzBikN9%2F5RmHnhwQYFqKxzhhL7c1ZOIMr9%2Fgx3hMr52ZUZKCWImmmbWsFkPTmYl9ONCTQr6K9o8tHNJA4e1oSVs4zRpdokDgCOnuIYflPYrUwp%2FdbHorsv1CtmeQI6gJLykb9Y%2BtuaBViTYZkDrAIzfg7Ic9aXXWFHIvNtHuQa4zXSvchMipJC7KdMFSTGxZJBcFPLSMA3TLhGESNHL4dTa6i82yT5PMxfkMNPr7swGOqUBjKsKCZiDTNE3TfuDsFe2pKyz8GPbD%2FDo9IzsrHUeIeVCrL6tihgXU2Te80GAnlKWAJYutt6cEVfUegO%2B5kRJb2hDVPRREkq4zQFHFuyRpzCc5%2Fz1k4ovwZ4x7Fkv2p3nvCFf22DWj8kCf2DS1fRDhiFc7wMc6QaHgrhAjiPXKJA%2Bg1dIiEGh4lKXNjxNvSCdfpqZ5BZGsiGjy2RKv8h5BU%2ByrnBl&X-Amz-Signature=5f56614c77bad43a5f368eb92c620ded2fc7ef9f53a547dbc07cb0989370f8c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEL4DHQU%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCLzO9l4rdI8ns5V3WsTkv38WaLMao6m4l4ohP5sPboLgIgGPXLQfugMnezGyQHkrmyvXoMJ9hDM6wAOkybJhJhhDAqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhoBkqPunmvm9y9jircA95VuMAlau%2BmPDS5dgBusyJkeBbVpMnaWHBdKxsjBpSDZcjISvLvdlkAm5zMr4p%2FDSz24dObnakOrhRxa7yW%2BKrD1HetGRHm2GpB0Lth94QZXy82G6ITEnl8B%2Br19CPsTjgo4IkSQPUozQmasckg6MKVC7mWzjK5U00DSgCjjOAACa7pq6wdtA4YyCTVSf10RERHrCq5qNh30Bfr5sgijayNx8YWQsiFhJZXfnctSZdt0CtcSaB6H2DMkqGv3B%2Fj7oRREqX03B%2B4jhzbGD1bWyg6T171tFvByo7J%2FNCXe8UKW4Qj5Cntmhh56YgJJe%2BYJMVMEIRnRtEOq1SgJpDSMtDS%2FIM3BHrt9O1GiO7lcXIyJFTosXoG0weqjtVt7GHDnxOTW5q76xDbugHOK6G9FvhagRzBikN9%2F5RmHnhwQYFqKxzhhL7c1ZOIMr9%2Fgx3hMr52ZUZKCWImmmbWsFkPTmYl9ONCTQr6K9o8tHNJA4e1oSVs4zRpdokDgCOnuIYflPYrUwp%2FdbHorsv1CtmeQI6gJLykb9Y%2BtuaBViTYZkDrAIzfg7Ic9aXXWFHIvNtHuQa4zXSvchMipJC7KdMFSTGxZJBcFPLSMA3TLhGESNHL4dTa6i82yT5PMxfkMNPr7swGOqUBjKsKCZiDTNE3TfuDsFe2pKyz8GPbD%2FDo9IzsrHUeIeVCrL6tihgXU2Te80GAnlKWAJYutt6cEVfUegO%2B5kRJb2hDVPRREkq4zQFHFuyRpzCc5%2Fz1k4ovwZ4x7Fkv2p3nvCFf22DWj8kCf2DS1fRDhiFc7wMc6QaHgrhAjiPXKJA%2Bg1dIiEGh4lKXNjxNvSCdfpqZ5BZGsiGjy2RKv8h5BU%2ByrnBl&X-Amz-Signature=71dabef7e2c366f82894629cf0f7905009a33dd7ad00230d4204ab90c253b0db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEL4DHQU%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCLzO9l4rdI8ns5V3WsTkv38WaLMao6m4l4ohP5sPboLgIgGPXLQfugMnezGyQHkrmyvXoMJ9hDM6wAOkybJhJhhDAqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhoBkqPunmvm9y9jircA95VuMAlau%2BmPDS5dgBusyJkeBbVpMnaWHBdKxsjBpSDZcjISvLvdlkAm5zMr4p%2FDSz24dObnakOrhRxa7yW%2BKrD1HetGRHm2GpB0Lth94QZXy82G6ITEnl8B%2Br19CPsTjgo4IkSQPUozQmasckg6MKVC7mWzjK5U00DSgCjjOAACa7pq6wdtA4YyCTVSf10RERHrCq5qNh30Bfr5sgijayNx8YWQsiFhJZXfnctSZdt0CtcSaB6H2DMkqGv3B%2Fj7oRREqX03B%2B4jhzbGD1bWyg6T171tFvByo7J%2FNCXe8UKW4Qj5Cntmhh56YgJJe%2BYJMVMEIRnRtEOq1SgJpDSMtDS%2FIM3BHrt9O1GiO7lcXIyJFTosXoG0weqjtVt7GHDnxOTW5q76xDbugHOK6G9FvhagRzBikN9%2F5RmHnhwQYFqKxzhhL7c1ZOIMr9%2Fgx3hMr52ZUZKCWImmmbWsFkPTmYl9ONCTQr6K9o8tHNJA4e1oSVs4zRpdokDgCOnuIYflPYrUwp%2FdbHorsv1CtmeQI6gJLykb9Y%2BtuaBViTYZkDrAIzfg7Ic9aXXWFHIvNtHuQa4zXSvchMipJC7KdMFSTGxZJBcFPLSMA3TLhGESNHL4dTa6i82yT5PMxfkMNPr7swGOqUBjKsKCZiDTNE3TfuDsFe2pKyz8GPbD%2FDo9IzsrHUeIeVCrL6tihgXU2Te80GAnlKWAJYutt6cEVfUegO%2B5kRJb2hDVPRREkq4zQFHFuyRpzCc5%2Fz1k4ovwZ4x7Fkv2p3nvCFf22DWj8kCf2DS1fRDhiFc7wMc6QaHgrhAjiPXKJA%2Bg1dIiEGh4lKXNjxNvSCdfpqZ5BZGsiGjy2RKv8h5BU%2ByrnBl&X-Amz-Signature=4f46bef7a5fa6882f1355ea859510173369d8b3ffebcca5247ec05f749f0b9ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEL4DHQU%2F20260223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260223T021241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCLzO9l4rdI8ns5V3WsTkv38WaLMao6m4l4ohP5sPboLgIgGPXLQfugMnezGyQHkrmyvXoMJ9hDM6wAOkybJhJhhDAqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJhoBkqPunmvm9y9jircA95VuMAlau%2BmPDS5dgBusyJkeBbVpMnaWHBdKxsjBpSDZcjISvLvdlkAm5zMr4p%2FDSz24dObnakOrhRxa7yW%2BKrD1HetGRHm2GpB0Lth94QZXy82G6ITEnl8B%2Br19CPsTjgo4IkSQPUozQmasckg6MKVC7mWzjK5U00DSgCjjOAACa7pq6wdtA4YyCTVSf10RERHrCq5qNh30Bfr5sgijayNx8YWQsiFhJZXfnctSZdt0CtcSaB6H2DMkqGv3B%2Fj7oRREqX03B%2B4jhzbGD1bWyg6T171tFvByo7J%2FNCXe8UKW4Qj5Cntmhh56YgJJe%2BYJMVMEIRnRtEOq1SgJpDSMtDS%2FIM3BHrt9O1GiO7lcXIyJFTosXoG0weqjtVt7GHDnxOTW5q76xDbugHOK6G9FvhagRzBikN9%2F5RmHnhwQYFqKxzhhL7c1ZOIMr9%2Fgx3hMr52ZUZKCWImmmbWsFkPTmYl9ONCTQr6K9o8tHNJA4e1oSVs4zRpdokDgCOnuIYflPYrUwp%2FdbHorsv1CtmeQI6gJLykb9Y%2BtuaBViTYZkDrAIzfg7Ic9aXXWFHIvNtHuQa4zXSvchMipJC7KdMFSTGxZJBcFPLSMA3TLhGESNHL4dTa6i82yT5PMxfkMNPr7swGOqUBjKsKCZiDTNE3TfuDsFe2pKyz8GPbD%2FDo9IzsrHUeIeVCrL6tihgXU2Te80GAnlKWAJYutt6cEVfUegO%2B5kRJb2hDVPRREkq4zQFHFuyRpzCc5%2Fz1k4ovwZ4x7Fkv2p3nvCFf22DWj8kCf2DS1fRDhiFc7wMc6QaHgrhAjiPXKJA%2Bg1dIiEGh4lKXNjxNvSCdfpqZ5BZGsiGjy2RKv8h5BU%2ByrnBl&X-Amz-Signature=e4dc036c893336bd04f954c6b3d745724cd5e79a53be337e8fe4b0a13462dc51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
