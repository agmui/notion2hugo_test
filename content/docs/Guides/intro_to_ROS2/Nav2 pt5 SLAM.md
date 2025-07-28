---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-24T23:11:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-24T23:11:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ22X7MA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDoWnAuQPy0dGg9nkwWbxiVkqNIdWLTUtX7yyJq7Ngi0wIgNXLl6QHOwrtlGo1C8MPSuKW8uho3VYBanMrye%2B1Sw%2BAqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyBXro%2BkMa5KAGIMircA%2BPQs4TPa%2FrNtmmN%2FPaNp2KDJOYkSXA5uhAUCTL1cGIZ3WZPheM6ZS0yU8NnHoMl5b87o4%2BwtgT5VJxpkkJw9OkB0p0NfCiVyh2hhTz3%2BjmiIWkn82uPjYXZqhbjfpljMHdtKCMB0zVbnRzKzj6hpVrG%2BzLZc9NBOvMLpZXs4MVmH7ZfHkbJStI%2FqrC9Xjk2wlUKrvDXxdTy7PbamlbsLVxGywUjfvFytx7BSB27XAPs%2FiJYULY9jBV3OxKE1qz3Rva2N4GNWvIom14Naknzwr2oPujeRVNuobOPI9%2Fpdkv8xcMAQluGxjcxlHVf9SFMN5caZ1xrxViF3kgv8E1daGhcgU7Xk1uufKsaa%2F8MsFWTMTDYAZtpEkYjroJh4x2FQXM8REMyY05U0MS40GjDQ3hivVviIVrHf3K4NRmSaplyB6y7rL4jKAfEyqhbbFCnpEYDrLuE0rDHtYY15r1aLqgoCbfss6N%2B3Jbcz4LDw%2B2sdMDD7%2B3Ft%2Fe2h1LgGZI1EaHxu0c1tYRylU%2Fg%2BNQhrjSZYte8eaYK%2FXiwxVSw0MnAjoj2Y8B8X0iXels0g82vkSB9E4hjru99Y4hPFXNG6Ub7tHYwFXDkBHCAZfpsSmaH4QwFhC3LQB2rpKcbMKbqnMQGOqUBZSypLflqaABGW4fsjzteoTC8Nb0bxZCoEPGDbiLl1X%2FlMpCwV7pIR03mvLoPYenz4DZbvlYSY5EG3pVFD8%2BwcTTU5VUKvQlK1uQTAzet0hbxo3HXdUNKM6lolfnisjiC9eUkyUXKXN%2FnIaebnx%2FRqA9VzyHFRi%2BH7ZVPWP2aOncMZJOBU9sRZS7Pk6gSzw7tC%2FyRQXWEm%2BD83tT6nM%2FkspROoquf&X-Amz-Signature=96fdf27bd4bb33c1a6bdbbc6fdba983153862289b3a33d3bcf5c9fc571d0ef2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ22X7MA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDoWnAuQPy0dGg9nkwWbxiVkqNIdWLTUtX7yyJq7Ngi0wIgNXLl6QHOwrtlGo1C8MPSuKW8uho3VYBanMrye%2B1Sw%2BAqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyBXro%2BkMa5KAGIMircA%2BPQs4TPa%2FrNtmmN%2FPaNp2KDJOYkSXA5uhAUCTL1cGIZ3WZPheM6ZS0yU8NnHoMl5b87o4%2BwtgT5VJxpkkJw9OkB0p0NfCiVyh2hhTz3%2BjmiIWkn82uPjYXZqhbjfpljMHdtKCMB0zVbnRzKzj6hpVrG%2BzLZc9NBOvMLpZXs4MVmH7ZfHkbJStI%2FqrC9Xjk2wlUKrvDXxdTy7PbamlbsLVxGywUjfvFytx7BSB27XAPs%2FiJYULY9jBV3OxKE1qz3Rva2N4GNWvIom14Naknzwr2oPujeRVNuobOPI9%2Fpdkv8xcMAQluGxjcxlHVf9SFMN5caZ1xrxViF3kgv8E1daGhcgU7Xk1uufKsaa%2F8MsFWTMTDYAZtpEkYjroJh4x2FQXM8REMyY05U0MS40GjDQ3hivVviIVrHf3K4NRmSaplyB6y7rL4jKAfEyqhbbFCnpEYDrLuE0rDHtYY15r1aLqgoCbfss6N%2B3Jbcz4LDw%2B2sdMDD7%2B3Ft%2Fe2h1LgGZI1EaHxu0c1tYRylU%2Fg%2BNQhrjSZYte8eaYK%2FXiwxVSw0MnAjoj2Y8B8X0iXels0g82vkSB9E4hjru99Y4hPFXNG6Ub7tHYwFXDkBHCAZfpsSmaH4QwFhC3LQB2rpKcbMKbqnMQGOqUBZSypLflqaABGW4fsjzteoTC8Nb0bxZCoEPGDbiLl1X%2FlMpCwV7pIR03mvLoPYenz4DZbvlYSY5EG3pVFD8%2BwcTTU5VUKvQlK1uQTAzet0hbxo3HXdUNKM6lolfnisjiC9eUkyUXKXN%2FnIaebnx%2FRqA9VzyHFRi%2BH7ZVPWP2aOncMZJOBU9sRZS7Pk6gSzw7tC%2FyRQXWEm%2BD83tT6nM%2FkspROoquf&X-Amz-Signature=eacfaeb73b8fa3dce441591651bef85a18e161d44bf779d35139b1770192fcc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ22X7MA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDoWnAuQPy0dGg9nkwWbxiVkqNIdWLTUtX7yyJq7Ngi0wIgNXLl6QHOwrtlGo1C8MPSuKW8uho3VYBanMrye%2B1Sw%2BAqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyBXro%2BkMa5KAGIMircA%2BPQs4TPa%2FrNtmmN%2FPaNp2KDJOYkSXA5uhAUCTL1cGIZ3WZPheM6ZS0yU8NnHoMl5b87o4%2BwtgT5VJxpkkJw9OkB0p0NfCiVyh2hhTz3%2BjmiIWkn82uPjYXZqhbjfpljMHdtKCMB0zVbnRzKzj6hpVrG%2BzLZc9NBOvMLpZXs4MVmH7ZfHkbJStI%2FqrC9Xjk2wlUKrvDXxdTy7PbamlbsLVxGywUjfvFytx7BSB27XAPs%2FiJYULY9jBV3OxKE1qz3Rva2N4GNWvIom14Naknzwr2oPujeRVNuobOPI9%2Fpdkv8xcMAQluGxjcxlHVf9SFMN5caZ1xrxViF3kgv8E1daGhcgU7Xk1uufKsaa%2F8MsFWTMTDYAZtpEkYjroJh4x2FQXM8REMyY05U0MS40GjDQ3hivVviIVrHf3K4NRmSaplyB6y7rL4jKAfEyqhbbFCnpEYDrLuE0rDHtYY15r1aLqgoCbfss6N%2B3Jbcz4LDw%2B2sdMDD7%2B3Ft%2Fe2h1LgGZI1EaHxu0c1tYRylU%2Fg%2BNQhrjSZYte8eaYK%2FXiwxVSw0MnAjoj2Y8B8X0iXels0g82vkSB9E4hjru99Y4hPFXNG6Ub7tHYwFXDkBHCAZfpsSmaH4QwFhC3LQB2rpKcbMKbqnMQGOqUBZSypLflqaABGW4fsjzteoTC8Nb0bxZCoEPGDbiLl1X%2FlMpCwV7pIR03mvLoPYenz4DZbvlYSY5EG3pVFD8%2BwcTTU5VUKvQlK1uQTAzet0hbxo3HXdUNKM6lolfnisjiC9eUkyUXKXN%2FnIaebnx%2FRqA9VzyHFRi%2BH7ZVPWP2aOncMZJOBU9sRZS7Pk6gSzw7tC%2FyRQXWEm%2BD83tT6nM%2FkspROoquf&X-Amz-Signature=847a5683a280ee24aa925ba7ddf8f3b9de2f3651f3062080dc7f5c336d4b6ec4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

