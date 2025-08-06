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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK57DVVO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCICJjhitrW%2BLmg4ILJ17zy1xiAbCDk3bokytHe8MzikYsAiAmFQ0%2FQeNAG2UcVrtMULZACKxoIrMSh4IxA%2FeLhqtSOir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM80MU9tS4R4EZksIjKtwDOfJpHl%2B68tWmGEmECGu5NyM5TLHxBA%2FXXTF%2BvSgNVpyoH%2Bn458SeSIo%2F4V9NFwLZvbLsh6lg4HRcdO9P2uJ0bYuzztJAgIbNFMxv7%2B1hkmsTL3rdFDmEr5lbTn1YfcvKwp58zbC%2BjX%2BVPHu6IgLwNlMsPIAuHJ7JQtwS8d4ApPM%2Baz%2BIxKr%2F9bppW%2BRDxLulNbzxyMVGHPM9LSh4im5BydORhAtxSxd4SqAaqkka28A02r1oUse%2BEIe5gR5c2QNoucUxjbLRyeV%2BepC%2FebS8SkdaQZOddcxJxSZvoBdEAgjU2YQE4Id4MNNqJcG67PbeBBnHo7ybD5KPg3Jz%2B1nuwX8fEFK3l%2F%2FDqbAqhpYzhffN3pb%2FRE3PpStWZC7qrcHhs085tRmQCLsm8e610G5kX60ua10ikMTGTKtmIG6pbWmxfPDM6IdkJ2gTb1xs2TrUfKc8qWL3o3o9UDbeYPT1jq2t9OY8t4D1%2Fki4qcLSZ0x9bZGIyyaVgJgWZM71ezgedYxzoQfygZP84g%2FgvjU%2FG1vFypJm4LDCCeSsgwSb96IfQfJJE0qpTemevVSXBg%2BKRAzS9rKxZZBe6jZ1iluIqnOWe8%2BjKiXGKDL1OGt1KG%2BIZo%2BfQMwAGuERhscw88%2FMxAY6pgEEKcNpNAl3MGKLMl6LlonbHUKtPC8kbw1ennQyxCp3RFp6GYjsYl%2FvGKVQ7aeMqol1hiwfejXrY3UpizST%2BWXYTV%2F5bPcj5NOmbgZWjQMBE7OJfh%2BkYBsI7lIvgwlqSJ3scKmlGoZahXWSJNEdZp9qdcgRF6e8FvbbVBhjbA7TcIU1bxMYERa7tPFvwmIN%2F4J35DUYXQ9ASYF9LqfrfgmXZl5jCwRQ&X-Amz-Signature=dfcd14e1097238e7b390d051af4647ecfdb663f96361983f9fff073c680d37ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK57DVVO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCICJjhitrW%2BLmg4ILJ17zy1xiAbCDk3bokytHe8MzikYsAiAmFQ0%2FQeNAG2UcVrtMULZACKxoIrMSh4IxA%2FeLhqtSOir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM80MU9tS4R4EZksIjKtwDOfJpHl%2B68tWmGEmECGu5NyM5TLHxBA%2FXXTF%2BvSgNVpyoH%2Bn458SeSIo%2F4V9NFwLZvbLsh6lg4HRcdO9P2uJ0bYuzztJAgIbNFMxv7%2B1hkmsTL3rdFDmEr5lbTn1YfcvKwp58zbC%2BjX%2BVPHu6IgLwNlMsPIAuHJ7JQtwS8d4ApPM%2Baz%2BIxKr%2F9bppW%2BRDxLulNbzxyMVGHPM9LSh4im5BydORhAtxSxd4SqAaqkka28A02r1oUse%2BEIe5gR5c2QNoucUxjbLRyeV%2BepC%2FebS8SkdaQZOddcxJxSZvoBdEAgjU2YQE4Id4MNNqJcG67PbeBBnHo7ybD5KPg3Jz%2B1nuwX8fEFK3l%2F%2FDqbAqhpYzhffN3pb%2FRE3PpStWZC7qrcHhs085tRmQCLsm8e610G5kX60ua10ikMTGTKtmIG6pbWmxfPDM6IdkJ2gTb1xs2TrUfKc8qWL3o3o9UDbeYPT1jq2t9OY8t4D1%2Fki4qcLSZ0x9bZGIyyaVgJgWZM71ezgedYxzoQfygZP84g%2FgvjU%2FG1vFypJm4LDCCeSsgwSb96IfQfJJE0qpTemevVSXBg%2BKRAzS9rKxZZBe6jZ1iluIqnOWe8%2BjKiXGKDL1OGt1KG%2BIZo%2BfQMwAGuERhscw88%2FMxAY6pgEEKcNpNAl3MGKLMl6LlonbHUKtPC8kbw1ennQyxCp3RFp6GYjsYl%2FvGKVQ7aeMqol1hiwfejXrY3UpizST%2BWXYTV%2F5bPcj5NOmbgZWjQMBE7OJfh%2BkYBsI7lIvgwlqSJ3scKmlGoZahXWSJNEdZp9qdcgRF6e8FvbbVBhjbA7TcIU1bxMYERa7tPFvwmIN%2F4J35DUYXQ9ASYF9LqfrfgmXZl5jCwRQ&X-Amz-Signature=698be0b77946630108a578d72bf6987413478237dcefd3bbbf06553ad5717162&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK57DVVO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCICJjhitrW%2BLmg4ILJ17zy1xiAbCDk3bokytHe8MzikYsAiAmFQ0%2FQeNAG2UcVrtMULZACKxoIrMSh4IxA%2FeLhqtSOir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM80MU9tS4R4EZksIjKtwDOfJpHl%2B68tWmGEmECGu5NyM5TLHxBA%2FXXTF%2BvSgNVpyoH%2Bn458SeSIo%2F4V9NFwLZvbLsh6lg4HRcdO9P2uJ0bYuzztJAgIbNFMxv7%2B1hkmsTL3rdFDmEr5lbTn1YfcvKwp58zbC%2BjX%2BVPHu6IgLwNlMsPIAuHJ7JQtwS8d4ApPM%2Baz%2BIxKr%2F9bppW%2BRDxLulNbzxyMVGHPM9LSh4im5BydORhAtxSxd4SqAaqkka28A02r1oUse%2BEIe5gR5c2QNoucUxjbLRyeV%2BepC%2FebS8SkdaQZOddcxJxSZvoBdEAgjU2YQE4Id4MNNqJcG67PbeBBnHo7ybD5KPg3Jz%2B1nuwX8fEFK3l%2F%2FDqbAqhpYzhffN3pb%2FRE3PpStWZC7qrcHhs085tRmQCLsm8e610G5kX60ua10ikMTGTKtmIG6pbWmxfPDM6IdkJ2gTb1xs2TrUfKc8qWL3o3o9UDbeYPT1jq2t9OY8t4D1%2Fki4qcLSZ0x9bZGIyyaVgJgWZM71ezgedYxzoQfygZP84g%2FgvjU%2FG1vFypJm4LDCCeSsgwSb96IfQfJJE0qpTemevVSXBg%2BKRAzS9rKxZZBe6jZ1iluIqnOWe8%2BjKiXGKDL1OGt1KG%2BIZo%2BfQMwAGuERhscw88%2FMxAY6pgEEKcNpNAl3MGKLMl6LlonbHUKtPC8kbw1ennQyxCp3RFp6GYjsYl%2FvGKVQ7aeMqol1hiwfejXrY3UpizST%2BWXYTV%2F5bPcj5NOmbgZWjQMBE7OJfh%2BkYBsI7lIvgwlqSJ3scKmlGoZahXWSJNEdZp9qdcgRF6e8FvbbVBhjbA7TcIU1bxMYERa7tPFvwmIN%2F4J35DUYXQ9ASYF9LqfrfgmXZl5jCwRQ&X-Amz-Signature=7cdb8f6053ddbd859c948438a14732e8f00cd5b8972c1308e403ecae13b83c13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK57DVVO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCICJjhitrW%2BLmg4ILJ17zy1xiAbCDk3bokytHe8MzikYsAiAmFQ0%2FQeNAG2UcVrtMULZACKxoIrMSh4IxA%2FeLhqtSOir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM80MU9tS4R4EZksIjKtwDOfJpHl%2B68tWmGEmECGu5NyM5TLHxBA%2FXXTF%2BvSgNVpyoH%2Bn458SeSIo%2F4V9NFwLZvbLsh6lg4HRcdO9P2uJ0bYuzztJAgIbNFMxv7%2B1hkmsTL3rdFDmEr5lbTn1YfcvKwp58zbC%2BjX%2BVPHu6IgLwNlMsPIAuHJ7JQtwS8d4ApPM%2Baz%2BIxKr%2F9bppW%2BRDxLulNbzxyMVGHPM9LSh4im5BydORhAtxSxd4SqAaqkka28A02r1oUse%2BEIe5gR5c2QNoucUxjbLRyeV%2BepC%2FebS8SkdaQZOddcxJxSZvoBdEAgjU2YQE4Id4MNNqJcG67PbeBBnHo7ybD5KPg3Jz%2B1nuwX8fEFK3l%2F%2FDqbAqhpYzhffN3pb%2FRE3PpStWZC7qrcHhs085tRmQCLsm8e610G5kX60ua10ikMTGTKtmIG6pbWmxfPDM6IdkJ2gTb1xs2TrUfKc8qWL3o3o9UDbeYPT1jq2t9OY8t4D1%2Fki4qcLSZ0x9bZGIyyaVgJgWZM71ezgedYxzoQfygZP84g%2FgvjU%2FG1vFypJm4LDCCeSsgwSb96IfQfJJE0qpTemevVSXBg%2BKRAzS9rKxZZBe6jZ1iluIqnOWe8%2BjKiXGKDL1OGt1KG%2BIZo%2BfQMwAGuERhscw88%2FMxAY6pgEEKcNpNAl3MGKLMl6LlonbHUKtPC8kbw1ennQyxCp3RFp6GYjsYl%2FvGKVQ7aeMqol1hiwfejXrY3UpizST%2BWXYTV%2F5bPcj5NOmbgZWjQMBE7OJfh%2BkYBsI7lIvgwlqSJ3scKmlGoZahXWSJNEdZp9qdcgRF6e8FvbbVBhjbA7TcIU1bxMYERa7tPFvwmIN%2F4J35DUYXQ9ASYF9LqfrfgmXZl5jCwRQ&X-Amz-Signature=2cd0225d1fe2acafd969d64ac69d2e99e9c878c6cc768f31a201b96b1435164e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK57DVVO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCICJjhitrW%2BLmg4ILJ17zy1xiAbCDk3bokytHe8MzikYsAiAmFQ0%2FQeNAG2UcVrtMULZACKxoIrMSh4IxA%2FeLhqtSOir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM80MU9tS4R4EZksIjKtwDOfJpHl%2B68tWmGEmECGu5NyM5TLHxBA%2FXXTF%2BvSgNVpyoH%2Bn458SeSIo%2F4V9NFwLZvbLsh6lg4HRcdO9P2uJ0bYuzztJAgIbNFMxv7%2B1hkmsTL3rdFDmEr5lbTn1YfcvKwp58zbC%2BjX%2BVPHu6IgLwNlMsPIAuHJ7JQtwS8d4ApPM%2Baz%2BIxKr%2F9bppW%2BRDxLulNbzxyMVGHPM9LSh4im5BydORhAtxSxd4SqAaqkka28A02r1oUse%2BEIe5gR5c2QNoucUxjbLRyeV%2BepC%2FebS8SkdaQZOddcxJxSZvoBdEAgjU2YQE4Id4MNNqJcG67PbeBBnHo7ybD5KPg3Jz%2B1nuwX8fEFK3l%2F%2FDqbAqhpYzhffN3pb%2FRE3PpStWZC7qrcHhs085tRmQCLsm8e610G5kX60ua10ikMTGTKtmIG6pbWmxfPDM6IdkJ2gTb1xs2TrUfKc8qWL3o3o9UDbeYPT1jq2t9OY8t4D1%2Fki4qcLSZ0x9bZGIyyaVgJgWZM71ezgedYxzoQfygZP84g%2FgvjU%2FG1vFypJm4LDCCeSsgwSb96IfQfJJE0qpTemevVSXBg%2BKRAzS9rKxZZBe6jZ1iluIqnOWe8%2BjKiXGKDL1OGt1KG%2BIZo%2BfQMwAGuERhscw88%2FMxAY6pgEEKcNpNAl3MGKLMl6LlonbHUKtPC8kbw1ennQyxCp3RFp6GYjsYl%2FvGKVQ7aeMqol1hiwfejXrY3UpizST%2BWXYTV%2F5bPcj5NOmbgZWjQMBE7OJfh%2BkYBsI7lIvgwlqSJ3scKmlGoZahXWSJNEdZp9qdcgRF6e8FvbbVBhjbA7TcIU1bxMYERa7tPFvwmIN%2F4J35DUYXQ9ASYF9LqfrfgmXZl5jCwRQ&X-Amz-Signature=b0be52cd5557075f74c139571bd5285116272ffd3369288cd9f2476c54ffea13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK57DVVO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCICJjhitrW%2BLmg4ILJ17zy1xiAbCDk3bokytHe8MzikYsAiAmFQ0%2FQeNAG2UcVrtMULZACKxoIrMSh4IxA%2FeLhqtSOir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM80MU9tS4R4EZksIjKtwDOfJpHl%2B68tWmGEmECGu5NyM5TLHxBA%2FXXTF%2BvSgNVpyoH%2Bn458SeSIo%2F4V9NFwLZvbLsh6lg4HRcdO9P2uJ0bYuzztJAgIbNFMxv7%2B1hkmsTL3rdFDmEr5lbTn1YfcvKwp58zbC%2BjX%2BVPHu6IgLwNlMsPIAuHJ7JQtwS8d4ApPM%2Baz%2BIxKr%2F9bppW%2BRDxLulNbzxyMVGHPM9LSh4im5BydORhAtxSxd4SqAaqkka28A02r1oUse%2BEIe5gR5c2QNoucUxjbLRyeV%2BepC%2FebS8SkdaQZOddcxJxSZvoBdEAgjU2YQE4Id4MNNqJcG67PbeBBnHo7ybD5KPg3Jz%2B1nuwX8fEFK3l%2F%2FDqbAqhpYzhffN3pb%2FRE3PpStWZC7qrcHhs085tRmQCLsm8e610G5kX60ua10ikMTGTKtmIG6pbWmxfPDM6IdkJ2gTb1xs2TrUfKc8qWL3o3o9UDbeYPT1jq2t9OY8t4D1%2Fki4qcLSZ0x9bZGIyyaVgJgWZM71ezgedYxzoQfygZP84g%2FgvjU%2FG1vFypJm4LDCCeSsgwSb96IfQfJJE0qpTemevVSXBg%2BKRAzS9rKxZZBe6jZ1iluIqnOWe8%2BjKiXGKDL1OGt1KG%2BIZo%2BfQMwAGuERhscw88%2FMxAY6pgEEKcNpNAl3MGKLMl6LlonbHUKtPC8kbw1ennQyxCp3RFp6GYjsYl%2FvGKVQ7aeMqol1hiwfejXrY3UpizST%2BWXYTV%2F5bPcj5NOmbgZWjQMBE7OJfh%2BkYBsI7lIvgwlqSJ3scKmlGoZahXWSJNEdZp9qdcgRF6e8FvbbVBhjbA7TcIU1bxMYERa7tPFvwmIN%2F4J35DUYXQ9ASYF9LqfrfgmXZl5jCwRQ&X-Amz-Signature=b951af6fcd9931f37d31fa8885498c8daa90aead86d99496e837dab39debf9a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK57DVVO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCICJjhitrW%2BLmg4ILJ17zy1xiAbCDk3bokytHe8MzikYsAiAmFQ0%2FQeNAG2UcVrtMULZACKxoIrMSh4IxA%2FeLhqtSOir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM80MU9tS4R4EZksIjKtwDOfJpHl%2B68tWmGEmECGu5NyM5TLHxBA%2FXXTF%2BvSgNVpyoH%2Bn458SeSIo%2F4V9NFwLZvbLsh6lg4HRcdO9P2uJ0bYuzztJAgIbNFMxv7%2B1hkmsTL3rdFDmEr5lbTn1YfcvKwp58zbC%2BjX%2BVPHu6IgLwNlMsPIAuHJ7JQtwS8d4ApPM%2Baz%2BIxKr%2F9bppW%2BRDxLulNbzxyMVGHPM9LSh4im5BydORhAtxSxd4SqAaqkka28A02r1oUse%2BEIe5gR5c2QNoucUxjbLRyeV%2BepC%2FebS8SkdaQZOddcxJxSZvoBdEAgjU2YQE4Id4MNNqJcG67PbeBBnHo7ybD5KPg3Jz%2B1nuwX8fEFK3l%2F%2FDqbAqhpYzhffN3pb%2FRE3PpStWZC7qrcHhs085tRmQCLsm8e610G5kX60ua10ikMTGTKtmIG6pbWmxfPDM6IdkJ2gTb1xs2TrUfKc8qWL3o3o9UDbeYPT1jq2t9OY8t4D1%2Fki4qcLSZ0x9bZGIyyaVgJgWZM71ezgedYxzoQfygZP84g%2FgvjU%2FG1vFypJm4LDCCeSsgwSb96IfQfJJE0qpTemevVSXBg%2BKRAzS9rKxZZBe6jZ1iluIqnOWe8%2BjKiXGKDL1OGt1KG%2BIZo%2BfQMwAGuERhscw88%2FMxAY6pgEEKcNpNAl3MGKLMl6LlonbHUKtPC8kbw1ennQyxCp3RFp6GYjsYl%2FvGKVQ7aeMqol1hiwfejXrY3UpizST%2BWXYTV%2F5bPcj5NOmbgZWjQMBE7OJfh%2BkYBsI7lIvgwlqSJ3scKmlGoZahXWSJNEdZp9qdcgRF6e8FvbbVBhjbA7TcIU1bxMYERa7tPFvwmIN%2F4J35DUYXQ9ASYF9LqfrfgmXZl5jCwRQ&X-Amz-Signature=67b8eb5fe333bddc78f41ec89eaf648d9cb8ec09f2c8d763fbf97cb9cdb92ee2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK57DVVO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCICJjhitrW%2BLmg4ILJ17zy1xiAbCDk3bokytHe8MzikYsAiAmFQ0%2FQeNAG2UcVrtMULZACKxoIrMSh4IxA%2FeLhqtSOir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM80MU9tS4R4EZksIjKtwDOfJpHl%2B68tWmGEmECGu5NyM5TLHxBA%2FXXTF%2BvSgNVpyoH%2Bn458SeSIo%2F4V9NFwLZvbLsh6lg4HRcdO9P2uJ0bYuzztJAgIbNFMxv7%2B1hkmsTL3rdFDmEr5lbTn1YfcvKwp58zbC%2BjX%2BVPHu6IgLwNlMsPIAuHJ7JQtwS8d4ApPM%2Baz%2BIxKr%2F9bppW%2BRDxLulNbzxyMVGHPM9LSh4im5BydORhAtxSxd4SqAaqkka28A02r1oUse%2BEIe5gR5c2QNoucUxjbLRyeV%2BepC%2FebS8SkdaQZOddcxJxSZvoBdEAgjU2YQE4Id4MNNqJcG67PbeBBnHo7ybD5KPg3Jz%2B1nuwX8fEFK3l%2F%2FDqbAqhpYzhffN3pb%2FRE3PpStWZC7qrcHhs085tRmQCLsm8e610G5kX60ua10ikMTGTKtmIG6pbWmxfPDM6IdkJ2gTb1xs2TrUfKc8qWL3o3o9UDbeYPT1jq2t9OY8t4D1%2Fki4qcLSZ0x9bZGIyyaVgJgWZM71ezgedYxzoQfygZP84g%2FgvjU%2FG1vFypJm4LDCCeSsgwSb96IfQfJJE0qpTemevVSXBg%2BKRAzS9rKxZZBe6jZ1iluIqnOWe8%2BjKiXGKDL1OGt1KG%2BIZo%2BfQMwAGuERhscw88%2FMxAY6pgEEKcNpNAl3MGKLMl6LlonbHUKtPC8kbw1ennQyxCp3RFp6GYjsYl%2FvGKVQ7aeMqol1hiwfejXrY3UpizST%2BWXYTV%2F5bPcj5NOmbgZWjQMBE7OJfh%2BkYBsI7lIvgwlqSJ3scKmlGoZahXWSJNEdZp9qdcgRF6e8FvbbVBhjbA7TcIU1bxMYERa7tPFvwmIN%2F4J35DUYXQ9ASYF9LqfrfgmXZl5jCwRQ&X-Amz-Signature=2dfd940c98ed4295f86fa63da84b5afee24430d5301bf941a2c39656711088e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK57DVVO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCICJjhitrW%2BLmg4ILJ17zy1xiAbCDk3bokytHe8MzikYsAiAmFQ0%2FQeNAG2UcVrtMULZACKxoIrMSh4IxA%2FeLhqtSOir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM80MU9tS4R4EZksIjKtwDOfJpHl%2B68tWmGEmECGu5NyM5TLHxBA%2FXXTF%2BvSgNVpyoH%2Bn458SeSIo%2F4V9NFwLZvbLsh6lg4HRcdO9P2uJ0bYuzztJAgIbNFMxv7%2B1hkmsTL3rdFDmEr5lbTn1YfcvKwp58zbC%2BjX%2BVPHu6IgLwNlMsPIAuHJ7JQtwS8d4ApPM%2Baz%2BIxKr%2F9bppW%2BRDxLulNbzxyMVGHPM9LSh4im5BydORhAtxSxd4SqAaqkka28A02r1oUse%2BEIe5gR5c2QNoucUxjbLRyeV%2BepC%2FebS8SkdaQZOddcxJxSZvoBdEAgjU2YQE4Id4MNNqJcG67PbeBBnHo7ybD5KPg3Jz%2B1nuwX8fEFK3l%2F%2FDqbAqhpYzhffN3pb%2FRE3PpStWZC7qrcHhs085tRmQCLsm8e610G5kX60ua10ikMTGTKtmIG6pbWmxfPDM6IdkJ2gTb1xs2TrUfKc8qWL3o3o9UDbeYPT1jq2t9OY8t4D1%2Fki4qcLSZ0x9bZGIyyaVgJgWZM71ezgedYxzoQfygZP84g%2FgvjU%2FG1vFypJm4LDCCeSsgwSb96IfQfJJE0qpTemevVSXBg%2BKRAzS9rKxZZBe6jZ1iluIqnOWe8%2BjKiXGKDL1OGt1KG%2BIZo%2BfQMwAGuERhscw88%2FMxAY6pgEEKcNpNAl3MGKLMl6LlonbHUKtPC8kbw1ennQyxCp3RFp6GYjsYl%2FvGKVQ7aeMqol1hiwfejXrY3UpizST%2BWXYTV%2F5bPcj5NOmbgZWjQMBE7OJfh%2BkYBsI7lIvgwlqSJ3scKmlGoZahXWSJNEdZp9qdcgRF6e8FvbbVBhjbA7TcIU1bxMYERa7tPFvwmIN%2F4J35DUYXQ9ASYF9LqfrfgmXZl5jCwRQ&X-Amz-Signature=c5c7979efcaebcf0d1dc4a8052e6f8a768c36b5c34eff86f60e46bb39fbd4e67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK57DVVO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCICJjhitrW%2BLmg4ILJ17zy1xiAbCDk3bokytHe8MzikYsAiAmFQ0%2FQeNAG2UcVrtMULZACKxoIrMSh4IxA%2FeLhqtSOir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM80MU9tS4R4EZksIjKtwDOfJpHl%2B68tWmGEmECGu5NyM5TLHxBA%2FXXTF%2BvSgNVpyoH%2Bn458SeSIo%2F4V9NFwLZvbLsh6lg4HRcdO9P2uJ0bYuzztJAgIbNFMxv7%2B1hkmsTL3rdFDmEr5lbTn1YfcvKwp58zbC%2BjX%2BVPHu6IgLwNlMsPIAuHJ7JQtwS8d4ApPM%2Baz%2BIxKr%2F9bppW%2BRDxLulNbzxyMVGHPM9LSh4im5BydORhAtxSxd4SqAaqkka28A02r1oUse%2BEIe5gR5c2QNoucUxjbLRyeV%2BepC%2FebS8SkdaQZOddcxJxSZvoBdEAgjU2YQE4Id4MNNqJcG67PbeBBnHo7ybD5KPg3Jz%2B1nuwX8fEFK3l%2F%2FDqbAqhpYzhffN3pb%2FRE3PpStWZC7qrcHhs085tRmQCLsm8e610G5kX60ua10ikMTGTKtmIG6pbWmxfPDM6IdkJ2gTb1xs2TrUfKc8qWL3o3o9UDbeYPT1jq2t9OY8t4D1%2Fki4qcLSZ0x9bZGIyyaVgJgWZM71ezgedYxzoQfygZP84g%2FgvjU%2FG1vFypJm4LDCCeSsgwSb96IfQfJJE0qpTemevVSXBg%2BKRAzS9rKxZZBe6jZ1iluIqnOWe8%2BjKiXGKDL1OGt1KG%2BIZo%2BfQMwAGuERhscw88%2FMxAY6pgEEKcNpNAl3MGKLMl6LlonbHUKtPC8kbw1ennQyxCp3RFp6GYjsYl%2FvGKVQ7aeMqol1hiwfejXrY3UpizST%2BWXYTV%2F5bPcj5NOmbgZWjQMBE7OJfh%2BkYBsI7lIvgwlqSJ3scKmlGoZahXWSJNEdZp9qdcgRF6e8FvbbVBhjbA7TcIU1bxMYERa7tPFvwmIN%2F4J35DUYXQ9ASYF9LqfrfgmXZl5jCwRQ&X-Amz-Signature=2afc3341be58a105b4347cc69a52ec6e55a6f87264bd64bb8fec43edb84e9284&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK57DVVO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCICJjhitrW%2BLmg4ILJ17zy1xiAbCDk3bokytHe8MzikYsAiAmFQ0%2FQeNAG2UcVrtMULZACKxoIrMSh4IxA%2FeLhqtSOir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM80MU9tS4R4EZksIjKtwDOfJpHl%2B68tWmGEmECGu5NyM5TLHxBA%2FXXTF%2BvSgNVpyoH%2Bn458SeSIo%2F4V9NFwLZvbLsh6lg4HRcdO9P2uJ0bYuzztJAgIbNFMxv7%2B1hkmsTL3rdFDmEr5lbTn1YfcvKwp58zbC%2BjX%2BVPHu6IgLwNlMsPIAuHJ7JQtwS8d4ApPM%2Baz%2BIxKr%2F9bppW%2BRDxLulNbzxyMVGHPM9LSh4im5BydORhAtxSxd4SqAaqkka28A02r1oUse%2BEIe5gR5c2QNoucUxjbLRyeV%2BepC%2FebS8SkdaQZOddcxJxSZvoBdEAgjU2YQE4Id4MNNqJcG67PbeBBnHo7ybD5KPg3Jz%2B1nuwX8fEFK3l%2F%2FDqbAqhpYzhffN3pb%2FRE3PpStWZC7qrcHhs085tRmQCLsm8e610G5kX60ua10ikMTGTKtmIG6pbWmxfPDM6IdkJ2gTb1xs2TrUfKc8qWL3o3o9UDbeYPT1jq2t9OY8t4D1%2Fki4qcLSZ0x9bZGIyyaVgJgWZM71ezgedYxzoQfygZP84g%2FgvjU%2FG1vFypJm4LDCCeSsgwSb96IfQfJJE0qpTemevVSXBg%2BKRAzS9rKxZZBe6jZ1iluIqnOWe8%2BjKiXGKDL1OGt1KG%2BIZo%2BfQMwAGuERhscw88%2FMxAY6pgEEKcNpNAl3MGKLMl6LlonbHUKtPC8kbw1ennQyxCp3RFp6GYjsYl%2FvGKVQ7aeMqol1hiwfejXrY3UpizST%2BWXYTV%2F5bPcj5NOmbgZWjQMBE7OJfh%2BkYBsI7lIvgwlqSJ3scKmlGoZahXWSJNEdZp9qdcgRF6e8FvbbVBhjbA7TcIU1bxMYERa7tPFvwmIN%2F4J35DUYXQ9ASYF9LqfrfgmXZl5jCwRQ&X-Amz-Signature=1af2179e260462107924d2ad14be3d866463ba1215dc24a8b64daf9729282709&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK57DVVO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCICJjhitrW%2BLmg4ILJ17zy1xiAbCDk3bokytHe8MzikYsAiAmFQ0%2FQeNAG2UcVrtMULZACKxoIrMSh4IxA%2FeLhqtSOir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM80MU9tS4R4EZksIjKtwDOfJpHl%2B68tWmGEmECGu5NyM5TLHxBA%2FXXTF%2BvSgNVpyoH%2Bn458SeSIo%2F4V9NFwLZvbLsh6lg4HRcdO9P2uJ0bYuzztJAgIbNFMxv7%2B1hkmsTL3rdFDmEr5lbTn1YfcvKwp58zbC%2BjX%2BVPHu6IgLwNlMsPIAuHJ7JQtwS8d4ApPM%2Baz%2BIxKr%2F9bppW%2BRDxLulNbzxyMVGHPM9LSh4im5BydORhAtxSxd4SqAaqkka28A02r1oUse%2BEIe5gR5c2QNoucUxjbLRyeV%2BepC%2FebS8SkdaQZOddcxJxSZvoBdEAgjU2YQE4Id4MNNqJcG67PbeBBnHo7ybD5KPg3Jz%2B1nuwX8fEFK3l%2F%2FDqbAqhpYzhffN3pb%2FRE3PpStWZC7qrcHhs085tRmQCLsm8e610G5kX60ua10ikMTGTKtmIG6pbWmxfPDM6IdkJ2gTb1xs2TrUfKc8qWL3o3o9UDbeYPT1jq2t9OY8t4D1%2Fki4qcLSZ0x9bZGIyyaVgJgWZM71ezgedYxzoQfygZP84g%2FgvjU%2FG1vFypJm4LDCCeSsgwSb96IfQfJJE0qpTemevVSXBg%2BKRAzS9rKxZZBe6jZ1iluIqnOWe8%2BjKiXGKDL1OGt1KG%2BIZo%2BfQMwAGuERhscw88%2FMxAY6pgEEKcNpNAl3MGKLMl6LlonbHUKtPC8kbw1ennQyxCp3RFp6GYjsYl%2FvGKVQ7aeMqol1hiwfejXrY3UpizST%2BWXYTV%2F5bPcj5NOmbgZWjQMBE7OJfh%2BkYBsI7lIvgwlqSJ3scKmlGoZahXWSJNEdZp9qdcgRF6e8FvbbVBhjbA7TcIU1bxMYERa7tPFvwmIN%2F4J35DUYXQ9ASYF9LqfrfgmXZl5jCwRQ&X-Amz-Signature=0cde79e7836e7da235aa85df13331ebaca0c5c7563649cc5c086034d72f251f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK57DVVO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCICJjhitrW%2BLmg4ILJ17zy1xiAbCDk3bokytHe8MzikYsAiAmFQ0%2FQeNAG2UcVrtMULZACKxoIrMSh4IxA%2FeLhqtSOir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM80MU9tS4R4EZksIjKtwDOfJpHl%2B68tWmGEmECGu5NyM5TLHxBA%2FXXTF%2BvSgNVpyoH%2Bn458SeSIo%2F4V9NFwLZvbLsh6lg4HRcdO9P2uJ0bYuzztJAgIbNFMxv7%2B1hkmsTL3rdFDmEr5lbTn1YfcvKwp58zbC%2BjX%2BVPHu6IgLwNlMsPIAuHJ7JQtwS8d4ApPM%2Baz%2BIxKr%2F9bppW%2BRDxLulNbzxyMVGHPM9LSh4im5BydORhAtxSxd4SqAaqkka28A02r1oUse%2BEIe5gR5c2QNoucUxjbLRyeV%2BepC%2FebS8SkdaQZOddcxJxSZvoBdEAgjU2YQE4Id4MNNqJcG67PbeBBnHo7ybD5KPg3Jz%2B1nuwX8fEFK3l%2F%2FDqbAqhpYzhffN3pb%2FRE3PpStWZC7qrcHhs085tRmQCLsm8e610G5kX60ua10ikMTGTKtmIG6pbWmxfPDM6IdkJ2gTb1xs2TrUfKc8qWL3o3o9UDbeYPT1jq2t9OY8t4D1%2Fki4qcLSZ0x9bZGIyyaVgJgWZM71ezgedYxzoQfygZP84g%2FgvjU%2FG1vFypJm4LDCCeSsgwSb96IfQfJJE0qpTemevVSXBg%2BKRAzS9rKxZZBe6jZ1iluIqnOWe8%2BjKiXGKDL1OGt1KG%2BIZo%2BfQMwAGuERhscw88%2FMxAY6pgEEKcNpNAl3MGKLMl6LlonbHUKtPC8kbw1ennQyxCp3RFp6GYjsYl%2FvGKVQ7aeMqol1hiwfejXrY3UpizST%2BWXYTV%2F5bPcj5NOmbgZWjQMBE7OJfh%2BkYBsI7lIvgwlqSJ3scKmlGoZahXWSJNEdZp9qdcgRF6e8FvbbVBhjbA7TcIU1bxMYERa7tPFvwmIN%2F4J35DUYXQ9ASYF9LqfrfgmXZl5jCwRQ&X-Amz-Signature=7f3cebdec2ce3d9a02f7b580f99e4aac6e2020d02d364947bd125270bd53adcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK57DVVO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCICJjhitrW%2BLmg4ILJ17zy1xiAbCDk3bokytHe8MzikYsAiAmFQ0%2FQeNAG2UcVrtMULZACKxoIrMSh4IxA%2FeLhqtSOir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM80MU9tS4R4EZksIjKtwDOfJpHl%2B68tWmGEmECGu5NyM5TLHxBA%2FXXTF%2BvSgNVpyoH%2Bn458SeSIo%2F4V9NFwLZvbLsh6lg4HRcdO9P2uJ0bYuzztJAgIbNFMxv7%2B1hkmsTL3rdFDmEr5lbTn1YfcvKwp58zbC%2BjX%2BVPHu6IgLwNlMsPIAuHJ7JQtwS8d4ApPM%2Baz%2BIxKr%2F9bppW%2BRDxLulNbzxyMVGHPM9LSh4im5BydORhAtxSxd4SqAaqkka28A02r1oUse%2BEIe5gR5c2QNoucUxjbLRyeV%2BepC%2FebS8SkdaQZOddcxJxSZvoBdEAgjU2YQE4Id4MNNqJcG67PbeBBnHo7ybD5KPg3Jz%2B1nuwX8fEFK3l%2F%2FDqbAqhpYzhffN3pb%2FRE3PpStWZC7qrcHhs085tRmQCLsm8e610G5kX60ua10ikMTGTKtmIG6pbWmxfPDM6IdkJ2gTb1xs2TrUfKc8qWL3o3o9UDbeYPT1jq2t9OY8t4D1%2Fki4qcLSZ0x9bZGIyyaVgJgWZM71ezgedYxzoQfygZP84g%2FgvjU%2FG1vFypJm4LDCCeSsgwSb96IfQfJJE0qpTemevVSXBg%2BKRAzS9rKxZZBe6jZ1iluIqnOWe8%2BjKiXGKDL1OGt1KG%2BIZo%2BfQMwAGuERhscw88%2FMxAY6pgEEKcNpNAl3MGKLMl6LlonbHUKtPC8kbw1ennQyxCp3RFp6GYjsYl%2FvGKVQ7aeMqol1hiwfejXrY3UpizST%2BWXYTV%2F5bPcj5NOmbgZWjQMBE7OJfh%2BkYBsI7lIvgwlqSJ3scKmlGoZahXWSJNEdZp9qdcgRF6e8FvbbVBhjbA7TcIU1bxMYERa7tPFvwmIN%2F4J35DUYXQ9ASYF9LqfrfgmXZl5jCwRQ&X-Amz-Signature=2b49d39ffa5444fc31e9b960eb2655dba0e8383f93895994a68c8507308df169&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
