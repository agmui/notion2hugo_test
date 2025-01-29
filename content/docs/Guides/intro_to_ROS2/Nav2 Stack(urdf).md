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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFGO5PXT%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPjsgxIYp%2Fle%2Fm1%2BY4rzEZgBM1P9p8vBqBGAsVfM5KZgIgZhTZokZNW5uObi56MihfPl02yqjwFR%2FAHZ7YFmUhPKEqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2FKvo6vsfH%2FlRxwFyrcA5oqxRV4nyy%2FYkdm1TyLKKzPLyt32tTWaXQwHvRkh2h%2Bz1KTHvaYkMK0bSx0OJgOKcOjEO0uEVfvsgKYMcO7t4CtT9F9M178xloGNF81dR92SSFIKccfTOHmO9A65jbla%2Bmfed2RL6XDV0Gs8RGckYXYR3X7cqcks4PWb9gPGOksnptRYODidFY68hS9FW067VhEREhnCZ7jkJcVHqmKgwMxY5Bzc1%2FKXmkQDLD4cbazf82wKoFdpH2tPsXiJsg%2B4SLvvlXQde%2BfuBLvO%2Btye9pcZwHsD4OquvA4YFsGLEGg5E2w7aXqU%2Fd8xlh9ROGBOpBy6eyGQzxj%2FIlmUUAT749d1hCiofPixZtxy8vjcWsbpT6LDW%2BzkXz18RgNXXayFoEAOq2t2aWZBL8J%2BAHH0xT57Id4sLCHlmUPlDs70Fh1Bl1T45%2BrmnTBME%2B%2B%2Ft3LzzzYmLdbLe%2BHQT0hehs2Rpe6rqpKYvihGJY5vjW4Oi2ugmzo0LrpT3UFhLJsCkrYANhZSLalsKLCBF%2BXF5nY%2BF6FxoWkbjUg5o4uxg%2BCO9p8wMWrEpwzsdTcp0MibLDPbk%2BEagVzAXNy0mjiTGidm%2FJKI8%2FL2qHtd6uBL0T0zJGYTLbXgzgNIC8tODW5MPyE6bwGOqUB%2FRFW5pipX7yJqjskWCVHF%2FJBDuYykjIcng8u3dkJp14ZsA95GwhZAFEMKrep6%2BO7L%2BgjLl1ds8IV%2BBH5pCBeO4evN9QLEsK8rrMxythAy7WKmbkB%2BQSuEbsz3%2FRjqsJU0W9YbO%2F8FcMPbe9KNqIbRzZb%2Bg6f4eXnuC5Rqxu7Qr45NZ1lzUi4TQPuUkP%2BxaI83Y6e8URxkKJyIB4OR4qa23ya%2Bu61&X-Amz-Signature=badf92acd10d22f526b3318d924e71a144be9b26accadde3a8f7c3281e561073&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFGO5PXT%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPjsgxIYp%2Fle%2Fm1%2BY4rzEZgBM1P9p8vBqBGAsVfM5KZgIgZhTZokZNW5uObi56MihfPl02yqjwFR%2FAHZ7YFmUhPKEqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2FKvo6vsfH%2FlRxwFyrcA5oqxRV4nyy%2FYkdm1TyLKKzPLyt32tTWaXQwHvRkh2h%2Bz1KTHvaYkMK0bSx0OJgOKcOjEO0uEVfvsgKYMcO7t4CtT9F9M178xloGNF81dR92SSFIKccfTOHmO9A65jbla%2Bmfed2RL6XDV0Gs8RGckYXYR3X7cqcks4PWb9gPGOksnptRYODidFY68hS9FW067VhEREhnCZ7jkJcVHqmKgwMxY5Bzc1%2FKXmkQDLD4cbazf82wKoFdpH2tPsXiJsg%2B4SLvvlXQde%2BfuBLvO%2Btye9pcZwHsD4OquvA4YFsGLEGg5E2w7aXqU%2Fd8xlh9ROGBOpBy6eyGQzxj%2FIlmUUAT749d1hCiofPixZtxy8vjcWsbpT6LDW%2BzkXz18RgNXXayFoEAOq2t2aWZBL8J%2BAHH0xT57Id4sLCHlmUPlDs70Fh1Bl1T45%2BrmnTBME%2B%2B%2Ft3LzzzYmLdbLe%2BHQT0hehs2Rpe6rqpKYvihGJY5vjW4Oi2ugmzo0LrpT3UFhLJsCkrYANhZSLalsKLCBF%2BXF5nY%2BF6FxoWkbjUg5o4uxg%2BCO9p8wMWrEpwzsdTcp0MibLDPbk%2BEagVzAXNy0mjiTGidm%2FJKI8%2FL2qHtd6uBL0T0zJGYTLbXgzgNIC8tODW5MPyE6bwGOqUB%2FRFW5pipX7yJqjskWCVHF%2FJBDuYykjIcng8u3dkJp14ZsA95GwhZAFEMKrep6%2BO7L%2BgjLl1ds8IV%2BBH5pCBeO4evN9QLEsK8rrMxythAy7WKmbkB%2BQSuEbsz3%2FRjqsJU0W9YbO%2F8FcMPbe9KNqIbRzZb%2Bg6f4eXnuC5Rqxu7Qr45NZ1lzUi4TQPuUkP%2BxaI83Y6e8URxkKJyIB4OR4qa23ya%2Bu61&X-Amz-Signature=995bccffd57b06a7441ddef8caa30181d87e4955723a70d035712b68265f1c12&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFGO5PXT%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPjsgxIYp%2Fle%2Fm1%2BY4rzEZgBM1P9p8vBqBGAsVfM5KZgIgZhTZokZNW5uObi56MihfPl02yqjwFR%2FAHZ7YFmUhPKEqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2FKvo6vsfH%2FlRxwFyrcA5oqxRV4nyy%2FYkdm1TyLKKzPLyt32tTWaXQwHvRkh2h%2Bz1KTHvaYkMK0bSx0OJgOKcOjEO0uEVfvsgKYMcO7t4CtT9F9M178xloGNF81dR92SSFIKccfTOHmO9A65jbla%2Bmfed2RL6XDV0Gs8RGckYXYR3X7cqcks4PWb9gPGOksnptRYODidFY68hS9FW067VhEREhnCZ7jkJcVHqmKgwMxY5Bzc1%2FKXmkQDLD4cbazf82wKoFdpH2tPsXiJsg%2B4SLvvlXQde%2BfuBLvO%2Btye9pcZwHsD4OquvA4YFsGLEGg5E2w7aXqU%2Fd8xlh9ROGBOpBy6eyGQzxj%2FIlmUUAT749d1hCiofPixZtxy8vjcWsbpT6LDW%2BzkXz18RgNXXayFoEAOq2t2aWZBL8J%2BAHH0xT57Id4sLCHlmUPlDs70Fh1Bl1T45%2BrmnTBME%2B%2B%2Ft3LzzzYmLdbLe%2BHQT0hehs2Rpe6rqpKYvihGJY5vjW4Oi2ugmzo0LrpT3UFhLJsCkrYANhZSLalsKLCBF%2BXF5nY%2BF6FxoWkbjUg5o4uxg%2BCO9p8wMWrEpwzsdTcp0MibLDPbk%2BEagVzAXNy0mjiTGidm%2FJKI8%2FL2qHtd6uBL0T0zJGYTLbXgzgNIC8tODW5MPyE6bwGOqUB%2FRFW5pipX7yJqjskWCVHF%2FJBDuYykjIcng8u3dkJp14ZsA95GwhZAFEMKrep6%2BO7L%2BgjLl1ds8IV%2BBH5pCBeO4evN9QLEsK8rrMxythAy7WKmbkB%2BQSuEbsz3%2FRjqsJU0W9YbO%2F8FcMPbe9KNqIbRzZb%2Bg6f4eXnuC5Rqxu7Qr45NZ1lzUi4TQPuUkP%2BxaI83Y6e8URxkKJyIB4OR4qa23ya%2Bu61&X-Amz-Signature=8aa94d5d4a071d6bb8efee9471e5a053433fd68675a8a9d9199c1e9154010b30&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFGO5PXT%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPjsgxIYp%2Fle%2Fm1%2BY4rzEZgBM1P9p8vBqBGAsVfM5KZgIgZhTZokZNW5uObi56MihfPl02yqjwFR%2FAHZ7YFmUhPKEqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2FKvo6vsfH%2FlRxwFyrcA5oqxRV4nyy%2FYkdm1TyLKKzPLyt32tTWaXQwHvRkh2h%2Bz1KTHvaYkMK0bSx0OJgOKcOjEO0uEVfvsgKYMcO7t4CtT9F9M178xloGNF81dR92SSFIKccfTOHmO9A65jbla%2Bmfed2RL6XDV0Gs8RGckYXYR3X7cqcks4PWb9gPGOksnptRYODidFY68hS9FW067VhEREhnCZ7jkJcVHqmKgwMxY5Bzc1%2FKXmkQDLD4cbazf82wKoFdpH2tPsXiJsg%2B4SLvvlXQde%2BfuBLvO%2Btye9pcZwHsD4OquvA4YFsGLEGg5E2w7aXqU%2Fd8xlh9ROGBOpBy6eyGQzxj%2FIlmUUAT749d1hCiofPixZtxy8vjcWsbpT6LDW%2BzkXz18RgNXXayFoEAOq2t2aWZBL8J%2BAHH0xT57Id4sLCHlmUPlDs70Fh1Bl1T45%2BrmnTBME%2B%2B%2Ft3LzzzYmLdbLe%2BHQT0hehs2Rpe6rqpKYvihGJY5vjW4Oi2ugmzo0LrpT3UFhLJsCkrYANhZSLalsKLCBF%2BXF5nY%2BF6FxoWkbjUg5o4uxg%2BCO9p8wMWrEpwzsdTcp0MibLDPbk%2BEagVzAXNy0mjiTGidm%2FJKI8%2FL2qHtd6uBL0T0zJGYTLbXgzgNIC8tODW5MPyE6bwGOqUB%2FRFW5pipX7yJqjskWCVHF%2FJBDuYykjIcng8u3dkJp14ZsA95GwhZAFEMKrep6%2BO7L%2BgjLl1ds8IV%2BBH5pCBeO4evN9QLEsK8rrMxythAy7WKmbkB%2BQSuEbsz3%2FRjqsJU0W9YbO%2F8FcMPbe9KNqIbRzZb%2Bg6f4eXnuC5Rqxu7Qr45NZ1lzUi4TQPuUkP%2BxaI83Y6e8URxkKJyIB4OR4qa23ya%2Bu61&X-Amz-Signature=28dff28979a65beb22a2aefea146e1c5028289e5737d24f10c1b7001edd138f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFGO5PXT%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPjsgxIYp%2Fle%2Fm1%2BY4rzEZgBM1P9p8vBqBGAsVfM5KZgIgZhTZokZNW5uObi56MihfPl02yqjwFR%2FAHZ7YFmUhPKEqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2FKvo6vsfH%2FlRxwFyrcA5oqxRV4nyy%2FYkdm1TyLKKzPLyt32tTWaXQwHvRkh2h%2Bz1KTHvaYkMK0bSx0OJgOKcOjEO0uEVfvsgKYMcO7t4CtT9F9M178xloGNF81dR92SSFIKccfTOHmO9A65jbla%2Bmfed2RL6XDV0Gs8RGckYXYR3X7cqcks4PWb9gPGOksnptRYODidFY68hS9FW067VhEREhnCZ7jkJcVHqmKgwMxY5Bzc1%2FKXmkQDLD4cbazf82wKoFdpH2tPsXiJsg%2B4SLvvlXQde%2BfuBLvO%2Btye9pcZwHsD4OquvA4YFsGLEGg5E2w7aXqU%2Fd8xlh9ROGBOpBy6eyGQzxj%2FIlmUUAT749d1hCiofPixZtxy8vjcWsbpT6LDW%2BzkXz18RgNXXayFoEAOq2t2aWZBL8J%2BAHH0xT57Id4sLCHlmUPlDs70Fh1Bl1T45%2BrmnTBME%2B%2B%2Ft3LzzzYmLdbLe%2BHQT0hehs2Rpe6rqpKYvihGJY5vjW4Oi2ugmzo0LrpT3UFhLJsCkrYANhZSLalsKLCBF%2BXF5nY%2BF6FxoWkbjUg5o4uxg%2BCO9p8wMWrEpwzsdTcp0MibLDPbk%2BEagVzAXNy0mjiTGidm%2FJKI8%2FL2qHtd6uBL0T0zJGYTLbXgzgNIC8tODW5MPyE6bwGOqUB%2FRFW5pipX7yJqjskWCVHF%2FJBDuYykjIcng8u3dkJp14ZsA95GwhZAFEMKrep6%2BO7L%2BgjLl1ds8IV%2BBH5pCBeO4evN9QLEsK8rrMxythAy7WKmbkB%2BQSuEbsz3%2FRjqsJU0W9YbO%2F8FcMPbe9KNqIbRzZb%2Bg6f4eXnuC5Rqxu7Qr45NZ1lzUi4TQPuUkP%2BxaI83Y6e8URxkKJyIB4OR4qa23ya%2Bu61&X-Amz-Signature=f134dad0ea54d23d109e4bacc332a7401d1145a84f84957a1fe9bc3fcf6cc518&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFGO5PXT%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T170214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPjsgxIYp%2Fle%2Fm1%2BY4rzEZgBM1P9p8vBqBGAsVfM5KZgIgZhTZokZNW5uObi56MihfPl02yqjwFR%2FAHZ7YFmUhPKEqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2FKvo6vsfH%2FlRxwFyrcA5oqxRV4nyy%2FYkdm1TyLKKzPLyt32tTWaXQwHvRkh2h%2Bz1KTHvaYkMK0bSx0OJgOKcOjEO0uEVfvsgKYMcO7t4CtT9F9M178xloGNF81dR92SSFIKccfTOHmO9A65jbla%2Bmfed2RL6XDV0Gs8RGckYXYR3X7cqcks4PWb9gPGOksnptRYODidFY68hS9FW067VhEREhnCZ7jkJcVHqmKgwMxY5Bzc1%2FKXmkQDLD4cbazf82wKoFdpH2tPsXiJsg%2B4SLvvlXQde%2BfuBLvO%2Btye9pcZwHsD4OquvA4YFsGLEGg5E2w7aXqU%2Fd8xlh9ROGBOpBy6eyGQzxj%2FIlmUUAT749d1hCiofPixZtxy8vjcWsbpT6LDW%2BzkXz18RgNXXayFoEAOq2t2aWZBL8J%2BAHH0xT57Id4sLCHlmUPlDs70Fh1Bl1T45%2BrmnTBME%2B%2B%2Ft3LzzzYmLdbLe%2BHQT0hehs2Rpe6rqpKYvihGJY5vjW4Oi2ugmzo0LrpT3UFhLJsCkrYANhZSLalsKLCBF%2BXF5nY%2BF6FxoWkbjUg5o4uxg%2BCO9p8wMWrEpwzsdTcp0MibLDPbk%2BEagVzAXNy0mjiTGidm%2FJKI8%2FL2qHtd6uBL0T0zJGYTLbXgzgNIC8tODW5MPyE6bwGOqUB%2FRFW5pipX7yJqjskWCVHF%2FJBDuYykjIcng8u3dkJp14ZsA95GwhZAFEMKrep6%2BO7L%2BgjLl1ds8IV%2BBH5pCBeO4evN9QLEsK8rrMxythAy7WKmbkB%2BQSuEbsz3%2FRjqsJU0W9YbO%2F8FcMPbe9KNqIbRzZb%2Bg6f4eXnuC5Rqxu7Qr45NZ1lzUi4TQPuUkP%2BxaI83Y6e8URxkKJyIB4OR4qa23ya%2Bu61&X-Amz-Signature=4980ad01ef804b9264f0d20c72c2e7f6fabfdd2357f6a7dc5dac5eaf88660085&X-Amz-SignedHeaders=host&x-id=GetObject)
