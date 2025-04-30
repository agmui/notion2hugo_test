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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJAFT3QM%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T121519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIHqeVrPX0U0WpVnHewVJQAONqsIgwGE19Q2Af7nLgx42AiEAxo4ssV%2FEAMLLUh6A9KfWgtjd7SS52qHbJMv0YedeH54qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFvhlgAutj87aS1j%2ByrcAzTj8gomGUlGjlgLsL6%2F0%2FkrzHd9GVE%2Bo2CvTH3cJR24%2FnSuZ7Hd7Y1NQT7SPmdl0trGdPtFtFtT4zN2nxX0DBxs9g7wt5%2BUrms3jjMvy5m7LTPfHv4K8K7w0mNYHdK8lfOcaHKPRfhyx4jWcPBubIP5yHMxNVfYqqFE4P4BX%2FzUxQU1Xvm%2B3pD0z%2FpipdokhwZnZg3%2FfYujqw0APWzPDsg%2B72C6Gs8cL2xzReZc5RnBxuVXMzdOt%2Foe9bJLlm6TstUZxXYTRM4UNQn1d%2B54xpEtIthvqHW5buzkiw2GnMOZzKXZxkMGpWMJDYdkNp9F%2BYGHIFd%2FWI%2FmqGNFlEfpd2CfFfUwe%2BUNQSEiNQC3cCsRq6iLRBARHIoSSfyYBP4MZaSt7dbU4ygC5ldxVnwuAbviu011wx7HVSKQAr%2FOlA6FXq6plusXOg58AM26IGmRAS5tABiNZJ4zUBbqwQ7H7gPZOfdHUvRrS7GvFKrAXjFzblSVoDaDXX2vq3YuXMk%2BKSe00GgXYDWO2Gcwa3QZVlCXEeHWP7szdDA2D5pTS1yE8glOMfNpK6lTfmbhUONvB1H58WS6DIFUbfyz35joEcDVHpMS4BouZgKVnsP9cG56qZSBhmLD1apTPR%2FyMMKmyMAGOqUBhk9EgfPXVSTvhtcJGnCkI2%2BMHN3I3MDrwbiUEzWyO8rD7hTecp4IlaHfaY6Ihs%2B%2BpXuiPQI69dG4vhJvcIOSR50rzYuf4YjGD29igdNOea4t%2F9qnZSSq9TmSZD%2FMatrzoMXY9Ap20q5QpSSQvO6uDEA5kLLNP%2BOXjsKpw6GxEcupxZvMn7NrMl0H5HlIqsmHbAOaJ8477Ax295gRVPlwx3AFcO%2F3&X-Amz-Signature=ad14a878aa9b602c3980c45a2ff58fd869be569993255a8e8892eebcf358f216&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJAFT3QM%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T121519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIHqeVrPX0U0WpVnHewVJQAONqsIgwGE19Q2Af7nLgx42AiEAxo4ssV%2FEAMLLUh6A9KfWgtjd7SS52qHbJMv0YedeH54qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFvhlgAutj87aS1j%2ByrcAzTj8gomGUlGjlgLsL6%2F0%2FkrzHd9GVE%2Bo2CvTH3cJR24%2FnSuZ7Hd7Y1NQT7SPmdl0trGdPtFtFtT4zN2nxX0DBxs9g7wt5%2BUrms3jjMvy5m7LTPfHv4K8K7w0mNYHdK8lfOcaHKPRfhyx4jWcPBubIP5yHMxNVfYqqFE4P4BX%2FzUxQU1Xvm%2B3pD0z%2FpipdokhwZnZg3%2FfYujqw0APWzPDsg%2B72C6Gs8cL2xzReZc5RnBxuVXMzdOt%2Foe9bJLlm6TstUZxXYTRM4UNQn1d%2B54xpEtIthvqHW5buzkiw2GnMOZzKXZxkMGpWMJDYdkNp9F%2BYGHIFd%2FWI%2FmqGNFlEfpd2CfFfUwe%2BUNQSEiNQC3cCsRq6iLRBARHIoSSfyYBP4MZaSt7dbU4ygC5ldxVnwuAbviu011wx7HVSKQAr%2FOlA6FXq6plusXOg58AM26IGmRAS5tABiNZJ4zUBbqwQ7H7gPZOfdHUvRrS7GvFKrAXjFzblSVoDaDXX2vq3YuXMk%2BKSe00GgXYDWO2Gcwa3QZVlCXEeHWP7szdDA2D5pTS1yE8glOMfNpK6lTfmbhUONvB1H58WS6DIFUbfyz35joEcDVHpMS4BouZgKVnsP9cG56qZSBhmLD1apTPR%2FyMMKmyMAGOqUBhk9EgfPXVSTvhtcJGnCkI2%2BMHN3I3MDrwbiUEzWyO8rD7hTecp4IlaHfaY6Ihs%2B%2BpXuiPQI69dG4vhJvcIOSR50rzYuf4YjGD29igdNOea4t%2F9qnZSSq9TmSZD%2FMatrzoMXY9Ap20q5QpSSQvO6uDEA5kLLNP%2BOXjsKpw6GxEcupxZvMn7NrMl0H5HlIqsmHbAOaJ8477Ax295gRVPlwx3AFcO%2F3&X-Amz-Signature=fe8743f4fb78b5e89848265535512e8bd60cbc9247342cb54c05df5c8026facc&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJAFT3QM%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T121519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIHqeVrPX0U0WpVnHewVJQAONqsIgwGE19Q2Af7nLgx42AiEAxo4ssV%2FEAMLLUh6A9KfWgtjd7SS52qHbJMv0YedeH54qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFvhlgAutj87aS1j%2ByrcAzTj8gomGUlGjlgLsL6%2F0%2FkrzHd9GVE%2Bo2CvTH3cJR24%2FnSuZ7Hd7Y1NQT7SPmdl0trGdPtFtFtT4zN2nxX0DBxs9g7wt5%2BUrms3jjMvy5m7LTPfHv4K8K7w0mNYHdK8lfOcaHKPRfhyx4jWcPBubIP5yHMxNVfYqqFE4P4BX%2FzUxQU1Xvm%2B3pD0z%2FpipdokhwZnZg3%2FfYujqw0APWzPDsg%2B72C6Gs8cL2xzReZc5RnBxuVXMzdOt%2Foe9bJLlm6TstUZxXYTRM4UNQn1d%2B54xpEtIthvqHW5buzkiw2GnMOZzKXZxkMGpWMJDYdkNp9F%2BYGHIFd%2FWI%2FmqGNFlEfpd2CfFfUwe%2BUNQSEiNQC3cCsRq6iLRBARHIoSSfyYBP4MZaSt7dbU4ygC5ldxVnwuAbviu011wx7HVSKQAr%2FOlA6FXq6plusXOg58AM26IGmRAS5tABiNZJ4zUBbqwQ7H7gPZOfdHUvRrS7GvFKrAXjFzblSVoDaDXX2vq3YuXMk%2BKSe00GgXYDWO2Gcwa3QZVlCXEeHWP7szdDA2D5pTS1yE8glOMfNpK6lTfmbhUONvB1H58WS6DIFUbfyz35joEcDVHpMS4BouZgKVnsP9cG56qZSBhmLD1apTPR%2FyMMKmyMAGOqUBhk9EgfPXVSTvhtcJGnCkI2%2BMHN3I3MDrwbiUEzWyO8rD7hTecp4IlaHfaY6Ihs%2B%2BpXuiPQI69dG4vhJvcIOSR50rzYuf4YjGD29igdNOea4t%2F9qnZSSq9TmSZD%2FMatrzoMXY9Ap20q5QpSSQvO6uDEA5kLLNP%2BOXjsKpw6GxEcupxZvMn7NrMl0H5HlIqsmHbAOaJ8477Ax295gRVPlwx3AFcO%2F3&X-Amz-Signature=2ceae5e52cd753c94c03889928c98bac8cd0cd02432d4740acc8d516fe046057&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJAFT3QM%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T121519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIHqeVrPX0U0WpVnHewVJQAONqsIgwGE19Q2Af7nLgx42AiEAxo4ssV%2FEAMLLUh6A9KfWgtjd7SS52qHbJMv0YedeH54qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFvhlgAutj87aS1j%2ByrcAzTj8gomGUlGjlgLsL6%2F0%2FkrzHd9GVE%2Bo2CvTH3cJR24%2FnSuZ7Hd7Y1NQT7SPmdl0trGdPtFtFtT4zN2nxX0DBxs9g7wt5%2BUrms3jjMvy5m7LTPfHv4K8K7w0mNYHdK8lfOcaHKPRfhyx4jWcPBubIP5yHMxNVfYqqFE4P4BX%2FzUxQU1Xvm%2B3pD0z%2FpipdokhwZnZg3%2FfYujqw0APWzPDsg%2B72C6Gs8cL2xzReZc5RnBxuVXMzdOt%2Foe9bJLlm6TstUZxXYTRM4UNQn1d%2B54xpEtIthvqHW5buzkiw2GnMOZzKXZxkMGpWMJDYdkNp9F%2BYGHIFd%2FWI%2FmqGNFlEfpd2CfFfUwe%2BUNQSEiNQC3cCsRq6iLRBARHIoSSfyYBP4MZaSt7dbU4ygC5ldxVnwuAbviu011wx7HVSKQAr%2FOlA6FXq6plusXOg58AM26IGmRAS5tABiNZJ4zUBbqwQ7H7gPZOfdHUvRrS7GvFKrAXjFzblSVoDaDXX2vq3YuXMk%2BKSe00GgXYDWO2Gcwa3QZVlCXEeHWP7szdDA2D5pTS1yE8glOMfNpK6lTfmbhUONvB1H58WS6DIFUbfyz35joEcDVHpMS4BouZgKVnsP9cG56qZSBhmLD1apTPR%2FyMMKmyMAGOqUBhk9EgfPXVSTvhtcJGnCkI2%2BMHN3I3MDrwbiUEzWyO8rD7hTecp4IlaHfaY6Ihs%2B%2BpXuiPQI69dG4vhJvcIOSR50rzYuf4YjGD29igdNOea4t%2F9qnZSSq9TmSZD%2FMatrzoMXY9Ap20q5QpSSQvO6uDEA5kLLNP%2BOXjsKpw6GxEcupxZvMn7NrMl0H5HlIqsmHbAOaJ8477Ax295gRVPlwx3AFcO%2F3&X-Amz-Signature=7d8b88ef6555c0f3c4352de42aaf856b209abdb179811601845244ebc0bb7a9a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJAFT3QM%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T121519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIHqeVrPX0U0WpVnHewVJQAONqsIgwGE19Q2Af7nLgx42AiEAxo4ssV%2FEAMLLUh6A9KfWgtjd7SS52qHbJMv0YedeH54qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFvhlgAutj87aS1j%2ByrcAzTj8gomGUlGjlgLsL6%2F0%2FkrzHd9GVE%2Bo2CvTH3cJR24%2FnSuZ7Hd7Y1NQT7SPmdl0trGdPtFtFtT4zN2nxX0DBxs9g7wt5%2BUrms3jjMvy5m7LTPfHv4K8K7w0mNYHdK8lfOcaHKPRfhyx4jWcPBubIP5yHMxNVfYqqFE4P4BX%2FzUxQU1Xvm%2B3pD0z%2FpipdokhwZnZg3%2FfYujqw0APWzPDsg%2B72C6Gs8cL2xzReZc5RnBxuVXMzdOt%2Foe9bJLlm6TstUZxXYTRM4UNQn1d%2B54xpEtIthvqHW5buzkiw2GnMOZzKXZxkMGpWMJDYdkNp9F%2BYGHIFd%2FWI%2FmqGNFlEfpd2CfFfUwe%2BUNQSEiNQC3cCsRq6iLRBARHIoSSfyYBP4MZaSt7dbU4ygC5ldxVnwuAbviu011wx7HVSKQAr%2FOlA6FXq6plusXOg58AM26IGmRAS5tABiNZJ4zUBbqwQ7H7gPZOfdHUvRrS7GvFKrAXjFzblSVoDaDXX2vq3YuXMk%2BKSe00GgXYDWO2Gcwa3QZVlCXEeHWP7szdDA2D5pTS1yE8glOMfNpK6lTfmbhUONvB1H58WS6DIFUbfyz35joEcDVHpMS4BouZgKVnsP9cG56qZSBhmLD1apTPR%2FyMMKmyMAGOqUBhk9EgfPXVSTvhtcJGnCkI2%2BMHN3I3MDrwbiUEzWyO8rD7hTecp4IlaHfaY6Ihs%2B%2BpXuiPQI69dG4vhJvcIOSR50rzYuf4YjGD29igdNOea4t%2F9qnZSSq9TmSZD%2FMatrzoMXY9Ap20q5QpSSQvO6uDEA5kLLNP%2BOXjsKpw6GxEcupxZvMn7NrMl0H5HlIqsmHbAOaJ8477Ax295gRVPlwx3AFcO%2F3&X-Amz-Signature=21df0faa8c5a86a8e3fe2a3a4c160c6243bb34ce87c401a30f4603bf334e828a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJAFT3QM%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T121519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIHqeVrPX0U0WpVnHewVJQAONqsIgwGE19Q2Af7nLgx42AiEAxo4ssV%2FEAMLLUh6A9KfWgtjd7SS52qHbJMv0YedeH54qiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFvhlgAutj87aS1j%2ByrcAzTj8gomGUlGjlgLsL6%2F0%2FkrzHd9GVE%2Bo2CvTH3cJR24%2FnSuZ7Hd7Y1NQT7SPmdl0trGdPtFtFtT4zN2nxX0DBxs9g7wt5%2BUrms3jjMvy5m7LTPfHv4K8K7w0mNYHdK8lfOcaHKPRfhyx4jWcPBubIP5yHMxNVfYqqFE4P4BX%2FzUxQU1Xvm%2B3pD0z%2FpipdokhwZnZg3%2FfYujqw0APWzPDsg%2B72C6Gs8cL2xzReZc5RnBxuVXMzdOt%2Foe9bJLlm6TstUZxXYTRM4UNQn1d%2B54xpEtIthvqHW5buzkiw2GnMOZzKXZxkMGpWMJDYdkNp9F%2BYGHIFd%2FWI%2FmqGNFlEfpd2CfFfUwe%2BUNQSEiNQC3cCsRq6iLRBARHIoSSfyYBP4MZaSt7dbU4ygC5ldxVnwuAbviu011wx7HVSKQAr%2FOlA6FXq6plusXOg58AM26IGmRAS5tABiNZJ4zUBbqwQ7H7gPZOfdHUvRrS7GvFKrAXjFzblSVoDaDXX2vq3YuXMk%2BKSe00GgXYDWO2Gcwa3QZVlCXEeHWP7szdDA2D5pTS1yE8glOMfNpK6lTfmbhUONvB1H58WS6DIFUbfyz35joEcDVHpMS4BouZgKVnsP9cG56qZSBhmLD1apTPR%2FyMMKmyMAGOqUBhk9EgfPXVSTvhtcJGnCkI2%2BMHN3I3MDrwbiUEzWyO8rD7hTecp4IlaHfaY6Ihs%2B%2BpXuiPQI69dG4vhJvcIOSR50rzYuf4YjGD29igdNOea4t%2F9qnZSSq9TmSZD%2FMatrzoMXY9Ap20q5QpSSQvO6uDEA5kLLNP%2BOXjsKpw6GxEcupxZvMn7NrMl0H5HlIqsmHbAOaJ8477Ax295gRVPlwx3AFcO%2F3&X-Amz-Signature=3a46d370c9fc5622c48f0c3c20b9ef4fb7a0404bc6ec0668a5c254cf38d512dc&X-Amz-SignedHeaders=host&x-id=GetObject)
