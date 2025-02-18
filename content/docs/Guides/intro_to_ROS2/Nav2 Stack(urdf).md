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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4BNJYDW%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T230737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDHsXhDGu7LuIpAjXG83dR1Gv4MZbbPbbPSO%2BBcgSKTswIgVVQtrxv8%2FZ1dzyNVzQg3oj6Ooxw8MXoVt1FxVZQu%2BJ4qiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCItCSHMDp7Z63YhYyrcAz5x3RD1wJb0MNC2ZdFKfktVS9eD7Sjn9As5iJ%2FR9ZC53fSyXWMCtrmxCDfeFWJFa2ZTues1gZNIInmCWAeFhv%2BsZtN11b7wwgtsJ%2BMGQPhza%2B5cG%2FDX%2BrTfmX2JBS8U4gLZjIz57W%2BhlGHMJGyW34lYZD%2B7AolNvRvOB5ZVKo3VdnCIcD11v%2Fp6rbZEYYLuBXhoytLCFaIEd1eQDXQh%2FZwhbvgcadxiQa4QvMrKU25IhQynCQCFHXPeX%2BaZzcXALV7S94i5wmSe2KNsssYHbjYyfndCgItl5%2FSuRi0yKpnsZ5yZPZFzjTsfdMchmXceQLKRH8CYSOi%2BQkTfCxLYcFHJMgKO%2BY0cWLmhWxxG%2FPLm6xkV184KiyjfNZ7ozBxtKgdrkvYDpmOhK7mwxM%2Fb0r1ZcSj6nH9PuP%2Be4Y1iARur1unJBvB5OOmehyW2MMqAt7BURbWkmb7NdQMOrzI9FC1OdIpbqNHCBukVjMXxR9tg11bCmr%2B7aGAhMqY8wT2XOtModo67urqvpdqVyTFMMLj%2FBqrFFsd%2BSuMMdJUoHjzu8EKzCQovZa93pJsaGflLWFr%2Bu8V33juBfpQcmiR3GBlteXr%2FQFWZdf%2FZNxlsGMGK4PdmXrq4QXFS%2BhkvMIuS1L0GOqUBLKoMy%2FCcpF1luKhQpiOd1oq1ENHZSQ2XOzo7BLTW56ccIe6R8sfZGDwZSKWqpm5IYme%2FlPTmjrwcKVMj2osO3X6t8v29HAqzA5MGS9qOLGo65LJ6DP9ePjIAr9kCpO2KevOQ4%2F63vvSBpzkwxnlfyf2p4LfgDXCyFsKsm%2BZ60Q258QH9YSM37FfUwaghV%2B69h9UScWueor2c8L0GLG5eldXnblpV&X-Amz-Signature=6c1d78955a226dd14c7c917c2af325f47d302ccfe4c83db085f7a1b257a5f704&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4BNJYDW%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T230737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDHsXhDGu7LuIpAjXG83dR1Gv4MZbbPbbPSO%2BBcgSKTswIgVVQtrxv8%2FZ1dzyNVzQg3oj6Ooxw8MXoVt1FxVZQu%2BJ4qiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCItCSHMDp7Z63YhYyrcAz5x3RD1wJb0MNC2ZdFKfktVS9eD7Sjn9As5iJ%2FR9ZC53fSyXWMCtrmxCDfeFWJFa2ZTues1gZNIInmCWAeFhv%2BsZtN11b7wwgtsJ%2BMGQPhza%2B5cG%2FDX%2BrTfmX2JBS8U4gLZjIz57W%2BhlGHMJGyW34lYZD%2B7AolNvRvOB5ZVKo3VdnCIcD11v%2Fp6rbZEYYLuBXhoytLCFaIEd1eQDXQh%2FZwhbvgcadxiQa4QvMrKU25IhQynCQCFHXPeX%2BaZzcXALV7S94i5wmSe2KNsssYHbjYyfndCgItl5%2FSuRi0yKpnsZ5yZPZFzjTsfdMchmXceQLKRH8CYSOi%2BQkTfCxLYcFHJMgKO%2BY0cWLmhWxxG%2FPLm6xkV184KiyjfNZ7ozBxtKgdrkvYDpmOhK7mwxM%2Fb0r1ZcSj6nH9PuP%2Be4Y1iARur1unJBvB5OOmehyW2MMqAt7BURbWkmb7NdQMOrzI9FC1OdIpbqNHCBukVjMXxR9tg11bCmr%2B7aGAhMqY8wT2XOtModo67urqvpdqVyTFMMLj%2FBqrFFsd%2BSuMMdJUoHjzu8EKzCQovZa93pJsaGflLWFr%2Bu8V33juBfpQcmiR3GBlteXr%2FQFWZdf%2FZNxlsGMGK4PdmXrq4QXFS%2BhkvMIuS1L0GOqUBLKoMy%2FCcpF1luKhQpiOd1oq1ENHZSQ2XOzo7BLTW56ccIe6R8sfZGDwZSKWqpm5IYme%2FlPTmjrwcKVMj2osO3X6t8v29HAqzA5MGS9qOLGo65LJ6DP9ePjIAr9kCpO2KevOQ4%2F63vvSBpzkwxnlfyf2p4LfgDXCyFsKsm%2BZ60Q258QH9YSM37FfUwaghV%2B69h9UScWueor2c8L0GLG5eldXnblpV&X-Amz-Signature=127b09f8adf4cf46ad96d5a2aa5885067c7ec7fdc6d67025415283476e3f5215&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4BNJYDW%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T230737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDHsXhDGu7LuIpAjXG83dR1Gv4MZbbPbbPSO%2BBcgSKTswIgVVQtrxv8%2FZ1dzyNVzQg3oj6Ooxw8MXoVt1FxVZQu%2BJ4qiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCItCSHMDp7Z63YhYyrcAz5x3RD1wJb0MNC2ZdFKfktVS9eD7Sjn9As5iJ%2FR9ZC53fSyXWMCtrmxCDfeFWJFa2ZTues1gZNIInmCWAeFhv%2BsZtN11b7wwgtsJ%2BMGQPhza%2B5cG%2FDX%2BrTfmX2JBS8U4gLZjIz57W%2BhlGHMJGyW34lYZD%2B7AolNvRvOB5ZVKo3VdnCIcD11v%2Fp6rbZEYYLuBXhoytLCFaIEd1eQDXQh%2FZwhbvgcadxiQa4QvMrKU25IhQynCQCFHXPeX%2BaZzcXALV7S94i5wmSe2KNsssYHbjYyfndCgItl5%2FSuRi0yKpnsZ5yZPZFzjTsfdMchmXceQLKRH8CYSOi%2BQkTfCxLYcFHJMgKO%2BY0cWLmhWxxG%2FPLm6xkV184KiyjfNZ7ozBxtKgdrkvYDpmOhK7mwxM%2Fb0r1ZcSj6nH9PuP%2Be4Y1iARur1unJBvB5OOmehyW2MMqAt7BURbWkmb7NdQMOrzI9FC1OdIpbqNHCBukVjMXxR9tg11bCmr%2B7aGAhMqY8wT2XOtModo67urqvpdqVyTFMMLj%2FBqrFFsd%2BSuMMdJUoHjzu8EKzCQovZa93pJsaGflLWFr%2Bu8V33juBfpQcmiR3GBlteXr%2FQFWZdf%2FZNxlsGMGK4PdmXrq4QXFS%2BhkvMIuS1L0GOqUBLKoMy%2FCcpF1luKhQpiOd1oq1ENHZSQ2XOzo7BLTW56ccIe6R8sfZGDwZSKWqpm5IYme%2FlPTmjrwcKVMj2osO3X6t8v29HAqzA5MGS9qOLGo65LJ6DP9ePjIAr9kCpO2KevOQ4%2F63vvSBpzkwxnlfyf2p4LfgDXCyFsKsm%2BZ60Q258QH9YSM37FfUwaghV%2B69h9UScWueor2c8L0GLG5eldXnblpV&X-Amz-Signature=09f42fd2f93e83d3c6ebe986ad0ea9d3269de4f90ed8a05874721aba6800cef7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4BNJYDW%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T230737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDHsXhDGu7LuIpAjXG83dR1Gv4MZbbPbbPSO%2BBcgSKTswIgVVQtrxv8%2FZ1dzyNVzQg3oj6Ooxw8MXoVt1FxVZQu%2BJ4qiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCItCSHMDp7Z63YhYyrcAz5x3RD1wJb0MNC2ZdFKfktVS9eD7Sjn9As5iJ%2FR9ZC53fSyXWMCtrmxCDfeFWJFa2ZTues1gZNIInmCWAeFhv%2BsZtN11b7wwgtsJ%2BMGQPhza%2B5cG%2FDX%2BrTfmX2JBS8U4gLZjIz57W%2BhlGHMJGyW34lYZD%2B7AolNvRvOB5ZVKo3VdnCIcD11v%2Fp6rbZEYYLuBXhoytLCFaIEd1eQDXQh%2FZwhbvgcadxiQa4QvMrKU25IhQynCQCFHXPeX%2BaZzcXALV7S94i5wmSe2KNsssYHbjYyfndCgItl5%2FSuRi0yKpnsZ5yZPZFzjTsfdMchmXceQLKRH8CYSOi%2BQkTfCxLYcFHJMgKO%2BY0cWLmhWxxG%2FPLm6xkV184KiyjfNZ7ozBxtKgdrkvYDpmOhK7mwxM%2Fb0r1ZcSj6nH9PuP%2Be4Y1iARur1unJBvB5OOmehyW2MMqAt7BURbWkmb7NdQMOrzI9FC1OdIpbqNHCBukVjMXxR9tg11bCmr%2B7aGAhMqY8wT2XOtModo67urqvpdqVyTFMMLj%2FBqrFFsd%2BSuMMdJUoHjzu8EKzCQovZa93pJsaGflLWFr%2Bu8V33juBfpQcmiR3GBlteXr%2FQFWZdf%2FZNxlsGMGK4PdmXrq4QXFS%2BhkvMIuS1L0GOqUBLKoMy%2FCcpF1luKhQpiOd1oq1ENHZSQ2XOzo7BLTW56ccIe6R8sfZGDwZSKWqpm5IYme%2FlPTmjrwcKVMj2osO3X6t8v29HAqzA5MGS9qOLGo65LJ6DP9ePjIAr9kCpO2KevOQ4%2F63vvSBpzkwxnlfyf2p4LfgDXCyFsKsm%2BZ60Q258QH9YSM37FfUwaghV%2B69h9UScWueor2c8L0GLG5eldXnblpV&X-Amz-Signature=e72a7eed4fb1b083075a801440dd19f47ed8d1fadc7b5d09803d43f409d6945c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4BNJYDW%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T230737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDHsXhDGu7LuIpAjXG83dR1Gv4MZbbPbbPSO%2BBcgSKTswIgVVQtrxv8%2FZ1dzyNVzQg3oj6Ooxw8MXoVt1FxVZQu%2BJ4qiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCItCSHMDp7Z63YhYyrcAz5x3RD1wJb0MNC2ZdFKfktVS9eD7Sjn9As5iJ%2FR9ZC53fSyXWMCtrmxCDfeFWJFa2ZTues1gZNIInmCWAeFhv%2BsZtN11b7wwgtsJ%2BMGQPhza%2B5cG%2FDX%2BrTfmX2JBS8U4gLZjIz57W%2BhlGHMJGyW34lYZD%2B7AolNvRvOB5ZVKo3VdnCIcD11v%2Fp6rbZEYYLuBXhoytLCFaIEd1eQDXQh%2FZwhbvgcadxiQa4QvMrKU25IhQynCQCFHXPeX%2BaZzcXALV7S94i5wmSe2KNsssYHbjYyfndCgItl5%2FSuRi0yKpnsZ5yZPZFzjTsfdMchmXceQLKRH8CYSOi%2BQkTfCxLYcFHJMgKO%2BY0cWLmhWxxG%2FPLm6xkV184KiyjfNZ7ozBxtKgdrkvYDpmOhK7mwxM%2Fb0r1ZcSj6nH9PuP%2Be4Y1iARur1unJBvB5OOmehyW2MMqAt7BURbWkmb7NdQMOrzI9FC1OdIpbqNHCBukVjMXxR9tg11bCmr%2B7aGAhMqY8wT2XOtModo67urqvpdqVyTFMMLj%2FBqrFFsd%2BSuMMdJUoHjzu8EKzCQovZa93pJsaGflLWFr%2Bu8V33juBfpQcmiR3GBlteXr%2FQFWZdf%2FZNxlsGMGK4PdmXrq4QXFS%2BhkvMIuS1L0GOqUBLKoMy%2FCcpF1luKhQpiOd1oq1ENHZSQ2XOzo7BLTW56ccIe6R8sfZGDwZSKWqpm5IYme%2FlPTmjrwcKVMj2osO3X6t8v29HAqzA5MGS9qOLGo65LJ6DP9ePjIAr9kCpO2KevOQ4%2F63vvSBpzkwxnlfyf2p4LfgDXCyFsKsm%2BZ60Q258QH9YSM37FfUwaghV%2B69h9UScWueor2c8L0GLG5eldXnblpV&X-Amz-Signature=f6ee335a329a0ed71b88a1dd7573b940a7361e93e6243f5c17884faf3ac8440b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4BNJYDW%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T230737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDHsXhDGu7LuIpAjXG83dR1Gv4MZbbPbbPSO%2BBcgSKTswIgVVQtrxv8%2FZ1dzyNVzQg3oj6Ooxw8MXoVt1FxVZQu%2BJ4qiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCItCSHMDp7Z63YhYyrcAz5x3RD1wJb0MNC2ZdFKfktVS9eD7Sjn9As5iJ%2FR9ZC53fSyXWMCtrmxCDfeFWJFa2ZTues1gZNIInmCWAeFhv%2BsZtN11b7wwgtsJ%2BMGQPhza%2B5cG%2FDX%2BrTfmX2JBS8U4gLZjIz57W%2BhlGHMJGyW34lYZD%2B7AolNvRvOB5ZVKo3VdnCIcD11v%2Fp6rbZEYYLuBXhoytLCFaIEd1eQDXQh%2FZwhbvgcadxiQa4QvMrKU25IhQynCQCFHXPeX%2BaZzcXALV7S94i5wmSe2KNsssYHbjYyfndCgItl5%2FSuRi0yKpnsZ5yZPZFzjTsfdMchmXceQLKRH8CYSOi%2BQkTfCxLYcFHJMgKO%2BY0cWLmhWxxG%2FPLm6xkV184KiyjfNZ7ozBxtKgdrkvYDpmOhK7mwxM%2Fb0r1ZcSj6nH9PuP%2Be4Y1iARur1unJBvB5OOmehyW2MMqAt7BURbWkmb7NdQMOrzI9FC1OdIpbqNHCBukVjMXxR9tg11bCmr%2B7aGAhMqY8wT2XOtModo67urqvpdqVyTFMMLj%2FBqrFFsd%2BSuMMdJUoHjzu8EKzCQovZa93pJsaGflLWFr%2Bu8V33juBfpQcmiR3GBlteXr%2FQFWZdf%2FZNxlsGMGK4PdmXrq4QXFS%2BhkvMIuS1L0GOqUBLKoMy%2FCcpF1luKhQpiOd1oq1ENHZSQ2XOzo7BLTW56ccIe6R8sfZGDwZSKWqpm5IYme%2FlPTmjrwcKVMj2osO3X6t8v29HAqzA5MGS9qOLGo65LJ6DP9ePjIAr9kCpO2KevOQ4%2F63vvSBpzkwxnlfyf2p4LfgDXCyFsKsm%2BZ60Q258QH9YSM37FfUwaghV%2B69h9UScWueor2c8L0GLG5eldXnblpV&X-Amz-Signature=5f42f934117e45c711faad1274290188d9ac204437f1a1a2bd422c27b50c4a22&X-Amz-SignedHeaders=host&x-id=GetObject)
