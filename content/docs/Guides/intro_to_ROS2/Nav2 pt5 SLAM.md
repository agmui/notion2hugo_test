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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4ES4YLX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOzJ4KjNhrKZPN7208vIMywfxMFK2XTN9RV%2FwLOB6C1gIhAKhiHZi9BfQl5UYtOsudLnDKq8h1e79AvCCH1HOzJueFKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxlc%2F8OJJp123Ma7OQq3AOGgaSh5aUBGCnU3dhVDY18QOPqBvr907K5qxI1%2BWkp7LhXCmq6rfxpAZjLABCx1FKs%2F%2F2OLNBRn%2FLscri3UGqpDhjoQ73v5NwW5uSgplzSPE1ivSIKCjRZem%2BZO0CRixvV7BsOaPVb0RG3k%2B8nnFsKHJMG6BqpWn3nP%2FH8G3frVQDN2YwRkJCBzExM1z89Xo5wJlSVftrlzUeua9aCAFb%2Fye2eOHXm59kMzgzrgNIi7HnGuIbKYzbtHL%2BfGH3skHCyBDag9bYYtBhJ6u7diHytm7CuX00kQ6KrhUnlDm1bKUAfVlXZWtH8NHBzI6nEKNtXkVKqhc3g1%2BIqlQlqDc1bfGQv7OVJtRMWEnJjJV8T%2FP6gyMM6cohJrVXbyGmApF0AleTa9eRkDf%2B3JKqNDrggqxbgSlH%2BrpMqcw%2Bz2iHZF6UYMZ40cB6%2Bq2dUjo3kNPv91h%2BW3yjIrMQTABUqTj7o3YUZJb%2FgTBC3cZrA%2FtTi%2Bu2C%2F%2FoZp%2FsMTlfP86tP1AIaqgEnyUlnxlr3RlZZTFGONFJ7Nx8HcC4GAMNoX19481QbBVD%2FhPo2D4EIGB9%2FPUu%2FKrFuWzwgiAQ%2F6mjrTycwFihGtjVCul2cTJ1yUcENbqpRq%2FgPoD0nQv6E3TDr8efEBjqkAbhwSHdn2AqgDc23kbzoONXpgsGeZoBstF1T4r2BpJvjngw9YtT4gmKPBtIq%2B10eQ%2FlqB29f%2FAM9bnjUUM%2F2%2Fg02cFcKsZ4TFbrGMXj8ITcLRioj6CfKwZtGg%2FKxWs2OCjVNQCn2MrAyjAQ3PzejHEVr1xmA7EZzaMBfSjpFr2Pa1BDSh0DllbCDxh1cNe2ftUXhZkiUvG97jdbShtqGs%2B6Q7qb1&X-Amz-Signature=388e89458a952f3607290594686aa798f7dd40a6d1febd4f60b3ac7f5b34bc1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4ES4YLX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOzJ4KjNhrKZPN7208vIMywfxMFK2XTN9RV%2FwLOB6C1gIhAKhiHZi9BfQl5UYtOsudLnDKq8h1e79AvCCH1HOzJueFKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxlc%2F8OJJp123Ma7OQq3AOGgaSh5aUBGCnU3dhVDY18QOPqBvr907K5qxI1%2BWkp7LhXCmq6rfxpAZjLABCx1FKs%2F%2F2OLNBRn%2FLscri3UGqpDhjoQ73v5NwW5uSgplzSPE1ivSIKCjRZem%2BZO0CRixvV7BsOaPVb0RG3k%2B8nnFsKHJMG6BqpWn3nP%2FH8G3frVQDN2YwRkJCBzExM1z89Xo5wJlSVftrlzUeua9aCAFb%2Fye2eOHXm59kMzgzrgNIi7HnGuIbKYzbtHL%2BfGH3skHCyBDag9bYYtBhJ6u7diHytm7CuX00kQ6KrhUnlDm1bKUAfVlXZWtH8NHBzI6nEKNtXkVKqhc3g1%2BIqlQlqDc1bfGQv7OVJtRMWEnJjJV8T%2FP6gyMM6cohJrVXbyGmApF0AleTa9eRkDf%2B3JKqNDrggqxbgSlH%2BrpMqcw%2Bz2iHZF6UYMZ40cB6%2Bq2dUjo3kNPv91h%2BW3yjIrMQTABUqTj7o3YUZJb%2FgTBC3cZrA%2FtTi%2Bu2C%2F%2FoZp%2FsMTlfP86tP1AIaqgEnyUlnxlr3RlZZTFGONFJ7Nx8HcC4GAMNoX19481QbBVD%2FhPo2D4EIGB9%2FPUu%2FKrFuWzwgiAQ%2F6mjrTycwFihGtjVCul2cTJ1yUcENbqpRq%2FgPoD0nQv6E3TDr8efEBjqkAbhwSHdn2AqgDc23kbzoONXpgsGeZoBstF1T4r2BpJvjngw9YtT4gmKPBtIq%2B10eQ%2FlqB29f%2FAM9bnjUUM%2F2%2Fg02cFcKsZ4TFbrGMXj8ITcLRioj6CfKwZtGg%2FKxWs2OCjVNQCn2MrAyjAQ3PzejHEVr1xmA7EZzaMBfSjpFr2Pa1BDSh0DllbCDxh1cNe2ftUXhZkiUvG97jdbShtqGs%2B6Q7qb1&X-Amz-Signature=610367291320272c5318bbfbf59c6b6aad4ce8b34dc494cf5f0dae774b4e1ff4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4ES4YLX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOzJ4KjNhrKZPN7208vIMywfxMFK2XTN9RV%2FwLOB6C1gIhAKhiHZi9BfQl5UYtOsudLnDKq8h1e79AvCCH1HOzJueFKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxlc%2F8OJJp123Ma7OQq3AOGgaSh5aUBGCnU3dhVDY18QOPqBvr907K5qxI1%2BWkp7LhXCmq6rfxpAZjLABCx1FKs%2F%2F2OLNBRn%2FLscri3UGqpDhjoQ73v5NwW5uSgplzSPE1ivSIKCjRZem%2BZO0CRixvV7BsOaPVb0RG3k%2B8nnFsKHJMG6BqpWn3nP%2FH8G3frVQDN2YwRkJCBzExM1z89Xo5wJlSVftrlzUeua9aCAFb%2Fye2eOHXm59kMzgzrgNIi7HnGuIbKYzbtHL%2BfGH3skHCyBDag9bYYtBhJ6u7diHytm7CuX00kQ6KrhUnlDm1bKUAfVlXZWtH8NHBzI6nEKNtXkVKqhc3g1%2BIqlQlqDc1bfGQv7OVJtRMWEnJjJV8T%2FP6gyMM6cohJrVXbyGmApF0AleTa9eRkDf%2B3JKqNDrggqxbgSlH%2BrpMqcw%2Bz2iHZF6UYMZ40cB6%2Bq2dUjo3kNPv91h%2BW3yjIrMQTABUqTj7o3YUZJb%2FgTBC3cZrA%2FtTi%2Bu2C%2F%2FoZp%2FsMTlfP86tP1AIaqgEnyUlnxlr3RlZZTFGONFJ7Nx8HcC4GAMNoX19481QbBVD%2FhPo2D4EIGB9%2FPUu%2FKrFuWzwgiAQ%2F6mjrTycwFihGtjVCul2cTJ1yUcENbqpRq%2FgPoD0nQv6E3TDr8efEBjqkAbhwSHdn2AqgDc23kbzoONXpgsGeZoBstF1T4r2BpJvjngw9YtT4gmKPBtIq%2B10eQ%2FlqB29f%2FAM9bnjUUM%2F2%2Fg02cFcKsZ4TFbrGMXj8ITcLRioj6CfKwZtGg%2FKxWs2OCjVNQCn2MrAyjAQ3PzejHEVr1xmA7EZzaMBfSjpFr2Pa1BDSh0DllbCDxh1cNe2ftUXhZkiUvG97jdbShtqGs%2B6Q7qb1&X-Amz-Signature=c24ab5dd067a903b3f83ba2f3406b88419b6dc0a83282e788c56f766141fe0df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4ES4YLX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOzJ4KjNhrKZPN7208vIMywfxMFK2XTN9RV%2FwLOB6C1gIhAKhiHZi9BfQl5UYtOsudLnDKq8h1e79AvCCH1HOzJueFKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxlc%2F8OJJp123Ma7OQq3AOGgaSh5aUBGCnU3dhVDY18QOPqBvr907K5qxI1%2BWkp7LhXCmq6rfxpAZjLABCx1FKs%2F%2F2OLNBRn%2FLscri3UGqpDhjoQ73v5NwW5uSgplzSPE1ivSIKCjRZem%2BZO0CRixvV7BsOaPVb0RG3k%2B8nnFsKHJMG6BqpWn3nP%2FH8G3frVQDN2YwRkJCBzExM1z89Xo5wJlSVftrlzUeua9aCAFb%2Fye2eOHXm59kMzgzrgNIi7HnGuIbKYzbtHL%2BfGH3skHCyBDag9bYYtBhJ6u7diHytm7CuX00kQ6KrhUnlDm1bKUAfVlXZWtH8NHBzI6nEKNtXkVKqhc3g1%2BIqlQlqDc1bfGQv7OVJtRMWEnJjJV8T%2FP6gyMM6cohJrVXbyGmApF0AleTa9eRkDf%2B3JKqNDrggqxbgSlH%2BrpMqcw%2Bz2iHZF6UYMZ40cB6%2Bq2dUjo3kNPv91h%2BW3yjIrMQTABUqTj7o3YUZJb%2FgTBC3cZrA%2FtTi%2Bu2C%2F%2FoZp%2FsMTlfP86tP1AIaqgEnyUlnxlr3RlZZTFGONFJ7Nx8HcC4GAMNoX19481QbBVD%2FhPo2D4EIGB9%2FPUu%2FKrFuWzwgiAQ%2F6mjrTycwFihGtjVCul2cTJ1yUcENbqpRq%2FgPoD0nQv6E3TDr8efEBjqkAbhwSHdn2AqgDc23kbzoONXpgsGeZoBstF1T4r2BpJvjngw9YtT4gmKPBtIq%2B10eQ%2FlqB29f%2FAM9bnjUUM%2F2%2Fg02cFcKsZ4TFbrGMXj8ITcLRioj6CfKwZtGg%2FKxWs2OCjVNQCn2MrAyjAQ3PzejHEVr1xmA7EZzaMBfSjpFr2Pa1BDSh0DllbCDxh1cNe2ftUXhZkiUvG97jdbShtqGs%2B6Q7qb1&X-Amz-Signature=4c257ebcd22f9864637a63643a9a3aced31ad58f47d0c6da6215505402d14fde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4ES4YLX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOzJ4KjNhrKZPN7208vIMywfxMFK2XTN9RV%2FwLOB6C1gIhAKhiHZi9BfQl5UYtOsudLnDKq8h1e79AvCCH1HOzJueFKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxlc%2F8OJJp123Ma7OQq3AOGgaSh5aUBGCnU3dhVDY18QOPqBvr907K5qxI1%2BWkp7LhXCmq6rfxpAZjLABCx1FKs%2F%2F2OLNBRn%2FLscri3UGqpDhjoQ73v5NwW5uSgplzSPE1ivSIKCjRZem%2BZO0CRixvV7BsOaPVb0RG3k%2B8nnFsKHJMG6BqpWn3nP%2FH8G3frVQDN2YwRkJCBzExM1z89Xo5wJlSVftrlzUeua9aCAFb%2Fye2eOHXm59kMzgzrgNIi7HnGuIbKYzbtHL%2BfGH3skHCyBDag9bYYtBhJ6u7diHytm7CuX00kQ6KrhUnlDm1bKUAfVlXZWtH8NHBzI6nEKNtXkVKqhc3g1%2BIqlQlqDc1bfGQv7OVJtRMWEnJjJV8T%2FP6gyMM6cohJrVXbyGmApF0AleTa9eRkDf%2B3JKqNDrggqxbgSlH%2BrpMqcw%2Bz2iHZF6UYMZ40cB6%2Bq2dUjo3kNPv91h%2BW3yjIrMQTABUqTj7o3YUZJb%2FgTBC3cZrA%2FtTi%2Bu2C%2F%2FoZp%2FsMTlfP86tP1AIaqgEnyUlnxlr3RlZZTFGONFJ7Nx8HcC4GAMNoX19481QbBVD%2FhPo2D4EIGB9%2FPUu%2FKrFuWzwgiAQ%2F6mjrTycwFihGtjVCul2cTJ1yUcENbqpRq%2FgPoD0nQv6E3TDr8efEBjqkAbhwSHdn2AqgDc23kbzoONXpgsGeZoBstF1T4r2BpJvjngw9YtT4gmKPBtIq%2B10eQ%2FlqB29f%2FAM9bnjUUM%2F2%2Fg02cFcKsZ4TFbrGMXj8ITcLRioj6CfKwZtGg%2FKxWs2OCjVNQCn2MrAyjAQ3PzejHEVr1xmA7EZzaMBfSjpFr2Pa1BDSh0DllbCDxh1cNe2ftUXhZkiUvG97jdbShtqGs%2B6Q7qb1&X-Amz-Signature=ea19795a400dafd995b280082abd51a3c61398c95804a4b702793f8397209c2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4ES4YLX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOzJ4KjNhrKZPN7208vIMywfxMFK2XTN9RV%2FwLOB6C1gIhAKhiHZi9BfQl5UYtOsudLnDKq8h1e79AvCCH1HOzJueFKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxlc%2F8OJJp123Ma7OQq3AOGgaSh5aUBGCnU3dhVDY18QOPqBvr907K5qxI1%2BWkp7LhXCmq6rfxpAZjLABCx1FKs%2F%2F2OLNBRn%2FLscri3UGqpDhjoQ73v5NwW5uSgplzSPE1ivSIKCjRZem%2BZO0CRixvV7BsOaPVb0RG3k%2B8nnFsKHJMG6BqpWn3nP%2FH8G3frVQDN2YwRkJCBzExM1z89Xo5wJlSVftrlzUeua9aCAFb%2Fye2eOHXm59kMzgzrgNIi7HnGuIbKYzbtHL%2BfGH3skHCyBDag9bYYtBhJ6u7diHytm7CuX00kQ6KrhUnlDm1bKUAfVlXZWtH8NHBzI6nEKNtXkVKqhc3g1%2BIqlQlqDc1bfGQv7OVJtRMWEnJjJV8T%2FP6gyMM6cohJrVXbyGmApF0AleTa9eRkDf%2B3JKqNDrggqxbgSlH%2BrpMqcw%2Bz2iHZF6UYMZ40cB6%2Bq2dUjo3kNPv91h%2BW3yjIrMQTABUqTj7o3YUZJb%2FgTBC3cZrA%2FtTi%2Bu2C%2F%2FoZp%2FsMTlfP86tP1AIaqgEnyUlnxlr3RlZZTFGONFJ7Nx8HcC4GAMNoX19481QbBVD%2FhPo2D4EIGB9%2FPUu%2FKrFuWzwgiAQ%2F6mjrTycwFihGtjVCul2cTJ1yUcENbqpRq%2FgPoD0nQv6E3TDr8efEBjqkAbhwSHdn2AqgDc23kbzoONXpgsGeZoBstF1T4r2BpJvjngw9YtT4gmKPBtIq%2B10eQ%2FlqB29f%2FAM9bnjUUM%2F2%2Fg02cFcKsZ4TFbrGMXj8ITcLRioj6CfKwZtGg%2FKxWs2OCjVNQCn2MrAyjAQ3PzejHEVr1xmA7EZzaMBfSjpFr2Pa1BDSh0DllbCDxh1cNe2ftUXhZkiUvG97jdbShtqGs%2B6Q7qb1&X-Amz-Signature=17169a8a4dab4fef7e72a5f85175d56aa7b32128bf8c77cf58fa5bc74e831493&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4ES4YLX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOzJ4KjNhrKZPN7208vIMywfxMFK2XTN9RV%2FwLOB6C1gIhAKhiHZi9BfQl5UYtOsudLnDKq8h1e79AvCCH1HOzJueFKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxlc%2F8OJJp123Ma7OQq3AOGgaSh5aUBGCnU3dhVDY18QOPqBvr907K5qxI1%2BWkp7LhXCmq6rfxpAZjLABCx1FKs%2F%2F2OLNBRn%2FLscri3UGqpDhjoQ73v5NwW5uSgplzSPE1ivSIKCjRZem%2BZO0CRixvV7BsOaPVb0RG3k%2B8nnFsKHJMG6BqpWn3nP%2FH8G3frVQDN2YwRkJCBzExM1z89Xo5wJlSVftrlzUeua9aCAFb%2Fye2eOHXm59kMzgzrgNIi7HnGuIbKYzbtHL%2BfGH3skHCyBDag9bYYtBhJ6u7diHytm7CuX00kQ6KrhUnlDm1bKUAfVlXZWtH8NHBzI6nEKNtXkVKqhc3g1%2BIqlQlqDc1bfGQv7OVJtRMWEnJjJV8T%2FP6gyMM6cohJrVXbyGmApF0AleTa9eRkDf%2B3JKqNDrggqxbgSlH%2BrpMqcw%2Bz2iHZF6UYMZ40cB6%2Bq2dUjo3kNPv91h%2BW3yjIrMQTABUqTj7o3YUZJb%2FgTBC3cZrA%2FtTi%2Bu2C%2F%2FoZp%2FsMTlfP86tP1AIaqgEnyUlnxlr3RlZZTFGONFJ7Nx8HcC4GAMNoX19481QbBVD%2FhPo2D4EIGB9%2FPUu%2FKrFuWzwgiAQ%2F6mjrTycwFihGtjVCul2cTJ1yUcENbqpRq%2FgPoD0nQv6E3TDr8efEBjqkAbhwSHdn2AqgDc23kbzoONXpgsGeZoBstF1T4r2BpJvjngw9YtT4gmKPBtIq%2B10eQ%2FlqB29f%2FAM9bnjUUM%2F2%2Fg02cFcKsZ4TFbrGMXj8ITcLRioj6CfKwZtGg%2FKxWs2OCjVNQCn2MrAyjAQ3PzejHEVr1xmA7EZzaMBfSjpFr2Pa1BDSh0DllbCDxh1cNe2ftUXhZkiUvG97jdbShtqGs%2B6Q7qb1&X-Amz-Signature=5b2c7087bb6c61fb809a92562b0b99de2bb606ee2d60646c378a6f4f61477f19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4ES4YLX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOzJ4KjNhrKZPN7208vIMywfxMFK2XTN9RV%2FwLOB6C1gIhAKhiHZi9BfQl5UYtOsudLnDKq8h1e79AvCCH1HOzJueFKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxlc%2F8OJJp123Ma7OQq3AOGgaSh5aUBGCnU3dhVDY18QOPqBvr907K5qxI1%2BWkp7LhXCmq6rfxpAZjLABCx1FKs%2F%2F2OLNBRn%2FLscri3UGqpDhjoQ73v5NwW5uSgplzSPE1ivSIKCjRZem%2BZO0CRixvV7BsOaPVb0RG3k%2B8nnFsKHJMG6BqpWn3nP%2FH8G3frVQDN2YwRkJCBzExM1z89Xo5wJlSVftrlzUeua9aCAFb%2Fye2eOHXm59kMzgzrgNIi7HnGuIbKYzbtHL%2BfGH3skHCyBDag9bYYtBhJ6u7diHytm7CuX00kQ6KrhUnlDm1bKUAfVlXZWtH8NHBzI6nEKNtXkVKqhc3g1%2BIqlQlqDc1bfGQv7OVJtRMWEnJjJV8T%2FP6gyMM6cohJrVXbyGmApF0AleTa9eRkDf%2B3JKqNDrggqxbgSlH%2BrpMqcw%2Bz2iHZF6UYMZ40cB6%2Bq2dUjo3kNPv91h%2BW3yjIrMQTABUqTj7o3YUZJb%2FgTBC3cZrA%2FtTi%2Bu2C%2F%2FoZp%2FsMTlfP86tP1AIaqgEnyUlnxlr3RlZZTFGONFJ7Nx8HcC4GAMNoX19481QbBVD%2FhPo2D4EIGB9%2FPUu%2FKrFuWzwgiAQ%2F6mjrTycwFihGtjVCul2cTJ1yUcENbqpRq%2FgPoD0nQv6E3TDr8efEBjqkAbhwSHdn2AqgDc23kbzoONXpgsGeZoBstF1T4r2BpJvjngw9YtT4gmKPBtIq%2B10eQ%2FlqB29f%2FAM9bnjUUM%2F2%2Fg02cFcKsZ4TFbrGMXj8ITcLRioj6CfKwZtGg%2FKxWs2OCjVNQCn2MrAyjAQ3PzejHEVr1xmA7EZzaMBfSjpFr2Pa1BDSh0DllbCDxh1cNe2ftUXhZkiUvG97jdbShtqGs%2B6Q7qb1&X-Amz-Signature=b471bd608c03c70e0a8210a6d54c78cc17998e971742be4ba05b0055477134ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4ES4YLX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOzJ4KjNhrKZPN7208vIMywfxMFK2XTN9RV%2FwLOB6C1gIhAKhiHZi9BfQl5UYtOsudLnDKq8h1e79AvCCH1HOzJueFKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxlc%2F8OJJp123Ma7OQq3AOGgaSh5aUBGCnU3dhVDY18QOPqBvr907K5qxI1%2BWkp7LhXCmq6rfxpAZjLABCx1FKs%2F%2F2OLNBRn%2FLscri3UGqpDhjoQ73v5NwW5uSgplzSPE1ivSIKCjRZem%2BZO0CRixvV7BsOaPVb0RG3k%2B8nnFsKHJMG6BqpWn3nP%2FH8G3frVQDN2YwRkJCBzExM1z89Xo5wJlSVftrlzUeua9aCAFb%2Fye2eOHXm59kMzgzrgNIi7HnGuIbKYzbtHL%2BfGH3skHCyBDag9bYYtBhJ6u7diHytm7CuX00kQ6KrhUnlDm1bKUAfVlXZWtH8NHBzI6nEKNtXkVKqhc3g1%2BIqlQlqDc1bfGQv7OVJtRMWEnJjJV8T%2FP6gyMM6cohJrVXbyGmApF0AleTa9eRkDf%2B3JKqNDrggqxbgSlH%2BrpMqcw%2Bz2iHZF6UYMZ40cB6%2Bq2dUjo3kNPv91h%2BW3yjIrMQTABUqTj7o3YUZJb%2FgTBC3cZrA%2FtTi%2Bu2C%2F%2FoZp%2FsMTlfP86tP1AIaqgEnyUlnxlr3RlZZTFGONFJ7Nx8HcC4GAMNoX19481QbBVD%2FhPo2D4EIGB9%2FPUu%2FKrFuWzwgiAQ%2F6mjrTycwFihGtjVCul2cTJ1yUcENbqpRq%2FgPoD0nQv6E3TDr8efEBjqkAbhwSHdn2AqgDc23kbzoONXpgsGeZoBstF1T4r2BpJvjngw9YtT4gmKPBtIq%2B10eQ%2FlqB29f%2FAM9bnjUUM%2F2%2Fg02cFcKsZ4TFbrGMXj8ITcLRioj6CfKwZtGg%2FKxWs2OCjVNQCn2MrAyjAQ3PzejHEVr1xmA7EZzaMBfSjpFr2Pa1BDSh0DllbCDxh1cNe2ftUXhZkiUvG97jdbShtqGs%2B6Q7qb1&X-Amz-Signature=e8b7aa04192d67347ffeffd82544c74a2fcdc439cea2810e4ab8917e5c87243f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4ES4YLX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOzJ4KjNhrKZPN7208vIMywfxMFK2XTN9RV%2FwLOB6C1gIhAKhiHZi9BfQl5UYtOsudLnDKq8h1e79AvCCH1HOzJueFKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxlc%2F8OJJp123Ma7OQq3AOGgaSh5aUBGCnU3dhVDY18QOPqBvr907K5qxI1%2BWkp7LhXCmq6rfxpAZjLABCx1FKs%2F%2F2OLNBRn%2FLscri3UGqpDhjoQ73v5NwW5uSgplzSPE1ivSIKCjRZem%2BZO0CRixvV7BsOaPVb0RG3k%2B8nnFsKHJMG6BqpWn3nP%2FH8G3frVQDN2YwRkJCBzExM1z89Xo5wJlSVftrlzUeua9aCAFb%2Fye2eOHXm59kMzgzrgNIi7HnGuIbKYzbtHL%2BfGH3skHCyBDag9bYYtBhJ6u7diHytm7CuX00kQ6KrhUnlDm1bKUAfVlXZWtH8NHBzI6nEKNtXkVKqhc3g1%2BIqlQlqDc1bfGQv7OVJtRMWEnJjJV8T%2FP6gyMM6cohJrVXbyGmApF0AleTa9eRkDf%2B3JKqNDrggqxbgSlH%2BrpMqcw%2Bz2iHZF6UYMZ40cB6%2Bq2dUjo3kNPv91h%2BW3yjIrMQTABUqTj7o3YUZJb%2FgTBC3cZrA%2FtTi%2Bu2C%2F%2FoZp%2FsMTlfP86tP1AIaqgEnyUlnxlr3RlZZTFGONFJ7Nx8HcC4GAMNoX19481QbBVD%2FhPo2D4EIGB9%2FPUu%2FKrFuWzwgiAQ%2F6mjrTycwFihGtjVCul2cTJ1yUcENbqpRq%2FgPoD0nQv6E3TDr8efEBjqkAbhwSHdn2AqgDc23kbzoONXpgsGeZoBstF1T4r2BpJvjngw9YtT4gmKPBtIq%2B10eQ%2FlqB29f%2FAM9bnjUUM%2F2%2Fg02cFcKsZ4TFbrGMXj8ITcLRioj6CfKwZtGg%2FKxWs2OCjVNQCn2MrAyjAQ3PzejHEVr1xmA7EZzaMBfSjpFr2Pa1BDSh0DllbCDxh1cNe2ftUXhZkiUvG97jdbShtqGs%2B6Q7qb1&X-Amz-Signature=632928ae0115c27052d61746926da403dce21e00615926048e626f8701e8565e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4ES4YLX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOzJ4KjNhrKZPN7208vIMywfxMFK2XTN9RV%2FwLOB6C1gIhAKhiHZi9BfQl5UYtOsudLnDKq8h1e79AvCCH1HOzJueFKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxlc%2F8OJJp123Ma7OQq3AOGgaSh5aUBGCnU3dhVDY18QOPqBvr907K5qxI1%2BWkp7LhXCmq6rfxpAZjLABCx1FKs%2F%2F2OLNBRn%2FLscri3UGqpDhjoQ73v5NwW5uSgplzSPE1ivSIKCjRZem%2BZO0CRixvV7BsOaPVb0RG3k%2B8nnFsKHJMG6BqpWn3nP%2FH8G3frVQDN2YwRkJCBzExM1z89Xo5wJlSVftrlzUeua9aCAFb%2Fye2eOHXm59kMzgzrgNIi7HnGuIbKYzbtHL%2BfGH3skHCyBDag9bYYtBhJ6u7diHytm7CuX00kQ6KrhUnlDm1bKUAfVlXZWtH8NHBzI6nEKNtXkVKqhc3g1%2BIqlQlqDc1bfGQv7OVJtRMWEnJjJV8T%2FP6gyMM6cohJrVXbyGmApF0AleTa9eRkDf%2B3JKqNDrggqxbgSlH%2BrpMqcw%2Bz2iHZF6UYMZ40cB6%2Bq2dUjo3kNPv91h%2BW3yjIrMQTABUqTj7o3YUZJb%2FgTBC3cZrA%2FtTi%2Bu2C%2F%2FoZp%2FsMTlfP86tP1AIaqgEnyUlnxlr3RlZZTFGONFJ7Nx8HcC4GAMNoX19481QbBVD%2FhPo2D4EIGB9%2FPUu%2FKrFuWzwgiAQ%2F6mjrTycwFihGtjVCul2cTJ1yUcENbqpRq%2FgPoD0nQv6E3TDr8efEBjqkAbhwSHdn2AqgDc23kbzoONXpgsGeZoBstF1T4r2BpJvjngw9YtT4gmKPBtIq%2B10eQ%2FlqB29f%2FAM9bnjUUM%2F2%2Fg02cFcKsZ4TFbrGMXj8ITcLRioj6CfKwZtGg%2FKxWs2OCjVNQCn2MrAyjAQ3PzejHEVr1xmA7EZzaMBfSjpFr2Pa1BDSh0DllbCDxh1cNe2ftUXhZkiUvG97jdbShtqGs%2B6Q7qb1&X-Amz-Signature=45c09c2d0405101df24761bb6be8e4494644a05ee3c9f03a51b20e44d4cf45ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4ES4YLX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOzJ4KjNhrKZPN7208vIMywfxMFK2XTN9RV%2FwLOB6C1gIhAKhiHZi9BfQl5UYtOsudLnDKq8h1e79AvCCH1HOzJueFKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxlc%2F8OJJp123Ma7OQq3AOGgaSh5aUBGCnU3dhVDY18QOPqBvr907K5qxI1%2BWkp7LhXCmq6rfxpAZjLABCx1FKs%2F%2F2OLNBRn%2FLscri3UGqpDhjoQ73v5NwW5uSgplzSPE1ivSIKCjRZem%2BZO0CRixvV7BsOaPVb0RG3k%2B8nnFsKHJMG6BqpWn3nP%2FH8G3frVQDN2YwRkJCBzExM1z89Xo5wJlSVftrlzUeua9aCAFb%2Fye2eOHXm59kMzgzrgNIi7HnGuIbKYzbtHL%2BfGH3skHCyBDag9bYYtBhJ6u7diHytm7CuX00kQ6KrhUnlDm1bKUAfVlXZWtH8NHBzI6nEKNtXkVKqhc3g1%2BIqlQlqDc1bfGQv7OVJtRMWEnJjJV8T%2FP6gyMM6cohJrVXbyGmApF0AleTa9eRkDf%2B3JKqNDrggqxbgSlH%2BrpMqcw%2Bz2iHZF6UYMZ40cB6%2Bq2dUjo3kNPv91h%2BW3yjIrMQTABUqTj7o3YUZJb%2FgTBC3cZrA%2FtTi%2Bu2C%2F%2FoZp%2FsMTlfP86tP1AIaqgEnyUlnxlr3RlZZTFGONFJ7Nx8HcC4GAMNoX19481QbBVD%2FhPo2D4EIGB9%2FPUu%2FKrFuWzwgiAQ%2F6mjrTycwFihGtjVCul2cTJ1yUcENbqpRq%2FgPoD0nQv6E3TDr8efEBjqkAbhwSHdn2AqgDc23kbzoONXpgsGeZoBstF1T4r2BpJvjngw9YtT4gmKPBtIq%2B10eQ%2FlqB29f%2FAM9bnjUUM%2F2%2Fg02cFcKsZ4TFbrGMXj8ITcLRioj6CfKwZtGg%2FKxWs2OCjVNQCn2MrAyjAQ3PzejHEVr1xmA7EZzaMBfSjpFr2Pa1BDSh0DllbCDxh1cNe2ftUXhZkiUvG97jdbShtqGs%2B6Q7qb1&X-Amz-Signature=6e7a8859ee5436bbfd8dcc0d5314c9cf11a5012444f79f570c0b711ae727f3f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4ES4YLX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOzJ4KjNhrKZPN7208vIMywfxMFK2XTN9RV%2FwLOB6C1gIhAKhiHZi9BfQl5UYtOsudLnDKq8h1e79AvCCH1HOzJueFKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxlc%2F8OJJp123Ma7OQq3AOGgaSh5aUBGCnU3dhVDY18QOPqBvr907K5qxI1%2BWkp7LhXCmq6rfxpAZjLABCx1FKs%2F%2F2OLNBRn%2FLscri3UGqpDhjoQ73v5NwW5uSgplzSPE1ivSIKCjRZem%2BZO0CRixvV7BsOaPVb0RG3k%2B8nnFsKHJMG6BqpWn3nP%2FH8G3frVQDN2YwRkJCBzExM1z89Xo5wJlSVftrlzUeua9aCAFb%2Fye2eOHXm59kMzgzrgNIi7HnGuIbKYzbtHL%2BfGH3skHCyBDag9bYYtBhJ6u7diHytm7CuX00kQ6KrhUnlDm1bKUAfVlXZWtH8NHBzI6nEKNtXkVKqhc3g1%2BIqlQlqDc1bfGQv7OVJtRMWEnJjJV8T%2FP6gyMM6cohJrVXbyGmApF0AleTa9eRkDf%2B3JKqNDrggqxbgSlH%2BrpMqcw%2Bz2iHZF6UYMZ40cB6%2Bq2dUjo3kNPv91h%2BW3yjIrMQTABUqTj7o3YUZJb%2FgTBC3cZrA%2FtTi%2Bu2C%2F%2FoZp%2FsMTlfP86tP1AIaqgEnyUlnxlr3RlZZTFGONFJ7Nx8HcC4GAMNoX19481QbBVD%2FhPo2D4EIGB9%2FPUu%2FKrFuWzwgiAQ%2F6mjrTycwFihGtjVCul2cTJ1yUcENbqpRq%2FgPoD0nQv6E3TDr8efEBjqkAbhwSHdn2AqgDc23kbzoONXpgsGeZoBstF1T4r2BpJvjngw9YtT4gmKPBtIq%2B10eQ%2FlqB29f%2FAM9bnjUUM%2F2%2Fg02cFcKsZ4TFbrGMXj8ITcLRioj6CfKwZtGg%2FKxWs2OCjVNQCn2MrAyjAQ3PzejHEVr1xmA7EZzaMBfSjpFr2Pa1BDSh0DllbCDxh1cNe2ftUXhZkiUvG97jdbShtqGs%2B6Q7qb1&X-Amz-Signature=5c26c8265368acb320ec45aafda1335c89ef5c7ba6c575bf97cce3d1c6238456&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4ES4YLX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T141214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOzJ4KjNhrKZPN7208vIMywfxMFK2XTN9RV%2FwLOB6C1gIhAKhiHZi9BfQl5UYtOsudLnDKq8h1e79AvCCH1HOzJueFKogECO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxlc%2F8OJJp123Ma7OQq3AOGgaSh5aUBGCnU3dhVDY18QOPqBvr907K5qxI1%2BWkp7LhXCmq6rfxpAZjLABCx1FKs%2F%2F2OLNBRn%2FLscri3UGqpDhjoQ73v5NwW5uSgplzSPE1ivSIKCjRZem%2BZO0CRixvV7BsOaPVb0RG3k%2B8nnFsKHJMG6BqpWn3nP%2FH8G3frVQDN2YwRkJCBzExM1z89Xo5wJlSVftrlzUeua9aCAFb%2Fye2eOHXm59kMzgzrgNIi7HnGuIbKYzbtHL%2BfGH3skHCyBDag9bYYtBhJ6u7diHytm7CuX00kQ6KrhUnlDm1bKUAfVlXZWtH8NHBzI6nEKNtXkVKqhc3g1%2BIqlQlqDc1bfGQv7OVJtRMWEnJjJV8T%2FP6gyMM6cohJrVXbyGmApF0AleTa9eRkDf%2B3JKqNDrggqxbgSlH%2BrpMqcw%2Bz2iHZF6UYMZ40cB6%2Bq2dUjo3kNPv91h%2BW3yjIrMQTABUqTj7o3YUZJb%2FgTBC3cZrA%2FtTi%2Bu2C%2F%2FoZp%2FsMTlfP86tP1AIaqgEnyUlnxlr3RlZZTFGONFJ7Nx8HcC4GAMNoX19481QbBVD%2FhPo2D4EIGB9%2FPUu%2FKrFuWzwgiAQ%2F6mjrTycwFihGtjVCul2cTJ1yUcENbqpRq%2FgPoD0nQv6E3TDr8efEBjqkAbhwSHdn2AqgDc23kbzoONXpgsGeZoBstF1T4r2BpJvjngw9YtT4gmKPBtIq%2B10eQ%2FlqB29f%2FAM9bnjUUM%2F2%2Fg02cFcKsZ4TFbrGMXj8ITcLRioj6CfKwZtGg%2FKxWs2OCjVNQCn2MrAyjAQ3PzejHEVr1xmA7EZzaMBfSjpFr2Pa1BDSh0DllbCDxh1cNe2ftUXhZkiUvG97jdbShtqGs%2B6Q7qb1&X-Amz-Signature=b5002cbdfa3f156918bb9659e5fc637ac2c3b5faef752e9ff07c647bb3c98a30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
