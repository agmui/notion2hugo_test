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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WU3LOZL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqlqlTHdb1ObImzt2C88Hm6Ou3MHNfYJ3WX5LmjbEIfQIgFZhh7WcK1QwaNII598EufzSxeXj%2BKpB6pbNl5mWY97gq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDB8ib5eIMIJDryoXKyrcAw1bLpurLN0Cisj%2BF74HFDsW6DQsyw9gFp4sQGg2E8%2FhxvsIRlBMFodMNo1Cj3D59sTw2l0waL3zO0%2B2J2wRtmB8umq1fWomPmTBDr5XKFhZPmiIfsH7U7O7pF9ALCONdslWxbM%2Bke6hOYO8HWNA1l5eEPVbstBzNWJzCuuFlldewFN1COy5kySkbFqYaiUxq2gYoG%2BsfSgABMjA%2BGU9p6h2h%2Fj%2BV6bp7QEK6DcVQcbJCfCM7TWuuVHH4jt2lbaVnaapPf6qg9IF3D2zc47gQLJ24RMqET36zUhsCcP2ug9Jfje1nGsmRN%2BFbATFrsFIEhYSpmxzqJ1ofHNp%2FC%2BRE7%2ByoyM2YTNVZY6xbzXzrKJUGSCHptyGUKXUtvBHdgzahGkx4%2Ba3RKxjaIT%2Bg3D%2FxJIXSkt6TsjVzh89B%2FOFZNDTwVTsAGaW%2BdW4AImJ0h%2FFlbl6ot0ozuujRHdPgcshJ1%2Fgjz1LMjKRbK9eoqdSZPwTc%2BT5V0K5kOcOtnr1BV8C%2BqSDVIJ11%2F5mOT27SOotfmi1vUJ8LrMerrrj9oNS6W0jOOAnozGzKde4bkz7tko4LkBlv3EOltEjh20Ju8jRg99%2BsB06l8Hrd3IGYPIXtAGqAMjJvnw48%2FyohMuTMMW69cQGOqUBeH%2BJNHrXBhVzGWCaSlGntZGRDa6%2FX%2B9m11pIhjNsHjgFSYiBfW6a33eA2bL1rEXYJrZvkAImoNIf%2BMYGi0IIhoAUigPQQ12YunVF17gOxSZFDQMJCNCddD9iXN6yckTihFDFo46QjhPm%2FTP38Nh1TIPRDi3s40f3ZqIyPnTeyCV6kMWvqhbNPZmP%2FEUYio9kASp19GkJ0JlKTRGiM8yYz%2BUtHdJE&X-Amz-Signature=29395385c54297bd3ad5c9b4d3e8c9559d2bb1d715b71e22b3287117265f8f74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WU3LOZL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqlqlTHdb1ObImzt2C88Hm6Ou3MHNfYJ3WX5LmjbEIfQIgFZhh7WcK1QwaNII598EufzSxeXj%2BKpB6pbNl5mWY97gq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDB8ib5eIMIJDryoXKyrcAw1bLpurLN0Cisj%2BF74HFDsW6DQsyw9gFp4sQGg2E8%2FhxvsIRlBMFodMNo1Cj3D59sTw2l0waL3zO0%2B2J2wRtmB8umq1fWomPmTBDr5XKFhZPmiIfsH7U7O7pF9ALCONdslWxbM%2Bke6hOYO8HWNA1l5eEPVbstBzNWJzCuuFlldewFN1COy5kySkbFqYaiUxq2gYoG%2BsfSgABMjA%2BGU9p6h2h%2Fj%2BV6bp7QEK6DcVQcbJCfCM7TWuuVHH4jt2lbaVnaapPf6qg9IF3D2zc47gQLJ24RMqET36zUhsCcP2ug9Jfje1nGsmRN%2BFbATFrsFIEhYSpmxzqJ1ofHNp%2FC%2BRE7%2ByoyM2YTNVZY6xbzXzrKJUGSCHptyGUKXUtvBHdgzahGkx4%2Ba3RKxjaIT%2Bg3D%2FxJIXSkt6TsjVzh89B%2FOFZNDTwVTsAGaW%2BdW4AImJ0h%2FFlbl6ot0ozuujRHdPgcshJ1%2Fgjz1LMjKRbK9eoqdSZPwTc%2BT5V0K5kOcOtnr1BV8C%2BqSDVIJ11%2F5mOT27SOotfmi1vUJ8LrMerrrj9oNS6W0jOOAnozGzKde4bkz7tko4LkBlv3EOltEjh20Ju8jRg99%2BsB06l8Hrd3IGYPIXtAGqAMjJvnw48%2FyohMuTMMW69cQGOqUBeH%2BJNHrXBhVzGWCaSlGntZGRDa6%2FX%2B9m11pIhjNsHjgFSYiBfW6a33eA2bL1rEXYJrZvkAImoNIf%2BMYGi0IIhoAUigPQQ12YunVF17gOxSZFDQMJCNCddD9iXN6yckTihFDFo46QjhPm%2FTP38Nh1TIPRDi3s40f3ZqIyPnTeyCV6kMWvqhbNPZmP%2FEUYio9kASp19GkJ0JlKTRGiM8yYz%2BUtHdJE&X-Amz-Signature=4101f47c24c3d18709b49304f13d74dc18eeebbf5d33a0e66911e210f14a49f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WU3LOZL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqlqlTHdb1ObImzt2C88Hm6Ou3MHNfYJ3WX5LmjbEIfQIgFZhh7WcK1QwaNII598EufzSxeXj%2BKpB6pbNl5mWY97gq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDB8ib5eIMIJDryoXKyrcAw1bLpurLN0Cisj%2BF74HFDsW6DQsyw9gFp4sQGg2E8%2FhxvsIRlBMFodMNo1Cj3D59sTw2l0waL3zO0%2B2J2wRtmB8umq1fWomPmTBDr5XKFhZPmiIfsH7U7O7pF9ALCONdslWxbM%2Bke6hOYO8HWNA1l5eEPVbstBzNWJzCuuFlldewFN1COy5kySkbFqYaiUxq2gYoG%2BsfSgABMjA%2BGU9p6h2h%2Fj%2BV6bp7QEK6DcVQcbJCfCM7TWuuVHH4jt2lbaVnaapPf6qg9IF3D2zc47gQLJ24RMqET36zUhsCcP2ug9Jfje1nGsmRN%2BFbATFrsFIEhYSpmxzqJ1ofHNp%2FC%2BRE7%2ByoyM2YTNVZY6xbzXzrKJUGSCHptyGUKXUtvBHdgzahGkx4%2Ba3RKxjaIT%2Bg3D%2FxJIXSkt6TsjVzh89B%2FOFZNDTwVTsAGaW%2BdW4AImJ0h%2FFlbl6ot0ozuujRHdPgcshJ1%2Fgjz1LMjKRbK9eoqdSZPwTc%2BT5V0K5kOcOtnr1BV8C%2BqSDVIJ11%2F5mOT27SOotfmi1vUJ8LrMerrrj9oNS6W0jOOAnozGzKde4bkz7tko4LkBlv3EOltEjh20Ju8jRg99%2BsB06l8Hrd3IGYPIXtAGqAMjJvnw48%2FyohMuTMMW69cQGOqUBeH%2BJNHrXBhVzGWCaSlGntZGRDa6%2FX%2B9m11pIhjNsHjgFSYiBfW6a33eA2bL1rEXYJrZvkAImoNIf%2BMYGi0IIhoAUigPQQ12YunVF17gOxSZFDQMJCNCddD9iXN6yckTihFDFo46QjhPm%2FTP38Nh1TIPRDi3s40f3ZqIyPnTeyCV6kMWvqhbNPZmP%2FEUYio9kASp19GkJ0JlKTRGiM8yYz%2BUtHdJE&X-Amz-Signature=9e44ec193281785ef7ecb57dd73866de4fa9cd003760e5d01c2e36e88a4c6463&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WU3LOZL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqlqlTHdb1ObImzt2C88Hm6Ou3MHNfYJ3WX5LmjbEIfQIgFZhh7WcK1QwaNII598EufzSxeXj%2BKpB6pbNl5mWY97gq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDB8ib5eIMIJDryoXKyrcAw1bLpurLN0Cisj%2BF74HFDsW6DQsyw9gFp4sQGg2E8%2FhxvsIRlBMFodMNo1Cj3D59sTw2l0waL3zO0%2B2J2wRtmB8umq1fWomPmTBDr5XKFhZPmiIfsH7U7O7pF9ALCONdslWxbM%2Bke6hOYO8HWNA1l5eEPVbstBzNWJzCuuFlldewFN1COy5kySkbFqYaiUxq2gYoG%2BsfSgABMjA%2BGU9p6h2h%2Fj%2BV6bp7QEK6DcVQcbJCfCM7TWuuVHH4jt2lbaVnaapPf6qg9IF3D2zc47gQLJ24RMqET36zUhsCcP2ug9Jfje1nGsmRN%2BFbATFrsFIEhYSpmxzqJ1ofHNp%2FC%2BRE7%2ByoyM2YTNVZY6xbzXzrKJUGSCHptyGUKXUtvBHdgzahGkx4%2Ba3RKxjaIT%2Bg3D%2FxJIXSkt6TsjVzh89B%2FOFZNDTwVTsAGaW%2BdW4AImJ0h%2FFlbl6ot0ozuujRHdPgcshJ1%2Fgjz1LMjKRbK9eoqdSZPwTc%2BT5V0K5kOcOtnr1BV8C%2BqSDVIJ11%2F5mOT27SOotfmi1vUJ8LrMerrrj9oNS6W0jOOAnozGzKde4bkz7tko4LkBlv3EOltEjh20Ju8jRg99%2BsB06l8Hrd3IGYPIXtAGqAMjJvnw48%2FyohMuTMMW69cQGOqUBeH%2BJNHrXBhVzGWCaSlGntZGRDa6%2FX%2B9m11pIhjNsHjgFSYiBfW6a33eA2bL1rEXYJrZvkAImoNIf%2BMYGi0IIhoAUigPQQ12YunVF17gOxSZFDQMJCNCddD9iXN6yckTihFDFo46QjhPm%2FTP38Nh1TIPRDi3s40f3ZqIyPnTeyCV6kMWvqhbNPZmP%2FEUYio9kASp19GkJ0JlKTRGiM8yYz%2BUtHdJE&X-Amz-Signature=07fba57c0a2f16faee5ce5bfc5247a2d0ed6eff6999973bb32816c41b3315ede&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WU3LOZL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqlqlTHdb1ObImzt2C88Hm6Ou3MHNfYJ3WX5LmjbEIfQIgFZhh7WcK1QwaNII598EufzSxeXj%2BKpB6pbNl5mWY97gq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDB8ib5eIMIJDryoXKyrcAw1bLpurLN0Cisj%2BF74HFDsW6DQsyw9gFp4sQGg2E8%2FhxvsIRlBMFodMNo1Cj3D59sTw2l0waL3zO0%2B2J2wRtmB8umq1fWomPmTBDr5XKFhZPmiIfsH7U7O7pF9ALCONdslWxbM%2Bke6hOYO8HWNA1l5eEPVbstBzNWJzCuuFlldewFN1COy5kySkbFqYaiUxq2gYoG%2BsfSgABMjA%2BGU9p6h2h%2Fj%2BV6bp7QEK6DcVQcbJCfCM7TWuuVHH4jt2lbaVnaapPf6qg9IF3D2zc47gQLJ24RMqET36zUhsCcP2ug9Jfje1nGsmRN%2BFbATFrsFIEhYSpmxzqJ1ofHNp%2FC%2BRE7%2ByoyM2YTNVZY6xbzXzrKJUGSCHptyGUKXUtvBHdgzahGkx4%2Ba3RKxjaIT%2Bg3D%2FxJIXSkt6TsjVzh89B%2FOFZNDTwVTsAGaW%2BdW4AImJ0h%2FFlbl6ot0ozuujRHdPgcshJ1%2Fgjz1LMjKRbK9eoqdSZPwTc%2BT5V0K5kOcOtnr1BV8C%2BqSDVIJ11%2F5mOT27SOotfmi1vUJ8LrMerrrj9oNS6W0jOOAnozGzKde4bkz7tko4LkBlv3EOltEjh20Ju8jRg99%2BsB06l8Hrd3IGYPIXtAGqAMjJvnw48%2FyohMuTMMW69cQGOqUBeH%2BJNHrXBhVzGWCaSlGntZGRDa6%2FX%2B9m11pIhjNsHjgFSYiBfW6a33eA2bL1rEXYJrZvkAImoNIf%2BMYGi0IIhoAUigPQQ12YunVF17gOxSZFDQMJCNCddD9iXN6yckTihFDFo46QjhPm%2FTP38Nh1TIPRDi3s40f3ZqIyPnTeyCV6kMWvqhbNPZmP%2FEUYio9kASp19GkJ0JlKTRGiM8yYz%2BUtHdJE&X-Amz-Signature=8489e08691ef03d69c221ed3e717a5c3d11c2e8569a50533a7a1ea160afabfa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WU3LOZL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqlqlTHdb1ObImzt2C88Hm6Ou3MHNfYJ3WX5LmjbEIfQIgFZhh7WcK1QwaNII598EufzSxeXj%2BKpB6pbNl5mWY97gq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDB8ib5eIMIJDryoXKyrcAw1bLpurLN0Cisj%2BF74HFDsW6DQsyw9gFp4sQGg2E8%2FhxvsIRlBMFodMNo1Cj3D59sTw2l0waL3zO0%2B2J2wRtmB8umq1fWomPmTBDr5XKFhZPmiIfsH7U7O7pF9ALCONdslWxbM%2Bke6hOYO8HWNA1l5eEPVbstBzNWJzCuuFlldewFN1COy5kySkbFqYaiUxq2gYoG%2BsfSgABMjA%2BGU9p6h2h%2Fj%2BV6bp7QEK6DcVQcbJCfCM7TWuuVHH4jt2lbaVnaapPf6qg9IF3D2zc47gQLJ24RMqET36zUhsCcP2ug9Jfje1nGsmRN%2BFbATFrsFIEhYSpmxzqJ1ofHNp%2FC%2BRE7%2ByoyM2YTNVZY6xbzXzrKJUGSCHptyGUKXUtvBHdgzahGkx4%2Ba3RKxjaIT%2Bg3D%2FxJIXSkt6TsjVzh89B%2FOFZNDTwVTsAGaW%2BdW4AImJ0h%2FFlbl6ot0ozuujRHdPgcshJ1%2Fgjz1LMjKRbK9eoqdSZPwTc%2BT5V0K5kOcOtnr1BV8C%2BqSDVIJ11%2F5mOT27SOotfmi1vUJ8LrMerrrj9oNS6W0jOOAnozGzKde4bkz7tko4LkBlv3EOltEjh20Ju8jRg99%2BsB06l8Hrd3IGYPIXtAGqAMjJvnw48%2FyohMuTMMW69cQGOqUBeH%2BJNHrXBhVzGWCaSlGntZGRDa6%2FX%2B9m11pIhjNsHjgFSYiBfW6a33eA2bL1rEXYJrZvkAImoNIf%2BMYGi0IIhoAUigPQQ12YunVF17gOxSZFDQMJCNCddD9iXN6yckTihFDFo46QjhPm%2FTP38Nh1TIPRDi3s40f3ZqIyPnTeyCV6kMWvqhbNPZmP%2FEUYio9kASp19GkJ0JlKTRGiM8yYz%2BUtHdJE&X-Amz-Signature=ca318353944568835d815e1dcb04cf693e0d5f90497df456c277bfff379ed8bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WU3LOZL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqlqlTHdb1ObImzt2C88Hm6Ou3MHNfYJ3WX5LmjbEIfQIgFZhh7WcK1QwaNII598EufzSxeXj%2BKpB6pbNl5mWY97gq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDB8ib5eIMIJDryoXKyrcAw1bLpurLN0Cisj%2BF74HFDsW6DQsyw9gFp4sQGg2E8%2FhxvsIRlBMFodMNo1Cj3D59sTw2l0waL3zO0%2B2J2wRtmB8umq1fWomPmTBDr5XKFhZPmiIfsH7U7O7pF9ALCONdslWxbM%2Bke6hOYO8HWNA1l5eEPVbstBzNWJzCuuFlldewFN1COy5kySkbFqYaiUxq2gYoG%2BsfSgABMjA%2BGU9p6h2h%2Fj%2BV6bp7QEK6DcVQcbJCfCM7TWuuVHH4jt2lbaVnaapPf6qg9IF3D2zc47gQLJ24RMqET36zUhsCcP2ug9Jfje1nGsmRN%2BFbATFrsFIEhYSpmxzqJ1ofHNp%2FC%2BRE7%2ByoyM2YTNVZY6xbzXzrKJUGSCHptyGUKXUtvBHdgzahGkx4%2Ba3RKxjaIT%2Bg3D%2FxJIXSkt6TsjVzh89B%2FOFZNDTwVTsAGaW%2BdW4AImJ0h%2FFlbl6ot0ozuujRHdPgcshJ1%2Fgjz1LMjKRbK9eoqdSZPwTc%2BT5V0K5kOcOtnr1BV8C%2BqSDVIJ11%2F5mOT27SOotfmi1vUJ8LrMerrrj9oNS6W0jOOAnozGzKde4bkz7tko4LkBlv3EOltEjh20Ju8jRg99%2BsB06l8Hrd3IGYPIXtAGqAMjJvnw48%2FyohMuTMMW69cQGOqUBeH%2BJNHrXBhVzGWCaSlGntZGRDa6%2FX%2B9m11pIhjNsHjgFSYiBfW6a33eA2bL1rEXYJrZvkAImoNIf%2BMYGi0IIhoAUigPQQ12YunVF17gOxSZFDQMJCNCddD9iXN6yckTihFDFo46QjhPm%2FTP38Nh1TIPRDi3s40f3ZqIyPnTeyCV6kMWvqhbNPZmP%2FEUYio9kASp19GkJ0JlKTRGiM8yYz%2BUtHdJE&X-Amz-Signature=f75d519a7dd443860d9da3b37377820663f43e67248a9742ac78379660760fdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WU3LOZL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqlqlTHdb1ObImzt2C88Hm6Ou3MHNfYJ3WX5LmjbEIfQIgFZhh7WcK1QwaNII598EufzSxeXj%2BKpB6pbNl5mWY97gq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDB8ib5eIMIJDryoXKyrcAw1bLpurLN0Cisj%2BF74HFDsW6DQsyw9gFp4sQGg2E8%2FhxvsIRlBMFodMNo1Cj3D59sTw2l0waL3zO0%2B2J2wRtmB8umq1fWomPmTBDr5XKFhZPmiIfsH7U7O7pF9ALCONdslWxbM%2Bke6hOYO8HWNA1l5eEPVbstBzNWJzCuuFlldewFN1COy5kySkbFqYaiUxq2gYoG%2BsfSgABMjA%2BGU9p6h2h%2Fj%2BV6bp7QEK6DcVQcbJCfCM7TWuuVHH4jt2lbaVnaapPf6qg9IF3D2zc47gQLJ24RMqET36zUhsCcP2ug9Jfje1nGsmRN%2BFbATFrsFIEhYSpmxzqJ1ofHNp%2FC%2BRE7%2ByoyM2YTNVZY6xbzXzrKJUGSCHptyGUKXUtvBHdgzahGkx4%2Ba3RKxjaIT%2Bg3D%2FxJIXSkt6TsjVzh89B%2FOFZNDTwVTsAGaW%2BdW4AImJ0h%2FFlbl6ot0ozuujRHdPgcshJ1%2Fgjz1LMjKRbK9eoqdSZPwTc%2BT5V0K5kOcOtnr1BV8C%2BqSDVIJ11%2F5mOT27SOotfmi1vUJ8LrMerrrj9oNS6W0jOOAnozGzKde4bkz7tko4LkBlv3EOltEjh20Ju8jRg99%2BsB06l8Hrd3IGYPIXtAGqAMjJvnw48%2FyohMuTMMW69cQGOqUBeH%2BJNHrXBhVzGWCaSlGntZGRDa6%2FX%2B9m11pIhjNsHjgFSYiBfW6a33eA2bL1rEXYJrZvkAImoNIf%2BMYGi0IIhoAUigPQQ12YunVF17gOxSZFDQMJCNCddD9iXN6yckTihFDFo46QjhPm%2FTP38Nh1TIPRDi3s40f3ZqIyPnTeyCV6kMWvqhbNPZmP%2FEUYio9kASp19GkJ0JlKTRGiM8yYz%2BUtHdJE&X-Amz-Signature=26b19d0b5097685eca2cd2923ecc983ec589dced21bc7cc232ecc0cea778eb25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WU3LOZL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqlqlTHdb1ObImzt2C88Hm6Ou3MHNfYJ3WX5LmjbEIfQIgFZhh7WcK1QwaNII598EufzSxeXj%2BKpB6pbNl5mWY97gq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDB8ib5eIMIJDryoXKyrcAw1bLpurLN0Cisj%2BF74HFDsW6DQsyw9gFp4sQGg2E8%2FhxvsIRlBMFodMNo1Cj3D59sTw2l0waL3zO0%2B2J2wRtmB8umq1fWomPmTBDr5XKFhZPmiIfsH7U7O7pF9ALCONdslWxbM%2Bke6hOYO8HWNA1l5eEPVbstBzNWJzCuuFlldewFN1COy5kySkbFqYaiUxq2gYoG%2BsfSgABMjA%2BGU9p6h2h%2Fj%2BV6bp7QEK6DcVQcbJCfCM7TWuuVHH4jt2lbaVnaapPf6qg9IF3D2zc47gQLJ24RMqET36zUhsCcP2ug9Jfje1nGsmRN%2BFbATFrsFIEhYSpmxzqJ1ofHNp%2FC%2BRE7%2ByoyM2YTNVZY6xbzXzrKJUGSCHptyGUKXUtvBHdgzahGkx4%2Ba3RKxjaIT%2Bg3D%2FxJIXSkt6TsjVzh89B%2FOFZNDTwVTsAGaW%2BdW4AImJ0h%2FFlbl6ot0ozuujRHdPgcshJ1%2Fgjz1LMjKRbK9eoqdSZPwTc%2BT5V0K5kOcOtnr1BV8C%2BqSDVIJ11%2F5mOT27SOotfmi1vUJ8LrMerrrj9oNS6W0jOOAnozGzKde4bkz7tko4LkBlv3EOltEjh20Ju8jRg99%2BsB06l8Hrd3IGYPIXtAGqAMjJvnw48%2FyohMuTMMW69cQGOqUBeH%2BJNHrXBhVzGWCaSlGntZGRDa6%2FX%2B9m11pIhjNsHjgFSYiBfW6a33eA2bL1rEXYJrZvkAImoNIf%2BMYGi0IIhoAUigPQQ12YunVF17gOxSZFDQMJCNCddD9iXN6yckTihFDFo46QjhPm%2FTP38Nh1TIPRDi3s40f3ZqIyPnTeyCV6kMWvqhbNPZmP%2FEUYio9kASp19GkJ0JlKTRGiM8yYz%2BUtHdJE&X-Amz-Signature=dc672b32e4fa4ac2d774c4043ec482a51312a809a014a30e3bffb6b3d0ee104e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WU3LOZL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqlqlTHdb1ObImzt2C88Hm6Ou3MHNfYJ3WX5LmjbEIfQIgFZhh7WcK1QwaNII598EufzSxeXj%2BKpB6pbNl5mWY97gq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDB8ib5eIMIJDryoXKyrcAw1bLpurLN0Cisj%2BF74HFDsW6DQsyw9gFp4sQGg2E8%2FhxvsIRlBMFodMNo1Cj3D59sTw2l0waL3zO0%2B2J2wRtmB8umq1fWomPmTBDr5XKFhZPmiIfsH7U7O7pF9ALCONdslWxbM%2Bke6hOYO8HWNA1l5eEPVbstBzNWJzCuuFlldewFN1COy5kySkbFqYaiUxq2gYoG%2BsfSgABMjA%2BGU9p6h2h%2Fj%2BV6bp7QEK6DcVQcbJCfCM7TWuuVHH4jt2lbaVnaapPf6qg9IF3D2zc47gQLJ24RMqET36zUhsCcP2ug9Jfje1nGsmRN%2BFbATFrsFIEhYSpmxzqJ1ofHNp%2FC%2BRE7%2ByoyM2YTNVZY6xbzXzrKJUGSCHptyGUKXUtvBHdgzahGkx4%2Ba3RKxjaIT%2Bg3D%2FxJIXSkt6TsjVzh89B%2FOFZNDTwVTsAGaW%2BdW4AImJ0h%2FFlbl6ot0ozuujRHdPgcshJ1%2Fgjz1LMjKRbK9eoqdSZPwTc%2BT5V0K5kOcOtnr1BV8C%2BqSDVIJ11%2F5mOT27SOotfmi1vUJ8LrMerrrj9oNS6W0jOOAnozGzKde4bkz7tko4LkBlv3EOltEjh20Ju8jRg99%2BsB06l8Hrd3IGYPIXtAGqAMjJvnw48%2FyohMuTMMW69cQGOqUBeH%2BJNHrXBhVzGWCaSlGntZGRDa6%2FX%2B9m11pIhjNsHjgFSYiBfW6a33eA2bL1rEXYJrZvkAImoNIf%2BMYGi0IIhoAUigPQQ12YunVF17gOxSZFDQMJCNCddD9iXN6yckTihFDFo46QjhPm%2FTP38Nh1TIPRDi3s40f3ZqIyPnTeyCV6kMWvqhbNPZmP%2FEUYio9kASp19GkJ0JlKTRGiM8yYz%2BUtHdJE&X-Amz-Signature=bb8baea8ae07225e7f9e37e1e7520fcca1bfed840b9ad356adb50792c82c9831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WU3LOZL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqlqlTHdb1ObImzt2C88Hm6Ou3MHNfYJ3WX5LmjbEIfQIgFZhh7WcK1QwaNII598EufzSxeXj%2BKpB6pbNl5mWY97gq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDB8ib5eIMIJDryoXKyrcAw1bLpurLN0Cisj%2BF74HFDsW6DQsyw9gFp4sQGg2E8%2FhxvsIRlBMFodMNo1Cj3D59sTw2l0waL3zO0%2B2J2wRtmB8umq1fWomPmTBDr5XKFhZPmiIfsH7U7O7pF9ALCONdslWxbM%2Bke6hOYO8HWNA1l5eEPVbstBzNWJzCuuFlldewFN1COy5kySkbFqYaiUxq2gYoG%2BsfSgABMjA%2BGU9p6h2h%2Fj%2BV6bp7QEK6DcVQcbJCfCM7TWuuVHH4jt2lbaVnaapPf6qg9IF3D2zc47gQLJ24RMqET36zUhsCcP2ug9Jfje1nGsmRN%2BFbATFrsFIEhYSpmxzqJ1ofHNp%2FC%2BRE7%2ByoyM2YTNVZY6xbzXzrKJUGSCHptyGUKXUtvBHdgzahGkx4%2Ba3RKxjaIT%2Bg3D%2FxJIXSkt6TsjVzh89B%2FOFZNDTwVTsAGaW%2BdW4AImJ0h%2FFlbl6ot0ozuujRHdPgcshJ1%2Fgjz1LMjKRbK9eoqdSZPwTc%2BT5V0K5kOcOtnr1BV8C%2BqSDVIJ11%2F5mOT27SOotfmi1vUJ8LrMerrrj9oNS6W0jOOAnozGzKde4bkz7tko4LkBlv3EOltEjh20Ju8jRg99%2BsB06l8Hrd3IGYPIXtAGqAMjJvnw48%2FyohMuTMMW69cQGOqUBeH%2BJNHrXBhVzGWCaSlGntZGRDa6%2FX%2B9m11pIhjNsHjgFSYiBfW6a33eA2bL1rEXYJrZvkAImoNIf%2BMYGi0IIhoAUigPQQ12YunVF17gOxSZFDQMJCNCddD9iXN6yckTihFDFo46QjhPm%2FTP38Nh1TIPRDi3s40f3ZqIyPnTeyCV6kMWvqhbNPZmP%2FEUYio9kASp19GkJ0JlKTRGiM8yYz%2BUtHdJE&X-Amz-Signature=c9217fa6f3d6c5c15b71e53ba9e411e676daed46aa81968e0f4ddd9c284e45b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WU3LOZL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqlqlTHdb1ObImzt2C88Hm6Ou3MHNfYJ3WX5LmjbEIfQIgFZhh7WcK1QwaNII598EufzSxeXj%2BKpB6pbNl5mWY97gq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDB8ib5eIMIJDryoXKyrcAw1bLpurLN0Cisj%2BF74HFDsW6DQsyw9gFp4sQGg2E8%2FhxvsIRlBMFodMNo1Cj3D59sTw2l0waL3zO0%2B2J2wRtmB8umq1fWomPmTBDr5XKFhZPmiIfsH7U7O7pF9ALCONdslWxbM%2Bke6hOYO8HWNA1l5eEPVbstBzNWJzCuuFlldewFN1COy5kySkbFqYaiUxq2gYoG%2BsfSgABMjA%2BGU9p6h2h%2Fj%2BV6bp7QEK6DcVQcbJCfCM7TWuuVHH4jt2lbaVnaapPf6qg9IF3D2zc47gQLJ24RMqET36zUhsCcP2ug9Jfje1nGsmRN%2BFbATFrsFIEhYSpmxzqJ1ofHNp%2FC%2BRE7%2ByoyM2YTNVZY6xbzXzrKJUGSCHptyGUKXUtvBHdgzahGkx4%2Ba3RKxjaIT%2Bg3D%2FxJIXSkt6TsjVzh89B%2FOFZNDTwVTsAGaW%2BdW4AImJ0h%2FFlbl6ot0ozuujRHdPgcshJ1%2Fgjz1LMjKRbK9eoqdSZPwTc%2BT5V0K5kOcOtnr1BV8C%2BqSDVIJ11%2F5mOT27SOotfmi1vUJ8LrMerrrj9oNS6W0jOOAnozGzKde4bkz7tko4LkBlv3EOltEjh20Ju8jRg99%2BsB06l8Hrd3IGYPIXtAGqAMjJvnw48%2FyohMuTMMW69cQGOqUBeH%2BJNHrXBhVzGWCaSlGntZGRDa6%2FX%2B9m11pIhjNsHjgFSYiBfW6a33eA2bL1rEXYJrZvkAImoNIf%2BMYGi0IIhoAUigPQQ12YunVF17gOxSZFDQMJCNCddD9iXN6yckTihFDFo46QjhPm%2FTP38Nh1TIPRDi3s40f3ZqIyPnTeyCV6kMWvqhbNPZmP%2FEUYio9kASp19GkJ0JlKTRGiM8yYz%2BUtHdJE&X-Amz-Signature=63ffdcd922884b1de6774b2619e3392ca3bece1ed218847f0f27a804f3a9f1a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WU3LOZL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqlqlTHdb1ObImzt2C88Hm6Ou3MHNfYJ3WX5LmjbEIfQIgFZhh7WcK1QwaNII598EufzSxeXj%2BKpB6pbNl5mWY97gq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDB8ib5eIMIJDryoXKyrcAw1bLpurLN0Cisj%2BF74HFDsW6DQsyw9gFp4sQGg2E8%2FhxvsIRlBMFodMNo1Cj3D59sTw2l0waL3zO0%2B2J2wRtmB8umq1fWomPmTBDr5XKFhZPmiIfsH7U7O7pF9ALCONdslWxbM%2Bke6hOYO8HWNA1l5eEPVbstBzNWJzCuuFlldewFN1COy5kySkbFqYaiUxq2gYoG%2BsfSgABMjA%2BGU9p6h2h%2Fj%2BV6bp7QEK6DcVQcbJCfCM7TWuuVHH4jt2lbaVnaapPf6qg9IF3D2zc47gQLJ24RMqET36zUhsCcP2ug9Jfje1nGsmRN%2BFbATFrsFIEhYSpmxzqJ1ofHNp%2FC%2BRE7%2ByoyM2YTNVZY6xbzXzrKJUGSCHptyGUKXUtvBHdgzahGkx4%2Ba3RKxjaIT%2Bg3D%2FxJIXSkt6TsjVzh89B%2FOFZNDTwVTsAGaW%2BdW4AImJ0h%2FFlbl6ot0ozuujRHdPgcshJ1%2Fgjz1LMjKRbK9eoqdSZPwTc%2BT5V0K5kOcOtnr1BV8C%2BqSDVIJ11%2F5mOT27SOotfmi1vUJ8LrMerrrj9oNS6W0jOOAnozGzKde4bkz7tko4LkBlv3EOltEjh20Ju8jRg99%2BsB06l8Hrd3IGYPIXtAGqAMjJvnw48%2FyohMuTMMW69cQGOqUBeH%2BJNHrXBhVzGWCaSlGntZGRDa6%2FX%2B9m11pIhjNsHjgFSYiBfW6a33eA2bL1rEXYJrZvkAImoNIf%2BMYGi0IIhoAUigPQQ12YunVF17gOxSZFDQMJCNCddD9iXN6yckTihFDFo46QjhPm%2FTP38Nh1TIPRDi3s40f3ZqIyPnTeyCV6kMWvqhbNPZmP%2FEUYio9kASp19GkJ0JlKTRGiM8yYz%2BUtHdJE&X-Amz-Signature=bbf2403d378047e9209fd0c4d9b3f00d3c06cb46f28f5985c0718b8f1c5c23f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WU3LOZL%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T061501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqlqlTHdb1ObImzt2C88Hm6Ou3MHNfYJ3WX5LmjbEIfQIgFZhh7WcK1QwaNII598EufzSxeXj%2BKpB6pbNl5mWY97gq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDB8ib5eIMIJDryoXKyrcAw1bLpurLN0Cisj%2BF74HFDsW6DQsyw9gFp4sQGg2E8%2FhxvsIRlBMFodMNo1Cj3D59sTw2l0waL3zO0%2B2J2wRtmB8umq1fWomPmTBDr5XKFhZPmiIfsH7U7O7pF9ALCONdslWxbM%2Bke6hOYO8HWNA1l5eEPVbstBzNWJzCuuFlldewFN1COy5kySkbFqYaiUxq2gYoG%2BsfSgABMjA%2BGU9p6h2h%2Fj%2BV6bp7QEK6DcVQcbJCfCM7TWuuVHH4jt2lbaVnaapPf6qg9IF3D2zc47gQLJ24RMqET36zUhsCcP2ug9Jfje1nGsmRN%2BFbATFrsFIEhYSpmxzqJ1ofHNp%2FC%2BRE7%2ByoyM2YTNVZY6xbzXzrKJUGSCHptyGUKXUtvBHdgzahGkx4%2Ba3RKxjaIT%2Bg3D%2FxJIXSkt6TsjVzh89B%2FOFZNDTwVTsAGaW%2BdW4AImJ0h%2FFlbl6ot0ozuujRHdPgcshJ1%2Fgjz1LMjKRbK9eoqdSZPwTc%2BT5V0K5kOcOtnr1BV8C%2BqSDVIJ11%2F5mOT27SOotfmi1vUJ8LrMerrrj9oNS6W0jOOAnozGzKde4bkz7tko4LkBlv3EOltEjh20Ju8jRg99%2BsB06l8Hrd3IGYPIXtAGqAMjJvnw48%2FyohMuTMMW69cQGOqUBeH%2BJNHrXBhVzGWCaSlGntZGRDa6%2FX%2B9m11pIhjNsHjgFSYiBfW6a33eA2bL1rEXYJrZvkAImoNIf%2BMYGi0IIhoAUigPQQ12YunVF17gOxSZFDQMJCNCddD9iXN6yckTihFDFo46QjhPm%2FTP38Nh1TIPRDi3s40f3ZqIyPnTeyCV6kMWvqhbNPZmP%2FEUYio9kASp19GkJ0JlKTRGiM8yYz%2BUtHdJE&X-Amz-Signature=9f8e0dcf2e2ff5e1c88cbbb2f580d0a15daf40afd956d0920646c1ac10ce0f1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
