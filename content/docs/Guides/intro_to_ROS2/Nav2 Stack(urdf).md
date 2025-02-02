---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4EI3SHV%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T020954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFpqsmbYly%2FbWT0Sgq30Mi1HFLaH2VTAD176VTKHs68BAiEAiFJuZbVSGMQUX7y81gL5wU1zqYKuC5hUCgE%2By%2FylJYQqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8qjtMFQSIG1xn3TircAwo1HMhLEPXa29eM%2BDpwJ6J5C6yR9x6HgOEE2QXsWG972D9TuD88isNC7Qaf87bTBXNiNEwKx93NYesXDvED8kwpl2WxbMzBvaXY7rgxq%2FnO%2BHiZ1SMaJVo5jyKHLbgejAO1c2Jp2LLAfqhCfNHxM0sSo8OUKu9IAtX2MB5RxBfUDfJmec6OzKAWQg4Bfs9%2FauxPS3h6mXO47HoJo8Jyy69WrCq%2BlBsYIq75sakSVYukwobYPsf9eDtaCGwFh%2BKCmbWvTa%2BJsK436pQBXfcnfAJVVCAldfUrphkjJSo2IcAvIOTMYVcAWtWTzfe8fnrFuBkytKHBEQvJZq6nxqjQeoEfLs%2FT6tLmfJ6M2lukLuvgOJfJalEYCblMJ2omLWiV7gjdgpNdYoaaumIZsvOJEqDGqoBeDp7isnJvgfsZZ670IF4qzWwpypdg7mBYgHym%2BKIKXwjgTQoWz1ckkc%2FdEq6Ub5ebJEp7Vn8g0UUjsuSeK0LQgzHwkPs51164xf0GoGRlWYk435TzPL5OxvLM6CjYjEt%2BhR6%2Ft84RcAN4o%2FZbBZxuKm7sOACY6eMUcBVcdcAtXv66d1yrMPiercFRTKZSK1bB2vqzQ%2B4kJrcHJrvZy8c5ApmkVTO08HQEMJKg%2B7wGOqUBG285z3Cbrj1PJogzhs9v4nbO08vXP%2F6DZcBL%2BasQqYVMHmURyZ6Zm%2BKoTvPixgal1kZ3sNh7zg%2FRGijeFzQx4v8916kMr4MZUOzfVoL0Xnv65j21rOsKUWVJDGE1mmsTzmVr%2Fy05QkkkEi5KO%2FANeZLPOrvOp4rHxg9M7vXBV1BC%2Fo6gqGD%2FpRZvVzF0Vt7oFOHRVMibTwpigCkfPvDyNT0Yl5WM&X-Amz-Signature=6f3f19334ea85521266b7a7240903f077ec7ca5b6b4c813edeb8dba03ab65c07&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4EI3SHV%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T020954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFpqsmbYly%2FbWT0Sgq30Mi1HFLaH2VTAD176VTKHs68BAiEAiFJuZbVSGMQUX7y81gL5wU1zqYKuC5hUCgE%2By%2FylJYQqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8qjtMFQSIG1xn3TircAwo1HMhLEPXa29eM%2BDpwJ6J5C6yR9x6HgOEE2QXsWG972D9TuD88isNC7Qaf87bTBXNiNEwKx93NYesXDvED8kwpl2WxbMzBvaXY7rgxq%2FnO%2BHiZ1SMaJVo5jyKHLbgejAO1c2Jp2LLAfqhCfNHxM0sSo8OUKu9IAtX2MB5RxBfUDfJmec6OzKAWQg4Bfs9%2FauxPS3h6mXO47HoJo8Jyy69WrCq%2BlBsYIq75sakSVYukwobYPsf9eDtaCGwFh%2BKCmbWvTa%2BJsK436pQBXfcnfAJVVCAldfUrphkjJSo2IcAvIOTMYVcAWtWTzfe8fnrFuBkytKHBEQvJZq6nxqjQeoEfLs%2FT6tLmfJ6M2lukLuvgOJfJalEYCblMJ2omLWiV7gjdgpNdYoaaumIZsvOJEqDGqoBeDp7isnJvgfsZZ670IF4qzWwpypdg7mBYgHym%2BKIKXwjgTQoWz1ckkc%2FdEq6Ub5ebJEp7Vn8g0UUjsuSeK0LQgzHwkPs51164xf0GoGRlWYk435TzPL5OxvLM6CjYjEt%2BhR6%2Ft84RcAN4o%2FZbBZxuKm7sOACY6eMUcBVcdcAtXv66d1yrMPiercFRTKZSK1bB2vqzQ%2B4kJrcHJrvZy8c5ApmkVTO08HQEMJKg%2B7wGOqUBG285z3Cbrj1PJogzhs9v4nbO08vXP%2F6DZcBL%2BasQqYVMHmURyZ6Zm%2BKoTvPixgal1kZ3sNh7zg%2FRGijeFzQx4v8916kMr4MZUOzfVoL0Xnv65j21rOsKUWVJDGE1mmsTzmVr%2Fy05QkkkEi5KO%2FANeZLPOrvOp4rHxg9M7vXBV1BC%2Fo6gqGD%2FpRZvVzF0Vt7oFOHRVMibTwpigCkfPvDyNT0Yl5WM&X-Amz-Signature=c9a458c12db0ecc1392a56bb79e3bd9d034b5eedd66e364c73b3e80bb52dc3d5&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4EI3SHV%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T020954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFpqsmbYly%2FbWT0Sgq30Mi1HFLaH2VTAD176VTKHs68BAiEAiFJuZbVSGMQUX7y81gL5wU1zqYKuC5hUCgE%2By%2FylJYQqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8qjtMFQSIG1xn3TircAwo1HMhLEPXa29eM%2BDpwJ6J5C6yR9x6HgOEE2QXsWG972D9TuD88isNC7Qaf87bTBXNiNEwKx93NYesXDvED8kwpl2WxbMzBvaXY7rgxq%2FnO%2BHiZ1SMaJVo5jyKHLbgejAO1c2Jp2LLAfqhCfNHxM0sSo8OUKu9IAtX2MB5RxBfUDfJmec6OzKAWQg4Bfs9%2FauxPS3h6mXO47HoJo8Jyy69WrCq%2BlBsYIq75sakSVYukwobYPsf9eDtaCGwFh%2BKCmbWvTa%2BJsK436pQBXfcnfAJVVCAldfUrphkjJSo2IcAvIOTMYVcAWtWTzfe8fnrFuBkytKHBEQvJZq6nxqjQeoEfLs%2FT6tLmfJ6M2lukLuvgOJfJalEYCblMJ2omLWiV7gjdgpNdYoaaumIZsvOJEqDGqoBeDp7isnJvgfsZZ670IF4qzWwpypdg7mBYgHym%2BKIKXwjgTQoWz1ckkc%2FdEq6Ub5ebJEp7Vn8g0UUjsuSeK0LQgzHwkPs51164xf0GoGRlWYk435TzPL5OxvLM6CjYjEt%2BhR6%2Ft84RcAN4o%2FZbBZxuKm7sOACY6eMUcBVcdcAtXv66d1yrMPiercFRTKZSK1bB2vqzQ%2B4kJrcHJrvZy8c5ApmkVTO08HQEMJKg%2B7wGOqUBG285z3Cbrj1PJogzhs9v4nbO08vXP%2F6DZcBL%2BasQqYVMHmURyZ6Zm%2BKoTvPixgal1kZ3sNh7zg%2FRGijeFzQx4v8916kMr4MZUOzfVoL0Xnv65j21rOsKUWVJDGE1mmsTzmVr%2Fy05QkkkEi5KO%2FANeZLPOrvOp4rHxg9M7vXBV1BC%2Fo6gqGD%2FpRZvVzF0Vt7oFOHRVMibTwpigCkfPvDyNT0Yl5WM&X-Amz-Signature=435c1e51677082a8381f7d287eace020b38353b28a9605ab2a65c63970577709&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4EI3SHV%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T020954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFpqsmbYly%2FbWT0Sgq30Mi1HFLaH2VTAD176VTKHs68BAiEAiFJuZbVSGMQUX7y81gL5wU1zqYKuC5hUCgE%2By%2FylJYQqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8qjtMFQSIG1xn3TircAwo1HMhLEPXa29eM%2BDpwJ6J5C6yR9x6HgOEE2QXsWG972D9TuD88isNC7Qaf87bTBXNiNEwKx93NYesXDvED8kwpl2WxbMzBvaXY7rgxq%2FnO%2BHiZ1SMaJVo5jyKHLbgejAO1c2Jp2LLAfqhCfNHxM0sSo8OUKu9IAtX2MB5RxBfUDfJmec6OzKAWQg4Bfs9%2FauxPS3h6mXO47HoJo8Jyy69WrCq%2BlBsYIq75sakSVYukwobYPsf9eDtaCGwFh%2BKCmbWvTa%2BJsK436pQBXfcnfAJVVCAldfUrphkjJSo2IcAvIOTMYVcAWtWTzfe8fnrFuBkytKHBEQvJZq6nxqjQeoEfLs%2FT6tLmfJ6M2lukLuvgOJfJalEYCblMJ2omLWiV7gjdgpNdYoaaumIZsvOJEqDGqoBeDp7isnJvgfsZZ670IF4qzWwpypdg7mBYgHym%2BKIKXwjgTQoWz1ckkc%2FdEq6Ub5ebJEp7Vn8g0UUjsuSeK0LQgzHwkPs51164xf0GoGRlWYk435TzPL5OxvLM6CjYjEt%2BhR6%2Ft84RcAN4o%2FZbBZxuKm7sOACY6eMUcBVcdcAtXv66d1yrMPiercFRTKZSK1bB2vqzQ%2B4kJrcHJrvZy8c5ApmkVTO08HQEMJKg%2B7wGOqUBG285z3Cbrj1PJogzhs9v4nbO08vXP%2F6DZcBL%2BasQqYVMHmURyZ6Zm%2BKoTvPixgal1kZ3sNh7zg%2FRGijeFzQx4v8916kMr4MZUOzfVoL0Xnv65j21rOsKUWVJDGE1mmsTzmVr%2Fy05QkkkEi5KO%2FANeZLPOrvOp4rHxg9M7vXBV1BC%2Fo6gqGD%2FpRZvVzF0Vt7oFOHRVMibTwpigCkfPvDyNT0Yl5WM&X-Amz-Signature=e9388f5a19fff77d8b854c686dbe8ce0aa6b861884a4529e1b2ec05104e24082&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4EI3SHV%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T020954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFpqsmbYly%2FbWT0Sgq30Mi1HFLaH2VTAD176VTKHs68BAiEAiFJuZbVSGMQUX7y81gL5wU1zqYKuC5hUCgE%2By%2FylJYQqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8qjtMFQSIG1xn3TircAwo1HMhLEPXa29eM%2BDpwJ6J5C6yR9x6HgOEE2QXsWG972D9TuD88isNC7Qaf87bTBXNiNEwKx93NYesXDvED8kwpl2WxbMzBvaXY7rgxq%2FnO%2BHiZ1SMaJVo5jyKHLbgejAO1c2Jp2LLAfqhCfNHxM0sSo8OUKu9IAtX2MB5RxBfUDfJmec6OzKAWQg4Bfs9%2FauxPS3h6mXO47HoJo8Jyy69WrCq%2BlBsYIq75sakSVYukwobYPsf9eDtaCGwFh%2BKCmbWvTa%2BJsK436pQBXfcnfAJVVCAldfUrphkjJSo2IcAvIOTMYVcAWtWTzfe8fnrFuBkytKHBEQvJZq6nxqjQeoEfLs%2FT6tLmfJ6M2lukLuvgOJfJalEYCblMJ2omLWiV7gjdgpNdYoaaumIZsvOJEqDGqoBeDp7isnJvgfsZZ670IF4qzWwpypdg7mBYgHym%2BKIKXwjgTQoWz1ckkc%2FdEq6Ub5ebJEp7Vn8g0UUjsuSeK0LQgzHwkPs51164xf0GoGRlWYk435TzPL5OxvLM6CjYjEt%2BhR6%2Ft84RcAN4o%2FZbBZxuKm7sOACY6eMUcBVcdcAtXv66d1yrMPiercFRTKZSK1bB2vqzQ%2B4kJrcHJrvZy8c5ApmkVTO08HQEMJKg%2B7wGOqUBG285z3Cbrj1PJogzhs9v4nbO08vXP%2F6DZcBL%2BasQqYVMHmURyZ6Zm%2BKoTvPixgal1kZ3sNh7zg%2FRGijeFzQx4v8916kMr4MZUOzfVoL0Xnv65j21rOsKUWVJDGE1mmsTzmVr%2Fy05QkkkEi5KO%2FANeZLPOrvOp4rHxg9M7vXBV1BC%2Fo6gqGD%2FpRZvVzF0Vt7oFOHRVMibTwpigCkfPvDyNT0Yl5WM&X-Amz-Signature=ea0616f2e8c43bcef5395592a5ec9f614b5eb7642c3adc06d4618d15ac5c80f5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4EI3SHV%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T020954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFpqsmbYly%2FbWT0Sgq30Mi1HFLaH2VTAD176VTKHs68BAiEAiFJuZbVSGMQUX7y81gL5wU1zqYKuC5hUCgE%2By%2FylJYQqiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL8qjtMFQSIG1xn3TircAwo1HMhLEPXa29eM%2BDpwJ6J5C6yR9x6HgOEE2QXsWG972D9TuD88isNC7Qaf87bTBXNiNEwKx93NYesXDvED8kwpl2WxbMzBvaXY7rgxq%2FnO%2BHiZ1SMaJVo5jyKHLbgejAO1c2Jp2LLAfqhCfNHxM0sSo8OUKu9IAtX2MB5RxBfUDfJmec6OzKAWQg4Bfs9%2FauxPS3h6mXO47HoJo8Jyy69WrCq%2BlBsYIq75sakSVYukwobYPsf9eDtaCGwFh%2BKCmbWvTa%2BJsK436pQBXfcnfAJVVCAldfUrphkjJSo2IcAvIOTMYVcAWtWTzfe8fnrFuBkytKHBEQvJZq6nxqjQeoEfLs%2FT6tLmfJ6M2lukLuvgOJfJalEYCblMJ2omLWiV7gjdgpNdYoaaumIZsvOJEqDGqoBeDp7isnJvgfsZZ670IF4qzWwpypdg7mBYgHym%2BKIKXwjgTQoWz1ckkc%2FdEq6Ub5ebJEp7Vn8g0UUjsuSeK0LQgzHwkPs51164xf0GoGRlWYk435TzPL5OxvLM6CjYjEt%2BhR6%2Ft84RcAN4o%2FZbBZxuKm7sOACY6eMUcBVcdcAtXv66d1yrMPiercFRTKZSK1bB2vqzQ%2B4kJrcHJrvZy8c5ApmkVTO08HQEMJKg%2B7wGOqUBG285z3Cbrj1PJogzhs9v4nbO08vXP%2F6DZcBL%2BasQqYVMHmURyZ6Zm%2BKoTvPixgal1kZ3sNh7zg%2FRGijeFzQx4v8916kMr4MZUOzfVoL0Xnv65j21rOsKUWVJDGE1mmsTzmVr%2Fy05QkkkEi5KO%2FANeZLPOrvOp4rHxg9M7vXBV1BC%2Fo6gqGD%2FpRZvVzF0Vt7oFOHRVMibTwpigCkfPvDyNT0Yl5WM&X-Amz-Signature=0415fbdc0b60554fcd61d75d42f43d6060b498c25d38e88c5aaa6bdafec7668f&X-Amz-SignedHeaders=host&x-id=GetObject)
