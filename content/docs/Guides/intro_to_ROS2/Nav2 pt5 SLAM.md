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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCA44ZWG%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBdXH1t0sMU91J9QXCiyB05XYmuL3%2BlRLvw%2Bf1Fua1e8AiEAie%2BranQ3QQ1MZ8qGRabU1M1kLCTw14X8SQ%2B24V0UBN8qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3PM5uFHOidbgxipyrcAzhe2Yw0yGwB7xheykgqRbUWrDWLwkfPvGoS7RilorbMgDBCaWoc60G319MaIFEJL%2FTY1ugTHDgp5V877ZVG%2FtgVQj66xQQvEeTcQyTXItQYJ3LH3%2FxYJdYrnvxRSM9R7nf6LO3jHTmGOpvdehBFNlL%2F5g80LXPB8LzWv49DWO6h7r%2FQIen0aWDkOT0IDC1C%2F1%2BpbNgTfq0wiAGaOA6bHUyf2N54tZzbS%2FwN9VxMcgdkAi82ne2TIMJjYJ1PqZE9gy1WgtczGvMck3lNerlGv3LL1KEu1Vm%2FD1Ou%2FrGIClEZLAt%2FkkGppYS17Fzq0m1Ew5Hx3GnC35hxZ7oUO2prk%2BMzYDSA5pKgjFaXjdUKuZT%2FsqvRXVIqhQfgdEH5CjCWQ0bFqaUwF%2B1Q8K1GW8654DvdX6RWUAxP3NNhV5nTLkW9URYXLc5IpwX8ij1g29ci58WiPuE2nn4iWZcqvvYupZ2J6pAukPLPbBMg%2BB2PdaEOEvzQvOQO8JmNlE%2Ba6VZcwJooBw4Y%2BYYaOmpiKBNwsE7UeOmEfNde%2BHVkg6y85ygfgbkV3aHaeYvBHd2736kasqrUiReEq2IiMj55ct3BhSYgTgoBufK1ss8lcmdGbACaH3V43DGy%2FaGbAqYtMJWy%2Bs8GOqUBav75j%2FMzpKgqHJwnSp01zSrF6iYfveTmypjs9eq39yhtI3ZZJxtimp4Mfhf9Rz8zUnwbMYvxEtNZilgOGN1KhaZRKNc0iw50xD9uOPn2gfvcTyfZ%2BBGMVgAuQ7O56CjiVYnFAMCaZIbTnXvgqWNoZrcTD5LpVec1APyoQVpVGPdSvkfzeaVp4sJSR8fsYYoXqjpqMIIokR%2FHQ8t%2FMSede1%2BmIKOD&X-Amz-Signature=45d1ad899f7905e39bd7578cc3a6654784c5d1086f6cdb83608a52d5545e0529&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCA44ZWG%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBdXH1t0sMU91J9QXCiyB05XYmuL3%2BlRLvw%2Bf1Fua1e8AiEAie%2BranQ3QQ1MZ8qGRabU1M1kLCTw14X8SQ%2B24V0UBN8qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3PM5uFHOidbgxipyrcAzhe2Yw0yGwB7xheykgqRbUWrDWLwkfPvGoS7RilorbMgDBCaWoc60G319MaIFEJL%2FTY1ugTHDgp5V877ZVG%2FtgVQj66xQQvEeTcQyTXItQYJ3LH3%2FxYJdYrnvxRSM9R7nf6LO3jHTmGOpvdehBFNlL%2F5g80LXPB8LzWv49DWO6h7r%2FQIen0aWDkOT0IDC1C%2F1%2BpbNgTfq0wiAGaOA6bHUyf2N54tZzbS%2FwN9VxMcgdkAi82ne2TIMJjYJ1PqZE9gy1WgtczGvMck3lNerlGv3LL1KEu1Vm%2FD1Ou%2FrGIClEZLAt%2FkkGppYS17Fzq0m1Ew5Hx3GnC35hxZ7oUO2prk%2BMzYDSA5pKgjFaXjdUKuZT%2FsqvRXVIqhQfgdEH5CjCWQ0bFqaUwF%2B1Q8K1GW8654DvdX6RWUAxP3NNhV5nTLkW9URYXLc5IpwX8ij1g29ci58WiPuE2nn4iWZcqvvYupZ2J6pAukPLPbBMg%2BB2PdaEOEvzQvOQO8JmNlE%2Ba6VZcwJooBw4Y%2BYYaOmpiKBNwsE7UeOmEfNde%2BHVkg6y85ygfgbkV3aHaeYvBHd2736kasqrUiReEq2IiMj55ct3BhSYgTgoBufK1ss8lcmdGbACaH3V43DGy%2FaGbAqYtMJWy%2Bs8GOqUBav75j%2FMzpKgqHJwnSp01zSrF6iYfveTmypjs9eq39yhtI3ZZJxtimp4Mfhf9Rz8zUnwbMYvxEtNZilgOGN1KhaZRKNc0iw50xD9uOPn2gfvcTyfZ%2BBGMVgAuQ7O56CjiVYnFAMCaZIbTnXvgqWNoZrcTD5LpVec1APyoQVpVGPdSvkfzeaVp4sJSR8fsYYoXqjpqMIIokR%2FHQ8t%2FMSede1%2BmIKOD&X-Amz-Signature=f78766ed99301c8bb8db21429b15695ed2a8d3394bccd27ae43b719b39f58284&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCA44ZWG%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBdXH1t0sMU91J9QXCiyB05XYmuL3%2BlRLvw%2Bf1Fua1e8AiEAie%2BranQ3QQ1MZ8qGRabU1M1kLCTw14X8SQ%2B24V0UBN8qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3PM5uFHOidbgxipyrcAzhe2Yw0yGwB7xheykgqRbUWrDWLwkfPvGoS7RilorbMgDBCaWoc60G319MaIFEJL%2FTY1ugTHDgp5V877ZVG%2FtgVQj66xQQvEeTcQyTXItQYJ3LH3%2FxYJdYrnvxRSM9R7nf6LO3jHTmGOpvdehBFNlL%2F5g80LXPB8LzWv49DWO6h7r%2FQIen0aWDkOT0IDC1C%2F1%2BpbNgTfq0wiAGaOA6bHUyf2N54tZzbS%2FwN9VxMcgdkAi82ne2TIMJjYJ1PqZE9gy1WgtczGvMck3lNerlGv3LL1KEu1Vm%2FD1Ou%2FrGIClEZLAt%2FkkGppYS17Fzq0m1Ew5Hx3GnC35hxZ7oUO2prk%2BMzYDSA5pKgjFaXjdUKuZT%2FsqvRXVIqhQfgdEH5CjCWQ0bFqaUwF%2B1Q8K1GW8654DvdX6RWUAxP3NNhV5nTLkW9URYXLc5IpwX8ij1g29ci58WiPuE2nn4iWZcqvvYupZ2J6pAukPLPbBMg%2BB2PdaEOEvzQvOQO8JmNlE%2Ba6VZcwJooBw4Y%2BYYaOmpiKBNwsE7UeOmEfNde%2BHVkg6y85ygfgbkV3aHaeYvBHd2736kasqrUiReEq2IiMj55ct3BhSYgTgoBufK1ss8lcmdGbACaH3V43DGy%2FaGbAqYtMJWy%2Bs8GOqUBav75j%2FMzpKgqHJwnSp01zSrF6iYfveTmypjs9eq39yhtI3ZZJxtimp4Mfhf9Rz8zUnwbMYvxEtNZilgOGN1KhaZRKNc0iw50xD9uOPn2gfvcTyfZ%2BBGMVgAuQ7O56CjiVYnFAMCaZIbTnXvgqWNoZrcTD5LpVec1APyoQVpVGPdSvkfzeaVp4sJSR8fsYYoXqjpqMIIokR%2FHQ8t%2FMSede1%2BmIKOD&X-Amz-Signature=bf1ddf9fa522e3acb61be9b8011054d8d86de12d4f587c131c50543b7f9ba533&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCA44ZWG%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBdXH1t0sMU91J9QXCiyB05XYmuL3%2BlRLvw%2Bf1Fua1e8AiEAie%2BranQ3QQ1MZ8qGRabU1M1kLCTw14X8SQ%2B24V0UBN8qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3PM5uFHOidbgxipyrcAzhe2Yw0yGwB7xheykgqRbUWrDWLwkfPvGoS7RilorbMgDBCaWoc60G319MaIFEJL%2FTY1ugTHDgp5V877ZVG%2FtgVQj66xQQvEeTcQyTXItQYJ3LH3%2FxYJdYrnvxRSM9R7nf6LO3jHTmGOpvdehBFNlL%2F5g80LXPB8LzWv49DWO6h7r%2FQIen0aWDkOT0IDC1C%2F1%2BpbNgTfq0wiAGaOA6bHUyf2N54tZzbS%2FwN9VxMcgdkAi82ne2TIMJjYJ1PqZE9gy1WgtczGvMck3lNerlGv3LL1KEu1Vm%2FD1Ou%2FrGIClEZLAt%2FkkGppYS17Fzq0m1Ew5Hx3GnC35hxZ7oUO2prk%2BMzYDSA5pKgjFaXjdUKuZT%2FsqvRXVIqhQfgdEH5CjCWQ0bFqaUwF%2B1Q8K1GW8654DvdX6RWUAxP3NNhV5nTLkW9URYXLc5IpwX8ij1g29ci58WiPuE2nn4iWZcqvvYupZ2J6pAukPLPbBMg%2BB2PdaEOEvzQvOQO8JmNlE%2Ba6VZcwJooBw4Y%2BYYaOmpiKBNwsE7UeOmEfNde%2BHVkg6y85ygfgbkV3aHaeYvBHd2736kasqrUiReEq2IiMj55ct3BhSYgTgoBufK1ss8lcmdGbACaH3V43DGy%2FaGbAqYtMJWy%2Bs8GOqUBav75j%2FMzpKgqHJwnSp01zSrF6iYfveTmypjs9eq39yhtI3ZZJxtimp4Mfhf9Rz8zUnwbMYvxEtNZilgOGN1KhaZRKNc0iw50xD9uOPn2gfvcTyfZ%2BBGMVgAuQ7O56CjiVYnFAMCaZIbTnXvgqWNoZrcTD5LpVec1APyoQVpVGPdSvkfzeaVp4sJSR8fsYYoXqjpqMIIokR%2FHQ8t%2FMSede1%2BmIKOD&X-Amz-Signature=16a878af74402c9829ed0ae757ed89bc250b3fb9fbbfb9848dd702501ad3bce4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCA44ZWG%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBdXH1t0sMU91J9QXCiyB05XYmuL3%2BlRLvw%2Bf1Fua1e8AiEAie%2BranQ3QQ1MZ8qGRabU1M1kLCTw14X8SQ%2B24V0UBN8qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3PM5uFHOidbgxipyrcAzhe2Yw0yGwB7xheykgqRbUWrDWLwkfPvGoS7RilorbMgDBCaWoc60G319MaIFEJL%2FTY1ugTHDgp5V877ZVG%2FtgVQj66xQQvEeTcQyTXItQYJ3LH3%2FxYJdYrnvxRSM9R7nf6LO3jHTmGOpvdehBFNlL%2F5g80LXPB8LzWv49DWO6h7r%2FQIen0aWDkOT0IDC1C%2F1%2BpbNgTfq0wiAGaOA6bHUyf2N54tZzbS%2FwN9VxMcgdkAi82ne2TIMJjYJ1PqZE9gy1WgtczGvMck3lNerlGv3LL1KEu1Vm%2FD1Ou%2FrGIClEZLAt%2FkkGppYS17Fzq0m1Ew5Hx3GnC35hxZ7oUO2prk%2BMzYDSA5pKgjFaXjdUKuZT%2FsqvRXVIqhQfgdEH5CjCWQ0bFqaUwF%2B1Q8K1GW8654DvdX6RWUAxP3NNhV5nTLkW9URYXLc5IpwX8ij1g29ci58WiPuE2nn4iWZcqvvYupZ2J6pAukPLPbBMg%2BB2PdaEOEvzQvOQO8JmNlE%2Ba6VZcwJooBw4Y%2BYYaOmpiKBNwsE7UeOmEfNde%2BHVkg6y85ygfgbkV3aHaeYvBHd2736kasqrUiReEq2IiMj55ct3BhSYgTgoBufK1ss8lcmdGbACaH3V43DGy%2FaGbAqYtMJWy%2Bs8GOqUBav75j%2FMzpKgqHJwnSp01zSrF6iYfveTmypjs9eq39yhtI3ZZJxtimp4Mfhf9Rz8zUnwbMYvxEtNZilgOGN1KhaZRKNc0iw50xD9uOPn2gfvcTyfZ%2BBGMVgAuQ7O56CjiVYnFAMCaZIbTnXvgqWNoZrcTD5LpVec1APyoQVpVGPdSvkfzeaVp4sJSR8fsYYoXqjpqMIIokR%2FHQ8t%2FMSede1%2BmIKOD&X-Amz-Signature=ec8885e132752e8ca7d9d4521bd44a82d9d89a56033b922389a9bc4684fd0ea2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCA44ZWG%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBdXH1t0sMU91J9QXCiyB05XYmuL3%2BlRLvw%2Bf1Fua1e8AiEAie%2BranQ3QQ1MZ8qGRabU1M1kLCTw14X8SQ%2B24V0UBN8qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3PM5uFHOidbgxipyrcAzhe2Yw0yGwB7xheykgqRbUWrDWLwkfPvGoS7RilorbMgDBCaWoc60G319MaIFEJL%2FTY1ugTHDgp5V877ZVG%2FtgVQj66xQQvEeTcQyTXItQYJ3LH3%2FxYJdYrnvxRSM9R7nf6LO3jHTmGOpvdehBFNlL%2F5g80LXPB8LzWv49DWO6h7r%2FQIen0aWDkOT0IDC1C%2F1%2BpbNgTfq0wiAGaOA6bHUyf2N54tZzbS%2FwN9VxMcgdkAi82ne2TIMJjYJ1PqZE9gy1WgtczGvMck3lNerlGv3LL1KEu1Vm%2FD1Ou%2FrGIClEZLAt%2FkkGppYS17Fzq0m1Ew5Hx3GnC35hxZ7oUO2prk%2BMzYDSA5pKgjFaXjdUKuZT%2FsqvRXVIqhQfgdEH5CjCWQ0bFqaUwF%2B1Q8K1GW8654DvdX6RWUAxP3NNhV5nTLkW9URYXLc5IpwX8ij1g29ci58WiPuE2nn4iWZcqvvYupZ2J6pAukPLPbBMg%2BB2PdaEOEvzQvOQO8JmNlE%2Ba6VZcwJooBw4Y%2BYYaOmpiKBNwsE7UeOmEfNde%2BHVkg6y85ygfgbkV3aHaeYvBHd2736kasqrUiReEq2IiMj55ct3BhSYgTgoBufK1ss8lcmdGbACaH3V43DGy%2FaGbAqYtMJWy%2Bs8GOqUBav75j%2FMzpKgqHJwnSp01zSrF6iYfveTmypjs9eq39yhtI3ZZJxtimp4Mfhf9Rz8zUnwbMYvxEtNZilgOGN1KhaZRKNc0iw50xD9uOPn2gfvcTyfZ%2BBGMVgAuQ7O56CjiVYnFAMCaZIbTnXvgqWNoZrcTD5LpVec1APyoQVpVGPdSvkfzeaVp4sJSR8fsYYoXqjpqMIIokR%2FHQ8t%2FMSede1%2BmIKOD&X-Amz-Signature=f3c3dcfbcaf52880749d36ede42f5be959e41af04a0d62ea843f56f6ce77668a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCA44ZWG%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBdXH1t0sMU91J9QXCiyB05XYmuL3%2BlRLvw%2Bf1Fua1e8AiEAie%2BranQ3QQ1MZ8qGRabU1M1kLCTw14X8SQ%2B24V0UBN8qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3PM5uFHOidbgxipyrcAzhe2Yw0yGwB7xheykgqRbUWrDWLwkfPvGoS7RilorbMgDBCaWoc60G319MaIFEJL%2FTY1ugTHDgp5V877ZVG%2FtgVQj66xQQvEeTcQyTXItQYJ3LH3%2FxYJdYrnvxRSM9R7nf6LO3jHTmGOpvdehBFNlL%2F5g80LXPB8LzWv49DWO6h7r%2FQIen0aWDkOT0IDC1C%2F1%2BpbNgTfq0wiAGaOA6bHUyf2N54tZzbS%2FwN9VxMcgdkAi82ne2TIMJjYJ1PqZE9gy1WgtczGvMck3lNerlGv3LL1KEu1Vm%2FD1Ou%2FrGIClEZLAt%2FkkGppYS17Fzq0m1Ew5Hx3GnC35hxZ7oUO2prk%2BMzYDSA5pKgjFaXjdUKuZT%2FsqvRXVIqhQfgdEH5CjCWQ0bFqaUwF%2B1Q8K1GW8654DvdX6RWUAxP3NNhV5nTLkW9URYXLc5IpwX8ij1g29ci58WiPuE2nn4iWZcqvvYupZ2J6pAukPLPbBMg%2BB2PdaEOEvzQvOQO8JmNlE%2Ba6VZcwJooBw4Y%2BYYaOmpiKBNwsE7UeOmEfNde%2BHVkg6y85ygfgbkV3aHaeYvBHd2736kasqrUiReEq2IiMj55ct3BhSYgTgoBufK1ss8lcmdGbACaH3V43DGy%2FaGbAqYtMJWy%2Bs8GOqUBav75j%2FMzpKgqHJwnSp01zSrF6iYfveTmypjs9eq39yhtI3ZZJxtimp4Mfhf9Rz8zUnwbMYvxEtNZilgOGN1KhaZRKNc0iw50xD9uOPn2gfvcTyfZ%2BBGMVgAuQ7O56CjiVYnFAMCaZIbTnXvgqWNoZrcTD5LpVec1APyoQVpVGPdSvkfzeaVp4sJSR8fsYYoXqjpqMIIokR%2FHQ8t%2FMSede1%2BmIKOD&X-Amz-Signature=60cec41fc87322a988bbd9b7733c4ec3ef6b003e8db7be3892724264e534798f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCA44ZWG%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBdXH1t0sMU91J9QXCiyB05XYmuL3%2BlRLvw%2Bf1Fua1e8AiEAie%2BranQ3QQ1MZ8qGRabU1M1kLCTw14X8SQ%2B24V0UBN8qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3PM5uFHOidbgxipyrcAzhe2Yw0yGwB7xheykgqRbUWrDWLwkfPvGoS7RilorbMgDBCaWoc60G319MaIFEJL%2FTY1ugTHDgp5V877ZVG%2FtgVQj66xQQvEeTcQyTXItQYJ3LH3%2FxYJdYrnvxRSM9R7nf6LO3jHTmGOpvdehBFNlL%2F5g80LXPB8LzWv49DWO6h7r%2FQIen0aWDkOT0IDC1C%2F1%2BpbNgTfq0wiAGaOA6bHUyf2N54tZzbS%2FwN9VxMcgdkAi82ne2TIMJjYJ1PqZE9gy1WgtczGvMck3lNerlGv3LL1KEu1Vm%2FD1Ou%2FrGIClEZLAt%2FkkGppYS17Fzq0m1Ew5Hx3GnC35hxZ7oUO2prk%2BMzYDSA5pKgjFaXjdUKuZT%2FsqvRXVIqhQfgdEH5CjCWQ0bFqaUwF%2B1Q8K1GW8654DvdX6RWUAxP3NNhV5nTLkW9URYXLc5IpwX8ij1g29ci58WiPuE2nn4iWZcqvvYupZ2J6pAukPLPbBMg%2BB2PdaEOEvzQvOQO8JmNlE%2Ba6VZcwJooBw4Y%2BYYaOmpiKBNwsE7UeOmEfNde%2BHVkg6y85ygfgbkV3aHaeYvBHd2736kasqrUiReEq2IiMj55ct3BhSYgTgoBufK1ss8lcmdGbACaH3V43DGy%2FaGbAqYtMJWy%2Bs8GOqUBav75j%2FMzpKgqHJwnSp01zSrF6iYfveTmypjs9eq39yhtI3ZZJxtimp4Mfhf9Rz8zUnwbMYvxEtNZilgOGN1KhaZRKNc0iw50xD9uOPn2gfvcTyfZ%2BBGMVgAuQ7O56CjiVYnFAMCaZIbTnXvgqWNoZrcTD5LpVec1APyoQVpVGPdSvkfzeaVp4sJSR8fsYYoXqjpqMIIokR%2FHQ8t%2FMSede1%2BmIKOD&X-Amz-Signature=7587fa28da2a5f0b61beeaea8a84c6307d52ceb94961e9e7e40f242ecd0dfc32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCA44ZWG%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBdXH1t0sMU91J9QXCiyB05XYmuL3%2BlRLvw%2Bf1Fua1e8AiEAie%2BranQ3QQ1MZ8qGRabU1M1kLCTw14X8SQ%2B24V0UBN8qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3PM5uFHOidbgxipyrcAzhe2Yw0yGwB7xheykgqRbUWrDWLwkfPvGoS7RilorbMgDBCaWoc60G319MaIFEJL%2FTY1ugTHDgp5V877ZVG%2FtgVQj66xQQvEeTcQyTXItQYJ3LH3%2FxYJdYrnvxRSM9R7nf6LO3jHTmGOpvdehBFNlL%2F5g80LXPB8LzWv49DWO6h7r%2FQIen0aWDkOT0IDC1C%2F1%2BpbNgTfq0wiAGaOA6bHUyf2N54tZzbS%2FwN9VxMcgdkAi82ne2TIMJjYJ1PqZE9gy1WgtczGvMck3lNerlGv3LL1KEu1Vm%2FD1Ou%2FrGIClEZLAt%2FkkGppYS17Fzq0m1Ew5Hx3GnC35hxZ7oUO2prk%2BMzYDSA5pKgjFaXjdUKuZT%2FsqvRXVIqhQfgdEH5CjCWQ0bFqaUwF%2B1Q8K1GW8654DvdX6RWUAxP3NNhV5nTLkW9URYXLc5IpwX8ij1g29ci58WiPuE2nn4iWZcqvvYupZ2J6pAukPLPbBMg%2BB2PdaEOEvzQvOQO8JmNlE%2Ba6VZcwJooBw4Y%2BYYaOmpiKBNwsE7UeOmEfNde%2BHVkg6y85ygfgbkV3aHaeYvBHd2736kasqrUiReEq2IiMj55ct3BhSYgTgoBufK1ss8lcmdGbACaH3V43DGy%2FaGbAqYtMJWy%2Bs8GOqUBav75j%2FMzpKgqHJwnSp01zSrF6iYfveTmypjs9eq39yhtI3ZZJxtimp4Mfhf9Rz8zUnwbMYvxEtNZilgOGN1KhaZRKNc0iw50xD9uOPn2gfvcTyfZ%2BBGMVgAuQ7O56CjiVYnFAMCaZIbTnXvgqWNoZrcTD5LpVec1APyoQVpVGPdSvkfzeaVp4sJSR8fsYYoXqjpqMIIokR%2FHQ8t%2FMSede1%2BmIKOD&X-Amz-Signature=889f04fea5f8aa23d5f44f9cf56fd1d542b0ad62072146b35db24c3d38fb40a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCA44ZWG%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBdXH1t0sMU91J9QXCiyB05XYmuL3%2BlRLvw%2Bf1Fua1e8AiEAie%2BranQ3QQ1MZ8qGRabU1M1kLCTw14X8SQ%2B24V0UBN8qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3PM5uFHOidbgxipyrcAzhe2Yw0yGwB7xheykgqRbUWrDWLwkfPvGoS7RilorbMgDBCaWoc60G319MaIFEJL%2FTY1ugTHDgp5V877ZVG%2FtgVQj66xQQvEeTcQyTXItQYJ3LH3%2FxYJdYrnvxRSM9R7nf6LO3jHTmGOpvdehBFNlL%2F5g80LXPB8LzWv49DWO6h7r%2FQIen0aWDkOT0IDC1C%2F1%2BpbNgTfq0wiAGaOA6bHUyf2N54tZzbS%2FwN9VxMcgdkAi82ne2TIMJjYJ1PqZE9gy1WgtczGvMck3lNerlGv3LL1KEu1Vm%2FD1Ou%2FrGIClEZLAt%2FkkGppYS17Fzq0m1Ew5Hx3GnC35hxZ7oUO2prk%2BMzYDSA5pKgjFaXjdUKuZT%2FsqvRXVIqhQfgdEH5CjCWQ0bFqaUwF%2B1Q8K1GW8654DvdX6RWUAxP3NNhV5nTLkW9URYXLc5IpwX8ij1g29ci58WiPuE2nn4iWZcqvvYupZ2J6pAukPLPbBMg%2BB2PdaEOEvzQvOQO8JmNlE%2Ba6VZcwJooBw4Y%2BYYaOmpiKBNwsE7UeOmEfNde%2BHVkg6y85ygfgbkV3aHaeYvBHd2736kasqrUiReEq2IiMj55ct3BhSYgTgoBufK1ss8lcmdGbACaH3V43DGy%2FaGbAqYtMJWy%2Bs8GOqUBav75j%2FMzpKgqHJwnSp01zSrF6iYfveTmypjs9eq39yhtI3ZZJxtimp4Mfhf9Rz8zUnwbMYvxEtNZilgOGN1KhaZRKNc0iw50xD9uOPn2gfvcTyfZ%2BBGMVgAuQ7O56CjiVYnFAMCaZIbTnXvgqWNoZrcTD5LpVec1APyoQVpVGPdSvkfzeaVp4sJSR8fsYYoXqjpqMIIokR%2FHQ8t%2FMSede1%2BmIKOD&X-Amz-Signature=2585d038cfeee4167b530b693c3fea4b549fe32020eccb8501480ec2e15ab80c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCA44ZWG%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBdXH1t0sMU91J9QXCiyB05XYmuL3%2BlRLvw%2Bf1Fua1e8AiEAie%2BranQ3QQ1MZ8qGRabU1M1kLCTw14X8SQ%2B24V0UBN8qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3PM5uFHOidbgxipyrcAzhe2Yw0yGwB7xheykgqRbUWrDWLwkfPvGoS7RilorbMgDBCaWoc60G319MaIFEJL%2FTY1ugTHDgp5V877ZVG%2FtgVQj66xQQvEeTcQyTXItQYJ3LH3%2FxYJdYrnvxRSM9R7nf6LO3jHTmGOpvdehBFNlL%2F5g80LXPB8LzWv49DWO6h7r%2FQIen0aWDkOT0IDC1C%2F1%2BpbNgTfq0wiAGaOA6bHUyf2N54tZzbS%2FwN9VxMcgdkAi82ne2TIMJjYJ1PqZE9gy1WgtczGvMck3lNerlGv3LL1KEu1Vm%2FD1Ou%2FrGIClEZLAt%2FkkGppYS17Fzq0m1Ew5Hx3GnC35hxZ7oUO2prk%2BMzYDSA5pKgjFaXjdUKuZT%2FsqvRXVIqhQfgdEH5CjCWQ0bFqaUwF%2B1Q8K1GW8654DvdX6RWUAxP3NNhV5nTLkW9URYXLc5IpwX8ij1g29ci58WiPuE2nn4iWZcqvvYupZ2J6pAukPLPbBMg%2BB2PdaEOEvzQvOQO8JmNlE%2Ba6VZcwJooBw4Y%2BYYaOmpiKBNwsE7UeOmEfNde%2BHVkg6y85ygfgbkV3aHaeYvBHd2736kasqrUiReEq2IiMj55ct3BhSYgTgoBufK1ss8lcmdGbACaH3V43DGy%2FaGbAqYtMJWy%2Bs8GOqUBav75j%2FMzpKgqHJwnSp01zSrF6iYfveTmypjs9eq39yhtI3ZZJxtimp4Mfhf9Rz8zUnwbMYvxEtNZilgOGN1KhaZRKNc0iw50xD9uOPn2gfvcTyfZ%2BBGMVgAuQ7O56CjiVYnFAMCaZIbTnXvgqWNoZrcTD5LpVec1APyoQVpVGPdSvkfzeaVp4sJSR8fsYYoXqjpqMIIokR%2FHQ8t%2FMSede1%2BmIKOD&X-Amz-Signature=2d7ee7d2851a2c36960d8a804a2a2f9da641b470e2a3c0989e6010bc601f93fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCA44ZWG%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBdXH1t0sMU91J9QXCiyB05XYmuL3%2BlRLvw%2Bf1Fua1e8AiEAie%2BranQ3QQ1MZ8qGRabU1M1kLCTw14X8SQ%2B24V0UBN8qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3PM5uFHOidbgxipyrcAzhe2Yw0yGwB7xheykgqRbUWrDWLwkfPvGoS7RilorbMgDBCaWoc60G319MaIFEJL%2FTY1ugTHDgp5V877ZVG%2FtgVQj66xQQvEeTcQyTXItQYJ3LH3%2FxYJdYrnvxRSM9R7nf6LO3jHTmGOpvdehBFNlL%2F5g80LXPB8LzWv49DWO6h7r%2FQIen0aWDkOT0IDC1C%2F1%2BpbNgTfq0wiAGaOA6bHUyf2N54tZzbS%2FwN9VxMcgdkAi82ne2TIMJjYJ1PqZE9gy1WgtczGvMck3lNerlGv3LL1KEu1Vm%2FD1Ou%2FrGIClEZLAt%2FkkGppYS17Fzq0m1Ew5Hx3GnC35hxZ7oUO2prk%2BMzYDSA5pKgjFaXjdUKuZT%2FsqvRXVIqhQfgdEH5CjCWQ0bFqaUwF%2B1Q8K1GW8654DvdX6RWUAxP3NNhV5nTLkW9URYXLc5IpwX8ij1g29ci58WiPuE2nn4iWZcqvvYupZ2J6pAukPLPbBMg%2BB2PdaEOEvzQvOQO8JmNlE%2Ba6VZcwJooBw4Y%2BYYaOmpiKBNwsE7UeOmEfNde%2BHVkg6y85ygfgbkV3aHaeYvBHd2736kasqrUiReEq2IiMj55ct3BhSYgTgoBufK1ss8lcmdGbACaH3V43DGy%2FaGbAqYtMJWy%2Bs8GOqUBav75j%2FMzpKgqHJwnSp01zSrF6iYfveTmypjs9eq39yhtI3ZZJxtimp4Mfhf9Rz8zUnwbMYvxEtNZilgOGN1KhaZRKNc0iw50xD9uOPn2gfvcTyfZ%2BBGMVgAuQ7O56CjiVYnFAMCaZIbTnXvgqWNoZrcTD5LpVec1APyoQVpVGPdSvkfzeaVp4sJSR8fsYYoXqjpqMIIokR%2FHQ8t%2FMSede1%2BmIKOD&X-Amz-Signature=cb5c20b500a664c7659152889cd470d5f11a178e571a34f26dd116dded1d7840&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCA44ZWG%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBdXH1t0sMU91J9QXCiyB05XYmuL3%2BlRLvw%2Bf1Fua1e8AiEAie%2BranQ3QQ1MZ8qGRabU1M1kLCTw14X8SQ%2B24V0UBN8qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3PM5uFHOidbgxipyrcAzhe2Yw0yGwB7xheykgqRbUWrDWLwkfPvGoS7RilorbMgDBCaWoc60G319MaIFEJL%2FTY1ugTHDgp5V877ZVG%2FtgVQj66xQQvEeTcQyTXItQYJ3LH3%2FxYJdYrnvxRSM9R7nf6LO3jHTmGOpvdehBFNlL%2F5g80LXPB8LzWv49DWO6h7r%2FQIen0aWDkOT0IDC1C%2F1%2BpbNgTfq0wiAGaOA6bHUyf2N54tZzbS%2FwN9VxMcgdkAi82ne2TIMJjYJ1PqZE9gy1WgtczGvMck3lNerlGv3LL1KEu1Vm%2FD1Ou%2FrGIClEZLAt%2FkkGppYS17Fzq0m1Ew5Hx3GnC35hxZ7oUO2prk%2BMzYDSA5pKgjFaXjdUKuZT%2FsqvRXVIqhQfgdEH5CjCWQ0bFqaUwF%2B1Q8K1GW8654DvdX6RWUAxP3NNhV5nTLkW9URYXLc5IpwX8ij1g29ci58WiPuE2nn4iWZcqvvYupZ2J6pAukPLPbBMg%2BB2PdaEOEvzQvOQO8JmNlE%2Ba6VZcwJooBw4Y%2BYYaOmpiKBNwsE7UeOmEfNde%2BHVkg6y85ygfgbkV3aHaeYvBHd2736kasqrUiReEq2IiMj55ct3BhSYgTgoBufK1ss8lcmdGbACaH3V43DGy%2FaGbAqYtMJWy%2Bs8GOqUBav75j%2FMzpKgqHJwnSp01zSrF6iYfveTmypjs9eq39yhtI3ZZJxtimp4Mfhf9Rz8zUnwbMYvxEtNZilgOGN1KhaZRKNc0iw50xD9uOPn2gfvcTyfZ%2BBGMVgAuQ7O56CjiVYnFAMCaZIbTnXvgqWNoZrcTD5LpVec1APyoQVpVGPdSvkfzeaVp4sJSR8fsYYoXqjpqMIIokR%2FHQ8t%2FMSede1%2BmIKOD&X-Amz-Signature=266f02ec3a659adc966d6e85d2a90ef2ffa86b449487edcd585e39c3aedd040a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCA44ZWG%2F20260509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260509T025152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIBdXH1t0sMU91J9QXCiyB05XYmuL3%2BlRLvw%2Bf1Fua1e8AiEAie%2BranQ3QQ1MZ8qGRabU1M1kLCTw14X8SQ%2B24V0UBN8qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3PM5uFHOidbgxipyrcAzhe2Yw0yGwB7xheykgqRbUWrDWLwkfPvGoS7RilorbMgDBCaWoc60G319MaIFEJL%2FTY1ugTHDgp5V877ZVG%2FtgVQj66xQQvEeTcQyTXItQYJ3LH3%2FxYJdYrnvxRSM9R7nf6LO3jHTmGOpvdehBFNlL%2F5g80LXPB8LzWv49DWO6h7r%2FQIen0aWDkOT0IDC1C%2F1%2BpbNgTfq0wiAGaOA6bHUyf2N54tZzbS%2FwN9VxMcgdkAi82ne2TIMJjYJ1PqZE9gy1WgtczGvMck3lNerlGv3LL1KEu1Vm%2FD1Ou%2FrGIClEZLAt%2FkkGppYS17Fzq0m1Ew5Hx3GnC35hxZ7oUO2prk%2BMzYDSA5pKgjFaXjdUKuZT%2FsqvRXVIqhQfgdEH5CjCWQ0bFqaUwF%2B1Q8K1GW8654DvdX6RWUAxP3NNhV5nTLkW9URYXLc5IpwX8ij1g29ci58WiPuE2nn4iWZcqvvYupZ2J6pAukPLPbBMg%2BB2PdaEOEvzQvOQO8JmNlE%2Ba6VZcwJooBw4Y%2BYYaOmpiKBNwsE7UeOmEfNde%2BHVkg6y85ygfgbkV3aHaeYvBHd2736kasqrUiReEq2IiMj55ct3BhSYgTgoBufK1ss8lcmdGbACaH3V43DGy%2FaGbAqYtMJWy%2Bs8GOqUBav75j%2FMzpKgqHJwnSp01zSrF6iYfveTmypjs9eq39yhtI3ZZJxtimp4Mfhf9Rz8zUnwbMYvxEtNZilgOGN1KhaZRKNc0iw50xD9uOPn2gfvcTyfZ%2BBGMVgAuQ7O56CjiVYnFAMCaZIbTnXvgqWNoZrcTD5LpVec1APyoQVpVGPdSvkfzeaVp4sJSR8fsYYoXqjpqMIIokR%2FHQ8t%2FMSede1%2BmIKOD&X-Amz-Signature=9cf9c1b9fd671c68d4b512f401d3d91b2a14639ddec5e6bad81282763b79a861&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
