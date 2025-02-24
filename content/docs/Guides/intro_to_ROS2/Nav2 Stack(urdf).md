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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U6ESVRW%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T140800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCP3CNfj59nrAYN05%2F9FoVvIIGXRrKTG93%2Fd39bHFLFzQIgMzsVJlBy0f1hyUavdajzB3W%2FwYmXdmYQlP81vNlW4hEq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDNL9xoNA4lCegz5XcircA8iPfPd%2FpWl6o7%2FHCaywSdv1L8x%2Bl65NVoFr7MwzWFlYD5XKIbs377Hy%2BLETIRHKcZF3BCnL3g9r%2Fj0zqWKuqXjmHfbWOoDc3BKIylnTbiW%2F4wUP8NiGQKg7IPKdEMV3mx135Vofj%2FtFNIgWKHiU2krjjyw3FuMA9NVnNsvk1UQ%2BQgkZSIZO0cX7aruk9ND2nSmSWmJ5iu8K9U1JQF15agqsU9xF7sSX9x8SKcRV8YVs%2Fn93hqVEUvNTqGoQXUAQWiULPOOnzh3%2FLFLkA%2BBdG40XGpUpo6BqX%2B4fgS0lkOtbdJIYOCdwzWDX5mPlGcatnT7jdw3PTSbyVkZ5sSRbrLGF9E1faZdYP03H9EDcgIgRUZp9nOBB8H9HGMahyjwBJg3S3TCb%2FyOVAgo1%2FSMrLdMKolwD2sMbghKWEPvDikoKiRXeCNMcUsrVKV%2BFlD%2FTyC5Ul7vgp6l%2B8pTzzz8QU3wDw%2FSoqP%2BsmzgAZJt68v26%2FidaBs6MX5JBwG%2BLVB5BZfaO78kvicdOHo8prMmhrha6c%2F461zhtQuEx2xn88FX5AxPBev%2BYFQfju5TmzQ0wZmmPyed1BxZfzOtD1RJviZlsIaZ7cS1xNXh2maidZrSZH0LP4TSQZh6CloEIMITX8b0GOqUBtDrmPtr3vAt78rwcNwuSmJiK3z5xAIOaQPhsRSMCLyUouktSGnfX46rJX3hrxvs9HpGioz1k4%2Bh%2F14LI4VP5DRwFQwjJEa0NBS2mlFXVxa8Wvm4rICtP4ns8lhr7BZZQfnc3N4iXomwOcY%2FiyEBca2U%2BlBE9GJUanYLcWS27r8D3d4US2temXQnuNp142UBTs%2BJSY4B9Xdb9c8Y5aVlHv82RrnmZ&X-Amz-Signature=c80b69389e58b18232966c3514988531fc40fbb539bc0101ae2494bc7dac2fea&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U6ESVRW%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T140800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCP3CNfj59nrAYN05%2F9FoVvIIGXRrKTG93%2Fd39bHFLFzQIgMzsVJlBy0f1hyUavdajzB3W%2FwYmXdmYQlP81vNlW4hEq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDNL9xoNA4lCegz5XcircA8iPfPd%2FpWl6o7%2FHCaywSdv1L8x%2Bl65NVoFr7MwzWFlYD5XKIbs377Hy%2BLETIRHKcZF3BCnL3g9r%2Fj0zqWKuqXjmHfbWOoDc3BKIylnTbiW%2F4wUP8NiGQKg7IPKdEMV3mx135Vofj%2FtFNIgWKHiU2krjjyw3FuMA9NVnNsvk1UQ%2BQgkZSIZO0cX7aruk9ND2nSmSWmJ5iu8K9U1JQF15agqsU9xF7sSX9x8SKcRV8YVs%2Fn93hqVEUvNTqGoQXUAQWiULPOOnzh3%2FLFLkA%2BBdG40XGpUpo6BqX%2B4fgS0lkOtbdJIYOCdwzWDX5mPlGcatnT7jdw3PTSbyVkZ5sSRbrLGF9E1faZdYP03H9EDcgIgRUZp9nOBB8H9HGMahyjwBJg3S3TCb%2FyOVAgo1%2FSMrLdMKolwD2sMbghKWEPvDikoKiRXeCNMcUsrVKV%2BFlD%2FTyC5Ul7vgp6l%2B8pTzzz8QU3wDw%2FSoqP%2BsmzgAZJt68v26%2FidaBs6MX5JBwG%2BLVB5BZfaO78kvicdOHo8prMmhrha6c%2F461zhtQuEx2xn88FX5AxPBev%2BYFQfju5TmzQ0wZmmPyed1BxZfzOtD1RJviZlsIaZ7cS1xNXh2maidZrSZH0LP4TSQZh6CloEIMITX8b0GOqUBtDrmPtr3vAt78rwcNwuSmJiK3z5xAIOaQPhsRSMCLyUouktSGnfX46rJX3hrxvs9HpGioz1k4%2Bh%2F14LI4VP5DRwFQwjJEa0NBS2mlFXVxa8Wvm4rICtP4ns8lhr7BZZQfnc3N4iXomwOcY%2FiyEBca2U%2BlBE9GJUanYLcWS27r8D3d4US2temXQnuNp142UBTs%2BJSY4B9Xdb9c8Y5aVlHv82RrnmZ&X-Amz-Signature=997798bc430a630091d466b3613c044efe52b5cb56eb111084225d019de652fa&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U6ESVRW%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T140800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCP3CNfj59nrAYN05%2F9FoVvIIGXRrKTG93%2Fd39bHFLFzQIgMzsVJlBy0f1hyUavdajzB3W%2FwYmXdmYQlP81vNlW4hEq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDNL9xoNA4lCegz5XcircA8iPfPd%2FpWl6o7%2FHCaywSdv1L8x%2Bl65NVoFr7MwzWFlYD5XKIbs377Hy%2BLETIRHKcZF3BCnL3g9r%2Fj0zqWKuqXjmHfbWOoDc3BKIylnTbiW%2F4wUP8NiGQKg7IPKdEMV3mx135Vofj%2FtFNIgWKHiU2krjjyw3FuMA9NVnNsvk1UQ%2BQgkZSIZO0cX7aruk9ND2nSmSWmJ5iu8K9U1JQF15agqsU9xF7sSX9x8SKcRV8YVs%2Fn93hqVEUvNTqGoQXUAQWiULPOOnzh3%2FLFLkA%2BBdG40XGpUpo6BqX%2B4fgS0lkOtbdJIYOCdwzWDX5mPlGcatnT7jdw3PTSbyVkZ5sSRbrLGF9E1faZdYP03H9EDcgIgRUZp9nOBB8H9HGMahyjwBJg3S3TCb%2FyOVAgo1%2FSMrLdMKolwD2sMbghKWEPvDikoKiRXeCNMcUsrVKV%2BFlD%2FTyC5Ul7vgp6l%2B8pTzzz8QU3wDw%2FSoqP%2BsmzgAZJt68v26%2FidaBs6MX5JBwG%2BLVB5BZfaO78kvicdOHo8prMmhrha6c%2F461zhtQuEx2xn88FX5AxPBev%2BYFQfju5TmzQ0wZmmPyed1BxZfzOtD1RJviZlsIaZ7cS1xNXh2maidZrSZH0LP4TSQZh6CloEIMITX8b0GOqUBtDrmPtr3vAt78rwcNwuSmJiK3z5xAIOaQPhsRSMCLyUouktSGnfX46rJX3hrxvs9HpGioz1k4%2Bh%2F14LI4VP5DRwFQwjJEa0NBS2mlFXVxa8Wvm4rICtP4ns8lhr7BZZQfnc3N4iXomwOcY%2FiyEBca2U%2BlBE9GJUanYLcWS27r8D3d4US2temXQnuNp142UBTs%2BJSY4B9Xdb9c8Y5aVlHv82RrnmZ&X-Amz-Signature=2244e04b13e0a8f1455ea77e2b8060a7765b63f3887ce9749bf67f50006fea8c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U6ESVRW%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T140800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCP3CNfj59nrAYN05%2F9FoVvIIGXRrKTG93%2Fd39bHFLFzQIgMzsVJlBy0f1hyUavdajzB3W%2FwYmXdmYQlP81vNlW4hEq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDNL9xoNA4lCegz5XcircA8iPfPd%2FpWl6o7%2FHCaywSdv1L8x%2Bl65NVoFr7MwzWFlYD5XKIbs377Hy%2BLETIRHKcZF3BCnL3g9r%2Fj0zqWKuqXjmHfbWOoDc3BKIylnTbiW%2F4wUP8NiGQKg7IPKdEMV3mx135Vofj%2FtFNIgWKHiU2krjjyw3FuMA9NVnNsvk1UQ%2BQgkZSIZO0cX7aruk9ND2nSmSWmJ5iu8K9U1JQF15agqsU9xF7sSX9x8SKcRV8YVs%2Fn93hqVEUvNTqGoQXUAQWiULPOOnzh3%2FLFLkA%2BBdG40XGpUpo6BqX%2B4fgS0lkOtbdJIYOCdwzWDX5mPlGcatnT7jdw3PTSbyVkZ5sSRbrLGF9E1faZdYP03H9EDcgIgRUZp9nOBB8H9HGMahyjwBJg3S3TCb%2FyOVAgo1%2FSMrLdMKolwD2sMbghKWEPvDikoKiRXeCNMcUsrVKV%2BFlD%2FTyC5Ul7vgp6l%2B8pTzzz8QU3wDw%2FSoqP%2BsmzgAZJt68v26%2FidaBs6MX5JBwG%2BLVB5BZfaO78kvicdOHo8prMmhrha6c%2F461zhtQuEx2xn88FX5AxPBev%2BYFQfju5TmzQ0wZmmPyed1BxZfzOtD1RJviZlsIaZ7cS1xNXh2maidZrSZH0LP4TSQZh6CloEIMITX8b0GOqUBtDrmPtr3vAt78rwcNwuSmJiK3z5xAIOaQPhsRSMCLyUouktSGnfX46rJX3hrxvs9HpGioz1k4%2Bh%2F14LI4VP5DRwFQwjJEa0NBS2mlFXVxa8Wvm4rICtP4ns8lhr7BZZQfnc3N4iXomwOcY%2FiyEBca2U%2BlBE9GJUanYLcWS27r8D3d4US2temXQnuNp142UBTs%2BJSY4B9Xdb9c8Y5aVlHv82RrnmZ&X-Amz-Signature=ae33e75af3dcc87b9e817050ab6016d33dac7affa7625c9b3519262668887bea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U6ESVRW%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T140800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCP3CNfj59nrAYN05%2F9FoVvIIGXRrKTG93%2Fd39bHFLFzQIgMzsVJlBy0f1hyUavdajzB3W%2FwYmXdmYQlP81vNlW4hEq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDNL9xoNA4lCegz5XcircA8iPfPd%2FpWl6o7%2FHCaywSdv1L8x%2Bl65NVoFr7MwzWFlYD5XKIbs377Hy%2BLETIRHKcZF3BCnL3g9r%2Fj0zqWKuqXjmHfbWOoDc3BKIylnTbiW%2F4wUP8NiGQKg7IPKdEMV3mx135Vofj%2FtFNIgWKHiU2krjjyw3FuMA9NVnNsvk1UQ%2BQgkZSIZO0cX7aruk9ND2nSmSWmJ5iu8K9U1JQF15agqsU9xF7sSX9x8SKcRV8YVs%2Fn93hqVEUvNTqGoQXUAQWiULPOOnzh3%2FLFLkA%2BBdG40XGpUpo6BqX%2B4fgS0lkOtbdJIYOCdwzWDX5mPlGcatnT7jdw3PTSbyVkZ5sSRbrLGF9E1faZdYP03H9EDcgIgRUZp9nOBB8H9HGMahyjwBJg3S3TCb%2FyOVAgo1%2FSMrLdMKolwD2sMbghKWEPvDikoKiRXeCNMcUsrVKV%2BFlD%2FTyC5Ul7vgp6l%2B8pTzzz8QU3wDw%2FSoqP%2BsmzgAZJt68v26%2FidaBs6MX5JBwG%2BLVB5BZfaO78kvicdOHo8prMmhrha6c%2F461zhtQuEx2xn88FX5AxPBev%2BYFQfju5TmzQ0wZmmPyed1BxZfzOtD1RJviZlsIaZ7cS1xNXh2maidZrSZH0LP4TSQZh6CloEIMITX8b0GOqUBtDrmPtr3vAt78rwcNwuSmJiK3z5xAIOaQPhsRSMCLyUouktSGnfX46rJX3hrxvs9HpGioz1k4%2Bh%2F14LI4VP5DRwFQwjJEa0NBS2mlFXVxa8Wvm4rICtP4ns8lhr7BZZQfnc3N4iXomwOcY%2FiyEBca2U%2BlBE9GJUanYLcWS27r8D3d4US2temXQnuNp142UBTs%2BJSY4B9Xdb9c8Y5aVlHv82RrnmZ&X-Amz-Signature=80eefb4b0152c1c1f5a82c421991a919effc910bde71bf292b0a6e5d32e85ea5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U6ESVRW%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T140800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCP3CNfj59nrAYN05%2F9FoVvIIGXRrKTG93%2Fd39bHFLFzQIgMzsVJlBy0f1hyUavdajzB3W%2FwYmXdmYQlP81vNlW4hEq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDNL9xoNA4lCegz5XcircA8iPfPd%2FpWl6o7%2FHCaywSdv1L8x%2Bl65NVoFr7MwzWFlYD5XKIbs377Hy%2BLETIRHKcZF3BCnL3g9r%2Fj0zqWKuqXjmHfbWOoDc3BKIylnTbiW%2F4wUP8NiGQKg7IPKdEMV3mx135Vofj%2FtFNIgWKHiU2krjjyw3FuMA9NVnNsvk1UQ%2BQgkZSIZO0cX7aruk9ND2nSmSWmJ5iu8K9U1JQF15agqsU9xF7sSX9x8SKcRV8YVs%2Fn93hqVEUvNTqGoQXUAQWiULPOOnzh3%2FLFLkA%2BBdG40XGpUpo6BqX%2B4fgS0lkOtbdJIYOCdwzWDX5mPlGcatnT7jdw3PTSbyVkZ5sSRbrLGF9E1faZdYP03H9EDcgIgRUZp9nOBB8H9HGMahyjwBJg3S3TCb%2FyOVAgo1%2FSMrLdMKolwD2sMbghKWEPvDikoKiRXeCNMcUsrVKV%2BFlD%2FTyC5Ul7vgp6l%2B8pTzzz8QU3wDw%2FSoqP%2BsmzgAZJt68v26%2FidaBs6MX5JBwG%2BLVB5BZfaO78kvicdOHo8prMmhrha6c%2F461zhtQuEx2xn88FX5AxPBev%2BYFQfju5TmzQ0wZmmPyed1BxZfzOtD1RJviZlsIaZ7cS1xNXh2maidZrSZH0LP4TSQZh6CloEIMITX8b0GOqUBtDrmPtr3vAt78rwcNwuSmJiK3z5xAIOaQPhsRSMCLyUouktSGnfX46rJX3hrxvs9HpGioz1k4%2Bh%2F14LI4VP5DRwFQwjJEa0NBS2mlFXVxa8Wvm4rICtP4ns8lhr7BZZQfnc3N4iXomwOcY%2FiyEBca2U%2BlBE9GJUanYLcWS27r8D3d4US2temXQnuNp142UBTs%2BJSY4B9Xdb9c8Y5aVlHv82RrnmZ&X-Amz-Signature=c63aa690d6d6f11aa4a1475f210f34ca6320f01958aae16e1434e175b731b6c5&X-Amz-SignedHeaders=host&x-id=GetObject)
