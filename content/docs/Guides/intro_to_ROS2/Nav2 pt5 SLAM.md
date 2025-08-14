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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT4I7KQ3%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoaijgFUgouSE%2BmEORPzqNQ%2BCzc8oZbEKIZkSTCxY%2FQgIgTpbC5QopQMVLaOq6brg1UfawO4R6iKIUlvp9hHD7Elcq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDFwoyLVBCd%2Bo%2BP%2FbsyrcA5V69kmJvHIjnlZk%2FFQV7VqwIuqI624ZyAH%2B%2BYzPWAMEhni3CdVErm9av2xA%2FLeyoIU7k1moev7O8%2Bz1jEz9%2BOoZMDC0Ub0GhK3rOXuAsfXNYBPcGdZ3qMwLY%2B61w3fraBqBgqQypfwtIxYndhtu60v2%2BiDqdyWC5Y9yFDxXVynvOwgfW7IAG2aUSrd6kWjhZR%2BlS1%2FhhPvPBDdDihVGjGLH6XpqOSt8HeVn%2Fg4nM7ccvJXuUHIRGHPUpWhXvpCpeT1xNyricKJqQ1wEfHYLYKluCP9Grh8CQhm5kQbfAQrFtR3cgqV8mjR1bkE%2BXHA7npbWiRbE%2FsArF%2BEjg5vHqMhTV4Wc0p6Kh0ly9kSr6gGloQh%2FTmusIOw4hvR3tOh1RcAweVpH7amoBXeD8svV1BX5GOaxe2rEHb4Fi664Ie7%2BcB%2Bvq193f5nE1o%2FwjtkRlz3NDongwhMOE1pNAsBDOUE833lXwiMDkp%2FRorz4QLog25ErXWifnZ6%2F5rQrcZg0HArliuI0e3dzV7OIrpqnGZ9BPz5nrCDUob6sAfbiCDQj2J379on8lBJa6H63TCaLzDvTmn5Jxs7zvc4f0sHHL%2BvT1B7lT%2FvrpZbFe69I%2BptwiBdIMS6uwTHlmwYPMKaE98QGOqUBmuxUSvYxQkVObzzbFaHesCYfLLozIjo%2FHKqU4j1ANVksKdbhHJBSK%2FpWB%2BrSEZ0KQQ4mNwcdMQHICyGV6b3M0Xek9A6jUtj%2FLBRurn8CILySPToiqDjoF6uNSqjN0lUfMK3uKPPmgF%2FbBu5XRiAtuPbMA3%2FSZUVGWyXnxfS8NcaSQfexx8ZPvOGg6nZwPSN9aj9gDlGC2iay381ik3V58bvcoJ1d&X-Amz-Signature=6d4a3fc237a3bb6e128a087a5777cff10826cd47313ca70dc2021e491116a341&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT4I7KQ3%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoaijgFUgouSE%2BmEORPzqNQ%2BCzc8oZbEKIZkSTCxY%2FQgIgTpbC5QopQMVLaOq6brg1UfawO4R6iKIUlvp9hHD7Elcq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDFwoyLVBCd%2Bo%2BP%2FbsyrcA5V69kmJvHIjnlZk%2FFQV7VqwIuqI624ZyAH%2B%2BYzPWAMEhni3CdVErm9av2xA%2FLeyoIU7k1moev7O8%2Bz1jEz9%2BOoZMDC0Ub0GhK3rOXuAsfXNYBPcGdZ3qMwLY%2B61w3fraBqBgqQypfwtIxYndhtu60v2%2BiDqdyWC5Y9yFDxXVynvOwgfW7IAG2aUSrd6kWjhZR%2BlS1%2FhhPvPBDdDihVGjGLH6XpqOSt8HeVn%2Fg4nM7ccvJXuUHIRGHPUpWhXvpCpeT1xNyricKJqQ1wEfHYLYKluCP9Grh8CQhm5kQbfAQrFtR3cgqV8mjR1bkE%2BXHA7npbWiRbE%2FsArF%2BEjg5vHqMhTV4Wc0p6Kh0ly9kSr6gGloQh%2FTmusIOw4hvR3tOh1RcAweVpH7amoBXeD8svV1BX5GOaxe2rEHb4Fi664Ie7%2BcB%2Bvq193f5nE1o%2FwjtkRlz3NDongwhMOE1pNAsBDOUE833lXwiMDkp%2FRorz4QLog25ErXWifnZ6%2F5rQrcZg0HArliuI0e3dzV7OIrpqnGZ9BPz5nrCDUob6sAfbiCDQj2J379on8lBJa6H63TCaLzDvTmn5Jxs7zvc4f0sHHL%2BvT1B7lT%2FvrpZbFe69I%2BptwiBdIMS6uwTHlmwYPMKaE98QGOqUBmuxUSvYxQkVObzzbFaHesCYfLLozIjo%2FHKqU4j1ANVksKdbhHJBSK%2FpWB%2BrSEZ0KQQ4mNwcdMQHICyGV6b3M0Xek9A6jUtj%2FLBRurn8CILySPToiqDjoF6uNSqjN0lUfMK3uKPPmgF%2FbBu5XRiAtuPbMA3%2FSZUVGWyXnxfS8NcaSQfexx8ZPvOGg6nZwPSN9aj9gDlGC2iay381ik3V58bvcoJ1d&X-Amz-Signature=b84de023cdfa33ff93b290cbb7a64fb3c15b70e182a073f75121b4892c60c3be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT4I7KQ3%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoaijgFUgouSE%2BmEORPzqNQ%2BCzc8oZbEKIZkSTCxY%2FQgIgTpbC5QopQMVLaOq6brg1UfawO4R6iKIUlvp9hHD7Elcq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDFwoyLVBCd%2Bo%2BP%2FbsyrcA5V69kmJvHIjnlZk%2FFQV7VqwIuqI624ZyAH%2B%2BYzPWAMEhni3CdVErm9av2xA%2FLeyoIU7k1moev7O8%2Bz1jEz9%2BOoZMDC0Ub0GhK3rOXuAsfXNYBPcGdZ3qMwLY%2B61w3fraBqBgqQypfwtIxYndhtu60v2%2BiDqdyWC5Y9yFDxXVynvOwgfW7IAG2aUSrd6kWjhZR%2BlS1%2FhhPvPBDdDihVGjGLH6XpqOSt8HeVn%2Fg4nM7ccvJXuUHIRGHPUpWhXvpCpeT1xNyricKJqQ1wEfHYLYKluCP9Grh8CQhm5kQbfAQrFtR3cgqV8mjR1bkE%2BXHA7npbWiRbE%2FsArF%2BEjg5vHqMhTV4Wc0p6Kh0ly9kSr6gGloQh%2FTmusIOw4hvR3tOh1RcAweVpH7amoBXeD8svV1BX5GOaxe2rEHb4Fi664Ie7%2BcB%2Bvq193f5nE1o%2FwjtkRlz3NDongwhMOE1pNAsBDOUE833lXwiMDkp%2FRorz4QLog25ErXWifnZ6%2F5rQrcZg0HArliuI0e3dzV7OIrpqnGZ9BPz5nrCDUob6sAfbiCDQj2J379on8lBJa6H63TCaLzDvTmn5Jxs7zvc4f0sHHL%2BvT1B7lT%2FvrpZbFe69I%2BptwiBdIMS6uwTHlmwYPMKaE98QGOqUBmuxUSvYxQkVObzzbFaHesCYfLLozIjo%2FHKqU4j1ANVksKdbhHJBSK%2FpWB%2BrSEZ0KQQ4mNwcdMQHICyGV6b3M0Xek9A6jUtj%2FLBRurn8CILySPToiqDjoF6uNSqjN0lUfMK3uKPPmgF%2FbBu5XRiAtuPbMA3%2FSZUVGWyXnxfS8NcaSQfexx8ZPvOGg6nZwPSN9aj9gDlGC2iay381ik3V58bvcoJ1d&X-Amz-Signature=6d066aff26c322dd314a1749e87adeec4c6e8f1f1b0ca420638af277b0d0d76d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT4I7KQ3%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoaijgFUgouSE%2BmEORPzqNQ%2BCzc8oZbEKIZkSTCxY%2FQgIgTpbC5QopQMVLaOq6brg1UfawO4R6iKIUlvp9hHD7Elcq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDFwoyLVBCd%2Bo%2BP%2FbsyrcA5V69kmJvHIjnlZk%2FFQV7VqwIuqI624ZyAH%2B%2BYzPWAMEhni3CdVErm9av2xA%2FLeyoIU7k1moev7O8%2Bz1jEz9%2BOoZMDC0Ub0GhK3rOXuAsfXNYBPcGdZ3qMwLY%2B61w3fraBqBgqQypfwtIxYndhtu60v2%2BiDqdyWC5Y9yFDxXVynvOwgfW7IAG2aUSrd6kWjhZR%2BlS1%2FhhPvPBDdDihVGjGLH6XpqOSt8HeVn%2Fg4nM7ccvJXuUHIRGHPUpWhXvpCpeT1xNyricKJqQ1wEfHYLYKluCP9Grh8CQhm5kQbfAQrFtR3cgqV8mjR1bkE%2BXHA7npbWiRbE%2FsArF%2BEjg5vHqMhTV4Wc0p6Kh0ly9kSr6gGloQh%2FTmusIOw4hvR3tOh1RcAweVpH7amoBXeD8svV1BX5GOaxe2rEHb4Fi664Ie7%2BcB%2Bvq193f5nE1o%2FwjtkRlz3NDongwhMOE1pNAsBDOUE833lXwiMDkp%2FRorz4QLog25ErXWifnZ6%2F5rQrcZg0HArliuI0e3dzV7OIrpqnGZ9BPz5nrCDUob6sAfbiCDQj2J379on8lBJa6H63TCaLzDvTmn5Jxs7zvc4f0sHHL%2BvT1B7lT%2FvrpZbFe69I%2BptwiBdIMS6uwTHlmwYPMKaE98QGOqUBmuxUSvYxQkVObzzbFaHesCYfLLozIjo%2FHKqU4j1ANVksKdbhHJBSK%2FpWB%2BrSEZ0KQQ4mNwcdMQHICyGV6b3M0Xek9A6jUtj%2FLBRurn8CILySPToiqDjoF6uNSqjN0lUfMK3uKPPmgF%2FbBu5XRiAtuPbMA3%2FSZUVGWyXnxfS8NcaSQfexx8ZPvOGg6nZwPSN9aj9gDlGC2iay381ik3V58bvcoJ1d&X-Amz-Signature=e3b61b598d9858c0e09b66d7366d613f35b58376b329c4c0f6bc5b2fda3a565b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT4I7KQ3%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoaijgFUgouSE%2BmEORPzqNQ%2BCzc8oZbEKIZkSTCxY%2FQgIgTpbC5QopQMVLaOq6brg1UfawO4R6iKIUlvp9hHD7Elcq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDFwoyLVBCd%2Bo%2BP%2FbsyrcA5V69kmJvHIjnlZk%2FFQV7VqwIuqI624ZyAH%2B%2BYzPWAMEhni3CdVErm9av2xA%2FLeyoIU7k1moev7O8%2Bz1jEz9%2BOoZMDC0Ub0GhK3rOXuAsfXNYBPcGdZ3qMwLY%2B61w3fraBqBgqQypfwtIxYndhtu60v2%2BiDqdyWC5Y9yFDxXVynvOwgfW7IAG2aUSrd6kWjhZR%2BlS1%2FhhPvPBDdDihVGjGLH6XpqOSt8HeVn%2Fg4nM7ccvJXuUHIRGHPUpWhXvpCpeT1xNyricKJqQ1wEfHYLYKluCP9Grh8CQhm5kQbfAQrFtR3cgqV8mjR1bkE%2BXHA7npbWiRbE%2FsArF%2BEjg5vHqMhTV4Wc0p6Kh0ly9kSr6gGloQh%2FTmusIOw4hvR3tOh1RcAweVpH7amoBXeD8svV1BX5GOaxe2rEHb4Fi664Ie7%2BcB%2Bvq193f5nE1o%2FwjtkRlz3NDongwhMOE1pNAsBDOUE833lXwiMDkp%2FRorz4QLog25ErXWifnZ6%2F5rQrcZg0HArliuI0e3dzV7OIrpqnGZ9BPz5nrCDUob6sAfbiCDQj2J379on8lBJa6H63TCaLzDvTmn5Jxs7zvc4f0sHHL%2BvT1B7lT%2FvrpZbFe69I%2BptwiBdIMS6uwTHlmwYPMKaE98QGOqUBmuxUSvYxQkVObzzbFaHesCYfLLozIjo%2FHKqU4j1ANVksKdbhHJBSK%2FpWB%2BrSEZ0KQQ4mNwcdMQHICyGV6b3M0Xek9A6jUtj%2FLBRurn8CILySPToiqDjoF6uNSqjN0lUfMK3uKPPmgF%2FbBu5XRiAtuPbMA3%2FSZUVGWyXnxfS8NcaSQfexx8ZPvOGg6nZwPSN9aj9gDlGC2iay381ik3V58bvcoJ1d&X-Amz-Signature=ae1673d3e5a4034c245ebae0da572417b1b60c9101373d59882df64813e1fae7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT4I7KQ3%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoaijgFUgouSE%2BmEORPzqNQ%2BCzc8oZbEKIZkSTCxY%2FQgIgTpbC5QopQMVLaOq6brg1UfawO4R6iKIUlvp9hHD7Elcq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDFwoyLVBCd%2Bo%2BP%2FbsyrcA5V69kmJvHIjnlZk%2FFQV7VqwIuqI624ZyAH%2B%2BYzPWAMEhni3CdVErm9av2xA%2FLeyoIU7k1moev7O8%2Bz1jEz9%2BOoZMDC0Ub0GhK3rOXuAsfXNYBPcGdZ3qMwLY%2B61w3fraBqBgqQypfwtIxYndhtu60v2%2BiDqdyWC5Y9yFDxXVynvOwgfW7IAG2aUSrd6kWjhZR%2BlS1%2FhhPvPBDdDihVGjGLH6XpqOSt8HeVn%2Fg4nM7ccvJXuUHIRGHPUpWhXvpCpeT1xNyricKJqQ1wEfHYLYKluCP9Grh8CQhm5kQbfAQrFtR3cgqV8mjR1bkE%2BXHA7npbWiRbE%2FsArF%2BEjg5vHqMhTV4Wc0p6Kh0ly9kSr6gGloQh%2FTmusIOw4hvR3tOh1RcAweVpH7amoBXeD8svV1BX5GOaxe2rEHb4Fi664Ie7%2BcB%2Bvq193f5nE1o%2FwjtkRlz3NDongwhMOE1pNAsBDOUE833lXwiMDkp%2FRorz4QLog25ErXWifnZ6%2F5rQrcZg0HArliuI0e3dzV7OIrpqnGZ9BPz5nrCDUob6sAfbiCDQj2J379on8lBJa6H63TCaLzDvTmn5Jxs7zvc4f0sHHL%2BvT1B7lT%2FvrpZbFe69I%2BptwiBdIMS6uwTHlmwYPMKaE98QGOqUBmuxUSvYxQkVObzzbFaHesCYfLLozIjo%2FHKqU4j1ANVksKdbhHJBSK%2FpWB%2BrSEZ0KQQ4mNwcdMQHICyGV6b3M0Xek9A6jUtj%2FLBRurn8CILySPToiqDjoF6uNSqjN0lUfMK3uKPPmgF%2FbBu5XRiAtuPbMA3%2FSZUVGWyXnxfS8NcaSQfexx8ZPvOGg6nZwPSN9aj9gDlGC2iay381ik3V58bvcoJ1d&X-Amz-Signature=eccf340ef60ec1bc2cac4abbe943a61c570ea991f45234d6481ca021ddcc5896&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT4I7KQ3%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoaijgFUgouSE%2BmEORPzqNQ%2BCzc8oZbEKIZkSTCxY%2FQgIgTpbC5QopQMVLaOq6brg1UfawO4R6iKIUlvp9hHD7Elcq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDFwoyLVBCd%2Bo%2BP%2FbsyrcA5V69kmJvHIjnlZk%2FFQV7VqwIuqI624ZyAH%2B%2BYzPWAMEhni3CdVErm9av2xA%2FLeyoIU7k1moev7O8%2Bz1jEz9%2BOoZMDC0Ub0GhK3rOXuAsfXNYBPcGdZ3qMwLY%2B61w3fraBqBgqQypfwtIxYndhtu60v2%2BiDqdyWC5Y9yFDxXVynvOwgfW7IAG2aUSrd6kWjhZR%2BlS1%2FhhPvPBDdDihVGjGLH6XpqOSt8HeVn%2Fg4nM7ccvJXuUHIRGHPUpWhXvpCpeT1xNyricKJqQ1wEfHYLYKluCP9Grh8CQhm5kQbfAQrFtR3cgqV8mjR1bkE%2BXHA7npbWiRbE%2FsArF%2BEjg5vHqMhTV4Wc0p6Kh0ly9kSr6gGloQh%2FTmusIOw4hvR3tOh1RcAweVpH7amoBXeD8svV1BX5GOaxe2rEHb4Fi664Ie7%2BcB%2Bvq193f5nE1o%2FwjtkRlz3NDongwhMOE1pNAsBDOUE833lXwiMDkp%2FRorz4QLog25ErXWifnZ6%2F5rQrcZg0HArliuI0e3dzV7OIrpqnGZ9BPz5nrCDUob6sAfbiCDQj2J379on8lBJa6H63TCaLzDvTmn5Jxs7zvc4f0sHHL%2BvT1B7lT%2FvrpZbFe69I%2BptwiBdIMS6uwTHlmwYPMKaE98QGOqUBmuxUSvYxQkVObzzbFaHesCYfLLozIjo%2FHKqU4j1ANVksKdbhHJBSK%2FpWB%2BrSEZ0KQQ4mNwcdMQHICyGV6b3M0Xek9A6jUtj%2FLBRurn8CILySPToiqDjoF6uNSqjN0lUfMK3uKPPmgF%2FbBu5XRiAtuPbMA3%2FSZUVGWyXnxfS8NcaSQfexx8ZPvOGg6nZwPSN9aj9gDlGC2iay381ik3V58bvcoJ1d&X-Amz-Signature=170e81e72c6387a2f70e9ad717976cefb880e44bd6dfb97faadcf718fdbd7588&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT4I7KQ3%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoaijgFUgouSE%2BmEORPzqNQ%2BCzc8oZbEKIZkSTCxY%2FQgIgTpbC5QopQMVLaOq6brg1UfawO4R6iKIUlvp9hHD7Elcq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDFwoyLVBCd%2Bo%2BP%2FbsyrcA5V69kmJvHIjnlZk%2FFQV7VqwIuqI624ZyAH%2B%2BYzPWAMEhni3CdVErm9av2xA%2FLeyoIU7k1moev7O8%2Bz1jEz9%2BOoZMDC0Ub0GhK3rOXuAsfXNYBPcGdZ3qMwLY%2B61w3fraBqBgqQypfwtIxYndhtu60v2%2BiDqdyWC5Y9yFDxXVynvOwgfW7IAG2aUSrd6kWjhZR%2BlS1%2FhhPvPBDdDihVGjGLH6XpqOSt8HeVn%2Fg4nM7ccvJXuUHIRGHPUpWhXvpCpeT1xNyricKJqQ1wEfHYLYKluCP9Grh8CQhm5kQbfAQrFtR3cgqV8mjR1bkE%2BXHA7npbWiRbE%2FsArF%2BEjg5vHqMhTV4Wc0p6Kh0ly9kSr6gGloQh%2FTmusIOw4hvR3tOh1RcAweVpH7amoBXeD8svV1BX5GOaxe2rEHb4Fi664Ie7%2BcB%2Bvq193f5nE1o%2FwjtkRlz3NDongwhMOE1pNAsBDOUE833lXwiMDkp%2FRorz4QLog25ErXWifnZ6%2F5rQrcZg0HArliuI0e3dzV7OIrpqnGZ9BPz5nrCDUob6sAfbiCDQj2J379on8lBJa6H63TCaLzDvTmn5Jxs7zvc4f0sHHL%2BvT1B7lT%2FvrpZbFe69I%2BptwiBdIMS6uwTHlmwYPMKaE98QGOqUBmuxUSvYxQkVObzzbFaHesCYfLLozIjo%2FHKqU4j1ANVksKdbhHJBSK%2FpWB%2BrSEZ0KQQ4mNwcdMQHICyGV6b3M0Xek9A6jUtj%2FLBRurn8CILySPToiqDjoF6uNSqjN0lUfMK3uKPPmgF%2FbBu5XRiAtuPbMA3%2FSZUVGWyXnxfS8NcaSQfexx8ZPvOGg6nZwPSN9aj9gDlGC2iay381ik3V58bvcoJ1d&X-Amz-Signature=f002f2f76c4c7d3759127027caff5bf61a41502ff90e07841747b34d63d63aa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT4I7KQ3%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoaijgFUgouSE%2BmEORPzqNQ%2BCzc8oZbEKIZkSTCxY%2FQgIgTpbC5QopQMVLaOq6brg1UfawO4R6iKIUlvp9hHD7Elcq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDFwoyLVBCd%2Bo%2BP%2FbsyrcA5V69kmJvHIjnlZk%2FFQV7VqwIuqI624ZyAH%2B%2BYzPWAMEhni3CdVErm9av2xA%2FLeyoIU7k1moev7O8%2Bz1jEz9%2BOoZMDC0Ub0GhK3rOXuAsfXNYBPcGdZ3qMwLY%2B61w3fraBqBgqQypfwtIxYndhtu60v2%2BiDqdyWC5Y9yFDxXVynvOwgfW7IAG2aUSrd6kWjhZR%2BlS1%2FhhPvPBDdDihVGjGLH6XpqOSt8HeVn%2Fg4nM7ccvJXuUHIRGHPUpWhXvpCpeT1xNyricKJqQ1wEfHYLYKluCP9Grh8CQhm5kQbfAQrFtR3cgqV8mjR1bkE%2BXHA7npbWiRbE%2FsArF%2BEjg5vHqMhTV4Wc0p6Kh0ly9kSr6gGloQh%2FTmusIOw4hvR3tOh1RcAweVpH7amoBXeD8svV1BX5GOaxe2rEHb4Fi664Ie7%2BcB%2Bvq193f5nE1o%2FwjtkRlz3NDongwhMOE1pNAsBDOUE833lXwiMDkp%2FRorz4QLog25ErXWifnZ6%2F5rQrcZg0HArliuI0e3dzV7OIrpqnGZ9BPz5nrCDUob6sAfbiCDQj2J379on8lBJa6H63TCaLzDvTmn5Jxs7zvc4f0sHHL%2BvT1B7lT%2FvrpZbFe69I%2BptwiBdIMS6uwTHlmwYPMKaE98QGOqUBmuxUSvYxQkVObzzbFaHesCYfLLozIjo%2FHKqU4j1ANVksKdbhHJBSK%2FpWB%2BrSEZ0KQQ4mNwcdMQHICyGV6b3M0Xek9A6jUtj%2FLBRurn8CILySPToiqDjoF6uNSqjN0lUfMK3uKPPmgF%2FbBu5XRiAtuPbMA3%2FSZUVGWyXnxfS8NcaSQfexx8ZPvOGg6nZwPSN9aj9gDlGC2iay381ik3V58bvcoJ1d&X-Amz-Signature=53ded2583ef73ae6deb7b8d0ef886836c4d21402c2a6775fd9f53c8726a09f2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT4I7KQ3%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoaijgFUgouSE%2BmEORPzqNQ%2BCzc8oZbEKIZkSTCxY%2FQgIgTpbC5QopQMVLaOq6brg1UfawO4R6iKIUlvp9hHD7Elcq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDFwoyLVBCd%2Bo%2BP%2FbsyrcA5V69kmJvHIjnlZk%2FFQV7VqwIuqI624ZyAH%2B%2BYzPWAMEhni3CdVErm9av2xA%2FLeyoIU7k1moev7O8%2Bz1jEz9%2BOoZMDC0Ub0GhK3rOXuAsfXNYBPcGdZ3qMwLY%2B61w3fraBqBgqQypfwtIxYndhtu60v2%2BiDqdyWC5Y9yFDxXVynvOwgfW7IAG2aUSrd6kWjhZR%2BlS1%2FhhPvPBDdDihVGjGLH6XpqOSt8HeVn%2Fg4nM7ccvJXuUHIRGHPUpWhXvpCpeT1xNyricKJqQ1wEfHYLYKluCP9Grh8CQhm5kQbfAQrFtR3cgqV8mjR1bkE%2BXHA7npbWiRbE%2FsArF%2BEjg5vHqMhTV4Wc0p6Kh0ly9kSr6gGloQh%2FTmusIOw4hvR3tOh1RcAweVpH7amoBXeD8svV1BX5GOaxe2rEHb4Fi664Ie7%2BcB%2Bvq193f5nE1o%2FwjtkRlz3NDongwhMOE1pNAsBDOUE833lXwiMDkp%2FRorz4QLog25ErXWifnZ6%2F5rQrcZg0HArliuI0e3dzV7OIrpqnGZ9BPz5nrCDUob6sAfbiCDQj2J379on8lBJa6H63TCaLzDvTmn5Jxs7zvc4f0sHHL%2BvT1B7lT%2FvrpZbFe69I%2BptwiBdIMS6uwTHlmwYPMKaE98QGOqUBmuxUSvYxQkVObzzbFaHesCYfLLozIjo%2FHKqU4j1ANVksKdbhHJBSK%2FpWB%2BrSEZ0KQQ4mNwcdMQHICyGV6b3M0Xek9A6jUtj%2FLBRurn8CILySPToiqDjoF6uNSqjN0lUfMK3uKPPmgF%2FbBu5XRiAtuPbMA3%2FSZUVGWyXnxfS8NcaSQfexx8ZPvOGg6nZwPSN9aj9gDlGC2iay381ik3V58bvcoJ1d&X-Amz-Signature=067a14651dcb8cb13fc329293c82700a897a5cea3926d301985d036a630d1f75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT4I7KQ3%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoaijgFUgouSE%2BmEORPzqNQ%2BCzc8oZbEKIZkSTCxY%2FQgIgTpbC5QopQMVLaOq6brg1UfawO4R6iKIUlvp9hHD7Elcq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDFwoyLVBCd%2Bo%2BP%2FbsyrcA5V69kmJvHIjnlZk%2FFQV7VqwIuqI624ZyAH%2B%2BYzPWAMEhni3CdVErm9av2xA%2FLeyoIU7k1moev7O8%2Bz1jEz9%2BOoZMDC0Ub0GhK3rOXuAsfXNYBPcGdZ3qMwLY%2B61w3fraBqBgqQypfwtIxYndhtu60v2%2BiDqdyWC5Y9yFDxXVynvOwgfW7IAG2aUSrd6kWjhZR%2BlS1%2FhhPvPBDdDihVGjGLH6XpqOSt8HeVn%2Fg4nM7ccvJXuUHIRGHPUpWhXvpCpeT1xNyricKJqQ1wEfHYLYKluCP9Grh8CQhm5kQbfAQrFtR3cgqV8mjR1bkE%2BXHA7npbWiRbE%2FsArF%2BEjg5vHqMhTV4Wc0p6Kh0ly9kSr6gGloQh%2FTmusIOw4hvR3tOh1RcAweVpH7amoBXeD8svV1BX5GOaxe2rEHb4Fi664Ie7%2BcB%2Bvq193f5nE1o%2FwjtkRlz3NDongwhMOE1pNAsBDOUE833lXwiMDkp%2FRorz4QLog25ErXWifnZ6%2F5rQrcZg0HArliuI0e3dzV7OIrpqnGZ9BPz5nrCDUob6sAfbiCDQj2J379on8lBJa6H63TCaLzDvTmn5Jxs7zvc4f0sHHL%2BvT1B7lT%2FvrpZbFe69I%2BptwiBdIMS6uwTHlmwYPMKaE98QGOqUBmuxUSvYxQkVObzzbFaHesCYfLLozIjo%2FHKqU4j1ANVksKdbhHJBSK%2FpWB%2BrSEZ0KQQ4mNwcdMQHICyGV6b3M0Xek9A6jUtj%2FLBRurn8CILySPToiqDjoF6uNSqjN0lUfMK3uKPPmgF%2FbBu5XRiAtuPbMA3%2FSZUVGWyXnxfS8NcaSQfexx8ZPvOGg6nZwPSN9aj9gDlGC2iay381ik3V58bvcoJ1d&X-Amz-Signature=23db293e926d659c4b6698bb16fe6cac5dd4ffc9ddf4cd7575c24773d78a6be8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT4I7KQ3%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoaijgFUgouSE%2BmEORPzqNQ%2BCzc8oZbEKIZkSTCxY%2FQgIgTpbC5QopQMVLaOq6brg1UfawO4R6iKIUlvp9hHD7Elcq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDFwoyLVBCd%2Bo%2BP%2FbsyrcA5V69kmJvHIjnlZk%2FFQV7VqwIuqI624ZyAH%2B%2BYzPWAMEhni3CdVErm9av2xA%2FLeyoIU7k1moev7O8%2Bz1jEz9%2BOoZMDC0Ub0GhK3rOXuAsfXNYBPcGdZ3qMwLY%2B61w3fraBqBgqQypfwtIxYndhtu60v2%2BiDqdyWC5Y9yFDxXVynvOwgfW7IAG2aUSrd6kWjhZR%2BlS1%2FhhPvPBDdDihVGjGLH6XpqOSt8HeVn%2Fg4nM7ccvJXuUHIRGHPUpWhXvpCpeT1xNyricKJqQ1wEfHYLYKluCP9Grh8CQhm5kQbfAQrFtR3cgqV8mjR1bkE%2BXHA7npbWiRbE%2FsArF%2BEjg5vHqMhTV4Wc0p6Kh0ly9kSr6gGloQh%2FTmusIOw4hvR3tOh1RcAweVpH7amoBXeD8svV1BX5GOaxe2rEHb4Fi664Ie7%2BcB%2Bvq193f5nE1o%2FwjtkRlz3NDongwhMOE1pNAsBDOUE833lXwiMDkp%2FRorz4QLog25ErXWifnZ6%2F5rQrcZg0HArliuI0e3dzV7OIrpqnGZ9BPz5nrCDUob6sAfbiCDQj2J379on8lBJa6H63TCaLzDvTmn5Jxs7zvc4f0sHHL%2BvT1B7lT%2FvrpZbFe69I%2BptwiBdIMS6uwTHlmwYPMKaE98QGOqUBmuxUSvYxQkVObzzbFaHesCYfLLozIjo%2FHKqU4j1ANVksKdbhHJBSK%2FpWB%2BrSEZ0KQQ4mNwcdMQHICyGV6b3M0Xek9A6jUtj%2FLBRurn8CILySPToiqDjoF6uNSqjN0lUfMK3uKPPmgF%2FbBu5XRiAtuPbMA3%2FSZUVGWyXnxfS8NcaSQfexx8ZPvOGg6nZwPSN9aj9gDlGC2iay381ik3V58bvcoJ1d&X-Amz-Signature=0611bfe88e1fea3d5d9c4e20b15287541fff9b6aeae104ecbb3bc61b99722d82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT4I7KQ3%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoaijgFUgouSE%2BmEORPzqNQ%2BCzc8oZbEKIZkSTCxY%2FQgIgTpbC5QopQMVLaOq6brg1UfawO4R6iKIUlvp9hHD7Elcq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDFwoyLVBCd%2Bo%2BP%2FbsyrcA5V69kmJvHIjnlZk%2FFQV7VqwIuqI624ZyAH%2B%2BYzPWAMEhni3CdVErm9av2xA%2FLeyoIU7k1moev7O8%2Bz1jEz9%2BOoZMDC0Ub0GhK3rOXuAsfXNYBPcGdZ3qMwLY%2B61w3fraBqBgqQypfwtIxYndhtu60v2%2BiDqdyWC5Y9yFDxXVynvOwgfW7IAG2aUSrd6kWjhZR%2BlS1%2FhhPvPBDdDihVGjGLH6XpqOSt8HeVn%2Fg4nM7ccvJXuUHIRGHPUpWhXvpCpeT1xNyricKJqQ1wEfHYLYKluCP9Grh8CQhm5kQbfAQrFtR3cgqV8mjR1bkE%2BXHA7npbWiRbE%2FsArF%2BEjg5vHqMhTV4Wc0p6Kh0ly9kSr6gGloQh%2FTmusIOw4hvR3tOh1RcAweVpH7amoBXeD8svV1BX5GOaxe2rEHb4Fi664Ie7%2BcB%2Bvq193f5nE1o%2FwjtkRlz3NDongwhMOE1pNAsBDOUE833lXwiMDkp%2FRorz4QLog25ErXWifnZ6%2F5rQrcZg0HArliuI0e3dzV7OIrpqnGZ9BPz5nrCDUob6sAfbiCDQj2J379on8lBJa6H63TCaLzDvTmn5Jxs7zvc4f0sHHL%2BvT1B7lT%2FvrpZbFe69I%2BptwiBdIMS6uwTHlmwYPMKaE98QGOqUBmuxUSvYxQkVObzzbFaHesCYfLLozIjo%2FHKqU4j1ANVksKdbhHJBSK%2FpWB%2BrSEZ0KQQ4mNwcdMQHICyGV6b3M0Xek9A6jUtj%2FLBRurn8CILySPToiqDjoF6uNSqjN0lUfMK3uKPPmgF%2FbBu5XRiAtuPbMA3%2FSZUVGWyXnxfS8NcaSQfexx8ZPvOGg6nZwPSN9aj9gDlGC2iay381ik3V58bvcoJ1d&X-Amz-Signature=bf05a9080298481423feb6a0850bc38acf35d24ed900c38f55f638a0f05441de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RT4I7KQ3%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T110901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoaijgFUgouSE%2BmEORPzqNQ%2BCzc8oZbEKIZkSTCxY%2FQgIgTpbC5QopQMVLaOq6brg1UfawO4R6iKIUlvp9hHD7Elcq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDFwoyLVBCd%2Bo%2BP%2FbsyrcA5V69kmJvHIjnlZk%2FFQV7VqwIuqI624ZyAH%2B%2BYzPWAMEhni3CdVErm9av2xA%2FLeyoIU7k1moev7O8%2Bz1jEz9%2BOoZMDC0Ub0GhK3rOXuAsfXNYBPcGdZ3qMwLY%2B61w3fraBqBgqQypfwtIxYndhtu60v2%2BiDqdyWC5Y9yFDxXVynvOwgfW7IAG2aUSrd6kWjhZR%2BlS1%2FhhPvPBDdDihVGjGLH6XpqOSt8HeVn%2Fg4nM7ccvJXuUHIRGHPUpWhXvpCpeT1xNyricKJqQ1wEfHYLYKluCP9Grh8CQhm5kQbfAQrFtR3cgqV8mjR1bkE%2BXHA7npbWiRbE%2FsArF%2BEjg5vHqMhTV4Wc0p6Kh0ly9kSr6gGloQh%2FTmusIOw4hvR3tOh1RcAweVpH7amoBXeD8svV1BX5GOaxe2rEHb4Fi664Ie7%2BcB%2Bvq193f5nE1o%2FwjtkRlz3NDongwhMOE1pNAsBDOUE833lXwiMDkp%2FRorz4QLog25ErXWifnZ6%2F5rQrcZg0HArliuI0e3dzV7OIrpqnGZ9BPz5nrCDUob6sAfbiCDQj2J379on8lBJa6H63TCaLzDvTmn5Jxs7zvc4f0sHHL%2BvT1B7lT%2FvrpZbFe69I%2BptwiBdIMS6uwTHlmwYPMKaE98QGOqUBmuxUSvYxQkVObzzbFaHesCYfLLozIjo%2FHKqU4j1ANVksKdbhHJBSK%2FpWB%2BrSEZ0KQQ4mNwcdMQHICyGV6b3M0Xek9A6jUtj%2FLBRurn8CILySPToiqDjoF6uNSqjN0lUfMK3uKPPmgF%2FbBu5XRiAtuPbMA3%2FSZUVGWyXnxfS8NcaSQfexx8ZPvOGg6nZwPSN9aj9gDlGC2iay381ik3V58bvcoJ1d&X-Amz-Signature=c2be01dffc026301b8dfe742651bda43cc790dbf2fae9c1fad7a996ac090d6ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
