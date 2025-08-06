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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J7NR6WI%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIHltEsJEvTwgybFmugSlCIGSHOZ7fri6P16W0NPnyQC8AiBEjf0kYbX%2B5%2BpP1qTqKC8wCxu0r1MW2GEX4a0MgTNvxSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMb1%2BVs8DdJQPp7We9KtwDuL%2BrfEceP6A2jw5hwjITms7TaGCuiP%2B7c3AFXe4QjP6bWkJWMsivkDhrcbA86QN8HArRKSnp4VR%2FZdVovEyu47zz0dgUX6itmmcdreBYGQMk%2BebUR%2FDeApiwbHyry0lMmDW7migGxR%2F8EXl7%2Ffmoa%2FnLKr294O3HO%2FFLMi9sRjJmzNSaA%2F%2FezZgbHib0OKJsVcrY31Q%2BsHfiC1Hu3bKYoCoR%2BBBW5wOIqAEBkMptjEf3NnLY1vgSPxAzPCC0SvwZXp7blF6ZPPWhP1TKy1O9CbH9MCYrDsMcGjp5GrNda0g%2BgmkBT8A5rmJRdp0AJ2HGv02ZyJgHy06%2B6XCaXuNZTLdorlyLZJj82seh8e26CEne55H36BtGMbAJGJrCng4BubLSvdkY1Xa%2FiCp8TWhx0SlTlPhJMf3ff2aT2fj116qWMZq68RIWwAeljtvM6VjcuOFyhY8rL93%2Bg%2Fpb3YTBDsGItJp66VIPWRe87ZMT7K%2FWsUd8tcJ2HCUmR7iHo1BvMMz06HNXhQ7fg1gLu9t7nTf9kFCDj3DODWwtY9FAquszUwx41WOUO65Qp9mXNrVNbtEuzaIJ%2Facn%2Bt%2Bijoq0CMNaTNx9YCcMEyR9uof9cDm9ZjwQD71Iw9UC%2FaMw6fDLxAY6pgHzYpQgKvaQWLRdotHncbatcsvO4yDhDm89Dy0X70CTnM41sa6SpRovBPHSoPJG17wh0smatl%2BIn9%2BTdWyTvhs9HeeG%2Fc9UiqH5QtI4tcMkdJOk3YjA8gT3qURTkPCR549NkqpRGrIHkz7MmLfAnVqlEJKuBP3ofp%2FpI%2BHFUHInWWL%2FtOR1awep%2F19XHlUjqu1RBreeGQ9U7QNPD5Avaw%2B7ccCeSsE4&X-Amz-Signature=3ca75eb152613609b7f1440518576bc46a8ebe3f4c917afaf4b99aed086e14c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J7NR6WI%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIHltEsJEvTwgybFmugSlCIGSHOZ7fri6P16W0NPnyQC8AiBEjf0kYbX%2B5%2BpP1qTqKC8wCxu0r1MW2GEX4a0MgTNvxSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMb1%2BVs8DdJQPp7We9KtwDuL%2BrfEceP6A2jw5hwjITms7TaGCuiP%2B7c3AFXe4QjP6bWkJWMsivkDhrcbA86QN8HArRKSnp4VR%2FZdVovEyu47zz0dgUX6itmmcdreBYGQMk%2BebUR%2FDeApiwbHyry0lMmDW7migGxR%2F8EXl7%2Ffmoa%2FnLKr294O3HO%2FFLMi9sRjJmzNSaA%2F%2FezZgbHib0OKJsVcrY31Q%2BsHfiC1Hu3bKYoCoR%2BBBW5wOIqAEBkMptjEf3NnLY1vgSPxAzPCC0SvwZXp7blF6ZPPWhP1TKy1O9CbH9MCYrDsMcGjp5GrNda0g%2BgmkBT8A5rmJRdp0AJ2HGv02ZyJgHy06%2B6XCaXuNZTLdorlyLZJj82seh8e26CEne55H36BtGMbAJGJrCng4BubLSvdkY1Xa%2FiCp8TWhx0SlTlPhJMf3ff2aT2fj116qWMZq68RIWwAeljtvM6VjcuOFyhY8rL93%2Bg%2Fpb3YTBDsGItJp66VIPWRe87ZMT7K%2FWsUd8tcJ2HCUmR7iHo1BvMMz06HNXhQ7fg1gLu9t7nTf9kFCDj3DODWwtY9FAquszUwx41WOUO65Qp9mXNrVNbtEuzaIJ%2Facn%2Bt%2Bijoq0CMNaTNx9YCcMEyR9uof9cDm9ZjwQD71Iw9UC%2FaMw6fDLxAY6pgHzYpQgKvaQWLRdotHncbatcsvO4yDhDm89Dy0X70CTnM41sa6SpRovBPHSoPJG17wh0smatl%2BIn9%2BTdWyTvhs9HeeG%2Fc9UiqH5QtI4tcMkdJOk3YjA8gT3qURTkPCR549NkqpRGrIHkz7MmLfAnVqlEJKuBP3ofp%2FpI%2BHFUHInWWL%2FtOR1awep%2F19XHlUjqu1RBreeGQ9U7QNPD5Avaw%2B7ccCeSsE4&X-Amz-Signature=bb2fb12fc4091953b284c6c3d92c02a93afdaa7785292651c72983b884ae051c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J7NR6WI%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIHltEsJEvTwgybFmugSlCIGSHOZ7fri6P16W0NPnyQC8AiBEjf0kYbX%2B5%2BpP1qTqKC8wCxu0r1MW2GEX4a0MgTNvxSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMb1%2BVs8DdJQPp7We9KtwDuL%2BrfEceP6A2jw5hwjITms7TaGCuiP%2B7c3AFXe4QjP6bWkJWMsivkDhrcbA86QN8HArRKSnp4VR%2FZdVovEyu47zz0dgUX6itmmcdreBYGQMk%2BebUR%2FDeApiwbHyry0lMmDW7migGxR%2F8EXl7%2Ffmoa%2FnLKr294O3HO%2FFLMi9sRjJmzNSaA%2F%2FezZgbHib0OKJsVcrY31Q%2BsHfiC1Hu3bKYoCoR%2BBBW5wOIqAEBkMptjEf3NnLY1vgSPxAzPCC0SvwZXp7blF6ZPPWhP1TKy1O9CbH9MCYrDsMcGjp5GrNda0g%2BgmkBT8A5rmJRdp0AJ2HGv02ZyJgHy06%2B6XCaXuNZTLdorlyLZJj82seh8e26CEne55H36BtGMbAJGJrCng4BubLSvdkY1Xa%2FiCp8TWhx0SlTlPhJMf3ff2aT2fj116qWMZq68RIWwAeljtvM6VjcuOFyhY8rL93%2Bg%2Fpb3YTBDsGItJp66VIPWRe87ZMT7K%2FWsUd8tcJ2HCUmR7iHo1BvMMz06HNXhQ7fg1gLu9t7nTf9kFCDj3DODWwtY9FAquszUwx41WOUO65Qp9mXNrVNbtEuzaIJ%2Facn%2Bt%2Bijoq0CMNaTNx9YCcMEyR9uof9cDm9ZjwQD71Iw9UC%2FaMw6fDLxAY6pgHzYpQgKvaQWLRdotHncbatcsvO4yDhDm89Dy0X70CTnM41sa6SpRovBPHSoPJG17wh0smatl%2BIn9%2BTdWyTvhs9HeeG%2Fc9UiqH5QtI4tcMkdJOk3YjA8gT3qURTkPCR549NkqpRGrIHkz7MmLfAnVqlEJKuBP3ofp%2FpI%2BHFUHInWWL%2FtOR1awep%2F19XHlUjqu1RBreeGQ9U7QNPD5Avaw%2B7ccCeSsE4&X-Amz-Signature=c7d5c220cae20281d41601cd2b45f5c584514628c7494f6b997194b5ae29a2a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J7NR6WI%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIHltEsJEvTwgybFmugSlCIGSHOZ7fri6P16W0NPnyQC8AiBEjf0kYbX%2B5%2BpP1qTqKC8wCxu0r1MW2GEX4a0MgTNvxSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMb1%2BVs8DdJQPp7We9KtwDuL%2BrfEceP6A2jw5hwjITms7TaGCuiP%2B7c3AFXe4QjP6bWkJWMsivkDhrcbA86QN8HArRKSnp4VR%2FZdVovEyu47zz0dgUX6itmmcdreBYGQMk%2BebUR%2FDeApiwbHyry0lMmDW7migGxR%2F8EXl7%2Ffmoa%2FnLKr294O3HO%2FFLMi9sRjJmzNSaA%2F%2FezZgbHib0OKJsVcrY31Q%2BsHfiC1Hu3bKYoCoR%2BBBW5wOIqAEBkMptjEf3NnLY1vgSPxAzPCC0SvwZXp7blF6ZPPWhP1TKy1O9CbH9MCYrDsMcGjp5GrNda0g%2BgmkBT8A5rmJRdp0AJ2HGv02ZyJgHy06%2B6XCaXuNZTLdorlyLZJj82seh8e26CEne55H36BtGMbAJGJrCng4BubLSvdkY1Xa%2FiCp8TWhx0SlTlPhJMf3ff2aT2fj116qWMZq68RIWwAeljtvM6VjcuOFyhY8rL93%2Bg%2Fpb3YTBDsGItJp66VIPWRe87ZMT7K%2FWsUd8tcJ2HCUmR7iHo1BvMMz06HNXhQ7fg1gLu9t7nTf9kFCDj3DODWwtY9FAquszUwx41WOUO65Qp9mXNrVNbtEuzaIJ%2Facn%2Bt%2Bijoq0CMNaTNx9YCcMEyR9uof9cDm9ZjwQD71Iw9UC%2FaMw6fDLxAY6pgHzYpQgKvaQWLRdotHncbatcsvO4yDhDm89Dy0X70CTnM41sa6SpRovBPHSoPJG17wh0smatl%2BIn9%2BTdWyTvhs9HeeG%2Fc9UiqH5QtI4tcMkdJOk3YjA8gT3qURTkPCR549NkqpRGrIHkz7MmLfAnVqlEJKuBP3ofp%2FpI%2BHFUHInWWL%2FtOR1awep%2F19XHlUjqu1RBreeGQ9U7QNPD5Avaw%2B7ccCeSsE4&X-Amz-Signature=2068e125cf635850310bc928c771f3853d4d5a3f6e05662851304dfe6d5a03d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J7NR6WI%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIHltEsJEvTwgybFmugSlCIGSHOZ7fri6P16W0NPnyQC8AiBEjf0kYbX%2B5%2BpP1qTqKC8wCxu0r1MW2GEX4a0MgTNvxSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMb1%2BVs8DdJQPp7We9KtwDuL%2BrfEceP6A2jw5hwjITms7TaGCuiP%2B7c3AFXe4QjP6bWkJWMsivkDhrcbA86QN8HArRKSnp4VR%2FZdVovEyu47zz0dgUX6itmmcdreBYGQMk%2BebUR%2FDeApiwbHyry0lMmDW7migGxR%2F8EXl7%2Ffmoa%2FnLKr294O3HO%2FFLMi9sRjJmzNSaA%2F%2FezZgbHib0OKJsVcrY31Q%2BsHfiC1Hu3bKYoCoR%2BBBW5wOIqAEBkMptjEf3NnLY1vgSPxAzPCC0SvwZXp7blF6ZPPWhP1TKy1O9CbH9MCYrDsMcGjp5GrNda0g%2BgmkBT8A5rmJRdp0AJ2HGv02ZyJgHy06%2B6XCaXuNZTLdorlyLZJj82seh8e26CEne55H36BtGMbAJGJrCng4BubLSvdkY1Xa%2FiCp8TWhx0SlTlPhJMf3ff2aT2fj116qWMZq68RIWwAeljtvM6VjcuOFyhY8rL93%2Bg%2Fpb3YTBDsGItJp66VIPWRe87ZMT7K%2FWsUd8tcJ2HCUmR7iHo1BvMMz06HNXhQ7fg1gLu9t7nTf9kFCDj3DODWwtY9FAquszUwx41WOUO65Qp9mXNrVNbtEuzaIJ%2Facn%2Bt%2Bijoq0CMNaTNx9YCcMEyR9uof9cDm9ZjwQD71Iw9UC%2FaMw6fDLxAY6pgHzYpQgKvaQWLRdotHncbatcsvO4yDhDm89Dy0X70CTnM41sa6SpRovBPHSoPJG17wh0smatl%2BIn9%2BTdWyTvhs9HeeG%2Fc9UiqH5QtI4tcMkdJOk3YjA8gT3qURTkPCR549NkqpRGrIHkz7MmLfAnVqlEJKuBP3ofp%2FpI%2BHFUHInWWL%2FtOR1awep%2F19XHlUjqu1RBreeGQ9U7QNPD5Avaw%2B7ccCeSsE4&X-Amz-Signature=7444968f11d34f6371209a621a73329b32f3627307a1cf41c53d17e981bda706&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J7NR6WI%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIHltEsJEvTwgybFmugSlCIGSHOZ7fri6P16W0NPnyQC8AiBEjf0kYbX%2B5%2BpP1qTqKC8wCxu0r1MW2GEX4a0MgTNvxSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMb1%2BVs8DdJQPp7We9KtwDuL%2BrfEceP6A2jw5hwjITms7TaGCuiP%2B7c3AFXe4QjP6bWkJWMsivkDhrcbA86QN8HArRKSnp4VR%2FZdVovEyu47zz0dgUX6itmmcdreBYGQMk%2BebUR%2FDeApiwbHyry0lMmDW7migGxR%2F8EXl7%2Ffmoa%2FnLKr294O3HO%2FFLMi9sRjJmzNSaA%2F%2FezZgbHib0OKJsVcrY31Q%2BsHfiC1Hu3bKYoCoR%2BBBW5wOIqAEBkMptjEf3NnLY1vgSPxAzPCC0SvwZXp7blF6ZPPWhP1TKy1O9CbH9MCYrDsMcGjp5GrNda0g%2BgmkBT8A5rmJRdp0AJ2HGv02ZyJgHy06%2B6XCaXuNZTLdorlyLZJj82seh8e26CEne55H36BtGMbAJGJrCng4BubLSvdkY1Xa%2FiCp8TWhx0SlTlPhJMf3ff2aT2fj116qWMZq68RIWwAeljtvM6VjcuOFyhY8rL93%2Bg%2Fpb3YTBDsGItJp66VIPWRe87ZMT7K%2FWsUd8tcJ2HCUmR7iHo1BvMMz06HNXhQ7fg1gLu9t7nTf9kFCDj3DODWwtY9FAquszUwx41WOUO65Qp9mXNrVNbtEuzaIJ%2Facn%2Bt%2Bijoq0CMNaTNx9YCcMEyR9uof9cDm9ZjwQD71Iw9UC%2FaMw6fDLxAY6pgHzYpQgKvaQWLRdotHncbatcsvO4yDhDm89Dy0X70CTnM41sa6SpRovBPHSoPJG17wh0smatl%2BIn9%2BTdWyTvhs9HeeG%2Fc9UiqH5QtI4tcMkdJOk3YjA8gT3qURTkPCR549NkqpRGrIHkz7MmLfAnVqlEJKuBP3ofp%2FpI%2BHFUHInWWL%2FtOR1awep%2F19XHlUjqu1RBreeGQ9U7QNPD5Avaw%2B7ccCeSsE4&X-Amz-Signature=2e192cd3569800ec1e7e4648985ee4047db5b35295299669e021e1364b887126&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J7NR6WI%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIHltEsJEvTwgybFmugSlCIGSHOZ7fri6P16W0NPnyQC8AiBEjf0kYbX%2B5%2BpP1qTqKC8wCxu0r1MW2GEX4a0MgTNvxSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMb1%2BVs8DdJQPp7We9KtwDuL%2BrfEceP6A2jw5hwjITms7TaGCuiP%2B7c3AFXe4QjP6bWkJWMsivkDhrcbA86QN8HArRKSnp4VR%2FZdVovEyu47zz0dgUX6itmmcdreBYGQMk%2BebUR%2FDeApiwbHyry0lMmDW7migGxR%2F8EXl7%2Ffmoa%2FnLKr294O3HO%2FFLMi9sRjJmzNSaA%2F%2FezZgbHib0OKJsVcrY31Q%2BsHfiC1Hu3bKYoCoR%2BBBW5wOIqAEBkMptjEf3NnLY1vgSPxAzPCC0SvwZXp7blF6ZPPWhP1TKy1O9CbH9MCYrDsMcGjp5GrNda0g%2BgmkBT8A5rmJRdp0AJ2HGv02ZyJgHy06%2B6XCaXuNZTLdorlyLZJj82seh8e26CEne55H36BtGMbAJGJrCng4BubLSvdkY1Xa%2FiCp8TWhx0SlTlPhJMf3ff2aT2fj116qWMZq68RIWwAeljtvM6VjcuOFyhY8rL93%2Bg%2Fpb3YTBDsGItJp66VIPWRe87ZMT7K%2FWsUd8tcJ2HCUmR7iHo1BvMMz06HNXhQ7fg1gLu9t7nTf9kFCDj3DODWwtY9FAquszUwx41WOUO65Qp9mXNrVNbtEuzaIJ%2Facn%2Bt%2Bijoq0CMNaTNx9YCcMEyR9uof9cDm9ZjwQD71Iw9UC%2FaMw6fDLxAY6pgHzYpQgKvaQWLRdotHncbatcsvO4yDhDm89Dy0X70CTnM41sa6SpRovBPHSoPJG17wh0smatl%2BIn9%2BTdWyTvhs9HeeG%2Fc9UiqH5QtI4tcMkdJOk3YjA8gT3qURTkPCR549NkqpRGrIHkz7MmLfAnVqlEJKuBP3ofp%2FpI%2BHFUHInWWL%2FtOR1awep%2F19XHlUjqu1RBreeGQ9U7QNPD5Avaw%2B7ccCeSsE4&X-Amz-Signature=73b6d6479d86094763cb62a1779945725adcd1024ac2e704d7156ee35d0f9de7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J7NR6WI%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIHltEsJEvTwgybFmugSlCIGSHOZ7fri6P16W0NPnyQC8AiBEjf0kYbX%2B5%2BpP1qTqKC8wCxu0r1MW2GEX4a0MgTNvxSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMb1%2BVs8DdJQPp7We9KtwDuL%2BrfEceP6A2jw5hwjITms7TaGCuiP%2B7c3AFXe4QjP6bWkJWMsivkDhrcbA86QN8HArRKSnp4VR%2FZdVovEyu47zz0dgUX6itmmcdreBYGQMk%2BebUR%2FDeApiwbHyry0lMmDW7migGxR%2F8EXl7%2Ffmoa%2FnLKr294O3HO%2FFLMi9sRjJmzNSaA%2F%2FezZgbHib0OKJsVcrY31Q%2BsHfiC1Hu3bKYoCoR%2BBBW5wOIqAEBkMptjEf3NnLY1vgSPxAzPCC0SvwZXp7blF6ZPPWhP1TKy1O9CbH9MCYrDsMcGjp5GrNda0g%2BgmkBT8A5rmJRdp0AJ2HGv02ZyJgHy06%2B6XCaXuNZTLdorlyLZJj82seh8e26CEne55H36BtGMbAJGJrCng4BubLSvdkY1Xa%2FiCp8TWhx0SlTlPhJMf3ff2aT2fj116qWMZq68RIWwAeljtvM6VjcuOFyhY8rL93%2Bg%2Fpb3YTBDsGItJp66VIPWRe87ZMT7K%2FWsUd8tcJ2HCUmR7iHo1BvMMz06HNXhQ7fg1gLu9t7nTf9kFCDj3DODWwtY9FAquszUwx41WOUO65Qp9mXNrVNbtEuzaIJ%2Facn%2Bt%2Bijoq0CMNaTNx9YCcMEyR9uof9cDm9ZjwQD71Iw9UC%2FaMw6fDLxAY6pgHzYpQgKvaQWLRdotHncbatcsvO4yDhDm89Dy0X70CTnM41sa6SpRovBPHSoPJG17wh0smatl%2BIn9%2BTdWyTvhs9HeeG%2Fc9UiqH5QtI4tcMkdJOk3YjA8gT3qURTkPCR549NkqpRGrIHkz7MmLfAnVqlEJKuBP3ofp%2FpI%2BHFUHInWWL%2FtOR1awep%2F19XHlUjqu1RBreeGQ9U7QNPD5Avaw%2B7ccCeSsE4&X-Amz-Signature=fb74890e0080873a2e46c2a5f1066daa2dc78367361420618abc258b8b7d2c51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J7NR6WI%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIHltEsJEvTwgybFmugSlCIGSHOZ7fri6P16W0NPnyQC8AiBEjf0kYbX%2B5%2BpP1qTqKC8wCxu0r1MW2GEX4a0MgTNvxSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMb1%2BVs8DdJQPp7We9KtwDuL%2BrfEceP6A2jw5hwjITms7TaGCuiP%2B7c3AFXe4QjP6bWkJWMsivkDhrcbA86QN8HArRKSnp4VR%2FZdVovEyu47zz0dgUX6itmmcdreBYGQMk%2BebUR%2FDeApiwbHyry0lMmDW7migGxR%2F8EXl7%2Ffmoa%2FnLKr294O3HO%2FFLMi9sRjJmzNSaA%2F%2FezZgbHib0OKJsVcrY31Q%2BsHfiC1Hu3bKYoCoR%2BBBW5wOIqAEBkMptjEf3NnLY1vgSPxAzPCC0SvwZXp7blF6ZPPWhP1TKy1O9CbH9MCYrDsMcGjp5GrNda0g%2BgmkBT8A5rmJRdp0AJ2HGv02ZyJgHy06%2B6XCaXuNZTLdorlyLZJj82seh8e26CEne55H36BtGMbAJGJrCng4BubLSvdkY1Xa%2FiCp8TWhx0SlTlPhJMf3ff2aT2fj116qWMZq68RIWwAeljtvM6VjcuOFyhY8rL93%2Bg%2Fpb3YTBDsGItJp66VIPWRe87ZMT7K%2FWsUd8tcJ2HCUmR7iHo1BvMMz06HNXhQ7fg1gLu9t7nTf9kFCDj3DODWwtY9FAquszUwx41WOUO65Qp9mXNrVNbtEuzaIJ%2Facn%2Bt%2Bijoq0CMNaTNx9YCcMEyR9uof9cDm9ZjwQD71Iw9UC%2FaMw6fDLxAY6pgHzYpQgKvaQWLRdotHncbatcsvO4yDhDm89Dy0X70CTnM41sa6SpRovBPHSoPJG17wh0smatl%2BIn9%2BTdWyTvhs9HeeG%2Fc9UiqH5QtI4tcMkdJOk3YjA8gT3qURTkPCR549NkqpRGrIHkz7MmLfAnVqlEJKuBP3ofp%2FpI%2BHFUHInWWL%2FtOR1awep%2F19XHlUjqu1RBreeGQ9U7QNPD5Avaw%2B7ccCeSsE4&X-Amz-Signature=5ce9dec7aa4df2c156190c92376d38059f8f0368f98c95604ab08869f5936f2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J7NR6WI%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIHltEsJEvTwgybFmugSlCIGSHOZ7fri6P16W0NPnyQC8AiBEjf0kYbX%2B5%2BpP1qTqKC8wCxu0r1MW2GEX4a0MgTNvxSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMb1%2BVs8DdJQPp7We9KtwDuL%2BrfEceP6A2jw5hwjITms7TaGCuiP%2B7c3AFXe4QjP6bWkJWMsivkDhrcbA86QN8HArRKSnp4VR%2FZdVovEyu47zz0dgUX6itmmcdreBYGQMk%2BebUR%2FDeApiwbHyry0lMmDW7migGxR%2F8EXl7%2Ffmoa%2FnLKr294O3HO%2FFLMi9sRjJmzNSaA%2F%2FezZgbHib0OKJsVcrY31Q%2BsHfiC1Hu3bKYoCoR%2BBBW5wOIqAEBkMptjEf3NnLY1vgSPxAzPCC0SvwZXp7blF6ZPPWhP1TKy1O9CbH9MCYrDsMcGjp5GrNda0g%2BgmkBT8A5rmJRdp0AJ2HGv02ZyJgHy06%2B6XCaXuNZTLdorlyLZJj82seh8e26CEne55H36BtGMbAJGJrCng4BubLSvdkY1Xa%2FiCp8TWhx0SlTlPhJMf3ff2aT2fj116qWMZq68RIWwAeljtvM6VjcuOFyhY8rL93%2Bg%2Fpb3YTBDsGItJp66VIPWRe87ZMT7K%2FWsUd8tcJ2HCUmR7iHo1BvMMz06HNXhQ7fg1gLu9t7nTf9kFCDj3DODWwtY9FAquszUwx41WOUO65Qp9mXNrVNbtEuzaIJ%2Facn%2Bt%2Bijoq0CMNaTNx9YCcMEyR9uof9cDm9ZjwQD71Iw9UC%2FaMw6fDLxAY6pgHzYpQgKvaQWLRdotHncbatcsvO4yDhDm89Dy0X70CTnM41sa6SpRovBPHSoPJG17wh0smatl%2BIn9%2BTdWyTvhs9HeeG%2Fc9UiqH5QtI4tcMkdJOk3YjA8gT3qURTkPCR549NkqpRGrIHkz7MmLfAnVqlEJKuBP3ofp%2FpI%2BHFUHInWWL%2FtOR1awep%2F19XHlUjqu1RBreeGQ9U7QNPD5Avaw%2B7ccCeSsE4&X-Amz-Signature=fd8e40449d006b39c2288b1751ddf35eb1d02211db0f5f3ba91740f9cd7b5c37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J7NR6WI%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIHltEsJEvTwgybFmugSlCIGSHOZ7fri6P16W0NPnyQC8AiBEjf0kYbX%2B5%2BpP1qTqKC8wCxu0r1MW2GEX4a0MgTNvxSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMb1%2BVs8DdJQPp7We9KtwDuL%2BrfEceP6A2jw5hwjITms7TaGCuiP%2B7c3AFXe4QjP6bWkJWMsivkDhrcbA86QN8HArRKSnp4VR%2FZdVovEyu47zz0dgUX6itmmcdreBYGQMk%2BebUR%2FDeApiwbHyry0lMmDW7migGxR%2F8EXl7%2Ffmoa%2FnLKr294O3HO%2FFLMi9sRjJmzNSaA%2F%2FezZgbHib0OKJsVcrY31Q%2BsHfiC1Hu3bKYoCoR%2BBBW5wOIqAEBkMptjEf3NnLY1vgSPxAzPCC0SvwZXp7blF6ZPPWhP1TKy1O9CbH9MCYrDsMcGjp5GrNda0g%2BgmkBT8A5rmJRdp0AJ2HGv02ZyJgHy06%2B6XCaXuNZTLdorlyLZJj82seh8e26CEne55H36BtGMbAJGJrCng4BubLSvdkY1Xa%2FiCp8TWhx0SlTlPhJMf3ff2aT2fj116qWMZq68RIWwAeljtvM6VjcuOFyhY8rL93%2Bg%2Fpb3YTBDsGItJp66VIPWRe87ZMT7K%2FWsUd8tcJ2HCUmR7iHo1BvMMz06HNXhQ7fg1gLu9t7nTf9kFCDj3DODWwtY9FAquszUwx41WOUO65Qp9mXNrVNbtEuzaIJ%2Facn%2Bt%2Bijoq0CMNaTNx9YCcMEyR9uof9cDm9ZjwQD71Iw9UC%2FaMw6fDLxAY6pgHzYpQgKvaQWLRdotHncbatcsvO4yDhDm89Dy0X70CTnM41sa6SpRovBPHSoPJG17wh0smatl%2BIn9%2BTdWyTvhs9HeeG%2Fc9UiqH5QtI4tcMkdJOk3YjA8gT3qURTkPCR549NkqpRGrIHkz7MmLfAnVqlEJKuBP3ofp%2FpI%2BHFUHInWWL%2FtOR1awep%2F19XHlUjqu1RBreeGQ9U7QNPD5Avaw%2B7ccCeSsE4&X-Amz-Signature=24d1456cb985a0e1e1ec68eff636c2f57227ad8f765684d8dc39b861cdd026cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J7NR6WI%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIHltEsJEvTwgybFmugSlCIGSHOZ7fri6P16W0NPnyQC8AiBEjf0kYbX%2B5%2BpP1qTqKC8wCxu0r1MW2GEX4a0MgTNvxSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMb1%2BVs8DdJQPp7We9KtwDuL%2BrfEceP6A2jw5hwjITms7TaGCuiP%2B7c3AFXe4QjP6bWkJWMsivkDhrcbA86QN8HArRKSnp4VR%2FZdVovEyu47zz0dgUX6itmmcdreBYGQMk%2BebUR%2FDeApiwbHyry0lMmDW7migGxR%2F8EXl7%2Ffmoa%2FnLKr294O3HO%2FFLMi9sRjJmzNSaA%2F%2FezZgbHib0OKJsVcrY31Q%2BsHfiC1Hu3bKYoCoR%2BBBW5wOIqAEBkMptjEf3NnLY1vgSPxAzPCC0SvwZXp7blF6ZPPWhP1TKy1O9CbH9MCYrDsMcGjp5GrNda0g%2BgmkBT8A5rmJRdp0AJ2HGv02ZyJgHy06%2B6XCaXuNZTLdorlyLZJj82seh8e26CEne55H36BtGMbAJGJrCng4BubLSvdkY1Xa%2FiCp8TWhx0SlTlPhJMf3ff2aT2fj116qWMZq68RIWwAeljtvM6VjcuOFyhY8rL93%2Bg%2Fpb3YTBDsGItJp66VIPWRe87ZMT7K%2FWsUd8tcJ2HCUmR7iHo1BvMMz06HNXhQ7fg1gLu9t7nTf9kFCDj3DODWwtY9FAquszUwx41WOUO65Qp9mXNrVNbtEuzaIJ%2Facn%2Bt%2Bijoq0CMNaTNx9YCcMEyR9uof9cDm9ZjwQD71Iw9UC%2FaMw6fDLxAY6pgHzYpQgKvaQWLRdotHncbatcsvO4yDhDm89Dy0X70CTnM41sa6SpRovBPHSoPJG17wh0smatl%2BIn9%2BTdWyTvhs9HeeG%2Fc9UiqH5QtI4tcMkdJOk3YjA8gT3qURTkPCR549NkqpRGrIHkz7MmLfAnVqlEJKuBP3ofp%2FpI%2BHFUHInWWL%2FtOR1awep%2F19XHlUjqu1RBreeGQ9U7QNPD5Avaw%2B7ccCeSsE4&X-Amz-Signature=ae7c07fbeab26a4f24e599ab113d99f15dde69f29341f48952dfc63922f138c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J7NR6WI%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIHltEsJEvTwgybFmugSlCIGSHOZ7fri6P16W0NPnyQC8AiBEjf0kYbX%2B5%2BpP1qTqKC8wCxu0r1MW2GEX4a0MgTNvxSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMb1%2BVs8DdJQPp7We9KtwDuL%2BrfEceP6A2jw5hwjITms7TaGCuiP%2B7c3AFXe4QjP6bWkJWMsivkDhrcbA86QN8HArRKSnp4VR%2FZdVovEyu47zz0dgUX6itmmcdreBYGQMk%2BebUR%2FDeApiwbHyry0lMmDW7migGxR%2F8EXl7%2Ffmoa%2FnLKr294O3HO%2FFLMi9sRjJmzNSaA%2F%2FezZgbHib0OKJsVcrY31Q%2BsHfiC1Hu3bKYoCoR%2BBBW5wOIqAEBkMptjEf3NnLY1vgSPxAzPCC0SvwZXp7blF6ZPPWhP1TKy1O9CbH9MCYrDsMcGjp5GrNda0g%2BgmkBT8A5rmJRdp0AJ2HGv02ZyJgHy06%2B6XCaXuNZTLdorlyLZJj82seh8e26CEne55H36BtGMbAJGJrCng4BubLSvdkY1Xa%2FiCp8TWhx0SlTlPhJMf3ff2aT2fj116qWMZq68RIWwAeljtvM6VjcuOFyhY8rL93%2Bg%2Fpb3YTBDsGItJp66VIPWRe87ZMT7K%2FWsUd8tcJ2HCUmR7iHo1BvMMz06HNXhQ7fg1gLu9t7nTf9kFCDj3DODWwtY9FAquszUwx41WOUO65Qp9mXNrVNbtEuzaIJ%2Facn%2Bt%2Bijoq0CMNaTNx9YCcMEyR9uof9cDm9ZjwQD71Iw9UC%2FaMw6fDLxAY6pgHzYpQgKvaQWLRdotHncbatcsvO4yDhDm89Dy0X70CTnM41sa6SpRovBPHSoPJG17wh0smatl%2BIn9%2BTdWyTvhs9HeeG%2Fc9UiqH5QtI4tcMkdJOk3YjA8gT3qURTkPCR549NkqpRGrIHkz7MmLfAnVqlEJKuBP3ofp%2FpI%2BHFUHInWWL%2FtOR1awep%2F19XHlUjqu1RBreeGQ9U7QNPD5Avaw%2B7ccCeSsE4&X-Amz-Signature=a81e7cb641d28ab01b78c0c5b89221ad49d58e65d67bbc84a7c434f87c996245&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665J7NR6WI%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T071631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIHltEsJEvTwgybFmugSlCIGSHOZ7fri6P16W0NPnyQC8AiBEjf0kYbX%2B5%2BpP1qTqKC8wCxu0r1MW2GEX4a0MgTNvxSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMb1%2BVs8DdJQPp7We9KtwDuL%2BrfEceP6A2jw5hwjITms7TaGCuiP%2B7c3AFXe4QjP6bWkJWMsivkDhrcbA86QN8HArRKSnp4VR%2FZdVovEyu47zz0dgUX6itmmcdreBYGQMk%2BebUR%2FDeApiwbHyry0lMmDW7migGxR%2F8EXl7%2Ffmoa%2FnLKr294O3HO%2FFLMi9sRjJmzNSaA%2F%2FezZgbHib0OKJsVcrY31Q%2BsHfiC1Hu3bKYoCoR%2BBBW5wOIqAEBkMptjEf3NnLY1vgSPxAzPCC0SvwZXp7blF6ZPPWhP1TKy1O9CbH9MCYrDsMcGjp5GrNda0g%2BgmkBT8A5rmJRdp0AJ2HGv02ZyJgHy06%2B6XCaXuNZTLdorlyLZJj82seh8e26CEne55H36BtGMbAJGJrCng4BubLSvdkY1Xa%2FiCp8TWhx0SlTlPhJMf3ff2aT2fj116qWMZq68RIWwAeljtvM6VjcuOFyhY8rL93%2Bg%2Fpb3YTBDsGItJp66VIPWRe87ZMT7K%2FWsUd8tcJ2HCUmR7iHo1BvMMz06HNXhQ7fg1gLu9t7nTf9kFCDj3DODWwtY9FAquszUwx41WOUO65Qp9mXNrVNbtEuzaIJ%2Facn%2Bt%2Bijoq0CMNaTNx9YCcMEyR9uof9cDm9ZjwQD71Iw9UC%2FaMw6fDLxAY6pgHzYpQgKvaQWLRdotHncbatcsvO4yDhDm89Dy0X70CTnM41sa6SpRovBPHSoPJG17wh0smatl%2BIn9%2BTdWyTvhs9HeeG%2Fc9UiqH5QtI4tcMkdJOk3YjA8gT3qURTkPCR549NkqpRGrIHkz7MmLfAnVqlEJKuBP3ofp%2FpI%2BHFUHInWWL%2FtOR1awep%2F19XHlUjqu1RBreeGQ9U7QNPD5Avaw%2B7ccCeSsE4&X-Amz-Signature=2aa77d0c711fda81c56677554930a05c13f7635b7c2bec33f8b370acf46ecc8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
