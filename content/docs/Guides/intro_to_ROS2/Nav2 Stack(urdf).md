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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAEDFOUG%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCftRptykh3WULUfb%2BHXZ8%2B7We7cOJuMBv9HiiQuXXrWgIgY6E3K3KSTm9d6%2F5DLryMmqvgZxLeA0AjSL9T7FofaJIqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAq65usX3rINVMgvKSrcA38nk4StVf4Lxj6VhAwmFpByX3ncORoWCfnz3KzmOW87BLzl4SrRxDET7%2B4aI1l6YAAAkmBjhLtv9Y4zEIxkDeTVPGquuxo7uErX9Pg5C9OHhsKZp4dCo%2F%2FcXZBWkdL%2FK1f2eSVP1BGR8XUstyMOBBidfZN%2BcMaSi%2B5MadjtMFpLNabPYU7al6kTJJpzGRpa%2BYsQJqUZLOFi9kNUMLKgE1GVjA9diOph6Meg2oqhVVxZGGUF6XD8R%2BQeoJfdb6%2B8KVfBlK%2FhKsXqymx8i2XYmMEtDzuGG1EF9fPJMjupifiSNjFhrSTBmKrWg9DSmgssMA7JSwL8V9LZFYE%2FJCwIoD3M%2B3NOP7efp4143%2ByKZQQQZ834BiqjEpv2l7xSfcK%2Fyr5%2BYP4v5U5cTQjCCladA%2Fk87kAyy6ADPeMKz4qEhUc%2BB5%2Bf81CpvZaalyPJuK2D3fSi0oeiGoGjYsJ0oASM%2B8AtC8o3h2tQhnu%2Bv1ciiqD%2BZZfj7BgKoyZwpeGYMXtr5BB%2F%2BWhM%2Bl%2BRjqyLW6NqiTEHWlZT4LIoXMfy%2BTNktvk%2Fe9J0P5i%2BqM5Rtv2MI6X0Qqcoraf%2BEhR3J0aHe5%2FQ9e0tCaup2VquKV6eDveMW1QX1ABIf31fOjEGHyOgMMPyw8EGOqUB77%2FlKgUU2rf3sLxjGR87mKIXLR6hqA7ULcDfCzBYKU7HyrzwCpe2HGLEgFcJG2yNNOqR%2BwpLSVVge%2F0XBEpUn3aq%2Fwhre3UqshidWz2lkSpEBgbAhpoSq69RtuvnAPLCv7%2FdjDx6I%2FeTaIz8vJWzhA8OSVB2sOANL7dpChK2GiOJqSmbXYjJVEBlXee8FWtOniO730BE6L%2FZq4wSHIQ0CIV6Zq0X&X-Amz-Signature=e25dc7824ff908d6958b4fdc54eb03368ae21d50f7872f21e49418c950bbf324&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAEDFOUG%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCftRptykh3WULUfb%2BHXZ8%2B7We7cOJuMBv9HiiQuXXrWgIgY6E3K3KSTm9d6%2F5DLryMmqvgZxLeA0AjSL9T7FofaJIqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAq65usX3rINVMgvKSrcA38nk4StVf4Lxj6VhAwmFpByX3ncORoWCfnz3KzmOW87BLzl4SrRxDET7%2B4aI1l6YAAAkmBjhLtv9Y4zEIxkDeTVPGquuxo7uErX9Pg5C9OHhsKZp4dCo%2F%2FcXZBWkdL%2FK1f2eSVP1BGR8XUstyMOBBidfZN%2BcMaSi%2B5MadjtMFpLNabPYU7al6kTJJpzGRpa%2BYsQJqUZLOFi9kNUMLKgE1GVjA9diOph6Meg2oqhVVxZGGUF6XD8R%2BQeoJfdb6%2B8KVfBlK%2FhKsXqymx8i2XYmMEtDzuGG1EF9fPJMjupifiSNjFhrSTBmKrWg9DSmgssMA7JSwL8V9LZFYE%2FJCwIoD3M%2B3NOP7efp4143%2ByKZQQQZ834BiqjEpv2l7xSfcK%2Fyr5%2BYP4v5U5cTQjCCladA%2Fk87kAyy6ADPeMKz4qEhUc%2BB5%2Bf81CpvZaalyPJuK2D3fSi0oeiGoGjYsJ0oASM%2B8AtC8o3h2tQhnu%2Bv1ciiqD%2BZZfj7BgKoyZwpeGYMXtr5BB%2F%2BWhM%2Bl%2BRjqyLW6NqiTEHWlZT4LIoXMfy%2BTNktvk%2Fe9J0P5i%2BqM5Rtv2MI6X0Qqcoraf%2BEhR3J0aHe5%2FQ9e0tCaup2VquKV6eDveMW1QX1ABIf31fOjEGHyOgMMPyw8EGOqUB77%2FlKgUU2rf3sLxjGR87mKIXLR6hqA7ULcDfCzBYKU7HyrzwCpe2HGLEgFcJG2yNNOqR%2BwpLSVVge%2F0XBEpUn3aq%2Fwhre3UqshidWz2lkSpEBgbAhpoSq69RtuvnAPLCv7%2FdjDx6I%2FeTaIz8vJWzhA8OSVB2sOANL7dpChK2GiOJqSmbXYjJVEBlXee8FWtOniO730BE6L%2FZq4wSHIQ0CIV6Zq0X&X-Amz-Signature=d0aea5deb015b127e3895a85693c2c63965afaf08cbe80ddc0e33170a4f9922b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAEDFOUG%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCftRptykh3WULUfb%2BHXZ8%2B7We7cOJuMBv9HiiQuXXrWgIgY6E3K3KSTm9d6%2F5DLryMmqvgZxLeA0AjSL9T7FofaJIqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAq65usX3rINVMgvKSrcA38nk4StVf4Lxj6VhAwmFpByX3ncORoWCfnz3KzmOW87BLzl4SrRxDET7%2B4aI1l6YAAAkmBjhLtv9Y4zEIxkDeTVPGquuxo7uErX9Pg5C9OHhsKZp4dCo%2F%2FcXZBWkdL%2FK1f2eSVP1BGR8XUstyMOBBidfZN%2BcMaSi%2B5MadjtMFpLNabPYU7al6kTJJpzGRpa%2BYsQJqUZLOFi9kNUMLKgE1GVjA9diOph6Meg2oqhVVxZGGUF6XD8R%2BQeoJfdb6%2B8KVfBlK%2FhKsXqymx8i2XYmMEtDzuGG1EF9fPJMjupifiSNjFhrSTBmKrWg9DSmgssMA7JSwL8V9LZFYE%2FJCwIoD3M%2B3NOP7efp4143%2ByKZQQQZ834BiqjEpv2l7xSfcK%2Fyr5%2BYP4v5U5cTQjCCladA%2Fk87kAyy6ADPeMKz4qEhUc%2BB5%2Bf81CpvZaalyPJuK2D3fSi0oeiGoGjYsJ0oASM%2B8AtC8o3h2tQhnu%2Bv1ciiqD%2BZZfj7BgKoyZwpeGYMXtr5BB%2F%2BWhM%2Bl%2BRjqyLW6NqiTEHWlZT4LIoXMfy%2BTNktvk%2Fe9J0P5i%2BqM5Rtv2MI6X0Qqcoraf%2BEhR3J0aHe5%2FQ9e0tCaup2VquKV6eDveMW1QX1ABIf31fOjEGHyOgMMPyw8EGOqUB77%2FlKgUU2rf3sLxjGR87mKIXLR6hqA7ULcDfCzBYKU7HyrzwCpe2HGLEgFcJG2yNNOqR%2BwpLSVVge%2F0XBEpUn3aq%2Fwhre3UqshidWz2lkSpEBgbAhpoSq69RtuvnAPLCv7%2FdjDx6I%2FeTaIz8vJWzhA8OSVB2sOANL7dpChK2GiOJqSmbXYjJVEBlXee8FWtOniO730BE6L%2FZq4wSHIQ0CIV6Zq0X&X-Amz-Signature=a3280ef9733983a451ebb186711c63669e610af65a5628dba090133ffaad6a91&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAEDFOUG%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCftRptykh3WULUfb%2BHXZ8%2B7We7cOJuMBv9HiiQuXXrWgIgY6E3K3KSTm9d6%2F5DLryMmqvgZxLeA0AjSL9T7FofaJIqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAq65usX3rINVMgvKSrcA38nk4StVf4Lxj6VhAwmFpByX3ncORoWCfnz3KzmOW87BLzl4SrRxDET7%2B4aI1l6YAAAkmBjhLtv9Y4zEIxkDeTVPGquuxo7uErX9Pg5C9OHhsKZp4dCo%2F%2FcXZBWkdL%2FK1f2eSVP1BGR8XUstyMOBBidfZN%2BcMaSi%2B5MadjtMFpLNabPYU7al6kTJJpzGRpa%2BYsQJqUZLOFi9kNUMLKgE1GVjA9diOph6Meg2oqhVVxZGGUF6XD8R%2BQeoJfdb6%2B8KVfBlK%2FhKsXqymx8i2XYmMEtDzuGG1EF9fPJMjupifiSNjFhrSTBmKrWg9DSmgssMA7JSwL8V9LZFYE%2FJCwIoD3M%2B3NOP7efp4143%2ByKZQQQZ834BiqjEpv2l7xSfcK%2Fyr5%2BYP4v5U5cTQjCCladA%2Fk87kAyy6ADPeMKz4qEhUc%2BB5%2Bf81CpvZaalyPJuK2D3fSi0oeiGoGjYsJ0oASM%2B8AtC8o3h2tQhnu%2Bv1ciiqD%2BZZfj7BgKoyZwpeGYMXtr5BB%2F%2BWhM%2Bl%2BRjqyLW6NqiTEHWlZT4LIoXMfy%2BTNktvk%2Fe9J0P5i%2BqM5Rtv2MI6X0Qqcoraf%2BEhR3J0aHe5%2FQ9e0tCaup2VquKV6eDveMW1QX1ABIf31fOjEGHyOgMMPyw8EGOqUB77%2FlKgUU2rf3sLxjGR87mKIXLR6hqA7ULcDfCzBYKU7HyrzwCpe2HGLEgFcJG2yNNOqR%2BwpLSVVge%2F0XBEpUn3aq%2Fwhre3UqshidWz2lkSpEBgbAhpoSq69RtuvnAPLCv7%2FdjDx6I%2FeTaIz8vJWzhA8OSVB2sOANL7dpChK2GiOJqSmbXYjJVEBlXee8FWtOniO730BE6L%2FZq4wSHIQ0CIV6Zq0X&X-Amz-Signature=fbd8480ebe6054e9523fd31d5d7bb1983e41f591179f5f194d036c4611ec7ab7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAEDFOUG%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCftRptykh3WULUfb%2BHXZ8%2B7We7cOJuMBv9HiiQuXXrWgIgY6E3K3KSTm9d6%2F5DLryMmqvgZxLeA0AjSL9T7FofaJIqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAq65usX3rINVMgvKSrcA38nk4StVf4Lxj6VhAwmFpByX3ncORoWCfnz3KzmOW87BLzl4SrRxDET7%2B4aI1l6YAAAkmBjhLtv9Y4zEIxkDeTVPGquuxo7uErX9Pg5C9OHhsKZp4dCo%2F%2FcXZBWkdL%2FK1f2eSVP1BGR8XUstyMOBBidfZN%2BcMaSi%2B5MadjtMFpLNabPYU7al6kTJJpzGRpa%2BYsQJqUZLOFi9kNUMLKgE1GVjA9diOph6Meg2oqhVVxZGGUF6XD8R%2BQeoJfdb6%2B8KVfBlK%2FhKsXqymx8i2XYmMEtDzuGG1EF9fPJMjupifiSNjFhrSTBmKrWg9DSmgssMA7JSwL8V9LZFYE%2FJCwIoD3M%2B3NOP7efp4143%2ByKZQQQZ834BiqjEpv2l7xSfcK%2Fyr5%2BYP4v5U5cTQjCCladA%2Fk87kAyy6ADPeMKz4qEhUc%2BB5%2Bf81CpvZaalyPJuK2D3fSi0oeiGoGjYsJ0oASM%2B8AtC8o3h2tQhnu%2Bv1ciiqD%2BZZfj7BgKoyZwpeGYMXtr5BB%2F%2BWhM%2Bl%2BRjqyLW6NqiTEHWlZT4LIoXMfy%2BTNktvk%2Fe9J0P5i%2BqM5Rtv2MI6X0Qqcoraf%2BEhR3J0aHe5%2FQ9e0tCaup2VquKV6eDveMW1QX1ABIf31fOjEGHyOgMMPyw8EGOqUB77%2FlKgUU2rf3sLxjGR87mKIXLR6hqA7ULcDfCzBYKU7HyrzwCpe2HGLEgFcJG2yNNOqR%2BwpLSVVge%2F0XBEpUn3aq%2Fwhre3UqshidWz2lkSpEBgbAhpoSq69RtuvnAPLCv7%2FdjDx6I%2FeTaIz8vJWzhA8OSVB2sOANL7dpChK2GiOJqSmbXYjJVEBlXee8FWtOniO730BE6L%2FZq4wSHIQ0CIV6Zq0X&X-Amz-Signature=f97a8a75ab3bca43bf63f625dace79d91847cb16033720866e52972df1cd149c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAEDFOUG%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T230843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCftRptykh3WULUfb%2BHXZ8%2B7We7cOJuMBv9HiiQuXXrWgIgY6E3K3KSTm9d6%2F5DLryMmqvgZxLeA0AjSL9T7FofaJIqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAq65usX3rINVMgvKSrcA38nk4StVf4Lxj6VhAwmFpByX3ncORoWCfnz3KzmOW87BLzl4SrRxDET7%2B4aI1l6YAAAkmBjhLtv9Y4zEIxkDeTVPGquuxo7uErX9Pg5C9OHhsKZp4dCo%2F%2FcXZBWkdL%2FK1f2eSVP1BGR8XUstyMOBBidfZN%2BcMaSi%2B5MadjtMFpLNabPYU7al6kTJJpzGRpa%2BYsQJqUZLOFi9kNUMLKgE1GVjA9diOph6Meg2oqhVVxZGGUF6XD8R%2BQeoJfdb6%2B8KVfBlK%2FhKsXqymx8i2XYmMEtDzuGG1EF9fPJMjupifiSNjFhrSTBmKrWg9DSmgssMA7JSwL8V9LZFYE%2FJCwIoD3M%2B3NOP7efp4143%2ByKZQQQZ834BiqjEpv2l7xSfcK%2Fyr5%2BYP4v5U5cTQjCCladA%2Fk87kAyy6ADPeMKz4qEhUc%2BB5%2Bf81CpvZaalyPJuK2D3fSi0oeiGoGjYsJ0oASM%2B8AtC8o3h2tQhnu%2Bv1ciiqD%2BZZfj7BgKoyZwpeGYMXtr5BB%2F%2BWhM%2Bl%2BRjqyLW6NqiTEHWlZT4LIoXMfy%2BTNktvk%2Fe9J0P5i%2BqM5Rtv2MI6X0Qqcoraf%2BEhR3J0aHe5%2FQ9e0tCaup2VquKV6eDveMW1QX1ABIf31fOjEGHyOgMMPyw8EGOqUB77%2FlKgUU2rf3sLxjGR87mKIXLR6hqA7ULcDfCzBYKU7HyrzwCpe2HGLEgFcJG2yNNOqR%2BwpLSVVge%2F0XBEpUn3aq%2Fwhre3UqshidWz2lkSpEBgbAhpoSq69RtuvnAPLCv7%2FdjDx6I%2FeTaIz8vJWzhA8OSVB2sOANL7dpChK2GiOJqSmbXYjJVEBlXee8FWtOniO730BE6L%2FZq4wSHIQ0CIV6Zq0X&X-Amz-Signature=f9959164a11f8e123f9994a1ae06a9b1003c95f771225c07af97f7a283416fc4&X-Amz-SignedHeaders=host&x-id=GetObject)
