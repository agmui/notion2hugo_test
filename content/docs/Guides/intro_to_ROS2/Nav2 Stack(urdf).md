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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNOYRGGU%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZ55KF6gf7uAGdBugEAwDGgBPmNyzbClDc6bahrxWHsAiEApruHRJDY5EV%2B4DiIZ2Np4dp9fHYcRd6SCaf0QjJEnX0qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGI38GrKCzwp1UoSySrcAxCGskXlwX%2BT14T0AoYqED0oJlAXHTN%2FFNUhZqRnNKwQeO0HHxYjxDoWwWkCASggqlGLatlNnGXIVNvQkHFsjvYFVU6CDdHRNqMo27%2Bdb10KUPoHBVlqSaGKWTZDOu0kA5PT34za0VXJrZC%2BognVXV2j%2Bx6wJKtJs6ZooKzN7ViLtAif%2BjPssSdjeHVkP5QJbtZgBiNxNUhiYpe%2Fd5DhHS%2FPN4UjCQkZ8qWwVIwZLb0hw4NpjbQr0wqu3ZQdWuGDsvEl7ia%2BVwoVBMQjJBrXnAAf0rLZXQ3nFV42pwwhLWhRphEUH77XvTSH%2BSrcsXlGw40gm%2FZSualq0tbZJfEAX5sQ1%2BudnHpN5tqx%2BrvNBHBeh0caRTghmzA2c22ayY4dw0U6utkccwtc4eOSiiGHgHrqbSua4%2BRwnIn6LmFPCluVBfi%2FonX4w8EDuf9If5IUpOYnCZMcN1p8RmcOPb8xvHhYPamroa8HiCnY33BIWxO7gWavDC68HQbLeUADy5INy5BRCrQWfYwhFNCpm7zmnAQa7oZswgwP2%2Fvw3aTmUXgdbP4W%2FBUeGoz3X6TQ9sf165SRGlyl508pYm98bUIygqGN5HO36zywNbFz8B48cvfz%2Fw52vju17gUakrrtMLHe0MIGOqUBhlvBAfsoUevdWqsaAzLLEuCvu%2B%2B2rNvYdkwJKhgVfG72PtULYY2jWr9zOyCGiEQ6rGFfsHF5sFPSbhnqpT7%2FuTepn7d13dguZf5RPprQRRjDuHxg90MoroeUdd%2FuCl6pIZkoof9B3BNMGuZVgpM31teLCwyUfWz5KQ3KENf4koNFxVGLvYCFxAs%2BIR9e%2Bmk2rA8cqlZeqBtDljvl7LHSZvUb9oqw&X-Amz-Signature=02582afe40a2161bc4999555adbed35a0e269983274571f837a40008d6ff50e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNOYRGGU%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZ55KF6gf7uAGdBugEAwDGgBPmNyzbClDc6bahrxWHsAiEApruHRJDY5EV%2B4DiIZ2Np4dp9fHYcRd6SCaf0QjJEnX0qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGI38GrKCzwp1UoSySrcAxCGskXlwX%2BT14T0AoYqED0oJlAXHTN%2FFNUhZqRnNKwQeO0HHxYjxDoWwWkCASggqlGLatlNnGXIVNvQkHFsjvYFVU6CDdHRNqMo27%2Bdb10KUPoHBVlqSaGKWTZDOu0kA5PT34za0VXJrZC%2BognVXV2j%2Bx6wJKtJs6ZooKzN7ViLtAif%2BjPssSdjeHVkP5QJbtZgBiNxNUhiYpe%2Fd5DhHS%2FPN4UjCQkZ8qWwVIwZLb0hw4NpjbQr0wqu3ZQdWuGDsvEl7ia%2BVwoVBMQjJBrXnAAf0rLZXQ3nFV42pwwhLWhRphEUH77XvTSH%2BSrcsXlGw40gm%2FZSualq0tbZJfEAX5sQ1%2BudnHpN5tqx%2BrvNBHBeh0caRTghmzA2c22ayY4dw0U6utkccwtc4eOSiiGHgHrqbSua4%2BRwnIn6LmFPCluVBfi%2FonX4w8EDuf9If5IUpOYnCZMcN1p8RmcOPb8xvHhYPamroa8HiCnY33BIWxO7gWavDC68HQbLeUADy5INy5BRCrQWfYwhFNCpm7zmnAQa7oZswgwP2%2Fvw3aTmUXgdbP4W%2FBUeGoz3X6TQ9sf165SRGlyl508pYm98bUIygqGN5HO36zywNbFz8B48cvfz%2Fw52vju17gUakrrtMLHe0MIGOqUBhlvBAfsoUevdWqsaAzLLEuCvu%2B%2B2rNvYdkwJKhgVfG72PtULYY2jWr9zOyCGiEQ6rGFfsHF5sFPSbhnqpT7%2FuTepn7d13dguZf5RPprQRRjDuHxg90MoroeUdd%2FuCl6pIZkoof9B3BNMGuZVgpM31teLCwyUfWz5KQ3KENf4koNFxVGLvYCFxAs%2BIR9e%2Bmk2rA8cqlZeqBtDljvl7LHSZvUb9oqw&X-Amz-Signature=3b4526f62afc40774e3934661b959d0bd3670723ae446904e6d73549dec542c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNOYRGGU%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZ55KF6gf7uAGdBugEAwDGgBPmNyzbClDc6bahrxWHsAiEApruHRJDY5EV%2B4DiIZ2Np4dp9fHYcRd6SCaf0QjJEnX0qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGI38GrKCzwp1UoSySrcAxCGskXlwX%2BT14T0AoYqED0oJlAXHTN%2FFNUhZqRnNKwQeO0HHxYjxDoWwWkCASggqlGLatlNnGXIVNvQkHFsjvYFVU6CDdHRNqMo27%2Bdb10KUPoHBVlqSaGKWTZDOu0kA5PT34za0VXJrZC%2BognVXV2j%2Bx6wJKtJs6ZooKzN7ViLtAif%2BjPssSdjeHVkP5QJbtZgBiNxNUhiYpe%2Fd5DhHS%2FPN4UjCQkZ8qWwVIwZLb0hw4NpjbQr0wqu3ZQdWuGDsvEl7ia%2BVwoVBMQjJBrXnAAf0rLZXQ3nFV42pwwhLWhRphEUH77XvTSH%2BSrcsXlGw40gm%2FZSualq0tbZJfEAX5sQ1%2BudnHpN5tqx%2BrvNBHBeh0caRTghmzA2c22ayY4dw0U6utkccwtc4eOSiiGHgHrqbSua4%2BRwnIn6LmFPCluVBfi%2FonX4w8EDuf9If5IUpOYnCZMcN1p8RmcOPb8xvHhYPamroa8HiCnY33BIWxO7gWavDC68HQbLeUADy5INy5BRCrQWfYwhFNCpm7zmnAQa7oZswgwP2%2Fvw3aTmUXgdbP4W%2FBUeGoz3X6TQ9sf165SRGlyl508pYm98bUIygqGN5HO36zywNbFz8B48cvfz%2Fw52vju17gUakrrtMLHe0MIGOqUBhlvBAfsoUevdWqsaAzLLEuCvu%2B%2B2rNvYdkwJKhgVfG72PtULYY2jWr9zOyCGiEQ6rGFfsHF5sFPSbhnqpT7%2FuTepn7d13dguZf5RPprQRRjDuHxg90MoroeUdd%2FuCl6pIZkoof9B3BNMGuZVgpM31teLCwyUfWz5KQ3KENf4koNFxVGLvYCFxAs%2BIR9e%2Bmk2rA8cqlZeqBtDljvl7LHSZvUb9oqw&X-Amz-Signature=622e9dffe25aa759bec19773b6bae98e87c4238b525ab3698cc2c4fcd58e899e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNOYRGGU%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZ55KF6gf7uAGdBugEAwDGgBPmNyzbClDc6bahrxWHsAiEApruHRJDY5EV%2B4DiIZ2Np4dp9fHYcRd6SCaf0QjJEnX0qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGI38GrKCzwp1UoSySrcAxCGskXlwX%2BT14T0AoYqED0oJlAXHTN%2FFNUhZqRnNKwQeO0HHxYjxDoWwWkCASggqlGLatlNnGXIVNvQkHFsjvYFVU6CDdHRNqMo27%2Bdb10KUPoHBVlqSaGKWTZDOu0kA5PT34za0VXJrZC%2BognVXV2j%2Bx6wJKtJs6ZooKzN7ViLtAif%2BjPssSdjeHVkP5QJbtZgBiNxNUhiYpe%2Fd5DhHS%2FPN4UjCQkZ8qWwVIwZLb0hw4NpjbQr0wqu3ZQdWuGDsvEl7ia%2BVwoVBMQjJBrXnAAf0rLZXQ3nFV42pwwhLWhRphEUH77XvTSH%2BSrcsXlGw40gm%2FZSualq0tbZJfEAX5sQ1%2BudnHpN5tqx%2BrvNBHBeh0caRTghmzA2c22ayY4dw0U6utkccwtc4eOSiiGHgHrqbSua4%2BRwnIn6LmFPCluVBfi%2FonX4w8EDuf9If5IUpOYnCZMcN1p8RmcOPb8xvHhYPamroa8HiCnY33BIWxO7gWavDC68HQbLeUADy5INy5BRCrQWfYwhFNCpm7zmnAQa7oZswgwP2%2Fvw3aTmUXgdbP4W%2FBUeGoz3X6TQ9sf165SRGlyl508pYm98bUIygqGN5HO36zywNbFz8B48cvfz%2Fw52vju17gUakrrtMLHe0MIGOqUBhlvBAfsoUevdWqsaAzLLEuCvu%2B%2B2rNvYdkwJKhgVfG72PtULYY2jWr9zOyCGiEQ6rGFfsHF5sFPSbhnqpT7%2FuTepn7d13dguZf5RPprQRRjDuHxg90MoroeUdd%2FuCl6pIZkoof9B3BNMGuZVgpM31teLCwyUfWz5KQ3KENf4koNFxVGLvYCFxAs%2BIR9e%2Bmk2rA8cqlZeqBtDljvl7LHSZvUb9oqw&X-Amz-Signature=388b8cc74619392dc4df2f608951b86577f9905f491d9c967328fb54d69a173e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNOYRGGU%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZ55KF6gf7uAGdBugEAwDGgBPmNyzbClDc6bahrxWHsAiEApruHRJDY5EV%2B4DiIZ2Np4dp9fHYcRd6SCaf0QjJEnX0qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGI38GrKCzwp1UoSySrcAxCGskXlwX%2BT14T0AoYqED0oJlAXHTN%2FFNUhZqRnNKwQeO0HHxYjxDoWwWkCASggqlGLatlNnGXIVNvQkHFsjvYFVU6CDdHRNqMo27%2Bdb10KUPoHBVlqSaGKWTZDOu0kA5PT34za0VXJrZC%2BognVXV2j%2Bx6wJKtJs6ZooKzN7ViLtAif%2BjPssSdjeHVkP5QJbtZgBiNxNUhiYpe%2Fd5DhHS%2FPN4UjCQkZ8qWwVIwZLb0hw4NpjbQr0wqu3ZQdWuGDsvEl7ia%2BVwoVBMQjJBrXnAAf0rLZXQ3nFV42pwwhLWhRphEUH77XvTSH%2BSrcsXlGw40gm%2FZSualq0tbZJfEAX5sQ1%2BudnHpN5tqx%2BrvNBHBeh0caRTghmzA2c22ayY4dw0U6utkccwtc4eOSiiGHgHrqbSua4%2BRwnIn6LmFPCluVBfi%2FonX4w8EDuf9If5IUpOYnCZMcN1p8RmcOPb8xvHhYPamroa8HiCnY33BIWxO7gWavDC68HQbLeUADy5INy5BRCrQWfYwhFNCpm7zmnAQa7oZswgwP2%2Fvw3aTmUXgdbP4W%2FBUeGoz3X6TQ9sf165SRGlyl508pYm98bUIygqGN5HO36zywNbFz8B48cvfz%2Fw52vju17gUakrrtMLHe0MIGOqUBhlvBAfsoUevdWqsaAzLLEuCvu%2B%2B2rNvYdkwJKhgVfG72PtULYY2jWr9zOyCGiEQ6rGFfsHF5sFPSbhnqpT7%2FuTepn7d13dguZf5RPprQRRjDuHxg90MoroeUdd%2FuCl6pIZkoof9B3BNMGuZVgpM31teLCwyUfWz5KQ3KENf4koNFxVGLvYCFxAs%2BIR9e%2Bmk2rA8cqlZeqBtDljvl7LHSZvUb9oqw&X-Amz-Signature=ba78d66155b2aee9127b409f5f4e976eea9780f96e3182215f2721d1dc79d368&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNOYRGGU%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T181157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZ55KF6gf7uAGdBugEAwDGgBPmNyzbClDc6bahrxWHsAiEApruHRJDY5EV%2B4DiIZ2Np4dp9fHYcRd6SCaf0QjJEnX0qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGI38GrKCzwp1UoSySrcAxCGskXlwX%2BT14T0AoYqED0oJlAXHTN%2FFNUhZqRnNKwQeO0HHxYjxDoWwWkCASggqlGLatlNnGXIVNvQkHFsjvYFVU6CDdHRNqMo27%2Bdb10KUPoHBVlqSaGKWTZDOu0kA5PT34za0VXJrZC%2BognVXV2j%2Bx6wJKtJs6ZooKzN7ViLtAif%2BjPssSdjeHVkP5QJbtZgBiNxNUhiYpe%2Fd5DhHS%2FPN4UjCQkZ8qWwVIwZLb0hw4NpjbQr0wqu3ZQdWuGDsvEl7ia%2BVwoVBMQjJBrXnAAf0rLZXQ3nFV42pwwhLWhRphEUH77XvTSH%2BSrcsXlGw40gm%2FZSualq0tbZJfEAX5sQ1%2BudnHpN5tqx%2BrvNBHBeh0caRTghmzA2c22ayY4dw0U6utkccwtc4eOSiiGHgHrqbSua4%2BRwnIn6LmFPCluVBfi%2FonX4w8EDuf9If5IUpOYnCZMcN1p8RmcOPb8xvHhYPamroa8HiCnY33BIWxO7gWavDC68HQbLeUADy5INy5BRCrQWfYwhFNCpm7zmnAQa7oZswgwP2%2Fvw3aTmUXgdbP4W%2FBUeGoz3X6TQ9sf165SRGlyl508pYm98bUIygqGN5HO36zywNbFz8B48cvfz%2Fw52vju17gUakrrtMLHe0MIGOqUBhlvBAfsoUevdWqsaAzLLEuCvu%2B%2B2rNvYdkwJKhgVfG72PtULYY2jWr9zOyCGiEQ6rGFfsHF5sFPSbhnqpT7%2FuTepn7d13dguZf5RPprQRRjDuHxg90MoroeUdd%2FuCl6pIZkoof9B3BNMGuZVgpM31teLCwyUfWz5KQ3KENf4koNFxVGLvYCFxAs%2BIR9e%2Bmk2rA8cqlZeqBtDljvl7LHSZvUb9oqw&X-Amz-Signature=13d94615c83a81f5548378a2e4f996a901c56ada8a32863809745fc52fc566df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
