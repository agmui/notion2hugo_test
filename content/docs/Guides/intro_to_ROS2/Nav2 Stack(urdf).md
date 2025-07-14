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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LTWBUYQ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T171057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIBW%2FVNrD8DfhnEqHU7xZ5SshAwgDRsv2%2FoeuziArVEz6AiEAx6GSj1BA6PSd%2FM6DNLdrFcH2gHvQI1MyxcVSLORtZwAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDCghhmC94aETIE1wwSrcAyJthLiwW03yWbO%2Flmlmbm%2FdZoHCwabAXFgCQr%2BrEebvvR1VVnN%2Bg089TAeH7ArEdsixMNBmbVwkqgRItJiQmdrBQZu1Sx4Ks00TnsdYTajS%2FK%2FjxSrXiFWRSP5SfGa0dtOZryygIkiMFQUUgHkslpbIlKi19cJnAgLmGxOdGO3f0BAGlT0O1DJHlpWlY4Dr2f78juzo05Y9VhIwosqvAsa8zlvwKV%2B4q3%2FuF4Kl1la9S4itsGEm97x%2FLlJttAefmxamwQ0YqMsodgmLNVa1ID6GSdbNJ97yfuOD6RXHzvRz9Fi9DD82j09tvlBN9Ghb1hyJfIq89y1YNDzBKqpOL5SeyUhCLNyG19bbhGtv0XuonW%2BqsIY%2FiEQZlhvvOM%2BnkLNiN7riIq9Ine5ZI0b06l9P%2BqmbTKnSfgp%2FHDK7YswUCXgzcckLWPfdaSoQv8vAHBFk7NBIrvqRxVFSrRwS7s1zAU7f4ZhsM6jvt1ihbfekwTL0GnqWnLJ4FHYWkG%2FTIbIrh%2BvZG%2BCsyTTAwOgbJrxgXys2BXQamWI3iMHx05TRwDkQ0Dw4WKYk8NW4hKO7Aa3LphcpcXICwCpSgizgf5UXTBP61x9T5OuaVt4wC0b%2BKtcHjjojS5Wg5tgwMOyE1MMGOqUBtunmdaTvg6fIyPIOl6t6HjWfvVT0rp4VIs8OJkoqmy5%2BdF9SqA9rnRXWiwzYwy1A28MaG2XJm3F7eSBXrH6%2FTwUx23QoqoGlrPSLGCiB3H%2BYYp4Fk07JCi3IS5oQZipkRCB7u5WM6GTP%2BgShRmbWGOcitF%2Be0tCYmMWCKLYaVUGiNWpSI39wgs7SW8I1d6n2vSdYIKNZY6l4SU5dfqTdiACYyA%2BR&X-Amz-Signature=49d1975ece1538df8b7c4aa29c0d4170e7a98f77282415054f73efd01df71f26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LTWBUYQ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T171057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIBW%2FVNrD8DfhnEqHU7xZ5SshAwgDRsv2%2FoeuziArVEz6AiEAx6GSj1BA6PSd%2FM6DNLdrFcH2gHvQI1MyxcVSLORtZwAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDCghhmC94aETIE1wwSrcAyJthLiwW03yWbO%2Flmlmbm%2FdZoHCwabAXFgCQr%2BrEebvvR1VVnN%2Bg089TAeH7ArEdsixMNBmbVwkqgRItJiQmdrBQZu1Sx4Ks00TnsdYTajS%2FK%2FjxSrXiFWRSP5SfGa0dtOZryygIkiMFQUUgHkslpbIlKi19cJnAgLmGxOdGO3f0BAGlT0O1DJHlpWlY4Dr2f78juzo05Y9VhIwosqvAsa8zlvwKV%2B4q3%2FuF4Kl1la9S4itsGEm97x%2FLlJttAefmxamwQ0YqMsodgmLNVa1ID6GSdbNJ97yfuOD6RXHzvRz9Fi9DD82j09tvlBN9Ghb1hyJfIq89y1YNDzBKqpOL5SeyUhCLNyG19bbhGtv0XuonW%2BqsIY%2FiEQZlhvvOM%2BnkLNiN7riIq9Ine5ZI0b06l9P%2BqmbTKnSfgp%2FHDK7YswUCXgzcckLWPfdaSoQv8vAHBFk7NBIrvqRxVFSrRwS7s1zAU7f4ZhsM6jvt1ihbfekwTL0GnqWnLJ4FHYWkG%2FTIbIrh%2BvZG%2BCsyTTAwOgbJrxgXys2BXQamWI3iMHx05TRwDkQ0Dw4WKYk8NW4hKO7Aa3LphcpcXICwCpSgizgf5UXTBP61x9T5OuaVt4wC0b%2BKtcHjjojS5Wg5tgwMOyE1MMGOqUBtunmdaTvg6fIyPIOl6t6HjWfvVT0rp4VIs8OJkoqmy5%2BdF9SqA9rnRXWiwzYwy1A28MaG2XJm3F7eSBXrH6%2FTwUx23QoqoGlrPSLGCiB3H%2BYYp4Fk07JCi3IS5oQZipkRCB7u5WM6GTP%2BgShRmbWGOcitF%2Be0tCYmMWCKLYaVUGiNWpSI39wgs7SW8I1d6n2vSdYIKNZY6l4SU5dfqTdiACYyA%2BR&X-Amz-Signature=57309e43625c1a70da0f881ff92d80d10447f021fd1dc8a1d3e61c3f5d83397e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LTWBUYQ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T171057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIBW%2FVNrD8DfhnEqHU7xZ5SshAwgDRsv2%2FoeuziArVEz6AiEAx6GSj1BA6PSd%2FM6DNLdrFcH2gHvQI1MyxcVSLORtZwAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDCghhmC94aETIE1wwSrcAyJthLiwW03yWbO%2Flmlmbm%2FdZoHCwabAXFgCQr%2BrEebvvR1VVnN%2Bg089TAeH7ArEdsixMNBmbVwkqgRItJiQmdrBQZu1Sx4Ks00TnsdYTajS%2FK%2FjxSrXiFWRSP5SfGa0dtOZryygIkiMFQUUgHkslpbIlKi19cJnAgLmGxOdGO3f0BAGlT0O1DJHlpWlY4Dr2f78juzo05Y9VhIwosqvAsa8zlvwKV%2B4q3%2FuF4Kl1la9S4itsGEm97x%2FLlJttAefmxamwQ0YqMsodgmLNVa1ID6GSdbNJ97yfuOD6RXHzvRz9Fi9DD82j09tvlBN9Ghb1hyJfIq89y1YNDzBKqpOL5SeyUhCLNyG19bbhGtv0XuonW%2BqsIY%2FiEQZlhvvOM%2BnkLNiN7riIq9Ine5ZI0b06l9P%2BqmbTKnSfgp%2FHDK7YswUCXgzcckLWPfdaSoQv8vAHBFk7NBIrvqRxVFSrRwS7s1zAU7f4ZhsM6jvt1ihbfekwTL0GnqWnLJ4FHYWkG%2FTIbIrh%2BvZG%2BCsyTTAwOgbJrxgXys2BXQamWI3iMHx05TRwDkQ0Dw4WKYk8NW4hKO7Aa3LphcpcXICwCpSgizgf5UXTBP61x9T5OuaVt4wC0b%2BKtcHjjojS5Wg5tgwMOyE1MMGOqUBtunmdaTvg6fIyPIOl6t6HjWfvVT0rp4VIs8OJkoqmy5%2BdF9SqA9rnRXWiwzYwy1A28MaG2XJm3F7eSBXrH6%2FTwUx23QoqoGlrPSLGCiB3H%2BYYp4Fk07JCi3IS5oQZipkRCB7u5WM6GTP%2BgShRmbWGOcitF%2Be0tCYmMWCKLYaVUGiNWpSI39wgs7SW8I1d6n2vSdYIKNZY6l4SU5dfqTdiACYyA%2BR&X-Amz-Signature=30df488d4bb05812e95d2063d28c13a7f7310e42ba8bf8747f3bb0acd8b2851d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LTWBUYQ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T171057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIBW%2FVNrD8DfhnEqHU7xZ5SshAwgDRsv2%2FoeuziArVEz6AiEAx6GSj1BA6PSd%2FM6DNLdrFcH2gHvQI1MyxcVSLORtZwAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDCghhmC94aETIE1wwSrcAyJthLiwW03yWbO%2Flmlmbm%2FdZoHCwabAXFgCQr%2BrEebvvR1VVnN%2Bg089TAeH7ArEdsixMNBmbVwkqgRItJiQmdrBQZu1Sx4Ks00TnsdYTajS%2FK%2FjxSrXiFWRSP5SfGa0dtOZryygIkiMFQUUgHkslpbIlKi19cJnAgLmGxOdGO3f0BAGlT0O1DJHlpWlY4Dr2f78juzo05Y9VhIwosqvAsa8zlvwKV%2B4q3%2FuF4Kl1la9S4itsGEm97x%2FLlJttAefmxamwQ0YqMsodgmLNVa1ID6GSdbNJ97yfuOD6RXHzvRz9Fi9DD82j09tvlBN9Ghb1hyJfIq89y1YNDzBKqpOL5SeyUhCLNyG19bbhGtv0XuonW%2BqsIY%2FiEQZlhvvOM%2BnkLNiN7riIq9Ine5ZI0b06l9P%2BqmbTKnSfgp%2FHDK7YswUCXgzcckLWPfdaSoQv8vAHBFk7NBIrvqRxVFSrRwS7s1zAU7f4ZhsM6jvt1ihbfekwTL0GnqWnLJ4FHYWkG%2FTIbIrh%2BvZG%2BCsyTTAwOgbJrxgXys2BXQamWI3iMHx05TRwDkQ0Dw4WKYk8NW4hKO7Aa3LphcpcXICwCpSgizgf5UXTBP61x9T5OuaVt4wC0b%2BKtcHjjojS5Wg5tgwMOyE1MMGOqUBtunmdaTvg6fIyPIOl6t6HjWfvVT0rp4VIs8OJkoqmy5%2BdF9SqA9rnRXWiwzYwy1A28MaG2XJm3F7eSBXrH6%2FTwUx23QoqoGlrPSLGCiB3H%2BYYp4Fk07JCi3IS5oQZipkRCB7u5WM6GTP%2BgShRmbWGOcitF%2Be0tCYmMWCKLYaVUGiNWpSI39wgs7SW8I1d6n2vSdYIKNZY6l4SU5dfqTdiACYyA%2BR&X-Amz-Signature=814e02779ab5b31b44cc1bff9bd07010812418c8e0f9cd9b3b6500c2089d88bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LTWBUYQ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T171057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIBW%2FVNrD8DfhnEqHU7xZ5SshAwgDRsv2%2FoeuziArVEz6AiEAx6GSj1BA6PSd%2FM6DNLdrFcH2gHvQI1MyxcVSLORtZwAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDCghhmC94aETIE1wwSrcAyJthLiwW03yWbO%2Flmlmbm%2FdZoHCwabAXFgCQr%2BrEebvvR1VVnN%2Bg089TAeH7ArEdsixMNBmbVwkqgRItJiQmdrBQZu1Sx4Ks00TnsdYTajS%2FK%2FjxSrXiFWRSP5SfGa0dtOZryygIkiMFQUUgHkslpbIlKi19cJnAgLmGxOdGO3f0BAGlT0O1DJHlpWlY4Dr2f78juzo05Y9VhIwosqvAsa8zlvwKV%2B4q3%2FuF4Kl1la9S4itsGEm97x%2FLlJttAefmxamwQ0YqMsodgmLNVa1ID6GSdbNJ97yfuOD6RXHzvRz9Fi9DD82j09tvlBN9Ghb1hyJfIq89y1YNDzBKqpOL5SeyUhCLNyG19bbhGtv0XuonW%2BqsIY%2FiEQZlhvvOM%2BnkLNiN7riIq9Ine5ZI0b06l9P%2BqmbTKnSfgp%2FHDK7YswUCXgzcckLWPfdaSoQv8vAHBFk7NBIrvqRxVFSrRwS7s1zAU7f4ZhsM6jvt1ihbfekwTL0GnqWnLJ4FHYWkG%2FTIbIrh%2BvZG%2BCsyTTAwOgbJrxgXys2BXQamWI3iMHx05TRwDkQ0Dw4WKYk8NW4hKO7Aa3LphcpcXICwCpSgizgf5UXTBP61x9T5OuaVt4wC0b%2BKtcHjjojS5Wg5tgwMOyE1MMGOqUBtunmdaTvg6fIyPIOl6t6HjWfvVT0rp4VIs8OJkoqmy5%2BdF9SqA9rnRXWiwzYwy1A28MaG2XJm3F7eSBXrH6%2FTwUx23QoqoGlrPSLGCiB3H%2BYYp4Fk07JCi3IS5oQZipkRCB7u5WM6GTP%2BgShRmbWGOcitF%2Be0tCYmMWCKLYaVUGiNWpSI39wgs7SW8I1d6n2vSdYIKNZY6l4SU5dfqTdiACYyA%2BR&X-Amz-Signature=0fa9bbcadac742bfd95c7b10a395e08e1be5ac8e16e5a0bef3716c8347901004&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LTWBUYQ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T171057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIBW%2FVNrD8DfhnEqHU7xZ5SshAwgDRsv2%2FoeuziArVEz6AiEAx6GSj1BA6PSd%2FM6DNLdrFcH2gHvQI1MyxcVSLORtZwAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDCghhmC94aETIE1wwSrcAyJthLiwW03yWbO%2Flmlmbm%2FdZoHCwabAXFgCQr%2BrEebvvR1VVnN%2Bg089TAeH7ArEdsixMNBmbVwkqgRItJiQmdrBQZu1Sx4Ks00TnsdYTajS%2FK%2FjxSrXiFWRSP5SfGa0dtOZryygIkiMFQUUgHkslpbIlKi19cJnAgLmGxOdGO3f0BAGlT0O1DJHlpWlY4Dr2f78juzo05Y9VhIwosqvAsa8zlvwKV%2B4q3%2FuF4Kl1la9S4itsGEm97x%2FLlJttAefmxamwQ0YqMsodgmLNVa1ID6GSdbNJ97yfuOD6RXHzvRz9Fi9DD82j09tvlBN9Ghb1hyJfIq89y1YNDzBKqpOL5SeyUhCLNyG19bbhGtv0XuonW%2BqsIY%2FiEQZlhvvOM%2BnkLNiN7riIq9Ine5ZI0b06l9P%2BqmbTKnSfgp%2FHDK7YswUCXgzcckLWPfdaSoQv8vAHBFk7NBIrvqRxVFSrRwS7s1zAU7f4ZhsM6jvt1ihbfekwTL0GnqWnLJ4FHYWkG%2FTIbIrh%2BvZG%2BCsyTTAwOgbJrxgXys2BXQamWI3iMHx05TRwDkQ0Dw4WKYk8NW4hKO7Aa3LphcpcXICwCpSgizgf5UXTBP61x9T5OuaVt4wC0b%2BKtcHjjojS5Wg5tgwMOyE1MMGOqUBtunmdaTvg6fIyPIOl6t6HjWfvVT0rp4VIs8OJkoqmy5%2BdF9SqA9rnRXWiwzYwy1A28MaG2XJm3F7eSBXrH6%2FTwUx23QoqoGlrPSLGCiB3H%2BYYp4Fk07JCi3IS5oQZipkRCB7u5WM6GTP%2BgShRmbWGOcitF%2Be0tCYmMWCKLYaVUGiNWpSI39wgs7SW8I1d6n2vSdYIKNZY6l4SU5dfqTdiACYyA%2BR&X-Amz-Signature=35968345825f3a8e90a037441f5612285b4430168ea797a8308afb0752684c8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
