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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5R2E2MJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCj3TNcz9Cye9OUFU4FYbuXg%2BuPZJx5l0LvLlZU%2FmcuAiBBCXVD2r85UnPURHuYDGnY21Nc%2BIds3DgtnO6%2FZFqs6yqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxSTrwQnH2hSw62JHKtwDvfCXIOHTX9B8WstTR0StL%2BPbOEDh2%2FgH%2BuOBNUaqiXYGX4m3p%2F5o6z3t7pbxItCy4D1K38Y%2FCBApvzLFEFDeedWZPkGt9rtL2pReDmDRKpCCbf%2FsUbdndOlVNsybjuQaQlKP2IaWHfCdCv%2Fc6OZGgQV%2FwY8oopXgsPcT5iIieq6s3Tx4QmMTpGH9AAQQ%2B6hXmbHn3TL9me1jag%2B5t1rc%2FUkBapVC8c5NCbjaJMbRI%2FT%2F%2BmI%2BDJOivMQ0IxaG2ikYthp7Q4xJSFbIhg2vrZ82qoMIklID4b4%2F2ESNuBAT74qAdTYUsrW2rIKkcZzUY4F49wJe5k0bJ%2BDX3COEiC1K6tOWBOw5n2hEI2T%2BAj6DMvzaob4oyXkrSOjkxyGgK%2BxMvFUujja4juK4%2F%2FPNlLru72lcPCeNeF%2BXSnQHoWXGYCo9OXolNQoZojtBUywFe5MLwQSjWApNFc39pW4xPCjXViI50mYj3%2BQide1%2BlvQ1DHG%2FLrkDqmToYdBfh5uoMLfpGTKYftDQsWML5EGb39HZcdphBEbQL7AYVib1ah8rnzA2keGhgzSH0bqMcuI7ZIRSZSVe%2Fg%2FLmePtH3yKBDVahBZpZAxbnJW1MyYbE3tPVPUSeXiXp6uRGJh3Qi4w49ykxAY6pgF0tEm3tNV%2FPREA8WSHvyHwJDkvBCIfJfRThB3y2C0ZdGZdhHfw1zM2E%2BwCiKISmljbxhvAPQ6d3TmTrXKhOdtrAC4xajfR5xUjn9pGfBaU3CrglCQubFmBMuQhv7045tzHKf9IdMwmllRc8ib9bf6eXuXTkOHwZ4w7kUYfCRwiQQgRClmJYYYfrb%2FvJ%2FtCuhTE2mu%2FboY72rn3yRYKuPNxol%2FxEy52&X-Amz-Signature=c634089a07d0f338c951063cd0a138a2f5e7762713fbe1a6e90670719eb96585&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5R2E2MJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCj3TNcz9Cye9OUFU4FYbuXg%2BuPZJx5l0LvLlZU%2FmcuAiBBCXVD2r85UnPURHuYDGnY21Nc%2BIds3DgtnO6%2FZFqs6yqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxSTrwQnH2hSw62JHKtwDvfCXIOHTX9B8WstTR0StL%2BPbOEDh2%2FgH%2BuOBNUaqiXYGX4m3p%2F5o6z3t7pbxItCy4D1K38Y%2FCBApvzLFEFDeedWZPkGt9rtL2pReDmDRKpCCbf%2FsUbdndOlVNsybjuQaQlKP2IaWHfCdCv%2Fc6OZGgQV%2FwY8oopXgsPcT5iIieq6s3Tx4QmMTpGH9AAQQ%2B6hXmbHn3TL9me1jag%2B5t1rc%2FUkBapVC8c5NCbjaJMbRI%2FT%2F%2BmI%2BDJOivMQ0IxaG2ikYthp7Q4xJSFbIhg2vrZ82qoMIklID4b4%2F2ESNuBAT74qAdTYUsrW2rIKkcZzUY4F49wJe5k0bJ%2BDX3COEiC1K6tOWBOw5n2hEI2T%2BAj6DMvzaob4oyXkrSOjkxyGgK%2BxMvFUujja4juK4%2F%2FPNlLru72lcPCeNeF%2BXSnQHoWXGYCo9OXolNQoZojtBUywFe5MLwQSjWApNFc39pW4xPCjXViI50mYj3%2BQide1%2BlvQ1DHG%2FLrkDqmToYdBfh5uoMLfpGTKYftDQsWML5EGb39HZcdphBEbQL7AYVib1ah8rnzA2keGhgzSH0bqMcuI7ZIRSZSVe%2Fg%2FLmePtH3yKBDVahBZpZAxbnJW1MyYbE3tPVPUSeXiXp6uRGJh3Qi4w49ykxAY6pgF0tEm3tNV%2FPREA8WSHvyHwJDkvBCIfJfRThB3y2C0ZdGZdhHfw1zM2E%2BwCiKISmljbxhvAPQ6d3TmTrXKhOdtrAC4xajfR5xUjn9pGfBaU3CrglCQubFmBMuQhv7045tzHKf9IdMwmllRc8ib9bf6eXuXTkOHwZ4w7kUYfCRwiQQgRClmJYYYfrb%2FvJ%2FtCuhTE2mu%2FboY72rn3yRYKuPNxol%2FxEy52&X-Amz-Signature=6dce02580b82ebf265e6e2978a5b87bf03c6d350fa1d8e3313aa8d6c375db899&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5R2E2MJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCj3TNcz9Cye9OUFU4FYbuXg%2BuPZJx5l0LvLlZU%2FmcuAiBBCXVD2r85UnPURHuYDGnY21Nc%2BIds3DgtnO6%2FZFqs6yqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxSTrwQnH2hSw62JHKtwDvfCXIOHTX9B8WstTR0StL%2BPbOEDh2%2FgH%2BuOBNUaqiXYGX4m3p%2F5o6z3t7pbxItCy4D1K38Y%2FCBApvzLFEFDeedWZPkGt9rtL2pReDmDRKpCCbf%2FsUbdndOlVNsybjuQaQlKP2IaWHfCdCv%2Fc6OZGgQV%2FwY8oopXgsPcT5iIieq6s3Tx4QmMTpGH9AAQQ%2B6hXmbHn3TL9me1jag%2B5t1rc%2FUkBapVC8c5NCbjaJMbRI%2FT%2F%2BmI%2BDJOivMQ0IxaG2ikYthp7Q4xJSFbIhg2vrZ82qoMIklID4b4%2F2ESNuBAT74qAdTYUsrW2rIKkcZzUY4F49wJe5k0bJ%2BDX3COEiC1K6tOWBOw5n2hEI2T%2BAj6DMvzaob4oyXkrSOjkxyGgK%2BxMvFUujja4juK4%2F%2FPNlLru72lcPCeNeF%2BXSnQHoWXGYCo9OXolNQoZojtBUywFe5MLwQSjWApNFc39pW4xPCjXViI50mYj3%2BQide1%2BlvQ1DHG%2FLrkDqmToYdBfh5uoMLfpGTKYftDQsWML5EGb39HZcdphBEbQL7AYVib1ah8rnzA2keGhgzSH0bqMcuI7ZIRSZSVe%2Fg%2FLmePtH3yKBDVahBZpZAxbnJW1MyYbE3tPVPUSeXiXp6uRGJh3Qi4w49ykxAY6pgF0tEm3tNV%2FPREA8WSHvyHwJDkvBCIfJfRThB3y2C0ZdGZdhHfw1zM2E%2BwCiKISmljbxhvAPQ6d3TmTrXKhOdtrAC4xajfR5xUjn9pGfBaU3CrglCQubFmBMuQhv7045tzHKf9IdMwmllRc8ib9bf6eXuXTkOHwZ4w7kUYfCRwiQQgRClmJYYYfrb%2FvJ%2FtCuhTE2mu%2FboY72rn3yRYKuPNxol%2FxEy52&X-Amz-Signature=89a2251b2378ed48ee9f08d0d97199584f59b427ba30562c0603bdbb6b6b00cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5R2E2MJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCj3TNcz9Cye9OUFU4FYbuXg%2BuPZJx5l0LvLlZU%2FmcuAiBBCXVD2r85UnPURHuYDGnY21Nc%2BIds3DgtnO6%2FZFqs6yqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxSTrwQnH2hSw62JHKtwDvfCXIOHTX9B8WstTR0StL%2BPbOEDh2%2FgH%2BuOBNUaqiXYGX4m3p%2F5o6z3t7pbxItCy4D1K38Y%2FCBApvzLFEFDeedWZPkGt9rtL2pReDmDRKpCCbf%2FsUbdndOlVNsybjuQaQlKP2IaWHfCdCv%2Fc6OZGgQV%2FwY8oopXgsPcT5iIieq6s3Tx4QmMTpGH9AAQQ%2B6hXmbHn3TL9me1jag%2B5t1rc%2FUkBapVC8c5NCbjaJMbRI%2FT%2F%2BmI%2BDJOivMQ0IxaG2ikYthp7Q4xJSFbIhg2vrZ82qoMIklID4b4%2F2ESNuBAT74qAdTYUsrW2rIKkcZzUY4F49wJe5k0bJ%2BDX3COEiC1K6tOWBOw5n2hEI2T%2BAj6DMvzaob4oyXkrSOjkxyGgK%2BxMvFUujja4juK4%2F%2FPNlLru72lcPCeNeF%2BXSnQHoWXGYCo9OXolNQoZojtBUywFe5MLwQSjWApNFc39pW4xPCjXViI50mYj3%2BQide1%2BlvQ1DHG%2FLrkDqmToYdBfh5uoMLfpGTKYftDQsWML5EGb39HZcdphBEbQL7AYVib1ah8rnzA2keGhgzSH0bqMcuI7ZIRSZSVe%2Fg%2FLmePtH3yKBDVahBZpZAxbnJW1MyYbE3tPVPUSeXiXp6uRGJh3Qi4w49ykxAY6pgF0tEm3tNV%2FPREA8WSHvyHwJDkvBCIfJfRThB3y2C0ZdGZdhHfw1zM2E%2BwCiKISmljbxhvAPQ6d3TmTrXKhOdtrAC4xajfR5xUjn9pGfBaU3CrglCQubFmBMuQhv7045tzHKf9IdMwmllRc8ib9bf6eXuXTkOHwZ4w7kUYfCRwiQQgRClmJYYYfrb%2FvJ%2FtCuhTE2mu%2FboY72rn3yRYKuPNxol%2FxEy52&X-Amz-Signature=c8ba5748825868b08903f94ae9008aea2c4b1d360d040699567440fc71a30b82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5R2E2MJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCj3TNcz9Cye9OUFU4FYbuXg%2BuPZJx5l0LvLlZU%2FmcuAiBBCXVD2r85UnPURHuYDGnY21Nc%2BIds3DgtnO6%2FZFqs6yqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxSTrwQnH2hSw62JHKtwDvfCXIOHTX9B8WstTR0StL%2BPbOEDh2%2FgH%2BuOBNUaqiXYGX4m3p%2F5o6z3t7pbxItCy4D1K38Y%2FCBApvzLFEFDeedWZPkGt9rtL2pReDmDRKpCCbf%2FsUbdndOlVNsybjuQaQlKP2IaWHfCdCv%2Fc6OZGgQV%2FwY8oopXgsPcT5iIieq6s3Tx4QmMTpGH9AAQQ%2B6hXmbHn3TL9me1jag%2B5t1rc%2FUkBapVC8c5NCbjaJMbRI%2FT%2F%2BmI%2BDJOivMQ0IxaG2ikYthp7Q4xJSFbIhg2vrZ82qoMIklID4b4%2F2ESNuBAT74qAdTYUsrW2rIKkcZzUY4F49wJe5k0bJ%2BDX3COEiC1K6tOWBOw5n2hEI2T%2BAj6DMvzaob4oyXkrSOjkxyGgK%2BxMvFUujja4juK4%2F%2FPNlLru72lcPCeNeF%2BXSnQHoWXGYCo9OXolNQoZojtBUywFe5MLwQSjWApNFc39pW4xPCjXViI50mYj3%2BQide1%2BlvQ1DHG%2FLrkDqmToYdBfh5uoMLfpGTKYftDQsWML5EGb39HZcdphBEbQL7AYVib1ah8rnzA2keGhgzSH0bqMcuI7ZIRSZSVe%2Fg%2FLmePtH3yKBDVahBZpZAxbnJW1MyYbE3tPVPUSeXiXp6uRGJh3Qi4w49ykxAY6pgF0tEm3tNV%2FPREA8WSHvyHwJDkvBCIfJfRThB3y2C0ZdGZdhHfw1zM2E%2BwCiKISmljbxhvAPQ6d3TmTrXKhOdtrAC4xajfR5xUjn9pGfBaU3CrglCQubFmBMuQhv7045tzHKf9IdMwmllRc8ib9bf6eXuXTkOHwZ4w7kUYfCRwiQQgRClmJYYYfrb%2FvJ%2FtCuhTE2mu%2FboY72rn3yRYKuPNxol%2FxEy52&X-Amz-Signature=a138fcf7cc2d5eb6c9d8af8cf91b460614ad62c54bc1a85437d32321c985699b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5R2E2MJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCj3TNcz9Cye9OUFU4FYbuXg%2BuPZJx5l0LvLlZU%2FmcuAiBBCXVD2r85UnPURHuYDGnY21Nc%2BIds3DgtnO6%2FZFqs6yqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxSTrwQnH2hSw62JHKtwDvfCXIOHTX9B8WstTR0StL%2BPbOEDh2%2FgH%2BuOBNUaqiXYGX4m3p%2F5o6z3t7pbxItCy4D1K38Y%2FCBApvzLFEFDeedWZPkGt9rtL2pReDmDRKpCCbf%2FsUbdndOlVNsybjuQaQlKP2IaWHfCdCv%2Fc6OZGgQV%2FwY8oopXgsPcT5iIieq6s3Tx4QmMTpGH9AAQQ%2B6hXmbHn3TL9me1jag%2B5t1rc%2FUkBapVC8c5NCbjaJMbRI%2FT%2F%2BmI%2BDJOivMQ0IxaG2ikYthp7Q4xJSFbIhg2vrZ82qoMIklID4b4%2F2ESNuBAT74qAdTYUsrW2rIKkcZzUY4F49wJe5k0bJ%2BDX3COEiC1K6tOWBOw5n2hEI2T%2BAj6DMvzaob4oyXkrSOjkxyGgK%2BxMvFUujja4juK4%2F%2FPNlLru72lcPCeNeF%2BXSnQHoWXGYCo9OXolNQoZojtBUywFe5MLwQSjWApNFc39pW4xPCjXViI50mYj3%2BQide1%2BlvQ1DHG%2FLrkDqmToYdBfh5uoMLfpGTKYftDQsWML5EGb39HZcdphBEbQL7AYVib1ah8rnzA2keGhgzSH0bqMcuI7ZIRSZSVe%2Fg%2FLmePtH3yKBDVahBZpZAxbnJW1MyYbE3tPVPUSeXiXp6uRGJh3Qi4w49ykxAY6pgF0tEm3tNV%2FPREA8WSHvyHwJDkvBCIfJfRThB3y2C0ZdGZdhHfw1zM2E%2BwCiKISmljbxhvAPQ6d3TmTrXKhOdtrAC4xajfR5xUjn9pGfBaU3CrglCQubFmBMuQhv7045tzHKf9IdMwmllRc8ib9bf6eXuXTkOHwZ4w7kUYfCRwiQQgRClmJYYYfrb%2FvJ%2FtCuhTE2mu%2FboY72rn3yRYKuPNxol%2FxEy52&X-Amz-Signature=1da18f8ae15df499f42617a2c5d93555522042c56cfe3bc75f681aa3c30d98ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5R2E2MJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCj3TNcz9Cye9OUFU4FYbuXg%2BuPZJx5l0LvLlZU%2FmcuAiBBCXVD2r85UnPURHuYDGnY21Nc%2BIds3DgtnO6%2FZFqs6yqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxSTrwQnH2hSw62JHKtwDvfCXIOHTX9B8WstTR0StL%2BPbOEDh2%2FgH%2BuOBNUaqiXYGX4m3p%2F5o6z3t7pbxItCy4D1K38Y%2FCBApvzLFEFDeedWZPkGt9rtL2pReDmDRKpCCbf%2FsUbdndOlVNsybjuQaQlKP2IaWHfCdCv%2Fc6OZGgQV%2FwY8oopXgsPcT5iIieq6s3Tx4QmMTpGH9AAQQ%2B6hXmbHn3TL9me1jag%2B5t1rc%2FUkBapVC8c5NCbjaJMbRI%2FT%2F%2BmI%2BDJOivMQ0IxaG2ikYthp7Q4xJSFbIhg2vrZ82qoMIklID4b4%2F2ESNuBAT74qAdTYUsrW2rIKkcZzUY4F49wJe5k0bJ%2BDX3COEiC1K6tOWBOw5n2hEI2T%2BAj6DMvzaob4oyXkrSOjkxyGgK%2BxMvFUujja4juK4%2F%2FPNlLru72lcPCeNeF%2BXSnQHoWXGYCo9OXolNQoZojtBUywFe5MLwQSjWApNFc39pW4xPCjXViI50mYj3%2BQide1%2BlvQ1DHG%2FLrkDqmToYdBfh5uoMLfpGTKYftDQsWML5EGb39HZcdphBEbQL7AYVib1ah8rnzA2keGhgzSH0bqMcuI7ZIRSZSVe%2Fg%2FLmePtH3yKBDVahBZpZAxbnJW1MyYbE3tPVPUSeXiXp6uRGJh3Qi4w49ykxAY6pgF0tEm3tNV%2FPREA8WSHvyHwJDkvBCIfJfRThB3y2C0ZdGZdhHfw1zM2E%2BwCiKISmljbxhvAPQ6d3TmTrXKhOdtrAC4xajfR5xUjn9pGfBaU3CrglCQubFmBMuQhv7045tzHKf9IdMwmllRc8ib9bf6eXuXTkOHwZ4w7kUYfCRwiQQgRClmJYYYfrb%2FvJ%2FtCuhTE2mu%2FboY72rn3yRYKuPNxol%2FxEy52&X-Amz-Signature=19df37a7c28efa2b2f61e431e719fa2eefcf66971dabd394728a00be8802bf48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

