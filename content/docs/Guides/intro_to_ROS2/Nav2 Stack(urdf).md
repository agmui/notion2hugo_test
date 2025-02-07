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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466675M7UX6%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIEqC73Pp1TA2uCQfxrUZNhq1HbqJhl2Gmh36Hirb8%2Fi7AiEA3jqXE3Fbki0Lx7ImvkPs3vEQZs0f4D7yxo0YsdRyEcgq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDBqhLDZWqUGyAcHiYircAyLLVGv5XI%2BLaM6J4dg1OyZFdL44KdYjH5MOhANLLZ0k1QlmEbhdfP8hKo3LiwCElIEA0FRFOai9NV7aYwRCkJyZNxIn8gZqOGQR4TLiG%2B6hIH43FLP6KRRM9%2FA3KU8%2FmMqL7j1DhwvjSQoBXhLl8NAxOGZnUd3nllnMoqbAdD5F%2B1F97jdzFAhfvs7sQLqz2ydSQa5nGFZbhPOSQWOUIbAKN7XgE7pgg6Us7u3jV53vKjse2SuyaP2dcFOoRzKOi5mjTkD6VMGsATP9rkC5vGTEywhCDpuhUmfU4rmDDgBn0mcEdmm%2FeG8F40Vhwz%2BMQADVVa9tK68WZtuedvu8qLQgPp%2Fq59NDSI%2F28%2Bm2W5HyyuB4ujxzfYVA5IfkvLObuH9z5Qq3RRox0f8XFQeFP2Bihw2sJmLMjSFqAy5PqWQYsLKTNcps0QVbzuxFYN3SkNvOTicr%2BZLQasWPN51uJWWP8mt5qvoqURMXUmST2FNyk2Qgb%2BcuT27B9lKK5tCRmYudBryDSxN6rKzsu2QWQOd7KIQEXSsZt9nmyfsULiCKScsFhV8UgFRhNux0QGJqrOa42RhNCByOB3INp3IOg2X%2FbgTwwDR1GNi0q1VHkRxEl63sOIhNwI%2FigIFZMPvdlr0GOqUBjUZN19MqeIQYRAguS322ljiggf5py89f3zLR%2BFxVFZbKF%2F5UBDPslkW2JifDMFpg4Q%2B%2F9qFO6woXaWJn9RUaMFqk95YsXXpyDV5emdi6dHh4VpBbUxAHoZYjViOwwlAgKf3hcC%2B2%2Bn7kmy5PccDiqFhuNm1S4k%2FBDcSNjI8OBUbDYogcgErCi61gEP7rw1GdpzPAWci5eDyCSyLOE2OsW3n1mCie&X-Amz-Signature=132095e1b066151ed5c3ba5c307c8e7b0e9d4f7fe12531e75e48f1b7ca0ecff8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466675M7UX6%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIEqC73Pp1TA2uCQfxrUZNhq1HbqJhl2Gmh36Hirb8%2Fi7AiEA3jqXE3Fbki0Lx7ImvkPs3vEQZs0f4D7yxo0YsdRyEcgq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDBqhLDZWqUGyAcHiYircAyLLVGv5XI%2BLaM6J4dg1OyZFdL44KdYjH5MOhANLLZ0k1QlmEbhdfP8hKo3LiwCElIEA0FRFOai9NV7aYwRCkJyZNxIn8gZqOGQR4TLiG%2B6hIH43FLP6KRRM9%2FA3KU8%2FmMqL7j1DhwvjSQoBXhLl8NAxOGZnUd3nllnMoqbAdD5F%2B1F97jdzFAhfvs7sQLqz2ydSQa5nGFZbhPOSQWOUIbAKN7XgE7pgg6Us7u3jV53vKjse2SuyaP2dcFOoRzKOi5mjTkD6VMGsATP9rkC5vGTEywhCDpuhUmfU4rmDDgBn0mcEdmm%2FeG8F40Vhwz%2BMQADVVa9tK68WZtuedvu8qLQgPp%2Fq59NDSI%2F28%2Bm2W5HyyuB4ujxzfYVA5IfkvLObuH9z5Qq3RRox0f8XFQeFP2Bihw2sJmLMjSFqAy5PqWQYsLKTNcps0QVbzuxFYN3SkNvOTicr%2BZLQasWPN51uJWWP8mt5qvoqURMXUmST2FNyk2Qgb%2BcuT27B9lKK5tCRmYudBryDSxN6rKzsu2QWQOd7KIQEXSsZt9nmyfsULiCKScsFhV8UgFRhNux0QGJqrOa42RhNCByOB3INp3IOg2X%2FbgTwwDR1GNi0q1VHkRxEl63sOIhNwI%2FigIFZMPvdlr0GOqUBjUZN19MqeIQYRAguS322ljiggf5py89f3zLR%2BFxVFZbKF%2F5UBDPslkW2JifDMFpg4Q%2B%2F9qFO6woXaWJn9RUaMFqk95YsXXpyDV5emdi6dHh4VpBbUxAHoZYjViOwwlAgKf3hcC%2B2%2Bn7kmy5PccDiqFhuNm1S4k%2FBDcSNjI8OBUbDYogcgErCi61gEP7rw1GdpzPAWci5eDyCSyLOE2OsW3n1mCie&X-Amz-Signature=b083c6cccb73b451af5ca272c7c8863b3ebd020154d28d956db3331f389c3e8b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466675M7UX6%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIEqC73Pp1TA2uCQfxrUZNhq1HbqJhl2Gmh36Hirb8%2Fi7AiEA3jqXE3Fbki0Lx7ImvkPs3vEQZs0f4D7yxo0YsdRyEcgq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDBqhLDZWqUGyAcHiYircAyLLVGv5XI%2BLaM6J4dg1OyZFdL44KdYjH5MOhANLLZ0k1QlmEbhdfP8hKo3LiwCElIEA0FRFOai9NV7aYwRCkJyZNxIn8gZqOGQR4TLiG%2B6hIH43FLP6KRRM9%2FA3KU8%2FmMqL7j1DhwvjSQoBXhLl8NAxOGZnUd3nllnMoqbAdD5F%2B1F97jdzFAhfvs7sQLqz2ydSQa5nGFZbhPOSQWOUIbAKN7XgE7pgg6Us7u3jV53vKjse2SuyaP2dcFOoRzKOi5mjTkD6VMGsATP9rkC5vGTEywhCDpuhUmfU4rmDDgBn0mcEdmm%2FeG8F40Vhwz%2BMQADVVa9tK68WZtuedvu8qLQgPp%2Fq59NDSI%2F28%2Bm2W5HyyuB4ujxzfYVA5IfkvLObuH9z5Qq3RRox0f8XFQeFP2Bihw2sJmLMjSFqAy5PqWQYsLKTNcps0QVbzuxFYN3SkNvOTicr%2BZLQasWPN51uJWWP8mt5qvoqURMXUmST2FNyk2Qgb%2BcuT27B9lKK5tCRmYudBryDSxN6rKzsu2QWQOd7KIQEXSsZt9nmyfsULiCKScsFhV8UgFRhNux0QGJqrOa42RhNCByOB3INp3IOg2X%2FbgTwwDR1GNi0q1VHkRxEl63sOIhNwI%2FigIFZMPvdlr0GOqUBjUZN19MqeIQYRAguS322ljiggf5py89f3zLR%2BFxVFZbKF%2F5UBDPslkW2JifDMFpg4Q%2B%2F9qFO6woXaWJn9RUaMFqk95YsXXpyDV5emdi6dHh4VpBbUxAHoZYjViOwwlAgKf3hcC%2B2%2Bn7kmy5PccDiqFhuNm1S4k%2FBDcSNjI8OBUbDYogcgErCi61gEP7rw1GdpzPAWci5eDyCSyLOE2OsW3n1mCie&X-Amz-Signature=049c9c77ac94d8f31bdfd8e592cc180032ed6418301b87070909c0c282da7340&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466675M7UX6%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIEqC73Pp1TA2uCQfxrUZNhq1HbqJhl2Gmh36Hirb8%2Fi7AiEA3jqXE3Fbki0Lx7ImvkPs3vEQZs0f4D7yxo0YsdRyEcgq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDBqhLDZWqUGyAcHiYircAyLLVGv5XI%2BLaM6J4dg1OyZFdL44KdYjH5MOhANLLZ0k1QlmEbhdfP8hKo3LiwCElIEA0FRFOai9NV7aYwRCkJyZNxIn8gZqOGQR4TLiG%2B6hIH43FLP6KRRM9%2FA3KU8%2FmMqL7j1DhwvjSQoBXhLl8NAxOGZnUd3nllnMoqbAdD5F%2B1F97jdzFAhfvs7sQLqz2ydSQa5nGFZbhPOSQWOUIbAKN7XgE7pgg6Us7u3jV53vKjse2SuyaP2dcFOoRzKOi5mjTkD6VMGsATP9rkC5vGTEywhCDpuhUmfU4rmDDgBn0mcEdmm%2FeG8F40Vhwz%2BMQADVVa9tK68WZtuedvu8qLQgPp%2Fq59NDSI%2F28%2Bm2W5HyyuB4ujxzfYVA5IfkvLObuH9z5Qq3RRox0f8XFQeFP2Bihw2sJmLMjSFqAy5PqWQYsLKTNcps0QVbzuxFYN3SkNvOTicr%2BZLQasWPN51uJWWP8mt5qvoqURMXUmST2FNyk2Qgb%2BcuT27B9lKK5tCRmYudBryDSxN6rKzsu2QWQOd7KIQEXSsZt9nmyfsULiCKScsFhV8UgFRhNux0QGJqrOa42RhNCByOB3INp3IOg2X%2FbgTwwDR1GNi0q1VHkRxEl63sOIhNwI%2FigIFZMPvdlr0GOqUBjUZN19MqeIQYRAguS322ljiggf5py89f3zLR%2BFxVFZbKF%2F5UBDPslkW2JifDMFpg4Q%2B%2F9qFO6woXaWJn9RUaMFqk95YsXXpyDV5emdi6dHh4VpBbUxAHoZYjViOwwlAgKf3hcC%2B2%2Bn7kmy5PccDiqFhuNm1S4k%2FBDcSNjI8OBUbDYogcgErCi61gEP7rw1GdpzPAWci5eDyCSyLOE2OsW3n1mCie&X-Amz-Signature=5c164aecfb190c8a28de57f6493d6d66b9516f56b88007429706b4ab32bd3ec6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466675M7UX6%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIEqC73Pp1TA2uCQfxrUZNhq1HbqJhl2Gmh36Hirb8%2Fi7AiEA3jqXE3Fbki0Lx7ImvkPs3vEQZs0f4D7yxo0YsdRyEcgq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDBqhLDZWqUGyAcHiYircAyLLVGv5XI%2BLaM6J4dg1OyZFdL44KdYjH5MOhANLLZ0k1QlmEbhdfP8hKo3LiwCElIEA0FRFOai9NV7aYwRCkJyZNxIn8gZqOGQR4TLiG%2B6hIH43FLP6KRRM9%2FA3KU8%2FmMqL7j1DhwvjSQoBXhLl8NAxOGZnUd3nllnMoqbAdD5F%2B1F97jdzFAhfvs7sQLqz2ydSQa5nGFZbhPOSQWOUIbAKN7XgE7pgg6Us7u3jV53vKjse2SuyaP2dcFOoRzKOi5mjTkD6VMGsATP9rkC5vGTEywhCDpuhUmfU4rmDDgBn0mcEdmm%2FeG8F40Vhwz%2BMQADVVa9tK68WZtuedvu8qLQgPp%2Fq59NDSI%2F28%2Bm2W5HyyuB4ujxzfYVA5IfkvLObuH9z5Qq3RRox0f8XFQeFP2Bihw2sJmLMjSFqAy5PqWQYsLKTNcps0QVbzuxFYN3SkNvOTicr%2BZLQasWPN51uJWWP8mt5qvoqURMXUmST2FNyk2Qgb%2BcuT27B9lKK5tCRmYudBryDSxN6rKzsu2QWQOd7KIQEXSsZt9nmyfsULiCKScsFhV8UgFRhNux0QGJqrOa42RhNCByOB3INp3IOg2X%2FbgTwwDR1GNi0q1VHkRxEl63sOIhNwI%2FigIFZMPvdlr0GOqUBjUZN19MqeIQYRAguS322ljiggf5py89f3zLR%2BFxVFZbKF%2F5UBDPslkW2JifDMFpg4Q%2B%2F9qFO6woXaWJn9RUaMFqk95YsXXpyDV5emdi6dHh4VpBbUxAHoZYjViOwwlAgKf3hcC%2B2%2Bn7kmy5PccDiqFhuNm1S4k%2FBDcSNjI8OBUbDYogcgErCi61gEP7rw1GdpzPAWci5eDyCSyLOE2OsW3n1mCie&X-Amz-Signature=f2f94bdc37fcf20ce9f0b22eaed0a57d25ece3877a3eda230bb1ad3b541c5c2c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466675M7UX6%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIEqC73Pp1TA2uCQfxrUZNhq1HbqJhl2Gmh36Hirb8%2Fi7AiEA3jqXE3Fbki0Lx7ImvkPs3vEQZs0f4D7yxo0YsdRyEcgq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDBqhLDZWqUGyAcHiYircAyLLVGv5XI%2BLaM6J4dg1OyZFdL44KdYjH5MOhANLLZ0k1QlmEbhdfP8hKo3LiwCElIEA0FRFOai9NV7aYwRCkJyZNxIn8gZqOGQR4TLiG%2B6hIH43FLP6KRRM9%2FA3KU8%2FmMqL7j1DhwvjSQoBXhLl8NAxOGZnUd3nllnMoqbAdD5F%2B1F97jdzFAhfvs7sQLqz2ydSQa5nGFZbhPOSQWOUIbAKN7XgE7pgg6Us7u3jV53vKjse2SuyaP2dcFOoRzKOi5mjTkD6VMGsATP9rkC5vGTEywhCDpuhUmfU4rmDDgBn0mcEdmm%2FeG8F40Vhwz%2BMQADVVa9tK68WZtuedvu8qLQgPp%2Fq59NDSI%2F28%2Bm2W5HyyuB4ujxzfYVA5IfkvLObuH9z5Qq3RRox0f8XFQeFP2Bihw2sJmLMjSFqAy5PqWQYsLKTNcps0QVbzuxFYN3SkNvOTicr%2BZLQasWPN51uJWWP8mt5qvoqURMXUmST2FNyk2Qgb%2BcuT27B9lKK5tCRmYudBryDSxN6rKzsu2QWQOd7KIQEXSsZt9nmyfsULiCKScsFhV8UgFRhNux0QGJqrOa42RhNCByOB3INp3IOg2X%2FbgTwwDR1GNi0q1VHkRxEl63sOIhNwI%2FigIFZMPvdlr0GOqUBjUZN19MqeIQYRAguS322ljiggf5py89f3zLR%2BFxVFZbKF%2F5UBDPslkW2JifDMFpg4Q%2B%2F9qFO6woXaWJn9RUaMFqk95YsXXpyDV5emdi6dHh4VpBbUxAHoZYjViOwwlAgKf3hcC%2B2%2Bn7kmy5PccDiqFhuNm1S4k%2FBDcSNjI8OBUbDYogcgErCi61gEP7rw1GdpzPAWci5eDyCSyLOE2OsW3n1mCie&X-Amz-Signature=819311db2d6ead6d0cadaacc53e7222a9df5f4ddfdcfadcc64820d22d358629d&X-Amz-SignedHeaders=host&x-id=GetObject)
