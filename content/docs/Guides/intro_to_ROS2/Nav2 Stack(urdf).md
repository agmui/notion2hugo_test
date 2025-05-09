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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHGRNIWS%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T081224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkIqvgNL4gWJ9idrcLus6HbSd0la%2FXqVeikZQmzL0G3gIgUNGGgNtVwzI2GzM%2B%2B4c31aU400T%2FmsVdzDWYn%2BLWHsEqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfK2lYnWLGuLZSOTircA1DZxNMwMp493n8hGkUfNuaHLt2aQHjSi655Z5SMT7SnZAQV0L0KqLhmrwncF5G91vSQZX8Uihu9ZxV5aoZWV7b9Rpv0NbQliRobCTE7zaYWlMq6rNL%2BsekzC%2BrKbwQHpieWFwVRPyKZYuVUYqKhOoPxIbIjtOtHu9B4GcMRd3Snagvfv1ftW0FX%2F0RhwLn2IsJpMk3yHYrzNpvwQobLRgjvrA%2FvG1vN%2Bt4FGE%2BX5qsFcvjqNQSStGX79cECRvg%2Bm%2BU98BIFoM9leF8MkiTw5iwcG7QrpZSnc2aP15RSulcGTI0A1HOcAs5NJqfH98hgnTG%2BNevPqqHWwG4imcX20lTTIsiAmJ4DHcxuXu5PsjZoPmmdGr3HqUTX5TUA%2BL0VhxAZlrLfd%2FJkoQcni0thmavx9BETWfpDpk01g1Dda7E5UNPsMA7sLsXWIDd7vR%2FBVEqnO4e7k5%2Fvdvd78t%2BPp3FSfV18fi5q%2F6BDzLArAGBqcmjX%2Fqzxm3e4yUjm%2F%2Bk%2FdZRzIzrJBHjF2jVAeFamWmr1XkEaieb%2FCw7RupuGUIBprQmBzmNaidCzO%2BtLNPB%2BvErikBQ2PHbooHrqPg2rrBfu%2F3fzt3W%2BBcQYW1bwPF5ka3JLyPXA8TPMUYO5MIvh9sAGOqUBxIpunBniAyE%2F0TAIBBl1RZaKaxELcHrb%2F7JwGmmypkcrpvR3VhNoJ7rGJsY2ljGVKBUVq6WpDBZiF8ewWLK%2B67ZuLFfayeeRQ2SVYok3BPLwvIT%2B5PM%2FLkYVNrnVbOACV1kJwRn4%2Bv0CsrNGqWbO598Qdau01qGmS1OVUFV4YXxvtZU4kQ%2BXQeLWUu%2B5YQ0EWRLpmdOpKUzHVFAV8cgsbKkcDG5i&X-Amz-Signature=c24a9e18751fbbf1f0e1807a886fdaf73d6bb40c825888adb509464b7d821b8b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHGRNIWS%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T081224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkIqvgNL4gWJ9idrcLus6HbSd0la%2FXqVeikZQmzL0G3gIgUNGGgNtVwzI2GzM%2B%2B4c31aU400T%2FmsVdzDWYn%2BLWHsEqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfK2lYnWLGuLZSOTircA1DZxNMwMp493n8hGkUfNuaHLt2aQHjSi655Z5SMT7SnZAQV0L0KqLhmrwncF5G91vSQZX8Uihu9ZxV5aoZWV7b9Rpv0NbQliRobCTE7zaYWlMq6rNL%2BsekzC%2BrKbwQHpieWFwVRPyKZYuVUYqKhOoPxIbIjtOtHu9B4GcMRd3Snagvfv1ftW0FX%2F0RhwLn2IsJpMk3yHYrzNpvwQobLRgjvrA%2FvG1vN%2Bt4FGE%2BX5qsFcvjqNQSStGX79cECRvg%2Bm%2BU98BIFoM9leF8MkiTw5iwcG7QrpZSnc2aP15RSulcGTI0A1HOcAs5NJqfH98hgnTG%2BNevPqqHWwG4imcX20lTTIsiAmJ4DHcxuXu5PsjZoPmmdGr3HqUTX5TUA%2BL0VhxAZlrLfd%2FJkoQcni0thmavx9BETWfpDpk01g1Dda7E5UNPsMA7sLsXWIDd7vR%2FBVEqnO4e7k5%2Fvdvd78t%2BPp3FSfV18fi5q%2F6BDzLArAGBqcmjX%2Fqzxm3e4yUjm%2F%2Bk%2FdZRzIzrJBHjF2jVAeFamWmr1XkEaieb%2FCw7RupuGUIBprQmBzmNaidCzO%2BtLNPB%2BvErikBQ2PHbooHrqPg2rrBfu%2F3fzt3W%2BBcQYW1bwPF5ka3JLyPXA8TPMUYO5MIvh9sAGOqUBxIpunBniAyE%2F0TAIBBl1RZaKaxELcHrb%2F7JwGmmypkcrpvR3VhNoJ7rGJsY2ljGVKBUVq6WpDBZiF8ewWLK%2B67ZuLFfayeeRQ2SVYok3BPLwvIT%2B5PM%2FLkYVNrnVbOACV1kJwRn4%2Bv0CsrNGqWbO598Qdau01qGmS1OVUFV4YXxvtZU4kQ%2BXQeLWUu%2B5YQ0EWRLpmdOpKUzHVFAV8cgsbKkcDG5i&X-Amz-Signature=d937f3e5a8e1804865ad9c6dd2351721fd292db7eac52f23ccf4cc6e6cbb0c4f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHGRNIWS%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T081224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkIqvgNL4gWJ9idrcLus6HbSd0la%2FXqVeikZQmzL0G3gIgUNGGgNtVwzI2GzM%2B%2B4c31aU400T%2FmsVdzDWYn%2BLWHsEqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfK2lYnWLGuLZSOTircA1DZxNMwMp493n8hGkUfNuaHLt2aQHjSi655Z5SMT7SnZAQV0L0KqLhmrwncF5G91vSQZX8Uihu9ZxV5aoZWV7b9Rpv0NbQliRobCTE7zaYWlMq6rNL%2BsekzC%2BrKbwQHpieWFwVRPyKZYuVUYqKhOoPxIbIjtOtHu9B4GcMRd3Snagvfv1ftW0FX%2F0RhwLn2IsJpMk3yHYrzNpvwQobLRgjvrA%2FvG1vN%2Bt4FGE%2BX5qsFcvjqNQSStGX79cECRvg%2Bm%2BU98BIFoM9leF8MkiTw5iwcG7QrpZSnc2aP15RSulcGTI0A1HOcAs5NJqfH98hgnTG%2BNevPqqHWwG4imcX20lTTIsiAmJ4DHcxuXu5PsjZoPmmdGr3HqUTX5TUA%2BL0VhxAZlrLfd%2FJkoQcni0thmavx9BETWfpDpk01g1Dda7E5UNPsMA7sLsXWIDd7vR%2FBVEqnO4e7k5%2Fvdvd78t%2BPp3FSfV18fi5q%2F6BDzLArAGBqcmjX%2Fqzxm3e4yUjm%2F%2Bk%2FdZRzIzrJBHjF2jVAeFamWmr1XkEaieb%2FCw7RupuGUIBprQmBzmNaidCzO%2BtLNPB%2BvErikBQ2PHbooHrqPg2rrBfu%2F3fzt3W%2BBcQYW1bwPF5ka3JLyPXA8TPMUYO5MIvh9sAGOqUBxIpunBniAyE%2F0TAIBBl1RZaKaxELcHrb%2F7JwGmmypkcrpvR3VhNoJ7rGJsY2ljGVKBUVq6WpDBZiF8ewWLK%2B67ZuLFfayeeRQ2SVYok3BPLwvIT%2B5PM%2FLkYVNrnVbOACV1kJwRn4%2Bv0CsrNGqWbO598Qdau01qGmS1OVUFV4YXxvtZU4kQ%2BXQeLWUu%2B5YQ0EWRLpmdOpKUzHVFAV8cgsbKkcDG5i&X-Amz-Signature=f60cabec38f6a3344920fb41c709b0fbb4b31d8e47cd453102454a503148c3fc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHGRNIWS%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T081224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkIqvgNL4gWJ9idrcLus6HbSd0la%2FXqVeikZQmzL0G3gIgUNGGgNtVwzI2GzM%2B%2B4c31aU400T%2FmsVdzDWYn%2BLWHsEqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfK2lYnWLGuLZSOTircA1DZxNMwMp493n8hGkUfNuaHLt2aQHjSi655Z5SMT7SnZAQV0L0KqLhmrwncF5G91vSQZX8Uihu9ZxV5aoZWV7b9Rpv0NbQliRobCTE7zaYWlMq6rNL%2BsekzC%2BrKbwQHpieWFwVRPyKZYuVUYqKhOoPxIbIjtOtHu9B4GcMRd3Snagvfv1ftW0FX%2F0RhwLn2IsJpMk3yHYrzNpvwQobLRgjvrA%2FvG1vN%2Bt4FGE%2BX5qsFcvjqNQSStGX79cECRvg%2Bm%2BU98BIFoM9leF8MkiTw5iwcG7QrpZSnc2aP15RSulcGTI0A1HOcAs5NJqfH98hgnTG%2BNevPqqHWwG4imcX20lTTIsiAmJ4DHcxuXu5PsjZoPmmdGr3HqUTX5TUA%2BL0VhxAZlrLfd%2FJkoQcni0thmavx9BETWfpDpk01g1Dda7E5UNPsMA7sLsXWIDd7vR%2FBVEqnO4e7k5%2Fvdvd78t%2BPp3FSfV18fi5q%2F6BDzLArAGBqcmjX%2Fqzxm3e4yUjm%2F%2Bk%2FdZRzIzrJBHjF2jVAeFamWmr1XkEaieb%2FCw7RupuGUIBprQmBzmNaidCzO%2BtLNPB%2BvErikBQ2PHbooHrqPg2rrBfu%2F3fzt3W%2BBcQYW1bwPF5ka3JLyPXA8TPMUYO5MIvh9sAGOqUBxIpunBniAyE%2F0TAIBBl1RZaKaxELcHrb%2F7JwGmmypkcrpvR3VhNoJ7rGJsY2ljGVKBUVq6WpDBZiF8ewWLK%2B67ZuLFfayeeRQ2SVYok3BPLwvIT%2B5PM%2FLkYVNrnVbOACV1kJwRn4%2Bv0CsrNGqWbO598Qdau01qGmS1OVUFV4YXxvtZU4kQ%2BXQeLWUu%2B5YQ0EWRLpmdOpKUzHVFAV8cgsbKkcDG5i&X-Amz-Signature=98eeabd8f89d9ee9a5c5628f590aba684de607c1db495d124990b042f52ea811&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHGRNIWS%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T081224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkIqvgNL4gWJ9idrcLus6HbSd0la%2FXqVeikZQmzL0G3gIgUNGGgNtVwzI2GzM%2B%2B4c31aU400T%2FmsVdzDWYn%2BLWHsEqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfK2lYnWLGuLZSOTircA1DZxNMwMp493n8hGkUfNuaHLt2aQHjSi655Z5SMT7SnZAQV0L0KqLhmrwncF5G91vSQZX8Uihu9ZxV5aoZWV7b9Rpv0NbQliRobCTE7zaYWlMq6rNL%2BsekzC%2BrKbwQHpieWFwVRPyKZYuVUYqKhOoPxIbIjtOtHu9B4GcMRd3Snagvfv1ftW0FX%2F0RhwLn2IsJpMk3yHYrzNpvwQobLRgjvrA%2FvG1vN%2Bt4FGE%2BX5qsFcvjqNQSStGX79cECRvg%2Bm%2BU98BIFoM9leF8MkiTw5iwcG7QrpZSnc2aP15RSulcGTI0A1HOcAs5NJqfH98hgnTG%2BNevPqqHWwG4imcX20lTTIsiAmJ4DHcxuXu5PsjZoPmmdGr3HqUTX5TUA%2BL0VhxAZlrLfd%2FJkoQcni0thmavx9BETWfpDpk01g1Dda7E5UNPsMA7sLsXWIDd7vR%2FBVEqnO4e7k5%2Fvdvd78t%2BPp3FSfV18fi5q%2F6BDzLArAGBqcmjX%2Fqzxm3e4yUjm%2F%2Bk%2FdZRzIzrJBHjF2jVAeFamWmr1XkEaieb%2FCw7RupuGUIBprQmBzmNaidCzO%2BtLNPB%2BvErikBQ2PHbooHrqPg2rrBfu%2F3fzt3W%2BBcQYW1bwPF5ka3JLyPXA8TPMUYO5MIvh9sAGOqUBxIpunBniAyE%2F0TAIBBl1RZaKaxELcHrb%2F7JwGmmypkcrpvR3VhNoJ7rGJsY2ljGVKBUVq6WpDBZiF8ewWLK%2B67ZuLFfayeeRQ2SVYok3BPLwvIT%2B5PM%2FLkYVNrnVbOACV1kJwRn4%2Bv0CsrNGqWbO598Qdau01qGmS1OVUFV4YXxvtZU4kQ%2BXQeLWUu%2B5YQ0EWRLpmdOpKUzHVFAV8cgsbKkcDG5i&X-Amz-Signature=9012088d498fe6d84d50d06bb02e13573b7ba888c753bbfbb468b5557a43a96c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHGRNIWS%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T081224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkIqvgNL4gWJ9idrcLus6HbSd0la%2FXqVeikZQmzL0G3gIgUNGGgNtVwzI2GzM%2B%2B4c31aU400T%2FmsVdzDWYn%2BLWHsEqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEfK2lYnWLGuLZSOTircA1DZxNMwMp493n8hGkUfNuaHLt2aQHjSi655Z5SMT7SnZAQV0L0KqLhmrwncF5G91vSQZX8Uihu9ZxV5aoZWV7b9Rpv0NbQliRobCTE7zaYWlMq6rNL%2BsekzC%2BrKbwQHpieWFwVRPyKZYuVUYqKhOoPxIbIjtOtHu9B4GcMRd3Snagvfv1ftW0FX%2F0RhwLn2IsJpMk3yHYrzNpvwQobLRgjvrA%2FvG1vN%2Bt4FGE%2BX5qsFcvjqNQSStGX79cECRvg%2Bm%2BU98BIFoM9leF8MkiTw5iwcG7QrpZSnc2aP15RSulcGTI0A1HOcAs5NJqfH98hgnTG%2BNevPqqHWwG4imcX20lTTIsiAmJ4DHcxuXu5PsjZoPmmdGr3HqUTX5TUA%2BL0VhxAZlrLfd%2FJkoQcni0thmavx9BETWfpDpk01g1Dda7E5UNPsMA7sLsXWIDd7vR%2FBVEqnO4e7k5%2Fvdvd78t%2BPp3FSfV18fi5q%2F6BDzLArAGBqcmjX%2Fqzxm3e4yUjm%2F%2Bk%2FdZRzIzrJBHjF2jVAeFamWmr1XkEaieb%2FCw7RupuGUIBprQmBzmNaidCzO%2BtLNPB%2BvErikBQ2PHbooHrqPg2rrBfu%2F3fzt3W%2BBcQYW1bwPF5ka3JLyPXA8TPMUYO5MIvh9sAGOqUBxIpunBniAyE%2F0TAIBBl1RZaKaxELcHrb%2F7JwGmmypkcrpvR3VhNoJ7rGJsY2ljGVKBUVq6WpDBZiF8ewWLK%2B67ZuLFfayeeRQ2SVYok3BPLwvIT%2B5PM%2FLkYVNrnVbOACV1kJwRn4%2Bv0CsrNGqWbO598Qdau01qGmS1OVUFV4YXxvtZU4kQ%2BXQeLWUu%2B5YQ0EWRLpmdOpKUzHVFAV8cgsbKkcDG5i&X-Amz-Signature=4fa9326fbb13232dad012d20a5c6e0baaf77f9e8824a8ed8558cb09a9bc2b189&X-Amz-SignedHeaders=host&x-id=GetObject)
