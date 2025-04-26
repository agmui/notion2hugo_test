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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USNKT4QN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T003910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgcwWh7gmYjMMDZuvVMAJw1lBX%2Fo4Mj3rG8IIK9227ZAIgFf79efARJsHn899TWpujemX%2FtE3dyrJ3tEk7Ng0qMS0q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDLwo3VK7p%2FtZD7CF%2FyrcA2C67zPR34qzFEKGPpYPPC77MjC0%2BfEd8AhMwrKWym2u4XeJFpHGqxJTKnHn9gTA1FMVkJ4VV39xbKw26GCdLiT%2BB2S40OPfr0wHIR%2Bl7tScDZq1f6%2BlZcuIch%2F58sVrIc8jIorZb7J6AkZKBdwBK%2FFGyjVhBl%2Fcb%2BRV34LBlS%2BqtHWqwn%2Fhml7N9MxLdCxFohvQioF94CONve%2FlEMxt1%2FwJSfwLrcHiJDvFw%2FN0anUxjCWtVAWULj%2FvunzHx7TrxQkz9QoBF05R9s2k0fknoR%2FI0Fpy5Ew2yHQ91TBdcnmj32xZfl5Dw4oFy6KbOK0B5Tvww5f5jAvBUt5%2Fe49%2BrNvpPshRZrkgQNo38YiAWJ1aa8rRMGkRUNEjZOCT69gnQotHimOmFwwd1nHQvPxMVPerDViVgLoDCw5XYXzP7VbGk1g2MjxI%2BgMHUaW0uqbCJu9eK6dBVgQwBMocmLwzyPq8jPe0Em2rYNQBvzJa5KTovs9MapUK2gnD%2BbrBlXRdN%2BluHQdEesGxjKt%2BTpjiOPsgyIqi8fYs4GAf%2BE6L0NtunE%2FfhmWs6wGvqpwwrH0mGpOMkYWRtXn1TM0XpugoNnubLvNYMBm%2FyS4nfZEbxuNaa0OOJxho9tvzBw3%2FMKG8sMAGOqUBntXlrBVv6ud4a%2FugK3G%2F1Q90Xz7dZxnhwOAHT9BJvXmcS3Tg3SPcr75luB3BlEEQuOAeqiwe36W8EtM9Ob5LLy2xAeTwo%2FFONfn0Y3t6TgQvyFXutw0htWN6eV68dGBg4bi9I5aBh6ERGPYLybR%2BxZZJojrLO1JnU3xx8QyI1kiwREtpJ1Gwhi%2BRTV9CBhkNNu21iWk5CsImmayd2mMBI4T82UuA&X-Amz-Signature=10b0cd95916f647ca3c61e578faf0c3433002aae5727f1026a61a3df9ebd3297&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USNKT4QN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T003910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgcwWh7gmYjMMDZuvVMAJw1lBX%2Fo4Mj3rG8IIK9227ZAIgFf79efARJsHn899TWpujemX%2FtE3dyrJ3tEk7Ng0qMS0q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDLwo3VK7p%2FtZD7CF%2FyrcA2C67zPR34qzFEKGPpYPPC77MjC0%2BfEd8AhMwrKWym2u4XeJFpHGqxJTKnHn9gTA1FMVkJ4VV39xbKw26GCdLiT%2BB2S40OPfr0wHIR%2Bl7tScDZq1f6%2BlZcuIch%2F58sVrIc8jIorZb7J6AkZKBdwBK%2FFGyjVhBl%2Fcb%2BRV34LBlS%2BqtHWqwn%2Fhml7N9MxLdCxFohvQioF94CONve%2FlEMxt1%2FwJSfwLrcHiJDvFw%2FN0anUxjCWtVAWULj%2FvunzHx7TrxQkz9QoBF05R9s2k0fknoR%2FI0Fpy5Ew2yHQ91TBdcnmj32xZfl5Dw4oFy6KbOK0B5Tvww5f5jAvBUt5%2Fe49%2BrNvpPshRZrkgQNo38YiAWJ1aa8rRMGkRUNEjZOCT69gnQotHimOmFwwd1nHQvPxMVPerDViVgLoDCw5XYXzP7VbGk1g2MjxI%2BgMHUaW0uqbCJu9eK6dBVgQwBMocmLwzyPq8jPe0Em2rYNQBvzJa5KTovs9MapUK2gnD%2BbrBlXRdN%2BluHQdEesGxjKt%2BTpjiOPsgyIqi8fYs4GAf%2BE6L0NtunE%2FfhmWs6wGvqpwwrH0mGpOMkYWRtXn1TM0XpugoNnubLvNYMBm%2FyS4nfZEbxuNaa0OOJxho9tvzBw3%2FMKG8sMAGOqUBntXlrBVv6ud4a%2FugK3G%2F1Q90Xz7dZxnhwOAHT9BJvXmcS3Tg3SPcr75luB3BlEEQuOAeqiwe36W8EtM9Ob5LLy2xAeTwo%2FFONfn0Y3t6TgQvyFXutw0htWN6eV68dGBg4bi9I5aBh6ERGPYLybR%2BxZZJojrLO1JnU3xx8QyI1kiwREtpJ1Gwhi%2BRTV9CBhkNNu21iWk5CsImmayd2mMBI4T82UuA&X-Amz-Signature=57842893fc68940d0642dd49a31083a9e627713fefa6e035a8b64d6c07970b02&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USNKT4QN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T003910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgcwWh7gmYjMMDZuvVMAJw1lBX%2Fo4Mj3rG8IIK9227ZAIgFf79efARJsHn899TWpujemX%2FtE3dyrJ3tEk7Ng0qMS0q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDLwo3VK7p%2FtZD7CF%2FyrcA2C67zPR34qzFEKGPpYPPC77MjC0%2BfEd8AhMwrKWym2u4XeJFpHGqxJTKnHn9gTA1FMVkJ4VV39xbKw26GCdLiT%2BB2S40OPfr0wHIR%2Bl7tScDZq1f6%2BlZcuIch%2F58sVrIc8jIorZb7J6AkZKBdwBK%2FFGyjVhBl%2Fcb%2BRV34LBlS%2BqtHWqwn%2Fhml7N9MxLdCxFohvQioF94CONve%2FlEMxt1%2FwJSfwLrcHiJDvFw%2FN0anUxjCWtVAWULj%2FvunzHx7TrxQkz9QoBF05R9s2k0fknoR%2FI0Fpy5Ew2yHQ91TBdcnmj32xZfl5Dw4oFy6KbOK0B5Tvww5f5jAvBUt5%2Fe49%2BrNvpPshRZrkgQNo38YiAWJ1aa8rRMGkRUNEjZOCT69gnQotHimOmFwwd1nHQvPxMVPerDViVgLoDCw5XYXzP7VbGk1g2MjxI%2BgMHUaW0uqbCJu9eK6dBVgQwBMocmLwzyPq8jPe0Em2rYNQBvzJa5KTovs9MapUK2gnD%2BbrBlXRdN%2BluHQdEesGxjKt%2BTpjiOPsgyIqi8fYs4GAf%2BE6L0NtunE%2FfhmWs6wGvqpwwrH0mGpOMkYWRtXn1TM0XpugoNnubLvNYMBm%2FyS4nfZEbxuNaa0OOJxho9tvzBw3%2FMKG8sMAGOqUBntXlrBVv6ud4a%2FugK3G%2F1Q90Xz7dZxnhwOAHT9BJvXmcS3Tg3SPcr75luB3BlEEQuOAeqiwe36W8EtM9Ob5LLy2xAeTwo%2FFONfn0Y3t6TgQvyFXutw0htWN6eV68dGBg4bi9I5aBh6ERGPYLybR%2BxZZJojrLO1JnU3xx8QyI1kiwREtpJ1Gwhi%2BRTV9CBhkNNu21iWk5CsImmayd2mMBI4T82UuA&X-Amz-Signature=84abb8adfa163eca15edccb89a0c5db2d7152400d232a57d3444f63e2692b782&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USNKT4QN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T003910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgcwWh7gmYjMMDZuvVMAJw1lBX%2Fo4Mj3rG8IIK9227ZAIgFf79efARJsHn899TWpujemX%2FtE3dyrJ3tEk7Ng0qMS0q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDLwo3VK7p%2FtZD7CF%2FyrcA2C67zPR34qzFEKGPpYPPC77MjC0%2BfEd8AhMwrKWym2u4XeJFpHGqxJTKnHn9gTA1FMVkJ4VV39xbKw26GCdLiT%2BB2S40OPfr0wHIR%2Bl7tScDZq1f6%2BlZcuIch%2F58sVrIc8jIorZb7J6AkZKBdwBK%2FFGyjVhBl%2Fcb%2BRV34LBlS%2BqtHWqwn%2Fhml7N9MxLdCxFohvQioF94CONve%2FlEMxt1%2FwJSfwLrcHiJDvFw%2FN0anUxjCWtVAWULj%2FvunzHx7TrxQkz9QoBF05R9s2k0fknoR%2FI0Fpy5Ew2yHQ91TBdcnmj32xZfl5Dw4oFy6KbOK0B5Tvww5f5jAvBUt5%2Fe49%2BrNvpPshRZrkgQNo38YiAWJ1aa8rRMGkRUNEjZOCT69gnQotHimOmFwwd1nHQvPxMVPerDViVgLoDCw5XYXzP7VbGk1g2MjxI%2BgMHUaW0uqbCJu9eK6dBVgQwBMocmLwzyPq8jPe0Em2rYNQBvzJa5KTovs9MapUK2gnD%2BbrBlXRdN%2BluHQdEesGxjKt%2BTpjiOPsgyIqi8fYs4GAf%2BE6L0NtunE%2FfhmWs6wGvqpwwrH0mGpOMkYWRtXn1TM0XpugoNnubLvNYMBm%2FyS4nfZEbxuNaa0OOJxho9tvzBw3%2FMKG8sMAGOqUBntXlrBVv6ud4a%2FugK3G%2F1Q90Xz7dZxnhwOAHT9BJvXmcS3Tg3SPcr75luB3BlEEQuOAeqiwe36W8EtM9Ob5LLy2xAeTwo%2FFONfn0Y3t6TgQvyFXutw0htWN6eV68dGBg4bi9I5aBh6ERGPYLybR%2BxZZJojrLO1JnU3xx8QyI1kiwREtpJ1Gwhi%2BRTV9CBhkNNu21iWk5CsImmayd2mMBI4T82UuA&X-Amz-Signature=0cc559ebafdd67be85ae87f7b94550c87977711f3a5c1c120c9a88279ac7f9c8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USNKT4QN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T003910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgcwWh7gmYjMMDZuvVMAJw1lBX%2Fo4Mj3rG8IIK9227ZAIgFf79efARJsHn899TWpujemX%2FtE3dyrJ3tEk7Ng0qMS0q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDLwo3VK7p%2FtZD7CF%2FyrcA2C67zPR34qzFEKGPpYPPC77MjC0%2BfEd8AhMwrKWym2u4XeJFpHGqxJTKnHn9gTA1FMVkJ4VV39xbKw26GCdLiT%2BB2S40OPfr0wHIR%2Bl7tScDZq1f6%2BlZcuIch%2F58sVrIc8jIorZb7J6AkZKBdwBK%2FFGyjVhBl%2Fcb%2BRV34LBlS%2BqtHWqwn%2Fhml7N9MxLdCxFohvQioF94CONve%2FlEMxt1%2FwJSfwLrcHiJDvFw%2FN0anUxjCWtVAWULj%2FvunzHx7TrxQkz9QoBF05R9s2k0fknoR%2FI0Fpy5Ew2yHQ91TBdcnmj32xZfl5Dw4oFy6KbOK0B5Tvww5f5jAvBUt5%2Fe49%2BrNvpPshRZrkgQNo38YiAWJ1aa8rRMGkRUNEjZOCT69gnQotHimOmFwwd1nHQvPxMVPerDViVgLoDCw5XYXzP7VbGk1g2MjxI%2BgMHUaW0uqbCJu9eK6dBVgQwBMocmLwzyPq8jPe0Em2rYNQBvzJa5KTovs9MapUK2gnD%2BbrBlXRdN%2BluHQdEesGxjKt%2BTpjiOPsgyIqi8fYs4GAf%2BE6L0NtunE%2FfhmWs6wGvqpwwrH0mGpOMkYWRtXn1TM0XpugoNnubLvNYMBm%2FyS4nfZEbxuNaa0OOJxho9tvzBw3%2FMKG8sMAGOqUBntXlrBVv6ud4a%2FugK3G%2F1Q90Xz7dZxnhwOAHT9BJvXmcS3Tg3SPcr75luB3BlEEQuOAeqiwe36W8EtM9Ob5LLy2xAeTwo%2FFONfn0Y3t6TgQvyFXutw0htWN6eV68dGBg4bi9I5aBh6ERGPYLybR%2BxZZJojrLO1JnU3xx8QyI1kiwREtpJ1Gwhi%2BRTV9CBhkNNu21iWk5CsImmayd2mMBI4T82UuA&X-Amz-Signature=5a89d22e602e0e8d4e87eee8ffd800e67a690850ea734c6a2107fb1b4f8ee997&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USNKT4QN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T003910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgcwWh7gmYjMMDZuvVMAJw1lBX%2Fo4Mj3rG8IIK9227ZAIgFf79efARJsHn899TWpujemX%2FtE3dyrJ3tEk7Ng0qMS0q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDLwo3VK7p%2FtZD7CF%2FyrcA2C67zPR34qzFEKGPpYPPC77MjC0%2BfEd8AhMwrKWym2u4XeJFpHGqxJTKnHn9gTA1FMVkJ4VV39xbKw26GCdLiT%2BB2S40OPfr0wHIR%2Bl7tScDZq1f6%2BlZcuIch%2F58sVrIc8jIorZb7J6AkZKBdwBK%2FFGyjVhBl%2Fcb%2BRV34LBlS%2BqtHWqwn%2Fhml7N9MxLdCxFohvQioF94CONve%2FlEMxt1%2FwJSfwLrcHiJDvFw%2FN0anUxjCWtVAWULj%2FvunzHx7TrxQkz9QoBF05R9s2k0fknoR%2FI0Fpy5Ew2yHQ91TBdcnmj32xZfl5Dw4oFy6KbOK0B5Tvww5f5jAvBUt5%2Fe49%2BrNvpPshRZrkgQNo38YiAWJ1aa8rRMGkRUNEjZOCT69gnQotHimOmFwwd1nHQvPxMVPerDViVgLoDCw5XYXzP7VbGk1g2MjxI%2BgMHUaW0uqbCJu9eK6dBVgQwBMocmLwzyPq8jPe0Em2rYNQBvzJa5KTovs9MapUK2gnD%2BbrBlXRdN%2BluHQdEesGxjKt%2BTpjiOPsgyIqi8fYs4GAf%2BE6L0NtunE%2FfhmWs6wGvqpwwrH0mGpOMkYWRtXn1TM0XpugoNnubLvNYMBm%2FyS4nfZEbxuNaa0OOJxho9tvzBw3%2FMKG8sMAGOqUBntXlrBVv6ud4a%2FugK3G%2F1Q90Xz7dZxnhwOAHT9BJvXmcS3Tg3SPcr75luB3BlEEQuOAeqiwe36W8EtM9Ob5LLy2xAeTwo%2FFONfn0Y3t6TgQvyFXutw0htWN6eV68dGBg4bi9I5aBh6ERGPYLybR%2BxZZJojrLO1JnU3xx8QyI1kiwREtpJ1Gwhi%2BRTV9CBhkNNu21iWk5CsImmayd2mMBI4T82UuA&X-Amz-Signature=8d870bbf7c91cde63219875948fca4b44bde6ed319a566789444cbf4051d3a43&X-Amz-SignedHeaders=host&x-id=GetObject)
