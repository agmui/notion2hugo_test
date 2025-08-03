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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6BZNBEV%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhxfM1Dg1DbWorXgWi%2FkHUhdPFp4vp2tJqo1PYICk73AiEAyczj5MCiyeQxXK%2BGMBPpFSC9x5q5%2FYy0GNjCqOH%2FV7sq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDOnvBAcH7Hbuht4aISrcA%2FJAtuw%2B8X0HxG25rCVqxqq7%2BOh0x3V5tgTPr4MgkDo1VR8gSzAmeDYweqJA3Lexx96JyVUmcjeQgCat4DtexQf6573aenFbxhA9awSWX8FzQZw1EvIilgbk6I7diY312mnOx3FeiS3IvociuYpmSoM19oi%2BWTR113x957oiF7SDCWRNJO14PJf7QRNH8jA%2FIgYSTuQLRW3McqQW0mGtijvsYbEUEY1trNJj%2BDASD3Al4Xzmo8KVMHVyEN97%2BfVNvvZjsOa7l33ZTwXcmZfQ7OJaKHjR7Lh5cN49BBCBsgSDQIIvc%2Fm3inOA4refxHtBCbAN1eb2EW5%2FJ6koBed794S%2F2XYif84pmPJ80NLe81OdB8N%2Bb28xMZxO%2B0NzkdMW5zsdB87JApKJ%2FKaB%2BXMwg0%2F%2BMMmLh%2Ffn2F%2Fha897X8LjqAsTSxqVYjB4LGvuYLW%2Br7G8iZLNO5vSadwv7I2m%2BImIoYiUyPpXP%2F7NqNrKigPk3FEsMNyKnpYNNxyLuY5hHQWPvgVQVCh2bFQo3eOHzY3bd0OTN2MaK49FYPCUZzC2P56yGmIqM9aSZiuVh%2FRr%2FQ9iXqBzJvwXSDv1KhrbiD6u5H6MMJ5jh%2BHNbI%2ByWmc4ViX9sovBgO9VfJ7gMMvSvcQGOqUBYN3ite2aCPrDB8ZZTiLn3HkydFFjaBE3suZiQCQDluCr8qNywf3z1pOt3PIBAm8xex7tvcLTRyqgK0zLFFJowOrobiyWd9YO%2F%2FXbyBgkdbChfUO9SYFlOGsLAUSXFvuKFmuL1jcFl17Sns0tgC8i0H4AWTlbK0gMf81U1D4%2FLNW3O5NcFv3AV5bzIcho1mXPUe2D7jEVdh4GY%2FRfkYpD8UFjhuB%2F&X-Amz-Signature=b90f759fc79c678cd3f5f071acd73608bdbde3493828d2c30d6247dd076b8527&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6BZNBEV%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhxfM1Dg1DbWorXgWi%2FkHUhdPFp4vp2tJqo1PYICk73AiEAyczj5MCiyeQxXK%2BGMBPpFSC9x5q5%2FYy0GNjCqOH%2FV7sq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDOnvBAcH7Hbuht4aISrcA%2FJAtuw%2B8X0HxG25rCVqxqq7%2BOh0x3V5tgTPr4MgkDo1VR8gSzAmeDYweqJA3Lexx96JyVUmcjeQgCat4DtexQf6573aenFbxhA9awSWX8FzQZw1EvIilgbk6I7diY312mnOx3FeiS3IvociuYpmSoM19oi%2BWTR113x957oiF7SDCWRNJO14PJf7QRNH8jA%2FIgYSTuQLRW3McqQW0mGtijvsYbEUEY1trNJj%2BDASD3Al4Xzmo8KVMHVyEN97%2BfVNvvZjsOa7l33ZTwXcmZfQ7OJaKHjR7Lh5cN49BBCBsgSDQIIvc%2Fm3inOA4refxHtBCbAN1eb2EW5%2FJ6koBed794S%2F2XYif84pmPJ80NLe81OdB8N%2Bb28xMZxO%2B0NzkdMW5zsdB87JApKJ%2FKaB%2BXMwg0%2F%2BMMmLh%2Ffn2F%2Fha897X8LjqAsTSxqVYjB4LGvuYLW%2Br7G8iZLNO5vSadwv7I2m%2BImIoYiUyPpXP%2F7NqNrKigPk3FEsMNyKnpYNNxyLuY5hHQWPvgVQVCh2bFQo3eOHzY3bd0OTN2MaK49FYPCUZzC2P56yGmIqM9aSZiuVh%2FRr%2FQ9iXqBzJvwXSDv1KhrbiD6u5H6MMJ5jh%2BHNbI%2ByWmc4ViX9sovBgO9VfJ7gMMvSvcQGOqUBYN3ite2aCPrDB8ZZTiLn3HkydFFjaBE3suZiQCQDluCr8qNywf3z1pOt3PIBAm8xex7tvcLTRyqgK0zLFFJowOrobiyWd9YO%2F%2FXbyBgkdbChfUO9SYFlOGsLAUSXFvuKFmuL1jcFl17Sns0tgC8i0H4AWTlbK0gMf81U1D4%2FLNW3O5NcFv3AV5bzIcho1mXPUe2D7jEVdh4GY%2FRfkYpD8UFjhuB%2F&X-Amz-Signature=a2d946e73b4f8c900dae04628ad29d8c32e17834c1caf3a8e9769b54bf33ae91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6BZNBEV%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhxfM1Dg1DbWorXgWi%2FkHUhdPFp4vp2tJqo1PYICk73AiEAyczj5MCiyeQxXK%2BGMBPpFSC9x5q5%2FYy0GNjCqOH%2FV7sq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDOnvBAcH7Hbuht4aISrcA%2FJAtuw%2B8X0HxG25rCVqxqq7%2BOh0x3V5tgTPr4MgkDo1VR8gSzAmeDYweqJA3Lexx96JyVUmcjeQgCat4DtexQf6573aenFbxhA9awSWX8FzQZw1EvIilgbk6I7diY312mnOx3FeiS3IvociuYpmSoM19oi%2BWTR113x957oiF7SDCWRNJO14PJf7QRNH8jA%2FIgYSTuQLRW3McqQW0mGtijvsYbEUEY1trNJj%2BDASD3Al4Xzmo8KVMHVyEN97%2BfVNvvZjsOa7l33ZTwXcmZfQ7OJaKHjR7Lh5cN49BBCBsgSDQIIvc%2Fm3inOA4refxHtBCbAN1eb2EW5%2FJ6koBed794S%2F2XYif84pmPJ80NLe81OdB8N%2Bb28xMZxO%2B0NzkdMW5zsdB87JApKJ%2FKaB%2BXMwg0%2F%2BMMmLh%2Ffn2F%2Fha897X8LjqAsTSxqVYjB4LGvuYLW%2Br7G8iZLNO5vSadwv7I2m%2BImIoYiUyPpXP%2F7NqNrKigPk3FEsMNyKnpYNNxyLuY5hHQWPvgVQVCh2bFQo3eOHzY3bd0OTN2MaK49FYPCUZzC2P56yGmIqM9aSZiuVh%2FRr%2FQ9iXqBzJvwXSDv1KhrbiD6u5H6MMJ5jh%2BHNbI%2ByWmc4ViX9sovBgO9VfJ7gMMvSvcQGOqUBYN3ite2aCPrDB8ZZTiLn3HkydFFjaBE3suZiQCQDluCr8qNywf3z1pOt3PIBAm8xex7tvcLTRyqgK0zLFFJowOrobiyWd9YO%2F%2FXbyBgkdbChfUO9SYFlOGsLAUSXFvuKFmuL1jcFl17Sns0tgC8i0H4AWTlbK0gMf81U1D4%2FLNW3O5NcFv3AV5bzIcho1mXPUe2D7jEVdh4GY%2FRfkYpD8UFjhuB%2F&X-Amz-Signature=00b3dc0278b60737ff0fab8b30fe7630f5f2a3b3e56f94d125af49123c1f5812&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6BZNBEV%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhxfM1Dg1DbWorXgWi%2FkHUhdPFp4vp2tJqo1PYICk73AiEAyczj5MCiyeQxXK%2BGMBPpFSC9x5q5%2FYy0GNjCqOH%2FV7sq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDOnvBAcH7Hbuht4aISrcA%2FJAtuw%2B8X0HxG25rCVqxqq7%2BOh0x3V5tgTPr4MgkDo1VR8gSzAmeDYweqJA3Lexx96JyVUmcjeQgCat4DtexQf6573aenFbxhA9awSWX8FzQZw1EvIilgbk6I7diY312mnOx3FeiS3IvociuYpmSoM19oi%2BWTR113x957oiF7SDCWRNJO14PJf7QRNH8jA%2FIgYSTuQLRW3McqQW0mGtijvsYbEUEY1trNJj%2BDASD3Al4Xzmo8KVMHVyEN97%2BfVNvvZjsOa7l33ZTwXcmZfQ7OJaKHjR7Lh5cN49BBCBsgSDQIIvc%2Fm3inOA4refxHtBCbAN1eb2EW5%2FJ6koBed794S%2F2XYif84pmPJ80NLe81OdB8N%2Bb28xMZxO%2B0NzkdMW5zsdB87JApKJ%2FKaB%2BXMwg0%2F%2BMMmLh%2Ffn2F%2Fha897X8LjqAsTSxqVYjB4LGvuYLW%2Br7G8iZLNO5vSadwv7I2m%2BImIoYiUyPpXP%2F7NqNrKigPk3FEsMNyKnpYNNxyLuY5hHQWPvgVQVCh2bFQo3eOHzY3bd0OTN2MaK49FYPCUZzC2P56yGmIqM9aSZiuVh%2FRr%2FQ9iXqBzJvwXSDv1KhrbiD6u5H6MMJ5jh%2BHNbI%2ByWmc4ViX9sovBgO9VfJ7gMMvSvcQGOqUBYN3ite2aCPrDB8ZZTiLn3HkydFFjaBE3suZiQCQDluCr8qNywf3z1pOt3PIBAm8xex7tvcLTRyqgK0zLFFJowOrobiyWd9YO%2F%2FXbyBgkdbChfUO9SYFlOGsLAUSXFvuKFmuL1jcFl17Sns0tgC8i0H4AWTlbK0gMf81U1D4%2FLNW3O5NcFv3AV5bzIcho1mXPUe2D7jEVdh4GY%2FRfkYpD8UFjhuB%2F&X-Amz-Signature=c884191c55f48ae2b72cad5c1e0f412620a15745359a493df8a0a1da0860a92f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6BZNBEV%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhxfM1Dg1DbWorXgWi%2FkHUhdPFp4vp2tJqo1PYICk73AiEAyczj5MCiyeQxXK%2BGMBPpFSC9x5q5%2FYy0GNjCqOH%2FV7sq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDOnvBAcH7Hbuht4aISrcA%2FJAtuw%2B8X0HxG25rCVqxqq7%2BOh0x3V5tgTPr4MgkDo1VR8gSzAmeDYweqJA3Lexx96JyVUmcjeQgCat4DtexQf6573aenFbxhA9awSWX8FzQZw1EvIilgbk6I7diY312mnOx3FeiS3IvociuYpmSoM19oi%2BWTR113x957oiF7SDCWRNJO14PJf7QRNH8jA%2FIgYSTuQLRW3McqQW0mGtijvsYbEUEY1trNJj%2BDASD3Al4Xzmo8KVMHVyEN97%2BfVNvvZjsOa7l33ZTwXcmZfQ7OJaKHjR7Lh5cN49BBCBsgSDQIIvc%2Fm3inOA4refxHtBCbAN1eb2EW5%2FJ6koBed794S%2F2XYif84pmPJ80NLe81OdB8N%2Bb28xMZxO%2B0NzkdMW5zsdB87JApKJ%2FKaB%2BXMwg0%2F%2BMMmLh%2Ffn2F%2Fha897X8LjqAsTSxqVYjB4LGvuYLW%2Br7G8iZLNO5vSadwv7I2m%2BImIoYiUyPpXP%2F7NqNrKigPk3FEsMNyKnpYNNxyLuY5hHQWPvgVQVCh2bFQo3eOHzY3bd0OTN2MaK49FYPCUZzC2P56yGmIqM9aSZiuVh%2FRr%2FQ9iXqBzJvwXSDv1KhrbiD6u5H6MMJ5jh%2BHNbI%2ByWmc4ViX9sovBgO9VfJ7gMMvSvcQGOqUBYN3ite2aCPrDB8ZZTiLn3HkydFFjaBE3suZiQCQDluCr8qNywf3z1pOt3PIBAm8xex7tvcLTRyqgK0zLFFJowOrobiyWd9YO%2F%2FXbyBgkdbChfUO9SYFlOGsLAUSXFvuKFmuL1jcFl17Sns0tgC8i0H4AWTlbK0gMf81U1D4%2FLNW3O5NcFv3AV5bzIcho1mXPUe2D7jEVdh4GY%2FRfkYpD8UFjhuB%2F&X-Amz-Signature=b8fc1ee9934ab7f36dc2b47d14274b9afeb9568f9e6bc8a7523f8f394590557d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6BZNBEV%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhxfM1Dg1DbWorXgWi%2FkHUhdPFp4vp2tJqo1PYICk73AiEAyczj5MCiyeQxXK%2BGMBPpFSC9x5q5%2FYy0GNjCqOH%2FV7sq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDOnvBAcH7Hbuht4aISrcA%2FJAtuw%2B8X0HxG25rCVqxqq7%2BOh0x3V5tgTPr4MgkDo1VR8gSzAmeDYweqJA3Lexx96JyVUmcjeQgCat4DtexQf6573aenFbxhA9awSWX8FzQZw1EvIilgbk6I7diY312mnOx3FeiS3IvociuYpmSoM19oi%2BWTR113x957oiF7SDCWRNJO14PJf7QRNH8jA%2FIgYSTuQLRW3McqQW0mGtijvsYbEUEY1trNJj%2BDASD3Al4Xzmo8KVMHVyEN97%2BfVNvvZjsOa7l33ZTwXcmZfQ7OJaKHjR7Lh5cN49BBCBsgSDQIIvc%2Fm3inOA4refxHtBCbAN1eb2EW5%2FJ6koBed794S%2F2XYif84pmPJ80NLe81OdB8N%2Bb28xMZxO%2B0NzkdMW5zsdB87JApKJ%2FKaB%2BXMwg0%2F%2BMMmLh%2Ffn2F%2Fha897X8LjqAsTSxqVYjB4LGvuYLW%2Br7G8iZLNO5vSadwv7I2m%2BImIoYiUyPpXP%2F7NqNrKigPk3FEsMNyKnpYNNxyLuY5hHQWPvgVQVCh2bFQo3eOHzY3bd0OTN2MaK49FYPCUZzC2P56yGmIqM9aSZiuVh%2FRr%2FQ9iXqBzJvwXSDv1KhrbiD6u5H6MMJ5jh%2BHNbI%2ByWmc4ViX9sovBgO9VfJ7gMMvSvcQGOqUBYN3ite2aCPrDB8ZZTiLn3HkydFFjaBE3suZiQCQDluCr8qNywf3z1pOt3PIBAm8xex7tvcLTRyqgK0zLFFJowOrobiyWd9YO%2F%2FXbyBgkdbChfUO9SYFlOGsLAUSXFvuKFmuL1jcFl17Sns0tgC8i0H4AWTlbK0gMf81U1D4%2FLNW3O5NcFv3AV5bzIcho1mXPUe2D7jEVdh4GY%2FRfkYpD8UFjhuB%2F&X-Amz-Signature=664c132544504b9740dff7290326b4ecffdfae7d76dae90debc532ee65882f1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6BZNBEV%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhxfM1Dg1DbWorXgWi%2FkHUhdPFp4vp2tJqo1PYICk73AiEAyczj5MCiyeQxXK%2BGMBPpFSC9x5q5%2FYy0GNjCqOH%2FV7sq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDOnvBAcH7Hbuht4aISrcA%2FJAtuw%2B8X0HxG25rCVqxqq7%2BOh0x3V5tgTPr4MgkDo1VR8gSzAmeDYweqJA3Lexx96JyVUmcjeQgCat4DtexQf6573aenFbxhA9awSWX8FzQZw1EvIilgbk6I7diY312mnOx3FeiS3IvociuYpmSoM19oi%2BWTR113x957oiF7SDCWRNJO14PJf7QRNH8jA%2FIgYSTuQLRW3McqQW0mGtijvsYbEUEY1trNJj%2BDASD3Al4Xzmo8KVMHVyEN97%2BfVNvvZjsOa7l33ZTwXcmZfQ7OJaKHjR7Lh5cN49BBCBsgSDQIIvc%2Fm3inOA4refxHtBCbAN1eb2EW5%2FJ6koBed794S%2F2XYif84pmPJ80NLe81OdB8N%2Bb28xMZxO%2B0NzkdMW5zsdB87JApKJ%2FKaB%2BXMwg0%2F%2BMMmLh%2Ffn2F%2Fha897X8LjqAsTSxqVYjB4LGvuYLW%2Br7G8iZLNO5vSadwv7I2m%2BImIoYiUyPpXP%2F7NqNrKigPk3FEsMNyKnpYNNxyLuY5hHQWPvgVQVCh2bFQo3eOHzY3bd0OTN2MaK49FYPCUZzC2P56yGmIqM9aSZiuVh%2FRr%2FQ9iXqBzJvwXSDv1KhrbiD6u5H6MMJ5jh%2BHNbI%2ByWmc4ViX9sovBgO9VfJ7gMMvSvcQGOqUBYN3ite2aCPrDB8ZZTiLn3HkydFFjaBE3suZiQCQDluCr8qNywf3z1pOt3PIBAm8xex7tvcLTRyqgK0zLFFJowOrobiyWd9YO%2F%2FXbyBgkdbChfUO9SYFlOGsLAUSXFvuKFmuL1jcFl17Sns0tgC8i0H4AWTlbK0gMf81U1D4%2FLNW3O5NcFv3AV5bzIcho1mXPUe2D7jEVdh4GY%2FRfkYpD8UFjhuB%2F&X-Amz-Signature=ae62b0b8bca9f04b4d33e98e32b12341306337416d4e83c5ed2e3e945c19af92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6BZNBEV%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhxfM1Dg1DbWorXgWi%2FkHUhdPFp4vp2tJqo1PYICk73AiEAyczj5MCiyeQxXK%2BGMBPpFSC9x5q5%2FYy0GNjCqOH%2FV7sq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDOnvBAcH7Hbuht4aISrcA%2FJAtuw%2B8X0HxG25rCVqxqq7%2BOh0x3V5tgTPr4MgkDo1VR8gSzAmeDYweqJA3Lexx96JyVUmcjeQgCat4DtexQf6573aenFbxhA9awSWX8FzQZw1EvIilgbk6I7diY312mnOx3FeiS3IvociuYpmSoM19oi%2BWTR113x957oiF7SDCWRNJO14PJf7QRNH8jA%2FIgYSTuQLRW3McqQW0mGtijvsYbEUEY1trNJj%2BDASD3Al4Xzmo8KVMHVyEN97%2BfVNvvZjsOa7l33ZTwXcmZfQ7OJaKHjR7Lh5cN49BBCBsgSDQIIvc%2Fm3inOA4refxHtBCbAN1eb2EW5%2FJ6koBed794S%2F2XYif84pmPJ80NLe81OdB8N%2Bb28xMZxO%2B0NzkdMW5zsdB87JApKJ%2FKaB%2BXMwg0%2F%2BMMmLh%2Ffn2F%2Fha897X8LjqAsTSxqVYjB4LGvuYLW%2Br7G8iZLNO5vSadwv7I2m%2BImIoYiUyPpXP%2F7NqNrKigPk3FEsMNyKnpYNNxyLuY5hHQWPvgVQVCh2bFQo3eOHzY3bd0OTN2MaK49FYPCUZzC2P56yGmIqM9aSZiuVh%2FRr%2FQ9iXqBzJvwXSDv1KhrbiD6u5H6MMJ5jh%2BHNbI%2ByWmc4ViX9sovBgO9VfJ7gMMvSvcQGOqUBYN3ite2aCPrDB8ZZTiLn3HkydFFjaBE3suZiQCQDluCr8qNywf3z1pOt3PIBAm8xex7tvcLTRyqgK0zLFFJowOrobiyWd9YO%2F%2FXbyBgkdbChfUO9SYFlOGsLAUSXFvuKFmuL1jcFl17Sns0tgC8i0H4AWTlbK0gMf81U1D4%2FLNW3O5NcFv3AV5bzIcho1mXPUe2D7jEVdh4GY%2FRfkYpD8UFjhuB%2F&X-Amz-Signature=741c6207a22829d2032370e2de420d23c3a16798b2be2a18e928ec84f1d5a8d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6BZNBEV%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhxfM1Dg1DbWorXgWi%2FkHUhdPFp4vp2tJqo1PYICk73AiEAyczj5MCiyeQxXK%2BGMBPpFSC9x5q5%2FYy0GNjCqOH%2FV7sq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDOnvBAcH7Hbuht4aISrcA%2FJAtuw%2B8X0HxG25rCVqxqq7%2BOh0x3V5tgTPr4MgkDo1VR8gSzAmeDYweqJA3Lexx96JyVUmcjeQgCat4DtexQf6573aenFbxhA9awSWX8FzQZw1EvIilgbk6I7diY312mnOx3FeiS3IvociuYpmSoM19oi%2BWTR113x957oiF7SDCWRNJO14PJf7QRNH8jA%2FIgYSTuQLRW3McqQW0mGtijvsYbEUEY1trNJj%2BDASD3Al4Xzmo8KVMHVyEN97%2BfVNvvZjsOa7l33ZTwXcmZfQ7OJaKHjR7Lh5cN49BBCBsgSDQIIvc%2Fm3inOA4refxHtBCbAN1eb2EW5%2FJ6koBed794S%2F2XYif84pmPJ80NLe81OdB8N%2Bb28xMZxO%2B0NzkdMW5zsdB87JApKJ%2FKaB%2BXMwg0%2F%2BMMmLh%2Ffn2F%2Fha897X8LjqAsTSxqVYjB4LGvuYLW%2Br7G8iZLNO5vSadwv7I2m%2BImIoYiUyPpXP%2F7NqNrKigPk3FEsMNyKnpYNNxyLuY5hHQWPvgVQVCh2bFQo3eOHzY3bd0OTN2MaK49FYPCUZzC2P56yGmIqM9aSZiuVh%2FRr%2FQ9iXqBzJvwXSDv1KhrbiD6u5H6MMJ5jh%2BHNbI%2ByWmc4ViX9sovBgO9VfJ7gMMvSvcQGOqUBYN3ite2aCPrDB8ZZTiLn3HkydFFjaBE3suZiQCQDluCr8qNywf3z1pOt3PIBAm8xex7tvcLTRyqgK0zLFFJowOrobiyWd9YO%2F%2FXbyBgkdbChfUO9SYFlOGsLAUSXFvuKFmuL1jcFl17Sns0tgC8i0H4AWTlbK0gMf81U1D4%2FLNW3O5NcFv3AV5bzIcho1mXPUe2D7jEVdh4GY%2FRfkYpD8UFjhuB%2F&X-Amz-Signature=c9920410cfedab1785ccb0d7317fb75edaf5a6371fcf4752398ff73d858b013f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6BZNBEV%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhxfM1Dg1DbWorXgWi%2FkHUhdPFp4vp2tJqo1PYICk73AiEAyczj5MCiyeQxXK%2BGMBPpFSC9x5q5%2FYy0GNjCqOH%2FV7sq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDOnvBAcH7Hbuht4aISrcA%2FJAtuw%2B8X0HxG25rCVqxqq7%2BOh0x3V5tgTPr4MgkDo1VR8gSzAmeDYweqJA3Lexx96JyVUmcjeQgCat4DtexQf6573aenFbxhA9awSWX8FzQZw1EvIilgbk6I7diY312mnOx3FeiS3IvociuYpmSoM19oi%2BWTR113x957oiF7SDCWRNJO14PJf7QRNH8jA%2FIgYSTuQLRW3McqQW0mGtijvsYbEUEY1trNJj%2BDASD3Al4Xzmo8KVMHVyEN97%2BfVNvvZjsOa7l33ZTwXcmZfQ7OJaKHjR7Lh5cN49BBCBsgSDQIIvc%2Fm3inOA4refxHtBCbAN1eb2EW5%2FJ6koBed794S%2F2XYif84pmPJ80NLe81OdB8N%2Bb28xMZxO%2B0NzkdMW5zsdB87JApKJ%2FKaB%2BXMwg0%2F%2BMMmLh%2Ffn2F%2Fha897X8LjqAsTSxqVYjB4LGvuYLW%2Br7G8iZLNO5vSadwv7I2m%2BImIoYiUyPpXP%2F7NqNrKigPk3FEsMNyKnpYNNxyLuY5hHQWPvgVQVCh2bFQo3eOHzY3bd0OTN2MaK49FYPCUZzC2P56yGmIqM9aSZiuVh%2FRr%2FQ9iXqBzJvwXSDv1KhrbiD6u5H6MMJ5jh%2BHNbI%2ByWmc4ViX9sovBgO9VfJ7gMMvSvcQGOqUBYN3ite2aCPrDB8ZZTiLn3HkydFFjaBE3suZiQCQDluCr8qNywf3z1pOt3PIBAm8xex7tvcLTRyqgK0zLFFJowOrobiyWd9YO%2F%2FXbyBgkdbChfUO9SYFlOGsLAUSXFvuKFmuL1jcFl17Sns0tgC8i0H4AWTlbK0gMf81U1D4%2FLNW3O5NcFv3AV5bzIcho1mXPUe2D7jEVdh4GY%2FRfkYpD8UFjhuB%2F&X-Amz-Signature=e572794c9adb3a7ede1a58ebb1b8ec621ca05d5934f6a9203913c182daa5284a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6BZNBEV%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhxfM1Dg1DbWorXgWi%2FkHUhdPFp4vp2tJqo1PYICk73AiEAyczj5MCiyeQxXK%2BGMBPpFSC9x5q5%2FYy0GNjCqOH%2FV7sq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDOnvBAcH7Hbuht4aISrcA%2FJAtuw%2B8X0HxG25rCVqxqq7%2BOh0x3V5tgTPr4MgkDo1VR8gSzAmeDYweqJA3Lexx96JyVUmcjeQgCat4DtexQf6573aenFbxhA9awSWX8FzQZw1EvIilgbk6I7diY312mnOx3FeiS3IvociuYpmSoM19oi%2BWTR113x957oiF7SDCWRNJO14PJf7QRNH8jA%2FIgYSTuQLRW3McqQW0mGtijvsYbEUEY1trNJj%2BDASD3Al4Xzmo8KVMHVyEN97%2BfVNvvZjsOa7l33ZTwXcmZfQ7OJaKHjR7Lh5cN49BBCBsgSDQIIvc%2Fm3inOA4refxHtBCbAN1eb2EW5%2FJ6koBed794S%2F2XYif84pmPJ80NLe81OdB8N%2Bb28xMZxO%2B0NzkdMW5zsdB87JApKJ%2FKaB%2BXMwg0%2F%2BMMmLh%2Ffn2F%2Fha897X8LjqAsTSxqVYjB4LGvuYLW%2Br7G8iZLNO5vSadwv7I2m%2BImIoYiUyPpXP%2F7NqNrKigPk3FEsMNyKnpYNNxyLuY5hHQWPvgVQVCh2bFQo3eOHzY3bd0OTN2MaK49FYPCUZzC2P56yGmIqM9aSZiuVh%2FRr%2FQ9iXqBzJvwXSDv1KhrbiD6u5H6MMJ5jh%2BHNbI%2ByWmc4ViX9sovBgO9VfJ7gMMvSvcQGOqUBYN3ite2aCPrDB8ZZTiLn3HkydFFjaBE3suZiQCQDluCr8qNywf3z1pOt3PIBAm8xex7tvcLTRyqgK0zLFFJowOrobiyWd9YO%2F%2FXbyBgkdbChfUO9SYFlOGsLAUSXFvuKFmuL1jcFl17Sns0tgC8i0H4AWTlbK0gMf81U1D4%2FLNW3O5NcFv3AV5bzIcho1mXPUe2D7jEVdh4GY%2FRfkYpD8UFjhuB%2F&X-Amz-Signature=0150acf9442bff357f5e9fb222bfa45b3095ae9478c90f68fd08157935beec48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6BZNBEV%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhxfM1Dg1DbWorXgWi%2FkHUhdPFp4vp2tJqo1PYICk73AiEAyczj5MCiyeQxXK%2BGMBPpFSC9x5q5%2FYy0GNjCqOH%2FV7sq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDOnvBAcH7Hbuht4aISrcA%2FJAtuw%2B8X0HxG25rCVqxqq7%2BOh0x3V5tgTPr4MgkDo1VR8gSzAmeDYweqJA3Lexx96JyVUmcjeQgCat4DtexQf6573aenFbxhA9awSWX8FzQZw1EvIilgbk6I7diY312mnOx3FeiS3IvociuYpmSoM19oi%2BWTR113x957oiF7SDCWRNJO14PJf7QRNH8jA%2FIgYSTuQLRW3McqQW0mGtijvsYbEUEY1trNJj%2BDASD3Al4Xzmo8KVMHVyEN97%2BfVNvvZjsOa7l33ZTwXcmZfQ7OJaKHjR7Lh5cN49BBCBsgSDQIIvc%2Fm3inOA4refxHtBCbAN1eb2EW5%2FJ6koBed794S%2F2XYif84pmPJ80NLe81OdB8N%2Bb28xMZxO%2B0NzkdMW5zsdB87JApKJ%2FKaB%2BXMwg0%2F%2BMMmLh%2Ffn2F%2Fha897X8LjqAsTSxqVYjB4LGvuYLW%2Br7G8iZLNO5vSadwv7I2m%2BImIoYiUyPpXP%2F7NqNrKigPk3FEsMNyKnpYNNxyLuY5hHQWPvgVQVCh2bFQo3eOHzY3bd0OTN2MaK49FYPCUZzC2P56yGmIqM9aSZiuVh%2FRr%2FQ9iXqBzJvwXSDv1KhrbiD6u5H6MMJ5jh%2BHNbI%2ByWmc4ViX9sovBgO9VfJ7gMMvSvcQGOqUBYN3ite2aCPrDB8ZZTiLn3HkydFFjaBE3suZiQCQDluCr8qNywf3z1pOt3PIBAm8xex7tvcLTRyqgK0zLFFJowOrobiyWd9YO%2F%2FXbyBgkdbChfUO9SYFlOGsLAUSXFvuKFmuL1jcFl17Sns0tgC8i0H4AWTlbK0gMf81U1D4%2FLNW3O5NcFv3AV5bzIcho1mXPUe2D7jEVdh4GY%2FRfkYpD8UFjhuB%2F&X-Amz-Signature=9b313107d46efaaaca0da85f0ae1d5968b33125a5dd004ce5065d365cf0b360e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6BZNBEV%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhxfM1Dg1DbWorXgWi%2FkHUhdPFp4vp2tJqo1PYICk73AiEAyczj5MCiyeQxXK%2BGMBPpFSC9x5q5%2FYy0GNjCqOH%2FV7sq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDOnvBAcH7Hbuht4aISrcA%2FJAtuw%2B8X0HxG25rCVqxqq7%2BOh0x3V5tgTPr4MgkDo1VR8gSzAmeDYweqJA3Lexx96JyVUmcjeQgCat4DtexQf6573aenFbxhA9awSWX8FzQZw1EvIilgbk6I7diY312mnOx3FeiS3IvociuYpmSoM19oi%2BWTR113x957oiF7SDCWRNJO14PJf7QRNH8jA%2FIgYSTuQLRW3McqQW0mGtijvsYbEUEY1trNJj%2BDASD3Al4Xzmo8KVMHVyEN97%2BfVNvvZjsOa7l33ZTwXcmZfQ7OJaKHjR7Lh5cN49BBCBsgSDQIIvc%2Fm3inOA4refxHtBCbAN1eb2EW5%2FJ6koBed794S%2F2XYif84pmPJ80NLe81OdB8N%2Bb28xMZxO%2B0NzkdMW5zsdB87JApKJ%2FKaB%2BXMwg0%2F%2BMMmLh%2Ffn2F%2Fha897X8LjqAsTSxqVYjB4LGvuYLW%2Br7G8iZLNO5vSadwv7I2m%2BImIoYiUyPpXP%2F7NqNrKigPk3FEsMNyKnpYNNxyLuY5hHQWPvgVQVCh2bFQo3eOHzY3bd0OTN2MaK49FYPCUZzC2P56yGmIqM9aSZiuVh%2FRr%2FQ9iXqBzJvwXSDv1KhrbiD6u5H6MMJ5jh%2BHNbI%2ByWmc4ViX9sovBgO9VfJ7gMMvSvcQGOqUBYN3ite2aCPrDB8ZZTiLn3HkydFFjaBE3suZiQCQDluCr8qNywf3z1pOt3PIBAm8xex7tvcLTRyqgK0zLFFJowOrobiyWd9YO%2F%2FXbyBgkdbChfUO9SYFlOGsLAUSXFvuKFmuL1jcFl17Sns0tgC8i0H4AWTlbK0gMf81U1D4%2FLNW3O5NcFv3AV5bzIcho1mXPUe2D7jEVdh4GY%2FRfkYpD8UFjhuB%2F&X-Amz-Signature=d1a6e6ecd9ce42ba450f823cd1e7bcccf211157c71e5e651f5e613835d64a3f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6BZNBEV%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhxfM1Dg1DbWorXgWi%2FkHUhdPFp4vp2tJqo1PYICk73AiEAyczj5MCiyeQxXK%2BGMBPpFSC9x5q5%2FYy0GNjCqOH%2FV7sq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDOnvBAcH7Hbuht4aISrcA%2FJAtuw%2B8X0HxG25rCVqxqq7%2BOh0x3V5tgTPr4MgkDo1VR8gSzAmeDYweqJA3Lexx96JyVUmcjeQgCat4DtexQf6573aenFbxhA9awSWX8FzQZw1EvIilgbk6I7diY312mnOx3FeiS3IvociuYpmSoM19oi%2BWTR113x957oiF7SDCWRNJO14PJf7QRNH8jA%2FIgYSTuQLRW3McqQW0mGtijvsYbEUEY1trNJj%2BDASD3Al4Xzmo8KVMHVyEN97%2BfVNvvZjsOa7l33ZTwXcmZfQ7OJaKHjR7Lh5cN49BBCBsgSDQIIvc%2Fm3inOA4refxHtBCbAN1eb2EW5%2FJ6koBed794S%2F2XYif84pmPJ80NLe81OdB8N%2Bb28xMZxO%2B0NzkdMW5zsdB87JApKJ%2FKaB%2BXMwg0%2F%2BMMmLh%2Ffn2F%2Fha897X8LjqAsTSxqVYjB4LGvuYLW%2Br7G8iZLNO5vSadwv7I2m%2BImIoYiUyPpXP%2F7NqNrKigPk3FEsMNyKnpYNNxyLuY5hHQWPvgVQVCh2bFQo3eOHzY3bd0OTN2MaK49FYPCUZzC2P56yGmIqM9aSZiuVh%2FRr%2FQ9iXqBzJvwXSDv1KhrbiD6u5H6MMJ5jh%2BHNbI%2ByWmc4ViX9sovBgO9VfJ7gMMvSvcQGOqUBYN3ite2aCPrDB8ZZTiLn3HkydFFjaBE3suZiQCQDluCr8qNywf3z1pOt3PIBAm8xex7tvcLTRyqgK0zLFFJowOrobiyWd9YO%2F%2FXbyBgkdbChfUO9SYFlOGsLAUSXFvuKFmuL1jcFl17Sns0tgC8i0H4AWTlbK0gMf81U1D4%2FLNW3O5NcFv3AV5bzIcho1mXPUe2D7jEVdh4GY%2FRfkYpD8UFjhuB%2F&X-Amz-Signature=c8a9de4ed413ea4357ce99524b38add224ace304c695b6cb24eb53135c1f589b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
