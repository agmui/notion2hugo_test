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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS2K5DWL%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T131610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDWAAVTjwTjYD4csmUa8j12QCJAFKq%2BcHylZmoqjPchPwIgbU0ozs9fkooq8yrmoGnlGKtEDWEGWvieHbz9RComASoqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGcF9d4ja%2FDVmoI%2ByCrcA4t339hjKtiCDqr0e%2FlnprZsu1grKfvCVTqKjqlcunrxwo4MuJKQL%2Fo%2BNeS5giPKNtXh5UDh4LygkYqWc5xfj2R8RXkHm%2BrZqO6O9Dqzp8USR87qZ9sVeFIX37wVPPEIDz8Ywp%2Fa3vG6QCpu96khkkQZltnrVG9WbSJhMcSwjGrZD%2BvKwaYANmW0r2kYUoBXawHyvX%2F%2FNb8xgXo6zdW3F6T2B9MRbKzHbWheyROpUsxv030R%2BSAApB3TKxkgOCQtuzRaVKF90dSJvvGMmV8AoPdsuGNygNxYYpDGARhc7PE4Et8QkWjIc636yQkKLVAU9f2cUyJan1LK0p09cBEhBq0%2Bm7pl1PA9Ql%2FAgqw0l1IHQs2ZFgbEHLVC6scY0Wv%2FH2sY6Po5aB61OrhrKQUFxEOwh9KIujwQy6tBshL7FU8WcNubMrGOvwwEFasTF8U7PslveUlcpUoHxvGNUrR7iSfndnqHUx7Mq9w%2BbU2SLJY4dC4dTe6NH3rIFqWkBE%2BcRCG7DG3i6ccoyEQjMF84dYprRJ1bQXpED9dOeJXnalhd1G16zd0OM2PfWuOgCDRisImJ1M%2BfIuEODo8yZApGx4MsQdWQQ6cm%2B4omBCnojFL4SaCXV18nADR%2Btr4vMITRhr4GOqUBUHkD5ttU96is72Y2J1yrw0p0PzaKyfKZ%2FQDvJ%2F2ubJnP2tJ1IzswSJMeYWT5qEh8kyWMsn8E6jSLEykQw0Ns4nH%2BQoafUVTcR2kne66infXX%2FxowJvMBLSar%2BqbuczWX%2FCESDcTJw2fpJTv2TXqodHEycEZ4T4uq7%2FcestK%2FGnM4eCJOeiVYHgnVDeSij%2BuOjLZAYHoMBop9EZyaL2O2moxRv%2BcK&X-Amz-Signature=1a060d498ea6407ec243ff877a8e9c61ea9dcd5c736ab244b8b17a066ff226c0&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS2K5DWL%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T131610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDWAAVTjwTjYD4csmUa8j12QCJAFKq%2BcHylZmoqjPchPwIgbU0ozs9fkooq8yrmoGnlGKtEDWEGWvieHbz9RComASoqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGcF9d4ja%2FDVmoI%2ByCrcA4t339hjKtiCDqr0e%2FlnprZsu1grKfvCVTqKjqlcunrxwo4MuJKQL%2Fo%2BNeS5giPKNtXh5UDh4LygkYqWc5xfj2R8RXkHm%2BrZqO6O9Dqzp8USR87qZ9sVeFIX37wVPPEIDz8Ywp%2Fa3vG6QCpu96khkkQZltnrVG9WbSJhMcSwjGrZD%2BvKwaYANmW0r2kYUoBXawHyvX%2F%2FNb8xgXo6zdW3F6T2B9MRbKzHbWheyROpUsxv030R%2BSAApB3TKxkgOCQtuzRaVKF90dSJvvGMmV8AoPdsuGNygNxYYpDGARhc7PE4Et8QkWjIc636yQkKLVAU9f2cUyJan1LK0p09cBEhBq0%2Bm7pl1PA9Ql%2FAgqw0l1IHQs2ZFgbEHLVC6scY0Wv%2FH2sY6Po5aB61OrhrKQUFxEOwh9KIujwQy6tBshL7FU8WcNubMrGOvwwEFasTF8U7PslveUlcpUoHxvGNUrR7iSfndnqHUx7Mq9w%2BbU2SLJY4dC4dTe6NH3rIFqWkBE%2BcRCG7DG3i6ccoyEQjMF84dYprRJ1bQXpED9dOeJXnalhd1G16zd0OM2PfWuOgCDRisImJ1M%2BfIuEODo8yZApGx4MsQdWQQ6cm%2B4omBCnojFL4SaCXV18nADR%2Btr4vMITRhr4GOqUBUHkD5ttU96is72Y2J1yrw0p0PzaKyfKZ%2FQDvJ%2F2ubJnP2tJ1IzswSJMeYWT5qEh8kyWMsn8E6jSLEykQw0Ns4nH%2BQoafUVTcR2kne66infXX%2FxowJvMBLSar%2BqbuczWX%2FCESDcTJw2fpJTv2TXqodHEycEZ4T4uq7%2FcestK%2FGnM4eCJOeiVYHgnVDeSij%2BuOjLZAYHoMBop9EZyaL2O2moxRv%2BcK&X-Amz-Signature=96a788c0f4ee8c3bae56e7ef8ad93462f1a7668323468f8194c9a9d84b725c49&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS2K5DWL%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T131610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDWAAVTjwTjYD4csmUa8j12QCJAFKq%2BcHylZmoqjPchPwIgbU0ozs9fkooq8yrmoGnlGKtEDWEGWvieHbz9RComASoqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGcF9d4ja%2FDVmoI%2ByCrcA4t339hjKtiCDqr0e%2FlnprZsu1grKfvCVTqKjqlcunrxwo4MuJKQL%2Fo%2BNeS5giPKNtXh5UDh4LygkYqWc5xfj2R8RXkHm%2BrZqO6O9Dqzp8USR87qZ9sVeFIX37wVPPEIDz8Ywp%2Fa3vG6QCpu96khkkQZltnrVG9WbSJhMcSwjGrZD%2BvKwaYANmW0r2kYUoBXawHyvX%2F%2FNb8xgXo6zdW3F6T2B9MRbKzHbWheyROpUsxv030R%2BSAApB3TKxkgOCQtuzRaVKF90dSJvvGMmV8AoPdsuGNygNxYYpDGARhc7PE4Et8QkWjIc636yQkKLVAU9f2cUyJan1LK0p09cBEhBq0%2Bm7pl1PA9Ql%2FAgqw0l1IHQs2ZFgbEHLVC6scY0Wv%2FH2sY6Po5aB61OrhrKQUFxEOwh9KIujwQy6tBshL7FU8WcNubMrGOvwwEFasTF8U7PslveUlcpUoHxvGNUrR7iSfndnqHUx7Mq9w%2BbU2SLJY4dC4dTe6NH3rIFqWkBE%2BcRCG7DG3i6ccoyEQjMF84dYprRJ1bQXpED9dOeJXnalhd1G16zd0OM2PfWuOgCDRisImJ1M%2BfIuEODo8yZApGx4MsQdWQQ6cm%2B4omBCnojFL4SaCXV18nADR%2Btr4vMITRhr4GOqUBUHkD5ttU96is72Y2J1yrw0p0PzaKyfKZ%2FQDvJ%2F2ubJnP2tJ1IzswSJMeYWT5qEh8kyWMsn8E6jSLEykQw0Ns4nH%2BQoafUVTcR2kne66infXX%2FxowJvMBLSar%2BqbuczWX%2FCESDcTJw2fpJTv2TXqodHEycEZ4T4uq7%2FcestK%2FGnM4eCJOeiVYHgnVDeSij%2BuOjLZAYHoMBop9EZyaL2O2moxRv%2BcK&X-Amz-Signature=9ba3299389e2e8cdb45280878a2ce603545b4ee38a146874c812df2af17d2839&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS2K5DWL%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T131610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDWAAVTjwTjYD4csmUa8j12QCJAFKq%2BcHylZmoqjPchPwIgbU0ozs9fkooq8yrmoGnlGKtEDWEGWvieHbz9RComASoqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGcF9d4ja%2FDVmoI%2ByCrcA4t339hjKtiCDqr0e%2FlnprZsu1grKfvCVTqKjqlcunrxwo4MuJKQL%2Fo%2BNeS5giPKNtXh5UDh4LygkYqWc5xfj2R8RXkHm%2BrZqO6O9Dqzp8USR87qZ9sVeFIX37wVPPEIDz8Ywp%2Fa3vG6QCpu96khkkQZltnrVG9WbSJhMcSwjGrZD%2BvKwaYANmW0r2kYUoBXawHyvX%2F%2FNb8xgXo6zdW3F6T2B9MRbKzHbWheyROpUsxv030R%2BSAApB3TKxkgOCQtuzRaVKF90dSJvvGMmV8AoPdsuGNygNxYYpDGARhc7PE4Et8QkWjIc636yQkKLVAU9f2cUyJan1LK0p09cBEhBq0%2Bm7pl1PA9Ql%2FAgqw0l1IHQs2ZFgbEHLVC6scY0Wv%2FH2sY6Po5aB61OrhrKQUFxEOwh9KIujwQy6tBshL7FU8WcNubMrGOvwwEFasTF8U7PslveUlcpUoHxvGNUrR7iSfndnqHUx7Mq9w%2BbU2SLJY4dC4dTe6NH3rIFqWkBE%2BcRCG7DG3i6ccoyEQjMF84dYprRJ1bQXpED9dOeJXnalhd1G16zd0OM2PfWuOgCDRisImJ1M%2BfIuEODo8yZApGx4MsQdWQQ6cm%2B4omBCnojFL4SaCXV18nADR%2Btr4vMITRhr4GOqUBUHkD5ttU96is72Y2J1yrw0p0PzaKyfKZ%2FQDvJ%2F2ubJnP2tJ1IzswSJMeYWT5qEh8kyWMsn8E6jSLEykQw0Ns4nH%2BQoafUVTcR2kne66infXX%2FxowJvMBLSar%2BqbuczWX%2FCESDcTJw2fpJTv2TXqodHEycEZ4T4uq7%2FcestK%2FGnM4eCJOeiVYHgnVDeSij%2BuOjLZAYHoMBop9EZyaL2O2moxRv%2BcK&X-Amz-Signature=e868fa69b7ecbc79667e45158376e37dce6fe8a84050f38fb3ae1458c0b404ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS2K5DWL%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T131610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDWAAVTjwTjYD4csmUa8j12QCJAFKq%2BcHylZmoqjPchPwIgbU0ozs9fkooq8yrmoGnlGKtEDWEGWvieHbz9RComASoqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGcF9d4ja%2FDVmoI%2ByCrcA4t339hjKtiCDqr0e%2FlnprZsu1grKfvCVTqKjqlcunrxwo4MuJKQL%2Fo%2BNeS5giPKNtXh5UDh4LygkYqWc5xfj2R8RXkHm%2BrZqO6O9Dqzp8USR87qZ9sVeFIX37wVPPEIDz8Ywp%2Fa3vG6QCpu96khkkQZltnrVG9WbSJhMcSwjGrZD%2BvKwaYANmW0r2kYUoBXawHyvX%2F%2FNb8xgXo6zdW3F6T2B9MRbKzHbWheyROpUsxv030R%2BSAApB3TKxkgOCQtuzRaVKF90dSJvvGMmV8AoPdsuGNygNxYYpDGARhc7PE4Et8QkWjIc636yQkKLVAU9f2cUyJan1LK0p09cBEhBq0%2Bm7pl1PA9Ql%2FAgqw0l1IHQs2ZFgbEHLVC6scY0Wv%2FH2sY6Po5aB61OrhrKQUFxEOwh9KIujwQy6tBshL7FU8WcNubMrGOvwwEFasTF8U7PslveUlcpUoHxvGNUrR7iSfndnqHUx7Mq9w%2BbU2SLJY4dC4dTe6NH3rIFqWkBE%2BcRCG7DG3i6ccoyEQjMF84dYprRJ1bQXpED9dOeJXnalhd1G16zd0OM2PfWuOgCDRisImJ1M%2BfIuEODo8yZApGx4MsQdWQQ6cm%2B4omBCnojFL4SaCXV18nADR%2Btr4vMITRhr4GOqUBUHkD5ttU96is72Y2J1yrw0p0PzaKyfKZ%2FQDvJ%2F2ubJnP2tJ1IzswSJMeYWT5qEh8kyWMsn8E6jSLEykQw0Ns4nH%2BQoafUVTcR2kne66infXX%2FxowJvMBLSar%2BqbuczWX%2FCESDcTJw2fpJTv2TXqodHEycEZ4T4uq7%2FcestK%2FGnM4eCJOeiVYHgnVDeSij%2BuOjLZAYHoMBop9EZyaL2O2moxRv%2BcK&X-Amz-Signature=94be041670815b277638a716a686d21802b4f3c696ea1de093a63aae319fb559&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YS2K5DWL%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T131610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDWAAVTjwTjYD4csmUa8j12QCJAFKq%2BcHylZmoqjPchPwIgbU0ozs9fkooq8yrmoGnlGKtEDWEGWvieHbz9RComASoqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGcF9d4ja%2FDVmoI%2ByCrcA4t339hjKtiCDqr0e%2FlnprZsu1grKfvCVTqKjqlcunrxwo4MuJKQL%2Fo%2BNeS5giPKNtXh5UDh4LygkYqWc5xfj2R8RXkHm%2BrZqO6O9Dqzp8USR87qZ9sVeFIX37wVPPEIDz8Ywp%2Fa3vG6QCpu96khkkQZltnrVG9WbSJhMcSwjGrZD%2BvKwaYANmW0r2kYUoBXawHyvX%2F%2FNb8xgXo6zdW3F6T2B9MRbKzHbWheyROpUsxv030R%2BSAApB3TKxkgOCQtuzRaVKF90dSJvvGMmV8AoPdsuGNygNxYYpDGARhc7PE4Et8QkWjIc636yQkKLVAU9f2cUyJan1LK0p09cBEhBq0%2Bm7pl1PA9Ql%2FAgqw0l1IHQs2ZFgbEHLVC6scY0Wv%2FH2sY6Po5aB61OrhrKQUFxEOwh9KIujwQy6tBshL7FU8WcNubMrGOvwwEFasTF8U7PslveUlcpUoHxvGNUrR7iSfndnqHUx7Mq9w%2BbU2SLJY4dC4dTe6NH3rIFqWkBE%2BcRCG7DG3i6ccoyEQjMF84dYprRJ1bQXpED9dOeJXnalhd1G16zd0OM2PfWuOgCDRisImJ1M%2BfIuEODo8yZApGx4MsQdWQQ6cm%2B4omBCnojFL4SaCXV18nADR%2Btr4vMITRhr4GOqUBUHkD5ttU96is72Y2J1yrw0p0PzaKyfKZ%2FQDvJ%2F2ubJnP2tJ1IzswSJMeYWT5qEh8kyWMsn8E6jSLEykQw0Ns4nH%2BQoafUVTcR2kne66infXX%2FxowJvMBLSar%2BqbuczWX%2FCESDcTJw2fpJTv2TXqodHEycEZ4T4uq7%2FcestK%2FGnM4eCJOeiVYHgnVDeSij%2BuOjLZAYHoMBop9EZyaL2O2moxRv%2BcK&X-Amz-Signature=477b4ec66fd28f313d14d6a1a82b4d987e25724516c0815563358d2d8d99da83&X-Amz-SignedHeaders=host&x-id=GetObject)
