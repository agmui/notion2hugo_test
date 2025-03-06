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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTLQVSCA%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T070841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeAFNPlKetn5yT648XjitJrUMoGGP%2FO5ZivBUeyHM5EgIgUAaE%2FxtHe1K3732IdloSW%2BdRP3h5k4wyJ4ZDO4K%2FoIgq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDOI43ihQKBrTUo9x5ircA7TvfnfYVfY9wD%2FayeNtVlafLs0kx5zB217kbJm5Jwj2bbdaF93yvdUFaaLdA%2FnCQVpaBsLCz3m%2BSEVUeaJcpUMyoPROzZYCpa1frZfl9mfxfZSf%2Fjbi6vfaLA5Q3ezEKftNPb%2Brd998Qtobxrn735biXpYOrsmyhLg7Duga8yrUInow0nkyiY19WHSWCDEPjI8DrCwHw%2BlfwCDWQBimowINlzzmRN%2By9Cya7dGCWiFngLY%2FxRP1kBL5ZMxcVXbODx8S0H7aCFonp04YNmBg5St5L4vFLtZOE0Qjx%2FBSXqBOwxvWHey%2BTSlo5Jm3F4QnOwN71XeZ7zdxaYTxPkqujJ5Eh7iKvtY%2Fx1kBsx%2F7eDRkDYDAFOq%2FqHtiZQY6PfZg3GuUz3XMlfrHjfx0%2Fydy7uc9ps0AemxIfOBFBGoJNYS5p6pXwSw%2BfkChfHUfyR89y5L8byVno7JShFre7zOHJ5strBsUN%2BMSzHXvxZ%2ByDrlSEuIKLgBMwaZ598jLSWoxAWU2PpaepqjpP47nsGNNMv7M5l8SJLQsngIDdkzfYPZ%2B4NbVC0RPvD%2FLj0%2BLszzpNoIJAOAgok1yU7hfWloi3zFS2kMySUgcsVe0HwNIPX%2F%2FLJ3xtKJNiyTMuYQlMJn2pL4GOqUBPUz8zksAxs%2BmiEcj7h0qIRf7Iun0XB09vuYvg62DgAJ8zIVLK7kv2DniwB3xzZ6ZKKVdfx6nFEAPPZa7IY1%2BaGHbk78FYNoxH2L%2BIOubBlcp%2FkJOF4Bszjuy3UkcPX7OFd8nanQUG5oiBBixhi7Ni3XLkwOx%2BDm9Z3WgkIlB1jlvYmocAngrkHA3Md6U5Ii2rzmdJ8tGfWy5%2B7qwJz69WdzWNfsN&X-Amz-Signature=6cdf70a0d885ad045bb5c6d835fc363eaf47776717e34bed58fd8214255a5adc&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTLQVSCA%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T070841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeAFNPlKetn5yT648XjitJrUMoGGP%2FO5ZivBUeyHM5EgIgUAaE%2FxtHe1K3732IdloSW%2BdRP3h5k4wyJ4ZDO4K%2FoIgq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDOI43ihQKBrTUo9x5ircA7TvfnfYVfY9wD%2FayeNtVlafLs0kx5zB217kbJm5Jwj2bbdaF93yvdUFaaLdA%2FnCQVpaBsLCz3m%2BSEVUeaJcpUMyoPROzZYCpa1frZfl9mfxfZSf%2Fjbi6vfaLA5Q3ezEKftNPb%2Brd998Qtobxrn735biXpYOrsmyhLg7Duga8yrUInow0nkyiY19WHSWCDEPjI8DrCwHw%2BlfwCDWQBimowINlzzmRN%2By9Cya7dGCWiFngLY%2FxRP1kBL5ZMxcVXbODx8S0H7aCFonp04YNmBg5St5L4vFLtZOE0Qjx%2FBSXqBOwxvWHey%2BTSlo5Jm3F4QnOwN71XeZ7zdxaYTxPkqujJ5Eh7iKvtY%2Fx1kBsx%2F7eDRkDYDAFOq%2FqHtiZQY6PfZg3GuUz3XMlfrHjfx0%2Fydy7uc9ps0AemxIfOBFBGoJNYS5p6pXwSw%2BfkChfHUfyR89y5L8byVno7JShFre7zOHJ5strBsUN%2BMSzHXvxZ%2ByDrlSEuIKLgBMwaZ598jLSWoxAWU2PpaepqjpP47nsGNNMv7M5l8SJLQsngIDdkzfYPZ%2B4NbVC0RPvD%2FLj0%2BLszzpNoIJAOAgok1yU7hfWloi3zFS2kMySUgcsVe0HwNIPX%2F%2FLJ3xtKJNiyTMuYQlMJn2pL4GOqUBPUz8zksAxs%2BmiEcj7h0qIRf7Iun0XB09vuYvg62DgAJ8zIVLK7kv2DniwB3xzZ6ZKKVdfx6nFEAPPZa7IY1%2BaGHbk78FYNoxH2L%2BIOubBlcp%2FkJOF4Bszjuy3UkcPX7OFd8nanQUG5oiBBixhi7Ni3XLkwOx%2BDm9Z3WgkIlB1jlvYmocAngrkHA3Md6U5Ii2rzmdJ8tGfWy5%2B7qwJz69WdzWNfsN&X-Amz-Signature=c24bc676a3c83411ef57f8de33cca38dfc2c3c2613aa4897aff7ef5ed17073b9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTLQVSCA%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T070841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeAFNPlKetn5yT648XjitJrUMoGGP%2FO5ZivBUeyHM5EgIgUAaE%2FxtHe1K3732IdloSW%2BdRP3h5k4wyJ4ZDO4K%2FoIgq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDOI43ihQKBrTUo9x5ircA7TvfnfYVfY9wD%2FayeNtVlafLs0kx5zB217kbJm5Jwj2bbdaF93yvdUFaaLdA%2FnCQVpaBsLCz3m%2BSEVUeaJcpUMyoPROzZYCpa1frZfl9mfxfZSf%2Fjbi6vfaLA5Q3ezEKftNPb%2Brd998Qtobxrn735biXpYOrsmyhLg7Duga8yrUInow0nkyiY19WHSWCDEPjI8DrCwHw%2BlfwCDWQBimowINlzzmRN%2By9Cya7dGCWiFngLY%2FxRP1kBL5ZMxcVXbODx8S0H7aCFonp04YNmBg5St5L4vFLtZOE0Qjx%2FBSXqBOwxvWHey%2BTSlo5Jm3F4QnOwN71XeZ7zdxaYTxPkqujJ5Eh7iKvtY%2Fx1kBsx%2F7eDRkDYDAFOq%2FqHtiZQY6PfZg3GuUz3XMlfrHjfx0%2Fydy7uc9ps0AemxIfOBFBGoJNYS5p6pXwSw%2BfkChfHUfyR89y5L8byVno7JShFre7zOHJ5strBsUN%2BMSzHXvxZ%2ByDrlSEuIKLgBMwaZ598jLSWoxAWU2PpaepqjpP47nsGNNMv7M5l8SJLQsngIDdkzfYPZ%2B4NbVC0RPvD%2FLj0%2BLszzpNoIJAOAgok1yU7hfWloi3zFS2kMySUgcsVe0HwNIPX%2F%2FLJ3xtKJNiyTMuYQlMJn2pL4GOqUBPUz8zksAxs%2BmiEcj7h0qIRf7Iun0XB09vuYvg62DgAJ8zIVLK7kv2DniwB3xzZ6ZKKVdfx6nFEAPPZa7IY1%2BaGHbk78FYNoxH2L%2BIOubBlcp%2FkJOF4Bszjuy3UkcPX7OFd8nanQUG5oiBBixhi7Ni3XLkwOx%2BDm9Z3WgkIlB1jlvYmocAngrkHA3Md6U5Ii2rzmdJ8tGfWy5%2B7qwJz69WdzWNfsN&X-Amz-Signature=3eee162a778b32384015d38506bea2b88d3dc247557dcb47e85878aee7bb86a4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTLQVSCA%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T070841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeAFNPlKetn5yT648XjitJrUMoGGP%2FO5ZivBUeyHM5EgIgUAaE%2FxtHe1K3732IdloSW%2BdRP3h5k4wyJ4ZDO4K%2FoIgq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDOI43ihQKBrTUo9x5ircA7TvfnfYVfY9wD%2FayeNtVlafLs0kx5zB217kbJm5Jwj2bbdaF93yvdUFaaLdA%2FnCQVpaBsLCz3m%2BSEVUeaJcpUMyoPROzZYCpa1frZfl9mfxfZSf%2Fjbi6vfaLA5Q3ezEKftNPb%2Brd998Qtobxrn735biXpYOrsmyhLg7Duga8yrUInow0nkyiY19WHSWCDEPjI8DrCwHw%2BlfwCDWQBimowINlzzmRN%2By9Cya7dGCWiFngLY%2FxRP1kBL5ZMxcVXbODx8S0H7aCFonp04YNmBg5St5L4vFLtZOE0Qjx%2FBSXqBOwxvWHey%2BTSlo5Jm3F4QnOwN71XeZ7zdxaYTxPkqujJ5Eh7iKvtY%2Fx1kBsx%2F7eDRkDYDAFOq%2FqHtiZQY6PfZg3GuUz3XMlfrHjfx0%2Fydy7uc9ps0AemxIfOBFBGoJNYS5p6pXwSw%2BfkChfHUfyR89y5L8byVno7JShFre7zOHJ5strBsUN%2BMSzHXvxZ%2ByDrlSEuIKLgBMwaZ598jLSWoxAWU2PpaepqjpP47nsGNNMv7M5l8SJLQsngIDdkzfYPZ%2B4NbVC0RPvD%2FLj0%2BLszzpNoIJAOAgok1yU7hfWloi3zFS2kMySUgcsVe0HwNIPX%2F%2FLJ3xtKJNiyTMuYQlMJn2pL4GOqUBPUz8zksAxs%2BmiEcj7h0qIRf7Iun0XB09vuYvg62DgAJ8zIVLK7kv2DniwB3xzZ6ZKKVdfx6nFEAPPZa7IY1%2BaGHbk78FYNoxH2L%2BIOubBlcp%2FkJOF4Bszjuy3UkcPX7OFd8nanQUG5oiBBixhi7Ni3XLkwOx%2BDm9Z3WgkIlB1jlvYmocAngrkHA3Md6U5Ii2rzmdJ8tGfWy5%2B7qwJz69WdzWNfsN&X-Amz-Signature=3de8dbe71641e5ca6beb932f872b9923d58770a9505e19e8e86216d2e970f14e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTLQVSCA%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T070841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeAFNPlKetn5yT648XjitJrUMoGGP%2FO5ZivBUeyHM5EgIgUAaE%2FxtHe1K3732IdloSW%2BdRP3h5k4wyJ4ZDO4K%2FoIgq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDOI43ihQKBrTUo9x5ircA7TvfnfYVfY9wD%2FayeNtVlafLs0kx5zB217kbJm5Jwj2bbdaF93yvdUFaaLdA%2FnCQVpaBsLCz3m%2BSEVUeaJcpUMyoPROzZYCpa1frZfl9mfxfZSf%2Fjbi6vfaLA5Q3ezEKftNPb%2Brd998Qtobxrn735biXpYOrsmyhLg7Duga8yrUInow0nkyiY19WHSWCDEPjI8DrCwHw%2BlfwCDWQBimowINlzzmRN%2By9Cya7dGCWiFngLY%2FxRP1kBL5ZMxcVXbODx8S0H7aCFonp04YNmBg5St5L4vFLtZOE0Qjx%2FBSXqBOwxvWHey%2BTSlo5Jm3F4QnOwN71XeZ7zdxaYTxPkqujJ5Eh7iKvtY%2Fx1kBsx%2F7eDRkDYDAFOq%2FqHtiZQY6PfZg3GuUz3XMlfrHjfx0%2Fydy7uc9ps0AemxIfOBFBGoJNYS5p6pXwSw%2BfkChfHUfyR89y5L8byVno7JShFre7zOHJ5strBsUN%2BMSzHXvxZ%2ByDrlSEuIKLgBMwaZ598jLSWoxAWU2PpaepqjpP47nsGNNMv7M5l8SJLQsngIDdkzfYPZ%2B4NbVC0RPvD%2FLj0%2BLszzpNoIJAOAgok1yU7hfWloi3zFS2kMySUgcsVe0HwNIPX%2F%2FLJ3xtKJNiyTMuYQlMJn2pL4GOqUBPUz8zksAxs%2BmiEcj7h0qIRf7Iun0XB09vuYvg62DgAJ8zIVLK7kv2DniwB3xzZ6ZKKVdfx6nFEAPPZa7IY1%2BaGHbk78FYNoxH2L%2BIOubBlcp%2FkJOF4Bszjuy3UkcPX7OFd8nanQUG5oiBBixhi7Ni3XLkwOx%2BDm9Z3WgkIlB1jlvYmocAngrkHA3Md6U5Ii2rzmdJ8tGfWy5%2B7qwJz69WdzWNfsN&X-Amz-Signature=4a8e8d94413bf069530dec291fe08a70137c47ebe89042b6bdd724e9f219310a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTLQVSCA%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T070841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeAFNPlKetn5yT648XjitJrUMoGGP%2FO5ZivBUeyHM5EgIgUAaE%2FxtHe1K3732IdloSW%2BdRP3h5k4wyJ4ZDO4K%2FoIgq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDOI43ihQKBrTUo9x5ircA7TvfnfYVfY9wD%2FayeNtVlafLs0kx5zB217kbJm5Jwj2bbdaF93yvdUFaaLdA%2FnCQVpaBsLCz3m%2BSEVUeaJcpUMyoPROzZYCpa1frZfl9mfxfZSf%2Fjbi6vfaLA5Q3ezEKftNPb%2Brd998Qtobxrn735biXpYOrsmyhLg7Duga8yrUInow0nkyiY19WHSWCDEPjI8DrCwHw%2BlfwCDWQBimowINlzzmRN%2By9Cya7dGCWiFngLY%2FxRP1kBL5ZMxcVXbODx8S0H7aCFonp04YNmBg5St5L4vFLtZOE0Qjx%2FBSXqBOwxvWHey%2BTSlo5Jm3F4QnOwN71XeZ7zdxaYTxPkqujJ5Eh7iKvtY%2Fx1kBsx%2F7eDRkDYDAFOq%2FqHtiZQY6PfZg3GuUz3XMlfrHjfx0%2Fydy7uc9ps0AemxIfOBFBGoJNYS5p6pXwSw%2BfkChfHUfyR89y5L8byVno7JShFre7zOHJ5strBsUN%2BMSzHXvxZ%2ByDrlSEuIKLgBMwaZ598jLSWoxAWU2PpaepqjpP47nsGNNMv7M5l8SJLQsngIDdkzfYPZ%2B4NbVC0RPvD%2FLj0%2BLszzpNoIJAOAgok1yU7hfWloi3zFS2kMySUgcsVe0HwNIPX%2F%2FLJ3xtKJNiyTMuYQlMJn2pL4GOqUBPUz8zksAxs%2BmiEcj7h0qIRf7Iun0XB09vuYvg62DgAJ8zIVLK7kv2DniwB3xzZ6ZKKVdfx6nFEAPPZa7IY1%2BaGHbk78FYNoxH2L%2BIOubBlcp%2FkJOF4Bszjuy3UkcPX7OFd8nanQUG5oiBBixhi7Ni3XLkwOx%2BDm9Z3WgkIlB1jlvYmocAngrkHA3Md6U5Ii2rzmdJ8tGfWy5%2B7qwJz69WdzWNfsN&X-Amz-Signature=99110f5686851d34031c93bb245da4175d7497e354f56873ba5f954db3e5b887&X-Amz-SignedHeaders=host&x-id=GetObject)
