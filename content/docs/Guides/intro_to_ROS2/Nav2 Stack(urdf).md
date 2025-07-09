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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KJO6PCI%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T181244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvEYkMEsIe1HH8Sy1uQYuusgfIbjVeR9uqwXnHmMzkcAiEAhYOwHfqjU3okKFaPtWSY3aeoIFFCDPRTMWmt%2BFD59g0qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFW4j7eub6hOQx9ZzircAyVP2wencl%2FawlTybJmxlQf1HvfDT7l1Ttb6Mep6VlPq6idvqCUfmoYKsejcU1SPO61pzBjvhhc%2B%2BchXzWTUHqzebDbl3wEpGa58RA%2Bw1qdMVIyAYts9WqZFGD8ZaLxbzvXv0kT9LgJc7OL7mpzDrksMGFkyFgy2R7ERjhFmTbrEt9iKoHFxPIuAvHvpbEbO5fOZO2RmlldLowN8VdURR6s8PrPd0ftZxGmaaXrd%2F5Nu6jZWCld3NNtW2MElJj3u9w5yEdpmG4dpf4eP3A5HK06lNxzhPyNniQa2UAkny0o6vWMDralmdpPMJNu6rRvrTXJL588L38WpV7vAe6IhfzlKmFDcqLX0POmTj%2Bsslbi9KiohCQ2qyxNC5HHkS5ZrRJpCC7h6HyyRg3vY%2F52pLgAGrHfjyF5ySobSuIHel2k5T60wwveRyndc%2BUTRIgXhITqUByjtfOllJnffLXT2p4w0ldBaMdI%2BsjX3afvPkKVDYcNt6MZhTs1RPKU02fGe8HYnhqrMxDdPN63gTzARm2ttQeXKD31AjN%2BQdblJ9V6cZcjsynaj2JGM62a7YmjatSa4GwF%2BNOtpJifAb8Yu2V9S5Bq3i4u9YpajhGrXrZPlm%2Bp0rOWh01iJo%2BORMJvFusMGOqUB7zE6sTPh6qpEEEHwZpK3i6wsvjIjDoN9c6jfu0ucJP7wTzOG%2B7PQaHyDaYC%2FnFl7nsAx8u%2FAMBRVNiorhQwWmH7060pEUATIXUy2V6HgyT43gJqIC2IBYaDSO%2Bfrbb3eZU5RONFEzz%2FT1iaib0AsYrr9%2F41zvOB2cJzM6icsVeRs9zYI7Jh68shbcyEj%2B8FYOUczByLLEfH3A0VF4kS4f9wNrBKK&X-Amz-Signature=1cb02b7bc135846bd79ee77b8db55040579b5a41735f9fe528d12eb5e432911f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KJO6PCI%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T181244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvEYkMEsIe1HH8Sy1uQYuusgfIbjVeR9uqwXnHmMzkcAiEAhYOwHfqjU3okKFaPtWSY3aeoIFFCDPRTMWmt%2BFD59g0qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFW4j7eub6hOQx9ZzircAyVP2wencl%2FawlTybJmxlQf1HvfDT7l1Ttb6Mep6VlPq6idvqCUfmoYKsejcU1SPO61pzBjvhhc%2B%2BchXzWTUHqzebDbl3wEpGa58RA%2Bw1qdMVIyAYts9WqZFGD8ZaLxbzvXv0kT9LgJc7OL7mpzDrksMGFkyFgy2R7ERjhFmTbrEt9iKoHFxPIuAvHvpbEbO5fOZO2RmlldLowN8VdURR6s8PrPd0ftZxGmaaXrd%2F5Nu6jZWCld3NNtW2MElJj3u9w5yEdpmG4dpf4eP3A5HK06lNxzhPyNniQa2UAkny0o6vWMDralmdpPMJNu6rRvrTXJL588L38WpV7vAe6IhfzlKmFDcqLX0POmTj%2Bsslbi9KiohCQ2qyxNC5HHkS5ZrRJpCC7h6HyyRg3vY%2F52pLgAGrHfjyF5ySobSuIHel2k5T60wwveRyndc%2BUTRIgXhITqUByjtfOllJnffLXT2p4w0ldBaMdI%2BsjX3afvPkKVDYcNt6MZhTs1RPKU02fGe8HYnhqrMxDdPN63gTzARm2ttQeXKD31AjN%2BQdblJ9V6cZcjsynaj2JGM62a7YmjatSa4GwF%2BNOtpJifAb8Yu2V9S5Bq3i4u9YpajhGrXrZPlm%2Bp0rOWh01iJo%2BORMJvFusMGOqUB7zE6sTPh6qpEEEHwZpK3i6wsvjIjDoN9c6jfu0ucJP7wTzOG%2B7PQaHyDaYC%2FnFl7nsAx8u%2FAMBRVNiorhQwWmH7060pEUATIXUy2V6HgyT43gJqIC2IBYaDSO%2Bfrbb3eZU5RONFEzz%2FT1iaib0AsYrr9%2F41zvOB2cJzM6icsVeRs9zYI7Jh68shbcyEj%2B8FYOUczByLLEfH3A0VF4kS4f9wNrBKK&X-Amz-Signature=8b865d3166b1ffb69b623fddef3d5d92631a30328af39f4b958268d83d0a2b70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KJO6PCI%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T181244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvEYkMEsIe1HH8Sy1uQYuusgfIbjVeR9uqwXnHmMzkcAiEAhYOwHfqjU3okKFaPtWSY3aeoIFFCDPRTMWmt%2BFD59g0qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFW4j7eub6hOQx9ZzircAyVP2wencl%2FawlTybJmxlQf1HvfDT7l1Ttb6Mep6VlPq6idvqCUfmoYKsejcU1SPO61pzBjvhhc%2B%2BchXzWTUHqzebDbl3wEpGa58RA%2Bw1qdMVIyAYts9WqZFGD8ZaLxbzvXv0kT9LgJc7OL7mpzDrksMGFkyFgy2R7ERjhFmTbrEt9iKoHFxPIuAvHvpbEbO5fOZO2RmlldLowN8VdURR6s8PrPd0ftZxGmaaXrd%2F5Nu6jZWCld3NNtW2MElJj3u9w5yEdpmG4dpf4eP3A5HK06lNxzhPyNniQa2UAkny0o6vWMDralmdpPMJNu6rRvrTXJL588L38WpV7vAe6IhfzlKmFDcqLX0POmTj%2Bsslbi9KiohCQ2qyxNC5HHkS5ZrRJpCC7h6HyyRg3vY%2F52pLgAGrHfjyF5ySobSuIHel2k5T60wwveRyndc%2BUTRIgXhITqUByjtfOllJnffLXT2p4w0ldBaMdI%2BsjX3afvPkKVDYcNt6MZhTs1RPKU02fGe8HYnhqrMxDdPN63gTzARm2ttQeXKD31AjN%2BQdblJ9V6cZcjsynaj2JGM62a7YmjatSa4GwF%2BNOtpJifAb8Yu2V9S5Bq3i4u9YpajhGrXrZPlm%2Bp0rOWh01iJo%2BORMJvFusMGOqUB7zE6sTPh6qpEEEHwZpK3i6wsvjIjDoN9c6jfu0ucJP7wTzOG%2B7PQaHyDaYC%2FnFl7nsAx8u%2FAMBRVNiorhQwWmH7060pEUATIXUy2V6HgyT43gJqIC2IBYaDSO%2Bfrbb3eZU5RONFEzz%2FT1iaib0AsYrr9%2F41zvOB2cJzM6icsVeRs9zYI7Jh68shbcyEj%2B8FYOUczByLLEfH3A0VF4kS4f9wNrBKK&X-Amz-Signature=2cbf87017d5acd6669098f4fac01111fd02f343a50cc534e0f0b88750db278dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KJO6PCI%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T181244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvEYkMEsIe1HH8Sy1uQYuusgfIbjVeR9uqwXnHmMzkcAiEAhYOwHfqjU3okKFaPtWSY3aeoIFFCDPRTMWmt%2BFD59g0qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFW4j7eub6hOQx9ZzircAyVP2wencl%2FawlTybJmxlQf1HvfDT7l1Ttb6Mep6VlPq6idvqCUfmoYKsejcU1SPO61pzBjvhhc%2B%2BchXzWTUHqzebDbl3wEpGa58RA%2Bw1qdMVIyAYts9WqZFGD8ZaLxbzvXv0kT9LgJc7OL7mpzDrksMGFkyFgy2R7ERjhFmTbrEt9iKoHFxPIuAvHvpbEbO5fOZO2RmlldLowN8VdURR6s8PrPd0ftZxGmaaXrd%2F5Nu6jZWCld3NNtW2MElJj3u9w5yEdpmG4dpf4eP3A5HK06lNxzhPyNniQa2UAkny0o6vWMDralmdpPMJNu6rRvrTXJL588L38WpV7vAe6IhfzlKmFDcqLX0POmTj%2Bsslbi9KiohCQ2qyxNC5HHkS5ZrRJpCC7h6HyyRg3vY%2F52pLgAGrHfjyF5ySobSuIHel2k5T60wwveRyndc%2BUTRIgXhITqUByjtfOllJnffLXT2p4w0ldBaMdI%2BsjX3afvPkKVDYcNt6MZhTs1RPKU02fGe8HYnhqrMxDdPN63gTzARm2ttQeXKD31AjN%2BQdblJ9V6cZcjsynaj2JGM62a7YmjatSa4GwF%2BNOtpJifAb8Yu2V9S5Bq3i4u9YpajhGrXrZPlm%2Bp0rOWh01iJo%2BORMJvFusMGOqUB7zE6sTPh6qpEEEHwZpK3i6wsvjIjDoN9c6jfu0ucJP7wTzOG%2B7PQaHyDaYC%2FnFl7nsAx8u%2FAMBRVNiorhQwWmH7060pEUATIXUy2V6HgyT43gJqIC2IBYaDSO%2Bfrbb3eZU5RONFEzz%2FT1iaib0AsYrr9%2F41zvOB2cJzM6icsVeRs9zYI7Jh68shbcyEj%2B8FYOUczByLLEfH3A0VF4kS4f9wNrBKK&X-Amz-Signature=b47d15ea2f7c79d018af08fa889d8721389a0010734e1a3a713059c05b03e20d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KJO6PCI%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T181244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvEYkMEsIe1HH8Sy1uQYuusgfIbjVeR9uqwXnHmMzkcAiEAhYOwHfqjU3okKFaPtWSY3aeoIFFCDPRTMWmt%2BFD59g0qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFW4j7eub6hOQx9ZzircAyVP2wencl%2FawlTybJmxlQf1HvfDT7l1Ttb6Mep6VlPq6idvqCUfmoYKsejcU1SPO61pzBjvhhc%2B%2BchXzWTUHqzebDbl3wEpGa58RA%2Bw1qdMVIyAYts9WqZFGD8ZaLxbzvXv0kT9LgJc7OL7mpzDrksMGFkyFgy2R7ERjhFmTbrEt9iKoHFxPIuAvHvpbEbO5fOZO2RmlldLowN8VdURR6s8PrPd0ftZxGmaaXrd%2F5Nu6jZWCld3NNtW2MElJj3u9w5yEdpmG4dpf4eP3A5HK06lNxzhPyNniQa2UAkny0o6vWMDralmdpPMJNu6rRvrTXJL588L38WpV7vAe6IhfzlKmFDcqLX0POmTj%2Bsslbi9KiohCQ2qyxNC5HHkS5ZrRJpCC7h6HyyRg3vY%2F52pLgAGrHfjyF5ySobSuIHel2k5T60wwveRyndc%2BUTRIgXhITqUByjtfOllJnffLXT2p4w0ldBaMdI%2BsjX3afvPkKVDYcNt6MZhTs1RPKU02fGe8HYnhqrMxDdPN63gTzARm2ttQeXKD31AjN%2BQdblJ9V6cZcjsynaj2JGM62a7YmjatSa4GwF%2BNOtpJifAb8Yu2V9S5Bq3i4u9YpajhGrXrZPlm%2Bp0rOWh01iJo%2BORMJvFusMGOqUB7zE6sTPh6qpEEEHwZpK3i6wsvjIjDoN9c6jfu0ucJP7wTzOG%2B7PQaHyDaYC%2FnFl7nsAx8u%2FAMBRVNiorhQwWmH7060pEUATIXUy2V6HgyT43gJqIC2IBYaDSO%2Bfrbb3eZU5RONFEzz%2FT1iaib0AsYrr9%2F41zvOB2cJzM6icsVeRs9zYI7Jh68shbcyEj%2B8FYOUczByLLEfH3A0VF4kS4f9wNrBKK&X-Amz-Signature=cc444ab384dbb2fe36d472a83e3aae897ea3a83f96b7654590cd10f925d185d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KJO6PCI%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T181244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEvEYkMEsIe1HH8Sy1uQYuusgfIbjVeR9uqwXnHmMzkcAiEAhYOwHfqjU3okKFaPtWSY3aeoIFFCDPRTMWmt%2BFD59g0qiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFW4j7eub6hOQx9ZzircAyVP2wencl%2FawlTybJmxlQf1HvfDT7l1Ttb6Mep6VlPq6idvqCUfmoYKsejcU1SPO61pzBjvhhc%2B%2BchXzWTUHqzebDbl3wEpGa58RA%2Bw1qdMVIyAYts9WqZFGD8ZaLxbzvXv0kT9LgJc7OL7mpzDrksMGFkyFgy2R7ERjhFmTbrEt9iKoHFxPIuAvHvpbEbO5fOZO2RmlldLowN8VdURR6s8PrPd0ftZxGmaaXrd%2F5Nu6jZWCld3NNtW2MElJj3u9w5yEdpmG4dpf4eP3A5HK06lNxzhPyNniQa2UAkny0o6vWMDralmdpPMJNu6rRvrTXJL588L38WpV7vAe6IhfzlKmFDcqLX0POmTj%2Bsslbi9KiohCQ2qyxNC5HHkS5ZrRJpCC7h6HyyRg3vY%2F52pLgAGrHfjyF5ySobSuIHel2k5T60wwveRyndc%2BUTRIgXhITqUByjtfOllJnffLXT2p4w0ldBaMdI%2BsjX3afvPkKVDYcNt6MZhTs1RPKU02fGe8HYnhqrMxDdPN63gTzARm2ttQeXKD31AjN%2BQdblJ9V6cZcjsynaj2JGM62a7YmjatSa4GwF%2BNOtpJifAb8Yu2V9S5Bq3i4u9YpajhGrXrZPlm%2Bp0rOWh01iJo%2BORMJvFusMGOqUB7zE6sTPh6qpEEEHwZpK3i6wsvjIjDoN9c6jfu0ucJP7wTzOG%2B7PQaHyDaYC%2FnFl7nsAx8u%2FAMBRVNiorhQwWmH7060pEUATIXUy2V6HgyT43gJqIC2IBYaDSO%2Bfrbb3eZU5RONFEzz%2FT1iaib0AsYrr9%2F41zvOB2cJzM6icsVeRs9zYI7Jh68shbcyEj%2B8FYOUczByLLEfH3A0VF4kS4f9wNrBKK&X-Amz-Signature=5ca32cf5290b7aa7ce19e259b641486a0cba084a35454f5524b6ffaf0a85ab0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
