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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRTOVWLA%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T181225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDoWP4tYnii7mM3D6DmC8GXTmd27%2FNbHnYBknTpGpeKaAIgNJKzs8qm1zsxZe9sdxr%2FaFK6xwN0G2MV0ch57bMRgooq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEB5IOVOCM4nUamJNyrcA9tpatzcjuTuBpp8RU%2B%2BbgRXx%2FRK4NtJF5XiNgsgjpMS3wwE6kMEKx3d%2BmnMTPYnx5D1LtjEpRKa35iKX5Q606qYz24b%2F1%2BR1VnN3MVNJj5vhMwnJvK8h%2B2eLOitsGRdlYjz0yZMhAvALl8t66aA%2FHUYqdqZbyHOs1EO91oCCTPoHRut2Vfa%2BcKfSPEliKh%2FZe5GZRjOcrBQ6JESdr9UGlpKjeL7Mn03zldZEx4Nv4edncz%2BU6jo1aNF7nOgh4fEDiZ6tMoz%2FFFvVra5TbAl3J4tSIZTePNqBOCQUWcnVic6pI9%2B34J8t5uNQJfZJfJpSOO%2BAisgt8tmiV9Urp%2BsHiPRlk2I%2FhLtt59pdYJq7uOOISn98A27PD%2BXmPjVnZqZklsQOaU4jzV5JaBfd91LFADQa1T%2Fxf%2Fi0Qw6XHfww5nQvQ%2FuGpz3tnPNJDmLYkb%2BxzOf6sh9NA1iR6wqgW0LJjuNFWRxDJM2nTNmhYDsPpS2s5Ibu1YPbJLp9AyTWfBzCKWJIsZM0XTjAkEuy8KTnHQkLRJ%2BFVr2XH73ZxFe53jfGUYF6l3XLuvhnJikP8ARRfhFIloU6AQdkTuFv8DzbhxzoNgQOnSXhRzdtUhLvSsvqMJAq0R573emSvmSMMaq5sIGOqUBrWPxQCTe1csVFv7Z7yfOvBG24y42vTvq09LEsD9BovOImN%2BxJJMl5oIZWCIHLmF6dRIjZF07e8MwUAR8jDrbKRGh%2BxRgM7JGlWHX%2FeQL4pE0yHF%2FVCeFzXcvhz7rdjGckkGRV3oLhMlnzhed51H6yb5sJlqTfLCCxBAE4ELnP1%2FNtDSa72oeVIEhHbCvlVWUJxMYHH%2BBWcgeXZ5n1xcqSOW1y0Gc&X-Amz-Signature=1e13cbbf4b91a4b895244b1e00c7bd45de8742f7ebc4b58cb6e9fefeda12962b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRTOVWLA%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T181225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDoWP4tYnii7mM3D6DmC8GXTmd27%2FNbHnYBknTpGpeKaAIgNJKzs8qm1zsxZe9sdxr%2FaFK6xwN0G2MV0ch57bMRgooq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEB5IOVOCM4nUamJNyrcA9tpatzcjuTuBpp8RU%2B%2BbgRXx%2FRK4NtJF5XiNgsgjpMS3wwE6kMEKx3d%2BmnMTPYnx5D1LtjEpRKa35iKX5Q606qYz24b%2F1%2BR1VnN3MVNJj5vhMwnJvK8h%2B2eLOitsGRdlYjz0yZMhAvALl8t66aA%2FHUYqdqZbyHOs1EO91oCCTPoHRut2Vfa%2BcKfSPEliKh%2FZe5GZRjOcrBQ6JESdr9UGlpKjeL7Mn03zldZEx4Nv4edncz%2BU6jo1aNF7nOgh4fEDiZ6tMoz%2FFFvVra5TbAl3J4tSIZTePNqBOCQUWcnVic6pI9%2B34J8t5uNQJfZJfJpSOO%2BAisgt8tmiV9Urp%2BsHiPRlk2I%2FhLtt59pdYJq7uOOISn98A27PD%2BXmPjVnZqZklsQOaU4jzV5JaBfd91LFADQa1T%2Fxf%2Fi0Qw6XHfww5nQvQ%2FuGpz3tnPNJDmLYkb%2BxzOf6sh9NA1iR6wqgW0LJjuNFWRxDJM2nTNmhYDsPpS2s5Ibu1YPbJLp9AyTWfBzCKWJIsZM0XTjAkEuy8KTnHQkLRJ%2BFVr2XH73ZxFe53jfGUYF6l3XLuvhnJikP8ARRfhFIloU6AQdkTuFv8DzbhxzoNgQOnSXhRzdtUhLvSsvqMJAq0R573emSvmSMMaq5sIGOqUBrWPxQCTe1csVFv7Z7yfOvBG24y42vTvq09LEsD9BovOImN%2BxJJMl5oIZWCIHLmF6dRIjZF07e8MwUAR8jDrbKRGh%2BxRgM7JGlWHX%2FeQL4pE0yHF%2FVCeFzXcvhz7rdjGckkGRV3oLhMlnzhed51H6yb5sJlqTfLCCxBAE4ELnP1%2FNtDSa72oeVIEhHbCvlVWUJxMYHH%2BBWcgeXZ5n1xcqSOW1y0Gc&X-Amz-Signature=885c33ccb96638b50cec759f8534b1e1f614887f594e995f56437c7f031d4905&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRTOVWLA%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T181225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDoWP4tYnii7mM3D6DmC8GXTmd27%2FNbHnYBknTpGpeKaAIgNJKzs8qm1zsxZe9sdxr%2FaFK6xwN0G2MV0ch57bMRgooq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEB5IOVOCM4nUamJNyrcA9tpatzcjuTuBpp8RU%2B%2BbgRXx%2FRK4NtJF5XiNgsgjpMS3wwE6kMEKx3d%2BmnMTPYnx5D1LtjEpRKa35iKX5Q606qYz24b%2F1%2BR1VnN3MVNJj5vhMwnJvK8h%2B2eLOitsGRdlYjz0yZMhAvALl8t66aA%2FHUYqdqZbyHOs1EO91oCCTPoHRut2Vfa%2BcKfSPEliKh%2FZe5GZRjOcrBQ6JESdr9UGlpKjeL7Mn03zldZEx4Nv4edncz%2BU6jo1aNF7nOgh4fEDiZ6tMoz%2FFFvVra5TbAl3J4tSIZTePNqBOCQUWcnVic6pI9%2B34J8t5uNQJfZJfJpSOO%2BAisgt8tmiV9Urp%2BsHiPRlk2I%2FhLtt59pdYJq7uOOISn98A27PD%2BXmPjVnZqZklsQOaU4jzV5JaBfd91LFADQa1T%2Fxf%2Fi0Qw6XHfww5nQvQ%2FuGpz3tnPNJDmLYkb%2BxzOf6sh9NA1iR6wqgW0LJjuNFWRxDJM2nTNmhYDsPpS2s5Ibu1YPbJLp9AyTWfBzCKWJIsZM0XTjAkEuy8KTnHQkLRJ%2BFVr2XH73ZxFe53jfGUYF6l3XLuvhnJikP8ARRfhFIloU6AQdkTuFv8DzbhxzoNgQOnSXhRzdtUhLvSsvqMJAq0R573emSvmSMMaq5sIGOqUBrWPxQCTe1csVFv7Z7yfOvBG24y42vTvq09LEsD9BovOImN%2BxJJMl5oIZWCIHLmF6dRIjZF07e8MwUAR8jDrbKRGh%2BxRgM7JGlWHX%2FeQL4pE0yHF%2FVCeFzXcvhz7rdjGckkGRV3oLhMlnzhed51H6yb5sJlqTfLCCxBAE4ELnP1%2FNtDSa72oeVIEhHbCvlVWUJxMYHH%2BBWcgeXZ5n1xcqSOW1y0Gc&X-Amz-Signature=8614b49e88e840c9ea97d4532da8fe246781076869b55069f097c011a9bae60d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRTOVWLA%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T181225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDoWP4tYnii7mM3D6DmC8GXTmd27%2FNbHnYBknTpGpeKaAIgNJKzs8qm1zsxZe9sdxr%2FaFK6xwN0G2MV0ch57bMRgooq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEB5IOVOCM4nUamJNyrcA9tpatzcjuTuBpp8RU%2B%2BbgRXx%2FRK4NtJF5XiNgsgjpMS3wwE6kMEKx3d%2BmnMTPYnx5D1LtjEpRKa35iKX5Q606qYz24b%2F1%2BR1VnN3MVNJj5vhMwnJvK8h%2B2eLOitsGRdlYjz0yZMhAvALl8t66aA%2FHUYqdqZbyHOs1EO91oCCTPoHRut2Vfa%2BcKfSPEliKh%2FZe5GZRjOcrBQ6JESdr9UGlpKjeL7Mn03zldZEx4Nv4edncz%2BU6jo1aNF7nOgh4fEDiZ6tMoz%2FFFvVra5TbAl3J4tSIZTePNqBOCQUWcnVic6pI9%2B34J8t5uNQJfZJfJpSOO%2BAisgt8tmiV9Urp%2BsHiPRlk2I%2FhLtt59pdYJq7uOOISn98A27PD%2BXmPjVnZqZklsQOaU4jzV5JaBfd91LFADQa1T%2Fxf%2Fi0Qw6XHfww5nQvQ%2FuGpz3tnPNJDmLYkb%2BxzOf6sh9NA1iR6wqgW0LJjuNFWRxDJM2nTNmhYDsPpS2s5Ibu1YPbJLp9AyTWfBzCKWJIsZM0XTjAkEuy8KTnHQkLRJ%2BFVr2XH73ZxFe53jfGUYF6l3XLuvhnJikP8ARRfhFIloU6AQdkTuFv8DzbhxzoNgQOnSXhRzdtUhLvSsvqMJAq0R573emSvmSMMaq5sIGOqUBrWPxQCTe1csVFv7Z7yfOvBG24y42vTvq09LEsD9BovOImN%2BxJJMl5oIZWCIHLmF6dRIjZF07e8MwUAR8jDrbKRGh%2BxRgM7JGlWHX%2FeQL4pE0yHF%2FVCeFzXcvhz7rdjGckkGRV3oLhMlnzhed51H6yb5sJlqTfLCCxBAE4ELnP1%2FNtDSa72oeVIEhHbCvlVWUJxMYHH%2BBWcgeXZ5n1xcqSOW1y0Gc&X-Amz-Signature=564b4750cb43d4cd94032b95f921e8de81db4ef33e8a8af5b48b4256c8022192&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRTOVWLA%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T181225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDoWP4tYnii7mM3D6DmC8GXTmd27%2FNbHnYBknTpGpeKaAIgNJKzs8qm1zsxZe9sdxr%2FaFK6xwN0G2MV0ch57bMRgooq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEB5IOVOCM4nUamJNyrcA9tpatzcjuTuBpp8RU%2B%2BbgRXx%2FRK4NtJF5XiNgsgjpMS3wwE6kMEKx3d%2BmnMTPYnx5D1LtjEpRKa35iKX5Q606qYz24b%2F1%2BR1VnN3MVNJj5vhMwnJvK8h%2B2eLOitsGRdlYjz0yZMhAvALl8t66aA%2FHUYqdqZbyHOs1EO91oCCTPoHRut2Vfa%2BcKfSPEliKh%2FZe5GZRjOcrBQ6JESdr9UGlpKjeL7Mn03zldZEx4Nv4edncz%2BU6jo1aNF7nOgh4fEDiZ6tMoz%2FFFvVra5TbAl3J4tSIZTePNqBOCQUWcnVic6pI9%2B34J8t5uNQJfZJfJpSOO%2BAisgt8tmiV9Urp%2BsHiPRlk2I%2FhLtt59pdYJq7uOOISn98A27PD%2BXmPjVnZqZklsQOaU4jzV5JaBfd91LFADQa1T%2Fxf%2Fi0Qw6XHfww5nQvQ%2FuGpz3tnPNJDmLYkb%2BxzOf6sh9NA1iR6wqgW0LJjuNFWRxDJM2nTNmhYDsPpS2s5Ibu1YPbJLp9AyTWfBzCKWJIsZM0XTjAkEuy8KTnHQkLRJ%2BFVr2XH73ZxFe53jfGUYF6l3XLuvhnJikP8ARRfhFIloU6AQdkTuFv8DzbhxzoNgQOnSXhRzdtUhLvSsvqMJAq0R573emSvmSMMaq5sIGOqUBrWPxQCTe1csVFv7Z7yfOvBG24y42vTvq09LEsD9BovOImN%2BxJJMl5oIZWCIHLmF6dRIjZF07e8MwUAR8jDrbKRGh%2BxRgM7JGlWHX%2FeQL4pE0yHF%2FVCeFzXcvhz7rdjGckkGRV3oLhMlnzhed51H6yb5sJlqTfLCCxBAE4ELnP1%2FNtDSa72oeVIEhHbCvlVWUJxMYHH%2BBWcgeXZ5n1xcqSOW1y0Gc&X-Amz-Signature=f0964b526ee9dc6f21fe2a09e0f55fac553a5dd45452ce81c3056eaed2a6f995&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRTOVWLA%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T181225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDoWP4tYnii7mM3D6DmC8GXTmd27%2FNbHnYBknTpGpeKaAIgNJKzs8qm1zsxZe9sdxr%2FaFK6xwN0G2MV0ch57bMRgooq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDEB5IOVOCM4nUamJNyrcA9tpatzcjuTuBpp8RU%2B%2BbgRXx%2FRK4NtJF5XiNgsgjpMS3wwE6kMEKx3d%2BmnMTPYnx5D1LtjEpRKa35iKX5Q606qYz24b%2F1%2BR1VnN3MVNJj5vhMwnJvK8h%2B2eLOitsGRdlYjz0yZMhAvALl8t66aA%2FHUYqdqZbyHOs1EO91oCCTPoHRut2Vfa%2BcKfSPEliKh%2FZe5GZRjOcrBQ6JESdr9UGlpKjeL7Mn03zldZEx4Nv4edncz%2BU6jo1aNF7nOgh4fEDiZ6tMoz%2FFFvVra5TbAl3J4tSIZTePNqBOCQUWcnVic6pI9%2B34J8t5uNQJfZJfJpSOO%2BAisgt8tmiV9Urp%2BsHiPRlk2I%2FhLtt59pdYJq7uOOISn98A27PD%2BXmPjVnZqZklsQOaU4jzV5JaBfd91LFADQa1T%2Fxf%2Fi0Qw6XHfww5nQvQ%2FuGpz3tnPNJDmLYkb%2BxzOf6sh9NA1iR6wqgW0LJjuNFWRxDJM2nTNmhYDsPpS2s5Ibu1YPbJLp9AyTWfBzCKWJIsZM0XTjAkEuy8KTnHQkLRJ%2BFVr2XH73ZxFe53jfGUYF6l3XLuvhnJikP8ARRfhFIloU6AQdkTuFv8DzbhxzoNgQOnSXhRzdtUhLvSsvqMJAq0R573emSvmSMMaq5sIGOqUBrWPxQCTe1csVFv7Z7yfOvBG24y42vTvq09LEsD9BovOImN%2BxJJMl5oIZWCIHLmF6dRIjZF07e8MwUAR8jDrbKRGh%2BxRgM7JGlWHX%2FeQL4pE0yHF%2FVCeFzXcvhz7rdjGckkGRV3oLhMlnzhed51H6yb5sJlqTfLCCxBAE4ELnP1%2FNtDSa72oeVIEhHbCvlVWUJxMYHH%2BBWcgeXZ5n1xcqSOW1y0Gc&X-Amz-Signature=e8cf99c28d6b51563d0f52d683373ffa140eb778bd428fc246a7ae082b185a61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
