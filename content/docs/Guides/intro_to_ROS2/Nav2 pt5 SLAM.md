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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637R3XIN3%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKji%2BkH3klTX5cek90IjgkvVeKAwobgs4zvOYzPZjTjQIhAJTppBVijw2HlJHAP0o%2FnwLZgqlHsDrSyQFQx9pBL3fVKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz4QQRARjM9CBVAqAq3ANSdvQ9VyzuoHHhxVt0YXOZLUdE5d2%2Bma4ZPvq0nmUFikRs8GQ1v1CiSAaMEtDiSe1dgSlb3TGRj5YOrmZ7CUM7iSIHErc4LeDSPEuS23qf23JdYf87J3PATkcMDCVeG24l5oyopuL8u9Hb8uTutZWzNKbQKVHwtZ%2BNFv2ZhhDI%2F%2BihbJgd9ElcHygSqr%2B2Ptm8RVHIMn8nPnMNTa%2BPS0c1T%2Bz59GNfi59tNN295KMom5K6G%2BwiLnMEgtblmY9VLVZMKAx8NHzIexpAh6R1g7o3G3qimTrgOA%2B92G6%2FzSIT8RirOZWnE2qomCXMbqIGPnZgDYA0ZDI9PS6%2BbreGpLHXD9BEGMGD8OC4q%2FBA91J2TvO07uBo2IaHtqP%2BBXGFnToH04aDFf8puatzhtaSAAcS7obCVN0QMZQatA75JYUolELwocUiyBVY5Nw1rPjuHHPhT%2BJ8XoUmDh0GAUMnUSgZNhwo%2BOK7fJ%2FygVCev9%2FUV%2BlvFT7EyNGJr4rdU8Dp%2BtEpRkvspkuqmyH0SI9PmeY6XEHt1Ht64FiU1TG5%2BGfx%2BUgbap%2FJEvhtGvtTq97JR%2BVQhcsEl%2FtAZPR9ppOFdpk7mQdZ7F%2FvHg8KANfUGHS7LdrSG7Lw6ONN5681uDDA9IzOBjqkAdwhx1lddrbpYvhxUgy2HDEaykIsVLEDTlGyllPR%2BULaYUQ0ZE5QMk7VUuK9PzQp05oAwjNyU1tXZ7XYFmDrpKBLoEzSf1FOd%2FzXCF44VAvET6urpxbV%2BJD2jnfhz%2B6cdy5UfQAwu7KH%2BwDtR9qLCoIxY1jXFPMn4W5aZ190SpefHwDSvQD9DNQxi9I9Vk3qDM3uFWy8eAP8%2FhYuyNjHb70BzSAd&X-Amz-Signature=22d0d3259a8f8e4d7706849a7f0720918e8bcdfe5696f1b9d57737b04f70e7c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637R3XIN3%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKji%2BkH3klTX5cek90IjgkvVeKAwobgs4zvOYzPZjTjQIhAJTppBVijw2HlJHAP0o%2FnwLZgqlHsDrSyQFQx9pBL3fVKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz4QQRARjM9CBVAqAq3ANSdvQ9VyzuoHHhxVt0YXOZLUdE5d2%2Bma4ZPvq0nmUFikRs8GQ1v1CiSAaMEtDiSe1dgSlb3TGRj5YOrmZ7CUM7iSIHErc4LeDSPEuS23qf23JdYf87J3PATkcMDCVeG24l5oyopuL8u9Hb8uTutZWzNKbQKVHwtZ%2BNFv2ZhhDI%2F%2BihbJgd9ElcHygSqr%2B2Ptm8RVHIMn8nPnMNTa%2BPS0c1T%2Bz59GNfi59tNN295KMom5K6G%2BwiLnMEgtblmY9VLVZMKAx8NHzIexpAh6R1g7o3G3qimTrgOA%2B92G6%2FzSIT8RirOZWnE2qomCXMbqIGPnZgDYA0ZDI9PS6%2BbreGpLHXD9BEGMGD8OC4q%2FBA91J2TvO07uBo2IaHtqP%2BBXGFnToH04aDFf8puatzhtaSAAcS7obCVN0QMZQatA75JYUolELwocUiyBVY5Nw1rPjuHHPhT%2BJ8XoUmDh0GAUMnUSgZNhwo%2BOK7fJ%2FygVCev9%2FUV%2BlvFT7EyNGJr4rdU8Dp%2BtEpRkvspkuqmyH0SI9PmeY6XEHt1Ht64FiU1TG5%2BGfx%2BUgbap%2FJEvhtGvtTq97JR%2BVQhcsEl%2FtAZPR9ppOFdpk7mQdZ7F%2FvHg8KANfUGHS7LdrSG7Lw6ONN5681uDDA9IzOBjqkAdwhx1lddrbpYvhxUgy2HDEaykIsVLEDTlGyllPR%2BULaYUQ0ZE5QMk7VUuK9PzQp05oAwjNyU1tXZ7XYFmDrpKBLoEzSf1FOd%2FzXCF44VAvET6urpxbV%2BJD2jnfhz%2B6cdy5UfQAwu7KH%2BwDtR9qLCoIxY1jXFPMn4W5aZ190SpefHwDSvQD9DNQxi9I9Vk3qDM3uFWy8eAP8%2FhYuyNjHb70BzSAd&X-Amz-Signature=c2c59380c0672ce033a8d3ac6ace6fa745ca0b076dd6926b3a97a8c50cb9adb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637R3XIN3%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKji%2BkH3klTX5cek90IjgkvVeKAwobgs4zvOYzPZjTjQIhAJTppBVijw2HlJHAP0o%2FnwLZgqlHsDrSyQFQx9pBL3fVKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz4QQRARjM9CBVAqAq3ANSdvQ9VyzuoHHhxVt0YXOZLUdE5d2%2Bma4ZPvq0nmUFikRs8GQ1v1CiSAaMEtDiSe1dgSlb3TGRj5YOrmZ7CUM7iSIHErc4LeDSPEuS23qf23JdYf87J3PATkcMDCVeG24l5oyopuL8u9Hb8uTutZWzNKbQKVHwtZ%2BNFv2ZhhDI%2F%2BihbJgd9ElcHygSqr%2B2Ptm8RVHIMn8nPnMNTa%2BPS0c1T%2Bz59GNfi59tNN295KMom5K6G%2BwiLnMEgtblmY9VLVZMKAx8NHzIexpAh6R1g7o3G3qimTrgOA%2B92G6%2FzSIT8RirOZWnE2qomCXMbqIGPnZgDYA0ZDI9PS6%2BbreGpLHXD9BEGMGD8OC4q%2FBA91J2TvO07uBo2IaHtqP%2BBXGFnToH04aDFf8puatzhtaSAAcS7obCVN0QMZQatA75JYUolELwocUiyBVY5Nw1rPjuHHPhT%2BJ8XoUmDh0GAUMnUSgZNhwo%2BOK7fJ%2FygVCev9%2FUV%2BlvFT7EyNGJr4rdU8Dp%2BtEpRkvspkuqmyH0SI9PmeY6XEHt1Ht64FiU1TG5%2BGfx%2BUgbap%2FJEvhtGvtTq97JR%2BVQhcsEl%2FtAZPR9ppOFdpk7mQdZ7F%2FvHg8KANfUGHS7LdrSG7Lw6ONN5681uDDA9IzOBjqkAdwhx1lddrbpYvhxUgy2HDEaykIsVLEDTlGyllPR%2BULaYUQ0ZE5QMk7VUuK9PzQp05oAwjNyU1tXZ7XYFmDrpKBLoEzSf1FOd%2FzXCF44VAvET6urpxbV%2BJD2jnfhz%2B6cdy5UfQAwu7KH%2BwDtR9qLCoIxY1jXFPMn4W5aZ190SpefHwDSvQD9DNQxi9I9Vk3qDM3uFWy8eAP8%2FhYuyNjHb70BzSAd&X-Amz-Signature=0f89da02504462a5f536cfedb73382fffac02f592b908211c96de73b83dbfb18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637R3XIN3%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKji%2BkH3klTX5cek90IjgkvVeKAwobgs4zvOYzPZjTjQIhAJTppBVijw2HlJHAP0o%2FnwLZgqlHsDrSyQFQx9pBL3fVKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz4QQRARjM9CBVAqAq3ANSdvQ9VyzuoHHhxVt0YXOZLUdE5d2%2Bma4ZPvq0nmUFikRs8GQ1v1CiSAaMEtDiSe1dgSlb3TGRj5YOrmZ7CUM7iSIHErc4LeDSPEuS23qf23JdYf87J3PATkcMDCVeG24l5oyopuL8u9Hb8uTutZWzNKbQKVHwtZ%2BNFv2ZhhDI%2F%2BihbJgd9ElcHygSqr%2B2Ptm8RVHIMn8nPnMNTa%2BPS0c1T%2Bz59GNfi59tNN295KMom5K6G%2BwiLnMEgtblmY9VLVZMKAx8NHzIexpAh6R1g7o3G3qimTrgOA%2B92G6%2FzSIT8RirOZWnE2qomCXMbqIGPnZgDYA0ZDI9PS6%2BbreGpLHXD9BEGMGD8OC4q%2FBA91J2TvO07uBo2IaHtqP%2BBXGFnToH04aDFf8puatzhtaSAAcS7obCVN0QMZQatA75JYUolELwocUiyBVY5Nw1rPjuHHPhT%2BJ8XoUmDh0GAUMnUSgZNhwo%2BOK7fJ%2FygVCev9%2FUV%2BlvFT7EyNGJr4rdU8Dp%2BtEpRkvspkuqmyH0SI9PmeY6XEHt1Ht64FiU1TG5%2BGfx%2BUgbap%2FJEvhtGvtTq97JR%2BVQhcsEl%2FtAZPR9ppOFdpk7mQdZ7F%2FvHg8KANfUGHS7LdrSG7Lw6ONN5681uDDA9IzOBjqkAdwhx1lddrbpYvhxUgy2HDEaykIsVLEDTlGyllPR%2BULaYUQ0ZE5QMk7VUuK9PzQp05oAwjNyU1tXZ7XYFmDrpKBLoEzSf1FOd%2FzXCF44VAvET6urpxbV%2BJD2jnfhz%2B6cdy5UfQAwu7KH%2BwDtR9qLCoIxY1jXFPMn4W5aZ190SpefHwDSvQD9DNQxi9I9Vk3qDM3uFWy8eAP8%2FhYuyNjHb70BzSAd&X-Amz-Signature=b4e22101c6f92eae6d5345d57023ad08b1766ae54189f19a484b8397e5caafdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637R3XIN3%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKji%2BkH3klTX5cek90IjgkvVeKAwobgs4zvOYzPZjTjQIhAJTppBVijw2HlJHAP0o%2FnwLZgqlHsDrSyQFQx9pBL3fVKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz4QQRARjM9CBVAqAq3ANSdvQ9VyzuoHHhxVt0YXOZLUdE5d2%2Bma4ZPvq0nmUFikRs8GQ1v1CiSAaMEtDiSe1dgSlb3TGRj5YOrmZ7CUM7iSIHErc4LeDSPEuS23qf23JdYf87J3PATkcMDCVeG24l5oyopuL8u9Hb8uTutZWzNKbQKVHwtZ%2BNFv2ZhhDI%2F%2BihbJgd9ElcHygSqr%2B2Ptm8RVHIMn8nPnMNTa%2BPS0c1T%2Bz59GNfi59tNN295KMom5K6G%2BwiLnMEgtblmY9VLVZMKAx8NHzIexpAh6R1g7o3G3qimTrgOA%2B92G6%2FzSIT8RirOZWnE2qomCXMbqIGPnZgDYA0ZDI9PS6%2BbreGpLHXD9BEGMGD8OC4q%2FBA91J2TvO07uBo2IaHtqP%2BBXGFnToH04aDFf8puatzhtaSAAcS7obCVN0QMZQatA75JYUolELwocUiyBVY5Nw1rPjuHHPhT%2BJ8XoUmDh0GAUMnUSgZNhwo%2BOK7fJ%2FygVCev9%2FUV%2BlvFT7EyNGJr4rdU8Dp%2BtEpRkvspkuqmyH0SI9PmeY6XEHt1Ht64FiU1TG5%2BGfx%2BUgbap%2FJEvhtGvtTq97JR%2BVQhcsEl%2FtAZPR9ppOFdpk7mQdZ7F%2FvHg8KANfUGHS7LdrSG7Lw6ONN5681uDDA9IzOBjqkAdwhx1lddrbpYvhxUgy2HDEaykIsVLEDTlGyllPR%2BULaYUQ0ZE5QMk7VUuK9PzQp05oAwjNyU1tXZ7XYFmDrpKBLoEzSf1FOd%2FzXCF44VAvET6urpxbV%2BJD2jnfhz%2B6cdy5UfQAwu7KH%2BwDtR9qLCoIxY1jXFPMn4W5aZ190SpefHwDSvQD9DNQxi9I9Vk3qDM3uFWy8eAP8%2FhYuyNjHb70BzSAd&X-Amz-Signature=efa5a31e7d07ad9f8a0afdb077eb044eeabd941785b6d5768f7e25f47e355387&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637R3XIN3%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKji%2BkH3klTX5cek90IjgkvVeKAwobgs4zvOYzPZjTjQIhAJTppBVijw2HlJHAP0o%2FnwLZgqlHsDrSyQFQx9pBL3fVKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz4QQRARjM9CBVAqAq3ANSdvQ9VyzuoHHhxVt0YXOZLUdE5d2%2Bma4ZPvq0nmUFikRs8GQ1v1CiSAaMEtDiSe1dgSlb3TGRj5YOrmZ7CUM7iSIHErc4LeDSPEuS23qf23JdYf87J3PATkcMDCVeG24l5oyopuL8u9Hb8uTutZWzNKbQKVHwtZ%2BNFv2ZhhDI%2F%2BihbJgd9ElcHygSqr%2B2Ptm8RVHIMn8nPnMNTa%2BPS0c1T%2Bz59GNfi59tNN295KMom5K6G%2BwiLnMEgtblmY9VLVZMKAx8NHzIexpAh6R1g7o3G3qimTrgOA%2B92G6%2FzSIT8RirOZWnE2qomCXMbqIGPnZgDYA0ZDI9PS6%2BbreGpLHXD9BEGMGD8OC4q%2FBA91J2TvO07uBo2IaHtqP%2BBXGFnToH04aDFf8puatzhtaSAAcS7obCVN0QMZQatA75JYUolELwocUiyBVY5Nw1rPjuHHPhT%2BJ8XoUmDh0GAUMnUSgZNhwo%2BOK7fJ%2FygVCev9%2FUV%2BlvFT7EyNGJr4rdU8Dp%2BtEpRkvspkuqmyH0SI9PmeY6XEHt1Ht64FiU1TG5%2BGfx%2BUgbap%2FJEvhtGvtTq97JR%2BVQhcsEl%2FtAZPR9ppOFdpk7mQdZ7F%2FvHg8KANfUGHS7LdrSG7Lw6ONN5681uDDA9IzOBjqkAdwhx1lddrbpYvhxUgy2HDEaykIsVLEDTlGyllPR%2BULaYUQ0ZE5QMk7VUuK9PzQp05oAwjNyU1tXZ7XYFmDrpKBLoEzSf1FOd%2FzXCF44VAvET6urpxbV%2BJD2jnfhz%2B6cdy5UfQAwu7KH%2BwDtR9qLCoIxY1jXFPMn4W5aZ190SpefHwDSvQD9DNQxi9I9Vk3qDM3uFWy8eAP8%2FhYuyNjHb70BzSAd&X-Amz-Signature=9d564a2c2a1db71dcee590faadc6398bc31cd28762645118acdaccd23b636d29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637R3XIN3%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKji%2BkH3klTX5cek90IjgkvVeKAwobgs4zvOYzPZjTjQIhAJTppBVijw2HlJHAP0o%2FnwLZgqlHsDrSyQFQx9pBL3fVKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz4QQRARjM9CBVAqAq3ANSdvQ9VyzuoHHhxVt0YXOZLUdE5d2%2Bma4ZPvq0nmUFikRs8GQ1v1CiSAaMEtDiSe1dgSlb3TGRj5YOrmZ7CUM7iSIHErc4LeDSPEuS23qf23JdYf87J3PATkcMDCVeG24l5oyopuL8u9Hb8uTutZWzNKbQKVHwtZ%2BNFv2ZhhDI%2F%2BihbJgd9ElcHygSqr%2B2Ptm8RVHIMn8nPnMNTa%2BPS0c1T%2Bz59GNfi59tNN295KMom5K6G%2BwiLnMEgtblmY9VLVZMKAx8NHzIexpAh6R1g7o3G3qimTrgOA%2B92G6%2FzSIT8RirOZWnE2qomCXMbqIGPnZgDYA0ZDI9PS6%2BbreGpLHXD9BEGMGD8OC4q%2FBA91J2TvO07uBo2IaHtqP%2BBXGFnToH04aDFf8puatzhtaSAAcS7obCVN0QMZQatA75JYUolELwocUiyBVY5Nw1rPjuHHPhT%2BJ8XoUmDh0GAUMnUSgZNhwo%2BOK7fJ%2FygVCev9%2FUV%2BlvFT7EyNGJr4rdU8Dp%2BtEpRkvspkuqmyH0SI9PmeY6XEHt1Ht64FiU1TG5%2BGfx%2BUgbap%2FJEvhtGvtTq97JR%2BVQhcsEl%2FtAZPR9ppOFdpk7mQdZ7F%2FvHg8KANfUGHS7LdrSG7Lw6ONN5681uDDA9IzOBjqkAdwhx1lddrbpYvhxUgy2HDEaykIsVLEDTlGyllPR%2BULaYUQ0ZE5QMk7VUuK9PzQp05oAwjNyU1tXZ7XYFmDrpKBLoEzSf1FOd%2FzXCF44VAvET6urpxbV%2BJD2jnfhz%2B6cdy5UfQAwu7KH%2BwDtR9qLCoIxY1jXFPMn4W5aZ190SpefHwDSvQD9DNQxi9I9Vk3qDM3uFWy8eAP8%2FhYuyNjHb70BzSAd&X-Amz-Signature=a41314fdda4196a00b64daf1f2c9e1aa7eb3abe8c4add7a0809abf4784e8e3ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637R3XIN3%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKji%2BkH3klTX5cek90IjgkvVeKAwobgs4zvOYzPZjTjQIhAJTppBVijw2HlJHAP0o%2FnwLZgqlHsDrSyQFQx9pBL3fVKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz4QQRARjM9CBVAqAq3ANSdvQ9VyzuoHHhxVt0YXOZLUdE5d2%2Bma4ZPvq0nmUFikRs8GQ1v1CiSAaMEtDiSe1dgSlb3TGRj5YOrmZ7CUM7iSIHErc4LeDSPEuS23qf23JdYf87J3PATkcMDCVeG24l5oyopuL8u9Hb8uTutZWzNKbQKVHwtZ%2BNFv2ZhhDI%2F%2BihbJgd9ElcHygSqr%2B2Ptm8RVHIMn8nPnMNTa%2BPS0c1T%2Bz59GNfi59tNN295KMom5K6G%2BwiLnMEgtblmY9VLVZMKAx8NHzIexpAh6R1g7o3G3qimTrgOA%2B92G6%2FzSIT8RirOZWnE2qomCXMbqIGPnZgDYA0ZDI9PS6%2BbreGpLHXD9BEGMGD8OC4q%2FBA91J2TvO07uBo2IaHtqP%2BBXGFnToH04aDFf8puatzhtaSAAcS7obCVN0QMZQatA75JYUolELwocUiyBVY5Nw1rPjuHHPhT%2BJ8XoUmDh0GAUMnUSgZNhwo%2BOK7fJ%2FygVCev9%2FUV%2BlvFT7EyNGJr4rdU8Dp%2BtEpRkvspkuqmyH0SI9PmeY6XEHt1Ht64FiU1TG5%2BGfx%2BUgbap%2FJEvhtGvtTq97JR%2BVQhcsEl%2FtAZPR9ppOFdpk7mQdZ7F%2FvHg8KANfUGHS7LdrSG7Lw6ONN5681uDDA9IzOBjqkAdwhx1lddrbpYvhxUgy2HDEaykIsVLEDTlGyllPR%2BULaYUQ0ZE5QMk7VUuK9PzQp05oAwjNyU1tXZ7XYFmDrpKBLoEzSf1FOd%2FzXCF44VAvET6urpxbV%2BJD2jnfhz%2B6cdy5UfQAwu7KH%2BwDtR9qLCoIxY1jXFPMn4W5aZ190SpefHwDSvQD9DNQxi9I9Vk3qDM3uFWy8eAP8%2FhYuyNjHb70BzSAd&X-Amz-Signature=7deeb243a77808cc57cd3b4b31b46303df09ffb6954300ca16219d2c9889a864&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637R3XIN3%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKji%2BkH3klTX5cek90IjgkvVeKAwobgs4zvOYzPZjTjQIhAJTppBVijw2HlJHAP0o%2FnwLZgqlHsDrSyQFQx9pBL3fVKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz4QQRARjM9CBVAqAq3ANSdvQ9VyzuoHHhxVt0YXOZLUdE5d2%2Bma4ZPvq0nmUFikRs8GQ1v1CiSAaMEtDiSe1dgSlb3TGRj5YOrmZ7CUM7iSIHErc4LeDSPEuS23qf23JdYf87J3PATkcMDCVeG24l5oyopuL8u9Hb8uTutZWzNKbQKVHwtZ%2BNFv2ZhhDI%2F%2BihbJgd9ElcHygSqr%2B2Ptm8RVHIMn8nPnMNTa%2BPS0c1T%2Bz59GNfi59tNN295KMom5K6G%2BwiLnMEgtblmY9VLVZMKAx8NHzIexpAh6R1g7o3G3qimTrgOA%2B92G6%2FzSIT8RirOZWnE2qomCXMbqIGPnZgDYA0ZDI9PS6%2BbreGpLHXD9BEGMGD8OC4q%2FBA91J2TvO07uBo2IaHtqP%2BBXGFnToH04aDFf8puatzhtaSAAcS7obCVN0QMZQatA75JYUolELwocUiyBVY5Nw1rPjuHHPhT%2BJ8XoUmDh0GAUMnUSgZNhwo%2BOK7fJ%2FygVCev9%2FUV%2BlvFT7EyNGJr4rdU8Dp%2BtEpRkvspkuqmyH0SI9PmeY6XEHt1Ht64FiU1TG5%2BGfx%2BUgbap%2FJEvhtGvtTq97JR%2BVQhcsEl%2FtAZPR9ppOFdpk7mQdZ7F%2FvHg8KANfUGHS7LdrSG7Lw6ONN5681uDDA9IzOBjqkAdwhx1lddrbpYvhxUgy2HDEaykIsVLEDTlGyllPR%2BULaYUQ0ZE5QMk7VUuK9PzQp05oAwjNyU1tXZ7XYFmDrpKBLoEzSf1FOd%2FzXCF44VAvET6urpxbV%2BJD2jnfhz%2B6cdy5UfQAwu7KH%2BwDtR9qLCoIxY1jXFPMn4W5aZ190SpefHwDSvQD9DNQxi9I9Vk3qDM3uFWy8eAP8%2FhYuyNjHb70BzSAd&X-Amz-Signature=063df7ec5ff76716bf93971b71bc4c884c657a3af023783e79fe4106b75e332c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637R3XIN3%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKji%2BkH3klTX5cek90IjgkvVeKAwobgs4zvOYzPZjTjQIhAJTppBVijw2HlJHAP0o%2FnwLZgqlHsDrSyQFQx9pBL3fVKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz4QQRARjM9CBVAqAq3ANSdvQ9VyzuoHHhxVt0YXOZLUdE5d2%2Bma4ZPvq0nmUFikRs8GQ1v1CiSAaMEtDiSe1dgSlb3TGRj5YOrmZ7CUM7iSIHErc4LeDSPEuS23qf23JdYf87J3PATkcMDCVeG24l5oyopuL8u9Hb8uTutZWzNKbQKVHwtZ%2BNFv2ZhhDI%2F%2BihbJgd9ElcHygSqr%2B2Ptm8RVHIMn8nPnMNTa%2BPS0c1T%2Bz59GNfi59tNN295KMom5K6G%2BwiLnMEgtblmY9VLVZMKAx8NHzIexpAh6R1g7o3G3qimTrgOA%2B92G6%2FzSIT8RirOZWnE2qomCXMbqIGPnZgDYA0ZDI9PS6%2BbreGpLHXD9BEGMGD8OC4q%2FBA91J2TvO07uBo2IaHtqP%2BBXGFnToH04aDFf8puatzhtaSAAcS7obCVN0QMZQatA75JYUolELwocUiyBVY5Nw1rPjuHHPhT%2BJ8XoUmDh0GAUMnUSgZNhwo%2BOK7fJ%2FygVCev9%2FUV%2BlvFT7EyNGJr4rdU8Dp%2BtEpRkvspkuqmyH0SI9PmeY6XEHt1Ht64FiU1TG5%2BGfx%2BUgbap%2FJEvhtGvtTq97JR%2BVQhcsEl%2FtAZPR9ppOFdpk7mQdZ7F%2FvHg8KANfUGHS7LdrSG7Lw6ONN5681uDDA9IzOBjqkAdwhx1lddrbpYvhxUgy2HDEaykIsVLEDTlGyllPR%2BULaYUQ0ZE5QMk7VUuK9PzQp05oAwjNyU1tXZ7XYFmDrpKBLoEzSf1FOd%2FzXCF44VAvET6urpxbV%2BJD2jnfhz%2B6cdy5UfQAwu7KH%2BwDtR9qLCoIxY1jXFPMn4W5aZ190SpefHwDSvQD9DNQxi9I9Vk3qDM3uFWy8eAP8%2FhYuyNjHb70BzSAd&X-Amz-Signature=1346abd838a9287ca972a456f79fc6265b1701b52f71c7e2685917716d4b1eeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637R3XIN3%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKji%2BkH3klTX5cek90IjgkvVeKAwobgs4zvOYzPZjTjQIhAJTppBVijw2HlJHAP0o%2FnwLZgqlHsDrSyQFQx9pBL3fVKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz4QQRARjM9CBVAqAq3ANSdvQ9VyzuoHHhxVt0YXOZLUdE5d2%2Bma4ZPvq0nmUFikRs8GQ1v1CiSAaMEtDiSe1dgSlb3TGRj5YOrmZ7CUM7iSIHErc4LeDSPEuS23qf23JdYf87J3PATkcMDCVeG24l5oyopuL8u9Hb8uTutZWzNKbQKVHwtZ%2BNFv2ZhhDI%2F%2BihbJgd9ElcHygSqr%2B2Ptm8RVHIMn8nPnMNTa%2BPS0c1T%2Bz59GNfi59tNN295KMom5K6G%2BwiLnMEgtblmY9VLVZMKAx8NHzIexpAh6R1g7o3G3qimTrgOA%2B92G6%2FzSIT8RirOZWnE2qomCXMbqIGPnZgDYA0ZDI9PS6%2BbreGpLHXD9BEGMGD8OC4q%2FBA91J2TvO07uBo2IaHtqP%2BBXGFnToH04aDFf8puatzhtaSAAcS7obCVN0QMZQatA75JYUolELwocUiyBVY5Nw1rPjuHHPhT%2BJ8XoUmDh0GAUMnUSgZNhwo%2BOK7fJ%2FygVCev9%2FUV%2BlvFT7EyNGJr4rdU8Dp%2BtEpRkvspkuqmyH0SI9PmeY6XEHt1Ht64FiU1TG5%2BGfx%2BUgbap%2FJEvhtGvtTq97JR%2BVQhcsEl%2FtAZPR9ppOFdpk7mQdZ7F%2FvHg8KANfUGHS7LdrSG7Lw6ONN5681uDDA9IzOBjqkAdwhx1lddrbpYvhxUgy2HDEaykIsVLEDTlGyllPR%2BULaYUQ0ZE5QMk7VUuK9PzQp05oAwjNyU1tXZ7XYFmDrpKBLoEzSf1FOd%2FzXCF44VAvET6urpxbV%2BJD2jnfhz%2B6cdy5UfQAwu7KH%2BwDtR9qLCoIxY1jXFPMn4W5aZ190SpefHwDSvQD9DNQxi9I9Vk3qDM3uFWy8eAP8%2FhYuyNjHb70BzSAd&X-Amz-Signature=bbc95f987851b2dc606f01aa4a16d6dd5d2e31fa63c51a7fa43e3de8b76114e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637R3XIN3%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKji%2BkH3klTX5cek90IjgkvVeKAwobgs4zvOYzPZjTjQIhAJTppBVijw2HlJHAP0o%2FnwLZgqlHsDrSyQFQx9pBL3fVKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz4QQRARjM9CBVAqAq3ANSdvQ9VyzuoHHhxVt0YXOZLUdE5d2%2Bma4ZPvq0nmUFikRs8GQ1v1CiSAaMEtDiSe1dgSlb3TGRj5YOrmZ7CUM7iSIHErc4LeDSPEuS23qf23JdYf87J3PATkcMDCVeG24l5oyopuL8u9Hb8uTutZWzNKbQKVHwtZ%2BNFv2ZhhDI%2F%2BihbJgd9ElcHygSqr%2B2Ptm8RVHIMn8nPnMNTa%2BPS0c1T%2Bz59GNfi59tNN295KMom5K6G%2BwiLnMEgtblmY9VLVZMKAx8NHzIexpAh6R1g7o3G3qimTrgOA%2B92G6%2FzSIT8RirOZWnE2qomCXMbqIGPnZgDYA0ZDI9PS6%2BbreGpLHXD9BEGMGD8OC4q%2FBA91J2TvO07uBo2IaHtqP%2BBXGFnToH04aDFf8puatzhtaSAAcS7obCVN0QMZQatA75JYUolELwocUiyBVY5Nw1rPjuHHPhT%2BJ8XoUmDh0GAUMnUSgZNhwo%2BOK7fJ%2FygVCev9%2FUV%2BlvFT7EyNGJr4rdU8Dp%2BtEpRkvspkuqmyH0SI9PmeY6XEHt1Ht64FiU1TG5%2BGfx%2BUgbap%2FJEvhtGvtTq97JR%2BVQhcsEl%2FtAZPR9ppOFdpk7mQdZ7F%2FvHg8KANfUGHS7LdrSG7Lw6ONN5681uDDA9IzOBjqkAdwhx1lddrbpYvhxUgy2HDEaykIsVLEDTlGyllPR%2BULaYUQ0ZE5QMk7VUuK9PzQp05oAwjNyU1tXZ7XYFmDrpKBLoEzSf1FOd%2FzXCF44VAvET6urpxbV%2BJD2jnfhz%2B6cdy5UfQAwu7KH%2BwDtR9qLCoIxY1jXFPMn4W5aZ190SpefHwDSvQD9DNQxi9I9Vk3qDM3uFWy8eAP8%2FhYuyNjHb70BzSAd&X-Amz-Signature=1d657d592810f995093d230811a2828978ac03669b86382cf5299e16dda56d2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637R3XIN3%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKji%2BkH3klTX5cek90IjgkvVeKAwobgs4zvOYzPZjTjQIhAJTppBVijw2HlJHAP0o%2FnwLZgqlHsDrSyQFQx9pBL3fVKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz4QQRARjM9CBVAqAq3ANSdvQ9VyzuoHHhxVt0YXOZLUdE5d2%2Bma4ZPvq0nmUFikRs8GQ1v1CiSAaMEtDiSe1dgSlb3TGRj5YOrmZ7CUM7iSIHErc4LeDSPEuS23qf23JdYf87J3PATkcMDCVeG24l5oyopuL8u9Hb8uTutZWzNKbQKVHwtZ%2BNFv2ZhhDI%2F%2BihbJgd9ElcHygSqr%2B2Ptm8RVHIMn8nPnMNTa%2BPS0c1T%2Bz59GNfi59tNN295KMom5K6G%2BwiLnMEgtblmY9VLVZMKAx8NHzIexpAh6R1g7o3G3qimTrgOA%2B92G6%2FzSIT8RirOZWnE2qomCXMbqIGPnZgDYA0ZDI9PS6%2BbreGpLHXD9BEGMGD8OC4q%2FBA91J2TvO07uBo2IaHtqP%2BBXGFnToH04aDFf8puatzhtaSAAcS7obCVN0QMZQatA75JYUolELwocUiyBVY5Nw1rPjuHHPhT%2BJ8XoUmDh0GAUMnUSgZNhwo%2BOK7fJ%2FygVCev9%2FUV%2BlvFT7EyNGJr4rdU8Dp%2BtEpRkvspkuqmyH0SI9PmeY6XEHt1Ht64FiU1TG5%2BGfx%2BUgbap%2FJEvhtGvtTq97JR%2BVQhcsEl%2FtAZPR9ppOFdpk7mQdZ7F%2FvHg8KANfUGHS7LdrSG7Lw6ONN5681uDDA9IzOBjqkAdwhx1lddrbpYvhxUgy2HDEaykIsVLEDTlGyllPR%2BULaYUQ0ZE5QMk7VUuK9PzQp05oAwjNyU1tXZ7XYFmDrpKBLoEzSf1FOd%2FzXCF44VAvET6urpxbV%2BJD2jnfhz%2B6cdy5UfQAwu7KH%2BwDtR9qLCoIxY1jXFPMn4W5aZ190SpefHwDSvQD9DNQxi9I9Vk3qDM3uFWy8eAP8%2FhYuyNjHb70BzSAd&X-Amz-Signature=9e85974d0d53a8d8163eb5b35817b67a02a72869fbddbe08a187fc90ddc30c59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637R3XIN3%2F20260325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260325T021353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKji%2BkH3klTX5cek90IjgkvVeKAwobgs4zvOYzPZjTjQIhAJTppBVijw2HlJHAP0o%2FnwLZgqlHsDrSyQFQx9pBL3fVKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwz4QQRARjM9CBVAqAq3ANSdvQ9VyzuoHHhxVt0YXOZLUdE5d2%2Bma4ZPvq0nmUFikRs8GQ1v1CiSAaMEtDiSe1dgSlb3TGRj5YOrmZ7CUM7iSIHErc4LeDSPEuS23qf23JdYf87J3PATkcMDCVeG24l5oyopuL8u9Hb8uTutZWzNKbQKVHwtZ%2BNFv2ZhhDI%2F%2BihbJgd9ElcHygSqr%2B2Ptm8RVHIMn8nPnMNTa%2BPS0c1T%2Bz59GNfi59tNN295KMom5K6G%2BwiLnMEgtblmY9VLVZMKAx8NHzIexpAh6R1g7o3G3qimTrgOA%2B92G6%2FzSIT8RirOZWnE2qomCXMbqIGPnZgDYA0ZDI9PS6%2BbreGpLHXD9BEGMGD8OC4q%2FBA91J2TvO07uBo2IaHtqP%2BBXGFnToH04aDFf8puatzhtaSAAcS7obCVN0QMZQatA75JYUolELwocUiyBVY5Nw1rPjuHHPhT%2BJ8XoUmDh0GAUMnUSgZNhwo%2BOK7fJ%2FygVCev9%2FUV%2BlvFT7EyNGJr4rdU8Dp%2BtEpRkvspkuqmyH0SI9PmeY6XEHt1Ht64FiU1TG5%2BGfx%2BUgbap%2FJEvhtGvtTq97JR%2BVQhcsEl%2FtAZPR9ppOFdpk7mQdZ7F%2FvHg8KANfUGHS7LdrSG7Lw6ONN5681uDDA9IzOBjqkAdwhx1lddrbpYvhxUgy2HDEaykIsVLEDTlGyllPR%2BULaYUQ0ZE5QMk7VUuK9PzQp05oAwjNyU1tXZ7XYFmDrpKBLoEzSf1FOd%2FzXCF44VAvET6urpxbV%2BJD2jnfhz%2B6cdy5UfQAwu7KH%2BwDtR9qLCoIxY1jXFPMn4W5aZ190SpefHwDSvQD9DNQxi9I9Vk3qDM3uFWy8eAP8%2FhYuyNjHb70BzSAd&X-Amz-Signature=05b000136d14f0808358b7087fe3bba324b1a40e596aff334c33469d885b7b0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
