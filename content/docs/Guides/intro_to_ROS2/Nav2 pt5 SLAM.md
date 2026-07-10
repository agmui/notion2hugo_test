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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665674C2KF%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsH3csWGPExuBMT46kzs0APXSb8GHC%2FFHn3HVRe9WNewIgOBqkgkYKGMDtTSLTNoFb4qUlRAmRS1HkKHjNQ3c2pDAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOe92183xdyItspVVircA6oUdX9D7Ps4fqMK%2FPv5aoJZq3IwTEwm%2F%2Bu5Rnd%2BdirUJjaYawgOXkzUJYy5EqvAjIIB0zK7%2BpCzzhHpwjiDxZjTIbYh49pCndvXpxhfHxC6DXSyi5zFFxqsEZCE1dA8suZWW7irxJ5%2FjhG%2FbhuVGD7U3Lbo63iaEfS2%2FejHjc1oNzgH9JCY3xsVz%2BvMbDZruEI%2Fc592sQ9S9YRlkVEr9ILWjaTZoVCROkk2MGQjH5xScT%2Fb5gXYyUdjiYYmhSWVIb6MwpUuSYghc1jRtwVxfGlnj7FbQ%2FxdPxd0yH9BKlkN6EekNAtJlVyjbDp1ZgmN60l65NXP4iabtu6RkeWxbcnERYR0jtgtB5VCP0mTJuMEVbWVmkLTCYCQoTJYjarzpn9zisfDYT7mfEZA%2FT01dJGhitas88Xjm%2B2a0Gg%2F6BIKIrw%2FhXiXkcGnZK%2FCzSd4EIxTFOH0AenriQQ56rWBtg8ypldDy%2BA6xi5DtmUZSTnZMRKzzLPw5Xp%2F1MyHGSzZTVWLOh7aoeZiFZZPGGnbaG5RLYRyFYs0aNOOKXQOto1n8yn129v0vjdTkszMiK4AlPtdTFSu%2B4Hi739Gw4WYu%2B48t%2BbEwSWWPRwcT78y9xO%2FkLiVcSuiya59uqpBMLi5wdIGOqUBVJIzT7TnLkssw6c1yIpvXxUBVGFIWh3trwH01%2FLBEdDgI5URALO93sORywJcRODBOTN8PHrT7y8nm2KJGgYRK%2Fuac%2BlDCUSSNWx2oE6aZlF%2Bpb6LSYfyhD0Q5XPMBO%2FvWdYI4fY79vb8pxT3P7M8%2BBqqwz6WVHijZBX7crX%2B2E34IM9aXzP9mEQHLwF5u9xY98u8h%2B9E9I1Nxe3yyhzM7%2B%2FWOyf4&X-Amz-Signature=d0b199a834e43fa205e52443fd22c3b1af5b9cb9fcc245010533739c5719a6b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665674C2KF%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsH3csWGPExuBMT46kzs0APXSb8GHC%2FFHn3HVRe9WNewIgOBqkgkYKGMDtTSLTNoFb4qUlRAmRS1HkKHjNQ3c2pDAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOe92183xdyItspVVircA6oUdX9D7Ps4fqMK%2FPv5aoJZq3IwTEwm%2F%2Bu5Rnd%2BdirUJjaYawgOXkzUJYy5EqvAjIIB0zK7%2BpCzzhHpwjiDxZjTIbYh49pCndvXpxhfHxC6DXSyi5zFFxqsEZCE1dA8suZWW7irxJ5%2FjhG%2FbhuVGD7U3Lbo63iaEfS2%2FejHjc1oNzgH9JCY3xsVz%2BvMbDZruEI%2Fc592sQ9S9YRlkVEr9ILWjaTZoVCROkk2MGQjH5xScT%2Fb5gXYyUdjiYYmhSWVIb6MwpUuSYghc1jRtwVxfGlnj7FbQ%2FxdPxd0yH9BKlkN6EekNAtJlVyjbDp1ZgmN60l65NXP4iabtu6RkeWxbcnERYR0jtgtB5VCP0mTJuMEVbWVmkLTCYCQoTJYjarzpn9zisfDYT7mfEZA%2FT01dJGhitas88Xjm%2B2a0Gg%2F6BIKIrw%2FhXiXkcGnZK%2FCzSd4EIxTFOH0AenriQQ56rWBtg8ypldDy%2BA6xi5DtmUZSTnZMRKzzLPw5Xp%2F1MyHGSzZTVWLOh7aoeZiFZZPGGnbaG5RLYRyFYs0aNOOKXQOto1n8yn129v0vjdTkszMiK4AlPtdTFSu%2B4Hi739Gw4WYu%2B48t%2BbEwSWWPRwcT78y9xO%2FkLiVcSuiya59uqpBMLi5wdIGOqUBVJIzT7TnLkssw6c1yIpvXxUBVGFIWh3trwH01%2FLBEdDgI5URALO93sORywJcRODBOTN8PHrT7y8nm2KJGgYRK%2Fuac%2BlDCUSSNWx2oE6aZlF%2Bpb6LSYfyhD0Q5XPMBO%2FvWdYI4fY79vb8pxT3P7M8%2BBqqwz6WVHijZBX7crX%2B2E34IM9aXzP9mEQHLwF5u9xY98u8h%2B9E9I1Nxe3yyhzM7%2B%2FWOyf4&X-Amz-Signature=685dd99cbee00a5292060b7e5768ba1be4a2fefb8c3bc444e7b518ed5824b497&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665674C2KF%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsH3csWGPExuBMT46kzs0APXSb8GHC%2FFHn3HVRe9WNewIgOBqkgkYKGMDtTSLTNoFb4qUlRAmRS1HkKHjNQ3c2pDAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOe92183xdyItspVVircA6oUdX9D7Ps4fqMK%2FPv5aoJZq3IwTEwm%2F%2Bu5Rnd%2BdirUJjaYawgOXkzUJYy5EqvAjIIB0zK7%2BpCzzhHpwjiDxZjTIbYh49pCndvXpxhfHxC6DXSyi5zFFxqsEZCE1dA8suZWW7irxJ5%2FjhG%2FbhuVGD7U3Lbo63iaEfS2%2FejHjc1oNzgH9JCY3xsVz%2BvMbDZruEI%2Fc592sQ9S9YRlkVEr9ILWjaTZoVCROkk2MGQjH5xScT%2Fb5gXYyUdjiYYmhSWVIb6MwpUuSYghc1jRtwVxfGlnj7FbQ%2FxdPxd0yH9BKlkN6EekNAtJlVyjbDp1ZgmN60l65NXP4iabtu6RkeWxbcnERYR0jtgtB5VCP0mTJuMEVbWVmkLTCYCQoTJYjarzpn9zisfDYT7mfEZA%2FT01dJGhitas88Xjm%2B2a0Gg%2F6BIKIrw%2FhXiXkcGnZK%2FCzSd4EIxTFOH0AenriQQ56rWBtg8ypldDy%2BA6xi5DtmUZSTnZMRKzzLPw5Xp%2F1MyHGSzZTVWLOh7aoeZiFZZPGGnbaG5RLYRyFYs0aNOOKXQOto1n8yn129v0vjdTkszMiK4AlPtdTFSu%2B4Hi739Gw4WYu%2B48t%2BbEwSWWPRwcT78y9xO%2FkLiVcSuiya59uqpBMLi5wdIGOqUBVJIzT7TnLkssw6c1yIpvXxUBVGFIWh3trwH01%2FLBEdDgI5URALO93sORywJcRODBOTN8PHrT7y8nm2KJGgYRK%2Fuac%2BlDCUSSNWx2oE6aZlF%2Bpb6LSYfyhD0Q5XPMBO%2FvWdYI4fY79vb8pxT3P7M8%2BBqqwz6WVHijZBX7crX%2B2E34IM9aXzP9mEQHLwF5u9xY98u8h%2B9E9I1Nxe3yyhzM7%2B%2FWOyf4&X-Amz-Signature=d17f8145c9ce9db50ec49e9ca4a8dc08611a53b4df8a79c09825b2e2b66ae602&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665674C2KF%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsH3csWGPExuBMT46kzs0APXSb8GHC%2FFHn3HVRe9WNewIgOBqkgkYKGMDtTSLTNoFb4qUlRAmRS1HkKHjNQ3c2pDAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOe92183xdyItspVVircA6oUdX9D7Ps4fqMK%2FPv5aoJZq3IwTEwm%2F%2Bu5Rnd%2BdirUJjaYawgOXkzUJYy5EqvAjIIB0zK7%2BpCzzhHpwjiDxZjTIbYh49pCndvXpxhfHxC6DXSyi5zFFxqsEZCE1dA8suZWW7irxJ5%2FjhG%2FbhuVGD7U3Lbo63iaEfS2%2FejHjc1oNzgH9JCY3xsVz%2BvMbDZruEI%2Fc592sQ9S9YRlkVEr9ILWjaTZoVCROkk2MGQjH5xScT%2Fb5gXYyUdjiYYmhSWVIb6MwpUuSYghc1jRtwVxfGlnj7FbQ%2FxdPxd0yH9BKlkN6EekNAtJlVyjbDp1ZgmN60l65NXP4iabtu6RkeWxbcnERYR0jtgtB5VCP0mTJuMEVbWVmkLTCYCQoTJYjarzpn9zisfDYT7mfEZA%2FT01dJGhitas88Xjm%2B2a0Gg%2F6BIKIrw%2FhXiXkcGnZK%2FCzSd4EIxTFOH0AenriQQ56rWBtg8ypldDy%2BA6xi5DtmUZSTnZMRKzzLPw5Xp%2F1MyHGSzZTVWLOh7aoeZiFZZPGGnbaG5RLYRyFYs0aNOOKXQOto1n8yn129v0vjdTkszMiK4AlPtdTFSu%2B4Hi739Gw4WYu%2B48t%2BbEwSWWPRwcT78y9xO%2FkLiVcSuiya59uqpBMLi5wdIGOqUBVJIzT7TnLkssw6c1yIpvXxUBVGFIWh3trwH01%2FLBEdDgI5URALO93sORywJcRODBOTN8PHrT7y8nm2KJGgYRK%2Fuac%2BlDCUSSNWx2oE6aZlF%2Bpb6LSYfyhD0Q5XPMBO%2FvWdYI4fY79vb8pxT3P7M8%2BBqqwz6WVHijZBX7crX%2B2E34IM9aXzP9mEQHLwF5u9xY98u8h%2B9E9I1Nxe3yyhzM7%2B%2FWOyf4&X-Amz-Signature=b347aa61b8e333353c1fdd900934173a2e1db174b23c5d1e63e53e285b1787d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665674C2KF%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsH3csWGPExuBMT46kzs0APXSb8GHC%2FFHn3HVRe9WNewIgOBqkgkYKGMDtTSLTNoFb4qUlRAmRS1HkKHjNQ3c2pDAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOe92183xdyItspVVircA6oUdX9D7Ps4fqMK%2FPv5aoJZq3IwTEwm%2F%2Bu5Rnd%2BdirUJjaYawgOXkzUJYy5EqvAjIIB0zK7%2BpCzzhHpwjiDxZjTIbYh49pCndvXpxhfHxC6DXSyi5zFFxqsEZCE1dA8suZWW7irxJ5%2FjhG%2FbhuVGD7U3Lbo63iaEfS2%2FejHjc1oNzgH9JCY3xsVz%2BvMbDZruEI%2Fc592sQ9S9YRlkVEr9ILWjaTZoVCROkk2MGQjH5xScT%2Fb5gXYyUdjiYYmhSWVIb6MwpUuSYghc1jRtwVxfGlnj7FbQ%2FxdPxd0yH9BKlkN6EekNAtJlVyjbDp1ZgmN60l65NXP4iabtu6RkeWxbcnERYR0jtgtB5VCP0mTJuMEVbWVmkLTCYCQoTJYjarzpn9zisfDYT7mfEZA%2FT01dJGhitas88Xjm%2B2a0Gg%2F6BIKIrw%2FhXiXkcGnZK%2FCzSd4EIxTFOH0AenriQQ56rWBtg8ypldDy%2BA6xi5DtmUZSTnZMRKzzLPw5Xp%2F1MyHGSzZTVWLOh7aoeZiFZZPGGnbaG5RLYRyFYs0aNOOKXQOto1n8yn129v0vjdTkszMiK4AlPtdTFSu%2B4Hi739Gw4WYu%2B48t%2BbEwSWWPRwcT78y9xO%2FkLiVcSuiya59uqpBMLi5wdIGOqUBVJIzT7TnLkssw6c1yIpvXxUBVGFIWh3trwH01%2FLBEdDgI5URALO93sORywJcRODBOTN8PHrT7y8nm2KJGgYRK%2Fuac%2BlDCUSSNWx2oE6aZlF%2Bpb6LSYfyhD0Q5XPMBO%2FvWdYI4fY79vb8pxT3P7M8%2BBqqwz6WVHijZBX7crX%2B2E34IM9aXzP9mEQHLwF5u9xY98u8h%2B9E9I1Nxe3yyhzM7%2B%2FWOyf4&X-Amz-Signature=c9089c4db280a36df76fad5bb89a63f57ca823407009e98fe417b11ab2bbbb98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665674C2KF%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsH3csWGPExuBMT46kzs0APXSb8GHC%2FFHn3HVRe9WNewIgOBqkgkYKGMDtTSLTNoFb4qUlRAmRS1HkKHjNQ3c2pDAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOe92183xdyItspVVircA6oUdX9D7Ps4fqMK%2FPv5aoJZq3IwTEwm%2F%2Bu5Rnd%2BdirUJjaYawgOXkzUJYy5EqvAjIIB0zK7%2BpCzzhHpwjiDxZjTIbYh49pCndvXpxhfHxC6DXSyi5zFFxqsEZCE1dA8suZWW7irxJ5%2FjhG%2FbhuVGD7U3Lbo63iaEfS2%2FejHjc1oNzgH9JCY3xsVz%2BvMbDZruEI%2Fc592sQ9S9YRlkVEr9ILWjaTZoVCROkk2MGQjH5xScT%2Fb5gXYyUdjiYYmhSWVIb6MwpUuSYghc1jRtwVxfGlnj7FbQ%2FxdPxd0yH9BKlkN6EekNAtJlVyjbDp1ZgmN60l65NXP4iabtu6RkeWxbcnERYR0jtgtB5VCP0mTJuMEVbWVmkLTCYCQoTJYjarzpn9zisfDYT7mfEZA%2FT01dJGhitas88Xjm%2B2a0Gg%2F6BIKIrw%2FhXiXkcGnZK%2FCzSd4EIxTFOH0AenriQQ56rWBtg8ypldDy%2BA6xi5DtmUZSTnZMRKzzLPw5Xp%2F1MyHGSzZTVWLOh7aoeZiFZZPGGnbaG5RLYRyFYs0aNOOKXQOto1n8yn129v0vjdTkszMiK4AlPtdTFSu%2B4Hi739Gw4WYu%2B48t%2BbEwSWWPRwcT78y9xO%2FkLiVcSuiya59uqpBMLi5wdIGOqUBVJIzT7TnLkssw6c1yIpvXxUBVGFIWh3trwH01%2FLBEdDgI5URALO93sORywJcRODBOTN8PHrT7y8nm2KJGgYRK%2Fuac%2BlDCUSSNWx2oE6aZlF%2Bpb6LSYfyhD0Q5XPMBO%2FvWdYI4fY79vb8pxT3P7M8%2BBqqwz6WVHijZBX7crX%2B2E34IM9aXzP9mEQHLwF5u9xY98u8h%2B9E9I1Nxe3yyhzM7%2B%2FWOyf4&X-Amz-Signature=1aea8f685c1a15b53a121086d009252bb31d8fa8b5939052f62f4ae53781bc88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665674C2KF%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsH3csWGPExuBMT46kzs0APXSb8GHC%2FFHn3HVRe9WNewIgOBqkgkYKGMDtTSLTNoFb4qUlRAmRS1HkKHjNQ3c2pDAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOe92183xdyItspVVircA6oUdX9D7Ps4fqMK%2FPv5aoJZq3IwTEwm%2F%2Bu5Rnd%2BdirUJjaYawgOXkzUJYy5EqvAjIIB0zK7%2BpCzzhHpwjiDxZjTIbYh49pCndvXpxhfHxC6DXSyi5zFFxqsEZCE1dA8suZWW7irxJ5%2FjhG%2FbhuVGD7U3Lbo63iaEfS2%2FejHjc1oNzgH9JCY3xsVz%2BvMbDZruEI%2Fc592sQ9S9YRlkVEr9ILWjaTZoVCROkk2MGQjH5xScT%2Fb5gXYyUdjiYYmhSWVIb6MwpUuSYghc1jRtwVxfGlnj7FbQ%2FxdPxd0yH9BKlkN6EekNAtJlVyjbDp1ZgmN60l65NXP4iabtu6RkeWxbcnERYR0jtgtB5VCP0mTJuMEVbWVmkLTCYCQoTJYjarzpn9zisfDYT7mfEZA%2FT01dJGhitas88Xjm%2B2a0Gg%2F6BIKIrw%2FhXiXkcGnZK%2FCzSd4EIxTFOH0AenriQQ56rWBtg8ypldDy%2BA6xi5DtmUZSTnZMRKzzLPw5Xp%2F1MyHGSzZTVWLOh7aoeZiFZZPGGnbaG5RLYRyFYs0aNOOKXQOto1n8yn129v0vjdTkszMiK4AlPtdTFSu%2B4Hi739Gw4WYu%2B48t%2BbEwSWWPRwcT78y9xO%2FkLiVcSuiya59uqpBMLi5wdIGOqUBVJIzT7TnLkssw6c1yIpvXxUBVGFIWh3trwH01%2FLBEdDgI5URALO93sORywJcRODBOTN8PHrT7y8nm2KJGgYRK%2Fuac%2BlDCUSSNWx2oE6aZlF%2Bpb6LSYfyhD0Q5XPMBO%2FvWdYI4fY79vb8pxT3P7M8%2BBqqwz6WVHijZBX7crX%2B2E34IM9aXzP9mEQHLwF5u9xY98u8h%2B9E9I1Nxe3yyhzM7%2B%2FWOyf4&X-Amz-Signature=0ed89488903c91fe1a310c18df5874307ad87728f727f7eaa199c5deb99a6356&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665674C2KF%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsH3csWGPExuBMT46kzs0APXSb8GHC%2FFHn3HVRe9WNewIgOBqkgkYKGMDtTSLTNoFb4qUlRAmRS1HkKHjNQ3c2pDAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOe92183xdyItspVVircA6oUdX9D7Ps4fqMK%2FPv5aoJZq3IwTEwm%2F%2Bu5Rnd%2BdirUJjaYawgOXkzUJYy5EqvAjIIB0zK7%2BpCzzhHpwjiDxZjTIbYh49pCndvXpxhfHxC6DXSyi5zFFxqsEZCE1dA8suZWW7irxJ5%2FjhG%2FbhuVGD7U3Lbo63iaEfS2%2FejHjc1oNzgH9JCY3xsVz%2BvMbDZruEI%2Fc592sQ9S9YRlkVEr9ILWjaTZoVCROkk2MGQjH5xScT%2Fb5gXYyUdjiYYmhSWVIb6MwpUuSYghc1jRtwVxfGlnj7FbQ%2FxdPxd0yH9BKlkN6EekNAtJlVyjbDp1ZgmN60l65NXP4iabtu6RkeWxbcnERYR0jtgtB5VCP0mTJuMEVbWVmkLTCYCQoTJYjarzpn9zisfDYT7mfEZA%2FT01dJGhitas88Xjm%2B2a0Gg%2F6BIKIrw%2FhXiXkcGnZK%2FCzSd4EIxTFOH0AenriQQ56rWBtg8ypldDy%2BA6xi5DtmUZSTnZMRKzzLPw5Xp%2F1MyHGSzZTVWLOh7aoeZiFZZPGGnbaG5RLYRyFYs0aNOOKXQOto1n8yn129v0vjdTkszMiK4AlPtdTFSu%2B4Hi739Gw4WYu%2B48t%2BbEwSWWPRwcT78y9xO%2FkLiVcSuiya59uqpBMLi5wdIGOqUBVJIzT7TnLkssw6c1yIpvXxUBVGFIWh3trwH01%2FLBEdDgI5URALO93sORywJcRODBOTN8PHrT7y8nm2KJGgYRK%2Fuac%2BlDCUSSNWx2oE6aZlF%2Bpb6LSYfyhD0Q5XPMBO%2FvWdYI4fY79vb8pxT3P7M8%2BBqqwz6WVHijZBX7crX%2B2E34IM9aXzP9mEQHLwF5u9xY98u8h%2B9E9I1Nxe3yyhzM7%2B%2FWOyf4&X-Amz-Signature=840b324ea0e8d699becbe72ff757f8e44d3f2ab986b381af7345f90ac511f073&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665674C2KF%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsH3csWGPExuBMT46kzs0APXSb8GHC%2FFHn3HVRe9WNewIgOBqkgkYKGMDtTSLTNoFb4qUlRAmRS1HkKHjNQ3c2pDAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOe92183xdyItspVVircA6oUdX9D7Ps4fqMK%2FPv5aoJZq3IwTEwm%2F%2Bu5Rnd%2BdirUJjaYawgOXkzUJYy5EqvAjIIB0zK7%2BpCzzhHpwjiDxZjTIbYh49pCndvXpxhfHxC6DXSyi5zFFxqsEZCE1dA8suZWW7irxJ5%2FjhG%2FbhuVGD7U3Lbo63iaEfS2%2FejHjc1oNzgH9JCY3xsVz%2BvMbDZruEI%2Fc592sQ9S9YRlkVEr9ILWjaTZoVCROkk2MGQjH5xScT%2Fb5gXYyUdjiYYmhSWVIb6MwpUuSYghc1jRtwVxfGlnj7FbQ%2FxdPxd0yH9BKlkN6EekNAtJlVyjbDp1ZgmN60l65NXP4iabtu6RkeWxbcnERYR0jtgtB5VCP0mTJuMEVbWVmkLTCYCQoTJYjarzpn9zisfDYT7mfEZA%2FT01dJGhitas88Xjm%2B2a0Gg%2F6BIKIrw%2FhXiXkcGnZK%2FCzSd4EIxTFOH0AenriQQ56rWBtg8ypldDy%2BA6xi5DtmUZSTnZMRKzzLPw5Xp%2F1MyHGSzZTVWLOh7aoeZiFZZPGGnbaG5RLYRyFYs0aNOOKXQOto1n8yn129v0vjdTkszMiK4AlPtdTFSu%2B4Hi739Gw4WYu%2B48t%2BbEwSWWPRwcT78y9xO%2FkLiVcSuiya59uqpBMLi5wdIGOqUBVJIzT7TnLkssw6c1yIpvXxUBVGFIWh3trwH01%2FLBEdDgI5URALO93sORywJcRODBOTN8PHrT7y8nm2KJGgYRK%2Fuac%2BlDCUSSNWx2oE6aZlF%2Bpb6LSYfyhD0Q5XPMBO%2FvWdYI4fY79vb8pxT3P7M8%2BBqqwz6WVHijZBX7crX%2B2E34IM9aXzP9mEQHLwF5u9xY98u8h%2B9E9I1Nxe3yyhzM7%2B%2FWOyf4&X-Amz-Signature=4df12743c7f63674080e24c63195b10ac0d6fca4a78d29aea0af66a7b5fb21b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665674C2KF%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsH3csWGPExuBMT46kzs0APXSb8GHC%2FFHn3HVRe9WNewIgOBqkgkYKGMDtTSLTNoFb4qUlRAmRS1HkKHjNQ3c2pDAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOe92183xdyItspVVircA6oUdX9D7Ps4fqMK%2FPv5aoJZq3IwTEwm%2F%2Bu5Rnd%2BdirUJjaYawgOXkzUJYy5EqvAjIIB0zK7%2BpCzzhHpwjiDxZjTIbYh49pCndvXpxhfHxC6DXSyi5zFFxqsEZCE1dA8suZWW7irxJ5%2FjhG%2FbhuVGD7U3Lbo63iaEfS2%2FejHjc1oNzgH9JCY3xsVz%2BvMbDZruEI%2Fc592sQ9S9YRlkVEr9ILWjaTZoVCROkk2MGQjH5xScT%2Fb5gXYyUdjiYYmhSWVIb6MwpUuSYghc1jRtwVxfGlnj7FbQ%2FxdPxd0yH9BKlkN6EekNAtJlVyjbDp1ZgmN60l65NXP4iabtu6RkeWxbcnERYR0jtgtB5VCP0mTJuMEVbWVmkLTCYCQoTJYjarzpn9zisfDYT7mfEZA%2FT01dJGhitas88Xjm%2B2a0Gg%2F6BIKIrw%2FhXiXkcGnZK%2FCzSd4EIxTFOH0AenriQQ56rWBtg8ypldDy%2BA6xi5DtmUZSTnZMRKzzLPw5Xp%2F1MyHGSzZTVWLOh7aoeZiFZZPGGnbaG5RLYRyFYs0aNOOKXQOto1n8yn129v0vjdTkszMiK4AlPtdTFSu%2B4Hi739Gw4WYu%2B48t%2BbEwSWWPRwcT78y9xO%2FkLiVcSuiya59uqpBMLi5wdIGOqUBVJIzT7TnLkssw6c1yIpvXxUBVGFIWh3trwH01%2FLBEdDgI5URALO93sORywJcRODBOTN8PHrT7y8nm2KJGgYRK%2Fuac%2BlDCUSSNWx2oE6aZlF%2Bpb6LSYfyhD0Q5XPMBO%2FvWdYI4fY79vb8pxT3P7M8%2BBqqwz6WVHijZBX7crX%2B2E34IM9aXzP9mEQHLwF5u9xY98u8h%2B9E9I1Nxe3yyhzM7%2B%2FWOyf4&X-Amz-Signature=87f9b4fe979e25054a364fa01769e93fb58f6449dd35260bd7fee8e36b72250d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665674C2KF%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsH3csWGPExuBMT46kzs0APXSb8GHC%2FFHn3HVRe9WNewIgOBqkgkYKGMDtTSLTNoFb4qUlRAmRS1HkKHjNQ3c2pDAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOe92183xdyItspVVircA6oUdX9D7Ps4fqMK%2FPv5aoJZq3IwTEwm%2F%2Bu5Rnd%2BdirUJjaYawgOXkzUJYy5EqvAjIIB0zK7%2BpCzzhHpwjiDxZjTIbYh49pCndvXpxhfHxC6DXSyi5zFFxqsEZCE1dA8suZWW7irxJ5%2FjhG%2FbhuVGD7U3Lbo63iaEfS2%2FejHjc1oNzgH9JCY3xsVz%2BvMbDZruEI%2Fc592sQ9S9YRlkVEr9ILWjaTZoVCROkk2MGQjH5xScT%2Fb5gXYyUdjiYYmhSWVIb6MwpUuSYghc1jRtwVxfGlnj7FbQ%2FxdPxd0yH9BKlkN6EekNAtJlVyjbDp1ZgmN60l65NXP4iabtu6RkeWxbcnERYR0jtgtB5VCP0mTJuMEVbWVmkLTCYCQoTJYjarzpn9zisfDYT7mfEZA%2FT01dJGhitas88Xjm%2B2a0Gg%2F6BIKIrw%2FhXiXkcGnZK%2FCzSd4EIxTFOH0AenriQQ56rWBtg8ypldDy%2BA6xi5DtmUZSTnZMRKzzLPw5Xp%2F1MyHGSzZTVWLOh7aoeZiFZZPGGnbaG5RLYRyFYs0aNOOKXQOto1n8yn129v0vjdTkszMiK4AlPtdTFSu%2B4Hi739Gw4WYu%2B48t%2BbEwSWWPRwcT78y9xO%2FkLiVcSuiya59uqpBMLi5wdIGOqUBVJIzT7TnLkssw6c1yIpvXxUBVGFIWh3trwH01%2FLBEdDgI5URALO93sORywJcRODBOTN8PHrT7y8nm2KJGgYRK%2Fuac%2BlDCUSSNWx2oE6aZlF%2Bpb6LSYfyhD0Q5XPMBO%2FvWdYI4fY79vb8pxT3P7M8%2BBqqwz6WVHijZBX7crX%2B2E34IM9aXzP9mEQHLwF5u9xY98u8h%2B9E9I1Nxe3yyhzM7%2B%2FWOyf4&X-Amz-Signature=a77a08e3317a309f336ced533effbad5d9ce41a1f4496065a8613484b5eb3cf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665674C2KF%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsH3csWGPExuBMT46kzs0APXSb8GHC%2FFHn3HVRe9WNewIgOBqkgkYKGMDtTSLTNoFb4qUlRAmRS1HkKHjNQ3c2pDAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOe92183xdyItspVVircA6oUdX9D7Ps4fqMK%2FPv5aoJZq3IwTEwm%2F%2Bu5Rnd%2BdirUJjaYawgOXkzUJYy5EqvAjIIB0zK7%2BpCzzhHpwjiDxZjTIbYh49pCndvXpxhfHxC6DXSyi5zFFxqsEZCE1dA8suZWW7irxJ5%2FjhG%2FbhuVGD7U3Lbo63iaEfS2%2FejHjc1oNzgH9JCY3xsVz%2BvMbDZruEI%2Fc592sQ9S9YRlkVEr9ILWjaTZoVCROkk2MGQjH5xScT%2Fb5gXYyUdjiYYmhSWVIb6MwpUuSYghc1jRtwVxfGlnj7FbQ%2FxdPxd0yH9BKlkN6EekNAtJlVyjbDp1ZgmN60l65NXP4iabtu6RkeWxbcnERYR0jtgtB5VCP0mTJuMEVbWVmkLTCYCQoTJYjarzpn9zisfDYT7mfEZA%2FT01dJGhitas88Xjm%2B2a0Gg%2F6BIKIrw%2FhXiXkcGnZK%2FCzSd4EIxTFOH0AenriQQ56rWBtg8ypldDy%2BA6xi5DtmUZSTnZMRKzzLPw5Xp%2F1MyHGSzZTVWLOh7aoeZiFZZPGGnbaG5RLYRyFYs0aNOOKXQOto1n8yn129v0vjdTkszMiK4AlPtdTFSu%2B4Hi739Gw4WYu%2B48t%2BbEwSWWPRwcT78y9xO%2FkLiVcSuiya59uqpBMLi5wdIGOqUBVJIzT7TnLkssw6c1yIpvXxUBVGFIWh3trwH01%2FLBEdDgI5URALO93sORywJcRODBOTN8PHrT7y8nm2KJGgYRK%2Fuac%2BlDCUSSNWx2oE6aZlF%2Bpb6LSYfyhD0Q5XPMBO%2FvWdYI4fY79vb8pxT3P7M8%2BBqqwz6WVHijZBX7crX%2B2E34IM9aXzP9mEQHLwF5u9xY98u8h%2B9E9I1Nxe3yyhzM7%2B%2FWOyf4&X-Amz-Signature=54c55d620f6d8fa1b0f81e1d9ad886f9e2f3641f9e16dd30735040a205b5dd95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665674C2KF%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsH3csWGPExuBMT46kzs0APXSb8GHC%2FFHn3HVRe9WNewIgOBqkgkYKGMDtTSLTNoFb4qUlRAmRS1HkKHjNQ3c2pDAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOe92183xdyItspVVircA6oUdX9D7Ps4fqMK%2FPv5aoJZq3IwTEwm%2F%2Bu5Rnd%2BdirUJjaYawgOXkzUJYy5EqvAjIIB0zK7%2BpCzzhHpwjiDxZjTIbYh49pCndvXpxhfHxC6DXSyi5zFFxqsEZCE1dA8suZWW7irxJ5%2FjhG%2FbhuVGD7U3Lbo63iaEfS2%2FejHjc1oNzgH9JCY3xsVz%2BvMbDZruEI%2Fc592sQ9S9YRlkVEr9ILWjaTZoVCROkk2MGQjH5xScT%2Fb5gXYyUdjiYYmhSWVIb6MwpUuSYghc1jRtwVxfGlnj7FbQ%2FxdPxd0yH9BKlkN6EekNAtJlVyjbDp1ZgmN60l65NXP4iabtu6RkeWxbcnERYR0jtgtB5VCP0mTJuMEVbWVmkLTCYCQoTJYjarzpn9zisfDYT7mfEZA%2FT01dJGhitas88Xjm%2B2a0Gg%2F6BIKIrw%2FhXiXkcGnZK%2FCzSd4EIxTFOH0AenriQQ56rWBtg8ypldDy%2BA6xi5DtmUZSTnZMRKzzLPw5Xp%2F1MyHGSzZTVWLOh7aoeZiFZZPGGnbaG5RLYRyFYs0aNOOKXQOto1n8yn129v0vjdTkszMiK4AlPtdTFSu%2B4Hi739Gw4WYu%2B48t%2BbEwSWWPRwcT78y9xO%2FkLiVcSuiya59uqpBMLi5wdIGOqUBVJIzT7TnLkssw6c1yIpvXxUBVGFIWh3trwH01%2FLBEdDgI5URALO93sORywJcRODBOTN8PHrT7y8nm2KJGgYRK%2Fuac%2BlDCUSSNWx2oE6aZlF%2Bpb6LSYfyhD0Q5XPMBO%2FvWdYI4fY79vb8pxT3P7M8%2BBqqwz6WVHijZBX7crX%2B2E34IM9aXzP9mEQHLwF5u9xY98u8h%2B9E9I1Nxe3yyhzM7%2B%2FWOyf4&X-Amz-Signature=ea9ed167914e71f5a7643ce1ba31f1b520b1d736d5bf41d01d81a65be56b860e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665674C2KF%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsH3csWGPExuBMT46kzs0APXSb8GHC%2FFHn3HVRe9WNewIgOBqkgkYKGMDtTSLTNoFb4qUlRAmRS1HkKHjNQ3c2pDAqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOe92183xdyItspVVircA6oUdX9D7Ps4fqMK%2FPv5aoJZq3IwTEwm%2F%2Bu5Rnd%2BdirUJjaYawgOXkzUJYy5EqvAjIIB0zK7%2BpCzzhHpwjiDxZjTIbYh49pCndvXpxhfHxC6DXSyi5zFFxqsEZCE1dA8suZWW7irxJ5%2FjhG%2FbhuVGD7U3Lbo63iaEfS2%2FejHjc1oNzgH9JCY3xsVz%2BvMbDZruEI%2Fc592sQ9S9YRlkVEr9ILWjaTZoVCROkk2MGQjH5xScT%2Fb5gXYyUdjiYYmhSWVIb6MwpUuSYghc1jRtwVxfGlnj7FbQ%2FxdPxd0yH9BKlkN6EekNAtJlVyjbDp1ZgmN60l65NXP4iabtu6RkeWxbcnERYR0jtgtB5VCP0mTJuMEVbWVmkLTCYCQoTJYjarzpn9zisfDYT7mfEZA%2FT01dJGhitas88Xjm%2B2a0Gg%2F6BIKIrw%2FhXiXkcGnZK%2FCzSd4EIxTFOH0AenriQQ56rWBtg8ypldDy%2BA6xi5DtmUZSTnZMRKzzLPw5Xp%2F1MyHGSzZTVWLOh7aoeZiFZZPGGnbaG5RLYRyFYs0aNOOKXQOto1n8yn129v0vjdTkszMiK4AlPtdTFSu%2B4Hi739Gw4WYu%2B48t%2BbEwSWWPRwcT78y9xO%2FkLiVcSuiya59uqpBMLi5wdIGOqUBVJIzT7TnLkssw6c1yIpvXxUBVGFIWh3trwH01%2FLBEdDgI5URALO93sORywJcRODBOTN8PHrT7y8nm2KJGgYRK%2Fuac%2BlDCUSSNWx2oE6aZlF%2Bpb6LSYfyhD0Q5XPMBO%2FvWdYI4fY79vb8pxT3P7M8%2BBqqwz6WVHijZBX7crX%2B2E34IM9aXzP9mEQHLwF5u9xY98u8h%2B9E9I1Nxe3yyhzM7%2B%2FWOyf4&X-Amz-Signature=193b7ca18bedbeb9079abe39d2bb91baa6b8bbab974e858b78ae408f606a1496&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
