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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIUZIBHB%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCCmQCWBQjbNA1A20s9vHWx5NxnWnHcqDsudxI4o0W3OAIgcMcL2BDuQgxCTvkYnaY01yHsikhAGbr9qJBFd35TKTUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIN7UooGmsZ%2FIz8dyrcA2Ie%2FIxlOsffyoQdLT1Ppo3jELc8yQT3oD%2F%2BGsDbi5KdqmRKVEjsynXwGoIn%2FNpmeii0oDusVo%2FsNwRvShqZMNIEPLGwdQwf8SQhm70Rm6IhDgJAm5wU9mRT%2FDeJSbljj3onVDez9jMfpwumNGOe8KY567nrgsAzpt8HuheRNnzDrikypW9IzHjEUrghdzhqgnV1VOBRK3oRH6T1akyrtogoM3LSc7rTdtgcP15FYdRxzuoVbccC7aENkuyNBtyq%2F6xvNwzH7dNSpZTKAKazIxNPj8G7N0CXSLS%2BCN0xRTk1P20aE2gAYSKk9urWWeTpsICeGoAzg7pbQ3PLqjP2HTkSuBYyKYSlPCrbLkd5iiv9UiX1l%2BKF9Va3ybuRaPtvmoN9Gdx7G7Mmc8sH1Usc%2BGiipaI7WojOCP9JRqwCzQfT40%2FZAONxr%2FzrUILtnk89T4goxzrREoZsd%2B8z7cMyLwUdd%2Fe3DO5FUBZluN74HOqZjUqJVnS%2BKa3GgBwufuEgq0bMABMhj%2FLzPC3OQQeNSte%2Fvbz6N77rTQctbxvzo1ocFLP9rna71nipIwGPD%2FvLrK1OtJNa9MBcLD9f6ZZG%2FMdNiFgYuFrU7FfsFwWPy4%2BDSPnrhMU%2FVQ7oHXJDMI%2BpoccGOqUB%2BtBdF36Axz7vUsVAldJjzM8si1dNqCKldpintKZc35zdYFyR8y29bpcQIi0DWHCmnEVl3xGXOq6OZia77GFqysOBiIVik5Ku3sKFOxd7ElTR77NM7BUJaDLtQE2nfGsrfjTAocmDwgBihL1Q%2BAZu1qBsGr2QlxkzCLfPdQQKfK9eauk9DWeWSwd4UXQ61kXvjEoOtNE3FJiu%2FfhUCgro8S5MVwr2&X-Amz-Signature=baf8e68f4fa7f3d9aa061053bdcc7e13ecce96f72d8ad48f38e6d1185aad903d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIUZIBHB%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCCmQCWBQjbNA1A20s9vHWx5NxnWnHcqDsudxI4o0W3OAIgcMcL2BDuQgxCTvkYnaY01yHsikhAGbr9qJBFd35TKTUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIN7UooGmsZ%2FIz8dyrcA2Ie%2FIxlOsffyoQdLT1Ppo3jELc8yQT3oD%2F%2BGsDbi5KdqmRKVEjsynXwGoIn%2FNpmeii0oDusVo%2FsNwRvShqZMNIEPLGwdQwf8SQhm70Rm6IhDgJAm5wU9mRT%2FDeJSbljj3onVDez9jMfpwumNGOe8KY567nrgsAzpt8HuheRNnzDrikypW9IzHjEUrghdzhqgnV1VOBRK3oRH6T1akyrtogoM3LSc7rTdtgcP15FYdRxzuoVbccC7aENkuyNBtyq%2F6xvNwzH7dNSpZTKAKazIxNPj8G7N0CXSLS%2BCN0xRTk1P20aE2gAYSKk9urWWeTpsICeGoAzg7pbQ3PLqjP2HTkSuBYyKYSlPCrbLkd5iiv9UiX1l%2BKF9Va3ybuRaPtvmoN9Gdx7G7Mmc8sH1Usc%2BGiipaI7WojOCP9JRqwCzQfT40%2FZAONxr%2FzrUILtnk89T4goxzrREoZsd%2B8z7cMyLwUdd%2Fe3DO5FUBZluN74HOqZjUqJVnS%2BKa3GgBwufuEgq0bMABMhj%2FLzPC3OQQeNSte%2Fvbz6N77rTQctbxvzo1ocFLP9rna71nipIwGPD%2FvLrK1OtJNa9MBcLD9f6ZZG%2FMdNiFgYuFrU7FfsFwWPy4%2BDSPnrhMU%2FVQ7oHXJDMI%2BpoccGOqUB%2BtBdF36Axz7vUsVAldJjzM8si1dNqCKldpintKZc35zdYFyR8y29bpcQIi0DWHCmnEVl3xGXOq6OZia77GFqysOBiIVik5Ku3sKFOxd7ElTR77NM7BUJaDLtQE2nfGsrfjTAocmDwgBihL1Q%2BAZu1qBsGr2QlxkzCLfPdQQKfK9eauk9DWeWSwd4UXQ61kXvjEoOtNE3FJiu%2FfhUCgro8S5MVwr2&X-Amz-Signature=464c10ee5f7492094e2b79c936efb74b27a166982bfc249d33c10a5955bc162f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIUZIBHB%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCCmQCWBQjbNA1A20s9vHWx5NxnWnHcqDsudxI4o0W3OAIgcMcL2BDuQgxCTvkYnaY01yHsikhAGbr9qJBFd35TKTUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIN7UooGmsZ%2FIz8dyrcA2Ie%2FIxlOsffyoQdLT1Ppo3jELc8yQT3oD%2F%2BGsDbi5KdqmRKVEjsynXwGoIn%2FNpmeii0oDusVo%2FsNwRvShqZMNIEPLGwdQwf8SQhm70Rm6IhDgJAm5wU9mRT%2FDeJSbljj3onVDez9jMfpwumNGOe8KY567nrgsAzpt8HuheRNnzDrikypW9IzHjEUrghdzhqgnV1VOBRK3oRH6T1akyrtogoM3LSc7rTdtgcP15FYdRxzuoVbccC7aENkuyNBtyq%2F6xvNwzH7dNSpZTKAKazIxNPj8G7N0CXSLS%2BCN0xRTk1P20aE2gAYSKk9urWWeTpsICeGoAzg7pbQ3PLqjP2HTkSuBYyKYSlPCrbLkd5iiv9UiX1l%2BKF9Va3ybuRaPtvmoN9Gdx7G7Mmc8sH1Usc%2BGiipaI7WojOCP9JRqwCzQfT40%2FZAONxr%2FzrUILtnk89T4goxzrREoZsd%2B8z7cMyLwUdd%2Fe3DO5FUBZluN74HOqZjUqJVnS%2BKa3GgBwufuEgq0bMABMhj%2FLzPC3OQQeNSte%2Fvbz6N77rTQctbxvzo1ocFLP9rna71nipIwGPD%2FvLrK1OtJNa9MBcLD9f6ZZG%2FMdNiFgYuFrU7FfsFwWPy4%2BDSPnrhMU%2FVQ7oHXJDMI%2BpoccGOqUB%2BtBdF36Axz7vUsVAldJjzM8si1dNqCKldpintKZc35zdYFyR8y29bpcQIi0DWHCmnEVl3xGXOq6OZia77GFqysOBiIVik5Ku3sKFOxd7ElTR77NM7BUJaDLtQE2nfGsrfjTAocmDwgBihL1Q%2BAZu1qBsGr2QlxkzCLfPdQQKfK9eauk9DWeWSwd4UXQ61kXvjEoOtNE3FJiu%2FfhUCgro8S5MVwr2&X-Amz-Signature=af56821068182f45eadc63b78c4f47da8fc04afda504d59ab3a545138c243c48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIUZIBHB%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCCmQCWBQjbNA1A20s9vHWx5NxnWnHcqDsudxI4o0W3OAIgcMcL2BDuQgxCTvkYnaY01yHsikhAGbr9qJBFd35TKTUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIN7UooGmsZ%2FIz8dyrcA2Ie%2FIxlOsffyoQdLT1Ppo3jELc8yQT3oD%2F%2BGsDbi5KdqmRKVEjsynXwGoIn%2FNpmeii0oDusVo%2FsNwRvShqZMNIEPLGwdQwf8SQhm70Rm6IhDgJAm5wU9mRT%2FDeJSbljj3onVDez9jMfpwumNGOe8KY567nrgsAzpt8HuheRNnzDrikypW9IzHjEUrghdzhqgnV1VOBRK3oRH6T1akyrtogoM3LSc7rTdtgcP15FYdRxzuoVbccC7aENkuyNBtyq%2F6xvNwzH7dNSpZTKAKazIxNPj8G7N0CXSLS%2BCN0xRTk1P20aE2gAYSKk9urWWeTpsICeGoAzg7pbQ3PLqjP2HTkSuBYyKYSlPCrbLkd5iiv9UiX1l%2BKF9Va3ybuRaPtvmoN9Gdx7G7Mmc8sH1Usc%2BGiipaI7WojOCP9JRqwCzQfT40%2FZAONxr%2FzrUILtnk89T4goxzrREoZsd%2B8z7cMyLwUdd%2Fe3DO5FUBZluN74HOqZjUqJVnS%2BKa3GgBwufuEgq0bMABMhj%2FLzPC3OQQeNSte%2Fvbz6N77rTQctbxvzo1ocFLP9rna71nipIwGPD%2FvLrK1OtJNa9MBcLD9f6ZZG%2FMdNiFgYuFrU7FfsFwWPy4%2BDSPnrhMU%2FVQ7oHXJDMI%2BpoccGOqUB%2BtBdF36Axz7vUsVAldJjzM8si1dNqCKldpintKZc35zdYFyR8y29bpcQIi0DWHCmnEVl3xGXOq6OZia77GFqysOBiIVik5Ku3sKFOxd7ElTR77NM7BUJaDLtQE2nfGsrfjTAocmDwgBihL1Q%2BAZu1qBsGr2QlxkzCLfPdQQKfK9eauk9DWeWSwd4UXQ61kXvjEoOtNE3FJiu%2FfhUCgro8S5MVwr2&X-Amz-Signature=a7c92a140edb8aecc980a10ee764a9d95b0e84eeb524da5450175c7397d843ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIUZIBHB%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCCmQCWBQjbNA1A20s9vHWx5NxnWnHcqDsudxI4o0W3OAIgcMcL2BDuQgxCTvkYnaY01yHsikhAGbr9qJBFd35TKTUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIN7UooGmsZ%2FIz8dyrcA2Ie%2FIxlOsffyoQdLT1Ppo3jELc8yQT3oD%2F%2BGsDbi5KdqmRKVEjsynXwGoIn%2FNpmeii0oDusVo%2FsNwRvShqZMNIEPLGwdQwf8SQhm70Rm6IhDgJAm5wU9mRT%2FDeJSbljj3onVDez9jMfpwumNGOe8KY567nrgsAzpt8HuheRNnzDrikypW9IzHjEUrghdzhqgnV1VOBRK3oRH6T1akyrtogoM3LSc7rTdtgcP15FYdRxzuoVbccC7aENkuyNBtyq%2F6xvNwzH7dNSpZTKAKazIxNPj8G7N0CXSLS%2BCN0xRTk1P20aE2gAYSKk9urWWeTpsICeGoAzg7pbQ3PLqjP2HTkSuBYyKYSlPCrbLkd5iiv9UiX1l%2BKF9Va3ybuRaPtvmoN9Gdx7G7Mmc8sH1Usc%2BGiipaI7WojOCP9JRqwCzQfT40%2FZAONxr%2FzrUILtnk89T4goxzrREoZsd%2B8z7cMyLwUdd%2Fe3DO5FUBZluN74HOqZjUqJVnS%2BKa3GgBwufuEgq0bMABMhj%2FLzPC3OQQeNSte%2Fvbz6N77rTQctbxvzo1ocFLP9rna71nipIwGPD%2FvLrK1OtJNa9MBcLD9f6ZZG%2FMdNiFgYuFrU7FfsFwWPy4%2BDSPnrhMU%2FVQ7oHXJDMI%2BpoccGOqUB%2BtBdF36Axz7vUsVAldJjzM8si1dNqCKldpintKZc35zdYFyR8y29bpcQIi0DWHCmnEVl3xGXOq6OZia77GFqysOBiIVik5Ku3sKFOxd7ElTR77NM7BUJaDLtQE2nfGsrfjTAocmDwgBihL1Q%2BAZu1qBsGr2QlxkzCLfPdQQKfK9eauk9DWeWSwd4UXQ61kXvjEoOtNE3FJiu%2FfhUCgro8S5MVwr2&X-Amz-Signature=9bc8eb34b3d8a6269fbc41507e1d4224e98c38a39f97225e95a367c56298ffbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIUZIBHB%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCCmQCWBQjbNA1A20s9vHWx5NxnWnHcqDsudxI4o0W3OAIgcMcL2BDuQgxCTvkYnaY01yHsikhAGbr9qJBFd35TKTUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIN7UooGmsZ%2FIz8dyrcA2Ie%2FIxlOsffyoQdLT1Ppo3jELc8yQT3oD%2F%2BGsDbi5KdqmRKVEjsynXwGoIn%2FNpmeii0oDusVo%2FsNwRvShqZMNIEPLGwdQwf8SQhm70Rm6IhDgJAm5wU9mRT%2FDeJSbljj3onVDez9jMfpwumNGOe8KY567nrgsAzpt8HuheRNnzDrikypW9IzHjEUrghdzhqgnV1VOBRK3oRH6T1akyrtogoM3LSc7rTdtgcP15FYdRxzuoVbccC7aENkuyNBtyq%2F6xvNwzH7dNSpZTKAKazIxNPj8G7N0CXSLS%2BCN0xRTk1P20aE2gAYSKk9urWWeTpsICeGoAzg7pbQ3PLqjP2HTkSuBYyKYSlPCrbLkd5iiv9UiX1l%2BKF9Va3ybuRaPtvmoN9Gdx7G7Mmc8sH1Usc%2BGiipaI7WojOCP9JRqwCzQfT40%2FZAONxr%2FzrUILtnk89T4goxzrREoZsd%2B8z7cMyLwUdd%2Fe3DO5FUBZluN74HOqZjUqJVnS%2BKa3GgBwufuEgq0bMABMhj%2FLzPC3OQQeNSte%2Fvbz6N77rTQctbxvzo1ocFLP9rna71nipIwGPD%2FvLrK1OtJNa9MBcLD9f6ZZG%2FMdNiFgYuFrU7FfsFwWPy4%2BDSPnrhMU%2FVQ7oHXJDMI%2BpoccGOqUB%2BtBdF36Axz7vUsVAldJjzM8si1dNqCKldpintKZc35zdYFyR8y29bpcQIi0DWHCmnEVl3xGXOq6OZia77GFqysOBiIVik5Ku3sKFOxd7ElTR77NM7BUJaDLtQE2nfGsrfjTAocmDwgBihL1Q%2BAZu1qBsGr2QlxkzCLfPdQQKfK9eauk9DWeWSwd4UXQ61kXvjEoOtNE3FJiu%2FfhUCgro8S5MVwr2&X-Amz-Signature=f9d67cca02abe018b8b40707b44d3ef0a314fd26957932f77cf6a72bed5b25d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIUZIBHB%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCCmQCWBQjbNA1A20s9vHWx5NxnWnHcqDsudxI4o0W3OAIgcMcL2BDuQgxCTvkYnaY01yHsikhAGbr9qJBFd35TKTUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIN7UooGmsZ%2FIz8dyrcA2Ie%2FIxlOsffyoQdLT1Ppo3jELc8yQT3oD%2F%2BGsDbi5KdqmRKVEjsynXwGoIn%2FNpmeii0oDusVo%2FsNwRvShqZMNIEPLGwdQwf8SQhm70Rm6IhDgJAm5wU9mRT%2FDeJSbljj3onVDez9jMfpwumNGOe8KY567nrgsAzpt8HuheRNnzDrikypW9IzHjEUrghdzhqgnV1VOBRK3oRH6T1akyrtogoM3LSc7rTdtgcP15FYdRxzuoVbccC7aENkuyNBtyq%2F6xvNwzH7dNSpZTKAKazIxNPj8G7N0CXSLS%2BCN0xRTk1P20aE2gAYSKk9urWWeTpsICeGoAzg7pbQ3PLqjP2HTkSuBYyKYSlPCrbLkd5iiv9UiX1l%2BKF9Va3ybuRaPtvmoN9Gdx7G7Mmc8sH1Usc%2BGiipaI7WojOCP9JRqwCzQfT40%2FZAONxr%2FzrUILtnk89T4goxzrREoZsd%2B8z7cMyLwUdd%2Fe3DO5FUBZluN74HOqZjUqJVnS%2BKa3GgBwufuEgq0bMABMhj%2FLzPC3OQQeNSte%2Fvbz6N77rTQctbxvzo1ocFLP9rna71nipIwGPD%2FvLrK1OtJNa9MBcLD9f6ZZG%2FMdNiFgYuFrU7FfsFwWPy4%2BDSPnrhMU%2FVQ7oHXJDMI%2BpoccGOqUB%2BtBdF36Axz7vUsVAldJjzM8si1dNqCKldpintKZc35zdYFyR8y29bpcQIi0DWHCmnEVl3xGXOq6OZia77GFqysOBiIVik5Ku3sKFOxd7ElTR77NM7BUJaDLtQE2nfGsrfjTAocmDwgBihL1Q%2BAZu1qBsGr2QlxkzCLfPdQQKfK9eauk9DWeWSwd4UXQ61kXvjEoOtNE3FJiu%2FfhUCgro8S5MVwr2&X-Amz-Signature=a9b51b622356f20653115ee82b70bf9c7b4a4f95448c1fac42426fdfccd3a86f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIUZIBHB%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCCmQCWBQjbNA1A20s9vHWx5NxnWnHcqDsudxI4o0W3OAIgcMcL2BDuQgxCTvkYnaY01yHsikhAGbr9qJBFd35TKTUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIN7UooGmsZ%2FIz8dyrcA2Ie%2FIxlOsffyoQdLT1Ppo3jELc8yQT3oD%2F%2BGsDbi5KdqmRKVEjsynXwGoIn%2FNpmeii0oDusVo%2FsNwRvShqZMNIEPLGwdQwf8SQhm70Rm6IhDgJAm5wU9mRT%2FDeJSbljj3onVDez9jMfpwumNGOe8KY567nrgsAzpt8HuheRNnzDrikypW9IzHjEUrghdzhqgnV1VOBRK3oRH6T1akyrtogoM3LSc7rTdtgcP15FYdRxzuoVbccC7aENkuyNBtyq%2F6xvNwzH7dNSpZTKAKazIxNPj8G7N0CXSLS%2BCN0xRTk1P20aE2gAYSKk9urWWeTpsICeGoAzg7pbQ3PLqjP2HTkSuBYyKYSlPCrbLkd5iiv9UiX1l%2BKF9Va3ybuRaPtvmoN9Gdx7G7Mmc8sH1Usc%2BGiipaI7WojOCP9JRqwCzQfT40%2FZAONxr%2FzrUILtnk89T4goxzrREoZsd%2B8z7cMyLwUdd%2Fe3DO5FUBZluN74HOqZjUqJVnS%2BKa3GgBwufuEgq0bMABMhj%2FLzPC3OQQeNSte%2Fvbz6N77rTQctbxvzo1ocFLP9rna71nipIwGPD%2FvLrK1OtJNa9MBcLD9f6ZZG%2FMdNiFgYuFrU7FfsFwWPy4%2BDSPnrhMU%2FVQ7oHXJDMI%2BpoccGOqUB%2BtBdF36Axz7vUsVAldJjzM8si1dNqCKldpintKZc35zdYFyR8y29bpcQIi0DWHCmnEVl3xGXOq6OZia77GFqysOBiIVik5Ku3sKFOxd7ElTR77NM7BUJaDLtQE2nfGsrfjTAocmDwgBihL1Q%2BAZu1qBsGr2QlxkzCLfPdQQKfK9eauk9DWeWSwd4UXQ61kXvjEoOtNE3FJiu%2FfhUCgro8S5MVwr2&X-Amz-Signature=980a0f9eba1b27cef97eff65a925afffd1d42f2768eaef1590836e74cb4b8d69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIUZIBHB%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCCmQCWBQjbNA1A20s9vHWx5NxnWnHcqDsudxI4o0W3OAIgcMcL2BDuQgxCTvkYnaY01yHsikhAGbr9qJBFd35TKTUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIN7UooGmsZ%2FIz8dyrcA2Ie%2FIxlOsffyoQdLT1Ppo3jELc8yQT3oD%2F%2BGsDbi5KdqmRKVEjsynXwGoIn%2FNpmeii0oDusVo%2FsNwRvShqZMNIEPLGwdQwf8SQhm70Rm6IhDgJAm5wU9mRT%2FDeJSbljj3onVDez9jMfpwumNGOe8KY567nrgsAzpt8HuheRNnzDrikypW9IzHjEUrghdzhqgnV1VOBRK3oRH6T1akyrtogoM3LSc7rTdtgcP15FYdRxzuoVbccC7aENkuyNBtyq%2F6xvNwzH7dNSpZTKAKazIxNPj8G7N0CXSLS%2BCN0xRTk1P20aE2gAYSKk9urWWeTpsICeGoAzg7pbQ3PLqjP2HTkSuBYyKYSlPCrbLkd5iiv9UiX1l%2BKF9Va3ybuRaPtvmoN9Gdx7G7Mmc8sH1Usc%2BGiipaI7WojOCP9JRqwCzQfT40%2FZAONxr%2FzrUILtnk89T4goxzrREoZsd%2B8z7cMyLwUdd%2Fe3DO5FUBZluN74HOqZjUqJVnS%2BKa3GgBwufuEgq0bMABMhj%2FLzPC3OQQeNSte%2Fvbz6N77rTQctbxvzo1ocFLP9rna71nipIwGPD%2FvLrK1OtJNa9MBcLD9f6ZZG%2FMdNiFgYuFrU7FfsFwWPy4%2BDSPnrhMU%2FVQ7oHXJDMI%2BpoccGOqUB%2BtBdF36Axz7vUsVAldJjzM8si1dNqCKldpintKZc35zdYFyR8y29bpcQIi0DWHCmnEVl3xGXOq6OZia77GFqysOBiIVik5Ku3sKFOxd7ElTR77NM7BUJaDLtQE2nfGsrfjTAocmDwgBihL1Q%2BAZu1qBsGr2QlxkzCLfPdQQKfK9eauk9DWeWSwd4UXQ61kXvjEoOtNE3FJiu%2FfhUCgro8S5MVwr2&X-Amz-Signature=58fc8d78071f2414b248113d1cdb84756054e637aa7d43bd6fe33fa3b356bbde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIUZIBHB%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCCmQCWBQjbNA1A20s9vHWx5NxnWnHcqDsudxI4o0W3OAIgcMcL2BDuQgxCTvkYnaY01yHsikhAGbr9qJBFd35TKTUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIN7UooGmsZ%2FIz8dyrcA2Ie%2FIxlOsffyoQdLT1Ppo3jELc8yQT3oD%2F%2BGsDbi5KdqmRKVEjsynXwGoIn%2FNpmeii0oDusVo%2FsNwRvShqZMNIEPLGwdQwf8SQhm70Rm6IhDgJAm5wU9mRT%2FDeJSbljj3onVDez9jMfpwumNGOe8KY567nrgsAzpt8HuheRNnzDrikypW9IzHjEUrghdzhqgnV1VOBRK3oRH6T1akyrtogoM3LSc7rTdtgcP15FYdRxzuoVbccC7aENkuyNBtyq%2F6xvNwzH7dNSpZTKAKazIxNPj8G7N0CXSLS%2BCN0xRTk1P20aE2gAYSKk9urWWeTpsICeGoAzg7pbQ3PLqjP2HTkSuBYyKYSlPCrbLkd5iiv9UiX1l%2BKF9Va3ybuRaPtvmoN9Gdx7G7Mmc8sH1Usc%2BGiipaI7WojOCP9JRqwCzQfT40%2FZAONxr%2FzrUILtnk89T4goxzrREoZsd%2B8z7cMyLwUdd%2Fe3DO5FUBZluN74HOqZjUqJVnS%2BKa3GgBwufuEgq0bMABMhj%2FLzPC3OQQeNSte%2Fvbz6N77rTQctbxvzo1ocFLP9rna71nipIwGPD%2FvLrK1OtJNa9MBcLD9f6ZZG%2FMdNiFgYuFrU7FfsFwWPy4%2BDSPnrhMU%2FVQ7oHXJDMI%2BpoccGOqUB%2BtBdF36Axz7vUsVAldJjzM8si1dNqCKldpintKZc35zdYFyR8y29bpcQIi0DWHCmnEVl3xGXOq6OZia77GFqysOBiIVik5Ku3sKFOxd7ElTR77NM7BUJaDLtQE2nfGsrfjTAocmDwgBihL1Q%2BAZu1qBsGr2QlxkzCLfPdQQKfK9eauk9DWeWSwd4UXQ61kXvjEoOtNE3FJiu%2FfhUCgro8S5MVwr2&X-Amz-Signature=c514607cdc9b478066034d8c040efc4ef07ec52019d02b2ca1fe174cb66cbf33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIUZIBHB%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCCmQCWBQjbNA1A20s9vHWx5NxnWnHcqDsudxI4o0W3OAIgcMcL2BDuQgxCTvkYnaY01yHsikhAGbr9qJBFd35TKTUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIN7UooGmsZ%2FIz8dyrcA2Ie%2FIxlOsffyoQdLT1Ppo3jELc8yQT3oD%2F%2BGsDbi5KdqmRKVEjsynXwGoIn%2FNpmeii0oDusVo%2FsNwRvShqZMNIEPLGwdQwf8SQhm70Rm6IhDgJAm5wU9mRT%2FDeJSbljj3onVDez9jMfpwumNGOe8KY567nrgsAzpt8HuheRNnzDrikypW9IzHjEUrghdzhqgnV1VOBRK3oRH6T1akyrtogoM3LSc7rTdtgcP15FYdRxzuoVbccC7aENkuyNBtyq%2F6xvNwzH7dNSpZTKAKazIxNPj8G7N0CXSLS%2BCN0xRTk1P20aE2gAYSKk9urWWeTpsICeGoAzg7pbQ3PLqjP2HTkSuBYyKYSlPCrbLkd5iiv9UiX1l%2BKF9Va3ybuRaPtvmoN9Gdx7G7Mmc8sH1Usc%2BGiipaI7WojOCP9JRqwCzQfT40%2FZAONxr%2FzrUILtnk89T4goxzrREoZsd%2B8z7cMyLwUdd%2Fe3DO5FUBZluN74HOqZjUqJVnS%2BKa3GgBwufuEgq0bMABMhj%2FLzPC3OQQeNSte%2Fvbz6N77rTQctbxvzo1ocFLP9rna71nipIwGPD%2FvLrK1OtJNa9MBcLD9f6ZZG%2FMdNiFgYuFrU7FfsFwWPy4%2BDSPnrhMU%2FVQ7oHXJDMI%2BpoccGOqUB%2BtBdF36Axz7vUsVAldJjzM8si1dNqCKldpintKZc35zdYFyR8y29bpcQIi0DWHCmnEVl3xGXOq6OZia77GFqysOBiIVik5Ku3sKFOxd7ElTR77NM7BUJaDLtQE2nfGsrfjTAocmDwgBihL1Q%2BAZu1qBsGr2QlxkzCLfPdQQKfK9eauk9DWeWSwd4UXQ61kXvjEoOtNE3FJiu%2FfhUCgro8S5MVwr2&X-Amz-Signature=9d42872e5fd9736abdecf7dc519f63c266043ebc79f61f43a497cebd2f03760b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIUZIBHB%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCCmQCWBQjbNA1A20s9vHWx5NxnWnHcqDsudxI4o0W3OAIgcMcL2BDuQgxCTvkYnaY01yHsikhAGbr9qJBFd35TKTUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIN7UooGmsZ%2FIz8dyrcA2Ie%2FIxlOsffyoQdLT1Ppo3jELc8yQT3oD%2F%2BGsDbi5KdqmRKVEjsynXwGoIn%2FNpmeii0oDusVo%2FsNwRvShqZMNIEPLGwdQwf8SQhm70Rm6IhDgJAm5wU9mRT%2FDeJSbljj3onVDez9jMfpwumNGOe8KY567nrgsAzpt8HuheRNnzDrikypW9IzHjEUrghdzhqgnV1VOBRK3oRH6T1akyrtogoM3LSc7rTdtgcP15FYdRxzuoVbccC7aENkuyNBtyq%2F6xvNwzH7dNSpZTKAKazIxNPj8G7N0CXSLS%2BCN0xRTk1P20aE2gAYSKk9urWWeTpsICeGoAzg7pbQ3PLqjP2HTkSuBYyKYSlPCrbLkd5iiv9UiX1l%2BKF9Va3ybuRaPtvmoN9Gdx7G7Mmc8sH1Usc%2BGiipaI7WojOCP9JRqwCzQfT40%2FZAONxr%2FzrUILtnk89T4goxzrREoZsd%2B8z7cMyLwUdd%2Fe3DO5FUBZluN74HOqZjUqJVnS%2BKa3GgBwufuEgq0bMABMhj%2FLzPC3OQQeNSte%2Fvbz6N77rTQctbxvzo1ocFLP9rna71nipIwGPD%2FvLrK1OtJNa9MBcLD9f6ZZG%2FMdNiFgYuFrU7FfsFwWPy4%2BDSPnrhMU%2FVQ7oHXJDMI%2BpoccGOqUB%2BtBdF36Axz7vUsVAldJjzM8si1dNqCKldpintKZc35zdYFyR8y29bpcQIi0DWHCmnEVl3xGXOq6OZia77GFqysOBiIVik5Ku3sKFOxd7ElTR77NM7BUJaDLtQE2nfGsrfjTAocmDwgBihL1Q%2BAZu1qBsGr2QlxkzCLfPdQQKfK9eauk9DWeWSwd4UXQ61kXvjEoOtNE3FJiu%2FfhUCgro8S5MVwr2&X-Amz-Signature=f36f2c9ae28f9611ea281cbaa95068413e4d1e1e9bd7400d06e2dde2bd1418ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIUZIBHB%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCCmQCWBQjbNA1A20s9vHWx5NxnWnHcqDsudxI4o0W3OAIgcMcL2BDuQgxCTvkYnaY01yHsikhAGbr9qJBFd35TKTUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIN7UooGmsZ%2FIz8dyrcA2Ie%2FIxlOsffyoQdLT1Ppo3jELc8yQT3oD%2F%2BGsDbi5KdqmRKVEjsynXwGoIn%2FNpmeii0oDusVo%2FsNwRvShqZMNIEPLGwdQwf8SQhm70Rm6IhDgJAm5wU9mRT%2FDeJSbljj3onVDez9jMfpwumNGOe8KY567nrgsAzpt8HuheRNnzDrikypW9IzHjEUrghdzhqgnV1VOBRK3oRH6T1akyrtogoM3LSc7rTdtgcP15FYdRxzuoVbccC7aENkuyNBtyq%2F6xvNwzH7dNSpZTKAKazIxNPj8G7N0CXSLS%2BCN0xRTk1P20aE2gAYSKk9urWWeTpsICeGoAzg7pbQ3PLqjP2HTkSuBYyKYSlPCrbLkd5iiv9UiX1l%2BKF9Va3ybuRaPtvmoN9Gdx7G7Mmc8sH1Usc%2BGiipaI7WojOCP9JRqwCzQfT40%2FZAONxr%2FzrUILtnk89T4goxzrREoZsd%2B8z7cMyLwUdd%2Fe3DO5FUBZluN74HOqZjUqJVnS%2BKa3GgBwufuEgq0bMABMhj%2FLzPC3OQQeNSte%2Fvbz6N77rTQctbxvzo1ocFLP9rna71nipIwGPD%2FvLrK1OtJNa9MBcLD9f6ZZG%2FMdNiFgYuFrU7FfsFwWPy4%2BDSPnrhMU%2FVQ7oHXJDMI%2BpoccGOqUB%2BtBdF36Axz7vUsVAldJjzM8si1dNqCKldpintKZc35zdYFyR8y29bpcQIi0DWHCmnEVl3xGXOq6OZia77GFqysOBiIVik5Ku3sKFOxd7ElTR77NM7BUJaDLtQE2nfGsrfjTAocmDwgBihL1Q%2BAZu1qBsGr2QlxkzCLfPdQQKfK9eauk9DWeWSwd4UXQ61kXvjEoOtNE3FJiu%2FfhUCgro8S5MVwr2&X-Amz-Signature=bf11a0df0cdaaa0edfa04a505b92e2ac5244d42954375ef303e8306daa707402&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIUZIBHB%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCCmQCWBQjbNA1A20s9vHWx5NxnWnHcqDsudxI4o0W3OAIgcMcL2BDuQgxCTvkYnaY01yHsikhAGbr9qJBFd35TKTUqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLIN7UooGmsZ%2FIz8dyrcA2Ie%2FIxlOsffyoQdLT1Ppo3jELc8yQT3oD%2F%2BGsDbi5KdqmRKVEjsynXwGoIn%2FNpmeii0oDusVo%2FsNwRvShqZMNIEPLGwdQwf8SQhm70Rm6IhDgJAm5wU9mRT%2FDeJSbljj3onVDez9jMfpwumNGOe8KY567nrgsAzpt8HuheRNnzDrikypW9IzHjEUrghdzhqgnV1VOBRK3oRH6T1akyrtogoM3LSc7rTdtgcP15FYdRxzuoVbccC7aENkuyNBtyq%2F6xvNwzH7dNSpZTKAKazIxNPj8G7N0CXSLS%2BCN0xRTk1P20aE2gAYSKk9urWWeTpsICeGoAzg7pbQ3PLqjP2HTkSuBYyKYSlPCrbLkd5iiv9UiX1l%2BKF9Va3ybuRaPtvmoN9Gdx7G7Mmc8sH1Usc%2BGiipaI7WojOCP9JRqwCzQfT40%2FZAONxr%2FzrUILtnk89T4goxzrREoZsd%2B8z7cMyLwUdd%2Fe3DO5FUBZluN74HOqZjUqJVnS%2BKa3GgBwufuEgq0bMABMhj%2FLzPC3OQQeNSte%2Fvbz6N77rTQctbxvzo1ocFLP9rna71nipIwGPD%2FvLrK1OtJNa9MBcLD9f6ZZG%2FMdNiFgYuFrU7FfsFwWPy4%2BDSPnrhMU%2FVQ7oHXJDMI%2BpoccGOqUB%2BtBdF36Axz7vUsVAldJjzM8si1dNqCKldpintKZc35zdYFyR8y29bpcQIi0DWHCmnEVl3xGXOq6OZia77GFqysOBiIVik5Ku3sKFOxd7ElTR77NM7BUJaDLtQE2nfGsrfjTAocmDwgBihL1Q%2BAZu1qBsGr2QlxkzCLfPdQQKfK9eauk9DWeWSwd4UXQ61kXvjEoOtNE3FJiu%2FfhUCgro8S5MVwr2&X-Amz-Signature=1273f487c110e652814020d5ede841b443b8d99dc2d34cb983c7d56277e6f2ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
