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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665452HSDH%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuNNx9rIoTspHzAQLcgt4t7LgCeCP0ZFp4ObIiBrUY9AiBYFUKKRXun9z4HmPfSa1XyGg3wwbeFqvgdvbSa4bufpCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM3Dvtkq5XaLNFqArSKtwDE1ozF5MkN7DkzmbCrSL%2B%2BmMtWrcnrF2WqZsynakJYLFN%2Fn7AmOT1P%2BzAUmT4G76e9h5hfdpDotWfSGEYBEcRZ7Z9yQhQBMk3AtooNFGXfUyKihntHZtXrjZriDsTxY%2FCqOGPCxPmwzfoN4fJRh7EDrxozckp5S7Xy2vHi11QlUvxbzUCiKqgh6K7%2FmaZPksDffc0aFMt49dwUQIMlwO6ziNPJX9j9w2yml%2FU8Vgeg5fwYA9JMlDfgJBl6mKO1H0tu2C2WQiOwWKknUKFi0Y6dX8AVUdOMd4%2B46z5HvcpEDmfeja6ZgiIwa6wJoxUlggoFe1gdAQT0kaWykP1k5SM1eVF0XWVihUr81pxILTDaQvIjVw11UGANKdxkM4kDJrIXvbHotl6%2F9Ax6f%2FM53nHq4pvXGErRPGXnBXgH2qW6yuYVcgZdVNTqrUR7%2B2OOXQWuzFpleLFRTNLR%2FFHqPL012%2Bj56vVSdtA0tz9fl6an0U58pPOHju2uT9sQtxOo0zxbYGJQ%2FWOc1wgGAiK2Jx8%2FRBYdPuVEG8tqKoWUtaLxhDDPDFQb9cIcIocRVnvwTlzy1NL6m6D3Yx7FeYqf9jqJvoRA4oKqdWS3cFIYatFasaSUMGFzXGXIhsL9ykwk8L5vwY6pgHP2r7A8T6LDjdR9zWpIM1v14yi6JArClLugj9IJYNCiwFmEw2TMOY80KSm4YGssV0eVaboLJAWBrU5aDufnUjfujx8YDmGjWVWK%2FXDupdY%2Fc%2B%2BAqB0FDm1sf1dG5jKIcZP1j7uI9IJqjGONaaWAK3VY18eim%2B%2FriwGH%2F6LF1Wy%2BIIwrjDMykAoxmZMBeJsIPnIJ%2FwHy76wc6XanGVu%2FCJlBylMnl1i&X-Amz-Signature=390649082f07bf235c8de2591e5a023019fa26f9a4eb6b349d88349eea31e43e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665452HSDH%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuNNx9rIoTspHzAQLcgt4t7LgCeCP0ZFp4ObIiBrUY9AiBYFUKKRXun9z4HmPfSa1XyGg3wwbeFqvgdvbSa4bufpCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM3Dvtkq5XaLNFqArSKtwDE1ozF5MkN7DkzmbCrSL%2B%2BmMtWrcnrF2WqZsynakJYLFN%2Fn7AmOT1P%2BzAUmT4G76e9h5hfdpDotWfSGEYBEcRZ7Z9yQhQBMk3AtooNFGXfUyKihntHZtXrjZriDsTxY%2FCqOGPCxPmwzfoN4fJRh7EDrxozckp5S7Xy2vHi11QlUvxbzUCiKqgh6K7%2FmaZPksDffc0aFMt49dwUQIMlwO6ziNPJX9j9w2yml%2FU8Vgeg5fwYA9JMlDfgJBl6mKO1H0tu2C2WQiOwWKknUKFi0Y6dX8AVUdOMd4%2B46z5HvcpEDmfeja6ZgiIwa6wJoxUlggoFe1gdAQT0kaWykP1k5SM1eVF0XWVihUr81pxILTDaQvIjVw11UGANKdxkM4kDJrIXvbHotl6%2F9Ax6f%2FM53nHq4pvXGErRPGXnBXgH2qW6yuYVcgZdVNTqrUR7%2B2OOXQWuzFpleLFRTNLR%2FFHqPL012%2Bj56vVSdtA0tz9fl6an0U58pPOHju2uT9sQtxOo0zxbYGJQ%2FWOc1wgGAiK2Jx8%2FRBYdPuVEG8tqKoWUtaLxhDDPDFQb9cIcIocRVnvwTlzy1NL6m6D3Yx7FeYqf9jqJvoRA4oKqdWS3cFIYatFasaSUMGFzXGXIhsL9ykwk8L5vwY6pgHP2r7A8T6LDjdR9zWpIM1v14yi6JArClLugj9IJYNCiwFmEw2TMOY80KSm4YGssV0eVaboLJAWBrU5aDufnUjfujx8YDmGjWVWK%2FXDupdY%2Fc%2B%2BAqB0FDm1sf1dG5jKIcZP1j7uI9IJqjGONaaWAK3VY18eim%2B%2FriwGH%2F6LF1Wy%2BIIwrjDMykAoxmZMBeJsIPnIJ%2FwHy76wc6XanGVu%2FCJlBylMnl1i&X-Amz-Signature=3ec7a55c3af0adaed19efb3ace9d311a5b04fb083b9a37b776a8d4488bc696bc&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665452HSDH%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuNNx9rIoTspHzAQLcgt4t7LgCeCP0ZFp4ObIiBrUY9AiBYFUKKRXun9z4HmPfSa1XyGg3wwbeFqvgdvbSa4bufpCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM3Dvtkq5XaLNFqArSKtwDE1ozF5MkN7DkzmbCrSL%2B%2BmMtWrcnrF2WqZsynakJYLFN%2Fn7AmOT1P%2BzAUmT4G76e9h5hfdpDotWfSGEYBEcRZ7Z9yQhQBMk3AtooNFGXfUyKihntHZtXrjZriDsTxY%2FCqOGPCxPmwzfoN4fJRh7EDrxozckp5S7Xy2vHi11QlUvxbzUCiKqgh6K7%2FmaZPksDffc0aFMt49dwUQIMlwO6ziNPJX9j9w2yml%2FU8Vgeg5fwYA9JMlDfgJBl6mKO1H0tu2C2WQiOwWKknUKFi0Y6dX8AVUdOMd4%2B46z5HvcpEDmfeja6ZgiIwa6wJoxUlggoFe1gdAQT0kaWykP1k5SM1eVF0XWVihUr81pxILTDaQvIjVw11UGANKdxkM4kDJrIXvbHotl6%2F9Ax6f%2FM53nHq4pvXGErRPGXnBXgH2qW6yuYVcgZdVNTqrUR7%2B2OOXQWuzFpleLFRTNLR%2FFHqPL012%2Bj56vVSdtA0tz9fl6an0U58pPOHju2uT9sQtxOo0zxbYGJQ%2FWOc1wgGAiK2Jx8%2FRBYdPuVEG8tqKoWUtaLxhDDPDFQb9cIcIocRVnvwTlzy1NL6m6D3Yx7FeYqf9jqJvoRA4oKqdWS3cFIYatFasaSUMGFzXGXIhsL9ykwk8L5vwY6pgHP2r7A8T6LDjdR9zWpIM1v14yi6JArClLugj9IJYNCiwFmEw2TMOY80KSm4YGssV0eVaboLJAWBrU5aDufnUjfujx8YDmGjWVWK%2FXDupdY%2Fc%2B%2BAqB0FDm1sf1dG5jKIcZP1j7uI9IJqjGONaaWAK3VY18eim%2B%2FriwGH%2F6LF1Wy%2BIIwrjDMykAoxmZMBeJsIPnIJ%2FwHy76wc6XanGVu%2FCJlBylMnl1i&X-Amz-Signature=13182c0687758891c671f47b40d4038f27001259067e598b6ead882f49e07607&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665452HSDH%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuNNx9rIoTspHzAQLcgt4t7LgCeCP0ZFp4ObIiBrUY9AiBYFUKKRXun9z4HmPfSa1XyGg3wwbeFqvgdvbSa4bufpCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM3Dvtkq5XaLNFqArSKtwDE1ozF5MkN7DkzmbCrSL%2B%2BmMtWrcnrF2WqZsynakJYLFN%2Fn7AmOT1P%2BzAUmT4G76e9h5hfdpDotWfSGEYBEcRZ7Z9yQhQBMk3AtooNFGXfUyKihntHZtXrjZriDsTxY%2FCqOGPCxPmwzfoN4fJRh7EDrxozckp5S7Xy2vHi11QlUvxbzUCiKqgh6K7%2FmaZPksDffc0aFMt49dwUQIMlwO6ziNPJX9j9w2yml%2FU8Vgeg5fwYA9JMlDfgJBl6mKO1H0tu2C2WQiOwWKknUKFi0Y6dX8AVUdOMd4%2B46z5HvcpEDmfeja6ZgiIwa6wJoxUlggoFe1gdAQT0kaWykP1k5SM1eVF0XWVihUr81pxILTDaQvIjVw11UGANKdxkM4kDJrIXvbHotl6%2F9Ax6f%2FM53nHq4pvXGErRPGXnBXgH2qW6yuYVcgZdVNTqrUR7%2B2OOXQWuzFpleLFRTNLR%2FFHqPL012%2Bj56vVSdtA0tz9fl6an0U58pPOHju2uT9sQtxOo0zxbYGJQ%2FWOc1wgGAiK2Jx8%2FRBYdPuVEG8tqKoWUtaLxhDDPDFQb9cIcIocRVnvwTlzy1NL6m6D3Yx7FeYqf9jqJvoRA4oKqdWS3cFIYatFasaSUMGFzXGXIhsL9ykwk8L5vwY6pgHP2r7A8T6LDjdR9zWpIM1v14yi6JArClLugj9IJYNCiwFmEw2TMOY80KSm4YGssV0eVaboLJAWBrU5aDufnUjfujx8YDmGjWVWK%2FXDupdY%2Fc%2B%2BAqB0FDm1sf1dG5jKIcZP1j7uI9IJqjGONaaWAK3VY18eim%2B%2FriwGH%2F6LF1Wy%2BIIwrjDMykAoxmZMBeJsIPnIJ%2FwHy76wc6XanGVu%2FCJlBylMnl1i&X-Amz-Signature=63d54bf2bfdfbaa40a7b6b01e051d0c79c9397395abe1b03acbf8d8f6eec53d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665452HSDH%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuNNx9rIoTspHzAQLcgt4t7LgCeCP0ZFp4ObIiBrUY9AiBYFUKKRXun9z4HmPfSa1XyGg3wwbeFqvgdvbSa4bufpCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM3Dvtkq5XaLNFqArSKtwDE1ozF5MkN7DkzmbCrSL%2B%2BmMtWrcnrF2WqZsynakJYLFN%2Fn7AmOT1P%2BzAUmT4G76e9h5hfdpDotWfSGEYBEcRZ7Z9yQhQBMk3AtooNFGXfUyKihntHZtXrjZriDsTxY%2FCqOGPCxPmwzfoN4fJRh7EDrxozckp5S7Xy2vHi11QlUvxbzUCiKqgh6K7%2FmaZPksDffc0aFMt49dwUQIMlwO6ziNPJX9j9w2yml%2FU8Vgeg5fwYA9JMlDfgJBl6mKO1H0tu2C2WQiOwWKknUKFi0Y6dX8AVUdOMd4%2B46z5HvcpEDmfeja6ZgiIwa6wJoxUlggoFe1gdAQT0kaWykP1k5SM1eVF0XWVihUr81pxILTDaQvIjVw11UGANKdxkM4kDJrIXvbHotl6%2F9Ax6f%2FM53nHq4pvXGErRPGXnBXgH2qW6yuYVcgZdVNTqrUR7%2B2OOXQWuzFpleLFRTNLR%2FFHqPL012%2Bj56vVSdtA0tz9fl6an0U58pPOHju2uT9sQtxOo0zxbYGJQ%2FWOc1wgGAiK2Jx8%2FRBYdPuVEG8tqKoWUtaLxhDDPDFQb9cIcIocRVnvwTlzy1NL6m6D3Yx7FeYqf9jqJvoRA4oKqdWS3cFIYatFasaSUMGFzXGXIhsL9ykwk8L5vwY6pgHP2r7A8T6LDjdR9zWpIM1v14yi6JArClLugj9IJYNCiwFmEw2TMOY80KSm4YGssV0eVaboLJAWBrU5aDufnUjfujx8YDmGjWVWK%2FXDupdY%2Fc%2B%2BAqB0FDm1sf1dG5jKIcZP1j7uI9IJqjGONaaWAK3VY18eim%2B%2FriwGH%2F6LF1Wy%2BIIwrjDMykAoxmZMBeJsIPnIJ%2FwHy76wc6XanGVu%2FCJlBylMnl1i&X-Amz-Signature=eefa05b7bb952e9312c9e0eefc97caad8bf2c714254f7edf20bb45aff3bddbda&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665452HSDH%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICuNNx9rIoTspHzAQLcgt4t7LgCeCP0ZFp4ObIiBrUY9AiBYFUKKRXun9z4HmPfSa1XyGg3wwbeFqvgdvbSa4bufpCr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIM3Dvtkq5XaLNFqArSKtwDE1ozF5MkN7DkzmbCrSL%2B%2BmMtWrcnrF2WqZsynakJYLFN%2Fn7AmOT1P%2BzAUmT4G76e9h5hfdpDotWfSGEYBEcRZ7Z9yQhQBMk3AtooNFGXfUyKihntHZtXrjZriDsTxY%2FCqOGPCxPmwzfoN4fJRh7EDrxozckp5S7Xy2vHi11QlUvxbzUCiKqgh6K7%2FmaZPksDffc0aFMt49dwUQIMlwO6ziNPJX9j9w2yml%2FU8Vgeg5fwYA9JMlDfgJBl6mKO1H0tu2C2WQiOwWKknUKFi0Y6dX8AVUdOMd4%2B46z5HvcpEDmfeja6ZgiIwa6wJoxUlggoFe1gdAQT0kaWykP1k5SM1eVF0XWVihUr81pxILTDaQvIjVw11UGANKdxkM4kDJrIXvbHotl6%2F9Ax6f%2FM53nHq4pvXGErRPGXnBXgH2qW6yuYVcgZdVNTqrUR7%2B2OOXQWuzFpleLFRTNLR%2FFHqPL012%2Bj56vVSdtA0tz9fl6an0U58pPOHju2uT9sQtxOo0zxbYGJQ%2FWOc1wgGAiK2Jx8%2FRBYdPuVEG8tqKoWUtaLxhDDPDFQb9cIcIocRVnvwTlzy1NL6m6D3Yx7FeYqf9jqJvoRA4oKqdWS3cFIYatFasaSUMGFzXGXIhsL9ykwk8L5vwY6pgHP2r7A8T6LDjdR9zWpIM1v14yi6JArClLugj9IJYNCiwFmEw2TMOY80KSm4YGssV0eVaboLJAWBrU5aDufnUjfujx8YDmGjWVWK%2FXDupdY%2Fc%2B%2BAqB0FDm1sf1dG5jKIcZP1j7uI9IJqjGONaaWAK3VY18eim%2B%2FriwGH%2F6LF1Wy%2BIIwrjDMykAoxmZMBeJsIPnIJ%2FwHy76wc6XanGVu%2FCJlBylMnl1i&X-Amz-Signature=8bf95411aeff53909902b4ac883ec8ffcec267512abc964ce3db977e6fb7828f&X-Amz-SignedHeaders=host&x-id=GetObject)
