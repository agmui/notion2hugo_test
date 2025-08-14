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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PKKWN4O%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXJ%2BEu0Nj5uK9gyRROd9d3xq%2Fnd7VYYC6ufiWY70RofAiAPN5tBYuVIOwrIX1tfj198iH8PxdnA9y2Bd1O%2BNGui8yr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMtOlZFL%2BDXG3B8S3QKtwDNDsaFf4ay5HJAnemhP%2B1iopB%2FM%2BOuCxtIPmoQwYMmSg0xR9WG45F4L01fhBJMyFrzoxMh1bPTxkem44bApK40qMfz7OgaE1%2BmW1ZYMKRBaGudg6gsMN77LTD3bcU3K3A%2Fnwe8sFCj6Cwf%2FubldyjQuLx7JhfwjvKoikdAY2RHtrtDqMB5oHbg0YhV34515kTQFiKcYXfB5%2BTrUQVPTL80Vd7FLaf8n0HRqbbRjFzWeYbtLGy6PY%2BsKb7UkRqVihavgNNL8lcMqO6PZ%2FnHVpJG7fJSpUjgIjPqtrOGC4wYOX6imqDr%2B%2FZM5Ffy9gd3EI%2Fl1gakxoQWeN5MTIFh%2BXFtwTzXmkyy3ZIojuyd52yVNytjM4dmu09deFG3C9Vp7D9VYz6QNN66P%2Bg9Yu7WVyS6BWfp8wwKTwyGA2KH0LfXq7doIXEpnD9VJWGLIRN3vwqHRR0Opgs%2B13yAicSimtoujR4kn8rBGei%2FKvXCdu1TbFqwPNS662wK%2BCLxg82YDTz2uyTXvZYJl3siWfog9T0BDCaC1Lkl3XhPXE5JGXk2RQFrGog0QxJyFSIYUH4Qhd1J%2Fgdd1%2FLhZkle8s0XbgFVK%2FuZkDufyXZcXicc6m29GvJegcmGMflFJA8I7kwmYz1xAY6pgGLsaE8jPeq0iKUw3t6Mw%2BKVclXmNPQQ5yPtw4UMkc%2F%2FarA56OBJkozjCQVBQ5xSJ3ft0QpNxVkWxdZXpr8xbCA7o0TY0HqyblmpyJXnk2V0vu9mXv%2BZUpCL8qpf%2B58CjSsqVcWaEcrurUkn8YcCa4fHZT8t4Xd3TK%2F3IyCeCvKWa5R0Hn25RGXdTxaFWZ1aYpPHuOa15DnNe3kYjS3XXToRjxd57y8&X-Amz-Signature=391979383b8f786bbc4ebc93c67a2f9760572d0c5c9da5e1ed8e6220093a7524&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PKKWN4O%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXJ%2BEu0Nj5uK9gyRROd9d3xq%2Fnd7VYYC6ufiWY70RofAiAPN5tBYuVIOwrIX1tfj198iH8PxdnA9y2Bd1O%2BNGui8yr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMtOlZFL%2BDXG3B8S3QKtwDNDsaFf4ay5HJAnemhP%2B1iopB%2FM%2BOuCxtIPmoQwYMmSg0xR9WG45F4L01fhBJMyFrzoxMh1bPTxkem44bApK40qMfz7OgaE1%2BmW1ZYMKRBaGudg6gsMN77LTD3bcU3K3A%2Fnwe8sFCj6Cwf%2FubldyjQuLx7JhfwjvKoikdAY2RHtrtDqMB5oHbg0YhV34515kTQFiKcYXfB5%2BTrUQVPTL80Vd7FLaf8n0HRqbbRjFzWeYbtLGy6PY%2BsKb7UkRqVihavgNNL8lcMqO6PZ%2FnHVpJG7fJSpUjgIjPqtrOGC4wYOX6imqDr%2B%2FZM5Ffy9gd3EI%2Fl1gakxoQWeN5MTIFh%2BXFtwTzXmkyy3ZIojuyd52yVNytjM4dmu09deFG3C9Vp7D9VYz6QNN66P%2Bg9Yu7WVyS6BWfp8wwKTwyGA2KH0LfXq7doIXEpnD9VJWGLIRN3vwqHRR0Opgs%2B13yAicSimtoujR4kn8rBGei%2FKvXCdu1TbFqwPNS662wK%2BCLxg82YDTz2uyTXvZYJl3siWfog9T0BDCaC1Lkl3XhPXE5JGXk2RQFrGog0QxJyFSIYUH4Qhd1J%2Fgdd1%2FLhZkle8s0XbgFVK%2FuZkDufyXZcXicc6m29GvJegcmGMflFJA8I7kwmYz1xAY6pgGLsaE8jPeq0iKUw3t6Mw%2BKVclXmNPQQ5yPtw4UMkc%2F%2FarA56OBJkozjCQVBQ5xSJ3ft0QpNxVkWxdZXpr8xbCA7o0TY0HqyblmpyJXnk2V0vu9mXv%2BZUpCL8qpf%2B58CjSsqVcWaEcrurUkn8YcCa4fHZT8t4Xd3TK%2F3IyCeCvKWa5R0Hn25RGXdTxaFWZ1aYpPHuOa15DnNe3kYjS3XXToRjxd57y8&X-Amz-Signature=f788530859ac8390ebeba8137eb91e0b86498ac17de6acaabf32ad3f058ec1bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PKKWN4O%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXJ%2BEu0Nj5uK9gyRROd9d3xq%2Fnd7VYYC6ufiWY70RofAiAPN5tBYuVIOwrIX1tfj198iH8PxdnA9y2Bd1O%2BNGui8yr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMtOlZFL%2BDXG3B8S3QKtwDNDsaFf4ay5HJAnemhP%2B1iopB%2FM%2BOuCxtIPmoQwYMmSg0xR9WG45F4L01fhBJMyFrzoxMh1bPTxkem44bApK40qMfz7OgaE1%2BmW1ZYMKRBaGudg6gsMN77LTD3bcU3K3A%2Fnwe8sFCj6Cwf%2FubldyjQuLx7JhfwjvKoikdAY2RHtrtDqMB5oHbg0YhV34515kTQFiKcYXfB5%2BTrUQVPTL80Vd7FLaf8n0HRqbbRjFzWeYbtLGy6PY%2BsKb7UkRqVihavgNNL8lcMqO6PZ%2FnHVpJG7fJSpUjgIjPqtrOGC4wYOX6imqDr%2B%2FZM5Ffy9gd3EI%2Fl1gakxoQWeN5MTIFh%2BXFtwTzXmkyy3ZIojuyd52yVNytjM4dmu09deFG3C9Vp7D9VYz6QNN66P%2Bg9Yu7WVyS6BWfp8wwKTwyGA2KH0LfXq7doIXEpnD9VJWGLIRN3vwqHRR0Opgs%2B13yAicSimtoujR4kn8rBGei%2FKvXCdu1TbFqwPNS662wK%2BCLxg82YDTz2uyTXvZYJl3siWfog9T0BDCaC1Lkl3XhPXE5JGXk2RQFrGog0QxJyFSIYUH4Qhd1J%2Fgdd1%2FLhZkle8s0XbgFVK%2FuZkDufyXZcXicc6m29GvJegcmGMflFJA8I7kwmYz1xAY6pgGLsaE8jPeq0iKUw3t6Mw%2BKVclXmNPQQ5yPtw4UMkc%2F%2FarA56OBJkozjCQVBQ5xSJ3ft0QpNxVkWxdZXpr8xbCA7o0TY0HqyblmpyJXnk2V0vu9mXv%2BZUpCL8qpf%2B58CjSsqVcWaEcrurUkn8YcCa4fHZT8t4Xd3TK%2F3IyCeCvKWa5R0Hn25RGXdTxaFWZ1aYpPHuOa15DnNe3kYjS3XXToRjxd57y8&X-Amz-Signature=919198e36b967215b897402cab9601e235a70ec60bf300f7f0e1c6d107979efc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PKKWN4O%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXJ%2BEu0Nj5uK9gyRROd9d3xq%2Fnd7VYYC6ufiWY70RofAiAPN5tBYuVIOwrIX1tfj198iH8PxdnA9y2Bd1O%2BNGui8yr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMtOlZFL%2BDXG3B8S3QKtwDNDsaFf4ay5HJAnemhP%2B1iopB%2FM%2BOuCxtIPmoQwYMmSg0xR9WG45F4L01fhBJMyFrzoxMh1bPTxkem44bApK40qMfz7OgaE1%2BmW1ZYMKRBaGudg6gsMN77LTD3bcU3K3A%2Fnwe8sFCj6Cwf%2FubldyjQuLx7JhfwjvKoikdAY2RHtrtDqMB5oHbg0YhV34515kTQFiKcYXfB5%2BTrUQVPTL80Vd7FLaf8n0HRqbbRjFzWeYbtLGy6PY%2BsKb7UkRqVihavgNNL8lcMqO6PZ%2FnHVpJG7fJSpUjgIjPqtrOGC4wYOX6imqDr%2B%2FZM5Ffy9gd3EI%2Fl1gakxoQWeN5MTIFh%2BXFtwTzXmkyy3ZIojuyd52yVNytjM4dmu09deFG3C9Vp7D9VYz6QNN66P%2Bg9Yu7WVyS6BWfp8wwKTwyGA2KH0LfXq7doIXEpnD9VJWGLIRN3vwqHRR0Opgs%2B13yAicSimtoujR4kn8rBGei%2FKvXCdu1TbFqwPNS662wK%2BCLxg82YDTz2uyTXvZYJl3siWfog9T0BDCaC1Lkl3XhPXE5JGXk2RQFrGog0QxJyFSIYUH4Qhd1J%2Fgdd1%2FLhZkle8s0XbgFVK%2FuZkDufyXZcXicc6m29GvJegcmGMflFJA8I7kwmYz1xAY6pgGLsaE8jPeq0iKUw3t6Mw%2BKVclXmNPQQ5yPtw4UMkc%2F%2FarA56OBJkozjCQVBQ5xSJ3ft0QpNxVkWxdZXpr8xbCA7o0TY0HqyblmpyJXnk2V0vu9mXv%2BZUpCL8qpf%2B58CjSsqVcWaEcrurUkn8YcCa4fHZT8t4Xd3TK%2F3IyCeCvKWa5R0Hn25RGXdTxaFWZ1aYpPHuOa15DnNe3kYjS3XXToRjxd57y8&X-Amz-Signature=a7cdde2f5540e4ebc747deefce1069cee842f01f09dc6f2271451e631a54754a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PKKWN4O%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXJ%2BEu0Nj5uK9gyRROd9d3xq%2Fnd7VYYC6ufiWY70RofAiAPN5tBYuVIOwrIX1tfj198iH8PxdnA9y2Bd1O%2BNGui8yr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMtOlZFL%2BDXG3B8S3QKtwDNDsaFf4ay5HJAnemhP%2B1iopB%2FM%2BOuCxtIPmoQwYMmSg0xR9WG45F4L01fhBJMyFrzoxMh1bPTxkem44bApK40qMfz7OgaE1%2BmW1ZYMKRBaGudg6gsMN77LTD3bcU3K3A%2Fnwe8sFCj6Cwf%2FubldyjQuLx7JhfwjvKoikdAY2RHtrtDqMB5oHbg0YhV34515kTQFiKcYXfB5%2BTrUQVPTL80Vd7FLaf8n0HRqbbRjFzWeYbtLGy6PY%2BsKb7UkRqVihavgNNL8lcMqO6PZ%2FnHVpJG7fJSpUjgIjPqtrOGC4wYOX6imqDr%2B%2FZM5Ffy9gd3EI%2Fl1gakxoQWeN5MTIFh%2BXFtwTzXmkyy3ZIojuyd52yVNytjM4dmu09deFG3C9Vp7D9VYz6QNN66P%2Bg9Yu7WVyS6BWfp8wwKTwyGA2KH0LfXq7doIXEpnD9VJWGLIRN3vwqHRR0Opgs%2B13yAicSimtoujR4kn8rBGei%2FKvXCdu1TbFqwPNS662wK%2BCLxg82YDTz2uyTXvZYJl3siWfog9T0BDCaC1Lkl3XhPXE5JGXk2RQFrGog0QxJyFSIYUH4Qhd1J%2Fgdd1%2FLhZkle8s0XbgFVK%2FuZkDufyXZcXicc6m29GvJegcmGMflFJA8I7kwmYz1xAY6pgGLsaE8jPeq0iKUw3t6Mw%2BKVclXmNPQQ5yPtw4UMkc%2F%2FarA56OBJkozjCQVBQ5xSJ3ft0QpNxVkWxdZXpr8xbCA7o0TY0HqyblmpyJXnk2V0vu9mXv%2BZUpCL8qpf%2B58CjSsqVcWaEcrurUkn8YcCa4fHZT8t4Xd3TK%2F3IyCeCvKWa5R0Hn25RGXdTxaFWZ1aYpPHuOa15DnNe3kYjS3XXToRjxd57y8&X-Amz-Signature=30e74f4484b56db2c3fd207fae359896080fecf0850a2e5414c7a5be6dcda8ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PKKWN4O%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXJ%2BEu0Nj5uK9gyRROd9d3xq%2Fnd7VYYC6ufiWY70RofAiAPN5tBYuVIOwrIX1tfj198iH8PxdnA9y2Bd1O%2BNGui8yr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMtOlZFL%2BDXG3B8S3QKtwDNDsaFf4ay5HJAnemhP%2B1iopB%2FM%2BOuCxtIPmoQwYMmSg0xR9WG45F4L01fhBJMyFrzoxMh1bPTxkem44bApK40qMfz7OgaE1%2BmW1ZYMKRBaGudg6gsMN77LTD3bcU3K3A%2Fnwe8sFCj6Cwf%2FubldyjQuLx7JhfwjvKoikdAY2RHtrtDqMB5oHbg0YhV34515kTQFiKcYXfB5%2BTrUQVPTL80Vd7FLaf8n0HRqbbRjFzWeYbtLGy6PY%2BsKb7UkRqVihavgNNL8lcMqO6PZ%2FnHVpJG7fJSpUjgIjPqtrOGC4wYOX6imqDr%2B%2FZM5Ffy9gd3EI%2Fl1gakxoQWeN5MTIFh%2BXFtwTzXmkyy3ZIojuyd52yVNytjM4dmu09deFG3C9Vp7D9VYz6QNN66P%2Bg9Yu7WVyS6BWfp8wwKTwyGA2KH0LfXq7doIXEpnD9VJWGLIRN3vwqHRR0Opgs%2B13yAicSimtoujR4kn8rBGei%2FKvXCdu1TbFqwPNS662wK%2BCLxg82YDTz2uyTXvZYJl3siWfog9T0BDCaC1Lkl3XhPXE5JGXk2RQFrGog0QxJyFSIYUH4Qhd1J%2Fgdd1%2FLhZkle8s0XbgFVK%2FuZkDufyXZcXicc6m29GvJegcmGMflFJA8I7kwmYz1xAY6pgGLsaE8jPeq0iKUw3t6Mw%2BKVclXmNPQQ5yPtw4UMkc%2F%2FarA56OBJkozjCQVBQ5xSJ3ft0QpNxVkWxdZXpr8xbCA7o0TY0HqyblmpyJXnk2V0vu9mXv%2BZUpCL8qpf%2B58CjSsqVcWaEcrurUkn8YcCa4fHZT8t4Xd3TK%2F3IyCeCvKWa5R0Hn25RGXdTxaFWZ1aYpPHuOa15DnNe3kYjS3XXToRjxd57y8&X-Amz-Signature=ceba5c6a18134d22ec61aded58e3b9380bb599a0f65c8b450116d911d27addb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PKKWN4O%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXJ%2BEu0Nj5uK9gyRROd9d3xq%2Fnd7VYYC6ufiWY70RofAiAPN5tBYuVIOwrIX1tfj198iH8PxdnA9y2Bd1O%2BNGui8yr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMtOlZFL%2BDXG3B8S3QKtwDNDsaFf4ay5HJAnemhP%2B1iopB%2FM%2BOuCxtIPmoQwYMmSg0xR9WG45F4L01fhBJMyFrzoxMh1bPTxkem44bApK40qMfz7OgaE1%2BmW1ZYMKRBaGudg6gsMN77LTD3bcU3K3A%2Fnwe8sFCj6Cwf%2FubldyjQuLx7JhfwjvKoikdAY2RHtrtDqMB5oHbg0YhV34515kTQFiKcYXfB5%2BTrUQVPTL80Vd7FLaf8n0HRqbbRjFzWeYbtLGy6PY%2BsKb7UkRqVihavgNNL8lcMqO6PZ%2FnHVpJG7fJSpUjgIjPqtrOGC4wYOX6imqDr%2B%2FZM5Ffy9gd3EI%2Fl1gakxoQWeN5MTIFh%2BXFtwTzXmkyy3ZIojuyd52yVNytjM4dmu09deFG3C9Vp7D9VYz6QNN66P%2Bg9Yu7WVyS6BWfp8wwKTwyGA2KH0LfXq7doIXEpnD9VJWGLIRN3vwqHRR0Opgs%2B13yAicSimtoujR4kn8rBGei%2FKvXCdu1TbFqwPNS662wK%2BCLxg82YDTz2uyTXvZYJl3siWfog9T0BDCaC1Lkl3XhPXE5JGXk2RQFrGog0QxJyFSIYUH4Qhd1J%2Fgdd1%2FLhZkle8s0XbgFVK%2FuZkDufyXZcXicc6m29GvJegcmGMflFJA8I7kwmYz1xAY6pgGLsaE8jPeq0iKUw3t6Mw%2BKVclXmNPQQ5yPtw4UMkc%2F%2FarA56OBJkozjCQVBQ5xSJ3ft0QpNxVkWxdZXpr8xbCA7o0TY0HqyblmpyJXnk2V0vu9mXv%2BZUpCL8qpf%2B58CjSsqVcWaEcrurUkn8YcCa4fHZT8t4Xd3TK%2F3IyCeCvKWa5R0Hn25RGXdTxaFWZ1aYpPHuOa15DnNe3kYjS3XXToRjxd57y8&X-Amz-Signature=fb6c5376734d7dbfe0dce1be61f27885e73df513d6d5fd39c5bde90517533f09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PKKWN4O%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXJ%2BEu0Nj5uK9gyRROd9d3xq%2Fnd7VYYC6ufiWY70RofAiAPN5tBYuVIOwrIX1tfj198iH8PxdnA9y2Bd1O%2BNGui8yr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMtOlZFL%2BDXG3B8S3QKtwDNDsaFf4ay5HJAnemhP%2B1iopB%2FM%2BOuCxtIPmoQwYMmSg0xR9WG45F4L01fhBJMyFrzoxMh1bPTxkem44bApK40qMfz7OgaE1%2BmW1ZYMKRBaGudg6gsMN77LTD3bcU3K3A%2Fnwe8sFCj6Cwf%2FubldyjQuLx7JhfwjvKoikdAY2RHtrtDqMB5oHbg0YhV34515kTQFiKcYXfB5%2BTrUQVPTL80Vd7FLaf8n0HRqbbRjFzWeYbtLGy6PY%2BsKb7UkRqVihavgNNL8lcMqO6PZ%2FnHVpJG7fJSpUjgIjPqtrOGC4wYOX6imqDr%2B%2FZM5Ffy9gd3EI%2Fl1gakxoQWeN5MTIFh%2BXFtwTzXmkyy3ZIojuyd52yVNytjM4dmu09deFG3C9Vp7D9VYz6QNN66P%2Bg9Yu7WVyS6BWfp8wwKTwyGA2KH0LfXq7doIXEpnD9VJWGLIRN3vwqHRR0Opgs%2B13yAicSimtoujR4kn8rBGei%2FKvXCdu1TbFqwPNS662wK%2BCLxg82YDTz2uyTXvZYJl3siWfog9T0BDCaC1Lkl3XhPXE5JGXk2RQFrGog0QxJyFSIYUH4Qhd1J%2Fgdd1%2FLhZkle8s0XbgFVK%2FuZkDufyXZcXicc6m29GvJegcmGMflFJA8I7kwmYz1xAY6pgGLsaE8jPeq0iKUw3t6Mw%2BKVclXmNPQQ5yPtw4UMkc%2F%2FarA56OBJkozjCQVBQ5xSJ3ft0QpNxVkWxdZXpr8xbCA7o0TY0HqyblmpyJXnk2V0vu9mXv%2BZUpCL8qpf%2B58CjSsqVcWaEcrurUkn8YcCa4fHZT8t4Xd3TK%2F3IyCeCvKWa5R0Hn25RGXdTxaFWZ1aYpPHuOa15DnNe3kYjS3XXToRjxd57y8&X-Amz-Signature=ff175a8b510f337e796aba969e952c9a8ab64c1f8bab73f23432841fd7e0a3c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PKKWN4O%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXJ%2BEu0Nj5uK9gyRROd9d3xq%2Fnd7VYYC6ufiWY70RofAiAPN5tBYuVIOwrIX1tfj198iH8PxdnA9y2Bd1O%2BNGui8yr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMtOlZFL%2BDXG3B8S3QKtwDNDsaFf4ay5HJAnemhP%2B1iopB%2FM%2BOuCxtIPmoQwYMmSg0xR9WG45F4L01fhBJMyFrzoxMh1bPTxkem44bApK40qMfz7OgaE1%2BmW1ZYMKRBaGudg6gsMN77LTD3bcU3K3A%2Fnwe8sFCj6Cwf%2FubldyjQuLx7JhfwjvKoikdAY2RHtrtDqMB5oHbg0YhV34515kTQFiKcYXfB5%2BTrUQVPTL80Vd7FLaf8n0HRqbbRjFzWeYbtLGy6PY%2BsKb7UkRqVihavgNNL8lcMqO6PZ%2FnHVpJG7fJSpUjgIjPqtrOGC4wYOX6imqDr%2B%2FZM5Ffy9gd3EI%2Fl1gakxoQWeN5MTIFh%2BXFtwTzXmkyy3ZIojuyd52yVNytjM4dmu09deFG3C9Vp7D9VYz6QNN66P%2Bg9Yu7WVyS6BWfp8wwKTwyGA2KH0LfXq7doIXEpnD9VJWGLIRN3vwqHRR0Opgs%2B13yAicSimtoujR4kn8rBGei%2FKvXCdu1TbFqwPNS662wK%2BCLxg82YDTz2uyTXvZYJl3siWfog9T0BDCaC1Lkl3XhPXE5JGXk2RQFrGog0QxJyFSIYUH4Qhd1J%2Fgdd1%2FLhZkle8s0XbgFVK%2FuZkDufyXZcXicc6m29GvJegcmGMflFJA8I7kwmYz1xAY6pgGLsaE8jPeq0iKUw3t6Mw%2BKVclXmNPQQ5yPtw4UMkc%2F%2FarA56OBJkozjCQVBQ5xSJ3ft0QpNxVkWxdZXpr8xbCA7o0TY0HqyblmpyJXnk2V0vu9mXv%2BZUpCL8qpf%2B58CjSsqVcWaEcrurUkn8YcCa4fHZT8t4Xd3TK%2F3IyCeCvKWa5R0Hn25RGXdTxaFWZ1aYpPHuOa15DnNe3kYjS3XXToRjxd57y8&X-Amz-Signature=06457b81fa88f9becd737622a8711651a9b1a6acfc50a76bc64d9b85d03f94a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PKKWN4O%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXJ%2BEu0Nj5uK9gyRROd9d3xq%2Fnd7VYYC6ufiWY70RofAiAPN5tBYuVIOwrIX1tfj198iH8PxdnA9y2Bd1O%2BNGui8yr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMtOlZFL%2BDXG3B8S3QKtwDNDsaFf4ay5HJAnemhP%2B1iopB%2FM%2BOuCxtIPmoQwYMmSg0xR9WG45F4L01fhBJMyFrzoxMh1bPTxkem44bApK40qMfz7OgaE1%2BmW1ZYMKRBaGudg6gsMN77LTD3bcU3K3A%2Fnwe8sFCj6Cwf%2FubldyjQuLx7JhfwjvKoikdAY2RHtrtDqMB5oHbg0YhV34515kTQFiKcYXfB5%2BTrUQVPTL80Vd7FLaf8n0HRqbbRjFzWeYbtLGy6PY%2BsKb7UkRqVihavgNNL8lcMqO6PZ%2FnHVpJG7fJSpUjgIjPqtrOGC4wYOX6imqDr%2B%2FZM5Ffy9gd3EI%2Fl1gakxoQWeN5MTIFh%2BXFtwTzXmkyy3ZIojuyd52yVNytjM4dmu09deFG3C9Vp7D9VYz6QNN66P%2Bg9Yu7WVyS6BWfp8wwKTwyGA2KH0LfXq7doIXEpnD9VJWGLIRN3vwqHRR0Opgs%2B13yAicSimtoujR4kn8rBGei%2FKvXCdu1TbFqwPNS662wK%2BCLxg82YDTz2uyTXvZYJl3siWfog9T0BDCaC1Lkl3XhPXE5JGXk2RQFrGog0QxJyFSIYUH4Qhd1J%2Fgdd1%2FLhZkle8s0XbgFVK%2FuZkDufyXZcXicc6m29GvJegcmGMflFJA8I7kwmYz1xAY6pgGLsaE8jPeq0iKUw3t6Mw%2BKVclXmNPQQ5yPtw4UMkc%2F%2FarA56OBJkozjCQVBQ5xSJ3ft0QpNxVkWxdZXpr8xbCA7o0TY0HqyblmpyJXnk2V0vu9mXv%2BZUpCL8qpf%2B58CjSsqVcWaEcrurUkn8YcCa4fHZT8t4Xd3TK%2F3IyCeCvKWa5R0Hn25RGXdTxaFWZ1aYpPHuOa15DnNe3kYjS3XXToRjxd57y8&X-Amz-Signature=6d0c1712c8c5dfeab2b3a9784010b6a14ef65939976d160ab7d081c457f39b4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PKKWN4O%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXJ%2BEu0Nj5uK9gyRROd9d3xq%2Fnd7VYYC6ufiWY70RofAiAPN5tBYuVIOwrIX1tfj198iH8PxdnA9y2Bd1O%2BNGui8yr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMtOlZFL%2BDXG3B8S3QKtwDNDsaFf4ay5HJAnemhP%2B1iopB%2FM%2BOuCxtIPmoQwYMmSg0xR9WG45F4L01fhBJMyFrzoxMh1bPTxkem44bApK40qMfz7OgaE1%2BmW1ZYMKRBaGudg6gsMN77LTD3bcU3K3A%2Fnwe8sFCj6Cwf%2FubldyjQuLx7JhfwjvKoikdAY2RHtrtDqMB5oHbg0YhV34515kTQFiKcYXfB5%2BTrUQVPTL80Vd7FLaf8n0HRqbbRjFzWeYbtLGy6PY%2BsKb7UkRqVihavgNNL8lcMqO6PZ%2FnHVpJG7fJSpUjgIjPqtrOGC4wYOX6imqDr%2B%2FZM5Ffy9gd3EI%2Fl1gakxoQWeN5MTIFh%2BXFtwTzXmkyy3ZIojuyd52yVNytjM4dmu09deFG3C9Vp7D9VYz6QNN66P%2Bg9Yu7WVyS6BWfp8wwKTwyGA2KH0LfXq7doIXEpnD9VJWGLIRN3vwqHRR0Opgs%2B13yAicSimtoujR4kn8rBGei%2FKvXCdu1TbFqwPNS662wK%2BCLxg82YDTz2uyTXvZYJl3siWfog9T0BDCaC1Lkl3XhPXE5JGXk2RQFrGog0QxJyFSIYUH4Qhd1J%2Fgdd1%2FLhZkle8s0XbgFVK%2FuZkDufyXZcXicc6m29GvJegcmGMflFJA8I7kwmYz1xAY6pgGLsaE8jPeq0iKUw3t6Mw%2BKVclXmNPQQ5yPtw4UMkc%2F%2FarA56OBJkozjCQVBQ5xSJ3ft0QpNxVkWxdZXpr8xbCA7o0TY0HqyblmpyJXnk2V0vu9mXv%2BZUpCL8qpf%2B58CjSsqVcWaEcrurUkn8YcCa4fHZT8t4Xd3TK%2F3IyCeCvKWa5R0Hn25RGXdTxaFWZ1aYpPHuOa15DnNe3kYjS3XXToRjxd57y8&X-Amz-Signature=e5f723b07748b595f6bfb153af380dca2d08d58196ff12d68c85aa0df5e9a660&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PKKWN4O%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXJ%2BEu0Nj5uK9gyRROd9d3xq%2Fnd7VYYC6ufiWY70RofAiAPN5tBYuVIOwrIX1tfj198iH8PxdnA9y2Bd1O%2BNGui8yr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMtOlZFL%2BDXG3B8S3QKtwDNDsaFf4ay5HJAnemhP%2B1iopB%2FM%2BOuCxtIPmoQwYMmSg0xR9WG45F4L01fhBJMyFrzoxMh1bPTxkem44bApK40qMfz7OgaE1%2BmW1ZYMKRBaGudg6gsMN77LTD3bcU3K3A%2Fnwe8sFCj6Cwf%2FubldyjQuLx7JhfwjvKoikdAY2RHtrtDqMB5oHbg0YhV34515kTQFiKcYXfB5%2BTrUQVPTL80Vd7FLaf8n0HRqbbRjFzWeYbtLGy6PY%2BsKb7UkRqVihavgNNL8lcMqO6PZ%2FnHVpJG7fJSpUjgIjPqtrOGC4wYOX6imqDr%2B%2FZM5Ffy9gd3EI%2Fl1gakxoQWeN5MTIFh%2BXFtwTzXmkyy3ZIojuyd52yVNytjM4dmu09deFG3C9Vp7D9VYz6QNN66P%2Bg9Yu7WVyS6BWfp8wwKTwyGA2KH0LfXq7doIXEpnD9VJWGLIRN3vwqHRR0Opgs%2B13yAicSimtoujR4kn8rBGei%2FKvXCdu1TbFqwPNS662wK%2BCLxg82YDTz2uyTXvZYJl3siWfog9T0BDCaC1Lkl3XhPXE5JGXk2RQFrGog0QxJyFSIYUH4Qhd1J%2Fgdd1%2FLhZkle8s0XbgFVK%2FuZkDufyXZcXicc6m29GvJegcmGMflFJA8I7kwmYz1xAY6pgGLsaE8jPeq0iKUw3t6Mw%2BKVclXmNPQQ5yPtw4UMkc%2F%2FarA56OBJkozjCQVBQ5xSJ3ft0QpNxVkWxdZXpr8xbCA7o0TY0HqyblmpyJXnk2V0vu9mXv%2BZUpCL8qpf%2B58CjSsqVcWaEcrurUkn8YcCa4fHZT8t4Xd3TK%2F3IyCeCvKWa5R0Hn25RGXdTxaFWZ1aYpPHuOa15DnNe3kYjS3XXToRjxd57y8&X-Amz-Signature=a3905eb06a74a8e75ef9663e8fe01fdba358e4f8ebbc9ca2943091377e83d6f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PKKWN4O%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXJ%2BEu0Nj5uK9gyRROd9d3xq%2Fnd7VYYC6ufiWY70RofAiAPN5tBYuVIOwrIX1tfj198iH8PxdnA9y2Bd1O%2BNGui8yr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMtOlZFL%2BDXG3B8S3QKtwDNDsaFf4ay5HJAnemhP%2B1iopB%2FM%2BOuCxtIPmoQwYMmSg0xR9WG45F4L01fhBJMyFrzoxMh1bPTxkem44bApK40qMfz7OgaE1%2BmW1ZYMKRBaGudg6gsMN77LTD3bcU3K3A%2Fnwe8sFCj6Cwf%2FubldyjQuLx7JhfwjvKoikdAY2RHtrtDqMB5oHbg0YhV34515kTQFiKcYXfB5%2BTrUQVPTL80Vd7FLaf8n0HRqbbRjFzWeYbtLGy6PY%2BsKb7UkRqVihavgNNL8lcMqO6PZ%2FnHVpJG7fJSpUjgIjPqtrOGC4wYOX6imqDr%2B%2FZM5Ffy9gd3EI%2Fl1gakxoQWeN5MTIFh%2BXFtwTzXmkyy3ZIojuyd52yVNytjM4dmu09deFG3C9Vp7D9VYz6QNN66P%2Bg9Yu7WVyS6BWfp8wwKTwyGA2KH0LfXq7doIXEpnD9VJWGLIRN3vwqHRR0Opgs%2B13yAicSimtoujR4kn8rBGei%2FKvXCdu1TbFqwPNS662wK%2BCLxg82YDTz2uyTXvZYJl3siWfog9T0BDCaC1Lkl3XhPXE5JGXk2RQFrGog0QxJyFSIYUH4Qhd1J%2Fgdd1%2FLhZkle8s0XbgFVK%2FuZkDufyXZcXicc6m29GvJegcmGMflFJA8I7kwmYz1xAY6pgGLsaE8jPeq0iKUw3t6Mw%2BKVclXmNPQQ5yPtw4UMkc%2F%2FarA56OBJkozjCQVBQ5xSJ3ft0QpNxVkWxdZXpr8xbCA7o0TY0HqyblmpyJXnk2V0vu9mXv%2BZUpCL8qpf%2B58CjSsqVcWaEcrurUkn8YcCa4fHZT8t4Xd3TK%2F3IyCeCvKWa5R0Hn25RGXdTxaFWZ1aYpPHuOa15DnNe3kYjS3XXToRjxd57y8&X-Amz-Signature=e054fab2ea79fffd7b102ce9ec1e72048aece65bc9ed95134bab8bb61864749a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PKKWN4O%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFXJ%2BEu0Nj5uK9gyRROd9d3xq%2Fnd7VYYC6ufiWY70RofAiAPN5tBYuVIOwrIX1tfj198iH8PxdnA9y2Bd1O%2BNGui8yr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMtOlZFL%2BDXG3B8S3QKtwDNDsaFf4ay5HJAnemhP%2B1iopB%2FM%2BOuCxtIPmoQwYMmSg0xR9WG45F4L01fhBJMyFrzoxMh1bPTxkem44bApK40qMfz7OgaE1%2BmW1ZYMKRBaGudg6gsMN77LTD3bcU3K3A%2Fnwe8sFCj6Cwf%2FubldyjQuLx7JhfwjvKoikdAY2RHtrtDqMB5oHbg0YhV34515kTQFiKcYXfB5%2BTrUQVPTL80Vd7FLaf8n0HRqbbRjFzWeYbtLGy6PY%2BsKb7UkRqVihavgNNL8lcMqO6PZ%2FnHVpJG7fJSpUjgIjPqtrOGC4wYOX6imqDr%2B%2FZM5Ffy9gd3EI%2Fl1gakxoQWeN5MTIFh%2BXFtwTzXmkyy3ZIojuyd52yVNytjM4dmu09deFG3C9Vp7D9VYz6QNN66P%2Bg9Yu7WVyS6BWfp8wwKTwyGA2KH0LfXq7doIXEpnD9VJWGLIRN3vwqHRR0Opgs%2B13yAicSimtoujR4kn8rBGei%2FKvXCdu1TbFqwPNS662wK%2BCLxg82YDTz2uyTXvZYJl3siWfog9T0BDCaC1Lkl3XhPXE5JGXk2RQFrGog0QxJyFSIYUH4Qhd1J%2Fgdd1%2FLhZkle8s0XbgFVK%2FuZkDufyXZcXicc6m29GvJegcmGMflFJA8I7kwmYz1xAY6pgGLsaE8jPeq0iKUw3t6Mw%2BKVclXmNPQQ5yPtw4UMkc%2F%2FarA56OBJkozjCQVBQ5xSJ3ft0QpNxVkWxdZXpr8xbCA7o0TY0HqyblmpyJXnk2V0vu9mXv%2BZUpCL8qpf%2B58CjSsqVcWaEcrurUkn8YcCa4fHZT8t4Xd3TK%2F3IyCeCvKWa5R0Hn25RGXdTxaFWZ1aYpPHuOa15DnNe3kYjS3XXToRjxd57y8&X-Amz-Signature=19164e4a3879fd3d645d764693a0c78cc6727b03613637fc7f71ce697270feb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
