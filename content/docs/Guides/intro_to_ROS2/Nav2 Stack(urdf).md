---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-02-07T18:41:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-02-07T18:41:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

TODO: add rqt graphs for each time we add a node for the Nav2 Stack series

# install pkg

# creating workspace + package

```bash
mkdir -p mbot_ws/src
cd mbot_ws/src
ros2 pkg create --build-type ament_python --license Apache-2.0 mbot_pkg 
```

### building 

```bash
cd ../../ # you should be in the mbot_ws folder after running this
colcon build --symlink-install  
source install/setup.bash
```

## Download

create rviz and urdf folder in `mbot_pkg` and download the rviz and urdf file:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UCIA5M7%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T170833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDHh49Qql6ghu4NniKUj3vHeP6E1VUpsjAE8O%2FKVC2LbQIgT2FgGA51nx9%2B6NQ3%2F%2F8QBgoc7rUokZmtwVLmZ2A2mhcq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDOZXsRFq5sDFfE4XZyrcA7habzx8ExU6EOHVPHyh4XxK3hlWdOOWwz6h%2FgVfQL7Cx92Lx%2BlBsBshBu%2FEj10%2FTS7ttG%2F0XGQBLQp0OxAd%2BWjbfsIF546c2c8dDK3D3yQyfH9Y%2BOx6pBjcz0RaaiDQctEZUMRFCrCt%2FxbMWu6Y76za%2FEEBgPlBYI60N9BM4j6MSos6w8kUQ4j1UjNOOuS129ouNbj5d4jlwwuPes9WVY6CcJLFso50Q%2FcrkS%2B6sRLHxlhwTm0C8ZDACYeIv2THN%2FMY7hCjrve5ihuAw22O5mBlCUhQsVj6h2RMfT77JnP5v9K%2BRIBpRiOOfwrONf8zNcJ3in%2FEtJ%2BtbFCz1Imdi20g6RYbhfvWbxWLA9v243pLxzofc25%2F668sRMIj%2BezxLy40WsbB4xuZOQ5v7jLabC1Te9yaqeMKVH2m9tG%2FI7gP7Xh58AP1vbuBhPB9AnE6nIg9PdCxQP8xwuEcHxIT37Ic%2FyXARDExDNC68LbULBlsnA06Y9OM37X36DkYx962OoyZ6sqJC14glCaAdsxoaJVyXlUKjVtEA088M%2BhgEuIHrpPbY9HIO9330DaJvw%2FM7KDkO4VyRKyAkYYs1qDPej4mnafDe7SL%2FPYL5VL5h02arAK79dBRPP9TL7RHMOec9cIGOqUBsr9qaa0lIfEHZwj24YT41GQ9q%2FmtRFNcGUyXDz1reaGj8lHTdLSvSXP%2FYY%2BxzSEUh5%2B2qH1d5JgXlTLS9Hw%2FDXwNCo%2BEXhvvapcFo1GelZ%2Bsz1ygZlEg2nCh8mE1IO2g%2FdBebvtUi80uQORbvyhLLIYTIT9%2BRkYPahsp%2FeqXtS8aqG77zngCxEsawvIoh5Vfe3KoPN%2F86s9qWVbRZBJmQQETW2zD&X-Amz-Signature=89fb0d92735c238eda786d919bba075678a318ec02c8b613c3e66749bd78128f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UCIA5M7%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T170833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDHh49Qql6ghu4NniKUj3vHeP6E1VUpsjAE8O%2FKVC2LbQIgT2FgGA51nx9%2B6NQ3%2F%2F8QBgoc7rUokZmtwVLmZ2A2mhcq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDOZXsRFq5sDFfE4XZyrcA7habzx8ExU6EOHVPHyh4XxK3hlWdOOWwz6h%2FgVfQL7Cx92Lx%2BlBsBshBu%2FEj10%2FTS7ttG%2F0XGQBLQp0OxAd%2BWjbfsIF546c2c8dDK3D3yQyfH9Y%2BOx6pBjcz0RaaiDQctEZUMRFCrCt%2FxbMWu6Y76za%2FEEBgPlBYI60N9BM4j6MSos6w8kUQ4j1UjNOOuS129ouNbj5d4jlwwuPes9WVY6CcJLFso50Q%2FcrkS%2B6sRLHxlhwTm0C8ZDACYeIv2THN%2FMY7hCjrve5ihuAw22O5mBlCUhQsVj6h2RMfT77JnP5v9K%2BRIBpRiOOfwrONf8zNcJ3in%2FEtJ%2BtbFCz1Imdi20g6RYbhfvWbxWLA9v243pLxzofc25%2F668sRMIj%2BezxLy40WsbB4xuZOQ5v7jLabC1Te9yaqeMKVH2m9tG%2FI7gP7Xh58AP1vbuBhPB9AnE6nIg9PdCxQP8xwuEcHxIT37Ic%2FyXARDExDNC68LbULBlsnA06Y9OM37X36DkYx962OoyZ6sqJC14glCaAdsxoaJVyXlUKjVtEA088M%2BhgEuIHrpPbY9HIO9330DaJvw%2FM7KDkO4VyRKyAkYYs1qDPej4mnafDe7SL%2FPYL5VL5h02arAK79dBRPP9TL7RHMOec9cIGOqUBsr9qaa0lIfEHZwj24YT41GQ9q%2FmtRFNcGUyXDz1reaGj8lHTdLSvSXP%2FYY%2BxzSEUh5%2B2qH1d5JgXlTLS9Hw%2FDXwNCo%2BEXhvvapcFo1GelZ%2Bsz1ygZlEg2nCh8mE1IO2g%2FdBebvtUi80uQORbvyhLLIYTIT9%2BRkYPahsp%2FeqXtS8aqG77zngCxEsawvIoh5Vfe3KoPN%2F86s9qWVbRZBJmQQETW2zD&X-Amz-Signature=bf87657ed14d7c488e05c0c00eb62d4e956debccebf69352d51ce9e7e01137a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UCIA5M7%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T170833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDHh49Qql6ghu4NniKUj3vHeP6E1VUpsjAE8O%2FKVC2LbQIgT2FgGA51nx9%2B6NQ3%2F%2F8QBgoc7rUokZmtwVLmZ2A2mhcq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDOZXsRFq5sDFfE4XZyrcA7habzx8ExU6EOHVPHyh4XxK3hlWdOOWwz6h%2FgVfQL7Cx92Lx%2BlBsBshBu%2FEj10%2FTS7ttG%2F0XGQBLQp0OxAd%2BWjbfsIF546c2c8dDK3D3yQyfH9Y%2BOx6pBjcz0RaaiDQctEZUMRFCrCt%2FxbMWu6Y76za%2FEEBgPlBYI60N9BM4j6MSos6w8kUQ4j1UjNOOuS129ouNbj5d4jlwwuPes9WVY6CcJLFso50Q%2FcrkS%2B6sRLHxlhwTm0C8ZDACYeIv2THN%2FMY7hCjrve5ihuAw22O5mBlCUhQsVj6h2RMfT77JnP5v9K%2BRIBpRiOOfwrONf8zNcJ3in%2FEtJ%2BtbFCz1Imdi20g6RYbhfvWbxWLA9v243pLxzofc25%2F668sRMIj%2BezxLy40WsbB4xuZOQ5v7jLabC1Te9yaqeMKVH2m9tG%2FI7gP7Xh58AP1vbuBhPB9AnE6nIg9PdCxQP8xwuEcHxIT37Ic%2FyXARDExDNC68LbULBlsnA06Y9OM37X36DkYx962OoyZ6sqJC14glCaAdsxoaJVyXlUKjVtEA088M%2BhgEuIHrpPbY9HIO9330DaJvw%2FM7KDkO4VyRKyAkYYs1qDPej4mnafDe7SL%2FPYL5VL5h02arAK79dBRPP9TL7RHMOec9cIGOqUBsr9qaa0lIfEHZwj24YT41GQ9q%2FmtRFNcGUyXDz1reaGj8lHTdLSvSXP%2FYY%2BxzSEUh5%2B2qH1d5JgXlTLS9Hw%2FDXwNCo%2BEXhvvapcFo1GelZ%2Bsz1ygZlEg2nCh8mE1IO2g%2FdBebvtUi80uQORbvyhLLIYTIT9%2BRkYPahsp%2FeqXtS8aqG77zngCxEsawvIoh5Vfe3KoPN%2F86s9qWVbRZBJmQQETW2zD&X-Amz-Signature=f7e01fd9ea4fe401599f3d9032e9253f52b960288d701d7a4a50b692ef777434&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UCIA5M7%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T170833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDHh49Qql6ghu4NniKUj3vHeP6E1VUpsjAE8O%2FKVC2LbQIgT2FgGA51nx9%2B6NQ3%2F%2F8QBgoc7rUokZmtwVLmZ2A2mhcq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDOZXsRFq5sDFfE4XZyrcA7habzx8ExU6EOHVPHyh4XxK3hlWdOOWwz6h%2FgVfQL7Cx92Lx%2BlBsBshBu%2FEj10%2FTS7ttG%2F0XGQBLQp0OxAd%2BWjbfsIF546c2c8dDK3D3yQyfH9Y%2BOx6pBjcz0RaaiDQctEZUMRFCrCt%2FxbMWu6Y76za%2FEEBgPlBYI60N9BM4j6MSos6w8kUQ4j1UjNOOuS129ouNbj5d4jlwwuPes9WVY6CcJLFso50Q%2FcrkS%2B6sRLHxlhwTm0C8ZDACYeIv2THN%2FMY7hCjrve5ihuAw22O5mBlCUhQsVj6h2RMfT77JnP5v9K%2BRIBpRiOOfwrONf8zNcJ3in%2FEtJ%2BtbFCz1Imdi20g6RYbhfvWbxWLA9v243pLxzofc25%2F668sRMIj%2BezxLy40WsbB4xuZOQ5v7jLabC1Te9yaqeMKVH2m9tG%2FI7gP7Xh58AP1vbuBhPB9AnE6nIg9PdCxQP8xwuEcHxIT37Ic%2FyXARDExDNC68LbULBlsnA06Y9OM37X36DkYx962OoyZ6sqJC14glCaAdsxoaJVyXlUKjVtEA088M%2BhgEuIHrpPbY9HIO9330DaJvw%2FM7KDkO4VyRKyAkYYs1qDPej4mnafDe7SL%2FPYL5VL5h02arAK79dBRPP9TL7RHMOec9cIGOqUBsr9qaa0lIfEHZwj24YT41GQ9q%2FmtRFNcGUyXDz1reaGj8lHTdLSvSXP%2FYY%2BxzSEUh5%2B2qH1d5JgXlTLS9Hw%2FDXwNCo%2BEXhvvapcFo1GelZ%2Bsz1ygZlEg2nCh8mE1IO2g%2FdBebvtUi80uQORbvyhLLIYTIT9%2BRkYPahsp%2FeqXtS8aqG77zngCxEsawvIoh5Vfe3KoPN%2F86s9qWVbRZBJmQQETW2zD&X-Amz-Signature=da79296c0dfb03e9389a2dea6c93d4e3c6543079b98965014a734a85e073b590&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

