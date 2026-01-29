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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PB7FW5Y%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9P3BKhMfTWdMtVUiyJQ9iPbpDDr7kD5%2B5mAKr9M5yygIgP2m5AJPqgKDTl%2BKuuOhmLxTJ%2FdivRHgifIQd5QGcdRYq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKhPbO5kfZgQBUO%2FkCrcAzq%2B3NW3Nq7rcpErqq93Rmmyiv8Hx9IbhJ4FYsBgyMaoACA79ikTE9v734XVIm4Hty3tPFZh4CBUjYPey%2BdKCi2VWBY%2BTeydF8PUvMvKrF8N1sePG2ZAIzCtUeLbd8vi4pAKNr4RW2q0el3WbChDEOwgUCFlC87upZ6ZfOw0MUHfB74Duoaz%2B3dDFMJJ9mBadViiHboNdvIB2Ceo3fXbegKdG8AXwVtXCOd9fSIKyuwKRNOQaLxAV%2FqN%2Bk7uvf0VykA%2FyTdgw1YJelgRI55j0tI5RFQsBkGh7J6jRtihSl5m0F2e9VzYZ4CFEwXy68h%2FXpSeTl%2FPAj7wDDl%2FKy2jAkzoskdTE5pOSsQRpFtYQMWkf3L78H%2F1hN9FV6VsXbr64Z5e1FzxfuuD5OnylYio6G2I6Wu0xJNC70czl6%2Ba09VW6qp7XZ83OBjOwhZ%2FwPZMlpS%2BiMIhIegPWcNXUSVsx0H9g%2B1CZzFX1cSjOEysx09YtGcCFapK7IAxkjVZTB8DL4R4IZ0oFqRuFecFQ%2BTVjnNwEcQ9b9pwJ0GMNcBYPKc0BlIaE9Zw40mYjOHZlUJNWer8VhijAscepMENnT8KMqKktT7VAOERV0afRbZJ6cviLRswgb%2B5ec8MzQV0MLD16ssGOqUBZobgBZpg2%2Bd0QpbJeyixFF2IGpwnAu2gELzZZAwgddYx2XELtWd4KdqACBulVPrUpKDt0sJ0Vz%2FJC333MKw2pJSohpY3pCGz0h73VrIydrvvuR0m2F2%2BlPkDh9p6jIifgwslM2%2BzZHtrZRqlHOYB2xCmuW%2BWkcHHiFK2XGo0HefaHTpxJ18lDUHQYdoXfTB%2BPZNyQZBOqYV40i7BSSC6XrHo4emi&X-Amz-Signature=8d8a46934e1a0714be8d3114192e376aee0fd0cbaaabbc6bd236b253eac23586&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PB7FW5Y%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9P3BKhMfTWdMtVUiyJQ9iPbpDDr7kD5%2B5mAKr9M5yygIgP2m5AJPqgKDTl%2BKuuOhmLxTJ%2FdivRHgifIQd5QGcdRYq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKhPbO5kfZgQBUO%2FkCrcAzq%2B3NW3Nq7rcpErqq93Rmmyiv8Hx9IbhJ4FYsBgyMaoACA79ikTE9v734XVIm4Hty3tPFZh4CBUjYPey%2BdKCi2VWBY%2BTeydF8PUvMvKrF8N1sePG2ZAIzCtUeLbd8vi4pAKNr4RW2q0el3WbChDEOwgUCFlC87upZ6ZfOw0MUHfB74Duoaz%2B3dDFMJJ9mBadViiHboNdvIB2Ceo3fXbegKdG8AXwVtXCOd9fSIKyuwKRNOQaLxAV%2FqN%2Bk7uvf0VykA%2FyTdgw1YJelgRI55j0tI5RFQsBkGh7J6jRtihSl5m0F2e9VzYZ4CFEwXy68h%2FXpSeTl%2FPAj7wDDl%2FKy2jAkzoskdTE5pOSsQRpFtYQMWkf3L78H%2F1hN9FV6VsXbr64Z5e1FzxfuuD5OnylYio6G2I6Wu0xJNC70czl6%2Ba09VW6qp7XZ83OBjOwhZ%2FwPZMlpS%2BiMIhIegPWcNXUSVsx0H9g%2B1CZzFX1cSjOEysx09YtGcCFapK7IAxkjVZTB8DL4R4IZ0oFqRuFecFQ%2BTVjnNwEcQ9b9pwJ0GMNcBYPKc0BlIaE9Zw40mYjOHZlUJNWer8VhijAscepMENnT8KMqKktT7VAOERV0afRbZJ6cviLRswgb%2B5ec8MzQV0MLD16ssGOqUBZobgBZpg2%2Bd0QpbJeyixFF2IGpwnAu2gELzZZAwgddYx2XELtWd4KdqACBulVPrUpKDt0sJ0Vz%2FJC333MKw2pJSohpY3pCGz0h73VrIydrvvuR0m2F2%2BlPkDh9p6jIifgwslM2%2BzZHtrZRqlHOYB2xCmuW%2BWkcHHiFK2XGo0HefaHTpxJ18lDUHQYdoXfTB%2BPZNyQZBOqYV40i7BSSC6XrHo4emi&X-Amz-Signature=26165671586a77b16c6b161e942e1d89886a128439d6fe57c4d9e9ef8f2d3021&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PB7FW5Y%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9P3BKhMfTWdMtVUiyJQ9iPbpDDr7kD5%2B5mAKr9M5yygIgP2m5AJPqgKDTl%2BKuuOhmLxTJ%2FdivRHgifIQd5QGcdRYq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKhPbO5kfZgQBUO%2FkCrcAzq%2B3NW3Nq7rcpErqq93Rmmyiv8Hx9IbhJ4FYsBgyMaoACA79ikTE9v734XVIm4Hty3tPFZh4CBUjYPey%2BdKCi2VWBY%2BTeydF8PUvMvKrF8N1sePG2ZAIzCtUeLbd8vi4pAKNr4RW2q0el3WbChDEOwgUCFlC87upZ6ZfOw0MUHfB74Duoaz%2B3dDFMJJ9mBadViiHboNdvIB2Ceo3fXbegKdG8AXwVtXCOd9fSIKyuwKRNOQaLxAV%2FqN%2Bk7uvf0VykA%2FyTdgw1YJelgRI55j0tI5RFQsBkGh7J6jRtihSl5m0F2e9VzYZ4CFEwXy68h%2FXpSeTl%2FPAj7wDDl%2FKy2jAkzoskdTE5pOSsQRpFtYQMWkf3L78H%2F1hN9FV6VsXbr64Z5e1FzxfuuD5OnylYio6G2I6Wu0xJNC70czl6%2Ba09VW6qp7XZ83OBjOwhZ%2FwPZMlpS%2BiMIhIegPWcNXUSVsx0H9g%2B1CZzFX1cSjOEysx09YtGcCFapK7IAxkjVZTB8DL4R4IZ0oFqRuFecFQ%2BTVjnNwEcQ9b9pwJ0GMNcBYPKc0BlIaE9Zw40mYjOHZlUJNWer8VhijAscepMENnT8KMqKktT7VAOERV0afRbZJ6cviLRswgb%2B5ec8MzQV0MLD16ssGOqUBZobgBZpg2%2Bd0QpbJeyixFF2IGpwnAu2gELzZZAwgddYx2XELtWd4KdqACBulVPrUpKDt0sJ0Vz%2FJC333MKw2pJSohpY3pCGz0h73VrIydrvvuR0m2F2%2BlPkDh9p6jIifgwslM2%2BzZHtrZRqlHOYB2xCmuW%2BWkcHHiFK2XGo0HefaHTpxJ18lDUHQYdoXfTB%2BPZNyQZBOqYV40i7BSSC6XrHo4emi&X-Amz-Signature=62bae2b414880eb29b96a8bb4730b817935b4398f61f5556e67b9972e8b7f163&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PB7FW5Y%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9P3BKhMfTWdMtVUiyJQ9iPbpDDr7kD5%2B5mAKr9M5yygIgP2m5AJPqgKDTl%2BKuuOhmLxTJ%2FdivRHgifIQd5QGcdRYq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKhPbO5kfZgQBUO%2FkCrcAzq%2B3NW3Nq7rcpErqq93Rmmyiv8Hx9IbhJ4FYsBgyMaoACA79ikTE9v734XVIm4Hty3tPFZh4CBUjYPey%2BdKCi2VWBY%2BTeydF8PUvMvKrF8N1sePG2ZAIzCtUeLbd8vi4pAKNr4RW2q0el3WbChDEOwgUCFlC87upZ6ZfOw0MUHfB74Duoaz%2B3dDFMJJ9mBadViiHboNdvIB2Ceo3fXbegKdG8AXwVtXCOd9fSIKyuwKRNOQaLxAV%2FqN%2Bk7uvf0VykA%2FyTdgw1YJelgRI55j0tI5RFQsBkGh7J6jRtihSl5m0F2e9VzYZ4CFEwXy68h%2FXpSeTl%2FPAj7wDDl%2FKy2jAkzoskdTE5pOSsQRpFtYQMWkf3L78H%2F1hN9FV6VsXbr64Z5e1FzxfuuD5OnylYio6G2I6Wu0xJNC70czl6%2Ba09VW6qp7XZ83OBjOwhZ%2FwPZMlpS%2BiMIhIegPWcNXUSVsx0H9g%2B1CZzFX1cSjOEysx09YtGcCFapK7IAxkjVZTB8DL4R4IZ0oFqRuFecFQ%2BTVjnNwEcQ9b9pwJ0GMNcBYPKc0BlIaE9Zw40mYjOHZlUJNWer8VhijAscepMENnT8KMqKktT7VAOERV0afRbZJ6cviLRswgb%2B5ec8MzQV0MLD16ssGOqUBZobgBZpg2%2Bd0QpbJeyixFF2IGpwnAu2gELzZZAwgddYx2XELtWd4KdqACBulVPrUpKDt0sJ0Vz%2FJC333MKw2pJSohpY3pCGz0h73VrIydrvvuR0m2F2%2BlPkDh9p6jIifgwslM2%2BzZHtrZRqlHOYB2xCmuW%2BWkcHHiFK2XGo0HefaHTpxJ18lDUHQYdoXfTB%2BPZNyQZBOqYV40i7BSSC6XrHo4emi&X-Amz-Signature=8db7fb59b56499281c1ce7a4a79be3cb6ed463cc85c8ae4a83ea6abe2521bbc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PB7FW5Y%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9P3BKhMfTWdMtVUiyJQ9iPbpDDr7kD5%2B5mAKr9M5yygIgP2m5AJPqgKDTl%2BKuuOhmLxTJ%2FdivRHgifIQd5QGcdRYq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKhPbO5kfZgQBUO%2FkCrcAzq%2B3NW3Nq7rcpErqq93Rmmyiv8Hx9IbhJ4FYsBgyMaoACA79ikTE9v734XVIm4Hty3tPFZh4CBUjYPey%2BdKCi2VWBY%2BTeydF8PUvMvKrF8N1sePG2ZAIzCtUeLbd8vi4pAKNr4RW2q0el3WbChDEOwgUCFlC87upZ6ZfOw0MUHfB74Duoaz%2B3dDFMJJ9mBadViiHboNdvIB2Ceo3fXbegKdG8AXwVtXCOd9fSIKyuwKRNOQaLxAV%2FqN%2Bk7uvf0VykA%2FyTdgw1YJelgRI55j0tI5RFQsBkGh7J6jRtihSl5m0F2e9VzYZ4CFEwXy68h%2FXpSeTl%2FPAj7wDDl%2FKy2jAkzoskdTE5pOSsQRpFtYQMWkf3L78H%2F1hN9FV6VsXbr64Z5e1FzxfuuD5OnylYio6G2I6Wu0xJNC70czl6%2Ba09VW6qp7XZ83OBjOwhZ%2FwPZMlpS%2BiMIhIegPWcNXUSVsx0H9g%2B1CZzFX1cSjOEysx09YtGcCFapK7IAxkjVZTB8DL4R4IZ0oFqRuFecFQ%2BTVjnNwEcQ9b9pwJ0GMNcBYPKc0BlIaE9Zw40mYjOHZlUJNWer8VhijAscepMENnT8KMqKktT7VAOERV0afRbZJ6cviLRswgb%2B5ec8MzQV0MLD16ssGOqUBZobgBZpg2%2Bd0QpbJeyixFF2IGpwnAu2gELzZZAwgddYx2XELtWd4KdqACBulVPrUpKDt0sJ0Vz%2FJC333MKw2pJSohpY3pCGz0h73VrIydrvvuR0m2F2%2BlPkDh9p6jIifgwslM2%2BzZHtrZRqlHOYB2xCmuW%2BWkcHHiFK2XGo0HefaHTpxJ18lDUHQYdoXfTB%2BPZNyQZBOqYV40i7BSSC6XrHo4emi&X-Amz-Signature=f08a163cf3e19ca65320c4123f06f887bcec001ef34ff4042a84ae0305eebe79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PB7FW5Y%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9P3BKhMfTWdMtVUiyJQ9iPbpDDr7kD5%2B5mAKr9M5yygIgP2m5AJPqgKDTl%2BKuuOhmLxTJ%2FdivRHgifIQd5QGcdRYq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKhPbO5kfZgQBUO%2FkCrcAzq%2B3NW3Nq7rcpErqq93Rmmyiv8Hx9IbhJ4FYsBgyMaoACA79ikTE9v734XVIm4Hty3tPFZh4CBUjYPey%2BdKCi2VWBY%2BTeydF8PUvMvKrF8N1sePG2ZAIzCtUeLbd8vi4pAKNr4RW2q0el3WbChDEOwgUCFlC87upZ6ZfOw0MUHfB74Duoaz%2B3dDFMJJ9mBadViiHboNdvIB2Ceo3fXbegKdG8AXwVtXCOd9fSIKyuwKRNOQaLxAV%2FqN%2Bk7uvf0VykA%2FyTdgw1YJelgRI55j0tI5RFQsBkGh7J6jRtihSl5m0F2e9VzYZ4CFEwXy68h%2FXpSeTl%2FPAj7wDDl%2FKy2jAkzoskdTE5pOSsQRpFtYQMWkf3L78H%2F1hN9FV6VsXbr64Z5e1FzxfuuD5OnylYio6G2I6Wu0xJNC70czl6%2Ba09VW6qp7XZ83OBjOwhZ%2FwPZMlpS%2BiMIhIegPWcNXUSVsx0H9g%2B1CZzFX1cSjOEysx09YtGcCFapK7IAxkjVZTB8DL4R4IZ0oFqRuFecFQ%2BTVjnNwEcQ9b9pwJ0GMNcBYPKc0BlIaE9Zw40mYjOHZlUJNWer8VhijAscepMENnT8KMqKktT7VAOERV0afRbZJ6cviLRswgb%2B5ec8MzQV0MLD16ssGOqUBZobgBZpg2%2Bd0QpbJeyixFF2IGpwnAu2gELzZZAwgddYx2XELtWd4KdqACBulVPrUpKDt0sJ0Vz%2FJC333MKw2pJSohpY3pCGz0h73VrIydrvvuR0m2F2%2BlPkDh9p6jIifgwslM2%2BzZHtrZRqlHOYB2xCmuW%2BWkcHHiFK2XGo0HefaHTpxJ18lDUHQYdoXfTB%2BPZNyQZBOqYV40i7BSSC6XrHo4emi&X-Amz-Signature=a6ebb68a30c49ef817515210f1a2268e87fe064a081e3a3ffc4d1e395fc7a86d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PB7FW5Y%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9P3BKhMfTWdMtVUiyJQ9iPbpDDr7kD5%2B5mAKr9M5yygIgP2m5AJPqgKDTl%2BKuuOhmLxTJ%2FdivRHgifIQd5QGcdRYq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKhPbO5kfZgQBUO%2FkCrcAzq%2B3NW3Nq7rcpErqq93Rmmyiv8Hx9IbhJ4FYsBgyMaoACA79ikTE9v734XVIm4Hty3tPFZh4CBUjYPey%2BdKCi2VWBY%2BTeydF8PUvMvKrF8N1sePG2ZAIzCtUeLbd8vi4pAKNr4RW2q0el3WbChDEOwgUCFlC87upZ6ZfOw0MUHfB74Duoaz%2B3dDFMJJ9mBadViiHboNdvIB2Ceo3fXbegKdG8AXwVtXCOd9fSIKyuwKRNOQaLxAV%2FqN%2Bk7uvf0VykA%2FyTdgw1YJelgRI55j0tI5RFQsBkGh7J6jRtihSl5m0F2e9VzYZ4CFEwXy68h%2FXpSeTl%2FPAj7wDDl%2FKy2jAkzoskdTE5pOSsQRpFtYQMWkf3L78H%2F1hN9FV6VsXbr64Z5e1FzxfuuD5OnylYio6G2I6Wu0xJNC70czl6%2Ba09VW6qp7XZ83OBjOwhZ%2FwPZMlpS%2BiMIhIegPWcNXUSVsx0H9g%2B1CZzFX1cSjOEysx09YtGcCFapK7IAxkjVZTB8DL4R4IZ0oFqRuFecFQ%2BTVjnNwEcQ9b9pwJ0GMNcBYPKc0BlIaE9Zw40mYjOHZlUJNWer8VhijAscepMENnT8KMqKktT7VAOERV0afRbZJ6cviLRswgb%2B5ec8MzQV0MLD16ssGOqUBZobgBZpg2%2Bd0QpbJeyixFF2IGpwnAu2gELzZZAwgddYx2XELtWd4KdqACBulVPrUpKDt0sJ0Vz%2FJC333MKw2pJSohpY3pCGz0h73VrIydrvvuR0m2F2%2BlPkDh9p6jIifgwslM2%2BzZHtrZRqlHOYB2xCmuW%2BWkcHHiFK2XGo0HefaHTpxJ18lDUHQYdoXfTB%2BPZNyQZBOqYV40i7BSSC6XrHo4emi&X-Amz-Signature=ce51ad4719e2eec194e93cc27f88b96f278d905c836e40157c9e9f6336f00064&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PB7FW5Y%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9P3BKhMfTWdMtVUiyJQ9iPbpDDr7kD5%2B5mAKr9M5yygIgP2m5AJPqgKDTl%2BKuuOhmLxTJ%2FdivRHgifIQd5QGcdRYq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKhPbO5kfZgQBUO%2FkCrcAzq%2B3NW3Nq7rcpErqq93Rmmyiv8Hx9IbhJ4FYsBgyMaoACA79ikTE9v734XVIm4Hty3tPFZh4CBUjYPey%2BdKCi2VWBY%2BTeydF8PUvMvKrF8N1sePG2ZAIzCtUeLbd8vi4pAKNr4RW2q0el3WbChDEOwgUCFlC87upZ6ZfOw0MUHfB74Duoaz%2B3dDFMJJ9mBadViiHboNdvIB2Ceo3fXbegKdG8AXwVtXCOd9fSIKyuwKRNOQaLxAV%2FqN%2Bk7uvf0VykA%2FyTdgw1YJelgRI55j0tI5RFQsBkGh7J6jRtihSl5m0F2e9VzYZ4CFEwXy68h%2FXpSeTl%2FPAj7wDDl%2FKy2jAkzoskdTE5pOSsQRpFtYQMWkf3L78H%2F1hN9FV6VsXbr64Z5e1FzxfuuD5OnylYio6G2I6Wu0xJNC70czl6%2Ba09VW6qp7XZ83OBjOwhZ%2FwPZMlpS%2BiMIhIegPWcNXUSVsx0H9g%2B1CZzFX1cSjOEysx09YtGcCFapK7IAxkjVZTB8DL4R4IZ0oFqRuFecFQ%2BTVjnNwEcQ9b9pwJ0GMNcBYPKc0BlIaE9Zw40mYjOHZlUJNWer8VhijAscepMENnT8KMqKktT7VAOERV0afRbZJ6cviLRswgb%2B5ec8MzQV0MLD16ssGOqUBZobgBZpg2%2Bd0QpbJeyixFF2IGpwnAu2gELzZZAwgddYx2XELtWd4KdqACBulVPrUpKDt0sJ0Vz%2FJC333MKw2pJSohpY3pCGz0h73VrIydrvvuR0m2F2%2BlPkDh9p6jIifgwslM2%2BzZHtrZRqlHOYB2xCmuW%2BWkcHHiFK2XGo0HefaHTpxJ18lDUHQYdoXfTB%2BPZNyQZBOqYV40i7BSSC6XrHo4emi&X-Amz-Signature=f58cbd1dc82ab3e61163f92c9759616ee13c9ff3d7e9b226d52919d18e2314cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PB7FW5Y%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9P3BKhMfTWdMtVUiyJQ9iPbpDDr7kD5%2B5mAKr9M5yygIgP2m5AJPqgKDTl%2BKuuOhmLxTJ%2FdivRHgifIQd5QGcdRYq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKhPbO5kfZgQBUO%2FkCrcAzq%2B3NW3Nq7rcpErqq93Rmmyiv8Hx9IbhJ4FYsBgyMaoACA79ikTE9v734XVIm4Hty3tPFZh4CBUjYPey%2BdKCi2VWBY%2BTeydF8PUvMvKrF8N1sePG2ZAIzCtUeLbd8vi4pAKNr4RW2q0el3WbChDEOwgUCFlC87upZ6ZfOw0MUHfB74Duoaz%2B3dDFMJJ9mBadViiHboNdvIB2Ceo3fXbegKdG8AXwVtXCOd9fSIKyuwKRNOQaLxAV%2FqN%2Bk7uvf0VykA%2FyTdgw1YJelgRI55j0tI5RFQsBkGh7J6jRtihSl5m0F2e9VzYZ4CFEwXy68h%2FXpSeTl%2FPAj7wDDl%2FKy2jAkzoskdTE5pOSsQRpFtYQMWkf3L78H%2F1hN9FV6VsXbr64Z5e1FzxfuuD5OnylYio6G2I6Wu0xJNC70czl6%2Ba09VW6qp7XZ83OBjOwhZ%2FwPZMlpS%2BiMIhIegPWcNXUSVsx0H9g%2B1CZzFX1cSjOEysx09YtGcCFapK7IAxkjVZTB8DL4R4IZ0oFqRuFecFQ%2BTVjnNwEcQ9b9pwJ0GMNcBYPKc0BlIaE9Zw40mYjOHZlUJNWer8VhijAscepMENnT8KMqKktT7VAOERV0afRbZJ6cviLRswgb%2B5ec8MzQV0MLD16ssGOqUBZobgBZpg2%2Bd0QpbJeyixFF2IGpwnAu2gELzZZAwgddYx2XELtWd4KdqACBulVPrUpKDt0sJ0Vz%2FJC333MKw2pJSohpY3pCGz0h73VrIydrvvuR0m2F2%2BlPkDh9p6jIifgwslM2%2BzZHtrZRqlHOYB2xCmuW%2BWkcHHiFK2XGo0HefaHTpxJ18lDUHQYdoXfTB%2BPZNyQZBOqYV40i7BSSC6XrHo4emi&X-Amz-Signature=557aab042268f01fe6ef694f01b90c2521abb90838b589eda503aa77990ba190&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PB7FW5Y%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9P3BKhMfTWdMtVUiyJQ9iPbpDDr7kD5%2B5mAKr9M5yygIgP2m5AJPqgKDTl%2BKuuOhmLxTJ%2FdivRHgifIQd5QGcdRYq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKhPbO5kfZgQBUO%2FkCrcAzq%2B3NW3Nq7rcpErqq93Rmmyiv8Hx9IbhJ4FYsBgyMaoACA79ikTE9v734XVIm4Hty3tPFZh4CBUjYPey%2BdKCi2VWBY%2BTeydF8PUvMvKrF8N1sePG2ZAIzCtUeLbd8vi4pAKNr4RW2q0el3WbChDEOwgUCFlC87upZ6ZfOw0MUHfB74Duoaz%2B3dDFMJJ9mBadViiHboNdvIB2Ceo3fXbegKdG8AXwVtXCOd9fSIKyuwKRNOQaLxAV%2FqN%2Bk7uvf0VykA%2FyTdgw1YJelgRI55j0tI5RFQsBkGh7J6jRtihSl5m0F2e9VzYZ4CFEwXy68h%2FXpSeTl%2FPAj7wDDl%2FKy2jAkzoskdTE5pOSsQRpFtYQMWkf3L78H%2F1hN9FV6VsXbr64Z5e1FzxfuuD5OnylYio6G2I6Wu0xJNC70czl6%2Ba09VW6qp7XZ83OBjOwhZ%2FwPZMlpS%2BiMIhIegPWcNXUSVsx0H9g%2B1CZzFX1cSjOEysx09YtGcCFapK7IAxkjVZTB8DL4R4IZ0oFqRuFecFQ%2BTVjnNwEcQ9b9pwJ0GMNcBYPKc0BlIaE9Zw40mYjOHZlUJNWer8VhijAscepMENnT8KMqKktT7VAOERV0afRbZJ6cviLRswgb%2B5ec8MzQV0MLD16ssGOqUBZobgBZpg2%2Bd0QpbJeyixFF2IGpwnAu2gELzZZAwgddYx2XELtWd4KdqACBulVPrUpKDt0sJ0Vz%2FJC333MKw2pJSohpY3pCGz0h73VrIydrvvuR0m2F2%2BlPkDh9p6jIifgwslM2%2BzZHtrZRqlHOYB2xCmuW%2BWkcHHiFK2XGo0HefaHTpxJ18lDUHQYdoXfTB%2BPZNyQZBOqYV40i7BSSC6XrHo4emi&X-Amz-Signature=60cc4764fc1dbfa52109c89eedd4bf2501986c33c3a934365d0f803d90c8e355&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PB7FW5Y%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9P3BKhMfTWdMtVUiyJQ9iPbpDDr7kD5%2B5mAKr9M5yygIgP2m5AJPqgKDTl%2BKuuOhmLxTJ%2FdivRHgifIQd5QGcdRYq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKhPbO5kfZgQBUO%2FkCrcAzq%2B3NW3Nq7rcpErqq93Rmmyiv8Hx9IbhJ4FYsBgyMaoACA79ikTE9v734XVIm4Hty3tPFZh4CBUjYPey%2BdKCi2VWBY%2BTeydF8PUvMvKrF8N1sePG2ZAIzCtUeLbd8vi4pAKNr4RW2q0el3WbChDEOwgUCFlC87upZ6ZfOw0MUHfB74Duoaz%2B3dDFMJJ9mBadViiHboNdvIB2Ceo3fXbegKdG8AXwVtXCOd9fSIKyuwKRNOQaLxAV%2FqN%2Bk7uvf0VykA%2FyTdgw1YJelgRI55j0tI5RFQsBkGh7J6jRtihSl5m0F2e9VzYZ4CFEwXy68h%2FXpSeTl%2FPAj7wDDl%2FKy2jAkzoskdTE5pOSsQRpFtYQMWkf3L78H%2F1hN9FV6VsXbr64Z5e1FzxfuuD5OnylYio6G2I6Wu0xJNC70czl6%2Ba09VW6qp7XZ83OBjOwhZ%2FwPZMlpS%2BiMIhIegPWcNXUSVsx0H9g%2B1CZzFX1cSjOEysx09YtGcCFapK7IAxkjVZTB8DL4R4IZ0oFqRuFecFQ%2BTVjnNwEcQ9b9pwJ0GMNcBYPKc0BlIaE9Zw40mYjOHZlUJNWer8VhijAscepMENnT8KMqKktT7VAOERV0afRbZJ6cviLRswgb%2B5ec8MzQV0MLD16ssGOqUBZobgBZpg2%2Bd0QpbJeyixFF2IGpwnAu2gELzZZAwgddYx2XELtWd4KdqACBulVPrUpKDt0sJ0Vz%2FJC333MKw2pJSohpY3pCGz0h73VrIydrvvuR0m2F2%2BlPkDh9p6jIifgwslM2%2BzZHtrZRqlHOYB2xCmuW%2BWkcHHiFK2XGo0HefaHTpxJ18lDUHQYdoXfTB%2BPZNyQZBOqYV40i7BSSC6XrHo4emi&X-Amz-Signature=d6b9950aad98400b72a6107e225c590ed01b28166f832b852c096147e205feec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PB7FW5Y%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9P3BKhMfTWdMtVUiyJQ9iPbpDDr7kD5%2B5mAKr9M5yygIgP2m5AJPqgKDTl%2BKuuOhmLxTJ%2FdivRHgifIQd5QGcdRYq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKhPbO5kfZgQBUO%2FkCrcAzq%2B3NW3Nq7rcpErqq93Rmmyiv8Hx9IbhJ4FYsBgyMaoACA79ikTE9v734XVIm4Hty3tPFZh4CBUjYPey%2BdKCi2VWBY%2BTeydF8PUvMvKrF8N1sePG2ZAIzCtUeLbd8vi4pAKNr4RW2q0el3WbChDEOwgUCFlC87upZ6ZfOw0MUHfB74Duoaz%2B3dDFMJJ9mBadViiHboNdvIB2Ceo3fXbegKdG8AXwVtXCOd9fSIKyuwKRNOQaLxAV%2FqN%2Bk7uvf0VykA%2FyTdgw1YJelgRI55j0tI5RFQsBkGh7J6jRtihSl5m0F2e9VzYZ4CFEwXy68h%2FXpSeTl%2FPAj7wDDl%2FKy2jAkzoskdTE5pOSsQRpFtYQMWkf3L78H%2F1hN9FV6VsXbr64Z5e1FzxfuuD5OnylYio6G2I6Wu0xJNC70czl6%2Ba09VW6qp7XZ83OBjOwhZ%2FwPZMlpS%2BiMIhIegPWcNXUSVsx0H9g%2B1CZzFX1cSjOEysx09YtGcCFapK7IAxkjVZTB8DL4R4IZ0oFqRuFecFQ%2BTVjnNwEcQ9b9pwJ0GMNcBYPKc0BlIaE9Zw40mYjOHZlUJNWer8VhijAscepMENnT8KMqKktT7VAOERV0afRbZJ6cviLRswgb%2B5ec8MzQV0MLD16ssGOqUBZobgBZpg2%2Bd0QpbJeyixFF2IGpwnAu2gELzZZAwgddYx2XELtWd4KdqACBulVPrUpKDt0sJ0Vz%2FJC333MKw2pJSohpY3pCGz0h73VrIydrvvuR0m2F2%2BlPkDh9p6jIifgwslM2%2BzZHtrZRqlHOYB2xCmuW%2BWkcHHiFK2XGo0HefaHTpxJ18lDUHQYdoXfTB%2BPZNyQZBOqYV40i7BSSC6XrHo4emi&X-Amz-Signature=e628317f59f5882b94c130d2653d3b32dea578b5e67edbec47e3c72d6b281152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PB7FW5Y%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9P3BKhMfTWdMtVUiyJQ9iPbpDDr7kD5%2B5mAKr9M5yygIgP2m5AJPqgKDTl%2BKuuOhmLxTJ%2FdivRHgifIQd5QGcdRYq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKhPbO5kfZgQBUO%2FkCrcAzq%2B3NW3Nq7rcpErqq93Rmmyiv8Hx9IbhJ4FYsBgyMaoACA79ikTE9v734XVIm4Hty3tPFZh4CBUjYPey%2BdKCi2VWBY%2BTeydF8PUvMvKrF8N1sePG2ZAIzCtUeLbd8vi4pAKNr4RW2q0el3WbChDEOwgUCFlC87upZ6ZfOw0MUHfB74Duoaz%2B3dDFMJJ9mBadViiHboNdvIB2Ceo3fXbegKdG8AXwVtXCOd9fSIKyuwKRNOQaLxAV%2FqN%2Bk7uvf0VykA%2FyTdgw1YJelgRI55j0tI5RFQsBkGh7J6jRtihSl5m0F2e9VzYZ4CFEwXy68h%2FXpSeTl%2FPAj7wDDl%2FKy2jAkzoskdTE5pOSsQRpFtYQMWkf3L78H%2F1hN9FV6VsXbr64Z5e1FzxfuuD5OnylYio6G2I6Wu0xJNC70czl6%2Ba09VW6qp7XZ83OBjOwhZ%2FwPZMlpS%2BiMIhIegPWcNXUSVsx0H9g%2B1CZzFX1cSjOEysx09YtGcCFapK7IAxkjVZTB8DL4R4IZ0oFqRuFecFQ%2BTVjnNwEcQ9b9pwJ0GMNcBYPKc0BlIaE9Zw40mYjOHZlUJNWer8VhijAscepMENnT8KMqKktT7VAOERV0afRbZJ6cviLRswgb%2B5ec8MzQV0MLD16ssGOqUBZobgBZpg2%2Bd0QpbJeyixFF2IGpwnAu2gELzZZAwgddYx2XELtWd4KdqACBulVPrUpKDt0sJ0Vz%2FJC333MKw2pJSohpY3pCGz0h73VrIydrvvuR0m2F2%2BlPkDh9p6jIifgwslM2%2BzZHtrZRqlHOYB2xCmuW%2BWkcHHiFK2XGo0HefaHTpxJ18lDUHQYdoXfTB%2BPZNyQZBOqYV40i7BSSC6XrHo4emi&X-Amz-Signature=9e507b0f73d6fd672138c9c0a855f930ef81236dfb569fe4cc76a3a1c89bf790&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PB7FW5Y%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9P3BKhMfTWdMtVUiyJQ9iPbpDDr7kD5%2B5mAKr9M5yygIgP2m5AJPqgKDTl%2BKuuOhmLxTJ%2FdivRHgifIQd5QGcdRYq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDKhPbO5kfZgQBUO%2FkCrcAzq%2B3NW3Nq7rcpErqq93Rmmyiv8Hx9IbhJ4FYsBgyMaoACA79ikTE9v734XVIm4Hty3tPFZh4CBUjYPey%2BdKCi2VWBY%2BTeydF8PUvMvKrF8N1sePG2ZAIzCtUeLbd8vi4pAKNr4RW2q0el3WbChDEOwgUCFlC87upZ6ZfOw0MUHfB74Duoaz%2B3dDFMJJ9mBadViiHboNdvIB2Ceo3fXbegKdG8AXwVtXCOd9fSIKyuwKRNOQaLxAV%2FqN%2Bk7uvf0VykA%2FyTdgw1YJelgRI55j0tI5RFQsBkGh7J6jRtihSl5m0F2e9VzYZ4CFEwXy68h%2FXpSeTl%2FPAj7wDDl%2FKy2jAkzoskdTE5pOSsQRpFtYQMWkf3L78H%2F1hN9FV6VsXbr64Z5e1FzxfuuD5OnylYio6G2I6Wu0xJNC70czl6%2Ba09VW6qp7XZ83OBjOwhZ%2FwPZMlpS%2BiMIhIegPWcNXUSVsx0H9g%2B1CZzFX1cSjOEysx09YtGcCFapK7IAxkjVZTB8DL4R4IZ0oFqRuFecFQ%2BTVjnNwEcQ9b9pwJ0GMNcBYPKc0BlIaE9Zw40mYjOHZlUJNWer8VhijAscepMENnT8KMqKktT7VAOERV0afRbZJ6cviLRswgb%2B5ec8MzQV0MLD16ssGOqUBZobgBZpg2%2Bd0QpbJeyixFF2IGpwnAu2gELzZZAwgddYx2XELtWd4KdqACBulVPrUpKDt0sJ0Vz%2FJC333MKw2pJSohpY3pCGz0h73VrIydrvvuR0m2F2%2BlPkDh9p6jIifgwslM2%2BzZHtrZRqlHOYB2xCmuW%2BWkcHHiFK2XGo0HefaHTpxJ18lDUHQYdoXfTB%2BPZNyQZBOqYV40i7BSSC6XrHo4emi&X-Amz-Signature=bda56779354750b1ed59659af8bdc02403cb92316b3cc50706f2469b27be96bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
