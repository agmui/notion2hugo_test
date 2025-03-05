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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VHPWSOH%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T021450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl5Y%2F1yB6J8vahQecyU4dJxX5Tk65jl93q01%2B%2BfCq%2BUgIhAM5WKSZ0SJJvcVBndLGZOSbk96MVx32JygUHrQEt6bVMKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrOW2r3VC8Qkz2Fnsq3AMh%2BJwJT2S1hFhILMnvpNULtzooTkSKft7syMZsv0JkLLhlSFAwey08%2BBGdMHTTHeyezCHeeFFOHmcuy0Qc1oEvHffD6cXFTjv30V8RhwpfKc0%2FTP%2BZ1rn%2FM7ECyuR7JMSnd6uanHHJrZzTEQRkNfh4I0DLOpsvWzn1rH%2BJDzDvNwraW2In0HeGTD6UU%2F%2FU%2Binu0ZwuY2FSlrK85MTsy5ZRK8mUdhHlwd9Y78yC5MguC4jjXEQIw63%2Fu0usZh%2FR9XoYoYyzrMGKDshmbGaklQDkYaM%2FdyhXtyyP6r6Adc2oVS%2BbefntzVo5yIAjuYDSgEuG282NH7tCm%2B0tp1ol4XdPjL5C70f0jYiMcm5ILSAWm4wHK42vDY%2BXdbE6K2eRzTkXtVojkFGrAKRogVrx9El%2FjP34Ngs2GVF9KeGTZu9MUxkOVF%2FwULqC2TOd8s1rCL0dzln9EDkyJ0qzE2WKWa0SEEngUXt%2BgGjvEM703ysSi0Ubx6YcHC8e9W9h3ubDyCaDpUhRXeTod1IF50mv7oqgnrGfYRoA751oPvSDvTHzKrC%2F%2BNHsSfTKQTcuhIL2959wRaSHfDaZGVQTkj%2F6w6gr%2FnS9Aw4FgMezKBmSUutdNwS1vbO%2BDKSY0C84XTDiw56%2BBjqkAUb3q6fMrPpW%2BBc5QjrxsoYkGH1KipKnYG8Ly3amYi5QLtb6nHafnb6DI0aCZJSuVLPIQ3Ehfn4apqtBIb4Rfst7HgG%2BOOKohb3FMXPptcBfu%2FjG%2FbG095lNiiTuwKiq4DaOL81lZVxZ7LZ53yMRLU9jQNz%2BAz6aWhUsKwIetyJlhxGN4xmTDFrsfG%2F%2BqljvDkqziCo26FQpU%2BfuQ9Y5m8tkYM6g&X-Amz-Signature=4e01abe592895d909e75fb80bf325cc9bdea57629fc87e11f414aabaf506768d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VHPWSOH%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T021450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl5Y%2F1yB6J8vahQecyU4dJxX5Tk65jl93q01%2B%2BfCq%2BUgIhAM5WKSZ0SJJvcVBndLGZOSbk96MVx32JygUHrQEt6bVMKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrOW2r3VC8Qkz2Fnsq3AMh%2BJwJT2S1hFhILMnvpNULtzooTkSKft7syMZsv0JkLLhlSFAwey08%2BBGdMHTTHeyezCHeeFFOHmcuy0Qc1oEvHffD6cXFTjv30V8RhwpfKc0%2FTP%2BZ1rn%2FM7ECyuR7JMSnd6uanHHJrZzTEQRkNfh4I0DLOpsvWzn1rH%2BJDzDvNwraW2In0HeGTD6UU%2F%2FU%2Binu0ZwuY2FSlrK85MTsy5ZRK8mUdhHlwd9Y78yC5MguC4jjXEQIw63%2Fu0usZh%2FR9XoYoYyzrMGKDshmbGaklQDkYaM%2FdyhXtyyP6r6Adc2oVS%2BbefntzVo5yIAjuYDSgEuG282NH7tCm%2B0tp1ol4XdPjL5C70f0jYiMcm5ILSAWm4wHK42vDY%2BXdbE6K2eRzTkXtVojkFGrAKRogVrx9El%2FjP34Ngs2GVF9KeGTZu9MUxkOVF%2FwULqC2TOd8s1rCL0dzln9EDkyJ0qzE2WKWa0SEEngUXt%2BgGjvEM703ysSi0Ubx6YcHC8e9W9h3ubDyCaDpUhRXeTod1IF50mv7oqgnrGfYRoA751oPvSDvTHzKrC%2F%2BNHsSfTKQTcuhIL2959wRaSHfDaZGVQTkj%2F6w6gr%2FnS9Aw4FgMezKBmSUutdNwS1vbO%2BDKSY0C84XTDiw56%2BBjqkAUb3q6fMrPpW%2BBc5QjrxsoYkGH1KipKnYG8Ly3amYi5QLtb6nHafnb6DI0aCZJSuVLPIQ3Ehfn4apqtBIb4Rfst7HgG%2BOOKohb3FMXPptcBfu%2FjG%2FbG095lNiiTuwKiq4DaOL81lZVxZ7LZ53yMRLU9jQNz%2BAz6aWhUsKwIetyJlhxGN4xmTDFrsfG%2F%2BqljvDkqziCo26FQpU%2BfuQ9Y5m8tkYM6g&X-Amz-Signature=a24f167d273b1e3b33760fb13e25d3db49d70b653c1c124b381b62d61bd92b3a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VHPWSOH%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T021450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl5Y%2F1yB6J8vahQecyU4dJxX5Tk65jl93q01%2B%2BfCq%2BUgIhAM5WKSZ0SJJvcVBndLGZOSbk96MVx32JygUHrQEt6bVMKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrOW2r3VC8Qkz2Fnsq3AMh%2BJwJT2S1hFhILMnvpNULtzooTkSKft7syMZsv0JkLLhlSFAwey08%2BBGdMHTTHeyezCHeeFFOHmcuy0Qc1oEvHffD6cXFTjv30V8RhwpfKc0%2FTP%2BZ1rn%2FM7ECyuR7JMSnd6uanHHJrZzTEQRkNfh4I0DLOpsvWzn1rH%2BJDzDvNwraW2In0HeGTD6UU%2F%2FU%2Binu0ZwuY2FSlrK85MTsy5ZRK8mUdhHlwd9Y78yC5MguC4jjXEQIw63%2Fu0usZh%2FR9XoYoYyzrMGKDshmbGaklQDkYaM%2FdyhXtyyP6r6Adc2oVS%2BbefntzVo5yIAjuYDSgEuG282NH7tCm%2B0tp1ol4XdPjL5C70f0jYiMcm5ILSAWm4wHK42vDY%2BXdbE6K2eRzTkXtVojkFGrAKRogVrx9El%2FjP34Ngs2GVF9KeGTZu9MUxkOVF%2FwULqC2TOd8s1rCL0dzln9EDkyJ0qzE2WKWa0SEEngUXt%2BgGjvEM703ysSi0Ubx6YcHC8e9W9h3ubDyCaDpUhRXeTod1IF50mv7oqgnrGfYRoA751oPvSDvTHzKrC%2F%2BNHsSfTKQTcuhIL2959wRaSHfDaZGVQTkj%2F6w6gr%2FnS9Aw4FgMezKBmSUutdNwS1vbO%2BDKSY0C84XTDiw56%2BBjqkAUb3q6fMrPpW%2BBc5QjrxsoYkGH1KipKnYG8Ly3amYi5QLtb6nHafnb6DI0aCZJSuVLPIQ3Ehfn4apqtBIb4Rfst7HgG%2BOOKohb3FMXPptcBfu%2FjG%2FbG095lNiiTuwKiq4DaOL81lZVxZ7LZ53yMRLU9jQNz%2BAz6aWhUsKwIetyJlhxGN4xmTDFrsfG%2F%2BqljvDkqziCo26FQpU%2BfuQ9Y5m8tkYM6g&X-Amz-Signature=bcc99c8323796ca2d5efb586cfbd9fdb51cf40a0a2d5a58094ab2b4040e335e5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VHPWSOH%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T021450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl5Y%2F1yB6J8vahQecyU4dJxX5Tk65jl93q01%2B%2BfCq%2BUgIhAM5WKSZ0SJJvcVBndLGZOSbk96MVx32JygUHrQEt6bVMKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrOW2r3VC8Qkz2Fnsq3AMh%2BJwJT2S1hFhILMnvpNULtzooTkSKft7syMZsv0JkLLhlSFAwey08%2BBGdMHTTHeyezCHeeFFOHmcuy0Qc1oEvHffD6cXFTjv30V8RhwpfKc0%2FTP%2BZ1rn%2FM7ECyuR7JMSnd6uanHHJrZzTEQRkNfh4I0DLOpsvWzn1rH%2BJDzDvNwraW2In0HeGTD6UU%2F%2FU%2Binu0ZwuY2FSlrK85MTsy5ZRK8mUdhHlwd9Y78yC5MguC4jjXEQIw63%2Fu0usZh%2FR9XoYoYyzrMGKDshmbGaklQDkYaM%2FdyhXtyyP6r6Adc2oVS%2BbefntzVo5yIAjuYDSgEuG282NH7tCm%2B0tp1ol4XdPjL5C70f0jYiMcm5ILSAWm4wHK42vDY%2BXdbE6K2eRzTkXtVojkFGrAKRogVrx9El%2FjP34Ngs2GVF9KeGTZu9MUxkOVF%2FwULqC2TOd8s1rCL0dzln9EDkyJ0qzE2WKWa0SEEngUXt%2BgGjvEM703ysSi0Ubx6YcHC8e9W9h3ubDyCaDpUhRXeTod1IF50mv7oqgnrGfYRoA751oPvSDvTHzKrC%2F%2BNHsSfTKQTcuhIL2959wRaSHfDaZGVQTkj%2F6w6gr%2FnS9Aw4FgMezKBmSUutdNwS1vbO%2BDKSY0C84XTDiw56%2BBjqkAUb3q6fMrPpW%2BBc5QjrxsoYkGH1KipKnYG8Ly3amYi5QLtb6nHafnb6DI0aCZJSuVLPIQ3Ehfn4apqtBIb4Rfst7HgG%2BOOKohb3FMXPptcBfu%2FjG%2FbG095lNiiTuwKiq4DaOL81lZVxZ7LZ53yMRLU9jQNz%2BAz6aWhUsKwIetyJlhxGN4xmTDFrsfG%2F%2BqljvDkqziCo26FQpU%2BfuQ9Y5m8tkYM6g&X-Amz-Signature=854d7008078872a3338da7712b414e689836af4080042d4352e0ef96c4d69d67&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VHPWSOH%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T021450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl5Y%2F1yB6J8vahQecyU4dJxX5Tk65jl93q01%2B%2BfCq%2BUgIhAM5WKSZ0SJJvcVBndLGZOSbk96MVx32JygUHrQEt6bVMKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrOW2r3VC8Qkz2Fnsq3AMh%2BJwJT2S1hFhILMnvpNULtzooTkSKft7syMZsv0JkLLhlSFAwey08%2BBGdMHTTHeyezCHeeFFOHmcuy0Qc1oEvHffD6cXFTjv30V8RhwpfKc0%2FTP%2BZ1rn%2FM7ECyuR7JMSnd6uanHHJrZzTEQRkNfh4I0DLOpsvWzn1rH%2BJDzDvNwraW2In0HeGTD6UU%2F%2FU%2Binu0ZwuY2FSlrK85MTsy5ZRK8mUdhHlwd9Y78yC5MguC4jjXEQIw63%2Fu0usZh%2FR9XoYoYyzrMGKDshmbGaklQDkYaM%2FdyhXtyyP6r6Adc2oVS%2BbefntzVo5yIAjuYDSgEuG282NH7tCm%2B0tp1ol4XdPjL5C70f0jYiMcm5ILSAWm4wHK42vDY%2BXdbE6K2eRzTkXtVojkFGrAKRogVrx9El%2FjP34Ngs2GVF9KeGTZu9MUxkOVF%2FwULqC2TOd8s1rCL0dzln9EDkyJ0qzE2WKWa0SEEngUXt%2BgGjvEM703ysSi0Ubx6YcHC8e9W9h3ubDyCaDpUhRXeTod1IF50mv7oqgnrGfYRoA751oPvSDvTHzKrC%2F%2BNHsSfTKQTcuhIL2959wRaSHfDaZGVQTkj%2F6w6gr%2FnS9Aw4FgMezKBmSUutdNwS1vbO%2BDKSY0C84XTDiw56%2BBjqkAUb3q6fMrPpW%2BBc5QjrxsoYkGH1KipKnYG8Ly3amYi5QLtb6nHafnb6DI0aCZJSuVLPIQ3Ehfn4apqtBIb4Rfst7HgG%2BOOKohb3FMXPptcBfu%2FjG%2FbG095lNiiTuwKiq4DaOL81lZVxZ7LZ53yMRLU9jQNz%2BAz6aWhUsKwIetyJlhxGN4xmTDFrsfG%2F%2BqljvDkqziCo26FQpU%2BfuQ9Y5m8tkYM6g&X-Amz-Signature=6a72d8fda0f3e7fcd5ac294d1c64b7253238af38d0dcae4f8b785ee1b54e3db3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VHPWSOH%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T021450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCl5Y%2F1yB6J8vahQecyU4dJxX5Tk65jl93q01%2B%2BfCq%2BUgIhAM5WKSZ0SJJvcVBndLGZOSbk96MVx32JygUHrQEt6bVMKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzrOW2r3VC8Qkz2Fnsq3AMh%2BJwJT2S1hFhILMnvpNULtzooTkSKft7syMZsv0JkLLhlSFAwey08%2BBGdMHTTHeyezCHeeFFOHmcuy0Qc1oEvHffD6cXFTjv30V8RhwpfKc0%2FTP%2BZ1rn%2FM7ECyuR7JMSnd6uanHHJrZzTEQRkNfh4I0DLOpsvWzn1rH%2BJDzDvNwraW2In0HeGTD6UU%2F%2FU%2Binu0ZwuY2FSlrK85MTsy5ZRK8mUdhHlwd9Y78yC5MguC4jjXEQIw63%2Fu0usZh%2FR9XoYoYyzrMGKDshmbGaklQDkYaM%2FdyhXtyyP6r6Adc2oVS%2BbefntzVo5yIAjuYDSgEuG282NH7tCm%2B0tp1ol4XdPjL5C70f0jYiMcm5ILSAWm4wHK42vDY%2BXdbE6K2eRzTkXtVojkFGrAKRogVrx9El%2FjP34Ngs2GVF9KeGTZu9MUxkOVF%2FwULqC2TOd8s1rCL0dzln9EDkyJ0qzE2WKWa0SEEngUXt%2BgGjvEM703ysSi0Ubx6YcHC8e9W9h3ubDyCaDpUhRXeTod1IF50mv7oqgnrGfYRoA751oPvSDvTHzKrC%2F%2BNHsSfTKQTcuhIL2959wRaSHfDaZGVQTkj%2F6w6gr%2FnS9Aw4FgMezKBmSUutdNwS1vbO%2BDKSY0C84XTDiw56%2BBjqkAUb3q6fMrPpW%2BBc5QjrxsoYkGH1KipKnYG8Ly3amYi5QLtb6nHafnb6DI0aCZJSuVLPIQ3Ehfn4apqtBIb4Rfst7HgG%2BOOKohb3FMXPptcBfu%2FjG%2FbG095lNiiTuwKiq4DaOL81lZVxZ7LZ53yMRLU9jQNz%2BAz6aWhUsKwIetyJlhxGN4xmTDFrsfG%2F%2BqljvDkqziCo26FQpU%2BfuQ9Y5m8tkYM6g&X-Amz-Signature=786e56572d0d5bc968a00c6e0b4117a726787dc1a49686555a18d681e65bee77&X-Amz-SignedHeaders=host&x-id=GetObject)
