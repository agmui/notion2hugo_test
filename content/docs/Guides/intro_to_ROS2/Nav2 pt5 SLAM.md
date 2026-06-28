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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3EVNKVZ%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJLoSt7J%2F2Tjem36kEXoNaHEeUMiETGxMgP5WGB0rOxwIhANBMHV0uxLLKGV60Atpek8mY9JnpL0cLslP1R5TjerxkKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igww43%2Fnm8Rqq8pR%2Fcsq3AM9hmD1zm8ooAPy4IGQ75pemuLnZ5ZXj1U3zqm6KT3MW13tOsVU6zHA52oqcaZzB1Q6HQGnPn79rXCNrdTJnlWjg71mfHcfjXixuMPkxLg0k%2FM0AuIsGthRlx9G1t99%2BJ1umhKgEpyTZoS7fGvdAVb%2Fg3wHb9lunwA%2Bp3D8snHlQq5q3G186pej6s%2FaAZ86lcjHaCLO3h9hMmQ9bcbbFKeP6KfHgXZ1vwGsGyVWcKhZSsQTxaTkP1mgIUF71bHyc4456wdO3260yysTzy36qeliDvj57eJS%2BPnu9%2FHV9pL52kiFAYwzo4UbonKQ7HdO%2Fr6v8LcHbQEjVtassOZqaRJ32BZcP64qltOupZwnHZjn0PhYRn2isZgHnnrQUeT4rv23wdZqrZpWzzGyEmLJ7SeYraM6JeNogOJlrGYtzubxQ%2BT1EKJX6sKyf1r5fVfX96EB8vPib7QDG3XjvDFnL4byQF1OL0NeOXupl8%2Bs5zHVfB%2FSJdf%2Fy54LHLS5FfuQt4pNVOA39DdkUmI3aelongh7i%2B6mUc1U6dFNgvg55%2FgNL3cXZV75ugLlY6kmVjn%2FEyJBgUvQBJuEr%2BDYg79besaORDpGxUiWirO3bnSE5vLjdpmxKoMfxQqNDJMNrjDOoILSBjqkAUkg2%2B6E3VkM1KmMe8owvOp0ydjT9PAI8lnVOg2%2BtEshmMPJ8yY6eV08ykLRychrKy5lrB0xyxDEKr4pDLezhgammHXUtPCvWcl9Dg5dkMJkGsqk8e6DyyGu%2FiLVzYIcCZkNCylU%2Bw8e7iCmQTV5UGoBg7EkCXJO89DX9d7sH6XoitcEqeMm%2FraJzsSGabE28ym64AgUmziaxDClUH%2Fx0CA3OnRW&X-Amz-Signature=f1beff47a14ba64a383851e80db849d6ca2edfc31a773b1a3a1f67efdeb48c75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3EVNKVZ%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJLoSt7J%2F2Tjem36kEXoNaHEeUMiETGxMgP5WGB0rOxwIhANBMHV0uxLLKGV60Atpek8mY9JnpL0cLslP1R5TjerxkKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igww43%2Fnm8Rqq8pR%2Fcsq3AM9hmD1zm8ooAPy4IGQ75pemuLnZ5ZXj1U3zqm6KT3MW13tOsVU6zHA52oqcaZzB1Q6HQGnPn79rXCNrdTJnlWjg71mfHcfjXixuMPkxLg0k%2FM0AuIsGthRlx9G1t99%2BJ1umhKgEpyTZoS7fGvdAVb%2Fg3wHb9lunwA%2Bp3D8snHlQq5q3G186pej6s%2FaAZ86lcjHaCLO3h9hMmQ9bcbbFKeP6KfHgXZ1vwGsGyVWcKhZSsQTxaTkP1mgIUF71bHyc4456wdO3260yysTzy36qeliDvj57eJS%2BPnu9%2FHV9pL52kiFAYwzo4UbonKQ7HdO%2Fr6v8LcHbQEjVtassOZqaRJ32BZcP64qltOupZwnHZjn0PhYRn2isZgHnnrQUeT4rv23wdZqrZpWzzGyEmLJ7SeYraM6JeNogOJlrGYtzubxQ%2BT1EKJX6sKyf1r5fVfX96EB8vPib7QDG3XjvDFnL4byQF1OL0NeOXupl8%2Bs5zHVfB%2FSJdf%2Fy54LHLS5FfuQt4pNVOA39DdkUmI3aelongh7i%2B6mUc1U6dFNgvg55%2FgNL3cXZV75ugLlY6kmVjn%2FEyJBgUvQBJuEr%2BDYg79besaORDpGxUiWirO3bnSE5vLjdpmxKoMfxQqNDJMNrjDOoILSBjqkAUkg2%2B6E3VkM1KmMe8owvOp0ydjT9PAI8lnVOg2%2BtEshmMPJ8yY6eV08ykLRychrKy5lrB0xyxDEKr4pDLezhgammHXUtPCvWcl9Dg5dkMJkGsqk8e6DyyGu%2FiLVzYIcCZkNCylU%2Bw8e7iCmQTV5UGoBg7EkCXJO89DX9d7sH6XoitcEqeMm%2FraJzsSGabE28ym64AgUmziaxDClUH%2Fx0CA3OnRW&X-Amz-Signature=4dc3a5417e5ad1115c615818ccab7f43784da7e1a204784c40007dcbaf5b5151&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3EVNKVZ%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJLoSt7J%2F2Tjem36kEXoNaHEeUMiETGxMgP5WGB0rOxwIhANBMHV0uxLLKGV60Atpek8mY9JnpL0cLslP1R5TjerxkKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igww43%2Fnm8Rqq8pR%2Fcsq3AM9hmD1zm8ooAPy4IGQ75pemuLnZ5ZXj1U3zqm6KT3MW13tOsVU6zHA52oqcaZzB1Q6HQGnPn79rXCNrdTJnlWjg71mfHcfjXixuMPkxLg0k%2FM0AuIsGthRlx9G1t99%2BJ1umhKgEpyTZoS7fGvdAVb%2Fg3wHb9lunwA%2Bp3D8snHlQq5q3G186pej6s%2FaAZ86lcjHaCLO3h9hMmQ9bcbbFKeP6KfHgXZ1vwGsGyVWcKhZSsQTxaTkP1mgIUF71bHyc4456wdO3260yysTzy36qeliDvj57eJS%2BPnu9%2FHV9pL52kiFAYwzo4UbonKQ7HdO%2Fr6v8LcHbQEjVtassOZqaRJ32BZcP64qltOupZwnHZjn0PhYRn2isZgHnnrQUeT4rv23wdZqrZpWzzGyEmLJ7SeYraM6JeNogOJlrGYtzubxQ%2BT1EKJX6sKyf1r5fVfX96EB8vPib7QDG3XjvDFnL4byQF1OL0NeOXupl8%2Bs5zHVfB%2FSJdf%2Fy54LHLS5FfuQt4pNVOA39DdkUmI3aelongh7i%2B6mUc1U6dFNgvg55%2FgNL3cXZV75ugLlY6kmVjn%2FEyJBgUvQBJuEr%2BDYg79besaORDpGxUiWirO3bnSE5vLjdpmxKoMfxQqNDJMNrjDOoILSBjqkAUkg2%2B6E3VkM1KmMe8owvOp0ydjT9PAI8lnVOg2%2BtEshmMPJ8yY6eV08ykLRychrKy5lrB0xyxDEKr4pDLezhgammHXUtPCvWcl9Dg5dkMJkGsqk8e6DyyGu%2FiLVzYIcCZkNCylU%2Bw8e7iCmQTV5UGoBg7EkCXJO89DX9d7sH6XoitcEqeMm%2FraJzsSGabE28ym64AgUmziaxDClUH%2Fx0CA3OnRW&X-Amz-Signature=d0923755d5c4ac7149688cd24f059d4e80ea7fe60256262d4b321aeae8e028d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3EVNKVZ%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJLoSt7J%2F2Tjem36kEXoNaHEeUMiETGxMgP5WGB0rOxwIhANBMHV0uxLLKGV60Atpek8mY9JnpL0cLslP1R5TjerxkKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igww43%2Fnm8Rqq8pR%2Fcsq3AM9hmD1zm8ooAPy4IGQ75pemuLnZ5ZXj1U3zqm6KT3MW13tOsVU6zHA52oqcaZzB1Q6HQGnPn79rXCNrdTJnlWjg71mfHcfjXixuMPkxLg0k%2FM0AuIsGthRlx9G1t99%2BJ1umhKgEpyTZoS7fGvdAVb%2Fg3wHb9lunwA%2Bp3D8snHlQq5q3G186pej6s%2FaAZ86lcjHaCLO3h9hMmQ9bcbbFKeP6KfHgXZ1vwGsGyVWcKhZSsQTxaTkP1mgIUF71bHyc4456wdO3260yysTzy36qeliDvj57eJS%2BPnu9%2FHV9pL52kiFAYwzo4UbonKQ7HdO%2Fr6v8LcHbQEjVtassOZqaRJ32BZcP64qltOupZwnHZjn0PhYRn2isZgHnnrQUeT4rv23wdZqrZpWzzGyEmLJ7SeYraM6JeNogOJlrGYtzubxQ%2BT1EKJX6sKyf1r5fVfX96EB8vPib7QDG3XjvDFnL4byQF1OL0NeOXupl8%2Bs5zHVfB%2FSJdf%2Fy54LHLS5FfuQt4pNVOA39DdkUmI3aelongh7i%2B6mUc1U6dFNgvg55%2FgNL3cXZV75ugLlY6kmVjn%2FEyJBgUvQBJuEr%2BDYg79besaORDpGxUiWirO3bnSE5vLjdpmxKoMfxQqNDJMNrjDOoILSBjqkAUkg2%2B6E3VkM1KmMe8owvOp0ydjT9PAI8lnVOg2%2BtEshmMPJ8yY6eV08ykLRychrKy5lrB0xyxDEKr4pDLezhgammHXUtPCvWcl9Dg5dkMJkGsqk8e6DyyGu%2FiLVzYIcCZkNCylU%2Bw8e7iCmQTV5UGoBg7EkCXJO89DX9d7sH6XoitcEqeMm%2FraJzsSGabE28ym64AgUmziaxDClUH%2Fx0CA3OnRW&X-Amz-Signature=82d4431a9a91f75e7909e50e5bd88d03912ed2a252c7ba178c7405bf76f4f3ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3EVNKVZ%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJLoSt7J%2F2Tjem36kEXoNaHEeUMiETGxMgP5WGB0rOxwIhANBMHV0uxLLKGV60Atpek8mY9JnpL0cLslP1R5TjerxkKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igww43%2Fnm8Rqq8pR%2Fcsq3AM9hmD1zm8ooAPy4IGQ75pemuLnZ5ZXj1U3zqm6KT3MW13tOsVU6zHA52oqcaZzB1Q6HQGnPn79rXCNrdTJnlWjg71mfHcfjXixuMPkxLg0k%2FM0AuIsGthRlx9G1t99%2BJ1umhKgEpyTZoS7fGvdAVb%2Fg3wHb9lunwA%2Bp3D8snHlQq5q3G186pej6s%2FaAZ86lcjHaCLO3h9hMmQ9bcbbFKeP6KfHgXZ1vwGsGyVWcKhZSsQTxaTkP1mgIUF71bHyc4456wdO3260yysTzy36qeliDvj57eJS%2BPnu9%2FHV9pL52kiFAYwzo4UbonKQ7HdO%2Fr6v8LcHbQEjVtassOZqaRJ32BZcP64qltOupZwnHZjn0PhYRn2isZgHnnrQUeT4rv23wdZqrZpWzzGyEmLJ7SeYraM6JeNogOJlrGYtzubxQ%2BT1EKJX6sKyf1r5fVfX96EB8vPib7QDG3XjvDFnL4byQF1OL0NeOXupl8%2Bs5zHVfB%2FSJdf%2Fy54LHLS5FfuQt4pNVOA39DdkUmI3aelongh7i%2B6mUc1U6dFNgvg55%2FgNL3cXZV75ugLlY6kmVjn%2FEyJBgUvQBJuEr%2BDYg79besaORDpGxUiWirO3bnSE5vLjdpmxKoMfxQqNDJMNrjDOoILSBjqkAUkg2%2B6E3VkM1KmMe8owvOp0ydjT9PAI8lnVOg2%2BtEshmMPJ8yY6eV08ykLRychrKy5lrB0xyxDEKr4pDLezhgammHXUtPCvWcl9Dg5dkMJkGsqk8e6DyyGu%2FiLVzYIcCZkNCylU%2Bw8e7iCmQTV5UGoBg7EkCXJO89DX9d7sH6XoitcEqeMm%2FraJzsSGabE28ym64AgUmziaxDClUH%2Fx0CA3OnRW&X-Amz-Signature=40b419d202664cc09650f213636823c1360e07dccb58587bb2f92b74d48c39d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3EVNKVZ%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJLoSt7J%2F2Tjem36kEXoNaHEeUMiETGxMgP5WGB0rOxwIhANBMHV0uxLLKGV60Atpek8mY9JnpL0cLslP1R5TjerxkKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igww43%2Fnm8Rqq8pR%2Fcsq3AM9hmD1zm8ooAPy4IGQ75pemuLnZ5ZXj1U3zqm6KT3MW13tOsVU6zHA52oqcaZzB1Q6HQGnPn79rXCNrdTJnlWjg71mfHcfjXixuMPkxLg0k%2FM0AuIsGthRlx9G1t99%2BJ1umhKgEpyTZoS7fGvdAVb%2Fg3wHb9lunwA%2Bp3D8snHlQq5q3G186pej6s%2FaAZ86lcjHaCLO3h9hMmQ9bcbbFKeP6KfHgXZ1vwGsGyVWcKhZSsQTxaTkP1mgIUF71bHyc4456wdO3260yysTzy36qeliDvj57eJS%2BPnu9%2FHV9pL52kiFAYwzo4UbonKQ7HdO%2Fr6v8LcHbQEjVtassOZqaRJ32BZcP64qltOupZwnHZjn0PhYRn2isZgHnnrQUeT4rv23wdZqrZpWzzGyEmLJ7SeYraM6JeNogOJlrGYtzubxQ%2BT1EKJX6sKyf1r5fVfX96EB8vPib7QDG3XjvDFnL4byQF1OL0NeOXupl8%2Bs5zHVfB%2FSJdf%2Fy54LHLS5FfuQt4pNVOA39DdkUmI3aelongh7i%2B6mUc1U6dFNgvg55%2FgNL3cXZV75ugLlY6kmVjn%2FEyJBgUvQBJuEr%2BDYg79besaORDpGxUiWirO3bnSE5vLjdpmxKoMfxQqNDJMNrjDOoILSBjqkAUkg2%2B6E3VkM1KmMe8owvOp0ydjT9PAI8lnVOg2%2BtEshmMPJ8yY6eV08ykLRychrKy5lrB0xyxDEKr4pDLezhgammHXUtPCvWcl9Dg5dkMJkGsqk8e6DyyGu%2FiLVzYIcCZkNCylU%2Bw8e7iCmQTV5UGoBg7EkCXJO89DX9d7sH6XoitcEqeMm%2FraJzsSGabE28ym64AgUmziaxDClUH%2Fx0CA3OnRW&X-Amz-Signature=c938d0271c9eafe141ba70ff337cddc74585932c3614412a31f29d5f856b85d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3EVNKVZ%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJLoSt7J%2F2Tjem36kEXoNaHEeUMiETGxMgP5WGB0rOxwIhANBMHV0uxLLKGV60Atpek8mY9JnpL0cLslP1R5TjerxkKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igww43%2Fnm8Rqq8pR%2Fcsq3AM9hmD1zm8ooAPy4IGQ75pemuLnZ5ZXj1U3zqm6KT3MW13tOsVU6zHA52oqcaZzB1Q6HQGnPn79rXCNrdTJnlWjg71mfHcfjXixuMPkxLg0k%2FM0AuIsGthRlx9G1t99%2BJ1umhKgEpyTZoS7fGvdAVb%2Fg3wHb9lunwA%2Bp3D8snHlQq5q3G186pej6s%2FaAZ86lcjHaCLO3h9hMmQ9bcbbFKeP6KfHgXZ1vwGsGyVWcKhZSsQTxaTkP1mgIUF71bHyc4456wdO3260yysTzy36qeliDvj57eJS%2BPnu9%2FHV9pL52kiFAYwzo4UbonKQ7HdO%2Fr6v8LcHbQEjVtassOZqaRJ32BZcP64qltOupZwnHZjn0PhYRn2isZgHnnrQUeT4rv23wdZqrZpWzzGyEmLJ7SeYraM6JeNogOJlrGYtzubxQ%2BT1EKJX6sKyf1r5fVfX96EB8vPib7QDG3XjvDFnL4byQF1OL0NeOXupl8%2Bs5zHVfB%2FSJdf%2Fy54LHLS5FfuQt4pNVOA39DdkUmI3aelongh7i%2B6mUc1U6dFNgvg55%2FgNL3cXZV75ugLlY6kmVjn%2FEyJBgUvQBJuEr%2BDYg79besaORDpGxUiWirO3bnSE5vLjdpmxKoMfxQqNDJMNrjDOoILSBjqkAUkg2%2B6E3VkM1KmMe8owvOp0ydjT9PAI8lnVOg2%2BtEshmMPJ8yY6eV08ykLRychrKy5lrB0xyxDEKr4pDLezhgammHXUtPCvWcl9Dg5dkMJkGsqk8e6DyyGu%2FiLVzYIcCZkNCylU%2Bw8e7iCmQTV5UGoBg7EkCXJO89DX9d7sH6XoitcEqeMm%2FraJzsSGabE28ym64AgUmziaxDClUH%2Fx0CA3OnRW&X-Amz-Signature=a019aad20919943192d3a53956b5c60b3650f6ceecfe3d949a777e4c822963cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3EVNKVZ%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJLoSt7J%2F2Tjem36kEXoNaHEeUMiETGxMgP5WGB0rOxwIhANBMHV0uxLLKGV60Atpek8mY9JnpL0cLslP1R5TjerxkKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igww43%2Fnm8Rqq8pR%2Fcsq3AM9hmD1zm8ooAPy4IGQ75pemuLnZ5ZXj1U3zqm6KT3MW13tOsVU6zHA52oqcaZzB1Q6HQGnPn79rXCNrdTJnlWjg71mfHcfjXixuMPkxLg0k%2FM0AuIsGthRlx9G1t99%2BJ1umhKgEpyTZoS7fGvdAVb%2Fg3wHb9lunwA%2Bp3D8snHlQq5q3G186pej6s%2FaAZ86lcjHaCLO3h9hMmQ9bcbbFKeP6KfHgXZ1vwGsGyVWcKhZSsQTxaTkP1mgIUF71bHyc4456wdO3260yysTzy36qeliDvj57eJS%2BPnu9%2FHV9pL52kiFAYwzo4UbonKQ7HdO%2Fr6v8LcHbQEjVtassOZqaRJ32BZcP64qltOupZwnHZjn0PhYRn2isZgHnnrQUeT4rv23wdZqrZpWzzGyEmLJ7SeYraM6JeNogOJlrGYtzubxQ%2BT1EKJX6sKyf1r5fVfX96EB8vPib7QDG3XjvDFnL4byQF1OL0NeOXupl8%2Bs5zHVfB%2FSJdf%2Fy54LHLS5FfuQt4pNVOA39DdkUmI3aelongh7i%2B6mUc1U6dFNgvg55%2FgNL3cXZV75ugLlY6kmVjn%2FEyJBgUvQBJuEr%2BDYg79besaORDpGxUiWirO3bnSE5vLjdpmxKoMfxQqNDJMNrjDOoILSBjqkAUkg2%2B6E3VkM1KmMe8owvOp0ydjT9PAI8lnVOg2%2BtEshmMPJ8yY6eV08ykLRychrKy5lrB0xyxDEKr4pDLezhgammHXUtPCvWcl9Dg5dkMJkGsqk8e6DyyGu%2FiLVzYIcCZkNCylU%2Bw8e7iCmQTV5UGoBg7EkCXJO89DX9d7sH6XoitcEqeMm%2FraJzsSGabE28ym64AgUmziaxDClUH%2Fx0CA3OnRW&X-Amz-Signature=251f153177aa59e06d963ef3da296bb2dc9cb7692483fec2a9c06e7f1d4b9a79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3EVNKVZ%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJLoSt7J%2F2Tjem36kEXoNaHEeUMiETGxMgP5WGB0rOxwIhANBMHV0uxLLKGV60Atpek8mY9JnpL0cLslP1R5TjerxkKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igww43%2Fnm8Rqq8pR%2Fcsq3AM9hmD1zm8ooAPy4IGQ75pemuLnZ5ZXj1U3zqm6KT3MW13tOsVU6zHA52oqcaZzB1Q6HQGnPn79rXCNrdTJnlWjg71mfHcfjXixuMPkxLg0k%2FM0AuIsGthRlx9G1t99%2BJ1umhKgEpyTZoS7fGvdAVb%2Fg3wHb9lunwA%2Bp3D8snHlQq5q3G186pej6s%2FaAZ86lcjHaCLO3h9hMmQ9bcbbFKeP6KfHgXZ1vwGsGyVWcKhZSsQTxaTkP1mgIUF71bHyc4456wdO3260yysTzy36qeliDvj57eJS%2BPnu9%2FHV9pL52kiFAYwzo4UbonKQ7HdO%2Fr6v8LcHbQEjVtassOZqaRJ32BZcP64qltOupZwnHZjn0PhYRn2isZgHnnrQUeT4rv23wdZqrZpWzzGyEmLJ7SeYraM6JeNogOJlrGYtzubxQ%2BT1EKJX6sKyf1r5fVfX96EB8vPib7QDG3XjvDFnL4byQF1OL0NeOXupl8%2Bs5zHVfB%2FSJdf%2Fy54LHLS5FfuQt4pNVOA39DdkUmI3aelongh7i%2B6mUc1U6dFNgvg55%2FgNL3cXZV75ugLlY6kmVjn%2FEyJBgUvQBJuEr%2BDYg79besaORDpGxUiWirO3bnSE5vLjdpmxKoMfxQqNDJMNrjDOoILSBjqkAUkg2%2B6E3VkM1KmMe8owvOp0ydjT9PAI8lnVOg2%2BtEshmMPJ8yY6eV08ykLRychrKy5lrB0xyxDEKr4pDLezhgammHXUtPCvWcl9Dg5dkMJkGsqk8e6DyyGu%2FiLVzYIcCZkNCylU%2Bw8e7iCmQTV5UGoBg7EkCXJO89DX9d7sH6XoitcEqeMm%2FraJzsSGabE28ym64AgUmziaxDClUH%2Fx0CA3OnRW&X-Amz-Signature=733b2b33f7ee0cad76885929c3fe58f4f0c56a49908e2539b1a78e1b6a042e9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3EVNKVZ%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJLoSt7J%2F2Tjem36kEXoNaHEeUMiETGxMgP5WGB0rOxwIhANBMHV0uxLLKGV60Atpek8mY9JnpL0cLslP1R5TjerxkKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igww43%2Fnm8Rqq8pR%2Fcsq3AM9hmD1zm8ooAPy4IGQ75pemuLnZ5ZXj1U3zqm6KT3MW13tOsVU6zHA52oqcaZzB1Q6HQGnPn79rXCNrdTJnlWjg71mfHcfjXixuMPkxLg0k%2FM0AuIsGthRlx9G1t99%2BJ1umhKgEpyTZoS7fGvdAVb%2Fg3wHb9lunwA%2Bp3D8snHlQq5q3G186pej6s%2FaAZ86lcjHaCLO3h9hMmQ9bcbbFKeP6KfHgXZ1vwGsGyVWcKhZSsQTxaTkP1mgIUF71bHyc4456wdO3260yysTzy36qeliDvj57eJS%2BPnu9%2FHV9pL52kiFAYwzo4UbonKQ7HdO%2Fr6v8LcHbQEjVtassOZqaRJ32BZcP64qltOupZwnHZjn0PhYRn2isZgHnnrQUeT4rv23wdZqrZpWzzGyEmLJ7SeYraM6JeNogOJlrGYtzubxQ%2BT1EKJX6sKyf1r5fVfX96EB8vPib7QDG3XjvDFnL4byQF1OL0NeOXupl8%2Bs5zHVfB%2FSJdf%2Fy54LHLS5FfuQt4pNVOA39DdkUmI3aelongh7i%2B6mUc1U6dFNgvg55%2FgNL3cXZV75ugLlY6kmVjn%2FEyJBgUvQBJuEr%2BDYg79besaORDpGxUiWirO3bnSE5vLjdpmxKoMfxQqNDJMNrjDOoILSBjqkAUkg2%2B6E3VkM1KmMe8owvOp0ydjT9PAI8lnVOg2%2BtEshmMPJ8yY6eV08ykLRychrKy5lrB0xyxDEKr4pDLezhgammHXUtPCvWcl9Dg5dkMJkGsqk8e6DyyGu%2FiLVzYIcCZkNCylU%2Bw8e7iCmQTV5UGoBg7EkCXJO89DX9d7sH6XoitcEqeMm%2FraJzsSGabE28ym64AgUmziaxDClUH%2Fx0CA3OnRW&X-Amz-Signature=091532c5410a307ebadb5825f4e53ea79a1728486c03e500df071b4c687c77ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3EVNKVZ%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJLoSt7J%2F2Tjem36kEXoNaHEeUMiETGxMgP5WGB0rOxwIhANBMHV0uxLLKGV60Atpek8mY9JnpL0cLslP1R5TjerxkKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igww43%2Fnm8Rqq8pR%2Fcsq3AM9hmD1zm8ooAPy4IGQ75pemuLnZ5ZXj1U3zqm6KT3MW13tOsVU6zHA52oqcaZzB1Q6HQGnPn79rXCNrdTJnlWjg71mfHcfjXixuMPkxLg0k%2FM0AuIsGthRlx9G1t99%2BJ1umhKgEpyTZoS7fGvdAVb%2Fg3wHb9lunwA%2Bp3D8snHlQq5q3G186pej6s%2FaAZ86lcjHaCLO3h9hMmQ9bcbbFKeP6KfHgXZ1vwGsGyVWcKhZSsQTxaTkP1mgIUF71bHyc4456wdO3260yysTzy36qeliDvj57eJS%2BPnu9%2FHV9pL52kiFAYwzo4UbonKQ7HdO%2Fr6v8LcHbQEjVtassOZqaRJ32BZcP64qltOupZwnHZjn0PhYRn2isZgHnnrQUeT4rv23wdZqrZpWzzGyEmLJ7SeYraM6JeNogOJlrGYtzubxQ%2BT1EKJX6sKyf1r5fVfX96EB8vPib7QDG3XjvDFnL4byQF1OL0NeOXupl8%2Bs5zHVfB%2FSJdf%2Fy54LHLS5FfuQt4pNVOA39DdkUmI3aelongh7i%2B6mUc1U6dFNgvg55%2FgNL3cXZV75ugLlY6kmVjn%2FEyJBgUvQBJuEr%2BDYg79besaORDpGxUiWirO3bnSE5vLjdpmxKoMfxQqNDJMNrjDOoILSBjqkAUkg2%2B6E3VkM1KmMe8owvOp0ydjT9PAI8lnVOg2%2BtEshmMPJ8yY6eV08ykLRychrKy5lrB0xyxDEKr4pDLezhgammHXUtPCvWcl9Dg5dkMJkGsqk8e6DyyGu%2FiLVzYIcCZkNCylU%2Bw8e7iCmQTV5UGoBg7EkCXJO89DX9d7sH6XoitcEqeMm%2FraJzsSGabE28ym64AgUmziaxDClUH%2Fx0CA3OnRW&X-Amz-Signature=1298878315e00778f1318e75747abcda0f8e746f2d636f2e6964739e019577cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3EVNKVZ%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJLoSt7J%2F2Tjem36kEXoNaHEeUMiETGxMgP5WGB0rOxwIhANBMHV0uxLLKGV60Atpek8mY9JnpL0cLslP1R5TjerxkKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igww43%2Fnm8Rqq8pR%2Fcsq3AM9hmD1zm8ooAPy4IGQ75pemuLnZ5ZXj1U3zqm6KT3MW13tOsVU6zHA52oqcaZzB1Q6HQGnPn79rXCNrdTJnlWjg71mfHcfjXixuMPkxLg0k%2FM0AuIsGthRlx9G1t99%2BJ1umhKgEpyTZoS7fGvdAVb%2Fg3wHb9lunwA%2Bp3D8snHlQq5q3G186pej6s%2FaAZ86lcjHaCLO3h9hMmQ9bcbbFKeP6KfHgXZ1vwGsGyVWcKhZSsQTxaTkP1mgIUF71bHyc4456wdO3260yysTzy36qeliDvj57eJS%2BPnu9%2FHV9pL52kiFAYwzo4UbonKQ7HdO%2Fr6v8LcHbQEjVtassOZqaRJ32BZcP64qltOupZwnHZjn0PhYRn2isZgHnnrQUeT4rv23wdZqrZpWzzGyEmLJ7SeYraM6JeNogOJlrGYtzubxQ%2BT1EKJX6sKyf1r5fVfX96EB8vPib7QDG3XjvDFnL4byQF1OL0NeOXupl8%2Bs5zHVfB%2FSJdf%2Fy54LHLS5FfuQt4pNVOA39DdkUmI3aelongh7i%2B6mUc1U6dFNgvg55%2FgNL3cXZV75ugLlY6kmVjn%2FEyJBgUvQBJuEr%2BDYg79besaORDpGxUiWirO3bnSE5vLjdpmxKoMfxQqNDJMNrjDOoILSBjqkAUkg2%2B6E3VkM1KmMe8owvOp0ydjT9PAI8lnVOg2%2BtEshmMPJ8yY6eV08ykLRychrKy5lrB0xyxDEKr4pDLezhgammHXUtPCvWcl9Dg5dkMJkGsqk8e6DyyGu%2FiLVzYIcCZkNCylU%2Bw8e7iCmQTV5UGoBg7EkCXJO89DX9d7sH6XoitcEqeMm%2FraJzsSGabE28ym64AgUmziaxDClUH%2Fx0CA3OnRW&X-Amz-Signature=ac0d5d486ed6e90657bf6cb83033157dda3bf099944cfe0b24955811afdf103d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3EVNKVZ%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJLoSt7J%2F2Tjem36kEXoNaHEeUMiETGxMgP5WGB0rOxwIhANBMHV0uxLLKGV60Atpek8mY9JnpL0cLslP1R5TjerxkKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igww43%2Fnm8Rqq8pR%2Fcsq3AM9hmD1zm8ooAPy4IGQ75pemuLnZ5ZXj1U3zqm6KT3MW13tOsVU6zHA52oqcaZzB1Q6HQGnPn79rXCNrdTJnlWjg71mfHcfjXixuMPkxLg0k%2FM0AuIsGthRlx9G1t99%2BJ1umhKgEpyTZoS7fGvdAVb%2Fg3wHb9lunwA%2Bp3D8snHlQq5q3G186pej6s%2FaAZ86lcjHaCLO3h9hMmQ9bcbbFKeP6KfHgXZ1vwGsGyVWcKhZSsQTxaTkP1mgIUF71bHyc4456wdO3260yysTzy36qeliDvj57eJS%2BPnu9%2FHV9pL52kiFAYwzo4UbonKQ7HdO%2Fr6v8LcHbQEjVtassOZqaRJ32BZcP64qltOupZwnHZjn0PhYRn2isZgHnnrQUeT4rv23wdZqrZpWzzGyEmLJ7SeYraM6JeNogOJlrGYtzubxQ%2BT1EKJX6sKyf1r5fVfX96EB8vPib7QDG3XjvDFnL4byQF1OL0NeOXupl8%2Bs5zHVfB%2FSJdf%2Fy54LHLS5FfuQt4pNVOA39DdkUmI3aelongh7i%2B6mUc1U6dFNgvg55%2FgNL3cXZV75ugLlY6kmVjn%2FEyJBgUvQBJuEr%2BDYg79besaORDpGxUiWirO3bnSE5vLjdpmxKoMfxQqNDJMNrjDOoILSBjqkAUkg2%2B6E3VkM1KmMe8owvOp0ydjT9PAI8lnVOg2%2BtEshmMPJ8yY6eV08ykLRychrKy5lrB0xyxDEKr4pDLezhgammHXUtPCvWcl9Dg5dkMJkGsqk8e6DyyGu%2FiLVzYIcCZkNCylU%2Bw8e7iCmQTV5UGoBg7EkCXJO89DX9d7sH6XoitcEqeMm%2FraJzsSGabE28ym64AgUmziaxDClUH%2Fx0CA3OnRW&X-Amz-Signature=9ac39d9b97f5c2cb841ee3958406000069958d34ee64cba92c8982c69a4f53c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3EVNKVZ%2F20260628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260628T035259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJLoSt7J%2F2Tjem36kEXoNaHEeUMiETGxMgP5WGB0rOxwIhANBMHV0uxLLKGV60Atpek8mY9JnpL0cLslP1R5TjerxkKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igww43%2Fnm8Rqq8pR%2Fcsq3AM9hmD1zm8ooAPy4IGQ75pemuLnZ5ZXj1U3zqm6KT3MW13tOsVU6zHA52oqcaZzB1Q6HQGnPn79rXCNrdTJnlWjg71mfHcfjXixuMPkxLg0k%2FM0AuIsGthRlx9G1t99%2BJ1umhKgEpyTZoS7fGvdAVb%2Fg3wHb9lunwA%2Bp3D8snHlQq5q3G186pej6s%2FaAZ86lcjHaCLO3h9hMmQ9bcbbFKeP6KfHgXZ1vwGsGyVWcKhZSsQTxaTkP1mgIUF71bHyc4456wdO3260yysTzy36qeliDvj57eJS%2BPnu9%2FHV9pL52kiFAYwzo4UbonKQ7HdO%2Fr6v8LcHbQEjVtassOZqaRJ32BZcP64qltOupZwnHZjn0PhYRn2isZgHnnrQUeT4rv23wdZqrZpWzzGyEmLJ7SeYraM6JeNogOJlrGYtzubxQ%2BT1EKJX6sKyf1r5fVfX96EB8vPib7QDG3XjvDFnL4byQF1OL0NeOXupl8%2Bs5zHVfB%2FSJdf%2Fy54LHLS5FfuQt4pNVOA39DdkUmI3aelongh7i%2B6mUc1U6dFNgvg55%2FgNL3cXZV75ugLlY6kmVjn%2FEyJBgUvQBJuEr%2BDYg79besaORDpGxUiWirO3bnSE5vLjdpmxKoMfxQqNDJMNrjDOoILSBjqkAUkg2%2B6E3VkM1KmMe8owvOp0ydjT9PAI8lnVOg2%2BtEshmMPJ8yY6eV08ykLRychrKy5lrB0xyxDEKr4pDLezhgammHXUtPCvWcl9Dg5dkMJkGsqk8e6DyyGu%2FiLVzYIcCZkNCylU%2Bw8e7iCmQTV5UGoBg7EkCXJO89DX9d7sH6XoitcEqeMm%2FraJzsSGabE28ym64AgUmziaxDClUH%2Fx0CA3OnRW&X-Amz-Signature=811189083b81c0b4e234ad8a6e1e3004f68417c393057a14a87b0d33029ac0a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
