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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDXI6OVW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQC0YQfvkThViKBMOOngEgtPDlL5G3qInIoo%2BuwF3W%2FS8QIgSrSNLGD0w2th9eoVRmJmhmv8WC0N4nIHZj%2FKP3KsFdgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtIi4v5%2Fg8OeCK4rircAzxIr0dEd3NUYOlfoAVW%2FETVQSwXUjIPip65FrFS0icynjvo%2FuXpw22m9iyRxNU%2BIthDfxIuuehVcOGu56xn8aj7F%2Byvjr6VkJBYW0I4dg%2FAXanJdg5hwC3w7vfN9adVQa3TtwK0keb%2Bi28MEHcuvLJry39bwUOCcUWOfn9lwLWoygjz0C%2FnoVUVJnfyTcKP0l3iO2PWvdbCnKEznOreYAVZp7f42uwiTosJkcYVdQkRYt8Gla3ML1x0k4NJl8AXralH9tnw0JDmu2cgmzdnb5ZRvpgpLMMKdiAuaTAM0HAuMTqBXak35H8K2T7WNAAmV8MJEN87woIOxYNPri5YL7fTK%2BPV3HVs6hN4OJOPgkkxbKbbv47c0%2FpsBrWWBbayRp98Io%2FqNmWIQLmv97NqmJS%2FfxRWQNIqT%2FMmKCuGyzFw2HnlvwdtzDyK4cwycsvo8kSXFFipPbnLwiGeFtVOSIIZa0dSN6n9zU5t3m%2FkcYAyLMZfhS8zcaFZ3K3yO1reQxihHAkiR67De%2F%2BoD9G1G52cf371FUUuPn4x5krXEOyVZy0kYI5P%2B8GpF0Mh528nLPsSmu%2Fkc8KUKtI3dEEsGacmr6jw3gDvItdc%2FqP%2BiW7FJzs3%2Ff7Beyj5vk%2B6MOTs0MQGOqUBDlUhKfH4hOLfqT5P50ZWJihQv8QwuJuw6O0dUZBY0%2FoQUhTpk%2F3jCFaKNzeJj%2FR0rSDNJKUs6QzDJure%2BT7DLcrb9IdBUvcd7Ldur0YUpSk5GzaOVtBwzUIgI0WB7C2KH6LP1h3BCUktfT32i3ptqnek34Bn30ohMkTKmhsVArEEPEhV02rEIFpwFbMdUVnm0zsX%2BcoUbfaFFPtDg7t6Ejr08XX5&X-Amz-Signature=be2311f940e377fa1481472957a23c7f7367ffa8fdf527e6796434c9b1e6bb7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDXI6OVW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQC0YQfvkThViKBMOOngEgtPDlL5G3qInIoo%2BuwF3W%2FS8QIgSrSNLGD0w2th9eoVRmJmhmv8WC0N4nIHZj%2FKP3KsFdgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtIi4v5%2Fg8OeCK4rircAzxIr0dEd3NUYOlfoAVW%2FETVQSwXUjIPip65FrFS0icynjvo%2FuXpw22m9iyRxNU%2BIthDfxIuuehVcOGu56xn8aj7F%2Byvjr6VkJBYW0I4dg%2FAXanJdg5hwC3w7vfN9adVQa3TtwK0keb%2Bi28MEHcuvLJry39bwUOCcUWOfn9lwLWoygjz0C%2FnoVUVJnfyTcKP0l3iO2PWvdbCnKEznOreYAVZp7f42uwiTosJkcYVdQkRYt8Gla3ML1x0k4NJl8AXralH9tnw0JDmu2cgmzdnb5ZRvpgpLMMKdiAuaTAM0HAuMTqBXak35H8K2T7WNAAmV8MJEN87woIOxYNPri5YL7fTK%2BPV3HVs6hN4OJOPgkkxbKbbv47c0%2FpsBrWWBbayRp98Io%2FqNmWIQLmv97NqmJS%2FfxRWQNIqT%2FMmKCuGyzFw2HnlvwdtzDyK4cwycsvo8kSXFFipPbnLwiGeFtVOSIIZa0dSN6n9zU5t3m%2FkcYAyLMZfhS8zcaFZ3K3yO1reQxihHAkiR67De%2F%2BoD9G1G52cf371FUUuPn4x5krXEOyVZy0kYI5P%2B8GpF0Mh528nLPsSmu%2Fkc8KUKtI3dEEsGacmr6jw3gDvItdc%2FqP%2BiW7FJzs3%2Ff7Beyj5vk%2B6MOTs0MQGOqUBDlUhKfH4hOLfqT5P50ZWJihQv8QwuJuw6O0dUZBY0%2FoQUhTpk%2F3jCFaKNzeJj%2FR0rSDNJKUs6QzDJure%2BT7DLcrb9IdBUvcd7Ldur0YUpSk5GzaOVtBwzUIgI0WB7C2KH6LP1h3BCUktfT32i3ptqnek34Bn30ohMkTKmhsVArEEPEhV02rEIFpwFbMdUVnm0zsX%2BcoUbfaFFPtDg7t6Ejr08XX5&X-Amz-Signature=e89e95c82d411919a39f1d362b3306c31eec1730aa3a6408e673cbabdf4ec8d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDXI6OVW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQC0YQfvkThViKBMOOngEgtPDlL5G3qInIoo%2BuwF3W%2FS8QIgSrSNLGD0w2th9eoVRmJmhmv8WC0N4nIHZj%2FKP3KsFdgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtIi4v5%2Fg8OeCK4rircAzxIr0dEd3NUYOlfoAVW%2FETVQSwXUjIPip65FrFS0icynjvo%2FuXpw22m9iyRxNU%2BIthDfxIuuehVcOGu56xn8aj7F%2Byvjr6VkJBYW0I4dg%2FAXanJdg5hwC3w7vfN9adVQa3TtwK0keb%2Bi28MEHcuvLJry39bwUOCcUWOfn9lwLWoygjz0C%2FnoVUVJnfyTcKP0l3iO2PWvdbCnKEznOreYAVZp7f42uwiTosJkcYVdQkRYt8Gla3ML1x0k4NJl8AXralH9tnw0JDmu2cgmzdnb5ZRvpgpLMMKdiAuaTAM0HAuMTqBXak35H8K2T7WNAAmV8MJEN87woIOxYNPri5YL7fTK%2BPV3HVs6hN4OJOPgkkxbKbbv47c0%2FpsBrWWBbayRp98Io%2FqNmWIQLmv97NqmJS%2FfxRWQNIqT%2FMmKCuGyzFw2HnlvwdtzDyK4cwycsvo8kSXFFipPbnLwiGeFtVOSIIZa0dSN6n9zU5t3m%2FkcYAyLMZfhS8zcaFZ3K3yO1reQxihHAkiR67De%2F%2BoD9G1G52cf371FUUuPn4x5krXEOyVZy0kYI5P%2B8GpF0Mh528nLPsSmu%2Fkc8KUKtI3dEEsGacmr6jw3gDvItdc%2FqP%2BiW7FJzs3%2Ff7Beyj5vk%2B6MOTs0MQGOqUBDlUhKfH4hOLfqT5P50ZWJihQv8QwuJuw6O0dUZBY0%2FoQUhTpk%2F3jCFaKNzeJj%2FR0rSDNJKUs6QzDJure%2BT7DLcrb9IdBUvcd7Ldur0YUpSk5GzaOVtBwzUIgI0WB7C2KH6LP1h3BCUktfT32i3ptqnek34Bn30ohMkTKmhsVArEEPEhV02rEIFpwFbMdUVnm0zsX%2BcoUbfaFFPtDg7t6Ejr08XX5&X-Amz-Signature=4626c0ef12d715b979eb2a1dce89852cb4a66ca0071818ef73aad3eba03ddc79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDXI6OVW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQC0YQfvkThViKBMOOngEgtPDlL5G3qInIoo%2BuwF3W%2FS8QIgSrSNLGD0w2th9eoVRmJmhmv8WC0N4nIHZj%2FKP3KsFdgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtIi4v5%2Fg8OeCK4rircAzxIr0dEd3NUYOlfoAVW%2FETVQSwXUjIPip65FrFS0icynjvo%2FuXpw22m9iyRxNU%2BIthDfxIuuehVcOGu56xn8aj7F%2Byvjr6VkJBYW0I4dg%2FAXanJdg5hwC3w7vfN9adVQa3TtwK0keb%2Bi28MEHcuvLJry39bwUOCcUWOfn9lwLWoygjz0C%2FnoVUVJnfyTcKP0l3iO2PWvdbCnKEznOreYAVZp7f42uwiTosJkcYVdQkRYt8Gla3ML1x0k4NJl8AXralH9tnw0JDmu2cgmzdnb5ZRvpgpLMMKdiAuaTAM0HAuMTqBXak35H8K2T7WNAAmV8MJEN87woIOxYNPri5YL7fTK%2BPV3HVs6hN4OJOPgkkxbKbbv47c0%2FpsBrWWBbayRp98Io%2FqNmWIQLmv97NqmJS%2FfxRWQNIqT%2FMmKCuGyzFw2HnlvwdtzDyK4cwycsvo8kSXFFipPbnLwiGeFtVOSIIZa0dSN6n9zU5t3m%2FkcYAyLMZfhS8zcaFZ3K3yO1reQxihHAkiR67De%2F%2BoD9G1G52cf371FUUuPn4x5krXEOyVZy0kYI5P%2B8GpF0Mh528nLPsSmu%2Fkc8KUKtI3dEEsGacmr6jw3gDvItdc%2FqP%2BiW7FJzs3%2Ff7Beyj5vk%2B6MOTs0MQGOqUBDlUhKfH4hOLfqT5P50ZWJihQv8QwuJuw6O0dUZBY0%2FoQUhTpk%2F3jCFaKNzeJj%2FR0rSDNJKUs6QzDJure%2BT7DLcrb9IdBUvcd7Ldur0YUpSk5GzaOVtBwzUIgI0WB7C2KH6LP1h3BCUktfT32i3ptqnek34Bn30ohMkTKmhsVArEEPEhV02rEIFpwFbMdUVnm0zsX%2BcoUbfaFFPtDg7t6Ejr08XX5&X-Amz-Signature=44743f196ff941b50fc4b8732124b6e9ec9a6c278eb79f5caa2d85d3a0f8d830&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDXI6OVW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQC0YQfvkThViKBMOOngEgtPDlL5G3qInIoo%2BuwF3W%2FS8QIgSrSNLGD0w2th9eoVRmJmhmv8WC0N4nIHZj%2FKP3KsFdgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtIi4v5%2Fg8OeCK4rircAzxIr0dEd3NUYOlfoAVW%2FETVQSwXUjIPip65FrFS0icynjvo%2FuXpw22m9iyRxNU%2BIthDfxIuuehVcOGu56xn8aj7F%2Byvjr6VkJBYW0I4dg%2FAXanJdg5hwC3w7vfN9adVQa3TtwK0keb%2Bi28MEHcuvLJry39bwUOCcUWOfn9lwLWoygjz0C%2FnoVUVJnfyTcKP0l3iO2PWvdbCnKEznOreYAVZp7f42uwiTosJkcYVdQkRYt8Gla3ML1x0k4NJl8AXralH9tnw0JDmu2cgmzdnb5ZRvpgpLMMKdiAuaTAM0HAuMTqBXak35H8K2T7WNAAmV8MJEN87woIOxYNPri5YL7fTK%2BPV3HVs6hN4OJOPgkkxbKbbv47c0%2FpsBrWWBbayRp98Io%2FqNmWIQLmv97NqmJS%2FfxRWQNIqT%2FMmKCuGyzFw2HnlvwdtzDyK4cwycsvo8kSXFFipPbnLwiGeFtVOSIIZa0dSN6n9zU5t3m%2FkcYAyLMZfhS8zcaFZ3K3yO1reQxihHAkiR67De%2F%2BoD9G1G52cf371FUUuPn4x5krXEOyVZy0kYI5P%2B8GpF0Mh528nLPsSmu%2Fkc8KUKtI3dEEsGacmr6jw3gDvItdc%2FqP%2BiW7FJzs3%2Ff7Beyj5vk%2B6MOTs0MQGOqUBDlUhKfH4hOLfqT5P50ZWJihQv8QwuJuw6O0dUZBY0%2FoQUhTpk%2F3jCFaKNzeJj%2FR0rSDNJKUs6QzDJure%2BT7DLcrb9IdBUvcd7Ldur0YUpSk5GzaOVtBwzUIgI0WB7C2KH6LP1h3BCUktfT32i3ptqnek34Bn30ohMkTKmhsVArEEPEhV02rEIFpwFbMdUVnm0zsX%2BcoUbfaFFPtDg7t6Ejr08XX5&X-Amz-Signature=372d479da87e20f250de42214346853639f07c982db51d896e6cf6c87ed6f9ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDXI6OVW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQC0YQfvkThViKBMOOngEgtPDlL5G3qInIoo%2BuwF3W%2FS8QIgSrSNLGD0w2th9eoVRmJmhmv8WC0N4nIHZj%2FKP3KsFdgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtIi4v5%2Fg8OeCK4rircAzxIr0dEd3NUYOlfoAVW%2FETVQSwXUjIPip65FrFS0icynjvo%2FuXpw22m9iyRxNU%2BIthDfxIuuehVcOGu56xn8aj7F%2Byvjr6VkJBYW0I4dg%2FAXanJdg5hwC3w7vfN9adVQa3TtwK0keb%2Bi28MEHcuvLJry39bwUOCcUWOfn9lwLWoygjz0C%2FnoVUVJnfyTcKP0l3iO2PWvdbCnKEznOreYAVZp7f42uwiTosJkcYVdQkRYt8Gla3ML1x0k4NJl8AXralH9tnw0JDmu2cgmzdnb5ZRvpgpLMMKdiAuaTAM0HAuMTqBXak35H8K2T7WNAAmV8MJEN87woIOxYNPri5YL7fTK%2BPV3HVs6hN4OJOPgkkxbKbbv47c0%2FpsBrWWBbayRp98Io%2FqNmWIQLmv97NqmJS%2FfxRWQNIqT%2FMmKCuGyzFw2HnlvwdtzDyK4cwycsvo8kSXFFipPbnLwiGeFtVOSIIZa0dSN6n9zU5t3m%2FkcYAyLMZfhS8zcaFZ3K3yO1reQxihHAkiR67De%2F%2BoD9G1G52cf371FUUuPn4x5krXEOyVZy0kYI5P%2B8GpF0Mh528nLPsSmu%2Fkc8KUKtI3dEEsGacmr6jw3gDvItdc%2FqP%2BiW7FJzs3%2Ff7Beyj5vk%2B6MOTs0MQGOqUBDlUhKfH4hOLfqT5P50ZWJihQv8QwuJuw6O0dUZBY0%2FoQUhTpk%2F3jCFaKNzeJj%2FR0rSDNJKUs6QzDJure%2BT7DLcrb9IdBUvcd7Ldur0YUpSk5GzaOVtBwzUIgI0WB7C2KH6LP1h3BCUktfT32i3ptqnek34Bn30ohMkTKmhsVArEEPEhV02rEIFpwFbMdUVnm0zsX%2BcoUbfaFFPtDg7t6Ejr08XX5&X-Amz-Signature=7021bbcc796c741b989f94ebec493e74dd5c1e897283895c7222483d5af1ff8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDXI6OVW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQC0YQfvkThViKBMOOngEgtPDlL5G3qInIoo%2BuwF3W%2FS8QIgSrSNLGD0w2th9eoVRmJmhmv8WC0N4nIHZj%2FKP3KsFdgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtIi4v5%2Fg8OeCK4rircAzxIr0dEd3NUYOlfoAVW%2FETVQSwXUjIPip65FrFS0icynjvo%2FuXpw22m9iyRxNU%2BIthDfxIuuehVcOGu56xn8aj7F%2Byvjr6VkJBYW0I4dg%2FAXanJdg5hwC3w7vfN9adVQa3TtwK0keb%2Bi28MEHcuvLJry39bwUOCcUWOfn9lwLWoygjz0C%2FnoVUVJnfyTcKP0l3iO2PWvdbCnKEznOreYAVZp7f42uwiTosJkcYVdQkRYt8Gla3ML1x0k4NJl8AXralH9tnw0JDmu2cgmzdnb5ZRvpgpLMMKdiAuaTAM0HAuMTqBXak35H8K2T7WNAAmV8MJEN87woIOxYNPri5YL7fTK%2BPV3HVs6hN4OJOPgkkxbKbbv47c0%2FpsBrWWBbayRp98Io%2FqNmWIQLmv97NqmJS%2FfxRWQNIqT%2FMmKCuGyzFw2HnlvwdtzDyK4cwycsvo8kSXFFipPbnLwiGeFtVOSIIZa0dSN6n9zU5t3m%2FkcYAyLMZfhS8zcaFZ3K3yO1reQxihHAkiR67De%2F%2BoD9G1G52cf371FUUuPn4x5krXEOyVZy0kYI5P%2B8GpF0Mh528nLPsSmu%2Fkc8KUKtI3dEEsGacmr6jw3gDvItdc%2FqP%2BiW7FJzs3%2Ff7Beyj5vk%2B6MOTs0MQGOqUBDlUhKfH4hOLfqT5P50ZWJihQv8QwuJuw6O0dUZBY0%2FoQUhTpk%2F3jCFaKNzeJj%2FR0rSDNJKUs6QzDJure%2BT7DLcrb9IdBUvcd7Ldur0YUpSk5GzaOVtBwzUIgI0WB7C2KH6LP1h3BCUktfT32i3ptqnek34Bn30ohMkTKmhsVArEEPEhV02rEIFpwFbMdUVnm0zsX%2BcoUbfaFFPtDg7t6Ejr08XX5&X-Amz-Signature=d8f8492b25f08079fd7e3fd0e6159fa2c3f5410891d8d7fbfac30dce9d3b5d8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDXI6OVW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQC0YQfvkThViKBMOOngEgtPDlL5G3qInIoo%2BuwF3W%2FS8QIgSrSNLGD0w2th9eoVRmJmhmv8WC0N4nIHZj%2FKP3KsFdgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtIi4v5%2Fg8OeCK4rircAzxIr0dEd3NUYOlfoAVW%2FETVQSwXUjIPip65FrFS0icynjvo%2FuXpw22m9iyRxNU%2BIthDfxIuuehVcOGu56xn8aj7F%2Byvjr6VkJBYW0I4dg%2FAXanJdg5hwC3w7vfN9adVQa3TtwK0keb%2Bi28MEHcuvLJry39bwUOCcUWOfn9lwLWoygjz0C%2FnoVUVJnfyTcKP0l3iO2PWvdbCnKEznOreYAVZp7f42uwiTosJkcYVdQkRYt8Gla3ML1x0k4NJl8AXralH9tnw0JDmu2cgmzdnb5ZRvpgpLMMKdiAuaTAM0HAuMTqBXak35H8K2T7WNAAmV8MJEN87woIOxYNPri5YL7fTK%2BPV3HVs6hN4OJOPgkkxbKbbv47c0%2FpsBrWWBbayRp98Io%2FqNmWIQLmv97NqmJS%2FfxRWQNIqT%2FMmKCuGyzFw2HnlvwdtzDyK4cwycsvo8kSXFFipPbnLwiGeFtVOSIIZa0dSN6n9zU5t3m%2FkcYAyLMZfhS8zcaFZ3K3yO1reQxihHAkiR67De%2F%2BoD9G1G52cf371FUUuPn4x5krXEOyVZy0kYI5P%2B8GpF0Mh528nLPsSmu%2Fkc8KUKtI3dEEsGacmr6jw3gDvItdc%2FqP%2BiW7FJzs3%2Ff7Beyj5vk%2B6MOTs0MQGOqUBDlUhKfH4hOLfqT5P50ZWJihQv8QwuJuw6O0dUZBY0%2FoQUhTpk%2F3jCFaKNzeJj%2FR0rSDNJKUs6QzDJure%2BT7DLcrb9IdBUvcd7Ldur0YUpSk5GzaOVtBwzUIgI0WB7C2KH6LP1h3BCUktfT32i3ptqnek34Bn30ohMkTKmhsVArEEPEhV02rEIFpwFbMdUVnm0zsX%2BcoUbfaFFPtDg7t6Ejr08XX5&X-Amz-Signature=1597d5d1184bc80f624dda9a457818dc5e3c12a42eeadd0fa73866a0651d6be4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDXI6OVW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQC0YQfvkThViKBMOOngEgtPDlL5G3qInIoo%2BuwF3W%2FS8QIgSrSNLGD0w2th9eoVRmJmhmv8WC0N4nIHZj%2FKP3KsFdgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtIi4v5%2Fg8OeCK4rircAzxIr0dEd3NUYOlfoAVW%2FETVQSwXUjIPip65FrFS0icynjvo%2FuXpw22m9iyRxNU%2BIthDfxIuuehVcOGu56xn8aj7F%2Byvjr6VkJBYW0I4dg%2FAXanJdg5hwC3w7vfN9adVQa3TtwK0keb%2Bi28MEHcuvLJry39bwUOCcUWOfn9lwLWoygjz0C%2FnoVUVJnfyTcKP0l3iO2PWvdbCnKEznOreYAVZp7f42uwiTosJkcYVdQkRYt8Gla3ML1x0k4NJl8AXralH9tnw0JDmu2cgmzdnb5ZRvpgpLMMKdiAuaTAM0HAuMTqBXak35H8K2T7WNAAmV8MJEN87woIOxYNPri5YL7fTK%2BPV3HVs6hN4OJOPgkkxbKbbv47c0%2FpsBrWWBbayRp98Io%2FqNmWIQLmv97NqmJS%2FfxRWQNIqT%2FMmKCuGyzFw2HnlvwdtzDyK4cwycsvo8kSXFFipPbnLwiGeFtVOSIIZa0dSN6n9zU5t3m%2FkcYAyLMZfhS8zcaFZ3K3yO1reQxihHAkiR67De%2F%2BoD9G1G52cf371FUUuPn4x5krXEOyVZy0kYI5P%2B8GpF0Mh528nLPsSmu%2Fkc8KUKtI3dEEsGacmr6jw3gDvItdc%2FqP%2BiW7FJzs3%2Ff7Beyj5vk%2B6MOTs0MQGOqUBDlUhKfH4hOLfqT5P50ZWJihQv8QwuJuw6O0dUZBY0%2FoQUhTpk%2F3jCFaKNzeJj%2FR0rSDNJKUs6QzDJure%2BT7DLcrb9IdBUvcd7Ldur0YUpSk5GzaOVtBwzUIgI0WB7C2KH6LP1h3BCUktfT32i3ptqnek34Bn30ohMkTKmhsVArEEPEhV02rEIFpwFbMdUVnm0zsX%2BcoUbfaFFPtDg7t6Ejr08XX5&X-Amz-Signature=5e662b87ebf999680352c0138220f8e81e833455938297b936aca604ad5333af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDXI6OVW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQC0YQfvkThViKBMOOngEgtPDlL5G3qInIoo%2BuwF3W%2FS8QIgSrSNLGD0w2th9eoVRmJmhmv8WC0N4nIHZj%2FKP3KsFdgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtIi4v5%2Fg8OeCK4rircAzxIr0dEd3NUYOlfoAVW%2FETVQSwXUjIPip65FrFS0icynjvo%2FuXpw22m9iyRxNU%2BIthDfxIuuehVcOGu56xn8aj7F%2Byvjr6VkJBYW0I4dg%2FAXanJdg5hwC3w7vfN9adVQa3TtwK0keb%2Bi28MEHcuvLJry39bwUOCcUWOfn9lwLWoygjz0C%2FnoVUVJnfyTcKP0l3iO2PWvdbCnKEznOreYAVZp7f42uwiTosJkcYVdQkRYt8Gla3ML1x0k4NJl8AXralH9tnw0JDmu2cgmzdnb5ZRvpgpLMMKdiAuaTAM0HAuMTqBXak35H8K2T7WNAAmV8MJEN87woIOxYNPri5YL7fTK%2BPV3HVs6hN4OJOPgkkxbKbbv47c0%2FpsBrWWBbayRp98Io%2FqNmWIQLmv97NqmJS%2FfxRWQNIqT%2FMmKCuGyzFw2HnlvwdtzDyK4cwycsvo8kSXFFipPbnLwiGeFtVOSIIZa0dSN6n9zU5t3m%2FkcYAyLMZfhS8zcaFZ3K3yO1reQxihHAkiR67De%2F%2BoD9G1G52cf371FUUuPn4x5krXEOyVZy0kYI5P%2B8GpF0Mh528nLPsSmu%2Fkc8KUKtI3dEEsGacmr6jw3gDvItdc%2FqP%2BiW7FJzs3%2Ff7Beyj5vk%2B6MOTs0MQGOqUBDlUhKfH4hOLfqT5P50ZWJihQv8QwuJuw6O0dUZBY0%2FoQUhTpk%2F3jCFaKNzeJj%2FR0rSDNJKUs6QzDJure%2BT7DLcrb9IdBUvcd7Ldur0YUpSk5GzaOVtBwzUIgI0WB7C2KH6LP1h3BCUktfT32i3ptqnek34Bn30ohMkTKmhsVArEEPEhV02rEIFpwFbMdUVnm0zsX%2BcoUbfaFFPtDg7t6Ejr08XX5&X-Amz-Signature=ca3d064d24d0a2d01a8e09c4a32c219fcaaf5f5bcc4290e10c089503d00c2eb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDXI6OVW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQC0YQfvkThViKBMOOngEgtPDlL5G3qInIoo%2BuwF3W%2FS8QIgSrSNLGD0w2th9eoVRmJmhmv8WC0N4nIHZj%2FKP3KsFdgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtIi4v5%2Fg8OeCK4rircAzxIr0dEd3NUYOlfoAVW%2FETVQSwXUjIPip65FrFS0icynjvo%2FuXpw22m9iyRxNU%2BIthDfxIuuehVcOGu56xn8aj7F%2Byvjr6VkJBYW0I4dg%2FAXanJdg5hwC3w7vfN9adVQa3TtwK0keb%2Bi28MEHcuvLJry39bwUOCcUWOfn9lwLWoygjz0C%2FnoVUVJnfyTcKP0l3iO2PWvdbCnKEznOreYAVZp7f42uwiTosJkcYVdQkRYt8Gla3ML1x0k4NJl8AXralH9tnw0JDmu2cgmzdnb5ZRvpgpLMMKdiAuaTAM0HAuMTqBXak35H8K2T7WNAAmV8MJEN87woIOxYNPri5YL7fTK%2BPV3HVs6hN4OJOPgkkxbKbbv47c0%2FpsBrWWBbayRp98Io%2FqNmWIQLmv97NqmJS%2FfxRWQNIqT%2FMmKCuGyzFw2HnlvwdtzDyK4cwycsvo8kSXFFipPbnLwiGeFtVOSIIZa0dSN6n9zU5t3m%2FkcYAyLMZfhS8zcaFZ3K3yO1reQxihHAkiR67De%2F%2BoD9G1G52cf371FUUuPn4x5krXEOyVZy0kYI5P%2B8GpF0Mh528nLPsSmu%2Fkc8KUKtI3dEEsGacmr6jw3gDvItdc%2FqP%2BiW7FJzs3%2Ff7Beyj5vk%2B6MOTs0MQGOqUBDlUhKfH4hOLfqT5P50ZWJihQv8QwuJuw6O0dUZBY0%2FoQUhTpk%2F3jCFaKNzeJj%2FR0rSDNJKUs6QzDJure%2BT7DLcrb9IdBUvcd7Ldur0YUpSk5GzaOVtBwzUIgI0WB7C2KH6LP1h3BCUktfT32i3ptqnek34Bn30ohMkTKmhsVArEEPEhV02rEIFpwFbMdUVnm0zsX%2BcoUbfaFFPtDg7t6Ejr08XX5&X-Amz-Signature=85c233f65bafda183e652b100110af0ae974f6457f0b4a35a30e1717b7c488c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDXI6OVW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQC0YQfvkThViKBMOOngEgtPDlL5G3qInIoo%2BuwF3W%2FS8QIgSrSNLGD0w2th9eoVRmJmhmv8WC0N4nIHZj%2FKP3KsFdgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtIi4v5%2Fg8OeCK4rircAzxIr0dEd3NUYOlfoAVW%2FETVQSwXUjIPip65FrFS0icynjvo%2FuXpw22m9iyRxNU%2BIthDfxIuuehVcOGu56xn8aj7F%2Byvjr6VkJBYW0I4dg%2FAXanJdg5hwC3w7vfN9adVQa3TtwK0keb%2Bi28MEHcuvLJry39bwUOCcUWOfn9lwLWoygjz0C%2FnoVUVJnfyTcKP0l3iO2PWvdbCnKEznOreYAVZp7f42uwiTosJkcYVdQkRYt8Gla3ML1x0k4NJl8AXralH9tnw0JDmu2cgmzdnb5ZRvpgpLMMKdiAuaTAM0HAuMTqBXak35H8K2T7WNAAmV8MJEN87woIOxYNPri5YL7fTK%2BPV3HVs6hN4OJOPgkkxbKbbv47c0%2FpsBrWWBbayRp98Io%2FqNmWIQLmv97NqmJS%2FfxRWQNIqT%2FMmKCuGyzFw2HnlvwdtzDyK4cwycsvo8kSXFFipPbnLwiGeFtVOSIIZa0dSN6n9zU5t3m%2FkcYAyLMZfhS8zcaFZ3K3yO1reQxihHAkiR67De%2F%2BoD9G1G52cf371FUUuPn4x5krXEOyVZy0kYI5P%2B8GpF0Mh528nLPsSmu%2Fkc8KUKtI3dEEsGacmr6jw3gDvItdc%2FqP%2BiW7FJzs3%2Ff7Beyj5vk%2B6MOTs0MQGOqUBDlUhKfH4hOLfqT5P50ZWJihQv8QwuJuw6O0dUZBY0%2FoQUhTpk%2F3jCFaKNzeJj%2FR0rSDNJKUs6QzDJure%2BT7DLcrb9IdBUvcd7Ldur0YUpSk5GzaOVtBwzUIgI0WB7C2KH6LP1h3BCUktfT32i3ptqnek34Bn30ohMkTKmhsVArEEPEhV02rEIFpwFbMdUVnm0zsX%2BcoUbfaFFPtDg7t6Ejr08XX5&X-Amz-Signature=772b99eb0339c447aab156ce28004f758d494212f0e79bfdd532633d77ac520f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDXI6OVW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQC0YQfvkThViKBMOOngEgtPDlL5G3qInIoo%2BuwF3W%2FS8QIgSrSNLGD0w2th9eoVRmJmhmv8WC0N4nIHZj%2FKP3KsFdgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtIi4v5%2Fg8OeCK4rircAzxIr0dEd3NUYOlfoAVW%2FETVQSwXUjIPip65FrFS0icynjvo%2FuXpw22m9iyRxNU%2BIthDfxIuuehVcOGu56xn8aj7F%2Byvjr6VkJBYW0I4dg%2FAXanJdg5hwC3w7vfN9adVQa3TtwK0keb%2Bi28MEHcuvLJry39bwUOCcUWOfn9lwLWoygjz0C%2FnoVUVJnfyTcKP0l3iO2PWvdbCnKEznOreYAVZp7f42uwiTosJkcYVdQkRYt8Gla3ML1x0k4NJl8AXralH9tnw0JDmu2cgmzdnb5ZRvpgpLMMKdiAuaTAM0HAuMTqBXak35H8K2T7WNAAmV8MJEN87woIOxYNPri5YL7fTK%2BPV3HVs6hN4OJOPgkkxbKbbv47c0%2FpsBrWWBbayRp98Io%2FqNmWIQLmv97NqmJS%2FfxRWQNIqT%2FMmKCuGyzFw2HnlvwdtzDyK4cwycsvo8kSXFFipPbnLwiGeFtVOSIIZa0dSN6n9zU5t3m%2FkcYAyLMZfhS8zcaFZ3K3yO1reQxihHAkiR67De%2F%2BoD9G1G52cf371FUUuPn4x5krXEOyVZy0kYI5P%2B8GpF0Mh528nLPsSmu%2Fkc8KUKtI3dEEsGacmr6jw3gDvItdc%2FqP%2BiW7FJzs3%2Ff7Beyj5vk%2B6MOTs0MQGOqUBDlUhKfH4hOLfqT5P50ZWJihQv8QwuJuw6O0dUZBY0%2FoQUhTpk%2F3jCFaKNzeJj%2FR0rSDNJKUs6QzDJure%2BT7DLcrb9IdBUvcd7Ldur0YUpSk5GzaOVtBwzUIgI0WB7C2KH6LP1h3BCUktfT32i3ptqnek34Bn30ohMkTKmhsVArEEPEhV02rEIFpwFbMdUVnm0zsX%2BcoUbfaFFPtDg7t6Ejr08XX5&X-Amz-Signature=84dc61523c96b6b67d9947798bebd76fa3d1986e7135b4f238ccae44755816cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDXI6OVW%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T052032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQC0YQfvkThViKBMOOngEgtPDlL5G3qInIoo%2BuwF3W%2FS8QIgSrSNLGD0w2th9eoVRmJmhmv8WC0N4nIHZj%2FKP3KsFdgqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMtIi4v5%2Fg8OeCK4rircAzxIr0dEd3NUYOlfoAVW%2FETVQSwXUjIPip65FrFS0icynjvo%2FuXpw22m9iyRxNU%2BIthDfxIuuehVcOGu56xn8aj7F%2Byvjr6VkJBYW0I4dg%2FAXanJdg5hwC3w7vfN9adVQa3TtwK0keb%2Bi28MEHcuvLJry39bwUOCcUWOfn9lwLWoygjz0C%2FnoVUVJnfyTcKP0l3iO2PWvdbCnKEznOreYAVZp7f42uwiTosJkcYVdQkRYt8Gla3ML1x0k4NJl8AXralH9tnw0JDmu2cgmzdnb5ZRvpgpLMMKdiAuaTAM0HAuMTqBXak35H8K2T7WNAAmV8MJEN87woIOxYNPri5YL7fTK%2BPV3HVs6hN4OJOPgkkxbKbbv47c0%2FpsBrWWBbayRp98Io%2FqNmWIQLmv97NqmJS%2FfxRWQNIqT%2FMmKCuGyzFw2HnlvwdtzDyK4cwycsvo8kSXFFipPbnLwiGeFtVOSIIZa0dSN6n9zU5t3m%2FkcYAyLMZfhS8zcaFZ3K3yO1reQxihHAkiR67De%2F%2BoD9G1G52cf371FUUuPn4x5krXEOyVZy0kYI5P%2B8GpF0Mh528nLPsSmu%2Fkc8KUKtI3dEEsGacmr6jw3gDvItdc%2FqP%2BiW7FJzs3%2Ff7Beyj5vk%2B6MOTs0MQGOqUBDlUhKfH4hOLfqT5P50ZWJihQv8QwuJuw6O0dUZBY0%2FoQUhTpk%2F3jCFaKNzeJj%2FR0rSDNJKUs6QzDJure%2BT7DLcrb9IdBUvcd7Ldur0YUpSk5GzaOVtBwzUIgI0WB7C2KH6LP1h3BCUktfT32i3ptqnek34Bn30ohMkTKmhsVArEEPEhV02rEIFpwFbMdUVnm0zsX%2BcoUbfaFFPtDg7t6Ejr08XX5&X-Amz-Signature=8fbf2ff697ac1f56c314cf3287d744a565e3e157b5ab6e37dd1ae350efab4653&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
