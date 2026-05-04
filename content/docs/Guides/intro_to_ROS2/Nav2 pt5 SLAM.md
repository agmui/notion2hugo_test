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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LAQ56C7%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXC%2BpguA0sCZq5UtCjeVac3q6%2BIY8OB6lcruvnDIvcAwIgN0F3h%2B%2F8ZCEBo8jjRMa0wh4OCeq27EA1R12Fqyvebm0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNtWTBwaBn4%2Bq%2FgnESrcA3irA9vFmcIjkcG3SOl%2BG6888ORQccpoGIU2vkymuWfHaySccBbWIfz%2BQjp69jj8VdWJnA4AowUq%2F5J8k07ZNj6cmyrLgjh%2BUalsK3ETiT6uJ%2F3%2BsCfPYEHIvUY8vRGbup9arPLp1xhNU5EH5pw7kfB5jiYHiDqdlP4oxPqji1Ni74fohkDu%2FACrG1V5G8chReTnZTfGMwzY28a5yNRc7GEhTto44R0MXDJHx8m3TKXpcMx%2FPlA3P0gszIrZzoVMnFxIGrjAJyYPTnNmx1wgxDb40%2BTfMMVr0MiZm3Lg2Q9XvS%2B5h%2BCNAa4I7ti1EqiPgrQyrKc57lPUmoNZoqwYLO4rWJcqW41QoTFZN2A1pn02%2Fh2Jc%2Bgxq%2F5%2F7fZxrgKN8OWDzTm%2FbtKyGxbkJwR%2BqMZ%2FLVuz8U2Z%2Fchik9dNaf0btf%2FkDG44iU4Cn5z9qhSG4YAXOQiXbgoLv25HGGsqsn7tQU0ddJL5cUHSyzYWX9NqMCPFTimS3pqk2Ao4kQ4ckbxOFR3w8H0QGehzFA8CmjjJWJdpSVB2WYrKDN1MOP3wpSVPDxIInUYqIYUqgS5JP%2Fh0lXT0kxfWFSkZ%2FZ7ZKKzKk4s65%2BQW9QVPCCEWM9wCo7kC%2FqvWXpHX1wLuMKT5388GOqUBfgaLSHXBSkJQKGzyfSiQzvTjdyFcMQaMxMG4bZV7gWTo1Ry1Rz07QKn5j%2BO4dNa2%2F7a92w6Jjsej1aYHGe5TUe5Do%2BGaVCG%2F2tgxtjRcvcWFW1nh0%2F%2FEEifT8bOXXG%2BvqwBNBM2ZkdVHiarsbb7b%2Fai2KAFeW6idKY8f6%2BWnBxj75jNhWtCC0Dh3uh3o9AfL8qDddy8kT8E%2B2U3dxNYHqJbbz9o8&X-Amz-Signature=ac78b16ce9a3bf0b7ec6f255f42f0352b7b649f4b12baef8301d18184a2b9c64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LAQ56C7%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXC%2BpguA0sCZq5UtCjeVac3q6%2BIY8OB6lcruvnDIvcAwIgN0F3h%2B%2F8ZCEBo8jjRMa0wh4OCeq27EA1R12Fqyvebm0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNtWTBwaBn4%2Bq%2FgnESrcA3irA9vFmcIjkcG3SOl%2BG6888ORQccpoGIU2vkymuWfHaySccBbWIfz%2BQjp69jj8VdWJnA4AowUq%2F5J8k07ZNj6cmyrLgjh%2BUalsK3ETiT6uJ%2F3%2BsCfPYEHIvUY8vRGbup9arPLp1xhNU5EH5pw7kfB5jiYHiDqdlP4oxPqji1Ni74fohkDu%2FACrG1V5G8chReTnZTfGMwzY28a5yNRc7GEhTto44R0MXDJHx8m3TKXpcMx%2FPlA3P0gszIrZzoVMnFxIGrjAJyYPTnNmx1wgxDb40%2BTfMMVr0MiZm3Lg2Q9XvS%2B5h%2BCNAa4I7ti1EqiPgrQyrKc57lPUmoNZoqwYLO4rWJcqW41QoTFZN2A1pn02%2Fh2Jc%2Bgxq%2F5%2F7fZxrgKN8OWDzTm%2FbtKyGxbkJwR%2BqMZ%2FLVuz8U2Z%2Fchik9dNaf0btf%2FkDG44iU4Cn5z9qhSG4YAXOQiXbgoLv25HGGsqsn7tQU0ddJL5cUHSyzYWX9NqMCPFTimS3pqk2Ao4kQ4ckbxOFR3w8H0QGehzFA8CmjjJWJdpSVB2WYrKDN1MOP3wpSVPDxIInUYqIYUqgS5JP%2Fh0lXT0kxfWFSkZ%2FZ7ZKKzKk4s65%2BQW9QVPCCEWM9wCo7kC%2FqvWXpHX1wLuMKT5388GOqUBfgaLSHXBSkJQKGzyfSiQzvTjdyFcMQaMxMG4bZV7gWTo1Ry1Rz07QKn5j%2BO4dNa2%2F7a92w6Jjsej1aYHGe5TUe5Do%2BGaVCG%2F2tgxtjRcvcWFW1nh0%2F%2FEEifT8bOXXG%2BvqwBNBM2ZkdVHiarsbb7b%2Fai2KAFeW6idKY8f6%2BWnBxj75jNhWtCC0Dh3uh3o9AfL8qDddy8kT8E%2B2U3dxNYHqJbbz9o8&X-Amz-Signature=1f2c14bac5e69c72afc3cfeb132f45789b195aa1d0e84cc1d3c81d56b78b2db9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LAQ56C7%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXC%2BpguA0sCZq5UtCjeVac3q6%2BIY8OB6lcruvnDIvcAwIgN0F3h%2B%2F8ZCEBo8jjRMa0wh4OCeq27EA1R12Fqyvebm0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNtWTBwaBn4%2Bq%2FgnESrcA3irA9vFmcIjkcG3SOl%2BG6888ORQccpoGIU2vkymuWfHaySccBbWIfz%2BQjp69jj8VdWJnA4AowUq%2F5J8k07ZNj6cmyrLgjh%2BUalsK3ETiT6uJ%2F3%2BsCfPYEHIvUY8vRGbup9arPLp1xhNU5EH5pw7kfB5jiYHiDqdlP4oxPqji1Ni74fohkDu%2FACrG1V5G8chReTnZTfGMwzY28a5yNRc7GEhTto44R0MXDJHx8m3TKXpcMx%2FPlA3P0gszIrZzoVMnFxIGrjAJyYPTnNmx1wgxDb40%2BTfMMVr0MiZm3Lg2Q9XvS%2B5h%2BCNAa4I7ti1EqiPgrQyrKc57lPUmoNZoqwYLO4rWJcqW41QoTFZN2A1pn02%2Fh2Jc%2Bgxq%2F5%2F7fZxrgKN8OWDzTm%2FbtKyGxbkJwR%2BqMZ%2FLVuz8U2Z%2Fchik9dNaf0btf%2FkDG44iU4Cn5z9qhSG4YAXOQiXbgoLv25HGGsqsn7tQU0ddJL5cUHSyzYWX9NqMCPFTimS3pqk2Ao4kQ4ckbxOFR3w8H0QGehzFA8CmjjJWJdpSVB2WYrKDN1MOP3wpSVPDxIInUYqIYUqgS5JP%2Fh0lXT0kxfWFSkZ%2FZ7ZKKzKk4s65%2BQW9QVPCCEWM9wCo7kC%2FqvWXpHX1wLuMKT5388GOqUBfgaLSHXBSkJQKGzyfSiQzvTjdyFcMQaMxMG4bZV7gWTo1Ry1Rz07QKn5j%2BO4dNa2%2F7a92w6Jjsej1aYHGe5TUe5Do%2BGaVCG%2F2tgxtjRcvcWFW1nh0%2F%2FEEifT8bOXXG%2BvqwBNBM2ZkdVHiarsbb7b%2Fai2KAFeW6idKY8f6%2BWnBxj75jNhWtCC0Dh3uh3o9AfL8qDddy8kT8E%2B2U3dxNYHqJbbz9o8&X-Amz-Signature=ba8a443039602f9721d31ce6460c4163f65c7362cfb5036805e684f509056220&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LAQ56C7%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXC%2BpguA0sCZq5UtCjeVac3q6%2BIY8OB6lcruvnDIvcAwIgN0F3h%2B%2F8ZCEBo8jjRMa0wh4OCeq27EA1R12Fqyvebm0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNtWTBwaBn4%2Bq%2FgnESrcA3irA9vFmcIjkcG3SOl%2BG6888ORQccpoGIU2vkymuWfHaySccBbWIfz%2BQjp69jj8VdWJnA4AowUq%2F5J8k07ZNj6cmyrLgjh%2BUalsK3ETiT6uJ%2F3%2BsCfPYEHIvUY8vRGbup9arPLp1xhNU5EH5pw7kfB5jiYHiDqdlP4oxPqji1Ni74fohkDu%2FACrG1V5G8chReTnZTfGMwzY28a5yNRc7GEhTto44R0MXDJHx8m3TKXpcMx%2FPlA3P0gszIrZzoVMnFxIGrjAJyYPTnNmx1wgxDb40%2BTfMMVr0MiZm3Lg2Q9XvS%2B5h%2BCNAa4I7ti1EqiPgrQyrKc57lPUmoNZoqwYLO4rWJcqW41QoTFZN2A1pn02%2Fh2Jc%2Bgxq%2F5%2F7fZxrgKN8OWDzTm%2FbtKyGxbkJwR%2BqMZ%2FLVuz8U2Z%2Fchik9dNaf0btf%2FkDG44iU4Cn5z9qhSG4YAXOQiXbgoLv25HGGsqsn7tQU0ddJL5cUHSyzYWX9NqMCPFTimS3pqk2Ao4kQ4ckbxOFR3w8H0QGehzFA8CmjjJWJdpSVB2WYrKDN1MOP3wpSVPDxIInUYqIYUqgS5JP%2Fh0lXT0kxfWFSkZ%2FZ7ZKKzKk4s65%2BQW9QVPCCEWM9wCo7kC%2FqvWXpHX1wLuMKT5388GOqUBfgaLSHXBSkJQKGzyfSiQzvTjdyFcMQaMxMG4bZV7gWTo1Ry1Rz07QKn5j%2BO4dNa2%2F7a92w6Jjsej1aYHGe5TUe5Do%2BGaVCG%2F2tgxtjRcvcWFW1nh0%2F%2FEEifT8bOXXG%2BvqwBNBM2ZkdVHiarsbb7b%2Fai2KAFeW6idKY8f6%2BWnBxj75jNhWtCC0Dh3uh3o9AfL8qDddy8kT8E%2B2U3dxNYHqJbbz9o8&X-Amz-Signature=9c594dd861d880d1e342b1856a659707bdd462ec3fa943decb8f40211a67f691&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LAQ56C7%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXC%2BpguA0sCZq5UtCjeVac3q6%2BIY8OB6lcruvnDIvcAwIgN0F3h%2B%2F8ZCEBo8jjRMa0wh4OCeq27EA1R12Fqyvebm0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNtWTBwaBn4%2Bq%2FgnESrcA3irA9vFmcIjkcG3SOl%2BG6888ORQccpoGIU2vkymuWfHaySccBbWIfz%2BQjp69jj8VdWJnA4AowUq%2F5J8k07ZNj6cmyrLgjh%2BUalsK3ETiT6uJ%2F3%2BsCfPYEHIvUY8vRGbup9arPLp1xhNU5EH5pw7kfB5jiYHiDqdlP4oxPqji1Ni74fohkDu%2FACrG1V5G8chReTnZTfGMwzY28a5yNRc7GEhTto44R0MXDJHx8m3TKXpcMx%2FPlA3P0gszIrZzoVMnFxIGrjAJyYPTnNmx1wgxDb40%2BTfMMVr0MiZm3Lg2Q9XvS%2B5h%2BCNAa4I7ti1EqiPgrQyrKc57lPUmoNZoqwYLO4rWJcqW41QoTFZN2A1pn02%2Fh2Jc%2Bgxq%2F5%2F7fZxrgKN8OWDzTm%2FbtKyGxbkJwR%2BqMZ%2FLVuz8U2Z%2Fchik9dNaf0btf%2FkDG44iU4Cn5z9qhSG4YAXOQiXbgoLv25HGGsqsn7tQU0ddJL5cUHSyzYWX9NqMCPFTimS3pqk2Ao4kQ4ckbxOFR3w8H0QGehzFA8CmjjJWJdpSVB2WYrKDN1MOP3wpSVPDxIInUYqIYUqgS5JP%2Fh0lXT0kxfWFSkZ%2FZ7ZKKzKk4s65%2BQW9QVPCCEWM9wCo7kC%2FqvWXpHX1wLuMKT5388GOqUBfgaLSHXBSkJQKGzyfSiQzvTjdyFcMQaMxMG4bZV7gWTo1Ry1Rz07QKn5j%2BO4dNa2%2F7a92w6Jjsej1aYHGe5TUe5Do%2BGaVCG%2F2tgxtjRcvcWFW1nh0%2F%2FEEifT8bOXXG%2BvqwBNBM2ZkdVHiarsbb7b%2Fai2KAFeW6idKY8f6%2BWnBxj75jNhWtCC0Dh3uh3o9AfL8qDddy8kT8E%2B2U3dxNYHqJbbz9o8&X-Amz-Signature=45feb95cbe7a91cb1a689f9ed890dc45f4c77c01c6955a4a1e67f6dbdb5740cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LAQ56C7%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXC%2BpguA0sCZq5UtCjeVac3q6%2BIY8OB6lcruvnDIvcAwIgN0F3h%2B%2F8ZCEBo8jjRMa0wh4OCeq27EA1R12Fqyvebm0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNtWTBwaBn4%2Bq%2FgnESrcA3irA9vFmcIjkcG3SOl%2BG6888ORQccpoGIU2vkymuWfHaySccBbWIfz%2BQjp69jj8VdWJnA4AowUq%2F5J8k07ZNj6cmyrLgjh%2BUalsK3ETiT6uJ%2F3%2BsCfPYEHIvUY8vRGbup9arPLp1xhNU5EH5pw7kfB5jiYHiDqdlP4oxPqji1Ni74fohkDu%2FACrG1V5G8chReTnZTfGMwzY28a5yNRc7GEhTto44R0MXDJHx8m3TKXpcMx%2FPlA3P0gszIrZzoVMnFxIGrjAJyYPTnNmx1wgxDb40%2BTfMMVr0MiZm3Lg2Q9XvS%2B5h%2BCNAa4I7ti1EqiPgrQyrKc57lPUmoNZoqwYLO4rWJcqW41QoTFZN2A1pn02%2Fh2Jc%2Bgxq%2F5%2F7fZxrgKN8OWDzTm%2FbtKyGxbkJwR%2BqMZ%2FLVuz8U2Z%2Fchik9dNaf0btf%2FkDG44iU4Cn5z9qhSG4YAXOQiXbgoLv25HGGsqsn7tQU0ddJL5cUHSyzYWX9NqMCPFTimS3pqk2Ao4kQ4ckbxOFR3w8H0QGehzFA8CmjjJWJdpSVB2WYrKDN1MOP3wpSVPDxIInUYqIYUqgS5JP%2Fh0lXT0kxfWFSkZ%2FZ7ZKKzKk4s65%2BQW9QVPCCEWM9wCo7kC%2FqvWXpHX1wLuMKT5388GOqUBfgaLSHXBSkJQKGzyfSiQzvTjdyFcMQaMxMG4bZV7gWTo1Ry1Rz07QKn5j%2BO4dNa2%2F7a92w6Jjsej1aYHGe5TUe5Do%2BGaVCG%2F2tgxtjRcvcWFW1nh0%2F%2FEEifT8bOXXG%2BvqwBNBM2ZkdVHiarsbb7b%2Fai2KAFeW6idKY8f6%2BWnBxj75jNhWtCC0Dh3uh3o9AfL8qDddy8kT8E%2B2U3dxNYHqJbbz9o8&X-Amz-Signature=bccdc1f3511ca3988592f1ade1d0b7dcf97941a9bf80d50d4f7e6d6b12f6050f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LAQ56C7%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXC%2BpguA0sCZq5UtCjeVac3q6%2BIY8OB6lcruvnDIvcAwIgN0F3h%2B%2F8ZCEBo8jjRMa0wh4OCeq27EA1R12Fqyvebm0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNtWTBwaBn4%2Bq%2FgnESrcA3irA9vFmcIjkcG3SOl%2BG6888ORQccpoGIU2vkymuWfHaySccBbWIfz%2BQjp69jj8VdWJnA4AowUq%2F5J8k07ZNj6cmyrLgjh%2BUalsK3ETiT6uJ%2F3%2BsCfPYEHIvUY8vRGbup9arPLp1xhNU5EH5pw7kfB5jiYHiDqdlP4oxPqji1Ni74fohkDu%2FACrG1V5G8chReTnZTfGMwzY28a5yNRc7GEhTto44R0MXDJHx8m3TKXpcMx%2FPlA3P0gszIrZzoVMnFxIGrjAJyYPTnNmx1wgxDb40%2BTfMMVr0MiZm3Lg2Q9XvS%2B5h%2BCNAa4I7ti1EqiPgrQyrKc57lPUmoNZoqwYLO4rWJcqW41QoTFZN2A1pn02%2Fh2Jc%2Bgxq%2F5%2F7fZxrgKN8OWDzTm%2FbtKyGxbkJwR%2BqMZ%2FLVuz8U2Z%2Fchik9dNaf0btf%2FkDG44iU4Cn5z9qhSG4YAXOQiXbgoLv25HGGsqsn7tQU0ddJL5cUHSyzYWX9NqMCPFTimS3pqk2Ao4kQ4ckbxOFR3w8H0QGehzFA8CmjjJWJdpSVB2WYrKDN1MOP3wpSVPDxIInUYqIYUqgS5JP%2Fh0lXT0kxfWFSkZ%2FZ7ZKKzKk4s65%2BQW9QVPCCEWM9wCo7kC%2FqvWXpHX1wLuMKT5388GOqUBfgaLSHXBSkJQKGzyfSiQzvTjdyFcMQaMxMG4bZV7gWTo1Ry1Rz07QKn5j%2BO4dNa2%2F7a92w6Jjsej1aYHGe5TUe5Do%2BGaVCG%2F2tgxtjRcvcWFW1nh0%2F%2FEEifT8bOXXG%2BvqwBNBM2ZkdVHiarsbb7b%2Fai2KAFeW6idKY8f6%2BWnBxj75jNhWtCC0Dh3uh3o9AfL8qDddy8kT8E%2B2U3dxNYHqJbbz9o8&X-Amz-Signature=ed032d9421b0f82de5afd98ceb55568ed6355280df4d4364ef263098356dca5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LAQ56C7%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXC%2BpguA0sCZq5UtCjeVac3q6%2BIY8OB6lcruvnDIvcAwIgN0F3h%2B%2F8ZCEBo8jjRMa0wh4OCeq27EA1R12Fqyvebm0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNtWTBwaBn4%2Bq%2FgnESrcA3irA9vFmcIjkcG3SOl%2BG6888ORQccpoGIU2vkymuWfHaySccBbWIfz%2BQjp69jj8VdWJnA4AowUq%2F5J8k07ZNj6cmyrLgjh%2BUalsK3ETiT6uJ%2F3%2BsCfPYEHIvUY8vRGbup9arPLp1xhNU5EH5pw7kfB5jiYHiDqdlP4oxPqji1Ni74fohkDu%2FACrG1V5G8chReTnZTfGMwzY28a5yNRc7GEhTto44R0MXDJHx8m3TKXpcMx%2FPlA3P0gszIrZzoVMnFxIGrjAJyYPTnNmx1wgxDb40%2BTfMMVr0MiZm3Lg2Q9XvS%2B5h%2BCNAa4I7ti1EqiPgrQyrKc57lPUmoNZoqwYLO4rWJcqW41QoTFZN2A1pn02%2Fh2Jc%2Bgxq%2F5%2F7fZxrgKN8OWDzTm%2FbtKyGxbkJwR%2BqMZ%2FLVuz8U2Z%2Fchik9dNaf0btf%2FkDG44iU4Cn5z9qhSG4YAXOQiXbgoLv25HGGsqsn7tQU0ddJL5cUHSyzYWX9NqMCPFTimS3pqk2Ao4kQ4ckbxOFR3w8H0QGehzFA8CmjjJWJdpSVB2WYrKDN1MOP3wpSVPDxIInUYqIYUqgS5JP%2Fh0lXT0kxfWFSkZ%2FZ7ZKKzKk4s65%2BQW9QVPCCEWM9wCo7kC%2FqvWXpHX1wLuMKT5388GOqUBfgaLSHXBSkJQKGzyfSiQzvTjdyFcMQaMxMG4bZV7gWTo1Ry1Rz07QKn5j%2BO4dNa2%2F7a92w6Jjsej1aYHGe5TUe5Do%2BGaVCG%2F2tgxtjRcvcWFW1nh0%2F%2FEEifT8bOXXG%2BvqwBNBM2ZkdVHiarsbb7b%2Fai2KAFeW6idKY8f6%2BWnBxj75jNhWtCC0Dh3uh3o9AfL8qDddy8kT8E%2B2U3dxNYHqJbbz9o8&X-Amz-Signature=c100c156a3cce8f56352c83972df7c191eef23d715b812ff8e9a4ec4c990121c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LAQ56C7%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXC%2BpguA0sCZq5UtCjeVac3q6%2BIY8OB6lcruvnDIvcAwIgN0F3h%2B%2F8ZCEBo8jjRMa0wh4OCeq27EA1R12Fqyvebm0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNtWTBwaBn4%2Bq%2FgnESrcA3irA9vFmcIjkcG3SOl%2BG6888ORQccpoGIU2vkymuWfHaySccBbWIfz%2BQjp69jj8VdWJnA4AowUq%2F5J8k07ZNj6cmyrLgjh%2BUalsK3ETiT6uJ%2F3%2BsCfPYEHIvUY8vRGbup9arPLp1xhNU5EH5pw7kfB5jiYHiDqdlP4oxPqji1Ni74fohkDu%2FACrG1V5G8chReTnZTfGMwzY28a5yNRc7GEhTto44R0MXDJHx8m3TKXpcMx%2FPlA3P0gszIrZzoVMnFxIGrjAJyYPTnNmx1wgxDb40%2BTfMMVr0MiZm3Lg2Q9XvS%2B5h%2BCNAa4I7ti1EqiPgrQyrKc57lPUmoNZoqwYLO4rWJcqW41QoTFZN2A1pn02%2Fh2Jc%2Bgxq%2F5%2F7fZxrgKN8OWDzTm%2FbtKyGxbkJwR%2BqMZ%2FLVuz8U2Z%2Fchik9dNaf0btf%2FkDG44iU4Cn5z9qhSG4YAXOQiXbgoLv25HGGsqsn7tQU0ddJL5cUHSyzYWX9NqMCPFTimS3pqk2Ao4kQ4ckbxOFR3w8H0QGehzFA8CmjjJWJdpSVB2WYrKDN1MOP3wpSVPDxIInUYqIYUqgS5JP%2Fh0lXT0kxfWFSkZ%2FZ7ZKKzKk4s65%2BQW9QVPCCEWM9wCo7kC%2FqvWXpHX1wLuMKT5388GOqUBfgaLSHXBSkJQKGzyfSiQzvTjdyFcMQaMxMG4bZV7gWTo1Ry1Rz07QKn5j%2BO4dNa2%2F7a92w6Jjsej1aYHGe5TUe5Do%2BGaVCG%2F2tgxtjRcvcWFW1nh0%2F%2FEEifT8bOXXG%2BvqwBNBM2ZkdVHiarsbb7b%2Fai2KAFeW6idKY8f6%2BWnBxj75jNhWtCC0Dh3uh3o9AfL8qDddy8kT8E%2B2U3dxNYHqJbbz9o8&X-Amz-Signature=e6fd054f75636888e14e2771bf02dd9acdc7d94d256937b1fc0be4582d2fe469&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LAQ56C7%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXC%2BpguA0sCZq5UtCjeVac3q6%2BIY8OB6lcruvnDIvcAwIgN0F3h%2B%2F8ZCEBo8jjRMa0wh4OCeq27EA1R12Fqyvebm0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNtWTBwaBn4%2Bq%2FgnESrcA3irA9vFmcIjkcG3SOl%2BG6888ORQccpoGIU2vkymuWfHaySccBbWIfz%2BQjp69jj8VdWJnA4AowUq%2F5J8k07ZNj6cmyrLgjh%2BUalsK3ETiT6uJ%2F3%2BsCfPYEHIvUY8vRGbup9arPLp1xhNU5EH5pw7kfB5jiYHiDqdlP4oxPqji1Ni74fohkDu%2FACrG1V5G8chReTnZTfGMwzY28a5yNRc7GEhTto44R0MXDJHx8m3TKXpcMx%2FPlA3P0gszIrZzoVMnFxIGrjAJyYPTnNmx1wgxDb40%2BTfMMVr0MiZm3Lg2Q9XvS%2B5h%2BCNAa4I7ti1EqiPgrQyrKc57lPUmoNZoqwYLO4rWJcqW41QoTFZN2A1pn02%2Fh2Jc%2Bgxq%2F5%2F7fZxrgKN8OWDzTm%2FbtKyGxbkJwR%2BqMZ%2FLVuz8U2Z%2Fchik9dNaf0btf%2FkDG44iU4Cn5z9qhSG4YAXOQiXbgoLv25HGGsqsn7tQU0ddJL5cUHSyzYWX9NqMCPFTimS3pqk2Ao4kQ4ckbxOFR3w8H0QGehzFA8CmjjJWJdpSVB2WYrKDN1MOP3wpSVPDxIInUYqIYUqgS5JP%2Fh0lXT0kxfWFSkZ%2FZ7ZKKzKk4s65%2BQW9QVPCCEWM9wCo7kC%2FqvWXpHX1wLuMKT5388GOqUBfgaLSHXBSkJQKGzyfSiQzvTjdyFcMQaMxMG4bZV7gWTo1Ry1Rz07QKn5j%2BO4dNa2%2F7a92w6Jjsej1aYHGe5TUe5Do%2BGaVCG%2F2tgxtjRcvcWFW1nh0%2F%2FEEifT8bOXXG%2BvqwBNBM2ZkdVHiarsbb7b%2Fai2KAFeW6idKY8f6%2BWnBxj75jNhWtCC0Dh3uh3o9AfL8qDddy8kT8E%2B2U3dxNYHqJbbz9o8&X-Amz-Signature=004caf81d38fc1651f53f2256dd622ecaf9da1be1367dacecf15c129d779a904&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LAQ56C7%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXC%2BpguA0sCZq5UtCjeVac3q6%2BIY8OB6lcruvnDIvcAwIgN0F3h%2B%2F8ZCEBo8jjRMa0wh4OCeq27EA1R12Fqyvebm0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNtWTBwaBn4%2Bq%2FgnESrcA3irA9vFmcIjkcG3SOl%2BG6888ORQccpoGIU2vkymuWfHaySccBbWIfz%2BQjp69jj8VdWJnA4AowUq%2F5J8k07ZNj6cmyrLgjh%2BUalsK3ETiT6uJ%2F3%2BsCfPYEHIvUY8vRGbup9arPLp1xhNU5EH5pw7kfB5jiYHiDqdlP4oxPqji1Ni74fohkDu%2FACrG1V5G8chReTnZTfGMwzY28a5yNRc7GEhTto44R0MXDJHx8m3TKXpcMx%2FPlA3P0gszIrZzoVMnFxIGrjAJyYPTnNmx1wgxDb40%2BTfMMVr0MiZm3Lg2Q9XvS%2B5h%2BCNAa4I7ti1EqiPgrQyrKc57lPUmoNZoqwYLO4rWJcqW41QoTFZN2A1pn02%2Fh2Jc%2Bgxq%2F5%2F7fZxrgKN8OWDzTm%2FbtKyGxbkJwR%2BqMZ%2FLVuz8U2Z%2Fchik9dNaf0btf%2FkDG44iU4Cn5z9qhSG4YAXOQiXbgoLv25HGGsqsn7tQU0ddJL5cUHSyzYWX9NqMCPFTimS3pqk2Ao4kQ4ckbxOFR3w8H0QGehzFA8CmjjJWJdpSVB2WYrKDN1MOP3wpSVPDxIInUYqIYUqgS5JP%2Fh0lXT0kxfWFSkZ%2FZ7ZKKzKk4s65%2BQW9QVPCCEWM9wCo7kC%2FqvWXpHX1wLuMKT5388GOqUBfgaLSHXBSkJQKGzyfSiQzvTjdyFcMQaMxMG4bZV7gWTo1Ry1Rz07QKn5j%2BO4dNa2%2F7a92w6Jjsej1aYHGe5TUe5Do%2BGaVCG%2F2tgxtjRcvcWFW1nh0%2F%2FEEifT8bOXXG%2BvqwBNBM2ZkdVHiarsbb7b%2Fai2KAFeW6idKY8f6%2BWnBxj75jNhWtCC0Dh3uh3o9AfL8qDddy8kT8E%2B2U3dxNYHqJbbz9o8&X-Amz-Signature=96d473a14199cbc97822098d5f954e1cf7d53174dd9c5cfb4a984245a6531842&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LAQ56C7%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXC%2BpguA0sCZq5UtCjeVac3q6%2BIY8OB6lcruvnDIvcAwIgN0F3h%2B%2F8ZCEBo8jjRMa0wh4OCeq27EA1R12Fqyvebm0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNtWTBwaBn4%2Bq%2FgnESrcA3irA9vFmcIjkcG3SOl%2BG6888ORQccpoGIU2vkymuWfHaySccBbWIfz%2BQjp69jj8VdWJnA4AowUq%2F5J8k07ZNj6cmyrLgjh%2BUalsK3ETiT6uJ%2F3%2BsCfPYEHIvUY8vRGbup9arPLp1xhNU5EH5pw7kfB5jiYHiDqdlP4oxPqji1Ni74fohkDu%2FACrG1V5G8chReTnZTfGMwzY28a5yNRc7GEhTto44R0MXDJHx8m3TKXpcMx%2FPlA3P0gszIrZzoVMnFxIGrjAJyYPTnNmx1wgxDb40%2BTfMMVr0MiZm3Lg2Q9XvS%2B5h%2BCNAa4I7ti1EqiPgrQyrKc57lPUmoNZoqwYLO4rWJcqW41QoTFZN2A1pn02%2Fh2Jc%2Bgxq%2F5%2F7fZxrgKN8OWDzTm%2FbtKyGxbkJwR%2BqMZ%2FLVuz8U2Z%2Fchik9dNaf0btf%2FkDG44iU4Cn5z9qhSG4YAXOQiXbgoLv25HGGsqsn7tQU0ddJL5cUHSyzYWX9NqMCPFTimS3pqk2Ao4kQ4ckbxOFR3w8H0QGehzFA8CmjjJWJdpSVB2WYrKDN1MOP3wpSVPDxIInUYqIYUqgS5JP%2Fh0lXT0kxfWFSkZ%2FZ7ZKKzKk4s65%2BQW9QVPCCEWM9wCo7kC%2FqvWXpHX1wLuMKT5388GOqUBfgaLSHXBSkJQKGzyfSiQzvTjdyFcMQaMxMG4bZV7gWTo1Ry1Rz07QKn5j%2BO4dNa2%2F7a92w6Jjsej1aYHGe5TUe5Do%2BGaVCG%2F2tgxtjRcvcWFW1nh0%2F%2FEEifT8bOXXG%2BvqwBNBM2ZkdVHiarsbb7b%2Fai2KAFeW6idKY8f6%2BWnBxj75jNhWtCC0Dh3uh3o9AfL8qDddy8kT8E%2B2U3dxNYHqJbbz9o8&X-Amz-Signature=bb8ccde4c7a4b228f235a2da015350e3dbf7b2e45e378fda39e8b503f05d4b3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LAQ56C7%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXC%2BpguA0sCZq5UtCjeVac3q6%2BIY8OB6lcruvnDIvcAwIgN0F3h%2B%2F8ZCEBo8jjRMa0wh4OCeq27EA1R12Fqyvebm0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNtWTBwaBn4%2Bq%2FgnESrcA3irA9vFmcIjkcG3SOl%2BG6888ORQccpoGIU2vkymuWfHaySccBbWIfz%2BQjp69jj8VdWJnA4AowUq%2F5J8k07ZNj6cmyrLgjh%2BUalsK3ETiT6uJ%2F3%2BsCfPYEHIvUY8vRGbup9arPLp1xhNU5EH5pw7kfB5jiYHiDqdlP4oxPqji1Ni74fohkDu%2FACrG1V5G8chReTnZTfGMwzY28a5yNRc7GEhTto44R0MXDJHx8m3TKXpcMx%2FPlA3P0gszIrZzoVMnFxIGrjAJyYPTnNmx1wgxDb40%2BTfMMVr0MiZm3Lg2Q9XvS%2B5h%2BCNAa4I7ti1EqiPgrQyrKc57lPUmoNZoqwYLO4rWJcqW41QoTFZN2A1pn02%2Fh2Jc%2Bgxq%2F5%2F7fZxrgKN8OWDzTm%2FbtKyGxbkJwR%2BqMZ%2FLVuz8U2Z%2Fchik9dNaf0btf%2FkDG44iU4Cn5z9qhSG4YAXOQiXbgoLv25HGGsqsn7tQU0ddJL5cUHSyzYWX9NqMCPFTimS3pqk2Ao4kQ4ckbxOFR3w8H0QGehzFA8CmjjJWJdpSVB2WYrKDN1MOP3wpSVPDxIInUYqIYUqgS5JP%2Fh0lXT0kxfWFSkZ%2FZ7ZKKzKk4s65%2BQW9QVPCCEWM9wCo7kC%2FqvWXpHX1wLuMKT5388GOqUBfgaLSHXBSkJQKGzyfSiQzvTjdyFcMQaMxMG4bZV7gWTo1Ry1Rz07QKn5j%2BO4dNa2%2F7a92w6Jjsej1aYHGe5TUe5Do%2BGaVCG%2F2tgxtjRcvcWFW1nh0%2F%2FEEifT8bOXXG%2BvqwBNBM2ZkdVHiarsbb7b%2Fai2KAFeW6idKY8f6%2BWnBxj75jNhWtCC0Dh3uh3o9AfL8qDddy8kT8E%2B2U3dxNYHqJbbz9o8&X-Amz-Signature=4d2d829579469d235def1d60c3dd92f8d01163bfb3a6701b9ed0eed5cc7eb68e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LAQ56C7%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXC%2BpguA0sCZq5UtCjeVac3q6%2BIY8OB6lcruvnDIvcAwIgN0F3h%2B%2F8ZCEBo8jjRMa0wh4OCeq27EA1R12Fqyvebm0q%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNtWTBwaBn4%2Bq%2FgnESrcA3irA9vFmcIjkcG3SOl%2BG6888ORQccpoGIU2vkymuWfHaySccBbWIfz%2BQjp69jj8VdWJnA4AowUq%2F5J8k07ZNj6cmyrLgjh%2BUalsK3ETiT6uJ%2F3%2BsCfPYEHIvUY8vRGbup9arPLp1xhNU5EH5pw7kfB5jiYHiDqdlP4oxPqji1Ni74fohkDu%2FACrG1V5G8chReTnZTfGMwzY28a5yNRc7GEhTto44R0MXDJHx8m3TKXpcMx%2FPlA3P0gszIrZzoVMnFxIGrjAJyYPTnNmx1wgxDb40%2BTfMMVr0MiZm3Lg2Q9XvS%2B5h%2BCNAa4I7ti1EqiPgrQyrKc57lPUmoNZoqwYLO4rWJcqW41QoTFZN2A1pn02%2Fh2Jc%2Bgxq%2F5%2F7fZxrgKN8OWDzTm%2FbtKyGxbkJwR%2BqMZ%2FLVuz8U2Z%2Fchik9dNaf0btf%2FkDG44iU4Cn5z9qhSG4YAXOQiXbgoLv25HGGsqsn7tQU0ddJL5cUHSyzYWX9NqMCPFTimS3pqk2Ao4kQ4ckbxOFR3w8H0QGehzFA8CmjjJWJdpSVB2WYrKDN1MOP3wpSVPDxIInUYqIYUqgS5JP%2Fh0lXT0kxfWFSkZ%2FZ7ZKKzKk4s65%2BQW9QVPCCEWM9wCo7kC%2FqvWXpHX1wLuMKT5388GOqUBfgaLSHXBSkJQKGzyfSiQzvTjdyFcMQaMxMG4bZV7gWTo1Ry1Rz07QKn5j%2BO4dNa2%2F7a92w6Jjsej1aYHGe5TUe5Do%2BGaVCG%2F2tgxtjRcvcWFW1nh0%2F%2FEEifT8bOXXG%2BvqwBNBM2ZkdVHiarsbb7b%2Fai2KAFeW6idKY8f6%2BWnBxj75jNhWtCC0Dh3uh3o9AfL8qDddy8kT8E%2B2U3dxNYHqJbbz9o8&X-Amz-Signature=6ace57ed06e550bb8eafbe367f3838fe61c732b7a7e1194fb5e74b7da8ac8f84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
