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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655V5JPAB%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIAPt%2FHYP2n2xlwZDpSFyvLle%2BcMmaC42ZuTj%2FoHIdvAsAiBOBMjleljcUbUw1cm7dsWeIYyF5QV2cQjv4eCD58HCJCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM0Dn7dbFLUP%2Fg1J1GKtwDPBoJPqy2JniBqEKreP7lxqRtm6mAMevwfiI9GSl%2BsSyGo87n%2BOJVzl%2FNY9WPLGneTLqrR%2FbfSsnZeM1Gm6scTGYczUXFC5Sb8yII7gxGBFo9%2BZAXAbCw5g8%2BhofZYSiQj96YrNpndptkq64GAowWwXKObaeYM2zXqBbDuzfHMNj8b1m83tb%2BoXrRugHu1pLsmmnNy8TeMI6wVORqZkT3LCM9ewYT9n35AE92ce9AQolq3jl%2FqoUdpa1JSuY4lv496%2BzVsy4wkNWIBWTmpW2soJK73LLwP%2Fcn%2FRQoruCEX44laSRHoH5k5J%2BuY7oBPbgBfmadgMyTBMUo6%2FgXph1BLWFdxEqD0otN8QQciV093Gz4Edv0i3LZNPSW0v5%2BqR3LfKvISgJNFjX%2F3crxUZ4iypXnSiXRwQYIXygooCAe84Vu76DxL%2BL4jRwTHCJWSyTIPdCt5NE74oVLPesv465ymGLuHNRe8xY%2BiLBvmYpde3QB%2BM7Don%2Ff2yho2ir6aucx8dN3qk%2BL33zmLPrDO4gqy86ovBL1Z1y3FojfM87s6Jd0OYM6i1FW1Ey1sp6xJ5BAt37NImwLvR%2FH2qrJl6RLSk%2Fy%2Fp7VAuaNvZ7jjY0k6Vh5XwhJF5aXtVkmEuIwjouAxQY6pgHw9XWtL7%2BVRCYxD6q072vDQ7a9g5AkHaxRBX0tmvQcJL5MMYZ%2Bj8mEz0kX7cnaY%2FH6CGcbiYVMpI7W%2Fc2O1YGPetTJS%2FNwjqyJVRSu3TlsxBCzBey8Of%2BvaMxYjZXTWYIlZGjhZmN5GA9LWJQPVCeTxM0CvWETq2ozvSpfynMQFnaUtmoJePH8ZXTa0eOje2yh86yHhHxXkTn56jpYvNURlh99chfB&X-Amz-Signature=f858c848fdae28bde2b008ade01cf89d3273e137c0202d53fed206b959444015&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655V5JPAB%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIAPt%2FHYP2n2xlwZDpSFyvLle%2BcMmaC42ZuTj%2FoHIdvAsAiBOBMjleljcUbUw1cm7dsWeIYyF5QV2cQjv4eCD58HCJCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM0Dn7dbFLUP%2Fg1J1GKtwDPBoJPqy2JniBqEKreP7lxqRtm6mAMevwfiI9GSl%2BsSyGo87n%2BOJVzl%2FNY9WPLGneTLqrR%2FbfSsnZeM1Gm6scTGYczUXFC5Sb8yII7gxGBFo9%2BZAXAbCw5g8%2BhofZYSiQj96YrNpndptkq64GAowWwXKObaeYM2zXqBbDuzfHMNj8b1m83tb%2BoXrRugHu1pLsmmnNy8TeMI6wVORqZkT3LCM9ewYT9n35AE92ce9AQolq3jl%2FqoUdpa1JSuY4lv496%2BzVsy4wkNWIBWTmpW2soJK73LLwP%2Fcn%2FRQoruCEX44laSRHoH5k5J%2BuY7oBPbgBfmadgMyTBMUo6%2FgXph1BLWFdxEqD0otN8QQciV093Gz4Edv0i3LZNPSW0v5%2BqR3LfKvISgJNFjX%2F3crxUZ4iypXnSiXRwQYIXygooCAe84Vu76DxL%2BL4jRwTHCJWSyTIPdCt5NE74oVLPesv465ymGLuHNRe8xY%2BiLBvmYpde3QB%2BM7Don%2Ff2yho2ir6aucx8dN3qk%2BL33zmLPrDO4gqy86ovBL1Z1y3FojfM87s6Jd0OYM6i1FW1Ey1sp6xJ5BAt37NImwLvR%2FH2qrJl6RLSk%2Fy%2Fp7VAuaNvZ7jjY0k6Vh5XwhJF5aXtVkmEuIwjouAxQY6pgHw9XWtL7%2BVRCYxD6q072vDQ7a9g5AkHaxRBX0tmvQcJL5MMYZ%2Bj8mEz0kX7cnaY%2FH6CGcbiYVMpI7W%2Fc2O1YGPetTJS%2FNwjqyJVRSu3TlsxBCzBey8Of%2BvaMxYjZXTWYIlZGjhZmN5GA9LWJQPVCeTxM0CvWETq2ozvSpfynMQFnaUtmoJePH8ZXTa0eOje2yh86yHhHxXkTn56jpYvNURlh99chfB&X-Amz-Signature=6c4a7defcf82ce9ce7a8f5a57a087761be240f0a8c3f7ee0457c13ff769bb738&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655V5JPAB%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIAPt%2FHYP2n2xlwZDpSFyvLle%2BcMmaC42ZuTj%2FoHIdvAsAiBOBMjleljcUbUw1cm7dsWeIYyF5QV2cQjv4eCD58HCJCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM0Dn7dbFLUP%2Fg1J1GKtwDPBoJPqy2JniBqEKreP7lxqRtm6mAMevwfiI9GSl%2BsSyGo87n%2BOJVzl%2FNY9WPLGneTLqrR%2FbfSsnZeM1Gm6scTGYczUXFC5Sb8yII7gxGBFo9%2BZAXAbCw5g8%2BhofZYSiQj96YrNpndptkq64GAowWwXKObaeYM2zXqBbDuzfHMNj8b1m83tb%2BoXrRugHu1pLsmmnNy8TeMI6wVORqZkT3LCM9ewYT9n35AE92ce9AQolq3jl%2FqoUdpa1JSuY4lv496%2BzVsy4wkNWIBWTmpW2soJK73LLwP%2Fcn%2FRQoruCEX44laSRHoH5k5J%2BuY7oBPbgBfmadgMyTBMUo6%2FgXph1BLWFdxEqD0otN8QQciV093Gz4Edv0i3LZNPSW0v5%2BqR3LfKvISgJNFjX%2F3crxUZ4iypXnSiXRwQYIXygooCAe84Vu76DxL%2BL4jRwTHCJWSyTIPdCt5NE74oVLPesv465ymGLuHNRe8xY%2BiLBvmYpde3QB%2BM7Don%2Ff2yho2ir6aucx8dN3qk%2BL33zmLPrDO4gqy86ovBL1Z1y3FojfM87s6Jd0OYM6i1FW1Ey1sp6xJ5BAt37NImwLvR%2FH2qrJl6RLSk%2Fy%2Fp7VAuaNvZ7jjY0k6Vh5XwhJF5aXtVkmEuIwjouAxQY6pgHw9XWtL7%2BVRCYxD6q072vDQ7a9g5AkHaxRBX0tmvQcJL5MMYZ%2Bj8mEz0kX7cnaY%2FH6CGcbiYVMpI7W%2Fc2O1YGPetTJS%2FNwjqyJVRSu3TlsxBCzBey8Of%2BvaMxYjZXTWYIlZGjhZmN5GA9LWJQPVCeTxM0CvWETq2ozvSpfynMQFnaUtmoJePH8ZXTa0eOje2yh86yHhHxXkTn56jpYvNURlh99chfB&X-Amz-Signature=90f4e78370cd8c084805b333e883c0e286885cee5dd569be1972bbcd57b6bcd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655V5JPAB%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIAPt%2FHYP2n2xlwZDpSFyvLle%2BcMmaC42ZuTj%2FoHIdvAsAiBOBMjleljcUbUw1cm7dsWeIYyF5QV2cQjv4eCD58HCJCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM0Dn7dbFLUP%2Fg1J1GKtwDPBoJPqy2JniBqEKreP7lxqRtm6mAMevwfiI9GSl%2BsSyGo87n%2BOJVzl%2FNY9WPLGneTLqrR%2FbfSsnZeM1Gm6scTGYczUXFC5Sb8yII7gxGBFo9%2BZAXAbCw5g8%2BhofZYSiQj96YrNpndptkq64GAowWwXKObaeYM2zXqBbDuzfHMNj8b1m83tb%2BoXrRugHu1pLsmmnNy8TeMI6wVORqZkT3LCM9ewYT9n35AE92ce9AQolq3jl%2FqoUdpa1JSuY4lv496%2BzVsy4wkNWIBWTmpW2soJK73LLwP%2Fcn%2FRQoruCEX44laSRHoH5k5J%2BuY7oBPbgBfmadgMyTBMUo6%2FgXph1BLWFdxEqD0otN8QQciV093Gz4Edv0i3LZNPSW0v5%2BqR3LfKvISgJNFjX%2F3crxUZ4iypXnSiXRwQYIXygooCAe84Vu76DxL%2BL4jRwTHCJWSyTIPdCt5NE74oVLPesv465ymGLuHNRe8xY%2BiLBvmYpde3QB%2BM7Don%2Ff2yho2ir6aucx8dN3qk%2BL33zmLPrDO4gqy86ovBL1Z1y3FojfM87s6Jd0OYM6i1FW1Ey1sp6xJ5BAt37NImwLvR%2FH2qrJl6RLSk%2Fy%2Fp7VAuaNvZ7jjY0k6Vh5XwhJF5aXtVkmEuIwjouAxQY6pgHw9XWtL7%2BVRCYxD6q072vDQ7a9g5AkHaxRBX0tmvQcJL5MMYZ%2Bj8mEz0kX7cnaY%2FH6CGcbiYVMpI7W%2Fc2O1YGPetTJS%2FNwjqyJVRSu3TlsxBCzBey8Of%2BvaMxYjZXTWYIlZGjhZmN5GA9LWJQPVCeTxM0CvWETq2ozvSpfynMQFnaUtmoJePH8ZXTa0eOje2yh86yHhHxXkTn56jpYvNURlh99chfB&X-Amz-Signature=ada9e54d8faaae7e045b7542e9714354b0b979dcae7b7f8ba991fee8f02e6ddd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655V5JPAB%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIAPt%2FHYP2n2xlwZDpSFyvLle%2BcMmaC42ZuTj%2FoHIdvAsAiBOBMjleljcUbUw1cm7dsWeIYyF5QV2cQjv4eCD58HCJCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM0Dn7dbFLUP%2Fg1J1GKtwDPBoJPqy2JniBqEKreP7lxqRtm6mAMevwfiI9GSl%2BsSyGo87n%2BOJVzl%2FNY9WPLGneTLqrR%2FbfSsnZeM1Gm6scTGYczUXFC5Sb8yII7gxGBFo9%2BZAXAbCw5g8%2BhofZYSiQj96YrNpndptkq64GAowWwXKObaeYM2zXqBbDuzfHMNj8b1m83tb%2BoXrRugHu1pLsmmnNy8TeMI6wVORqZkT3LCM9ewYT9n35AE92ce9AQolq3jl%2FqoUdpa1JSuY4lv496%2BzVsy4wkNWIBWTmpW2soJK73LLwP%2Fcn%2FRQoruCEX44laSRHoH5k5J%2BuY7oBPbgBfmadgMyTBMUo6%2FgXph1BLWFdxEqD0otN8QQciV093Gz4Edv0i3LZNPSW0v5%2BqR3LfKvISgJNFjX%2F3crxUZ4iypXnSiXRwQYIXygooCAe84Vu76DxL%2BL4jRwTHCJWSyTIPdCt5NE74oVLPesv465ymGLuHNRe8xY%2BiLBvmYpde3QB%2BM7Don%2Ff2yho2ir6aucx8dN3qk%2BL33zmLPrDO4gqy86ovBL1Z1y3FojfM87s6Jd0OYM6i1FW1Ey1sp6xJ5BAt37NImwLvR%2FH2qrJl6RLSk%2Fy%2Fp7VAuaNvZ7jjY0k6Vh5XwhJF5aXtVkmEuIwjouAxQY6pgHw9XWtL7%2BVRCYxD6q072vDQ7a9g5AkHaxRBX0tmvQcJL5MMYZ%2Bj8mEz0kX7cnaY%2FH6CGcbiYVMpI7W%2Fc2O1YGPetTJS%2FNwjqyJVRSu3TlsxBCzBey8Of%2BvaMxYjZXTWYIlZGjhZmN5GA9LWJQPVCeTxM0CvWETq2ozvSpfynMQFnaUtmoJePH8ZXTa0eOje2yh86yHhHxXkTn56jpYvNURlh99chfB&X-Amz-Signature=2e811bc3c7f699d6539eda4d2deae8156b698dd0e4c705e609b7068a8f506eb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655V5JPAB%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIAPt%2FHYP2n2xlwZDpSFyvLle%2BcMmaC42ZuTj%2FoHIdvAsAiBOBMjleljcUbUw1cm7dsWeIYyF5QV2cQjv4eCD58HCJCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM0Dn7dbFLUP%2Fg1J1GKtwDPBoJPqy2JniBqEKreP7lxqRtm6mAMevwfiI9GSl%2BsSyGo87n%2BOJVzl%2FNY9WPLGneTLqrR%2FbfSsnZeM1Gm6scTGYczUXFC5Sb8yII7gxGBFo9%2BZAXAbCw5g8%2BhofZYSiQj96YrNpndptkq64GAowWwXKObaeYM2zXqBbDuzfHMNj8b1m83tb%2BoXrRugHu1pLsmmnNy8TeMI6wVORqZkT3LCM9ewYT9n35AE92ce9AQolq3jl%2FqoUdpa1JSuY4lv496%2BzVsy4wkNWIBWTmpW2soJK73LLwP%2Fcn%2FRQoruCEX44laSRHoH5k5J%2BuY7oBPbgBfmadgMyTBMUo6%2FgXph1BLWFdxEqD0otN8QQciV093Gz4Edv0i3LZNPSW0v5%2BqR3LfKvISgJNFjX%2F3crxUZ4iypXnSiXRwQYIXygooCAe84Vu76DxL%2BL4jRwTHCJWSyTIPdCt5NE74oVLPesv465ymGLuHNRe8xY%2BiLBvmYpde3QB%2BM7Don%2Ff2yho2ir6aucx8dN3qk%2BL33zmLPrDO4gqy86ovBL1Z1y3FojfM87s6Jd0OYM6i1FW1Ey1sp6xJ5BAt37NImwLvR%2FH2qrJl6RLSk%2Fy%2Fp7VAuaNvZ7jjY0k6Vh5XwhJF5aXtVkmEuIwjouAxQY6pgHw9XWtL7%2BVRCYxD6q072vDQ7a9g5AkHaxRBX0tmvQcJL5MMYZ%2Bj8mEz0kX7cnaY%2FH6CGcbiYVMpI7W%2Fc2O1YGPetTJS%2FNwjqyJVRSu3TlsxBCzBey8Of%2BvaMxYjZXTWYIlZGjhZmN5GA9LWJQPVCeTxM0CvWETq2ozvSpfynMQFnaUtmoJePH8ZXTa0eOje2yh86yHhHxXkTn56jpYvNURlh99chfB&X-Amz-Signature=1ec3fad334933421948721fa360a6591c2d195b231f8cd425cfe52438047f28e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655V5JPAB%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIAPt%2FHYP2n2xlwZDpSFyvLle%2BcMmaC42ZuTj%2FoHIdvAsAiBOBMjleljcUbUw1cm7dsWeIYyF5QV2cQjv4eCD58HCJCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM0Dn7dbFLUP%2Fg1J1GKtwDPBoJPqy2JniBqEKreP7lxqRtm6mAMevwfiI9GSl%2BsSyGo87n%2BOJVzl%2FNY9WPLGneTLqrR%2FbfSsnZeM1Gm6scTGYczUXFC5Sb8yII7gxGBFo9%2BZAXAbCw5g8%2BhofZYSiQj96YrNpndptkq64GAowWwXKObaeYM2zXqBbDuzfHMNj8b1m83tb%2BoXrRugHu1pLsmmnNy8TeMI6wVORqZkT3LCM9ewYT9n35AE92ce9AQolq3jl%2FqoUdpa1JSuY4lv496%2BzVsy4wkNWIBWTmpW2soJK73LLwP%2Fcn%2FRQoruCEX44laSRHoH5k5J%2BuY7oBPbgBfmadgMyTBMUo6%2FgXph1BLWFdxEqD0otN8QQciV093Gz4Edv0i3LZNPSW0v5%2BqR3LfKvISgJNFjX%2F3crxUZ4iypXnSiXRwQYIXygooCAe84Vu76DxL%2BL4jRwTHCJWSyTIPdCt5NE74oVLPesv465ymGLuHNRe8xY%2BiLBvmYpde3QB%2BM7Don%2Ff2yho2ir6aucx8dN3qk%2BL33zmLPrDO4gqy86ovBL1Z1y3FojfM87s6Jd0OYM6i1FW1Ey1sp6xJ5BAt37NImwLvR%2FH2qrJl6RLSk%2Fy%2Fp7VAuaNvZ7jjY0k6Vh5XwhJF5aXtVkmEuIwjouAxQY6pgHw9XWtL7%2BVRCYxD6q072vDQ7a9g5AkHaxRBX0tmvQcJL5MMYZ%2Bj8mEz0kX7cnaY%2FH6CGcbiYVMpI7W%2Fc2O1YGPetTJS%2FNwjqyJVRSu3TlsxBCzBey8Of%2BvaMxYjZXTWYIlZGjhZmN5GA9LWJQPVCeTxM0CvWETq2ozvSpfynMQFnaUtmoJePH8ZXTa0eOje2yh86yHhHxXkTn56jpYvNURlh99chfB&X-Amz-Signature=b0f69950be5ac9ff9bfaf441e495ff2263eb626d8509888c56fbf7646448935e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655V5JPAB%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIAPt%2FHYP2n2xlwZDpSFyvLle%2BcMmaC42ZuTj%2FoHIdvAsAiBOBMjleljcUbUw1cm7dsWeIYyF5QV2cQjv4eCD58HCJCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM0Dn7dbFLUP%2Fg1J1GKtwDPBoJPqy2JniBqEKreP7lxqRtm6mAMevwfiI9GSl%2BsSyGo87n%2BOJVzl%2FNY9WPLGneTLqrR%2FbfSsnZeM1Gm6scTGYczUXFC5Sb8yII7gxGBFo9%2BZAXAbCw5g8%2BhofZYSiQj96YrNpndptkq64GAowWwXKObaeYM2zXqBbDuzfHMNj8b1m83tb%2BoXrRugHu1pLsmmnNy8TeMI6wVORqZkT3LCM9ewYT9n35AE92ce9AQolq3jl%2FqoUdpa1JSuY4lv496%2BzVsy4wkNWIBWTmpW2soJK73LLwP%2Fcn%2FRQoruCEX44laSRHoH5k5J%2BuY7oBPbgBfmadgMyTBMUo6%2FgXph1BLWFdxEqD0otN8QQciV093Gz4Edv0i3LZNPSW0v5%2BqR3LfKvISgJNFjX%2F3crxUZ4iypXnSiXRwQYIXygooCAe84Vu76DxL%2BL4jRwTHCJWSyTIPdCt5NE74oVLPesv465ymGLuHNRe8xY%2BiLBvmYpde3QB%2BM7Don%2Ff2yho2ir6aucx8dN3qk%2BL33zmLPrDO4gqy86ovBL1Z1y3FojfM87s6Jd0OYM6i1FW1Ey1sp6xJ5BAt37NImwLvR%2FH2qrJl6RLSk%2Fy%2Fp7VAuaNvZ7jjY0k6Vh5XwhJF5aXtVkmEuIwjouAxQY6pgHw9XWtL7%2BVRCYxD6q072vDQ7a9g5AkHaxRBX0tmvQcJL5MMYZ%2Bj8mEz0kX7cnaY%2FH6CGcbiYVMpI7W%2Fc2O1YGPetTJS%2FNwjqyJVRSu3TlsxBCzBey8Of%2BvaMxYjZXTWYIlZGjhZmN5GA9LWJQPVCeTxM0CvWETq2ozvSpfynMQFnaUtmoJePH8ZXTa0eOje2yh86yHhHxXkTn56jpYvNURlh99chfB&X-Amz-Signature=2d6aa86050cc53093299f59ec3d09f70ca178e519b63bd509f0472d69daf4c0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655V5JPAB%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIAPt%2FHYP2n2xlwZDpSFyvLle%2BcMmaC42ZuTj%2FoHIdvAsAiBOBMjleljcUbUw1cm7dsWeIYyF5QV2cQjv4eCD58HCJCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM0Dn7dbFLUP%2Fg1J1GKtwDPBoJPqy2JniBqEKreP7lxqRtm6mAMevwfiI9GSl%2BsSyGo87n%2BOJVzl%2FNY9WPLGneTLqrR%2FbfSsnZeM1Gm6scTGYczUXFC5Sb8yII7gxGBFo9%2BZAXAbCw5g8%2BhofZYSiQj96YrNpndptkq64GAowWwXKObaeYM2zXqBbDuzfHMNj8b1m83tb%2BoXrRugHu1pLsmmnNy8TeMI6wVORqZkT3LCM9ewYT9n35AE92ce9AQolq3jl%2FqoUdpa1JSuY4lv496%2BzVsy4wkNWIBWTmpW2soJK73LLwP%2Fcn%2FRQoruCEX44laSRHoH5k5J%2BuY7oBPbgBfmadgMyTBMUo6%2FgXph1BLWFdxEqD0otN8QQciV093Gz4Edv0i3LZNPSW0v5%2BqR3LfKvISgJNFjX%2F3crxUZ4iypXnSiXRwQYIXygooCAe84Vu76DxL%2BL4jRwTHCJWSyTIPdCt5NE74oVLPesv465ymGLuHNRe8xY%2BiLBvmYpde3QB%2BM7Don%2Ff2yho2ir6aucx8dN3qk%2BL33zmLPrDO4gqy86ovBL1Z1y3FojfM87s6Jd0OYM6i1FW1Ey1sp6xJ5BAt37NImwLvR%2FH2qrJl6RLSk%2Fy%2Fp7VAuaNvZ7jjY0k6Vh5XwhJF5aXtVkmEuIwjouAxQY6pgHw9XWtL7%2BVRCYxD6q072vDQ7a9g5AkHaxRBX0tmvQcJL5MMYZ%2Bj8mEz0kX7cnaY%2FH6CGcbiYVMpI7W%2Fc2O1YGPetTJS%2FNwjqyJVRSu3TlsxBCzBey8Of%2BvaMxYjZXTWYIlZGjhZmN5GA9LWJQPVCeTxM0CvWETq2ozvSpfynMQFnaUtmoJePH8ZXTa0eOje2yh86yHhHxXkTn56jpYvNURlh99chfB&X-Amz-Signature=6a5e10f89dde9412522263a437852c445a16a443c3f79ae1dd082eea662172cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655V5JPAB%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIAPt%2FHYP2n2xlwZDpSFyvLle%2BcMmaC42ZuTj%2FoHIdvAsAiBOBMjleljcUbUw1cm7dsWeIYyF5QV2cQjv4eCD58HCJCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM0Dn7dbFLUP%2Fg1J1GKtwDPBoJPqy2JniBqEKreP7lxqRtm6mAMevwfiI9GSl%2BsSyGo87n%2BOJVzl%2FNY9WPLGneTLqrR%2FbfSsnZeM1Gm6scTGYczUXFC5Sb8yII7gxGBFo9%2BZAXAbCw5g8%2BhofZYSiQj96YrNpndptkq64GAowWwXKObaeYM2zXqBbDuzfHMNj8b1m83tb%2BoXrRugHu1pLsmmnNy8TeMI6wVORqZkT3LCM9ewYT9n35AE92ce9AQolq3jl%2FqoUdpa1JSuY4lv496%2BzVsy4wkNWIBWTmpW2soJK73LLwP%2Fcn%2FRQoruCEX44laSRHoH5k5J%2BuY7oBPbgBfmadgMyTBMUo6%2FgXph1BLWFdxEqD0otN8QQciV093Gz4Edv0i3LZNPSW0v5%2BqR3LfKvISgJNFjX%2F3crxUZ4iypXnSiXRwQYIXygooCAe84Vu76DxL%2BL4jRwTHCJWSyTIPdCt5NE74oVLPesv465ymGLuHNRe8xY%2BiLBvmYpde3QB%2BM7Don%2Ff2yho2ir6aucx8dN3qk%2BL33zmLPrDO4gqy86ovBL1Z1y3FojfM87s6Jd0OYM6i1FW1Ey1sp6xJ5BAt37NImwLvR%2FH2qrJl6RLSk%2Fy%2Fp7VAuaNvZ7jjY0k6Vh5XwhJF5aXtVkmEuIwjouAxQY6pgHw9XWtL7%2BVRCYxD6q072vDQ7a9g5AkHaxRBX0tmvQcJL5MMYZ%2Bj8mEz0kX7cnaY%2FH6CGcbiYVMpI7W%2Fc2O1YGPetTJS%2FNwjqyJVRSu3TlsxBCzBey8Of%2BvaMxYjZXTWYIlZGjhZmN5GA9LWJQPVCeTxM0CvWETq2ozvSpfynMQFnaUtmoJePH8ZXTa0eOje2yh86yHhHxXkTn56jpYvNURlh99chfB&X-Amz-Signature=d521733715bcb3ba791b143bf6997a3e7828441d2e7c750706d8f08899560482&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655V5JPAB%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIAPt%2FHYP2n2xlwZDpSFyvLle%2BcMmaC42ZuTj%2FoHIdvAsAiBOBMjleljcUbUw1cm7dsWeIYyF5QV2cQjv4eCD58HCJCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM0Dn7dbFLUP%2Fg1J1GKtwDPBoJPqy2JniBqEKreP7lxqRtm6mAMevwfiI9GSl%2BsSyGo87n%2BOJVzl%2FNY9WPLGneTLqrR%2FbfSsnZeM1Gm6scTGYczUXFC5Sb8yII7gxGBFo9%2BZAXAbCw5g8%2BhofZYSiQj96YrNpndptkq64GAowWwXKObaeYM2zXqBbDuzfHMNj8b1m83tb%2BoXrRugHu1pLsmmnNy8TeMI6wVORqZkT3LCM9ewYT9n35AE92ce9AQolq3jl%2FqoUdpa1JSuY4lv496%2BzVsy4wkNWIBWTmpW2soJK73LLwP%2Fcn%2FRQoruCEX44laSRHoH5k5J%2BuY7oBPbgBfmadgMyTBMUo6%2FgXph1BLWFdxEqD0otN8QQciV093Gz4Edv0i3LZNPSW0v5%2BqR3LfKvISgJNFjX%2F3crxUZ4iypXnSiXRwQYIXygooCAe84Vu76DxL%2BL4jRwTHCJWSyTIPdCt5NE74oVLPesv465ymGLuHNRe8xY%2BiLBvmYpde3QB%2BM7Don%2Ff2yho2ir6aucx8dN3qk%2BL33zmLPrDO4gqy86ovBL1Z1y3FojfM87s6Jd0OYM6i1FW1Ey1sp6xJ5BAt37NImwLvR%2FH2qrJl6RLSk%2Fy%2Fp7VAuaNvZ7jjY0k6Vh5XwhJF5aXtVkmEuIwjouAxQY6pgHw9XWtL7%2BVRCYxD6q072vDQ7a9g5AkHaxRBX0tmvQcJL5MMYZ%2Bj8mEz0kX7cnaY%2FH6CGcbiYVMpI7W%2Fc2O1YGPetTJS%2FNwjqyJVRSu3TlsxBCzBey8Of%2BvaMxYjZXTWYIlZGjhZmN5GA9LWJQPVCeTxM0CvWETq2ozvSpfynMQFnaUtmoJePH8ZXTa0eOje2yh86yHhHxXkTn56jpYvNURlh99chfB&X-Amz-Signature=fd6644a839fab749bd676c5d9fa4e7c46d7fb9f7cf26305a7ffea3cf5997afc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655V5JPAB%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIAPt%2FHYP2n2xlwZDpSFyvLle%2BcMmaC42ZuTj%2FoHIdvAsAiBOBMjleljcUbUw1cm7dsWeIYyF5QV2cQjv4eCD58HCJCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM0Dn7dbFLUP%2Fg1J1GKtwDPBoJPqy2JniBqEKreP7lxqRtm6mAMevwfiI9GSl%2BsSyGo87n%2BOJVzl%2FNY9WPLGneTLqrR%2FbfSsnZeM1Gm6scTGYczUXFC5Sb8yII7gxGBFo9%2BZAXAbCw5g8%2BhofZYSiQj96YrNpndptkq64GAowWwXKObaeYM2zXqBbDuzfHMNj8b1m83tb%2BoXrRugHu1pLsmmnNy8TeMI6wVORqZkT3LCM9ewYT9n35AE92ce9AQolq3jl%2FqoUdpa1JSuY4lv496%2BzVsy4wkNWIBWTmpW2soJK73LLwP%2Fcn%2FRQoruCEX44laSRHoH5k5J%2BuY7oBPbgBfmadgMyTBMUo6%2FgXph1BLWFdxEqD0otN8QQciV093Gz4Edv0i3LZNPSW0v5%2BqR3LfKvISgJNFjX%2F3crxUZ4iypXnSiXRwQYIXygooCAe84Vu76DxL%2BL4jRwTHCJWSyTIPdCt5NE74oVLPesv465ymGLuHNRe8xY%2BiLBvmYpde3QB%2BM7Don%2Ff2yho2ir6aucx8dN3qk%2BL33zmLPrDO4gqy86ovBL1Z1y3FojfM87s6Jd0OYM6i1FW1Ey1sp6xJ5BAt37NImwLvR%2FH2qrJl6RLSk%2Fy%2Fp7VAuaNvZ7jjY0k6Vh5XwhJF5aXtVkmEuIwjouAxQY6pgHw9XWtL7%2BVRCYxD6q072vDQ7a9g5AkHaxRBX0tmvQcJL5MMYZ%2Bj8mEz0kX7cnaY%2FH6CGcbiYVMpI7W%2Fc2O1YGPetTJS%2FNwjqyJVRSu3TlsxBCzBey8Of%2BvaMxYjZXTWYIlZGjhZmN5GA9LWJQPVCeTxM0CvWETq2ozvSpfynMQFnaUtmoJePH8ZXTa0eOje2yh86yHhHxXkTn56jpYvNURlh99chfB&X-Amz-Signature=1adcd9b5e547a408077967e512784ffad393d56b76b52605d14746b53c2578aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655V5JPAB%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIAPt%2FHYP2n2xlwZDpSFyvLle%2BcMmaC42ZuTj%2FoHIdvAsAiBOBMjleljcUbUw1cm7dsWeIYyF5QV2cQjv4eCD58HCJCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM0Dn7dbFLUP%2Fg1J1GKtwDPBoJPqy2JniBqEKreP7lxqRtm6mAMevwfiI9GSl%2BsSyGo87n%2BOJVzl%2FNY9WPLGneTLqrR%2FbfSsnZeM1Gm6scTGYczUXFC5Sb8yII7gxGBFo9%2BZAXAbCw5g8%2BhofZYSiQj96YrNpndptkq64GAowWwXKObaeYM2zXqBbDuzfHMNj8b1m83tb%2BoXrRugHu1pLsmmnNy8TeMI6wVORqZkT3LCM9ewYT9n35AE92ce9AQolq3jl%2FqoUdpa1JSuY4lv496%2BzVsy4wkNWIBWTmpW2soJK73LLwP%2Fcn%2FRQoruCEX44laSRHoH5k5J%2BuY7oBPbgBfmadgMyTBMUo6%2FgXph1BLWFdxEqD0otN8QQciV093Gz4Edv0i3LZNPSW0v5%2BqR3LfKvISgJNFjX%2F3crxUZ4iypXnSiXRwQYIXygooCAe84Vu76DxL%2BL4jRwTHCJWSyTIPdCt5NE74oVLPesv465ymGLuHNRe8xY%2BiLBvmYpde3QB%2BM7Don%2Ff2yho2ir6aucx8dN3qk%2BL33zmLPrDO4gqy86ovBL1Z1y3FojfM87s6Jd0OYM6i1FW1Ey1sp6xJ5BAt37NImwLvR%2FH2qrJl6RLSk%2Fy%2Fp7VAuaNvZ7jjY0k6Vh5XwhJF5aXtVkmEuIwjouAxQY6pgHw9XWtL7%2BVRCYxD6q072vDQ7a9g5AkHaxRBX0tmvQcJL5MMYZ%2Bj8mEz0kX7cnaY%2FH6CGcbiYVMpI7W%2Fc2O1YGPetTJS%2FNwjqyJVRSu3TlsxBCzBey8Of%2BvaMxYjZXTWYIlZGjhZmN5GA9LWJQPVCeTxM0CvWETq2ozvSpfynMQFnaUtmoJePH8ZXTa0eOje2yh86yHhHxXkTn56jpYvNURlh99chfB&X-Amz-Signature=0fe036ab0d878e50757a2aa8b02ae04a300495ed31288ed518a98a7a10e14fb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655V5JPAB%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIAPt%2FHYP2n2xlwZDpSFyvLle%2BcMmaC42ZuTj%2FoHIdvAsAiBOBMjleljcUbUw1cm7dsWeIYyF5QV2cQjv4eCD58HCJCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM0Dn7dbFLUP%2Fg1J1GKtwDPBoJPqy2JniBqEKreP7lxqRtm6mAMevwfiI9GSl%2BsSyGo87n%2BOJVzl%2FNY9WPLGneTLqrR%2FbfSsnZeM1Gm6scTGYczUXFC5Sb8yII7gxGBFo9%2BZAXAbCw5g8%2BhofZYSiQj96YrNpndptkq64GAowWwXKObaeYM2zXqBbDuzfHMNj8b1m83tb%2BoXrRugHu1pLsmmnNy8TeMI6wVORqZkT3LCM9ewYT9n35AE92ce9AQolq3jl%2FqoUdpa1JSuY4lv496%2BzVsy4wkNWIBWTmpW2soJK73LLwP%2Fcn%2FRQoruCEX44laSRHoH5k5J%2BuY7oBPbgBfmadgMyTBMUo6%2FgXph1BLWFdxEqD0otN8QQciV093Gz4Edv0i3LZNPSW0v5%2BqR3LfKvISgJNFjX%2F3crxUZ4iypXnSiXRwQYIXygooCAe84Vu76DxL%2BL4jRwTHCJWSyTIPdCt5NE74oVLPesv465ymGLuHNRe8xY%2BiLBvmYpde3QB%2BM7Don%2Ff2yho2ir6aucx8dN3qk%2BL33zmLPrDO4gqy86ovBL1Z1y3FojfM87s6Jd0OYM6i1FW1Ey1sp6xJ5BAt37NImwLvR%2FH2qrJl6RLSk%2Fy%2Fp7VAuaNvZ7jjY0k6Vh5XwhJF5aXtVkmEuIwjouAxQY6pgHw9XWtL7%2BVRCYxD6q072vDQ7a9g5AkHaxRBX0tmvQcJL5MMYZ%2Bj8mEz0kX7cnaY%2FH6CGcbiYVMpI7W%2Fc2O1YGPetTJS%2FNwjqyJVRSu3TlsxBCzBey8Of%2BvaMxYjZXTWYIlZGjhZmN5GA9LWJQPVCeTxM0CvWETq2ozvSpfynMQFnaUtmoJePH8ZXTa0eOje2yh86yHhHxXkTn56jpYvNURlh99chfB&X-Amz-Signature=b7735e238bbf279a7dd571e46ce23e02f21b16bfd52f485c69c29f7c7b862895&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
