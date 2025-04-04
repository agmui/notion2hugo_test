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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3ENGL36%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T220743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmc8o3%2BKHT31vuzkdVi5dYagYjoomAIqUb2eQ%2FJz779QIhALtEcNerPXMaohXQbfizSexahJyw9cjrcCviCFCac1OJKv8DCB8QABoMNjM3NDIzMTgzODA1Igyt8JDA1xzwLyK6E3cq3APL%2Fgenxghlvzy71fACcojfaCBgeMp9zYA3I%2BjLq2Gr3GNdxpcvjvWV4cdzmbj9q7WLsqsikgneBKcN%2FURDgxTBK8zxItk2aoEYyd%2BvXNNjfYWeMh7VkWvgdQGI8eZ04VRuU5YDZoNTKlQ4FYVIdLoRqKtm4HhXidcQKWP1A2gfajE0iYgmW6buvO2eoGQAe1Ueh5uWswnazhRQW1R%2B%2FERsmSHn%2FaZnj%2B3C26YCft6zL5%2BMI5sxNlGufWu0nE6FZG%2F%2F%2FALLHxKbCZ3KZL3Ir2nYuWvXbyDAaT5c%2F%2BCrhUKA4zYfMtfj1mLmxAB5rgf5cMHpMtu1VBP4AGF6lvKxxpib20vjSbE6n8QmJtaF5zLmdLZN2U6y6btBIu%2BBpUmFc44fMZHkOXcNNGamDXXJ2pWXynZcatrt2okpt6lLv7bimOv2dUqiHl9JT8CxromezSv1C55DUwgnIvhJuqD8x0S5%2B2uoFkRFrSUAHf969NhITIxOa1%2BsEoVK2hGP3hqULsUZfMiZco4uI7be7anbDy615VtWre4pIo9Dert9j665tg9L1CIGngpa3A4pYIfv94LtYdl5sfOLtaQN3E8nVTZlgEgd9mDxQ1T71kw3Byo3UOX7Xdpf8VZxUYtO6DDJocG%2FBjqkAZ4i2FSfLOxNneV0g52iN1X56Z81CyqUoB6%2Bp7T7PBdqkJzYoZBMGocokROQNxQHLHgHrapT1IQ78ik4rX2X%2Buwo8QLn03TBCPsVpwP%2BTcrz0nsE7ao9S6yz8S%2F%2FaffFwTSgjCgklAolzwhAvJIqYlx4Rb%2FG%2F1N4WdkyTUY4GyNmbocU3SvRBRdasbVFjIRbDI6S2swiKq7BeQPbyAZjgkcLeQGS&X-Amz-Signature=fd0eedbc781281435ab4a0c32f006e85f4c1ae6f4f52ec4185156d4bd2823b43&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3ENGL36%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T220743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmc8o3%2BKHT31vuzkdVi5dYagYjoomAIqUb2eQ%2FJz779QIhALtEcNerPXMaohXQbfizSexahJyw9cjrcCviCFCac1OJKv8DCB8QABoMNjM3NDIzMTgzODA1Igyt8JDA1xzwLyK6E3cq3APL%2Fgenxghlvzy71fACcojfaCBgeMp9zYA3I%2BjLq2Gr3GNdxpcvjvWV4cdzmbj9q7WLsqsikgneBKcN%2FURDgxTBK8zxItk2aoEYyd%2BvXNNjfYWeMh7VkWvgdQGI8eZ04VRuU5YDZoNTKlQ4FYVIdLoRqKtm4HhXidcQKWP1A2gfajE0iYgmW6buvO2eoGQAe1Ueh5uWswnazhRQW1R%2B%2FERsmSHn%2FaZnj%2B3C26YCft6zL5%2BMI5sxNlGufWu0nE6FZG%2F%2F%2FALLHxKbCZ3KZL3Ir2nYuWvXbyDAaT5c%2F%2BCrhUKA4zYfMtfj1mLmxAB5rgf5cMHpMtu1VBP4AGF6lvKxxpib20vjSbE6n8QmJtaF5zLmdLZN2U6y6btBIu%2BBpUmFc44fMZHkOXcNNGamDXXJ2pWXynZcatrt2okpt6lLv7bimOv2dUqiHl9JT8CxromezSv1C55DUwgnIvhJuqD8x0S5%2B2uoFkRFrSUAHf969NhITIxOa1%2BsEoVK2hGP3hqULsUZfMiZco4uI7be7anbDy615VtWre4pIo9Dert9j665tg9L1CIGngpa3A4pYIfv94LtYdl5sfOLtaQN3E8nVTZlgEgd9mDxQ1T71kw3Byo3UOX7Xdpf8VZxUYtO6DDJocG%2FBjqkAZ4i2FSfLOxNneV0g52iN1X56Z81CyqUoB6%2Bp7T7PBdqkJzYoZBMGocokROQNxQHLHgHrapT1IQ78ik4rX2X%2Buwo8QLn03TBCPsVpwP%2BTcrz0nsE7ao9S6yz8S%2F%2FaffFwTSgjCgklAolzwhAvJIqYlx4Rb%2FG%2F1N4WdkyTUY4GyNmbocU3SvRBRdasbVFjIRbDI6S2swiKq7BeQPbyAZjgkcLeQGS&X-Amz-Signature=2ed6fdc8923eec6fe4d2f5c93278eb4c29dde505b433e3a63a32ed31732aaab9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3ENGL36%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T220743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmc8o3%2BKHT31vuzkdVi5dYagYjoomAIqUb2eQ%2FJz779QIhALtEcNerPXMaohXQbfizSexahJyw9cjrcCviCFCac1OJKv8DCB8QABoMNjM3NDIzMTgzODA1Igyt8JDA1xzwLyK6E3cq3APL%2Fgenxghlvzy71fACcojfaCBgeMp9zYA3I%2BjLq2Gr3GNdxpcvjvWV4cdzmbj9q7WLsqsikgneBKcN%2FURDgxTBK8zxItk2aoEYyd%2BvXNNjfYWeMh7VkWvgdQGI8eZ04VRuU5YDZoNTKlQ4FYVIdLoRqKtm4HhXidcQKWP1A2gfajE0iYgmW6buvO2eoGQAe1Ueh5uWswnazhRQW1R%2B%2FERsmSHn%2FaZnj%2B3C26YCft6zL5%2BMI5sxNlGufWu0nE6FZG%2F%2F%2FALLHxKbCZ3KZL3Ir2nYuWvXbyDAaT5c%2F%2BCrhUKA4zYfMtfj1mLmxAB5rgf5cMHpMtu1VBP4AGF6lvKxxpib20vjSbE6n8QmJtaF5zLmdLZN2U6y6btBIu%2BBpUmFc44fMZHkOXcNNGamDXXJ2pWXynZcatrt2okpt6lLv7bimOv2dUqiHl9JT8CxromezSv1C55DUwgnIvhJuqD8x0S5%2B2uoFkRFrSUAHf969NhITIxOa1%2BsEoVK2hGP3hqULsUZfMiZco4uI7be7anbDy615VtWre4pIo9Dert9j665tg9L1CIGngpa3A4pYIfv94LtYdl5sfOLtaQN3E8nVTZlgEgd9mDxQ1T71kw3Byo3UOX7Xdpf8VZxUYtO6DDJocG%2FBjqkAZ4i2FSfLOxNneV0g52iN1X56Z81CyqUoB6%2Bp7T7PBdqkJzYoZBMGocokROQNxQHLHgHrapT1IQ78ik4rX2X%2Buwo8QLn03TBCPsVpwP%2BTcrz0nsE7ao9S6yz8S%2F%2FaffFwTSgjCgklAolzwhAvJIqYlx4Rb%2FG%2F1N4WdkyTUY4GyNmbocU3SvRBRdasbVFjIRbDI6S2swiKq7BeQPbyAZjgkcLeQGS&X-Amz-Signature=adb047394592fb426e1099f827931e59d876680f0801b6b7f832a58f5249cf50&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3ENGL36%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T220743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmc8o3%2BKHT31vuzkdVi5dYagYjoomAIqUb2eQ%2FJz779QIhALtEcNerPXMaohXQbfizSexahJyw9cjrcCviCFCac1OJKv8DCB8QABoMNjM3NDIzMTgzODA1Igyt8JDA1xzwLyK6E3cq3APL%2Fgenxghlvzy71fACcojfaCBgeMp9zYA3I%2BjLq2Gr3GNdxpcvjvWV4cdzmbj9q7WLsqsikgneBKcN%2FURDgxTBK8zxItk2aoEYyd%2BvXNNjfYWeMh7VkWvgdQGI8eZ04VRuU5YDZoNTKlQ4FYVIdLoRqKtm4HhXidcQKWP1A2gfajE0iYgmW6buvO2eoGQAe1Ueh5uWswnazhRQW1R%2B%2FERsmSHn%2FaZnj%2B3C26YCft6zL5%2BMI5sxNlGufWu0nE6FZG%2F%2F%2FALLHxKbCZ3KZL3Ir2nYuWvXbyDAaT5c%2F%2BCrhUKA4zYfMtfj1mLmxAB5rgf5cMHpMtu1VBP4AGF6lvKxxpib20vjSbE6n8QmJtaF5zLmdLZN2U6y6btBIu%2BBpUmFc44fMZHkOXcNNGamDXXJ2pWXynZcatrt2okpt6lLv7bimOv2dUqiHl9JT8CxromezSv1C55DUwgnIvhJuqD8x0S5%2B2uoFkRFrSUAHf969NhITIxOa1%2BsEoVK2hGP3hqULsUZfMiZco4uI7be7anbDy615VtWre4pIo9Dert9j665tg9L1CIGngpa3A4pYIfv94LtYdl5sfOLtaQN3E8nVTZlgEgd9mDxQ1T71kw3Byo3UOX7Xdpf8VZxUYtO6DDJocG%2FBjqkAZ4i2FSfLOxNneV0g52iN1X56Z81CyqUoB6%2Bp7T7PBdqkJzYoZBMGocokROQNxQHLHgHrapT1IQ78ik4rX2X%2Buwo8QLn03TBCPsVpwP%2BTcrz0nsE7ao9S6yz8S%2F%2FaffFwTSgjCgklAolzwhAvJIqYlx4Rb%2FG%2F1N4WdkyTUY4GyNmbocU3SvRBRdasbVFjIRbDI6S2swiKq7BeQPbyAZjgkcLeQGS&X-Amz-Signature=f2c7339d0d087696a4554cace97e6d01e822890ae976307ab56f27216d445a3e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3ENGL36%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T220743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmc8o3%2BKHT31vuzkdVi5dYagYjoomAIqUb2eQ%2FJz779QIhALtEcNerPXMaohXQbfizSexahJyw9cjrcCviCFCac1OJKv8DCB8QABoMNjM3NDIzMTgzODA1Igyt8JDA1xzwLyK6E3cq3APL%2Fgenxghlvzy71fACcojfaCBgeMp9zYA3I%2BjLq2Gr3GNdxpcvjvWV4cdzmbj9q7WLsqsikgneBKcN%2FURDgxTBK8zxItk2aoEYyd%2BvXNNjfYWeMh7VkWvgdQGI8eZ04VRuU5YDZoNTKlQ4FYVIdLoRqKtm4HhXidcQKWP1A2gfajE0iYgmW6buvO2eoGQAe1Ueh5uWswnazhRQW1R%2B%2FERsmSHn%2FaZnj%2B3C26YCft6zL5%2BMI5sxNlGufWu0nE6FZG%2F%2F%2FALLHxKbCZ3KZL3Ir2nYuWvXbyDAaT5c%2F%2BCrhUKA4zYfMtfj1mLmxAB5rgf5cMHpMtu1VBP4AGF6lvKxxpib20vjSbE6n8QmJtaF5zLmdLZN2U6y6btBIu%2BBpUmFc44fMZHkOXcNNGamDXXJ2pWXynZcatrt2okpt6lLv7bimOv2dUqiHl9JT8CxromezSv1C55DUwgnIvhJuqD8x0S5%2B2uoFkRFrSUAHf969NhITIxOa1%2BsEoVK2hGP3hqULsUZfMiZco4uI7be7anbDy615VtWre4pIo9Dert9j665tg9L1CIGngpa3A4pYIfv94LtYdl5sfOLtaQN3E8nVTZlgEgd9mDxQ1T71kw3Byo3UOX7Xdpf8VZxUYtO6DDJocG%2FBjqkAZ4i2FSfLOxNneV0g52iN1X56Z81CyqUoB6%2Bp7T7PBdqkJzYoZBMGocokROQNxQHLHgHrapT1IQ78ik4rX2X%2Buwo8QLn03TBCPsVpwP%2BTcrz0nsE7ao9S6yz8S%2F%2FaffFwTSgjCgklAolzwhAvJIqYlx4Rb%2FG%2F1N4WdkyTUY4GyNmbocU3SvRBRdasbVFjIRbDI6S2swiKq7BeQPbyAZjgkcLeQGS&X-Amz-Signature=384a24099fbcf936280691be761252f7c1ae2697f68711829c7ed0e52e84518a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3ENGL36%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T220743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmc8o3%2BKHT31vuzkdVi5dYagYjoomAIqUb2eQ%2FJz779QIhALtEcNerPXMaohXQbfizSexahJyw9cjrcCviCFCac1OJKv8DCB8QABoMNjM3NDIzMTgzODA1Igyt8JDA1xzwLyK6E3cq3APL%2Fgenxghlvzy71fACcojfaCBgeMp9zYA3I%2BjLq2Gr3GNdxpcvjvWV4cdzmbj9q7WLsqsikgneBKcN%2FURDgxTBK8zxItk2aoEYyd%2BvXNNjfYWeMh7VkWvgdQGI8eZ04VRuU5YDZoNTKlQ4FYVIdLoRqKtm4HhXidcQKWP1A2gfajE0iYgmW6buvO2eoGQAe1Ueh5uWswnazhRQW1R%2B%2FERsmSHn%2FaZnj%2B3C26YCft6zL5%2BMI5sxNlGufWu0nE6FZG%2F%2F%2FALLHxKbCZ3KZL3Ir2nYuWvXbyDAaT5c%2F%2BCrhUKA4zYfMtfj1mLmxAB5rgf5cMHpMtu1VBP4AGF6lvKxxpib20vjSbE6n8QmJtaF5zLmdLZN2U6y6btBIu%2BBpUmFc44fMZHkOXcNNGamDXXJ2pWXynZcatrt2okpt6lLv7bimOv2dUqiHl9JT8CxromezSv1C55DUwgnIvhJuqD8x0S5%2B2uoFkRFrSUAHf969NhITIxOa1%2BsEoVK2hGP3hqULsUZfMiZco4uI7be7anbDy615VtWre4pIo9Dert9j665tg9L1CIGngpa3A4pYIfv94LtYdl5sfOLtaQN3E8nVTZlgEgd9mDxQ1T71kw3Byo3UOX7Xdpf8VZxUYtO6DDJocG%2FBjqkAZ4i2FSfLOxNneV0g52iN1X56Z81CyqUoB6%2Bp7T7PBdqkJzYoZBMGocokROQNxQHLHgHrapT1IQ78ik4rX2X%2Buwo8QLn03TBCPsVpwP%2BTcrz0nsE7ao9S6yz8S%2F%2FaffFwTSgjCgklAolzwhAvJIqYlx4Rb%2FG%2F1N4WdkyTUY4GyNmbocU3SvRBRdasbVFjIRbDI6S2swiKq7BeQPbyAZjgkcLeQGS&X-Amz-Signature=015ca71ccc31adeb674577c7b6dbc069c722db36d27cec30d246273fb8ba8467&X-Amz-SignedHeaders=host&x-id=GetObject)
