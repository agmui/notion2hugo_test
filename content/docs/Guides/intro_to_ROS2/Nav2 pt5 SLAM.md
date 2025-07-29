---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-29T01:30:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-29T01:30:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 155
toc: false
icon: ""
---

[Good video explaining slam](https://www.youtube.com/watch?v=ZaiA3hWaRzE&t=979s)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVIIODRK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCfPWryUkWRRkFOad8anKidNv8B%2BcA2tBBGDu9mwRT7kwIgDykcr3FxvKNg0QhxCrNgxYyeNBCdBTva%2ByQKH%2BZSzbkqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFAGq4jaHPaIVuZfVSrcAweVaC7HVySC7Cip7%2BklKJDKykufe1neq9AYgEZfJ%2FxF1tTQthcmWQD1OKaLgpsTs0%2F1invoG%2FKi7sIcQ8qJQtpQzS5rcDyqzyL%2Fs%2Ftyfxwr5PyT4lMrQi%2BdCdBvB6UmbveqEq%2B2z3cbkXRb3pd7fNbrhVFFSHStt%2Br3hOas2sxVh4Df4X2%2F3LRn%2Bn3PkIFWN8LVK8ZQISIzK61Vl77qqj8FIwSywpZzn%2F60Q1KHaBN4IFf1D02%2FNI1NEg5D4J7u4YeGDbLN7%2BpWCWTUjSJwt622mlocMBLm%2BTybnWqxCPDZJgaYs7CFL83RSVnMet99X5j%2BJ1kujj6VHyW0md3176FSe8jqOnvszotQGm%2F5fRPgJSvRQCrYM7auCQnH6odMD96F%2BJHwx%2BlpVmygGtvWZzzjZkbQylnDDp9fRPC7z8BynRt77bSaz7wjUpdrlNJmgCW2dyZ1czPGKEcGVLdmit0mKkvJCDU41ZxpmhLiF0Gapft9Jlnn%2BtGzrsBzBXM9H83W5xOn9HzRvGuMpStVcrLgkRdrMtsFBsKy8lvLQs524eW9MqhY3JfE%2FtC%2FzlIVcLDHII8eSwmb5pjXbYZqk8M3%2BCAzp3soH5Wrehv4DdSg6q7BtxjuAMmuS5cHMKnnosQGOqUBq8zKjiRhjtrqqewAodVJ67TPCePKpKFpq6leRbl8Rv%2F9Mqns3fdW8DFKn7udHPWZ2oOXLIDH2g0ESsu8ll2RomS9m6go2YdxyNfZRmbpCARWF2UEowgUjpHx2DAOfPOT4dh%2BE3YMFzijO9CgdRDQP1AE3TRT5wGjnYEoVxi8oeSltfW6sG1%2BphJ2ZcIA2Tmps0fsCdRFRHJW%2BBYsI4TrszmxliM6&X-Amz-Signature=8eb5df5b2bd8a4d1e9847e39ae382ef1d0210f9777bf99a6fc321807172d7e72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: add rviz guide of viewing scanned map

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVIIODRK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCfPWryUkWRRkFOad8anKidNv8B%2BcA2tBBGDu9mwRT7kwIgDykcr3FxvKNg0QhxCrNgxYyeNBCdBTva%2ByQKH%2BZSzbkqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFAGq4jaHPaIVuZfVSrcAweVaC7HVySC7Cip7%2BklKJDKykufe1neq9AYgEZfJ%2FxF1tTQthcmWQD1OKaLgpsTs0%2F1invoG%2FKi7sIcQ8qJQtpQzS5rcDyqzyL%2Fs%2Ftyfxwr5PyT4lMrQi%2BdCdBvB6UmbveqEq%2B2z3cbkXRb3pd7fNbrhVFFSHStt%2Br3hOas2sxVh4Df4X2%2F3LRn%2Bn3PkIFWN8LVK8ZQISIzK61Vl77qqj8FIwSywpZzn%2F60Q1KHaBN4IFf1D02%2FNI1NEg5D4J7u4YeGDbLN7%2BpWCWTUjSJwt622mlocMBLm%2BTybnWqxCPDZJgaYs7CFL83RSVnMet99X5j%2BJ1kujj6VHyW0md3176FSe8jqOnvszotQGm%2F5fRPgJSvRQCrYM7auCQnH6odMD96F%2BJHwx%2BlpVmygGtvWZzzjZkbQylnDDp9fRPC7z8BynRt77bSaz7wjUpdrlNJmgCW2dyZ1czPGKEcGVLdmit0mKkvJCDU41ZxpmhLiF0Gapft9Jlnn%2BtGzrsBzBXM9H83W5xOn9HzRvGuMpStVcrLgkRdrMtsFBsKy8lvLQs524eW9MqhY3JfE%2FtC%2FzlIVcLDHII8eSwmb5pjXbYZqk8M3%2BCAzp3soH5Wrehv4DdSg6q7BtxjuAMmuS5cHMKnnosQGOqUBq8zKjiRhjtrqqewAodVJ67TPCePKpKFpq6leRbl8Rv%2F9Mqns3fdW8DFKn7udHPWZ2oOXLIDH2g0ESsu8ll2RomS9m6go2YdxyNfZRmbpCARWF2UEowgUjpHx2DAOfPOT4dh%2BE3YMFzijO9CgdRDQP1AE3TRT5wGjnYEoVxi8oeSltfW6sG1%2BphJ2ZcIA2Tmps0fsCdRFRHJW%2BBYsI4TrszmxliM6&X-Amz-Signature=c2978457f6e86f3f124c28d7fdf2b3890f26d7fa8311491d26b2a4e685f60fd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVIIODRK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCfPWryUkWRRkFOad8anKidNv8B%2BcA2tBBGDu9mwRT7kwIgDykcr3FxvKNg0QhxCrNgxYyeNBCdBTva%2ByQKH%2BZSzbkqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFAGq4jaHPaIVuZfVSrcAweVaC7HVySC7Cip7%2BklKJDKykufe1neq9AYgEZfJ%2FxF1tTQthcmWQD1OKaLgpsTs0%2F1invoG%2FKi7sIcQ8qJQtpQzS5rcDyqzyL%2Fs%2Ftyfxwr5PyT4lMrQi%2BdCdBvB6UmbveqEq%2B2z3cbkXRb3pd7fNbrhVFFSHStt%2Br3hOas2sxVh4Df4X2%2F3LRn%2Bn3PkIFWN8LVK8ZQISIzK61Vl77qqj8FIwSywpZzn%2F60Q1KHaBN4IFf1D02%2FNI1NEg5D4J7u4YeGDbLN7%2BpWCWTUjSJwt622mlocMBLm%2BTybnWqxCPDZJgaYs7CFL83RSVnMet99X5j%2BJ1kujj6VHyW0md3176FSe8jqOnvszotQGm%2F5fRPgJSvRQCrYM7auCQnH6odMD96F%2BJHwx%2BlpVmygGtvWZzzjZkbQylnDDp9fRPC7z8BynRt77bSaz7wjUpdrlNJmgCW2dyZ1czPGKEcGVLdmit0mKkvJCDU41ZxpmhLiF0Gapft9Jlnn%2BtGzrsBzBXM9H83W5xOn9HzRvGuMpStVcrLgkRdrMtsFBsKy8lvLQs524eW9MqhY3JfE%2FtC%2FzlIVcLDHII8eSwmb5pjXbYZqk8M3%2BCAzp3soH5Wrehv4DdSg6q7BtxjuAMmuS5cHMKnnosQGOqUBq8zKjiRhjtrqqewAodVJ67TPCePKpKFpq6leRbl8Rv%2F9Mqns3fdW8DFKn7udHPWZ2oOXLIDH2g0ESsu8ll2RomS9m6go2YdxyNfZRmbpCARWF2UEowgUjpHx2DAOfPOT4dh%2BE3YMFzijO9CgdRDQP1AE3TRT5wGjnYEoVxi8oeSltfW6sG1%2BphJ2ZcIA2Tmps0fsCdRFRHJW%2BBYsI4TrszmxliM6&X-Amz-Signature=e687d6ed4680e96c675ee790a7cd5d360666178ebc8339f972a3f836f7ee5cf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

### SLAM Rviz display

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVIIODRK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCfPWryUkWRRkFOad8anKidNv8B%2BcA2tBBGDu9mwRT7kwIgDykcr3FxvKNg0QhxCrNgxYyeNBCdBTva%2ByQKH%2BZSzbkqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFAGq4jaHPaIVuZfVSrcAweVaC7HVySC7Cip7%2BklKJDKykufe1neq9AYgEZfJ%2FxF1tTQthcmWQD1OKaLgpsTs0%2F1invoG%2FKi7sIcQ8qJQtpQzS5rcDyqzyL%2Fs%2Ftyfxwr5PyT4lMrQi%2BdCdBvB6UmbveqEq%2B2z3cbkXRb3pd7fNbrhVFFSHStt%2Br3hOas2sxVh4Df4X2%2F3LRn%2Bn3PkIFWN8LVK8ZQISIzK61Vl77qqj8FIwSywpZzn%2F60Q1KHaBN4IFf1D02%2FNI1NEg5D4J7u4YeGDbLN7%2BpWCWTUjSJwt622mlocMBLm%2BTybnWqxCPDZJgaYs7CFL83RSVnMet99X5j%2BJ1kujj6VHyW0md3176FSe8jqOnvszotQGm%2F5fRPgJSvRQCrYM7auCQnH6odMD96F%2BJHwx%2BlpVmygGtvWZzzjZkbQylnDDp9fRPC7z8BynRt77bSaz7wjUpdrlNJmgCW2dyZ1czPGKEcGVLdmit0mKkvJCDU41ZxpmhLiF0Gapft9Jlnn%2BtGzrsBzBXM9H83W5xOn9HzRvGuMpStVcrLgkRdrMtsFBsKy8lvLQs524eW9MqhY3JfE%2FtC%2FzlIVcLDHII8eSwmb5pjXbYZqk8M3%2BCAzp3soH5Wrehv4DdSg6q7BtxjuAMmuS5cHMKnnosQGOqUBq8zKjiRhjtrqqewAodVJ67TPCePKpKFpq6leRbl8Rv%2F9Mqns3fdW8DFKn7udHPWZ2oOXLIDH2g0ESsu8ll2RomS9m6go2YdxyNfZRmbpCARWF2UEowgUjpHx2DAOfPOT4dh%2BE3YMFzijO9CgdRDQP1AE3TRT5wGjnYEoVxi8oeSltfW6sG1%2BphJ2ZcIA2Tmps0fsCdRFRHJW%2BBYsI4TrszmxliM6&X-Amz-Signature=246ba26b25d5987b572e9edfa24d7c091b2a3792053d3ae45c9d2ea4bfe4ca98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVIIODRK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCfPWryUkWRRkFOad8anKidNv8B%2BcA2tBBGDu9mwRT7kwIgDykcr3FxvKNg0QhxCrNgxYyeNBCdBTva%2ByQKH%2BZSzbkqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFAGq4jaHPaIVuZfVSrcAweVaC7HVySC7Cip7%2BklKJDKykufe1neq9AYgEZfJ%2FxF1tTQthcmWQD1OKaLgpsTs0%2F1invoG%2FKi7sIcQ8qJQtpQzS5rcDyqzyL%2Fs%2Ftyfxwr5PyT4lMrQi%2BdCdBvB6UmbveqEq%2B2z3cbkXRb3pd7fNbrhVFFSHStt%2Br3hOas2sxVh4Df4X2%2F3LRn%2Bn3PkIFWN8LVK8ZQISIzK61Vl77qqj8FIwSywpZzn%2F60Q1KHaBN4IFf1D02%2FNI1NEg5D4J7u4YeGDbLN7%2BpWCWTUjSJwt622mlocMBLm%2BTybnWqxCPDZJgaYs7CFL83RSVnMet99X5j%2BJ1kujj6VHyW0md3176FSe8jqOnvszotQGm%2F5fRPgJSvRQCrYM7auCQnH6odMD96F%2BJHwx%2BlpVmygGtvWZzzjZkbQylnDDp9fRPC7z8BynRt77bSaz7wjUpdrlNJmgCW2dyZ1czPGKEcGVLdmit0mKkvJCDU41ZxpmhLiF0Gapft9Jlnn%2BtGzrsBzBXM9H83W5xOn9HzRvGuMpStVcrLgkRdrMtsFBsKy8lvLQs524eW9MqhY3JfE%2FtC%2FzlIVcLDHII8eSwmb5pjXbYZqk8M3%2BCAzp3soH5Wrehv4DdSg6q7BtxjuAMmuS5cHMKnnosQGOqUBq8zKjiRhjtrqqewAodVJ67TPCePKpKFpq6leRbl8Rv%2F9Mqns3fdW8DFKn7udHPWZ2oOXLIDH2g0ESsu8ll2RomS9m6go2YdxyNfZRmbpCARWF2UEowgUjpHx2DAOfPOT4dh%2BE3YMFzijO9CgdRDQP1AE3TRT5wGjnYEoVxi8oeSltfW6sG1%2BphJ2ZcIA2Tmps0fsCdRFRHJW%2BBYsI4TrszmxliM6&X-Amz-Signature=969c777c4fc2c97033f5f2b6ad7a25a8f15e3e04c4b97f78c243cc502a8251ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVIIODRK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCfPWryUkWRRkFOad8anKidNv8B%2BcA2tBBGDu9mwRT7kwIgDykcr3FxvKNg0QhxCrNgxYyeNBCdBTva%2ByQKH%2BZSzbkqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFAGq4jaHPaIVuZfVSrcAweVaC7HVySC7Cip7%2BklKJDKykufe1neq9AYgEZfJ%2FxF1tTQthcmWQD1OKaLgpsTs0%2F1invoG%2FKi7sIcQ8qJQtpQzS5rcDyqzyL%2Fs%2Ftyfxwr5PyT4lMrQi%2BdCdBvB6UmbveqEq%2B2z3cbkXRb3pd7fNbrhVFFSHStt%2Br3hOas2sxVh4Df4X2%2F3LRn%2Bn3PkIFWN8LVK8ZQISIzK61Vl77qqj8FIwSywpZzn%2F60Q1KHaBN4IFf1D02%2FNI1NEg5D4J7u4YeGDbLN7%2BpWCWTUjSJwt622mlocMBLm%2BTybnWqxCPDZJgaYs7CFL83RSVnMet99X5j%2BJ1kujj6VHyW0md3176FSe8jqOnvszotQGm%2F5fRPgJSvRQCrYM7auCQnH6odMD96F%2BJHwx%2BlpVmygGtvWZzzjZkbQylnDDp9fRPC7z8BynRt77bSaz7wjUpdrlNJmgCW2dyZ1czPGKEcGVLdmit0mKkvJCDU41ZxpmhLiF0Gapft9Jlnn%2BtGzrsBzBXM9H83W5xOn9HzRvGuMpStVcrLgkRdrMtsFBsKy8lvLQs524eW9MqhY3JfE%2FtC%2FzlIVcLDHII8eSwmb5pjXbYZqk8M3%2BCAzp3soH5Wrehv4DdSg6q7BtxjuAMmuS5cHMKnnosQGOqUBq8zKjiRhjtrqqewAodVJ67TPCePKpKFpq6leRbl8Rv%2F9Mqns3fdW8DFKn7udHPWZ2oOXLIDH2g0ESsu8ll2RomS9m6go2YdxyNfZRmbpCARWF2UEowgUjpHx2DAOfPOT4dh%2BE3YMFzijO9CgdRDQP1AE3TRT5wGjnYEoVxi8oeSltfW6sG1%2BphJ2ZcIA2Tmps0fsCdRFRHJW%2BBYsI4TrszmxliM6&X-Amz-Signature=4769bf9fc958a3874ea3aa8797045f39ebe630b08ccf71d7b0e98b0866c93226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVIIODRK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCfPWryUkWRRkFOad8anKidNv8B%2BcA2tBBGDu9mwRT7kwIgDykcr3FxvKNg0QhxCrNgxYyeNBCdBTva%2ByQKH%2BZSzbkqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFAGq4jaHPaIVuZfVSrcAweVaC7HVySC7Cip7%2BklKJDKykufe1neq9AYgEZfJ%2FxF1tTQthcmWQD1OKaLgpsTs0%2F1invoG%2FKi7sIcQ8qJQtpQzS5rcDyqzyL%2Fs%2Ftyfxwr5PyT4lMrQi%2BdCdBvB6UmbveqEq%2B2z3cbkXRb3pd7fNbrhVFFSHStt%2Br3hOas2sxVh4Df4X2%2F3LRn%2Bn3PkIFWN8LVK8ZQISIzK61Vl77qqj8FIwSywpZzn%2F60Q1KHaBN4IFf1D02%2FNI1NEg5D4J7u4YeGDbLN7%2BpWCWTUjSJwt622mlocMBLm%2BTybnWqxCPDZJgaYs7CFL83RSVnMet99X5j%2BJ1kujj6VHyW0md3176FSe8jqOnvszotQGm%2F5fRPgJSvRQCrYM7auCQnH6odMD96F%2BJHwx%2BlpVmygGtvWZzzjZkbQylnDDp9fRPC7z8BynRt77bSaz7wjUpdrlNJmgCW2dyZ1czPGKEcGVLdmit0mKkvJCDU41ZxpmhLiF0Gapft9Jlnn%2BtGzrsBzBXM9H83W5xOn9HzRvGuMpStVcrLgkRdrMtsFBsKy8lvLQs524eW9MqhY3JfE%2FtC%2FzlIVcLDHII8eSwmb5pjXbYZqk8M3%2BCAzp3soH5Wrehv4DdSg6q7BtxjuAMmuS5cHMKnnosQGOqUBq8zKjiRhjtrqqewAodVJ67TPCePKpKFpq6leRbl8Rv%2F9Mqns3fdW8DFKn7udHPWZ2oOXLIDH2g0ESsu8ll2RomS9m6go2YdxyNfZRmbpCARWF2UEowgUjpHx2DAOfPOT4dh%2BE3YMFzijO9CgdRDQP1AE3TRT5wGjnYEoVxi8oeSltfW6sG1%2BphJ2ZcIA2Tmps0fsCdRFRHJW%2BBYsI4TrszmxliM6&X-Amz-Signature=e98a747b84dbe0afb98e46e03a71cce715c4b33b1c7d5aa27e7a777bd9ac2061&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

drive around with `teleop_twist_keyboard` to scan more of the map

## Updating launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVIIODRK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCfPWryUkWRRkFOad8anKidNv8B%2BcA2tBBGDu9mwRT7kwIgDykcr3FxvKNg0QhxCrNgxYyeNBCdBTva%2ByQKH%2BZSzbkqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFAGq4jaHPaIVuZfVSrcAweVaC7HVySC7Cip7%2BklKJDKykufe1neq9AYgEZfJ%2FxF1tTQthcmWQD1OKaLgpsTs0%2F1invoG%2FKi7sIcQ8qJQtpQzS5rcDyqzyL%2Fs%2Ftyfxwr5PyT4lMrQi%2BdCdBvB6UmbveqEq%2B2z3cbkXRb3pd7fNbrhVFFSHStt%2Br3hOas2sxVh4Df4X2%2F3LRn%2Bn3PkIFWN8LVK8ZQISIzK61Vl77qqj8FIwSywpZzn%2F60Q1KHaBN4IFf1D02%2FNI1NEg5D4J7u4YeGDbLN7%2BpWCWTUjSJwt622mlocMBLm%2BTybnWqxCPDZJgaYs7CFL83RSVnMet99X5j%2BJ1kujj6VHyW0md3176FSe8jqOnvszotQGm%2F5fRPgJSvRQCrYM7auCQnH6odMD96F%2BJHwx%2BlpVmygGtvWZzzjZkbQylnDDp9fRPC7z8BynRt77bSaz7wjUpdrlNJmgCW2dyZ1czPGKEcGVLdmit0mKkvJCDU41ZxpmhLiF0Gapft9Jlnn%2BtGzrsBzBXM9H83W5xOn9HzRvGuMpStVcrLgkRdrMtsFBsKy8lvLQs524eW9MqhY3JfE%2FtC%2FzlIVcLDHII8eSwmb5pjXbYZqk8M3%2BCAzp3soH5Wrehv4DdSg6q7BtxjuAMmuS5cHMKnnosQGOqUBq8zKjiRhjtrqqewAodVJ67TPCePKpKFpq6leRbl8Rv%2F9Mqns3fdW8DFKn7udHPWZ2oOXLIDH2g0ESsu8ll2RomS9m6go2YdxyNfZRmbpCARWF2UEowgUjpHx2DAOfPOT4dh%2BE3YMFzijO9CgdRDQP1AE3TRT5wGjnYEoVxi8oeSltfW6sG1%2BphJ2ZcIA2Tmps0fsCdRFRHJW%2BBYsI4TrszmxliM6&X-Amz-Signature=f4974e8f80faf1e2d38750e4b1d733e0bc2eac7e69802a9e01375c92dae05497&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVIIODRK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCfPWryUkWRRkFOad8anKidNv8B%2BcA2tBBGDu9mwRT7kwIgDykcr3FxvKNg0QhxCrNgxYyeNBCdBTva%2ByQKH%2BZSzbkqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFAGq4jaHPaIVuZfVSrcAweVaC7HVySC7Cip7%2BklKJDKykufe1neq9AYgEZfJ%2FxF1tTQthcmWQD1OKaLgpsTs0%2F1invoG%2FKi7sIcQ8qJQtpQzS5rcDyqzyL%2Fs%2Ftyfxwr5PyT4lMrQi%2BdCdBvB6UmbveqEq%2B2z3cbkXRb3pd7fNbrhVFFSHStt%2Br3hOas2sxVh4Df4X2%2F3LRn%2Bn3PkIFWN8LVK8ZQISIzK61Vl77qqj8FIwSywpZzn%2F60Q1KHaBN4IFf1D02%2FNI1NEg5D4J7u4YeGDbLN7%2BpWCWTUjSJwt622mlocMBLm%2BTybnWqxCPDZJgaYs7CFL83RSVnMet99X5j%2BJ1kujj6VHyW0md3176FSe8jqOnvszotQGm%2F5fRPgJSvRQCrYM7auCQnH6odMD96F%2BJHwx%2BlpVmygGtvWZzzjZkbQylnDDp9fRPC7z8BynRt77bSaz7wjUpdrlNJmgCW2dyZ1czPGKEcGVLdmit0mKkvJCDU41ZxpmhLiF0Gapft9Jlnn%2BtGzrsBzBXM9H83W5xOn9HzRvGuMpStVcrLgkRdrMtsFBsKy8lvLQs524eW9MqhY3JfE%2FtC%2FzlIVcLDHII8eSwmb5pjXbYZqk8M3%2BCAzp3soH5Wrehv4DdSg6q7BtxjuAMmuS5cHMKnnosQGOqUBq8zKjiRhjtrqqewAodVJ67TPCePKpKFpq6leRbl8Rv%2F9Mqns3fdW8DFKn7udHPWZ2oOXLIDH2g0ESsu8ll2RomS9m6go2YdxyNfZRmbpCARWF2UEowgUjpHx2DAOfPOT4dh%2BE3YMFzijO9CgdRDQP1AE3TRT5wGjnYEoVxi8oeSltfW6sG1%2BphJ2ZcIA2Tmps0fsCdRFRHJW%2BBYsI4TrszmxliM6&X-Amz-Signature=5d5dd98c01ddcab60ae4f26c5a5d372b5c9f891a8f5c70ba3fed2d1f77eb2c0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVIIODRK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCfPWryUkWRRkFOad8anKidNv8B%2BcA2tBBGDu9mwRT7kwIgDykcr3FxvKNg0QhxCrNgxYyeNBCdBTva%2ByQKH%2BZSzbkqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFAGq4jaHPaIVuZfVSrcAweVaC7HVySC7Cip7%2BklKJDKykufe1neq9AYgEZfJ%2FxF1tTQthcmWQD1OKaLgpsTs0%2F1invoG%2FKi7sIcQ8qJQtpQzS5rcDyqzyL%2Fs%2Ftyfxwr5PyT4lMrQi%2BdCdBvB6UmbveqEq%2B2z3cbkXRb3pd7fNbrhVFFSHStt%2Br3hOas2sxVh4Df4X2%2F3LRn%2Bn3PkIFWN8LVK8ZQISIzK61Vl77qqj8FIwSywpZzn%2F60Q1KHaBN4IFf1D02%2FNI1NEg5D4J7u4YeGDbLN7%2BpWCWTUjSJwt622mlocMBLm%2BTybnWqxCPDZJgaYs7CFL83RSVnMet99X5j%2BJ1kujj6VHyW0md3176FSe8jqOnvszotQGm%2F5fRPgJSvRQCrYM7auCQnH6odMD96F%2BJHwx%2BlpVmygGtvWZzzjZkbQylnDDp9fRPC7z8BynRt77bSaz7wjUpdrlNJmgCW2dyZ1czPGKEcGVLdmit0mKkvJCDU41ZxpmhLiF0Gapft9Jlnn%2BtGzrsBzBXM9H83W5xOn9HzRvGuMpStVcrLgkRdrMtsFBsKy8lvLQs524eW9MqhY3JfE%2FtC%2FzlIVcLDHII8eSwmb5pjXbYZqk8M3%2BCAzp3soH5Wrehv4DdSg6q7BtxjuAMmuS5cHMKnnosQGOqUBq8zKjiRhjtrqqewAodVJ67TPCePKpKFpq6leRbl8Rv%2F9Mqns3fdW8DFKn7udHPWZ2oOXLIDH2g0ESsu8ll2RomS9m6go2YdxyNfZRmbpCARWF2UEowgUjpHx2DAOfPOT4dh%2BE3YMFzijO9CgdRDQP1AE3TRT5wGjnYEoVxi8oeSltfW6sG1%2BphJ2ZcIA2Tmps0fsCdRFRHJW%2BBYsI4TrszmxliM6&X-Amz-Signature=00ab892df73af4456f610a3faae4836ce7818d177aafff9d293615cea427ee5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVIIODRK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCfPWryUkWRRkFOad8anKidNv8B%2BcA2tBBGDu9mwRT7kwIgDykcr3FxvKNg0QhxCrNgxYyeNBCdBTva%2ByQKH%2BZSzbkqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFAGq4jaHPaIVuZfVSrcAweVaC7HVySC7Cip7%2BklKJDKykufe1neq9AYgEZfJ%2FxF1tTQthcmWQD1OKaLgpsTs0%2F1invoG%2FKi7sIcQ8qJQtpQzS5rcDyqzyL%2Fs%2Ftyfxwr5PyT4lMrQi%2BdCdBvB6UmbveqEq%2B2z3cbkXRb3pd7fNbrhVFFSHStt%2Br3hOas2sxVh4Df4X2%2F3LRn%2Bn3PkIFWN8LVK8ZQISIzK61Vl77qqj8FIwSywpZzn%2F60Q1KHaBN4IFf1D02%2FNI1NEg5D4J7u4YeGDbLN7%2BpWCWTUjSJwt622mlocMBLm%2BTybnWqxCPDZJgaYs7CFL83RSVnMet99X5j%2BJ1kujj6VHyW0md3176FSe8jqOnvszotQGm%2F5fRPgJSvRQCrYM7auCQnH6odMD96F%2BJHwx%2BlpVmygGtvWZzzjZkbQylnDDp9fRPC7z8BynRt77bSaz7wjUpdrlNJmgCW2dyZ1czPGKEcGVLdmit0mKkvJCDU41ZxpmhLiF0Gapft9Jlnn%2BtGzrsBzBXM9H83W5xOn9HzRvGuMpStVcrLgkRdrMtsFBsKy8lvLQs524eW9MqhY3JfE%2FtC%2FzlIVcLDHII8eSwmb5pjXbYZqk8M3%2BCAzp3soH5Wrehv4DdSg6q7BtxjuAMmuS5cHMKnnosQGOqUBq8zKjiRhjtrqqewAodVJ67TPCePKpKFpq6leRbl8Rv%2F9Mqns3fdW8DFKn7udHPWZ2oOXLIDH2g0ESsu8ll2RomS9m6go2YdxyNfZRmbpCARWF2UEowgUjpHx2DAOfPOT4dh%2BE3YMFzijO9CgdRDQP1AE3TRT5wGjnYEoVxi8oeSltfW6sG1%2BphJ2ZcIA2Tmps0fsCdRFRHJW%2BBYsI4TrszmxliM6&X-Amz-Signature=aa899e27b18afe81a8c083418ac491a5286a09d327fa1f4b45ca43c01c12b997&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVIIODRK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCfPWryUkWRRkFOad8anKidNv8B%2BcA2tBBGDu9mwRT7kwIgDykcr3FxvKNg0QhxCrNgxYyeNBCdBTva%2ByQKH%2BZSzbkqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFAGq4jaHPaIVuZfVSrcAweVaC7HVySC7Cip7%2BklKJDKykufe1neq9AYgEZfJ%2FxF1tTQthcmWQD1OKaLgpsTs0%2F1invoG%2FKi7sIcQ8qJQtpQzS5rcDyqzyL%2Fs%2Ftyfxwr5PyT4lMrQi%2BdCdBvB6UmbveqEq%2B2z3cbkXRb3pd7fNbrhVFFSHStt%2Br3hOas2sxVh4Df4X2%2F3LRn%2Bn3PkIFWN8LVK8ZQISIzK61Vl77qqj8FIwSywpZzn%2F60Q1KHaBN4IFf1D02%2FNI1NEg5D4J7u4YeGDbLN7%2BpWCWTUjSJwt622mlocMBLm%2BTybnWqxCPDZJgaYs7CFL83RSVnMet99X5j%2BJ1kujj6VHyW0md3176FSe8jqOnvszotQGm%2F5fRPgJSvRQCrYM7auCQnH6odMD96F%2BJHwx%2BlpVmygGtvWZzzjZkbQylnDDp9fRPC7z8BynRt77bSaz7wjUpdrlNJmgCW2dyZ1czPGKEcGVLdmit0mKkvJCDU41ZxpmhLiF0Gapft9Jlnn%2BtGzrsBzBXM9H83W5xOn9HzRvGuMpStVcrLgkRdrMtsFBsKy8lvLQs524eW9MqhY3JfE%2FtC%2FzlIVcLDHII8eSwmb5pjXbYZqk8M3%2BCAzp3soH5Wrehv4DdSg6q7BtxjuAMmuS5cHMKnnosQGOqUBq8zKjiRhjtrqqewAodVJ67TPCePKpKFpq6leRbl8Rv%2F9Mqns3fdW8DFKn7udHPWZ2oOXLIDH2g0ESsu8ll2RomS9m6go2YdxyNfZRmbpCARWF2UEowgUjpHx2DAOfPOT4dh%2BE3YMFzijO9CgdRDQP1AE3TRT5wGjnYEoVxi8oeSltfW6sG1%2BphJ2ZcIA2Tmps0fsCdRFRHJW%2BBYsI4TrszmxliM6&X-Amz-Signature=055ca7dfb4b11412aaeee3ba022b9e02ac3a14f33a36aa738ae177e31a19fccd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVIIODRK%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCfPWryUkWRRkFOad8anKidNv8B%2BcA2tBBGDu9mwRT7kwIgDykcr3FxvKNg0QhxCrNgxYyeNBCdBTva%2ByQKH%2BZSzbkqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFAGq4jaHPaIVuZfVSrcAweVaC7HVySC7Cip7%2BklKJDKykufe1neq9AYgEZfJ%2FxF1tTQthcmWQD1OKaLgpsTs0%2F1invoG%2FKi7sIcQ8qJQtpQzS5rcDyqzyL%2Fs%2Ftyfxwr5PyT4lMrQi%2BdCdBvB6UmbveqEq%2B2z3cbkXRb3pd7fNbrhVFFSHStt%2Br3hOas2sxVh4Df4X2%2F3LRn%2Bn3PkIFWN8LVK8ZQISIzK61Vl77qqj8FIwSywpZzn%2F60Q1KHaBN4IFf1D02%2FNI1NEg5D4J7u4YeGDbLN7%2BpWCWTUjSJwt622mlocMBLm%2BTybnWqxCPDZJgaYs7CFL83RSVnMet99X5j%2BJ1kujj6VHyW0md3176FSe8jqOnvszotQGm%2F5fRPgJSvRQCrYM7auCQnH6odMD96F%2BJHwx%2BlpVmygGtvWZzzjZkbQylnDDp9fRPC7z8BynRt77bSaz7wjUpdrlNJmgCW2dyZ1czPGKEcGVLdmit0mKkvJCDU41ZxpmhLiF0Gapft9Jlnn%2BtGzrsBzBXM9H83W5xOn9HzRvGuMpStVcrLgkRdrMtsFBsKy8lvLQs524eW9MqhY3JfE%2FtC%2FzlIVcLDHII8eSwmb5pjXbYZqk8M3%2BCAzp3soH5Wrehv4DdSg6q7BtxjuAMmuS5cHMKnnosQGOqUBq8zKjiRhjtrqqewAodVJ67TPCePKpKFpq6leRbl8Rv%2F9Mqns3fdW8DFKn7udHPWZ2oOXLIDH2g0ESsu8ll2RomS9m6go2YdxyNfZRmbpCARWF2UEowgUjpHx2DAOfPOT4dh%2BE3YMFzijO9CgdRDQP1AE3TRT5wGjnYEoVxi8oeSltfW6sG1%2BphJ2ZcIA2Tmps0fsCdRFRHJW%2BBYsI4TrszmxliM6&X-Amz-Signature=fd393926df33e4493c155d820293fd67f1eb01ebe6c82c77c7ffbef7c7bdfbd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored map

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

TODO: add pic

For further configuration go to: TODO: link to slam docs config guide 
