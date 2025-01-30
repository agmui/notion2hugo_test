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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPKX4OEF%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHRX%2FkzMCxXzbH%2BOQz%2FF2AulYAJ%2Fn4WX7JqZ%2BaiBDyhAiAgBK%2BV%2B%2FTzDEMObPCmMcn0pl4Zl6vsQFJaZg3jTRUuwiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKTbEgxrhr4OIyClyKtwDOq9yM2lJkGtBjBssnN0cDiv7R9OlNLgBMik8WTVnI3uRE4bVDTj9SrytZeGeuBUa7oVqpDp4S2WX%2FppR948afAbHGB%2BEVXSL2v8mlCcb%2BdoOHbBFMxBpyeaDsUvooTXgTtFWH18m0tWICcsW0ljelHYKMglv%2FzPVoemzkLz%2BSDANPxfg0zeickXaY9MPy5tVWgP3kk%2FP6iz4xlu0p1lzS8nOyul1IqwIVaaOHPJxlsl2G3iFJwHirSfNYkUNBXvzUaCpGUXVDwJZmJfjytdJ5kT9PKIroxtU0%2Bx1hG8NLDhPUorF9Md4DIncHyhHIMFZ64XfFrN6pIXlOqjtzFRSrs%2Bqy5Lo8zxaMttktz47tuoNfuuxnrMWLm0SZp0vrSmg2OpAcy7xywIa7hpCiMsm7H08aYZTWve9pElHRltZNDHmuk0UMUr8oDuWiWFklcY7zgMdmIJcngDUBwXg6QRQtcO%2B40NagpfpB7XeTSbu0vg5jQLJcZrdyz%2FAISxMgn4zn0HXWJtcZ9pW1JqvQa8NK9T5RulsYq4p1%2BaHx1jve9%2F2Ojgux%2B8U%2Fp9PdvzGk8ITDsFBM9Uyjj2XZ2KwGDYwl0kdI2vp01EW0Rfpa4Zv2z7cy32uGSFos2iTuycwo6vtvAY6pgEYp9XC95CFONLTv8YknzlRi43gsCuqawIkDtdX1HrkCKa9VMu77sGwl0wZg%2FPSxtkUT0kxerv9rOFrSAElDz9mOFJgo07wAVUQSrH%2BjL6WUSUoyY3aGsjtNP%2B%2F58axiO3YwPbQmhUpcvdVWPjnr1ahN9SWeMOSPerMJWSsOAES5J8Iyrd22OJlCXR%2BWaGdMFwxZB34aEfTO8SSJh6fYF%2FZQioXBn8j&X-Amz-Signature=73f9743056786458cc1a73826c76516c68bd44090bbb1900ae80092c5a42edd6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPKX4OEF%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHRX%2FkzMCxXzbH%2BOQz%2FF2AulYAJ%2Fn4WX7JqZ%2BaiBDyhAiAgBK%2BV%2B%2FTzDEMObPCmMcn0pl4Zl6vsQFJaZg3jTRUuwiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKTbEgxrhr4OIyClyKtwDOq9yM2lJkGtBjBssnN0cDiv7R9OlNLgBMik8WTVnI3uRE4bVDTj9SrytZeGeuBUa7oVqpDp4S2WX%2FppR948afAbHGB%2BEVXSL2v8mlCcb%2BdoOHbBFMxBpyeaDsUvooTXgTtFWH18m0tWICcsW0ljelHYKMglv%2FzPVoemzkLz%2BSDANPxfg0zeickXaY9MPy5tVWgP3kk%2FP6iz4xlu0p1lzS8nOyul1IqwIVaaOHPJxlsl2G3iFJwHirSfNYkUNBXvzUaCpGUXVDwJZmJfjytdJ5kT9PKIroxtU0%2Bx1hG8NLDhPUorF9Md4DIncHyhHIMFZ64XfFrN6pIXlOqjtzFRSrs%2Bqy5Lo8zxaMttktz47tuoNfuuxnrMWLm0SZp0vrSmg2OpAcy7xywIa7hpCiMsm7H08aYZTWve9pElHRltZNDHmuk0UMUr8oDuWiWFklcY7zgMdmIJcngDUBwXg6QRQtcO%2B40NagpfpB7XeTSbu0vg5jQLJcZrdyz%2FAISxMgn4zn0HXWJtcZ9pW1JqvQa8NK9T5RulsYq4p1%2BaHx1jve9%2F2Ojgux%2B8U%2Fp9PdvzGk8ITDsFBM9Uyjj2XZ2KwGDYwl0kdI2vp01EW0Rfpa4Zv2z7cy32uGSFos2iTuycwo6vtvAY6pgEYp9XC95CFONLTv8YknzlRi43gsCuqawIkDtdX1HrkCKa9VMu77sGwl0wZg%2FPSxtkUT0kxerv9rOFrSAElDz9mOFJgo07wAVUQSrH%2BjL6WUSUoyY3aGsjtNP%2B%2F58axiO3YwPbQmhUpcvdVWPjnr1ahN9SWeMOSPerMJWSsOAES5J8Iyrd22OJlCXR%2BWaGdMFwxZB34aEfTO8SSJh6fYF%2FZQioXBn8j&X-Amz-Signature=3a562355270e3b0c40514a6a2db012e8e1217389d3674710ad7a4294ca48efb9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPKX4OEF%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHRX%2FkzMCxXzbH%2BOQz%2FF2AulYAJ%2Fn4WX7JqZ%2BaiBDyhAiAgBK%2BV%2B%2FTzDEMObPCmMcn0pl4Zl6vsQFJaZg3jTRUuwiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKTbEgxrhr4OIyClyKtwDOq9yM2lJkGtBjBssnN0cDiv7R9OlNLgBMik8WTVnI3uRE4bVDTj9SrytZeGeuBUa7oVqpDp4S2WX%2FppR948afAbHGB%2BEVXSL2v8mlCcb%2BdoOHbBFMxBpyeaDsUvooTXgTtFWH18m0tWICcsW0ljelHYKMglv%2FzPVoemzkLz%2BSDANPxfg0zeickXaY9MPy5tVWgP3kk%2FP6iz4xlu0p1lzS8nOyul1IqwIVaaOHPJxlsl2G3iFJwHirSfNYkUNBXvzUaCpGUXVDwJZmJfjytdJ5kT9PKIroxtU0%2Bx1hG8NLDhPUorF9Md4DIncHyhHIMFZ64XfFrN6pIXlOqjtzFRSrs%2Bqy5Lo8zxaMttktz47tuoNfuuxnrMWLm0SZp0vrSmg2OpAcy7xywIa7hpCiMsm7H08aYZTWve9pElHRltZNDHmuk0UMUr8oDuWiWFklcY7zgMdmIJcngDUBwXg6QRQtcO%2B40NagpfpB7XeTSbu0vg5jQLJcZrdyz%2FAISxMgn4zn0HXWJtcZ9pW1JqvQa8NK9T5RulsYq4p1%2BaHx1jve9%2F2Ojgux%2B8U%2Fp9PdvzGk8ITDsFBM9Uyjj2XZ2KwGDYwl0kdI2vp01EW0Rfpa4Zv2z7cy32uGSFos2iTuycwo6vtvAY6pgEYp9XC95CFONLTv8YknzlRi43gsCuqawIkDtdX1HrkCKa9VMu77sGwl0wZg%2FPSxtkUT0kxerv9rOFrSAElDz9mOFJgo07wAVUQSrH%2BjL6WUSUoyY3aGsjtNP%2B%2F58axiO3YwPbQmhUpcvdVWPjnr1ahN9SWeMOSPerMJWSsOAES5J8Iyrd22OJlCXR%2BWaGdMFwxZB34aEfTO8SSJh6fYF%2FZQioXBn8j&X-Amz-Signature=f2f2c168d0d7d62fd323a382d6c86a14348e1be657469e55495f417f1fd91c12&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPKX4OEF%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHRX%2FkzMCxXzbH%2BOQz%2FF2AulYAJ%2Fn4WX7JqZ%2BaiBDyhAiAgBK%2BV%2B%2FTzDEMObPCmMcn0pl4Zl6vsQFJaZg3jTRUuwiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKTbEgxrhr4OIyClyKtwDOq9yM2lJkGtBjBssnN0cDiv7R9OlNLgBMik8WTVnI3uRE4bVDTj9SrytZeGeuBUa7oVqpDp4S2WX%2FppR948afAbHGB%2BEVXSL2v8mlCcb%2BdoOHbBFMxBpyeaDsUvooTXgTtFWH18m0tWICcsW0ljelHYKMglv%2FzPVoemzkLz%2BSDANPxfg0zeickXaY9MPy5tVWgP3kk%2FP6iz4xlu0p1lzS8nOyul1IqwIVaaOHPJxlsl2G3iFJwHirSfNYkUNBXvzUaCpGUXVDwJZmJfjytdJ5kT9PKIroxtU0%2Bx1hG8NLDhPUorF9Md4DIncHyhHIMFZ64XfFrN6pIXlOqjtzFRSrs%2Bqy5Lo8zxaMttktz47tuoNfuuxnrMWLm0SZp0vrSmg2OpAcy7xywIa7hpCiMsm7H08aYZTWve9pElHRltZNDHmuk0UMUr8oDuWiWFklcY7zgMdmIJcngDUBwXg6QRQtcO%2B40NagpfpB7XeTSbu0vg5jQLJcZrdyz%2FAISxMgn4zn0HXWJtcZ9pW1JqvQa8NK9T5RulsYq4p1%2BaHx1jve9%2F2Ojgux%2B8U%2Fp9PdvzGk8ITDsFBM9Uyjj2XZ2KwGDYwl0kdI2vp01EW0Rfpa4Zv2z7cy32uGSFos2iTuycwo6vtvAY6pgEYp9XC95CFONLTv8YknzlRi43gsCuqawIkDtdX1HrkCKa9VMu77sGwl0wZg%2FPSxtkUT0kxerv9rOFrSAElDz9mOFJgo07wAVUQSrH%2BjL6WUSUoyY3aGsjtNP%2B%2F58axiO3YwPbQmhUpcvdVWPjnr1ahN9SWeMOSPerMJWSsOAES5J8Iyrd22OJlCXR%2BWaGdMFwxZB34aEfTO8SSJh6fYF%2FZQioXBn8j&X-Amz-Signature=35991a22e0a33fc8249c5c892558a33afbc90d40d44db8a9b0d0a61ac06455d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPKX4OEF%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHRX%2FkzMCxXzbH%2BOQz%2FF2AulYAJ%2Fn4WX7JqZ%2BaiBDyhAiAgBK%2BV%2B%2FTzDEMObPCmMcn0pl4Zl6vsQFJaZg3jTRUuwiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKTbEgxrhr4OIyClyKtwDOq9yM2lJkGtBjBssnN0cDiv7R9OlNLgBMik8WTVnI3uRE4bVDTj9SrytZeGeuBUa7oVqpDp4S2WX%2FppR948afAbHGB%2BEVXSL2v8mlCcb%2BdoOHbBFMxBpyeaDsUvooTXgTtFWH18m0tWICcsW0ljelHYKMglv%2FzPVoemzkLz%2BSDANPxfg0zeickXaY9MPy5tVWgP3kk%2FP6iz4xlu0p1lzS8nOyul1IqwIVaaOHPJxlsl2G3iFJwHirSfNYkUNBXvzUaCpGUXVDwJZmJfjytdJ5kT9PKIroxtU0%2Bx1hG8NLDhPUorF9Md4DIncHyhHIMFZ64XfFrN6pIXlOqjtzFRSrs%2Bqy5Lo8zxaMttktz47tuoNfuuxnrMWLm0SZp0vrSmg2OpAcy7xywIa7hpCiMsm7H08aYZTWve9pElHRltZNDHmuk0UMUr8oDuWiWFklcY7zgMdmIJcngDUBwXg6QRQtcO%2B40NagpfpB7XeTSbu0vg5jQLJcZrdyz%2FAISxMgn4zn0HXWJtcZ9pW1JqvQa8NK9T5RulsYq4p1%2BaHx1jve9%2F2Ojgux%2B8U%2Fp9PdvzGk8ITDsFBM9Uyjj2XZ2KwGDYwl0kdI2vp01EW0Rfpa4Zv2z7cy32uGSFos2iTuycwo6vtvAY6pgEYp9XC95CFONLTv8YknzlRi43gsCuqawIkDtdX1HrkCKa9VMu77sGwl0wZg%2FPSxtkUT0kxerv9rOFrSAElDz9mOFJgo07wAVUQSrH%2BjL6WUSUoyY3aGsjtNP%2B%2F58axiO3YwPbQmhUpcvdVWPjnr1ahN9SWeMOSPerMJWSsOAES5J8Iyrd22OJlCXR%2BWaGdMFwxZB34aEfTO8SSJh6fYF%2FZQioXBn8j&X-Amz-Signature=87eec08c6cbf957f186c582dc4ed12e42fe28c0d56ff7adcee9642a268246e4d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPKX4OEF%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDHRX%2FkzMCxXzbH%2BOQz%2FF2AulYAJ%2Fn4WX7JqZ%2BaiBDyhAiAgBK%2BV%2B%2FTzDEMObPCmMcn0pl4Zl6vsQFJaZg3jTRUuwiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKTbEgxrhr4OIyClyKtwDOq9yM2lJkGtBjBssnN0cDiv7R9OlNLgBMik8WTVnI3uRE4bVDTj9SrytZeGeuBUa7oVqpDp4S2WX%2FppR948afAbHGB%2BEVXSL2v8mlCcb%2BdoOHbBFMxBpyeaDsUvooTXgTtFWH18m0tWICcsW0ljelHYKMglv%2FzPVoemzkLz%2BSDANPxfg0zeickXaY9MPy5tVWgP3kk%2FP6iz4xlu0p1lzS8nOyul1IqwIVaaOHPJxlsl2G3iFJwHirSfNYkUNBXvzUaCpGUXVDwJZmJfjytdJ5kT9PKIroxtU0%2Bx1hG8NLDhPUorF9Md4DIncHyhHIMFZ64XfFrN6pIXlOqjtzFRSrs%2Bqy5Lo8zxaMttktz47tuoNfuuxnrMWLm0SZp0vrSmg2OpAcy7xywIa7hpCiMsm7H08aYZTWve9pElHRltZNDHmuk0UMUr8oDuWiWFklcY7zgMdmIJcngDUBwXg6QRQtcO%2B40NagpfpB7XeTSbu0vg5jQLJcZrdyz%2FAISxMgn4zn0HXWJtcZ9pW1JqvQa8NK9T5RulsYq4p1%2BaHx1jve9%2F2Ojgux%2B8U%2Fp9PdvzGk8ITDsFBM9Uyjj2XZ2KwGDYwl0kdI2vp01EW0Rfpa4Zv2z7cy32uGSFos2iTuycwo6vtvAY6pgEYp9XC95CFONLTv8YknzlRi43gsCuqawIkDtdX1HrkCKa9VMu77sGwl0wZg%2FPSxtkUT0kxerv9rOFrSAElDz9mOFJgo07wAVUQSrH%2BjL6WUSUoyY3aGsjtNP%2B%2F58axiO3YwPbQmhUpcvdVWPjnr1ahN9SWeMOSPerMJWSsOAES5J8Iyrd22OJlCXR%2BWaGdMFwxZB34aEfTO8SSJh6fYF%2FZQioXBn8j&X-Amz-Signature=b59fdd90b34acf72e7796c057cd97eb9c685d407f47ab293a887798ccf4b8338&X-Amz-SignedHeaders=host&x-id=GetObject)