drive around with `teleop_twist_keyboard` to scan more of the map

## Updating launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5R2E2MJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCj3TNcz9Cye9OUFU4FYbuXg%2BuPZJx5l0LvLlZU%2FmcuAiBBCXVD2r85UnPURHuYDGnY21Nc%2BIds3DgtnO6%2FZFqs6yqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxSTrwQnH2hSw62JHKtwDvfCXIOHTX9B8WstTR0StL%2BPbOEDh2%2FgH%2BuOBNUaqiXYGX4m3p%2F5o6z3t7pbxItCy4D1K38Y%2FCBApvzLFEFDeedWZPkGt9rtL2pReDmDRKpCCbf%2FsUbdndOlVNsybjuQaQlKP2IaWHfCdCv%2Fc6OZGgQV%2FwY8oopXgsPcT5iIieq6s3Tx4QmMTpGH9AAQQ%2B6hXmbHn3TL9me1jag%2B5t1rc%2FUkBapVC8c5NCbjaJMbRI%2FT%2F%2BmI%2BDJOivMQ0IxaG2ikYthp7Q4xJSFbIhg2vrZ82qoMIklID4b4%2F2ESNuBAT74qAdTYUsrW2rIKkcZzUY4F49wJe5k0bJ%2BDX3COEiC1K6tOWBOw5n2hEI2T%2BAj6DMvzaob4oyXkrSOjkxyGgK%2BxMvFUujja4juK4%2F%2FPNlLru72lcPCeNeF%2BXSnQHoWXGYCo9OXolNQoZojtBUywFe5MLwQSjWApNFc39pW4xPCjXViI50mYj3%2BQide1%2BlvQ1DHG%2FLrkDqmToYdBfh5uoMLfpGTKYftDQsWML5EGb39HZcdphBEbQL7AYVib1ah8rnzA2keGhgzSH0bqMcuI7ZIRSZSVe%2Fg%2FLmePtH3yKBDVahBZpZAxbnJW1MyYbE3tPVPUSeXiXp6uRGJh3Qi4w49ykxAY6pgF0tEm3tNV%2FPREA8WSHvyHwJDkvBCIfJfRThB3y2C0ZdGZdhHfw1zM2E%2BwCiKISmljbxhvAPQ6d3TmTrXKhOdtrAC4xajfR5xUjn9pGfBaU3CrglCQubFmBMuQhv7045tzHKf9IdMwmllRc8ib9bf6eXuXTkOHwZ4w7kUYfCRwiQQgRClmJYYYfrb%2FvJ%2FtCuhTE2mu%2FboY72rn3yRYKuPNxol%2FxEy52&X-Amz-Signature=c7a8706d13648d561a6ed64824621355d9f4d81e16bea4a852a6995c49c46f92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5R2E2MJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCj3TNcz9Cye9OUFU4FYbuXg%2BuPZJx5l0LvLlZU%2FmcuAiBBCXVD2r85UnPURHuYDGnY21Nc%2BIds3DgtnO6%2FZFqs6yqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxSTrwQnH2hSw62JHKtwDvfCXIOHTX9B8WstTR0StL%2BPbOEDh2%2FgH%2BuOBNUaqiXYGX4m3p%2F5o6z3t7pbxItCy4D1K38Y%2FCBApvzLFEFDeedWZPkGt9rtL2pReDmDRKpCCbf%2FsUbdndOlVNsybjuQaQlKP2IaWHfCdCv%2Fc6OZGgQV%2FwY8oopXgsPcT5iIieq6s3Tx4QmMTpGH9AAQQ%2B6hXmbHn3TL9me1jag%2B5t1rc%2FUkBapVC8c5NCbjaJMbRI%2FT%2F%2BmI%2BDJOivMQ0IxaG2ikYthp7Q4xJSFbIhg2vrZ82qoMIklID4b4%2F2ESNuBAT74qAdTYUsrW2rIKkcZzUY4F49wJe5k0bJ%2BDX3COEiC1K6tOWBOw5n2hEI2T%2BAj6DMvzaob4oyXkrSOjkxyGgK%2BxMvFUujja4juK4%2F%2FPNlLru72lcPCeNeF%2BXSnQHoWXGYCo9OXolNQoZojtBUywFe5MLwQSjWApNFc39pW4xPCjXViI50mYj3%2BQide1%2BlvQ1DHG%2FLrkDqmToYdBfh5uoMLfpGTKYftDQsWML5EGb39HZcdphBEbQL7AYVib1ah8rnzA2keGhgzSH0bqMcuI7ZIRSZSVe%2Fg%2FLmePtH3yKBDVahBZpZAxbnJW1MyYbE3tPVPUSeXiXp6uRGJh3Qi4w49ykxAY6pgF0tEm3tNV%2FPREA8WSHvyHwJDkvBCIfJfRThB3y2C0ZdGZdhHfw1zM2E%2BwCiKISmljbxhvAPQ6d3TmTrXKhOdtrAC4xajfR5xUjn9pGfBaU3CrglCQubFmBMuQhv7045tzHKf9IdMwmllRc8ib9bf6eXuXTkOHwZ4w7kUYfCRwiQQgRClmJYYYfrb%2FvJ%2FtCuhTE2mu%2FboY72rn3yRYKuPNxol%2FxEy52&X-Amz-Signature=2b0701792cf1e0d14320f36f883bd45da56f55993e69828cab8ae2b69996aa12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5R2E2MJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCj3TNcz9Cye9OUFU4FYbuXg%2BuPZJx5l0LvLlZU%2FmcuAiBBCXVD2r85UnPURHuYDGnY21Nc%2BIds3DgtnO6%2FZFqs6yqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxSTrwQnH2hSw62JHKtwDvfCXIOHTX9B8WstTR0StL%2BPbOEDh2%2FgH%2BuOBNUaqiXYGX4m3p%2F5o6z3t7pbxItCy4D1K38Y%2FCBApvzLFEFDeedWZPkGt9rtL2pReDmDRKpCCbf%2FsUbdndOlVNsybjuQaQlKP2IaWHfCdCv%2Fc6OZGgQV%2FwY8oopXgsPcT5iIieq6s3Tx4QmMTpGH9AAQQ%2B6hXmbHn3TL9me1jag%2B5t1rc%2FUkBapVC8c5NCbjaJMbRI%2FT%2F%2BmI%2BDJOivMQ0IxaG2ikYthp7Q4xJSFbIhg2vrZ82qoMIklID4b4%2F2ESNuBAT74qAdTYUsrW2rIKkcZzUY4F49wJe5k0bJ%2BDX3COEiC1K6tOWBOw5n2hEI2T%2BAj6DMvzaob4oyXkrSOjkxyGgK%2BxMvFUujja4juK4%2F%2FPNlLru72lcPCeNeF%2BXSnQHoWXGYCo9OXolNQoZojtBUywFe5MLwQSjWApNFc39pW4xPCjXViI50mYj3%2BQide1%2BlvQ1DHG%2FLrkDqmToYdBfh5uoMLfpGTKYftDQsWML5EGb39HZcdphBEbQL7AYVib1ah8rnzA2keGhgzSH0bqMcuI7ZIRSZSVe%2Fg%2FLmePtH3yKBDVahBZpZAxbnJW1MyYbE3tPVPUSeXiXp6uRGJh3Qi4w49ykxAY6pgF0tEm3tNV%2FPREA8WSHvyHwJDkvBCIfJfRThB3y2C0ZdGZdhHfw1zM2E%2BwCiKISmljbxhvAPQ6d3TmTrXKhOdtrAC4xajfR5xUjn9pGfBaU3CrglCQubFmBMuQhv7045tzHKf9IdMwmllRc8ib9bf6eXuXTkOHwZ4w7kUYfCRwiQQgRClmJYYYfrb%2FvJ%2FtCuhTE2mu%2FboY72rn3yRYKuPNxol%2FxEy52&X-Amz-Signature=cb57cc28659f44c591aea76c4b93025d1e1700291e5bcb31ef404983f41722ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5R2E2MJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCj3TNcz9Cye9OUFU4FYbuXg%2BuPZJx5l0LvLlZU%2FmcuAiBBCXVD2r85UnPURHuYDGnY21Nc%2BIds3DgtnO6%2FZFqs6yqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxSTrwQnH2hSw62JHKtwDvfCXIOHTX9B8WstTR0StL%2BPbOEDh2%2FgH%2BuOBNUaqiXYGX4m3p%2F5o6z3t7pbxItCy4D1K38Y%2FCBApvzLFEFDeedWZPkGt9rtL2pReDmDRKpCCbf%2FsUbdndOlVNsybjuQaQlKP2IaWHfCdCv%2Fc6OZGgQV%2FwY8oopXgsPcT5iIieq6s3Tx4QmMTpGH9AAQQ%2B6hXmbHn3TL9me1jag%2B5t1rc%2FUkBapVC8c5NCbjaJMbRI%2FT%2F%2BmI%2BDJOivMQ0IxaG2ikYthp7Q4xJSFbIhg2vrZ82qoMIklID4b4%2F2ESNuBAT74qAdTYUsrW2rIKkcZzUY4F49wJe5k0bJ%2BDX3COEiC1K6tOWBOw5n2hEI2T%2BAj6DMvzaob4oyXkrSOjkxyGgK%2BxMvFUujja4juK4%2F%2FPNlLru72lcPCeNeF%2BXSnQHoWXGYCo9OXolNQoZojtBUywFe5MLwQSjWApNFc39pW4xPCjXViI50mYj3%2BQide1%2BlvQ1DHG%2FLrkDqmToYdBfh5uoMLfpGTKYftDQsWML5EGb39HZcdphBEbQL7AYVib1ah8rnzA2keGhgzSH0bqMcuI7ZIRSZSVe%2Fg%2FLmePtH3yKBDVahBZpZAxbnJW1MyYbE3tPVPUSeXiXp6uRGJh3Qi4w49ykxAY6pgF0tEm3tNV%2FPREA8WSHvyHwJDkvBCIfJfRThB3y2C0ZdGZdhHfw1zM2E%2BwCiKISmljbxhvAPQ6d3TmTrXKhOdtrAC4xajfR5xUjn9pGfBaU3CrglCQubFmBMuQhv7045tzHKf9IdMwmllRc8ib9bf6eXuXTkOHwZ4w7kUYfCRwiQQgRClmJYYYfrb%2FvJ%2FtCuhTE2mu%2FboY72rn3yRYKuPNxol%2FxEy52&X-Amz-Signature=920dada393035465f8434d1e220d5ce24013156a7afdc4aa7db3dff8c88f96d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5R2E2MJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCj3TNcz9Cye9OUFU4FYbuXg%2BuPZJx5l0LvLlZU%2FmcuAiBBCXVD2r85UnPURHuYDGnY21Nc%2BIds3DgtnO6%2FZFqs6yqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxSTrwQnH2hSw62JHKtwDvfCXIOHTX9B8WstTR0StL%2BPbOEDh2%2FgH%2BuOBNUaqiXYGX4m3p%2F5o6z3t7pbxItCy4D1K38Y%2FCBApvzLFEFDeedWZPkGt9rtL2pReDmDRKpCCbf%2FsUbdndOlVNsybjuQaQlKP2IaWHfCdCv%2Fc6OZGgQV%2FwY8oopXgsPcT5iIieq6s3Tx4QmMTpGH9AAQQ%2B6hXmbHn3TL9me1jag%2B5t1rc%2FUkBapVC8c5NCbjaJMbRI%2FT%2F%2BmI%2BDJOivMQ0IxaG2ikYthp7Q4xJSFbIhg2vrZ82qoMIklID4b4%2F2ESNuBAT74qAdTYUsrW2rIKkcZzUY4F49wJe5k0bJ%2BDX3COEiC1K6tOWBOw5n2hEI2T%2BAj6DMvzaob4oyXkrSOjkxyGgK%2BxMvFUujja4juK4%2F%2FPNlLru72lcPCeNeF%2BXSnQHoWXGYCo9OXolNQoZojtBUywFe5MLwQSjWApNFc39pW4xPCjXViI50mYj3%2BQide1%2BlvQ1DHG%2FLrkDqmToYdBfh5uoMLfpGTKYftDQsWML5EGb39HZcdphBEbQL7AYVib1ah8rnzA2keGhgzSH0bqMcuI7ZIRSZSVe%2Fg%2FLmePtH3yKBDVahBZpZAxbnJW1MyYbE3tPVPUSeXiXp6uRGJh3Qi4w49ykxAY6pgF0tEm3tNV%2FPREA8WSHvyHwJDkvBCIfJfRThB3y2C0ZdGZdhHfw1zM2E%2BwCiKISmljbxhvAPQ6d3TmTrXKhOdtrAC4xajfR5xUjn9pGfBaU3CrglCQubFmBMuQhv7045tzHKf9IdMwmllRc8ib9bf6eXuXTkOHwZ4w7kUYfCRwiQQgRClmJYYYfrb%2FvJ%2FtCuhTE2mu%2FboY72rn3yRYKuPNxol%2FxEy52&X-Amz-Signature=0bfe7595e97b8409d2a2073a47fbf99cba07eeaf2d704b3eaceb051c2f472d4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5R2E2MJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCj3TNcz9Cye9OUFU4FYbuXg%2BuPZJx5l0LvLlZU%2FmcuAiBBCXVD2r85UnPURHuYDGnY21Nc%2BIds3DgtnO6%2FZFqs6yqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxSTrwQnH2hSw62JHKtwDvfCXIOHTX9B8WstTR0StL%2BPbOEDh2%2FgH%2BuOBNUaqiXYGX4m3p%2F5o6z3t7pbxItCy4D1K38Y%2FCBApvzLFEFDeedWZPkGt9rtL2pReDmDRKpCCbf%2FsUbdndOlVNsybjuQaQlKP2IaWHfCdCv%2Fc6OZGgQV%2FwY8oopXgsPcT5iIieq6s3Tx4QmMTpGH9AAQQ%2B6hXmbHn3TL9me1jag%2B5t1rc%2FUkBapVC8c5NCbjaJMbRI%2FT%2F%2BmI%2BDJOivMQ0IxaG2ikYthp7Q4xJSFbIhg2vrZ82qoMIklID4b4%2F2ESNuBAT74qAdTYUsrW2rIKkcZzUY4F49wJe5k0bJ%2BDX3COEiC1K6tOWBOw5n2hEI2T%2BAj6DMvzaob4oyXkrSOjkxyGgK%2BxMvFUujja4juK4%2F%2FPNlLru72lcPCeNeF%2BXSnQHoWXGYCo9OXolNQoZojtBUywFe5MLwQSjWApNFc39pW4xPCjXViI50mYj3%2BQide1%2BlvQ1DHG%2FLrkDqmToYdBfh5uoMLfpGTKYftDQsWML5EGb39HZcdphBEbQL7AYVib1ah8rnzA2keGhgzSH0bqMcuI7ZIRSZSVe%2Fg%2FLmePtH3yKBDVahBZpZAxbnJW1MyYbE3tPVPUSeXiXp6uRGJh3Qi4w49ykxAY6pgF0tEm3tNV%2FPREA8WSHvyHwJDkvBCIfJfRThB3y2C0ZdGZdhHfw1zM2E%2BwCiKISmljbxhvAPQ6d3TmTrXKhOdtrAC4xajfR5xUjn9pGfBaU3CrglCQubFmBMuQhv7045tzHKf9IdMwmllRc8ib9bf6eXuXTkOHwZ4w7kUYfCRwiQQgRClmJYYYfrb%2FvJ%2FtCuhTE2mu%2FboY72rn3yRYKuPNxol%2FxEy52&X-Amz-Signature=a833aadbf08f968ca1272060f6c4e88fbf99e5efd41e4debda69c9ff71e1ac05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5R2E2MJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHCj3TNcz9Cye9OUFU4FYbuXg%2BuPZJx5l0LvLlZU%2FmcuAiBBCXVD2r85UnPURHuYDGnY21Nc%2BIds3DgtnO6%2FZFqs6yqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxSTrwQnH2hSw62JHKtwDvfCXIOHTX9B8WstTR0StL%2BPbOEDh2%2FgH%2BuOBNUaqiXYGX4m3p%2F5o6z3t7pbxItCy4D1K38Y%2FCBApvzLFEFDeedWZPkGt9rtL2pReDmDRKpCCbf%2FsUbdndOlVNsybjuQaQlKP2IaWHfCdCv%2Fc6OZGgQV%2FwY8oopXgsPcT5iIieq6s3Tx4QmMTpGH9AAQQ%2B6hXmbHn3TL9me1jag%2B5t1rc%2FUkBapVC8c5NCbjaJMbRI%2FT%2F%2BmI%2BDJOivMQ0IxaG2ikYthp7Q4xJSFbIhg2vrZ82qoMIklID4b4%2F2ESNuBAT74qAdTYUsrW2rIKkcZzUY4F49wJe5k0bJ%2BDX3COEiC1K6tOWBOw5n2hEI2T%2BAj6DMvzaob4oyXkrSOjkxyGgK%2BxMvFUujja4juK4%2F%2FPNlLru72lcPCeNeF%2BXSnQHoWXGYCo9OXolNQoZojtBUywFe5MLwQSjWApNFc39pW4xPCjXViI50mYj3%2BQide1%2BlvQ1DHG%2FLrkDqmToYdBfh5uoMLfpGTKYftDQsWML5EGb39HZcdphBEbQL7AYVib1ah8rnzA2keGhgzSH0bqMcuI7ZIRSZSVe%2Fg%2FLmePtH3yKBDVahBZpZAxbnJW1MyYbE3tPVPUSeXiXp6uRGJh3Qi4w49ykxAY6pgF0tEm3tNV%2FPREA8WSHvyHwJDkvBCIfJfRThB3y2C0ZdGZdhHfw1zM2E%2BwCiKISmljbxhvAPQ6d3TmTrXKhOdtrAC4xajfR5xUjn9pGfBaU3CrglCQubFmBMuQhv7045tzHKf9IdMwmllRc8ib9bf6eXuXTkOHwZ4w7kUYfCRwiQQgRClmJYYYfrb%2FvJ%2FtCuhTE2mu%2FboY72rn3yRYKuPNxol%2FxEy52&X-Amz-Signature=1545fa88256d80811432c029504315e389b8b22c4273375fd85d54794964a11c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