(From Articulated Robotics)

# creating launch file

make a launch folder called `display.launch.py`

**Nodes we are adding:**

{{< table "table-striped table-hover table-responsive" >}}

|   |   |
| - | - |
|   |   |
|   |   |

{{< /table >}}

- robot_state_publisher_node (reads the URDF and publishes to `/robot_description` all non-fixed joints, static joints and links)
- joint_state_publisher_node (finds all of the non-fixed joints and publishes to `/joint_states`)
- joint_state_publisher_gui_node (the same as joint_state_publisher_node but with a gui on top)
- rviz_node

## launch file

```python
import launch
from launch.substitutions import Command, LaunchConfiguration
import launch_ros
import os

def generate_launch_description():
    pkg_share = launch_ros.substitutions.FindPackageShare(package='mbot_pkg').find('mbot_pkg')
    default_model_path = os.path.join(pkg_share, 'urdf/mbot_description.urdf')
    default_rviz_config_path = os.path.join(pkg_share, 'rviz/urdf_config.rviz')

    robot_state_publisher_node = launch_ros.actions.Node(
        package='robot_state_publisher',
        executable='robot_state_publisher',
        parameters=[{'robot_description': Command(['xacro ', LaunchConfiguration('model')])}]
    )
    joint_state_publisher_node = launch_ros.actions.Node(
        package='joint_state_publisher',
        executable='joint_state_publisher',
        name='joint_state_publisher',
        parameters=[{'robot_description': Command(['xacro ', default_model_path])}],
        condition=launch.conditions.UnlessCondition(LaunchConfiguration('gui'))
    )
    joint_state_publisher_gui_node = launch_ros.actions.Node(
        package='joint_state_publisher_gui',
        executable='joint_state_publisher_gui',
        name='joint_state_publisher_gui',
        condition=launch.conditions.IfCondition(LaunchConfiguration('gui'))
    )
    rviz_node = launch_ros.actions.Node(
        package='rviz2',
        executable='rviz2',
        name='rviz2',
        output='screen',
        arguments=['-d', LaunchConfiguration('rvizconfig')],
    )

    return launch.LaunchDescription([
        launch.actions.DeclareLaunchArgument(name='gui', default_value='True',
                                            description='Flag to enable joint_state_publisher_gui'),
        launch.actions.DeclareLaunchArgument(name='model', default_value=default_model_path,
                                            description='Absolute path to robot urdf file'),
        launch.actions.DeclareLaunchArgument(name='rvizconfig', default_value=default_rviz_config_path,
                                            description='Absolute path to rviz config file'),
        joint_state_publisher_node,
        joint_state_publisher_gui_node,
        robot_state_publisher_node,
        rviz_node
    ])
```

