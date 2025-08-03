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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWQBWPOX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2Fam8To%2F77%2FKvJHewYFqKs9ocAgypLKQhLIxR8PuL2yAiAe3%2ByzI2KYKzslakNWWp9AV%2F3q8F6inwtofAFHHNbvgSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM48VhlATFauRps3daKtwDaKEUDQKtMaVXWE9X%2FdcUnFJXsfdifKrH1zoAFZtt8gyaASabZI5K%2FdN%2FRhwPZHz7XPjuoZ6tbBVAcU%2BRUm%2FvF4PJvGLvcu9YQe3l93qJ3or7UqV0mHdRRp%2BXvVQcuPFcVjDD5fpsvmMwAmoAmU0e3jdXbFS1AxULQH1BSn8DvqHcE9%2BiUmf7SA741o3%2BAUROFrBa5DlDEJjUpTCMR9pHgfdPMVxLXfG0pE6vLIetVqpOiXGd%2BUTrzANkKl17kKZMaAsBsJLKFVU538VQiRww0tg1BQ0r8XwSKwnz4N777jeJTBnB4d0U%2FVNOx3A73oXVd7lE8vjjM3Bi0MKM8UGaQTm0LVzrLJCmNMQPFGY7soSsuupgMXnUjhENd%2BkifF1AIMtYletXoMNQaIfLQx2UwHl4rqDulOFb%2FXpAeWyb2JjfOPRr42uWRg6V8%2FWpzpTmHUycIbS%2FpHjg6WkYCP6PvTu6CwHaqlh486oWil3lc%2F3jaki%2BMnmR%2B9yr%2FWcHCnWs9GtnAgWvZ03I6RzD%2BKF0ZnTXzKFEz5rS1YygphkawPI0r1pZcj%2BmY4ssnMrFs1xIMkHSPo0%2BXHO8QHitNRGdf%2FgCD9e5Eo2CpWUOxJ0DTiP%2BPNnGBO%2BTHdN7UzAwgMO8xAY6pgGdxclf9qkHu860CKIBnfdqaSlHZBkejE1vo%2FwcW2PdmVd2IZJlcABXxXDVjitSkVqGwRCsz0d0BSFPIRQvmSQ%2BzzJJMKfzNeItqxE%2FQGNrlHuvdnbcDKBOnsy5N12mu%2F8EBFFEf36KvBkAxuantEp3XlEJvdLu81Hu%2Br1DhfDtFffk8UtZisQGnb87R0LzlEKQEki14CnlmhEqbxxmLD1XGpNy%2Bxf1&X-Amz-Signature=0f3266c18a1470fac42f458a3c06abf4430e14edc43edf16064d3fb5377e8788&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWQBWPOX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2Fam8To%2F77%2FKvJHewYFqKs9ocAgypLKQhLIxR8PuL2yAiAe3%2ByzI2KYKzslakNWWp9AV%2F3q8F6inwtofAFHHNbvgSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM48VhlATFauRps3daKtwDaKEUDQKtMaVXWE9X%2FdcUnFJXsfdifKrH1zoAFZtt8gyaASabZI5K%2FdN%2FRhwPZHz7XPjuoZ6tbBVAcU%2BRUm%2FvF4PJvGLvcu9YQe3l93qJ3or7UqV0mHdRRp%2BXvVQcuPFcVjDD5fpsvmMwAmoAmU0e3jdXbFS1AxULQH1BSn8DvqHcE9%2BiUmf7SA741o3%2BAUROFrBa5DlDEJjUpTCMR9pHgfdPMVxLXfG0pE6vLIetVqpOiXGd%2BUTrzANkKl17kKZMaAsBsJLKFVU538VQiRww0tg1BQ0r8XwSKwnz4N777jeJTBnB4d0U%2FVNOx3A73oXVd7lE8vjjM3Bi0MKM8UGaQTm0LVzrLJCmNMQPFGY7soSsuupgMXnUjhENd%2BkifF1AIMtYletXoMNQaIfLQx2UwHl4rqDulOFb%2FXpAeWyb2JjfOPRr42uWRg6V8%2FWpzpTmHUycIbS%2FpHjg6WkYCP6PvTu6CwHaqlh486oWil3lc%2F3jaki%2BMnmR%2B9yr%2FWcHCnWs9GtnAgWvZ03I6RzD%2BKF0ZnTXzKFEz5rS1YygphkawPI0r1pZcj%2BmY4ssnMrFs1xIMkHSPo0%2BXHO8QHitNRGdf%2FgCD9e5Eo2CpWUOxJ0DTiP%2BPNnGBO%2BTHdN7UzAwgMO8xAY6pgGdxclf9qkHu860CKIBnfdqaSlHZBkejE1vo%2FwcW2PdmVd2IZJlcABXxXDVjitSkVqGwRCsz0d0BSFPIRQvmSQ%2BzzJJMKfzNeItqxE%2FQGNrlHuvdnbcDKBOnsy5N12mu%2F8EBFFEf36KvBkAxuantEp3XlEJvdLu81Hu%2Br1DhfDtFffk8UtZisQGnb87R0LzlEKQEki14CnlmhEqbxxmLD1XGpNy%2Bxf1&X-Amz-Signature=95d97c07d465e61f67ff751b382c248965d0d7a3c894e716d44c0bc544603fc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWQBWPOX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2Fam8To%2F77%2FKvJHewYFqKs9ocAgypLKQhLIxR8PuL2yAiAe3%2ByzI2KYKzslakNWWp9AV%2F3q8F6inwtofAFHHNbvgSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM48VhlATFauRps3daKtwDaKEUDQKtMaVXWE9X%2FdcUnFJXsfdifKrH1zoAFZtt8gyaASabZI5K%2FdN%2FRhwPZHz7XPjuoZ6tbBVAcU%2BRUm%2FvF4PJvGLvcu9YQe3l93qJ3or7UqV0mHdRRp%2BXvVQcuPFcVjDD5fpsvmMwAmoAmU0e3jdXbFS1AxULQH1BSn8DvqHcE9%2BiUmf7SA741o3%2BAUROFrBa5DlDEJjUpTCMR9pHgfdPMVxLXfG0pE6vLIetVqpOiXGd%2BUTrzANkKl17kKZMaAsBsJLKFVU538VQiRww0tg1BQ0r8XwSKwnz4N777jeJTBnB4d0U%2FVNOx3A73oXVd7lE8vjjM3Bi0MKM8UGaQTm0LVzrLJCmNMQPFGY7soSsuupgMXnUjhENd%2BkifF1AIMtYletXoMNQaIfLQx2UwHl4rqDulOFb%2FXpAeWyb2JjfOPRr42uWRg6V8%2FWpzpTmHUycIbS%2FpHjg6WkYCP6PvTu6CwHaqlh486oWil3lc%2F3jaki%2BMnmR%2B9yr%2FWcHCnWs9GtnAgWvZ03I6RzD%2BKF0ZnTXzKFEz5rS1YygphkawPI0r1pZcj%2BmY4ssnMrFs1xIMkHSPo0%2BXHO8QHitNRGdf%2FgCD9e5Eo2CpWUOxJ0DTiP%2BPNnGBO%2BTHdN7UzAwgMO8xAY6pgGdxclf9qkHu860CKIBnfdqaSlHZBkejE1vo%2FwcW2PdmVd2IZJlcABXxXDVjitSkVqGwRCsz0d0BSFPIRQvmSQ%2BzzJJMKfzNeItqxE%2FQGNrlHuvdnbcDKBOnsy5N12mu%2F8EBFFEf36KvBkAxuantEp3XlEJvdLu81Hu%2Br1DhfDtFffk8UtZisQGnb87R0LzlEKQEki14CnlmhEqbxxmLD1XGpNy%2Bxf1&X-Amz-Signature=28113d7062f8ffb69412e4b306edad7339d735bc3ede6dff7ff5b65ef1a343ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWQBWPOX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2Fam8To%2F77%2FKvJHewYFqKs9ocAgypLKQhLIxR8PuL2yAiAe3%2ByzI2KYKzslakNWWp9AV%2F3q8F6inwtofAFHHNbvgSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM48VhlATFauRps3daKtwDaKEUDQKtMaVXWE9X%2FdcUnFJXsfdifKrH1zoAFZtt8gyaASabZI5K%2FdN%2FRhwPZHz7XPjuoZ6tbBVAcU%2BRUm%2FvF4PJvGLvcu9YQe3l93qJ3or7UqV0mHdRRp%2BXvVQcuPFcVjDD5fpsvmMwAmoAmU0e3jdXbFS1AxULQH1BSn8DvqHcE9%2BiUmf7SA741o3%2BAUROFrBa5DlDEJjUpTCMR9pHgfdPMVxLXfG0pE6vLIetVqpOiXGd%2BUTrzANkKl17kKZMaAsBsJLKFVU538VQiRww0tg1BQ0r8XwSKwnz4N777jeJTBnB4d0U%2FVNOx3A73oXVd7lE8vjjM3Bi0MKM8UGaQTm0LVzrLJCmNMQPFGY7soSsuupgMXnUjhENd%2BkifF1AIMtYletXoMNQaIfLQx2UwHl4rqDulOFb%2FXpAeWyb2JjfOPRr42uWRg6V8%2FWpzpTmHUycIbS%2FpHjg6WkYCP6PvTu6CwHaqlh486oWil3lc%2F3jaki%2BMnmR%2B9yr%2FWcHCnWs9GtnAgWvZ03I6RzD%2BKF0ZnTXzKFEz5rS1YygphkawPI0r1pZcj%2BmY4ssnMrFs1xIMkHSPo0%2BXHO8QHitNRGdf%2FgCD9e5Eo2CpWUOxJ0DTiP%2BPNnGBO%2BTHdN7UzAwgMO8xAY6pgGdxclf9qkHu860CKIBnfdqaSlHZBkejE1vo%2FwcW2PdmVd2IZJlcABXxXDVjitSkVqGwRCsz0d0BSFPIRQvmSQ%2BzzJJMKfzNeItqxE%2FQGNrlHuvdnbcDKBOnsy5N12mu%2F8EBFFEf36KvBkAxuantEp3XlEJvdLu81Hu%2Br1DhfDtFffk8UtZisQGnb87R0LzlEKQEki14CnlmhEqbxxmLD1XGpNy%2Bxf1&X-Amz-Signature=7108a5580948fdb66e2f8fb93fa2d7eb9207ccfb69ee3d990f69ecc4132f1957&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWQBWPOX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2Fam8To%2F77%2FKvJHewYFqKs9ocAgypLKQhLIxR8PuL2yAiAe3%2ByzI2KYKzslakNWWp9AV%2F3q8F6inwtofAFHHNbvgSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM48VhlATFauRps3daKtwDaKEUDQKtMaVXWE9X%2FdcUnFJXsfdifKrH1zoAFZtt8gyaASabZI5K%2FdN%2FRhwPZHz7XPjuoZ6tbBVAcU%2BRUm%2FvF4PJvGLvcu9YQe3l93qJ3or7UqV0mHdRRp%2BXvVQcuPFcVjDD5fpsvmMwAmoAmU0e3jdXbFS1AxULQH1BSn8DvqHcE9%2BiUmf7SA741o3%2BAUROFrBa5DlDEJjUpTCMR9pHgfdPMVxLXfG0pE6vLIetVqpOiXGd%2BUTrzANkKl17kKZMaAsBsJLKFVU538VQiRww0tg1BQ0r8XwSKwnz4N777jeJTBnB4d0U%2FVNOx3A73oXVd7lE8vjjM3Bi0MKM8UGaQTm0LVzrLJCmNMQPFGY7soSsuupgMXnUjhENd%2BkifF1AIMtYletXoMNQaIfLQx2UwHl4rqDulOFb%2FXpAeWyb2JjfOPRr42uWRg6V8%2FWpzpTmHUycIbS%2FpHjg6WkYCP6PvTu6CwHaqlh486oWil3lc%2F3jaki%2BMnmR%2B9yr%2FWcHCnWs9GtnAgWvZ03I6RzD%2BKF0ZnTXzKFEz5rS1YygphkawPI0r1pZcj%2BmY4ssnMrFs1xIMkHSPo0%2BXHO8QHitNRGdf%2FgCD9e5Eo2CpWUOxJ0DTiP%2BPNnGBO%2BTHdN7UzAwgMO8xAY6pgGdxclf9qkHu860CKIBnfdqaSlHZBkejE1vo%2FwcW2PdmVd2IZJlcABXxXDVjitSkVqGwRCsz0d0BSFPIRQvmSQ%2BzzJJMKfzNeItqxE%2FQGNrlHuvdnbcDKBOnsy5N12mu%2F8EBFFEf36KvBkAxuantEp3XlEJvdLu81Hu%2Br1DhfDtFffk8UtZisQGnb87R0LzlEKQEki14CnlmhEqbxxmLD1XGpNy%2Bxf1&X-Amz-Signature=439e262f0caed4bcfcc72bbe690efdf529f995ba599e201405bc9ef3b251bd6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWQBWPOX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2Fam8To%2F77%2FKvJHewYFqKs9ocAgypLKQhLIxR8PuL2yAiAe3%2ByzI2KYKzslakNWWp9AV%2F3q8F6inwtofAFHHNbvgSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM48VhlATFauRps3daKtwDaKEUDQKtMaVXWE9X%2FdcUnFJXsfdifKrH1zoAFZtt8gyaASabZI5K%2FdN%2FRhwPZHz7XPjuoZ6tbBVAcU%2BRUm%2FvF4PJvGLvcu9YQe3l93qJ3or7UqV0mHdRRp%2BXvVQcuPFcVjDD5fpsvmMwAmoAmU0e3jdXbFS1AxULQH1BSn8DvqHcE9%2BiUmf7SA741o3%2BAUROFrBa5DlDEJjUpTCMR9pHgfdPMVxLXfG0pE6vLIetVqpOiXGd%2BUTrzANkKl17kKZMaAsBsJLKFVU538VQiRww0tg1BQ0r8XwSKwnz4N777jeJTBnB4d0U%2FVNOx3A73oXVd7lE8vjjM3Bi0MKM8UGaQTm0LVzrLJCmNMQPFGY7soSsuupgMXnUjhENd%2BkifF1AIMtYletXoMNQaIfLQx2UwHl4rqDulOFb%2FXpAeWyb2JjfOPRr42uWRg6V8%2FWpzpTmHUycIbS%2FpHjg6WkYCP6PvTu6CwHaqlh486oWil3lc%2F3jaki%2BMnmR%2B9yr%2FWcHCnWs9GtnAgWvZ03I6RzD%2BKF0ZnTXzKFEz5rS1YygphkawPI0r1pZcj%2BmY4ssnMrFs1xIMkHSPo0%2BXHO8QHitNRGdf%2FgCD9e5Eo2CpWUOxJ0DTiP%2BPNnGBO%2BTHdN7UzAwgMO8xAY6pgGdxclf9qkHu860CKIBnfdqaSlHZBkejE1vo%2FwcW2PdmVd2IZJlcABXxXDVjitSkVqGwRCsz0d0BSFPIRQvmSQ%2BzzJJMKfzNeItqxE%2FQGNrlHuvdnbcDKBOnsy5N12mu%2F8EBFFEf36KvBkAxuantEp3XlEJvdLu81Hu%2Br1DhfDtFffk8UtZisQGnb87R0LzlEKQEki14CnlmhEqbxxmLD1XGpNy%2Bxf1&X-Amz-Signature=d6b94da3285e1a8db7e0df50f834bea29c4724a8b9931a248287d89acd59cd6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWQBWPOX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2Fam8To%2F77%2FKvJHewYFqKs9ocAgypLKQhLIxR8PuL2yAiAe3%2ByzI2KYKzslakNWWp9AV%2F3q8F6inwtofAFHHNbvgSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM48VhlATFauRps3daKtwDaKEUDQKtMaVXWE9X%2FdcUnFJXsfdifKrH1zoAFZtt8gyaASabZI5K%2FdN%2FRhwPZHz7XPjuoZ6tbBVAcU%2BRUm%2FvF4PJvGLvcu9YQe3l93qJ3or7UqV0mHdRRp%2BXvVQcuPFcVjDD5fpsvmMwAmoAmU0e3jdXbFS1AxULQH1BSn8DvqHcE9%2BiUmf7SA741o3%2BAUROFrBa5DlDEJjUpTCMR9pHgfdPMVxLXfG0pE6vLIetVqpOiXGd%2BUTrzANkKl17kKZMaAsBsJLKFVU538VQiRww0tg1BQ0r8XwSKwnz4N777jeJTBnB4d0U%2FVNOx3A73oXVd7lE8vjjM3Bi0MKM8UGaQTm0LVzrLJCmNMQPFGY7soSsuupgMXnUjhENd%2BkifF1AIMtYletXoMNQaIfLQx2UwHl4rqDulOFb%2FXpAeWyb2JjfOPRr42uWRg6V8%2FWpzpTmHUycIbS%2FpHjg6WkYCP6PvTu6CwHaqlh486oWil3lc%2F3jaki%2BMnmR%2B9yr%2FWcHCnWs9GtnAgWvZ03I6RzD%2BKF0ZnTXzKFEz5rS1YygphkawPI0r1pZcj%2BmY4ssnMrFs1xIMkHSPo0%2BXHO8QHitNRGdf%2FgCD9e5Eo2CpWUOxJ0DTiP%2BPNnGBO%2BTHdN7UzAwgMO8xAY6pgGdxclf9qkHu860CKIBnfdqaSlHZBkejE1vo%2FwcW2PdmVd2IZJlcABXxXDVjitSkVqGwRCsz0d0BSFPIRQvmSQ%2BzzJJMKfzNeItqxE%2FQGNrlHuvdnbcDKBOnsy5N12mu%2F8EBFFEf36KvBkAxuantEp3XlEJvdLu81Hu%2Br1DhfDtFffk8UtZisQGnb87R0LzlEKQEki14CnlmhEqbxxmLD1XGpNy%2Bxf1&X-Amz-Signature=c0200bb6ba14c95cd30373503e5d52f6b8dfaa5fccaab1c36dc6d80ca66e3223&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWQBWPOX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2Fam8To%2F77%2FKvJHewYFqKs9ocAgypLKQhLIxR8PuL2yAiAe3%2ByzI2KYKzslakNWWp9AV%2F3q8F6inwtofAFHHNbvgSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM48VhlATFauRps3daKtwDaKEUDQKtMaVXWE9X%2FdcUnFJXsfdifKrH1zoAFZtt8gyaASabZI5K%2FdN%2FRhwPZHz7XPjuoZ6tbBVAcU%2BRUm%2FvF4PJvGLvcu9YQe3l93qJ3or7UqV0mHdRRp%2BXvVQcuPFcVjDD5fpsvmMwAmoAmU0e3jdXbFS1AxULQH1BSn8DvqHcE9%2BiUmf7SA741o3%2BAUROFrBa5DlDEJjUpTCMR9pHgfdPMVxLXfG0pE6vLIetVqpOiXGd%2BUTrzANkKl17kKZMaAsBsJLKFVU538VQiRww0tg1BQ0r8XwSKwnz4N777jeJTBnB4d0U%2FVNOx3A73oXVd7lE8vjjM3Bi0MKM8UGaQTm0LVzrLJCmNMQPFGY7soSsuupgMXnUjhENd%2BkifF1AIMtYletXoMNQaIfLQx2UwHl4rqDulOFb%2FXpAeWyb2JjfOPRr42uWRg6V8%2FWpzpTmHUycIbS%2FpHjg6WkYCP6PvTu6CwHaqlh486oWil3lc%2F3jaki%2BMnmR%2B9yr%2FWcHCnWs9GtnAgWvZ03I6RzD%2BKF0ZnTXzKFEz5rS1YygphkawPI0r1pZcj%2BmY4ssnMrFs1xIMkHSPo0%2BXHO8QHitNRGdf%2FgCD9e5Eo2CpWUOxJ0DTiP%2BPNnGBO%2BTHdN7UzAwgMO8xAY6pgGdxclf9qkHu860CKIBnfdqaSlHZBkejE1vo%2FwcW2PdmVd2IZJlcABXxXDVjitSkVqGwRCsz0d0BSFPIRQvmSQ%2BzzJJMKfzNeItqxE%2FQGNrlHuvdnbcDKBOnsy5N12mu%2F8EBFFEf36KvBkAxuantEp3XlEJvdLu81Hu%2Br1DhfDtFffk8UtZisQGnb87R0LzlEKQEki14CnlmhEqbxxmLD1XGpNy%2Bxf1&X-Amz-Signature=8ab8f896d5ef59c45d0250f6f233d305d580f9d589ae2fa7cb2079a061063225&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWQBWPOX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2Fam8To%2F77%2FKvJHewYFqKs9ocAgypLKQhLIxR8PuL2yAiAe3%2ByzI2KYKzslakNWWp9AV%2F3q8F6inwtofAFHHNbvgSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM48VhlATFauRps3daKtwDaKEUDQKtMaVXWE9X%2FdcUnFJXsfdifKrH1zoAFZtt8gyaASabZI5K%2FdN%2FRhwPZHz7XPjuoZ6tbBVAcU%2BRUm%2FvF4PJvGLvcu9YQe3l93qJ3or7UqV0mHdRRp%2BXvVQcuPFcVjDD5fpsvmMwAmoAmU0e3jdXbFS1AxULQH1BSn8DvqHcE9%2BiUmf7SA741o3%2BAUROFrBa5DlDEJjUpTCMR9pHgfdPMVxLXfG0pE6vLIetVqpOiXGd%2BUTrzANkKl17kKZMaAsBsJLKFVU538VQiRww0tg1BQ0r8XwSKwnz4N777jeJTBnB4d0U%2FVNOx3A73oXVd7lE8vjjM3Bi0MKM8UGaQTm0LVzrLJCmNMQPFGY7soSsuupgMXnUjhENd%2BkifF1AIMtYletXoMNQaIfLQx2UwHl4rqDulOFb%2FXpAeWyb2JjfOPRr42uWRg6V8%2FWpzpTmHUycIbS%2FpHjg6WkYCP6PvTu6CwHaqlh486oWil3lc%2F3jaki%2BMnmR%2B9yr%2FWcHCnWs9GtnAgWvZ03I6RzD%2BKF0ZnTXzKFEz5rS1YygphkawPI0r1pZcj%2BmY4ssnMrFs1xIMkHSPo0%2BXHO8QHitNRGdf%2FgCD9e5Eo2CpWUOxJ0DTiP%2BPNnGBO%2BTHdN7UzAwgMO8xAY6pgGdxclf9qkHu860CKIBnfdqaSlHZBkejE1vo%2FwcW2PdmVd2IZJlcABXxXDVjitSkVqGwRCsz0d0BSFPIRQvmSQ%2BzzJJMKfzNeItqxE%2FQGNrlHuvdnbcDKBOnsy5N12mu%2F8EBFFEf36KvBkAxuantEp3XlEJvdLu81Hu%2Br1DhfDtFffk8UtZisQGnb87R0LzlEKQEki14CnlmhEqbxxmLD1XGpNy%2Bxf1&X-Amz-Signature=ba081c44d557e3c9dd27933196d0310b3df3a01b59b96cae3e6f65bbcc2495a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWQBWPOX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2Fam8To%2F77%2FKvJHewYFqKs9ocAgypLKQhLIxR8PuL2yAiAe3%2ByzI2KYKzslakNWWp9AV%2F3q8F6inwtofAFHHNbvgSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM48VhlATFauRps3daKtwDaKEUDQKtMaVXWE9X%2FdcUnFJXsfdifKrH1zoAFZtt8gyaASabZI5K%2FdN%2FRhwPZHz7XPjuoZ6tbBVAcU%2BRUm%2FvF4PJvGLvcu9YQe3l93qJ3or7UqV0mHdRRp%2BXvVQcuPFcVjDD5fpsvmMwAmoAmU0e3jdXbFS1AxULQH1BSn8DvqHcE9%2BiUmf7SA741o3%2BAUROFrBa5DlDEJjUpTCMR9pHgfdPMVxLXfG0pE6vLIetVqpOiXGd%2BUTrzANkKl17kKZMaAsBsJLKFVU538VQiRww0tg1BQ0r8XwSKwnz4N777jeJTBnB4d0U%2FVNOx3A73oXVd7lE8vjjM3Bi0MKM8UGaQTm0LVzrLJCmNMQPFGY7soSsuupgMXnUjhENd%2BkifF1AIMtYletXoMNQaIfLQx2UwHl4rqDulOFb%2FXpAeWyb2JjfOPRr42uWRg6V8%2FWpzpTmHUycIbS%2FpHjg6WkYCP6PvTu6CwHaqlh486oWil3lc%2F3jaki%2BMnmR%2B9yr%2FWcHCnWs9GtnAgWvZ03I6RzD%2BKF0ZnTXzKFEz5rS1YygphkawPI0r1pZcj%2BmY4ssnMrFs1xIMkHSPo0%2BXHO8QHitNRGdf%2FgCD9e5Eo2CpWUOxJ0DTiP%2BPNnGBO%2BTHdN7UzAwgMO8xAY6pgGdxclf9qkHu860CKIBnfdqaSlHZBkejE1vo%2FwcW2PdmVd2IZJlcABXxXDVjitSkVqGwRCsz0d0BSFPIRQvmSQ%2BzzJJMKfzNeItqxE%2FQGNrlHuvdnbcDKBOnsy5N12mu%2F8EBFFEf36KvBkAxuantEp3XlEJvdLu81Hu%2Br1DhfDtFffk8UtZisQGnb87R0LzlEKQEki14CnlmhEqbxxmLD1XGpNy%2Bxf1&X-Amz-Signature=714c6866ce90aa0180a72f2f0244ea5ae7b31d79a1bf074c455bfaa14786cfd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWQBWPOX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2Fam8To%2F77%2FKvJHewYFqKs9ocAgypLKQhLIxR8PuL2yAiAe3%2ByzI2KYKzslakNWWp9AV%2F3q8F6inwtofAFHHNbvgSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM48VhlATFauRps3daKtwDaKEUDQKtMaVXWE9X%2FdcUnFJXsfdifKrH1zoAFZtt8gyaASabZI5K%2FdN%2FRhwPZHz7XPjuoZ6tbBVAcU%2BRUm%2FvF4PJvGLvcu9YQe3l93qJ3or7UqV0mHdRRp%2BXvVQcuPFcVjDD5fpsvmMwAmoAmU0e3jdXbFS1AxULQH1BSn8DvqHcE9%2BiUmf7SA741o3%2BAUROFrBa5DlDEJjUpTCMR9pHgfdPMVxLXfG0pE6vLIetVqpOiXGd%2BUTrzANkKl17kKZMaAsBsJLKFVU538VQiRww0tg1BQ0r8XwSKwnz4N777jeJTBnB4d0U%2FVNOx3A73oXVd7lE8vjjM3Bi0MKM8UGaQTm0LVzrLJCmNMQPFGY7soSsuupgMXnUjhENd%2BkifF1AIMtYletXoMNQaIfLQx2UwHl4rqDulOFb%2FXpAeWyb2JjfOPRr42uWRg6V8%2FWpzpTmHUycIbS%2FpHjg6WkYCP6PvTu6CwHaqlh486oWil3lc%2F3jaki%2BMnmR%2B9yr%2FWcHCnWs9GtnAgWvZ03I6RzD%2BKF0ZnTXzKFEz5rS1YygphkawPI0r1pZcj%2BmY4ssnMrFs1xIMkHSPo0%2BXHO8QHitNRGdf%2FgCD9e5Eo2CpWUOxJ0DTiP%2BPNnGBO%2BTHdN7UzAwgMO8xAY6pgGdxclf9qkHu860CKIBnfdqaSlHZBkejE1vo%2FwcW2PdmVd2IZJlcABXxXDVjitSkVqGwRCsz0d0BSFPIRQvmSQ%2BzzJJMKfzNeItqxE%2FQGNrlHuvdnbcDKBOnsy5N12mu%2F8EBFFEf36KvBkAxuantEp3XlEJvdLu81Hu%2Br1DhfDtFffk8UtZisQGnb87R0LzlEKQEki14CnlmhEqbxxmLD1XGpNy%2Bxf1&X-Amz-Signature=f0133af1ee1a7cdf417f954b64f819104eb0f17527f5b6053132b76f9693970f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWQBWPOX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2Fam8To%2F77%2FKvJHewYFqKs9ocAgypLKQhLIxR8PuL2yAiAe3%2ByzI2KYKzslakNWWp9AV%2F3q8F6inwtofAFHHNbvgSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM48VhlATFauRps3daKtwDaKEUDQKtMaVXWE9X%2FdcUnFJXsfdifKrH1zoAFZtt8gyaASabZI5K%2FdN%2FRhwPZHz7XPjuoZ6tbBVAcU%2BRUm%2FvF4PJvGLvcu9YQe3l93qJ3or7UqV0mHdRRp%2BXvVQcuPFcVjDD5fpsvmMwAmoAmU0e3jdXbFS1AxULQH1BSn8DvqHcE9%2BiUmf7SA741o3%2BAUROFrBa5DlDEJjUpTCMR9pHgfdPMVxLXfG0pE6vLIetVqpOiXGd%2BUTrzANkKl17kKZMaAsBsJLKFVU538VQiRww0tg1BQ0r8XwSKwnz4N777jeJTBnB4d0U%2FVNOx3A73oXVd7lE8vjjM3Bi0MKM8UGaQTm0LVzrLJCmNMQPFGY7soSsuupgMXnUjhENd%2BkifF1AIMtYletXoMNQaIfLQx2UwHl4rqDulOFb%2FXpAeWyb2JjfOPRr42uWRg6V8%2FWpzpTmHUycIbS%2FpHjg6WkYCP6PvTu6CwHaqlh486oWil3lc%2F3jaki%2BMnmR%2B9yr%2FWcHCnWs9GtnAgWvZ03I6RzD%2BKF0ZnTXzKFEz5rS1YygphkawPI0r1pZcj%2BmY4ssnMrFs1xIMkHSPo0%2BXHO8QHitNRGdf%2FgCD9e5Eo2CpWUOxJ0DTiP%2BPNnGBO%2BTHdN7UzAwgMO8xAY6pgGdxclf9qkHu860CKIBnfdqaSlHZBkejE1vo%2FwcW2PdmVd2IZJlcABXxXDVjitSkVqGwRCsz0d0BSFPIRQvmSQ%2BzzJJMKfzNeItqxE%2FQGNrlHuvdnbcDKBOnsy5N12mu%2F8EBFFEf36KvBkAxuantEp3XlEJvdLu81Hu%2Br1DhfDtFffk8UtZisQGnb87R0LzlEKQEki14CnlmhEqbxxmLD1XGpNy%2Bxf1&X-Amz-Signature=a9ab80eaaa343a3a4e1db6794c8c7678141b61a17fcbc5bdc04bf131ad12c426&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWQBWPOX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2Fam8To%2F77%2FKvJHewYFqKs9ocAgypLKQhLIxR8PuL2yAiAe3%2ByzI2KYKzslakNWWp9AV%2F3q8F6inwtofAFHHNbvgSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM48VhlATFauRps3daKtwDaKEUDQKtMaVXWE9X%2FdcUnFJXsfdifKrH1zoAFZtt8gyaASabZI5K%2FdN%2FRhwPZHz7XPjuoZ6tbBVAcU%2BRUm%2FvF4PJvGLvcu9YQe3l93qJ3or7UqV0mHdRRp%2BXvVQcuPFcVjDD5fpsvmMwAmoAmU0e3jdXbFS1AxULQH1BSn8DvqHcE9%2BiUmf7SA741o3%2BAUROFrBa5DlDEJjUpTCMR9pHgfdPMVxLXfG0pE6vLIetVqpOiXGd%2BUTrzANkKl17kKZMaAsBsJLKFVU538VQiRww0tg1BQ0r8XwSKwnz4N777jeJTBnB4d0U%2FVNOx3A73oXVd7lE8vjjM3Bi0MKM8UGaQTm0LVzrLJCmNMQPFGY7soSsuupgMXnUjhENd%2BkifF1AIMtYletXoMNQaIfLQx2UwHl4rqDulOFb%2FXpAeWyb2JjfOPRr42uWRg6V8%2FWpzpTmHUycIbS%2FpHjg6WkYCP6PvTu6CwHaqlh486oWil3lc%2F3jaki%2BMnmR%2B9yr%2FWcHCnWs9GtnAgWvZ03I6RzD%2BKF0ZnTXzKFEz5rS1YygphkawPI0r1pZcj%2BmY4ssnMrFs1xIMkHSPo0%2BXHO8QHitNRGdf%2FgCD9e5Eo2CpWUOxJ0DTiP%2BPNnGBO%2BTHdN7UzAwgMO8xAY6pgGdxclf9qkHu860CKIBnfdqaSlHZBkejE1vo%2FwcW2PdmVd2IZJlcABXxXDVjitSkVqGwRCsz0d0BSFPIRQvmSQ%2BzzJJMKfzNeItqxE%2FQGNrlHuvdnbcDKBOnsy5N12mu%2F8EBFFEf36KvBkAxuantEp3XlEJvdLu81Hu%2Br1DhfDtFffk8UtZisQGnb87R0LzlEKQEki14CnlmhEqbxxmLD1XGpNy%2Bxf1&X-Amz-Signature=cc470b5d735b6cec79d8924a51d9d547891ded2d0106c418a312432c65c0f1df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWQBWPOX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID%2Fam8To%2F77%2FKvJHewYFqKs9ocAgypLKQhLIxR8PuL2yAiAe3%2ByzI2KYKzslakNWWp9AV%2F3q8F6inwtofAFHHNbvgSr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM48VhlATFauRps3daKtwDaKEUDQKtMaVXWE9X%2FdcUnFJXsfdifKrH1zoAFZtt8gyaASabZI5K%2FdN%2FRhwPZHz7XPjuoZ6tbBVAcU%2BRUm%2FvF4PJvGLvcu9YQe3l93qJ3or7UqV0mHdRRp%2BXvVQcuPFcVjDD5fpsvmMwAmoAmU0e3jdXbFS1AxULQH1BSn8DvqHcE9%2BiUmf7SA741o3%2BAUROFrBa5DlDEJjUpTCMR9pHgfdPMVxLXfG0pE6vLIetVqpOiXGd%2BUTrzANkKl17kKZMaAsBsJLKFVU538VQiRww0tg1BQ0r8XwSKwnz4N777jeJTBnB4d0U%2FVNOx3A73oXVd7lE8vjjM3Bi0MKM8UGaQTm0LVzrLJCmNMQPFGY7soSsuupgMXnUjhENd%2BkifF1AIMtYletXoMNQaIfLQx2UwHl4rqDulOFb%2FXpAeWyb2JjfOPRr42uWRg6V8%2FWpzpTmHUycIbS%2FpHjg6WkYCP6PvTu6CwHaqlh486oWil3lc%2F3jaki%2BMnmR%2B9yr%2FWcHCnWs9GtnAgWvZ03I6RzD%2BKF0ZnTXzKFEz5rS1YygphkawPI0r1pZcj%2BmY4ssnMrFs1xIMkHSPo0%2BXHO8QHitNRGdf%2FgCD9e5Eo2CpWUOxJ0DTiP%2BPNnGBO%2BTHdN7UzAwgMO8xAY6pgGdxclf9qkHu860CKIBnfdqaSlHZBkejE1vo%2FwcW2PdmVd2IZJlcABXxXDVjitSkVqGwRCsz0d0BSFPIRQvmSQ%2BzzJJMKfzNeItqxE%2FQGNrlHuvdnbcDKBOnsy5N12mu%2F8EBFFEf36KvBkAxuantEp3XlEJvdLu81Hu%2Br1DhfDtFffk8UtZisQGnb87R0LzlEKQEki14CnlmhEqbxxmLD1XGpNy%2Bxf1&X-Amz-Signature=5519d1ddd4a6a12b96c0a6c2bb8aff3ac2ed23e70bbad704b3afaf9e6d117e4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
