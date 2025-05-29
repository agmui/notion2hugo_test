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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMT5NUP6%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4Ku7o9GBdmlzSh%2FSAdKWn9K8WNboU9OkVOTHDKDHRmwIgA0Mop%2BTO4g3TKQOhvkcObpI1UygC4NX3zIQD%2FIgTfDgqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrke7S8PhorlmFtDircA6umhnWYk3%2FsP2uUTeOkWqjKKgzQRQMW%2BrRTo3vagQ9rQkjeBecEMR3D3sGwjtvCIs3bFHYlflbSGx6rzUl9t2P6M4rsxozaqV9jsGF8a%2FCV2c6pGTvEenOBBXmNfuzypxIVpH%2BSNML66A1tfwfbJsOGSICfjACm2IPAzfyc7iwBpnMo3gJrQg%2B1X38YI8D598HjzAOnFlrqY08jxCG15BvfG2NUhDz9tbHTQg22gwlUFRKe6Zo5yOyGMwvZBYFvFy3f5x8H%2Fl434kbhneq%2F3NAAIfJ2FN9QmxokGUj4F9IV128lENcBPs6Gw2fHJAqXXUEbi7DH%2FgRFclE7g2rwjM1%2B3ELsm%2BoisNESW1aJvaBmjlSnzn5wCOeLJbNdVDSpJndOhjg1nS7mwvkZlp0r1jh1PJmG3b4sn2p%2FJtHqS7CVRkSYJPjDAElLX6kuLZ4rCQHYcJIYTYN1szKwQzunWfjaG1Y6jG3%2B6w3GzhjKxp144zn%2BggS9ENRis50Rt4fd7P64ex4NrI9n6OwdGTrfe7ld40ca3rEbARLEeEVgV2sPey6AqOR%2F15w80v2HUteoqfvwhDdbm7iZDkZZUBLopnxi%2BBCeAynoUOq%2BwLMO%2FS%2BXo%2F2MnCuhbw0AHrX4MO%2By48EGOqUBl%2BVKxyF%2F7dW8pRkWu0FI%2FCJKJ0EXA7h7pU6J5wXEakg8GjDDy11yOc9nI%2FRZjWz%2BuT%2Fl2%2BL47fhVuNypqn7ndjSRBnsPfSOPW1hrQoYiU8kmNweCvHttNh2BeNScV8qJSzaigygTAV72fjjQ8N4xfo1iGUOY19sdaYVKCqEZ%2B0SitU1BLeCGi1tur9ipQIlRiGO1YS8nuLSEPTVsAmcL48W4FR%2Fj&X-Amz-Signature=be691e0546d5c62c80968e70e6adfe2759dfd871bb6aa4edb445516481c3d80a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMT5NUP6%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4Ku7o9GBdmlzSh%2FSAdKWn9K8WNboU9OkVOTHDKDHRmwIgA0Mop%2BTO4g3TKQOhvkcObpI1UygC4NX3zIQD%2FIgTfDgqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrke7S8PhorlmFtDircA6umhnWYk3%2FsP2uUTeOkWqjKKgzQRQMW%2BrRTo3vagQ9rQkjeBecEMR3D3sGwjtvCIs3bFHYlflbSGx6rzUl9t2P6M4rsxozaqV9jsGF8a%2FCV2c6pGTvEenOBBXmNfuzypxIVpH%2BSNML66A1tfwfbJsOGSICfjACm2IPAzfyc7iwBpnMo3gJrQg%2B1X38YI8D598HjzAOnFlrqY08jxCG15BvfG2NUhDz9tbHTQg22gwlUFRKe6Zo5yOyGMwvZBYFvFy3f5x8H%2Fl434kbhneq%2F3NAAIfJ2FN9QmxokGUj4F9IV128lENcBPs6Gw2fHJAqXXUEbi7DH%2FgRFclE7g2rwjM1%2B3ELsm%2BoisNESW1aJvaBmjlSnzn5wCOeLJbNdVDSpJndOhjg1nS7mwvkZlp0r1jh1PJmG3b4sn2p%2FJtHqS7CVRkSYJPjDAElLX6kuLZ4rCQHYcJIYTYN1szKwQzunWfjaG1Y6jG3%2B6w3GzhjKxp144zn%2BggS9ENRis50Rt4fd7P64ex4NrI9n6OwdGTrfe7ld40ca3rEbARLEeEVgV2sPey6AqOR%2F15w80v2HUteoqfvwhDdbm7iZDkZZUBLopnxi%2BBCeAynoUOq%2BwLMO%2FS%2BXo%2F2MnCuhbw0AHrX4MO%2By48EGOqUBl%2BVKxyF%2F7dW8pRkWu0FI%2FCJKJ0EXA7h7pU6J5wXEakg8GjDDy11yOc9nI%2FRZjWz%2BuT%2Fl2%2BL47fhVuNypqn7ndjSRBnsPfSOPW1hrQoYiU8kmNweCvHttNh2BeNScV8qJSzaigygTAV72fjjQ8N4xfo1iGUOY19sdaYVKCqEZ%2B0SitU1BLeCGi1tur9ipQIlRiGO1YS8nuLSEPTVsAmcL48W4FR%2Fj&X-Amz-Signature=2bcc81dcc6508cbea39d3a45d2ef37450083eff85d257b8cff6a3861f8eb51d9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMT5NUP6%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4Ku7o9GBdmlzSh%2FSAdKWn9K8WNboU9OkVOTHDKDHRmwIgA0Mop%2BTO4g3TKQOhvkcObpI1UygC4NX3zIQD%2FIgTfDgqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrke7S8PhorlmFtDircA6umhnWYk3%2FsP2uUTeOkWqjKKgzQRQMW%2BrRTo3vagQ9rQkjeBecEMR3D3sGwjtvCIs3bFHYlflbSGx6rzUl9t2P6M4rsxozaqV9jsGF8a%2FCV2c6pGTvEenOBBXmNfuzypxIVpH%2BSNML66A1tfwfbJsOGSICfjACm2IPAzfyc7iwBpnMo3gJrQg%2B1X38YI8D598HjzAOnFlrqY08jxCG15BvfG2NUhDz9tbHTQg22gwlUFRKe6Zo5yOyGMwvZBYFvFy3f5x8H%2Fl434kbhneq%2F3NAAIfJ2FN9QmxokGUj4F9IV128lENcBPs6Gw2fHJAqXXUEbi7DH%2FgRFclE7g2rwjM1%2B3ELsm%2BoisNESW1aJvaBmjlSnzn5wCOeLJbNdVDSpJndOhjg1nS7mwvkZlp0r1jh1PJmG3b4sn2p%2FJtHqS7CVRkSYJPjDAElLX6kuLZ4rCQHYcJIYTYN1szKwQzunWfjaG1Y6jG3%2B6w3GzhjKxp144zn%2BggS9ENRis50Rt4fd7P64ex4NrI9n6OwdGTrfe7ld40ca3rEbARLEeEVgV2sPey6AqOR%2F15w80v2HUteoqfvwhDdbm7iZDkZZUBLopnxi%2BBCeAynoUOq%2BwLMO%2FS%2BXo%2F2MnCuhbw0AHrX4MO%2By48EGOqUBl%2BVKxyF%2F7dW8pRkWu0FI%2FCJKJ0EXA7h7pU6J5wXEakg8GjDDy11yOc9nI%2FRZjWz%2BuT%2Fl2%2BL47fhVuNypqn7ndjSRBnsPfSOPW1hrQoYiU8kmNweCvHttNh2BeNScV8qJSzaigygTAV72fjjQ8N4xfo1iGUOY19sdaYVKCqEZ%2B0SitU1BLeCGi1tur9ipQIlRiGO1YS8nuLSEPTVsAmcL48W4FR%2Fj&X-Amz-Signature=717f141317b4a5d7053952a3af16497c0607077f9ffac8dcaf24f7678da0eac2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMT5NUP6%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4Ku7o9GBdmlzSh%2FSAdKWn9K8WNboU9OkVOTHDKDHRmwIgA0Mop%2BTO4g3TKQOhvkcObpI1UygC4NX3zIQD%2FIgTfDgqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrke7S8PhorlmFtDircA6umhnWYk3%2FsP2uUTeOkWqjKKgzQRQMW%2BrRTo3vagQ9rQkjeBecEMR3D3sGwjtvCIs3bFHYlflbSGx6rzUl9t2P6M4rsxozaqV9jsGF8a%2FCV2c6pGTvEenOBBXmNfuzypxIVpH%2BSNML66A1tfwfbJsOGSICfjACm2IPAzfyc7iwBpnMo3gJrQg%2B1X38YI8D598HjzAOnFlrqY08jxCG15BvfG2NUhDz9tbHTQg22gwlUFRKe6Zo5yOyGMwvZBYFvFy3f5x8H%2Fl434kbhneq%2F3NAAIfJ2FN9QmxokGUj4F9IV128lENcBPs6Gw2fHJAqXXUEbi7DH%2FgRFclE7g2rwjM1%2B3ELsm%2BoisNESW1aJvaBmjlSnzn5wCOeLJbNdVDSpJndOhjg1nS7mwvkZlp0r1jh1PJmG3b4sn2p%2FJtHqS7CVRkSYJPjDAElLX6kuLZ4rCQHYcJIYTYN1szKwQzunWfjaG1Y6jG3%2B6w3GzhjKxp144zn%2BggS9ENRis50Rt4fd7P64ex4NrI9n6OwdGTrfe7ld40ca3rEbARLEeEVgV2sPey6AqOR%2F15w80v2HUteoqfvwhDdbm7iZDkZZUBLopnxi%2BBCeAynoUOq%2BwLMO%2FS%2BXo%2F2MnCuhbw0AHrX4MO%2By48EGOqUBl%2BVKxyF%2F7dW8pRkWu0FI%2FCJKJ0EXA7h7pU6J5wXEakg8GjDDy11yOc9nI%2FRZjWz%2BuT%2Fl2%2BL47fhVuNypqn7ndjSRBnsPfSOPW1hrQoYiU8kmNweCvHttNh2BeNScV8qJSzaigygTAV72fjjQ8N4xfo1iGUOY19sdaYVKCqEZ%2B0SitU1BLeCGi1tur9ipQIlRiGO1YS8nuLSEPTVsAmcL48W4FR%2Fj&X-Amz-Signature=e710bde555a35f3c4dd1e485527856d074ee6cbab9ca34fc749bc5cf99b75725&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMT5NUP6%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4Ku7o9GBdmlzSh%2FSAdKWn9K8WNboU9OkVOTHDKDHRmwIgA0Mop%2BTO4g3TKQOhvkcObpI1UygC4NX3zIQD%2FIgTfDgqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrke7S8PhorlmFtDircA6umhnWYk3%2FsP2uUTeOkWqjKKgzQRQMW%2BrRTo3vagQ9rQkjeBecEMR3D3sGwjtvCIs3bFHYlflbSGx6rzUl9t2P6M4rsxozaqV9jsGF8a%2FCV2c6pGTvEenOBBXmNfuzypxIVpH%2BSNML66A1tfwfbJsOGSICfjACm2IPAzfyc7iwBpnMo3gJrQg%2B1X38YI8D598HjzAOnFlrqY08jxCG15BvfG2NUhDz9tbHTQg22gwlUFRKe6Zo5yOyGMwvZBYFvFy3f5x8H%2Fl434kbhneq%2F3NAAIfJ2FN9QmxokGUj4F9IV128lENcBPs6Gw2fHJAqXXUEbi7DH%2FgRFclE7g2rwjM1%2B3ELsm%2BoisNESW1aJvaBmjlSnzn5wCOeLJbNdVDSpJndOhjg1nS7mwvkZlp0r1jh1PJmG3b4sn2p%2FJtHqS7CVRkSYJPjDAElLX6kuLZ4rCQHYcJIYTYN1szKwQzunWfjaG1Y6jG3%2B6w3GzhjKxp144zn%2BggS9ENRis50Rt4fd7P64ex4NrI9n6OwdGTrfe7ld40ca3rEbARLEeEVgV2sPey6AqOR%2F15w80v2HUteoqfvwhDdbm7iZDkZZUBLopnxi%2BBCeAynoUOq%2BwLMO%2FS%2BXo%2F2MnCuhbw0AHrX4MO%2By48EGOqUBl%2BVKxyF%2F7dW8pRkWu0FI%2FCJKJ0EXA7h7pU6J5wXEakg8GjDDy11yOc9nI%2FRZjWz%2BuT%2Fl2%2BL47fhVuNypqn7ndjSRBnsPfSOPW1hrQoYiU8kmNweCvHttNh2BeNScV8qJSzaigygTAV72fjjQ8N4xfo1iGUOY19sdaYVKCqEZ%2B0SitU1BLeCGi1tur9ipQIlRiGO1YS8nuLSEPTVsAmcL48W4FR%2Fj&X-Amz-Signature=21a259504b201f4af9f4751b658041afa54e8c209bf18c7b1ec11fe9fdffb526&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMT5NUP6%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4Ku7o9GBdmlzSh%2FSAdKWn9K8WNboU9OkVOTHDKDHRmwIgA0Mop%2BTO4g3TKQOhvkcObpI1UygC4NX3zIQD%2FIgTfDgqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrke7S8PhorlmFtDircA6umhnWYk3%2FsP2uUTeOkWqjKKgzQRQMW%2BrRTo3vagQ9rQkjeBecEMR3D3sGwjtvCIs3bFHYlflbSGx6rzUl9t2P6M4rsxozaqV9jsGF8a%2FCV2c6pGTvEenOBBXmNfuzypxIVpH%2BSNML66A1tfwfbJsOGSICfjACm2IPAzfyc7iwBpnMo3gJrQg%2B1X38YI8D598HjzAOnFlrqY08jxCG15BvfG2NUhDz9tbHTQg22gwlUFRKe6Zo5yOyGMwvZBYFvFy3f5x8H%2Fl434kbhneq%2F3NAAIfJ2FN9QmxokGUj4F9IV128lENcBPs6Gw2fHJAqXXUEbi7DH%2FgRFclE7g2rwjM1%2B3ELsm%2BoisNESW1aJvaBmjlSnzn5wCOeLJbNdVDSpJndOhjg1nS7mwvkZlp0r1jh1PJmG3b4sn2p%2FJtHqS7CVRkSYJPjDAElLX6kuLZ4rCQHYcJIYTYN1szKwQzunWfjaG1Y6jG3%2B6w3GzhjKxp144zn%2BggS9ENRis50Rt4fd7P64ex4NrI9n6OwdGTrfe7ld40ca3rEbARLEeEVgV2sPey6AqOR%2F15w80v2HUteoqfvwhDdbm7iZDkZZUBLopnxi%2BBCeAynoUOq%2BwLMO%2FS%2BXo%2F2MnCuhbw0AHrX4MO%2By48EGOqUBl%2BVKxyF%2F7dW8pRkWu0FI%2FCJKJ0EXA7h7pU6J5wXEakg8GjDDy11yOc9nI%2FRZjWz%2BuT%2Fl2%2BL47fhVuNypqn7ndjSRBnsPfSOPW1hrQoYiU8kmNweCvHttNh2BeNScV8qJSzaigygTAV72fjjQ8N4xfo1iGUOY19sdaYVKCqEZ%2B0SitU1BLeCGi1tur9ipQIlRiGO1YS8nuLSEPTVsAmcL48W4FR%2Fj&X-Amz-Signature=71df4ff5ec7ce5c7861dc3058a1aa4ade1b0223dff01d727da6d8fe20af12bef&X-Amz-SignedHeaders=host&x-id=GetObject)
