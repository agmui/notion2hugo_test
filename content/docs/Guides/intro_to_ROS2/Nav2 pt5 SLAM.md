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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI5MKVNF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDK3eG9EIj09hmG%2FqPscDpAgo85dFG21pHh2QWhwjxOvAiARjh2D6c7J6s%2F7sxD%2FIP%2FpuNgR8Gd2f6ATDFD4sBhK9SqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO8wX7hqvqgjbUgyJKtwDohuHffSekXQDoCsqdPQhdc1238wcykGdNaQVkdkN1e%2BgtLt2iRpYwS4cQCcGHo9AnM%2FKehVKTDEu2J9mlr1Mo%2FuUXZ2OUo7GTDHDMAZnfxiEzUQYnNr0ReoBxRt3SjSJgBIWQhYRMwFwFFXY1pbMH8fEDta4Bly7%2F%2F%2BAH4t4uDNfyDNQGTV9347Anr32cf6CG8AgUeFFPIJDWAnGI3OFzpN%2BNCZ8Y5E8mLAirMadgaBKT2MoNUKLYuNBQwn84E%2F6YbOcjPCNzymOUIWGwmuUu8bkYjRkPUF7tQZFRlVerYfmAhey2pgZ5doAfYXpZhssKTiC6alBfu97FlBEzRN6oOc2XmMke5EC1T%2BisCGgKYcJ%2Fu9xr0gXOMgbDFrfqDs34W8sz1Stdw3xFkH9HdzjNLH1jihIk%2BbKMekRNtEblko0vYnE3V86AQ3hhObemdHMhTQC1snJPLd5lVi9IvqncMQFZXZZJ3I2KMyHRL3FhTOxMgVwCP8DvU0aXzC%2FJcL5O%2F%2BmrTCfwHcHQHZh%2FuFn%2BjhZ7hJ%2Fp3KMK5PvrhhdO7nXvlUODCFxNY6Rf%2Bs%2FHGulnPAXgxq2r8uOmC9gAG6kpLNMTKEMEl9bvVTk2ss36IxHCUqZQTyheP7i0fEw4aLnxAY6pgFok87%2Bi1lwlV7aVcJrn82EX3UdxjJ6SAk3PdB%2Fd4sms4pyUEsHWTM%2BBooqXCV4NbTAlI5GpohA0MuRKiFIvdFiX9e7N%2F4sd%2FggkoIJwOEIEMTePAT4N4EP%2Fz9mKmKmu8XL1a3VlZ3jAfOPVxQtYMeUkoD0XisFzo%2Fk9kKyz2WdL1DciGjehP3Vw6N0A4%2BAgMB5gvny2M65AfV0mXwfV6mXKMc0nRk1&X-Amz-Signature=70dc88c42054e1d49abc30b06adb3d072ac49e62c3bb46593c98ef99cefdf7ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI5MKVNF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDK3eG9EIj09hmG%2FqPscDpAgo85dFG21pHh2QWhwjxOvAiARjh2D6c7J6s%2F7sxD%2FIP%2FpuNgR8Gd2f6ATDFD4sBhK9SqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO8wX7hqvqgjbUgyJKtwDohuHffSekXQDoCsqdPQhdc1238wcykGdNaQVkdkN1e%2BgtLt2iRpYwS4cQCcGHo9AnM%2FKehVKTDEu2J9mlr1Mo%2FuUXZ2OUo7GTDHDMAZnfxiEzUQYnNr0ReoBxRt3SjSJgBIWQhYRMwFwFFXY1pbMH8fEDta4Bly7%2F%2F%2BAH4t4uDNfyDNQGTV9347Anr32cf6CG8AgUeFFPIJDWAnGI3OFzpN%2BNCZ8Y5E8mLAirMadgaBKT2MoNUKLYuNBQwn84E%2F6YbOcjPCNzymOUIWGwmuUu8bkYjRkPUF7tQZFRlVerYfmAhey2pgZ5doAfYXpZhssKTiC6alBfu97FlBEzRN6oOc2XmMke5EC1T%2BisCGgKYcJ%2Fu9xr0gXOMgbDFrfqDs34W8sz1Stdw3xFkH9HdzjNLH1jihIk%2BbKMekRNtEblko0vYnE3V86AQ3hhObemdHMhTQC1snJPLd5lVi9IvqncMQFZXZZJ3I2KMyHRL3FhTOxMgVwCP8DvU0aXzC%2FJcL5O%2F%2BmrTCfwHcHQHZh%2FuFn%2BjhZ7hJ%2Fp3KMK5PvrhhdO7nXvlUODCFxNY6Rf%2Bs%2FHGulnPAXgxq2r8uOmC9gAG6kpLNMTKEMEl9bvVTk2ss36IxHCUqZQTyheP7i0fEw4aLnxAY6pgFok87%2Bi1lwlV7aVcJrn82EX3UdxjJ6SAk3PdB%2Fd4sms4pyUEsHWTM%2BBooqXCV4NbTAlI5GpohA0MuRKiFIvdFiX9e7N%2F4sd%2FggkoIJwOEIEMTePAT4N4EP%2Fz9mKmKmu8XL1a3VlZ3jAfOPVxQtYMeUkoD0XisFzo%2Fk9kKyz2WdL1DciGjehP3Vw6N0A4%2BAgMB5gvny2M65AfV0mXwfV6mXKMc0nRk1&X-Amz-Signature=33273cf27f2cc9b38381bcf15ebb1d84bc74386f96adf1c24040344ab280ea17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI5MKVNF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDK3eG9EIj09hmG%2FqPscDpAgo85dFG21pHh2QWhwjxOvAiARjh2D6c7J6s%2F7sxD%2FIP%2FpuNgR8Gd2f6ATDFD4sBhK9SqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO8wX7hqvqgjbUgyJKtwDohuHffSekXQDoCsqdPQhdc1238wcykGdNaQVkdkN1e%2BgtLt2iRpYwS4cQCcGHo9AnM%2FKehVKTDEu2J9mlr1Mo%2FuUXZ2OUo7GTDHDMAZnfxiEzUQYnNr0ReoBxRt3SjSJgBIWQhYRMwFwFFXY1pbMH8fEDta4Bly7%2F%2F%2BAH4t4uDNfyDNQGTV9347Anr32cf6CG8AgUeFFPIJDWAnGI3OFzpN%2BNCZ8Y5E8mLAirMadgaBKT2MoNUKLYuNBQwn84E%2F6YbOcjPCNzymOUIWGwmuUu8bkYjRkPUF7tQZFRlVerYfmAhey2pgZ5doAfYXpZhssKTiC6alBfu97FlBEzRN6oOc2XmMke5EC1T%2BisCGgKYcJ%2Fu9xr0gXOMgbDFrfqDs34W8sz1Stdw3xFkH9HdzjNLH1jihIk%2BbKMekRNtEblko0vYnE3V86AQ3hhObemdHMhTQC1snJPLd5lVi9IvqncMQFZXZZJ3I2KMyHRL3FhTOxMgVwCP8DvU0aXzC%2FJcL5O%2F%2BmrTCfwHcHQHZh%2FuFn%2BjhZ7hJ%2Fp3KMK5PvrhhdO7nXvlUODCFxNY6Rf%2Bs%2FHGulnPAXgxq2r8uOmC9gAG6kpLNMTKEMEl9bvVTk2ss36IxHCUqZQTyheP7i0fEw4aLnxAY6pgFok87%2Bi1lwlV7aVcJrn82EX3UdxjJ6SAk3PdB%2Fd4sms4pyUEsHWTM%2BBooqXCV4NbTAlI5GpohA0MuRKiFIvdFiX9e7N%2F4sd%2FggkoIJwOEIEMTePAT4N4EP%2Fz9mKmKmu8XL1a3VlZ3jAfOPVxQtYMeUkoD0XisFzo%2Fk9kKyz2WdL1DciGjehP3Vw6N0A4%2BAgMB5gvny2M65AfV0mXwfV6mXKMc0nRk1&X-Amz-Signature=9399956e958544a5dff96048d03782d7c9cd0410eb773d8a2d8d00f7a2fe5110&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI5MKVNF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDK3eG9EIj09hmG%2FqPscDpAgo85dFG21pHh2QWhwjxOvAiARjh2D6c7J6s%2F7sxD%2FIP%2FpuNgR8Gd2f6ATDFD4sBhK9SqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO8wX7hqvqgjbUgyJKtwDohuHffSekXQDoCsqdPQhdc1238wcykGdNaQVkdkN1e%2BgtLt2iRpYwS4cQCcGHo9AnM%2FKehVKTDEu2J9mlr1Mo%2FuUXZ2OUo7GTDHDMAZnfxiEzUQYnNr0ReoBxRt3SjSJgBIWQhYRMwFwFFXY1pbMH8fEDta4Bly7%2F%2F%2BAH4t4uDNfyDNQGTV9347Anr32cf6CG8AgUeFFPIJDWAnGI3OFzpN%2BNCZ8Y5E8mLAirMadgaBKT2MoNUKLYuNBQwn84E%2F6YbOcjPCNzymOUIWGwmuUu8bkYjRkPUF7tQZFRlVerYfmAhey2pgZ5doAfYXpZhssKTiC6alBfu97FlBEzRN6oOc2XmMke5EC1T%2BisCGgKYcJ%2Fu9xr0gXOMgbDFrfqDs34W8sz1Stdw3xFkH9HdzjNLH1jihIk%2BbKMekRNtEblko0vYnE3V86AQ3hhObemdHMhTQC1snJPLd5lVi9IvqncMQFZXZZJ3I2KMyHRL3FhTOxMgVwCP8DvU0aXzC%2FJcL5O%2F%2BmrTCfwHcHQHZh%2FuFn%2BjhZ7hJ%2Fp3KMK5PvrhhdO7nXvlUODCFxNY6Rf%2Bs%2FHGulnPAXgxq2r8uOmC9gAG6kpLNMTKEMEl9bvVTk2ss36IxHCUqZQTyheP7i0fEw4aLnxAY6pgFok87%2Bi1lwlV7aVcJrn82EX3UdxjJ6SAk3PdB%2Fd4sms4pyUEsHWTM%2BBooqXCV4NbTAlI5GpohA0MuRKiFIvdFiX9e7N%2F4sd%2FggkoIJwOEIEMTePAT4N4EP%2Fz9mKmKmu8XL1a3VlZ3jAfOPVxQtYMeUkoD0XisFzo%2Fk9kKyz2WdL1DciGjehP3Vw6N0A4%2BAgMB5gvny2M65AfV0mXwfV6mXKMc0nRk1&X-Amz-Signature=28433effb58f64eae9cf51e8b6a0eb92971ffb7f29b692c18cf7aa1720425a4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI5MKVNF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDK3eG9EIj09hmG%2FqPscDpAgo85dFG21pHh2QWhwjxOvAiARjh2D6c7J6s%2F7sxD%2FIP%2FpuNgR8Gd2f6ATDFD4sBhK9SqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO8wX7hqvqgjbUgyJKtwDohuHffSekXQDoCsqdPQhdc1238wcykGdNaQVkdkN1e%2BgtLt2iRpYwS4cQCcGHo9AnM%2FKehVKTDEu2J9mlr1Mo%2FuUXZ2OUo7GTDHDMAZnfxiEzUQYnNr0ReoBxRt3SjSJgBIWQhYRMwFwFFXY1pbMH8fEDta4Bly7%2F%2F%2BAH4t4uDNfyDNQGTV9347Anr32cf6CG8AgUeFFPIJDWAnGI3OFzpN%2BNCZ8Y5E8mLAirMadgaBKT2MoNUKLYuNBQwn84E%2F6YbOcjPCNzymOUIWGwmuUu8bkYjRkPUF7tQZFRlVerYfmAhey2pgZ5doAfYXpZhssKTiC6alBfu97FlBEzRN6oOc2XmMke5EC1T%2BisCGgKYcJ%2Fu9xr0gXOMgbDFrfqDs34W8sz1Stdw3xFkH9HdzjNLH1jihIk%2BbKMekRNtEblko0vYnE3V86AQ3hhObemdHMhTQC1snJPLd5lVi9IvqncMQFZXZZJ3I2KMyHRL3FhTOxMgVwCP8DvU0aXzC%2FJcL5O%2F%2BmrTCfwHcHQHZh%2FuFn%2BjhZ7hJ%2Fp3KMK5PvrhhdO7nXvlUODCFxNY6Rf%2Bs%2FHGulnPAXgxq2r8uOmC9gAG6kpLNMTKEMEl9bvVTk2ss36IxHCUqZQTyheP7i0fEw4aLnxAY6pgFok87%2Bi1lwlV7aVcJrn82EX3UdxjJ6SAk3PdB%2Fd4sms4pyUEsHWTM%2BBooqXCV4NbTAlI5GpohA0MuRKiFIvdFiX9e7N%2F4sd%2FggkoIJwOEIEMTePAT4N4EP%2Fz9mKmKmu8XL1a3VlZ3jAfOPVxQtYMeUkoD0XisFzo%2Fk9kKyz2WdL1DciGjehP3Vw6N0A4%2BAgMB5gvny2M65AfV0mXwfV6mXKMc0nRk1&X-Amz-Signature=df820059d87fe58126ce12b9c259da54ba710c7177726bd67a40c857e5c2344f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI5MKVNF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDK3eG9EIj09hmG%2FqPscDpAgo85dFG21pHh2QWhwjxOvAiARjh2D6c7J6s%2F7sxD%2FIP%2FpuNgR8Gd2f6ATDFD4sBhK9SqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO8wX7hqvqgjbUgyJKtwDohuHffSekXQDoCsqdPQhdc1238wcykGdNaQVkdkN1e%2BgtLt2iRpYwS4cQCcGHo9AnM%2FKehVKTDEu2J9mlr1Mo%2FuUXZ2OUo7GTDHDMAZnfxiEzUQYnNr0ReoBxRt3SjSJgBIWQhYRMwFwFFXY1pbMH8fEDta4Bly7%2F%2F%2BAH4t4uDNfyDNQGTV9347Anr32cf6CG8AgUeFFPIJDWAnGI3OFzpN%2BNCZ8Y5E8mLAirMadgaBKT2MoNUKLYuNBQwn84E%2F6YbOcjPCNzymOUIWGwmuUu8bkYjRkPUF7tQZFRlVerYfmAhey2pgZ5doAfYXpZhssKTiC6alBfu97FlBEzRN6oOc2XmMke5EC1T%2BisCGgKYcJ%2Fu9xr0gXOMgbDFrfqDs34W8sz1Stdw3xFkH9HdzjNLH1jihIk%2BbKMekRNtEblko0vYnE3V86AQ3hhObemdHMhTQC1snJPLd5lVi9IvqncMQFZXZZJ3I2KMyHRL3FhTOxMgVwCP8DvU0aXzC%2FJcL5O%2F%2BmrTCfwHcHQHZh%2FuFn%2BjhZ7hJ%2Fp3KMK5PvrhhdO7nXvlUODCFxNY6Rf%2Bs%2FHGulnPAXgxq2r8uOmC9gAG6kpLNMTKEMEl9bvVTk2ss36IxHCUqZQTyheP7i0fEw4aLnxAY6pgFok87%2Bi1lwlV7aVcJrn82EX3UdxjJ6SAk3PdB%2Fd4sms4pyUEsHWTM%2BBooqXCV4NbTAlI5GpohA0MuRKiFIvdFiX9e7N%2F4sd%2FggkoIJwOEIEMTePAT4N4EP%2Fz9mKmKmu8XL1a3VlZ3jAfOPVxQtYMeUkoD0XisFzo%2Fk9kKyz2WdL1DciGjehP3Vw6N0A4%2BAgMB5gvny2M65AfV0mXwfV6mXKMc0nRk1&X-Amz-Signature=92c4f904f9cb29e354aed756aecd8eeedc9d1b93deafa17f00131846bbe43be7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI5MKVNF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDK3eG9EIj09hmG%2FqPscDpAgo85dFG21pHh2QWhwjxOvAiARjh2D6c7J6s%2F7sxD%2FIP%2FpuNgR8Gd2f6ATDFD4sBhK9SqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO8wX7hqvqgjbUgyJKtwDohuHffSekXQDoCsqdPQhdc1238wcykGdNaQVkdkN1e%2BgtLt2iRpYwS4cQCcGHo9AnM%2FKehVKTDEu2J9mlr1Mo%2FuUXZ2OUo7GTDHDMAZnfxiEzUQYnNr0ReoBxRt3SjSJgBIWQhYRMwFwFFXY1pbMH8fEDta4Bly7%2F%2F%2BAH4t4uDNfyDNQGTV9347Anr32cf6CG8AgUeFFPIJDWAnGI3OFzpN%2BNCZ8Y5E8mLAirMadgaBKT2MoNUKLYuNBQwn84E%2F6YbOcjPCNzymOUIWGwmuUu8bkYjRkPUF7tQZFRlVerYfmAhey2pgZ5doAfYXpZhssKTiC6alBfu97FlBEzRN6oOc2XmMke5EC1T%2BisCGgKYcJ%2Fu9xr0gXOMgbDFrfqDs34W8sz1Stdw3xFkH9HdzjNLH1jihIk%2BbKMekRNtEblko0vYnE3V86AQ3hhObemdHMhTQC1snJPLd5lVi9IvqncMQFZXZZJ3I2KMyHRL3FhTOxMgVwCP8DvU0aXzC%2FJcL5O%2F%2BmrTCfwHcHQHZh%2FuFn%2BjhZ7hJ%2Fp3KMK5PvrhhdO7nXvlUODCFxNY6Rf%2Bs%2FHGulnPAXgxq2r8uOmC9gAG6kpLNMTKEMEl9bvVTk2ss36IxHCUqZQTyheP7i0fEw4aLnxAY6pgFok87%2Bi1lwlV7aVcJrn82EX3UdxjJ6SAk3PdB%2Fd4sms4pyUEsHWTM%2BBooqXCV4NbTAlI5GpohA0MuRKiFIvdFiX9e7N%2F4sd%2FggkoIJwOEIEMTePAT4N4EP%2Fz9mKmKmu8XL1a3VlZ3jAfOPVxQtYMeUkoD0XisFzo%2Fk9kKyz2WdL1DciGjehP3Vw6N0A4%2BAgMB5gvny2M65AfV0mXwfV6mXKMc0nRk1&X-Amz-Signature=9df48e4dc888fd3a9d12240b60e51fb992c58127c51df8c5872fd5e3b2873411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI5MKVNF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDK3eG9EIj09hmG%2FqPscDpAgo85dFG21pHh2QWhwjxOvAiARjh2D6c7J6s%2F7sxD%2FIP%2FpuNgR8Gd2f6ATDFD4sBhK9SqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO8wX7hqvqgjbUgyJKtwDohuHffSekXQDoCsqdPQhdc1238wcykGdNaQVkdkN1e%2BgtLt2iRpYwS4cQCcGHo9AnM%2FKehVKTDEu2J9mlr1Mo%2FuUXZ2OUo7GTDHDMAZnfxiEzUQYnNr0ReoBxRt3SjSJgBIWQhYRMwFwFFXY1pbMH8fEDta4Bly7%2F%2F%2BAH4t4uDNfyDNQGTV9347Anr32cf6CG8AgUeFFPIJDWAnGI3OFzpN%2BNCZ8Y5E8mLAirMadgaBKT2MoNUKLYuNBQwn84E%2F6YbOcjPCNzymOUIWGwmuUu8bkYjRkPUF7tQZFRlVerYfmAhey2pgZ5doAfYXpZhssKTiC6alBfu97FlBEzRN6oOc2XmMke5EC1T%2BisCGgKYcJ%2Fu9xr0gXOMgbDFrfqDs34W8sz1Stdw3xFkH9HdzjNLH1jihIk%2BbKMekRNtEblko0vYnE3V86AQ3hhObemdHMhTQC1snJPLd5lVi9IvqncMQFZXZZJ3I2KMyHRL3FhTOxMgVwCP8DvU0aXzC%2FJcL5O%2F%2BmrTCfwHcHQHZh%2FuFn%2BjhZ7hJ%2Fp3KMK5PvrhhdO7nXvlUODCFxNY6Rf%2Bs%2FHGulnPAXgxq2r8uOmC9gAG6kpLNMTKEMEl9bvVTk2ss36IxHCUqZQTyheP7i0fEw4aLnxAY6pgFok87%2Bi1lwlV7aVcJrn82EX3UdxjJ6SAk3PdB%2Fd4sms4pyUEsHWTM%2BBooqXCV4NbTAlI5GpohA0MuRKiFIvdFiX9e7N%2F4sd%2FggkoIJwOEIEMTePAT4N4EP%2Fz9mKmKmu8XL1a3VlZ3jAfOPVxQtYMeUkoD0XisFzo%2Fk9kKyz2WdL1DciGjehP3Vw6N0A4%2BAgMB5gvny2M65AfV0mXwfV6mXKMc0nRk1&X-Amz-Signature=dc13078e7d3d41e9a90780565f88040fa54817a48d80529ac147c021449d6a10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI5MKVNF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDK3eG9EIj09hmG%2FqPscDpAgo85dFG21pHh2QWhwjxOvAiARjh2D6c7J6s%2F7sxD%2FIP%2FpuNgR8Gd2f6ATDFD4sBhK9SqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO8wX7hqvqgjbUgyJKtwDohuHffSekXQDoCsqdPQhdc1238wcykGdNaQVkdkN1e%2BgtLt2iRpYwS4cQCcGHo9AnM%2FKehVKTDEu2J9mlr1Mo%2FuUXZ2OUo7GTDHDMAZnfxiEzUQYnNr0ReoBxRt3SjSJgBIWQhYRMwFwFFXY1pbMH8fEDta4Bly7%2F%2F%2BAH4t4uDNfyDNQGTV9347Anr32cf6CG8AgUeFFPIJDWAnGI3OFzpN%2BNCZ8Y5E8mLAirMadgaBKT2MoNUKLYuNBQwn84E%2F6YbOcjPCNzymOUIWGwmuUu8bkYjRkPUF7tQZFRlVerYfmAhey2pgZ5doAfYXpZhssKTiC6alBfu97FlBEzRN6oOc2XmMke5EC1T%2BisCGgKYcJ%2Fu9xr0gXOMgbDFrfqDs34W8sz1Stdw3xFkH9HdzjNLH1jihIk%2BbKMekRNtEblko0vYnE3V86AQ3hhObemdHMhTQC1snJPLd5lVi9IvqncMQFZXZZJ3I2KMyHRL3FhTOxMgVwCP8DvU0aXzC%2FJcL5O%2F%2BmrTCfwHcHQHZh%2FuFn%2BjhZ7hJ%2Fp3KMK5PvrhhdO7nXvlUODCFxNY6Rf%2Bs%2FHGulnPAXgxq2r8uOmC9gAG6kpLNMTKEMEl9bvVTk2ss36IxHCUqZQTyheP7i0fEw4aLnxAY6pgFok87%2Bi1lwlV7aVcJrn82EX3UdxjJ6SAk3PdB%2Fd4sms4pyUEsHWTM%2BBooqXCV4NbTAlI5GpohA0MuRKiFIvdFiX9e7N%2F4sd%2FggkoIJwOEIEMTePAT4N4EP%2Fz9mKmKmu8XL1a3VlZ3jAfOPVxQtYMeUkoD0XisFzo%2Fk9kKyz2WdL1DciGjehP3Vw6N0A4%2BAgMB5gvny2M65AfV0mXwfV6mXKMc0nRk1&X-Amz-Signature=e22018713203a7ecf82cba799f77a6cd59477b18573bac17f015e630f23e61c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI5MKVNF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDK3eG9EIj09hmG%2FqPscDpAgo85dFG21pHh2QWhwjxOvAiARjh2D6c7J6s%2F7sxD%2FIP%2FpuNgR8Gd2f6ATDFD4sBhK9SqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO8wX7hqvqgjbUgyJKtwDohuHffSekXQDoCsqdPQhdc1238wcykGdNaQVkdkN1e%2BgtLt2iRpYwS4cQCcGHo9AnM%2FKehVKTDEu2J9mlr1Mo%2FuUXZ2OUo7GTDHDMAZnfxiEzUQYnNr0ReoBxRt3SjSJgBIWQhYRMwFwFFXY1pbMH8fEDta4Bly7%2F%2F%2BAH4t4uDNfyDNQGTV9347Anr32cf6CG8AgUeFFPIJDWAnGI3OFzpN%2BNCZ8Y5E8mLAirMadgaBKT2MoNUKLYuNBQwn84E%2F6YbOcjPCNzymOUIWGwmuUu8bkYjRkPUF7tQZFRlVerYfmAhey2pgZ5doAfYXpZhssKTiC6alBfu97FlBEzRN6oOc2XmMke5EC1T%2BisCGgKYcJ%2Fu9xr0gXOMgbDFrfqDs34W8sz1Stdw3xFkH9HdzjNLH1jihIk%2BbKMekRNtEblko0vYnE3V86AQ3hhObemdHMhTQC1snJPLd5lVi9IvqncMQFZXZZJ3I2KMyHRL3FhTOxMgVwCP8DvU0aXzC%2FJcL5O%2F%2BmrTCfwHcHQHZh%2FuFn%2BjhZ7hJ%2Fp3KMK5PvrhhdO7nXvlUODCFxNY6Rf%2Bs%2FHGulnPAXgxq2r8uOmC9gAG6kpLNMTKEMEl9bvVTk2ss36IxHCUqZQTyheP7i0fEw4aLnxAY6pgFok87%2Bi1lwlV7aVcJrn82EX3UdxjJ6SAk3PdB%2Fd4sms4pyUEsHWTM%2BBooqXCV4NbTAlI5GpohA0MuRKiFIvdFiX9e7N%2F4sd%2FggkoIJwOEIEMTePAT4N4EP%2Fz9mKmKmu8XL1a3VlZ3jAfOPVxQtYMeUkoD0XisFzo%2Fk9kKyz2WdL1DciGjehP3Vw6N0A4%2BAgMB5gvny2M65AfV0mXwfV6mXKMc0nRk1&X-Amz-Signature=b4448d4014e53a076be54ce3c14de0aea2b3f46a77a905376af5c8cf66377355&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI5MKVNF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDK3eG9EIj09hmG%2FqPscDpAgo85dFG21pHh2QWhwjxOvAiARjh2D6c7J6s%2F7sxD%2FIP%2FpuNgR8Gd2f6ATDFD4sBhK9SqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO8wX7hqvqgjbUgyJKtwDohuHffSekXQDoCsqdPQhdc1238wcykGdNaQVkdkN1e%2BgtLt2iRpYwS4cQCcGHo9AnM%2FKehVKTDEu2J9mlr1Mo%2FuUXZ2OUo7GTDHDMAZnfxiEzUQYnNr0ReoBxRt3SjSJgBIWQhYRMwFwFFXY1pbMH8fEDta4Bly7%2F%2F%2BAH4t4uDNfyDNQGTV9347Anr32cf6CG8AgUeFFPIJDWAnGI3OFzpN%2BNCZ8Y5E8mLAirMadgaBKT2MoNUKLYuNBQwn84E%2F6YbOcjPCNzymOUIWGwmuUu8bkYjRkPUF7tQZFRlVerYfmAhey2pgZ5doAfYXpZhssKTiC6alBfu97FlBEzRN6oOc2XmMke5EC1T%2BisCGgKYcJ%2Fu9xr0gXOMgbDFrfqDs34W8sz1Stdw3xFkH9HdzjNLH1jihIk%2BbKMekRNtEblko0vYnE3V86AQ3hhObemdHMhTQC1snJPLd5lVi9IvqncMQFZXZZJ3I2KMyHRL3FhTOxMgVwCP8DvU0aXzC%2FJcL5O%2F%2BmrTCfwHcHQHZh%2FuFn%2BjhZ7hJ%2Fp3KMK5PvrhhdO7nXvlUODCFxNY6Rf%2Bs%2FHGulnPAXgxq2r8uOmC9gAG6kpLNMTKEMEl9bvVTk2ss36IxHCUqZQTyheP7i0fEw4aLnxAY6pgFok87%2Bi1lwlV7aVcJrn82EX3UdxjJ6SAk3PdB%2Fd4sms4pyUEsHWTM%2BBooqXCV4NbTAlI5GpohA0MuRKiFIvdFiX9e7N%2F4sd%2FggkoIJwOEIEMTePAT4N4EP%2Fz9mKmKmu8XL1a3VlZ3jAfOPVxQtYMeUkoD0XisFzo%2Fk9kKyz2WdL1DciGjehP3Vw6N0A4%2BAgMB5gvny2M65AfV0mXwfV6mXKMc0nRk1&X-Amz-Signature=2eb809dfb0940e6abd691940e27d365df832859425a7f605686f51cfb06eb777&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI5MKVNF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDK3eG9EIj09hmG%2FqPscDpAgo85dFG21pHh2QWhwjxOvAiARjh2D6c7J6s%2F7sxD%2FIP%2FpuNgR8Gd2f6ATDFD4sBhK9SqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO8wX7hqvqgjbUgyJKtwDohuHffSekXQDoCsqdPQhdc1238wcykGdNaQVkdkN1e%2BgtLt2iRpYwS4cQCcGHo9AnM%2FKehVKTDEu2J9mlr1Mo%2FuUXZ2OUo7GTDHDMAZnfxiEzUQYnNr0ReoBxRt3SjSJgBIWQhYRMwFwFFXY1pbMH8fEDta4Bly7%2F%2F%2BAH4t4uDNfyDNQGTV9347Anr32cf6CG8AgUeFFPIJDWAnGI3OFzpN%2BNCZ8Y5E8mLAirMadgaBKT2MoNUKLYuNBQwn84E%2F6YbOcjPCNzymOUIWGwmuUu8bkYjRkPUF7tQZFRlVerYfmAhey2pgZ5doAfYXpZhssKTiC6alBfu97FlBEzRN6oOc2XmMke5EC1T%2BisCGgKYcJ%2Fu9xr0gXOMgbDFrfqDs34W8sz1Stdw3xFkH9HdzjNLH1jihIk%2BbKMekRNtEblko0vYnE3V86AQ3hhObemdHMhTQC1snJPLd5lVi9IvqncMQFZXZZJ3I2KMyHRL3FhTOxMgVwCP8DvU0aXzC%2FJcL5O%2F%2BmrTCfwHcHQHZh%2FuFn%2BjhZ7hJ%2Fp3KMK5PvrhhdO7nXvlUODCFxNY6Rf%2Bs%2FHGulnPAXgxq2r8uOmC9gAG6kpLNMTKEMEl9bvVTk2ss36IxHCUqZQTyheP7i0fEw4aLnxAY6pgFok87%2Bi1lwlV7aVcJrn82EX3UdxjJ6SAk3PdB%2Fd4sms4pyUEsHWTM%2BBooqXCV4NbTAlI5GpohA0MuRKiFIvdFiX9e7N%2F4sd%2FggkoIJwOEIEMTePAT4N4EP%2Fz9mKmKmu8XL1a3VlZ3jAfOPVxQtYMeUkoD0XisFzo%2Fk9kKyz2WdL1DciGjehP3Vw6N0A4%2BAgMB5gvny2M65AfV0mXwfV6mXKMc0nRk1&X-Amz-Signature=53e7af04337dc896795b2347a263bcc4d7d91c91cfcfd3eb5e1645f99b56fb01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI5MKVNF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDK3eG9EIj09hmG%2FqPscDpAgo85dFG21pHh2QWhwjxOvAiARjh2D6c7J6s%2F7sxD%2FIP%2FpuNgR8Gd2f6ATDFD4sBhK9SqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO8wX7hqvqgjbUgyJKtwDohuHffSekXQDoCsqdPQhdc1238wcykGdNaQVkdkN1e%2BgtLt2iRpYwS4cQCcGHo9AnM%2FKehVKTDEu2J9mlr1Mo%2FuUXZ2OUo7GTDHDMAZnfxiEzUQYnNr0ReoBxRt3SjSJgBIWQhYRMwFwFFXY1pbMH8fEDta4Bly7%2F%2F%2BAH4t4uDNfyDNQGTV9347Anr32cf6CG8AgUeFFPIJDWAnGI3OFzpN%2BNCZ8Y5E8mLAirMadgaBKT2MoNUKLYuNBQwn84E%2F6YbOcjPCNzymOUIWGwmuUu8bkYjRkPUF7tQZFRlVerYfmAhey2pgZ5doAfYXpZhssKTiC6alBfu97FlBEzRN6oOc2XmMke5EC1T%2BisCGgKYcJ%2Fu9xr0gXOMgbDFrfqDs34W8sz1Stdw3xFkH9HdzjNLH1jihIk%2BbKMekRNtEblko0vYnE3V86AQ3hhObemdHMhTQC1snJPLd5lVi9IvqncMQFZXZZJ3I2KMyHRL3FhTOxMgVwCP8DvU0aXzC%2FJcL5O%2F%2BmrTCfwHcHQHZh%2FuFn%2BjhZ7hJ%2Fp3KMK5PvrhhdO7nXvlUODCFxNY6Rf%2Bs%2FHGulnPAXgxq2r8uOmC9gAG6kpLNMTKEMEl9bvVTk2ss36IxHCUqZQTyheP7i0fEw4aLnxAY6pgFok87%2Bi1lwlV7aVcJrn82EX3UdxjJ6SAk3PdB%2Fd4sms4pyUEsHWTM%2BBooqXCV4NbTAlI5GpohA0MuRKiFIvdFiX9e7N%2F4sd%2FggkoIJwOEIEMTePAT4N4EP%2Fz9mKmKmu8XL1a3VlZ3jAfOPVxQtYMeUkoD0XisFzo%2Fk9kKyz2WdL1DciGjehP3Vw6N0A4%2BAgMB5gvny2M65AfV0mXwfV6mXKMc0nRk1&X-Amz-Signature=50d81f04d39d4c4221b5a293012f6f824059b6bd339e66661bdc67a5e8d4ff3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI5MKVNF%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T121837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDK3eG9EIj09hmG%2FqPscDpAgo85dFG21pHh2QWhwjxOvAiARjh2D6c7J6s%2F7sxD%2FIP%2FpuNgR8Gd2f6ATDFD4sBhK9SqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO8wX7hqvqgjbUgyJKtwDohuHffSekXQDoCsqdPQhdc1238wcykGdNaQVkdkN1e%2BgtLt2iRpYwS4cQCcGHo9AnM%2FKehVKTDEu2J9mlr1Mo%2FuUXZ2OUo7GTDHDMAZnfxiEzUQYnNr0ReoBxRt3SjSJgBIWQhYRMwFwFFXY1pbMH8fEDta4Bly7%2F%2F%2BAH4t4uDNfyDNQGTV9347Anr32cf6CG8AgUeFFPIJDWAnGI3OFzpN%2BNCZ8Y5E8mLAirMadgaBKT2MoNUKLYuNBQwn84E%2F6YbOcjPCNzymOUIWGwmuUu8bkYjRkPUF7tQZFRlVerYfmAhey2pgZ5doAfYXpZhssKTiC6alBfu97FlBEzRN6oOc2XmMke5EC1T%2BisCGgKYcJ%2Fu9xr0gXOMgbDFrfqDs34W8sz1Stdw3xFkH9HdzjNLH1jihIk%2BbKMekRNtEblko0vYnE3V86AQ3hhObemdHMhTQC1snJPLd5lVi9IvqncMQFZXZZJ3I2KMyHRL3FhTOxMgVwCP8DvU0aXzC%2FJcL5O%2F%2BmrTCfwHcHQHZh%2FuFn%2BjhZ7hJ%2Fp3KMK5PvrhhdO7nXvlUODCFxNY6Rf%2Bs%2FHGulnPAXgxq2r8uOmC9gAG6kpLNMTKEMEl9bvVTk2ss36IxHCUqZQTyheP7i0fEw4aLnxAY6pgFok87%2Bi1lwlV7aVcJrn82EX3UdxjJ6SAk3PdB%2Fd4sms4pyUEsHWTM%2BBooqXCV4NbTAlI5GpohA0MuRKiFIvdFiX9e7N%2F4sd%2FggkoIJwOEIEMTePAT4N4EP%2Fz9mKmKmu8XL1a3VlZ3jAfOPVxQtYMeUkoD0XisFzo%2Fk9kKyz2WdL1DciGjehP3Vw6N0A4%2BAgMB5gvny2M65AfV0mXwfV6mXKMc0nRk1&X-Amz-Signature=09a479604d851a9032c0d46eb0fa8f33e1d12b785bbdbe8edfede0c296e41a2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
