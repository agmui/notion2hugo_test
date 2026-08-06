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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGO26VC4%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCYgBlI2t0E4ZdyLGUguq60P2Neqc6hPeTyMin8eUeNNQIgbt40wVUIa5uujbvKa1l0saTsvSwQpI3PXHEHRhLK3mkq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDAnK1rhEcdqAuUD1VyrcAzjHHcQp32xWOGT7c2WBC%2FN34Yt5RvSg%2BpJ5E7jdddvg27zh7XpHQ9lHy1dIeyaM4r%2BLcU88ROReJF7xjjy5MtoCscqBs82HiVewaYjY%2FLeYoloGQXUhin0MdCpn5LBtbe2ZfMYiw8RdcZR%2F3oVZ1ws8NUJf6vynjti4sv%2BXu0a%2FnsVbTE9WOAKObMvUR4Nxcgh1frxyImaCApG6%2FYM54NEicIMXqb7Ta4uHxtfkEpGuCemhUXE%2FtUNSMSLaNyVnGsWSd0QewWqC53f0c4MGemwJLZAQeMrbMnbRhCjYl6mH8fhFz3aJ0cz%2BywywxbVZUrswk0GcJlGOHrvcfFMX5Ks7ywyd9KupYOQE3nBAQDVA7mGbm6Lj%2Btg8cg%2FhwVTbhLcxKYZlTUm5AtLYeN3aR65s4cHNEzNzvhk4%2BUM5vfsON%2BhI7izvX4X8alnKwsT8RVpwaEE9sOrpB9Pgbo8MnKSOop7W2LSWCTFUU3OBkWLb04gBB%2BWyPMeI%2BU3wlrwOGG7l9BHQehNxxveyLk%2FBrFsaQlFljb443OqB%2FyTiNuOXT2MbXex%2FLI7T21sxJ0WGd%2FbBGrSqQA42Z%2BaO1qCIDrve2I0kGHq%2BIklQly8LaJ82K7QtvC1hKUp7E9SzMKfUz9MGOqUBcQI4Xd5awZTbgtNUUsC86k%2F49NG62om4j1jhTQwBGHMO11PlAVw8CdDouqMCH7Pte5FTTbRni0wki31As967VPjBMKtqG0%2BEYCvydU5N4T9n3ThIagdLR5y%2Fciv7diSIFomIARKi61QY6eC6Jet8dOaSiLIQj5OdEr4QWmi%2BhrTB2qPtDXaIYx7hbK2OYkYYaBn%2FQFB7NMwvh2AFn4fYE0AlDUR%2B&X-Amz-Signature=f4806be82277250ca0e12c611dd2a01b7386bc8fd1716fa5d60be572b38d669e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGO26VC4%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCYgBlI2t0E4ZdyLGUguq60P2Neqc6hPeTyMin8eUeNNQIgbt40wVUIa5uujbvKa1l0saTsvSwQpI3PXHEHRhLK3mkq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDAnK1rhEcdqAuUD1VyrcAzjHHcQp32xWOGT7c2WBC%2FN34Yt5RvSg%2BpJ5E7jdddvg27zh7XpHQ9lHy1dIeyaM4r%2BLcU88ROReJF7xjjy5MtoCscqBs82HiVewaYjY%2FLeYoloGQXUhin0MdCpn5LBtbe2ZfMYiw8RdcZR%2F3oVZ1ws8NUJf6vynjti4sv%2BXu0a%2FnsVbTE9WOAKObMvUR4Nxcgh1frxyImaCApG6%2FYM54NEicIMXqb7Ta4uHxtfkEpGuCemhUXE%2FtUNSMSLaNyVnGsWSd0QewWqC53f0c4MGemwJLZAQeMrbMnbRhCjYl6mH8fhFz3aJ0cz%2BywywxbVZUrswk0GcJlGOHrvcfFMX5Ks7ywyd9KupYOQE3nBAQDVA7mGbm6Lj%2Btg8cg%2FhwVTbhLcxKYZlTUm5AtLYeN3aR65s4cHNEzNzvhk4%2BUM5vfsON%2BhI7izvX4X8alnKwsT8RVpwaEE9sOrpB9Pgbo8MnKSOop7W2LSWCTFUU3OBkWLb04gBB%2BWyPMeI%2BU3wlrwOGG7l9BHQehNxxveyLk%2FBrFsaQlFljb443OqB%2FyTiNuOXT2MbXex%2FLI7T21sxJ0WGd%2FbBGrSqQA42Z%2BaO1qCIDrve2I0kGHq%2BIklQly8LaJ82K7QtvC1hKUp7E9SzMKfUz9MGOqUBcQI4Xd5awZTbgtNUUsC86k%2F49NG62om4j1jhTQwBGHMO11PlAVw8CdDouqMCH7Pte5FTTbRni0wki31As967VPjBMKtqG0%2BEYCvydU5N4T9n3ThIagdLR5y%2Fciv7diSIFomIARKi61QY6eC6Jet8dOaSiLIQj5OdEr4QWmi%2BhrTB2qPtDXaIYx7hbK2OYkYYaBn%2FQFB7NMwvh2AFn4fYE0AlDUR%2B&X-Amz-Signature=1a2f719cc7f4aa54c1a150c795d00dbcdf7f75826e17d3cbb19708f2c87aaf5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGO26VC4%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCYgBlI2t0E4ZdyLGUguq60P2Neqc6hPeTyMin8eUeNNQIgbt40wVUIa5uujbvKa1l0saTsvSwQpI3PXHEHRhLK3mkq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDAnK1rhEcdqAuUD1VyrcAzjHHcQp32xWOGT7c2WBC%2FN34Yt5RvSg%2BpJ5E7jdddvg27zh7XpHQ9lHy1dIeyaM4r%2BLcU88ROReJF7xjjy5MtoCscqBs82HiVewaYjY%2FLeYoloGQXUhin0MdCpn5LBtbe2ZfMYiw8RdcZR%2F3oVZ1ws8NUJf6vynjti4sv%2BXu0a%2FnsVbTE9WOAKObMvUR4Nxcgh1frxyImaCApG6%2FYM54NEicIMXqb7Ta4uHxtfkEpGuCemhUXE%2FtUNSMSLaNyVnGsWSd0QewWqC53f0c4MGemwJLZAQeMrbMnbRhCjYl6mH8fhFz3aJ0cz%2BywywxbVZUrswk0GcJlGOHrvcfFMX5Ks7ywyd9KupYOQE3nBAQDVA7mGbm6Lj%2Btg8cg%2FhwVTbhLcxKYZlTUm5AtLYeN3aR65s4cHNEzNzvhk4%2BUM5vfsON%2BhI7izvX4X8alnKwsT8RVpwaEE9sOrpB9Pgbo8MnKSOop7W2LSWCTFUU3OBkWLb04gBB%2BWyPMeI%2BU3wlrwOGG7l9BHQehNxxveyLk%2FBrFsaQlFljb443OqB%2FyTiNuOXT2MbXex%2FLI7T21sxJ0WGd%2FbBGrSqQA42Z%2BaO1qCIDrve2I0kGHq%2BIklQly8LaJ82K7QtvC1hKUp7E9SzMKfUz9MGOqUBcQI4Xd5awZTbgtNUUsC86k%2F49NG62om4j1jhTQwBGHMO11PlAVw8CdDouqMCH7Pte5FTTbRni0wki31As967VPjBMKtqG0%2BEYCvydU5N4T9n3ThIagdLR5y%2Fciv7diSIFomIARKi61QY6eC6Jet8dOaSiLIQj5OdEr4QWmi%2BhrTB2qPtDXaIYx7hbK2OYkYYaBn%2FQFB7NMwvh2AFn4fYE0AlDUR%2B&X-Amz-Signature=71d5231571e08d47af924fd652cea9c96ed933f308569b06a0a4bc7a8a5e2739&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGO26VC4%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCYgBlI2t0E4ZdyLGUguq60P2Neqc6hPeTyMin8eUeNNQIgbt40wVUIa5uujbvKa1l0saTsvSwQpI3PXHEHRhLK3mkq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDAnK1rhEcdqAuUD1VyrcAzjHHcQp32xWOGT7c2WBC%2FN34Yt5RvSg%2BpJ5E7jdddvg27zh7XpHQ9lHy1dIeyaM4r%2BLcU88ROReJF7xjjy5MtoCscqBs82HiVewaYjY%2FLeYoloGQXUhin0MdCpn5LBtbe2ZfMYiw8RdcZR%2F3oVZ1ws8NUJf6vynjti4sv%2BXu0a%2FnsVbTE9WOAKObMvUR4Nxcgh1frxyImaCApG6%2FYM54NEicIMXqb7Ta4uHxtfkEpGuCemhUXE%2FtUNSMSLaNyVnGsWSd0QewWqC53f0c4MGemwJLZAQeMrbMnbRhCjYl6mH8fhFz3aJ0cz%2BywywxbVZUrswk0GcJlGOHrvcfFMX5Ks7ywyd9KupYOQE3nBAQDVA7mGbm6Lj%2Btg8cg%2FhwVTbhLcxKYZlTUm5AtLYeN3aR65s4cHNEzNzvhk4%2BUM5vfsON%2BhI7izvX4X8alnKwsT8RVpwaEE9sOrpB9Pgbo8MnKSOop7W2LSWCTFUU3OBkWLb04gBB%2BWyPMeI%2BU3wlrwOGG7l9BHQehNxxveyLk%2FBrFsaQlFljb443OqB%2FyTiNuOXT2MbXex%2FLI7T21sxJ0WGd%2FbBGrSqQA42Z%2BaO1qCIDrve2I0kGHq%2BIklQly8LaJ82K7QtvC1hKUp7E9SzMKfUz9MGOqUBcQI4Xd5awZTbgtNUUsC86k%2F49NG62om4j1jhTQwBGHMO11PlAVw8CdDouqMCH7Pte5FTTbRni0wki31As967VPjBMKtqG0%2BEYCvydU5N4T9n3ThIagdLR5y%2Fciv7diSIFomIARKi61QY6eC6Jet8dOaSiLIQj5OdEr4QWmi%2BhrTB2qPtDXaIYx7hbK2OYkYYaBn%2FQFB7NMwvh2AFn4fYE0AlDUR%2B&X-Amz-Signature=68d79262ec6ce935d7399986dddff5a5a45cfabd921ac2018c5909bb39e4cbd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGO26VC4%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCYgBlI2t0E4ZdyLGUguq60P2Neqc6hPeTyMin8eUeNNQIgbt40wVUIa5uujbvKa1l0saTsvSwQpI3PXHEHRhLK3mkq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDAnK1rhEcdqAuUD1VyrcAzjHHcQp32xWOGT7c2WBC%2FN34Yt5RvSg%2BpJ5E7jdddvg27zh7XpHQ9lHy1dIeyaM4r%2BLcU88ROReJF7xjjy5MtoCscqBs82HiVewaYjY%2FLeYoloGQXUhin0MdCpn5LBtbe2ZfMYiw8RdcZR%2F3oVZ1ws8NUJf6vynjti4sv%2BXu0a%2FnsVbTE9WOAKObMvUR4Nxcgh1frxyImaCApG6%2FYM54NEicIMXqb7Ta4uHxtfkEpGuCemhUXE%2FtUNSMSLaNyVnGsWSd0QewWqC53f0c4MGemwJLZAQeMrbMnbRhCjYl6mH8fhFz3aJ0cz%2BywywxbVZUrswk0GcJlGOHrvcfFMX5Ks7ywyd9KupYOQE3nBAQDVA7mGbm6Lj%2Btg8cg%2FhwVTbhLcxKYZlTUm5AtLYeN3aR65s4cHNEzNzvhk4%2BUM5vfsON%2BhI7izvX4X8alnKwsT8RVpwaEE9sOrpB9Pgbo8MnKSOop7W2LSWCTFUU3OBkWLb04gBB%2BWyPMeI%2BU3wlrwOGG7l9BHQehNxxveyLk%2FBrFsaQlFljb443OqB%2FyTiNuOXT2MbXex%2FLI7T21sxJ0WGd%2FbBGrSqQA42Z%2BaO1qCIDrve2I0kGHq%2BIklQly8LaJ82K7QtvC1hKUp7E9SzMKfUz9MGOqUBcQI4Xd5awZTbgtNUUsC86k%2F49NG62om4j1jhTQwBGHMO11PlAVw8CdDouqMCH7Pte5FTTbRni0wki31As967VPjBMKtqG0%2BEYCvydU5N4T9n3ThIagdLR5y%2Fciv7diSIFomIARKi61QY6eC6Jet8dOaSiLIQj5OdEr4QWmi%2BhrTB2qPtDXaIYx7hbK2OYkYYaBn%2FQFB7NMwvh2AFn4fYE0AlDUR%2B&X-Amz-Signature=ba26b83d11223c1c0da55703815bf0bd84d6fef78923204a970d82a6d6c54aca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGO26VC4%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCYgBlI2t0E4ZdyLGUguq60P2Neqc6hPeTyMin8eUeNNQIgbt40wVUIa5uujbvKa1l0saTsvSwQpI3PXHEHRhLK3mkq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDAnK1rhEcdqAuUD1VyrcAzjHHcQp32xWOGT7c2WBC%2FN34Yt5RvSg%2BpJ5E7jdddvg27zh7XpHQ9lHy1dIeyaM4r%2BLcU88ROReJF7xjjy5MtoCscqBs82HiVewaYjY%2FLeYoloGQXUhin0MdCpn5LBtbe2ZfMYiw8RdcZR%2F3oVZ1ws8NUJf6vynjti4sv%2BXu0a%2FnsVbTE9WOAKObMvUR4Nxcgh1frxyImaCApG6%2FYM54NEicIMXqb7Ta4uHxtfkEpGuCemhUXE%2FtUNSMSLaNyVnGsWSd0QewWqC53f0c4MGemwJLZAQeMrbMnbRhCjYl6mH8fhFz3aJ0cz%2BywywxbVZUrswk0GcJlGOHrvcfFMX5Ks7ywyd9KupYOQE3nBAQDVA7mGbm6Lj%2Btg8cg%2FhwVTbhLcxKYZlTUm5AtLYeN3aR65s4cHNEzNzvhk4%2BUM5vfsON%2BhI7izvX4X8alnKwsT8RVpwaEE9sOrpB9Pgbo8MnKSOop7W2LSWCTFUU3OBkWLb04gBB%2BWyPMeI%2BU3wlrwOGG7l9BHQehNxxveyLk%2FBrFsaQlFljb443OqB%2FyTiNuOXT2MbXex%2FLI7T21sxJ0WGd%2FbBGrSqQA42Z%2BaO1qCIDrve2I0kGHq%2BIklQly8LaJ82K7QtvC1hKUp7E9SzMKfUz9MGOqUBcQI4Xd5awZTbgtNUUsC86k%2F49NG62om4j1jhTQwBGHMO11PlAVw8CdDouqMCH7Pte5FTTbRni0wki31As967VPjBMKtqG0%2BEYCvydU5N4T9n3ThIagdLR5y%2Fciv7diSIFomIARKi61QY6eC6Jet8dOaSiLIQj5OdEr4QWmi%2BhrTB2qPtDXaIYx7hbK2OYkYYaBn%2FQFB7NMwvh2AFn4fYE0AlDUR%2B&X-Amz-Signature=1bf7d7e8739fcb9c80e5b31a006324b8ec2ac2125b62d869350fbba47fe737e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGO26VC4%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCYgBlI2t0E4ZdyLGUguq60P2Neqc6hPeTyMin8eUeNNQIgbt40wVUIa5uujbvKa1l0saTsvSwQpI3PXHEHRhLK3mkq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDAnK1rhEcdqAuUD1VyrcAzjHHcQp32xWOGT7c2WBC%2FN34Yt5RvSg%2BpJ5E7jdddvg27zh7XpHQ9lHy1dIeyaM4r%2BLcU88ROReJF7xjjy5MtoCscqBs82HiVewaYjY%2FLeYoloGQXUhin0MdCpn5LBtbe2ZfMYiw8RdcZR%2F3oVZ1ws8NUJf6vynjti4sv%2BXu0a%2FnsVbTE9WOAKObMvUR4Nxcgh1frxyImaCApG6%2FYM54NEicIMXqb7Ta4uHxtfkEpGuCemhUXE%2FtUNSMSLaNyVnGsWSd0QewWqC53f0c4MGemwJLZAQeMrbMnbRhCjYl6mH8fhFz3aJ0cz%2BywywxbVZUrswk0GcJlGOHrvcfFMX5Ks7ywyd9KupYOQE3nBAQDVA7mGbm6Lj%2Btg8cg%2FhwVTbhLcxKYZlTUm5AtLYeN3aR65s4cHNEzNzvhk4%2BUM5vfsON%2BhI7izvX4X8alnKwsT8RVpwaEE9sOrpB9Pgbo8MnKSOop7W2LSWCTFUU3OBkWLb04gBB%2BWyPMeI%2BU3wlrwOGG7l9BHQehNxxveyLk%2FBrFsaQlFljb443OqB%2FyTiNuOXT2MbXex%2FLI7T21sxJ0WGd%2FbBGrSqQA42Z%2BaO1qCIDrve2I0kGHq%2BIklQly8LaJ82K7QtvC1hKUp7E9SzMKfUz9MGOqUBcQI4Xd5awZTbgtNUUsC86k%2F49NG62om4j1jhTQwBGHMO11PlAVw8CdDouqMCH7Pte5FTTbRni0wki31As967VPjBMKtqG0%2BEYCvydU5N4T9n3ThIagdLR5y%2Fciv7diSIFomIARKi61QY6eC6Jet8dOaSiLIQj5OdEr4QWmi%2BhrTB2qPtDXaIYx7hbK2OYkYYaBn%2FQFB7NMwvh2AFn4fYE0AlDUR%2B&X-Amz-Signature=e3812bcb1dc77e1e04eaec578e2ddccc64b58d32b45570253717b86fd38ba4d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGO26VC4%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCYgBlI2t0E4ZdyLGUguq60P2Neqc6hPeTyMin8eUeNNQIgbt40wVUIa5uujbvKa1l0saTsvSwQpI3PXHEHRhLK3mkq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDAnK1rhEcdqAuUD1VyrcAzjHHcQp32xWOGT7c2WBC%2FN34Yt5RvSg%2BpJ5E7jdddvg27zh7XpHQ9lHy1dIeyaM4r%2BLcU88ROReJF7xjjy5MtoCscqBs82HiVewaYjY%2FLeYoloGQXUhin0MdCpn5LBtbe2ZfMYiw8RdcZR%2F3oVZ1ws8NUJf6vynjti4sv%2BXu0a%2FnsVbTE9WOAKObMvUR4Nxcgh1frxyImaCApG6%2FYM54NEicIMXqb7Ta4uHxtfkEpGuCemhUXE%2FtUNSMSLaNyVnGsWSd0QewWqC53f0c4MGemwJLZAQeMrbMnbRhCjYl6mH8fhFz3aJ0cz%2BywywxbVZUrswk0GcJlGOHrvcfFMX5Ks7ywyd9KupYOQE3nBAQDVA7mGbm6Lj%2Btg8cg%2FhwVTbhLcxKYZlTUm5AtLYeN3aR65s4cHNEzNzvhk4%2BUM5vfsON%2BhI7izvX4X8alnKwsT8RVpwaEE9sOrpB9Pgbo8MnKSOop7W2LSWCTFUU3OBkWLb04gBB%2BWyPMeI%2BU3wlrwOGG7l9BHQehNxxveyLk%2FBrFsaQlFljb443OqB%2FyTiNuOXT2MbXex%2FLI7T21sxJ0WGd%2FbBGrSqQA42Z%2BaO1qCIDrve2I0kGHq%2BIklQly8LaJ82K7QtvC1hKUp7E9SzMKfUz9MGOqUBcQI4Xd5awZTbgtNUUsC86k%2F49NG62om4j1jhTQwBGHMO11PlAVw8CdDouqMCH7Pte5FTTbRni0wki31As967VPjBMKtqG0%2BEYCvydU5N4T9n3ThIagdLR5y%2Fciv7diSIFomIARKi61QY6eC6Jet8dOaSiLIQj5OdEr4QWmi%2BhrTB2qPtDXaIYx7hbK2OYkYYaBn%2FQFB7NMwvh2AFn4fYE0AlDUR%2B&X-Amz-Signature=6bd49edcecc612edfd842163a1dd542ccb5d2ba2f35f0acf1da5a502b27ea8d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGO26VC4%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCYgBlI2t0E4ZdyLGUguq60P2Neqc6hPeTyMin8eUeNNQIgbt40wVUIa5uujbvKa1l0saTsvSwQpI3PXHEHRhLK3mkq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDAnK1rhEcdqAuUD1VyrcAzjHHcQp32xWOGT7c2WBC%2FN34Yt5RvSg%2BpJ5E7jdddvg27zh7XpHQ9lHy1dIeyaM4r%2BLcU88ROReJF7xjjy5MtoCscqBs82HiVewaYjY%2FLeYoloGQXUhin0MdCpn5LBtbe2ZfMYiw8RdcZR%2F3oVZ1ws8NUJf6vynjti4sv%2BXu0a%2FnsVbTE9WOAKObMvUR4Nxcgh1frxyImaCApG6%2FYM54NEicIMXqb7Ta4uHxtfkEpGuCemhUXE%2FtUNSMSLaNyVnGsWSd0QewWqC53f0c4MGemwJLZAQeMrbMnbRhCjYl6mH8fhFz3aJ0cz%2BywywxbVZUrswk0GcJlGOHrvcfFMX5Ks7ywyd9KupYOQE3nBAQDVA7mGbm6Lj%2Btg8cg%2FhwVTbhLcxKYZlTUm5AtLYeN3aR65s4cHNEzNzvhk4%2BUM5vfsON%2BhI7izvX4X8alnKwsT8RVpwaEE9sOrpB9Pgbo8MnKSOop7W2LSWCTFUU3OBkWLb04gBB%2BWyPMeI%2BU3wlrwOGG7l9BHQehNxxveyLk%2FBrFsaQlFljb443OqB%2FyTiNuOXT2MbXex%2FLI7T21sxJ0WGd%2FbBGrSqQA42Z%2BaO1qCIDrve2I0kGHq%2BIklQly8LaJ82K7QtvC1hKUp7E9SzMKfUz9MGOqUBcQI4Xd5awZTbgtNUUsC86k%2F49NG62om4j1jhTQwBGHMO11PlAVw8CdDouqMCH7Pte5FTTbRni0wki31As967VPjBMKtqG0%2BEYCvydU5N4T9n3ThIagdLR5y%2Fciv7diSIFomIARKi61QY6eC6Jet8dOaSiLIQj5OdEr4QWmi%2BhrTB2qPtDXaIYx7hbK2OYkYYaBn%2FQFB7NMwvh2AFn4fYE0AlDUR%2B&X-Amz-Signature=7cd7eb39667ddb282964380409acb27d56f00a460ec2467d13cc1cd57c79cf01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGO26VC4%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCYgBlI2t0E4ZdyLGUguq60P2Neqc6hPeTyMin8eUeNNQIgbt40wVUIa5uujbvKa1l0saTsvSwQpI3PXHEHRhLK3mkq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDAnK1rhEcdqAuUD1VyrcAzjHHcQp32xWOGT7c2WBC%2FN34Yt5RvSg%2BpJ5E7jdddvg27zh7XpHQ9lHy1dIeyaM4r%2BLcU88ROReJF7xjjy5MtoCscqBs82HiVewaYjY%2FLeYoloGQXUhin0MdCpn5LBtbe2ZfMYiw8RdcZR%2F3oVZ1ws8NUJf6vynjti4sv%2BXu0a%2FnsVbTE9WOAKObMvUR4Nxcgh1frxyImaCApG6%2FYM54NEicIMXqb7Ta4uHxtfkEpGuCemhUXE%2FtUNSMSLaNyVnGsWSd0QewWqC53f0c4MGemwJLZAQeMrbMnbRhCjYl6mH8fhFz3aJ0cz%2BywywxbVZUrswk0GcJlGOHrvcfFMX5Ks7ywyd9KupYOQE3nBAQDVA7mGbm6Lj%2Btg8cg%2FhwVTbhLcxKYZlTUm5AtLYeN3aR65s4cHNEzNzvhk4%2BUM5vfsON%2BhI7izvX4X8alnKwsT8RVpwaEE9sOrpB9Pgbo8MnKSOop7W2LSWCTFUU3OBkWLb04gBB%2BWyPMeI%2BU3wlrwOGG7l9BHQehNxxveyLk%2FBrFsaQlFljb443OqB%2FyTiNuOXT2MbXex%2FLI7T21sxJ0WGd%2FbBGrSqQA42Z%2BaO1qCIDrve2I0kGHq%2BIklQly8LaJ82K7QtvC1hKUp7E9SzMKfUz9MGOqUBcQI4Xd5awZTbgtNUUsC86k%2F49NG62om4j1jhTQwBGHMO11PlAVw8CdDouqMCH7Pte5FTTbRni0wki31As967VPjBMKtqG0%2BEYCvydU5N4T9n3ThIagdLR5y%2Fciv7diSIFomIARKi61QY6eC6Jet8dOaSiLIQj5OdEr4QWmi%2BhrTB2qPtDXaIYx7hbK2OYkYYaBn%2FQFB7NMwvh2AFn4fYE0AlDUR%2B&X-Amz-Signature=19369df506954f2e441d8aa35e64b2121e3b8638c98e87e739a29ef5e72f87ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGO26VC4%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCYgBlI2t0E4ZdyLGUguq60P2Neqc6hPeTyMin8eUeNNQIgbt40wVUIa5uujbvKa1l0saTsvSwQpI3PXHEHRhLK3mkq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDAnK1rhEcdqAuUD1VyrcAzjHHcQp32xWOGT7c2WBC%2FN34Yt5RvSg%2BpJ5E7jdddvg27zh7XpHQ9lHy1dIeyaM4r%2BLcU88ROReJF7xjjy5MtoCscqBs82HiVewaYjY%2FLeYoloGQXUhin0MdCpn5LBtbe2ZfMYiw8RdcZR%2F3oVZ1ws8NUJf6vynjti4sv%2BXu0a%2FnsVbTE9WOAKObMvUR4Nxcgh1frxyImaCApG6%2FYM54NEicIMXqb7Ta4uHxtfkEpGuCemhUXE%2FtUNSMSLaNyVnGsWSd0QewWqC53f0c4MGemwJLZAQeMrbMnbRhCjYl6mH8fhFz3aJ0cz%2BywywxbVZUrswk0GcJlGOHrvcfFMX5Ks7ywyd9KupYOQE3nBAQDVA7mGbm6Lj%2Btg8cg%2FhwVTbhLcxKYZlTUm5AtLYeN3aR65s4cHNEzNzvhk4%2BUM5vfsON%2BhI7izvX4X8alnKwsT8RVpwaEE9sOrpB9Pgbo8MnKSOop7W2LSWCTFUU3OBkWLb04gBB%2BWyPMeI%2BU3wlrwOGG7l9BHQehNxxveyLk%2FBrFsaQlFljb443OqB%2FyTiNuOXT2MbXex%2FLI7T21sxJ0WGd%2FbBGrSqQA42Z%2BaO1qCIDrve2I0kGHq%2BIklQly8LaJ82K7QtvC1hKUp7E9SzMKfUz9MGOqUBcQI4Xd5awZTbgtNUUsC86k%2F49NG62om4j1jhTQwBGHMO11PlAVw8CdDouqMCH7Pte5FTTbRni0wki31As967VPjBMKtqG0%2BEYCvydU5N4T9n3ThIagdLR5y%2Fciv7diSIFomIARKi61QY6eC6Jet8dOaSiLIQj5OdEr4QWmi%2BhrTB2qPtDXaIYx7hbK2OYkYYaBn%2FQFB7NMwvh2AFn4fYE0AlDUR%2B&X-Amz-Signature=aa9e3d97e71d5523eaaf8aade4f7a60b44e71bc8bfe463a5f543a2e3574b6b1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGO26VC4%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCYgBlI2t0E4ZdyLGUguq60P2Neqc6hPeTyMin8eUeNNQIgbt40wVUIa5uujbvKa1l0saTsvSwQpI3PXHEHRhLK3mkq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDAnK1rhEcdqAuUD1VyrcAzjHHcQp32xWOGT7c2WBC%2FN34Yt5RvSg%2BpJ5E7jdddvg27zh7XpHQ9lHy1dIeyaM4r%2BLcU88ROReJF7xjjy5MtoCscqBs82HiVewaYjY%2FLeYoloGQXUhin0MdCpn5LBtbe2ZfMYiw8RdcZR%2F3oVZ1ws8NUJf6vynjti4sv%2BXu0a%2FnsVbTE9WOAKObMvUR4Nxcgh1frxyImaCApG6%2FYM54NEicIMXqb7Ta4uHxtfkEpGuCemhUXE%2FtUNSMSLaNyVnGsWSd0QewWqC53f0c4MGemwJLZAQeMrbMnbRhCjYl6mH8fhFz3aJ0cz%2BywywxbVZUrswk0GcJlGOHrvcfFMX5Ks7ywyd9KupYOQE3nBAQDVA7mGbm6Lj%2Btg8cg%2FhwVTbhLcxKYZlTUm5AtLYeN3aR65s4cHNEzNzvhk4%2BUM5vfsON%2BhI7izvX4X8alnKwsT8RVpwaEE9sOrpB9Pgbo8MnKSOop7W2LSWCTFUU3OBkWLb04gBB%2BWyPMeI%2BU3wlrwOGG7l9BHQehNxxveyLk%2FBrFsaQlFljb443OqB%2FyTiNuOXT2MbXex%2FLI7T21sxJ0WGd%2FbBGrSqQA42Z%2BaO1qCIDrve2I0kGHq%2BIklQly8LaJ82K7QtvC1hKUp7E9SzMKfUz9MGOqUBcQI4Xd5awZTbgtNUUsC86k%2F49NG62om4j1jhTQwBGHMO11PlAVw8CdDouqMCH7Pte5FTTbRni0wki31As967VPjBMKtqG0%2BEYCvydU5N4T9n3ThIagdLR5y%2Fciv7diSIFomIARKi61QY6eC6Jet8dOaSiLIQj5OdEr4QWmi%2BhrTB2qPtDXaIYx7hbK2OYkYYaBn%2FQFB7NMwvh2AFn4fYE0AlDUR%2B&X-Amz-Signature=d051c8a99061c9429db2720d2e070fa66fed897bb8fb8b9f274e0c47b7a7a637&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGO26VC4%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCYgBlI2t0E4ZdyLGUguq60P2Neqc6hPeTyMin8eUeNNQIgbt40wVUIa5uujbvKa1l0saTsvSwQpI3PXHEHRhLK3mkq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDAnK1rhEcdqAuUD1VyrcAzjHHcQp32xWOGT7c2WBC%2FN34Yt5RvSg%2BpJ5E7jdddvg27zh7XpHQ9lHy1dIeyaM4r%2BLcU88ROReJF7xjjy5MtoCscqBs82HiVewaYjY%2FLeYoloGQXUhin0MdCpn5LBtbe2ZfMYiw8RdcZR%2F3oVZ1ws8NUJf6vynjti4sv%2BXu0a%2FnsVbTE9WOAKObMvUR4Nxcgh1frxyImaCApG6%2FYM54NEicIMXqb7Ta4uHxtfkEpGuCemhUXE%2FtUNSMSLaNyVnGsWSd0QewWqC53f0c4MGemwJLZAQeMrbMnbRhCjYl6mH8fhFz3aJ0cz%2BywywxbVZUrswk0GcJlGOHrvcfFMX5Ks7ywyd9KupYOQE3nBAQDVA7mGbm6Lj%2Btg8cg%2FhwVTbhLcxKYZlTUm5AtLYeN3aR65s4cHNEzNzvhk4%2BUM5vfsON%2BhI7izvX4X8alnKwsT8RVpwaEE9sOrpB9Pgbo8MnKSOop7W2LSWCTFUU3OBkWLb04gBB%2BWyPMeI%2BU3wlrwOGG7l9BHQehNxxveyLk%2FBrFsaQlFljb443OqB%2FyTiNuOXT2MbXex%2FLI7T21sxJ0WGd%2FbBGrSqQA42Z%2BaO1qCIDrve2I0kGHq%2BIklQly8LaJ82K7QtvC1hKUp7E9SzMKfUz9MGOqUBcQI4Xd5awZTbgtNUUsC86k%2F49NG62om4j1jhTQwBGHMO11PlAVw8CdDouqMCH7Pte5FTTbRni0wki31As967VPjBMKtqG0%2BEYCvydU5N4T9n3ThIagdLR5y%2Fciv7diSIFomIARKi61QY6eC6Jet8dOaSiLIQj5OdEr4QWmi%2BhrTB2qPtDXaIYx7hbK2OYkYYaBn%2FQFB7NMwvh2AFn4fYE0AlDUR%2B&X-Amz-Signature=72479ad03351e40b9aa9670a274b1d19cf40a6ed323c7d93f380f301797d5bb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGO26VC4%2F20260806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260806T023319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQCYgBlI2t0E4ZdyLGUguq60P2Neqc6hPeTyMin8eUeNNQIgbt40wVUIa5uujbvKa1l0saTsvSwQpI3PXHEHRhLK3mkq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDAnK1rhEcdqAuUD1VyrcAzjHHcQp32xWOGT7c2WBC%2FN34Yt5RvSg%2BpJ5E7jdddvg27zh7XpHQ9lHy1dIeyaM4r%2BLcU88ROReJF7xjjy5MtoCscqBs82HiVewaYjY%2FLeYoloGQXUhin0MdCpn5LBtbe2ZfMYiw8RdcZR%2F3oVZ1ws8NUJf6vynjti4sv%2BXu0a%2FnsVbTE9WOAKObMvUR4Nxcgh1frxyImaCApG6%2FYM54NEicIMXqb7Ta4uHxtfkEpGuCemhUXE%2FtUNSMSLaNyVnGsWSd0QewWqC53f0c4MGemwJLZAQeMrbMnbRhCjYl6mH8fhFz3aJ0cz%2BywywxbVZUrswk0GcJlGOHrvcfFMX5Ks7ywyd9KupYOQE3nBAQDVA7mGbm6Lj%2Btg8cg%2FhwVTbhLcxKYZlTUm5AtLYeN3aR65s4cHNEzNzvhk4%2BUM5vfsON%2BhI7izvX4X8alnKwsT8RVpwaEE9sOrpB9Pgbo8MnKSOop7W2LSWCTFUU3OBkWLb04gBB%2BWyPMeI%2BU3wlrwOGG7l9BHQehNxxveyLk%2FBrFsaQlFljb443OqB%2FyTiNuOXT2MbXex%2FLI7T21sxJ0WGd%2FbBGrSqQA42Z%2BaO1qCIDrve2I0kGHq%2BIklQly8LaJ82K7QtvC1hKUp7E9SzMKfUz9MGOqUBcQI4Xd5awZTbgtNUUsC86k%2F49NG62om4j1jhTQwBGHMO11PlAVw8CdDouqMCH7Pte5FTTbRni0wki31As967VPjBMKtqG0%2BEYCvydU5N4T9n3ThIagdLR5y%2Fciv7diSIFomIARKi61QY6eC6Jet8dOaSiLIQj5OdEr4QWmi%2BhrTB2qPtDXaIYx7hbK2OYkYYaBn%2FQFB7NMwvh2AFn4fYE0AlDUR%2B&X-Amz-Signature=7394249e4da196dc941f4f2b18d60fbdbe3682e26b015dfe2e1ca519e607ba58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
