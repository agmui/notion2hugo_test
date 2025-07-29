---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-29T16:11:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-29T16:11:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 155
toc: false
icon: ""
---

[Good video explaining slam](https://www.youtube.com/watch?v=ZaiA3hWaRzE&t=979s)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6ZXBZXP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAI%2BxqJcYyXUU0iKBUy%2BCJs3ZPu02Gh%2BFPFCddzwZmryAiBCkWcGplRGVXriCPvfWBB0ydEaIg0PTWsY8Xq6RpvYsCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwkRUM3YJum%2BCY%2FW6KtwD8MiiSMHhIag%2FY%2B8xz2aBQPS3svrzdPBEFC%2B6BShLJFtgCy%2Ftn13oj0UEvaPAD0R8IyX1YPItadOfYVr1z%2FqZZbjVXOwTaH0non%2FJarmUU3q8pgpJbmZlDWlYeQTeOBTKlaULzBHj16xSvMUaYz2RF4pvOIsEyKOHmA4eQ8MKlfMe8D9LJUiqbdxc0wrSyZws6gInxO0PmqL6Z2SfUbW3fzUvTBhKSCyMz7b2JrvpLvBqkhM8f9tCdW97GzzwK%2FuOuCZWhu6kyf7cUcV8W8FFVxSVLdmdpzuI30Ix3Bn6CKsvDA3FS2gXRuNB6C0BHkR1XG6s%2FanKYNZNUZ5ePhJIoyPK1pbnkRB%2BaBpoJTApY3dsk%2BmUOe4sm0Cgh1LpZgon8NZAdAxPYUSDwIDiw4QpBDZAn5t%2FT%2Bmgs96x3n9jVn3nDw26i8tf12wTCH3%2BOdT2NgpkWSIsl490BxO5v763L2xqIck7LCGO9x8NbcdpbkJ3zhfD4CNKJ8CppScmXnhw1ni7aRbxTLlcWiBmYx0EX5uvS7lW%2BTT3Jx8ufXbYcRfM5WjGTeQFipU8vWMldm4RZ%2Bw4RHvG23IGGea8flM82zhPTHevnokJ9Ova64kYX3GMeoEriI%2FDYi%2B5MJ0wx62kxAY6pgFcxzuIbh6C3%2Fj1aW7G7m%2Bk58KAyM3wxrByQ7HSkCGzpgdpMTFF1zutVqmJ6HEngsh37uqhT6sEqGtV2VN26AhgGVooV5nadjNSVbh74iWZTUQOo1W05ew90VUHyf1AXNRnfEPfgcYN5T3L68HmSVm%2B1QvJfhx5SrJbEq1HyxNzJreJE5N7wyY176%2B8ETTzQX5kUEJpfNso%2BKttSQaq5ppie2loZfLT&X-Amz-Signature=7116e7ae63f2d26f0849ed1562edd40a477e143ae80a1489800beee7e10b4fc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: add rviz guide of viewing scanned map

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6ZXBZXP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAI%2BxqJcYyXUU0iKBUy%2BCJs3ZPu02Gh%2BFPFCddzwZmryAiBCkWcGplRGVXriCPvfWBB0ydEaIg0PTWsY8Xq6RpvYsCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwkRUM3YJum%2BCY%2FW6KtwD8MiiSMHhIag%2FY%2B8xz2aBQPS3svrzdPBEFC%2B6BShLJFtgCy%2Ftn13oj0UEvaPAD0R8IyX1YPItadOfYVr1z%2FqZZbjVXOwTaH0non%2FJarmUU3q8pgpJbmZlDWlYeQTeOBTKlaULzBHj16xSvMUaYz2RF4pvOIsEyKOHmA4eQ8MKlfMe8D9LJUiqbdxc0wrSyZws6gInxO0PmqL6Z2SfUbW3fzUvTBhKSCyMz7b2JrvpLvBqkhM8f9tCdW97GzzwK%2FuOuCZWhu6kyf7cUcV8W8FFVxSVLdmdpzuI30Ix3Bn6CKsvDA3FS2gXRuNB6C0BHkR1XG6s%2FanKYNZNUZ5ePhJIoyPK1pbnkRB%2BaBpoJTApY3dsk%2BmUOe4sm0Cgh1LpZgon8NZAdAxPYUSDwIDiw4QpBDZAn5t%2FT%2Bmgs96x3n9jVn3nDw26i8tf12wTCH3%2BOdT2NgpkWSIsl490BxO5v763L2xqIck7LCGO9x8NbcdpbkJ3zhfD4CNKJ8CppScmXnhw1ni7aRbxTLlcWiBmYx0EX5uvS7lW%2BTT3Jx8ufXbYcRfM5WjGTeQFipU8vWMldm4RZ%2Bw4RHvG23IGGea8flM82zhPTHevnokJ9Ova64kYX3GMeoEriI%2FDYi%2B5MJ0wx62kxAY6pgFcxzuIbh6C3%2Fj1aW7G7m%2Bk58KAyM3wxrByQ7HSkCGzpgdpMTFF1zutVqmJ6HEngsh37uqhT6sEqGtV2VN26AhgGVooV5nadjNSVbh74iWZTUQOo1W05ew90VUHyf1AXNRnfEPfgcYN5T3L68HmSVm%2B1QvJfhx5SrJbEq1HyxNzJreJE5N7wyY176%2B8ETTzQX5kUEJpfNso%2BKttSQaq5ppie2loZfLT&X-Amz-Signature=94a2bc9b779bb2fb7fed116d3f2be6ac6d4f34ac99e0a9e311c3494db7514606&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6ZXBZXP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAI%2BxqJcYyXUU0iKBUy%2BCJs3ZPu02Gh%2BFPFCddzwZmryAiBCkWcGplRGVXriCPvfWBB0ydEaIg0PTWsY8Xq6RpvYsCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwkRUM3YJum%2BCY%2FW6KtwD8MiiSMHhIag%2FY%2B8xz2aBQPS3svrzdPBEFC%2B6BShLJFtgCy%2Ftn13oj0UEvaPAD0R8IyX1YPItadOfYVr1z%2FqZZbjVXOwTaH0non%2FJarmUU3q8pgpJbmZlDWlYeQTeOBTKlaULzBHj16xSvMUaYz2RF4pvOIsEyKOHmA4eQ8MKlfMe8D9LJUiqbdxc0wrSyZws6gInxO0PmqL6Z2SfUbW3fzUvTBhKSCyMz7b2JrvpLvBqkhM8f9tCdW97GzzwK%2FuOuCZWhu6kyf7cUcV8W8FFVxSVLdmdpzuI30Ix3Bn6CKsvDA3FS2gXRuNB6C0BHkR1XG6s%2FanKYNZNUZ5ePhJIoyPK1pbnkRB%2BaBpoJTApY3dsk%2BmUOe4sm0Cgh1LpZgon8NZAdAxPYUSDwIDiw4QpBDZAn5t%2FT%2Bmgs96x3n9jVn3nDw26i8tf12wTCH3%2BOdT2NgpkWSIsl490BxO5v763L2xqIck7LCGO9x8NbcdpbkJ3zhfD4CNKJ8CppScmXnhw1ni7aRbxTLlcWiBmYx0EX5uvS7lW%2BTT3Jx8ufXbYcRfM5WjGTeQFipU8vWMldm4RZ%2Bw4RHvG23IGGea8flM82zhPTHevnokJ9Ova64kYX3GMeoEriI%2FDYi%2B5MJ0wx62kxAY6pgFcxzuIbh6C3%2Fj1aW7G7m%2Bk58KAyM3wxrByQ7HSkCGzpgdpMTFF1zutVqmJ6HEngsh37uqhT6sEqGtV2VN26AhgGVooV5nadjNSVbh74iWZTUQOo1W05ew90VUHyf1AXNRnfEPfgcYN5T3L68HmSVm%2B1QvJfhx5SrJbEq1HyxNzJreJE5N7wyY176%2B8ETTzQX5kUEJpfNso%2BKttSQaq5ppie2loZfLT&X-Amz-Signature=99cd665a87ace0075a9e7ed69b3fdba6e128e3f8d3de90100307dece984d551e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

### SLAM Rviz display

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6ZXBZXP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAI%2BxqJcYyXUU0iKBUy%2BCJs3ZPu02Gh%2BFPFCddzwZmryAiBCkWcGplRGVXriCPvfWBB0ydEaIg0PTWsY8Xq6RpvYsCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwkRUM3YJum%2BCY%2FW6KtwD8MiiSMHhIag%2FY%2B8xz2aBQPS3svrzdPBEFC%2B6BShLJFtgCy%2Ftn13oj0UEvaPAD0R8IyX1YPItadOfYVr1z%2FqZZbjVXOwTaH0non%2FJarmUU3q8pgpJbmZlDWlYeQTeOBTKlaULzBHj16xSvMUaYz2RF4pvOIsEyKOHmA4eQ8MKlfMe8D9LJUiqbdxc0wrSyZws6gInxO0PmqL6Z2SfUbW3fzUvTBhKSCyMz7b2JrvpLvBqkhM8f9tCdW97GzzwK%2FuOuCZWhu6kyf7cUcV8W8FFVxSVLdmdpzuI30Ix3Bn6CKsvDA3FS2gXRuNB6C0BHkR1XG6s%2FanKYNZNUZ5ePhJIoyPK1pbnkRB%2BaBpoJTApY3dsk%2BmUOe4sm0Cgh1LpZgon8NZAdAxPYUSDwIDiw4QpBDZAn5t%2FT%2Bmgs96x3n9jVn3nDw26i8tf12wTCH3%2BOdT2NgpkWSIsl490BxO5v763L2xqIck7LCGO9x8NbcdpbkJ3zhfD4CNKJ8CppScmXnhw1ni7aRbxTLlcWiBmYx0EX5uvS7lW%2BTT3Jx8ufXbYcRfM5WjGTeQFipU8vWMldm4RZ%2Bw4RHvG23IGGea8flM82zhPTHevnokJ9Ova64kYX3GMeoEriI%2FDYi%2B5MJ0wx62kxAY6pgFcxzuIbh6C3%2Fj1aW7G7m%2Bk58KAyM3wxrByQ7HSkCGzpgdpMTFF1zutVqmJ6HEngsh37uqhT6sEqGtV2VN26AhgGVooV5nadjNSVbh74iWZTUQOo1W05ew90VUHyf1AXNRnfEPfgcYN5T3L68HmSVm%2B1QvJfhx5SrJbEq1HyxNzJreJE5N7wyY176%2B8ETTzQX5kUEJpfNso%2BKttSQaq5ppie2loZfLT&X-Amz-Signature=108e7bf9875c5e2b528d73e7f4d9e11bb0b7b724aec3a5d9cc59618bb3eb1166&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6ZXBZXP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAI%2BxqJcYyXUU0iKBUy%2BCJs3ZPu02Gh%2BFPFCddzwZmryAiBCkWcGplRGVXriCPvfWBB0ydEaIg0PTWsY8Xq6RpvYsCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwkRUM3YJum%2BCY%2FW6KtwD8MiiSMHhIag%2FY%2B8xz2aBQPS3svrzdPBEFC%2B6BShLJFtgCy%2Ftn13oj0UEvaPAD0R8IyX1YPItadOfYVr1z%2FqZZbjVXOwTaH0non%2FJarmUU3q8pgpJbmZlDWlYeQTeOBTKlaULzBHj16xSvMUaYz2RF4pvOIsEyKOHmA4eQ8MKlfMe8D9LJUiqbdxc0wrSyZws6gInxO0PmqL6Z2SfUbW3fzUvTBhKSCyMz7b2JrvpLvBqkhM8f9tCdW97GzzwK%2FuOuCZWhu6kyf7cUcV8W8FFVxSVLdmdpzuI30Ix3Bn6CKsvDA3FS2gXRuNB6C0BHkR1XG6s%2FanKYNZNUZ5ePhJIoyPK1pbnkRB%2BaBpoJTApY3dsk%2BmUOe4sm0Cgh1LpZgon8NZAdAxPYUSDwIDiw4QpBDZAn5t%2FT%2Bmgs96x3n9jVn3nDw26i8tf12wTCH3%2BOdT2NgpkWSIsl490BxO5v763L2xqIck7LCGO9x8NbcdpbkJ3zhfD4CNKJ8CppScmXnhw1ni7aRbxTLlcWiBmYx0EX5uvS7lW%2BTT3Jx8ufXbYcRfM5WjGTeQFipU8vWMldm4RZ%2Bw4RHvG23IGGea8flM82zhPTHevnokJ9Ova64kYX3GMeoEriI%2FDYi%2B5MJ0wx62kxAY6pgFcxzuIbh6C3%2Fj1aW7G7m%2Bk58KAyM3wxrByQ7HSkCGzpgdpMTFF1zutVqmJ6HEngsh37uqhT6sEqGtV2VN26AhgGVooV5nadjNSVbh74iWZTUQOo1W05ew90VUHyf1AXNRnfEPfgcYN5T3L68HmSVm%2B1QvJfhx5SrJbEq1HyxNzJreJE5N7wyY176%2B8ETTzQX5kUEJpfNso%2BKttSQaq5ppie2loZfLT&X-Amz-Signature=30ab3feb84d2e685f5cb8cf2c27691e93ac2535c8d2d0479b4fc4d908e1a9847&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6ZXBZXP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAI%2BxqJcYyXUU0iKBUy%2BCJs3ZPu02Gh%2BFPFCddzwZmryAiBCkWcGplRGVXriCPvfWBB0ydEaIg0PTWsY8Xq6RpvYsCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwkRUM3YJum%2BCY%2FW6KtwD8MiiSMHhIag%2FY%2B8xz2aBQPS3svrzdPBEFC%2B6BShLJFtgCy%2Ftn13oj0UEvaPAD0R8IyX1YPItadOfYVr1z%2FqZZbjVXOwTaH0non%2FJarmUU3q8pgpJbmZlDWlYeQTeOBTKlaULzBHj16xSvMUaYz2RF4pvOIsEyKOHmA4eQ8MKlfMe8D9LJUiqbdxc0wrSyZws6gInxO0PmqL6Z2SfUbW3fzUvTBhKSCyMz7b2JrvpLvBqkhM8f9tCdW97GzzwK%2FuOuCZWhu6kyf7cUcV8W8FFVxSVLdmdpzuI30Ix3Bn6CKsvDA3FS2gXRuNB6C0BHkR1XG6s%2FanKYNZNUZ5ePhJIoyPK1pbnkRB%2BaBpoJTApY3dsk%2BmUOe4sm0Cgh1LpZgon8NZAdAxPYUSDwIDiw4QpBDZAn5t%2FT%2Bmgs96x3n9jVn3nDw26i8tf12wTCH3%2BOdT2NgpkWSIsl490BxO5v763L2xqIck7LCGO9x8NbcdpbkJ3zhfD4CNKJ8CppScmXnhw1ni7aRbxTLlcWiBmYx0EX5uvS7lW%2BTT3Jx8ufXbYcRfM5WjGTeQFipU8vWMldm4RZ%2Bw4RHvG23IGGea8flM82zhPTHevnokJ9Ova64kYX3GMeoEriI%2FDYi%2B5MJ0wx62kxAY6pgFcxzuIbh6C3%2Fj1aW7G7m%2Bk58KAyM3wxrByQ7HSkCGzpgdpMTFF1zutVqmJ6HEngsh37uqhT6sEqGtV2VN26AhgGVooV5nadjNSVbh74iWZTUQOo1W05ew90VUHyf1AXNRnfEPfgcYN5T3L68HmSVm%2B1QvJfhx5SrJbEq1HyxNzJreJE5N7wyY176%2B8ETTzQX5kUEJpfNso%2BKttSQaq5ppie2loZfLT&X-Amz-Signature=8fea159a714edbed70ec01c368cb8d09e18c1d56cbd5d7537cdce398373031c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6ZXBZXP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAI%2BxqJcYyXUU0iKBUy%2BCJs3ZPu02Gh%2BFPFCddzwZmryAiBCkWcGplRGVXriCPvfWBB0ydEaIg0PTWsY8Xq6RpvYsCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwkRUM3YJum%2BCY%2FW6KtwD8MiiSMHhIag%2FY%2B8xz2aBQPS3svrzdPBEFC%2B6BShLJFtgCy%2Ftn13oj0UEvaPAD0R8IyX1YPItadOfYVr1z%2FqZZbjVXOwTaH0non%2FJarmUU3q8pgpJbmZlDWlYeQTeOBTKlaULzBHj16xSvMUaYz2RF4pvOIsEyKOHmA4eQ8MKlfMe8D9LJUiqbdxc0wrSyZws6gInxO0PmqL6Z2SfUbW3fzUvTBhKSCyMz7b2JrvpLvBqkhM8f9tCdW97GzzwK%2FuOuCZWhu6kyf7cUcV8W8FFVxSVLdmdpzuI30Ix3Bn6CKsvDA3FS2gXRuNB6C0BHkR1XG6s%2FanKYNZNUZ5ePhJIoyPK1pbnkRB%2BaBpoJTApY3dsk%2BmUOe4sm0Cgh1LpZgon8NZAdAxPYUSDwIDiw4QpBDZAn5t%2FT%2Bmgs96x3n9jVn3nDw26i8tf12wTCH3%2BOdT2NgpkWSIsl490BxO5v763L2xqIck7LCGO9x8NbcdpbkJ3zhfD4CNKJ8CppScmXnhw1ni7aRbxTLlcWiBmYx0EX5uvS7lW%2BTT3Jx8ufXbYcRfM5WjGTeQFipU8vWMldm4RZ%2Bw4RHvG23IGGea8flM82zhPTHevnokJ9Ova64kYX3GMeoEriI%2FDYi%2B5MJ0wx62kxAY6pgFcxzuIbh6C3%2Fj1aW7G7m%2Bk58KAyM3wxrByQ7HSkCGzpgdpMTFF1zutVqmJ6HEngsh37uqhT6sEqGtV2VN26AhgGVooV5nadjNSVbh74iWZTUQOo1W05ew90VUHyf1AXNRnfEPfgcYN5T3L68HmSVm%2B1QvJfhx5SrJbEq1HyxNzJreJE5N7wyY176%2B8ETTzQX5kUEJpfNso%2BKttSQaq5ppie2loZfLT&X-Amz-Signature=542679753a1faa25539498008faff99dbcbc4f466bea31fc8dbb66b72b959d29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

drive around with `teleop_twist_keyboard` to scan more of the map

## Updating launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6ZXBZXP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAI%2BxqJcYyXUU0iKBUy%2BCJs3ZPu02Gh%2BFPFCddzwZmryAiBCkWcGplRGVXriCPvfWBB0ydEaIg0PTWsY8Xq6RpvYsCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwkRUM3YJum%2BCY%2FW6KtwD8MiiSMHhIag%2FY%2B8xz2aBQPS3svrzdPBEFC%2B6BShLJFtgCy%2Ftn13oj0UEvaPAD0R8IyX1YPItadOfYVr1z%2FqZZbjVXOwTaH0non%2FJarmUU3q8pgpJbmZlDWlYeQTeOBTKlaULzBHj16xSvMUaYz2RF4pvOIsEyKOHmA4eQ8MKlfMe8D9LJUiqbdxc0wrSyZws6gInxO0PmqL6Z2SfUbW3fzUvTBhKSCyMz7b2JrvpLvBqkhM8f9tCdW97GzzwK%2FuOuCZWhu6kyf7cUcV8W8FFVxSVLdmdpzuI30Ix3Bn6CKsvDA3FS2gXRuNB6C0BHkR1XG6s%2FanKYNZNUZ5ePhJIoyPK1pbnkRB%2BaBpoJTApY3dsk%2BmUOe4sm0Cgh1LpZgon8NZAdAxPYUSDwIDiw4QpBDZAn5t%2FT%2Bmgs96x3n9jVn3nDw26i8tf12wTCH3%2BOdT2NgpkWSIsl490BxO5v763L2xqIck7LCGO9x8NbcdpbkJ3zhfD4CNKJ8CppScmXnhw1ni7aRbxTLlcWiBmYx0EX5uvS7lW%2BTT3Jx8ufXbYcRfM5WjGTeQFipU8vWMldm4RZ%2Bw4RHvG23IGGea8flM82zhPTHevnokJ9Ova64kYX3GMeoEriI%2FDYi%2B5MJ0wx62kxAY6pgFcxzuIbh6C3%2Fj1aW7G7m%2Bk58KAyM3wxrByQ7HSkCGzpgdpMTFF1zutVqmJ6HEngsh37uqhT6sEqGtV2VN26AhgGVooV5nadjNSVbh74iWZTUQOo1W05ew90VUHyf1AXNRnfEPfgcYN5T3L68HmSVm%2B1QvJfhx5SrJbEq1HyxNzJreJE5N7wyY176%2B8ETTzQX5kUEJpfNso%2BKttSQaq5ppie2loZfLT&X-Amz-Signature=0ca41a33611a1bddc4528067bcfec486e20decf2a394dc2af9e9fdd8856ceafe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6ZXBZXP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAI%2BxqJcYyXUU0iKBUy%2BCJs3ZPu02Gh%2BFPFCddzwZmryAiBCkWcGplRGVXriCPvfWBB0ydEaIg0PTWsY8Xq6RpvYsCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwkRUM3YJum%2BCY%2FW6KtwD8MiiSMHhIag%2FY%2B8xz2aBQPS3svrzdPBEFC%2B6BShLJFtgCy%2Ftn13oj0UEvaPAD0R8IyX1YPItadOfYVr1z%2FqZZbjVXOwTaH0non%2FJarmUU3q8pgpJbmZlDWlYeQTeOBTKlaULzBHj16xSvMUaYz2RF4pvOIsEyKOHmA4eQ8MKlfMe8D9LJUiqbdxc0wrSyZws6gInxO0PmqL6Z2SfUbW3fzUvTBhKSCyMz7b2JrvpLvBqkhM8f9tCdW97GzzwK%2FuOuCZWhu6kyf7cUcV8W8FFVxSVLdmdpzuI30Ix3Bn6CKsvDA3FS2gXRuNB6C0BHkR1XG6s%2FanKYNZNUZ5ePhJIoyPK1pbnkRB%2BaBpoJTApY3dsk%2BmUOe4sm0Cgh1LpZgon8NZAdAxPYUSDwIDiw4QpBDZAn5t%2FT%2Bmgs96x3n9jVn3nDw26i8tf12wTCH3%2BOdT2NgpkWSIsl490BxO5v763L2xqIck7LCGO9x8NbcdpbkJ3zhfD4CNKJ8CppScmXnhw1ni7aRbxTLlcWiBmYx0EX5uvS7lW%2BTT3Jx8ufXbYcRfM5WjGTeQFipU8vWMldm4RZ%2Bw4RHvG23IGGea8flM82zhPTHevnokJ9Ova64kYX3GMeoEriI%2FDYi%2B5MJ0wx62kxAY6pgFcxzuIbh6C3%2Fj1aW7G7m%2Bk58KAyM3wxrByQ7HSkCGzpgdpMTFF1zutVqmJ6HEngsh37uqhT6sEqGtV2VN26AhgGVooV5nadjNSVbh74iWZTUQOo1W05ew90VUHyf1AXNRnfEPfgcYN5T3L68HmSVm%2B1QvJfhx5SrJbEq1HyxNzJreJE5N7wyY176%2B8ETTzQX5kUEJpfNso%2BKttSQaq5ppie2loZfLT&X-Amz-Signature=9fe87c4924d19d8c57d095d3b8caa602bc48a4993c6f83380b5cafe1a5aa9978&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6ZXBZXP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAI%2BxqJcYyXUU0iKBUy%2BCJs3ZPu02Gh%2BFPFCddzwZmryAiBCkWcGplRGVXriCPvfWBB0ydEaIg0PTWsY8Xq6RpvYsCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwkRUM3YJum%2BCY%2FW6KtwD8MiiSMHhIag%2FY%2B8xz2aBQPS3svrzdPBEFC%2B6BShLJFtgCy%2Ftn13oj0UEvaPAD0R8IyX1YPItadOfYVr1z%2FqZZbjVXOwTaH0non%2FJarmUU3q8pgpJbmZlDWlYeQTeOBTKlaULzBHj16xSvMUaYz2RF4pvOIsEyKOHmA4eQ8MKlfMe8D9LJUiqbdxc0wrSyZws6gInxO0PmqL6Z2SfUbW3fzUvTBhKSCyMz7b2JrvpLvBqkhM8f9tCdW97GzzwK%2FuOuCZWhu6kyf7cUcV8W8FFVxSVLdmdpzuI30Ix3Bn6CKsvDA3FS2gXRuNB6C0BHkR1XG6s%2FanKYNZNUZ5ePhJIoyPK1pbnkRB%2BaBpoJTApY3dsk%2BmUOe4sm0Cgh1LpZgon8NZAdAxPYUSDwIDiw4QpBDZAn5t%2FT%2Bmgs96x3n9jVn3nDw26i8tf12wTCH3%2BOdT2NgpkWSIsl490BxO5v763L2xqIck7LCGO9x8NbcdpbkJ3zhfD4CNKJ8CppScmXnhw1ni7aRbxTLlcWiBmYx0EX5uvS7lW%2BTT3Jx8ufXbYcRfM5WjGTeQFipU8vWMldm4RZ%2Bw4RHvG23IGGea8flM82zhPTHevnokJ9Ova64kYX3GMeoEriI%2FDYi%2B5MJ0wx62kxAY6pgFcxzuIbh6C3%2Fj1aW7G7m%2Bk58KAyM3wxrByQ7HSkCGzpgdpMTFF1zutVqmJ6HEngsh37uqhT6sEqGtV2VN26AhgGVooV5nadjNSVbh74iWZTUQOo1W05ew90VUHyf1AXNRnfEPfgcYN5T3L68HmSVm%2B1QvJfhx5SrJbEq1HyxNzJreJE5N7wyY176%2B8ETTzQX5kUEJpfNso%2BKttSQaq5ppie2loZfLT&X-Amz-Signature=9776ebd471b5086ba5a1bd7d636fd71b30024c045f06cf5d44a627e3169bbd29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6ZXBZXP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAI%2BxqJcYyXUU0iKBUy%2BCJs3ZPu02Gh%2BFPFCddzwZmryAiBCkWcGplRGVXriCPvfWBB0ydEaIg0PTWsY8Xq6RpvYsCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwkRUM3YJum%2BCY%2FW6KtwD8MiiSMHhIag%2FY%2B8xz2aBQPS3svrzdPBEFC%2B6BShLJFtgCy%2Ftn13oj0UEvaPAD0R8IyX1YPItadOfYVr1z%2FqZZbjVXOwTaH0non%2FJarmUU3q8pgpJbmZlDWlYeQTeOBTKlaULzBHj16xSvMUaYz2RF4pvOIsEyKOHmA4eQ8MKlfMe8D9LJUiqbdxc0wrSyZws6gInxO0PmqL6Z2SfUbW3fzUvTBhKSCyMz7b2JrvpLvBqkhM8f9tCdW97GzzwK%2FuOuCZWhu6kyf7cUcV8W8FFVxSVLdmdpzuI30Ix3Bn6CKsvDA3FS2gXRuNB6C0BHkR1XG6s%2FanKYNZNUZ5ePhJIoyPK1pbnkRB%2BaBpoJTApY3dsk%2BmUOe4sm0Cgh1LpZgon8NZAdAxPYUSDwIDiw4QpBDZAn5t%2FT%2Bmgs96x3n9jVn3nDw26i8tf12wTCH3%2BOdT2NgpkWSIsl490BxO5v763L2xqIck7LCGO9x8NbcdpbkJ3zhfD4CNKJ8CppScmXnhw1ni7aRbxTLlcWiBmYx0EX5uvS7lW%2BTT3Jx8ufXbYcRfM5WjGTeQFipU8vWMldm4RZ%2Bw4RHvG23IGGea8flM82zhPTHevnokJ9Ova64kYX3GMeoEriI%2FDYi%2B5MJ0wx62kxAY6pgFcxzuIbh6C3%2Fj1aW7G7m%2Bk58KAyM3wxrByQ7HSkCGzpgdpMTFF1zutVqmJ6HEngsh37uqhT6sEqGtV2VN26AhgGVooV5nadjNSVbh74iWZTUQOo1W05ew90VUHyf1AXNRnfEPfgcYN5T3L68HmSVm%2B1QvJfhx5SrJbEq1HyxNzJreJE5N7wyY176%2B8ETTzQX5kUEJpfNso%2BKttSQaq5ppie2loZfLT&X-Amz-Signature=279260bd7ed716bf0324d01830bd7b2593c5da3c0dc80287afcedf063695b278&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6ZXBZXP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAI%2BxqJcYyXUU0iKBUy%2BCJs3ZPu02Gh%2BFPFCddzwZmryAiBCkWcGplRGVXriCPvfWBB0ydEaIg0PTWsY8Xq6RpvYsCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwkRUM3YJum%2BCY%2FW6KtwD8MiiSMHhIag%2FY%2B8xz2aBQPS3svrzdPBEFC%2B6BShLJFtgCy%2Ftn13oj0UEvaPAD0R8IyX1YPItadOfYVr1z%2FqZZbjVXOwTaH0non%2FJarmUU3q8pgpJbmZlDWlYeQTeOBTKlaULzBHj16xSvMUaYz2RF4pvOIsEyKOHmA4eQ8MKlfMe8D9LJUiqbdxc0wrSyZws6gInxO0PmqL6Z2SfUbW3fzUvTBhKSCyMz7b2JrvpLvBqkhM8f9tCdW97GzzwK%2FuOuCZWhu6kyf7cUcV8W8FFVxSVLdmdpzuI30Ix3Bn6CKsvDA3FS2gXRuNB6C0BHkR1XG6s%2FanKYNZNUZ5ePhJIoyPK1pbnkRB%2BaBpoJTApY3dsk%2BmUOe4sm0Cgh1LpZgon8NZAdAxPYUSDwIDiw4QpBDZAn5t%2FT%2Bmgs96x3n9jVn3nDw26i8tf12wTCH3%2BOdT2NgpkWSIsl490BxO5v763L2xqIck7LCGO9x8NbcdpbkJ3zhfD4CNKJ8CppScmXnhw1ni7aRbxTLlcWiBmYx0EX5uvS7lW%2BTT3Jx8ufXbYcRfM5WjGTeQFipU8vWMldm4RZ%2Bw4RHvG23IGGea8flM82zhPTHevnokJ9Ova64kYX3GMeoEriI%2FDYi%2B5MJ0wx62kxAY6pgFcxzuIbh6C3%2Fj1aW7G7m%2Bk58KAyM3wxrByQ7HSkCGzpgdpMTFF1zutVqmJ6HEngsh37uqhT6sEqGtV2VN26AhgGVooV5nadjNSVbh74iWZTUQOo1W05ew90VUHyf1AXNRnfEPfgcYN5T3L68HmSVm%2B1QvJfhx5SrJbEq1HyxNzJreJE5N7wyY176%2B8ETTzQX5kUEJpfNso%2BKttSQaq5ppie2loZfLT&X-Amz-Signature=5115da979bb060586c3d8d9e0e2889aacfad603fb05909462cd5a39fe5452ef4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6ZXBZXP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAI%2BxqJcYyXUU0iKBUy%2BCJs3ZPu02Gh%2BFPFCddzwZmryAiBCkWcGplRGVXriCPvfWBB0ydEaIg0PTWsY8Xq6RpvYsCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwkRUM3YJum%2BCY%2FW6KtwD8MiiSMHhIag%2FY%2B8xz2aBQPS3svrzdPBEFC%2B6BShLJFtgCy%2Ftn13oj0UEvaPAD0R8IyX1YPItadOfYVr1z%2FqZZbjVXOwTaH0non%2FJarmUU3q8pgpJbmZlDWlYeQTeOBTKlaULzBHj16xSvMUaYz2RF4pvOIsEyKOHmA4eQ8MKlfMe8D9LJUiqbdxc0wrSyZws6gInxO0PmqL6Z2SfUbW3fzUvTBhKSCyMz7b2JrvpLvBqkhM8f9tCdW97GzzwK%2FuOuCZWhu6kyf7cUcV8W8FFVxSVLdmdpzuI30Ix3Bn6CKsvDA3FS2gXRuNB6C0BHkR1XG6s%2FanKYNZNUZ5ePhJIoyPK1pbnkRB%2BaBpoJTApY3dsk%2BmUOe4sm0Cgh1LpZgon8NZAdAxPYUSDwIDiw4QpBDZAn5t%2FT%2Bmgs96x3n9jVn3nDw26i8tf12wTCH3%2BOdT2NgpkWSIsl490BxO5v763L2xqIck7LCGO9x8NbcdpbkJ3zhfD4CNKJ8CppScmXnhw1ni7aRbxTLlcWiBmYx0EX5uvS7lW%2BTT3Jx8ufXbYcRfM5WjGTeQFipU8vWMldm4RZ%2Bw4RHvG23IGGea8flM82zhPTHevnokJ9Ova64kYX3GMeoEriI%2FDYi%2B5MJ0wx62kxAY6pgFcxzuIbh6C3%2Fj1aW7G7m%2Bk58KAyM3wxrByQ7HSkCGzpgdpMTFF1zutVqmJ6HEngsh37uqhT6sEqGtV2VN26AhgGVooV5nadjNSVbh74iWZTUQOo1W05ew90VUHyf1AXNRnfEPfgcYN5T3L68HmSVm%2B1QvJfhx5SrJbEq1HyxNzJreJE5N7wyY176%2B8ETTzQX5kUEJpfNso%2BKttSQaq5ppie2loZfLT&X-Amz-Signature=2d1b57b98b9775dd6164d1f1e66cd8cea53ea09069d07b973d0833e88e1390ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6ZXBZXP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T201111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAI%2BxqJcYyXUU0iKBUy%2BCJs3ZPu02Gh%2BFPFCddzwZmryAiBCkWcGplRGVXriCPvfWBB0ydEaIg0PTWsY8Xq6RpvYsCqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwkRUM3YJum%2BCY%2FW6KtwD8MiiSMHhIag%2FY%2B8xz2aBQPS3svrzdPBEFC%2B6BShLJFtgCy%2Ftn13oj0UEvaPAD0R8IyX1YPItadOfYVr1z%2FqZZbjVXOwTaH0non%2FJarmUU3q8pgpJbmZlDWlYeQTeOBTKlaULzBHj16xSvMUaYz2RF4pvOIsEyKOHmA4eQ8MKlfMe8D9LJUiqbdxc0wrSyZws6gInxO0PmqL6Z2SfUbW3fzUvTBhKSCyMz7b2JrvpLvBqkhM8f9tCdW97GzzwK%2FuOuCZWhu6kyf7cUcV8W8FFVxSVLdmdpzuI30Ix3Bn6CKsvDA3FS2gXRuNB6C0BHkR1XG6s%2FanKYNZNUZ5ePhJIoyPK1pbnkRB%2BaBpoJTApY3dsk%2BmUOe4sm0Cgh1LpZgon8NZAdAxPYUSDwIDiw4QpBDZAn5t%2FT%2Bmgs96x3n9jVn3nDw26i8tf12wTCH3%2BOdT2NgpkWSIsl490BxO5v763L2xqIck7LCGO9x8NbcdpbkJ3zhfD4CNKJ8CppScmXnhw1ni7aRbxTLlcWiBmYx0EX5uvS7lW%2BTT3Jx8ufXbYcRfM5WjGTeQFipU8vWMldm4RZ%2Bw4RHvG23IGGea8flM82zhPTHevnokJ9Ova64kYX3GMeoEriI%2FDYi%2B5MJ0wx62kxAY6pgFcxzuIbh6C3%2Fj1aW7G7m%2Bk58KAyM3wxrByQ7HSkCGzpgdpMTFF1zutVqmJ6HEngsh37uqhT6sEqGtV2VN26AhgGVooV5nadjNSVbh74iWZTUQOo1W05ew90VUHyf1AXNRnfEPfgcYN5T3L68HmSVm%2B1QvJfhx5SrJbEq1HyxNzJreJE5N7wyY176%2B8ETTzQX5kUEJpfNso%2BKttSQaq5ppie2loZfLT&X-Amz-Signature=9731cfff3f5a0d0730261cfdd1043c537249c9ca53d7842c987790f935be2d22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
