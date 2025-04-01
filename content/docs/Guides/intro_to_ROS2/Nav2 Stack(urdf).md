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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWNPAZPY%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T140900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDgNlLaki10F2fHWHuK4XR4kZD0eZtA249q%2Fyr4sIbNrwIhAKPB8F%2BVj%2FwH3ku2%2B645bVlRQ9xq%2FJOBOSLjDRI%2FxJoQKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEJT%2FtFiQAK4iARbUq3APzeLz1bXqXDfQRIcjKbA8EitoA6iGP7qmZ0blBs0uZ11fvRaKB8ObgrXD2xjTyVeKzcm6fWJoRwtNhl5vOlbsbDUL7z7NdrwIUYLi4eOYVbO32kOQxHNPocXngB6fVr%2FBxj2AVEjiz64161%2BgbJ0DA7O5tuWTJwn3nhWuJDQLmbQ2KdzNRFvNGMx4lkJo94uVUiEVa5Opiwbqcb2FaiaadUTS5FhpKeAst02EIGbTbNlK32fHJ0I7wBdVKLpqdiFdXEe7YuZgNyKJa6jzvbYQAGZFgY07SDt9Kjx1yxQZofJF48nREtTWXd0PTwx0lmryB6t1s6dO6EUZSq3cTdqlQh6LG55GE02sDzMQ9SvoK7K9cYE2PS1phth4AlHoMEHN01cu0mAWWR%2BeBa7zlW7G1l4NQzID62samgY7HOpNg9w53o5yYqj1NKVWmSanyTDbgSqgTVZxKbddk5ujaOYH2TZh81HMO0CZu00Zj%2FElaVV%2FYG52l5YGgzMkQxR19vxkbFfeBHHPpHIsVyWIsxSTYyZFQYVG7j2DQAgqnzz6u6yVHKLL4bqURVhFFXly9fvke218Ew4gb%2BYsXKrWLMLz%2B5Smd%2BnE1DBu1iGjitENq2o%2BGqdIoR73Y9qPI9TDU0a%2B%2FBjqkATxtxcuC1NrnNVeSyulxlrhjF8E0LDiF6qPd3MW%2FC22eMuy5Ha2zib1Lz0lh29qVcdxbyoNtJQ04HQzZE4eyUV3ulSCvqficBa8qxcE2MmdLiXAcpqYQT%2FAbglXKPPR73hG6xB6oAp65xQvdAzHR0gR6FA507V7qqDVjl1yjPnMGwsBcivAlvJeoph6QvV8Pb1Qh%2B8FbcAnbYtCqbO6%2F2Nah%2BXoy&X-Amz-Signature=b3405c54bcd8f94dddbdb6454f3d766a62f82b9fafaee8296f334a85e375ebe8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWNPAZPY%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T140900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDgNlLaki10F2fHWHuK4XR4kZD0eZtA249q%2Fyr4sIbNrwIhAKPB8F%2BVj%2FwH3ku2%2B645bVlRQ9xq%2FJOBOSLjDRI%2FxJoQKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEJT%2FtFiQAK4iARbUq3APzeLz1bXqXDfQRIcjKbA8EitoA6iGP7qmZ0blBs0uZ11fvRaKB8ObgrXD2xjTyVeKzcm6fWJoRwtNhl5vOlbsbDUL7z7NdrwIUYLi4eOYVbO32kOQxHNPocXngB6fVr%2FBxj2AVEjiz64161%2BgbJ0DA7O5tuWTJwn3nhWuJDQLmbQ2KdzNRFvNGMx4lkJo94uVUiEVa5Opiwbqcb2FaiaadUTS5FhpKeAst02EIGbTbNlK32fHJ0I7wBdVKLpqdiFdXEe7YuZgNyKJa6jzvbYQAGZFgY07SDt9Kjx1yxQZofJF48nREtTWXd0PTwx0lmryB6t1s6dO6EUZSq3cTdqlQh6LG55GE02sDzMQ9SvoK7K9cYE2PS1phth4AlHoMEHN01cu0mAWWR%2BeBa7zlW7G1l4NQzID62samgY7HOpNg9w53o5yYqj1NKVWmSanyTDbgSqgTVZxKbddk5ujaOYH2TZh81HMO0CZu00Zj%2FElaVV%2FYG52l5YGgzMkQxR19vxkbFfeBHHPpHIsVyWIsxSTYyZFQYVG7j2DQAgqnzz6u6yVHKLL4bqURVhFFXly9fvke218Ew4gb%2BYsXKrWLMLz%2B5Smd%2BnE1DBu1iGjitENq2o%2BGqdIoR73Y9qPI9TDU0a%2B%2FBjqkATxtxcuC1NrnNVeSyulxlrhjF8E0LDiF6qPd3MW%2FC22eMuy5Ha2zib1Lz0lh29qVcdxbyoNtJQ04HQzZE4eyUV3ulSCvqficBa8qxcE2MmdLiXAcpqYQT%2FAbglXKPPR73hG6xB6oAp65xQvdAzHR0gR6FA507V7qqDVjl1yjPnMGwsBcivAlvJeoph6QvV8Pb1Qh%2B8FbcAnbYtCqbO6%2F2Nah%2BXoy&X-Amz-Signature=9fa22bc3ceb2802c1445b9e4b58e891a3322208d96b2374ace9ac02c68d3abf3&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWNPAZPY%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T140900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDgNlLaki10F2fHWHuK4XR4kZD0eZtA249q%2Fyr4sIbNrwIhAKPB8F%2BVj%2FwH3ku2%2B645bVlRQ9xq%2FJOBOSLjDRI%2FxJoQKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEJT%2FtFiQAK4iARbUq3APzeLz1bXqXDfQRIcjKbA8EitoA6iGP7qmZ0blBs0uZ11fvRaKB8ObgrXD2xjTyVeKzcm6fWJoRwtNhl5vOlbsbDUL7z7NdrwIUYLi4eOYVbO32kOQxHNPocXngB6fVr%2FBxj2AVEjiz64161%2BgbJ0DA7O5tuWTJwn3nhWuJDQLmbQ2KdzNRFvNGMx4lkJo94uVUiEVa5Opiwbqcb2FaiaadUTS5FhpKeAst02EIGbTbNlK32fHJ0I7wBdVKLpqdiFdXEe7YuZgNyKJa6jzvbYQAGZFgY07SDt9Kjx1yxQZofJF48nREtTWXd0PTwx0lmryB6t1s6dO6EUZSq3cTdqlQh6LG55GE02sDzMQ9SvoK7K9cYE2PS1phth4AlHoMEHN01cu0mAWWR%2BeBa7zlW7G1l4NQzID62samgY7HOpNg9w53o5yYqj1NKVWmSanyTDbgSqgTVZxKbddk5ujaOYH2TZh81HMO0CZu00Zj%2FElaVV%2FYG52l5YGgzMkQxR19vxkbFfeBHHPpHIsVyWIsxSTYyZFQYVG7j2DQAgqnzz6u6yVHKLL4bqURVhFFXly9fvke218Ew4gb%2BYsXKrWLMLz%2B5Smd%2BnE1DBu1iGjitENq2o%2BGqdIoR73Y9qPI9TDU0a%2B%2FBjqkATxtxcuC1NrnNVeSyulxlrhjF8E0LDiF6qPd3MW%2FC22eMuy5Ha2zib1Lz0lh29qVcdxbyoNtJQ04HQzZE4eyUV3ulSCvqficBa8qxcE2MmdLiXAcpqYQT%2FAbglXKPPR73hG6xB6oAp65xQvdAzHR0gR6FA507V7qqDVjl1yjPnMGwsBcivAlvJeoph6QvV8Pb1Qh%2B8FbcAnbYtCqbO6%2F2Nah%2BXoy&X-Amz-Signature=f1d3c1c0bad953612c4fa860db2bd12f4ec47f9f111a254df56400ba01ed3bcc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWNPAZPY%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T140900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDgNlLaki10F2fHWHuK4XR4kZD0eZtA249q%2Fyr4sIbNrwIhAKPB8F%2BVj%2FwH3ku2%2B645bVlRQ9xq%2FJOBOSLjDRI%2FxJoQKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEJT%2FtFiQAK4iARbUq3APzeLz1bXqXDfQRIcjKbA8EitoA6iGP7qmZ0blBs0uZ11fvRaKB8ObgrXD2xjTyVeKzcm6fWJoRwtNhl5vOlbsbDUL7z7NdrwIUYLi4eOYVbO32kOQxHNPocXngB6fVr%2FBxj2AVEjiz64161%2BgbJ0DA7O5tuWTJwn3nhWuJDQLmbQ2KdzNRFvNGMx4lkJo94uVUiEVa5Opiwbqcb2FaiaadUTS5FhpKeAst02EIGbTbNlK32fHJ0I7wBdVKLpqdiFdXEe7YuZgNyKJa6jzvbYQAGZFgY07SDt9Kjx1yxQZofJF48nREtTWXd0PTwx0lmryB6t1s6dO6EUZSq3cTdqlQh6LG55GE02sDzMQ9SvoK7K9cYE2PS1phth4AlHoMEHN01cu0mAWWR%2BeBa7zlW7G1l4NQzID62samgY7HOpNg9w53o5yYqj1NKVWmSanyTDbgSqgTVZxKbddk5ujaOYH2TZh81HMO0CZu00Zj%2FElaVV%2FYG52l5YGgzMkQxR19vxkbFfeBHHPpHIsVyWIsxSTYyZFQYVG7j2DQAgqnzz6u6yVHKLL4bqURVhFFXly9fvke218Ew4gb%2BYsXKrWLMLz%2B5Smd%2BnE1DBu1iGjitENq2o%2BGqdIoR73Y9qPI9TDU0a%2B%2FBjqkATxtxcuC1NrnNVeSyulxlrhjF8E0LDiF6qPd3MW%2FC22eMuy5Ha2zib1Lz0lh29qVcdxbyoNtJQ04HQzZE4eyUV3ulSCvqficBa8qxcE2MmdLiXAcpqYQT%2FAbglXKPPR73hG6xB6oAp65xQvdAzHR0gR6FA507V7qqDVjl1yjPnMGwsBcivAlvJeoph6QvV8Pb1Qh%2B8FbcAnbYtCqbO6%2F2Nah%2BXoy&X-Amz-Signature=4b6377870ba8809dde86df5c5769a8b6935d286b721646fbeb04a14a11698bf4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWNPAZPY%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T140900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDgNlLaki10F2fHWHuK4XR4kZD0eZtA249q%2Fyr4sIbNrwIhAKPB8F%2BVj%2FwH3ku2%2B645bVlRQ9xq%2FJOBOSLjDRI%2FxJoQKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEJT%2FtFiQAK4iARbUq3APzeLz1bXqXDfQRIcjKbA8EitoA6iGP7qmZ0blBs0uZ11fvRaKB8ObgrXD2xjTyVeKzcm6fWJoRwtNhl5vOlbsbDUL7z7NdrwIUYLi4eOYVbO32kOQxHNPocXngB6fVr%2FBxj2AVEjiz64161%2BgbJ0DA7O5tuWTJwn3nhWuJDQLmbQ2KdzNRFvNGMx4lkJo94uVUiEVa5Opiwbqcb2FaiaadUTS5FhpKeAst02EIGbTbNlK32fHJ0I7wBdVKLpqdiFdXEe7YuZgNyKJa6jzvbYQAGZFgY07SDt9Kjx1yxQZofJF48nREtTWXd0PTwx0lmryB6t1s6dO6EUZSq3cTdqlQh6LG55GE02sDzMQ9SvoK7K9cYE2PS1phth4AlHoMEHN01cu0mAWWR%2BeBa7zlW7G1l4NQzID62samgY7HOpNg9w53o5yYqj1NKVWmSanyTDbgSqgTVZxKbddk5ujaOYH2TZh81HMO0CZu00Zj%2FElaVV%2FYG52l5YGgzMkQxR19vxkbFfeBHHPpHIsVyWIsxSTYyZFQYVG7j2DQAgqnzz6u6yVHKLL4bqURVhFFXly9fvke218Ew4gb%2BYsXKrWLMLz%2B5Smd%2BnE1DBu1iGjitENq2o%2BGqdIoR73Y9qPI9TDU0a%2B%2FBjqkATxtxcuC1NrnNVeSyulxlrhjF8E0LDiF6qPd3MW%2FC22eMuy5Ha2zib1Lz0lh29qVcdxbyoNtJQ04HQzZE4eyUV3ulSCvqficBa8qxcE2MmdLiXAcpqYQT%2FAbglXKPPR73hG6xB6oAp65xQvdAzHR0gR6FA507V7qqDVjl1yjPnMGwsBcivAlvJeoph6QvV8Pb1Qh%2B8FbcAnbYtCqbO6%2F2Nah%2BXoy&X-Amz-Signature=7ed8d2cecc4066e6096270a35887ec556a8886a5eff15a78c5dfc7843be94a41&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWNPAZPY%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T140900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDgNlLaki10F2fHWHuK4XR4kZD0eZtA249q%2Fyr4sIbNrwIhAKPB8F%2BVj%2FwH3ku2%2B645bVlRQ9xq%2FJOBOSLjDRI%2FxJoQKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEJT%2FtFiQAK4iARbUq3APzeLz1bXqXDfQRIcjKbA8EitoA6iGP7qmZ0blBs0uZ11fvRaKB8ObgrXD2xjTyVeKzcm6fWJoRwtNhl5vOlbsbDUL7z7NdrwIUYLi4eOYVbO32kOQxHNPocXngB6fVr%2FBxj2AVEjiz64161%2BgbJ0DA7O5tuWTJwn3nhWuJDQLmbQ2KdzNRFvNGMx4lkJo94uVUiEVa5Opiwbqcb2FaiaadUTS5FhpKeAst02EIGbTbNlK32fHJ0I7wBdVKLpqdiFdXEe7YuZgNyKJa6jzvbYQAGZFgY07SDt9Kjx1yxQZofJF48nREtTWXd0PTwx0lmryB6t1s6dO6EUZSq3cTdqlQh6LG55GE02sDzMQ9SvoK7K9cYE2PS1phth4AlHoMEHN01cu0mAWWR%2BeBa7zlW7G1l4NQzID62samgY7HOpNg9w53o5yYqj1NKVWmSanyTDbgSqgTVZxKbddk5ujaOYH2TZh81HMO0CZu00Zj%2FElaVV%2FYG52l5YGgzMkQxR19vxkbFfeBHHPpHIsVyWIsxSTYyZFQYVG7j2DQAgqnzz6u6yVHKLL4bqURVhFFXly9fvke218Ew4gb%2BYsXKrWLMLz%2B5Smd%2BnE1DBu1iGjitENq2o%2BGqdIoR73Y9qPI9TDU0a%2B%2FBjqkATxtxcuC1NrnNVeSyulxlrhjF8E0LDiF6qPd3MW%2FC22eMuy5Ha2zib1Lz0lh29qVcdxbyoNtJQ04HQzZE4eyUV3ulSCvqficBa8qxcE2MmdLiXAcpqYQT%2FAbglXKPPR73hG6xB6oAp65xQvdAzHR0gR6FA507V7qqDVjl1yjPnMGwsBcivAlvJeoph6QvV8Pb1Qh%2B8FbcAnbYtCqbO6%2F2Nah%2BXoy&X-Amz-Signature=1a2467c6a1895955c5511f28bd78fb7660579c7df0c763603b776f403e88bad5&X-Amz-SignedHeaders=host&x-id=GetObject)
