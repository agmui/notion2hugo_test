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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z73JKGQ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCxb%2BgeKy9ClKokdUCkGI9ay%2BNOgfwTxyn1jrrhN6qI2AIhANSBV6WQyi9inwdkil79KvlvUrbeIEId22K5KaAtLjdfKv8DCBIQABoMNjM3NDIzMTgzODA1Igw9fIwJPcn9fOTDAVAq3APuGlL6bzJ%2FH2Biquky1TY7VzuUpDit5pu0cH5Z8hxODOMrF%2Fmqbz6QMNkTYSSmmj2kpVPrD4%2F5%2FxgPdEaV%2BNu9DRk3WZoj86hwMZvJksCSC2fg55SLZNjjqSUbaQljMaOxz5haUxIkn3YqmzFEV54pGB8phPyTIZxwZq5K9WIZOLXGe1xK8gx5ZRs6DSh%2FzjL7t1rYIZvtyUdXDhdSq5iYoP7XTlnTpAeITW19fSglyaqdSUHzp1juhJKB5y3zf7J2xUleJdv%2FAliJ66zoWFCy9rxkHbCzQ%2BiGU6huvgdra54jwCU4rEnwAfxG82uBsvuA0gfzu9ARsoYhGzEYTAOuqumhzreDlRtTy3OYNqOS7g3e5nMKkEzb%2FWJYZTmYqBgh2IC1ChKdLA%2FYDXRHq3rRGbdAqS8SRMfCTZdcaDmoRy0HyW2RrGzrD64wJFm4Xst7ZoppReG2PvPUOMniSZFGVkesEXa8SHEjbyWJu2tCWbM%2Fca%2BaDNEXX1cMWFNzxVpq1do0Rqrf50i8NFi62jTTyRHvhPDPfOhiTGayjLFUEgN270GcWJw6ZWmoKNFjLQgTHJlBg2llYrGuYxyIObSOj7hLzypqiGzpJoVd1Kwd6A0GMVOk0rfisCza%2FzDC%2B%2FrBBjqkAQHdykRVgLSRxo3ZhTrqUEm2tFtWD%2FqG5N7tvyiMfIC4HKol6S1BHZ0%2Fs8AEEiZni29LZGQyyeo9ygA3BwDmFzHJbaglYB51QpN4hlwfHGPk%2BwXXRJhaOHch8d75VVzycKjVoZidAT1BKn84cD66ljDyPLSkIZHLQETb%2FfYcjfT9u2Z0Ifexs0aWUa3V1Q9xxf2%2Ff2l0agkzqEDKcJgRTYQmhQdt&X-Amz-Signature=3004fcc162d263017e7a792c4885bb9a413a47bf820824b27c4327278359c32b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z73JKGQ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCxb%2BgeKy9ClKokdUCkGI9ay%2BNOgfwTxyn1jrrhN6qI2AIhANSBV6WQyi9inwdkil79KvlvUrbeIEId22K5KaAtLjdfKv8DCBIQABoMNjM3NDIzMTgzODA1Igw9fIwJPcn9fOTDAVAq3APuGlL6bzJ%2FH2Biquky1TY7VzuUpDit5pu0cH5Z8hxODOMrF%2Fmqbz6QMNkTYSSmmj2kpVPrD4%2F5%2FxgPdEaV%2BNu9DRk3WZoj86hwMZvJksCSC2fg55SLZNjjqSUbaQljMaOxz5haUxIkn3YqmzFEV54pGB8phPyTIZxwZq5K9WIZOLXGe1xK8gx5ZRs6DSh%2FzjL7t1rYIZvtyUdXDhdSq5iYoP7XTlnTpAeITW19fSglyaqdSUHzp1juhJKB5y3zf7J2xUleJdv%2FAliJ66zoWFCy9rxkHbCzQ%2BiGU6huvgdra54jwCU4rEnwAfxG82uBsvuA0gfzu9ARsoYhGzEYTAOuqumhzreDlRtTy3OYNqOS7g3e5nMKkEzb%2FWJYZTmYqBgh2IC1ChKdLA%2FYDXRHq3rRGbdAqS8SRMfCTZdcaDmoRy0HyW2RrGzrD64wJFm4Xst7ZoppReG2PvPUOMniSZFGVkesEXa8SHEjbyWJu2tCWbM%2Fca%2BaDNEXX1cMWFNzxVpq1do0Rqrf50i8NFi62jTTyRHvhPDPfOhiTGayjLFUEgN270GcWJw6ZWmoKNFjLQgTHJlBg2llYrGuYxyIObSOj7hLzypqiGzpJoVd1Kwd6A0GMVOk0rfisCza%2FzDC%2B%2FrBBjqkAQHdykRVgLSRxo3ZhTrqUEm2tFtWD%2FqG5N7tvyiMfIC4HKol6S1BHZ0%2Fs8AEEiZni29LZGQyyeo9ygA3BwDmFzHJbaglYB51QpN4hlwfHGPk%2BwXXRJhaOHch8d75VVzycKjVoZidAT1BKn84cD66ljDyPLSkIZHLQETb%2FfYcjfT9u2Z0Ifexs0aWUa3V1Q9xxf2%2Ff2l0agkzqEDKcJgRTYQmhQdt&X-Amz-Signature=2d60072f90316b4024d0e2e5183ae4dee44984155acef9bfd38999517509dc95&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z73JKGQ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCxb%2BgeKy9ClKokdUCkGI9ay%2BNOgfwTxyn1jrrhN6qI2AIhANSBV6WQyi9inwdkil79KvlvUrbeIEId22K5KaAtLjdfKv8DCBIQABoMNjM3NDIzMTgzODA1Igw9fIwJPcn9fOTDAVAq3APuGlL6bzJ%2FH2Biquky1TY7VzuUpDit5pu0cH5Z8hxODOMrF%2Fmqbz6QMNkTYSSmmj2kpVPrD4%2F5%2FxgPdEaV%2BNu9DRk3WZoj86hwMZvJksCSC2fg55SLZNjjqSUbaQljMaOxz5haUxIkn3YqmzFEV54pGB8phPyTIZxwZq5K9WIZOLXGe1xK8gx5ZRs6DSh%2FzjL7t1rYIZvtyUdXDhdSq5iYoP7XTlnTpAeITW19fSglyaqdSUHzp1juhJKB5y3zf7J2xUleJdv%2FAliJ66zoWFCy9rxkHbCzQ%2BiGU6huvgdra54jwCU4rEnwAfxG82uBsvuA0gfzu9ARsoYhGzEYTAOuqumhzreDlRtTy3OYNqOS7g3e5nMKkEzb%2FWJYZTmYqBgh2IC1ChKdLA%2FYDXRHq3rRGbdAqS8SRMfCTZdcaDmoRy0HyW2RrGzrD64wJFm4Xst7ZoppReG2PvPUOMniSZFGVkesEXa8SHEjbyWJu2tCWbM%2Fca%2BaDNEXX1cMWFNzxVpq1do0Rqrf50i8NFi62jTTyRHvhPDPfOhiTGayjLFUEgN270GcWJw6ZWmoKNFjLQgTHJlBg2llYrGuYxyIObSOj7hLzypqiGzpJoVd1Kwd6A0GMVOk0rfisCza%2FzDC%2B%2FrBBjqkAQHdykRVgLSRxo3ZhTrqUEm2tFtWD%2FqG5N7tvyiMfIC4HKol6S1BHZ0%2Fs8AEEiZni29LZGQyyeo9ygA3BwDmFzHJbaglYB51QpN4hlwfHGPk%2BwXXRJhaOHch8d75VVzycKjVoZidAT1BKn84cD66ljDyPLSkIZHLQETb%2FfYcjfT9u2Z0Ifexs0aWUa3V1Q9xxf2%2Ff2l0agkzqEDKcJgRTYQmhQdt&X-Amz-Signature=42d707a229b952be66bf2f030ff8d22b8592a1ca5ac1f2821c1b590397aa4e6a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z73JKGQ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCxb%2BgeKy9ClKokdUCkGI9ay%2BNOgfwTxyn1jrrhN6qI2AIhANSBV6WQyi9inwdkil79KvlvUrbeIEId22K5KaAtLjdfKv8DCBIQABoMNjM3NDIzMTgzODA1Igw9fIwJPcn9fOTDAVAq3APuGlL6bzJ%2FH2Biquky1TY7VzuUpDit5pu0cH5Z8hxODOMrF%2Fmqbz6QMNkTYSSmmj2kpVPrD4%2F5%2FxgPdEaV%2BNu9DRk3WZoj86hwMZvJksCSC2fg55SLZNjjqSUbaQljMaOxz5haUxIkn3YqmzFEV54pGB8phPyTIZxwZq5K9WIZOLXGe1xK8gx5ZRs6DSh%2FzjL7t1rYIZvtyUdXDhdSq5iYoP7XTlnTpAeITW19fSglyaqdSUHzp1juhJKB5y3zf7J2xUleJdv%2FAliJ66zoWFCy9rxkHbCzQ%2BiGU6huvgdra54jwCU4rEnwAfxG82uBsvuA0gfzu9ARsoYhGzEYTAOuqumhzreDlRtTy3OYNqOS7g3e5nMKkEzb%2FWJYZTmYqBgh2IC1ChKdLA%2FYDXRHq3rRGbdAqS8SRMfCTZdcaDmoRy0HyW2RrGzrD64wJFm4Xst7ZoppReG2PvPUOMniSZFGVkesEXa8SHEjbyWJu2tCWbM%2Fca%2BaDNEXX1cMWFNzxVpq1do0Rqrf50i8NFi62jTTyRHvhPDPfOhiTGayjLFUEgN270GcWJw6ZWmoKNFjLQgTHJlBg2llYrGuYxyIObSOj7hLzypqiGzpJoVd1Kwd6A0GMVOk0rfisCza%2FzDC%2B%2FrBBjqkAQHdykRVgLSRxo3ZhTrqUEm2tFtWD%2FqG5N7tvyiMfIC4HKol6S1BHZ0%2Fs8AEEiZni29LZGQyyeo9ygA3BwDmFzHJbaglYB51QpN4hlwfHGPk%2BwXXRJhaOHch8d75VVzycKjVoZidAT1BKn84cD66ljDyPLSkIZHLQETb%2FfYcjfT9u2Z0Ifexs0aWUa3V1Q9xxf2%2Ff2l0agkzqEDKcJgRTYQmhQdt&X-Amz-Signature=2fefc411d5fa20156bb0b277a2d997df09de6eaf8f6bb86d508991d532d59faa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z73JKGQ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCxb%2BgeKy9ClKokdUCkGI9ay%2BNOgfwTxyn1jrrhN6qI2AIhANSBV6WQyi9inwdkil79KvlvUrbeIEId22K5KaAtLjdfKv8DCBIQABoMNjM3NDIzMTgzODA1Igw9fIwJPcn9fOTDAVAq3APuGlL6bzJ%2FH2Biquky1TY7VzuUpDit5pu0cH5Z8hxODOMrF%2Fmqbz6QMNkTYSSmmj2kpVPrD4%2F5%2FxgPdEaV%2BNu9DRk3WZoj86hwMZvJksCSC2fg55SLZNjjqSUbaQljMaOxz5haUxIkn3YqmzFEV54pGB8phPyTIZxwZq5K9WIZOLXGe1xK8gx5ZRs6DSh%2FzjL7t1rYIZvtyUdXDhdSq5iYoP7XTlnTpAeITW19fSglyaqdSUHzp1juhJKB5y3zf7J2xUleJdv%2FAliJ66zoWFCy9rxkHbCzQ%2BiGU6huvgdra54jwCU4rEnwAfxG82uBsvuA0gfzu9ARsoYhGzEYTAOuqumhzreDlRtTy3OYNqOS7g3e5nMKkEzb%2FWJYZTmYqBgh2IC1ChKdLA%2FYDXRHq3rRGbdAqS8SRMfCTZdcaDmoRy0HyW2RrGzrD64wJFm4Xst7ZoppReG2PvPUOMniSZFGVkesEXa8SHEjbyWJu2tCWbM%2Fca%2BaDNEXX1cMWFNzxVpq1do0Rqrf50i8NFi62jTTyRHvhPDPfOhiTGayjLFUEgN270GcWJw6ZWmoKNFjLQgTHJlBg2llYrGuYxyIObSOj7hLzypqiGzpJoVd1Kwd6A0GMVOk0rfisCza%2FzDC%2B%2FrBBjqkAQHdykRVgLSRxo3ZhTrqUEm2tFtWD%2FqG5N7tvyiMfIC4HKol6S1BHZ0%2Fs8AEEiZni29LZGQyyeo9ygA3BwDmFzHJbaglYB51QpN4hlwfHGPk%2BwXXRJhaOHch8d75VVzycKjVoZidAT1BKn84cD66ljDyPLSkIZHLQETb%2FfYcjfT9u2Z0Ifexs0aWUa3V1Q9xxf2%2Ff2l0agkzqEDKcJgRTYQmhQdt&X-Amz-Signature=01bf63d60f18b19dc83b71b5fce77ed13e899ee3685eba36f0c7a5302faa27e2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z73JKGQ%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJIMEYCIQCxb%2BgeKy9ClKokdUCkGI9ay%2BNOgfwTxyn1jrrhN6qI2AIhANSBV6WQyi9inwdkil79KvlvUrbeIEId22K5KaAtLjdfKv8DCBIQABoMNjM3NDIzMTgzODA1Igw9fIwJPcn9fOTDAVAq3APuGlL6bzJ%2FH2Biquky1TY7VzuUpDit5pu0cH5Z8hxODOMrF%2Fmqbz6QMNkTYSSmmj2kpVPrD4%2F5%2FxgPdEaV%2BNu9DRk3WZoj86hwMZvJksCSC2fg55SLZNjjqSUbaQljMaOxz5haUxIkn3YqmzFEV54pGB8phPyTIZxwZq5K9WIZOLXGe1xK8gx5ZRs6DSh%2FzjL7t1rYIZvtyUdXDhdSq5iYoP7XTlnTpAeITW19fSglyaqdSUHzp1juhJKB5y3zf7J2xUleJdv%2FAliJ66zoWFCy9rxkHbCzQ%2BiGU6huvgdra54jwCU4rEnwAfxG82uBsvuA0gfzu9ARsoYhGzEYTAOuqumhzreDlRtTy3OYNqOS7g3e5nMKkEzb%2FWJYZTmYqBgh2IC1ChKdLA%2FYDXRHq3rRGbdAqS8SRMfCTZdcaDmoRy0HyW2RrGzrD64wJFm4Xst7ZoppReG2PvPUOMniSZFGVkesEXa8SHEjbyWJu2tCWbM%2Fca%2BaDNEXX1cMWFNzxVpq1do0Rqrf50i8NFi62jTTyRHvhPDPfOhiTGayjLFUEgN270GcWJw6ZWmoKNFjLQgTHJlBg2llYrGuYxyIObSOj7hLzypqiGzpJoVd1Kwd6A0GMVOk0rfisCza%2FzDC%2B%2FrBBjqkAQHdykRVgLSRxo3ZhTrqUEm2tFtWD%2FqG5N7tvyiMfIC4HKol6S1BHZ0%2Fs8AEEiZni29LZGQyyeo9ygA3BwDmFzHJbaglYB51QpN4hlwfHGPk%2BwXXRJhaOHch8d75VVzycKjVoZidAT1BKn84cD66ljDyPLSkIZHLQETb%2FfYcjfT9u2Z0Ifexs0aWUa3V1Q9xxf2%2Ff2l0agkzqEDKcJgRTYQmhQdt&X-Amz-Signature=ddecb721b8a30efa1e8470b198f95fa7acd6e82424a2672c74e79af91584176e&X-Amz-SignedHeaders=host&x-id=GetObject)
