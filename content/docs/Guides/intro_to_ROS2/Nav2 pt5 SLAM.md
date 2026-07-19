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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4BTPVLO%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7kdoLz8JN5HxstJFeuVajvU6ie2uxyWp8vBVFFoNNsAIgTE6qUaUay5v4NxY%2BCihcTurFjODKxPSd0JHbV3fp25wqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCSEB1z0S2Lvg3dF%2FyrcA3nGGNReuXMr3KgxI3S7joeUM9R8%2F9RYgUCfN1JXVId8vqLLUjGKESyhVBi6ZuZ1sbDYPHeLYAg5px0kQQy28s220yVGQqX0QBtpFlnG4z%2FDt0EHwIJZjP1z0D1l1Pga%2FZOdtyVrHClrtfFfLIh9YwDsZVhTAljZhSY4Yp%2BEsvXh58T1GhUnc%2FRTC4N1UjblKyRogXR0YL4acv%2FU1xJ%2BzzET2HdHjKFzoe2WmZAva7GoOUlmSdpMTpdksGF6m88RJHeH0Jx7BPxcygV2pszDAXVSoQgkhdaWaKc0zUEadatyIs8yTmTOv7AHPXHlwBEmJTw7Cp6kVzn3gVM9QPps0uDElxf6subeEQuKK0RDrnpQ%2B0aK7qp5NEi8p6J9mB6U6kC0jf3Ek9ueZJIk8jceEpMJXqpt6hjAhYQoObzBPRBS2mcUzW8sUa1frYdoAxds4S9xQD8mfx8YrOxaYujK%2FqVspjB0vKgea0TzqmDMawc7BuYsR7brU3b5fB4SW2hLzoh42XwCVDmQRm0aEMH2NSHtPPyPdHLkcZiDcYNCFiEbZAI8IkZLLc%2BAo492UncanLvKpMtM7640fZZY7JN38UlVwreB0%2FLlh%2BlmfXKEwY5RkejViicmdBcNiHpOMLbZ8NIGOqUB%2BGG%2BZFZaYpWBsxKmWLDFA2ZdUMl6781eFfqU3ks2DP1bHTavZYcpLFWxTBxg9epY5ZoBGsjERqoVXCKLMztOCWhxdEtgYL9RmoD4lc%2BzLR8%2FWHy4DYMCQWMk4OyhpSIVLJHfU3nl6%2FFvkh5qK0JVCA19HFPotHEY0RLfDx0U8muk3Msa34Z5%2FcIzvg6k6PPoQzuTZdlgRtlRZWsob4WmChXYi3DY&X-Amz-Signature=066b055d08d0cc383f736ae12a8e6971f24ac5de50574a2b27bc606d584898bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4BTPVLO%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7kdoLz8JN5HxstJFeuVajvU6ie2uxyWp8vBVFFoNNsAIgTE6qUaUay5v4NxY%2BCihcTurFjODKxPSd0JHbV3fp25wqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCSEB1z0S2Lvg3dF%2FyrcA3nGGNReuXMr3KgxI3S7joeUM9R8%2F9RYgUCfN1JXVId8vqLLUjGKESyhVBi6ZuZ1sbDYPHeLYAg5px0kQQy28s220yVGQqX0QBtpFlnG4z%2FDt0EHwIJZjP1z0D1l1Pga%2FZOdtyVrHClrtfFfLIh9YwDsZVhTAljZhSY4Yp%2BEsvXh58T1GhUnc%2FRTC4N1UjblKyRogXR0YL4acv%2FU1xJ%2BzzET2HdHjKFzoe2WmZAva7GoOUlmSdpMTpdksGF6m88RJHeH0Jx7BPxcygV2pszDAXVSoQgkhdaWaKc0zUEadatyIs8yTmTOv7AHPXHlwBEmJTw7Cp6kVzn3gVM9QPps0uDElxf6subeEQuKK0RDrnpQ%2B0aK7qp5NEi8p6J9mB6U6kC0jf3Ek9ueZJIk8jceEpMJXqpt6hjAhYQoObzBPRBS2mcUzW8sUa1frYdoAxds4S9xQD8mfx8YrOxaYujK%2FqVspjB0vKgea0TzqmDMawc7BuYsR7brU3b5fB4SW2hLzoh42XwCVDmQRm0aEMH2NSHtPPyPdHLkcZiDcYNCFiEbZAI8IkZLLc%2BAo492UncanLvKpMtM7640fZZY7JN38UlVwreB0%2FLlh%2BlmfXKEwY5RkejViicmdBcNiHpOMLbZ8NIGOqUB%2BGG%2BZFZaYpWBsxKmWLDFA2ZdUMl6781eFfqU3ks2DP1bHTavZYcpLFWxTBxg9epY5ZoBGsjERqoVXCKLMztOCWhxdEtgYL9RmoD4lc%2BzLR8%2FWHy4DYMCQWMk4OyhpSIVLJHfU3nl6%2FFvkh5qK0JVCA19HFPotHEY0RLfDx0U8muk3Msa34Z5%2FcIzvg6k6PPoQzuTZdlgRtlRZWsob4WmChXYi3DY&X-Amz-Signature=b1f5b2e520d21bbf6dc253ab38ddfbc729de723a44945fcd1e00b2846fc5cf1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4BTPVLO%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7kdoLz8JN5HxstJFeuVajvU6ie2uxyWp8vBVFFoNNsAIgTE6qUaUay5v4NxY%2BCihcTurFjODKxPSd0JHbV3fp25wqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCSEB1z0S2Lvg3dF%2FyrcA3nGGNReuXMr3KgxI3S7joeUM9R8%2F9RYgUCfN1JXVId8vqLLUjGKESyhVBi6ZuZ1sbDYPHeLYAg5px0kQQy28s220yVGQqX0QBtpFlnG4z%2FDt0EHwIJZjP1z0D1l1Pga%2FZOdtyVrHClrtfFfLIh9YwDsZVhTAljZhSY4Yp%2BEsvXh58T1GhUnc%2FRTC4N1UjblKyRogXR0YL4acv%2FU1xJ%2BzzET2HdHjKFzoe2WmZAva7GoOUlmSdpMTpdksGF6m88RJHeH0Jx7BPxcygV2pszDAXVSoQgkhdaWaKc0zUEadatyIs8yTmTOv7AHPXHlwBEmJTw7Cp6kVzn3gVM9QPps0uDElxf6subeEQuKK0RDrnpQ%2B0aK7qp5NEi8p6J9mB6U6kC0jf3Ek9ueZJIk8jceEpMJXqpt6hjAhYQoObzBPRBS2mcUzW8sUa1frYdoAxds4S9xQD8mfx8YrOxaYujK%2FqVspjB0vKgea0TzqmDMawc7BuYsR7brU3b5fB4SW2hLzoh42XwCVDmQRm0aEMH2NSHtPPyPdHLkcZiDcYNCFiEbZAI8IkZLLc%2BAo492UncanLvKpMtM7640fZZY7JN38UlVwreB0%2FLlh%2BlmfXKEwY5RkejViicmdBcNiHpOMLbZ8NIGOqUB%2BGG%2BZFZaYpWBsxKmWLDFA2ZdUMl6781eFfqU3ks2DP1bHTavZYcpLFWxTBxg9epY5ZoBGsjERqoVXCKLMztOCWhxdEtgYL9RmoD4lc%2BzLR8%2FWHy4DYMCQWMk4OyhpSIVLJHfU3nl6%2FFvkh5qK0JVCA19HFPotHEY0RLfDx0U8muk3Msa34Z5%2FcIzvg6k6PPoQzuTZdlgRtlRZWsob4WmChXYi3DY&X-Amz-Signature=0491bf9b9ae65fac74998d6979d4402b6c1dea3a6f3100a2b7d8bd538adab2e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4BTPVLO%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7kdoLz8JN5HxstJFeuVajvU6ie2uxyWp8vBVFFoNNsAIgTE6qUaUay5v4NxY%2BCihcTurFjODKxPSd0JHbV3fp25wqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCSEB1z0S2Lvg3dF%2FyrcA3nGGNReuXMr3KgxI3S7joeUM9R8%2F9RYgUCfN1JXVId8vqLLUjGKESyhVBi6ZuZ1sbDYPHeLYAg5px0kQQy28s220yVGQqX0QBtpFlnG4z%2FDt0EHwIJZjP1z0D1l1Pga%2FZOdtyVrHClrtfFfLIh9YwDsZVhTAljZhSY4Yp%2BEsvXh58T1GhUnc%2FRTC4N1UjblKyRogXR0YL4acv%2FU1xJ%2BzzET2HdHjKFzoe2WmZAva7GoOUlmSdpMTpdksGF6m88RJHeH0Jx7BPxcygV2pszDAXVSoQgkhdaWaKc0zUEadatyIs8yTmTOv7AHPXHlwBEmJTw7Cp6kVzn3gVM9QPps0uDElxf6subeEQuKK0RDrnpQ%2B0aK7qp5NEi8p6J9mB6U6kC0jf3Ek9ueZJIk8jceEpMJXqpt6hjAhYQoObzBPRBS2mcUzW8sUa1frYdoAxds4S9xQD8mfx8YrOxaYujK%2FqVspjB0vKgea0TzqmDMawc7BuYsR7brU3b5fB4SW2hLzoh42XwCVDmQRm0aEMH2NSHtPPyPdHLkcZiDcYNCFiEbZAI8IkZLLc%2BAo492UncanLvKpMtM7640fZZY7JN38UlVwreB0%2FLlh%2BlmfXKEwY5RkejViicmdBcNiHpOMLbZ8NIGOqUB%2BGG%2BZFZaYpWBsxKmWLDFA2ZdUMl6781eFfqU3ks2DP1bHTavZYcpLFWxTBxg9epY5ZoBGsjERqoVXCKLMztOCWhxdEtgYL9RmoD4lc%2BzLR8%2FWHy4DYMCQWMk4OyhpSIVLJHfU3nl6%2FFvkh5qK0JVCA19HFPotHEY0RLfDx0U8muk3Msa34Z5%2FcIzvg6k6PPoQzuTZdlgRtlRZWsob4WmChXYi3DY&X-Amz-Signature=3173cf3141266eabeda7e327d9ce2bd08580e9a77d8515227c4fbdb0e96daa89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4BTPVLO%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7kdoLz8JN5HxstJFeuVajvU6ie2uxyWp8vBVFFoNNsAIgTE6qUaUay5v4NxY%2BCihcTurFjODKxPSd0JHbV3fp25wqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCSEB1z0S2Lvg3dF%2FyrcA3nGGNReuXMr3KgxI3S7joeUM9R8%2F9RYgUCfN1JXVId8vqLLUjGKESyhVBi6ZuZ1sbDYPHeLYAg5px0kQQy28s220yVGQqX0QBtpFlnG4z%2FDt0EHwIJZjP1z0D1l1Pga%2FZOdtyVrHClrtfFfLIh9YwDsZVhTAljZhSY4Yp%2BEsvXh58T1GhUnc%2FRTC4N1UjblKyRogXR0YL4acv%2FU1xJ%2BzzET2HdHjKFzoe2WmZAva7GoOUlmSdpMTpdksGF6m88RJHeH0Jx7BPxcygV2pszDAXVSoQgkhdaWaKc0zUEadatyIs8yTmTOv7AHPXHlwBEmJTw7Cp6kVzn3gVM9QPps0uDElxf6subeEQuKK0RDrnpQ%2B0aK7qp5NEi8p6J9mB6U6kC0jf3Ek9ueZJIk8jceEpMJXqpt6hjAhYQoObzBPRBS2mcUzW8sUa1frYdoAxds4S9xQD8mfx8YrOxaYujK%2FqVspjB0vKgea0TzqmDMawc7BuYsR7brU3b5fB4SW2hLzoh42XwCVDmQRm0aEMH2NSHtPPyPdHLkcZiDcYNCFiEbZAI8IkZLLc%2BAo492UncanLvKpMtM7640fZZY7JN38UlVwreB0%2FLlh%2BlmfXKEwY5RkejViicmdBcNiHpOMLbZ8NIGOqUB%2BGG%2BZFZaYpWBsxKmWLDFA2ZdUMl6781eFfqU3ks2DP1bHTavZYcpLFWxTBxg9epY5ZoBGsjERqoVXCKLMztOCWhxdEtgYL9RmoD4lc%2BzLR8%2FWHy4DYMCQWMk4OyhpSIVLJHfU3nl6%2FFvkh5qK0JVCA19HFPotHEY0RLfDx0U8muk3Msa34Z5%2FcIzvg6k6PPoQzuTZdlgRtlRZWsob4WmChXYi3DY&X-Amz-Signature=05a00781bf8c741a02deae64eb029203b48aaf1ecbac35c6d5a3160fdd9973cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4BTPVLO%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7kdoLz8JN5HxstJFeuVajvU6ie2uxyWp8vBVFFoNNsAIgTE6qUaUay5v4NxY%2BCihcTurFjODKxPSd0JHbV3fp25wqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCSEB1z0S2Lvg3dF%2FyrcA3nGGNReuXMr3KgxI3S7joeUM9R8%2F9RYgUCfN1JXVId8vqLLUjGKESyhVBi6ZuZ1sbDYPHeLYAg5px0kQQy28s220yVGQqX0QBtpFlnG4z%2FDt0EHwIJZjP1z0D1l1Pga%2FZOdtyVrHClrtfFfLIh9YwDsZVhTAljZhSY4Yp%2BEsvXh58T1GhUnc%2FRTC4N1UjblKyRogXR0YL4acv%2FU1xJ%2BzzET2HdHjKFzoe2WmZAva7GoOUlmSdpMTpdksGF6m88RJHeH0Jx7BPxcygV2pszDAXVSoQgkhdaWaKc0zUEadatyIs8yTmTOv7AHPXHlwBEmJTw7Cp6kVzn3gVM9QPps0uDElxf6subeEQuKK0RDrnpQ%2B0aK7qp5NEi8p6J9mB6U6kC0jf3Ek9ueZJIk8jceEpMJXqpt6hjAhYQoObzBPRBS2mcUzW8sUa1frYdoAxds4S9xQD8mfx8YrOxaYujK%2FqVspjB0vKgea0TzqmDMawc7BuYsR7brU3b5fB4SW2hLzoh42XwCVDmQRm0aEMH2NSHtPPyPdHLkcZiDcYNCFiEbZAI8IkZLLc%2BAo492UncanLvKpMtM7640fZZY7JN38UlVwreB0%2FLlh%2BlmfXKEwY5RkejViicmdBcNiHpOMLbZ8NIGOqUB%2BGG%2BZFZaYpWBsxKmWLDFA2ZdUMl6781eFfqU3ks2DP1bHTavZYcpLFWxTBxg9epY5ZoBGsjERqoVXCKLMztOCWhxdEtgYL9RmoD4lc%2BzLR8%2FWHy4DYMCQWMk4OyhpSIVLJHfU3nl6%2FFvkh5qK0JVCA19HFPotHEY0RLfDx0U8muk3Msa34Z5%2FcIzvg6k6PPoQzuTZdlgRtlRZWsob4WmChXYi3DY&X-Amz-Signature=fbc84435ddb6dab5174d25b7d8fd753725297e191e4a3a2f6da39e1fac178a61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4BTPVLO%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7kdoLz8JN5HxstJFeuVajvU6ie2uxyWp8vBVFFoNNsAIgTE6qUaUay5v4NxY%2BCihcTurFjODKxPSd0JHbV3fp25wqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCSEB1z0S2Lvg3dF%2FyrcA3nGGNReuXMr3KgxI3S7joeUM9R8%2F9RYgUCfN1JXVId8vqLLUjGKESyhVBi6ZuZ1sbDYPHeLYAg5px0kQQy28s220yVGQqX0QBtpFlnG4z%2FDt0EHwIJZjP1z0D1l1Pga%2FZOdtyVrHClrtfFfLIh9YwDsZVhTAljZhSY4Yp%2BEsvXh58T1GhUnc%2FRTC4N1UjblKyRogXR0YL4acv%2FU1xJ%2BzzET2HdHjKFzoe2WmZAva7GoOUlmSdpMTpdksGF6m88RJHeH0Jx7BPxcygV2pszDAXVSoQgkhdaWaKc0zUEadatyIs8yTmTOv7AHPXHlwBEmJTw7Cp6kVzn3gVM9QPps0uDElxf6subeEQuKK0RDrnpQ%2B0aK7qp5NEi8p6J9mB6U6kC0jf3Ek9ueZJIk8jceEpMJXqpt6hjAhYQoObzBPRBS2mcUzW8sUa1frYdoAxds4S9xQD8mfx8YrOxaYujK%2FqVspjB0vKgea0TzqmDMawc7BuYsR7brU3b5fB4SW2hLzoh42XwCVDmQRm0aEMH2NSHtPPyPdHLkcZiDcYNCFiEbZAI8IkZLLc%2BAo492UncanLvKpMtM7640fZZY7JN38UlVwreB0%2FLlh%2BlmfXKEwY5RkejViicmdBcNiHpOMLbZ8NIGOqUB%2BGG%2BZFZaYpWBsxKmWLDFA2ZdUMl6781eFfqU3ks2DP1bHTavZYcpLFWxTBxg9epY5ZoBGsjERqoVXCKLMztOCWhxdEtgYL9RmoD4lc%2BzLR8%2FWHy4DYMCQWMk4OyhpSIVLJHfU3nl6%2FFvkh5qK0JVCA19HFPotHEY0RLfDx0U8muk3Msa34Z5%2FcIzvg6k6PPoQzuTZdlgRtlRZWsob4WmChXYi3DY&X-Amz-Signature=02c05ba7cdfc08a2b26d94da79c3f914192773e6b63267720e78c08aa9451a8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4BTPVLO%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7kdoLz8JN5HxstJFeuVajvU6ie2uxyWp8vBVFFoNNsAIgTE6qUaUay5v4NxY%2BCihcTurFjODKxPSd0JHbV3fp25wqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCSEB1z0S2Lvg3dF%2FyrcA3nGGNReuXMr3KgxI3S7joeUM9R8%2F9RYgUCfN1JXVId8vqLLUjGKESyhVBi6ZuZ1sbDYPHeLYAg5px0kQQy28s220yVGQqX0QBtpFlnG4z%2FDt0EHwIJZjP1z0D1l1Pga%2FZOdtyVrHClrtfFfLIh9YwDsZVhTAljZhSY4Yp%2BEsvXh58T1GhUnc%2FRTC4N1UjblKyRogXR0YL4acv%2FU1xJ%2BzzET2HdHjKFzoe2WmZAva7GoOUlmSdpMTpdksGF6m88RJHeH0Jx7BPxcygV2pszDAXVSoQgkhdaWaKc0zUEadatyIs8yTmTOv7AHPXHlwBEmJTw7Cp6kVzn3gVM9QPps0uDElxf6subeEQuKK0RDrnpQ%2B0aK7qp5NEi8p6J9mB6U6kC0jf3Ek9ueZJIk8jceEpMJXqpt6hjAhYQoObzBPRBS2mcUzW8sUa1frYdoAxds4S9xQD8mfx8YrOxaYujK%2FqVspjB0vKgea0TzqmDMawc7BuYsR7brU3b5fB4SW2hLzoh42XwCVDmQRm0aEMH2NSHtPPyPdHLkcZiDcYNCFiEbZAI8IkZLLc%2BAo492UncanLvKpMtM7640fZZY7JN38UlVwreB0%2FLlh%2BlmfXKEwY5RkejViicmdBcNiHpOMLbZ8NIGOqUB%2BGG%2BZFZaYpWBsxKmWLDFA2ZdUMl6781eFfqU3ks2DP1bHTavZYcpLFWxTBxg9epY5ZoBGsjERqoVXCKLMztOCWhxdEtgYL9RmoD4lc%2BzLR8%2FWHy4DYMCQWMk4OyhpSIVLJHfU3nl6%2FFvkh5qK0JVCA19HFPotHEY0RLfDx0U8muk3Msa34Z5%2FcIzvg6k6PPoQzuTZdlgRtlRZWsob4WmChXYi3DY&X-Amz-Signature=dd13a049a7af1aa6c92426245d9211ec8ade972b1a98d461bbf0bfed55094c0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4BTPVLO%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7kdoLz8JN5HxstJFeuVajvU6ie2uxyWp8vBVFFoNNsAIgTE6qUaUay5v4NxY%2BCihcTurFjODKxPSd0JHbV3fp25wqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCSEB1z0S2Lvg3dF%2FyrcA3nGGNReuXMr3KgxI3S7joeUM9R8%2F9RYgUCfN1JXVId8vqLLUjGKESyhVBi6ZuZ1sbDYPHeLYAg5px0kQQy28s220yVGQqX0QBtpFlnG4z%2FDt0EHwIJZjP1z0D1l1Pga%2FZOdtyVrHClrtfFfLIh9YwDsZVhTAljZhSY4Yp%2BEsvXh58T1GhUnc%2FRTC4N1UjblKyRogXR0YL4acv%2FU1xJ%2BzzET2HdHjKFzoe2WmZAva7GoOUlmSdpMTpdksGF6m88RJHeH0Jx7BPxcygV2pszDAXVSoQgkhdaWaKc0zUEadatyIs8yTmTOv7AHPXHlwBEmJTw7Cp6kVzn3gVM9QPps0uDElxf6subeEQuKK0RDrnpQ%2B0aK7qp5NEi8p6J9mB6U6kC0jf3Ek9ueZJIk8jceEpMJXqpt6hjAhYQoObzBPRBS2mcUzW8sUa1frYdoAxds4S9xQD8mfx8YrOxaYujK%2FqVspjB0vKgea0TzqmDMawc7BuYsR7brU3b5fB4SW2hLzoh42XwCVDmQRm0aEMH2NSHtPPyPdHLkcZiDcYNCFiEbZAI8IkZLLc%2BAo492UncanLvKpMtM7640fZZY7JN38UlVwreB0%2FLlh%2BlmfXKEwY5RkejViicmdBcNiHpOMLbZ8NIGOqUB%2BGG%2BZFZaYpWBsxKmWLDFA2ZdUMl6781eFfqU3ks2DP1bHTavZYcpLFWxTBxg9epY5ZoBGsjERqoVXCKLMztOCWhxdEtgYL9RmoD4lc%2BzLR8%2FWHy4DYMCQWMk4OyhpSIVLJHfU3nl6%2FFvkh5qK0JVCA19HFPotHEY0RLfDx0U8muk3Msa34Z5%2FcIzvg6k6PPoQzuTZdlgRtlRZWsob4WmChXYi3DY&X-Amz-Signature=2565177872b94a629bf8f066ea687bebe132a2da35b3a6c4bc3e40999e488026&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4BTPVLO%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7kdoLz8JN5HxstJFeuVajvU6ie2uxyWp8vBVFFoNNsAIgTE6qUaUay5v4NxY%2BCihcTurFjODKxPSd0JHbV3fp25wqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCSEB1z0S2Lvg3dF%2FyrcA3nGGNReuXMr3KgxI3S7joeUM9R8%2F9RYgUCfN1JXVId8vqLLUjGKESyhVBi6ZuZ1sbDYPHeLYAg5px0kQQy28s220yVGQqX0QBtpFlnG4z%2FDt0EHwIJZjP1z0D1l1Pga%2FZOdtyVrHClrtfFfLIh9YwDsZVhTAljZhSY4Yp%2BEsvXh58T1GhUnc%2FRTC4N1UjblKyRogXR0YL4acv%2FU1xJ%2BzzET2HdHjKFzoe2WmZAva7GoOUlmSdpMTpdksGF6m88RJHeH0Jx7BPxcygV2pszDAXVSoQgkhdaWaKc0zUEadatyIs8yTmTOv7AHPXHlwBEmJTw7Cp6kVzn3gVM9QPps0uDElxf6subeEQuKK0RDrnpQ%2B0aK7qp5NEi8p6J9mB6U6kC0jf3Ek9ueZJIk8jceEpMJXqpt6hjAhYQoObzBPRBS2mcUzW8sUa1frYdoAxds4S9xQD8mfx8YrOxaYujK%2FqVspjB0vKgea0TzqmDMawc7BuYsR7brU3b5fB4SW2hLzoh42XwCVDmQRm0aEMH2NSHtPPyPdHLkcZiDcYNCFiEbZAI8IkZLLc%2BAo492UncanLvKpMtM7640fZZY7JN38UlVwreB0%2FLlh%2BlmfXKEwY5RkejViicmdBcNiHpOMLbZ8NIGOqUB%2BGG%2BZFZaYpWBsxKmWLDFA2ZdUMl6781eFfqU3ks2DP1bHTavZYcpLFWxTBxg9epY5ZoBGsjERqoVXCKLMztOCWhxdEtgYL9RmoD4lc%2BzLR8%2FWHy4DYMCQWMk4OyhpSIVLJHfU3nl6%2FFvkh5qK0JVCA19HFPotHEY0RLfDx0U8muk3Msa34Z5%2FcIzvg6k6PPoQzuTZdlgRtlRZWsob4WmChXYi3DY&X-Amz-Signature=11f1f1b3d598d3ff68e611a2253172a616590b0920a3e849514dda0680966fb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4BTPVLO%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7kdoLz8JN5HxstJFeuVajvU6ie2uxyWp8vBVFFoNNsAIgTE6qUaUay5v4NxY%2BCihcTurFjODKxPSd0JHbV3fp25wqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCSEB1z0S2Lvg3dF%2FyrcA3nGGNReuXMr3KgxI3S7joeUM9R8%2F9RYgUCfN1JXVId8vqLLUjGKESyhVBi6ZuZ1sbDYPHeLYAg5px0kQQy28s220yVGQqX0QBtpFlnG4z%2FDt0EHwIJZjP1z0D1l1Pga%2FZOdtyVrHClrtfFfLIh9YwDsZVhTAljZhSY4Yp%2BEsvXh58T1GhUnc%2FRTC4N1UjblKyRogXR0YL4acv%2FU1xJ%2BzzET2HdHjKFzoe2WmZAva7GoOUlmSdpMTpdksGF6m88RJHeH0Jx7BPxcygV2pszDAXVSoQgkhdaWaKc0zUEadatyIs8yTmTOv7AHPXHlwBEmJTw7Cp6kVzn3gVM9QPps0uDElxf6subeEQuKK0RDrnpQ%2B0aK7qp5NEi8p6J9mB6U6kC0jf3Ek9ueZJIk8jceEpMJXqpt6hjAhYQoObzBPRBS2mcUzW8sUa1frYdoAxds4S9xQD8mfx8YrOxaYujK%2FqVspjB0vKgea0TzqmDMawc7BuYsR7brU3b5fB4SW2hLzoh42XwCVDmQRm0aEMH2NSHtPPyPdHLkcZiDcYNCFiEbZAI8IkZLLc%2BAo492UncanLvKpMtM7640fZZY7JN38UlVwreB0%2FLlh%2BlmfXKEwY5RkejViicmdBcNiHpOMLbZ8NIGOqUB%2BGG%2BZFZaYpWBsxKmWLDFA2ZdUMl6781eFfqU3ks2DP1bHTavZYcpLFWxTBxg9epY5ZoBGsjERqoVXCKLMztOCWhxdEtgYL9RmoD4lc%2BzLR8%2FWHy4DYMCQWMk4OyhpSIVLJHfU3nl6%2FFvkh5qK0JVCA19HFPotHEY0RLfDx0U8muk3Msa34Z5%2FcIzvg6k6PPoQzuTZdlgRtlRZWsob4WmChXYi3DY&X-Amz-Signature=3153675fc5ea97193cc4e9abb7a419625b16a856347c26e0b465fdcb5db770e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4BTPVLO%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7kdoLz8JN5HxstJFeuVajvU6ie2uxyWp8vBVFFoNNsAIgTE6qUaUay5v4NxY%2BCihcTurFjODKxPSd0JHbV3fp25wqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCSEB1z0S2Lvg3dF%2FyrcA3nGGNReuXMr3KgxI3S7joeUM9R8%2F9RYgUCfN1JXVId8vqLLUjGKESyhVBi6ZuZ1sbDYPHeLYAg5px0kQQy28s220yVGQqX0QBtpFlnG4z%2FDt0EHwIJZjP1z0D1l1Pga%2FZOdtyVrHClrtfFfLIh9YwDsZVhTAljZhSY4Yp%2BEsvXh58T1GhUnc%2FRTC4N1UjblKyRogXR0YL4acv%2FU1xJ%2BzzET2HdHjKFzoe2WmZAva7GoOUlmSdpMTpdksGF6m88RJHeH0Jx7BPxcygV2pszDAXVSoQgkhdaWaKc0zUEadatyIs8yTmTOv7AHPXHlwBEmJTw7Cp6kVzn3gVM9QPps0uDElxf6subeEQuKK0RDrnpQ%2B0aK7qp5NEi8p6J9mB6U6kC0jf3Ek9ueZJIk8jceEpMJXqpt6hjAhYQoObzBPRBS2mcUzW8sUa1frYdoAxds4S9xQD8mfx8YrOxaYujK%2FqVspjB0vKgea0TzqmDMawc7BuYsR7brU3b5fB4SW2hLzoh42XwCVDmQRm0aEMH2NSHtPPyPdHLkcZiDcYNCFiEbZAI8IkZLLc%2BAo492UncanLvKpMtM7640fZZY7JN38UlVwreB0%2FLlh%2BlmfXKEwY5RkejViicmdBcNiHpOMLbZ8NIGOqUB%2BGG%2BZFZaYpWBsxKmWLDFA2ZdUMl6781eFfqU3ks2DP1bHTavZYcpLFWxTBxg9epY5ZoBGsjERqoVXCKLMztOCWhxdEtgYL9RmoD4lc%2BzLR8%2FWHy4DYMCQWMk4OyhpSIVLJHfU3nl6%2FFvkh5qK0JVCA19HFPotHEY0RLfDx0U8muk3Msa34Z5%2FcIzvg6k6PPoQzuTZdlgRtlRZWsob4WmChXYi3DY&X-Amz-Signature=b0eab8f47786945825a50c7054f341c671f9d48149ad8ee2b716f1f62ae2f609&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4BTPVLO%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7kdoLz8JN5HxstJFeuVajvU6ie2uxyWp8vBVFFoNNsAIgTE6qUaUay5v4NxY%2BCihcTurFjODKxPSd0JHbV3fp25wqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCSEB1z0S2Lvg3dF%2FyrcA3nGGNReuXMr3KgxI3S7joeUM9R8%2F9RYgUCfN1JXVId8vqLLUjGKESyhVBi6ZuZ1sbDYPHeLYAg5px0kQQy28s220yVGQqX0QBtpFlnG4z%2FDt0EHwIJZjP1z0D1l1Pga%2FZOdtyVrHClrtfFfLIh9YwDsZVhTAljZhSY4Yp%2BEsvXh58T1GhUnc%2FRTC4N1UjblKyRogXR0YL4acv%2FU1xJ%2BzzET2HdHjKFzoe2WmZAva7GoOUlmSdpMTpdksGF6m88RJHeH0Jx7BPxcygV2pszDAXVSoQgkhdaWaKc0zUEadatyIs8yTmTOv7AHPXHlwBEmJTw7Cp6kVzn3gVM9QPps0uDElxf6subeEQuKK0RDrnpQ%2B0aK7qp5NEi8p6J9mB6U6kC0jf3Ek9ueZJIk8jceEpMJXqpt6hjAhYQoObzBPRBS2mcUzW8sUa1frYdoAxds4S9xQD8mfx8YrOxaYujK%2FqVspjB0vKgea0TzqmDMawc7BuYsR7brU3b5fB4SW2hLzoh42XwCVDmQRm0aEMH2NSHtPPyPdHLkcZiDcYNCFiEbZAI8IkZLLc%2BAo492UncanLvKpMtM7640fZZY7JN38UlVwreB0%2FLlh%2BlmfXKEwY5RkejViicmdBcNiHpOMLbZ8NIGOqUB%2BGG%2BZFZaYpWBsxKmWLDFA2ZdUMl6781eFfqU3ks2DP1bHTavZYcpLFWxTBxg9epY5ZoBGsjERqoVXCKLMztOCWhxdEtgYL9RmoD4lc%2BzLR8%2FWHy4DYMCQWMk4OyhpSIVLJHfU3nl6%2FFvkh5qK0JVCA19HFPotHEY0RLfDx0U8muk3Msa34Z5%2FcIzvg6k6PPoQzuTZdlgRtlRZWsob4WmChXYi3DY&X-Amz-Signature=b26820069745720240b8a4d037b7604f20626dafba6de75ab0e6475f1ba628f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4BTPVLO%2F20260719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260719T024341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7kdoLz8JN5HxstJFeuVajvU6ie2uxyWp8vBVFFoNNsAIgTE6qUaUay5v4NxY%2BCihcTurFjODKxPSd0JHbV3fp25wqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCSEB1z0S2Lvg3dF%2FyrcA3nGGNReuXMr3KgxI3S7joeUM9R8%2F9RYgUCfN1JXVId8vqLLUjGKESyhVBi6ZuZ1sbDYPHeLYAg5px0kQQy28s220yVGQqX0QBtpFlnG4z%2FDt0EHwIJZjP1z0D1l1Pga%2FZOdtyVrHClrtfFfLIh9YwDsZVhTAljZhSY4Yp%2BEsvXh58T1GhUnc%2FRTC4N1UjblKyRogXR0YL4acv%2FU1xJ%2BzzET2HdHjKFzoe2WmZAva7GoOUlmSdpMTpdksGF6m88RJHeH0Jx7BPxcygV2pszDAXVSoQgkhdaWaKc0zUEadatyIs8yTmTOv7AHPXHlwBEmJTw7Cp6kVzn3gVM9QPps0uDElxf6subeEQuKK0RDrnpQ%2B0aK7qp5NEi8p6J9mB6U6kC0jf3Ek9ueZJIk8jceEpMJXqpt6hjAhYQoObzBPRBS2mcUzW8sUa1frYdoAxds4S9xQD8mfx8YrOxaYujK%2FqVspjB0vKgea0TzqmDMawc7BuYsR7brU3b5fB4SW2hLzoh42XwCVDmQRm0aEMH2NSHtPPyPdHLkcZiDcYNCFiEbZAI8IkZLLc%2BAo492UncanLvKpMtM7640fZZY7JN38UlVwreB0%2FLlh%2BlmfXKEwY5RkejViicmdBcNiHpOMLbZ8NIGOqUB%2BGG%2BZFZaYpWBsxKmWLDFA2ZdUMl6781eFfqU3ks2DP1bHTavZYcpLFWxTBxg9epY5ZoBGsjERqoVXCKLMztOCWhxdEtgYL9RmoD4lc%2BzLR8%2FWHy4DYMCQWMk4OyhpSIVLJHfU3nl6%2FFvkh5qK0JVCA19HFPotHEY0RLfDx0U8muk3Msa34Z5%2FcIzvg6k6PPoQzuTZdlgRtlRZWsob4WmChXYi3DY&X-Amz-Signature=077cc747204515283629f3f7301e01ba511d453038f43d612e6eb0058aa521ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
