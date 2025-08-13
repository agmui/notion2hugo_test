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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPUZBFD6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBB%2BvTm96OSj5yhMwHybaGdTYjNO2wLeSYEMbpO%2FsXqoAiEAyGoVND8q4qoiZRBHCEH5opGeTq7os9Ua%2B2BiUXkXCrEq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDHxQW21UbGYuldMJTCrcA7WXHRJrlT21f5G090kGgIWCxuDhBAUdLD1WPzGFDZwuy1gIGt%2B6yzPZvc%2BKEKy6CVrvjN%2B1l9R3WVERNE3XqG6s71VhujgrEsJ33ELURjOLU6P%2FNJLmW%2FqW72eAcUx8KtqsyOpRPUZVrR6ms%2Bo7F%2BibUI1DIVUtQSKgBxFEMlxxUaotLNQDhCsUtJe30n6BNPsaKnxkIfFvhzLj3jmbKWFS%2BkNFca3k6ixabPfByqPDsBpVs9spDHzXJUfE2HMQqGR0LCwbYLNP2RRDPR5ZruGAYRen3nG2qe8QR5MOJPHnZj2heDl90X5bj%2BvVgHBoJwrdVd5PdEDameBVRnLeYiNIlBSy%2BWWr5K7ktsgmZKhGx6G9IJUexBVsy9MlhZnG1jjzM8cFtoeppfJ8odRcJ7twVtUHB4WM9V1rIsjyN6TlfaRFLNGFVwg9lF%2B8kDQ7bPmA6h6tAoQRxiYh5g1u3QtSldQ9POEgxg9BT8IXe9qACDaBn%2FOl7yXSisZy3l1SJdiZJv66gj749CRaxJGjXnR85aykb66pkVttiNnlEPwZsytH9s6xahVNivldMvtAdU1fY64ogviDbDDWI39yNbuI7%2BLVRxZnbmNeSe62QDOHQG88lQ5xAdXc8temMPOf88QGOqUBZD0X2ByOmxDLjDtOvaazEdbrDCiPahAbKL4jJ8m9kCk%2FHjjOJCsQWw8F7itb5KGh2bEkUoO1nDWo7IVqCQzEWAOUJBtN4fz1fT%2BQoMrvOwiEKj8vmztj3l32982ly1B8P%2Fh8dk6b6WPoWbj%2F8DST62HScK6feIdtkDCWV%2BFzZ303s0ph4jIgjBRIAYdX5sov7RCtPayWHqORAgU7S4DxfbOf0WAs&X-Amz-Signature=e00e47ba907bace0366cd246fa499d4179f45859cafcd9b95f84860fb68b8c0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPUZBFD6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBB%2BvTm96OSj5yhMwHybaGdTYjNO2wLeSYEMbpO%2FsXqoAiEAyGoVND8q4qoiZRBHCEH5opGeTq7os9Ua%2B2BiUXkXCrEq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDHxQW21UbGYuldMJTCrcA7WXHRJrlT21f5G090kGgIWCxuDhBAUdLD1WPzGFDZwuy1gIGt%2B6yzPZvc%2BKEKy6CVrvjN%2B1l9R3WVERNE3XqG6s71VhujgrEsJ33ELURjOLU6P%2FNJLmW%2FqW72eAcUx8KtqsyOpRPUZVrR6ms%2Bo7F%2BibUI1DIVUtQSKgBxFEMlxxUaotLNQDhCsUtJe30n6BNPsaKnxkIfFvhzLj3jmbKWFS%2BkNFca3k6ixabPfByqPDsBpVs9spDHzXJUfE2HMQqGR0LCwbYLNP2RRDPR5ZruGAYRen3nG2qe8QR5MOJPHnZj2heDl90X5bj%2BvVgHBoJwrdVd5PdEDameBVRnLeYiNIlBSy%2BWWr5K7ktsgmZKhGx6G9IJUexBVsy9MlhZnG1jjzM8cFtoeppfJ8odRcJ7twVtUHB4WM9V1rIsjyN6TlfaRFLNGFVwg9lF%2B8kDQ7bPmA6h6tAoQRxiYh5g1u3QtSldQ9POEgxg9BT8IXe9qACDaBn%2FOl7yXSisZy3l1SJdiZJv66gj749CRaxJGjXnR85aykb66pkVttiNnlEPwZsytH9s6xahVNivldMvtAdU1fY64ogviDbDDWI39yNbuI7%2BLVRxZnbmNeSe62QDOHQG88lQ5xAdXc8temMPOf88QGOqUBZD0X2ByOmxDLjDtOvaazEdbrDCiPahAbKL4jJ8m9kCk%2FHjjOJCsQWw8F7itb5KGh2bEkUoO1nDWo7IVqCQzEWAOUJBtN4fz1fT%2BQoMrvOwiEKj8vmztj3l32982ly1B8P%2Fh8dk6b6WPoWbj%2F8DST62HScK6feIdtkDCWV%2BFzZ303s0ph4jIgjBRIAYdX5sov7RCtPayWHqORAgU7S4DxfbOf0WAs&X-Amz-Signature=c61377b14293f45099d1ab675f0753b028a626e898c0eed194fd6cc2c81bb1c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPUZBFD6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBB%2BvTm96OSj5yhMwHybaGdTYjNO2wLeSYEMbpO%2FsXqoAiEAyGoVND8q4qoiZRBHCEH5opGeTq7os9Ua%2B2BiUXkXCrEq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDHxQW21UbGYuldMJTCrcA7WXHRJrlT21f5G090kGgIWCxuDhBAUdLD1WPzGFDZwuy1gIGt%2B6yzPZvc%2BKEKy6CVrvjN%2B1l9R3WVERNE3XqG6s71VhujgrEsJ33ELURjOLU6P%2FNJLmW%2FqW72eAcUx8KtqsyOpRPUZVrR6ms%2Bo7F%2BibUI1DIVUtQSKgBxFEMlxxUaotLNQDhCsUtJe30n6BNPsaKnxkIfFvhzLj3jmbKWFS%2BkNFca3k6ixabPfByqPDsBpVs9spDHzXJUfE2HMQqGR0LCwbYLNP2RRDPR5ZruGAYRen3nG2qe8QR5MOJPHnZj2heDl90X5bj%2BvVgHBoJwrdVd5PdEDameBVRnLeYiNIlBSy%2BWWr5K7ktsgmZKhGx6G9IJUexBVsy9MlhZnG1jjzM8cFtoeppfJ8odRcJ7twVtUHB4WM9V1rIsjyN6TlfaRFLNGFVwg9lF%2B8kDQ7bPmA6h6tAoQRxiYh5g1u3QtSldQ9POEgxg9BT8IXe9qACDaBn%2FOl7yXSisZy3l1SJdiZJv66gj749CRaxJGjXnR85aykb66pkVttiNnlEPwZsytH9s6xahVNivldMvtAdU1fY64ogviDbDDWI39yNbuI7%2BLVRxZnbmNeSe62QDOHQG88lQ5xAdXc8temMPOf88QGOqUBZD0X2ByOmxDLjDtOvaazEdbrDCiPahAbKL4jJ8m9kCk%2FHjjOJCsQWw8F7itb5KGh2bEkUoO1nDWo7IVqCQzEWAOUJBtN4fz1fT%2BQoMrvOwiEKj8vmztj3l32982ly1B8P%2Fh8dk6b6WPoWbj%2F8DST62HScK6feIdtkDCWV%2BFzZ303s0ph4jIgjBRIAYdX5sov7RCtPayWHqORAgU7S4DxfbOf0WAs&X-Amz-Signature=19523f86b5870c5699f0ac1436923a48490ef94efc85b38368ac64640abdb6de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPUZBFD6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBB%2BvTm96OSj5yhMwHybaGdTYjNO2wLeSYEMbpO%2FsXqoAiEAyGoVND8q4qoiZRBHCEH5opGeTq7os9Ua%2B2BiUXkXCrEq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDHxQW21UbGYuldMJTCrcA7WXHRJrlT21f5G090kGgIWCxuDhBAUdLD1WPzGFDZwuy1gIGt%2B6yzPZvc%2BKEKy6CVrvjN%2B1l9R3WVERNE3XqG6s71VhujgrEsJ33ELURjOLU6P%2FNJLmW%2FqW72eAcUx8KtqsyOpRPUZVrR6ms%2Bo7F%2BibUI1DIVUtQSKgBxFEMlxxUaotLNQDhCsUtJe30n6BNPsaKnxkIfFvhzLj3jmbKWFS%2BkNFca3k6ixabPfByqPDsBpVs9spDHzXJUfE2HMQqGR0LCwbYLNP2RRDPR5ZruGAYRen3nG2qe8QR5MOJPHnZj2heDl90X5bj%2BvVgHBoJwrdVd5PdEDameBVRnLeYiNIlBSy%2BWWr5K7ktsgmZKhGx6G9IJUexBVsy9MlhZnG1jjzM8cFtoeppfJ8odRcJ7twVtUHB4WM9V1rIsjyN6TlfaRFLNGFVwg9lF%2B8kDQ7bPmA6h6tAoQRxiYh5g1u3QtSldQ9POEgxg9BT8IXe9qACDaBn%2FOl7yXSisZy3l1SJdiZJv66gj749CRaxJGjXnR85aykb66pkVttiNnlEPwZsytH9s6xahVNivldMvtAdU1fY64ogviDbDDWI39yNbuI7%2BLVRxZnbmNeSe62QDOHQG88lQ5xAdXc8temMPOf88QGOqUBZD0X2ByOmxDLjDtOvaazEdbrDCiPahAbKL4jJ8m9kCk%2FHjjOJCsQWw8F7itb5KGh2bEkUoO1nDWo7IVqCQzEWAOUJBtN4fz1fT%2BQoMrvOwiEKj8vmztj3l32982ly1B8P%2Fh8dk6b6WPoWbj%2F8DST62HScK6feIdtkDCWV%2BFzZ303s0ph4jIgjBRIAYdX5sov7RCtPayWHqORAgU7S4DxfbOf0WAs&X-Amz-Signature=07ca9f5bdcf039eb02b12d4fac1691bb93a116e8b718209f86bcd476c40a3724&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPUZBFD6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBB%2BvTm96OSj5yhMwHybaGdTYjNO2wLeSYEMbpO%2FsXqoAiEAyGoVND8q4qoiZRBHCEH5opGeTq7os9Ua%2B2BiUXkXCrEq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDHxQW21UbGYuldMJTCrcA7WXHRJrlT21f5G090kGgIWCxuDhBAUdLD1WPzGFDZwuy1gIGt%2B6yzPZvc%2BKEKy6CVrvjN%2B1l9R3WVERNE3XqG6s71VhujgrEsJ33ELURjOLU6P%2FNJLmW%2FqW72eAcUx8KtqsyOpRPUZVrR6ms%2Bo7F%2BibUI1DIVUtQSKgBxFEMlxxUaotLNQDhCsUtJe30n6BNPsaKnxkIfFvhzLj3jmbKWFS%2BkNFca3k6ixabPfByqPDsBpVs9spDHzXJUfE2HMQqGR0LCwbYLNP2RRDPR5ZruGAYRen3nG2qe8QR5MOJPHnZj2heDl90X5bj%2BvVgHBoJwrdVd5PdEDameBVRnLeYiNIlBSy%2BWWr5K7ktsgmZKhGx6G9IJUexBVsy9MlhZnG1jjzM8cFtoeppfJ8odRcJ7twVtUHB4WM9V1rIsjyN6TlfaRFLNGFVwg9lF%2B8kDQ7bPmA6h6tAoQRxiYh5g1u3QtSldQ9POEgxg9BT8IXe9qACDaBn%2FOl7yXSisZy3l1SJdiZJv66gj749CRaxJGjXnR85aykb66pkVttiNnlEPwZsytH9s6xahVNivldMvtAdU1fY64ogviDbDDWI39yNbuI7%2BLVRxZnbmNeSe62QDOHQG88lQ5xAdXc8temMPOf88QGOqUBZD0X2ByOmxDLjDtOvaazEdbrDCiPahAbKL4jJ8m9kCk%2FHjjOJCsQWw8F7itb5KGh2bEkUoO1nDWo7IVqCQzEWAOUJBtN4fz1fT%2BQoMrvOwiEKj8vmztj3l32982ly1B8P%2Fh8dk6b6WPoWbj%2F8DST62HScK6feIdtkDCWV%2BFzZ303s0ph4jIgjBRIAYdX5sov7RCtPayWHqORAgU7S4DxfbOf0WAs&X-Amz-Signature=f000f8a8a1e7085982560451a8a365a3ca6faec43f93e840dbf21aedfb460a21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPUZBFD6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBB%2BvTm96OSj5yhMwHybaGdTYjNO2wLeSYEMbpO%2FsXqoAiEAyGoVND8q4qoiZRBHCEH5opGeTq7os9Ua%2B2BiUXkXCrEq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDHxQW21UbGYuldMJTCrcA7WXHRJrlT21f5G090kGgIWCxuDhBAUdLD1WPzGFDZwuy1gIGt%2B6yzPZvc%2BKEKy6CVrvjN%2B1l9R3WVERNE3XqG6s71VhujgrEsJ33ELURjOLU6P%2FNJLmW%2FqW72eAcUx8KtqsyOpRPUZVrR6ms%2Bo7F%2BibUI1DIVUtQSKgBxFEMlxxUaotLNQDhCsUtJe30n6BNPsaKnxkIfFvhzLj3jmbKWFS%2BkNFca3k6ixabPfByqPDsBpVs9spDHzXJUfE2HMQqGR0LCwbYLNP2RRDPR5ZruGAYRen3nG2qe8QR5MOJPHnZj2heDl90X5bj%2BvVgHBoJwrdVd5PdEDameBVRnLeYiNIlBSy%2BWWr5K7ktsgmZKhGx6G9IJUexBVsy9MlhZnG1jjzM8cFtoeppfJ8odRcJ7twVtUHB4WM9V1rIsjyN6TlfaRFLNGFVwg9lF%2B8kDQ7bPmA6h6tAoQRxiYh5g1u3QtSldQ9POEgxg9BT8IXe9qACDaBn%2FOl7yXSisZy3l1SJdiZJv66gj749CRaxJGjXnR85aykb66pkVttiNnlEPwZsytH9s6xahVNivldMvtAdU1fY64ogviDbDDWI39yNbuI7%2BLVRxZnbmNeSe62QDOHQG88lQ5xAdXc8temMPOf88QGOqUBZD0X2ByOmxDLjDtOvaazEdbrDCiPahAbKL4jJ8m9kCk%2FHjjOJCsQWw8F7itb5KGh2bEkUoO1nDWo7IVqCQzEWAOUJBtN4fz1fT%2BQoMrvOwiEKj8vmztj3l32982ly1B8P%2Fh8dk6b6WPoWbj%2F8DST62HScK6feIdtkDCWV%2BFzZ303s0ph4jIgjBRIAYdX5sov7RCtPayWHqORAgU7S4DxfbOf0WAs&X-Amz-Signature=00760fd4278c265f414b021cf4981745b15eb9c5c243159f14743746e03ea8ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPUZBFD6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBB%2BvTm96OSj5yhMwHybaGdTYjNO2wLeSYEMbpO%2FsXqoAiEAyGoVND8q4qoiZRBHCEH5opGeTq7os9Ua%2B2BiUXkXCrEq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDHxQW21UbGYuldMJTCrcA7WXHRJrlT21f5G090kGgIWCxuDhBAUdLD1WPzGFDZwuy1gIGt%2B6yzPZvc%2BKEKy6CVrvjN%2B1l9R3WVERNE3XqG6s71VhujgrEsJ33ELURjOLU6P%2FNJLmW%2FqW72eAcUx8KtqsyOpRPUZVrR6ms%2Bo7F%2BibUI1DIVUtQSKgBxFEMlxxUaotLNQDhCsUtJe30n6BNPsaKnxkIfFvhzLj3jmbKWFS%2BkNFca3k6ixabPfByqPDsBpVs9spDHzXJUfE2HMQqGR0LCwbYLNP2RRDPR5ZruGAYRen3nG2qe8QR5MOJPHnZj2heDl90X5bj%2BvVgHBoJwrdVd5PdEDameBVRnLeYiNIlBSy%2BWWr5K7ktsgmZKhGx6G9IJUexBVsy9MlhZnG1jjzM8cFtoeppfJ8odRcJ7twVtUHB4WM9V1rIsjyN6TlfaRFLNGFVwg9lF%2B8kDQ7bPmA6h6tAoQRxiYh5g1u3QtSldQ9POEgxg9BT8IXe9qACDaBn%2FOl7yXSisZy3l1SJdiZJv66gj749CRaxJGjXnR85aykb66pkVttiNnlEPwZsytH9s6xahVNivldMvtAdU1fY64ogviDbDDWI39yNbuI7%2BLVRxZnbmNeSe62QDOHQG88lQ5xAdXc8temMPOf88QGOqUBZD0X2ByOmxDLjDtOvaazEdbrDCiPahAbKL4jJ8m9kCk%2FHjjOJCsQWw8F7itb5KGh2bEkUoO1nDWo7IVqCQzEWAOUJBtN4fz1fT%2BQoMrvOwiEKj8vmztj3l32982ly1B8P%2Fh8dk6b6WPoWbj%2F8DST62HScK6feIdtkDCWV%2BFzZ303s0ph4jIgjBRIAYdX5sov7RCtPayWHqORAgU7S4DxfbOf0WAs&X-Amz-Signature=b4a9ab9c16efc00f677429ef11a9603f3878868e21bb736d21af3159e8ec488f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPUZBFD6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBB%2BvTm96OSj5yhMwHybaGdTYjNO2wLeSYEMbpO%2FsXqoAiEAyGoVND8q4qoiZRBHCEH5opGeTq7os9Ua%2B2BiUXkXCrEq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDHxQW21UbGYuldMJTCrcA7WXHRJrlT21f5G090kGgIWCxuDhBAUdLD1WPzGFDZwuy1gIGt%2B6yzPZvc%2BKEKy6CVrvjN%2B1l9R3WVERNE3XqG6s71VhujgrEsJ33ELURjOLU6P%2FNJLmW%2FqW72eAcUx8KtqsyOpRPUZVrR6ms%2Bo7F%2BibUI1DIVUtQSKgBxFEMlxxUaotLNQDhCsUtJe30n6BNPsaKnxkIfFvhzLj3jmbKWFS%2BkNFca3k6ixabPfByqPDsBpVs9spDHzXJUfE2HMQqGR0LCwbYLNP2RRDPR5ZruGAYRen3nG2qe8QR5MOJPHnZj2heDl90X5bj%2BvVgHBoJwrdVd5PdEDameBVRnLeYiNIlBSy%2BWWr5K7ktsgmZKhGx6G9IJUexBVsy9MlhZnG1jjzM8cFtoeppfJ8odRcJ7twVtUHB4WM9V1rIsjyN6TlfaRFLNGFVwg9lF%2B8kDQ7bPmA6h6tAoQRxiYh5g1u3QtSldQ9POEgxg9BT8IXe9qACDaBn%2FOl7yXSisZy3l1SJdiZJv66gj749CRaxJGjXnR85aykb66pkVttiNnlEPwZsytH9s6xahVNivldMvtAdU1fY64ogviDbDDWI39yNbuI7%2BLVRxZnbmNeSe62QDOHQG88lQ5xAdXc8temMPOf88QGOqUBZD0X2ByOmxDLjDtOvaazEdbrDCiPahAbKL4jJ8m9kCk%2FHjjOJCsQWw8F7itb5KGh2bEkUoO1nDWo7IVqCQzEWAOUJBtN4fz1fT%2BQoMrvOwiEKj8vmztj3l32982ly1B8P%2Fh8dk6b6WPoWbj%2F8DST62HScK6feIdtkDCWV%2BFzZ303s0ph4jIgjBRIAYdX5sov7RCtPayWHqORAgU7S4DxfbOf0WAs&X-Amz-Signature=d8ad88627159f9055b64281578e778c62a9ada681092b1fec5ebfa1a1b9b7c10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPUZBFD6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBB%2BvTm96OSj5yhMwHybaGdTYjNO2wLeSYEMbpO%2FsXqoAiEAyGoVND8q4qoiZRBHCEH5opGeTq7os9Ua%2B2BiUXkXCrEq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDHxQW21UbGYuldMJTCrcA7WXHRJrlT21f5G090kGgIWCxuDhBAUdLD1WPzGFDZwuy1gIGt%2B6yzPZvc%2BKEKy6CVrvjN%2B1l9R3WVERNE3XqG6s71VhujgrEsJ33ELURjOLU6P%2FNJLmW%2FqW72eAcUx8KtqsyOpRPUZVrR6ms%2Bo7F%2BibUI1DIVUtQSKgBxFEMlxxUaotLNQDhCsUtJe30n6BNPsaKnxkIfFvhzLj3jmbKWFS%2BkNFca3k6ixabPfByqPDsBpVs9spDHzXJUfE2HMQqGR0LCwbYLNP2RRDPR5ZruGAYRen3nG2qe8QR5MOJPHnZj2heDl90X5bj%2BvVgHBoJwrdVd5PdEDameBVRnLeYiNIlBSy%2BWWr5K7ktsgmZKhGx6G9IJUexBVsy9MlhZnG1jjzM8cFtoeppfJ8odRcJ7twVtUHB4WM9V1rIsjyN6TlfaRFLNGFVwg9lF%2B8kDQ7bPmA6h6tAoQRxiYh5g1u3QtSldQ9POEgxg9BT8IXe9qACDaBn%2FOl7yXSisZy3l1SJdiZJv66gj749CRaxJGjXnR85aykb66pkVttiNnlEPwZsytH9s6xahVNivldMvtAdU1fY64ogviDbDDWI39yNbuI7%2BLVRxZnbmNeSe62QDOHQG88lQ5xAdXc8temMPOf88QGOqUBZD0X2ByOmxDLjDtOvaazEdbrDCiPahAbKL4jJ8m9kCk%2FHjjOJCsQWw8F7itb5KGh2bEkUoO1nDWo7IVqCQzEWAOUJBtN4fz1fT%2BQoMrvOwiEKj8vmztj3l32982ly1B8P%2Fh8dk6b6WPoWbj%2F8DST62HScK6feIdtkDCWV%2BFzZ303s0ph4jIgjBRIAYdX5sov7RCtPayWHqORAgU7S4DxfbOf0WAs&X-Amz-Signature=da44a584c86c625e93acf90778862c38ff7d451709c419f7ed6a353f948743a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPUZBFD6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBB%2BvTm96OSj5yhMwHybaGdTYjNO2wLeSYEMbpO%2FsXqoAiEAyGoVND8q4qoiZRBHCEH5opGeTq7os9Ua%2B2BiUXkXCrEq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDHxQW21UbGYuldMJTCrcA7WXHRJrlT21f5G090kGgIWCxuDhBAUdLD1WPzGFDZwuy1gIGt%2B6yzPZvc%2BKEKy6CVrvjN%2B1l9R3WVERNE3XqG6s71VhujgrEsJ33ELURjOLU6P%2FNJLmW%2FqW72eAcUx8KtqsyOpRPUZVrR6ms%2Bo7F%2BibUI1DIVUtQSKgBxFEMlxxUaotLNQDhCsUtJe30n6BNPsaKnxkIfFvhzLj3jmbKWFS%2BkNFca3k6ixabPfByqPDsBpVs9spDHzXJUfE2HMQqGR0LCwbYLNP2RRDPR5ZruGAYRen3nG2qe8QR5MOJPHnZj2heDl90X5bj%2BvVgHBoJwrdVd5PdEDameBVRnLeYiNIlBSy%2BWWr5K7ktsgmZKhGx6G9IJUexBVsy9MlhZnG1jjzM8cFtoeppfJ8odRcJ7twVtUHB4WM9V1rIsjyN6TlfaRFLNGFVwg9lF%2B8kDQ7bPmA6h6tAoQRxiYh5g1u3QtSldQ9POEgxg9BT8IXe9qACDaBn%2FOl7yXSisZy3l1SJdiZJv66gj749CRaxJGjXnR85aykb66pkVttiNnlEPwZsytH9s6xahVNivldMvtAdU1fY64ogviDbDDWI39yNbuI7%2BLVRxZnbmNeSe62QDOHQG88lQ5xAdXc8temMPOf88QGOqUBZD0X2ByOmxDLjDtOvaazEdbrDCiPahAbKL4jJ8m9kCk%2FHjjOJCsQWw8F7itb5KGh2bEkUoO1nDWo7IVqCQzEWAOUJBtN4fz1fT%2BQoMrvOwiEKj8vmztj3l32982ly1B8P%2Fh8dk6b6WPoWbj%2F8DST62HScK6feIdtkDCWV%2BFzZ303s0ph4jIgjBRIAYdX5sov7RCtPayWHqORAgU7S4DxfbOf0WAs&X-Amz-Signature=1443d42cc495c521fc0d73706f3c853cc1d53fe37aa9c532aaf323d895aa018c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPUZBFD6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBB%2BvTm96OSj5yhMwHybaGdTYjNO2wLeSYEMbpO%2FsXqoAiEAyGoVND8q4qoiZRBHCEH5opGeTq7os9Ua%2B2BiUXkXCrEq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDHxQW21UbGYuldMJTCrcA7WXHRJrlT21f5G090kGgIWCxuDhBAUdLD1WPzGFDZwuy1gIGt%2B6yzPZvc%2BKEKy6CVrvjN%2B1l9R3WVERNE3XqG6s71VhujgrEsJ33ELURjOLU6P%2FNJLmW%2FqW72eAcUx8KtqsyOpRPUZVrR6ms%2Bo7F%2BibUI1DIVUtQSKgBxFEMlxxUaotLNQDhCsUtJe30n6BNPsaKnxkIfFvhzLj3jmbKWFS%2BkNFca3k6ixabPfByqPDsBpVs9spDHzXJUfE2HMQqGR0LCwbYLNP2RRDPR5ZruGAYRen3nG2qe8QR5MOJPHnZj2heDl90X5bj%2BvVgHBoJwrdVd5PdEDameBVRnLeYiNIlBSy%2BWWr5K7ktsgmZKhGx6G9IJUexBVsy9MlhZnG1jjzM8cFtoeppfJ8odRcJ7twVtUHB4WM9V1rIsjyN6TlfaRFLNGFVwg9lF%2B8kDQ7bPmA6h6tAoQRxiYh5g1u3QtSldQ9POEgxg9BT8IXe9qACDaBn%2FOl7yXSisZy3l1SJdiZJv66gj749CRaxJGjXnR85aykb66pkVttiNnlEPwZsytH9s6xahVNivldMvtAdU1fY64ogviDbDDWI39yNbuI7%2BLVRxZnbmNeSe62QDOHQG88lQ5xAdXc8temMPOf88QGOqUBZD0X2ByOmxDLjDtOvaazEdbrDCiPahAbKL4jJ8m9kCk%2FHjjOJCsQWw8F7itb5KGh2bEkUoO1nDWo7IVqCQzEWAOUJBtN4fz1fT%2BQoMrvOwiEKj8vmztj3l32982ly1B8P%2Fh8dk6b6WPoWbj%2F8DST62HScK6feIdtkDCWV%2BFzZ303s0ph4jIgjBRIAYdX5sov7RCtPayWHqORAgU7S4DxfbOf0WAs&X-Amz-Signature=8d85717a601a4154257b6b19b1f979a8ec8641646f560383c090bb81ccd2bef4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPUZBFD6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBB%2BvTm96OSj5yhMwHybaGdTYjNO2wLeSYEMbpO%2FsXqoAiEAyGoVND8q4qoiZRBHCEH5opGeTq7os9Ua%2B2BiUXkXCrEq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDHxQW21UbGYuldMJTCrcA7WXHRJrlT21f5G090kGgIWCxuDhBAUdLD1WPzGFDZwuy1gIGt%2B6yzPZvc%2BKEKy6CVrvjN%2B1l9R3WVERNE3XqG6s71VhujgrEsJ33ELURjOLU6P%2FNJLmW%2FqW72eAcUx8KtqsyOpRPUZVrR6ms%2Bo7F%2BibUI1DIVUtQSKgBxFEMlxxUaotLNQDhCsUtJe30n6BNPsaKnxkIfFvhzLj3jmbKWFS%2BkNFca3k6ixabPfByqPDsBpVs9spDHzXJUfE2HMQqGR0LCwbYLNP2RRDPR5ZruGAYRen3nG2qe8QR5MOJPHnZj2heDl90X5bj%2BvVgHBoJwrdVd5PdEDameBVRnLeYiNIlBSy%2BWWr5K7ktsgmZKhGx6G9IJUexBVsy9MlhZnG1jjzM8cFtoeppfJ8odRcJ7twVtUHB4WM9V1rIsjyN6TlfaRFLNGFVwg9lF%2B8kDQ7bPmA6h6tAoQRxiYh5g1u3QtSldQ9POEgxg9BT8IXe9qACDaBn%2FOl7yXSisZy3l1SJdiZJv66gj749CRaxJGjXnR85aykb66pkVttiNnlEPwZsytH9s6xahVNivldMvtAdU1fY64ogviDbDDWI39yNbuI7%2BLVRxZnbmNeSe62QDOHQG88lQ5xAdXc8temMPOf88QGOqUBZD0X2ByOmxDLjDtOvaazEdbrDCiPahAbKL4jJ8m9kCk%2FHjjOJCsQWw8F7itb5KGh2bEkUoO1nDWo7IVqCQzEWAOUJBtN4fz1fT%2BQoMrvOwiEKj8vmztj3l32982ly1B8P%2Fh8dk6b6WPoWbj%2F8DST62HScK6feIdtkDCWV%2BFzZ303s0ph4jIgjBRIAYdX5sov7RCtPayWHqORAgU7S4DxfbOf0WAs&X-Amz-Signature=e5c8ad7d7af49b990e4295c59295fc3a54761e3aeee548ec9afb2b9729075a13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPUZBFD6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBB%2BvTm96OSj5yhMwHybaGdTYjNO2wLeSYEMbpO%2FsXqoAiEAyGoVND8q4qoiZRBHCEH5opGeTq7os9Ua%2B2BiUXkXCrEq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDHxQW21UbGYuldMJTCrcA7WXHRJrlT21f5G090kGgIWCxuDhBAUdLD1WPzGFDZwuy1gIGt%2B6yzPZvc%2BKEKy6CVrvjN%2B1l9R3WVERNE3XqG6s71VhujgrEsJ33ELURjOLU6P%2FNJLmW%2FqW72eAcUx8KtqsyOpRPUZVrR6ms%2Bo7F%2BibUI1DIVUtQSKgBxFEMlxxUaotLNQDhCsUtJe30n6BNPsaKnxkIfFvhzLj3jmbKWFS%2BkNFca3k6ixabPfByqPDsBpVs9spDHzXJUfE2HMQqGR0LCwbYLNP2RRDPR5ZruGAYRen3nG2qe8QR5MOJPHnZj2heDl90X5bj%2BvVgHBoJwrdVd5PdEDameBVRnLeYiNIlBSy%2BWWr5K7ktsgmZKhGx6G9IJUexBVsy9MlhZnG1jjzM8cFtoeppfJ8odRcJ7twVtUHB4WM9V1rIsjyN6TlfaRFLNGFVwg9lF%2B8kDQ7bPmA6h6tAoQRxiYh5g1u3QtSldQ9POEgxg9BT8IXe9qACDaBn%2FOl7yXSisZy3l1SJdiZJv66gj749CRaxJGjXnR85aykb66pkVttiNnlEPwZsytH9s6xahVNivldMvtAdU1fY64ogviDbDDWI39yNbuI7%2BLVRxZnbmNeSe62QDOHQG88lQ5xAdXc8temMPOf88QGOqUBZD0X2ByOmxDLjDtOvaazEdbrDCiPahAbKL4jJ8m9kCk%2FHjjOJCsQWw8F7itb5KGh2bEkUoO1nDWo7IVqCQzEWAOUJBtN4fz1fT%2BQoMrvOwiEKj8vmztj3l32982ly1B8P%2Fh8dk6b6WPoWbj%2F8DST62HScK6feIdtkDCWV%2BFzZ303s0ph4jIgjBRIAYdX5sov7RCtPayWHqORAgU7S4DxfbOf0WAs&X-Amz-Signature=a8a083e794aa0028f3815ac107b5a73a451e433d528f3d03fb5ff5b8074fd6e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPUZBFD6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBB%2BvTm96OSj5yhMwHybaGdTYjNO2wLeSYEMbpO%2FsXqoAiEAyGoVND8q4qoiZRBHCEH5opGeTq7os9Ua%2B2BiUXkXCrEq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDHxQW21UbGYuldMJTCrcA7WXHRJrlT21f5G090kGgIWCxuDhBAUdLD1WPzGFDZwuy1gIGt%2B6yzPZvc%2BKEKy6CVrvjN%2B1l9R3WVERNE3XqG6s71VhujgrEsJ33ELURjOLU6P%2FNJLmW%2FqW72eAcUx8KtqsyOpRPUZVrR6ms%2Bo7F%2BibUI1DIVUtQSKgBxFEMlxxUaotLNQDhCsUtJe30n6BNPsaKnxkIfFvhzLj3jmbKWFS%2BkNFca3k6ixabPfByqPDsBpVs9spDHzXJUfE2HMQqGR0LCwbYLNP2RRDPR5ZruGAYRen3nG2qe8QR5MOJPHnZj2heDl90X5bj%2BvVgHBoJwrdVd5PdEDameBVRnLeYiNIlBSy%2BWWr5K7ktsgmZKhGx6G9IJUexBVsy9MlhZnG1jjzM8cFtoeppfJ8odRcJ7twVtUHB4WM9V1rIsjyN6TlfaRFLNGFVwg9lF%2B8kDQ7bPmA6h6tAoQRxiYh5g1u3QtSldQ9POEgxg9BT8IXe9qACDaBn%2FOl7yXSisZy3l1SJdiZJv66gj749CRaxJGjXnR85aykb66pkVttiNnlEPwZsytH9s6xahVNivldMvtAdU1fY64ogviDbDDWI39yNbuI7%2BLVRxZnbmNeSe62QDOHQG88lQ5xAdXc8temMPOf88QGOqUBZD0X2ByOmxDLjDtOvaazEdbrDCiPahAbKL4jJ8m9kCk%2FHjjOJCsQWw8F7itb5KGh2bEkUoO1nDWo7IVqCQzEWAOUJBtN4fz1fT%2BQoMrvOwiEKj8vmztj3l32982ly1B8P%2Fh8dk6b6WPoWbj%2F8DST62HScK6feIdtkDCWV%2BFzZ303s0ph4jIgjBRIAYdX5sov7RCtPayWHqORAgU7S4DxfbOf0WAs&X-Amz-Signature=55d85ac24266add842c7b81789bed6f60e80759665c9b9967949c0b2373c7f02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
