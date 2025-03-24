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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MH5VGSX%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T050906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FF7hPDjFU6jbmWrzAYjPYhsh9xyRRTouYJl%2FmcPDgrAiBAsiigjGcdK8lg1Bd0HlCF06EWNBaW226Kyqc%2FyFNO%2FCqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBr%2FrG0dszBy6BervKtwDLdTFpdJlO84PvwzxzxeED%2B1cA2jrxfiZ%2FcQow5mYyxs8Zeep9cfpgvJelQNvXvs%2B226NY3rpp%2FLSeYfUBxsW013b9AOZh0ctmp8nsFLw7wF%2FIHgXohrui6TFJDKzYdpmVg404%2FHj6XMaHstc2tu9eqi%2FdQ1sAoGx%2BcDS%2FyEfpoI0gDxhs65aA8wUgvT5yDM1xtMKbrxtKRC2WneZw156RNeff59lwXiKEf2KB1KVhsN0T0CdpH0ErikhH8huDygP1HBFEo7enEM6eWVAmUHlUiTB4wzvsfVXBV3nyH3BR%2B%2B1myrlv6GdAm8AeXioc3%2B0cGFoKpbFIYJxlyk5Ro2Z8unb1B12t%2FiuYfIXZdXiBybvU33cJyeYuvGY8NlwDTvjKGMbPEoavWVlcmjw48gWyDEtwHPUZIwnoOnqAbJtynwPr2ixlAPhE6BXmitHKmwije65ft5iTZ8MjffQmxclY0PCjkbepKuPJCehsURbhTnupisFSawqacO28WDWB8mrUTYWPY6gOXv8cJZSuGOmnBeuKSE%2F4IWv%2BdZQdVS9no2yKDf%2BlVg80y0W6bawVl3%2BICyJsu7o3D0d4ixjBkzaKmCdZsIVKq97Q0BPdtBKhWkUKvSxwhAUNXRTykowqriDvwY6pgFoByEuNomrjxxc3t%2FnICNQuV03Y6mzAOQpI6%2Fr0%2Fj8ineqmYVSw2OvPzksrbX5LLjhTPag6gTWM5ziOoLEnuGAnb0tCDUImaBg%2BFtnb7cwM86oz3DPQ8H88691E2Cirj7W0zLCQ3iygW6%2BcsJlYhH%2FrX2O6s%2FR6MSrUT4rGKi5oBvs4qtkJREuWp8XG65ZcABU9ZV7wxQseUPpDs7a5S6naF9bMQun&X-Amz-Signature=6c974d96068ca1e2c60b0039f30591fde625d009633d968f9ddab111641fe406&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MH5VGSX%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T050906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FF7hPDjFU6jbmWrzAYjPYhsh9xyRRTouYJl%2FmcPDgrAiBAsiigjGcdK8lg1Bd0HlCF06EWNBaW226Kyqc%2FyFNO%2FCqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBr%2FrG0dszBy6BervKtwDLdTFpdJlO84PvwzxzxeED%2B1cA2jrxfiZ%2FcQow5mYyxs8Zeep9cfpgvJelQNvXvs%2B226NY3rpp%2FLSeYfUBxsW013b9AOZh0ctmp8nsFLw7wF%2FIHgXohrui6TFJDKzYdpmVg404%2FHj6XMaHstc2tu9eqi%2FdQ1sAoGx%2BcDS%2FyEfpoI0gDxhs65aA8wUgvT5yDM1xtMKbrxtKRC2WneZw156RNeff59lwXiKEf2KB1KVhsN0T0CdpH0ErikhH8huDygP1HBFEo7enEM6eWVAmUHlUiTB4wzvsfVXBV3nyH3BR%2B%2B1myrlv6GdAm8AeXioc3%2B0cGFoKpbFIYJxlyk5Ro2Z8unb1B12t%2FiuYfIXZdXiBybvU33cJyeYuvGY8NlwDTvjKGMbPEoavWVlcmjw48gWyDEtwHPUZIwnoOnqAbJtynwPr2ixlAPhE6BXmitHKmwije65ft5iTZ8MjffQmxclY0PCjkbepKuPJCehsURbhTnupisFSawqacO28WDWB8mrUTYWPY6gOXv8cJZSuGOmnBeuKSE%2F4IWv%2BdZQdVS9no2yKDf%2BlVg80y0W6bawVl3%2BICyJsu7o3D0d4ixjBkzaKmCdZsIVKq97Q0BPdtBKhWkUKvSxwhAUNXRTykowqriDvwY6pgFoByEuNomrjxxc3t%2FnICNQuV03Y6mzAOQpI6%2Fr0%2Fj8ineqmYVSw2OvPzksrbX5LLjhTPag6gTWM5ziOoLEnuGAnb0tCDUImaBg%2BFtnb7cwM86oz3DPQ8H88691E2Cirj7W0zLCQ3iygW6%2BcsJlYhH%2FrX2O6s%2FR6MSrUT4rGKi5oBvs4qtkJREuWp8XG65ZcABU9ZV7wxQseUPpDs7a5S6naF9bMQun&X-Amz-Signature=ea25294d1a2355ad87afb35a7d2def58b95536ae9cfbbf9fd25cdb98903aa570&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MH5VGSX%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T050906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FF7hPDjFU6jbmWrzAYjPYhsh9xyRRTouYJl%2FmcPDgrAiBAsiigjGcdK8lg1Bd0HlCF06EWNBaW226Kyqc%2FyFNO%2FCqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBr%2FrG0dszBy6BervKtwDLdTFpdJlO84PvwzxzxeED%2B1cA2jrxfiZ%2FcQow5mYyxs8Zeep9cfpgvJelQNvXvs%2B226NY3rpp%2FLSeYfUBxsW013b9AOZh0ctmp8nsFLw7wF%2FIHgXohrui6TFJDKzYdpmVg404%2FHj6XMaHstc2tu9eqi%2FdQ1sAoGx%2BcDS%2FyEfpoI0gDxhs65aA8wUgvT5yDM1xtMKbrxtKRC2WneZw156RNeff59lwXiKEf2KB1KVhsN0T0CdpH0ErikhH8huDygP1HBFEo7enEM6eWVAmUHlUiTB4wzvsfVXBV3nyH3BR%2B%2B1myrlv6GdAm8AeXioc3%2B0cGFoKpbFIYJxlyk5Ro2Z8unb1B12t%2FiuYfIXZdXiBybvU33cJyeYuvGY8NlwDTvjKGMbPEoavWVlcmjw48gWyDEtwHPUZIwnoOnqAbJtynwPr2ixlAPhE6BXmitHKmwije65ft5iTZ8MjffQmxclY0PCjkbepKuPJCehsURbhTnupisFSawqacO28WDWB8mrUTYWPY6gOXv8cJZSuGOmnBeuKSE%2F4IWv%2BdZQdVS9no2yKDf%2BlVg80y0W6bawVl3%2BICyJsu7o3D0d4ixjBkzaKmCdZsIVKq97Q0BPdtBKhWkUKvSxwhAUNXRTykowqriDvwY6pgFoByEuNomrjxxc3t%2FnICNQuV03Y6mzAOQpI6%2Fr0%2Fj8ineqmYVSw2OvPzksrbX5LLjhTPag6gTWM5ziOoLEnuGAnb0tCDUImaBg%2BFtnb7cwM86oz3DPQ8H88691E2Cirj7W0zLCQ3iygW6%2BcsJlYhH%2FrX2O6s%2FR6MSrUT4rGKi5oBvs4qtkJREuWp8XG65ZcABU9ZV7wxQseUPpDs7a5S6naF9bMQun&X-Amz-Signature=81207e1f0b18a62abab5db75fb53d778735b6528067690f9bb2a05ca89a35288&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MH5VGSX%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T050906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FF7hPDjFU6jbmWrzAYjPYhsh9xyRRTouYJl%2FmcPDgrAiBAsiigjGcdK8lg1Bd0HlCF06EWNBaW226Kyqc%2FyFNO%2FCqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBr%2FrG0dszBy6BervKtwDLdTFpdJlO84PvwzxzxeED%2B1cA2jrxfiZ%2FcQow5mYyxs8Zeep9cfpgvJelQNvXvs%2B226NY3rpp%2FLSeYfUBxsW013b9AOZh0ctmp8nsFLw7wF%2FIHgXohrui6TFJDKzYdpmVg404%2FHj6XMaHstc2tu9eqi%2FdQ1sAoGx%2BcDS%2FyEfpoI0gDxhs65aA8wUgvT5yDM1xtMKbrxtKRC2WneZw156RNeff59lwXiKEf2KB1KVhsN0T0CdpH0ErikhH8huDygP1HBFEo7enEM6eWVAmUHlUiTB4wzvsfVXBV3nyH3BR%2B%2B1myrlv6GdAm8AeXioc3%2B0cGFoKpbFIYJxlyk5Ro2Z8unb1B12t%2FiuYfIXZdXiBybvU33cJyeYuvGY8NlwDTvjKGMbPEoavWVlcmjw48gWyDEtwHPUZIwnoOnqAbJtynwPr2ixlAPhE6BXmitHKmwije65ft5iTZ8MjffQmxclY0PCjkbepKuPJCehsURbhTnupisFSawqacO28WDWB8mrUTYWPY6gOXv8cJZSuGOmnBeuKSE%2F4IWv%2BdZQdVS9no2yKDf%2BlVg80y0W6bawVl3%2BICyJsu7o3D0d4ixjBkzaKmCdZsIVKq97Q0BPdtBKhWkUKvSxwhAUNXRTykowqriDvwY6pgFoByEuNomrjxxc3t%2FnICNQuV03Y6mzAOQpI6%2Fr0%2Fj8ineqmYVSw2OvPzksrbX5LLjhTPag6gTWM5ziOoLEnuGAnb0tCDUImaBg%2BFtnb7cwM86oz3DPQ8H88691E2Cirj7W0zLCQ3iygW6%2BcsJlYhH%2FrX2O6s%2FR6MSrUT4rGKi5oBvs4qtkJREuWp8XG65ZcABU9ZV7wxQseUPpDs7a5S6naF9bMQun&X-Amz-Signature=ff878d5552ba45bb7bb5401d0fbeee5e05768bd1c9b1ecee5c263bf4212e899a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MH5VGSX%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T050906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FF7hPDjFU6jbmWrzAYjPYhsh9xyRRTouYJl%2FmcPDgrAiBAsiigjGcdK8lg1Bd0HlCF06EWNBaW226Kyqc%2FyFNO%2FCqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBr%2FrG0dszBy6BervKtwDLdTFpdJlO84PvwzxzxeED%2B1cA2jrxfiZ%2FcQow5mYyxs8Zeep9cfpgvJelQNvXvs%2B226NY3rpp%2FLSeYfUBxsW013b9AOZh0ctmp8nsFLw7wF%2FIHgXohrui6TFJDKzYdpmVg404%2FHj6XMaHstc2tu9eqi%2FdQ1sAoGx%2BcDS%2FyEfpoI0gDxhs65aA8wUgvT5yDM1xtMKbrxtKRC2WneZw156RNeff59lwXiKEf2KB1KVhsN0T0CdpH0ErikhH8huDygP1HBFEo7enEM6eWVAmUHlUiTB4wzvsfVXBV3nyH3BR%2B%2B1myrlv6GdAm8AeXioc3%2B0cGFoKpbFIYJxlyk5Ro2Z8unb1B12t%2FiuYfIXZdXiBybvU33cJyeYuvGY8NlwDTvjKGMbPEoavWVlcmjw48gWyDEtwHPUZIwnoOnqAbJtynwPr2ixlAPhE6BXmitHKmwije65ft5iTZ8MjffQmxclY0PCjkbepKuPJCehsURbhTnupisFSawqacO28WDWB8mrUTYWPY6gOXv8cJZSuGOmnBeuKSE%2F4IWv%2BdZQdVS9no2yKDf%2BlVg80y0W6bawVl3%2BICyJsu7o3D0d4ixjBkzaKmCdZsIVKq97Q0BPdtBKhWkUKvSxwhAUNXRTykowqriDvwY6pgFoByEuNomrjxxc3t%2FnICNQuV03Y6mzAOQpI6%2Fr0%2Fj8ineqmYVSw2OvPzksrbX5LLjhTPag6gTWM5ziOoLEnuGAnb0tCDUImaBg%2BFtnb7cwM86oz3DPQ8H88691E2Cirj7W0zLCQ3iygW6%2BcsJlYhH%2FrX2O6s%2FR6MSrUT4rGKi5oBvs4qtkJREuWp8XG65ZcABU9ZV7wxQseUPpDs7a5S6naF9bMQun&X-Amz-Signature=0dc5e7b3d5f6a62a0c3132dcfa403cc1eb0800fc8fa81581900bcdad75c50a22&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MH5VGSX%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T050906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FF7hPDjFU6jbmWrzAYjPYhsh9xyRRTouYJl%2FmcPDgrAiBAsiigjGcdK8lg1Bd0HlCF06EWNBaW226Kyqc%2FyFNO%2FCqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBr%2FrG0dszBy6BervKtwDLdTFpdJlO84PvwzxzxeED%2B1cA2jrxfiZ%2FcQow5mYyxs8Zeep9cfpgvJelQNvXvs%2B226NY3rpp%2FLSeYfUBxsW013b9AOZh0ctmp8nsFLw7wF%2FIHgXohrui6TFJDKzYdpmVg404%2FHj6XMaHstc2tu9eqi%2FdQ1sAoGx%2BcDS%2FyEfpoI0gDxhs65aA8wUgvT5yDM1xtMKbrxtKRC2WneZw156RNeff59lwXiKEf2KB1KVhsN0T0CdpH0ErikhH8huDygP1HBFEo7enEM6eWVAmUHlUiTB4wzvsfVXBV3nyH3BR%2B%2B1myrlv6GdAm8AeXioc3%2B0cGFoKpbFIYJxlyk5Ro2Z8unb1B12t%2FiuYfIXZdXiBybvU33cJyeYuvGY8NlwDTvjKGMbPEoavWVlcmjw48gWyDEtwHPUZIwnoOnqAbJtynwPr2ixlAPhE6BXmitHKmwije65ft5iTZ8MjffQmxclY0PCjkbepKuPJCehsURbhTnupisFSawqacO28WDWB8mrUTYWPY6gOXv8cJZSuGOmnBeuKSE%2F4IWv%2BdZQdVS9no2yKDf%2BlVg80y0W6bawVl3%2BICyJsu7o3D0d4ixjBkzaKmCdZsIVKq97Q0BPdtBKhWkUKvSxwhAUNXRTykowqriDvwY6pgFoByEuNomrjxxc3t%2FnICNQuV03Y6mzAOQpI6%2Fr0%2Fj8ineqmYVSw2OvPzksrbX5LLjhTPag6gTWM5ziOoLEnuGAnb0tCDUImaBg%2BFtnb7cwM86oz3DPQ8H88691E2Cirj7W0zLCQ3iygW6%2BcsJlYhH%2FrX2O6s%2FR6MSrUT4rGKi5oBvs4qtkJREuWp8XG65ZcABU9ZV7wxQseUPpDs7a5S6naF9bMQun&X-Amz-Signature=969dcddb205c3c9f8615b8ee0fe591a23b0fdaf50b642ac6771f37cb29e38934&X-Amz-SignedHeaders=host&x-id=GetObject)
