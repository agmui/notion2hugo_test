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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KAESVIJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX9tEvSWwcXnAeLmp10ICzne8LfJeJkmpNsscUclMsFQIhAIJWzMgUcJZ7G6KRaOj%2FITP2m9DhHEm%2F7Q7b1quCBbC9Kv8DCCQQABoMNjM3NDIzMTgzODA1IgxZlnaPq9DGTa0%2F1eAq3AMVV1eUwNOUlwUaMVEQ%2BmurTthyABT8r7iMT5myNaDdjTGkDy4YEtZ%2B8zGjBE3F%2BjFvQDjAIjtWwf7IQLO68j001fiTpYfgxEaYATkyrseTrd%2BLj9DKj%2BIfZJVM1%2BGci6lNYPVSeHWPYjPhmbS03tBwuQKklN6tFVDSJLli2akB9B0QFlel1stGdcDowVFlKIOnyWMHSRceImfQqgnxzHtUGstO5axzLDnVTXM0xmoe6tadtf4mva55uFLUd9Fr7rJRv8hZsfEbFCvtpO7sbjUWCGC7Kp6V2Kla6voPltqyRbYvAacDWOCJXF6y%2FqwRSVJfYm6WfOPcxrUkvCViOQmE7p%2FwUHUDg95hvPwv6%2F%2FAiIwIrqe%2BlQMMn7ZcWgBeBUy2A7Yy5gN1LhCNv2EaRnhDfYurzIzKdjEtZ1G2EdX3TBXsud%2BFYYG0nr2joSTEuFwyKpRWCNhhD80IWv3YMIkIlh53HNV92aAcDw5B6pHoiTn6SewD0w%2BbpxJ6W%2BJwEdP5LzP0quk6aZXKqbk9eFkVDBLoG6hfumhkgY9TOi6qNehg7%2F4wNaipDNG3Ab4NMYaxwomkrFLcgxn1aEQyIN5m%2BNKgj8QjvWEC7LvuXKn%2BopWGRWc3ij424WS59jD5o7vEBjqkAR1AnDLrKuh76IsBdbycqc1W8BMiK3O6jCGnEUrAaXGN%2B6TW0uqijT6qomnNu%2FtNycB%2BjhgGWS36NcJSkm84Bc6x9Z7O9kiY2XBwtX%2Fl0RbE23B2sQG8%2FiLsp5DOZD8VYIisf3VLXWLB4jQRmIod1ta5M3lcHi8MEZ20OfZBnhwVRwnIExWP2VvdggtWwiQYtR1zGo%2BvRgTmBAIMtlKt3ETyHzlP&X-Amz-Signature=cd2034ea63e71907e8570cbfb56515b0a968ab3dc1e8114871f66d5053529083&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KAESVIJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX9tEvSWwcXnAeLmp10ICzne8LfJeJkmpNsscUclMsFQIhAIJWzMgUcJZ7G6KRaOj%2FITP2m9DhHEm%2F7Q7b1quCBbC9Kv8DCCQQABoMNjM3NDIzMTgzODA1IgxZlnaPq9DGTa0%2F1eAq3AMVV1eUwNOUlwUaMVEQ%2BmurTthyABT8r7iMT5myNaDdjTGkDy4YEtZ%2B8zGjBE3F%2BjFvQDjAIjtWwf7IQLO68j001fiTpYfgxEaYATkyrseTrd%2BLj9DKj%2BIfZJVM1%2BGci6lNYPVSeHWPYjPhmbS03tBwuQKklN6tFVDSJLli2akB9B0QFlel1stGdcDowVFlKIOnyWMHSRceImfQqgnxzHtUGstO5axzLDnVTXM0xmoe6tadtf4mva55uFLUd9Fr7rJRv8hZsfEbFCvtpO7sbjUWCGC7Kp6V2Kla6voPltqyRbYvAacDWOCJXF6y%2FqwRSVJfYm6WfOPcxrUkvCViOQmE7p%2FwUHUDg95hvPwv6%2F%2FAiIwIrqe%2BlQMMn7ZcWgBeBUy2A7Yy5gN1LhCNv2EaRnhDfYurzIzKdjEtZ1G2EdX3TBXsud%2BFYYG0nr2joSTEuFwyKpRWCNhhD80IWv3YMIkIlh53HNV92aAcDw5B6pHoiTn6SewD0w%2BbpxJ6W%2BJwEdP5LzP0quk6aZXKqbk9eFkVDBLoG6hfumhkgY9TOi6qNehg7%2F4wNaipDNG3Ab4NMYaxwomkrFLcgxn1aEQyIN5m%2BNKgj8QjvWEC7LvuXKn%2BopWGRWc3ij424WS59jD5o7vEBjqkAR1AnDLrKuh76IsBdbycqc1W8BMiK3O6jCGnEUrAaXGN%2B6TW0uqijT6qomnNu%2FtNycB%2BjhgGWS36NcJSkm84Bc6x9Z7O9kiY2XBwtX%2Fl0RbE23B2sQG8%2FiLsp5DOZD8VYIisf3VLXWLB4jQRmIod1ta5M3lcHi8MEZ20OfZBnhwVRwnIExWP2VvdggtWwiQYtR1zGo%2BvRgTmBAIMtlKt3ETyHzlP&X-Amz-Signature=ffdf993fbd10848d3555b6ee0feb2190e62640e130cba37a5c50b289dd4bcb29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KAESVIJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX9tEvSWwcXnAeLmp10ICzne8LfJeJkmpNsscUclMsFQIhAIJWzMgUcJZ7G6KRaOj%2FITP2m9DhHEm%2F7Q7b1quCBbC9Kv8DCCQQABoMNjM3NDIzMTgzODA1IgxZlnaPq9DGTa0%2F1eAq3AMVV1eUwNOUlwUaMVEQ%2BmurTthyABT8r7iMT5myNaDdjTGkDy4YEtZ%2B8zGjBE3F%2BjFvQDjAIjtWwf7IQLO68j001fiTpYfgxEaYATkyrseTrd%2BLj9DKj%2BIfZJVM1%2BGci6lNYPVSeHWPYjPhmbS03tBwuQKklN6tFVDSJLli2akB9B0QFlel1stGdcDowVFlKIOnyWMHSRceImfQqgnxzHtUGstO5axzLDnVTXM0xmoe6tadtf4mva55uFLUd9Fr7rJRv8hZsfEbFCvtpO7sbjUWCGC7Kp6V2Kla6voPltqyRbYvAacDWOCJXF6y%2FqwRSVJfYm6WfOPcxrUkvCViOQmE7p%2FwUHUDg95hvPwv6%2F%2FAiIwIrqe%2BlQMMn7ZcWgBeBUy2A7Yy5gN1LhCNv2EaRnhDfYurzIzKdjEtZ1G2EdX3TBXsud%2BFYYG0nr2joSTEuFwyKpRWCNhhD80IWv3YMIkIlh53HNV92aAcDw5B6pHoiTn6SewD0w%2BbpxJ6W%2BJwEdP5LzP0quk6aZXKqbk9eFkVDBLoG6hfumhkgY9TOi6qNehg7%2F4wNaipDNG3Ab4NMYaxwomkrFLcgxn1aEQyIN5m%2BNKgj8QjvWEC7LvuXKn%2BopWGRWc3ij424WS59jD5o7vEBjqkAR1AnDLrKuh76IsBdbycqc1W8BMiK3O6jCGnEUrAaXGN%2B6TW0uqijT6qomnNu%2FtNycB%2BjhgGWS36NcJSkm84Bc6x9Z7O9kiY2XBwtX%2Fl0RbE23B2sQG8%2FiLsp5DOZD8VYIisf3VLXWLB4jQRmIod1ta5M3lcHi8MEZ20OfZBnhwVRwnIExWP2VvdggtWwiQYtR1zGo%2BvRgTmBAIMtlKt3ETyHzlP&X-Amz-Signature=f934512290bca260dd974fcf2c08eecb2d782616745b7ce9a76b80bfe9577622&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KAESVIJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX9tEvSWwcXnAeLmp10ICzne8LfJeJkmpNsscUclMsFQIhAIJWzMgUcJZ7G6KRaOj%2FITP2m9DhHEm%2F7Q7b1quCBbC9Kv8DCCQQABoMNjM3NDIzMTgzODA1IgxZlnaPq9DGTa0%2F1eAq3AMVV1eUwNOUlwUaMVEQ%2BmurTthyABT8r7iMT5myNaDdjTGkDy4YEtZ%2B8zGjBE3F%2BjFvQDjAIjtWwf7IQLO68j001fiTpYfgxEaYATkyrseTrd%2BLj9DKj%2BIfZJVM1%2BGci6lNYPVSeHWPYjPhmbS03tBwuQKklN6tFVDSJLli2akB9B0QFlel1stGdcDowVFlKIOnyWMHSRceImfQqgnxzHtUGstO5axzLDnVTXM0xmoe6tadtf4mva55uFLUd9Fr7rJRv8hZsfEbFCvtpO7sbjUWCGC7Kp6V2Kla6voPltqyRbYvAacDWOCJXF6y%2FqwRSVJfYm6WfOPcxrUkvCViOQmE7p%2FwUHUDg95hvPwv6%2F%2FAiIwIrqe%2BlQMMn7ZcWgBeBUy2A7Yy5gN1LhCNv2EaRnhDfYurzIzKdjEtZ1G2EdX3TBXsud%2BFYYG0nr2joSTEuFwyKpRWCNhhD80IWv3YMIkIlh53HNV92aAcDw5B6pHoiTn6SewD0w%2BbpxJ6W%2BJwEdP5LzP0quk6aZXKqbk9eFkVDBLoG6hfumhkgY9TOi6qNehg7%2F4wNaipDNG3Ab4NMYaxwomkrFLcgxn1aEQyIN5m%2BNKgj8QjvWEC7LvuXKn%2BopWGRWc3ij424WS59jD5o7vEBjqkAR1AnDLrKuh76IsBdbycqc1W8BMiK3O6jCGnEUrAaXGN%2B6TW0uqijT6qomnNu%2FtNycB%2BjhgGWS36NcJSkm84Bc6x9Z7O9kiY2XBwtX%2Fl0RbE23B2sQG8%2FiLsp5DOZD8VYIisf3VLXWLB4jQRmIod1ta5M3lcHi8MEZ20OfZBnhwVRwnIExWP2VvdggtWwiQYtR1zGo%2BvRgTmBAIMtlKt3ETyHzlP&X-Amz-Signature=ec293b3b1170c5b8d595fd11d40a55abf97affa368a04bf7eab98aa68e91c45a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KAESVIJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX9tEvSWwcXnAeLmp10ICzne8LfJeJkmpNsscUclMsFQIhAIJWzMgUcJZ7G6KRaOj%2FITP2m9DhHEm%2F7Q7b1quCBbC9Kv8DCCQQABoMNjM3NDIzMTgzODA1IgxZlnaPq9DGTa0%2F1eAq3AMVV1eUwNOUlwUaMVEQ%2BmurTthyABT8r7iMT5myNaDdjTGkDy4YEtZ%2B8zGjBE3F%2BjFvQDjAIjtWwf7IQLO68j001fiTpYfgxEaYATkyrseTrd%2BLj9DKj%2BIfZJVM1%2BGci6lNYPVSeHWPYjPhmbS03tBwuQKklN6tFVDSJLli2akB9B0QFlel1stGdcDowVFlKIOnyWMHSRceImfQqgnxzHtUGstO5axzLDnVTXM0xmoe6tadtf4mva55uFLUd9Fr7rJRv8hZsfEbFCvtpO7sbjUWCGC7Kp6V2Kla6voPltqyRbYvAacDWOCJXF6y%2FqwRSVJfYm6WfOPcxrUkvCViOQmE7p%2FwUHUDg95hvPwv6%2F%2FAiIwIrqe%2BlQMMn7ZcWgBeBUy2A7Yy5gN1LhCNv2EaRnhDfYurzIzKdjEtZ1G2EdX3TBXsud%2BFYYG0nr2joSTEuFwyKpRWCNhhD80IWv3YMIkIlh53HNV92aAcDw5B6pHoiTn6SewD0w%2BbpxJ6W%2BJwEdP5LzP0quk6aZXKqbk9eFkVDBLoG6hfumhkgY9TOi6qNehg7%2F4wNaipDNG3Ab4NMYaxwomkrFLcgxn1aEQyIN5m%2BNKgj8QjvWEC7LvuXKn%2BopWGRWc3ij424WS59jD5o7vEBjqkAR1AnDLrKuh76IsBdbycqc1W8BMiK3O6jCGnEUrAaXGN%2B6TW0uqijT6qomnNu%2FtNycB%2BjhgGWS36NcJSkm84Bc6x9Z7O9kiY2XBwtX%2Fl0RbE23B2sQG8%2FiLsp5DOZD8VYIisf3VLXWLB4jQRmIod1ta5M3lcHi8MEZ20OfZBnhwVRwnIExWP2VvdggtWwiQYtR1zGo%2BvRgTmBAIMtlKt3ETyHzlP&X-Amz-Signature=6555f14d42c6d9efd8ec862f16445756a4380535b51a82b89cdf5c24252e3487&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KAESVIJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX9tEvSWwcXnAeLmp10ICzne8LfJeJkmpNsscUclMsFQIhAIJWzMgUcJZ7G6KRaOj%2FITP2m9DhHEm%2F7Q7b1quCBbC9Kv8DCCQQABoMNjM3NDIzMTgzODA1IgxZlnaPq9DGTa0%2F1eAq3AMVV1eUwNOUlwUaMVEQ%2BmurTthyABT8r7iMT5myNaDdjTGkDy4YEtZ%2B8zGjBE3F%2BjFvQDjAIjtWwf7IQLO68j001fiTpYfgxEaYATkyrseTrd%2BLj9DKj%2BIfZJVM1%2BGci6lNYPVSeHWPYjPhmbS03tBwuQKklN6tFVDSJLli2akB9B0QFlel1stGdcDowVFlKIOnyWMHSRceImfQqgnxzHtUGstO5axzLDnVTXM0xmoe6tadtf4mva55uFLUd9Fr7rJRv8hZsfEbFCvtpO7sbjUWCGC7Kp6V2Kla6voPltqyRbYvAacDWOCJXF6y%2FqwRSVJfYm6WfOPcxrUkvCViOQmE7p%2FwUHUDg95hvPwv6%2F%2FAiIwIrqe%2BlQMMn7ZcWgBeBUy2A7Yy5gN1LhCNv2EaRnhDfYurzIzKdjEtZ1G2EdX3TBXsud%2BFYYG0nr2joSTEuFwyKpRWCNhhD80IWv3YMIkIlh53HNV92aAcDw5B6pHoiTn6SewD0w%2BbpxJ6W%2BJwEdP5LzP0quk6aZXKqbk9eFkVDBLoG6hfumhkgY9TOi6qNehg7%2F4wNaipDNG3Ab4NMYaxwomkrFLcgxn1aEQyIN5m%2BNKgj8QjvWEC7LvuXKn%2BopWGRWc3ij424WS59jD5o7vEBjqkAR1AnDLrKuh76IsBdbycqc1W8BMiK3O6jCGnEUrAaXGN%2B6TW0uqijT6qomnNu%2FtNycB%2BjhgGWS36NcJSkm84Bc6x9Z7O9kiY2XBwtX%2Fl0RbE23B2sQG8%2FiLsp5DOZD8VYIisf3VLXWLB4jQRmIod1ta5M3lcHi8MEZ20OfZBnhwVRwnIExWP2VvdggtWwiQYtR1zGo%2BvRgTmBAIMtlKt3ETyHzlP&X-Amz-Signature=a9cdf508cfedbcf36c22fd13b3701c881a2ee597a965609824d939e28dccb726&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KAESVIJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX9tEvSWwcXnAeLmp10ICzne8LfJeJkmpNsscUclMsFQIhAIJWzMgUcJZ7G6KRaOj%2FITP2m9DhHEm%2F7Q7b1quCBbC9Kv8DCCQQABoMNjM3NDIzMTgzODA1IgxZlnaPq9DGTa0%2F1eAq3AMVV1eUwNOUlwUaMVEQ%2BmurTthyABT8r7iMT5myNaDdjTGkDy4YEtZ%2B8zGjBE3F%2BjFvQDjAIjtWwf7IQLO68j001fiTpYfgxEaYATkyrseTrd%2BLj9DKj%2BIfZJVM1%2BGci6lNYPVSeHWPYjPhmbS03tBwuQKklN6tFVDSJLli2akB9B0QFlel1stGdcDowVFlKIOnyWMHSRceImfQqgnxzHtUGstO5axzLDnVTXM0xmoe6tadtf4mva55uFLUd9Fr7rJRv8hZsfEbFCvtpO7sbjUWCGC7Kp6V2Kla6voPltqyRbYvAacDWOCJXF6y%2FqwRSVJfYm6WfOPcxrUkvCViOQmE7p%2FwUHUDg95hvPwv6%2F%2FAiIwIrqe%2BlQMMn7ZcWgBeBUy2A7Yy5gN1LhCNv2EaRnhDfYurzIzKdjEtZ1G2EdX3TBXsud%2BFYYG0nr2joSTEuFwyKpRWCNhhD80IWv3YMIkIlh53HNV92aAcDw5B6pHoiTn6SewD0w%2BbpxJ6W%2BJwEdP5LzP0quk6aZXKqbk9eFkVDBLoG6hfumhkgY9TOi6qNehg7%2F4wNaipDNG3Ab4NMYaxwomkrFLcgxn1aEQyIN5m%2BNKgj8QjvWEC7LvuXKn%2BopWGRWc3ij424WS59jD5o7vEBjqkAR1AnDLrKuh76IsBdbycqc1W8BMiK3O6jCGnEUrAaXGN%2B6TW0uqijT6qomnNu%2FtNycB%2BjhgGWS36NcJSkm84Bc6x9Z7O9kiY2XBwtX%2Fl0RbE23B2sQG8%2FiLsp5DOZD8VYIisf3VLXWLB4jQRmIod1ta5M3lcHi8MEZ20OfZBnhwVRwnIExWP2VvdggtWwiQYtR1zGo%2BvRgTmBAIMtlKt3ETyHzlP&X-Amz-Signature=011402bcb47e990d70cd68245e5de068d3009b779353c3f427d92ec0b3aeb028&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KAESVIJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX9tEvSWwcXnAeLmp10ICzne8LfJeJkmpNsscUclMsFQIhAIJWzMgUcJZ7G6KRaOj%2FITP2m9DhHEm%2F7Q7b1quCBbC9Kv8DCCQQABoMNjM3NDIzMTgzODA1IgxZlnaPq9DGTa0%2F1eAq3AMVV1eUwNOUlwUaMVEQ%2BmurTthyABT8r7iMT5myNaDdjTGkDy4YEtZ%2B8zGjBE3F%2BjFvQDjAIjtWwf7IQLO68j001fiTpYfgxEaYATkyrseTrd%2BLj9DKj%2BIfZJVM1%2BGci6lNYPVSeHWPYjPhmbS03tBwuQKklN6tFVDSJLli2akB9B0QFlel1stGdcDowVFlKIOnyWMHSRceImfQqgnxzHtUGstO5axzLDnVTXM0xmoe6tadtf4mva55uFLUd9Fr7rJRv8hZsfEbFCvtpO7sbjUWCGC7Kp6V2Kla6voPltqyRbYvAacDWOCJXF6y%2FqwRSVJfYm6WfOPcxrUkvCViOQmE7p%2FwUHUDg95hvPwv6%2F%2FAiIwIrqe%2BlQMMn7ZcWgBeBUy2A7Yy5gN1LhCNv2EaRnhDfYurzIzKdjEtZ1G2EdX3TBXsud%2BFYYG0nr2joSTEuFwyKpRWCNhhD80IWv3YMIkIlh53HNV92aAcDw5B6pHoiTn6SewD0w%2BbpxJ6W%2BJwEdP5LzP0quk6aZXKqbk9eFkVDBLoG6hfumhkgY9TOi6qNehg7%2F4wNaipDNG3Ab4NMYaxwomkrFLcgxn1aEQyIN5m%2BNKgj8QjvWEC7LvuXKn%2BopWGRWc3ij424WS59jD5o7vEBjqkAR1AnDLrKuh76IsBdbycqc1W8BMiK3O6jCGnEUrAaXGN%2B6TW0uqijT6qomnNu%2FtNycB%2BjhgGWS36NcJSkm84Bc6x9Z7O9kiY2XBwtX%2Fl0RbE23B2sQG8%2FiLsp5DOZD8VYIisf3VLXWLB4jQRmIod1ta5M3lcHi8MEZ20OfZBnhwVRwnIExWP2VvdggtWwiQYtR1zGo%2BvRgTmBAIMtlKt3ETyHzlP&X-Amz-Signature=b7296fc8b6b93de432800b330a5339bed07d93f6a33d6aee8464b34f2551f8a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KAESVIJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX9tEvSWwcXnAeLmp10ICzne8LfJeJkmpNsscUclMsFQIhAIJWzMgUcJZ7G6KRaOj%2FITP2m9DhHEm%2F7Q7b1quCBbC9Kv8DCCQQABoMNjM3NDIzMTgzODA1IgxZlnaPq9DGTa0%2F1eAq3AMVV1eUwNOUlwUaMVEQ%2BmurTthyABT8r7iMT5myNaDdjTGkDy4YEtZ%2B8zGjBE3F%2BjFvQDjAIjtWwf7IQLO68j001fiTpYfgxEaYATkyrseTrd%2BLj9DKj%2BIfZJVM1%2BGci6lNYPVSeHWPYjPhmbS03tBwuQKklN6tFVDSJLli2akB9B0QFlel1stGdcDowVFlKIOnyWMHSRceImfQqgnxzHtUGstO5axzLDnVTXM0xmoe6tadtf4mva55uFLUd9Fr7rJRv8hZsfEbFCvtpO7sbjUWCGC7Kp6V2Kla6voPltqyRbYvAacDWOCJXF6y%2FqwRSVJfYm6WfOPcxrUkvCViOQmE7p%2FwUHUDg95hvPwv6%2F%2FAiIwIrqe%2BlQMMn7ZcWgBeBUy2A7Yy5gN1LhCNv2EaRnhDfYurzIzKdjEtZ1G2EdX3TBXsud%2BFYYG0nr2joSTEuFwyKpRWCNhhD80IWv3YMIkIlh53HNV92aAcDw5B6pHoiTn6SewD0w%2BbpxJ6W%2BJwEdP5LzP0quk6aZXKqbk9eFkVDBLoG6hfumhkgY9TOi6qNehg7%2F4wNaipDNG3Ab4NMYaxwomkrFLcgxn1aEQyIN5m%2BNKgj8QjvWEC7LvuXKn%2BopWGRWc3ij424WS59jD5o7vEBjqkAR1AnDLrKuh76IsBdbycqc1W8BMiK3O6jCGnEUrAaXGN%2B6TW0uqijT6qomnNu%2FtNycB%2BjhgGWS36NcJSkm84Bc6x9Z7O9kiY2XBwtX%2Fl0RbE23B2sQG8%2FiLsp5DOZD8VYIisf3VLXWLB4jQRmIod1ta5M3lcHi8MEZ20OfZBnhwVRwnIExWP2VvdggtWwiQYtR1zGo%2BvRgTmBAIMtlKt3ETyHzlP&X-Amz-Signature=e09a5cc44d6b93d0db047726b7062d4faa5d88a4ed1719531d2d7cd8163a01a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KAESVIJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX9tEvSWwcXnAeLmp10ICzne8LfJeJkmpNsscUclMsFQIhAIJWzMgUcJZ7G6KRaOj%2FITP2m9DhHEm%2F7Q7b1quCBbC9Kv8DCCQQABoMNjM3NDIzMTgzODA1IgxZlnaPq9DGTa0%2F1eAq3AMVV1eUwNOUlwUaMVEQ%2BmurTthyABT8r7iMT5myNaDdjTGkDy4YEtZ%2B8zGjBE3F%2BjFvQDjAIjtWwf7IQLO68j001fiTpYfgxEaYATkyrseTrd%2BLj9DKj%2BIfZJVM1%2BGci6lNYPVSeHWPYjPhmbS03tBwuQKklN6tFVDSJLli2akB9B0QFlel1stGdcDowVFlKIOnyWMHSRceImfQqgnxzHtUGstO5axzLDnVTXM0xmoe6tadtf4mva55uFLUd9Fr7rJRv8hZsfEbFCvtpO7sbjUWCGC7Kp6V2Kla6voPltqyRbYvAacDWOCJXF6y%2FqwRSVJfYm6WfOPcxrUkvCViOQmE7p%2FwUHUDg95hvPwv6%2F%2FAiIwIrqe%2BlQMMn7ZcWgBeBUy2A7Yy5gN1LhCNv2EaRnhDfYurzIzKdjEtZ1G2EdX3TBXsud%2BFYYG0nr2joSTEuFwyKpRWCNhhD80IWv3YMIkIlh53HNV92aAcDw5B6pHoiTn6SewD0w%2BbpxJ6W%2BJwEdP5LzP0quk6aZXKqbk9eFkVDBLoG6hfumhkgY9TOi6qNehg7%2F4wNaipDNG3Ab4NMYaxwomkrFLcgxn1aEQyIN5m%2BNKgj8QjvWEC7LvuXKn%2BopWGRWc3ij424WS59jD5o7vEBjqkAR1AnDLrKuh76IsBdbycqc1W8BMiK3O6jCGnEUrAaXGN%2B6TW0uqijT6qomnNu%2FtNycB%2BjhgGWS36NcJSkm84Bc6x9Z7O9kiY2XBwtX%2Fl0RbE23B2sQG8%2FiLsp5DOZD8VYIisf3VLXWLB4jQRmIod1ta5M3lcHi8MEZ20OfZBnhwVRwnIExWP2VvdggtWwiQYtR1zGo%2BvRgTmBAIMtlKt3ETyHzlP&X-Amz-Signature=e4e0bdbeba34232f13cbdc5f8b6ea7b5ba97c7a9efd565e7a270fe77f09a1b97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KAESVIJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX9tEvSWwcXnAeLmp10ICzne8LfJeJkmpNsscUclMsFQIhAIJWzMgUcJZ7G6KRaOj%2FITP2m9DhHEm%2F7Q7b1quCBbC9Kv8DCCQQABoMNjM3NDIzMTgzODA1IgxZlnaPq9DGTa0%2F1eAq3AMVV1eUwNOUlwUaMVEQ%2BmurTthyABT8r7iMT5myNaDdjTGkDy4YEtZ%2B8zGjBE3F%2BjFvQDjAIjtWwf7IQLO68j001fiTpYfgxEaYATkyrseTrd%2BLj9DKj%2BIfZJVM1%2BGci6lNYPVSeHWPYjPhmbS03tBwuQKklN6tFVDSJLli2akB9B0QFlel1stGdcDowVFlKIOnyWMHSRceImfQqgnxzHtUGstO5axzLDnVTXM0xmoe6tadtf4mva55uFLUd9Fr7rJRv8hZsfEbFCvtpO7sbjUWCGC7Kp6V2Kla6voPltqyRbYvAacDWOCJXF6y%2FqwRSVJfYm6WfOPcxrUkvCViOQmE7p%2FwUHUDg95hvPwv6%2F%2FAiIwIrqe%2BlQMMn7ZcWgBeBUy2A7Yy5gN1LhCNv2EaRnhDfYurzIzKdjEtZ1G2EdX3TBXsud%2BFYYG0nr2joSTEuFwyKpRWCNhhD80IWv3YMIkIlh53HNV92aAcDw5B6pHoiTn6SewD0w%2BbpxJ6W%2BJwEdP5LzP0quk6aZXKqbk9eFkVDBLoG6hfumhkgY9TOi6qNehg7%2F4wNaipDNG3Ab4NMYaxwomkrFLcgxn1aEQyIN5m%2BNKgj8QjvWEC7LvuXKn%2BopWGRWc3ij424WS59jD5o7vEBjqkAR1AnDLrKuh76IsBdbycqc1W8BMiK3O6jCGnEUrAaXGN%2B6TW0uqijT6qomnNu%2FtNycB%2BjhgGWS36NcJSkm84Bc6x9Z7O9kiY2XBwtX%2Fl0RbE23B2sQG8%2FiLsp5DOZD8VYIisf3VLXWLB4jQRmIod1ta5M3lcHi8MEZ20OfZBnhwVRwnIExWP2VvdggtWwiQYtR1zGo%2BvRgTmBAIMtlKt3ETyHzlP&X-Amz-Signature=2ab292c3667da3b8eda24cf57f6d11d2a2829ce68379beaffd26ce89049677d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KAESVIJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX9tEvSWwcXnAeLmp10ICzne8LfJeJkmpNsscUclMsFQIhAIJWzMgUcJZ7G6KRaOj%2FITP2m9DhHEm%2F7Q7b1quCBbC9Kv8DCCQQABoMNjM3NDIzMTgzODA1IgxZlnaPq9DGTa0%2F1eAq3AMVV1eUwNOUlwUaMVEQ%2BmurTthyABT8r7iMT5myNaDdjTGkDy4YEtZ%2B8zGjBE3F%2BjFvQDjAIjtWwf7IQLO68j001fiTpYfgxEaYATkyrseTrd%2BLj9DKj%2BIfZJVM1%2BGci6lNYPVSeHWPYjPhmbS03tBwuQKklN6tFVDSJLli2akB9B0QFlel1stGdcDowVFlKIOnyWMHSRceImfQqgnxzHtUGstO5axzLDnVTXM0xmoe6tadtf4mva55uFLUd9Fr7rJRv8hZsfEbFCvtpO7sbjUWCGC7Kp6V2Kla6voPltqyRbYvAacDWOCJXF6y%2FqwRSVJfYm6WfOPcxrUkvCViOQmE7p%2FwUHUDg95hvPwv6%2F%2FAiIwIrqe%2BlQMMn7ZcWgBeBUy2A7Yy5gN1LhCNv2EaRnhDfYurzIzKdjEtZ1G2EdX3TBXsud%2BFYYG0nr2joSTEuFwyKpRWCNhhD80IWv3YMIkIlh53HNV92aAcDw5B6pHoiTn6SewD0w%2BbpxJ6W%2BJwEdP5LzP0quk6aZXKqbk9eFkVDBLoG6hfumhkgY9TOi6qNehg7%2F4wNaipDNG3Ab4NMYaxwomkrFLcgxn1aEQyIN5m%2BNKgj8QjvWEC7LvuXKn%2BopWGRWc3ij424WS59jD5o7vEBjqkAR1AnDLrKuh76IsBdbycqc1W8BMiK3O6jCGnEUrAaXGN%2B6TW0uqijT6qomnNu%2FtNycB%2BjhgGWS36NcJSkm84Bc6x9Z7O9kiY2XBwtX%2Fl0RbE23B2sQG8%2FiLsp5DOZD8VYIisf3VLXWLB4jQRmIod1ta5M3lcHi8MEZ20OfZBnhwVRwnIExWP2VvdggtWwiQYtR1zGo%2BvRgTmBAIMtlKt3ETyHzlP&X-Amz-Signature=f9a16460df82418fa75a1952becabcdfd59ad1cb715dd327ec9852cde3f44e6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KAESVIJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX9tEvSWwcXnAeLmp10ICzne8LfJeJkmpNsscUclMsFQIhAIJWzMgUcJZ7G6KRaOj%2FITP2m9DhHEm%2F7Q7b1quCBbC9Kv8DCCQQABoMNjM3NDIzMTgzODA1IgxZlnaPq9DGTa0%2F1eAq3AMVV1eUwNOUlwUaMVEQ%2BmurTthyABT8r7iMT5myNaDdjTGkDy4YEtZ%2B8zGjBE3F%2BjFvQDjAIjtWwf7IQLO68j001fiTpYfgxEaYATkyrseTrd%2BLj9DKj%2BIfZJVM1%2BGci6lNYPVSeHWPYjPhmbS03tBwuQKklN6tFVDSJLli2akB9B0QFlel1stGdcDowVFlKIOnyWMHSRceImfQqgnxzHtUGstO5axzLDnVTXM0xmoe6tadtf4mva55uFLUd9Fr7rJRv8hZsfEbFCvtpO7sbjUWCGC7Kp6V2Kla6voPltqyRbYvAacDWOCJXF6y%2FqwRSVJfYm6WfOPcxrUkvCViOQmE7p%2FwUHUDg95hvPwv6%2F%2FAiIwIrqe%2BlQMMn7ZcWgBeBUy2A7Yy5gN1LhCNv2EaRnhDfYurzIzKdjEtZ1G2EdX3TBXsud%2BFYYG0nr2joSTEuFwyKpRWCNhhD80IWv3YMIkIlh53HNV92aAcDw5B6pHoiTn6SewD0w%2BbpxJ6W%2BJwEdP5LzP0quk6aZXKqbk9eFkVDBLoG6hfumhkgY9TOi6qNehg7%2F4wNaipDNG3Ab4NMYaxwomkrFLcgxn1aEQyIN5m%2BNKgj8QjvWEC7LvuXKn%2BopWGRWc3ij424WS59jD5o7vEBjqkAR1AnDLrKuh76IsBdbycqc1W8BMiK3O6jCGnEUrAaXGN%2B6TW0uqijT6qomnNu%2FtNycB%2BjhgGWS36NcJSkm84Bc6x9Z7O9kiY2XBwtX%2Fl0RbE23B2sQG8%2FiLsp5DOZD8VYIisf3VLXWLB4jQRmIod1ta5M3lcHi8MEZ20OfZBnhwVRwnIExWP2VvdggtWwiQYtR1zGo%2BvRgTmBAIMtlKt3ETyHzlP&X-Amz-Signature=d1da01f7fc2ab38340d0e28c56dc0ecc7fd522774ff2a244c242be38f72ac895&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KAESVIJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX9tEvSWwcXnAeLmp10ICzne8LfJeJkmpNsscUclMsFQIhAIJWzMgUcJZ7G6KRaOj%2FITP2m9DhHEm%2F7Q7b1quCBbC9Kv8DCCQQABoMNjM3NDIzMTgzODA1IgxZlnaPq9DGTa0%2F1eAq3AMVV1eUwNOUlwUaMVEQ%2BmurTthyABT8r7iMT5myNaDdjTGkDy4YEtZ%2B8zGjBE3F%2BjFvQDjAIjtWwf7IQLO68j001fiTpYfgxEaYATkyrseTrd%2BLj9DKj%2BIfZJVM1%2BGci6lNYPVSeHWPYjPhmbS03tBwuQKklN6tFVDSJLli2akB9B0QFlel1stGdcDowVFlKIOnyWMHSRceImfQqgnxzHtUGstO5axzLDnVTXM0xmoe6tadtf4mva55uFLUd9Fr7rJRv8hZsfEbFCvtpO7sbjUWCGC7Kp6V2Kla6voPltqyRbYvAacDWOCJXF6y%2FqwRSVJfYm6WfOPcxrUkvCViOQmE7p%2FwUHUDg95hvPwv6%2F%2FAiIwIrqe%2BlQMMn7ZcWgBeBUy2A7Yy5gN1LhCNv2EaRnhDfYurzIzKdjEtZ1G2EdX3TBXsud%2BFYYG0nr2joSTEuFwyKpRWCNhhD80IWv3YMIkIlh53HNV92aAcDw5B6pHoiTn6SewD0w%2BbpxJ6W%2BJwEdP5LzP0quk6aZXKqbk9eFkVDBLoG6hfumhkgY9TOi6qNehg7%2F4wNaipDNG3Ab4NMYaxwomkrFLcgxn1aEQyIN5m%2BNKgj8QjvWEC7LvuXKn%2BopWGRWc3ij424WS59jD5o7vEBjqkAR1AnDLrKuh76IsBdbycqc1W8BMiK3O6jCGnEUrAaXGN%2B6TW0uqijT6qomnNu%2FtNycB%2BjhgGWS36NcJSkm84Bc6x9Z7O9kiY2XBwtX%2Fl0RbE23B2sQG8%2FiLsp5DOZD8VYIisf3VLXWLB4jQRmIod1ta5M3lcHi8MEZ20OfZBnhwVRwnIExWP2VvdggtWwiQYtR1zGo%2BvRgTmBAIMtlKt3ETyHzlP&X-Amz-Signature=e3dcabbfd71c3c96d6db77293288ddfe4aa99d9fa289581171532a859d07dba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
