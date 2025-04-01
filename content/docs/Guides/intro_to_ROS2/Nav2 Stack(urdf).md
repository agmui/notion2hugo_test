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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBNCCQI5%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCICZd5k697fepgUL5xh91lvdcyJby20XvR9MxDXZ%2FkXLwAiEA%2BNNTwUhcqwgSfthSPUMTvN7FbA9hL9XcaPRcphiK1x8qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIHthQYMt74YjBFh2ircA1qnS%2Fvp4xwJQrD79Wt0Pcg7Z9OsbIazvoutUhVB79DFE5kt8hnGrvuJ7GfaPDW4HsRvssDza8fQjq5EIT%2F8sjfQcuGwDU%2FQ%2BogrpVD3e9IXr5FImc0ZC5z3uM4qrUSQNzC43lSGb8k4aF8oaiyBWUQpFHfU5ZQ0NuzlNfte5AResWSGkMSjzyzqsRtA3N8LubKapHjl7fYg63U4laeeVpIrPpeHO2VriXfyQnZk8AnhL00Tn39abjwO7GKbe7N4o7y8ArNzI1E39bHk6kAg%2BDKSw35%2BSwHthBJxGLk%2FGCRsgHrqvyTei8yJJ4xQ8dW0HIGRmzbkG0qCjuaZqkiRhArW2SRbWlAGcN9eRtRRJN%2F%2FkcLZbEHWWyqIjPWSWhRKOatpFthQrdpjO3TRGqBT1AfEMoZKaNe0Na4qsyTdvomsfmSAliCrinsDxljQmrmLZLB%2BMWSryxcGxPXSGxTsy69%2BrLuLnKMvPkxrPPnJ9gqGygY%2BJAyCLq2FsyX2R%2FPULpAs8bQc%2FUJ2jZX2pUykz5UZ%2B9TDdRw3q253vM83C4cR50dCFuZtoGtXwT3Dyzwm3C%2BOfasTDtetpLxvUcAVEocmnJ2%2B%2B6V46HT%2FtKiXhBTTh6pOiKsanl%2B9jaQ9MOKDr78GOqUBZUiO1xAsNCOME9A4tAp1JdXavEBf1w7XWVnGjG2Iy8tT%2B5%2Bl1hJrX6SgOfsIM1EThAMWC9clujEgRfA4vf2%2FlrIzFYd85ZJwqHIlqdrRvGxrst%2Fa63xij%2FEuX1myPhc1dRwT7DpMhsp%2FOIfOHkLLOIO6SuqXQJ0Bfj0Bos4ID0HZ1fEwgqHGImCnGxhLqPVAwQJifElOwpsYWEI9qiqHvAR%2BOtNq&X-Amz-Signature=870a24170bba20dea127e350def1328a919f7a37801729da0b94f4e78f0764eb&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBNCCQI5%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCICZd5k697fepgUL5xh91lvdcyJby20XvR9MxDXZ%2FkXLwAiEA%2BNNTwUhcqwgSfthSPUMTvN7FbA9hL9XcaPRcphiK1x8qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIHthQYMt74YjBFh2ircA1qnS%2Fvp4xwJQrD79Wt0Pcg7Z9OsbIazvoutUhVB79DFE5kt8hnGrvuJ7GfaPDW4HsRvssDza8fQjq5EIT%2F8sjfQcuGwDU%2FQ%2BogrpVD3e9IXr5FImc0ZC5z3uM4qrUSQNzC43lSGb8k4aF8oaiyBWUQpFHfU5ZQ0NuzlNfte5AResWSGkMSjzyzqsRtA3N8LubKapHjl7fYg63U4laeeVpIrPpeHO2VriXfyQnZk8AnhL00Tn39abjwO7GKbe7N4o7y8ArNzI1E39bHk6kAg%2BDKSw35%2BSwHthBJxGLk%2FGCRsgHrqvyTei8yJJ4xQ8dW0HIGRmzbkG0qCjuaZqkiRhArW2SRbWlAGcN9eRtRRJN%2F%2FkcLZbEHWWyqIjPWSWhRKOatpFthQrdpjO3TRGqBT1AfEMoZKaNe0Na4qsyTdvomsfmSAliCrinsDxljQmrmLZLB%2BMWSryxcGxPXSGxTsy69%2BrLuLnKMvPkxrPPnJ9gqGygY%2BJAyCLq2FsyX2R%2FPULpAs8bQc%2FUJ2jZX2pUykz5UZ%2B9TDdRw3q253vM83C4cR50dCFuZtoGtXwT3Dyzwm3C%2BOfasTDtetpLxvUcAVEocmnJ2%2B%2B6V46HT%2FtKiXhBTTh6pOiKsanl%2B9jaQ9MOKDr78GOqUBZUiO1xAsNCOME9A4tAp1JdXavEBf1w7XWVnGjG2Iy8tT%2B5%2Bl1hJrX6SgOfsIM1EThAMWC9clujEgRfA4vf2%2FlrIzFYd85ZJwqHIlqdrRvGxrst%2Fa63xij%2FEuX1myPhc1dRwT7DpMhsp%2FOIfOHkLLOIO6SuqXQJ0Bfj0Bos4ID0HZ1fEwgqHGImCnGxhLqPVAwQJifElOwpsYWEI9qiqHvAR%2BOtNq&X-Amz-Signature=9b2fee0eb6726beafce25d99d058d9c2e737829c1a3f3e3c126474b9835b57b7&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBNCCQI5%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCICZd5k697fepgUL5xh91lvdcyJby20XvR9MxDXZ%2FkXLwAiEA%2BNNTwUhcqwgSfthSPUMTvN7FbA9hL9XcaPRcphiK1x8qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIHthQYMt74YjBFh2ircA1qnS%2Fvp4xwJQrD79Wt0Pcg7Z9OsbIazvoutUhVB79DFE5kt8hnGrvuJ7GfaPDW4HsRvssDza8fQjq5EIT%2F8sjfQcuGwDU%2FQ%2BogrpVD3e9IXr5FImc0ZC5z3uM4qrUSQNzC43lSGb8k4aF8oaiyBWUQpFHfU5ZQ0NuzlNfte5AResWSGkMSjzyzqsRtA3N8LubKapHjl7fYg63U4laeeVpIrPpeHO2VriXfyQnZk8AnhL00Tn39abjwO7GKbe7N4o7y8ArNzI1E39bHk6kAg%2BDKSw35%2BSwHthBJxGLk%2FGCRsgHrqvyTei8yJJ4xQ8dW0HIGRmzbkG0qCjuaZqkiRhArW2SRbWlAGcN9eRtRRJN%2F%2FkcLZbEHWWyqIjPWSWhRKOatpFthQrdpjO3TRGqBT1AfEMoZKaNe0Na4qsyTdvomsfmSAliCrinsDxljQmrmLZLB%2BMWSryxcGxPXSGxTsy69%2BrLuLnKMvPkxrPPnJ9gqGygY%2BJAyCLq2FsyX2R%2FPULpAs8bQc%2FUJ2jZX2pUykz5UZ%2B9TDdRw3q253vM83C4cR50dCFuZtoGtXwT3Dyzwm3C%2BOfasTDtetpLxvUcAVEocmnJ2%2B%2B6V46HT%2FtKiXhBTTh6pOiKsanl%2B9jaQ9MOKDr78GOqUBZUiO1xAsNCOME9A4tAp1JdXavEBf1w7XWVnGjG2Iy8tT%2B5%2Bl1hJrX6SgOfsIM1EThAMWC9clujEgRfA4vf2%2FlrIzFYd85ZJwqHIlqdrRvGxrst%2Fa63xij%2FEuX1myPhc1dRwT7DpMhsp%2FOIfOHkLLOIO6SuqXQJ0Bfj0Bos4ID0HZ1fEwgqHGImCnGxhLqPVAwQJifElOwpsYWEI9qiqHvAR%2BOtNq&X-Amz-Signature=ff46feed9c3bbe35bf674922bb2bfd6ad1461379228ca6283c3a38e6ae5ff33e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBNCCQI5%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCICZd5k697fepgUL5xh91lvdcyJby20XvR9MxDXZ%2FkXLwAiEA%2BNNTwUhcqwgSfthSPUMTvN7FbA9hL9XcaPRcphiK1x8qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIHthQYMt74YjBFh2ircA1qnS%2Fvp4xwJQrD79Wt0Pcg7Z9OsbIazvoutUhVB79DFE5kt8hnGrvuJ7GfaPDW4HsRvssDza8fQjq5EIT%2F8sjfQcuGwDU%2FQ%2BogrpVD3e9IXr5FImc0ZC5z3uM4qrUSQNzC43lSGb8k4aF8oaiyBWUQpFHfU5ZQ0NuzlNfte5AResWSGkMSjzyzqsRtA3N8LubKapHjl7fYg63U4laeeVpIrPpeHO2VriXfyQnZk8AnhL00Tn39abjwO7GKbe7N4o7y8ArNzI1E39bHk6kAg%2BDKSw35%2BSwHthBJxGLk%2FGCRsgHrqvyTei8yJJ4xQ8dW0HIGRmzbkG0qCjuaZqkiRhArW2SRbWlAGcN9eRtRRJN%2F%2FkcLZbEHWWyqIjPWSWhRKOatpFthQrdpjO3TRGqBT1AfEMoZKaNe0Na4qsyTdvomsfmSAliCrinsDxljQmrmLZLB%2BMWSryxcGxPXSGxTsy69%2BrLuLnKMvPkxrPPnJ9gqGygY%2BJAyCLq2FsyX2R%2FPULpAs8bQc%2FUJ2jZX2pUykz5UZ%2B9TDdRw3q253vM83C4cR50dCFuZtoGtXwT3Dyzwm3C%2BOfasTDtetpLxvUcAVEocmnJ2%2B%2B6V46HT%2FtKiXhBTTh6pOiKsanl%2B9jaQ9MOKDr78GOqUBZUiO1xAsNCOME9A4tAp1JdXavEBf1w7XWVnGjG2Iy8tT%2B5%2Bl1hJrX6SgOfsIM1EThAMWC9clujEgRfA4vf2%2FlrIzFYd85ZJwqHIlqdrRvGxrst%2Fa63xij%2FEuX1myPhc1dRwT7DpMhsp%2FOIfOHkLLOIO6SuqXQJ0Bfj0Bos4ID0HZ1fEwgqHGImCnGxhLqPVAwQJifElOwpsYWEI9qiqHvAR%2BOtNq&X-Amz-Signature=5f26f90a914ca11d04d45cb70803107fcb42a4c401f77aa3e5ef5d2b2f4f13c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBNCCQI5%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCICZd5k697fepgUL5xh91lvdcyJby20XvR9MxDXZ%2FkXLwAiEA%2BNNTwUhcqwgSfthSPUMTvN7FbA9hL9XcaPRcphiK1x8qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIHthQYMt74YjBFh2ircA1qnS%2Fvp4xwJQrD79Wt0Pcg7Z9OsbIazvoutUhVB79DFE5kt8hnGrvuJ7GfaPDW4HsRvssDza8fQjq5EIT%2F8sjfQcuGwDU%2FQ%2BogrpVD3e9IXr5FImc0ZC5z3uM4qrUSQNzC43lSGb8k4aF8oaiyBWUQpFHfU5ZQ0NuzlNfte5AResWSGkMSjzyzqsRtA3N8LubKapHjl7fYg63U4laeeVpIrPpeHO2VriXfyQnZk8AnhL00Tn39abjwO7GKbe7N4o7y8ArNzI1E39bHk6kAg%2BDKSw35%2BSwHthBJxGLk%2FGCRsgHrqvyTei8yJJ4xQ8dW0HIGRmzbkG0qCjuaZqkiRhArW2SRbWlAGcN9eRtRRJN%2F%2FkcLZbEHWWyqIjPWSWhRKOatpFthQrdpjO3TRGqBT1AfEMoZKaNe0Na4qsyTdvomsfmSAliCrinsDxljQmrmLZLB%2BMWSryxcGxPXSGxTsy69%2BrLuLnKMvPkxrPPnJ9gqGygY%2BJAyCLq2FsyX2R%2FPULpAs8bQc%2FUJ2jZX2pUykz5UZ%2B9TDdRw3q253vM83C4cR50dCFuZtoGtXwT3Dyzwm3C%2BOfasTDtetpLxvUcAVEocmnJ2%2B%2B6V46HT%2FtKiXhBTTh6pOiKsanl%2B9jaQ9MOKDr78GOqUBZUiO1xAsNCOME9A4tAp1JdXavEBf1w7XWVnGjG2Iy8tT%2B5%2Bl1hJrX6SgOfsIM1EThAMWC9clujEgRfA4vf2%2FlrIzFYd85ZJwqHIlqdrRvGxrst%2Fa63xij%2FEuX1myPhc1dRwT7DpMhsp%2FOIfOHkLLOIO6SuqXQJ0Bfj0Bos4ID0HZ1fEwgqHGImCnGxhLqPVAwQJifElOwpsYWEI9qiqHvAR%2BOtNq&X-Amz-Signature=b702efe09c569b91b5e1460431b8700bb8e3ba2f6ee9d49415506963c7d847cd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBNCCQI5%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCICZd5k697fepgUL5xh91lvdcyJby20XvR9MxDXZ%2FkXLwAiEA%2BNNTwUhcqwgSfthSPUMTvN7FbA9hL9XcaPRcphiK1x8qiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIHthQYMt74YjBFh2ircA1qnS%2Fvp4xwJQrD79Wt0Pcg7Z9OsbIazvoutUhVB79DFE5kt8hnGrvuJ7GfaPDW4HsRvssDza8fQjq5EIT%2F8sjfQcuGwDU%2FQ%2BogrpVD3e9IXr5FImc0ZC5z3uM4qrUSQNzC43lSGb8k4aF8oaiyBWUQpFHfU5ZQ0NuzlNfte5AResWSGkMSjzyzqsRtA3N8LubKapHjl7fYg63U4laeeVpIrPpeHO2VriXfyQnZk8AnhL00Tn39abjwO7GKbe7N4o7y8ArNzI1E39bHk6kAg%2BDKSw35%2BSwHthBJxGLk%2FGCRsgHrqvyTei8yJJ4xQ8dW0HIGRmzbkG0qCjuaZqkiRhArW2SRbWlAGcN9eRtRRJN%2F%2FkcLZbEHWWyqIjPWSWhRKOatpFthQrdpjO3TRGqBT1AfEMoZKaNe0Na4qsyTdvomsfmSAliCrinsDxljQmrmLZLB%2BMWSryxcGxPXSGxTsy69%2BrLuLnKMvPkxrPPnJ9gqGygY%2BJAyCLq2FsyX2R%2FPULpAs8bQc%2FUJ2jZX2pUykz5UZ%2B9TDdRw3q253vM83C4cR50dCFuZtoGtXwT3Dyzwm3C%2BOfasTDtetpLxvUcAVEocmnJ2%2B%2B6V46HT%2FtKiXhBTTh6pOiKsanl%2B9jaQ9MOKDr78GOqUBZUiO1xAsNCOME9A4tAp1JdXavEBf1w7XWVnGjG2Iy8tT%2B5%2Bl1hJrX6SgOfsIM1EThAMWC9clujEgRfA4vf2%2FlrIzFYd85ZJwqHIlqdrRvGxrst%2Fa63xij%2FEuX1myPhc1dRwT7DpMhsp%2FOIfOHkLLOIO6SuqXQJ0Bfj0Bos4ID0HZ1fEwgqHGImCnGxhLqPVAwQJifElOwpsYWEI9qiqHvAR%2BOtNq&X-Amz-Signature=52a43c56acb138c10917b3cf9852014fbce1111b46cd9b7fdbdf951a9b6ef200&X-Amz-SignedHeaders=host&x-id=GetObject)
