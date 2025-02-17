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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUCUPVC7%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T181007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIBUZlu57s%2FsyYlad3Fq0MpW9WNx2cEQD6NqE32BogBD3AiBjklJ6frzkUnRXN7jcsIfezkwia726aPewrIFWyUjOoCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMuwHqZmsu%2F0wy0MRbKtwD0wemxWqR5zzNlzEimtByUmbWR2dmuSCh3esKBH0vtNxTuLGSYUatvkIFZiGqbxvnS6pR8iLYdyxcJPgbjZj2wL6lSaGUnECxx%2BOHXzTfAz8%2FrVnhjJTOcENi0IffU5cUF7Ezw1Aq%2FCkXXRBpG9mw8r9E5LHZ7n0GOW0j6vv%2Fsp3%2F7oa6j2qNr1LbDOhhPKub0WGojwIiBnp7HmUpdUAeqWKg37xbOnvymKHnYMJcc1gsY22fZro%2FJndEdUQmHlVydW02zT9qnbtQTYeVXoNJN8e2xMu2YjDdlDw%2BFAarqZb5C61itckjV8Yqn2AL%2F5G1Vphum435d7jiUP0CJXAJlB82pfpyZVvuZ5CB7Ir004JBfLmNKVEXRyFQw2HRz5IBJH2JFrCpH5GJ6RWNhCL9zojQbJYn9Ec4rHEotYvMxIXAMcD3jo%2FZezHZnCm3fThWRBtHKY9kbuST5J9DqRTCbAQqPlBgLv1zkcwBd5Yi51JgWwgxw%2Faf1ymB44U7PNOnapRucelTBRmPTxQSvcSGMx75rrEx3mozYfSYkN5ysH%2BShWfCGvqM8xyoFWqWl%2BgIRvk5GuIEiDb0VicEBz7rfindlN64LqyyqxW8IYvAaawdiZ%2BHScvhi%2F%2FdTrAw9PXNvQY6pgGfsckkrzJWcgRA2pxJVxx%2FZNhwwu0vYJedy478ieBFAD%2BAQhWqrTuA3DEGTHGPFvh8NHZt357S%2F3ym9%2FkSua%2BQJHkk7Kkl5IlAiPy0SamHj5bToTsUhC57%2FigO4Gt48BD2qCZMH%2Bui7ozwXP1EE4UwfjND4bJluqUOgFIPyk%2FsJZvGO4Ql7s37%2Fla7tJ6Xy1trd7ua%2FZq8W1vUb5a49iz0Sx45OiXJ&X-Amz-Signature=a395bc5e90f1eb236f7b66cd7d19be8dad351da2552a7e80df0b003fd30c7ec8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUCUPVC7%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T181007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIBUZlu57s%2FsyYlad3Fq0MpW9WNx2cEQD6NqE32BogBD3AiBjklJ6frzkUnRXN7jcsIfezkwia726aPewrIFWyUjOoCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMuwHqZmsu%2F0wy0MRbKtwD0wemxWqR5zzNlzEimtByUmbWR2dmuSCh3esKBH0vtNxTuLGSYUatvkIFZiGqbxvnS6pR8iLYdyxcJPgbjZj2wL6lSaGUnECxx%2BOHXzTfAz8%2FrVnhjJTOcENi0IffU5cUF7Ezw1Aq%2FCkXXRBpG9mw8r9E5LHZ7n0GOW0j6vv%2Fsp3%2F7oa6j2qNr1LbDOhhPKub0WGojwIiBnp7HmUpdUAeqWKg37xbOnvymKHnYMJcc1gsY22fZro%2FJndEdUQmHlVydW02zT9qnbtQTYeVXoNJN8e2xMu2YjDdlDw%2BFAarqZb5C61itckjV8Yqn2AL%2F5G1Vphum435d7jiUP0CJXAJlB82pfpyZVvuZ5CB7Ir004JBfLmNKVEXRyFQw2HRz5IBJH2JFrCpH5GJ6RWNhCL9zojQbJYn9Ec4rHEotYvMxIXAMcD3jo%2FZezHZnCm3fThWRBtHKY9kbuST5J9DqRTCbAQqPlBgLv1zkcwBd5Yi51JgWwgxw%2Faf1ymB44U7PNOnapRucelTBRmPTxQSvcSGMx75rrEx3mozYfSYkN5ysH%2BShWfCGvqM8xyoFWqWl%2BgIRvk5GuIEiDb0VicEBz7rfindlN64LqyyqxW8IYvAaawdiZ%2BHScvhi%2F%2FdTrAw9PXNvQY6pgGfsckkrzJWcgRA2pxJVxx%2FZNhwwu0vYJedy478ieBFAD%2BAQhWqrTuA3DEGTHGPFvh8NHZt357S%2F3ym9%2FkSua%2BQJHkk7Kkl5IlAiPy0SamHj5bToTsUhC57%2FigO4Gt48BD2qCZMH%2Bui7ozwXP1EE4UwfjND4bJluqUOgFIPyk%2FsJZvGO4Ql7s37%2Fla7tJ6Xy1trd7ua%2FZq8W1vUb5a49iz0Sx45OiXJ&X-Amz-Signature=003997c4576f509f3a7918605928b43fa0a09694ac06f4c88dbf034589843a78&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUCUPVC7%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T181007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIBUZlu57s%2FsyYlad3Fq0MpW9WNx2cEQD6NqE32BogBD3AiBjklJ6frzkUnRXN7jcsIfezkwia726aPewrIFWyUjOoCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMuwHqZmsu%2F0wy0MRbKtwD0wemxWqR5zzNlzEimtByUmbWR2dmuSCh3esKBH0vtNxTuLGSYUatvkIFZiGqbxvnS6pR8iLYdyxcJPgbjZj2wL6lSaGUnECxx%2BOHXzTfAz8%2FrVnhjJTOcENi0IffU5cUF7Ezw1Aq%2FCkXXRBpG9mw8r9E5LHZ7n0GOW0j6vv%2Fsp3%2F7oa6j2qNr1LbDOhhPKub0WGojwIiBnp7HmUpdUAeqWKg37xbOnvymKHnYMJcc1gsY22fZro%2FJndEdUQmHlVydW02zT9qnbtQTYeVXoNJN8e2xMu2YjDdlDw%2BFAarqZb5C61itckjV8Yqn2AL%2F5G1Vphum435d7jiUP0CJXAJlB82pfpyZVvuZ5CB7Ir004JBfLmNKVEXRyFQw2HRz5IBJH2JFrCpH5GJ6RWNhCL9zojQbJYn9Ec4rHEotYvMxIXAMcD3jo%2FZezHZnCm3fThWRBtHKY9kbuST5J9DqRTCbAQqPlBgLv1zkcwBd5Yi51JgWwgxw%2Faf1ymB44U7PNOnapRucelTBRmPTxQSvcSGMx75rrEx3mozYfSYkN5ysH%2BShWfCGvqM8xyoFWqWl%2BgIRvk5GuIEiDb0VicEBz7rfindlN64LqyyqxW8IYvAaawdiZ%2BHScvhi%2F%2FdTrAw9PXNvQY6pgGfsckkrzJWcgRA2pxJVxx%2FZNhwwu0vYJedy478ieBFAD%2BAQhWqrTuA3DEGTHGPFvh8NHZt357S%2F3ym9%2FkSua%2BQJHkk7Kkl5IlAiPy0SamHj5bToTsUhC57%2FigO4Gt48BD2qCZMH%2Bui7ozwXP1EE4UwfjND4bJluqUOgFIPyk%2FsJZvGO4Ql7s37%2Fla7tJ6Xy1trd7ua%2FZq8W1vUb5a49iz0Sx45OiXJ&X-Amz-Signature=3db64022bc1c35c3bac432f64c0f94e1ffdf776c80073c4be021ac79c79a9b90&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUCUPVC7%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T181007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIBUZlu57s%2FsyYlad3Fq0MpW9WNx2cEQD6NqE32BogBD3AiBjklJ6frzkUnRXN7jcsIfezkwia726aPewrIFWyUjOoCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMuwHqZmsu%2F0wy0MRbKtwD0wemxWqR5zzNlzEimtByUmbWR2dmuSCh3esKBH0vtNxTuLGSYUatvkIFZiGqbxvnS6pR8iLYdyxcJPgbjZj2wL6lSaGUnECxx%2BOHXzTfAz8%2FrVnhjJTOcENi0IffU5cUF7Ezw1Aq%2FCkXXRBpG9mw8r9E5LHZ7n0GOW0j6vv%2Fsp3%2F7oa6j2qNr1LbDOhhPKub0WGojwIiBnp7HmUpdUAeqWKg37xbOnvymKHnYMJcc1gsY22fZro%2FJndEdUQmHlVydW02zT9qnbtQTYeVXoNJN8e2xMu2YjDdlDw%2BFAarqZb5C61itckjV8Yqn2AL%2F5G1Vphum435d7jiUP0CJXAJlB82pfpyZVvuZ5CB7Ir004JBfLmNKVEXRyFQw2HRz5IBJH2JFrCpH5GJ6RWNhCL9zojQbJYn9Ec4rHEotYvMxIXAMcD3jo%2FZezHZnCm3fThWRBtHKY9kbuST5J9DqRTCbAQqPlBgLv1zkcwBd5Yi51JgWwgxw%2Faf1ymB44U7PNOnapRucelTBRmPTxQSvcSGMx75rrEx3mozYfSYkN5ysH%2BShWfCGvqM8xyoFWqWl%2BgIRvk5GuIEiDb0VicEBz7rfindlN64LqyyqxW8IYvAaawdiZ%2BHScvhi%2F%2FdTrAw9PXNvQY6pgGfsckkrzJWcgRA2pxJVxx%2FZNhwwu0vYJedy478ieBFAD%2BAQhWqrTuA3DEGTHGPFvh8NHZt357S%2F3ym9%2FkSua%2BQJHkk7Kkl5IlAiPy0SamHj5bToTsUhC57%2FigO4Gt48BD2qCZMH%2Bui7ozwXP1EE4UwfjND4bJluqUOgFIPyk%2FsJZvGO4Ql7s37%2Fla7tJ6Xy1trd7ua%2FZq8W1vUb5a49iz0Sx45OiXJ&X-Amz-Signature=f8bae762aa56a3a248f7313807c452ff00fdd984cfa16661baf380300eb5f592&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUCUPVC7%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T181007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIBUZlu57s%2FsyYlad3Fq0MpW9WNx2cEQD6NqE32BogBD3AiBjklJ6frzkUnRXN7jcsIfezkwia726aPewrIFWyUjOoCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMuwHqZmsu%2F0wy0MRbKtwD0wemxWqR5zzNlzEimtByUmbWR2dmuSCh3esKBH0vtNxTuLGSYUatvkIFZiGqbxvnS6pR8iLYdyxcJPgbjZj2wL6lSaGUnECxx%2BOHXzTfAz8%2FrVnhjJTOcENi0IffU5cUF7Ezw1Aq%2FCkXXRBpG9mw8r9E5LHZ7n0GOW0j6vv%2Fsp3%2F7oa6j2qNr1LbDOhhPKub0WGojwIiBnp7HmUpdUAeqWKg37xbOnvymKHnYMJcc1gsY22fZro%2FJndEdUQmHlVydW02zT9qnbtQTYeVXoNJN8e2xMu2YjDdlDw%2BFAarqZb5C61itckjV8Yqn2AL%2F5G1Vphum435d7jiUP0CJXAJlB82pfpyZVvuZ5CB7Ir004JBfLmNKVEXRyFQw2HRz5IBJH2JFrCpH5GJ6RWNhCL9zojQbJYn9Ec4rHEotYvMxIXAMcD3jo%2FZezHZnCm3fThWRBtHKY9kbuST5J9DqRTCbAQqPlBgLv1zkcwBd5Yi51JgWwgxw%2Faf1ymB44U7PNOnapRucelTBRmPTxQSvcSGMx75rrEx3mozYfSYkN5ysH%2BShWfCGvqM8xyoFWqWl%2BgIRvk5GuIEiDb0VicEBz7rfindlN64LqyyqxW8IYvAaawdiZ%2BHScvhi%2F%2FdTrAw9PXNvQY6pgGfsckkrzJWcgRA2pxJVxx%2FZNhwwu0vYJedy478ieBFAD%2BAQhWqrTuA3DEGTHGPFvh8NHZt357S%2F3ym9%2FkSua%2BQJHkk7Kkl5IlAiPy0SamHj5bToTsUhC57%2FigO4Gt48BD2qCZMH%2Bui7ozwXP1EE4UwfjND4bJluqUOgFIPyk%2FsJZvGO4Ql7s37%2Fla7tJ6Xy1trd7ua%2FZq8W1vUb5a49iz0Sx45OiXJ&X-Amz-Signature=50497ba4a8a32a5ba5412e93fdcd319a16fb3ae82a16c1e4ff318aaa7ac7bee7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUCUPVC7%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T181007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIBUZlu57s%2FsyYlad3Fq0MpW9WNx2cEQD6NqE32BogBD3AiBjklJ6frzkUnRXN7jcsIfezkwia726aPewrIFWyUjOoCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMuwHqZmsu%2F0wy0MRbKtwD0wemxWqR5zzNlzEimtByUmbWR2dmuSCh3esKBH0vtNxTuLGSYUatvkIFZiGqbxvnS6pR8iLYdyxcJPgbjZj2wL6lSaGUnECxx%2BOHXzTfAz8%2FrVnhjJTOcENi0IffU5cUF7Ezw1Aq%2FCkXXRBpG9mw8r9E5LHZ7n0GOW0j6vv%2Fsp3%2F7oa6j2qNr1LbDOhhPKub0WGojwIiBnp7HmUpdUAeqWKg37xbOnvymKHnYMJcc1gsY22fZro%2FJndEdUQmHlVydW02zT9qnbtQTYeVXoNJN8e2xMu2YjDdlDw%2BFAarqZb5C61itckjV8Yqn2AL%2F5G1Vphum435d7jiUP0CJXAJlB82pfpyZVvuZ5CB7Ir004JBfLmNKVEXRyFQw2HRz5IBJH2JFrCpH5GJ6RWNhCL9zojQbJYn9Ec4rHEotYvMxIXAMcD3jo%2FZezHZnCm3fThWRBtHKY9kbuST5J9DqRTCbAQqPlBgLv1zkcwBd5Yi51JgWwgxw%2Faf1ymB44U7PNOnapRucelTBRmPTxQSvcSGMx75rrEx3mozYfSYkN5ysH%2BShWfCGvqM8xyoFWqWl%2BgIRvk5GuIEiDb0VicEBz7rfindlN64LqyyqxW8IYvAaawdiZ%2BHScvhi%2F%2FdTrAw9PXNvQY6pgGfsckkrzJWcgRA2pxJVxx%2FZNhwwu0vYJedy478ieBFAD%2BAQhWqrTuA3DEGTHGPFvh8NHZt357S%2F3ym9%2FkSua%2BQJHkk7Kkl5IlAiPy0SamHj5bToTsUhC57%2FigO4Gt48BD2qCZMH%2Bui7ozwXP1EE4UwfjND4bJluqUOgFIPyk%2FsJZvGO4Ql7s37%2Fla7tJ6Xy1trd7ua%2FZq8W1vUb5a49iz0Sx45OiXJ&X-Amz-Signature=3937c67db75ddf6a19f9f632074414835ce6640d353058b31680f6ed1c8fa445&X-Amz-SignedHeaders=host&x-id=GetObject)
