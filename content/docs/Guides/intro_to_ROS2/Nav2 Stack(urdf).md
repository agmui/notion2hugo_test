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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637SXA35N%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T150934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIEan4%2Blv2rUtxua8L9WY3V%2FE604CXIKrdOgTFNgfLuv8AiAZK3IAzDE2I%2BIRoHUKlbbi782enKFwMhWHrJc%2BV89qByr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMGrRs%2B9U7dzjAxmTiKtwD5ANUesCNa32XXelPUfikMhzPqak3S%2FKbeSPy8EAD1AjYvCwOWZpHWE14aBh6%2FIpGYsb%2Fo0qa2Np%2BRuTqcBB8yNNLMKYPU2vss3xwYnxfr4RcwJNtU78eeemZvjhDf5OOAC%2BzY2p3CGEP8z1e9xKSDnoro1x%2BXuHjLfodkiFj2WZPpCFysYwnoN4bdtLKO44VMMQFf7SjDgXtORf5ZkbAWhndNH%2FevHc8HtbfVvbLhmepirUFS1NOELXEca3B4dDuTP8naT1gifHMJLAVChIKpIWJxS0XNQam0Qw%2B7DHtlSYITifSsiX1jJr2eSuW2Mb4CHQXdR%2Bs%2Fus7LOCPyRm6xLa%2BEvr%2FBVtgzn3Je07AfeEvaflg%2FsdY5DjDNAesF1%2F54gb0rmKpT0ZFlOZx%2Ba1DhbAs4PP8eggttqLMQYz7km7JBewDUm2%2BC6CfoPoKNHEKDd1%2FnBC5eCerU4ksJaWaILwfc87HlCDNtxawgBtPsexPDKW8pnqDGSeryXSHHrNk9aF0u9VNlOPa5By7UYXwmp0fnzBBveoBnypFDnnH9buEhDT2pbffh1N5xd7k9JQDlfANNuUb5%2BavbPKYkOqYFZ687TL7%2FpdRjXaO%2F2j9vP7I4H6L0S6arD25d3Ew6e%2BXwQY6pgGxThwyT28Ar2YEJ7aAEd%2BkJ29KbUb3DddBcUpWuy3hOLWN6csXKYMlJm8ZGL%2FXSOYraT3e4mvvvcbVE%2F6YOb1GmgK4kh8gmuyAAkGVFrtny6u7shSKknwVnJkYBqP1Hw5V0ZQ2dIyBIMteZJH2YN5muYz338NmvC1YsY1rpLjhoNmHzdanPL%2FIn%2BpA7xyRrYnAGeLacGAMu5uWHBXZMljAPIYY5hWO&X-Amz-Signature=1b2cd364711b767b69c5d878bcf0d5c4762b05f0a46a947221867c3a0b0bcbd9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637SXA35N%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T150934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIEan4%2Blv2rUtxua8L9WY3V%2FE604CXIKrdOgTFNgfLuv8AiAZK3IAzDE2I%2BIRoHUKlbbi782enKFwMhWHrJc%2BV89qByr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMGrRs%2B9U7dzjAxmTiKtwD5ANUesCNa32XXelPUfikMhzPqak3S%2FKbeSPy8EAD1AjYvCwOWZpHWE14aBh6%2FIpGYsb%2Fo0qa2Np%2BRuTqcBB8yNNLMKYPU2vss3xwYnxfr4RcwJNtU78eeemZvjhDf5OOAC%2BzY2p3CGEP8z1e9xKSDnoro1x%2BXuHjLfodkiFj2WZPpCFysYwnoN4bdtLKO44VMMQFf7SjDgXtORf5ZkbAWhndNH%2FevHc8HtbfVvbLhmepirUFS1NOELXEca3B4dDuTP8naT1gifHMJLAVChIKpIWJxS0XNQam0Qw%2B7DHtlSYITifSsiX1jJr2eSuW2Mb4CHQXdR%2Bs%2Fus7LOCPyRm6xLa%2BEvr%2FBVtgzn3Je07AfeEvaflg%2FsdY5DjDNAesF1%2F54gb0rmKpT0ZFlOZx%2Ba1DhbAs4PP8eggttqLMQYz7km7JBewDUm2%2BC6CfoPoKNHEKDd1%2FnBC5eCerU4ksJaWaILwfc87HlCDNtxawgBtPsexPDKW8pnqDGSeryXSHHrNk9aF0u9VNlOPa5By7UYXwmp0fnzBBveoBnypFDnnH9buEhDT2pbffh1N5xd7k9JQDlfANNuUb5%2BavbPKYkOqYFZ687TL7%2FpdRjXaO%2F2j9vP7I4H6L0S6arD25d3Ew6e%2BXwQY6pgGxThwyT28Ar2YEJ7aAEd%2BkJ29KbUb3DddBcUpWuy3hOLWN6csXKYMlJm8ZGL%2FXSOYraT3e4mvvvcbVE%2F6YOb1GmgK4kh8gmuyAAkGVFrtny6u7shSKknwVnJkYBqP1Hw5V0ZQ2dIyBIMteZJH2YN5muYz338NmvC1YsY1rpLjhoNmHzdanPL%2FIn%2BpA7xyRrYnAGeLacGAMu5uWHBXZMljAPIYY5hWO&X-Amz-Signature=09fd346b0b8199205bb18b2eb7d07b4947cb3f5c3f08b7ec0103eeafa144ae01&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637SXA35N%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T150934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIEan4%2Blv2rUtxua8L9WY3V%2FE604CXIKrdOgTFNgfLuv8AiAZK3IAzDE2I%2BIRoHUKlbbi782enKFwMhWHrJc%2BV89qByr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMGrRs%2B9U7dzjAxmTiKtwD5ANUesCNa32XXelPUfikMhzPqak3S%2FKbeSPy8EAD1AjYvCwOWZpHWE14aBh6%2FIpGYsb%2Fo0qa2Np%2BRuTqcBB8yNNLMKYPU2vss3xwYnxfr4RcwJNtU78eeemZvjhDf5OOAC%2BzY2p3CGEP8z1e9xKSDnoro1x%2BXuHjLfodkiFj2WZPpCFysYwnoN4bdtLKO44VMMQFf7SjDgXtORf5ZkbAWhndNH%2FevHc8HtbfVvbLhmepirUFS1NOELXEca3B4dDuTP8naT1gifHMJLAVChIKpIWJxS0XNQam0Qw%2B7DHtlSYITifSsiX1jJr2eSuW2Mb4CHQXdR%2Bs%2Fus7LOCPyRm6xLa%2BEvr%2FBVtgzn3Je07AfeEvaflg%2FsdY5DjDNAesF1%2F54gb0rmKpT0ZFlOZx%2Ba1DhbAs4PP8eggttqLMQYz7km7JBewDUm2%2BC6CfoPoKNHEKDd1%2FnBC5eCerU4ksJaWaILwfc87HlCDNtxawgBtPsexPDKW8pnqDGSeryXSHHrNk9aF0u9VNlOPa5By7UYXwmp0fnzBBveoBnypFDnnH9buEhDT2pbffh1N5xd7k9JQDlfANNuUb5%2BavbPKYkOqYFZ687TL7%2FpdRjXaO%2F2j9vP7I4H6L0S6arD25d3Ew6e%2BXwQY6pgGxThwyT28Ar2YEJ7aAEd%2BkJ29KbUb3DddBcUpWuy3hOLWN6csXKYMlJm8ZGL%2FXSOYraT3e4mvvvcbVE%2F6YOb1GmgK4kh8gmuyAAkGVFrtny6u7shSKknwVnJkYBqP1Hw5V0ZQ2dIyBIMteZJH2YN5muYz338NmvC1YsY1rpLjhoNmHzdanPL%2FIn%2BpA7xyRrYnAGeLacGAMu5uWHBXZMljAPIYY5hWO&X-Amz-Signature=8ebf64bb66bd2ed63943dcc2843cab1b9d3d2715422afa97ac155d158f0b94f7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637SXA35N%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T150934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIEan4%2Blv2rUtxua8L9WY3V%2FE604CXIKrdOgTFNgfLuv8AiAZK3IAzDE2I%2BIRoHUKlbbi782enKFwMhWHrJc%2BV89qByr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMGrRs%2B9U7dzjAxmTiKtwD5ANUesCNa32XXelPUfikMhzPqak3S%2FKbeSPy8EAD1AjYvCwOWZpHWE14aBh6%2FIpGYsb%2Fo0qa2Np%2BRuTqcBB8yNNLMKYPU2vss3xwYnxfr4RcwJNtU78eeemZvjhDf5OOAC%2BzY2p3CGEP8z1e9xKSDnoro1x%2BXuHjLfodkiFj2WZPpCFysYwnoN4bdtLKO44VMMQFf7SjDgXtORf5ZkbAWhndNH%2FevHc8HtbfVvbLhmepirUFS1NOELXEca3B4dDuTP8naT1gifHMJLAVChIKpIWJxS0XNQam0Qw%2B7DHtlSYITifSsiX1jJr2eSuW2Mb4CHQXdR%2Bs%2Fus7LOCPyRm6xLa%2BEvr%2FBVtgzn3Je07AfeEvaflg%2FsdY5DjDNAesF1%2F54gb0rmKpT0ZFlOZx%2Ba1DhbAs4PP8eggttqLMQYz7km7JBewDUm2%2BC6CfoPoKNHEKDd1%2FnBC5eCerU4ksJaWaILwfc87HlCDNtxawgBtPsexPDKW8pnqDGSeryXSHHrNk9aF0u9VNlOPa5By7UYXwmp0fnzBBveoBnypFDnnH9buEhDT2pbffh1N5xd7k9JQDlfANNuUb5%2BavbPKYkOqYFZ687TL7%2FpdRjXaO%2F2j9vP7I4H6L0S6arD25d3Ew6e%2BXwQY6pgGxThwyT28Ar2YEJ7aAEd%2BkJ29KbUb3DddBcUpWuy3hOLWN6csXKYMlJm8ZGL%2FXSOYraT3e4mvvvcbVE%2F6YOb1GmgK4kh8gmuyAAkGVFrtny6u7shSKknwVnJkYBqP1Hw5V0ZQ2dIyBIMteZJH2YN5muYz338NmvC1YsY1rpLjhoNmHzdanPL%2FIn%2BpA7xyRrYnAGeLacGAMu5uWHBXZMljAPIYY5hWO&X-Amz-Signature=66410cb24cee2efd2fc8155977e075dc3fc6dbedb66283668b9e52058c1abfd7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637SXA35N%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T150934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIEan4%2Blv2rUtxua8L9WY3V%2FE604CXIKrdOgTFNgfLuv8AiAZK3IAzDE2I%2BIRoHUKlbbi782enKFwMhWHrJc%2BV89qByr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMGrRs%2B9U7dzjAxmTiKtwD5ANUesCNa32XXelPUfikMhzPqak3S%2FKbeSPy8EAD1AjYvCwOWZpHWE14aBh6%2FIpGYsb%2Fo0qa2Np%2BRuTqcBB8yNNLMKYPU2vss3xwYnxfr4RcwJNtU78eeemZvjhDf5OOAC%2BzY2p3CGEP8z1e9xKSDnoro1x%2BXuHjLfodkiFj2WZPpCFysYwnoN4bdtLKO44VMMQFf7SjDgXtORf5ZkbAWhndNH%2FevHc8HtbfVvbLhmepirUFS1NOELXEca3B4dDuTP8naT1gifHMJLAVChIKpIWJxS0XNQam0Qw%2B7DHtlSYITifSsiX1jJr2eSuW2Mb4CHQXdR%2Bs%2Fus7LOCPyRm6xLa%2BEvr%2FBVtgzn3Je07AfeEvaflg%2FsdY5DjDNAesF1%2F54gb0rmKpT0ZFlOZx%2Ba1DhbAs4PP8eggttqLMQYz7km7JBewDUm2%2BC6CfoPoKNHEKDd1%2FnBC5eCerU4ksJaWaILwfc87HlCDNtxawgBtPsexPDKW8pnqDGSeryXSHHrNk9aF0u9VNlOPa5By7UYXwmp0fnzBBveoBnypFDnnH9buEhDT2pbffh1N5xd7k9JQDlfANNuUb5%2BavbPKYkOqYFZ687TL7%2FpdRjXaO%2F2j9vP7I4H6L0S6arD25d3Ew6e%2BXwQY6pgGxThwyT28Ar2YEJ7aAEd%2BkJ29KbUb3DddBcUpWuy3hOLWN6csXKYMlJm8ZGL%2FXSOYraT3e4mvvvcbVE%2F6YOb1GmgK4kh8gmuyAAkGVFrtny6u7shSKknwVnJkYBqP1Hw5V0ZQ2dIyBIMteZJH2YN5muYz338NmvC1YsY1rpLjhoNmHzdanPL%2FIn%2BpA7xyRrYnAGeLacGAMu5uWHBXZMljAPIYY5hWO&X-Amz-Signature=f28f4ec18c142859744535a57e78ece4123c62ad24e93999ff4fd01ff4f23ada&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637SXA35N%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T150934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIEan4%2Blv2rUtxua8L9WY3V%2FE604CXIKrdOgTFNgfLuv8AiAZK3IAzDE2I%2BIRoHUKlbbi782enKFwMhWHrJc%2BV89qByr%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMGrRs%2B9U7dzjAxmTiKtwD5ANUesCNa32XXelPUfikMhzPqak3S%2FKbeSPy8EAD1AjYvCwOWZpHWE14aBh6%2FIpGYsb%2Fo0qa2Np%2BRuTqcBB8yNNLMKYPU2vss3xwYnxfr4RcwJNtU78eeemZvjhDf5OOAC%2BzY2p3CGEP8z1e9xKSDnoro1x%2BXuHjLfodkiFj2WZPpCFysYwnoN4bdtLKO44VMMQFf7SjDgXtORf5ZkbAWhndNH%2FevHc8HtbfVvbLhmepirUFS1NOELXEca3B4dDuTP8naT1gifHMJLAVChIKpIWJxS0XNQam0Qw%2B7DHtlSYITifSsiX1jJr2eSuW2Mb4CHQXdR%2Bs%2Fus7LOCPyRm6xLa%2BEvr%2FBVtgzn3Je07AfeEvaflg%2FsdY5DjDNAesF1%2F54gb0rmKpT0ZFlOZx%2Ba1DhbAs4PP8eggttqLMQYz7km7JBewDUm2%2BC6CfoPoKNHEKDd1%2FnBC5eCerU4ksJaWaILwfc87HlCDNtxawgBtPsexPDKW8pnqDGSeryXSHHrNk9aF0u9VNlOPa5By7UYXwmp0fnzBBveoBnypFDnnH9buEhDT2pbffh1N5xd7k9JQDlfANNuUb5%2BavbPKYkOqYFZ687TL7%2FpdRjXaO%2F2j9vP7I4H6L0S6arD25d3Ew6e%2BXwQY6pgGxThwyT28Ar2YEJ7aAEd%2BkJ29KbUb3DddBcUpWuy3hOLWN6csXKYMlJm8ZGL%2FXSOYraT3e4mvvvcbVE%2F6YOb1GmgK4kh8gmuyAAkGVFrtny6u7shSKknwVnJkYBqP1Hw5V0ZQ2dIyBIMteZJH2YN5muYz338NmvC1YsY1rpLjhoNmHzdanPL%2FIn%2BpA7xyRrYnAGeLacGAMu5uWHBXZMljAPIYY5hWO&X-Amz-Signature=f6c005f8be719a7000514d90cf48bee680e47078c49ad38bc0ebfcf799bfb955&X-Amz-SignedHeaders=host&x-id=GetObject)
