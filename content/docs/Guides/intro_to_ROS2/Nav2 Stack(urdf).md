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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DN5N5SD%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T230910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHler3woR8h%2BLDWnHLtW6x%2BB%2BfGEjJnBRMfnjvfxyj0tAiA1k0O6UH%2B0H52xcJ%2FPHYxHHqH4hgbrBzSY4SysJB8CUiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo61tb4DAhO3l2I3wKtwDcjGRqZLxXWEdPsn3T495aNoSwxZp5IwKb%2B%2FKno6yEk3MZnhKRZNqIrZe%2FTGodjJZ0N97iqsZqsyqcZ8G4ncD%2FTImkimk4BFrbImv5FMadxU%2BQrUH5s1bF00s0MWTPRI59qo1pbCHr%2BbGhjbTdoWg3pKVbIgAuW1CdFUWGNyDy8I8eiTjkGxHrZTdKJpoR6iuNV6urW50l%2FfV%2FwFEtam8OMsk3arfFQgHREXU5FibzKdCWFrxCq0%2B3JedrwmFovogawubYcXIVygY37veoYQ43PQg8xB1XmmrHQf24bFlzMlqyj9LCBuMrdbkGghaMIiKJjqtcv5BKAuwDnsTQw%2B0qi9Opy8dzITcKWU%2BHdppSpXBg2Mo3QlgsebLxGtHq3Xp5CrFxGM%2FmbghDv5kIzROaO%2BscQYENHks05PJooD%2BiQKKb%2ButxqnUdmL%2FTaiR0f51cvFs2DJFMQkjuaKaf9OuJmtaWRovXyhc9AXIf0bSIM6q9hbiuv6cYnzchSYAcBdtzTQCzLvWkxVD4uHygM7UcR5PxkC%2Fd6sevfnJrPTtQis%2F7%2FNDKYqME%2F8sqJrjId6nyXGonG%2FCFlxnsEuyoGHcytmQYT60doXVfL2Jc%2BNAcP2Hgi1QuWbkiuLle9MwjuP0wAY6pgH%2BD8qM%2Brmd8bIf16NTZza2VkdZWJaAeIDWpoo7wqrA8paQKPRiosmBb2KptLMFArfL9ES5tk42SDNTwoW9yv2c3jMaNlNXSX0Sy2FbldDfQhKYKakfceSmPcL5pSnt1h4OsM8Cg60EpSB%2FQmKAtIH3UmhDjaSHRc2luPjocGmh0TIAYo8tkA9JV5oZBWOmYhod%2F7z3lcIxIPN8X3eBOSc4z7Cfcz%2Fg&X-Amz-Signature=9a2a7db8d3ce5fc9c1a368b1dee506088f03ac9b0cd2775aeb462a76956c9c04&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DN5N5SD%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T230910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHler3woR8h%2BLDWnHLtW6x%2BB%2BfGEjJnBRMfnjvfxyj0tAiA1k0O6UH%2B0H52xcJ%2FPHYxHHqH4hgbrBzSY4SysJB8CUiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo61tb4DAhO3l2I3wKtwDcjGRqZLxXWEdPsn3T495aNoSwxZp5IwKb%2B%2FKno6yEk3MZnhKRZNqIrZe%2FTGodjJZ0N97iqsZqsyqcZ8G4ncD%2FTImkimk4BFrbImv5FMadxU%2BQrUH5s1bF00s0MWTPRI59qo1pbCHr%2BbGhjbTdoWg3pKVbIgAuW1CdFUWGNyDy8I8eiTjkGxHrZTdKJpoR6iuNV6urW50l%2FfV%2FwFEtam8OMsk3arfFQgHREXU5FibzKdCWFrxCq0%2B3JedrwmFovogawubYcXIVygY37veoYQ43PQg8xB1XmmrHQf24bFlzMlqyj9LCBuMrdbkGghaMIiKJjqtcv5BKAuwDnsTQw%2B0qi9Opy8dzITcKWU%2BHdppSpXBg2Mo3QlgsebLxGtHq3Xp5CrFxGM%2FmbghDv5kIzROaO%2BscQYENHks05PJooD%2BiQKKb%2ButxqnUdmL%2FTaiR0f51cvFs2DJFMQkjuaKaf9OuJmtaWRovXyhc9AXIf0bSIM6q9hbiuv6cYnzchSYAcBdtzTQCzLvWkxVD4uHygM7UcR5PxkC%2Fd6sevfnJrPTtQis%2F7%2FNDKYqME%2F8sqJrjId6nyXGonG%2FCFlxnsEuyoGHcytmQYT60doXVfL2Jc%2BNAcP2Hgi1QuWbkiuLle9MwjuP0wAY6pgH%2BD8qM%2Brmd8bIf16NTZza2VkdZWJaAeIDWpoo7wqrA8paQKPRiosmBb2KptLMFArfL9ES5tk42SDNTwoW9yv2c3jMaNlNXSX0Sy2FbldDfQhKYKakfceSmPcL5pSnt1h4OsM8Cg60EpSB%2FQmKAtIH3UmhDjaSHRc2luPjocGmh0TIAYo8tkA9JV5oZBWOmYhod%2F7z3lcIxIPN8X3eBOSc4z7Cfcz%2Fg&X-Amz-Signature=243f0e5c6e7003936be3016e81d374b8ec2f26c9481d282a202c9d90cf5354b2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DN5N5SD%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T230910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHler3woR8h%2BLDWnHLtW6x%2BB%2BfGEjJnBRMfnjvfxyj0tAiA1k0O6UH%2B0H52xcJ%2FPHYxHHqH4hgbrBzSY4SysJB8CUiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo61tb4DAhO3l2I3wKtwDcjGRqZLxXWEdPsn3T495aNoSwxZp5IwKb%2B%2FKno6yEk3MZnhKRZNqIrZe%2FTGodjJZ0N97iqsZqsyqcZ8G4ncD%2FTImkimk4BFrbImv5FMadxU%2BQrUH5s1bF00s0MWTPRI59qo1pbCHr%2BbGhjbTdoWg3pKVbIgAuW1CdFUWGNyDy8I8eiTjkGxHrZTdKJpoR6iuNV6urW50l%2FfV%2FwFEtam8OMsk3arfFQgHREXU5FibzKdCWFrxCq0%2B3JedrwmFovogawubYcXIVygY37veoYQ43PQg8xB1XmmrHQf24bFlzMlqyj9LCBuMrdbkGghaMIiKJjqtcv5BKAuwDnsTQw%2B0qi9Opy8dzITcKWU%2BHdppSpXBg2Mo3QlgsebLxGtHq3Xp5CrFxGM%2FmbghDv5kIzROaO%2BscQYENHks05PJooD%2BiQKKb%2ButxqnUdmL%2FTaiR0f51cvFs2DJFMQkjuaKaf9OuJmtaWRovXyhc9AXIf0bSIM6q9hbiuv6cYnzchSYAcBdtzTQCzLvWkxVD4uHygM7UcR5PxkC%2Fd6sevfnJrPTtQis%2F7%2FNDKYqME%2F8sqJrjId6nyXGonG%2FCFlxnsEuyoGHcytmQYT60doXVfL2Jc%2BNAcP2Hgi1QuWbkiuLle9MwjuP0wAY6pgH%2BD8qM%2Brmd8bIf16NTZza2VkdZWJaAeIDWpoo7wqrA8paQKPRiosmBb2KptLMFArfL9ES5tk42SDNTwoW9yv2c3jMaNlNXSX0Sy2FbldDfQhKYKakfceSmPcL5pSnt1h4OsM8Cg60EpSB%2FQmKAtIH3UmhDjaSHRc2luPjocGmh0TIAYo8tkA9JV5oZBWOmYhod%2F7z3lcIxIPN8X3eBOSc4z7Cfcz%2Fg&X-Amz-Signature=a2d7c6d34bf500e7f4f64fdf03e4ddf475fdd5ed25bdd702c1121786d5b0eafb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DN5N5SD%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T230910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHler3woR8h%2BLDWnHLtW6x%2BB%2BfGEjJnBRMfnjvfxyj0tAiA1k0O6UH%2B0H52xcJ%2FPHYxHHqH4hgbrBzSY4SysJB8CUiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo61tb4DAhO3l2I3wKtwDcjGRqZLxXWEdPsn3T495aNoSwxZp5IwKb%2B%2FKno6yEk3MZnhKRZNqIrZe%2FTGodjJZ0N97iqsZqsyqcZ8G4ncD%2FTImkimk4BFrbImv5FMadxU%2BQrUH5s1bF00s0MWTPRI59qo1pbCHr%2BbGhjbTdoWg3pKVbIgAuW1CdFUWGNyDy8I8eiTjkGxHrZTdKJpoR6iuNV6urW50l%2FfV%2FwFEtam8OMsk3arfFQgHREXU5FibzKdCWFrxCq0%2B3JedrwmFovogawubYcXIVygY37veoYQ43PQg8xB1XmmrHQf24bFlzMlqyj9LCBuMrdbkGghaMIiKJjqtcv5BKAuwDnsTQw%2B0qi9Opy8dzITcKWU%2BHdppSpXBg2Mo3QlgsebLxGtHq3Xp5CrFxGM%2FmbghDv5kIzROaO%2BscQYENHks05PJooD%2BiQKKb%2ButxqnUdmL%2FTaiR0f51cvFs2DJFMQkjuaKaf9OuJmtaWRovXyhc9AXIf0bSIM6q9hbiuv6cYnzchSYAcBdtzTQCzLvWkxVD4uHygM7UcR5PxkC%2Fd6sevfnJrPTtQis%2F7%2FNDKYqME%2F8sqJrjId6nyXGonG%2FCFlxnsEuyoGHcytmQYT60doXVfL2Jc%2BNAcP2Hgi1QuWbkiuLle9MwjuP0wAY6pgH%2BD8qM%2Brmd8bIf16NTZza2VkdZWJaAeIDWpoo7wqrA8paQKPRiosmBb2KptLMFArfL9ES5tk42SDNTwoW9yv2c3jMaNlNXSX0Sy2FbldDfQhKYKakfceSmPcL5pSnt1h4OsM8Cg60EpSB%2FQmKAtIH3UmhDjaSHRc2luPjocGmh0TIAYo8tkA9JV5oZBWOmYhod%2F7z3lcIxIPN8X3eBOSc4z7Cfcz%2Fg&X-Amz-Signature=10ce9518aee520b88645947ec2f4db57bae327c60143ba53b5f1f74213f7e58e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DN5N5SD%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T230910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHler3woR8h%2BLDWnHLtW6x%2BB%2BfGEjJnBRMfnjvfxyj0tAiA1k0O6UH%2B0H52xcJ%2FPHYxHHqH4hgbrBzSY4SysJB8CUiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo61tb4DAhO3l2I3wKtwDcjGRqZLxXWEdPsn3T495aNoSwxZp5IwKb%2B%2FKno6yEk3MZnhKRZNqIrZe%2FTGodjJZ0N97iqsZqsyqcZ8G4ncD%2FTImkimk4BFrbImv5FMadxU%2BQrUH5s1bF00s0MWTPRI59qo1pbCHr%2BbGhjbTdoWg3pKVbIgAuW1CdFUWGNyDy8I8eiTjkGxHrZTdKJpoR6iuNV6urW50l%2FfV%2FwFEtam8OMsk3arfFQgHREXU5FibzKdCWFrxCq0%2B3JedrwmFovogawubYcXIVygY37veoYQ43PQg8xB1XmmrHQf24bFlzMlqyj9LCBuMrdbkGghaMIiKJjqtcv5BKAuwDnsTQw%2B0qi9Opy8dzITcKWU%2BHdppSpXBg2Mo3QlgsebLxGtHq3Xp5CrFxGM%2FmbghDv5kIzROaO%2BscQYENHks05PJooD%2BiQKKb%2ButxqnUdmL%2FTaiR0f51cvFs2DJFMQkjuaKaf9OuJmtaWRovXyhc9AXIf0bSIM6q9hbiuv6cYnzchSYAcBdtzTQCzLvWkxVD4uHygM7UcR5PxkC%2Fd6sevfnJrPTtQis%2F7%2FNDKYqME%2F8sqJrjId6nyXGonG%2FCFlxnsEuyoGHcytmQYT60doXVfL2Jc%2BNAcP2Hgi1QuWbkiuLle9MwjuP0wAY6pgH%2BD8qM%2Brmd8bIf16NTZza2VkdZWJaAeIDWpoo7wqrA8paQKPRiosmBb2KptLMFArfL9ES5tk42SDNTwoW9yv2c3jMaNlNXSX0Sy2FbldDfQhKYKakfceSmPcL5pSnt1h4OsM8Cg60EpSB%2FQmKAtIH3UmhDjaSHRc2luPjocGmh0TIAYo8tkA9JV5oZBWOmYhod%2F7z3lcIxIPN8X3eBOSc4z7Cfcz%2Fg&X-Amz-Signature=e4e11d6cbe8a18470dbbed6d00902a82a45511e163d12d0d286baa6f0dd2e98b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DN5N5SD%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T230910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHler3woR8h%2BLDWnHLtW6x%2BB%2BfGEjJnBRMfnjvfxyj0tAiA1k0O6UH%2B0H52xcJ%2FPHYxHHqH4hgbrBzSY4SysJB8CUiqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo61tb4DAhO3l2I3wKtwDcjGRqZLxXWEdPsn3T495aNoSwxZp5IwKb%2B%2FKno6yEk3MZnhKRZNqIrZe%2FTGodjJZ0N97iqsZqsyqcZ8G4ncD%2FTImkimk4BFrbImv5FMadxU%2BQrUH5s1bF00s0MWTPRI59qo1pbCHr%2BbGhjbTdoWg3pKVbIgAuW1CdFUWGNyDy8I8eiTjkGxHrZTdKJpoR6iuNV6urW50l%2FfV%2FwFEtam8OMsk3arfFQgHREXU5FibzKdCWFrxCq0%2B3JedrwmFovogawubYcXIVygY37veoYQ43PQg8xB1XmmrHQf24bFlzMlqyj9LCBuMrdbkGghaMIiKJjqtcv5BKAuwDnsTQw%2B0qi9Opy8dzITcKWU%2BHdppSpXBg2Mo3QlgsebLxGtHq3Xp5CrFxGM%2FmbghDv5kIzROaO%2BscQYENHks05PJooD%2BiQKKb%2ButxqnUdmL%2FTaiR0f51cvFs2DJFMQkjuaKaf9OuJmtaWRovXyhc9AXIf0bSIM6q9hbiuv6cYnzchSYAcBdtzTQCzLvWkxVD4uHygM7UcR5PxkC%2Fd6sevfnJrPTtQis%2F7%2FNDKYqME%2F8sqJrjId6nyXGonG%2FCFlxnsEuyoGHcytmQYT60doXVfL2Jc%2BNAcP2Hgi1QuWbkiuLle9MwjuP0wAY6pgH%2BD8qM%2Brmd8bIf16NTZza2VkdZWJaAeIDWpoo7wqrA8paQKPRiosmBb2KptLMFArfL9ES5tk42SDNTwoW9yv2c3jMaNlNXSX0Sy2FbldDfQhKYKakfceSmPcL5pSnt1h4OsM8Cg60EpSB%2FQmKAtIH3UmhDjaSHRc2luPjocGmh0TIAYo8tkA9JV5oZBWOmYhod%2F7z3lcIxIPN8X3eBOSc4z7Cfcz%2Fg&X-Amz-Signature=e0dbf4b1fc5406017355b8f29909852c9b595aca2cdb5e3ae0e31243558ab28c&X-Amz-SignedHeaders=host&x-id=GetObject)
