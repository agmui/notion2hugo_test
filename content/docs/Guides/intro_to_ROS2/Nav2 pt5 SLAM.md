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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNRZCBV5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQD1osvCJ5qQpF1TbccxJjrv1E9x%2FyfTF0kufLlWN6lZIgIhAM%2FgPXILO0EJQV2gjMuSaXJKyrq46TnDDdhuMckagtxKKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykdXjUUc2bucW2id0q3AO%2B6CPeF%2BfF56%2BV5wtL8VZLiTIyEga%2F%2BZjw77n%2Fwkf5Yrb4UiC%2F8BQWk40fhfl%2BIbHtaEqFYIf4RG%2BLbhaK4KawDBF4JkT1tBGWo0EENgEsDZBIhd0R3KhvOGGyTDSL80bKCqi8FtgW8ZbeGeyHjZSn%2F%2BMDO96b0VwbBx%2FV6zHd4BtDJhfdf9%2F7D1NNKMWCB5y%2BJfRiodSvwSyADTo4C1QfOLY4FCPZctxdZo6K5OcNRJRNeCdOpHtMHeNt3g%2FObFgGONTvVgH%2B9GEQCIMdraMSm1fl8HAGWa%2Fd5zpcdVySIC7paD9%2FRRCODqJnD3cD1qqds7Mys0apX36lHdZbTPHT9TdKdjyslI%2BurkHNZ%2FGv71KvbzOjNExnRpvhKHtixMHFvoOCEB2pjXzv5%2FAyo2ef4TJDIFOhZ1dG%2B9BMlyVTMvt0FObBOFG%2FG8mSnzyOJ%2FC9QGhejKMomOn4v7r17zy609As7OsVzSStvU8Y8hyto6%2BtV3trvHAcUpROEyCUdAw8APcOyb7Ov4ukYocjjMniMzrU3FyDGvmNx7XVrQDP3yMiqRZ1f0NrHOJoYcYJ8tjmdQ85GCEIydb%2FaSZMTJQweD6nBioZQ8bQfIcgL8pAscjpEkzIrTFscGnstDD6ktfEBjqkAas5LMVXkuEPwTxXjVQEmONPNoJhNYA1TU%2F16Apu51dEWJ7dCoyNHY9i5ko%2FLx3rEBcJImXZIWv3Tl4WT2Wd%2BcOISGvhU0ygeBcWF6Y18d481FyyKDS9IQAZdHCMuqCfLmrqLKWsojnHISqyvCZEDwii2Adg8rpPF4JZ8AfIizxptsIzP5bKaqRs07NOtm1vsqCQg78ho2USid0OrrrlrYpAQ52f&X-Amz-Signature=8f2d92902cabb337d762e20eb3d148bb95cfce0e3b74e7b7b033286f454e58b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNRZCBV5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQD1osvCJ5qQpF1TbccxJjrv1E9x%2FyfTF0kufLlWN6lZIgIhAM%2FgPXILO0EJQV2gjMuSaXJKyrq46TnDDdhuMckagtxKKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykdXjUUc2bucW2id0q3AO%2B6CPeF%2BfF56%2BV5wtL8VZLiTIyEga%2F%2BZjw77n%2Fwkf5Yrb4UiC%2F8BQWk40fhfl%2BIbHtaEqFYIf4RG%2BLbhaK4KawDBF4JkT1tBGWo0EENgEsDZBIhd0R3KhvOGGyTDSL80bKCqi8FtgW8ZbeGeyHjZSn%2F%2BMDO96b0VwbBx%2FV6zHd4BtDJhfdf9%2F7D1NNKMWCB5y%2BJfRiodSvwSyADTo4C1QfOLY4FCPZctxdZo6K5OcNRJRNeCdOpHtMHeNt3g%2FObFgGONTvVgH%2B9GEQCIMdraMSm1fl8HAGWa%2Fd5zpcdVySIC7paD9%2FRRCODqJnD3cD1qqds7Mys0apX36lHdZbTPHT9TdKdjyslI%2BurkHNZ%2FGv71KvbzOjNExnRpvhKHtixMHFvoOCEB2pjXzv5%2FAyo2ef4TJDIFOhZ1dG%2B9BMlyVTMvt0FObBOFG%2FG8mSnzyOJ%2FC9QGhejKMomOn4v7r17zy609As7OsVzSStvU8Y8hyto6%2BtV3trvHAcUpROEyCUdAw8APcOyb7Ov4ukYocjjMniMzrU3FyDGvmNx7XVrQDP3yMiqRZ1f0NrHOJoYcYJ8tjmdQ85GCEIydb%2FaSZMTJQweD6nBioZQ8bQfIcgL8pAscjpEkzIrTFscGnstDD6ktfEBjqkAas5LMVXkuEPwTxXjVQEmONPNoJhNYA1TU%2F16Apu51dEWJ7dCoyNHY9i5ko%2FLx3rEBcJImXZIWv3Tl4WT2Wd%2BcOISGvhU0ygeBcWF6Y18d481FyyKDS9IQAZdHCMuqCfLmrqLKWsojnHISqyvCZEDwii2Adg8rpPF4JZ8AfIizxptsIzP5bKaqRs07NOtm1vsqCQg78ho2USid0OrrrlrYpAQ52f&X-Amz-Signature=1c49c792d23fc2684dba26d0ff08992572d1635ae4a49599a6629757e8495802&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNRZCBV5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQD1osvCJ5qQpF1TbccxJjrv1E9x%2FyfTF0kufLlWN6lZIgIhAM%2FgPXILO0EJQV2gjMuSaXJKyrq46TnDDdhuMckagtxKKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykdXjUUc2bucW2id0q3AO%2B6CPeF%2BfF56%2BV5wtL8VZLiTIyEga%2F%2BZjw77n%2Fwkf5Yrb4UiC%2F8BQWk40fhfl%2BIbHtaEqFYIf4RG%2BLbhaK4KawDBF4JkT1tBGWo0EENgEsDZBIhd0R3KhvOGGyTDSL80bKCqi8FtgW8ZbeGeyHjZSn%2F%2BMDO96b0VwbBx%2FV6zHd4BtDJhfdf9%2F7D1NNKMWCB5y%2BJfRiodSvwSyADTo4C1QfOLY4FCPZctxdZo6K5OcNRJRNeCdOpHtMHeNt3g%2FObFgGONTvVgH%2B9GEQCIMdraMSm1fl8HAGWa%2Fd5zpcdVySIC7paD9%2FRRCODqJnD3cD1qqds7Mys0apX36lHdZbTPHT9TdKdjyslI%2BurkHNZ%2FGv71KvbzOjNExnRpvhKHtixMHFvoOCEB2pjXzv5%2FAyo2ef4TJDIFOhZ1dG%2B9BMlyVTMvt0FObBOFG%2FG8mSnzyOJ%2FC9QGhejKMomOn4v7r17zy609As7OsVzSStvU8Y8hyto6%2BtV3trvHAcUpROEyCUdAw8APcOyb7Ov4ukYocjjMniMzrU3FyDGvmNx7XVrQDP3yMiqRZ1f0NrHOJoYcYJ8tjmdQ85GCEIydb%2FaSZMTJQweD6nBioZQ8bQfIcgL8pAscjpEkzIrTFscGnstDD6ktfEBjqkAas5LMVXkuEPwTxXjVQEmONPNoJhNYA1TU%2F16Apu51dEWJ7dCoyNHY9i5ko%2FLx3rEBcJImXZIWv3Tl4WT2Wd%2BcOISGvhU0ygeBcWF6Y18d481FyyKDS9IQAZdHCMuqCfLmrqLKWsojnHISqyvCZEDwii2Adg8rpPF4JZ8AfIizxptsIzP5bKaqRs07NOtm1vsqCQg78ho2USid0OrrrlrYpAQ52f&X-Amz-Signature=f8b7778a87eac414c176df4731cf414e1abed16a0b25d7f3d913300e92908782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNRZCBV5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQD1osvCJ5qQpF1TbccxJjrv1E9x%2FyfTF0kufLlWN6lZIgIhAM%2FgPXILO0EJQV2gjMuSaXJKyrq46TnDDdhuMckagtxKKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykdXjUUc2bucW2id0q3AO%2B6CPeF%2BfF56%2BV5wtL8VZLiTIyEga%2F%2BZjw77n%2Fwkf5Yrb4UiC%2F8BQWk40fhfl%2BIbHtaEqFYIf4RG%2BLbhaK4KawDBF4JkT1tBGWo0EENgEsDZBIhd0R3KhvOGGyTDSL80bKCqi8FtgW8ZbeGeyHjZSn%2F%2BMDO96b0VwbBx%2FV6zHd4BtDJhfdf9%2F7D1NNKMWCB5y%2BJfRiodSvwSyADTo4C1QfOLY4FCPZctxdZo6K5OcNRJRNeCdOpHtMHeNt3g%2FObFgGONTvVgH%2B9GEQCIMdraMSm1fl8HAGWa%2Fd5zpcdVySIC7paD9%2FRRCODqJnD3cD1qqds7Mys0apX36lHdZbTPHT9TdKdjyslI%2BurkHNZ%2FGv71KvbzOjNExnRpvhKHtixMHFvoOCEB2pjXzv5%2FAyo2ef4TJDIFOhZ1dG%2B9BMlyVTMvt0FObBOFG%2FG8mSnzyOJ%2FC9QGhejKMomOn4v7r17zy609As7OsVzSStvU8Y8hyto6%2BtV3trvHAcUpROEyCUdAw8APcOyb7Ov4ukYocjjMniMzrU3FyDGvmNx7XVrQDP3yMiqRZ1f0NrHOJoYcYJ8tjmdQ85GCEIydb%2FaSZMTJQweD6nBioZQ8bQfIcgL8pAscjpEkzIrTFscGnstDD6ktfEBjqkAas5LMVXkuEPwTxXjVQEmONPNoJhNYA1TU%2F16Apu51dEWJ7dCoyNHY9i5ko%2FLx3rEBcJImXZIWv3Tl4WT2Wd%2BcOISGvhU0ygeBcWF6Y18d481FyyKDS9IQAZdHCMuqCfLmrqLKWsojnHISqyvCZEDwii2Adg8rpPF4JZ8AfIizxptsIzP5bKaqRs07NOtm1vsqCQg78ho2USid0OrrrlrYpAQ52f&X-Amz-Signature=7b983ed68c4525ac074277d4720b54c98b4e6206d21e47e959fbb78f93e4d041&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNRZCBV5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQD1osvCJ5qQpF1TbccxJjrv1E9x%2FyfTF0kufLlWN6lZIgIhAM%2FgPXILO0EJQV2gjMuSaXJKyrq46TnDDdhuMckagtxKKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykdXjUUc2bucW2id0q3AO%2B6CPeF%2BfF56%2BV5wtL8VZLiTIyEga%2F%2BZjw77n%2Fwkf5Yrb4UiC%2F8BQWk40fhfl%2BIbHtaEqFYIf4RG%2BLbhaK4KawDBF4JkT1tBGWo0EENgEsDZBIhd0R3KhvOGGyTDSL80bKCqi8FtgW8ZbeGeyHjZSn%2F%2BMDO96b0VwbBx%2FV6zHd4BtDJhfdf9%2F7D1NNKMWCB5y%2BJfRiodSvwSyADTo4C1QfOLY4FCPZctxdZo6K5OcNRJRNeCdOpHtMHeNt3g%2FObFgGONTvVgH%2B9GEQCIMdraMSm1fl8HAGWa%2Fd5zpcdVySIC7paD9%2FRRCODqJnD3cD1qqds7Mys0apX36lHdZbTPHT9TdKdjyslI%2BurkHNZ%2FGv71KvbzOjNExnRpvhKHtixMHFvoOCEB2pjXzv5%2FAyo2ef4TJDIFOhZ1dG%2B9BMlyVTMvt0FObBOFG%2FG8mSnzyOJ%2FC9QGhejKMomOn4v7r17zy609As7OsVzSStvU8Y8hyto6%2BtV3trvHAcUpROEyCUdAw8APcOyb7Ov4ukYocjjMniMzrU3FyDGvmNx7XVrQDP3yMiqRZ1f0NrHOJoYcYJ8tjmdQ85GCEIydb%2FaSZMTJQweD6nBioZQ8bQfIcgL8pAscjpEkzIrTFscGnstDD6ktfEBjqkAas5LMVXkuEPwTxXjVQEmONPNoJhNYA1TU%2F16Apu51dEWJ7dCoyNHY9i5ko%2FLx3rEBcJImXZIWv3Tl4WT2Wd%2BcOISGvhU0ygeBcWF6Y18d481FyyKDS9IQAZdHCMuqCfLmrqLKWsojnHISqyvCZEDwii2Adg8rpPF4JZ8AfIizxptsIzP5bKaqRs07NOtm1vsqCQg78ho2USid0OrrrlrYpAQ52f&X-Amz-Signature=d81e264e4328b6cdf677186aabf9dba8271d2f7b60f2836aed41748eb834fcb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNRZCBV5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQD1osvCJ5qQpF1TbccxJjrv1E9x%2FyfTF0kufLlWN6lZIgIhAM%2FgPXILO0EJQV2gjMuSaXJKyrq46TnDDdhuMckagtxKKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykdXjUUc2bucW2id0q3AO%2B6CPeF%2BfF56%2BV5wtL8VZLiTIyEga%2F%2BZjw77n%2Fwkf5Yrb4UiC%2F8BQWk40fhfl%2BIbHtaEqFYIf4RG%2BLbhaK4KawDBF4JkT1tBGWo0EENgEsDZBIhd0R3KhvOGGyTDSL80bKCqi8FtgW8ZbeGeyHjZSn%2F%2BMDO96b0VwbBx%2FV6zHd4BtDJhfdf9%2F7D1NNKMWCB5y%2BJfRiodSvwSyADTo4C1QfOLY4FCPZctxdZo6K5OcNRJRNeCdOpHtMHeNt3g%2FObFgGONTvVgH%2B9GEQCIMdraMSm1fl8HAGWa%2Fd5zpcdVySIC7paD9%2FRRCODqJnD3cD1qqds7Mys0apX36lHdZbTPHT9TdKdjyslI%2BurkHNZ%2FGv71KvbzOjNExnRpvhKHtixMHFvoOCEB2pjXzv5%2FAyo2ef4TJDIFOhZ1dG%2B9BMlyVTMvt0FObBOFG%2FG8mSnzyOJ%2FC9QGhejKMomOn4v7r17zy609As7OsVzSStvU8Y8hyto6%2BtV3trvHAcUpROEyCUdAw8APcOyb7Ov4ukYocjjMniMzrU3FyDGvmNx7XVrQDP3yMiqRZ1f0NrHOJoYcYJ8tjmdQ85GCEIydb%2FaSZMTJQweD6nBioZQ8bQfIcgL8pAscjpEkzIrTFscGnstDD6ktfEBjqkAas5LMVXkuEPwTxXjVQEmONPNoJhNYA1TU%2F16Apu51dEWJ7dCoyNHY9i5ko%2FLx3rEBcJImXZIWv3Tl4WT2Wd%2BcOISGvhU0ygeBcWF6Y18d481FyyKDS9IQAZdHCMuqCfLmrqLKWsojnHISqyvCZEDwii2Adg8rpPF4JZ8AfIizxptsIzP5bKaqRs07NOtm1vsqCQg78ho2USid0OrrrlrYpAQ52f&X-Amz-Signature=a5ea135d3fd312b3c8f5ac0c23d67256063f427b9dd8ec2546aa5bba22dd20e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNRZCBV5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQD1osvCJ5qQpF1TbccxJjrv1E9x%2FyfTF0kufLlWN6lZIgIhAM%2FgPXILO0EJQV2gjMuSaXJKyrq46TnDDdhuMckagtxKKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykdXjUUc2bucW2id0q3AO%2B6CPeF%2BfF56%2BV5wtL8VZLiTIyEga%2F%2BZjw77n%2Fwkf5Yrb4UiC%2F8BQWk40fhfl%2BIbHtaEqFYIf4RG%2BLbhaK4KawDBF4JkT1tBGWo0EENgEsDZBIhd0R3KhvOGGyTDSL80bKCqi8FtgW8ZbeGeyHjZSn%2F%2BMDO96b0VwbBx%2FV6zHd4BtDJhfdf9%2F7D1NNKMWCB5y%2BJfRiodSvwSyADTo4C1QfOLY4FCPZctxdZo6K5OcNRJRNeCdOpHtMHeNt3g%2FObFgGONTvVgH%2B9GEQCIMdraMSm1fl8HAGWa%2Fd5zpcdVySIC7paD9%2FRRCODqJnD3cD1qqds7Mys0apX36lHdZbTPHT9TdKdjyslI%2BurkHNZ%2FGv71KvbzOjNExnRpvhKHtixMHFvoOCEB2pjXzv5%2FAyo2ef4TJDIFOhZ1dG%2B9BMlyVTMvt0FObBOFG%2FG8mSnzyOJ%2FC9QGhejKMomOn4v7r17zy609As7OsVzSStvU8Y8hyto6%2BtV3trvHAcUpROEyCUdAw8APcOyb7Ov4ukYocjjMniMzrU3FyDGvmNx7XVrQDP3yMiqRZ1f0NrHOJoYcYJ8tjmdQ85GCEIydb%2FaSZMTJQweD6nBioZQ8bQfIcgL8pAscjpEkzIrTFscGnstDD6ktfEBjqkAas5LMVXkuEPwTxXjVQEmONPNoJhNYA1TU%2F16Apu51dEWJ7dCoyNHY9i5ko%2FLx3rEBcJImXZIWv3Tl4WT2Wd%2BcOISGvhU0ygeBcWF6Y18d481FyyKDS9IQAZdHCMuqCfLmrqLKWsojnHISqyvCZEDwii2Adg8rpPF4JZ8AfIizxptsIzP5bKaqRs07NOtm1vsqCQg78ho2USid0OrrrlrYpAQ52f&X-Amz-Signature=0851a74aa7427915905865dc91bc2b1b3c9d9fcb5faa148e285adcbdddf849d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNRZCBV5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQD1osvCJ5qQpF1TbccxJjrv1E9x%2FyfTF0kufLlWN6lZIgIhAM%2FgPXILO0EJQV2gjMuSaXJKyrq46TnDDdhuMckagtxKKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykdXjUUc2bucW2id0q3AO%2B6CPeF%2BfF56%2BV5wtL8VZLiTIyEga%2F%2BZjw77n%2Fwkf5Yrb4UiC%2F8BQWk40fhfl%2BIbHtaEqFYIf4RG%2BLbhaK4KawDBF4JkT1tBGWo0EENgEsDZBIhd0R3KhvOGGyTDSL80bKCqi8FtgW8ZbeGeyHjZSn%2F%2BMDO96b0VwbBx%2FV6zHd4BtDJhfdf9%2F7D1NNKMWCB5y%2BJfRiodSvwSyADTo4C1QfOLY4FCPZctxdZo6K5OcNRJRNeCdOpHtMHeNt3g%2FObFgGONTvVgH%2B9GEQCIMdraMSm1fl8HAGWa%2Fd5zpcdVySIC7paD9%2FRRCODqJnD3cD1qqds7Mys0apX36lHdZbTPHT9TdKdjyslI%2BurkHNZ%2FGv71KvbzOjNExnRpvhKHtixMHFvoOCEB2pjXzv5%2FAyo2ef4TJDIFOhZ1dG%2B9BMlyVTMvt0FObBOFG%2FG8mSnzyOJ%2FC9QGhejKMomOn4v7r17zy609As7OsVzSStvU8Y8hyto6%2BtV3trvHAcUpROEyCUdAw8APcOyb7Ov4ukYocjjMniMzrU3FyDGvmNx7XVrQDP3yMiqRZ1f0NrHOJoYcYJ8tjmdQ85GCEIydb%2FaSZMTJQweD6nBioZQ8bQfIcgL8pAscjpEkzIrTFscGnstDD6ktfEBjqkAas5LMVXkuEPwTxXjVQEmONPNoJhNYA1TU%2F16Apu51dEWJ7dCoyNHY9i5ko%2FLx3rEBcJImXZIWv3Tl4WT2Wd%2BcOISGvhU0ygeBcWF6Y18d481FyyKDS9IQAZdHCMuqCfLmrqLKWsojnHISqyvCZEDwii2Adg8rpPF4JZ8AfIizxptsIzP5bKaqRs07NOtm1vsqCQg78ho2USid0OrrrlrYpAQ52f&X-Amz-Signature=9bc51b22bd1fec9e8ac78e67452ef3512c9d6c07db51c122b0bd537394414270&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNRZCBV5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQD1osvCJ5qQpF1TbccxJjrv1E9x%2FyfTF0kufLlWN6lZIgIhAM%2FgPXILO0EJQV2gjMuSaXJKyrq46TnDDdhuMckagtxKKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykdXjUUc2bucW2id0q3AO%2B6CPeF%2BfF56%2BV5wtL8VZLiTIyEga%2F%2BZjw77n%2Fwkf5Yrb4UiC%2F8BQWk40fhfl%2BIbHtaEqFYIf4RG%2BLbhaK4KawDBF4JkT1tBGWo0EENgEsDZBIhd0R3KhvOGGyTDSL80bKCqi8FtgW8ZbeGeyHjZSn%2F%2BMDO96b0VwbBx%2FV6zHd4BtDJhfdf9%2F7D1NNKMWCB5y%2BJfRiodSvwSyADTo4C1QfOLY4FCPZctxdZo6K5OcNRJRNeCdOpHtMHeNt3g%2FObFgGONTvVgH%2B9GEQCIMdraMSm1fl8HAGWa%2Fd5zpcdVySIC7paD9%2FRRCODqJnD3cD1qqds7Mys0apX36lHdZbTPHT9TdKdjyslI%2BurkHNZ%2FGv71KvbzOjNExnRpvhKHtixMHFvoOCEB2pjXzv5%2FAyo2ef4TJDIFOhZ1dG%2B9BMlyVTMvt0FObBOFG%2FG8mSnzyOJ%2FC9QGhejKMomOn4v7r17zy609As7OsVzSStvU8Y8hyto6%2BtV3trvHAcUpROEyCUdAw8APcOyb7Ov4ukYocjjMniMzrU3FyDGvmNx7XVrQDP3yMiqRZ1f0NrHOJoYcYJ8tjmdQ85GCEIydb%2FaSZMTJQweD6nBioZQ8bQfIcgL8pAscjpEkzIrTFscGnstDD6ktfEBjqkAas5LMVXkuEPwTxXjVQEmONPNoJhNYA1TU%2F16Apu51dEWJ7dCoyNHY9i5ko%2FLx3rEBcJImXZIWv3Tl4WT2Wd%2BcOISGvhU0ygeBcWF6Y18d481FyyKDS9IQAZdHCMuqCfLmrqLKWsojnHISqyvCZEDwii2Adg8rpPF4JZ8AfIizxptsIzP5bKaqRs07NOtm1vsqCQg78ho2USid0OrrrlrYpAQ52f&X-Amz-Signature=b98cf65e3b0d8c7cb8a28dc0eb0358a5df3c24e73881bf82ba1107a5d4e329b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNRZCBV5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQD1osvCJ5qQpF1TbccxJjrv1E9x%2FyfTF0kufLlWN6lZIgIhAM%2FgPXILO0EJQV2gjMuSaXJKyrq46TnDDdhuMckagtxKKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykdXjUUc2bucW2id0q3AO%2B6CPeF%2BfF56%2BV5wtL8VZLiTIyEga%2F%2BZjw77n%2Fwkf5Yrb4UiC%2F8BQWk40fhfl%2BIbHtaEqFYIf4RG%2BLbhaK4KawDBF4JkT1tBGWo0EENgEsDZBIhd0R3KhvOGGyTDSL80bKCqi8FtgW8ZbeGeyHjZSn%2F%2BMDO96b0VwbBx%2FV6zHd4BtDJhfdf9%2F7D1NNKMWCB5y%2BJfRiodSvwSyADTo4C1QfOLY4FCPZctxdZo6K5OcNRJRNeCdOpHtMHeNt3g%2FObFgGONTvVgH%2B9GEQCIMdraMSm1fl8HAGWa%2Fd5zpcdVySIC7paD9%2FRRCODqJnD3cD1qqds7Mys0apX36lHdZbTPHT9TdKdjyslI%2BurkHNZ%2FGv71KvbzOjNExnRpvhKHtixMHFvoOCEB2pjXzv5%2FAyo2ef4TJDIFOhZ1dG%2B9BMlyVTMvt0FObBOFG%2FG8mSnzyOJ%2FC9QGhejKMomOn4v7r17zy609As7OsVzSStvU8Y8hyto6%2BtV3trvHAcUpROEyCUdAw8APcOyb7Ov4ukYocjjMniMzrU3FyDGvmNx7XVrQDP3yMiqRZ1f0NrHOJoYcYJ8tjmdQ85GCEIydb%2FaSZMTJQweD6nBioZQ8bQfIcgL8pAscjpEkzIrTFscGnstDD6ktfEBjqkAas5LMVXkuEPwTxXjVQEmONPNoJhNYA1TU%2F16Apu51dEWJ7dCoyNHY9i5ko%2FLx3rEBcJImXZIWv3Tl4WT2Wd%2BcOISGvhU0ygeBcWF6Y18d481FyyKDS9IQAZdHCMuqCfLmrqLKWsojnHISqyvCZEDwii2Adg8rpPF4JZ8AfIizxptsIzP5bKaqRs07NOtm1vsqCQg78ho2USid0OrrrlrYpAQ52f&X-Amz-Signature=c58090c179253a40605817989b061dc9e312a4a58cf0bde4550ff1b50a0623b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNRZCBV5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQD1osvCJ5qQpF1TbccxJjrv1E9x%2FyfTF0kufLlWN6lZIgIhAM%2FgPXILO0EJQV2gjMuSaXJKyrq46TnDDdhuMckagtxKKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykdXjUUc2bucW2id0q3AO%2B6CPeF%2BfF56%2BV5wtL8VZLiTIyEga%2F%2BZjw77n%2Fwkf5Yrb4UiC%2F8BQWk40fhfl%2BIbHtaEqFYIf4RG%2BLbhaK4KawDBF4JkT1tBGWo0EENgEsDZBIhd0R3KhvOGGyTDSL80bKCqi8FtgW8ZbeGeyHjZSn%2F%2BMDO96b0VwbBx%2FV6zHd4BtDJhfdf9%2F7D1NNKMWCB5y%2BJfRiodSvwSyADTo4C1QfOLY4FCPZctxdZo6K5OcNRJRNeCdOpHtMHeNt3g%2FObFgGONTvVgH%2B9GEQCIMdraMSm1fl8HAGWa%2Fd5zpcdVySIC7paD9%2FRRCODqJnD3cD1qqds7Mys0apX36lHdZbTPHT9TdKdjyslI%2BurkHNZ%2FGv71KvbzOjNExnRpvhKHtixMHFvoOCEB2pjXzv5%2FAyo2ef4TJDIFOhZ1dG%2B9BMlyVTMvt0FObBOFG%2FG8mSnzyOJ%2FC9QGhejKMomOn4v7r17zy609As7OsVzSStvU8Y8hyto6%2BtV3trvHAcUpROEyCUdAw8APcOyb7Ov4ukYocjjMniMzrU3FyDGvmNx7XVrQDP3yMiqRZ1f0NrHOJoYcYJ8tjmdQ85GCEIydb%2FaSZMTJQweD6nBioZQ8bQfIcgL8pAscjpEkzIrTFscGnstDD6ktfEBjqkAas5LMVXkuEPwTxXjVQEmONPNoJhNYA1TU%2F16Apu51dEWJ7dCoyNHY9i5ko%2FLx3rEBcJImXZIWv3Tl4WT2Wd%2BcOISGvhU0ygeBcWF6Y18d481FyyKDS9IQAZdHCMuqCfLmrqLKWsojnHISqyvCZEDwii2Adg8rpPF4JZ8AfIizxptsIzP5bKaqRs07NOtm1vsqCQg78ho2USid0OrrrlrYpAQ52f&X-Amz-Signature=59552fe6bb1ed74dc7d7cd53a4ae7f8c8637dcdb8485154cea5e6a55b2c8f5b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNRZCBV5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQD1osvCJ5qQpF1TbccxJjrv1E9x%2FyfTF0kufLlWN6lZIgIhAM%2FgPXILO0EJQV2gjMuSaXJKyrq46TnDDdhuMckagtxKKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykdXjUUc2bucW2id0q3AO%2B6CPeF%2BfF56%2BV5wtL8VZLiTIyEga%2F%2BZjw77n%2Fwkf5Yrb4UiC%2F8BQWk40fhfl%2BIbHtaEqFYIf4RG%2BLbhaK4KawDBF4JkT1tBGWo0EENgEsDZBIhd0R3KhvOGGyTDSL80bKCqi8FtgW8ZbeGeyHjZSn%2F%2BMDO96b0VwbBx%2FV6zHd4BtDJhfdf9%2F7D1NNKMWCB5y%2BJfRiodSvwSyADTo4C1QfOLY4FCPZctxdZo6K5OcNRJRNeCdOpHtMHeNt3g%2FObFgGONTvVgH%2B9GEQCIMdraMSm1fl8HAGWa%2Fd5zpcdVySIC7paD9%2FRRCODqJnD3cD1qqds7Mys0apX36lHdZbTPHT9TdKdjyslI%2BurkHNZ%2FGv71KvbzOjNExnRpvhKHtixMHFvoOCEB2pjXzv5%2FAyo2ef4TJDIFOhZ1dG%2B9BMlyVTMvt0FObBOFG%2FG8mSnzyOJ%2FC9QGhejKMomOn4v7r17zy609As7OsVzSStvU8Y8hyto6%2BtV3trvHAcUpROEyCUdAw8APcOyb7Ov4ukYocjjMniMzrU3FyDGvmNx7XVrQDP3yMiqRZ1f0NrHOJoYcYJ8tjmdQ85GCEIydb%2FaSZMTJQweD6nBioZQ8bQfIcgL8pAscjpEkzIrTFscGnstDD6ktfEBjqkAas5LMVXkuEPwTxXjVQEmONPNoJhNYA1TU%2F16Apu51dEWJ7dCoyNHY9i5ko%2FLx3rEBcJImXZIWv3Tl4WT2Wd%2BcOISGvhU0ygeBcWF6Y18d481FyyKDS9IQAZdHCMuqCfLmrqLKWsojnHISqyvCZEDwii2Adg8rpPF4JZ8AfIizxptsIzP5bKaqRs07NOtm1vsqCQg78ho2USid0OrrrlrYpAQ52f&X-Amz-Signature=aa9db9572dcfd6e7bf665044c9e8991feccadb1511c8296a76b3a63c846911dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNRZCBV5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQD1osvCJ5qQpF1TbccxJjrv1E9x%2FyfTF0kufLlWN6lZIgIhAM%2FgPXILO0EJQV2gjMuSaXJKyrq46TnDDdhuMckagtxKKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykdXjUUc2bucW2id0q3AO%2B6CPeF%2BfF56%2BV5wtL8VZLiTIyEga%2F%2BZjw77n%2Fwkf5Yrb4UiC%2F8BQWk40fhfl%2BIbHtaEqFYIf4RG%2BLbhaK4KawDBF4JkT1tBGWo0EENgEsDZBIhd0R3KhvOGGyTDSL80bKCqi8FtgW8ZbeGeyHjZSn%2F%2BMDO96b0VwbBx%2FV6zHd4BtDJhfdf9%2F7D1NNKMWCB5y%2BJfRiodSvwSyADTo4C1QfOLY4FCPZctxdZo6K5OcNRJRNeCdOpHtMHeNt3g%2FObFgGONTvVgH%2B9GEQCIMdraMSm1fl8HAGWa%2Fd5zpcdVySIC7paD9%2FRRCODqJnD3cD1qqds7Mys0apX36lHdZbTPHT9TdKdjyslI%2BurkHNZ%2FGv71KvbzOjNExnRpvhKHtixMHFvoOCEB2pjXzv5%2FAyo2ef4TJDIFOhZ1dG%2B9BMlyVTMvt0FObBOFG%2FG8mSnzyOJ%2FC9QGhejKMomOn4v7r17zy609As7OsVzSStvU8Y8hyto6%2BtV3trvHAcUpROEyCUdAw8APcOyb7Ov4ukYocjjMniMzrU3FyDGvmNx7XVrQDP3yMiqRZ1f0NrHOJoYcYJ8tjmdQ85GCEIydb%2FaSZMTJQweD6nBioZQ8bQfIcgL8pAscjpEkzIrTFscGnstDD6ktfEBjqkAas5LMVXkuEPwTxXjVQEmONPNoJhNYA1TU%2F16Apu51dEWJ7dCoyNHY9i5ko%2FLx3rEBcJImXZIWv3Tl4WT2Wd%2BcOISGvhU0ygeBcWF6Y18d481FyyKDS9IQAZdHCMuqCfLmrqLKWsojnHISqyvCZEDwii2Adg8rpPF4JZ8AfIizxptsIzP5bKaqRs07NOtm1vsqCQg78ho2USid0OrrrlrYpAQ52f&X-Amz-Signature=63ea938b8c2b537ea88e134a534cdebf63b718e5ab9a5bbf16cbe1dbe857fb4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNRZCBV5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T110929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQD1osvCJ5qQpF1TbccxJjrv1E9x%2FyfTF0kufLlWN6lZIgIhAM%2FgPXILO0EJQV2gjMuSaXJKyrq46TnDDdhuMckagtxKKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykdXjUUc2bucW2id0q3AO%2B6CPeF%2BfF56%2BV5wtL8VZLiTIyEga%2F%2BZjw77n%2Fwkf5Yrb4UiC%2F8BQWk40fhfl%2BIbHtaEqFYIf4RG%2BLbhaK4KawDBF4JkT1tBGWo0EENgEsDZBIhd0R3KhvOGGyTDSL80bKCqi8FtgW8ZbeGeyHjZSn%2F%2BMDO96b0VwbBx%2FV6zHd4BtDJhfdf9%2F7D1NNKMWCB5y%2BJfRiodSvwSyADTo4C1QfOLY4FCPZctxdZo6K5OcNRJRNeCdOpHtMHeNt3g%2FObFgGONTvVgH%2B9GEQCIMdraMSm1fl8HAGWa%2Fd5zpcdVySIC7paD9%2FRRCODqJnD3cD1qqds7Mys0apX36lHdZbTPHT9TdKdjyslI%2BurkHNZ%2FGv71KvbzOjNExnRpvhKHtixMHFvoOCEB2pjXzv5%2FAyo2ef4TJDIFOhZ1dG%2B9BMlyVTMvt0FObBOFG%2FG8mSnzyOJ%2FC9QGhejKMomOn4v7r17zy609As7OsVzSStvU8Y8hyto6%2BtV3trvHAcUpROEyCUdAw8APcOyb7Ov4ukYocjjMniMzrU3FyDGvmNx7XVrQDP3yMiqRZ1f0NrHOJoYcYJ8tjmdQ85GCEIydb%2FaSZMTJQweD6nBioZQ8bQfIcgL8pAscjpEkzIrTFscGnstDD6ktfEBjqkAas5LMVXkuEPwTxXjVQEmONPNoJhNYA1TU%2F16Apu51dEWJ7dCoyNHY9i5ko%2FLx3rEBcJImXZIWv3Tl4WT2Wd%2BcOISGvhU0ygeBcWF6Y18d481FyyKDS9IQAZdHCMuqCfLmrqLKWsojnHISqyvCZEDwii2Adg8rpPF4JZ8AfIizxptsIzP5bKaqRs07NOtm1vsqCQg78ho2USid0OrrrlrYpAQ52f&X-Amz-Signature=0ed2fe0e5184b6d662ca055d57a5c55d3768593c5b6c99465ff7712e625b7277&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
