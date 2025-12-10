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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWBQQFVV%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD28Y0xyzPLNbErE1RGXcRtIL%2F9KZyIQJfpFzslvqT4pAIgM1AEwNZe19CwpkgI70pZbkWEP2R42ekaxUYBsQOfCQ8qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhowgLR2oo3rVEfzyrcA3aSYZRLzB5CIIhKRZk0lbOo6gmGCEmgMK%2FUUXtuhmK1wgbC0MnVlXpITsI2%2FseybWVp2P1FXX4hi3A3t8yz7hl%2FsPzY%2BGucg3iQiyabQX7sUcqQh5wbPQdTMoQmHfDV2Nu1gQ3Z0VkJhXhIabBJRKLmxiqWMQhmqEzfjL6GVgfwXbs5DSi1GnO57dx6SRR4ZfjwTu3Ehbu1%2Bt7lQwuhCRNd3XUB7ErO6m0jmRvN0WW0096FDZm3%2FMbcWBkdmNi2E1oeReE%2B15FqPwGIe7fFKGyBIgUc6smAhWCCbQGqm1D89g5LoG5S1WnHq%2FZ3jNST0LkiJ%2FoxJVozZlLP09jXIu7yz3C1mB01RtZqOW6hGXOt6g6Vv1oYRI%2B6JCG3NrrEShQopY5tjP55dP2h7gkp6O4ZPfb5pANmsdOtu5vWQbBXSooWgn7Ry5hgYegscvURnGVl3fucmBXMLEOYGIm1ELagPcQvNGb5OrFRym26XIEHSMO%2BPEylxNYNOu8J0z6WPLcvFVJ2rbxYMjb0Tqy0IYSco0r8hg8NAvBQ3LdOfNK7Nsk4UFVejF9fwjMGdK2vHdWqJsRt0QhzTSEE4G5x09WhrRF%2BmYDYR2slAtb7H5r5KS76KFIXH1MSGmH9MJ7E4skGOqUBYOMjMg0EJr%2FnjVJlhXTevNlrwlfMXh9%2F6plEYuPL0Lda4w4u521rXLD8TDZe%2BTeT6yLd7lNmNDbYnzlOIlrjvRblLS9rc3XlYpaYJfr79do%2BkKilVlknca2qw8cweODJ2zPioQ6IfWfbqmtHSGSxjPnEnSRiTji38wMWhStEtxYET1BTxQM6%2FUXl9wHCZztib37Ovky3wrCBCSUnBG%2FD8RouN82J&X-Amz-Signature=653004c6d73cbee8e24ddfe8042ba5c09efb33b9aa9f2ed3e2cd1befcb35140d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWBQQFVV%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD28Y0xyzPLNbErE1RGXcRtIL%2F9KZyIQJfpFzslvqT4pAIgM1AEwNZe19CwpkgI70pZbkWEP2R42ekaxUYBsQOfCQ8qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhowgLR2oo3rVEfzyrcA3aSYZRLzB5CIIhKRZk0lbOo6gmGCEmgMK%2FUUXtuhmK1wgbC0MnVlXpITsI2%2FseybWVp2P1FXX4hi3A3t8yz7hl%2FsPzY%2BGucg3iQiyabQX7sUcqQh5wbPQdTMoQmHfDV2Nu1gQ3Z0VkJhXhIabBJRKLmxiqWMQhmqEzfjL6GVgfwXbs5DSi1GnO57dx6SRR4ZfjwTu3Ehbu1%2Bt7lQwuhCRNd3XUB7ErO6m0jmRvN0WW0096FDZm3%2FMbcWBkdmNi2E1oeReE%2B15FqPwGIe7fFKGyBIgUc6smAhWCCbQGqm1D89g5LoG5S1WnHq%2FZ3jNST0LkiJ%2FoxJVozZlLP09jXIu7yz3C1mB01RtZqOW6hGXOt6g6Vv1oYRI%2B6JCG3NrrEShQopY5tjP55dP2h7gkp6O4ZPfb5pANmsdOtu5vWQbBXSooWgn7Ry5hgYegscvURnGVl3fucmBXMLEOYGIm1ELagPcQvNGb5OrFRym26XIEHSMO%2BPEylxNYNOu8J0z6WPLcvFVJ2rbxYMjb0Tqy0IYSco0r8hg8NAvBQ3LdOfNK7Nsk4UFVejF9fwjMGdK2vHdWqJsRt0QhzTSEE4G5x09WhrRF%2BmYDYR2slAtb7H5r5KS76KFIXH1MSGmH9MJ7E4skGOqUBYOMjMg0EJr%2FnjVJlhXTevNlrwlfMXh9%2F6plEYuPL0Lda4w4u521rXLD8TDZe%2BTeT6yLd7lNmNDbYnzlOIlrjvRblLS9rc3XlYpaYJfr79do%2BkKilVlknca2qw8cweODJ2zPioQ6IfWfbqmtHSGSxjPnEnSRiTji38wMWhStEtxYET1BTxQM6%2FUXl9wHCZztib37Ovky3wrCBCSUnBG%2FD8RouN82J&X-Amz-Signature=24885973d00edc45742bb5532b11ffeb1aa0baf89a82fa06d8a703c7c0f83f9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWBQQFVV%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD28Y0xyzPLNbErE1RGXcRtIL%2F9KZyIQJfpFzslvqT4pAIgM1AEwNZe19CwpkgI70pZbkWEP2R42ekaxUYBsQOfCQ8qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhowgLR2oo3rVEfzyrcA3aSYZRLzB5CIIhKRZk0lbOo6gmGCEmgMK%2FUUXtuhmK1wgbC0MnVlXpITsI2%2FseybWVp2P1FXX4hi3A3t8yz7hl%2FsPzY%2BGucg3iQiyabQX7sUcqQh5wbPQdTMoQmHfDV2Nu1gQ3Z0VkJhXhIabBJRKLmxiqWMQhmqEzfjL6GVgfwXbs5DSi1GnO57dx6SRR4ZfjwTu3Ehbu1%2Bt7lQwuhCRNd3XUB7ErO6m0jmRvN0WW0096FDZm3%2FMbcWBkdmNi2E1oeReE%2B15FqPwGIe7fFKGyBIgUc6smAhWCCbQGqm1D89g5LoG5S1WnHq%2FZ3jNST0LkiJ%2FoxJVozZlLP09jXIu7yz3C1mB01RtZqOW6hGXOt6g6Vv1oYRI%2B6JCG3NrrEShQopY5tjP55dP2h7gkp6O4ZPfb5pANmsdOtu5vWQbBXSooWgn7Ry5hgYegscvURnGVl3fucmBXMLEOYGIm1ELagPcQvNGb5OrFRym26XIEHSMO%2BPEylxNYNOu8J0z6WPLcvFVJ2rbxYMjb0Tqy0IYSco0r8hg8NAvBQ3LdOfNK7Nsk4UFVejF9fwjMGdK2vHdWqJsRt0QhzTSEE4G5x09WhrRF%2BmYDYR2slAtb7H5r5KS76KFIXH1MSGmH9MJ7E4skGOqUBYOMjMg0EJr%2FnjVJlhXTevNlrwlfMXh9%2F6plEYuPL0Lda4w4u521rXLD8TDZe%2BTeT6yLd7lNmNDbYnzlOIlrjvRblLS9rc3XlYpaYJfr79do%2BkKilVlknca2qw8cweODJ2zPioQ6IfWfbqmtHSGSxjPnEnSRiTji38wMWhStEtxYET1BTxQM6%2FUXl9wHCZztib37Ovky3wrCBCSUnBG%2FD8RouN82J&X-Amz-Signature=273b2c568b434dbe5c0a6c4cec84facd407b314021eccab57165d8eae8386b30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWBQQFVV%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD28Y0xyzPLNbErE1RGXcRtIL%2F9KZyIQJfpFzslvqT4pAIgM1AEwNZe19CwpkgI70pZbkWEP2R42ekaxUYBsQOfCQ8qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhowgLR2oo3rVEfzyrcA3aSYZRLzB5CIIhKRZk0lbOo6gmGCEmgMK%2FUUXtuhmK1wgbC0MnVlXpITsI2%2FseybWVp2P1FXX4hi3A3t8yz7hl%2FsPzY%2BGucg3iQiyabQX7sUcqQh5wbPQdTMoQmHfDV2Nu1gQ3Z0VkJhXhIabBJRKLmxiqWMQhmqEzfjL6GVgfwXbs5DSi1GnO57dx6SRR4ZfjwTu3Ehbu1%2Bt7lQwuhCRNd3XUB7ErO6m0jmRvN0WW0096FDZm3%2FMbcWBkdmNi2E1oeReE%2B15FqPwGIe7fFKGyBIgUc6smAhWCCbQGqm1D89g5LoG5S1WnHq%2FZ3jNST0LkiJ%2FoxJVozZlLP09jXIu7yz3C1mB01RtZqOW6hGXOt6g6Vv1oYRI%2B6JCG3NrrEShQopY5tjP55dP2h7gkp6O4ZPfb5pANmsdOtu5vWQbBXSooWgn7Ry5hgYegscvURnGVl3fucmBXMLEOYGIm1ELagPcQvNGb5OrFRym26XIEHSMO%2BPEylxNYNOu8J0z6WPLcvFVJ2rbxYMjb0Tqy0IYSco0r8hg8NAvBQ3LdOfNK7Nsk4UFVejF9fwjMGdK2vHdWqJsRt0QhzTSEE4G5x09WhrRF%2BmYDYR2slAtb7H5r5KS76KFIXH1MSGmH9MJ7E4skGOqUBYOMjMg0EJr%2FnjVJlhXTevNlrwlfMXh9%2F6plEYuPL0Lda4w4u521rXLD8TDZe%2BTeT6yLd7lNmNDbYnzlOIlrjvRblLS9rc3XlYpaYJfr79do%2BkKilVlknca2qw8cweODJ2zPioQ6IfWfbqmtHSGSxjPnEnSRiTji38wMWhStEtxYET1BTxQM6%2FUXl9wHCZztib37Ovky3wrCBCSUnBG%2FD8RouN82J&X-Amz-Signature=da6bdacb6007f12070a2fe6c6e91aae993af3a5ca5544dd953440668f25f547c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWBQQFVV%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD28Y0xyzPLNbErE1RGXcRtIL%2F9KZyIQJfpFzslvqT4pAIgM1AEwNZe19CwpkgI70pZbkWEP2R42ekaxUYBsQOfCQ8qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhowgLR2oo3rVEfzyrcA3aSYZRLzB5CIIhKRZk0lbOo6gmGCEmgMK%2FUUXtuhmK1wgbC0MnVlXpITsI2%2FseybWVp2P1FXX4hi3A3t8yz7hl%2FsPzY%2BGucg3iQiyabQX7sUcqQh5wbPQdTMoQmHfDV2Nu1gQ3Z0VkJhXhIabBJRKLmxiqWMQhmqEzfjL6GVgfwXbs5DSi1GnO57dx6SRR4ZfjwTu3Ehbu1%2Bt7lQwuhCRNd3XUB7ErO6m0jmRvN0WW0096FDZm3%2FMbcWBkdmNi2E1oeReE%2B15FqPwGIe7fFKGyBIgUc6smAhWCCbQGqm1D89g5LoG5S1WnHq%2FZ3jNST0LkiJ%2FoxJVozZlLP09jXIu7yz3C1mB01RtZqOW6hGXOt6g6Vv1oYRI%2B6JCG3NrrEShQopY5tjP55dP2h7gkp6O4ZPfb5pANmsdOtu5vWQbBXSooWgn7Ry5hgYegscvURnGVl3fucmBXMLEOYGIm1ELagPcQvNGb5OrFRym26XIEHSMO%2BPEylxNYNOu8J0z6WPLcvFVJ2rbxYMjb0Tqy0IYSco0r8hg8NAvBQ3LdOfNK7Nsk4UFVejF9fwjMGdK2vHdWqJsRt0QhzTSEE4G5x09WhrRF%2BmYDYR2slAtb7H5r5KS76KFIXH1MSGmH9MJ7E4skGOqUBYOMjMg0EJr%2FnjVJlhXTevNlrwlfMXh9%2F6plEYuPL0Lda4w4u521rXLD8TDZe%2BTeT6yLd7lNmNDbYnzlOIlrjvRblLS9rc3XlYpaYJfr79do%2BkKilVlknca2qw8cweODJ2zPioQ6IfWfbqmtHSGSxjPnEnSRiTji38wMWhStEtxYET1BTxQM6%2FUXl9wHCZztib37Ovky3wrCBCSUnBG%2FD8RouN82J&X-Amz-Signature=ba728d2791c22f63b9f9e1680ec958f91037f3fe8eb250bf5cf84ba5735076bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWBQQFVV%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD28Y0xyzPLNbErE1RGXcRtIL%2F9KZyIQJfpFzslvqT4pAIgM1AEwNZe19CwpkgI70pZbkWEP2R42ekaxUYBsQOfCQ8qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhowgLR2oo3rVEfzyrcA3aSYZRLzB5CIIhKRZk0lbOo6gmGCEmgMK%2FUUXtuhmK1wgbC0MnVlXpITsI2%2FseybWVp2P1FXX4hi3A3t8yz7hl%2FsPzY%2BGucg3iQiyabQX7sUcqQh5wbPQdTMoQmHfDV2Nu1gQ3Z0VkJhXhIabBJRKLmxiqWMQhmqEzfjL6GVgfwXbs5DSi1GnO57dx6SRR4ZfjwTu3Ehbu1%2Bt7lQwuhCRNd3XUB7ErO6m0jmRvN0WW0096FDZm3%2FMbcWBkdmNi2E1oeReE%2B15FqPwGIe7fFKGyBIgUc6smAhWCCbQGqm1D89g5LoG5S1WnHq%2FZ3jNST0LkiJ%2FoxJVozZlLP09jXIu7yz3C1mB01RtZqOW6hGXOt6g6Vv1oYRI%2B6JCG3NrrEShQopY5tjP55dP2h7gkp6O4ZPfb5pANmsdOtu5vWQbBXSooWgn7Ry5hgYegscvURnGVl3fucmBXMLEOYGIm1ELagPcQvNGb5OrFRym26XIEHSMO%2BPEylxNYNOu8J0z6WPLcvFVJ2rbxYMjb0Tqy0IYSco0r8hg8NAvBQ3LdOfNK7Nsk4UFVejF9fwjMGdK2vHdWqJsRt0QhzTSEE4G5x09WhrRF%2BmYDYR2slAtb7H5r5KS76KFIXH1MSGmH9MJ7E4skGOqUBYOMjMg0EJr%2FnjVJlhXTevNlrwlfMXh9%2F6plEYuPL0Lda4w4u521rXLD8TDZe%2BTeT6yLd7lNmNDbYnzlOIlrjvRblLS9rc3XlYpaYJfr79do%2BkKilVlknca2qw8cweODJ2zPioQ6IfWfbqmtHSGSxjPnEnSRiTji38wMWhStEtxYET1BTxQM6%2FUXl9wHCZztib37Ovky3wrCBCSUnBG%2FD8RouN82J&X-Amz-Signature=57d998e81b060991670f7fb57666bc214a63612e97ff2716f287662d465f9eaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWBQQFVV%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD28Y0xyzPLNbErE1RGXcRtIL%2F9KZyIQJfpFzslvqT4pAIgM1AEwNZe19CwpkgI70pZbkWEP2R42ekaxUYBsQOfCQ8qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhowgLR2oo3rVEfzyrcA3aSYZRLzB5CIIhKRZk0lbOo6gmGCEmgMK%2FUUXtuhmK1wgbC0MnVlXpITsI2%2FseybWVp2P1FXX4hi3A3t8yz7hl%2FsPzY%2BGucg3iQiyabQX7sUcqQh5wbPQdTMoQmHfDV2Nu1gQ3Z0VkJhXhIabBJRKLmxiqWMQhmqEzfjL6GVgfwXbs5DSi1GnO57dx6SRR4ZfjwTu3Ehbu1%2Bt7lQwuhCRNd3XUB7ErO6m0jmRvN0WW0096FDZm3%2FMbcWBkdmNi2E1oeReE%2B15FqPwGIe7fFKGyBIgUc6smAhWCCbQGqm1D89g5LoG5S1WnHq%2FZ3jNST0LkiJ%2FoxJVozZlLP09jXIu7yz3C1mB01RtZqOW6hGXOt6g6Vv1oYRI%2B6JCG3NrrEShQopY5tjP55dP2h7gkp6O4ZPfb5pANmsdOtu5vWQbBXSooWgn7Ry5hgYegscvURnGVl3fucmBXMLEOYGIm1ELagPcQvNGb5OrFRym26XIEHSMO%2BPEylxNYNOu8J0z6WPLcvFVJ2rbxYMjb0Tqy0IYSco0r8hg8NAvBQ3LdOfNK7Nsk4UFVejF9fwjMGdK2vHdWqJsRt0QhzTSEE4G5x09WhrRF%2BmYDYR2slAtb7H5r5KS76KFIXH1MSGmH9MJ7E4skGOqUBYOMjMg0EJr%2FnjVJlhXTevNlrwlfMXh9%2F6plEYuPL0Lda4w4u521rXLD8TDZe%2BTeT6yLd7lNmNDbYnzlOIlrjvRblLS9rc3XlYpaYJfr79do%2BkKilVlknca2qw8cweODJ2zPioQ6IfWfbqmtHSGSxjPnEnSRiTji38wMWhStEtxYET1BTxQM6%2FUXl9wHCZztib37Ovky3wrCBCSUnBG%2FD8RouN82J&X-Amz-Signature=c14319736a6540ea7713bf655cd3d9080b3ab40cef8d19dd44aacb6451fcc979&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWBQQFVV%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD28Y0xyzPLNbErE1RGXcRtIL%2F9KZyIQJfpFzslvqT4pAIgM1AEwNZe19CwpkgI70pZbkWEP2R42ekaxUYBsQOfCQ8qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhowgLR2oo3rVEfzyrcA3aSYZRLzB5CIIhKRZk0lbOo6gmGCEmgMK%2FUUXtuhmK1wgbC0MnVlXpITsI2%2FseybWVp2P1FXX4hi3A3t8yz7hl%2FsPzY%2BGucg3iQiyabQX7sUcqQh5wbPQdTMoQmHfDV2Nu1gQ3Z0VkJhXhIabBJRKLmxiqWMQhmqEzfjL6GVgfwXbs5DSi1GnO57dx6SRR4ZfjwTu3Ehbu1%2Bt7lQwuhCRNd3XUB7ErO6m0jmRvN0WW0096FDZm3%2FMbcWBkdmNi2E1oeReE%2B15FqPwGIe7fFKGyBIgUc6smAhWCCbQGqm1D89g5LoG5S1WnHq%2FZ3jNST0LkiJ%2FoxJVozZlLP09jXIu7yz3C1mB01RtZqOW6hGXOt6g6Vv1oYRI%2B6JCG3NrrEShQopY5tjP55dP2h7gkp6O4ZPfb5pANmsdOtu5vWQbBXSooWgn7Ry5hgYegscvURnGVl3fucmBXMLEOYGIm1ELagPcQvNGb5OrFRym26XIEHSMO%2BPEylxNYNOu8J0z6WPLcvFVJ2rbxYMjb0Tqy0IYSco0r8hg8NAvBQ3LdOfNK7Nsk4UFVejF9fwjMGdK2vHdWqJsRt0QhzTSEE4G5x09WhrRF%2BmYDYR2slAtb7H5r5KS76KFIXH1MSGmH9MJ7E4skGOqUBYOMjMg0EJr%2FnjVJlhXTevNlrwlfMXh9%2F6plEYuPL0Lda4w4u521rXLD8TDZe%2BTeT6yLd7lNmNDbYnzlOIlrjvRblLS9rc3XlYpaYJfr79do%2BkKilVlknca2qw8cweODJ2zPioQ6IfWfbqmtHSGSxjPnEnSRiTji38wMWhStEtxYET1BTxQM6%2FUXl9wHCZztib37Ovky3wrCBCSUnBG%2FD8RouN82J&X-Amz-Signature=2568ec629869f9d7bfffec761ccd20ed1f6224085a72785f1aba6076b5019f83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWBQQFVV%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD28Y0xyzPLNbErE1RGXcRtIL%2F9KZyIQJfpFzslvqT4pAIgM1AEwNZe19CwpkgI70pZbkWEP2R42ekaxUYBsQOfCQ8qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhowgLR2oo3rVEfzyrcA3aSYZRLzB5CIIhKRZk0lbOo6gmGCEmgMK%2FUUXtuhmK1wgbC0MnVlXpITsI2%2FseybWVp2P1FXX4hi3A3t8yz7hl%2FsPzY%2BGucg3iQiyabQX7sUcqQh5wbPQdTMoQmHfDV2Nu1gQ3Z0VkJhXhIabBJRKLmxiqWMQhmqEzfjL6GVgfwXbs5DSi1GnO57dx6SRR4ZfjwTu3Ehbu1%2Bt7lQwuhCRNd3XUB7ErO6m0jmRvN0WW0096FDZm3%2FMbcWBkdmNi2E1oeReE%2B15FqPwGIe7fFKGyBIgUc6smAhWCCbQGqm1D89g5LoG5S1WnHq%2FZ3jNST0LkiJ%2FoxJVozZlLP09jXIu7yz3C1mB01RtZqOW6hGXOt6g6Vv1oYRI%2B6JCG3NrrEShQopY5tjP55dP2h7gkp6O4ZPfb5pANmsdOtu5vWQbBXSooWgn7Ry5hgYegscvURnGVl3fucmBXMLEOYGIm1ELagPcQvNGb5OrFRym26XIEHSMO%2BPEylxNYNOu8J0z6WPLcvFVJ2rbxYMjb0Tqy0IYSco0r8hg8NAvBQ3LdOfNK7Nsk4UFVejF9fwjMGdK2vHdWqJsRt0QhzTSEE4G5x09WhrRF%2BmYDYR2slAtb7H5r5KS76KFIXH1MSGmH9MJ7E4skGOqUBYOMjMg0EJr%2FnjVJlhXTevNlrwlfMXh9%2F6plEYuPL0Lda4w4u521rXLD8TDZe%2BTeT6yLd7lNmNDbYnzlOIlrjvRblLS9rc3XlYpaYJfr79do%2BkKilVlknca2qw8cweODJ2zPioQ6IfWfbqmtHSGSxjPnEnSRiTji38wMWhStEtxYET1BTxQM6%2FUXl9wHCZztib37Ovky3wrCBCSUnBG%2FD8RouN82J&X-Amz-Signature=b486052ff7706c1259c92909735637ce324401019849ecff109f7c85acdfe645&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWBQQFVV%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD28Y0xyzPLNbErE1RGXcRtIL%2F9KZyIQJfpFzslvqT4pAIgM1AEwNZe19CwpkgI70pZbkWEP2R42ekaxUYBsQOfCQ8qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhowgLR2oo3rVEfzyrcA3aSYZRLzB5CIIhKRZk0lbOo6gmGCEmgMK%2FUUXtuhmK1wgbC0MnVlXpITsI2%2FseybWVp2P1FXX4hi3A3t8yz7hl%2FsPzY%2BGucg3iQiyabQX7sUcqQh5wbPQdTMoQmHfDV2Nu1gQ3Z0VkJhXhIabBJRKLmxiqWMQhmqEzfjL6GVgfwXbs5DSi1GnO57dx6SRR4ZfjwTu3Ehbu1%2Bt7lQwuhCRNd3XUB7ErO6m0jmRvN0WW0096FDZm3%2FMbcWBkdmNi2E1oeReE%2B15FqPwGIe7fFKGyBIgUc6smAhWCCbQGqm1D89g5LoG5S1WnHq%2FZ3jNST0LkiJ%2FoxJVozZlLP09jXIu7yz3C1mB01RtZqOW6hGXOt6g6Vv1oYRI%2B6JCG3NrrEShQopY5tjP55dP2h7gkp6O4ZPfb5pANmsdOtu5vWQbBXSooWgn7Ry5hgYegscvURnGVl3fucmBXMLEOYGIm1ELagPcQvNGb5OrFRym26XIEHSMO%2BPEylxNYNOu8J0z6WPLcvFVJ2rbxYMjb0Tqy0IYSco0r8hg8NAvBQ3LdOfNK7Nsk4UFVejF9fwjMGdK2vHdWqJsRt0QhzTSEE4G5x09WhrRF%2BmYDYR2slAtb7H5r5KS76KFIXH1MSGmH9MJ7E4skGOqUBYOMjMg0EJr%2FnjVJlhXTevNlrwlfMXh9%2F6plEYuPL0Lda4w4u521rXLD8TDZe%2BTeT6yLd7lNmNDbYnzlOIlrjvRblLS9rc3XlYpaYJfr79do%2BkKilVlknca2qw8cweODJ2zPioQ6IfWfbqmtHSGSxjPnEnSRiTji38wMWhStEtxYET1BTxQM6%2FUXl9wHCZztib37Ovky3wrCBCSUnBG%2FD8RouN82J&X-Amz-Signature=d78ae76939bac93d0e3cd8c5bf1ddf9c856f2a2c99c097f0c0e3b30f1cb47b7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWBQQFVV%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD28Y0xyzPLNbErE1RGXcRtIL%2F9KZyIQJfpFzslvqT4pAIgM1AEwNZe19CwpkgI70pZbkWEP2R42ekaxUYBsQOfCQ8qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhowgLR2oo3rVEfzyrcA3aSYZRLzB5CIIhKRZk0lbOo6gmGCEmgMK%2FUUXtuhmK1wgbC0MnVlXpITsI2%2FseybWVp2P1FXX4hi3A3t8yz7hl%2FsPzY%2BGucg3iQiyabQX7sUcqQh5wbPQdTMoQmHfDV2Nu1gQ3Z0VkJhXhIabBJRKLmxiqWMQhmqEzfjL6GVgfwXbs5DSi1GnO57dx6SRR4ZfjwTu3Ehbu1%2Bt7lQwuhCRNd3XUB7ErO6m0jmRvN0WW0096FDZm3%2FMbcWBkdmNi2E1oeReE%2B15FqPwGIe7fFKGyBIgUc6smAhWCCbQGqm1D89g5LoG5S1WnHq%2FZ3jNST0LkiJ%2FoxJVozZlLP09jXIu7yz3C1mB01RtZqOW6hGXOt6g6Vv1oYRI%2B6JCG3NrrEShQopY5tjP55dP2h7gkp6O4ZPfb5pANmsdOtu5vWQbBXSooWgn7Ry5hgYegscvURnGVl3fucmBXMLEOYGIm1ELagPcQvNGb5OrFRym26XIEHSMO%2BPEylxNYNOu8J0z6WPLcvFVJ2rbxYMjb0Tqy0IYSco0r8hg8NAvBQ3LdOfNK7Nsk4UFVejF9fwjMGdK2vHdWqJsRt0QhzTSEE4G5x09WhrRF%2BmYDYR2slAtb7H5r5KS76KFIXH1MSGmH9MJ7E4skGOqUBYOMjMg0EJr%2FnjVJlhXTevNlrwlfMXh9%2F6plEYuPL0Lda4w4u521rXLD8TDZe%2BTeT6yLd7lNmNDbYnzlOIlrjvRblLS9rc3XlYpaYJfr79do%2BkKilVlknca2qw8cweODJ2zPioQ6IfWfbqmtHSGSxjPnEnSRiTji38wMWhStEtxYET1BTxQM6%2FUXl9wHCZztib37Ovky3wrCBCSUnBG%2FD8RouN82J&X-Amz-Signature=5306de250cc6801ca199ac28d00ce20b59703b1fd808f0b8292215647bbc5ff6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWBQQFVV%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD28Y0xyzPLNbErE1RGXcRtIL%2F9KZyIQJfpFzslvqT4pAIgM1AEwNZe19CwpkgI70pZbkWEP2R42ekaxUYBsQOfCQ8qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhowgLR2oo3rVEfzyrcA3aSYZRLzB5CIIhKRZk0lbOo6gmGCEmgMK%2FUUXtuhmK1wgbC0MnVlXpITsI2%2FseybWVp2P1FXX4hi3A3t8yz7hl%2FsPzY%2BGucg3iQiyabQX7sUcqQh5wbPQdTMoQmHfDV2Nu1gQ3Z0VkJhXhIabBJRKLmxiqWMQhmqEzfjL6GVgfwXbs5DSi1GnO57dx6SRR4ZfjwTu3Ehbu1%2Bt7lQwuhCRNd3XUB7ErO6m0jmRvN0WW0096FDZm3%2FMbcWBkdmNi2E1oeReE%2B15FqPwGIe7fFKGyBIgUc6smAhWCCbQGqm1D89g5LoG5S1WnHq%2FZ3jNST0LkiJ%2FoxJVozZlLP09jXIu7yz3C1mB01RtZqOW6hGXOt6g6Vv1oYRI%2B6JCG3NrrEShQopY5tjP55dP2h7gkp6O4ZPfb5pANmsdOtu5vWQbBXSooWgn7Ry5hgYegscvURnGVl3fucmBXMLEOYGIm1ELagPcQvNGb5OrFRym26XIEHSMO%2BPEylxNYNOu8J0z6WPLcvFVJ2rbxYMjb0Tqy0IYSco0r8hg8NAvBQ3LdOfNK7Nsk4UFVejF9fwjMGdK2vHdWqJsRt0QhzTSEE4G5x09WhrRF%2BmYDYR2slAtb7H5r5KS76KFIXH1MSGmH9MJ7E4skGOqUBYOMjMg0EJr%2FnjVJlhXTevNlrwlfMXh9%2F6plEYuPL0Lda4w4u521rXLD8TDZe%2BTeT6yLd7lNmNDbYnzlOIlrjvRblLS9rc3XlYpaYJfr79do%2BkKilVlknca2qw8cweODJ2zPioQ6IfWfbqmtHSGSxjPnEnSRiTji38wMWhStEtxYET1BTxQM6%2FUXl9wHCZztib37Ovky3wrCBCSUnBG%2FD8RouN82J&X-Amz-Signature=feeae9961b7b070f2980e9ac2ef9dcf44ab78d94d1e6f0801906ebc7bf489a10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWBQQFVV%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD28Y0xyzPLNbErE1RGXcRtIL%2F9KZyIQJfpFzslvqT4pAIgM1AEwNZe19CwpkgI70pZbkWEP2R42ekaxUYBsQOfCQ8qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhowgLR2oo3rVEfzyrcA3aSYZRLzB5CIIhKRZk0lbOo6gmGCEmgMK%2FUUXtuhmK1wgbC0MnVlXpITsI2%2FseybWVp2P1FXX4hi3A3t8yz7hl%2FsPzY%2BGucg3iQiyabQX7sUcqQh5wbPQdTMoQmHfDV2Nu1gQ3Z0VkJhXhIabBJRKLmxiqWMQhmqEzfjL6GVgfwXbs5DSi1GnO57dx6SRR4ZfjwTu3Ehbu1%2Bt7lQwuhCRNd3XUB7ErO6m0jmRvN0WW0096FDZm3%2FMbcWBkdmNi2E1oeReE%2B15FqPwGIe7fFKGyBIgUc6smAhWCCbQGqm1D89g5LoG5S1WnHq%2FZ3jNST0LkiJ%2FoxJVozZlLP09jXIu7yz3C1mB01RtZqOW6hGXOt6g6Vv1oYRI%2B6JCG3NrrEShQopY5tjP55dP2h7gkp6O4ZPfb5pANmsdOtu5vWQbBXSooWgn7Ry5hgYegscvURnGVl3fucmBXMLEOYGIm1ELagPcQvNGb5OrFRym26XIEHSMO%2BPEylxNYNOu8J0z6WPLcvFVJ2rbxYMjb0Tqy0IYSco0r8hg8NAvBQ3LdOfNK7Nsk4UFVejF9fwjMGdK2vHdWqJsRt0QhzTSEE4G5x09WhrRF%2BmYDYR2slAtb7H5r5KS76KFIXH1MSGmH9MJ7E4skGOqUBYOMjMg0EJr%2FnjVJlhXTevNlrwlfMXh9%2F6plEYuPL0Lda4w4u521rXLD8TDZe%2BTeT6yLd7lNmNDbYnzlOIlrjvRblLS9rc3XlYpaYJfr79do%2BkKilVlknca2qw8cweODJ2zPioQ6IfWfbqmtHSGSxjPnEnSRiTji38wMWhStEtxYET1BTxQM6%2FUXl9wHCZztib37Ovky3wrCBCSUnBG%2FD8RouN82J&X-Amz-Signature=d8df88c5eb7bc090b8ed4765323f417f0bc27cedd863d0cc72763950cbf66d96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWBQQFVV%2F20251210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251210T014401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD28Y0xyzPLNbErE1RGXcRtIL%2F9KZyIQJfpFzslvqT4pAIgM1AEwNZe19CwpkgI70pZbkWEP2R42ekaxUYBsQOfCQ8qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhowgLR2oo3rVEfzyrcA3aSYZRLzB5CIIhKRZk0lbOo6gmGCEmgMK%2FUUXtuhmK1wgbC0MnVlXpITsI2%2FseybWVp2P1FXX4hi3A3t8yz7hl%2FsPzY%2BGucg3iQiyabQX7sUcqQh5wbPQdTMoQmHfDV2Nu1gQ3Z0VkJhXhIabBJRKLmxiqWMQhmqEzfjL6GVgfwXbs5DSi1GnO57dx6SRR4ZfjwTu3Ehbu1%2Bt7lQwuhCRNd3XUB7ErO6m0jmRvN0WW0096FDZm3%2FMbcWBkdmNi2E1oeReE%2B15FqPwGIe7fFKGyBIgUc6smAhWCCbQGqm1D89g5LoG5S1WnHq%2FZ3jNST0LkiJ%2FoxJVozZlLP09jXIu7yz3C1mB01RtZqOW6hGXOt6g6Vv1oYRI%2B6JCG3NrrEShQopY5tjP55dP2h7gkp6O4ZPfb5pANmsdOtu5vWQbBXSooWgn7Ry5hgYegscvURnGVl3fucmBXMLEOYGIm1ELagPcQvNGb5OrFRym26XIEHSMO%2BPEylxNYNOu8J0z6WPLcvFVJ2rbxYMjb0Tqy0IYSco0r8hg8NAvBQ3LdOfNK7Nsk4UFVejF9fwjMGdK2vHdWqJsRt0QhzTSEE4G5x09WhrRF%2BmYDYR2slAtb7H5r5KS76KFIXH1MSGmH9MJ7E4skGOqUBYOMjMg0EJr%2FnjVJlhXTevNlrwlfMXh9%2F6plEYuPL0Lda4w4u521rXLD8TDZe%2BTeT6yLd7lNmNDbYnzlOIlrjvRblLS9rc3XlYpaYJfr79do%2BkKilVlknca2qw8cweODJ2zPioQ6IfWfbqmtHSGSxjPnEnSRiTji38wMWhStEtxYET1BTxQM6%2FUXl9wHCZztib37Ovky3wrCBCSUnBG%2FD8RouN82J&X-Amz-Signature=9b873d27a3138c7736533987ca893a2d0abc604c40f15c033c3c09a58c8d8dae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
