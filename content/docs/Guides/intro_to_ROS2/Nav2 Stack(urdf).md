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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYCLMG3C%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T140207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCrZALJyTwNCkA9e8hpjNZn9tznPvc1iTFBivIt%2BA%2FCegIgfPEo6nyoA2J4%2FtKkKov2M3G8taycUaoK8Et0zRTtERgq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDHBZwNdfntdHr11vXSrcA7%2BsLY0if1EUS0TXH3quWGOf2vXJejdbc0zkmnhDQ%2Bz3S2FvDPBHCQPWcLkN%2FN7Qu%2FeAlKZQTfg4vKjrv6CADQqgXZy3c4%2B6MKBI7PhG1FnifgdLbQDUAmqGZreXK18b%2Bdj9QHnd7sEsJFvEayiqYo0KAnnqmDHZnDSxZ7JPLcQiebDlMQbyDqXAwCHUKcH7Vczx5GiGer9%2FURk%2BTJ3dA7cTA25opl%2Bd6oQ8AgM4%2F8Raf%2FqPJPZ%2BGdI67aDbPGO87UIHygUZ0UCE%2BtouVIYeGVgyseyKU3JJQsQTprqxme17dAVPIPvtfvKGmcpOT%2FvKAPYl9RQLJDZzPGqm5dDZAIOUsXQ0UP2Id0I0jUVzOfopoaOKDhpGu3yFwrDB3Kd%2BoSHvr2IHYMCvnk%2Fa2yVZgf3%2F155GruvdkMYz%2F8BkmnPROklyCRJukhAHNxuPk1pL%2BcvVSYwmn0qb%2B2hcycMIz0tHc9FuAvprB4jO5NpGHxtfCyO4c6wLrIuil006MDWPuz2%2FhtI%2FLivcMKEmEj4wuzP17cKalYaXxCWD%2B1mmtc2V%2F8NTX2zYR47MCB%2FuMibT37Lg2R953zY0ynl2u9dtQfMu3RxWNpYDb2LrZJPGBT%2Fju3aS4FNP1CR5wpxjMOzswb0GOqUBFtFd16AF%2FYLTkyhmVinqdT%2Bc7k60cYIQ0CMWX6VjpPtLhM0uyKQ8rEfb1sBWZ9MEWDqs94rWFa4lkkRg9uJ4OvgLkCao%2BidSq9Eaczc6EuTsr5yQTF4%2FXPxgxxJh879KREZ1dHlFI9zkNz5HTmXhtrZrnwLFigQxAR5CdBCe4LAW%2BSvpPbzdywTu5bA6bDS6juYySmamkp%2FRhGmSKUXR6FSuZOwR&X-Amz-Signature=1c79c86e9d0ab19f015e03e0bec598a8cb1ec178c71ec453d71ba51187b7f80e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYCLMG3C%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T140207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCrZALJyTwNCkA9e8hpjNZn9tznPvc1iTFBivIt%2BA%2FCegIgfPEo6nyoA2J4%2FtKkKov2M3G8taycUaoK8Et0zRTtERgq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDHBZwNdfntdHr11vXSrcA7%2BsLY0if1EUS0TXH3quWGOf2vXJejdbc0zkmnhDQ%2Bz3S2FvDPBHCQPWcLkN%2FN7Qu%2FeAlKZQTfg4vKjrv6CADQqgXZy3c4%2B6MKBI7PhG1FnifgdLbQDUAmqGZreXK18b%2Bdj9QHnd7sEsJFvEayiqYo0KAnnqmDHZnDSxZ7JPLcQiebDlMQbyDqXAwCHUKcH7Vczx5GiGer9%2FURk%2BTJ3dA7cTA25opl%2Bd6oQ8AgM4%2F8Raf%2FqPJPZ%2BGdI67aDbPGO87UIHygUZ0UCE%2BtouVIYeGVgyseyKU3JJQsQTprqxme17dAVPIPvtfvKGmcpOT%2FvKAPYl9RQLJDZzPGqm5dDZAIOUsXQ0UP2Id0I0jUVzOfopoaOKDhpGu3yFwrDB3Kd%2BoSHvr2IHYMCvnk%2Fa2yVZgf3%2F155GruvdkMYz%2F8BkmnPROklyCRJukhAHNxuPk1pL%2BcvVSYwmn0qb%2B2hcycMIz0tHc9FuAvprB4jO5NpGHxtfCyO4c6wLrIuil006MDWPuz2%2FhtI%2FLivcMKEmEj4wuzP17cKalYaXxCWD%2B1mmtc2V%2F8NTX2zYR47MCB%2FuMibT37Lg2R953zY0ynl2u9dtQfMu3RxWNpYDb2LrZJPGBT%2Fju3aS4FNP1CR5wpxjMOzswb0GOqUBFtFd16AF%2FYLTkyhmVinqdT%2Bc7k60cYIQ0CMWX6VjpPtLhM0uyKQ8rEfb1sBWZ9MEWDqs94rWFa4lkkRg9uJ4OvgLkCao%2BidSq9Eaczc6EuTsr5yQTF4%2FXPxgxxJh879KREZ1dHlFI9zkNz5HTmXhtrZrnwLFigQxAR5CdBCe4LAW%2BSvpPbzdywTu5bA6bDS6juYySmamkp%2FRhGmSKUXR6FSuZOwR&X-Amz-Signature=1a83b822dff236fe44839724e5f6ccb605dc05baf3405e20f0d445028874e5b4&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYCLMG3C%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T140207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCrZALJyTwNCkA9e8hpjNZn9tznPvc1iTFBivIt%2BA%2FCegIgfPEo6nyoA2J4%2FtKkKov2M3G8taycUaoK8Et0zRTtERgq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDHBZwNdfntdHr11vXSrcA7%2BsLY0if1EUS0TXH3quWGOf2vXJejdbc0zkmnhDQ%2Bz3S2FvDPBHCQPWcLkN%2FN7Qu%2FeAlKZQTfg4vKjrv6CADQqgXZy3c4%2B6MKBI7PhG1FnifgdLbQDUAmqGZreXK18b%2Bdj9QHnd7sEsJFvEayiqYo0KAnnqmDHZnDSxZ7JPLcQiebDlMQbyDqXAwCHUKcH7Vczx5GiGer9%2FURk%2BTJ3dA7cTA25opl%2Bd6oQ8AgM4%2F8Raf%2FqPJPZ%2BGdI67aDbPGO87UIHygUZ0UCE%2BtouVIYeGVgyseyKU3JJQsQTprqxme17dAVPIPvtfvKGmcpOT%2FvKAPYl9RQLJDZzPGqm5dDZAIOUsXQ0UP2Id0I0jUVzOfopoaOKDhpGu3yFwrDB3Kd%2BoSHvr2IHYMCvnk%2Fa2yVZgf3%2F155GruvdkMYz%2F8BkmnPROklyCRJukhAHNxuPk1pL%2BcvVSYwmn0qb%2B2hcycMIz0tHc9FuAvprB4jO5NpGHxtfCyO4c6wLrIuil006MDWPuz2%2FhtI%2FLivcMKEmEj4wuzP17cKalYaXxCWD%2B1mmtc2V%2F8NTX2zYR47MCB%2FuMibT37Lg2R953zY0ynl2u9dtQfMu3RxWNpYDb2LrZJPGBT%2Fju3aS4FNP1CR5wpxjMOzswb0GOqUBFtFd16AF%2FYLTkyhmVinqdT%2Bc7k60cYIQ0CMWX6VjpPtLhM0uyKQ8rEfb1sBWZ9MEWDqs94rWFa4lkkRg9uJ4OvgLkCao%2BidSq9Eaczc6EuTsr5yQTF4%2FXPxgxxJh879KREZ1dHlFI9zkNz5HTmXhtrZrnwLFigQxAR5CdBCe4LAW%2BSvpPbzdywTu5bA6bDS6juYySmamkp%2FRhGmSKUXR6FSuZOwR&X-Amz-Signature=c6e87489f5e7ad641b1116f66ba6caf08534844b3356b31678db7bd442f03359&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYCLMG3C%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T140207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCrZALJyTwNCkA9e8hpjNZn9tznPvc1iTFBivIt%2BA%2FCegIgfPEo6nyoA2J4%2FtKkKov2M3G8taycUaoK8Et0zRTtERgq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDHBZwNdfntdHr11vXSrcA7%2BsLY0if1EUS0TXH3quWGOf2vXJejdbc0zkmnhDQ%2Bz3S2FvDPBHCQPWcLkN%2FN7Qu%2FeAlKZQTfg4vKjrv6CADQqgXZy3c4%2B6MKBI7PhG1FnifgdLbQDUAmqGZreXK18b%2Bdj9QHnd7sEsJFvEayiqYo0KAnnqmDHZnDSxZ7JPLcQiebDlMQbyDqXAwCHUKcH7Vczx5GiGer9%2FURk%2BTJ3dA7cTA25opl%2Bd6oQ8AgM4%2F8Raf%2FqPJPZ%2BGdI67aDbPGO87UIHygUZ0UCE%2BtouVIYeGVgyseyKU3JJQsQTprqxme17dAVPIPvtfvKGmcpOT%2FvKAPYl9RQLJDZzPGqm5dDZAIOUsXQ0UP2Id0I0jUVzOfopoaOKDhpGu3yFwrDB3Kd%2BoSHvr2IHYMCvnk%2Fa2yVZgf3%2F155GruvdkMYz%2F8BkmnPROklyCRJukhAHNxuPk1pL%2BcvVSYwmn0qb%2B2hcycMIz0tHc9FuAvprB4jO5NpGHxtfCyO4c6wLrIuil006MDWPuz2%2FhtI%2FLivcMKEmEj4wuzP17cKalYaXxCWD%2B1mmtc2V%2F8NTX2zYR47MCB%2FuMibT37Lg2R953zY0ynl2u9dtQfMu3RxWNpYDb2LrZJPGBT%2Fju3aS4FNP1CR5wpxjMOzswb0GOqUBFtFd16AF%2FYLTkyhmVinqdT%2Bc7k60cYIQ0CMWX6VjpPtLhM0uyKQ8rEfb1sBWZ9MEWDqs94rWFa4lkkRg9uJ4OvgLkCao%2BidSq9Eaczc6EuTsr5yQTF4%2FXPxgxxJh879KREZ1dHlFI9zkNz5HTmXhtrZrnwLFigQxAR5CdBCe4LAW%2BSvpPbzdywTu5bA6bDS6juYySmamkp%2FRhGmSKUXR6FSuZOwR&X-Amz-Signature=43313e9e1011f15f01471a671eba500ae06fa9ffd0c9cdc556e15de57e4fa9e7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYCLMG3C%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T140207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCrZALJyTwNCkA9e8hpjNZn9tznPvc1iTFBivIt%2BA%2FCegIgfPEo6nyoA2J4%2FtKkKov2M3G8taycUaoK8Et0zRTtERgq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDHBZwNdfntdHr11vXSrcA7%2BsLY0if1EUS0TXH3quWGOf2vXJejdbc0zkmnhDQ%2Bz3S2FvDPBHCQPWcLkN%2FN7Qu%2FeAlKZQTfg4vKjrv6CADQqgXZy3c4%2B6MKBI7PhG1FnifgdLbQDUAmqGZreXK18b%2Bdj9QHnd7sEsJFvEayiqYo0KAnnqmDHZnDSxZ7JPLcQiebDlMQbyDqXAwCHUKcH7Vczx5GiGer9%2FURk%2BTJ3dA7cTA25opl%2Bd6oQ8AgM4%2F8Raf%2FqPJPZ%2BGdI67aDbPGO87UIHygUZ0UCE%2BtouVIYeGVgyseyKU3JJQsQTprqxme17dAVPIPvtfvKGmcpOT%2FvKAPYl9RQLJDZzPGqm5dDZAIOUsXQ0UP2Id0I0jUVzOfopoaOKDhpGu3yFwrDB3Kd%2BoSHvr2IHYMCvnk%2Fa2yVZgf3%2F155GruvdkMYz%2F8BkmnPROklyCRJukhAHNxuPk1pL%2BcvVSYwmn0qb%2B2hcycMIz0tHc9FuAvprB4jO5NpGHxtfCyO4c6wLrIuil006MDWPuz2%2FhtI%2FLivcMKEmEj4wuzP17cKalYaXxCWD%2B1mmtc2V%2F8NTX2zYR47MCB%2FuMibT37Lg2R953zY0ynl2u9dtQfMu3RxWNpYDb2LrZJPGBT%2Fju3aS4FNP1CR5wpxjMOzswb0GOqUBFtFd16AF%2FYLTkyhmVinqdT%2Bc7k60cYIQ0CMWX6VjpPtLhM0uyKQ8rEfb1sBWZ9MEWDqs94rWFa4lkkRg9uJ4OvgLkCao%2BidSq9Eaczc6EuTsr5yQTF4%2FXPxgxxJh879KREZ1dHlFI9zkNz5HTmXhtrZrnwLFigQxAR5CdBCe4LAW%2BSvpPbzdywTu5bA6bDS6juYySmamkp%2FRhGmSKUXR6FSuZOwR&X-Amz-Signature=68a681dad0360c95d0795b213bf68e7810b37a435f0f25a62f77209b41fca74e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYCLMG3C%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T140207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCrZALJyTwNCkA9e8hpjNZn9tznPvc1iTFBivIt%2BA%2FCegIgfPEo6nyoA2J4%2FtKkKov2M3G8taycUaoK8Et0zRTtERgq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDHBZwNdfntdHr11vXSrcA7%2BsLY0if1EUS0TXH3quWGOf2vXJejdbc0zkmnhDQ%2Bz3S2FvDPBHCQPWcLkN%2FN7Qu%2FeAlKZQTfg4vKjrv6CADQqgXZy3c4%2B6MKBI7PhG1FnifgdLbQDUAmqGZreXK18b%2Bdj9QHnd7sEsJFvEayiqYo0KAnnqmDHZnDSxZ7JPLcQiebDlMQbyDqXAwCHUKcH7Vczx5GiGer9%2FURk%2BTJ3dA7cTA25opl%2Bd6oQ8AgM4%2F8Raf%2FqPJPZ%2BGdI67aDbPGO87UIHygUZ0UCE%2BtouVIYeGVgyseyKU3JJQsQTprqxme17dAVPIPvtfvKGmcpOT%2FvKAPYl9RQLJDZzPGqm5dDZAIOUsXQ0UP2Id0I0jUVzOfopoaOKDhpGu3yFwrDB3Kd%2BoSHvr2IHYMCvnk%2Fa2yVZgf3%2F155GruvdkMYz%2F8BkmnPROklyCRJukhAHNxuPk1pL%2BcvVSYwmn0qb%2B2hcycMIz0tHc9FuAvprB4jO5NpGHxtfCyO4c6wLrIuil006MDWPuz2%2FhtI%2FLivcMKEmEj4wuzP17cKalYaXxCWD%2B1mmtc2V%2F8NTX2zYR47MCB%2FuMibT37Lg2R953zY0ynl2u9dtQfMu3RxWNpYDb2LrZJPGBT%2Fju3aS4FNP1CR5wpxjMOzswb0GOqUBFtFd16AF%2FYLTkyhmVinqdT%2Bc7k60cYIQ0CMWX6VjpPtLhM0uyKQ8rEfb1sBWZ9MEWDqs94rWFa4lkkRg9uJ4OvgLkCao%2BidSq9Eaczc6EuTsr5yQTF4%2FXPxgxxJh879KREZ1dHlFI9zkNz5HTmXhtrZrnwLFigQxAR5CdBCe4LAW%2BSvpPbzdywTu5bA6bDS6juYySmamkp%2FRhGmSKUXR6FSuZOwR&X-Amz-Signature=301baae20b44fa4708f724d65e3b0a1d7eb051fbea6d236a127bb539677e216a&X-Amz-SignedHeaders=host&x-id=GetObject)
