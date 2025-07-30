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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSQWALDP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwiuojv2iMpt8JVE0TT1MhLyhQTd1dl%2BTk3QRHDqnwnQIhANMtKio9eKuCmbd4o%2BUEA1ZVo7R86RpUlYtw2xgpgR7GKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwO%2FBfot6MXYZTI74Qq3ANbG2HhbOeMkWMWeyF8XsWTxWwObAy1UwEft%2BoVP7ykR%2F0A%2F%2FSzRk6N3LXrwf%2BNiKQ0dCoOv2kqyib7rO2HHr7BoQbbsODkXfKIBPBfYoc0g9bVwgsmwtsHgylcGN1QkYi9Yv2IHH%2F5qPF%2F4rK4BaqUyJA8ycM6zbw8lXLDAT70MwZjHWJ5R8Zr1sp0W8%2BHwH6z07aUZHwrRS%2Bv3ebCmLRur21cBJJQN68IXqY3WKq3ddwp8Tgw0RfmE3tkktAfQ4Z9U1c9QBkGwPo3o3WK%2F5I3m7SR4v6GDyEHo%2FJtDD5rIacLCRFsAF%2FHiBope4MYE61bx0%2BNZn2nCqOoxQVBc%2BrtuY80mq6UWkkM14jOJJuubdVV7t%2BycxFrrpby68issGkT8iRoyuE%2B2zr%2B3BAH7vVX93BiyR2vIDEPJABuFvi%2Bh976WmzutOPJyaDwtmgliKDJh4KKjvaio0S%2F8K4xviHZuTD8JMqGIXeIpwuiBlKRYE%2FM%2B%2BTiKuxmwywbgVCS3GkRIW9y0gD0xu9jDa6%2BV7NkSxfISJswQ8t2O1DnbhXAijRSA8UZxQ1JKpuKW4CIK20VYjJ%2B726LINuVg2mENqJr3w94KX9%2FmIluThYQwuAu2Ytwd5Dsh5ilnqQwaTDj6KnEBjqkAcxpSbKEXIGH8xPlBCIw6LqCO91TB8T4f%2F%2F0U2OdEGmlJosWe7qHbHR4wNP6y3RWoUZttmj2uHZyFNtYx8JONWCD8zKBj5pT0xBf6P2O4bkDitIkorAar6eup9FKavkRROoOiGWuZHfJa0VHWqTo85tOqkyw4BWVPC%2BTGqVU5UuTdyGTSvCzYm4LyfFf9Cw%2B0xeVrhE1p2x6m5o2U%2FnRFTVwSkFE&X-Amz-Signature=1eede3d4e077d7a0dbae8b3bcf177c4241401093044fdde9ba5deebf019474d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSQWALDP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwiuojv2iMpt8JVE0TT1MhLyhQTd1dl%2BTk3QRHDqnwnQIhANMtKio9eKuCmbd4o%2BUEA1ZVo7R86RpUlYtw2xgpgR7GKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwO%2FBfot6MXYZTI74Qq3ANbG2HhbOeMkWMWeyF8XsWTxWwObAy1UwEft%2BoVP7ykR%2F0A%2F%2FSzRk6N3LXrwf%2BNiKQ0dCoOv2kqyib7rO2HHr7BoQbbsODkXfKIBPBfYoc0g9bVwgsmwtsHgylcGN1QkYi9Yv2IHH%2F5qPF%2F4rK4BaqUyJA8ycM6zbw8lXLDAT70MwZjHWJ5R8Zr1sp0W8%2BHwH6z07aUZHwrRS%2Bv3ebCmLRur21cBJJQN68IXqY3WKq3ddwp8Tgw0RfmE3tkktAfQ4Z9U1c9QBkGwPo3o3WK%2F5I3m7SR4v6GDyEHo%2FJtDD5rIacLCRFsAF%2FHiBope4MYE61bx0%2BNZn2nCqOoxQVBc%2BrtuY80mq6UWkkM14jOJJuubdVV7t%2BycxFrrpby68issGkT8iRoyuE%2B2zr%2B3BAH7vVX93BiyR2vIDEPJABuFvi%2Bh976WmzutOPJyaDwtmgliKDJh4KKjvaio0S%2F8K4xviHZuTD8JMqGIXeIpwuiBlKRYE%2FM%2B%2BTiKuxmwywbgVCS3GkRIW9y0gD0xu9jDa6%2BV7NkSxfISJswQ8t2O1DnbhXAijRSA8UZxQ1JKpuKW4CIK20VYjJ%2B726LINuVg2mENqJr3w94KX9%2FmIluThYQwuAu2Ytwd5Dsh5ilnqQwaTDj6KnEBjqkAcxpSbKEXIGH8xPlBCIw6LqCO91TB8T4f%2F%2F0U2OdEGmlJosWe7qHbHR4wNP6y3RWoUZttmj2uHZyFNtYx8JONWCD8zKBj5pT0xBf6P2O4bkDitIkorAar6eup9FKavkRROoOiGWuZHfJa0VHWqTo85tOqkyw4BWVPC%2BTGqVU5UuTdyGTSvCzYm4LyfFf9Cw%2B0xeVrhE1p2x6m5o2U%2FnRFTVwSkFE&X-Amz-Signature=296aa049cae1c492916d5c1574266eb0d8b15adf2bfe292345e247b4e9e11003&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSQWALDP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwiuojv2iMpt8JVE0TT1MhLyhQTd1dl%2BTk3QRHDqnwnQIhANMtKio9eKuCmbd4o%2BUEA1ZVo7R86RpUlYtw2xgpgR7GKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwO%2FBfot6MXYZTI74Qq3ANbG2HhbOeMkWMWeyF8XsWTxWwObAy1UwEft%2BoVP7ykR%2F0A%2F%2FSzRk6N3LXrwf%2BNiKQ0dCoOv2kqyib7rO2HHr7BoQbbsODkXfKIBPBfYoc0g9bVwgsmwtsHgylcGN1QkYi9Yv2IHH%2F5qPF%2F4rK4BaqUyJA8ycM6zbw8lXLDAT70MwZjHWJ5R8Zr1sp0W8%2BHwH6z07aUZHwrRS%2Bv3ebCmLRur21cBJJQN68IXqY3WKq3ddwp8Tgw0RfmE3tkktAfQ4Z9U1c9QBkGwPo3o3WK%2F5I3m7SR4v6GDyEHo%2FJtDD5rIacLCRFsAF%2FHiBope4MYE61bx0%2BNZn2nCqOoxQVBc%2BrtuY80mq6UWkkM14jOJJuubdVV7t%2BycxFrrpby68issGkT8iRoyuE%2B2zr%2B3BAH7vVX93BiyR2vIDEPJABuFvi%2Bh976WmzutOPJyaDwtmgliKDJh4KKjvaio0S%2F8K4xviHZuTD8JMqGIXeIpwuiBlKRYE%2FM%2B%2BTiKuxmwywbgVCS3GkRIW9y0gD0xu9jDa6%2BV7NkSxfISJswQ8t2O1DnbhXAijRSA8UZxQ1JKpuKW4CIK20VYjJ%2B726LINuVg2mENqJr3w94KX9%2FmIluThYQwuAu2Ytwd5Dsh5ilnqQwaTDj6KnEBjqkAcxpSbKEXIGH8xPlBCIw6LqCO91TB8T4f%2F%2F0U2OdEGmlJosWe7qHbHR4wNP6y3RWoUZttmj2uHZyFNtYx8JONWCD8zKBj5pT0xBf6P2O4bkDitIkorAar6eup9FKavkRROoOiGWuZHfJa0VHWqTo85tOqkyw4BWVPC%2BTGqVU5UuTdyGTSvCzYm4LyfFf9Cw%2B0xeVrhE1p2x6m5o2U%2FnRFTVwSkFE&X-Amz-Signature=d220987a2f0c1780a93c6e2230a272c109412e268c3758557485517071806a7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSQWALDP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwiuojv2iMpt8JVE0TT1MhLyhQTd1dl%2BTk3QRHDqnwnQIhANMtKio9eKuCmbd4o%2BUEA1ZVo7R86RpUlYtw2xgpgR7GKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwO%2FBfot6MXYZTI74Qq3ANbG2HhbOeMkWMWeyF8XsWTxWwObAy1UwEft%2BoVP7ykR%2F0A%2F%2FSzRk6N3LXrwf%2BNiKQ0dCoOv2kqyib7rO2HHr7BoQbbsODkXfKIBPBfYoc0g9bVwgsmwtsHgylcGN1QkYi9Yv2IHH%2F5qPF%2F4rK4BaqUyJA8ycM6zbw8lXLDAT70MwZjHWJ5R8Zr1sp0W8%2BHwH6z07aUZHwrRS%2Bv3ebCmLRur21cBJJQN68IXqY3WKq3ddwp8Tgw0RfmE3tkktAfQ4Z9U1c9QBkGwPo3o3WK%2F5I3m7SR4v6GDyEHo%2FJtDD5rIacLCRFsAF%2FHiBope4MYE61bx0%2BNZn2nCqOoxQVBc%2BrtuY80mq6UWkkM14jOJJuubdVV7t%2BycxFrrpby68issGkT8iRoyuE%2B2zr%2B3BAH7vVX93BiyR2vIDEPJABuFvi%2Bh976WmzutOPJyaDwtmgliKDJh4KKjvaio0S%2F8K4xviHZuTD8JMqGIXeIpwuiBlKRYE%2FM%2B%2BTiKuxmwywbgVCS3GkRIW9y0gD0xu9jDa6%2BV7NkSxfISJswQ8t2O1DnbhXAijRSA8UZxQ1JKpuKW4CIK20VYjJ%2B726LINuVg2mENqJr3w94KX9%2FmIluThYQwuAu2Ytwd5Dsh5ilnqQwaTDj6KnEBjqkAcxpSbKEXIGH8xPlBCIw6LqCO91TB8T4f%2F%2F0U2OdEGmlJosWe7qHbHR4wNP6y3RWoUZttmj2uHZyFNtYx8JONWCD8zKBj5pT0xBf6P2O4bkDitIkorAar6eup9FKavkRROoOiGWuZHfJa0VHWqTo85tOqkyw4BWVPC%2BTGqVU5UuTdyGTSvCzYm4LyfFf9Cw%2B0xeVrhE1p2x6m5o2U%2FnRFTVwSkFE&X-Amz-Signature=6ee01d4cd4dcd989d78a39f53168c975916eef38f0785406fab170a9fe794bb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSQWALDP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwiuojv2iMpt8JVE0TT1MhLyhQTd1dl%2BTk3QRHDqnwnQIhANMtKio9eKuCmbd4o%2BUEA1ZVo7R86RpUlYtw2xgpgR7GKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwO%2FBfot6MXYZTI74Qq3ANbG2HhbOeMkWMWeyF8XsWTxWwObAy1UwEft%2BoVP7ykR%2F0A%2F%2FSzRk6N3LXrwf%2BNiKQ0dCoOv2kqyib7rO2HHr7BoQbbsODkXfKIBPBfYoc0g9bVwgsmwtsHgylcGN1QkYi9Yv2IHH%2F5qPF%2F4rK4BaqUyJA8ycM6zbw8lXLDAT70MwZjHWJ5R8Zr1sp0W8%2BHwH6z07aUZHwrRS%2Bv3ebCmLRur21cBJJQN68IXqY3WKq3ddwp8Tgw0RfmE3tkktAfQ4Z9U1c9QBkGwPo3o3WK%2F5I3m7SR4v6GDyEHo%2FJtDD5rIacLCRFsAF%2FHiBope4MYE61bx0%2BNZn2nCqOoxQVBc%2BrtuY80mq6UWkkM14jOJJuubdVV7t%2BycxFrrpby68issGkT8iRoyuE%2B2zr%2B3BAH7vVX93BiyR2vIDEPJABuFvi%2Bh976WmzutOPJyaDwtmgliKDJh4KKjvaio0S%2F8K4xviHZuTD8JMqGIXeIpwuiBlKRYE%2FM%2B%2BTiKuxmwywbgVCS3GkRIW9y0gD0xu9jDa6%2BV7NkSxfISJswQ8t2O1DnbhXAijRSA8UZxQ1JKpuKW4CIK20VYjJ%2B726LINuVg2mENqJr3w94KX9%2FmIluThYQwuAu2Ytwd5Dsh5ilnqQwaTDj6KnEBjqkAcxpSbKEXIGH8xPlBCIw6LqCO91TB8T4f%2F%2F0U2OdEGmlJosWe7qHbHR4wNP6y3RWoUZttmj2uHZyFNtYx8JONWCD8zKBj5pT0xBf6P2O4bkDitIkorAar6eup9FKavkRROoOiGWuZHfJa0VHWqTo85tOqkyw4BWVPC%2BTGqVU5UuTdyGTSvCzYm4LyfFf9Cw%2B0xeVrhE1p2x6m5o2U%2FnRFTVwSkFE&X-Amz-Signature=ad89dd92c299ce613427f43dea14d39dbc175ac5dbf552a496bca46c990e8538&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSQWALDP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwiuojv2iMpt8JVE0TT1MhLyhQTd1dl%2BTk3QRHDqnwnQIhANMtKio9eKuCmbd4o%2BUEA1ZVo7R86RpUlYtw2xgpgR7GKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwO%2FBfot6MXYZTI74Qq3ANbG2HhbOeMkWMWeyF8XsWTxWwObAy1UwEft%2BoVP7ykR%2F0A%2F%2FSzRk6N3LXrwf%2BNiKQ0dCoOv2kqyib7rO2HHr7BoQbbsODkXfKIBPBfYoc0g9bVwgsmwtsHgylcGN1QkYi9Yv2IHH%2F5qPF%2F4rK4BaqUyJA8ycM6zbw8lXLDAT70MwZjHWJ5R8Zr1sp0W8%2BHwH6z07aUZHwrRS%2Bv3ebCmLRur21cBJJQN68IXqY3WKq3ddwp8Tgw0RfmE3tkktAfQ4Z9U1c9QBkGwPo3o3WK%2F5I3m7SR4v6GDyEHo%2FJtDD5rIacLCRFsAF%2FHiBope4MYE61bx0%2BNZn2nCqOoxQVBc%2BrtuY80mq6UWkkM14jOJJuubdVV7t%2BycxFrrpby68issGkT8iRoyuE%2B2zr%2B3BAH7vVX93BiyR2vIDEPJABuFvi%2Bh976WmzutOPJyaDwtmgliKDJh4KKjvaio0S%2F8K4xviHZuTD8JMqGIXeIpwuiBlKRYE%2FM%2B%2BTiKuxmwywbgVCS3GkRIW9y0gD0xu9jDa6%2BV7NkSxfISJswQ8t2O1DnbhXAijRSA8UZxQ1JKpuKW4CIK20VYjJ%2B726LINuVg2mENqJr3w94KX9%2FmIluThYQwuAu2Ytwd5Dsh5ilnqQwaTDj6KnEBjqkAcxpSbKEXIGH8xPlBCIw6LqCO91TB8T4f%2F%2F0U2OdEGmlJosWe7qHbHR4wNP6y3RWoUZttmj2uHZyFNtYx8JONWCD8zKBj5pT0xBf6P2O4bkDitIkorAar6eup9FKavkRROoOiGWuZHfJa0VHWqTo85tOqkyw4BWVPC%2BTGqVU5UuTdyGTSvCzYm4LyfFf9Cw%2B0xeVrhE1p2x6m5o2U%2FnRFTVwSkFE&X-Amz-Signature=78c02de28a2e238f4c9724caa6ed064f71b4a328d3953b4baf399c337eacae6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSQWALDP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwiuojv2iMpt8JVE0TT1MhLyhQTd1dl%2BTk3QRHDqnwnQIhANMtKio9eKuCmbd4o%2BUEA1ZVo7R86RpUlYtw2xgpgR7GKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwO%2FBfot6MXYZTI74Qq3ANbG2HhbOeMkWMWeyF8XsWTxWwObAy1UwEft%2BoVP7ykR%2F0A%2F%2FSzRk6N3LXrwf%2BNiKQ0dCoOv2kqyib7rO2HHr7BoQbbsODkXfKIBPBfYoc0g9bVwgsmwtsHgylcGN1QkYi9Yv2IHH%2F5qPF%2F4rK4BaqUyJA8ycM6zbw8lXLDAT70MwZjHWJ5R8Zr1sp0W8%2BHwH6z07aUZHwrRS%2Bv3ebCmLRur21cBJJQN68IXqY3WKq3ddwp8Tgw0RfmE3tkktAfQ4Z9U1c9QBkGwPo3o3WK%2F5I3m7SR4v6GDyEHo%2FJtDD5rIacLCRFsAF%2FHiBope4MYE61bx0%2BNZn2nCqOoxQVBc%2BrtuY80mq6UWkkM14jOJJuubdVV7t%2BycxFrrpby68issGkT8iRoyuE%2B2zr%2B3BAH7vVX93BiyR2vIDEPJABuFvi%2Bh976WmzutOPJyaDwtmgliKDJh4KKjvaio0S%2F8K4xviHZuTD8JMqGIXeIpwuiBlKRYE%2FM%2B%2BTiKuxmwywbgVCS3GkRIW9y0gD0xu9jDa6%2BV7NkSxfISJswQ8t2O1DnbhXAijRSA8UZxQ1JKpuKW4CIK20VYjJ%2B726LINuVg2mENqJr3w94KX9%2FmIluThYQwuAu2Ytwd5Dsh5ilnqQwaTDj6KnEBjqkAcxpSbKEXIGH8xPlBCIw6LqCO91TB8T4f%2F%2F0U2OdEGmlJosWe7qHbHR4wNP6y3RWoUZttmj2uHZyFNtYx8JONWCD8zKBj5pT0xBf6P2O4bkDitIkorAar6eup9FKavkRROoOiGWuZHfJa0VHWqTo85tOqkyw4BWVPC%2BTGqVU5UuTdyGTSvCzYm4LyfFf9Cw%2B0xeVrhE1p2x6m5o2U%2FnRFTVwSkFE&X-Amz-Signature=f8757cca84ed01fc70cb5b1c90c132844b42235f6204e3a728faaba209b87881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSQWALDP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwiuojv2iMpt8JVE0TT1MhLyhQTd1dl%2BTk3QRHDqnwnQIhANMtKio9eKuCmbd4o%2BUEA1ZVo7R86RpUlYtw2xgpgR7GKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwO%2FBfot6MXYZTI74Qq3ANbG2HhbOeMkWMWeyF8XsWTxWwObAy1UwEft%2BoVP7ykR%2F0A%2F%2FSzRk6N3LXrwf%2BNiKQ0dCoOv2kqyib7rO2HHr7BoQbbsODkXfKIBPBfYoc0g9bVwgsmwtsHgylcGN1QkYi9Yv2IHH%2F5qPF%2F4rK4BaqUyJA8ycM6zbw8lXLDAT70MwZjHWJ5R8Zr1sp0W8%2BHwH6z07aUZHwrRS%2Bv3ebCmLRur21cBJJQN68IXqY3WKq3ddwp8Tgw0RfmE3tkktAfQ4Z9U1c9QBkGwPo3o3WK%2F5I3m7SR4v6GDyEHo%2FJtDD5rIacLCRFsAF%2FHiBope4MYE61bx0%2BNZn2nCqOoxQVBc%2BrtuY80mq6UWkkM14jOJJuubdVV7t%2BycxFrrpby68issGkT8iRoyuE%2B2zr%2B3BAH7vVX93BiyR2vIDEPJABuFvi%2Bh976WmzutOPJyaDwtmgliKDJh4KKjvaio0S%2F8K4xviHZuTD8JMqGIXeIpwuiBlKRYE%2FM%2B%2BTiKuxmwywbgVCS3GkRIW9y0gD0xu9jDa6%2BV7NkSxfISJswQ8t2O1DnbhXAijRSA8UZxQ1JKpuKW4CIK20VYjJ%2B726LINuVg2mENqJr3w94KX9%2FmIluThYQwuAu2Ytwd5Dsh5ilnqQwaTDj6KnEBjqkAcxpSbKEXIGH8xPlBCIw6LqCO91TB8T4f%2F%2F0U2OdEGmlJosWe7qHbHR4wNP6y3RWoUZttmj2uHZyFNtYx8JONWCD8zKBj5pT0xBf6P2O4bkDitIkorAar6eup9FKavkRROoOiGWuZHfJa0VHWqTo85tOqkyw4BWVPC%2BTGqVU5UuTdyGTSvCzYm4LyfFf9Cw%2B0xeVrhE1p2x6m5o2U%2FnRFTVwSkFE&X-Amz-Signature=84c1adae9e29db53e2beb38a58c09284218a2cd778cc90ad72fb925b4454f02b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSQWALDP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwiuojv2iMpt8JVE0TT1MhLyhQTd1dl%2BTk3QRHDqnwnQIhANMtKio9eKuCmbd4o%2BUEA1ZVo7R86RpUlYtw2xgpgR7GKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwO%2FBfot6MXYZTI74Qq3ANbG2HhbOeMkWMWeyF8XsWTxWwObAy1UwEft%2BoVP7ykR%2F0A%2F%2FSzRk6N3LXrwf%2BNiKQ0dCoOv2kqyib7rO2HHr7BoQbbsODkXfKIBPBfYoc0g9bVwgsmwtsHgylcGN1QkYi9Yv2IHH%2F5qPF%2F4rK4BaqUyJA8ycM6zbw8lXLDAT70MwZjHWJ5R8Zr1sp0W8%2BHwH6z07aUZHwrRS%2Bv3ebCmLRur21cBJJQN68IXqY3WKq3ddwp8Tgw0RfmE3tkktAfQ4Z9U1c9QBkGwPo3o3WK%2F5I3m7SR4v6GDyEHo%2FJtDD5rIacLCRFsAF%2FHiBope4MYE61bx0%2BNZn2nCqOoxQVBc%2BrtuY80mq6UWkkM14jOJJuubdVV7t%2BycxFrrpby68issGkT8iRoyuE%2B2zr%2B3BAH7vVX93BiyR2vIDEPJABuFvi%2Bh976WmzutOPJyaDwtmgliKDJh4KKjvaio0S%2F8K4xviHZuTD8JMqGIXeIpwuiBlKRYE%2FM%2B%2BTiKuxmwywbgVCS3GkRIW9y0gD0xu9jDa6%2BV7NkSxfISJswQ8t2O1DnbhXAijRSA8UZxQ1JKpuKW4CIK20VYjJ%2B726LINuVg2mENqJr3w94KX9%2FmIluThYQwuAu2Ytwd5Dsh5ilnqQwaTDj6KnEBjqkAcxpSbKEXIGH8xPlBCIw6LqCO91TB8T4f%2F%2F0U2OdEGmlJosWe7qHbHR4wNP6y3RWoUZttmj2uHZyFNtYx8JONWCD8zKBj5pT0xBf6P2O4bkDitIkorAar6eup9FKavkRROoOiGWuZHfJa0VHWqTo85tOqkyw4BWVPC%2BTGqVU5UuTdyGTSvCzYm4LyfFf9Cw%2B0xeVrhE1p2x6m5o2U%2FnRFTVwSkFE&X-Amz-Signature=8ba83f9a12a3e848e90576ed5da20fa95c30723e1179d145222c161ba222b326&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSQWALDP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwiuojv2iMpt8JVE0TT1MhLyhQTd1dl%2BTk3QRHDqnwnQIhANMtKio9eKuCmbd4o%2BUEA1ZVo7R86RpUlYtw2xgpgR7GKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwO%2FBfot6MXYZTI74Qq3ANbG2HhbOeMkWMWeyF8XsWTxWwObAy1UwEft%2BoVP7ykR%2F0A%2F%2FSzRk6N3LXrwf%2BNiKQ0dCoOv2kqyib7rO2HHr7BoQbbsODkXfKIBPBfYoc0g9bVwgsmwtsHgylcGN1QkYi9Yv2IHH%2F5qPF%2F4rK4BaqUyJA8ycM6zbw8lXLDAT70MwZjHWJ5R8Zr1sp0W8%2BHwH6z07aUZHwrRS%2Bv3ebCmLRur21cBJJQN68IXqY3WKq3ddwp8Tgw0RfmE3tkktAfQ4Z9U1c9QBkGwPo3o3WK%2F5I3m7SR4v6GDyEHo%2FJtDD5rIacLCRFsAF%2FHiBope4MYE61bx0%2BNZn2nCqOoxQVBc%2BrtuY80mq6UWkkM14jOJJuubdVV7t%2BycxFrrpby68issGkT8iRoyuE%2B2zr%2B3BAH7vVX93BiyR2vIDEPJABuFvi%2Bh976WmzutOPJyaDwtmgliKDJh4KKjvaio0S%2F8K4xviHZuTD8JMqGIXeIpwuiBlKRYE%2FM%2B%2BTiKuxmwywbgVCS3GkRIW9y0gD0xu9jDa6%2BV7NkSxfISJswQ8t2O1DnbhXAijRSA8UZxQ1JKpuKW4CIK20VYjJ%2B726LINuVg2mENqJr3w94KX9%2FmIluThYQwuAu2Ytwd5Dsh5ilnqQwaTDj6KnEBjqkAcxpSbKEXIGH8xPlBCIw6LqCO91TB8T4f%2F%2F0U2OdEGmlJosWe7qHbHR4wNP6y3RWoUZttmj2uHZyFNtYx8JONWCD8zKBj5pT0xBf6P2O4bkDitIkorAar6eup9FKavkRROoOiGWuZHfJa0VHWqTo85tOqkyw4BWVPC%2BTGqVU5UuTdyGTSvCzYm4LyfFf9Cw%2B0xeVrhE1p2x6m5o2U%2FnRFTVwSkFE&X-Amz-Signature=880fcdba120280f22cbd071e9a2c0a6c49c51a0bb282a3175439256963659f26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSQWALDP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwiuojv2iMpt8JVE0TT1MhLyhQTd1dl%2BTk3QRHDqnwnQIhANMtKio9eKuCmbd4o%2BUEA1ZVo7R86RpUlYtw2xgpgR7GKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwO%2FBfot6MXYZTI74Qq3ANbG2HhbOeMkWMWeyF8XsWTxWwObAy1UwEft%2BoVP7ykR%2F0A%2F%2FSzRk6N3LXrwf%2BNiKQ0dCoOv2kqyib7rO2HHr7BoQbbsODkXfKIBPBfYoc0g9bVwgsmwtsHgylcGN1QkYi9Yv2IHH%2F5qPF%2F4rK4BaqUyJA8ycM6zbw8lXLDAT70MwZjHWJ5R8Zr1sp0W8%2BHwH6z07aUZHwrRS%2Bv3ebCmLRur21cBJJQN68IXqY3WKq3ddwp8Tgw0RfmE3tkktAfQ4Z9U1c9QBkGwPo3o3WK%2F5I3m7SR4v6GDyEHo%2FJtDD5rIacLCRFsAF%2FHiBope4MYE61bx0%2BNZn2nCqOoxQVBc%2BrtuY80mq6UWkkM14jOJJuubdVV7t%2BycxFrrpby68issGkT8iRoyuE%2B2zr%2B3BAH7vVX93BiyR2vIDEPJABuFvi%2Bh976WmzutOPJyaDwtmgliKDJh4KKjvaio0S%2F8K4xviHZuTD8JMqGIXeIpwuiBlKRYE%2FM%2B%2BTiKuxmwywbgVCS3GkRIW9y0gD0xu9jDa6%2BV7NkSxfISJswQ8t2O1DnbhXAijRSA8UZxQ1JKpuKW4CIK20VYjJ%2B726LINuVg2mENqJr3w94KX9%2FmIluThYQwuAu2Ytwd5Dsh5ilnqQwaTDj6KnEBjqkAcxpSbKEXIGH8xPlBCIw6LqCO91TB8T4f%2F%2F0U2OdEGmlJosWe7qHbHR4wNP6y3RWoUZttmj2uHZyFNtYx8JONWCD8zKBj5pT0xBf6P2O4bkDitIkorAar6eup9FKavkRROoOiGWuZHfJa0VHWqTo85tOqkyw4BWVPC%2BTGqVU5UuTdyGTSvCzYm4LyfFf9Cw%2B0xeVrhE1p2x6m5o2U%2FnRFTVwSkFE&X-Amz-Signature=9702844dca52fbc65c639169227980a1b0053ba39aef12d6a01945520ff679a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSQWALDP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwiuojv2iMpt8JVE0TT1MhLyhQTd1dl%2BTk3QRHDqnwnQIhANMtKio9eKuCmbd4o%2BUEA1ZVo7R86RpUlYtw2xgpgR7GKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwO%2FBfot6MXYZTI74Qq3ANbG2HhbOeMkWMWeyF8XsWTxWwObAy1UwEft%2BoVP7ykR%2F0A%2F%2FSzRk6N3LXrwf%2BNiKQ0dCoOv2kqyib7rO2HHr7BoQbbsODkXfKIBPBfYoc0g9bVwgsmwtsHgylcGN1QkYi9Yv2IHH%2F5qPF%2F4rK4BaqUyJA8ycM6zbw8lXLDAT70MwZjHWJ5R8Zr1sp0W8%2BHwH6z07aUZHwrRS%2Bv3ebCmLRur21cBJJQN68IXqY3WKq3ddwp8Tgw0RfmE3tkktAfQ4Z9U1c9QBkGwPo3o3WK%2F5I3m7SR4v6GDyEHo%2FJtDD5rIacLCRFsAF%2FHiBope4MYE61bx0%2BNZn2nCqOoxQVBc%2BrtuY80mq6UWkkM14jOJJuubdVV7t%2BycxFrrpby68issGkT8iRoyuE%2B2zr%2B3BAH7vVX93BiyR2vIDEPJABuFvi%2Bh976WmzutOPJyaDwtmgliKDJh4KKjvaio0S%2F8K4xviHZuTD8JMqGIXeIpwuiBlKRYE%2FM%2B%2BTiKuxmwywbgVCS3GkRIW9y0gD0xu9jDa6%2BV7NkSxfISJswQ8t2O1DnbhXAijRSA8UZxQ1JKpuKW4CIK20VYjJ%2B726LINuVg2mENqJr3w94KX9%2FmIluThYQwuAu2Ytwd5Dsh5ilnqQwaTDj6KnEBjqkAcxpSbKEXIGH8xPlBCIw6LqCO91TB8T4f%2F%2F0U2OdEGmlJosWe7qHbHR4wNP6y3RWoUZttmj2uHZyFNtYx8JONWCD8zKBj5pT0xBf6P2O4bkDitIkorAar6eup9FKavkRROoOiGWuZHfJa0VHWqTo85tOqkyw4BWVPC%2BTGqVU5UuTdyGTSvCzYm4LyfFf9Cw%2B0xeVrhE1p2x6m5o2U%2FnRFTVwSkFE&X-Amz-Signature=54744292c380d5629c57cb63cd7cb965dd4ab953a45c5268607bb37c95f70179&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSQWALDP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwiuojv2iMpt8JVE0TT1MhLyhQTd1dl%2BTk3QRHDqnwnQIhANMtKio9eKuCmbd4o%2BUEA1ZVo7R86RpUlYtw2xgpgR7GKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwO%2FBfot6MXYZTI74Qq3ANbG2HhbOeMkWMWeyF8XsWTxWwObAy1UwEft%2BoVP7ykR%2F0A%2F%2FSzRk6N3LXrwf%2BNiKQ0dCoOv2kqyib7rO2HHr7BoQbbsODkXfKIBPBfYoc0g9bVwgsmwtsHgylcGN1QkYi9Yv2IHH%2F5qPF%2F4rK4BaqUyJA8ycM6zbw8lXLDAT70MwZjHWJ5R8Zr1sp0W8%2BHwH6z07aUZHwrRS%2Bv3ebCmLRur21cBJJQN68IXqY3WKq3ddwp8Tgw0RfmE3tkktAfQ4Z9U1c9QBkGwPo3o3WK%2F5I3m7SR4v6GDyEHo%2FJtDD5rIacLCRFsAF%2FHiBope4MYE61bx0%2BNZn2nCqOoxQVBc%2BrtuY80mq6UWkkM14jOJJuubdVV7t%2BycxFrrpby68issGkT8iRoyuE%2B2zr%2B3BAH7vVX93BiyR2vIDEPJABuFvi%2Bh976WmzutOPJyaDwtmgliKDJh4KKjvaio0S%2F8K4xviHZuTD8JMqGIXeIpwuiBlKRYE%2FM%2B%2BTiKuxmwywbgVCS3GkRIW9y0gD0xu9jDa6%2BV7NkSxfISJswQ8t2O1DnbhXAijRSA8UZxQ1JKpuKW4CIK20VYjJ%2B726LINuVg2mENqJr3w94KX9%2FmIluThYQwuAu2Ytwd5Dsh5ilnqQwaTDj6KnEBjqkAcxpSbKEXIGH8xPlBCIw6LqCO91TB8T4f%2F%2F0U2OdEGmlJosWe7qHbHR4wNP6y3RWoUZttmj2uHZyFNtYx8JONWCD8zKBj5pT0xBf6P2O4bkDitIkorAar6eup9FKavkRROoOiGWuZHfJa0VHWqTo85tOqkyw4BWVPC%2BTGqVU5UuTdyGTSvCzYm4LyfFf9Cw%2B0xeVrhE1p2x6m5o2U%2FnRFTVwSkFE&X-Amz-Signature=897e4b11b2abf8ab45ab8871ed5d8911d89c84eb83aea70b164617d8ca699d8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSQWALDP%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T210905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwiuojv2iMpt8JVE0TT1MhLyhQTd1dl%2BTk3QRHDqnwnQIhANMtKio9eKuCmbd4o%2BUEA1ZVo7R86RpUlYtw2xgpgR7GKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwO%2FBfot6MXYZTI74Qq3ANbG2HhbOeMkWMWeyF8XsWTxWwObAy1UwEft%2BoVP7ykR%2F0A%2F%2FSzRk6N3LXrwf%2BNiKQ0dCoOv2kqyib7rO2HHr7BoQbbsODkXfKIBPBfYoc0g9bVwgsmwtsHgylcGN1QkYi9Yv2IHH%2F5qPF%2F4rK4BaqUyJA8ycM6zbw8lXLDAT70MwZjHWJ5R8Zr1sp0W8%2BHwH6z07aUZHwrRS%2Bv3ebCmLRur21cBJJQN68IXqY3WKq3ddwp8Tgw0RfmE3tkktAfQ4Z9U1c9QBkGwPo3o3WK%2F5I3m7SR4v6GDyEHo%2FJtDD5rIacLCRFsAF%2FHiBope4MYE61bx0%2BNZn2nCqOoxQVBc%2BrtuY80mq6UWkkM14jOJJuubdVV7t%2BycxFrrpby68issGkT8iRoyuE%2B2zr%2B3BAH7vVX93BiyR2vIDEPJABuFvi%2Bh976WmzutOPJyaDwtmgliKDJh4KKjvaio0S%2F8K4xviHZuTD8JMqGIXeIpwuiBlKRYE%2FM%2B%2BTiKuxmwywbgVCS3GkRIW9y0gD0xu9jDa6%2BV7NkSxfISJswQ8t2O1DnbhXAijRSA8UZxQ1JKpuKW4CIK20VYjJ%2B726LINuVg2mENqJr3w94KX9%2FmIluThYQwuAu2Ytwd5Dsh5ilnqQwaTDj6KnEBjqkAcxpSbKEXIGH8xPlBCIw6LqCO91TB8T4f%2F%2F0U2OdEGmlJosWe7qHbHR4wNP6y3RWoUZttmj2uHZyFNtYx8JONWCD8zKBj5pT0xBf6P2O4bkDitIkorAar6eup9FKavkRROoOiGWuZHfJa0VHWqTo85tOqkyw4BWVPC%2BTGqVU5UuTdyGTSvCzYm4LyfFf9Cw%2B0xeVrhE1p2x6m5o2U%2FnRFTVwSkFE&X-Amz-Signature=fe41acb376c5c097026489a2eee78f3e240427858127ce997cf92b92aee4a203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
