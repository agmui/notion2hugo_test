---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-30T06:25:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5AXRYNX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBMeDNk5dwTgw%2FH%2BDm17r0KIQGPqjGsxzcsfoAtrvyPwIgUwYXI6S1tp6URbhwzcFMTlfsjXUlSb2bj%2FpD0%2BunengqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCP%2FMEpW7HaCH2xQ%2FCrcA84nD%2Bai9lRnVQlDUmVw%2BTAocZOLwX%2FwNvtIQO%2BIeWzv6HTL480zt7yD0W1Rr%2FHAoicOUnhPW9h1nYM3EdZNh%2Ff6x%2FnU8vypiiNv%2Br%2FwppCRfPQFBezsQAhg4wsHCNs0DQxnwp4eC3NLPtN5DWu3SEOxVw1a%2BLg0s4tlcQg72%2BGpmbVUVRgFiXMoQuGTOYIcD9UIA%2BrX3JXQAhpMUhAKtgb%2FI9CzIO%2B%2FLj8F1g7hUpuTeXo8Bv1ET0s4xbTxRANiZxr2XzrX93HrZtapPmEKScPkPsCX79m16TGLiCzF1WZ2TEHtV%2B5bSc8ZRUGqPM%2Bt1nH%2BUtdO5s43UfwgPzmS8NwBYnEn%2BBWLZlmFhINotIpRcnWvx%2BpVMFgNxdaWOHsQpDccgdbmElwHsLD9gC078E10pthzfnMWwQMAqloZrCBun2vKOGJOv1ULuBJKeortxHe68UXVWZQ7tm21%2FucE7XTSBQyp9beQv6CAyV5nfbxL%2FdthbfuoEusJ%2FBKXDNkHaEQoFeKzoPzvcGA6YM%2B1g6ygVpKntrMd4tKg1Lpvop27xXb%2F3w%2F5dtxbEQ8NhsvRb7nxXm3cB%2BwguweU997dnwrc4SpT1pv3XXICXZS0VwH4wvphUqRitDI9ztz7MKmmr8QGOqUBb8qi4KNsEVAabm31gO6lfmHX6qO0VLmtzTdkNdTtvK076J7nvF5SiJT994K8SMCRIj50I7xJWWOW%2B9Zpp3IWUOsh1cLdPZYIodsiFx3iJA3JjEaFgSmTpOe0wrYD9o18%2FtM8lg0X3BVJHhh9gTNcjTlkOQGKM4uOECU%2BIwV7wioxUdvwvO0tbtcL1kvf1ZwN9ZJT1Frj%2FwKApPaBEYtOVqnchP4e&X-Amz-Signature=442cac5d0ed61526c10287fa68bda24824014182ba342f234b3b07bbd6e8983c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5AXRYNX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBMeDNk5dwTgw%2FH%2BDm17r0KIQGPqjGsxzcsfoAtrvyPwIgUwYXI6S1tp6URbhwzcFMTlfsjXUlSb2bj%2FpD0%2BunengqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCP%2FMEpW7HaCH2xQ%2FCrcA84nD%2Bai9lRnVQlDUmVw%2BTAocZOLwX%2FwNvtIQO%2BIeWzv6HTL480zt7yD0W1Rr%2FHAoicOUnhPW9h1nYM3EdZNh%2Ff6x%2FnU8vypiiNv%2Br%2FwppCRfPQFBezsQAhg4wsHCNs0DQxnwp4eC3NLPtN5DWu3SEOxVw1a%2BLg0s4tlcQg72%2BGpmbVUVRgFiXMoQuGTOYIcD9UIA%2BrX3JXQAhpMUhAKtgb%2FI9CzIO%2B%2FLj8F1g7hUpuTeXo8Bv1ET0s4xbTxRANiZxr2XzrX93HrZtapPmEKScPkPsCX79m16TGLiCzF1WZ2TEHtV%2B5bSc8ZRUGqPM%2Bt1nH%2BUtdO5s43UfwgPzmS8NwBYnEn%2BBWLZlmFhINotIpRcnWvx%2BpVMFgNxdaWOHsQpDccgdbmElwHsLD9gC078E10pthzfnMWwQMAqloZrCBun2vKOGJOv1ULuBJKeortxHe68UXVWZQ7tm21%2FucE7XTSBQyp9beQv6CAyV5nfbxL%2FdthbfuoEusJ%2FBKXDNkHaEQoFeKzoPzvcGA6YM%2B1g6ygVpKntrMd4tKg1Lpvop27xXb%2F3w%2F5dtxbEQ8NhsvRb7nxXm3cB%2BwguweU997dnwrc4SpT1pv3XXICXZS0VwH4wvphUqRitDI9ztz7MKmmr8QGOqUBb8qi4KNsEVAabm31gO6lfmHX6qO0VLmtzTdkNdTtvK076J7nvF5SiJT994K8SMCRIj50I7xJWWOW%2B9Zpp3IWUOsh1cLdPZYIodsiFx3iJA3JjEaFgSmTpOe0wrYD9o18%2FtM8lg0X3BVJHhh9gTNcjTlkOQGKM4uOECU%2BIwV7wioxUdvwvO0tbtcL1kvf1ZwN9ZJT1Frj%2FwKApPaBEYtOVqnchP4e&X-Amz-Signature=56730d0e25ae500f2f1b88ab0eb9a4f70a42e356cff0c685e3961dfc3132088d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5AXRYNX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBMeDNk5dwTgw%2FH%2BDm17r0KIQGPqjGsxzcsfoAtrvyPwIgUwYXI6S1tp6URbhwzcFMTlfsjXUlSb2bj%2FpD0%2BunengqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCP%2FMEpW7HaCH2xQ%2FCrcA84nD%2Bai9lRnVQlDUmVw%2BTAocZOLwX%2FwNvtIQO%2BIeWzv6HTL480zt7yD0W1Rr%2FHAoicOUnhPW9h1nYM3EdZNh%2Ff6x%2FnU8vypiiNv%2Br%2FwppCRfPQFBezsQAhg4wsHCNs0DQxnwp4eC3NLPtN5DWu3SEOxVw1a%2BLg0s4tlcQg72%2BGpmbVUVRgFiXMoQuGTOYIcD9UIA%2BrX3JXQAhpMUhAKtgb%2FI9CzIO%2B%2FLj8F1g7hUpuTeXo8Bv1ET0s4xbTxRANiZxr2XzrX93HrZtapPmEKScPkPsCX79m16TGLiCzF1WZ2TEHtV%2B5bSc8ZRUGqPM%2Bt1nH%2BUtdO5s43UfwgPzmS8NwBYnEn%2BBWLZlmFhINotIpRcnWvx%2BpVMFgNxdaWOHsQpDccgdbmElwHsLD9gC078E10pthzfnMWwQMAqloZrCBun2vKOGJOv1ULuBJKeortxHe68UXVWZQ7tm21%2FucE7XTSBQyp9beQv6CAyV5nfbxL%2FdthbfuoEusJ%2FBKXDNkHaEQoFeKzoPzvcGA6YM%2B1g6ygVpKntrMd4tKg1Lpvop27xXb%2F3w%2F5dtxbEQ8NhsvRb7nxXm3cB%2BwguweU997dnwrc4SpT1pv3XXICXZS0VwH4wvphUqRitDI9ztz7MKmmr8QGOqUBb8qi4KNsEVAabm31gO6lfmHX6qO0VLmtzTdkNdTtvK076J7nvF5SiJT994K8SMCRIj50I7xJWWOW%2B9Zpp3IWUOsh1cLdPZYIodsiFx3iJA3JjEaFgSmTpOe0wrYD9o18%2FtM8lg0X3BVJHhh9gTNcjTlkOQGKM4uOECU%2BIwV7wioxUdvwvO0tbtcL1kvf1ZwN9ZJT1Frj%2FwKApPaBEYtOVqnchP4e&X-Amz-Signature=1bdd4ce8fef60011275597e95fc86b28ec70e0e5bf36eb3869e2ac77f871dbac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5AXRYNX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBMeDNk5dwTgw%2FH%2BDm17r0KIQGPqjGsxzcsfoAtrvyPwIgUwYXI6S1tp6URbhwzcFMTlfsjXUlSb2bj%2FpD0%2BunengqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCP%2FMEpW7HaCH2xQ%2FCrcA84nD%2Bai9lRnVQlDUmVw%2BTAocZOLwX%2FwNvtIQO%2BIeWzv6HTL480zt7yD0W1Rr%2FHAoicOUnhPW9h1nYM3EdZNh%2Ff6x%2FnU8vypiiNv%2Br%2FwppCRfPQFBezsQAhg4wsHCNs0DQxnwp4eC3NLPtN5DWu3SEOxVw1a%2BLg0s4tlcQg72%2BGpmbVUVRgFiXMoQuGTOYIcD9UIA%2BrX3JXQAhpMUhAKtgb%2FI9CzIO%2B%2FLj8F1g7hUpuTeXo8Bv1ET0s4xbTxRANiZxr2XzrX93HrZtapPmEKScPkPsCX79m16TGLiCzF1WZ2TEHtV%2B5bSc8ZRUGqPM%2Bt1nH%2BUtdO5s43UfwgPzmS8NwBYnEn%2BBWLZlmFhINotIpRcnWvx%2BpVMFgNxdaWOHsQpDccgdbmElwHsLD9gC078E10pthzfnMWwQMAqloZrCBun2vKOGJOv1ULuBJKeortxHe68UXVWZQ7tm21%2FucE7XTSBQyp9beQv6CAyV5nfbxL%2FdthbfuoEusJ%2FBKXDNkHaEQoFeKzoPzvcGA6YM%2B1g6ygVpKntrMd4tKg1Lpvop27xXb%2F3w%2F5dtxbEQ8NhsvRb7nxXm3cB%2BwguweU997dnwrc4SpT1pv3XXICXZS0VwH4wvphUqRitDI9ztz7MKmmr8QGOqUBb8qi4KNsEVAabm31gO6lfmHX6qO0VLmtzTdkNdTtvK076J7nvF5SiJT994K8SMCRIj50I7xJWWOW%2B9Zpp3IWUOsh1cLdPZYIodsiFx3iJA3JjEaFgSmTpOe0wrYD9o18%2FtM8lg0X3BVJHhh9gTNcjTlkOQGKM4uOECU%2BIwV7wioxUdvwvO0tbtcL1kvf1ZwN9ZJT1Frj%2FwKApPaBEYtOVqnchP4e&X-Amz-Signature=b57528059b9c1f9b9949652f28ddd49806511ef2f4d25f1bf3ba22736f13d3ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5AXRYNX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBMeDNk5dwTgw%2FH%2BDm17r0KIQGPqjGsxzcsfoAtrvyPwIgUwYXI6S1tp6URbhwzcFMTlfsjXUlSb2bj%2FpD0%2BunengqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCP%2FMEpW7HaCH2xQ%2FCrcA84nD%2Bai9lRnVQlDUmVw%2BTAocZOLwX%2FwNvtIQO%2BIeWzv6HTL480zt7yD0W1Rr%2FHAoicOUnhPW9h1nYM3EdZNh%2Ff6x%2FnU8vypiiNv%2Br%2FwppCRfPQFBezsQAhg4wsHCNs0DQxnwp4eC3NLPtN5DWu3SEOxVw1a%2BLg0s4tlcQg72%2BGpmbVUVRgFiXMoQuGTOYIcD9UIA%2BrX3JXQAhpMUhAKtgb%2FI9CzIO%2B%2FLj8F1g7hUpuTeXo8Bv1ET0s4xbTxRANiZxr2XzrX93HrZtapPmEKScPkPsCX79m16TGLiCzF1WZ2TEHtV%2B5bSc8ZRUGqPM%2Bt1nH%2BUtdO5s43UfwgPzmS8NwBYnEn%2BBWLZlmFhINotIpRcnWvx%2BpVMFgNxdaWOHsQpDccgdbmElwHsLD9gC078E10pthzfnMWwQMAqloZrCBun2vKOGJOv1ULuBJKeortxHe68UXVWZQ7tm21%2FucE7XTSBQyp9beQv6CAyV5nfbxL%2FdthbfuoEusJ%2FBKXDNkHaEQoFeKzoPzvcGA6YM%2B1g6ygVpKntrMd4tKg1Lpvop27xXb%2F3w%2F5dtxbEQ8NhsvRb7nxXm3cB%2BwguweU997dnwrc4SpT1pv3XXICXZS0VwH4wvphUqRitDI9ztz7MKmmr8QGOqUBb8qi4KNsEVAabm31gO6lfmHX6qO0VLmtzTdkNdTtvK076J7nvF5SiJT994K8SMCRIj50I7xJWWOW%2B9Zpp3IWUOsh1cLdPZYIodsiFx3iJA3JjEaFgSmTpOe0wrYD9o18%2FtM8lg0X3BVJHhh9gTNcjTlkOQGKM4uOECU%2BIwV7wioxUdvwvO0tbtcL1kvf1ZwN9ZJT1Frj%2FwKApPaBEYtOVqnchP4e&X-Amz-Signature=76cd958f8a3182b406eadf98099b84a3cc11431483886903edeb3eec31f0f9bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5AXRYNX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBMeDNk5dwTgw%2FH%2BDm17r0KIQGPqjGsxzcsfoAtrvyPwIgUwYXI6S1tp6URbhwzcFMTlfsjXUlSb2bj%2FpD0%2BunengqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCP%2FMEpW7HaCH2xQ%2FCrcA84nD%2Bai9lRnVQlDUmVw%2BTAocZOLwX%2FwNvtIQO%2BIeWzv6HTL480zt7yD0W1Rr%2FHAoicOUnhPW9h1nYM3EdZNh%2Ff6x%2FnU8vypiiNv%2Br%2FwppCRfPQFBezsQAhg4wsHCNs0DQxnwp4eC3NLPtN5DWu3SEOxVw1a%2BLg0s4tlcQg72%2BGpmbVUVRgFiXMoQuGTOYIcD9UIA%2BrX3JXQAhpMUhAKtgb%2FI9CzIO%2B%2FLj8F1g7hUpuTeXo8Bv1ET0s4xbTxRANiZxr2XzrX93HrZtapPmEKScPkPsCX79m16TGLiCzF1WZ2TEHtV%2B5bSc8ZRUGqPM%2Bt1nH%2BUtdO5s43UfwgPzmS8NwBYnEn%2BBWLZlmFhINotIpRcnWvx%2BpVMFgNxdaWOHsQpDccgdbmElwHsLD9gC078E10pthzfnMWwQMAqloZrCBun2vKOGJOv1ULuBJKeortxHe68UXVWZQ7tm21%2FucE7XTSBQyp9beQv6CAyV5nfbxL%2FdthbfuoEusJ%2FBKXDNkHaEQoFeKzoPzvcGA6YM%2B1g6ygVpKntrMd4tKg1Lpvop27xXb%2F3w%2F5dtxbEQ8NhsvRb7nxXm3cB%2BwguweU997dnwrc4SpT1pv3XXICXZS0VwH4wvphUqRitDI9ztz7MKmmr8QGOqUBb8qi4KNsEVAabm31gO6lfmHX6qO0VLmtzTdkNdTtvK076J7nvF5SiJT994K8SMCRIj50I7xJWWOW%2B9Zpp3IWUOsh1cLdPZYIodsiFx3iJA3JjEaFgSmTpOe0wrYD9o18%2FtM8lg0X3BVJHhh9gTNcjTlkOQGKM4uOECU%2BIwV7wioxUdvwvO0tbtcL1kvf1ZwN9ZJT1Frj%2FwKApPaBEYtOVqnchP4e&X-Amz-Signature=90d4728c3add465f85d81cc93b2e58ed81b6c6792dfad6b9c649184fae23b739&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5AXRYNX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBMeDNk5dwTgw%2FH%2BDm17r0KIQGPqjGsxzcsfoAtrvyPwIgUwYXI6S1tp6URbhwzcFMTlfsjXUlSb2bj%2FpD0%2BunengqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCP%2FMEpW7HaCH2xQ%2FCrcA84nD%2Bai9lRnVQlDUmVw%2BTAocZOLwX%2FwNvtIQO%2BIeWzv6HTL480zt7yD0W1Rr%2FHAoicOUnhPW9h1nYM3EdZNh%2Ff6x%2FnU8vypiiNv%2Br%2FwppCRfPQFBezsQAhg4wsHCNs0DQxnwp4eC3NLPtN5DWu3SEOxVw1a%2BLg0s4tlcQg72%2BGpmbVUVRgFiXMoQuGTOYIcD9UIA%2BrX3JXQAhpMUhAKtgb%2FI9CzIO%2B%2FLj8F1g7hUpuTeXo8Bv1ET0s4xbTxRANiZxr2XzrX93HrZtapPmEKScPkPsCX79m16TGLiCzF1WZ2TEHtV%2B5bSc8ZRUGqPM%2Bt1nH%2BUtdO5s43UfwgPzmS8NwBYnEn%2BBWLZlmFhINotIpRcnWvx%2BpVMFgNxdaWOHsQpDccgdbmElwHsLD9gC078E10pthzfnMWwQMAqloZrCBun2vKOGJOv1ULuBJKeortxHe68UXVWZQ7tm21%2FucE7XTSBQyp9beQv6CAyV5nfbxL%2FdthbfuoEusJ%2FBKXDNkHaEQoFeKzoPzvcGA6YM%2B1g6ygVpKntrMd4tKg1Lpvop27xXb%2F3w%2F5dtxbEQ8NhsvRb7nxXm3cB%2BwguweU997dnwrc4SpT1pv3XXICXZS0VwH4wvphUqRitDI9ztz7MKmmr8QGOqUBb8qi4KNsEVAabm31gO6lfmHX6qO0VLmtzTdkNdTtvK076J7nvF5SiJT994K8SMCRIj50I7xJWWOW%2B9Zpp3IWUOsh1cLdPZYIodsiFx3iJA3JjEaFgSmTpOe0wrYD9o18%2FtM8lg0X3BVJHhh9gTNcjTlkOQGKM4uOECU%2BIwV7wioxUdvwvO0tbtcL1kvf1ZwN9ZJT1Frj%2FwKApPaBEYtOVqnchP4e&X-Amz-Signature=b8517024e84e520f32b2abcfc2ad0d4bcd7a25dea89676d3045501637870c465&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5AXRYNX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBMeDNk5dwTgw%2FH%2BDm17r0KIQGPqjGsxzcsfoAtrvyPwIgUwYXI6S1tp6URbhwzcFMTlfsjXUlSb2bj%2FpD0%2BunengqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCP%2FMEpW7HaCH2xQ%2FCrcA84nD%2Bai9lRnVQlDUmVw%2BTAocZOLwX%2FwNvtIQO%2BIeWzv6HTL480zt7yD0W1Rr%2FHAoicOUnhPW9h1nYM3EdZNh%2Ff6x%2FnU8vypiiNv%2Br%2FwppCRfPQFBezsQAhg4wsHCNs0DQxnwp4eC3NLPtN5DWu3SEOxVw1a%2BLg0s4tlcQg72%2BGpmbVUVRgFiXMoQuGTOYIcD9UIA%2BrX3JXQAhpMUhAKtgb%2FI9CzIO%2B%2FLj8F1g7hUpuTeXo8Bv1ET0s4xbTxRANiZxr2XzrX93HrZtapPmEKScPkPsCX79m16TGLiCzF1WZ2TEHtV%2B5bSc8ZRUGqPM%2Bt1nH%2BUtdO5s43UfwgPzmS8NwBYnEn%2BBWLZlmFhINotIpRcnWvx%2BpVMFgNxdaWOHsQpDccgdbmElwHsLD9gC078E10pthzfnMWwQMAqloZrCBun2vKOGJOv1ULuBJKeortxHe68UXVWZQ7tm21%2FucE7XTSBQyp9beQv6CAyV5nfbxL%2FdthbfuoEusJ%2FBKXDNkHaEQoFeKzoPzvcGA6YM%2B1g6ygVpKntrMd4tKg1Lpvop27xXb%2F3w%2F5dtxbEQ8NhsvRb7nxXm3cB%2BwguweU997dnwrc4SpT1pv3XXICXZS0VwH4wvphUqRitDI9ztz7MKmmr8QGOqUBb8qi4KNsEVAabm31gO6lfmHX6qO0VLmtzTdkNdTtvK076J7nvF5SiJT994K8SMCRIj50I7xJWWOW%2B9Zpp3IWUOsh1cLdPZYIodsiFx3iJA3JjEaFgSmTpOe0wrYD9o18%2FtM8lg0X3BVJHhh9gTNcjTlkOQGKM4uOECU%2BIwV7wioxUdvwvO0tbtcL1kvf1ZwN9ZJT1Frj%2FwKApPaBEYtOVqnchP4e&X-Amz-Signature=5491e3d482bf811d0e0dc0fad3d281c666af1d0674967f33f8e427246bf664e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5AXRYNX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBMeDNk5dwTgw%2FH%2BDm17r0KIQGPqjGsxzcsfoAtrvyPwIgUwYXI6S1tp6URbhwzcFMTlfsjXUlSb2bj%2FpD0%2BunengqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCP%2FMEpW7HaCH2xQ%2FCrcA84nD%2Bai9lRnVQlDUmVw%2BTAocZOLwX%2FwNvtIQO%2BIeWzv6HTL480zt7yD0W1Rr%2FHAoicOUnhPW9h1nYM3EdZNh%2Ff6x%2FnU8vypiiNv%2Br%2FwppCRfPQFBezsQAhg4wsHCNs0DQxnwp4eC3NLPtN5DWu3SEOxVw1a%2BLg0s4tlcQg72%2BGpmbVUVRgFiXMoQuGTOYIcD9UIA%2BrX3JXQAhpMUhAKtgb%2FI9CzIO%2B%2FLj8F1g7hUpuTeXo8Bv1ET0s4xbTxRANiZxr2XzrX93HrZtapPmEKScPkPsCX79m16TGLiCzF1WZ2TEHtV%2B5bSc8ZRUGqPM%2Bt1nH%2BUtdO5s43UfwgPzmS8NwBYnEn%2BBWLZlmFhINotIpRcnWvx%2BpVMFgNxdaWOHsQpDccgdbmElwHsLD9gC078E10pthzfnMWwQMAqloZrCBun2vKOGJOv1ULuBJKeortxHe68UXVWZQ7tm21%2FucE7XTSBQyp9beQv6CAyV5nfbxL%2FdthbfuoEusJ%2FBKXDNkHaEQoFeKzoPzvcGA6YM%2B1g6ygVpKntrMd4tKg1Lpvop27xXb%2F3w%2F5dtxbEQ8NhsvRb7nxXm3cB%2BwguweU997dnwrc4SpT1pv3XXICXZS0VwH4wvphUqRitDI9ztz7MKmmr8QGOqUBb8qi4KNsEVAabm31gO6lfmHX6qO0VLmtzTdkNdTtvK076J7nvF5SiJT994K8SMCRIj50I7xJWWOW%2B9Zpp3IWUOsh1cLdPZYIodsiFx3iJA3JjEaFgSmTpOe0wrYD9o18%2FtM8lg0X3BVJHhh9gTNcjTlkOQGKM4uOECU%2BIwV7wioxUdvwvO0tbtcL1kvf1ZwN9ZJT1Frj%2FwKApPaBEYtOVqnchP4e&X-Amz-Signature=5f1ea4574edcc9553aa92d0a072c6db2600356d67a14dc6961320c7f0f745c97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5AXRYNX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBMeDNk5dwTgw%2FH%2BDm17r0KIQGPqjGsxzcsfoAtrvyPwIgUwYXI6S1tp6URbhwzcFMTlfsjXUlSb2bj%2FpD0%2BunengqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCP%2FMEpW7HaCH2xQ%2FCrcA84nD%2Bai9lRnVQlDUmVw%2BTAocZOLwX%2FwNvtIQO%2BIeWzv6HTL480zt7yD0W1Rr%2FHAoicOUnhPW9h1nYM3EdZNh%2Ff6x%2FnU8vypiiNv%2Br%2FwppCRfPQFBezsQAhg4wsHCNs0DQxnwp4eC3NLPtN5DWu3SEOxVw1a%2BLg0s4tlcQg72%2BGpmbVUVRgFiXMoQuGTOYIcD9UIA%2BrX3JXQAhpMUhAKtgb%2FI9CzIO%2B%2FLj8F1g7hUpuTeXo8Bv1ET0s4xbTxRANiZxr2XzrX93HrZtapPmEKScPkPsCX79m16TGLiCzF1WZ2TEHtV%2B5bSc8ZRUGqPM%2Bt1nH%2BUtdO5s43UfwgPzmS8NwBYnEn%2BBWLZlmFhINotIpRcnWvx%2BpVMFgNxdaWOHsQpDccgdbmElwHsLD9gC078E10pthzfnMWwQMAqloZrCBun2vKOGJOv1ULuBJKeortxHe68UXVWZQ7tm21%2FucE7XTSBQyp9beQv6CAyV5nfbxL%2FdthbfuoEusJ%2FBKXDNkHaEQoFeKzoPzvcGA6YM%2B1g6ygVpKntrMd4tKg1Lpvop27xXb%2F3w%2F5dtxbEQ8NhsvRb7nxXm3cB%2BwguweU997dnwrc4SpT1pv3XXICXZS0VwH4wvphUqRitDI9ztz7MKmmr8QGOqUBb8qi4KNsEVAabm31gO6lfmHX6qO0VLmtzTdkNdTtvK076J7nvF5SiJT994K8SMCRIj50I7xJWWOW%2B9Zpp3IWUOsh1cLdPZYIodsiFx3iJA3JjEaFgSmTpOe0wrYD9o18%2FtM8lg0X3BVJHhh9gTNcjTlkOQGKM4uOECU%2BIwV7wioxUdvwvO0tbtcL1kvf1ZwN9ZJT1Frj%2FwKApPaBEYtOVqnchP4e&X-Amz-Signature=dd47822bed06d2ff9f21d7ef9137e3f6f362d7a01fed532872d6aed9d62a9357&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5AXRYNX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBMeDNk5dwTgw%2FH%2BDm17r0KIQGPqjGsxzcsfoAtrvyPwIgUwYXI6S1tp6URbhwzcFMTlfsjXUlSb2bj%2FpD0%2BunengqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCP%2FMEpW7HaCH2xQ%2FCrcA84nD%2Bai9lRnVQlDUmVw%2BTAocZOLwX%2FwNvtIQO%2BIeWzv6HTL480zt7yD0W1Rr%2FHAoicOUnhPW9h1nYM3EdZNh%2Ff6x%2FnU8vypiiNv%2Br%2FwppCRfPQFBezsQAhg4wsHCNs0DQxnwp4eC3NLPtN5DWu3SEOxVw1a%2BLg0s4tlcQg72%2BGpmbVUVRgFiXMoQuGTOYIcD9UIA%2BrX3JXQAhpMUhAKtgb%2FI9CzIO%2B%2FLj8F1g7hUpuTeXo8Bv1ET0s4xbTxRANiZxr2XzrX93HrZtapPmEKScPkPsCX79m16TGLiCzF1WZ2TEHtV%2B5bSc8ZRUGqPM%2Bt1nH%2BUtdO5s43UfwgPzmS8NwBYnEn%2BBWLZlmFhINotIpRcnWvx%2BpVMFgNxdaWOHsQpDccgdbmElwHsLD9gC078E10pthzfnMWwQMAqloZrCBun2vKOGJOv1ULuBJKeortxHe68UXVWZQ7tm21%2FucE7XTSBQyp9beQv6CAyV5nfbxL%2FdthbfuoEusJ%2FBKXDNkHaEQoFeKzoPzvcGA6YM%2B1g6ygVpKntrMd4tKg1Lpvop27xXb%2F3w%2F5dtxbEQ8NhsvRb7nxXm3cB%2BwguweU997dnwrc4SpT1pv3XXICXZS0VwH4wvphUqRitDI9ztz7MKmmr8QGOqUBb8qi4KNsEVAabm31gO6lfmHX6qO0VLmtzTdkNdTtvK076J7nvF5SiJT994K8SMCRIj50I7xJWWOW%2B9Zpp3IWUOsh1cLdPZYIodsiFx3iJA3JjEaFgSmTpOe0wrYD9o18%2FtM8lg0X3BVJHhh9gTNcjTlkOQGKM4uOECU%2BIwV7wioxUdvwvO0tbtcL1kvf1ZwN9ZJT1Frj%2FwKApPaBEYtOVqnchP4e&X-Amz-Signature=d7e3f2d9aebce03f1a384eafccdb39a9e762fe29a2b70369df7290c9d924929d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5AXRYNX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBMeDNk5dwTgw%2FH%2BDm17r0KIQGPqjGsxzcsfoAtrvyPwIgUwYXI6S1tp6URbhwzcFMTlfsjXUlSb2bj%2FpD0%2BunengqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCP%2FMEpW7HaCH2xQ%2FCrcA84nD%2Bai9lRnVQlDUmVw%2BTAocZOLwX%2FwNvtIQO%2BIeWzv6HTL480zt7yD0W1Rr%2FHAoicOUnhPW9h1nYM3EdZNh%2Ff6x%2FnU8vypiiNv%2Br%2FwppCRfPQFBezsQAhg4wsHCNs0DQxnwp4eC3NLPtN5DWu3SEOxVw1a%2BLg0s4tlcQg72%2BGpmbVUVRgFiXMoQuGTOYIcD9UIA%2BrX3JXQAhpMUhAKtgb%2FI9CzIO%2B%2FLj8F1g7hUpuTeXo8Bv1ET0s4xbTxRANiZxr2XzrX93HrZtapPmEKScPkPsCX79m16TGLiCzF1WZ2TEHtV%2B5bSc8ZRUGqPM%2Bt1nH%2BUtdO5s43UfwgPzmS8NwBYnEn%2BBWLZlmFhINotIpRcnWvx%2BpVMFgNxdaWOHsQpDccgdbmElwHsLD9gC078E10pthzfnMWwQMAqloZrCBun2vKOGJOv1ULuBJKeortxHe68UXVWZQ7tm21%2FucE7XTSBQyp9beQv6CAyV5nfbxL%2FdthbfuoEusJ%2FBKXDNkHaEQoFeKzoPzvcGA6YM%2B1g6ygVpKntrMd4tKg1Lpvop27xXb%2F3w%2F5dtxbEQ8NhsvRb7nxXm3cB%2BwguweU997dnwrc4SpT1pv3XXICXZS0VwH4wvphUqRitDI9ztz7MKmmr8QGOqUBb8qi4KNsEVAabm31gO6lfmHX6qO0VLmtzTdkNdTtvK076J7nvF5SiJT994K8SMCRIj50I7xJWWOW%2B9Zpp3IWUOsh1cLdPZYIodsiFx3iJA3JjEaFgSmTpOe0wrYD9o18%2FtM8lg0X3BVJHhh9gTNcjTlkOQGKM4uOECU%2BIwV7wioxUdvwvO0tbtcL1kvf1ZwN9ZJT1Frj%2FwKApPaBEYtOVqnchP4e&X-Amz-Signature=1b5ae340d06aeb56f1e18a04d73f1719f345a0e886511d04e89e91380b221fd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5AXRYNX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBMeDNk5dwTgw%2FH%2BDm17r0KIQGPqjGsxzcsfoAtrvyPwIgUwYXI6S1tp6URbhwzcFMTlfsjXUlSb2bj%2FpD0%2BunengqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCP%2FMEpW7HaCH2xQ%2FCrcA84nD%2Bai9lRnVQlDUmVw%2BTAocZOLwX%2FwNvtIQO%2BIeWzv6HTL480zt7yD0W1Rr%2FHAoicOUnhPW9h1nYM3EdZNh%2Ff6x%2FnU8vypiiNv%2Br%2FwppCRfPQFBezsQAhg4wsHCNs0DQxnwp4eC3NLPtN5DWu3SEOxVw1a%2BLg0s4tlcQg72%2BGpmbVUVRgFiXMoQuGTOYIcD9UIA%2BrX3JXQAhpMUhAKtgb%2FI9CzIO%2B%2FLj8F1g7hUpuTeXo8Bv1ET0s4xbTxRANiZxr2XzrX93HrZtapPmEKScPkPsCX79m16TGLiCzF1WZ2TEHtV%2B5bSc8ZRUGqPM%2Bt1nH%2BUtdO5s43UfwgPzmS8NwBYnEn%2BBWLZlmFhINotIpRcnWvx%2BpVMFgNxdaWOHsQpDccgdbmElwHsLD9gC078E10pthzfnMWwQMAqloZrCBun2vKOGJOv1ULuBJKeortxHe68UXVWZQ7tm21%2FucE7XTSBQyp9beQv6CAyV5nfbxL%2FdthbfuoEusJ%2FBKXDNkHaEQoFeKzoPzvcGA6YM%2B1g6ygVpKntrMd4tKg1Lpvop27xXb%2F3w%2F5dtxbEQ8NhsvRb7nxXm3cB%2BwguweU997dnwrc4SpT1pv3XXICXZS0VwH4wvphUqRitDI9ztz7MKmmr8QGOqUBb8qi4KNsEVAabm31gO6lfmHX6qO0VLmtzTdkNdTtvK076J7nvF5SiJT994K8SMCRIj50I7xJWWOW%2B9Zpp3IWUOsh1cLdPZYIodsiFx3iJA3JjEaFgSmTpOe0wrYD9o18%2FtM8lg0X3BVJHhh9gTNcjTlkOQGKM4uOECU%2BIwV7wioxUdvwvO0tbtcL1kvf1ZwN9ZJT1Frj%2FwKApPaBEYtOVqnchP4e&X-Amz-Signature=d1c1d0f36a161468188a3f51136d99a82cf0d88b88950116e9a8c02883aff24b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5AXRYNX%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T210922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBMeDNk5dwTgw%2FH%2BDm17r0KIQGPqjGsxzcsfoAtrvyPwIgUwYXI6S1tp6URbhwzcFMTlfsjXUlSb2bj%2FpD0%2BunengqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCP%2FMEpW7HaCH2xQ%2FCrcA84nD%2Bai9lRnVQlDUmVw%2BTAocZOLwX%2FwNvtIQO%2BIeWzv6HTL480zt7yD0W1Rr%2FHAoicOUnhPW9h1nYM3EdZNh%2Ff6x%2FnU8vypiiNv%2Br%2FwppCRfPQFBezsQAhg4wsHCNs0DQxnwp4eC3NLPtN5DWu3SEOxVw1a%2BLg0s4tlcQg72%2BGpmbVUVRgFiXMoQuGTOYIcD9UIA%2BrX3JXQAhpMUhAKtgb%2FI9CzIO%2B%2FLj8F1g7hUpuTeXo8Bv1ET0s4xbTxRANiZxr2XzrX93HrZtapPmEKScPkPsCX79m16TGLiCzF1WZ2TEHtV%2B5bSc8ZRUGqPM%2Bt1nH%2BUtdO5s43UfwgPzmS8NwBYnEn%2BBWLZlmFhINotIpRcnWvx%2BpVMFgNxdaWOHsQpDccgdbmElwHsLD9gC078E10pthzfnMWwQMAqloZrCBun2vKOGJOv1ULuBJKeortxHe68UXVWZQ7tm21%2FucE7XTSBQyp9beQv6CAyV5nfbxL%2FdthbfuoEusJ%2FBKXDNkHaEQoFeKzoPzvcGA6YM%2B1g6ygVpKntrMd4tKg1Lpvop27xXb%2F3w%2F5dtxbEQ8NhsvRb7nxXm3cB%2BwguweU997dnwrc4SpT1pv3XXICXZS0VwH4wvphUqRitDI9ztz7MKmmr8QGOqUBb8qi4KNsEVAabm31gO6lfmHX6qO0VLmtzTdkNdTtvK076J7nvF5SiJT994K8SMCRIj50I7xJWWOW%2B9Zpp3IWUOsh1cLdPZYIodsiFx3iJA3JjEaFgSmTpOe0wrYD9o18%2FtM8lg0X3BVJHhh9gTNcjTlkOQGKM4uOECU%2BIwV7wioxUdvwvO0tbtcL1kvf1ZwN9ZJT1Frj%2FwKApPaBEYtOVqnchP4e&X-Amz-Signature=8173af6f97f33c54f688905599be8c7a4c8e8907b725a7d39718cfd840ae858b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
