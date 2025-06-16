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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRUW6ZYM%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T210840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCGf164UGA5nPH4dJULSBaqmZzBJPD9U%2B4wQe5kkXP32gIgHmKWXRf9%2By%2B4Io6ITAK503iZsj8AKdPG9mzrawKD%2F6Aq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDINRg43zYT2X%2BBFDRCrcA6vbGzkZoF056iu1CYfMdmTeufSRfrqDAA9AFOkB%2BEdyQ%2BzsSxtHH3%2FGQ5hC4k2hV%2FUqvW2cpIBORQExjcR0BSkBI7E%2BGihaQgLsJ3HI2L6H%2FI4dt7mMmcJ2BnYKeiP03o51vombvuy%2Be3IsJv%2B24T8OFF9UMvPKbhxsSe1NvdWIfEl27LPm4BZxgJeuLMe%2FOGctSe62Zhlu424lxdAewSlbxkPUnzlOe0VCAb%2B3Zz0jTWm3CYQ5jFfm8UUvhNFl%2BSfWs0jNGXp2TaiMXe13mU%2Bi4EpMjpdEEcqzigEIdeVNbMhcvH90ccQzx2ybILnKT3Rjk%2Bcn2mztnKjmJeByYpytNC1vyUqA10eM0iNb1Td2v1j2Pll0F12zARQFyVwXPNkA1gTkuCg04AJVHP%2FFVF%2FGOQs8FDnqx8JBlDI%2BH7jM0cAycbZlisXvpSqlp4Ys%2BCA8%2Bj%2FoWxY7o5H5VOD%2FF4b0N6%2FREtYAXIMDtOOg6a%2BV26fLN2pRc9v%2BWP7NHjh4QjiEUS24nK6%2BLd64kzm0TDfregtOCqAdvPf0d222eMn%2BIaTjXtwZ6nYUecwUjXUQeDKMXnNgVQ%2BEK9fsCI6jpAt0UiqpVrcdR8lJsvagbltyKWJuy2ExJUj5r3KsMMCOwsIGOqUBeQ3a9nT45Uqju40F%2FGjIdp%2BzpA0FLfbwJxLa1HtvKDPvrORV2YQFAhnrURQepVEaAepPeEJ07cIrfE%2FSBIxHffJumRZjGQwyGX3WnWkUT0Fj0If%2BW1htsEV%2B0c86F9L1Uiz1ro%2F2hyHumAz74ba3Cy6QLyncvhpYYSCg5aERWVW%2FibXNrKQ9Vqx3hiGjfIYSyZs8jnmHJP%2FOKbz9PN60zFMvhkr9&X-Amz-Signature=3556d24c16614e57bfc7fab9cde75255f2f7148597d0af609ffc295be3f88440&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRUW6ZYM%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T210840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCGf164UGA5nPH4dJULSBaqmZzBJPD9U%2B4wQe5kkXP32gIgHmKWXRf9%2By%2B4Io6ITAK503iZsj8AKdPG9mzrawKD%2F6Aq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDINRg43zYT2X%2BBFDRCrcA6vbGzkZoF056iu1CYfMdmTeufSRfrqDAA9AFOkB%2BEdyQ%2BzsSxtHH3%2FGQ5hC4k2hV%2FUqvW2cpIBORQExjcR0BSkBI7E%2BGihaQgLsJ3HI2L6H%2FI4dt7mMmcJ2BnYKeiP03o51vombvuy%2Be3IsJv%2B24T8OFF9UMvPKbhxsSe1NvdWIfEl27LPm4BZxgJeuLMe%2FOGctSe62Zhlu424lxdAewSlbxkPUnzlOe0VCAb%2B3Zz0jTWm3CYQ5jFfm8UUvhNFl%2BSfWs0jNGXp2TaiMXe13mU%2Bi4EpMjpdEEcqzigEIdeVNbMhcvH90ccQzx2ybILnKT3Rjk%2Bcn2mztnKjmJeByYpytNC1vyUqA10eM0iNb1Td2v1j2Pll0F12zARQFyVwXPNkA1gTkuCg04AJVHP%2FFVF%2FGOQs8FDnqx8JBlDI%2BH7jM0cAycbZlisXvpSqlp4Ys%2BCA8%2Bj%2FoWxY7o5H5VOD%2FF4b0N6%2FREtYAXIMDtOOg6a%2BV26fLN2pRc9v%2BWP7NHjh4QjiEUS24nK6%2BLd64kzm0TDfregtOCqAdvPf0d222eMn%2BIaTjXtwZ6nYUecwUjXUQeDKMXnNgVQ%2BEK9fsCI6jpAt0UiqpVrcdR8lJsvagbltyKWJuy2ExJUj5r3KsMMCOwsIGOqUBeQ3a9nT45Uqju40F%2FGjIdp%2BzpA0FLfbwJxLa1HtvKDPvrORV2YQFAhnrURQepVEaAepPeEJ07cIrfE%2FSBIxHffJumRZjGQwyGX3WnWkUT0Fj0If%2BW1htsEV%2B0c86F9L1Uiz1ro%2F2hyHumAz74ba3Cy6QLyncvhpYYSCg5aERWVW%2FibXNrKQ9Vqx3hiGjfIYSyZs8jnmHJP%2FOKbz9PN60zFMvhkr9&X-Amz-Signature=4c9106c4139c217e7525e0eb9126ed33b1f80589b74942b9ed1e1c97833d8278&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRUW6ZYM%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T210840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCGf164UGA5nPH4dJULSBaqmZzBJPD9U%2B4wQe5kkXP32gIgHmKWXRf9%2By%2B4Io6ITAK503iZsj8AKdPG9mzrawKD%2F6Aq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDINRg43zYT2X%2BBFDRCrcA6vbGzkZoF056iu1CYfMdmTeufSRfrqDAA9AFOkB%2BEdyQ%2BzsSxtHH3%2FGQ5hC4k2hV%2FUqvW2cpIBORQExjcR0BSkBI7E%2BGihaQgLsJ3HI2L6H%2FI4dt7mMmcJ2BnYKeiP03o51vombvuy%2Be3IsJv%2B24T8OFF9UMvPKbhxsSe1NvdWIfEl27LPm4BZxgJeuLMe%2FOGctSe62Zhlu424lxdAewSlbxkPUnzlOe0VCAb%2B3Zz0jTWm3CYQ5jFfm8UUvhNFl%2BSfWs0jNGXp2TaiMXe13mU%2Bi4EpMjpdEEcqzigEIdeVNbMhcvH90ccQzx2ybILnKT3Rjk%2Bcn2mztnKjmJeByYpytNC1vyUqA10eM0iNb1Td2v1j2Pll0F12zARQFyVwXPNkA1gTkuCg04AJVHP%2FFVF%2FGOQs8FDnqx8JBlDI%2BH7jM0cAycbZlisXvpSqlp4Ys%2BCA8%2Bj%2FoWxY7o5H5VOD%2FF4b0N6%2FREtYAXIMDtOOg6a%2BV26fLN2pRc9v%2BWP7NHjh4QjiEUS24nK6%2BLd64kzm0TDfregtOCqAdvPf0d222eMn%2BIaTjXtwZ6nYUecwUjXUQeDKMXnNgVQ%2BEK9fsCI6jpAt0UiqpVrcdR8lJsvagbltyKWJuy2ExJUj5r3KsMMCOwsIGOqUBeQ3a9nT45Uqju40F%2FGjIdp%2BzpA0FLfbwJxLa1HtvKDPvrORV2YQFAhnrURQepVEaAepPeEJ07cIrfE%2FSBIxHffJumRZjGQwyGX3WnWkUT0Fj0If%2BW1htsEV%2B0c86F9L1Uiz1ro%2F2hyHumAz74ba3Cy6QLyncvhpYYSCg5aERWVW%2FibXNrKQ9Vqx3hiGjfIYSyZs8jnmHJP%2FOKbz9PN60zFMvhkr9&X-Amz-Signature=5e3167b00d1f3bd37d3a6a93b11e22127e3cf59ef30508a21e12a95f1d59cb9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRUW6ZYM%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T210840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCGf164UGA5nPH4dJULSBaqmZzBJPD9U%2B4wQe5kkXP32gIgHmKWXRf9%2By%2B4Io6ITAK503iZsj8AKdPG9mzrawKD%2F6Aq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDINRg43zYT2X%2BBFDRCrcA6vbGzkZoF056iu1CYfMdmTeufSRfrqDAA9AFOkB%2BEdyQ%2BzsSxtHH3%2FGQ5hC4k2hV%2FUqvW2cpIBORQExjcR0BSkBI7E%2BGihaQgLsJ3HI2L6H%2FI4dt7mMmcJ2BnYKeiP03o51vombvuy%2Be3IsJv%2B24T8OFF9UMvPKbhxsSe1NvdWIfEl27LPm4BZxgJeuLMe%2FOGctSe62Zhlu424lxdAewSlbxkPUnzlOe0VCAb%2B3Zz0jTWm3CYQ5jFfm8UUvhNFl%2BSfWs0jNGXp2TaiMXe13mU%2Bi4EpMjpdEEcqzigEIdeVNbMhcvH90ccQzx2ybILnKT3Rjk%2Bcn2mztnKjmJeByYpytNC1vyUqA10eM0iNb1Td2v1j2Pll0F12zARQFyVwXPNkA1gTkuCg04AJVHP%2FFVF%2FGOQs8FDnqx8JBlDI%2BH7jM0cAycbZlisXvpSqlp4Ys%2BCA8%2Bj%2FoWxY7o5H5VOD%2FF4b0N6%2FREtYAXIMDtOOg6a%2BV26fLN2pRc9v%2BWP7NHjh4QjiEUS24nK6%2BLd64kzm0TDfregtOCqAdvPf0d222eMn%2BIaTjXtwZ6nYUecwUjXUQeDKMXnNgVQ%2BEK9fsCI6jpAt0UiqpVrcdR8lJsvagbltyKWJuy2ExJUj5r3KsMMCOwsIGOqUBeQ3a9nT45Uqju40F%2FGjIdp%2BzpA0FLfbwJxLa1HtvKDPvrORV2YQFAhnrURQepVEaAepPeEJ07cIrfE%2FSBIxHffJumRZjGQwyGX3WnWkUT0Fj0If%2BW1htsEV%2B0c86F9L1Uiz1ro%2F2hyHumAz74ba3Cy6QLyncvhpYYSCg5aERWVW%2FibXNrKQ9Vqx3hiGjfIYSyZs8jnmHJP%2FOKbz9PN60zFMvhkr9&X-Amz-Signature=044a219a17de8bf2f5d7ad6aaa5a9f13a841fd27b2b47a8d3704aab3c26355d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRUW6ZYM%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T210840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCGf164UGA5nPH4dJULSBaqmZzBJPD9U%2B4wQe5kkXP32gIgHmKWXRf9%2By%2B4Io6ITAK503iZsj8AKdPG9mzrawKD%2F6Aq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDINRg43zYT2X%2BBFDRCrcA6vbGzkZoF056iu1CYfMdmTeufSRfrqDAA9AFOkB%2BEdyQ%2BzsSxtHH3%2FGQ5hC4k2hV%2FUqvW2cpIBORQExjcR0BSkBI7E%2BGihaQgLsJ3HI2L6H%2FI4dt7mMmcJ2BnYKeiP03o51vombvuy%2Be3IsJv%2B24T8OFF9UMvPKbhxsSe1NvdWIfEl27LPm4BZxgJeuLMe%2FOGctSe62Zhlu424lxdAewSlbxkPUnzlOe0VCAb%2B3Zz0jTWm3CYQ5jFfm8UUvhNFl%2BSfWs0jNGXp2TaiMXe13mU%2Bi4EpMjpdEEcqzigEIdeVNbMhcvH90ccQzx2ybILnKT3Rjk%2Bcn2mztnKjmJeByYpytNC1vyUqA10eM0iNb1Td2v1j2Pll0F12zARQFyVwXPNkA1gTkuCg04AJVHP%2FFVF%2FGOQs8FDnqx8JBlDI%2BH7jM0cAycbZlisXvpSqlp4Ys%2BCA8%2Bj%2FoWxY7o5H5VOD%2FF4b0N6%2FREtYAXIMDtOOg6a%2BV26fLN2pRc9v%2BWP7NHjh4QjiEUS24nK6%2BLd64kzm0TDfregtOCqAdvPf0d222eMn%2BIaTjXtwZ6nYUecwUjXUQeDKMXnNgVQ%2BEK9fsCI6jpAt0UiqpVrcdR8lJsvagbltyKWJuy2ExJUj5r3KsMMCOwsIGOqUBeQ3a9nT45Uqju40F%2FGjIdp%2BzpA0FLfbwJxLa1HtvKDPvrORV2YQFAhnrURQepVEaAepPeEJ07cIrfE%2FSBIxHffJumRZjGQwyGX3WnWkUT0Fj0If%2BW1htsEV%2B0c86F9L1Uiz1ro%2F2hyHumAz74ba3Cy6QLyncvhpYYSCg5aERWVW%2FibXNrKQ9Vqx3hiGjfIYSyZs8jnmHJP%2FOKbz9PN60zFMvhkr9&X-Amz-Signature=47b87f80b3d44c338e1029ca9a93137f5df7b57736978dfed6fbae5146e3caa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRUW6ZYM%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T210840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCGf164UGA5nPH4dJULSBaqmZzBJPD9U%2B4wQe5kkXP32gIgHmKWXRf9%2By%2B4Io6ITAK503iZsj8AKdPG9mzrawKD%2F6Aq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDINRg43zYT2X%2BBFDRCrcA6vbGzkZoF056iu1CYfMdmTeufSRfrqDAA9AFOkB%2BEdyQ%2BzsSxtHH3%2FGQ5hC4k2hV%2FUqvW2cpIBORQExjcR0BSkBI7E%2BGihaQgLsJ3HI2L6H%2FI4dt7mMmcJ2BnYKeiP03o51vombvuy%2Be3IsJv%2B24T8OFF9UMvPKbhxsSe1NvdWIfEl27LPm4BZxgJeuLMe%2FOGctSe62Zhlu424lxdAewSlbxkPUnzlOe0VCAb%2B3Zz0jTWm3CYQ5jFfm8UUvhNFl%2BSfWs0jNGXp2TaiMXe13mU%2Bi4EpMjpdEEcqzigEIdeVNbMhcvH90ccQzx2ybILnKT3Rjk%2Bcn2mztnKjmJeByYpytNC1vyUqA10eM0iNb1Td2v1j2Pll0F12zARQFyVwXPNkA1gTkuCg04AJVHP%2FFVF%2FGOQs8FDnqx8JBlDI%2BH7jM0cAycbZlisXvpSqlp4Ys%2BCA8%2Bj%2FoWxY7o5H5VOD%2FF4b0N6%2FREtYAXIMDtOOg6a%2BV26fLN2pRc9v%2BWP7NHjh4QjiEUS24nK6%2BLd64kzm0TDfregtOCqAdvPf0d222eMn%2BIaTjXtwZ6nYUecwUjXUQeDKMXnNgVQ%2BEK9fsCI6jpAt0UiqpVrcdR8lJsvagbltyKWJuy2ExJUj5r3KsMMCOwsIGOqUBeQ3a9nT45Uqju40F%2FGjIdp%2BzpA0FLfbwJxLa1HtvKDPvrORV2YQFAhnrURQepVEaAepPeEJ07cIrfE%2FSBIxHffJumRZjGQwyGX3WnWkUT0Fj0If%2BW1htsEV%2B0c86F9L1Uiz1ro%2F2hyHumAz74ba3Cy6QLyncvhpYYSCg5aERWVW%2FibXNrKQ9Vqx3hiGjfIYSyZs8jnmHJP%2FOKbz9PN60zFMvhkr9&X-Amz-Signature=44091b1ed372ff642642d8ebfc58338e01a23a04f13b54a7cb3a89d54db067cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
