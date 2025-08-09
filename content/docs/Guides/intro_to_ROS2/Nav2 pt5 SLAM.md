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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XXCT7IN%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDegUfnUc30bWC08aOJZHcOehBj%2FpZqe%2BEE9V7yvIToawIhAINJkJ5EgjSlaWs5NvcRBgeoKgoynKcfi%2BBtYDLVNqtLKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBmGJcA6TB8L%2BPwoEq3ANHvrckCl3G4po%2FuS9KHdn%2FMLNmKpH8JvmGKldAAq1jDePBL8RufD7UKujVMyXZxybFALtLDGRVbmuKJEVpvVrZOJS5DcKm2Gf2fwbBxKoYyjw0d77vWuXoUXVzeeyWbxUMvuKlDiJyuKxJ0FItrguksTNcfk4yIepZ5aVSjcBkWd3Z5aMBrHylxnXu%2F2madcsFe5hwKZ9Y%2B3GyiBgnOqdRnMaiPDSRFOxTrAtU2r6HlNwRfAEGy5Xbu%2FNDZvFFqdrF5odAnkfBHadcJbHgKNEcXRZ9oFP8avEgN2f5aydSOS8uq1R2Rpi90PSsWof3xMSxj9WphtH3qicfu1cjxrr8NCNA86nQkOIKGDFykLBdh6MkILVST74XP6C3hRKh%2BCzAKvaDJAeOFLNQmBGQ97fYZdrb4hPzJe6ZRc1IZXmzfk5xSLjVSYJuWBt4hF0jHlRSgeMI3suyLL29zH7h08p01XQX1L9uaRhOY%2B5bejllerCBBFbI0%2FycU7vsB8kupKE5E76%2BkovHDzXb06z9jzWxc%2F0LA2PD7%2BleRi6p3x3IOrebKqJ5uy3Mb6mO1jkwRj7DH7mTf0Z426oSqSXobvKJQSpv3L8QLOPmU0T4RJ119zlXY%2FII2q5Nx32RrjDHxNvEBjqkAdytNvJB0qjuClpROb0DmPBVT93w6GgtVQjRKr05Z1JBFov9M7KQO8TbUsWh0NmYS7MgDV1YlPL7%2BmzT1NtpXVE7H0o5k9GyAw%2BLndeacatgVVY3NmGax6eZoYHiZ6pBrqNBj2joFLbn25WPJL26KJ1VvxMF8OftG2VDHb5EHTrtaaLiVfv%2B%2BoLMqd4OD5WzXHdCOmlH3UxFt%2BrjfNKRkwF9SUrP&X-Amz-Signature=b751f9f85a15efb107eb31e3ec5b14ec5129bf0493800c4e01a43779d4b76743&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XXCT7IN%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDegUfnUc30bWC08aOJZHcOehBj%2FpZqe%2BEE9V7yvIToawIhAINJkJ5EgjSlaWs5NvcRBgeoKgoynKcfi%2BBtYDLVNqtLKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBmGJcA6TB8L%2BPwoEq3ANHvrckCl3G4po%2FuS9KHdn%2FMLNmKpH8JvmGKldAAq1jDePBL8RufD7UKujVMyXZxybFALtLDGRVbmuKJEVpvVrZOJS5DcKm2Gf2fwbBxKoYyjw0d77vWuXoUXVzeeyWbxUMvuKlDiJyuKxJ0FItrguksTNcfk4yIepZ5aVSjcBkWd3Z5aMBrHylxnXu%2F2madcsFe5hwKZ9Y%2B3GyiBgnOqdRnMaiPDSRFOxTrAtU2r6HlNwRfAEGy5Xbu%2FNDZvFFqdrF5odAnkfBHadcJbHgKNEcXRZ9oFP8avEgN2f5aydSOS8uq1R2Rpi90PSsWof3xMSxj9WphtH3qicfu1cjxrr8NCNA86nQkOIKGDFykLBdh6MkILVST74XP6C3hRKh%2BCzAKvaDJAeOFLNQmBGQ97fYZdrb4hPzJe6ZRc1IZXmzfk5xSLjVSYJuWBt4hF0jHlRSgeMI3suyLL29zH7h08p01XQX1L9uaRhOY%2B5bejllerCBBFbI0%2FycU7vsB8kupKE5E76%2BkovHDzXb06z9jzWxc%2F0LA2PD7%2BleRi6p3x3IOrebKqJ5uy3Mb6mO1jkwRj7DH7mTf0Z426oSqSXobvKJQSpv3L8QLOPmU0T4RJ119zlXY%2FII2q5Nx32RrjDHxNvEBjqkAdytNvJB0qjuClpROb0DmPBVT93w6GgtVQjRKr05Z1JBFov9M7KQO8TbUsWh0NmYS7MgDV1YlPL7%2BmzT1NtpXVE7H0o5k9GyAw%2BLndeacatgVVY3NmGax6eZoYHiZ6pBrqNBj2joFLbn25WPJL26KJ1VvxMF8OftG2VDHb5EHTrtaaLiVfv%2B%2BoLMqd4OD5WzXHdCOmlH3UxFt%2BrjfNKRkwF9SUrP&X-Amz-Signature=c427d96b42977e7b868d27cf3a8155f932ad26e7c8f46874d167a31e75a7c144&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XXCT7IN%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDegUfnUc30bWC08aOJZHcOehBj%2FpZqe%2BEE9V7yvIToawIhAINJkJ5EgjSlaWs5NvcRBgeoKgoynKcfi%2BBtYDLVNqtLKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBmGJcA6TB8L%2BPwoEq3ANHvrckCl3G4po%2FuS9KHdn%2FMLNmKpH8JvmGKldAAq1jDePBL8RufD7UKujVMyXZxybFALtLDGRVbmuKJEVpvVrZOJS5DcKm2Gf2fwbBxKoYyjw0d77vWuXoUXVzeeyWbxUMvuKlDiJyuKxJ0FItrguksTNcfk4yIepZ5aVSjcBkWd3Z5aMBrHylxnXu%2F2madcsFe5hwKZ9Y%2B3GyiBgnOqdRnMaiPDSRFOxTrAtU2r6HlNwRfAEGy5Xbu%2FNDZvFFqdrF5odAnkfBHadcJbHgKNEcXRZ9oFP8avEgN2f5aydSOS8uq1R2Rpi90PSsWof3xMSxj9WphtH3qicfu1cjxrr8NCNA86nQkOIKGDFykLBdh6MkILVST74XP6C3hRKh%2BCzAKvaDJAeOFLNQmBGQ97fYZdrb4hPzJe6ZRc1IZXmzfk5xSLjVSYJuWBt4hF0jHlRSgeMI3suyLL29zH7h08p01XQX1L9uaRhOY%2B5bejllerCBBFbI0%2FycU7vsB8kupKE5E76%2BkovHDzXb06z9jzWxc%2F0LA2PD7%2BleRi6p3x3IOrebKqJ5uy3Mb6mO1jkwRj7DH7mTf0Z426oSqSXobvKJQSpv3L8QLOPmU0T4RJ119zlXY%2FII2q5Nx32RrjDHxNvEBjqkAdytNvJB0qjuClpROb0DmPBVT93w6GgtVQjRKr05Z1JBFov9M7KQO8TbUsWh0NmYS7MgDV1YlPL7%2BmzT1NtpXVE7H0o5k9GyAw%2BLndeacatgVVY3NmGax6eZoYHiZ6pBrqNBj2joFLbn25WPJL26KJ1VvxMF8OftG2VDHb5EHTrtaaLiVfv%2B%2BoLMqd4OD5WzXHdCOmlH3UxFt%2BrjfNKRkwF9SUrP&X-Amz-Signature=d78132a4c0502bbc0b7e25671a7081ded691cd06db243e9fddcb947b0d36cd8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XXCT7IN%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDegUfnUc30bWC08aOJZHcOehBj%2FpZqe%2BEE9V7yvIToawIhAINJkJ5EgjSlaWs5NvcRBgeoKgoynKcfi%2BBtYDLVNqtLKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBmGJcA6TB8L%2BPwoEq3ANHvrckCl3G4po%2FuS9KHdn%2FMLNmKpH8JvmGKldAAq1jDePBL8RufD7UKujVMyXZxybFALtLDGRVbmuKJEVpvVrZOJS5DcKm2Gf2fwbBxKoYyjw0d77vWuXoUXVzeeyWbxUMvuKlDiJyuKxJ0FItrguksTNcfk4yIepZ5aVSjcBkWd3Z5aMBrHylxnXu%2F2madcsFe5hwKZ9Y%2B3GyiBgnOqdRnMaiPDSRFOxTrAtU2r6HlNwRfAEGy5Xbu%2FNDZvFFqdrF5odAnkfBHadcJbHgKNEcXRZ9oFP8avEgN2f5aydSOS8uq1R2Rpi90PSsWof3xMSxj9WphtH3qicfu1cjxrr8NCNA86nQkOIKGDFykLBdh6MkILVST74XP6C3hRKh%2BCzAKvaDJAeOFLNQmBGQ97fYZdrb4hPzJe6ZRc1IZXmzfk5xSLjVSYJuWBt4hF0jHlRSgeMI3suyLL29zH7h08p01XQX1L9uaRhOY%2B5bejllerCBBFbI0%2FycU7vsB8kupKE5E76%2BkovHDzXb06z9jzWxc%2F0LA2PD7%2BleRi6p3x3IOrebKqJ5uy3Mb6mO1jkwRj7DH7mTf0Z426oSqSXobvKJQSpv3L8QLOPmU0T4RJ119zlXY%2FII2q5Nx32RrjDHxNvEBjqkAdytNvJB0qjuClpROb0DmPBVT93w6GgtVQjRKr05Z1JBFov9M7KQO8TbUsWh0NmYS7MgDV1YlPL7%2BmzT1NtpXVE7H0o5k9GyAw%2BLndeacatgVVY3NmGax6eZoYHiZ6pBrqNBj2joFLbn25WPJL26KJ1VvxMF8OftG2VDHb5EHTrtaaLiVfv%2B%2BoLMqd4OD5WzXHdCOmlH3UxFt%2BrjfNKRkwF9SUrP&X-Amz-Signature=63e1d68b70c12db553087884a3f9815d1b099b83585a8d3994e31da9ffe7c99d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XXCT7IN%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDegUfnUc30bWC08aOJZHcOehBj%2FpZqe%2BEE9V7yvIToawIhAINJkJ5EgjSlaWs5NvcRBgeoKgoynKcfi%2BBtYDLVNqtLKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBmGJcA6TB8L%2BPwoEq3ANHvrckCl3G4po%2FuS9KHdn%2FMLNmKpH8JvmGKldAAq1jDePBL8RufD7UKujVMyXZxybFALtLDGRVbmuKJEVpvVrZOJS5DcKm2Gf2fwbBxKoYyjw0d77vWuXoUXVzeeyWbxUMvuKlDiJyuKxJ0FItrguksTNcfk4yIepZ5aVSjcBkWd3Z5aMBrHylxnXu%2F2madcsFe5hwKZ9Y%2B3GyiBgnOqdRnMaiPDSRFOxTrAtU2r6HlNwRfAEGy5Xbu%2FNDZvFFqdrF5odAnkfBHadcJbHgKNEcXRZ9oFP8avEgN2f5aydSOS8uq1R2Rpi90PSsWof3xMSxj9WphtH3qicfu1cjxrr8NCNA86nQkOIKGDFykLBdh6MkILVST74XP6C3hRKh%2BCzAKvaDJAeOFLNQmBGQ97fYZdrb4hPzJe6ZRc1IZXmzfk5xSLjVSYJuWBt4hF0jHlRSgeMI3suyLL29zH7h08p01XQX1L9uaRhOY%2B5bejllerCBBFbI0%2FycU7vsB8kupKE5E76%2BkovHDzXb06z9jzWxc%2F0LA2PD7%2BleRi6p3x3IOrebKqJ5uy3Mb6mO1jkwRj7DH7mTf0Z426oSqSXobvKJQSpv3L8QLOPmU0T4RJ119zlXY%2FII2q5Nx32RrjDHxNvEBjqkAdytNvJB0qjuClpROb0DmPBVT93w6GgtVQjRKr05Z1JBFov9M7KQO8TbUsWh0NmYS7MgDV1YlPL7%2BmzT1NtpXVE7H0o5k9GyAw%2BLndeacatgVVY3NmGax6eZoYHiZ6pBrqNBj2joFLbn25WPJL26KJ1VvxMF8OftG2VDHb5EHTrtaaLiVfv%2B%2BoLMqd4OD5WzXHdCOmlH3UxFt%2BrjfNKRkwF9SUrP&X-Amz-Signature=281236724b9f2e2229bbd90a668ba5dc872c302a06332822faa3c4217a54cff0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XXCT7IN%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDegUfnUc30bWC08aOJZHcOehBj%2FpZqe%2BEE9V7yvIToawIhAINJkJ5EgjSlaWs5NvcRBgeoKgoynKcfi%2BBtYDLVNqtLKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBmGJcA6TB8L%2BPwoEq3ANHvrckCl3G4po%2FuS9KHdn%2FMLNmKpH8JvmGKldAAq1jDePBL8RufD7UKujVMyXZxybFALtLDGRVbmuKJEVpvVrZOJS5DcKm2Gf2fwbBxKoYyjw0d77vWuXoUXVzeeyWbxUMvuKlDiJyuKxJ0FItrguksTNcfk4yIepZ5aVSjcBkWd3Z5aMBrHylxnXu%2F2madcsFe5hwKZ9Y%2B3GyiBgnOqdRnMaiPDSRFOxTrAtU2r6HlNwRfAEGy5Xbu%2FNDZvFFqdrF5odAnkfBHadcJbHgKNEcXRZ9oFP8avEgN2f5aydSOS8uq1R2Rpi90PSsWof3xMSxj9WphtH3qicfu1cjxrr8NCNA86nQkOIKGDFykLBdh6MkILVST74XP6C3hRKh%2BCzAKvaDJAeOFLNQmBGQ97fYZdrb4hPzJe6ZRc1IZXmzfk5xSLjVSYJuWBt4hF0jHlRSgeMI3suyLL29zH7h08p01XQX1L9uaRhOY%2B5bejllerCBBFbI0%2FycU7vsB8kupKE5E76%2BkovHDzXb06z9jzWxc%2F0LA2PD7%2BleRi6p3x3IOrebKqJ5uy3Mb6mO1jkwRj7DH7mTf0Z426oSqSXobvKJQSpv3L8QLOPmU0T4RJ119zlXY%2FII2q5Nx32RrjDHxNvEBjqkAdytNvJB0qjuClpROb0DmPBVT93w6GgtVQjRKr05Z1JBFov9M7KQO8TbUsWh0NmYS7MgDV1YlPL7%2BmzT1NtpXVE7H0o5k9GyAw%2BLndeacatgVVY3NmGax6eZoYHiZ6pBrqNBj2joFLbn25WPJL26KJ1VvxMF8OftG2VDHb5EHTrtaaLiVfv%2B%2BoLMqd4OD5WzXHdCOmlH3UxFt%2BrjfNKRkwF9SUrP&X-Amz-Signature=30f7682dd2afea7373330ad73c431eefb6f94186a081dddb8d025dfc4c79e165&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XXCT7IN%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDegUfnUc30bWC08aOJZHcOehBj%2FpZqe%2BEE9V7yvIToawIhAINJkJ5EgjSlaWs5NvcRBgeoKgoynKcfi%2BBtYDLVNqtLKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBmGJcA6TB8L%2BPwoEq3ANHvrckCl3G4po%2FuS9KHdn%2FMLNmKpH8JvmGKldAAq1jDePBL8RufD7UKujVMyXZxybFALtLDGRVbmuKJEVpvVrZOJS5DcKm2Gf2fwbBxKoYyjw0d77vWuXoUXVzeeyWbxUMvuKlDiJyuKxJ0FItrguksTNcfk4yIepZ5aVSjcBkWd3Z5aMBrHylxnXu%2F2madcsFe5hwKZ9Y%2B3GyiBgnOqdRnMaiPDSRFOxTrAtU2r6HlNwRfAEGy5Xbu%2FNDZvFFqdrF5odAnkfBHadcJbHgKNEcXRZ9oFP8avEgN2f5aydSOS8uq1R2Rpi90PSsWof3xMSxj9WphtH3qicfu1cjxrr8NCNA86nQkOIKGDFykLBdh6MkILVST74XP6C3hRKh%2BCzAKvaDJAeOFLNQmBGQ97fYZdrb4hPzJe6ZRc1IZXmzfk5xSLjVSYJuWBt4hF0jHlRSgeMI3suyLL29zH7h08p01XQX1L9uaRhOY%2B5bejllerCBBFbI0%2FycU7vsB8kupKE5E76%2BkovHDzXb06z9jzWxc%2F0LA2PD7%2BleRi6p3x3IOrebKqJ5uy3Mb6mO1jkwRj7DH7mTf0Z426oSqSXobvKJQSpv3L8QLOPmU0T4RJ119zlXY%2FII2q5Nx32RrjDHxNvEBjqkAdytNvJB0qjuClpROb0DmPBVT93w6GgtVQjRKr05Z1JBFov9M7KQO8TbUsWh0NmYS7MgDV1YlPL7%2BmzT1NtpXVE7H0o5k9GyAw%2BLndeacatgVVY3NmGax6eZoYHiZ6pBrqNBj2joFLbn25WPJL26KJ1VvxMF8OftG2VDHb5EHTrtaaLiVfv%2B%2BoLMqd4OD5WzXHdCOmlH3UxFt%2BrjfNKRkwF9SUrP&X-Amz-Signature=7101c5b13f31da62d82e8cde75a463678c1cb64afba20efd37b785a755340bf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XXCT7IN%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDegUfnUc30bWC08aOJZHcOehBj%2FpZqe%2BEE9V7yvIToawIhAINJkJ5EgjSlaWs5NvcRBgeoKgoynKcfi%2BBtYDLVNqtLKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBmGJcA6TB8L%2BPwoEq3ANHvrckCl3G4po%2FuS9KHdn%2FMLNmKpH8JvmGKldAAq1jDePBL8RufD7UKujVMyXZxybFALtLDGRVbmuKJEVpvVrZOJS5DcKm2Gf2fwbBxKoYyjw0d77vWuXoUXVzeeyWbxUMvuKlDiJyuKxJ0FItrguksTNcfk4yIepZ5aVSjcBkWd3Z5aMBrHylxnXu%2F2madcsFe5hwKZ9Y%2B3GyiBgnOqdRnMaiPDSRFOxTrAtU2r6HlNwRfAEGy5Xbu%2FNDZvFFqdrF5odAnkfBHadcJbHgKNEcXRZ9oFP8avEgN2f5aydSOS8uq1R2Rpi90PSsWof3xMSxj9WphtH3qicfu1cjxrr8NCNA86nQkOIKGDFykLBdh6MkILVST74XP6C3hRKh%2BCzAKvaDJAeOFLNQmBGQ97fYZdrb4hPzJe6ZRc1IZXmzfk5xSLjVSYJuWBt4hF0jHlRSgeMI3suyLL29zH7h08p01XQX1L9uaRhOY%2B5bejllerCBBFbI0%2FycU7vsB8kupKE5E76%2BkovHDzXb06z9jzWxc%2F0LA2PD7%2BleRi6p3x3IOrebKqJ5uy3Mb6mO1jkwRj7DH7mTf0Z426oSqSXobvKJQSpv3L8QLOPmU0T4RJ119zlXY%2FII2q5Nx32RrjDHxNvEBjqkAdytNvJB0qjuClpROb0DmPBVT93w6GgtVQjRKr05Z1JBFov9M7KQO8TbUsWh0NmYS7MgDV1YlPL7%2BmzT1NtpXVE7H0o5k9GyAw%2BLndeacatgVVY3NmGax6eZoYHiZ6pBrqNBj2joFLbn25WPJL26KJ1VvxMF8OftG2VDHb5EHTrtaaLiVfv%2B%2BoLMqd4OD5WzXHdCOmlH3UxFt%2BrjfNKRkwF9SUrP&X-Amz-Signature=eff16130d1eeb26d406b4a2f764a3263e05f9ecdda8d57ae8966616647ca9c88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XXCT7IN%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDegUfnUc30bWC08aOJZHcOehBj%2FpZqe%2BEE9V7yvIToawIhAINJkJ5EgjSlaWs5NvcRBgeoKgoynKcfi%2BBtYDLVNqtLKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBmGJcA6TB8L%2BPwoEq3ANHvrckCl3G4po%2FuS9KHdn%2FMLNmKpH8JvmGKldAAq1jDePBL8RufD7UKujVMyXZxybFALtLDGRVbmuKJEVpvVrZOJS5DcKm2Gf2fwbBxKoYyjw0d77vWuXoUXVzeeyWbxUMvuKlDiJyuKxJ0FItrguksTNcfk4yIepZ5aVSjcBkWd3Z5aMBrHylxnXu%2F2madcsFe5hwKZ9Y%2B3GyiBgnOqdRnMaiPDSRFOxTrAtU2r6HlNwRfAEGy5Xbu%2FNDZvFFqdrF5odAnkfBHadcJbHgKNEcXRZ9oFP8avEgN2f5aydSOS8uq1R2Rpi90PSsWof3xMSxj9WphtH3qicfu1cjxrr8NCNA86nQkOIKGDFykLBdh6MkILVST74XP6C3hRKh%2BCzAKvaDJAeOFLNQmBGQ97fYZdrb4hPzJe6ZRc1IZXmzfk5xSLjVSYJuWBt4hF0jHlRSgeMI3suyLL29zH7h08p01XQX1L9uaRhOY%2B5bejllerCBBFbI0%2FycU7vsB8kupKE5E76%2BkovHDzXb06z9jzWxc%2F0LA2PD7%2BleRi6p3x3IOrebKqJ5uy3Mb6mO1jkwRj7DH7mTf0Z426oSqSXobvKJQSpv3L8QLOPmU0T4RJ119zlXY%2FII2q5Nx32RrjDHxNvEBjqkAdytNvJB0qjuClpROb0DmPBVT93w6GgtVQjRKr05Z1JBFov9M7KQO8TbUsWh0NmYS7MgDV1YlPL7%2BmzT1NtpXVE7H0o5k9GyAw%2BLndeacatgVVY3NmGax6eZoYHiZ6pBrqNBj2joFLbn25WPJL26KJ1VvxMF8OftG2VDHb5EHTrtaaLiVfv%2B%2BoLMqd4OD5WzXHdCOmlH3UxFt%2BrjfNKRkwF9SUrP&X-Amz-Signature=cb664d0af5c83730846e2ef864f7ff6ddc433a1164d6d5908390960220c3c9c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XXCT7IN%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDegUfnUc30bWC08aOJZHcOehBj%2FpZqe%2BEE9V7yvIToawIhAINJkJ5EgjSlaWs5NvcRBgeoKgoynKcfi%2BBtYDLVNqtLKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBmGJcA6TB8L%2BPwoEq3ANHvrckCl3G4po%2FuS9KHdn%2FMLNmKpH8JvmGKldAAq1jDePBL8RufD7UKujVMyXZxybFALtLDGRVbmuKJEVpvVrZOJS5DcKm2Gf2fwbBxKoYyjw0d77vWuXoUXVzeeyWbxUMvuKlDiJyuKxJ0FItrguksTNcfk4yIepZ5aVSjcBkWd3Z5aMBrHylxnXu%2F2madcsFe5hwKZ9Y%2B3GyiBgnOqdRnMaiPDSRFOxTrAtU2r6HlNwRfAEGy5Xbu%2FNDZvFFqdrF5odAnkfBHadcJbHgKNEcXRZ9oFP8avEgN2f5aydSOS8uq1R2Rpi90PSsWof3xMSxj9WphtH3qicfu1cjxrr8NCNA86nQkOIKGDFykLBdh6MkILVST74XP6C3hRKh%2BCzAKvaDJAeOFLNQmBGQ97fYZdrb4hPzJe6ZRc1IZXmzfk5xSLjVSYJuWBt4hF0jHlRSgeMI3suyLL29zH7h08p01XQX1L9uaRhOY%2B5bejllerCBBFbI0%2FycU7vsB8kupKE5E76%2BkovHDzXb06z9jzWxc%2F0LA2PD7%2BleRi6p3x3IOrebKqJ5uy3Mb6mO1jkwRj7DH7mTf0Z426oSqSXobvKJQSpv3L8QLOPmU0T4RJ119zlXY%2FII2q5Nx32RrjDHxNvEBjqkAdytNvJB0qjuClpROb0DmPBVT93w6GgtVQjRKr05Z1JBFov9M7KQO8TbUsWh0NmYS7MgDV1YlPL7%2BmzT1NtpXVE7H0o5k9GyAw%2BLndeacatgVVY3NmGax6eZoYHiZ6pBrqNBj2joFLbn25WPJL26KJ1VvxMF8OftG2VDHb5EHTrtaaLiVfv%2B%2BoLMqd4OD5WzXHdCOmlH3UxFt%2BrjfNKRkwF9SUrP&X-Amz-Signature=602ce8c56c67a7597ac7fd6338319c20f0334e2d8eeb95acbe86bf95d45aa66d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XXCT7IN%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDegUfnUc30bWC08aOJZHcOehBj%2FpZqe%2BEE9V7yvIToawIhAINJkJ5EgjSlaWs5NvcRBgeoKgoynKcfi%2BBtYDLVNqtLKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBmGJcA6TB8L%2BPwoEq3ANHvrckCl3G4po%2FuS9KHdn%2FMLNmKpH8JvmGKldAAq1jDePBL8RufD7UKujVMyXZxybFALtLDGRVbmuKJEVpvVrZOJS5DcKm2Gf2fwbBxKoYyjw0d77vWuXoUXVzeeyWbxUMvuKlDiJyuKxJ0FItrguksTNcfk4yIepZ5aVSjcBkWd3Z5aMBrHylxnXu%2F2madcsFe5hwKZ9Y%2B3GyiBgnOqdRnMaiPDSRFOxTrAtU2r6HlNwRfAEGy5Xbu%2FNDZvFFqdrF5odAnkfBHadcJbHgKNEcXRZ9oFP8avEgN2f5aydSOS8uq1R2Rpi90PSsWof3xMSxj9WphtH3qicfu1cjxrr8NCNA86nQkOIKGDFykLBdh6MkILVST74XP6C3hRKh%2BCzAKvaDJAeOFLNQmBGQ97fYZdrb4hPzJe6ZRc1IZXmzfk5xSLjVSYJuWBt4hF0jHlRSgeMI3suyLL29zH7h08p01XQX1L9uaRhOY%2B5bejllerCBBFbI0%2FycU7vsB8kupKE5E76%2BkovHDzXb06z9jzWxc%2F0LA2PD7%2BleRi6p3x3IOrebKqJ5uy3Mb6mO1jkwRj7DH7mTf0Z426oSqSXobvKJQSpv3L8QLOPmU0T4RJ119zlXY%2FII2q5Nx32RrjDHxNvEBjqkAdytNvJB0qjuClpROb0DmPBVT93w6GgtVQjRKr05Z1JBFov9M7KQO8TbUsWh0NmYS7MgDV1YlPL7%2BmzT1NtpXVE7H0o5k9GyAw%2BLndeacatgVVY3NmGax6eZoYHiZ6pBrqNBj2joFLbn25WPJL26KJ1VvxMF8OftG2VDHb5EHTrtaaLiVfv%2B%2BoLMqd4OD5WzXHdCOmlH3UxFt%2BrjfNKRkwF9SUrP&X-Amz-Signature=d168808304d698df026665c05c82ca7fdf6e76889fc27889fb39c60b2b474c5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XXCT7IN%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDegUfnUc30bWC08aOJZHcOehBj%2FpZqe%2BEE9V7yvIToawIhAINJkJ5EgjSlaWs5NvcRBgeoKgoynKcfi%2BBtYDLVNqtLKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBmGJcA6TB8L%2BPwoEq3ANHvrckCl3G4po%2FuS9KHdn%2FMLNmKpH8JvmGKldAAq1jDePBL8RufD7UKujVMyXZxybFALtLDGRVbmuKJEVpvVrZOJS5DcKm2Gf2fwbBxKoYyjw0d77vWuXoUXVzeeyWbxUMvuKlDiJyuKxJ0FItrguksTNcfk4yIepZ5aVSjcBkWd3Z5aMBrHylxnXu%2F2madcsFe5hwKZ9Y%2B3GyiBgnOqdRnMaiPDSRFOxTrAtU2r6HlNwRfAEGy5Xbu%2FNDZvFFqdrF5odAnkfBHadcJbHgKNEcXRZ9oFP8avEgN2f5aydSOS8uq1R2Rpi90PSsWof3xMSxj9WphtH3qicfu1cjxrr8NCNA86nQkOIKGDFykLBdh6MkILVST74XP6C3hRKh%2BCzAKvaDJAeOFLNQmBGQ97fYZdrb4hPzJe6ZRc1IZXmzfk5xSLjVSYJuWBt4hF0jHlRSgeMI3suyLL29zH7h08p01XQX1L9uaRhOY%2B5bejllerCBBFbI0%2FycU7vsB8kupKE5E76%2BkovHDzXb06z9jzWxc%2F0LA2PD7%2BleRi6p3x3IOrebKqJ5uy3Mb6mO1jkwRj7DH7mTf0Z426oSqSXobvKJQSpv3L8QLOPmU0T4RJ119zlXY%2FII2q5Nx32RrjDHxNvEBjqkAdytNvJB0qjuClpROb0DmPBVT93w6GgtVQjRKr05Z1JBFov9M7KQO8TbUsWh0NmYS7MgDV1YlPL7%2BmzT1NtpXVE7H0o5k9GyAw%2BLndeacatgVVY3NmGax6eZoYHiZ6pBrqNBj2joFLbn25WPJL26KJ1VvxMF8OftG2VDHb5EHTrtaaLiVfv%2B%2BoLMqd4OD5WzXHdCOmlH3UxFt%2BrjfNKRkwF9SUrP&X-Amz-Signature=63bb0b7db99043c08fa0834321ededcd8794f0f4e3bc42628b9e0237528c8f50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XXCT7IN%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDegUfnUc30bWC08aOJZHcOehBj%2FpZqe%2BEE9V7yvIToawIhAINJkJ5EgjSlaWs5NvcRBgeoKgoynKcfi%2BBtYDLVNqtLKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBmGJcA6TB8L%2BPwoEq3ANHvrckCl3G4po%2FuS9KHdn%2FMLNmKpH8JvmGKldAAq1jDePBL8RufD7UKujVMyXZxybFALtLDGRVbmuKJEVpvVrZOJS5DcKm2Gf2fwbBxKoYyjw0d77vWuXoUXVzeeyWbxUMvuKlDiJyuKxJ0FItrguksTNcfk4yIepZ5aVSjcBkWd3Z5aMBrHylxnXu%2F2madcsFe5hwKZ9Y%2B3GyiBgnOqdRnMaiPDSRFOxTrAtU2r6HlNwRfAEGy5Xbu%2FNDZvFFqdrF5odAnkfBHadcJbHgKNEcXRZ9oFP8avEgN2f5aydSOS8uq1R2Rpi90PSsWof3xMSxj9WphtH3qicfu1cjxrr8NCNA86nQkOIKGDFykLBdh6MkILVST74XP6C3hRKh%2BCzAKvaDJAeOFLNQmBGQ97fYZdrb4hPzJe6ZRc1IZXmzfk5xSLjVSYJuWBt4hF0jHlRSgeMI3suyLL29zH7h08p01XQX1L9uaRhOY%2B5bejllerCBBFbI0%2FycU7vsB8kupKE5E76%2BkovHDzXb06z9jzWxc%2F0LA2PD7%2BleRi6p3x3IOrebKqJ5uy3Mb6mO1jkwRj7DH7mTf0Z426oSqSXobvKJQSpv3L8QLOPmU0T4RJ119zlXY%2FII2q5Nx32RrjDHxNvEBjqkAdytNvJB0qjuClpROb0DmPBVT93w6GgtVQjRKr05Z1JBFov9M7KQO8TbUsWh0NmYS7MgDV1YlPL7%2BmzT1NtpXVE7H0o5k9GyAw%2BLndeacatgVVY3NmGax6eZoYHiZ6pBrqNBj2joFLbn25WPJL26KJ1VvxMF8OftG2VDHb5EHTrtaaLiVfv%2B%2BoLMqd4OD5WzXHdCOmlH3UxFt%2BrjfNKRkwF9SUrP&X-Amz-Signature=2edd5dbc0ac7e5a6666e3c2a408d6617443a3a34101d257565d24bc68693edbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XXCT7IN%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDegUfnUc30bWC08aOJZHcOehBj%2FpZqe%2BEE9V7yvIToawIhAINJkJ5EgjSlaWs5NvcRBgeoKgoynKcfi%2BBtYDLVNqtLKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBmGJcA6TB8L%2BPwoEq3ANHvrckCl3G4po%2FuS9KHdn%2FMLNmKpH8JvmGKldAAq1jDePBL8RufD7UKujVMyXZxybFALtLDGRVbmuKJEVpvVrZOJS5DcKm2Gf2fwbBxKoYyjw0d77vWuXoUXVzeeyWbxUMvuKlDiJyuKxJ0FItrguksTNcfk4yIepZ5aVSjcBkWd3Z5aMBrHylxnXu%2F2madcsFe5hwKZ9Y%2B3GyiBgnOqdRnMaiPDSRFOxTrAtU2r6HlNwRfAEGy5Xbu%2FNDZvFFqdrF5odAnkfBHadcJbHgKNEcXRZ9oFP8avEgN2f5aydSOS8uq1R2Rpi90PSsWof3xMSxj9WphtH3qicfu1cjxrr8NCNA86nQkOIKGDFykLBdh6MkILVST74XP6C3hRKh%2BCzAKvaDJAeOFLNQmBGQ97fYZdrb4hPzJe6ZRc1IZXmzfk5xSLjVSYJuWBt4hF0jHlRSgeMI3suyLL29zH7h08p01XQX1L9uaRhOY%2B5bejllerCBBFbI0%2FycU7vsB8kupKE5E76%2BkovHDzXb06z9jzWxc%2F0LA2PD7%2BleRi6p3x3IOrebKqJ5uy3Mb6mO1jkwRj7DH7mTf0Z426oSqSXobvKJQSpv3L8QLOPmU0T4RJ119zlXY%2FII2q5Nx32RrjDHxNvEBjqkAdytNvJB0qjuClpROb0DmPBVT93w6GgtVQjRKr05Z1JBFov9M7KQO8TbUsWh0NmYS7MgDV1YlPL7%2BmzT1NtpXVE7H0o5k9GyAw%2BLndeacatgVVY3NmGax6eZoYHiZ6pBrqNBj2joFLbn25WPJL26KJ1VvxMF8OftG2VDHb5EHTrtaaLiVfv%2B%2BoLMqd4OD5WzXHdCOmlH3UxFt%2BrjfNKRkwF9SUrP&X-Amz-Signature=e69db02db5628a51a303076cf41e0a6c70169a720f868cb69a1b80d64116a5b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
