---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-24T10:35:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-24T10:35:00.000Z"
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

{{% alert icon=”👾” context="info" %}}

### **New Node** **`online_async_launch`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2WEJAUS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDZvv7tWmtPjNi6wStpLvM0fyXBYACixn2wEM%2Bo8dlbEAiA1WeKfymBse6ClsESeqU8%2F0GHj8LV61qzbYEMzTuYbkSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM7K40fx8t5P1KEGwkKtwDxUa83KjL10Sq6sT2wOG86bjlD%2B0OmQqTLpYC6KW6TGW2ii4hIBcvn1mvHEZtVrbFqmr8JQXc7uQELRx%2BzT2ZBAvrIdp3Zh1o3wz7jCAq6MI%2FkgSF9acnKfNgTE2tJhANJi5lTt1c0wh%2F3EGb7sGcwehMg4%2B1l8CumQdFiGI5GRC3FY8prC6kvM9tAi32INyPvMZn2gc1hlY6sZReVmCmypBA3%2F5TqCuzYyiwtR0z%2FpjcjJQbEjcHKef7bybyiYX1uIO%2FrbAc2HMIvWQ6Ir3ccaMi%2F%2F1YuDZBhbAXIqg%2FVhiE1iQYyz2thev3l9DY7EH1Lpi7RSi%2Bou7tdsaMwfwiWx6kUFigvfp8MULezsYHWiiyPEID9PZC5X7fcqhbt%2BhSdzeaAVDI3SjY0rJqfvLoBqFwuox74J%2F1DBNX34ZlzDTjjdCbnaOEH8NppB4DAeSX4s58FIMcZ%2BoyE3qYMJHqf7rQ%2BV6IZOM%2BzKFhvHlFKryvViSOLVygWbDjqnaHL5ufazicVTiujlTE6nH0xHyG2r6pMNKfg%2FLPVFMRD%2Fi%2BPNoEyvJg0nwJEuROUdWRZEazOltYhFx2q6NL4PYJb9f7Kmhvqk3mCWruq17pgp42KhOXCW1B5iSanl8TS3gw6baIxAY6pgHhx%2BQvtYftOYrwVm2MnKaCwz%2ByGjbfTRt7Dd4pdVjKFa9VNdLZtgt%2FM44tmZdQiNg7ywTb2%2FHChZFMXaQNnw9nm0x5iCs1IIyTWRvFlpy5bfwfkJhhAsPeNAN3uI99nU7RH66DKDB0ue93mGGtcpReTqoFG0V8d5PDxJ56MbsYI8RSuA3XmLGjqQLc%2FSRIQZG%2BVAAQAzffu0KvH4OXOwrT%2Bs9adeIT&X-Amz-Signature=ac72160d846925b54320a080e6468bc53e668bb0ada78fb743134875a0f2d1db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2WEJAUS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDZvv7tWmtPjNi6wStpLvM0fyXBYACixn2wEM%2Bo8dlbEAiA1WeKfymBse6ClsESeqU8%2F0GHj8LV61qzbYEMzTuYbkSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM7K40fx8t5P1KEGwkKtwDxUa83KjL10Sq6sT2wOG86bjlD%2B0OmQqTLpYC6KW6TGW2ii4hIBcvn1mvHEZtVrbFqmr8JQXc7uQELRx%2BzT2ZBAvrIdp3Zh1o3wz7jCAq6MI%2FkgSF9acnKfNgTE2tJhANJi5lTt1c0wh%2F3EGb7sGcwehMg4%2B1l8CumQdFiGI5GRC3FY8prC6kvM9tAi32INyPvMZn2gc1hlY6sZReVmCmypBA3%2F5TqCuzYyiwtR0z%2FpjcjJQbEjcHKef7bybyiYX1uIO%2FrbAc2HMIvWQ6Ir3ccaMi%2F%2F1YuDZBhbAXIqg%2FVhiE1iQYyz2thev3l9DY7EH1Lpi7RSi%2Bou7tdsaMwfwiWx6kUFigvfp8MULezsYHWiiyPEID9PZC5X7fcqhbt%2BhSdzeaAVDI3SjY0rJqfvLoBqFwuox74J%2F1DBNX34ZlzDTjjdCbnaOEH8NppB4DAeSX4s58FIMcZ%2BoyE3qYMJHqf7rQ%2BV6IZOM%2BzKFhvHlFKryvViSOLVygWbDjqnaHL5ufazicVTiujlTE6nH0xHyG2r6pMNKfg%2FLPVFMRD%2Fi%2BPNoEyvJg0nwJEuROUdWRZEazOltYhFx2q6NL4PYJb9f7Kmhvqk3mCWruq17pgp42KhOXCW1B5iSanl8TS3gw6baIxAY6pgHhx%2BQvtYftOYrwVm2MnKaCwz%2ByGjbfTRt7Dd4pdVjKFa9VNdLZtgt%2FM44tmZdQiNg7ywTb2%2FHChZFMXaQNnw9nm0x5iCs1IIyTWRvFlpy5bfwfkJhhAsPeNAN3uI99nU7RH66DKDB0ue93mGGtcpReTqoFG0V8d5PDxJ56MbsYI8RSuA3XmLGjqQLc%2FSRIQZG%2BVAAQAzffu0KvH4OXOwrT%2Bs9adeIT&X-Amz-Signature=b7d151f16ec969cdfa887d0b719111e949734b75622b7c0470a9bdd2267b9f61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2WEJAUS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDZvv7tWmtPjNi6wStpLvM0fyXBYACixn2wEM%2Bo8dlbEAiA1WeKfymBse6ClsESeqU8%2F0GHj8LV61qzbYEMzTuYbkSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM7K40fx8t5P1KEGwkKtwDxUa83KjL10Sq6sT2wOG86bjlD%2B0OmQqTLpYC6KW6TGW2ii4hIBcvn1mvHEZtVrbFqmr8JQXc7uQELRx%2BzT2ZBAvrIdp3Zh1o3wz7jCAq6MI%2FkgSF9acnKfNgTE2tJhANJi5lTt1c0wh%2F3EGb7sGcwehMg4%2B1l8CumQdFiGI5GRC3FY8prC6kvM9tAi32INyPvMZn2gc1hlY6sZReVmCmypBA3%2F5TqCuzYyiwtR0z%2FpjcjJQbEjcHKef7bybyiYX1uIO%2FrbAc2HMIvWQ6Ir3ccaMi%2F%2F1YuDZBhbAXIqg%2FVhiE1iQYyz2thev3l9DY7EH1Lpi7RSi%2Bou7tdsaMwfwiWx6kUFigvfp8MULezsYHWiiyPEID9PZC5X7fcqhbt%2BhSdzeaAVDI3SjY0rJqfvLoBqFwuox74J%2F1DBNX34ZlzDTjjdCbnaOEH8NppB4DAeSX4s58FIMcZ%2BoyE3qYMJHqf7rQ%2BV6IZOM%2BzKFhvHlFKryvViSOLVygWbDjqnaHL5ufazicVTiujlTE6nH0xHyG2r6pMNKfg%2FLPVFMRD%2Fi%2BPNoEyvJg0nwJEuROUdWRZEazOltYhFx2q6NL4PYJb9f7Kmhvqk3mCWruq17pgp42KhOXCW1B5iSanl8TS3gw6baIxAY6pgHhx%2BQvtYftOYrwVm2MnKaCwz%2ByGjbfTRt7Dd4pdVjKFa9VNdLZtgt%2FM44tmZdQiNg7ywTb2%2FHChZFMXaQNnw9nm0x5iCs1IIyTWRvFlpy5bfwfkJhhAsPeNAN3uI99nU7RH66DKDB0ue93mGGtcpReTqoFG0V8d5PDxJ56MbsYI8RSuA3XmLGjqQLc%2FSRIQZG%2BVAAQAzffu0KvH4OXOwrT%2Bs9adeIT&X-Amz-Signature=282622c88f3a77826d7a200ef8017f0a8cbce40edd223720102163c860900ff4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2WEJAUS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDZvv7tWmtPjNi6wStpLvM0fyXBYACixn2wEM%2Bo8dlbEAiA1WeKfymBse6ClsESeqU8%2F0GHj8LV61qzbYEMzTuYbkSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM7K40fx8t5P1KEGwkKtwDxUa83KjL10Sq6sT2wOG86bjlD%2B0OmQqTLpYC6KW6TGW2ii4hIBcvn1mvHEZtVrbFqmr8JQXc7uQELRx%2BzT2ZBAvrIdp3Zh1o3wz7jCAq6MI%2FkgSF9acnKfNgTE2tJhANJi5lTt1c0wh%2F3EGb7sGcwehMg4%2B1l8CumQdFiGI5GRC3FY8prC6kvM9tAi32INyPvMZn2gc1hlY6sZReVmCmypBA3%2F5TqCuzYyiwtR0z%2FpjcjJQbEjcHKef7bybyiYX1uIO%2FrbAc2HMIvWQ6Ir3ccaMi%2F%2F1YuDZBhbAXIqg%2FVhiE1iQYyz2thev3l9DY7EH1Lpi7RSi%2Bou7tdsaMwfwiWx6kUFigvfp8MULezsYHWiiyPEID9PZC5X7fcqhbt%2BhSdzeaAVDI3SjY0rJqfvLoBqFwuox74J%2F1DBNX34ZlzDTjjdCbnaOEH8NppB4DAeSX4s58FIMcZ%2BoyE3qYMJHqf7rQ%2BV6IZOM%2BzKFhvHlFKryvViSOLVygWbDjqnaHL5ufazicVTiujlTE6nH0xHyG2r6pMNKfg%2FLPVFMRD%2Fi%2BPNoEyvJg0nwJEuROUdWRZEazOltYhFx2q6NL4PYJb9f7Kmhvqk3mCWruq17pgp42KhOXCW1B5iSanl8TS3gw6baIxAY6pgHhx%2BQvtYftOYrwVm2MnKaCwz%2ByGjbfTRt7Dd4pdVjKFa9VNdLZtgt%2FM44tmZdQiNg7ywTb2%2FHChZFMXaQNnw9nm0x5iCs1IIyTWRvFlpy5bfwfkJhhAsPeNAN3uI99nU7RH66DKDB0ue93mGGtcpReTqoFG0V8d5PDxJ56MbsYI8RSuA3XmLGjqQLc%2FSRIQZG%2BVAAQAzffu0KvH4OXOwrT%2Bs9adeIT&X-Amz-Signature=12f9074a0240e6e2a38d9a09af8d5b2d565c4b60f920239f0af05e9f1815f738&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2WEJAUS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDZvv7tWmtPjNi6wStpLvM0fyXBYACixn2wEM%2Bo8dlbEAiA1WeKfymBse6ClsESeqU8%2F0GHj8LV61qzbYEMzTuYbkSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM7K40fx8t5P1KEGwkKtwDxUa83KjL10Sq6sT2wOG86bjlD%2B0OmQqTLpYC6KW6TGW2ii4hIBcvn1mvHEZtVrbFqmr8JQXc7uQELRx%2BzT2ZBAvrIdp3Zh1o3wz7jCAq6MI%2FkgSF9acnKfNgTE2tJhANJi5lTt1c0wh%2F3EGb7sGcwehMg4%2B1l8CumQdFiGI5GRC3FY8prC6kvM9tAi32INyPvMZn2gc1hlY6sZReVmCmypBA3%2F5TqCuzYyiwtR0z%2FpjcjJQbEjcHKef7bybyiYX1uIO%2FrbAc2HMIvWQ6Ir3ccaMi%2F%2F1YuDZBhbAXIqg%2FVhiE1iQYyz2thev3l9DY7EH1Lpi7RSi%2Bou7tdsaMwfwiWx6kUFigvfp8MULezsYHWiiyPEID9PZC5X7fcqhbt%2BhSdzeaAVDI3SjY0rJqfvLoBqFwuox74J%2F1DBNX34ZlzDTjjdCbnaOEH8NppB4DAeSX4s58FIMcZ%2BoyE3qYMJHqf7rQ%2BV6IZOM%2BzKFhvHlFKryvViSOLVygWbDjqnaHL5ufazicVTiujlTE6nH0xHyG2r6pMNKfg%2FLPVFMRD%2Fi%2BPNoEyvJg0nwJEuROUdWRZEazOltYhFx2q6NL4PYJb9f7Kmhvqk3mCWruq17pgp42KhOXCW1B5iSanl8TS3gw6baIxAY6pgHhx%2BQvtYftOYrwVm2MnKaCwz%2ByGjbfTRt7Dd4pdVjKFa9VNdLZtgt%2FM44tmZdQiNg7ywTb2%2FHChZFMXaQNnw9nm0x5iCs1IIyTWRvFlpy5bfwfkJhhAsPeNAN3uI99nU7RH66DKDB0ue93mGGtcpReTqoFG0V8d5PDxJ56MbsYI8RSuA3XmLGjqQLc%2FSRIQZG%2BVAAQAzffu0KvH4OXOwrT%2Bs9adeIT&X-Amz-Signature=023719f037852bcd3aebd465301b3e7f7d61f952a31a0908cd3596208c33f597&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2WEJAUS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDZvv7tWmtPjNi6wStpLvM0fyXBYACixn2wEM%2Bo8dlbEAiA1WeKfymBse6ClsESeqU8%2F0GHj8LV61qzbYEMzTuYbkSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM7K40fx8t5P1KEGwkKtwDxUa83KjL10Sq6sT2wOG86bjlD%2B0OmQqTLpYC6KW6TGW2ii4hIBcvn1mvHEZtVrbFqmr8JQXc7uQELRx%2BzT2ZBAvrIdp3Zh1o3wz7jCAq6MI%2FkgSF9acnKfNgTE2tJhANJi5lTt1c0wh%2F3EGb7sGcwehMg4%2B1l8CumQdFiGI5GRC3FY8prC6kvM9tAi32INyPvMZn2gc1hlY6sZReVmCmypBA3%2F5TqCuzYyiwtR0z%2FpjcjJQbEjcHKef7bybyiYX1uIO%2FrbAc2HMIvWQ6Ir3ccaMi%2F%2F1YuDZBhbAXIqg%2FVhiE1iQYyz2thev3l9DY7EH1Lpi7RSi%2Bou7tdsaMwfwiWx6kUFigvfp8MULezsYHWiiyPEID9PZC5X7fcqhbt%2BhSdzeaAVDI3SjY0rJqfvLoBqFwuox74J%2F1DBNX34ZlzDTjjdCbnaOEH8NppB4DAeSX4s58FIMcZ%2BoyE3qYMJHqf7rQ%2BV6IZOM%2BzKFhvHlFKryvViSOLVygWbDjqnaHL5ufazicVTiujlTE6nH0xHyG2r6pMNKfg%2FLPVFMRD%2Fi%2BPNoEyvJg0nwJEuROUdWRZEazOltYhFx2q6NL4PYJb9f7Kmhvqk3mCWruq17pgp42KhOXCW1B5iSanl8TS3gw6baIxAY6pgHhx%2BQvtYftOYrwVm2MnKaCwz%2ByGjbfTRt7Dd4pdVjKFa9VNdLZtgt%2FM44tmZdQiNg7ywTb2%2FHChZFMXaQNnw9nm0x5iCs1IIyTWRvFlpy5bfwfkJhhAsPeNAN3uI99nU7RH66DKDB0ue93mGGtcpReTqoFG0V8d5PDxJ56MbsYI8RSuA3XmLGjqQLc%2FSRIQZG%2BVAAQAzffu0KvH4OXOwrT%2Bs9adeIT&X-Amz-Signature=3fdd56e03e95a2754412fa2ad81b148840714128545b5a2963f4aea181c0f950&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2WEJAUS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDZvv7tWmtPjNi6wStpLvM0fyXBYACixn2wEM%2Bo8dlbEAiA1WeKfymBse6ClsESeqU8%2F0GHj8LV61qzbYEMzTuYbkSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM7K40fx8t5P1KEGwkKtwDxUa83KjL10Sq6sT2wOG86bjlD%2B0OmQqTLpYC6KW6TGW2ii4hIBcvn1mvHEZtVrbFqmr8JQXc7uQELRx%2BzT2ZBAvrIdp3Zh1o3wz7jCAq6MI%2FkgSF9acnKfNgTE2tJhANJi5lTt1c0wh%2F3EGb7sGcwehMg4%2B1l8CumQdFiGI5GRC3FY8prC6kvM9tAi32INyPvMZn2gc1hlY6sZReVmCmypBA3%2F5TqCuzYyiwtR0z%2FpjcjJQbEjcHKef7bybyiYX1uIO%2FrbAc2HMIvWQ6Ir3ccaMi%2F%2F1YuDZBhbAXIqg%2FVhiE1iQYyz2thev3l9DY7EH1Lpi7RSi%2Bou7tdsaMwfwiWx6kUFigvfp8MULezsYHWiiyPEID9PZC5X7fcqhbt%2BhSdzeaAVDI3SjY0rJqfvLoBqFwuox74J%2F1DBNX34ZlzDTjjdCbnaOEH8NppB4DAeSX4s58FIMcZ%2BoyE3qYMJHqf7rQ%2BV6IZOM%2BzKFhvHlFKryvViSOLVygWbDjqnaHL5ufazicVTiujlTE6nH0xHyG2r6pMNKfg%2FLPVFMRD%2Fi%2BPNoEyvJg0nwJEuROUdWRZEazOltYhFx2q6NL4PYJb9f7Kmhvqk3mCWruq17pgp42KhOXCW1B5iSanl8TS3gw6baIxAY6pgHhx%2BQvtYftOYrwVm2MnKaCwz%2ByGjbfTRt7Dd4pdVjKFa9VNdLZtgt%2FM44tmZdQiNg7ywTb2%2FHChZFMXaQNnw9nm0x5iCs1IIyTWRvFlpy5bfwfkJhhAsPeNAN3uI99nU7RH66DKDB0ue93mGGtcpReTqoFG0V8d5PDxJ56MbsYI8RSuA3XmLGjqQLc%2FSRIQZG%2BVAAQAzffu0KvH4OXOwrT%2Bs9adeIT&X-Amz-Signature=664310b85286176ba9e97c5d6af3fb6b450cc220cf45d5813ee14f1d29cc8c2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2WEJAUS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDZvv7tWmtPjNi6wStpLvM0fyXBYACixn2wEM%2Bo8dlbEAiA1WeKfymBse6ClsESeqU8%2F0GHj8LV61qzbYEMzTuYbkSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM7K40fx8t5P1KEGwkKtwDxUa83KjL10Sq6sT2wOG86bjlD%2B0OmQqTLpYC6KW6TGW2ii4hIBcvn1mvHEZtVrbFqmr8JQXc7uQELRx%2BzT2ZBAvrIdp3Zh1o3wz7jCAq6MI%2FkgSF9acnKfNgTE2tJhANJi5lTt1c0wh%2F3EGb7sGcwehMg4%2B1l8CumQdFiGI5GRC3FY8prC6kvM9tAi32INyPvMZn2gc1hlY6sZReVmCmypBA3%2F5TqCuzYyiwtR0z%2FpjcjJQbEjcHKef7bybyiYX1uIO%2FrbAc2HMIvWQ6Ir3ccaMi%2F%2F1YuDZBhbAXIqg%2FVhiE1iQYyz2thev3l9DY7EH1Lpi7RSi%2Bou7tdsaMwfwiWx6kUFigvfp8MULezsYHWiiyPEID9PZC5X7fcqhbt%2BhSdzeaAVDI3SjY0rJqfvLoBqFwuox74J%2F1DBNX34ZlzDTjjdCbnaOEH8NppB4DAeSX4s58FIMcZ%2BoyE3qYMJHqf7rQ%2BV6IZOM%2BzKFhvHlFKryvViSOLVygWbDjqnaHL5ufazicVTiujlTE6nH0xHyG2r6pMNKfg%2FLPVFMRD%2Fi%2BPNoEyvJg0nwJEuROUdWRZEazOltYhFx2q6NL4PYJb9f7Kmhvqk3mCWruq17pgp42KhOXCW1B5iSanl8TS3gw6baIxAY6pgHhx%2BQvtYftOYrwVm2MnKaCwz%2ByGjbfTRt7Dd4pdVjKFa9VNdLZtgt%2FM44tmZdQiNg7ywTb2%2FHChZFMXaQNnw9nm0x5iCs1IIyTWRvFlpy5bfwfkJhhAsPeNAN3uI99nU7RH66DKDB0ue93mGGtcpReTqoFG0V8d5PDxJ56MbsYI8RSuA3XmLGjqQLc%2FSRIQZG%2BVAAQAzffu0KvH4OXOwrT%2Bs9adeIT&X-Amz-Signature=37a92d1d6497af0b02932e6b7668f688e04d0ca118cabecf907186f7c73e22ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2WEJAUS%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIDZvv7tWmtPjNi6wStpLvM0fyXBYACixn2wEM%2Bo8dlbEAiA1WeKfymBse6ClsESeqU8%2F0GHj8LV61qzbYEMzTuYbkSr%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIM7K40fx8t5P1KEGwkKtwDxUa83KjL10Sq6sT2wOG86bjlD%2B0OmQqTLpYC6KW6TGW2ii4hIBcvn1mvHEZtVrbFqmr8JQXc7uQELRx%2BzT2ZBAvrIdp3Zh1o3wz7jCAq6MI%2FkgSF9acnKfNgTE2tJhANJi5lTt1c0wh%2F3EGb7sGcwehMg4%2B1l8CumQdFiGI5GRC3FY8prC6kvM9tAi32INyPvMZn2gc1hlY6sZReVmCmypBA3%2F5TqCuzYyiwtR0z%2FpjcjJQbEjcHKef7bybyiYX1uIO%2FrbAc2HMIvWQ6Ir3ccaMi%2F%2F1YuDZBhbAXIqg%2FVhiE1iQYyz2thev3l9DY7EH1Lpi7RSi%2Bou7tdsaMwfwiWx6kUFigvfp8MULezsYHWiiyPEID9PZC5X7fcqhbt%2BhSdzeaAVDI3SjY0rJqfvLoBqFwuox74J%2F1DBNX34ZlzDTjjdCbnaOEH8NppB4DAeSX4s58FIMcZ%2BoyE3qYMJHqf7rQ%2BV6IZOM%2BzKFhvHlFKryvViSOLVygWbDjqnaHL5ufazicVTiujlTE6nH0xHyG2r6pMNKfg%2FLPVFMRD%2Fi%2BPNoEyvJg0nwJEuROUdWRZEazOltYhFx2q6NL4PYJb9f7Kmhvqk3mCWruq17pgp42KhOXCW1B5iSanl8TS3gw6baIxAY6pgHhx%2BQvtYftOYrwVm2MnKaCwz%2ByGjbfTRt7Dd4pdVjKFa9VNdLZtgt%2FM44tmZdQiNg7ywTb2%2FHChZFMXaQNnw9nm0x5iCs1IIyTWRvFlpy5bfwfkJhhAsPeNAN3uI99nU7RH66DKDB0ue93mGGtcpReTqoFG0V8d5PDxJ56MbsYI8RSuA3XmLGjqQLc%2FSRIQZG%2BVAAQAzffu0KvH4OXOwrT%2Bs9adeIT&X-Amz-Signature=202a205b922988455c97b5540a6e782792ad6e64e35acd5f2f5d77f9f26541f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
