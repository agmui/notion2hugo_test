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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HTRFEJQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLZr7pL%2FWtsWdirn3J44h5reNPECfTigtlQSiiFSBdYAiEAzz0TkCikk71jFIDAImqS3JnQYhtndvnYST4nCzf6kB0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBhv%2FIG7oKJ22Z4Z0yrcA4pwTbBw82uIgWdU3imIIWeep%2FiL4R8t7xnRvlWqmefCEmKfkWrERE6uAkjaK9%2FydvEbmsL7AZi%2BHEdJnsooXrXIrDIwxTYKynhqBsEkTcCeJNIwYAzRt6VZjAzdO8JP8dgVDjVAik2xgdtYie2O93usHIWonT7U9HlOyAW%2BB%2FgJnyXS9F2zgxzBHbcbcxmCgFEcN7NJpFwMbFZgobMoj0TNLfzOl9QoOAOMHdDJwT%2BiwDdxWNi35c%2BFZPlDZe4AfmZjYPhQjJMH%2BKd9XU5cF2elZgBE17wUtN5SbRa6OS1L7cVfpowsvUpCMyBcZfM%2BHDpgQhU5psbkMmZw59JdNHZvE77noiTYx5czwnMdigwO%2B2U6eo9dbS%2FDxau6d7%2BTJS0HPsvxlwBdxXJ6O7ByTxyVdIbX4UXB7kUUXUsW36iAeCZ2QCSsZcmRB8G0nb3diV1kAdKz6KsSVj%2B4zmFId6e3R3h9rtMzV1vphEK3P73JB41linJLAnyrvFtWXI15B5eLvNa0xlCjs7RZzOPrFqNodCIXSWJrot0UoOYZK%2FwhD3tkaXsvEdZYjnncIWL6g8DG2ks1m%2FMGSXhkN%2FOe1G79vmws61dMBFceexhT1cBh%2BH%2Brdg3IW8mK0EO9MPbZvsQGOqUBobF7R%2BEpr%2Fk06CNS9FvcIb3Novzmf7tnZd5TzdT0UuFJWGuRpBF6zsVa5NFV2UbE3XPHorFZsO3q0L2Ibj75F4cz1koHfeWVSESP7N1faoAay8E2Cpo3atAPMxnMVJ98yZx6wdpCR1XR9Lx77pItiL8ftqlwPQcQPYEMa6GyBTPQQHZabMhK9%2BniQPjGH10Xqa3ejmzb%2F0fPB3iuS8UQNTaZodaJ&X-Amz-Signature=1dcc782a602c11880c0ab1e8bcd53c77af05661151778db3619cf6e54ada94c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HTRFEJQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLZr7pL%2FWtsWdirn3J44h5reNPECfTigtlQSiiFSBdYAiEAzz0TkCikk71jFIDAImqS3JnQYhtndvnYST4nCzf6kB0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBhv%2FIG7oKJ22Z4Z0yrcA4pwTbBw82uIgWdU3imIIWeep%2FiL4R8t7xnRvlWqmefCEmKfkWrERE6uAkjaK9%2FydvEbmsL7AZi%2BHEdJnsooXrXIrDIwxTYKynhqBsEkTcCeJNIwYAzRt6VZjAzdO8JP8dgVDjVAik2xgdtYie2O93usHIWonT7U9HlOyAW%2BB%2FgJnyXS9F2zgxzBHbcbcxmCgFEcN7NJpFwMbFZgobMoj0TNLfzOl9QoOAOMHdDJwT%2BiwDdxWNi35c%2BFZPlDZe4AfmZjYPhQjJMH%2BKd9XU5cF2elZgBE17wUtN5SbRa6OS1L7cVfpowsvUpCMyBcZfM%2BHDpgQhU5psbkMmZw59JdNHZvE77noiTYx5czwnMdigwO%2B2U6eo9dbS%2FDxau6d7%2BTJS0HPsvxlwBdxXJ6O7ByTxyVdIbX4UXB7kUUXUsW36iAeCZ2QCSsZcmRB8G0nb3diV1kAdKz6KsSVj%2B4zmFId6e3R3h9rtMzV1vphEK3P73JB41linJLAnyrvFtWXI15B5eLvNa0xlCjs7RZzOPrFqNodCIXSWJrot0UoOYZK%2FwhD3tkaXsvEdZYjnncIWL6g8DG2ks1m%2FMGSXhkN%2FOe1G79vmws61dMBFceexhT1cBh%2BH%2Brdg3IW8mK0EO9MPbZvsQGOqUBobF7R%2BEpr%2Fk06CNS9FvcIb3Novzmf7tnZd5TzdT0UuFJWGuRpBF6zsVa5NFV2UbE3XPHorFZsO3q0L2Ibj75F4cz1koHfeWVSESP7N1faoAay8E2Cpo3atAPMxnMVJ98yZx6wdpCR1XR9Lx77pItiL8ftqlwPQcQPYEMa6GyBTPQQHZabMhK9%2BniQPjGH10Xqa3ejmzb%2F0fPB3iuS8UQNTaZodaJ&X-Amz-Signature=1aed3fdb82089932bf810d591c2aa302f342a4712cc05df4defb7fe101ab29e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HTRFEJQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLZr7pL%2FWtsWdirn3J44h5reNPECfTigtlQSiiFSBdYAiEAzz0TkCikk71jFIDAImqS3JnQYhtndvnYST4nCzf6kB0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBhv%2FIG7oKJ22Z4Z0yrcA4pwTbBw82uIgWdU3imIIWeep%2FiL4R8t7xnRvlWqmefCEmKfkWrERE6uAkjaK9%2FydvEbmsL7AZi%2BHEdJnsooXrXIrDIwxTYKynhqBsEkTcCeJNIwYAzRt6VZjAzdO8JP8dgVDjVAik2xgdtYie2O93usHIWonT7U9HlOyAW%2BB%2FgJnyXS9F2zgxzBHbcbcxmCgFEcN7NJpFwMbFZgobMoj0TNLfzOl9QoOAOMHdDJwT%2BiwDdxWNi35c%2BFZPlDZe4AfmZjYPhQjJMH%2BKd9XU5cF2elZgBE17wUtN5SbRa6OS1L7cVfpowsvUpCMyBcZfM%2BHDpgQhU5psbkMmZw59JdNHZvE77noiTYx5czwnMdigwO%2B2U6eo9dbS%2FDxau6d7%2BTJS0HPsvxlwBdxXJ6O7ByTxyVdIbX4UXB7kUUXUsW36iAeCZ2QCSsZcmRB8G0nb3diV1kAdKz6KsSVj%2B4zmFId6e3R3h9rtMzV1vphEK3P73JB41linJLAnyrvFtWXI15B5eLvNa0xlCjs7RZzOPrFqNodCIXSWJrot0UoOYZK%2FwhD3tkaXsvEdZYjnncIWL6g8DG2ks1m%2FMGSXhkN%2FOe1G79vmws61dMBFceexhT1cBh%2BH%2Brdg3IW8mK0EO9MPbZvsQGOqUBobF7R%2BEpr%2Fk06CNS9FvcIb3Novzmf7tnZd5TzdT0UuFJWGuRpBF6zsVa5NFV2UbE3XPHorFZsO3q0L2Ibj75F4cz1koHfeWVSESP7N1faoAay8E2Cpo3atAPMxnMVJ98yZx6wdpCR1XR9Lx77pItiL8ftqlwPQcQPYEMa6GyBTPQQHZabMhK9%2BniQPjGH10Xqa3ejmzb%2F0fPB3iuS8UQNTaZodaJ&X-Amz-Signature=0d0c951abe6d4d4e1aed92fa5ba42542bf079a0847c00bd01cfae50ac89a58bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HTRFEJQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLZr7pL%2FWtsWdirn3J44h5reNPECfTigtlQSiiFSBdYAiEAzz0TkCikk71jFIDAImqS3JnQYhtndvnYST4nCzf6kB0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBhv%2FIG7oKJ22Z4Z0yrcA4pwTbBw82uIgWdU3imIIWeep%2FiL4R8t7xnRvlWqmefCEmKfkWrERE6uAkjaK9%2FydvEbmsL7AZi%2BHEdJnsooXrXIrDIwxTYKynhqBsEkTcCeJNIwYAzRt6VZjAzdO8JP8dgVDjVAik2xgdtYie2O93usHIWonT7U9HlOyAW%2BB%2FgJnyXS9F2zgxzBHbcbcxmCgFEcN7NJpFwMbFZgobMoj0TNLfzOl9QoOAOMHdDJwT%2BiwDdxWNi35c%2BFZPlDZe4AfmZjYPhQjJMH%2BKd9XU5cF2elZgBE17wUtN5SbRa6OS1L7cVfpowsvUpCMyBcZfM%2BHDpgQhU5psbkMmZw59JdNHZvE77noiTYx5czwnMdigwO%2B2U6eo9dbS%2FDxau6d7%2BTJS0HPsvxlwBdxXJ6O7ByTxyVdIbX4UXB7kUUXUsW36iAeCZ2QCSsZcmRB8G0nb3diV1kAdKz6KsSVj%2B4zmFId6e3R3h9rtMzV1vphEK3P73JB41linJLAnyrvFtWXI15B5eLvNa0xlCjs7RZzOPrFqNodCIXSWJrot0UoOYZK%2FwhD3tkaXsvEdZYjnncIWL6g8DG2ks1m%2FMGSXhkN%2FOe1G79vmws61dMBFceexhT1cBh%2BH%2Brdg3IW8mK0EO9MPbZvsQGOqUBobF7R%2BEpr%2Fk06CNS9FvcIb3Novzmf7tnZd5TzdT0UuFJWGuRpBF6zsVa5NFV2UbE3XPHorFZsO3q0L2Ibj75F4cz1koHfeWVSESP7N1faoAay8E2Cpo3atAPMxnMVJ98yZx6wdpCR1XR9Lx77pItiL8ftqlwPQcQPYEMa6GyBTPQQHZabMhK9%2BniQPjGH10Xqa3ejmzb%2F0fPB3iuS8UQNTaZodaJ&X-Amz-Signature=d30e98e99c3c0aa72e54217163258343e55dbb6becf986734f2ed0c576269847&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HTRFEJQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLZr7pL%2FWtsWdirn3J44h5reNPECfTigtlQSiiFSBdYAiEAzz0TkCikk71jFIDAImqS3JnQYhtndvnYST4nCzf6kB0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBhv%2FIG7oKJ22Z4Z0yrcA4pwTbBw82uIgWdU3imIIWeep%2FiL4R8t7xnRvlWqmefCEmKfkWrERE6uAkjaK9%2FydvEbmsL7AZi%2BHEdJnsooXrXIrDIwxTYKynhqBsEkTcCeJNIwYAzRt6VZjAzdO8JP8dgVDjVAik2xgdtYie2O93usHIWonT7U9HlOyAW%2BB%2FgJnyXS9F2zgxzBHbcbcxmCgFEcN7NJpFwMbFZgobMoj0TNLfzOl9QoOAOMHdDJwT%2BiwDdxWNi35c%2BFZPlDZe4AfmZjYPhQjJMH%2BKd9XU5cF2elZgBE17wUtN5SbRa6OS1L7cVfpowsvUpCMyBcZfM%2BHDpgQhU5psbkMmZw59JdNHZvE77noiTYx5czwnMdigwO%2B2U6eo9dbS%2FDxau6d7%2BTJS0HPsvxlwBdxXJ6O7ByTxyVdIbX4UXB7kUUXUsW36iAeCZ2QCSsZcmRB8G0nb3diV1kAdKz6KsSVj%2B4zmFId6e3R3h9rtMzV1vphEK3P73JB41linJLAnyrvFtWXI15B5eLvNa0xlCjs7RZzOPrFqNodCIXSWJrot0UoOYZK%2FwhD3tkaXsvEdZYjnncIWL6g8DG2ks1m%2FMGSXhkN%2FOe1G79vmws61dMBFceexhT1cBh%2BH%2Brdg3IW8mK0EO9MPbZvsQGOqUBobF7R%2BEpr%2Fk06CNS9FvcIb3Novzmf7tnZd5TzdT0UuFJWGuRpBF6zsVa5NFV2UbE3XPHorFZsO3q0L2Ibj75F4cz1koHfeWVSESP7N1faoAay8E2Cpo3atAPMxnMVJ98yZx6wdpCR1XR9Lx77pItiL8ftqlwPQcQPYEMa6GyBTPQQHZabMhK9%2BniQPjGH10Xqa3ejmzb%2F0fPB3iuS8UQNTaZodaJ&X-Amz-Signature=352d0fadfbf484f94471d166cc1d594147af055660b2f9dcfb573d2b8bf371ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HTRFEJQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLZr7pL%2FWtsWdirn3J44h5reNPECfTigtlQSiiFSBdYAiEAzz0TkCikk71jFIDAImqS3JnQYhtndvnYST4nCzf6kB0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBhv%2FIG7oKJ22Z4Z0yrcA4pwTbBw82uIgWdU3imIIWeep%2FiL4R8t7xnRvlWqmefCEmKfkWrERE6uAkjaK9%2FydvEbmsL7AZi%2BHEdJnsooXrXIrDIwxTYKynhqBsEkTcCeJNIwYAzRt6VZjAzdO8JP8dgVDjVAik2xgdtYie2O93usHIWonT7U9HlOyAW%2BB%2FgJnyXS9F2zgxzBHbcbcxmCgFEcN7NJpFwMbFZgobMoj0TNLfzOl9QoOAOMHdDJwT%2BiwDdxWNi35c%2BFZPlDZe4AfmZjYPhQjJMH%2BKd9XU5cF2elZgBE17wUtN5SbRa6OS1L7cVfpowsvUpCMyBcZfM%2BHDpgQhU5psbkMmZw59JdNHZvE77noiTYx5czwnMdigwO%2B2U6eo9dbS%2FDxau6d7%2BTJS0HPsvxlwBdxXJ6O7ByTxyVdIbX4UXB7kUUXUsW36iAeCZ2QCSsZcmRB8G0nb3diV1kAdKz6KsSVj%2B4zmFId6e3R3h9rtMzV1vphEK3P73JB41linJLAnyrvFtWXI15B5eLvNa0xlCjs7RZzOPrFqNodCIXSWJrot0UoOYZK%2FwhD3tkaXsvEdZYjnncIWL6g8DG2ks1m%2FMGSXhkN%2FOe1G79vmws61dMBFceexhT1cBh%2BH%2Brdg3IW8mK0EO9MPbZvsQGOqUBobF7R%2BEpr%2Fk06CNS9FvcIb3Novzmf7tnZd5TzdT0UuFJWGuRpBF6zsVa5NFV2UbE3XPHorFZsO3q0L2Ibj75F4cz1koHfeWVSESP7N1faoAay8E2Cpo3atAPMxnMVJ98yZx6wdpCR1XR9Lx77pItiL8ftqlwPQcQPYEMa6GyBTPQQHZabMhK9%2BniQPjGH10Xqa3ejmzb%2F0fPB3iuS8UQNTaZodaJ&X-Amz-Signature=e231a5de0a2f3439ec4c2790661aa05a3fa376504646b140f5cc366c92fe70cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HTRFEJQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLZr7pL%2FWtsWdirn3J44h5reNPECfTigtlQSiiFSBdYAiEAzz0TkCikk71jFIDAImqS3JnQYhtndvnYST4nCzf6kB0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBhv%2FIG7oKJ22Z4Z0yrcA4pwTbBw82uIgWdU3imIIWeep%2FiL4R8t7xnRvlWqmefCEmKfkWrERE6uAkjaK9%2FydvEbmsL7AZi%2BHEdJnsooXrXIrDIwxTYKynhqBsEkTcCeJNIwYAzRt6VZjAzdO8JP8dgVDjVAik2xgdtYie2O93usHIWonT7U9HlOyAW%2BB%2FgJnyXS9F2zgxzBHbcbcxmCgFEcN7NJpFwMbFZgobMoj0TNLfzOl9QoOAOMHdDJwT%2BiwDdxWNi35c%2BFZPlDZe4AfmZjYPhQjJMH%2BKd9XU5cF2elZgBE17wUtN5SbRa6OS1L7cVfpowsvUpCMyBcZfM%2BHDpgQhU5psbkMmZw59JdNHZvE77noiTYx5czwnMdigwO%2B2U6eo9dbS%2FDxau6d7%2BTJS0HPsvxlwBdxXJ6O7ByTxyVdIbX4UXB7kUUXUsW36iAeCZ2QCSsZcmRB8G0nb3diV1kAdKz6KsSVj%2B4zmFId6e3R3h9rtMzV1vphEK3P73JB41linJLAnyrvFtWXI15B5eLvNa0xlCjs7RZzOPrFqNodCIXSWJrot0UoOYZK%2FwhD3tkaXsvEdZYjnncIWL6g8DG2ks1m%2FMGSXhkN%2FOe1G79vmws61dMBFceexhT1cBh%2BH%2Brdg3IW8mK0EO9MPbZvsQGOqUBobF7R%2BEpr%2Fk06CNS9FvcIb3Novzmf7tnZd5TzdT0UuFJWGuRpBF6zsVa5NFV2UbE3XPHorFZsO3q0L2Ibj75F4cz1koHfeWVSESP7N1faoAay8E2Cpo3atAPMxnMVJ98yZx6wdpCR1XR9Lx77pItiL8ftqlwPQcQPYEMa6GyBTPQQHZabMhK9%2BniQPjGH10Xqa3ejmzb%2F0fPB3iuS8UQNTaZodaJ&X-Amz-Signature=bcd5eb3c6e019e9a71250b4c16eb4b7c83e9e12f29013711caddd84f92f6049f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HTRFEJQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLZr7pL%2FWtsWdirn3J44h5reNPECfTigtlQSiiFSBdYAiEAzz0TkCikk71jFIDAImqS3JnQYhtndvnYST4nCzf6kB0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBhv%2FIG7oKJ22Z4Z0yrcA4pwTbBw82uIgWdU3imIIWeep%2FiL4R8t7xnRvlWqmefCEmKfkWrERE6uAkjaK9%2FydvEbmsL7AZi%2BHEdJnsooXrXIrDIwxTYKynhqBsEkTcCeJNIwYAzRt6VZjAzdO8JP8dgVDjVAik2xgdtYie2O93usHIWonT7U9HlOyAW%2BB%2FgJnyXS9F2zgxzBHbcbcxmCgFEcN7NJpFwMbFZgobMoj0TNLfzOl9QoOAOMHdDJwT%2BiwDdxWNi35c%2BFZPlDZe4AfmZjYPhQjJMH%2BKd9XU5cF2elZgBE17wUtN5SbRa6OS1L7cVfpowsvUpCMyBcZfM%2BHDpgQhU5psbkMmZw59JdNHZvE77noiTYx5czwnMdigwO%2B2U6eo9dbS%2FDxau6d7%2BTJS0HPsvxlwBdxXJ6O7ByTxyVdIbX4UXB7kUUXUsW36iAeCZ2QCSsZcmRB8G0nb3diV1kAdKz6KsSVj%2B4zmFId6e3R3h9rtMzV1vphEK3P73JB41linJLAnyrvFtWXI15B5eLvNa0xlCjs7RZzOPrFqNodCIXSWJrot0UoOYZK%2FwhD3tkaXsvEdZYjnncIWL6g8DG2ks1m%2FMGSXhkN%2FOe1G79vmws61dMBFceexhT1cBh%2BH%2Brdg3IW8mK0EO9MPbZvsQGOqUBobF7R%2BEpr%2Fk06CNS9FvcIb3Novzmf7tnZd5TzdT0UuFJWGuRpBF6zsVa5NFV2UbE3XPHorFZsO3q0L2Ibj75F4cz1koHfeWVSESP7N1faoAay8E2Cpo3atAPMxnMVJ98yZx6wdpCR1XR9Lx77pItiL8ftqlwPQcQPYEMa6GyBTPQQHZabMhK9%2BniQPjGH10Xqa3ejmzb%2F0fPB3iuS8UQNTaZodaJ&X-Amz-Signature=9f0086b2ae3e440d33c999fed397d095520cb6446ef1a029747e120653d16e94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HTRFEJQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLZr7pL%2FWtsWdirn3J44h5reNPECfTigtlQSiiFSBdYAiEAzz0TkCikk71jFIDAImqS3JnQYhtndvnYST4nCzf6kB0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBhv%2FIG7oKJ22Z4Z0yrcA4pwTbBw82uIgWdU3imIIWeep%2FiL4R8t7xnRvlWqmefCEmKfkWrERE6uAkjaK9%2FydvEbmsL7AZi%2BHEdJnsooXrXIrDIwxTYKynhqBsEkTcCeJNIwYAzRt6VZjAzdO8JP8dgVDjVAik2xgdtYie2O93usHIWonT7U9HlOyAW%2BB%2FgJnyXS9F2zgxzBHbcbcxmCgFEcN7NJpFwMbFZgobMoj0TNLfzOl9QoOAOMHdDJwT%2BiwDdxWNi35c%2BFZPlDZe4AfmZjYPhQjJMH%2BKd9XU5cF2elZgBE17wUtN5SbRa6OS1L7cVfpowsvUpCMyBcZfM%2BHDpgQhU5psbkMmZw59JdNHZvE77noiTYx5czwnMdigwO%2B2U6eo9dbS%2FDxau6d7%2BTJS0HPsvxlwBdxXJ6O7ByTxyVdIbX4UXB7kUUXUsW36iAeCZ2QCSsZcmRB8G0nb3diV1kAdKz6KsSVj%2B4zmFId6e3R3h9rtMzV1vphEK3P73JB41linJLAnyrvFtWXI15B5eLvNa0xlCjs7RZzOPrFqNodCIXSWJrot0UoOYZK%2FwhD3tkaXsvEdZYjnncIWL6g8DG2ks1m%2FMGSXhkN%2FOe1G79vmws61dMBFceexhT1cBh%2BH%2Brdg3IW8mK0EO9MPbZvsQGOqUBobF7R%2BEpr%2Fk06CNS9FvcIb3Novzmf7tnZd5TzdT0UuFJWGuRpBF6zsVa5NFV2UbE3XPHorFZsO3q0L2Ibj75F4cz1koHfeWVSESP7N1faoAay8E2Cpo3atAPMxnMVJ98yZx6wdpCR1XR9Lx77pItiL8ftqlwPQcQPYEMa6GyBTPQQHZabMhK9%2BniQPjGH10Xqa3ejmzb%2F0fPB3iuS8UQNTaZodaJ&X-Amz-Signature=7c9cb0eb17b0840016cd48aeae3353f15b8344c8aa27e17e35030074669efaf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HTRFEJQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLZr7pL%2FWtsWdirn3J44h5reNPECfTigtlQSiiFSBdYAiEAzz0TkCikk71jFIDAImqS3JnQYhtndvnYST4nCzf6kB0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBhv%2FIG7oKJ22Z4Z0yrcA4pwTbBw82uIgWdU3imIIWeep%2FiL4R8t7xnRvlWqmefCEmKfkWrERE6uAkjaK9%2FydvEbmsL7AZi%2BHEdJnsooXrXIrDIwxTYKynhqBsEkTcCeJNIwYAzRt6VZjAzdO8JP8dgVDjVAik2xgdtYie2O93usHIWonT7U9HlOyAW%2BB%2FgJnyXS9F2zgxzBHbcbcxmCgFEcN7NJpFwMbFZgobMoj0TNLfzOl9QoOAOMHdDJwT%2BiwDdxWNi35c%2BFZPlDZe4AfmZjYPhQjJMH%2BKd9XU5cF2elZgBE17wUtN5SbRa6OS1L7cVfpowsvUpCMyBcZfM%2BHDpgQhU5psbkMmZw59JdNHZvE77noiTYx5czwnMdigwO%2B2U6eo9dbS%2FDxau6d7%2BTJS0HPsvxlwBdxXJ6O7ByTxyVdIbX4UXB7kUUXUsW36iAeCZ2QCSsZcmRB8G0nb3diV1kAdKz6KsSVj%2B4zmFId6e3R3h9rtMzV1vphEK3P73JB41linJLAnyrvFtWXI15B5eLvNa0xlCjs7RZzOPrFqNodCIXSWJrot0UoOYZK%2FwhD3tkaXsvEdZYjnncIWL6g8DG2ks1m%2FMGSXhkN%2FOe1G79vmws61dMBFceexhT1cBh%2BH%2Brdg3IW8mK0EO9MPbZvsQGOqUBobF7R%2BEpr%2Fk06CNS9FvcIb3Novzmf7tnZd5TzdT0UuFJWGuRpBF6zsVa5NFV2UbE3XPHorFZsO3q0L2Ibj75F4cz1koHfeWVSESP7N1faoAay8E2Cpo3atAPMxnMVJ98yZx6wdpCR1XR9Lx77pItiL8ftqlwPQcQPYEMa6GyBTPQQHZabMhK9%2BniQPjGH10Xqa3ejmzb%2F0fPB3iuS8UQNTaZodaJ&X-Amz-Signature=57d536354357ce77a649e4f4158a7a467810f0584d08993d26a0ae494e9e5143&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HTRFEJQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLZr7pL%2FWtsWdirn3J44h5reNPECfTigtlQSiiFSBdYAiEAzz0TkCikk71jFIDAImqS3JnQYhtndvnYST4nCzf6kB0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBhv%2FIG7oKJ22Z4Z0yrcA4pwTbBw82uIgWdU3imIIWeep%2FiL4R8t7xnRvlWqmefCEmKfkWrERE6uAkjaK9%2FydvEbmsL7AZi%2BHEdJnsooXrXIrDIwxTYKynhqBsEkTcCeJNIwYAzRt6VZjAzdO8JP8dgVDjVAik2xgdtYie2O93usHIWonT7U9HlOyAW%2BB%2FgJnyXS9F2zgxzBHbcbcxmCgFEcN7NJpFwMbFZgobMoj0TNLfzOl9QoOAOMHdDJwT%2BiwDdxWNi35c%2BFZPlDZe4AfmZjYPhQjJMH%2BKd9XU5cF2elZgBE17wUtN5SbRa6OS1L7cVfpowsvUpCMyBcZfM%2BHDpgQhU5psbkMmZw59JdNHZvE77noiTYx5czwnMdigwO%2B2U6eo9dbS%2FDxau6d7%2BTJS0HPsvxlwBdxXJ6O7ByTxyVdIbX4UXB7kUUXUsW36iAeCZ2QCSsZcmRB8G0nb3diV1kAdKz6KsSVj%2B4zmFId6e3R3h9rtMzV1vphEK3P73JB41linJLAnyrvFtWXI15B5eLvNa0xlCjs7RZzOPrFqNodCIXSWJrot0UoOYZK%2FwhD3tkaXsvEdZYjnncIWL6g8DG2ks1m%2FMGSXhkN%2FOe1G79vmws61dMBFceexhT1cBh%2BH%2Brdg3IW8mK0EO9MPbZvsQGOqUBobF7R%2BEpr%2Fk06CNS9FvcIb3Novzmf7tnZd5TzdT0UuFJWGuRpBF6zsVa5NFV2UbE3XPHorFZsO3q0L2Ibj75F4cz1koHfeWVSESP7N1faoAay8E2Cpo3atAPMxnMVJ98yZx6wdpCR1XR9Lx77pItiL8ftqlwPQcQPYEMa6GyBTPQQHZabMhK9%2BniQPjGH10Xqa3ejmzb%2F0fPB3iuS8UQNTaZodaJ&X-Amz-Signature=495aa49a602f7ba496197bc44c67e1b273ffff42420a4a2aa9884c36bf1dd323&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HTRFEJQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLZr7pL%2FWtsWdirn3J44h5reNPECfTigtlQSiiFSBdYAiEAzz0TkCikk71jFIDAImqS3JnQYhtndvnYST4nCzf6kB0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBhv%2FIG7oKJ22Z4Z0yrcA4pwTbBw82uIgWdU3imIIWeep%2FiL4R8t7xnRvlWqmefCEmKfkWrERE6uAkjaK9%2FydvEbmsL7AZi%2BHEdJnsooXrXIrDIwxTYKynhqBsEkTcCeJNIwYAzRt6VZjAzdO8JP8dgVDjVAik2xgdtYie2O93usHIWonT7U9HlOyAW%2BB%2FgJnyXS9F2zgxzBHbcbcxmCgFEcN7NJpFwMbFZgobMoj0TNLfzOl9QoOAOMHdDJwT%2BiwDdxWNi35c%2BFZPlDZe4AfmZjYPhQjJMH%2BKd9XU5cF2elZgBE17wUtN5SbRa6OS1L7cVfpowsvUpCMyBcZfM%2BHDpgQhU5psbkMmZw59JdNHZvE77noiTYx5czwnMdigwO%2B2U6eo9dbS%2FDxau6d7%2BTJS0HPsvxlwBdxXJ6O7ByTxyVdIbX4UXB7kUUXUsW36iAeCZ2QCSsZcmRB8G0nb3diV1kAdKz6KsSVj%2B4zmFId6e3R3h9rtMzV1vphEK3P73JB41linJLAnyrvFtWXI15B5eLvNa0xlCjs7RZzOPrFqNodCIXSWJrot0UoOYZK%2FwhD3tkaXsvEdZYjnncIWL6g8DG2ks1m%2FMGSXhkN%2FOe1G79vmws61dMBFceexhT1cBh%2BH%2Brdg3IW8mK0EO9MPbZvsQGOqUBobF7R%2BEpr%2Fk06CNS9FvcIb3Novzmf7tnZd5TzdT0UuFJWGuRpBF6zsVa5NFV2UbE3XPHorFZsO3q0L2Ibj75F4cz1koHfeWVSESP7N1faoAay8E2Cpo3atAPMxnMVJ98yZx6wdpCR1XR9Lx77pItiL8ftqlwPQcQPYEMa6GyBTPQQHZabMhK9%2BniQPjGH10Xqa3ejmzb%2F0fPB3iuS8UQNTaZodaJ&X-Amz-Signature=da6df978ce3ff2a373c3e0cbbdc692dd4965daa2cba33dcae861c944e757e724&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HTRFEJQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLZr7pL%2FWtsWdirn3J44h5reNPECfTigtlQSiiFSBdYAiEAzz0TkCikk71jFIDAImqS3JnQYhtndvnYST4nCzf6kB0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBhv%2FIG7oKJ22Z4Z0yrcA4pwTbBw82uIgWdU3imIIWeep%2FiL4R8t7xnRvlWqmefCEmKfkWrERE6uAkjaK9%2FydvEbmsL7AZi%2BHEdJnsooXrXIrDIwxTYKynhqBsEkTcCeJNIwYAzRt6VZjAzdO8JP8dgVDjVAik2xgdtYie2O93usHIWonT7U9HlOyAW%2BB%2FgJnyXS9F2zgxzBHbcbcxmCgFEcN7NJpFwMbFZgobMoj0TNLfzOl9QoOAOMHdDJwT%2BiwDdxWNi35c%2BFZPlDZe4AfmZjYPhQjJMH%2BKd9XU5cF2elZgBE17wUtN5SbRa6OS1L7cVfpowsvUpCMyBcZfM%2BHDpgQhU5psbkMmZw59JdNHZvE77noiTYx5czwnMdigwO%2B2U6eo9dbS%2FDxau6d7%2BTJS0HPsvxlwBdxXJ6O7ByTxyVdIbX4UXB7kUUXUsW36iAeCZ2QCSsZcmRB8G0nb3diV1kAdKz6KsSVj%2B4zmFId6e3R3h9rtMzV1vphEK3P73JB41linJLAnyrvFtWXI15B5eLvNa0xlCjs7RZzOPrFqNodCIXSWJrot0UoOYZK%2FwhD3tkaXsvEdZYjnncIWL6g8DG2ks1m%2FMGSXhkN%2FOe1G79vmws61dMBFceexhT1cBh%2BH%2Brdg3IW8mK0EO9MPbZvsQGOqUBobF7R%2BEpr%2Fk06CNS9FvcIb3Novzmf7tnZd5TzdT0UuFJWGuRpBF6zsVa5NFV2UbE3XPHorFZsO3q0L2Ibj75F4cz1koHfeWVSESP7N1faoAay8E2Cpo3atAPMxnMVJ98yZx6wdpCR1XR9Lx77pItiL8ftqlwPQcQPYEMa6GyBTPQQHZabMhK9%2BniQPjGH10Xqa3ejmzb%2F0fPB3iuS8UQNTaZodaJ&X-Amz-Signature=4f40a7da0d4576423dbedd4e68c99e04671353479d0ba24468e20edc716e48e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HTRFEJQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICLZr7pL%2FWtsWdirn3J44h5reNPECfTigtlQSiiFSBdYAiEAzz0TkCikk71jFIDAImqS3JnQYhtndvnYST4nCzf6kB0q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDBhv%2FIG7oKJ22Z4Z0yrcA4pwTbBw82uIgWdU3imIIWeep%2FiL4R8t7xnRvlWqmefCEmKfkWrERE6uAkjaK9%2FydvEbmsL7AZi%2BHEdJnsooXrXIrDIwxTYKynhqBsEkTcCeJNIwYAzRt6VZjAzdO8JP8dgVDjVAik2xgdtYie2O93usHIWonT7U9HlOyAW%2BB%2FgJnyXS9F2zgxzBHbcbcxmCgFEcN7NJpFwMbFZgobMoj0TNLfzOl9QoOAOMHdDJwT%2BiwDdxWNi35c%2BFZPlDZe4AfmZjYPhQjJMH%2BKd9XU5cF2elZgBE17wUtN5SbRa6OS1L7cVfpowsvUpCMyBcZfM%2BHDpgQhU5psbkMmZw59JdNHZvE77noiTYx5czwnMdigwO%2B2U6eo9dbS%2FDxau6d7%2BTJS0HPsvxlwBdxXJ6O7ByTxyVdIbX4UXB7kUUXUsW36iAeCZ2QCSsZcmRB8G0nb3diV1kAdKz6KsSVj%2B4zmFId6e3R3h9rtMzV1vphEK3P73JB41linJLAnyrvFtWXI15B5eLvNa0xlCjs7RZzOPrFqNodCIXSWJrot0UoOYZK%2FwhD3tkaXsvEdZYjnncIWL6g8DG2ks1m%2FMGSXhkN%2FOe1G79vmws61dMBFceexhT1cBh%2BH%2Brdg3IW8mK0EO9MPbZvsQGOqUBobF7R%2BEpr%2Fk06CNS9FvcIb3Novzmf7tnZd5TzdT0UuFJWGuRpBF6zsVa5NFV2UbE3XPHorFZsO3q0L2Ibj75F4cz1koHfeWVSESP7N1faoAay8E2Cpo3atAPMxnMVJ98yZx6wdpCR1XR9Lx77pItiL8ftqlwPQcQPYEMa6GyBTPQQHZabMhK9%2BniQPjGH10Xqa3ejmzb%2F0fPB3iuS8UQNTaZodaJ&X-Amz-Signature=66bea3531dbc4737be2d04083ca516daf3a7b9fa40b313c19b3035b2e3b40d8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
