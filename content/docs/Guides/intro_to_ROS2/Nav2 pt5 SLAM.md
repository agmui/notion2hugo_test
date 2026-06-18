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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPDJJKOZ%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBAnTMXTLiCmQLqgwZibMHMxDberuZgGTW27SjrwzRvAiAUGaLDIlKwX8efbCOym1%2FgUdcsfN5jihpm%2Bv2dVV1jzCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu3eMij3OAf5ec%2FO3KtwDHFU3LaPd36FMsueL23bhQH%2FIroUZGSd%2FNbxeBrtrsDQBlQ%2B2TXcE6GTN2L7Y%2Fz9JDMACDFb0ExIBjoQpgvyhp5bp6KVL2iW459gJug5RdGWTSAlfnScyhHSKD5djGIiZmzH4M3cYpdH8THa8jwDKB1arYXnOBbUwcZ064I5%2BFrIZX2wTfcONMx%2FjM%2BQ1%2B%2FGCM6ocsd%2BfRIhcIoY%2BIFBa%2B2rUVJPjTo1bTvX5eLWA2sAuR8lIwlhcduvmA6mmRygFhzoOGUvmP2Eefkfzhk6oNCLEkcwqrk43GuelIZakKLHe7oJvRekL%2BtZW7FFfKUPbWqGxAcBjtWzKZ5iNL9Zatm7bivm6qskg111SCvtiid4AH5JNhUTiRQaNcqZozk10Q%2FYwhSjA3KbtyiLk4jqpBRShhSG4szIKp5Sg0h1ec9veKdOR%2BxWlVzOXWbRXWYHKqs3BmPsHySZOOFhEJy%2Fc5RVoXTQx4av7b1FlNZi%2FYWTahyuK%2Fr0e0nMtjc%2FNs0stIewok0s%2FzEy7GBltZU48rJB0k0IE0M1SRcNn5kmyqVIF6MC6KhYwB4sWz7fn3Chug0tt0Xq117HUx8%2FiTeQYMbKh7brSyryciBwuoDAA3dklCpq5X5A%2F3rsZGwMw1a%2FN0QY6pgFhyar1vtGMLooKP4za9Prp1m51zryyUK98eCNeHK6n1cKYHXwYN%2F%2B3E1ckoDekBuGBkMCyNo6WsUW7nJKlUTjKZgs9yX9NtZISGe8G9FZXKjCE%2BwcYhRy0J%2BKiN1D8m0I1QZ2e13mdrof%2B9tS64TwSATAOqArkW%2FHvUBHHCoVPY72vLCvXNd8mapzNemNnF%2FdXyuZk48SBvRjbcue1naehTJqvSThX&X-Amz-Signature=06ecb338a4032baac98e9b43119dd7ad4e887585726c50d9d9559bd305d1d0b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPDJJKOZ%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBAnTMXTLiCmQLqgwZibMHMxDberuZgGTW27SjrwzRvAiAUGaLDIlKwX8efbCOym1%2FgUdcsfN5jihpm%2Bv2dVV1jzCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu3eMij3OAf5ec%2FO3KtwDHFU3LaPd36FMsueL23bhQH%2FIroUZGSd%2FNbxeBrtrsDQBlQ%2B2TXcE6GTN2L7Y%2Fz9JDMACDFb0ExIBjoQpgvyhp5bp6KVL2iW459gJug5RdGWTSAlfnScyhHSKD5djGIiZmzH4M3cYpdH8THa8jwDKB1arYXnOBbUwcZ064I5%2BFrIZX2wTfcONMx%2FjM%2BQ1%2B%2FGCM6ocsd%2BfRIhcIoY%2BIFBa%2B2rUVJPjTo1bTvX5eLWA2sAuR8lIwlhcduvmA6mmRygFhzoOGUvmP2Eefkfzhk6oNCLEkcwqrk43GuelIZakKLHe7oJvRekL%2BtZW7FFfKUPbWqGxAcBjtWzKZ5iNL9Zatm7bivm6qskg111SCvtiid4AH5JNhUTiRQaNcqZozk10Q%2FYwhSjA3KbtyiLk4jqpBRShhSG4szIKp5Sg0h1ec9veKdOR%2BxWlVzOXWbRXWYHKqs3BmPsHySZOOFhEJy%2Fc5RVoXTQx4av7b1FlNZi%2FYWTahyuK%2Fr0e0nMtjc%2FNs0stIewok0s%2FzEy7GBltZU48rJB0k0IE0M1SRcNn5kmyqVIF6MC6KhYwB4sWz7fn3Chug0tt0Xq117HUx8%2FiTeQYMbKh7brSyryciBwuoDAA3dklCpq5X5A%2F3rsZGwMw1a%2FN0QY6pgFhyar1vtGMLooKP4za9Prp1m51zryyUK98eCNeHK6n1cKYHXwYN%2F%2B3E1ckoDekBuGBkMCyNo6WsUW7nJKlUTjKZgs9yX9NtZISGe8G9FZXKjCE%2BwcYhRy0J%2BKiN1D8m0I1QZ2e13mdrof%2B9tS64TwSATAOqArkW%2FHvUBHHCoVPY72vLCvXNd8mapzNemNnF%2FdXyuZk48SBvRjbcue1naehTJqvSThX&X-Amz-Signature=a95480ef6a809ed6aa8497501e52806371d4fbbf0f7bfedf98706884ccd61987&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPDJJKOZ%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBAnTMXTLiCmQLqgwZibMHMxDberuZgGTW27SjrwzRvAiAUGaLDIlKwX8efbCOym1%2FgUdcsfN5jihpm%2Bv2dVV1jzCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu3eMij3OAf5ec%2FO3KtwDHFU3LaPd36FMsueL23bhQH%2FIroUZGSd%2FNbxeBrtrsDQBlQ%2B2TXcE6GTN2L7Y%2Fz9JDMACDFb0ExIBjoQpgvyhp5bp6KVL2iW459gJug5RdGWTSAlfnScyhHSKD5djGIiZmzH4M3cYpdH8THa8jwDKB1arYXnOBbUwcZ064I5%2BFrIZX2wTfcONMx%2FjM%2BQ1%2B%2FGCM6ocsd%2BfRIhcIoY%2BIFBa%2B2rUVJPjTo1bTvX5eLWA2sAuR8lIwlhcduvmA6mmRygFhzoOGUvmP2Eefkfzhk6oNCLEkcwqrk43GuelIZakKLHe7oJvRekL%2BtZW7FFfKUPbWqGxAcBjtWzKZ5iNL9Zatm7bivm6qskg111SCvtiid4AH5JNhUTiRQaNcqZozk10Q%2FYwhSjA3KbtyiLk4jqpBRShhSG4szIKp5Sg0h1ec9veKdOR%2BxWlVzOXWbRXWYHKqs3BmPsHySZOOFhEJy%2Fc5RVoXTQx4av7b1FlNZi%2FYWTahyuK%2Fr0e0nMtjc%2FNs0stIewok0s%2FzEy7GBltZU48rJB0k0IE0M1SRcNn5kmyqVIF6MC6KhYwB4sWz7fn3Chug0tt0Xq117HUx8%2FiTeQYMbKh7brSyryciBwuoDAA3dklCpq5X5A%2F3rsZGwMw1a%2FN0QY6pgFhyar1vtGMLooKP4za9Prp1m51zryyUK98eCNeHK6n1cKYHXwYN%2F%2B3E1ckoDekBuGBkMCyNo6WsUW7nJKlUTjKZgs9yX9NtZISGe8G9FZXKjCE%2BwcYhRy0J%2BKiN1D8m0I1QZ2e13mdrof%2B9tS64TwSATAOqArkW%2FHvUBHHCoVPY72vLCvXNd8mapzNemNnF%2FdXyuZk48SBvRjbcue1naehTJqvSThX&X-Amz-Signature=a31ea2fe8d228f120b7b098ad01dc90136788c2d7d1e818523d9e89791ab6e68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPDJJKOZ%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBAnTMXTLiCmQLqgwZibMHMxDberuZgGTW27SjrwzRvAiAUGaLDIlKwX8efbCOym1%2FgUdcsfN5jihpm%2Bv2dVV1jzCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu3eMij3OAf5ec%2FO3KtwDHFU3LaPd36FMsueL23bhQH%2FIroUZGSd%2FNbxeBrtrsDQBlQ%2B2TXcE6GTN2L7Y%2Fz9JDMACDFb0ExIBjoQpgvyhp5bp6KVL2iW459gJug5RdGWTSAlfnScyhHSKD5djGIiZmzH4M3cYpdH8THa8jwDKB1arYXnOBbUwcZ064I5%2BFrIZX2wTfcONMx%2FjM%2BQ1%2B%2FGCM6ocsd%2BfRIhcIoY%2BIFBa%2B2rUVJPjTo1bTvX5eLWA2sAuR8lIwlhcduvmA6mmRygFhzoOGUvmP2Eefkfzhk6oNCLEkcwqrk43GuelIZakKLHe7oJvRekL%2BtZW7FFfKUPbWqGxAcBjtWzKZ5iNL9Zatm7bivm6qskg111SCvtiid4AH5JNhUTiRQaNcqZozk10Q%2FYwhSjA3KbtyiLk4jqpBRShhSG4szIKp5Sg0h1ec9veKdOR%2BxWlVzOXWbRXWYHKqs3BmPsHySZOOFhEJy%2Fc5RVoXTQx4av7b1FlNZi%2FYWTahyuK%2Fr0e0nMtjc%2FNs0stIewok0s%2FzEy7GBltZU48rJB0k0IE0M1SRcNn5kmyqVIF6MC6KhYwB4sWz7fn3Chug0tt0Xq117HUx8%2FiTeQYMbKh7brSyryciBwuoDAA3dklCpq5X5A%2F3rsZGwMw1a%2FN0QY6pgFhyar1vtGMLooKP4za9Prp1m51zryyUK98eCNeHK6n1cKYHXwYN%2F%2B3E1ckoDekBuGBkMCyNo6WsUW7nJKlUTjKZgs9yX9NtZISGe8G9FZXKjCE%2BwcYhRy0J%2BKiN1D8m0I1QZ2e13mdrof%2B9tS64TwSATAOqArkW%2FHvUBHHCoVPY72vLCvXNd8mapzNemNnF%2FdXyuZk48SBvRjbcue1naehTJqvSThX&X-Amz-Signature=53625f71518732d61cc905384c26ed93d37553e2ae44290b8e67056d57a96664&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPDJJKOZ%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBAnTMXTLiCmQLqgwZibMHMxDberuZgGTW27SjrwzRvAiAUGaLDIlKwX8efbCOym1%2FgUdcsfN5jihpm%2Bv2dVV1jzCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu3eMij3OAf5ec%2FO3KtwDHFU3LaPd36FMsueL23bhQH%2FIroUZGSd%2FNbxeBrtrsDQBlQ%2B2TXcE6GTN2L7Y%2Fz9JDMACDFb0ExIBjoQpgvyhp5bp6KVL2iW459gJug5RdGWTSAlfnScyhHSKD5djGIiZmzH4M3cYpdH8THa8jwDKB1arYXnOBbUwcZ064I5%2BFrIZX2wTfcONMx%2FjM%2BQ1%2B%2FGCM6ocsd%2BfRIhcIoY%2BIFBa%2B2rUVJPjTo1bTvX5eLWA2sAuR8lIwlhcduvmA6mmRygFhzoOGUvmP2Eefkfzhk6oNCLEkcwqrk43GuelIZakKLHe7oJvRekL%2BtZW7FFfKUPbWqGxAcBjtWzKZ5iNL9Zatm7bivm6qskg111SCvtiid4AH5JNhUTiRQaNcqZozk10Q%2FYwhSjA3KbtyiLk4jqpBRShhSG4szIKp5Sg0h1ec9veKdOR%2BxWlVzOXWbRXWYHKqs3BmPsHySZOOFhEJy%2Fc5RVoXTQx4av7b1FlNZi%2FYWTahyuK%2Fr0e0nMtjc%2FNs0stIewok0s%2FzEy7GBltZU48rJB0k0IE0M1SRcNn5kmyqVIF6MC6KhYwB4sWz7fn3Chug0tt0Xq117HUx8%2FiTeQYMbKh7brSyryciBwuoDAA3dklCpq5X5A%2F3rsZGwMw1a%2FN0QY6pgFhyar1vtGMLooKP4za9Prp1m51zryyUK98eCNeHK6n1cKYHXwYN%2F%2B3E1ckoDekBuGBkMCyNo6WsUW7nJKlUTjKZgs9yX9NtZISGe8G9FZXKjCE%2BwcYhRy0J%2BKiN1D8m0I1QZ2e13mdrof%2B9tS64TwSATAOqArkW%2FHvUBHHCoVPY72vLCvXNd8mapzNemNnF%2FdXyuZk48SBvRjbcue1naehTJqvSThX&X-Amz-Signature=521d16139c80c490b2ca072eba6d372cdc9beedd66ae7f0e93fbf4f3aacbac05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPDJJKOZ%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBAnTMXTLiCmQLqgwZibMHMxDberuZgGTW27SjrwzRvAiAUGaLDIlKwX8efbCOym1%2FgUdcsfN5jihpm%2Bv2dVV1jzCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu3eMij3OAf5ec%2FO3KtwDHFU3LaPd36FMsueL23bhQH%2FIroUZGSd%2FNbxeBrtrsDQBlQ%2B2TXcE6GTN2L7Y%2Fz9JDMACDFb0ExIBjoQpgvyhp5bp6KVL2iW459gJug5RdGWTSAlfnScyhHSKD5djGIiZmzH4M3cYpdH8THa8jwDKB1arYXnOBbUwcZ064I5%2BFrIZX2wTfcONMx%2FjM%2BQ1%2B%2FGCM6ocsd%2BfRIhcIoY%2BIFBa%2B2rUVJPjTo1bTvX5eLWA2sAuR8lIwlhcduvmA6mmRygFhzoOGUvmP2Eefkfzhk6oNCLEkcwqrk43GuelIZakKLHe7oJvRekL%2BtZW7FFfKUPbWqGxAcBjtWzKZ5iNL9Zatm7bivm6qskg111SCvtiid4AH5JNhUTiRQaNcqZozk10Q%2FYwhSjA3KbtyiLk4jqpBRShhSG4szIKp5Sg0h1ec9veKdOR%2BxWlVzOXWbRXWYHKqs3BmPsHySZOOFhEJy%2Fc5RVoXTQx4av7b1FlNZi%2FYWTahyuK%2Fr0e0nMtjc%2FNs0stIewok0s%2FzEy7GBltZU48rJB0k0IE0M1SRcNn5kmyqVIF6MC6KhYwB4sWz7fn3Chug0tt0Xq117HUx8%2FiTeQYMbKh7brSyryciBwuoDAA3dklCpq5X5A%2F3rsZGwMw1a%2FN0QY6pgFhyar1vtGMLooKP4za9Prp1m51zryyUK98eCNeHK6n1cKYHXwYN%2F%2B3E1ckoDekBuGBkMCyNo6WsUW7nJKlUTjKZgs9yX9NtZISGe8G9FZXKjCE%2BwcYhRy0J%2BKiN1D8m0I1QZ2e13mdrof%2B9tS64TwSATAOqArkW%2FHvUBHHCoVPY72vLCvXNd8mapzNemNnF%2FdXyuZk48SBvRjbcue1naehTJqvSThX&X-Amz-Signature=85e461400c8cf63c2a85236a8f0b4ccf4cf2b759ac07edb0c89a1149c6d9adf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPDJJKOZ%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBAnTMXTLiCmQLqgwZibMHMxDberuZgGTW27SjrwzRvAiAUGaLDIlKwX8efbCOym1%2FgUdcsfN5jihpm%2Bv2dVV1jzCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu3eMij3OAf5ec%2FO3KtwDHFU3LaPd36FMsueL23bhQH%2FIroUZGSd%2FNbxeBrtrsDQBlQ%2B2TXcE6GTN2L7Y%2Fz9JDMACDFb0ExIBjoQpgvyhp5bp6KVL2iW459gJug5RdGWTSAlfnScyhHSKD5djGIiZmzH4M3cYpdH8THa8jwDKB1arYXnOBbUwcZ064I5%2BFrIZX2wTfcONMx%2FjM%2BQ1%2B%2FGCM6ocsd%2BfRIhcIoY%2BIFBa%2B2rUVJPjTo1bTvX5eLWA2sAuR8lIwlhcduvmA6mmRygFhzoOGUvmP2Eefkfzhk6oNCLEkcwqrk43GuelIZakKLHe7oJvRekL%2BtZW7FFfKUPbWqGxAcBjtWzKZ5iNL9Zatm7bivm6qskg111SCvtiid4AH5JNhUTiRQaNcqZozk10Q%2FYwhSjA3KbtyiLk4jqpBRShhSG4szIKp5Sg0h1ec9veKdOR%2BxWlVzOXWbRXWYHKqs3BmPsHySZOOFhEJy%2Fc5RVoXTQx4av7b1FlNZi%2FYWTahyuK%2Fr0e0nMtjc%2FNs0stIewok0s%2FzEy7GBltZU48rJB0k0IE0M1SRcNn5kmyqVIF6MC6KhYwB4sWz7fn3Chug0tt0Xq117HUx8%2FiTeQYMbKh7brSyryciBwuoDAA3dklCpq5X5A%2F3rsZGwMw1a%2FN0QY6pgFhyar1vtGMLooKP4za9Prp1m51zryyUK98eCNeHK6n1cKYHXwYN%2F%2B3E1ckoDekBuGBkMCyNo6WsUW7nJKlUTjKZgs9yX9NtZISGe8G9FZXKjCE%2BwcYhRy0J%2BKiN1D8m0I1QZ2e13mdrof%2B9tS64TwSATAOqArkW%2FHvUBHHCoVPY72vLCvXNd8mapzNemNnF%2FdXyuZk48SBvRjbcue1naehTJqvSThX&X-Amz-Signature=dd01c30905cbfe3b6a2f51b9a9c5883033e0f5af93cbdf7bae3e5e8527207359&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPDJJKOZ%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBAnTMXTLiCmQLqgwZibMHMxDberuZgGTW27SjrwzRvAiAUGaLDIlKwX8efbCOym1%2FgUdcsfN5jihpm%2Bv2dVV1jzCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu3eMij3OAf5ec%2FO3KtwDHFU3LaPd36FMsueL23bhQH%2FIroUZGSd%2FNbxeBrtrsDQBlQ%2B2TXcE6GTN2L7Y%2Fz9JDMACDFb0ExIBjoQpgvyhp5bp6KVL2iW459gJug5RdGWTSAlfnScyhHSKD5djGIiZmzH4M3cYpdH8THa8jwDKB1arYXnOBbUwcZ064I5%2BFrIZX2wTfcONMx%2FjM%2BQ1%2B%2FGCM6ocsd%2BfRIhcIoY%2BIFBa%2B2rUVJPjTo1bTvX5eLWA2sAuR8lIwlhcduvmA6mmRygFhzoOGUvmP2Eefkfzhk6oNCLEkcwqrk43GuelIZakKLHe7oJvRekL%2BtZW7FFfKUPbWqGxAcBjtWzKZ5iNL9Zatm7bivm6qskg111SCvtiid4AH5JNhUTiRQaNcqZozk10Q%2FYwhSjA3KbtyiLk4jqpBRShhSG4szIKp5Sg0h1ec9veKdOR%2BxWlVzOXWbRXWYHKqs3BmPsHySZOOFhEJy%2Fc5RVoXTQx4av7b1FlNZi%2FYWTahyuK%2Fr0e0nMtjc%2FNs0stIewok0s%2FzEy7GBltZU48rJB0k0IE0M1SRcNn5kmyqVIF6MC6KhYwB4sWz7fn3Chug0tt0Xq117HUx8%2FiTeQYMbKh7brSyryciBwuoDAA3dklCpq5X5A%2F3rsZGwMw1a%2FN0QY6pgFhyar1vtGMLooKP4za9Prp1m51zryyUK98eCNeHK6n1cKYHXwYN%2F%2B3E1ckoDekBuGBkMCyNo6WsUW7nJKlUTjKZgs9yX9NtZISGe8G9FZXKjCE%2BwcYhRy0J%2BKiN1D8m0I1QZ2e13mdrof%2B9tS64TwSATAOqArkW%2FHvUBHHCoVPY72vLCvXNd8mapzNemNnF%2FdXyuZk48SBvRjbcue1naehTJqvSThX&X-Amz-Signature=b3ae9722044b4b91978aff8da4512775018dd73815b45e007a0f1b38cea1f327&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPDJJKOZ%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBAnTMXTLiCmQLqgwZibMHMxDberuZgGTW27SjrwzRvAiAUGaLDIlKwX8efbCOym1%2FgUdcsfN5jihpm%2Bv2dVV1jzCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu3eMij3OAf5ec%2FO3KtwDHFU3LaPd36FMsueL23bhQH%2FIroUZGSd%2FNbxeBrtrsDQBlQ%2B2TXcE6GTN2L7Y%2Fz9JDMACDFb0ExIBjoQpgvyhp5bp6KVL2iW459gJug5RdGWTSAlfnScyhHSKD5djGIiZmzH4M3cYpdH8THa8jwDKB1arYXnOBbUwcZ064I5%2BFrIZX2wTfcONMx%2FjM%2BQ1%2B%2FGCM6ocsd%2BfRIhcIoY%2BIFBa%2B2rUVJPjTo1bTvX5eLWA2sAuR8lIwlhcduvmA6mmRygFhzoOGUvmP2Eefkfzhk6oNCLEkcwqrk43GuelIZakKLHe7oJvRekL%2BtZW7FFfKUPbWqGxAcBjtWzKZ5iNL9Zatm7bivm6qskg111SCvtiid4AH5JNhUTiRQaNcqZozk10Q%2FYwhSjA3KbtyiLk4jqpBRShhSG4szIKp5Sg0h1ec9veKdOR%2BxWlVzOXWbRXWYHKqs3BmPsHySZOOFhEJy%2Fc5RVoXTQx4av7b1FlNZi%2FYWTahyuK%2Fr0e0nMtjc%2FNs0stIewok0s%2FzEy7GBltZU48rJB0k0IE0M1SRcNn5kmyqVIF6MC6KhYwB4sWz7fn3Chug0tt0Xq117HUx8%2FiTeQYMbKh7brSyryciBwuoDAA3dklCpq5X5A%2F3rsZGwMw1a%2FN0QY6pgFhyar1vtGMLooKP4za9Prp1m51zryyUK98eCNeHK6n1cKYHXwYN%2F%2B3E1ckoDekBuGBkMCyNo6WsUW7nJKlUTjKZgs9yX9NtZISGe8G9FZXKjCE%2BwcYhRy0J%2BKiN1D8m0I1QZ2e13mdrof%2B9tS64TwSATAOqArkW%2FHvUBHHCoVPY72vLCvXNd8mapzNemNnF%2FdXyuZk48SBvRjbcue1naehTJqvSThX&X-Amz-Signature=b15108d95c3812eae31a2e189630aa9823aa174d77e2bcc1114147c691d85ead&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPDJJKOZ%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBAnTMXTLiCmQLqgwZibMHMxDberuZgGTW27SjrwzRvAiAUGaLDIlKwX8efbCOym1%2FgUdcsfN5jihpm%2Bv2dVV1jzCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu3eMij3OAf5ec%2FO3KtwDHFU3LaPd36FMsueL23bhQH%2FIroUZGSd%2FNbxeBrtrsDQBlQ%2B2TXcE6GTN2L7Y%2Fz9JDMACDFb0ExIBjoQpgvyhp5bp6KVL2iW459gJug5RdGWTSAlfnScyhHSKD5djGIiZmzH4M3cYpdH8THa8jwDKB1arYXnOBbUwcZ064I5%2BFrIZX2wTfcONMx%2FjM%2BQ1%2B%2FGCM6ocsd%2BfRIhcIoY%2BIFBa%2B2rUVJPjTo1bTvX5eLWA2sAuR8lIwlhcduvmA6mmRygFhzoOGUvmP2Eefkfzhk6oNCLEkcwqrk43GuelIZakKLHe7oJvRekL%2BtZW7FFfKUPbWqGxAcBjtWzKZ5iNL9Zatm7bivm6qskg111SCvtiid4AH5JNhUTiRQaNcqZozk10Q%2FYwhSjA3KbtyiLk4jqpBRShhSG4szIKp5Sg0h1ec9veKdOR%2BxWlVzOXWbRXWYHKqs3BmPsHySZOOFhEJy%2Fc5RVoXTQx4av7b1FlNZi%2FYWTahyuK%2Fr0e0nMtjc%2FNs0stIewok0s%2FzEy7GBltZU48rJB0k0IE0M1SRcNn5kmyqVIF6MC6KhYwB4sWz7fn3Chug0tt0Xq117HUx8%2FiTeQYMbKh7brSyryciBwuoDAA3dklCpq5X5A%2F3rsZGwMw1a%2FN0QY6pgFhyar1vtGMLooKP4za9Prp1m51zryyUK98eCNeHK6n1cKYHXwYN%2F%2B3E1ckoDekBuGBkMCyNo6WsUW7nJKlUTjKZgs9yX9NtZISGe8G9FZXKjCE%2BwcYhRy0J%2BKiN1D8m0I1QZ2e13mdrof%2B9tS64TwSATAOqArkW%2FHvUBHHCoVPY72vLCvXNd8mapzNemNnF%2FdXyuZk48SBvRjbcue1naehTJqvSThX&X-Amz-Signature=7ec7847704be2e68c21de1ed577b216d473f77ce1fcd277539f5b2fa92fa17a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPDJJKOZ%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBAnTMXTLiCmQLqgwZibMHMxDberuZgGTW27SjrwzRvAiAUGaLDIlKwX8efbCOym1%2FgUdcsfN5jihpm%2Bv2dVV1jzCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu3eMij3OAf5ec%2FO3KtwDHFU3LaPd36FMsueL23bhQH%2FIroUZGSd%2FNbxeBrtrsDQBlQ%2B2TXcE6GTN2L7Y%2Fz9JDMACDFb0ExIBjoQpgvyhp5bp6KVL2iW459gJug5RdGWTSAlfnScyhHSKD5djGIiZmzH4M3cYpdH8THa8jwDKB1arYXnOBbUwcZ064I5%2BFrIZX2wTfcONMx%2FjM%2BQ1%2B%2FGCM6ocsd%2BfRIhcIoY%2BIFBa%2B2rUVJPjTo1bTvX5eLWA2sAuR8lIwlhcduvmA6mmRygFhzoOGUvmP2Eefkfzhk6oNCLEkcwqrk43GuelIZakKLHe7oJvRekL%2BtZW7FFfKUPbWqGxAcBjtWzKZ5iNL9Zatm7bivm6qskg111SCvtiid4AH5JNhUTiRQaNcqZozk10Q%2FYwhSjA3KbtyiLk4jqpBRShhSG4szIKp5Sg0h1ec9veKdOR%2BxWlVzOXWbRXWYHKqs3BmPsHySZOOFhEJy%2Fc5RVoXTQx4av7b1FlNZi%2FYWTahyuK%2Fr0e0nMtjc%2FNs0stIewok0s%2FzEy7GBltZU48rJB0k0IE0M1SRcNn5kmyqVIF6MC6KhYwB4sWz7fn3Chug0tt0Xq117HUx8%2FiTeQYMbKh7brSyryciBwuoDAA3dklCpq5X5A%2F3rsZGwMw1a%2FN0QY6pgFhyar1vtGMLooKP4za9Prp1m51zryyUK98eCNeHK6n1cKYHXwYN%2F%2B3E1ckoDekBuGBkMCyNo6WsUW7nJKlUTjKZgs9yX9NtZISGe8G9FZXKjCE%2BwcYhRy0J%2BKiN1D8m0I1QZ2e13mdrof%2B9tS64TwSATAOqArkW%2FHvUBHHCoVPY72vLCvXNd8mapzNemNnF%2FdXyuZk48SBvRjbcue1naehTJqvSThX&X-Amz-Signature=7c614edf023e2026a6003070fee81e761c32afcca9b07af7e4869ef7a1df9804&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPDJJKOZ%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBAnTMXTLiCmQLqgwZibMHMxDberuZgGTW27SjrwzRvAiAUGaLDIlKwX8efbCOym1%2FgUdcsfN5jihpm%2Bv2dVV1jzCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu3eMij3OAf5ec%2FO3KtwDHFU3LaPd36FMsueL23bhQH%2FIroUZGSd%2FNbxeBrtrsDQBlQ%2B2TXcE6GTN2L7Y%2Fz9JDMACDFb0ExIBjoQpgvyhp5bp6KVL2iW459gJug5RdGWTSAlfnScyhHSKD5djGIiZmzH4M3cYpdH8THa8jwDKB1arYXnOBbUwcZ064I5%2BFrIZX2wTfcONMx%2FjM%2BQ1%2B%2FGCM6ocsd%2BfRIhcIoY%2BIFBa%2B2rUVJPjTo1bTvX5eLWA2sAuR8lIwlhcduvmA6mmRygFhzoOGUvmP2Eefkfzhk6oNCLEkcwqrk43GuelIZakKLHe7oJvRekL%2BtZW7FFfKUPbWqGxAcBjtWzKZ5iNL9Zatm7bivm6qskg111SCvtiid4AH5JNhUTiRQaNcqZozk10Q%2FYwhSjA3KbtyiLk4jqpBRShhSG4szIKp5Sg0h1ec9veKdOR%2BxWlVzOXWbRXWYHKqs3BmPsHySZOOFhEJy%2Fc5RVoXTQx4av7b1FlNZi%2FYWTahyuK%2Fr0e0nMtjc%2FNs0stIewok0s%2FzEy7GBltZU48rJB0k0IE0M1SRcNn5kmyqVIF6MC6KhYwB4sWz7fn3Chug0tt0Xq117HUx8%2FiTeQYMbKh7brSyryciBwuoDAA3dklCpq5X5A%2F3rsZGwMw1a%2FN0QY6pgFhyar1vtGMLooKP4za9Prp1m51zryyUK98eCNeHK6n1cKYHXwYN%2F%2B3E1ckoDekBuGBkMCyNo6WsUW7nJKlUTjKZgs9yX9NtZISGe8G9FZXKjCE%2BwcYhRy0J%2BKiN1D8m0I1QZ2e13mdrof%2B9tS64TwSATAOqArkW%2FHvUBHHCoVPY72vLCvXNd8mapzNemNnF%2FdXyuZk48SBvRjbcue1naehTJqvSThX&X-Amz-Signature=e34c7aa00d9dd1a84e32697db3db914031b2e7120b10997c3e19083538bd49bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPDJJKOZ%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBAnTMXTLiCmQLqgwZibMHMxDberuZgGTW27SjrwzRvAiAUGaLDIlKwX8efbCOym1%2FgUdcsfN5jihpm%2Bv2dVV1jzCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu3eMij3OAf5ec%2FO3KtwDHFU3LaPd36FMsueL23bhQH%2FIroUZGSd%2FNbxeBrtrsDQBlQ%2B2TXcE6GTN2L7Y%2Fz9JDMACDFb0ExIBjoQpgvyhp5bp6KVL2iW459gJug5RdGWTSAlfnScyhHSKD5djGIiZmzH4M3cYpdH8THa8jwDKB1arYXnOBbUwcZ064I5%2BFrIZX2wTfcONMx%2FjM%2BQ1%2B%2FGCM6ocsd%2BfRIhcIoY%2BIFBa%2B2rUVJPjTo1bTvX5eLWA2sAuR8lIwlhcduvmA6mmRygFhzoOGUvmP2Eefkfzhk6oNCLEkcwqrk43GuelIZakKLHe7oJvRekL%2BtZW7FFfKUPbWqGxAcBjtWzKZ5iNL9Zatm7bivm6qskg111SCvtiid4AH5JNhUTiRQaNcqZozk10Q%2FYwhSjA3KbtyiLk4jqpBRShhSG4szIKp5Sg0h1ec9veKdOR%2BxWlVzOXWbRXWYHKqs3BmPsHySZOOFhEJy%2Fc5RVoXTQx4av7b1FlNZi%2FYWTahyuK%2Fr0e0nMtjc%2FNs0stIewok0s%2FzEy7GBltZU48rJB0k0IE0M1SRcNn5kmyqVIF6MC6KhYwB4sWz7fn3Chug0tt0Xq117HUx8%2FiTeQYMbKh7brSyryciBwuoDAA3dklCpq5X5A%2F3rsZGwMw1a%2FN0QY6pgFhyar1vtGMLooKP4za9Prp1m51zryyUK98eCNeHK6n1cKYHXwYN%2F%2B3E1ckoDekBuGBkMCyNo6WsUW7nJKlUTjKZgs9yX9NtZISGe8G9FZXKjCE%2BwcYhRy0J%2BKiN1D8m0I1QZ2e13mdrof%2B9tS64TwSATAOqArkW%2FHvUBHHCoVPY72vLCvXNd8mapzNemNnF%2FdXyuZk48SBvRjbcue1naehTJqvSThX&X-Amz-Signature=507f337d5b48640888bd584f964673da92463e14747b783b09b2ec6981f6968b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPDJJKOZ%2F20260618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260618T040117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBAnTMXTLiCmQLqgwZibMHMxDberuZgGTW27SjrwzRvAiAUGaLDIlKwX8efbCOym1%2FgUdcsfN5jihpm%2Bv2dVV1jzCqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu3eMij3OAf5ec%2FO3KtwDHFU3LaPd36FMsueL23bhQH%2FIroUZGSd%2FNbxeBrtrsDQBlQ%2B2TXcE6GTN2L7Y%2Fz9JDMACDFb0ExIBjoQpgvyhp5bp6KVL2iW459gJug5RdGWTSAlfnScyhHSKD5djGIiZmzH4M3cYpdH8THa8jwDKB1arYXnOBbUwcZ064I5%2BFrIZX2wTfcONMx%2FjM%2BQ1%2B%2FGCM6ocsd%2BfRIhcIoY%2BIFBa%2B2rUVJPjTo1bTvX5eLWA2sAuR8lIwlhcduvmA6mmRygFhzoOGUvmP2Eefkfzhk6oNCLEkcwqrk43GuelIZakKLHe7oJvRekL%2BtZW7FFfKUPbWqGxAcBjtWzKZ5iNL9Zatm7bivm6qskg111SCvtiid4AH5JNhUTiRQaNcqZozk10Q%2FYwhSjA3KbtyiLk4jqpBRShhSG4szIKp5Sg0h1ec9veKdOR%2BxWlVzOXWbRXWYHKqs3BmPsHySZOOFhEJy%2Fc5RVoXTQx4av7b1FlNZi%2FYWTahyuK%2Fr0e0nMtjc%2FNs0stIewok0s%2FzEy7GBltZU48rJB0k0IE0M1SRcNn5kmyqVIF6MC6KhYwB4sWz7fn3Chug0tt0Xq117HUx8%2FiTeQYMbKh7brSyryciBwuoDAA3dklCpq5X5A%2F3rsZGwMw1a%2FN0QY6pgFhyar1vtGMLooKP4za9Prp1m51zryyUK98eCNeHK6n1cKYHXwYN%2F%2B3E1ckoDekBuGBkMCyNo6WsUW7nJKlUTjKZgs9yX9NtZISGe8G9FZXKjCE%2BwcYhRy0J%2BKiN1D8m0I1QZ2e13mdrof%2B9tS64TwSATAOqArkW%2FHvUBHHCoVPY72vLCvXNd8mapzNemNnF%2FdXyuZk48SBvRjbcue1naehTJqvSThX&X-Amz-Signature=a15f34c74e0cf63386201ff45f6d94a8c70731b2fc8af1eb82174a6ad1b0529d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
