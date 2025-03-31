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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNLERVZ7%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQD%2F%2BRX1Ik8SB3eLxPU8JzDcxwe%2Fx1jXYAM0qCF3DJ3rdAIhAPAdL%2B4RTEXw%2BK13L63MoOI1I7zWfj06iapmyuc1hKPTKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9U%2BmlByLq49cCSxsq3AOiPbNGG01X%2BKtj0ucoBG08%2Flq7iw35UVsWj8WyDq8qeM6oaCM3Ywj1%2BWqvNWDbMTRRuHiLE5TfKPamcUmiPhGZa57tuaSnceB6KV%2BhFixIorRw32j1RQMe5nYriAfuIdPPYQrzcA3kPpr3HjsdVrXeAkLOJEqFZI9J8UNOGqoVVB4WO1y953EXtSBQCXYKzrX9ynlGv13vvjvUzdledNIvQVbHk%2FnyJxZFJZm08%2B3U1Xobw9PjnMIpUnUubUOjsGnMZVipnZcKOPAWPccXAjdZ%2F17Sc5Zm1AyYZILYBKZBeAEadESGRugWkR1bdMTVIaoSeClKQXLRzQH0rszDf71HM%2BJhc%2Fte9XD3d6OshHSXCDsG3pD1Ddv7UAIWFj0%2BlXIKQBdUunOIZ3DqQetZwBH4JVOmSeXdLzwm7n9AhIY3OfGMj%2BCArJVBaD%2FGZ6sKiOju83tpHdAvTo18ow6MLB7XXf%2BXfJ5VxuS%2Buy%2FSY4ec33YZonjtZVmjMA1RXIgnhNxoRemzvON3Q%2FsjmJ9iCARvmUxBuXuNi5jWOExlzPvyg0IXrx60wxA%2BmIedOwMydVa%2FF8X9TGuJpVGuJNvUop4hnRX6BH2BEztMCqjVLPDEJdgjB5TqE7zysixDIDDKuKu%2FBjqkAViv7CCSxoCByY25gWyvHKzsDV2X%2FTkT6iD%2FkAfychuOCFHQfkTI8aB11f%2FGGADWnSnYLI6nN2VkK95I5CXoDKMouaKEU5TtR7Eij1fY%2FZGtV6jdqX0fTiNdRtZHJJIELh0as0khGoGuPjRxIrMg7cfqyEX9RIulO2YhNW4NdHiXaSepc1sUAkflbmpwkErd336kLskF2X%2FTV9fcyDulEUHVHmk9&X-Amz-Signature=72a08a6bf2fdba08ba49f78d3bb27d9dd097ecbc7729f749a5e01346afa4ad43&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNLERVZ7%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQD%2F%2BRX1Ik8SB3eLxPU8JzDcxwe%2Fx1jXYAM0qCF3DJ3rdAIhAPAdL%2B4RTEXw%2BK13L63MoOI1I7zWfj06iapmyuc1hKPTKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9U%2BmlByLq49cCSxsq3AOiPbNGG01X%2BKtj0ucoBG08%2Flq7iw35UVsWj8WyDq8qeM6oaCM3Ywj1%2BWqvNWDbMTRRuHiLE5TfKPamcUmiPhGZa57tuaSnceB6KV%2BhFixIorRw32j1RQMe5nYriAfuIdPPYQrzcA3kPpr3HjsdVrXeAkLOJEqFZI9J8UNOGqoVVB4WO1y953EXtSBQCXYKzrX9ynlGv13vvjvUzdledNIvQVbHk%2FnyJxZFJZm08%2B3U1Xobw9PjnMIpUnUubUOjsGnMZVipnZcKOPAWPccXAjdZ%2F17Sc5Zm1AyYZILYBKZBeAEadESGRugWkR1bdMTVIaoSeClKQXLRzQH0rszDf71HM%2BJhc%2Fte9XD3d6OshHSXCDsG3pD1Ddv7UAIWFj0%2BlXIKQBdUunOIZ3DqQetZwBH4JVOmSeXdLzwm7n9AhIY3OfGMj%2BCArJVBaD%2FGZ6sKiOju83tpHdAvTo18ow6MLB7XXf%2BXfJ5VxuS%2Buy%2FSY4ec33YZonjtZVmjMA1RXIgnhNxoRemzvON3Q%2FsjmJ9iCARvmUxBuXuNi5jWOExlzPvyg0IXrx60wxA%2BmIedOwMydVa%2FF8X9TGuJpVGuJNvUop4hnRX6BH2BEztMCqjVLPDEJdgjB5TqE7zysixDIDDKuKu%2FBjqkAViv7CCSxoCByY25gWyvHKzsDV2X%2FTkT6iD%2FkAfychuOCFHQfkTI8aB11f%2FGGADWnSnYLI6nN2VkK95I5CXoDKMouaKEU5TtR7Eij1fY%2FZGtV6jdqX0fTiNdRtZHJJIELh0as0khGoGuPjRxIrMg7cfqyEX9RIulO2YhNW4NdHiXaSepc1sUAkflbmpwkErd336kLskF2X%2FTV9fcyDulEUHVHmk9&X-Amz-Signature=92c3f5a415243436d754d228cdd3e4a30d49e422873a2eb325e3f581c93df848&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNLERVZ7%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQD%2F%2BRX1Ik8SB3eLxPU8JzDcxwe%2Fx1jXYAM0qCF3DJ3rdAIhAPAdL%2B4RTEXw%2BK13L63MoOI1I7zWfj06iapmyuc1hKPTKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9U%2BmlByLq49cCSxsq3AOiPbNGG01X%2BKtj0ucoBG08%2Flq7iw35UVsWj8WyDq8qeM6oaCM3Ywj1%2BWqvNWDbMTRRuHiLE5TfKPamcUmiPhGZa57tuaSnceB6KV%2BhFixIorRw32j1RQMe5nYriAfuIdPPYQrzcA3kPpr3HjsdVrXeAkLOJEqFZI9J8UNOGqoVVB4WO1y953EXtSBQCXYKzrX9ynlGv13vvjvUzdledNIvQVbHk%2FnyJxZFJZm08%2B3U1Xobw9PjnMIpUnUubUOjsGnMZVipnZcKOPAWPccXAjdZ%2F17Sc5Zm1AyYZILYBKZBeAEadESGRugWkR1bdMTVIaoSeClKQXLRzQH0rszDf71HM%2BJhc%2Fte9XD3d6OshHSXCDsG3pD1Ddv7UAIWFj0%2BlXIKQBdUunOIZ3DqQetZwBH4JVOmSeXdLzwm7n9AhIY3OfGMj%2BCArJVBaD%2FGZ6sKiOju83tpHdAvTo18ow6MLB7XXf%2BXfJ5VxuS%2Buy%2FSY4ec33YZonjtZVmjMA1RXIgnhNxoRemzvON3Q%2FsjmJ9iCARvmUxBuXuNi5jWOExlzPvyg0IXrx60wxA%2BmIedOwMydVa%2FF8X9TGuJpVGuJNvUop4hnRX6BH2BEztMCqjVLPDEJdgjB5TqE7zysixDIDDKuKu%2FBjqkAViv7CCSxoCByY25gWyvHKzsDV2X%2FTkT6iD%2FkAfychuOCFHQfkTI8aB11f%2FGGADWnSnYLI6nN2VkK95I5CXoDKMouaKEU5TtR7Eij1fY%2FZGtV6jdqX0fTiNdRtZHJJIELh0as0khGoGuPjRxIrMg7cfqyEX9RIulO2YhNW4NdHiXaSepc1sUAkflbmpwkErd336kLskF2X%2FTV9fcyDulEUHVHmk9&X-Amz-Signature=9fc53fe0de197f3b4f6b924b9f0afc9f0b1c256e9ab5bdd34259cad81d585af0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNLERVZ7%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQD%2F%2BRX1Ik8SB3eLxPU8JzDcxwe%2Fx1jXYAM0qCF3DJ3rdAIhAPAdL%2B4RTEXw%2BK13L63MoOI1I7zWfj06iapmyuc1hKPTKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9U%2BmlByLq49cCSxsq3AOiPbNGG01X%2BKtj0ucoBG08%2Flq7iw35UVsWj8WyDq8qeM6oaCM3Ywj1%2BWqvNWDbMTRRuHiLE5TfKPamcUmiPhGZa57tuaSnceB6KV%2BhFixIorRw32j1RQMe5nYriAfuIdPPYQrzcA3kPpr3HjsdVrXeAkLOJEqFZI9J8UNOGqoVVB4WO1y953EXtSBQCXYKzrX9ynlGv13vvjvUzdledNIvQVbHk%2FnyJxZFJZm08%2B3U1Xobw9PjnMIpUnUubUOjsGnMZVipnZcKOPAWPccXAjdZ%2F17Sc5Zm1AyYZILYBKZBeAEadESGRugWkR1bdMTVIaoSeClKQXLRzQH0rszDf71HM%2BJhc%2Fte9XD3d6OshHSXCDsG3pD1Ddv7UAIWFj0%2BlXIKQBdUunOIZ3DqQetZwBH4JVOmSeXdLzwm7n9AhIY3OfGMj%2BCArJVBaD%2FGZ6sKiOju83tpHdAvTo18ow6MLB7XXf%2BXfJ5VxuS%2Buy%2FSY4ec33YZonjtZVmjMA1RXIgnhNxoRemzvON3Q%2FsjmJ9iCARvmUxBuXuNi5jWOExlzPvyg0IXrx60wxA%2BmIedOwMydVa%2FF8X9TGuJpVGuJNvUop4hnRX6BH2BEztMCqjVLPDEJdgjB5TqE7zysixDIDDKuKu%2FBjqkAViv7CCSxoCByY25gWyvHKzsDV2X%2FTkT6iD%2FkAfychuOCFHQfkTI8aB11f%2FGGADWnSnYLI6nN2VkK95I5CXoDKMouaKEU5TtR7Eij1fY%2FZGtV6jdqX0fTiNdRtZHJJIELh0as0khGoGuPjRxIrMg7cfqyEX9RIulO2YhNW4NdHiXaSepc1sUAkflbmpwkErd336kLskF2X%2FTV9fcyDulEUHVHmk9&X-Amz-Signature=7e00a1f556f8c259a82549d1b032192c46071022504ee09bd31ea12579c6dca0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNLERVZ7%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQD%2F%2BRX1Ik8SB3eLxPU8JzDcxwe%2Fx1jXYAM0qCF3DJ3rdAIhAPAdL%2B4RTEXw%2BK13L63MoOI1I7zWfj06iapmyuc1hKPTKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9U%2BmlByLq49cCSxsq3AOiPbNGG01X%2BKtj0ucoBG08%2Flq7iw35UVsWj8WyDq8qeM6oaCM3Ywj1%2BWqvNWDbMTRRuHiLE5TfKPamcUmiPhGZa57tuaSnceB6KV%2BhFixIorRw32j1RQMe5nYriAfuIdPPYQrzcA3kPpr3HjsdVrXeAkLOJEqFZI9J8UNOGqoVVB4WO1y953EXtSBQCXYKzrX9ynlGv13vvjvUzdledNIvQVbHk%2FnyJxZFJZm08%2B3U1Xobw9PjnMIpUnUubUOjsGnMZVipnZcKOPAWPccXAjdZ%2F17Sc5Zm1AyYZILYBKZBeAEadESGRugWkR1bdMTVIaoSeClKQXLRzQH0rszDf71HM%2BJhc%2Fte9XD3d6OshHSXCDsG3pD1Ddv7UAIWFj0%2BlXIKQBdUunOIZ3DqQetZwBH4JVOmSeXdLzwm7n9AhIY3OfGMj%2BCArJVBaD%2FGZ6sKiOju83tpHdAvTo18ow6MLB7XXf%2BXfJ5VxuS%2Buy%2FSY4ec33YZonjtZVmjMA1RXIgnhNxoRemzvON3Q%2FsjmJ9iCARvmUxBuXuNi5jWOExlzPvyg0IXrx60wxA%2BmIedOwMydVa%2FF8X9TGuJpVGuJNvUop4hnRX6BH2BEztMCqjVLPDEJdgjB5TqE7zysixDIDDKuKu%2FBjqkAViv7CCSxoCByY25gWyvHKzsDV2X%2FTkT6iD%2FkAfychuOCFHQfkTI8aB11f%2FGGADWnSnYLI6nN2VkK95I5CXoDKMouaKEU5TtR7Eij1fY%2FZGtV6jdqX0fTiNdRtZHJJIELh0as0khGoGuPjRxIrMg7cfqyEX9RIulO2YhNW4NdHiXaSepc1sUAkflbmpwkErd336kLskF2X%2FTV9fcyDulEUHVHmk9&X-Amz-Signature=113557d83adf69d7b0d234e70428a575dc3897fc7a45faf5b5ceb01194b128e0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNLERVZ7%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T230802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQD%2F%2BRX1Ik8SB3eLxPU8JzDcxwe%2Fx1jXYAM0qCF3DJ3rdAIhAPAdL%2B4RTEXw%2BK13L63MoOI1I7zWfj06iapmyuc1hKPTKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9U%2BmlByLq49cCSxsq3AOiPbNGG01X%2BKtj0ucoBG08%2Flq7iw35UVsWj8WyDq8qeM6oaCM3Ywj1%2BWqvNWDbMTRRuHiLE5TfKPamcUmiPhGZa57tuaSnceB6KV%2BhFixIorRw32j1RQMe5nYriAfuIdPPYQrzcA3kPpr3HjsdVrXeAkLOJEqFZI9J8UNOGqoVVB4WO1y953EXtSBQCXYKzrX9ynlGv13vvjvUzdledNIvQVbHk%2FnyJxZFJZm08%2B3U1Xobw9PjnMIpUnUubUOjsGnMZVipnZcKOPAWPccXAjdZ%2F17Sc5Zm1AyYZILYBKZBeAEadESGRugWkR1bdMTVIaoSeClKQXLRzQH0rszDf71HM%2BJhc%2Fte9XD3d6OshHSXCDsG3pD1Ddv7UAIWFj0%2BlXIKQBdUunOIZ3DqQetZwBH4JVOmSeXdLzwm7n9AhIY3OfGMj%2BCArJVBaD%2FGZ6sKiOju83tpHdAvTo18ow6MLB7XXf%2BXfJ5VxuS%2Buy%2FSY4ec33YZonjtZVmjMA1RXIgnhNxoRemzvON3Q%2FsjmJ9iCARvmUxBuXuNi5jWOExlzPvyg0IXrx60wxA%2BmIedOwMydVa%2FF8X9TGuJpVGuJNvUop4hnRX6BH2BEztMCqjVLPDEJdgjB5TqE7zysixDIDDKuKu%2FBjqkAViv7CCSxoCByY25gWyvHKzsDV2X%2FTkT6iD%2FkAfychuOCFHQfkTI8aB11f%2FGGADWnSnYLI6nN2VkK95I5CXoDKMouaKEU5TtR7Eij1fY%2FZGtV6jdqX0fTiNdRtZHJJIELh0as0khGoGuPjRxIrMg7cfqyEX9RIulO2YhNW4NdHiXaSepc1sUAkflbmpwkErd336kLskF2X%2FTV9fcyDulEUHVHmk9&X-Amz-Signature=5431c9af22563129e915c837abd9499ec324e3992da5034011d931a19b9503c0&X-Amz-SignedHeaders=host&x-id=GetObject)
