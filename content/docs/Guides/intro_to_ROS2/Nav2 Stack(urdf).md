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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZTNQW6Q%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T034058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCID4pz9In8UMAUmSQBFgskF%2FaBhnWMSxL99bBboLpHRFrAiEArajrsv0ynH1odSqVsGyRPPEZSMiYt8Vz8Wr%2B20pJg1gqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN29d%2BJdcgERnFHSeyrcA1DmfDY5tycnEeMCtr5unQ%2F%2FMUTefojCWvv0oYosn4b%2FvsfxllsRGf7SDhYQVhVRpVPgw4BlfnXxvz5Gc2h3V%2BRQRN%2FsB5Aut0txiJ4lvilAznIM3LfzpKlLBBawP4%2B1S9Y4hXADCdLsCECn%2B6f6o6TKiKPaTd1zdhvdjPAyNn9uqZYVIrMbyfKgPC0ya9B%2Fc1JoUR2YhyKTW%2BVcXO51PMSwHcmjIUAklvhZlPHJMvOvCuOJ2fuPaGHeQwQ%2FDlIcpNwn%2BNr%2FoBHNUeEqXnTUm1jd8P6obkh%2BaULKRJqvg2iETpxs1stvunBulC27%2FIkSBjO0bb2Li2gufYDm0K8NhCdDYy4Cpgpv0gtkqAk4jr0wDyEA78G83KvIvJTdbv990oobS2soe5yRPi4DOMSKEpwy5RbQ08y4C1rKZ6%2FWoL1aCPmYFQ8atO5K7GdXOJlwfjd1N3It6zgmMvdnPRq5uZ4ufWBGl7CXm0p1RIiFZFgndTm9nLCNvMM6g15a21QRgWtTsj%2BRAR7GSXpYnom%2BS8FaR9KUTJDpr9RyhjdQnAXlF%2FFEEMtfqghi9zsw71OUJ2gt9oAvl192WP6u4iy19J7Nao3bQHw7GcNoiQOejIZmPj9H4LhPNSVxpoioMKW5rcIGOqUBRI9G%2FO402V6Orw74hJeD5IY2KUI2y8YySFXH%2FwkhEHHY7FoHzi7MrYy0%2FNLbpHUhGIzjPjIIztaLh7HAGSPYK3cnOkK0fopf8P7JVwooHRCz0VOk2BcXbEHS%2F2a4D0rKqJLrNyjFiKYrJsqOhtjY%2FOMDcUqIyiBlsAh7c0wIv4lL4sDm0EUBJrT5Gk39n6DbxAeeVFjQlbwcMOdQzobTLKH5f6On&X-Amz-Signature=502f097c953749d2b00c8303995206cabf0beb0c65f805c6563f7ee8824272b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZTNQW6Q%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T034058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCID4pz9In8UMAUmSQBFgskF%2FaBhnWMSxL99bBboLpHRFrAiEArajrsv0ynH1odSqVsGyRPPEZSMiYt8Vz8Wr%2B20pJg1gqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN29d%2BJdcgERnFHSeyrcA1DmfDY5tycnEeMCtr5unQ%2F%2FMUTefojCWvv0oYosn4b%2FvsfxllsRGf7SDhYQVhVRpVPgw4BlfnXxvz5Gc2h3V%2BRQRN%2FsB5Aut0txiJ4lvilAznIM3LfzpKlLBBawP4%2B1S9Y4hXADCdLsCECn%2B6f6o6TKiKPaTd1zdhvdjPAyNn9uqZYVIrMbyfKgPC0ya9B%2Fc1JoUR2YhyKTW%2BVcXO51PMSwHcmjIUAklvhZlPHJMvOvCuOJ2fuPaGHeQwQ%2FDlIcpNwn%2BNr%2FoBHNUeEqXnTUm1jd8P6obkh%2BaULKRJqvg2iETpxs1stvunBulC27%2FIkSBjO0bb2Li2gufYDm0K8NhCdDYy4Cpgpv0gtkqAk4jr0wDyEA78G83KvIvJTdbv990oobS2soe5yRPi4DOMSKEpwy5RbQ08y4C1rKZ6%2FWoL1aCPmYFQ8atO5K7GdXOJlwfjd1N3It6zgmMvdnPRq5uZ4ufWBGl7CXm0p1RIiFZFgndTm9nLCNvMM6g15a21QRgWtTsj%2BRAR7GSXpYnom%2BS8FaR9KUTJDpr9RyhjdQnAXlF%2FFEEMtfqghi9zsw71OUJ2gt9oAvl192WP6u4iy19J7Nao3bQHw7GcNoiQOejIZmPj9H4LhPNSVxpoioMKW5rcIGOqUBRI9G%2FO402V6Orw74hJeD5IY2KUI2y8YySFXH%2FwkhEHHY7FoHzi7MrYy0%2FNLbpHUhGIzjPjIIztaLh7HAGSPYK3cnOkK0fopf8P7JVwooHRCz0VOk2BcXbEHS%2F2a4D0rKqJLrNyjFiKYrJsqOhtjY%2FOMDcUqIyiBlsAh7c0wIv4lL4sDm0EUBJrT5Gk39n6DbxAeeVFjQlbwcMOdQzobTLKH5f6On&X-Amz-Signature=d4f0336cd21fbc4c886c03b2f176f0a7ebeb7fff85accb1ad4c3326e889f39a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZTNQW6Q%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T034058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCID4pz9In8UMAUmSQBFgskF%2FaBhnWMSxL99bBboLpHRFrAiEArajrsv0ynH1odSqVsGyRPPEZSMiYt8Vz8Wr%2B20pJg1gqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN29d%2BJdcgERnFHSeyrcA1DmfDY5tycnEeMCtr5unQ%2F%2FMUTefojCWvv0oYosn4b%2FvsfxllsRGf7SDhYQVhVRpVPgw4BlfnXxvz5Gc2h3V%2BRQRN%2FsB5Aut0txiJ4lvilAznIM3LfzpKlLBBawP4%2B1S9Y4hXADCdLsCECn%2B6f6o6TKiKPaTd1zdhvdjPAyNn9uqZYVIrMbyfKgPC0ya9B%2Fc1JoUR2YhyKTW%2BVcXO51PMSwHcmjIUAklvhZlPHJMvOvCuOJ2fuPaGHeQwQ%2FDlIcpNwn%2BNr%2FoBHNUeEqXnTUm1jd8P6obkh%2BaULKRJqvg2iETpxs1stvunBulC27%2FIkSBjO0bb2Li2gufYDm0K8NhCdDYy4Cpgpv0gtkqAk4jr0wDyEA78G83KvIvJTdbv990oobS2soe5yRPi4DOMSKEpwy5RbQ08y4C1rKZ6%2FWoL1aCPmYFQ8atO5K7GdXOJlwfjd1N3It6zgmMvdnPRq5uZ4ufWBGl7CXm0p1RIiFZFgndTm9nLCNvMM6g15a21QRgWtTsj%2BRAR7GSXpYnom%2BS8FaR9KUTJDpr9RyhjdQnAXlF%2FFEEMtfqghi9zsw71OUJ2gt9oAvl192WP6u4iy19J7Nao3bQHw7GcNoiQOejIZmPj9H4LhPNSVxpoioMKW5rcIGOqUBRI9G%2FO402V6Orw74hJeD5IY2KUI2y8YySFXH%2FwkhEHHY7FoHzi7MrYy0%2FNLbpHUhGIzjPjIIztaLh7HAGSPYK3cnOkK0fopf8P7JVwooHRCz0VOk2BcXbEHS%2F2a4D0rKqJLrNyjFiKYrJsqOhtjY%2FOMDcUqIyiBlsAh7c0wIv4lL4sDm0EUBJrT5Gk39n6DbxAeeVFjQlbwcMOdQzobTLKH5f6On&X-Amz-Signature=33998aec6fb82b42d30b52f09ba98e96f50a5ab2bc431e2c03bb044927287a7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZTNQW6Q%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T034058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCID4pz9In8UMAUmSQBFgskF%2FaBhnWMSxL99bBboLpHRFrAiEArajrsv0ynH1odSqVsGyRPPEZSMiYt8Vz8Wr%2B20pJg1gqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN29d%2BJdcgERnFHSeyrcA1DmfDY5tycnEeMCtr5unQ%2F%2FMUTefojCWvv0oYosn4b%2FvsfxllsRGf7SDhYQVhVRpVPgw4BlfnXxvz5Gc2h3V%2BRQRN%2FsB5Aut0txiJ4lvilAznIM3LfzpKlLBBawP4%2B1S9Y4hXADCdLsCECn%2B6f6o6TKiKPaTd1zdhvdjPAyNn9uqZYVIrMbyfKgPC0ya9B%2Fc1JoUR2YhyKTW%2BVcXO51PMSwHcmjIUAklvhZlPHJMvOvCuOJ2fuPaGHeQwQ%2FDlIcpNwn%2BNr%2FoBHNUeEqXnTUm1jd8P6obkh%2BaULKRJqvg2iETpxs1stvunBulC27%2FIkSBjO0bb2Li2gufYDm0K8NhCdDYy4Cpgpv0gtkqAk4jr0wDyEA78G83KvIvJTdbv990oobS2soe5yRPi4DOMSKEpwy5RbQ08y4C1rKZ6%2FWoL1aCPmYFQ8atO5K7GdXOJlwfjd1N3It6zgmMvdnPRq5uZ4ufWBGl7CXm0p1RIiFZFgndTm9nLCNvMM6g15a21QRgWtTsj%2BRAR7GSXpYnom%2BS8FaR9KUTJDpr9RyhjdQnAXlF%2FFEEMtfqghi9zsw71OUJ2gt9oAvl192WP6u4iy19J7Nao3bQHw7GcNoiQOejIZmPj9H4LhPNSVxpoioMKW5rcIGOqUBRI9G%2FO402V6Orw74hJeD5IY2KUI2y8YySFXH%2FwkhEHHY7FoHzi7MrYy0%2FNLbpHUhGIzjPjIIztaLh7HAGSPYK3cnOkK0fopf8P7JVwooHRCz0VOk2BcXbEHS%2F2a4D0rKqJLrNyjFiKYrJsqOhtjY%2FOMDcUqIyiBlsAh7c0wIv4lL4sDm0EUBJrT5Gk39n6DbxAeeVFjQlbwcMOdQzobTLKH5f6On&X-Amz-Signature=ef18e1193cc4ef0e250b5e63b016d54a2217a4fde2ccf845b2f6aca968355a6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZTNQW6Q%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T034058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCID4pz9In8UMAUmSQBFgskF%2FaBhnWMSxL99bBboLpHRFrAiEArajrsv0ynH1odSqVsGyRPPEZSMiYt8Vz8Wr%2B20pJg1gqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN29d%2BJdcgERnFHSeyrcA1DmfDY5tycnEeMCtr5unQ%2F%2FMUTefojCWvv0oYosn4b%2FvsfxllsRGf7SDhYQVhVRpVPgw4BlfnXxvz5Gc2h3V%2BRQRN%2FsB5Aut0txiJ4lvilAznIM3LfzpKlLBBawP4%2B1S9Y4hXADCdLsCECn%2B6f6o6TKiKPaTd1zdhvdjPAyNn9uqZYVIrMbyfKgPC0ya9B%2Fc1JoUR2YhyKTW%2BVcXO51PMSwHcmjIUAklvhZlPHJMvOvCuOJ2fuPaGHeQwQ%2FDlIcpNwn%2BNr%2FoBHNUeEqXnTUm1jd8P6obkh%2BaULKRJqvg2iETpxs1stvunBulC27%2FIkSBjO0bb2Li2gufYDm0K8NhCdDYy4Cpgpv0gtkqAk4jr0wDyEA78G83KvIvJTdbv990oobS2soe5yRPi4DOMSKEpwy5RbQ08y4C1rKZ6%2FWoL1aCPmYFQ8atO5K7GdXOJlwfjd1N3It6zgmMvdnPRq5uZ4ufWBGl7CXm0p1RIiFZFgndTm9nLCNvMM6g15a21QRgWtTsj%2BRAR7GSXpYnom%2BS8FaR9KUTJDpr9RyhjdQnAXlF%2FFEEMtfqghi9zsw71OUJ2gt9oAvl192WP6u4iy19J7Nao3bQHw7GcNoiQOejIZmPj9H4LhPNSVxpoioMKW5rcIGOqUBRI9G%2FO402V6Orw74hJeD5IY2KUI2y8YySFXH%2FwkhEHHY7FoHzi7MrYy0%2FNLbpHUhGIzjPjIIztaLh7HAGSPYK3cnOkK0fopf8P7JVwooHRCz0VOk2BcXbEHS%2F2a4D0rKqJLrNyjFiKYrJsqOhtjY%2FOMDcUqIyiBlsAh7c0wIv4lL4sDm0EUBJrT5Gk39n6DbxAeeVFjQlbwcMOdQzobTLKH5f6On&X-Amz-Signature=7d8317ba12b556591462a9ff1908f144f56e8da5aa68a9db02605c08e6d592df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZTNQW6Q%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T034058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCID4pz9In8UMAUmSQBFgskF%2FaBhnWMSxL99bBboLpHRFrAiEArajrsv0ynH1odSqVsGyRPPEZSMiYt8Vz8Wr%2B20pJg1gqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN29d%2BJdcgERnFHSeyrcA1DmfDY5tycnEeMCtr5unQ%2F%2FMUTefojCWvv0oYosn4b%2FvsfxllsRGf7SDhYQVhVRpVPgw4BlfnXxvz5Gc2h3V%2BRQRN%2FsB5Aut0txiJ4lvilAznIM3LfzpKlLBBawP4%2B1S9Y4hXADCdLsCECn%2B6f6o6TKiKPaTd1zdhvdjPAyNn9uqZYVIrMbyfKgPC0ya9B%2Fc1JoUR2YhyKTW%2BVcXO51PMSwHcmjIUAklvhZlPHJMvOvCuOJ2fuPaGHeQwQ%2FDlIcpNwn%2BNr%2FoBHNUeEqXnTUm1jd8P6obkh%2BaULKRJqvg2iETpxs1stvunBulC27%2FIkSBjO0bb2Li2gufYDm0K8NhCdDYy4Cpgpv0gtkqAk4jr0wDyEA78G83KvIvJTdbv990oobS2soe5yRPi4DOMSKEpwy5RbQ08y4C1rKZ6%2FWoL1aCPmYFQ8atO5K7GdXOJlwfjd1N3It6zgmMvdnPRq5uZ4ufWBGl7CXm0p1RIiFZFgndTm9nLCNvMM6g15a21QRgWtTsj%2BRAR7GSXpYnom%2BS8FaR9KUTJDpr9RyhjdQnAXlF%2FFEEMtfqghi9zsw71OUJ2gt9oAvl192WP6u4iy19J7Nao3bQHw7GcNoiQOejIZmPj9H4LhPNSVxpoioMKW5rcIGOqUBRI9G%2FO402V6Orw74hJeD5IY2KUI2y8YySFXH%2FwkhEHHY7FoHzi7MrYy0%2FNLbpHUhGIzjPjIIztaLh7HAGSPYK3cnOkK0fopf8P7JVwooHRCz0VOk2BcXbEHS%2F2a4D0rKqJLrNyjFiKYrJsqOhtjY%2FOMDcUqIyiBlsAh7c0wIv4lL4sDm0EUBJrT5Gk39n6DbxAeeVFjQlbwcMOdQzobTLKH5f6On&X-Amz-Signature=683e17aca7d26ab244ac283cfb228a2a25ba62f487c6d390d9827a8389e36da2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
