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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URRP3VYT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChX%2BuaRVdNxzqKM6TPQ8RyneeF6HEbPWn2ILBr9r2%2F0AiBAsYCwhNl8nK850awbzZVYwzv4bUjjI46ZPEpgzcwrNir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMke84nAbpw0qQaDQIKtwDW%2Fa%2BBd%2FKDZsEvs9qzr1hEg8r1hK7OfOLh%2BsDuaCMcKbEm4Msq4qb0CUZB6B3EtjwRSglO8RUG58k%2FQP%2Ff0BjNk0XthQ4N4Xz%2Fym%2FOEPR3CGwVpV3EsvEu0Y5Ul%2FIDzEs1NWKHZw6OI%2BSyjZ%2B1Yzbf0UUKipbdcvjhGAyl0%2BhAHpQ4acFX0elTEiNBJU9Md1ZyryrNirS5443pHh0VYyFYWHJONq%2FgqeGhRJ1E7N3RqQ0ImIxo4IB2XqvymgYspBzcMVAU1VZmQihH6DJCJvxRGrCfLCV4BIMoXsT4sRKDGeQXCR%2FlJYzPxfdI%2BJhqY6XbWCzt9w7pZGrR6j6gSHPcmobeylRW6gewkFbEd7pWPPzuXsPcpqZpkVpB5As7qV1ao%2BcrOlBk3Eca5O%2BRAHn3D%2FCbXgauOUo%2BvDW1XWv5UwYmy5s%2BcjVrrR0MgHxRo148HCjlSndBpIpWQSZjHat8AGsS9JyDS4P0mFNP7i3Vxdleiu2%2FLyW363EZdXlYs7cHwqeKh%2FvXWI6aEHgJCAhDl4e6BtY%2BnfscYsblee2rkdXBibsbv9v7Lvzl7CxqRcBfxdPzwn%2BQqDW5wt%2Bwchkn%2BPpflpfYnry1ldvfSRb1FUtSJnttmHncsL0kCIwttm%2BxAY6pgGiloMBK22WOIH7uha5eSElXcRDXskgkWqMttR1TPp6VSl8VrIYGYqCRDv3Py5JOpxKPBOKZec8v0l3pVIg8dB0nioLNreQU%2FQ1ME8dPpYkkC%2Fo1AbEBpyItsWVj%2BBDMnBjjjsPUZ%2FoBT8E7hgJH9scSVpuG34u2aQlG6xd2uFrXJZ4KXcPPq%2B9nGBBMiG%2B0hxBPg6gaAptshkHiE5x9GJd1cdxU%2FMZ&X-Amz-Signature=978dec547b7ab4c61bf0ecc6df928ac24c4fcdb798b58746a0831b4e12ffea77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URRP3VYT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChX%2BuaRVdNxzqKM6TPQ8RyneeF6HEbPWn2ILBr9r2%2F0AiBAsYCwhNl8nK850awbzZVYwzv4bUjjI46ZPEpgzcwrNir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMke84nAbpw0qQaDQIKtwDW%2Fa%2BBd%2FKDZsEvs9qzr1hEg8r1hK7OfOLh%2BsDuaCMcKbEm4Msq4qb0CUZB6B3EtjwRSglO8RUG58k%2FQP%2Ff0BjNk0XthQ4N4Xz%2Fym%2FOEPR3CGwVpV3EsvEu0Y5Ul%2FIDzEs1NWKHZw6OI%2BSyjZ%2B1Yzbf0UUKipbdcvjhGAyl0%2BhAHpQ4acFX0elTEiNBJU9Md1ZyryrNirS5443pHh0VYyFYWHJONq%2FgqeGhRJ1E7N3RqQ0ImIxo4IB2XqvymgYspBzcMVAU1VZmQihH6DJCJvxRGrCfLCV4BIMoXsT4sRKDGeQXCR%2FlJYzPxfdI%2BJhqY6XbWCzt9w7pZGrR6j6gSHPcmobeylRW6gewkFbEd7pWPPzuXsPcpqZpkVpB5As7qV1ao%2BcrOlBk3Eca5O%2BRAHn3D%2FCbXgauOUo%2BvDW1XWv5UwYmy5s%2BcjVrrR0MgHxRo148HCjlSndBpIpWQSZjHat8AGsS9JyDS4P0mFNP7i3Vxdleiu2%2FLyW363EZdXlYs7cHwqeKh%2FvXWI6aEHgJCAhDl4e6BtY%2BnfscYsblee2rkdXBibsbv9v7Lvzl7CxqRcBfxdPzwn%2BQqDW5wt%2Bwchkn%2BPpflpfYnry1ldvfSRb1FUtSJnttmHncsL0kCIwttm%2BxAY6pgGiloMBK22WOIH7uha5eSElXcRDXskgkWqMttR1TPp6VSl8VrIYGYqCRDv3Py5JOpxKPBOKZec8v0l3pVIg8dB0nioLNreQU%2FQ1ME8dPpYkkC%2Fo1AbEBpyItsWVj%2BBDMnBjjjsPUZ%2FoBT8E7hgJH9scSVpuG34u2aQlG6xd2uFrXJZ4KXcPPq%2B9nGBBMiG%2B0hxBPg6gaAptshkHiE5x9GJd1cdxU%2FMZ&X-Amz-Signature=2d803e62407972ed552ce145c3f0de84c18f57eca1af954b3c4209dc7959fa1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URRP3VYT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChX%2BuaRVdNxzqKM6TPQ8RyneeF6HEbPWn2ILBr9r2%2F0AiBAsYCwhNl8nK850awbzZVYwzv4bUjjI46ZPEpgzcwrNir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMke84nAbpw0qQaDQIKtwDW%2Fa%2BBd%2FKDZsEvs9qzr1hEg8r1hK7OfOLh%2BsDuaCMcKbEm4Msq4qb0CUZB6B3EtjwRSglO8RUG58k%2FQP%2Ff0BjNk0XthQ4N4Xz%2Fym%2FOEPR3CGwVpV3EsvEu0Y5Ul%2FIDzEs1NWKHZw6OI%2BSyjZ%2B1Yzbf0UUKipbdcvjhGAyl0%2BhAHpQ4acFX0elTEiNBJU9Md1ZyryrNirS5443pHh0VYyFYWHJONq%2FgqeGhRJ1E7N3RqQ0ImIxo4IB2XqvymgYspBzcMVAU1VZmQihH6DJCJvxRGrCfLCV4BIMoXsT4sRKDGeQXCR%2FlJYzPxfdI%2BJhqY6XbWCzt9w7pZGrR6j6gSHPcmobeylRW6gewkFbEd7pWPPzuXsPcpqZpkVpB5As7qV1ao%2BcrOlBk3Eca5O%2BRAHn3D%2FCbXgauOUo%2BvDW1XWv5UwYmy5s%2BcjVrrR0MgHxRo148HCjlSndBpIpWQSZjHat8AGsS9JyDS4P0mFNP7i3Vxdleiu2%2FLyW363EZdXlYs7cHwqeKh%2FvXWI6aEHgJCAhDl4e6BtY%2BnfscYsblee2rkdXBibsbv9v7Lvzl7CxqRcBfxdPzwn%2BQqDW5wt%2Bwchkn%2BPpflpfYnry1ldvfSRb1FUtSJnttmHncsL0kCIwttm%2BxAY6pgGiloMBK22WOIH7uha5eSElXcRDXskgkWqMttR1TPp6VSl8VrIYGYqCRDv3Py5JOpxKPBOKZec8v0l3pVIg8dB0nioLNreQU%2FQ1ME8dPpYkkC%2Fo1AbEBpyItsWVj%2BBDMnBjjjsPUZ%2FoBT8E7hgJH9scSVpuG34u2aQlG6xd2uFrXJZ4KXcPPq%2B9nGBBMiG%2B0hxBPg6gaAptshkHiE5x9GJd1cdxU%2FMZ&X-Amz-Signature=18155d2d6bb6fa74cf68000ac46ba20c7db4820aafac8236a4d8a264c77309a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URRP3VYT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChX%2BuaRVdNxzqKM6TPQ8RyneeF6HEbPWn2ILBr9r2%2F0AiBAsYCwhNl8nK850awbzZVYwzv4bUjjI46ZPEpgzcwrNir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMke84nAbpw0qQaDQIKtwDW%2Fa%2BBd%2FKDZsEvs9qzr1hEg8r1hK7OfOLh%2BsDuaCMcKbEm4Msq4qb0CUZB6B3EtjwRSglO8RUG58k%2FQP%2Ff0BjNk0XthQ4N4Xz%2Fym%2FOEPR3CGwVpV3EsvEu0Y5Ul%2FIDzEs1NWKHZw6OI%2BSyjZ%2B1Yzbf0UUKipbdcvjhGAyl0%2BhAHpQ4acFX0elTEiNBJU9Md1ZyryrNirS5443pHh0VYyFYWHJONq%2FgqeGhRJ1E7N3RqQ0ImIxo4IB2XqvymgYspBzcMVAU1VZmQihH6DJCJvxRGrCfLCV4BIMoXsT4sRKDGeQXCR%2FlJYzPxfdI%2BJhqY6XbWCzt9w7pZGrR6j6gSHPcmobeylRW6gewkFbEd7pWPPzuXsPcpqZpkVpB5As7qV1ao%2BcrOlBk3Eca5O%2BRAHn3D%2FCbXgauOUo%2BvDW1XWv5UwYmy5s%2BcjVrrR0MgHxRo148HCjlSndBpIpWQSZjHat8AGsS9JyDS4P0mFNP7i3Vxdleiu2%2FLyW363EZdXlYs7cHwqeKh%2FvXWI6aEHgJCAhDl4e6BtY%2BnfscYsblee2rkdXBibsbv9v7Lvzl7CxqRcBfxdPzwn%2BQqDW5wt%2Bwchkn%2BPpflpfYnry1ldvfSRb1FUtSJnttmHncsL0kCIwttm%2BxAY6pgGiloMBK22WOIH7uha5eSElXcRDXskgkWqMttR1TPp6VSl8VrIYGYqCRDv3Py5JOpxKPBOKZec8v0l3pVIg8dB0nioLNreQU%2FQ1ME8dPpYkkC%2Fo1AbEBpyItsWVj%2BBDMnBjjjsPUZ%2FoBT8E7hgJH9scSVpuG34u2aQlG6xd2uFrXJZ4KXcPPq%2B9nGBBMiG%2B0hxBPg6gaAptshkHiE5x9GJd1cdxU%2FMZ&X-Amz-Signature=31818b870fc3221785e807871feed465adfc69861ea172a834bdbb1ffc3003ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URRP3VYT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChX%2BuaRVdNxzqKM6TPQ8RyneeF6HEbPWn2ILBr9r2%2F0AiBAsYCwhNl8nK850awbzZVYwzv4bUjjI46ZPEpgzcwrNir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMke84nAbpw0qQaDQIKtwDW%2Fa%2BBd%2FKDZsEvs9qzr1hEg8r1hK7OfOLh%2BsDuaCMcKbEm4Msq4qb0CUZB6B3EtjwRSglO8RUG58k%2FQP%2Ff0BjNk0XthQ4N4Xz%2Fym%2FOEPR3CGwVpV3EsvEu0Y5Ul%2FIDzEs1NWKHZw6OI%2BSyjZ%2B1Yzbf0UUKipbdcvjhGAyl0%2BhAHpQ4acFX0elTEiNBJU9Md1ZyryrNirS5443pHh0VYyFYWHJONq%2FgqeGhRJ1E7N3RqQ0ImIxo4IB2XqvymgYspBzcMVAU1VZmQihH6DJCJvxRGrCfLCV4BIMoXsT4sRKDGeQXCR%2FlJYzPxfdI%2BJhqY6XbWCzt9w7pZGrR6j6gSHPcmobeylRW6gewkFbEd7pWPPzuXsPcpqZpkVpB5As7qV1ao%2BcrOlBk3Eca5O%2BRAHn3D%2FCbXgauOUo%2BvDW1XWv5UwYmy5s%2BcjVrrR0MgHxRo148HCjlSndBpIpWQSZjHat8AGsS9JyDS4P0mFNP7i3Vxdleiu2%2FLyW363EZdXlYs7cHwqeKh%2FvXWI6aEHgJCAhDl4e6BtY%2BnfscYsblee2rkdXBibsbv9v7Lvzl7CxqRcBfxdPzwn%2BQqDW5wt%2Bwchkn%2BPpflpfYnry1ldvfSRb1FUtSJnttmHncsL0kCIwttm%2BxAY6pgGiloMBK22WOIH7uha5eSElXcRDXskgkWqMttR1TPp6VSl8VrIYGYqCRDv3Py5JOpxKPBOKZec8v0l3pVIg8dB0nioLNreQU%2FQ1ME8dPpYkkC%2Fo1AbEBpyItsWVj%2BBDMnBjjjsPUZ%2FoBT8E7hgJH9scSVpuG34u2aQlG6xd2uFrXJZ4KXcPPq%2B9nGBBMiG%2B0hxBPg6gaAptshkHiE5x9GJd1cdxU%2FMZ&X-Amz-Signature=3097d78c919fd25b925606c771449ba2e783031fd3f44848b9ab2c3a58fd8ccf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URRP3VYT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChX%2BuaRVdNxzqKM6TPQ8RyneeF6HEbPWn2ILBr9r2%2F0AiBAsYCwhNl8nK850awbzZVYwzv4bUjjI46ZPEpgzcwrNir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMke84nAbpw0qQaDQIKtwDW%2Fa%2BBd%2FKDZsEvs9qzr1hEg8r1hK7OfOLh%2BsDuaCMcKbEm4Msq4qb0CUZB6B3EtjwRSglO8RUG58k%2FQP%2Ff0BjNk0XthQ4N4Xz%2Fym%2FOEPR3CGwVpV3EsvEu0Y5Ul%2FIDzEs1NWKHZw6OI%2BSyjZ%2B1Yzbf0UUKipbdcvjhGAyl0%2BhAHpQ4acFX0elTEiNBJU9Md1ZyryrNirS5443pHh0VYyFYWHJONq%2FgqeGhRJ1E7N3RqQ0ImIxo4IB2XqvymgYspBzcMVAU1VZmQihH6DJCJvxRGrCfLCV4BIMoXsT4sRKDGeQXCR%2FlJYzPxfdI%2BJhqY6XbWCzt9w7pZGrR6j6gSHPcmobeylRW6gewkFbEd7pWPPzuXsPcpqZpkVpB5As7qV1ao%2BcrOlBk3Eca5O%2BRAHn3D%2FCbXgauOUo%2BvDW1XWv5UwYmy5s%2BcjVrrR0MgHxRo148HCjlSndBpIpWQSZjHat8AGsS9JyDS4P0mFNP7i3Vxdleiu2%2FLyW363EZdXlYs7cHwqeKh%2FvXWI6aEHgJCAhDl4e6BtY%2BnfscYsblee2rkdXBibsbv9v7Lvzl7CxqRcBfxdPzwn%2BQqDW5wt%2Bwchkn%2BPpflpfYnry1ldvfSRb1FUtSJnttmHncsL0kCIwttm%2BxAY6pgGiloMBK22WOIH7uha5eSElXcRDXskgkWqMttR1TPp6VSl8VrIYGYqCRDv3Py5JOpxKPBOKZec8v0l3pVIg8dB0nioLNreQU%2FQ1ME8dPpYkkC%2Fo1AbEBpyItsWVj%2BBDMnBjjjsPUZ%2FoBT8E7hgJH9scSVpuG34u2aQlG6xd2uFrXJZ4KXcPPq%2B9nGBBMiG%2B0hxBPg6gaAptshkHiE5x9GJd1cdxU%2FMZ&X-Amz-Signature=95e60b2ab3270f4e123d778244c4b2cbb197627e6629c27b9e8baf205f7a71d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URRP3VYT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChX%2BuaRVdNxzqKM6TPQ8RyneeF6HEbPWn2ILBr9r2%2F0AiBAsYCwhNl8nK850awbzZVYwzv4bUjjI46ZPEpgzcwrNir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMke84nAbpw0qQaDQIKtwDW%2Fa%2BBd%2FKDZsEvs9qzr1hEg8r1hK7OfOLh%2BsDuaCMcKbEm4Msq4qb0CUZB6B3EtjwRSglO8RUG58k%2FQP%2Ff0BjNk0XthQ4N4Xz%2Fym%2FOEPR3CGwVpV3EsvEu0Y5Ul%2FIDzEs1NWKHZw6OI%2BSyjZ%2B1Yzbf0UUKipbdcvjhGAyl0%2BhAHpQ4acFX0elTEiNBJU9Md1ZyryrNirS5443pHh0VYyFYWHJONq%2FgqeGhRJ1E7N3RqQ0ImIxo4IB2XqvymgYspBzcMVAU1VZmQihH6DJCJvxRGrCfLCV4BIMoXsT4sRKDGeQXCR%2FlJYzPxfdI%2BJhqY6XbWCzt9w7pZGrR6j6gSHPcmobeylRW6gewkFbEd7pWPPzuXsPcpqZpkVpB5As7qV1ao%2BcrOlBk3Eca5O%2BRAHn3D%2FCbXgauOUo%2BvDW1XWv5UwYmy5s%2BcjVrrR0MgHxRo148HCjlSndBpIpWQSZjHat8AGsS9JyDS4P0mFNP7i3Vxdleiu2%2FLyW363EZdXlYs7cHwqeKh%2FvXWI6aEHgJCAhDl4e6BtY%2BnfscYsblee2rkdXBibsbv9v7Lvzl7CxqRcBfxdPzwn%2BQqDW5wt%2Bwchkn%2BPpflpfYnry1ldvfSRb1FUtSJnttmHncsL0kCIwttm%2BxAY6pgGiloMBK22WOIH7uha5eSElXcRDXskgkWqMttR1TPp6VSl8VrIYGYqCRDv3Py5JOpxKPBOKZec8v0l3pVIg8dB0nioLNreQU%2FQ1ME8dPpYkkC%2Fo1AbEBpyItsWVj%2BBDMnBjjjsPUZ%2FoBT8E7hgJH9scSVpuG34u2aQlG6xd2uFrXJZ4KXcPPq%2B9nGBBMiG%2B0hxBPg6gaAptshkHiE5x9GJd1cdxU%2FMZ&X-Amz-Signature=a363d41f54a8b4834bcf401f42ad1da1c875a80d7207e952b32a28a470749139&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URRP3VYT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChX%2BuaRVdNxzqKM6TPQ8RyneeF6HEbPWn2ILBr9r2%2F0AiBAsYCwhNl8nK850awbzZVYwzv4bUjjI46ZPEpgzcwrNir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMke84nAbpw0qQaDQIKtwDW%2Fa%2BBd%2FKDZsEvs9qzr1hEg8r1hK7OfOLh%2BsDuaCMcKbEm4Msq4qb0CUZB6B3EtjwRSglO8RUG58k%2FQP%2Ff0BjNk0XthQ4N4Xz%2Fym%2FOEPR3CGwVpV3EsvEu0Y5Ul%2FIDzEs1NWKHZw6OI%2BSyjZ%2B1Yzbf0UUKipbdcvjhGAyl0%2BhAHpQ4acFX0elTEiNBJU9Md1ZyryrNirS5443pHh0VYyFYWHJONq%2FgqeGhRJ1E7N3RqQ0ImIxo4IB2XqvymgYspBzcMVAU1VZmQihH6DJCJvxRGrCfLCV4BIMoXsT4sRKDGeQXCR%2FlJYzPxfdI%2BJhqY6XbWCzt9w7pZGrR6j6gSHPcmobeylRW6gewkFbEd7pWPPzuXsPcpqZpkVpB5As7qV1ao%2BcrOlBk3Eca5O%2BRAHn3D%2FCbXgauOUo%2BvDW1XWv5UwYmy5s%2BcjVrrR0MgHxRo148HCjlSndBpIpWQSZjHat8AGsS9JyDS4P0mFNP7i3Vxdleiu2%2FLyW363EZdXlYs7cHwqeKh%2FvXWI6aEHgJCAhDl4e6BtY%2BnfscYsblee2rkdXBibsbv9v7Lvzl7CxqRcBfxdPzwn%2BQqDW5wt%2Bwchkn%2BPpflpfYnry1ldvfSRb1FUtSJnttmHncsL0kCIwttm%2BxAY6pgGiloMBK22WOIH7uha5eSElXcRDXskgkWqMttR1TPp6VSl8VrIYGYqCRDv3Py5JOpxKPBOKZec8v0l3pVIg8dB0nioLNreQU%2FQ1ME8dPpYkkC%2Fo1AbEBpyItsWVj%2BBDMnBjjjsPUZ%2FoBT8E7hgJH9scSVpuG34u2aQlG6xd2uFrXJZ4KXcPPq%2B9nGBBMiG%2B0hxBPg6gaAptshkHiE5x9GJd1cdxU%2FMZ&X-Amz-Signature=dd9497e4ce86210d221faa8cc052b5fb60c49ad07064bae44d29dd695b0281fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URRP3VYT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChX%2BuaRVdNxzqKM6TPQ8RyneeF6HEbPWn2ILBr9r2%2F0AiBAsYCwhNl8nK850awbzZVYwzv4bUjjI46ZPEpgzcwrNir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMke84nAbpw0qQaDQIKtwDW%2Fa%2BBd%2FKDZsEvs9qzr1hEg8r1hK7OfOLh%2BsDuaCMcKbEm4Msq4qb0CUZB6B3EtjwRSglO8RUG58k%2FQP%2Ff0BjNk0XthQ4N4Xz%2Fym%2FOEPR3CGwVpV3EsvEu0Y5Ul%2FIDzEs1NWKHZw6OI%2BSyjZ%2B1Yzbf0UUKipbdcvjhGAyl0%2BhAHpQ4acFX0elTEiNBJU9Md1ZyryrNirS5443pHh0VYyFYWHJONq%2FgqeGhRJ1E7N3RqQ0ImIxo4IB2XqvymgYspBzcMVAU1VZmQihH6DJCJvxRGrCfLCV4BIMoXsT4sRKDGeQXCR%2FlJYzPxfdI%2BJhqY6XbWCzt9w7pZGrR6j6gSHPcmobeylRW6gewkFbEd7pWPPzuXsPcpqZpkVpB5As7qV1ao%2BcrOlBk3Eca5O%2BRAHn3D%2FCbXgauOUo%2BvDW1XWv5UwYmy5s%2BcjVrrR0MgHxRo148HCjlSndBpIpWQSZjHat8AGsS9JyDS4P0mFNP7i3Vxdleiu2%2FLyW363EZdXlYs7cHwqeKh%2FvXWI6aEHgJCAhDl4e6BtY%2BnfscYsblee2rkdXBibsbv9v7Lvzl7CxqRcBfxdPzwn%2BQqDW5wt%2Bwchkn%2BPpflpfYnry1ldvfSRb1FUtSJnttmHncsL0kCIwttm%2BxAY6pgGiloMBK22WOIH7uha5eSElXcRDXskgkWqMttR1TPp6VSl8VrIYGYqCRDv3Py5JOpxKPBOKZec8v0l3pVIg8dB0nioLNreQU%2FQ1ME8dPpYkkC%2Fo1AbEBpyItsWVj%2BBDMnBjjjsPUZ%2FoBT8E7hgJH9scSVpuG34u2aQlG6xd2uFrXJZ4KXcPPq%2B9nGBBMiG%2B0hxBPg6gaAptshkHiE5x9GJd1cdxU%2FMZ&X-Amz-Signature=f6d2b9bfd90606c1eb1c2e3cfec9b900d627eb6807dff8037c951ad24c2042d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URRP3VYT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChX%2BuaRVdNxzqKM6TPQ8RyneeF6HEbPWn2ILBr9r2%2F0AiBAsYCwhNl8nK850awbzZVYwzv4bUjjI46ZPEpgzcwrNir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMke84nAbpw0qQaDQIKtwDW%2Fa%2BBd%2FKDZsEvs9qzr1hEg8r1hK7OfOLh%2BsDuaCMcKbEm4Msq4qb0CUZB6B3EtjwRSglO8RUG58k%2FQP%2Ff0BjNk0XthQ4N4Xz%2Fym%2FOEPR3CGwVpV3EsvEu0Y5Ul%2FIDzEs1NWKHZw6OI%2BSyjZ%2B1Yzbf0UUKipbdcvjhGAyl0%2BhAHpQ4acFX0elTEiNBJU9Md1ZyryrNirS5443pHh0VYyFYWHJONq%2FgqeGhRJ1E7N3RqQ0ImIxo4IB2XqvymgYspBzcMVAU1VZmQihH6DJCJvxRGrCfLCV4BIMoXsT4sRKDGeQXCR%2FlJYzPxfdI%2BJhqY6XbWCzt9w7pZGrR6j6gSHPcmobeylRW6gewkFbEd7pWPPzuXsPcpqZpkVpB5As7qV1ao%2BcrOlBk3Eca5O%2BRAHn3D%2FCbXgauOUo%2BvDW1XWv5UwYmy5s%2BcjVrrR0MgHxRo148HCjlSndBpIpWQSZjHat8AGsS9JyDS4P0mFNP7i3Vxdleiu2%2FLyW363EZdXlYs7cHwqeKh%2FvXWI6aEHgJCAhDl4e6BtY%2BnfscYsblee2rkdXBibsbv9v7Lvzl7CxqRcBfxdPzwn%2BQqDW5wt%2Bwchkn%2BPpflpfYnry1ldvfSRb1FUtSJnttmHncsL0kCIwttm%2BxAY6pgGiloMBK22WOIH7uha5eSElXcRDXskgkWqMttR1TPp6VSl8VrIYGYqCRDv3Py5JOpxKPBOKZec8v0l3pVIg8dB0nioLNreQU%2FQ1ME8dPpYkkC%2Fo1AbEBpyItsWVj%2BBDMnBjjjsPUZ%2FoBT8E7hgJH9scSVpuG34u2aQlG6xd2uFrXJZ4KXcPPq%2B9nGBBMiG%2B0hxBPg6gaAptshkHiE5x9GJd1cdxU%2FMZ&X-Amz-Signature=53fe723c75c6747d48fd2d58dba3c69d207e9b42d8da6b43b2c4ab5cf090001e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URRP3VYT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChX%2BuaRVdNxzqKM6TPQ8RyneeF6HEbPWn2ILBr9r2%2F0AiBAsYCwhNl8nK850awbzZVYwzv4bUjjI46ZPEpgzcwrNir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMke84nAbpw0qQaDQIKtwDW%2Fa%2BBd%2FKDZsEvs9qzr1hEg8r1hK7OfOLh%2BsDuaCMcKbEm4Msq4qb0CUZB6B3EtjwRSglO8RUG58k%2FQP%2Ff0BjNk0XthQ4N4Xz%2Fym%2FOEPR3CGwVpV3EsvEu0Y5Ul%2FIDzEs1NWKHZw6OI%2BSyjZ%2B1Yzbf0UUKipbdcvjhGAyl0%2BhAHpQ4acFX0elTEiNBJU9Md1ZyryrNirS5443pHh0VYyFYWHJONq%2FgqeGhRJ1E7N3RqQ0ImIxo4IB2XqvymgYspBzcMVAU1VZmQihH6DJCJvxRGrCfLCV4BIMoXsT4sRKDGeQXCR%2FlJYzPxfdI%2BJhqY6XbWCzt9w7pZGrR6j6gSHPcmobeylRW6gewkFbEd7pWPPzuXsPcpqZpkVpB5As7qV1ao%2BcrOlBk3Eca5O%2BRAHn3D%2FCbXgauOUo%2BvDW1XWv5UwYmy5s%2BcjVrrR0MgHxRo148HCjlSndBpIpWQSZjHat8AGsS9JyDS4P0mFNP7i3Vxdleiu2%2FLyW363EZdXlYs7cHwqeKh%2FvXWI6aEHgJCAhDl4e6BtY%2BnfscYsblee2rkdXBibsbv9v7Lvzl7CxqRcBfxdPzwn%2BQqDW5wt%2Bwchkn%2BPpflpfYnry1ldvfSRb1FUtSJnttmHncsL0kCIwttm%2BxAY6pgGiloMBK22WOIH7uha5eSElXcRDXskgkWqMttR1TPp6VSl8VrIYGYqCRDv3Py5JOpxKPBOKZec8v0l3pVIg8dB0nioLNreQU%2FQ1ME8dPpYkkC%2Fo1AbEBpyItsWVj%2BBDMnBjjjsPUZ%2FoBT8E7hgJH9scSVpuG34u2aQlG6xd2uFrXJZ4KXcPPq%2B9nGBBMiG%2B0hxBPg6gaAptshkHiE5x9GJd1cdxU%2FMZ&X-Amz-Signature=de5d07b7e75f4895044e2e8b9f44afcd5e3960fbbec65628dcf041d2a71bfdfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URRP3VYT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChX%2BuaRVdNxzqKM6TPQ8RyneeF6HEbPWn2ILBr9r2%2F0AiBAsYCwhNl8nK850awbzZVYwzv4bUjjI46ZPEpgzcwrNir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMke84nAbpw0qQaDQIKtwDW%2Fa%2BBd%2FKDZsEvs9qzr1hEg8r1hK7OfOLh%2BsDuaCMcKbEm4Msq4qb0CUZB6B3EtjwRSglO8RUG58k%2FQP%2Ff0BjNk0XthQ4N4Xz%2Fym%2FOEPR3CGwVpV3EsvEu0Y5Ul%2FIDzEs1NWKHZw6OI%2BSyjZ%2B1Yzbf0UUKipbdcvjhGAyl0%2BhAHpQ4acFX0elTEiNBJU9Md1ZyryrNirS5443pHh0VYyFYWHJONq%2FgqeGhRJ1E7N3RqQ0ImIxo4IB2XqvymgYspBzcMVAU1VZmQihH6DJCJvxRGrCfLCV4BIMoXsT4sRKDGeQXCR%2FlJYzPxfdI%2BJhqY6XbWCzt9w7pZGrR6j6gSHPcmobeylRW6gewkFbEd7pWPPzuXsPcpqZpkVpB5As7qV1ao%2BcrOlBk3Eca5O%2BRAHn3D%2FCbXgauOUo%2BvDW1XWv5UwYmy5s%2BcjVrrR0MgHxRo148HCjlSndBpIpWQSZjHat8AGsS9JyDS4P0mFNP7i3Vxdleiu2%2FLyW363EZdXlYs7cHwqeKh%2FvXWI6aEHgJCAhDl4e6BtY%2BnfscYsblee2rkdXBibsbv9v7Lvzl7CxqRcBfxdPzwn%2BQqDW5wt%2Bwchkn%2BPpflpfYnry1ldvfSRb1FUtSJnttmHncsL0kCIwttm%2BxAY6pgGiloMBK22WOIH7uha5eSElXcRDXskgkWqMttR1TPp6VSl8VrIYGYqCRDv3Py5JOpxKPBOKZec8v0l3pVIg8dB0nioLNreQU%2FQ1ME8dPpYkkC%2Fo1AbEBpyItsWVj%2BBDMnBjjjsPUZ%2FoBT8E7hgJH9scSVpuG34u2aQlG6xd2uFrXJZ4KXcPPq%2B9nGBBMiG%2B0hxBPg6gaAptshkHiE5x9GJd1cdxU%2FMZ&X-Amz-Signature=5fe7c861476bde670f8beaf69d3a842c05a31bb66f379d6faee1b542cb368394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URRP3VYT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChX%2BuaRVdNxzqKM6TPQ8RyneeF6HEbPWn2ILBr9r2%2F0AiBAsYCwhNl8nK850awbzZVYwzv4bUjjI46ZPEpgzcwrNir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMke84nAbpw0qQaDQIKtwDW%2Fa%2BBd%2FKDZsEvs9qzr1hEg8r1hK7OfOLh%2BsDuaCMcKbEm4Msq4qb0CUZB6B3EtjwRSglO8RUG58k%2FQP%2Ff0BjNk0XthQ4N4Xz%2Fym%2FOEPR3CGwVpV3EsvEu0Y5Ul%2FIDzEs1NWKHZw6OI%2BSyjZ%2B1Yzbf0UUKipbdcvjhGAyl0%2BhAHpQ4acFX0elTEiNBJU9Md1ZyryrNirS5443pHh0VYyFYWHJONq%2FgqeGhRJ1E7N3RqQ0ImIxo4IB2XqvymgYspBzcMVAU1VZmQihH6DJCJvxRGrCfLCV4BIMoXsT4sRKDGeQXCR%2FlJYzPxfdI%2BJhqY6XbWCzt9w7pZGrR6j6gSHPcmobeylRW6gewkFbEd7pWPPzuXsPcpqZpkVpB5As7qV1ao%2BcrOlBk3Eca5O%2BRAHn3D%2FCbXgauOUo%2BvDW1XWv5UwYmy5s%2BcjVrrR0MgHxRo148HCjlSndBpIpWQSZjHat8AGsS9JyDS4P0mFNP7i3Vxdleiu2%2FLyW363EZdXlYs7cHwqeKh%2FvXWI6aEHgJCAhDl4e6BtY%2BnfscYsblee2rkdXBibsbv9v7Lvzl7CxqRcBfxdPzwn%2BQqDW5wt%2Bwchkn%2BPpflpfYnry1ldvfSRb1FUtSJnttmHncsL0kCIwttm%2BxAY6pgGiloMBK22WOIH7uha5eSElXcRDXskgkWqMttR1TPp6VSl8VrIYGYqCRDv3Py5JOpxKPBOKZec8v0l3pVIg8dB0nioLNreQU%2FQ1ME8dPpYkkC%2Fo1AbEBpyItsWVj%2BBDMnBjjjsPUZ%2FoBT8E7hgJH9scSVpuG34u2aQlG6xd2uFrXJZ4KXcPPq%2B9nGBBMiG%2B0hxBPg6gaAptshkHiE5x9GJd1cdxU%2FMZ&X-Amz-Signature=1732450e8cef215d96171e7ba3ae15cf000c1d767f95c4fe357b43565dce401b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URRP3VYT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIChX%2BuaRVdNxzqKM6TPQ8RyneeF6HEbPWn2ILBr9r2%2F0AiBAsYCwhNl8nK850awbzZVYwzv4bUjjI46ZPEpgzcwrNir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMke84nAbpw0qQaDQIKtwDW%2Fa%2BBd%2FKDZsEvs9qzr1hEg8r1hK7OfOLh%2BsDuaCMcKbEm4Msq4qb0CUZB6B3EtjwRSglO8RUG58k%2FQP%2Ff0BjNk0XthQ4N4Xz%2Fym%2FOEPR3CGwVpV3EsvEu0Y5Ul%2FIDzEs1NWKHZw6OI%2BSyjZ%2B1Yzbf0UUKipbdcvjhGAyl0%2BhAHpQ4acFX0elTEiNBJU9Md1ZyryrNirS5443pHh0VYyFYWHJONq%2FgqeGhRJ1E7N3RqQ0ImIxo4IB2XqvymgYspBzcMVAU1VZmQihH6DJCJvxRGrCfLCV4BIMoXsT4sRKDGeQXCR%2FlJYzPxfdI%2BJhqY6XbWCzt9w7pZGrR6j6gSHPcmobeylRW6gewkFbEd7pWPPzuXsPcpqZpkVpB5As7qV1ao%2BcrOlBk3Eca5O%2BRAHn3D%2FCbXgauOUo%2BvDW1XWv5UwYmy5s%2BcjVrrR0MgHxRo148HCjlSndBpIpWQSZjHat8AGsS9JyDS4P0mFNP7i3Vxdleiu2%2FLyW363EZdXlYs7cHwqeKh%2FvXWI6aEHgJCAhDl4e6BtY%2BnfscYsblee2rkdXBibsbv9v7Lvzl7CxqRcBfxdPzwn%2BQqDW5wt%2Bwchkn%2BPpflpfYnry1ldvfSRb1FUtSJnttmHncsL0kCIwttm%2BxAY6pgGiloMBK22WOIH7uha5eSElXcRDXskgkWqMttR1TPp6VSl8VrIYGYqCRDv3Py5JOpxKPBOKZec8v0l3pVIg8dB0nioLNreQU%2FQ1ME8dPpYkkC%2Fo1AbEBpyItsWVj%2BBDMnBjjjsPUZ%2FoBT8E7hgJH9scSVpuG34u2aQlG6xd2uFrXJZ4KXcPPq%2B9nGBBMiG%2B0hxBPg6gaAptshkHiE5x9GJd1cdxU%2FMZ&X-Amz-Signature=22edd8d9f9685a178134444c0bbb558d132e2ef1af13b9244ffcb7d517a425a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
