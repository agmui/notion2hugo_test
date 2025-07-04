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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XGTRKWJ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T121627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDfrKuQTnAxWcrIeoKk%2BHSChifkHPZRD8zEERwpUzzxcAIhAJrfdOa98Sb%2BpfmUWuk6n9mAjZc8SNUVTH%2BrJQ25Fw95Kv8DCCwQABoMNjM3NDIzMTgzODA1Igxu8bh7EaEsSu747cMq3APCXKFAq70daagCHFF4eO4G5w4c1GtLJBwZAHcsBZrCMDV0QzmDTE14DWh2iYhzfGHo4rZhoi4vcJ7GxSiVXP%2Bg4pZw2F4FvBZEVSnY8lC%2BDKiHVGf6Fs%2BGBn3wvVz6urwniz8DNWrEKdP1A2nAaSGoBCl0tNBScNrUq9T6UCx%2BTEAWA68rlbbz0TWY9dWm9CNsNX%2FBfA1ic8tAEbFNhiEg4WNKdX13vUywqGKPdu134NI1%2FJvKAyYYI3rt7Ecd%2BR5GkVXi2%2FX6yL6h7KE%2BVyriS4B94bysX6M10QxLocT22sjFyUNOtFJzgH1%2F8VGU1jHz%2Bv%2BaRmIs%2BFFHD3PxuWxxQ34M01DGJeLK%2BF%2BVXeSD67MFRH8R%2FZShsf%2BRlwLRoUJ1m99PJjul%2BqTPPlKiJJyO1cluDvhG9nEBGYze1HigteJC9WDPSNQFwbyZZHuez%2FoQhzH1LKsaj7joNht01lboql44740QfRlP7zUj5tiK7M75xWd8TAV7UbfNaNCNRmt2yZp4KVp3oWwqnMv%2BILuAavoa39IATtKD%2BEJbmvcbN6o9OnhnOrdDplqhp7sWi%2FmlTP5XbMGRemV6zNNEiggiIkHe9C3sEVi0wsY9uJVLb7N%2BWodkkvCWFZ8vOzCb857DBjqkAcTyp6KPg0dA58eVxxFb9NPbT6EMy6Zj1BGiEiUWMyeD2o%2B2QXP5iHdF2lqT0ifGym3YUL%2BgJ2P74fc3TqL%2FDuhbY1yXxZSU5SykCkwr0Pk5X3h6dlzD6ckNO%2B0CHpzQNQ%2BXIPRibjuQ%2FoM0oM2IKSFPfx9pmD6gmNt8isau1JVBN%2FCs50Z%2BM5ou153ZPNmH9b1n8YUiELJJBcWhKCho8avoXPwT&X-Amz-Signature=5fc06b16a206571d5f11a79f104cd8b4b2865195cfae22b3bf644b082c528006&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XGTRKWJ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T121627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDfrKuQTnAxWcrIeoKk%2BHSChifkHPZRD8zEERwpUzzxcAIhAJrfdOa98Sb%2BpfmUWuk6n9mAjZc8SNUVTH%2BrJQ25Fw95Kv8DCCwQABoMNjM3NDIzMTgzODA1Igxu8bh7EaEsSu747cMq3APCXKFAq70daagCHFF4eO4G5w4c1GtLJBwZAHcsBZrCMDV0QzmDTE14DWh2iYhzfGHo4rZhoi4vcJ7GxSiVXP%2Bg4pZw2F4FvBZEVSnY8lC%2BDKiHVGf6Fs%2BGBn3wvVz6urwniz8DNWrEKdP1A2nAaSGoBCl0tNBScNrUq9T6UCx%2BTEAWA68rlbbz0TWY9dWm9CNsNX%2FBfA1ic8tAEbFNhiEg4WNKdX13vUywqGKPdu134NI1%2FJvKAyYYI3rt7Ecd%2BR5GkVXi2%2FX6yL6h7KE%2BVyriS4B94bysX6M10QxLocT22sjFyUNOtFJzgH1%2F8VGU1jHz%2Bv%2BaRmIs%2BFFHD3PxuWxxQ34M01DGJeLK%2BF%2BVXeSD67MFRH8R%2FZShsf%2BRlwLRoUJ1m99PJjul%2BqTPPlKiJJyO1cluDvhG9nEBGYze1HigteJC9WDPSNQFwbyZZHuez%2FoQhzH1LKsaj7joNht01lboql44740QfRlP7zUj5tiK7M75xWd8TAV7UbfNaNCNRmt2yZp4KVp3oWwqnMv%2BILuAavoa39IATtKD%2BEJbmvcbN6o9OnhnOrdDplqhp7sWi%2FmlTP5XbMGRemV6zNNEiggiIkHe9C3sEVi0wsY9uJVLb7N%2BWodkkvCWFZ8vOzCb857DBjqkAcTyp6KPg0dA58eVxxFb9NPbT6EMy6Zj1BGiEiUWMyeD2o%2B2QXP5iHdF2lqT0ifGym3YUL%2BgJ2P74fc3TqL%2FDuhbY1yXxZSU5SykCkwr0Pk5X3h6dlzD6ckNO%2B0CHpzQNQ%2BXIPRibjuQ%2FoM0oM2IKSFPfx9pmD6gmNt8isau1JVBN%2FCs50Z%2BM5ou153ZPNmH9b1n8YUiELJJBcWhKCho8avoXPwT&X-Amz-Signature=1417a877b6ddbab5dab69b411a0b345244d8ececcc2fac830f50a19f77c2f0d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XGTRKWJ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T121627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDfrKuQTnAxWcrIeoKk%2BHSChifkHPZRD8zEERwpUzzxcAIhAJrfdOa98Sb%2BpfmUWuk6n9mAjZc8SNUVTH%2BrJQ25Fw95Kv8DCCwQABoMNjM3NDIzMTgzODA1Igxu8bh7EaEsSu747cMq3APCXKFAq70daagCHFF4eO4G5w4c1GtLJBwZAHcsBZrCMDV0QzmDTE14DWh2iYhzfGHo4rZhoi4vcJ7GxSiVXP%2Bg4pZw2F4FvBZEVSnY8lC%2BDKiHVGf6Fs%2BGBn3wvVz6urwniz8DNWrEKdP1A2nAaSGoBCl0tNBScNrUq9T6UCx%2BTEAWA68rlbbz0TWY9dWm9CNsNX%2FBfA1ic8tAEbFNhiEg4WNKdX13vUywqGKPdu134NI1%2FJvKAyYYI3rt7Ecd%2BR5GkVXi2%2FX6yL6h7KE%2BVyriS4B94bysX6M10QxLocT22sjFyUNOtFJzgH1%2F8VGU1jHz%2Bv%2BaRmIs%2BFFHD3PxuWxxQ34M01DGJeLK%2BF%2BVXeSD67MFRH8R%2FZShsf%2BRlwLRoUJ1m99PJjul%2BqTPPlKiJJyO1cluDvhG9nEBGYze1HigteJC9WDPSNQFwbyZZHuez%2FoQhzH1LKsaj7joNht01lboql44740QfRlP7zUj5tiK7M75xWd8TAV7UbfNaNCNRmt2yZp4KVp3oWwqnMv%2BILuAavoa39IATtKD%2BEJbmvcbN6o9OnhnOrdDplqhp7sWi%2FmlTP5XbMGRemV6zNNEiggiIkHe9C3sEVi0wsY9uJVLb7N%2BWodkkvCWFZ8vOzCb857DBjqkAcTyp6KPg0dA58eVxxFb9NPbT6EMy6Zj1BGiEiUWMyeD2o%2B2QXP5iHdF2lqT0ifGym3YUL%2BgJ2P74fc3TqL%2FDuhbY1yXxZSU5SykCkwr0Pk5X3h6dlzD6ckNO%2B0CHpzQNQ%2BXIPRibjuQ%2FoM0oM2IKSFPfx9pmD6gmNt8isau1JVBN%2FCs50Z%2BM5ou153ZPNmH9b1n8YUiELJJBcWhKCho8avoXPwT&X-Amz-Signature=48a9638a058c41ef1be126ea2413729bc016d715ea5a39a022fb713acf52577a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XGTRKWJ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T121627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDfrKuQTnAxWcrIeoKk%2BHSChifkHPZRD8zEERwpUzzxcAIhAJrfdOa98Sb%2BpfmUWuk6n9mAjZc8SNUVTH%2BrJQ25Fw95Kv8DCCwQABoMNjM3NDIzMTgzODA1Igxu8bh7EaEsSu747cMq3APCXKFAq70daagCHFF4eO4G5w4c1GtLJBwZAHcsBZrCMDV0QzmDTE14DWh2iYhzfGHo4rZhoi4vcJ7GxSiVXP%2Bg4pZw2F4FvBZEVSnY8lC%2BDKiHVGf6Fs%2BGBn3wvVz6urwniz8DNWrEKdP1A2nAaSGoBCl0tNBScNrUq9T6UCx%2BTEAWA68rlbbz0TWY9dWm9CNsNX%2FBfA1ic8tAEbFNhiEg4WNKdX13vUywqGKPdu134NI1%2FJvKAyYYI3rt7Ecd%2BR5GkVXi2%2FX6yL6h7KE%2BVyriS4B94bysX6M10QxLocT22sjFyUNOtFJzgH1%2F8VGU1jHz%2Bv%2BaRmIs%2BFFHD3PxuWxxQ34M01DGJeLK%2BF%2BVXeSD67MFRH8R%2FZShsf%2BRlwLRoUJ1m99PJjul%2BqTPPlKiJJyO1cluDvhG9nEBGYze1HigteJC9WDPSNQFwbyZZHuez%2FoQhzH1LKsaj7joNht01lboql44740QfRlP7zUj5tiK7M75xWd8TAV7UbfNaNCNRmt2yZp4KVp3oWwqnMv%2BILuAavoa39IATtKD%2BEJbmvcbN6o9OnhnOrdDplqhp7sWi%2FmlTP5XbMGRemV6zNNEiggiIkHe9C3sEVi0wsY9uJVLb7N%2BWodkkvCWFZ8vOzCb857DBjqkAcTyp6KPg0dA58eVxxFb9NPbT6EMy6Zj1BGiEiUWMyeD2o%2B2QXP5iHdF2lqT0ifGym3YUL%2BgJ2P74fc3TqL%2FDuhbY1yXxZSU5SykCkwr0Pk5X3h6dlzD6ckNO%2B0CHpzQNQ%2BXIPRibjuQ%2FoM0oM2IKSFPfx9pmD6gmNt8isau1JVBN%2FCs50Z%2BM5ou153ZPNmH9b1n8YUiELJJBcWhKCho8avoXPwT&X-Amz-Signature=0c7756133763b90324a5403ef9e76fc550be32234ccd42776cc725d691c507fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XGTRKWJ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T121627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDfrKuQTnAxWcrIeoKk%2BHSChifkHPZRD8zEERwpUzzxcAIhAJrfdOa98Sb%2BpfmUWuk6n9mAjZc8SNUVTH%2BrJQ25Fw95Kv8DCCwQABoMNjM3NDIzMTgzODA1Igxu8bh7EaEsSu747cMq3APCXKFAq70daagCHFF4eO4G5w4c1GtLJBwZAHcsBZrCMDV0QzmDTE14DWh2iYhzfGHo4rZhoi4vcJ7GxSiVXP%2Bg4pZw2F4FvBZEVSnY8lC%2BDKiHVGf6Fs%2BGBn3wvVz6urwniz8DNWrEKdP1A2nAaSGoBCl0tNBScNrUq9T6UCx%2BTEAWA68rlbbz0TWY9dWm9CNsNX%2FBfA1ic8tAEbFNhiEg4WNKdX13vUywqGKPdu134NI1%2FJvKAyYYI3rt7Ecd%2BR5GkVXi2%2FX6yL6h7KE%2BVyriS4B94bysX6M10QxLocT22sjFyUNOtFJzgH1%2F8VGU1jHz%2Bv%2BaRmIs%2BFFHD3PxuWxxQ34M01DGJeLK%2BF%2BVXeSD67MFRH8R%2FZShsf%2BRlwLRoUJ1m99PJjul%2BqTPPlKiJJyO1cluDvhG9nEBGYze1HigteJC9WDPSNQFwbyZZHuez%2FoQhzH1LKsaj7joNht01lboql44740QfRlP7zUj5tiK7M75xWd8TAV7UbfNaNCNRmt2yZp4KVp3oWwqnMv%2BILuAavoa39IATtKD%2BEJbmvcbN6o9OnhnOrdDplqhp7sWi%2FmlTP5XbMGRemV6zNNEiggiIkHe9C3sEVi0wsY9uJVLb7N%2BWodkkvCWFZ8vOzCb857DBjqkAcTyp6KPg0dA58eVxxFb9NPbT6EMy6Zj1BGiEiUWMyeD2o%2B2QXP5iHdF2lqT0ifGym3YUL%2BgJ2P74fc3TqL%2FDuhbY1yXxZSU5SykCkwr0Pk5X3h6dlzD6ckNO%2B0CHpzQNQ%2BXIPRibjuQ%2FoM0oM2IKSFPfx9pmD6gmNt8isau1JVBN%2FCs50Z%2BM5ou153ZPNmH9b1n8YUiELJJBcWhKCho8avoXPwT&X-Amz-Signature=77d7ef5bea67446eed2f7148b00fd118f639d6c6369b4ac7bd4892527c16f6bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XGTRKWJ%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T121627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQDfrKuQTnAxWcrIeoKk%2BHSChifkHPZRD8zEERwpUzzxcAIhAJrfdOa98Sb%2BpfmUWuk6n9mAjZc8SNUVTH%2BrJQ25Fw95Kv8DCCwQABoMNjM3NDIzMTgzODA1Igxu8bh7EaEsSu747cMq3APCXKFAq70daagCHFF4eO4G5w4c1GtLJBwZAHcsBZrCMDV0QzmDTE14DWh2iYhzfGHo4rZhoi4vcJ7GxSiVXP%2Bg4pZw2F4FvBZEVSnY8lC%2BDKiHVGf6Fs%2BGBn3wvVz6urwniz8DNWrEKdP1A2nAaSGoBCl0tNBScNrUq9T6UCx%2BTEAWA68rlbbz0TWY9dWm9CNsNX%2FBfA1ic8tAEbFNhiEg4WNKdX13vUywqGKPdu134NI1%2FJvKAyYYI3rt7Ecd%2BR5GkVXi2%2FX6yL6h7KE%2BVyriS4B94bysX6M10QxLocT22sjFyUNOtFJzgH1%2F8VGU1jHz%2Bv%2BaRmIs%2BFFHD3PxuWxxQ34M01DGJeLK%2BF%2BVXeSD67MFRH8R%2FZShsf%2BRlwLRoUJ1m99PJjul%2BqTPPlKiJJyO1cluDvhG9nEBGYze1HigteJC9WDPSNQFwbyZZHuez%2FoQhzH1LKsaj7joNht01lboql44740QfRlP7zUj5tiK7M75xWd8TAV7UbfNaNCNRmt2yZp4KVp3oWwqnMv%2BILuAavoa39IATtKD%2BEJbmvcbN6o9OnhnOrdDplqhp7sWi%2FmlTP5XbMGRemV6zNNEiggiIkHe9C3sEVi0wsY9uJVLb7N%2BWodkkvCWFZ8vOzCb857DBjqkAcTyp6KPg0dA58eVxxFb9NPbT6EMy6Zj1BGiEiUWMyeD2o%2B2QXP5iHdF2lqT0ifGym3YUL%2BgJ2P74fc3TqL%2FDuhbY1yXxZSU5SykCkwr0Pk5X3h6dlzD6ckNO%2B0CHpzQNQ%2BXIPRibjuQ%2FoM0oM2IKSFPfx9pmD6gmNt8isau1JVBN%2FCs50Z%2BM5ou153ZPNmH9b1n8YUiELJJBcWhKCho8avoXPwT&X-Amz-Signature=44c52d3972a223b0690eb98bb6e85849c268e91c983b5a02781ad997968dea86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
