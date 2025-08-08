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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BZUS6HQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQD7QUR0JRFDkFTA%2BCvQOFKeisIjlMfL6qvzgw4upsc5%2FgIgRhTFZRHK%2FQj3UW4nVZ4KutYAMbxACVUUh9KY6XqYJ9IqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDND6Qz1Gst4IxhF4mSrcA7fxNIh5v0kxSV0C%2FvtTO3%2B%2F%2FVJUqyxHdufeD67V5rQaYk5o81kgyBbYd7Iuo%2Fa%2FECEOCLf0uMXOSOOscAH8y2uywVoXSbVz%2BvmQKh78FOuGJPPA4SWd9s6weE7rcBTIfXUS0U9dU1%2FbbxFIuRflh7X91y3JWuABSA%2F3VcC8pJzUmLOv394xNlY2Ry9kz0VB0tSORg6wI7wr%2BxKycxLoNm48VJ1v3ghccnNqW3NghliZUBfsQlX%2BOBgFLE727P0lX%2Ft1SDugd9NT%2FMn%2BsQNtDZ%2BMcfHNB7G40CeneujIOQRozHDFbbhnULTcvP5eFWG8V6P4mSJZi2s%2F2sQh0yfaDYnFuh%2FnAIWfdGSbHbYT%2BuKnH7vN8ux056%2FhwfVWpequeZQU9I%2FIkl86F8vcjFjri1%2F8Zt0J0BXLntj8doK6ZkgQ8PZ7qkbi0QTIU0BPNY%2FgXHVGK5BwBFqITSQ305TWdoiw5SC%2FklLlSm8koX%2FXe%2BBq7dwAotjldHB%2BgJMgX5QGfqLZTGhTgnezyT%2F0SIqfpWrvimeJ5jiceqaTM4ipU9Hrr7VqqcgBgU30fUcknOSlJXGlxZbk5Wqh7mgKiX1JhW2I1BmEp5pDH%2FakiNN6jY5RaR%2Fc8MG8W%2F0ctfYpMOb61cQGOqUBYwFc0yGSOMxkmwlroo9QvHByHEJ0NkVfZqs9RxcRkllULwaxpxPK%2FQl8%2BUoaU5HBIC4l2DxI4f0X%2BDSvvsGYoNCTRUSBnpu9LYpoGROaGfdqXPboaMJtlMtrIlZme7A%2BotGqzC8ecFMUJd5OG%2FF%2BLJQXpko2WEi3kmUA6gdF2gc3qrN%2BJOZJ1LP%2Bj5jEGb7P1thS1lSOP76IeMagenjpVE5HfgMY&X-Amz-Signature=7ab355936127763d13cbd6723da064cff53f6fd01d1107b0bd0ca3c7ff574b8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BZUS6HQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQD7QUR0JRFDkFTA%2BCvQOFKeisIjlMfL6qvzgw4upsc5%2FgIgRhTFZRHK%2FQj3UW4nVZ4KutYAMbxACVUUh9KY6XqYJ9IqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDND6Qz1Gst4IxhF4mSrcA7fxNIh5v0kxSV0C%2FvtTO3%2B%2F%2FVJUqyxHdufeD67V5rQaYk5o81kgyBbYd7Iuo%2Fa%2FECEOCLf0uMXOSOOscAH8y2uywVoXSbVz%2BvmQKh78FOuGJPPA4SWd9s6weE7rcBTIfXUS0U9dU1%2FbbxFIuRflh7X91y3JWuABSA%2F3VcC8pJzUmLOv394xNlY2Ry9kz0VB0tSORg6wI7wr%2BxKycxLoNm48VJ1v3ghccnNqW3NghliZUBfsQlX%2BOBgFLE727P0lX%2Ft1SDugd9NT%2FMn%2BsQNtDZ%2BMcfHNB7G40CeneujIOQRozHDFbbhnULTcvP5eFWG8V6P4mSJZi2s%2F2sQh0yfaDYnFuh%2FnAIWfdGSbHbYT%2BuKnH7vN8ux056%2FhwfVWpequeZQU9I%2FIkl86F8vcjFjri1%2F8Zt0J0BXLntj8doK6ZkgQ8PZ7qkbi0QTIU0BPNY%2FgXHVGK5BwBFqITSQ305TWdoiw5SC%2FklLlSm8koX%2FXe%2BBq7dwAotjldHB%2BgJMgX5QGfqLZTGhTgnezyT%2F0SIqfpWrvimeJ5jiceqaTM4ipU9Hrr7VqqcgBgU30fUcknOSlJXGlxZbk5Wqh7mgKiX1JhW2I1BmEp5pDH%2FakiNN6jY5RaR%2Fc8MG8W%2F0ctfYpMOb61cQGOqUBYwFc0yGSOMxkmwlroo9QvHByHEJ0NkVfZqs9RxcRkllULwaxpxPK%2FQl8%2BUoaU5HBIC4l2DxI4f0X%2BDSvvsGYoNCTRUSBnpu9LYpoGROaGfdqXPboaMJtlMtrIlZme7A%2BotGqzC8ecFMUJd5OG%2FF%2BLJQXpko2WEi3kmUA6gdF2gc3qrN%2BJOZJ1LP%2Bj5jEGb7P1thS1lSOP76IeMagenjpVE5HfgMY&X-Amz-Signature=4b74af0ef4b9d61555cc9e541e3ad1e233363dc98c3ce982213058d2ff668cc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BZUS6HQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQD7QUR0JRFDkFTA%2BCvQOFKeisIjlMfL6qvzgw4upsc5%2FgIgRhTFZRHK%2FQj3UW4nVZ4KutYAMbxACVUUh9KY6XqYJ9IqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDND6Qz1Gst4IxhF4mSrcA7fxNIh5v0kxSV0C%2FvtTO3%2B%2F%2FVJUqyxHdufeD67V5rQaYk5o81kgyBbYd7Iuo%2Fa%2FECEOCLf0uMXOSOOscAH8y2uywVoXSbVz%2BvmQKh78FOuGJPPA4SWd9s6weE7rcBTIfXUS0U9dU1%2FbbxFIuRflh7X91y3JWuABSA%2F3VcC8pJzUmLOv394xNlY2Ry9kz0VB0tSORg6wI7wr%2BxKycxLoNm48VJ1v3ghccnNqW3NghliZUBfsQlX%2BOBgFLE727P0lX%2Ft1SDugd9NT%2FMn%2BsQNtDZ%2BMcfHNB7G40CeneujIOQRozHDFbbhnULTcvP5eFWG8V6P4mSJZi2s%2F2sQh0yfaDYnFuh%2FnAIWfdGSbHbYT%2BuKnH7vN8ux056%2FhwfVWpequeZQU9I%2FIkl86F8vcjFjri1%2F8Zt0J0BXLntj8doK6ZkgQ8PZ7qkbi0QTIU0BPNY%2FgXHVGK5BwBFqITSQ305TWdoiw5SC%2FklLlSm8koX%2FXe%2BBq7dwAotjldHB%2BgJMgX5QGfqLZTGhTgnezyT%2F0SIqfpWrvimeJ5jiceqaTM4ipU9Hrr7VqqcgBgU30fUcknOSlJXGlxZbk5Wqh7mgKiX1JhW2I1BmEp5pDH%2FakiNN6jY5RaR%2Fc8MG8W%2F0ctfYpMOb61cQGOqUBYwFc0yGSOMxkmwlroo9QvHByHEJ0NkVfZqs9RxcRkllULwaxpxPK%2FQl8%2BUoaU5HBIC4l2DxI4f0X%2BDSvvsGYoNCTRUSBnpu9LYpoGROaGfdqXPboaMJtlMtrIlZme7A%2BotGqzC8ecFMUJd5OG%2FF%2BLJQXpko2WEi3kmUA6gdF2gc3qrN%2BJOZJ1LP%2Bj5jEGb7P1thS1lSOP76IeMagenjpVE5HfgMY&X-Amz-Signature=ef1d24add30898236f01def48ca82efbede8048cc9ff3f42a50c3bc4b2088dc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BZUS6HQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQD7QUR0JRFDkFTA%2BCvQOFKeisIjlMfL6qvzgw4upsc5%2FgIgRhTFZRHK%2FQj3UW4nVZ4KutYAMbxACVUUh9KY6XqYJ9IqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDND6Qz1Gst4IxhF4mSrcA7fxNIh5v0kxSV0C%2FvtTO3%2B%2F%2FVJUqyxHdufeD67V5rQaYk5o81kgyBbYd7Iuo%2Fa%2FECEOCLf0uMXOSOOscAH8y2uywVoXSbVz%2BvmQKh78FOuGJPPA4SWd9s6weE7rcBTIfXUS0U9dU1%2FbbxFIuRflh7X91y3JWuABSA%2F3VcC8pJzUmLOv394xNlY2Ry9kz0VB0tSORg6wI7wr%2BxKycxLoNm48VJ1v3ghccnNqW3NghliZUBfsQlX%2BOBgFLE727P0lX%2Ft1SDugd9NT%2FMn%2BsQNtDZ%2BMcfHNB7G40CeneujIOQRozHDFbbhnULTcvP5eFWG8V6P4mSJZi2s%2F2sQh0yfaDYnFuh%2FnAIWfdGSbHbYT%2BuKnH7vN8ux056%2FhwfVWpequeZQU9I%2FIkl86F8vcjFjri1%2F8Zt0J0BXLntj8doK6ZkgQ8PZ7qkbi0QTIU0BPNY%2FgXHVGK5BwBFqITSQ305TWdoiw5SC%2FklLlSm8koX%2FXe%2BBq7dwAotjldHB%2BgJMgX5QGfqLZTGhTgnezyT%2F0SIqfpWrvimeJ5jiceqaTM4ipU9Hrr7VqqcgBgU30fUcknOSlJXGlxZbk5Wqh7mgKiX1JhW2I1BmEp5pDH%2FakiNN6jY5RaR%2Fc8MG8W%2F0ctfYpMOb61cQGOqUBYwFc0yGSOMxkmwlroo9QvHByHEJ0NkVfZqs9RxcRkllULwaxpxPK%2FQl8%2BUoaU5HBIC4l2DxI4f0X%2BDSvvsGYoNCTRUSBnpu9LYpoGROaGfdqXPboaMJtlMtrIlZme7A%2BotGqzC8ecFMUJd5OG%2FF%2BLJQXpko2WEi3kmUA6gdF2gc3qrN%2BJOZJ1LP%2Bj5jEGb7P1thS1lSOP76IeMagenjpVE5HfgMY&X-Amz-Signature=c4af4bcb7f64b67491c73f3ff20afb8f83ec6c7d8b9c0bb72490f887f8a1c79e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BZUS6HQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQD7QUR0JRFDkFTA%2BCvQOFKeisIjlMfL6qvzgw4upsc5%2FgIgRhTFZRHK%2FQj3UW4nVZ4KutYAMbxACVUUh9KY6XqYJ9IqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDND6Qz1Gst4IxhF4mSrcA7fxNIh5v0kxSV0C%2FvtTO3%2B%2F%2FVJUqyxHdufeD67V5rQaYk5o81kgyBbYd7Iuo%2Fa%2FECEOCLf0uMXOSOOscAH8y2uywVoXSbVz%2BvmQKh78FOuGJPPA4SWd9s6weE7rcBTIfXUS0U9dU1%2FbbxFIuRflh7X91y3JWuABSA%2F3VcC8pJzUmLOv394xNlY2Ry9kz0VB0tSORg6wI7wr%2BxKycxLoNm48VJ1v3ghccnNqW3NghliZUBfsQlX%2BOBgFLE727P0lX%2Ft1SDugd9NT%2FMn%2BsQNtDZ%2BMcfHNB7G40CeneujIOQRozHDFbbhnULTcvP5eFWG8V6P4mSJZi2s%2F2sQh0yfaDYnFuh%2FnAIWfdGSbHbYT%2BuKnH7vN8ux056%2FhwfVWpequeZQU9I%2FIkl86F8vcjFjri1%2F8Zt0J0BXLntj8doK6ZkgQ8PZ7qkbi0QTIU0BPNY%2FgXHVGK5BwBFqITSQ305TWdoiw5SC%2FklLlSm8koX%2FXe%2BBq7dwAotjldHB%2BgJMgX5QGfqLZTGhTgnezyT%2F0SIqfpWrvimeJ5jiceqaTM4ipU9Hrr7VqqcgBgU30fUcknOSlJXGlxZbk5Wqh7mgKiX1JhW2I1BmEp5pDH%2FakiNN6jY5RaR%2Fc8MG8W%2F0ctfYpMOb61cQGOqUBYwFc0yGSOMxkmwlroo9QvHByHEJ0NkVfZqs9RxcRkllULwaxpxPK%2FQl8%2BUoaU5HBIC4l2DxI4f0X%2BDSvvsGYoNCTRUSBnpu9LYpoGROaGfdqXPboaMJtlMtrIlZme7A%2BotGqzC8ecFMUJd5OG%2FF%2BLJQXpko2WEi3kmUA6gdF2gc3qrN%2BJOZJ1LP%2Bj5jEGb7P1thS1lSOP76IeMagenjpVE5HfgMY&X-Amz-Signature=49d2dbf355cf37f2b13e430dd23c4c6f1948d14f7c071fe396a29b324a99597d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BZUS6HQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQD7QUR0JRFDkFTA%2BCvQOFKeisIjlMfL6qvzgw4upsc5%2FgIgRhTFZRHK%2FQj3UW4nVZ4KutYAMbxACVUUh9KY6XqYJ9IqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDND6Qz1Gst4IxhF4mSrcA7fxNIh5v0kxSV0C%2FvtTO3%2B%2F%2FVJUqyxHdufeD67V5rQaYk5o81kgyBbYd7Iuo%2Fa%2FECEOCLf0uMXOSOOscAH8y2uywVoXSbVz%2BvmQKh78FOuGJPPA4SWd9s6weE7rcBTIfXUS0U9dU1%2FbbxFIuRflh7X91y3JWuABSA%2F3VcC8pJzUmLOv394xNlY2Ry9kz0VB0tSORg6wI7wr%2BxKycxLoNm48VJ1v3ghccnNqW3NghliZUBfsQlX%2BOBgFLE727P0lX%2Ft1SDugd9NT%2FMn%2BsQNtDZ%2BMcfHNB7G40CeneujIOQRozHDFbbhnULTcvP5eFWG8V6P4mSJZi2s%2F2sQh0yfaDYnFuh%2FnAIWfdGSbHbYT%2BuKnH7vN8ux056%2FhwfVWpequeZQU9I%2FIkl86F8vcjFjri1%2F8Zt0J0BXLntj8doK6ZkgQ8PZ7qkbi0QTIU0BPNY%2FgXHVGK5BwBFqITSQ305TWdoiw5SC%2FklLlSm8koX%2FXe%2BBq7dwAotjldHB%2BgJMgX5QGfqLZTGhTgnezyT%2F0SIqfpWrvimeJ5jiceqaTM4ipU9Hrr7VqqcgBgU30fUcknOSlJXGlxZbk5Wqh7mgKiX1JhW2I1BmEp5pDH%2FakiNN6jY5RaR%2Fc8MG8W%2F0ctfYpMOb61cQGOqUBYwFc0yGSOMxkmwlroo9QvHByHEJ0NkVfZqs9RxcRkllULwaxpxPK%2FQl8%2BUoaU5HBIC4l2DxI4f0X%2BDSvvsGYoNCTRUSBnpu9LYpoGROaGfdqXPboaMJtlMtrIlZme7A%2BotGqzC8ecFMUJd5OG%2FF%2BLJQXpko2WEi3kmUA6gdF2gc3qrN%2BJOZJ1LP%2Bj5jEGb7P1thS1lSOP76IeMagenjpVE5HfgMY&X-Amz-Signature=4d8de3aab9a36b5346d49114bfe33fc109f13680b74a3a4ab2dce9e982cfb7a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BZUS6HQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQD7QUR0JRFDkFTA%2BCvQOFKeisIjlMfL6qvzgw4upsc5%2FgIgRhTFZRHK%2FQj3UW4nVZ4KutYAMbxACVUUh9KY6XqYJ9IqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDND6Qz1Gst4IxhF4mSrcA7fxNIh5v0kxSV0C%2FvtTO3%2B%2F%2FVJUqyxHdufeD67V5rQaYk5o81kgyBbYd7Iuo%2Fa%2FECEOCLf0uMXOSOOscAH8y2uywVoXSbVz%2BvmQKh78FOuGJPPA4SWd9s6weE7rcBTIfXUS0U9dU1%2FbbxFIuRflh7X91y3JWuABSA%2F3VcC8pJzUmLOv394xNlY2Ry9kz0VB0tSORg6wI7wr%2BxKycxLoNm48VJ1v3ghccnNqW3NghliZUBfsQlX%2BOBgFLE727P0lX%2Ft1SDugd9NT%2FMn%2BsQNtDZ%2BMcfHNB7G40CeneujIOQRozHDFbbhnULTcvP5eFWG8V6P4mSJZi2s%2F2sQh0yfaDYnFuh%2FnAIWfdGSbHbYT%2BuKnH7vN8ux056%2FhwfVWpequeZQU9I%2FIkl86F8vcjFjri1%2F8Zt0J0BXLntj8doK6ZkgQ8PZ7qkbi0QTIU0BPNY%2FgXHVGK5BwBFqITSQ305TWdoiw5SC%2FklLlSm8koX%2FXe%2BBq7dwAotjldHB%2BgJMgX5QGfqLZTGhTgnezyT%2F0SIqfpWrvimeJ5jiceqaTM4ipU9Hrr7VqqcgBgU30fUcknOSlJXGlxZbk5Wqh7mgKiX1JhW2I1BmEp5pDH%2FakiNN6jY5RaR%2Fc8MG8W%2F0ctfYpMOb61cQGOqUBYwFc0yGSOMxkmwlroo9QvHByHEJ0NkVfZqs9RxcRkllULwaxpxPK%2FQl8%2BUoaU5HBIC4l2DxI4f0X%2BDSvvsGYoNCTRUSBnpu9LYpoGROaGfdqXPboaMJtlMtrIlZme7A%2BotGqzC8ecFMUJd5OG%2FF%2BLJQXpko2WEi3kmUA6gdF2gc3qrN%2BJOZJ1LP%2Bj5jEGb7P1thS1lSOP76IeMagenjpVE5HfgMY&X-Amz-Signature=8d93c8acbd5e942ba113bec61f81a3c3bb3f05a3e4a527dcb99ff2f7e74df4d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BZUS6HQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQD7QUR0JRFDkFTA%2BCvQOFKeisIjlMfL6qvzgw4upsc5%2FgIgRhTFZRHK%2FQj3UW4nVZ4KutYAMbxACVUUh9KY6XqYJ9IqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDND6Qz1Gst4IxhF4mSrcA7fxNIh5v0kxSV0C%2FvtTO3%2B%2F%2FVJUqyxHdufeD67V5rQaYk5o81kgyBbYd7Iuo%2Fa%2FECEOCLf0uMXOSOOscAH8y2uywVoXSbVz%2BvmQKh78FOuGJPPA4SWd9s6weE7rcBTIfXUS0U9dU1%2FbbxFIuRflh7X91y3JWuABSA%2F3VcC8pJzUmLOv394xNlY2Ry9kz0VB0tSORg6wI7wr%2BxKycxLoNm48VJ1v3ghccnNqW3NghliZUBfsQlX%2BOBgFLE727P0lX%2Ft1SDugd9NT%2FMn%2BsQNtDZ%2BMcfHNB7G40CeneujIOQRozHDFbbhnULTcvP5eFWG8V6P4mSJZi2s%2F2sQh0yfaDYnFuh%2FnAIWfdGSbHbYT%2BuKnH7vN8ux056%2FhwfVWpequeZQU9I%2FIkl86F8vcjFjri1%2F8Zt0J0BXLntj8doK6ZkgQ8PZ7qkbi0QTIU0BPNY%2FgXHVGK5BwBFqITSQ305TWdoiw5SC%2FklLlSm8koX%2FXe%2BBq7dwAotjldHB%2BgJMgX5QGfqLZTGhTgnezyT%2F0SIqfpWrvimeJ5jiceqaTM4ipU9Hrr7VqqcgBgU30fUcknOSlJXGlxZbk5Wqh7mgKiX1JhW2I1BmEp5pDH%2FakiNN6jY5RaR%2Fc8MG8W%2F0ctfYpMOb61cQGOqUBYwFc0yGSOMxkmwlroo9QvHByHEJ0NkVfZqs9RxcRkllULwaxpxPK%2FQl8%2BUoaU5HBIC4l2DxI4f0X%2BDSvvsGYoNCTRUSBnpu9LYpoGROaGfdqXPboaMJtlMtrIlZme7A%2BotGqzC8ecFMUJd5OG%2FF%2BLJQXpko2WEi3kmUA6gdF2gc3qrN%2BJOZJ1LP%2Bj5jEGb7P1thS1lSOP76IeMagenjpVE5HfgMY&X-Amz-Signature=32f0ffe827d513a3f805186d5f275977fa74f0130e0e23419404366da790eb5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BZUS6HQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQD7QUR0JRFDkFTA%2BCvQOFKeisIjlMfL6qvzgw4upsc5%2FgIgRhTFZRHK%2FQj3UW4nVZ4KutYAMbxACVUUh9KY6XqYJ9IqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDND6Qz1Gst4IxhF4mSrcA7fxNIh5v0kxSV0C%2FvtTO3%2B%2F%2FVJUqyxHdufeD67V5rQaYk5o81kgyBbYd7Iuo%2Fa%2FECEOCLf0uMXOSOOscAH8y2uywVoXSbVz%2BvmQKh78FOuGJPPA4SWd9s6weE7rcBTIfXUS0U9dU1%2FbbxFIuRflh7X91y3JWuABSA%2F3VcC8pJzUmLOv394xNlY2Ry9kz0VB0tSORg6wI7wr%2BxKycxLoNm48VJ1v3ghccnNqW3NghliZUBfsQlX%2BOBgFLE727P0lX%2Ft1SDugd9NT%2FMn%2BsQNtDZ%2BMcfHNB7G40CeneujIOQRozHDFbbhnULTcvP5eFWG8V6P4mSJZi2s%2F2sQh0yfaDYnFuh%2FnAIWfdGSbHbYT%2BuKnH7vN8ux056%2FhwfVWpequeZQU9I%2FIkl86F8vcjFjri1%2F8Zt0J0BXLntj8doK6ZkgQ8PZ7qkbi0QTIU0BPNY%2FgXHVGK5BwBFqITSQ305TWdoiw5SC%2FklLlSm8koX%2FXe%2BBq7dwAotjldHB%2BgJMgX5QGfqLZTGhTgnezyT%2F0SIqfpWrvimeJ5jiceqaTM4ipU9Hrr7VqqcgBgU30fUcknOSlJXGlxZbk5Wqh7mgKiX1JhW2I1BmEp5pDH%2FakiNN6jY5RaR%2Fc8MG8W%2F0ctfYpMOb61cQGOqUBYwFc0yGSOMxkmwlroo9QvHByHEJ0NkVfZqs9RxcRkllULwaxpxPK%2FQl8%2BUoaU5HBIC4l2DxI4f0X%2BDSvvsGYoNCTRUSBnpu9LYpoGROaGfdqXPboaMJtlMtrIlZme7A%2BotGqzC8ecFMUJd5OG%2FF%2BLJQXpko2WEi3kmUA6gdF2gc3qrN%2BJOZJ1LP%2Bj5jEGb7P1thS1lSOP76IeMagenjpVE5HfgMY&X-Amz-Signature=3227fca277e3ac8e4292c9cb44c6082ed2d439216b132c539a1ce44eceeedad6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BZUS6HQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQD7QUR0JRFDkFTA%2BCvQOFKeisIjlMfL6qvzgw4upsc5%2FgIgRhTFZRHK%2FQj3UW4nVZ4KutYAMbxACVUUh9KY6XqYJ9IqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDND6Qz1Gst4IxhF4mSrcA7fxNIh5v0kxSV0C%2FvtTO3%2B%2F%2FVJUqyxHdufeD67V5rQaYk5o81kgyBbYd7Iuo%2Fa%2FECEOCLf0uMXOSOOscAH8y2uywVoXSbVz%2BvmQKh78FOuGJPPA4SWd9s6weE7rcBTIfXUS0U9dU1%2FbbxFIuRflh7X91y3JWuABSA%2F3VcC8pJzUmLOv394xNlY2Ry9kz0VB0tSORg6wI7wr%2BxKycxLoNm48VJ1v3ghccnNqW3NghliZUBfsQlX%2BOBgFLE727P0lX%2Ft1SDugd9NT%2FMn%2BsQNtDZ%2BMcfHNB7G40CeneujIOQRozHDFbbhnULTcvP5eFWG8V6P4mSJZi2s%2F2sQh0yfaDYnFuh%2FnAIWfdGSbHbYT%2BuKnH7vN8ux056%2FhwfVWpequeZQU9I%2FIkl86F8vcjFjri1%2F8Zt0J0BXLntj8doK6ZkgQ8PZ7qkbi0QTIU0BPNY%2FgXHVGK5BwBFqITSQ305TWdoiw5SC%2FklLlSm8koX%2FXe%2BBq7dwAotjldHB%2BgJMgX5QGfqLZTGhTgnezyT%2F0SIqfpWrvimeJ5jiceqaTM4ipU9Hrr7VqqcgBgU30fUcknOSlJXGlxZbk5Wqh7mgKiX1JhW2I1BmEp5pDH%2FakiNN6jY5RaR%2Fc8MG8W%2F0ctfYpMOb61cQGOqUBYwFc0yGSOMxkmwlroo9QvHByHEJ0NkVfZqs9RxcRkllULwaxpxPK%2FQl8%2BUoaU5HBIC4l2DxI4f0X%2BDSvvsGYoNCTRUSBnpu9LYpoGROaGfdqXPboaMJtlMtrIlZme7A%2BotGqzC8ecFMUJd5OG%2FF%2BLJQXpko2WEi3kmUA6gdF2gc3qrN%2BJOZJ1LP%2Bj5jEGb7P1thS1lSOP76IeMagenjpVE5HfgMY&X-Amz-Signature=5ce80ce40414d9cb0c853375b7e53f9aa7577e6fffbf2bb631b31d89066634ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BZUS6HQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQD7QUR0JRFDkFTA%2BCvQOFKeisIjlMfL6qvzgw4upsc5%2FgIgRhTFZRHK%2FQj3UW4nVZ4KutYAMbxACVUUh9KY6XqYJ9IqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDND6Qz1Gst4IxhF4mSrcA7fxNIh5v0kxSV0C%2FvtTO3%2B%2F%2FVJUqyxHdufeD67V5rQaYk5o81kgyBbYd7Iuo%2Fa%2FECEOCLf0uMXOSOOscAH8y2uywVoXSbVz%2BvmQKh78FOuGJPPA4SWd9s6weE7rcBTIfXUS0U9dU1%2FbbxFIuRflh7X91y3JWuABSA%2F3VcC8pJzUmLOv394xNlY2Ry9kz0VB0tSORg6wI7wr%2BxKycxLoNm48VJ1v3ghccnNqW3NghliZUBfsQlX%2BOBgFLE727P0lX%2Ft1SDugd9NT%2FMn%2BsQNtDZ%2BMcfHNB7G40CeneujIOQRozHDFbbhnULTcvP5eFWG8V6P4mSJZi2s%2F2sQh0yfaDYnFuh%2FnAIWfdGSbHbYT%2BuKnH7vN8ux056%2FhwfVWpequeZQU9I%2FIkl86F8vcjFjri1%2F8Zt0J0BXLntj8doK6ZkgQ8PZ7qkbi0QTIU0BPNY%2FgXHVGK5BwBFqITSQ305TWdoiw5SC%2FklLlSm8koX%2FXe%2BBq7dwAotjldHB%2BgJMgX5QGfqLZTGhTgnezyT%2F0SIqfpWrvimeJ5jiceqaTM4ipU9Hrr7VqqcgBgU30fUcknOSlJXGlxZbk5Wqh7mgKiX1JhW2I1BmEp5pDH%2FakiNN6jY5RaR%2Fc8MG8W%2F0ctfYpMOb61cQGOqUBYwFc0yGSOMxkmwlroo9QvHByHEJ0NkVfZqs9RxcRkllULwaxpxPK%2FQl8%2BUoaU5HBIC4l2DxI4f0X%2BDSvvsGYoNCTRUSBnpu9LYpoGROaGfdqXPboaMJtlMtrIlZme7A%2BotGqzC8ecFMUJd5OG%2FF%2BLJQXpko2WEi3kmUA6gdF2gc3qrN%2BJOZJ1LP%2Bj5jEGb7P1thS1lSOP76IeMagenjpVE5HfgMY&X-Amz-Signature=42ec4eb544577aff123dbc9a376598faaf21c5950af26b58b4eedfbd2381e8e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BZUS6HQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQD7QUR0JRFDkFTA%2BCvQOFKeisIjlMfL6qvzgw4upsc5%2FgIgRhTFZRHK%2FQj3UW4nVZ4KutYAMbxACVUUh9KY6XqYJ9IqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDND6Qz1Gst4IxhF4mSrcA7fxNIh5v0kxSV0C%2FvtTO3%2B%2F%2FVJUqyxHdufeD67V5rQaYk5o81kgyBbYd7Iuo%2Fa%2FECEOCLf0uMXOSOOscAH8y2uywVoXSbVz%2BvmQKh78FOuGJPPA4SWd9s6weE7rcBTIfXUS0U9dU1%2FbbxFIuRflh7X91y3JWuABSA%2F3VcC8pJzUmLOv394xNlY2Ry9kz0VB0tSORg6wI7wr%2BxKycxLoNm48VJ1v3ghccnNqW3NghliZUBfsQlX%2BOBgFLE727P0lX%2Ft1SDugd9NT%2FMn%2BsQNtDZ%2BMcfHNB7G40CeneujIOQRozHDFbbhnULTcvP5eFWG8V6P4mSJZi2s%2F2sQh0yfaDYnFuh%2FnAIWfdGSbHbYT%2BuKnH7vN8ux056%2FhwfVWpequeZQU9I%2FIkl86F8vcjFjri1%2F8Zt0J0BXLntj8doK6ZkgQ8PZ7qkbi0QTIU0BPNY%2FgXHVGK5BwBFqITSQ305TWdoiw5SC%2FklLlSm8koX%2FXe%2BBq7dwAotjldHB%2BgJMgX5QGfqLZTGhTgnezyT%2F0SIqfpWrvimeJ5jiceqaTM4ipU9Hrr7VqqcgBgU30fUcknOSlJXGlxZbk5Wqh7mgKiX1JhW2I1BmEp5pDH%2FakiNN6jY5RaR%2Fc8MG8W%2F0ctfYpMOb61cQGOqUBYwFc0yGSOMxkmwlroo9QvHByHEJ0NkVfZqs9RxcRkllULwaxpxPK%2FQl8%2BUoaU5HBIC4l2DxI4f0X%2BDSvvsGYoNCTRUSBnpu9LYpoGROaGfdqXPboaMJtlMtrIlZme7A%2BotGqzC8ecFMUJd5OG%2FF%2BLJQXpko2WEi3kmUA6gdF2gc3qrN%2BJOZJ1LP%2Bj5jEGb7P1thS1lSOP76IeMagenjpVE5HfgMY&X-Amz-Signature=8b2b94e66ecca0d6a3ce01b64714cfdf12c02d9bf51112a970e122f89882a1b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BZUS6HQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQD7QUR0JRFDkFTA%2BCvQOFKeisIjlMfL6qvzgw4upsc5%2FgIgRhTFZRHK%2FQj3UW4nVZ4KutYAMbxACVUUh9KY6XqYJ9IqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDND6Qz1Gst4IxhF4mSrcA7fxNIh5v0kxSV0C%2FvtTO3%2B%2F%2FVJUqyxHdufeD67V5rQaYk5o81kgyBbYd7Iuo%2Fa%2FECEOCLf0uMXOSOOscAH8y2uywVoXSbVz%2BvmQKh78FOuGJPPA4SWd9s6weE7rcBTIfXUS0U9dU1%2FbbxFIuRflh7X91y3JWuABSA%2F3VcC8pJzUmLOv394xNlY2Ry9kz0VB0tSORg6wI7wr%2BxKycxLoNm48VJ1v3ghccnNqW3NghliZUBfsQlX%2BOBgFLE727P0lX%2Ft1SDugd9NT%2FMn%2BsQNtDZ%2BMcfHNB7G40CeneujIOQRozHDFbbhnULTcvP5eFWG8V6P4mSJZi2s%2F2sQh0yfaDYnFuh%2FnAIWfdGSbHbYT%2BuKnH7vN8ux056%2FhwfVWpequeZQU9I%2FIkl86F8vcjFjri1%2F8Zt0J0BXLntj8doK6ZkgQ8PZ7qkbi0QTIU0BPNY%2FgXHVGK5BwBFqITSQ305TWdoiw5SC%2FklLlSm8koX%2FXe%2BBq7dwAotjldHB%2BgJMgX5QGfqLZTGhTgnezyT%2F0SIqfpWrvimeJ5jiceqaTM4ipU9Hrr7VqqcgBgU30fUcknOSlJXGlxZbk5Wqh7mgKiX1JhW2I1BmEp5pDH%2FakiNN6jY5RaR%2Fc8MG8W%2F0ctfYpMOb61cQGOqUBYwFc0yGSOMxkmwlroo9QvHByHEJ0NkVfZqs9RxcRkllULwaxpxPK%2FQl8%2BUoaU5HBIC4l2DxI4f0X%2BDSvvsGYoNCTRUSBnpu9LYpoGROaGfdqXPboaMJtlMtrIlZme7A%2BotGqzC8ecFMUJd5OG%2FF%2BLJQXpko2WEi3kmUA6gdF2gc3qrN%2BJOZJ1LP%2Bj5jEGb7P1thS1lSOP76IeMagenjpVE5HfgMY&X-Amz-Signature=75954fae3fcdb3701a3f32410548306fa3d25fc206417e95915cc099d4439d98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BZUS6HQ%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T052035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQD7QUR0JRFDkFTA%2BCvQOFKeisIjlMfL6qvzgw4upsc5%2FgIgRhTFZRHK%2FQj3UW4nVZ4KutYAMbxACVUUh9KY6XqYJ9IqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDND6Qz1Gst4IxhF4mSrcA7fxNIh5v0kxSV0C%2FvtTO3%2B%2F%2FVJUqyxHdufeD67V5rQaYk5o81kgyBbYd7Iuo%2Fa%2FECEOCLf0uMXOSOOscAH8y2uywVoXSbVz%2BvmQKh78FOuGJPPA4SWd9s6weE7rcBTIfXUS0U9dU1%2FbbxFIuRflh7X91y3JWuABSA%2F3VcC8pJzUmLOv394xNlY2Ry9kz0VB0tSORg6wI7wr%2BxKycxLoNm48VJ1v3ghccnNqW3NghliZUBfsQlX%2BOBgFLE727P0lX%2Ft1SDugd9NT%2FMn%2BsQNtDZ%2BMcfHNB7G40CeneujIOQRozHDFbbhnULTcvP5eFWG8V6P4mSJZi2s%2F2sQh0yfaDYnFuh%2FnAIWfdGSbHbYT%2BuKnH7vN8ux056%2FhwfVWpequeZQU9I%2FIkl86F8vcjFjri1%2F8Zt0J0BXLntj8doK6ZkgQ8PZ7qkbi0QTIU0BPNY%2FgXHVGK5BwBFqITSQ305TWdoiw5SC%2FklLlSm8koX%2FXe%2BBq7dwAotjldHB%2BgJMgX5QGfqLZTGhTgnezyT%2F0SIqfpWrvimeJ5jiceqaTM4ipU9Hrr7VqqcgBgU30fUcknOSlJXGlxZbk5Wqh7mgKiX1JhW2I1BmEp5pDH%2FakiNN6jY5RaR%2Fc8MG8W%2F0ctfYpMOb61cQGOqUBYwFc0yGSOMxkmwlroo9QvHByHEJ0NkVfZqs9RxcRkllULwaxpxPK%2FQl8%2BUoaU5HBIC4l2DxI4f0X%2BDSvvsGYoNCTRUSBnpu9LYpoGROaGfdqXPboaMJtlMtrIlZme7A%2BotGqzC8ecFMUJd5OG%2FF%2BLJQXpko2WEi3kmUA6gdF2gc3qrN%2BJOZJ1LP%2Bj5jEGb7P1thS1lSOP76IeMagenjpVE5HfgMY&X-Amz-Signature=6a0c712b0c013ba0602bf73233cfa139fef12ed380f86c1cc3a6146ed5245bf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
