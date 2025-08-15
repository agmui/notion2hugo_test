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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXAVMXSJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD5X2lIf548%2BSc647p2A0FeMAADxCNjXZ1vlffniLhK3QIgICjA003DypzCAYZegFP9guyt4c%2FoZrBThI%2FHpcburBQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDLKO8JZWarkDTfMPuCrcAwxcZx8MXH6sTfTL3FzOLGFA%2F1uxQinzRVUfTAJ%2FA3VYm%2BJk%2FReb5P7OTkqGqZ5DVeD4HPheaCO4ICz%2Fg%2Bc6hHfnj1x47VyzIGgWfVFbqIogdh9KKlAt6uhf6r5n%2F0%2FDXhY1mZsqP31hVIDiDa0rTdYDLlHLJURrPYO1hfm5K%2BNn7LI4lg3wwkPUbEjmlodPoQURdvaI%2B3G3XjlGykXWmXCexI7yv8T2R%2FP7EASmUAFXmRDRzbEdeYxms7P96yS2fSctlQieR2kTgCc3GNWhLYr%2F%2FHPzfciewwnGw0xudzjGex4mgvWV1y5RgM4ET1vZVV5FLoV7CGgrf89LPuk%2B6OUPvthSQzVe5%2ByMMsD4qbqi17znZ8p2pTDPjyE%2BVEXPI61%2B2IgADUS7zAZ%2BoxM4ca8oA%2FTW4SwKnwQTc2J8sqkrC6jVyrxnCaKM6b9VU%2FZ3NqGaSozwOzcfjLY2LOSJiG3Us%2FFz1X5UTqerLpnFtF9DvkfsB20W%2FSCzpE8BtSWUif8q%2F7MEQWY6Mu0efDsilKXIuqUbjhKLsKrCh7UG%2BTD%2B%2BFM7KbG3MnhzG07AbGDt9wWpJv3T%2FmL8oFx1E37jT%2FgvD2E6TVLXdROMTi8KJuHuNYXT5khaFY%2Bw6PBEMN2j%2BsQGOqUBp5AiOHm%2ByVJb0a7Cp7qxMFBLmtQLBo9dpcTqEmygOpEspVzr0GBDnouxdVqTwJnKZwcEEaikNXLouuoXl8ae9p24XrD0m0lsj%2FiJ8nkmxx%2BqXRtWJTUzyujvITQ%2BrTFbuuQ9pflgqKCy5jNzJ%2FxaXNY4wHGlETTm4xUI3KxmE8K%2BtQdS4iNBlbcCioiUWFiChHT2%2F7slIvzwEDcEXgdZ%2FXLDFp5C&X-Amz-Signature=45a6cd7d4814ede4632328d45cfbcab8d7b7d16bca2b39e2d3b6f5db249cfec6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXAVMXSJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD5X2lIf548%2BSc647p2A0FeMAADxCNjXZ1vlffniLhK3QIgICjA003DypzCAYZegFP9guyt4c%2FoZrBThI%2FHpcburBQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDLKO8JZWarkDTfMPuCrcAwxcZx8MXH6sTfTL3FzOLGFA%2F1uxQinzRVUfTAJ%2FA3VYm%2BJk%2FReb5P7OTkqGqZ5DVeD4HPheaCO4ICz%2Fg%2Bc6hHfnj1x47VyzIGgWfVFbqIogdh9KKlAt6uhf6r5n%2F0%2FDXhY1mZsqP31hVIDiDa0rTdYDLlHLJURrPYO1hfm5K%2BNn7LI4lg3wwkPUbEjmlodPoQURdvaI%2B3G3XjlGykXWmXCexI7yv8T2R%2FP7EASmUAFXmRDRzbEdeYxms7P96yS2fSctlQieR2kTgCc3GNWhLYr%2F%2FHPzfciewwnGw0xudzjGex4mgvWV1y5RgM4ET1vZVV5FLoV7CGgrf89LPuk%2B6OUPvthSQzVe5%2ByMMsD4qbqi17znZ8p2pTDPjyE%2BVEXPI61%2B2IgADUS7zAZ%2BoxM4ca8oA%2FTW4SwKnwQTc2J8sqkrC6jVyrxnCaKM6b9VU%2FZ3NqGaSozwOzcfjLY2LOSJiG3Us%2FFz1X5UTqerLpnFtF9DvkfsB20W%2FSCzpE8BtSWUif8q%2F7MEQWY6Mu0efDsilKXIuqUbjhKLsKrCh7UG%2BTD%2B%2BFM7KbG3MnhzG07AbGDt9wWpJv3T%2FmL8oFx1E37jT%2FgvD2E6TVLXdROMTi8KJuHuNYXT5khaFY%2Bw6PBEMN2j%2BsQGOqUBp5AiOHm%2ByVJb0a7Cp7qxMFBLmtQLBo9dpcTqEmygOpEspVzr0GBDnouxdVqTwJnKZwcEEaikNXLouuoXl8ae9p24XrD0m0lsj%2FiJ8nkmxx%2BqXRtWJTUzyujvITQ%2BrTFbuuQ9pflgqKCy5jNzJ%2FxaXNY4wHGlETTm4xUI3KxmE8K%2BtQdS4iNBlbcCioiUWFiChHT2%2F7slIvzwEDcEXgdZ%2FXLDFp5C&X-Amz-Signature=682b830b63a39d0fd0e6e86fff23bc2f20d0cb5e11f18d882db971ed7cb40760&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXAVMXSJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD5X2lIf548%2BSc647p2A0FeMAADxCNjXZ1vlffniLhK3QIgICjA003DypzCAYZegFP9guyt4c%2FoZrBThI%2FHpcburBQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDLKO8JZWarkDTfMPuCrcAwxcZx8MXH6sTfTL3FzOLGFA%2F1uxQinzRVUfTAJ%2FA3VYm%2BJk%2FReb5P7OTkqGqZ5DVeD4HPheaCO4ICz%2Fg%2Bc6hHfnj1x47VyzIGgWfVFbqIogdh9KKlAt6uhf6r5n%2F0%2FDXhY1mZsqP31hVIDiDa0rTdYDLlHLJURrPYO1hfm5K%2BNn7LI4lg3wwkPUbEjmlodPoQURdvaI%2B3G3XjlGykXWmXCexI7yv8T2R%2FP7EASmUAFXmRDRzbEdeYxms7P96yS2fSctlQieR2kTgCc3GNWhLYr%2F%2FHPzfciewwnGw0xudzjGex4mgvWV1y5RgM4ET1vZVV5FLoV7CGgrf89LPuk%2B6OUPvthSQzVe5%2ByMMsD4qbqi17znZ8p2pTDPjyE%2BVEXPI61%2B2IgADUS7zAZ%2BoxM4ca8oA%2FTW4SwKnwQTc2J8sqkrC6jVyrxnCaKM6b9VU%2FZ3NqGaSozwOzcfjLY2LOSJiG3Us%2FFz1X5UTqerLpnFtF9DvkfsB20W%2FSCzpE8BtSWUif8q%2F7MEQWY6Mu0efDsilKXIuqUbjhKLsKrCh7UG%2BTD%2B%2BFM7KbG3MnhzG07AbGDt9wWpJv3T%2FmL8oFx1E37jT%2FgvD2E6TVLXdROMTi8KJuHuNYXT5khaFY%2Bw6PBEMN2j%2BsQGOqUBp5AiOHm%2ByVJb0a7Cp7qxMFBLmtQLBo9dpcTqEmygOpEspVzr0GBDnouxdVqTwJnKZwcEEaikNXLouuoXl8ae9p24XrD0m0lsj%2FiJ8nkmxx%2BqXRtWJTUzyujvITQ%2BrTFbuuQ9pflgqKCy5jNzJ%2FxaXNY4wHGlETTm4xUI3KxmE8K%2BtQdS4iNBlbcCioiUWFiChHT2%2F7slIvzwEDcEXgdZ%2FXLDFp5C&X-Amz-Signature=55e009f4a1991cd8f8631d603dd2bec509e494b9879ff47e92035da035b4e863&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXAVMXSJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD5X2lIf548%2BSc647p2A0FeMAADxCNjXZ1vlffniLhK3QIgICjA003DypzCAYZegFP9guyt4c%2FoZrBThI%2FHpcburBQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDLKO8JZWarkDTfMPuCrcAwxcZx8MXH6sTfTL3FzOLGFA%2F1uxQinzRVUfTAJ%2FA3VYm%2BJk%2FReb5P7OTkqGqZ5DVeD4HPheaCO4ICz%2Fg%2Bc6hHfnj1x47VyzIGgWfVFbqIogdh9KKlAt6uhf6r5n%2F0%2FDXhY1mZsqP31hVIDiDa0rTdYDLlHLJURrPYO1hfm5K%2BNn7LI4lg3wwkPUbEjmlodPoQURdvaI%2B3G3XjlGykXWmXCexI7yv8T2R%2FP7EASmUAFXmRDRzbEdeYxms7P96yS2fSctlQieR2kTgCc3GNWhLYr%2F%2FHPzfciewwnGw0xudzjGex4mgvWV1y5RgM4ET1vZVV5FLoV7CGgrf89LPuk%2B6OUPvthSQzVe5%2ByMMsD4qbqi17znZ8p2pTDPjyE%2BVEXPI61%2B2IgADUS7zAZ%2BoxM4ca8oA%2FTW4SwKnwQTc2J8sqkrC6jVyrxnCaKM6b9VU%2FZ3NqGaSozwOzcfjLY2LOSJiG3Us%2FFz1X5UTqerLpnFtF9DvkfsB20W%2FSCzpE8BtSWUif8q%2F7MEQWY6Mu0efDsilKXIuqUbjhKLsKrCh7UG%2BTD%2B%2BFM7KbG3MnhzG07AbGDt9wWpJv3T%2FmL8oFx1E37jT%2FgvD2E6TVLXdROMTi8KJuHuNYXT5khaFY%2Bw6PBEMN2j%2BsQGOqUBp5AiOHm%2ByVJb0a7Cp7qxMFBLmtQLBo9dpcTqEmygOpEspVzr0GBDnouxdVqTwJnKZwcEEaikNXLouuoXl8ae9p24XrD0m0lsj%2FiJ8nkmxx%2BqXRtWJTUzyujvITQ%2BrTFbuuQ9pflgqKCy5jNzJ%2FxaXNY4wHGlETTm4xUI3KxmE8K%2BtQdS4iNBlbcCioiUWFiChHT2%2F7slIvzwEDcEXgdZ%2FXLDFp5C&X-Amz-Signature=739fd9cf25c524c75789c8703fb5f8537d0595a7231a12acc3e5755d65495861&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXAVMXSJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD5X2lIf548%2BSc647p2A0FeMAADxCNjXZ1vlffniLhK3QIgICjA003DypzCAYZegFP9guyt4c%2FoZrBThI%2FHpcburBQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDLKO8JZWarkDTfMPuCrcAwxcZx8MXH6sTfTL3FzOLGFA%2F1uxQinzRVUfTAJ%2FA3VYm%2BJk%2FReb5P7OTkqGqZ5DVeD4HPheaCO4ICz%2Fg%2Bc6hHfnj1x47VyzIGgWfVFbqIogdh9KKlAt6uhf6r5n%2F0%2FDXhY1mZsqP31hVIDiDa0rTdYDLlHLJURrPYO1hfm5K%2BNn7LI4lg3wwkPUbEjmlodPoQURdvaI%2B3G3XjlGykXWmXCexI7yv8T2R%2FP7EASmUAFXmRDRzbEdeYxms7P96yS2fSctlQieR2kTgCc3GNWhLYr%2F%2FHPzfciewwnGw0xudzjGex4mgvWV1y5RgM4ET1vZVV5FLoV7CGgrf89LPuk%2B6OUPvthSQzVe5%2ByMMsD4qbqi17znZ8p2pTDPjyE%2BVEXPI61%2B2IgADUS7zAZ%2BoxM4ca8oA%2FTW4SwKnwQTc2J8sqkrC6jVyrxnCaKM6b9VU%2FZ3NqGaSozwOzcfjLY2LOSJiG3Us%2FFz1X5UTqerLpnFtF9DvkfsB20W%2FSCzpE8BtSWUif8q%2F7MEQWY6Mu0efDsilKXIuqUbjhKLsKrCh7UG%2BTD%2B%2BFM7KbG3MnhzG07AbGDt9wWpJv3T%2FmL8oFx1E37jT%2FgvD2E6TVLXdROMTi8KJuHuNYXT5khaFY%2Bw6PBEMN2j%2BsQGOqUBp5AiOHm%2ByVJb0a7Cp7qxMFBLmtQLBo9dpcTqEmygOpEspVzr0GBDnouxdVqTwJnKZwcEEaikNXLouuoXl8ae9p24XrD0m0lsj%2FiJ8nkmxx%2BqXRtWJTUzyujvITQ%2BrTFbuuQ9pflgqKCy5jNzJ%2FxaXNY4wHGlETTm4xUI3KxmE8K%2BtQdS4iNBlbcCioiUWFiChHT2%2F7slIvzwEDcEXgdZ%2FXLDFp5C&X-Amz-Signature=9fb538d80e76c4b8d211375f716a5722c11b740f07f703d5dda60847c2f47b78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXAVMXSJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD5X2lIf548%2BSc647p2A0FeMAADxCNjXZ1vlffniLhK3QIgICjA003DypzCAYZegFP9guyt4c%2FoZrBThI%2FHpcburBQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDLKO8JZWarkDTfMPuCrcAwxcZx8MXH6sTfTL3FzOLGFA%2F1uxQinzRVUfTAJ%2FA3VYm%2BJk%2FReb5P7OTkqGqZ5DVeD4HPheaCO4ICz%2Fg%2Bc6hHfnj1x47VyzIGgWfVFbqIogdh9KKlAt6uhf6r5n%2F0%2FDXhY1mZsqP31hVIDiDa0rTdYDLlHLJURrPYO1hfm5K%2BNn7LI4lg3wwkPUbEjmlodPoQURdvaI%2B3G3XjlGykXWmXCexI7yv8T2R%2FP7EASmUAFXmRDRzbEdeYxms7P96yS2fSctlQieR2kTgCc3GNWhLYr%2F%2FHPzfciewwnGw0xudzjGex4mgvWV1y5RgM4ET1vZVV5FLoV7CGgrf89LPuk%2B6OUPvthSQzVe5%2ByMMsD4qbqi17znZ8p2pTDPjyE%2BVEXPI61%2B2IgADUS7zAZ%2BoxM4ca8oA%2FTW4SwKnwQTc2J8sqkrC6jVyrxnCaKM6b9VU%2FZ3NqGaSozwOzcfjLY2LOSJiG3Us%2FFz1X5UTqerLpnFtF9DvkfsB20W%2FSCzpE8BtSWUif8q%2F7MEQWY6Mu0efDsilKXIuqUbjhKLsKrCh7UG%2BTD%2B%2BFM7KbG3MnhzG07AbGDt9wWpJv3T%2FmL8oFx1E37jT%2FgvD2E6TVLXdROMTi8KJuHuNYXT5khaFY%2Bw6PBEMN2j%2BsQGOqUBp5AiOHm%2ByVJb0a7Cp7qxMFBLmtQLBo9dpcTqEmygOpEspVzr0GBDnouxdVqTwJnKZwcEEaikNXLouuoXl8ae9p24XrD0m0lsj%2FiJ8nkmxx%2BqXRtWJTUzyujvITQ%2BrTFbuuQ9pflgqKCy5jNzJ%2FxaXNY4wHGlETTm4xUI3KxmE8K%2BtQdS4iNBlbcCioiUWFiChHT2%2F7slIvzwEDcEXgdZ%2FXLDFp5C&X-Amz-Signature=462f6a7c6134f1e364b4aa8014ab55c32f93e50e04a5aa8789c3b94af802735a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXAVMXSJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD5X2lIf548%2BSc647p2A0FeMAADxCNjXZ1vlffniLhK3QIgICjA003DypzCAYZegFP9guyt4c%2FoZrBThI%2FHpcburBQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDLKO8JZWarkDTfMPuCrcAwxcZx8MXH6sTfTL3FzOLGFA%2F1uxQinzRVUfTAJ%2FA3VYm%2BJk%2FReb5P7OTkqGqZ5DVeD4HPheaCO4ICz%2Fg%2Bc6hHfnj1x47VyzIGgWfVFbqIogdh9KKlAt6uhf6r5n%2F0%2FDXhY1mZsqP31hVIDiDa0rTdYDLlHLJURrPYO1hfm5K%2BNn7LI4lg3wwkPUbEjmlodPoQURdvaI%2B3G3XjlGykXWmXCexI7yv8T2R%2FP7EASmUAFXmRDRzbEdeYxms7P96yS2fSctlQieR2kTgCc3GNWhLYr%2F%2FHPzfciewwnGw0xudzjGex4mgvWV1y5RgM4ET1vZVV5FLoV7CGgrf89LPuk%2B6OUPvthSQzVe5%2ByMMsD4qbqi17znZ8p2pTDPjyE%2BVEXPI61%2B2IgADUS7zAZ%2BoxM4ca8oA%2FTW4SwKnwQTc2J8sqkrC6jVyrxnCaKM6b9VU%2FZ3NqGaSozwOzcfjLY2LOSJiG3Us%2FFz1X5UTqerLpnFtF9DvkfsB20W%2FSCzpE8BtSWUif8q%2F7MEQWY6Mu0efDsilKXIuqUbjhKLsKrCh7UG%2BTD%2B%2BFM7KbG3MnhzG07AbGDt9wWpJv3T%2FmL8oFx1E37jT%2FgvD2E6TVLXdROMTi8KJuHuNYXT5khaFY%2Bw6PBEMN2j%2BsQGOqUBp5AiOHm%2ByVJb0a7Cp7qxMFBLmtQLBo9dpcTqEmygOpEspVzr0GBDnouxdVqTwJnKZwcEEaikNXLouuoXl8ae9p24XrD0m0lsj%2FiJ8nkmxx%2BqXRtWJTUzyujvITQ%2BrTFbuuQ9pflgqKCy5jNzJ%2FxaXNY4wHGlETTm4xUI3KxmE8K%2BtQdS4iNBlbcCioiUWFiChHT2%2F7slIvzwEDcEXgdZ%2FXLDFp5C&X-Amz-Signature=7b5b7497876cc0b8ebc29b674760cf09f6b8c39c742fa398d3cd55ec41bb14e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXAVMXSJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD5X2lIf548%2BSc647p2A0FeMAADxCNjXZ1vlffniLhK3QIgICjA003DypzCAYZegFP9guyt4c%2FoZrBThI%2FHpcburBQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDLKO8JZWarkDTfMPuCrcAwxcZx8MXH6sTfTL3FzOLGFA%2F1uxQinzRVUfTAJ%2FA3VYm%2BJk%2FReb5P7OTkqGqZ5DVeD4HPheaCO4ICz%2Fg%2Bc6hHfnj1x47VyzIGgWfVFbqIogdh9KKlAt6uhf6r5n%2F0%2FDXhY1mZsqP31hVIDiDa0rTdYDLlHLJURrPYO1hfm5K%2BNn7LI4lg3wwkPUbEjmlodPoQURdvaI%2B3G3XjlGykXWmXCexI7yv8T2R%2FP7EASmUAFXmRDRzbEdeYxms7P96yS2fSctlQieR2kTgCc3GNWhLYr%2F%2FHPzfciewwnGw0xudzjGex4mgvWV1y5RgM4ET1vZVV5FLoV7CGgrf89LPuk%2B6OUPvthSQzVe5%2ByMMsD4qbqi17znZ8p2pTDPjyE%2BVEXPI61%2B2IgADUS7zAZ%2BoxM4ca8oA%2FTW4SwKnwQTc2J8sqkrC6jVyrxnCaKM6b9VU%2FZ3NqGaSozwOzcfjLY2LOSJiG3Us%2FFz1X5UTqerLpnFtF9DvkfsB20W%2FSCzpE8BtSWUif8q%2F7MEQWY6Mu0efDsilKXIuqUbjhKLsKrCh7UG%2BTD%2B%2BFM7KbG3MnhzG07AbGDt9wWpJv3T%2FmL8oFx1E37jT%2FgvD2E6TVLXdROMTi8KJuHuNYXT5khaFY%2Bw6PBEMN2j%2BsQGOqUBp5AiOHm%2ByVJb0a7Cp7qxMFBLmtQLBo9dpcTqEmygOpEspVzr0GBDnouxdVqTwJnKZwcEEaikNXLouuoXl8ae9p24XrD0m0lsj%2FiJ8nkmxx%2BqXRtWJTUzyujvITQ%2BrTFbuuQ9pflgqKCy5jNzJ%2FxaXNY4wHGlETTm4xUI3KxmE8K%2BtQdS4iNBlbcCioiUWFiChHT2%2F7slIvzwEDcEXgdZ%2FXLDFp5C&X-Amz-Signature=cada90cbd767286157be7982170831f1bea2cb5a0e4c7984770ea92c6fd052ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXAVMXSJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD5X2lIf548%2BSc647p2A0FeMAADxCNjXZ1vlffniLhK3QIgICjA003DypzCAYZegFP9guyt4c%2FoZrBThI%2FHpcburBQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDLKO8JZWarkDTfMPuCrcAwxcZx8MXH6sTfTL3FzOLGFA%2F1uxQinzRVUfTAJ%2FA3VYm%2BJk%2FReb5P7OTkqGqZ5DVeD4HPheaCO4ICz%2Fg%2Bc6hHfnj1x47VyzIGgWfVFbqIogdh9KKlAt6uhf6r5n%2F0%2FDXhY1mZsqP31hVIDiDa0rTdYDLlHLJURrPYO1hfm5K%2BNn7LI4lg3wwkPUbEjmlodPoQURdvaI%2B3G3XjlGykXWmXCexI7yv8T2R%2FP7EASmUAFXmRDRzbEdeYxms7P96yS2fSctlQieR2kTgCc3GNWhLYr%2F%2FHPzfciewwnGw0xudzjGex4mgvWV1y5RgM4ET1vZVV5FLoV7CGgrf89LPuk%2B6OUPvthSQzVe5%2ByMMsD4qbqi17znZ8p2pTDPjyE%2BVEXPI61%2B2IgADUS7zAZ%2BoxM4ca8oA%2FTW4SwKnwQTc2J8sqkrC6jVyrxnCaKM6b9VU%2FZ3NqGaSozwOzcfjLY2LOSJiG3Us%2FFz1X5UTqerLpnFtF9DvkfsB20W%2FSCzpE8BtSWUif8q%2F7MEQWY6Mu0efDsilKXIuqUbjhKLsKrCh7UG%2BTD%2B%2BFM7KbG3MnhzG07AbGDt9wWpJv3T%2FmL8oFx1E37jT%2FgvD2E6TVLXdROMTi8KJuHuNYXT5khaFY%2Bw6PBEMN2j%2BsQGOqUBp5AiOHm%2ByVJb0a7Cp7qxMFBLmtQLBo9dpcTqEmygOpEspVzr0GBDnouxdVqTwJnKZwcEEaikNXLouuoXl8ae9p24XrD0m0lsj%2FiJ8nkmxx%2BqXRtWJTUzyujvITQ%2BrTFbuuQ9pflgqKCy5jNzJ%2FxaXNY4wHGlETTm4xUI3KxmE8K%2BtQdS4iNBlbcCioiUWFiChHT2%2F7slIvzwEDcEXgdZ%2FXLDFp5C&X-Amz-Signature=6f8ca7ab905ef047a09ac46405d1d88d80b41d8d5877f9e1dc59d32b01da340d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXAVMXSJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD5X2lIf548%2BSc647p2A0FeMAADxCNjXZ1vlffniLhK3QIgICjA003DypzCAYZegFP9guyt4c%2FoZrBThI%2FHpcburBQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDLKO8JZWarkDTfMPuCrcAwxcZx8MXH6sTfTL3FzOLGFA%2F1uxQinzRVUfTAJ%2FA3VYm%2BJk%2FReb5P7OTkqGqZ5DVeD4HPheaCO4ICz%2Fg%2Bc6hHfnj1x47VyzIGgWfVFbqIogdh9KKlAt6uhf6r5n%2F0%2FDXhY1mZsqP31hVIDiDa0rTdYDLlHLJURrPYO1hfm5K%2BNn7LI4lg3wwkPUbEjmlodPoQURdvaI%2B3G3XjlGykXWmXCexI7yv8T2R%2FP7EASmUAFXmRDRzbEdeYxms7P96yS2fSctlQieR2kTgCc3GNWhLYr%2F%2FHPzfciewwnGw0xudzjGex4mgvWV1y5RgM4ET1vZVV5FLoV7CGgrf89LPuk%2B6OUPvthSQzVe5%2ByMMsD4qbqi17znZ8p2pTDPjyE%2BVEXPI61%2B2IgADUS7zAZ%2BoxM4ca8oA%2FTW4SwKnwQTc2J8sqkrC6jVyrxnCaKM6b9VU%2FZ3NqGaSozwOzcfjLY2LOSJiG3Us%2FFz1X5UTqerLpnFtF9DvkfsB20W%2FSCzpE8BtSWUif8q%2F7MEQWY6Mu0efDsilKXIuqUbjhKLsKrCh7UG%2BTD%2B%2BFM7KbG3MnhzG07AbGDt9wWpJv3T%2FmL8oFx1E37jT%2FgvD2E6TVLXdROMTi8KJuHuNYXT5khaFY%2Bw6PBEMN2j%2BsQGOqUBp5AiOHm%2ByVJb0a7Cp7qxMFBLmtQLBo9dpcTqEmygOpEspVzr0GBDnouxdVqTwJnKZwcEEaikNXLouuoXl8ae9p24XrD0m0lsj%2FiJ8nkmxx%2BqXRtWJTUzyujvITQ%2BrTFbuuQ9pflgqKCy5jNzJ%2FxaXNY4wHGlETTm4xUI3KxmE8K%2BtQdS4iNBlbcCioiUWFiChHT2%2F7slIvzwEDcEXgdZ%2FXLDFp5C&X-Amz-Signature=fc35dfa6b7bcdfdee5d199a5cea53c13b7cd22e9804bb842b02b7549b9c7168e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXAVMXSJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD5X2lIf548%2BSc647p2A0FeMAADxCNjXZ1vlffniLhK3QIgICjA003DypzCAYZegFP9guyt4c%2FoZrBThI%2FHpcburBQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDLKO8JZWarkDTfMPuCrcAwxcZx8MXH6sTfTL3FzOLGFA%2F1uxQinzRVUfTAJ%2FA3VYm%2BJk%2FReb5P7OTkqGqZ5DVeD4HPheaCO4ICz%2Fg%2Bc6hHfnj1x47VyzIGgWfVFbqIogdh9KKlAt6uhf6r5n%2F0%2FDXhY1mZsqP31hVIDiDa0rTdYDLlHLJURrPYO1hfm5K%2BNn7LI4lg3wwkPUbEjmlodPoQURdvaI%2B3G3XjlGykXWmXCexI7yv8T2R%2FP7EASmUAFXmRDRzbEdeYxms7P96yS2fSctlQieR2kTgCc3GNWhLYr%2F%2FHPzfciewwnGw0xudzjGex4mgvWV1y5RgM4ET1vZVV5FLoV7CGgrf89LPuk%2B6OUPvthSQzVe5%2ByMMsD4qbqi17znZ8p2pTDPjyE%2BVEXPI61%2B2IgADUS7zAZ%2BoxM4ca8oA%2FTW4SwKnwQTc2J8sqkrC6jVyrxnCaKM6b9VU%2FZ3NqGaSozwOzcfjLY2LOSJiG3Us%2FFz1X5UTqerLpnFtF9DvkfsB20W%2FSCzpE8BtSWUif8q%2F7MEQWY6Mu0efDsilKXIuqUbjhKLsKrCh7UG%2BTD%2B%2BFM7KbG3MnhzG07AbGDt9wWpJv3T%2FmL8oFx1E37jT%2FgvD2E6TVLXdROMTi8KJuHuNYXT5khaFY%2Bw6PBEMN2j%2BsQGOqUBp5AiOHm%2ByVJb0a7Cp7qxMFBLmtQLBo9dpcTqEmygOpEspVzr0GBDnouxdVqTwJnKZwcEEaikNXLouuoXl8ae9p24XrD0m0lsj%2FiJ8nkmxx%2BqXRtWJTUzyujvITQ%2BrTFbuuQ9pflgqKCy5jNzJ%2FxaXNY4wHGlETTm4xUI3KxmE8K%2BtQdS4iNBlbcCioiUWFiChHT2%2F7slIvzwEDcEXgdZ%2FXLDFp5C&X-Amz-Signature=4c35b80be264dbf77d915600de862239966ee3234a24250168c4b329d50df86c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXAVMXSJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD5X2lIf548%2BSc647p2A0FeMAADxCNjXZ1vlffniLhK3QIgICjA003DypzCAYZegFP9guyt4c%2FoZrBThI%2FHpcburBQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDLKO8JZWarkDTfMPuCrcAwxcZx8MXH6sTfTL3FzOLGFA%2F1uxQinzRVUfTAJ%2FA3VYm%2BJk%2FReb5P7OTkqGqZ5DVeD4HPheaCO4ICz%2Fg%2Bc6hHfnj1x47VyzIGgWfVFbqIogdh9KKlAt6uhf6r5n%2F0%2FDXhY1mZsqP31hVIDiDa0rTdYDLlHLJURrPYO1hfm5K%2BNn7LI4lg3wwkPUbEjmlodPoQURdvaI%2B3G3XjlGykXWmXCexI7yv8T2R%2FP7EASmUAFXmRDRzbEdeYxms7P96yS2fSctlQieR2kTgCc3GNWhLYr%2F%2FHPzfciewwnGw0xudzjGex4mgvWV1y5RgM4ET1vZVV5FLoV7CGgrf89LPuk%2B6OUPvthSQzVe5%2ByMMsD4qbqi17znZ8p2pTDPjyE%2BVEXPI61%2B2IgADUS7zAZ%2BoxM4ca8oA%2FTW4SwKnwQTc2J8sqkrC6jVyrxnCaKM6b9VU%2FZ3NqGaSozwOzcfjLY2LOSJiG3Us%2FFz1X5UTqerLpnFtF9DvkfsB20W%2FSCzpE8BtSWUif8q%2F7MEQWY6Mu0efDsilKXIuqUbjhKLsKrCh7UG%2BTD%2B%2BFM7KbG3MnhzG07AbGDt9wWpJv3T%2FmL8oFx1E37jT%2FgvD2E6TVLXdROMTi8KJuHuNYXT5khaFY%2Bw6PBEMN2j%2BsQGOqUBp5AiOHm%2ByVJb0a7Cp7qxMFBLmtQLBo9dpcTqEmygOpEspVzr0GBDnouxdVqTwJnKZwcEEaikNXLouuoXl8ae9p24XrD0m0lsj%2FiJ8nkmxx%2BqXRtWJTUzyujvITQ%2BrTFbuuQ9pflgqKCy5jNzJ%2FxaXNY4wHGlETTm4xUI3KxmE8K%2BtQdS4iNBlbcCioiUWFiChHT2%2F7slIvzwEDcEXgdZ%2FXLDFp5C&X-Amz-Signature=c9a7cacc627c735382f88cf94e01ab492ab362e8499d4dc8c5b3dec04622df4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXAVMXSJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD5X2lIf548%2BSc647p2A0FeMAADxCNjXZ1vlffniLhK3QIgICjA003DypzCAYZegFP9guyt4c%2FoZrBThI%2FHpcburBQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDLKO8JZWarkDTfMPuCrcAwxcZx8MXH6sTfTL3FzOLGFA%2F1uxQinzRVUfTAJ%2FA3VYm%2BJk%2FReb5P7OTkqGqZ5DVeD4HPheaCO4ICz%2Fg%2Bc6hHfnj1x47VyzIGgWfVFbqIogdh9KKlAt6uhf6r5n%2F0%2FDXhY1mZsqP31hVIDiDa0rTdYDLlHLJURrPYO1hfm5K%2BNn7LI4lg3wwkPUbEjmlodPoQURdvaI%2B3G3XjlGykXWmXCexI7yv8T2R%2FP7EASmUAFXmRDRzbEdeYxms7P96yS2fSctlQieR2kTgCc3GNWhLYr%2F%2FHPzfciewwnGw0xudzjGex4mgvWV1y5RgM4ET1vZVV5FLoV7CGgrf89LPuk%2B6OUPvthSQzVe5%2ByMMsD4qbqi17znZ8p2pTDPjyE%2BVEXPI61%2B2IgADUS7zAZ%2BoxM4ca8oA%2FTW4SwKnwQTc2J8sqkrC6jVyrxnCaKM6b9VU%2FZ3NqGaSozwOzcfjLY2LOSJiG3Us%2FFz1X5UTqerLpnFtF9DvkfsB20W%2FSCzpE8BtSWUif8q%2F7MEQWY6Mu0efDsilKXIuqUbjhKLsKrCh7UG%2BTD%2B%2BFM7KbG3MnhzG07AbGDt9wWpJv3T%2FmL8oFx1E37jT%2FgvD2E6TVLXdROMTi8KJuHuNYXT5khaFY%2Bw6PBEMN2j%2BsQGOqUBp5AiOHm%2ByVJb0a7Cp7qxMFBLmtQLBo9dpcTqEmygOpEspVzr0GBDnouxdVqTwJnKZwcEEaikNXLouuoXl8ae9p24XrD0m0lsj%2FiJ8nkmxx%2BqXRtWJTUzyujvITQ%2BrTFbuuQ9pflgqKCy5jNzJ%2FxaXNY4wHGlETTm4xUI3KxmE8K%2BtQdS4iNBlbcCioiUWFiChHT2%2F7slIvzwEDcEXgdZ%2FXLDFp5C&X-Amz-Signature=4dd0781c5c32dbf7ab7d413dd0be15fcd9437772cc5ccd94a177cbbbe12c301c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXAVMXSJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T034612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQD5X2lIf548%2BSc647p2A0FeMAADxCNjXZ1vlffniLhK3QIgICjA003DypzCAYZegFP9guyt4c%2FoZrBThI%2FHpcburBQq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDLKO8JZWarkDTfMPuCrcAwxcZx8MXH6sTfTL3FzOLGFA%2F1uxQinzRVUfTAJ%2FA3VYm%2BJk%2FReb5P7OTkqGqZ5DVeD4HPheaCO4ICz%2Fg%2Bc6hHfnj1x47VyzIGgWfVFbqIogdh9KKlAt6uhf6r5n%2F0%2FDXhY1mZsqP31hVIDiDa0rTdYDLlHLJURrPYO1hfm5K%2BNn7LI4lg3wwkPUbEjmlodPoQURdvaI%2B3G3XjlGykXWmXCexI7yv8T2R%2FP7EASmUAFXmRDRzbEdeYxms7P96yS2fSctlQieR2kTgCc3GNWhLYr%2F%2FHPzfciewwnGw0xudzjGex4mgvWV1y5RgM4ET1vZVV5FLoV7CGgrf89LPuk%2B6OUPvthSQzVe5%2ByMMsD4qbqi17znZ8p2pTDPjyE%2BVEXPI61%2B2IgADUS7zAZ%2BoxM4ca8oA%2FTW4SwKnwQTc2J8sqkrC6jVyrxnCaKM6b9VU%2FZ3NqGaSozwOzcfjLY2LOSJiG3Us%2FFz1X5UTqerLpnFtF9DvkfsB20W%2FSCzpE8BtSWUif8q%2F7MEQWY6Mu0efDsilKXIuqUbjhKLsKrCh7UG%2BTD%2B%2BFM7KbG3MnhzG07AbGDt9wWpJv3T%2FmL8oFx1E37jT%2FgvD2E6TVLXdROMTi8KJuHuNYXT5khaFY%2Bw6PBEMN2j%2BsQGOqUBp5AiOHm%2ByVJb0a7Cp7qxMFBLmtQLBo9dpcTqEmygOpEspVzr0GBDnouxdVqTwJnKZwcEEaikNXLouuoXl8ae9p24XrD0m0lsj%2FiJ8nkmxx%2BqXRtWJTUzyujvITQ%2BrTFbuuQ9pflgqKCy5jNzJ%2FxaXNY4wHGlETTm4xUI3KxmE8K%2BtQdS4iNBlbcCioiUWFiChHT2%2F7slIvzwEDcEXgdZ%2FXLDFp5C&X-Amz-Signature=621c173e3f4fd057b5f9d2302c6ec54f447ea2d5c441e439d7b8c1aa13fb6520&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
