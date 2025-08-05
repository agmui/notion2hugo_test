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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HQ7VGCE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDDaT4nzp9bmyk2ae1YC06MZrXNJzNS7qk0De%2BreXPmXgIgXpn%2Bd3Yp7ALVkMzxzi9%2F40BPeAvDp5RbqVRZBD80lm8q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDWYo%2FFF5YMiTaZRzSrcA3o2KTCuF3bSmF6EoTg64uXS9EmN0rJP%2FTxnowdSWjxbowaGTv2zBytrrRikoCrqPuRz1fhgqRfKkUG1eNwNTnbjWkiFIpkBA%2FnKpgDgbfRDMyp2u2V%2BZz7BL2zSYD0PR69ct5v0Jr7XMebIK81tdKUfvct2MBSrUHg8cb50BcLhdEHi44Ayc8KahDly3m8LXazw2%2FXUsvXAp5lVXlSBjh68UwUGrbhlJ5FZgx0Fx4%2BfxNCXvzl2Jywsa2g%2FJSlh0nNJaIOtwTUMkrAmjBeYjvHBq37aV0cOa34UOKNItzJ3ySh%2FgoxTWEWwDZSiQBvbJskSSeHjcwYMyo7N%2BROgCI%2FE%2BZ94npZx70W7khZl9VHLiKMnQw5%2BillucTv74rlxLM24K4Pem%2FQceaJcxiuIdI1%2FJ5dPvc7Hg8qQ%2F1KHuLPQnCW35wj%2BZSTTXOqQQMrhieJioKbuidBY7eDvkJ08IanTq8K6%2Fe6T3REg0aKFhGyDKRJeo%2FnpRFNqx%2B%2BXcDFKcKliHoVs7cOgCzrWz1S%2Bv8yl%2FVjNyHf27YqhFSsiVewxPKiHrQSrxGFQ%2F%2BdNQgIu93bmZEwoZeGJXSiD%2BCRbmb5IlCF03CgvcVONh0r8mNwUpHUKa5M48Pi3EUBnMLGHysQGOqUBFp%2BC2CqWoxShSRVIylSzSbtHN3IrVdT8JGv02mQxPauG6UTBgkoFLZOTMyisebbfFK5ByYGkzzhrxHhsavaHg8CRXRq7Ei4H9mnXnn3YVsQ%2FfzbA1J2SjJzGM2teqOg%2BabdVDWElrgm4J9I%2FR5MVEFbtatQsbNnR2nFFUaj14B9z7%2F4Np6e3YkUkDl9UZPBHGEoCRR0lXn2WExD7twVdsy%2FvpVRJ&X-Amz-Signature=a6044d989d686dd325e84b7dd83d34b3819941ead87d04383bac47587495e908&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HQ7VGCE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDDaT4nzp9bmyk2ae1YC06MZrXNJzNS7qk0De%2BreXPmXgIgXpn%2Bd3Yp7ALVkMzxzi9%2F40BPeAvDp5RbqVRZBD80lm8q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDWYo%2FFF5YMiTaZRzSrcA3o2KTCuF3bSmF6EoTg64uXS9EmN0rJP%2FTxnowdSWjxbowaGTv2zBytrrRikoCrqPuRz1fhgqRfKkUG1eNwNTnbjWkiFIpkBA%2FnKpgDgbfRDMyp2u2V%2BZz7BL2zSYD0PR69ct5v0Jr7XMebIK81tdKUfvct2MBSrUHg8cb50BcLhdEHi44Ayc8KahDly3m8LXazw2%2FXUsvXAp5lVXlSBjh68UwUGrbhlJ5FZgx0Fx4%2BfxNCXvzl2Jywsa2g%2FJSlh0nNJaIOtwTUMkrAmjBeYjvHBq37aV0cOa34UOKNItzJ3ySh%2FgoxTWEWwDZSiQBvbJskSSeHjcwYMyo7N%2BROgCI%2FE%2BZ94npZx70W7khZl9VHLiKMnQw5%2BillucTv74rlxLM24K4Pem%2FQceaJcxiuIdI1%2FJ5dPvc7Hg8qQ%2F1KHuLPQnCW35wj%2BZSTTXOqQQMrhieJioKbuidBY7eDvkJ08IanTq8K6%2Fe6T3REg0aKFhGyDKRJeo%2FnpRFNqx%2B%2BXcDFKcKliHoVs7cOgCzrWz1S%2Bv8yl%2FVjNyHf27YqhFSsiVewxPKiHrQSrxGFQ%2F%2BdNQgIu93bmZEwoZeGJXSiD%2BCRbmb5IlCF03CgvcVONh0r8mNwUpHUKa5M48Pi3EUBnMLGHysQGOqUBFp%2BC2CqWoxShSRVIylSzSbtHN3IrVdT8JGv02mQxPauG6UTBgkoFLZOTMyisebbfFK5ByYGkzzhrxHhsavaHg8CRXRq7Ei4H9mnXnn3YVsQ%2FfzbA1J2SjJzGM2teqOg%2BabdVDWElrgm4J9I%2FR5MVEFbtatQsbNnR2nFFUaj14B9z7%2F4Np6e3YkUkDl9UZPBHGEoCRR0lXn2WExD7twVdsy%2FvpVRJ&X-Amz-Signature=8bd213548407370abfdc797b5d9ec8c6563fb2817d6cbd5648d37fc9f8451f22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HQ7VGCE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDDaT4nzp9bmyk2ae1YC06MZrXNJzNS7qk0De%2BreXPmXgIgXpn%2Bd3Yp7ALVkMzxzi9%2F40BPeAvDp5RbqVRZBD80lm8q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDWYo%2FFF5YMiTaZRzSrcA3o2KTCuF3bSmF6EoTg64uXS9EmN0rJP%2FTxnowdSWjxbowaGTv2zBytrrRikoCrqPuRz1fhgqRfKkUG1eNwNTnbjWkiFIpkBA%2FnKpgDgbfRDMyp2u2V%2BZz7BL2zSYD0PR69ct5v0Jr7XMebIK81tdKUfvct2MBSrUHg8cb50BcLhdEHi44Ayc8KahDly3m8LXazw2%2FXUsvXAp5lVXlSBjh68UwUGrbhlJ5FZgx0Fx4%2BfxNCXvzl2Jywsa2g%2FJSlh0nNJaIOtwTUMkrAmjBeYjvHBq37aV0cOa34UOKNItzJ3ySh%2FgoxTWEWwDZSiQBvbJskSSeHjcwYMyo7N%2BROgCI%2FE%2BZ94npZx70W7khZl9VHLiKMnQw5%2BillucTv74rlxLM24K4Pem%2FQceaJcxiuIdI1%2FJ5dPvc7Hg8qQ%2F1KHuLPQnCW35wj%2BZSTTXOqQQMrhieJioKbuidBY7eDvkJ08IanTq8K6%2Fe6T3REg0aKFhGyDKRJeo%2FnpRFNqx%2B%2BXcDFKcKliHoVs7cOgCzrWz1S%2Bv8yl%2FVjNyHf27YqhFSsiVewxPKiHrQSrxGFQ%2F%2BdNQgIu93bmZEwoZeGJXSiD%2BCRbmb5IlCF03CgvcVONh0r8mNwUpHUKa5M48Pi3EUBnMLGHysQGOqUBFp%2BC2CqWoxShSRVIylSzSbtHN3IrVdT8JGv02mQxPauG6UTBgkoFLZOTMyisebbfFK5ByYGkzzhrxHhsavaHg8CRXRq7Ei4H9mnXnn3YVsQ%2FfzbA1J2SjJzGM2teqOg%2BabdVDWElrgm4J9I%2FR5MVEFbtatQsbNnR2nFFUaj14B9z7%2F4Np6e3YkUkDl9UZPBHGEoCRR0lXn2WExD7twVdsy%2FvpVRJ&X-Amz-Signature=419461c90163cf0aeb53d20b8cf92af12043dc6ae6ab71c46adf55fc8ede7467&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HQ7VGCE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDDaT4nzp9bmyk2ae1YC06MZrXNJzNS7qk0De%2BreXPmXgIgXpn%2Bd3Yp7ALVkMzxzi9%2F40BPeAvDp5RbqVRZBD80lm8q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDWYo%2FFF5YMiTaZRzSrcA3o2KTCuF3bSmF6EoTg64uXS9EmN0rJP%2FTxnowdSWjxbowaGTv2zBytrrRikoCrqPuRz1fhgqRfKkUG1eNwNTnbjWkiFIpkBA%2FnKpgDgbfRDMyp2u2V%2BZz7BL2zSYD0PR69ct5v0Jr7XMebIK81tdKUfvct2MBSrUHg8cb50BcLhdEHi44Ayc8KahDly3m8LXazw2%2FXUsvXAp5lVXlSBjh68UwUGrbhlJ5FZgx0Fx4%2BfxNCXvzl2Jywsa2g%2FJSlh0nNJaIOtwTUMkrAmjBeYjvHBq37aV0cOa34UOKNItzJ3ySh%2FgoxTWEWwDZSiQBvbJskSSeHjcwYMyo7N%2BROgCI%2FE%2BZ94npZx70W7khZl9VHLiKMnQw5%2BillucTv74rlxLM24K4Pem%2FQceaJcxiuIdI1%2FJ5dPvc7Hg8qQ%2F1KHuLPQnCW35wj%2BZSTTXOqQQMrhieJioKbuidBY7eDvkJ08IanTq8K6%2Fe6T3REg0aKFhGyDKRJeo%2FnpRFNqx%2B%2BXcDFKcKliHoVs7cOgCzrWz1S%2Bv8yl%2FVjNyHf27YqhFSsiVewxPKiHrQSrxGFQ%2F%2BdNQgIu93bmZEwoZeGJXSiD%2BCRbmb5IlCF03CgvcVONh0r8mNwUpHUKa5M48Pi3EUBnMLGHysQGOqUBFp%2BC2CqWoxShSRVIylSzSbtHN3IrVdT8JGv02mQxPauG6UTBgkoFLZOTMyisebbfFK5ByYGkzzhrxHhsavaHg8CRXRq7Ei4H9mnXnn3YVsQ%2FfzbA1J2SjJzGM2teqOg%2BabdVDWElrgm4J9I%2FR5MVEFbtatQsbNnR2nFFUaj14B9z7%2F4Np6e3YkUkDl9UZPBHGEoCRR0lXn2WExD7twVdsy%2FvpVRJ&X-Amz-Signature=0f4f198ea9ecb3aff00c29adcc25309f03884274cc3e360ec9e8b84ef6089bb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HQ7VGCE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDDaT4nzp9bmyk2ae1YC06MZrXNJzNS7qk0De%2BreXPmXgIgXpn%2Bd3Yp7ALVkMzxzi9%2F40BPeAvDp5RbqVRZBD80lm8q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDWYo%2FFF5YMiTaZRzSrcA3o2KTCuF3bSmF6EoTg64uXS9EmN0rJP%2FTxnowdSWjxbowaGTv2zBytrrRikoCrqPuRz1fhgqRfKkUG1eNwNTnbjWkiFIpkBA%2FnKpgDgbfRDMyp2u2V%2BZz7BL2zSYD0PR69ct5v0Jr7XMebIK81tdKUfvct2MBSrUHg8cb50BcLhdEHi44Ayc8KahDly3m8LXazw2%2FXUsvXAp5lVXlSBjh68UwUGrbhlJ5FZgx0Fx4%2BfxNCXvzl2Jywsa2g%2FJSlh0nNJaIOtwTUMkrAmjBeYjvHBq37aV0cOa34UOKNItzJ3ySh%2FgoxTWEWwDZSiQBvbJskSSeHjcwYMyo7N%2BROgCI%2FE%2BZ94npZx70W7khZl9VHLiKMnQw5%2BillucTv74rlxLM24K4Pem%2FQceaJcxiuIdI1%2FJ5dPvc7Hg8qQ%2F1KHuLPQnCW35wj%2BZSTTXOqQQMrhieJioKbuidBY7eDvkJ08IanTq8K6%2Fe6T3REg0aKFhGyDKRJeo%2FnpRFNqx%2B%2BXcDFKcKliHoVs7cOgCzrWz1S%2Bv8yl%2FVjNyHf27YqhFSsiVewxPKiHrQSrxGFQ%2F%2BdNQgIu93bmZEwoZeGJXSiD%2BCRbmb5IlCF03CgvcVONh0r8mNwUpHUKa5M48Pi3EUBnMLGHysQGOqUBFp%2BC2CqWoxShSRVIylSzSbtHN3IrVdT8JGv02mQxPauG6UTBgkoFLZOTMyisebbfFK5ByYGkzzhrxHhsavaHg8CRXRq7Ei4H9mnXnn3YVsQ%2FfzbA1J2SjJzGM2teqOg%2BabdVDWElrgm4J9I%2FR5MVEFbtatQsbNnR2nFFUaj14B9z7%2F4Np6e3YkUkDl9UZPBHGEoCRR0lXn2WExD7twVdsy%2FvpVRJ&X-Amz-Signature=4baf8dae34255fd4349658cdcf21ddef89a890fe68e6c4ee62caad9e7b4b88a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HQ7VGCE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDDaT4nzp9bmyk2ae1YC06MZrXNJzNS7qk0De%2BreXPmXgIgXpn%2Bd3Yp7ALVkMzxzi9%2F40BPeAvDp5RbqVRZBD80lm8q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDWYo%2FFF5YMiTaZRzSrcA3o2KTCuF3bSmF6EoTg64uXS9EmN0rJP%2FTxnowdSWjxbowaGTv2zBytrrRikoCrqPuRz1fhgqRfKkUG1eNwNTnbjWkiFIpkBA%2FnKpgDgbfRDMyp2u2V%2BZz7BL2zSYD0PR69ct5v0Jr7XMebIK81tdKUfvct2MBSrUHg8cb50BcLhdEHi44Ayc8KahDly3m8LXazw2%2FXUsvXAp5lVXlSBjh68UwUGrbhlJ5FZgx0Fx4%2BfxNCXvzl2Jywsa2g%2FJSlh0nNJaIOtwTUMkrAmjBeYjvHBq37aV0cOa34UOKNItzJ3ySh%2FgoxTWEWwDZSiQBvbJskSSeHjcwYMyo7N%2BROgCI%2FE%2BZ94npZx70W7khZl9VHLiKMnQw5%2BillucTv74rlxLM24K4Pem%2FQceaJcxiuIdI1%2FJ5dPvc7Hg8qQ%2F1KHuLPQnCW35wj%2BZSTTXOqQQMrhieJioKbuidBY7eDvkJ08IanTq8K6%2Fe6T3REg0aKFhGyDKRJeo%2FnpRFNqx%2B%2BXcDFKcKliHoVs7cOgCzrWz1S%2Bv8yl%2FVjNyHf27YqhFSsiVewxPKiHrQSrxGFQ%2F%2BdNQgIu93bmZEwoZeGJXSiD%2BCRbmb5IlCF03CgvcVONh0r8mNwUpHUKa5M48Pi3EUBnMLGHysQGOqUBFp%2BC2CqWoxShSRVIylSzSbtHN3IrVdT8JGv02mQxPauG6UTBgkoFLZOTMyisebbfFK5ByYGkzzhrxHhsavaHg8CRXRq7Ei4H9mnXnn3YVsQ%2FfzbA1J2SjJzGM2teqOg%2BabdVDWElrgm4J9I%2FR5MVEFbtatQsbNnR2nFFUaj14B9z7%2F4Np6e3YkUkDl9UZPBHGEoCRR0lXn2WExD7twVdsy%2FvpVRJ&X-Amz-Signature=4376d8e3f171bd75c53e8df1d90030369296148bc1001a180e59a0fc73c3ef41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HQ7VGCE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDDaT4nzp9bmyk2ae1YC06MZrXNJzNS7qk0De%2BreXPmXgIgXpn%2Bd3Yp7ALVkMzxzi9%2F40BPeAvDp5RbqVRZBD80lm8q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDWYo%2FFF5YMiTaZRzSrcA3o2KTCuF3bSmF6EoTg64uXS9EmN0rJP%2FTxnowdSWjxbowaGTv2zBytrrRikoCrqPuRz1fhgqRfKkUG1eNwNTnbjWkiFIpkBA%2FnKpgDgbfRDMyp2u2V%2BZz7BL2zSYD0PR69ct5v0Jr7XMebIK81tdKUfvct2MBSrUHg8cb50BcLhdEHi44Ayc8KahDly3m8LXazw2%2FXUsvXAp5lVXlSBjh68UwUGrbhlJ5FZgx0Fx4%2BfxNCXvzl2Jywsa2g%2FJSlh0nNJaIOtwTUMkrAmjBeYjvHBq37aV0cOa34UOKNItzJ3ySh%2FgoxTWEWwDZSiQBvbJskSSeHjcwYMyo7N%2BROgCI%2FE%2BZ94npZx70W7khZl9VHLiKMnQw5%2BillucTv74rlxLM24K4Pem%2FQceaJcxiuIdI1%2FJ5dPvc7Hg8qQ%2F1KHuLPQnCW35wj%2BZSTTXOqQQMrhieJioKbuidBY7eDvkJ08IanTq8K6%2Fe6T3REg0aKFhGyDKRJeo%2FnpRFNqx%2B%2BXcDFKcKliHoVs7cOgCzrWz1S%2Bv8yl%2FVjNyHf27YqhFSsiVewxPKiHrQSrxGFQ%2F%2BdNQgIu93bmZEwoZeGJXSiD%2BCRbmb5IlCF03CgvcVONh0r8mNwUpHUKa5M48Pi3EUBnMLGHysQGOqUBFp%2BC2CqWoxShSRVIylSzSbtHN3IrVdT8JGv02mQxPauG6UTBgkoFLZOTMyisebbfFK5ByYGkzzhrxHhsavaHg8CRXRq7Ei4H9mnXnn3YVsQ%2FfzbA1J2SjJzGM2teqOg%2BabdVDWElrgm4J9I%2FR5MVEFbtatQsbNnR2nFFUaj14B9z7%2F4Np6e3YkUkDl9UZPBHGEoCRR0lXn2WExD7twVdsy%2FvpVRJ&X-Amz-Signature=38b00692f65014b4cb895d2404f6b4aaaf265eadb505bf638d760f660b76f86d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HQ7VGCE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDDaT4nzp9bmyk2ae1YC06MZrXNJzNS7qk0De%2BreXPmXgIgXpn%2Bd3Yp7ALVkMzxzi9%2F40BPeAvDp5RbqVRZBD80lm8q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDWYo%2FFF5YMiTaZRzSrcA3o2KTCuF3bSmF6EoTg64uXS9EmN0rJP%2FTxnowdSWjxbowaGTv2zBytrrRikoCrqPuRz1fhgqRfKkUG1eNwNTnbjWkiFIpkBA%2FnKpgDgbfRDMyp2u2V%2BZz7BL2zSYD0PR69ct5v0Jr7XMebIK81tdKUfvct2MBSrUHg8cb50BcLhdEHi44Ayc8KahDly3m8LXazw2%2FXUsvXAp5lVXlSBjh68UwUGrbhlJ5FZgx0Fx4%2BfxNCXvzl2Jywsa2g%2FJSlh0nNJaIOtwTUMkrAmjBeYjvHBq37aV0cOa34UOKNItzJ3ySh%2FgoxTWEWwDZSiQBvbJskSSeHjcwYMyo7N%2BROgCI%2FE%2BZ94npZx70W7khZl9VHLiKMnQw5%2BillucTv74rlxLM24K4Pem%2FQceaJcxiuIdI1%2FJ5dPvc7Hg8qQ%2F1KHuLPQnCW35wj%2BZSTTXOqQQMrhieJioKbuidBY7eDvkJ08IanTq8K6%2Fe6T3REg0aKFhGyDKRJeo%2FnpRFNqx%2B%2BXcDFKcKliHoVs7cOgCzrWz1S%2Bv8yl%2FVjNyHf27YqhFSsiVewxPKiHrQSrxGFQ%2F%2BdNQgIu93bmZEwoZeGJXSiD%2BCRbmb5IlCF03CgvcVONh0r8mNwUpHUKa5M48Pi3EUBnMLGHysQGOqUBFp%2BC2CqWoxShSRVIylSzSbtHN3IrVdT8JGv02mQxPauG6UTBgkoFLZOTMyisebbfFK5ByYGkzzhrxHhsavaHg8CRXRq7Ei4H9mnXnn3YVsQ%2FfzbA1J2SjJzGM2teqOg%2BabdVDWElrgm4J9I%2FR5MVEFbtatQsbNnR2nFFUaj14B9z7%2F4Np6e3YkUkDl9UZPBHGEoCRR0lXn2WExD7twVdsy%2FvpVRJ&X-Amz-Signature=2e1967d8d9e7efa84d43b02919de4dec7f3a98968921039eef770e614cb668b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HQ7VGCE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDDaT4nzp9bmyk2ae1YC06MZrXNJzNS7qk0De%2BreXPmXgIgXpn%2Bd3Yp7ALVkMzxzi9%2F40BPeAvDp5RbqVRZBD80lm8q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDWYo%2FFF5YMiTaZRzSrcA3o2KTCuF3bSmF6EoTg64uXS9EmN0rJP%2FTxnowdSWjxbowaGTv2zBytrrRikoCrqPuRz1fhgqRfKkUG1eNwNTnbjWkiFIpkBA%2FnKpgDgbfRDMyp2u2V%2BZz7BL2zSYD0PR69ct5v0Jr7XMebIK81tdKUfvct2MBSrUHg8cb50BcLhdEHi44Ayc8KahDly3m8LXazw2%2FXUsvXAp5lVXlSBjh68UwUGrbhlJ5FZgx0Fx4%2BfxNCXvzl2Jywsa2g%2FJSlh0nNJaIOtwTUMkrAmjBeYjvHBq37aV0cOa34UOKNItzJ3ySh%2FgoxTWEWwDZSiQBvbJskSSeHjcwYMyo7N%2BROgCI%2FE%2BZ94npZx70W7khZl9VHLiKMnQw5%2BillucTv74rlxLM24K4Pem%2FQceaJcxiuIdI1%2FJ5dPvc7Hg8qQ%2F1KHuLPQnCW35wj%2BZSTTXOqQQMrhieJioKbuidBY7eDvkJ08IanTq8K6%2Fe6T3REg0aKFhGyDKRJeo%2FnpRFNqx%2B%2BXcDFKcKliHoVs7cOgCzrWz1S%2Bv8yl%2FVjNyHf27YqhFSsiVewxPKiHrQSrxGFQ%2F%2BdNQgIu93bmZEwoZeGJXSiD%2BCRbmb5IlCF03CgvcVONh0r8mNwUpHUKa5M48Pi3EUBnMLGHysQGOqUBFp%2BC2CqWoxShSRVIylSzSbtHN3IrVdT8JGv02mQxPauG6UTBgkoFLZOTMyisebbfFK5ByYGkzzhrxHhsavaHg8CRXRq7Ei4H9mnXnn3YVsQ%2FfzbA1J2SjJzGM2teqOg%2BabdVDWElrgm4J9I%2FR5MVEFbtatQsbNnR2nFFUaj14B9z7%2F4Np6e3YkUkDl9UZPBHGEoCRR0lXn2WExD7twVdsy%2FvpVRJ&X-Amz-Signature=7577bae62c771dd4f0322489c2db763c8f4853913c7a5ad4abc06964b75ab41b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HQ7VGCE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDDaT4nzp9bmyk2ae1YC06MZrXNJzNS7qk0De%2BreXPmXgIgXpn%2Bd3Yp7ALVkMzxzi9%2F40BPeAvDp5RbqVRZBD80lm8q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDWYo%2FFF5YMiTaZRzSrcA3o2KTCuF3bSmF6EoTg64uXS9EmN0rJP%2FTxnowdSWjxbowaGTv2zBytrrRikoCrqPuRz1fhgqRfKkUG1eNwNTnbjWkiFIpkBA%2FnKpgDgbfRDMyp2u2V%2BZz7BL2zSYD0PR69ct5v0Jr7XMebIK81tdKUfvct2MBSrUHg8cb50BcLhdEHi44Ayc8KahDly3m8LXazw2%2FXUsvXAp5lVXlSBjh68UwUGrbhlJ5FZgx0Fx4%2BfxNCXvzl2Jywsa2g%2FJSlh0nNJaIOtwTUMkrAmjBeYjvHBq37aV0cOa34UOKNItzJ3ySh%2FgoxTWEWwDZSiQBvbJskSSeHjcwYMyo7N%2BROgCI%2FE%2BZ94npZx70W7khZl9VHLiKMnQw5%2BillucTv74rlxLM24K4Pem%2FQceaJcxiuIdI1%2FJ5dPvc7Hg8qQ%2F1KHuLPQnCW35wj%2BZSTTXOqQQMrhieJioKbuidBY7eDvkJ08IanTq8K6%2Fe6T3REg0aKFhGyDKRJeo%2FnpRFNqx%2B%2BXcDFKcKliHoVs7cOgCzrWz1S%2Bv8yl%2FVjNyHf27YqhFSsiVewxPKiHrQSrxGFQ%2F%2BdNQgIu93bmZEwoZeGJXSiD%2BCRbmb5IlCF03CgvcVONh0r8mNwUpHUKa5M48Pi3EUBnMLGHysQGOqUBFp%2BC2CqWoxShSRVIylSzSbtHN3IrVdT8JGv02mQxPauG6UTBgkoFLZOTMyisebbfFK5ByYGkzzhrxHhsavaHg8CRXRq7Ei4H9mnXnn3YVsQ%2FfzbA1J2SjJzGM2teqOg%2BabdVDWElrgm4J9I%2FR5MVEFbtatQsbNnR2nFFUaj14B9z7%2F4Np6e3YkUkDl9UZPBHGEoCRR0lXn2WExD7twVdsy%2FvpVRJ&X-Amz-Signature=0421ec7e413ad08d8df90e3166ea098cfcbe59dbcc8891ab8f7c9ce1c12ad946&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HQ7VGCE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDDaT4nzp9bmyk2ae1YC06MZrXNJzNS7qk0De%2BreXPmXgIgXpn%2Bd3Yp7ALVkMzxzi9%2F40BPeAvDp5RbqVRZBD80lm8q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDWYo%2FFF5YMiTaZRzSrcA3o2KTCuF3bSmF6EoTg64uXS9EmN0rJP%2FTxnowdSWjxbowaGTv2zBytrrRikoCrqPuRz1fhgqRfKkUG1eNwNTnbjWkiFIpkBA%2FnKpgDgbfRDMyp2u2V%2BZz7BL2zSYD0PR69ct5v0Jr7XMebIK81tdKUfvct2MBSrUHg8cb50BcLhdEHi44Ayc8KahDly3m8LXazw2%2FXUsvXAp5lVXlSBjh68UwUGrbhlJ5FZgx0Fx4%2BfxNCXvzl2Jywsa2g%2FJSlh0nNJaIOtwTUMkrAmjBeYjvHBq37aV0cOa34UOKNItzJ3ySh%2FgoxTWEWwDZSiQBvbJskSSeHjcwYMyo7N%2BROgCI%2FE%2BZ94npZx70W7khZl9VHLiKMnQw5%2BillucTv74rlxLM24K4Pem%2FQceaJcxiuIdI1%2FJ5dPvc7Hg8qQ%2F1KHuLPQnCW35wj%2BZSTTXOqQQMrhieJioKbuidBY7eDvkJ08IanTq8K6%2Fe6T3REg0aKFhGyDKRJeo%2FnpRFNqx%2B%2BXcDFKcKliHoVs7cOgCzrWz1S%2Bv8yl%2FVjNyHf27YqhFSsiVewxPKiHrQSrxGFQ%2F%2BdNQgIu93bmZEwoZeGJXSiD%2BCRbmb5IlCF03CgvcVONh0r8mNwUpHUKa5M48Pi3EUBnMLGHysQGOqUBFp%2BC2CqWoxShSRVIylSzSbtHN3IrVdT8JGv02mQxPauG6UTBgkoFLZOTMyisebbfFK5ByYGkzzhrxHhsavaHg8CRXRq7Ei4H9mnXnn3YVsQ%2FfzbA1J2SjJzGM2teqOg%2BabdVDWElrgm4J9I%2FR5MVEFbtatQsbNnR2nFFUaj14B9z7%2F4Np6e3YkUkDl9UZPBHGEoCRR0lXn2WExD7twVdsy%2FvpVRJ&X-Amz-Signature=18591f8e9e85a3021dece01c814ec9d305d215e1f3bdfb463ac9e83c723646a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HQ7VGCE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDDaT4nzp9bmyk2ae1YC06MZrXNJzNS7qk0De%2BreXPmXgIgXpn%2Bd3Yp7ALVkMzxzi9%2F40BPeAvDp5RbqVRZBD80lm8q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDWYo%2FFF5YMiTaZRzSrcA3o2KTCuF3bSmF6EoTg64uXS9EmN0rJP%2FTxnowdSWjxbowaGTv2zBytrrRikoCrqPuRz1fhgqRfKkUG1eNwNTnbjWkiFIpkBA%2FnKpgDgbfRDMyp2u2V%2BZz7BL2zSYD0PR69ct5v0Jr7XMebIK81tdKUfvct2MBSrUHg8cb50BcLhdEHi44Ayc8KahDly3m8LXazw2%2FXUsvXAp5lVXlSBjh68UwUGrbhlJ5FZgx0Fx4%2BfxNCXvzl2Jywsa2g%2FJSlh0nNJaIOtwTUMkrAmjBeYjvHBq37aV0cOa34UOKNItzJ3ySh%2FgoxTWEWwDZSiQBvbJskSSeHjcwYMyo7N%2BROgCI%2FE%2BZ94npZx70W7khZl9VHLiKMnQw5%2BillucTv74rlxLM24K4Pem%2FQceaJcxiuIdI1%2FJ5dPvc7Hg8qQ%2F1KHuLPQnCW35wj%2BZSTTXOqQQMrhieJioKbuidBY7eDvkJ08IanTq8K6%2Fe6T3REg0aKFhGyDKRJeo%2FnpRFNqx%2B%2BXcDFKcKliHoVs7cOgCzrWz1S%2Bv8yl%2FVjNyHf27YqhFSsiVewxPKiHrQSrxGFQ%2F%2BdNQgIu93bmZEwoZeGJXSiD%2BCRbmb5IlCF03CgvcVONh0r8mNwUpHUKa5M48Pi3EUBnMLGHysQGOqUBFp%2BC2CqWoxShSRVIylSzSbtHN3IrVdT8JGv02mQxPauG6UTBgkoFLZOTMyisebbfFK5ByYGkzzhrxHhsavaHg8CRXRq7Ei4H9mnXnn3YVsQ%2FfzbA1J2SjJzGM2teqOg%2BabdVDWElrgm4J9I%2FR5MVEFbtatQsbNnR2nFFUaj14B9z7%2F4Np6e3YkUkDl9UZPBHGEoCRR0lXn2WExD7twVdsy%2FvpVRJ&X-Amz-Signature=58ebe63a4cda46bd6947900f2ba984225865643f28faca83152920c1924f14b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HQ7VGCE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDDaT4nzp9bmyk2ae1YC06MZrXNJzNS7qk0De%2BreXPmXgIgXpn%2Bd3Yp7ALVkMzxzi9%2F40BPeAvDp5RbqVRZBD80lm8q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDWYo%2FFF5YMiTaZRzSrcA3o2KTCuF3bSmF6EoTg64uXS9EmN0rJP%2FTxnowdSWjxbowaGTv2zBytrrRikoCrqPuRz1fhgqRfKkUG1eNwNTnbjWkiFIpkBA%2FnKpgDgbfRDMyp2u2V%2BZz7BL2zSYD0PR69ct5v0Jr7XMebIK81tdKUfvct2MBSrUHg8cb50BcLhdEHi44Ayc8KahDly3m8LXazw2%2FXUsvXAp5lVXlSBjh68UwUGrbhlJ5FZgx0Fx4%2BfxNCXvzl2Jywsa2g%2FJSlh0nNJaIOtwTUMkrAmjBeYjvHBq37aV0cOa34UOKNItzJ3ySh%2FgoxTWEWwDZSiQBvbJskSSeHjcwYMyo7N%2BROgCI%2FE%2BZ94npZx70W7khZl9VHLiKMnQw5%2BillucTv74rlxLM24K4Pem%2FQceaJcxiuIdI1%2FJ5dPvc7Hg8qQ%2F1KHuLPQnCW35wj%2BZSTTXOqQQMrhieJioKbuidBY7eDvkJ08IanTq8K6%2Fe6T3REg0aKFhGyDKRJeo%2FnpRFNqx%2B%2BXcDFKcKliHoVs7cOgCzrWz1S%2Bv8yl%2FVjNyHf27YqhFSsiVewxPKiHrQSrxGFQ%2F%2BdNQgIu93bmZEwoZeGJXSiD%2BCRbmb5IlCF03CgvcVONh0r8mNwUpHUKa5M48Pi3EUBnMLGHysQGOqUBFp%2BC2CqWoxShSRVIylSzSbtHN3IrVdT8JGv02mQxPauG6UTBgkoFLZOTMyisebbfFK5ByYGkzzhrxHhsavaHg8CRXRq7Ei4H9mnXnn3YVsQ%2FfzbA1J2SjJzGM2teqOg%2BabdVDWElrgm4J9I%2FR5MVEFbtatQsbNnR2nFFUaj14B9z7%2F4Np6e3YkUkDl9UZPBHGEoCRR0lXn2WExD7twVdsy%2FvpVRJ&X-Amz-Signature=1b5119b5cbe287f30dcd07fbbeaf3d65666958dada50383f4adda713a7a199b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HQ7VGCE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIQDDaT4nzp9bmyk2ae1YC06MZrXNJzNS7qk0De%2BreXPmXgIgXpn%2Bd3Yp7ALVkMzxzi9%2F40BPeAvDp5RbqVRZBD80lm8q%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDDWYo%2FFF5YMiTaZRzSrcA3o2KTCuF3bSmF6EoTg64uXS9EmN0rJP%2FTxnowdSWjxbowaGTv2zBytrrRikoCrqPuRz1fhgqRfKkUG1eNwNTnbjWkiFIpkBA%2FnKpgDgbfRDMyp2u2V%2BZz7BL2zSYD0PR69ct5v0Jr7XMebIK81tdKUfvct2MBSrUHg8cb50BcLhdEHi44Ayc8KahDly3m8LXazw2%2FXUsvXAp5lVXlSBjh68UwUGrbhlJ5FZgx0Fx4%2BfxNCXvzl2Jywsa2g%2FJSlh0nNJaIOtwTUMkrAmjBeYjvHBq37aV0cOa34UOKNItzJ3ySh%2FgoxTWEWwDZSiQBvbJskSSeHjcwYMyo7N%2BROgCI%2FE%2BZ94npZx70W7khZl9VHLiKMnQw5%2BillucTv74rlxLM24K4Pem%2FQceaJcxiuIdI1%2FJ5dPvc7Hg8qQ%2F1KHuLPQnCW35wj%2BZSTTXOqQQMrhieJioKbuidBY7eDvkJ08IanTq8K6%2Fe6T3REg0aKFhGyDKRJeo%2FnpRFNqx%2B%2BXcDFKcKliHoVs7cOgCzrWz1S%2Bv8yl%2FVjNyHf27YqhFSsiVewxPKiHrQSrxGFQ%2F%2BdNQgIu93bmZEwoZeGJXSiD%2BCRbmb5IlCF03CgvcVONh0r8mNwUpHUKa5M48Pi3EUBnMLGHysQGOqUBFp%2BC2CqWoxShSRVIylSzSbtHN3IrVdT8JGv02mQxPauG6UTBgkoFLZOTMyisebbfFK5ByYGkzzhrxHhsavaHg8CRXRq7Ei4H9mnXnn3YVsQ%2FfzbA1J2SjJzGM2teqOg%2BabdVDWElrgm4J9I%2FR5MVEFbtatQsbNnR2nFFUaj14B9z7%2F4Np6e3YkUkDl9UZPBHGEoCRR0lXn2WExD7twVdsy%2FvpVRJ&X-Amz-Signature=6dda38af6b5eae70c8750b417a00089f1c2ba9b1d0c2eb64a64e667bc2f1fea3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
