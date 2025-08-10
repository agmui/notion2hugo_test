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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676EVI3EJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOFr5uN0GxcfzqeuThR9l4U2bFhteMhHsyG3djf6whUAiEA%2FDoP0FNO%2FApHQBn9aKvpXljEKWCMQemJRfIUCOKHUMwqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPR%2FqO%2FQHOnlimvwzCrcA%2BTzMUK4FJELdJ7SvH9CSINMT%2BA1aSpI6vFTbbwp81JxlYYXOxECeb5ezoUkKkFnGlq8Pu2ldGn3ysXfqCJatnxgT3X3%2Fp2UeiKIyK6E4WoCpmD5Tpl%2FW9BP%2FEaZyK51clizY1D%2BlqYYO26y56i08W%2FdC%2BpFbwoZsaj51BRES4HcGLOBlicw19m83TkJuHljmyBgcylQgu4qxCgJMLDXZW64ruY2dakEl4UMCwOuQAjAUnBwrnMRKJQ8EH%2FCGTBxtTDDpPMszYSRWyeibNAbLvhQTzUcjTPnMHHoHPuCfOj28goBX%2Fmv0J6LFDrAd7U9mGN%2FsdmV%2FcvhsvLV%2F%2BLZQtszGouzX8fa9%2Be%2BevbBC7pcbtbgkXMsazaamWpPQkuZb51pG9XtvgQo7pYPPJsdDd18RzcVLPHHr9ob65MU0xH5%2B1UfCIpwFrna1zHaxUYcyNwl2%2Fsp8kMWSclLOnoMO4iwweXJJZUIKO5BUMaUxeSPnc7pwWH3qc%2FVdW05D9UitzCYixi9E7WG1Duul%2FYJTA5yErGGJOyXrjw3uhdujru1i5vC2sNzTYgqWhZTnn1a6cQaeZU6gKET%2BDGftS6roQfouqPvweyrppZYc81W2mDvTSq%2FkuGw%2BpOhnbn3MJ3v4cQGOqUBM7x0t16j%2B4YOleFqoK2vVs%2F%2BJqJzvM0QsiuxACkURqHDVNY0DOeK8TbQCAX4EQJR7EMdeDT3s4gEf9njdU7vi8Hz2Vvdk%2B4MgpDuFkrgHOipn4q1uAVSZ86SB3WfKrOrEsmMsLumPorWPXn6KWzMI7z2ztuCzYd9hMKd3tX4SjqFA8akktvo6O5HeN8arK6fWra%2BcS8r%2FqVnif05QxZjrM5ub2LA&X-Amz-Signature=420ece99241fc2202e901a0c937e3c0df8064307fd38e7e43d2c480a98faaa50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676EVI3EJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOFr5uN0GxcfzqeuThR9l4U2bFhteMhHsyG3djf6whUAiEA%2FDoP0FNO%2FApHQBn9aKvpXljEKWCMQemJRfIUCOKHUMwqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPR%2FqO%2FQHOnlimvwzCrcA%2BTzMUK4FJELdJ7SvH9CSINMT%2BA1aSpI6vFTbbwp81JxlYYXOxECeb5ezoUkKkFnGlq8Pu2ldGn3ysXfqCJatnxgT3X3%2Fp2UeiKIyK6E4WoCpmD5Tpl%2FW9BP%2FEaZyK51clizY1D%2BlqYYO26y56i08W%2FdC%2BpFbwoZsaj51BRES4HcGLOBlicw19m83TkJuHljmyBgcylQgu4qxCgJMLDXZW64ruY2dakEl4UMCwOuQAjAUnBwrnMRKJQ8EH%2FCGTBxtTDDpPMszYSRWyeibNAbLvhQTzUcjTPnMHHoHPuCfOj28goBX%2Fmv0J6LFDrAd7U9mGN%2FsdmV%2FcvhsvLV%2F%2BLZQtszGouzX8fa9%2Be%2BevbBC7pcbtbgkXMsazaamWpPQkuZb51pG9XtvgQo7pYPPJsdDd18RzcVLPHHr9ob65MU0xH5%2B1UfCIpwFrna1zHaxUYcyNwl2%2Fsp8kMWSclLOnoMO4iwweXJJZUIKO5BUMaUxeSPnc7pwWH3qc%2FVdW05D9UitzCYixi9E7WG1Duul%2FYJTA5yErGGJOyXrjw3uhdujru1i5vC2sNzTYgqWhZTnn1a6cQaeZU6gKET%2BDGftS6roQfouqPvweyrppZYc81W2mDvTSq%2FkuGw%2BpOhnbn3MJ3v4cQGOqUBM7x0t16j%2B4YOleFqoK2vVs%2F%2BJqJzvM0QsiuxACkURqHDVNY0DOeK8TbQCAX4EQJR7EMdeDT3s4gEf9njdU7vi8Hz2Vvdk%2B4MgpDuFkrgHOipn4q1uAVSZ86SB3WfKrOrEsmMsLumPorWPXn6KWzMI7z2ztuCzYd9hMKd3tX4SjqFA8akktvo6O5HeN8arK6fWra%2BcS8r%2FqVnif05QxZjrM5ub2LA&X-Amz-Signature=80d54ef9407f526006d83d50c089cb55b7dcbd6d527b7503d75c040baa6e7f44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676EVI3EJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOFr5uN0GxcfzqeuThR9l4U2bFhteMhHsyG3djf6whUAiEA%2FDoP0FNO%2FApHQBn9aKvpXljEKWCMQemJRfIUCOKHUMwqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPR%2FqO%2FQHOnlimvwzCrcA%2BTzMUK4FJELdJ7SvH9CSINMT%2BA1aSpI6vFTbbwp81JxlYYXOxECeb5ezoUkKkFnGlq8Pu2ldGn3ysXfqCJatnxgT3X3%2Fp2UeiKIyK6E4WoCpmD5Tpl%2FW9BP%2FEaZyK51clizY1D%2BlqYYO26y56i08W%2FdC%2BpFbwoZsaj51BRES4HcGLOBlicw19m83TkJuHljmyBgcylQgu4qxCgJMLDXZW64ruY2dakEl4UMCwOuQAjAUnBwrnMRKJQ8EH%2FCGTBxtTDDpPMszYSRWyeibNAbLvhQTzUcjTPnMHHoHPuCfOj28goBX%2Fmv0J6LFDrAd7U9mGN%2FsdmV%2FcvhsvLV%2F%2BLZQtszGouzX8fa9%2Be%2BevbBC7pcbtbgkXMsazaamWpPQkuZb51pG9XtvgQo7pYPPJsdDd18RzcVLPHHr9ob65MU0xH5%2B1UfCIpwFrna1zHaxUYcyNwl2%2Fsp8kMWSclLOnoMO4iwweXJJZUIKO5BUMaUxeSPnc7pwWH3qc%2FVdW05D9UitzCYixi9E7WG1Duul%2FYJTA5yErGGJOyXrjw3uhdujru1i5vC2sNzTYgqWhZTnn1a6cQaeZU6gKET%2BDGftS6roQfouqPvweyrppZYc81W2mDvTSq%2FkuGw%2BpOhnbn3MJ3v4cQGOqUBM7x0t16j%2B4YOleFqoK2vVs%2F%2BJqJzvM0QsiuxACkURqHDVNY0DOeK8TbQCAX4EQJR7EMdeDT3s4gEf9njdU7vi8Hz2Vvdk%2B4MgpDuFkrgHOipn4q1uAVSZ86SB3WfKrOrEsmMsLumPorWPXn6KWzMI7z2ztuCzYd9hMKd3tX4SjqFA8akktvo6O5HeN8arK6fWra%2BcS8r%2FqVnif05QxZjrM5ub2LA&X-Amz-Signature=6301efb0a94a3f1d3cfeac83b018638a76c840f8c67f0cab19cf96e132d615ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676EVI3EJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOFr5uN0GxcfzqeuThR9l4U2bFhteMhHsyG3djf6whUAiEA%2FDoP0FNO%2FApHQBn9aKvpXljEKWCMQemJRfIUCOKHUMwqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPR%2FqO%2FQHOnlimvwzCrcA%2BTzMUK4FJELdJ7SvH9CSINMT%2BA1aSpI6vFTbbwp81JxlYYXOxECeb5ezoUkKkFnGlq8Pu2ldGn3ysXfqCJatnxgT3X3%2Fp2UeiKIyK6E4WoCpmD5Tpl%2FW9BP%2FEaZyK51clizY1D%2BlqYYO26y56i08W%2FdC%2BpFbwoZsaj51BRES4HcGLOBlicw19m83TkJuHljmyBgcylQgu4qxCgJMLDXZW64ruY2dakEl4UMCwOuQAjAUnBwrnMRKJQ8EH%2FCGTBxtTDDpPMszYSRWyeibNAbLvhQTzUcjTPnMHHoHPuCfOj28goBX%2Fmv0J6LFDrAd7U9mGN%2FsdmV%2FcvhsvLV%2F%2BLZQtszGouzX8fa9%2Be%2BevbBC7pcbtbgkXMsazaamWpPQkuZb51pG9XtvgQo7pYPPJsdDd18RzcVLPHHr9ob65MU0xH5%2B1UfCIpwFrna1zHaxUYcyNwl2%2Fsp8kMWSclLOnoMO4iwweXJJZUIKO5BUMaUxeSPnc7pwWH3qc%2FVdW05D9UitzCYixi9E7WG1Duul%2FYJTA5yErGGJOyXrjw3uhdujru1i5vC2sNzTYgqWhZTnn1a6cQaeZU6gKET%2BDGftS6roQfouqPvweyrppZYc81W2mDvTSq%2FkuGw%2BpOhnbn3MJ3v4cQGOqUBM7x0t16j%2B4YOleFqoK2vVs%2F%2BJqJzvM0QsiuxACkURqHDVNY0DOeK8TbQCAX4EQJR7EMdeDT3s4gEf9njdU7vi8Hz2Vvdk%2B4MgpDuFkrgHOipn4q1uAVSZ86SB3WfKrOrEsmMsLumPorWPXn6KWzMI7z2ztuCzYd9hMKd3tX4SjqFA8akktvo6O5HeN8arK6fWra%2BcS8r%2FqVnif05QxZjrM5ub2LA&X-Amz-Signature=c23d36ee4bb9709035d4c4f5d1366f87debcaeff15ab5b2a2c26a5add3cf087f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676EVI3EJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOFr5uN0GxcfzqeuThR9l4U2bFhteMhHsyG3djf6whUAiEA%2FDoP0FNO%2FApHQBn9aKvpXljEKWCMQemJRfIUCOKHUMwqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPR%2FqO%2FQHOnlimvwzCrcA%2BTzMUK4FJELdJ7SvH9CSINMT%2BA1aSpI6vFTbbwp81JxlYYXOxECeb5ezoUkKkFnGlq8Pu2ldGn3ysXfqCJatnxgT3X3%2Fp2UeiKIyK6E4WoCpmD5Tpl%2FW9BP%2FEaZyK51clizY1D%2BlqYYO26y56i08W%2FdC%2BpFbwoZsaj51BRES4HcGLOBlicw19m83TkJuHljmyBgcylQgu4qxCgJMLDXZW64ruY2dakEl4UMCwOuQAjAUnBwrnMRKJQ8EH%2FCGTBxtTDDpPMszYSRWyeibNAbLvhQTzUcjTPnMHHoHPuCfOj28goBX%2Fmv0J6LFDrAd7U9mGN%2FsdmV%2FcvhsvLV%2F%2BLZQtszGouzX8fa9%2Be%2BevbBC7pcbtbgkXMsazaamWpPQkuZb51pG9XtvgQo7pYPPJsdDd18RzcVLPHHr9ob65MU0xH5%2B1UfCIpwFrna1zHaxUYcyNwl2%2Fsp8kMWSclLOnoMO4iwweXJJZUIKO5BUMaUxeSPnc7pwWH3qc%2FVdW05D9UitzCYixi9E7WG1Duul%2FYJTA5yErGGJOyXrjw3uhdujru1i5vC2sNzTYgqWhZTnn1a6cQaeZU6gKET%2BDGftS6roQfouqPvweyrppZYc81W2mDvTSq%2FkuGw%2BpOhnbn3MJ3v4cQGOqUBM7x0t16j%2B4YOleFqoK2vVs%2F%2BJqJzvM0QsiuxACkURqHDVNY0DOeK8TbQCAX4EQJR7EMdeDT3s4gEf9njdU7vi8Hz2Vvdk%2B4MgpDuFkrgHOipn4q1uAVSZ86SB3WfKrOrEsmMsLumPorWPXn6KWzMI7z2ztuCzYd9hMKd3tX4SjqFA8akktvo6O5HeN8arK6fWra%2BcS8r%2FqVnif05QxZjrM5ub2LA&X-Amz-Signature=4399c96c14656a4bba135664104e5a397d418da6d68860911dd846c6376084e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676EVI3EJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOFr5uN0GxcfzqeuThR9l4U2bFhteMhHsyG3djf6whUAiEA%2FDoP0FNO%2FApHQBn9aKvpXljEKWCMQemJRfIUCOKHUMwqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPR%2FqO%2FQHOnlimvwzCrcA%2BTzMUK4FJELdJ7SvH9CSINMT%2BA1aSpI6vFTbbwp81JxlYYXOxECeb5ezoUkKkFnGlq8Pu2ldGn3ysXfqCJatnxgT3X3%2Fp2UeiKIyK6E4WoCpmD5Tpl%2FW9BP%2FEaZyK51clizY1D%2BlqYYO26y56i08W%2FdC%2BpFbwoZsaj51BRES4HcGLOBlicw19m83TkJuHljmyBgcylQgu4qxCgJMLDXZW64ruY2dakEl4UMCwOuQAjAUnBwrnMRKJQ8EH%2FCGTBxtTDDpPMszYSRWyeibNAbLvhQTzUcjTPnMHHoHPuCfOj28goBX%2Fmv0J6LFDrAd7U9mGN%2FsdmV%2FcvhsvLV%2F%2BLZQtszGouzX8fa9%2Be%2BevbBC7pcbtbgkXMsazaamWpPQkuZb51pG9XtvgQo7pYPPJsdDd18RzcVLPHHr9ob65MU0xH5%2B1UfCIpwFrna1zHaxUYcyNwl2%2Fsp8kMWSclLOnoMO4iwweXJJZUIKO5BUMaUxeSPnc7pwWH3qc%2FVdW05D9UitzCYixi9E7WG1Duul%2FYJTA5yErGGJOyXrjw3uhdujru1i5vC2sNzTYgqWhZTnn1a6cQaeZU6gKET%2BDGftS6roQfouqPvweyrppZYc81W2mDvTSq%2FkuGw%2BpOhnbn3MJ3v4cQGOqUBM7x0t16j%2B4YOleFqoK2vVs%2F%2BJqJzvM0QsiuxACkURqHDVNY0DOeK8TbQCAX4EQJR7EMdeDT3s4gEf9njdU7vi8Hz2Vvdk%2B4MgpDuFkrgHOipn4q1uAVSZ86SB3WfKrOrEsmMsLumPorWPXn6KWzMI7z2ztuCzYd9hMKd3tX4SjqFA8akktvo6O5HeN8arK6fWra%2BcS8r%2FqVnif05QxZjrM5ub2LA&X-Amz-Signature=62e3bb2f2337297bf3a5438e79f02175efa30afdfb96cbab48959e72c117b3dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676EVI3EJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOFr5uN0GxcfzqeuThR9l4U2bFhteMhHsyG3djf6whUAiEA%2FDoP0FNO%2FApHQBn9aKvpXljEKWCMQemJRfIUCOKHUMwqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPR%2FqO%2FQHOnlimvwzCrcA%2BTzMUK4FJELdJ7SvH9CSINMT%2BA1aSpI6vFTbbwp81JxlYYXOxECeb5ezoUkKkFnGlq8Pu2ldGn3ysXfqCJatnxgT3X3%2Fp2UeiKIyK6E4WoCpmD5Tpl%2FW9BP%2FEaZyK51clizY1D%2BlqYYO26y56i08W%2FdC%2BpFbwoZsaj51BRES4HcGLOBlicw19m83TkJuHljmyBgcylQgu4qxCgJMLDXZW64ruY2dakEl4UMCwOuQAjAUnBwrnMRKJQ8EH%2FCGTBxtTDDpPMszYSRWyeibNAbLvhQTzUcjTPnMHHoHPuCfOj28goBX%2Fmv0J6LFDrAd7U9mGN%2FsdmV%2FcvhsvLV%2F%2BLZQtszGouzX8fa9%2Be%2BevbBC7pcbtbgkXMsazaamWpPQkuZb51pG9XtvgQo7pYPPJsdDd18RzcVLPHHr9ob65MU0xH5%2B1UfCIpwFrna1zHaxUYcyNwl2%2Fsp8kMWSclLOnoMO4iwweXJJZUIKO5BUMaUxeSPnc7pwWH3qc%2FVdW05D9UitzCYixi9E7WG1Duul%2FYJTA5yErGGJOyXrjw3uhdujru1i5vC2sNzTYgqWhZTnn1a6cQaeZU6gKET%2BDGftS6roQfouqPvweyrppZYc81W2mDvTSq%2FkuGw%2BpOhnbn3MJ3v4cQGOqUBM7x0t16j%2B4YOleFqoK2vVs%2F%2BJqJzvM0QsiuxACkURqHDVNY0DOeK8TbQCAX4EQJR7EMdeDT3s4gEf9njdU7vi8Hz2Vvdk%2B4MgpDuFkrgHOipn4q1uAVSZ86SB3WfKrOrEsmMsLumPorWPXn6KWzMI7z2ztuCzYd9hMKd3tX4SjqFA8akktvo6O5HeN8arK6fWra%2BcS8r%2FqVnif05QxZjrM5ub2LA&X-Amz-Signature=44b6a659a9700e21d5328f05e2b5beb1d114cf75fd5e098087b509ec47ad67dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676EVI3EJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOFr5uN0GxcfzqeuThR9l4U2bFhteMhHsyG3djf6whUAiEA%2FDoP0FNO%2FApHQBn9aKvpXljEKWCMQemJRfIUCOKHUMwqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPR%2FqO%2FQHOnlimvwzCrcA%2BTzMUK4FJELdJ7SvH9CSINMT%2BA1aSpI6vFTbbwp81JxlYYXOxECeb5ezoUkKkFnGlq8Pu2ldGn3ysXfqCJatnxgT3X3%2Fp2UeiKIyK6E4WoCpmD5Tpl%2FW9BP%2FEaZyK51clizY1D%2BlqYYO26y56i08W%2FdC%2BpFbwoZsaj51BRES4HcGLOBlicw19m83TkJuHljmyBgcylQgu4qxCgJMLDXZW64ruY2dakEl4UMCwOuQAjAUnBwrnMRKJQ8EH%2FCGTBxtTDDpPMszYSRWyeibNAbLvhQTzUcjTPnMHHoHPuCfOj28goBX%2Fmv0J6LFDrAd7U9mGN%2FsdmV%2FcvhsvLV%2F%2BLZQtszGouzX8fa9%2Be%2BevbBC7pcbtbgkXMsazaamWpPQkuZb51pG9XtvgQo7pYPPJsdDd18RzcVLPHHr9ob65MU0xH5%2B1UfCIpwFrna1zHaxUYcyNwl2%2Fsp8kMWSclLOnoMO4iwweXJJZUIKO5BUMaUxeSPnc7pwWH3qc%2FVdW05D9UitzCYixi9E7WG1Duul%2FYJTA5yErGGJOyXrjw3uhdujru1i5vC2sNzTYgqWhZTnn1a6cQaeZU6gKET%2BDGftS6roQfouqPvweyrppZYc81W2mDvTSq%2FkuGw%2BpOhnbn3MJ3v4cQGOqUBM7x0t16j%2B4YOleFqoK2vVs%2F%2BJqJzvM0QsiuxACkURqHDVNY0DOeK8TbQCAX4EQJR7EMdeDT3s4gEf9njdU7vi8Hz2Vvdk%2B4MgpDuFkrgHOipn4q1uAVSZ86SB3WfKrOrEsmMsLumPorWPXn6KWzMI7z2ztuCzYd9hMKd3tX4SjqFA8akktvo6O5HeN8arK6fWra%2BcS8r%2FqVnif05QxZjrM5ub2LA&X-Amz-Signature=b3c61791b1f48f9ef152e4a3a167b6c4e8a6dd1b0f0b36b839b1d2fa32aeddb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676EVI3EJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOFr5uN0GxcfzqeuThR9l4U2bFhteMhHsyG3djf6whUAiEA%2FDoP0FNO%2FApHQBn9aKvpXljEKWCMQemJRfIUCOKHUMwqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPR%2FqO%2FQHOnlimvwzCrcA%2BTzMUK4FJELdJ7SvH9CSINMT%2BA1aSpI6vFTbbwp81JxlYYXOxECeb5ezoUkKkFnGlq8Pu2ldGn3ysXfqCJatnxgT3X3%2Fp2UeiKIyK6E4WoCpmD5Tpl%2FW9BP%2FEaZyK51clizY1D%2BlqYYO26y56i08W%2FdC%2BpFbwoZsaj51BRES4HcGLOBlicw19m83TkJuHljmyBgcylQgu4qxCgJMLDXZW64ruY2dakEl4UMCwOuQAjAUnBwrnMRKJQ8EH%2FCGTBxtTDDpPMszYSRWyeibNAbLvhQTzUcjTPnMHHoHPuCfOj28goBX%2Fmv0J6LFDrAd7U9mGN%2FsdmV%2FcvhsvLV%2F%2BLZQtszGouzX8fa9%2Be%2BevbBC7pcbtbgkXMsazaamWpPQkuZb51pG9XtvgQo7pYPPJsdDd18RzcVLPHHr9ob65MU0xH5%2B1UfCIpwFrna1zHaxUYcyNwl2%2Fsp8kMWSclLOnoMO4iwweXJJZUIKO5BUMaUxeSPnc7pwWH3qc%2FVdW05D9UitzCYixi9E7WG1Duul%2FYJTA5yErGGJOyXrjw3uhdujru1i5vC2sNzTYgqWhZTnn1a6cQaeZU6gKET%2BDGftS6roQfouqPvweyrppZYc81W2mDvTSq%2FkuGw%2BpOhnbn3MJ3v4cQGOqUBM7x0t16j%2B4YOleFqoK2vVs%2F%2BJqJzvM0QsiuxACkURqHDVNY0DOeK8TbQCAX4EQJR7EMdeDT3s4gEf9njdU7vi8Hz2Vvdk%2B4MgpDuFkrgHOipn4q1uAVSZ86SB3WfKrOrEsmMsLumPorWPXn6KWzMI7z2ztuCzYd9hMKd3tX4SjqFA8akktvo6O5HeN8arK6fWra%2BcS8r%2FqVnif05QxZjrM5ub2LA&X-Amz-Signature=75485708e9b35085b38b539c298fac824971b5f11272426460de1605c6b9fb22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676EVI3EJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOFr5uN0GxcfzqeuThR9l4U2bFhteMhHsyG3djf6whUAiEA%2FDoP0FNO%2FApHQBn9aKvpXljEKWCMQemJRfIUCOKHUMwqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPR%2FqO%2FQHOnlimvwzCrcA%2BTzMUK4FJELdJ7SvH9CSINMT%2BA1aSpI6vFTbbwp81JxlYYXOxECeb5ezoUkKkFnGlq8Pu2ldGn3ysXfqCJatnxgT3X3%2Fp2UeiKIyK6E4WoCpmD5Tpl%2FW9BP%2FEaZyK51clizY1D%2BlqYYO26y56i08W%2FdC%2BpFbwoZsaj51BRES4HcGLOBlicw19m83TkJuHljmyBgcylQgu4qxCgJMLDXZW64ruY2dakEl4UMCwOuQAjAUnBwrnMRKJQ8EH%2FCGTBxtTDDpPMszYSRWyeibNAbLvhQTzUcjTPnMHHoHPuCfOj28goBX%2Fmv0J6LFDrAd7U9mGN%2FsdmV%2FcvhsvLV%2F%2BLZQtszGouzX8fa9%2Be%2BevbBC7pcbtbgkXMsazaamWpPQkuZb51pG9XtvgQo7pYPPJsdDd18RzcVLPHHr9ob65MU0xH5%2B1UfCIpwFrna1zHaxUYcyNwl2%2Fsp8kMWSclLOnoMO4iwweXJJZUIKO5BUMaUxeSPnc7pwWH3qc%2FVdW05D9UitzCYixi9E7WG1Duul%2FYJTA5yErGGJOyXrjw3uhdujru1i5vC2sNzTYgqWhZTnn1a6cQaeZU6gKET%2BDGftS6roQfouqPvweyrppZYc81W2mDvTSq%2FkuGw%2BpOhnbn3MJ3v4cQGOqUBM7x0t16j%2B4YOleFqoK2vVs%2F%2BJqJzvM0QsiuxACkURqHDVNY0DOeK8TbQCAX4EQJR7EMdeDT3s4gEf9njdU7vi8Hz2Vvdk%2B4MgpDuFkrgHOipn4q1uAVSZ86SB3WfKrOrEsmMsLumPorWPXn6KWzMI7z2ztuCzYd9hMKd3tX4SjqFA8akktvo6O5HeN8arK6fWra%2BcS8r%2FqVnif05QxZjrM5ub2LA&X-Amz-Signature=de5b4a8ff877087a032785f2a5f2d69bc12a6d90cc547c8421254a8cf5c94c0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676EVI3EJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOFr5uN0GxcfzqeuThR9l4U2bFhteMhHsyG3djf6whUAiEA%2FDoP0FNO%2FApHQBn9aKvpXljEKWCMQemJRfIUCOKHUMwqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPR%2FqO%2FQHOnlimvwzCrcA%2BTzMUK4FJELdJ7SvH9CSINMT%2BA1aSpI6vFTbbwp81JxlYYXOxECeb5ezoUkKkFnGlq8Pu2ldGn3ysXfqCJatnxgT3X3%2Fp2UeiKIyK6E4WoCpmD5Tpl%2FW9BP%2FEaZyK51clizY1D%2BlqYYO26y56i08W%2FdC%2BpFbwoZsaj51BRES4HcGLOBlicw19m83TkJuHljmyBgcylQgu4qxCgJMLDXZW64ruY2dakEl4UMCwOuQAjAUnBwrnMRKJQ8EH%2FCGTBxtTDDpPMszYSRWyeibNAbLvhQTzUcjTPnMHHoHPuCfOj28goBX%2Fmv0J6LFDrAd7U9mGN%2FsdmV%2FcvhsvLV%2F%2BLZQtszGouzX8fa9%2Be%2BevbBC7pcbtbgkXMsazaamWpPQkuZb51pG9XtvgQo7pYPPJsdDd18RzcVLPHHr9ob65MU0xH5%2B1UfCIpwFrna1zHaxUYcyNwl2%2Fsp8kMWSclLOnoMO4iwweXJJZUIKO5BUMaUxeSPnc7pwWH3qc%2FVdW05D9UitzCYixi9E7WG1Duul%2FYJTA5yErGGJOyXrjw3uhdujru1i5vC2sNzTYgqWhZTnn1a6cQaeZU6gKET%2BDGftS6roQfouqPvweyrppZYc81W2mDvTSq%2FkuGw%2BpOhnbn3MJ3v4cQGOqUBM7x0t16j%2B4YOleFqoK2vVs%2F%2BJqJzvM0QsiuxACkURqHDVNY0DOeK8TbQCAX4EQJR7EMdeDT3s4gEf9njdU7vi8Hz2Vvdk%2B4MgpDuFkrgHOipn4q1uAVSZ86SB3WfKrOrEsmMsLumPorWPXn6KWzMI7z2ztuCzYd9hMKd3tX4SjqFA8akktvo6O5HeN8arK6fWra%2BcS8r%2FqVnif05QxZjrM5ub2LA&X-Amz-Signature=647fcd3093a614e817da96e50e43d7daf618993ff6f9dcecab8774645c1069de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676EVI3EJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOFr5uN0GxcfzqeuThR9l4U2bFhteMhHsyG3djf6whUAiEA%2FDoP0FNO%2FApHQBn9aKvpXljEKWCMQemJRfIUCOKHUMwqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPR%2FqO%2FQHOnlimvwzCrcA%2BTzMUK4FJELdJ7SvH9CSINMT%2BA1aSpI6vFTbbwp81JxlYYXOxECeb5ezoUkKkFnGlq8Pu2ldGn3ysXfqCJatnxgT3X3%2Fp2UeiKIyK6E4WoCpmD5Tpl%2FW9BP%2FEaZyK51clizY1D%2BlqYYO26y56i08W%2FdC%2BpFbwoZsaj51BRES4HcGLOBlicw19m83TkJuHljmyBgcylQgu4qxCgJMLDXZW64ruY2dakEl4UMCwOuQAjAUnBwrnMRKJQ8EH%2FCGTBxtTDDpPMszYSRWyeibNAbLvhQTzUcjTPnMHHoHPuCfOj28goBX%2Fmv0J6LFDrAd7U9mGN%2FsdmV%2FcvhsvLV%2F%2BLZQtszGouzX8fa9%2Be%2BevbBC7pcbtbgkXMsazaamWpPQkuZb51pG9XtvgQo7pYPPJsdDd18RzcVLPHHr9ob65MU0xH5%2B1UfCIpwFrna1zHaxUYcyNwl2%2Fsp8kMWSclLOnoMO4iwweXJJZUIKO5BUMaUxeSPnc7pwWH3qc%2FVdW05D9UitzCYixi9E7WG1Duul%2FYJTA5yErGGJOyXrjw3uhdujru1i5vC2sNzTYgqWhZTnn1a6cQaeZU6gKET%2BDGftS6roQfouqPvweyrppZYc81W2mDvTSq%2FkuGw%2BpOhnbn3MJ3v4cQGOqUBM7x0t16j%2B4YOleFqoK2vVs%2F%2BJqJzvM0QsiuxACkURqHDVNY0DOeK8TbQCAX4EQJR7EMdeDT3s4gEf9njdU7vi8Hz2Vvdk%2B4MgpDuFkrgHOipn4q1uAVSZ86SB3WfKrOrEsmMsLumPorWPXn6KWzMI7z2ztuCzYd9hMKd3tX4SjqFA8akktvo6O5HeN8arK6fWra%2BcS8r%2FqVnif05QxZjrM5ub2LA&X-Amz-Signature=ae4ed166d0a986c47c554d4ee6ccb95dc8c0823c2fa889a56f8356e004d19750&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676EVI3EJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOFr5uN0GxcfzqeuThR9l4U2bFhteMhHsyG3djf6whUAiEA%2FDoP0FNO%2FApHQBn9aKvpXljEKWCMQemJRfIUCOKHUMwqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPR%2FqO%2FQHOnlimvwzCrcA%2BTzMUK4FJELdJ7SvH9CSINMT%2BA1aSpI6vFTbbwp81JxlYYXOxECeb5ezoUkKkFnGlq8Pu2ldGn3ysXfqCJatnxgT3X3%2Fp2UeiKIyK6E4WoCpmD5Tpl%2FW9BP%2FEaZyK51clizY1D%2BlqYYO26y56i08W%2FdC%2BpFbwoZsaj51BRES4HcGLOBlicw19m83TkJuHljmyBgcylQgu4qxCgJMLDXZW64ruY2dakEl4UMCwOuQAjAUnBwrnMRKJQ8EH%2FCGTBxtTDDpPMszYSRWyeibNAbLvhQTzUcjTPnMHHoHPuCfOj28goBX%2Fmv0J6LFDrAd7U9mGN%2FsdmV%2FcvhsvLV%2F%2BLZQtszGouzX8fa9%2Be%2BevbBC7pcbtbgkXMsazaamWpPQkuZb51pG9XtvgQo7pYPPJsdDd18RzcVLPHHr9ob65MU0xH5%2B1UfCIpwFrna1zHaxUYcyNwl2%2Fsp8kMWSclLOnoMO4iwweXJJZUIKO5BUMaUxeSPnc7pwWH3qc%2FVdW05D9UitzCYixi9E7WG1Duul%2FYJTA5yErGGJOyXrjw3uhdujru1i5vC2sNzTYgqWhZTnn1a6cQaeZU6gKET%2BDGftS6roQfouqPvweyrppZYc81W2mDvTSq%2FkuGw%2BpOhnbn3MJ3v4cQGOqUBM7x0t16j%2B4YOleFqoK2vVs%2F%2BJqJzvM0QsiuxACkURqHDVNY0DOeK8TbQCAX4EQJR7EMdeDT3s4gEf9njdU7vi8Hz2Vvdk%2B4MgpDuFkrgHOipn4q1uAVSZ86SB3WfKrOrEsmMsLumPorWPXn6KWzMI7z2ztuCzYd9hMKd3tX4SjqFA8akktvo6O5HeN8arK6fWra%2BcS8r%2FqVnif05QxZjrM5ub2LA&X-Amz-Signature=5c431c8999f814718f9c9c4abb89fde5ffcc379f064cec05efb00a1af6011617&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676EVI3EJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOFr5uN0GxcfzqeuThR9l4U2bFhteMhHsyG3djf6whUAiEA%2FDoP0FNO%2FApHQBn9aKvpXljEKWCMQemJRfIUCOKHUMwqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPR%2FqO%2FQHOnlimvwzCrcA%2BTzMUK4FJELdJ7SvH9CSINMT%2BA1aSpI6vFTbbwp81JxlYYXOxECeb5ezoUkKkFnGlq8Pu2ldGn3ysXfqCJatnxgT3X3%2Fp2UeiKIyK6E4WoCpmD5Tpl%2FW9BP%2FEaZyK51clizY1D%2BlqYYO26y56i08W%2FdC%2BpFbwoZsaj51BRES4HcGLOBlicw19m83TkJuHljmyBgcylQgu4qxCgJMLDXZW64ruY2dakEl4UMCwOuQAjAUnBwrnMRKJQ8EH%2FCGTBxtTDDpPMszYSRWyeibNAbLvhQTzUcjTPnMHHoHPuCfOj28goBX%2Fmv0J6LFDrAd7U9mGN%2FsdmV%2FcvhsvLV%2F%2BLZQtszGouzX8fa9%2Be%2BevbBC7pcbtbgkXMsazaamWpPQkuZb51pG9XtvgQo7pYPPJsdDd18RzcVLPHHr9ob65MU0xH5%2B1UfCIpwFrna1zHaxUYcyNwl2%2Fsp8kMWSclLOnoMO4iwweXJJZUIKO5BUMaUxeSPnc7pwWH3qc%2FVdW05D9UitzCYixi9E7WG1Duul%2FYJTA5yErGGJOyXrjw3uhdujru1i5vC2sNzTYgqWhZTnn1a6cQaeZU6gKET%2BDGftS6roQfouqPvweyrppZYc81W2mDvTSq%2FkuGw%2BpOhnbn3MJ3v4cQGOqUBM7x0t16j%2B4YOleFqoK2vVs%2F%2BJqJzvM0QsiuxACkURqHDVNY0DOeK8TbQCAX4EQJR7EMdeDT3s4gEf9njdU7vi8Hz2Vvdk%2B4MgpDuFkrgHOipn4q1uAVSZ86SB3WfKrOrEsmMsLumPorWPXn6KWzMI7z2ztuCzYd9hMKd3tX4SjqFA8akktvo6O5HeN8arK6fWra%2BcS8r%2FqVnif05QxZjrM5ub2LA&X-Amz-Signature=a41ca18e467044ea3a114439d6fcd26e8abd211c319c54598465005e1d099471&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
