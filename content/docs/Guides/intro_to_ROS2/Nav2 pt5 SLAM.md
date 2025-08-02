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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K7JEM2L%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDhpUGAgCOSdFRB1bvM59pA31WtP%2BeW2wqzSZfQNjPq8AiB4i98L2MCmH%2FKSkqAyfNZm8KNsv3N6bFIBi1U0wRpl6Sr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMSU16bllyxP9tBExQKtwD56r5uKTejFFReu8GLGq2CROSm%2FTUja5H%2F0saRO0aZnmRtNEeO6%2BCQKB5hWeo7pRKpO2n%2Fdde6ZeiXJ%2F92NxMCUi64n%2F%2FtvVeoimNWQNDaChE%2FnMemCzggU5pSRDyKs6bSFSrZmdxtl0%2BYIZ8NYkzPBssa6rDYub829MlxvwhnsUz31UDd6vHDJUF2KkqmpzBmSMVQVe8wMRLbdRmtNlTqNJvsOMEt8PP8bLcQ34t3DTScBmlMaunYxr8ZeA9aBO39%2FQcNeW2F349q0cGbpO5phFzuKO%2Ba%2BSNbhC%2Bnw03DXe%2BXgHHEFjDrg8OyVYj%2FLbuHf6wmut8GTuAtEB6DimxNqi%2Bj4PvoIY6SxYutaDva%2FYvv8BRLtjb3TBRZFqVZOmAxLI1rmtIdEWjqAL7S1khNrYTjx825ITDCcNiDjV7EzDslsnLsdVJbGEb9muOES08njDuCBhX135XwhdAYi%2BS8xS3ARLJtK7134HzsmgcsX12rqC0ndDJv2QD0q2aEuFY2dwGkkCctYjAxgns7tojnqwp9KDgasXzhZHxnuf23VddZFTabl8bSYMpG14hWvlDIzfXkCdm4XYVptQyMTW1LLsHEGQ3c9Fs2l1%2FPKGl%2FpQrGqb5EpXhcKXCfjQwhsS5xAY6pgEKDWbfdofCCugSOpLsY5t%2BWwektUu1Dvw735%2FxDZRlZcKvbCfTGfnIV%2BWRl28du8qCgV%2Fj2L%2FspOdfGP1Sf6l1I0WdyHbl9dta9uScT7yPW8e8idcN3ZfR9wTs9SlXcOtYRwFnxZUALecchZMmt8OhfWG3TMZzthylYvfxlK0rToxbgx0zgNosmk8OLNDvtIb%2B9nhsuR%2BPnK1SCSpLYIielp7nTQYQ&X-Amz-Signature=eec92a2226d6dc63b9003b4c9dc80cfe522e1cb802ded923996cd1c861b59a88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K7JEM2L%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDhpUGAgCOSdFRB1bvM59pA31WtP%2BeW2wqzSZfQNjPq8AiB4i98L2MCmH%2FKSkqAyfNZm8KNsv3N6bFIBi1U0wRpl6Sr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMSU16bllyxP9tBExQKtwD56r5uKTejFFReu8GLGq2CROSm%2FTUja5H%2F0saRO0aZnmRtNEeO6%2BCQKB5hWeo7pRKpO2n%2Fdde6ZeiXJ%2F92NxMCUi64n%2F%2FtvVeoimNWQNDaChE%2FnMemCzggU5pSRDyKs6bSFSrZmdxtl0%2BYIZ8NYkzPBssa6rDYub829MlxvwhnsUz31UDd6vHDJUF2KkqmpzBmSMVQVe8wMRLbdRmtNlTqNJvsOMEt8PP8bLcQ34t3DTScBmlMaunYxr8ZeA9aBO39%2FQcNeW2F349q0cGbpO5phFzuKO%2Ba%2BSNbhC%2Bnw03DXe%2BXgHHEFjDrg8OyVYj%2FLbuHf6wmut8GTuAtEB6DimxNqi%2Bj4PvoIY6SxYutaDva%2FYvv8BRLtjb3TBRZFqVZOmAxLI1rmtIdEWjqAL7S1khNrYTjx825ITDCcNiDjV7EzDslsnLsdVJbGEb9muOES08njDuCBhX135XwhdAYi%2BS8xS3ARLJtK7134HzsmgcsX12rqC0ndDJv2QD0q2aEuFY2dwGkkCctYjAxgns7tojnqwp9KDgasXzhZHxnuf23VddZFTabl8bSYMpG14hWvlDIzfXkCdm4XYVptQyMTW1LLsHEGQ3c9Fs2l1%2FPKGl%2FpQrGqb5EpXhcKXCfjQwhsS5xAY6pgEKDWbfdofCCugSOpLsY5t%2BWwektUu1Dvw735%2FxDZRlZcKvbCfTGfnIV%2BWRl28du8qCgV%2Fj2L%2FspOdfGP1Sf6l1I0WdyHbl9dta9uScT7yPW8e8idcN3ZfR9wTs9SlXcOtYRwFnxZUALecchZMmt8OhfWG3TMZzthylYvfxlK0rToxbgx0zgNosmk8OLNDvtIb%2B9nhsuR%2BPnK1SCSpLYIielp7nTQYQ&X-Amz-Signature=96350e8d4a12f63ea7c536dd7b85898b89b99753dc83a35c4ee5a7860f6bbd38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K7JEM2L%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDhpUGAgCOSdFRB1bvM59pA31WtP%2BeW2wqzSZfQNjPq8AiB4i98L2MCmH%2FKSkqAyfNZm8KNsv3N6bFIBi1U0wRpl6Sr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMSU16bllyxP9tBExQKtwD56r5uKTejFFReu8GLGq2CROSm%2FTUja5H%2F0saRO0aZnmRtNEeO6%2BCQKB5hWeo7pRKpO2n%2Fdde6ZeiXJ%2F92NxMCUi64n%2F%2FtvVeoimNWQNDaChE%2FnMemCzggU5pSRDyKs6bSFSrZmdxtl0%2BYIZ8NYkzPBssa6rDYub829MlxvwhnsUz31UDd6vHDJUF2KkqmpzBmSMVQVe8wMRLbdRmtNlTqNJvsOMEt8PP8bLcQ34t3DTScBmlMaunYxr8ZeA9aBO39%2FQcNeW2F349q0cGbpO5phFzuKO%2Ba%2BSNbhC%2Bnw03DXe%2BXgHHEFjDrg8OyVYj%2FLbuHf6wmut8GTuAtEB6DimxNqi%2Bj4PvoIY6SxYutaDva%2FYvv8BRLtjb3TBRZFqVZOmAxLI1rmtIdEWjqAL7S1khNrYTjx825ITDCcNiDjV7EzDslsnLsdVJbGEb9muOES08njDuCBhX135XwhdAYi%2BS8xS3ARLJtK7134HzsmgcsX12rqC0ndDJv2QD0q2aEuFY2dwGkkCctYjAxgns7tojnqwp9KDgasXzhZHxnuf23VddZFTabl8bSYMpG14hWvlDIzfXkCdm4XYVptQyMTW1LLsHEGQ3c9Fs2l1%2FPKGl%2FpQrGqb5EpXhcKXCfjQwhsS5xAY6pgEKDWbfdofCCugSOpLsY5t%2BWwektUu1Dvw735%2FxDZRlZcKvbCfTGfnIV%2BWRl28du8qCgV%2Fj2L%2FspOdfGP1Sf6l1I0WdyHbl9dta9uScT7yPW8e8idcN3ZfR9wTs9SlXcOtYRwFnxZUALecchZMmt8OhfWG3TMZzthylYvfxlK0rToxbgx0zgNosmk8OLNDvtIb%2B9nhsuR%2BPnK1SCSpLYIielp7nTQYQ&X-Amz-Signature=34a3969200433937fe4666dff42b0ab6c99bebd9f4cbc6e5c2cb134768a7d1aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K7JEM2L%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDhpUGAgCOSdFRB1bvM59pA31WtP%2BeW2wqzSZfQNjPq8AiB4i98L2MCmH%2FKSkqAyfNZm8KNsv3N6bFIBi1U0wRpl6Sr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMSU16bllyxP9tBExQKtwD56r5uKTejFFReu8GLGq2CROSm%2FTUja5H%2F0saRO0aZnmRtNEeO6%2BCQKB5hWeo7pRKpO2n%2Fdde6ZeiXJ%2F92NxMCUi64n%2F%2FtvVeoimNWQNDaChE%2FnMemCzggU5pSRDyKs6bSFSrZmdxtl0%2BYIZ8NYkzPBssa6rDYub829MlxvwhnsUz31UDd6vHDJUF2KkqmpzBmSMVQVe8wMRLbdRmtNlTqNJvsOMEt8PP8bLcQ34t3DTScBmlMaunYxr8ZeA9aBO39%2FQcNeW2F349q0cGbpO5phFzuKO%2Ba%2BSNbhC%2Bnw03DXe%2BXgHHEFjDrg8OyVYj%2FLbuHf6wmut8GTuAtEB6DimxNqi%2Bj4PvoIY6SxYutaDva%2FYvv8BRLtjb3TBRZFqVZOmAxLI1rmtIdEWjqAL7S1khNrYTjx825ITDCcNiDjV7EzDslsnLsdVJbGEb9muOES08njDuCBhX135XwhdAYi%2BS8xS3ARLJtK7134HzsmgcsX12rqC0ndDJv2QD0q2aEuFY2dwGkkCctYjAxgns7tojnqwp9KDgasXzhZHxnuf23VddZFTabl8bSYMpG14hWvlDIzfXkCdm4XYVptQyMTW1LLsHEGQ3c9Fs2l1%2FPKGl%2FpQrGqb5EpXhcKXCfjQwhsS5xAY6pgEKDWbfdofCCugSOpLsY5t%2BWwektUu1Dvw735%2FxDZRlZcKvbCfTGfnIV%2BWRl28du8qCgV%2Fj2L%2FspOdfGP1Sf6l1I0WdyHbl9dta9uScT7yPW8e8idcN3ZfR9wTs9SlXcOtYRwFnxZUALecchZMmt8OhfWG3TMZzthylYvfxlK0rToxbgx0zgNosmk8OLNDvtIb%2B9nhsuR%2BPnK1SCSpLYIielp7nTQYQ&X-Amz-Signature=629dd1f77e950b71ee93dc522f6a9b292c1bf66e50983763bcbd47e8b1e29879&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K7JEM2L%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDhpUGAgCOSdFRB1bvM59pA31WtP%2BeW2wqzSZfQNjPq8AiB4i98L2MCmH%2FKSkqAyfNZm8KNsv3N6bFIBi1U0wRpl6Sr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMSU16bllyxP9tBExQKtwD56r5uKTejFFReu8GLGq2CROSm%2FTUja5H%2F0saRO0aZnmRtNEeO6%2BCQKB5hWeo7pRKpO2n%2Fdde6ZeiXJ%2F92NxMCUi64n%2F%2FtvVeoimNWQNDaChE%2FnMemCzggU5pSRDyKs6bSFSrZmdxtl0%2BYIZ8NYkzPBssa6rDYub829MlxvwhnsUz31UDd6vHDJUF2KkqmpzBmSMVQVe8wMRLbdRmtNlTqNJvsOMEt8PP8bLcQ34t3DTScBmlMaunYxr8ZeA9aBO39%2FQcNeW2F349q0cGbpO5phFzuKO%2Ba%2BSNbhC%2Bnw03DXe%2BXgHHEFjDrg8OyVYj%2FLbuHf6wmut8GTuAtEB6DimxNqi%2Bj4PvoIY6SxYutaDva%2FYvv8BRLtjb3TBRZFqVZOmAxLI1rmtIdEWjqAL7S1khNrYTjx825ITDCcNiDjV7EzDslsnLsdVJbGEb9muOES08njDuCBhX135XwhdAYi%2BS8xS3ARLJtK7134HzsmgcsX12rqC0ndDJv2QD0q2aEuFY2dwGkkCctYjAxgns7tojnqwp9KDgasXzhZHxnuf23VddZFTabl8bSYMpG14hWvlDIzfXkCdm4XYVptQyMTW1LLsHEGQ3c9Fs2l1%2FPKGl%2FpQrGqb5EpXhcKXCfjQwhsS5xAY6pgEKDWbfdofCCugSOpLsY5t%2BWwektUu1Dvw735%2FxDZRlZcKvbCfTGfnIV%2BWRl28du8qCgV%2Fj2L%2FspOdfGP1Sf6l1I0WdyHbl9dta9uScT7yPW8e8idcN3ZfR9wTs9SlXcOtYRwFnxZUALecchZMmt8OhfWG3TMZzthylYvfxlK0rToxbgx0zgNosmk8OLNDvtIb%2B9nhsuR%2BPnK1SCSpLYIielp7nTQYQ&X-Amz-Signature=0119badbb5078c69b3060fe6c2046dc902b4558ec9108f22fad0c4b394b3701b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K7JEM2L%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDhpUGAgCOSdFRB1bvM59pA31WtP%2BeW2wqzSZfQNjPq8AiB4i98L2MCmH%2FKSkqAyfNZm8KNsv3N6bFIBi1U0wRpl6Sr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMSU16bllyxP9tBExQKtwD56r5uKTejFFReu8GLGq2CROSm%2FTUja5H%2F0saRO0aZnmRtNEeO6%2BCQKB5hWeo7pRKpO2n%2Fdde6ZeiXJ%2F92NxMCUi64n%2F%2FtvVeoimNWQNDaChE%2FnMemCzggU5pSRDyKs6bSFSrZmdxtl0%2BYIZ8NYkzPBssa6rDYub829MlxvwhnsUz31UDd6vHDJUF2KkqmpzBmSMVQVe8wMRLbdRmtNlTqNJvsOMEt8PP8bLcQ34t3DTScBmlMaunYxr8ZeA9aBO39%2FQcNeW2F349q0cGbpO5phFzuKO%2Ba%2BSNbhC%2Bnw03DXe%2BXgHHEFjDrg8OyVYj%2FLbuHf6wmut8GTuAtEB6DimxNqi%2Bj4PvoIY6SxYutaDva%2FYvv8BRLtjb3TBRZFqVZOmAxLI1rmtIdEWjqAL7S1khNrYTjx825ITDCcNiDjV7EzDslsnLsdVJbGEb9muOES08njDuCBhX135XwhdAYi%2BS8xS3ARLJtK7134HzsmgcsX12rqC0ndDJv2QD0q2aEuFY2dwGkkCctYjAxgns7tojnqwp9KDgasXzhZHxnuf23VddZFTabl8bSYMpG14hWvlDIzfXkCdm4XYVptQyMTW1LLsHEGQ3c9Fs2l1%2FPKGl%2FpQrGqb5EpXhcKXCfjQwhsS5xAY6pgEKDWbfdofCCugSOpLsY5t%2BWwektUu1Dvw735%2FxDZRlZcKvbCfTGfnIV%2BWRl28du8qCgV%2Fj2L%2FspOdfGP1Sf6l1I0WdyHbl9dta9uScT7yPW8e8idcN3ZfR9wTs9SlXcOtYRwFnxZUALecchZMmt8OhfWG3TMZzthylYvfxlK0rToxbgx0zgNosmk8OLNDvtIb%2B9nhsuR%2BPnK1SCSpLYIielp7nTQYQ&X-Amz-Signature=a24d4c566b6e684ec7ec15538a5e430f1200d5af36503b69f8d811c9f4ef17b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K7JEM2L%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDhpUGAgCOSdFRB1bvM59pA31WtP%2BeW2wqzSZfQNjPq8AiB4i98L2MCmH%2FKSkqAyfNZm8KNsv3N6bFIBi1U0wRpl6Sr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMSU16bllyxP9tBExQKtwD56r5uKTejFFReu8GLGq2CROSm%2FTUja5H%2F0saRO0aZnmRtNEeO6%2BCQKB5hWeo7pRKpO2n%2Fdde6ZeiXJ%2F92NxMCUi64n%2F%2FtvVeoimNWQNDaChE%2FnMemCzggU5pSRDyKs6bSFSrZmdxtl0%2BYIZ8NYkzPBssa6rDYub829MlxvwhnsUz31UDd6vHDJUF2KkqmpzBmSMVQVe8wMRLbdRmtNlTqNJvsOMEt8PP8bLcQ34t3DTScBmlMaunYxr8ZeA9aBO39%2FQcNeW2F349q0cGbpO5phFzuKO%2Ba%2BSNbhC%2Bnw03DXe%2BXgHHEFjDrg8OyVYj%2FLbuHf6wmut8GTuAtEB6DimxNqi%2Bj4PvoIY6SxYutaDva%2FYvv8BRLtjb3TBRZFqVZOmAxLI1rmtIdEWjqAL7S1khNrYTjx825ITDCcNiDjV7EzDslsnLsdVJbGEb9muOES08njDuCBhX135XwhdAYi%2BS8xS3ARLJtK7134HzsmgcsX12rqC0ndDJv2QD0q2aEuFY2dwGkkCctYjAxgns7tojnqwp9KDgasXzhZHxnuf23VddZFTabl8bSYMpG14hWvlDIzfXkCdm4XYVptQyMTW1LLsHEGQ3c9Fs2l1%2FPKGl%2FpQrGqb5EpXhcKXCfjQwhsS5xAY6pgEKDWbfdofCCugSOpLsY5t%2BWwektUu1Dvw735%2FxDZRlZcKvbCfTGfnIV%2BWRl28du8qCgV%2Fj2L%2FspOdfGP1Sf6l1I0WdyHbl9dta9uScT7yPW8e8idcN3ZfR9wTs9SlXcOtYRwFnxZUALecchZMmt8OhfWG3TMZzthylYvfxlK0rToxbgx0zgNosmk8OLNDvtIb%2B9nhsuR%2BPnK1SCSpLYIielp7nTQYQ&X-Amz-Signature=f0b7c4676311fe95857f5907d32743df070fa79abf780ef092918991dc8aa2d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K7JEM2L%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDhpUGAgCOSdFRB1bvM59pA31WtP%2BeW2wqzSZfQNjPq8AiB4i98L2MCmH%2FKSkqAyfNZm8KNsv3N6bFIBi1U0wRpl6Sr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMSU16bllyxP9tBExQKtwD56r5uKTejFFReu8GLGq2CROSm%2FTUja5H%2F0saRO0aZnmRtNEeO6%2BCQKB5hWeo7pRKpO2n%2Fdde6ZeiXJ%2F92NxMCUi64n%2F%2FtvVeoimNWQNDaChE%2FnMemCzggU5pSRDyKs6bSFSrZmdxtl0%2BYIZ8NYkzPBssa6rDYub829MlxvwhnsUz31UDd6vHDJUF2KkqmpzBmSMVQVe8wMRLbdRmtNlTqNJvsOMEt8PP8bLcQ34t3DTScBmlMaunYxr8ZeA9aBO39%2FQcNeW2F349q0cGbpO5phFzuKO%2Ba%2BSNbhC%2Bnw03DXe%2BXgHHEFjDrg8OyVYj%2FLbuHf6wmut8GTuAtEB6DimxNqi%2Bj4PvoIY6SxYutaDva%2FYvv8BRLtjb3TBRZFqVZOmAxLI1rmtIdEWjqAL7S1khNrYTjx825ITDCcNiDjV7EzDslsnLsdVJbGEb9muOES08njDuCBhX135XwhdAYi%2BS8xS3ARLJtK7134HzsmgcsX12rqC0ndDJv2QD0q2aEuFY2dwGkkCctYjAxgns7tojnqwp9KDgasXzhZHxnuf23VddZFTabl8bSYMpG14hWvlDIzfXkCdm4XYVptQyMTW1LLsHEGQ3c9Fs2l1%2FPKGl%2FpQrGqb5EpXhcKXCfjQwhsS5xAY6pgEKDWbfdofCCugSOpLsY5t%2BWwektUu1Dvw735%2FxDZRlZcKvbCfTGfnIV%2BWRl28du8qCgV%2Fj2L%2FspOdfGP1Sf6l1I0WdyHbl9dta9uScT7yPW8e8idcN3ZfR9wTs9SlXcOtYRwFnxZUALecchZMmt8OhfWG3TMZzthylYvfxlK0rToxbgx0zgNosmk8OLNDvtIb%2B9nhsuR%2BPnK1SCSpLYIielp7nTQYQ&X-Amz-Signature=28355fd3d161cf3bb0f65c48e051ee6eddde77b0c7507dce0383744b9497a6b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K7JEM2L%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDhpUGAgCOSdFRB1bvM59pA31WtP%2BeW2wqzSZfQNjPq8AiB4i98L2MCmH%2FKSkqAyfNZm8KNsv3N6bFIBi1U0wRpl6Sr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMSU16bllyxP9tBExQKtwD56r5uKTejFFReu8GLGq2CROSm%2FTUja5H%2F0saRO0aZnmRtNEeO6%2BCQKB5hWeo7pRKpO2n%2Fdde6ZeiXJ%2F92NxMCUi64n%2F%2FtvVeoimNWQNDaChE%2FnMemCzggU5pSRDyKs6bSFSrZmdxtl0%2BYIZ8NYkzPBssa6rDYub829MlxvwhnsUz31UDd6vHDJUF2KkqmpzBmSMVQVe8wMRLbdRmtNlTqNJvsOMEt8PP8bLcQ34t3DTScBmlMaunYxr8ZeA9aBO39%2FQcNeW2F349q0cGbpO5phFzuKO%2Ba%2BSNbhC%2Bnw03DXe%2BXgHHEFjDrg8OyVYj%2FLbuHf6wmut8GTuAtEB6DimxNqi%2Bj4PvoIY6SxYutaDva%2FYvv8BRLtjb3TBRZFqVZOmAxLI1rmtIdEWjqAL7S1khNrYTjx825ITDCcNiDjV7EzDslsnLsdVJbGEb9muOES08njDuCBhX135XwhdAYi%2BS8xS3ARLJtK7134HzsmgcsX12rqC0ndDJv2QD0q2aEuFY2dwGkkCctYjAxgns7tojnqwp9KDgasXzhZHxnuf23VddZFTabl8bSYMpG14hWvlDIzfXkCdm4XYVptQyMTW1LLsHEGQ3c9Fs2l1%2FPKGl%2FpQrGqb5EpXhcKXCfjQwhsS5xAY6pgEKDWbfdofCCugSOpLsY5t%2BWwektUu1Dvw735%2FxDZRlZcKvbCfTGfnIV%2BWRl28du8qCgV%2Fj2L%2FspOdfGP1Sf6l1I0WdyHbl9dta9uScT7yPW8e8idcN3ZfR9wTs9SlXcOtYRwFnxZUALecchZMmt8OhfWG3TMZzthylYvfxlK0rToxbgx0zgNosmk8OLNDvtIb%2B9nhsuR%2BPnK1SCSpLYIielp7nTQYQ&X-Amz-Signature=8a43e764f5362b34b33081832a67c3dbcf92323b50c579207390ad08c87599ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K7JEM2L%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDhpUGAgCOSdFRB1bvM59pA31WtP%2BeW2wqzSZfQNjPq8AiB4i98L2MCmH%2FKSkqAyfNZm8KNsv3N6bFIBi1U0wRpl6Sr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMSU16bllyxP9tBExQKtwD56r5uKTejFFReu8GLGq2CROSm%2FTUja5H%2F0saRO0aZnmRtNEeO6%2BCQKB5hWeo7pRKpO2n%2Fdde6ZeiXJ%2F92NxMCUi64n%2F%2FtvVeoimNWQNDaChE%2FnMemCzggU5pSRDyKs6bSFSrZmdxtl0%2BYIZ8NYkzPBssa6rDYub829MlxvwhnsUz31UDd6vHDJUF2KkqmpzBmSMVQVe8wMRLbdRmtNlTqNJvsOMEt8PP8bLcQ34t3DTScBmlMaunYxr8ZeA9aBO39%2FQcNeW2F349q0cGbpO5phFzuKO%2Ba%2BSNbhC%2Bnw03DXe%2BXgHHEFjDrg8OyVYj%2FLbuHf6wmut8GTuAtEB6DimxNqi%2Bj4PvoIY6SxYutaDva%2FYvv8BRLtjb3TBRZFqVZOmAxLI1rmtIdEWjqAL7S1khNrYTjx825ITDCcNiDjV7EzDslsnLsdVJbGEb9muOES08njDuCBhX135XwhdAYi%2BS8xS3ARLJtK7134HzsmgcsX12rqC0ndDJv2QD0q2aEuFY2dwGkkCctYjAxgns7tojnqwp9KDgasXzhZHxnuf23VddZFTabl8bSYMpG14hWvlDIzfXkCdm4XYVptQyMTW1LLsHEGQ3c9Fs2l1%2FPKGl%2FpQrGqb5EpXhcKXCfjQwhsS5xAY6pgEKDWbfdofCCugSOpLsY5t%2BWwektUu1Dvw735%2FxDZRlZcKvbCfTGfnIV%2BWRl28du8qCgV%2Fj2L%2FspOdfGP1Sf6l1I0WdyHbl9dta9uScT7yPW8e8idcN3ZfR9wTs9SlXcOtYRwFnxZUALecchZMmt8OhfWG3TMZzthylYvfxlK0rToxbgx0zgNosmk8OLNDvtIb%2B9nhsuR%2BPnK1SCSpLYIielp7nTQYQ&X-Amz-Signature=5382e724a77532981450644ce268281441312bdab2401b86118019fd658b6c74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K7JEM2L%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDhpUGAgCOSdFRB1bvM59pA31WtP%2BeW2wqzSZfQNjPq8AiB4i98L2MCmH%2FKSkqAyfNZm8KNsv3N6bFIBi1U0wRpl6Sr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMSU16bllyxP9tBExQKtwD56r5uKTejFFReu8GLGq2CROSm%2FTUja5H%2F0saRO0aZnmRtNEeO6%2BCQKB5hWeo7pRKpO2n%2Fdde6ZeiXJ%2F92NxMCUi64n%2F%2FtvVeoimNWQNDaChE%2FnMemCzggU5pSRDyKs6bSFSrZmdxtl0%2BYIZ8NYkzPBssa6rDYub829MlxvwhnsUz31UDd6vHDJUF2KkqmpzBmSMVQVe8wMRLbdRmtNlTqNJvsOMEt8PP8bLcQ34t3DTScBmlMaunYxr8ZeA9aBO39%2FQcNeW2F349q0cGbpO5phFzuKO%2Ba%2BSNbhC%2Bnw03DXe%2BXgHHEFjDrg8OyVYj%2FLbuHf6wmut8GTuAtEB6DimxNqi%2Bj4PvoIY6SxYutaDva%2FYvv8BRLtjb3TBRZFqVZOmAxLI1rmtIdEWjqAL7S1khNrYTjx825ITDCcNiDjV7EzDslsnLsdVJbGEb9muOES08njDuCBhX135XwhdAYi%2BS8xS3ARLJtK7134HzsmgcsX12rqC0ndDJv2QD0q2aEuFY2dwGkkCctYjAxgns7tojnqwp9KDgasXzhZHxnuf23VddZFTabl8bSYMpG14hWvlDIzfXkCdm4XYVptQyMTW1LLsHEGQ3c9Fs2l1%2FPKGl%2FpQrGqb5EpXhcKXCfjQwhsS5xAY6pgEKDWbfdofCCugSOpLsY5t%2BWwektUu1Dvw735%2FxDZRlZcKvbCfTGfnIV%2BWRl28du8qCgV%2Fj2L%2FspOdfGP1Sf6l1I0WdyHbl9dta9uScT7yPW8e8idcN3ZfR9wTs9SlXcOtYRwFnxZUALecchZMmt8OhfWG3TMZzthylYvfxlK0rToxbgx0zgNosmk8OLNDvtIb%2B9nhsuR%2BPnK1SCSpLYIielp7nTQYQ&X-Amz-Signature=ed09f7234305480287a3ad389db121a713c68fa0a35c9a969844f347e5682f61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K7JEM2L%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDhpUGAgCOSdFRB1bvM59pA31WtP%2BeW2wqzSZfQNjPq8AiB4i98L2MCmH%2FKSkqAyfNZm8KNsv3N6bFIBi1U0wRpl6Sr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMSU16bllyxP9tBExQKtwD56r5uKTejFFReu8GLGq2CROSm%2FTUja5H%2F0saRO0aZnmRtNEeO6%2BCQKB5hWeo7pRKpO2n%2Fdde6ZeiXJ%2F92NxMCUi64n%2F%2FtvVeoimNWQNDaChE%2FnMemCzggU5pSRDyKs6bSFSrZmdxtl0%2BYIZ8NYkzPBssa6rDYub829MlxvwhnsUz31UDd6vHDJUF2KkqmpzBmSMVQVe8wMRLbdRmtNlTqNJvsOMEt8PP8bLcQ34t3DTScBmlMaunYxr8ZeA9aBO39%2FQcNeW2F349q0cGbpO5phFzuKO%2Ba%2BSNbhC%2Bnw03DXe%2BXgHHEFjDrg8OyVYj%2FLbuHf6wmut8GTuAtEB6DimxNqi%2Bj4PvoIY6SxYutaDva%2FYvv8BRLtjb3TBRZFqVZOmAxLI1rmtIdEWjqAL7S1khNrYTjx825ITDCcNiDjV7EzDslsnLsdVJbGEb9muOES08njDuCBhX135XwhdAYi%2BS8xS3ARLJtK7134HzsmgcsX12rqC0ndDJv2QD0q2aEuFY2dwGkkCctYjAxgns7tojnqwp9KDgasXzhZHxnuf23VddZFTabl8bSYMpG14hWvlDIzfXkCdm4XYVptQyMTW1LLsHEGQ3c9Fs2l1%2FPKGl%2FpQrGqb5EpXhcKXCfjQwhsS5xAY6pgEKDWbfdofCCugSOpLsY5t%2BWwektUu1Dvw735%2FxDZRlZcKvbCfTGfnIV%2BWRl28du8qCgV%2Fj2L%2FspOdfGP1Sf6l1I0WdyHbl9dta9uScT7yPW8e8idcN3ZfR9wTs9SlXcOtYRwFnxZUALecchZMmt8OhfWG3TMZzthylYvfxlK0rToxbgx0zgNosmk8OLNDvtIb%2B9nhsuR%2BPnK1SCSpLYIielp7nTQYQ&X-Amz-Signature=9e161f5d7d95d8b86098e13dc8ba856afc91341ce347a136395562b7dc7d353d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K7JEM2L%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDhpUGAgCOSdFRB1bvM59pA31WtP%2BeW2wqzSZfQNjPq8AiB4i98L2MCmH%2FKSkqAyfNZm8KNsv3N6bFIBi1U0wRpl6Sr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMSU16bllyxP9tBExQKtwD56r5uKTejFFReu8GLGq2CROSm%2FTUja5H%2F0saRO0aZnmRtNEeO6%2BCQKB5hWeo7pRKpO2n%2Fdde6ZeiXJ%2F92NxMCUi64n%2F%2FtvVeoimNWQNDaChE%2FnMemCzggU5pSRDyKs6bSFSrZmdxtl0%2BYIZ8NYkzPBssa6rDYub829MlxvwhnsUz31UDd6vHDJUF2KkqmpzBmSMVQVe8wMRLbdRmtNlTqNJvsOMEt8PP8bLcQ34t3DTScBmlMaunYxr8ZeA9aBO39%2FQcNeW2F349q0cGbpO5phFzuKO%2Ba%2BSNbhC%2Bnw03DXe%2BXgHHEFjDrg8OyVYj%2FLbuHf6wmut8GTuAtEB6DimxNqi%2Bj4PvoIY6SxYutaDva%2FYvv8BRLtjb3TBRZFqVZOmAxLI1rmtIdEWjqAL7S1khNrYTjx825ITDCcNiDjV7EzDslsnLsdVJbGEb9muOES08njDuCBhX135XwhdAYi%2BS8xS3ARLJtK7134HzsmgcsX12rqC0ndDJv2QD0q2aEuFY2dwGkkCctYjAxgns7tojnqwp9KDgasXzhZHxnuf23VddZFTabl8bSYMpG14hWvlDIzfXkCdm4XYVptQyMTW1LLsHEGQ3c9Fs2l1%2FPKGl%2FpQrGqb5EpXhcKXCfjQwhsS5xAY6pgEKDWbfdofCCugSOpLsY5t%2BWwektUu1Dvw735%2FxDZRlZcKvbCfTGfnIV%2BWRl28du8qCgV%2Fj2L%2FspOdfGP1Sf6l1I0WdyHbl9dta9uScT7yPW8e8idcN3ZfR9wTs9SlXcOtYRwFnxZUALecchZMmt8OhfWG3TMZzthylYvfxlK0rToxbgx0zgNosmk8OLNDvtIb%2B9nhsuR%2BPnK1SCSpLYIielp7nTQYQ&X-Amz-Signature=681b02efd016bd45e96bf996eb389ffa91177b01f7d87ad2d9888fb89a1cd256&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667K7JEM2L%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDhpUGAgCOSdFRB1bvM59pA31WtP%2BeW2wqzSZfQNjPq8AiB4i98L2MCmH%2FKSkqAyfNZm8KNsv3N6bFIBi1U0wRpl6Sr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMSU16bllyxP9tBExQKtwD56r5uKTejFFReu8GLGq2CROSm%2FTUja5H%2F0saRO0aZnmRtNEeO6%2BCQKB5hWeo7pRKpO2n%2Fdde6ZeiXJ%2F92NxMCUi64n%2F%2FtvVeoimNWQNDaChE%2FnMemCzggU5pSRDyKs6bSFSrZmdxtl0%2BYIZ8NYkzPBssa6rDYub829MlxvwhnsUz31UDd6vHDJUF2KkqmpzBmSMVQVe8wMRLbdRmtNlTqNJvsOMEt8PP8bLcQ34t3DTScBmlMaunYxr8ZeA9aBO39%2FQcNeW2F349q0cGbpO5phFzuKO%2Ba%2BSNbhC%2Bnw03DXe%2BXgHHEFjDrg8OyVYj%2FLbuHf6wmut8GTuAtEB6DimxNqi%2Bj4PvoIY6SxYutaDva%2FYvv8BRLtjb3TBRZFqVZOmAxLI1rmtIdEWjqAL7S1khNrYTjx825ITDCcNiDjV7EzDslsnLsdVJbGEb9muOES08njDuCBhX135XwhdAYi%2BS8xS3ARLJtK7134HzsmgcsX12rqC0ndDJv2QD0q2aEuFY2dwGkkCctYjAxgns7tojnqwp9KDgasXzhZHxnuf23VddZFTabl8bSYMpG14hWvlDIzfXkCdm4XYVptQyMTW1LLsHEGQ3c9Fs2l1%2FPKGl%2FpQrGqb5EpXhcKXCfjQwhsS5xAY6pgEKDWbfdofCCugSOpLsY5t%2BWwektUu1Dvw735%2FxDZRlZcKvbCfTGfnIV%2BWRl28du8qCgV%2Fj2L%2FspOdfGP1Sf6l1I0WdyHbl9dta9uScT7yPW8e8idcN3ZfR9wTs9SlXcOtYRwFnxZUALecchZMmt8OhfWG3TMZzthylYvfxlK0rToxbgx0zgNosmk8OLNDvtIb%2B9nhsuR%2BPnK1SCSpLYIielp7nTQYQ&X-Amz-Signature=c9f8f2abe5682c70b495db8535ea3ef990b6c003b90e4aba5c7914bcc4b0a3c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
