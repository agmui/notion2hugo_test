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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667INKJYS4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLNVOUKRvTnWxuTO3mTYyKh3GT3geNOxTmNj2AsI%2B0rwIgBzow2AzNelMPysO8hlELnNk%2FPtDmOOjS03nq%2Ft9iagEq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDIPBLG4L2IBO4eWEhSrcA%2BgFPKhmDm5s%2Bf4fcT5mgc8bec767XAp3CO1GoWc1ljKyUrYzAVetFO3ZsxKgEZMhfvgAd%2B0%2Bkhdm42t9prgGk8kIj5EkoFnqWgvWtitNprVuOpHDRxfQFwB%2FKxwLXmseZi87CqePQUzo%2Bi1Fgnx86kNbJRrMQLDuf5mndt5An%2BDzw8V%2FEXGLBZG8GOWtSGpC5eJO2yjG1VgeXeSGDJZLje3gGEb9tD2uUY1u4P3WnfiPd9%2BLSKhY6r9gbrelG%2FlS52tH%2BcHdgJGO%2BDf3TdAboE2bMyK%2BuIoYWFooiakQx%2FpH9EAEsQ657pyHaBDMW2ydtuue%2F64lpnWQwMx0pSmTJ62mJkKqtKxuSgI5zKK4JpQbAsf6VHro8iPhAj%2BqkEi1ne8vjLJLOVTYdMTkxg0x46GTbsRCMSN7pIxP8cwTriQqFahKIYt0JWY43%2BZqQBEd3mIPmdbIJq1vf34djNccYd5M29t9BYJlOl8nltRDxyyR4KAcSaC%2BQ0wQhwtpNSNQ7bxK2DDR%2FPnTuMCb34RcWw7DsNhVrI5k%2FL8i%2B1bit5kr6diht%2BQR6upki1i%2FBTbcuHCUFl0HR5JcBcWp2DmYoaTm62nv71f9FtQgzK7uhB%2F6rWoBU0b3cgEgoYxMJeBusQGOqUBv9ImyRn7Gc8ISqUEfbY5APhkfI0iU%2FdRiNMfvkEh7sobjAQGLJZKhyiMa7Z7wEcSklqkC90f8jHphs28gTlOU91RgmWkafrgABPWIYi41oQ5%2BiaxWUEaYNd58iyZfGSQlQUAV2PFnzRgEZiPoNChFeCsOfmpkGZQXK7VHBmQF0Hz7W%2BjFZQQSGRs4Z%2BdjHU9iv6Fc6uWmfKEhwGRMLF2hSVwvi0X&X-Amz-Signature=e21b442988e3b810843901e59dc8f1bd89b2f6593f8bc25406968804cd65262a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667INKJYS4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLNVOUKRvTnWxuTO3mTYyKh3GT3geNOxTmNj2AsI%2B0rwIgBzow2AzNelMPysO8hlELnNk%2FPtDmOOjS03nq%2Ft9iagEq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDIPBLG4L2IBO4eWEhSrcA%2BgFPKhmDm5s%2Bf4fcT5mgc8bec767XAp3CO1GoWc1ljKyUrYzAVetFO3ZsxKgEZMhfvgAd%2B0%2Bkhdm42t9prgGk8kIj5EkoFnqWgvWtitNprVuOpHDRxfQFwB%2FKxwLXmseZi87CqePQUzo%2Bi1Fgnx86kNbJRrMQLDuf5mndt5An%2BDzw8V%2FEXGLBZG8GOWtSGpC5eJO2yjG1VgeXeSGDJZLje3gGEb9tD2uUY1u4P3WnfiPd9%2BLSKhY6r9gbrelG%2FlS52tH%2BcHdgJGO%2BDf3TdAboE2bMyK%2BuIoYWFooiakQx%2FpH9EAEsQ657pyHaBDMW2ydtuue%2F64lpnWQwMx0pSmTJ62mJkKqtKxuSgI5zKK4JpQbAsf6VHro8iPhAj%2BqkEi1ne8vjLJLOVTYdMTkxg0x46GTbsRCMSN7pIxP8cwTriQqFahKIYt0JWY43%2BZqQBEd3mIPmdbIJq1vf34djNccYd5M29t9BYJlOl8nltRDxyyR4KAcSaC%2BQ0wQhwtpNSNQ7bxK2DDR%2FPnTuMCb34RcWw7DsNhVrI5k%2FL8i%2B1bit5kr6diht%2BQR6upki1i%2FBTbcuHCUFl0HR5JcBcWp2DmYoaTm62nv71f9FtQgzK7uhB%2F6rWoBU0b3cgEgoYxMJeBusQGOqUBv9ImyRn7Gc8ISqUEfbY5APhkfI0iU%2FdRiNMfvkEh7sobjAQGLJZKhyiMa7Z7wEcSklqkC90f8jHphs28gTlOU91RgmWkafrgABPWIYi41oQ5%2BiaxWUEaYNd58iyZfGSQlQUAV2PFnzRgEZiPoNChFeCsOfmpkGZQXK7VHBmQF0Hz7W%2BjFZQQSGRs4Z%2BdjHU9iv6Fc6uWmfKEhwGRMLF2hSVwvi0X&X-Amz-Signature=216ca4864249828409b42cbb749d79f1ce82c6890879bfc8e23971b8da707bd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667INKJYS4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLNVOUKRvTnWxuTO3mTYyKh3GT3geNOxTmNj2AsI%2B0rwIgBzow2AzNelMPysO8hlELnNk%2FPtDmOOjS03nq%2Ft9iagEq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDIPBLG4L2IBO4eWEhSrcA%2BgFPKhmDm5s%2Bf4fcT5mgc8bec767XAp3CO1GoWc1ljKyUrYzAVetFO3ZsxKgEZMhfvgAd%2B0%2Bkhdm42t9prgGk8kIj5EkoFnqWgvWtitNprVuOpHDRxfQFwB%2FKxwLXmseZi87CqePQUzo%2Bi1Fgnx86kNbJRrMQLDuf5mndt5An%2BDzw8V%2FEXGLBZG8GOWtSGpC5eJO2yjG1VgeXeSGDJZLje3gGEb9tD2uUY1u4P3WnfiPd9%2BLSKhY6r9gbrelG%2FlS52tH%2BcHdgJGO%2BDf3TdAboE2bMyK%2BuIoYWFooiakQx%2FpH9EAEsQ657pyHaBDMW2ydtuue%2F64lpnWQwMx0pSmTJ62mJkKqtKxuSgI5zKK4JpQbAsf6VHro8iPhAj%2BqkEi1ne8vjLJLOVTYdMTkxg0x46GTbsRCMSN7pIxP8cwTriQqFahKIYt0JWY43%2BZqQBEd3mIPmdbIJq1vf34djNccYd5M29t9BYJlOl8nltRDxyyR4KAcSaC%2BQ0wQhwtpNSNQ7bxK2DDR%2FPnTuMCb34RcWw7DsNhVrI5k%2FL8i%2B1bit5kr6diht%2BQR6upki1i%2FBTbcuHCUFl0HR5JcBcWp2DmYoaTm62nv71f9FtQgzK7uhB%2F6rWoBU0b3cgEgoYxMJeBusQGOqUBv9ImyRn7Gc8ISqUEfbY5APhkfI0iU%2FdRiNMfvkEh7sobjAQGLJZKhyiMa7Z7wEcSklqkC90f8jHphs28gTlOU91RgmWkafrgABPWIYi41oQ5%2BiaxWUEaYNd58iyZfGSQlQUAV2PFnzRgEZiPoNChFeCsOfmpkGZQXK7VHBmQF0Hz7W%2BjFZQQSGRs4Z%2BdjHU9iv6Fc6uWmfKEhwGRMLF2hSVwvi0X&X-Amz-Signature=55c47110805af600ac88d50f231828db32f8ec761e1f4458965af556a7a115e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667INKJYS4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLNVOUKRvTnWxuTO3mTYyKh3GT3geNOxTmNj2AsI%2B0rwIgBzow2AzNelMPysO8hlELnNk%2FPtDmOOjS03nq%2Ft9iagEq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDIPBLG4L2IBO4eWEhSrcA%2BgFPKhmDm5s%2Bf4fcT5mgc8bec767XAp3CO1GoWc1ljKyUrYzAVetFO3ZsxKgEZMhfvgAd%2B0%2Bkhdm42t9prgGk8kIj5EkoFnqWgvWtitNprVuOpHDRxfQFwB%2FKxwLXmseZi87CqePQUzo%2Bi1Fgnx86kNbJRrMQLDuf5mndt5An%2BDzw8V%2FEXGLBZG8GOWtSGpC5eJO2yjG1VgeXeSGDJZLje3gGEb9tD2uUY1u4P3WnfiPd9%2BLSKhY6r9gbrelG%2FlS52tH%2BcHdgJGO%2BDf3TdAboE2bMyK%2BuIoYWFooiakQx%2FpH9EAEsQ657pyHaBDMW2ydtuue%2F64lpnWQwMx0pSmTJ62mJkKqtKxuSgI5zKK4JpQbAsf6VHro8iPhAj%2BqkEi1ne8vjLJLOVTYdMTkxg0x46GTbsRCMSN7pIxP8cwTriQqFahKIYt0JWY43%2BZqQBEd3mIPmdbIJq1vf34djNccYd5M29t9BYJlOl8nltRDxyyR4KAcSaC%2BQ0wQhwtpNSNQ7bxK2DDR%2FPnTuMCb34RcWw7DsNhVrI5k%2FL8i%2B1bit5kr6diht%2BQR6upki1i%2FBTbcuHCUFl0HR5JcBcWp2DmYoaTm62nv71f9FtQgzK7uhB%2F6rWoBU0b3cgEgoYxMJeBusQGOqUBv9ImyRn7Gc8ISqUEfbY5APhkfI0iU%2FdRiNMfvkEh7sobjAQGLJZKhyiMa7Z7wEcSklqkC90f8jHphs28gTlOU91RgmWkafrgABPWIYi41oQ5%2BiaxWUEaYNd58iyZfGSQlQUAV2PFnzRgEZiPoNChFeCsOfmpkGZQXK7VHBmQF0Hz7W%2BjFZQQSGRs4Z%2BdjHU9iv6Fc6uWmfKEhwGRMLF2hSVwvi0X&X-Amz-Signature=5dc30284896b5cb1465169caf711fa73d33e839535ca0c18e863d5923dc87000&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667INKJYS4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLNVOUKRvTnWxuTO3mTYyKh3GT3geNOxTmNj2AsI%2B0rwIgBzow2AzNelMPysO8hlELnNk%2FPtDmOOjS03nq%2Ft9iagEq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDIPBLG4L2IBO4eWEhSrcA%2BgFPKhmDm5s%2Bf4fcT5mgc8bec767XAp3CO1GoWc1ljKyUrYzAVetFO3ZsxKgEZMhfvgAd%2B0%2Bkhdm42t9prgGk8kIj5EkoFnqWgvWtitNprVuOpHDRxfQFwB%2FKxwLXmseZi87CqePQUzo%2Bi1Fgnx86kNbJRrMQLDuf5mndt5An%2BDzw8V%2FEXGLBZG8GOWtSGpC5eJO2yjG1VgeXeSGDJZLje3gGEb9tD2uUY1u4P3WnfiPd9%2BLSKhY6r9gbrelG%2FlS52tH%2BcHdgJGO%2BDf3TdAboE2bMyK%2BuIoYWFooiakQx%2FpH9EAEsQ657pyHaBDMW2ydtuue%2F64lpnWQwMx0pSmTJ62mJkKqtKxuSgI5zKK4JpQbAsf6VHro8iPhAj%2BqkEi1ne8vjLJLOVTYdMTkxg0x46GTbsRCMSN7pIxP8cwTriQqFahKIYt0JWY43%2BZqQBEd3mIPmdbIJq1vf34djNccYd5M29t9BYJlOl8nltRDxyyR4KAcSaC%2BQ0wQhwtpNSNQ7bxK2DDR%2FPnTuMCb34RcWw7DsNhVrI5k%2FL8i%2B1bit5kr6diht%2BQR6upki1i%2FBTbcuHCUFl0HR5JcBcWp2DmYoaTm62nv71f9FtQgzK7uhB%2F6rWoBU0b3cgEgoYxMJeBusQGOqUBv9ImyRn7Gc8ISqUEfbY5APhkfI0iU%2FdRiNMfvkEh7sobjAQGLJZKhyiMa7Z7wEcSklqkC90f8jHphs28gTlOU91RgmWkafrgABPWIYi41oQ5%2BiaxWUEaYNd58iyZfGSQlQUAV2PFnzRgEZiPoNChFeCsOfmpkGZQXK7VHBmQF0Hz7W%2BjFZQQSGRs4Z%2BdjHU9iv6Fc6uWmfKEhwGRMLF2hSVwvi0X&X-Amz-Signature=60d39e8243553bce1ea2047786cd1b06da41c8df086f6015aa22549b50e8aef2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667INKJYS4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLNVOUKRvTnWxuTO3mTYyKh3GT3geNOxTmNj2AsI%2B0rwIgBzow2AzNelMPysO8hlELnNk%2FPtDmOOjS03nq%2Ft9iagEq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDIPBLG4L2IBO4eWEhSrcA%2BgFPKhmDm5s%2Bf4fcT5mgc8bec767XAp3CO1GoWc1ljKyUrYzAVetFO3ZsxKgEZMhfvgAd%2B0%2Bkhdm42t9prgGk8kIj5EkoFnqWgvWtitNprVuOpHDRxfQFwB%2FKxwLXmseZi87CqePQUzo%2Bi1Fgnx86kNbJRrMQLDuf5mndt5An%2BDzw8V%2FEXGLBZG8GOWtSGpC5eJO2yjG1VgeXeSGDJZLje3gGEb9tD2uUY1u4P3WnfiPd9%2BLSKhY6r9gbrelG%2FlS52tH%2BcHdgJGO%2BDf3TdAboE2bMyK%2BuIoYWFooiakQx%2FpH9EAEsQ657pyHaBDMW2ydtuue%2F64lpnWQwMx0pSmTJ62mJkKqtKxuSgI5zKK4JpQbAsf6VHro8iPhAj%2BqkEi1ne8vjLJLOVTYdMTkxg0x46GTbsRCMSN7pIxP8cwTriQqFahKIYt0JWY43%2BZqQBEd3mIPmdbIJq1vf34djNccYd5M29t9BYJlOl8nltRDxyyR4KAcSaC%2BQ0wQhwtpNSNQ7bxK2DDR%2FPnTuMCb34RcWw7DsNhVrI5k%2FL8i%2B1bit5kr6diht%2BQR6upki1i%2FBTbcuHCUFl0HR5JcBcWp2DmYoaTm62nv71f9FtQgzK7uhB%2F6rWoBU0b3cgEgoYxMJeBusQGOqUBv9ImyRn7Gc8ISqUEfbY5APhkfI0iU%2FdRiNMfvkEh7sobjAQGLJZKhyiMa7Z7wEcSklqkC90f8jHphs28gTlOU91RgmWkafrgABPWIYi41oQ5%2BiaxWUEaYNd58iyZfGSQlQUAV2PFnzRgEZiPoNChFeCsOfmpkGZQXK7VHBmQF0Hz7W%2BjFZQQSGRs4Z%2BdjHU9iv6Fc6uWmfKEhwGRMLF2hSVwvi0X&X-Amz-Signature=8835c9344cb90c933a50e17491207b5e2ebb80f2edcfe3a1737d41360e5f6ac8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667INKJYS4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLNVOUKRvTnWxuTO3mTYyKh3GT3geNOxTmNj2AsI%2B0rwIgBzow2AzNelMPysO8hlELnNk%2FPtDmOOjS03nq%2Ft9iagEq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDIPBLG4L2IBO4eWEhSrcA%2BgFPKhmDm5s%2Bf4fcT5mgc8bec767XAp3CO1GoWc1ljKyUrYzAVetFO3ZsxKgEZMhfvgAd%2B0%2Bkhdm42t9prgGk8kIj5EkoFnqWgvWtitNprVuOpHDRxfQFwB%2FKxwLXmseZi87CqePQUzo%2Bi1Fgnx86kNbJRrMQLDuf5mndt5An%2BDzw8V%2FEXGLBZG8GOWtSGpC5eJO2yjG1VgeXeSGDJZLje3gGEb9tD2uUY1u4P3WnfiPd9%2BLSKhY6r9gbrelG%2FlS52tH%2BcHdgJGO%2BDf3TdAboE2bMyK%2BuIoYWFooiakQx%2FpH9EAEsQ657pyHaBDMW2ydtuue%2F64lpnWQwMx0pSmTJ62mJkKqtKxuSgI5zKK4JpQbAsf6VHro8iPhAj%2BqkEi1ne8vjLJLOVTYdMTkxg0x46GTbsRCMSN7pIxP8cwTriQqFahKIYt0JWY43%2BZqQBEd3mIPmdbIJq1vf34djNccYd5M29t9BYJlOl8nltRDxyyR4KAcSaC%2BQ0wQhwtpNSNQ7bxK2DDR%2FPnTuMCb34RcWw7DsNhVrI5k%2FL8i%2B1bit5kr6diht%2BQR6upki1i%2FBTbcuHCUFl0HR5JcBcWp2DmYoaTm62nv71f9FtQgzK7uhB%2F6rWoBU0b3cgEgoYxMJeBusQGOqUBv9ImyRn7Gc8ISqUEfbY5APhkfI0iU%2FdRiNMfvkEh7sobjAQGLJZKhyiMa7Z7wEcSklqkC90f8jHphs28gTlOU91RgmWkafrgABPWIYi41oQ5%2BiaxWUEaYNd58iyZfGSQlQUAV2PFnzRgEZiPoNChFeCsOfmpkGZQXK7VHBmQF0Hz7W%2BjFZQQSGRs4Z%2BdjHU9iv6Fc6uWmfKEhwGRMLF2hSVwvi0X&X-Amz-Signature=3f394ab3b4777fb2230bb388bd77cd790b6c4580dd2bba8022d2059d306e3151&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667INKJYS4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLNVOUKRvTnWxuTO3mTYyKh3GT3geNOxTmNj2AsI%2B0rwIgBzow2AzNelMPysO8hlELnNk%2FPtDmOOjS03nq%2Ft9iagEq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDIPBLG4L2IBO4eWEhSrcA%2BgFPKhmDm5s%2Bf4fcT5mgc8bec767XAp3CO1GoWc1ljKyUrYzAVetFO3ZsxKgEZMhfvgAd%2B0%2Bkhdm42t9prgGk8kIj5EkoFnqWgvWtitNprVuOpHDRxfQFwB%2FKxwLXmseZi87CqePQUzo%2Bi1Fgnx86kNbJRrMQLDuf5mndt5An%2BDzw8V%2FEXGLBZG8GOWtSGpC5eJO2yjG1VgeXeSGDJZLje3gGEb9tD2uUY1u4P3WnfiPd9%2BLSKhY6r9gbrelG%2FlS52tH%2BcHdgJGO%2BDf3TdAboE2bMyK%2BuIoYWFooiakQx%2FpH9EAEsQ657pyHaBDMW2ydtuue%2F64lpnWQwMx0pSmTJ62mJkKqtKxuSgI5zKK4JpQbAsf6VHro8iPhAj%2BqkEi1ne8vjLJLOVTYdMTkxg0x46GTbsRCMSN7pIxP8cwTriQqFahKIYt0JWY43%2BZqQBEd3mIPmdbIJq1vf34djNccYd5M29t9BYJlOl8nltRDxyyR4KAcSaC%2BQ0wQhwtpNSNQ7bxK2DDR%2FPnTuMCb34RcWw7DsNhVrI5k%2FL8i%2B1bit5kr6diht%2BQR6upki1i%2FBTbcuHCUFl0HR5JcBcWp2DmYoaTm62nv71f9FtQgzK7uhB%2F6rWoBU0b3cgEgoYxMJeBusQGOqUBv9ImyRn7Gc8ISqUEfbY5APhkfI0iU%2FdRiNMfvkEh7sobjAQGLJZKhyiMa7Z7wEcSklqkC90f8jHphs28gTlOU91RgmWkafrgABPWIYi41oQ5%2BiaxWUEaYNd58iyZfGSQlQUAV2PFnzRgEZiPoNChFeCsOfmpkGZQXK7VHBmQF0Hz7W%2BjFZQQSGRs4Z%2BdjHU9iv6Fc6uWmfKEhwGRMLF2hSVwvi0X&X-Amz-Signature=c418cda0477bd87cb4f39768d86006f129c7a9db6384527b135863e72cdf47e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667INKJYS4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLNVOUKRvTnWxuTO3mTYyKh3GT3geNOxTmNj2AsI%2B0rwIgBzow2AzNelMPysO8hlELnNk%2FPtDmOOjS03nq%2Ft9iagEq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDIPBLG4L2IBO4eWEhSrcA%2BgFPKhmDm5s%2Bf4fcT5mgc8bec767XAp3CO1GoWc1ljKyUrYzAVetFO3ZsxKgEZMhfvgAd%2B0%2Bkhdm42t9prgGk8kIj5EkoFnqWgvWtitNprVuOpHDRxfQFwB%2FKxwLXmseZi87CqePQUzo%2Bi1Fgnx86kNbJRrMQLDuf5mndt5An%2BDzw8V%2FEXGLBZG8GOWtSGpC5eJO2yjG1VgeXeSGDJZLje3gGEb9tD2uUY1u4P3WnfiPd9%2BLSKhY6r9gbrelG%2FlS52tH%2BcHdgJGO%2BDf3TdAboE2bMyK%2BuIoYWFooiakQx%2FpH9EAEsQ657pyHaBDMW2ydtuue%2F64lpnWQwMx0pSmTJ62mJkKqtKxuSgI5zKK4JpQbAsf6VHro8iPhAj%2BqkEi1ne8vjLJLOVTYdMTkxg0x46GTbsRCMSN7pIxP8cwTriQqFahKIYt0JWY43%2BZqQBEd3mIPmdbIJq1vf34djNccYd5M29t9BYJlOl8nltRDxyyR4KAcSaC%2BQ0wQhwtpNSNQ7bxK2DDR%2FPnTuMCb34RcWw7DsNhVrI5k%2FL8i%2B1bit5kr6diht%2BQR6upki1i%2FBTbcuHCUFl0HR5JcBcWp2DmYoaTm62nv71f9FtQgzK7uhB%2F6rWoBU0b3cgEgoYxMJeBusQGOqUBv9ImyRn7Gc8ISqUEfbY5APhkfI0iU%2FdRiNMfvkEh7sobjAQGLJZKhyiMa7Z7wEcSklqkC90f8jHphs28gTlOU91RgmWkafrgABPWIYi41oQ5%2BiaxWUEaYNd58iyZfGSQlQUAV2PFnzRgEZiPoNChFeCsOfmpkGZQXK7VHBmQF0Hz7W%2BjFZQQSGRs4Z%2BdjHU9iv6Fc6uWmfKEhwGRMLF2hSVwvi0X&X-Amz-Signature=a399c6f3aaf9783b5ba2f35bf9b290306de0445edc11b885289e61a358948773&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667INKJYS4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLNVOUKRvTnWxuTO3mTYyKh3GT3geNOxTmNj2AsI%2B0rwIgBzow2AzNelMPysO8hlELnNk%2FPtDmOOjS03nq%2Ft9iagEq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDIPBLG4L2IBO4eWEhSrcA%2BgFPKhmDm5s%2Bf4fcT5mgc8bec767XAp3CO1GoWc1ljKyUrYzAVetFO3ZsxKgEZMhfvgAd%2B0%2Bkhdm42t9prgGk8kIj5EkoFnqWgvWtitNprVuOpHDRxfQFwB%2FKxwLXmseZi87CqePQUzo%2Bi1Fgnx86kNbJRrMQLDuf5mndt5An%2BDzw8V%2FEXGLBZG8GOWtSGpC5eJO2yjG1VgeXeSGDJZLje3gGEb9tD2uUY1u4P3WnfiPd9%2BLSKhY6r9gbrelG%2FlS52tH%2BcHdgJGO%2BDf3TdAboE2bMyK%2BuIoYWFooiakQx%2FpH9EAEsQ657pyHaBDMW2ydtuue%2F64lpnWQwMx0pSmTJ62mJkKqtKxuSgI5zKK4JpQbAsf6VHro8iPhAj%2BqkEi1ne8vjLJLOVTYdMTkxg0x46GTbsRCMSN7pIxP8cwTriQqFahKIYt0JWY43%2BZqQBEd3mIPmdbIJq1vf34djNccYd5M29t9BYJlOl8nltRDxyyR4KAcSaC%2BQ0wQhwtpNSNQ7bxK2DDR%2FPnTuMCb34RcWw7DsNhVrI5k%2FL8i%2B1bit5kr6diht%2BQR6upki1i%2FBTbcuHCUFl0HR5JcBcWp2DmYoaTm62nv71f9FtQgzK7uhB%2F6rWoBU0b3cgEgoYxMJeBusQGOqUBv9ImyRn7Gc8ISqUEfbY5APhkfI0iU%2FdRiNMfvkEh7sobjAQGLJZKhyiMa7Z7wEcSklqkC90f8jHphs28gTlOU91RgmWkafrgABPWIYi41oQ5%2BiaxWUEaYNd58iyZfGSQlQUAV2PFnzRgEZiPoNChFeCsOfmpkGZQXK7VHBmQF0Hz7W%2BjFZQQSGRs4Z%2BdjHU9iv6Fc6uWmfKEhwGRMLF2hSVwvi0X&X-Amz-Signature=e7eb35a16d4bd593bf7dd6f0fb0fe295129e97bbaacb44170685da71eff106c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667INKJYS4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLNVOUKRvTnWxuTO3mTYyKh3GT3geNOxTmNj2AsI%2B0rwIgBzow2AzNelMPysO8hlELnNk%2FPtDmOOjS03nq%2Ft9iagEq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDIPBLG4L2IBO4eWEhSrcA%2BgFPKhmDm5s%2Bf4fcT5mgc8bec767XAp3CO1GoWc1ljKyUrYzAVetFO3ZsxKgEZMhfvgAd%2B0%2Bkhdm42t9prgGk8kIj5EkoFnqWgvWtitNprVuOpHDRxfQFwB%2FKxwLXmseZi87CqePQUzo%2Bi1Fgnx86kNbJRrMQLDuf5mndt5An%2BDzw8V%2FEXGLBZG8GOWtSGpC5eJO2yjG1VgeXeSGDJZLje3gGEb9tD2uUY1u4P3WnfiPd9%2BLSKhY6r9gbrelG%2FlS52tH%2BcHdgJGO%2BDf3TdAboE2bMyK%2BuIoYWFooiakQx%2FpH9EAEsQ657pyHaBDMW2ydtuue%2F64lpnWQwMx0pSmTJ62mJkKqtKxuSgI5zKK4JpQbAsf6VHro8iPhAj%2BqkEi1ne8vjLJLOVTYdMTkxg0x46GTbsRCMSN7pIxP8cwTriQqFahKIYt0JWY43%2BZqQBEd3mIPmdbIJq1vf34djNccYd5M29t9BYJlOl8nltRDxyyR4KAcSaC%2BQ0wQhwtpNSNQ7bxK2DDR%2FPnTuMCb34RcWw7DsNhVrI5k%2FL8i%2B1bit5kr6diht%2BQR6upki1i%2FBTbcuHCUFl0HR5JcBcWp2DmYoaTm62nv71f9FtQgzK7uhB%2F6rWoBU0b3cgEgoYxMJeBusQGOqUBv9ImyRn7Gc8ISqUEfbY5APhkfI0iU%2FdRiNMfvkEh7sobjAQGLJZKhyiMa7Z7wEcSklqkC90f8jHphs28gTlOU91RgmWkafrgABPWIYi41oQ5%2BiaxWUEaYNd58iyZfGSQlQUAV2PFnzRgEZiPoNChFeCsOfmpkGZQXK7VHBmQF0Hz7W%2BjFZQQSGRs4Z%2BdjHU9iv6Fc6uWmfKEhwGRMLF2hSVwvi0X&X-Amz-Signature=7b8cebf3f9bf250d7c62b193a519a3bcb26cd0ee54a2e66af2c97000d94ebd6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667INKJYS4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLNVOUKRvTnWxuTO3mTYyKh3GT3geNOxTmNj2AsI%2B0rwIgBzow2AzNelMPysO8hlELnNk%2FPtDmOOjS03nq%2Ft9iagEq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDIPBLG4L2IBO4eWEhSrcA%2BgFPKhmDm5s%2Bf4fcT5mgc8bec767XAp3CO1GoWc1ljKyUrYzAVetFO3ZsxKgEZMhfvgAd%2B0%2Bkhdm42t9prgGk8kIj5EkoFnqWgvWtitNprVuOpHDRxfQFwB%2FKxwLXmseZi87CqePQUzo%2Bi1Fgnx86kNbJRrMQLDuf5mndt5An%2BDzw8V%2FEXGLBZG8GOWtSGpC5eJO2yjG1VgeXeSGDJZLje3gGEb9tD2uUY1u4P3WnfiPd9%2BLSKhY6r9gbrelG%2FlS52tH%2BcHdgJGO%2BDf3TdAboE2bMyK%2BuIoYWFooiakQx%2FpH9EAEsQ657pyHaBDMW2ydtuue%2F64lpnWQwMx0pSmTJ62mJkKqtKxuSgI5zKK4JpQbAsf6VHro8iPhAj%2BqkEi1ne8vjLJLOVTYdMTkxg0x46GTbsRCMSN7pIxP8cwTriQqFahKIYt0JWY43%2BZqQBEd3mIPmdbIJq1vf34djNccYd5M29t9BYJlOl8nltRDxyyR4KAcSaC%2BQ0wQhwtpNSNQ7bxK2DDR%2FPnTuMCb34RcWw7DsNhVrI5k%2FL8i%2B1bit5kr6diht%2BQR6upki1i%2FBTbcuHCUFl0HR5JcBcWp2DmYoaTm62nv71f9FtQgzK7uhB%2F6rWoBU0b3cgEgoYxMJeBusQGOqUBv9ImyRn7Gc8ISqUEfbY5APhkfI0iU%2FdRiNMfvkEh7sobjAQGLJZKhyiMa7Z7wEcSklqkC90f8jHphs28gTlOU91RgmWkafrgABPWIYi41oQ5%2BiaxWUEaYNd58iyZfGSQlQUAV2PFnzRgEZiPoNChFeCsOfmpkGZQXK7VHBmQF0Hz7W%2BjFZQQSGRs4Z%2BdjHU9iv6Fc6uWmfKEhwGRMLF2hSVwvi0X&X-Amz-Signature=bd80fc953b23c7f8ec6753fd7c6d2f961850f8eb8655c871b1dc5e6d9982cf8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667INKJYS4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLNVOUKRvTnWxuTO3mTYyKh3GT3geNOxTmNj2AsI%2B0rwIgBzow2AzNelMPysO8hlELnNk%2FPtDmOOjS03nq%2Ft9iagEq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDIPBLG4L2IBO4eWEhSrcA%2BgFPKhmDm5s%2Bf4fcT5mgc8bec767XAp3CO1GoWc1ljKyUrYzAVetFO3ZsxKgEZMhfvgAd%2B0%2Bkhdm42t9prgGk8kIj5EkoFnqWgvWtitNprVuOpHDRxfQFwB%2FKxwLXmseZi87CqePQUzo%2Bi1Fgnx86kNbJRrMQLDuf5mndt5An%2BDzw8V%2FEXGLBZG8GOWtSGpC5eJO2yjG1VgeXeSGDJZLje3gGEb9tD2uUY1u4P3WnfiPd9%2BLSKhY6r9gbrelG%2FlS52tH%2BcHdgJGO%2BDf3TdAboE2bMyK%2BuIoYWFooiakQx%2FpH9EAEsQ657pyHaBDMW2ydtuue%2F64lpnWQwMx0pSmTJ62mJkKqtKxuSgI5zKK4JpQbAsf6VHro8iPhAj%2BqkEi1ne8vjLJLOVTYdMTkxg0x46GTbsRCMSN7pIxP8cwTriQqFahKIYt0JWY43%2BZqQBEd3mIPmdbIJq1vf34djNccYd5M29t9BYJlOl8nltRDxyyR4KAcSaC%2BQ0wQhwtpNSNQ7bxK2DDR%2FPnTuMCb34RcWw7DsNhVrI5k%2FL8i%2B1bit5kr6diht%2BQR6upki1i%2FBTbcuHCUFl0HR5JcBcWp2DmYoaTm62nv71f9FtQgzK7uhB%2F6rWoBU0b3cgEgoYxMJeBusQGOqUBv9ImyRn7Gc8ISqUEfbY5APhkfI0iU%2FdRiNMfvkEh7sobjAQGLJZKhyiMa7Z7wEcSklqkC90f8jHphs28gTlOU91RgmWkafrgABPWIYi41oQ5%2BiaxWUEaYNd58iyZfGSQlQUAV2PFnzRgEZiPoNChFeCsOfmpkGZQXK7VHBmQF0Hz7W%2BjFZQQSGRs4Z%2BdjHU9iv6Fc6uWmfKEhwGRMLF2hSVwvi0X&X-Amz-Signature=4e06a7b203d466863f91f2c55d91eb25f0a088f2a669a5b70388be96fb400c96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667INKJYS4%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLNVOUKRvTnWxuTO3mTYyKh3GT3geNOxTmNj2AsI%2B0rwIgBzow2AzNelMPysO8hlELnNk%2FPtDmOOjS03nq%2Ft9iagEq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDIPBLG4L2IBO4eWEhSrcA%2BgFPKhmDm5s%2Bf4fcT5mgc8bec767XAp3CO1GoWc1ljKyUrYzAVetFO3ZsxKgEZMhfvgAd%2B0%2Bkhdm42t9prgGk8kIj5EkoFnqWgvWtitNprVuOpHDRxfQFwB%2FKxwLXmseZi87CqePQUzo%2Bi1Fgnx86kNbJRrMQLDuf5mndt5An%2BDzw8V%2FEXGLBZG8GOWtSGpC5eJO2yjG1VgeXeSGDJZLje3gGEb9tD2uUY1u4P3WnfiPd9%2BLSKhY6r9gbrelG%2FlS52tH%2BcHdgJGO%2BDf3TdAboE2bMyK%2BuIoYWFooiakQx%2FpH9EAEsQ657pyHaBDMW2ydtuue%2F64lpnWQwMx0pSmTJ62mJkKqtKxuSgI5zKK4JpQbAsf6VHro8iPhAj%2BqkEi1ne8vjLJLOVTYdMTkxg0x46GTbsRCMSN7pIxP8cwTriQqFahKIYt0JWY43%2BZqQBEd3mIPmdbIJq1vf34djNccYd5M29t9BYJlOl8nltRDxyyR4KAcSaC%2BQ0wQhwtpNSNQ7bxK2DDR%2FPnTuMCb34RcWw7DsNhVrI5k%2FL8i%2B1bit5kr6diht%2BQR6upki1i%2FBTbcuHCUFl0HR5JcBcWp2DmYoaTm62nv71f9FtQgzK7uhB%2F6rWoBU0b3cgEgoYxMJeBusQGOqUBv9ImyRn7Gc8ISqUEfbY5APhkfI0iU%2FdRiNMfvkEh7sobjAQGLJZKhyiMa7Z7wEcSklqkC90f8jHphs28gTlOU91RgmWkafrgABPWIYi41oQ5%2BiaxWUEaYNd58iyZfGSQlQUAV2PFnzRgEZiPoNChFeCsOfmpkGZQXK7VHBmQF0Hz7W%2BjFZQQSGRs4Z%2BdjHU9iv6Fc6uWmfKEhwGRMLF2hSVwvi0X&X-Amz-Signature=6907d157f2020e2fe42f0440fbcf198c2553061c4b71eb5b6d6dc16d5d05afdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