## add new files to `setup.py` 

```python
import os
from glob import glob

from setuptools import find_packages, setup

package_name = 'mbot_code'

setup(
    name=package_name,
    version='0.0.0',
    packages=find_packages(exclude=['test']),
    data_files=[
        ('share/ament_index/resource_index/packages',
            ['resource/' + package_name]),
        ('share/' + package_name, ['package.xml']),
        (os.path.join('share', package_name, 'urdf'), glob('urdf/*.urdf')),
        (os.path.join('share', package_name, 'rviz'), glob('rviz/*.rviz*')),
        (os.path.join('share', package_name), glob('launch/*launch.[pxy][yma]*')),
    ],
    ...
```

run:

```bash
colcon build --symlink-install
ros2 launch mbot_pkg display.launch.py
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UCIA5M7%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T170833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDHh49Qql6ghu4NniKUj3vHeP6E1VUpsjAE8O%2FKVC2LbQIgT2FgGA51nx9%2B6NQ3%2F%2F8QBgoc7rUokZmtwVLmZ2A2mhcq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDOZXsRFq5sDFfE4XZyrcA7habzx8ExU6EOHVPHyh4XxK3hlWdOOWwz6h%2FgVfQL7Cx92Lx%2BlBsBshBu%2FEj10%2FTS7ttG%2F0XGQBLQp0OxAd%2BWjbfsIF546c2c8dDK3D3yQyfH9Y%2BOx6pBjcz0RaaiDQctEZUMRFCrCt%2FxbMWu6Y76za%2FEEBgPlBYI60N9BM4j6MSos6w8kUQ4j1UjNOOuS129ouNbj5d4jlwwuPes9WVY6CcJLFso50Q%2FcrkS%2B6sRLHxlhwTm0C8ZDACYeIv2THN%2FMY7hCjrve5ihuAw22O5mBlCUhQsVj6h2RMfT77JnP5v9K%2BRIBpRiOOfwrONf8zNcJ3in%2FEtJ%2BtbFCz1Imdi20g6RYbhfvWbxWLA9v243pLxzofc25%2F668sRMIj%2BezxLy40WsbB4xuZOQ5v7jLabC1Te9yaqeMKVH2m9tG%2FI7gP7Xh58AP1vbuBhPB9AnE6nIg9PdCxQP8xwuEcHxIT37Ic%2FyXARDExDNC68LbULBlsnA06Y9OM37X36DkYx962OoyZ6sqJC14glCaAdsxoaJVyXlUKjVtEA088M%2BhgEuIHrpPbY9HIO9330DaJvw%2FM7KDkO4VyRKyAkYYs1qDPej4mnafDe7SL%2FPYL5VL5h02arAK79dBRPP9TL7RHMOec9cIGOqUBsr9qaa0lIfEHZwj24YT41GQ9q%2FmtRFNcGUyXDz1reaGj8lHTdLSvSXP%2FYY%2BxzSEUh5%2B2qH1d5JgXlTLS9Hw%2FDXwNCo%2BEXhvvapcFo1GelZ%2Bsz1ygZlEg2nCh8mE1IO2g%2FdBebvtUi80uQORbvyhLLIYTIT9%2BRkYPahsp%2FeqXtS8aqG77zngCxEsawvIoh5Vfe3KoPN%2F86s9qWVbRZBJmQQETW2zD&X-Amz-Signature=dd24fbde82e8b1460adfe073468905a947874390e3ed6950d57fb9c73918908e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UCIA5M7%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T170833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDHh49Qql6ghu4NniKUj3vHeP6E1VUpsjAE8O%2FKVC2LbQIgT2FgGA51nx9%2B6NQ3%2F%2F8QBgoc7rUokZmtwVLmZ2A2mhcq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDOZXsRFq5sDFfE4XZyrcA7habzx8ExU6EOHVPHyh4XxK3hlWdOOWwz6h%2FgVfQL7Cx92Lx%2BlBsBshBu%2FEj10%2FTS7ttG%2F0XGQBLQp0OxAd%2BWjbfsIF546c2c8dDK3D3yQyfH9Y%2BOx6pBjcz0RaaiDQctEZUMRFCrCt%2FxbMWu6Y76za%2FEEBgPlBYI60N9BM4j6MSos6w8kUQ4j1UjNOOuS129ouNbj5d4jlwwuPes9WVY6CcJLFso50Q%2FcrkS%2B6sRLHxlhwTm0C8ZDACYeIv2THN%2FMY7hCjrve5ihuAw22O5mBlCUhQsVj6h2RMfT77JnP5v9K%2BRIBpRiOOfwrONf8zNcJ3in%2FEtJ%2BtbFCz1Imdi20g6RYbhfvWbxWLA9v243pLxzofc25%2F668sRMIj%2BezxLy40WsbB4xuZOQ5v7jLabC1Te9yaqeMKVH2m9tG%2FI7gP7Xh58AP1vbuBhPB9AnE6nIg9PdCxQP8xwuEcHxIT37Ic%2FyXARDExDNC68LbULBlsnA06Y9OM37X36DkYx962OoyZ6sqJC14glCaAdsxoaJVyXlUKjVtEA088M%2BhgEuIHrpPbY9HIO9330DaJvw%2FM7KDkO4VyRKyAkYYs1qDPej4mnafDe7SL%2FPYL5VL5h02arAK79dBRPP9TL7RHMOec9cIGOqUBsr9qaa0lIfEHZwj24YT41GQ9q%2FmtRFNcGUyXDz1reaGj8lHTdLSvSXP%2FYY%2BxzSEUh5%2B2qH1d5JgXlTLS9Hw%2FDXwNCo%2BEXhvvapcFo1GelZ%2Bsz1ygZlEg2nCh8mE1IO2g%2FdBebvtUi80uQORbvyhLLIYTIT9%2BRkYPahsp%2FeqXtS8aqG77zngCxEsawvIoh5Vfe3KoPN%2F86s9qWVbRZBJmQQETW2zD&X-Amz-Signature=116c3ee3454d2be8ede7a88bfc7567727c21fd97129853dc350240ffb945932c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
