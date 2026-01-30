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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBZ5MLO2%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRAM5lgWPbdphAGycxRMolo6MNSgZBcd0EXNpdVbygswIgNr73hUM4DbHrQMZigQNXG%2BExxWfvs15HJ5Ppodh3OPAqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvox%2B8eZ3eI1tcC1SrcA8kaGDMD%2FgoGUxqbk6NjCisaBDXlDNTFrF%2F2ZOZayFdedlmtb6UE9LHXpVtsMWPCkYHlOPBpnOCK%2Bf%2B3bodorbgyIhSADutUvjoClwPadAKwCcnKl7euajrHYDz93G0suir0IKaTiBTlS4NcX9XLDnYOWg9zA89pEd5uUo1kdvTjQAZt6p9ulzqkP5wAJGg%2FEfm3kn47p96SScRPvha7qrWEMf9CjivCASGM5pylzp6%2FX8%2Fk758C33qQb7uJR8R8V0MsrWWmyyy%2Bc97fYwBj65RB6xQVa7BiNGQh2MiwGhBIrEtKS8S4tx%2BnUHI9OBgmKwFPY41pM0qfANyVxoPPUXLwT7olt2UkeA4PF7ObalHiKt%2BkOTyjgBLPe4b2nYqess32BIaG1KIq8ugi%2BBqzy3bdRIvzCpGryxs1vlE1b8l5wpd%2BoPHIc7tNbBMeJJ6iHQsG51quCTu0raBLUiUMgcRX4Dc4aTUFKpnd%2Bp9Rxs7gsBYXHO2BuYgmPsQHLIpAj6Wb%2B1YDO%2FDUIWRw%2BpghZbp7Y2tIifA0LOC8JqcoTM8kuYQ41kLcHT2u%2FwByRrTXpt0edIvR4%2FGEyD62qcJYa%2BUPS%2B3%2Fod%2BHZeokqXNWdwoNNd%2FKeLz%2FD1ifnXjkMOCB8MsGOqUBQ52No1vPEgn9i6xEf6yDW%2BidDhaxyIAtUD4R%2BBkC5Owgm6RPRfTKJGXBiPmz0Our00m4IkWInUyrzpqdTrq3rdGAUs6rlBT59zSpNImxXxLEBA8OkbM2Jd37Dklbhzpg6i11uld3fPK0t3XhlC9JURIHswbVORQyu1YaBZ5ArXFZbvb1plBJFMfq9%2FysZn7iBxaNfe49aPIMwwVPqkjYzJrTWYA8&X-Amz-Signature=d39f15b3e079d7e8c7a8d238022a0d72e80013eadf6b52e0ae3289b1b49941c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBZ5MLO2%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRAM5lgWPbdphAGycxRMolo6MNSgZBcd0EXNpdVbygswIgNr73hUM4DbHrQMZigQNXG%2BExxWfvs15HJ5Ppodh3OPAqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvox%2B8eZ3eI1tcC1SrcA8kaGDMD%2FgoGUxqbk6NjCisaBDXlDNTFrF%2F2ZOZayFdedlmtb6UE9LHXpVtsMWPCkYHlOPBpnOCK%2Bf%2B3bodorbgyIhSADutUvjoClwPadAKwCcnKl7euajrHYDz93G0suir0IKaTiBTlS4NcX9XLDnYOWg9zA89pEd5uUo1kdvTjQAZt6p9ulzqkP5wAJGg%2FEfm3kn47p96SScRPvha7qrWEMf9CjivCASGM5pylzp6%2FX8%2Fk758C33qQb7uJR8R8V0MsrWWmyyy%2Bc97fYwBj65RB6xQVa7BiNGQh2MiwGhBIrEtKS8S4tx%2BnUHI9OBgmKwFPY41pM0qfANyVxoPPUXLwT7olt2UkeA4PF7ObalHiKt%2BkOTyjgBLPe4b2nYqess32BIaG1KIq8ugi%2BBqzy3bdRIvzCpGryxs1vlE1b8l5wpd%2BoPHIc7tNbBMeJJ6iHQsG51quCTu0raBLUiUMgcRX4Dc4aTUFKpnd%2Bp9Rxs7gsBYXHO2BuYgmPsQHLIpAj6Wb%2B1YDO%2FDUIWRw%2BpghZbp7Y2tIifA0LOC8JqcoTM8kuYQ41kLcHT2u%2FwByRrTXpt0edIvR4%2FGEyD62qcJYa%2BUPS%2B3%2Fod%2BHZeokqXNWdwoNNd%2FKeLz%2FD1ifnXjkMOCB8MsGOqUBQ52No1vPEgn9i6xEf6yDW%2BidDhaxyIAtUD4R%2BBkC5Owgm6RPRfTKJGXBiPmz0Our00m4IkWInUyrzpqdTrq3rdGAUs6rlBT59zSpNImxXxLEBA8OkbM2Jd37Dklbhzpg6i11uld3fPK0t3XhlC9JURIHswbVORQyu1YaBZ5ArXFZbvb1plBJFMfq9%2FysZn7iBxaNfe49aPIMwwVPqkjYzJrTWYA8&X-Amz-Signature=b256b7a2d3df892b74bc4db77e70dbb98d2f3597864614e33a71418beabf8fcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBZ5MLO2%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRAM5lgWPbdphAGycxRMolo6MNSgZBcd0EXNpdVbygswIgNr73hUM4DbHrQMZigQNXG%2BExxWfvs15HJ5Ppodh3OPAqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvox%2B8eZ3eI1tcC1SrcA8kaGDMD%2FgoGUxqbk6NjCisaBDXlDNTFrF%2F2ZOZayFdedlmtb6UE9LHXpVtsMWPCkYHlOPBpnOCK%2Bf%2B3bodorbgyIhSADutUvjoClwPadAKwCcnKl7euajrHYDz93G0suir0IKaTiBTlS4NcX9XLDnYOWg9zA89pEd5uUo1kdvTjQAZt6p9ulzqkP5wAJGg%2FEfm3kn47p96SScRPvha7qrWEMf9CjivCASGM5pylzp6%2FX8%2Fk758C33qQb7uJR8R8V0MsrWWmyyy%2Bc97fYwBj65RB6xQVa7BiNGQh2MiwGhBIrEtKS8S4tx%2BnUHI9OBgmKwFPY41pM0qfANyVxoPPUXLwT7olt2UkeA4PF7ObalHiKt%2BkOTyjgBLPe4b2nYqess32BIaG1KIq8ugi%2BBqzy3bdRIvzCpGryxs1vlE1b8l5wpd%2BoPHIc7tNbBMeJJ6iHQsG51quCTu0raBLUiUMgcRX4Dc4aTUFKpnd%2Bp9Rxs7gsBYXHO2BuYgmPsQHLIpAj6Wb%2B1YDO%2FDUIWRw%2BpghZbp7Y2tIifA0LOC8JqcoTM8kuYQ41kLcHT2u%2FwByRrTXpt0edIvR4%2FGEyD62qcJYa%2BUPS%2B3%2Fod%2BHZeokqXNWdwoNNd%2FKeLz%2FD1ifnXjkMOCB8MsGOqUBQ52No1vPEgn9i6xEf6yDW%2BidDhaxyIAtUD4R%2BBkC5Owgm6RPRfTKJGXBiPmz0Our00m4IkWInUyrzpqdTrq3rdGAUs6rlBT59zSpNImxXxLEBA8OkbM2Jd37Dklbhzpg6i11uld3fPK0t3XhlC9JURIHswbVORQyu1YaBZ5ArXFZbvb1plBJFMfq9%2FysZn7iBxaNfe49aPIMwwVPqkjYzJrTWYA8&X-Amz-Signature=b4adb51c68600388ef34706f3a84b8dc0e8e7a54bef5f66e5366816c3badb9ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBZ5MLO2%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRAM5lgWPbdphAGycxRMolo6MNSgZBcd0EXNpdVbygswIgNr73hUM4DbHrQMZigQNXG%2BExxWfvs15HJ5Ppodh3OPAqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvox%2B8eZ3eI1tcC1SrcA8kaGDMD%2FgoGUxqbk6NjCisaBDXlDNTFrF%2F2ZOZayFdedlmtb6UE9LHXpVtsMWPCkYHlOPBpnOCK%2Bf%2B3bodorbgyIhSADutUvjoClwPadAKwCcnKl7euajrHYDz93G0suir0IKaTiBTlS4NcX9XLDnYOWg9zA89pEd5uUo1kdvTjQAZt6p9ulzqkP5wAJGg%2FEfm3kn47p96SScRPvha7qrWEMf9CjivCASGM5pylzp6%2FX8%2Fk758C33qQb7uJR8R8V0MsrWWmyyy%2Bc97fYwBj65RB6xQVa7BiNGQh2MiwGhBIrEtKS8S4tx%2BnUHI9OBgmKwFPY41pM0qfANyVxoPPUXLwT7olt2UkeA4PF7ObalHiKt%2BkOTyjgBLPe4b2nYqess32BIaG1KIq8ugi%2BBqzy3bdRIvzCpGryxs1vlE1b8l5wpd%2BoPHIc7tNbBMeJJ6iHQsG51quCTu0raBLUiUMgcRX4Dc4aTUFKpnd%2Bp9Rxs7gsBYXHO2BuYgmPsQHLIpAj6Wb%2B1YDO%2FDUIWRw%2BpghZbp7Y2tIifA0LOC8JqcoTM8kuYQ41kLcHT2u%2FwByRrTXpt0edIvR4%2FGEyD62qcJYa%2BUPS%2B3%2Fod%2BHZeokqXNWdwoNNd%2FKeLz%2FD1ifnXjkMOCB8MsGOqUBQ52No1vPEgn9i6xEf6yDW%2BidDhaxyIAtUD4R%2BBkC5Owgm6RPRfTKJGXBiPmz0Our00m4IkWInUyrzpqdTrq3rdGAUs6rlBT59zSpNImxXxLEBA8OkbM2Jd37Dklbhzpg6i11uld3fPK0t3XhlC9JURIHswbVORQyu1YaBZ5ArXFZbvb1plBJFMfq9%2FysZn7iBxaNfe49aPIMwwVPqkjYzJrTWYA8&X-Amz-Signature=c28c4671c3a9902d952d1049cf509a568d54cf73d6895464ab3dca96ec01f41c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBZ5MLO2%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRAM5lgWPbdphAGycxRMolo6MNSgZBcd0EXNpdVbygswIgNr73hUM4DbHrQMZigQNXG%2BExxWfvs15HJ5Ppodh3OPAqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvox%2B8eZ3eI1tcC1SrcA8kaGDMD%2FgoGUxqbk6NjCisaBDXlDNTFrF%2F2ZOZayFdedlmtb6UE9LHXpVtsMWPCkYHlOPBpnOCK%2Bf%2B3bodorbgyIhSADutUvjoClwPadAKwCcnKl7euajrHYDz93G0suir0IKaTiBTlS4NcX9XLDnYOWg9zA89pEd5uUo1kdvTjQAZt6p9ulzqkP5wAJGg%2FEfm3kn47p96SScRPvha7qrWEMf9CjivCASGM5pylzp6%2FX8%2Fk758C33qQb7uJR8R8V0MsrWWmyyy%2Bc97fYwBj65RB6xQVa7BiNGQh2MiwGhBIrEtKS8S4tx%2BnUHI9OBgmKwFPY41pM0qfANyVxoPPUXLwT7olt2UkeA4PF7ObalHiKt%2BkOTyjgBLPe4b2nYqess32BIaG1KIq8ugi%2BBqzy3bdRIvzCpGryxs1vlE1b8l5wpd%2BoPHIc7tNbBMeJJ6iHQsG51quCTu0raBLUiUMgcRX4Dc4aTUFKpnd%2Bp9Rxs7gsBYXHO2BuYgmPsQHLIpAj6Wb%2B1YDO%2FDUIWRw%2BpghZbp7Y2tIifA0LOC8JqcoTM8kuYQ41kLcHT2u%2FwByRrTXpt0edIvR4%2FGEyD62qcJYa%2BUPS%2B3%2Fod%2BHZeokqXNWdwoNNd%2FKeLz%2FD1ifnXjkMOCB8MsGOqUBQ52No1vPEgn9i6xEf6yDW%2BidDhaxyIAtUD4R%2BBkC5Owgm6RPRfTKJGXBiPmz0Our00m4IkWInUyrzpqdTrq3rdGAUs6rlBT59zSpNImxXxLEBA8OkbM2Jd37Dklbhzpg6i11uld3fPK0t3XhlC9JURIHswbVORQyu1YaBZ5ArXFZbvb1plBJFMfq9%2FysZn7iBxaNfe49aPIMwwVPqkjYzJrTWYA8&X-Amz-Signature=ce02c221af8a8a1dfa67d7f07076b147808af6a25612749b1385f705bd0d1c6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBZ5MLO2%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRAM5lgWPbdphAGycxRMolo6MNSgZBcd0EXNpdVbygswIgNr73hUM4DbHrQMZigQNXG%2BExxWfvs15HJ5Ppodh3OPAqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvox%2B8eZ3eI1tcC1SrcA8kaGDMD%2FgoGUxqbk6NjCisaBDXlDNTFrF%2F2ZOZayFdedlmtb6UE9LHXpVtsMWPCkYHlOPBpnOCK%2Bf%2B3bodorbgyIhSADutUvjoClwPadAKwCcnKl7euajrHYDz93G0suir0IKaTiBTlS4NcX9XLDnYOWg9zA89pEd5uUo1kdvTjQAZt6p9ulzqkP5wAJGg%2FEfm3kn47p96SScRPvha7qrWEMf9CjivCASGM5pylzp6%2FX8%2Fk758C33qQb7uJR8R8V0MsrWWmyyy%2Bc97fYwBj65RB6xQVa7BiNGQh2MiwGhBIrEtKS8S4tx%2BnUHI9OBgmKwFPY41pM0qfANyVxoPPUXLwT7olt2UkeA4PF7ObalHiKt%2BkOTyjgBLPe4b2nYqess32BIaG1KIq8ugi%2BBqzy3bdRIvzCpGryxs1vlE1b8l5wpd%2BoPHIc7tNbBMeJJ6iHQsG51quCTu0raBLUiUMgcRX4Dc4aTUFKpnd%2Bp9Rxs7gsBYXHO2BuYgmPsQHLIpAj6Wb%2B1YDO%2FDUIWRw%2BpghZbp7Y2tIifA0LOC8JqcoTM8kuYQ41kLcHT2u%2FwByRrTXpt0edIvR4%2FGEyD62qcJYa%2BUPS%2B3%2Fod%2BHZeokqXNWdwoNNd%2FKeLz%2FD1ifnXjkMOCB8MsGOqUBQ52No1vPEgn9i6xEf6yDW%2BidDhaxyIAtUD4R%2BBkC5Owgm6RPRfTKJGXBiPmz0Our00m4IkWInUyrzpqdTrq3rdGAUs6rlBT59zSpNImxXxLEBA8OkbM2Jd37Dklbhzpg6i11uld3fPK0t3XhlC9JURIHswbVORQyu1YaBZ5ArXFZbvb1plBJFMfq9%2FysZn7iBxaNfe49aPIMwwVPqkjYzJrTWYA8&X-Amz-Signature=2b92ca3e7a3c7d92b1afb9d2861440046a001876a8b5c729e2125294e5f7b32c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBZ5MLO2%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRAM5lgWPbdphAGycxRMolo6MNSgZBcd0EXNpdVbygswIgNr73hUM4DbHrQMZigQNXG%2BExxWfvs15HJ5Ppodh3OPAqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvox%2B8eZ3eI1tcC1SrcA8kaGDMD%2FgoGUxqbk6NjCisaBDXlDNTFrF%2F2ZOZayFdedlmtb6UE9LHXpVtsMWPCkYHlOPBpnOCK%2Bf%2B3bodorbgyIhSADutUvjoClwPadAKwCcnKl7euajrHYDz93G0suir0IKaTiBTlS4NcX9XLDnYOWg9zA89pEd5uUo1kdvTjQAZt6p9ulzqkP5wAJGg%2FEfm3kn47p96SScRPvha7qrWEMf9CjivCASGM5pylzp6%2FX8%2Fk758C33qQb7uJR8R8V0MsrWWmyyy%2Bc97fYwBj65RB6xQVa7BiNGQh2MiwGhBIrEtKS8S4tx%2BnUHI9OBgmKwFPY41pM0qfANyVxoPPUXLwT7olt2UkeA4PF7ObalHiKt%2BkOTyjgBLPe4b2nYqess32BIaG1KIq8ugi%2BBqzy3bdRIvzCpGryxs1vlE1b8l5wpd%2BoPHIc7tNbBMeJJ6iHQsG51quCTu0raBLUiUMgcRX4Dc4aTUFKpnd%2Bp9Rxs7gsBYXHO2BuYgmPsQHLIpAj6Wb%2B1YDO%2FDUIWRw%2BpghZbp7Y2tIifA0LOC8JqcoTM8kuYQ41kLcHT2u%2FwByRrTXpt0edIvR4%2FGEyD62qcJYa%2BUPS%2B3%2Fod%2BHZeokqXNWdwoNNd%2FKeLz%2FD1ifnXjkMOCB8MsGOqUBQ52No1vPEgn9i6xEf6yDW%2BidDhaxyIAtUD4R%2BBkC5Owgm6RPRfTKJGXBiPmz0Our00m4IkWInUyrzpqdTrq3rdGAUs6rlBT59zSpNImxXxLEBA8OkbM2Jd37Dklbhzpg6i11uld3fPK0t3XhlC9JURIHswbVORQyu1YaBZ5ArXFZbvb1plBJFMfq9%2FysZn7iBxaNfe49aPIMwwVPqkjYzJrTWYA8&X-Amz-Signature=db6db6d1fe584a66fd2037e89bc4ad21210ad2a75ee7438d5204b8d4fee46457&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBZ5MLO2%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRAM5lgWPbdphAGycxRMolo6MNSgZBcd0EXNpdVbygswIgNr73hUM4DbHrQMZigQNXG%2BExxWfvs15HJ5Ppodh3OPAqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvox%2B8eZ3eI1tcC1SrcA8kaGDMD%2FgoGUxqbk6NjCisaBDXlDNTFrF%2F2ZOZayFdedlmtb6UE9LHXpVtsMWPCkYHlOPBpnOCK%2Bf%2B3bodorbgyIhSADutUvjoClwPadAKwCcnKl7euajrHYDz93G0suir0IKaTiBTlS4NcX9XLDnYOWg9zA89pEd5uUo1kdvTjQAZt6p9ulzqkP5wAJGg%2FEfm3kn47p96SScRPvha7qrWEMf9CjivCASGM5pylzp6%2FX8%2Fk758C33qQb7uJR8R8V0MsrWWmyyy%2Bc97fYwBj65RB6xQVa7BiNGQh2MiwGhBIrEtKS8S4tx%2BnUHI9OBgmKwFPY41pM0qfANyVxoPPUXLwT7olt2UkeA4PF7ObalHiKt%2BkOTyjgBLPe4b2nYqess32BIaG1KIq8ugi%2BBqzy3bdRIvzCpGryxs1vlE1b8l5wpd%2BoPHIc7tNbBMeJJ6iHQsG51quCTu0raBLUiUMgcRX4Dc4aTUFKpnd%2Bp9Rxs7gsBYXHO2BuYgmPsQHLIpAj6Wb%2B1YDO%2FDUIWRw%2BpghZbp7Y2tIifA0LOC8JqcoTM8kuYQ41kLcHT2u%2FwByRrTXpt0edIvR4%2FGEyD62qcJYa%2BUPS%2B3%2Fod%2BHZeokqXNWdwoNNd%2FKeLz%2FD1ifnXjkMOCB8MsGOqUBQ52No1vPEgn9i6xEf6yDW%2BidDhaxyIAtUD4R%2BBkC5Owgm6RPRfTKJGXBiPmz0Our00m4IkWInUyrzpqdTrq3rdGAUs6rlBT59zSpNImxXxLEBA8OkbM2Jd37Dklbhzpg6i11uld3fPK0t3XhlC9JURIHswbVORQyu1YaBZ5ArXFZbvb1plBJFMfq9%2FysZn7iBxaNfe49aPIMwwVPqkjYzJrTWYA8&X-Amz-Signature=3e41c96b3d12eb8439d551da398016522ddde3e0ddbcfd44a5a644adfb0c853b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBZ5MLO2%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRAM5lgWPbdphAGycxRMolo6MNSgZBcd0EXNpdVbygswIgNr73hUM4DbHrQMZigQNXG%2BExxWfvs15HJ5Ppodh3OPAqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvox%2B8eZ3eI1tcC1SrcA8kaGDMD%2FgoGUxqbk6NjCisaBDXlDNTFrF%2F2ZOZayFdedlmtb6UE9LHXpVtsMWPCkYHlOPBpnOCK%2Bf%2B3bodorbgyIhSADutUvjoClwPadAKwCcnKl7euajrHYDz93G0suir0IKaTiBTlS4NcX9XLDnYOWg9zA89pEd5uUo1kdvTjQAZt6p9ulzqkP5wAJGg%2FEfm3kn47p96SScRPvha7qrWEMf9CjivCASGM5pylzp6%2FX8%2Fk758C33qQb7uJR8R8V0MsrWWmyyy%2Bc97fYwBj65RB6xQVa7BiNGQh2MiwGhBIrEtKS8S4tx%2BnUHI9OBgmKwFPY41pM0qfANyVxoPPUXLwT7olt2UkeA4PF7ObalHiKt%2BkOTyjgBLPe4b2nYqess32BIaG1KIq8ugi%2BBqzy3bdRIvzCpGryxs1vlE1b8l5wpd%2BoPHIc7tNbBMeJJ6iHQsG51quCTu0raBLUiUMgcRX4Dc4aTUFKpnd%2Bp9Rxs7gsBYXHO2BuYgmPsQHLIpAj6Wb%2B1YDO%2FDUIWRw%2BpghZbp7Y2tIifA0LOC8JqcoTM8kuYQ41kLcHT2u%2FwByRrTXpt0edIvR4%2FGEyD62qcJYa%2BUPS%2B3%2Fod%2BHZeokqXNWdwoNNd%2FKeLz%2FD1ifnXjkMOCB8MsGOqUBQ52No1vPEgn9i6xEf6yDW%2BidDhaxyIAtUD4R%2BBkC5Owgm6RPRfTKJGXBiPmz0Our00m4IkWInUyrzpqdTrq3rdGAUs6rlBT59zSpNImxXxLEBA8OkbM2Jd37Dklbhzpg6i11uld3fPK0t3XhlC9JURIHswbVORQyu1YaBZ5ArXFZbvb1plBJFMfq9%2FysZn7iBxaNfe49aPIMwwVPqkjYzJrTWYA8&X-Amz-Signature=a8d1ab3ff3c98f2adac9dc356e2ff33263af5501f01d05c956e591a1550bd0de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBZ5MLO2%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRAM5lgWPbdphAGycxRMolo6MNSgZBcd0EXNpdVbygswIgNr73hUM4DbHrQMZigQNXG%2BExxWfvs15HJ5Ppodh3OPAqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvox%2B8eZ3eI1tcC1SrcA8kaGDMD%2FgoGUxqbk6NjCisaBDXlDNTFrF%2F2ZOZayFdedlmtb6UE9LHXpVtsMWPCkYHlOPBpnOCK%2Bf%2B3bodorbgyIhSADutUvjoClwPadAKwCcnKl7euajrHYDz93G0suir0IKaTiBTlS4NcX9XLDnYOWg9zA89pEd5uUo1kdvTjQAZt6p9ulzqkP5wAJGg%2FEfm3kn47p96SScRPvha7qrWEMf9CjivCASGM5pylzp6%2FX8%2Fk758C33qQb7uJR8R8V0MsrWWmyyy%2Bc97fYwBj65RB6xQVa7BiNGQh2MiwGhBIrEtKS8S4tx%2BnUHI9OBgmKwFPY41pM0qfANyVxoPPUXLwT7olt2UkeA4PF7ObalHiKt%2BkOTyjgBLPe4b2nYqess32BIaG1KIq8ugi%2BBqzy3bdRIvzCpGryxs1vlE1b8l5wpd%2BoPHIc7tNbBMeJJ6iHQsG51quCTu0raBLUiUMgcRX4Dc4aTUFKpnd%2Bp9Rxs7gsBYXHO2BuYgmPsQHLIpAj6Wb%2B1YDO%2FDUIWRw%2BpghZbp7Y2tIifA0LOC8JqcoTM8kuYQ41kLcHT2u%2FwByRrTXpt0edIvR4%2FGEyD62qcJYa%2BUPS%2B3%2Fod%2BHZeokqXNWdwoNNd%2FKeLz%2FD1ifnXjkMOCB8MsGOqUBQ52No1vPEgn9i6xEf6yDW%2BidDhaxyIAtUD4R%2BBkC5Owgm6RPRfTKJGXBiPmz0Our00m4IkWInUyrzpqdTrq3rdGAUs6rlBT59zSpNImxXxLEBA8OkbM2Jd37Dklbhzpg6i11uld3fPK0t3XhlC9JURIHswbVORQyu1YaBZ5ArXFZbvb1plBJFMfq9%2FysZn7iBxaNfe49aPIMwwVPqkjYzJrTWYA8&X-Amz-Signature=ecf021d3d7a5eb78a44d9458420ceb84acae4c38540a2ffa41525de26b88e103&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBZ5MLO2%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRAM5lgWPbdphAGycxRMolo6MNSgZBcd0EXNpdVbygswIgNr73hUM4DbHrQMZigQNXG%2BExxWfvs15HJ5Ppodh3OPAqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvox%2B8eZ3eI1tcC1SrcA8kaGDMD%2FgoGUxqbk6NjCisaBDXlDNTFrF%2F2ZOZayFdedlmtb6UE9LHXpVtsMWPCkYHlOPBpnOCK%2Bf%2B3bodorbgyIhSADutUvjoClwPadAKwCcnKl7euajrHYDz93G0suir0IKaTiBTlS4NcX9XLDnYOWg9zA89pEd5uUo1kdvTjQAZt6p9ulzqkP5wAJGg%2FEfm3kn47p96SScRPvha7qrWEMf9CjivCASGM5pylzp6%2FX8%2Fk758C33qQb7uJR8R8V0MsrWWmyyy%2Bc97fYwBj65RB6xQVa7BiNGQh2MiwGhBIrEtKS8S4tx%2BnUHI9OBgmKwFPY41pM0qfANyVxoPPUXLwT7olt2UkeA4PF7ObalHiKt%2BkOTyjgBLPe4b2nYqess32BIaG1KIq8ugi%2BBqzy3bdRIvzCpGryxs1vlE1b8l5wpd%2BoPHIc7tNbBMeJJ6iHQsG51quCTu0raBLUiUMgcRX4Dc4aTUFKpnd%2Bp9Rxs7gsBYXHO2BuYgmPsQHLIpAj6Wb%2B1YDO%2FDUIWRw%2BpghZbp7Y2tIifA0LOC8JqcoTM8kuYQ41kLcHT2u%2FwByRrTXpt0edIvR4%2FGEyD62qcJYa%2BUPS%2B3%2Fod%2BHZeokqXNWdwoNNd%2FKeLz%2FD1ifnXjkMOCB8MsGOqUBQ52No1vPEgn9i6xEf6yDW%2BidDhaxyIAtUD4R%2BBkC5Owgm6RPRfTKJGXBiPmz0Our00m4IkWInUyrzpqdTrq3rdGAUs6rlBT59zSpNImxXxLEBA8OkbM2Jd37Dklbhzpg6i11uld3fPK0t3XhlC9JURIHswbVORQyu1YaBZ5ArXFZbvb1plBJFMfq9%2FysZn7iBxaNfe49aPIMwwVPqkjYzJrTWYA8&X-Amz-Signature=af5688de37f6ec97cd991848c4c576d23398d8fadb51f8f484cbfa2957e86e78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBZ5MLO2%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRAM5lgWPbdphAGycxRMolo6MNSgZBcd0EXNpdVbygswIgNr73hUM4DbHrQMZigQNXG%2BExxWfvs15HJ5Ppodh3OPAqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvox%2B8eZ3eI1tcC1SrcA8kaGDMD%2FgoGUxqbk6NjCisaBDXlDNTFrF%2F2ZOZayFdedlmtb6UE9LHXpVtsMWPCkYHlOPBpnOCK%2Bf%2B3bodorbgyIhSADutUvjoClwPadAKwCcnKl7euajrHYDz93G0suir0IKaTiBTlS4NcX9XLDnYOWg9zA89pEd5uUo1kdvTjQAZt6p9ulzqkP5wAJGg%2FEfm3kn47p96SScRPvha7qrWEMf9CjivCASGM5pylzp6%2FX8%2Fk758C33qQb7uJR8R8V0MsrWWmyyy%2Bc97fYwBj65RB6xQVa7BiNGQh2MiwGhBIrEtKS8S4tx%2BnUHI9OBgmKwFPY41pM0qfANyVxoPPUXLwT7olt2UkeA4PF7ObalHiKt%2BkOTyjgBLPe4b2nYqess32BIaG1KIq8ugi%2BBqzy3bdRIvzCpGryxs1vlE1b8l5wpd%2BoPHIc7tNbBMeJJ6iHQsG51quCTu0raBLUiUMgcRX4Dc4aTUFKpnd%2Bp9Rxs7gsBYXHO2BuYgmPsQHLIpAj6Wb%2B1YDO%2FDUIWRw%2BpghZbp7Y2tIifA0LOC8JqcoTM8kuYQ41kLcHT2u%2FwByRrTXpt0edIvR4%2FGEyD62qcJYa%2BUPS%2B3%2Fod%2BHZeokqXNWdwoNNd%2FKeLz%2FD1ifnXjkMOCB8MsGOqUBQ52No1vPEgn9i6xEf6yDW%2BidDhaxyIAtUD4R%2BBkC5Owgm6RPRfTKJGXBiPmz0Our00m4IkWInUyrzpqdTrq3rdGAUs6rlBT59zSpNImxXxLEBA8OkbM2Jd37Dklbhzpg6i11uld3fPK0t3XhlC9JURIHswbVORQyu1YaBZ5ArXFZbvb1plBJFMfq9%2FysZn7iBxaNfe49aPIMwwVPqkjYzJrTWYA8&X-Amz-Signature=a0e930118457062ff6a729ab81df8b6f786e609692d018ad1b49ff0c75f89e8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBZ5MLO2%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRAM5lgWPbdphAGycxRMolo6MNSgZBcd0EXNpdVbygswIgNr73hUM4DbHrQMZigQNXG%2BExxWfvs15HJ5Ppodh3OPAqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvox%2B8eZ3eI1tcC1SrcA8kaGDMD%2FgoGUxqbk6NjCisaBDXlDNTFrF%2F2ZOZayFdedlmtb6UE9LHXpVtsMWPCkYHlOPBpnOCK%2Bf%2B3bodorbgyIhSADutUvjoClwPadAKwCcnKl7euajrHYDz93G0suir0IKaTiBTlS4NcX9XLDnYOWg9zA89pEd5uUo1kdvTjQAZt6p9ulzqkP5wAJGg%2FEfm3kn47p96SScRPvha7qrWEMf9CjivCASGM5pylzp6%2FX8%2Fk758C33qQb7uJR8R8V0MsrWWmyyy%2Bc97fYwBj65RB6xQVa7BiNGQh2MiwGhBIrEtKS8S4tx%2BnUHI9OBgmKwFPY41pM0qfANyVxoPPUXLwT7olt2UkeA4PF7ObalHiKt%2BkOTyjgBLPe4b2nYqess32BIaG1KIq8ugi%2BBqzy3bdRIvzCpGryxs1vlE1b8l5wpd%2BoPHIc7tNbBMeJJ6iHQsG51quCTu0raBLUiUMgcRX4Dc4aTUFKpnd%2Bp9Rxs7gsBYXHO2BuYgmPsQHLIpAj6Wb%2B1YDO%2FDUIWRw%2BpghZbp7Y2tIifA0LOC8JqcoTM8kuYQ41kLcHT2u%2FwByRrTXpt0edIvR4%2FGEyD62qcJYa%2BUPS%2B3%2Fod%2BHZeokqXNWdwoNNd%2FKeLz%2FD1ifnXjkMOCB8MsGOqUBQ52No1vPEgn9i6xEf6yDW%2BidDhaxyIAtUD4R%2BBkC5Owgm6RPRfTKJGXBiPmz0Our00m4IkWInUyrzpqdTrq3rdGAUs6rlBT59zSpNImxXxLEBA8OkbM2Jd37Dklbhzpg6i11uld3fPK0t3XhlC9JURIHswbVORQyu1YaBZ5ArXFZbvb1plBJFMfq9%2FysZn7iBxaNfe49aPIMwwVPqkjYzJrTWYA8&X-Amz-Signature=74aa430c675977f8ac5dd9119639326d05f399e6fa820207e89b1e61e6b38c8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBZ5MLO2%2F20260130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260130T020459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDRAM5lgWPbdphAGycxRMolo6MNSgZBcd0EXNpdVbygswIgNr73hUM4DbHrQMZigQNXG%2BExxWfvs15HJ5Ppodh3OPAqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvox%2B8eZ3eI1tcC1SrcA8kaGDMD%2FgoGUxqbk6NjCisaBDXlDNTFrF%2F2ZOZayFdedlmtb6UE9LHXpVtsMWPCkYHlOPBpnOCK%2Bf%2B3bodorbgyIhSADutUvjoClwPadAKwCcnKl7euajrHYDz93G0suir0IKaTiBTlS4NcX9XLDnYOWg9zA89pEd5uUo1kdvTjQAZt6p9ulzqkP5wAJGg%2FEfm3kn47p96SScRPvha7qrWEMf9CjivCASGM5pylzp6%2FX8%2Fk758C33qQb7uJR8R8V0MsrWWmyyy%2Bc97fYwBj65RB6xQVa7BiNGQh2MiwGhBIrEtKS8S4tx%2BnUHI9OBgmKwFPY41pM0qfANyVxoPPUXLwT7olt2UkeA4PF7ObalHiKt%2BkOTyjgBLPe4b2nYqess32BIaG1KIq8ugi%2BBqzy3bdRIvzCpGryxs1vlE1b8l5wpd%2BoPHIc7tNbBMeJJ6iHQsG51quCTu0raBLUiUMgcRX4Dc4aTUFKpnd%2Bp9Rxs7gsBYXHO2BuYgmPsQHLIpAj6Wb%2B1YDO%2FDUIWRw%2BpghZbp7Y2tIifA0LOC8JqcoTM8kuYQ41kLcHT2u%2FwByRrTXpt0edIvR4%2FGEyD62qcJYa%2BUPS%2B3%2Fod%2BHZeokqXNWdwoNNd%2FKeLz%2FD1ifnXjkMOCB8MsGOqUBQ52No1vPEgn9i6xEf6yDW%2BidDhaxyIAtUD4R%2BBkC5Owgm6RPRfTKJGXBiPmz0Our00m4IkWInUyrzpqdTrq3rdGAUs6rlBT59zSpNImxXxLEBA8OkbM2Jd37Dklbhzpg6i11uld3fPK0t3XhlC9JURIHswbVORQyu1YaBZ5ArXFZbvb1plBJFMfq9%2FysZn7iBxaNfe49aPIMwwVPqkjYzJrTWYA8&X-Amz-Signature=a77de6066809fcacc0bf930a2a4ab27cdfec65c62f5622f73532d91b1e8bd0de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
