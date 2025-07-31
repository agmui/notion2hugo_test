---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-30T06:25:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4YMD5OD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHllXg12j3P4iZmGBheIX6lYGPG%2FcSWEz1e12lJfl%2FdvAiEA6r6pQ9YaYQThmBCXJW4fBfWOIbxOYJFk2xn7naGz8QcqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIo3%2BuQgB%2FfqYihN2ircAwR%2BXUeJZLP%2FHNmek7cvKtLJApliJw7eMN0OL6jaTmeJAtwAQa%2Bxwt4VjjCSEj94%2BqT%2F70WPMcU%2Bxmwan7phdUV3D9MolWdiMkCdMP1e0w32N9%2FoloykvCH%2FclNgMBiRXIrOZMzVj4Bw8VnpYGiWSyR0bXpC6O53Ffr8Q0EI7Ib8mT79uv23JQAWkqxxoR7vJW%2F%2FAkh%2FTRYSiitotSLnbDO5p9Hp6hxXjSTcr5CD61oWhWwf%2B%2F4bcN3uYwLWGcXyoqf7yfG96rH6Un9tZLeCqshFoAvTRhVecwkC%2F41ZrW7ban%2BWN3Ad8d%2F9XMtwpmru6%2B5YQMopMWqIfGXgTG6vl7BRUh%2FWLOW%2BmFOSv5pl21x5Fo984ilzUdC1utGWuq3V5jhR5EhnKhW3X9QcxvGheg1%2BBMAPpPNqY7JJNn9Oy79ChMIyGw%2F84Km0pRevKjMLgPFMC5ItjlYcGABpekcZ3WwrOAwm6pTfH51RNQCWYcPj19qEMNRyooDXKdp%2FpmgwlwSl0qNv4Qy8eVue3pVIT5vtG1h5VonIuxo2arfaWNpC4cEgh%2Fuo58G0WOBRS2XRLs6skudrcQ7ddEjFOAfvi5WrAQz7Rgxh87Vx2hJgGDsNKa5F4nK0TmCefcQsMKiZrMQGOqUBfSl2egukcjbDsBSlqn1oA8TJ7u3CmvfBVGkQsXzc7Q6ovnU%2F4QMDYrrQq3IAdETUhGeG1%2Fu7cg55MM6u6gNKN0D5L3ooBsl345ABh6O0UMujCKnaJFhDWuzDwxd7kmfDldzdVvlk4RqLtJHoOhGk6WsQgJQdlywNd4IrzGClbkrvfSsc8Axo6YirI7SKia6LbcQLMc3j%2Brs%2F9Ngh2ZMEFsR45bvj&X-Amz-Signature=fa48914b3faf172fe082951f57bb349af691c3b4b4040a3e2af733374159e81f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4YMD5OD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHllXg12j3P4iZmGBheIX6lYGPG%2FcSWEz1e12lJfl%2FdvAiEA6r6pQ9YaYQThmBCXJW4fBfWOIbxOYJFk2xn7naGz8QcqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIo3%2BuQgB%2FfqYihN2ircAwR%2BXUeJZLP%2FHNmek7cvKtLJApliJw7eMN0OL6jaTmeJAtwAQa%2Bxwt4VjjCSEj94%2BqT%2F70WPMcU%2Bxmwan7phdUV3D9MolWdiMkCdMP1e0w32N9%2FoloykvCH%2FclNgMBiRXIrOZMzVj4Bw8VnpYGiWSyR0bXpC6O53Ffr8Q0EI7Ib8mT79uv23JQAWkqxxoR7vJW%2F%2FAkh%2FTRYSiitotSLnbDO5p9Hp6hxXjSTcr5CD61oWhWwf%2B%2F4bcN3uYwLWGcXyoqf7yfG96rH6Un9tZLeCqshFoAvTRhVecwkC%2F41ZrW7ban%2BWN3Ad8d%2F9XMtwpmru6%2B5YQMopMWqIfGXgTG6vl7BRUh%2FWLOW%2BmFOSv5pl21x5Fo984ilzUdC1utGWuq3V5jhR5EhnKhW3X9QcxvGheg1%2BBMAPpPNqY7JJNn9Oy79ChMIyGw%2F84Km0pRevKjMLgPFMC5ItjlYcGABpekcZ3WwrOAwm6pTfH51RNQCWYcPj19qEMNRyooDXKdp%2FpmgwlwSl0qNv4Qy8eVue3pVIT5vtG1h5VonIuxo2arfaWNpC4cEgh%2Fuo58G0WOBRS2XRLs6skudrcQ7ddEjFOAfvi5WrAQz7Rgxh87Vx2hJgGDsNKa5F4nK0TmCefcQsMKiZrMQGOqUBfSl2egukcjbDsBSlqn1oA8TJ7u3CmvfBVGkQsXzc7Q6ovnU%2F4QMDYrrQq3IAdETUhGeG1%2Fu7cg55MM6u6gNKN0D5L3ooBsl345ABh6O0UMujCKnaJFhDWuzDwxd7kmfDldzdVvlk4RqLtJHoOhGk6WsQgJQdlywNd4IrzGClbkrvfSsc8Axo6YirI7SKia6LbcQLMc3j%2Brs%2F9Ngh2ZMEFsR45bvj&X-Amz-Signature=0e57d6d9bdbd26569e68fd813f18e1824f91a5f74e3b6b95f58212fd6be5f63b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4YMD5OD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHllXg12j3P4iZmGBheIX6lYGPG%2FcSWEz1e12lJfl%2FdvAiEA6r6pQ9YaYQThmBCXJW4fBfWOIbxOYJFk2xn7naGz8QcqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIo3%2BuQgB%2FfqYihN2ircAwR%2BXUeJZLP%2FHNmek7cvKtLJApliJw7eMN0OL6jaTmeJAtwAQa%2Bxwt4VjjCSEj94%2BqT%2F70WPMcU%2Bxmwan7phdUV3D9MolWdiMkCdMP1e0w32N9%2FoloykvCH%2FclNgMBiRXIrOZMzVj4Bw8VnpYGiWSyR0bXpC6O53Ffr8Q0EI7Ib8mT79uv23JQAWkqxxoR7vJW%2F%2FAkh%2FTRYSiitotSLnbDO5p9Hp6hxXjSTcr5CD61oWhWwf%2B%2F4bcN3uYwLWGcXyoqf7yfG96rH6Un9tZLeCqshFoAvTRhVecwkC%2F41ZrW7ban%2BWN3Ad8d%2F9XMtwpmru6%2B5YQMopMWqIfGXgTG6vl7BRUh%2FWLOW%2BmFOSv5pl21x5Fo984ilzUdC1utGWuq3V5jhR5EhnKhW3X9QcxvGheg1%2BBMAPpPNqY7JJNn9Oy79ChMIyGw%2F84Km0pRevKjMLgPFMC5ItjlYcGABpekcZ3WwrOAwm6pTfH51RNQCWYcPj19qEMNRyooDXKdp%2FpmgwlwSl0qNv4Qy8eVue3pVIT5vtG1h5VonIuxo2arfaWNpC4cEgh%2Fuo58G0WOBRS2XRLs6skudrcQ7ddEjFOAfvi5WrAQz7Rgxh87Vx2hJgGDsNKa5F4nK0TmCefcQsMKiZrMQGOqUBfSl2egukcjbDsBSlqn1oA8TJ7u3CmvfBVGkQsXzc7Q6ovnU%2F4QMDYrrQq3IAdETUhGeG1%2Fu7cg55MM6u6gNKN0D5L3ooBsl345ABh6O0UMujCKnaJFhDWuzDwxd7kmfDldzdVvlk4RqLtJHoOhGk6WsQgJQdlywNd4IrzGClbkrvfSsc8Axo6YirI7SKia6LbcQLMc3j%2Brs%2F9Ngh2ZMEFsR45bvj&X-Amz-Signature=e3c8a160935eced1dedee5526648f49c2e50998fc1554398051aebc22b42df9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4YMD5OD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHllXg12j3P4iZmGBheIX6lYGPG%2FcSWEz1e12lJfl%2FdvAiEA6r6pQ9YaYQThmBCXJW4fBfWOIbxOYJFk2xn7naGz8QcqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIo3%2BuQgB%2FfqYihN2ircAwR%2BXUeJZLP%2FHNmek7cvKtLJApliJw7eMN0OL6jaTmeJAtwAQa%2Bxwt4VjjCSEj94%2BqT%2F70WPMcU%2Bxmwan7phdUV3D9MolWdiMkCdMP1e0w32N9%2FoloykvCH%2FclNgMBiRXIrOZMzVj4Bw8VnpYGiWSyR0bXpC6O53Ffr8Q0EI7Ib8mT79uv23JQAWkqxxoR7vJW%2F%2FAkh%2FTRYSiitotSLnbDO5p9Hp6hxXjSTcr5CD61oWhWwf%2B%2F4bcN3uYwLWGcXyoqf7yfG96rH6Un9tZLeCqshFoAvTRhVecwkC%2F41ZrW7ban%2BWN3Ad8d%2F9XMtwpmru6%2B5YQMopMWqIfGXgTG6vl7BRUh%2FWLOW%2BmFOSv5pl21x5Fo984ilzUdC1utGWuq3V5jhR5EhnKhW3X9QcxvGheg1%2BBMAPpPNqY7JJNn9Oy79ChMIyGw%2F84Km0pRevKjMLgPFMC5ItjlYcGABpekcZ3WwrOAwm6pTfH51RNQCWYcPj19qEMNRyooDXKdp%2FpmgwlwSl0qNv4Qy8eVue3pVIT5vtG1h5VonIuxo2arfaWNpC4cEgh%2Fuo58G0WOBRS2XRLs6skudrcQ7ddEjFOAfvi5WrAQz7Rgxh87Vx2hJgGDsNKa5F4nK0TmCefcQsMKiZrMQGOqUBfSl2egukcjbDsBSlqn1oA8TJ7u3CmvfBVGkQsXzc7Q6ovnU%2F4QMDYrrQq3IAdETUhGeG1%2Fu7cg55MM6u6gNKN0D5L3ooBsl345ABh6O0UMujCKnaJFhDWuzDwxd7kmfDldzdVvlk4RqLtJHoOhGk6WsQgJQdlywNd4IrzGClbkrvfSsc8Axo6YirI7SKia6LbcQLMc3j%2Brs%2F9Ngh2ZMEFsR45bvj&X-Amz-Signature=6ee7f6903caafbbcf78624feb11419f9afe37f955af156ded3eb06fb26e58959&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4YMD5OD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHllXg12j3P4iZmGBheIX6lYGPG%2FcSWEz1e12lJfl%2FdvAiEA6r6pQ9YaYQThmBCXJW4fBfWOIbxOYJFk2xn7naGz8QcqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIo3%2BuQgB%2FfqYihN2ircAwR%2BXUeJZLP%2FHNmek7cvKtLJApliJw7eMN0OL6jaTmeJAtwAQa%2Bxwt4VjjCSEj94%2BqT%2F70WPMcU%2Bxmwan7phdUV3D9MolWdiMkCdMP1e0w32N9%2FoloykvCH%2FclNgMBiRXIrOZMzVj4Bw8VnpYGiWSyR0bXpC6O53Ffr8Q0EI7Ib8mT79uv23JQAWkqxxoR7vJW%2F%2FAkh%2FTRYSiitotSLnbDO5p9Hp6hxXjSTcr5CD61oWhWwf%2B%2F4bcN3uYwLWGcXyoqf7yfG96rH6Un9tZLeCqshFoAvTRhVecwkC%2F41ZrW7ban%2BWN3Ad8d%2F9XMtwpmru6%2B5YQMopMWqIfGXgTG6vl7BRUh%2FWLOW%2BmFOSv5pl21x5Fo984ilzUdC1utGWuq3V5jhR5EhnKhW3X9QcxvGheg1%2BBMAPpPNqY7JJNn9Oy79ChMIyGw%2F84Km0pRevKjMLgPFMC5ItjlYcGABpekcZ3WwrOAwm6pTfH51RNQCWYcPj19qEMNRyooDXKdp%2FpmgwlwSl0qNv4Qy8eVue3pVIT5vtG1h5VonIuxo2arfaWNpC4cEgh%2Fuo58G0WOBRS2XRLs6skudrcQ7ddEjFOAfvi5WrAQz7Rgxh87Vx2hJgGDsNKa5F4nK0TmCefcQsMKiZrMQGOqUBfSl2egukcjbDsBSlqn1oA8TJ7u3CmvfBVGkQsXzc7Q6ovnU%2F4QMDYrrQq3IAdETUhGeG1%2Fu7cg55MM6u6gNKN0D5L3ooBsl345ABh6O0UMujCKnaJFhDWuzDwxd7kmfDldzdVvlk4RqLtJHoOhGk6WsQgJQdlywNd4IrzGClbkrvfSsc8Axo6YirI7SKia6LbcQLMc3j%2Brs%2F9Ngh2ZMEFsR45bvj&X-Amz-Signature=2cf95af160218230c9fbce88951f555fb07cbc419a9afd28159be1996bd6e18d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4YMD5OD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHllXg12j3P4iZmGBheIX6lYGPG%2FcSWEz1e12lJfl%2FdvAiEA6r6pQ9YaYQThmBCXJW4fBfWOIbxOYJFk2xn7naGz8QcqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIo3%2BuQgB%2FfqYihN2ircAwR%2BXUeJZLP%2FHNmek7cvKtLJApliJw7eMN0OL6jaTmeJAtwAQa%2Bxwt4VjjCSEj94%2BqT%2F70WPMcU%2Bxmwan7phdUV3D9MolWdiMkCdMP1e0w32N9%2FoloykvCH%2FclNgMBiRXIrOZMzVj4Bw8VnpYGiWSyR0bXpC6O53Ffr8Q0EI7Ib8mT79uv23JQAWkqxxoR7vJW%2F%2FAkh%2FTRYSiitotSLnbDO5p9Hp6hxXjSTcr5CD61oWhWwf%2B%2F4bcN3uYwLWGcXyoqf7yfG96rH6Un9tZLeCqshFoAvTRhVecwkC%2F41ZrW7ban%2BWN3Ad8d%2F9XMtwpmru6%2B5YQMopMWqIfGXgTG6vl7BRUh%2FWLOW%2BmFOSv5pl21x5Fo984ilzUdC1utGWuq3V5jhR5EhnKhW3X9QcxvGheg1%2BBMAPpPNqY7JJNn9Oy79ChMIyGw%2F84Km0pRevKjMLgPFMC5ItjlYcGABpekcZ3WwrOAwm6pTfH51RNQCWYcPj19qEMNRyooDXKdp%2FpmgwlwSl0qNv4Qy8eVue3pVIT5vtG1h5VonIuxo2arfaWNpC4cEgh%2Fuo58G0WOBRS2XRLs6skudrcQ7ddEjFOAfvi5WrAQz7Rgxh87Vx2hJgGDsNKa5F4nK0TmCefcQsMKiZrMQGOqUBfSl2egukcjbDsBSlqn1oA8TJ7u3CmvfBVGkQsXzc7Q6ovnU%2F4QMDYrrQq3IAdETUhGeG1%2Fu7cg55MM6u6gNKN0D5L3ooBsl345ABh6O0UMujCKnaJFhDWuzDwxd7kmfDldzdVvlk4RqLtJHoOhGk6WsQgJQdlywNd4IrzGClbkrvfSsc8Axo6YirI7SKia6LbcQLMc3j%2Brs%2F9Ngh2ZMEFsR45bvj&X-Amz-Signature=ac0c96f530604f27d7bc5edf2ec126b641a9a3de79a1e8011cf18d804a034d97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4YMD5OD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHllXg12j3P4iZmGBheIX6lYGPG%2FcSWEz1e12lJfl%2FdvAiEA6r6pQ9YaYQThmBCXJW4fBfWOIbxOYJFk2xn7naGz8QcqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIo3%2BuQgB%2FfqYihN2ircAwR%2BXUeJZLP%2FHNmek7cvKtLJApliJw7eMN0OL6jaTmeJAtwAQa%2Bxwt4VjjCSEj94%2BqT%2F70WPMcU%2Bxmwan7phdUV3D9MolWdiMkCdMP1e0w32N9%2FoloykvCH%2FclNgMBiRXIrOZMzVj4Bw8VnpYGiWSyR0bXpC6O53Ffr8Q0EI7Ib8mT79uv23JQAWkqxxoR7vJW%2F%2FAkh%2FTRYSiitotSLnbDO5p9Hp6hxXjSTcr5CD61oWhWwf%2B%2F4bcN3uYwLWGcXyoqf7yfG96rH6Un9tZLeCqshFoAvTRhVecwkC%2F41ZrW7ban%2BWN3Ad8d%2F9XMtwpmru6%2B5YQMopMWqIfGXgTG6vl7BRUh%2FWLOW%2BmFOSv5pl21x5Fo984ilzUdC1utGWuq3V5jhR5EhnKhW3X9QcxvGheg1%2BBMAPpPNqY7JJNn9Oy79ChMIyGw%2F84Km0pRevKjMLgPFMC5ItjlYcGABpekcZ3WwrOAwm6pTfH51RNQCWYcPj19qEMNRyooDXKdp%2FpmgwlwSl0qNv4Qy8eVue3pVIT5vtG1h5VonIuxo2arfaWNpC4cEgh%2Fuo58G0WOBRS2XRLs6skudrcQ7ddEjFOAfvi5WrAQz7Rgxh87Vx2hJgGDsNKa5F4nK0TmCefcQsMKiZrMQGOqUBfSl2egukcjbDsBSlqn1oA8TJ7u3CmvfBVGkQsXzc7Q6ovnU%2F4QMDYrrQq3IAdETUhGeG1%2Fu7cg55MM6u6gNKN0D5L3ooBsl345ABh6O0UMujCKnaJFhDWuzDwxd7kmfDldzdVvlk4RqLtJHoOhGk6WsQgJQdlywNd4IrzGClbkrvfSsc8Axo6YirI7SKia6LbcQLMc3j%2Brs%2F9Ngh2ZMEFsR45bvj&X-Amz-Signature=4793c84d1a38c38363e82c7a0eafa5d45b0331934b94c97f57000b76580d3cfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4YMD5OD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHllXg12j3P4iZmGBheIX6lYGPG%2FcSWEz1e12lJfl%2FdvAiEA6r6pQ9YaYQThmBCXJW4fBfWOIbxOYJFk2xn7naGz8QcqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIo3%2BuQgB%2FfqYihN2ircAwR%2BXUeJZLP%2FHNmek7cvKtLJApliJw7eMN0OL6jaTmeJAtwAQa%2Bxwt4VjjCSEj94%2BqT%2F70WPMcU%2Bxmwan7phdUV3D9MolWdiMkCdMP1e0w32N9%2FoloykvCH%2FclNgMBiRXIrOZMzVj4Bw8VnpYGiWSyR0bXpC6O53Ffr8Q0EI7Ib8mT79uv23JQAWkqxxoR7vJW%2F%2FAkh%2FTRYSiitotSLnbDO5p9Hp6hxXjSTcr5CD61oWhWwf%2B%2F4bcN3uYwLWGcXyoqf7yfG96rH6Un9tZLeCqshFoAvTRhVecwkC%2F41ZrW7ban%2BWN3Ad8d%2F9XMtwpmru6%2B5YQMopMWqIfGXgTG6vl7BRUh%2FWLOW%2BmFOSv5pl21x5Fo984ilzUdC1utGWuq3V5jhR5EhnKhW3X9QcxvGheg1%2BBMAPpPNqY7JJNn9Oy79ChMIyGw%2F84Km0pRevKjMLgPFMC5ItjlYcGABpekcZ3WwrOAwm6pTfH51RNQCWYcPj19qEMNRyooDXKdp%2FpmgwlwSl0qNv4Qy8eVue3pVIT5vtG1h5VonIuxo2arfaWNpC4cEgh%2Fuo58G0WOBRS2XRLs6skudrcQ7ddEjFOAfvi5WrAQz7Rgxh87Vx2hJgGDsNKa5F4nK0TmCefcQsMKiZrMQGOqUBfSl2egukcjbDsBSlqn1oA8TJ7u3CmvfBVGkQsXzc7Q6ovnU%2F4QMDYrrQq3IAdETUhGeG1%2Fu7cg55MM6u6gNKN0D5L3ooBsl345ABh6O0UMujCKnaJFhDWuzDwxd7kmfDldzdVvlk4RqLtJHoOhGk6WsQgJQdlywNd4IrzGClbkrvfSsc8Axo6YirI7SKia6LbcQLMc3j%2Brs%2F9Ngh2ZMEFsR45bvj&X-Amz-Signature=dcf0d3e0a5fec2828cf0dca131ef52f00d1c0640721aad5a1c1542b1e386c69b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4YMD5OD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHllXg12j3P4iZmGBheIX6lYGPG%2FcSWEz1e12lJfl%2FdvAiEA6r6pQ9YaYQThmBCXJW4fBfWOIbxOYJFk2xn7naGz8QcqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIo3%2BuQgB%2FfqYihN2ircAwR%2BXUeJZLP%2FHNmek7cvKtLJApliJw7eMN0OL6jaTmeJAtwAQa%2Bxwt4VjjCSEj94%2BqT%2F70WPMcU%2Bxmwan7phdUV3D9MolWdiMkCdMP1e0w32N9%2FoloykvCH%2FclNgMBiRXIrOZMzVj4Bw8VnpYGiWSyR0bXpC6O53Ffr8Q0EI7Ib8mT79uv23JQAWkqxxoR7vJW%2F%2FAkh%2FTRYSiitotSLnbDO5p9Hp6hxXjSTcr5CD61oWhWwf%2B%2F4bcN3uYwLWGcXyoqf7yfG96rH6Un9tZLeCqshFoAvTRhVecwkC%2F41ZrW7ban%2BWN3Ad8d%2F9XMtwpmru6%2B5YQMopMWqIfGXgTG6vl7BRUh%2FWLOW%2BmFOSv5pl21x5Fo984ilzUdC1utGWuq3V5jhR5EhnKhW3X9QcxvGheg1%2BBMAPpPNqY7JJNn9Oy79ChMIyGw%2F84Km0pRevKjMLgPFMC5ItjlYcGABpekcZ3WwrOAwm6pTfH51RNQCWYcPj19qEMNRyooDXKdp%2FpmgwlwSl0qNv4Qy8eVue3pVIT5vtG1h5VonIuxo2arfaWNpC4cEgh%2Fuo58G0WOBRS2XRLs6skudrcQ7ddEjFOAfvi5WrAQz7Rgxh87Vx2hJgGDsNKa5F4nK0TmCefcQsMKiZrMQGOqUBfSl2egukcjbDsBSlqn1oA8TJ7u3CmvfBVGkQsXzc7Q6ovnU%2F4QMDYrrQq3IAdETUhGeG1%2Fu7cg55MM6u6gNKN0D5L3ooBsl345ABh6O0UMujCKnaJFhDWuzDwxd7kmfDldzdVvlk4RqLtJHoOhGk6WsQgJQdlywNd4IrzGClbkrvfSsc8Axo6YirI7SKia6LbcQLMc3j%2Brs%2F9Ngh2ZMEFsR45bvj&X-Amz-Signature=1d72f4def2787690a9dbfdc0d78123e2f273d0359ff52a542d07bf7a9dbbec55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4YMD5OD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHllXg12j3P4iZmGBheIX6lYGPG%2FcSWEz1e12lJfl%2FdvAiEA6r6pQ9YaYQThmBCXJW4fBfWOIbxOYJFk2xn7naGz8QcqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIo3%2BuQgB%2FfqYihN2ircAwR%2BXUeJZLP%2FHNmek7cvKtLJApliJw7eMN0OL6jaTmeJAtwAQa%2Bxwt4VjjCSEj94%2BqT%2F70WPMcU%2Bxmwan7phdUV3D9MolWdiMkCdMP1e0w32N9%2FoloykvCH%2FclNgMBiRXIrOZMzVj4Bw8VnpYGiWSyR0bXpC6O53Ffr8Q0EI7Ib8mT79uv23JQAWkqxxoR7vJW%2F%2FAkh%2FTRYSiitotSLnbDO5p9Hp6hxXjSTcr5CD61oWhWwf%2B%2F4bcN3uYwLWGcXyoqf7yfG96rH6Un9tZLeCqshFoAvTRhVecwkC%2F41ZrW7ban%2BWN3Ad8d%2F9XMtwpmru6%2B5YQMopMWqIfGXgTG6vl7BRUh%2FWLOW%2BmFOSv5pl21x5Fo984ilzUdC1utGWuq3V5jhR5EhnKhW3X9QcxvGheg1%2BBMAPpPNqY7JJNn9Oy79ChMIyGw%2F84Km0pRevKjMLgPFMC5ItjlYcGABpekcZ3WwrOAwm6pTfH51RNQCWYcPj19qEMNRyooDXKdp%2FpmgwlwSl0qNv4Qy8eVue3pVIT5vtG1h5VonIuxo2arfaWNpC4cEgh%2Fuo58G0WOBRS2XRLs6skudrcQ7ddEjFOAfvi5WrAQz7Rgxh87Vx2hJgGDsNKa5F4nK0TmCefcQsMKiZrMQGOqUBfSl2egukcjbDsBSlqn1oA8TJ7u3CmvfBVGkQsXzc7Q6ovnU%2F4QMDYrrQq3IAdETUhGeG1%2Fu7cg55MM6u6gNKN0D5L3ooBsl345ABh6O0UMujCKnaJFhDWuzDwxd7kmfDldzdVvlk4RqLtJHoOhGk6WsQgJQdlywNd4IrzGClbkrvfSsc8Axo6YirI7SKia6LbcQLMc3j%2Brs%2F9Ngh2ZMEFsR45bvj&X-Amz-Signature=7e8022f5081d12dd41c50d56716e2454114777905bd93188265b428fac0d28be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4YMD5OD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHllXg12j3P4iZmGBheIX6lYGPG%2FcSWEz1e12lJfl%2FdvAiEA6r6pQ9YaYQThmBCXJW4fBfWOIbxOYJFk2xn7naGz8QcqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIo3%2BuQgB%2FfqYihN2ircAwR%2BXUeJZLP%2FHNmek7cvKtLJApliJw7eMN0OL6jaTmeJAtwAQa%2Bxwt4VjjCSEj94%2BqT%2F70WPMcU%2Bxmwan7phdUV3D9MolWdiMkCdMP1e0w32N9%2FoloykvCH%2FclNgMBiRXIrOZMzVj4Bw8VnpYGiWSyR0bXpC6O53Ffr8Q0EI7Ib8mT79uv23JQAWkqxxoR7vJW%2F%2FAkh%2FTRYSiitotSLnbDO5p9Hp6hxXjSTcr5CD61oWhWwf%2B%2F4bcN3uYwLWGcXyoqf7yfG96rH6Un9tZLeCqshFoAvTRhVecwkC%2F41ZrW7ban%2BWN3Ad8d%2F9XMtwpmru6%2B5YQMopMWqIfGXgTG6vl7BRUh%2FWLOW%2BmFOSv5pl21x5Fo984ilzUdC1utGWuq3V5jhR5EhnKhW3X9QcxvGheg1%2BBMAPpPNqY7JJNn9Oy79ChMIyGw%2F84Km0pRevKjMLgPFMC5ItjlYcGABpekcZ3WwrOAwm6pTfH51RNQCWYcPj19qEMNRyooDXKdp%2FpmgwlwSl0qNv4Qy8eVue3pVIT5vtG1h5VonIuxo2arfaWNpC4cEgh%2Fuo58G0WOBRS2XRLs6skudrcQ7ddEjFOAfvi5WrAQz7Rgxh87Vx2hJgGDsNKa5F4nK0TmCefcQsMKiZrMQGOqUBfSl2egukcjbDsBSlqn1oA8TJ7u3CmvfBVGkQsXzc7Q6ovnU%2F4QMDYrrQq3IAdETUhGeG1%2Fu7cg55MM6u6gNKN0D5L3ooBsl345ABh6O0UMujCKnaJFhDWuzDwxd7kmfDldzdVvlk4RqLtJHoOhGk6WsQgJQdlywNd4IrzGClbkrvfSsc8Axo6YirI7SKia6LbcQLMc3j%2Brs%2F9Ngh2ZMEFsR45bvj&X-Amz-Signature=26622930e89b19c17d679c5a6730ed9549a52ba1b9eaab582064be962c30882d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4YMD5OD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHllXg12j3P4iZmGBheIX6lYGPG%2FcSWEz1e12lJfl%2FdvAiEA6r6pQ9YaYQThmBCXJW4fBfWOIbxOYJFk2xn7naGz8QcqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIo3%2BuQgB%2FfqYihN2ircAwR%2BXUeJZLP%2FHNmek7cvKtLJApliJw7eMN0OL6jaTmeJAtwAQa%2Bxwt4VjjCSEj94%2BqT%2F70WPMcU%2Bxmwan7phdUV3D9MolWdiMkCdMP1e0w32N9%2FoloykvCH%2FclNgMBiRXIrOZMzVj4Bw8VnpYGiWSyR0bXpC6O53Ffr8Q0EI7Ib8mT79uv23JQAWkqxxoR7vJW%2F%2FAkh%2FTRYSiitotSLnbDO5p9Hp6hxXjSTcr5CD61oWhWwf%2B%2F4bcN3uYwLWGcXyoqf7yfG96rH6Un9tZLeCqshFoAvTRhVecwkC%2F41ZrW7ban%2BWN3Ad8d%2F9XMtwpmru6%2B5YQMopMWqIfGXgTG6vl7BRUh%2FWLOW%2BmFOSv5pl21x5Fo984ilzUdC1utGWuq3V5jhR5EhnKhW3X9QcxvGheg1%2BBMAPpPNqY7JJNn9Oy79ChMIyGw%2F84Km0pRevKjMLgPFMC5ItjlYcGABpekcZ3WwrOAwm6pTfH51RNQCWYcPj19qEMNRyooDXKdp%2FpmgwlwSl0qNv4Qy8eVue3pVIT5vtG1h5VonIuxo2arfaWNpC4cEgh%2Fuo58G0WOBRS2XRLs6skudrcQ7ddEjFOAfvi5WrAQz7Rgxh87Vx2hJgGDsNKa5F4nK0TmCefcQsMKiZrMQGOqUBfSl2egukcjbDsBSlqn1oA8TJ7u3CmvfBVGkQsXzc7Q6ovnU%2F4QMDYrrQq3IAdETUhGeG1%2Fu7cg55MM6u6gNKN0D5L3ooBsl345ABh6O0UMujCKnaJFhDWuzDwxd7kmfDldzdVvlk4RqLtJHoOhGk6WsQgJQdlywNd4IrzGClbkrvfSsc8Axo6YirI7SKia6LbcQLMc3j%2Brs%2F9Ngh2ZMEFsR45bvj&X-Amz-Signature=ae91d60b3d8c18bcb04db6860d652eedd84a633e1603402452032909c01538e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4YMD5OD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHllXg12j3P4iZmGBheIX6lYGPG%2FcSWEz1e12lJfl%2FdvAiEA6r6pQ9YaYQThmBCXJW4fBfWOIbxOYJFk2xn7naGz8QcqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIo3%2BuQgB%2FfqYihN2ircAwR%2BXUeJZLP%2FHNmek7cvKtLJApliJw7eMN0OL6jaTmeJAtwAQa%2Bxwt4VjjCSEj94%2BqT%2F70WPMcU%2Bxmwan7phdUV3D9MolWdiMkCdMP1e0w32N9%2FoloykvCH%2FclNgMBiRXIrOZMzVj4Bw8VnpYGiWSyR0bXpC6O53Ffr8Q0EI7Ib8mT79uv23JQAWkqxxoR7vJW%2F%2FAkh%2FTRYSiitotSLnbDO5p9Hp6hxXjSTcr5CD61oWhWwf%2B%2F4bcN3uYwLWGcXyoqf7yfG96rH6Un9tZLeCqshFoAvTRhVecwkC%2F41ZrW7ban%2BWN3Ad8d%2F9XMtwpmru6%2B5YQMopMWqIfGXgTG6vl7BRUh%2FWLOW%2BmFOSv5pl21x5Fo984ilzUdC1utGWuq3V5jhR5EhnKhW3X9QcxvGheg1%2BBMAPpPNqY7JJNn9Oy79ChMIyGw%2F84Km0pRevKjMLgPFMC5ItjlYcGABpekcZ3WwrOAwm6pTfH51RNQCWYcPj19qEMNRyooDXKdp%2FpmgwlwSl0qNv4Qy8eVue3pVIT5vtG1h5VonIuxo2arfaWNpC4cEgh%2Fuo58G0WOBRS2XRLs6skudrcQ7ddEjFOAfvi5WrAQz7Rgxh87Vx2hJgGDsNKa5F4nK0TmCefcQsMKiZrMQGOqUBfSl2egukcjbDsBSlqn1oA8TJ7u3CmvfBVGkQsXzc7Q6ovnU%2F4QMDYrrQq3IAdETUhGeG1%2Fu7cg55MM6u6gNKN0D5L3ooBsl345ABh6O0UMujCKnaJFhDWuzDwxd7kmfDldzdVvlk4RqLtJHoOhGk6WsQgJQdlywNd4IrzGClbkrvfSsc8Axo6YirI7SKia6LbcQLMc3j%2Brs%2F9Ngh2ZMEFsR45bvj&X-Amz-Signature=8c8e3739941e6bc2d119c7366d0bb4651d5b8b70a16df621e91e87f81b2534f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4YMD5OD%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T091608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHllXg12j3P4iZmGBheIX6lYGPG%2FcSWEz1e12lJfl%2FdvAiEA6r6pQ9YaYQThmBCXJW4fBfWOIbxOYJFk2xn7naGz8QcqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIo3%2BuQgB%2FfqYihN2ircAwR%2BXUeJZLP%2FHNmek7cvKtLJApliJw7eMN0OL6jaTmeJAtwAQa%2Bxwt4VjjCSEj94%2BqT%2F70WPMcU%2Bxmwan7phdUV3D9MolWdiMkCdMP1e0w32N9%2FoloykvCH%2FclNgMBiRXIrOZMzVj4Bw8VnpYGiWSyR0bXpC6O53Ffr8Q0EI7Ib8mT79uv23JQAWkqxxoR7vJW%2F%2FAkh%2FTRYSiitotSLnbDO5p9Hp6hxXjSTcr5CD61oWhWwf%2B%2F4bcN3uYwLWGcXyoqf7yfG96rH6Un9tZLeCqshFoAvTRhVecwkC%2F41ZrW7ban%2BWN3Ad8d%2F9XMtwpmru6%2B5YQMopMWqIfGXgTG6vl7BRUh%2FWLOW%2BmFOSv5pl21x5Fo984ilzUdC1utGWuq3V5jhR5EhnKhW3X9QcxvGheg1%2BBMAPpPNqY7JJNn9Oy79ChMIyGw%2F84Km0pRevKjMLgPFMC5ItjlYcGABpekcZ3WwrOAwm6pTfH51RNQCWYcPj19qEMNRyooDXKdp%2FpmgwlwSl0qNv4Qy8eVue3pVIT5vtG1h5VonIuxo2arfaWNpC4cEgh%2Fuo58G0WOBRS2XRLs6skudrcQ7ddEjFOAfvi5WrAQz7Rgxh87Vx2hJgGDsNKa5F4nK0TmCefcQsMKiZrMQGOqUBfSl2egukcjbDsBSlqn1oA8TJ7u3CmvfBVGkQsXzc7Q6ovnU%2F4QMDYrrQq3IAdETUhGeG1%2Fu7cg55MM6u6gNKN0D5L3ooBsl345ABh6O0UMujCKnaJFhDWuzDwxd7kmfDldzdVvlk4RqLtJHoOhGk6WsQgJQdlywNd4IrzGClbkrvfSsc8Axo6YirI7SKia6LbcQLMc3j%2Brs%2F9Ngh2ZMEFsR45bvj&X-Amz-Signature=fe4d75eb0916a437fc0041d4834ad0a36091bef8655379e28cc9a42fd422b56f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
