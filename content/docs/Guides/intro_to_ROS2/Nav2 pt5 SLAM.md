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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDWRXGJQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDaB7QVgNce6jEu5IlHxQqMlBOKhEMlYe%2FfwRMKOJp57QIhAOEHo%2FNTc6RksqdysFtFawTLn9QtllzVMZxXvnadzcAkKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuWrZpR%2BwEnHpPMY0q3ANe59iIWwFzfPHJAeKX%2BY8JmZHpr40K7kBLFO5E9X9T576huCw2vfEOEKCRLm3ziHWXIsReTspLZlYD3IjACFlg2c0CvcCozakScXA%2Fhq64dHyMSOilvYSVFJc3JPIJ%2BLy5M9DWu35oq00JIwxWaaTh3lrhJxjCMsGu7NdCDFP3Avgnw%2FmnpDk3KE7vK%2FSt0FXBE7FRp0fuhxcU%2FFWwaWWm95NZn1k5MZPtwKk4iE98S0o59Nk1uGt5a1udzxaHEbfuEBr1YX%2Bag4m8pEsU08RdE4knvYMZwthFrIEWKsAd26Lx75SFA2s68zqyQ5Io5%2Brz4OZaufdQT8h0lO4I7u12D7qstTOcZToz1ZFXB8QDN4c0MsXJfMa1XFIjRR5OvOEQOODb3VHs7fIl3UR2%2BISvgcv8naybUbE0NrHvTlANDaQzrhV1pD%2BWp6aExIkKR0%2BmeEvtC67lxkr9%2FM9MHfdDa61Bmie0sO%2FydnVuelv2yusk7yTacUCtO9vowyOHVj9ymgY3IbegPqmq8ZKhG9lsIdbNmADx62m3jlIms9ULSUIqnjfmtmk2IfhhjMf1vlHkc299JjnsV0Xnoe3PwnVDliSRUaLBjmPo3LMlHDBL2x9FZzKoV0Z%2BAn9dXDDxs53EBjqkAUfV4HaPMl1nXy8y%2BXm4ngx99KBzGDfUj1Dj6%2BDzSpuLAqMx1BKPQe3pqKjA2Y7C7f65gPFpbwCtoQU8N3Bbl7rKyF2lOEd5G%2Bc%2FLxeS8BDhMexVI%2Fg0rDecfC7etEk6bGjEVxhD%2F%2FJdV%2BpB5lnqqYHGnDp4dvQFLLuLWaJAYcZgIL2ojo8R%2B4BOmBHyjv3%2BA%2BaGoj1W%2BJryaQE3Syp21KdJ4Ijm&X-Amz-Signature=46ae058f5322677f78a945354b2be1bc99105327562ea9e3cf4d95a3d625fdb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDWRXGJQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDaB7QVgNce6jEu5IlHxQqMlBOKhEMlYe%2FfwRMKOJp57QIhAOEHo%2FNTc6RksqdysFtFawTLn9QtllzVMZxXvnadzcAkKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuWrZpR%2BwEnHpPMY0q3ANe59iIWwFzfPHJAeKX%2BY8JmZHpr40K7kBLFO5E9X9T576huCw2vfEOEKCRLm3ziHWXIsReTspLZlYD3IjACFlg2c0CvcCozakScXA%2Fhq64dHyMSOilvYSVFJc3JPIJ%2BLy5M9DWu35oq00JIwxWaaTh3lrhJxjCMsGu7NdCDFP3Avgnw%2FmnpDk3KE7vK%2FSt0FXBE7FRp0fuhxcU%2FFWwaWWm95NZn1k5MZPtwKk4iE98S0o59Nk1uGt5a1udzxaHEbfuEBr1YX%2Bag4m8pEsU08RdE4knvYMZwthFrIEWKsAd26Lx75SFA2s68zqyQ5Io5%2Brz4OZaufdQT8h0lO4I7u12D7qstTOcZToz1ZFXB8QDN4c0MsXJfMa1XFIjRR5OvOEQOODb3VHs7fIl3UR2%2BISvgcv8naybUbE0NrHvTlANDaQzrhV1pD%2BWp6aExIkKR0%2BmeEvtC67lxkr9%2FM9MHfdDa61Bmie0sO%2FydnVuelv2yusk7yTacUCtO9vowyOHVj9ymgY3IbegPqmq8ZKhG9lsIdbNmADx62m3jlIms9ULSUIqnjfmtmk2IfhhjMf1vlHkc299JjnsV0Xnoe3PwnVDliSRUaLBjmPo3LMlHDBL2x9FZzKoV0Z%2BAn9dXDDxs53EBjqkAUfV4HaPMl1nXy8y%2BXm4ngx99KBzGDfUj1Dj6%2BDzSpuLAqMx1BKPQe3pqKjA2Y7C7f65gPFpbwCtoQU8N3Bbl7rKyF2lOEd5G%2Bc%2FLxeS8BDhMexVI%2Fg0rDecfC7etEk6bGjEVxhD%2F%2FJdV%2BpB5lnqqYHGnDp4dvQFLLuLWaJAYcZgIL2ojo8R%2B4BOmBHyjv3%2BA%2BaGoj1W%2BJryaQE3Syp21KdJ4Ijm&X-Amz-Signature=b800b017ed5734aa204e30d6fe20e257807c5bbcfa456bce462184f143656d28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDWRXGJQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDaB7QVgNce6jEu5IlHxQqMlBOKhEMlYe%2FfwRMKOJp57QIhAOEHo%2FNTc6RksqdysFtFawTLn9QtllzVMZxXvnadzcAkKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuWrZpR%2BwEnHpPMY0q3ANe59iIWwFzfPHJAeKX%2BY8JmZHpr40K7kBLFO5E9X9T576huCw2vfEOEKCRLm3ziHWXIsReTspLZlYD3IjACFlg2c0CvcCozakScXA%2Fhq64dHyMSOilvYSVFJc3JPIJ%2BLy5M9DWu35oq00JIwxWaaTh3lrhJxjCMsGu7NdCDFP3Avgnw%2FmnpDk3KE7vK%2FSt0FXBE7FRp0fuhxcU%2FFWwaWWm95NZn1k5MZPtwKk4iE98S0o59Nk1uGt5a1udzxaHEbfuEBr1YX%2Bag4m8pEsU08RdE4knvYMZwthFrIEWKsAd26Lx75SFA2s68zqyQ5Io5%2Brz4OZaufdQT8h0lO4I7u12D7qstTOcZToz1ZFXB8QDN4c0MsXJfMa1XFIjRR5OvOEQOODb3VHs7fIl3UR2%2BISvgcv8naybUbE0NrHvTlANDaQzrhV1pD%2BWp6aExIkKR0%2BmeEvtC67lxkr9%2FM9MHfdDa61Bmie0sO%2FydnVuelv2yusk7yTacUCtO9vowyOHVj9ymgY3IbegPqmq8ZKhG9lsIdbNmADx62m3jlIms9ULSUIqnjfmtmk2IfhhjMf1vlHkc299JjnsV0Xnoe3PwnVDliSRUaLBjmPo3LMlHDBL2x9FZzKoV0Z%2BAn9dXDDxs53EBjqkAUfV4HaPMl1nXy8y%2BXm4ngx99KBzGDfUj1Dj6%2BDzSpuLAqMx1BKPQe3pqKjA2Y7C7f65gPFpbwCtoQU8N3Bbl7rKyF2lOEd5G%2Bc%2FLxeS8BDhMexVI%2Fg0rDecfC7etEk6bGjEVxhD%2F%2FJdV%2BpB5lnqqYHGnDp4dvQFLLuLWaJAYcZgIL2ojo8R%2B4BOmBHyjv3%2BA%2BaGoj1W%2BJryaQE3Syp21KdJ4Ijm&X-Amz-Signature=f41a965ce993f4b6e3ee19ffa1c8a0a9f15eae8c6b81f486a0f8ae4364ff7abf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDWRXGJQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDaB7QVgNce6jEu5IlHxQqMlBOKhEMlYe%2FfwRMKOJp57QIhAOEHo%2FNTc6RksqdysFtFawTLn9QtllzVMZxXvnadzcAkKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuWrZpR%2BwEnHpPMY0q3ANe59iIWwFzfPHJAeKX%2BY8JmZHpr40K7kBLFO5E9X9T576huCw2vfEOEKCRLm3ziHWXIsReTspLZlYD3IjACFlg2c0CvcCozakScXA%2Fhq64dHyMSOilvYSVFJc3JPIJ%2BLy5M9DWu35oq00JIwxWaaTh3lrhJxjCMsGu7NdCDFP3Avgnw%2FmnpDk3KE7vK%2FSt0FXBE7FRp0fuhxcU%2FFWwaWWm95NZn1k5MZPtwKk4iE98S0o59Nk1uGt5a1udzxaHEbfuEBr1YX%2Bag4m8pEsU08RdE4knvYMZwthFrIEWKsAd26Lx75SFA2s68zqyQ5Io5%2Brz4OZaufdQT8h0lO4I7u12D7qstTOcZToz1ZFXB8QDN4c0MsXJfMa1XFIjRR5OvOEQOODb3VHs7fIl3UR2%2BISvgcv8naybUbE0NrHvTlANDaQzrhV1pD%2BWp6aExIkKR0%2BmeEvtC67lxkr9%2FM9MHfdDa61Bmie0sO%2FydnVuelv2yusk7yTacUCtO9vowyOHVj9ymgY3IbegPqmq8ZKhG9lsIdbNmADx62m3jlIms9ULSUIqnjfmtmk2IfhhjMf1vlHkc299JjnsV0Xnoe3PwnVDliSRUaLBjmPo3LMlHDBL2x9FZzKoV0Z%2BAn9dXDDxs53EBjqkAUfV4HaPMl1nXy8y%2BXm4ngx99KBzGDfUj1Dj6%2BDzSpuLAqMx1BKPQe3pqKjA2Y7C7f65gPFpbwCtoQU8N3Bbl7rKyF2lOEd5G%2Bc%2FLxeS8BDhMexVI%2Fg0rDecfC7etEk6bGjEVxhD%2F%2FJdV%2BpB5lnqqYHGnDp4dvQFLLuLWaJAYcZgIL2ojo8R%2B4BOmBHyjv3%2BA%2BaGoj1W%2BJryaQE3Syp21KdJ4Ijm&X-Amz-Signature=c5fab7b58c3f273b473f2c3ccced83e76db07e2d33cb82bba9c98a52c37dd7d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDWRXGJQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDaB7QVgNce6jEu5IlHxQqMlBOKhEMlYe%2FfwRMKOJp57QIhAOEHo%2FNTc6RksqdysFtFawTLn9QtllzVMZxXvnadzcAkKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuWrZpR%2BwEnHpPMY0q3ANe59iIWwFzfPHJAeKX%2BY8JmZHpr40K7kBLFO5E9X9T576huCw2vfEOEKCRLm3ziHWXIsReTspLZlYD3IjACFlg2c0CvcCozakScXA%2Fhq64dHyMSOilvYSVFJc3JPIJ%2BLy5M9DWu35oq00JIwxWaaTh3lrhJxjCMsGu7NdCDFP3Avgnw%2FmnpDk3KE7vK%2FSt0FXBE7FRp0fuhxcU%2FFWwaWWm95NZn1k5MZPtwKk4iE98S0o59Nk1uGt5a1udzxaHEbfuEBr1YX%2Bag4m8pEsU08RdE4knvYMZwthFrIEWKsAd26Lx75SFA2s68zqyQ5Io5%2Brz4OZaufdQT8h0lO4I7u12D7qstTOcZToz1ZFXB8QDN4c0MsXJfMa1XFIjRR5OvOEQOODb3VHs7fIl3UR2%2BISvgcv8naybUbE0NrHvTlANDaQzrhV1pD%2BWp6aExIkKR0%2BmeEvtC67lxkr9%2FM9MHfdDa61Bmie0sO%2FydnVuelv2yusk7yTacUCtO9vowyOHVj9ymgY3IbegPqmq8ZKhG9lsIdbNmADx62m3jlIms9ULSUIqnjfmtmk2IfhhjMf1vlHkc299JjnsV0Xnoe3PwnVDliSRUaLBjmPo3LMlHDBL2x9FZzKoV0Z%2BAn9dXDDxs53EBjqkAUfV4HaPMl1nXy8y%2BXm4ngx99KBzGDfUj1Dj6%2BDzSpuLAqMx1BKPQe3pqKjA2Y7C7f65gPFpbwCtoQU8N3Bbl7rKyF2lOEd5G%2Bc%2FLxeS8BDhMexVI%2Fg0rDecfC7etEk6bGjEVxhD%2F%2FJdV%2BpB5lnqqYHGnDp4dvQFLLuLWaJAYcZgIL2ojo8R%2B4BOmBHyjv3%2BA%2BaGoj1W%2BJryaQE3Syp21KdJ4Ijm&X-Amz-Signature=b26aaab9e72a1a2fa243cd404bbe48efc69a797ca7bb40792b463a3956cb8c67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDWRXGJQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDaB7QVgNce6jEu5IlHxQqMlBOKhEMlYe%2FfwRMKOJp57QIhAOEHo%2FNTc6RksqdysFtFawTLn9QtllzVMZxXvnadzcAkKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuWrZpR%2BwEnHpPMY0q3ANe59iIWwFzfPHJAeKX%2BY8JmZHpr40K7kBLFO5E9X9T576huCw2vfEOEKCRLm3ziHWXIsReTspLZlYD3IjACFlg2c0CvcCozakScXA%2Fhq64dHyMSOilvYSVFJc3JPIJ%2BLy5M9DWu35oq00JIwxWaaTh3lrhJxjCMsGu7NdCDFP3Avgnw%2FmnpDk3KE7vK%2FSt0FXBE7FRp0fuhxcU%2FFWwaWWm95NZn1k5MZPtwKk4iE98S0o59Nk1uGt5a1udzxaHEbfuEBr1YX%2Bag4m8pEsU08RdE4knvYMZwthFrIEWKsAd26Lx75SFA2s68zqyQ5Io5%2Brz4OZaufdQT8h0lO4I7u12D7qstTOcZToz1ZFXB8QDN4c0MsXJfMa1XFIjRR5OvOEQOODb3VHs7fIl3UR2%2BISvgcv8naybUbE0NrHvTlANDaQzrhV1pD%2BWp6aExIkKR0%2BmeEvtC67lxkr9%2FM9MHfdDa61Bmie0sO%2FydnVuelv2yusk7yTacUCtO9vowyOHVj9ymgY3IbegPqmq8ZKhG9lsIdbNmADx62m3jlIms9ULSUIqnjfmtmk2IfhhjMf1vlHkc299JjnsV0Xnoe3PwnVDliSRUaLBjmPo3LMlHDBL2x9FZzKoV0Z%2BAn9dXDDxs53EBjqkAUfV4HaPMl1nXy8y%2BXm4ngx99KBzGDfUj1Dj6%2BDzSpuLAqMx1BKPQe3pqKjA2Y7C7f65gPFpbwCtoQU8N3Bbl7rKyF2lOEd5G%2Bc%2FLxeS8BDhMexVI%2Fg0rDecfC7etEk6bGjEVxhD%2F%2FJdV%2BpB5lnqqYHGnDp4dvQFLLuLWaJAYcZgIL2ojo8R%2B4BOmBHyjv3%2BA%2BaGoj1W%2BJryaQE3Syp21KdJ4Ijm&X-Amz-Signature=47e33cf4126dd102bc594af0eab2d89012e077580be0a6c1629097aadf7fe00f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDWRXGJQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDaB7QVgNce6jEu5IlHxQqMlBOKhEMlYe%2FfwRMKOJp57QIhAOEHo%2FNTc6RksqdysFtFawTLn9QtllzVMZxXvnadzcAkKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuWrZpR%2BwEnHpPMY0q3ANe59iIWwFzfPHJAeKX%2BY8JmZHpr40K7kBLFO5E9X9T576huCw2vfEOEKCRLm3ziHWXIsReTspLZlYD3IjACFlg2c0CvcCozakScXA%2Fhq64dHyMSOilvYSVFJc3JPIJ%2BLy5M9DWu35oq00JIwxWaaTh3lrhJxjCMsGu7NdCDFP3Avgnw%2FmnpDk3KE7vK%2FSt0FXBE7FRp0fuhxcU%2FFWwaWWm95NZn1k5MZPtwKk4iE98S0o59Nk1uGt5a1udzxaHEbfuEBr1YX%2Bag4m8pEsU08RdE4knvYMZwthFrIEWKsAd26Lx75SFA2s68zqyQ5Io5%2Brz4OZaufdQT8h0lO4I7u12D7qstTOcZToz1ZFXB8QDN4c0MsXJfMa1XFIjRR5OvOEQOODb3VHs7fIl3UR2%2BISvgcv8naybUbE0NrHvTlANDaQzrhV1pD%2BWp6aExIkKR0%2BmeEvtC67lxkr9%2FM9MHfdDa61Bmie0sO%2FydnVuelv2yusk7yTacUCtO9vowyOHVj9ymgY3IbegPqmq8ZKhG9lsIdbNmADx62m3jlIms9ULSUIqnjfmtmk2IfhhjMf1vlHkc299JjnsV0Xnoe3PwnVDliSRUaLBjmPo3LMlHDBL2x9FZzKoV0Z%2BAn9dXDDxs53EBjqkAUfV4HaPMl1nXy8y%2BXm4ngx99KBzGDfUj1Dj6%2BDzSpuLAqMx1BKPQe3pqKjA2Y7C7f65gPFpbwCtoQU8N3Bbl7rKyF2lOEd5G%2Bc%2FLxeS8BDhMexVI%2Fg0rDecfC7etEk6bGjEVxhD%2F%2FJdV%2BpB5lnqqYHGnDp4dvQFLLuLWaJAYcZgIL2ojo8R%2B4BOmBHyjv3%2BA%2BaGoj1W%2BJryaQE3Syp21KdJ4Ijm&X-Amz-Signature=e51c062e78eeb4af1636e9fc34a351e0b104a4d3312fe60ebc024e13ea3357db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDWRXGJQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDaB7QVgNce6jEu5IlHxQqMlBOKhEMlYe%2FfwRMKOJp57QIhAOEHo%2FNTc6RksqdysFtFawTLn9QtllzVMZxXvnadzcAkKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuWrZpR%2BwEnHpPMY0q3ANe59iIWwFzfPHJAeKX%2BY8JmZHpr40K7kBLFO5E9X9T576huCw2vfEOEKCRLm3ziHWXIsReTspLZlYD3IjACFlg2c0CvcCozakScXA%2Fhq64dHyMSOilvYSVFJc3JPIJ%2BLy5M9DWu35oq00JIwxWaaTh3lrhJxjCMsGu7NdCDFP3Avgnw%2FmnpDk3KE7vK%2FSt0FXBE7FRp0fuhxcU%2FFWwaWWm95NZn1k5MZPtwKk4iE98S0o59Nk1uGt5a1udzxaHEbfuEBr1YX%2Bag4m8pEsU08RdE4knvYMZwthFrIEWKsAd26Lx75SFA2s68zqyQ5Io5%2Brz4OZaufdQT8h0lO4I7u12D7qstTOcZToz1ZFXB8QDN4c0MsXJfMa1XFIjRR5OvOEQOODb3VHs7fIl3UR2%2BISvgcv8naybUbE0NrHvTlANDaQzrhV1pD%2BWp6aExIkKR0%2BmeEvtC67lxkr9%2FM9MHfdDa61Bmie0sO%2FydnVuelv2yusk7yTacUCtO9vowyOHVj9ymgY3IbegPqmq8ZKhG9lsIdbNmADx62m3jlIms9ULSUIqnjfmtmk2IfhhjMf1vlHkc299JjnsV0Xnoe3PwnVDliSRUaLBjmPo3LMlHDBL2x9FZzKoV0Z%2BAn9dXDDxs53EBjqkAUfV4HaPMl1nXy8y%2BXm4ngx99KBzGDfUj1Dj6%2BDzSpuLAqMx1BKPQe3pqKjA2Y7C7f65gPFpbwCtoQU8N3Bbl7rKyF2lOEd5G%2Bc%2FLxeS8BDhMexVI%2Fg0rDecfC7etEk6bGjEVxhD%2F%2FJdV%2BpB5lnqqYHGnDp4dvQFLLuLWaJAYcZgIL2ojo8R%2B4BOmBHyjv3%2BA%2BaGoj1W%2BJryaQE3Syp21KdJ4Ijm&X-Amz-Signature=8a9ea96ca08cc1401046406e423a16d5891bfe97f22fbaa3a0f298392e3bb00c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDWRXGJQ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T121831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQDaB7QVgNce6jEu5IlHxQqMlBOKhEMlYe%2FfwRMKOJp57QIhAOEHo%2FNTc6RksqdysFtFawTLn9QtllzVMZxXvnadzcAkKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuWrZpR%2BwEnHpPMY0q3ANe59iIWwFzfPHJAeKX%2BY8JmZHpr40K7kBLFO5E9X9T576huCw2vfEOEKCRLm3ziHWXIsReTspLZlYD3IjACFlg2c0CvcCozakScXA%2Fhq64dHyMSOilvYSVFJc3JPIJ%2BLy5M9DWu35oq00JIwxWaaTh3lrhJxjCMsGu7NdCDFP3Avgnw%2FmnpDk3KE7vK%2FSt0FXBE7FRp0fuhxcU%2FFWwaWWm95NZn1k5MZPtwKk4iE98S0o59Nk1uGt5a1udzxaHEbfuEBr1YX%2Bag4m8pEsU08RdE4knvYMZwthFrIEWKsAd26Lx75SFA2s68zqyQ5Io5%2Brz4OZaufdQT8h0lO4I7u12D7qstTOcZToz1ZFXB8QDN4c0MsXJfMa1XFIjRR5OvOEQOODb3VHs7fIl3UR2%2BISvgcv8naybUbE0NrHvTlANDaQzrhV1pD%2BWp6aExIkKR0%2BmeEvtC67lxkr9%2FM9MHfdDa61Bmie0sO%2FydnVuelv2yusk7yTacUCtO9vowyOHVj9ymgY3IbegPqmq8ZKhG9lsIdbNmADx62m3jlIms9ULSUIqnjfmtmk2IfhhjMf1vlHkc299JjnsV0Xnoe3PwnVDliSRUaLBjmPo3LMlHDBL2x9FZzKoV0Z%2BAn9dXDDxs53EBjqkAUfV4HaPMl1nXy8y%2BXm4ngx99KBzGDfUj1Dj6%2BDzSpuLAqMx1BKPQe3pqKjA2Y7C7f65gPFpbwCtoQU8N3Bbl7rKyF2lOEd5G%2Bc%2FLxeS8BDhMexVI%2Fg0rDecfC7etEk6bGjEVxhD%2F%2FJdV%2BpB5lnqqYHGnDp4dvQFLLuLWaJAYcZgIL2ojo8R%2B4BOmBHyjv3%2BA%2BaGoj1W%2BJryaQE3Syp21KdJ4Ijm&X-Amz-Signature=c24da1403b09e78f920553df30e982a822c31ca9754df6e31325d843f34785e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
