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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFUGXCBI%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCID4AzpVGzyI8qE%2BNBrE2dcGtgsGzCOuxkO0Y%2FoG6%2FexGAiEAvTmwkRs%2FzuclLgt1GKV7naCltqZ7mFoEGR5VZLsgwqoqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIak9vpJER5Xeu%2BhSrcA22yagbe1tF4X9OzM1jo9G8xLhCbGKstAkRupeJg2LWJNlZeUBlaKoYh4ECzb%2BUG8e6VqzDcgmi2OoMTHTT07%2BB6AadTYaJ1qrrLhceD%2BtwLFQmTQUEx%2BbtA%2BGqDKMKev3uHaiB4QRHofS8LxcsLDXoaHfzI0Sg3iQ02So%2BEpp4ARF4BBvWSXWmZNz3A1q8gQ3Q2wAutS%2BV9%2Ffyxjs9%2FgrdQ6X2L019jlIvpXhWIbPJGTb7VW5x51qHnpnICTtor3E3oDSWvmRyo%2FtNB8zjf7778e9fqlwdLpuaV%2Bqd82NAD7K0KClUisAqKSZlXFg2%2BLlCWALRNJyx9I%2BoY4opRjYy30F2S7qzj5Zh7xl1BM74YblUQ0123vv61unDNDuAGih9pVj59uZgBR03fX4%2Bcq5yp03kXmJWI5CPobAg2iSJp8iJhfCP%2F4FiBh7w9Im2n9Fuk%2FWLhtlkEonyx733Fjcqntr6dHB3xL0y9kuE2aEYEt5vTYf98sS%2FeG7AfH0WBJjbqBmQcpUSH1yKuxvMQv2li2vKQywuWJdLV6rku%2BtMgdDmBgfkLjN59X6bcas3F9WNbA%2B5pO6RRHbA4okr%2B6sRHrfC5Qil1EzpsARUB70cNxRP7fCgvACvCmeqtMJj5ocoGOqUBPfGdPHgQ%2Bs3nKgIAukAuXHtRnnt4HEHipKq5pReZSmDn1DtxfwhBi1Caf8%2B2LjZ%2BNM6xjBTiYmneeQu4GlzSL0Mo4jLRPpTONZ6e3c%2BiVbYoxQAdpy4LCY7YJcu38Xv2YDokdf7EhK4dRTFdH9eS8YA2P8vnvwNs%2FwjqsqkAaZ6TVAhf4CiJcMKj4fEwTQS%2F4bSjjFuKmbxt%2FagvMwIc5e%2F8PgPy&X-Amz-Signature=92747fc5048927b697a382b26664c4788a104251565082f66f3af451a072d27b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFUGXCBI%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCID4AzpVGzyI8qE%2BNBrE2dcGtgsGzCOuxkO0Y%2FoG6%2FexGAiEAvTmwkRs%2FzuclLgt1GKV7naCltqZ7mFoEGR5VZLsgwqoqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIak9vpJER5Xeu%2BhSrcA22yagbe1tF4X9OzM1jo9G8xLhCbGKstAkRupeJg2LWJNlZeUBlaKoYh4ECzb%2BUG8e6VqzDcgmi2OoMTHTT07%2BB6AadTYaJ1qrrLhceD%2BtwLFQmTQUEx%2BbtA%2BGqDKMKev3uHaiB4QRHofS8LxcsLDXoaHfzI0Sg3iQ02So%2BEpp4ARF4BBvWSXWmZNz3A1q8gQ3Q2wAutS%2BV9%2Ffyxjs9%2FgrdQ6X2L019jlIvpXhWIbPJGTb7VW5x51qHnpnICTtor3E3oDSWvmRyo%2FtNB8zjf7778e9fqlwdLpuaV%2Bqd82NAD7K0KClUisAqKSZlXFg2%2BLlCWALRNJyx9I%2BoY4opRjYy30F2S7qzj5Zh7xl1BM74YblUQ0123vv61unDNDuAGih9pVj59uZgBR03fX4%2Bcq5yp03kXmJWI5CPobAg2iSJp8iJhfCP%2F4FiBh7w9Im2n9Fuk%2FWLhtlkEonyx733Fjcqntr6dHB3xL0y9kuE2aEYEt5vTYf98sS%2FeG7AfH0WBJjbqBmQcpUSH1yKuxvMQv2li2vKQywuWJdLV6rku%2BtMgdDmBgfkLjN59X6bcas3F9WNbA%2B5pO6RRHbA4okr%2B6sRHrfC5Qil1EzpsARUB70cNxRP7fCgvACvCmeqtMJj5ocoGOqUBPfGdPHgQ%2Bs3nKgIAukAuXHtRnnt4HEHipKq5pReZSmDn1DtxfwhBi1Caf8%2B2LjZ%2BNM6xjBTiYmneeQu4GlzSL0Mo4jLRPpTONZ6e3c%2BiVbYoxQAdpy4LCY7YJcu38Xv2YDokdf7EhK4dRTFdH9eS8YA2P8vnvwNs%2FwjqsqkAaZ6TVAhf4CiJcMKj4fEwTQS%2F4bSjjFuKmbxt%2FagvMwIc5e%2F8PgPy&X-Amz-Signature=d616407020ea3b7e3575a973ea1f5b8b878ae776ec85ef3bb62b2a00b9383054&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFUGXCBI%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCID4AzpVGzyI8qE%2BNBrE2dcGtgsGzCOuxkO0Y%2FoG6%2FexGAiEAvTmwkRs%2FzuclLgt1GKV7naCltqZ7mFoEGR5VZLsgwqoqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIak9vpJER5Xeu%2BhSrcA22yagbe1tF4X9OzM1jo9G8xLhCbGKstAkRupeJg2LWJNlZeUBlaKoYh4ECzb%2BUG8e6VqzDcgmi2OoMTHTT07%2BB6AadTYaJ1qrrLhceD%2BtwLFQmTQUEx%2BbtA%2BGqDKMKev3uHaiB4QRHofS8LxcsLDXoaHfzI0Sg3iQ02So%2BEpp4ARF4BBvWSXWmZNz3A1q8gQ3Q2wAutS%2BV9%2Ffyxjs9%2FgrdQ6X2L019jlIvpXhWIbPJGTb7VW5x51qHnpnICTtor3E3oDSWvmRyo%2FtNB8zjf7778e9fqlwdLpuaV%2Bqd82NAD7K0KClUisAqKSZlXFg2%2BLlCWALRNJyx9I%2BoY4opRjYy30F2S7qzj5Zh7xl1BM74YblUQ0123vv61unDNDuAGih9pVj59uZgBR03fX4%2Bcq5yp03kXmJWI5CPobAg2iSJp8iJhfCP%2F4FiBh7w9Im2n9Fuk%2FWLhtlkEonyx733Fjcqntr6dHB3xL0y9kuE2aEYEt5vTYf98sS%2FeG7AfH0WBJjbqBmQcpUSH1yKuxvMQv2li2vKQywuWJdLV6rku%2BtMgdDmBgfkLjN59X6bcas3F9WNbA%2B5pO6RRHbA4okr%2B6sRHrfC5Qil1EzpsARUB70cNxRP7fCgvACvCmeqtMJj5ocoGOqUBPfGdPHgQ%2Bs3nKgIAukAuXHtRnnt4HEHipKq5pReZSmDn1DtxfwhBi1Caf8%2B2LjZ%2BNM6xjBTiYmneeQu4GlzSL0Mo4jLRPpTONZ6e3c%2BiVbYoxQAdpy4LCY7YJcu38Xv2YDokdf7EhK4dRTFdH9eS8YA2P8vnvwNs%2FwjqsqkAaZ6TVAhf4CiJcMKj4fEwTQS%2F4bSjjFuKmbxt%2FagvMwIc5e%2F8PgPy&X-Amz-Signature=e2a964e185fbc753b73fd4111f7bf443a20f195a48a3c476c777134bc31b77a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFUGXCBI%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCID4AzpVGzyI8qE%2BNBrE2dcGtgsGzCOuxkO0Y%2FoG6%2FexGAiEAvTmwkRs%2FzuclLgt1GKV7naCltqZ7mFoEGR5VZLsgwqoqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIak9vpJER5Xeu%2BhSrcA22yagbe1tF4X9OzM1jo9G8xLhCbGKstAkRupeJg2LWJNlZeUBlaKoYh4ECzb%2BUG8e6VqzDcgmi2OoMTHTT07%2BB6AadTYaJ1qrrLhceD%2BtwLFQmTQUEx%2BbtA%2BGqDKMKev3uHaiB4QRHofS8LxcsLDXoaHfzI0Sg3iQ02So%2BEpp4ARF4BBvWSXWmZNz3A1q8gQ3Q2wAutS%2BV9%2Ffyxjs9%2FgrdQ6X2L019jlIvpXhWIbPJGTb7VW5x51qHnpnICTtor3E3oDSWvmRyo%2FtNB8zjf7778e9fqlwdLpuaV%2Bqd82NAD7K0KClUisAqKSZlXFg2%2BLlCWALRNJyx9I%2BoY4opRjYy30F2S7qzj5Zh7xl1BM74YblUQ0123vv61unDNDuAGih9pVj59uZgBR03fX4%2Bcq5yp03kXmJWI5CPobAg2iSJp8iJhfCP%2F4FiBh7w9Im2n9Fuk%2FWLhtlkEonyx733Fjcqntr6dHB3xL0y9kuE2aEYEt5vTYf98sS%2FeG7AfH0WBJjbqBmQcpUSH1yKuxvMQv2li2vKQywuWJdLV6rku%2BtMgdDmBgfkLjN59X6bcas3F9WNbA%2B5pO6RRHbA4okr%2B6sRHrfC5Qil1EzpsARUB70cNxRP7fCgvACvCmeqtMJj5ocoGOqUBPfGdPHgQ%2Bs3nKgIAukAuXHtRnnt4HEHipKq5pReZSmDn1DtxfwhBi1Caf8%2B2LjZ%2BNM6xjBTiYmneeQu4GlzSL0Mo4jLRPpTONZ6e3c%2BiVbYoxQAdpy4LCY7YJcu38Xv2YDokdf7EhK4dRTFdH9eS8YA2P8vnvwNs%2FwjqsqkAaZ6TVAhf4CiJcMKj4fEwTQS%2F4bSjjFuKmbxt%2FagvMwIc5e%2F8PgPy&X-Amz-Signature=0af454c7a94a607162770a776d45eb013069c61b450f5b61025b53bd96d48a1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFUGXCBI%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCID4AzpVGzyI8qE%2BNBrE2dcGtgsGzCOuxkO0Y%2FoG6%2FexGAiEAvTmwkRs%2FzuclLgt1GKV7naCltqZ7mFoEGR5VZLsgwqoqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIak9vpJER5Xeu%2BhSrcA22yagbe1tF4X9OzM1jo9G8xLhCbGKstAkRupeJg2LWJNlZeUBlaKoYh4ECzb%2BUG8e6VqzDcgmi2OoMTHTT07%2BB6AadTYaJ1qrrLhceD%2BtwLFQmTQUEx%2BbtA%2BGqDKMKev3uHaiB4QRHofS8LxcsLDXoaHfzI0Sg3iQ02So%2BEpp4ARF4BBvWSXWmZNz3A1q8gQ3Q2wAutS%2BV9%2Ffyxjs9%2FgrdQ6X2L019jlIvpXhWIbPJGTb7VW5x51qHnpnICTtor3E3oDSWvmRyo%2FtNB8zjf7778e9fqlwdLpuaV%2Bqd82NAD7K0KClUisAqKSZlXFg2%2BLlCWALRNJyx9I%2BoY4opRjYy30F2S7qzj5Zh7xl1BM74YblUQ0123vv61unDNDuAGih9pVj59uZgBR03fX4%2Bcq5yp03kXmJWI5CPobAg2iSJp8iJhfCP%2F4FiBh7w9Im2n9Fuk%2FWLhtlkEonyx733Fjcqntr6dHB3xL0y9kuE2aEYEt5vTYf98sS%2FeG7AfH0WBJjbqBmQcpUSH1yKuxvMQv2li2vKQywuWJdLV6rku%2BtMgdDmBgfkLjN59X6bcas3F9WNbA%2B5pO6RRHbA4okr%2B6sRHrfC5Qil1EzpsARUB70cNxRP7fCgvACvCmeqtMJj5ocoGOqUBPfGdPHgQ%2Bs3nKgIAukAuXHtRnnt4HEHipKq5pReZSmDn1DtxfwhBi1Caf8%2B2LjZ%2BNM6xjBTiYmneeQu4GlzSL0Mo4jLRPpTONZ6e3c%2BiVbYoxQAdpy4LCY7YJcu38Xv2YDokdf7EhK4dRTFdH9eS8YA2P8vnvwNs%2FwjqsqkAaZ6TVAhf4CiJcMKj4fEwTQS%2F4bSjjFuKmbxt%2FagvMwIc5e%2F8PgPy&X-Amz-Signature=8be5497a41e98ac628383477da7a6dc110264b14a226e555a5f98a3ca2162d83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFUGXCBI%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCID4AzpVGzyI8qE%2BNBrE2dcGtgsGzCOuxkO0Y%2FoG6%2FexGAiEAvTmwkRs%2FzuclLgt1GKV7naCltqZ7mFoEGR5VZLsgwqoqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIak9vpJER5Xeu%2BhSrcA22yagbe1tF4X9OzM1jo9G8xLhCbGKstAkRupeJg2LWJNlZeUBlaKoYh4ECzb%2BUG8e6VqzDcgmi2OoMTHTT07%2BB6AadTYaJ1qrrLhceD%2BtwLFQmTQUEx%2BbtA%2BGqDKMKev3uHaiB4QRHofS8LxcsLDXoaHfzI0Sg3iQ02So%2BEpp4ARF4BBvWSXWmZNz3A1q8gQ3Q2wAutS%2BV9%2Ffyxjs9%2FgrdQ6X2L019jlIvpXhWIbPJGTb7VW5x51qHnpnICTtor3E3oDSWvmRyo%2FtNB8zjf7778e9fqlwdLpuaV%2Bqd82NAD7K0KClUisAqKSZlXFg2%2BLlCWALRNJyx9I%2BoY4opRjYy30F2S7qzj5Zh7xl1BM74YblUQ0123vv61unDNDuAGih9pVj59uZgBR03fX4%2Bcq5yp03kXmJWI5CPobAg2iSJp8iJhfCP%2F4FiBh7w9Im2n9Fuk%2FWLhtlkEonyx733Fjcqntr6dHB3xL0y9kuE2aEYEt5vTYf98sS%2FeG7AfH0WBJjbqBmQcpUSH1yKuxvMQv2li2vKQywuWJdLV6rku%2BtMgdDmBgfkLjN59X6bcas3F9WNbA%2B5pO6RRHbA4okr%2B6sRHrfC5Qil1EzpsARUB70cNxRP7fCgvACvCmeqtMJj5ocoGOqUBPfGdPHgQ%2Bs3nKgIAukAuXHtRnnt4HEHipKq5pReZSmDn1DtxfwhBi1Caf8%2B2LjZ%2BNM6xjBTiYmneeQu4GlzSL0Mo4jLRPpTONZ6e3c%2BiVbYoxQAdpy4LCY7YJcu38Xv2YDokdf7EhK4dRTFdH9eS8YA2P8vnvwNs%2FwjqsqkAaZ6TVAhf4CiJcMKj4fEwTQS%2F4bSjjFuKmbxt%2FagvMwIc5e%2F8PgPy&X-Amz-Signature=d6ce4c43dddda0a83c355accecff6becf8ac1fa11c5a1d57014f894aaf54932c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFUGXCBI%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCID4AzpVGzyI8qE%2BNBrE2dcGtgsGzCOuxkO0Y%2FoG6%2FexGAiEAvTmwkRs%2FzuclLgt1GKV7naCltqZ7mFoEGR5VZLsgwqoqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIak9vpJER5Xeu%2BhSrcA22yagbe1tF4X9OzM1jo9G8xLhCbGKstAkRupeJg2LWJNlZeUBlaKoYh4ECzb%2BUG8e6VqzDcgmi2OoMTHTT07%2BB6AadTYaJ1qrrLhceD%2BtwLFQmTQUEx%2BbtA%2BGqDKMKev3uHaiB4QRHofS8LxcsLDXoaHfzI0Sg3iQ02So%2BEpp4ARF4BBvWSXWmZNz3A1q8gQ3Q2wAutS%2BV9%2Ffyxjs9%2FgrdQ6X2L019jlIvpXhWIbPJGTb7VW5x51qHnpnICTtor3E3oDSWvmRyo%2FtNB8zjf7778e9fqlwdLpuaV%2Bqd82NAD7K0KClUisAqKSZlXFg2%2BLlCWALRNJyx9I%2BoY4opRjYy30F2S7qzj5Zh7xl1BM74YblUQ0123vv61unDNDuAGih9pVj59uZgBR03fX4%2Bcq5yp03kXmJWI5CPobAg2iSJp8iJhfCP%2F4FiBh7w9Im2n9Fuk%2FWLhtlkEonyx733Fjcqntr6dHB3xL0y9kuE2aEYEt5vTYf98sS%2FeG7AfH0WBJjbqBmQcpUSH1yKuxvMQv2li2vKQywuWJdLV6rku%2BtMgdDmBgfkLjN59X6bcas3F9WNbA%2B5pO6RRHbA4okr%2B6sRHrfC5Qil1EzpsARUB70cNxRP7fCgvACvCmeqtMJj5ocoGOqUBPfGdPHgQ%2Bs3nKgIAukAuXHtRnnt4HEHipKq5pReZSmDn1DtxfwhBi1Caf8%2B2LjZ%2BNM6xjBTiYmneeQu4GlzSL0Mo4jLRPpTONZ6e3c%2BiVbYoxQAdpy4LCY7YJcu38Xv2YDokdf7EhK4dRTFdH9eS8YA2P8vnvwNs%2FwjqsqkAaZ6TVAhf4CiJcMKj4fEwTQS%2F4bSjjFuKmbxt%2FagvMwIc5e%2F8PgPy&X-Amz-Signature=eb5eadb2ab80957aaaa649cb1649fa7ed9ca62e782a733f207da92101add77ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFUGXCBI%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCID4AzpVGzyI8qE%2BNBrE2dcGtgsGzCOuxkO0Y%2FoG6%2FexGAiEAvTmwkRs%2FzuclLgt1GKV7naCltqZ7mFoEGR5VZLsgwqoqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIak9vpJER5Xeu%2BhSrcA22yagbe1tF4X9OzM1jo9G8xLhCbGKstAkRupeJg2LWJNlZeUBlaKoYh4ECzb%2BUG8e6VqzDcgmi2OoMTHTT07%2BB6AadTYaJ1qrrLhceD%2BtwLFQmTQUEx%2BbtA%2BGqDKMKev3uHaiB4QRHofS8LxcsLDXoaHfzI0Sg3iQ02So%2BEpp4ARF4BBvWSXWmZNz3A1q8gQ3Q2wAutS%2BV9%2Ffyxjs9%2FgrdQ6X2L019jlIvpXhWIbPJGTb7VW5x51qHnpnICTtor3E3oDSWvmRyo%2FtNB8zjf7778e9fqlwdLpuaV%2Bqd82NAD7K0KClUisAqKSZlXFg2%2BLlCWALRNJyx9I%2BoY4opRjYy30F2S7qzj5Zh7xl1BM74YblUQ0123vv61unDNDuAGih9pVj59uZgBR03fX4%2Bcq5yp03kXmJWI5CPobAg2iSJp8iJhfCP%2F4FiBh7w9Im2n9Fuk%2FWLhtlkEonyx733Fjcqntr6dHB3xL0y9kuE2aEYEt5vTYf98sS%2FeG7AfH0WBJjbqBmQcpUSH1yKuxvMQv2li2vKQywuWJdLV6rku%2BtMgdDmBgfkLjN59X6bcas3F9WNbA%2B5pO6RRHbA4okr%2B6sRHrfC5Qil1EzpsARUB70cNxRP7fCgvACvCmeqtMJj5ocoGOqUBPfGdPHgQ%2Bs3nKgIAukAuXHtRnnt4HEHipKq5pReZSmDn1DtxfwhBi1Caf8%2B2LjZ%2BNM6xjBTiYmneeQu4GlzSL0Mo4jLRPpTONZ6e3c%2BiVbYoxQAdpy4LCY7YJcu38Xv2YDokdf7EhK4dRTFdH9eS8YA2P8vnvwNs%2FwjqsqkAaZ6TVAhf4CiJcMKj4fEwTQS%2F4bSjjFuKmbxt%2FagvMwIc5e%2F8PgPy&X-Amz-Signature=fed092293dd9b7a938f5a3c430fba45b985c2d20b300114aa581ca5d7b2ee233&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFUGXCBI%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCID4AzpVGzyI8qE%2BNBrE2dcGtgsGzCOuxkO0Y%2FoG6%2FexGAiEAvTmwkRs%2FzuclLgt1GKV7naCltqZ7mFoEGR5VZLsgwqoqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIak9vpJER5Xeu%2BhSrcA22yagbe1tF4X9OzM1jo9G8xLhCbGKstAkRupeJg2LWJNlZeUBlaKoYh4ECzb%2BUG8e6VqzDcgmi2OoMTHTT07%2BB6AadTYaJ1qrrLhceD%2BtwLFQmTQUEx%2BbtA%2BGqDKMKev3uHaiB4QRHofS8LxcsLDXoaHfzI0Sg3iQ02So%2BEpp4ARF4BBvWSXWmZNz3A1q8gQ3Q2wAutS%2BV9%2Ffyxjs9%2FgrdQ6X2L019jlIvpXhWIbPJGTb7VW5x51qHnpnICTtor3E3oDSWvmRyo%2FtNB8zjf7778e9fqlwdLpuaV%2Bqd82NAD7K0KClUisAqKSZlXFg2%2BLlCWALRNJyx9I%2BoY4opRjYy30F2S7qzj5Zh7xl1BM74YblUQ0123vv61unDNDuAGih9pVj59uZgBR03fX4%2Bcq5yp03kXmJWI5CPobAg2iSJp8iJhfCP%2F4FiBh7w9Im2n9Fuk%2FWLhtlkEonyx733Fjcqntr6dHB3xL0y9kuE2aEYEt5vTYf98sS%2FeG7AfH0WBJjbqBmQcpUSH1yKuxvMQv2li2vKQywuWJdLV6rku%2BtMgdDmBgfkLjN59X6bcas3F9WNbA%2B5pO6RRHbA4okr%2B6sRHrfC5Qil1EzpsARUB70cNxRP7fCgvACvCmeqtMJj5ocoGOqUBPfGdPHgQ%2Bs3nKgIAukAuXHtRnnt4HEHipKq5pReZSmDn1DtxfwhBi1Caf8%2B2LjZ%2BNM6xjBTiYmneeQu4GlzSL0Mo4jLRPpTONZ6e3c%2BiVbYoxQAdpy4LCY7YJcu38Xv2YDokdf7EhK4dRTFdH9eS8YA2P8vnvwNs%2FwjqsqkAaZ6TVAhf4CiJcMKj4fEwTQS%2F4bSjjFuKmbxt%2FagvMwIc5e%2F8PgPy&X-Amz-Signature=85590a37ff1e414e19c894b346f4e2264c578ed0cf7ff195ffea9b280bd46650&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFUGXCBI%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCID4AzpVGzyI8qE%2BNBrE2dcGtgsGzCOuxkO0Y%2FoG6%2FexGAiEAvTmwkRs%2FzuclLgt1GKV7naCltqZ7mFoEGR5VZLsgwqoqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIak9vpJER5Xeu%2BhSrcA22yagbe1tF4X9OzM1jo9G8xLhCbGKstAkRupeJg2LWJNlZeUBlaKoYh4ECzb%2BUG8e6VqzDcgmi2OoMTHTT07%2BB6AadTYaJ1qrrLhceD%2BtwLFQmTQUEx%2BbtA%2BGqDKMKev3uHaiB4QRHofS8LxcsLDXoaHfzI0Sg3iQ02So%2BEpp4ARF4BBvWSXWmZNz3A1q8gQ3Q2wAutS%2BV9%2Ffyxjs9%2FgrdQ6X2L019jlIvpXhWIbPJGTb7VW5x51qHnpnICTtor3E3oDSWvmRyo%2FtNB8zjf7778e9fqlwdLpuaV%2Bqd82NAD7K0KClUisAqKSZlXFg2%2BLlCWALRNJyx9I%2BoY4opRjYy30F2S7qzj5Zh7xl1BM74YblUQ0123vv61unDNDuAGih9pVj59uZgBR03fX4%2Bcq5yp03kXmJWI5CPobAg2iSJp8iJhfCP%2F4FiBh7w9Im2n9Fuk%2FWLhtlkEonyx733Fjcqntr6dHB3xL0y9kuE2aEYEt5vTYf98sS%2FeG7AfH0WBJjbqBmQcpUSH1yKuxvMQv2li2vKQywuWJdLV6rku%2BtMgdDmBgfkLjN59X6bcas3F9WNbA%2B5pO6RRHbA4okr%2B6sRHrfC5Qil1EzpsARUB70cNxRP7fCgvACvCmeqtMJj5ocoGOqUBPfGdPHgQ%2Bs3nKgIAukAuXHtRnnt4HEHipKq5pReZSmDn1DtxfwhBi1Caf8%2B2LjZ%2BNM6xjBTiYmneeQu4GlzSL0Mo4jLRPpTONZ6e3c%2BiVbYoxQAdpy4LCY7YJcu38Xv2YDokdf7EhK4dRTFdH9eS8YA2P8vnvwNs%2FwjqsqkAaZ6TVAhf4CiJcMKj4fEwTQS%2F4bSjjFuKmbxt%2FagvMwIc5e%2F8PgPy&X-Amz-Signature=7131b6a412b66cb135997750a528bc887765b44adf5f4a9264e5f05598594bba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFUGXCBI%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCID4AzpVGzyI8qE%2BNBrE2dcGtgsGzCOuxkO0Y%2FoG6%2FexGAiEAvTmwkRs%2FzuclLgt1GKV7naCltqZ7mFoEGR5VZLsgwqoqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIak9vpJER5Xeu%2BhSrcA22yagbe1tF4X9OzM1jo9G8xLhCbGKstAkRupeJg2LWJNlZeUBlaKoYh4ECzb%2BUG8e6VqzDcgmi2OoMTHTT07%2BB6AadTYaJ1qrrLhceD%2BtwLFQmTQUEx%2BbtA%2BGqDKMKev3uHaiB4QRHofS8LxcsLDXoaHfzI0Sg3iQ02So%2BEpp4ARF4BBvWSXWmZNz3A1q8gQ3Q2wAutS%2BV9%2Ffyxjs9%2FgrdQ6X2L019jlIvpXhWIbPJGTb7VW5x51qHnpnICTtor3E3oDSWvmRyo%2FtNB8zjf7778e9fqlwdLpuaV%2Bqd82NAD7K0KClUisAqKSZlXFg2%2BLlCWALRNJyx9I%2BoY4opRjYy30F2S7qzj5Zh7xl1BM74YblUQ0123vv61unDNDuAGih9pVj59uZgBR03fX4%2Bcq5yp03kXmJWI5CPobAg2iSJp8iJhfCP%2F4FiBh7w9Im2n9Fuk%2FWLhtlkEonyx733Fjcqntr6dHB3xL0y9kuE2aEYEt5vTYf98sS%2FeG7AfH0WBJjbqBmQcpUSH1yKuxvMQv2li2vKQywuWJdLV6rku%2BtMgdDmBgfkLjN59X6bcas3F9WNbA%2B5pO6RRHbA4okr%2B6sRHrfC5Qil1EzpsARUB70cNxRP7fCgvACvCmeqtMJj5ocoGOqUBPfGdPHgQ%2Bs3nKgIAukAuXHtRnnt4HEHipKq5pReZSmDn1DtxfwhBi1Caf8%2B2LjZ%2BNM6xjBTiYmneeQu4GlzSL0Mo4jLRPpTONZ6e3c%2BiVbYoxQAdpy4LCY7YJcu38Xv2YDokdf7EhK4dRTFdH9eS8YA2P8vnvwNs%2FwjqsqkAaZ6TVAhf4CiJcMKj4fEwTQS%2F4bSjjFuKmbxt%2FagvMwIc5e%2F8PgPy&X-Amz-Signature=20fa8d8110aed625cca3734d0fb9d5952497bf8be049a5bf0bb605bba87bb8e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFUGXCBI%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCID4AzpVGzyI8qE%2BNBrE2dcGtgsGzCOuxkO0Y%2FoG6%2FexGAiEAvTmwkRs%2FzuclLgt1GKV7naCltqZ7mFoEGR5VZLsgwqoqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIak9vpJER5Xeu%2BhSrcA22yagbe1tF4X9OzM1jo9G8xLhCbGKstAkRupeJg2LWJNlZeUBlaKoYh4ECzb%2BUG8e6VqzDcgmi2OoMTHTT07%2BB6AadTYaJ1qrrLhceD%2BtwLFQmTQUEx%2BbtA%2BGqDKMKev3uHaiB4QRHofS8LxcsLDXoaHfzI0Sg3iQ02So%2BEpp4ARF4BBvWSXWmZNz3A1q8gQ3Q2wAutS%2BV9%2Ffyxjs9%2FgrdQ6X2L019jlIvpXhWIbPJGTb7VW5x51qHnpnICTtor3E3oDSWvmRyo%2FtNB8zjf7778e9fqlwdLpuaV%2Bqd82NAD7K0KClUisAqKSZlXFg2%2BLlCWALRNJyx9I%2BoY4opRjYy30F2S7qzj5Zh7xl1BM74YblUQ0123vv61unDNDuAGih9pVj59uZgBR03fX4%2Bcq5yp03kXmJWI5CPobAg2iSJp8iJhfCP%2F4FiBh7w9Im2n9Fuk%2FWLhtlkEonyx733Fjcqntr6dHB3xL0y9kuE2aEYEt5vTYf98sS%2FeG7AfH0WBJjbqBmQcpUSH1yKuxvMQv2li2vKQywuWJdLV6rku%2BtMgdDmBgfkLjN59X6bcas3F9WNbA%2B5pO6RRHbA4okr%2B6sRHrfC5Qil1EzpsARUB70cNxRP7fCgvACvCmeqtMJj5ocoGOqUBPfGdPHgQ%2Bs3nKgIAukAuXHtRnnt4HEHipKq5pReZSmDn1DtxfwhBi1Caf8%2B2LjZ%2BNM6xjBTiYmneeQu4GlzSL0Mo4jLRPpTONZ6e3c%2BiVbYoxQAdpy4LCY7YJcu38Xv2YDokdf7EhK4dRTFdH9eS8YA2P8vnvwNs%2FwjqsqkAaZ6TVAhf4CiJcMKj4fEwTQS%2F4bSjjFuKmbxt%2FagvMwIc5e%2F8PgPy&X-Amz-Signature=c0906c8716f29799b7cb340af151498f841b3a45aebbea6f843e44ce4ef4a93c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFUGXCBI%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCID4AzpVGzyI8qE%2BNBrE2dcGtgsGzCOuxkO0Y%2FoG6%2FexGAiEAvTmwkRs%2FzuclLgt1GKV7naCltqZ7mFoEGR5VZLsgwqoqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIak9vpJER5Xeu%2BhSrcA22yagbe1tF4X9OzM1jo9G8xLhCbGKstAkRupeJg2LWJNlZeUBlaKoYh4ECzb%2BUG8e6VqzDcgmi2OoMTHTT07%2BB6AadTYaJ1qrrLhceD%2BtwLFQmTQUEx%2BbtA%2BGqDKMKev3uHaiB4QRHofS8LxcsLDXoaHfzI0Sg3iQ02So%2BEpp4ARF4BBvWSXWmZNz3A1q8gQ3Q2wAutS%2BV9%2Ffyxjs9%2FgrdQ6X2L019jlIvpXhWIbPJGTb7VW5x51qHnpnICTtor3E3oDSWvmRyo%2FtNB8zjf7778e9fqlwdLpuaV%2Bqd82NAD7K0KClUisAqKSZlXFg2%2BLlCWALRNJyx9I%2BoY4opRjYy30F2S7qzj5Zh7xl1BM74YblUQ0123vv61unDNDuAGih9pVj59uZgBR03fX4%2Bcq5yp03kXmJWI5CPobAg2iSJp8iJhfCP%2F4FiBh7w9Im2n9Fuk%2FWLhtlkEonyx733Fjcqntr6dHB3xL0y9kuE2aEYEt5vTYf98sS%2FeG7AfH0WBJjbqBmQcpUSH1yKuxvMQv2li2vKQywuWJdLV6rku%2BtMgdDmBgfkLjN59X6bcas3F9WNbA%2B5pO6RRHbA4okr%2B6sRHrfC5Qil1EzpsARUB70cNxRP7fCgvACvCmeqtMJj5ocoGOqUBPfGdPHgQ%2Bs3nKgIAukAuXHtRnnt4HEHipKq5pReZSmDn1DtxfwhBi1Caf8%2B2LjZ%2BNM6xjBTiYmneeQu4GlzSL0Mo4jLRPpTONZ6e3c%2BiVbYoxQAdpy4LCY7YJcu38Xv2YDokdf7EhK4dRTFdH9eS8YA2P8vnvwNs%2FwjqsqkAaZ6TVAhf4CiJcMKj4fEwTQS%2F4bSjjFuKmbxt%2FagvMwIc5e%2F8PgPy&X-Amz-Signature=e7d081b8da87c05a4c66fb78c691308f6095359277d97bcd00f582bfbed64851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFUGXCBI%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCID4AzpVGzyI8qE%2BNBrE2dcGtgsGzCOuxkO0Y%2FoG6%2FexGAiEAvTmwkRs%2FzuclLgt1GKV7naCltqZ7mFoEGR5VZLsgwqoqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIak9vpJER5Xeu%2BhSrcA22yagbe1tF4X9OzM1jo9G8xLhCbGKstAkRupeJg2LWJNlZeUBlaKoYh4ECzb%2BUG8e6VqzDcgmi2OoMTHTT07%2BB6AadTYaJ1qrrLhceD%2BtwLFQmTQUEx%2BbtA%2BGqDKMKev3uHaiB4QRHofS8LxcsLDXoaHfzI0Sg3iQ02So%2BEpp4ARF4BBvWSXWmZNz3A1q8gQ3Q2wAutS%2BV9%2Ffyxjs9%2FgrdQ6X2L019jlIvpXhWIbPJGTb7VW5x51qHnpnICTtor3E3oDSWvmRyo%2FtNB8zjf7778e9fqlwdLpuaV%2Bqd82NAD7K0KClUisAqKSZlXFg2%2BLlCWALRNJyx9I%2BoY4opRjYy30F2S7qzj5Zh7xl1BM74YblUQ0123vv61unDNDuAGih9pVj59uZgBR03fX4%2Bcq5yp03kXmJWI5CPobAg2iSJp8iJhfCP%2F4FiBh7w9Im2n9Fuk%2FWLhtlkEonyx733Fjcqntr6dHB3xL0y9kuE2aEYEt5vTYf98sS%2FeG7AfH0WBJjbqBmQcpUSH1yKuxvMQv2li2vKQywuWJdLV6rku%2BtMgdDmBgfkLjN59X6bcas3F9WNbA%2B5pO6RRHbA4okr%2B6sRHrfC5Qil1EzpsARUB70cNxRP7fCgvACvCmeqtMJj5ocoGOqUBPfGdPHgQ%2Bs3nKgIAukAuXHtRnnt4HEHipKq5pReZSmDn1DtxfwhBi1Caf8%2B2LjZ%2BNM6xjBTiYmneeQu4GlzSL0Mo4jLRPpTONZ6e3c%2BiVbYoxQAdpy4LCY7YJcu38Xv2YDokdf7EhK4dRTFdH9eS8YA2P8vnvwNs%2FwjqsqkAaZ6TVAhf4CiJcMKj4fEwTQS%2F4bSjjFuKmbxt%2FagvMwIc5e%2F8PgPy&X-Amz-Signature=318b0dcc16dd4b7dc65bd95b7546847fe0b68ab0db2f85ad1eb3d184c0e0b1df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
