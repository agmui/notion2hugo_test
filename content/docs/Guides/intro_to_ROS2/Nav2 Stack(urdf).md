---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VJAPQEX%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T220655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDKoIaA6XiDz7jR8POsVIscp0GjZBKxsCmWvgOyqjcYPgIgNW5TwmujmpjARt7P2KRlRvZABV7tJFf2UgTfep4W4TEq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOwXuPxqvD7M3WpT%2BCrcA1bqy1iyn115Gh7yOk1TGYn%2FY8K0yCKJDeR98PN%2Ftq7oysP4f4bDG%2FAbbpql3nnlPHby2fAoWZpNykYYsZmaScVWFwOAl8qG9Rg4vhW8Y1LXGDr%2B08iabRy778h7pokGHwUxu91m8kj%2BmbmWeEPSNstr40Hoenw4GD64rYJBg6nuUBK%2FknEde%2FgsJwwKgYWq5UWA6GnmUh9Wigq%2FgfeOOYrnwWclAZoSdNOYHjMQ5XAlX3xGb%2FGHvfO07B1r4kTzCuKQhCJrIctnixvWog3KFDkCsSFrsyE4pyBFnmwa7PPUeRXHH4ejzDeea6oDJ%2BWR6%2BE%2Bw0d0wyaW767UDH1xwz1R%2F5CCfAXTMnZWlwcwU5FM%2FZ2%2BVl8xeW0ir1fzMnbcMRxkgjT0haFBCszma5HED%2FqBnhYjfsFVxVq16eScqfibPV9WF6h1602IFIyFbjCIFdXEbkRTmJ8LhASFNyVLJPQDiiZPRjj8R75C3%2Bmc3kIXHcSYIaeQkycV6h58D8rkEyOdyX7Z57NkfehzOusS9bYrlMXDFS6STMBPATda8krRu2I3HrbxrFaeHinRVaADjVnLxD%2F7ReSQMcDEeqsrd6ClUu3Vmce6lVU8f5npf4K9Y1ECzcXEpnwYDEaVMKO8jr0GOqUBWZRMc8gr2Y202WVMlhIkeuy3inmDaa9hIQttuld9tFCwXZWUfLmMJxsL6ivCUQdXmw8AoNtsRe5zv5J6MC%2FPRsoZR1UzgzPL02HA9ETuFz6llqJgn16nVxOgrUvhTsvvlnjCbqjUbpi1s9fUnQMxLFujGzto4zg8xKhgp%2BvQAcITyzl2Z6jPISU9G%2Bmq%2B7A40%2FLYjyA1hmFHYWibAIYc89Iyxn5D&X-Amz-Signature=7f42b1f01c3c7b28cade8758e90659512ac53aeeaca7f68adb9dd6253f1ef710&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VJAPQEX%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T220655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDKoIaA6XiDz7jR8POsVIscp0GjZBKxsCmWvgOyqjcYPgIgNW5TwmujmpjARt7P2KRlRvZABV7tJFf2UgTfep4W4TEq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOwXuPxqvD7M3WpT%2BCrcA1bqy1iyn115Gh7yOk1TGYn%2FY8K0yCKJDeR98PN%2Ftq7oysP4f4bDG%2FAbbpql3nnlPHby2fAoWZpNykYYsZmaScVWFwOAl8qG9Rg4vhW8Y1LXGDr%2B08iabRy778h7pokGHwUxu91m8kj%2BmbmWeEPSNstr40Hoenw4GD64rYJBg6nuUBK%2FknEde%2FgsJwwKgYWq5UWA6GnmUh9Wigq%2FgfeOOYrnwWclAZoSdNOYHjMQ5XAlX3xGb%2FGHvfO07B1r4kTzCuKQhCJrIctnixvWog3KFDkCsSFrsyE4pyBFnmwa7PPUeRXHH4ejzDeea6oDJ%2BWR6%2BE%2Bw0d0wyaW767UDH1xwz1R%2F5CCfAXTMnZWlwcwU5FM%2FZ2%2BVl8xeW0ir1fzMnbcMRxkgjT0haFBCszma5HED%2FqBnhYjfsFVxVq16eScqfibPV9WF6h1602IFIyFbjCIFdXEbkRTmJ8LhASFNyVLJPQDiiZPRjj8R75C3%2Bmc3kIXHcSYIaeQkycV6h58D8rkEyOdyX7Z57NkfehzOusS9bYrlMXDFS6STMBPATda8krRu2I3HrbxrFaeHinRVaADjVnLxD%2F7ReSQMcDEeqsrd6ClUu3Vmce6lVU8f5npf4K9Y1ECzcXEpnwYDEaVMKO8jr0GOqUBWZRMc8gr2Y202WVMlhIkeuy3inmDaa9hIQttuld9tFCwXZWUfLmMJxsL6ivCUQdXmw8AoNtsRe5zv5J6MC%2FPRsoZR1UzgzPL02HA9ETuFz6llqJgn16nVxOgrUvhTsvvlnjCbqjUbpi1s9fUnQMxLFujGzto4zg8xKhgp%2BvQAcITyzl2Z6jPISU9G%2Bmq%2B7A40%2FLYjyA1hmFHYWibAIYc89Iyxn5D&X-Amz-Signature=a79a52477be132c5f727efc5c2283beeedcebb507e8280ac3576a93e5e6dc994&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VJAPQEX%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T220655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDKoIaA6XiDz7jR8POsVIscp0GjZBKxsCmWvgOyqjcYPgIgNW5TwmujmpjARt7P2KRlRvZABV7tJFf2UgTfep4W4TEq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOwXuPxqvD7M3WpT%2BCrcA1bqy1iyn115Gh7yOk1TGYn%2FY8K0yCKJDeR98PN%2Ftq7oysP4f4bDG%2FAbbpql3nnlPHby2fAoWZpNykYYsZmaScVWFwOAl8qG9Rg4vhW8Y1LXGDr%2B08iabRy778h7pokGHwUxu91m8kj%2BmbmWeEPSNstr40Hoenw4GD64rYJBg6nuUBK%2FknEde%2FgsJwwKgYWq5UWA6GnmUh9Wigq%2FgfeOOYrnwWclAZoSdNOYHjMQ5XAlX3xGb%2FGHvfO07B1r4kTzCuKQhCJrIctnixvWog3KFDkCsSFrsyE4pyBFnmwa7PPUeRXHH4ejzDeea6oDJ%2BWR6%2BE%2Bw0d0wyaW767UDH1xwz1R%2F5CCfAXTMnZWlwcwU5FM%2FZ2%2BVl8xeW0ir1fzMnbcMRxkgjT0haFBCszma5HED%2FqBnhYjfsFVxVq16eScqfibPV9WF6h1602IFIyFbjCIFdXEbkRTmJ8LhASFNyVLJPQDiiZPRjj8R75C3%2Bmc3kIXHcSYIaeQkycV6h58D8rkEyOdyX7Z57NkfehzOusS9bYrlMXDFS6STMBPATda8krRu2I3HrbxrFaeHinRVaADjVnLxD%2F7ReSQMcDEeqsrd6ClUu3Vmce6lVU8f5npf4K9Y1ECzcXEpnwYDEaVMKO8jr0GOqUBWZRMc8gr2Y202WVMlhIkeuy3inmDaa9hIQttuld9tFCwXZWUfLmMJxsL6ivCUQdXmw8AoNtsRe5zv5J6MC%2FPRsoZR1UzgzPL02HA9ETuFz6llqJgn16nVxOgrUvhTsvvlnjCbqjUbpi1s9fUnQMxLFujGzto4zg8xKhgp%2BvQAcITyzl2Z6jPISU9G%2Bmq%2B7A40%2FLYjyA1hmFHYWibAIYc89Iyxn5D&X-Amz-Signature=06203ae17ca845900a099178defd77fdd2039d3f873535b97d5cfeec42b32f81&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VJAPQEX%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T220655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDKoIaA6XiDz7jR8POsVIscp0GjZBKxsCmWvgOyqjcYPgIgNW5TwmujmpjARt7P2KRlRvZABV7tJFf2UgTfep4W4TEq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOwXuPxqvD7M3WpT%2BCrcA1bqy1iyn115Gh7yOk1TGYn%2FY8K0yCKJDeR98PN%2Ftq7oysP4f4bDG%2FAbbpql3nnlPHby2fAoWZpNykYYsZmaScVWFwOAl8qG9Rg4vhW8Y1LXGDr%2B08iabRy778h7pokGHwUxu91m8kj%2BmbmWeEPSNstr40Hoenw4GD64rYJBg6nuUBK%2FknEde%2FgsJwwKgYWq5UWA6GnmUh9Wigq%2FgfeOOYrnwWclAZoSdNOYHjMQ5XAlX3xGb%2FGHvfO07B1r4kTzCuKQhCJrIctnixvWog3KFDkCsSFrsyE4pyBFnmwa7PPUeRXHH4ejzDeea6oDJ%2BWR6%2BE%2Bw0d0wyaW767UDH1xwz1R%2F5CCfAXTMnZWlwcwU5FM%2FZ2%2BVl8xeW0ir1fzMnbcMRxkgjT0haFBCszma5HED%2FqBnhYjfsFVxVq16eScqfibPV9WF6h1602IFIyFbjCIFdXEbkRTmJ8LhASFNyVLJPQDiiZPRjj8R75C3%2Bmc3kIXHcSYIaeQkycV6h58D8rkEyOdyX7Z57NkfehzOusS9bYrlMXDFS6STMBPATda8krRu2I3HrbxrFaeHinRVaADjVnLxD%2F7ReSQMcDEeqsrd6ClUu3Vmce6lVU8f5npf4K9Y1ECzcXEpnwYDEaVMKO8jr0GOqUBWZRMc8gr2Y202WVMlhIkeuy3inmDaa9hIQttuld9tFCwXZWUfLmMJxsL6ivCUQdXmw8AoNtsRe5zv5J6MC%2FPRsoZR1UzgzPL02HA9ETuFz6llqJgn16nVxOgrUvhTsvvlnjCbqjUbpi1s9fUnQMxLFujGzto4zg8xKhgp%2BvQAcITyzl2Z6jPISU9G%2Bmq%2B7A40%2FLYjyA1hmFHYWibAIYc89Iyxn5D&X-Amz-Signature=fca8f237da3fa9e9a7800a52df645928d02cfb7ea13ffd47b74b91b1772880b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VJAPQEX%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T220655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDKoIaA6XiDz7jR8POsVIscp0GjZBKxsCmWvgOyqjcYPgIgNW5TwmujmpjARt7P2KRlRvZABV7tJFf2UgTfep4W4TEq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOwXuPxqvD7M3WpT%2BCrcA1bqy1iyn115Gh7yOk1TGYn%2FY8K0yCKJDeR98PN%2Ftq7oysP4f4bDG%2FAbbpql3nnlPHby2fAoWZpNykYYsZmaScVWFwOAl8qG9Rg4vhW8Y1LXGDr%2B08iabRy778h7pokGHwUxu91m8kj%2BmbmWeEPSNstr40Hoenw4GD64rYJBg6nuUBK%2FknEde%2FgsJwwKgYWq5UWA6GnmUh9Wigq%2FgfeOOYrnwWclAZoSdNOYHjMQ5XAlX3xGb%2FGHvfO07B1r4kTzCuKQhCJrIctnixvWog3KFDkCsSFrsyE4pyBFnmwa7PPUeRXHH4ejzDeea6oDJ%2BWR6%2BE%2Bw0d0wyaW767UDH1xwz1R%2F5CCfAXTMnZWlwcwU5FM%2FZ2%2BVl8xeW0ir1fzMnbcMRxkgjT0haFBCszma5HED%2FqBnhYjfsFVxVq16eScqfibPV9WF6h1602IFIyFbjCIFdXEbkRTmJ8LhASFNyVLJPQDiiZPRjj8R75C3%2Bmc3kIXHcSYIaeQkycV6h58D8rkEyOdyX7Z57NkfehzOusS9bYrlMXDFS6STMBPATda8krRu2I3HrbxrFaeHinRVaADjVnLxD%2F7ReSQMcDEeqsrd6ClUu3Vmce6lVU8f5npf4K9Y1ECzcXEpnwYDEaVMKO8jr0GOqUBWZRMc8gr2Y202WVMlhIkeuy3inmDaa9hIQttuld9tFCwXZWUfLmMJxsL6ivCUQdXmw8AoNtsRe5zv5J6MC%2FPRsoZR1UzgzPL02HA9ETuFz6llqJgn16nVxOgrUvhTsvvlnjCbqjUbpi1s9fUnQMxLFujGzto4zg8xKhgp%2BvQAcITyzl2Z6jPISU9G%2Bmq%2B7A40%2FLYjyA1hmFHYWibAIYc89Iyxn5D&X-Amz-Signature=34666aa81ba16f5afe2de84501eaa70293280d70265b7e1045cc0bc7e5670186&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VJAPQEX%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T220655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQDKoIaA6XiDz7jR8POsVIscp0GjZBKxsCmWvgOyqjcYPgIgNW5TwmujmpjARt7P2KRlRvZABV7tJFf2UgTfep4W4TEq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOwXuPxqvD7M3WpT%2BCrcA1bqy1iyn115Gh7yOk1TGYn%2FY8K0yCKJDeR98PN%2Ftq7oysP4f4bDG%2FAbbpql3nnlPHby2fAoWZpNykYYsZmaScVWFwOAl8qG9Rg4vhW8Y1LXGDr%2B08iabRy778h7pokGHwUxu91m8kj%2BmbmWeEPSNstr40Hoenw4GD64rYJBg6nuUBK%2FknEde%2FgsJwwKgYWq5UWA6GnmUh9Wigq%2FgfeOOYrnwWclAZoSdNOYHjMQ5XAlX3xGb%2FGHvfO07B1r4kTzCuKQhCJrIctnixvWog3KFDkCsSFrsyE4pyBFnmwa7PPUeRXHH4ejzDeea6oDJ%2BWR6%2BE%2Bw0d0wyaW767UDH1xwz1R%2F5CCfAXTMnZWlwcwU5FM%2FZ2%2BVl8xeW0ir1fzMnbcMRxkgjT0haFBCszma5HED%2FqBnhYjfsFVxVq16eScqfibPV9WF6h1602IFIyFbjCIFdXEbkRTmJ8LhASFNyVLJPQDiiZPRjj8R75C3%2Bmc3kIXHcSYIaeQkycV6h58D8rkEyOdyX7Z57NkfehzOusS9bYrlMXDFS6STMBPATda8krRu2I3HrbxrFaeHinRVaADjVnLxD%2F7ReSQMcDEeqsrd6ClUu3Vmce6lVU8f5npf4K9Y1ECzcXEpnwYDEaVMKO8jr0GOqUBWZRMc8gr2Y202WVMlhIkeuy3inmDaa9hIQttuld9tFCwXZWUfLmMJxsL6ivCUQdXmw8AoNtsRe5zv5J6MC%2FPRsoZR1UzgzPL02HA9ETuFz6llqJgn16nVxOgrUvhTsvvlnjCbqjUbpi1s9fUnQMxLFujGzto4zg8xKhgp%2BvQAcITyzl2Z6jPISU9G%2Bmq%2B7A40%2FLYjyA1hmFHYWibAIYc89Iyxn5D&X-Amz-Signature=95a764038358aa0c5f25a813218551ed3ddcda2686ace84c03404a5fcf8a07a0&X-Amz-SignedHeaders=host&x-id=GetObject)
