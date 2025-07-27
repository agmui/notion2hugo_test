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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDIXH3L7%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIFx8iJYMXm8M4x9888X6FqaAhUCYtuj3HpGnRx%2F3Cy9IAiEA9%2FXVDZ9P2UsIMHOkRjMkaPXPJYBMJs5od4kLGLVei2Eq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJP6SOf0wbP1WOPpZircA3fBP3T5wKXNd2emqTP%2Br84dxgK5j0Y4Ws%2BCAaUDQiWOJOMb8NkjhHXchDb6AEofTgVVdF%2BEiHM0ezEcuKXqp9OdOWq1318ug46XdXXWD%2BrPo6%2F6bgdE%2BwBV8z6Vbke56Mmtfg1wgVy3QOEBmMEJ%2Fbk0PSRQdxq9qAjBiIXscqs%2BYdXmRK1g4VfRFMu2rofoigd6UUueNhIUiE64Yuu9RPE218SeILcpKSm7mnnnCXDfApzhcIK%2FQMfGZ0G5e3bviSx3XGXyqn4ogYS1OyNAeVCqcBzkQ1PvWEoa4lXFKHKIq1l3jMn9hszpWqG5QeetLAcIj8vHyjQftocUGQOmP%2FAzYwY%2FJ9qngd8Uy7BAy93snTGNIG%2BQj1%2FFNorM3ngAhqeUllTeEPoPr8pUSXmswRdciKiAWw69vwZc8sMlS9RxWkJ0%2BdNWH5rWZbn6xVAVcDFQgTlAdYNhxWPlIsvc6Vy2AB28OjhvfvMCBZHanFauunGcMjLFbZSmxmH4RtSQ2XzWSHyfMljp%2BvGAlfbt%2FLUqPr04mvZqxSXnppyxgT2qdJ5p8Mf6CwkHwAkc37t8ubGmb4NTVUi%2FUheSdMGrYl2btyciUOsY%2BUlAjW7k0%2BM8dQM05zn65ZOWpW9GMKS7lsQGOqUBMxFvJdo8RFTFkhPXFanfHApche39s%2FnmPJTaKzwGx3WdJdPKZYmQxsOuxJHVpNvDlJt7ZOKA3DhX0Ml8hit9KskiaRlNjNHAuLQiqZN8DoeQqKHo5W4d4LOQxTXGPI7tkfa8hX1hqOdnbGCsg1VPEdtXeF%2FzOYwJrnWWNu5SadFxdwIayzin7WSIrwsutR2uNe6QglhZA%2FyXffwNTocAdp8pMZSy&X-Amz-Signature=6e47b04661a7643a32835255a41b49673722d821039ad01bfc560f8a28c530f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDIXH3L7%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIFx8iJYMXm8M4x9888X6FqaAhUCYtuj3HpGnRx%2F3Cy9IAiEA9%2FXVDZ9P2UsIMHOkRjMkaPXPJYBMJs5od4kLGLVei2Eq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJP6SOf0wbP1WOPpZircA3fBP3T5wKXNd2emqTP%2Br84dxgK5j0Y4Ws%2BCAaUDQiWOJOMb8NkjhHXchDb6AEofTgVVdF%2BEiHM0ezEcuKXqp9OdOWq1318ug46XdXXWD%2BrPo6%2F6bgdE%2BwBV8z6Vbke56Mmtfg1wgVy3QOEBmMEJ%2Fbk0PSRQdxq9qAjBiIXscqs%2BYdXmRK1g4VfRFMu2rofoigd6UUueNhIUiE64Yuu9RPE218SeILcpKSm7mnnnCXDfApzhcIK%2FQMfGZ0G5e3bviSx3XGXyqn4ogYS1OyNAeVCqcBzkQ1PvWEoa4lXFKHKIq1l3jMn9hszpWqG5QeetLAcIj8vHyjQftocUGQOmP%2FAzYwY%2FJ9qngd8Uy7BAy93snTGNIG%2BQj1%2FFNorM3ngAhqeUllTeEPoPr8pUSXmswRdciKiAWw69vwZc8sMlS9RxWkJ0%2BdNWH5rWZbn6xVAVcDFQgTlAdYNhxWPlIsvc6Vy2AB28OjhvfvMCBZHanFauunGcMjLFbZSmxmH4RtSQ2XzWSHyfMljp%2BvGAlfbt%2FLUqPr04mvZqxSXnppyxgT2qdJ5p8Mf6CwkHwAkc37t8ubGmb4NTVUi%2FUheSdMGrYl2btyciUOsY%2BUlAjW7k0%2BM8dQM05zn65ZOWpW9GMKS7lsQGOqUBMxFvJdo8RFTFkhPXFanfHApche39s%2FnmPJTaKzwGx3WdJdPKZYmQxsOuxJHVpNvDlJt7ZOKA3DhX0Ml8hit9KskiaRlNjNHAuLQiqZN8DoeQqKHo5W4d4LOQxTXGPI7tkfa8hX1hqOdnbGCsg1VPEdtXeF%2FzOYwJrnWWNu5SadFxdwIayzin7WSIrwsutR2uNe6QglhZA%2FyXffwNTocAdp8pMZSy&X-Amz-Signature=777faaeb2ee7e663ed802191749d19ff35d0e7cd7074d1ff5110bea152183d00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDIXH3L7%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIFx8iJYMXm8M4x9888X6FqaAhUCYtuj3HpGnRx%2F3Cy9IAiEA9%2FXVDZ9P2UsIMHOkRjMkaPXPJYBMJs5od4kLGLVei2Eq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJP6SOf0wbP1WOPpZircA3fBP3T5wKXNd2emqTP%2Br84dxgK5j0Y4Ws%2BCAaUDQiWOJOMb8NkjhHXchDb6AEofTgVVdF%2BEiHM0ezEcuKXqp9OdOWq1318ug46XdXXWD%2BrPo6%2F6bgdE%2BwBV8z6Vbke56Mmtfg1wgVy3QOEBmMEJ%2Fbk0PSRQdxq9qAjBiIXscqs%2BYdXmRK1g4VfRFMu2rofoigd6UUueNhIUiE64Yuu9RPE218SeILcpKSm7mnnnCXDfApzhcIK%2FQMfGZ0G5e3bviSx3XGXyqn4ogYS1OyNAeVCqcBzkQ1PvWEoa4lXFKHKIq1l3jMn9hszpWqG5QeetLAcIj8vHyjQftocUGQOmP%2FAzYwY%2FJ9qngd8Uy7BAy93snTGNIG%2BQj1%2FFNorM3ngAhqeUllTeEPoPr8pUSXmswRdciKiAWw69vwZc8sMlS9RxWkJ0%2BdNWH5rWZbn6xVAVcDFQgTlAdYNhxWPlIsvc6Vy2AB28OjhvfvMCBZHanFauunGcMjLFbZSmxmH4RtSQ2XzWSHyfMljp%2BvGAlfbt%2FLUqPr04mvZqxSXnppyxgT2qdJ5p8Mf6CwkHwAkc37t8ubGmb4NTVUi%2FUheSdMGrYl2btyciUOsY%2BUlAjW7k0%2BM8dQM05zn65ZOWpW9GMKS7lsQGOqUBMxFvJdo8RFTFkhPXFanfHApche39s%2FnmPJTaKzwGx3WdJdPKZYmQxsOuxJHVpNvDlJt7ZOKA3DhX0Ml8hit9KskiaRlNjNHAuLQiqZN8DoeQqKHo5W4d4LOQxTXGPI7tkfa8hX1hqOdnbGCsg1VPEdtXeF%2FzOYwJrnWWNu5SadFxdwIayzin7WSIrwsutR2uNe6QglhZA%2FyXffwNTocAdp8pMZSy&X-Amz-Signature=d0355c057cffd392bb16e608858d660b768f5022dd8f46023410e28f102bb613&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDIXH3L7%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIFx8iJYMXm8M4x9888X6FqaAhUCYtuj3HpGnRx%2F3Cy9IAiEA9%2FXVDZ9P2UsIMHOkRjMkaPXPJYBMJs5od4kLGLVei2Eq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJP6SOf0wbP1WOPpZircA3fBP3T5wKXNd2emqTP%2Br84dxgK5j0Y4Ws%2BCAaUDQiWOJOMb8NkjhHXchDb6AEofTgVVdF%2BEiHM0ezEcuKXqp9OdOWq1318ug46XdXXWD%2BrPo6%2F6bgdE%2BwBV8z6Vbke56Mmtfg1wgVy3QOEBmMEJ%2Fbk0PSRQdxq9qAjBiIXscqs%2BYdXmRK1g4VfRFMu2rofoigd6UUueNhIUiE64Yuu9RPE218SeILcpKSm7mnnnCXDfApzhcIK%2FQMfGZ0G5e3bviSx3XGXyqn4ogYS1OyNAeVCqcBzkQ1PvWEoa4lXFKHKIq1l3jMn9hszpWqG5QeetLAcIj8vHyjQftocUGQOmP%2FAzYwY%2FJ9qngd8Uy7BAy93snTGNIG%2BQj1%2FFNorM3ngAhqeUllTeEPoPr8pUSXmswRdciKiAWw69vwZc8sMlS9RxWkJ0%2BdNWH5rWZbn6xVAVcDFQgTlAdYNhxWPlIsvc6Vy2AB28OjhvfvMCBZHanFauunGcMjLFbZSmxmH4RtSQ2XzWSHyfMljp%2BvGAlfbt%2FLUqPr04mvZqxSXnppyxgT2qdJ5p8Mf6CwkHwAkc37t8ubGmb4NTVUi%2FUheSdMGrYl2btyciUOsY%2BUlAjW7k0%2BM8dQM05zn65ZOWpW9GMKS7lsQGOqUBMxFvJdo8RFTFkhPXFanfHApche39s%2FnmPJTaKzwGx3WdJdPKZYmQxsOuxJHVpNvDlJt7ZOKA3DhX0Ml8hit9KskiaRlNjNHAuLQiqZN8DoeQqKHo5W4d4LOQxTXGPI7tkfa8hX1hqOdnbGCsg1VPEdtXeF%2FzOYwJrnWWNu5SadFxdwIayzin7WSIrwsutR2uNe6QglhZA%2FyXffwNTocAdp8pMZSy&X-Amz-Signature=47d9e4ee757fa831b558912f0c6d3a0c26b7b39e2273d6e5dc0bdc161b14eb2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDIXH3L7%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIFx8iJYMXm8M4x9888X6FqaAhUCYtuj3HpGnRx%2F3Cy9IAiEA9%2FXVDZ9P2UsIMHOkRjMkaPXPJYBMJs5od4kLGLVei2Eq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJP6SOf0wbP1WOPpZircA3fBP3T5wKXNd2emqTP%2Br84dxgK5j0Y4Ws%2BCAaUDQiWOJOMb8NkjhHXchDb6AEofTgVVdF%2BEiHM0ezEcuKXqp9OdOWq1318ug46XdXXWD%2BrPo6%2F6bgdE%2BwBV8z6Vbke56Mmtfg1wgVy3QOEBmMEJ%2Fbk0PSRQdxq9qAjBiIXscqs%2BYdXmRK1g4VfRFMu2rofoigd6UUueNhIUiE64Yuu9RPE218SeILcpKSm7mnnnCXDfApzhcIK%2FQMfGZ0G5e3bviSx3XGXyqn4ogYS1OyNAeVCqcBzkQ1PvWEoa4lXFKHKIq1l3jMn9hszpWqG5QeetLAcIj8vHyjQftocUGQOmP%2FAzYwY%2FJ9qngd8Uy7BAy93snTGNIG%2BQj1%2FFNorM3ngAhqeUllTeEPoPr8pUSXmswRdciKiAWw69vwZc8sMlS9RxWkJ0%2BdNWH5rWZbn6xVAVcDFQgTlAdYNhxWPlIsvc6Vy2AB28OjhvfvMCBZHanFauunGcMjLFbZSmxmH4RtSQ2XzWSHyfMljp%2BvGAlfbt%2FLUqPr04mvZqxSXnppyxgT2qdJ5p8Mf6CwkHwAkc37t8ubGmb4NTVUi%2FUheSdMGrYl2btyciUOsY%2BUlAjW7k0%2BM8dQM05zn65ZOWpW9GMKS7lsQGOqUBMxFvJdo8RFTFkhPXFanfHApche39s%2FnmPJTaKzwGx3WdJdPKZYmQxsOuxJHVpNvDlJt7ZOKA3DhX0Ml8hit9KskiaRlNjNHAuLQiqZN8DoeQqKHo5W4d4LOQxTXGPI7tkfa8hX1hqOdnbGCsg1VPEdtXeF%2FzOYwJrnWWNu5SadFxdwIayzin7WSIrwsutR2uNe6QglhZA%2FyXffwNTocAdp8pMZSy&X-Amz-Signature=a8593b78b91843d23c7a7f53e5945773038fd1adc4171cd7d8d96e8773ff86e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDIXH3L7%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIFx8iJYMXm8M4x9888X6FqaAhUCYtuj3HpGnRx%2F3Cy9IAiEA9%2FXVDZ9P2UsIMHOkRjMkaPXPJYBMJs5od4kLGLVei2Eq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJP6SOf0wbP1WOPpZircA3fBP3T5wKXNd2emqTP%2Br84dxgK5j0Y4Ws%2BCAaUDQiWOJOMb8NkjhHXchDb6AEofTgVVdF%2BEiHM0ezEcuKXqp9OdOWq1318ug46XdXXWD%2BrPo6%2F6bgdE%2BwBV8z6Vbke56Mmtfg1wgVy3QOEBmMEJ%2Fbk0PSRQdxq9qAjBiIXscqs%2BYdXmRK1g4VfRFMu2rofoigd6UUueNhIUiE64Yuu9RPE218SeILcpKSm7mnnnCXDfApzhcIK%2FQMfGZ0G5e3bviSx3XGXyqn4ogYS1OyNAeVCqcBzkQ1PvWEoa4lXFKHKIq1l3jMn9hszpWqG5QeetLAcIj8vHyjQftocUGQOmP%2FAzYwY%2FJ9qngd8Uy7BAy93snTGNIG%2BQj1%2FFNorM3ngAhqeUllTeEPoPr8pUSXmswRdciKiAWw69vwZc8sMlS9RxWkJ0%2BdNWH5rWZbn6xVAVcDFQgTlAdYNhxWPlIsvc6Vy2AB28OjhvfvMCBZHanFauunGcMjLFbZSmxmH4RtSQ2XzWSHyfMljp%2BvGAlfbt%2FLUqPr04mvZqxSXnppyxgT2qdJ5p8Mf6CwkHwAkc37t8ubGmb4NTVUi%2FUheSdMGrYl2btyciUOsY%2BUlAjW7k0%2BM8dQM05zn65ZOWpW9GMKS7lsQGOqUBMxFvJdo8RFTFkhPXFanfHApche39s%2FnmPJTaKzwGx3WdJdPKZYmQxsOuxJHVpNvDlJt7ZOKA3DhX0Ml8hit9KskiaRlNjNHAuLQiqZN8DoeQqKHo5W4d4LOQxTXGPI7tkfa8hX1hqOdnbGCsg1VPEdtXeF%2FzOYwJrnWWNu5SadFxdwIayzin7WSIrwsutR2uNe6QglhZA%2FyXffwNTocAdp8pMZSy&X-Amz-Signature=ea3b9d62bc67e3cd83e347ddbc018bf3a2bb61f81a367bc1c9b3a9af95b07366&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDIXH3L7%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIFx8iJYMXm8M4x9888X6FqaAhUCYtuj3HpGnRx%2F3Cy9IAiEA9%2FXVDZ9P2UsIMHOkRjMkaPXPJYBMJs5od4kLGLVei2Eq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJP6SOf0wbP1WOPpZircA3fBP3T5wKXNd2emqTP%2Br84dxgK5j0Y4Ws%2BCAaUDQiWOJOMb8NkjhHXchDb6AEofTgVVdF%2BEiHM0ezEcuKXqp9OdOWq1318ug46XdXXWD%2BrPo6%2F6bgdE%2BwBV8z6Vbke56Mmtfg1wgVy3QOEBmMEJ%2Fbk0PSRQdxq9qAjBiIXscqs%2BYdXmRK1g4VfRFMu2rofoigd6UUueNhIUiE64Yuu9RPE218SeILcpKSm7mnnnCXDfApzhcIK%2FQMfGZ0G5e3bviSx3XGXyqn4ogYS1OyNAeVCqcBzkQ1PvWEoa4lXFKHKIq1l3jMn9hszpWqG5QeetLAcIj8vHyjQftocUGQOmP%2FAzYwY%2FJ9qngd8Uy7BAy93snTGNIG%2BQj1%2FFNorM3ngAhqeUllTeEPoPr8pUSXmswRdciKiAWw69vwZc8sMlS9RxWkJ0%2BdNWH5rWZbn6xVAVcDFQgTlAdYNhxWPlIsvc6Vy2AB28OjhvfvMCBZHanFauunGcMjLFbZSmxmH4RtSQ2XzWSHyfMljp%2BvGAlfbt%2FLUqPr04mvZqxSXnppyxgT2qdJ5p8Mf6CwkHwAkc37t8ubGmb4NTVUi%2FUheSdMGrYl2btyciUOsY%2BUlAjW7k0%2BM8dQM05zn65ZOWpW9GMKS7lsQGOqUBMxFvJdo8RFTFkhPXFanfHApche39s%2FnmPJTaKzwGx3WdJdPKZYmQxsOuxJHVpNvDlJt7ZOKA3DhX0Ml8hit9KskiaRlNjNHAuLQiqZN8DoeQqKHo5W4d4LOQxTXGPI7tkfa8hX1hqOdnbGCsg1VPEdtXeF%2FzOYwJrnWWNu5SadFxdwIayzin7WSIrwsutR2uNe6QglhZA%2FyXffwNTocAdp8pMZSy&X-Amz-Signature=d9147f03df4a6f111f3aa6211d049daf10617a54b87af59e4c442b3137244323&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDIXH3L7%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIFx8iJYMXm8M4x9888X6FqaAhUCYtuj3HpGnRx%2F3Cy9IAiEA9%2FXVDZ9P2UsIMHOkRjMkaPXPJYBMJs5od4kLGLVei2Eq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJP6SOf0wbP1WOPpZircA3fBP3T5wKXNd2emqTP%2Br84dxgK5j0Y4Ws%2BCAaUDQiWOJOMb8NkjhHXchDb6AEofTgVVdF%2BEiHM0ezEcuKXqp9OdOWq1318ug46XdXXWD%2BrPo6%2F6bgdE%2BwBV8z6Vbke56Mmtfg1wgVy3QOEBmMEJ%2Fbk0PSRQdxq9qAjBiIXscqs%2BYdXmRK1g4VfRFMu2rofoigd6UUueNhIUiE64Yuu9RPE218SeILcpKSm7mnnnCXDfApzhcIK%2FQMfGZ0G5e3bviSx3XGXyqn4ogYS1OyNAeVCqcBzkQ1PvWEoa4lXFKHKIq1l3jMn9hszpWqG5QeetLAcIj8vHyjQftocUGQOmP%2FAzYwY%2FJ9qngd8Uy7BAy93snTGNIG%2BQj1%2FFNorM3ngAhqeUllTeEPoPr8pUSXmswRdciKiAWw69vwZc8sMlS9RxWkJ0%2BdNWH5rWZbn6xVAVcDFQgTlAdYNhxWPlIsvc6Vy2AB28OjhvfvMCBZHanFauunGcMjLFbZSmxmH4RtSQ2XzWSHyfMljp%2BvGAlfbt%2FLUqPr04mvZqxSXnppyxgT2qdJ5p8Mf6CwkHwAkc37t8ubGmb4NTVUi%2FUheSdMGrYl2btyciUOsY%2BUlAjW7k0%2BM8dQM05zn65ZOWpW9GMKS7lsQGOqUBMxFvJdo8RFTFkhPXFanfHApche39s%2FnmPJTaKzwGx3WdJdPKZYmQxsOuxJHVpNvDlJt7ZOKA3DhX0Ml8hit9KskiaRlNjNHAuLQiqZN8DoeQqKHo5W4d4LOQxTXGPI7tkfa8hX1hqOdnbGCsg1VPEdtXeF%2FzOYwJrnWWNu5SadFxdwIayzin7WSIrwsutR2uNe6QglhZA%2FyXffwNTocAdp8pMZSy&X-Amz-Signature=e56d10eec65ebdc0c9f3059b94d4d6d52df414efcb5ed0afc5cafda8ad474cca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDIXH3L7%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIFx8iJYMXm8M4x9888X6FqaAhUCYtuj3HpGnRx%2F3Cy9IAiEA9%2FXVDZ9P2UsIMHOkRjMkaPXPJYBMJs5od4kLGLVei2Eq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDJP6SOf0wbP1WOPpZircA3fBP3T5wKXNd2emqTP%2Br84dxgK5j0Y4Ws%2BCAaUDQiWOJOMb8NkjhHXchDb6AEofTgVVdF%2BEiHM0ezEcuKXqp9OdOWq1318ug46XdXXWD%2BrPo6%2F6bgdE%2BwBV8z6Vbke56Mmtfg1wgVy3QOEBmMEJ%2Fbk0PSRQdxq9qAjBiIXscqs%2BYdXmRK1g4VfRFMu2rofoigd6UUueNhIUiE64Yuu9RPE218SeILcpKSm7mnnnCXDfApzhcIK%2FQMfGZ0G5e3bviSx3XGXyqn4ogYS1OyNAeVCqcBzkQ1PvWEoa4lXFKHKIq1l3jMn9hszpWqG5QeetLAcIj8vHyjQftocUGQOmP%2FAzYwY%2FJ9qngd8Uy7BAy93snTGNIG%2BQj1%2FFNorM3ngAhqeUllTeEPoPr8pUSXmswRdciKiAWw69vwZc8sMlS9RxWkJ0%2BdNWH5rWZbn6xVAVcDFQgTlAdYNhxWPlIsvc6Vy2AB28OjhvfvMCBZHanFauunGcMjLFbZSmxmH4RtSQ2XzWSHyfMljp%2BvGAlfbt%2FLUqPr04mvZqxSXnppyxgT2qdJ5p8Mf6CwkHwAkc37t8ubGmb4NTVUi%2FUheSdMGrYl2btyciUOsY%2BUlAjW7k0%2BM8dQM05zn65ZOWpW9GMKS7lsQGOqUBMxFvJdo8RFTFkhPXFanfHApche39s%2FnmPJTaKzwGx3WdJdPKZYmQxsOuxJHVpNvDlJt7ZOKA3DhX0Ml8hit9KskiaRlNjNHAuLQiqZN8DoeQqKHo5W4d4LOQxTXGPI7tkfa8hX1hqOdnbGCsg1VPEdtXeF%2FzOYwJrnWWNu5SadFxdwIayzin7WSIrwsutR2uNe6QglhZA%2FyXffwNTocAdp8pMZSy&X-Amz-Signature=59e35ef319b8bbd47e90b13da7fda57b1252db8d7244858bc7d96367cf952d88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
