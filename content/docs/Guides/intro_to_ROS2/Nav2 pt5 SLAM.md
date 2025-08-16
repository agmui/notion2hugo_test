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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV3UZ3ET%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQCo7qnCsn0KqZFWqU9YV12bEqWwf6nLCReZObenbbGSXQIhAP3xN9mFJH6Z4NW4TVRkaZc69akaW8pogwYhFe%2FVxyXZKv8DCGwQABoMNjM3NDIzMTgzODA1IgwpvyAUsMAaQa%2BqkwEq3AMK0sv5OiznBjUOEi8zYR3VbR67um1thRAzGdOeT67bkoz7Elt3M86W5pl8JQ%2BuNvqmcIuL%2BPf%2Br6X%2Fp%2Bj%2B4K%2BVNxIcL5u0c6PTa5yASmwDOnLovOG2ONM3yXGKfMHWbA4otJwPnqiTcmyKUf4A7UmqM2uYa2SPlWLGU11fQtvGzD%2FrrALqESwLNvizP5XFVYt7kgqylJbQeQKcMqnaCqrxwSVqSsrrvzRj4Z3mVnKTKSryc3XeirASEXFVTQ%2FluEWZ7qT0DIrnVlE1f3ErKeyG5By%2BOhbKIk1Cho%2Br3P3nEMtabOWB%2F%2BpHgakMRR%2BxOD%2BAxODj7woAS9cNTqrJAEVAY9MrC848%2BRoP8vUrptCdPvBExiHFsv9qIo4crTmwEac0erp%2BlzFh4HpfVZb1FmvPtKnvFkUdchMk6GxdhK9j5UC3QqBUpOig9KjEYlk7kIePTB1eEPTDwMLl0r5o0ZLfpqE5B4o6krOTdfURhPsJXxpsIFZ4fXjfGxoS4z6kbvkcOxivKCQkMHZ%2FT%2B9ca3esYoRSfXbmKocTxkosdLwSy%2BnB0Vq38bk8OlKFpw01rGXTzSBD%2B3ksG5AO8ydGmaw2LO0clJDzyl2%2BVIlrH7p7SDODvnScnbkUMhlpkjDC4%2F%2FEBjqkAe7cIFmBNgHUPWTjofSsgRCFu20mA%2FVsyVkm5Ln2FPxqmk1EfSMlQDAiB5IHiH9d1ASAkrQOdUdglYUQH59JkjR25%2FERv5vdF8%2BaxpjXG2y7mPT%2FamQ5M00LG2DtVD%2Fu%2BWU2i8jVJvGMo6Hcjz7C4LTQQ2dDIcKLDx2mL1xWTUoNFHALHwetnZntJKBO6qkW%2Foylusv5xRCx%2FDO1Sdeaep23iSmx&X-Amz-Signature=a453b92266d958859d23672fac2a176e05fb2daa38db54be6219f7dcecb91bed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV3UZ3ET%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQCo7qnCsn0KqZFWqU9YV12bEqWwf6nLCReZObenbbGSXQIhAP3xN9mFJH6Z4NW4TVRkaZc69akaW8pogwYhFe%2FVxyXZKv8DCGwQABoMNjM3NDIzMTgzODA1IgwpvyAUsMAaQa%2BqkwEq3AMK0sv5OiznBjUOEi8zYR3VbR67um1thRAzGdOeT67bkoz7Elt3M86W5pl8JQ%2BuNvqmcIuL%2BPf%2Br6X%2Fp%2Bj%2B4K%2BVNxIcL5u0c6PTa5yASmwDOnLovOG2ONM3yXGKfMHWbA4otJwPnqiTcmyKUf4A7UmqM2uYa2SPlWLGU11fQtvGzD%2FrrALqESwLNvizP5XFVYt7kgqylJbQeQKcMqnaCqrxwSVqSsrrvzRj4Z3mVnKTKSryc3XeirASEXFVTQ%2FluEWZ7qT0DIrnVlE1f3ErKeyG5By%2BOhbKIk1Cho%2Br3P3nEMtabOWB%2F%2BpHgakMRR%2BxOD%2BAxODj7woAS9cNTqrJAEVAY9MrC848%2BRoP8vUrptCdPvBExiHFsv9qIo4crTmwEac0erp%2BlzFh4HpfVZb1FmvPtKnvFkUdchMk6GxdhK9j5UC3QqBUpOig9KjEYlk7kIePTB1eEPTDwMLl0r5o0ZLfpqE5B4o6krOTdfURhPsJXxpsIFZ4fXjfGxoS4z6kbvkcOxivKCQkMHZ%2FT%2B9ca3esYoRSfXbmKocTxkosdLwSy%2BnB0Vq38bk8OlKFpw01rGXTzSBD%2B3ksG5AO8ydGmaw2LO0clJDzyl2%2BVIlrH7p7SDODvnScnbkUMhlpkjDC4%2F%2FEBjqkAe7cIFmBNgHUPWTjofSsgRCFu20mA%2FVsyVkm5Ln2FPxqmk1EfSMlQDAiB5IHiH9d1ASAkrQOdUdglYUQH59JkjR25%2FERv5vdF8%2BaxpjXG2y7mPT%2FamQ5M00LG2DtVD%2Fu%2BWU2i8jVJvGMo6Hcjz7C4LTQQ2dDIcKLDx2mL1xWTUoNFHALHwetnZntJKBO6qkW%2Foylusv5xRCx%2FDO1Sdeaep23iSmx&X-Amz-Signature=98263e889fbc5f8f5e4b05515ddbb2f1800b6695420d7cf18e3ceb920366550e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV3UZ3ET%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQCo7qnCsn0KqZFWqU9YV12bEqWwf6nLCReZObenbbGSXQIhAP3xN9mFJH6Z4NW4TVRkaZc69akaW8pogwYhFe%2FVxyXZKv8DCGwQABoMNjM3NDIzMTgzODA1IgwpvyAUsMAaQa%2BqkwEq3AMK0sv5OiznBjUOEi8zYR3VbR67um1thRAzGdOeT67bkoz7Elt3M86W5pl8JQ%2BuNvqmcIuL%2BPf%2Br6X%2Fp%2Bj%2B4K%2BVNxIcL5u0c6PTa5yASmwDOnLovOG2ONM3yXGKfMHWbA4otJwPnqiTcmyKUf4A7UmqM2uYa2SPlWLGU11fQtvGzD%2FrrALqESwLNvizP5XFVYt7kgqylJbQeQKcMqnaCqrxwSVqSsrrvzRj4Z3mVnKTKSryc3XeirASEXFVTQ%2FluEWZ7qT0DIrnVlE1f3ErKeyG5By%2BOhbKIk1Cho%2Br3P3nEMtabOWB%2F%2BpHgakMRR%2BxOD%2BAxODj7woAS9cNTqrJAEVAY9MrC848%2BRoP8vUrptCdPvBExiHFsv9qIo4crTmwEac0erp%2BlzFh4HpfVZb1FmvPtKnvFkUdchMk6GxdhK9j5UC3QqBUpOig9KjEYlk7kIePTB1eEPTDwMLl0r5o0ZLfpqE5B4o6krOTdfURhPsJXxpsIFZ4fXjfGxoS4z6kbvkcOxivKCQkMHZ%2FT%2B9ca3esYoRSfXbmKocTxkosdLwSy%2BnB0Vq38bk8OlKFpw01rGXTzSBD%2B3ksG5AO8ydGmaw2LO0clJDzyl2%2BVIlrH7p7SDODvnScnbkUMhlpkjDC4%2F%2FEBjqkAe7cIFmBNgHUPWTjofSsgRCFu20mA%2FVsyVkm5Ln2FPxqmk1EfSMlQDAiB5IHiH9d1ASAkrQOdUdglYUQH59JkjR25%2FERv5vdF8%2BaxpjXG2y7mPT%2FamQ5M00LG2DtVD%2Fu%2BWU2i8jVJvGMo6Hcjz7C4LTQQ2dDIcKLDx2mL1xWTUoNFHALHwetnZntJKBO6qkW%2Foylusv5xRCx%2FDO1Sdeaep23iSmx&X-Amz-Signature=829e7a10fd9fc246ab48c1c54831f5b9f0cf4959f2eb82d28ffe3a9f6a5712ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV3UZ3ET%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQCo7qnCsn0KqZFWqU9YV12bEqWwf6nLCReZObenbbGSXQIhAP3xN9mFJH6Z4NW4TVRkaZc69akaW8pogwYhFe%2FVxyXZKv8DCGwQABoMNjM3NDIzMTgzODA1IgwpvyAUsMAaQa%2BqkwEq3AMK0sv5OiznBjUOEi8zYR3VbR67um1thRAzGdOeT67bkoz7Elt3M86W5pl8JQ%2BuNvqmcIuL%2BPf%2Br6X%2Fp%2Bj%2B4K%2BVNxIcL5u0c6PTa5yASmwDOnLovOG2ONM3yXGKfMHWbA4otJwPnqiTcmyKUf4A7UmqM2uYa2SPlWLGU11fQtvGzD%2FrrALqESwLNvizP5XFVYt7kgqylJbQeQKcMqnaCqrxwSVqSsrrvzRj4Z3mVnKTKSryc3XeirASEXFVTQ%2FluEWZ7qT0DIrnVlE1f3ErKeyG5By%2BOhbKIk1Cho%2Br3P3nEMtabOWB%2F%2BpHgakMRR%2BxOD%2BAxODj7woAS9cNTqrJAEVAY9MrC848%2BRoP8vUrptCdPvBExiHFsv9qIo4crTmwEac0erp%2BlzFh4HpfVZb1FmvPtKnvFkUdchMk6GxdhK9j5UC3QqBUpOig9KjEYlk7kIePTB1eEPTDwMLl0r5o0ZLfpqE5B4o6krOTdfURhPsJXxpsIFZ4fXjfGxoS4z6kbvkcOxivKCQkMHZ%2FT%2B9ca3esYoRSfXbmKocTxkosdLwSy%2BnB0Vq38bk8OlKFpw01rGXTzSBD%2B3ksG5AO8ydGmaw2LO0clJDzyl2%2BVIlrH7p7SDODvnScnbkUMhlpkjDC4%2F%2FEBjqkAe7cIFmBNgHUPWTjofSsgRCFu20mA%2FVsyVkm5Ln2FPxqmk1EfSMlQDAiB5IHiH9d1ASAkrQOdUdglYUQH59JkjR25%2FERv5vdF8%2BaxpjXG2y7mPT%2FamQ5M00LG2DtVD%2Fu%2BWU2i8jVJvGMo6Hcjz7C4LTQQ2dDIcKLDx2mL1xWTUoNFHALHwetnZntJKBO6qkW%2Foylusv5xRCx%2FDO1Sdeaep23iSmx&X-Amz-Signature=9639695e961edc244b594273256405ed9fed6e4a8dbf386821f6e5c19b3377a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV3UZ3ET%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQCo7qnCsn0KqZFWqU9YV12bEqWwf6nLCReZObenbbGSXQIhAP3xN9mFJH6Z4NW4TVRkaZc69akaW8pogwYhFe%2FVxyXZKv8DCGwQABoMNjM3NDIzMTgzODA1IgwpvyAUsMAaQa%2BqkwEq3AMK0sv5OiznBjUOEi8zYR3VbR67um1thRAzGdOeT67bkoz7Elt3M86W5pl8JQ%2BuNvqmcIuL%2BPf%2Br6X%2Fp%2Bj%2B4K%2BVNxIcL5u0c6PTa5yASmwDOnLovOG2ONM3yXGKfMHWbA4otJwPnqiTcmyKUf4A7UmqM2uYa2SPlWLGU11fQtvGzD%2FrrALqESwLNvizP5XFVYt7kgqylJbQeQKcMqnaCqrxwSVqSsrrvzRj4Z3mVnKTKSryc3XeirASEXFVTQ%2FluEWZ7qT0DIrnVlE1f3ErKeyG5By%2BOhbKIk1Cho%2Br3P3nEMtabOWB%2F%2BpHgakMRR%2BxOD%2BAxODj7woAS9cNTqrJAEVAY9MrC848%2BRoP8vUrptCdPvBExiHFsv9qIo4crTmwEac0erp%2BlzFh4HpfVZb1FmvPtKnvFkUdchMk6GxdhK9j5UC3QqBUpOig9KjEYlk7kIePTB1eEPTDwMLl0r5o0ZLfpqE5B4o6krOTdfURhPsJXxpsIFZ4fXjfGxoS4z6kbvkcOxivKCQkMHZ%2FT%2B9ca3esYoRSfXbmKocTxkosdLwSy%2BnB0Vq38bk8OlKFpw01rGXTzSBD%2B3ksG5AO8ydGmaw2LO0clJDzyl2%2BVIlrH7p7SDODvnScnbkUMhlpkjDC4%2F%2FEBjqkAe7cIFmBNgHUPWTjofSsgRCFu20mA%2FVsyVkm5Ln2FPxqmk1EfSMlQDAiB5IHiH9d1ASAkrQOdUdglYUQH59JkjR25%2FERv5vdF8%2BaxpjXG2y7mPT%2FamQ5M00LG2DtVD%2Fu%2BWU2i8jVJvGMo6Hcjz7C4LTQQ2dDIcKLDx2mL1xWTUoNFHALHwetnZntJKBO6qkW%2Foylusv5xRCx%2FDO1Sdeaep23iSmx&X-Amz-Signature=f65f078ebfa2c2bef595f376d0c87041d3eb8a70f946b98bfbaf9e90eb36e3d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV3UZ3ET%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQCo7qnCsn0KqZFWqU9YV12bEqWwf6nLCReZObenbbGSXQIhAP3xN9mFJH6Z4NW4TVRkaZc69akaW8pogwYhFe%2FVxyXZKv8DCGwQABoMNjM3NDIzMTgzODA1IgwpvyAUsMAaQa%2BqkwEq3AMK0sv5OiznBjUOEi8zYR3VbR67um1thRAzGdOeT67bkoz7Elt3M86W5pl8JQ%2BuNvqmcIuL%2BPf%2Br6X%2Fp%2Bj%2B4K%2BVNxIcL5u0c6PTa5yASmwDOnLovOG2ONM3yXGKfMHWbA4otJwPnqiTcmyKUf4A7UmqM2uYa2SPlWLGU11fQtvGzD%2FrrALqESwLNvizP5XFVYt7kgqylJbQeQKcMqnaCqrxwSVqSsrrvzRj4Z3mVnKTKSryc3XeirASEXFVTQ%2FluEWZ7qT0DIrnVlE1f3ErKeyG5By%2BOhbKIk1Cho%2Br3P3nEMtabOWB%2F%2BpHgakMRR%2BxOD%2BAxODj7woAS9cNTqrJAEVAY9MrC848%2BRoP8vUrptCdPvBExiHFsv9qIo4crTmwEac0erp%2BlzFh4HpfVZb1FmvPtKnvFkUdchMk6GxdhK9j5UC3QqBUpOig9KjEYlk7kIePTB1eEPTDwMLl0r5o0ZLfpqE5B4o6krOTdfURhPsJXxpsIFZ4fXjfGxoS4z6kbvkcOxivKCQkMHZ%2FT%2B9ca3esYoRSfXbmKocTxkosdLwSy%2BnB0Vq38bk8OlKFpw01rGXTzSBD%2B3ksG5AO8ydGmaw2LO0clJDzyl2%2BVIlrH7p7SDODvnScnbkUMhlpkjDC4%2F%2FEBjqkAe7cIFmBNgHUPWTjofSsgRCFu20mA%2FVsyVkm5Ln2FPxqmk1EfSMlQDAiB5IHiH9d1ASAkrQOdUdglYUQH59JkjR25%2FERv5vdF8%2BaxpjXG2y7mPT%2FamQ5M00LG2DtVD%2Fu%2BWU2i8jVJvGMo6Hcjz7C4LTQQ2dDIcKLDx2mL1xWTUoNFHALHwetnZntJKBO6qkW%2Foylusv5xRCx%2FDO1Sdeaep23iSmx&X-Amz-Signature=228668d6ea4a8e7d6a81fc49a0bffda8de1cab7c1f6d7932aa50e12948cbae3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV3UZ3ET%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQCo7qnCsn0KqZFWqU9YV12bEqWwf6nLCReZObenbbGSXQIhAP3xN9mFJH6Z4NW4TVRkaZc69akaW8pogwYhFe%2FVxyXZKv8DCGwQABoMNjM3NDIzMTgzODA1IgwpvyAUsMAaQa%2BqkwEq3AMK0sv5OiznBjUOEi8zYR3VbR67um1thRAzGdOeT67bkoz7Elt3M86W5pl8JQ%2BuNvqmcIuL%2BPf%2Br6X%2Fp%2Bj%2B4K%2BVNxIcL5u0c6PTa5yASmwDOnLovOG2ONM3yXGKfMHWbA4otJwPnqiTcmyKUf4A7UmqM2uYa2SPlWLGU11fQtvGzD%2FrrALqESwLNvizP5XFVYt7kgqylJbQeQKcMqnaCqrxwSVqSsrrvzRj4Z3mVnKTKSryc3XeirASEXFVTQ%2FluEWZ7qT0DIrnVlE1f3ErKeyG5By%2BOhbKIk1Cho%2Br3P3nEMtabOWB%2F%2BpHgakMRR%2BxOD%2BAxODj7woAS9cNTqrJAEVAY9MrC848%2BRoP8vUrptCdPvBExiHFsv9qIo4crTmwEac0erp%2BlzFh4HpfVZb1FmvPtKnvFkUdchMk6GxdhK9j5UC3QqBUpOig9KjEYlk7kIePTB1eEPTDwMLl0r5o0ZLfpqE5B4o6krOTdfURhPsJXxpsIFZ4fXjfGxoS4z6kbvkcOxivKCQkMHZ%2FT%2B9ca3esYoRSfXbmKocTxkosdLwSy%2BnB0Vq38bk8OlKFpw01rGXTzSBD%2B3ksG5AO8ydGmaw2LO0clJDzyl2%2BVIlrH7p7SDODvnScnbkUMhlpkjDC4%2F%2FEBjqkAe7cIFmBNgHUPWTjofSsgRCFu20mA%2FVsyVkm5Ln2FPxqmk1EfSMlQDAiB5IHiH9d1ASAkrQOdUdglYUQH59JkjR25%2FERv5vdF8%2BaxpjXG2y7mPT%2FamQ5M00LG2DtVD%2Fu%2BWU2i8jVJvGMo6Hcjz7C4LTQQ2dDIcKLDx2mL1xWTUoNFHALHwetnZntJKBO6qkW%2Foylusv5xRCx%2FDO1Sdeaep23iSmx&X-Amz-Signature=8c2754bbb69fc95561f6d0badb4399036da7057b12ef082d81cccb1079c35b01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV3UZ3ET%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQCo7qnCsn0KqZFWqU9YV12bEqWwf6nLCReZObenbbGSXQIhAP3xN9mFJH6Z4NW4TVRkaZc69akaW8pogwYhFe%2FVxyXZKv8DCGwQABoMNjM3NDIzMTgzODA1IgwpvyAUsMAaQa%2BqkwEq3AMK0sv5OiznBjUOEi8zYR3VbR67um1thRAzGdOeT67bkoz7Elt3M86W5pl8JQ%2BuNvqmcIuL%2BPf%2Br6X%2Fp%2Bj%2B4K%2BVNxIcL5u0c6PTa5yASmwDOnLovOG2ONM3yXGKfMHWbA4otJwPnqiTcmyKUf4A7UmqM2uYa2SPlWLGU11fQtvGzD%2FrrALqESwLNvizP5XFVYt7kgqylJbQeQKcMqnaCqrxwSVqSsrrvzRj4Z3mVnKTKSryc3XeirASEXFVTQ%2FluEWZ7qT0DIrnVlE1f3ErKeyG5By%2BOhbKIk1Cho%2Br3P3nEMtabOWB%2F%2BpHgakMRR%2BxOD%2BAxODj7woAS9cNTqrJAEVAY9MrC848%2BRoP8vUrptCdPvBExiHFsv9qIo4crTmwEac0erp%2BlzFh4HpfVZb1FmvPtKnvFkUdchMk6GxdhK9j5UC3QqBUpOig9KjEYlk7kIePTB1eEPTDwMLl0r5o0ZLfpqE5B4o6krOTdfURhPsJXxpsIFZ4fXjfGxoS4z6kbvkcOxivKCQkMHZ%2FT%2B9ca3esYoRSfXbmKocTxkosdLwSy%2BnB0Vq38bk8OlKFpw01rGXTzSBD%2B3ksG5AO8ydGmaw2LO0clJDzyl2%2BVIlrH7p7SDODvnScnbkUMhlpkjDC4%2F%2FEBjqkAe7cIFmBNgHUPWTjofSsgRCFu20mA%2FVsyVkm5Ln2FPxqmk1EfSMlQDAiB5IHiH9d1ASAkrQOdUdglYUQH59JkjR25%2FERv5vdF8%2BaxpjXG2y7mPT%2FamQ5M00LG2DtVD%2Fu%2BWU2i8jVJvGMo6Hcjz7C4LTQQ2dDIcKLDx2mL1xWTUoNFHALHwetnZntJKBO6qkW%2Foylusv5xRCx%2FDO1Sdeaep23iSmx&X-Amz-Signature=f62a5f4e73d692152ddf3a1c1d76c246066ae374a482fdfae8a2e7f00ee52e2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV3UZ3ET%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQCo7qnCsn0KqZFWqU9YV12bEqWwf6nLCReZObenbbGSXQIhAP3xN9mFJH6Z4NW4TVRkaZc69akaW8pogwYhFe%2FVxyXZKv8DCGwQABoMNjM3NDIzMTgzODA1IgwpvyAUsMAaQa%2BqkwEq3AMK0sv5OiznBjUOEi8zYR3VbR67um1thRAzGdOeT67bkoz7Elt3M86W5pl8JQ%2BuNvqmcIuL%2BPf%2Br6X%2Fp%2Bj%2B4K%2BVNxIcL5u0c6PTa5yASmwDOnLovOG2ONM3yXGKfMHWbA4otJwPnqiTcmyKUf4A7UmqM2uYa2SPlWLGU11fQtvGzD%2FrrALqESwLNvizP5XFVYt7kgqylJbQeQKcMqnaCqrxwSVqSsrrvzRj4Z3mVnKTKSryc3XeirASEXFVTQ%2FluEWZ7qT0DIrnVlE1f3ErKeyG5By%2BOhbKIk1Cho%2Br3P3nEMtabOWB%2F%2BpHgakMRR%2BxOD%2BAxODj7woAS9cNTqrJAEVAY9MrC848%2BRoP8vUrptCdPvBExiHFsv9qIo4crTmwEac0erp%2BlzFh4HpfVZb1FmvPtKnvFkUdchMk6GxdhK9j5UC3QqBUpOig9KjEYlk7kIePTB1eEPTDwMLl0r5o0ZLfpqE5B4o6krOTdfURhPsJXxpsIFZ4fXjfGxoS4z6kbvkcOxivKCQkMHZ%2FT%2B9ca3esYoRSfXbmKocTxkosdLwSy%2BnB0Vq38bk8OlKFpw01rGXTzSBD%2B3ksG5AO8ydGmaw2LO0clJDzyl2%2BVIlrH7p7SDODvnScnbkUMhlpkjDC4%2F%2FEBjqkAe7cIFmBNgHUPWTjofSsgRCFu20mA%2FVsyVkm5Ln2FPxqmk1EfSMlQDAiB5IHiH9d1ASAkrQOdUdglYUQH59JkjR25%2FERv5vdF8%2BaxpjXG2y7mPT%2FamQ5M00LG2DtVD%2Fu%2BWU2i8jVJvGMo6Hcjz7C4LTQQ2dDIcKLDx2mL1xWTUoNFHALHwetnZntJKBO6qkW%2Foylusv5xRCx%2FDO1Sdeaep23iSmx&X-Amz-Signature=e2310ef2d0a20d75012ce1364972a894a89613522ba4f07fa61acfd84e27d126&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV3UZ3ET%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQCo7qnCsn0KqZFWqU9YV12bEqWwf6nLCReZObenbbGSXQIhAP3xN9mFJH6Z4NW4TVRkaZc69akaW8pogwYhFe%2FVxyXZKv8DCGwQABoMNjM3NDIzMTgzODA1IgwpvyAUsMAaQa%2BqkwEq3AMK0sv5OiznBjUOEi8zYR3VbR67um1thRAzGdOeT67bkoz7Elt3M86W5pl8JQ%2BuNvqmcIuL%2BPf%2Br6X%2Fp%2Bj%2B4K%2BVNxIcL5u0c6PTa5yASmwDOnLovOG2ONM3yXGKfMHWbA4otJwPnqiTcmyKUf4A7UmqM2uYa2SPlWLGU11fQtvGzD%2FrrALqESwLNvizP5XFVYt7kgqylJbQeQKcMqnaCqrxwSVqSsrrvzRj4Z3mVnKTKSryc3XeirASEXFVTQ%2FluEWZ7qT0DIrnVlE1f3ErKeyG5By%2BOhbKIk1Cho%2Br3P3nEMtabOWB%2F%2BpHgakMRR%2BxOD%2BAxODj7woAS9cNTqrJAEVAY9MrC848%2BRoP8vUrptCdPvBExiHFsv9qIo4crTmwEac0erp%2BlzFh4HpfVZb1FmvPtKnvFkUdchMk6GxdhK9j5UC3QqBUpOig9KjEYlk7kIePTB1eEPTDwMLl0r5o0ZLfpqE5B4o6krOTdfURhPsJXxpsIFZ4fXjfGxoS4z6kbvkcOxivKCQkMHZ%2FT%2B9ca3esYoRSfXbmKocTxkosdLwSy%2BnB0Vq38bk8OlKFpw01rGXTzSBD%2B3ksG5AO8ydGmaw2LO0clJDzyl2%2BVIlrH7p7SDODvnScnbkUMhlpkjDC4%2F%2FEBjqkAe7cIFmBNgHUPWTjofSsgRCFu20mA%2FVsyVkm5Ln2FPxqmk1EfSMlQDAiB5IHiH9d1ASAkrQOdUdglYUQH59JkjR25%2FERv5vdF8%2BaxpjXG2y7mPT%2FamQ5M00LG2DtVD%2Fu%2BWU2i8jVJvGMo6Hcjz7C4LTQQ2dDIcKLDx2mL1xWTUoNFHALHwetnZntJKBO6qkW%2Foylusv5xRCx%2FDO1Sdeaep23iSmx&X-Amz-Signature=778c9375166dc5840a44b657181c9fdaed5f2565e17007626f647f549f1ef878&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV3UZ3ET%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQCo7qnCsn0KqZFWqU9YV12bEqWwf6nLCReZObenbbGSXQIhAP3xN9mFJH6Z4NW4TVRkaZc69akaW8pogwYhFe%2FVxyXZKv8DCGwQABoMNjM3NDIzMTgzODA1IgwpvyAUsMAaQa%2BqkwEq3AMK0sv5OiznBjUOEi8zYR3VbR67um1thRAzGdOeT67bkoz7Elt3M86W5pl8JQ%2BuNvqmcIuL%2BPf%2Br6X%2Fp%2Bj%2B4K%2BVNxIcL5u0c6PTa5yASmwDOnLovOG2ONM3yXGKfMHWbA4otJwPnqiTcmyKUf4A7UmqM2uYa2SPlWLGU11fQtvGzD%2FrrALqESwLNvizP5XFVYt7kgqylJbQeQKcMqnaCqrxwSVqSsrrvzRj4Z3mVnKTKSryc3XeirASEXFVTQ%2FluEWZ7qT0DIrnVlE1f3ErKeyG5By%2BOhbKIk1Cho%2Br3P3nEMtabOWB%2F%2BpHgakMRR%2BxOD%2BAxODj7woAS9cNTqrJAEVAY9MrC848%2BRoP8vUrptCdPvBExiHFsv9qIo4crTmwEac0erp%2BlzFh4HpfVZb1FmvPtKnvFkUdchMk6GxdhK9j5UC3QqBUpOig9KjEYlk7kIePTB1eEPTDwMLl0r5o0ZLfpqE5B4o6krOTdfURhPsJXxpsIFZ4fXjfGxoS4z6kbvkcOxivKCQkMHZ%2FT%2B9ca3esYoRSfXbmKocTxkosdLwSy%2BnB0Vq38bk8OlKFpw01rGXTzSBD%2B3ksG5AO8ydGmaw2LO0clJDzyl2%2BVIlrH7p7SDODvnScnbkUMhlpkjDC4%2F%2FEBjqkAe7cIFmBNgHUPWTjofSsgRCFu20mA%2FVsyVkm5Ln2FPxqmk1EfSMlQDAiB5IHiH9d1ASAkrQOdUdglYUQH59JkjR25%2FERv5vdF8%2BaxpjXG2y7mPT%2FamQ5M00LG2DtVD%2Fu%2BWU2i8jVJvGMo6Hcjz7C4LTQQ2dDIcKLDx2mL1xWTUoNFHALHwetnZntJKBO6qkW%2Foylusv5xRCx%2FDO1Sdeaep23iSmx&X-Amz-Signature=d19f3ea3494fc20dfb1da51a208773411bb581ca040106470105bf34c355a610&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV3UZ3ET%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQCo7qnCsn0KqZFWqU9YV12bEqWwf6nLCReZObenbbGSXQIhAP3xN9mFJH6Z4NW4TVRkaZc69akaW8pogwYhFe%2FVxyXZKv8DCGwQABoMNjM3NDIzMTgzODA1IgwpvyAUsMAaQa%2BqkwEq3AMK0sv5OiznBjUOEi8zYR3VbR67um1thRAzGdOeT67bkoz7Elt3M86W5pl8JQ%2BuNvqmcIuL%2BPf%2Br6X%2Fp%2Bj%2B4K%2BVNxIcL5u0c6PTa5yASmwDOnLovOG2ONM3yXGKfMHWbA4otJwPnqiTcmyKUf4A7UmqM2uYa2SPlWLGU11fQtvGzD%2FrrALqESwLNvizP5XFVYt7kgqylJbQeQKcMqnaCqrxwSVqSsrrvzRj4Z3mVnKTKSryc3XeirASEXFVTQ%2FluEWZ7qT0DIrnVlE1f3ErKeyG5By%2BOhbKIk1Cho%2Br3P3nEMtabOWB%2F%2BpHgakMRR%2BxOD%2BAxODj7woAS9cNTqrJAEVAY9MrC848%2BRoP8vUrptCdPvBExiHFsv9qIo4crTmwEac0erp%2BlzFh4HpfVZb1FmvPtKnvFkUdchMk6GxdhK9j5UC3QqBUpOig9KjEYlk7kIePTB1eEPTDwMLl0r5o0ZLfpqE5B4o6krOTdfURhPsJXxpsIFZ4fXjfGxoS4z6kbvkcOxivKCQkMHZ%2FT%2B9ca3esYoRSfXbmKocTxkosdLwSy%2BnB0Vq38bk8OlKFpw01rGXTzSBD%2B3ksG5AO8ydGmaw2LO0clJDzyl2%2BVIlrH7p7SDODvnScnbkUMhlpkjDC4%2F%2FEBjqkAe7cIFmBNgHUPWTjofSsgRCFu20mA%2FVsyVkm5Ln2FPxqmk1EfSMlQDAiB5IHiH9d1ASAkrQOdUdglYUQH59JkjR25%2FERv5vdF8%2BaxpjXG2y7mPT%2FamQ5M00LG2DtVD%2Fu%2BWU2i8jVJvGMo6Hcjz7C4LTQQ2dDIcKLDx2mL1xWTUoNFHALHwetnZntJKBO6qkW%2Foylusv5xRCx%2FDO1Sdeaep23iSmx&X-Amz-Signature=827955e5e20ce7d721f23963af446ee718956a742e8ad6e6f4574afeecc914a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV3UZ3ET%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQCo7qnCsn0KqZFWqU9YV12bEqWwf6nLCReZObenbbGSXQIhAP3xN9mFJH6Z4NW4TVRkaZc69akaW8pogwYhFe%2FVxyXZKv8DCGwQABoMNjM3NDIzMTgzODA1IgwpvyAUsMAaQa%2BqkwEq3AMK0sv5OiznBjUOEi8zYR3VbR67um1thRAzGdOeT67bkoz7Elt3M86W5pl8JQ%2BuNvqmcIuL%2BPf%2Br6X%2Fp%2Bj%2B4K%2BVNxIcL5u0c6PTa5yASmwDOnLovOG2ONM3yXGKfMHWbA4otJwPnqiTcmyKUf4A7UmqM2uYa2SPlWLGU11fQtvGzD%2FrrALqESwLNvizP5XFVYt7kgqylJbQeQKcMqnaCqrxwSVqSsrrvzRj4Z3mVnKTKSryc3XeirASEXFVTQ%2FluEWZ7qT0DIrnVlE1f3ErKeyG5By%2BOhbKIk1Cho%2Br3P3nEMtabOWB%2F%2BpHgakMRR%2BxOD%2BAxODj7woAS9cNTqrJAEVAY9MrC848%2BRoP8vUrptCdPvBExiHFsv9qIo4crTmwEac0erp%2BlzFh4HpfVZb1FmvPtKnvFkUdchMk6GxdhK9j5UC3QqBUpOig9KjEYlk7kIePTB1eEPTDwMLl0r5o0ZLfpqE5B4o6krOTdfURhPsJXxpsIFZ4fXjfGxoS4z6kbvkcOxivKCQkMHZ%2FT%2B9ca3esYoRSfXbmKocTxkosdLwSy%2BnB0Vq38bk8OlKFpw01rGXTzSBD%2B3ksG5AO8ydGmaw2LO0clJDzyl2%2BVIlrH7p7SDODvnScnbkUMhlpkjDC4%2F%2FEBjqkAe7cIFmBNgHUPWTjofSsgRCFu20mA%2FVsyVkm5Ln2FPxqmk1EfSMlQDAiB5IHiH9d1ASAkrQOdUdglYUQH59JkjR25%2FERv5vdF8%2BaxpjXG2y7mPT%2FamQ5M00LG2DtVD%2Fu%2BWU2i8jVJvGMo6Hcjz7C4LTQQ2dDIcKLDx2mL1xWTUoNFHALHwetnZntJKBO6qkW%2Foylusv5xRCx%2FDO1Sdeaep23iSmx&X-Amz-Signature=9f4525d5f308a2f894248db11acaa65f7882283fa6f45b9f7ebddecf3b2c0044&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV3UZ3ET%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQCo7qnCsn0KqZFWqU9YV12bEqWwf6nLCReZObenbbGSXQIhAP3xN9mFJH6Z4NW4TVRkaZc69akaW8pogwYhFe%2FVxyXZKv8DCGwQABoMNjM3NDIzMTgzODA1IgwpvyAUsMAaQa%2BqkwEq3AMK0sv5OiznBjUOEi8zYR3VbR67um1thRAzGdOeT67bkoz7Elt3M86W5pl8JQ%2BuNvqmcIuL%2BPf%2Br6X%2Fp%2Bj%2B4K%2BVNxIcL5u0c6PTa5yASmwDOnLovOG2ONM3yXGKfMHWbA4otJwPnqiTcmyKUf4A7UmqM2uYa2SPlWLGU11fQtvGzD%2FrrALqESwLNvizP5XFVYt7kgqylJbQeQKcMqnaCqrxwSVqSsrrvzRj4Z3mVnKTKSryc3XeirASEXFVTQ%2FluEWZ7qT0DIrnVlE1f3ErKeyG5By%2BOhbKIk1Cho%2Br3P3nEMtabOWB%2F%2BpHgakMRR%2BxOD%2BAxODj7woAS9cNTqrJAEVAY9MrC848%2BRoP8vUrptCdPvBExiHFsv9qIo4crTmwEac0erp%2BlzFh4HpfVZb1FmvPtKnvFkUdchMk6GxdhK9j5UC3QqBUpOig9KjEYlk7kIePTB1eEPTDwMLl0r5o0ZLfpqE5B4o6krOTdfURhPsJXxpsIFZ4fXjfGxoS4z6kbvkcOxivKCQkMHZ%2FT%2B9ca3esYoRSfXbmKocTxkosdLwSy%2BnB0Vq38bk8OlKFpw01rGXTzSBD%2B3ksG5AO8ydGmaw2LO0clJDzyl2%2BVIlrH7p7SDODvnScnbkUMhlpkjDC4%2F%2FEBjqkAe7cIFmBNgHUPWTjofSsgRCFu20mA%2FVsyVkm5Ln2FPxqmk1EfSMlQDAiB5IHiH9d1ASAkrQOdUdglYUQH59JkjR25%2FERv5vdF8%2BaxpjXG2y7mPT%2FamQ5M00LG2DtVD%2Fu%2BWU2i8jVJvGMo6Hcjz7C4LTQQ2dDIcKLDx2mL1xWTUoNFHALHwetnZntJKBO6qkW%2Foylusv5xRCx%2FDO1Sdeaep23iSmx&X-Amz-Signature=2490efd5914a119d5bb18aa467f78a37c7844dbd2d8513abc29d881e6e0c1c1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
