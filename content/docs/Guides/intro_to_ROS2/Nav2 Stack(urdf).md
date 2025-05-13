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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFWWUST6%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T190720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDQXaPr5FtBhaUALFnYDPWPx9hdcJpYV4RiGjmkalCvZwIgfEETYg48KRch2jzCuFQ1AXyFJp%2F%2BnqduqamT6gcNeNsqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEpDPlFJI6k%2FB3r%2FyrcA02hv61v2Iag2in6G5fbVKuW9BzaeHb8Edo59jUdIxYAtlY2LNWYh0ZKLr%2BwHRWSYIRnCRp7dA8R%2F8HsajxtezgIIszCBglW7ebDjuyx%2F6J2lO9Es5W5bh8Qic2gtNJh18GAkYh4prDIWbS%2FRJkZeg0JCavIKusg51DcFpx01Uuiw3BrYWbB8Di6vlLxrJIdAbUpNT%2B8o4kxvzE4hf5Kv68EbO4sIjwFhiroXk%2BFdoe1A%2FiXJqywaBRhf1tUolSpttkKuEnXvnrKXdP%2B9aR%2Bj8MIoj%2FmWN582ASqS70e5zRL%2FyoBHu14G52RDznrw38nHyAE1qSLCVBNcGkikgxkJDc2%2B%2BsAoBsIdD1UYLiJArS%2BjnMzKbe5BmOU8iJmD4QRYHI1MrJOW5mr479%2F684Dhwqr2Zber%2FQ0fS1JKIpkf3%2FMeIKL8hQS6kOXYrLIBjdh1x8fpIIuVjLozaOL5mfuhFdW%2Bj9CGiYIzWybuEDr2xT%2F8IX3jKGp9qBF4ezW9zI5lW%2FNxy1uIm6QpFRNrZtkMK0gjqeOPeDlovDh977TTw3kN1TkMuewnKVAjU15zdqBP1BVCu15n8DULLoaHDDkI7iV62WJgmsSsbYxdG86fLOky6lrR6WcUUcYdxRJMLqqjsEGOqUBLuTgEwb3%2BXBV%2BmUIHGjhDigNdcukCkGrd1oqfeFPgOmEC%2FoUi1c1DTOCaEuKfTDzq1LO67f6aZ9l8a0l9tKxdtQPF2EwXaY11dqy2EWiBHn8Lqgy0BD1aAglCLx81V6%2BC0RGOG3fqYJIZ%2FCGav%2FTK2xjASQFs%2FftHZnZ%2BIziVyRhj8HT9dgjwGgYm1resgrESsTNUZ9tvjYZ1SxfTrA4kLc7Ykbg&X-Amz-Signature=afff5963669ec933f7756610cc0d4fb69e2330e9f5747a3fd26ddbb0f5e1f265&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFWWUST6%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T190720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDQXaPr5FtBhaUALFnYDPWPx9hdcJpYV4RiGjmkalCvZwIgfEETYg48KRch2jzCuFQ1AXyFJp%2F%2BnqduqamT6gcNeNsqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEpDPlFJI6k%2FB3r%2FyrcA02hv61v2Iag2in6G5fbVKuW9BzaeHb8Edo59jUdIxYAtlY2LNWYh0ZKLr%2BwHRWSYIRnCRp7dA8R%2F8HsajxtezgIIszCBglW7ebDjuyx%2F6J2lO9Es5W5bh8Qic2gtNJh18GAkYh4prDIWbS%2FRJkZeg0JCavIKusg51DcFpx01Uuiw3BrYWbB8Di6vlLxrJIdAbUpNT%2B8o4kxvzE4hf5Kv68EbO4sIjwFhiroXk%2BFdoe1A%2FiXJqywaBRhf1tUolSpttkKuEnXvnrKXdP%2B9aR%2Bj8MIoj%2FmWN582ASqS70e5zRL%2FyoBHu14G52RDznrw38nHyAE1qSLCVBNcGkikgxkJDc2%2B%2BsAoBsIdD1UYLiJArS%2BjnMzKbe5BmOU8iJmD4QRYHI1MrJOW5mr479%2F684Dhwqr2Zber%2FQ0fS1JKIpkf3%2FMeIKL8hQS6kOXYrLIBjdh1x8fpIIuVjLozaOL5mfuhFdW%2Bj9CGiYIzWybuEDr2xT%2F8IX3jKGp9qBF4ezW9zI5lW%2FNxy1uIm6QpFRNrZtkMK0gjqeOPeDlovDh977TTw3kN1TkMuewnKVAjU15zdqBP1BVCu15n8DULLoaHDDkI7iV62WJgmsSsbYxdG86fLOky6lrR6WcUUcYdxRJMLqqjsEGOqUBLuTgEwb3%2BXBV%2BmUIHGjhDigNdcukCkGrd1oqfeFPgOmEC%2FoUi1c1DTOCaEuKfTDzq1LO67f6aZ9l8a0l9tKxdtQPF2EwXaY11dqy2EWiBHn8Lqgy0BD1aAglCLx81V6%2BC0RGOG3fqYJIZ%2FCGav%2FTK2xjASQFs%2FftHZnZ%2BIziVyRhj8HT9dgjwGgYm1resgrESsTNUZ9tvjYZ1SxfTrA4kLc7Ykbg&X-Amz-Signature=c7b57fd21ea874eac599061bf985a23907131cf6eae4e05dd0fa98b672c1c52c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFWWUST6%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T190720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDQXaPr5FtBhaUALFnYDPWPx9hdcJpYV4RiGjmkalCvZwIgfEETYg48KRch2jzCuFQ1AXyFJp%2F%2BnqduqamT6gcNeNsqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEpDPlFJI6k%2FB3r%2FyrcA02hv61v2Iag2in6G5fbVKuW9BzaeHb8Edo59jUdIxYAtlY2LNWYh0ZKLr%2BwHRWSYIRnCRp7dA8R%2F8HsajxtezgIIszCBglW7ebDjuyx%2F6J2lO9Es5W5bh8Qic2gtNJh18GAkYh4prDIWbS%2FRJkZeg0JCavIKusg51DcFpx01Uuiw3BrYWbB8Di6vlLxrJIdAbUpNT%2B8o4kxvzE4hf5Kv68EbO4sIjwFhiroXk%2BFdoe1A%2FiXJqywaBRhf1tUolSpttkKuEnXvnrKXdP%2B9aR%2Bj8MIoj%2FmWN582ASqS70e5zRL%2FyoBHu14G52RDznrw38nHyAE1qSLCVBNcGkikgxkJDc2%2B%2BsAoBsIdD1UYLiJArS%2BjnMzKbe5BmOU8iJmD4QRYHI1MrJOW5mr479%2F684Dhwqr2Zber%2FQ0fS1JKIpkf3%2FMeIKL8hQS6kOXYrLIBjdh1x8fpIIuVjLozaOL5mfuhFdW%2Bj9CGiYIzWybuEDr2xT%2F8IX3jKGp9qBF4ezW9zI5lW%2FNxy1uIm6QpFRNrZtkMK0gjqeOPeDlovDh977TTw3kN1TkMuewnKVAjU15zdqBP1BVCu15n8DULLoaHDDkI7iV62WJgmsSsbYxdG86fLOky6lrR6WcUUcYdxRJMLqqjsEGOqUBLuTgEwb3%2BXBV%2BmUIHGjhDigNdcukCkGrd1oqfeFPgOmEC%2FoUi1c1DTOCaEuKfTDzq1LO67f6aZ9l8a0l9tKxdtQPF2EwXaY11dqy2EWiBHn8Lqgy0BD1aAglCLx81V6%2BC0RGOG3fqYJIZ%2FCGav%2FTK2xjASQFs%2FftHZnZ%2BIziVyRhj8HT9dgjwGgYm1resgrESsTNUZ9tvjYZ1SxfTrA4kLc7Ykbg&X-Amz-Signature=e9d9d618651159c250d247f73453fcfa2866c85303a90fd47d9b7c0c3bf86692&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFWWUST6%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T190720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDQXaPr5FtBhaUALFnYDPWPx9hdcJpYV4RiGjmkalCvZwIgfEETYg48KRch2jzCuFQ1AXyFJp%2F%2BnqduqamT6gcNeNsqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEpDPlFJI6k%2FB3r%2FyrcA02hv61v2Iag2in6G5fbVKuW9BzaeHb8Edo59jUdIxYAtlY2LNWYh0ZKLr%2BwHRWSYIRnCRp7dA8R%2F8HsajxtezgIIszCBglW7ebDjuyx%2F6J2lO9Es5W5bh8Qic2gtNJh18GAkYh4prDIWbS%2FRJkZeg0JCavIKusg51DcFpx01Uuiw3BrYWbB8Di6vlLxrJIdAbUpNT%2B8o4kxvzE4hf5Kv68EbO4sIjwFhiroXk%2BFdoe1A%2FiXJqywaBRhf1tUolSpttkKuEnXvnrKXdP%2B9aR%2Bj8MIoj%2FmWN582ASqS70e5zRL%2FyoBHu14G52RDznrw38nHyAE1qSLCVBNcGkikgxkJDc2%2B%2BsAoBsIdD1UYLiJArS%2BjnMzKbe5BmOU8iJmD4QRYHI1MrJOW5mr479%2F684Dhwqr2Zber%2FQ0fS1JKIpkf3%2FMeIKL8hQS6kOXYrLIBjdh1x8fpIIuVjLozaOL5mfuhFdW%2Bj9CGiYIzWybuEDr2xT%2F8IX3jKGp9qBF4ezW9zI5lW%2FNxy1uIm6QpFRNrZtkMK0gjqeOPeDlovDh977TTw3kN1TkMuewnKVAjU15zdqBP1BVCu15n8DULLoaHDDkI7iV62WJgmsSsbYxdG86fLOky6lrR6WcUUcYdxRJMLqqjsEGOqUBLuTgEwb3%2BXBV%2BmUIHGjhDigNdcukCkGrd1oqfeFPgOmEC%2FoUi1c1DTOCaEuKfTDzq1LO67f6aZ9l8a0l9tKxdtQPF2EwXaY11dqy2EWiBHn8Lqgy0BD1aAglCLx81V6%2BC0RGOG3fqYJIZ%2FCGav%2FTK2xjASQFs%2FftHZnZ%2BIziVyRhj8HT9dgjwGgYm1resgrESsTNUZ9tvjYZ1SxfTrA4kLc7Ykbg&X-Amz-Signature=331d505369ae5f87277d3577bd0a655adb44412e1ca913c3613b2993eb9638c3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFWWUST6%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T190720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDQXaPr5FtBhaUALFnYDPWPx9hdcJpYV4RiGjmkalCvZwIgfEETYg48KRch2jzCuFQ1AXyFJp%2F%2BnqduqamT6gcNeNsqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEpDPlFJI6k%2FB3r%2FyrcA02hv61v2Iag2in6G5fbVKuW9BzaeHb8Edo59jUdIxYAtlY2LNWYh0ZKLr%2BwHRWSYIRnCRp7dA8R%2F8HsajxtezgIIszCBglW7ebDjuyx%2F6J2lO9Es5W5bh8Qic2gtNJh18GAkYh4prDIWbS%2FRJkZeg0JCavIKusg51DcFpx01Uuiw3BrYWbB8Di6vlLxrJIdAbUpNT%2B8o4kxvzE4hf5Kv68EbO4sIjwFhiroXk%2BFdoe1A%2FiXJqywaBRhf1tUolSpttkKuEnXvnrKXdP%2B9aR%2Bj8MIoj%2FmWN582ASqS70e5zRL%2FyoBHu14G52RDznrw38nHyAE1qSLCVBNcGkikgxkJDc2%2B%2BsAoBsIdD1UYLiJArS%2BjnMzKbe5BmOU8iJmD4QRYHI1MrJOW5mr479%2F684Dhwqr2Zber%2FQ0fS1JKIpkf3%2FMeIKL8hQS6kOXYrLIBjdh1x8fpIIuVjLozaOL5mfuhFdW%2Bj9CGiYIzWybuEDr2xT%2F8IX3jKGp9qBF4ezW9zI5lW%2FNxy1uIm6QpFRNrZtkMK0gjqeOPeDlovDh977TTw3kN1TkMuewnKVAjU15zdqBP1BVCu15n8DULLoaHDDkI7iV62WJgmsSsbYxdG86fLOky6lrR6WcUUcYdxRJMLqqjsEGOqUBLuTgEwb3%2BXBV%2BmUIHGjhDigNdcukCkGrd1oqfeFPgOmEC%2FoUi1c1DTOCaEuKfTDzq1LO67f6aZ9l8a0l9tKxdtQPF2EwXaY11dqy2EWiBHn8Lqgy0BD1aAglCLx81V6%2BC0RGOG3fqYJIZ%2FCGav%2FTK2xjASQFs%2FftHZnZ%2BIziVyRhj8HT9dgjwGgYm1resgrESsTNUZ9tvjYZ1SxfTrA4kLc7Ykbg&X-Amz-Signature=6804e2eb060dfb03fccf350b8dd3005edf0993a9ebc16a55118b4e514eb7f3df&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFWWUST6%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T190720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDQXaPr5FtBhaUALFnYDPWPx9hdcJpYV4RiGjmkalCvZwIgfEETYg48KRch2jzCuFQ1AXyFJp%2F%2BnqduqamT6gcNeNsqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDEpDPlFJI6k%2FB3r%2FyrcA02hv61v2Iag2in6G5fbVKuW9BzaeHb8Edo59jUdIxYAtlY2LNWYh0ZKLr%2BwHRWSYIRnCRp7dA8R%2F8HsajxtezgIIszCBglW7ebDjuyx%2F6J2lO9Es5W5bh8Qic2gtNJh18GAkYh4prDIWbS%2FRJkZeg0JCavIKusg51DcFpx01Uuiw3BrYWbB8Di6vlLxrJIdAbUpNT%2B8o4kxvzE4hf5Kv68EbO4sIjwFhiroXk%2BFdoe1A%2FiXJqywaBRhf1tUolSpttkKuEnXvnrKXdP%2B9aR%2Bj8MIoj%2FmWN582ASqS70e5zRL%2FyoBHu14G52RDznrw38nHyAE1qSLCVBNcGkikgxkJDc2%2B%2BsAoBsIdD1UYLiJArS%2BjnMzKbe5BmOU8iJmD4QRYHI1MrJOW5mr479%2F684Dhwqr2Zber%2FQ0fS1JKIpkf3%2FMeIKL8hQS6kOXYrLIBjdh1x8fpIIuVjLozaOL5mfuhFdW%2Bj9CGiYIzWybuEDr2xT%2F8IX3jKGp9qBF4ezW9zI5lW%2FNxy1uIm6QpFRNrZtkMK0gjqeOPeDlovDh977TTw3kN1TkMuewnKVAjU15zdqBP1BVCu15n8DULLoaHDDkI7iV62WJgmsSsbYxdG86fLOky6lrR6WcUUcYdxRJMLqqjsEGOqUBLuTgEwb3%2BXBV%2BmUIHGjhDigNdcukCkGrd1oqfeFPgOmEC%2FoUi1c1DTOCaEuKfTDzq1LO67f6aZ9l8a0l9tKxdtQPF2EwXaY11dqy2EWiBHn8Lqgy0BD1aAglCLx81V6%2BC0RGOG3fqYJIZ%2FCGav%2FTK2xjASQFs%2FftHZnZ%2BIziVyRhj8HT9dgjwGgYm1resgrESsTNUZ9tvjYZ1SxfTrA4kLc7Ykbg&X-Amz-Signature=42c7603fe891d6fdccdcd6b6d771747a391e1174fad5a2f866d2dfe3e2cb91b9&X-Amz-SignedHeaders=host&x-id=GetObject)
