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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLBAVE3T%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIGVvx6TFTW5JmR9RN%2BpwQIEhxmqZhI9mwfJrGSP8s2S1AiAnpszw%2BDBUAYivoWtApcy%2BMoQkWbZN60ONwefrdWLIjSr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM%2BxOVIm9WzF3id06JKtwDglBZ0VsmOZa7r0q9LTvtyPO2tYEIWkcHzCz64a6FYotuxlm4SU%2BlnkTRq3%2Fykjk4%2B40p1ObCpGYQsXONAzp2NrMqCYwdBN0Gr%2FbiaCbYJvfbngkMmEQU6Yj3DYNu9cPKT47AY2U9mJENriarySr1osnWgVmV%2B99ymqasaBXmicCbj2zC1Eqmdlkz4jhsdT%2B4GNWxDBW0V0IbqyTOJofkkveghqPdI46qwcNpNKIM2rTY0XBipdH9us74whHje4gvU5oEsumJUT%2BDp8Rvy6pJqQBgxcDk234k%2F3RwBIf7e%2Fr70fgMgUglesrYJxLH6IlAbPPUJYDW6S3NI8NBu9yB%2Bt69UPtbXmLdcwquo2%2FRGjreenkoJzwTPQsSL4348DsjzHDBiVB9qcFYYqmuofqmT8a2E4Jwku0nljSW5z6CNKn48q3VWBDP1EBH49oAqbTIkka%2BQsuYsh9xYJdZ6wXWHLFh4ZvQY6hidb47NIC23SZ7jWVTCxeIM4XskU43KYWUwoZU1eIjQkTsgU0oLw3H1FD6qFLlLnpT%2B9%2FigO1%2BrvoftimEfb4khsGuNakdITC01Bv5q2VgTcmlZQ%2Fkb2yApbEDDIOvkLtOtnyI4q8eAUKh%2FG2IK%2FFGQNH9cbAwhvuUyAY6pgFPaO40wKRf2%2F4AGyiOKCRV5vKHpq5e51OKa12Ovn%2BPdW6XD6E0B%2Bokps7Fxfx3xKhgtqTuOwIUGJDIIx7aSCqiafySetNtWo1k8p2sOLiMGy%2BbivwuDtQtXiouP%2BIh%2B1YAi50WslAguidNYOJ722fIFFiltozfSCC1V81Ptts99pt4kE8HqCW0FhZbBiIjv44DAD6nIHH%2FPN7tssf%2FZRa1HbAxUpYh&X-Amz-Signature=36f7bf7a4cbe71241949d1be4e91fba9ee25c3f16bfdf3add3e48e067faf8815&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLBAVE3T%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIGVvx6TFTW5JmR9RN%2BpwQIEhxmqZhI9mwfJrGSP8s2S1AiAnpszw%2BDBUAYivoWtApcy%2BMoQkWbZN60ONwefrdWLIjSr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM%2BxOVIm9WzF3id06JKtwDglBZ0VsmOZa7r0q9LTvtyPO2tYEIWkcHzCz64a6FYotuxlm4SU%2BlnkTRq3%2Fykjk4%2B40p1ObCpGYQsXONAzp2NrMqCYwdBN0Gr%2FbiaCbYJvfbngkMmEQU6Yj3DYNu9cPKT47AY2U9mJENriarySr1osnWgVmV%2B99ymqasaBXmicCbj2zC1Eqmdlkz4jhsdT%2B4GNWxDBW0V0IbqyTOJofkkveghqPdI46qwcNpNKIM2rTY0XBipdH9us74whHje4gvU5oEsumJUT%2BDp8Rvy6pJqQBgxcDk234k%2F3RwBIf7e%2Fr70fgMgUglesrYJxLH6IlAbPPUJYDW6S3NI8NBu9yB%2Bt69UPtbXmLdcwquo2%2FRGjreenkoJzwTPQsSL4348DsjzHDBiVB9qcFYYqmuofqmT8a2E4Jwku0nljSW5z6CNKn48q3VWBDP1EBH49oAqbTIkka%2BQsuYsh9xYJdZ6wXWHLFh4ZvQY6hidb47NIC23SZ7jWVTCxeIM4XskU43KYWUwoZU1eIjQkTsgU0oLw3H1FD6qFLlLnpT%2B9%2FigO1%2BrvoftimEfb4khsGuNakdITC01Bv5q2VgTcmlZQ%2Fkb2yApbEDDIOvkLtOtnyI4q8eAUKh%2FG2IK%2FFGQNH9cbAwhvuUyAY6pgFPaO40wKRf2%2F4AGyiOKCRV5vKHpq5e51OKa12Ovn%2BPdW6XD6E0B%2Bokps7Fxfx3xKhgtqTuOwIUGJDIIx7aSCqiafySetNtWo1k8p2sOLiMGy%2BbivwuDtQtXiouP%2BIh%2B1YAi50WslAguidNYOJ722fIFFiltozfSCC1V81Ptts99pt4kE8HqCW0FhZbBiIjv44DAD6nIHH%2FPN7tssf%2FZRa1HbAxUpYh&X-Amz-Signature=576e162c2eb16bd994169512265801d4c83677dc1dc05445947fa7b89f882e2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLBAVE3T%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIGVvx6TFTW5JmR9RN%2BpwQIEhxmqZhI9mwfJrGSP8s2S1AiAnpszw%2BDBUAYivoWtApcy%2BMoQkWbZN60ONwefrdWLIjSr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM%2BxOVIm9WzF3id06JKtwDglBZ0VsmOZa7r0q9LTvtyPO2tYEIWkcHzCz64a6FYotuxlm4SU%2BlnkTRq3%2Fykjk4%2B40p1ObCpGYQsXONAzp2NrMqCYwdBN0Gr%2FbiaCbYJvfbngkMmEQU6Yj3DYNu9cPKT47AY2U9mJENriarySr1osnWgVmV%2B99ymqasaBXmicCbj2zC1Eqmdlkz4jhsdT%2B4GNWxDBW0V0IbqyTOJofkkveghqPdI46qwcNpNKIM2rTY0XBipdH9us74whHje4gvU5oEsumJUT%2BDp8Rvy6pJqQBgxcDk234k%2F3RwBIf7e%2Fr70fgMgUglesrYJxLH6IlAbPPUJYDW6S3NI8NBu9yB%2Bt69UPtbXmLdcwquo2%2FRGjreenkoJzwTPQsSL4348DsjzHDBiVB9qcFYYqmuofqmT8a2E4Jwku0nljSW5z6CNKn48q3VWBDP1EBH49oAqbTIkka%2BQsuYsh9xYJdZ6wXWHLFh4ZvQY6hidb47NIC23SZ7jWVTCxeIM4XskU43KYWUwoZU1eIjQkTsgU0oLw3H1FD6qFLlLnpT%2B9%2FigO1%2BrvoftimEfb4khsGuNakdITC01Bv5q2VgTcmlZQ%2Fkb2yApbEDDIOvkLtOtnyI4q8eAUKh%2FG2IK%2FFGQNH9cbAwhvuUyAY6pgFPaO40wKRf2%2F4AGyiOKCRV5vKHpq5e51OKa12Ovn%2BPdW6XD6E0B%2Bokps7Fxfx3xKhgtqTuOwIUGJDIIx7aSCqiafySetNtWo1k8p2sOLiMGy%2BbivwuDtQtXiouP%2BIh%2B1YAi50WslAguidNYOJ722fIFFiltozfSCC1V81Ptts99pt4kE8HqCW0FhZbBiIjv44DAD6nIHH%2FPN7tssf%2FZRa1HbAxUpYh&X-Amz-Signature=dbcdad9227b4157ca9f8bea4486e52477f6af3c44a53be00a903232b02c7ea15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLBAVE3T%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIGVvx6TFTW5JmR9RN%2BpwQIEhxmqZhI9mwfJrGSP8s2S1AiAnpszw%2BDBUAYivoWtApcy%2BMoQkWbZN60ONwefrdWLIjSr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM%2BxOVIm9WzF3id06JKtwDglBZ0VsmOZa7r0q9LTvtyPO2tYEIWkcHzCz64a6FYotuxlm4SU%2BlnkTRq3%2Fykjk4%2B40p1ObCpGYQsXONAzp2NrMqCYwdBN0Gr%2FbiaCbYJvfbngkMmEQU6Yj3DYNu9cPKT47AY2U9mJENriarySr1osnWgVmV%2B99ymqasaBXmicCbj2zC1Eqmdlkz4jhsdT%2B4GNWxDBW0V0IbqyTOJofkkveghqPdI46qwcNpNKIM2rTY0XBipdH9us74whHje4gvU5oEsumJUT%2BDp8Rvy6pJqQBgxcDk234k%2F3RwBIf7e%2Fr70fgMgUglesrYJxLH6IlAbPPUJYDW6S3NI8NBu9yB%2Bt69UPtbXmLdcwquo2%2FRGjreenkoJzwTPQsSL4348DsjzHDBiVB9qcFYYqmuofqmT8a2E4Jwku0nljSW5z6CNKn48q3VWBDP1EBH49oAqbTIkka%2BQsuYsh9xYJdZ6wXWHLFh4ZvQY6hidb47NIC23SZ7jWVTCxeIM4XskU43KYWUwoZU1eIjQkTsgU0oLw3H1FD6qFLlLnpT%2B9%2FigO1%2BrvoftimEfb4khsGuNakdITC01Bv5q2VgTcmlZQ%2Fkb2yApbEDDIOvkLtOtnyI4q8eAUKh%2FG2IK%2FFGQNH9cbAwhvuUyAY6pgFPaO40wKRf2%2F4AGyiOKCRV5vKHpq5e51OKa12Ovn%2BPdW6XD6E0B%2Bokps7Fxfx3xKhgtqTuOwIUGJDIIx7aSCqiafySetNtWo1k8p2sOLiMGy%2BbivwuDtQtXiouP%2BIh%2B1YAi50WslAguidNYOJ722fIFFiltozfSCC1V81Ptts99pt4kE8HqCW0FhZbBiIjv44DAD6nIHH%2FPN7tssf%2FZRa1HbAxUpYh&X-Amz-Signature=8f13de473c33cd64841fcb02bfbe0e730938ec65c45794f7cab4dfdbeeb1f496&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLBAVE3T%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIGVvx6TFTW5JmR9RN%2BpwQIEhxmqZhI9mwfJrGSP8s2S1AiAnpszw%2BDBUAYivoWtApcy%2BMoQkWbZN60ONwefrdWLIjSr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM%2BxOVIm9WzF3id06JKtwDglBZ0VsmOZa7r0q9LTvtyPO2tYEIWkcHzCz64a6FYotuxlm4SU%2BlnkTRq3%2Fykjk4%2B40p1ObCpGYQsXONAzp2NrMqCYwdBN0Gr%2FbiaCbYJvfbngkMmEQU6Yj3DYNu9cPKT47AY2U9mJENriarySr1osnWgVmV%2B99ymqasaBXmicCbj2zC1Eqmdlkz4jhsdT%2B4GNWxDBW0V0IbqyTOJofkkveghqPdI46qwcNpNKIM2rTY0XBipdH9us74whHje4gvU5oEsumJUT%2BDp8Rvy6pJqQBgxcDk234k%2F3RwBIf7e%2Fr70fgMgUglesrYJxLH6IlAbPPUJYDW6S3NI8NBu9yB%2Bt69UPtbXmLdcwquo2%2FRGjreenkoJzwTPQsSL4348DsjzHDBiVB9qcFYYqmuofqmT8a2E4Jwku0nljSW5z6CNKn48q3VWBDP1EBH49oAqbTIkka%2BQsuYsh9xYJdZ6wXWHLFh4ZvQY6hidb47NIC23SZ7jWVTCxeIM4XskU43KYWUwoZU1eIjQkTsgU0oLw3H1FD6qFLlLnpT%2B9%2FigO1%2BrvoftimEfb4khsGuNakdITC01Bv5q2VgTcmlZQ%2Fkb2yApbEDDIOvkLtOtnyI4q8eAUKh%2FG2IK%2FFGQNH9cbAwhvuUyAY6pgFPaO40wKRf2%2F4AGyiOKCRV5vKHpq5e51OKa12Ovn%2BPdW6XD6E0B%2Bokps7Fxfx3xKhgtqTuOwIUGJDIIx7aSCqiafySetNtWo1k8p2sOLiMGy%2BbivwuDtQtXiouP%2BIh%2B1YAi50WslAguidNYOJ722fIFFiltozfSCC1V81Ptts99pt4kE8HqCW0FhZbBiIjv44DAD6nIHH%2FPN7tssf%2FZRa1HbAxUpYh&X-Amz-Signature=a1e945145408b6ef0f1f4f5c2481b1762573dbe50f84bf60dfb7047b75bef2c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLBAVE3T%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIGVvx6TFTW5JmR9RN%2BpwQIEhxmqZhI9mwfJrGSP8s2S1AiAnpszw%2BDBUAYivoWtApcy%2BMoQkWbZN60ONwefrdWLIjSr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM%2BxOVIm9WzF3id06JKtwDglBZ0VsmOZa7r0q9LTvtyPO2tYEIWkcHzCz64a6FYotuxlm4SU%2BlnkTRq3%2Fykjk4%2B40p1ObCpGYQsXONAzp2NrMqCYwdBN0Gr%2FbiaCbYJvfbngkMmEQU6Yj3DYNu9cPKT47AY2U9mJENriarySr1osnWgVmV%2B99ymqasaBXmicCbj2zC1Eqmdlkz4jhsdT%2B4GNWxDBW0V0IbqyTOJofkkveghqPdI46qwcNpNKIM2rTY0XBipdH9us74whHje4gvU5oEsumJUT%2BDp8Rvy6pJqQBgxcDk234k%2F3RwBIf7e%2Fr70fgMgUglesrYJxLH6IlAbPPUJYDW6S3NI8NBu9yB%2Bt69UPtbXmLdcwquo2%2FRGjreenkoJzwTPQsSL4348DsjzHDBiVB9qcFYYqmuofqmT8a2E4Jwku0nljSW5z6CNKn48q3VWBDP1EBH49oAqbTIkka%2BQsuYsh9xYJdZ6wXWHLFh4ZvQY6hidb47NIC23SZ7jWVTCxeIM4XskU43KYWUwoZU1eIjQkTsgU0oLw3H1FD6qFLlLnpT%2B9%2FigO1%2BrvoftimEfb4khsGuNakdITC01Bv5q2VgTcmlZQ%2Fkb2yApbEDDIOvkLtOtnyI4q8eAUKh%2FG2IK%2FFGQNH9cbAwhvuUyAY6pgFPaO40wKRf2%2F4AGyiOKCRV5vKHpq5e51OKa12Ovn%2BPdW6XD6E0B%2Bokps7Fxfx3xKhgtqTuOwIUGJDIIx7aSCqiafySetNtWo1k8p2sOLiMGy%2BbivwuDtQtXiouP%2BIh%2B1YAi50WslAguidNYOJ722fIFFiltozfSCC1V81Ptts99pt4kE8HqCW0FhZbBiIjv44DAD6nIHH%2FPN7tssf%2FZRa1HbAxUpYh&X-Amz-Signature=472f75eecea334ee06fc080949977adfa479ca240d205b38588b26c9222ac189&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLBAVE3T%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIGVvx6TFTW5JmR9RN%2BpwQIEhxmqZhI9mwfJrGSP8s2S1AiAnpszw%2BDBUAYivoWtApcy%2BMoQkWbZN60ONwefrdWLIjSr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM%2BxOVIm9WzF3id06JKtwDglBZ0VsmOZa7r0q9LTvtyPO2tYEIWkcHzCz64a6FYotuxlm4SU%2BlnkTRq3%2Fykjk4%2B40p1ObCpGYQsXONAzp2NrMqCYwdBN0Gr%2FbiaCbYJvfbngkMmEQU6Yj3DYNu9cPKT47AY2U9mJENriarySr1osnWgVmV%2B99ymqasaBXmicCbj2zC1Eqmdlkz4jhsdT%2B4GNWxDBW0V0IbqyTOJofkkveghqPdI46qwcNpNKIM2rTY0XBipdH9us74whHje4gvU5oEsumJUT%2BDp8Rvy6pJqQBgxcDk234k%2F3RwBIf7e%2Fr70fgMgUglesrYJxLH6IlAbPPUJYDW6S3NI8NBu9yB%2Bt69UPtbXmLdcwquo2%2FRGjreenkoJzwTPQsSL4348DsjzHDBiVB9qcFYYqmuofqmT8a2E4Jwku0nljSW5z6CNKn48q3VWBDP1EBH49oAqbTIkka%2BQsuYsh9xYJdZ6wXWHLFh4ZvQY6hidb47NIC23SZ7jWVTCxeIM4XskU43KYWUwoZU1eIjQkTsgU0oLw3H1FD6qFLlLnpT%2B9%2FigO1%2BrvoftimEfb4khsGuNakdITC01Bv5q2VgTcmlZQ%2Fkb2yApbEDDIOvkLtOtnyI4q8eAUKh%2FG2IK%2FFGQNH9cbAwhvuUyAY6pgFPaO40wKRf2%2F4AGyiOKCRV5vKHpq5e51OKa12Ovn%2BPdW6XD6E0B%2Bokps7Fxfx3xKhgtqTuOwIUGJDIIx7aSCqiafySetNtWo1k8p2sOLiMGy%2BbivwuDtQtXiouP%2BIh%2B1YAi50WslAguidNYOJ722fIFFiltozfSCC1V81Ptts99pt4kE8HqCW0FhZbBiIjv44DAD6nIHH%2FPN7tssf%2FZRa1HbAxUpYh&X-Amz-Signature=f5adf18c9b67ed4fe79f89c7ba30d0584fc2af95d47cf829a043443c3d5f013e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLBAVE3T%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIGVvx6TFTW5JmR9RN%2BpwQIEhxmqZhI9mwfJrGSP8s2S1AiAnpszw%2BDBUAYivoWtApcy%2BMoQkWbZN60ONwefrdWLIjSr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM%2BxOVIm9WzF3id06JKtwDglBZ0VsmOZa7r0q9LTvtyPO2tYEIWkcHzCz64a6FYotuxlm4SU%2BlnkTRq3%2Fykjk4%2B40p1ObCpGYQsXONAzp2NrMqCYwdBN0Gr%2FbiaCbYJvfbngkMmEQU6Yj3DYNu9cPKT47AY2U9mJENriarySr1osnWgVmV%2B99ymqasaBXmicCbj2zC1Eqmdlkz4jhsdT%2B4GNWxDBW0V0IbqyTOJofkkveghqPdI46qwcNpNKIM2rTY0XBipdH9us74whHje4gvU5oEsumJUT%2BDp8Rvy6pJqQBgxcDk234k%2F3RwBIf7e%2Fr70fgMgUglesrYJxLH6IlAbPPUJYDW6S3NI8NBu9yB%2Bt69UPtbXmLdcwquo2%2FRGjreenkoJzwTPQsSL4348DsjzHDBiVB9qcFYYqmuofqmT8a2E4Jwku0nljSW5z6CNKn48q3VWBDP1EBH49oAqbTIkka%2BQsuYsh9xYJdZ6wXWHLFh4ZvQY6hidb47NIC23SZ7jWVTCxeIM4XskU43KYWUwoZU1eIjQkTsgU0oLw3H1FD6qFLlLnpT%2B9%2FigO1%2BrvoftimEfb4khsGuNakdITC01Bv5q2VgTcmlZQ%2Fkb2yApbEDDIOvkLtOtnyI4q8eAUKh%2FG2IK%2FFGQNH9cbAwhvuUyAY6pgFPaO40wKRf2%2F4AGyiOKCRV5vKHpq5e51OKa12Ovn%2BPdW6XD6E0B%2Bokps7Fxfx3xKhgtqTuOwIUGJDIIx7aSCqiafySetNtWo1k8p2sOLiMGy%2BbivwuDtQtXiouP%2BIh%2B1YAi50WslAguidNYOJ722fIFFiltozfSCC1V81Ptts99pt4kE8HqCW0FhZbBiIjv44DAD6nIHH%2FPN7tssf%2FZRa1HbAxUpYh&X-Amz-Signature=ca7e6cc71ac90b81ce605ee6ab9dc6e5ff05d3a9ec0d699bd16633ba939c0af1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLBAVE3T%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIGVvx6TFTW5JmR9RN%2BpwQIEhxmqZhI9mwfJrGSP8s2S1AiAnpszw%2BDBUAYivoWtApcy%2BMoQkWbZN60ONwefrdWLIjSr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM%2BxOVIm9WzF3id06JKtwDglBZ0VsmOZa7r0q9LTvtyPO2tYEIWkcHzCz64a6FYotuxlm4SU%2BlnkTRq3%2Fykjk4%2B40p1ObCpGYQsXONAzp2NrMqCYwdBN0Gr%2FbiaCbYJvfbngkMmEQU6Yj3DYNu9cPKT47AY2U9mJENriarySr1osnWgVmV%2B99ymqasaBXmicCbj2zC1Eqmdlkz4jhsdT%2B4GNWxDBW0V0IbqyTOJofkkveghqPdI46qwcNpNKIM2rTY0XBipdH9us74whHje4gvU5oEsumJUT%2BDp8Rvy6pJqQBgxcDk234k%2F3RwBIf7e%2Fr70fgMgUglesrYJxLH6IlAbPPUJYDW6S3NI8NBu9yB%2Bt69UPtbXmLdcwquo2%2FRGjreenkoJzwTPQsSL4348DsjzHDBiVB9qcFYYqmuofqmT8a2E4Jwku0nljSW5z6CNKn48q3VWBDP1EBH49oAqbTIkka%2BQsuYsh9xYJdZ6wXWHLFh4ZvQY6hidb47NIC23SZ7jWVTCxeIM4XskU43KYWUwoZU1eIjQkTsgU0oLw3H1FD6qFLlLnpT%2B9%2FigO1%2BrvoftimEfb4khsGuNakdITC01Bv5q2VgTcmlZQ%2Fkb2yApbEDDIOvkLtOtnyI4q8eAUKh%2FG2IK%2FFGQNH9cbAwhvuUyAY6pgFPaO40wKRf2%2F4AGyiOKCRV5vKHpq5e51OKa12Ovn%2BPdW6XD6E0B%2Bokps7Fxfx3xKhgtqTuOwIUGJDIIx7aSCqiafySetNtWo1k8p2sOLiMGy%2BbivwuDtQtXiouP%2BIh%2B1YAi50WslAguidNYOJ722fIFFiltozfSCC1V81Ptts99pt4kE8HqCW0FhZbBiIjv44DAD6nIHH%2FPN7tssf%2FZRa1HbAxUpYh&X-Amz-Signature=abf9f763fdbdcb22b2d7c67e8adf093e4b799ed81e5d0e63616cd22257478f72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLBAVE3T%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIGVvx6TFTW5JmR9RN%2BpwQIEhxmqZhI9mwfJrGSP8s2S1AiAnpszw%2BDBUAYivoWtApcy%2BMoQkWbZN60ONwefrdWLIjSr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM%2BxOVIm9WzF3id06JKtwDglBZ0VsmOZa7r0q9LTvtyPO2tYEIWkcHzCz64a6FYotuxlm4SU%2BlnkTRq3%2Fykjk4%2B40p1ObCpGYQsXONAzp2NrMqCYwdBN0Gr%2FbiaCbYJvfbngkMmEQU6Yj3DYNu9cPKT47AY2U9mJENriarySr1osnWgVmV%2B99ymqasaBXmicCbj2zC1Eqmdlkz4jhsdT%2B4GNWxDBW0V0IbqyTOJofkkveghqPdI46qwcNpNKIM2rTY0XBipdH9us74whHje4gvU5oEsumJUT%2BDp8Rvy6pJqQBgxcDk234k%2F3RwBIf7e%2Fr70fgMgUglesrYJxLH6IlAbPPUJYDW6S3NI8NBu9yB%2Bt69UPtbXmLdcwquo2%2FRGjreenkoJzwTPQsSL4348DsjzHDBiVB9qcFYYqmuofqmT8a2E4Jwku0nljSW5z6CNKn48q3VWBDP1EBH49oAqbTIkka%2BQsuYsh9xYJdZ6wXWHLFh4ZvQY6hidb47NIC23SZ7jWVTCxeIM4XskU43KYWUwoZU1eIjQkTsgU0oLw3H1FD6qFLlLnpT%2B9%2FigO1%2BrvoftimEfb4khsGuNakdITC01Bv5q2VgTcmlZQ%2Fkb2yApbEDDIOvkLtOtnyI4q8eAUKh%2FG2IK%2FFGQNH9cbAwhvuUyAY6pgFPaO40wKRf2%2F4AGyiOKCRV5vKHpq5e51OKa12Ovn%2BPdW6XD6E0B%2Bokps7Fxfx3xKhgtqTuOwIUGJDIIx7aSCqiafySetNtWo1k8p2sOLiMGy%2BbivwuDtQtXiouP%2BIh%2B1YAi50WslAguidNYOJ722fIFFiltozfSCC1V81Ptts99pt4kE8HqCW0FhZbBiIjv44DAD6nIHH%2FPN7tssf%2FZRa1HbAxUpYh&X-Amz-Signature=66bae2e74dd534f4bc5475e47298b9865f24953acbd8644342ff91847fb6779a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLBAVE3T%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIGVvx6TFTW5JmR9RN%2BpwQIEhxmqZhI9mwfJrGSP8s2S1AiAnpszw%2BDBUAYivoWtApcy%2BMoQkWbZN60ONwefrdWLIjSr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM%2BxOVIm9WzF3id06JKtwDglBZ0VsmOZa7r0q9LTvtyPO2tYEIWkcHzCz64a6FYotuxlm4SU%2BlnkTRq3%2Fykjk4%2B40p1ObCpGYQsXONAzp2NrMqCYwdBN0Gr%2FbiaCbYJvfbngkMmEQU6Yj3DYNu9cPKT47AY2U9mJENriarySr1osnWgVmV%2B99ymqasaBXmicCbj2zC1Eqmdlkz4jhsdT%2B4GNWxDBW0V0IbqyTOJofkkveghqPdI46qwcNpNKIM2rTY0XBipdH9us74whHje4gvU5oEsumJUT%2BDp8Rvy6pJqQBgxcDk234k%2F3RwBIf7e%2Fr70fgMgUglesrYJxLH6IlAbPPUJYDW6S3NI8NBu9yB%2Bt69UPtbXmLdcwquo2%2FRGjreenkoJzwTPQsSL4348DsjzHDBiVB9qcFYYqmuofqmT8a2E4Jwku0nljSW5z6CNKn48q3VWBDP1EBH49oAqbTIkka%2BQsuYsh9xYJdZ6wXWHLFh4ZvQY6hidb47NIC23SZ7jWVTCxeIM4XskU43KYWUwoZU1eIjQkTsgU0oLw3H1FD6qFLlLnpT%2B9%2FigO1%2BrvoftimEfb4khsGuNakdITC01Bv5q2VgTcmlZQ%2Fkb2yApbEDDIOvkLtOtnyI4q8eAUKh%2FG2IK%2FFGQNH9cbAwhvuUyAY6pgFPaO40wKRf2%2F4AGyiOKCRV5vKHpq5e51OKa12Ovn%2BPdW6XD6E0B%2Bokps7Fxfx3xKhgtqTuOwIUGJDIIx7aSCqiafySetNtWo1k8p2sOLiMGy%2BbivwuDtQtXiouP%2BIh%2B1YAi50WslAguidNYOJ722fIFFiltozfSCC1V81Ptts99pt4kE8HqCW0FhZbBiIjv44DAD6nIHH%2FPN7tssf%2FZRa1HbAxUpYh&X-Amz-Signature=a3107e0e1ad0e83df6e8329d5bd0a028a8d37e0b6572a6150ec2a7faa0c7dc5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLBAVE3T%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIGVvx6TFTW5JmR9RN%2BpwQIEhxmqZhI9mwfJrGSP8s2S1AiAnpszw%2BDBUAYivoWtApcy%2BMoQkWbZN60ONwefrdWLIjSr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM%2BxOVIm9WzF3id06JKtwDglBZ0VsmOZa7r0q9LTvtyPO2tYEIWkcHzCz64a6FYotuxlm4SU%2BlnkTRq3%2Fykjk4%2B40p1ObCpGYQsXONAzp2NrMqCYwdBN0Gr%2FbiaCbYJvfbngkMmEQU6Yj3DYNu9cPKT47AY2U9mJENriarySr1osnWgVmV%2B99ymqasaBXmicCbj2zC1Eqmdlkz4jhsdT%2B4GNWxDBW0V0IbqyTOJofkkveghqPdI46qwcNpNKIM2rTY0XBipdH9us74whHje4gvU5oEsumJUT%2BDp8Rvy6pJqQBgxcDk234k%2F3RwBIf7e%2Fr70fgMgUglesrYJxLH6IlAbPPUJYDW6S3NI8NBu9yB%2Bt69UPtbXmLdcwquo2%2FRGjreenkoJzwTPQsSL4348DsjzHDBiVB9qcFYYqmuofqmT8a2E4Jwku0nljSW5z6CNKn48q3VWBDP1EBH49oAqbTIkka%2BQsuYsh9xYJdZ6wXWHLFh4ZvQY6hidb47NIC23SZ7jWVTCxeIM4XskU43KYWUwoZU1eIjQkTsgU0oLw3H1FD6qFLlLnpT%2B9%2FigO1%2BrvoftimEfb4khsGuNakdITC01Bv5q2VgTcmlZQ%2Fkb2yApbEDDIOvkLtOtnyI4q8eAUKh%2FG2IK%2FFGQNH9cbAwhvuUyAY6pgFPaO40wKRf2%2F4AGyiOKCRV5vKHpq5e51OKa12Ovn%2BPdW6XD6E0B%2Bokps7Fxfx3xKhgtqTuOwIUGJDIIx7aSCqiafySetNtWo1k8p2sOLiMGy%2BbivwuDtQtXiouP%2BIh%2B1YAi50WslAguidNYOJ722fIFFiltozfSCC1V81Ptts99pt4kE8HqCW0FhZbBiIjv44DAD6nIHH%2FPN7tssf%2FZRa1HbAxUpYh&X-Amz-Signature=713ab6ab5a4245336a51f545ab09194566b74add2b0edd1b660157aa69edeac6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLBAVE3T%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIGVvx6TFTW5JmR9RN%2BpwQIEhxmqZhI9mwfJrGSP8s2S1AiAnpszw%2BDBUAYivoWtApcy%2BMoQkWbZN60ONwefrdWLIjSr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM%2BxOVIm9WzF3id06JKtwDglBZ0VsmOZa7r0q9LTvtyPO2tYEIWkcHzCz64a6FYotuxlm4SU%2BlnkTRq3%2Fykjk4%2B40p1ObCpGYQsXONAzp2NrMqCYwdBN0Gr%2FbiaCbYJvfbngkMmEQU6Yj3DYNu9cPKT47AY2U9mJENriarySr1osnWgVmV%2B99ymqasaBXmicCbj2zC1Eqmdlkz4jhsdT%2B4GNWxDBW0V0IbqyTOJofkkveghqPdI46qwcNpNKIM2rTY0XBipdH9us74whHje4gvU5oEsumJUT%2BDp8Rvy6pJqQBgxcDk234k%2F3RwBIf7e%2Fr70fgMgUglesrYJxLH6IlAbPPUJYDW6S3NI8NBu9yB%2Bt69UPtbXmLdcwquo2%2FRGjreenkoJzwTPQsSL4348DsjzHDBiVB9qcFYYqmuofqmT8a2E4Jwku0nljSW5z6CNKn48q3VWBDP1EBH49oAqbTIkka%2BQsuYsh9xYJdZ6wXWHLFh4ZvQY6hidb47NIC23SZ7jWVTCxeIM4XskU43KYWUwoZU1eIjQkTsgU0oLw3H1FD6qFLlLnpT%2B9%2FigO1%2BrvoftimEfb4khsGuNakdITC01Bv5q2VgTcmlZQ%2Fkb2yApbEDDIOvkLtOtnyI4q8eAUKh%2FG2IK%2FFGQNH9cbAwhvuUyAY6pgFPaO40wKRf2%2F4AGyiOKCRV5vKHpq5e51OKa12Ovn%2BPdW6XD6E0B%2Bokps7Fxfx3xKhgtqTuOwIUGJDIIx7aSCqiafySetNtWo1k8p2sOLiMGy%2BbivwuDtQtXiouP%2BIh%2B1YAi50WslAguidNYOJ722fIFFiltozfSCC1V81Ptts99pt4kE8HqCW0FhZbBiIjv44DAD6nIHH%2FPN7tssf%2FZRa1HbAxUpYh&X-Amz-Signature=63b4ecca78c2c4b7c296e580630d5b8d0017c4a19eae8d27ad2df91a1ea5f02b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLBAVE3T%2F20251101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251101T014040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIGVvx6TFTW5JmR9RN%2BpwQIEhxmqZhI9mwfJrGSP8s2S1AiAnpszw%2BDBUAYivoWtApcy%2BMoQkWbZN60ONwefrdWLIjSr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM%2BxOVIm9WzF3id06JKtwDglBZ0VsmOZa7r0q9LTvtyPO2tYEIWkcHzCz64a6FYotuxlm4SU%2BlnkTRq3%2Fykjk4%2B40p1ObCpGYQsXONAzp2NrMqCYwdBN0Gr%2FbiaCbYJvfbngkMmEQU6Yj3DYNu9cPKT47AY2U9mJENriarySr1osnWgVmV%2B99ymqasaBXmicCbj2zC1Eqmdlkz4jhsdT%2B4GNWxDBW0V0IbqyTOJofkkveghqPdI46qwcNpNKIM2rTY0XBipdH9us74whHje4gvU5oEsumJUT%2BDp8Rvy6pJqQBgxcDk234k%2F3RwBIf7e%2Fr70fgMgUglesrYJxLH6IlAbPPUJYDW6S3NI8NBu9yB%2Bt69UPtbXmLdcwquo2%2FRGjreenkoJzwTPQsSL4348DsjzHDBiVB9qcFYYqmuofqmT8a2E4Jwku0nljSW5z6CNKn48q3VWBDP1EBH49oAqbTIkka%2BQsuYsh9xYJdZ6wXWHLFh4ZvQY6hidb47NIC23SZ7jWVTCxeIM4XskU43KYWUwoZU1eIjQkTsgU0oLw3H1FD6qFLlLnpT%2B9%2FigO1%2BrvoftimEfb4khsGuNakdITC01Bv5q2VgTcmlZQ%2Fkb2yApbEDDIOvkLtOtnyI4q8eAUKh%2FG2IK%2FFGQNH9cbAwhvuUyAY6pgFPaO40wKRf2%2F4AGyiOKCRV5vKHpq5e51OKa12Ovn%2BPdW6XD6E0B%2Bokps7Fxfx3xKhgtqTuOwIUGJDIIx7aSCqiafySetNtWo1k8p2sOLiMGy%2BbivwuDtQtXiouP%2BIh%2B1YAi50WslAguidNYOJ722fIFFiltozfSCC1V81Ptts99pt4kE8HqCW0FhZbBiIjv44DAD6nIHH%2FPN7tssf%2FZRa1HbAxUpYh&X-Amz-Signature=2417ba5de4d110c6725d541a55e030db7ba9a046100c0fb156d7d9bd2160205c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
