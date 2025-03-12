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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X5LJQL2%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCa%2F9y6eYmVfakVRQke2O0nMZwq1mZERtumLt2sEG%2BRfQIgUHEmw%2FXgz7eRzS55H9jsMjYBXKawhJQaAdpqvjx%2BgqIqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGv6Z1VItsnGPQT4qCrcA1elrCHH8H2mr4mtq%2BFi5C2CtxjJsVb2TfU4xuJ5AEMJFNUXUn3SgbzV3hYyl6ic15KnQ5a5hJnPtuCihX%2FdY9lRUBvYJua%2BVWiNN%2ByqwafkndChT6%2FMxTmW0w6ThdhuOeAvH4ckz2QVIlNmuX2K25pXFwTUW9pz8849FzF5QGtlSpzHJA1JwL9zF1kL1lQs6RrdwM4iBA%2FaaxYaDLMjgpFF91ZVRiGVWxqu5aQIu5KGIxD6xLK5X7m4z4yUBtDGzSrd5jhjgFL%2FpuT3RcUY51AucPOvC62yys41f5N%2F5nJ1s%2FF2yVB97u%2F4u67jTvHLaMk6GTw2Ox5XTJTw2fU5VLBqs%2Fo1zD6%2FelKX57mv1lrPsPz1pV2ymju1p%2B5xcn8DB3l9YcP4Ed6bkXfmWTr%2BcRIOQZswkW%2B5kMeo8%2B4rQzhWqpRUnHdLHOOVGCR0TAY4oig9YdfmVAaXx0AzU%2FhUIbh7vOOHSyu51HoNH38%2B42mPmqv%2BpwdT0DTaOdgIoWzM7%2BnIWOtsAVg3PVb9MpBVahACMECbnJmWkGb2rgzdmIUgOjcyZgD%2Bn8b8qJLBUGT%2BzmCdiTnMl0%2B5lnjjfhDJ5z1FTuPHuPDP5NWhcXUT3dzzcJQBquIeQ1Odtao7MP6ix74GOqUBTfWqXBgG5jXMWeFk2f%2B1nqsp%2BX8JwQ%2BpDNRJ4yp9vGv4ViDooD4CvNcfylFmGNgZ8aoSxSDjby2%2B0MxRPGP0IRPbRk67fJyGFcPD9d3GGjsdk1ZiDXGkYk87XJCVrIfY3TZKKBna49hmgRgZYRdo9JQgrZ1iNDD%2BtTwpq6Gdw21koICPaF90Jn7wsg5FlIk66oVAqDIIolkswsnBS9IOe4kJcDo0&X-Amz-Signature=5f9c07d645b09cbc6100588f820bef304fdebc90a579f59caec591f763e9ff18&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X5LJQL2%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCa%2F9y6eYmVfakVRQke2O0nMZwq1mZERtumLt2sEG%2BRfQIgUHEmw%2FXgz7eRzS55H9jsMjYBXKawhJQaAdpqvjx%2BgqIqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGv6Z1VItsnGPQT4qCrcA1elrCHH8H2mr4mtq%2BFi5C2CtxjJsVb2TfU4xuJ5AEMJFNUXUn3SgbzV3hYyl6ic15KnQ5a5hJnPtuCihX%2FdY9lRUBvYJua%2BVWiNN%2ByqwafkndChT6%2FMxTmW0w6ThdhuOeAvH4ckz2QVIlNmuX2K25pXFwTUW9pz8849FzF5QGtlSpzHJA1JwL9zF1kL1lQs6RrdwM4iBA%2FaaxYaDLMjgpFF91ZVRiGVWxqu5aQIu5KGIxD6xLK5X7m4z4yUBtDGzSrd5jhjgFL%2FpuT3RcUY51AucPOvC62yys41f5N%2F5nJ1s%2FF2yVB97u%2F4u67jTvHLaMk6GTw2Ox5XTJTw2fU5VLBqs%2Fo1zD6%2FelKX57mv1lrPsPz1pV2ymju1p%2B5xcn8DB3l9YcP4Ed6bkXfmWTr%2BcRIOQZswkW%2B5kMeo8%2B4rQzhWqpRUnHdLHOOVGCR0TAY4oig9YdfmVAaXx0AzU%2FhUIbh7vOOHSyu51HoNH38%2B42mPmqv%2BpwdT0DTaOdgIoWzM7%2BnIWOtsAVg3PVb9MpBVahACMECbnJmWkGb2rgzdmIUgOjcyZgD%2Bn8b8qJLBUGT%2BzmCdiTnMl0%2B5lnjjfhDJ5z1FTuPHuPDP5NWhcXUT3dzzcJQBquIeQ1Odtao7MP6ix74GOqUBTfWqXBgG5jXMWeFk2f%2B1nqsp%2BX8JwQ%2BpDNRJ4yp9vGv4ViDooD4CvNcfylFmGNgZ8aoSxSDjby2%2B0MxRPGP0IRPbRk67fJyGFcPD9d3GGjsdk1ZiDXGkYk87XJCVrIfY3TZKKBna49hmgRgZYRdo9JQgrZ1iNDD%2BtTwpq6Gdw21koICPaF90Jn7wsg5FlIk66oVAqDIIolkswsnBS9IOe4kJcDo0&X-Amz-Signature=16010131a8f42785a568b64634528573b800da791c167f58fbd843e353c6ae64&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X5LJQL2%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCa%2F9y6eYmVfakVRQke2O0nMZwq1mZERtumLt2sEG%2BRfQIgUHEmw%2FXgz7eRzS55H9jsMjYBXKawhJQaAdpqvjx%2BgqIqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGv6Z1VItsnGPQT4qCrcA1elrCHH8H2mr4mtq%2BFi5C2CtxjJsVb2TfU4xuJ5AEMJFNUXUn3SgbzV3hYyl6ic15KnQ5a5hJnPtuCihX%2FdY9lRUBvYJua%2BVWiNN%2ByqwafkndChT6%2FMxTmW0w6ThdhuOeAvH4ckz2QVIlNmuX2K25pXFwTUW9pz8849FzF5QGtlSpzHJA1JwL9zF1kL1lQs6RrdwM4iBA%2FaaxYaDLMjgpFF91ZVRiGVWxqu5aQIu5KGIxD6xLK5X7m4z4yUBtDGzSrd5jhjgFL%2FpuT3RcUY51AucPOvC62yys41f5N%2F5nJ1s%2FF2yVB97u%2F4u67jTvHLaMk6GTw2Ox5XTJTw2fU5VLBqs%2Fo1zD6%2FelKX57mv1lrPsPz1pV2ymju1p%2B5xcn8DB3l9YcP4Ed6bkXfmWTr%2BcRIOQZswkW%2B5kMeo8%2B4rQzhWqpRUnHdLHOOVGCR0TAY4oig9YdfmVAaXx0AzU%2FhUIbh7vOOHSyu51HoNH38%2B42mPmqv%2BpwdT0DTaOdgIoWzM7%2BnIWOtsAVg3PVb9MpBVahACMECbnJmWkGb2rgzdmIUgOjcyZgD%2Bn8b8qJLBUGT%2BzmCdiTnMl0%2B5lnjjfhDJ5z1FTuPHuPDP5NWhcXUT3dzzcJQBquIeQ1Odtao7MP6ix74GOqUBTfWqXBgG5jXMWeFk2f%2B1nqsp%2BX8JwQ%2BpDNRJ4yp9vGv4ViDooD4CvNcfylFmGNgZ8aoSxSDjby2%2B0MxRPGP0IRPbRk67fJyGFcPD9d3GGjsdk1ZiDXGkYk87XJCVrIfY3TZKKBna49hmgRgZYRdo9JQgrZ1iNDD%2BtTwpq6Gdw21koICPaF90Jn7wsg5FlIk66oVAqDIIolkswsnBS9IOe4kJcDo0&X-Amz-Signature=25ee014ad1931eed071a7c2122d88c43c3358a4527861ade9305c7588fb500c3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X5LJQL2%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCa%2F9y6eYmVfakVRQke2O0nMZwq1mZERtumLt2sEG%2BRfQIgUHEmw%2FXgz7eRzS55H9jsMjYBXKawhJQaAdpqvjx%2BgqIqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGv6Z1VItsnGPQT4qCrcA1elrCHH8H2mr4mtq%2BFi5C2CtxjJsVb2TfU4xuJ5AEMJFNUXUn3SgbzV3hYyl6ic15KnQ5a5hJnPtuCihX%2FdY9lRUBvYJua%2BVWiNN%2ByqwafkndChT6%2FMxTmW0w6ThdhuOeAvH4ckz2QVIlNmuX2K25pXFwTUW9pz8849FzF5QGtlSpzHJA1JwL9zF1kL1lQs6RrdwM4iBA%2FaaxYaDLMjgpFF91ZVRiGVWxqu5aQIu5KGIxD6xLK5X7m4z4yUBtDGzSrd5jhjgFL%2FpuT3RcUY51AucPOvC62yys41f5N%2F5nJ1s%2FF2yVB97u%2F4u67jTvHLaMk6GTw2Ox5XTJTw2fU5VLBqs%2Fo1zD6%2FelKX57mv1lrPsPz1pV2ymju1p%2B5xcn8DB3l9YcP4Ed6bkXfmWTr%2BcRIOQZswkW%2B5kMeo8%2B4rQzhWqpRUnHdLHOOVGCR0TAY4oig9YdfmVAaXx0AzU%2FhUIbh7vOOHSyu51HoNH38%2B42mPmqv%2BpwdT0DTaOdgIoWzM7%2BnIWOtsAVg3PVb9MpBVahACMECbnJmWkGb2rgzdmIUgOjcyZgD%2Bn8b8qJLBUGT%2BzmCdiTnMl0%2B5lnjjfhDJ5z1FTuPHuPDP5NWhcXUT3dzzcJQBquIeQ1Odtao7MP6ix74GOqUBTfWqXBgG5jXMWeFk2f%2B1nqsp%2BX8JwQ%2BpDNRJ4yp9vGv4ViDooD4CvNcfylFmGNgZ8aoSxSDjby2%2B0MxRPGP0IRPbRk67fJyGFcPD9d3GGjsdk1ZiDXGkYk87XJCVrIfY3TZKKBna49hmgRgZYRdo9JQgrZ1iNDD%2BtTwpq6Gdw21koICPaF90Jn7wsg5FlIk66oVAqDIIolkswsnBS9IOe4kJcDo0&X-Amz-Signature=c267854f03ca5d18f2892df1a27f2489f079b022559232d2b1d946887eb4cbad&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X5LJQL2%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCa%2F9y6eYmVfakVRQke2O0nMZwq1mZERtumLt2sEG%2BRfQIgUHEmw%2FXgz7eRzS55H9jsMjYBXKawhJQaAdpqvjx%2BgqIqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGv6Z1VItsnGPQT4qCrcA1elrCHH8H2mr4mtq%2BFi5C2CtxjJsVb2TfU4xuJ5AEMJFNUXUn3SgbzV3hYyl6ic15KnQ5a5hJnPtuCihX%2FdY9lRUBvYJua%2BVWiNN%2ByqwafkndChT6%2FMxTmW0w6ThdhuOeAvH4ckz2QVIlNmuX2K25pXFwTUW9pz8849FzF5QGtlSpzHJA1JwL9zF1kL1lQs6RrdwM4iBA%2FaaxYaDLMjgpFF91ZVRiGVWxqu5aQIu5KGIxD6xLK5X7m4z4yUBtDGzSrd5jhjgFL%2FpuT3RcUY51AucPOvC62yys41f5N%2F5nJ1s%2FF2yVB97u%2F4u67jTvHLaMk6GTw2Ox5XTJTw2fU5VLBqs%2Fo1zD6%2FelKX57mv1lrPsPz1pV2ymju1p%2B5xcn8DB3l9YcP4Ed6bkXfmWTr%2BcRIOQZswkW%2B5kMeo8%2B4rQzhWqpRUnHdLHOOVGCR0TAY4oig9YdfmVAaXx0AzU%2FhUIbh7vOOHSyu51HoNH38%2B42mPmqv%2BpwdT0DTaOdgIoWzM7%2BnIWOtsAVg3PVb9MpBVahACMECbnJmWkGb2rgzdmIUgOjcyZgD%2Bn8b8qJLBUGT%2BzmCdiTnMl0%2B5lnjjfhDJ5z1FTuPHuPDP5NWhcXUT3dzzcJQBquIeQ1Odtao7MP6ix74GOqUBTfWqXBgG5jXMWeFk2f%2B1nqsp%2BX8JwQ%2BpDNRJ4yp9vGv4ViDooD4CvNcfylFmGNgZ8aoSxSDjby2%2B0MxRPGP0IRPbRk67fJyGFcPD9d3GGjsdk1ZiDXGkYk87XJCVrIfY3TZKKBna49hmgRgZYRdo9JQgrZ1iNDD%2BtTwpq6Gdw21koICPaF90Jn7wsg5FlIk66oVAqDIIolkswsnBS9IOe4kJcDo0&X-Amz-Signature=3d466623941fdd0bc17c80516e14cf3c52846f66be11f06eeab3a85fb578ae31&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667X5LJQL2%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T190212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCa%2F9y6eYmVfakVRQke2O0nMZwq1mZERtumLt2sEG%2BRfQIgUHEmw%2FXgz7eRzS55H9jsMjYBXKawhJQaAdpqvjx%2BgqIqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGv6Z1VItsnGPQT4qCrcA1elrCHH8H2mr4mtq%2BFi5C2CtxjJsVb2TfU4xuJ5AEMJFNUXUn3SgbzV3hYyl6ic15KnQ5a5hJnPtuCihX%2FdY9lRUBvYJua%2BVWiNN%2ByqwafkndChT6%2FMxTmW0w6ThdhuOeAvH4ckz2QVIlNmuX2K25pXFwTUW9pz8849FzF5QGtlSpzHJA1JwL9zF1kL1lQs6RrdwM4iBA%2FaaxYaDLMjgpFF91ZVRiGVWxqu5aQIu5KGIxD6xLK5X7m4z4yUBtDGzSrd5jhjgFL%2FpuT3RcUY51AucPOvC62yys41f5N%2F5nJ1s%2FF2yVB97u%2F4u67jTvHLaMk6GTw2Ox5XTJTw2fU5VLBqs%2Fo1zD6%2FelKX57mv1lrPsPz1pV2ymju1p%2B5xcn8DB3l9YcP4Ed6bkXfmWTr%2BcRIOQZswkW%2B5kMeo8%2B4rQzhWqpRUnHdLHOOVGCR0TAY4oig9YdfmVAaXx0AzU%2FhUIbh7vOOHSyu51HoNH38%2B42mPmqv%2BpwdT0DTaOdgIoWzM7%2BnIWOtsAVg3PVb9MpBVahACMECbnJmWkGb2rgzdmIUgOjcyZgD%2Bn8b8qJLBUGT%2BzmCdiTnMl0%2B5lnjjfhDJ5z1FTuPHuPDP5NWhcXUT3dzzcJQBquIeQ1Odtao7MP6ix74GOqUBTfWqXBgG5jXMWeFk2f%2B1nqsp%2BX8JwQ%2BpDNRJ4yp9vGv4ViDooD4CvNcfylFmGNgZ8aoSxSDjby2%2B0MxRPGP0IRPbRk67fJyGFcPD9d3GGjsdk1ZiDXGkYk87XJCVrIfY3TZKKBna49hmgRgZYRdo9JQgrZ1iNDD%2BtTwpq6Gdw21koICPaF90Jn7wsg5FlIk66oVAqDIIolkswsnBS9IOe4kJcDo0&X-Amz-Signature=bdf964f07442d432e8a136b3a33d4cfd5304f104590a32f3a1e001ce50b2d0d2&X-Amz-SignedHeaders=host&x-id=GetObject)
