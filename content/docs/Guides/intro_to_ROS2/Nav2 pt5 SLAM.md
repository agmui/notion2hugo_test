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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677MTY3BD%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDqpcGgnFPF5MAM2lAxXnjlY77mV8nWhHM8e6WdyD67yQIhAOx%2BZbVy8NFzsOn%2F4vF%2BwDUGJnzaE%2F%2FJIF14nubng0HZKv8DCAkQABoMNjM3NDIzMTgzODA1IgytSX1lckAHkJ6BBQIq3AMuGqEDos05xGTKB5vaOEHXi8hpHbJxgMM1b9j5Y77s6CuoGY6vGp8VfMpb5e%2FQEnmkTu763ZKHwBlMljY4kMXgB%2BFaH0DReNakjhl3TZDCHA9xpph0qoP9mJ1rB1mqGHlS31eFW4cuoTcEX%2FDkw1Zxfct9J3%2FIs0O8NP%2Bz7sPn00ancwGvDrnWd3MhjlsE1593%2BkJgCF%2Budg9Ly2J0Bs0QrmxMLQ3WO5lC3T3ryS53lhGD8ygFojGGl83NtxIcrHek2lFC%2Fd0O6kQUbu%2BNjJcjLUNIcJxVmwrDY%2BMfIL%2BLxRXJTgVqMXy9eKVTwyijYo77QwzDk8Nast9OHjTAFiBXKtfa9rBwqLWqZD3AT9zTP2GNQZfZAZ3JkcrigD%2Boez5Z9LkpPPaQdtcj5z4%2B%2B7BEddRzJHqX0YUtwgLSv10e2ZKvJ%2FXDNNtppPih2OX%2BgjFZiWthoCnzj8FcvBklq%2BnOReexIl8YApUHdXSKJHFCzm%2BVV2WCi8FIkSf1%2F49fd4vgUlx2arAmJ2bQ2Po9FMuZzuutETec7Qkp5QpifBrn%2FvOicTfYsa%2BTbOYKAvY%2BLFcLgTsAPtOzS2UYuZvCpdG884MED9fPWFem1veLv5Nm4uvqA7o8AM%2FbzCBU%2BTDg3rjJBjqkAbbqjI5CENKuS5Jm8arhsclyzT9%2B27%2B8gBjAzCXjE7J8q3FtEOgv1TyAEJc1gHu47yjwFObHCcLEhAX%2BLVjIkEk%2F1tHFk4jP0bRetfrwD%2FncExJNGVYK0EOIwiOyYAXod5ZiIQyG3BMCgrEZPZI1SgocH%2FNymyDEa4ifyU6csOvecxIHR5LSZu5r7iceN%2B318UZPvxnHELwRXyGhfGSO8aXpIYOG&X-Amz-Signature=710d21a1b930474ba0d8f5269258d865336a0128a0c233743230ad0c06bb2176&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677MTY3BD%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDqpcGgnFPF5MAM2lAxXnjlY77mV8nWhHM8e6WdyD67yQIhAOx%2BZbVy8NFzsOn%2F4vF%2BwDUGJnzaE%2F%2FJIF14nubng0HZKv8DCAkQABoMNjM3NDIzMTgzODA1IgytSX1lckAHkJ6BBQIq3AMuGqEDos05xGTKB5vaOEHXi8hpHbJxgMM1b9j5Y77s6CuoGY6vGp8VfMpb5e%2FQEnmkTu763ZKHwBlMljY4kMXgB%2BFaH0DReNakjhl3TZDCHA9xpph0qoP9mJ1rB1mqGHlS31eFW4cuoTcEX%2FDkw1Zxfct9J3%2FIs0O8NP%2Bz7sPn00ancwGvDrnWd3MhjlsE1593%2BkJgCF%2Budg9Ly2J0Bs0QrmxMLQ3WO5lC3T3ryS53lhGD8ygFojGGl83NtxIcrHek2lFC%2Fd0O6kQUbu%2BNjJcjLUNIcJxVmwrDY%2BMfIL%2BLxRXJTgVqMXy9eKVTwyijYo77QwzDk8Nast9OHjTAFiBXKtfa9rBwqLWqZD3AT9zTP2GNQZfZAZ3JkcrigD%2Boez5Z9LkpPPaQdtcj5z4%2B%2B7BEddRzJHqX0YUtwgLSv10e2ZKvJ%2FXDNNtppPih2OX%2BgjFZiWthoCnzj8FcvBklq%2BnOReexIl8YApUHdXSKJHFCzm%2BVV2WCi8FIkSf1%2F49fd4vgUlx2arAmJ2bQ2Po9FMuZzuutETec7Qkp5QpifBrn%2FvOicTfYsa%2BTbOYKAvY%2BLFcLgTsAPtOzS2UYuZvCpdG884MED9fPWFem1veLv5Nm4uvqA7o8AM%2FbzCBU%2BTDg3rjJBjqkAbbqjI5CENKuS5Jm8arhsclyzT9%2B27%2B8gBjAzCXjE7J8q3FtEOgv1TyAEJc1gHu47yjwFObHCcLEhAX%2BLVjIkEk%2F1tHFk4jP0bRetfrwD%2FncExJNGVYK0EOIwiOyYAXod5ZiIQyG3BMCgrEZPZI1SgocH%2FNymyDEa4ifyU6csOvecxIHR5LSZu5r7iceN%2B318UZPvxnHELwRXyGhfGSO8aXpIYOG&X-Amz-Signature=9a06d8071bab0e1959158af1ad76c009379ca42a305af56e48fb1c573ec80271&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677MTY3BD%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDqpcGgnFPF5MAM2lAxXnjlY77mV8nWhHM8e6WdyD67yQIhAOx%2BZbVy8NFzsOn%2F4vF%2BwDUGJnzaE%2F%2FJIF14nubng0HZKv8DCAkQABoMNjM3NDIzMTgzODA1IgytSX1lckAHkJ6BBQIq3AMuGqEDos05xGTKB5vaOEHXi8hpHbJxgMM1b9j5Y77s6CuoGY6vGp8VfMpb5e%2FQEnmkTu763ZKHwBlMljY4kMXgB%2BFaH0DReNakjhl3TZDCHA9xpph0qoP9mJ1rB1mqGHlS31eFW4cuoTcEX%2FDkw1Zxfct9J3%2FIs0O8NP%2Bz7sPn00ancwGvDrnWd3MhjlsE1593%2BkJgCF%2Budg9Ly2J0Bs0QrmxMLQ3WO5lC3T3ryS53lhGD8ygFojGGl83NtxIcrHek2lFC%2Fd0O6kQUbu%2BNjJcjLUNIcJxVmwrDY%2BMfIL%2BLxRXJTgVqMXy9eKVTwyijYo77QwzDk8Nast9OHjTAFiBXKtfa9rBwqLWqZD3AT9zTP2GNQZfZAZ3JkcrigD%2Boez5Z9LkpPPaQdtcj5z4%2B%2B7BEddRzJHqX0YUtwgLSv10e2ZKvJ%2FXDNNtppPih2OX%2BgjFZiWthoCnzj8FcvBklq%2BnOReexIl8YApUHdXSKJHFCzm%2BVV2WCi8FIkSf1%2F49fd4vgUlx2arAmJ2bQ2Po9FMuZzuutETec7Qkp5QpifBrn%2FvOicTfYsa%2BTbOYKAvY%2BLFcLgTsAPtOzS2UYuZvCpdG884MED9fPWFem1veLv5Nm4uvqA7o8AM%2FbzCBU%2BTDg3rjJBjqkAbbqjI5CENKuS5Jm8arhsclyzT9%2B27%2B8gBjAzCXjE7J8q3FtEOgv1TyAEJc1gHu47yjwFObHCcLEhAX%2BLVjIkEk%2F1tHFk4jP0bRetfrwD%2FncExJNGVYK0EOIwiOyYAXod5ZiIQyG3BMCgrEZPZI1SgocH%2FNymyDEa4ifyU6csOvecxIHR5LSZu5r7iceN%2B318UZPvxnHELwRXyGhfGSO8aXpIYOG&X-Amz-Signature=984b407d53e146231a463a76610cbe0ff604b440b355e6a8e5575b25250cdd70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677MTY3BD%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDqpcGgnFPF5MAM2lAxXnjlY77mV8nWhHM8e6WdyD67yQIhAOx%2BZbVy8NFzsOn%2F4vF%2BwDUGJnzaE%2F%2FJIF14nubng0HZKv8DCAkQABoMNjM3NDIzMTgzODA1IgytSX1lckAHkJ6BBQIq3AMuGqEDos05xGTKB5vaOEHXi8hpHbJxgMM1b9j5Y77s6CuoGY6vGp8VfMpb5e%2FQEnmkTu763ZKHwBlMljY4kMXgB%2BFaH0DReNakjhl3TZDCHA9xpph0qoP9mJ1rB1mqGHlS31eFW4cuoTcEX%2FDkw1Zxfct9J3%2FIs0O8NP%2Bz7sPn00ancwGvDrnWd3MhjlsE1593%2BkJgCF%2Budg9Ly2J0Bs0QrmxMLQ3WO5lC3T3ryS53lhGD8ygFojGGl83NtxIcrHek2lFC%2Fd0O6kQUbu%2BNjJcjLUNIcJxVmwrDY%2BMfIL%2BLxRXJTgVqMXy9eKVTwyijYo77QwzDk8Nast9OHjTAFiBXKtfa9rBwqLWqZD3AT9zTP2GNQZfZAZ3JkcrigD%2Boez5Z9LkpPPaQdtcj5z4%2B%2B7BEddRzJHqX0YUtwgLSv10e2ZKvJ%2FXDNNtppPih2OX%2BgjFZiWthoCnzj8FcvBklq%2BnOReexIl8YApUHdXSKJHFCzm%2BVV2WCi8FIkSf1%2F49fd4vgUlx2arAmJ2bQ2Po9FMuZzuutETec7Qkp5QpifBrn%2FvOicTfYsa%2BTbOYKAvY%2BLFcLgTsAPtOzS2UYuZvCpdG884MED9fPWFem1veLv5Nm4uvqA7o8AM%2FbzCBU%2BTDg3rjJBjqkAbbqjI5CENKuS5Jm8arhsclyzT9%2B27%2B8gBjAzCXjE7J8q3FtEOgv1TyAEJc1gHu47yjwFObHCcLEhAX%2BLVjIkEk%2F1tHFk4jP0bRetfrwD%2FncExJNGVYK0EOIwiOyYAXod5ZiIQyG3BMCgrEZPZI1SgocH%2FNymyDEa4ifyU6csOvecxIHR5LSZu5r7iceN%2B318UZPvxnHELwRXyGhfGSO8aXpIYOG&X-Amz-Signature=ec0693a1330f73ff07ba328170848e394bdb95aa175d3b511ddc1dbbf4ea5bb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677MTY3BD%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDqpcGgnFPF5MAM2lAxXnjlY77mV8nWhHM8e6WdyD67yQIhAOx%2BZbVy8NFzsOn%2F4vF%2BwDUGJnzaE%2F%2FJIF14nubng0HZKv8DCAkQABoMNjM3NDIzMTgzODA1IgytSX1lckAHkJ6BBQIq3AMuGqEDos05xGTKB5vaOEHXi8hpHbJxgMM1b9j5Y77s6CuoGY6vGp8VfMpb5e%2FQEnmkTu763ZKHwBlMljY4kMXgB%2BFaH0DReNakjhl3TZDCHA9xpph0qoP9mJ1rB1mqGHlS31eFW4cuoTcEX%2FDkw1Zxfct9J3%2FIs0O8NP%2Bz7sPn00ancwGvDrnWd3MhjlsE1593%2BkJgCF%2Budg9Ly2J0Bs0QrmxMLQ3WO5lC3T3ryS53lhGD8ygFojGGl83NtxIcrHek2lFC%2Fd0O6kQUbu%2BNjJcjLUNIcJxVmwrDY%2BMfIL%2BLxRXJTgVqMXy9eKVTwyijYo77QwzDk8Nast9OHjTAFiBXKtfa9rBwqLWqZD3AT9zTP2GNQZfZAZ3JkcrigD%2Boez5Z9LkpPPaQdtcj5z4%2B%2B7BEddRzJHqX0YUtwgLSv10e2ZKvJ%2FXDNNtppPih2OX%2BgjFZiWthoCnzj8FcvBklq%2BnOReexIl8YApUHdXSKJHFCzm%2BVV2WCi8FIkSf1%2F49fd4vgUlx2arAmJ2bQ2Po9FMuZzuutETec7Qkp5QpifBrn%2FvOicTfYsa%2BTbOYKAvY%2BLFcLgTsAPtOzS2UYuZvCpdG884MED9fPWFem1veLv5Nm4uvqA7o8AM%2FbzCBU%2BTDg3rjJBjqkAbbqjI5CENKuS5Jm8arhsclyzT9%2B27%2B8gBjAzCXjE7J8q3FtEOgv1TyAEJc1gHu47yjwFObHCcLEhAX%2BLVjIkEk%2F1tHFk4jP0bRetfrwD%2FncExJNGVYK0EOIwiOyYAXod5ZiIQyG3BMCgrEZPZI1SgocH%2FNymyDEa4ifyU6csOvecxIHR5LSZu5r7iceN%2B318UZPvxnHELwRXyGhfGSO8aXpIYOG&X-Amz-Signature=271196e76d2d04cbbdff6c63920e4dd75e7a67fd2359e7cea4d6c8c349f011fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677MTY3BD%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDqpcGgnFPF5MAM2lAxXnjlY77mV8nWhHM8e6WdyD67yQIhAOx%2BZbVy8NFzsOn%2F4vF%2BwDUGJnzaE%2F%2FJIF14nubng0HZKv8DCAkQABoMNjM3NDIzMTgzODA1IgytSX1lckAHkJ6BBQIq3AMuGqEDos05xGTKB5vaOEHXi8hpHbJxgMM1b9j5Y77s6CuoGY6vGp8VfMpb5e%2FQEnmkTu763ZKHwBlMljY4kMXgB%2BFaH0DReNakjhl3TZDCHA9xpph0qoP9mJ1rB1mqGHlS31eFW4cuoTcEX%2FDkw1Zxfct9J3%2FIs0O8NP%2Bz7sPn00ancwGvDrnWd3MhjlsE1593%2BkJgCF%2Budg9Ly2J0Bs0QrmxMLQ3WO5lC3T3ryS53lhGD8ygFojGGl83NtxIcrHek2lFC%2Fd0O6kQUbu%2BNjJcjLUNIcJxVmwrDY%2BMfIL%2BLxRXJTgVqMXy9eKVTwyijYo77QwzDk8Nast9OHjTAFiBXKtfa9rBwqLWqZD3AT9zTP2GNQZfZAZ3JkcrigD%2Boez5Z9LkpPPaQdtcj5z4%2B%2B7BEddRzJHqX0YUtwgLSv10e2ZKvJ%2FXDNNtppPih2OX%2BgjFZiWthoCnzj8FcvBklq%2BnOReexIl8YApUHdXSKJHFCzm%2BVV2WCi8FIkSf1%2F49fd4vgUlx2arAmJ2bQ2Po9FMuZzuutETec7Qkp5QpifBrn%2FvOicTfYsa%2BTbOYKAvY%2BLFcLgTsAPtOzS2UYuZvCpdG884MED9fPWFem1veLv5Nm4uvqA7o8AM%2FbzCBU%2BTDg3rjJBjqkAbbqjI5CENKuS5Jm8arhsclyzT9%2B27%2B8gBjAzCXjE7J8q3FtEOgv1TyAEJc1gHu47yjwFObHCcLEhAX%2BLVjIkEk%2F1tHFk4jP0bRetfrwD%2FncExJNGVYK0EOIwiOyYAXod5ZiIQyG3BMCgrEZPZI1SgocH%2FNymyDEa4ifyU6csOvecxIHR5LSZu5r7iceN%2B318UZPvxnHELwRXyGhfGSO8aXpIYOG&X-Amz-Signature=7f0b322b560cab95d43f7f75d043064a3fbfc216dc755f346557c360a8425ab1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677MTY3BD%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDqpcGgnFPF5MAM2lAxXnjlY77mV8nWhHM8e6WdyD67yQIhAOx%2BZbVy8NFzsOn%2F4vF%2BwDUGJnzaE%2F%2FJIF14nubng0HZKv8DCAkQABoMNjM3NDIzMTgzODA1IgytSX1lckAHkJ6BBQIq3AMuGqEDos05xGTKB5vaOEHXi8hpHbJxgMM1b9j5Y77s6CuoGY6vGp8VfMpb5e%2FQEnmkTu763ZKHwBlMljY4kMXgB%2BFaH0DReNakjhl3TZDCHA9xpph0qoP9mJ1rB1mqGHlS31eFW4cuoTcEX%2FDkw1Zxfct9J3%2FIs0O8NP%2Bz7sPn00ancwGvDrnWd3MhjlsE1593%2BkJgCF%2Budg9Ly2J0Bs0QrmxMLQ3WO5lC3T3ryS53lhGD8ygFojGGl83NtxIcrHek2lFC%2Fd0O6kQUbu%2BNjJcjLUNIcJxVmwrDY%2BMfIL%2BLxRXJTgVqMXy9eKVTwyijYo77QwzDk8Nast9OHjTAFiBXKtfa9rBwqLWqZD3AT9zTP2GNQZfZAZ3JkcrigD%2Boez5Z9LkpPPaQdtcj5z4%2B%2B7BEddRzJHqX0YUtwgLSv10e2ZKvJ%2FXDNNtppPih2OX%2BgjFZiWthoCnzj8FcvBklq%2BnOReexIl8YApUHdXSKJHFCzm%2BVV2WCi8FIkSf1%2F49fd4vgUlx2arAmJ2bQ2Po9FMuZzuutETec7Qkp5QpifBrn%2FvOicTfYsa%2BTbOYKAvY%2BLFcLgTsAPtOzS2UYuZvCpdG884MED9fPWFem1veLv5Nm4uvqA7o8AM%2FbzCBU%2BTDg3rjJBjqkAbbqjI5CENKuS5Jm8arhsclyzT9%2B27%2B8gBjAzCXjE7J8q3FtEOgv1TyAEJc1gHu47yjwFObHCcLEhAX%2BLVjIkEk%2F1tHFk4jP0bRetfrwD%2FncExJNGVYK0EOIwiOyYAXod5ZiIQyG3BMCgrEZPZI1SgocH%2FNymyDEa4ifyU6csOvecxIHR5LSZu5r7iceN%2B318UZPvxnHELwRXyGhfGSO8aXpIYOG&X-Amz-Signature=778616e9a75be540322acdb1fd442cfe96430966cb42e4c85819120aacdfd262&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677MTY3BD%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDqpcGgnFPF5MAM2lAxXnjlY77mV8nWhHM8e6WdyD67yQIhAOx%2BZbVy8NFzsOn%2F4vF%2BwDUGJnzaE%2F%2FJIF14nubng0HZKv8DCAkQABoMNjM3NDIzMTgzODA1IgytSX1lckAHkJ6BBQIq3AMuGqEDos05xGTKB5vaOEHXi8hpHbJxgMM1b9j5Y77s6CuoGY6vGp8VfMpb5e%2FQEnmkTu763ZKHwBlMljY4kMXgB%2BFaH0DReNakjhl3TZDCHA9xpph0qoP9mJ1rB1mqGHlS31eFW4cuoTcEX%2FDkw1Zxfct9J3%2FIs0O8NP%2Bz7sPn00ancwGvDrnWd3MhjlsE1593%2BkJgCF%2Budg9Ly2J0Bs0QrmxMLQ3WO5lC3T3ryS53lhGD8ygFojGGl83NtxIcrHek2lFC%2Fd0O6kQUbu%2BNjJcjLUNIcJxVmwrDY%2BMfIL%2BLxRXJTgVqMXy9eKVTwyijYo77QwzDk8Nast9OHjTAFiBXKtfa9rBwqLWqZD3AT9zTP2GNQZfZAZ3JkcrigD%2Boez5Z9LkpPPaQdtcj5z4%2B%2B7BEddRzJHqX0YUtwgLSv10e2ZKvJ%2FXDNNtppPih2OX%2BgjFZiWthoCnzj8FcvBklq%2BnOReexIl8YApUHdXSKJHFCzm%2BVV2WCi8FIkSf1%2F49fd4vgUlx2arAmJ2bQ2Po9FMuZzuutETec7Qkp5QpifBrn%2FvOicTfYsa%2BTbOYKAvY%2BLFcLgTsAPtOzS2UYuZvCpdG884MED9fPWFem1veLv5Nm4uvqA7o8AM%2FbzCBU%2BTDg3rjJBjqkAbbqjI5CENKuS5Jm8arhsclyzT9%2B27%2B8gBjAzCXjE7J8q3FtEOgv1TyAEJc1gHu47yjwFObHCcLEhAX%2BLVjIkEk%2F1tHFk4jP0bRetfrwD%2FncExJNGVYK0EOIwiOyYAXod5ZiIQyG3BMCgrEZPZI1SgocH%2FNymyDEa4ifyU6csOvecxIHR5LSZu5r7iceN%2B318UZPvxnHELwRXyGhfGSO8aXpIYOG&X-Amz-Signature=6f4008193695ec08f7a8c684c674060dc1a2969e521bf9bc7ccd9e713e5f87ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677MTY3BD%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDqpcGgnFPF5MAM2lAxXnjlY77mV8nWhHM8e6WdyD67yQIhAOx%2BZbVy8NFzsOn%2F4vF%2BwDUGJnzaE%2F%2FJIF14nubng0HZKv8DCAkQABoMNjM3NDIzMTgzODA1IgytSX1lckAHkJ6BBQIq3AMuGqEDos05xGTKB5vaOEHXi8hpHbJxgMM1b9j5Y77s6CuoGY6vGp8VfMpb5e%2FQEnmkTu763ZKHwBlMljY4kMXgB%2BFaH0DReNakjhl3TZDCHA9xpph0qoP9mJ1rB1mqGHlS31eFW4cuoTcEX%2FDkw1Zxfct9J3%2FIs0O8NP%2Bz7sPn00ancwGvDrnWd3MhjlsE1593%2BkJgCF%2Budg9Ly2J0Bs0QrmxMLQ3WO5lC3T3ryS53lhGD8ygFojGGl83NtxIcrHek2lFC%2Fd0O6kQUbu%2BNjJcjLUNIcJxVmwrDY%2BMfIL%2BLxRXJTgVqMXy9eKVTwyijYo77QwzDk8Nast9OHjTAFiBXKtfa9rBwqLWqZD3AT9zTP2GNQZfZAZ3JkcrigD%2Boez5Z9LkpPPaQdtcj5z4%2B%2B7BEddRzJHqX0YUtwgLSv10e2ZKvJ%2FXDNNtppPih2OX%2BgjFZiWthoCnzj8FcvBklq%2BnOReexIl8YApUHdXSKJHFCzm%2BVV2WCi8FIkSf1%2F49fd4vgUlx2arAmJ2bQ2Po9FMuZzuutETec7Qkp5QpifBrn%2FvOicTfYsa%2BTbOYKAvY%2BLFcLgTsAPtOzS2UYuZvCpdG884MED9fPWFem1veLv5Nm4uvqA7o8AM%2FbzCBU%2BTDg3rjJBjqkAbbqjI5CENKuS5Jm8arhsclyzT9%2B27%2B8gBjAzCXjE7J8q3FtEOgv1TyAEJc1gHu47yjwFObHCcLEhAX%2BLVjIkEk%2F1tHFk4jP0bRetfrwD%2FncExJNGVYK0EOIwiOyYAXod5ZiIQyG3BMCgrEZPZI1SgocH%2FNymyDEa4ifyU6csOvecxIHR5LSZu5r7iceN%2B318UZPvxnHELwRXyGhfGSO8aXpIYOG&X-Amz-Signature=440b6dc0a092c2d5b08c8e47f61a689a113abcfd5865bed944c5af4e73bff7bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677MTY3BD%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDqpcGgnFPF5MAM2lAxXnjlY77mV8nWhHM8e6WdyD67yQIhAOx%2BZbVy8NFzsOn%2F4vF%2BwDUGJnzaE%2F%2FJIF14nubng0HZKv8DCAkQABoMNjM3NDIzMTgzODA1IgytSX1lckAHkJ6BBQIq3AMuGqEDos05xGTKB5vaOEHXi8hpHbJxgMM1b9j5Y77s6CuoGY6vGp8VfMpb5e%2FQEnmkTu763ZKHwBlMljY4kMXgB%2BFaH0DReNakjhl3TZDCHA9xpph0qoP9mJ1rB1mqGHlS31eFW4cuoTcEX%2FDkw1Zxfct9J3%2FIs0O8NP%2Bz7sPn00ancwGvDrnWd3MhjlsE1593%2BkJgCF%2Budg9Ly2J0Bs0QrmxMLQ3WO5lC3T3ryS53lhGD8ygFojGGl83NtxIcrHek2lFC%2Fd0O6kQUbu%2BNjJcjLUNIcJxVmwrDY%2BMfIL%2BLxRXJTgVqMXy9eKVTwyijYo77QwzDk8Nast9OHjTAFiBXKtfa9rBwqLWqZD3AT9zTP2GNQZfZAZ3JkcrigD%2Boez5Z9LkpPPaQdtcj5z4%2B%2B7BEddRzJHqX0YUtwgLSv10e2ZKvJ%2FXDNNtppPih2OX%2BgjFZiWthoCnzj8FcvBklq%2BnOReexIl8YApUHdXSKJHFCzm%2BVV2WCi8FIkSf1%2F49fd4vgUlx2arAmJ2bQ2Po9FMuZzuutETec7Qkp5QpifBrn%2FvOicTfYsa%2BTbOYKAvY%2BLFcLgTsAPtOzS2UYuZvCpdG884MED9fPWFem1veLv5Nm4uvqA7o8AM%2FbzCBU%2BTDg3rjJBjqkAbbqjI5CENKuS5Jm8arhsclyzT9%2B27%2B8gBjAzCXjE7J8q3FtEOgv1TyAEJc1gHu47yjwFObHCcLEhAX%2BLVjIkEk%2F1tHFk4jP0bRetfrwD%2FncExJNGVYK0EOIwiOyYAXod5ZiIQyG3BMCgrEZPZI1SgocH%2FNymyDEa4ifyU6csOvecxIHR5LSZu5r7iceN%2B318UZPvxnHELwRXyGhfGSO8aXpIYOG&X-Amz-Signature=651562a1489a00f268ac4a108061f49a5a0b1020edb80d55e105bc552a9a5aef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677MTY3BD%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDqpcGgnFPF5MAM2lAxXnjlY77mV8nWhHM8e6WdyD67yQIhAOx%2BZbVy8NFzsOn%2F4vF%2BwDUGJnzaE%2F%2FJIF14nubng0HZKv8DCAkQABoMNjM3NDIzMTgzODA1IgytSX1lckAHkJ6BBQIq3AMuGqEDos05xGTKB5vaOEHXi8hpHbJxgMM1b9j5Y77s6CuoGY6vGp8VfMpb5e%2FQEnmkTu763ZKHwBlMljY4kMXgB%2BFaH0DReNakjhl3TZDCHA9xpph0qoP9mJ1rB1mqGHlS31eFW4cuoTcEX%2FDkw1Zxfct9J3%2FIs0O8NP%2Bz7sPn00ancwGvDrnWd3MhjlsE1593%2BkJgCF%2Budg9Ly2J0Bs0QrmxMLQ3WO5lC3T3ryS53lhGD8ygFojGGl83NtxIcrHek2lFC%2Fd0O6kQUbu%2BNjJcjLUNIcJxVmwrDY%2BMfIL%2BLxRXJTgVqMXy9eKVTwyijYo77QwzDk8Nast9OHjTAFiBXKtfa9rBwqLWqZD3AT9zTP2GNQZfZAZ3JkcrigD%2Boez5Z9LkpPPaQdtcj5z4%2B%2B7BEddRzJHqX0YUtwgLSv10e2ZKvJ%2FXDNNtppPih2OX%2BgjFZiWthoCnzj8FcvBklq%2BnOReexIl8YApUHdXSKJHFCzm%2BVV2WCi8FIkSf1%2F49fd4vgUlx2arAmJ2bQ2Po9FMuZzuutETec7Qkp5QpifBrn%2FvOicTfYsa%2BTbOYKAvY%2BLFcLgTsAPtOzS2UYuZvCpdG884MED9fPWFem1veLv5Nm4uvqA7o8AM%2FbzCBU%2BTDg3rjJBjqkAbbqjI5CENKuS5Jm8arhsclyzT9%2B27%2B8gBjAzCXjE7J8q3FtEOgv1TyAEJc1gHu47yjwFObHCcLEhAX%2BLVjIkEk%2F1tHFk4jP0bRetfrwD%2FncExJNGVYK0EOIwiOyYAXod5ZiIQyG3BMCgrEZPZI1SgocH%2FNymyDEa4ifyU6csOvecxIHR5LSZu5r7iceN%2B318UZPvxnHELwRXyGhfGSO8aXpIYOG&X-Amz-Signature=c7e3174ad32432dd4625dcb47b2e33852ce1529f0f523ef4e4393dcc9e8cdab3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677MTY3BD%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDqpcGgnFPF5MAM2lAxXnjlY77mV8nWhHM8e6WdyD67yQIhAOx%2BZbVy8NFzsOn%2F4vF%2BwDUGJnzaE%2F%2FJIF14nubng0HZKv8DCAkQABoMNjM3NDIzMTgzODA1IgytSX1lckAHkJ6BBQIq3AMuGqEDos05xGTKB5vaOEHXi8hpHbJxgMM1b9j5Y77s6CuoGY6vGp8VfMpb5e%2FQEnmkTu763ZKHwBlMljY4kMXgB%2BFaH0DReNakjhl3TZDCHA9xpph0qoP9mJ1rB1mqGHlS31eFW4cuoTcEX%2FDkw1Zxfct9J3%2FIs0O8NP%2Bz7sPn00ancwGvDrnWd3MhjlsE1593%2BkJgCF%2Budg9Ly2J0Bs0QrmxMLQ3WO5lC3T3ryS53lhGD8ygFojGGl83NtxIcrHek2lFC%2Fd0O6kQUbu%2BNjJcjLUNIcJxVmwrDY%2BMfIL%2BLxRXJTgVqMXy9eKVTwyijYo77QwzDk8Nast9OHjTAFiBXKtfa9rBwqLWqZD3AT9zTP2GNQZfZAZ3JkcrigD%2Boez5Z9LkpPPaQdtcj5z4%2B%2B7BEddRzJHqX0YUtwgLSv10e2ZKvJ%2FXDNNtppPih2OX%2BgjFZiWthoCnzj8FcvBklq%2BnOReexIl8YApUHdXSKJHFCzm%2BVV2WCi8FIkSf1%2F49fd4vgUlx2arAmJ2bQ2Po9FMuZzuutETec7Qkp5QpifBrn%2FvOicTfYsa%2BTbOYKAvY%2BLFcLgTsAPtOzS2UYuZvCpdG884MED9fPWFem1veLv5Nm4uvqA7o8AM%2FbzCBU%2BTDg3rjJBjqkAbbqjI5CENKuS5Jm8arhsclyzT9%2B27%2B8gBjAzCXjE7J8q3FtEOgv1TyAEJc1gHu47yjwFObHCcLEhAX%2BLVjIkEk%2F1tHFk4jP0bRetfrwD%2FncExJNGVYK0EOIwiOyYAXod5ZiIQyG3BMCgrEZPZI1SgocH%2FNymyDEa4ifyU6csOvecxIHR5LSZu5r7iceN%2B318UZPvxnHELwRXyGhfGSO8aXpIYOG&X-Amz-Signature=b57e618e363b16a217a2e56c78437de1153fcac45be1aa456105eeaa19b58d26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677MTY3BD%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDqpcGgnFPF5MAM2lAxXnjlY77mV8nWhHM8e6WdyD67yQIhAOx%2BZbVy8NFzsOn%2F4vF%2BwDUGJnzaE%2F%2FJIF14nubng0HZKv8DCAkQABoMNjM3NDIzMTgzODA1IgytSX1lckAHkJ6BBQIq3AMuGqEDos05xGTKB5vaOEHXi8hpHbJxgMM1b9j5Y77s6CuoGY6vGp8VfMpb5e%2FQEnmkTu763ZKHwBlMljY4kMXgB%2BFaH0DReNakjhl3TZDCHA9xpph0qoP9mJ1rB1mqGHlS31eFW4cuoTcEX%2FDkw1Zxfct9J3%2FIs0O8NP%2Bz7sPn00ancwGvDrnWd3MhjlsE1593%2BkJgCF%2Budg9Ly2J0Bs0QrmxMLQ3WO5lC3T3ryS53lhGD8ygFojGGl83NtxIcrHek2lFC%2Fd0O6kQUbu%2BNjJcjLUNIcJxVmwrDY%2BMfIL%2BLxRXJTgVqMXy9eKVTwyijYo77QwzDk8Nast9OHjTAFiBXKtfa9rBwqLWqZD3AT9zTP2GNQZfZAZ3JkcrigD%2Boez5Z9LkpPPaQdtcj5z4%2B%2B7BEddRzJHqX0YUtwgLSv10e2ZKvJ%2FXDNNtppPih2OX%2BgjFZiWthoCnzj8FcvBklq%2BnOReexIl8YApUHdXSKJHFCzm%2BVV2WCi8FIkSf1%2F49fd4vgUlx2arAmJ2bQ2Po9FMuZzuutETec7Qkp5QpifBrn%2FvOicTfYsa%2BTbOYKAvY%2BLFcLgTsAPtOzS2UYuZvCpdG884MED9fPWFem1veLv5Nm4uvqA7o8AM%2FbzCBU%2BTDg3rjJBjqkAbbqjI5CENKuS5Jm8arhsclyzT9%2B27%2B8gBjAzCXjE7J8q3FtEOgv1TyAEJc1gHu47yjwFObHCcLEhAX%2BLVjIkEk%2F1tHFk4jP0bRetfrwD%2FncExJNGVYK0EOIwiOyYAXod5ZiIQyG3BMCgrEZPZI1SgocH%2FNymyDEa4ifyU6csOvecxIHR5LSZu5r7iceN%2B318UZPvxnHELwRXyGhfGSO8aXpIYOG&X-Amz-Signature=379183be0739b5057a5cdb71665c8351ccb11fc2c008792df4c5207c808d315a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677MTY3BD%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDqpcGgnFPF5MAM2lAxXnjlY77mV8nWhHM8e6WdyD67yQIhAOx%2BZbVy8NFzsOn%2F4vF%2BwDUGJnzaE%2F%2FJIF14nubng0HZKv8DCAkQABoMNjM3NDIzMTgzODA1IgytSX1lckAHkJ6BBQIq3AMuGqEDos05xGTKB5vaOEHXi8hpHbJxgMM1b9j5Y77s6CuoGY6vGp8VfMpb5e%2FQEnmkTu763ZKHwBlMljY4kMXgB%2BFaH0DReNakjhl3TZDCHA9xpph0qoP9mJ1rB1mqGHlS31eFW4cuoTcEX%2FDkw1Zxfct9J3%2FIs0O8NP%2Bz7sPn00ancwGvDrnWd3MhjlsE1593%2BkJgCF%2Budg9Ly2J0Bs0QrmxMLQ3WO5lC3T3ryS53lhGD8ygFojGGl83NtxIcrHek2lFC%2Fd0O6kQUbu%2BNjJcjLUNIcJxVmwrDY%2BMfIL%2BLxRXJTgVqMXy9eKVTwyijYo77QwzDk8Nast9OHjTAFiBXKtfa9rBwqLWqZD3AT9zTP2GNQZfZAZ3JkcrigD%2Boez5Z9LkpPPaQdtcj5z4%2B%2B7BEddRzJHqX0YUtwgLSv10e2ZKvJ%2FXDNNtppPih2OX%2BgjFZiWthoCnzj8FcvBklq%2BnOReexIl8YApUHdXSKJHFCzm%2BVV2WCi8FIkSf1%2F49fd4vgUlx2arAmJ2bQ2Po9FMuZzuutETec7Qkp5QpifBrn%2FvOicTfYsa%2BTbOYKAvY%2BLFcLgTsAPtOzS2UYuZvCpdG884MED9fPWFem1veLv5Nm4uvqA7o8AM%2FbzCBU%2BTDg3rjJBjqkAbbqjI5CENKuS5Jm8arhsclyzT9%2B27%2B8gBjAzCXjE7J8q3FtEOgv1TyAEJc1gHu47yjwFObHCcLEhAX%2BLVjIkEk%2F1tHFk4jP0bRetfrwD%2FncExJNGVYK0EOIwiOyYAXod5ZiIQyG3BMCgrEZPZI1SgocH%2FNymyDEa4ifyU6csOvecxIHR5LSZu5r7iceN%2B318UZPvxnHELwRXyGhfGSO8aXpIYOG&X-Amz-Signature=2995de4098ac803742f83ac355280d0846360a258ca32cd7858f0a23ef498aa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
