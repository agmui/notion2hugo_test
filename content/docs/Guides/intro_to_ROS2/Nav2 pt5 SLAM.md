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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWGZGQNW%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNwmzni4E55k3%2B6Dg4KKaTNVnLttYB%2B%2B7GlYgqTe268AiEAykpITX90k0mPPrydWHfgAPf2lKjX%2B8eT0zBEWFJ8AAQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBQZDiH5QbluiJ%2BQaSrcA6buiXZQFtXy5OUAv%2BrWWS5vntLR0NfyRZwd8lQqJIMCpoaA%2FtRyF1tiX14QNMFDeBqZOgbiEEcUE8M0qC3GIi3BwHXGH%2FtNJXLCgIt53C38FMB9eps2wmZfODX2jKVa1yHPm5zwsHAgKGK6IVEgoxIl5pP%2Ba%2FQ%2BjEDLyoBZ8050zmrnY2qqNeBk9t0AHW2avdQ5cgAeZRqtzpL7NN4%2Fek9Y87XXylMfby%2FQcFGBGJAC3tFxb1C1MxFszQoAyqbkop87nO2Zm5jbVK5InHuynzPHUk3ntIagku91RAIhkFPuogtY%2Fz8vp4Cf6A3pRlpBQvlyIa7Jd6Qz9P%2FTJVN8o1O4OfN3823QnIyE5eH7e5HGS2JmnvE7EUCWgqMempWCYpmtGSbF4O1deWij00OpE89VsCEwF5k%2FTQ14xwtO8aGQNGTGKFa6ugKom8n1XhFY6iVE1VdYVvwlW8K%2BXti9BGXlrjHX53EkSrqf3tfhXSm%2F7ervhlltCjMAFexezylHrJypS3ueKpeByEexDjf9SLk7hPH5MvNGBqyBgW3qKFCiwFdn6OLbA%2BvdVCAFFwcQgpcZwMMw4vARJ3BTn%2BEbz%2FGfuzuDGQmrfXZ8FWMmMLjTM9DNFGRlNk0s9lZxMIXIu84GOqUBOC7C11154SqlJJRAd1dK8rBipcrgkJa7YVGG4j4HhGfxNEZcymnGZ0J%2B855iTnF5i13MoSjPjgjmrrTweTw5VSrUYkVKxbhzI%2Blxak69fdbX%2FVvyFAbleW6oHCLsQNH69IrOyrRQzY8e9A6sgoJvKTolEenHZ3A7%2F%2BnHttVC%2B45eJy1NBgqPBV9ITudNof2dumfvg%2BsLi0NHoquQjkF1nPn4lPq3&X-Amz-Signature=5bacfa88730292aa693d3aeba7498b01623749b7ba340ee739fc78e602106723&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWGZGQNW%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNwmzni4E55k3%2B6Dg4KKaTNVnLttYB%2B%2B7GlYgqTe268AiEAykpITX90k0mPPrydWHfgAPf2lKjX%2B8eT0zBEWFJ8AAQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBQZDiH5QbluiJ%2BQaSrcA6buiXZQFtXy5OUAv%2BrWWS5vntLR0NfyRZwd8lQqJIMCpoaA%2FtRyF1tiX14QNMFDeBqZOgbiEEcUE8M0qC3GIi3BwHXGH%2FtNJXLCgIt53C38FMB9eps2wmZfODX2jKVa1yHPm5zwsHAgKGK6IVEgoxIl5pP%2Ba%2FQ%2BjEDLyoBZ8050zmrnY2qqNeBk9t0AHW2avdQ5cgAeZRqtzpL7NN4%2Fek9Y87XXylMfby%2FQcFGBGJAC3tFxb1C1MxFszQoAyqbkop87nO2Zm5jbVK5InHuynzPHUk3ntIagku91RAIhkFPuogtY%2Fz8vp4Cf6A3pRlpBQvlyIa7Jd6Qz9P%2FTJVN8o1O4OfN3823QnIyE5eH7e5HGS2JmnvE7EUCWgqMempWCYpmtGSbF4O1deWij00OpE89VsCEwF5k%2FTQ14xwtO8aGQNGTGKFa6ugKom8n1XhFY6iVE1VdYVvwlW8K%2BXti9BGXlrjHX53EkSrqf3tfhXSm%2F7ervhlltCjMAFexezylHrJypS3ueKpeByEexDjf9SLk7hPH5MvNGBqyBgW3qKFCiwFdn6OLbA%2BvdVCAFFwcQgpcZwMMw4vARJ3BTn%2BEbz%2FGfuzuDGQmrfXZ8FWMmMLjTM9DNFGRlNk0s9lZxMIXIu84GOqUBOC7C11154SqlJJRAd1dK8rBipcrgkJa7YVGG4j4HhGfxNEZcymnGZ0J%2B855iTnF5i13MoSjPjgjmrrTweTw5VSrUYkVKxbhzI%2Blxak69fdbX%2FVvyFAbleW6oHCLsQNH69IrOyrRQzY8e9A6sgoJvKTolEenHZ3A7%2F%2BnHttVC%2B45eJy1NBgqPBV9ITudNof2dumfvg%2BsLi0NHoquQjkF1nPn4lPq3&X-Amz-Signature=e1af668b6f50eab4226b47489c7d447f71b00258a7f776b47ae83d1f31280fb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWGZGQNW%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNwmzni4E55k3%2B6Dg4KKaTNVnLttYB%2B%2B7GlYgqTe268AiEAykpITX90k0mPPrydWHfgAPf2lKjX%2B8eT0zBEWFJ8AAQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBQZDiH5QbluiJ%2BQaSrcA6buiXZQFtXy5OUAv%2BrWWS5vntLR0NfyRZwd8lQqJIMCpoaA%2FtRyF1tiX14QNMFDeBqZOgbiEEcUE8M0qC3GIi3BwHXGH%2FtNJXLCgIt53C38FMB9eps2wmZfODX2jKVa1yHPm5zwsHAgKGK6IVEgoxIl5pP%2Ba%2FQ%2BjEDLyoBZ8050zmrnY2qqNeBk9t0AHW2avdQ5cgAeZRqtzpL7NN4%2Fek9Y87XXylMfby%2FQcFGBGJAC3tFxb1C1MxFszQoAyqbkop87nO2Zm5jbVK5InHuynzPHUk3ntIagku91RAIhkFPuogtY%2Fz8vp4Cf6A3pRlpBQvlyIa7Jd6Qz9P%2FTJVN8o1O4OfN3823QnIyE5eH7e5HGS2JmnvE7EUCWgqMempWCYpmtGSbF4O1deWij00OpE89VsCEwF5k%2FTQ14xwtO8aGQNGTGKFa6ugKom8n1XhFY6iVE1VdYVvwlW8K%2BXti9BGXlrjHX53EkSrqf3tfhXSm%2F7ervhlltCjMAFexezylHrJypS3ueKpeByEexDjf9SLk7hPH5MvNGBqyBgW3qKFCiwFdn6OLbA%2BvdVCAFFwcQgpcZwMMw4vARJ3BTn%2BEbz%2FGfuzuDGQmrfXZ8FWMmMLjTM9DNFGRlNk0s9lZxMIXIu84GOqUBOC7C11154SqlJJRAd1dK8rBipcrgkJa7YVGG4j4HhGfxNEZcymnGZ0J%2B855iTnF5i13MoSjPjgjmrrTweTw5VSrUYkVKxbhzI%2Blxak69fdbX%2FVvyFAbleW6oHCLsQNH69IrOyrRQzY8e9A6sgoJvKTolEenHZ3A7%2F%2BnHttVC%2B45eJy1NBgqPBV9ITudNof2dumfvg%2BsLi0NHoquQjkF1nPn4lPq3&X-Amz-Signature=91cac20c635c68f36cf0bc8a98e4fb82a6966a35c0a37c9c7425994102b270b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWGZGQNW%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNwmzni4E55k3%2B6Dg4KKaTNVnLttYB%2B%2B7GlYgqTe268AiEAykpITX90k0mPPrydWHfgAPf2lKjX%2B8eT0zBEWFJ8AAQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBQZDiH5QbluiJ%2BQaSrcA6buiXZQFtXy5OUAv%2BrWWS5vntLR0NfyRZwd8lQqJIMCpoaA%2FtRyF1tiX14QNMFDeBqZOgbiEEcUE8M0qC3GIi3BwHXGH%2FtNJXLCgIt53C38FMB9eps2wmZfODX2jKVa1yHPm5zwsHAgKGK6IVEgoxIl5pP%2Ba%2FQ%2BjEDLyoBZ8050zmrnY2qqNeBk9t0AHW2avdQ5cgAeZRqtzpL7NN4%2Fek9Y87XXylMfby%2FQcFGBGJAC3tFxb1C1MxFszQoAyqbkop87nO2Zm5jbVK5InHuynzPHUk3ntIagku91RAIhkFPuogtY%2Fz8vp4Cf6A3pRlpBQvlyIa7Jd6Qz9P%2FTJVN8o1O4OfN3823QnIyE5eH7e5HGS2JmnvE7EUCWgqMempWCYpmtGSbF4O1deWij00OpE89VsCEwF5k%2FTQ14xwtO8aGQNGTGKFa6ugKom8n1XhFY6iVE1VdYVvwlW8K%2BXti9BGXlrjHX53EkSrqf3tfhXSm%2F7ervhlltCjMAFexezylHrJypS3ueKpeByEexDjf9SLk7hPH5MvNGBqyBgW3qKFCiwFdn6OLbA%2BvdVCAFFwcQgpcZwMMw4vARJ3BTn%2BEbz%2FGfuzuDGQmrfXZ8FWMmMLjTM9DNFGRlNk0s9lZxMIXIu84GOqUBOC7C11154SqlJJRAd1dK8rBipcrgkJa7YVGG4j4HhGfxNEZcymnGZ0J%2B855iTnF5i13MoSjPjgjmrrTweTw5VSrUYkVKxbhzI%2Blxak69fdbX%2FVvyFAbleW6oHCLsQNH69IrOyrRQzY8e9A6sgoJvKTolEenHZ3A7%2F%2BnHttVC%2B45eJy1NBgqPBV9ITudNof2dumfvg%2BsLi0NHoquQjkF1nPn4lPq3&X-Amz-Signature=14a49162827e12c6729d616d65847a64335b01e5377b271909417ccb22903850&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWGZGQNW%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNwmzni4E55k3%2B6Dg4KKaTNVnLttYB%2B%2B7GlYgqTe268AiEAykpITX90k0mPPrydWHfgAPf2lKjX%2B8eT0zBEWFJ8AAQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBQZDiH5QbluiJ%2BQaSrcA6buiXZQFtXy5OUAv%2BrWWS5vntLR0NfyRZwd8lQqJIMCpoaA%2FtRyF1tiX14QNMFDeBqZOgbiEEcUE8M0qC3GIi3BwHXGH%2FtNJXLCgIt53C38FMB9eps2wmZfODX2jKVa1yHPm5zwsHAgKGK6IVEgoxIl5pP%2Ba%2FQ%2BjEDLyoBZ8050zmrnY2qqNeBk9t0AHW2avdQ5cgAeZRqtzpL7NN4%2Fek9Y87XXylMfby%2FQcFGBGJAC3tFxb1C1MxFszQoAyqbkop87nO2Zm5jbVK5InHuynzPHUk3ntIagku91RAIhkFPuogtY%2Fz8vp4Cf6A3pRlpBQvlyIa7Jd6Qz9P%2FTJVN8o1O4OfN3823QnIyE5eH7e5HGS2JmnvE7EUCWgqMempWCYpmtGSbF4O1deWij00OpE89VsCEwF5k%2FTQ14xwtO8aGQNGTGKFa6ugKom8n1XhFY6iVE1VdYVvwlW8K%2BXti9BGXlrjHX53EkSrqf3tfhXSm%2F7ervhlltCjMAFexezylHrJypS3ueKpeByEexDjf9SLk7hPH5MvNGBqyBgW3qKFCiwFdn6OLbA%2BvdVCAFFwcQgpcZwMMw4vARJ3BTn%2BEbz%2FGfuzuDGQmrfXZ8FWMmMLjTM9DNFGRlNk0s9lZxMIXIu84GOqUBOC7C11154SqlJJRAd1dK8rBipcrgkJa7YVGG4j4HhGfxNEZcymnGZ0J%2B855iTnF5i13MoSjPjgjmrrTweTw5VSrUYkVKxbhzI%2Blxak69fdbX%2FVvyFAbleW6oHCLsQNH69IrOyrRQzY8e9A6sgoJvKTolEenHZ3A7%2F%2BnHttVC%2B45eJy1NBgqPBV9ITudNof2dumfvg%2BsLi0NHoquQjkF1nPn4lPq3&X-Amz-Signature=cb3f46795be0b375bd990f507546bbdc8c8b90cc5c131961949275cd9b96c080&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWGZGQNW%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNwmzni4E55k3%2B6Dg4KKaTNVnLttYB%2B%2B7GlYgqTe268AiEAykpITX90k0mPPrydWHfgAPf2lKjX%2B8eT0zBEWFJ8AAQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBQZDiH5QbluiJ%2BQaSrcA6buiXZQFtXy5OUAv%2BrWWS5vntLR0NfyRZwd8lQqJIMCpoaA%2FtRyF1tiX14QNMFDeBqZOgbiEEcUE8M0qC3GIi3BwHXGH%2FtNJXLCgIt53C38FMB9eps2wmZfODX2jKVa1yHPm5zwsHAgKGK6IVEgoxIl5pP%2Ba%2FQ%2BjEDLyoBZ8050zmrnY2qqNeBk9t0AHW2avdQ5cgAeZRqtzpL7NN4%2Fek9Y87XXylMfby%2FQcFGBGJAC3tFxb1C1MxFszQoAyqbkop87nO2Zm5jbVK5InHuynzPHUk3ntIagku91RAIhkFPuogtY%2Fz8vp4Cf6A3pRlpBQvlyIa7Jd6Qz9P%2FTJVN8o1O4OfN3823QnIyE5eH7e5HGS2JmnvE7EUCWgqMempWCYpmtGSbF4O1deWij00OpE89VsCEwF5k%2FTQ14xwtO8aGQNGTGKFa6ugKom8n1XhFY6iVE1VdYVvwlW8K%2BXti9BGXlrjHX53EkSrqf3tfhXSm%2F7ervhlltCjMAFexezylHrJypS3ueKpeByEexDjf9SLk7hPH5MvNGBqyBgW3qKFCiwFdn6OLbA%2BvdVCAFFwcQgpcZwMMw4vARJ3BTn%2BEbz%2FGfuzuDGQmrfXZ8FWMmMLjTM9DNFGRlNk0s9lZxMIXIu84GOqUBOC7C11154SqlJJRAd1dK8rBipcrgkJa7YVGG4j4HhGfxNEZcymnGZ0J%2B855iTnF5i13MoSjPjgjmrrTweTw5VSrUYkVKxbhzI%2Blxak69fdbX%2FVvyFAbleW6oHCLsQNH69IrOyrRQzY8e9A6sgoJvKTolEenHZ3A7%2F%2BnHttVC%2B45eJy1NBgqPBV9ITudNof2dumfvg%2BsLi0NHoquQjkF1nPn4lPq3&X-Amz-Signature=6c00e3220d8d7962c09ce3077df462b14278f638d0a0414c1e99cfd9aca7bc3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWGZGQNW%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNwmzni4E55k3%2B6Dg4KKaTNVnLttYB%2B%2B7GlYgqTe268AiEAykpITX90k0mPPrydWHfgAPf2lKjX%2B8eT0zBEWFJ8AAQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBQZDiH5QbluiJ%2BQaSrcA6buiXZQFtXy5OUAv%2BrWWS5vntLR0NfyRZwd8lQqJIMCpoaA%2FtRyF1tiX14QNMFDeBqZOgbiEEcUE8M0qC3GIi3BwHXGH%2FtNJXLCgIt53C38FMB9eps2wmZfODX2jKVa1yHPm5zwsHAgKGK6IVEgoxIl5pP%2Ba%2FQ%2BjEDLyoBZ8050zmrnY2qqNeBk9t0AHW2avdQ5cgAeZRqtzpL7NN4%2Fek9Y87XXylMfby%2FQcFGBGJAC3tFxb1C1MxFszQoAyqbkop87nO2Zm5jbVK5InHuynzPHUk3ntIagku91RAIhkFPuogtY%2Fz8vp4Cf6A3pRlpBQvlyIa7Jd6Qz9P%2FTJVN8o1O4OfN3823QnIyE5eH7e5HGS2JmnvE7EUCWgqMempWCYpmtGSbF4O1deWij00OpE89VsCEwF5k%2FTQ14xwtO8aGQNGTGKFa6ugKom8n1XhFY6iVE1VdYVvwlW8K%2BXti9BGXlrjHX53EkSrqf3tfhXSm%2F7ervhlltCjMAFexezylHrJypS3ueKpeByEexDjf9SLk7hPH5MvNGBqyBgW3qKFCiwFdn6OLbA%2BvdVCAFFwcQgpcZwMMw4vARJ3BTn%2BEbz%2FGfuzuDGQmrfXZ8FWMmMLjTM9DNFGRlNk0s9lZxMIXIu84GOqUBOC7C11154SqlJJRAd1dK8rBipcrgkJa7YVGG4j4HhGfxNEZcymnGZ0J%2B855iTnF5i13MoSjPjgjmrrTweTw5VSrUYkVKxbhzI%2Blxak69fdbX%2FVvyFAbleW6oHCLsQNH69IrOyrRQzY8e9A6sgoJvKTolEenHZ3A7%2F%2BnHttVC%2B45eJy1NBgqPBV9ITudNof2dumfvg%2BsLi0NHoquQjkF1nPn4lPq3&X-Amz-Signature=d4fb756a2671f2ce99a9d4155bdaf55877a41904485c203263984db41ed2ed40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWGZGQNW%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNwmzni4E55k3%2B6Dg4KKaTNVnLttYB%2B%2B7GlYgqTe268AiEAykpITX90k0mPPrydWHfgAPf2lKjX%2B8eT0zBEWFJ8AAQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBQZDiH5QbluiJ%2BQaSrcA6buiXZQFtXy5OUAv%2BrWWS5vntLR0NfyRZwd8lQqJIMCpoaA%2FtRyF1tiX14QNMFDeBqZOgbiEEcUE8M0qC3GIi3BwHXGH%2FtNJXLCgIt53C38FMB9eps2wmZfODX2jKVa1yHPm5zwsHAgKGK6IVEgoxIl5pP%2Ba%2FQ%2BjEDLyoBZ8050zmrnY2qqNeBk9t0AHW2avdQ5cgAeZRqtzpL7NN4%2Fek9Y87XXylMfby%2FQcFGBGJAC3tFxb1C1MxFszQoAyqbkop87nO2Zm5jbVK5InHuynzPHUk3ntIagku91RAIhkFPuogtY%2Fz8vp4Cf6A3pRlpBQvlyIa7Jd6Qz9P%2FTJVN8o1O4OfN3823QnIyE5eH7e5HGS2JmnvE7EUCWgqMempWCYpmtGSbF4O1deWij00OpE89VsCEwF5k%2FTQ14xwtO8aGQNGTGKFa6ugKom8n1XhFY6iVE1VdYVvwlW8K%2BXti9BGXlrjHX53EkSrqf3tfhXSm%2F7ervhlltCjMAFexezylHrJypS3ueKpeByEexDjf9SLk7hPH5MvNGBqyBgW3qKFCiwFdn6OLbA%2BvdVCAFFwcQgpcZwMMw4vARJ3BTn%2BEbz%2FGfuzuDGQmrfXZ8FWMmMLjTM9DNFGRlNk0s9lZxMIXIu84GOqUBOC7C11154SqlJJRAd1dK8rBipcrgkJa7YVGG4j4HhGfxNEZcymnGZ0J%2B855iTnF5i13MoSjPjgjmrrTweTw5VSrUYkVKxbhzI%2Blxak69fdbX%2FVvyFAbleW6oHCLsQNH69IrOyrRQzY8e9A6sgoJvKTolEenHZ3A7%2F%2BnHttVC%2B45eJy1NBgqPBV9ITudNof2dumfvg%2BsLi0NHoquQjkF1nPn4lPq3&X-Amz-Signature=7f97d0836459b1288beed86c4ede300ec588f5fd854fbdf057e472feea7d0905&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWGZGQNW%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNwmzni4E55k3%2B6Dg4KKaTNVnLttYB%2B%2B7GlYgqTe268AiEAykpITX90k0mPPrydWHfgAPf2lKjX%2B8eT0zBEWFJ8AAQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBQZDiH5QbluiJ%2BQaSrcA6buiXZQFtXy5OUAv%2BrWWS5vntLR0NfyRZwd8lQqJIMCpoaA%2FtRyF1tiX14QNMFDeBqZOgbiEEcUE8M0qC3GIi3BwHXGH%2FtNJXLCgIt53C38FMB9eps2wmZfODX2jKVa1yHPm5zwsHAgKGK6IVEgoxIl5pP%2Ba%2FQ%2BjEDLyoBZ8050zmrnY2qqNeBk9t0AHW2avdQ5cgAeZRqtzpL7NN4%2Fek9Y87XXylMfby%2FQcFGBGJAC3tFxb1C1MxFszQoAyqbkop87nO2Zm5jbVK5InHuynzPHUk3ntIagku91RAIhkFPuogtY%2Fz8vp4Cf6A3pRlpBQvlyIa7Jd6Qz9P%2FTJVN8o1O4OfN3823QnIyE5eH7e5HGS2JmnvE7EUCWgqMempWCYpmtGSbF4O1deWij00OpE89VsCEwF5k%2FTQ14xwtO8aGQNGTGKFa6ugKom8n1XhFY6iVE1VdYVvwlW8K%2BXti9BGXlrjHX53EkSrqf3tfhXSm%2F7ervhlltCjMAFexezylHrJypS3ueKpeByEexDjf9SLk7hPH5MvNGBqyBgW3qKFCiwFdn6OLbA%2BvdVCAFFwcQgpcZwMMw4vARJ3BTn%2BEbz%2FGfuzuDGQmrfXZ8FWMmMLjTM9DNFGRlNk0s9lZxMIXIu84GOqUBOC7C11154SqlJJRAd1dK8rBipcrgkJa7YVGG4j4HhGfxNEZcymnGZ0J%2B855iTnF5i13MoSjPjgjmrrTweTw5VSrUYkVKxbhzI%2Blxak69fdbX%2FVvyFAbleW6oHCLsQNH69IrOyrRQzY8e9A6sgoJvKTolEenHZ3A7%2F%2BnHttVC%2B45eJy1NBgqPBV9ITudNof2dumfvg%2BsLi0NHoquQjkF1nPn4lPq3&X-Amz-Signature=445b2fa7fb85b48f95863b69b49040d330564b3a79bf605e60abe239e0e33e68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWGZGQNW%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNwmzni4E55k3%2B6Dg4KKaTNVnLttYB%2B%2B7GlYgqTe268AiEAykpITX90k0mPPrydWHfgAPf2lKjX%2B8eT0zBEWFJ8AAQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBQZDiH5QbluiJ%2BQaSrcA6buiXZQFtXy5OUAv%2BrWWS5vntLR0NfyRZwd8lQqJIMCpoaA%2FtRyF1tiX14QNMFDeBqZOgbiEEcUE8M0qC3GIi3BwHXGH%2FtNJXLCgIt53C38FMB9eps2wmZfODX2jKVa1yHPm5zwsHAgKGK6IVEgoxIl5pP%2Ba%2FQ%2BjEDLyoBZ8050zmrnY2qqNeBk9t0AHW2avdQ5cgAeZRqtzpL7NN4%2Fek9Y87XXylMfby%2FQcFGBGJAC3tFxb1C1MxFszQoAyqbkop87nO2Zm5jbVK5InHuynzPHUk3ntIagku91RAIhkFPuogtY%2Fz8vp4Cf6A3pRlpBQvlyIa7Jd6Qz9P%2FTJVN8o1O4OfN3823QnIyE5eH7e5HGS2JmnvE7EUCWgqMempWCYpmtGSbF4O1deWij00OpE89VsCEwF5k%2FTQ14xwtO8aGQNGTGKFa6ugKom8n1XhFY6iVE1VdYVvwlW8K%2BXti9BGXlrjHX53EkSrqf3tfhXSm%2F7ervhlltCjMAFexezylHrJypS3ueKpeByEexDjf9SLk7hPH5MvNGBqyBgW3qKFCiwFdn6OLbA%2BvdVCAFFwcQgpcZwMMw4vARJ3BTn%2BEbz%2FGfuzuDGQmrfXZ8FWMmMLjTM9DNFGRlNk0s9lZxMIXIu84GOqUBOC7C11154SqlJJRAd1dK8rBipcrgkJa7YVGG4j4HhGfxNEZcymnGZ0J%2B855iTnF5i13MoSjPjgjmrrTweTw5VSrUYkVKxbhzI%2Blxak69fdbX%2FVvyFAbleW6oHCLsQNH69IrOyrRQzY8e9A6sgoJvKTolEenHZ3A7%2F%2BnHttVC%2B45eJy1NBgqPBV9ITudNof2dumfvg%2BsLi0NHoquQjkF1nPn4lPq3&X-Amz-Signature=ab0af8871cc3b3ce1bfe77050e49a75fa60e358ed6a57358a7001ee4a55b223b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWGZGQNW%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNwmzni4E55k3%2B6Dg4KKaTNVnLttYB%2B%2B7GlYgqTe268AiEAykpITX90k0mPPrydWHfgAPf2lKjX%2B8eT0zBEWFJ8AAQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBQZDiH5QbluiJ%2BQaSrcA6buiXZQFtXy5OUAv%2BrWWS5vntLR0NfyRZwd8lQqJIMCpoaA%2FtRyF1tiX14QNMFDeBqZOgbiEEcUE8M0qC3GIi3BwHXGH%2FtNJXLCgIt53C38FMB9eps2wmZfODX2jKVa1yHPm5zwsHAgKGK6IVEgoxIl5pP%2Ba%2FQ%2BjEDLyoBZ8050zmrnY2qqNeBk9t0AHW2avdQ5cgAeZRqtzpL7NN4%2Fek9Y87XXylMfby%2FQcFGBGJAC3tFxb1C1MxFszQoAyqbkop87nO2Zm5jbVK5InHuynzPHUk3ntIagku91RAIhkFPuogtY%2Fz8vp4Cf6A3pRlpBQvlyIa7Jd6Qz9P%2FTJVN8o1O4OfN3823QnIyE5eH7e5HGS2JmnvE7EUCWgqMempWCYpmtGSbF4O1deWij00OpE89VsCEwF5k%2FTQ14xwtO8aGQNGTGKFa6ugKom8n1XhFY6iVE1VdYVvwlW8K%2BXti9BGXlrjHX53EkSrqf3tfhXSm%2F7ervhlltCjMAFexezylHrJypS3ueKpeByEexDjf9SLk7hPH5MvNGBqyBgW3qKFCiwFdn6OLbA%2BvdVCAFFwcQgpcZwMMw4vARJ3BTn%2BEbz%2FGfuzuDGQmrfXZ8FWMmMLjTM9DNFGRlNk0s9lZxMIXIu84GOqUBOC7C11154SqlJJRAd1dK8rBipcrgkJa7YVGG4j4HhGfxNEZcymnGZ0J%2B855iTnF5i13MoSjPjgjmrrTweTw5VSrUYkVKxbhzI%2Blxak69fdbX%2FVvyFAbleW6oHCLsQNH69IrOyrRQzY8e9A6sgoJvKTolEenHZ3A7%2F%2BnHttVC%2B45eJy1NBgqPBV9ITudNof2dumfvg%2BsLi0NHoquQjkF1nPn4lPq3&X-Amz-Signature=1e818c53dc490bd7339b14ddcd2b83a0ccbdc1dc1d51c23d4300f85e9b67c3dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWGZGQNW%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNwmzni4E55k3%2B6Dg4KKaTNVnLttYB%2B%2B7GlYgqTe268AiEAykpITX90k0mPPrydWHfgAPf2lKjX%2B8eT0zBEWFJ8AAQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBQZDiH5QbluiJ%2BQaSrcA6buiXZQFtXy5OUAv%2BrWWS5vntLR0NfyRZwd8lQqJIMCpoaA%2FtRyF1tiX14QNMFDeBqZOgbiEEcUE8M0qC3GIi3BwHXGH%2FtNJXLCgIt53C38FMB9eps2wmZfODX2jKVa1yHPm5zwsHAgKGK6IVEgoxIl5pP%2Ba%2FQ%2BjEDLyoBZ8050zmrnY2qqNeBk9t0AHW2avdQ5cgAeZRqtzpL7NN4%2Fek9Y87XXylMfby%2FQcFGBGJAC3tFxb1C1MxFszQoAyqbkop87nO2Zm5jbVK5InHuynzPHUk3ntIagku91RAIhkFPuogtY%2Fz8vp4Cf6A3pRlpBQvlyIa7Jd6Qz9P%2FTJVN8o1O4OfN3823QnIyE5eH7e5HGS2JmnvE7EUCWgqMempWCYpmtGSbF4O1deWij00OpE89VsCEwF5k%2FTQ14xwtO8aGQNGTGKFa6ugKom8n1XhFY6iVE1VdYVvwlW8K%2BXti9BGXlrjHX53EkSrqf3tfhXSm%2F7ervhlltCjMAFexezylHrJypS3ueKpeByEexDjf9SLk7hPH5MvNGBqyBgW3qKFCiwFdn6OLbA%2BvdVCAFFwcQgpcZwMMw4vARJ3BTn%2BEbz%2FGfuzuDGQmrfXZ8FWMmMLjTM9DNFGRlNk0s9lZxMIXIu84GOqUBOC7C11154SqlJJRAd1dK8rBipcrgkJa7YVGG4j4HhGfxNEZcymnGZ0J%2B855iTnF5i13MoSjPjgjmrrTweTw5VSrUYkVKxbhzI%2Blxak69fdbX%2FVvyFAbleW6oHCLsQNH69IrOyrRQzY8e9A6sgoJvKTolEenHZ3A7%2F%2BnHttVC%2B45eJy1NBgqPBV9ITudNof2dumfvg%2BsLi0NHoquQjkF1nPn4lPq3&X-Amz-Signature=73fcfa2adf35c15cd9302e015dbdd4ed9c8cea7134bcc13d9d5085d0b27444dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWGZGQNW%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNwmzni4E55k3%2B6Dg4KKaTNVnLttYB%2B%2B7GlYgqTe268AiEAykpITX90k0mPPrydWHfgAPf2lKjX%2B8eT0zBEWFJ8AAQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBQZDiH5QbluiJ%2BQaSrcA6buiXZQFtXy5OUAv%2BrWWS5vntLR0NfyRZwd8lQqJIMCpoaA%2FtRyF1tiX14QNMFDeBqZOgbiEEcUE8M0qC3GIi3BwHXGH%2FtNJXLCgIt53C38FMB9eps2wmZfODX2jKVa1yHPm5zwsHAgKGK6IVEgoxIl5pP%2Ba%2FQ%2BjEDLyoBZ8050zmrnY2qqNeBk9t0AHW2avdQ5cgAeZRqtzpL7NN4%2Fek9Y87XXylMfby%2FQcFGBGJAC3tFxb1C1MxFszQoAyqbkop87nO2Zm5jbVK5InHuynzPHUk3ntIagku91RAIhkFPuogtY%2Fz8vp4Cf6A3pRlpBQvlyIa7Jd6Qz9P%2FTJVN8o1O4OfN3823QnIyE5eH7e5HGS2JmnvE7EUCWgqMempWCYpmtGSbF4O1deWij00OpE89VsCEwF5k%2FTQ14xwtO8aGQNGTGKFa6ugKom8n1XhFY6iVE1VdYVvwlW8K%2BXti9BGXlrjHX53EkSrqf3tfhXSm%2F7ervhlltCjMAFexezylHrJypS3ueKpeByEexDjf9SLk7hPH5MvNGBqyBgW3qKFCiwFdn6OLbA%2BvdVCAFFwcQgpcZwMMw4vARJ3BTn%2BEbz%2FGfuzuDGQmrfXZ8FWMmMLjTM9DNFGRlNk0s9lZxMIXIu84GOqUBOC7C11154SqlJJRAd1dK8rBipcrgkJa7YVGG4j4HhGfxNEZcymnGZ0J%2B855iTnF5i13MoSjPjgjmrrTweTw5VSrUYkVKxbhzI%2Blxak69fdbX%2FVvyFAbleW6oHCLsQNH69IrOyrRQzY8e9A6sgoJvKTolEenHZ3A7%2F%2BnHttVC%2B45eJy1NBgqPBV9ITudNof2dumfvg%2BsLi0NHoquQjkF1nPn4lPq3&X-Amz-Signature=3611f87288ec6c5ada0c683d2e208b9a211950e08f59ab0e406a0e6cb54fbf06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWGZGQNW%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNwmzni4E55k3%2B6Dg4KKaTNVnLttYB%2B%2B7GlYgqTe268AiEAykpITX90k0mPPrydWHfgAPf2lKjX%2B8eT0zBEWFJ8AAQq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBQZDiH5QbluiJ%2BQaSrcA6buiXZQFtXy5OUAv%2BrWWS5vntLR0NfyRZwd8lQqJIMCpoaA%2FtRyF1tiX14QNMFDeBqZOgbiEEcUE8M0qC3GIi3BwHXGH%2FtNJXLCgIt53C38FMB9eps2wmZfODX2jKVa1yHPm5zwsHAgKGK6IVEgoxIl5pP%2Ba%2FQ%2BjEDLyoBZ8050zmrnY2qqNeBk9t0AHW2avdQ5cgAeZRqtzpL7NN4%2Fek9Y87XXylMfby%2FQcFGBGJAC3tFxb1C1MxFszQoAyqbkop87nO2Zm5jbVK5InHuynzPHUk3ntIagku91RAIhkFPuogtY%2Fz8vp4Cf6A3pRlpBQvlyIa7Jd6Qz9P%2FTJVN8o1O4OfN3823QnIyE5eH7e5HGS2JmnvE7EUCWgqMempWCYpmtGSbF4O1deWij00OpE89VsCEwF5k%2FTQ14xwtO8aGQNGTGKFa6ugKom8n1XhFY6iVE1VdYVvwlW8K%2BXti9BGXlrjHX53EkSrqf3tfhXSm%2F7ervhlltCjMAFexezylHrJypS3ueKpeByEexDjf9SLk7hPH5MvNGBqyBgW3qKFCiwFdn6OLbA%2BvdVCAFFwcQgpcZwMMw4vARJ3BTn%2BEbz%2FGfuzuDGQmrfXZ8FWMmMLjTM9DNFGRlNk0s9lZxMIXIu84GOqUBOC7C11154SqlJJRAd1dK8rBipcrgkJa7YVGG4j4HhGfxNEZcymnGZ0J%2B855iTnF5i13MoSjPjgjmrrTweTw5VSrUYkVKxbhzI%2Blxak69fdbX%2FVvyFAbleW6oHCLsQNH69IrOyrRQzY8e9A6sgoJvKTolEenHZ3A7%2F%2BnHttVC%2B45eJy1NBgqPBV9ITudNof2dumfvg%2BsLi0NHoquQjkF1nPn4lPq3&X-Amz-Signature=12464a57448331845b3000a3b6fb9fffe0e1ff818db20bcba37cccaf07826cf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
