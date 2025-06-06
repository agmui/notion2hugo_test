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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPGCQ645%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK%2FCJM1aeSEmrNiyvpN38lz6emTvPhuXycBUaEfBTdtwIgVi1Ll7U1LBNxwHO%2BT2f5eN0PgHMNTmsG0bwCjtfk9QYq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDDghTKrX7WYJDI4YuCrcA4UprOofxqe4Z68bKweTIiaA08MiC391jCpkNC4MBGNG354qQooWpDq9ctgJCaVKnDp8on64COoBjZq0PcRbmY4LT4Uv%2BnWF%2BRXDz77cpDk8xFzqwSiUQ2iudKa3ZRXAAhUqybb%2B7jaV%2BWKno4GFtSUaFJgBZ3lVlZ4%2B%2Be4nlZRHZXYalq6hnnaimMGyCXWZq5rPnyjV4EmeqLeDa0Ado9J28Jf7%2BeJpA%2Fw69q%2FXGUzWM%2Bv6I82jdzanIGgGmmeLhwIGDkw7qmR2e%2Fh6wEiYrvAF%2Fg%2F9ePF%2FC9a4nkoNfd6zVQwBMm69VHwpvqQZPwURcFFdtD1k6rXumD8%2FLY0Zk%2BTzfob8xtftyYaakuVcgGcjJ%2BOHk2dP0SIQIIIwc%2FUx1Ts%2F220%2FH1Va10QGixE2mYOS05%2FgfB5St6eay7uzBMRo0Pz%2FQHn34lEVdpoBxlegKYxltkPwZp9QhmHFfAmw0MnOXxPhozKYXU%2FR7tE8wSamsa1IVAE2qih%2Fk152TPAySnTgDeWAp%2FXa%2FQh9WPGONMdgQ2sjOq5qmM7gb0mUi7C55xVcMKqaPU6jC7Zn9%2FLnam0XbMbj0M4XwQA7M1GPrU2rzBFTu4MvLhJnnQ8EbtOGBl99WEvCygqx4yzWMKSRjcIGOqUBXDKpN5NizJhY4l0wm5W4qOtEueGGOTp%2FNP%2B71AwE2o5oaxtr%2BJ9SloNLnKNFNXaCVu6i5b07APdL3EjS%2FfHDFv9VNCj94uW1%2BcZ0OMWqEHit9gRIbpuYfU5eStoaUYlvIPJy9ne95YpUnu5wns%2Bxq0nNmXtNkD5cpomFJJV%2F9OutYccsIe5%2F99LofURxHKXosAPTaeFe1PQWkBucfdhNspBVRKhh&X-Amz-Signature=87d320ffd07631122cd6fb977722fd3695684be7a898a413402832064a4b6e09&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPGCQ645%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK%2FCJM1aeSEmrNiyvpN38lz6emTvPhuXycBUaEfBTdtwIgVi1Ll7U1LBNxwHO%2BT2f5eN0PgHMNTmsG0bwCjtfk9QYq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDDghTKrX7WYJDI4YuCrcA4UprOofxqe4Z68bKweTIiaA08MiC391jCpkNC4MBGNG354qQooWpDq9ctgJCaVKnDp8on64COoBjZq0PcRbmY4LT4Uv%2BnWF%2BRXDz77cpDk8xFzqwSiUQ2iudKa3ZRXAAhUqybb%2B7jaV%2BWKno4GFtSUaFJgBZ3lVlZ4%2B%2Be4nlZRHZXYalq6hnnaimMGyCXWZq5rPnyjV4EmeqLeDa0Ado9J28Jf7%2BeJpA%2Fw69q%2FXGUzWM%2Bv6I82jdzanIGgGmmeLhwIGDkw7qmR2e%2Fh6wEiYrvAF%2Fg%2F9ePF%2FC9a4nkoNfd6zVQwBMm69VHwpvqQZPwURcFFdtD1k6rXumD8%2FLY0Zk%2BTzfob8xtftyYaakuVcgGcjJ%2BOHk2dP0SIQIIIwc%2FUx1Ts%2F220%2FH1Va10QGixE2mYOS05%2FgfB5St6eay7uzBMRo0Pz%2FQHn34lEVdpoBxlegKYxltkPwZp9QhmHFfAmw0MnOXxPhozKYXU%2FR7tE8wSamsa1IVAE2qih%2Fk152TPAySnTgDeWAp%2FXa%2FQh9WPGONMdgQ2sjOq5qmM7gb0mUi7C55xVcMKqaPU6jC7Zn9%2FLnam0XbMbj0M4XwQA7M1GPrU2rzBFTu4MvLhJnnQ8EbtOGBl99WEvCygqx4yzWMKSRjcIGOqUBXDKpN5NizJhY4l0wm5W4qOtEueGGOTp%2FNP%2B71AwE2o5oaxtr%2BJ9SloNLnKNFNXaCVu6i5b07APdL3EjS%2FfHDFv9VNCj94uW1%2BcZ0OMWqEHit9gRIbpuYfU5eStoaUYlvIPJy9ne95YpUnu5wns%2Bxq0nNmXtNkD5cpomFJJV%2F9OutYccsIe5%2F99LofURxHKXosAPTaeFe1PQWkBucfdhNspBVRKhh&X-Amz-Signature=7d2ab805e75ad785377708d60ec4ac12a235b59871132175ecf8535d59e0159b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPGCQ645%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK%2FCJM1aeSEmrNiyvpN38lz6emTvPhuXycBUaEfBTdtwIgVi1Ll7U1LBNxwHO%2BT2f5eN0PgHMNTmsG0bwCjtfk9QYq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDDghTKrX7WYJDI4YuCrcA4UprOofxqe4Z68bKweTIiaA08MiC391jCpkNC4MBGNG354qQooWpDq9ctgJCaVKnDp8on64COoBjZq0PcRbmY4LT4Uv%2BnWF%2BRXDz77cpDk8xFzqwSiUQ2iudKa3ZRXAAhUqybb%2B7jaV%2BWKno4GFtSUaFJgBZ3lVlZ4%2B%2Be4nlZRHZXYalq6hnnaimMGyCXWZq5rPnyjV4EmeqLeDa0Ado9J28Jf7%2BeJpA%2Fw69q%2FXGUzWM%2Bv6I82jdzanIGgGmmeLhwIGDkw7qmR2e%2Fh6wEiYrvAF%2Fg%2F9ePF%2FC9a4nkoNfd6zVQwBMm69VHwpvqQZPwURcFFdtD1k6rXumD8%2FLY0Zk%2BTzfob8xtftyYaakuVcgGcjJ%2BOHk2dP0SIQIIIwc%2FUx1Ts%2F220%2FH1Va10QGixE2mYOS05%2FgfB5St6eay7uzBMRo0Pz%2FQHn34lEVdpoBxlegKYxltkPwZp9QhmHFfAmw0MnOXxPhozKYXU%2FR7tE8wSamsa1IVAE2qih%2Fk152TPAySnTgDeWAp%2FXa%2FQh9WPGONMdgQ2sjOq5qmM7gb0mUi7C55xVcMKqaPU6jC7Zn9%2FLnam0XbMbj0M4XwQA7M1GPrU2rzBFTu4MvLhJnnQ8EbtOGBl99WEvCygqx4yzWMKSRjcIGOqUBXDKpN5NizJhY4l0wm5W4qOtEueGGOTp%2FNP%2B71AwE2o5oaxtr%2BJ9SloNLnKNFNXaCVu6i5b07APdL3EjS%2FfHDFv9VNCj94uW1%2BcZ0OMWqEHit9gRIbpuYfU5eStoaUYlvIPJy9ne95YpUnu5wns%2Bxq0nNmXtNkD5cpomFJJV%2F9OutYccsIe5%2F99LofURxHKXosAPTaeFe1PQWkBucfdhNspBVRKhh&X-Amz-Signature=fd4b43a3305a33c36f3ba2a32d33a54a976a060137d0209a68c2bdbf6c2f7c2c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPGCQ645%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK%2FCJM1aeSEmrNiyvpN38lz6emTvPhuXycBUaEfBTdtwIgVi1Ll7U1LBNxwHO%2BT2f5eN0PgHMNTmsG0bwCjtfk9QYq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDDghTKrX7WYJDI4YuCrcA4UprOofxqe4Z68bKweTIiaA08MiC391jCpkNC4MBGNG354qQooWpDq9ctgJCaVKnDp8on64COoBjZq0PcRbmY4LT4Uv%2BnWF%2BRXDz77cpDk8xFzqwSiUQ2iudKa3ZRXAAhUqybb%2B7jaV%2BWKno4GFtSUaFJgBZ3lVlZ4%2B%2Be4nlZRHZXYalq6hnnaimMGyCXWZq5rPnyjV4EmeqLeDa0Ado9J28Jf7%2BeJpA%2Fw69q%2FXGUzWM%2Bv6I82jdzanIGgGmmeLhwIGDkw7qmR2e%2Fh6wEiYrvAF%2Fg%2F9ePF%2FC9a4nkoNfd6zVQwBMm69VHwpvqQZPwURcFFdtD1k6rXumD8%2FLY0Zk%2BTzfob8xtftyYaakuVcgGcjJ%2BOHk2dP0SIQIIIwc%2FUx1Ts%2F220%2FH1Va10QGixE2mYOS05%2FgfB5St6eay7uzBMRo0Pz%2FQHn34lEVdpoBxlegKYxltkPwZp9QhmHFfAmw0MnOXxPhozKYXU%2FR7tE8wSamsa1IVAE2qih%2Fk152TPAySnTgDeWAp%2FXa%2FQh9WPGONMdgQ2sjOq5qmM7gb0mUi7C55xVcMKqaPU6jC7Zn9%2FLnam0XbMbj0M4XwQA7M1GPrU2rzBFTu4MvLhJnnQ8EbtOGBl99WEvCygqx4yzWMKSRjcIGOqUBXDKpN5NizJhY4l0wm5W4qOtEueGGOTp%2FNP%2B71AwE2o5oaxtr%2BJ9SloNLnKNFNXaCVu6i5b07APdL3EjS%2FfHDFv9VNCj94uW1%2BcZ0OMWqEHit9gRIbpuYfU5eStoaUYlvIPJy9ne95YpUnu5wns%2Bxq0nNmXtNkD5cpomFJJV%2F9OutYccsIe5%2F99LofURxHKXosAPTaeFe1PQWkBucfdhNspBVRKhh&X-Amz-Signature=a11183373a5640526c33ecae83231643184e3465a9786dae547a138d8a499de2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPGCQ645%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK%2FCJM1aeSEmrNiyvpN38lz6emTvPhuXycBUaEfBTdtwIgVi1Ll7U1LBNxwHO%2BT2f5eN0PgHMNTmsG0bwCjtfk9QYq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDDghTKrX7WYJDI4YuCrcA4UprOofxqe4Z68bKweTIiaA08MiC391jCpkNC4MBGNG354qQooWpDq9ctgJCaVKnDp8on64COoBjZq0PcRbmY4LT4Uv%2BnWF%2BRXDz77cpDk8xFzqwSiUQ2iudKa3ZRXAAhUqybb%2B7jaV%2BWKno4GFtSUaFJgBZ3lVlZ4%2B%2Be4nlZRHZXYalq6hnnaimMGyCXWZq5rPnyjV4EmeqLeDa0Ado9J28Jf7%2BeJpA%2Fw69q%2FXGUzWM%2Bv6I82jdzanIGgGmmeLhwIGDkw7qmR2e%2Fh6wEiYrvAF%2Fg%2F9ePF%2FC9a4nkoNfd6zVQwBMm69VHwpvqQZPwURcFFdtD1k6rXumD8%2FLY0Zk%2BTzfob8xtftyYaakuVcgGcjJ%2BOHk2dP0SIQIIIwc%2FUx1Ts%2F220%2FH1Va10QGixE2mYOS05%2FgfB5St6eay7uzBMRo0Pz%2FQHn34lEVdpoBxlegKYxltkPwZp9QhmHFfAmw0MnOXxPhozKYXU%2FR7tE8wSamsa1IVAE2qih%2Fk152TPAySnTgDeWAp%2FXa%2FQh9WPGONMdgQ2sjOq5qmM7gb0mUi7C55xVcMKqaPU6jC7Zn9%2FLnam0XbMbj0M4XwQA7M1GPrU2rzBFTu4MvLhJnnQ8EbtOGBl99WEvCygqx4yzWMKSRjcIGOqUBXDKpN5NizJhY4l0wm5W4qOtEueGGOTp%2FNP%2B71AwE2o5oaxtr%2BJ9SloNLnKNFNXaCVu6i5b07APdL3EjS%2FfHDFv9VNCj94uW1%2BcZ0OMWqEHit9gRIbpuYfU5eStoaUYlvIPJy9ne95YpUnu5wns%2Bxq0nNmXtNkD5cpomFJJV%2F9OutYccsIe5%2F99LofURxHKXosAPTaeFe1PQWkBucfdhNspBVRKhh&X-Amz-Signature=75b54d0b9fb22afbb8db74de36de5e42e26a8d512a45c1e7ea06521ba75e43e2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPGCQ645%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK%2FCJM1aeSEmrNiyvpN38lz6emTvPhuXycBUaEfBTdtwIgVi1Ll7U1LBNxwHO%2BT2f5eN0PgHMNTmsG0bwCjtfk9QYq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDDghTKrX7WYJDI4YuCrcA4UprOofxqe4Z68bKweTIiaA08MiC391jCpkNC4MBGNG354qQooWpDq9ctgJCaVKnDp8on64COoBjZq0PcRbmY4LT4Uv%2BnWF%2BRXDz77cpDk8xFzqwSiUQ2iudKa3ZRXAAhUqybb%2B7jaV%2BWKno4GFtSUaFJgBZ3lVlZ4%2B%2Be4nlZRHZXYalq6hnnaimMGyCXWZq5rPnyjV4EmeqLeDa0Ado9J28Jf7%2BeJpA%2Fw69q%2FXGUzWM%2Bv6I82jdzanIGgGmmeLhwIGDkw7qmR2e%2Fh6wEiYrvAF%2Fg%2F9ePF%2FC9a4nkoNfd6zVQwBMm69VHwpvqQZPwURcFFdtD1k6rXumD8%2FLY0Zk%2BTzfob8xtftyYaakuVcgGcjJ%2BOHk2dP0SIQIIIwc%2FUx1Ts%2F220%2FH1Va10QGixE2mYOS05%2FgfB5St6eay7uzBMRo0Pz%2FQHn34lEVdpoBxlegKYxltkPwZp9QhmHFfAmw0MnOXxPhozKYXU%2FR7tE8wSamsa1IVAE2qih%2Fk152TPAySnTgDeWAp%2FXa%2FQh9WPGONMdgQ2sjOq5qmM7gb0mUi7C55xVcMKqaPU6jC7Zn9%2FLnam0XbMbj0M4XwQA7M1GPrU2rzBFTu4MvLhJnnQ8EbtOGBl99WEvCygqx4yzWMKSRjcIGOqUBXDKpN5NizJhY4l0wm5W4qOtEueGGOTp%2FNP%2B71AwE2o5oaxtr%2BJ9SloNLnKNFNXaCVu6i5b07APdL3EjS%2FfHDFv9VNCj94uW1%2BcZ0OMWqEHit9gRIbpuYfU5eStoaUYlvIPJy9ne95YpUnu5wns%2Bxq0nNmXtNkD5cpomFJJV%2F9OutYccsIe5%2F99LofURxHKXosAPTaeFe1PQWkBucfdhNspBVRKhh&X-Amz-Signature=41e65abda9ce56b318422af0b310d479447d135036105ac998d3b16a24e93086&X-Amz-SignedHeaders=host&x-id=GetObject)
