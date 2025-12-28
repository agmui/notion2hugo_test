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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWKPHW7N%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUuOaekDQpeEA13yy%2FNu1ntBPVHUZ8n14P2fmZIa%2FjFAiAUWICqO4sTe1dGM8EzFY00oMM6LrcZHERwhlomGjiXjCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM2ddoXXybliXrSn4yKtwDhIqw%2B%2B3dlFds8Wb71am8aeEm3pcsWPiPubi34wssExvPDZb9DKNAn9wrC8L9fbcCBDgLqE58J1otj4NLlpbHYHRkhFg00ECFA9109yKR59uBDBJYWX9mnrm53hyai%2FtmHDtStMOcJyv1j9jXlMpWC68LJti8KoShb2Kz4lcuhStGarNua5%2BLvEXry8SilaQagrB55D6TsXmjwMFdS2Fzcbz%2BOU8bSuVZwqVbznUvzjrqYHLJOgRGzPGl3ihnD2Giw7dd%2FKkUpgbCxvjt50wxiP4WH7%2BxDka02VzS1w8Zsonthe36bDRtmfSUTOs0pT1U2JJPOZ%2FPP9DIuPWWsea5prwzZDb%2F7pkXFQSgAzFoVbLgC6hRXIu%2BrhQmxOylNIAbWVxSyZ9tiO5NNRJZ2wDYd2XbYfZKXDZ7o51fkKI00g5yqr6B6Z4HOU5VuFiJrWTFRATC%2F60h1u9bTHTNEGJQsvRhEYUcDPhHmMpPjxOCg7BGKQhw0q4Nq8HJrRSLxFk4u0180QVRXtknZjh%2Fqn0l%2FYpvHxZvEucYsu9MNYTr2APYaxo7OC9pLqpkcs%2FEe8EcAzPyCEQJqOgaAvxEybfIxD%2FVGGj%2Fm8p1gFDaJ9s0VrtwvmHxah3bBpqTKsAwzefBygY6pgHCtrfu8k26NQ81shzhMQc6HjWfQhNtwV9rv9tCzYBefMCIYUM4Pfya46yzHjr8tCD7ehqgOn6fwZ2SaOfZe3BaPWwLTc4uvAKTe00YiJUft7djCWAJUrU21QCNkmQ%2Fhth68I%2BlFEYwAoXyLo3%2B7nE6Xyjx7hGvgSblDLOglu8Q6dyalIf0ugcqjVFG9FY4VZZfQ9FfuviXm%2FTmfi2YitwfncRw0g0K&X-Amz-Signature=3fa092909aba1db5f06b8d3a6ce77c687ea8d0320964ebb0814c047195efc2d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWKPHW7N%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUuOaekDQpeEA13yy%2FNu1ntBPVHUZ8n14P2fmZIa%2FjFAiAUWICqO4sTe1dGM8EzFY00oMM6LrcZHERwhlomGjiXjCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM2ddoXXybliXrSn4yKtwDhIqw%2B%2B3dlFds8Wb71am8aeEm3pcsWPiPubi34wssExvPDZb9DKNAn9wrC8L9fbcCBDgLqE58J1otj4NLlpbHYHRkhFg00ECFA9109yKR59uBDBJYWX9mnrm53hyai%2FtmHDtStMOcJyv1j9jXlMpWC68LJti8KoShb2Kz4lcuhStGarNua5%2BLvEXry8SilaQagrB55D6TsXmjwMFdS2Fzcbz%2BOU8bSuVZwqVbznUvzjrqYHLJOgRGzPGl3ihnD2Giw7dd%2FKkUpgbCxvjt50wxiP4WH7%2BxDka02VzS1w8Zsonthe36bDRtmfSUTOs0pT1U2JJPOZ%2FPP9DIuPWWsea5prwzZDb%2F7pkXFQSgAzFoVbLgC6hRXIu%2BrhQmxOylNIAbWVxSyZ9tiO5NNRJZ2wDYd2XbYfZKXDZ7o51fkKI00g5yqr6B6Z4HOU5VuFiJrWTFRATC%2F60h1u9bTHTNEGJQsvRhEYUcDPhHmMpPjxOCg7BGKQhw0q4Nq8HJrRSLxFk4u0180QVRXtknZjh%2Fqn0l%2FYpvHxZvEucYsu9MNYTr2APYaxo7OC9pLqpkcs%2FEe8EcAzPyCEQJqOgaAvxEybfIxD%2FVGGj%2Fm8p1gFDaJ9s0VrtwvmHxah3bBpqTKsAwzefBygY6pgHCtrfu8k26NQ81shzhMQc6HjWfQhNtwV9rv9tCzYBefMCIYUM4Pfya46yzHjr8tCD7ehqgOn6fwZ2SaOfZe3BaPWwLTc4uvAKTe00YiJUft7djCWAJUrU21QCNkmQ%2Fhth68I%2BlFEYwAoXyLo3%2B7nE6Xyjx7hGvgSblDLOglu8Q6dyalIf0ugcqjVFG9FY4VZZfQ9FfuviXm%2FTmfi2YitwfncRw0g0K&X-Amz-Signature=da43838a7c9d9c83eac0d0c3ad2afb00e212dcd3a0cf1dea6719ead2174faa75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWKPHW7N%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUuOaekDQpeEA13yy%2FNu1ntBPVHUZ8n14P2fmZIa%2FjFAiAUWICqO4sTe1dGM8EzFY00oMM6LrcZHERwhlomGjiXjCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM2ddoXXybliXrSn4yKtwDhIqw%2B%2B3dlFds8Wb71am8aeEm3pcsWPiPubi34wssExvPDZb9DKNAn9wrC8L9fbcCBDgLqE58J1otj4NLlpbHYHRkhFg00ECFA9109yKR59uBDBJYWX9mnrm53hyai%2FtmHDtStMOcJyv1j9jXlMpWC68LJti8KoShb2Kz4lcuhStGarNua5%2BLvEXry8SilaQagrB55D6TsXmjwMFdS2Fzcbz%2BOU8bSuVZwqVbznUvzjrqYHLJOgRGzPGl3ihnD2Giw7dd%2FKkUpgbCxvjt50wxiP4WH7%2BxDka02VzS1w8Zsonthe36bDRtmfSUTOs0pT1U2JJPOZ%2FPP9DIuPWWsea5prwzZDb%2F7pkXFQSgAzFoVbLgC6hRXIu%2BrhQmxOylNIAbWVxSyZ9tiO5NNRJZ2wDYd2XbYfZKXDZ7o51fkKI00g5yqr6B6Z4HOU5VuFiJrWTFRATC%2F60h1u9bTHTNEGJQsvRhEYUcDPhHmMpPjxOCg7BGKQhw0q4Nq8HJrRSLxFk4u0180QVRXtknZjh%2Fqn0l%2FYpvHxZvEucYsu9MNYTr2APYaxo7OC9pLqpkcs%2FEe8EcAzPyCEQJqOgaAvxEybfIxD%2FVGGj%2Fm8p1gFDaJ9s0VrtwvmHxah3bBpqTKsAwzefBygY6pgHCtrfu8k26NQ81shzhMQc6HjWfQhNtwV9rv9tCzYBefMCIYUM4Pfya46yzHjr8tCD7ehqgOn6fwZ2SaOfZe3BaPWwLTc4uvAKTe00YiJUft7djCWAJUrU21QCNkmQ%2Fhth68I%2BlFEYwAoXyLo3%2B7nE6Xyjx7hGvgSblDLOglu8Q6dyalIf0ugcqjVFG9FY4VZZfQ9FfuviXm%2FTmfi2YitwfncRw0g0K&X-Amz-Signature=108fd4c59a33546a2cc1db917c877765758849eaf0da062cc1b850ae32f61d30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWKPHW7N%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUuOaekDQpeEA13yy%2FNu1ntBPVHUZ8n14P2fmZIa%2FjFAiAUWICqO4sTe1dGM8EzFY00oMM6LrcZHERwhlomGjiXjCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM2ddoXXybliXrSn4yKtwDhIqw%2B%2B3dlFds8Wb71am8aeEm3pcsWPiPubi34wssExvPDZb9DKNAn9wrC8L9fbcCBDgLqE58J1otj4NLlpbHYHRkhFg00ECFA9109yKR59uBDBJYWX9mnrm53hyai%2FtmHDtStMOcJyv1j9jXlMpWC68LJti8KoShb2Kz4lcuhStGarNua5%2BLvEXry8SilaQagrB55D6TsXmjwMFdS2Fzcbz%2BOU8bSuVZwqVbznUvzjrqYHLJOgRGzPGl3ihnD2Giw7dd%2FKkUpgbCxvjt50wxiP4WH7%2BxDka02VzS1w8Zsonthe36bDRtmfSUTOs0pT1U2JJPOZ%2FPP9DIuPWWsea5prwzZDb%2F7pkXFQSgAzFoVbLgC6hRXIu%2BrhQmxOylNIAbWVxSyZ9tiO5NNRJZ2wDYd2XbYfZKXDZ7o51fkKI00g5yqr6B6Z4HOU5VuFiJrWTFRATC%2F60h1u9bTHTNEGJQsvRhEYUcDPhHmMpPjxOCg7BGKQhw0q4Nq8HJrRSLxFk4u0180QVRXtknZjh%2Fqn0l%2FYpvHxZvEucYsu9MNYTr2APYaxo7OC9pLqpkcs%2FEe8EcAzPyCEQJqOgaAvxEybfIxD%2FVGGj%2Fm8p1gFDaJ9s0VrtwvmHxah3bBpqTKsAwzefBygY6pgHCtrfu8k26NQ81shzhMQc6HjWfQhNtwV9rv9tCzYBefMCIYUM4Pfya46yzHjr8tCD7ehqgOn6fwZ2SaOfZe3BaPWwLTc4uvAKTe00YiJUft7djCWAJUrU21QCNkmQ%2Fhth68I%2BlFEYwAoXyLo3%2B7nE6Xyjx7hGvgSblDLOglu8Q6dyalIf0ugcqjVFG9FY4VZZfQ9FfuviXm%2FTmfi2YitwfncRw0g0K&X-Amz-Signature=6a6cb88555e3b04323c7c5ddb4e72597c1f11693947e79aa238115cf2dc040f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWKPHW7N%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUuOaekDQpeEA13yy%2FNu1ntBPVHUZ8n14P2fmZIa%2FjFAiAUWICqO4sTe1dGM8EzFY00oMM6LrcZHERwhlomGjiXjCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM2ddoXXybliXrSn4yKtwDhIqw%2B%2B3dlFds8Wb71am8aeEm3pcsWPiPubi34wssExvPDZb9DKNAn9wrC8L9fbcCBDgLqE58J1otj4NLlpbHYHRkhFg00ECFA9109yKR59uBDBJYWX9mnrm53hyai%2FtmHDtStMOcJyv1j9jXlMpWC68LJti8KoShb2Kz4lcuhStGarNua5%2BLvEXry8SilaQagrB55D6TsXmjwMFdS2Fzcbz%2BOU8bSuVZwqVbznUvzjrqYHLJOgRGzPGl3ihnD2Giw7dd%2FKkUpgbCxvjt50wxiP4WH7%2BxDka02VzS1w8Zsonthe36bDRtmfSUTOs0pT1U2JJPOZ%2FPP9DIuPWWsea5prwzZDb%2F7pkXFQSgAzFoVbLgC6hRXIu%2BrhQmxOylNIAbWVxSyZ9tiO5NNRJZ2wDYd2XbYfZKXDZ7o51fkKI00g5yqr6B6Z4HOU5VuFiJrWTFRATC%2F60h1u9bTHTNEGJQsvRhEYUcDPhHmMpPjxOCg7BGKQhw0q4Nq8HJrRSLxFk4u0180QVRXtknZjh%2Fqn0l%2FYpvHxZvEucYsu9MNYTr2APYaxo7OC9pLqpkcs%2FEe8EcAzPyCEQJqOgaAvxEybfIxD%2FVGGj%2Fm8p1gFDaJ9s0VrtwvmHxah3bBpqTKsAwzefBygY6pgHCtrfu8k26NQ81shzhMQc6HjWfQhNtwV9rv9tCzYBefMCIYUM4Pfya46yzHjr8tCD7ehqgOn6fwZ2SaOfZe3BaPWwLTc4uvAKTe00YiJUft7djCWAJUrU21QCNkmQ%2Fhth68I%2BlFEYwAoXyLo3%2B7nE6Xyjx7hGvgSblDLOglu8Q6dyalIf0ugcqjVFG9FY4VZZfQ9FfuviXm%2FTmfi2YitwfncRw0g0K&X-Amz-Signature=b697e51dff55bff217a13bdda30757fb0dc939bed156bbef8ff891d24cd230f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWKPHW7N%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUuOaekDQpeEA13yy%2FNu1ntBPVHUZ8n14P2fmZIa%2FjFAiAUWICqO4sTe1dGM8EzFY00oMM6LrcZHERwhlomGjiXjCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM2ddoXXybliXrSn4yKtwDhIqw%2B%2B3dlFds8Wb71am8aeEm3pcsWPiPubi34wssExvPDZb9DKNAn9wrC8L9fbcCBDgLqE58J1otj4NLlpbHYHRkhFg00ECFA9109yKR59uBDBJYWX9mnrm53hyai%2FtmHDtStMOcJyv1j9jXlMpWC68LJti8KoShb2Kz4lcuhStGarNua5%2BLvEXry8SilaQagrB55D6TsXmjwMFdS2Fzcbz%2BOU8bSuVZwqVbznUvzjrqYHLJOgRGzPGl3ihnD2Giw7dd%2FKkUpgbCxvjt50wxiP4WH7%2BxDka02VzS1w8Zsonthe36bDRtmfSUTOs0pT1U2JJPOZ%2FPP9DIuPWWsea5prwzZDb%2F7pkXFQSgAzFoVbLgC6hRXIu%2BrhQmxOylNIAbWVxSyZ9tiO5NNRJZ2wDYd2XbYfZKXDZ7o51fkKI00g5yqr6B6Z4HOU5VuFiJrWTFRATC%2F60h1u9bTHTNEGJQsvRhEYUcDPhHmMpPjxOCg7BGKQhw0q4Nq8HJrRSLxFk4u0180QVRXtknZjh%2Fqn0l%2FYpvHxZvEucYsu9MNYTr2APYaxo7OC9pLqpkcs%2FEe8EcAzPyCEQJqOgaAvxEybfIxD%2FVGGj%2Fm8p1gFDaJ9s0VrtwvmHxah3bBpqTKsAwzefBygY6pgHCtrfu8k26NQ81shzhMQc6HjWfQhNtwV9rv9tCzYBefMCIYUM4Pfya46yzHjr8tCD7ehqgOn6fwZ2SaOfZe3BaPWwLTc4uvAKTe00YiJUft7djCWAJUrU21QCNkmQ%2Fhth68I%2BlFEYwAoXyLo3%2B7nE6Xyjx7hGvgSblDLOglu8Q6dyalIf0ugcqjVFG9FY4VZZfQ9FfuviXm%2FTmfi2YitwfncRw0g0K&X-Amz-Signature=2a5ec482a490414f00bf71ab43f0ffc452b80e20736d3d29ec1a23539ef8c8ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWKPHW7N%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUuOaekDQpeEA13yy%2FNu1ntBPVHUZ8n14P2fmZIa%2FjFAiAUWICqO4sTe1dGM8EzFY00oMM6LrcZHERwhlomGjiXjCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM2ddoXXybliXrSn4yKtwDhIqw%2B%2B3dlFds8Wb71am8aeEm3pcsWPiPubi34wssExvPDZb9DKNAn9wrC8L9fbcCBDgLqE58J1otj4NLlpbHYHRkhFg00ECFA9109yKR59uBDBJYWX9mnrm53hyai%2FtmHDtStMOcJyv1j9jXlMpWC68LJti8KoShb2Kz4lcuhStGarNua5%2BLvEXry8SilaQagrB55D6TsXmjwMFdS2Fzcbz%2BOU8bSuVZwqVbznUvzjrqYHLJOgRGzPGl3ihnD2Giw7dd%2FKkUpgbCxvjt50wxiP4WH7%2BxDka02VzS1w8Zsonthe36bDRtmfSUTOs0pT1U2JJPOZ%2FPP9DIuPWWsea5prwzZDb%2F7pkXFQSgAzFoVbLgC6hRXIu%2BrhQmxOylNIAbWVxSyZ9tiO5NNRJZ2wDYd2XbYfZKXDZ7o51fkKI00g5yqr6B6Z4HOU5VuFiJrWTFRATC%2F60h1u9bTHTNEGJQsvRhEYUcDPhHmMpPjxOCg7BGKQhw0q4Nq8HJrRSLxFk4u0180QVRXtknZjh%2Fqn0l%2FYpvHxZvEucYsu9MNYTr2APYaxo7OC9pLqpkcs%2FEe8EcAzPyCEQJqOgaAvxEybfIxD%2FVGGj%2Fm8p1gFDaJ9s0VrtwvmHxah3bBpqTKsAwzefBygY6pgHCtrfu8k26NQ81shzhMQc6HjWfQhNtwV9rv9tCzYBefMCIYUM4Pfya46yzHjr8tCD7ehqgOn6fwZ2SaOfZe3BaPWwLTc4uvAKTe00YiJUft7djCWAJUrU21QCNkmQ%2Fhth68I%2BlFEYwAoXyLo3%2B7nE6Xyjx7hGvgSblDLOglu8Q6dyalIf0ugcqjVFG9FY4VZZfQ9FfuviXm%2FTmfi2YitwfncRw0g0K&X-Amz-Signature=406dcb7de8fd60663a65aae2be599407805fad86ae39ebaf9ea8c7551e310a6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWKPHW7N%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUuOaekDQpeEA13yy%2FNu1ntBPVHUZ8n14P2fmZIa%2FjFAiAUWICqO4sTe1dGM8EzFY00oMM6LrcZHERwhlomGjiXjCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM2ddoXXybliXrSn4yKtwDhIqw%2B%2B3dlFds8Wb71am8aeEm3pcsWPiPubi34wssExvPDZb9DKNAn9wrC8L9fbcCBDgLqE58J1otj4NLlpbHYHRkhFg00ECFA9109yKR59uBDBJYWX9mnrm53hyai%2FtmHDtStMOcJyv1j9jXlMpWC68LJti8KoShb2Kz4lcuhStGarNua5%2BLvEXry8SilaQagrB55D6TsXmjwMFdS2Fzcbz%2BOU8bSuVZwqVbznUvzjrqYHLJOgRGzPGl3ihnD2Giw7dd%2FKkUpgbCxvjt50wxiP4WH7%2BxDka02VzS1w8Zsonthe36bDRtmfSUTOs0pT1U2JJPOZ%2FPP9DIuPWWsea5prwzZDb%2F7pkXFQSgAzFoVbLgC6hRXIu%2BrhQmxOylNIAbWVxSyZ9tiO5NNRJZ2wDYd2XbYfZKXDZ7o51fkKI00g5yqr6B6Z4HOU5VuFiJrWTFRATC%2F60h1u9bTHTNEGJQsvRhEYUcDPhHmMpPjxOCg7BGKQhw0q4Nq8HJrRSLxFk4u0180QVRXtknZjh%2Fqn0l%2FYpvHxZvEucYsu9MNYTr2APYaxo7OC9pLqpkcs%2FEe8EcAzPyCEQJqOgaAvxEybfIxD%2FVGGj%2Fm8p1gFDaJ9s0VrtwvmHxah3bBpqTKsAwzefBygY6pgHCtrfu8k26NQ81shzhMQc6HjWfQhNtwV9rv9tCzYBefMCIYUM4Pfya46yzHjr8tCD7ehqgOn6fwZ2SaOfZe3BaPWwLTc4uvAKTe00YiJUft7djCWAJUrU21QCNkmQ%2Fhth68I%2BlFEYwAoXyLo3%2B7nE6Xyjx7hGvgSblDLOglu8Q6dyalIf0ugcqjVFG9FY4VZZfQ9FfuviXm%2FTmfi2YitwfncRw0g0K&X-Amz-Signature=8440c9b72d164de50368dd88fe199fe688cfeb5065291192f7cae39d5c89d7e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWKPHW7N%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUuOaekDQpeEA13yy%2FNu1ntBPVHUZ8n14P2fmZIa%2FjFAiAUWICqO4sTe1dGM8EzFY00oMM6LrcZHERwhlomGjiXjCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM2ddoXXybliXrSn4yKtwDhIqw%2B%2B3dlFds8Wb71am8aeEm3pcsWPiPubi34wssExvPDZb9DKNAn9wrC8L9fbcCBDgLqE58J1otj4NLlpbHYHRkhFg00ECFA9109yKR59uBDBJYWX9mnrm53hyai%2FtmHDtStMOcJyv1j9jXlMpWC68LJti8KoShb2Kz4lcuhStGarNua5%2BLvEXry8SilaQagrB55D6TsXmjwMFdS2Fzcbz%2BOU8bSuVZwqVbznUvzjrqYHLJOgRGzPGl3ihnD2Giw7dd%2FKkUpgbCxvjt50wxiP4WH7%2BxDka02VzS1w8Zsonthe36bDRtmfSUTOs0pT1U2JJPOZ%2FPP9DIuPWWsea5prwzZDb%2F7pkXFQSgAzFoVbLgC6hRXIu%2BrhQmxOylNIAbWVxSyZ9tiO5NNRJZ2wDYd2XbYfZKXDZ7o51fkKI00g5yqr6B6Z4HOU5VuFiJrWTFRATC%2F60h1u9bTHTNEGJQsvRhEYUcDPhHmMpPjxOCg7BGKQhw0q4Nq8HJrRSLxFk4u0180QVRXtknZjh%2Fqn0l%2FYpvHxZvEucYsu9MNYTr2APYaxo7OC9pLqpkcs%2FEe8EcAzPyCEQJqOgaAvxEybfIxD%2FVGGj%2Fm8p1gFDaJ9s0VrtwvmHxah3bBpqTKsAwzefBygY6pgHCtrfu8k26NQ81shzhMQc6HjWfQhNtwV9rv9tCzYBefMCIYUM4Pfya46yzHjr8tCD7ehqgOn6fwZ2SaOfZe3BaPWwLTc4uvAKTe00YiJUft7djCWAJUrU21QCNkmQ%2Fhth68I%2BlFEYwAoXyLo3%2B7nE6Xyjx7hGvgSblDLOglu8Q6dyalIf0ugcqjVFG9FY4VZZfQ9FfuviXm%2FTmfi2YitwfncRw0g0K&X-Amz-Signature=7fa2f8d32eee638f2c8fba2c0bb26110e2cfdc7b0d074568062ad4daa906618f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWKPHW7N%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUuOaekDQpeEA13yy%2FNu1ntBPVHUZ8n14P2fmZIa%2FjFAiAUWICqO4sTe1dGM8EzFY00oMM6LrcZHERwhlomGjiXjCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM2ddoXXybliXrSn4yKtwDhIqw%2B%2B3dlFds8Wb71am8aeEm3pcsWPiPubi34wssExvPDZb9DKNAn9wrC8L9fbcCBDgLqE58J1otj4NLlpbHYHRkhFg00ECFA9109yKR59uBDBJYWX9mnrm53hyai%2FtmHDtStMOcJyv1j9jXlMpWC68LJti8KoShb2Kz4lcuhStGarNua5%2BLvEXry8SilaQagrB55D6TsXmjwMFdS2Fzcbz%2BOU8bSuVZwqVbznUvzjrqYHLJOgRGzPGl3ihnD2Giw7dd%2FKkUpgbCxvjt50wxiP4WH7%2BxDka02VzS1w8Zsonthe36bDRtmfSUTOs0pT1U2JJPOZ%2FPP9DIuPWWsea5prwzZDb%2F7pkXFQSgAzFoVbLgC6hRXIu%2BrhQmxOylNIAbWVxSyZ9tiO5NNRJZ2wDYd2XbYfZKXDZ7o51fkKI00g5yqr6B6Z4HOU5VuFiJrWTFRATC%2F60h1u9bTHTNEGJQsvRhEYUcDPhHmMpPjxOCg7BGKQhw0q4Nq8HJrRSLxFk4u0180QVRXtknZjh%2Fqn0l%2FYpvHxZvEucYsu9MNYTr2APYaxo7OC9pLqpkcs%2FEe8EcAzPyCEQJqOgaAvxEybfIxD%2FVGGj%2Fm8p1gFDaJ9s0VrtwvmHxah3bBpqTKsAwzefBygY6pgHCtrfu8k26NQ81shzhMQc6HjWfQhNtwV9rv9tCzYBefMCIYUM4Pfya46yzHjr8tCD7ehqgOn6fwZ2SaOfZe3BaPWwLTc4uvAKTe00YiJUft7djCWAJUrU21QCNkmQ%2Fhth68I%2BlFEYwAoXyLo3%2B7nE6Xyjx7hGvgSblDLOglu8Q6dyalIf0ugcqjVFG9FY4VZZfQ9FfuviXm%2FTmfi2YitwfncRw0g0K&X-Amz-Signature=f5801e1f59165aee4f3619352f50b2b4eacffd2f2bb6fda608dcbfea5eff9349&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWKPHW7N%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUuOaekDQpeEA13yy%2FNu1ntBPVHUZ8n14P2fmZIa%2FjFAiAUWICqO4sTe1dGM8EzFY00oMM6LrcZHERwhlomGjiXjCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM2ddoXXybliXrSn4yKtwDhIqw%2B%2B3dlFds8Wb71am8aeEm3pcsWPiPubi34wssExvPDZb9DKNAn9wrC8L9fbcCBDgLqE58J1otj4NLlpbHYHRkhFg00ECFA9109yKR59uBDBJYWX9mnrm53hyai%2FtmHDtStMOcJyv1j9jXlMpWC68LJti8KoShb2Kz4lcuhStGarNua5%2BLvEXry8SilaQagrB55D6TsXmjwMFdS2Fzcbz%2BOU8bSuVZwqVbznUvzjrqYHLJOgRGzPGl3ihnD2Giw7dd%2FKkUpgbCxvjt50wxiP4WH7%2BxDka02VzS1w8Zsonthe36bDRtmfSUTOs0pT1U2JJPOZ%2FPP9DIuPWWsea5prwzZDb%2F7pkXFQSgAzFoVbLgC6hRXIu%2BrhQmxOylNIAbWVxSyZ9tiO5NNRJZ2wDYd2XbYfZKXDZ7o51fkKI00g5yqr6B6Z4HOU5VuFiJrWTFRATC%2F60h1u9bTHTNEGJQsvRhEYUcDPhHmMpPjxOCg7BGKQhw0q4Nq8HJrRSLxFk4u0180QVRXtknZjh%2Fqn0l%2FYpvHxZvEucYsu9MNYTr2APYaxo7OC9pLqpkcs%2FEe8EcAzPyCEQJqOgaAvxEybfIxD%2FVGGj%2Fm8p1gFDaJ9s0VrtwvmHxah3bBpqTKsAwzefBygY6pgHCtrfu8k26NQ81shzhMQc6HjWfQhNtwV9rv9tCzYBefMCIYUM4Pfya46yzHjr8tCD7ehqgOn6fwZ2SaOfZe3BaPWwLTc4uvAKTe00YiJUft7djCWAJUrU21QCNkmQ%2Fhth68I%2BlFEYwAoXyLo3%2B7nE6Xyjx7hGvgSblDLOglu8Q6dyalIf0ugcqjVFG9FY4VZZfQ9FfuviXm%2FTmfi2YitwfncRw0g0K&X-Amz-Signature=19eac1b9f8ae40711bf08afb686fbdb48aa6aff3f3858c255ee11a0b76bd7bcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWKPHW7N%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUuOaekDQpeEA13yy%2FNu1ntBPVHUZ8n14P2fmZIa%2FjFAiAUWICqO4sTe1dGM8EzFY00oMM6LrcZHERwhlomGjiXjCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM2ddoXXybliXrSn4yKtwDhIqw%2B%2B3dlFds8Wb71am8aeEm3pcsWPiPubi34wssExvPDZb9DKNAn9wrC8L9fbcCBDgLqE58J1otj4NLlpbHYHRkhFg00ECFA9109yKR59uBDBJYWX9mnrm53hyai%2FtmHDtStMOcJyv1j9jXlMpWC68LJti8KoShb2Kz4lcuhStGarNua5%2BLvEXry8SilaQagrB55D6TsXmjwMFdS2Fzcbz%2BOU8bSuVZwqVbznUvzjrqYHLJOgRGzPGl3ihnD2Giw7dd%2FKkUpgbCxvjt50wxiP4WH7%2BxDka02VzS1w8Zsonthe36bDRtmfSUTOs0pT1U2JJPOZ%2FPP9DIuPWWsea5prwzZDb%2F7pkXFQSgAzFoVbLgC6hRXIu%2BrhQmxOylNIAbWVxSyZ9tiO5NNRJZ2wDYd2XbYfZKXDZ7o51fkKI00g5yqr6B6Z4HOU5VuFiJrWTFRATC%2F60h1u9bTHTNEGJQsvRhEYUcDPhHmMpPjxOCg7BGKQhw0q4Nq8HJrRSLxFk4u0180QVRXtknZjh%2Fqn0l%2FYpvHxZvEucYsu9MNYTr2APYaxo7OC9pLqpkcs%2FEe8EcAzPyCEQJqOgaAvxEybfIxD%2FVGGj%2Fm8p1gFDaJ9s0VrtwvmHxah3bBpqTKsAwzefBygY6pgHCtrfu8k26NQ81shzhMQc6HjWfQhNtwV9rv9tCzYBefMCIYUM4Pfya46yzHjr8tCD7ehqgOn6fwZ2SaOfZe3BaPWwLTc4uvAKTe00YiJUft7djCWAJUrU21QCNkmQ%2Fhth68I%2BlFEYwAoXyLo3%2B7nE6Xyjx7hGvgSblDLOglu8Q6dyalIf0ugcqjVFG9FY4VZZfQ9FfuviXm%2FTmfi2YitwfncRw0g0K&X-Amz-Signature=2ad604b9a8a2e76f90ed17c5ea51d290e705d5dd690f575c71a9e06ca93e7db2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWKPHW7N%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUuOaekDQpeEA13yy%2FNu1ntBPVHUZ8n14P2fmZIa%2FjFAiAUWICqO4sTe1dGM8EzFY00oMM6LrcZHERwhlomGjiXjCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM2ddoXXybliXrSn4yKtwDhIqw%2B%2B3dlFds8Wb71am8aeEm3pcsWPiPubi34wssExvPDZb9DKNAn9wrC8L9fbcCBDgLqE58J1otj4NLlpbHYHRkhFg00ECFA9109yKR59uBDBJYWX9mnrm53hyai%2FtmHDtStMOcJyv1j9jXlMpWC68LJti8KoShb2Kz4lcuhStGarNua5%2BLvEXry8SilaQagrB55D6TsXmjwMFdS2Fzcbz%2BOU8bSuVZwqVbznUvzjrqYHLJOgRGzPGl3ihnD2Giw7dd%2FKkUpgbCxvjt50wxiP4WH7%2BxDka02VzS1w8Zsonthe36bDRtmfSUTOs0pT1U2JJPOZ%2FPP9DIuPWWsea5prwzZDb%2F7pkXFQSgAzFoVbLgC6hRXIu%2BrhQmxOylNIAbWVxSyZ9tiO5NNRJZ2wDYd2XbYfZKXDZ7o51fkKI00g5yqr6B6Z4HOU5VuFiJrWTFRATC%2F60h1u9bTHTNEGJQsvRhEYUcDPhHmMpPjxOCg7BGKQhw0q4Nq8HJrRSLxFk4u0180QVRXtknZjh%2Fqn0l%2FYpvHxZvEucYsu9MNYTr2APYaxo7OC9pLqpkcs%2FEe8EcAzPyCEQJqOgaAvxEybfIxD%2FVGGj%2Fm8p1gFDaJ9s0VrtwvmHxah3bBpqTKsAwzefBygY6pgHCtrfu8k26NQ81shzhMQc6HjWfQhNtwV9rv9tCzYBefMCIYUM4Pfya46yzHjr8tCD7ehqgOn6fwZ2SaOfZe3BaPWwLTc4uvAKTe00YiJUft7djCWAJUrU21QCNkmQ%2Fhth68I%2BlFEYwAoXyLo3%2B7nE6Xyjx7hGvgSblDLOglu8Q6dyalIf0ugcqjVFG9FY4VZZfQ9FfuviXm%2FTmfi2YitwfncRw0g0K&X-Amz-Signature=ffe51a3d379040bcde61d7b55be99290a13405893af9aea2d41c4684b7010844&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWKPHW7N%2F20251228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251228T015520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUuOaekDQpeEA13yy%2FNu1ntBPVHUZ8n14P2fmZIa%2FjFAiAUWICqO4sTe1dGM8EzFY00oMM6LrcZHERwhlomGjiXjCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIM2ddoXXybliXrSn4yKtwDhIqw%2B%2B3dlFds8Wb71am8aeEm3pcsWPiPubi34wssExvPDZb9DKNAn9wrC8L9fbcCBDgLqE58J1otj4NLlpbHYHRkhFg00ECFA9109yKR59uBDBJYWX9mnrm53hyai%2FtmHDtStMOcJyv1j9jXlMpWC68LJti8KoShb2Kz4lcuhStGarNua5%2BLvEXry8SilaQagrB55D6TsXmjwMFdS2Fzcbz%2BOU8bSuVZwqVbznUvzjrqYHLJOgRGzPGl3ihnD2Giw7dd%2FKkUpgbCxvjt50wxiP4WH7%2BxDka02VzS1w8Zsonthe36bDRtmfSUTOs0pT1U2JJPOZ%2FPP9DIuPWWsea5prwzZDb%2F7pkXFQSgAzFoVbLgC6hRXIu%2BrhQmxOylNIAbWVxSyZ9tiO5NNRJZ2wDYd2XbYfZKXDZ7o51fkKI00g5yqr6B6Z4HOU5VuFiJrWTFRATC%2F60h1u9bTHTNEGJQsvRhEYUcDPhHmMpPjxOCg7BGKQhw0q4Nq8HJrRSLxFk4u0180QVRXtknZjh%2Fqn0l%2FYpvHxZvEucYsu9MNYTr2APYaxo7OC9pLqpkcs%2FEe8EcAzPyCEQJqOgaAvxEybfIxD%2FVGGj%2Fm8p1gFDaJ9s0VrtwvmHxah3bBpqTKsAwzefBygY6pgHCtrfu8k26NQ81shzhMQc6HjWfQhNtwV9rv9tCzYBefMCIYUM4Pfya46yzHjr8tCD7ehqgOn6fwZ2SaOfZe3BaPWwLTc4uvAKTe00YiJUft7djCWAJUrU21QCNkmQ%2Fhth68I%2BlFEYwAoXyLo3%2B7nE6Xyjx7hGvgSblDLOglu8Q6dyalIf0ugcqjVFG9FY4VZZfQ9FfuviXm%2FTmfi2YitwfncRw0g0K&X-Amz-Signature=4f7efb1a33a5d0c120a08d725c3613d30187f23406ccb58f6b985f5e2c4311bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
