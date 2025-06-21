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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIILS4F3%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T041322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCO2iZORinRMyY2y%2Fjlbg0oRtcXToAJmjsCm7WPYRwnBQIgRWHal0OR3LCKBxLNbgsL%2Bq21NnDasPdSSGxD%2FsyjovEqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYtDIVi53YmJcuatSrcA1zz8FRsLHaJVkVkxw%2FmUSJ0PBEhzihXPf2U0WMuo9Rq9oariaG1UmVOKrLToB5%2FTYJISlIODdvwqN1uOqf7hWAr9rZ8AYjhK63TVdXEZbNWBZfw%2B3m%2BntpLJGKqiTaogs7NMLw%2BNZIYu2UNIR2IaICoEKhyiGkt8obDoDR6zUtyHtUfrYJOWHcw6lDvbMAdFjW36WuF%2BkCXnHFnU7U8tZCL3uuNzM82xMEkVv5kmzmCKQ8aJQQwSN948c%2BDIrq59Be64Gtl9qjswTNiAN6eH5A2Fot0V9lZydWo1ZkEUxQ783vUteYFRZnx17%2FkSZJq5Z9G7BhWwwb9pm1Z02pSUY8YSnkHPBI4S8owwVicKPZdhSSUbFaeOFFnNRMPF4YxQGHLGdvcl5WJeoIZbZcdqY%2BZ8SArj%2FPiAJgJFn57M21NryLoF772daP%2FJBCcHKwpIEbThjCr94atUXNgEoqr6IhYqlKVYaJU101sAAR4h1Pe%2Blgy9Bg9lAjPg%2Bcnt4wU8OHB7vqdfrFxGarW9ON5asBlX4JjY9Mb5EuC0LxV6ackPfdRueiGgl5kgJOrQLrH%2FsK2AgOwlv21ZKpN8J036jk90cl1sTYNOjv0Qkw6E5ITKMghjtDZI4rim%2FvUMJew2MIGOqUB0mp8WUM%2FzephVcFv5F0%2BmQKlzDd4jfgl624c467bKbYKnuB1FfzKrDgEiTka8sG0qX7jLMI6ylcufUUaDiZeq5jU7vV0fnSak7Oea0tTp04lZ1UHiLG5AadDIQ5UaRD3E0wPHpctSq5PSdq3Azx3v37Fbbnp%2B5tATb8YrZ4ZkrPhgoCw5xLJ1mvDbFje178d8jWumiQ%2BH2GtGN0XD5trhCG7ekIV&X-Amz-Signature=32d73b80ea66fde8bcae8c1f80e94150418df86fbd12944a2850ad2032f2f11a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIILS4F3%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T041322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCO2iZORinRMyY2y%2Fjlbg0oRtcXToAJmjsCm7WPYRwnBQIgRWHal0OR3LCKBxLNbgsL%2Bq21NnDasPdSSGxD%2FsyjovEqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYtDIVi53YmJcuatSrcA1zz8FRsLHaJVkVkxw%2FmUSJ0PBEhzihXPf2U0WMuo9Rq9oariaG1UmVOKrLToB5%2FTYJISlIODdvwqN1uOqf7hWAr9rZ8AYjhK63TVdXEZbNWBZfw%2B3m%2BntpLJGKqiTaogs7NMLw%2BNZIYu2UNIR2IaICoEKhyiGkt8obDoDR6zUtyHtUfrYJOWHcw6lDvbMAdFjW36WuF%2BkCXnHFnU7U8tZCL3uuNzM82xMEkVv5kmzmCKQ8aJQQwSN948c%2BDIrq59Be64Gtl9qjswTNiAN6eH5A2Fot0V9lZydWo1ZkEUxQ783vUteYFRZnx17%2FkSZJq5Z9G7BhWwwb9pm1Z02pSUY8YSnkHPBI4S8owwVicKPZdhSSUbFaeOFFnNRMPF4YxQGHLGdvcl5WJeoIZbZcdqY%2BZ8SArj%2FPiAJgJFn57M21NryLoF772daP%2FJBCcHKwpIEbThjCr94atUXNgEoqr6IhYqlKVYaJU101sAAR4h1Pe%2Blgy9Bg9lAjPg%2Bcnt4wU8OHB7vqdfrFxGarW9ON5asBlX4JjY9Mb5EuC0LxV6ackPfdRueiGgl5kgJOrQLrH%2FsK2AgOwlv21ZKpN8J036jk90cl1sTYNOjv0Qkw6E5ITKMghjtDZI4rim%2FvUMJew2MIGOqUB0mp8WUM%2FzephVcFv5F0%2BmQKlzDd4jfgl624c467bKbYKnuB1FfzKrDgEiTka8sG0qX7jLMI6ylcufUUaDiZeq5jU7vV0fnSak7Oea0tTp04lZ1UHiLG5AadDIQ5UaRD3E0wPHpctSq5PSdq3Azx3v37Fbbnp%2B5tATb8YrZ4ZkrPhgoCw5xLJ1mvDbFje178d8jWumiQ%2BH2GtGN0XD5trhCG7ekIV&X-Amz-Signature=139160f2c0ffef690ddb06335fae8d30381571380e9115211f26c6a580daee14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIILS4F3%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T041322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCO2iZORinRMyY2y%2Fjlbg0oRtcXToAJmjsCm7WPYRwnBQIgRWHal0OR3LCKBxLNbgsL%2Bq21NnDasPdSSGxD%2FsyjovEqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYtDIVi53YmJcuatSrcA1zz8FRsLHaJVkVkxw%2FmUSJ0PBEhzihXPf2U0WMuo9Rq9oariaG1UmVOKrLToB5%2FTYJISlIODdvwqN1uOqf7hWAr9rZ8AYjhK63TVdXEZbNWBZfw%2B3m%2BntpLJGKqiTaogs7NMLw%2BNZIYu2UNIR2IaICoEKhyiGkt8obDoDR6zUtyHtUfrYJOWHcw6lDvbMAdFjW36WuF%2BkCXnHFnU7U8tZCL3uuNzM82xMEkVv5kmzmCKQ8aJQQwSN948c%2BDIrq59Be64Gtl9qjswTNiAN6eH5A2Fot0V9lZydWo1ZkEUxQ783vUteYFRZnx17%2FkSZJq5Z9G7BhWwwb9pm1Z02pSUY8YSnkHPBI4S8owwVicKPZdhSSUbFaeOFFnNRMPF4YxQGHLGdvcl5WJeoIZbZcdqY%2BZ8SArj%2FPiAJgJFn57M21NryLoF772daP%2FJBCcHKwpIEbThjCr94atUXNgEoqr6IhYqlKVYaJU101sAAR4h1Pe%2Blgy9Bg9lAjPg%2Bcnt4wU8OHB7vqdfrFxGarW9ON5asBlX4JjY9Mb5EuC0LxV6ackPfdRueiGgl5kgJOrQLrH%2FsK2AgOwlv21ZKpN8J036jk90cl1sTYNOjv0Qkw6E5ITKMghjtDZI4rim%2FvUMJew2MIGOqUB0mp8WUM%2FzephVcFv5F0%2BmQKlzDd4jfgl624c467bKbYKnuB1FfzKrDgEiTka8sG0qX7jLMI6ylcufUUaDiZeq5jU7vV0fnSak7Oea0tTp04lZ1UHiLG5AadDIQ5UaRD3E0wPHpctSq5PSdq3Azx3v37Fbbnp%2B5tATb8YrZ4ZkrPhgoCw5xLJ1mvDbFje178d8jWumiQ%2BH2GtGN0XD5trhCG7ekIV&X-Amz-Signature=fb649f6b834fcfc98d8bef5883490f6598d400e5708f9a148049bd06a8bf413f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIILS4F3%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T041322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCO2iZORinRMyY2y%2Fjlbg0oRtcXToAJmjsCm7WPYRwnBQIgRWHal0OR3LCKBxLNbgsL%2Bq21NnDasPdSSGxD%2FsyjovEqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYtDIVi53YmJcuatSrcA1zz8FRsLHaJVkVkxw%2FmUSJ0PBEhzihXPf2U0WMuo9Rq9oariaG1UmVOKrLToB5%2FTYJISlIODdvwqN1uOqf7hWAr9rZ8AYjhK63TVdXEZbNWBZfw%2B3m%2BntpLJGKqiTaogs7NMLw%2BNZIYu2UNIR2IaICoEKhyiGkt8obDoDR6zUtyHtUfrYJOWHcw6lDvbMAdFjW36WuF%2BkCXnHFnU7U8tZCL3uuNzM82xMEkVv5kmzmCKQ8aJQQwSN948c%2BDIrq59Be64Gtl9qjswTNiAN6eH5A2Fot0V9lZydWo1ZkEUxQ783vUteYFRZnx17%2FkSZJq5Z9G7BhWwwb9pm1Z02pSUY8YSnkHPBI4S8owwVicKPZdhSSUbFaeOFFnNRMPF4YxQGHLGdvcl5WJeoIZbZcdqY%2BZ8SArj%2FPiAJgJFn57M21NryLoF772daP%2FJBCcHKwpIEbThjCr94atUXNgEoqr6IhYqlKVYaJU101sAAR4h1Pe%2Blgy9Bg9lAjPg%2Bcnt4wU8OHB7vqdfrFxGarW9ON5asBlX4JjY9Mb5EuC0LxV6ackPfdRueiGgl5kgJOrQLrH%2FsK2AgOwlv21ZKpN8J036jk90cl1sTYNOjv0Qkw6E5ITKMghjtDZI4rim%2FvUMJew2MIGOqUB0mp8WUM%2FzephVcFv5F0%2BmQKlzDd4jfgl624c467bKbYKnuB1FfzKrDgEiTka8sG0qX7jLMI6ylcufUUaDiZeq5jU7vV0fnSak7Oea0tTp04lZ1UHiLG5AadDIQ5UaRD3E0wPHpctSq5PSdq3Azx3v37Fbbnp%2B5tATb8YrZ4ZkrPhgoCw5xLJ1mvDbFje178d8jWumiQ%2BH2GtGN0XD5trhCG7ekIV&X-Amz-Signature=28fa6bd5bfa89f532892ddceea9f6fefb75762e54f53faf868c94e5074481db4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIILS4F3%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T041322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCO2iZORinRMyY2y%2Fjlbg0oRtcXToAJmjsCm7WPYRwnBQIgRWHal0OR3LCKBxLNbgsL%2Bq21NnDasPdSSGxD%2FsyjovEqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYtDIVi53YmJcuatSrcA1zz8FRsLHaJVkVkxw%2FmUSJ0PBEhzihXPf2U0WMuo9Rq9oariaG1UmVOKrLToB5%2FTYJISlIODdvwqN1uOqf7hWAr9rZ8AYjhK63TVdXEZbNWBZfw%2B3m%2BntpLJGKqiTaogs7NMLw%2BNZIYu2UNIR2IaICoEKhyiGkt8obDoDR6zUtyHtUfrYJOWHcw6lDvbMAdFjW36WuF%2BkCXnHFnU7U8tZCL3uuNzM82xMEkVv5kmzmCKQ8aJQQwSN948c%2BDIrq59Be64Gtl9qjswTNiAN6eH5A2Fot0V9lZydWo1ZkEUxQ783vUteYFRZnx17%2FkSZJq5Z9G7BhWwwb9pm1Z02pSUY8YSnkHPBI4S8owwVicKPZdhSSUbFaeOFFnNRMPF4YxQGHLGdvcl5WJeoIZbZcdqY%2BZ8SArj%2FPiAJgJFn57M21NryLoF772daP%2FJBCcHKwpIEbThjCr94atUXNgEoqr6IhYqlKVYaJU101sAAR4h1Pe%2Blgy9Bg9lAjPg%2Bcnt4wU8OHB7vqdfrFxGarW9ON5asBlX4JjY9Mb5EuC0LxV6ackPfdRueiGgl5kgJOrQLrH%2FsK2AgOwlv21ZKpN8J036jk90cl1sTYNOjv0Qkw6E5ITKMghjtDZI4rim%2FvUMJew2MIGOqUB0mp8WUM%2FzephVcFv5F0%2BmQKlzDd4jfgl624c467bKbYKnuB1FfzKrDgEiTka8sG0qX7jLMI6ylcufUUaDiZeq5jU7vV0fnSak7Oea0tTp04lZ1UHiLG5AadDIQ5UaRD3E0wPHpctSq5PSdq3Azx3v37Fbbnp%2B5tATb8YrZ4ZkrPhgoCw5xLJ1mvDbFje178d8jWumiQ%2BH2GtGN0XD5trhCG7ekIV&X-Amz-Signature=e1eed76a9296c3b7a57a4de4dc4f76cfe3419edad63c7662007f01acfb78aa6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIILS4F3%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T041322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCO2iZORinRMyY2y%2Fjlbg0oRtcXToAJmjsCm7WPYRwnBQIgRWHal0OR3LCKBxLNbgsL%2Bq21NnDasPdSSGxD%2FsyjovEqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYtDIVi53YmJcuatSrcA1zz8FRsLHaJVkVkxw%2FmUSJ0PBEhzihXPf2U0WMuo9Rq9oariaG1UmVOKrLToB5%2FTYJISlIODdvwqN1uOqf7hWAr9rZ8AYjhK63TVdXEZbNWBZfw%2B3m%2BntpLJGKqiTaogs7NMLw%2BNZIYu2UNIR2IaICoEKhyiGkt8obDoDR6zUtyHtUfrYJOWHcw6lDvbMAdFjW36WuF%2BkCXnHFnU7U8tZCL3uuNzM82xMEkVv5kmzmCKQ8aJQQwSN948c%2BDIrq59Be64Gtl9qjswTNiAN6eH5A2Fot0V9lZydWo1ZkEUxQ783vUteYFRZnx17%2FkSZJq5Z9G7BhWwwb9pm1Z02pSUY8YSnkHPBI4S8owwVicKPZdhSSUbFaeOFFnNRMPF4YxQGHLGdvcl5WJeoIZbZcdqY%2BZ8SArj%2FPiAJgJFn57M21NryLoF772daP%2FJBCcHKwpIEbThjCr94atUXNgEoqr6IhYqlKVYaJU101sAAR4h1Pe%2Blgy9Bg9lAjPg%2Bcnt4wU8OHB7vqdfrFxGarW9ON5asBlX4JjY9Mb5EuC0LxV6ackPfdRueiGgl5kgJOrQLrH%2FsK2AgOwlv21ZKpN8J036jk90cl1sTYNOjv0Qkw6E5ITKMghjtDZI4rim%2FvUMJew2MIGOqUB0mp8WUM%2FzephVcFv5F0%2BmQKlzDd4jfgl624c467bKbYKnuB1FfzKrDgEiTka8sG0qX7jLMI6ylcufUUaDiZeq5jU7vV0fnSak7Oea0tTp04lZ1UHiLG5AadDIQ5UaRD3E0wPHpctSq5PSdq3Azx3v37Fbbnp%2B5tATb8YrZ4ZkrPhgoCw5xLJ1mvDbFje178d8jWumiQ%2BH2GtGN0XD5trhCG7ekIV&X-Amz-Signature=f4ac75eddab30cc9ef0850c465af68ee67cc589f7ff5b58fdda60edc5fe8a8a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
