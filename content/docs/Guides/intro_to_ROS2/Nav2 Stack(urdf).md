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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWNOFHIG%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T170819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BaxWP8Gp%2F8iZbB0TmOK7hbTj%2BYsmYoZw8F0o4js4FggIhANNSv29nXyvVAKeSLst8%2B%2F79%2BXFXd6D7IJnzJZx%2BwTzsKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BDVnlrDlAYs%2F3eMsq3AMMONsxrSArtSPOaUucW1NY8wK%2BSU7Ho9P6AirNi3uVeqrxIAV12DWyJ8YotCXsm0in9jkFapCK%2B5lJfrM5X4VjnOrifkahuzDOs36jVdNrJ98HYpxRtMaouJaFO2sHYT9KqhvZy758r2ayZyfSVspvlvYS0y2dcDkr6bSjnGLiKl9rZn9bYSZQ%2BjmLCft40mnedReBquttuqz1PIG1hUp4nbxptTNcvVYl986A97rMMF4QOb2u%2F6mkVcc1QCCJI%2FOmKFw0AST0HohlIAQAxSkj67PLy3F%2F89ek7hsRt66amf9f0UT5cwTGXzVvpOfACsQt94Y1IlQ4t9WXhTeCL4qfB0VBwhc5wyynPLrgWuz40IZSh3aWk%2FH3pUwqurV5frfitOK11%2BHFCMbiyq6ENC0C1smP4oj%2F0c5uIBrwazWgzcBjlyba9s3jNl1wbtkNVquKOih0iaKsdchVlAQSomQuq1Lk3%2B%2Fax4M7Lu0FAFgVfWdLwjZaFJnZ2vwm%2Fjin0LEv%2FEFUnjYW23SjdZDKExY96pJALdNi%2B6V4HSqWkyL9OLKznoOjyD%2BZQYueqb4dJPHv0ImI5Ka68a870Snw7vIEHg816tqGUYvx29vQegQg3GSmfQJQhly37c1xVDDq8YrDBjqkAcc%2FUj8TxlDbbKKIJP%2FTnTaM%2F%2BfUuu4ElIYqP%2F%2BSAteh5q5h2C7VzA4VYw%2B2wgWrRnvHUv21D0CddEoZ%2Bv5wv6APS%2FaoyOukMma4zUPzUAcefvIK5RKbA%2BmqPMIbr1ggYUanSSDdlQXInIBsMpjNbQU3x6zBzKVd3ItddiHNSHilPh0hXPyzHL5C2TfrTdLl5k8bGIO7HtNRnV3Se%2Br7ZwaXfYZT&X-Amz-Signature=d3c5e7c75ca2e43b9e582118113c81af0a3621a81e55a179ebdca8827ed7e005&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWNOFHIG%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T170819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BaxWP8Gp%2F8iZbB0TmOK7hbTj%2BYsmYoZw8F0o4js4FggIhANNSv29nXyvVAKeSLst8%2B%2F79%2BXFXd6D7IJnzJZx%2BwTzsKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BDVnlrDlAYs%2F3eMsq3AMMONsxrSArtSPOaUucW1NY8wK%2BSU7Ho9P6AirNi3uVeqrxIAV12DWyJ8YotCXsm0in9jkFapCK%2B5lJfrM5X4VjnOrifkahuzDOs36jVdNrJ98HYpxRtMaouJaFO2sHYT9KqhvZy758r2ayZyfSVspvlvYS0y2dcDkr6bSjnGLiKl9rZn9bYSZQ%2BjmLCft40mnedReBquttuqz1PIG1hUp4nbxptTNcvVYl986A97rMMF4QOb2u%2F6mkVcc1QCCJI%2FOmKFw0AST0HohlIAQAxSkj67PLy3F%2F89ek7hsRt66amf9f0UT5cwTGXzVvpOfACsQt94Y1IlQ4t9WXhTeCL4qfB0VBwhc5wyynPLrgWuz40IZSh3aWk%2FH3pUwqurV5frfitOK11%2BHFCMbiyq6ENC0C1smP4oj%2F0c5uIBrwazWgzcBjlyba9s3jNl1wbtkNVquKOih0iaKsdchVlAQSomQuq1Lk3%2B%2Fax4M7Lu0FAFgVfWdLwjZaFJnZ2vwm%2Fjin0LEv%2FEFUnjYW23SjdZDKExY96pJALdNi%2B6V4HSqWkyL9OLKznoOjyD%2BZQYueqb4dJPHv0ImI5Ka68a870Snw7vIEHg816tqGUYvx29vQegQg3GSmfQJQhly37c1xVDDq8YrDBjqkAcc%2FUj8TxlDbbKKIJP%2FTnTaM%2F%2BfUuu4ElIYqP%2F%2BSAteh5q5h2C7VzA4VYw%2B2wgWrRnvHUv21D0CddEoZ%2Bv5wv6APS%2FaoyOukMma4zUPzUAcefvIK5RKbA%2BmqPMIbr1ggYUanSSDdlQXInIBsMpjNbQU3x6zBzKVd3ItddiHNSHilPh0hXPyzHL5C2TfrTdLl5k8bGIO7HtNRnV3Se%2Br7ZwaXfYZT&X-Amz-Signature=7d3bc656a62dc1af4eda5973c092ada952f002bbfe663c0e7744ef4965380421&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWNOFHIG%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T170819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BaxWP8Gp%2F8iZbB0TmOK7hbTj%2BYsmYoZw8F0o4js4FggIhANNSv29nXyvVAKeSLst8%2B%2F79%2BXFXd6D7IJnzJZx%2BwTzsKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BDVnlrDlAYs%2F3eMsq3AMMONsxrSArtSPOaUucW1NY8wK%2BSU7Ho9P6AirNi3uVeqrxIAV12DWyJ8YotCXsm0in9jkFapCK%2B5lJfrM5X4VjnOrifkahuzDOs36jVdNrJ98HYpxRtMaouJaFO2sHYT9KqhvZy758r2ayZyfSVspvlvYS0y2dcDkr6bSjnGLiKl9rZn9bYSZQ%2BjmLCft40mnedReBquttuqz1PIG1hUp4nbxptTNcvVYl986A97rMMF4QOb2u%2F6mkVcc1QCCJI%2FOmKFw0AST0HohlIAQAxSkj67PLy3F%2F89ek7hsRt66amf9f0UT5cwTGXzVvpOfACsQt94Y1IlQ4t9WXhTeCL4qfB0VBwhc5wyynPLrgWuz40IZSh3aWk%2FH3pUwqurV5frfitOK11%2BHFCMbiyq6ENC0C1smP4oj%2F0c5uIBrwazWgzcBjlyba9s3jNl1wbtkNVquKOih0iaKsdchVlAQSomQuq1Lk3%2B%2Fax4M7Lu0FAFgVfWdLwjZaFJnZ2vwm%2Fjin0LEv%2FEFUnjYW23SjdZDKExY96pJALdNi%2B6V4HSqWkyL9OLKznoOjyD%2BZQYueqb4dJPHv0ImI5Ka68a870Snw7vIEHg816tqGUYvx29vQegQg3GSmfQJQhly37c1xVDDq8YrDBjqkAcc%2FUj8TxlDbbKKIJP%2FTnTaM%2F%2BfUuu4ElIYqP%2F%2BSAteh5q5h2C7VzA4VYw%2B2wgWrRnvHUv21D0CddEoZ%2Bv5wv6APS%2FaoyOukMma4zUPzUAcefvIK5RKbA%2BmqPMIbr1ggYUanSSDdlQXInIBsMpjNbQU3x6zBzKVd3ItddiHNSHilPh0hXPyzHL5C2TfrTdLl5k8bGIO7HtNRnV3Se%2Br7ZwaXfYZT&X-Amz-Signature=cd29520678496a0e91b77ed908a73a9f9261ad13eaf7e6f3a52d566ab83a04a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWNOFHIG%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T170819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BaxWP8Gp%2F8iZbB0TmOK7hbTj%2BYsmYoZw8F0o4js4FggIhANNSv29nXyvVAKeSLst8%2B%2F79%2BXFXd6D7IJnzJZx%2BwTzsKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BDVnlrDlAYs%2F3eMsq3AMMONsxrSArtSPOaUucW1NY8wK%2BSU7Ho9P6AirNi3uVeqrxIAV12DWyJ8YotCXsm0in9jkFapCK%2B5lJfrM5X4VjnOrifkahuzDOs36jVdNrJ98HYpxRtMaouJaFO2sHYT9KqhvZy758r2ayZyfSVspvlvYS0y2dcDkr6bSjnGLiKl9rZn9bYSZQ%2BjmLCft40mnedReBquttuqz1PIG1hUp4nbxptTNcvVYl986A97rMMF4QOb2u%2F6mkVcc1QCCJI%2FOmKFw0AST0HohlIAQAxSkj67PLy3F%2F89ek7hsRt66amf9f0UT5cwTGXzVvpOfACsQt94Y1IlQ4t9WXhTeCL4qfB0VBwhc5wyynPLrgWuz40IZSh3aWk%2FH3pUwqurV5frfitOK11%2BHFCMbiyq6ENC0C1smP4oj%2F0c5uIBrwazWgzcBjlyba9s3jNl1wbtkNVquKOih0iaKsdchVlAQSomQuq1Lk3%2B%2Fax4M7Lu0FAFgVfWdLwjZaFJnZ2vwm%2Fjin0LEv%2FEFUnjYW23SjdZDKExY96pJALdNi%2B6V4HSqWkyL9OLKznoOjyD%2BZQYueqb4dJPHv0ImI5Ka68a870Snw7vIEHg816tqGUYvx29vQegQg3GSmfQJQhly37c1xVDDq8YrDBjqkAcc%2FUj8TxlDbbKKIJP%2FTnTaM%2F%2BfUuu4ElIYqP%2F%2BSAteh5q5h2C7VzA4VYw%2B2wgWrRnvHUv21D0CddEoZ%2Bv5wv6APS%2FaoyOukMma4zUPzUAcefvIK5RKbA%2BmqPMIbr1ggYUanSSDdlQXInIBsMpjNbQU3x6zBzKVd3ItddiHNSHilPh0hXPyzHL5C2TfrTdLl5k8bGIO7HtNRnV3Se%2Br7ZwaXfYZT&X-Amz-Signature=b3476f2147be0f42c8ab15a9fdca5c0e862415954839df9c95148fb33aad02fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWNOFHIG%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T170819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BaxWP8Gp%2F8iZbB0TmOK7hbTj%2BYsmYoZw8F0o4js4FggIhANNSv29nXyvVAKeSLst8%2B%2F79%2BXFXd6D7IJnzJZx%2BwTzsKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BDVnlrDlAYs%2F3eMsq3AMMONsxrSArtSPOaUucW1NY8wK%2BSU7Ho9P6AirNi3uVeqrxIAV12DWyJ8YotCXsm0in9jkFapCK%2B5lJfrM5X4VjnOrifkahuzDOs36jVdNrJ98HYpxRtMaouJaFO2sHYT9KqhvZy758r2ayZyfSVspvlvYS0y2dcDkr6bSjnGLiKl9rZn9bYSZQ%2BjmLCft40mnedReBquttuqz1PIG1hUp4nbxptTNcvVYl986A97rMMF4QOb2u%2F6mkVcc1QCCJI%2FOmKFw0AST0HohlIAQAxSkj67PLy3F%2F89ek7hsRt66amf9f0UT5cwTGXzVvpOfACsQt94Y1IlQ4t9WXhTeCL4qfB0VBwhc5wyynPLrgWuz40IZSh3aWk%2FH3pUwqurV5frfitOK11%2BHFCMbiyq6ENC0C1smP4oj%2F0c5uIBrwazWgzcBjlyba9s3jNl1wbtkNVquKOih0iaKsdchVlAQSomQuq1Lk3%2B%2Fax4M7Lu0FAFgVfWdLwjZaFJnZ2vwm%2Fjin0LEv%2FEFUnjYW23SjdZDKExY96pJALdNi%2B6V4HSqWkyL9OLKznoOjyD%2BZQYueqb4dJPHv0ImI5Ka68a870Snw7vIEHg816tqGUYvx29vQegQg3GSmfQJQhly37c1xVDDq8YrDBjqkAcc%2FUj8TxlDbbKKIJP%2FTnTaM%2F%2BfUuu4ElIYqP%2F%2BSAteh5q5h2C7VzA4VYw%2B2wgWrRnvHUv21D0CddEoZ%2Bv5wv6APS%2FaoyOukMma4zUPzUAcefvIK5RKbA%2BmqPMIbr1ggYUanSSDdlQXInIBsMpjNbQU3x6zBzKVd3ItddiHNSHilPh0hXPyzHL5C2TfrTdLl5k8bGIO7HtNRnV3Se%2Br7ZwaXfYZT&X-Amz-Signature=45094e10c746dcfac8274ac8339e27083a1c2599a5bf16e13769bc87d24efad5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWNOFHIG%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T170819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BaxWP8Gp%2F8iZbB0TmOK7hbTj%2BYsmYoZw8F0o4js4FggIhANNSv29nXyvVAKeSLst8%2B%2F79%2BXFXd6D7IJnzJZx%2BwTzsKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2BDVnlrDlAYs%2F3eMsq3AMMONsxrSArtSPOaUucW1NY8wK%2BSU7Ho9P6AirNi3uVeqrxIAV12DWyJ8YotCXsm0in9jkFapCK%2B5lJfrM5X4VjnOrifkahuzDOs36jVdNrJ98HYpxRtMaouJaFO2sHYT9KqhvZy758r2ayZyfSVspvlvYS0y2dcDkr6bSjnGLiKl9rZn9bYSZQ%2BjmLCft40mnedReBquttuqz1PIG1hUp4nbxptTNcvVYl986A97rMMF4QOb2u%2F6mkVcc1QCCJI%2FOmKFw0AST0HohlIAQAxSkj67PLy3F%2F89ek7hsRt66amf9f0UT5cwTGXzVvpOfACsQt94Y1IlQ4t9WXhTeCL4qfB0VBwhc5wyynPLrgWuz40IZSh3aWk%2FH3pUwqurV5frfitOK11%2BHFCMbiyq6ENC0C1smP4oj%2F0c5uIBrwazWgzcBjlyba9s3jNl1wbtkNVquKOih0iaKsdchVlAQSomQuq1Lk3%2B%2Fax4M7Lu0FAFgVfWdLwjZaFJnZ2vwm%2Fjin0LEv%2FEFUnjYW23SjdZDKExY96pJALdNi%2B6V4HSqWkyL9OLKznoOjyD%2BZQYueqb4dJPHv0ImI5Ka68a870Snw7vIEHg816tqGUYvx29vQegQg3GSmfQJQhly37c1xVDDq8YrDBjqkAcc%2FUj8TxlDbbKKIJP%2FTnTaM%2F%2BfUuu4ElIYqP%2F%2BSAteh5q5h2C7VzA4VYw%2B2wgWrRnvHUv21D0CddEoZ%2Bv5wv6APS%2FaoyOukMma4zUPzUAcefvIK5RKbA%2BmqPMIbr1ggYUanSSDdlQXInIBsMpjNbQU3x6zBzKVd3ItddiHNSHilPh0hXPyzHL5C2TfrTdLl5k8bGIO7HtNRnV3Se%2Br7ZwaXfYZT&X-Amz-Signature=38ae82be60a3220adebd786fc44fbb790042943ac949e0de8ac2cc72a3046126&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
