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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466427V45JX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuqk%2FgyRa8YUC1lHpAUjEsKppZypgzi9pjGUekezezhgIgNSLffiXxfCE7iE%2FP1LbXOlCbDUz4VDBLNNol%2F6OX9hcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDNaxPbBU7XtzpEI6xCrcA%2FyFViWzdZf7%2FzABVkqhdo6RyYleHP2unHl%2FDEhd2BB03ZnsvowmfCpnq1xvZq5ojXGDYJmLVNqnoqV59LrO7YtSxGLwDiTsc11vb%2ByK2jiReFPJmAi7rxohsk%2F0BA72%2BdfOWz%2BLiyaEptILHN2lVspACfGhPCgMbQcfcgO05T2RxYnpWXihSZjGOBxYoqKxYFA6aN7HIzkcQYt7ZdU03foybhvnkP7DR%2BLEmnZqVrSfcp4JB8BwjF7JydauAeLg1mjfxL%2F%2FdRPNHdz2eIyZsz5C4v6%2FGXY05mkr0HCAmGbZvCC3om3Myh%2BwKtx%2Bl8WnwBHJv8FVmAQZ8Z5HOr4RM%2BcZkyiGtuMOO4t4vAzsW%2FIhZ5OghU%2FFarueYcUbqE2h48bzdmr%2F%2Fa6L0LOXuHHe3ODe6gSZ08pFWETv4DAcmEc96bqR348D0OKhIDrPT3QeZgqVDvfm0RGpcBUNjrbHB7aZfoCBPRyE2Up5QG1%2Fv2bcVXciUxjG%2FTWH7aubBPJj6QnzA74L%2FEoemy%2B8am%2Bipr%2FUI8KEaJMYpaak5H7zeWkRD4jn209qyQ0qYn7r8rsV28hdCezszc1wCy1gGBGgfIMeUBhfolgCUDHohE3G8PMBfnOu5eXEZsaH6uQcMK3R8MQGOqUBWkaAZxfjIsm1o7BKK11IRQIA6T8aYqR1iN5dvYpShxw%2Bpa7XOsL%2BVeIb41%2FzKfc%2F%2FZx0%2FeJDNJb1GOOlckcyPCDMi7xEoPX7m2bl40xu1WyCGpVWUsx2TmcxxcSeHLSfzqkDitYvgFHGvXS82%2F6SkHyD4c37P7hiaoW10yG2VZYGD%2B52AgzeZLV37qEUoD0Hp02zAXS%2Fc%2Bt8zAUTdg7mtvYwbJ3U&X-Amz-Signature=a25c3715b2d51cdcd154342673c9af6b09894564c964a91c7be28a584933acf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466427V45JX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuqk%2FgyRa8YUC1lHpAUjEsKppZypgzi9pjGUekezezhgIgNSLffiXxfCE7iE%2FP1LbXOlCbDUz4VDBLNNol%2F6OX9hcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDNaxPbBU7XtzpEI6xCrcA%2FyFViWzdZf7%2FzABVkqhdo6RyYleHP2unHl%2FDEhd2BB03ZnsvowmfCpnq1xvZq5ojXGDYJmLVNqnoqV59LrO7YtSxGLwDiTsc11vb%2ByK2jiReFPJmAi7rxohsk%2F0BA72%2BdfOWz%2BLiyaEptILHN2lVspACfGhPCgMbQcfcgO05T2RxYnpWXihSZjGOBxYoqKxYFA6aN7HIzkcQYt7ZdU03foybhvnkP7DR%2BLEmnZqVrSfcp4JB8BwjF7JydauAeLg1mjfxL%2F%2FdRPNHdz2eIyZsz5C4v6%2FGXY05mkr0HCAmGbZvCC3om3Myh%2BwKtx%2Bl8WnwBHJv8FVmAQZ8Z5HOr4RM%2BcZkyiGtuMOO4t4vAzsW%2FIhZ5OghU%2FFarueYcUbqE2h48bzdmr%2F%2Fa6L0LOXuHHe3ODe6gSZ08pFWETv4DAcmEc96bqR348D0OKhIDrPT3QeZgqVDvfm0RGpcBUNjrbHB7aZfoCBPRyE2Up5QG1%2Fv2bcVXciUxjG%2FTWH7aubBPJj6QnzA74L%2FEoemy%2B8am%2Bipr%2FUI8KEaJMYpaak5H7zeWkRD4jn209qyQ0qYn7r8rsV28hdCezszc1wCy1gGBGgfIMeUBhfolgCUDHohE3G8PMBfnOu5eXEZsaH6uQcMK3R8MQGOqUBWkaAZxfjIsm1o7BKK11IRQIA6T8aYqR1iN5dvYpShxw%2Bpa7XOsL%2BVeIb41%2FzKfc%2F%2FZx0%2FeJDNJb1GOOlckcyPCDMi7xEoPX7m2bl40xu1WyCGpVWUsx2TmcxxcSeHLSfzqkDitYvgFHGvXS82%2F6SkHyD4c37P7hiaoW10yG2VZYGD%2B52AgzeZLV37qEUoD0Hp02zAXS%2Fc%2Bt8zAUTdg7mtvYwbJ3U&X-Amz-Signature=5abdb37602486f130fce034fc3eb7289e554c89a4b5ebb159b1bce17e3297350&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466427V45JX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuqk%2FgyRa8YUC1lHpAUjEsKppZypgzi9pjGUekezezhgIgNSLffiXxfCE7iE%2FP1LbXOlCbDUz4VDBLNNol%2F6OX9hcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDNaxPbBU7XtzpEI6xCrcA%2FyFViWzdZf7%2FzABVkqhdo6RyYleHP2unHl%2FDEhd2BB03ZnsvowmfCpnq1xvZq5ojXGDYJmLVNqnoqV59LrO7YtSxGLwDiTsc11vb%2ByK2jiReFPJmAi7rxohsk%2F0BA72%2BdfOWz%2BLiyaEptILHN2lVspACfGhPCgMbQcfcgO05T2RxYnpWXihSZjGOBxYoqKxYFA6aN7HIzkcQYt7ZdU03foybhvnkP7DR%2BLEmnZqVrSfcp4JB8BwjF7JydauAeLg1mjfxL%2F%2FdRPNHdz2eIyZsz5C4v6%2FGXY05mkr0HCAmGbZvCC3om3Myh%2BwKtx%2Bl8WnwBHJv8FVmAQZ8Z5HOr4RM%2BcZkyiGtuMOO4t4vAzsW%2FIhZ5OghU%2FFarueYcUbqE2h48bzdmr%2F%2Fa6L0LOXuHHe3ODe6gSZ08pFWETv4DAcmEc96bqR348D0OKhIDrPT3QeZgqVDvfm0RGpcBUNjrbHB7aZfoCBPRyE2Up5QG1%2Fv2bcVXciUxjG%2FTWH7aubBPJj6QnzA74L%2FEoemy%2B8am%2Bipr%2FUI8KEaJMYpaak5H7zeWkRD4jn209qyQ0qYn7r8rsV28hdCezszc1wCy1gGBGgfIMeUBhfolgCUDHohE3G8PMBfnOu5eXEZsaH6uQcMK3R8MQGOqUBWkaAZxfjIsm1o7BKK11IRQIA6T8aYqR1iN5dvYpShxw%2Bpa7XOsL%2BVeIb41%2FzKfc%2F%2FZx0%2FeJDNJb1GOOlckcyPCDMi7xEoPX7m2bl40xu1WyCGpVWUsx2TmcxxcSeHLSfzqkDitYvgFHGvXS82%2F6SkHyD4c37P7hiaoW10yG2VZYGD%2B52AgzeZLV37qEUoD0Hp02zAXS%2Fc%2Bt8zAUTdg7mtvYwbJ3U&X-Amz-Signature=6969aeb7639cb19fc46b4a4e39f7deb11620514dd0ebe66417617975204ba358&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466427V45JX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuqk%2FgyRa8YUC1lHpAUjEsKppZypgzi9pjGUekezezhgIgNSLffiXxfCE7iE%2FP1LbXOlCbDUz4VDBLNNol%2F6OX9hcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDNaxPbBU7XtzpEI6xCrcA%2FyFViWzdZf7%2FzABVkqhdo6RyYleHP2unHl%2FDEhd2BB03ZnsvowmfCpnq1xvZq5ojXGDYJmLVNqnoqV59LrO7YtSxGLwDiTsc11vb%2ByK2jiReFPJmAi7rxohsk%2F0BA72%2BdfOWz%2BLiyaEptILHN2lVspACfGhPCgMbQcfcgO05T2RxYnpWXihSZjGOBxYoqKxYFA6aN7HIzkcQYt7ZdU03foybhvnkP7DR%2BLEmnZqVrSfcp4JB8BwjF7JydauAeLg1mjfxL%2F%2FdRPNHdz2eIyZsz5C4v6%2FGXY05mkr0HCAmGbZvCC3om3Myh%2BwKtx%2Bl8WnwBHJv8FVmAQZ8Z5HOr4RM%2BcZkyiGtuMOO4t4vAzsW%2FIhZ5OghU%2FFarueYcUbqE2h48bzdmr%2F%2Fa6L0LOXuHHe3ODe6gSZ08pFWETv4DAcmEc96bqR348D0OKhIDrPT3QeZgqVDvfm0RGpcBUNjrbHB7aZfoCBPRyE2Up5QG1%2Fv2bcVXciUxjG%2FTWH7aubBPJj6QnzA74L%2FEoemy%2B8am%2Bipr%2FUI8KEaJMYpaak5H7zeWkRD4jn209qyQ0qYn7r8rsV28hdCezszc1wCy1gGBGgfIMeUBhfolgCUDHohE3G8PMBfnOu5eXEZsaH6uQcMK3R8MQGOqUBWkaAZxfjIsm1o7BKK11IRQIA6T8aYqR1iN5dvYpShxw%2Bpa7XOsL%2BVeIb41%2FzKfc%2F%2FZx0%2FeJDNJb1GOOlckcyPCDMi7xEoPX7m2bl40xu1WyCGpVWUsx2TmcxxcSeHLSfzqkDitYvgFHGvXS82%2F6SkHyD4c37P7hiaoW10yG2VZYGD%2B52AgzeZLV37qEUoD0Hp02zAXS%2Fc%2Bt8zAUTdg7mtvYwbJ3U&X-Amz-Signature=adb200928d977b27af7c5ad2ac7fead19f25939dcf59ecc302405d239af39274&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466427V45JX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuqk%2FgyRa8YUC1lHpAUjEsKppZypgzi9pjGUekezezhgIgNSLffiXxfCE7iE%2FP1LbXOlCbDUz4VDBLNNol%2F6OX9hcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDNaxPbBU7XtzpEI6xCrcA%2FyFViWzdZf7%2FzABVkqhdo6RyYleHP2unHl%2FDEhd2BB03ZnsvowmfCpnq1xvZq5ojXGDYJmLVNqnoqV59LrO7YtSxGLwDiTsc11vb%2ByK2jiReFPJmAi7rxohsk%2F0BA72%2BdfOWz%2BLiyaEptILHN2lVspACfGhPCgMbQcfcgO05T2RxYnpWXihSZjGOBxYoqKxYFA6aN7HIzkcQYt7ZdU03foybhvnkP7DR%2BLEmnZqVrSfcp4JB8BwjF7JydauAeLg1mjfxL%2F%2FdRPNHdz2eIyZsz5C4v6%2FGXY05mkr0HCAmGbZvCC3om3Myh%2BwKtx%2Bl8WnwBHJv8FVmAQZ8Z5HOr4RM%2BcZkyiGtuMOO4t4vAzsW%2FIhZ5OghU%2FFarueYcUbqE2h48bzdmr%2F%2Fa6L0LOXuHHe3ODe6gSZ08pFWETv4DAcmEc96bqR348D0OKhIDrPT3QeZgqVDvfm0RGpcBUNjrbHB7aZfoCBPRyE2Up5QG1%2Fv2bcVXciUxjG%2FTWH7aubBPJj6QnzA74L%2FEoemy%2B8am%2Bipr%2FUI8KEaJMYpaak5H7zeWkRD4jn209qyQ0qYn7r8rsV28hdCezszc1wCy1gGBGgfIMeUBhfolgCUDHohE3G8PMBfnOu5eXEZsaH6uQcMK3R8MQGOqUBWkaAZxfjIsm1o7BKK11IRQIA6T8aYqR1iN5dvYpShxw%2Bpa7XOsL%2BVeIb41%2FzKfc%2F%2FZx0%2FeJDNJb1GOOlckcyPCDMi7xEoPX7m2bl40xu1WyCGpVWUsx2TmcxxcSeHLSfzqkDitYvgFHGvXS82%2F6SkHyD4c37P7hiaoW10yG2VZYGD%2B52AgzeZLV37qEUoD0Hp02zAXS%2Fc%2Bt8zAUTdg7mtvYwbJ3U&X-Amz-Signature=ce04d3dfc3cff0821e75d6b833855f93a7d98e3d0a201aa78ec42e1b1c756650&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466427V45JX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuqk%2FgyRa8YUC1lHpAUjEsKppZypgzi9pjGUekezezhgIgNSLffiXxfCE7iE%2FP1LbXOlCbDUz4VDBLNNol%2F6OX9hcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDNaxPbBU7XtzpEI6xCrcA%2FyFViWzdZf7%2FzABVkqhdo6RyYleHP2unHl%2FDEhd2BB03ZnsvowmfCpnq1xvZq5ojXGDYJmLVNqnoqV59LrO7YtSxGLwDiTsc11vb%2ByK2jiReFPJmAi7rxohsk%2F0BA72%2BdfOWz%2BLiyaEptILHN2lVspACfGhPCgMbQcfcgO05T2RxYnpWXihSZjGOBxYoqKxYFA6aN7HIzkcQYt7ZdU03foybhvnkP7DR%2BLEmnZqVrSfcp4JB8BwjF7JydauAeLg1mjfxL%2F%2FdRPNHdz2eIyZsz5C4v6%2FGXY05mkr0HCAmGbZvCC3om3Myh%2BwKtx%2Bl8WnwBHJv8FVmAQZ8Z5HOr4RM%2BcZkyiGtuMOO4t4vAzsW%2FIhZ5OghU%2FFarueYcUbqE2h48bzdmr%2F%2Fa6L0LOXuHHe3ODe6gSZ08pFWETv4DAcmEc96bqR348D0OKhIDrPT3QeZgqVDvfm0RGpcBUNjrbHB7aZfoCBPRyE2Up5QG1%2Fv2bcVXciUxjG%2FTWH7aubBPJj6QnzA74L%2FEoemy%2B8am%2Bipr%2FUI8KEaJMYpaak5H7zeWkRD4jn209qyQ0qYn7r8rsV28hdCezszc1wCy1gGBGgfIMeUBhfolgCUDHohE3G8PMBfnOu5eXEZsaH6uQcMK3R8MQGOqUBWkaAZxfjIsm1o7BKK11IRQIA6T8aYqR1iN5dvYpShxw%2Bpa7XOsL%2BVeIb41%2FzKfc%2F%2FZx0%2FeJDNJb1GOOlckcyPCDMi7xEoPX7m2bl40xu1WyCGpVWUsx2TmcxxcSeHLSfzqkDitYvgFHGvXS82%2F6SkHyD4c37P7hiaoW10yG2VZYGD%2B52AgzeZLV37qEUoD0Hp02zAXS%2Fc%2Bt8zAUTdg7mtvYwbJ3U&X-Amz-Signature=bc28e6839dfa841200a31d84d927bb8fd75947e39c8812f6f1391a84a76ffae3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466427V45JX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuqk%2FgyRa8YUC1lHpAUjEsKppZypgzi9pjGUekezezhgIgNSLffiXxfCE7iE%2FP1LbXOlCbDUz4VDBLNNol%2F6OX9hcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDNaxPbBU7XtzpEI6xCrcA%2FyFViWzdZf7%2FzABVkqhdo6RyYleHP2unHl%2FDEhd2BB03ZnsvowmfCpnq1xvZq5ojXGDYJmLVNqnoqV59LrO7YtSxGLwDiTsc11vb%2ByK2jiReFPJmAi7rxohsk%2F0BA72%2BdfOWz%2BLiyaEptILHN2lVspACfGhPCgMbQcfcgO05T2RxYnpWXihSZjGOBxYoqKxYFA6aN7HIzkcQYt7ZdU03foybhvnkP7DR%2BLEmnZqVrSfcp4JB8BwjF7JydauAeLg1mjfxL%2F%2FdRPNHdz2eIyZsz5C4v6%2FGXY05mkr0HCAmGbZvCC3om3Myh%2BwKtx%2Bl8WnwBHJv8FVmAQZ8Z5HOr4RM%2BcZkyiGtuMOO4t4vAzsW%2FIhZ5OghU%2FFarueYcUbqE2h48bzdmr%2F%2Fa6L0LOXuHHe3ODe6gSZ08pFWETv4DAcmEc96bqR348D0OKhIDrPT3QeZgqVDvfm0RGpcBUNjrbHB7aZfoCBPRyE2Up5QG1%2Fv2bcVXciUxjG%2FTWH7aubBPJj6QnzA74L%2FEoemy%2B8am%2Bipr%2FUI8KEaJMYpaak5H7zeWkRD4jn209qyQ0qYn7r8rsV28hdCezszc1wCy1gGBGgfIMeUBhfolgCUDHohE3G8PMBfnOu5eXEZsaH6uQcMK3R8MQGOqUBWkaAZxfjIsm1o7BKK11IRQIA6T8aYqR1iN5dvYpShxw%2Bpa7XOsL%2BVeIb41%2FzKfc%2F%2FZx0%2FeJDNJb1GOOlckcyPCDMi7xEoPX7m2bl40xu1WyCGpVWUsx2TmcxxcSeHLSfzqkDitYvgFHGvXS82%2F6SkHyD4c37P7hiaoW10yG2VZYGD%2B52AgzeZLV37qEUoD0Hp02zAXS%2Fc%2Bt8zAUTdg7mtvYwbJ3U&X-Amz-Signature=27a209eca5cb349bb570c1adb036fb721bbaec2a079cdf2a5a3bbfe808e7c183&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466427V45JX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuqk%2FgyRa8YUC1lHpAUjEsKppZypgzi9pjGUekezezhgIgNSLffiXxfCE7iE%2FP1LbXOlCbDUz4VDBLNNol%2F6OX9hcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDNaxPbBU7XtzpEI6xCrcA%2FyFViWzdZf7%2FzABVkqhdo6RyYleHP2unHl%2FDEhd2BB03ZnsvowmfCpnq1xvZq5ojXGDYJmLVNqnoqV59LrO7YtSxGLwDiTsc11vb%2ByK2jiReFPJmAi7rxohsk%2F0BA72%2BdfOWz%2BLiyaEptILHN2lVspACfGhPCgMbQcfcgO05T2RxYnpWXihSZjGOBxYoqKxYFA6aN7HIzkcQYt7ZdU03foybhvnkP7DR%2BLEmnZqVrSfcp4JB8BwjF7JydauAeLg1mjfxL%2F%2FdRPNHdz2eIyZsz5C4v6%2FGXY05mkr0HCAmGbZvCC3om3Myh%2BwKtx%2Bl8WnwBHJv8FVmAQZ8Z5HOr4RM%2BcZkyiGtuMOO4t4vAzsW%2FIhZ5OghU%2FFarueYcUbqE2h48bzdmr%2F%2Fa6L0LOXuHHe3ODe6gSZ08pFWETv4DAcmEc96bqR348D0OKhIDrPT3QeZgqVDvfm0RGpcBUNjrbHB7aZfoCBPRyE2Up5QG1%2Fv2bcVXciUxjG%2FTWH7aubBPJj6QnzA74L%2FEoemy%2B8am%2Bipr%2FUI8KEaJMYpaak5H7zeWkRD4jn209qyQ0qYn7r8rsV28hdCezszc1wCy1gGBGgfIMeUBhfolgCUDHohE3G8PMBfnOu5eXEZsaH6uQcMK3R8MQGOqUBWkaAZxfjIsm1o7BKK11IRQIA6T8aYqR1iN5dvYpShxw%2Bpa7XOsL%2BVeIb41%2FzKfc%2F%2FZx0%2FeJDNJb1GOOlckcyPCDMi7xEoPX7m2bl40xu1WyCGpVWUsx2TmcxxcSeHLSfzqkDitYvgFHGvXS82%2F6SkHyD4c37P7hiaoW10yG2VZYGD%2B52AgzeZLV37qEUoD0Hp02zAXS%2Fc%2Bt8zAUTdg7mtvYwbJ3U&X-Amz-Signature=ebb22de300da4d5604d34752cac02dfcec9c5773a8d52a963a5eecbc67f11264&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466427V45JX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuqk%2FgyRa8YUC1lHpAUjEsKppZypgzi9pjGUekezezhgIgNSLffiXxfCE7iE%2FP1LbXOlCbDUz4VDBLNNol%2F6OX9hcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDNaxPbBU7XtzpEI6xCrcA%2FyFViWzdZf7%2FzABVkqhdo6RyYleHP2unHl%2FDEhd2BB03ZnsvowmfCpnq1xvZq5ojXGDYJmLVNqnoqV59LrO7YtSxGLwDiTsc11vb%2ByK2jiReFPJmAi7rxohsk%2F0BA72%2BdfOWz%2BLiyaEptILHN2lVspACfGhPCgMbQcfcgO05T2RxYnpWXihSZjGOBxYoqKxYFA6aN7HIzkcQYt7ZdU03foybhvnkP7DR%2BLEmnZqVrSfcp4JB8BwjF7JydauAeLg1mjfxL%2F%2FdRPNHdz2eIyZsz5C4v6%2FGXY05mkr0HCAmGbZvCC3om3Myh%2BwKtx%2Bl8WnwBHJv8FVmAQZ8Z5HOr4RM%2BcZkyiGtuMOO4t4vAzsW%2FIhZ5OghU%2FFarueYcUbqE2h48bzdmr%2F%2Fa6L0LOXuHHe3ODe6gSZ08pFWETv4DAcmEc96bqR348D0OKhIDrPT3QeZgqVDvfm0RGpcBUNjrbHB7aZfoCBPRyE2Up5QG1%2Fv2bcVXciUxjG%2FTWH7aubBPJj6QnzA74L%2FEoemy%2B8am%2Bipr%2FUI8KEaJMYpaak5H7zeWkRD4jn209qyQ0qYn7r8rsV28hdCezszc1wCy1gGBGgfIMeUBhfolgCUDHohE3G8PMBfnOu5eXEZsaH6uQcMK3R8MQGOqUBWkaAZxfjIsm1o7BKK11IRQIA6T8aYqR1iN5dvYpShxw%2Bpa7XOsL%2BVeIb41%2FzKfc%2F%2FZx0%2FeJDNJb1GOOlckcyPCDMi7xEoPX7m2bl40xu1WyCGpVWUsx2TmcxxcSeHLSfzqkDitYvgFHGvXS82%2F6SkHyD4c37P7hiaoW10yG2VZYGD%2B52AgzeZLV37qEUoD0Hp02zAXS%2Fc%2Bt8zAUTdg7mtvYwbJ3U&X-Amz-Signature=0747b462a9f1dfc43a488b26fc61b1a3f1f1bcafdeb7bbe0a47e5e4d140fb4c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466427V45JX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuqk%2FgyRa8YUC1lHpAUjEsKppZypgzi9pjGUekezezhgIgNSLffiXxfCE7iE%2FP1LbXOlCbDUz4VDBLNNol%2F6OX9hcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDNaxPbBU7XtzpEI6xCrcA%2FyFViWzdZf7%2FzABVkqhdo6RyYleHP2unHl%2FDEhd2BB03ZnsvowmfCpnq1xvZq5ojXGDYJmLVNqnoqV59LrO7YtSxGLwDiTsc11vb%2ByK2jiReFPJmAi7rxohsk%2F0BA72%2BdfOWz%2BLiyaEptILHN2lVspACfGhPCgMbQcfcgO05T2RxYnpWXihSZjGOBxYoqKxYFA6aN7HIzkcQYt7ZdU03foybhvnkP7DR%2BLEmnZqVrSfcp4JB8BwjF7JydauAeLg1mjfxL%2F%2FdRPNHdz2eIyZsz5C4v6%2FGXY05mkr0HCAmGbZvCC3om3Myh%2BwKtx%2Bl8WnwBHJv8FVmAQZ8Z5HOr4RM%2BcZkyiGtuMOO4t4vAzsW%2FIhZ5OghU%2FFarueYcUbqE2h48bzdmr%2F%2Fa6L0LOXuHHe3ODe6gSZ08pFWETv4DAcmEc96bqR348D0OKhIDrPT3QeZgqVDvfm0RGpcBUNjrbHB7aZfoCBPRyE2Up5QG1%2Fv2bcVXciUxjG%2FTWH7aubBPJj6QnzA74L%2FEoemy%2B8am%2Bipr%2FUI8KEaJMYpaak5H7zeWkRD4jn209qyQ0qYn7r8rsV28hdCezszc1wCy1gGBGgfIMeUBhfolgCUDHohE3G8PMBfnOu5eXEZsaH6uQcMK3R8MQGOqUBWkaAZxfjIsm1o7BKK11IRQIA6T8aYqR1iN5dvYpShxw%2Bpa7XOsL%2BVeIb41%2FzKfc%2F%2FZx0%2FeJDNJb1GOOlckcyPCDMi7xEoPX7m2bl40xu1WyCGpVWUsx2TmcxxcSeHLSfzqkDitYvgFHGvXS82%2F6SkHyD4c37P7hiaoW10yG2VZYGD%2B52AgzeZLV37qEUoD0Hp02zAXS%2Fc%2Bt8zAUTdg7mtvYwbJ3U&X-Amz-Signature=c9f0db948d321f5417d53ab6cc741b0182e37b9b657b82fbb597c1bb42b1f0ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466427V45JX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuqk%2FgyRa8YUC1lHpAUjEsKppZypgzi9pjGUekezezhgIgNSLffiXxfCE7iE%2FP1LbXOlCbDUz4VDBLNNol%2F6OX9hcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDNaxPbBU7XtzpEI6xCrcA%2FyFViWzdZf7%2FzABVkqhdo6RyYleHP2unHl%2FDEhd2BB03ZnsvowmfCpnq1xvZq5ojXGDYJmLVNqnoqV59LrO7YtSxGLwDiTsc11vb%2ByK2jiReFPJmAi7rxohsk%2F0BA72%2BdfOWz%2BLiyaEptILHN2lVspACfGhPCgMbQcfcgO05T2RxYnpWXihSZjGOBxYoqKxYFA6aN7HIzkcQYt7ZdU03foybhvnkP7DR%2BLEmnZqVrSfcp4JB8BwjF7JydauAeLg1mjfxL%2F%2FdRPNHdz2eIyZsz5C4v6%2FGXY05mkr0HCAmGbZvCC3om3Myh%2BwKtx%2Bl8WnwBHJv8FVmAQZ8Z5HOr4RM%2BcZkyiGtuMOO4t4vAzsW%2FIhZ5OghU%2FFarueYcUbqE2h48bzdmr%2F%2Fa6L0LOXuHHe3ODe6gSZ08pFWETv4DAcmEc96bqR348D0OKhIDrPT3QeZgqVDvfm0RGpcBUNjrbHB7aZfoCBPRyE2Up5QG1%2Fv2bcVXciUxjG%2FTWH7aubBPJj6QnzA74L%2FEoemy%2B8am%2Bipr%2FUI8KEaJMYpaak5H7zeWkRD4jn209qyQ0qYn7r8rsV28hdCezszc1wCy1gGBGgfIMeUBhfolgCUDHohE3G8PMBfnOu5eXEZsaH6uQcMK3R8MQGOqUBWkaAZxfjIsm1o7BKK11IRQIA6T8aYqR1iN5dvYpShxw%2Bpa7XOsL%2BVeIb41%2FzKfc%2F%2FZx0%2FeJDNJb1GOOlckcyPCDMi7xEoPX7m2bl40xu1WyCGpVWUsx2TmcxxcSeHLSfzqkDitYvgFHGvXS82%2F6SkHyD4c37P7hiaoW10yG2VZYGD%2B52AgzeZLV37qEUoD0Hp02zAXS%2Fc%2Bt8zAUTdg7mtvYwbJ3U&X-Amz-Signature=a446ec82988b6bc4152a0cd28243d30e0a1fa4a15a52fe2acf59d0bbe5cc0191&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466427V45JX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuqk%2FgyRa8YUC1lHpAUjEsKppZypgzi9pjGUekezezhgIgNSLffiXxfCE7iE%2FP1LbXOlCbDUz4VDBLNNol%2F6OX9hcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDNaxPbBU7XtzpEI6xCrcA%2FyFViWzdZf7%2FzABVkqhdo6RyYleHP2unHl%2FDEhd2BB03ZnsvowmfCpnq1xvZq5ojXGDYJmLVNqnoqV59LrO7YtSxGLwDiTsc11vb%2ByK2jiReFPJmAi7rxohsk%2F0BA72%2BdfOWz%2BLiyaEptILHN2lVspACfGhPCgMbQcfcgO05T2RxYnpWXihSZjGOBxYoqKxYFA6aN7HIzkcQYt7ZdU03foybhvnkP7DR%2BLEmnZqVrSfcp4JB8BwjF7JydauAeLg1mjfxL%2F%2FdRPNHdz2eIyZsz5C4v6%2FGXY05mkr0HCAmGbZvCC3om3Myh%2BwKtx%2Bl8WnwBHJv8FVmAQZ8Z5HOr4RM%2BcZkyiGtuMOO4t4vAzsW%2FIhZ5OghU%2FFarueYcUbqE2h48bzdmr%2F%2Fa6L0LOXuHHe3ODe6gSZ08pFWETv4DAcmEc96bqR348D0OKhIDrPT3QeZgqVDvfm0RGpcBUNjrbHB7aZfoCBPRyE2Up5QG1%2Fv2bcVXciUxjG%2FTWH7aubBPJj6QnzA74L%2FEoemy%2B8am%2Bipr%2FUI8KEaJMYpaak5H7zeWkRD4jn209qyQ0qYn7r8rsV28hdCezszc1wCy1gGBGgfIMeUBhfolgCUDHohE3G8PMBfnOu5eXEZsaH6uQcMK3R8MQGOqUBWkaAZxfjIsm1o7BKK11IRQIA6T8aYqR1iN5dvYpShxw%2Bpa7XOsL%2BVeIb41%2FzKfc%2F%2FZx0%2FeJDNJb1GOOlckcyPCDMi7xEoPX7m2bl40xu1WyCGpVWUsx2TmcxxcSeHLSfzqkDitYvgFHGvXS82%2F6SkHyD4c37P7hiaoW10yG2VZYGD%2B52AgzeZLV37qEUoD0Hp02zAXS%2Fc%2Bt8zAUTdg7mtvYwbJ3U&X-Amz-Signature=5e64240add2bcd832189f7af59465fcd40392f10b215358886581ae38e8e99e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466427V45JX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuqk%2FgyRa8YUC1lHpAUjEsKppZypgzi9pjGUekezezhgIgNSLffiXxfCE7iE%2FP1LbXOlCbDUz4VDBLNNol%2F6OX9hcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDNaxPbBU7XtzpEI6xCrcA%2FyFViWzdZf7%2FzABVkqhdo6RyYleHP2unHl%2FDEhd2BB03ZnsvowmfCpnq1xvZq5ojXGDYJmLVNqnoqV59LrO7YtSxGLwDiTsc11vb%2ByK2jiReFPJmAi7rxohsk%2F0BA72%2BdfOWz%2BLiyaEptILHN2lVspACfGhPCgMbQcfcgO05T2RxYnpWXihSZjGOBxYoqKxYFA6aN7HIzkcQYt7ZdU03foybhvnkP7DR%2BLEmnZqVrSfcp4JB8BwjF7JydauAeLg1mjfxL%2F%2FdRPNHdz2eIyZsz5C4v6%2FGXY05mkr0HCAmGbZvCC3om3Myh%2BwKtx%2Bl8WnwBHJv8FVmAQZ8Z5HOr4RM%2BcZkyiGtuMOO4t4vAzsW%2FIhZ5OghU%2FFarueYcUbqE2h48bzdmr%2F%2Fa6L0LOXuHHe3ODe6gSZ08pFWETv4DAcmEc96bqR348D0OKhIDrPT3QeZgqVDvfm0RGpcBUNjrbHB7aZfoCBPRyE2Up5QG1%2Fv2bcVXciUxjG%2FTWH7aubBPJj6QnzA74L%2FEoemy%2B8am%2Bipr%2FUI8KEaJMYpaak5H7zeWkRD4jn209qyQ0qYn7r8rsV28hdCezszc1wCy1gGBGgfIMeUBhfolgCUDHohE3G8PMBfnOu5eXEZsaH6uQcMK3R8MQGOqUBWkaAZxfjIsm1o7BKK11IRQIA6T8aYqR1iN5dvYpShxw%2Bpa7XOsL%2BVeIb41%2FzKfc%2F%2FZx0%2FeJDNJb1GOOlckcyPCDMi7xEoPX7m2bl40xu1WyCGpVWUsx2TmcxxcSeHLSfzqkDitYvgFHGvXS82%2F6SkHyD4c37P7hiaoW10yG2VZYGD%2B52AgzeZLV37qEUoD0Hp02zAXS%2Fc%2Bt8zAUTdg7mtvYwbJ3U&X-Amz-Signature=ec5d466c595a583ae733e5685ff7db8e774b4820b4cb5d09ccaaa4ea13f06841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466427V45JX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T061501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuqk%2FgyRa8YUC1lHpAUjEsKppZypgzi9pjGUekezezhgIgNSLffiXxfCE7iE%2FP1LbXOlCbDUz4VDBLNNol%2F6OX9hcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDNaxPbBU7XtzpEI6xCrcA%2FyFViWzdZf7%2FzABVkqhdo6RyYleHP2unHl%2FDEhd2BB03ZnsvowmfCpnq1xvZq5ojXGDYJmLVNqnoqV59LrO7YtSxGLwDiTsc11vb%2ByK2jiReFPJmAi7rxohsk%2F0BA72%2BdfOWz%2BLiyaEptILHN2lVspACfGhPCgMbQcfcgO05T2RxYnpWXihSZjGOBxYoqKxYFA6aN7HIzkcQYt7ZdU03foybhvnkP7DR%2BLEmnZqVrSfcp4JB8BwjF7JydauAeLg1mjfxL%2F%2FdRPNHdz2eIyZsz5C4v6%2FGXY05mkr0HCAmGbZvCC3om3Myh%2BwKtx%2Bl8WnwBHJv8FVmAQZ8Z5HOr4RM%2BcZkyiGtuMOO4t4vAzsW%2FIhZ5OghU%2FFarueYcUbqE2h48bzdmr%2F%2Fa6L0LOXuHHe3ODe6gSZ08pFWETv4DAcmEc96bqR348D0OKhIDrPT3QeZgqVDvfm0RGpcBUNjrbHB7aZfoCBPRyE2Up5QG1%2Fv2bcVXciUxjG%2FTWH7aubBPJj6QnzA74L%2FEoemy%2B8am%2Bipr%2FUI8KEaJMYpaak5H7zeWkRD4jn209qyQ0qYn7r8rsV28hdCezszc1wCy1gGBGgfIMeUBhfolgCUDHohE3G8PMBfnOu5eXEZsaH6uQcMK3R8MQGOqUBWkaAZxfjIsm1o7BKK11IRQIA6T8aYqR1iN5dvYpShxw%2Bpa7XOsL%2BVeIb41%2FzKfc%2F%2FZx0%2FeJDNJb1GOOlckcyPCDMi7xEoPX7m2bl40xu1WyCGpVWUsx2TmcxxcSeHLSfzqkDitYvgFHGvXS82%2F6SkHyD4c37P7hiaoW10yG2VZYGD%2B52AgzeZLV37qEUoD0Hp02zAXS%2Fc%2Bt8zAUTdg7mtvYwbJ3U&X-Amz-Signature=b400bed4bfb77fd7748795fde8a0ce37ba8aed78585a72bcdb94eb18b34df968&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
