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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQVOJ62M%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCICQttZH%2FC8Xqf6ZrWdG0adOnfl5Q64PlPRP2ryOeN%2BJOAiEAnmwMKEDHEYaMNOSPm%2BTHSQELV9yVIEKKDxZdWugmhrUqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDxKD092CXWDt9pbCrcA1kU%2FeX%2BBHJgAvG4ydx91sgvkEr9rivdiec7co8PxX0cKe6A98ImlcBoW85%2FNIebXVPFGzec%2BS3PvYZpFS3amUgw7L1jF4%2BZ1%2BuG0ylGoWzkdx2VmtkLXup7eCgss7lrCJyUryUZgBfGmh8pjAS0CXUfew4LHlqqKCGNHU7%2F4uFueBhECZHMfS3L1XlrG5OnIXX7Ck4XFV9ISS0cMaQbRbURjayliYuqAP9YzjGBx7RHzg%2F2nTf2BAl5Tnb4jGOpMNRloT%2BzaKKYoYCXWlgNR5kKtSyVBq1%2Bb27wegW0uPZd6G4hk84lDlTPe3kECJ40BrgOO1x%2Bp9jD7oCkNwzNFDRXk8vyac4OWQkovNrL8edqu4WICJpFO90T51NZ9f5CWwkv5p%2BIJvrjgWcqXGdRMa6%2BzohflTujPZpp9FnVVEM%2F51YMbrlbg5KJvDANwxjqLflYnhLlf2pN7uZ3q97FclXaaH2unlO%2B%2BNUJnp0VmsX1DY2mIvafJuB4dPO4oh3qnV6sOKvCIBlNMvDmcesxaUHoub%2FaF0ROsR10x4NAS%2FEq6tnZ%2FeNFbjbX92iiqJyc9Dg%2BeDlDQS9F%2F2AU6FR6GlcLTPv1i6MM%2FnkFa2O8NOIX7D399OPagcROfvdTMKy72cQGOqUBE0%2BGls1GjEezUeZY29qJ4iM3ZHt3ixlzJqQnhnpvWZeywYaV9w%2F74k5QNP%2BD6tI8gzzCSjEzOkoz3gULGrx9v75jQe%2B2wgEsvLht1eabr9%2B0uQnXEVFlvVHDEIvpYaALZEx42VGJJeRlGP4fwFDuF6kZDmXJVzhEIhnMmf1N%2F7K%2FR%2B7TXpHp7kJy6R917yn4ZbdYGg%2FZudvdc7Fd6onAoZ3PGvWp&X-Amz-Signature=6ac5d9152881791c582ddc6efd1cece5f9ea63f6f04738dcd90565d20430bc2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQVOJ62M%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCICQttZH%2FC8Xqf6ZrWdG0adOnfl5Q64PlPRP2ryOeN%2BJOAiEAnmwMKEDHEYaMNOSPm%2BTHSQELV9yVIEKKDxZdWugmhrUqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDxKD092CXWDt9pbCrcA1kU%2FeX%2BBHJgAvG4ydx91sgvkEr9rivdiec7co8PxX0cKe6A98ImlcBoW85%2FNIebXVPFGzec%2BS3PvYZpFS3amUgw7L1jF4%2BZ1%2BuG0ylGoWzkdx2VmtkLXup7eCgss7lrCJyUryUZgBfGmh8pjAS0CXUfew4LHlqqKCGNHU7%2F4uFueBhECZHMfS3L1XlrG5OnIXX7Ck4XFV9ISS0cMaQbRbURjayliYuqAP9YzjGBx7RHzg%2F2nTf2BAl5Tnb4jGOpMNRloT%2BzaKKYoYCXWlgNR5kKtSyVBq1%2Bb27wegW0uPZd6G4hk84lDlTPe3kECJ40BrgOO1x%2Bp9jD7oCkNwzNFDRXk8vyac4OWQkovNrL8edqu4WICJpFO90T51NZ9f5CWwkv5p%2BIJvrjgWcqXGdRMa6%2BzohflTujPZpp9FnVVEM%2F51YMbrlbg5KJvDANwxjqLflYnhLlf2pN7uZ3q97FclXaaH2unlO%2B%2BNUJnp0VmsX1DY2mIvafJuB4dPO4oh3qnV6sOKvCIBlNMvDmcesxaUHoub%2FaF0ROsR10x4NAS%2FEq6tnZ%2FeNFbjbX92iiqJyc9Dg%2BeDlDQS9F%2F2AU6FR6GlcLTPv1i6MM%2FnkFa2O8NOIX7D399OPagcROfvdTMKy72cQGOqUBE0%2BGls1GjEezUeZY29qJ4iM3ZHt3ixlzJqQnhnpvWZeywYaV9w%2F74k5QNP%2BD6tI8gzzCSjEzOkoz3gULGrx9v75jQe%2B2wgEsvLht1eabr9%2B0uQnXEVFlvVHDEIvpYaALZEx42VGJJeRlGP4fwFDuF6kZDmXJVzhEIhnMmf1N%2F7K%2FR%2B7TXpHp7kJy6R917yn4ZbdYGg%2FZudvdc7Fd6onAoZ3PGvWp&X-Amz-Signature=db425476d111d8976eaddaadfcd210ebd57d80df2589d41506d6dc472e0aa838&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQVOJ62M%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCICQttZH%2FC8Xqf6ZrWdG0adOnfl5Q64PlPRP2ryOeN%2BJOAiEAnmwMKEDHEYaMNOSPm%2BTHSQELV9yVIEKKDxZdWugmhrUqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDxKD092CXWDt9pbCrcA1kU%2FeX%2BBHJgAvG4ydx91sgvkEr9rivdiec7co8PxX0cKe6A98ImlcBoW85%2FNIebXVPFGzec%2BS3PvYZpFS3amUgw7L1jF4%2BZ1%2BuG0ylGoWzkdx2VmtkLXup7eCgss7lrCJyUryUZgBfGmh8pjAS0CXUfew4LHlqqKCGNHU7%2F4uFueBhECZHMfS3L1XlrG5OnIXX7Ck4XFV9ISS0cMaQbRbURjayliYuqAP9YzjGBx7RHzg%2F2nTf2BAl5Tnb4jGOpMNRloT%2BzaKKYoYCXWlgNR5kKtSyVBq1%2Bb27wegW0uPZd6G4hk84lDlTPe3kECJ40BrgOO1x%2Bp9jD7oCkNwzNFDRXk8vyac4OWQkovNrL8edqu4WICJpFO90T51NZ9f5CWwkv5p%2BIJvrjgWcqXGdRMa6%2BzohflTujPZpp9FnVVEM%2F51YMbrlbg5KJvDANwxjqLflYnhLlf2pN7uZ3q97FclXaaH2unlO%2B%2BNUJnp0VmsX1DY2mIvafJuB4dPO4oh3qnV6sOKvCIBlNMvDmcesxaUHoub%2FaF0ROsR10x4NAS%2FEq6tnZ%2FeNFbjbX92iiqJyc9Dg%2BeDlDQS9F%2F2AU6FR6GlcLTPv1i6MM%2FnkFa2O8NOIX7D399OPagcROfvdTMKy72cQGOqUBE0%2BGls1GjEezUeZY29qJ4iM3ZHt3ixlzJqQnhnpvWZeywYaV9w%2F74k5QNP%2BD6tI8gzzCSjEzOkoz3gULGrx9v75jQe%2B2wgEsvLht1eabr9%2B0uQnXEVFlvVHDEIvpYaALZEx42VGJJeRlGP4fwFDuF6kZDmXJVzhEIhnMmf1N%2F7K%2FR%2B7TXpHp7kJy6R917yn4ZbdYGg%2FZudvdc7Fd6onAoZ3PGvWp&X-Amz-Signature=5cc6203837c56add22539ff23cb4615981017f5cb018fc3f9ec840fbe7efdd57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQVOJ62M%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCICQttZH%2FC8Xqf6ZrWdG0adOnfl5Q64PlPRP2ryOeN%2BJOAiEAnmwMKEDHEYaMNOSPm%2BTHSQELV9yVIEKKDxZdWugmhrUqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDxKD092CXWDt9pbCrcA1kU%2FeX%2BBHJgAvG4ydx91sgvkEr9rivdiec7co8PxX0cKe6A98ImlcBoW85%2FNIebXVPFGzec%2BS3PvYZpFS3amUgw7L1jF4%2BZ1%2BuG0ylGoWzkdx2VmtkLXup7eCgss7lrCJyUryUZgBfGmh8pjAS0CXUfew4LHlqqKCGNHU7%2F4uFueBhECZHMfS3L1XlrG5OnIXX7Ck4XFV9ISS0cMaQbRbURjayliYuqAP9YzjGBx7RHzg%2F2nTf2BAl5Tnb4jGOpMNRloT%2BzaKKYoYCXWlgNR5kKtSyVBq1%2Bb27wegW0uPZd6G4hk84lDlTPe3kECJ40BrgOO1x%2Bp9jD7oCkNwzNFDRXk8vyac4OWQkovNrL8edqu4WICJpFO90T51NZ9f5CWwkv5p%2BIJvrjgWcqXGdRMa6%2BzohflTujPZpp9FnVVEM%2F51YMbrlbg5KJvDANwxjqLflYnhLlf2pN7uZ3q97FclXaaH2unlO%2B%2BNUJnp0VmsX1DY2mIvafJuB4dPO4oh3qnV6sOKvCIBlNMvDmcesxaUHoub%2FaF0ROsR10x4NAS%2FEq6tnZ%2FeNFbjbX92iiqJyc9Dg%2BeDlDQS9F%2F2AU6FR6GlcLTPv1i6MM%2FnkFa2O8NOIX7D399OPagcROfvdTMKy72cQGOqUBE0%2BGls1GjEezUeZY29qJ4iM3ZHt3ixlzJqQnhnpvWZeywYaV9w%2F74k5QNP%2BD6tI8gzzCSjEzOkoz3gULGrx9v75jQe%2B2wgEsvLht1eabr9%2B0uQnXEVFlvVHDEIvpYaALZEx42VGJJeRlGP4fwFDuF6kZDmXJVzhEIhnMmf1N%2F7K%2FR%2B7TXpHp7kJy6R917yn4ZbdYGg%2FZudvdc7Fd6onAoZ3PGvWp&X-Amz-Signature=5d780a39c1ce151314da0b647ffc586d180ad52cdfa192d175ac48d072e7a853&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQVOJ62M%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCICQttZH%2FC8Xqf6ZrWdG0adOnfl5Q64PlPRP2ryOeN%2BJOAiEAnmwMKEDHEYaMNOSPm%2BTHSQELV9yVIEKKDxZdWugmhrUqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDxKD092CXWDt9pbCrcA1kU%2FeX%2BBHJgAvG4ydx91sgvkEr9rivdiec7co8PxX0cKe6A98ImlcBoW85%2FNIebXVPFGzec%2BS3PvYZpFS3amUgw7L1jF4%2BZ1%2BuG0ylGoWzkdx2VmtkLXup7eCgss7lrCJyUryUZgBfGmh8pjAS0CXUfew4LHlqqKCGNHU7%2F4uFueBhECZHMfS3L1XlrG5OnIXX7Ck4XFV9ISS0cMaQbRbURjayliYuqAP9YzjGBx7RHzg%2F2nTf2BAl5Tnb4jGOpMNRloT%2BzaKKYoYCXWlgNR5kKtSyVBq1%2Bb27wegW0uPZd6G4hk84lDlTPe3kECJ40BrgOO1x%2Bp9jD7oCkNwzNFDRXk8vyac4OWQkovNrL8edqu4WICJpFO90T51NZ9f5CWwkv5p%2BIJvrjgWcqXGdRMa6%2BzohflTujPZpp9FnVVEM%2F51YMbrlbg5KJvDANwxjqLflYnhLlf2pN7uZ3q97FclXaaH2unlO%2B%2BNUJnp0VmsX1DY2mIvafJuB4dPO4oh3qnV6sOKvCIBlNMvDmcesxaUHoub%2FaF0ROsR10x4NAS%2FEq6tnZ%2FeNFbjbX92iiqJyc9Dg%2BeDlDQS9F%2F2AU6FR6GlcLTPv1i6MM%2FnkFa2O8NOIX7D399OPagcROfvdTMKy72cQGOqUBE0%2BGls1GjEezUeZY29qJ4iM3ZHt3ixlzJqQnhnpvWZeywYaV9w%2F74k5QNP%2BD6tI8gzzCSjEzOkoz3gULGrx9v75jQe%2B2wgEsvLht1eabr9%2B0uQnXEVFlvVHDEIvpYaALZEx42VGJJeRlGP4fwFDuF6kZDmXJVzhEIhnMmf1N%2F7K%2FR%2B7TXpHp7kJy6R917yn4ZbdYGg%2FZudvdc7Fd6onAoZ3PGvWp&X-Amz-Signature=e6cfceb3a797b25fbc3259277729252e550e47a1d3c6edd3190f86ceeddff973&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQVOJ62M%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCICQttZH%2FC8Xqf6ZrWdG0adOnfl5Q64PlPRP2ryOeN%2BJOAiEAnmwMKEDHEYaMNOSPm%2BTHSQELV9yVIEKKDxZdWugmhrUqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDxKD092CXWDt9pbCrcA1kU%2FeX%2BBHJgAvG4ydx91sgvkEr9rivdiec7co8PxX0cKe6A98ImlcBoW85%2FNIebXVPFGzec%2BS3PvYZpFS3amUgw7L1jF4%2BZ1%2BuG0ylGoWzkdx2VmtkLXup7eCgss7lrCJyUryUZgBfGmh8pjAS0CXUfew4LHlqqKCGNHU7%2F4uFueBhECZHMfS3L1XlrG5OnIXX7Ck4XFV9ISS0cMaQbRbURjayliYuqAP9YzjGBx7RHzg%2F2nTf2BAl5Tnb4jGOpMNRloT%2BzaKKYoYCXWlgNR5kKtSyVBq1%2Bb27wegW0uPZd6G4hk84lDlTPe3kECJ40BrgOO1x%2Bp9jD7oCkNwzNFDRXk8vyac4OWQkovNrL8edqu4WICJpFO90T51NZ9f5CWwkv5p%2BIJvrjgWcqXGdRMa6%2BzohflTujPZpp9FnVVEM%2F51YMbrlbg5KJvDANwxjqLflYnhLlf2pN7uZ3q97FclXaaH2unlO%2B%2BNUJnp0VmsX1DY2mIvafJuB4dPO4oh3qnV6sOKvCIBlNMvDmcesxaUHoub%2FaF0ROsR10x4NAS%2FEq6tnZ%2FeNFbjbX92iiqJyc9Dg%2BeDlDQS9F%2F2AU6FR6GlcLTPv1i6MM%2FnkFa2O8NOIX7D399OPagcROfvdTMKy72cQGOqUBE0%2BGls1GjEezUeZY29qJ4iM3ZHt3ixlzJqQnhnpvWZeywYaV9w%2F74k5QNP%2BD6tI8gzzCSjEzOkoz3gULGrx9v75jQe%2B2wgEsvLht1eabr9%2B0uQnXEVFlvVHDEIvpYaALZEx42VGJJeRlGP4fwFDuF6kZDmXJVzhEIhnMmf1N%2F7K%2FR%2B7TXpHp7kJy6R917yn4ZbdYGg%2FZudvdc7Fd6onAoZ3PGvWp&X-Amz-Signature=849266d0e7100ad325f5e0e2eccb9e6b60098e21144432aabc538f009d8c8c29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQVOJ62M%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCICQttZH%2FC8Xqf6ZrWdG0adOnfl5Q64PlPRP2ryOeN%2BJOAiEAnmwMKEDHEYaMNOSPm%2BTHSQELV9yVIEKKDxZdWugmhrUqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDxKD092CXWDt9pbCrcA1kU%2FeX%2BBHJgAvG4ydx91sgvkEr9rivdiec7co8PxX0cKe6A98ImlcBoW85%2FNIebXVPFGzec%2BS3PvYZpFS3amUgw7L1jF4%2BZ1%2BuG0ylGoWzkdx2VmtkLXup7eCgss7lrCJyUryUZgBfGmh8pjAS0CXUfew4LHlqqKCGNHU7%2F4uFueBhECZHMfS3L1XlrG5OnIXX7Ck4XFV9ISS0cMaQbRbURjayliYuqAP9YzjGBx7RHzg%2F2nTf2BAl5Tnb4jGOpMNRloT%2BzaKKYoYCXWlgNR5kKtSyVBq1%2Bb27wegW0uPZd6G4hk84lDlTPe3kECJ40BrgOO1x%2Bp9jD7oCkNwzNFDRXk8vyac4OWQkovNrL8edqu4WICJpFO90T51NZ9f5CWwkv5p%2BIJvrjgWcqXGdRMa6%2BzohflTujPZpp9FnVVEM%2F51YMbrlbg5KJvDANwxjqLflYnhLlf2pN7uZ3q97FclXaaH2unlO%2B%2BNUJnp0VmsX1DY2mIvafJuB4dPO4oh3qnV6sOKvCIBlNMvDmcesxaUHoub%2FaF0ROsR10x4NAS%2FEq6tnZ%2FeNFbjbX92iiqJyc9Dg%2BeDlDQS9F%2F2AU6FR6GlcLTPv1i6MM%2FnkFa2O8NOIX7D399OPagcROfvdTMKy72cQGOqUBE0%2BGls1GjEezUeZY29qJ4iM3ZHt3ixlzJqQnhnpvWZeywYaV9w%2F74k5QNP%2BD6tI8gzzCSjEzOkoz3gULGrx9v75jQe%2B2wgEsvLht1eabr9%2B0uQnXEVFlvVHDEIvpYaALZEx42VGJJeRlGP4fwFDuF6kZDmXJVzhEIhnMmf1N%2F7K%2FR%2B7TXpHp7kJy6R917yn4ZbdYGg%2FZudvdc7Fd6onAoZ3PGvWp&X-Amz-Signature=076bf494e8f6f87ac8cf11e808700bdfa5b5678d558ffc6e11a480ec8d50425c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQVOJ62M%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCICQttZH%2FC8Xqf6ZrWdG0adOnfl5Q64PlPRP2ryOeN%2BJOAiEAnmwMKEDHEYaMNOSPm%2BTHSQELV9yVIEKKDxZdWugmhrUqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDxKD092CXWDt9pbCrcA1kU%2FeX%2BBHJgAvG4ydx91sgvkEr9rivdiec7co8PxX0cKe6A98ImlcBoW85%2FNIebXVPFGzec%2BS3PvYZpFS3amUgw7L1jF4%2BZ1%2BuG0ylGoWzkdx2VmtkLXup7eCgss7lrCJyUryUZgBfGmh8pjAS0CXUfew4LHlqqKCGNHU7%2F4uFueBhECZHMfS3L1XlrG5OnIXX7Ck4XFV9ISS0cMaQbRbURjayliYuqAP9YzjGBx7RHzg%2F2nTf2BAl5Tnb4jGOpMNRloT%2BzaKKYoYCXWlgNR5kKtSyVBq1%2Bb27wegW0uPZd6G4hk84lDlTPe3kECJ40BrgOO1x%2Bp9jD7oCkNwzNFDRXk8vyac4OWQkovNrL8edqu4WICJpFO90T51NZ9f5CWwkv5p%2BIJvrjgWcqXGdRMa6%2BzohflTujPZpp9FnVVEM%2F51YMbrlbg5KJvDANwxjqLflYnhLlf2pN7uZ3q97FclXaaH2unlO%2B%2BNUJnp0VmsX1DY2mIvafJuB4dPO4oh3qnV6sOKvCIBlNMvDmcesxaUHoub%2FaF0ROsR10x4NAS%2FEq6tnZ%2FeNFbjbX92iiqJyc9Dg%2BeDlDQS9F%2F2AU6FR6GlcLTPv1i6MM%2FnkFa2O8NOIX7D399OPagcROfvdTMKy72cQGOqUBE0%2BGls1GjEezUeZY29qJ4iM3ZHt3ixlzJqQnhnpvWZeywYaV9w%2F74k5QNP%2BD6tI8gzzCSjEzOkoz3gULGrx9v75jQe%2B2wgEsvLht1eabr9%2B0uQnXEVFlvVHDEIvpYaALZEx42VGJJeRlGP4fwFDuF6kZDmXJVzhEIhnMmf1N%2F7K%2FR%2B7TXpHp7kJy6R917yn4ZbdYGg%2FZudvdc7Fd6onAoZ3PGvWp&X-Amz-Signature=394b58aa89df506d597d42f74d8bfeed7fce953c869c5cea8fb9d74242855e34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQVOJ62M%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCICQttZH%2FC8Xqf6ZrWdG0adOnfl5Q64PlPRP2ryOeN%2BJOAiEAnmwMKEDHEYaMNOSPm%2BTHSQELV9yVIEKKDxZdWugmhrUqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDxKD092CXWDt9pbCrcA1kU%2FeX%2BBHJgAvG4ydx91sgvkEr9rivdiec7co8PxX0cKe6A98ImlcBoW85%2FNIebXVPFGzec%2BS3PvYZpFS3amUgw7L1jF4%2BZ1%2BuG0ylGoWzkdx2VmtkLXup7eCgss7lrCJyUryUZgBfGmh8pjAS0CXUfew4LHlqqKCGNHU7%2F4uFueBhECZHMfS3L1XlrG5OnIXX7Ck4XFV9ISS0cMaQbRbURjayliYuqAP9YzjGBx7RHzg%2F2nTf2BAl5Tnb4jGOpMNRloT%2BzaKKYoYCXWlgNR5kKtSyVBq1%2Bb27wegW0uPZd6G4hk84lDlTPe3kECJ40BrgOO1x%2Bp9jD7oCkNwzNFDRXk8vyac4OWQkovNrL8edqu4WICJpFO90T51NZ9f5CWwkv5p%2BIJvrjgWcqXGdRMa6%2BzohflTujPZpp9FnVVEM%2F51YMbrlbg5KJvDANwxjqLflYnhLlf2pN7uZ3q97FclXaaH2unlO%2B%2BNUJnp0VmsX1DY2mIvafJuB4dPO4oh3qnV6sOKvCIBlNMvDmcesxaUHoub%2FaF0ROsR10x4NAS%2FEq6tnZ%2FeNFbjbX92iiqJyc9Dg%2BeDlDQS9F%2F2AU6FR6GlcLTPv1i6MM%2FnkFa2O8NOIX7D399OPagcROfvdTMKy72cQGOqUBE0%2BGls1GjEezUeZY29qJ4iM3ZHt3ixlzJqQnhnpvWZeywYaV9w%2F74k5QNP%2BD6tI8gzzCSjEzOkoz3gULGrx9v75jQe%2B2wgEsvLht1eabr9%2B0uQnXEVFlvVHDEIvpYaALZEx42VGJJeRlGP4fwFDuF6kZDmXJVzhEIhnMmf1N%2F7K%2FR%2B7TXpHp7kJy6R917yn4ZbdYGg%2FZudvdc7Fd6onAoZ3PGvWp&X-Amz-Signature=df0a2376abed1ec7f06493abeaa0b925ba86ebb77ae04ee5f7ac41b3962bfb43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQVOJ62M%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCICQttZH%2FC8Xqf6ZrWdG0adOnfl5Q64PlPRP2ryOeN%2BJOAiEAnmwMKEDHEYaMNOSPm%2BTHSQELV9yVIEKKDxZdWugmhrUqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDxKD092CXWDt9pbCrcA1kU%2FeX%2BBHJgAvG4ydx91sgvkEr9rivdiec7co8PxX0cKe6A98ImlcBoW85%2FNIebXVPFGzec%2BS3PvYZpFS3amUgw7L1jF4%2BZ1%2BuG0ylGoWzkdx2VmtkLXup7eCgss7lrCJyUryUZgBfGmh8pjAS0CXUfew4LHlqqKCGNHU7%2F4uFueBhECZHMfS3L1XlrG5OnIXX7Ck4XFV9ISS0cMaQbRbURjayliYuqAP9YzjGBx7RHzg%2F2nTf2BAl5Tnb4jGOpMNRloT%2BzaKKYoYCXWlgNR5kKtSyVBq1%2Bb27wegW0uPZd6G4hk84lDlTPe3kECJ40BrgOO1x%2Bp9jD7oCkNwzNFDRXk8vyac4OWQkovNrL8edqu4WICJpFO90T51NZ9f5CWwkv5p%2BIJvrjgWcqXGdRMa6%2BzohflTujPZpp9FnVVEM%2F51YMbrlbg5KJvDANwxjqLflYnhLlf2pN7uZ3q97FclXaaH2unlO%2B%2BNUJnp0VmsX1DY2mIvafJuB4dPO4oh3qnV6sOKvCIBlNMvDmcesxaUHoub%2FaF0ROsR10x4NAS%2FEq6tnZ%2FeNFbjbX92iiqJyc9Dg%2BeDlDQS9F%2F2AU6FR6GlcLTPv1i6MM%2FnkFa2O8NOIX7D399OPagcROfvdTMKy72cQGOqUBE0%2BGls1GjEezUeZY29qJ4iM3ZHt3ixlzJqQnhnpvWZeywYaV9w%2F74k5QNP%2BD6tI8gzzCSjEzOkoz3gULGrx9v75jQe%2B2wgEsvLht1eabr9%2B0uQnXEVFlvVHDEIvpYaALZEx42VGJJeRlGP4fwFDuF6kZDmXJVzhEIhnMmf1N%2F7K%2FR%2B7TXpHp7kJy6R917yn4ZbdYGg%2FZudvdc7Fd6onAoZ3PGvWp&X-Amz-Signature=0f56c9d13bd2c25ab5d975e63330d98fb20a141c752220458a3c7867db7ddf01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQVOJ62M%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCICQttZH%2FC8Xqf6ZrWdG0adOnfl5Q64PlPRP2ryOeN%2BJOAiEAnmwMKEDHEYaMNOSPm%2BTHSQELV9yVIEKKDxZdWugmhrUqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDxKD092CXWDt9pbCrcA1kU%2FeX%2BBHJgAvG4ydx91sgvkEr9rivdiec7co8PxX0cKe6A98ImlcBoW85%2FNIebXVPFGzec%2BS3PvYZpFS3amUgw7L1jF4%2BZ1%2BuG0ylGoWzkdx2VmtkLXup7eCgss7lrCJyUryUZgBfGmh8pjAS0CXUfew4LHlqqKCGNHU7%2F4uFueBhECZHMfS3L1XlrG5OnIXX7Ck4XFV9ISS0cMaQbRbURjayliYuqAP9YzjGBx7RHzg%2F2nTf2BAl5Tnb4jGOpMNRloT%2BzaKKYoYCXWlgNR5kKtSyVBq1%2Bb27wegW0uPZd6G4hk84lDlTPe3kECJ40BrgOO1x%2Bp9jD7oCkNwzNFDRXk8vyac4OWQkovNrL8edqu4WICJpFO90T51NZ9f5CWwkv5p%2BIJvrjgWcqXGdRMa6%2BzohflTujPZpp9FnVVEM%2F51YMbrlbg5KJvDANwxjqLflYnhLlf2pN7uZ3q97FclXaaH2unlO%2B%2BNUJnp0VmsX1DY2mIvafJuB4dPO4oh3qnV6sOKvCIBlNMvDmcesxaUHoub%2FaF0ROsR10x4NAS%2FEq6tnZ%2FeNFbjbX92iiqJyc9Dg%2BeDlDQS9F%2F2AU6FR6GlcLTPv1i6MM%2FnkFa2O8NOIX7D399OPagcROfvdTMKy72cQGOqUBE0%2BGls1GjEezUeZY29qJ4iM3ZHt3ixlzJqQnhnpvWZeywYaV9w%2F74k5QNP%2BD6tI8gzzCSjEzOkoz3gULGrx9v75jQe%2B2wgEsvLht1eabr9%2B0uQnXEVFlvVHDEIvpYaALZEx42VGJJeRlGP4fwFDuF6kZDmXJVzhEIhnMmf1N%2F7K%2FR%2B7TXpHp7kJy6R917yn4ZbdYGg%2FZudvdc7Fd6onAoZ3PGvWp&X-Amz-Signature=af6f48526439cf489158d60e32a7d57de2cbb0682b99eed7473e0581fad6fb9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQVOJ62M%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCICQttZH%2FC8Xqf6ZrWdG0adOnfl5Q64PlPRP2ryOeN%2BJOAiEAnmwMKEDHEYaMNOSPm%2BTHSQELV9yVIEKKDxZdWugmhrUqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDxKD092CXWDt9pbCrcA1kU%2FeX%2BBHJgAvG4ydx91sgvkEr9rivdiec7co8PxX0cKe6A98ImlcBoW85%2FNIebXVPFGzec%2BS3PvYZpFS3amUgw7L1jF4%2BZ1%2BuG0ylGoWzkdx2VmtkLXup7eCgss7lrCJyUryUZgBfGmh8pjAS0CXUfew4LHlqqKCGNHU7%2F4uFueBhECZHMfS3L1XlrG5OnIXX7Ck4XFV9ISS0cMaQbRbURjayliYuqAP9YzjGBx7RHzg%2F2nTf2BAl5Tnb4jGOpMNRloT%2BzaKKYoYCXWlgNR5kKtSyVBq1%2Bb27wegW0uPZd6G4hk84lDlTPe3kECJ40BrgOO1x%2Bp9jD7oCkNwzNFDRXk8vyac4OWQkovNrL8edqu4WICJpFO90T51NZ9f5CWwkv5p%2BIJvrjgWcqXGdRMa6%2BzohflTujPZpp9FnVVEM%2F51YMbrlbg5KJvDANwxjqLflYnhLlf2pN7uZ3q97FclXaaH2unlO%2B%2BNUJnp0VmsX1DY2mIvafJuB4dPO4oh3qnV6sOKvCIBlNMvDmcesxaUHoub%2FaF0ROsR10x4NAS%2FEq6tnZ%2FeNFbjbX92iiqJyc9Dg%2BeDlDQS9F%2F2AU6FR6GlcLTPv1i6MM%2FnkFa2O8NOIX7D399OPagcROfvdTMKy72cQGOqUBE0%2BGls1GjEezUeZY29qJ4iM3ZHt3ixlzJqQnhnpvWZeywYaV9w%2F74k5QNP%2BD6tI8gzzCSjEzOkoz3gULGrx9v75jQe%2B2wgEsvLht1eabr9%2B0uQnXEVFlvVHDEIvpYaALZEx42VGJJeRlGP4fwFDuF6kZDmXJVzhEIhnMmf1N%2F7K%2FR%2B7TXpHp7kJy6R917yn4ZbdYGg%2FZudvdc7Fd6onAoZ3PGvWp&X-Amz-Signature=87614e7cee81a919b27e05bd19a477852f8ab9ce096f76938354a88e3f399735&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQVOJ62M%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCICQttZH%2FC8Xqf6ZrWdG0adOnfl5Q64PlPRP2ryOeN%2BJOAiEAnmwMKEDHEYaMNOSPm%2BTHSQELV9yVIEKKDxZdWugmhrUqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDxKD092CXWDt9pbCrcA1kU%2FeX%2BBHJgAvG4ydx91sgvkEr9rivdiec7co8PxX0cKe6A98ImlcBoW85%2FNIebXVPFGzec%2BS3PvYZpFS3amUgw7L1jF4%2BZ1%2BuG0ylGoWzkdx2VmtkLXup7eCgss7lrCJyUryUZgBfGmh8pjAS0CXUfew4LHlqqKCGNHU7%2F4uFueBhECZHMfS3L1XlrG5OnIXX7Ck4XFV9ISS0cMaQbRbURjayliYuqAP9YzjGBx7RHzg%2F2nTf2BAl5Tnb4jGOpMNRloT%2BzaKKYoYCXWlgNR5kKtSyVBq1%2Bb27wegW0uPZd6G4hk84lDlTPe3kECJ40BrgOO1x%2Bp9jD7oCkNwzNFDRXk8vyac4OWQkovNrL8edqu4WICJpFO90T51NZ9f5CWwkv5p%2BIJvrjgWcqXGdRMa6%2BzohflTujPZpp9FnVVEM%2F51YMbrlbg5KJvDANwxjqLflYnhLlf2pN7uZ3q97FclXaaH2unlO%2B%2BNUJnp0VmsX1DY2mIvafJuB4dPO4oh3qnV6sOKvCIBlNMvDmcesxaUHoub%2FaF0ROsR10x4NAS%2FEq6tnZ%2FeNFbjbX92iiqJyc9Dg%2BeDlDQS9F%2F2AU6FR6GlcLTPv1i6MM%2FnkFa2O8NOIX7D399OPagcROfvdTMKy72cQGOqUBE0%2BGls1GjEezUeZY29qJ4iM3ZHt3ixlzJqQnhnpvWZeywYaV9w%2F74k5QNP%2BD6tI8gzzCSjEzOkoz3gULGrx9v75jQe%2B2wgEsvLht1eabr9%2B0uQnXEVFlvVHDEIvpYaALZEx42VGJJeRlGP4fwFDuF6kZDmXJVzhEIhnMmf1N%2F7K%2FR%2B7TXpHp7kJy6R917yn4ZbdYGg%2FZudvdc7Fd6onAoZ3PGvWp&X-Amz-Signature=619077268ed953af0dc865b74380cbe3cc1a123139455bb9ef80a1cce0a65ec5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQVOJ62M%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T210821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCICQttZH%2FC8Xqf6ZrWdG0adOnfl5Q64PlPRP2ryOeN%2BJOAiEAnmwMKEDHEYaMNOSPm%2BTHSQELV9yVIEKKDxZdWugmhrUqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIDxKD092CXWDt9pbCrcA1kU%2FeX%2BBHJgAvG4ydx91sgvkEr9rivdiec7co8PxX0cKe6A98ImlcBoW85%2FNIebXVPFGzec%2BS3PvYZpFS3amUgw7L1jF4%2BZ1%2BuG0ylGoWzkdx2VmtkLXup7eCgss7lrCJyUryUZgBfGmh8pjAS0CXUfew4LHlqqKCGNHU7%2F4uFueBhECZHMfS3L1XlrG5OnIXX7Ck4XFV9ISS0cMaQbRbURjayliYuqAP9YzjGBx7RHzg%2F2nTf2BAl5Tnb4jGOpMNRloT%2BzaKKYoYCXWlgNR5kKtSyVBq1%2Bb27wegW0uPZd6G4hk84lDlTPe3kECJ40BrgOO1x%2Bp9jD7oCkNwzNFDRXk8vyac4OWQkovNrL8edqu4WICJpFO90T51NZ9f5CWwkv5p%2BIJvrjgWcqXGdRMa6%2BzohflTujPZpp9FnVVEM%2F51YMbrlbg5KJvDANwxjqLflYnhLlf2pN7uZ3q97FclXaaH2unlO%2B%2BNUJnp0VmsX1DY2mIvafJuB4dPO4oh3qnV6sOKvCIBlNMvDmcesxaUHoub%2FaF0ROsR10x4NAS%2FEq6tnZ%2FeNFbjbX92iiqJyc9Dg%2BeDlDQS9F%2F2AU6FR6GlcLTPv1i6MM%2FnkFa2O8NOIX7D399OPagcROfvdTMKy72cQGOqUBE0%2BGls1GjEezUeZY29qJ4iM3ZHt3ixlzJqQnhnpvWZeywYaV9w%2F74k5QNP%2BD6tI8gzzCSjEzOkoz3gULGrx9v75jQe%2B2wgEsvLht1eabr9%2B0uQnXEVFlvVHDEIvpYaALZEx42VGJJeRlGP4fwFDuF6kZDmXJVzhEIhnMmf1N%2F7K%2FR%2B7TXpHp7kJy6R917yn4ZbdYGg%2FZudvdc7Fd6onAoZ3PGvWp&X-Amz-Signature=3d6b78801fffecfcdab0a1bafec5e9571007898e113d77009b611fc66700f079&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
