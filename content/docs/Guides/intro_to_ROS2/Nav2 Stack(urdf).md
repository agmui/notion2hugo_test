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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWP2SSUQ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDXzSy%2Bc542vQBfEH%2FQRtk0Tx3pJ0%2B9bD9iOD4mU1tO3QIhAJrSq33gvlhyYryNRjctxuD8Chnp8GvSsjy6kuxu%2FmIaKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw63ikGplolSl4DaFYq3AOXQimLXsZiVt7S3HpL3sHIk1Yp3zRvIDusg%2FxX8xm8lj4d%2Fw6vij%2BAsGdSFDJMX91c7eajRk7OpQSyDbeVOJWN%2BaDXRP1LqGD5%2Btj56viB2Mc9I%2BvRPlTe0p0RkFdJiLkqOEPZRTDwG235Foe%2FnmoRqkOFRVx5GZAYQan8Qbr1n8AY7Po4tD88vB%2BZUZ1VqE9yaXIYNdiDQUh3ZGfSTFMl%2FXdRith5qCvTPNylzFn2Ji6Zrw4V3cKO5%2Fa85hxvQHF5qhhAHF2zz5Q06szLePJ8VpgXICCIxZRlY4PMR92RNlyl3SxrEOMzxHTK0h%2BdnX2e28BVInUhJbfKmrUFG617bTb3UDj7lCyAHGZKoHxoIgnrQP%2FGqx0uKuLlp%2Bo5hhXNnOptVyKeMkJU8BIaOuMUcv55UmGd2%2B2VvsnvGV07b7y4%2BQHNwEZaUhNBbNeaGDgcHoX8B%2Fe5oOO%2BY9LP08BGgOlMypF1e6GbwfXcLd%2BZQ2BRlbmZDGYjjyB4AgAZ6IfJ7fWpwQFcNmCM25olAz%2FE%2BY7B8Wf6GPgJNsZNLS655xB1XZU08jaLTsn6H5fxzcyMliiyqyut3uJ%2BtjdnO5hkfRKSsAETdNjCQaIf115clYSkTjhgJZrhhVYk7DDgz9%2FCBjqkAV5II02RU7mh3F%2BrjlgjVGjeFRBMpvQfmqP5%2Bk%2FQtT%2F%2B5VLywdIFqhkWK0Rz5VxgIycJy%2BXjMmIHztLyaVildVX2lfmlQPc3Bl0LejOft7HpGyKO7TNlCvmmSN3MERoftvMvBnkz36vXftCCWBG5luFjLizj0yXqq6bfJ%2Bd5KeHnGyn%2BNnSDFd391o4K0IALAFpTIySmp1FlchlZGOiHgVTzLQHx&X-Amz-Signature=bae24ae643075c49815f8a680c930ce14f41e8ab3d1e93708814a4dacbee3469&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWP2SSUQ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDXzSy%2Bc542vQBfEH%2FQRtk0Tx3pJ0%2B9bD9iOD4mU1tO3QIhAJrSq33gvlhyYryNRjctxuD8Chnp8GvSsjy6kuxu%2FmIaKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw63ikGplolSl4DaFYq3AOXQimLXsZiVt7S3HpL3sHIk1Yp3zRvIDusg%2FxX8xm8lj4d%2Fw6vij%2BAsGdSFDJMX91c7eajRk7OpQSyDbeVOJWN%2BaDXRP1LqGD5%2Btj56viB2Mc9I%2BvRPlTe0p0RkFdJiLkqOEPZRTDwG235Foe%2FnmoRqkOFRVx5GZAYQan8Qbr1n8AY7Po4tD88vB%2BZUZ1VqE9yaXIYNdiDQUh3ZGfSTFMl%2FXdRith5qCvTPNylzFn2Ji6Zrw4V3cKO5%2Fa85hxvQHF5qhhAHF2zz5Q06szLePJ8VpgXICCIxZRlY4PMR92RNlyl3SxrEOMzxHTK0h%2BdnX2e28BVInUhJbfKmrUFG617bTb3UDj7lCyAHGZKoHxoIgnrQP%2FGqx0uKuLlp%2Bo5hhXNnOptVyKeMkJU8BIaOuMUcv55UmGd2%2B2VvsnvGV07b7y4%2BQHNwEZaUhNBbNeaGDgcHoX8B%2Fe5oOO%2BY9LP08BGgOlMypF1e6GbwfXcLd%2BZQ2BRlbmZDGYjjyB4AgAZ6IfJ7fWpwQFcNmCM25olAz%2FE%2BY7B8Wf6GPgJNsZNLS655xB1XZU08jaLTsn6H5fxzcyMliiyqyut3uJ%2BtjdnO5hkfRKSsAETdNjCQaIf115clYSkTjhgJZrhhVYk7DDgz9%2FCBjqkAV5II02RU7mh3F%2BrjlgjVGjeFRBMpvQfmqP5%2Bk%2FQtT%2F%2B5VLywdIFqhkWK0Rz5VxgIycJy%2BXjMmIHztLyaVildVX2lfmlQPc3Bl0LejOft7HpGyKO7TNlCvmmSN3MERoftvMvBnkz36vXftCCWBG5luFjLizj0yXqq6bfJ%2Bd5KeHnGyn%2BNnSDFd391o4K0IALAFpTIySmp1FlchlZGOiHgVTzLQHx&X-Amz-Signature=b187f1099f8f38efe5c07d2fd35c16ed74eae30350cb71056b4c25e50c59bf4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWP2SSUQ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDXzSy%2Bc542vQBfEH%2FQRtk0Tx3pJ0%2B9bD9iOD4mU1tO3QIhAJrSq33gvlhyYryNRjctxuD8Chnp8GvSsjy6kuxu%2FmIaKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw63ikGplolSl4DaFYq3AOXQimLXsZiVt7S3HpL3sHIk1Yp3zRvIDusg%2FxX8xm8lj4d%2Fw6vij%2BAsGdSFDJMX91c7eajRk7OpQSyDbeVOJWN%2BaDXRP1LqGD5%2Btj56viB2Mc9I%2BvRPlTe0p0RkFdJiLkqOEPZRTDwG235Foe%2FnmoRqkOFRVx5GZAYQan8Qbr1n8AY7Po4tD88vB%2BZUZ1VqE9yaXIYNdiDQUh3ZGfSTFMl%2FXdRith5qCvTPNylzFn2Ji6Zrw4V3cKO5%2Fa85hxvQHF5qhhAHF2zz5Q06szLePJ8VpgXICCIxZRlY4PMR92RNlyl3SxrEOMzxHTK0h%2BdnX2e28BVInUhJbfKmrUFG617bTb3UDj7lCyAHGZKoHxoIgnrQP%2FGqx0uKuLlp%2Bo5hhXNnOptVyKeMkJU8BIaOuMUcv55UmGd2%2B2VvsnvGV07b7y4%2BQHNwEZaUhNBbNeaGDgcHoX8B%2Fe5oOO%2BY9LP08BGgOlMypF1e6GbwfXcLd%2BZQ2BRlbmZDGYjjyB4AgAZ6IfJ7fWpwQFcNmCM25olAz%2FE%2BY7B8Wf6GPgJNsZNLS655xB1XZU08jaLTsn6H5fxzcyMliiyqyut3uJ%2BtjdnO5hkfRKSsAETdNjCQaIf115clYSkTjhgJZrhhVYk7DDgz9%2FCBjqkAV5II02RU7mh3F%2BrjlgjVGjeFRBMpvQfmqP5%2Bk%2FQtT%2F%2B5VLywdIFqhkWK0Rz5VxgIycJy%2BXjMmIHztLyaVildVX2lfmlQPc3Bl0LejOft7HpGyKO7TNlCvmmSN3MERoftvMvBnkz36vXftCCWBG5luFjLizj0yXqq6bfJ%2Bd5KeHnGyn%2BNnSDFd391o4K0IALAFpTIySmp1FlchlZGOiHgVTzLQHx&X-Amz-Signature=6073f32868fd5890dd11e8e70c02baf37a8c97c7dd87a56f2d206e9697d60216&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWP2SSUQ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDXzSy%2Bc542vQBfEH%2FQRtk0Tx3pJ0%2B9bD9iOD4mU1tO3QIhAJrSq33gvlhyYryNRjctxuD8Chnp8GvSsjy6kuxu%2FmIaKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw63ikGplolSl4DaFYq3AOXQimLXsZiVt7S3HpL3sHIk1Yp3zRvIDusg%2FxX8xm8lj4d%2Fw6vij%2BAsGdSFDJMX91c7eajRk7OpQSyDbeVOJWN%2BaDXRP1LqGD5%2Btj56viB2Mc9I%2BvRPlTe0p0RkFdJiLkqOEPZRTDwG235Foe%2FnmoRqkOFRVx5GZAYQan8Qbr1n8AY7Po4tD88vB%2BZUZ1VqE9yaXIYNdiDQUh3ZGfSTFMl%2FXdRith5qCvTPNylzFn2Ji6Zrw4V3cKO5%2Fa85hxvQHF5qhhAHF2zz5Q06szLePJ8VpgXICCIxZRlY4PMR92RNlyl3SxrEOMzxHTK0h%2BdnX2e28BVInUhJbfKmrUFG617bTb3UDj7lCyAHGZKoHxoIgnrQP%2FGqx0uKuLlp%2Bo5hhXNnOptVyKeMkJU8BIaOuMUcv55UmGd2%2B2VvsnvGV07b7y4%2BQHNwEZaUhNBbNeaGDgcHoX8B%2Fe5oOO%2BY9LP08BGgOlMypF1e6GbwfXcLd%2BZQ2BRlbmZDGYjjyB4AgAZ6IfJ7fWpwQFcNmCM25olAz%2FE%2BY7B8Wf6GPgJNsZNLS655xB1XZU08jaLTsn6H5fxzcyMliiyqyut3uJ%2BtjdnO5hkfRKSsAETdNjCQaIf115clYSkTjhgJZrhhVYk7DDgz9%2FCBjqkAV5II02RU7mh3F%2BrjlgjVGjeFRBMpvQfmqP5%2Bk%2FQtT%2F%2B5VLywdIFqhkWK0Rz5VxgIycJy%2BXjMmIHztLyaVildVX2lfmlQPc3Bl0LejOft7HpGyKO7TNlCvmmSN3MERoftvMvBnkz36vXftCCWBG5luFjLizj0yXqq6bfJ%2Bd5KeHnGyn%2BNnSDFd391o4K0IALAFpTIySmp1FlchlZGOiHgVTzLQHx&X-Amz-Signature=0251b7372f9554bfa41747813b22ac774ec87dd43a23c2268db0afea5fbb3b4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWP2SSUQ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDXzSy%2Bc542vQBfEH%2FQRtk0Tx3pJ0%2B9bD9iOD4mU1tO3QIhAJrSq33gvlhyYryNRjctxuD8Chnp8GvSsjy6kuxu%2FmIaKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw63ikGplolSl4DaFYq3AOXQimLXsZiVt7S3HpL3sHIk1Yp3zRvIDusg%2FxX8xm8lj4d%2Fw6vij%2BAsGdSFDJMX91c7eajRk7OpQSyDbeVOJWN%2BaDXRP1LqGD5%2Btj56viB2Mc9I%2BvRPlTe0p0RkFdJiLkqOEPZRTDwG235Foe%2FnmoRqkOFRVx5GZAYQan8Qbr1n8AY7Po4tD88vB%2BZUZ1VqE9yaXIYNdiDQUh3ZGfSTFMl%2FXdRith5qCvTPNylzFn2Ji6Zrw4V3cKO5%2Fa85hxvQHF5qhhAHF2zz5Q06szLePJ8VpgXICCIxZRlY4PMR92RNlyl3SxrEOMzxHTK0h%2BdnX2e28BVInUhJbfKmrUFG617bTb3UDj7lCyAHGZKoHxoIgnrQP%2FGqx0uKuLlp%2Bo5hhXNnOptVyKeMkJU8BIaOuMUcv55UmGd2%2B2VvsnvGV07b7y4%2BQHNwEZaUhNBbNeaGDgcHoX8B%2Fe5oOO%2BY9LP08BGgOlMypF1e6GbwfXcLd%2BZQ2BRlbmZDGYjjyB4AgAZ6IfJ7fWpwQFcNmCM25olAz%2FE%2BY7B8Wf6GPgJNsZNLS655xB1XZU08jaLTsn6H5fxzcyMliiyqyut3uJ%2BtjdnO5hkfRKSsAETdNjCQaIf115clYSkTjhgJZrhhVYk7DDgz9%2FCBjqkAV5II02RU7mh3F%2BrjlgjVGjeFRBMpvQfmqP5%2Bk%2FQtT%2F%2B5VLywdIFqhkWK0Rz5VxgIycJy%2BXjMmIHztLyaVildVX2lfmlQPc3Bl0LejOft7HpGyKO7TNlCvmmSN3MERoftvMvBnkz36vXftCCWBG5luFjLizj0yXqq6bfJ%2Bd5KeHnGyn%2BNnSDFd391o4K0IALAFpTIySmp1FlchlZGOiHgVTzLQHx&X-Amz-Signature=81fb8cf71c8c149e97f6cf769357d68688a6acb802d1a4a33b0abfb4d43f4233&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWP2SSUQ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T160912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDXzSy%2Bc542vQBfEH%2FQRtk0Tx3pJ0%2B9bD9iOD4mU1tO3QIhAJrSq33gvlhyYryNRjctxuD8Chnp8GvSsjy6kuxu%2FmIaKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw63ikGplolSl4DaFYq3AOXQimLXsZiVt7S3HpL3sHIk1Yp3zRvIDusg%2FxX8xm8lj4d%2Fw6vij%2BAsGdSFDJMX91c7eajRk7OpQSyDbeVOJWN%2BaDXRP1LqGD5%2Btj56viB2Mc9I%2BvRPlTe0p0RkFdJiLkqOEPZRTDwG235Foe%2FnmoRqkOFRVx5GZAYQan8Qbr1n8AY7Po4tD88vB%2BZUZ1VqE9yaXIYNdiDQUh3ZGfSTFMl%2FXdRith5qCvTPNylzFn2Ji6Zrw4V3cKO5%2Fa85hxvQHF5qhhAHF2zz5Q06szLePJ8VpgXICCIxZRlY4PMR92RNlyl3SxrEOMzxHTK0h%2BdnX2e28BVInUhJbfKmrUFG617bTb3UDj7lCyAHGZKoHxoIgnrQP%2FGqx0uKuLlp%2Bo5hhXNnOptVyKeMkJU8BIaOuMUcv55UmGd2%2B2VvsnvGV07b7y4%2BQHNwEZaUhNBbNeaGDgcHoX8B%2Fe5oOO%2BY9LP08BGgOlMypF1e6GbwfXcLd%2BZQ2BRlbmZDGYjjyB4AgAZ6IfJ7fWpwQFcNmCM25olAz%2FE%2BY7B8Wf6GPgJNsZNLS655xB1XZU08jaLTsn6H5fxzcyMliiyqyut3uJ%2BtjdnO5hkfRKSsAETdNjCQaIf115clYSkTjhgJZrhhVYk7DDgz9%2FCBjqkAV5II02RU7mh3F%2BrjlgjVGjeFRBMpvQfmqP5%2Bk%2FQtT%2F%2B5VLywdIFqhkWK0Rz5VxgIycJy%2BXjMmIHztLyaVildVX2lfmlQPc3Bl0LejOft7HpGyKO7TNlCvmmSN3MERoftvMvBnkz36vXftCCWBG5luFjLizj0yXqq6bfJ%2Bd5KeHnGyn%2BNnSDFd391o4K0IALAFpTIySmp1FlchlZGOiHgVTzLQHx&X-Amz-Signature=3a36672ff14f25d4ef3c383157a814ca6f4b34bc8fa5b86d523c5c04e08ade6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
