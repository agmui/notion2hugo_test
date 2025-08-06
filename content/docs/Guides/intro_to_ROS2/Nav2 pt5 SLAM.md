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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6PPFP3B%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIBhDcTaY9teYyNzr1ecz8SfQIti4AZRzgMj4eCpf3CKqAiBGR3wKNg%2FLbbVP%2BxrdvtWaGSqJNVFo%2B4opGRhTMuGuQSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMFxuw44ofkAp3RFxTKtwDpDjcZkM9ZZ%2B%2B9PV%2Fj1u9TyYxvYELvFAcB6d%2FIMfFcxpOS%2Fmw71qlCVDDZ2q3ZzRXMJfv6dZ%2FKmss96aVAmVwhYQPzwtqvZ%2FtvglgQLPCnj7yp1FdsyViJ%2BooflILS8BVobsnoOr9Vzb%2BS8%2BnyFotypcryyb%2FpXRn8KvPM3IfwTsZVjm0wzOtOGPWRsRCv2slhCZwzFCmJGFivLkStwwGGG2gN8epPvdm15Kg4cV7fVEb9bgSAG%2B8N5r8kDfRXL6ph%2FCdhMaY9ngMYkIvfDpQxP51%2BISM6rWjyqC3AxicnOhbqSRkwTFX67LrM7d9HqgrB60Jh%2BuudRLuRKt7ijmg3wUlO%2FlG0lsVqxLRwQotmF2xL5CzLDocKAeGjVjuWqniy%2BIkI0%2BvWPhEwuTzJRXbBYO4JPgBHUxK8xN6HICY8QWTrnsdSvhFBzxikLjbaC4OsxkwdE%2FW8Dl5etAS77g%2B7TtKXegk%2Frbn4KqQFFPepVw4EhpQr1msqPA6mGrIvuhRMcdPuaHClHLwDdU9rtf7y%2ByMs8rENjODV9KWaqc%2Fg%2BBq8NuSV785walYQv7LzCPx1wUDDw0MkaxxZ7dSRXvjBAsX5j1wvGww2QQAN7LMsJchfovapn7eHOoqkH0w6K7NxAY6pgETWbvHeX5m61pr2a64Piy%2FjyIkj3pD1Nw2MtJMmhQ3qwgC8yqXfKxv2Onf4uMm0R53AuOq6j9iCU5wGOc3bQE6bD%2FpIhdNAatDUJh7JRRsHl5fbwabsiG%2F%2BeUlNC90m7HcG3cwIdpL7LMwpir%2FepQQCV40g1WqS07tJat5qdDlfmYbhFeWN77VWc9VMmqJLDRxTXqybVuKzaFTgik%2Bw0%2Bwtdydr7Ol&X-Amz-Signature=27aadf9a4ea3237950cf23b560c86f1ff2cbdfe9b23353937fc60d1c343cfceb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6PPFP3B%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIBhDcTaY9teYyNzr1ecz8SfQIti4AZRzgMj4eCpf3CKqAiBGR3wKNg%2FLbbVP%2BxrdvtWaGSqJNVFo%2B4opGRhTMuGuQSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMFxuw44ofkAp3RFxTKtwDpDjcZkM9ZZ%2B%2B9PV%2Fj1u9TyYxvYELvFAcB6d%2FIMfFcxpOS%2Fmw71qlCVDDZ2q3ZzRXMJfv6dZ%2FKmss96aVAmVwhYQPzwtqvZ%2FtvglgQLPCnj7yp1FdsyViJ%2BooflILS8BVobsnoOr9Vzb%2BS8%2BnyFotypcryyb%2FpXRn8KvPM3IfwTsZVjm0wzOtOGPWRsRCv2slhCZwzFCmJGFivLkStwwGGG2gN8epPvdm15Kg4cV7fVEb9bgSAG%2B8N5r8kDfRXL6ph%2FCdhMaY9ngMYkIvfDpQxP51%2BISM6rWjyqC3AxicnOhbqSRkwTFX67LrM7d9HqgrB60Jh%2BuudRLuRKt7ijmg3wUlO%2FlG0lsVqxLRwQotmF2xL5CzLDocKAeGjVjuWqniy%2BIkI0%2BvWPhEwuTzJRXbBYO4JPgBHUxK8xN6HICY8QWTrnsdSvhFBzxikLjbaC4OsxkwdE%2FW8Dl5etAS77g%2B7TtKXegk%2Frbn4KqQFFPepVw4EhpQr1msqPA6mGrIvuhRMcdPuaHClHLwDdU9rtf7y%2ByMs8rENjODV9KWaqc%2Fg%2BBq8NuSV785walYQv7LzCPx1wUDDw0MkaxxZ7dSRXvjBAsX5j1wvGww2QQAN7LMsJchfovapn7eHOoqkH0w6K7NxAY6pgETWbvHeX5m61pr2a64Piy%2FjyIkj3pD1Nw2MtJMmhQ3qwgC8yqXfKxv2Onf4uMm0R53AuOq6j9iCU5wGOc3bQE6bD%2FpIhdNAatDUJh7JRRsHl5fbwabsiG%2F%2BeUlNC90m7HcG3cwIdpL7LMwpir%2FepQQCV40g1WqS07tJat5qdDlfmYbhFeWN77VWc9VMmqJLDRxTXqybVuKzaFTgik%2Bw0%2Bwtdydr7Ol&X-Amz-Signature=e6139aaa54c083790b3cfac50f6feabc49b30100bbe4c5c142d4fcd585fb9efa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6PPFP3B%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIBhDcTaY9teYyNzr1ecz8SfQIti4AZRzgMj4eCpf3CKqAiBGR3wKNg%2FLbbVP%2BxrdvtWaGSqJNVFo%2B4opGRhTMuGuQSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMFxuw44ofkAp3RFxTKtwDpDjcZkM9ZZ%2B%2B9PV%2Fj1u9TyYxvYELvFAcB6d%2FIMfFcxpOS%2Fmw71qlCVDDZ2q3ZzRXMJfv6dZ%2FKmss96aVAmVwhYQPzwtqvZ%2FtvglgQLPCnj7yp1FdsyViJ%2BooflILS8BVobsnoOr9Vzb%2BS8%2BnyFotypcryyb%2FpXRn8KvPM3IfwTsZVjm0wzOtOGPWRsRCv2slhCZwzFCmJGFivLkStwwGGG2gN8epPvdm15Kg4cV7fVEb9bgSAG%2B8N5r8kDfRXL6ph%2FCdhMaY9ngMYkIvfDpQxP51%2BISM6rWjyqC3AxicnOhbqSRkwTFX67LrM7d9HqgrB60Jh%2BuudRLuRKt7ijmg3wUlO%2FlG0lsVqxLRwQotmF2xL5CzLDocKAeGjVjuWqniy%2BIkI0%2BvWPhEwuTzJRXbBYO4JPgBHUxK8xN6HICY8QWTrnsdSvhFBzxikLjbaC4OsxkwdE%2FW8Dl5etAS77g%2B7TtKXegk%2Frbn4KqQFFPepVw4EhpQr1msqPA6mGrIvuhRMcdPuaHClHLwDdU9rtf7y%2ByMs8rENjODV9KWaqc%2Fg%2BBq8NuSV785walYQv7LzCPx1wUDDw0MkaxxZ7dSRXvjBAsX5j1wvGww2QQAN7LMsJchfovapn7eHOoqkH0w6K7NxAY6pgETWbvHeX5m61pr2a64Piy%2FjyIkj3pD1Nw2MtJMmhQ3qwgC8yqXfKxv2Onf4uMm0R53AuOq6j9iCU5wGOc3bQE6bD%2FpIhdNAatDUJh7JRRsHl5fbwabsiG%2F%2BeUlNC90m7HcG3cwIdpL7LMwpir%2FepQQCV40g1WqS07tJat5qdDlfmYbhFeWN77VWc9VMmqJLDRxTXqybVuKzaFTgik%2Bw0%2Bwtdydr7Ol&X-Amz-Signature=270b16dec3a6cbca2e335bff4ffaa1b30e19da826580d6eb02f0133b4464a44e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6PPFP3B%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIBhDcTaY9teYyNzr1ecz8SfQIti4AZRzgMj4eCpf3CKqAiBGR3wKNg%2FLbbVP%2BxrdvtWaGSqJNVFo%2B4opGRhTMuGuQSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMFxuw44ofkAp3RFxTKtwDpDjcZkM9ZZ%2B%2B9PV%2Fj1u9TyYxvYELvFAcB6d%2FIMfFcxpOS%2Fmw71qlCVDDZ2q3ZzRXMJfv6dZ%2FKmss96aVAmVwhYQPzwtqvZ%2FtvglgQLPCnj7yp1FdsyViJ%2BooflILS8BVobsnoOr9Vzb%2BS8%2BnyFotypcryyb%2FpXRn8KvPM3IfwTsZVjm0wzOtOGPWRsRCv2slhCZwzFCmJGFivLkStwwGGG2gN8epPvdm15Kg4cV7fVEb9bgSAG%2B8N5r8kDfRXL6ph%2FCdhMaY9ngMYkIvfDpQxP51%2BISM6rWjyqC3AxicnOhbqSRkwTFX67LrM7d9HqgrB60Jh%2BuudRLuRKt7ijmg3wUlO%2FlG0lsVqxLRwQotmF2xL5CzLDocKAeGjVjuWqniy%2BIkI0%2BvWPhEwuTzJRXbBYO4JPgBHUxK8xN6HICY8QWTrnsdSvhFBzxikLjbaC4OsxkwdE%2FW8Dl5etAS77g%2B7TtKXegk%2Frbn4KqQFFPepVw4EhpQr1msqPA6mGrIvuhRMcdPuaHClHLwDdU9rtf7y%2ByMs8rENjODV9KWaqc%2Fg%2BBq8NuSV785walYQv7LzCPx1wUDDw0MkaxxZ7dSRXvjBAsX5j1wvGww2QQAN7LMsJchfovapn7eHOoqkH0w6K7NxAY6pgETWbvHeX5m61pr2a64Piy%2FjyIkj3pD1Nw2MtJMmhQ3qwgC8yqXfKxv2Onf4uMm0R53AuOq6j9iCU5wGOc3bQE6bD%2FpIhdNAatDUJh7JRRsHl5fbwabsiG%2F%2BeUlNC90m7HcG3cwIdpL7LMwpir%2FepQQCV40g1WqS07tJat5qdDlfmYbhFeWN77VWc9VMmqJLDRxTXqybVuKzaFTgik%2Bw0%2Bwtdydr7Ol&X-Amz-Signature=e94e946720959437af5d51fdb1a25eedd9ce4874606665d94af392aa631d93b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6PPFP3B%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIBhDcTaY9teYyNzr1ecz8SfQIti4AZRzgMj4eCpf3CKqAiBGR3wKNg%2FLbbVP%2BxrdvtWaGSqJNVFo%2B4opGRhTMuGuQSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMFxuw44ofkAp3RFxTKtwDpDjcZkM9ZZ%2B%2B9PV%2Fj1u9TyYxvYELvFAcB6d%2FIMfFcxpOS%2Fmw71qlCVDDZ2q3ZzRXMJfv6dZ%2FKmss96aVAmVwhYQPzwtqvZ%2FtvglgQLPCnj7yp1FdsyViJ%2BooflILS8BVobsnoOr9Vzb%2BS8%2BnyFotypcryyb%2FpXRn8KvPM3IfwTsZVjm0wzOtOGPWRsRCv2slhCZwzFCmJGFivLkStwwGGG2gN8epPvdm15Kg4cV7fVEb9bgSAG%2B8N5r8kDfRXL6ph%2FCdhMaY9ngMYkIvfDpQxP51%2BISM6rWjyqC3AxicnOhbqSRkwTFX67LrM7d9HqgrB60Jh%2BuudRLuRKt7ijmg3wUlO%2FlG0lsVqxLRwQotmF2xL5CzLDocKAeGjVjuWqniy%2BIkI0%2BvWPhEwuTzJRXbBYO4JPgBHUxK8xN6HICY8QWTrnsdSvhFBzxikLjbaC4OsxkwdE%2FW8Dl5etAS77g%2B7TtKXegk%2Frbn4KqQFFPepVw4EhpQr1msqPA6mGrIvuhRMcdPuaHClHLwDdU9rtf7y%2ByMs8rENjODV9KWaqc%2Fg%2BBq8NuSV785walYQv7LzCPx1wUDDw0MkaxxZ7dSRXvjBAsX5j1wvGww2QQAN7LMsJchfovapn7eHOoqkH0w6K7NxAY6pgETWbvHeX5m61pr2a64Piy%2FjyIkj3pD1Nw2MtJMmhQ3qwgC8yqXfKxv2Onf4uMm0R53AuOq6j9iCU5wGOc3bQE6bD%2FpIhdNAatDUJh7JRRsHl5fbwabsiG%2F%2BeUlNC90m7HcG3cwIdpL7LMwpir%2FepQQCV40g1WqS07tJat5qdDlfmYbhFeWN77VWc9VMmqJLDRxTXqybVuKzaFTgik%2Bw0%2Bwtdydr7Ol&X-Amz-Signature=1436345a18d9c17375fee5f0f57019785aa87c4b39ee6c5415533c8bc7e3e347&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6PPFP3B%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIBhDcTaY9teYyNzr1ecz8SfQIti4AZRzgMj4eCpf3CKqAiBGR3wKNg%2FLbbVP%2BxrdvtWaGSqJNVFo%2B4opGRhTMuGuQSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMFxuw44ofkAp3RFxTKtwDpDjcZkM9ZZ%2B%2B9PV%2Fj1u9TyYxvYELvFAcB6d%2FIMfFcxpOS%2Fmw71qlCVDDZ2q3ZzRXMJfv6dZ%2FKmss96aVAmVwhYQPzwtqvZ%2FtvglgQLPCnj7yp1FdsyViJ%2BooflILS8BVobsnoOr9Vzb%2BS8%2BnyFotypcryyb%2FpXRn8KvPM3IfwTsZVjm0wzOtOGPWRsRCv2slhCZwzFCmJGFivLkStwwGGG2gN8epPvdm15Kg4cV7fVEb9bgSAG%2B8N5r8kDfRXL6ph%2FCdhMaY9ngMYkIvfDpQxP51%2BISM6rWjyqC3AxicnOhbqSRkwTFX67LrM7d9HqgrB60Jh%2BuudRLuRKt7ijmg3wUlO%2FlG0lsVqxLRwQotmF2xL5CzLDocKAeGjVjuWqniy%2BIkI0%2BvWPhEwuTzJRXbBYO4JPgBHUxK8xN6HICY8QWTrnsdSvhFBzxikLjbaC4OsxkwdE%2FW8Dl5etAS77g%2B7TtKXegk%2Frbn4KqQFFPepVw4EhpQr1msqPA6mGrIvuhRMcdPuaHClHLwDdU9rtf7y%2ByMs8rENjODV9KWaqc%2Fg%2BBq8NuSV785walYQv7LzCPx1wUDDw0MkaxxZ7dSRXvjBAsX5j1wvGww2QQAN7LMsJchfovapn7eHOoqkH0w6K7NxAY6pgETWbvHeX5m61pr2a64Piy%2FjyIkj3pD1Nw2MtJMmhQ3qwgC8yqXfKxv2Onf4uMm0R53AuOq6j9iCU5wGOc3bQE6bD%2FpIhdNAatDUJh7JRRsHl5fbwabsiG%2F%2BeUlNC90m7HcG3cwIdpL7LMwpir%2FepQQCV40g1WqS07tJat5qdDlfmYbhFeWN77VWc9VMmqJLDRxTXqybVuKzaFTgik%2Bw0%2Bwtdydr7Ol&X-Amz-Signature=db18b37f7a8f4ca9253e70868bff372a7a10f904e0be6d6a74c78cb6dcadf1ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6PPFP3B%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIBhDcTaY9teYyNzr1ecz8SfQIti4AZRzgMj4eCpf3CKqAiBGR3wKNg%2FLbbVP%2BxrdvtWaGSqJNVFo%2B4opGRhTMuGuQSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMFxuw44ofkAp3RFxTKtwDpDjcZkM9ZZ%2B%2B9PV%2Fj1u9TyYxvYELvFAcB6d%2FIMfFcxpOS%2Fmw71qlCVDDZ2q3ZzRXMJfv6dZ%2FKmss96aVAmVwhYQPzwtqvZ%2FtvglgQLPCnj7yp1FdsyViJ%2BooflILS8BVobsnoOr9Vzb%2BS8%2BnyFotypcryyb%2FpXRn8KvPM3IfwTsZVjm0wzOtOGPWRsRCv2slhCZwzFCmJGFivLkStwwGGG2gN8epPvdm15Kg4cV7fVEb9bgSAG%2B8N5r8kDfRXL6ph%2FCdhMaY9ngMYkIvfDpQxP51%2BISM6rWjyqC3AxicnOhbqSRkwTFX67LrM7d9HqgrB60Jh%2BuudRLuRKt7ijmg3wUlO%2FlG0lsVqxLRwQotmF2xL5CzLDocKAeGjVjuWqniy%2BIkI0%2BvWPhEwuTzJRXbBYO4JPgBHUxK8xN6HICY8QWTrnsdSvhFBzxikLjbaC4OsxkwdE%2FW8Dl5etAS77g%2B7TtKXegk%2Frbn4KqQFFPepVw4EhpQr1msqPA6mGrIvuhRMcdPuaHClHLwDdU9rtf7y%2ByMs8rENjODV9KWaqc%2Fg%2BBq8NuSV785walYQv7LzCPx1wUDDw0MkaxxZ7dSRXvjBAsX5j1wvGww2QQAN7LMsJchfovapn7eHOoqkH0w6K7NxAY6pgETWbvHeX5m61pr2a64Piy%2FjyIkj3pD1Nw2MtJMmhQ3qwgC8yqXfKxv2Onf4uMm0R53AuOq6j9iCU5wGOc3bQE6bD%2FpIhdNAatDUJh7JRRsHl5fbwabsiG%2F%2BeUlNC90m7HcG3cwIdpL7LMwpir%2FepQQCV40g1WqS07tJat5qdDlfmYbhFeWN77VWc9VMmqJLDRxTXqybVuKzaFTgik%2Bw0%2Bwtdydr7Ol&X-Amz-Signature=8006833a9d2a705569e892ef1e13536359816db480f2f34c3d0131d477604faa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6PPFP3B%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIBhDcTaY9teYyNzr1ecz8SfQIti4AZRzgMj4eCpf3CKqAiBGR3wKNg%2FLbbVP%2BxrdvtWaGSqJNVFo%2B4opGRhTMuGuQSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMFxuw44ofkAp3RFxTKtwDpDjcZkM9ZZ%2B%2B9PV%2Fj1u9TyYxvYELvFAcB6d%2FIMfFcxpOS%2Fmw71qlCVDDZ2q3ZzRXMJfv6dZ%2FKmss96aVAmVwhYQPzwtqvZ%2FtvglgQLPCnj7yp1FdsyViJ%2BooflILS8BVobsnoOr9Vzb%2BS8%2BnyFotypcryyb%2FpXRn8KvPM3IfwTsZVjm0wzOtOGPWRsRCv2slhCZwzFCmJGFivLkStwwGGG2gN8epPvdm15Kg4cV7fVEb9bgSAG%2B8N5r8kDfRXL6ph%2FCdhMaY9ngMYkIvfDpQxP51%2BISM6rWjyqC3AxicnOhbqSRkwTFX67LrM7d9HqgrB60Jh%2BuudRLuRKt7ijmg3wUlO%2FlG0lsVqxLRwQotmF2xL5CzLDocKAeGjVjuWqniy%2BIkI0%2BvWPhEwuTzJRXbBYO4JPgBHUxK8xN6HICY8QWTrnsdSvhFBzxikLjbaC4OsxkwdE%2FW8Dl5etAS77g%2B7TtKXegk%2Frbn4KqQFFPepVw4EhpQr1msqPA6mGrIvuhRMcdPuaHClHLwDdU9rtf7y%2ByMs8rENjODV9KWaqc%2Fg%2BBq8NuSV785walYQv7LzCPx1wUDDw0MkaxxZ7dSRXvjBAsX5j1wvGww2QQAN7LMsJchfovapn7eHOoqkH0w6K7NxAY6pgETWbvHeX5m61pr2a64Piy%2FjyIkj3pD1Nw2MtJMmhQ3qwgC8yqXfKxv2Onf4uMm0R53AuOq6j9iCU5wGOc3bQE6bD%2FpIhdNAatDUJh7JRRsHl5fbwabsiG%2F%2BeUlNC90m7HcG3cwIdpL7LMwpir%2FepQQCV40g1WqS07tJat5qdDlfmYbhFeWN77VWc9VMmqJLDRxTXqybVuKzaFTgik%2Bw0%2Bwtdydr7Ol&X-Amz-Signature=650be9f2c74b59fc17bb6885bcea7840b11192cfde669fa549d4748bc84f15f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6PPFP3B%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIBhDcTaY9teYyNzr1ecz8SfQIti4AZRzgMj4eCpf3CKqAiBGR3wKNg%2FLbbVP%2BxrdvtWaGSqJNVFo%2B4opGRhTMuGuQSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMFxuw44ofkAp3RFxTKtwDpDjcZkM9ZZ%2B%2B9PV%2Fj1u9TyYxvYELvFAcB6d%2FIMfFcxpOS%2Fmw71qlCVDDZ2q3ZzRXMJfv6dZ%2FKmss96aVAmVwhYQPzwtqvZ%2FtvglgQLPCnj7yp1FdsyViJ%2BooflILS8BVobsnoOr9Vzb%2BS8%2BnyFotypcryyb%2FpXRn8KvPM3IfwTsZVjm0wzOtOGPWRsRCv2slhCZwzFCmJGFivLkStwwGGG2gN8epPvdm15Kg4cV7fVEb9bgSAG%2B8N5r8kDfRXL6ph%2FCdhMaY9ngMYkIvfDpQxP51%2BISM6rWjyqC3AxicnOhbqSRkwTFX67LrM7d9HqgrB60Jh%2BuudRLuRKt7ijmg3wUlO%2FlG0lsVqxLRwQotmF2xL5CzLDocKAeGjVjuWqniy%2BIkI0%2BvWPhEwuTzJRXbBYO4JPgBHUxK8xN6HICY8QWTrnsdSvhFBzxikLjbaC4OsxkwdE%2FW8Dl5etAS77g%2B7TtKXegk%2Frbn4KqQFFPepVw4EhpQr1msqPA6mGrIvuhRMcdPuaHClHLwDdU9rtf7y%2ByMs8rENjODV9KWaqc%2Fg%2BBq8NuSV785walYQv7LzCPx1wUDDw0MkaxxZ7dSRXvjBAsX5j1wvGww2QQAN7LMsJchfovapn7eHOoqkH0w6K7NxAY6pgETWbvHeX5m61pr2a64Piy%2FjyIkj3pD1Nw2MtJMmhQ3qwgC8yqXfKxv2Onf4uMm0R53AuOq6j9iCU5wGOc3bQE6bD%2FpIhdNAatDUJh7JRRsHl5fbwabsiG%2F%2BeUlNC90m7HcG3cwIdpL7LMwpir%2FepQQCV40g1WqS07tJat5qdDlfmYbhFeWN77VWc9VMmqJLDRxTXqybVuKzaFTgik%2Bw0%2Bwtdydr7Ol&X-Amz-Signature=622a3a3a7ca4819bdaac9792f83a4587e2a8bdcbebb70fba9a71f03bc0e76fd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6PPFP3B%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIBhDcTaY9teYyNzr1ecz8SfQIti4AZRzgMj4eCpf3CKqAiBGR3wKNg%2FLbbVP%2BxrdvtWaGSqJNVFo%2B4opGRhTMuGuQSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMFxuw44ofkAp3RFxTKtwDpDjcZkM9ZZ%2B%2B9PV%2Fj1u9TyYxvYELvFAcB6d%2FIMfFcxpOS%2Fmw71qlCVDDZ2q3ZzRXMJfv6dZ%2FKmss96aVAmVwhYQPzwtqvZ%2FtvglgQLPCnj7yp1FdsyViJ%2BooflILS8BVobsnoOr9Vzb%2BS8%2BnyFotypcryyb%2FpXRn8KvPM3IfwTsZVjm0wzOtOGPWRsRCv2slhCZwzFCmJGFivLkStwwGGG2gN8epPvdm15Kg4cV7fVEb9bgSAG%2B8N5r8kDfRXL6ph%2FCdhMaY9ngMYkIvfDpQxP51%2BISM6rWjyqC3AxicnOhbqSRkwTFX67LrM7d9HqgrB60Jh%2BuudRLuRKt7ijmg3wUlO%2FlG0lsVqxLRwQotmF2xL5CzLDocKAeGjVjuWqniy%2BIkI0%2BvWPhEwuTzJRXbBYO4JPgBHUxK8xN6HICY8QWTrnsdSvhFBzxikLjbaC4OsxkwdE%2FW8Dl5etAS77g%2B7TtKXegk%2Frbn4KqQFFPepVw4EhpQr1msqPA6mGrIvuhRMcdPuaHClHLwDdU9rtf7y%2ByMs8rENjODV9KWaqc%2Fg%2BBq8NuSV785walYQv7LzCPx1wUDDw0MkaxxZ7dSRXvjBAsX5j1wvGww2QQAN7LMsJchfovapn7eHOoqkH0w6K7NxAY6pgETWbvHeX5m61pr2a64Piy%2FjyIkj3pD1Nw2MtJMmhQ3qwgC8yqXfKxv2Onf4uMm0R53AuOq6j9iCU5wGOc3bQE6bD%2FpIhdNAatDUJh7JRRsHl5fbwabsiG%2F%2BeUlNC90m7HcG3cwIdpL7LMwpir%2FepQQCV40g1WqS07tJat5qdDlfmYbhFeWN77VWc9VMmqJLDRxTXqybVuKzaFTgik%2Bw0%2Bwtdydr7Ol&X-Amz-Signature=b2c33b341a3d80f61c3443e595c72dd32235870f1fee540988373c70cedb51b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6PPFP3B%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIBhDcTaY9teYyNzr1ecz8SfQIti4AZRzgMj4eCpf3CKqAiBGR3wKNg%2FLbbVP%2BxrdvtWaGSqJNVFo%2B4opGRhTMuGuQSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMFxuw44ofkAp3RFxTKtwDpDjcZkM9ZZ%2B%2B9PV%2Fj1u9TyYxvYELvFAcB6d%2FIMfFcxpOS%2Fmw71qlCVDDZ2q3ZzRXMJfv6dZ%2FKmss96aVAmVwhYQPzwtqvZ%2FtvglgQLPCnj7yp1FdsyViJ%2BooflILS8BVobsnoOr9Vzb%2BS8%2BnyFotypcryyb%2FpXRn8KvPM3IfwTsZVjm0wzOtOGPWRsRCv2slhCZwzFCmJGFivLkStwwGGG2gN8epPvdm15Kg4cV7fVEb9bgSAG%2B8N5r8kDfRXL6ph%2FCdhMaY9ngMYkIvfDpQxP51%2BISM6rWjyqC3AxicnOhbqSRkwTFX67LrM7d9HqgrB60Jh%2BuudRLuRKt7ijmg3wUlO%2FlG0lsVqxLRwQotmF2xL5CzLDocKAeGjVjuWqniy%2BIkI0%2BvWPhEwuTzJRXbBYO4JPgBHUxK8xN6HICY8QWTrnsdSvhFBzxikLjbaC4OsxkwdE%2FW8Dl5etAS77g%2B7TtKXegk%2Frbn4KqQFFPepVw4EhpQr1msqPA6mGrIvuhRMcdPuaHClHLwDdU9rtf7y%2ByMs8rENjODV9KWaqc%2Fg%2BBq8NuSV785walYQv7LzCPx1wUDDw0MkaxxZ7dSRXvjBAsX5j1wvGww2QQAN7LMsJchfovapn7eHOoqkH0w6K7NxAY6pgETWbvHeX5m61pr2a64Piy%2FjyIkj3pD1Nw2MtJMmhQ3qwgC8yqXfKxv2Onf4uMm0R53AuOq6j9iCU5wGOc3bQE6bD%2FpIhdNAatDUJh7JRRsHl5fbwabsiG%2F%2BeUlNC90m7HcG3cwIdpL7LMwpir%2FepQQCV40g1WqS07tJat5qdDlfmYbhFeWN77VWc9VMmqJLDRxTXqybVuKzaFTgik%2Bw0%2Bwtdydr7Ol&X-Amz-Signature=5878875238814318b51e13f50ef83a48457a6b62a6ac2fa3aa9b7bfba1b1ab6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6PPFP3B%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIBhDcTaY9teYyNzr1ecz8SfQIti4AZRzgMj4eCpf3CKqAiBGR3wKNg%2FLbbVP%2BxrdvtWaGSqJNVFo%2B4opGRhTMuGuQSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMFxuw44ofkAp3RFxTKtwDpDjcZkM9ZZ%2B%2B9PV%2Fj1u9TyYxvYELvFAcB6d%2FIMfFcxpOS%2Fmw71qlCVDDZ2q3ZzRXMJfv6dZ%2FKmss96aVAmVwhYQPzwtqvZ%2FtvglgQLPCnj7yp1FdsyViJ%2BooflILS8BVobsnoOr9Vzb%2BS8%2BnyFotypcryyb%2FpXRn8KvPM3IfwTsZVjm0wzOtOGPWRsRCv2slhCZwzFCmJGFivLkStwwGGG2gN8epPvdm15Kg4cV7fVEb9bgSAG%2B8N5r8kDfRXL6ph%2FCdhMaY9ngMYkIvfDpQxP51%2BISM6rWjyqC3AxicnOhbqSRkwTFX67LrM7d9HqgrB60Jh%2BuudRLuRKt7ijmg3wUlO%2FlG0lsVqxLRwQotmF2xL5CzLDocKAeGjVjuWqniy%2BIkI0%2BvWPhEwuTzJRXbBYO4JPgBHUxK8xN6HICY8QWTrnsdSvhFBzxikLjbaC4OsxkwdE%2FW8Dl5etAS77g%2B7TtKXegk%2Frbn4KqQFFPepVw4EhpQr1msqPA6mGrIvuhRMcdPuaHClHLwDdU9rtf7y%2ByMs8rENjODV9KWaqc%2Fg%2BBq8NuSV785walYQv7LzCPx1wUDDw0MkaxxZ7dSRXvjBAsX5j1wvGww2QQAN7LMsJchfovapn7eHOoqkH0w6K7NxAY6pgETWbvHeX5m61pr2a64Piy%2FjyIkj3pD1Nw2MtJMmhQ3qwgC8yqXfKxv2Onf4uMm0R53AuOq6j9iCU5wGOc3bQE6bD%2FpIhdNAatDUJh7JRRsHl5fbwabsiG%2F%2BeUlNC90m7HcG3cwIdpL7LMwpir%2FepQQCV40g1WqS07tJat5qdDlfmYbhFeWN77VWc9VMmqJLDRxTXqybVuKzaFTgik%2Bw0%2Bwtdydr7Ol&X-Amz-Signature=82db9dd5ff199743401490b66db2d2ee5767d808e3713263e4efa955f81e8d91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6PPFP3B%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIBhDcTaY9teYyNzr1ecz8SfQIti4AZRzgMj4eCpf3CKqAiBGR3wKNg%2FLbbVP%2BxrdvtWaGSqJNVFo%2B4opGRhTMuGuQSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMFxuw44ofkAp3RFxTKtwDpDjcZkM9ZZ%2B%2B9PV%2Fj1u9TyYxvYELvFAcB6d%2FIMfFcxpOS%2Fmw71qlCVDDZ2q3ZzRXMJfv6dZ%2FKmss96aVAmVwhYQPzwtqvZ%2FtvglgQLPCnj7yp1FdsyViJ%2BooflILS8BVobsnoOr9Vzb%2BS8%2BnyFotypcryyb%2FpXRn8KvPM3IfwTsZVjm0wzOtOGPWRsRCv2slhCZwzFCmJGFivLkStwwGGG2gN8epPvdm15Kg4cV7fVEb9bgSAG%2B8N5r8kDfRXL6ph%2FCdhMaY9ngMYkIvfDpQxP51%2BISM6rWjyqC3AxicnOhbqSRkwTFX67LrM7d9HqgrB60Jh%2BuudRLuRKt7ijmg3wUlO%2FlG0lsVqxLRwQotmF2xL5CzLDocKAeGjVjuWqniy%2BIkI0%2BvWPhEwuTzJRXbBYO4JPgBHUxK8xN6HICY8QWTrnsdSvhFBzxikLjbaC4OsxkwdE%2FW8Dl5etAS77g%2B7TtKXegk%2Frbn4KqQFFPepVw4EhpQr1msqPA6mGrIvuhRMcdPuaHClHLwDdU9rtf7y%2ByMs8rENjODV9KWaqc%2Fg%2BBq8NuSV785walYQv7LzCPx1wUDDw0MkaxxZ7dSRXvjBAsX5j1wvGww2QQAN7LMsJchfovapn7eHOoqkH0w6K7NxAY6pgETWbvHeX5m61pr2a64Piy%2FjyIkj3pD1Nw2MtJMmhQ3qwgC8yqXfKxv2Onf4uMm0R53AuOq6j9iCU5wGOc3bQE6bD%2FpIhdNAatDUJh7JRRsHl5fbwabsiG%2F%2BeUlNC90m7HcG3cwIdpL7LMwpir%2FepQQCV40g1WqS07tJat5qdDlfmYbhFeWN77VWc9VMmqJLDRxTXqybVuKzaFTgik%2Bw0%2Bwtdydr7Ol&X-Amz-Signature=64bdd3fe8e8da4dcdcfb2060a542824853bb6c7674e8143eae236556cd9bf06a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6PPFP3B%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T133514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJGMEQCIBhDcTaY9teYyNzr1ecz8SfQIti4AZRzgMj4eCpf3CKqAiBGR3wKNg%2FLbbVP%2BxrdvtWaGSqJNVFo%2B4opGRhTMuGuQSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMFxuw44ofkAp3RFxTKtwDpDjcZkM9ZZ%2B%2B9PV%2Fj1u9TyYxvYELvFAcB6d%2FIMfFcxpOS%2Fmw71qlCVDDZ2q3ZzRXMJfv6dZ%2FKmss96aVAmVwhYQPzwtqvZ%2FtvglgQLPCnj7yp1FdsyViJ%2BooflILS8BVobsnoOr9Vzb%2BS8%2BnyFotypcryyb%2FpXRn8KvPM3IfwTsZVjm0wzOtOGPWRsRCv2slhCZwzFCmJGFivLkStwwGGG2gN8epPvdm15Kg4cV7fVEb9bgSAG%2B8N5r8kDfRXL6ph%2FCdhMaY9ngMYkIvfDpQxP51%2BISM6rWjyqC3AxicnOhbqSRkwTFX67LrM7d9HqgrB60Jh%2BuudRLuRKt7ijmg3wUlO%2FlG0lsVqxLRwQotmF2xL5CzLDocKAeGjVjuWqniy%2BIkI0%2BvWPhEwuTzJRXbBYO4JPgBHUxK8xN6HICY8QWTrnsdSvhFBzxikLjbaC4OsxkwdE%2FW8Dl5etAS77g%2B7TtKXegk%2Frbn4KqQFFPepVw4EhpQr1msqPA6mGrIvuhRMcdPuaHClHLwDdU9rtf7y%2ByMs8rENjODV9KWaqc%2Fg%2BBq8NuSV785walYQv7LzCPx1wUDDw0MkaxxZ7dSRXvjBAsX5j1wvGww2QQAN7LMsJchfovapn7eHOoqkH0w6K7NxAY6pgETWbvHeX5m61pr2a64Piy%2FjyIkj3pD1Nw2MtJMmhQ3qwgC8yqXfKxv2Onf4uMm0R53AuOq6j9iCU5wGOc3bQE6bD%2FpIhdNAatDUJh7JRRsHl5fbwabsiG%2F%2BeUlNC90m7HcG3cwIdpL7LMwpir%2FepQQCV40g1WqS07tJat5qdDlfmYbhFeWN77VWc9VMmqJLDRxTXqybVuKzaFTgik%2Bw0%2Bwtdydr7Ol&X-Amz-Signature=d1655792272c0aad213e4e7302650ee9bebdfc613166c7ca1430ae8ebc2ff742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
