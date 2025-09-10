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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TQXQGT3%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGLaSPYkG%2BYbcUowYJE0ZQCd9k6Lx02NF2oUrv05MCffAiATE2x%2FZebn5XAQuVJVHm%2FbXFMa1XhRr7SC4Aodq4SNgSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMefyKIz19IPpUaiMGKtwDoDcIOyUnmK%2BIIiupiUrCt8cGWHg%2BCrxgfzTeqpeITSIMuC0t9BFtVMWKhGk%2B%2B93xT8PkWD16e%2BaWpXkb6vaSGSDze9lVzbVs%2FQjyKpvQD38SL%2Ft1VJ5pf5bWuvu3%2F0qUfDNIGCmraQ5fsaZgbEisIfg8rrJQ5Gt%2F6MQ24v76a4YoH2MKXgjyHeOs6flyviEULmhrbJ11MyTbodZSCjrKAFHNwVI7qOHujZcy9Ip%2BsroTbc4BvMMfIL1nn%2B7TUJuVedy0m9dJh7U1Yyi5Qh%2FM6KxDUA1T2%2Fe2jzigj7hVuNTzwzxLowSVwrNbsAKfxLxW6ZYMEF3MXhjJSZhs8R1gXFdwRRKr6MPYZ7deh9PcE55G%2F7KptXbSY7e2iJFSCnZjgEoONRKXf%2FJbPTNgnOdUJjs8eoIkEbBnMrFrit47ADgazB0DEmCF0Ungu1AfuMW8hJrcjyCYh8kwZC0ysap%2Fcw%2BZ1xE8v6ZrEZUyVCi812HZILZBjvYjXw9gzhQ6VoYw4sy2g5QKCOb3cdQbvIusMrApX%2B2mkoWskPWknfOfyVH9DWofmYcGm%2BSU3l19K9zPFFMk9J1wM7H1F0wu%2Fo7DfBPmp9AT%2B9Xct5V5fBsg1bv0VXhIrtkW6Mrt4nIwoYyDxgY6pgGh4ru9zAzTasymS0XtnKYwrWdWIK%2B14afkdKRrrTlGyYjFbMWON2jHtHEJz2oC9KuMhrQP4pql6VspqCFB1%2FYZmgPJ%2BwM%2Bd67VGniqzXEn6gXQ2NkI61q3JVd3uaenk9G09a5lKTU4NUbkNvAWtmuq6frNf7TIssjhZhkacrr9tuc0IH0TrKoU5gB9YNq19vccAQQgYsjO9cVbkJStNZoqlbTgSuYz&X-Amz-Signature=1227144b51535abe4599164c5abb630fdf9953a9124f3c316e36ee9b8bc2616f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TQXQGT3%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGLaSPYkG%2BYbcUowYJE0ZQCd9k6Lx02NF2oUrv05MCffAiATE2x%2FZebn5XAQuVJVHm%2FbXFMa1XhRr7SC4Aodq4SNgSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMefyKIz19IPpUaiMGKtwDoDcIOyUnmK%2BIIiupiUrCt8cGWHg%2BCrxgfzTeqpeITSIMuC0t9BFtVMWKhGk%2B%2B93xT8PkWD16e%2BaWpXkb6vaSGSDze9lVzbVs%2FQjyKpvQD38SL%2Ft1VJ5pf5bWuvu3%2F0qUfDNIGCmraQ5fsaZgbEisIfg8rrJQ5Gt%2F6MQ24v76a4YoH2MKXgjyHeOs6flyviEULmhrbJ11MyTbodZSCjrKAFHNwVI7qOHujZcy9Ip%2BsroTbc4BvMMfIL1nn%2B7TUJuVedy0m9dJh7U1Yyi5Qh%2FM6KxDUA1T2%2Fe2jzigj7hVuNTzwzxLowSVwrNbsAKfxLxW6ZYMEF3MXhjJSZhs8R1gXFdwRRKr6MPYZ7deh9PcE55G%2F7KptXbSY7e2iJFSCnZjgEoONRKXf%2FJbPTNgnOdUJjs8eoIkEbBnMrFrit47ADgazB0DEmCF0Ungu1AfuMW8hJrcjyCYh8kwZC0ysap%2Fcw%2BZ1xE8v6ZrEZUyVCi812HZILZBjvYjXw9gzhQ6VoYw4sy2g5QKCOb3cdQbvIusMrApX%2B2mkoWskPWknfOfyVH9DWofmYcGm%2BSU3l19K9zPFFMk9J1wM7H1F0wu%2Fo7DfBPmp9AT%2B9Xct5V5fBsg1bv0VXhIrtkW6Mrt4nIwoYyDxgY6pgGh4ru9zAzTasymS0XtnKYwrWdWIK%2B14afkdKRrrTlGyYjFbMWON2jHtHEJz2oC9KuMhrQP4pql6VspqCFB1%2FYZmgPJ%2BwM%2Bd67VGniqzXEn6gXQ2NkI61q3JVd3uaenk9G09a5lKTU4NUbkNvAWtmuq6frNf7TIssjhZhkacrr9tuc0IH0TrKoU5gB9YNq19vccAQQgYsjO9cVbkJStNZoqlbTgSuYz&X-Amz-Signature=5a64fb10006bc68842b9f683e8d119caecf800ab771d6797c84b60e409d47e23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TQXQGT3%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGLaSPYkG%2BYbcUowYJE0ZQCd9k6Lx02NF2oUrv05MCffAiATE2x%2FZebn5XAQuVJVHm%2FbXFMa1XhRr7SC4Aodq4SNgSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMefyKIz19IPpUaiMGKtwDoDcIOyUnmK%2BIIiupiUrCt8cGWHg%2BCrxgfzTeqpeITSIMuC0t9BFtVMWKhGk%2B%2B93xT8PkWD16e%2BaWpXkb6vaSGSDze9lVzbVs%2FQjyKpvQD38SL%2Ft1VJ5pf5bWuvu3%2F0qUfDNIGCmraQ5fsaZgbEisIfg8rrJQ5Gt%2F6MQ24v76a4YoH2MKXgjyHeOs6flyviEULmhrbJ11MyTbodZSCjrKAFHNwVI7qOHujZcy9Ip%2BsroTbc4BvMMfIL1nn%2B7TUJuVedy0m9dJh7U1Yyi5Qh%2FM6KxDUA1T2%2Fe2jzigj7hVuNTzwzxLowSVwrNbsAKfxLxW6ZYMEF3MXhjJSZhs8R1gXFdwRRKr6MPYZ7deh9PcE55G%2F7KptXbSY7e2iJFSCnZjgEoONRKXf%2FJbPTNgnOdUJjs8eoIkEbBnMrFrit47ADgazB0DEmCF0Ungu1AfuMW8hJrcjyCYh8kwZC0ysap%2Fcw%2BZ1xE8v6ZrEZUyVCi812HZILZBjvYjXw9gzhQ6VoYw4sy2g5QKCOb3cdQbvIusMrApX%2B2mkoWskPWknfOfyVH9DWofmYcGm%2BSU3l19K9zPFFMk9J1wM7H1F0wu%2Fo7DfBPmp9AT%2B9Xct5V5fBsg1bv0VXhIrtkW6Mrt4nIwoYyDxgY6pgGh4ru9zAzTasymS0XtnKYwrWdWIK%2B14afkdKRrrTlGyYjFbMWON2jHtHEJz2oC9KuMhrQP4pql6VspqCFB1%2FYZmgPJ%2BwM%2Bd67VGniqzXEn6gXQ2NkI61q3JVd3uaenk9G09a5lKTU4NUbkNvAWtmuq6frNf7TIssjhZhkacrr9tuc0IH0TrKoU5gB9YNq19vccAQQgYsjO9cVbkJStNZoqlbTgSuYz&X-Amz-Signature=c98acfa3e5b6578f3091d5237d4c4458a5465487d001f5e13decafaf26e6b818&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TQXQGT3%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGLaSPYkG%2BYbcUowYJE0ZQCd9k6Lx02NF2oUrv05MCffAiATE2x%2FZebn5XAQuVJVHm%2FbXFMa1XhRr7SC4Aodq4SNgSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMefyKIz19IPpUaiMGKtwDoDcIOyUnmK%2BIIiupiUrCt8cGWHg%2BCrxgfzTeqpeITSIMuC0t9BFtVMWKhGk%2B%2B93xT8PkWD16e%2BaWpXkb6vaSGSDze9lVzbVs%2FQjyKpvQD38SL%2Ft1VJ5pf5bWuvu3%2F0qUfDNIGCmraQ5fsaZgbEisIfg8rrJQ5Gt%2F6MQ24v76a4YoH2MKXgjyHeOs6flyviEULmhrbJ11MyTbodZSCjrKAFHNwVI7qOHujZcy9Ip%2BsroTbc4BvMMfIL1nn%2B7TUJuVedy0m9dJh7U1Yyi5Qh%2FM6KxDUA1T2%2Fe2jzigj7hVuNTzwzxLowSVwrNbsAKfxLxW6ZYMEF3MXhjJSZhs8R1gXFdwRRKr6MPYZ7deh9PcE55G%2F7KptXbSY7e2iJFSCnZjgEoONRKXf%2FJbPTNgnOdUJjs8eoIkEbBnMrFrit47ADgazB0DEmCF0Ungu1AfuMW8hJrcjyCYh8kwZC0ysap%2Fcw%2BZ1xE8v6ZrEZUyVCi812HZILZBjvYjXw9gzhQ6VoYw4sy2g5QKCOb3cdQbvIusMrApX%2B2mkoWskPWknfOfyVH9DWofmYcGm%2BSU3l19K9zPFFMk9J1wM7H1F0wu%2Fo7DfBPmp9AT%2B9Xct5V5fBsg1bv0VXhIrtkW6Mrt4nIwoYyDxgY6pgGh4ru9zAzTasymS0XtnKYwrWdWIK%2B14afkdKRrrTlGyYjFbMWON2jHtHEJz2oC9KuMhrQP4pql6VspqCFB1%2FYZmgPJ%2BwM%2Bd67VGniqzXEn6gXQ2NkI61q3JVd3uaenk9G09a5lKTU4NUbkNvAWtmuq6frNf7TIssjhZhkacrr9tuc0IH0TrKoU5gB9YNq19vccAQQgYsjO9cVbkJStNZoqlbTgSuYz&X-Amz-Signature=3d7f4f8269cdc8c09d22633e7bfd840b802b1fd243b6cbc63fbfcccf27753fb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TQXQGT3%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGLaSPYkG%2BYbcUowYJE0ZQCd9k6Lx02NF2oUrv05MCffAiATE2x%2FZebn5XAQuVJVHm%2FbXFMa1XhRr7SC4Aodq4SNgSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMefyKIz19IPpUaiMGKtwDoDcIOyUnmK%2BIIiupiUrCt8cGWHg%2BCrxgfzTeqpeITSIMuC0t9BFtVMWKhGk%2B%2B93xT8PkWD16e%2BaWpXkb6vaSGSDze9lVzbVs%2FQjyKpvQD38SL%2Ft1VJ5pf5bWuvu3%2F0qUfDNIGCmraQ5fsaZgbEisIfg8rrJQ5Gt%2F6MQ24v76a4YoH2MKXgjyHeOs6flyviEULmhrbJ11MyTbodZSCjrKAFHNwVI7qOHujZcy9Ip%2BsroTbc4BvMMfIL1nn%2B7TUJuVedy0m9dJh7U1Yyi5Qh%2FM6KxDUA1T2%2Fe2jzigj7hVuNTzwzxLowSVwrNbsAKfxLxW6ZYMEF3MXhjJSZhs8R1gXFdwRRKr6MPYZ7deh9PcE55G%2F7KptXbSY7e2iJFSCnZjgEoONRKXf%2FJbPTNgnOdUJjs8eoIkEbBnMrFrit47ADgazB0DEmCF0Ungu1AfuMW8hJrcjyCYh8kwZC0ysap%2Fcw%2BZ1xE8v6ZrEZUyVCi812HZILZBjvYjXw9gzhQ6VoYw4sy2g5QKCOb3cdQbvIusMrApX%2B2mkoWskPWknfOfyVH9DWofmYcGm%2BSU3l19K9zPFFMk9J1wM7H1F0wu%2Fo7DfBPmp9AT%2B9Xct5V5fBsg1bv0VXhIrtkW6Mrt4nIwoYyDxgY6pgGh4ru9zAzTasymS0XtnKYwrWdWIK%2B14afkdKRrrTlGyYjFbMWON2jHtHEJz2oC9KuMhrQP4pql6VspqCFB1%2FYZmgPJ%2BwM%2Bd67VGniqzXEn6gXQ2NkI61q3JVd3uaenk9G09a5lKTU4NUbkNvAWtmuq6frNf7TIssjhZhkacrr9tuc0IH0TrKoU5gB9YNq19vccAQQgYsjO9cVbkJStNZoqlbTgSuYz&X-Amz-Signature=2a14635459767f133be9586aac3ca39727bfbdb3619620b4c17dc4daad57bbac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TQXQGT3%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGLaSPYkG%2BYbcUowYJE0ZQCd9k6Lx02NF2oUrv05MCffAiATE2x%2FZebn5XAQuVJVHm%2FbXFMa1XhRr7SC4Aodq4SNgSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMefyKIz19IPpUaiMGKtwDoDcIOyUnmK%2BIIiupiUrCt8cGWHg%2BCrxgfzTeqpeITSIMuC0t9BFtVMWKhGk%2B%2B93xT8PkWD16e%2BaWpXkb6vaSGSDze9lVzbVs%2FQjyKpvQD38SL%2Ft1VJ5pf5bWuvu3%2F0qUfDNIGCmraQ5fsaZgbEisIfg8rrJQ5Gt%2F6MQ24v76a4YoH2MKXgjyHeOs6flyviEULmhrbJ11MyTbodZSCjrKAFHNwVI7qOHujZcy9Ip%2BsroTbc4BvMMfIL1nn%2B7TUJuVedy0m9dJh7U1Yyi5Qh%2FM6KxDUA1T2%2Fe2jzigj7hVuNTzwzxLowSVwrNbsAKfxLxW6ZYMEF3MXhjJSZhs8R1gXFdwRRKr6MPYZ7deh9PcE55G%2F7KptXbSY7e2iJFSCnZjgEoONRKXf%2FJbPTNgnOdUJjs8eoIkEbBnMrFrit47ADgazB0DEmCF0Ungu1AfuMW8hJrcjyCYh8kwZC0ysap%2Fcw%2BZ1xE8v6ZrEZUyVCi812HZILZBjvYjXw9gzhQ6VoYw4sy2g5QKCOb3cdQbvIusMrApX%2B2mkoWskPWknfOfyVH9DWofmYcGm%2BSU3l19K9zPFFMk9J1wM7H1F0wu%2Fo7DfBPmp9AT%2B9Xct5V5fBsg1bv0VXhIrtkW6Mrt4nIwoYyDxgY6pgGh4ru9zAzTasymS0XtnKYwrWdWIK%2B14afkdKRrrTlGyYjFbMWON2jHtHEJz2oC9KuMhrQP4pql6VspqCFB1%2FYZmgPJ%2BwM%2Bd67VGniqzXEn6gXQ2NkI61q3JVd3uaenk9G09a5lKTU4NUbkNvAWtmuq6frNf7TIssjhZhkacrr9tuc0IH0TrKoU5gB9YNq19vccAQQgYsjO9cVbkJStNZoqlbTgSuYz&X-Amz-Signature=941a9c5bff567338561ea4102aca3ce34e2d41c509e211f44423311b6489cf87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TQXQGT3%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGLaSPYkG%2BYbcUowYJE0ZQCd9k6Lx02NF2oUrv05MCffAiATE2x%2FZebn5XAQuVJVHm%2FbXFMa1XhRr7SC4Aodq4SNgSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMefyKIz19IPpUaiMGKtwDoDcIOyUnmK%2BIIiupiUrCt8cGWHg%2BCrxgfzTeqpeITSIMuC0t9BFtVMWKhGk%2B%2B93xT8PkWD16e%2BaWpXkb6vaSGSDze9lVzbVs%2FQjyKpvQD38SL%2Ft1VJ5pf5bWuvu3%2F0qUfDNIGCmraQ5fsaZgbEisIfg8rrJQ5Gt%2F6MQ24v76a4YoH2MKXgjyHeOs6flyviEULmhrbJ11MyTbodZSCjrKAFHNwVI7qOHujZcy9Ip%2BsroTbc4BvMMfIL1nn%2B7TUJuVedy0m9dJh7U1Yyi5Qh%2FM6KxDUA1T2%2Fe2jzigj7hVuNTzwzxLowSVwrNbsAKfxLxW6ZYMEF3MXhjJSZhs8R1gXFdwRRKr6MPYZ7deh9PcE55G%2F7KptXbSY7e2iJFSCnZjgEoONRKXf%2FJbPTNgnOdUJjs8eoIkEbBnMrFrit47ADgazB0DEmCF0Ungu1AfuMW8hJrcjyCYh8kwZC0ysap%2Fcw%2BZ1xE8v6ZrEZUyVCi812HZILZBjvYjXw9gzhQ6VoYw4sy2g5QKCOb3cdQbvIusMrApX%2B2mkoWskPWknfOfyVH9DWofmYcGm%2BSU3l19K9zPFFMk9J1wM7H1F0wu%2Fo7DfBPmp9AT%2B9Xct5V5fBsg1bv0VXhIrtkW6Mrt4nIwoYyDxgY6pgGh4ru9zAzTasymS0XtnKYwrWdWIK%2B14afkdKRrrTlGyYjFbMWON2jHtHEJz2oC9KuMhrQP4pql6VspqCFB1%2FYZmgPJ%2BwM%2Bd67VGniqzXEn6gXQ2NkI61q3JVd3uaenk9G09a5lKTU4NUbkNvAWtmuq6frNf7TIssjhZhkacrr9tuc0IH0TrKoU5gB9YNq19vccAQQgYsjO9cVbkJStNZoqlbTgSuYz&X-Amz-Signature=135648de3dce7b18a5a5616e32c8c39097bf8b26a12c811ca1ec5687b5e65c48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TQXQGT3%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGLaSPYkG%2BYbcUowYJE0ZQCd9k6Lx02NF2oUrv05MCffAiATE2x%2FZebn5XAQuVJVHm%2FbXFMa1XhRr7SC4Aodq4SNgSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMefyKIz19IPpUaiMGKtwDoDcIOyUnmK%2BIIiupiUrCt8cGWHg%2BCrxgfzTeqpeITSIMuC0t9BFtVMWKhGk%2B%2B93xT8PkWD16e%2BaWpXkb6vaSGSDze9lVzbVs%2FQjyKpvQD38SL%2Ft1VJ5pf5bWuvu3%2F0qUfDNIGCmraQ5fsaZgbEisIfg8rrJQ5Gt%2F6MQ24v76a4YoH2MKXgjyHeOs6flyviEULmhrbJ11MyTbodZSCjrKAFHNwVI7qOHujZcy9Ip%2BsroTbc4BvMMfIL1nn%2B7TUJuVedy0m9dJh7U1Yyi5Qh%2FM6KxDUA1T2%2Fe2jzigj7hVuNTzwzxLowSVwrNbsAKfxLxW6ZYMEF3MXhjJSZhs8R1gXFdwRRKr6MPYZ7deh9PcE55G%2F7KptXbSY7e2iJFSCnZjgEoONRKXf%2FJbPTNgnOdUJjs8eoIkEbBnMrFrit47ADgazB0DEmCF0Ungu1AfuMW8hJrcjyCYh8kwZC0ysap%2Fcw%2BZ1xE8v6ZrEZUyVCi812HZILZBjvYjXw9gzhQ6VoYw4sy2g5QKCOb3cdQbvIusMrApX%2B2mkoWskPWknfOfyVH9DWofmYcGm%2BSU3l19K9zPFFMk9J1wM7H1F0wu%2Fo7DfBPmp9AT%2B9Xct5V5fBsg1bv0VXhIrtkW6Mrt4nIwoYyDxgY6pgGh4ru9zAzTasymS0XtnKYwrWdWIK%2B14afkdKRrrTlGyYjFbMWON2jHtHEJz2oC9KuMhrQP4pql6VspqCFB1%2FYZmgPJ%2BwM%2Bd67VGniqzXEn6gXQ2NkI61q3JVd3uaenk9G09a5lKTU4NUbkNvAWtmuq6frNf7TIssjhZhkacrr9tuc0IH0TrKoU5gB9YNq19vccAQQgYsjO9cVbkJStNZoqlbTgSuYz&X-Amz-Signature=380a940c22aaae12b103485214defb8f1229dcc72815911a8a2d6788959b1c00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TQXQGT3%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGLaSPYkG%2BYbcUowYJE0ZQCd9k6Lx02NF2oUrv05MCffAiATE2x%2FZebn5XAQuVJVHm%2FbXFMa1XhRr7SC4Aodq4SNgSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMefyKIz19IPpUaiMGKtwDoDcIOyUnmK%2BIIiupiUrCt8cGWHg%2BCrxgfzTeqpeITSIMuC0t9BFtVMWKhGk%2B%2B93xT8PkWD16e%2BaWpXkb6vaSGSDze9lVzbVs%2FQjyKpvQD38SL%2Ft1VJ5pf5bWuvu3%2F0qUfDNIGCmraQ5fsaZgbEisIfg8rrJQ5Gt%2F6MQ24v76a4YoH2MKXgjyHeOs6flyviEULmhrbJ11MyTbodZSCjrKAFHNwVI7qOHujZcy9Ip%2BsroTbc4BvMMfIL1nn%2B7TUJuVedy0m9dJh7U1Yyi5Qh%2FM6KxDUA1T2%2Fe2jzigj7hVuNTzwzxLowSVwrNbsAKfxLxW6ZYMEF3MXhjJSZhs8R1gXFdwRRKr6MPYZ7deh9PcE55G%2F7KptXbSY7e2iJFSCnZjgEoONRKXf%2FJbPTNgnOdUJjs8eoIkEbBnMrFrit47ADgazB0DEmCF0Ungu1AfuMW8hJrcjyCYh8kwZC0ysap%2Fcw%2BZ1xE8v6ZrEZUyVCi812HZILZBjvYjXw9gzhQ6VoYw4sy2g5QKCOb3cdQbvIusMrApX%2B2mkoWskPWknfOfyVH9DWofmYcGm%2BSU3l19K9zPFFMk9J1wM7H1F0wu%2Fo7DfBPmp9AT%2B9Xct5V5fBsg1bv0VXhIrtkW6Mrt4nIwoYyDxgY6pgGh4ru9zAzTasymS0XtnKYwrWdWIK%2B14afkdKRrrTlGyYjFbMWON2jHtHEJz2oC9KuMhrQP4pql6VspqCFB1%2FYZmgPJ%2BwM%2Bd67VGniqzXEn6gXQ2NkI61q3JVd3uaenk9G09a5lKTU4NUbkNvAWtmuq6frNf7TIssjhZhkacrr9tuc0IH0TrKoU5gB9YNq19vccAQQgYsjO9cVbkJStNZoqlbTgSuYz&X-Amz-Signature=90d433e714d46398564b78b7ba1851992c4486ce95501bd06c9ef39c09a2b53e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TQXQGT3%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGLaSPYkG%2BYbcUowYJE0ZQCd9k6Lx02NF2oUrv05MCffAiATE2x%2FZebn5XAQuVJVHm%2FbXFMa1XhRr7SC4Aodq4SNgSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMefyKIz19IPpUaiMGKtwDoDcIOyUnmK%2BIIiupiUrCt8cGWHg%2BCrxgfzTeqpeITSIMuC0t9BFtVMWKhGk%2B%2B93xT8PkWD16e%2BaWpXkb6vaSGSDze9lVzbVs%2FQjyKpvQD38SL%2Ft1VJ5pf5bWuvu3%2F0qUfDNIGCmraQ5fsaZgbEisIfg8rrJQ5Gt%2F6MQ24v76a4YoH2MKXgjyHeOs6flyviEULmhrbJ11MyTbodZSCjrKAFHNwVI7qOHujZcy9Ip%2BsroTbc4BvMMfIL1nn%2B7TUJuVedy0m9dJh7U1Yyi5Qh%2FM6KxDUA1T2%2Fe2jzigj7hVuNTzwzxLowSVwrNbsAKfxLxW6ZYMEF3MXhjJSZhs8R1gXFdwRRKr6MPYZ7deh9PcE55G%2F7KptXbSY7e2iJFSCnZjgEoONRKXf%2FJbPTNgnOdUJjs8eoIkEbBnMrFrit47ADgazB0DEmCF0Ungu1AfuMW8hJrcjyCYh8kwZC0ysap%2Fcw%2BZ1xE8v6ZrEZUyVCi812HZILZBjvYjXw9gzhQ6VoYw4sy2g5QKCOb3cdQbvIusMrApX%2B2mkoWskPWknfOfyVH9DWofmYcGm%2BSU3l19K9zPFFMk9J1wM7H1F0wu%2Fo7DfBPmp9AT%2B9Xct5V5fBsg1bv0VXhIrtkW6Mrt4nIwoYyDxgY6pgGh4ru9zAzTasymS0XtnKYwrWdWIK%2B14afkdKRrrTlGyYjFbMWON2jHtHEJz2oC9KuMhrQP4pql6VspqCFB1%2FYZmgPJ%2BwM%2Bd67VGniqzXEn6gXQ2NkI61q3JVd3uaenk9G09a5lKTU4NUbkNvAWtmuq6frNf7TIssjhZhkacrr9tuc0IH0TrKoU5gB9YNq19vccAQQgYsjO9cVbkJStNZoqlbTgSuYz&X-Amz-Signature=ad9bdff10c0f411f2ef5739abe3dc1733d88465935ba005221d73d6f20784b9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TQXQGT3%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGLaSPYkG%2BYbcUowYJE0ZQCd9k6Lx02NF2oUrv05MCffAiATE2x%2FZebn5XAQuVJVHm%2FbXFMa1XhRr7SC4Aodq4SNgSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMefyKIz19IPpUaiMGKtwDoDcIOyUnmK%2BIIiupiUrCt8cGWHg%2BCrxgfzTeqpeITSIMuC0t9BFtVMWKhGk%2B%2B93xT8PkWD16e%2BaWpXkb6vaSGSDze9lVzbVs%2FQjyKpvQD38SL%2Ft1VJ5pf5bWuvu3%2F0qUfDNIGCmraQ5fsaZgbEisIfg8rrJQ5Gt%2F6MQ24v76a4YoH2MKXgjyHeOs6flyviEULmhrbJ11MyTbodZSCjrKAFHNwVI7qOHujZcy9Ip%2BsroTbc4BvMMfIL1nn%2B7TUJuVedy0m9dJh7U1Yyi5Qh%2FM6KxDUA1T2%2Fe2jzigj7hVuNTzwzxLowSVwrNbsAKfxLxW6ZYMEF3MXhjJSZhs8R1gXFdwRRKr6MPYZ7deh9PcE55G%2F7KptXbSY7e2iJFSCnZjgEoONRKXf%2FJbPTNgnOdUJjs8eoIkEbBnMrFrit47ADgazB0DEmCF0Ungu1AfuMW8hJrcjyCYh8kwZC0ysap%2Fcw%2BZ1xE8v6ZrEZUyVCi812HZILZBjvYjXw9gzhQ6VoYw4sy2g5QKCOb3cdQbvIusMrApX%2B2mkoWskPWknfOfyVH9DWofmYcGm%2BSU3l19K9zPFFMk9J1wM7H1F0wu%2Fo7DfBPmp9AT%2B9Xct5V5fBsg1bv0VXhIrtkW6Mrt4nIwoYyDxgY6pgGh4ru9zAzTasymS0XtnKYwrWdWIK%2B14afkdKRrrTlGyYjFbMWON2jHtHEJz2oC9KuMhrQP4pql6VspqCFB1%2FYZmgPJ%2BwM%2Bd67VGniqzXEn6gXQ2NkI61q3JVd3uaenk9G09a5lKTU4NUbkNvAWtmuq6frNf7TIssjhZhkacrr9tuc0IH0TrKoU5gB9YNq19vccAQQgYsjO9cVbkJStNZoqlbTgSuYz&X-Amz-Signature=caf6183c03bd3d721a813f0bc0c5f2693e84a1af63922f2a0735f76832003191&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TQXQGT3%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGLaSPYkG%2BYbcUowYJE0ZQCd9k6Lx02NF2oUrv05MCffAiATE2x%2FZebn5XAQuVJVHm%2FbXFMa1XhRr7SC4Aodq4SNgSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMefyKIz19IPpUaiMGKtwDoDcIOyUnmK%2BIIiupiUrCt8cGWHg%2BCrxgfzTeqpeITSIMuC0t9BFtVMWKhGk%2B%2B93xT8PkWD16e%2BaWpXkb6vaSGSDze9lVzbVs%2FQjyKpvQD38SL%2Ft1VJ5pf5bWuvu3%2F0qUfDNIGCmraQ5fsaZgbEisIfg8rrJQ5Gt%2F6MQ24v76a4YoH2MKXgjyHeOs6flyviEULmhrbJ11MyTbodZSCjrKAFHNwVI7qOHujZcy9Ip%2BsroTbc4BvMMfIL1nn%2B7TUJuVedy0m9dJh7U1Yyi5Qh%2FM6KxDUA1T2%2Fe2jzigj7hVuNTzwzxLowSVwrNbsAKfxLxW6ZYMEF3MXhjJSZhs8R1gXFdwRRKr6MPYZ7deh9PcE55G%2F7KptXbSY7e2iJFSCnZjgEoONRKXf%2FJbPTNgnOdUJjs8eoIkEbBnMrFrit47ADgazB0DEmCF0Ungu1AfuMW8hJrcjyCYh8kwZC0ysap%2Fcw%2BZ1xE8v6ZrEZUyVCi812HZILZBjvYjXw9gzhQ6VoYw4sy2g5QKCOb3cdQbvIusMrApX%2B2mkoWskPWknfOfyVH9DWofmYcGm%2BSU3l19K9zPFFMk9J1wM7H1F0wu%2Fo7DfBPmp9AT%2B9Xct5V5fBsg1bv0VXhIrtkW6Mrt4nIwoYyDxgY6pgGh4ru9zAzTasymS0XtnKYwrWdWIK%2B14afkdKRrrTlGyYjFbMWON2jHtHEJz2oC9KuMhrQP4pql6VspqCFB1%2FYZmgPJ%2BwM%2Bd67VGniqzXEn6gXQ2NkI61q3JVd3uaenk9G09a5lKTU4NUbkNvAWtmuq6frNf7TIssjhZhkacrr9tuc0IH0TrKoU5gB9YNq19vccAQQgYsjO9cVbkJStNZoqlbTgSuYz&X-Amz-Signature=ba9f76780f757c34e2dce47e0dd709914f425f7ec4aa54bb3df54bdaa79f9884&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TQXQGT3%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGLaSPYkG%2BYbcUowYJE0ZQCd9k6Lx02NF2oUrv05MCffAiATE2x%2FZebn5XAQuVJVHm%2FbXFMa1XhRr7SC4Aodq4SNgSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMefyKIz19IPpUaiMGKtwDoDcIOyUnmK%2BIIiupiUrCt8cGWHg%2BCrxgfzTeqpeITSIMuC0t9BFtVMWKhGk%2B%2B93xT8PkWD16e%2BaWpXkb6vaSGSDze9lVzbVs%2FQjyKpvQD38SL%2Ft1VJ5pf5bWuvu3%2F0qUfDNIGCmraQ5fsaZgbEisIfg8rrJQ5Gt%2F6MQ24v76a4YoH2MKXgjyHeOs6flyviEULmhrbJ11MyTbodZSCjrKAFHNwVI7qOHujZcy9Ip%2BsroTbc4BvMMfIL1nn%2B7TUJuVedy0m9dJh7U1Yyi5Qh%2FM6KxDUA1T2%2Fe2jzigj7hVuNTzwzxLowSVwrNbsAKfxLxW6ZYMEF3MXhjJSZhs8R1gXFdwRRKr6MPYZ7deh9PcE55G%2F7KptXbSY7e2iJFSCnZjgEoONRKXf%2FJbPTNgnOdUJjs8eoIkEbBnMrFrit47ADgazB0DEmCF0Ungu1AfuMW8hJrcjyCYh8kwZC0ysap%2Fcw%2BZ1xE8v6ZrEZUyVCi812HZILZBjvYjXw9gzhQ6VoYw4sy2g5QKCOb3cdQbvIusMrApX%2B2mkoWskPWknfOfyVH9DWofmYcGm%2BSU3l19K9zPFFMk9J1wM7H1F0wu%2Fo7DfBPmp9AT%2B9Xct5V5fBsg1bv0VXhIrtkW6Mrt4nIwoYyDxgY6pgGh4ru9zAzTasymS0XtnKYwrWdWIK%2B14afkdKRrrTlGyYjFbMWON2jHtHEJz2oC9KuMhrQP4pql6VspqCFB1%2FYZmgPJ%2BwM%2Bd67VGniqzXEn6gXQ2NkI61q3JVd3uaenk9G09a5lKTU4NUbkNvAWtmuq6frNf7TIssjhZhkacrr9tuc0IH0TrKoU5gB9YNq19vccAQQgYsjO9cVbkJStNZoqlbTgSuYz&X-Amz-Signature=3664388fc35913f6e40c07a5c05a7208f5caa9c77ae816eaacff9b49a9c372ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TQXQGT3%2F20250910%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250910T012254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGLaSPYkG%2BYbcUowYJE0ZQCd9k6Lx02NF2oUrv05MCffAiATE2x%2FZebn5XAQuVJVHm%2FbXFMa1XhRr7SC4Aodq4SNgSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMefyKIz19IPpUaiMGKtwDoDcIOyUnmK%2BIIiupiUrCt8cGWHg%2BCrxgfzTeqpeITSIMuC0t9BFtVMWKhGk%2B%2B93xT8PkWD16e%2BaWpXkb6vaSGSDze9lVzbVs%2FQjyKpvQD38SL%2Ft1VJ5pf5bWuvu3%2F0qUfDNIGCmraQ5fsaZgbEisIfg8rrJQ5Gt%2F6MQ24v76a4YoH2MKXgjyHeOs6flyviEULmhrbJ11MyTbodZSCjrKAFHNwVI7qOHujZcy9Ip%2BsroTbc4BvMMfIL1nn%2B7TUJuVedy0m9dJh7U1Yyi5Qh%2FM6KxDUA1T2%2Fe2jzigj7hVuNTzwzxLowSVwrNbsAKfxLxW6ZYMEF3MXhjJSZhs8R1gXFdwRRKr6MPYZ7deh9PcE55G%2F7KptXbSY7e2iJFSCnZjgEoONRKXf%2FJbPTNgnOdUJjs8eoIkEbBnMrFrit47ADgazB0DEmCF0Ungu1AfuMW8hJrcjyCYh8kwZC0ysap%2Fcw%2BZ1xE8v6ZrEZUyVCi812HZILZBjvYjXw9gzhQ6VoYw4sy2g5QKCOb3cdQbvIusMrApX%2B2mkoWskPWknfOfyVH9DWofmYcGm%2BSU3l19K9zPFFMk9J1wM7H1F0wu%2Fo7DfBPmp9AT%2B9Xct5V5fBsg1bv0VXhIrtkW6Mrt4nIwoYyDxgY6pgGh4ru9zAzTasymS0XtnKYwrWdWIK%2B14afkdKRrrTlGyYjFbMWON2jHtHEJz2oC9KuMhrQP4pql6VspqCFB1%2FYZmgPJ%2BwM%2Bd67VGniqzXEn6gXQ2NkI61q3JVd3uaenk9G09a5lKTU4NUbkNvAWtmuq6frNf7TIssjhZhkacrr9tuc0IH0TrKoU5gB9YNq19vccAQQgYsjO9cVbkJStNZoqlbTgSuYz&X-Amz-Signature=ff25865d7d305646f015e4b1feb3e5c45a911feb899af16b23169f4facb87619&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
