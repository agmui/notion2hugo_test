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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKA3DREI%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T050951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCapvF0LiqflV0KBxdtjnM3MNCg4tHXVn7t3rxmPAw8uwIhAKMfViM7%2FTNvGYJN3AvNzDsH5%2Fe6aqDDQOmzrpgwjcP0KogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQyCYOoeyZX%2BXLy14q3AN0Gx29OxEVAX9eUWPeF7SoXTN1wNyHwETek9QFfg1YHpjgBcw0bzEdRCb1ab0N5tLTzenG%2F73MniFnjeFCP2Z8UfXb7%2BA%2BhcCeDxFeVVd2nfsLWP3QlOlp41OzXU7%2FdN0CMWMswcjiUvgJaJ8V8JcxYQTsthM6smm0NInmrtQtjpVIgaLxYk1%2FmV2CHiiRg6m4DkgUeC6nNYI11gtYXkODyJEuF7pf%2Feey0hRTDAqA4e1Q9%2BHF55z9vGuTmXihncRbgrkaMw3FDLTvt63XKFxC5CmysRsGCSXiQiZ0RQixibBxb4%2BX2ie5kbMqPccdanR1WTO1AntqCqZEj0mLIO6eXM8sFrsT6ARJXHFCtTUN5d4UC3Uwm%2Fifvy8B0KED0yEAyPXp7I6VNTu8slw1ELt1yeV6BEMvAz0fZGAX%2B8rP6Zr1vv3o9mNbHyTWn0hycfvaT7YQpRXV0S3lBh26AV%2BUh5Mkf7Ju%2BbYE%2BeJyHWys5pE3k6b6I2Vnn99qbPYziJEVJKAdYKXXTcS0Xr1Cigx27DrM9ak5VvhstdVq%2BDNJKTob59VddY6VN1OrL%2B%2FcH90rZttENjJw9iuEkDp5vuJ3eRO1DsyRPiwba5jSjwIXvyvCQQNDb6AVFeqZZDCSr%2FK%2FBjqkAbS8Jx8NMgAlZsW1dxG3kzAlFM6DDkmMff3B1g3MkWs%2FSdeBvLSOZ0mzNcEfvqVMwhvDrks3KPGgLg%2Bt3BZE9j1M4XXga8zYrY3MJLdj%2FbGWGpOgg1pX2UoroTYX8uO6Y2LqCmo2%2BIziV3SFENtIb%2B7Vnx8W6XYxm44RlfovJwbFSDWsQCILrkH51g4iLdloT4XqfILVc6POL%2Bo5HYKC9PSDAUhN&X-Amz-Signature=0594fbf59bace8c1342e01a05ee78d4d2cf4611142cd2f9d9006d3922b6a275f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKA3DREI%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T050951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCapvF0LiqflV0KBxdtjnM3MNCg4tHXVn7t3rxmPAw8uwIhAKMfViM7%2FTNvGYJN3AvNzDsH5%2Fe6aqDDQOmzrpgwjcP0KogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQyCYOoeyZX%2BXLy14q3AN0Gx29OxEVAX9eUWPeF7SoXTN1wNyHwETek9QFfg1YHpjgBcw0bzEdRCb1ab0N5tLTzenG%2F73MniFnjeFCP2Z8UfXb7%2BA%2BhcCeDxFeVVd2nfsLWP3QlOlp41OzXU7%2FdN0CMWMswcjiUvgJaJ8V8JcxYQTsthM6smm0NInmrtQtjpVIgaLxYk1%2FmV2CHiiRg6m4DkgUeC6nNYI11gtYXkODyJEuF7pf%2Feey0hRTDAqA4e1Q9%2BHF55z9vGuTmXihncRbgrkaMw3FDLTvt63XKFxC5CmysRsGCSXiQiZ0RQixibBxb4%2BX2ie5kbMqPccdanR1WTO1AntqCqZEj0mLIO6eXM8sFrsT6ARJXHFCtTUN5d4UC3Uwm%2Fifvy8B0KED0yEAyPXp7I6VNTu8slw1ELt1yeV6BEMvAz0fZGAX%2B8rP6Zr1vv3o9mNbHyTWn0hycfvaT7YQpRXV0S3lBh26AV%2BUh5Mkf7Ju%2BbYE%2BeJyHWys5pE3k6b6I2Vnn99qbPYziJEVJKAdYKXXTcS0Xr1Cigx27DrM9ak5VvhstdVq%2BDNJKTob59VddY6VN1OrL%2B%2FcH90rZttENjJw9iuEkDp5vuJ3eRO1DsyRPiwba5jSjwIXvyvCQQNDb6AVFeqZZDCSr%2FK%2FBjqkAbS8Jx8NMgAlZsW1dxG3kzAlFM6DDkmMff3B1g3MkWs%2FSdeBvLSOZ0mzNcEfvqVMwhvDrks3KPGgLg%2Bt3BZE9j1M4XXga8zYrY3MJLdj%2FbGWGpOgg1pX2UoroTYX8uO6Y2LqCmo2%2BIziV3SFENtIb%2B7Vnx8W6XYxm44RlfovJwbFSDWsQCILrkH51g4iLdloT4XqfILVc6POL%2Bo5HYKC9PSDAUhN&X-Amz-Signature=932f3d6480b9d522d0b0ac501f57a3effba4fd2c8621ffa765b061b32e59da61&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKA3DREI%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T050951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCapvF0LiqflV0KBxdtjnM3MNCg4tHXVn7t3rxmPAw8uwIhAKMfViM7%2FTNvGYJN3AvNzDsH5%2Fe6aqDDQOmzrpgwjcP0KogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQyCYOoeyZX%2BXLy14q3AN0Gx29OxEVAX9eUWPeF7SoXTN1wNyHwETek9QFfg1YHpjgBcw0bzEdRCb1ab0N5tLTzenG%2F73MniFnjeFCP2Z8UfXb7%2BA%2BhcCeDxFeVVd2nfsLWP3QlOlp41OzXU7%2FdN0CMWMswcjiUvgJaJ8V8JcxYQTsthM6smm0NInmrtQtjpVIgaLxYk1%2FmV2CHiiRg6m4DkgUeC6nNYI11gtYXkODyJEuF7pf%2Feey0hRTDAqA4e1Q9%2BHF55z9vGuTmXihncRbgrkaMw3FDLTvt63XKFxC5CmysRsGCSXiQiZ0RQixibBxb4%2BX2ie5kbMqPccdanR1WTO1AntqCqZEj0mLIO6eXM8sFrsT6ARJXHFCtTUN5d4UC3Uwm%2Fifvy8B0KED0yEAyPXp7I6VNTu8slw1ELt1yeV6BEMvAz0fZGAX%2B8rP6Zr1vv3o9mNbHyTWn0hycfvaT7YQpRXV0S3lBh26AV%2BUh5Mkf7Ju%2BbYE%2BeJyHWys5pE3k6b6I2Vnn99qbPYziJEVJKAdYKXXTcS0Xr1Cigx27DrM9ak5VvhstdVq%2BDNJKTob59VddY6VN1OrL%2B%2FcH90rZttENjJw9iuEkDp5vuJ3eRO1DsyRPiwba5jSjwIXvyvCQQNDb6AVFeqZZDCSr%2FK%2FBjqkAbS8Jx8NMgAlZsW1dxG3kzAlFM6DDkmMff3B1g3MkWs%2FSdeBvLSOZ0mzNcEfvqVMwhvDrks3KPGgLg%2Bt3BZE9j1M4XXga8zYrY3MJLdj%2FbGWGpOgg1pX2UoroTYX8uO6Y2LqCmo2%2BIziV3SFENtIb%2B7Vnx8W6XYxm44RlfovJwbFSDWsQCILrkH51g4iLdloT4XqfILVc6POL%2Bo5HYKC9PSDAUhN&X-Amz-Signature=ea5c2c5e1f269c623ed45d6f39d81a631b9d03bb83b8798991dc3d969a1e7949&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKA3DREI%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T050951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCapvF0LiqflV0KBxdtjnM3MNCg4tHXVn7t3rxmPAw8uwIhAKMfViM7%2FTNvGYJN3AvNzDsH5%2Fe6aqDDQOmzrpgwjcP0KogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQyCYOoeyZX%2BXLy14q3AN0Gx29OxEVAX9eUWPeF7SoXTN1wNyHwETek9QFfg1YHpjgBcw0bzEdRCb1ab0N5tLTzenG%2F73MniFnjeFCP2Z8UfXb7%2BA%2BhcCeDxFeVVd2nfsLWP3QlOlp41OzXU7%2FdN0CMWMswcjiUvgJaJ8V8JcxYQTsthM6smm0NInmrtQtjpVIgaLxYk1%2FmV2CHiiRg6m4DkgUeC6nNYI11gtYXkODyJEuF7pf%2Feey0hRTDAqA4e1Q9%2BHF55z9vGuTmXihncRbgrkaMw3FDLTvt63XKFxC5CmysRsGCSXiQiZ0RQixibBxb4%2BX2ie5kbMqPccdanR1WTO1AntqCqZEj0mLIO6eXM8sFrsT6ARJXHFCtTUN5d4UC3Uwm%2Fifvy8B0KED0yEAyPXp7I6VNTu8slw1ELt1yeV6BEMvAz0fZGAX%2B8rP6Zr1vv3o9mNbHyTWn0hycfvaT7YQpRXV0S3lBh26AV%2BUh5Mkf7Ju%2BbYE%2BeJyHWys5pE3k6b6I2Vnn99qbPYziJEVJKAdYKXXTcS0Xr1Cigx27DrM9ak5VvhstdVq%2BDNJKTob59VddY6VN1OrL%2B%2FcH90rZttENjJw9iuEkDp5vuJ3eRO1DsyRPiwba5jSjwIXvyvCQQNDb6AVFeqZZDCSr%2FK%2FBjqkAbS8Jx8NMgAlZsW1dxG3kzAlFM6DDkmMff3B1g3MkWs%2FSdeBvLSOZ0mzNcEfvqVMwhvDrks3KPGgLg%2Bt3BZE9j1M4XXga8zYrY3MJLdj%2FbGWGpOgg1pX2UoroTYX8uO6Y2LqCmo2%2BIziV3SFENtIb%2B7Vnx8W6XYxm44RlfovJwbFSDWsQCILrkH51g4iLdloT4XqfILVc6POL%2Bo5HYKC9PSDAUhN&X-Amz-Signature=99dc106ae5944f4de46481968fb9567c436cc191b6e512533a308b8641e8b7e9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKA3DREI%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T050951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCapvF0LiqflV0KBxdtjnM3MNCg4tHXVn7t3rxmPAw8uwIhAKMfViM7%2FTNvGYJN3AvNzDsH5%2Fe6aqDDQOmzrpgwjcP0KogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQyCYOoeyZX%2BXLy14q3AN0Gx29OxEVAX9eUWPeF7SoXTN1wNyHwETek9QFfg1YHpjgBcw0bzEdRCb1ab0N5tLTzenG%2F73MniFnjeFCP2Z8UfXb7%2BA%2BhcCeDxFeVVd2nfsLWP3QlOlp41OzXU7%2FdN0CMWMswcjiUvgJaJ8V8JcxYQTsthM6smm0NInmrtQtjpVIgaLxYk1%2FmV2CHiiRg6m4DkgUeC6nNYI11gtYXkODyJEuF7pf%2Feey0hRTDAqA4e1Q9%2BHF55z9vGuTmXihncRbgrkaMw3FDLTvt63XKFxC5CmysRsGCSXiQiZ0RQixibBxb4%2BX2ie5kbMqPccdanR1WTO1AntqCqZEj0mLIO6eXM8sFrsT6ARJXHFCtTUN5d4UC3Uwm%2Fifvy8B0KED0yEAyPXp7I6VNTu8slw1ELt1yeV6BEMvAz0fZGAX%2B8rP6Zr1vv3o9mNbHyTWn0hycfvaT7YQpRXV0S3lBh26AV%2BUh5Mkf7Ju%2BbYE%2BeJyHWys5pE3k6b6I2Vnn99qbPYziJEVJKAdYKXXTcS0Xr1Cigx27DrM9ak5VvhstdVq%2BDNJKTob59VddY6VN1OrL%2B%2FcH90rZttENjJw9iuEkDp5vuJ3eRO1DsyRPiwba5jSjwIXvyvCQQNDb6AVFeqZZDCSr%2FK%2FBjqkAbS8Jx8NMgAlZsW1dxG3kzAlFM6DDkmMff3B1g3MkWs%2FSdeBvLSOZ0mzNcEfvqVMwhvDrks3KPGgLg%2Bt3BZE9j1M4XXga8zYrY3MJLdj%2FbGWGpOgg1pX2UoroTYX8uO6Y2LqCmo2%2BIziV3SFENtIb%2B7Vnx8W6XYxm44RlfovJwbFSDWsQCILrkH51g4iLdloT4XqfILVc6POL%2Bo5HYKC9PSDAUhN&X-Amz-Signature=8594699da4a56568208988123272c2209bea18ade2683dd45743005e2c1774db&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKA3DREI%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T050951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCapvF0LiqflV0KBxdtjnM3MNCg4tHXVn7t3rxmPAw8uwIhAKMfViM7%2FTNvGYJN3AvNzDsH5%2Fe6aqDDQOmzrpgwjcP0KogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxQyCYOoeyZX%2BXLy14q3AN0Gx29OxEVAX9eUWPeF7SoXTN1wNyHwETek9QFfg1YHpjgBcw0bzEdRCb1ab0N5tLTzenG%2F73MniFnjeFCP2Z8UfXb7%2BA%2BhcCeDxFeVVd2nfsLWP3QlOlp41OzXU7%2FdN0CMWMswcjiUvgJaJ8V8JcxYQTsthM6smm0NInmrtQtjpVIgaLxYk1%2FmV2CHiiRg6m4DkgUeC6nNYI11gtYXkODyJEuF7pf%2Feey0hRTDAqA4e1Q9%2BHF55z9vGuTmXihncRbgrkaMw3FDLTvt63XKFxC5CmysRsGCSXiQiZ0RQixibBxb4%2BX2ie5kbMqPccdanR1WTO1AntqCqZEj0mLIO6eXM8sFrsT6ARJXHFCtTUN5d4UC3Uwm%2Fifvy8B0KED0yEAyPXp7I6VNTu8slw1ELt1yeV6BEMvAz0fZGAX%2B8rP6Zr1vv3o9mNbHyTWn0hycfvaT7YQpRXV0S3lBh26AV%2BUh5Mkf7Ju%2BbYE%2BeJyHWys5pE3k6b6I2Vnn99qbPYziJEVJKAdYKXXTcS0Xr1Cigx27DrM9ak5VvhstdVq%2BDNJKTob59VddY6VN1OrL%2B%2FcH90rZttENjJw9iuEkDp5vuJ3eRO1DsyRPiwba5jSjwIXvyvCQQNDb6AVFeqZZDCSr%2FK%2FBjqkAbS8Jx8NMgAlZsW1dxG3kzAlFM6DDkmMff3B1g3MkWs%2FSdeBvLSOZ0mzNcEfvqVMwhvDrks3KPGgLg%2Bt3BZE9j1M4XXga8zYrY3MJLdj%2FbGWGpOgg1pX2UoroTYX8uO6Y2LqCmo2%2BIziV3SFENtIb%2B7Vnx8W6XYxm44RlfovJwbFSDWsQCILrkH51g4iLdloT4XqfILVc6POL%2Bo5HYKC9PSDAUhN&X-Amz-Signature=625cf69911e28bcaac197db6e38cf989e33b8bfcad55c0d40d1b444064f13f7b&X-Amz-SignedHeaders=host&x-id=GetObject)
