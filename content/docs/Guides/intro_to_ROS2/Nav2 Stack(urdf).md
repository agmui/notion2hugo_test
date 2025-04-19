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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVDAKNBI%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQDsbYmK3hUZ8Np%2FyX1eoMMVK7akvmT2o2uQB833HmgjDAIgZzyP0ERl7XYYnpieXZr1UFc7k37PS0t%2BMm7aGi2OpcIqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNGttrUI89ZvTJMwSrcA2%2BDQxZUTLtv%2Fk9O15aGxxvwF8UCWBiu3TW1Zlmf0yibtbM2CiywF2cTdY1IvE6MM8nAwXMyeqwqwfBfHW3P0CzeCuxAI9ZGBndJOeBU3swL6LEZgGlbzRUSNdULI8W54LpZ377I7pkAkLsgyMtE3OAP71%2FGvBp%2BiBhB26MTvqNR6CqT4d%2FN6gLa0k7nNL0j5G%2F1UulmRqWdvJYlrloeAe8IeJAD1oyfZS7Aj9Vpm0z4EqLhL%2BhmLkjxevz9qCewfyMi7s5rGQ7kWR5uel2H55icTU7Eah9lgyHUMpqQ2r2aU1nQD5aV231EjHtNeHIqescnEWya6kBw2Ekgb8hn18%2BDYb0IkzYkTENaDMwBwyvInTSfg%2FNyfWoFZ2vD0N%2B8Ugr2ORT95VDNnUuBR1hVaDBi88V0Efyt0K%2FxeEffqqUDUaezUYhRaABvwWH15O7mSpFqYcK1AQY2pE7HK%2FnWvdXHbd4SYIqqLDCYmYcaF8WrVBhC%2B2xd1JqjfsKT%2FN3y8tjx6yikiLxmID5Nd24%2FNMKqYZ35u3LgFVqW3MS%2FZBpXPtm1Uqf5Tt5DtWwJ2UJuz0v0klyTx3ObkoxhYbuLMY9QJ0vlZsghGyltotOcOZ9OyDR30d%2FS81%2F%2FsC90MNfMkMAGOqUBGiY8LhmMSikUrtPVIr1cZQlCsd666iwPI5yFb8iKvdjfTmW8I0GKmqRUvFy23EHRX9%2FQw3GFdbnKorlMFq50fuymC1%2Bg%2FhcJjrYRAqMVoPz2j%2Fvk5ldKv3xM7Cf7lcANW8LupOy0PC7gt4ol8I2sSdPc6Mg4Xv8Kseyo4%2B3nOQL9MT3ZSTDeXpMHsRURXXCvBqR3S8pdXSGOrkfzmmdazyB3HVl3&X-Amz-Signature=9cc86800381b3099874eefc6cbc3a05a760d8f34ac04bc30b6c0894509c68fb8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVDAKNBI%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQDsbYmK3hUZ8Np%2FyX1eoMMVK7akvmT2o2uQB833HmgjDAIgZzyP0ERl7XYYnpieXZr1UFc7k37PS0t%2BMm7aGi2OpcIqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNGttrUI89ZvTJMwSrcA2%2BDQxZUTLtv%2Fk9O15aGxxvwF8UCWBiu3TW1Zlmf0yibtbM2CiywF2cTdY1IvE6MM8nAwXMyeqwqwfBfHW3P0CzeCuxAI9ZGBndJOeBU3swL6LEZgGlbzRUSNdULI8W54LpZ377I7pkAkLsgyMtE3OAP71%2FGvBp%2BiBhB26MTvqNR6CqT4d%2FN6gLa0k7nNL0j5G%2F1UulmRqWdvJYlrloeAe8IeJAD1oyfZS7Aj9Vpm0z4EqLhL%2BhmLkjxevz9qCewfyMi7s5rGQ7kWR5uel2H55icTU7Eah9lgyHUMpqQ2r2aU1nQD5aV231EjHtNeHIqescnEWya6kBw2Ekgb8hn18%2BDYb0IkzYkTENaDMwBwyvInTSfg%2FNyfWoFZ2vD0N%2B8Ugr2ORT95VDNnUuBR1hVaDBi88V0Efyt0K%2FxeEffqqUDUaezUYhRaABvwWH15O7mSpFqYcK1AQY2pE7HK%2FnWvdXHbd4SYIqqLDCYmYcaF8WrVBhC%2B2xd1JqjfsKT%2FN3y8tjx6yikiLxmID5Nd24%2FNMKqYZ35u3LgFVqW3MS%2FZBpXPtm1Uqf5Tt5DtWwJ2UJuz0v0klyTx3ObkoxhYbuLMY9QJ0vlZsghGyltotOcOZ9OyDR30d%2FS81%2F%2FsC90MNfMkMAGOqUBGiY8LhmMSikUrtPVIr1cZQlCsd666iwPI5yFb8iKvdjfTmW8I0GKmqRUvFy23EHRX9%2FQw3GFdbnKorlMFq50fuymC1%2Bg%2FhcJjrYRAqMVoPz2j%2Fvk5ldKv3xM7Cf7lcANW8LupOy0PC7gt4ol8I2sSdPc6Mg4Xv8Kseyo4%2B3nOQL9MT3ZSTDeXpMHsRURXXCvBqR3S8pdXSGOrkfzmmdazyB3HVl3&X-Amz-Signature=5609117f99ffdd2ebd0e0b6846c05975e87bc6cf7fb1625e4d6b82409c876430&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVDAKNBI%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQDsbYmK3hUZ8Np%2FyX1eoMMVK7akvmT2o2uQB833HmgjDAIgZzyP0ERl7XYYnpieXZr1UFc7k37PS0t%2BMm7aGi2OpcIqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNGttrUI89ZvTJMwSrcA2%2BDQxZUTLtv%2Fk9O15aGxxvwF8UCWBiu3TW1Zlmf0yibtbM2CiywF2cTdY1IvE6MM8nAwXMyeqwqwfBfHW3P0CzeCuxAI9ZGBndJOeBU3swL6LEZgGlbzRUSNdULI8W54LpZ377I7pkAkLsgyMtE3OAP71%2FGvBp%2BiBhB26MTvqNR6CqT4d%2FN6gLa0k7nNL0j5G%2F1UulmRqWdvJYlrloeAe8IeJAD1oyfZS7Aj9Vpm0z4EqLhL%2BhmLkjxevz9qCewfyMi7s5rGQ7kWR5uel2H55icTU7Eah9lgyHUMpqQ2r2aU1nQD5aV231EjHtNeHIqescnEWya6kBw2Ekgb8hn18%2BDYb0IkzYkTENaDMwBwyvInTSfg%2FNyfWoFZ2vD0N%2B8Ugr2ORT95VDNnUuBR1hVaDBi88V0Efyt0K%2FxeEffqqUDUaezUYhRaABvwWH15O7mSpFqYcK1AQY2pE7HK%2FnWvdXHbd4SYIqqLDCYmYcaF8WrVBhC%2B2xd1JqjfsKT%2FN3y8tjx6yikiLxmID5Nd24%2FNMKqYZ35u3LgFVqW3MS%2FZBpXPtm1Uqf5Tt5DtWwJ2UJuz0v0klyTx3ObkoxhYbuLMY9QJ0vlZsghGyltotOcOZ9OyDR30d%2FS81%2F%2FsC90MNfMkMAGOqUBGiY8LhmMSikUrtPVIr1cZQlCsd666iwPI5yFb8iKvdjfTmW8I0GKmqRUvFy23EHRX9%2FQw3GFdbnKorlMFq50fuymC1%2Bg%2FhcJjrYRAqMVoPz2j%2Fvk5ldKv3xM7Cf7lcANW8LupOy0PC7gt4ol8I2sSdPc6Mg4Xv8Kseyo4%2B3nOQL9MT3ZSTDeXpMHsRURXXCvBqR3S8pdXSGOrkfzmmdazyB3HVl3&X-Amz-Signature=5cd82b5203db517ff899ba1286befca82119e19d3ce694c4b6b8446d957ff281&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVDAKNBI%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQDsbYmK3hUZ8Np%2FyX1eoMMVK7akvmT2o2uQB833HmgjDAIgZzyP0ERl7XYYnpieXZr1UFc7k37PS0t%2BMm7aGi2OpcIqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNGttrUI89ZvTJMwSrcA2%2BDQxZUTLtv%2Fk9O15aGxxvwF8UCWBiu3TW1Zlmf0yibtbM2CiywF2cTdY1IvE6MM8nAwXMyeqwqwfBfHW3P0CzeCuxAI9ZGBndJOeBU3swL6LEZgGlbzRUSNdULI8W54LpZ377I7pkAkLsgyMtE3OAP71%2FGvBp%2BiBhB26MTvqNR6CqT4d%2FN6gLa0k7nNL0j5G%2F1UulmRqWdvJYlrloeAe8IeJAD1oyfZS7Aj9Vpm0z4EqLhL%2BhmLkjxevz9qCewfyMi7s5rGQ7kWR5uel2H55icTU7Eah9lgyHUMpqQ2r2aU1nQD5aV231EjHtNeHIqescnEWya6kBw2Ekgb8hn18%2BDYb0IkzYkTENaDMwBwyvInTSfg%2FNyfWoFZ2vD0N%2B8Ugr2ORT95VDNnUuBR1hVaDBi88V0Efyt0K%2FxeEffqqUDUaezUYhRaABvwWH15O7mSpFqYcK1AQY2pE7HK%2FnWvdXHbd4SYIqqLDCYmYcaF8WrVBhC%2B2xd1JqjfsKT%2FN3y8tjx6yikiLxmID5Nd24%2FNMKqYZ35u3LgFVqW3MS%2FZBpXPtm1Uqf5Tt5DtWwJ2UJuz0v0klyTx3ObkoxhYbuLMY9QJ0vlZsghGyltotOcOZ9OyDR30d%2FS81%2F%2FsC90MNfMkMAGOqUBGiY8LhmMSikUrtPVIr1cZQlCsd666iwPI5yFb8iKvdjfTmW8I0GKmqRUvFy23EHRX9%2FQw3GFdbnKorlMFq50fuymC1%2Bg%2FhcJjrYRAqMVoPz2j%2Fvk5ldKv3xM7Cf7lcANW8LupOy0PC7gt4ol8I2sSdPc6Mg4Xv8Kseyo4%2B3nOQL9MT3ZSTDeXpMHsRURXXCvBqR3S8pdXSGOrkfzmmdazyB3HVl3&X-Amz-Signature=6d24ed93de32fc0a72030464a946b2b924c8e277f086ec199f487edae7d8fa6d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVDAKNBI%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQDsbYmK3hUZ8Np%2FyX1eoMMVK7akvmT2o2uQB833HmgjDAIgZzyP0ERl7XYYnpieXZr1UFc7k37PS0t%2BMm7aGi2OpcIqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNGttrUI89ZvTJMwSrcA2%2BDQxZUTLtv%2Fk9O15aGxxvwF8UCWBiu3TW1Zlmf0yibtbM2CiywF2cTdY1IvE6MM8nAwXMyeqwqwfBfHW3P0CzeCuxAI9ZGBndJOeBU3swL6LEZgGlbzRUSNdULI8W54LpZ377I7pkAkLsgyMtE3OAP71%2FGvBp%2BiBhB26MTvqNR6CqT4d%2FN6gLa0k7nNL0j5G%2F1UulmRqWdvJYlrloeAe8IeJAD1oyfZS7Aj9Vpm0z4EqLhL%2BhmLkjxevz9qCewfyMi7s5rGQ7kWR5uel2H55icTU7Eah9lgyHUMpqQ2r2aU1nQD5aV231EjHtNeHIqescnEWya6kBw2Ekgb8hn18%2BDYb0IkzYkTENaDMwBwyvInTSfg%2FNyfWoFZ2vD0N%2B8Ugr2ORT95VDNnUuBR1hVaDBi88V0Efyt0K%2FxeEffqqUDUaezUYhRaABvwWH15O7mSpFqYcK1AQY2pE7HK%2FnWvdXHbd4SYIqqLDCYmYcaF8WrVBhC%2B2xd1JqjfsKT%2FN3y8tjx6yikiLxmID5Nd24%2FNMKqYZ35u3LgFVqW3MS%2FZBpXPtm1Uqf5Tt5DtWwJ2UJuz0v0klyTx3ObkoxhYbuLMY9QJ0vlZsghGyltotOcOZ9OyDR30d%2FS81%2F%2FsC90MNfMkMAGOqUBGiY8LhmMSikUrtPVIr1cZQlCsd666iwPI5yFb8iKvdjfTmW8I0GKmqRUvFy23EHRX9%2FQw3GFdbnKorlMFq50fuymC1%2Bg%2FhcJjrYRAqMVoPz2j%2Fvk5ldKv3xM7Cf7lcANW8LupOy0PC7gt4ol8I2sSdPc6Mg4Xv8Kseyo4%2B3nOQL9MT3ZSTDeXpMHsRURXXCvBqR3S8pdXSGOrkfzmmdazyB3HVl3&X-Amz-Signature=9e64d428f2681e257a1fc13d2335a8e7c03b70b44bb5460d51c32cb112320eaf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVDAKNBI%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T230743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQDsbYmK3hUZ8Np%2FyX1eoMMVK7akvmT2o2uQB833HmgjDAIgZzyP0ERl7XYYnpieXZr1UFc7k37PS0t%2BMm7aGi2OpcIqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNGttrUI89ZvTJMwSrcA2%2BDQxZUTLtv%2Fk9O15aGxxvwF8UCWBiu3TW1Zlmf0yibtbM2CiywF2cTdY1IvE6MM8nAwXMyeqwqwfBfHW3P0CzeCuxAI9ZGBndJOeBU3swL6LEZgGlbzRUSNdULI8W54LpZ377I7pkAkLsgyMtE3OAP71%2FGvBp%2BiBhB26MTvqNR6CqT4d%2FN6gLa0k7nNL0j5G%2F1UulmRqWdvJYlrloeAe8IeJAD1oyfZS7Aj9Vpm0z4EqLhL%2BhmLkjxevz9qCewfyMi7s5rGQ7kWR5uel2H55icTU7Eah9lgyHUMpqQ2r2aU1nQD5aV231EjHtNeHIqescnEWya6kBw2Ekgb8hn18%2BDYb0IkzYkTENaDMwBwyvInTSfg%2FNyfWoFZ2vD0N%2B8Ugr2ORT95VDNnUuBR1hVaDBi88V0Efyt0K%2FxeEffqqUDUaezUYhRaABvwWH15O7mSpFqYcK1AQY2pE7HK%2FnWvdXHbd4SYIqqLDCYmYcaF8WrVBhC%2B2xd1JqjfsKT%2FN3y8tjx6yikiLxmID5Nd24%2FNMKqYZ35u3LgFVqW3MS%2FZBpXPtm1Uqf5Tt5DtWwJ2UJuz0v0klyTx3ObkoxhYbuLMY9QJ0vlZsghGyltotOcOZ9OyDR30d%2FS81%2F%2FsC90MNfMkMAGOqUBGiY8LhmMSikUrtPVIr1cZQlCsd666iwPI5yFb8iKvdjfTmW8I0GKmqRUvFy23EHRX9%2FQw3GFdbnKorlMFq50fuymC1%2Bg%2FhcJjrYRAqMVoPz2j%2Fvk5ldKv3xM7Cf7lcANW8LupOy0PC7gt4ol8I2sSdPc6Mg4Xv8Kseyo4%2B3nOQL9MT3ZSTDeXpMHsRURXXCvBqR3S8pdXSGOrkfzmmdazyB3HVl3&X-Amz-Signature=f37678d55c7927913fd5b3538b9147722dae48188ddcd02eacb8a746e7a4f905&X-Amz-SignedHeaders=host&x-id=GetObject)
