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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R2QPXJA%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T021656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEeZaskEgk37LKdIl8Bs4rxn208D3W7451iDVNCN1E%2BBAiEAzqPXh%2FSTHysndZ%2Fg9yxIzTIoPyiTsjOqoXVzBgTtZX4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEAFJ00ZRP0sC8gsTSrcA8XpfDX1KP2FRkhcI7F3%2FWAw57E4PTfB4xgcY5NAUnFnq7JabnW2zdcJoBVEpQUtGYJa5bg7sn4dY99IFqCfRBehQ%2BPAKXKxE569KtZ%2BKkw1zgr3wjFVsynyZPZKjxQlLkqWaHsf7Mepj67aU8yifLT3JR5CNVL8jngsbWNRHTwtKG1iqxNuDsF0x0Q55im5suN6xDH9CpVS%2FaxsXqMdowRBy2Wl%2BTd69jpjd0VlYzU1CUaz6Xis0M8oeQLwJOVm0raI8G%2FTrMBxTFeSFLS%2FO5gECVrkyfDSpuBNfWcoPLAo8RYEniTpk%2FfPT%2B4KUTeIvabdGc6dJfMQkp7pCWTzsjyXbc2oicKTlN8T%2BnWn7ywf2h385Ew7NntUgjH6i9qCbGHPUTQBx2aP3pv0SpyAKO1GJo0%2FvOuDUGVfTpX9Fowkww2zJfZFXojMzOQdaf72o2GVunmSx1l2aLkOlBbAyEDmKx088bIIe0Z09HUKenAZhKyvo9ch0q2QxwZLfJAS2F4MJKxAwIT43W%2BvYsxlotD1UxaTmb%2BGEM2CASy1NWAqAPBf4EXvc7Sdr5oZ%2FiBWH9bYrA2wFl4Fn5DXdL77RasSG9UBFDUnnYvPk8OeJXOTzRXG2%2BfnxkEMRTPPMPv1jr4GOqUBOvsF4fg9xF%2FlBrlxc36PKRHPVLq9T8WjLpEMZqCrpwqipFSlGmYhEVRFhqmUJjYmOibkSuhwJ7cVlaSNylFCj6V%2Bp85YvwnHFpHvQSytdyudwMOshKgVAPcp4fCYylcBNAZJG%2FCHde4L2sA1AyszYHhVHI490p5foUYVPEax0H8Z0oAmKs245SHl857heOQLhqrsavzLyz4bjH7vjc3F%2Fr71V%2FFA&X-Amz-Signature=19091afa0d51b72425cc79c8fb0472ae23cbea41226ae9a6895371f69d5201a8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R2QPXJA%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T021656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEeZaskEgk37LKdIl8Bs4rxn208D3W7451iDVNCN1E%2BBAiEAzqPXh%2FSTHysndZ%2Fg9yxIzTIoPyiTsjOqoXVzBgTtZX4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEAFJ00ZRP0sC8gsTSrcA8XpfDX1KP2FRkhcI7F3%2FWAw57E4PTfB4xgcY5NAUnFnq7JabnW2zdcJoBVEpQUtGYJa5bg7sn4dY99IFqCfRBehQ%2BPAKXKxE569KtZ%2BKkw1zgr3wjFVsynyZPZKjxQlLkqWaHsf7Mepj67aU8yifLT3JR5CNVL8jngsbWNRHTwtKG1iqxNuDsF0x0Q55im5suN6xDH9CpVS%2FaxsXqMdowRBy2Wl%2BTd69jpjd0VlYzU1CUaz6Xis0M8oeQLwJOVm0raI8G%2FTrMBxTFeSFLS%2FO5gECVrkyfDSpuBNfWcoPLAo8RYEniTpk%2FfPT%2B4KUTeIvabdGc6dJfMQkp7pCWTzsjyXbc2oicKTlN8T%2BnWn7ywf2h385Ew7NntUgjH6i9qCbGHPUTQBx2aP3pv0SpyAKO1GJo0%2FvOuDUGVfTpX9Fowkww2zJfZFXojMzOQdaf72o2GVunmSx1l2aLkOlBbAyEDmKx088bIIe0Z09HUKenAZhKyvo9ch0q2QxwZLfJAS2F4MJKxAwIT43W%2BvYsxlotD1UxaTmb%2BGEM2CASy1NWAqAPBf4EXvc7Sdr5oZ%2FiBWH9bYrA2wFl4Fn5DXdL77RasSG9UBFDUnnYvPk8OeJXOTzRXG2%2BfnxkEMRTPPMPv1jr4GOqUBOvsF4fg9xF%2FlBrlxc36PKRHPVLq9T8WjLpEMZqCrpwqipFSlGmYhEVRFhqmUJjYmOibkSuhwJ7cVlaSNylFCj6V%2Bp85YvwnHFpHvQSytdyudwMOshKgVAPcp4fCYylcBNAZJG%2FCHde4L2sA1AyszYHhVHI490p5foUYVPEax0H8Z0oAmKs245SHl857heOQLhqrsavzLyz4bjH7vjc3F%2Fr71V%2FFA&X-Amz-Signature=48d216ebe34bbe3795198cc825cf60a62c4eb4a98adf780773f1694d3cceb5ad&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R2QPXJA%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T021656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEeZaskEgk37LKdIl8Bs4rxn208D3W7451iDVNCN1E%2BBAiEAzqPXh%2FSTHysndZ%2Fg9yxIzTIoPyiTsjOqoXVzBgTtZX4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEAFJ00ZRP0sC8gsTSrcA8XpfDX1KP2FRkhcI7F3%2FWAw57E4PTfB4xgcY5NAUnFnq7JabnW2zdcJoBVEpQUtGYJa5bg7sn4dY99IFqCfRBehQ%2BPAKXKxE569KtZ%2BKkw1zgr3wjFVsynyZPZKjxQlLkqWaHsf7Mepj67aU8yifLT3JR5CNVL8jngsbWNRHTwtKG1iqxNuDsF0x0Q55im5suN6xDH9CpVS%2FaxsXqMdowRBy2Wl%2BTd69jpjd0VlYzU1CUaz6Xis0M8oeQLwJOVm0raI8G%2FTrMBxTFeSFLS%2FO5gECVrkyfDSpuBNfWcoPLAo8RYEniTpk%2FfPT%2B4KUTeIvabdGc6dJfMQkp7pCWTzsjyXbc2oicKTlN8T%2BnWn7ywf2h385Ew7NntUgjH6i9qCbGHPUTQBx2aP3pv0SpyAKO1GJo0%2FvOuDUGVfTpX9Fowkww2zJfZFXojMzOQdaf72o2GVunmSx1l2aLkOlBbAyEDmKx088bIIe0Z09HUKenAZhKyvo9ch0q2QxwZLfJAS2F4MJKxAwIT43W%2BvYsxlotD1UxaTmb%2BGEM2CASy1NWAqAPBf4EXvc7Sdr5oZ%2FiBWH9bYrA2wFl4Fn5DXdL77RasSG9UBFDUnnYvPk8OeJXOTzRXG2%2BfnxkEMRTPPMPv1jr4GOqUBOvsF4fg9xF%2FlBrlxc36PKRHPVLq9T8WjLpEMZqCrpwqipFSlGmYhEVRFhqmUJjYmOibkSuhwJ7cVlaSNylFCj6V%2Bp85YvwnHFpHvQSytdyudwMOshKgVAPcp4fCYylcBNAZJG%2FCHde4L2sA1AyszYHhVHI490p5foUYVPEax0H8Z0oAmKs245SHl857heOQLhqrsavzLyz4bjH7vjc3F%2Fr71V%2FFA&X-Amz-Signature=5c2f8f6a831fa5a30fadc99bc9e049269f960dc97960e730a42647b0532cb236&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R2QPXJA%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T021656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEeZaskEgk37LKdIl8Bs4rxn208D3W7451iDVNCN1E%2BBAiEAzqPXh%2FSTHysndZ%2Fg9yxIzTIoPyiTsjOqoXVzBgTtZX4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEAFJ00ZRP0sC8gsTSrcA8XpfDX1KP2FRkhcI7F3%2FWAw57E4PTfB4xgcY5NAUnFnq7JabnW2zdcJoBVEpQUtGYJa5bg7sn4dY99IFqCfRBehQ%2BPAKXKxE569KtZ%2BKkw1zgr3wjFVsynyZPZKjxQlLkqWaHsf7Mepj67aU8yifLT3JR5CNVL8jngsbWNRHTwtKG1iqxNuDsF0x0Q55im5suN6xDH9CpVS%2FaxsXqMdowRBy2Wl%2BTd69jpjd0VlYzU1CUaz6Xis0M8oeQLwJOVm0raI8G%2FTrMBxTFeSFLS%2FO5gECVrkyfDSpuBNfWcoPLAo8RYEniTpk%2FfPT%2B4KUTeIvabdGc6dJfMQkp7pCWTzsjyXbc2oicKTlN8T%2BnWn7ywf2h385Ew7NntUgjH6i9qCbGHPUTQBx2aP3pv0SpyAKO1GJo0%2FvOuDUGVfTpX9Fowkww2zJfZFXojMzOQdaf72o2GVunmSx1l2aLkOlBbAyEDmKx088bIIe0Z09HUKenAZhKyvo9ch0q2QxwZLfJAS2F4MJKxAwIT43W%2BvYsxlotD1UxaTmb%2BGEM2CASy1NWAqAPBf4EXvc7Sdr5oZ%2FiBWH9bYrA2wFl4Fn5DXdL77RasSG9UBFDUnnYvPk8OeJXOTzRXG2%2BfnxkEMRTPPMPv1jr4GOqUBOvsF4fg9xF%2FlBrlxc36PKRHPVLq9T8WjLpEMZqCrpwqipFSlGmYhEVRFhqmUJjYmOibkSuhwJ7cVlaSNylFCj6V%2Bp85YvwnHFpHvQSytdyudwMOshKgVAPcp4fCYylcBNAZJG%2FCHde4L2sA1AyszYHhVHI490p5foUYVPEax0H8Z0oAmKs245SHl857heOQLhqrsavzLyz4bjH7vjc3F%2Fr71V%2FFA&X-Amz-Signature=949a56075f6a3d9347e866ee4d4e4359fb0bebc146b14b3a1592b99bb9c4ca14&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R2QPXJA%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T021656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEeZaskEgk37LKdIl8Bs4rxn208D3W7451iDVNCN1E%2BBAiEAzqPXh%2FSTHysndZ%2Fg9yxIzTIoPyiTsjOqoXVzBgTtZX4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEAFJ00ZRP0sC8gsTSrcA8XpfDX1KP2FRkhcI7F3%2FWAw57E4PTfB4xgcY5NAUnFnq7JabnW2zdcJoBVEpQUtGYJa5bg7sn4dY99IFqCfRBehQ%2BPAKXKxE569KtZ%2BKkw1zgr3wjFVsynyZPZKjxQlLkqWaHsf7Mepj67aU8yifLT3JR5CNVL8jngsbWNRHTwtKG1iqxNuDsF0x0Q55im5suN6xDH9CpVS%2FaxsXqMdowRBy2Wl%2BTd69jpjd0VlYzU1CUaz6Xis0M8oeQLwJOVm0raI8G%2FTrMBxTFeSFLS%2FO5gECVrkyfDSpuBNfWcoPLAo8RYEniTpk%2FfPT%2B4KUTeIvabdGc6dJfMQkp7pCWTzsjyXbc2oicKTlN8T%2BnWn7ywf2h385Ew7NntUgjH6i9qCbGHPUTQBx2aP3pv0SpyAKO1GJo0%2FvOuDUGVfTpX9Fowkww2zJfZFXojMzOQdaf72o2GVunmSx1l2aLkOlBbAyEDmKx088bIIe0Z09HUKenAZhKyvo9ch0q2QxwZLfJAS2F4MJKxAwIT43W%2BvYsxlotD1UxaTmb%2BGEM2CASy1NWAqAPBf4EXvc7Sdr5oZ%2FiBWH9bYrA2wFl4Fn5DXdL77RasSG9UBFDUnnYvPk8OeJXOTzRXG2%2BfnxkEMRTPPMPv1jr4GOqUBOvsF4fg9xF%2FlBrlxc36PKRHPVLq9T8WjLpEMZqCrpwqipFSlGmYhEVRFhqmUJjYmOibkSuhwJ7cVlaSNylFCj6V%2Bp85YvwnHFpHvQSytdyudwMOshKgVAPcp4fCYylcBNAZJG%2FCHde4L2sA1AyszYHhVHI490p5foUYVPEax0H8Z0oAmKs245SHl857heOQLhqrsavzLyz4bjH7vjc3F%2Fr71V%2FFA&X-Amz-Signature=7ffc965cbda65c2425dee033cef6a96a5b54f0f39eb61fbe8564f28d77a2b317&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667R2QPXJA%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T021656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIEeZaskEgk37LKdIl8Bs4rxn208D3W7451iDVNCN1E%2BBAiEAzqPXh%2FSTHysndZ%2Fg9yxIzTIoPyiTsjOqoXVzBgTtZX4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEAFJ00ZRP0sC8gsTSrcA8XpfDX1KP2FRkhcI7F3%2FWAw57E4PTfB4xgcY5NAUnFnq7JabnW2zdcJoBVEpQUtGYJa5bg7sn4dY99IFqCfRBehQ%2BPAKXKxE569KtZ%2BKkw1zgr3wjFVsynyZPZKjxQlLkqWaHsf7Mepj67aU8yifLT3JR5CNVL8jngsbWNRHTwtKG1iqxNuDsF0x0Q55im5suN6xDH9CpVS%2FaxsXqMdowRBy2Wl%2BTd69jpjd0VlYzU1CUaz6Xis0M8oeQLwJOVm0raI8G%2FTrMBxTFeSFLS%2FO5gECVrkyfDSpuBNfWcoPLAo8RYEniTpk%2FfPT%2B4KUTeIvabdGc6dJfMQkp7pCWTzsjyXbc2oicKTlN8T%2BnWn7ywf2h385Ew7NntUgjH6i9qCbGHPUTQBx2aP3pv0SpyAKO1GJo0%2FvOuDUGVfTpX9Fowkww2zJfZFXojMzOQdaf72o2GVunmSx1l2aLkOlBbAyEDmKx088bIIe0Z09HUKenAZhKyvo9ch0q2QxwZLfJAS2F4MJKxAwIT43W%2BvYsxlotD1UxaTmb%2BGEM2CASy1NWAqAPBf4EXvc7Sdr5oZ%2FiBWH9bYrA2wFl4Fn5DXdL77RasSG9UBFDUnnYvPk8OeJXOTzRXG2%2BfnxkEMRTPPMPv1jr4GOqUBOvsF4fg9xF%2FlBrlxc36PKRHPVLq9T8WjLpEMZqCrpwqipFSlGmYhEVRFhqmUJjYmOibkSuhwJ7cVlaSNylFCj6V%2Bp85YvwnHFpHvQSytdyudwMOshKgVAPcp4fCYylcBNAZJG%2FCHde4L2sA1AyszYHhVHI490p5foUYVPEax0H8Z0oAmKs245SHl857heOQLhqrsavzLyz4bjH7vjc3F%2Fr71V%2FFA&X-Amz-Signature=25efccd37eb2cebf6452435a4e449de628b12b8d3829e7ac18c1646997611ddd&X-Amz-SignedHeaders=host&x-id=GetObject)
