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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQZTOH6Z%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxO5hQq7IiGP634tsxXRvRNPyYMacRn7PmKDZBHhYgJQIhAK6mKd6MBSjNzsFqTAkKcNNGajfymawliqvMbNKStwUTKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPtfzqHKpUmGiuptcq3ANTnrSCLL1CJSrHkr5h5u%2BJ88ClKhcsAu56REhCxMOeZBJHeNmKzm6t8hwxH5rhbxiASUxvFBIZ8pFOblxSxnWuH4VMpWIzlNYm8qNnZDQXK4XFkysBg0idtE%2B30rN%2BIiNT5Y%2BV2p8phRffNlJqMOmAXSzvzy5pFFMMAAe7XDT5oopwdK4JZqagSXWZ24VZi%2FvouyRnLG6nFE1Jz9MG1QKJoK6l16qSVgybJ3lj2WBni8Kx%2BXH2mlbQyOGPfgqzNJ2YtwYlcq6GcEQR%2BmcFFvEtFc2WP%2BnC1QoqRgFKxaxXN0DmT2zy%2Bfc2Gfz4dhCU3HaAS9RWlSLXs5VD7XmFyd2zPvpI7ykCXAWksa8xpmTnyconYbb8asQX%2BZj1YWZmi0fetLtjc8xj%2B1YOkABGJ2uWD3BzgdW5a%2FxwVrUBK3UW9HTKwDwvB7SSo%2BRr8aY7hL8BuR0qK4TrVuY2fMbnTk0rz9xg25ETHa4fn3zaj9c9Y%2FD9L8w3hyJy7ey01h6Oyv2yjCOXsafVZtATOQjCQFFSpezbySXTUbefwreNXo7w%2BkF5%2F4ygruUn8KIQ7cRMZ6Kl0I1xXtI2skqorkmfQwD0nbOK%2B7bidZRZknMCMmHjkE33FzhXTufAaJdLnzDr39PUBjqkAY156MsLjZiy1EWgk9UZDv2YWDFeyynoS8lI7wuDFGQcbVhys9Qxm7tTmS6vofqNOjycDPKTL3%2F%2BZ2%2FzAXezKseDnRSm7qJKRi0f4F%2BceHWSOvG7eqrWDCfc%2BFJkCL9DmvBTo%2F5%2Fqp8x4PfaQZOK0AGABd4MOK17r0YXZhpF%2BszLR774pbG198RBYzPJIzcQCGT2MMSrS4zhEf2lnc2%2F678L43fl&X-Amz-Signature=1c9920661d5709e3975bc831f1954bb9f7244d3d571cd2fb9e31cf539f10f06d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQZTOH6Z%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxO5hQq7IiGP634tsxXRvRNPyYMacRn7PmKDZBHhYgJQIhAK6mKd6MBSjNzsFqTAkKcNNGajfymawliqvMbNKStwUTKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPtfzqHKpUmGiuptcq3ANTnrSCLL1CJSrHkr5h5u%2BJ88ClKhcsAu56REhCxMOeZBJHeNmKzm6t8hwxH5rhbxiASUxvFBIZ8pFOblxSxnWuH4VMpWIzlNYm8qNnZDQXK4XFkysBg0idtE%2B30rN%2BIiNT5Y%2BV2p8phRffNlJqMOmAXSzvzy5pFFMMAAe7XDT5oopwdK4JZqagSXWZ24VZi%2FvouyRnLG6nFE1Jz9MG1QKJoK6l16qSVgybJ3lj2WBni8Kx%2BXH2mlbQyOGPfgqzNJ2YtwYlcq6GcEQR%2BmcFFvEtFc2WP%2BnC1QoqRgFKxaxXN0DmT2zy%2Bfc2Gfz4dhCU3HaAS9RWlSLXs5VD7XmFyd2zPvpI7ykCXAWksa8xpmTnyconYbb8asQX%2BZj1YWZmi0fetLtjc8xj%2B1YOkABGJ2uWD3BzgdW5a%2FxwVrUBK3UW9HTKwDwvB7SSo%2BRr8aY7hL8BuR0qK4TrVuY2fMbnTk0rz9xg25ETHa4fn3zaj9c9Y%2FD9L8w3hyJy7ey01h6Oyv2yjCOXsafVZtATOQjCQFFSpezbySXTUbefwreNXo7w%2BkF5%2F4ygruUn8KIQ7cRMZ6Kl0I1xXtI2skqorkmfQwD0nbOK%2B7bidZRZknMCMmHjkE33FzhXTufAaJdLnzDr39PUBjqkAY156MsLjZiy1EWgk9UZDv2YWDFeyynoS8lI7wuDFGQcbVhys9Qxm7tTmS6vofqNOjycDPKTL3%2F%2BZ2%2FzAXezKseDnRSm7qJKRi0f4F%2BceHWSOvG7eqrWDCfc%2BFJkCL9DmvBTo%2F5%2Fqp8x4PfaQZOK0AGABd4MOK17r0YXZhpF%2BszLR774pbG198RBYzPJIzcQCGT2MMSrS4zhEf2lnc2%2F678L43fl&X-Amz-Signature=c82149eeb69f4d3bccc4ce96adb01a297612f0996fbd52b64f5af8895934d4d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQZTOH6Z%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxO5hQq7IiGP634tsxXRvRNPyYMacRn7PmKDZBHhYgJQIhAK6mKd6MBSjNzsFqTAkKcNNGajfymawliqvMbNKStwUTKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPtfzqHKpUmGiuptcq3ANTnrSCLL1CJSrHkr5h5u%2BJ88ClKhcsAu56REhCxMOeZBJHeNmKzm6t8hwxH5rhbxiASUxvFBIZ8pFOblxSxnWuH4VMpWIzlNYm8qNnZDQXK4XFkysBg0idtE%2B30rN%2BIiNT5Y%2BV2p8phRffNlJqMOmAXSzvzy5pFFMMAAe7XDT5oopwdK4JZqagSXWZ24VZi%2FvouyRnLG6nFE1Jz9MG1QKJoK6l16qSVgybJ3lj2WBni8Kx%2BXH2mlbQyOGPfgqzNJ2YtwYlcq6GcEQR%2BmcFFvEtFc2WP%2BnC1QoqRgFKxaxXN0DmT2zy%2Bfc2Gfz4dhCU3HaAS9RWlSLXs5VD7XmFyd2zPvpI7ykCXAWksa8xpmTnyconYbb8asQX%2BZj1YWZmi0fetLtjc8xj%2B1YOkABGJ2uWD3BzgdW5a%2FxwVrUBK3UW9HTKwDwvB7SSo%2BRr8aY7hL8BuR0qK4TrVuY2fMbnTk0rz9xg25ETHa4fn3zaj9c9Y%2FD9L8w3hyJy7ey01h6Oyv2yjCOXsafVZtATOQjCQFFSpezbySXTUbefwreNXo7w%2BkF5%2F4ygruUn8KIQ7cRMZ6Kl0I1xXtI2skqorkmfQwD0nbOK%2B7bidZRZknMCMmHjkE33FzhXTufAaJdLnzDr39PUBjqkAY156MsLjZiy1EWgk9UZDv2YWDFeyynoS8lI7wuDFGQcbVhys9Qxm7tTmS6vofqNOjycDPKTL3%2F%2BZ2%2FzAXezKseDnRSm7qJKRi0f4F%2BceHWSOvG7eqrWDCfc%2BFJkCL9DmvBTo%2F5%2Fqp8x4PfaQZOK0AGABd4MOK17r0YXZhpF%2BszLR774pbG198RBYzPJIzcQCGT2MMSrS4zhEf2lnc2%2F678L43fl&X-Amz-Signature=2a9efdfe28c42d0928b74890078095e8ee7fb1c322dbdedf4e6d290f95e5ef26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQZTOH6Z%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxO5hQq7IiGP634tsxXRvRNPyYMacRn7PmKDZBHhYgJQIhAK6mKd6MBSjNzsFqTAkKcNNGajfymawliqvMbNKStwUTKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPtfzqHKpUmGiuptcq3ANTnrSCLL1CJSrHkr5h5u%2BJ88ClKhcsAu56REhCxMOeZBJHeNmKzm6t8hwxH5rhbxiASUxvFBIZ8pFOblxSxnWuH4VMpWIzlNYm8qNnZDQXK4XFkysBg0idtE%2B30rN%2BIiNT5Y%2BV2p8phRffNlJqMOmAXSzvzy5pFFMMAAe7XDT5oopwdK4JZqagSXWZ24VZi%2FvouyRnLG6nFE1Jz9MG1QKJoK6l16qSVgybJ3lj2WBni8Kx%2BXH2mlbQyOGPfgqzNJ2YtwYlcq6GcEQR%2BmcFFvEtFc2WP%2BnC1QoqRgFKxaxXN0DmT2zy%2Bfc2Gfz4dhCU3HaAS9RWlSLXs5VD7XmFyd2zPvpI7ykCXAWksa8xpmTnyconYbb8asQX%2BZj1YWZmi0fetLtjc8xj%2B1YOkABGJ2uWD3BzgdW5a%2FxwVrUBK3UW9HTKwDwvB7SSo%2BRr8aY7hL8BuR0qK4TrVuY2fMbnTk0rz9xg25ETHa4fn3zaj9c9Y%2FD9L8w3hyJy7ey01h6Oyv2yjCOXsafVZtATOQjCQFFSpezbySXTUbefwreNXo7w%2BkF5%2F4ygruUn8KIQ7cRMZ6Kl0I1xXtI2skqorkmfQwD0nbOK%2B7bidZRZknMCMmHjkE33FzhXTufAaJdLnzDr39PUBjqkAY156MsLjZiy1EWgk9UZDv2YWDFeyynoS8lI7wuDFGQcbVhys9Qxm7tTmS6vofqNOjycDPKTL3%2F%2BZ2%2FzAXezKseDnRSm7qJKRi0f4F%2BceHWSOvG7eqrWDCfc%2BFJkCL9DmvBTo%2F5%2Fqp8x4PfaQZOK0AGABd4MOK17r0YXZhpF%2BszLR774pbG198RBYzPJIzcQCGT2MMSrS4zhEf2lnc2%2F678L43fl&X-Amz-Signature=7839542e95509a3196c3d1213e71f201543d908e875eefc5c4f12b480f4f6c79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQZTOH6Z%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxO5hQq7IiGP634tsxXRvRNPyYMacRn7PmKDZBHhYgJQIhAK6mKd6MBSjNzsFqTAkKcNNGajfymawliqvMbNKStwUTKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPtfzqHKpUmGiuptcq3ANTnrSCLL1CJSrHkr5h5u%2BJ88ClKhcsAu56REhCxMOeZBJHeNmKzm6t8hwxH5rhbxiASUxvFBIZ8pFOblxSxnWuH4VMpWIzlNYm8qNnZDQXK4XFkysBg0idtE%2B30rN%2BIiNT5Y%2BV2p8phRffNlJqMOmAXSzvzy5pFFMMAAe7XDT5oopwdK4JZqagSXWZ24VZi%2FvouyRnLG6nFE1Jz9MG1QKJoK6l16qSVgybJ3lj2WBni8Kx%2BXH2mlbQyOGPfgqzNJ2YtwYlcq6GcEQR%2BmcFFvEtFc2WP%2BnC1QoqRgFKxaxXN0DmT2zy%2Bfc2Gfz4dhCU3HaAS9RWlSLXs5VD7XmFyd2zPvpI7ykCXAWksa8xpmTnyconYbb8asQX%2BZj1YWZmi0fetLtjc8xj%2B1YOkABGJ2uWD3BzgdW5a%2FxwVrUBK3UW9HTKwDwvB7SSo%2BRr8aY7hL8BuR0qK4TrVuY2fMbnTk0rz9xg25ETHa4fn3zaj9c9Y%2FD9L8w3hyJy7ey01h6Oyv2yjCOXsafVZtATOQjCQFFSpezbySXTUbefwreNXo7w%2BkF5%2F4ygruUn8KIQ7cRMZ6Kl0I1xXtI2skqorkmfQwD0nbOK%2B7bidZRZknMCMmHjkE33FzhXTufAaJdLnzDr39PUBjqkAY156MsLjZiy1EWgk9UZDv2YWDFeyynoS8lI7wuDFGQcbVhys9Qxm7tTmS6vofqNOjycDPKTL3%2F%2BZ2%2FzAXezKseDnRSm7qJKRi0f4F%2BceHWSOvG7eqrWDCfc%2BFJkCL9DmvBTo%2F5%2Fqp8x4PfaQZOK0AGABd4MOK17r0YXZhpF%2BszLR774pbG198RBYzPJIzcQCGT2MMSrS4zhEf2lnc2%2F678L43fl&X-Amz-Signature=d2ca7d9d398a5fbc966b5f7ad6777fe8537aeae408d3efe1ea269bfa7677fc36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQZTOH6Z%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxO5hQq7IiGP634tsxXRvRNPyYMacRn7PmKDZBHhYgJQIhAK6mKd6MBSjNzsFqTAkKcNNGajfymawliqvMbNKStwUTKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPtfzqHKpUmGiuptcq3ANTnrSCLL1CJSrHkr5h5u%2BJ88ClKhcsAu56REhCxMOeZBJHeNmKzm6t8hwxH5rhbxiASUxvFBIZ8pFOblxSxnWuH4VMpWIzlNYm8qNnZDQXK4XFkysBg0idtE%2B30rN%2BIiNT5Y%2BV2p8phRffNlJqMOmAXSzvzy5pFFMMAAe7XDT5oopwdK4JZqagSXWZ24VZi%2FvouyRnLG6nFE1Jz9MG1QKJoK6l16qSVgybJ3lj2WBni8Kx%2BXH2mlbQyOGPfgqzNJ2YtwYlcq6GcEQR%2BmcFFvEtFc2WP%2BnC1QoqRgFKxaxXN0DmT2zy%2Bfc2Gfz4dhCU3HaAS9RWlSLXs5VD7XmFyd2zPvpI7ykCXAWksa8xpmTnyconYbb8asQX%2BZj1YWZmi0fetLtjc8xj%2B1YOkABGJ2uWD3BzgdW5a%2FxwVrUBK3UW9HTKwDwvB7SSo%2BRr8aY7hL8BuR0qK4TrVuY2fMbnTk0rz9xg25ETHa4fn3zaj9c9Y%2FD9L8w3hyJy7ey01h6Oyv2yjCOXsafVZtATOQjCQFFSpezbySXTUbefwreNXo7w%2BkF5%2F4ygruUn8KIQ7cRMZ6Kl0I1xXtI2skqorkmfQwD0nbOK%2B7bidZRZknMCMmHjkE33FzhXTufAaJdLnzDr39PUBjqkAY156MsLjZiy1EWgk9UZDv2YWDFeyynoS8lI7wuDFGQcbVhys9Qxm7tTmS6vofqNOjycDPKTL3%2F%2BZ2%2FzAXezKseDnRSm7qJKRi0f4F%2BceHWSOvG7eqrWDCfc%2BFJkCL9DmvBTo%2F5%2Fqp8x4PfaQZOK0AGABd4MOK17r0YXZhpF%2BszLR774pbG198RBYzPJIzcQCGT2MMSrS4zhEf2lnc2%2F678L43fl&X-Amz-Signature=a3791a0b4c3b176001011714a6ae8396d1cbd59131bb13944441380b014ecfb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQZTOH6Z%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxO5hQq7IiGP634tsxXRvRNPyYMacRn7PmKDZBHhYgJQIhAK6mKd6MBSjNzsFqTAkKcNNGajfymawliqvMbNKStwUTKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPtfzqHKpUmGiuptcq3ANTnrSCLL1CJSrHkr5h5u%2BJ88ClKhcsAu56REhCxMOeZBJHeNmKzm6t8hwxH5rhbxiASUxvFBIZ8pFOblxSxnWuH4VMpWIzlNYm8qNnZDQXK4XFkysBg0idtE%2B30rN%2BIiNT5Y%2BV2p8phRffNlJqMOmAXSzvzy5pFFMMAAe7XDT5oopwdK4JZqagSXWZ24VZi%2FvouyRnLG6nFE1Jz9MG1QKJoK6l16qSVgybJ3lj2WBni8Kx%2BXH2mlbQyOGPfgqzNJ2YtwYlcq6GcEQR%2BmcFFvEtFc2WP%2BnC1QoqRgFKxaxXN0DmT2zy%2Bfc2Gfz4dhCU3HaAS9RWlSLXs5VD7XmFyd2zPvpI7ykCXAWksa8xpmTnyconYbb8asQX%2BZj1YWZmi0fetLtjc8xj%2B1YOkABGJ2uWD3BzgdW5a%2FxwVrUBK3UW9HTKwDwvB7SSo%2BRr8aY7hL8BuR0qK4TrVuY2fMbnTk0rz9xg25ETHa4fn3zaj9c9Y%2FD9L8w3hyJy7ey01h6Oyv2yjCOXsafVZtATOQjCQFFSpezbySXTUbefwreNXo7w%2BkF5%2F4ygruUn8KIQ7cRMZ6Kl0I1xXtI2skqorkmfQwD0nbOK%2B7bidZRZknMCMmHjkE33FzhXTufAaJdLnzDr39PUBjqkAY156MsLjZiy1EWgk9UZDv2YWDFeyynoS8lI7wuDFGQcbVhys9Qxm7tTmS6vofqNOjycDPKTL3%2F%2BZ2%2FzAXezKseDnRSm7qJKRi0f4F%2BceHWSOvG7eqrWDCfc%2BFJkCL9DmvBTo%2F5%2Fqp8x4PfaQZOK0AGABd4MOK17r0YXZhpF%2BszLR774pbG198RBYzPJIzcQCGT2MMSrS4zhEf2lnc2%2F678L43fl&X-Amz-Signature=016377e43e74022c57dad2b3e3ad2aee6e057609d20f0fb73eaf4922247264d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQZTOH6Z%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxO5hQq7IiGP634tsxXRvRNPyYMacRn7PmKDZBHhYgJQIhAK6mKd6MBSjNzsFqTAkKcNNGajfymawliqvMbNKStwUTKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPtfzqHKpUmGiuptcq3ANTnrSCLL1CJSrHkr5h5u%2BJ88ClKhcsAu56REhCxMOeZBJHeNmKzm6t8hwxH5rhbxiASUxvFBIZ8pFOblxSxnWuH4VMpWIzlNYm8qNnZDQXK4XFkysBg0idtE%2B30rN%2BIiNT5Y%2BV2p8phRffNlJqMOmAXSzvzy5pFFMMAAe7XDT5oopwdK4JZqagSXWZ24VZi%2FvouyRnLG6nFE1Jz9MG1QKJoK6l16qSVgybJ3lj2WBni8Kx%2BXH2mlbQyOGPfgqzNJ2YtwYlcq6GcEQR%2BmcFFvEtFc2WP%2BnC1QoqRgFKxaxXN0DmT2zy%2Bfc2Gfz4dhCU3HaAS9RWlSLXs5VD7XmFyd2zPvpI7ykCXAWksa8xpmTnyconYbb8asQX%2BZj1YWZmi0fetLtjc8xj%2B1YOkABGJ2uWD3BzgdW5a%2FxwVrUBK3UW9HTKwDwvB7SSo%2BRr8aY7hL8BuR0qK4TrVuY2fMbnTk0rz9xg25ETHa4fn3zaj9c9Y%2FD9L8w3hyJy7ey01h6Oyv2yjCOXsafVZtATOQjCQFFSpezbySXTUbefwreNXo7w%2BkF5%2F4ygruUn8KIQ7cRMZ6Kl0I1xXtI2skqorkmfQwD0nbOK%2B7bidZRZknMCMmHjkE33FzhXTufAaJdLnzDr39PUBjqkAY156MsLjZiy1EWgk9UZDv2YWDFeyynoS8lI7wuDFGQcbVhys9Qxm7tTmS6vofqNOjycDPKTL3%2F%2BZ2%2FzAXezKseDnRSm7qJKRi0f4F%2BceHWSOvG7eqrWDCfc%2BFJkCL9DmvBTo%2F5%2Fqp8x4PfaQZOK0AGABd4MOK17r0YXZhpF%2BszLR774pbG198RBYzPJIzcQCGT2MMSrS4zhEf2lnc2%2F678L43fl&X-Amz-Signature=1aec4eef4eb2113f75531d1665ce16be34a05249d9850026c13da8b3116d81b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQZTOH6Z%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxO5hQq7IiGP634tsxXRvRNPyYMacRn7PmKDZBHhYgJQIhAK6mKd6MBSjNzsFqTAkKcNNGajfymawliqvMbNKStwUTKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPtfzqHKpUmGiuptcq3ANTnrSCLL1CJSrHkr5h5u%2BJ88ClKhcsAu56REhCxMOeZBJHeNmKzm6t8hwxH5rhbxiASUxvFBIZ8pFOblxSxnWuH4VMpWIzlNYm8qNnZDQXK4XFkysBg0idtE%2B30rN%2BIiNT5Y%2BV2p8phRffNlJqMOmAXSzvzy5pFFMMAAe7XDT5oopwdK4JZqagSXWZ24VZi%2FvouyRnLG6nFE1Jz9MG1QKJoK6l16qSVgybJ3lj2WBni8Kx%2BXH2mlbQyOGPfgqzNJ2YtwYlcq6GcEQR%2BmcFFvEtFc2WP%2BnC1QoqRgFKxaxXN0DmT2zy%2Bfc2Gfz4dhCU3HaAS9RWlSLXs5VD7XmFyd2zPvpI7ykCXAWksa8xpmTnyconYbb8asQX%2BZj1YWZmi0fetLtjc8xj%2B1YOkABGJ2uWD3BzgdW5a%2FxwVrUBK3UW9HTKwDwvB7SSo%2BRr8aY7hL8BuR0qK4TrVuY2fMbnTk0rz9xg25ETHa4fn3zaj9c9Y%2FD9L8w3hyJy7ey01h6Oyv2yjCOXsafVZtATOQjCQFFSpezbySXTUbefwreNXo7w%2BkF5%2F4ygruUn8KIQ7cRMZ6Kl0I1xXtI2skqorkmfQwD0nbOK%2B7bidZRZknMCMmHjkE33FzhXTufAaJdLnzDr39PUBjqkAY156MsLjZiy1EWgk9UZDv2YWDFeyynoS8lI7wuDFGQcbVhys9Qxm7tTmS6vofqNOjycDPKTL3%2F%2BZ2%2FzAXezKseDnRSm7qJKRi0f4F%2BceHWSOvG7eqrWDCfc%2BFJkCL9DmvBTo%2F5%2Fqp8x4PfaQZOK0AGABd4MOK17r0YXZhpF%2BszLR774pbG198RBYzPJIzcQCGT2MMSrS4zhEf2lnc2%2F678L43fl&X-Amz-Signature=0b9748f373e43044f03a065e8b469214f677d3b0c7d53aa68efe5dfad27ea993&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQZTOH6Z%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxO5hQq7IiGP634tsxXRvRNPyYMacRn7PmKDZBHhYgJQIhAK6mKd6MBSjNzsFqTAkKcNNGajfymawliqvMbNKStwUTKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPtfzqHKpUmGiuptcq3ANTnrSCLL1CJSrHkr5h5u%2BJ88ClKhcsAu56REhCxMOeZBJHeNmKzm6t8hwxH5rhbxiASUxvFBIZ8pFOblxSxnWuH4VMpWIzlNYm8qNnZDQXK4XFkysBg0idtE%2B30rN%2BIiNT5Y%2BV2p8phRffNlJqMOmAXSzvzy5pFFMMAAe7XDT5oopwdK4JZqagSXWZ24VZi%2FvouyRnLG6nFE1Jz9MG1QKJoK6l16qSVgybJ3lj2WBni8Kx%2BXH2mlbQyOGPfgqzNJ2YtwYlcq6GcEQR%2BmcFFvEtFc2WP%2BnC1QoqRgFKxaxXN0DmT2zy%2Bfc2Gfz4dhCU3HaAS9RWlSLXs5VD7XmFyd2zPvpI7ykCXAWksa8xpmTnyconYbb8asQX%2BZj1YWZmi0fetLtjc8xj%2B1YOkABGJ2uWD3BzgdW5a%2FxwVrUBK3UW9HTKwDwvB7SSo%2BRr8aY7hL8BuR0qK4TrVuY2fMbnTk0rz9xg25ETHa4fn3zaj9c9Y%2FD9L8w3hyJy7ey01h6Oyv2yjCOXsafVZtATOQjCQFFSpezbySXTUbefwreNXo7w%2BkF5%2F4ygruUn8KIQ7cRMZ6Kl0I1xXtI2skqorkmfQwD0nbOK%2B7bidZRZknMCMmHjkE33FzhXTufAaJdLnzDr39PUBjqkAY156MsLjZiy1EWgk9UZDv2YWDFeyynoS8lI7wuDFGQcbVhys9Qxm7tTmS6vofqNOjycDPKTL3%2F%2BZ2%2FzAXezKseDnRSm7qJKRi0f4F%2BceHWSOvG7eqrWDCfc%2BFJkCL9DmvBTo%2F5%2Fqp8x4PfaQZOK0AGABd4MOK17r0YXZhpF%2BszLR774pbG198RBYzPJIzcQCGT2MMSrS4zhEf2lnc2%2F678L43fl&X-Amz-Signature=ccfdbe2ea0788203eb137bd6ec25bf4136ceddf3b1890ee4d2a675e40bff5048&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQZTOH6Z%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxO5hQq7IiGP634tsxXRvRNPyYMacRn7PmKDZBHhYgJQIhAK6mKd6MBSjNzsFqTAkKcNNGajfymawliqvMbNKStwUTKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPtfzqHKpUmGiuptcq3ANTnrSCLL1CJSrHkr5h5u%2BJ88ClKhcsAu56REhCxMOeZBJHeNmKzm6t8hwxH5rhbxiASUxvFBIZ8pFOblxSxnWuH4VMpWIzlNYm8qNnZDQXK4XFkysBg0idtE%2B30rN%2BIiNT5Y%2BV2p8phRffNlJqMOmAXSzvzy5pFFMMAAe7XDT5oopwdK4JZqagSXWZ24VZi%2FvouyRnLG6nFE1Jz9MG1QKJoK6l16qSVgybJ3lj2WBni8Kx%2BXH2mlbQyOGPfgqzNJ2YtwYlcq6GcEQR%2BmcFFvEtFc2WP%2BnC1QoqRgFKxaxXN0DmT2zy%2Bfc2Gfz4dhCU3HaAS9RWlSLXs5VD7XmFyd2zPvpI7ykCXAWksa8xpmTnyconYbb8asQX%2BZj1YWZmi0fetLtjc8xj%2B1YOkABGJ2uWD3BzgdW5a%2FxwVrUBK3UW9HTKwDwvB7SSo%2BRr8aY7hL8BuR0qK4TrVuY2fMbnTk0rz9xg25ETHa4fn3zaj9c9Y%2FD9L8w3hyJy7ey01h6Oyv2yjCOXsafVZtATOQjCQFFSpezbySXTUbefwreNXo7w%2BkF5%2F4ygruUn8KIQ7cRMZ6Kl0I1xXtI2skqorkmfQwD0nbOK%2B7bidZRZknMCMmHjkE33FzhXTufAaJdLnzDr39PUBjqkAY156MsLjZiy1EWgk9UZDv2YWDFeyynoS8lI7wuDFGQcbVhys9Qxm7tTmS6vofqNOjycDPKTL3%2F%2BZ2%2FzAXezKseDnRSm7qJKRi0f4F%2BceHWSOvG7eqrWDCfc%2BFJkCL9DmvBTo%2F5%2Fqp8x4PfaQZOK0AGABd4MOK17r0YXZhpF%2BszLR774pbG198RBYzPJIzcQCGT2MMSrS4zhEf2lnc2%2F678L43fl&X-Amz-Signature=6b70715b4e3786608935b84ca8ada313f75fa55b30700a6c8aa1ec707a7fa4d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQZTOH6Z%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxO5hQq7IiGP634tsxXRvRNPyYMacRn7PmKDZBHhYgJQIhAK6mKd6MBSjNzsFqTAkKcNNGajfymawliqvMbNKStwUTKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPtfzqHKpUmGiuptcq3ANTnrSCLL1CJSrHkr5h5u%2BJ88ClKhcsAu56REhCxMOeZBJHeNmKzm6t8hwxH5rhbxiASUxvFBIZ8pFOblxSxnWuH4VMpWIzlNYm8qNnZDQXK4XFkysBg0idtE%2B30rN%2BIiNT5Y%2BV2p8phRffNlJqMOmAXSzvzy5pFFMMAAe7XDT5oopwdK4JZqagSXWZ24VZi%2FvouyRnLG6nFE1Jz9MG1QKJoK6l16qSVgybJ3lj2WBni8Kx%2BXH2mlbQyOGPfgqzNJ2YtwYlcq6GcEQR%2BmcFFvEtFc2WP%2BnC1QoqRgFKxaxXN0DmT2zy%2Bfc2Gfz4dhCU3HaAS9RWlSLXs5VD7XmFyd2zPvpI7ykCXAWksa8xpmTnyconYbb8asQX%2BZj1YWZmi0fetLtjc8xj%2B1YOkABGJ2uWD3BzgdW5a%2FxwVrUBK3UW9HTKwDwvB7SSo%2BRr8aY7hL8BuR0qK4TrVuY2fMbnTk0rz9xg25ETHa4fn3zaj9c9Y%2FD9L8w3hyJy7ey01h6Oyv2yjCOXsafVZtATOQjCQFFSpezbySXTUbefwreNXo7w%2BkF5%2F4ygruUn8KIQ7cRMZ6Kl0I1xXtI2skqorkmfQwD0nbOK%2B7bidZRZknMCMmHjkE33FzhXTufAaJdLnzDr39PUBjqkAY156MsLjZiy1EWgk9UZDv2YWDFeyynoS8lI7wuDFGQcbVhys9Qxm7tTmS6vofqNOjycDPKTL3%2F%2BZ2%2FzAXezKseDnRSm7qJKRi0f4F%2BceHWSOvG7eqrWDCfc%2BFJkCL9DmvBTo%2F5%2Fqp8x4PfaQZOK0AGABd4MOK17r0YXZhpF%2BszLR774pbG198RBYzPJIzcQCGT2MMSrS4zhEf2lnc2%2F678L43fl&X-Amz-Signature=fabbaf5f305bd24486efc18dc7e3eaa4e3f278577cc0b61ec2be20e60fae804e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQZTOH6Z%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxO5hQq7IiGP634tsxXRvRNPyYMacRn7PmKDZBHhYgJQIhAK6mKd6MBSjNzsFqTAkKcNNGajfymawliqvMbNKStwUTKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPtfzqHKpUmGiuptcq3ANTnrSCLL1CJSrHkr5h5u%2BJ88ClKhcsAu56REhCxMOeZBJHeNmKzm6t8hwxH5rhbxiASUxvFBIZ8pFOblxSxnWuH4VMpWIzlNYm8qNnZDQXK4XFkysBg0idtE%2B30rN%2BIiNT5Y%2BV2p8phRffNlJqMOmAXSzvzy5pFFMMAAe7XDT5oopwdK4JZqagSXWZ24VZi%2FvouyRnLG6nFE1Jz9MG1QKJoK6l16qSVgybJ3lj2WBni8Kx%2BXH2mlbQyOGPfgqzNJ2YtwYlcq6GcEQR%2BmcFFvEtFc2WP%2BnC1QoqRgFKxaxXN0DmT2zy%2Bfc2Gfz4dhCU3HaAS9RWlSLXs5VD7XmFyd2zPvpI7ykCXAWksa8xpmTnyconYbb8asQX%2BZj1YWZmi0fetLtjc8xj%2B1YOkABGJ2uWD3BzgdW5a%2FxwVrUBK3UW9HTKwDwvB7SSo%2BRr8aY7hL8BuR0qK4TrVuY2fMbnTk0rz9xg25ETHa4fn3zaj9c9Y%2FD9L8w3hyJy7ey01h6Oyv2yjCOXsafVZtATOQjCQFFSpezbySXTUbefwreNXo7w%2BkF5%2F4ygruUn8KIQ7cRMZ6Kl0I1xXtI2skqorkmfQwD0nbOK%2B7bidZRZknMCMmHjkE33FzhXTufAaJdLnzDr39PUBjqkAY156MsLjZiy1EWgk9UZDv2YWDFeyynoS8lI7wuDFGQcbVhys9Qxm7tTmS6vofqNOjycDPKTL3%2F%2BZ2%2FzAXezKseDnRSm7qJKRi0f4F%2BceHWSOvG7eqrWDCfc%2BFJkCL9DmvBTo%2F5%2Fqp8x4PfaQZOK0AGABd4MOK17r0YXZhpF%2BszLR774pbG198RBYzPJIzcQCGT2MMSrS4zhEf2lnc2%2F678L43fl&X-Amz-Signature=b8a5db395131ec6bd462c67d5bc94401c0e8f0c1c842cd4f5e8ac619aefd0c91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQZTOH6Z%2F20260831%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260831T040151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxO5hQq7IiGP634tsxXRvRNPyYMacRn7PmKDZBHhYgJQIhAK6mKd6MBSjNzsFqTAkKcNNGajfymawliqvMbNKStwUTKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPtfzqHKpUmGiuptcq3ANTnrSCLL1CJSrHkr5h5u%2BJ88ClKhcsAu56REhCxMOeZBJHeNmKzm6t8hwxH5rhbxiASUxvFBIZ8pFOblxSxnWuH4VMpWIzlNYm8qNnZDQXK4XFkysBg0idtE%2B30rN%2BIiNT5Y%2BV2p8phRffNlJqMOmAXSzvzy5pFFMMAAe7XDT5oopwdK4JZqagSXWZ24VZi%2FvouyRnLG6nFE1Jz9MG1QKJoK6l16qSVgybJ3lj2WBni8Kx%2BXH2mlbQyOGPfgqzNJ2YtwYlcq6GcEQR%2BmcFFvEtFc2WP%2BnC1QoqRgFKxaxXN0DmT2zy%2Bfc2Gfz4dhCU3HaAS9RWlSLXs5VD7XmFyd2zPvpI7ykCXAWksa8xpmTnyconYbb8asQX%2BZj1YWZmi0fetLtjc8xj%2B1YOkABGJ2uWD3BzgdW5a%2FxwVrUBK3UW9HTKwDwvB7SSo%2BRr8aY7hL8BuR0qK4TrVuY2fMbnTk0rz9xg25ETHa4fn3zaj9c9Y%2FD9L8w3hyJy7ey01h6Oyv2yjCOXsafVZtATOQjCQFFSpezbySXTUbefwreNXo7w%2BkF5%2F4ygruUn8KIQ7cRMZ6Kl0I1xXtI2skqorkmfQwD0nbOK%2B7bidZRZknMCMmHjkE33FzhXTufAaJdLnzDr39PUBjqkAY156MsLjZiy1EWgk9UZDv2YWDFeyynoS8lI7wuDFGQcbVhys9Qxm7tTmS6vofqNOjycDPKTL3%2F%2BZ2%2FzAXezKseDnRSm7qJKRi0f4F%2BceHWSOvG7eqrWDCfc%2BFJkCL9DmvBTo%2F5%2Fqp8x4PfaQZOK0AGABd4MOK17r0YXZhpF%2BszLR774pbG198RBYzPJIzcQCGT2MMSrS4zhEf2lnc2%2F678L43fl&X-Amz-Signature=303cdac10825902e48415c62025d454304e0d653779272d5bd0fcac5bf551398&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
