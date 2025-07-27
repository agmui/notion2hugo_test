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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULIIRAR6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC2ceWAmkLdzJ42EbiBdOgzrQeuRxe31aRKNsZLNjZ33gIhANd5PD8T7HDqPl7gHbAk1hJObUC1fteLU6n5%2FDY%2F1446Kv8DCHIQABoMNjM3NDIzMTgzODA1IgyE15YgM5ElvINVAtwq3APBUVleHiKqAwjiTj%2FjrxWj0Ji0vLbVgPUS9OGNJK9jf30i40W%2BjLwyNoYKxy4HIVH%2BMuV3%2BGYbGEIAUYYJ3kd0qz2qPR%2FvvmrkTB9l0pMQ5Ic87J1TUWUAXmGOhx9szBOqHIyzs%2FU%2BrSYuLLCKzl75rtLrRODDcf7Si5D3IdxfjiIA1lnBD%2FLNaryUkREFGoRRpGzC9UhEG5vAYjz6DRNcXGaa8KEroRMw7W5eoEdOVsr9kkQkNhuhrP1BsGYMw7hqBIvagaOwk02AI35%2Fp%2BzStiyrxFV78ovazV3WmdfDQcvwOCaF6h2WBigSof9z%2BpBC3EW57nd9dqo8yyM6J%2BeOMZJ7X%2F0EqOP%2FbqI%2BcLK3VKs8T%2BrVMHkN6jmClGnKjfAnsVYfYoVUt8YxQg65iHuRIn73Z6GN062Yk0v%2FbP%2F1UoxwrsZNA4wO9JlPLf33lZyokq9y3y8QpPDdEZw2dfXR0406tMecqXpE%2B6lr6kFxWqxTG5pQCgbgk6NM%2BhUd6qLYr8uWY64aZP%2FkwctYNf4LWBi4lhqKnr%2Brg4GLmdDSpNuEgdEMVjuKppvmscN9nm1z5El8c7HxlsiQEI3fm50NppB9gx1%2BwcB7i%2BetWGXOJiUEI%2FcWiBMJuV6s%2FzCG3ZfEBjqkARAQJ6DnrCRJTltE4asB89BWVaS3ZP0Ojx6lrfdC3j%2BV2ukcMB%2BvQWjEeJKOFuGI82ZrS5Yydq3X2rdV%2F6ecm6yYJWaY7UpenHzHFJ7QT742kT3jQFDxWLaIsQU8Jw3ZSO%2ByhB7dFAjOcP%2BfWSecZviftvDe6gG0aYtvdjhqqeguSaH7xLNvvSW8%2BhgY2vAPI5pftogJyCGoihhnsnI2g6ioL0eI&X-Amz-Signature=702e39d5016f0d743a72482bf3283314462ee28363dd6648ab1f51537c04c85a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULIIRAR6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC2ceWAmkLdzJ42EbiBdOgzrQeuRxe31aRKNsZLNjZ33gIhANd5PD8T7HDqPl7gHbAk1hJObUC1fteLU6n5%2FDY%2F1446Kv8DCHIQABoMNjM3NDIzMTgzODA1IgyE15YgM5ElvINVAtwq3APBUVleHiKqAwjiTj%2FjrxWj0Ji0vLbVgPUS9OGNJK9jf30i40W%2BjLwyNoYKxy4HIVH%2BMuV3%2BGYbGEIAUYYJ3kd0qz2qPR%2FvvmrkTB9l0pMQ5Ic87J1TUWUAXmGOhx9szBOqHIyzs%2FU%2BrSYuLLCKzl75rtLrRODDcf7Si5D3IdxfjiIA1lnBD%2FLNaryUkREFGoRRpGzC9UhEG5vAYjz6DRNcXGaa8KEroRMw7W5eoEdOVsr9kkQkNhuhrP1BsGYMw7hqBIvagaOwk02AI35%2Fp%2BzStiyrxFV78ovazV3WmdfDQcvwOCaF6h2WBigSof9z%2BpBC3EW57nd9dqo8yyM6J%2BeOMZJ7X%2F0EqOP%2FbqI%2BcLK3VKs8T%2BrVMHkN6jmClGnKjfAnsVYfYoVUt8YxQg65iHuRIn73Z6GN062Yk0v%2FbP%2F1UoxwrsZNA4wO9JlPLf33lZyokq9y3y8QpPDdEZw2dfXR0406tMecqXpE%2B6lr6kFxWqxTG5pQCgbgk6NM%2BhUd6qLYr8uWY64aZP%2FkwctYNf4LWBi4lhqKnr%2Brg4GLmdDSpNuEgdEMVjuKppvmscN9nm1z5El8c7HxlsiQEI3fm50NppB9gx1%2BwcB7i%2BetWGXOJiUEI%2FcWiBMJuV6s%2FzCG3ZfEBjqkARAQJ6DnrCRJTltE4asB89BWVaS3ZP0Ojx6lrfdC3j%2BV2ukcMB%2BvQWjEeJKOFuGI82ZrS5Yydq3X2rdV%2F6ecm6yYJWaY7UpenHzHFJ7QT742kT3jQFDxWLaIsQU8Jw3ZSO%2ByhB7dFAjOcP%2BfWSecZviftvDe6gG0aYtvdjhqqeguSaH7xLNvvSW8%2BhgY2vAPI5pftogJyCGoihhnsnI2g6ioL0eI&X-Amz-Signature=075c6c88b88059aac24fbee5f8d68769a98b0cb9705fe382a6c87feb2ca9cf02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULIIRAR6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC2ceWAmkLdzJ42EbiBdOgzrQeuRxe31aRKNsZLNjZ33gIhANd5PD8T7HDqPl7gHbAk1hJObUC1fteLU6n5%2FDY%2F1446Kv8DCHIQABoMNjM3NDIzMTgzODA1IgyE15YgM5ElvINVAtwq3APBUVleHiKqAwjiTj%2FjrxWj0Ji0vLbVgPUS9OGNJK9jf30i40W%2BjLwyNoYKxy4HIVH%2BMuV3%2BGYbGEIAUYYJ3kd0qz2qPR%2FvvmrkTB9l0pMQ5Ic87J1TUWUAXmGOhx9szBOqHIyzs%2FU%2BrSYuLLCKzl75rtLrRODDcf7Si5D3IdxfjiIA1lnBD%2FLNaryUkREFGoRRpGzC9UhEG5vAYjz6DRNcXGaa8KEroRMw7W5eoEdOVsr9kkQkNhuhrP1BsGYMw7hqBIvagaOwk02AI35%2Fp%2BzStiyrxFV78ovazV3WmdfDQcvwOCaF6h2WBigSof9z%2BpBC3EW57nd9dqo8yyM6J%2BeOMZJ7X%2F0EqOP%2FbqI%2BcLK3VKs8T%2BrVMHkN6jmClGnKjfAnsVYfYoVUt8YxQg65iHuRIn73Z6GN062Yk0v%2FbP%2F1UoxwrsZNA4wO9JlPLf33lZyokq9y3y8QpPDdEZw2dfXR0406tMecqXpE%2B6lr6kFxWqxTG5pQCgbgk6NM%2BhUd6qLYr8uWY64aZP%2FkwctYNf4LWBi4lhqKnr%2Brg4GLmdDSpNuEgdEMVjuKppvmscN9nm1z5El8c7HxlsiQEI3fm50NppB9gx1%2BwcB7i%2BetWGXOJiUEI%2FcWiBMJuV6s%2FzCG3ZfEBjqkARAQJ6DnrCRJTltE4asB89BWVaS3ZP0Ojx6lrfdC3j%2BV2ukcMB%2BvQWjEeJKOFuGI82ZrS5Yydq3X2rdV%2F6ecm6yYJWaY7UpenHzHFJ7QT742kT3jQFDxWLaIsQU8Jw3ZSO%2ByhB7dFAjOcP%2BfWSecZviftvDe6gG0aYtvdjhqqeguSaH7xLNvvSW8%2BhgY2vAPI5pftogJyCGoihhnsnI2g6ioL0eI&X-Amz-Signature=88877c5b70f38cbc602db0b8bee2845609007dedcb17198ef3888ec8ee8479d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULIIRAR6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC2ceWAmkLdzJ42EbiBdOgzrQeuRxe31aRKNsZLNjZ33gIhANd5PD8T7HDqPl7gHbAk1hJObUC1fteLU6n5%2FDY%2F1446Kv8DCHIQABoMNjM3NDIzMTgzODA1IgyE15YgM5ElvINVAtwq3APBUVleHiKqAwjiTj%2FjrxWj0Ji0vLbVgPUS9OGNJK9jf30i40W%2BjLwyNoYKxy4HIVH%2BMuV3%2BGYbGEIAUYYJ3kd0qz2qPR%2FvvmrkTB9l0pMQ5Ic87J1TUWUAXmGOhx9szBOqHIyzs%2FU%2BrSYuLLCKzl75rtLrRODDcf7Si5D3IdxfjiIA1lnBD%2FLNaryUkREFGoRRpGzC9UhEG5vAYjz6DRNcXGaa8KEroRMw7W5eoEdOVsr9kkQkNhuhrP1BsGYMw7hqBIvagaOwk02AI35%2Fp%2BzStiyrxFV78ovazV3WmdfDQcvwOCaF6h2WBigSof9z%2BpBC3EW57nd9dqo8yyM6J%2BeOMZJ7X%2F0EqOP%2FbqI%2BcLK3VKs8T%2BrVMHkN6jmClGnKjfAnsVYfYoVUt8YxQg65iHuRIn73Z6GN062Yk0v%2FbP%2F1UoxwrsZNA4wO9JlPLf33lZyokq9y3y8QpPDdEZw2dfXR0406tMecqXpE%2B6lr6kFxWqxTG5pQCgbgk6NM%2BhUd6qLYr8uWY64aZP%2FkwctYNf4LWBi4lhqKnr%2Brg4GLmdDSpNuEgdEMVjuKppvmscN9nm1z5El8c7HxlsiQEI3fm50NppB9gx1%2BwcB7i%2BetWGXOJiUEI%2FcWiBMJuV6s%2FzCG3ZfEBjqkARAQJ6DnrCRJTltE4asB89BWVaS3ZP0Ojx6lrfdC3j%2BV2ukcMB%2BvQWjEeJKOFuGI82ZrS5Yydq3X2rdV%2F6ecm6yYJWaY7UpenHzHFJ7QT742kT3jQFDxWLaIsQU8Jw3ZSO%2ByhB7dFAjOcP%2BfWSecZviftvDe6gG0aYtvdjhqqeguSaH7xLNvvSW8%2BhgY2vAPI5pftogJyCGoihhnsnI2g6ioL0eI&X-Amz-Signature=c2294904502a91a1817945072688b192358e6959c0664d11a8f9a4c0e5389de5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULIIRAR6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC2ceWAmkLdzJ42EbiBdOgzrQeuRxe31aRKNsZLNjZ33gIhANd5PD8T7HDqPl7gHbAk1hJObUC1fteLU6n5%2FDY%2F1446Kv8DCHIQABoMNjM3NDIzMTgzODA1IgyE15YgM5ElvINVAtwq3APBUVleHiKqAwjiTj%2FjrxWj0Ji0vLbVgPUS9OGNJK9jf30i40W%2BjLwyNoYKxy4HIVH%2BMuV3%2BGYbGEIAUYYJ3kd0qz2qPR%2FvvmrkTB9l0pMQ5Ic87J1TUWUAXmGOhx9szBOqHIyzs%2FU%2BrSYuLLCKzl75rtLrRODDcf7Si5D3IdxfjiIA1lnBD%2FLNaryUkREFGoRRpGzC9UhEG5vAYjz6DRNcXGaa8KEroRMw7W5eoEdOVsr9kkQkNhuhrP1BsGYMw7hqBIvagaOwk02AI35%2Fp%2BzStiyrxFV78ovazV3WmdfDQcvwOCaF6h2WBigSof9z%2BpBC3EW57nd9dqo8yyM6J%2BeOMZJ7X%2F0EqOP%2FbqI%2BcLK3VKs8T%2BrVMHkN6jmClGnKjfAnsVYfYoVUt8YxQg65iHuRIn73Z6GN062Yk0v%2FbP%2F1UoxwrsZNA4wO9JlPLf33lZyokq9y3y8QpPDdEZw2dfXR0406tMecqXpE%2B6lr6kFxWqxTG5pQCgbgk6NM%2BhUd6qLYr8uWY64aZP%2FkwctYNf4LWBi4lhqKnr%2Brg4GLmdDSpNuEgdEMVjuKppvmscN9nm1z5El8c7HxlsiQEI3fm50NppB9gx1%2BwcB7i%2BetWGXOJiUEI%2FcWiBMJuV6s%2FzCG3ZfEBjqkARAQJ6DnrCRJTltE4asB89BWVaS3ZP0Ojx6lrfdC3j%2BV2ukcMB%2BvQWjEeJKOFuGI82ZrS5Yydq3X2rdV%2F6ecm6yYJWaY7UpenHzHFJ7QT742kT3jQFDxWLaIsQU8Jw3ZSO%2ByhB7dFAjOcP%2BfWSecZviftvDe6gG0aYtvdjhqqeguSaH7xLNvvSW8%2BhgY2vAPI5pftogJyCGoihhnsnI2g6ioL0eI&X-Amz-Signature=bb0ef60e24582d45a8fd0e63da86ea1b615b73a121a2461019c0c69ea4aa8f8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULIIRAR6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC2ceWAmkLdzJ42EbiBdOgzrQeuRxe31aRKNsZLNjZ33gIhANd5PD8T7HDqPl7gHbAk1hJObUC1fteLU6n5%2FDY%2F1446Kv8DCHIQABoMNjM3NDIzMTgzODA1IgyE15YgM5ElvINVAtwq3APBUVleHiKqAwjiTj%2FjrxWj0Ji0vLbVgPUS9OGNJK9jf30i40W%2BjLwyNoYKxy4HIVH%2BMuV3%2BGYbGEIAUYYJ3kd0qz2qPR%2FvvmrkTB9l0pMQ5Ic87J1TUWUAXmGOhx9szBOqHIyzs%2FU%2BrSYuLLCKzl75rtLrRODDcf7Si5D3IdxfjiIA1lnBD%2FLNaryUkREFGoRRpGzC9UhEG5vAYjz6DRNcXGaa8KEroRMw7W5eoEdOVsr9kkQkNhuhrP1BsGYMw7hqBIvagaOwk02AI35%2Fp%2BzStiyrxFV78ovazV3WmdfDQcvwOCaF6h2WBigSof9z%2BpBC3EW57nd9dqo8yyM6J%2BeOMZJ7X%2F0EqOP%2FbqI%2BcLK3VKs8T%2BrVMHkN6jmClGnKjfAnsVYfYoVUt8YxQg65iHuRIn73Z6GN062Yk0v%2FbP%2F1UoxwrsZNA4wO9JlPLf33lZyokq9y3y8QpPDdEZw2dfXR0406tMecqXpE%2B6lr6kFxWqxTG5pQCgbgk6NM%2BhUd6qLYr8uWY64aZP%2FkwctYNf4LWBi4lhqKnr%2Brg4GLmdDSpNuEgdEMVjuKppvmscN9nm1z5El8c7HxlsiQEI3fm50NppB9gx1%2BwcB7i%2BetWGXOJiUEI%2FcWiBMJuV6s%2FzCG3ZfEBjqkARAQJ6DnrCRJTltE4asB89BWVaS3ZP0Ojx6lrfdC3j%2BV2ukcMB%2BvQWjEeJKOFuGI82ZrS5Yydq3X2rdV%2F6ecm6yYJWaY7UpenHzHFJ7QT742kT3jQFDxWLaIsQU8Jw3ZSO%2ByhB7dFAjOcP%2BfWSecZviftvDe6gG0aYtvdjhqqeguSaH7xLNvvSW8%2BhgY2vAPI5pftogJyCGoihhnsnI2g6ioL0eI&X-Amz-Signature=da1b4f76652ed402bea4d6c3773934643e66cabf1eddc7cf5fb2bb6648074043&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULIIRAR6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC2ceWAmkLdzJ42EbiBdOgzrQeuRxe31aRKNsZLNjZ33gIhANd5PD8T7HDqPl7gHbAk1hJObUC1fteLU6n5%2FDY%2F1446Kv8DCHIQABoMNjM3NDIzMTgzODA1IgyE15YgM5ElvINVAtwq3APBUVleHiKqAwjiTj%2FjrxWj0Ji0vLbVgPUS9OGNJK9jf30i40W%2BjLwyNoYKxy4HIVH%2BMuV3%2BGYbGEIAUYYJ3kd0qz2qPR%2FvvmrkTB9l0pMQ5Ic87J1TUWUAXmGOhx9szBOqHIyzs%2FU%2BrSYuLLCKzl75rtLrRODDcf7Si5D3IdxfjiIA1lnBD%2FLNaryUkREFGoRRpGzC9UhEG5vAYjz6DRNcXGaa8KEroRMw7W5eoEdOVsr9kkQkNhuhrP1BsGYMw7hqBIvagaOwk02AI35%2Fp%2BzStiyrxFV78ovazV3WmdfDQcvwOCaF6h2WBigSof9z%2BpBC3EW57nd9dqo8yyM6J%2BeOMZJ7X%2F0EqOP%2FbqI%2BcLK3VKs8T%2BrVMHkN6jmClGnKjfAnsVYfYoVUt8YxQg65iHuRIn73Z6GN062Yk0v%2FbP%2F1UoxwrsZNA4wO9JlPLf33lZyokq9y3y8QpPDdEZw2dfXR0406tMecqXpE%2B6lr6kFxWqxTG5pQCgbgk6NM%2BhUd6qLYr8uWY64aZP%2FkwctYNf4LWBi4lhqKnr%2Brg4GLmdDSpNuEgdEMVjuKppvmscN9nm1z5El8c7HxlsiQEI3fm50NppB9gx1%2BwcB7i%2BetWGXOJiUEI%2FcWiBMJuV6s%2FzCG3ZfEBjqkARAQJ6DnrCRJTltE4asB89BWVaS3ZP0Ojx6lrfdC3j%2BV2ukcMB%2BvQWjEeJKOFuGI82ZrS5Yydq3X2rdV%2F6ecm6yYJWaY7UpenHzHFJ7QT742kT3jQFDxWLaIsQU8Jw3ZSO%2ByhB7dFAjOcP%2BfWSecZviftvDe6gG0aYtvdjhqqeguSaH7xLNvvSW8%2BhgY2vAPI5pftogJyCGoihhnsnI2g6ioL0eI&X-Amz-Signature=e2390a87e23c8acd743f4a83a4d4d5d61ecd1738d6583af8c157320278cc575f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULIIRAR6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC2ceWAmkLdzJ42EbiBdOgzrQeuRxe31aRKNsZLNjZ33gIhANd5PD8T7HDqPl7gHbAk1hJObUC1fteLU6n5%2FDY%2F1446Kv8DCHIQABoMNjM3NDIzMTgzODA1IgyE15YgM5ElvINVAtwq3APBUVleHiKqAwjiTj%2FjrxWj0Ji0vLbVgPUS9OGNJK9jf30i40W%2BjLwyNoYKxy4HIVH%2BMuV3%2BGYbGEIAUYYJ3kd0qz2qPR%2FvvmrkTB9l0pMQ5Ic87J1TUWUAXmGOhx9szBOqHIyzs%2FU%2BrSYuLLCKzl75rtLrRODDcf7Si5D3IdxfjiIA1lnBD%2FLNaryUkREFGoRRpGzC9UhEG5vAYjz6DRNcXGaa8KEroRMw7W5eoEdOVsr9kkQkNhuhrP1BsGYMw7hqBIvagaOwk02AI35%2Fp%2BzStiyrxFV78ovazV3WmdfDQcvwOCaF6h2WBigSof9z%2BpBC3EW57nd9dqo8yyM6J%2BeOMZJ7X%2F0EqOP%2FbqI%2BcLK3VKs8T%2BrVMHkN6jmClGnKjfAnsVYfYoVUt8YxQg65iHuRIn73Z6GN062Yk0v%2FbP%2F1UoxwrsZNA4wO9JlPLf33lZyokq9y3y8QpPDdEZw2dfXR0406tMecqXpE%2B6lr6kFxWqxTG5pQCgbgk6NM%2BhUd6qLYr8uWY64aZP%2FkwctYNf4LWBi4lhqKnr%2Brg4GLmdDSpNuEgdEMVjuKppvmscN9nm1z5El8c7HxlsiQEI3fm50NppB9gx1%2BwcB7i%2BetWGXOJiUEI%2FcWiBMJuV6s%2FzCG3ZfEBjqkARAQJ6DnrCRJTltE4asB89BWVaS3ZP0Ojx6lrfdC3j%2BV2ukcMB%2BvQWjEeJKOFuGI82ZrS5Yydq3X2rdV%2F6ecm6yYJWaY7UpenHzHFJ7QT742kT3jQFDxWLaIsQU8Jw3ZSO%2ByhB7dFAjOcP%2BfWSecZviftvDe6gG0aYtvdjhqqeguSaH7xLNvvSW8%2BhgY2vAPI5pftogJyCGoihhnsnI2g6ioL0eI&X-Amz-Signature=c3e0dc782aad4b2ca4a1fe84052867959b91f611ed2cdf2986c386a5b690f6f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULIIRAR6%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T110800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQC2ceWAmkLdzJ42EbiBdOgzrQeuRxe31aRKNsZLNjZ33gIhANd5PD8T7HDqPl7gHbAk1hJObUC1fteLU6n5%2FDY%2F1446Kv8DCHIQABoMNjM3NDIzMTgzODA1IgyE15YgM5ElvINVAtwq3APBUVleHiKqAwjiTj%2FjrxWj0Ji0vLbVgPUS9OGNJK9jf30i40W%2BjLwyNoYKxy4HIVH%2BMuV3%2BGYbGEIAUYYJ3kd0qz2qPR%2FvvmrkTB9l0pMQ5Ic87J1TUWUAXmGOhx9szBOqHIyzs%2FU%2BrSYuLLCKzl75rtLrRODDcf7Si5D3IdxfjiIA1lnBD%2FLNaryUkREFGoRRpGzC9UhEG5vAYjz6DRNcXGaa8KEroRMw7W5eoEdOVsr9kkQkNhuhrP1BsGYMw7hqBIvagaOwk02AI35%2Fp%2BzStiyrxFV78ovazV3WmdfDQcvwOCaF6h2WBigSof9z%2BpBC3EW57nd9dqo8yyM6J%2BeOMZJ7X%2F0EqOP%2FbqI%2BcLK3VKs8T%2BrVMHkN6jmClGnKjfAnsVYfYoVUt8YxQg65iHuRIn73Z6GN062Yk0v%2FbP%2F1UoxwrsZNA4wO9JlPLf33lZyokq9y3y8QpPDdEZw2dfXR0406tMecqXpE%2B6lr6kFxWqxTG5pQCgbgk6NM%2BhUd6qLYr8uWY64aZP%2FkwctYNf4LWBi4lhqKnr%2Brg4GLmdDSpNuEgdEMVjuKppvmscN9nm1z5El8c7HxlsiQEI3fm50NppB9gx1%2BwcB7i%2BetWGXOJiUEI%2FcWiBMJuV6s%2FzCG3ZfEBjqkARAQJ6DnrCRJTltE4asB89BWVaS3ZP0Ojx6lrfdC3j%2BV2ukcMB%2BvQWjEeJKOFuGI82ZrS5Yydq3X2rdV%2F6ecm6yYJWaY7UpenHzHFJ7QT742kT3jQFDxWLaIsQU8Jw3ZSO%2ByhB7dFAjOcP%2BfWSecZviftvDe6gG0aYtvdjhqqeguSaH7xLNvvSW8%2BhgY2vAPI5pftogJyCGoihhnsnI2g6ioL0eI&X-Amz-Signature=e208b4e55f0b587e61dda3ecda021570f3df96363ce4424971028639a95b067a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
