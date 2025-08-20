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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TRTTDBA%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzQBZpDCaL9O%2BAJ%2FQ5ZVT%2FOXsmr4EFvSSSlAQstADw3gIhAJ7rxVcPS7XKQ6VRI2%2FICqOkldmJ9EWOzlcG7NR3TyBmKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySjz85ZrPSwwabv4Qq3ANJWI3VnaAzj6fZKxk1RbyfU2GXIxLLC%2FkGVXzSZpdJlSnY%2BR4i2gQgk5TTsWL3qGfUVhoH7fcJ8olxr%2FpFVwYZcd14VM5gWsxvw%2FdPoqpj3tkLEaDLRdKOpXEg8X%2BTiTAzvYylbWGL6JMfvo2%2BZcmIxewRWCpCytYd3qOZYMMVSiCQ9vxbQ5bATnxe3llxcfHisstD%2B1VpcJ5GuTbpD4ETI1khiOBxIZ%2BDq%2FiMII8ag1wqkSuqZkQ721GUStkoQ1CZlgFSCZ7JzGvE%2Bm9qVpFgOl8sYte4MkcgidqTXA1V6Wi59QzwNpPXFcaiko%2Bg2MEie9Y7qJP2hwh%2Fqva40EwqqgsGo6D7QgUiEtHEUi33NBPus%2BSsUUf%2Bs4iZzDMmdS5Td%2BleSA7%2FrZHpn0EqHz5Lt4JKCayrKgqsxxAPl3OBre%2FEOXS3bkDKsiRbUunW%2FtQfjRpcq6FBBr7kRXIDrnMMvua5CbzD4j9svzVKz4FoXbUW2y0yTlvUjovQq1KrvFgU%2BQXsKiDoGmehItbpdKtqRN6qTTtlqYarzvOgRWG09jS%2FwxX%2BZaFdI4%2BlMh1eABPGP37XnMKs%2FjtArHIfa7La%2FK%2F5Sca9BwoTCWbr1xBePDAOu5VGF3SBRWtKaDDYp5bFBjqkAXrZnk2sry53tZPhH91mMcggQtodtSkdL6wsFzGtR3d7%2Fa5KeSNpPSILQ3CjPk11%2BG3t0W4nERt5vxf4D1EnEu5rAUyzy%2FV%2FkZ1kf%2BcpBLJlwlEnsHbTa9DF2pXHqmQRAvLIOYj8zY%2Fvfm1mYpfA7dbtg2u%2BerK0DfN%2FN%2B4bYaLCuRXxc9mn7smvBnC5rXEoXcWBKFdU0wQNh6mZlLnJIM8iCuQ0&X-Amz-Signature=3bdc52a7e3a75b25ed39735bec23ba9e0314e33a1e0b5d040bebcdd1537596a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TRTTDBA%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzQBZpDCaL9O%2BAJ%2FQ5ZVT%2FOXsmr4EFvSSSlAQstADw3gIhAJ7rxVcPS7XKQ6VRI2%2FICqOkldmJ9EWOzlcG7NR3TyBmKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySjz85ZrPSwwabv4Qq3ANJWI3VnaAzj6fZKxk1RbyfU2GXIxLLC%2FkGVXzSZpdJlSnY%2BR4i2gQgk5TTsWL3qGfUVhoH7fcJ8olxr%2FpFVwYZcd14VM5gWsxvw%2FdPoqpj3tkLEaDLRdKOpXEg8X%2BTiTAzvYylbWGL6JMfvo2%2BZcmIxewRWCpCytYd3qOZYMMVSiCQ9vxbQ5bATnxe3llxcfHisstD%2B1VpcJ5GuTbpD4ETI1khiOBxIZ%2BDq%2FiMII8ag1wqkSuqZkQ721GUStkoQ1CZlgFSCZ7JzGvE%2Bm9qVpFgOl8sYte4MkcgidqTXA1V6Wi59QzwNpPXFcaiko%2Bg2MEie9Y7qJP2hwh%2Fqva40EwqqgsGo6D7QgUiEtHEUi33NBPus%2BSsUUf%2Bs4iZzDMmdS5Td%2BleSA7%2FrZHpn0EqHz5Lt4JKCayrKgqsxxAPl3OBre%2FEOXS3bkDKsiRbUunW%2FtQfjRpcq6FBBr7kRXIDrnMMvua5CbzD4j9svzVKz4FoXbUW2y0yTlvUjovQq1KrvFgU%2BQXsKiDoGmehItbpdKtqRN6qTTtlqYarzvOgRWG09jS%2FwxX%2BZaFdI4%2BlMh1eABPGP37XnMKs%2FjtArHIfa7La%2FK%2F5Sca9BwoTCWbr1xBePDAOu5VGF3SBRWtKaDDYp5bFBjqkAXrZnk2sry53tZPhH91mMcggQtodtSkdL6wsFzGtR3d7%2Fa5KeSNpPSILQ3CjPk11%2BG3t0W4nERt5vxf4D1EnEu5rAUyzy%2FV%2FkZ1kf%2BcpBLJlwlEnsHbTa9DF2pXHqmQRAvLIOYj8zY%2Fvfm1mYpfA7dbtg2u%2BerK0DfN%2FN%2B4bYaLCuRXxc9mn7smvBnC5rXEoXcWBKFdU0wQNh6mZlLnJIM8iCuQ0&X-Amz-Signature=52b0d8a3c922bc45c03aa603e553527c8c926a6d19376ef134a555a90b4314bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TRTTDBA%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzQBZpDCaL9O%2BAJ%2FQ5ZVT%2FOXsmr4EFvSSSlAQstADw3gIhAJ7rxVcPS7XKQ6VRI2%2FICqOkldmJ9EWOzlcG7NR3TyBmKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySjz85ZrPSwwabv4Qq3ANJWI3VnaAzj6fZKxk1RbyfU2GXIxLLC%2FkGVXzSZpdJlSnY%2BR4i2gQgk5TTsWL3qGfUVhoH7fcJ8olxr%2FpFVwYZcd14VM5gWsxvw%2FdPoqpj3tkLEaDLRdKOpXEg8X%2BTiTAzvYylbWGL6JMfvo2%2BZcmIxewRWCpCytYd3qOZYMMVSiCQ9vxbQ5bATnxe3llxcfHisstD%2B1VpcJ5GuTbpD4ETI1khiOBxIZ%2BDq%2FiMII8ag1wqkSuqZkQ721GUStkoQ1CZlgFSCZ7JzGvE%2Bm9qVpFgOl8sYte4MkcgidqTXA1V6Wi59QzwNpPXFcaiko%2Bg2MEie9Y7qJP2hwh%2Fqva40EwqqgsGo6D7QgUiEtHEUi33NBPus%2BSsUUf%2Bs4iZzDMmdS5Td%2BleSA7%2FrZHpn0EqHz5Lt4JKCayrKgqsxxAPl3OBre%2FEOXS3bkDKsiRbUunW%2FtQfjRpcq6FBBr7kRXIDrnMMvua5CbzD4j9svzVKz4FoXbUW2y0yTlvUjovQq1KrvFgU%2BQXsKiDoGmehItbpdKtqRN6qTTtlqYarzvOgRWG09jS%2FwxX%2BZaFdI4%2BlMh1eABPGP37XnMKs%2FjtArHIfa7La%2FK%2F5Sca9BwoTCWbr1xBePDAOu5VGF3SBRWtKaDDYp5bFBjqkAXrZnk2sry53tZPhH91mMcggQtodtSkdL6wsFzGtR3d7%2Fa5KeSNpPSILQ3CjPk11%2BG3t0W4nERt5vxf4D1EnEu5rAUyzy%2FV%2FkZ1kf%2BcpBLJlwlEnsHbTa9DF2pXHqmQRAvLIOYj8zY%2Fvfm1mYpfA7dbtg2u%2BerK0DfN%2FN%2B4bYaLCuRXxc9mn7smvBnC5rXEoXcWBKFdU0wQNh6mZlLnJIM8iCuQ0&X-Amz-Signature=7249f219008e93d2d7372ecfa8fff0477d53dc74a78c0acbe5ac000f3338cb87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TRTTDBA%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzQBZpDCaL9O%2BAJ%2FQ5ZVT%2FOXsmr4EFvSSSlAQstADw3gIhAJ7rxVcPS7XKQ6VRI2%2FICqOkldmJ9EWOzlcG7NR3TyBmKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySjz85ZrPSwwabv4Qq3ANJWI3VnaAzj6fZKxk1RbyfU2GXIxLLC%2FkGVXzSZpdJlSnY%2BR4i2gQgk5TTsWL3qGfUVhoH7fcJ8olxr%2FpFVwYZcd14VM5gWsxvw%2FdPoqpj3tkLEaDLRdKOpXEg8X%2BTiTAzvYylbWGL6JMfvo2%2BZcmIxewRWCpCytYd3qOZYMMVSiCQ9vxbQ5bATnxe3llxcfHisstD%2B1VpcJ5GuTbpD4ETI1khiOBxIZ%2BDq%2FiMII8ag1wqkSuqZkQ721GUStkoQ1CZlgFSCZ7JzGvE%2Bm9qVpFgOl8sYte4MkcgidqTXA1V6Wi59QzwNpPXFcaiko%2Bg2MEie9Y7qJP2hwh%2Fqva40EwqqgsGo6D7QgUiEtHEUi33NBPus%2BSsUUf%2Bs4iZzDMmdS5Td%2BleSA7%2FrZHpn0EqHz5Lt4JKCayrKgqsxxAPl3OBre%2FEOXS3bkDKsiRbUunW%2FtQfjRpcq6FBBr7kRXIDrnMMvua5CbzD4j9svzVKz4FoXbUW2y0yTlvUjovQq1KrvFgU%2BQXsKiDoGmehItbpdKtqRN6qTTtlqYarzvOgRWG09jS%2FwxX%2BZaFdI4%2BlMh1eABPGP37XnMKs%2FjtArHIfa7La%2FK%2F5Sca9BwoTCWbr1xBePDAOu5VGF3SBRWtKaDDYp5bFBjqkAXrZnk2sry53tZPhH91mMcggQtodtSkdL6wsFzGtR3d7%2Fa5KeSNpPSILQ3CjPk11%2BG3t0W4nERt5vxf4D1EnEu5rAUyzy%2FV%2FkZ1kf%2BcpBLJlwlEnsHbTa9DF2pXHqmQRAvLIOYj8zY%2Fvfm1mYpfA7dbtg2u%2BerK0DfN%2FN%2B4bYaLCuRXxc9mn7smvBnC5rXEoXcWBKFdU0wQNh6mZlLnJIM8iCuQ0&X-Amz-Signature=6275fff969210559ca263ef4e63a623299a561a7fb0bf235700c79980c7e3159&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TRTTDBA%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzQBZpDCaL9O%2BAJ%2FQ5ZVT%2FOXsmr4EFvSSSlAQstADw3gIhAJ7rxVcPS7XKQ6VRI2%2FICqOkldmJ9EWOzlcG7NR3TyBmKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySjz85ZrPSwwabv4Qq3ANJWI3VnaAzj6fZKxk1RbyfU2GXIxLLC%2FkGVXzSZpdJlSnY%2BR4i2gQgk5TTsWL3qGfUVhoH7fcJ8olxr%2FpFVwYZcd14VM5gWsxvw%2FdPoqpj3tkLEaDLRdKOpXEg8X%2BTiTAzvYylbWGL6JMfvo2%2BZcmIxewRWCpCytYd3qOZYMMVSiCQ9vxbQ5bATnxe3llxcfHisstD%2B1VpcJ5GuTbpD4ETI1khiOBxIZ%2BDq%2FiMII8ag1wqkSuqZkQ721GUStkoQ1CZlgFSCZ7JzGvE%2Bm9qVpFgOl8sYte4MkcgidqTXA1V6Wi59QzwNpPXFcaiko%2Bg2MEie9Y7qJP2hwh%2Fqva40EwqqgsGo6D7QgUiEtHEUi33NBPus%2BSsUUf%2Bs4iZzDMmdS5Td%2BleSA7%2FrZHpn0EqHz5Lt4JKCayrKgqsxxAPl3OBre%2FEOXS3bkDKsiRbUunW%2FtQfjRpcq6FBBr7kRXIDrnMMvua5CbzD4j9svzVKz4FoXbUW2y0yTlvUjovQq1KrvFgU%2BQXsKiDoGmehItbpdKtqRN6qTTtlqYarzvOgRWG09jS%2FwxX%2BZaFdI4%2BlMh1eABPGP37XnMKs%2FjtArHIfa7La%2FK%2F5Sca9BwoTCWbr1xBePDAOu5VGF3SBRWtKaDDYp5bFBjqkAXrZnk2sry53tZPhH91mMcggQtodtSkdL6wsFzGtR3d7%2Fa5KeSNpPSILQ3CjPk11%2BG3t0W4nERt5vxf4D1EnEu5rAUyzy%2FV%2FkZ1kf%2BcpBLJlwlEnsHbTa9DF2pXHqmQRAvLIOYj8zY%2Fvfm1mYpfA7dbtg2u%2BerK0DfN%2FN%2B4bYaLCuRXxc9mn7smvBnC5rXEoXcWBKFdU0wQNh6mZlLnJIM8iCuQ0&X-Amz-Signature=9c54a8e617a234f9e0f1cbd032d00f797c5a235654fcb4f3997c44d20c738af5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TRTTDBA%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzQBZpDCaL9O%2BAJ%2FQ5ZVT%2FOXsmr4EFvSSSlAQstADw3gIhAJ7rxVcPS7XKQ6VRI2%2FICqOkldmJ9EWOzlcG7NR3TyBmKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySjz85ZrPSwwabv4Qq3ANJWI3VnaAzj6fZKxk1RbyfU2GXIxLLC%2FkGVXzSZpdJlSnY%2BR4i2gQgk5TTsWL3qGfUVhoH7fcJ8olxr%2FpFVwYZcd14VM5gWsxvw%2FdPoqpj3tkLEaDLRdKOpXEg8X%2BTiTAzvYylbWGL6JMfvo2%2BZcmIxewRWCpCytYd3qOZYMMVSiCQ9vxbQ5bATnxe3llxcfHisstD%2B1VpcJ5GuTbpD4ETI1khiOBxIZ%2BDq%2FiMII8ag1wqkSuqZkQ721GUStkoQ1CZlgFSCZ7JzGvE%2Bm9qVpFgOl8sYte4MkcgidqTXA1V6Wi59QzwNpPXFcaiko%2Bg2MEie9Y7qJP2hwh%2Fqva40EwqqgsGo6D7QgUiEtHEUi33NBPus%2BSsUUf%2Bs4iZzDMmdS5Td%2BleSA7%2FrZHpn0EqHz5Lt4JKCayrKgqsxxAPl3OBre%2FEOXS3bkDKsiRbUunW%2FtQfjRpcq6FBBr7kRXIDrnMMvua5CbzD4j9svzVKz4FoXbUW2y0yTlvUjovQq1KrvFgU%2BQXsKiDoGmehItbpdKtqRN6qTTtlqYarzvOgRWG09jS%2FwxX%2BZaFdI4%2BlMh1eABPGP37XnMKs%2FjtArHIfa7La%2FK%2F5Sca9BwoTCWbr1xBePDAOu5VGF3SBRWtKaDDYp5bFBjqkAXrZnk2sry53tZPhH91mMcggQtodtSkdL6wsFzGtR3d7%2Fa5KeSNpPSILQ3CjPk11%2BG3t0W4nERt5vxf4D1EnEu5rAUyzy%2FV%2FkZ1kf%2BcpBLJlwlEnsHbTa9DF2pXHqmQRAvLIOYj8zY%2Fvfm1mYpfA7dbtg2u%2BerK0DfN%2FN%2B4bYaLCuRXxc9mn7smvBnC5rXEoXcWBKFdU0wQNh6mZlLnJIM8iCuQ0&X-Amz-Signature=71e159f08d0ef3f1f3412c74c7f75d1f5cdb2aef2bed4defcefb6d72bced3bad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TRTTDBA%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzQBZpDCaL9O%2BAJ%2FQ5ZVT%2FOXsmr4EFvSSSlAQstADw3gIhAJ7rxVcPS7XKQ6VRI2%2FICqOkldmJ9EWOzlcG7NR3TyBmKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySjz85ZrPSwwabv4Qq3ANJWI3VnaAzj6fZKxk1RbyfU2GXIxLLC%2FkGVXzSZpdJlSnY%2BR4i2gQgk5TTsWL3qGfUVhoH7fcJ8olxr%2FpFVwYZcd14VM5gWsxvw%2FdPoqpj3tkLEaDLRdKOpXEg8X%2BTiTAzvYylbWGL6JMfvo2%2BZcmIxewRWCpCytYd3qOZYMMVSiCQ9vxbQ5bATnxe3llxcfHisstD%2B1VpcJ5GuTbpD4ETI1khiOBxIZ%2BDq%2FiMII8ag1wqkSuqZkQ721GUStkoQ1CZlgFSCZ7JzGvE%2Bm9qVpFgOl8sYte4MkcgidqTXA1V6Wi59QzwNpPXFcaiko%2Bg2MEie9Y7qJP2hwh%2Fqva40EwqqgsGo6D7QgUiEtHEUi33NBPus%2BSsUUf%2Bs4iZzDMmdS5Td%2BleSA7%2FrZHpn0EqHz5Lt4JKCayrKgqsxxAPl3OBre%2FEOXS3bkDKsiRbUunW%2FtQfjRpcq6FBBr7kRXIDrnMMvua5CbzD4j9svzVKz4FoXbUW2y0yTlvUjovQq1KrvFgU%2BQXsKiDoGmehItbpdKtqRN6qTTtlqYarzvOgRWG09jS%2FwxX%2BZaFdI4%2BlMh1eABPGP37XnMKs%2FjtArHIfa7La%2FK%2F5Sca9BwoTCWbr1xBePDAOu5VGF3SBRWtKaDDYp5bFBjqkAXrZnk2sry53tZPhH91mMcggQtodtSkdL6wsFzGtR3d7%2Fa5KeSNpPSILQ3CjPk11%2BG3t0W4nERt5vxf4D1EnEu5rAUyzy%2FV%2FkZ1kf%2BcpBLJlwlEnsHbTa9DF2pXHqmQRAvLIOYj8zY%2Fvfm1mYpfA7dbtg2u%2BerK0DfN%2FN%2B4bYaLCuRXxc9mn7smvBnC5rXEoXcWBKFdU0wQNh6mZlLnJIM8iCuQ0&X-Amz-Signature=eccf54f57da06a0713094b7a41a040e752e01fcb8a989a1c8815ed485d986e88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TRTTDBA%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzQBZpDCaL9O%2BAJ%2FQ5ZVT%2FOXsmr4EFvSSSlAQstADw3gIhAJ7rxVcPS7XKQ6VRI2%2FICqOkldmJ9EWOzlcG7NR3TyBmKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySjz85ZrPSwwabv4Qq3ANJWI3VnaAzj6fZKxk1RbyfU2GXIxLLC%2FkGVXzSZpdJlSnY%2BR4i2gQgk5TTsWL3qGfUVhoH7fcJ8olxr%2FpFVwYZcd14VM5gWsxvw%2FdPoqpj3tkLEaDLRdKOpXEg8X%2BTiTAzvYylbWGL6JMfvo2%2BZcmIxewRWCpCytYd3qOZYMMVSiCQ9vxbQ5bATnxe3llxcfHisstD%2B1VpcJ5GuTbpD4ETI1khiOBxIZ%2BDq%2FiMII8ag1wqkSuqZkQ721GUStkoQ1CZlgFSCZ7JzGvE%2Bm9qVpFgOl8sYte4MkcgidqTXA1V6Wi59QzwNpPXFcaiko%2Bg2MEie9Y7qJP2hwh%2Fqva40EwqqgsGo6D7QgUiEtHEUi33NBPus%2BSsUUf%2Bs4iZzDMmdS5Td%2BleSA7%2FrZHpn0EqHz5Lt4JKCayrKgqsxxAPl3OBre%2FEOXS3bkDKsiRbUunW%2FtQfjRpcq6FBBr7kRXIDrnMMvua5CbzD4j9svzVKz4FoXbUW2y0yTlvUjovQq1KrvFgU%2BQXsKiDoGmehItbpdKtqRN6qTTtlqYarzvOgRWG09jS%2FwxX%2BZaFdI4%2BlMh1eABPGP37XnMKs%2FjtArHIfa7La%2FK%2F5Sca9BwoTCWbr1xBePDAOu5VGF3SBRWtKaDDYp5bFBjqkAXrZnk2sry53tZPhH91mMcggQtodtSkdL6wsFzGtR3d7%2Fa5KeSNpPSILQ3CjPk11%2BG3t0W4nERt5vxf4D1EnEu5rAUyzy%2FV%2FkZ1kf%2BcpBLJlwlEnsHbTa9DF2pXHqmQRAvLIOYj8zY%2Fvfm1mYpfA7dbtg2u%2BerK0DfN%2FN%2B4bYaLCuRXxc9mn7smvBnC5rXEoXcWBKFdU0wQNh6mZlLnJIM8iCuQ0&X-Amz-Signature=1bc35808e470e02efc57222bee2c525514d5d5a90044c0716fbf9fe1e0dc63b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TRTTDBA%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzQBZpDCaL9O%2BAJ%2FQ5ZVT%2FOXsmr4EFvSSSlAQstADw3gIhAJ7rxVcPS7XKQ6VRI2%2FICqOkldmJ9EWOzlcG7NR3TyBmKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySjz85ZrPSwwabv4Qq3ANJWI3VnaAzj6fZKxk1RbyfU2GXIxLLC%2FkGVXzSZpdJlSnY%2BR4i2gQgk5TTsWL3qGfUVhoH7fcJ8olxr%2FpFVwYZcd14VM5gWsxvw%2FdPoqpj3tkLEaDLRdKOpXEg8X%2BTiTAzvYylbWGL6JMfvo2%2BZcmIxewRWCpCytYd3qOZYMMVSiCQ9vxbQ5bATnxe3llxcfHisstD%2B1VpcJ5GuTbpD4ETI1khiOBxIZ%2BDq%2FiMII8ag1wqkSuqZkQ721GUStkoQ1CZlgFSCZ7JzGvE%2Bm9qVpFgOl8sYte4MkcgidqTXA1V6Wi59QzwNpPXFcaiko%2Bg2MEie9Y7qJP2hwh%2Fqva40EwqqgsGo6D7QgUiEtHEUi33NBPus%2BSsUUf%2Bs4iZzDMmdS5Td%2BleSA7%2FrZHpn0EqHz5Lt4JKCayrKgqsxxAPl3OBre%2FEOXS3bkDKsiRbUunW%2FtQfjRpcq6FBBr7kRXIDrnMMvua5CbzD4j9svzVKz4FoXbUW2y0yTlvUjovQq1KrvFgU%2BQXsKiDoGmehItbpdKtqRN6qTTtlqYarzvOgRWG09jS%2FwxX%2BZaFdI4%2BlMh1eABPGP37XnMKs%2FjtArHIfa7La%2FK%2F5Sca9BwoTCWbr1xBePDAOu5VGF3SBRWtKaDDYp5bFBjqkAXrZnk2sry53tZPhH91mMcggQtodtSkdL6wsFzGtR3d7%2Fa5KeSNpPSILQ3CjPk11%2BG3t0W4nERt5vxf4D1EnEu5rAUyzy%2FV%2FkZ1kf%2BcpBLJlwlEnsHbTa9DF2pXHqmQRAvLIOYj8zY%2Fvfm1mYpfA7dbtg2u%2BerK0DfN%2FN%2B4bYaLCuRXxc9mn7smvBnC5rXEoXcWBKFdU0wQNh6mZlLnJIM8iCuQ0&X-Amz-Signature=d4bb4de8e56162c63c43d119a3c57b5eb164aa5583d1e8039a3adab9bfd376be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TRTTDBA%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzQBZpDCaL9O%2BAJ%2FQ5ZVT%2FOXsmr4EFvSSSlAQstADw3gIhAJ7rxVcPS7XKQ6VRI2%2FICqOkldmJ9EWOzlcG7NR3TyBmKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySjz85ZrPSwwabv4Qq3ANJWI3VnaAzj6fZKxk1RbyfU2GXIxLLC%2FkGVXzSZpdJlSnY%2BR4i2gQgk5TTsWL3qGfUVhoH7fcJ8olxr%2FpFVwYZcd14VM5gWsxvw%2FdPoqpj3tkLEaDLRdKOpXEg8X%2BTiTAzvYylbWGL6JMfvo2%2BZcmIxewRWCpCytYd3qOZYMMVSiCQ9vxbQ5bATnxe3llxcfHisstD%2B1VpcJ5GuTbpD4ETI1khiOBxIZ%2BDq%2FiMII8ag1wqkSuqZkQ721GUStkoQ1CZlgFSCZ7JzGvE%2Bm9qVpFgOl8sYte4MkcgidqTXA1V6Wi59QzwNpPXFcaiko%2Bg2MEie9Y7qJP2hwh%2Fqva40EwqqgsGo6D7QgUiEtHEUi33NBPus%2BSsUUf%2Bs4iZzDMmdS5Td%2BleSA7%2FrZHpn0EqHz5Lt4JKCayrKgqsxxAPl3OBre%2FEOXS3bkDKsiRbUunW%2FtQfjRpcq6FBBr7kRXIDrnMMvua5CbzD4j9svzVKz4FoXbUW2y0yTlvUjovQq1KrvFgU%2BQXsKiDoGmehItbpdKtqRN6qTTtlqYarzvOgRWG09jS%2FwxX%2BZaFdI4%2BlMh1eABPGP37XnMKs%2FjtArHIfa7La%2FK%2F5Sca9BwoTCWbr1xBePDAOu5VGF3SBRWtKaDDYp5bFBjqkAXrZnk2sry53tZPhH91mMcggQtodtSkdL6wsFzGtR3d7%2Fa5KeSNpPSILQ3CjPk11%2BG3t0W4nERt5vxf4D1EnEu5rAUyzy%2FV%2FkZ1kf%2BcpBLJlwlEnsHbTa9DF2pXHqmQRAvLIOYj8zY%2Fvfm1mYpfA7dbtg2u%2BerK0DfN%2FN%2B4bYaLCuRXxc9mn7smvBnC5rXEoXcWBKFdU0wQNh6mZlLnJIM8iCuQ0&X-Amz-Signature=da177ee513ba8b9f831dea877d67c7cd5be464033c409a26375e5901e95976bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TRTTDBA%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzQBZpDCaL9O%2BAJ%2FQ5ZVT%2FOXsmr4EFvSSSlAQstADw3gIhAJ7rxVcPS7XKQ6VRI2%2FICqOkldmJ9EWOzlcG7NR3TyBmKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySjz85ZrPSwwabv4Qq3ANJWI3VnaAzj6fZKxk1RbyfU2GXIxLLC%2FkGVXzSZpdJlSnY%2BR4i2gQgk5TTsWL3qGfUVhoH7fcJ8olxr%2FpFVwYZcd14VM5gWsxvw%2FdPoqpj3tkLEaDLRdKOpXEg8X%2BTiTAzvYylbWGL6JMfvo2%2BZcmIxewRWCpCytYd3qOZYMMVSiCQ9vxbQ5bATnxe3llxcfHisstD%2B1VpcJ5GuTbpD4ETI1khiOBxIZ%2BDq%2FiMII8ag1wqkSuqZkQ721GUStkoQ1CZlgFSCZ7JzGvE%2Bm9qVpFgOl8sYte4MkcgidqTXA1V6Wi59QzwNpPXFcaiko%2Bg2MEie9Y7qJP2hwh%2Fqva40EwqqgsGo6D7QgUiEtHEUi33NBPus%2BSsUUf%2Bs4iZzDMmdS5Td%2BleSA7%2FrZHpn0EqHz5Lt4JKCayrKgqsxxAPl3OBre%2FEOXS3bkDKsiRbUunW%2FtQfjRpcq6FBBr7kRXIDrnMMvua5CbzD4j9svzVKz4FoXbUW2y0yTlvUjovQq1KrvFgU%2BQXsKiDoGmehItbpdKtqRN6qTTtlqYarzvOgRWG09jS%2FwxX%2BZaFdI4%2BlMh1eABPGP37XnMKs%2FjtArHIfa7La%2FK%2F5Sca9BwoTCWbr1xBePDAOu5VGF3SBRWtKaDDYp5bFBjqkAXrZnk2sry53tZPhH91mMcggQtodtSkdL6wsFzGtR3d7%2Fa5KeSNpPSILQ3CjPk11%2BG3t0W4nERt5vxf4D1EnEu5rAUyzy%2FV%2FkZ1kf%2BcpBLJlwlEnsHbTa9DF2pXHqmQRAvLIOYj8zY%2Fvfm1mYpfA7dbtg2u%2BerK0DfN%2FN%2B4bYaLCuRXxc9mn7smvBnC5rXEoXcWBKFdU0wQNh6mZlLnJIM8iCuQ0&X-Amz-Signature=940ad43d5fda7a99fe934d329626743e52486b66987ec4c6eef6c2af76d3d4b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TRTTDBA%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzQBZpDCaL9O%2BAJ%2FQ5ZVT%2FOXsmr4EFvSSSlAQstADw3gIhAJ7rxVcPS7XKQ6VRI2%2FICqOkldmJ9EWOzlcG7NR3TyBmKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySjz85ZrPSwwabv4Qq3ANJWI3VnaAzj6fZKxk1RbyfU2GXIxLLC%2FkGVXzSZpdJlSnY%2BR4i2gQgk5TTsWL3qGfUVhoH7fcJ8olxr%2FpFVwYZcd14VM5gWsxvw%2FdPoqpj3tkLEaDLRdKOpXEg8X%2BTiTAzvYylbWGL6JMfvo2%2BZcmIxewRWCpCytYd3qOZYMMVSiCQ9vxbQ5bATnxe3llxcfHisstD%2B1VpcJ5GuTbpD4ETI1khiOBxIZ%2BDq%2FiMII8ag1wqkSuqZkQ721GUStkoQ1CZlgFSCZ7JzGvE%2Bm9qVpFgOl8sYte4MkcgidqTXA1V6Wi59QzwNpPXFcaiko%2Bg2MEie9Y7qJP2hwh%2Fqva40EwqqgsGo6D7QgUiEtHEUi33NBPus%2BSsUUf%2Bs4iZzDMmdS5Td%2BleSA7%2FrZHpn0EqHz5Lt4JKCayrKgqsxxAPl3OBre%2FEOXS3bkDKsiRbUunW%2FtQfjRpcq6FBBr7kRXIDrnMMvua5CbzD4j9svzVKz4FoXbUW2y0yTlvUjovQq1KrvFgU%2BQXsKiDoGmehItbpdKtqRN6qTTtlqYarzvOgRWG09jS%2FwxX%2BZaFdI4%2BlMh1eABPGP37XnMKs%2FjtArHIfa7La%2FK%2F5Sca9BwoTCWbr1xBePDAOu5VGF3SBRWtKaDDYp5bFBjqkAXrZnk2sry53tZPhH91mMcggQtodtSkdL6wsFzGtR3d7%2Fa5KeSNpPSILQ3CjPk11%2BG3t0W4nERt5vxf4D1EnEu5rAUyzy%2FV%2FkZ1kf%2BcpBLJlwlEnsHbTa9DF2pXHqmQRAvLIOYj8zY%2Fvfm1mYpfA7dbtg2u%2BerK0DfN%2FN%2B4bYaLCuRXxc9mn7smvBnC5rXEoXcWBKFdU0wQNh6mZlLnJIM8iCuQ0&X-Amz-Signature=d3b1fe2bf79390aae296e41e9c6fcfcfa7d4d1d6071c685c8dcffd3429da97af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TRTTDBA%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzQBZpDCaL9O%2BAJ%2FQ5ZVT%2FOXsmr4EFvSSSlAQstADw3gIhAJ7rxVcPS7XKQ6VRI2%2FICqOkldmJ9EWOzlcG7NR3TyBmKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySjz85ZrPSwwabv4Qq3ANJWI3VnaAzj6fZKxk1RbyfU2GXIxLLC%2FkGVXzSZpdJlSnY%2BR4i2gQgk5TTsWL3qGfUVhoH7fcJ8olxr%2FpFVwYZcd14VM5gWsxvw%2FdPoqpj3tkLEaDLRdKOpXEg8X%2BTiTAzvYylbWGL6JMfvo2%2BZcmIxewRWCpCytYd3qOZYMMVSiCQ9vxbQ5bATnxe3llxcfHisstD%2B1VpcJ5GuTbpD4ETI1khiOBxIZ%2BDq%2FiMII8ag1wqkSuqZkQ721GUStkoQ1CZlgFSCZ7JzGvE%2Bm9qVpFgOl8sYte4MkcgidqTXA1V6Wi59QzwNpPXFcaiko%2Bg2MEie9Y7qJP2hwh%2Fqva40EwqqgsGo6D7QgUiEtHEUi33NBPus%2BSsUUf%2Bs4iZzDMmdS5Td%2BleSA7%2FrZHpn0EqHz5Lt4JKCayrKgqsxxAPl3OBre%2FEOXS3bkDKsiRbUunW%2FtQfjRpcq6FBBr7kRXIDrnMMvua5CbzD4j9svzVKz4FoXbUW2y0yTlvUjovQq1KrvFgU%2BQXsKiDoGmehItbpdKtqRN6qTTtlqYarzvOgRWG09jS%2FwxX%2BZaFdI4%2BlMh1eABPGP37XnMKs%2FjtArHIfa7La%2FK%2F5Sca9BwoTCWbr1xBePDAOu5VGF3SBRWtKaDDYp5bFBjqkAXrZnk2sry53tZPhH91mMcggQtodtSkdL6wsFzGtR3d7%2Fa5KeSNpPSILQ3CjPk11%2BG3t0W4nERt5vxf4D1EnEu5rAUyzy%2FV%2FkZ1kf%2BcpBLJlwlEnsHbTa9DF2pXHqmQRAvLIOYj8zY%2Fvfm1mYpfA7dbtg2u%2BerK0DfN%2FN%2B4bYaLCuRXxc9mn7smvBnC5rXEoXcWBKFdU0wQNh6mZlLnJIM8iCuQ0&X-Amz-Signature=55b124a339c18af71eed564d78071c6b1d8870bf97f468ab20a5f05283031f86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TRTTDBA%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T093454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzQBZpDCaL9O%2BAJ%2FQ5ZVT%2FOXsmr4EFvSSSlAQstADw3gIhAJ7rxVcPS7XKQ6VRI2%2FICqOkldmJ9EWOzlcG7NR3TyBmKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySjz85ZrPSwwabv4Qq3ANJWI3VnaAzj6fZKxk1RbyfU2GXIxLLC%2FkGVXzSZpdJlSnY%2BR4i2gQgk5TTsWL3qGfUVhoH7fcJ8olxr%2FpFVwYZcd14VM5gWsxvw%2FdPoqpj3tkLEaDLRdKOpXEg8X%2BTiTAzvYylbWGL6JMfvo2%2BZcmIxewRWCpCytYd3qOZYMMVSiCQ9vxbQ5bATnxe3llxcfHisstD%2B1VpcJ5GuTbpD4ETI1khiOBxIZ%2BDq%2FiMII8ag1wqkSuqZkQ721GUStkoQ1CZlgFSCZ7JzGvE%2Bm9qVpFgOl8sYte4MkcgidqTXA1V6Wi59QzwNpPXFcaiko%2Bg2MEie9Y7qJP2hwh%2Fqva40EwqqgsGo6D7QgUiEtHEUi33NBPus%2BSsUUf%2Bs4iZzDMmdS5Td%2BleSA7%2FrZHpn0EqHz5Lt4JKCayrKgqsxxAPl3OBre%2FEOXS3bkDKsiRbUunW%2FtQfjRpcq6FBBr7kRXIDrnMMvua5CbzD4j9svzVKz4FoXbUW2y0yTlvUjovQq1KrvFgU%2BQXsKiDoGmehItbpdKtqRN6qTTtlqYarzvOgRWG09jS%2FwxX%2BZaFdI4%2BlMh1eABPGP37XnMKs%2FjtArHIfa7La%2FK%2F5Sca9BwoTCWbr1xBePDAOu5VGF3SBRWtKaDDYp5bFBjqkAXrZnk2sry53tZPhH91mMcggQtodtSkdL6wsFzGtR3d7%2Fa5KeSNpPSILQ3CjPk11%2BG3t0W4nERt5vxf4D1EnEu5rAUyzy%2FV%2FkZ1kf%2BcpBLJlwlEnsHbTa9DF2pXHqmQRAvLIOYj8zY%2Fvfm1mYpfA7dbtg2u%2BerK0DfN%2FN%2B4bYaLCuRXxc9mn7smvBnC5rXEoXcWBKFdU0wQNh6mZlLnJIM8iCuQ0&X-Amz-Signature=70adde183d6ad94eba3cd43ff96b68e17d9aa4d5cf805ae1302c85bd86c2a4f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
