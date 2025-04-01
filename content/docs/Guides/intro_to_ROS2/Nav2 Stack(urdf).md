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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4X23INE%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T150907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCgYek%2FlBLBAO%2F371akfisf7MEqhqm%2FBHvHHZEhSx3qSgIhAOmVzYhR55M%2FCM8JkxHoxbH%2BmUeTDh6kYItXOnPALVp8KogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMDA7rkEYdmvFH0ugq3ANl9xr3uxWySkhEaUhgr%2BnoaBKctjwQuqvqqtKruW%2FEfr9W%2FSYBRlDj7nugs9LEJoOW8QgRnzZpVZ82TSK%2By8o7SdJ6mY9kH%2FWXS1rl13euBK983ArjevQkPkahFfqdLlmQt%2FtHCCrrAanV3OdvJEcdntB3ZK1EBqVDHMyzDfyU33sjv3tdbUyhnWmpo7DjCt8REjLfdgl2PBNbb72sB4iN9EGM0oFop2lGsR1laedBuo9qyA7F9w78rUGV%2Bc426NlxEYgNM%2FWeNbSLVvmfA%2BNOb9HrHB6NqmdgZ5gz1Qwgitx8gCROT7NH6fvNN0YREe%2FLXYTa1bwi1sRyHQbRb7QppbJtUbZyFR%2FY7SzgFQbS9wACtSeCBrT3N0mDElFATw8PlG%2Fa2CRQQX9DiSnSD9JuLXGP3g75PPd6R3GYey%2Fjg1Ajbv4dnDixXu%2FBl7UaNeUQ%2FfP%2FuVIv%2BqWJ0Ge9vcQRPep0bjFrH%2FQv9AiXdo5fR31LDIJvZSRbwFhydTiMmvyHjXV%2Bu0YvtEh6wVZpdrByJs8nCGSRlo22tiqlG70g2XOY8HvNC5IqYBv%2BGSm%2FC3kL%2BKLGB5zMIEfEpNarhh6jD3SjtkBPjXEq44ySXZwOIoZQLZ8pwKNe9ZU2ZjDS7K%2B%2FBjqkATgKBmjs4lOsk6WcNCkfwPysj5NAXhh3CwtnrnJXr4JMh4G10aRSqEPX1awsrHpPJOk8hG4Gg7a3jrAJh3GLkfhdV9F%2BgxewOYfGmAd%2BD0%2BFw7MzSaANARSr%2FcYKqhd18iuy28VvVpLO896hpLHKB%2BbUNoSu3KYcpzF8CBtPKv%2FR%2FgdUXjeE29qDXZEU1mfkDb89aco%2BrqCfYH3KWnD4QBJ8CXCa&X-Amz-Signature=8b7dd2231c0285f031275b5a81cacf117c81bbcf70b7b3727d31f0e2d2c00675&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4X23INE%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T150907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCgYek%2FlBLBAO%2F371akfisf7MEqhqm%2FBHvHHZEhSx3qSgIhAOmVzYhR55M%2FCM8JkxHoxbH%2BmUeTDh6kYItXOnPALVp8KogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMDA7rkEYdmvFH0ugq3ANl9xr3uxWySkhEaUhgr%2BnoaBKctjwQuqvqqtKruW%2FEfr9W%2FSYBRlDj7nugs9LEJoOW8QgRnzZpVZ82TSK%2By8o7SdJ6mY9kH%2FWXS1rl13euBK983ArjevQkPkahFfqdLlmQt%2FtHCCrrAanV3OdvJEcdntB3ZK1EBqVDHMyzDfyU33sjv3tdbUyhnWmpo7DjCt8REjLfdgl2PBNbb72sB4iN9EGM0oFop2lGsR1laedBuo9qyA7F9w78rUGV%2Bc426NlxEYgNM%2FWeNbSLVvmfA%2BNOb9HrHB6NqmdgZ5gz1Qwgitx8gCROT7NH6fvNN0YREe%2FLXYTa1bwi1sRyHQbRb7QppbJtUbZyFR%2FY7SzgFQbS9wACtSeCBrT3N0mDElFATw8PlG%2Fa2CRQQX9DiSnSD9JuLXGP3g75PPd6R3GYey%2Fjg1Ajbv4dnDixXu%2FBl7UaNeUQ%2FfP%2FuVIv%2BqWJ0Ge9vcQRPep0bjFrH%2FQv9AiXdo5fR31LDIJvZSRbwFhydTiMmvyHjXV%2Bu0YvtEh6wVZpdrByJs8nCGSRlo22tiqlG70g2XOY8HvNC5IqYBv%2BGSm%2FC3kL%2BKLGB5zMIEfEpNarhh6jD3SjtkBPjXEq44ySXZwOIoZQLZ8pwKNe9ZU2ZjDS7K%2B%2FBjqkATgKBmjs4lOsk6WcNCkfwPysj5NAXhh3CwtnrnJXr4JMh4G10aRSqEPX1awsrHpPJOk8hG4Gg7a3jrAJh3GLkfhdV9F%2BgxewOYfGmAd%2BD0%2BFw7MzSaANARSr%2FcYKqhd18iuy28VvVpLO896hpLHKB%2BbUNoSu3KYcpzF8CBtPKv%2FR%2FgdUXjeE29qDXZEU1mfkDb89aco%2BrqCfYH3KWnD4QBJ8CXCa&X-Amz-Signature=d4b7b364c3b2086f8cdda0687f9264365865f973226be04e33a2983d0f084c40&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4X23INE%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T150907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCgYek%2FlBLBAO%2F371akfisf7MEqhqm%2FBHvHHZEhSx3qSgIhAOmVzYhR55M%2FCM8JkxHoxbH%2BmUeTDh6kYItXOnPALVp8KogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMDA7rkEYdmvFH0ugq3ANl9xr3uxWySkhEaUhgr%2BnoaBKctjwQuqvqqtKruW%2FEfr9W%2FSYBRlDj7nugs9LEJoOW8QgRnzZpVZ82TSK%2By8o7SdJ6mY9kH%2FWXS1rl13euBK983ArjevQkPkahFfqdLlmQt%2FtHCCrrAanV3OdvJEcdntB3ZK1EBqVDHMyzDfyU33sjv3tdbUyhnWmpo7DjCt8REjLfdgl2PBNbb72sB4iN9EGM0oFop2lGsR1laedBuo9qyA7F9w78rUGV%2Bc426NlxEYgNM%2FWeNbSLVvmfA%2BNOb9HrHB6NqmdgZ5gz1Qwgitx8gCROT7NH6fvNN0YREe%2FLXYTa1bwi1sRyHQbRb7QppbJtUbZyFR%2FY7SzgFQbS9wACtSeCBrT3N0mDElFATw8PlG%2Fa2CRQQX9DiSnSD9JuLXGP3g75PPd6R3GYey%2Fjg1Ajbv4dnDixXu%2FBl7UaNeUQ%2FfP%2FuVIv%2BqWJ0Ge9vcQRPep0bjFrH%2FQv9AiXdo5fR31LDIJvZSRbwFhydTiMmvyHjXV%2Bu0YvtEh6wVZpdrByJs8nCGSRlo22tiqlG70g2XOY8HvNC5IqYBv%2BGSm%2FC3kL%2BKLGB5zMIEfEpNarhh6jD3SjtkBPjXEq44ySXZwOIoZQLZ8pwKNe9ZU2ZjDS7K%2B%2FBjqkATgKBmjs4lOsk6WcNCkfwPysj5NAXhh3CwtnrnJXr4JMh4G10aRSqEPX1awsrHpPJOk8hG4Gg7a3jrAJh3GLkfhdV9F%2BgxewOYfGmAd%2BD0%2BFw7MzSaANARSr%2FcYKqhd18iuy28VvVpLO896hpLHKB%2BbUNoSu3KYcpzF8CBtPKv%2FR%2FgdUXjeE29qDXZEU1mfkDb89aco%2BrqCfYH3KWnD4QBJ8CXCa&X-Amz-Signature=a466a9e2c3cc9fee77666969f3b6beb88f646c059e2af7abc38942f2f076a1c8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4X23INE%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T150907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCgYek%2FlBLBAO%2F371akfisf7MEqhqm%2FBHvHHZEhSx3qSgIhAOmVzYhR55M%2FCM8JkxHoxbH%2BmUeTDh6kYItXOnPALVp8KogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMDA7rkEYdmvFH0ugq3ANl9xr3uxWySkhEaUhgr%2BnoaBKctjwQuqvqqtKruW%2FEfr9W%2FSYBRlDj7nugs9LEJoOW8QgRnzZpVZ82TSK%2By8o7SdJ6mY9kH%2FWXS1rl13euBK983ArjevQkPkahFfqdLlmQt%2FtHCCrrAanV3OdvJEcdntB3ZK1EBqVDHMyzDfyU33sjv3tdbUyhnWmpo7DjCt8REjLfdgl2PBNbb72sB4iN9EGM0oFop2lGsR1laedBuo9qyA7F9w78rUGV%2Bc426NlxEYgNM%2FWeNbSLVvmfA%2BNOb9HrHB6NqmdgZ5gz1Qwgitx8gCROT7NH6fvNN0YREe%2FLXYTa1bwi1sRyHQbRb7QppbJtUbZyFR%2FY7SzgFQbS9wACtSeCBrT3N0mDElFATw8PlG%2Fa2CRQQX9DiSnSD9JuLXGP3g75PPd6R3GYey%2Fjg1Ajbv4dnDixXu%2FBl7UaNeUQ%2FfP%2FuVIv%2BqWJ0Ge9vcQRPep0bjFrH%2FQv9AiXdo5fR31LDIJvZSRbwFhydTiMmvyHjXV%2Bu0YvtEh6wVZpdrByJs8nCGSRlo22tiqlG70g2XOY8HvNC5IqYBv%2BGSm%2FC3kL%2BKLGB5zMIEfEpNarhh6jD3SjtkBPjXEq44ySXZwOIoZQLZ8pwKNe9ZU2ZjDS7K%2B%2FBjqkATgKBmjs4lOsk6WcNCkfwPysj5NAXhh3CwtnrnJXr4JMh4G10aRSqEPX1awsrHpPJOk8hG4Gg7a3jrAJh3GLkfhdV9F%2BgxewOYfGmAd%2BD0%2BFw7MzSaANARSr%2FcYKqhd18iuy28VvVpLO896hpLHKB%2BbUNoSu3KYcpzF8CBtPKv%2FR%2FgdUXjeE29qDXZEU1mfkDb89aco%2BrqCfYH3KWnD4QBJ8CXCa&X-Amz-Signature=517337560dfe56cfa73774260e725a706d91b51b892850e916c35e1cfcd888c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4X23INE%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T150907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCgYek%2FlBLBAO%2F371akfisf7MEqhqm%2FBHvHHZEhSx3qSgIhAOmVzYhR55M%2FCM8JkxHoxbH%2BmUeTDh6kYItXOnPALVp8KogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMDA7rkEYdmvFH0ugq3ANl9xr3uxWySkhEaUhgr%2BnoaBKctjwQuqvqqtKruW%2FEfr9W%2FSYBRlDj7nugs9LEJoOW8QgRnzZpVZ82TSK%2By8o7SdJ6mY9kH%2FWXS1rl13euBK983ArjevQkPkahFfqdLlmQt%2FtHCCrrAanV3OdvJEcdntB3ZK1EBqVDHMyzDfyU33sjv3tdbUyhnWmpo7DjCt8REjLfdgl2PBNbb72sB4iN9EGM0oFop2lGsR1laedBuo9qyA7F9w78rUGV%2Bc426NlxEYgNM%2FWeNbSLVvmfA%2BNOb9HrHB6NqmdgZ5gz1Qwgitx8gCROT7NH6fvNN0YREe%2FLXYTa1bwi1sRyHQbRb7QppbJtUbZyFR%2FY7SzgFQbS9wACtSeCBrT3N0mDElFATw8PlG%2Fa2CRQQX9DiSnSD9JuLXGP3g75PPd6R3GYey%2Fjg1Ajbv4dnDixXu%2FBl7UaNeUQ%2FfP%2FuVIv%2BqWJ0Ge9vcQRPep0bjFrH%2FQv9AiXdo5fR31LDIJvZSRbwFhydTiMmvyHjXV%2Bu0YvtEh6wVZpdrByJs8nCGSRlo22tiqlG70g2XOY8HvNC5IqYBv%2BGSm%2FC3kL%2BKLGB5zMIEfEpNarhh6jD3SjtkBPjXEq44ySXZwOIoZQLZ8pwKNe9ZU2ZjDS7K%2B%2FBjqkATgKBmjs4lOsk6WcNCkfwPysj5NAXhh3CwtnrnJXr4JMh4G10aRSqEPX1awsrHpPJOk8hG4Gg7a3jrAJh3GLkfhdV9F%2BgxewOYfGmAd%2BD0%2BFw7MzSaANARSr%2FcYKqhd18iuy28VvVpLO896hpLHKB%2BbUNoSu3KYcpzF8CBtPKv%2FR%2FgdUXjeE29qDXZEU1mfkDb89aco%2BrqCfYH3KWnD4QBJ8CXCa&X-Amz-Signature=c7795204e803507b8a15d4c507ca1f5d86f3c49eeb63cb6453a89f1095cd23a9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4X23INE%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T150907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQCgYek%2FlBLBAO%2F371akfisf7MEqhqm%2FBHvHHZEhSx3qSgIhAOmVzYhR55M%2FCM8JkxHoxbH%2BmUeTDh6kYItXOnPALVp8KogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMDA7rkEYdmvFH0ugq3ANl9xr3uxWySkhEaUhgr%2BnoaBKctjwQuqvqqtKruW%2FEfr9W%2FSYBRlDj7nugs9LEJoOW8QgRnzZpVZ82TSK%2By8o7SdJ6mY9kH%2FWXS1rl13euBK983ArjevQkPkahFfqdLlmQt%2FtHCCrrAanV3OdvJEcdntB3ZK1EBqVDHMyzDfyU33sjv3tdbUyhnWmpo7DjCt8REjLfdgl2PBNbb72sB4iN9EGM0oFop2lGsR1laedBuo9qyA7F9w78rUGV%2Bc426NlxEYgNM%2FWeNbSLVvmfA%2BNOb9HrHB6NqmdgZ5gz1Qwgitx8gCROT7NH6fvNN0YREe%2FLXYTa1bwi1sRyHQbRb7QppbJtUbZyFR%2FY7SzgFQbS9wACtSeCBrT3N0mDElFATw8PlG%2Fa2CRQQX9DiSnSD9JuLXGP3g75PPd6R3GYey%2Fjg1Ajbv4dnDixXu%2FBl7UaNeUQ%2FfP%2FuVIv%2BqWJ0Ge9vcQRPep0bjFrH%2FQv9AiXdo5fR31LDIJvZSRbwFhydTiMmvyHjXV%2Bu0YvtEh6wVZpdrByJs8nCGSRlo22tiqlG70g2XOY8HvNC5IqYBv%2BGSm%2FC3kL%2BKLGB5zMIEfEpNarhh6jD3SjtkBPjXEq44ySXZwOIoZQLZ8pwKNe9ZU2ZjDS7K%2B%2FBjqkATgKBmjs4lOsk6WcNCkfwPysj5NAXhh3CwtnrnJXr4JMh4G10aRSqEPX1awsrHpPJOk8hG4Gg7a3jrAJh3GLkfhdV9F%2BgxewOYfGmAd%2BD0%2BFw7MzSaANARSr%2FcYKqhd18iuy28VvVpLO896hpLHKB%2BbUNoSu3KYcpzF8CBtPKv%2FR%2FgdUXjeE29qDXZEU1mfkDb89aco%2BrqCfYH3KWnD4QBJ8CXCa&X-Amz-Signature=1b25572febc9516b25eb1c706b600cd44666757cf3864ec1af89764fd8f65b7a&X-Amz-SignedHeaders=host&x-id=GetObject)
