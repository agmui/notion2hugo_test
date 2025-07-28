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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT7YCR3R%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQC0aklGWdvsK9%2Fimu9vbFfdh31PnQgo0c0P%2Fbwmx4v9SAIgBdy3J0BwdgCi%2Fa%2FhU3CiLffFvKhMy8bG9%2BlObYKVEHIqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPytP0yNP5CE4WJFmircA%2BnbFJGMF%2BevxEzV3Fa9L4LXZ11s%2FNqVmP%2BqOyryFR3gyagEm6%2B3jtjaesaMhHjbSPIvQDIDlWyF1BCxGIzrqpQ3S7BZ7LuGQTkRB7s%2BLS2C6F7KojMq61r0uaUSrXNdppGTbO1JBIZLjPFLYe3dkd%2B5%2Ff5xqDq262erakyM4vaDVm3V5mf%2B02rVoaKbFUPU1XnTQljd8T%2F8gcxL97bt1Z3GkaYWJKAMDMkiIqiPCEbh26UpholpafVR%2BGfAcuvD0XqgWvligNkDRpKtAqg%2Fg8PJG2yX9cRIp6o%2FeL1ulme41GHYGvEpE8odp6UnqqtiM4mT8e3TWIPCUfFa9FJed%2B8EaQUlKQpDJBSlCzutLsiAqhtQ8mKPN%2FMUekjcJ1lLNzyhAxDRFjq11obzSdAhSEkWFxwLruLjJTNsKOBKmbck0wWO%2Bg%2FKJnEQh2lGg0%2FMwrkDV%2Fd0mAzvqWnh7Oo6odsDR1WZH3V51KANG%2BAciiVPLH3KJkb0dtrbNAn1MiwgWh4JQR66At7G7i%2Fuh22AGREjzwlREDBPnwlMZSvdJwLpJlddd%2Bxx3WpO2%2BspRXsOFsf2irah3GY60H%2BVVqclPcrwoA%2BLNDmqlTPtPAPQkpRJv74af6HqTVwJmVKIMOjWncQGOqUB1XgUAO9MqmlXMiSU1pZSXa5VAUE1Qg0Anax24jUCuNQBz9pk4PXI1Jc76iwXNz1zuugCK6rhFuVH0W%2BptI%2BSbt4yAhSGNOG3Irnx19HJqJ1pRg9ab1w30RqbooQ99etayUieUX2n8AnLkT6%2B9Oxq9V883mULh8eMOkXup0%2B7cKbBGmbJjyMV%2B%2FIxcqhKVM2H9IXw3Sop%2BPHof6FBcLpynnbDtBJR&X-Amz-Signature=f7f71e5f56a006bdbbaab06a14e251a6abd2f20a1074b47329e777962ad234aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT7YCR3R%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQC0aklGWdvsK9%2Fimu9vbFfdh31PnQgo0c0P%2Fbwmx4v9SAIgBdy3J0BwdgCi%2Fa%2FhU3CiLffFvKhMy8bG9%2BlObYKVEHIqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPytP0yNP5CE4WJFmircA%2BnbFJGMF%2BevxEzV3Fa9L4LXZ11s%2FNqVmP%2BqOyryFR3gyagEm6%2B3jtjaesaMhHjbSPIvQDIDlWyF1BCxGIzrqpQ3S7BZ7LuGQTkRB7s%2BLS2C6F7KojMq61r0uaUSrXNdppGTbO1JBIZLjPFLYe3dkd%2B5%2Ff5xqDq262erakyM4vaDVm3V5mf%2B02rVoaKbFUPU1XnTQljd8T%2F8gcxL97bt1Z3GkaYWJKAMDMkiIqiPCEbh26UpholpafVR%2BGfAcuvD0XqgWvligNkDRpKtAqg%2Fg8PJG2yX9cRIp6o%2FeL1ulme41GHYGvEpE8odp6UnqqtiM4mT8e3TWIPCUfFa9FJed%2B8EaQUlKQpDJBSlCzutLsiAqhtQ8mKPN%2FMUekjcJ1lLNzyhAxDRFjq11obzSdAhSEkWFxwLruLjJTNsKOBKmbck0wWO%2Bg%2FKJnEQh2lGg0%2FMwrkDV%2Fd0mAzvqWnh7Oo6odsDR1WZH3V51KANG%2BAciiVPLH3KJkb0dtrbNAn1MiwgWh4JQR66At7G7i%2Fuh22AGREjzwlREDBPnwlMZSvdJwLpJlddd%2Bxx3WpO2%2BspRXsOFsf2irah3GY60H%2BVVqclPcrwoA%2BLNDmqlTPtPAPQkpRJv74af6HqTVwJmVKIMOjWncQGOqUB1XgUAO9MqmlXMiSU1pZSXa5VAUE1Qg0Anax24jUCuNQBz9pk4PXI1Jc76iwXNz1zuugCK6rhFuVH0W%2BptI%2BSbt4yAhSGNOG3Irnx19HJqJ1pRg9ab1w30RqbooQ99etayUieUX2n8AnLkT6%2B9Oxq9V883mULh8eMOkXup0%2B7cKbBGmbJjyMV%2B%2FIxcqhKVM2H9IXw3Sop%2BPHof6FBcLpynnbDtBJR&X-Amz-Signature=d17c59c2a237389a198e0d5794b979c8b606303ab1a2eb44499027af6aabc009&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT7YCR3R%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQC0aklGWdvsK9%2Fimu9vbFfdh31PnQgo0c0P%2Fbwmx4v9SAIgBdy3J0BwdgCi%2Fa%2FhU3CiLffFvKhMy8bG9%2BlObYKVEHIqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPytP0yNP5CE4WJFmircA%2BnbFJGMF%2BevxEzV3Fa9L4LXZ11s%2FNqVmP%2BqOyryFR3gyagEm6%2B3jtjaesaMhHjbSPIvQDIDlWyF1BCxGIzrqpQ3S7BZ7LuGQTkRB7s%2BLS2C6F7KojMq61r0uaUSrXNdppGTbO1JBIZLjPFLYe3dkd%2B5%2Ff5xqDq262erakyM4vaDVm3V5mf%2B02rVoaKbFUPU1XnTQljd8T%2F8gcxL97bt1Z3GkaYWJKAMDMkiIqiPCEbh26UpholpafVR%2BGfAcuvD0XqgWvligNkDRpKtAqg%2Fg8PJG2yX9cRIp6o%2FeL1ulme41GHYGvEpE8odp6UnqqtiM4mT8e3TWIPCUfFa9FJed%2B8EaQUlKQpDJBSlCzutLsiAqhtQ8mKPN%2FMUekjcJ1lLNzyhAxDRFjq11obzSdAhSEkWFxwLruLjJTNsKOBKmbck0wWO%2Bg%2FKJnEQh2lGg0%2FMwrkDV%2Fd0mAzvqWnh7Oo6odsDR1WZH3V51KANG%2BAciiVPLH3KJkb0dtrbNAn1MiwgWh4JQR66At7G7i%2Fuh22AGREjzwlREDBPnwlMZSvdJwLpJlddd%2Bxx3WpO2%2BspRXsOFsf2irah3GY60H%2BVVqclPcrwoA%2BLNDmqlTPtPAPQkpRJv74af6HqTVwJmVKIMOjWncQGOqUB1XgUAO9MqmlXMiSU1pZSXa5VAUE1Qg0Anax24jUCuNQBz9pk4PXI1Jc76iwXNz1zuugCK6rhFuVH0W%2BptI%2BSbt4yAhSGNOG3Irnx19HJqJ1pRg9ab1w30RqbooQ99etayUieUX2n8AnLkT6%2B9Oxq9V883mULh8eMOkXup0%2B7cKbBGmbJjyMV%2B%2FIxcqhKVM2H9IXw3Sop%2BPHof6FBcLpynnbDtBJR&X-Amz-Signature=3795ec4bc3bd076d1aa000e1dc8f2eeadbb916eb1eaf5128a205cfc18607d8cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT7YCR3R%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQC0aklGWdvsK9%2Fimu9vbFfdh31PnQgo0c0P%2Fbwmx4v9SAIgBdy3J0BwdgCi%2Fa%2FhU3CiLffFvKhMy8bG9%2BlObYKVEHIqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPytP0yNP5CE4WJFmircA%2BnbFJGMF%2BevxEzV3Fa9L4LXZ11s%2FNqVmP%2BqOyryFR3gyagEm6%2B3jtjaesaMhHjbSPIvQDIDlWyF1BCxGIzrqpQ3S7BZ7LuGQTkRB7s%2BLS2C6F7KojMq61r0uaUSrXNdppGTbO1JBIZLjPFLYe3dkd%2B5%2Ff5xqDq262erakyM4vaDVm3V5mf%2B02rVoaKbFUPU1XnTQljd8T%2F8gcxL97bt1Z3GkaYWJKAMDMkiIqiPCEbh26UpholpafVR%2BGfAcuvD0XqgWvligNkDRpKtAqg%2Fg8PJG2yX9cRIp6o%2FeL1ulme41GHYGvEpE8odp6UnqqtiM4mT8e3TWIPCUfFa9FJed%2B8EaQUlKQpDJBSlCzutLsiAqhtQ8mKPN%2FMUekjcJ1lLNzyhAxDRFjq11obzSdAhSEkWFxwLruLjJTNsKOBKmbck0wWO%2Bg%2FKJnEQh2lGg0%2FMwrkDV%2Fd0mAzvqWnh7Oo6odsDR1WZH3V51KANG%2BAciiVPLH3KJkb0dtrbNAn1MiwgWh4JQR66At7G7i%2Fuh22AGREjzwlREDBPnwlMZSvdJwLpJlddd%2Bxx3WpO2%2BspRXsOFsf2irah3GY60H%2BVVqclPcrwoA%2BLNDmqlTPtPAPQkpRJv74af6HqTVwJmVKIMOjWncQGOqUB1XgUAO9MqmlXMiSU1pZSXa5VAUE1Qg0Anax24jUCuNQBz9pk4PXI1Jc76iwXNz1zuugCK6rhFuVH0W%2BptI%2BSbt4yAhSGNOG3Irnx19HJqJ1pRg9ab1w30RqbooQ99etayUieUX2n8AnLkT6%2B9Oxq9V883mULh8eMOkXup0%2B7cKbBGmbJjyMV%2B%2FIxcqhKVM2H9IXw3Sop%2BPHof6FBcLpynnbDtBJR&X-Amz-Signature=724e2875e495e5d8467e45efaed12816c72523ea1a06d5f0c848ad986c1892e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT7YCR3R%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQC0aklGWdvsK9%2Fimu9vbFfdh31PnQgo0c0P%2Fbwmx4v9SAIgBdy3J0BwdgCi%2Fa%2FhU3CiLffFvKhMy8bG9%2BlObYKVEHIqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPytP0yNP5CE4WJFmircA%2BnbFJGMF%2BevxEzV3Fa9L4LXZ11s%2FNqVmP%2BqOyryFR3gyagEm6%2B3jtjaesaMhHjbSPIvQDIDlWyF1BCxGIzrqpQ3S7BZ7LuGQTkRB7s%2BLS2C6F7KojMq61r0uaUSrXNdppGTbO1JBIZLjPFLYe3dkd%2B5%2Ff5xqDq262erakyM4vaDVm3V5mf%2B02rVoaKbFUPU1XnTQljd8T%2F8gcxL97bt1Z3GkaYWJKAMDMkiIqiPCEbh26UpholpafVR%2BGfAcuvD0XqgWvligNkDRpKtAqg%2Fg8PJG2yX9cRIp6o%2FeL1ulme41GHYGvEpE8odp6UnqqtiM4mT8e3TWIPCUfFa9FJed%2B8EaQUlKQpDJBSlCzutLsiAqhtQ8mKPN%2FMUekjcJ1lLNzyhAxDRFjq11obzSdAhSEkWFxwLruLjJTNsKOBKmbck0wWO%2Bg%2FKJnEQh2lGg0%2FMwrkDV%2Fd0mAzvqWnh7Oo6odsDR1WZH3V51KANG%2BAciiVPLH3KJkb0dtrbNAn1MiwgWh4JQR66At7G7i%2Fuh22AGREjzwlREDBPnwlMZSvdJwLpJlddd%2Bxx3WpO2%2BspRXsOFsf2irah3GY60H%2BVVqclPcrwoA%2BLNDmqlTPtPAPQkpRJv74af6HqTVwJmVKIMOjWncQGOqUB1XgUAO9MqmlXMiSU1pZSXa5VAUE1Qg0Anax24jUCuNQBz9pk4PXI1Jc76iwXNz1zuugCK6rhFuVH0W%2BptI%2BSbt4yAhSGNOG3Irnx19HJqJ1pRg9ab1w30RqbooQ99etayUieUX2n8AnLkT6%2B9Oxq9V883mULh8eMOkXup0%2B7cKbBGmbJjyMV%2B%2FIxcqhKVM2H9IXw3Sop%2BPHof6FBcLpynnbDtBJR&X-Amz-Signature=2c9793e38f02b1a85c9b418540a60debc839d9ef557bdff6519fc2b914b756c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT7YCR3R%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQC0aklGWdvsK9%2Fimu9vbFfdh31PnQgo0c0P%2Fbwmx4v9SAIgBdy3J0BwdgCi%2Fa%2FhU3CiLffFvKhMy8bG9%2BlObYKVEHIqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPytP0yNP5CE4WJFmircA%2BnbFJGMF%2BevxEzV3Fa9L4LXZ11s%2FNqVmP%2BqOyryFR3gyagEm6%2B3jtjaesaMhHjbSPIvQDIDlWyF1BCxGIzrqpQ3S7BZ7LuGQTkRB7s%2BLS2C6F7KojMq61r0uaUSrXNdppGTbO1JBIZLjPFLYe3dkd%2B5%2Ff5xqDq262erakyM4vaDVm3V5mf%2B02rVoaKbFUPU1XnTQljd8T%2F8gcxL97bt1Z3GkaYWJKAMDMkiIqiPCEbh26UpholpafVR%2BGfAcuvD0XqgWvligNkDRpKtAqg%2Fg8PJG2yX9cRIp6o%2FeL1ulme41GHYGvEpE8odp6UnqqtiM4mT8e3TWIPCUfFa9FJed%2B8EaQUlKQpDJBSlCzutLsiAqhtQ8mKPN%2FMUekjcJ1lLNzyhAxDRFjq11obzSdAhSEkWFxwLruLjJTNsKOBKmbck0wWO%2Bg%2FKJnEQh2lGg0%2FMwrkDV%2Fd0mAzvqWnh7Oo6odsDR1WZH3V51KANG%2BAciiVPLH3KJkb0dtrbNAn1MiwgWh4JQR66At7G7i%2Fuh22AGREjzwlREDBPnwlMZSvdJwLpJlddd%2Bxx3WpO2%2BspRXsOFsf2irah3GY60H%2BVVqclPcrwoA%2BLNDmqlTPtPAPQkpRJv74af6HqTVwJmVKIMOjWncQGOqUB1XgUAO9MqmlXMiSU1pZSXa5VAUE1Qg0Anax24jUCuNQBz9pk4PXI1Jc76iwXNz1zuugCK6rhFuVH0W%2BptI%2BSbt4yAhSGNOG3Irnx19HJqJ1pRg9ab1w30RqbooQ99etayUieUX2n8AnLkT6%2B9Oxq9V883mULh8eMOkXup0%2B7cKbBGmbJjyMV%2B%2FIxcqhKVM2H9IXw3Sop%2BPHof6FBcLpynnbDtBJR&X-Amz-Signature=49225a39fd5b95573f660598e1b961460d803557cd08a7ccee069885213b838f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT7YCR3R%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQC0aklGWdvsK9%2Fimu9vbFfdh31PnQgo0c0P%2Fbwmx4v9SAIgBdy3J0BwdgCi%2Fa%2FhU3CiLffFvKhMy8bG9%2BlObYKVEHIqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPytP0yNP5CE4WJFmircA%2BnbFJGMF%2BevxEzV3Fa9L4LXZ11s%2FNqVmP%2BqOyryFR3gyagEm6%2B3jtjaesaMhHjbSPIvQDIDlWyF1BCxGIzrqpQ3S7BZ7LuGQTkRB7s%2BLS2C6F7KojMq61r0uaUSrXNdppGTbO1JBIZLjPFLYe3dkd%2B5%2Ff5xqDq262erakyM4vaDVm3V5mf%2B02rVoaKbFUPU1XnTQljd8T%2F8gcxL97bt1Z3GkaYWJKAMDMkiIqiPCEbh26UpholpafVR%2BGfAcuvD0XqgWvligNkDRpKtAqg%2Fg8PJG2yX9cRIp6o%2FeL1ulme41GHYGvEpE8odp6UnqqtiM4mT8e3TWIPCUfFa9FJed%2B8EaQUlKQpDJBSlCzutLsiAqhtQ8mKPN%2FMUekjcJ1lLNzyhAxDRFjq11obzSdAhSEkWFxwLruLjJTNsKOBKmbck0wWO%2Bg%2FKJnEQh2lGg0%2FMwrkDV%2Fd0mAzvqWnh7Oo6odsDR1WZH3V51KANG%2BAciiVPLH3KJkb0dtrbNAn1MiwgWh4JQR66At7G7i%2Fuh22AGREjzwlREDBPnwlMZSvdJwLpJlddd%2Bxx3WpO2%2BspRXsOFsf2irah3GY60H%2BVVqclPcrwoA%2BLNDmqlTPtPAPQkpRJv74af6HqTVwJmVKIMOjWncQGOqUB1XgUAO9MqmlXMiSU1pZSXa5VAUE1Qg0Anax24jUCuNQBz9pk4PXI1Jc76iwXNz1zuugCK6rhFuVH0W%2BptI%2BSbt4yAhSGNOG3Irnx19HJqJ1pRg9ab1w30RqbooQ99etayUieUX2n8AnLkT6%2B9Oxq9V883mULh8eMOkXup0%2B7cKbBGmbJjyMV%2B%2FIxcqhKVM2H9IXw3Sop%2BPHof6FBcLpynnbDtBJR&X-Amz-Signature=be2214932bcb3dce532bb1f81a74435763794027e367a8432380e83a492e2d22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT7YCR3R%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQC0aklGWdvsK9%2Fimu9vbFfdh31PnQgo0c0P%2Fbwmx4v9SAIgBdy3J0BwdgCi%2Fa%2FhU3CiLffFvKhMy8bG9%2BlObYKVEHIqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPytP0yNP5CE4WJFmircA%2BnbFJGMF%2BevxEzV3Fa9L4LXZ11s%2FNqVmP%2BqOyryFR3gyagEm6%2B3jtjaesaMhHjbSPIvQDIDlWyF1BCxGIzrqpQ3S7BZ7LuGQTkRB7s%2BLS2C6F7KojMq61r0uaUSrXNdppGTbO1JBIZLjPFLYe3dkd%2B5%2Ff5xqDq262erakyM4vaDVm3V5mf%2B02rVoaKbFUPU1XnTQljd8T%2F8gcxL97bt1Z3GkaYWJKAMDMkiIqiPCEbh26UpholpafVR%2BGfAcuvD0XqgWvligNkDRpKtAqg%2Fg8PJG2yX9cRIp6o%2FeL1ulme41GHYGvEpE8odp6UnqqtiM4mT8e3TWIPCUfFa9FJed%2B8EaQUlKQpDJBSlCzutLsiAqhtQ8mKPN%2FMUekjcJ1lLNzyhAxDRFjq11obzSdAhSEkWFxwLruLjJTNsKOBKmbck0wWO%2Bg%2FKJnEQh2lGg0%2FMwrkDV%2Fd0mAzvqWnh7Oo6odsDR1WZH3V51KANG%2BAciiVPLH3KJkb0dtrbNAn1MiwgWh4JQR66At7G7i%2Fuh22AGREjzwlREDBPnwlMZSvdJwLpJlddd%2Bxx3WpO2%2BspRXsOFsf2irah3GY60H%2BVVqclPcrwoA%2BLNDmqlTPtPAPQkpRJv74af6HqTVwJmVKIMOjWncQGOqUB1XgUAO9MqmlXMiSU1pZSXa5VAUE1Qg0Anax24jUCuNQBz9pk4PXI1Jc76iwXNz1zuugCK6rhFuVH0W%2BptI%2BSbt4yAhSGNOG3Irnx19HJqJ1pRg9ab1w30RqbooQ99etayUieUX2n8AnLkT6%2B9Oxq9V883mULh8eMOkXup0%2B7cKbBGmbJjyMV%2B%2FIxcqhKVM2H9IXw3Sop%2BPHof6FBcLpynnbDtBJR&X-Amz-Signature=6b3d43ee38297a06bee56b11aaaddbb8df1962aa4d83e2b664d0cd694c39e24c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT7YCR3R%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQC0aklGWdvsK9%2Fimu9vbFfdh31PnQgo0c0P%2Fbwmx4v9SAIgBdy3J0BwdgCi%2Fa%2FhU3CiLffFvKhMy8bG9%2BlObYKVEHIqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPytP0yNP5CE4WJFmircA%2BnbFJGMF%2BevxEzV3Fa9L4LXZ11s%2FNqVmP%2BqOyryFR3gyagEm6%2B3jtjaesaMhHjbSPIvQDIDlWyF1BCxGIzrqpQ3S7BZ7LuGQTkRB7s%2BLS2C6F7KojMq61r0uaUSrXNdppGTbO1JBIZLjPFLYe3dkd%2B5%2Ff5xqDq262erakyM4vaDVm3V5mf%2B02rVoaKbFUPU1XnTQljd8T%2F8gcxL97bt1Z3GkaYWJKAMDMkiIqiPCEbh26UpholpafVR%2BGfAcuvD0XqgWvligNkDRpKtAqg%2Fg8PJG2yX9cRIp6o%2FeL1ulme41GHYGvEpE8odp6UnqqtiM4mT8e3TWIPCUfFa9FJed%2B8EaQUlKQpDJBSlCzutLsiAqhtQ8mKPN%2FMUekjcJ1lLNzyhAxDRFjq11obzSdAhSEkWFxwLruLjJTNsKOBKmbck0wWO%2Bg%2FKJnEQh2lGg0%2FMwrkDV%2Fd0mAzvqWnh7Oo6odsDR1WZH3V51KANG%2BAciiVPLH3KJkb0dtrbNAn1MiwgWh4JQR66At7G7i%2Fuh22AGREjzwlREDBPnwlMZSvdJwLpJlddd%2Bxx3WpO2%2BspRXsOFsf2irah3GY60H%2BVVqclPcrwoA%2BLNDmqlTPtPAPQkpRJv74af6HqTVwJmVKIMOjWncQGOqUB1XgUAO9MqmlXMiSU1pZSXa5VAUE1Qg0Anax24jUCuNQBz9pk4PXI1Jc76iwXNz1zuugCK6rhFuVH0W%2BptI%2BSbt4yAhSGNOG3Irnx19HJqJ1pRg9ab1w30RqbooQ99etayUieUX2n8AnLkT6%2B9Oxq9V883mULh8eMOkXup0%2B7cKbBGmbJjyMV%2B%2FIxcqhKVM2H9IXw3Sop%2BPHof6FBcLpynnbDtBJR&X-Amz-Signature=7234158326115444d822934adf12151ae7bd672c026d0057580ad4d3f03ee357&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
