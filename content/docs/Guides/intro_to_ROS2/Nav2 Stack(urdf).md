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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWIE4PW4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T071259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDjLI4aYWGN9YlsbnZJjIpNbN6jtK1thttE%2BaMHTWn7%2BQIgK3ekyxL%2BNm1qmk2LNP%2FdfQAbvcK5lKHQw1TiwOBsm%2FQq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDFerOCXPshqHZ4QlTyrcA%2FcF1jQ8ANi52ftgq2Mr%2F5m%2FwSNVzZdYZ1G5pNx%2Bnv4B78mi6TCxHQT7g0hYdx2BlXP%2FLT2vmynWjsDK63F5odncK3mP22XpP6BtFc6B4YarZ8Qn84v6VcH8%2F2IMEKia47qnW%2FtHuxvQFk3yvxn6b9p7l8O3DmVZ8P5RXSocApLQt5x8RhnU1U0bYWwCzu3sYThRxqI5lNI9R0Phi0q5olMrSc2WNwVo9hdOusH9lAauXjsA0EzCK6TIB%2FBZIzRxt8xn3RhyeKBAGfUzm405joX6MGLonE70Kve4e7TeiN9VRvZqXVRwADIG3uJMHGt2MAEKsJkhp5ehgjt7LtAP7bXLXYTblHRyjfjD2OsBStbkGptAGAdRF0zocROvkR3esI2fKBeRscDU7mRrw2jwg%2ByhInyck9sAI3PsjyWXDzteLrWpWUguahUaZFL%2BZY1Xs%2BUp7%2ByqPTXtcBzmkYmzxkudeDfUxmnrvIBrGQ24rZ%2BEDQDSI%2B%2BB%2FkFFBYLBhCsWECgLH9pEgXNVxHFJrx2oEKcaz9vkPs5ha6uxjqlvgn%2FAam2Qn8hAZBjG400d2limirnqWFlGbhNtkiIc1uM9n%2Fx9TLH8tFUIztXSGahlR51fHcm1FTOqlwgLJSkHMPmR3cMGOqUBv1g89Z1CkjSqkYC6d%2Fta8DpoORk%2FxhEH8MshMkMLvY62qJ0TTOh%2Fc5%2BLObxS9NIwmhCtqYzIoR5fU3MFed3MSwDQNu%2Fi2tocREXWVahxX45cdBgUvdChMlT44QUOhhSaR5LFqn9yHIiIT4%2B1wVyni%2FUyywP1DNmIeAI2b9XSQo0NxNYhG0kj6uHa%2BKWIUyNmkSM%2FNWDx7KBA1%2F5Waz2prZs9q%2BlG&X-Amz-Signature=fb7b617d3c25ff5d4d3a0660724d44ed0f56d5d620aad61c21c8061a650b6fa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWIE4PW4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T071300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDjLI4aYWGN9YlsbnZJjIpNbN6jtK1thttE%2BaMHTWn7%2BQIgK3ekyxL%2BNm1qmk2LNP%2FdfQAbvcK5lKHQw1TiwOBsm%2FQq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDFerOCXPshqHZ4QlTyrcA%2FcF1jQ8ANi52ftgq2Mr%2F5m%2FwSNVzZdYZ1G5pNx%2Bnv4B78mi6TCxHQT7g0hYdx2BlXP%2FLT2vmynWjsDK63F5odncK3mP22XpP6BtFc6B4YarZ8Qn84v6VcH8%2F2IMEKia47qnW%2FtHuxvQFk3yvxn6b9p7l8O3DmVZ8P5RXSocApLQt5x8RhnU1U0bYWwCzu3sYThRxqI5lNI9R0Phi0q5olMrSc2WNwVo9hdOusH9lAauXjsA0EzCK6TIB%2FBZIzRxt8xn3RhyeKBAGfUzm405joX6MGLonE70Kve4e7TeiN9VRvZqXVRwADIG3uJMHGt2MAEKsJkhp5ehgjt7LtAP7bXLXYTblHRyjfjD2OsBStbkGptAGAdRF0zocROvkR3esI2fKBeRscDU7mRrw2jwg%2ByhInyck9sAI3PsjyWXDzteLrWpWUguahUaZFL%2BZY1Xs%2BUp7%2ByqPTXtcBzmkYmzxkudeDfUxmnrvIBrGQ24rZ%2BEDQDSI%2B%2BB%2FkFFBYLBhCsWECgLH9pEgXNVxHFJrx2oEKcaz9vkPs5ha6uxjqlvgn%2FAam2Qn8hAZBjG400d2limirnqWFlGbhNtkiIc1uM9n%2Fx9TLH8tFUIztXSGahlR51fHcm1FTOqlwgLJSkHMPmR3cMGOqUBv1g89Z1CkjSqkYC6d%2Fta8DpoORk%2FxhEH8MshMkMLvY62qJ0TTOh%2Fc5%2BLObxS9NIwmhCtqYzIoR5fU3MFed3MSwDQNu%2Fi2tocREXWVahxX45cdBgUvdChMlT44QUOhhSaR5LFqn9yHIiIT4%2B1wVyni%2FUyywP1DNmIeAI2b9XSQo0NxNYhG0kj6uHa%2BKWIUyNmkSM%2FNWDx7KBA1%2F5Waz2prZs9q%2BlG&X-Amz-Signature=eda05369f261982f29e576b0bb89bc75f738eb645f7d4ccf1cdd1637c6832c1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWIE4PW4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T071259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDjLI4aYWGN9YlsbnZJjIpNbN6jtK1thttE%2BaMHTWn7%2BQIgK3ekyxL%2BNm1qmk2LNP%2FdfQAbvcK5lKHQw1TiwOBsm%2FQq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDFerOCXPshqHZ4QlTyrcA%2FcF1jQ8ANi52ftgq2Mr%2F5m%2FwSNVzZdYZ1G5pNx%2Bnv4B78mi6TCxHQT7g0hYdx2BlXP%2FLT2vmynWjsDK63F5odncK3mP22XpP6BtFc6B4YarZ8Qn84v6VcH8%2F2IMEKia47qnW%2FtHuxvQFk3yvxn6b9p7l8O3DmVZ8P5RXSocApLQt5x8RhnU1U0bYWwCzu3sYThRxqI5lNI9R0Phi0q5olMrSc2WNwVo9hdOusH9lAauXjsA0EzCK6TIB%2FBZIzRxt8xn3RhyeKBAGfUzm405joX6MGLonE70Kve4e7TeiN9VRvZqXVRwADIG3uJMHGt2MAEKsJkhp5ehgjt7LtAP7bXLXYTblHRyjfjD2OsBStbkGptAGAdRF0zocROvkR3esI2fKBeRscDU7mRrw2jwg%2ByhInyck9sAI3PsjyWXDzteLrWpWUguahUaZFL%2BZY1Xs%2BUp7%2ByqPTXtcBzmkYmzxkudeDfUxmnrvIBrGQ24rZ%2BEDQDSI%2B%2BB%2FkFFBYLBhCsWECgLH9pEgXNVxHFJrx2oEKcaz9vkPs5ha6uxjqlvgn%2FAam2Qn8hAZBjG400d2limirnqWFlGbhNtkiIc1uM9n%2Fx9TLH8tFUIztXSGahlR51fHcm1FTOqlwgLJSkHMPmR3cMGOqUBv1g89Z1CkjSqkYC6d%2Fta8DpoORk%2FxhEH8MshMkMLvY62qJ0TTOh%2Fc5%2BLObxS9NIwmhCtqYzIoR5fU3MFed3MSwDQNu%2Fi2tocREXWVahxX45cdBgUvdChMlT44QUOhhSaR5LFqn9yHIiIT4%2B1wVyni%2FUyywP1DNmIeAI2b9XSQo0NxNYhG0kj6uHa%2BKWIUyNmkSM%2FNWDx7KBA1%2F5Waz2prZs9q%2BlG&X-Amz-Signature=a4d6bd3344b20a6a9218d9e1999980f94035e1e36c688dc5693a9381e95010bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWIE4PW4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T071300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDjLI4aYWGN9YlsbnZJjIpNbN6jtK1thttE%2BaMHTWn7%2BQIgK3ekyxL%2BNm1qmk2LNP%2FdfQAbvcK5lKHQw1TiwOBsm%2FQq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDFerOCXPshqHZ4QlTyrcA%2FcF1jQ8ANi52ftgq2Mr%2F5m%2FwSNVzZdYZ1G5pNx%2Bnv4B78mi6TCxHQT7g0hYdx2BlXP%2FLT2vmynWjsDK63F5odncK3mP22XpP6BtFc6B4YarZ8Qn84v6VcH8%2F2IMEKia47qnW%2FtHuxvQFk3yvxn6b9p7l8O3DmVZ8P5RXSocApLQt5x8RhnU1U0bYWwCzu3sYThRxqI5lNI9R0Phi0q5olMrSc2WNwVo9hdOusH9lAauXjsA0EzCK6TIB%2FBZIzRxt8xn3RhyeKBAGfUzm405joX6MGLonE70Kve4e7TeiN9VRvZqXVRwADIG3uJMHGt2MAEKsJkhp5ehgjt7LtAP7bXLXYTblHRyjfjD2OsBStbkGptAGAdRF0zocROvkR3esI2fKBeRscDU7mRrw2jwg%2ByhInyck9sAI3PsjyWXDzteLrWpWUguahUaZFL%2BZY1Xs%2BUp7%2ByqPTXtcBzmkYmzxkudeDfUxmnrvIBrGQ24rZ%2BEDQDSI%2B%2BB%2FkFFBYLBhCsWECgLH9pEgXNVxHFJrx2oEKcaz9vkPs5ha6uxjqlvgn%2FAam2Qn8hAZBjG400d2limirnqWFlGbhNtkiIc1uM9n%2Fx9TLH8tFUIztXSGahlR51fHcm1FTOqlwgLJSkHMPmR3cMGOqUBv1g89Z1CkjSqkYC6d%2Fta8DpoORk%2FxhEH8MshMkMLvY62qJ0TTOh%2Fc5%2BLObxS9NIwmhCtqYzIoR5fU3MFed3MSwDQNu%2Fi2tocREXWVahxX45cdBgUvdChMlT44QUOhhSaR5LFqn9yHIiIT4%2B1wVyni%2FUyywP1DNmIeAI2b9XSQo0NxNYhG0kj6uHa%2BKWIUyNmkSM%2FNWDx7KBA1%2F5Waz2prZs9q%2BlG&X-Amz-Signature=f8e786f93fb1d668f5c366d139c5fb9edcbfc45f8165c511de74df0e5a19c534&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWIE4PW4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T071300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDjLI4aYWGN9YlsbnZJjIpNbN6jtK1thttE%2BaMHTWn7%2BQIgK3ekyxL%2BNm1qmk2LNP%2FdfQAbvcK5lKHQw1TiwOBsm%2FQq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDFerOCXPshqHZ4QlTyrcA%2FcF1jQ8ANi52ftgq2Mr%2F5m%2FwSNVzZdYZ1G5pNx%2Bnv4B78mi6TCxHQT7g0hYdx2BlXP%2FLT2vmynWjsDK63F5odncK3mP22XpP6BtFc6B4YarZ8Qn84v6VcH8%2F2IMEKia47qnW%2FtHuxvQFk3yvxn6b9p7l8O3DmVZ8P5RXSocApLQt5x8RhnU1U0bYWwCzu3sYThRxqI5lNI9R0Phi0q5olMrSc2WNwVo9hdOusH9lAauXjsA0EzCK6TIB%2FBZIzRxt8xn3RhyeKBAGfUzm405joX6MGLonE70Kve4e7TeiN9VRvZqXVRwADIG3uJMHGt2MAEKsJkhp5ehgjt7LtAP7bXLXYTblHRyjfjD2OsBStbkGptAGAdRF0zocROvkR3esI2fKBeRscDU7mRrw2jwg%2ByhInyck9sAI3PsjyWXDzteLrWpWUguahUaZFL%2BZY1Xs%2BUp7%2ByqPTXtcBzmkYmzxkudeDfUxmnrvIBrGQ24rZ%2BEDQDSI%2B%2BB%2FkFFBYLBhCsWECgLH9pEgXNVxHFJrx2oEKcaz9vkPs5ha6uxjqlvgn%2FAam2Qn8hAZBjG400d2limirnqWFlGbhNtkiIc1uM9n%2Fx9TLH8tFUIztXSGahlR51fHcm1FTOqlwgLJSkHMPmR3cMGOqUBv1g89Z1CkjSqkYC6d%2Fta8DpoORk%2FxhEH8MshMkMLvY62qJ0TTOh%2Fc5%2BLObxS9NIwmhCtqYzIoR5fU3MFed3MSwDQNu%2Fi2tocREXWVahxX45cdBgUvdChMlT44QUOhhSaR5LFqn9yHIiIT4%2B1wVyni%2FUyywP1DNmIeAI2b9XSQo0NxNYhG0kj6uHa%2BKWIUyNmkSM%2FNWDx7KBA1%2F5Waz2prZs9q%2BlG&X-Amz-Signature=fe04c26bbd97fc2fc7a6379446559b382c1c66aeeeba4edca3a57295944daa78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWIE4PW4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T071300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDjLI4aYWGN9YlsbnZJjIpNbN6jtK1thttE%2BaMHTWn7%2BQIgK3ekyxL%2BNm1qmk2LNP%2FdfQAbvcK5lKHQw1TiwOBsm%2FQq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDFerOCXPshqHZ4QlTyrcA%2FcF1jQ8ANi52ftgq2Mr%2F5m%2FwSNVzZdYZ1G5pNx%2Bnv4B78mi6TCxHQT7g0hYdx2BlXP%2FLT2vmynWjsDK63F5odncK3mP22XpP6BtFc6B4YarZ8Qn84v6VcH8%2F2IMEKia47qnW%2FtHuxvQFk3yvxn6b9p7l8O3DmVZ8P5RXSocApLQt5x8RhnU1U0bYWwCzu3sYThRxqI5lNI9R0Phi0q5olMrSc2WNwVo9hdOusH9lAauXjsA0EzCK6TIB%2FBZIzRxt8xn3RhyeKBAGfUzm405joX6MGLonE70Kve4e7TeiN9VRvZqXVRwADIG3uJMHGt2MAEKsJkhp5ehgjt7LtAP7bXLXYTblHRyjfjD2OsBStbkGptAGAdRF0zocROvkR3esI2fKBeRscDU7mRrw2jwg%2ByhInyck9sAI3PsjyWXDzteLrWpWUguahUaZFL%2BZY1Xs%2BUp7%2ByqPTXtcBzmkYmzxkudeDfUxmnrvIBrGQ24rZ%2BEDQDSI%2B%2BB%2FkFFBYLBhCsWECgLH9pEgXNVxHFJrx2oEKcaz9vkPs5ha6uxjqlvgn%2FAam2Qn8hAZBjG400d2limirnqWFlGbhNtkiIc1uM9n%2Fx9TLH8tFUIztXSGahlR51fHcm1FTOqlwgLJSkHMPmR3cMGOqUBv1g89Z1CkjSqkYC6d%2Fta8DpoORk%2FxhEH8MshMkMLvY62qJ0TTOh%2Fc5%2BLObxS9NIwmhCtqYzIoR5fU3MFed3MSwDQNu%2Fi2tocREXWVahxX45cdBgUvdChMlT44QUOhhSaR5LFqn9yHIiIT4%2B1wVyni%2FUyywP1DNmIeAI2b9XSQo0NxNYhG0kj6uHa%2BKWIUyNmkSM%2FNWDx7KBA1%2F5Waz2prZs9q%2BlG&X-Amz-Signature=452321d4ae2eda9bb29dfdae8773df3aed5dc84d48f96e651aba0d7003fb2f75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
