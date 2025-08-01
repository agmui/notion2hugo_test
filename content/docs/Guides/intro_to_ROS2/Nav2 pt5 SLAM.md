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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSYTRQXO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICvX9xX7rBDFQAg5rj0or2YA5b%2F45MxBKo7oFBXBt%2FlKAiEAoU%2Fyl%2BmMPpkWSfFZln%2BX1IREEpzKeG8rXcTLEZJVtaoq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDCNVgGRiGAAHliPuLyrcA1UE6aJtl8YfoGxEU0P0m0f41wpkctxfGmK1LhkYmgI7naPGR8tl4Pt94%2F1Ja%2FdqWZBFy3%2BxN2%2BfJmfpSfBJUKPGbga2CT%2FidnCzsJzJ9s72oTm1WDZzTygm7KMZxHzc%2Fllwb2%2FnDmkRzNI8pLvy9N6D%2FzblxhEXn3ubB45z%2B9GuhwPf76ufp%2FMUUzSHBkLiX0RKNvY2YYop0BnNUsY5tQmvrmKusc8AjVe6HgNdAyGpgcc2WqOzNhAeIWOJx3cxocznCug8JR1hrYbsK22vcr3OcBIG%2FhBMS71wiDydQjrE%2FnfWGkJsedq5NDgM8kOFCT1eskAaH2sT2d0y4sxE8KN2q4uplr9jcsgJ7mvzjH3fo5J7Ii3u%2F4SiQtFp1Tu5GFDip62HY1KO4zdOoNMQ4xsQG4Mh%2FX%2BAANxo9BnP%2F%2Bzj9oyFS2ZCBnNKiMLFl14OU5qGrRZagB3UsYCE3meyacB1P%2FT%2FonLDNhWy3AXNnw5sgrVDJrxydY8zWbLsjJBaTqJy5HT13EGbymwqO45rEACd7qbn215jLBv0hhTT3Bi2sq2ixgviMPE%2FE7ovw7n5k0LenJq6JFY85Fr7xzD2hQMOaVrf1UtIes%2BcuVPlf3%2Bau5d5AXe2EFKO%2Bba9MOaducQGOqUBDpv9KPzwKkINSPP0ALC%2FCs9DPiA2SNMcMJMBbdH8C5Bfo8N8sPSvfg9FEtjOnH8vtq3uHfzXLcZRPZ%2BpJzyO%2B24cIQp%2FlG4%2F2%2FxAjmrV19CFDwQlQEBRU4TkD7H7KY3quN5o5%2BfEbZURfniSe0jqRW4JKSY0oGaxwssbeXBtqNWQPGZiRCsMUjhdzhhMKiLHC7HjylBBVQ0ULNapRC0PQzBz1Irk&X-Amz-Signature=951033b479149ae71299e35c1ef22316cac311ad62ceeecb79321c1d579a82fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSYTRQXO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICvX9xX7rBDFQAg5rj0or2YA5b%2F45MxBKo7oFBXBt%2FlKAiEAoU%2Fyl%2BmMPpkWSfFZln%2BX1IREEpzKeG8rXcTLEZJVtaoq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDCNVgGRiGAAHliPuLyrcA1UE6aJtl8YfoGxEU0P0m0f41wpkctxfGmK1LhkYmgI7naPGR8tl4Pt94%2F1Ja%2FdqWZBFy3%2BxN2%2BfJmfpSfBJUKPGbga2CT%2FidnCzsJzJ9s72oTm1WDZzTygm7KMZxHzc%2Fllwb2%2FnDmkRzNI8pLvy9N6D%2FzblxhEXn3ubB45z%2B9GuhwPf76ufp%2FMUUzSHBkLiX0RKNvY2YYop0BnNUsY5tQmvrmKusc8AjVe6HgNdAyGpgcc2WqOzNhAeIWOJx3cxocznCug8JR1hrYbsK22vcr3OcBIG%2FhBMS71wiDydQjrE%2FnfWGkJsedq5NDgM8kOFCT1eskAaH2sT2d0y4sxE8KN2q4uplr9jcsgJ7mvzjH3fo5J7Ii3u%2F4SiQtFp1Tu5GFDip62HY1KO4zdOoNMQ4xsQG4Mh%2FX%2BAANxo9BnP%2F%2Bzj9oyFS2ZCBnNKiMLFl14OU5qGrRZagB3UsYCE3meyacB1P%2FT%2FonLDNhWy3AXNnw5sgrVDJrxydY8zWbLsjJBaTqJy5HT13EGbymwqO45rEACd7qbn215jLBv0hhTT3Bi2sq2ixgviMPE%2FE7ovw7n5k0LenJq6JFY85Fr7xzD2hQMOaVrf1UtIes%2BcuVPlf3%2Bau5d5AXe2EFKO%2Bba9MOaducQGOqUBDpv9KPzwKkINSPP0ALC%2FCs9DPiA2SNMcMJMBbdH8C5Bfo8N8sPSvfg9FEtjOnH8vtq3uHfzXLcZRPZ%2BpJzyO%2B24cIQp%2FlG4%2F2%2FxAjmrV19CFDwQlQEBRU4TkD7H7KY3quN5o5%2BfEbZURfniSe0jqRW4JKSY0oGaxwssbeXBtqNWQPGZiRCsMUjhdzhhMKiLHC7HjylBBVQ0ULNapRC0PQzBz1Irk&X-Amz-Signature=4071476e2a7bb0614f5048e1492d80bfde1d767e71a52f0009a9d2a6a4b40180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSYTRQXO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICvX9xX7rBDFQAg5rj0or2YA5b%2F45MxBKo7oFBXBt%2FlKAiEAoU%2Fyl%2BmMPpkWSfFZln%2BX1IREEpzKeG8rXcTLEZJVtaoq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDCNVgGRiGAAHliPuLyrcA1UE6aJtl8YfoGxEU0P0m0f41wpkctxfGmK1LhkYmgI7naPGR8tl4Pt94%2F1Ja%2FdqWZBFy3%2BxN2%2BfJmfpSfBJUKPGbga2CT%2FidnCzsJzJ9s72oTm1WDZzTygm7KMZxHzc%2Fllwb2%2FnDmkRzNI8pLvy9N6D%2FzblxhEXn3ubB45z%2B9GuhwPf76ufp%2FMUUzSHBkLiX0RKNvY2YYop0BnNUsY5tQmvrmKusc8AjVe6HgNdAyGpgcc2WqOzNhAeIWOJx3cxocznCug8JR1hrYbsK22vcr3OcBIG%2FhBMS71wiDydQjrE%2FnfWGkJsedq5NDgM8kOFCT1eskAaH2sT2d0y4sxE8KN2q4uplr9jcsgJ7mvzjH3fo5J7Ii3u%2F4SiQtFp1Tu5GFDip62HY1KO4zdOoNMQ4xsQG4Mh%2FX%2BAANxo9BnP%2F%2Bzj9oyFS2ZCBnNKiMLFl14OU5qGrRZagB3UsYCE3meyacB1P%2FT%2FonLDNhWy3AXNnw5sgrVDJrxydY8zWbLsjJBaTqJy5HT13EGbymwqO45rEACd7qbn215jLBv0hhTT3Bi2sq2ixgviMPE%2FE7ovw7n5k0LenJq6JFY85Fr7xzD2hQMOaVrf1UtIes%2BcuVPlf3%2Bau5d5AXe2EFKO%2Bba9MOaducQGOqUBDpv9KPzwKkINSPP0ALC%2FCs9DPiA2SNMcMJMBbdH8C5Bfo8N8sPSvfg9FEtjOnH8vtq3uHfzXLcZRPZ%2BpJzyO%2B24cIQp%2FlG4%2F2%2FxAjmrV19CFDwQlQEBRU4TkD7H7KY3quN5o5%2BfEbZURfniSe0jqRW4JKSY0oGaxwssbeXBtqNWQPGZiRCsMUjhdzhhMKiLHC7HjylBBVQ0ULNapRC0PQzBz1Irk&X-Amz-Signature=02381df2cb57c731063c49f6cbb1db56dc54469760bce90ba39a1a23b86a7384&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSYTRQXO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICvX9xX7rBDFQAg5rj0or2YA5b%2F45MxBKo7oFBXBt%2FlKAiEAoU%2Fyl%2BmMPpkWSfFZln%2BX1IREEpzKeG8rXcTLEZJVtaoq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDCNVgGRiGAAHliPuLyrcA1UE6aJtl8YfoGxEU0P0m0f41wpkctxfGmK1LhkYmgI7naPGR8tl4Pt94%2F1Ja%2FdqWZBFy3%2BxN2%2BfJmfpSfBJUKPGbga2CT%2FidnCzsJzJ9s72oTm1WDZzTygm7KMZxHzc%2Fllwb2%2FnDmkRzNI8pLvy9N6D%2FzblxhEXn3ubB45z%2B9GuhwPf76ufp%2FMUUzSHBkLiX0RKNvY2YYop0BnNUsY5tQmvrmKusc8AjVe6HgNdAyGpgcc2WqOzNhAeIWOJx3cxocznCug8JR1hrYbsK22vcr3OcBIG%2FhBMS71wiDydQjrE%2FnfWGkJsedq5NDgM8kOFCT1eskAaH2sT2d0y4sxE8KN2q4uplr9jcsgJ7mvzjH3fo5J7Ii3u%2F4SiQtFp1Tu5GFDip62HY1KO4zdOoNMQ4xsQG4Mh%2FX%2BAANxo9BnP%2F%2Bzj9oyFS2ZCBnNKiMLFl14OU5qGrRZagB3UsYCE3meyacB1P%2FT%2FonLDNhWy3AXNnw5sgrVDJrxydY8zWbLsjJBaTqJy5HT13EGbymwqO45rEACd7qbn215jLBv0hhTT3Bi2sq2ixgviMPE%2FE7ovw7n5k0LenJq6JFY85Fr7xzD2hQMOaVrf1UtIes%2BcuVPlf3%2Bau5d5AXe2EFKO%2Bba9MOaducQGOqUBDpv9KPzwKkINSPP0ALC%2FCs9DPiA2SNMcMJMBbdH8C5Bfo8N8sPSvfg9FEtjOnH8vtq3uHfzXLcZRPZ%2BpJzyO%2B24cIQp%2FlG4%2F2%2FxAjmrV19CFDwQlQEBRU4TkD7H7KY3quN5o5%2BfEbZURfniSe0jqRW4JKSY0oGaxwssbeXBtqNWQPGZiRCsMUjhdzhhMKiLHC7HjylBBVQ0ULNapRC0PQzBz1Irk&X-Amz-Signature=9831f83af71d8c8e937455a87c39f19f44ee865ed15c642164a032250c118e18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSYTRQXO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICvX9xX7rBDFQAg5rj0or2YA5b%2F45MxBKo7oFBXBt%2FlKAiEAoU%2Fyl%2BmMPpkWSfFZln%2BX1IREEpzKeG8rXcTLEZJVtaoq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDCNVgGRiGAAHliPuLyrcA1UE6aJtl8YfoGxEU0P0m0f41wpkctxfGmK1LhkYmgI7naPGR8tl4Pt94%2F1Ja%2FdqWZBFy3%2BxN2%2BfJmfpSfBJUKPGbga2CT%2FidnCzsJzJ9s72oTm1WDZzTygm7KMZxHzc%2Fllwb2%2FnDmkRzNI8pLvy9N6D%2FzblxhEXn3ubB45z%2B9GuhwPf76ufp%2FMUUzSHBkLiX0RKNvY2YYop0BnNUsY5tQmvrmKusc8AjVe6HgNdAyGpgcc2WqOzNhAeIWOJx3cxocznCug8JR1hrYbsK22vcr3OcBIG%2FhBMS71wiDydQjrE%2FnfWGkJsedq5NDgM8kOFCT1eskAaH2sT2d0y4sxE8KN2q4uplr9jcsgJ7mvzjH3fo5J7Ii3u%2F4SiQtFp1Tu5GFDip62HY1KO4zdOoNMQ4xsQG4Mh%2FX%2BAANxo9BnP%2F%2Bzj9oyFS2ZCBnNKiMLFl14OU5qGrRZagB3UsYCE3meyacB1P%2FT%2FonLDNhWy3AXNnw5sgrVDJrxydY8zWbLsjJBaTqJy5HT13EGbymwqO45rEACd7qbn215jLBv0hhTT3Bi2sq2ixgviMPE%2FE7ovw7n5k0LenJq6JFY85Fr7xzD2hQMOaVrf1UtIes%2BcuVPlf3%2Bau5d5AXe2EFKO%2Bba9MOaducQGOqUBDpv9KPzwKkINSPP0ALC%2FCs9DPiA2SNMcMJMBbdH8C5Bfo8N8sPSvfg9FEtjOnH8vtq3uHfzXLcZRPZ%2BpJzyO%2B24cIQp%2FlG4%2F2%2FxAjmrV19CFDwQlQEBRU4TkD7H7KY3quN5o5%2BfEbZURfniSe0jqRW4JKSY0oGaxwssbeXBtqNWQPGZiRCsMUjhdzhhMKiLHC7HjylBBVQ0ULNapRC0PQzBz1Irk&X-Amz-Signature=9b4fa32a26b6aca7ffa14ed1037487abd5d59acce9abbd5426e6a0a055e06e5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSYTRQXO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICvX9xX7rBDFQAg5rj0or2YA5b%2F45MxBKo7oFBXBt%2FlKAiEAoU%2Fyl%2BmMPpkWSfFZln%2BX1IREEpzKeG8rXcTLEZJVtaoq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDCNVgGRiGAAHliPuLyrcA1UE6aJtl8YfoGxEU0P0m0f41wpkctxfGmK1LhkYmgI7naPGR8tl4Pt94%2F1Ja%2FdqWZBFy3%2BxN2%2BfJmfpSfBJUKPGbga2CT%2FidnCzsJzJ9s72oTm1WDZzTygm7KMZxHzc%2Fllwb2%2FnDmkRzNI8pLvy9N6D%2FzblxhEXn3ubB45z%2B9GuhwPf76ufp%2FMUUzSHBkLiX0RKNvY2YYop0BnNUsY5tQmvrmKusc8AjVe6HgNdAyGpgcc2WqOzNhAeIWOJx3cxocznCug8JR1hrYbsK22vcr3OcBIG%2FhBMS71wiDydQjrE%2FnfWGkJsedq5NDgM8kOFCT1eskAaH2sT2d0y4sxE8KN2q4uplr9jcsgJ7mvzjH3fo5J7Ii3u%2F4SiQtFp1Tu5GFDip62HY1KO4zdOoNMQ4xsQG4Mh%2FX%2BAANxo9BnP%2F%2Bzj9oyFS2ZCBnNKiMLFl14OU5qGrRZagB3UsYCE3meyacB1P%2FT%2FonLDNhWy3AXNnw5sgrVDJrxydY8zWbLsjJBaTqJy5HT13EGbymwqO45rEACd7qbn215jLBv0hhTT3Bi2sq2ixgviMPE%2FE7ovw7n5k0LenJq6JFY85Fr7xzD2hQMOaVrf1UtIes%2BcuVPlf3%2Bau5d5AXe2EFKO%2Bba9MOaducQGOqUBDpv9KPzwKkINSPP0ALC%2FCs9DPiA2SNMcMJMBbdH8C5Bfo8N8sPSvfg9FEtjOnH8vtq3uHfzXLcZRPZ%2BpJzyO%2B24cIQp%2FlG4%2F2%2FxAjmrV19CFDwQlQEBRU4TkD7H7KY3quN5o5%2BfEbZURfniSe0jqRW4JKSY0oGaxwssbeXBtqNWQPGZiRCsMUjhdzhhMKiLHC7HjylBBVQ0ULNapRC0PQzBz1Irk&X-Amz-Signature=34d30bc20f61625bdf3c51c6f1cb69065bded739baa4d1cd49dc4aecb0294a9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSYTRQXO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICvX9xX7rBDFQAg5rj0or2YA5b%2F45MxBKo7oFBXBt%2FlKAiEAoU%2Fyl%2BmMPpkWSfFZln%2BX1IREEpzKeG8rXcTLEZJVtaoq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDCNVgGRiGAAHliPuLyrcA1UE6aJtl8YfoGxEU0P0m0f41wpkctxfGmK1LhkYmgI7naPGR8tl4Pt94%2F1Ja%2FdqWZBFy3%2BxN2%2BfJmfpSfBJUKPGbga2CT%2FidnCzsJzJ9s72oTm1WDZzTygm7KMZxHzc%2Fllwb2%2FnDmkRzNI8pLvy9N6D%2FzblxhEXn3ubB45z%2B9GuhwPf76ufp%2FMUUzSHBkLiX0RKNvY2YYop0BnNUsY5tQmvrmKusc8AjVe6HgNdAyGpgcc2WqOzNhAeIWOJx3cxocznCug8JR1hrYbsK22vcr3OcBIG%2FhBMS71wiDydQjrE%2FnfWGkJsedq5NDgM8kOFCT1eskAaH2sT2d0y4sxE8KN2q4uplr9jcsgJ7mvzjH3fo5J7Ii3u%2F4SiQtFp1Tu5GFDip62HY1KO4zdOoNMQ4xsQG4Mh%2FX%2BAANxo9BnP%2F%2Bzj9oyFS2ZCBnNKiMLFl14OU5qGrRZagB3UsYCE3meyacB1P%2FT%2FonLDNhWy3AXNnw5sgrVDJrxydY8zWbLsjJBaTqJy5HT13EGbymwqO45rEACd7qbn215jLBv0hhTT3Bi2sq2ixgviMPE%2FE7ovw7n5k0LenJq6JFY85Fr7xzD2hQMOaVrf1UtIes%2BcuVPlf3%2Bau5d5AXe2EFKO%2Bba9MOaducQGOqUBDpv9KPzwKkINSPP0ALC%2FCs9DPiA2SNMcMJMBbdH8C5Bfo8N8sPSvfg9FEtjOnH8vtq3uHfzXLcZRPZ%2BpJzyO%2B24cIQp%2FlG4%2F2%2FxAjmrV19CFDwQlQEBRU4TkD7H7KY3quN5o5%2BfEbZURfniSe0jqRW4JKSY0oGaxwssbeXBtqNWQPGZiRCsMUjhdzhhMKiLHC7HjylBBVQ0ULNapRC0PQzBz1Irk&X-Amz-Signature=8a0bcbfaa665182d5186f9845e0f4e3aff64111db0263e9196ea71c4ede92af3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSYTRQXO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICvX9xX7rBDFQAg5rj0or2YA5b%2F45MxBKo7oFBXBt%2FlKAiEAoU%2Fyl%2BmMPpkWSfFZln%2BX1IREEpzKeG8rXcTLEZJVtaoq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDCNVgGRiGAAHliPuLyrcA1UE6aJtl8YfoGxEU0P0m0f41wpkctxfGmK1LhkYmgI7naPGR8tl4Pt94%2F1Ja%2FdqWZBFy3%2BxN2%2BfJmfpSfBJUKPGbga2CT%2FidnCzsJzJ9s72oTm1WDZzTygm7KMZxHzc%2Fllwb2%2FnDmkRzNI8pLvy9N6D%2FzblxhEXn3ubB45z%2B9GuhwPf76ufp%2FMUUzSHBkLiX0RKNvY2YYop0BnNUsY5tQmvrmKusc8AjVe6HgNdAyGpgcc2WqOzNhAeIWOJx3cxocznCug8JR1hrYbsK22vcr3OcBIG%2FhBMS71wiDydQjrE%2FnfWGkJsedq5NDgM8kOFCT1eskAaH2sT2d0y4sxE8KN2q4uplr9jcsgJ7mvzjH3fo5J7Ii3u%2F4SiQtFp1Tu5GFDip62HY1KO4zdOoNMQ4xsQG4Mh%2FX%2BAANxo9BnP%2F%2Bzj9oyFS2ZCBnNKiMLFl14OU5qGrRZagB3UsYCE3meyacB1P%2FT%2FonLDNhWy3AXNnw5sgrVDJrxydY8zWbLsjJBaTqJy5HT13EGbymwqO45rEACd7qbn215jLBv0hhTT3Bi2sq2ixgviMPE%2FE7ovw7n5k0LenJq6JFY85Fr7xzD2hQMOaVrf1UtIes%2BcuVPlf3%2Bau5d5AXe2EFKO%2Bba9MOaducQGOqUBDpv9KPzwKkINSPP0ALC%2FCs9DPiA2SNMcMJMBbdH8C5Bfo8N8sPSvfg9FEtjOnH8vtq3uHfzXLcZRPZ%2BpJzyO%2B24cIQp%2FlG4%2F2%2FxAjmrV19CFDwQlQEBRU4TkD7H7KY3quN5o5%2BfEbZURfniSe0jqRW4JKSY0oGaxwssbeXBtqNWQPGZiRCsMUjhdzhhMKiLHC7HjylBBVQ0ULNapRC0PQzBz1Irk&X-Amz-Signature=2ca305c83cdc7967e4112c79ff5e0a85445cdc5a624da6aa5405e76389996d7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSYTRQXO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICvX9xX7rBDFQAg5rj0or2YA5b%2F45MxBKo7oFBXBt%2FlKAiEAoU%2Fyl%2BmMPpkWSfFZln%2BX1IREEpzKeG8rXcTLEZJVtaoq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDCNVgGRiGAAHliPuLyrcA1UE6aJtl8YfoGxEU0P0m0f41wpkctxfGmK1LhkYmgI7naPGR8tl4Pt94%2F1Ja%2FdqWZBFy3%2BxN2%2BfJmfpSfBJUKPGbga2CT%2FidnCzsJzJ9s72oTm1WDZzTygm7KMZxHzc%2Fllwb2%2FnDmkRzNI8pLvy9N6D%2FzblxhEXn3ubB45z%2B9GuhwPf76ufp%2FMUUzSHBkLiX0RKNvY2YYop0BnNUsY5tQmvrmKusc8AjVe6HgNdAyGpgcc2WqOzNhAeIWOJx3cxocznCug8JR1hrYbsK22vcr3OcBIG%2FhBMS71wiDydQjrE%2FnfWGkJsedq5NDgM8kOFCT1eskAaH2sT2d0y4sxE8KN2q4uplr9jcsgJ7mvzjH3fo5J7Ii3u%2F4SiQtFp1Tu5GFDip62HY1KO4zdOoNMQ4xsQG4Mh%2FX%2BAANxo9BnP%2F%2Bzj9oyFS2ZCBnNKiMLFl14OU5qGrRZagB3UsYCE3meyacB1P%2FT%2FonLDNhWy3AXNnw5sgrVDJrxydY8zWbLsjJBaTqJy5HT13EGbymwqO45rEACd7qbn215jLBv0hhTT3Bi2sq2ixgviMPE%2FE7ovw7n5k0LenJq6JFY85Fr7xzD2hQMOaVrf1UtIes%2BcuVPlf3%2Bau5d5AXe2EFKO%2Bba9MOaducQGOqUBDpv9KPzwKkINSPP0ALC%2FCs9DPiA2SNMcMJMBbdH8C5Bfo8N8sPSvfg9FEtjOnH8vtq3uHfzXLcZRPZ%2BpJzyO%2B24cIQp%2FlG4%2F2%2FxAjmrV19CFDwQlQEBRU4TkD7H7KY3quN5o5%2BfEbZURfniSe0jqRW4JKSY0oGaxwssbeXBtqNWQPGZiRCsMUjhdzhhMKiLHC7HjylBBVQ0ULNapRC0PQzBz1Irk&X-Amz-Signature=7a8bc32731a47e21f1b0f30046bfe45a8ac354b35a16a3b30243547e3fd2ec64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSYTRQXO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICvX9xX7rBDFQAg5rj0or2YA5b%2F45MxBKo7oFBXBt%2FlKAiEAoU%2Fyl%2BmMPpkWSfFZln%2BX1IREEpzKeG8rXcTLEZJVtaoq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDCNVgGRiGAAHliPuLyrcA1UE6aJtl8YfoGxEU0P0m0f41wpkctxfGmK1LhkYmgI7naPGR8tl4Pt94%2F1Ja%2FdqWZBFy3%2BxN2%2BfJmfpSfBJUKPGbga2CT%2FidnCzsJzJ9s72oTm1WDZzTygm7KMZxHzc%2Fllwb2%2FnDmkRzNI8pLvy9N6D%2FzblxhEXn3ubB45z%2B9GuhwPf76ufp%2FMUUzSHBkLiX0RKNvY2YYop0BnNUsY5tQmvrmKusc8AjVe6HgNdAyGpgcc2WqOzNhAeIWOJx3cxocznCug8JR1hrYbsK22vcr3OcBIG%2FhBMS71wiDydQjrE%2FnfWGkJsedq5NDgM8kOFCT1eskAaH2sT2d0y4sxE8KN2q4uplr9jcsgJ7mvzjH3fo5J7Ii3u%2F4SiQtFp1Tu5GFDip62HY1KO4zdOoNMQ4xsQG4Mh%2FX%2BAANxo9BnP%2F%2Bzj9oyFS2ZCBnNKiMLFl14OU5qGrRZagB3UsYCE3meyacB1P%2FT%2FonLDNhWy3AXNnw5sgrVDJrxydY8zWbLsjJBaTqJy5HT13EGbymwqO45rEACd7qbn215jLBv0hhTT3Bi2sq2ixgviMPE%2FE7ovw7n5k0LenJq6JFY85Fr7xzD2hQMOaVrf1UtIes%2BcuVPlf3%2Bau5d5AXe2EFKO%2Bba9MOaducQGOqUBDpv9KPzwKkINSPP0ALC%2FCs9DPiA2SNMcMJMBbdH8C5Bfo8N8sPSvfg9FEtjOnH8vtq3uHfzXLcZRPZ%2BpJzyO%2B24cIQp%2FlG4%2F2%2FxAjmrV19CFDwQlQEBRU4TkD7H7KY3quN5o5%2BfEbZURfniSe0jqRW4JKSY0oGaxwssbeXBtqNWQPGZiRCsMUjhdzhhMKiLHC7HjylBBVQ0ULNapRC0PQzBz1Irk&X-Amz-Signature=863acf0253aa64629dc97ecd3461b205dc957bbd0dc14801825e56716519b366&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSYTRQXO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICvX9xX7rBDFQAg5rj0or2YA5b%2F45MxBKo7oFBXBt%2FlKAiEAoU%2Fyl%2BmMPpkWSfFZln%2BX1IREEpzKeG8rXcTLEZJVtaoq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDCNVgGRiGAAHliPuLyrcA1UE6aJtl8YfoGxEU0P0m0f41wpkctxfGmK1LhkYmgI7naPGR8tl4Pt94%2F1Ja%2FdqWZBFy3%2BxN2%2BfJmfpSfBJUKPGbga2CT%2FidnCzsJzJ9s72oTm1WDZzTygm7KMZxHzc%2Fllwb2%2FnDmkRzNI8pLvy9N6D%2FzblxhEXn3ubB45z%2B9GuhwPf76ufp%2FMUUzSHBkLiX0RKNvY2YYop0BnNUsY5tQmvrmKusc8AjVe6HgNdAyGpgcc2WqOzNhAeIWOJx3cxocznCug8JR1hrYbsK22vcr3OcBIG%2FhBMS71wiDydQjrE%2FnfWGkJsedq5NDgM8kOFCT1eskAaH2sT2d0y4sxE8KN2q4uplr9jcsgJ7mvzjH3fo5J7Ii3u%2F4SiQtFp1Tu5GFDip62HY1KO4zdOoNMQ4xsQG4Mh%2FX%2BAANxo9BnP%2F%2Bzj9oyFS2ZCBnNKiMLFl14OU5qGrRZagB3UsYCE3meyacB1P%2FT%2FonLDNhWy3AXNnw5sgrVDJrxydY8zWbLsjJBaTqJy5HT13EGbymwqO45rEACd7qbn215jLBv0hhTT3Bi2sq2ixgviMPE%2FE7ovw7n5k0LenJq6JFY85Fr7xzD2hQMOaVrf1UtIes%2BcuVPlf3%2Bau5d5AXe2EFKO%2Bba9MOaducQGOqUBDpv9KPzwKkINSPP0ALC%2FCs9DPiA2SNMcMJMBbdH8C5Bfo8N8sPSvfg9FEtjOnH8vtq3uHfzXLcZRPZ%2BpJzyO%2B24cIQp%2FlG4%2F2%2FxAjmrV19CFDwQlQEBRU4TkD7H7KY3quN5o5%2BfEbZURfniSe0jqRW4JKSY0oGaxwssbeXBtqNWQPGZiRCsMUjhdzhhMKiLHC7HjylBBVQ0ULNapRC0PQzBz1Irk&X-Amz-Signature=140534a18bfac7971083ebf5e5a59ef86c59f9084a68055e4f15fc480b9f19bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSYTRQXO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICvX9xX7rBDFQAg5rj0or2YA5b%2F45MxBKo7oFBXBt%2FlKAiEAoU%2Fyl%2BmMPpkWSfFZln%2BX1IREEpzKeG8rXcTLEZJVtaoq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDCNVgGRiGAAHliPuLyrcA1UE6aJtl8YfoGxEU0P0m0f41wpkctxfGmK1LhkYmgI7naPGR8tl4Pt94%2F1Ja%2FdqWZBFy3%2BxN2%2BfJmfpSfBJUKPGbga2CT%2FidnCzsJzJ9s72oTm1WDZzTygm7KMZxHzc%2Fllwb2%2FnDmkRzNI8pLvy9N6D%2FzblxhEXn3ubB45z%2B9GuhwPf76ufp%2FMUUzSHBkLiX0RKNvY2YYop0BnNUsY5tQmvrmKusc8AjVe6HgNdAyGpgcc2WqOzNhAeIWOJx3cxocznCug8JR1hrYbsK22vcr3OcBIG%2FhBMS71wiDydQjrE%2FnfWGkJsedq5NDgM8kOFCT1eskAaH2sT2d0y4sxE8KN2q4uplr9jcsgJ7mvzjH3fo5J7Ii3u%2F4SiQtFp1Tu5GFDip62HY1KO4zdOoNMQ4xsQG4Mh%2FX%2BAANxo9BnP%2F%2Bzj9oyFS2ZCBnNKiMLFl14OU5qGrRZagB3UsYCE3meyacB1P%2FT%2FonLDNhWy3AXNnw5sgrVDJrxydY8zWbLsjJBaTqJy5HT13EGbymwqO45rEACd7qbn215jLBv0hhTT3Bi2sq2ixgviMPE%2FE7ovw7n5k0LenJq6JFY85Fr7xzD2hQMOaVrf1UtIes%2BcuVPlf3%2Bau5d5AXe2EFKO%2Bba9MOaducQGOqUBDpv9KPzwKkINSPP0ALC%2FCs9DPiA2SNMcMJMBbdH8C5Bfo8N8sPSvfg9FEtjOnH8vtq3uHfzXLcZRPZ%2BpJzyO%2B24cIQp%2FlG4%2F2%2FxAjmrV19CFDwQlQEBRU4TkD7H7KY3quN5o5%2BfEbZURfniSe0jqRW4JKSY0oGaxwssbeXBtqNWQPGZiRCsMUjhdzhhMKiLHC7HjylBBVQ0ULNapRC0PQzBz1Irk&X-Amz-Signature=6aad02f46dfd4c602b443743499a5b140f7ff6e0d6b2f19094aff81fbf8c0fe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSYTRQXO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICvX9xX7rBDFQAg5rj0or2YA5b%2F45MxBKo7oFBXBt%2FlKAiEAoU%2Fyl%2BmMPpkWSfFZln%2BX1IREEpzKeG8rXcTLEZJVtaoq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDCNVgGRiGAAHliPuLyrcA1UE6aJtl8YfoGxEU0P0m0f41wpkctxfGmK1LhkYmgI7naPGR8tl4Pt94%2F1Ja%2FdqWZBFy3%2BxN2%2BfJmfpSfBJUKPGbga2CT%2FidnCzsJzJ9s72oTm1WDZzTygm7KMZxHzc%2Fllwb2%2FnDmkRzNI8pLvy9N6D%2FzblxhEXn3ubB45z%2B9GuhwPf76ufp%2FMUUzSHBkLiX0RKNvY2YYop0BnNUsY5tQmvrmKusc8AjVe6HgNdAyGpgcc2WqOzNhAeIWOJx3cxocznCug8JR1hrYbsK22vcr3OcBIG%2FhBMS71wiDydQjrE%2FnfWGkJsedq5NDgM8kOFCT1eskAaH2sT2d0y4sxE8KN2q4uplr9jcsgJ7mvzjH3fo5J7Ii3u%2F4SiQtFp1Tu5GFDip62HY1KO4zdOoNMQ4xsQG4Mh%2FX%2BAANxo9BnP%2F%2Bzj9oyFS2ZCBnNKiMLFl14OU5qGrRZagB3UsYCE3meyacB1P%2FT%2FonLDNhWy3AXNnw5sgrVDJrxydY8zWbLsjJBaTqJy5HT13EGbymwqO45rEACd7qbn215jLBv0hhTT3Bi2sq2ixgviMPE%2FE7ovw7n5k0LenJq6JFY85Fr7xzD2hQMOaVrf1UtIes%2BcuVPlf3%2Bau5d5AXe2EFKO%2Bba9MOaducQGOqUBDpv9KPzwKkINSPP0ALC%2FCs9DPiA2SNMcMJMBbdH8C5Bfo8N8sPSvfg9FEtjOnH8vtq3uHfzXLcZRPZ%2BpJzyO%2B24cIQp%2FlG4%2F2%2FxAjmrV19CFDwQlQEBRU4TkD7H7KY3quN5o5%2BfEbZURfniSe0jqRW4JKSY0oGaxwssbeXBtqNWQPGZiRCsMUjhdzhhMKiLHC7HjylBBVQ0ULNapRC0PQzBz1Irk&X-Amz-Signature=e5385f663d76c7a81cb8ccd522897458d835fb4a32986fcd0b84e0011481d111&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSYTRQXO%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T190737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICvX9xX7rBDFQAg5rj0or2YA5b%2F45MxBKo7oFBXBt%2FlKAiEAoU%2Fyl%2BmMPpkWSfFZln%2BX1IREEpzKeG8rXcTLEZJVtaoq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDCNVgGRiGAAHliPuLyrcA1UE6aJtl8YfoGxEU0P0m0f41wpkctxfGmK1LhkYmgI7naPGR8tl4Pt94%2F1Ja%2FdqWZBFy3%2BxN2%2BfJmfpSfBJUKPGbga2CT%2FidnCzsJzJ9s72oTm1WDZzTygm7KMZxHzc%2Fllwb2%2FnDmkRzNI8pLvy9N6D%2FzblxhEXn3ubB45z%2B9GuhwPf76ufp%2FMUUzSHBkLiX0RKNvY2YYop0BnNUsY5tQmvrmKusc8AjVe6HgNdAyGpgcc2WqOzNhAeIWOJx3cxocznCug8JR1hrYbsK22vcr3OcBIG%2FhBMS71wiDydQjrE%2FnfWGkJsedq5NDgM8kOFCT1eskAaH2sT2d0y4sxE8KN2q4uplr9jcsgJ7mvzjH3fo5J7Ii3u%2F4SiQtFp1Tu5GFDip62HY1KO4zdOoNMQ4xsQG4Mh%2FX%2BAANxo9BnP%2F%2Bzj9oyFS2ZCBnNKiMLFl14OU5qGrRZagB3UsYCE3meyacB1P%2FT%2FonLDNhWy3AXNnw5sgrVDJrxydY8zWbLsjJBaTqJy5HT13EGbymwqO45rEACd7qbn215jLBv0hhTT3Bi2sq2ixgviMPE%2FE7ovw7n5k0LenJq6JFY85Fr7xzD2hQMOaVrf1UtIes%2BcuVPlf3%2Bau5d5AXe2EFKO%2Bba9MOaducQGOqUBDpv9KPzwKkINSPP0ALC%2FCs9DPiA2SNMcMJMBbdH8C5Bfo8N8sPSvfg9FEtjOnH8vtq3uHfzXLcZRPZ%2BpJzyO%2B24cIQp%2FlG4%2F2%2FxAjmrV19CFDwQlQEBRU4TkD7H7KY3quN5o5%2BfEbZURfniSe0jqRW4JKSY0oGaxwssbeXBtqNWQPGZiRCsMUjhdzhhMKiLHC7HjylBBVQ0ULNapRC0PQzBz1Irk&X-Amz-Signature=66917ec9d1679926adcad86f2893e84aba1406aa72a33a25931e81ca33183980&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