## Updating launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ22X7MA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDoWnAuQPy0dGg9nkwWbxiVkqNIdWLTUtX7yyJq7Ngi0wIgNXLl6QHOwrtlGo1C8MPSuKW8uho3VYBanMrye%2B1Sw%2BAqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyBXro%2BkMa5KAGIMircA%2BPQs4TPa%2FrNtmmN%2FPaNp2KDJOYkSXA5uhAUCTL1cGIZ3WZPheM6ZS0yU8NnHoMl5b87o4%2BwtgT5VJxpkkJw9OkB0p0NfCiVyh2hhTz3%2BjmiIWkn82uPjYXZqhbjfpljMHdtKCMB0zVbnRzKzj6hpVrG%2BzLZc9NBOvMLpZXs4MVmH7ZfHkbJStI%2FqrC9Xjk2wlUKrvDXxdTy7PbamlbsLVxGywUjfvFytx7BSB27XAPs%2FiJYULY9jBV3OxKE1qz3Rva2N4GNWvIom14Naknzwr2oPujeRVNuobOPI9%2Fpdkv8xcMAQluGxjcxlHVf9SFMN5caZ1xrxViF3kgv8E1daGhcgU7Xk1uufKsaa%2F8MsFWTMTDYAZtpEkYjroJh4x2FQXM8REMyY05U0MS40GjDQ3hivVviIVrHf3K4NRmSaplyB6y7rL4jKAfEyqhbbFCnpEYDrLuE0rDHtYY15r1aLqgoCbfss6N%2B3Jbcz4LDw%2B2sdMDD7%2B3Ft%2Fe2h1LgGZI1EaHxu0c1tYRylU%2Fg%2BNQhrjSZYte8eaYK%2FXiwxVSw0MnAjoj2Y8B8X0iXels0g82vkSB9E4hjru99Y4hPFXNG6Ub7tHYwFXDkBHCAZfpsSmaH4QwFhC3LQB2rpKcbMKbqnMQGOqUBZSypLflqaABGW4fsjzteoTC8Nb0bxZCoEPGDbiLl1X%2FlMpCwV7pIR03mvLoPYenz4DZbvlYSY5EG3pVFD8%2BwcTTU5VUKvQlK1uQTAzet0hbxo3HXdUNKM6lolfnisjiC9eUkyUXKXN%2FnIaebnx%2FRqA9VzyHFRi%2BH7ZVPWP2aOncMZJOBU9sRZS7Pk6gSzw7tC%2FyRQXWEm%2BD83tT6nM%2FkspROoquf&X-Amz-Signature=808ef3314a7ecb8e48cc8d74d310ebbb0a786b96beddec1f4482d156c4695dc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ22X7MA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDoWnAuQPy0dGg9nkwWbxiVkqNIdWLTUtX7yyJq7Ngi0wIgNXLl6QHOwrtlGo1C8MPSuKW8uho3VYBanMrye%2B1Sw%2BAqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyBXro%2BkMa5KAGIMircA%2BPQs4TPa%2FrNtmmN%2FPaNp2KDJOYkSXA5uhAUCTL1cGIZ3WZPheM6ZS0yU8NnHoMl5b87o4%2BwtgT5VJxpkkJw9OkB0p0NfCiVyh2hhTz3%2BjmiIWkn82uPjYXZqhbjfpljMHdtKCMB0zVbnRzKzj6hpVrG%2BzLZc9NBOvMLpZXs4MVmH7ZfHkbJStI%2FqrC9Xjk2wlUKrvDXxdTy7PbamlbsLVxGywUjfvFytx7BSB27XAPs%2FiJYULY9jBV3OxKE1qz3Rva2N4GNWvIom14Naknzwr2oPujeRVNuobOPI9%2Fpdkv8xcMAQluGxjcxlHVf9SFMN5caZ1xrxViF3kgv8E1daGhcgU7Xk1uufKsaa%2F8MsFWTMTDYAZtpEkYjroJh4x2FQXM8REMyY05U0MS40GjDQ3hivVviIVrHf3K4NRmSaplyB6y7rL4jKAfEyqhbbFCnpEYDrLuE0rDHtYY15r1aLqgoCbfss6N%2B3Jbcz4LDw%2B2sdMDD7%2B3Ft%2Fe2h1LgGZI1EaHxu0c1tYRylU%2Fg%2BNQhrjSZYte8eaYK%2FXiwxVSw0MnAjoj2Y8B8X0iXels0g82vkSB9E4hjru99Y4hPFXNG6Ub7tHYwFXDkBHCAZfpsSmaH4QwFhC3LQB2rpKcbMKbqnMQGOqUBZSypLflqaABGW4fsjzteoTC8Nb0bxZCoEPGDbiLl1X%2FlMpCwV7pIR03mvLoPYenz4DZbvlYSY5EG3pVFD8%2BwcTTU5VUKvQlK1uQTAzet0hbxo3HXdUNKM6lolfnisjiC9eUkyUXKXN%2FnIaebnx%2FRqA9VzyHFRi%2BH7ZVPWP2aOncMZJOBU9sRZS7Pk6gSzw7tC%2FyRQXWEm%2BD83tT6nM%2FkspROoquf&X-Amz-Signature=82cf380f8e5d66a2ff8597c85864e48e032172ec9a55376e37753157968c3675&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ22X7MA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDoWnAuQPy0dGg9nkwWbxiVkqNIdWLTUtX7yyJq7Ngi0wIgNXLl6QHOwrtlGo1C8MPSuKW8uho3VYBanMrye%2B1Sw%2BAqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyBXro%2BkMa5KAGIMircA%2BPQs4TPa%2FrNtmmN%2FPaNp2KDJOYkSXA5uhAUCTL1cGIZ3WZPheM6ZS0yU8NnHoMl5b87o4%2BwtgT5VJxpkkJw9OkB0p0NfCiVyh2hhTz3%2BjmiIWkn82uPjYXZqhbjfpljMHdtKCMB0zVbnRzKzj6hpVrG%2BzLZc9NBOvMLpZXs4MVmH7ZfHkbJStI%2FqrC9Xjk2wlUKrvDXxdTy7PbamlbsLVxGywUjfvFytx7BSB27XAPs%2FiJYULY9jBV3OxKE1qz3Rva2N4GNWvIom14Naknzwr2oPujeRVNuobOPI9%2Fpdkv8xcMAQluGxjcxlHVf9SFMN5caZ1xrxViF3kgv8E1daGhcgU7Xk1uufKsaa%2F8MsFWTMTDYAZtpEkYjroJh4x2FQXM8REMyY05U0MS40GjDQ3hivVviIVrHf3K4NRmSaplyB6y7rL4jKAfEyqhbbFCnpEYDrLuE0rDHtYY15r1aLqgoCbfss6N%2B3Jbcz4LDw%2B2sdMDD7%2B3Ft%2Fe2h1LgGZI1EaHxu0c1tYRylU%2Fg%2BNQhrjSZYte8eaYK%2FXiwxVSw0MnAjoj2Y8B8X0iXels0g82vkSB9E4hjru99Y4hPFXNG6Ub7tHYwFXDkBHCAZfpsSmaH4QwFhC3LQB2rpKcbMKbqnMQGOqUBZSypLflqaABGW4fsjzteoTC8Nb0bxZCoEPGDbiLl1X%2FlMpCwV7pIR03mvLoPYenz4DZbvlYSY5EG3pVFD8%2BwcTTU5VUKvQlK1uQTAzet0hbxo3HXdUNKM6lolfnisjiC9eUkyUXKXN%2FnIaebnx%2FRqA9VzyHFRi%2BH7ZVPWP2aOncMZJOBU9sRZS7Pk6gSzw7tC%2FyRQXWEm%2BD83tT6nM%2FkspROoquf&X-Amz-Signature=130056edd6c965f5658c3961ef8cbfde7756d9661431be29f72f93dbeccc456f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ22X7MA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDoWnAuQPy0dGg9nkwWbxiVkqNIdWLTUtX7yyJq7Ngi0wIgNXLl6QHOwrtlGo1C8MPSuKW8uho3VYBanMrye%2B1Sw%2BAqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyBXro%2BkMa5KAGIMircA%2BPQs4TPa%2FrNtmmN%2FPaNp2KDJOYkSXA5uhAUCTL1cGIZ3WZPheM6ZS0yU8NnHoMl5b87o4%2BwtgT5VJxpkkJw9OkB0p0NfCiVyh2hhTz3%2BjmiIWkn82uPjYXZqhbjfpljMHdtKCMB0zVbnRzKzj6hpVrG%2BzLZc9NBOvMLpZXs4MVmH7ZfHkbJStI%2FqrC9Xjk2wlUKrvDXxdTy7PbamlbsLVxGywUjfvFytx7BSB27XAPs%2FiJYULY9jBV3OxKE1qz3Rva2N4GNWvIom14Naknzwr2oPujeRVNuobOPI9%2Fpdkv8xcMAQluGxjcxlHVf9SFMN5caZ1xrxViF3kgv8E1daGhcgU7Xk1uufKsaa%2F8MsFWTMTDYAZtpEkYjroJh4x2FQXM8REMyY05U0MS40GjDQ3hivVviIVrHf3K4NRmSaplyB6y7rL4jKAfEyqhbbFCnpEYDrLuE0rDHtYY15r1aLqgoCbfss6N%2B3Jbcz4LDw%2B2sdMDD7%2B3Ft%2Fe2h1LgGZI1EaHxu0c1tYRylU%2Fg%2BNQhrjSZYte8eaYK%2FXiwxVSw0MnAjoj2Y8B8X0iXels0g82vkSB9E4hjru99Y4hPFXNG6Ub7tHYwFXDkBHCAZfpsSmaH4QwFhC3LQB2rpKcbMKbqnMQGOqUBZSypLflqaABGW4fsjzteoTC8Nb0bxZCoEPGDbiLl1X%2FlMpCwV7pIR03mvLoPYenz4DZbvlYSY5EG3pVFD8%2BwcTTU5VUKvQlK1uQTAzet0hbxo3HXdUNKM6lolfnisjiC9eUkyUXKXN%2FnIaebnx%2FRqA9VzyHFRi%2BH7ZVPWP2aOncMZJOBU9sRZS7Pk6gSzw7tC%2FyRQXWEm%2BD83tT6nM%2FkspROoquf&X-Amz-Signature=696be79049ba6bce16485453052f295288df8f82cca7f5322cfa77585a82e052&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ22X7MA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDoWnAuQPy0dGg9nkwWbxiVkqNIdWLTUtX7yyJq7Ngi0wIgNXLl6QHOwrtlGo1C8MPSuKW8uho3VYBanMrye%2B1Sw%2BAqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyBXro%2BkMa5KAGIMircA%2BPQs4TPa%2FrNtmmN%2FPaNp2KDJOYkSXA5uhAUCTL1cGIZ3WZPheM6ZS0yU8NnHoMl5b87o4%2BwtgT5VJxpkkJw9OkB0p0NfCiVyh2hhTz3%2BjmiIWkn82uPjYXZqhbjfpljMHdtKCMB0zVbnRzKzj6hpVrG%2BzLZc9NBOvMLpZXs4MVmH7ZfHkbJStI%2FqrC9Xjk2wlUKrvDXxdTy7PbamlbsLVxGywUjfvFytx7BSB27XAPs%2FiJYULY9jBV3OxKE1qz3Rva2N4GNWvIom14Naknzwr2oPujeRVNuobOPI9%2Fpdkv8xcMAQluGxjcxlHVf9SFMN5caZ1xrxViF3kgv8E1daGhcgU7Xk1uufKsaa%2F8MsFWTMTDYAZtpEkYjroJh4x2FQXM8REMyY05U0MS40GjDQ3hivVviIVrHf3K4NRmSaplyB6y7rL4jKAfEyqhbbFCnpEYDrLuE0rDHtYY15r1aLqgoCbfss6N%2B3Jbcz4LDw%2B2sdMDD7%2B3Ft%2Fe2h1LgGZI1EaHxu0c1tYRylU%2Fg%2BNQhrjSZYte8eaYK%2FXiwxVSw0MnAjoj2Y8B8X0iXels0g82vkSB9E4hjru99Y4hPFXNG6Ub7tHYwFXDkBHCAZfpsSmaH4QwFhC3LQB2rpKcbMKbqnMQGOqUBZSypLflqaABGW4fsjzteoTC8Nb0bxZCoEPGDbiLl1X%2FlMpCwV7pIR03mvLoPYenz4DZbvlYSY5EG3pVFD8%2BwcTTU5VUKvQlK1uQTAzet0hbxo3HXdUNKM6lolfnisjiC9eUkyUXKXN%2FnIaebnx%2FRqA9VzyHFRi%2BH7ZVPWP2aOncMZJOBU9sRZS7Pk6gSzw7tC%2FyRQXWEm%2BD83tT6nM%2FkspROoquf&X-Amz-Signature=a4b0322d5dfd0a8e76cb23e76ae02e8b413c254b3e9fc3b917f96deb742dcdf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ22X7MA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T091702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDoWnAuQPy0dGg9nkwWbxiVkqNIdWLTUtX7yyJq7Ngi0wIgNXLl6QHOwrtlGo1C8MPSuKW8uho3VYBanMrye%2B1Sw%2BAqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHyBXro%2BkMa5KAGIMircA%2BPQs4TPa%2FrNtmmN%2FPaNp2KDJOYkSXA5uhAUCTL1cGIZ3WZPheM6ZS0yU8NnHoMl5b87o4%2BwtgT5VJxpkkJw9OkB0p0NfCiVyh2hhTz3%2BjmiIWkn82uPjYXZqhbjfpljMHdtKCMB0zVbnRzKzj6hpVrG%2BzLZc9NBOvMLpZXs4MVmH7ZfHkbJStI%2FqrC9Xjk2wlUKrvDXxdTy7PbamlbsLVxGywUjfvFytx7BSB27XAPs%2FiJYULY9jBV3OxKE1qz3Rva2N4GNWvIom14Naknzwr2oPujeRVNuobOPI9%2Fpdkv8xcMAQluGxjcxlHVf9SFMN5caZ1xrxViF3kgv8E1daGhcgU7Xk1uufKsaa%2F8MsFWTMTDYAZtpEkYjroJh4x2FQXM8REMyY05U0MS40GjDQ3hivVviIVrHf3K4NRmSaplyB6y7rL4jKAfEyqhbbFCnpEYDrLuE0rDHtYY15r1aLqgoCbfss6N%2B3Jbcz4LDw%2B2sdMDD7%2B3Ft%2Fe2h1LgGZI1EaHxu0c1tYRylU%2Fg%2BNQhrjSZYte8eaYK%2FXiwxVSw0MnAjoj2Y8B8X0iXels0g82vkSB9E4hjru99Y4hPFXNG6Ub7tHYwFXDkBHCAZfpsSmaH4QwFhC3LQB2rpKcbMKbqnMQGOqUBZSypLflqaABGW4fsjzteoTC8Nb0bxZCoEPGDbiLl1X%2FlMpCwV7pIR03mvLoPYenz4DZbvlYSY5EG3pVFD8%2BwcTTU5VUKvQlK1uQTAzet0hbxo3HXdUNKM6lolfnisjiC9eUkyUXKXN%2FnIaebnx%2FRqA9VzyHFRi%2BH7ZVPWP2aOncMZJOBU9sRZS7Pk6gSzw7tC%2FyRQXWEm%2BD83tT6nM%2FkspROoquf&X-Amz-Signature=690490a80076b329877d6759f47310f97acd4b1cf482ea5443391798fda3e803&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored map

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

TODO: add pic

For further configuration go to: TODO: link to slam docs config guide 
