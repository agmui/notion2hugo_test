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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQPHMT4L%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBWA4b3zROSuMXw%2FHpTMnfIh6W7md3Iz8R0LBctx5IcEAiAIGJReFcVdAszG9YAH51scaUo2VQQjKKt3gQjmwBgbIir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMBetnXIlW%2FA00l381KtwDqvgN3dsOLeY8YZvmeVn%2F%2Bi8XZkwwcHxCQznfvt5p7xgeiJsxWef5DVkTFuA%2B5dP9Q0BHYYtLp6tA02Y2ApcZIrQvEo6zlT04gV3GP4Sk4A400MPSp7%2Bdtgq05wazlb3wxRIc5sdUwWbLQv8K3Vq5cyO%2FdNmsmVo3sckhdKOf3FxPSv%2BqRcrZoabxn3x5e%2FGXJF1QNcm5YA9Nz0ENKpaveA6XYS1uncQJhoQcuJDosuc5DxSc8XocrXXpEE6pSTRPBLhIR4u6RWqP1WEzXvgDBDBlSeT0g%2BOdQRIcgW9M7buRtQhe6WopHGFyQifGassHPT385K7zErbI3MB30MG%2FN%2FjGzKWj8AAX0QgQWHSviK6VZmaWEI1FDjSUUbMI1bK4HPzNBbP2PoNoZmVuw%2Bwf7aYQ9tM5tj0zg1TBCS5Jn22glz9uHAnh04muxGNJtP0yvMpIriBl9rtqNkaNQQrhJcF4o03AmZbMuCX5F6McwNYr%2BrDdzfRD1Oh75Qpq6Y0rCogyalIXyKnPJEmntsrRNr2IM7b0hGpIVgaPUng1K3iXm5JswtjDa1h6Wb5RswHl2CQiaoXk1yv1YUAI%2B2Bpn3aDfisiQExzzsrvZd5Hnj6Fx6PP%2BSkNkOQTYQAw36vQywY6pgFBT5o%2FnxG%2FsScAqRl5%2B2W2R9HhYlQ0HFTUNz7zpMpsR%2B5TwKGJyhjo7XrC%2BE9NOhEXx8%2BjXFdZJabYsoUb7eVvP%2Fwt%2FslHxKRZsMuKZDUUWB5r866CpBYvxRBrwEtwl6tblt%2BVsYPWU1KMf3v%2F%2BgHefsUtYX7JR3Fl6losujb0fpRLAqouA%2BnjkeyRIWgABIlgykpmaC7amfykHjKacxKx74xEv%2BMA&X-Amz-Signature=8b6f14488865a29c8f7abb257bd26ca50b386e7fcf2a9fa4714e8542b3448d9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQPHMT4L%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBWA4b3zROSuMXw%2FHpTMnfIh6W7md3Iz8R0LBctx5IcEAiAIGJReFcVdAszG9YAH51scaUo2VQQjKKt3gQjmwBgbIir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMBetnXIlW%2FA00l381KtwDqvgN3dsOLeY8YZvmeVn%2F%2Bi8XZkwwcHxCQznfvt5p7xgeiJsxWef5DVkTFuA%2B5dP9Q0BHYYtLp6tA02Y2ApcZIrQvEo6zlT04gV3GP4Sk4A400MPSp7%2Bdtgq05wazlb3wxRIc5sdUwWbLQv8K3Vq5cyO%2FdNmsmVo3sckhdKOf3FxPSv%2BqRcrZoabxn3x5e%2FGXJF1QNcm5YA9Nz0ENKpaveA6XYS1uncQJhoQcuJDosuc5DxSc8XocrXXpEE6pSTRPBLhIR4u6RWqP1WEzXvgDBDBlSeT0g%2BOdQRIcgW9M7buRtQhe6WopHGFyQifGassHPT385K7zErbI3MB30MG%2FN%2FjGzKWj8AAX0QgQWHSviK6VZmaWEI1FDjSUUbMI1bK4HPzNBbP2PoNoZmVuw%2Bwf7aYQ9tM5tj0zg1TBCS5Jn22glz9uHAnh04muxGNJtP0yvMpIriBl9rtqNkaNQQrhJcF4o03AmZbMuCX5F6McwNYr%2BrDdzfRD1Oh75Qpq6Y0rCogyalIXyKnPJEmntsrRNr2IM7b0hGpIVgaPUng1K3iXm5JswtjDa1h6Wb5RswHl2CQiaoXk1yv1YUAI%2B2Bpn3aDfisiQExzzsrvZd5Hnj6Fx6PP%2BSkNkOQTYQAw36vQywY6pgFBT5o%2FnxG%2FsScAqRl5%2B2W2R9HhYlQ0HFTUNz7zpMpsR%2B5TwKGJyhjo7XrC%2BE9NOhEXx8%2BjXFdZJabYsoUb7eVvP%2Fwt%2FslHxKRZsMuKZDUUWB5r866CpBYvxRBrwEtwl6tblt%2BVsYPWU1KMf3v%2F%2BgHefsUtYX7JR3Fl6losujb0fpRLAqouA%2BnjkeyRIWgABIlgykpmaC7amfykHjKacxKx74xEv%2BMA&X-Amz-Signature=8d6936fc2e08b300da037b0e8a793ac79eef3a31143e5a65fd599a6a8cfaf5f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQPHMT4L%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBWA4b3zROSuMXw%2FHpTMnfIh6W7md3Iz8R0LBctx5IcEAiAIGJReFcVdAszG9YAH51scaUo2VQQjKKt3gQjmwBgbIir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMBetnXIlW%2FA00l381KtwDqvgN3dsOLeY8YZvmeVn%2F%2Bi8XZkwwcHxCQznfvt5p7xgeiJsxWef5DVkTFuA%2B5dP9Q0BHYYtLp6tA02Y2ApcZIrQvEo6zlT04gV3GP4Sk4A400MPSp7%2Bdtgq05wazlb3wxRIc5sdUwWbLQv8K3Vq5cyO%2FdNmsmVo3sckhdKOf3FxPSv%2BqRcrZoabxn3x5e%2FGXJF1QNcm5YA9Nz0ENKpaveA6XYS1uncQJhoQcuJDosuc5DxSc8XocrXXpEE6pSTRPBLhIR4u6RWqP1WEzXvgDBDBlSeT0g%2BOdQRIcgW9M7buRtQhe6WopHGFyQifGassHPT385K7zErbI3MB30MG%2FN%2FjGzKWj8AAX0QgQWHSviK6VZmaWEI1FDjSUUbMI1bK4HPzNBbP2PoNoZmVuw%2Bwf7aYQ9tM5tj0zg1TBCS5Jn22glz9uHAnh04muxGNJtP0yvMpIriBl9rtqNkaNQQrhJcF4o03AmZbMuCX5F6McwNYr%2BrDdzfRD1Oh75Qpq6Y0rCogyalIXyKnPJEmntsrRNr2IM7b0hGpIVgaPUng1K3iXm5JswtjDa1h6Wb5RswHl2CQiaoXk1yv1YUAI%2B2Bpn3aDfisiQExzzsrvZd5Hnj6Fx6PP%2BSkNkOQTYQAw36vQywY6pgFBT5o%2FnxG%2FsScAqRl5%2B2W2R9HhYlQ0HFTUNz7zpMpsR%2B5TwKGJyhjo7XrC%2BE9NOhEXx8%2BjXFdZJabYsoUb7eVvP%2Fwt%2FslHxKRZsMuKZDUUWB5r866CpBYvxRBrwEtwl6tblt%2BVsYPWU1KMf3v%2F%2BgHefsUtYX7JR3Fl6losujb0fpRLAqouA%2BnjkeyRIWgABIlgykpmaC7amfykHjKacxKx74xEv%2BMA&X-Amz-Signature=fdcfabc4b80ce96d719fd185486d1393db6e7f40fb57b01206327cfe0f815d86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQPHMT4L%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBWA4b3zROSuMXw%2FHpTMnfIh6W7md3Iz8R0LBctx5IcEAiAIGJReFcVdAszG9YAH51scaUo2VQQjKKt3gQjmwBgbIir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMBetnXIlW%2FA00l381KtwDqvgN3dsOLeY8YZvmeVn%2F%2Bi8XZkwwcHxCQznfvt5p7xgeiJsxWef5DVkTFuA%2B5dP9Q0BHYYtLp6tA02Y2ApcZIrQvEo6zlT04gV3GP4Sk4A400MPSp7%2Bdtgq05wazlb3wxRIc5sdUwWbLQv8K3Vq5cyO%2FdNmsmVo3sckhdKOf3FxPSv%2BqRcrZoabxn3x5e%2FGXJF1QNcm5YA9Nz0ENKpaveA6XYS1uncQJhoQcuJDosuc5DxSc8XocrXXpEE6pSTRPBLhIR4u6RWqP1WEzXvgDBDBlSeT0g%2BOdQRIcgW9M7buRtQhe6WopHGFyQifGassHPT385K7zErbI3MB30MG%2FN%2FjGzKWj8AAX0QgQWHSviK6VZmaWEI1FDjSUUbMI1bK4HPzNBbP2PoNoZmVuw%2Bwf7aYQ9tM5tj0zg1TBCS5Jn22glz9uHAnh04muxGNJtP0yvMpIriBl9rtqNkaNQQrhJcF4o03AmZbMuCX5F6McwNYr%2BrDdzfRD1Oh75Qpq6Y0rCogyalIXyKnPJEmntsrRNr2IM7b0hGpIVgaPUng1K3iXm5JswtjDa1h6Wb5RswHl2CQiaoXk1yv1YUAI%2B2Bpn3aDfisiQExzzsrvZd5Hnj6Fx6PP%2BSkNkOQTYQAw36vQywY6pgFBT5o%2FnxG%2FsScAqRl5%2B2W2R9HhYlQ0HFTUNz7zpMpsR%2B5TwKGJyhjo7XrC%2BE9NOhEXx8%2BjXFdZJabYsoUb7eVvP%2Fwt%2FslHxKRZsMuKZDUUWB5r866CpBYvxRBrwEtwl6tblt%2BVsYPWU1KMf3v%2F%2BgHefsUtYX7JR3Fl6losujb0fpRLAqouA%2BnjkeyRIWgABIlgykpmaC7amfykHjKacxKx74xEv%2BMA&X-Amz-Signature=683566c820f189add208fb9715883ae9e7fb8b9c84329948db358f92e85ffce3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQPHMT4L%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBWA4b3zROSuMXw%2FHpTMnfIh6W7md3Iz8R0LBctx5IcEAiAIGJReFcVdAszG9YAH51scaUo2VQQjKKt3gQjmwBgbIir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMBetnXIlW%2FA00l381KtwDqvgN3dsOLeY8YZvmeVn%2F%2Bi8XZkwwcHxCQznfvt5p7xgeiJsxWef5DVkTFuA%2B5dP9Q0BHYYtLp6tA02Y2ApcZIrQvEo6zlT04gV3GP4Sk4A400MPSp7%2Bdtgq05wazlb3wxRIc5sdUwWbLQv8K3Vq5cyO%2FdNmsmVo3sckhdKOf3FxPSv%2BqRcrZoabxn3x5e%2FGXJF1QNcm5YA9Nz0ENKpaveA6XYS1uncQJhoQcuJDosuc5DxSc8XocrXXpEE6pSTRPBLhIR4u6RWqP1WEzXvgDBDBlSeT0g%2BOdQRIcgW9M7buRtQhe6WopHGFyQifGassHPT385K7zErbI3MB30MG%2FN%2FjGzKWj8AAX0QgQWHSviK6VZmaWEI1FDjSUUbMI1bK4HPzNBbP2PoNoZmVuw%2Bwf7aYQ9tM5tj0zg1TBCS5Jn22glz9uHAnh04muxGNJtP0yvMpIriBl9rtqNkaNQQrhJcF4o03AmZbMuCX5F6McwNYr%2BrDdzfRD1Oh75Qpq6Y0rCogyalIXyKnPJEmntsrRNr2IM7b0hGpIVgaPUng1K3iXm5JswtjDa1h6Wb5RswHl2CQiaoXk1yv1YUAI%2B2Bpn3aDfisiQExzzsrvZd5Hnj6Fx6PP%2BSkNkOQTYQAw36vQywY6pgFBT5o%2FnxG%2FsScAqRl5%2B2W2R9HhYlQ0HFTUNz7zpMpsR%2B5TwKGJyhjo7XrC%2BE9NOhEXx8%2BjXFdZJabYsoUb7eVvP%2Fwt%2FslHxKRZsMuKZDUUWB5r866CpBYvxRBrwEtwl6tblt%2BVsYPWU1KMf3v%2F%2BgHefsUtYX7JR3Fl6losujb0fpRLAqouA%2BnjkeyRIWgABIlgykpmaC7amfykHjKacxKx74xEv%2BMA&X-Amz-Signature=992624980d71b8c048709548d6bba322bc749508475137a3abe50d13880facb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQPHMT4L%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBWA4b3zROSuMXw%2FHpTMnfIh6W7md3Iz8R0LBctx5IcEAiAIGJReFcVdAszG9YAH51scaUo2VQQjKKt3gQjmwBgbIir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMBetnXIlW%2FA00l381KtwDqvgN3dsOLeY8YZvmeVn%2F%2Bi8XZkwwcHxCQznfvt5p7xgeiJsxWef5DVkTFuA%2B5dP9Q0BHYYtLp6tA02Y2ApcZIrQvEo6zlT04gV3GP4Sk4A400MPSp7%2Bdtgq05wazlb3wxRIc5sdUwWbLQv8K3Vq5cyO%2FdNmsmVo3sckhdKOf3FxPSv%2BqRcrZoabxn3x5e%2FGXJF1QNcm5YA9Nz0ENKpaveA6XYS1uncQJhoQcuJDosuc5DxSc8XocrXXpEE6pSTRPBLhIR4u6RWqP1WEzXvgDBDBlSeT0g%2BOdQRIcgW9M7buRtQhe6WopHGFyQifGassHPT385K7zErbI3MB30MG%2FN%2FjGzKWj8AAX0QgQWHSviK6VZmaWEI1FDjSUUbMI1bK4HPzNBbP2PoNoZmVuw%2Bwf7aYQ9tM5tj0zg1TBCS5Jn22glz9uHAnh04muxGNJtP0yvMpIriBl9rtqNkaNQQrhJcF4o03AmZbMuCX5F6McwNYr%2BrDdzfRD1Oh75Qpq6Y0rCogyalIXyKnPJEmntsrRNr2IM7b0hGpIVgaPUng1K3iXm5JswtjDa1h6Wb5RswHl2CQiaoXk1yv1YUAI%2B2Bpn3aDfisiQExzzsrvZd5Hnj6Fx6PP%2BSkNkOQTYQAw36vQywY6pgFBT5o%2FnxG%2FsScAqRl5%2B2W2R9HhYlQ0HFTUNz7zpMpsR%2B5TwKGJyhjo7XrC%2BE9NOhEXx8%2BjXFdZJabYsoUb7eVvP%2Fwt%2FslHxKRZsMuKZDUUWB5r866CpBYvxRBrwEtwl6tblt%2BVsYPWU1KMf3v%2F%2BgHefsUtYX7JR3Fl6losujb0fpRLAqouA%2BnjkeyRIWgABIlgykpmaC7amfykHjKacxKx74xEv%2BMA&X-Amz-Signature=c733297debaf8311c44be5205702f51b71179f303aa464c69576ec9b86a737a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQPHMT4L%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBWA4b3zROSuMXw%2FHpTMnfIh6W7md3Iz8R0LBctx5IcEAiAIGJReFcVdAszG9YAH51scaUo2VQQjKKt3gQjmwBgbIir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMBetnXIlW%2FA00l381KtwDqvgN3dsOLeY8YZvmeVn%2F%2Bi8XZkwwcHxCQznfvt5p7xgeiJsxWef5DVkTFuA%2B5dP9Q0BHYYtLp6tA02Y2ApcZIrQvEo6zlT04gV3GP4Sk4A400MPSp7%2Bdtgq05wazlb3wxRIc5sdUwWbLQv8K3Vq5cyO%2FdNmsmVo3sckhdKOf3FxPSv%2BqRcrZoabxn3x5e%2FGXJF1QNcm5YA9Nz0ENKpaveA6XYS1uncQJhoQcuJDosuc5DxSc8XocrXXpEE6pSTRPBLhIR4u6RWqP1WEzXvgDBDBlSeT0g%2BOdQRIcgW9M7buRtQhe6WopHGFyQifGassHPT385K7zErbI3MB30MG%2FN%2FjGzKWj8AAX0QgQWHSviK6VZmaWEI1FDjSUUbMI1bK4HPzNBbP2PoNoZmVuw%2Bwf7aYQ9tM5tj0zg1TBCS5Jn22glz9uHAnh04muxGNJtP0yvMpIriBl9rtqNkaNQQrhJcF4o03AmZbMuCX5F6McwNYr%2BrDdzfRD1Oh75Qpq6Y0rCogyalIXyKnPJEmntsrRNr2IM7b0hGpIVgaPUng1K3iXm5JswtjDa1h6Wb5RswHl2CQiaoXk1yv1YUAI%2B2Bpn3aDfisiQExzzsrvZd5Hnj6Fx6PP%2BSkNkOQTYQAw36vQywY6pgFBT5o%2FnxG%2FsScAqRl5%2B2W2R9HhYlQ0HFTUNz7zpMpsR%2B5TwKGJyhjo7XrC%2BE9NOhEXx8%2BjXFdZJabYsoUb7eVvP%2Fwt%2FslHxKRZsMuKZDUUWB5r866CpBYvxRBrwEtwl6tblt%2BVsYPWU1KMf3v%2F%2BgHefsUtYX7JR3Fl6losujb0fpRLAqouA%2BnjkeyRIWgABIlgykpmaC7amfykHjKacxKx74xEv%2BMA&X-Amz-Signature=73dc235e332968c970065b9350582d492bde776208873c18558e3c3c7b409530&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQPHMT4L%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBWA4b3zROSuMXw%2FHpTMnfIh6W7md3Iz8R0LBctx5IcEAiAIGJReFcVdAszG9YAH51scaUo2VQQjKKt3gQjmwBgbIir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMBetnXIlW%2FA00l381KtwDqvgN3dsOLeY8YZvmeVn%2F%2Bi8XZkwwcHxCQznfvt5p7xgeiJsxWef5DVkTFuA%2B5dP9Q0BHYYtLp6tA02Y2ApcZIrQvEo6zlT04gV3GP4Sk4A400MPSp7%2Bdtgq05wazlb3wxRIc5sdUwWbLQv8K3Vq5cyO%2FdNmsmVo3sckhdKOf3FxPSv%2BqRcrZoabxn3x5e%2FGXJF1QNcm5YA9Nz0ENKpaveA6XYS1uncQJhoQcuJDosuc5DxSc8XocrXXpEE6pSTRPBLhIR4u6RWqP1WEzXvgDBDBlSeT0g%2BOdQRIcgW9M7buRtQhe6WopHGFyQifGassHPT385K7zErbI3MB30MG%2FN%2FjGzKWj8AAX0QgQWHSviK6VZmaWEI1FDjSUUbMI1bK4HPzNBbP2PoNoZmVuw%2Bwf7aYQ9tM5tj0zg1TBCS5Jn22glz9uHAnh04muxGNJtP0yvMpIriBl9rtqNkaNQQrhJcF4o03AmZbMuCX5F6McwNYr%2BrDdzfRD1Oh75Qpq6Y0rCogyalIXyKnPJEmntsrRNr2IM7b0hGpIVgaPUng1K3iXm5JswtjDa1h6Wb5RswHl2CQiaoXk1yv1YUAI%2B2Bpn3aDfisiQExzzsrvZd5Hnj6Fx6PP%2BSkNkOQTYQAw36vQywY6pgFBT5o%2FnxG%2FsScAqRl5%2B2W2R9HhYlQ0HFTUNz7zpMpsR%2B5TwKGJyhjo7XrC%2BE9NOhEXx8%2BjXFdZJabYsoUb7eVvP%2Fwt%2FslHxKRZsMuKZDUUWB5r866CpBYvxRBrwEtwl6tblt%2BVsYPWU1KMf3v%2F%2BgHefsUtYX7JR3Fl6losujb0fpRLAqouA%2BnjkeyRIWgABIlgykpmaC7amfykHjKacxKx74xEv%2BMA&X-Amz-Signature=949ddb40d90ad5a09f031f6aeddd6294d3518bfc90b675d79f5d09d2e5f65543&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQPHMT4L%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBWA4b3zROSuMXw%2FHpTMnfIh6W7md3Iz8R0LBctx5IcEAiAIGJReFcVdAszG9YAH51scaUo2VQQjKKt3gQjmwBgbIir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMBetnXIlW%2FA00l381KtwDqvgN3dsOLeY8YZvmeVn%2F%2Bi8XZkwwcHxCQznfvt5p7xgeiJsxWef5DVkTFuA%2B5dP9Q0BHYYtLp6tA02Y2ApcZIrQvEo6zlT04gV3GP4Sk4A400MPSp7%2Bdtgq05wazlb3wxRIc5sdUwWbLQv8K3Vq5cyO%2FdNmsmVo3sckhdKOf3FxPSv%2BqRcrZoabxn3x5e%2FGXJF1QNcm5YA9Nz0ENKpaveA6XYS1uncQJhoQcuJDosuc5DxSc8XocrXXpEE6pSTRPBLhIR4u6RWqP1WEzXvgDBDBlSeT0g%2BOdQRIcgW9M7buRtQhe6WopHGFyQifGassHPT385K7zErbI3MB30MG%2FN%2FjGzKWj8AAX0QgQWHSviK6VZmaWEI1FDjSUUbMI1bK4HPzNBbP2PoNoZmVuw%2Bwf7aYQ9tM5tj0zg1TBCS5Jn22glz9uHAnh04muxGNJtP0yvMpIriBl9rtqNkaNQQrhJcF4o03AmZbMuCX5F6McwNYr%2BrDdzfRD1Oh75Qpq6Y0rCogyalIXyKnPJEmntsrRNr2IM7b0hGpIVgaPUng1K3iXm5JswtjDa1h6Wb5RswHl2CQiaoXk1yv1YUAI%2B2Bpn3aDfisiQExzzsrvZd5Hnj6Fx6PP%2BSkNkOQTYQAw36vQywY6pgFBT5o%2FnxG%2FsScAqRl5%2B2W2R9HhYlQ0HFTUNz7zpMpsR%2B5TwKGJyhjo7XrC%2BE9NOhEXx8%2BjXFdZJabYsoUb7eVvP%2Fwt%2FslHxKRZsMuKZDUUWB5r866CpBYvxRBrwEtwl6tblt%2BVsYPWU1KMf3v%2F%2BgHefsUtYX7JR3Fl6losujb0fpRLAqouA%2BnjkeyRIWgABIlgykpmaC7amfykHjKacxKx74xEv%2BMA&X-Amz-Signature=185c88198e28b9b5732465729b96dbbcbe6599c5aec21da4991686b6ba4223ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQPHMT4L%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBWA4b3zROSuMXw%2FHpTMnfIh6W7md3Iz8R0LBctx5IcEAiAIGJReFcVdAszG9YAH51scaUo2VQQjKKt3gQjmwBgbIir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMBetnXIlW%2FA00l381KtwDqvgN3dsOLeY8YZvmeVn%2F%2Bi8XZkwwcHxCQznfvt5p7xgeiJsxWef5DVkTFuA%2B5dP9Q0BHYYtLp6tA02Y2ApcZIrQvEo6zlT04gV3GP4Sk4A400MPSp7%2Bdtgq05wazlb3wxRIc5sdUwWbLQv8K3Vq5cyO%2FdNmsmVo3sckhdKOf3FxPSv%2BqRcrZoabxn3x5e%2FGXJF1QNcm5YA9Nz0ENKpaveA6XYS1uncQJhoQcuJDosuc5DxSc8XocrXXpEE6pSTRPBLhIR4u6RWqP1WEzXvgDBDBlSeT0g%2BOdQRIcgW9M7buRtQhe6WopHGFyQifGassHPT385K7zErbI3MB30MG%2FN%2FjGzKWj8AAX0QgQWHSviK6VZmaWEI1FDjSUUbMI1bK4HPzNBbP2PoNoZmVuw%2Bwf7aYQ9tM5tj0zg1TBCS5Jn22glz9uHAnh04muxGNJtP0yvMpIriBl9rtqNkaNQQrhJcF4o03AmZbMuCX5F6McwNYr%2BrDdzfRD1Oh75Qpq6Y0rCogyalIXyKnPJEmntsrRNr2IM7b0hGpIVgaPUng1K3iXm5JswtjDa1h6Wb5RswHl2CQiaoXk1yv1YUAI%2B2Bpn3aDfisiQExzzsrvZd5Hnj6Fx6PP%2BSkNkOQTYQAw36vQywY6pgFBT5o%2FnxG%2FsScAqRl5%2B2W2R9HhYlQ0HFTUNz7zpMpsR%2B5TwKGJyhjo7XrC%2BE9NOhEXx8%2BjXFdZJabYsoUb7eVvP%2Fwt%2FslHxKRZsMuKZDUUWB5r866CpBYvxRBrwEtwl6tblt%2BVsYPWU1KMf3v%2F%2BgHefsUtYX7JR3Fl6losujb0fpRLAqouA%2BnjkeyRIWgABIlgykpmaC7amfykHjKacxKx74xEv%2BMA&X-Amz-Signature=1455322520b44f60ae06e02558a5fe2ca8320f38825db6f977f68656c34ab07c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQPHMT4L%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBWA4b3zROSuMXw%2FHpTMnfIh6W7md3Iz8R0LBctx5IcEAiAIGJReFcVdAszG9YAH51scaUo2VQQjKKt3gQjmwBgbIir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMBetnXIlW%2FA00l381KtwDqvgN3dsOLeY8YZvmeVn%2F%2Bi8XZkwwcHxCQznfvt5p7xgeiJsxWef5DVkTFuA%2B5dP9Q0BHYYtLp6tA02Y2ApcZIrQvEo6zlT04gV3GP4Sk4A400MPSp7%2Bdtgq05wazlb3wxRIc5sdUwWbLQv8K3Vq5cyO%2FdNmsmVo3sckhdKOf3FxPSv%2BqRcrZoabxn3x5e%2FGXJF1QNcm5YA9Nz0ENKpaveA6XYS1uncQJhoQcuJDosuc5DxSc8XocrXXpEE6pSTRPBLhIR4u6RWqP1WEzXvgDBDBlSeT0g%2BOdQRIcgW9M7buRtQhe6WopHGFyQifGassHPT385K7zErbI3MB30MG%2FN%2FjGzKWj8AAX0QgQWHSviK6VZmaWEI1FDjSUUbMI1bK4HPzNBbP2PoNoZmVuw%2Bwf7aYQ9tM5tj0zg1TBCS5Jn22glz9uHAnh04muxGNJtP0yvMpIriBl9rtqNkaNQQrhJcF4o03AmZbMuCX5F6McwNYr%2BrDdzfRD1Oh75Qpq6Y0rCogyalIXyKnPJEmntsrRNr2IM7b0hGpIVgaPUng1K3iXm5JswtjDa1h6Wb5RswHl2CQiaoXk1yv1YUAI%2B2Bpn3aDfisiQExzzsrvZd5Hnj6Fx6PP%2BSkNkOQTYQAw36vQywY6pgFBT5o%2FnxG%2FsScAqRl5%2B2W2R9HhYlQ0HFTUNz7zpMpsR%2B5TwKGJyhjo7XrC%2BE9NOhEXx8%2BjXFdZJabYsoUb7eVvP%2Fwt%2FslHxKRZsMuKZDUUWB5r866CpBYvxRBrwEtwl6tblt%2BVsYPWU1KMf3v%2F%2BgHefsUtYX7JR3Fl6losujb0fpRLAqouA%2BnjkeyRIWgABIlgykpmaC7amfykHjKacxKx74xEv%2BMA&X-Amz-Signature=b0ee5790887555fbfca4c787f56239b7d7c06a747c4a12c556def0c3b3ae0eb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQPHMT4L%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBWA4b3zROSuMXw%2FHpTMnfIh6W7md3Iz8R0LBctx5IcEAiAIGJReFcVdAszG9YAH51scaUo2VQQjKKt3gQjmwBgbIir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMBetnXIlW%2FA00l381KtwDqvgN3dsOLeY8YZvmeVn%2F%2Bi8XZkwwcHxCQznfvt5p7xgeiJsxWef5DVkTFuA%2B5dP9Q0BHYYtLp6tA02Y2ApcZIrQvEo6zlT04gV3GP4Sk4A400MPSp7%2Bdtgq05wazlb3wxRIc5sdUwWbLQv8K3Vq5cyO%2FdNmsmVo3sckhdKOf3FxPSv%2BqRcrZoabxn3x5e%2FGXJF1QNcm5YA9Nz0ENKpaveA6XYS1uncQJhoQcuJDosuc5DxSc8XocrXXpEE6pSTRPBLhIR4u6RWqP1WEzXvgDBDBlSeT0g%2BOdQRIcgW9M7buRtQhe6WopHGFyQifGassHPT385K7zErbI3MB30MG%2FN%2FjGzKWj8AAX0QgQWHSviK6VZmaWEI1FDjSUUbMI1bK4HPzNBbP2PoNoZmVuw%2Bwf7aYQ9tM5tj0zg1TBCS5Jn22glz9uHAnh04muxGNJtP0yvMpIriBl9rtqNkaNQQrhJcF4o03AmZbMuCX5F6McwNYr%2BrDdzfRD1Oh75Qpq6Y0rCogyalIXyKnPJEmntsrRNr2IM7b0hGpIVgaPUng1K3iXm5JswtjDa1h6Wb5RswHl2CQiaoXk1yv1YUAI%2B2Bpn3aDfisiQExzzsrvZd5Hnj6Fx6PP%2BSkNkOQTYQAw36vQywY6pgFBT5o%2FnxG%2FsScAqRl5%2B2W2R9HhYlQ0HFTUNz7zpMpsR%2B5TwKGJyhjo7XrC%2BE9NOhEXx8%2BjXFdZJabYsoUb7eVvP%2Fwt%2FslHxKRZsMuKZDUUWB5r866CpBYvxRBrwEtwl6tblt%2BVsYPWU1KMf3v%2F%2BgHefsUtYX7JR3Fl6losujb0fpRLAqouA%2BnjkeyRIWgABIlgykpmaC7amfykHjKacxKx74xEv%2BMA&X-Amz-Signature=69e52576b061b2d840ffb79c1555b55d6a17007d6864acfb1b739b84b2e7aa07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQPHMT4L%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBWA4b3zROSuMXw%2FHpTMnfIh6W7md3Iz8R0LBctx5IcEAiAIGJReFcVdAszG9YAH51scaUo2VQQjKKt3gQjmwBgbIir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMBetnXIlW%2FA00l381KtwDqvgN3dsOLeY8YZvmeVn%2F%2Bi8XZkwwcHxCQznfvt5p7xgeiJsxWef5DVkTFuA%2B5dP9Q0BHYYtLp6tA02Y2ApcZIrQvEo6zlT04gV3GP4Sk4A400MPSp7%2Bdtgq05wazlb3wxRIc5sdUwWbLQv8K3Vq5cyO%2FdNmsmVo3sckhdKOf3FxPSv%2BqRcrZoabxn3x5e%2FGXJF1QNcm5YA9Nz0ENKpaveA6XYS1uncQJhoQcuJDosuc5DxSc8XocrXXpEE6pSTRPBLhIR4u6RWqP1WEzXvgDBDBlSeT0g%2BOdQRIcgW9M7buRtQhe6WopHGFyQifGassHPT385K7zErbI3MB30MG%2FN%2FjGzKWj8AAX0QgQWHSviK6VZmaWEI1FDjSUUbMI1bK4HPzNBbP2PoNoZmVuw%2Bwf7aYQ9tM5tj0zg1TBCS5Jn22glz9uHAnh04muxGNJtP0yvMpIriBl9rtqNkaNQQrhJcF4o03AmZbMuCX5F6McwNYr%2BrDdzfRD1Oh75Qpq6Y0rCogyalIXyKnPJEmntsrRNr2IM7b0hGpIVgaPUng1K3iXm5JswtjDa1h6Wb5RswHl2CQiaoXk1yv1YUAI%2B2Bpn3aDfisiQExzzsrvZd5Hnj6Fx6PP%2BSkNkOQTYQAw36vQywY6pgFBT5o%2FnxG%2FsScAqRl5%2B2W2R9HhYlQ0HFTUNz7zpMpsR%2B5TwKGJyhjo7XrC%2BE9NOhEXx8%2BjXFdZJabYsoUb7eVvP%2Fwt%2FslHxKRZsMuKZDUUWB5r866CpBYvxRBrwEtwl6tblt%2BVsYPWU1KMf3v%2F%2BgHefsUtYX7JR3Fl6losujb0fpRLAqouA%2BnjkeyRIWgABIlgykpmaC7amfykHjKacxKx74xEv%2BMA&X-Amz-Signature=14f30fd5e7fa0fb2b384d235189fe9df2e1900531969bcb84c06c3284d8279f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQPHMT4L%2F20260124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260124T014539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBWA4b3zROSuMXw%2FHpTMnfIh6W7md3Iz8R0LBctx5IcEAiAIGJReFcVdAszG9YAH51scaUo2VQQjKKt3gQjmwBgbIir%2FAwgCEAAaDDYzNzQyMzE4MzgwNSIMBetnXIlW%2FA00l381KtwDqvgN3dsOLeY8YZvmeVn%2F%2Bi8XZkwwcHxCQznfvt5p7xgeiJsxWef5DVkTFuA%2B5dP9Q0BHYYtLp6tA02Y2ApcZIrQvEo6zlT04gV3GP4Sk4A400MPSp7%2Bdtgq05wazlb3wxRIc5sdUwWbLQv8K3Vq5cyO%2FdNmsmVo3sckhdKOf3FxPSv%2BqRcrZoabxn3x5e%2FGXJF1QNcm5YA9Nz0ENKpaveA6XYS1uncQJhoQcuJDosuc5DxSc8XocrXXpEE6pSTRPBLhIR4u6RWqP1WEzXvgDBDBlSeT0g%2BOdQRIcgW9M7buRtQhe6WopHGFyQifGassHPT385K7zErbI3MB30MG%2FN%2FjGzKWj8AAX0QgQWHSviK6VZmaWEI1FDjSUUbMI1bK4HPzNBbP2PoNoZmVuw%2Bwf7aYQ9tM5tj0zg1TBCS5Jn22glz9uHAnh04muxGNJtP0yvMpIriBl9rtqNkaNQQrhJcF4o03AmZbMuCX5F6McwNYr%2BrDdzfRD1Oh75Qpq6Y0rCogyalIXyKnPJEmntsrRNr2IM7b0hGpIVgaPUng1K3iXm5JswtjDa1h6Wb5RswHl2CQiaoXk1yv1YUAI%2B2Bpn3aDfisiQExzzsrvZd5Hnj6Fx6PP%2BSkNkOQTYQAw36vQywY6pgFBT5o%2FnxG%2FsScAqRl5%2B2W2R9HhYlQ0HFTUNz7zpMpsR%2B5TwKGJyhjo7XrC%2BE9NOhEXx8%2BjXFdZJabYsoUb7eVvP%2Fwt%2FslHxKRZsMuKZDUUWB5r866CpBYvxRBrwEtwl6tblt%2BVsYPWU1KMf3v%2F%2BgHefsUtYX7JR3Fl6losujb0fpRLAqouA%2BnjkeyRIWgABIlgykpmaC7amfykHjKacxKx74xEv%2BMA&X-Amz-Signature=2f5cf588f5ff5f48dc05b25dcff037dc6bf4c47a4ab98db55a4f494a15355e0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
