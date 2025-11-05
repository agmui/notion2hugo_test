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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSBNNED6%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDfCtMVEgYrAVX3SkOI5eN5fUKGUKp5UGiRXbRqW53h3AiBOleWJCzZxoL%2FMAzy%2BNi8s%2FEn5FnNZ7uJpIvIU%2BlDUGCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM%2B0CwGtWuQu7zIlR2KtwDLbIfFOEk3EBi1AjpYUEYao6lIZfh4j5R4egA8eSCtKRhmhtTD6Su0bU1HMoaY24K5%2BDxUvpZb2SVwz3Sd%2BgzzyGjOLEYl5tuwetHVwA7P2AY1%2FIxmej%2BRRw44nxeQBnCISthF9XN5%2FaA1G0rIasDtMFKU5we5njJh5FQxE7Bl%2FSSnSfBdr%2F81L%2BuC%2F0tZA%2BMyyThiYvEth6e8OLFpw4CrV4dAsErVA6g9MxBc6Uo8VUdQHFpGL3dru7wopeQgLOybQtyrH%2F%2BzQViBcmSCPd9VZcxo0zQ1fpZ2wyVvuTt4hX%2B1CyyejPVnQI3ObKfsKWzvsGtmF%2F1y%2BXUg49Sn7JN0fcCgDhQg4B34nOPyBsef4MLP7N3I%2BDSGoL207CBjbGQc2XbirFyj5Gm%2B4RvpSLSEwl30L2fDWotzx1MQAV1AP1EGIsUQT8seJq16szhR86JOB3Vsj0DtWKJ%2BHVmHmDChQFieshJihXgVWu5Rco%2F1tMCD4IJdoZAWhi%2BrioDFHzU8m3PqVKc6d3XadDAkIDOnKqOiDV2hGhziPbdd9xzwsDJNp8ByWbrBGDsUaUzc0Mn9KNsDlqTk3Ae%2FsIhoprXy%2BzyhyUhVNGv7BXbc2jooV8K11vwt%2FSuiWiOZWIw5N2pyAY6pgFzKA2EraOPLXKH4tK72%2BNK7dpNnhb233UbzZ7CR87Opa7FATu0eHg2Z7172JUrCHlKgq1CA3rfTZN0tG11tsXkRkFJ%2Fn%2Bg3JE7bL6F%2FZECelR21xZsb0Zm7O%2Br%2B2fXYrQqx%2FsYM6M%2FBZg2fpC02hLjWH%2B%2BTmzbfMECYK775gm0rajFcyGpjDrUqTAArcrC9v6%2B%2FHa7l6p%2B5NRHLgPkiPgyYuJEPqsi&X-Amz-Signature=54fa7251e42da56fedf4ed51120c30006bffc45c28e5344e44efa47a3db47945&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSBNNED6%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDfCtMVEgYrAVX3SkOI5eN5fUKGUKp5UGiRXbRqW53h3AiBOleWJCzZxoL%2FMAzy%2BNi8s%2FEn5FnNZ7uJpIvIU%2BlDUGCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM%2B0CwGtWuQu7zIlR2KtwDLbIfFOEk3EBi1AjpYUEYao6lIZfh4j5R4egA8eSCtKRhmhtTD6Su0bU1HMoaY24K5%2BDxUvpZb2SVwz3Sd%2BgzzyGjOLEYl5tuwetHVwA7P2AY1%2FIxmej%2BRRw44nxeQBnCISthF9XN5%2FaA1G0rIasDtMFKU5we5njJh5FQxE7Bl%2FSSnSfBdr%2F81L%2BuC%2F0tZA%2BMyyThiYvEth6e8OLFpw4CrV4dAsErVA6g9MxBc6Uo8VUdQHFpGL3dru7wopeQgLOybQtyrH%2F%2BzQViBcmSCPd9VZcxo0zQ1fpZ2wyVvuTt4hX%2B1CyyejPVnQI3ObKfsKWzvsGtmF%2F1y%2BXUg49Sn7JN0fcCgDhQg4B34nOPyBsef4MLP7N3I%2BDSGoL207CBjbGQc2XbirFyj5Gm%2B4RvpSLSEwl30L2fDWotzx1MQAV1AP1EGIsUQT8seJq16szhR86JOB3Vsj0DtWKJ%2BHVmHmDChQFieshJihXgVWu5Rco%2F1tMCD4IJdoZAWhi%2BrioDFHzU8m3PqVKc6d3XadDAkIDOnKqOiDV2hGhziPbdd9xzwsDJNp8ByWbrBGDsUaUzc0Mn9KNsDlqTk3Ae%2FsIhoprXy%2BzyhyUhVNGv7BXbc2jooV8K11vwt%2FSuiWiOZWIw5N2pyAY6pgFzKA2EraOPLXKH4tK72%2BNK7dpNnhb233UbzZ7CR87Opa7FATu0eHg2Z7172JUrCHlKgq1CA3rfTZN0tG11tsXkRkFJ%2Fn%2Bg3JE7bL6F%2FZECelR21xZsb0Zm7O%2Br%2B2fXYrQqx%2FsYM6M%2FBZg2fpC02hLjWH%2B%2BTmzbfMECYK775gm0rajFcyGpjDrUqTAArcrC9v6%2B%2FHa7l6p%2B5NRHLgPkiPgyYuJEPqsi&X-Amz-Signature=312789b9f741d753e9400d912c95e82b905d1ccfe3de937e601424af685a0ec4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSBNNED6%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDfCtMVEgYrAVX3SkOI5eN5fUKGUKp5UGiRXbRqW53h3AiBOleWJCzZxoL%2FMAzy%2BNi8s%2FEn5FnNZ7uJpIvIU%2BlDUGCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM%2B0CwGtWuQu7zIlR2KtwDLbIfFOEk3EBi1AjpYUEYao6lIZfh4j5R4egA8eSCtKRhmhtTD6Su0bU1HMoaY24K5%2BDxUvpZb2SVwz3Sd%2BgzzyGjOLEYl5tuwetHVwA7P2AY1%2FIxmej%2BRRw44nxeQBnCISthF9XN5%2FaA1G0rIasDtMFKU5we5njJh5FQxE7Bl%2FSSnSfBdr%2F81L%2BuC%2F0tZA%2BMyyThiYvEth6e8OLFpw4CrV4dAsErVA6g9MxBc6Uo8VUdQHFpGL3dru7wopeQgLOybQtyrH%2F%2BzQViBcmSCPd9VZcxo0zQ1fpZ2wyVvuTt4hX%2B1CyyejPVnQI3ObKfsKWzvsGtmF%2F1y%2BXUg49Sn7JN0fcCgDhQg4B34nOPyBsef4MLP7N3I%2BDSGoL207CBjbGQc2XbirFyj5Gm%2B4RvpSLSEwl30L2fDWotzx1MQAV1AP1EGIsUQT8seJq16szhR86JOB3Vsj0DtWKJ%2BHVmHmDChQFieshJihXgVWu5Rco%2F1tMCD4IJdoZAWhi%2BrioDFHzU8m3PqVKc6d3XadDAkIDOnKqOiDV2hGhziPbdd9xzwsDJNp8ByWbrBGDsUaUzc0Mn9KNsDlqTk3Ae%2FsIhoprXy%2BzyhyUhVNGv7BXbc2jooV8K11vwt%2FSuiWiOZWIw5N2pyAY6pgFzKA2EraOPLXKH4tK72%2BNK7dpNnhb233UbzZ7CR87Opa7FATu0eHg2Z7172JUrCHlKgq1CA3rfTZN0tG11tsXkRkFJ%2Fn%2Bg3JE7bL6F%2FZECelR21xZsb0Zm7O%2Br%2B2fXYrQqx%2FsYM6M%2FBZg2fpC02hLjWH%2B%2BTmzbfMECYK775gm0rajFcyGpjDrUqTAArcrC9v6%2B%2FHa7l6p%2B5NRHLgPkiPgyYuJEPqsi&X-Amz-Signature=9a5c5375b523f038999492a93d721f40b7df81d6990d34c57e1b70a4147182d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSBNNED6%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDfCtMVEgYrAVX3SkOI5eN5fUKGUKp5UGiRXbRqW53h3AiBOleWJCzZxoL%2FMAzy%2BNi8s%2FEn5FnNZ7uJpIvIU%2BlDUGCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM%2B0CwGtWuQu7zIlR2KtwDLbIfFOEk3EBi1AjpYUEYao6lIZfh4j5R4egA8eSCtKRhmhtTD6Su0bU1HMoaY24K5%2BDxUvpZb2SVwz3Sd%2BgzzyGjOLEYl5tuwetHVwA7P2AY1%2FIxmej%2BRRw44nxeQBnCISthF9XN5%2FaA1G0rIasDtMFKU5we5njJh5FQxE7Bl%2FSSnSfBdr%2F81L%2BuC%2F0tZA%2BMyyThiYvEth6e8OLFpw4CrV4dAsErVA6g9MxBc6Uo8VUdQHFpGL3dru7wopeQgLOybQtyrH%2F%2BzQViBcmSCPd9VZcxo0zQ1fpZ2wyVvuTt4hX%2B1CyyejPVnQI3ObKfsKWzvsGtmF%2F1y%2BXUg49Sn7JN0fcCgDhQg4B34nOPyBsef4MLP7N3I%2BDSGoL207CBjbGQc2XbirFyj5Gm%2B4RvpSLSEwl30L2fDWotzx1MQAV1AP1EGIsUQT8seJq16szhR86JOB3Vsj0DtWKJ%2BHVmHmDChQFieshJihXgVWu5Rco%2F1tMCD4IJdoZAWhi%2BrioDFHzU8m3PqVKc6d3XadDAkIDOnKqOiDV2hGhziPbdd9xzwsDJNp8ByWbrBGDsUaUzc0Mn9KNsDlqTk3Ae%2FsIhoprXy%2BzyhyUhVNGv7BXbc2jooV8K11vwt%2FSuiWiOZWIw5N2pyAY6pgFzKA2EraOPLXKH4tK72%2BNK7dpNnhb233UbzZ7CR87Opa7FATu0eHg2Z7172JUrCHlKgq1CA3rfTZN0tG11tsXkRkFJ%2Fn%2Bg3JE7bL6F%2FZECelR21xZsb0Zm7O%2Br%2B2fXYrQqx%2FsYM6M%2FBZg2fpC02hLjWH%2B%2BTmzbfMECYK775gm0rajFcyGpjDrUqTAArcrC9v6%2B%2FHa7l6p%2B5NRHLgPkiPgyYuJEPqsi&X-Amz-Signature=0f3318c4ac5441d64190d1c1439ca65576f0bea2af2d0452c68479633b8e1a64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSBNNED6%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDfCtMVEgYrAVX3SkOI5eN5fUKGUKp5UGiRXbRqW53h3AiBOleWJCzZxoL%2FMAzy%2BNi8s%2FEn5FnNZ7uJpIvIU%2BlDUGCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM%2B0CwGtWuQu7zIlR2KtwDLbIfFOEk3EBi1AjpYUEYao6lIZfh4j5R4egA8eSCtKRhmhtTD6Su0bU1HMoaY24K5%2BDxUvpZb2SVwz3Sd%2BgzzyGjOLEYl5tuwetHVwA7P2AY1%2FIxmej%2BRRw44nxeQBnCISthF9XN5%2FaA1G0rIasDtMFKU5we5njJh5FQxE7Bl%2FSSnSfBdr%2F81L%2BuC%2F0tZA%2BMyyThiYvEth6e8OLFpw4CrV4dAsErVA6g9MxBc6Uo8VUdQHFpGL3dru7wopeQgLOybQtyrH%2F%2BzQViBcmSCPd9VZcxo0zQ1fpZ2wyVvuTt4hX%2B1CyyejPVnQI3ObKfsKWzvsGtmF%2F1y%2BXUg49Sn7JN0fcCgDhQg4B34nOPyBsef4MLP7N3I%2BDSGoL207CBjbGQc2XbirFyj5Gm%2B4RvpSLSEwl30L2fDWotzx1MQAV1AP1EGIsUQT8seJq16szhR86JOB3Vsj0DtWKJ%2BHVmHmDChQFieshJihXgVWu5Rco%2F1tMCD4IJdoZAWhi%2BrioDFHzU8m3PqVKc6d3XadDAkIDOnKqOiDV2hGhziPbdd9xzwsDJNp8ByWbrBGDsUaUzc0Mn9KNsDlqTk3Ae%2FsIhoprXy%2BzyhyUhVNGv7BXbc2jooV8K11vwt%2FSuiWiOZWIw5N2pyAY6pgFzKA2EraOPLXKH4tK72%2BNK7dpNnhb233UbzZ7CR87Opa7FATu0eHg2Z7172JUrCHlKgq1CA3rfTZN0tG11tsXkRkFJ%2Fn%2Bg3JE7bL6F%2FZECelR21xZsb0Zm7O%2Br%2B2fXYrQqx%2FsYM6M%2FBZg2fpC02hLjWH%2B%2BTmzbfMECYK775gm0rajFcyGpjDrUqTAArcrC9v6%2B%2FHa7l6p%2B5NRHLgPkiPgyYuJEPqsi&X-Amz-Signature=b9bad59efad5b26179abc7fc8d480c2a342631b03d17a8548f8308f1df3370a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSBNNED6%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDfCtMVEgYrAVX3SkOI5eN5fUKGUKp5UGiRXbRqW53h3AiBOleWJCzZxoL%2FMAzy%2BNi8s%2FEn5FnNZ7uJpIvIU%2BlDUGCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM%2B0CwGtWuQu7zIlR2KtwDLbIfFOEk3EBi1AjpYUEYao6lIZfh4j5R4egA8eSCtKRhmhtTD6Su0bU1HMoaY24K5%2BDxUvpZb2SVwz3Sd%2BgzzyGjOLEYl5tuwetHVwA7P2AY1%2FIxmej%2BRRw44nxeQBnCISthF9XN5%2FaA1G0rIasDtMFKU5we5njJh5FQxE7Bl%2FSSnSfBdr%2F81L%2BuC%2F0tZA%2BMyyThiYvEth6e8OLFpw4CrV4dAsErVA6g9MxBc6Uo8VUdQHFpGL3dru7wopeQgLOybQtyrH%2F%2BzQViBcmSCPd9VZcxo0zQ1fpZ2wyVvuTt4hX%2B1CyyejPVnQI3ObKfsKWzvsGtmF%2F1y%2BXUg49Sn7JN0fcCgDhQg4B34nOPyBsef4MLP7N3I%2BDSGoL207CBjbGQc2XbirFyj5Gm%2B4RvpSLSEwl30L2fDWotzx1MQAV1AP1EGIsUQT8seJq16szhR86JOB3Vsj0DtWKJ%2BHVmHmDChQFieshJihXgVWu5Rco%2F1tMCD4IJdoZAWhi%2BrioDFHzU8m3PqVKc6d3XadDAkIDOnKqOiDV2hGhziPbdd9xzwsDJNp8ByWbrBGDsUaUzc0Mn9KNsDlqTk3Ae%2FsIhoprXy%2BzyhyUhVNGv7BXbc2jooV8K11vwt%2FSuiWiOZWIw5N2pyAY6pgFzKA2EraOPLXKH4tK72%2BNK7dpNnhb233UbzZ7CR87Opa7FATu0eHg2Z7172JUrCHlKgq1CA3rfTZN0tG11tsXkRkFJ%2Fn%2Bg3JE7bL6F%2FZECelR21xZsb0Zm7O%2Br%2B2fXYrQqx%2FsYM6M%2FBZg2fpC02hLjWH%2B%2BTmzbfMECYK775gm0rajFcyGpjDrUqTAArcrC9v6%2B%2FHa7l6p%2B5NRHLgPkiPgyYuJEPqsi&X-Amz-Signature=aeca6e0b21599e14f92a31bca98e9475d6e82a14f3e24c7846b9a185052f98a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSBNNED6%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDfCtMVEgYrAVX3SkOI5eN5fUKGUKp5UGiRXbRqW53h3AiBOleWJCzZxoL%2FMAzy%2BNi8s%2FEn5FnNZ7uJpIvIU%2BlDUGCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM%2B0CwGtWuQu7zIlR2KtwDLbIfFOEk3EBi1AjpYUEYao6lIZfh4j5R4egA8eSCtKRhmhtTD6Su0bU1HMoaY24K5%2BDxUvpZb2SVwz3Sd%2BgzzyGjOLEYl5tuwetHVwA7P2AY1%2FIxmej%2BRRw44nxeQBnCISthF9XN5%2FaA1G0rIasDtMFKU5we5njJh5FQxE7Bl%2FSSnSfBdr%2F81L%2BuC%2F0tZA%2BMyyThiYvEth6e8OLFpw4CrV4dAsErVA6g9MxBc6Uo8VUdQHFpGL3dru7wopeQgLOybQtyrH%2F%2BzQViBcmSCPd9VZcxo0zQ1fpZ2wyVvuTt4hX%2B1CyyejPVnQI3ObKfsKWzvsGtmF%2F1y%2BXUg49Sn7JN0fcCgDhQg4B34nOPyBsef4MLP7N3I%2BDSGoL207CBjbGQc2XbirFyj5Gm%2B4RvpSLSEwl30L2fDWotzx1MQAV1AP1EGIsUQT8seJq16szhR86JOB3Vsj0DtWKJ%2BHVmHmDChQFieshJihXgVWu5Rco%2F1tMCD4IJdoZAWhi%2BrioDFHzU8m3PqVKc6d3XadDAkIDOnKqOiDV2hGhziPbdd9xzwsDJNp8ByWbrBGDsUaUzc0Mn9KNsDlqTk3Ae%2FsIhoprXy%2BzyhyUhVNGv7BXbc2jooV8K11vwt%2FSuiWiOZWIw5N2pyAY6pgFzKA2EraOPLXKH4tK72%2BNK7dpNnhb233UbzZ7CR87Opa7FATu0eHg2Z7172JUrCHlKgq1CA3rfTZN0tG11tsXkRkFJ%2Fn%2Bg3JE7bL6F%2FZECelR21xZsb0Zm7O%2Br%2B2fXYrQqx%2FsYM6M%2FBZg2fpC02hLjWH%2B%2BTmzbfMECYK775gm0rajFcyGpjDrUqTAArcrC9v6%2B%2FHa7l6p%2B5NRHLgPkiPgyYuJEPqsi&X-Amz-Signature=e80967cba3db9bf9d30f20980bad59c8138947400155370fc4bf67ec829a95f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSBNNED6%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDfCtMVEgYrAVX3SkOI5eN5fUKGUKp5UGiRXbRqW53h3AiBOleWJCzZxoL%2FMAzy%2BNi8s%2FEn5FnNZ7uJpIvIU%2BlDUGCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM%2B0CwGtWuQu7zIlR2KtwDLbIfFOEk3EBi1AjpYUEYao6lIZfh4j5R4egA8eSCtKRhmhtTD6Su0bU1HMoaY24K5%2BDxUvpZb2SVwz3Sd%2BgzzyGjOLEYl5tuwetHVwA7P2AY1%2FIxmej%2BRRw44nxeQBnCISthF9XN5%2FaA1G0rIasDtMFKU5we5njJh5FQxE7Bl%2FSSnSfBdr%2F81L%2BuC%2F0tZA%2BMyyThiYvEth6e8OLFpw4CrV4dAsErVA6g9MxBc6Uo8VUdQHFpGL3dru7wopeQgLOybQtyrH%2F%2BzQViBcmSCPd9VZcxo0zQ1fpZ2wyVvuTt4hX%2B1CyyejPVnQI3ObKfsKWzvsGtmF%2F1y%2BXUg49Sn7JN0fcCgDhQg4B34nOPyBsef4MLP7N3I%2BDSGoL207CBjbGQc2XbirFyj5Gm%2B4RvpSLSEwl30L2fDWotzx1MQAV1AP1EGIsUQT8seJq16szhR86JOB3Vsj0DtWKJ%2BHVmHmDChQFieshJihXgVWu5Rco%2F1tMCD4IJdoZAWhi%2BrioDFHzU8m3PqVKc6d3XadDAkIDOnKqOiDV2hGhziPbdd9xzwsDJNp8ByWbrBGDsUaUzc0Mn9KNsDlqTk3Ae%2FsIhoprXy%2BzyhyUhVNGv7BXbc2jooV8K11vwt%2FSuiWiOZWIw5N2pyAY6pgFzKA2EraOPLXKH4tK72%2BNK7dpNnhb233UbzZ7CR87Opa7FATu0eHg2Z7172JUrCHlKgq1CA3rfTZN0tG11tsXkRkFJ%2Fn%2Bg3JE7bL6F%2FZECelR21xZsb0Zm7O%2Br%2B2fXYrQqx%2FsYM6M%2FBZg2fpC02hLjWH%2B%2BTmzbfMECYK775gm0rajFcyGpjDrUqTAArcrC9v6%2B%2FHa7l6p%2B5NRHLgPkiPgyYuJEPqsi&X-Amz-Signature=d0c1b1724b0ca56c116aed0bf66d95e02509c6e9e5c07bd43b4e5c31cbe462b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSBNNED6%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDfCtMVEgYrAVX3SkOI5eN5fUKGUKp5UGiRXbRqW53h3AiBOleWJCzZxoL%2FMAzy%2BNi8s%2FEn5FnNZ7uJpIvIU%2BlDUGCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM%2B0CwGtWuQu7zIlR2KtwDLbIfFOEk3EBi1AjpYUEYao6lIZfh4j5R4egA8eSCtKRhmhtTD6Su0bU1HMoaY24K5%2BDxUvpZb2SVwz3Sd%2BgzzyGjOLEYl5tuwetHVwA7P2AY1%2FIxmej%2BRRw44nxeQBnCISthF9XN5%2FaA1G0rIasDtMFKU5we5njJh5FQxE7Bl%2FSSnSfBdr%2F81L%2BuC%2F0tZA%2BMyyThiYvEth6e8OLFpw4CrV4dAsErVA6g9MxBc6Uo8VUdQHFpGL3dru7wopeQgLOybQtyrH%2F%2BzQViBcmSCPd9VZcxo0zQ1fpZ2wyVvuTt4hX%2B1CyyejPVnQI3ObKfsKWzvsGtmF%2F1y%2BXUg49Sn7JN0fcCgDhQg4B34nOPyBsef4MLP7N3I%2BDSGoL207CBjbGQc2XbirFyj5Gm%2B4RvpSLSEwl30L2fDWotzx1MQAV1AP1EGIsUQT8seJq16szhR86JOB3Vsj0DtWKJ%2BHVmHmDChQFieshJihXgVWu5Rco%2F1tMCD4IJdoZAWhi%2BrioDFHzU8m3PqVKc6d3XadDAkIDOnKqOiDV2hGhziPbdd9xzwsDJNp8ByWbrBGDsUaUzc0Mn9KNsDlqTk3Ae%2FsIhoprXy%2BzyhyUhVNGv7BXbc2jooV8K11vwt%2FSuiWiOZWIw5N2pyAY6pgFzKA2EraOPLXKH4tK72%2BNK7dpNnhb233UbzZ7CR87Opa7FATu0eHg2Z7172JUrCHlKgq1CA3rfTZN0tG11tsXkRkFJ%2Fn%2Bg3JE7bL6F%2FZECelR21xZsb0Zm7O%2Br%2B2fXYrQqx%2FsYM6M%2FBZg2fpC02hLjWH%2B%2BTmzbfMECYK775gm0rajFcyGpjDrUqTAArcrC9v6%2B%2FHa7l6p%2B5NRHLgPkiPgyYuJEPqsi&X-Amz-Signature=048023b792d4512704ba0f1157c11a1e6742c44182b816fd782d4c6b2bfd8e10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSBNNED6%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDfCtMVEgYrAVX3SkOI5eN5fUKGUKp5UGiRXbRqW53h3AiBOleWJCzZxoL%2FMAzy%2BNi8s%2FEn5FnNZ7uJpIvIU%2BlDUGCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM%2B0CwGtWuQu7zIlR2KtwDLbIfFOEk3EBi1AjpYUEYao6lIZfh4j5R4egA8eSCtKRhmhtTD6Su0bU1HMoaY24K5%2BDxUvpZb2SVwz3Sd%2BgzzyGjOLEYl5tuwetHVwA7P2AY1%2FIxmej%2BRRw44nxeQBnCISthF9XN5%2FaA1G0rIasDtMFKU5we5njJh5FQxE7Bl%2FSSnSfBdr%2F81L%2BuC%2F0tZA%2BMyyThiYvEth6e8OLFpw4CrV4dAsErVA6g9MxBc6Uo8VUdQHFpGL3dru7wopeQgLOybQtyrH%2F%2BzQViBcmSCPd9VZcxo0zQ1fpZ2wyVvuTt4hX%2B1CyyejPVnQI3ObKfsKWzvsGtmF%2F1y%2BXUg49Sn7JN0fcCgDhQg4B34nOPyBsef4MLP7N3I%2BDSGoL207CBjbGQc2XbirFyj5Gm%2B4RvpSLSEwl30L2fDWotzx1MQAV1AP1EGIsUQT8seJq16szhR86JOB3Vsj0DtWKJ%2BHVmHmDChQFieshJihXgVWu5Rco%2F1tMCD4IJdoZAWhi%2BrioDFHzU8m3PqVKc6d3XadDAkIDOnKqOiDV2hGhziPbdd9xzwsDJNp8ByWbrBGDsUaUzc0Mn9KNsDlqTk3Ae%2FsIhoprXy%2BzyhyUhVNGv7BXbc2jooV8K11vwt%2FSuiWiOZWIw5N2pyAY6pgFzKA2EraOPLXKH4tK72%2BNK7dpNnhb233UbzZ7CR87Opa7FATu0eHg2Z7172JUrCHlKgq1CA3rfTZN0tG11tsXkRkFJ%2Fn%2Bg3JE7bL6F%2FZECelR21xZsb0Zm7O%2Br%2B2fXYrQqx%2FsYM6M%2FBZg2fpC02hLjWH%2B%2BTmzbfMECYK775gm0rajFcyGpjDrUqTAArcrC9v6%2B%2FHa7l6p%2B5NRHLgPkiPgyYuJEPqsi&X-Amz-Signature=1efebeedf34f4dfad1ce4fd4f79b5977a7d9546a3c49db904b8b4588eeb165aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSBNNED6%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDfCtMVEgYrAVX3SkOI5eN5fUKGUKp5UGiRXbRqW53h3AiBOleWJCzZxoL%2FMAzy%2BNi8s%2FEn5FnNZ7uJpIvIU%2BlDUGCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM%2B0CwGtWuQu7zIlR2KtwDLbIfFOEk3EBi1AjpYUEYao6lIZfh4j5R4egA8eSCtKRhmhtTD6Su0bU1HMoaY24K5%2BDxUvpZb2SVwz3Sd%2BgzzyGjOLEYl5tuwetHVwA7P2AY1%2FIxmej%2BRRw44nxeQBnCISthF9XN5%2FaA1G0rIasDtMFKU5we5njJh5FQxE7Bl%2FSSnSfBdr%2F81L%2BuC%2F0tZA%2BMyyThiYvEth6e8OLFpw4CrV4dAsErVA6g9MxBc6Uo8VUdQHFpGL3dru7wopeQgLOybQtyrH%2F%2BzQViBcmSCPd9VZcxo0zQ1fpZ2wyVvuTt4hX%2B1CyyejPVnQI3ObKfsKWzvsGtmF%2F1y%2BXUg49Sn7JN0fcCgDhQg4B34nOPyBsef4MLP7N3I%2BDSGoL207CBjbGQc2XbirFyj5Gm%2B4RvpSLSEwl30L2fDWotzx1MQAV1AP1EGIsUQT8seJq16szhR86JOB3Vsj0DtWKJ%2BHVmHmDChQFieshJihXgVWu5Rco%2F1tMCD4IJdoZAWhi%2BrioDFHzU8m3PqVKc6d3XadDAkIDOnKqOiDV2hGhziPbdd9xzwsDJNp8ByWbrBGDsUaUzc0Mn9KNsDlqTk3Ae%2FsIhoprXy%2BzyhyUhVNGv7BXbc2jooV8K11vwt%2FSuiWiOZWIw5N2pyAY6pgFzKA2EraOPLXKH4tK72%2BNK7dpNnhb233UbzZ7CR87Opa7FATu0eHg2Z7172JUrCHlKgq1CA3rfTZN0tG11tsXkRkFJ%2Fn%2Bg3JE7bL6F%2FZECelR21xZsb0Zm7O%2Br%2B2fXYrQqx%2FsYM6M%2FBZg2fpC02hLjWH%2B%2BTmzbfMECYK775gm0rajFcyGpjDrUqTAArcrC9v6%2B%2FHa7l6p%2B5NRHLgPkiPgyYuJEPqsi&X-Amz-Signature=ad16dd190101bd3c19927ae721277aa5c057d1d300e7edaf3e0f2aef79848064&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSBNNED6%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDfCtMVEgYrAVX3SkOI5eN5fUKGUKp5UGiRXbRqW53h3AiBOleWJCzZxoL%2FMAzy%2BNi8s%2FEn5FnNZ7uJpIvIU%2BlDUGCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM%2B0CwGtWuQu7zIlR2KtwDLbIfFOEk3EBi1AjpYUEYao6lIZfh4j5R4egA8eSCtKRhmhtTD6Su0bU1HMoaY24K5%2BDxUvpZb2SVwz3Sd%2BgzzyGjOLEYl5tuwetHVwA7P2AY1%2FIxmej%2BRRw44nxeQBnCISthF9XN5%2FaA1G0rIasDtMFKU5we5njJh5FQxE7Bl%2FSSnSfBdr%2F81L%2BuC%2F0tZA%2BMyyThiYvEth6e8OLFpw4CrV4dAsErVA6g9MxBc6Uo8VUdQHFpGL3dru7wopeQgLOybQtyrH%2F%2BzQViBcmSCPd9VZcxo0zQ1fpZ2wyVvuTt4hX%2B1CyyejPVnQI3ObKfsKWzvsGtmF%2F1y%2BXUg49Sn7JN0fcCgDhQg4B34nOPyBsef4MLP7N3I%2BDSGoL207CBjbGQc2XbirFyj5Gm%2B4RvpSLSEwl30L2fDWotzx1MQAV1AP1EGIsUQT8seJq16szhR86JOB3Vsj0DtWKJ%2BHVmHmDChQFieshJihXgVWu5Rco%2F1tMCD4IJdoZAWhi%2BrioDFHzU8m3PqVKc6d3XadDAkIDOnKqOiDV2hGhziPbdd9xzwsDJNp8ByWbrBGDsUaUzc0Mn9KNsDlqTk3Ae%2FsIhoprXy%2BzyhyUhVNGv7BXbc2jooV8K11vwt%2FSuiWiOZWIw5N2pyAY6pgFzKA2EraOPLXKH4tK72%2BNK7dpNnhb233UbzZ7CR87Opa7FATu0eHg2Z7172JUrCHlKgq1CA3rfTZN0tG11tsXkRkFJ%2Fn%2Bg3JE7bL6F%2FZECelR21xZsb0Zm7O%2Br%2B2fXYrQqx%2FsYM6M%2FBZg2fpC02hLjWH%2B%2BTmzbfMECYK775gm0rajFcyGpjDrUqTAArcrC9v6%2B%2FHa7l6p%2B5NRHLgPkiPgyYuJEPqsi&X-Amz-Signature=54c79b60217d913087a1b9f8b7719a0b80c06f5bcc06f2f1bdae0fa0c0337899&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSBNNED6%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDfCtMVEgYrAVX3SkOI5eN5fUKGUKp5UGiRXbRqW53h3AiBOleWJCzZxoL%2FMAzy%2BNi8s%2FEn5FnNZ7uJpIvIU%2BlDUGCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM%2B0CwGtWuQu7zIlR2KtwDLbIfFOEk3EBi1AjpYUEYao6lIZfh4j5R4egA8eSCtKRhmhtTD6Su0bU1HMoaY24K5%2BDxUvpZb2SVwz3Sd%2BgzzyGjOLEYl5tuwetHVwA7P2AY1%2FIxmej%2BRRw44nxeQBnCISthF9XN5%2FaA1G0rIasDtMFKU5we5njJh5FQxE7Bl%2FSSnSfBdr%2F81L%2BuC%2F0tZA%2BMyyThiYvEth6e8OLFpw4CrV4dAsErVA6g9MxBc6Uo8VUdQHFpGL3dru7wopeQgLOybQtyrH%2F%2BzQViBcmSCPd9VZcxo0zQ1fpZ2wyVvuTt4hX%2B1CyyejPVnQI3ObKfsKWzvsGtmF%2F1y%2BXUg49Sn7JN0fcCgDhQg4B34nOPyBsef4MLP7N3I%2BDSGoL207CBjbGQc2XbirFyj5Gm%2B4RvpSLSEwl30L2fDWotzx1MQAV1AP1EGIsUQT8seJq16szhR86JOB3Vsj0DtWKJ%2BHVmHmDChQFieshJihXgVWu5Rco%2F1tMCD4IJdoZAWhi%2BrioDFHzU8m3PqVKc6d3XadDAkIDOnKqOiDV2hGhziPbdd9xzwsDJNp8ByWbrBGDsUaUzc0Mn9KNsDlqTk3Ae%2FsIhoprXy%2BzyhyUhVNGv7BXbc2jooV8K11vwt%2FSuiWiOZWIw5N2pyAY6pgFzKA2EraOPLXKH4tK72%2BNK7dpNnhb233UbzZ7CR87Opa7FATu0eHg2Z7172JUrCHlKgq1CA3rfTZN0tG11tsXkRkFJ%2Fn%2Bg3JE7bL6F%2FZECelR21xZsb0Zm7O%2Br%2B2fXYrQqx%2FsYM6M%2FBZg2fpC02hLjWH%2B%2BTmzbfMECYK775gm0rajFcyGpjDrUqTAArcrC9v6%2B%2FHa7l6p%2B5NRHLgPkiPgyYuJEPqsi&X-Amz-Signature=ad5562cb214e54daa333e13ef7b3569bd40469e2b5c9bd8671a65fd24c3c6476&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSBNNED6%2F20251105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251105T013842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDfCtMVEgYrAVX3SkOI5eN5fUKGUKp5UGiRXbRqW53h3AiBOleWJCzZxoL%2FMAzy%2BNi8s%2FEn5FnNZ7uJpIvIU%2BlDUGCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM%2B0CwGtWuQu7zIlR2KtwDLbIfFOEk3EBi1AjpYUEYao6lIZfh4j5R4egA8eSCtKRhmhtTD6Su0bU1HMoaY24K5%2BDxUvpZb2SVwz3Sd%2BgzzyGjOLEYl5tuwetHVwA7P2AY1%2FIxmej%2BRRw44nxeQBnCISthF9XN5%2FaA1G0rIasDtMFKU5we5njJh5FQxE7Bl%2FSSnSfBdr%2F81L%2BuC%2F0tZA%2BMyyThiYvEth6e8OLFpw4CrV4dAsErVA6g9MxBc6Uo8VUdQHFpGL3dru7wopeQgLOybQtyrH%2F%2BzQViBcmSCPd9VZcxo0zQ1fpZ2wyVvuTt4hX%2B1CyyejPVnQI3ObKfsKWzvsGtmF%2F1y%2BXUg49Sn7JN0fcCgDhQg4B34nOPyBsef4MLP7N3I%2BDSGoL207CBjbGQc2XbirFyj5Gm%2B4RvpSLSEwl30L2fDWotzx1MQAV1AP1EGIsUQT8seJq16szhR86JOB3Vsj0DtWKJ%2BHVmHmDChQFieshJihXgVWu5Rco%2F1tMCD4IJdoZAWhi%2BrioDFHzU8m3PqVKc6d3XadDAkIDOnKqOiDV2hGhziPbdd9xzwsDJNp8ByWbrBGDsUaUzc0Mn9KNsDlqTk3Ae%2FsIhoprXy%2BzyhyUhVNGv7BXbc2jooV8K11vwt%2FSuiWiOZWIw5N2pyAY6pgFzKA2EraOPLXKH4tK72%2BNK7dpNnhb233UbzZ7CR87Opa7FATu0eHg2Z7172JUrCHlKgq1CA3rfTZN0tG11tsXkRkFJ%2Fn%2Bg3JE7bL6F%2FZECelR21xZsb0Zm7O%2Br%2B2fXYrQqx%2FsYM6M%2FBZg2fpC02hLjWH%2B%2BTmzbfMECYK775gm0rajFcyGpjDrUqTAArcrC9v6%2B%2FHa7l6p%2B5NRHLgPkiPgyYuJEPqsi&X-Amz-Signature=7994a71fb5098f91489e04ae62e4038308d575965b67641d006718ec2ecc0984&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
