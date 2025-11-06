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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQ4TZ3K%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcZEbuzQoqDnJIxUIvZDqIAHmGycr%2Fy44jBTsMni5d%2FAiBujRVq7RUdUFHDqiWDFSHolziVo4CKKo9ih8MD1q4BQiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxCWicpSFEAGfBP5YKtwDtSkLOdLVMvM3e2fLNdFonhHf51pHTua44lbZaWe75skZ0EU7dbBM6TJI5fe%2BpjDSiHhm7uvoE9xDJqz9VMp9FBNM%2BLo9AX4qN1miFDjPCgXWXHoa0Lf%2FDN7syODOESNeOJXsW835rPPJKXfg2vB1qw6UZBtj7kQQ0cyCldcyWvEZ4uD4%2BptsveCswnLKT2QXQpQx5as%2F%2FxQYnaMBLKQfJDBNp0zz%2BTUj5fCq6usTQD0W%2BIdDooRjGg76d9MmE04qfj2sw86rWtQCGfzb4WfZgMUAqORGijKhdGEwxJ9xDEu%2FygqRNMDXGyMQeabV3TpR5inR6yTuuQQDehL7FSahyTG9RO%2FQULPmeLHZk16%2Fk9DMdMoqCh0i%2FlZka7w%2FXwTC2sXnIr7It9yVYSopuqQMOfhwUDv3qkuQBAct7kCeLQL0K%2B1UE2%2F9nDTYJWMVMBE0XYqS50xpSDGPj3%2F%2BCrTCPMq2yMzaoApH60wjoy%2Bdgu5MiJSnPIKUv83tqkotHSzPxtkT1CQVrK%2FFKDTQxlVizsnnVOu%2BVSN9uF47US16RgCUaOtfHoUxwjFmAW0HIjNwnbQV4Fygq0s0KwFjOI99OmqLuwkV%2FFAAad8E5S3iwwep8%2BI7XboiU9fvw5Mwu%2FCvyAY6pgHBbDXcsFc9Le122r07FB%2F%2F7wHzNIDaa8%2Bh62uELAnycV%2BD9UA6KAVnJ10VVT%2FoAYPMczYfrrChDkIFZgbQLIhmk1KylRJs8Eh4%2F3XXXE%2FHEIlpesEcgCRE%2BQbBS%2BNJu5d2czoYzW4SPrBjbV9FIfQhffIJQay4c6am4w%2FxPCnYWLv4%2FjQXp8TUTqH1bgvOLtFwYD6vDnQVMhdChFWhF9VPm%2F5eT54%2F&X-Amz-Signature=00ae56db4007d3511b6cfbcd90f3de820c39d7585cbc44c8959c1d0adfd79d4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQ4TZ3K%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcZEbuzQoqDnJIxUIvZDqIAHmGycr%2Fy44jBTsMni5d%2FAiBujRVq7RUdUFHDqiWDFSHolziVo4CKKo9ih8MD1q4BQiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxCWicpSFEAGfBP5YKtwDtSkLOdLVMvM3e2fLNdFonhHf51pHTua44lbZaWe75skZ0EU7dbBM6TJI5fe%2BpjDSiHhm7uvoE9xDJqz9VMp9FBNM%2BLo9AX4qN1miFDjPCgXWXHoa0Lf%2FDN7syODOESNeOJXsW835rPPJKXfg2vB1qw6UZBtj7kQQ0cyCldcyWvEZ4uD4%2BptsveCswnLKT2QXQpQx5as%2F%2FxQYnaMBLKQfJDBNp0zz%2BTUj5fCq6usTQD0W%2BIdDooRjGg76d9MmE04qfj2sw86rWtQCGfzb4WfZgMUAqORGijKhdGEwxJ9xDEu%2FygqRNMDXGyMQeabV3TpR5inR6yTuuQQDehL7FSahyTG9RO%2FQULPmeLHZk16%2Fk9DMdMoqCh0i%2FlZka7w%2FXwTC2sXnIr7It9yVYSopuqQMOfhwUDv3qkuQBAct7kCeLQL0K%2B1UE2%2F9nDTYJWMVMBE0XYqS50xpSDGPj3%2F%2BCrTCPMq2yMzaoApH60wjoy%2Bdgu5MiJSnPIKUv83tqkotHSzPxtkT1CQVrK%2FFKDTQxlVizsnnVOu%2BVSN9uF47US16RgCUaOtfHoUxwjFmAW0HIjNwnbQV4Fygq0s0KwFjOI99OmqLuwkV%2FFAAad8E5S3iwwep8%2BI7XboiU9fvw5Mwu%2FCvyAY6pgHBbDXcsFc9Le122r07FB%2F%2F7wHzNIDaa8%2Bh62uELAnycV%2BD9UA6KAVnJ10VVT%2FoAYPMczYfrrChDkIFZgbQLIhmk1KylRJs8Eh4%2F3XXXE%2FHEIlpesEcgCRE%2BQbBS%2BNJu5d2czoYzW4SPrBjbV9FIfQhffIJQay4c6am4w%2FxPCnYWLv4%2FjQXp8TUTqH1bgvOLtFwYD6vDnQVMhdChFWhF9VPm%2F5eT54%2F&X-Amz-Signature=ecc8ba92f8f7c77f3eb58bb744958cb534a0acf4e2599b03e505e6bd11b8b823&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQ4TZ3K%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcZEbuzQoqDnJIxUIvZDqIAHmGycr%2Fy44jBTsMni5d%2FAiBujRVq7RUdUFHDqiWDFSHolziVo4CKKo9ih8MD1q4BQiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxCWicpSFEAGfBP5YKtwDtSkLOdLVMvM3e2fLNdFonhHf51pHTua44lbZaWe75skZ0EU7dbBM6TJI5fe%2BpjDSiHhm7uvoE9xDJqz9VMp9FBNM%2BLo9AX4qN1miFDjPCgXWXHoa0Lf%2FDN7syODOESNeOJXsW835rPPJKXfg2vB1qw6UZBtj7kQQ0cyCldcyWvEZ4uD4%2BptsveCswnLKT2QXQpQx5as%2F%2FxQYnaMBLKQfJDBNp0zz%2BTUj5fCq6usTQD0W%2BIdDooRjGg76d9MmE04qfj2sw86rWtQCGfzb4WfZgMUAqORGijKhdGEwxJ9xDEu%2FygqRNMDXGyMQeabV3TpR5inR6yTuuQQDehL7FSahyTG9RO%2FQULPmeLHZk16%2Fk9DMdMoqCh0i%2FlZka7w%2FXwTC2sXnIr7It9yVYSopuqQMOfhwUDv3qkuQBAct7kCeLQL0K%2B1UE2%2F9nDTYJWMVMBE0XYqS50xpSDGPj3%2F%2BCrTCPMq2yMzaoApH60wjoy%2Bdgu5MiJSnPIKUv83tqkotHSzPxtkT1CQVrK%2FFKDTQxlVizsnnVOu%2BVSN9uF47US16RgCUaOtfHoUxwjFmAW0HIjNwnbQV4Fygq0s0KwFjOI99OmqLuwkV%2FFAAad8E5S3iwwep8%2BI7XboiU9fvw5Mwu%2FCvyAY6pgHBbDXcsFc9Le122r07FB%2F%2F7wHzNIDaa8%2Bh62uELAnycV%2BD9UA6KAVnJ10VVT%2FoAYPMczYfrrChDkIFZgbQLIhmk1KylRJs8Eh4%2F3XXXE%2FHEIlpesEcgCRE%2BQbBS%2BNJu5d2czoYzW4SPrBjbV9FIfQhffIJQay4c6am4w%2FxPCnYWLv4%2FjQXp8TUTqH1bgvOLtFwYD6vDnQVMhdChFWhF9VPm%2F5eT54%2F&X-Amz-Signature=2f1753d005da62880f625ca5a5d04543862a8b59084e81860b273458bb17569b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQ4TZ3K%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcZEbuzQoqDnJIxUIvZDqIAHmGycr%2Fy44jBTsMni5d%2FAiBujRVq7RUdUFHDqiWDFSHolziVo4CKKo9ih8MD1q4BQiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxCWicpSFEAGfBP5YKtwDtSkLOdLVMvM3e2fLNdFonhHf51pHTua44lbZaWe75skZ0EU7dbBM6TJI5fe%2BpjDSiHhm7uvoE9xDJqz9VMp9FBNM%2BLo9AX4qN1miFDjPCgXWXHoa0Lf%2FDN7syODOESNeOJXsW835rPPJKXfg2vB1qw6UZBtj7kQQ0cyCldcyWvEZ4uD4%2BptsveCswnLKT2QXQpQx5as%2F%2FxQYnaMBLKQfJDBNp0zz%2BTUj5fCq6usTQD0W%2BIdDooRjGg76d9MmE04qfj2sw86rWtQCGfzb4WfZgMUAqORGijKhdGEwxJ9xDEu%2FygqRNMDXGyMQeabV3TpR5inR6yTuuQQDehL7FSahyTG9RO%2FQULPmeLHZk16%2Fk9DMdMoqCh0i%2FlZka7w%2FXwTC2sXnIr7It9yVYSopuqQMOfhwUDv3qkuQBAct7kCeLQL0K%2B1UE2%2F9nDTYJWMVMBE0XYqS50xpSDGPj3%2F%2BCrTCPMq2yMzaoApH60wjoy%2Bdgu5MiJSnPIKUv83tqkotHSzPxtkT1CQVrK%2FFKDTQxlVizsnnVOu%2BVSN9uF47US16RgCUaOtfHoUxwjFmAW0HIjNwnbQV4Fygq0s0KwFjOI99OmqLuwkV%2FFAAad8E5S3iwwep8%2BI7XboiU9fvw5Mwu%2FCvyAY6pgHBbDXcsFc9Le122r07FB%2F%2F7wHzNIDaa8%2Bh62uELAnycV%2BD9UA6KAVnJ10VVT%2FoAYPMczYfrrChDkIFZgbQLIhmk1KylRJs8Eh4%2F3XXXE%2FHEIlpesEcgCRE%2BQbBS%2BNJu5d2czoYzW4SPrBjbV9FIfQhffIJQay4c6am4w%2FxPCnYWLv4%2FjQXp8TUTqH1bgvOLtFwYD6vDnQVMhdChFWhF9VPm%2F5eT54%2F&X-Amz-Signature=54013ce7b67489538110b1bc48f41c8bee39cca5f84f68bf6b03c0bd386f7990&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQ4TZ3K%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcZEbuzQoqDnJIxUIvZDqIAHmGycr%2Fy44jBTsMni5d%2FAiBujRVq7RUdUFHDqiWDFSHolziVo4CKKo9ih8MD1q4BQiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxCWicpSFEAGfBP5YKtwDtSkLOdLVMvM3e2fLNdFonhHf51pHTua44lbZaWe75skZ0EU7dbBM6TJI5fe%2BpjDSiHhm7uvoE9xDJqz9VMp9FBNM%2BLo9AX4qN1miFDjPCgXWXHoa0Lf%2FDN7syODOESNeOJXsW835rPPJKXfg2vB1qw6UZBtj7kQQ0cyCldcyWvEZ4uD4%2BptsveCswnLKT2QXQpQx5as%2F%2FxQYnaMBLKQfJDBNp0zz%2BTUj5fCq6usTQD0W%2BIdDooRjGg76d9MmE04qfj2sw86rWtQCGfzb4WfZgMUAqORGijKhdGEwxJ9xDEu%2FygqRNMDXGyMQeabV3TpR5inR6yTuuQQDehL7FSahyTG9RO%2FQULPmeLHZk16%2Fk9DMdMoqCh0i%2FlZka7w%2FXwTC2sXnIr7It9yVYSopuqQMOfhwUDv3qkuQBAct7kCeLQL0K%2B1UE2%2F9nDTYJWMVMBE0XYqS50xpSDGPj3%2F%2BCrTCPMq2yMzaoApH60wjoy%2Bdgu5MiJSnPIKUv83tqkotHSzPxtkT1CQVrK%2FFKDTQxlVizsnnVOu%2BVSN9uF47US16RgCUaOtfHoUxwjFmAW0HIjNwnbQV4Fygq0s0KwFjOI99OmqLuwkV%2FFAAad8E5S3iwwep8%2BI7XboiU9fvw5Mwu%2FCvyAY6pgHBbDXcsFc9Le122r07FB%2F%2F7wHzNIDaa8%2Bh62uELAnycV%2BD9UA6KAVnJ10VVT%2FoAYPMczYfrrChDkIFZgbQLIhmk1KylRJs8Eh4%2F3XXXE%2FHEIlpesEcgCRE%2BQbBS%2BNJu5d2czoYzW4SPrBjbV9FIfQhffIJQay4c6am4w%2FxPCnYWLv4%2FjQXp8TUTqH1bgvOLtFwYD6vDnQVMhdChFWhF9VPm%2F5eT54%2F&X-Amz-Signature=4189404bc0f7c9e4a2762081e7554bb6bbab2401f4e4317ecdff1150c4893494&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQ4TZ3K%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcZEbuzQoqDnJIxUIvZDqIAHmGycr%2Fy44jBTsMni5d%2FAiBujRVq7RUdUFHDqiWDFSHolziVo4CKKo9ih8MD1q4BQiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxCWicpSFEAGfBP5YKtwDtSkLOdLVMvM3e2fLNdFonhHf51pHTua44lbZaWe75skZ0EU7dbBM6TJI5fe%2BpjDSiHhm7uvoE9xDJqz9VMp9FBNM%2BLo9AX4qN1miFDjPCgXWXHoa0Lf%2FDN7syODOESNeOJXsW835rPPJKXfg2vB1qw6UZBtj7kQQ0cyCldcyWvEZ4uD4%2BptsveCswnLKT2QXQpQx5as%2F%2FxQYnaMBLKQfJDBNp0zz%2BTUj5fCq6usTQD0W%2BIdDooRjGg76d9MmE04qfj2sw86rWtQCGfzb4WfZgMUAqORGijKhdGEwxJ9xDEu%2FygqRNMDXGyMQeabV3TpR5inR6yTuuQQDehL7FSahyTG9RO%2FQULPmeLHZk16%2Fk9DMdMoqCh0i%2FlZka7w%2FXwTC2sXnIr7It9yVYSopuqQMOfhwUDv3qkuQBAct7kCeLQL0K%2B1UE2%2F9nDTYJWMVMBE0XYqS50xpSDGPj3%2F%2BCrTCPMq2yMzaoApH60wjoy%2Bdgu5MiJSnPIKUv83tqkotHSzPxtkT1CQVrK%2FFKDTQxlVizsnnVOu%2BVSN9uF47US16RgCUaOtfHoUxwjFmAW0HIjNwnbQV4Fygq0s0KwFjOI99OmqLuwkV%2FFAAad8E5S3iwwep8%2BI7XboiU9fvw5Mwu%2FCvyAY6pgHBbDXcsFc9Le122r07FB%2F%2F7wHzNIDaa8%2Bh62uELAnycV%2BD9UA6KAVnJ10VVT%2FoAYPMczYfrrChDkIFZgbQLIhmk1KylRJs8Eh4%2F3XXXE%2FHEIlpesEcgCRE%2BQbBS%2BNJu5d2czoYzW4SPrBjbV9FIfQhffIJQay4c6am4w%2FxPCnYWLv4%2FjQXp8TUTqH1bgvOLtFwYD6vDnQVMhdChFWhF9VPm%2F5eT54%2F&X-Amz-Signature=8811a00372952933643c5fe100b024e8c245b41789146164da5f81333d998319&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQ4TZ3K%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcZEbuzQoqDnJIxUIvZDqIAHmGycr%2Fy44jBTsMni5d%2FAiBujRVq7RUdUFHDqiWDFSHolziVo4CKKo9ih8MD1q4BQiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxCWicpSFEAGfBP5YKtwDtSkLOdLVMvM3e2fLNdFonhHf51pHTua44lbZaWe75skZ0EU7dbBM6TJI5fe%2BpjDSiHhm7uvoE9xDJqz9VMp9FBNM%2BLo9AX4qN1miFDjPCgXWXHoa0Lf%2FDN7syODOESNeOJXsW835rPPJKXfg2vB1qw6UZBtj7kQQ0cyCldcyWvEZ4uD4%2BptsveCswnLKT2QXQpQx5as%2F%2FxQYnaMBLKQfJDBNp0zz%2BTUj5fCq6usTQD0W%2BIdDooRjGg76d9MmE04qfj2sw86rWtQCGfzb4WfZgMUAqORGijKhdGEwxJ9xDEu%2FygqRNMDXGyMQeabV3TpR5inR6yTuuQQDehL7FSahyTG9RO%2FQULPmeLHZk16%2Fk9DMdMoqCh0i%2FlZka7w%2FXwTC2sXnIr7It9yVYSopuqQMOfhwUDv3qkuQBAct7kCeLQL0K%2B1UE2%2F9nDTYJWMVMBE0XYqS50xpSDGPj3%2F%2BCrTCPMq2yMzaoApH60wjoy%2Bdgu5MiJSnPIKUv83tqkotHSzPxtkT1CQVrK%2FFKDTQxlVizsnnVOu%2BVSN9uF47US16RgCUaOtfHoUxwjFmAW0HIjNwnbQV4Fygq0s0KwFjOI99OmqLuwkV%2FFAAad8E5S3iwwep8%2BI7XboiU9fvw5Mwu%2FCvyAY6pgHBbDXcsFc9Le122r07FB%2F%2F7wHzNIDaa8%2Bh62uELAnycV%2BD9UA6KAVnJ10VVT%2FoAYPMczYfrrChDkIFZgbQLIhmk1KylRJs8Eh4%2F3XXXE%2FHEIlpesEcgCRE%2BQbBS%2BNJu5d2czoYzW4SPrBjbV9FIfQhffIJQay4c6am4w%2FxPCnYWLv4%2FjQXp8TUTqH1bgvOLtFwYD6vDnQVMhdChFWhF9VPm%2F5eT54%2F&X-Amz-Signature=c6f728b85a1c936d8032999ce2d30016233cb5f7f7ff0c39f5fb88c13cdcd233&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQ4TZ3K%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcZEbuzQoqDnJIxUIvZDqIAHmGycr%2Fy44jBTsMni5d%2FAiBujRVq7RUdUFHDqiWDFSHolziVo4CKKo9ih8MD1q4BQiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxCWicpSFEAGfBP5YKtwDtSkLOdLVMvM3e2fLNdFonhHf51pHTua44lbZaWe75skZ0EU7dbBM6TJI5fe%2BpjDSiHhm7uvoE9xDJqz9VMp9FBNM%2BLo9AX4qN1miFDjPCgXWXHoa0Lf%2FDN7syODOESNeOJXsW835rPPJKXfg2vB1qw6UZBtj7kQQ0cyCldcyWvEZ4uD4%2BptsveCswnLKT2QXQpQx5as%2F%2FxQYnaMBLKQfJDBNp0zz%2BTUj5fCq6usTQD0W%2BIdDooRjGg76d9MmE04qfj2sw86rWtQCGfzb4WfZgMUAqORGijKhdGEwxJ9xDEu%2FygqRNMDXGyMQeabV3TpR5inR6yTuuQQDehL7FSahyTG9RO%2FQULPmeLHZk16%2Fk9DMdMoqCh0i%2FlZka7w%2FXwTC2sXnIr7It9yVYSopuqQMOfhwUDv3qkuQBAct7kCeLQL0K%2B1UE2%2F9nDTYJWMVMBE0XYqS50xpSDGPj3%2F%2BCrTCPMq2yMzaoApH60wjoy%2Bdgu5MiJSnPIKUv83tqkotHSzPxtkT1CQVrK%2FFKDTQxlVizsnnVOu%2BVSN9uF47US16RgCUaOtfHoUxwjFmAW0HIjNwnbQV4Fygq0s0KwFjOI99OmqLuwkV%2FFAAad8E5S3iwwep8%2BI7XboiU9fvw5Mwu%2FCvyAY6pgHBbDXcsFc9Le122r07FB%2F%2F7wHzNIDaa8%2Bh62uELAnycV%2BD9UA6KAVnJ10VVT%2FoAYPMczYfrrChDkIFZgbQLIhmk1KylRJs8Eh4%2F3XXXE%2FHEIlpesEcgCRE%2BQbBS%2BNJu5d2czoYzW4SPrBjbV9FIfQhffIJQay4c6am4w%2FxPCnYWLv4%2FjQXp8TUTqH1bgvOLtFwYD6vDnQVMhdChFWhF9VPm%2F5eT54%2F&X-Amz-Signature=ca27196fbdb3cd14ece4a8fe130a0ddc5bc44f7f92ba5817a137fffdb0c71702&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQ4TZ3K%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcZEbuzQoqDnJIxUIvZDqIAHmGycr%2Fy44jBTsMni5d%2FAiBujRVq7RUdUFHDqiWDFSHolziVo4CKKo9ih8MD1q4BQiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxCWicpSFEAGfBP5YKtwDtSkLOdLVMvM3e2fLNdFonhHf51pHTua44lbZaWe75skZ0EU7dbBM6TJI5fe%2BpjDSiHhm7uvoE9xDJqz9VMp9FBNM%2BLo9AX4qN1miFDjPCgXWXHoa0Lf%2FDN7syODOESNeOJXsW835rPPJKXfg2vB1qw6UZBtj7kQQ0cyCldcyWvEZ4uD4%2BptsveCswnLKT2QXQpQx5as%2F%2FxQYnaMBLKQfJDBNp0zz%2BTUj5fCq6usTQD0W%2BIdDooRjGg76d9MmE04qfj2sw86rWtQCGfzb4WfZgMUAqORGijKhdGEwxJ9xDEu%2FygqRNMDXGyMQeabV3TpR5inR6yTuuQQDehL7FSahyTG9RO%2FQULPmeLHZk16%2Fk9DMdMoqCh0i%2FlZka7w%2FXwTC2sXnIr7It9yVYSopuqQMOfhwUDv3qkuQBAct7kCeLQL0K%2B1UE2%2F9nDTYJWMVMBE0XYqS50xpSDGPj3%2F%2BCrTCPMq2yMzaoApH60wjoy%2Bdgu5MiJSnPIKUv83tqkotHSzPxtkT1CQVrK%2FFKDTQxlVizsnnVOu%2BVSN9uF47US16RgCUaOtfHoUxwjFmAW0HIjNwnbQV4Fygq0s0KwFjOI99OmqLuwkV%2FFAAad8E5S3iwwep8%2BI7XboiU9fvw5Mwu%2FCvyAY6pgHBbDXcsFc9Le122r07FB%2F%2F7wHzNIDaa8%2Bh62uELAnycV%2BD9UA6KAVnJ10VVT%2FoAYPMczYfrrChDkIFZgbQLIhmk1KylRJs8Eh4%2F3XXXE%2FHEIlpesEcgCRE%2BQbBS%2BNJu5d2czoYzW4SPrBjbV9FIfQhffIJQay4c6am4w%2FxPCnYWLv4%2FjQXp8TUTqH1bgvOLtFwYD6vDnQVMhdChFWhF9VPm%2F5eT54%2F&X-Amz-Signature=c3ccb94c1d7f5077cfaa573a84ba7d94a78c914654dbc1a70cc74115d6b5d9a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQ4TZ3K%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcZEbuzQoqDnJIxUIvZDqIAHmGycr%2Fy44jBTsMni5d%2FAiBujRVq7RUdUFHDqiWDFSHolziVo4CKKo9ih8MD1q4BQiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxCWicpSFEAGfBP5YKtwDtSkLOdLVMvM3e2fLNdFonhHf51pHTua44lbZaWe75skZ0EU7dbBM6TJI5fe%2BpjDSiHhm7uvoE9xDJqz9VMp9FBNM%2BLo9AX4qN1miFDjPCgXWXHoa0Lf%2FDN7syODOESNeOJXsW835rPPJKXfg2vB1qw6UZBtj7kQQ0cyCldcyWvEZ4uD4%2BptsveCswnLKT2QXQpQx5as%2F%2FxQYnaMBLKQfJDBNp0zz%2BTUj5fCq6usTQD0W%2BIdDooRjGg76d9MmE04qfj2sw86rWtQCGfzb4WfZgMUAqORGijKhdGEwxJ9xDEu%2FygqRNMDXGyMQeabV3TpR5inR6yTuuQQDehL7FSahyTG9RO%2FQULPmeLHZk16%2Fk9DMdMoqCh0i%2FlZka7w%2FXwTC2sXnIr7It9yVYSopuqQMOfhwUDv3qkuQBAct7kCeLQL0K%2B1UE2%2F9nDTYJWMVMBE0XYqS50xpSDGPj3%2F%2BCrTCPMq2yMzaoApH60wjoy%2Bdgu5MiJSnPIKUv83tqkotHSzPxtkT1CQVrK%2FFKDTQxlVizsnnVOu%2BVSN9uF47US16RgCUaOtfHoUxwjFmAW0HIjNwnbQV4Fygq0s0KwFjOI99OmqLuwkV%2FFAAad8E5S3iwwep8%2BI7XboiU9fvw5Mwu%2FCvyAY6pgHBbDXcsFc9Le122r07FB%2F%2F7wHzNIDaa8%2Bh62uELAnycV%2BD9UA6KAVnJ10VVT%2FoAYPMczYfrrChDkIFZgbQLIhmk1KylRJs8Eh4%2F3XXXE%2FHEIlpesEcgCRE%2BQbBS%2BNJu5d2czoYzW4SPrBjbV9FIfQhffIJQay4c6am4w%2FxPCnYWLv4%2FjQXp8TUTqH1bgvOLtFwYD6vDnQVMhdChFWhF9VPm%2F5eT54%2F&X-Amz-Signature=e919ea235ceedb60eb60eba593beb6b63f5da83f0d8fc9be9531eb4c1a7058a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQ4TZ3K%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcZEbuzQoqDnJIxUIvZDqIAHmGycr%2Fy44jBTsMni5d%2FAiBujRVq7RUdUFHDqiWDFSHolziVo4CKKo9ih8MD1q4BQiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxCWicpSFEAGfBP5YKtwDtSkLOdLVMvM3e2fLNdFonhHf51pHTua44lbZaWe75skZ0EU7dbBM6TJI5fe%2BpjDSiHhm7uvoE9xDJqz9VMp9FBNM%2BLo9AX4qN1miFDjPCgXWXHoa0Lf%2FDN7syODOESNeOJXsW835rPPJKXfg2vB1qw6UZBtj7kQQ0cyCldcyWvEZ4uD4%2BptsveCswnLKT2QXQpQx5as%2F%2FxQYnaMBLKQfJDBNp0zz%2BTUj5fCq6usTQD0W%2BIdDooRjGg76d9MmE04qfj2sw86rWtQCGfzb4WfZgMUAqORGijKhdGEwxJ9xDEu%2FygqRNMDXGyMQeabV3TpR5inR6yTuuQQDehL7FSahyTG9RO%2FQULPmeLHZk16%2Fk9DMdMoqCh0i%2FlZka7w%2FXwTC2sXnIr7It9yVYSopuqQMOfhwUDv3qkuQBAct7kCeLQL0K%2B1UE2%2F9nDTYJWMVMBE0XYqS50xpSDGPj3%2F%2BCrTCPMq2yMzaoApH60wjoy%2Bdgu5MiJSnPIKUv83tqkotHSzPxtkT1CQVrK%2FFKDTQxlVizsnnVOu%2BVSN9uF47US16RgCUaOtfHoUxwjFmAW0HIjNwnbQV4Fygq0s0KwFjOI99OmqLuwkV%2FFAAad8E5S3iwwep8%2BI7XboiU9fvw5Mwu%2FCvyAY6pgHBbDXcsFc9Le122r07FB%2F%2F7wHzNIDaa8%2Bh62uELAnycV%2BD9UA6KAVnJ10VVT%2FoAYPMczYfrrChDkIFZgbQLIhmk1KylRJs8Eh4%2F3XXXE%2FHEIlpesEcgCRE%2BQbBS%2BNJu5d2czoYzW4SPrBjbV9FIfQhffIJQay4c6am4w%2FxPCnYWLv4%2FjQXp8TUTqH1bgvOLtFwYD6vDnQVMhdChFWhF9VPm%2F5eT54%2F&X-Amz-Signature=63692b151401fae91a7a8e96305d25618cedef14990214a5be2b0f73eb4bca40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQ4TZ3K%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcZEbuzQoqDnJIxUIvZDqIAHmGycr%2Fy44jBTsMni5d%2FAiBujRVq7RUdUFHDqiWDFSHolziVo4CKKo9ih8MD1q4BQiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxCWicpSFEAGfBP5YKtwDtSkLOdLVMvM3e2fLNdFonhHf51pHTua44lbZaWe75skZ0EU7dbBM6TJI5fe%2BpjDSiHhm7uvoE9xDJqz9VMp9FBNM%2BLo9AX4qN1miFDjPCgXWXHoa0Lf%2FDN7syODOESNeOJXsW835rPPJKXfg2vB1qw6UZBtj7kQQ0cyCldcyWvEZ4uD4%2BptsveCswnLKT2QXQpQx5as%2F%2FxQYnaMBLKQfJDBNp0zz%2BTUj5fCq6usTQD0W%2BIdDooRjGg76d9MmE04qfj2sw86rWtQCGfzb4WfZgMUAqORGijKhdGEwxJ9xDEu%2FygqRNMDXGyMQeabV3TpR5inR6yTuuQQDehL7FSahyTG9RO%2FQULPmeLHZk16%2Fk9DMdMoqCh0i%2FlZka7w%2FXwTC2sXnIr7It9yVYSopuqQMOfhwUDv3qkuQBAct7kCeLQL0K%2B1UE2%2F9nDTYJWMVMBE0XYqS50xpSDGPj3%2F%2BCrTCPMq2yMzaoApH60wjoy%2Bdgu5MiJSnPIKUv83tqkotHSzPxtkT1CQVrK%2FFKDTQxlVizsnnVOu%2BVSN9uF47US16RgCUaOtfHoUxwjFmAW0HIjNwnbQV4Fygq0s0KwFjOI99OmqLuwkV%2FFAAad8E5S3iwwep8%2BI7XboiU9fvw5Mwu%2FCvyAY6pgHBbDXcsFc9Le122r07FB%2F%2F7wHzNIDaa8%2Bh62uELAnycV%2BD9UA6KAVnJ10VVT%2FoAYPMczYfrrChDkIFZgbQLIhmk1KylRJs8Eh4%2F3XXXE%2FHEIlpesEcgCRE%2BQbBS%2BNJu5d2czoYzW4SPrBjbV9FIfQhffIJQay4c6am4w%2FxPCnYWLv4%2FjQXp8TUTqH1bgvOLtFwYD6vDnQVMhdChFWhF9VPm%2F5eT54%2F&X-Amz-Signature=984f39ad632e9d90e537f42daa9d01c5f37d2a935d0c7ae625d235ed734ee957&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQ4TZ3K%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcZEbuzQoqDnJIxUIvZDqIAHmGycr%2Fy44jBTsMni5d%2FAiBujRVq7RUdUFHDqiWDFSHolziVo4CKKo9ih8MD1q4BQiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxCWicpSFEAGfBP5YKtwDtSkLOdLVMvM3e2fLNdFonhHf51pHTua44lbZaWe75skZ0EU7dbBM6TJI5fe%2BpjDSiHhm7uvoE9xDJqz9VMp9FBNM%2BLo9AX4qN1miFDjPCgXWXHoa0Lf%2FDN7syODOESNeOJXsW835rPPJKXfg2vB1qw6UZBtj7kQQ0cyCldcyWvEZ4uD4%2BptsveCswnLKT2QXQpQx5as%2F%2FxQYnaMBLKQfJDBNp0zz%2BTUj5fCq6usTQD0W%2BIdDooRjGg76d9MmE04qfj2sw86rWtQCGfzb4WfZgMUAqORGijKhdGEwxJ9xDEu%2FygqRNMDXGyMQeabV3TpR5inR6yTuuQQDehL7FSahyTG9RO%2FQULPmeLHZk16%2Fk9DMdMoqCh0i%2FlZka7w%2FXwTC2sXnIr7It9yVYSopuqQMOfhwUDv3qkuQBAct7kCeLQL0K%2B1UE2%2F9nDTYJWMVMBE0XYqS50xpSDGPj3%2F%2BCrTCPMq2yMzaoApH60wjoy%2Bdgu5MiJSnPIKUv83tqkotHSzPxtkT1CQVrK%2FFKDTQxlVizsnnVOu%2BVSN9uF47US16RgCUaOtfHoUxwjFmAW0HIjNwnbQV4Fygq0s0KwFjOI99OmqLuwkV%2FFAAad8E5S3iwwep8%2BI7XboiU9fvw5Mwu%2FCvyAY6pgHBbDXcsFc9Le122r07FB%2F%2F7wHzNIDaa8%2Bh62uELAnycV%2BD9UA6KAVnJ10VVT%2FoAYPMczYfrrChDkIFZgbQLIhmk1KylRJs8Eh4%2F3XXXE%2FHEIlpesEcgCRE%2BQbBS%2BNJu5d2czoYzW4SPrBjbV9FIfQhffIJQay4c6am4w%2FxPCnYWLv4%2FjQXp8TUTqH1bgvOLtFwYD6vDnQVMhdChFWhF9VPm%2F5eT54%2F&X-Amz-Signature=cd0d72747a28b5effda69c87a6742ebc7ae0ed6b96f9ef2ec3467b677a466a12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGQ4TZ3K%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcZEbuzQoqDnJIxUIvZDqIAHmGycr%2Fy44jBTsMni5d%2FAiBujRVq7RUdUFHDqiWDFSHolziVo4CKKo9ih8MD1q4BQiqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxCWicpSFEAGfBP5YKtwDtSkLOdLVMvM3e2fLNdFonhHf51pHTua44lbZaWe75skZ0EU7dbBM6TJI5fe%2BpjDSiHhm7uvoE9xDJqz9VMp9FBNM%2BLo9AX4qN1miFDjPCgXWXHoa0Lf%2FDN7syODOESNeOJXsW835rPPJKXfg2vB1qw6UZBtj7kQQ0cyCldcyWvEZ4uD4%2BptsveCswnLKT2QXQpQx5as%2F%2FxQYnaMBLKQfJDBNp0zz%2BTUj5fCq6usTQD0W%2BIdDooRjGg76d9MmE04qfj2sw86rWtQCGfzb4WfZgMUAqORGijKhdGEwxJ9xDEu%2FygqRNMDXGyMQeabV3TpR5inR6yTuuQQDehL7FSahyTG9RO%2FQULPmeLHZk16%2Fk9DMdMoqCh0i%2FlZka7w%2FXwTC2sXnIr7It9yVYSopuqQMOfhwUDv3qkuQBAct7kCeLQL0K%2B1UE2%2F9nDTYJWMVMBE0XYqS50xpSDGPj3%2F%2BCrTCPMq2yMzaoApH60wjoy%2Bdgu5MiJSnPIKUv83tqkotHSzPxtkT1CQVrK%2FFKDTQxlVizsnnVOu%2BVSN9uF47US16RgCUaOtfHoUxwjFmAW0HIjNwnbQV4Fygq0s0KwFjOI99OmqLuwkV%2FFAAad8E5S3iwwep8%2BI7XboiU9fvw5Mwu%2FCvyAY6pgHBbDXcsFc9Le122r07FB%2F%2F7wHzNIDaa8%2Bh62uELAnycV%2BD9UA6KAVnJ10VVT%2FoAYPMczYfrrChDkIFZgbQLIhmk1KylRJs8Eh4%2F3XXXE%2FHEIlpesEcgCRE%2BQbBS%2BNJu5d2czoYzW4SPrBjbV9FIfQhffIJQay4c6am4w%2FxPCnYWLv4%2FjQXp8TUTqH1bgvOLtFwYD6vDnQVMhdChFWhF9VPm%2F5eT54%2F&X-Amz-Signature=8e799f0fc4f7b44d3d9a235c43c1a803677e3d14b688d35211eb97f9587054ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
