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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNJMU4PA%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPmF%2FKr7PZq0TbpQdnPCChxDuSBI1CCeC7T1hdQyXnDAiAAtblS6Si%2BXHNEquTefhWdEsSs%2FOqU5rS3CGNs5oN27SqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMIhDUyyQ3J4BhYazKtwD4Yhja2Shp5ManNOrBcDeg9AtlbJtxoGtfXg1IezEhWM%2Bhnc%2FyzdfYHqoZrA7UQp8FkBRI3wHJSoOGY8BmcB4cKkkNMMRSTC1Sb6eAV%2FP5Svar%2FJHtU8%2BSRQ0x3Ho7trNVs2GofFaxloTlMaVrBzKoQ4EDnr%2BGel8WaeCB8UEM9elO1rnEyr4U%2FllAgWTLGV6GG6SeEb6BVeab96k5vaCa9qnL8Abif1Vwz%2FXkf69Ahvp7VVDkDOPGqqkm38bbq%2FhZOi1bRcx%2F0CTqosSEQq6fdMTt8iaKkORoc%2B2nWqpbDf5mcMorZQBNdGuEe1uxjGzcghVWmDPUckVaS4Bu5p8ntgbz5onqbVSBliFZ%2BsiYE8518onOvvqIiimvQsIOWSDCbcI%2BeRYLkFj%2F6QhIsFnAVJ%2BTPM%2BFpZCfaFKXvayhi%2Fd2zCLN4KCS7hpAYs9DZBuB7J04PzjN0MUYRZPEUulmlOb3JYCA%2Fj09QdSOxydXixvSpu6z6dn4ChRBRt7b7iId8CmH0znJLsaJnFaWFsig57%2FwySxJZ0l7snWjw4yKWTtIhyJmrJG%2BZkjZy1%2FfCViDea3TrgFzDYBVf1v6ha8nd5M2vWaYX4I4DdMSOqJnubB7o1l0o3foTxIdmAw0qye1AY6pgEmsM5XsDQHU9hUUt9YmGjkVMBpwnmNIoy0rQvwsfhiZByITxacwy8LHxRqeCsVfhVMgBxesdqkx1X54sx%2FMQeCVi12nPf5qe0si1noxqvIsncf%2BpayDQzz44wgy%2BDvUHQ8Hf7qGAROXaq2tDfjzs7qRnaLd8znkFhbs2mpWuwoCtcRcg8j0NHOdNGMM8cxtt%2B%2B9jTHLSvee4FlGRZd1GdvfjYpNfgv&X-Amz-Signature=695618ca4944a73190d2ba60e3ab8a63b70ee7d9bcdfc0f5e0793b9fb1259e64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNJMU4PA%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPmF%2FKr7PZq0TbpQdnPCChxDuSBI1CCeC7T1hdQyXnDAiAAtblS6Si%2BXHNEquTefhWdEsSs%2FOqU5rS3CGNs5oN27SqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMIhDUyyQ3J4BhYazKtwD4Yhja2Shp5ManNOrBcDeg9AtlbJtxoGtfXg1IezEhWM%2Bhnc%2FyzdfYHqoZrA7UQp8FkBRI3wHJSoOGY8BmcB4cKkkNMMRSTC1Sb6eAV%2FP5Svar%2FJHtU8%2BSRQ0x3Ho7trNVs2GofFaxloTlMaVrBzKoQ4EDnr%2BGel8WaeCB8UEM9elO1rnEyr4U%2FllAgWTLGV6GG6SeEb6BVeab96k5vaCa9qnL8Abif1Vwz%2FXkf69Ahvp7VVDkDOPGqqkm38bbq%2FhZOi1bRcx%2F0CTqosSEQq6fdMTt8iaKkORoc%2B2nWqpbDf5mcMorZQBNdGuEe1uxjGzcghVWmDPUckVaS4Bu5p8ntgbz5onqbVSBliFZ%2BsiYE8518onOvvqIiimvQsIOWSDCbcI%2BeRYLkFj%2F6QhIsFnAVJ%2BTPM%2BFpZCfaFKXvayhi%2Fd2zCLN4KCS7hpAYs9DZBuB7J04PzjN0MUYRZPEUulmlOb3JYCA%2Fj09QdSOxydXixvSpu6z6dn4ChRBRt7b7iId8CmH0znJLsaJnFaWFsig57%2FwySxJZ0l7snWjw4yKWTtIhyJmrJG%2BZkjZy1%2FfCViDea3TrgFzDYBVf1v6ha8nd5M2vWaYX4I4DdMSOqJnubB7o1l0o3foTxIdmAw0qye1AY6pgEmsM5XsDQHU9hUUt9YmGjkVMBpwnmNIoy0rQvwsfhiZByITxacwy8LHxRqeCsVfhVMgBxesdqkx1X54sx%2FMQeCVi12nPf5qe0si1noxqvIsncf%2BpayDQzz44wgy%2BDvUHQ8Hf7qGAROXaq2tDfjzs7qRnaLd8znkFhbs2mpWuwoCtcRcg8j0NHOdNGMM8cxtt%2B%2B9jTHLSvee4FlGRZd1GdvfjYpNfgv&X-Amz-Signature=af75f5e7946d797a83dff473c04f6ec608698c874e221726d2cc079250406faa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNJMU4PA%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPmF%2FKr7PZq0TbpQdnPCChxDuSBI1CCeC7T1hdQyXnDAiAAtblS6Si%2BXHNEquTefhWdEsSs%2FOqU5rS3CGNs5oN27SqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMIhDUyyQ3J4BhYazKtwD4Yhja2Shp5ManNOrBcDeg9AtlbJtxoGtfXg1IezEhWM%2Bhnc%2FyzdfYHqoZrA7UQp8FkBRI3wHJSoOGY8BmcB4cKkkNMMRSTC1Sb6eAV%2FP5Svar%2FJHtU8%2BSRQ0x3Ho7trNVs2GofFaxloTlMaVrBzKoQ4EDnr%2BGel8WaeCB8UEM9elO1rnEyr4U%2FllAgWTLGV6GG6SeEb6BVeab96k5vaCa9qnL8Abif1Vwz%2FXkf69Ahvp7VVDkDOPGqqkm38bbq%2FhZOi1bRcx%2F0CTqosSEQq6fdMTt8iaKkORoc%2B2nWqpbDf5mcMorZQBNdGuEe1uxjGzcghVWmDPUckVaS4Bu5p8ntgbz5onqbVSBliFZ%2BsiYE8518onOvvqIiimvQsIOWSDCbcI%2BeRYLkFj%2F6QhIsFnAVJ%2BTPM%2BFpZCfaFKXvayhi%2Fd2zCLN4KCS7hpAYs9DZBuB7J04PzjN0MUYRZPEUulmlOb3JYCA%2Fj09QdSOxydXixvSpu6z6dn4ChRBRt7b7iId8CmH0znJLsaJnFaWFsig57%2FwySxJZ0l7snWjw4yKWTtIhyJmrJG%2BZkjZy1%2FfCViDea3TrgFzDYBVf1v6ha8nd5M2vWaYX4I4DdMSOqJnubB7o1l0o3foTxIdmAw0qye1AY6pgEmsM5XsDQHU9hUUt9YmGjkVMBpwnmNIoy0rQvwsfhiZByITxacwy8LHxRqeCsVfhVMgBxesdqkx1X54sx%2FMQeCVi12nPf5qe0si1noxqvIsncf%2BpayDQzz44wgy%2BDvUHQ8Hf7qGAROXaq2tDfjzs7qRnaLd8znkFhbs2mpWuwoCtcRcg8j0NHOdNGMM8cxtt%2B%2B9jTHLSvee4FlGRZd1GdvfjYpNfgv&X-Amz-Signature=ce8936365a0957d3ac028a8b66c1ddc19ba4567d8c48519f87846b83180816bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNJMU4PA%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPmF%2FKr7PZq0TbpQdnPCChxDuSBI1CCeC7T1hdQyXnDAiAAtblS6Si%2BXHNEquTefhWdEsSs%2FOqU5rS3CGNs5oN27SqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMIhDUyyQ3J4BhYazKtwD4Yhja2Shp5ManNOrBcDeg9AtlbJtxoGtfXg1IezEhWM%2Bhnc%2FyzdfYHqoZrA7UQp8FkBRI3wHJSoOGY8BmcB4cKkkNMMRSTC1Sb6eAV%2FP5Svar%2FJHtU8%2BSRQ0x3Ho7trNVs2GofFaxloTlMaVrBzKoQ4EDnr%2BGel8WaeCB8UEM9elO1rnEyr4U%2FllAgWTLGV6GG6SeEb6BVeab96k5vaCa9qnL8Abif1Vwz%2FXkf69Ahvp7VVDkDOPGqqkm38bbq%2FhZOi1bRcx%2F0CTqosSEQq6fdMTt8iaKkORoc%2B2nWqpbDf5mcMorZQBNdGuEe1uxjGzcghVWmDPUckVaS4Bu5p8ntgbz5onqbVSBliFZ%2BsiYE8518onOvvqIiimvQsIOWSDCbcI%2BeRYLkFj%2F6QhIsFnAVJ%2BTPM%2BFpZCfaFKXvayhi%2Fd2zCLN4KCS7hpAYs9DZBuB7J04PzjN0MUYRZPEUulmlOb3JYCA%2Fj09QdSOxydXixvSpu6z6dn4ChRBRt7b7iId8CmH0znJLsaJnFaWFsig57%2FwySxJZ0l7snWjw4yKWTtIhyJmrJG%2BZkjZy1%2FfCViDea3TrgFzDYBVf1v6ha8nd5M2vWaYX4I4DdMSOqJnubB7o1l0o3foTxIdmAw0qye1AY6pgEmsM5XsDQHU9hUUt9YmGjkVMBpwnmNIoy0rQvwsfhiZByITxacwy8LHxRqeCsVfhVMgBxesdqkx1X54sx%2FMQeCVi12nPf5qe0si1noxqvIsncf%2BpayDQzz44wgy%2BDvUHQ8Hf7qGAROXaq2tDfjzs7qRnaLd8znkFhbs2mpWuwoCtcRcg8j0NHOdNGMM8cxtt%2B%2B9jTHLSvee4FlGRZd1GdvfjYpNfgv&X-Amz-Signature=f250fa9a70b6a42466dfabc985c38b69895f1cdb79a0ae09136e834f7ceb94ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNJMU4PA%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPmF%2FKr7PZq0TbpQdnPCChxDuSBI1CCeC7T1hdQyXnDAiAAtblS6Si%2BXHNEquTefhWdEsSs%2FOqU5rS3CGNs5oN27SqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMIhDUyyQ3J4BhYazKtwD4Yhja2Shp5ManNOrBcDeg9AtlbJtxoGtfXg1IezEhWM%2Bhnc%2FyzdfYHqoZrA7UQp8FkBRI3wHJSoOGY8BmcB4cKkkNMMRSTC1Sb6eAV%2FP5Svar%2FJHtU8%2BSRQ0x3Ho7trNVs2GofFaxloTlMaVrBzKoQ4EDnr%2BGel8WaeCB8UEM9elO1rnEyr4U%2FllAgWTLGV6GG6SeEb6BVeab96k5vaCa9qnL8Abif1Vwz%2FXkf69Ahvp7VVDkDOPGqqkm38bbq%2FhZOi1bRcx%2F0CTqosSEQq6fdMTt8iaKkORoc%2B2nWqpbDf5mcMorZQBNdGuEe1uxjGzcghVWmDPUckVaS4Bu5p8ntgbz5onqbVSBliFZ%2BsiYE8518onOvvqIiimvQsIOWSDCbcI%2BeRYLkFj%2F6QhIsFnAVJ%2BTPM%2BFpZCfaFKXvayhi%2Fd2zCLN4KCS7hpAYs9DZBuB7J04PzjN0MUYRZPEUulmlOb3JYCA%2Fj09QdSOxydXixvSpu6z6dn4ChRBRt7b7iId8CmH0znJLsaJnFaWFsig57%2FwySxJZ0l7snWjw4yKWTtIhyJmrJG%2BZkjZy1%2FfCViDea3TrgFzDYBVf1v6ha8nd5M2vWaYX4I4DdMSOqJnubB7o1l0o3foTxIdmAw0qye1AY6pgEmsM5XsDQHU9hUUt9YmGjkVMBpwnmNIoy0rQvwsfhiZByITxacwy8LHxRqeCsVfhVMgBxesdqkx1X54sx%2FMQeCVi12nPf5qe0si1noxqvIsncf%2BpayDQzz44wgy%2BDvUHQ8Hf7qGAROXaq2tDfjzs7qRnaLd8znkFhbs2mpWuwoCtcRcg8j0NHOdNGMM8cxtt%2B%2B9jTHLSvee4FlGRZd1GdvfjYpNfgv&X-Amz-Signature=8865ff0c41d703a69183ff5aadfdd375ff034de48922ba3f499c695be8482f5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNJMU4PA%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPmF%2FKr7PZq0TbpQdnPCChxDuSBI1CCeC7T1hdQyXnDAiAAtblS6Si%2BXHNEquTefhWdEsSs%2FOqU5rS3CGNs5oN27SqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMIhDUyyQ3J4BhYazKtwD4Yhja2Shp5ManNOrBcDeg9AtlbJtxoGtfXg1IezEhWM%2Bhnc%2FyzdfYHqoZrA7UQp8FkBRI3wHJSoOGY8BmcB4cKkkNMMRSTC1Sb6eAV%2FP5Svar%2FJHtU8%2BSRQ0x3Ho7trNVs2GofFaxloTlMaVrBzKoQ4EDnr%2BGel8WaeCB8UEM9elO1rnEyr4U%2FllAgWTLGV6GG6SeEb6BVeab96k5vaCa9qnL8Abif1Vwz%2FXkf69Ahvp7VVDkDOPGqqkm38bbq%2FhZOi1bRcx%2F0CTqosSEQq6fdMTt8iaKkORoc%2B2nWqpbDf5mcMorZQBNdGuEe1uxjGzcghVWmDPUckVaS4Bu5p8ntgbz5onqbVSBliFZ%2BsiYE8518onOvvqIiimvQsIOWSDCbcI%2BeRYLkFj%2F6QhIsFnAVJ%2BTPM%2BFpZCfaFKXvayhi%2Fd2zCLN4KCS7hpAYs9DZBuB7J04PzjN0MUYRZPEUulmlOb3JYCA%2Fj09QdSOxydXixvSpu6z6dn4ChRBRt7b7iId8CmH0znJLsaJnFaWFsig57%2FwySxJZ0l7snWjw4yKWTtIhyJmrJG%2BZkjZy1%2FfCViDea3TrgFzDYBVf1v6ha8nd5M2vWaYX4I4DdMSOqJnubB7o1l0o3foTxIdmAw0qye1AY6pgEmsM5XsDQHU9hUUt9YmGjkVMBpwnmNIoy0rQvwsfhiZByITxacwy8LHxRqeCsVfhVMgBxesdqkx1X54sx%2FMQeCVi12nPf5qe0si1noxqvIsncf%2BpayDQzz44wgy%2BDvUHQ8Hf7qGAROXaq2tDfjzs7qRnaLd8znkFhbs2mpWuwoCtcRcg8j0NHOdNGMM8cxtt%2B%2B9jTHLSvee4FlGRZd1GdvfjYpNfgv&X-Amz-Signature=475fec2f761c02fc2de9f70ffccc81e75a6d9433543ca7570b5c15c339c7cd28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNJMU4PA%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPmF%2FKr7PZq0TbpQdnPCChxDuSBI1CCeC7T1hdQyXnDAiAAtblS6Si%2BXHNEquTefhWdEsSs%2FOqU5rS3CGNs5oN27SqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMIhDUyyQ3J4BhYazKtwD4Yhja2Shp5ManNOrBcDeg9AtlbJtxoGtfXg1IezEhWM%2Bhnc%2FyzdfYHqoZrA7UQp8FkBRI3wHJSoOGY8BmcB4cKkkNMMRSTC1Sb6eAV%2FP5Svar%2FJHtU8%2BSRQ0x3Ho7trNVs2GofFaxloTlMaVrBzKoQ4EDnr%2BGel8WaeCB8UEM9elO1rnEyr4U%2FllAgWTLGV6GG6SeEb6BVeab96k5vaCa9qnL8Abif1Vwz%2FXkf69Ahvp7VVDkDOPGqqkm38bbq%2FhZOi1bRcx%2F0CTqosSEQq6fdMTt8iaKkORoc%2B2nWqpbDf5mcMorZQBNdGuEe1uxjGzcghVWmDPUckVaS4Bu5p8ntgbz5onqbVSBliFZ%2BsiYE8518onOvvqIiimvQsIOWSDCbcI%2BeRYLkFj%2F6QhIsFnAVJ%2BTPM%2BFpZCfaFKXvayhi%2Fd2zCLN4KCS7hpAYs9DZBuB7J04PzjN0MUYRZPEUulmlOb3JYCA%2Fj09QdSOxydXixvSpu6z6dn4ChRBRt7b7iId8CmH0znJLsaJnFaWFsig57%2FwySxJZ0l7snWjw4yKWTtIhyJmrJG%2BZkjZy1%2FfCViDea3TrgFzDYBVf1v6ha8nd5M2vWaYX4I4DdMSOqJnubB7o1l0o3foTxIdmAw0qye1AY6pgEmsM5XsDQHU9hUUt9YmGjkVMBpwnmNIoy0rQvwsfhiZByITxacwy8LHxRqeCsVfhVMgBxesdqkx1X54sx%2FMQeCVi12nPf5qe0si1noxqvIsncf%2BpayDQzz44wgy%2BDvUHQ8Hf7qGAROXaq2tDfjzs7qRnaLd8znkFhbs2mpWuwoCtcRcg8j0NHOdNGMM8cxtt%2B%2B9jTHLSvee4FlGRZd1GdvfjYpNfgv&X-Amz-Signature=749bab21a3eb7faf257b087b49cebba7928ba91ce621aca9546bc97950028165&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNJMU4PA%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPmF%2FKr7PZq0TbpQdnPCChxDuSBI1CCeC7T1hdQyXnDAiAAtblS6Si%2BXHNEquTefhWdEsSs%2FOqU5rS3CGNs5oN27SqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMIhDUyyQ3J4BhYazKtwD4Yhja2Shp5ManNOrBcDeg9AtlbJtxoGtfXg1IezEhWM%2Bhnc%2FyzdfYHqoZrA7UQp8FkBRI3wHJSoOGY8BmcB4cKkkNMMRSTC1Sb6eAV%2FP5Svar%2FJHtU8%2BSRQ0x3Ho7trNVs2GofFaxloTlMaVrBzKoQ4EDnr%2BGel8WaeCB8UEM9elO1rnEyr4U%2FllAgWTLGV6GG6SeEb6BVeab96k5vaCa9qnL8Abif1Vwz%2FXkf69Ahvp7VVDkDOPGqqkm38bbq%2FhZOi1bRcx%2F0CTqosSEQq6fdMTt8iaKkORoc%2B2nWqpbDf5mcMorZQBNdGuEe1uxjGzcghVWmDPUckVaS4Bu5p8ntgbz5onqbVSBliFZ%2BsiYE8518onOvvqIiimvQsIOWSDCbcI%2BeRYLkFj%2F6QhIsFnAVJ%2BTPM%2BFpZCfaFKXvayhi%2Fd2zCLN4KCS7hpAYs9DZBuB7J04PzjN0MUYRZPEUulmlOb3JYCA%2Fj09QdSOxydXixvSpu6z6dn4ChRBRt7b7iId8CmH0znJLsaJnFaWFsig57%2FwySxJZ0l7snWjw4yKWTtIhyJmrJG%2BZkjZy1%2FfCViDea3TrgFzDYBVf1v6ha8nd5M2vWaYX4I4DdMSOqJnubB7o1l0o3foTxIdmAw0qye1AY6pgEmsM5XsDQHU9hUUt9YmGjkVMBpwnmNIoy0rQvwsfhiZByITxacwy8LHxRqeCsVfhVMgBxesdqkx1X54sx%2FMQeCVi12nPf5qe0si1noxqvIsncf%2BpayDQzz44wgy%2BDvUHQ8Hf7qGAROXaq2tDfjzs7qRnaLd8znkFhbs2mpWuwoCtcRcg8j0NHOdNGMM8cxtt%2B%2B9jTHLSvee4FlGRZd1GdvfjYpNfgv&X-Amz-Signature=42c55188256f33549456586e144d04899fdab7b619a0a52a8f35783d3f04930b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNJMU4PA%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPmF%2FKr7PZq0TbpQdnPCChxDuSBI1CCeC7T1hdQyXnDAiAAtblS6Si%2BXHNEquTefhWdEsSs%2FOqU5rS3CGNs5oN27SqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMIhDUyyQ3J4BhYazKtwD4Yhja2Shp5ManNOrBcDeg9AtlbJtxoGtfXg1IezEhWM%2Bhnc%2FyzdfYHqoZrA7UQp8FkBRI3wHJSoOGY8BmcB4cKkkNMMRSTC1Sb6eAV%2FP5Svar%2FJHtU8%2BSRQ0x3Ho7trNVs2GofFaxloTlMaVrBzKoQ4EDnr%2BGel8WaeCB8UEM9elO1rnEyr4U%2FllAgWTLGV6GG6SeEb6BVeab96k5vaCa9qnL8Abif1Vwz%2FXkf69Ahvp7VVDkDOPGqqkm38bbq%2FhZOi1bRcx%2F0CTqosSEQq6fdMTt8iaKkORoc%2B2nWqpbDf5mcMorZQBNdGuEe1uxjGzcghVWmDPUckVaS4Bu5p8ntgbz5onqbVSBliFZ%2BsiYE8518onOvvqIiimvQsIOWSDCbcI%2BeRYLkFj%2F6QhIsFnAVJ%2BTPM%2BFpZCfaFKXvayhi%2Fd2zCLN4KCS7hpAYs9DZBuB7J04PzjN0MUYRZPEUulmlOb3JYCA%2Fj09QdSOxydXixvSpu6z6dn4ChRBRt7b7iId8CmH0znJLsaJnFaWFsig57%2FwySxJZ0l7snWjw4yKWTtIhyJmrJG%2BZkjZy1%2FfCViDea3TrgFzDYBVf1v6ha8nd5M2vWaYX4I4DdMSOqJnubB7o1l0o3foTxIdmAw0qye1AY6pgEmsM5XsDQHU9hUUt9YmGjkVMBpwnmNIoy0rQvwsfhiZByITxacwy8LHxRqeCsVfhVMgBxesdqkx1X54sx%2FMQeCVi12nPf5qe0si1noxqvIsncf%2BpayDQzz44wgy%2BDvUHQ8Hf7qGAROXaq2tDfjzs7qRnaLd8znkFhbs2mpWuwoCtcRcg8j0NHOdNGMM8cxtt%2B%2B9jTHLSvee4FlGRZd1GdvfjYpNfgv&X-Amz-Signature=47226c9ed2853e6731d914f805dedc7d4a36bfa97aa21e7439a5f498a3b73056&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNJMU4PA%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPmF%2FKr7PZq0TbpQdnPCChxDuSBI1CCeC7T1hdQyXnDAiAAtblS6Si%2BXHNEquTefhWdEsSs%2FOqU5rS3CGNs5oN27SqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMIhDUyyQ3J4BhYazKtwD4Yhja2Shp5ManNOrBcDeg9AtlbJtxoGtfXg1IezEhWM%2Bhnc%2FyzdfYHqoZrA7UQp8FkBRI3wHJSoOGY8BmcB4cKkkNMMRSTC1Sb6eAV%2FP5Svar%2FJHtU8%2BSRQ0x3Ho7trNVs2GofFaxloTlMaVrBzKoQ4EDnr%2BGel8WaeCB8UEM9elO1rnEyr4U%2FllAgWTLGV6GG6SeEb6BVeab96k5vaCa9qnL8Abif1Vwz%2FXkf69Ahvp7VVDkDOPGqqkm38bbq%2FhZOi1bRcx%2F0CTqosSEQq6fdMTt8iaKkORoc%2B2nWqpbDf5mcMorZQBNdGuEe1uxjGzcghVWmDPUckVaS4Bu5p8ntgbz5onqbVSBliFZ%2BsiYE8518onOvvqIiimvQsIOWSDCbcI%2BeRYLkFj%2F6QhIsFnAVJ%2BTPM%2BFpZCfaFKXvayhi%2Fd2zCLN4KCS7hpAYs9DZBuB7J04PzjN0MUYRZPEUulmlOb3JYCA%2Fj09QdSOxydXixvSpu6z6dn4ChRBRt7b7iId8CmH0znJLsaJnFaWFsig57%2FwySxJZ0l7snWjw4yKWTtIhyJmrJG%2BZkjZy1%2FfCViDea3TrgFzDYBVf1v6ha8nd5M2vWaYX4I4DdMSOqJnubB7o1l0o3foTxIdmAw0qye1AY6pgEmsM5XsDQHU9hUUt9YmGjkVMBpwnmNIoy0rQvwsfhiZByITxacwy8LHxRqeCsVfhVMgBxesdqkx1X54sx%2FMQeCVi12nPf5qe0si1noxqvIsncf%2BpayDQzz44wgy%2BDvUHQ8Hf7qGAROXaq2tDfjzs7qRnaLd8znkFhbs2mpWuwoCtcRcg8j0NHOdNGMM8cxtt%2B%2B9jTHLSvee4FlGRZd1GdvfjYpNfgv&X-Amz-Signature=5512f3a510742ce65c08411373e0ba1fb08e5f3e8277afe92db83825026871bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNJMU4PA%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPmF%2FKr7PZq0TbpQdnPCChxDuSBI1CCeC7T1hdQyXnDAiAAtblS6Si%2BXHNEquTefhWdEsSs%2FOqU5rS3CGNs5oN27SqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMIhDUyyQ3J4BhYazKtwD4Yhja2Shp5ManNOrBcDeg9AtlbJtxoGtfXg1IezEhWM%2Bhnc%2FyzdfYHqoZrA7UQp8FkBRI3wHJSoOGY8BmcB4cKkkNMMRSTC1Sb6eAV%2FP5Svar%2FJHtU8%2BSRQ0x3Ho7trNVs2GofFaxloTlMaVrBzKoQ4EDnr%2BGel8WaeCB8UEM9elO1rnEyr4U%2FllAgWTLGV6GG6SeEb6BVeab96k5vaCa9qnL8Abif1Vwz%2FXkf69Ahvp7VVDkDOPGqqkm38bbq%2FhZOi1bRcx%2F0CTqosSEQq6fdMTt8iaKkORoc%2B2nWqpbDf5mcMorZQBNdGuEe1uxjGzcghVWmDPUckVaS4Bu5p8ntgbz5onqbVSBliFZ%2BsiYE8518onOvvqIiimvQsIOWSDCbcI%2BeRYLkFj%2F6QhIsFnAVJ%2BTPM%2BFpZCfaFKXvayhi%2Fd2zCLN4KCS7hpAYs9DZBuB7J04PzjN0MUYRZPEUulmlOb3JYCA%2Fj09QdSOxydXixvSpu6z6dn4ChRBRt7b7iId8CmH0znJLsaJnFaWFsig57%2FwySxJZ0l7snWjw4yKWTtIhyJmrJG%2BZkjZy1%2FfCViDea3TrgFzDYBVf1v6ha8nd5M2vWaYX4I4DdMSOqJnubB7o1l0o3foTxIdmAw0qye1AY6pgEmsM5XsDQHU9hUUt9YmGjkVMBpwnmNIoy0rQvwsfhiZByITxacwy8LHxRqeCsVfhVMgBxesdqkx1X54sx%2FMQeCVi12nPf5qe0si1noxqvIsncf%2BpayDQzz44wgy%2BDvUHQ8Hf7qGAROXaq2tDfjzs7qRnaLd8znkFhbs2mpWuwoCtcRcg8j0NHOdNGMM8cxtt%2B%2B9jTHLSvee4FlGRZd1GdvfjYpNfgv&X-Amz-Signature=e5097e6aaf7371bc50a73eec8dc9356566e7098494a137a7fc4af7719324e26b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNJMU4PA%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPmF%2FKr7PZq0TbpQdnPCChxDuSBI1CCeC7T1hdQyXnDAiAAtblS6Si%2BXHNEquTefhWdEsSs%2FOqU5rS3CGNs5oN27SqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMIhDUyyQ3J4BhYazKtwD4Yhja2Shp5ManNOrBcDeg9AtlbJtxoGtfXg1IezEhWM%2Bhnc%2FyzdfYHqoZrA7UQp8FkBRI3wHJSoOGY8BmcB4cKkkNMMRSTC1Sb6eAV%2FP5Svar%2FJHtU8%2BSRQ0x3Ho7trNVs2GofFaxloTlMaVrBzKoQ4EDnr%2BGel8WaeCB8UEM9elO1rnEyr4U%2FllAgWTLGV6GG6SeEb6BVeab96k5vaCa9qnL8Abif1Vwz%2FXkf69Ahvp7VVDkDOPGqqkm38bbq%2FhZOi1bRcx%2F0CTqosSEQq6fdMTt8iaKkORoc%2B2nWqpbDf5mcMorZQBNdGuEe1uxjGzcghVWmDPUckVaS4Bu5p8ntgbz5onqbVSBliFZ%2BsiYE8518onOvvqIiimvQsIOWSDCbcI%2BeRYLkFj%2F6QhIsFnAVJ%2BTPM%2BFpZCfaFKXvayhi%2Fd2zCLN4KCS7hpAYs9DZBuB7J04PzjN0MUYRZPEUulmlOb3JYCA%2Fj09QdSOxydXixvSpu6z6dn4ChRBRt7b7iId8CmH0znJLsaJnFaWFsig57%2FwySxJZ0l7snWjw4yKWTtIhyJmrJG%2BZkjZy1%2FfCViDea3TrgFzDYBVf1v6ha8nd5M2vWaYX4I4DdMSOqJnubB7o1l0o3foTxIdmAw0qye1AY6pgEmsM5XsDQHU9hUUt9YmGjkVMBpwnmNIoy0rQvwsfhiZByITxacwy8LHxRqeCsVfhVMgBxesdqkx1X54sx%2FMQeCVi12nPf5qe0si1noxqvIsncf%2BpayDQzz44wgy%2BDvUHQ8Hf7qGAROXaq2tDfjzs7qRnaLd8znkFhbs2mpWuwoCtcRcg8j0NHOdNGMM8cxtt%2B%2B9jTHLSvee4FlGRZd1GdvfjYpNfgv&X-Amz-Signature=7ca6f278b2c0b65c12f7d12fa820bcc24cb2381edfb63991b622f4c677d610db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNJMU4PA%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPmF%2FKr7PZq0TbpQdnPCChxDuSBI1CCeC7T1hdQyXnDAiAAtblS6Si%2BXHNEquTefhWdEsSs%2FOqU5rS3CGNs5oN27SqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMIhDUyyQ3J4BhYazKtwD4Yhja2Shp5ManNOrBcDeg9AtlbJtxoGtfXg1IezEhWM%2Bhnc%2FyzdfYHqoZrA7UQp8FkBRI3wHJSoOGY8BmcB4cKkkNMMRSTC1Sb6eAV%2FP5Svar%2FJHtU8%2BSRQ0x3Ho7trNVs2GofFaxloTlMaVrBzKoQ4EDnr%2BGel8WaeCB8UEM9elO1rnEyr4U%2FllAgWTLGV6GG6SeEb6BVeab96k5vaCa9qnL8Abif1Vwz%2FXkf69Ahvp7VVDkDOPGqqkm38bbq%2FhZOi1bRcx%2F0CTqosSEQq6fdMTt8iaKkORoc%2B2nWqpbDf5mcMorZQBNdGuEe1uxjGzcghVWmDPUckVaS4Bu5p8ntgbz5onqbVSBliFZ%2BsiYE8518onOvvqIiimvQsIOWSDCbcI%2BeRYLkFj%2F6QhIsFnAVJ%2BTPM%2BFpZCfaFKXvayhi%2Fd2zCLN4KCS7hpAYs9DZBuB7J04PzjN0MUYRZPEUulmlOb3JYCA%2Fj09QdSOxydXixvSpu6z6dn4ChRBRt7b7iId8CmH0znJLsaJnFaWFsig57%2FwySxJZ0l7snWjw4yKWTtIhyJmrJG%2BZkjZy1%2FfCViDea3TrgFzDYBVf1v6ha8nd5M2vWaYX4I4DdMSOqJnubB7o1l0o3foTxIdmAw0qye1AY6pgEmsM5XsDQHU9hUUt9YmGjkVMBpwnmNIoy0rQvwsfhiZByITxacwy8LHxRqeCsVfhVMgBxesdqkx1X54sx%2FMQeCVi12nPf5qe0si1noxqvIsncf%2BpayDQzz44wgy%2BDvUHQ8Hf7qGAROXaq2tDfjzs7qRnaLd8znkFhbs2mpWuwoCtcRcg8j0NHOdNGMM8cxtt%2B%2B9jTHLSvee4FlGRZd1GdvfjYpNfgv&X-Amz-Signature=6fa40b7f97d5ab706c3782e99e5c1c6ec23a71878624904f080c55daab69d4fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNJMU4PA%2F20260821%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260821T011649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBPmF%2FKr7PZq0TbpQdnPCChxDuSBI1CCeC7T1hdQyXnDAiAAtblS6Si%2BXHNEquTefhWdEsSs%2FOqU5rS3CGNs5oN27SqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMMIhDUyyQ3J4BhYazKtwD4Yhja2Shp5ManNOrBcDeg9AtlbJtxoGtfXg1IezEhWM%2Bhnc%2FyzdfYHqoZrA7UQp8FkBRI3wHJSoOGY8BmcB4cKkkNMMRSTC1Sb6eAV%2FP5Svar%2FJHtU8%2BSRQ0x3Ho7trNVs2GofFaxloTlMaVrBzKoQ4EDnr%2BGel8WaeCB8UEM9elO1rnEyr4U%2FllAgWTLGV6GG6SeEb6BVeab96k5vaCa9qnL8Abif1Vwz%2FXkf69Ahvp7VVDkDOPGqqkm38bbq%2FhZOi1bRcx%2F0CTqosSEQq6fdMTt8iaKkORoc%2B2nWqpbDf5mcMorZQBNdGuEe1uxjGzcghVWmDPUckVaS4Bu5p8ntgbz5onqbVSBliFZ%2BsiYE8518onOvvqIiimvQsIOWSDCbcI%2BeRYLkFj%2F6QhIsFnAVJ%2BTPM%2BFpZCfaFKXvayhi%2Fd2zCLN4KCS7hpAYs9DZBuB7J04PzjN0MUYRZPEUulmlOb3JYCA%2Fj09QdSOxydXixvSpu6z6dn4ChRBRt7b7iId8CmH0znJLsaJnFaWFsig57%2FwySxJZ0l7snWjw4yKWTtIhyJmrJG%2BZkjZy1%2FfCViDea3TrgFzDYBVf1v6ha8nd5M2vWaYX4I4DdMSOqJnubB7o1l0o3foTxIdmAw0qye1AY6pgEmsM5XsDQHU9hUUt9YmGjkVMBpwnmNIoy0rQvwsfhiZByITxacwy8LHxRqeCsVfhVMgBxesdqkx1X54sx%2FMQeCVi12nPf5qe0si1noxqvIsncf%2BpayDQzz44wgy%2BDvUHQ8Hf7qGAROXaq2tDfjzs7qRnaLd8znkFhbs2mpWuwoCtcRcg8j0NHOdNGMM8cxtt%2B%2B9jTHLSvee4FlGRZd1GdvfjYpNfgv&X-Amz-Signature=ef9de8ad62cca5cea2ed35495c3f68c71200ff4ad1305d183599ba9886f2fd53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
