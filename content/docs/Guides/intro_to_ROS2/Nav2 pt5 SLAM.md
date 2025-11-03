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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6GRPB4P%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjTYaeiCch2Bj3unIbUi08jTIKQ19L6Gzb0o3MabK%2FpwIhAMcb9jirHrgvQScsqtXeVGCV8HJs2T1LWAjxHWU%2Bo3THKv8DCFMQABoMNjM3NDIzMTgzODA1IgwfdvOAhDx4yMzsOdwq3AO7Bge4wKJ7mmZVz468GJQeweHtK3CtCpEz1jXsQ1BFIJyfFLvWgpJRi35HepeXavzOduC3WMxJ1C9%2Fqa%2BbShELluClq5DAkvdXsrTPmqeA6ax5eoBUmuqGLKhRZDQmujX7gCJI6KgRwqQVuNJH8wkAReV%2BdPj2aaVJjVnMEtca7NeyEPONvaaM%2F03Cnf81JhRgqHlnVFjqLgHHyMdKSUeuXgxhK6OkhIrq9zkWgOJOknQg4UaCfKPl%2F%2F08851NvFWRLTnCfJou5FNi8lIGf5O89jYXrDt1gGYbUSuEdiQiCHgTx6pQbxtGl4xpp1t4slwf7zfYeJV14bCVdntlCzUM5CZcqKV2wdC2dtpnGb2BPN%2BWr3%2B5oxyY8Kc6AMChbWcxlMRlFKs3DH6C3yHe0Fx%2FCCZP7avZOR12GuvUxYFxqHns9AsNeBLwd3GrhQkQY%2FBb8rlFJ3KA%2BQiz6h7MnuVd01E3O3Yf%2BhpSoqkDH29KAlfPzBLlH15QTR9Lkaia9kDlKV%2FMnSYftAsLSvxLfjCdTGnEcmkvNiRqzwhTXqUs94sKgUIGHxdyWT5Gq0nasCRsTbPJsuDv2PJh8BashpwjQTn5iu52iLYG5p6hJdotyoqcQiTEAlF5wVLa2zDWiaDIBjqkAWPgc7F7ZsyxHriIAWOEdjbZ6i9QUNOLTFkWSTe01Z%2F7YyzwthPqNLUEvWHPE4JOncsY8x%2B6Y7l8z8UhIF%2BIPrvuA%2FF672JXEeWIVwOt59PJt6JxI30szNrCWNefQYJ%2FZlPSOlWO6VMWWE6qjU9teTaJIG6bIaiwvdSHM0%2FmkkH%2Bbj%2B5h8nRmDx4y2rVFq6%2BBKh5318D2FSwpTCmFTASUyrArLSu&X-Amz-Signature=a3bcb47592aada6263c271a3d380c8a06a80285480a2be95d8e923428db43681&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6GRPB4P%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjTYaeiCch2Bj3unIbUi08jTIKQ19L6Gzb0o3MabK%2FpwIhAMcb9jirHrgvQScsqtXeVGCV8HJs2T1LWAjxHWU%2Bo3THKv8DCFMQABoMNjM3NDIzMTgzODA1IgwfdvOAhDx4yMzsOdwq3AO7Bge4wKJ7mmZVz468GJQeweHtK3CtCpEz1jXsQ1BFIJyfFLvWgpJRi35HepeXavzOduC3WMxJ1C9%2Fqa%2BbShELluClq5DAkvdXsrTPmqeA6ax5eoBUmuqGLKhRZDQmujX7gCJI6KgRwqQVuNJH8wkAReV%2BdPj2aaVJjVnMEtca7NeyEPONvaaM%2F03Cnf81JhRgqHlnVFjqLgHHyMdKSUeuXgxhK6OkhIrq9zkWgOJOknQg4UaCfKPl%2F%2F08851NvFWRLTnCfJou5FNi8lIGf5O89jYXrDt1gGYbUSuEdiQiCHgTx6pQbxtGl4xpp1t4slwf7zfYeJV14bCVdntlCzUM5CZcqKV2wdC2dtpnGb2BPN%2BWr3%2B5oxyY8Kc6AMChbWcxlMRlFKs3DH6C3yHe0Fx%2FCCZP7avZOR12GuvUxYFxqHns9AsNeBLwd3GrhQkQY%2FBb8rlFJ3KA%2BQiz6h7MnuVd01E3O3Yf%2BhpSoqkDH29KAlfPzBLlH15QTR9Lkaia9kDlKV%2FMnSYftAsLSvxLfjCdTGnEcmkvNiRqzwhTXqUs94sKgUIGHxdyWT5Gq0nasCRsTbPJsuDv2PJh8BashpwjQTn5iu52iLYG5p6hJdotyoqcQiTEAlF5wVLa2zDWiaDIBjqkAWPgc7F7ZsyxHriIAWOEdjbZ6i9QUNOLTFkWSTe01Z%2F7YyzwthPqNLUEvWHPE4JOncsY8x%2B6Y7l8z8UhIF%2BIPrvuA%2FF672JXEeWIVwOt59PJt6JxI30szNrCWNefQYJ%2FZlPSOlWO6VMWWE6qjU9teTaJIG6bIaiwvdSHM0%2FmkkH%2Bbj%2B5h8nRmDx4y2rVFq6%2BBKh5318D2FSwpTCmFTASUyrArLSu&X-Amz-Signature=647cd4d6deabb02465576c24dac85192ada634f9bdbabd58e8e0bdc0ee92c85d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6GRPB4P%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjTYaeiCch2Bj3unIbUi08jTIKQ19L6Gzb0o3MabK%2FpwIhAMcb9jirHrgvQScsqtXeVGCV8HJs2T1LWAjxHWU%2Bo3THKv8DCFMQABoMNjM3NDIzMTgzODA1IgwfdvOAhDx4yMzsOdwq3AO7Bge4wKJ7mmZVz468GJQeweHtK3CtCpEz1jXsQ1BFIJyfFLvWgpJRi35HepeXavzOduC3WMxJ1C9%2Fqa%2BbShELluClq5DAkvdXsrTPmqeA6ax5eoBUmuqGLKhRZDQmujX7gCJI6KgRwqQVuNJH8wkAReV%2BdPj2aaVJjVnMEtca7NeyEPONvaaM%2F03Cnf81JhRgqHlnVFjqLgHHyMdKSUeuXgxhK6OkhIrq9zkWgOJOknQg4UaCfKPl%2F%2F08851NvFWRLTnCfJou5FNi8lIGf5O89jYXrDt1gGYbUSuEdiQiCHgTx6pQbxtGl4xpp1t4slwf7zfYeJV14bCVdntlCzUM5CZcqKV2wdC2dtpnGb2BPN%2BWr3%2B5oxyY8Kc6AMChbWcxlMRlFKs3DH6C3yHe0Fx%2FCCZP7avZOR12GuvUxYFxqHns9AsNeBLwd3GrhQkQY%2FBb8rlFJ3KA%2BQiz6h7MnuVd01E3O3Yf%2BhpSoqkDH29KAlfPzBLlH15QTR9Lkaia9kDlKV%2FMnSYftAsLSvxLfjCdTGnEcmkvNiRqzwhTXqUs94sKgUIGHxdyWT5Gq0nasCRsTbPJsuDv2PJh8BashpwjQTn5iu52iLYG5p6hJdotyoqcQiTEAlF5wVLa2zDWiaDIBjqkAWPgc7F7ZsyxHriIAWOEdjbZ6i9QUNOLTFkWSTe01Z%2F7YyzwthPqNLUEvWHPE4JOncsY8x%2B6Y7l8z8UhIF%2BIPrvuA%2FF672JXEeWIVwOt59PJt6JxI30szNrCWNefQYJ%2FZlPSOlWO6VMWWE6qjU9teTaJIG6bIaiwvdSHM0%2FmkkH%2Bbj%2B5h8nRmDx4y2rVFq6%2BBKh5318D2FSwpTCmFTASUyrArLSu&X-Amz-Signature=9107a25866eb9b93066ad40584e07ba8fe38cbca581d8df4f1e32dbd65384d95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6GRPB4P%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjTYaeiCch2Bj3unIbUi08jTIKQ19L6Gzb0o3MabK%2FpwIhAMcb9jirHrgvQScsqtXeVGCV8HJs2T1LWAjxHWU%2Bo3THKv8DCFMQABoMNjM3NDIzMTgzODA1IgwfdvOAhDx4yMzsOdwq3AO7Bge4wKJ7mmZVz468GJQeweHtK3CtCpEz1jXsQ1BFIJyfFLvWgpJRi35HepeXavzOduC3WMxJ1C9%2Fqa%2BbShELluClq5DAkvdXsrTPmqeA6ax5eoBUmuqGLKhRZDQmujX7gCJI6KgRwqQVuNJH8wkAReV%2BdPj2aaVJjVnMEtca7NeyEPONvaaM%2F03Cnf81JhRgqHlnVFjqLgHHyMdKSUeuXgxhK6OkhIrq9zkWgOJOknQg4UaCfKPl%2F%2F08851NvFWRLTnCfJou5FNi8lIGf5O89jYXrDt1gGYbUSuEdiQiCHgTx6pQbxtGl4xpp1t4slwf7zfYeJV14bCVdntlCzUM5CZcqKV2wdC2dtpnGb2BPN%2BWr3%2B5oxyY8Kc6AMChbWcxlMRlFKs3DH6C3yHe0Fx%2FCCZP7avZOR12GuvUxYFxqHns9AsNeBLwd3GrhQkQY%2FBb8rlFJ3KA%2BQiz6h7MnuVd01E3O3Yf%2BhpSoqkDH29KAlfPzBLlH15QTR9Lkaia9kDlKV%2FMnSYftAsLSvxLfjCdTGnEcmkvNiRqzwhTXqUs94sKgUIGHxdyWT5Gq0nasCRsTbPJsuDv2PJh8BashpwjQTn5iu52iLYG5p6hJdotyoqcQiTEAlF5wVLa2zDWiaDIBjqkAWPgc7F7ZsyxHriIAWOEdjbZ6i9QUNOLTFkWSTe01Z%2F7YyzwthPqNLUEvWHPE4JOncsY8x%2B6Y7l8z8UhIF%2BIPrvuA%2FF672JXEeWIVwOt59PJt6JxI30szNrCWNefQYJ%2FZlPSOlWO6VMWWE6qjU9teTaJIG6bIaiwvdSHM0%2FmkkH%2Bbj%2B5h8nRmDx4y2rVFq6%2BBKh5318D2FSwpTCmFTASUyrArLSu&X-Amz-Signature=4d43139b03d374380554acb038e61a8d5308e21497e3189d4936dcb2290c641a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6GRPB4P%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjTYaeiCch2Bj3unIbUi08jTIKQ19L6Gzb0o3MabK%2FpwIhAMcb9jirHrgvQScsqtXeVGCV8HJs2T1LWAjxHWU%2Bo3THKv8DCFMQABoMNjM3NDIzMTgzODA1IgwfdvOAhDx4yMzsOdwq3AO7Bge4wKJ7mmZVz468GJQeweHtK3CtCpEz1jXsQ1BFIJyfFLvWgpJRi35HepeXavzOduC3WMxJ1C9%2Fqa%2BbShELluClq5DAkvdXsrTPmqeA6ax5eoBUmuqGLKhRZDQmujX7gCJI6KgRwqQVuNJH8wkAReV%2BdPj2aaVJjVnMEtca7NeyEPONvaaM%2F03Cnf81JhRgqHlnVFjqLgHHyMdKSUeuXgxhK6OkhIrq9zkWgOJOknQg4UaCfKPl%2F%2F08851NvFWRLTnCfJou5FNi8lIGf5O89jYXrDt1gGYbUSuEdiQiCHgTx6pQbxtGl4xpp1t4slwf7zfYeJV14bCVdntlCzUM5CZcqKV2wdC2dtpnGb2BPN%2BWr3%2B5oxyY8Kc6AMChbWcxlMRlFKs3DH6C3yHe0Fx%2FCCZP7avZOR12GuvUxYFxqHns9AsNeBLwd3GrhQkQY%2FBb8rlFJ3KA%2BQiz6h7MnuVd01E3O3Yf%2BhpSoqkDH29KAlfPzBLlH15QTR9Lkaia9kDlKV%2FMnSYftAsLSvxLfjCdTGnEcmkvNiRqzwhTXqUs94sKgUIGHxdyWT5Gq0nasCRsTbPJsuDv2PJh8BashpwjQTn5iu52iLYG5p6hJdotyoqcQiTEAlF5wVLa2zDWiaDIBjqkAWPgc7F7ZsyxHriIAWOEdjbZ6i9QUNOLTFkWSTe01Z%2F7YyzwthPqNLUEvWHPE4JOncsY8x%2B6Y7l8z8UhIF%2BIPrvuA%2FF672JXEeWIVwOt59PJt6JxI30szNrCWNefQYJ%2FZlPSOlWO6VMWWE6qjU9teTaJIG6bIaiwvdSHM0%2FmkkH%2Bbj%2B5h8nRmDx4y2rVFq6%2BBKh5318D2FSwpTCmFTASUyrArLSu&X-Amz-Signature=c8d84b05dc760e6a84e999219655338b0f9052644e58a5df4b6fcc225bc0f7d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6GRPB4P%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjTYaeiCch2Bj3unIbUi08jTIKQ19L6Gzb0o3MabK%2FpwIhAMcb9jirHrgvQScsqtXeVGCV8HJs2T1LWAjxHWU%2Bo3THKv8DCFMQABoMNjM3NDIzMTgzODA1IgwfdvOAhDx4yMzsOdwq3AO7Bge4wKJ7mmZVz468GJQeweHtK3CtCpEz1jXsQ1BFIJyfFLvWgpJRi35HepeXavzOduC3WMxJ1C9%2Fqa%2BbShELluClq5DAkvdXsrTPmqeA6ax5eoBUmuqGLKhRZDQmujX7gCJI6KgRwqQVuNJH8wkAReV%2BdPj2aaVJjVnMEtca7NeyEPONvaaM%2F03Cnf81JhRgqHlnVFjqLgHHyMdKSUeuXgxhK6OkhIrq9zkWgOJOknQg4UaCfKPl%2F%2F08851NvFWRLTnCfJou5FNi8lIGf5O89jYXrDt1gGYbUSuEdiQiCHgTx6pQbxtGl4xpp1t4slwf7zfYeJV14bCVdntlCzUM5CZcqKV2wdC2dtpnGb2BPN%2BWr3%2B5oxyY8Kc6AMChbWcxlMRlFKs3DH6C3yHe0Fx%2FCCZP7avZOR12GuvUxYFxqHns9AsNeBLwd3GrhQkQY%2FBb8rlFJ3KA%2BQiz6h7MnuVd01E3O3Yf%2BhpSoqkDH29KAlfPzBLlH15QTR9Lkaia9kDlKV%2FMnSYftAsLSvxLfjCdTGnEcmkvNiRqzwhTXqUs94sKgUIGHxdyWT5Gq0nasCRsTbPJsuDv2PJh8BashpwjQTn5iu52iLYG5p6hJdotyoqcQiTEAlF5wVLa2zDWiaDIBjqkAWPgc7F7ZsyxHriIAWOEdjbZ6i9QUNOLTFkWSTe01Z%2F7YyzwthPqNLUEvWHPE4JOncsY8x%2B6Y7l8z8UhIF%2BIPrvuA%2FF672JXEeWIVwOt59PJt6JxI30szNrCWNefQYJ%2FZlPSOlWO6VMWWE6qjU9teTaJIG6bIaiwvdSHM0%2FmkkH%2Bbj%2B5h8nRmDx4y2rVFq6%2BBKh5318D2FSwpTCmFTASUyrArLSu&X-Amz-Signature=b62abf42ec495cbcf6d0b3e4d053a1edb32c7bd9d2be705436241136052b4260&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6GRPB4P%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjTYaeiCch2Bj3unIbUi08jTIKQ19L6Gzb0o3MabK%2FpwIhAMcb9jirHrgvQScsqtXeVGCV8HJs2T1LWAjxHWU%2Bo3THKv8DCFMQABoMNjM3NDIzMTgzODA1IgwfdvOAhDx4yMzsOdwq3AO7Bge4wKJ7mmZVz468GJQeweHtK3CtCpEz1jXsQ1BFIJyfFLvWgpJRi35HepeXavzOduC3WMxJ1C9%2Fqa%2BbShELluClq5DAkvdXsrTPmqeA6ax5eoBUmuqGLKhRZDQmujX7gCJI6KgRwqQVuNJH8wkAReV%2BdPj2aaVJjVnMEtca7NeyEPONvaaM%2F03Cnf81JhRgqHlnVFjqLgHHyMdKSUeuXgxhK6OkhIrq9zkWgOJOknQg4UaCfKPl%2F%2F08851NvFWRLTnCfJou5FNi8lIGf5O89jYXrDt1gGYbUSuEdiQiCHgTx6pQbxtGl4xpp1t4slwf7zfYeJV14bCVdntlCzUM5CZcqKV2wdC2dtpnGb2BPN%2BWr3%2B5oxyY8Kc6AMChbWcxlMRlFKs3DH6C3yHe0Fx%2FCCZP7avZOR12GuvUxYFxqHns9AsNeBLwd3GrhQkQY%2FBb8rlFJ3KA%2BQiz6h7MnuVd01E3O3Yf%2BhpSoqkDH29KAlfPzBLlH15QTR9Lkaia9kDlKV%2FMnSYftAsLSvxLfjCdTGnEcmkvNiRqzwhTXqUs94sKgUIGHxdyWT5Gq0nasCRsTbPJsuDv2PJh8BashpwjQTn5iu52iLYG5p6hJdotyoqcQiTEAlF5wVLa2zDWiaDIBjqkAWPgc7F7ZsyxHriIAWOEdjbZ6i9QUNOLTFkWSTe01Z%2F7YyzwthPqNLUEvWHPE4JOncsY8x%2B6Y7l8z8UhIF%2BIPrvuA%2FF672JXEeWIVwOt59PJt6JxI30szNrCWNefQYJ%2FZlPSOlWO6VMWWE6qjU9teTaJIG6bIaiwvdSHM0%2FmkkH%2Bbj%2B5h8nRmDx4y2rVFq6%2BBKh5318D2FSwpTCmFTASUyrArLSu&X-Amz-Signature=d1518f2b23a7845f4d7257a7f1c747d58809bcb793c94b2d8b63f4b995cb69b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6GRPB4P%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjTYaeiCch2Bj3unIbUi08jTIKQ19L6Gzb0o3MabK%2FpwIhAMcb9jirHrgvQScsqtXeVGCV8HJs2T1LWAjxHWU%2Bo3THKv8DCFMQABoMNjM3NDIzMTgzODA1IgwfdvOAhDx4yMzsOdwq3AO7Bge4wKJ7mmZVz468GJQeweHtK3CtCpEz1jXsQ1BFIJyfFLvWgpJRi35HepeXavzOduC3WMxJ1C9%2Fqa%2BbShELluClq5DAkvdXsrTPmqeA6ax5eoBUmuqGLKhRZDQmujX7gCJI6KgRwqQVuNJH8wkAReV%2BdPj2aaVJjVnMEtca7NeyEPONvaaM%2F03Cnf81JhRgqHlnVFjqLgHHyMdKSUeuXgxhK6OkhIrq9zkWgOJOknQg4UaCfKPl%2F%2F08851NvFWRLTnCfJou5FNi8lIGf5O89jYXrDt1gGYbUSuEdiQiCHgTx6pQbxtGl4xpp1t4slwf7zfYeJV14bCVdntlCzUM5CZcqKV2wdC2dtpnGb2BPN%2BWr3%2B5oxyY8Kc6AMChbWcxlMRlFKs3DH6C3yHe0Fx%2FCCZP7avZOR12GuvUxYFxqHns9AsNeBLwd3GrhQkQY%2FBb8rlFJ3KA%2BQiz6h7MnuVd01E3O3Yf%2BhpSoqkDH29KAlfPzBLlH15QTR9Lkaia9kDlKV%2FMnSYftAsLSvxLfjCdTGnEcmkvNiRqzwhTXqUs94sKgUIGHxdyWT5Gq0nasCRsTbPJsuDv2PJh8BashpwjQTn5iu52iLYG5p6hJdotyoqcQiTEAlF5wVLa2zDWiaDIBjqkAWPgc7F7ZsyxHriIAWOEdjbZ6i9QUNOLTFkWSTe01Z%2F7YyzwthPqNLUEvWHPE4JOncsY8x%2B6Y7l8z8UhIF%2BIPrvuA%2FF672JXEeWIVwOt59PJt6JxI30szNrCWNefQYJ%2FZlPSOlWO6VMWWE6qjU9teTaJIG6bIaiwvdSHM0%2FmkkH%2Bbj%2B5h8nRmDx4y2rVFq6%2BBKh5318D2FSwpTCmFTASUyrArLSu&X-Amz-Signature=8a0ae8c2ab752568e3495beb2942f9ffeb3bba519913f6fb8cc527f9c1b1da88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6GRPB4P%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjTYaeiCch2Bj3unIbUi08jTIKQ19L6Gzb0o3MabK%2FpwIhAMcb9jirHrgvQScsqtXeVGCV8HJs2T1LWAjxHWU%2Bo3THKv8DCFMQABoMNjM3NDIzMTgzODA1IgwfdvOAhDx4yMzsOdwq3AO7Bge4wKJ7mmZVz468GJQeweHtK3CtCpEz1jXsQ1BFIJyfFLvWgpJRi35HepeXavzOduC3WMxJ1C9%2Fqa%2BbShELluClq5DAkvdXsrTPmqeA6ax5eoBUmuqGLKhRZDQmujX7gCJI6KgRwqQVuNJH8wkAReV%2BdPj2aaVJjVnMEtca7NeyEPONvaaM%2F03Cnf81JhRgqHlnVFjqLgHHyMdKSUeuXgxhK6OkhIrq9zkWgOJOknQg4UaCfKPl%2F%2F08851NvFWRLTnCfJou5FNi8lIGf5O89jYXrDt1gGYbUSuEdiQiCHgTx6pQbxtGl4xpp1t4slwf7zfYeJV14bCVdntlCzUM5CZcqKV2wdC2dtpnGb2BPN%2BWr3%2B5oxyY8Kc6AMChbWcxlMRlFKs3DH6C3yHe0Fx%2FCCZP7avZOR12GuvUxYFxqHns9AsNeBLwd3GrhQkQY%2FBb8rlFJ3KA%2BQiz6h7MnuVd01E3O3Yf%2BhpSoqkDH29KAlfPzBLlH15QTR9Lkaia9kDlKV%2FMnSYftAsLSvxLfjCdTGnEcmkvNiRqzwhTXqUs94sKgUIGHxdyWT5Gq0nasCRsTbPJsuDv2PJh8BashpwjQTn5iu52iLYG5p6hJdotyoqcQiTEAlF5wVLa2zDWiaDIBjqkAWPgc7F7ZsyxHriIAWOEdjbZ6i9QUNOLTFkWSTe01Z%2F7YyzwthPqNLUEvWHPE4JOncsY8x%2B6Y7l8z8UhIF%2BIPrvuA%2FF672JXEeWIVwOt59PJt6JxI30szNrCWNefQYJ%2FZlPSOlWO6VMWWE6qjU9teTaJIG6bIaiwvdSHM0%2FmkkH%2Bbj%2B5h8nRmDx4y2rVFq6%2BBKh5318D2FSwpTCmFTASUyrArLSu&X-Amz-Signature=bd6303298235fb92cbf161b8deca592531b46605b9f3339aaa47abbc6e8558b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6GRPB4P%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjTYaeiCch2Bj3unIbUi08jTIKQ19L6Gzb0o3MabK%2FpwIhAMcb9jirHrgvQScsqtXeVGCV8HJs2T1LWAjxHWU%2Bo3THKv8DCFMQABoMNjM3NDIzMTgzODA1IgwfdvOAhDx4yMzsOdwq3AO7Bge4wKJ7mmZVz468GJQeweHtK3CtCpEz1jXsQ1BFIJyfFLvWgpJRi35HepeXavzOduC3WMxJ1C9%2Fqa%2BbShELluClq5DAkvdXsrTPmqeA6ax5eoBUmuqGLKhRZDQmujX7gCJI6KgRwqQVuNJH8wkAReV%2BdPj2aaVJjVnMEtca7NeyEPONvaaM%2F03Cnf81JhRgqHlnVFjqLgHHyMdKSUeuXgxhK6OkhIrq9zkWgOJOknQg4UaCfKPl%2F%2F08851NvFWRLTnCfJou5FNi8lIGf5O89jYXrDt1gGYbUSuEdiQiCHgTx6pQbxtGl4xpp1t4slwf7zfYeJV14bCVdntlCzUM5CZcqKV2wdC2dtpnGb2BPN%2BWr3%2B5oxyY8Kc6AMChbWcxlMRlFKs3DH6C3yHe0Fx%2FCCZP7avZOR12GuvUxYFxqHns9AsNeBLwd3GrhQkQY%2FBb8rlFJ3KA%2BQiz6h7MnuVd01E3O3Yf%2BhpSoqkDH29KAlfPzBLlH15QTR9Lkaia9kDlKV%2FMnSYftAsLSvxLfjCdTGnEcmkvNiRqzwhTXqUs94sKgUIGHxdyWT5Gq0nasCRsTbPJsuDv2PJh8BashpwjQTn5iu52iLYG5p6hJdotyoqcQiTEAlF5wVLa2zDWiaDIBjqkAWPgc7F7ZsyxHriIAWOEdjbZ6i9QUNOLTFkWSTe01Z%2F7YyzwthPqNLUEvWHPE4JOncsY8x%2B6Y7l8z8UhIF%2BIPrvuA%2FF672JXEeWIVwOt59PJt6JxI30szNrCWNefQYJ%2FZlPSOlWO6VMWWE6qjU9teTaJIG6bIaiwvdSHM0%2FmkkH%2Bbj%2B5h8nRmDx4y2rVFq6%2BBKh5318D2FSwpTCmFTASUyrArLSu&X-Amz-Signature=3f2e5ed137267d9c45ffbf6f9734619cad88e4202452ec807b0249693756b7f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6GRPB4P%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjTYaeiCch2Bj3unIbUi08jTIKQ19L6Gzb0o3MabK%2FpwIhAMcb9jirHrgvQScsqtXeVGCV8HJs2T1LWAjxHWU%2Bo3THKv8DCFMQABoMNjM3NDIzMTgzODA1IgwfdvOAhDx4yMzsOdwq3AO7Bge4wKJ7mmZVz468GJQeweHtK3CtCpEz1jXsQ1BFIJyfFLvWgpJRi35HepeXavzOduC3WMxJ1C9%2Fqa%2BbShELluClq5DAkvdXsrTPmqeA6ax5eoBUmuqGLKhRZDQmujX7gCJI6KgRwqQVuNJH8wkAReV%2BdPj2aaVJjVnMEtca7NeyEPONvaaM%2F03Cnf81JhRgqHlnVFjqLgHHyMdKSUeuXgxhK6OkhIrq9zkWgOJOknQg4UaCfKPl%2F%2F08851NvFWRLTnCfJou5FNi8lIGf5O89jYXrDt1gGYbUSuEdiQiCHgTx6pQbxtGl4xpp1t4slwf7zfYeJV14bCVdntlCzUM5CZcqKV2wdC2dtpnGb2BPN%2BWr3%2B5oxyY8Kc6AMChbWcxlMRlFKs3DH6C3yHe0Fx%2FCCZP7avZOR12GuvUxYFxqHns9AsNeBLwd3GrhQkQY%2FBb8rlFJ3KA%2BQiz6h7MnuVd01E3O3Yf%2BhpSoqkDH29KAlfPzBLlH15QTR9Lkaia9kDlKV%2FMnSYftAsLSvxLfjCdTGnEcmkvNiRqzwhTXqUs94sKgUIGHxdyWT5Gq0nasCRsTbPJsuDv2PJh8BashpwjQTn5iu52iLYG5p6hJdotyoqcQiTEAlF5wVLa2zDWiaDIBjqkAWPgc7F7ZsyxHriIAWOEdjbZ6i9QUNOLTFkWSTe01Z%2F7YyzwthPqNLUEvWHPE4JOncsY8x%2B6Y7l8z8UhIF%2BIPrvuA%2FF672JXEeWIVwOt59PJt6JxI30szNrCWNefQYJ%2FZlPSOlWO6VMWWE6qjU9teTaJIG6bIaiwvdSHM0%2FmkkH%2Bbj%2B5h8nRmDx4y2rVFq6%2BBKh5318D2FSwpTCmFTASUyrArLSu&X-Amz-Signature=534e84edf30aa0572dcc7110360987eb750bb040bcb83c33d878bc9c154cec96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6GRPB4P%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjTYaeiCch2Bj3unIbUi08jTIKQ19L6Gzb0o3MabK%2FpwIhAMcb9jirHrgvQScsqtXeVGCV8HJs2T1LWAjxHWU%2Bo3THKv8DCFMQABoMNjM3NDIzMTgzODA1IgwfdvOAhDx4yMzsOdwq3AO7Bge4wKJ7mmZVz468GJQeweHtK3CtCpEz1jXsQ1BFIJyfFLvWgpJRi35HepeXavzOduC3WMxJ1C9%2Fqa%2BbShELluClq5DAkvdXsrTPmqeA6ax5eoBUmuqGLKhRZDQmujX7gCJI6KgRwqQVuNJH8wkAReV%2BdPj2aaVJjVnMEtca7NeyEPONvaaM%2F03Cnf81JhRgqHlnVFjqLgHHyMdKSUeuXgxhK6OkhIrq9zkWgOJOknQg4UaCfKPl%2F%2F08851NvFWRLTnCfJou5FNi8lIGf5O89jYXrDt1gGYbUSuEdiQiCHgTx6pQbxtGl4xpp1t4slwf7zfYeJV14bCVdntlCzUM5CZcqKV2wdC2dtpnGb2BPN%2BWr3%2B5oxyY8Kc6AMChbWcxlMRlFKs3DH6C3yHe0Fx%2FCCZP7avZOR12GuvUxYFxqHns9AsNeBLwd3GrhQkQY%2FBb8rlFJ3KA%2BQiz6h7MnuVd01E3O3Yf%2BhpSoqkDH29KAlfPzBLlH15QTR9Lkaia9kDlKV%2FMnSYftAsLSvxLfjCdTGnEcmkvNiRqzwhTXqUs94sKgUIGHxdyWT5Gq0nasCRsTbPJsuDv2PJh8BashpwjQTn5iu52iLYG5p6hJdotyoqcQiTEAlF5wVLa2zDWiaDIBjqkAWPgc7F7ZsyxHriIAWOEdjbZ6i9QUNOLTFkWSTe01Z%2F7YyzwthPqNLUEvWHPE4JOncsY8x%2B6Y7l8z8UhIF%2BIPrvuA%2FF672JXEeWIVwOt59PJt6JxI30szNrCWNefQYJ%2FZlPSOlWO6VMWWE6qjU9teTaJIG6bIaiwvdSHM0%2FmkkH%2Bbj%2B5h8nRmDx4y2rVFq6%2BBKh5318D2FSwpTCmFTASUyrArLSu&X-Amz-Signature=d59d0114c562bdedf4aefaac0867009e8624db85d33b0b919be8b7fe132d7dd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6GRPB4P%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjTYaeiCch2Bj3unIbUi08jTIKQ19L6Gzb0o3MabK%2FpwIhAMcb9jirHrgvQScsqtXeVGCV8HJs2T1LWAjxHWU%2Bo3THKv8DCFMQABoMNjM3NDIzMTgzODA1IgwfdvOAhDx4yMzsOdwq3AO7Bge4wKJ7mmZVz468GJQeweHtK3CtCpEz1jXsQ1BFIJyfFLvWgpJRi35HepeXavzOduC3WMxJ1C9%2Fqa%2BbShELluClq5DAkvdXsrTPmqeA6ax5eoBUmuqGLKhRZDQmujX7gCJI6KgRwqQVuNJH8wkAReV%2BdPj2aaVJjVnMEtca7NeyEPONvaaM%2F03Cnf81JhRgqHlnVFjqLgHHyMdKSUeuXgxhK6OkhIrq9zkWgOJOknQg4UaCfKPl%2F%2F08851NvFWRLTnCfJou5FNi8lIGf5O89jYXrDt1gGYbUSuEdiQiCHgTx6pQbxtGl4xpp1t4slwf7zfYeJV14bCVdntlCzUM5CZcqKV2wdC2dtpnGb2BPN%2BWr3%2B5oxyY8Kc6AMChbWcxlMRlFKs3DH6C3yHe0Fx%2FCCZP7avZOR12GuvUxYFxqHns9AsNeBLwd3GrhQkQY%2FBb8rlFJ3KA%2BQiz6h7MnuVd01E3O3Yf%2BhpSoqkDH29KAlfPzBLlH15QTR9Lkaia9kDlKV%2FMnSYftAsLSvxLfjCdTGnEcmkvNiRqzwhTXqUs94sKgUIGHxdyWT5Gq0nasCRsTbPJsuDv2PJh8BashpwjQTn5iu52iLYG5p6hJdotyoqcQiTEAlF5wVLa2zDWiaDIBjqkAWPgc7F7ZsyxHriIAWOEdjbZ6i9QUNOLTFkWSTe01Z%2F7YyzwthPqNLUEvWHPE4JOncsY8x%2B6Y7l8z8UhIF%2BIPrvuA%2FF672JXEeWIVwOt59PJt6JxI30szNrCWNefQYJ%2FZlPSOlWO6VMWWE6qjU9teTaJIG6bIaiwvdSHM0%2FmkkH%2Bbj%2B5h8nRmDx4y2rVFq6%2BBKh5318D2FSwpTCmFTASUyrArLSu&X-Amz-Signature=d0f2fe110150962146f755edfe15f40e4847a6399c3bc03d08d669b65d20ee24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6GRPB4P%2F20251103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251103T014139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjTYaeiCch2Bj3unIbUi08jTIKQ19L6Gzb0o3MabK%2FpwIhAMcb9jirHrgvQScsqtXeVGCV8HJs2T1LWAjxHWU%2Bo3THKv8DCFMQABoMNjM3NDIzMTgzODA1IgwfdvOAhDx4yMzsOdwq3AO7Bge4wKJ7mmZVz468GJQeweHtK3CtCpEz1jXsQ1BFIJyfFLvWgpJRi35HepeXavzOduC3WMxJ1C9%2Fqa%2BbShELluClq5DAkvdXsrTPmqeA6ax5eoBUmuqGLKhRZDQmujX7gCJI6KgRwqQVuNJH8wkAReV%2BdPj2aaVJjVnMEtca7NeyEPONvaaM%2F03Cnf81JhRgqHlnVFjqLgHHyMdKSUeuXgxhK6OkhIrq9zkWgOJOknQg4UaCfKPl%2F%2F08851NvFWRLTnCfJou5FNi8lIGf5O89jYXrDt1gGYbUSuEdiQiCHgTx6pQbxtGl4xpp1t4slwf7zfYeJV14bCVdntlCzUM5CZcqKV2wdC2dtpnGb2BPN%2BWr3%2B5oxyY8Kc6AMChbWcxlMRlFKs3DH6C3yHe0Fx%2FCCZP7avZOR12GuvUxYFxqHns9AsNeBLwd3GrhQkQY%2FBb8rlFJ3KA%2BQiz6h7MnuVd01E3O3Yf%2BhpSoqkDH29KAlfPzBLlH15QTR9Lkaia9kDlKV%2FMnSYftAsLSvxLfjCdTGnEcmkvNiRqzwhTXqUs94sKgUIGHxdyWT5Gq0nasCRsTbPJsuDv2PJh8BashpwjQTn5iu52iLYG5p6hJdotyoqcQiTEAlF5wVLa2zDWiaDIBjqkAWPgc7F7ZsyxHriIAWOEdjbZ6i9QUNOLTFkWSTe01Z%2F7YyzwthPqNLUEvWHPE4JOncsY8x%2B6Y7l8z8UhIF%2BIPrvuA%2FF672JXEeWIVwOt59PJt6JxI30szNrCWNefQYJ%2FZlPSOlWO6VMWWE6qjU9teTaJIG6bIaiwvdSHM0%2FmkkH%2Bbj%2B5h8nRmDx4y2rVFq6%2BBKh5318D2FSwpTCmFTASUyrArLSu&X-Amz-Signature=56f9a1f7409cfd2951c7288ee6e2293d2af4830105163f3f6161be8dfddfea6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
