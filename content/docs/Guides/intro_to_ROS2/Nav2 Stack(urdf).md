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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CZUNZ2Q%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T090947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgr%2FFN%2FU3B9VUK4%2FjaoEIJjwaPKqbxR%2FJQuNdF6A6vtgIhAJoBmrq8wBSNotITfV5CF7ERrjzuhvi44usDbNm6R9yKKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxavdAKGBNFsvz5mcoq3AMKfHBgOSMvYbHnWAGgAewNpe6upMp8MOlsw9SF6tJeblCdhS5f8Kp8jUiWKLj3qEdg9P8%2Fc5Q5xDQThRX64iZACOFLqMHwWwCVa33Abad518edY9cGvYeExR%2BjB%2BK7GAhitmNr3blpwFyOb2%2FbZe16hSq4Jo6Ae0QqXqarXR7l%2FqWpB3M7aLksNShSb6zww6USFTrw4Mq593bqToA%2FqeBlFu4mCf7TiyWertlRGli7JcKvwdV7eddFy%2BwYyFXoprR3%2FVuGNiepq%2FdoLp4HOyVqXuBhlrlCVNksmPTx5VbDj884bcQkMJ56Es%2Ff%2BcZ2wyLMzRQTun%2F5gkxtZJiLG3kXp3vpDbOi235poiqa30N3XcWW3vrYJPEhklpbCkeodVfIo7CUlViPWsfVEt0W1QL8W%2BCB9prSM10jGqu9cwIw1i4gqqJowobS1jDuxfx20HGL3R25x%2FWxkcubcw9pPpPCD7BmFqAJHEDSNO88I2VIw6HjS7XUAkVXAzMADWlUjTsZFITIbuxrn0oG25GaxoFjnag8OLCxUFoEh%2Fv3y8qnP1m5XPExq7c%2F%2BRoNUHnDQFI6kAkyTgjKIWfv1XcDemAq37mEndhuvtBVKqXrR0jxtDLw31imZdfTgftSZDCUzpW%2BBjqkAUj%2F5PjlUX%2Fe2FTVWTm%2BQ%2FIcgOPpjO5QAwjzoxGH04iVc0IwSoeD0Ni9QUGcre1D8TBuD%2FksyKpfd9JIksIqVXA4kNENp6YmjCi3N6sA1H4clrmUnDxl%2BFCVl4%2BiFqc6Lmerx9QO3jyDhm8aKqDBC3OtruVlZCx6wuv32BXfgvL1Ej03qGX2z2%2BCF2%2FdCqcGglWoYIPQ1fDHaCGIXjFzeqo%2Be%2FSy&X-Amz-Signature=84859edb3616e1472c9cf2e9f1318a32762cd5cdb3b7d01e126ac2290599c771&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CZUNZ2Q%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T090947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgr%2FFN%2FU3B9VUK4%2FjaoEIJjwaPKqbxR%2FJQuNdF6A6vtgIhAJoBmrq8wBSNotITfV5CF7ERrjzuhvi44usDbNm6R9yKKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxavdAKGBNFsvz5mcoq3AMKfHBgOSMvYbHnWAGgAewNpe6upMp8MOlsw9SF6tJeblCdhS5f8Kp8jUiWKLj3qEdg9P8%2Fc5Q5xDQThRX64iZACOFLqMHwWwCVa33Abad518edY9cGvYeExR%2BjB%2BK7GAhitmNr3blpwFyOb2%2FbZe16hSq4Jo6Ae0QqXqarXR7l%2FqWpB3M7aLksNShSb6zww6USFTrw4Mq593bqToA%2FqeBlFu4mCf7TiyWertlRGli7JcKvwdV7eddFy%2BwYyFXoprR3%2FVuGNiepq%2FdoLp4HOyVqXuBhlrlCVNksmPTx5VbDj884bcQkMJ56Es%2Ff%2BcZ2wyLMzRQTun%2F5gkxtZJiLG3kXp3vpDbOi235poiqa30N3XcWW3vrYJPEhklpbCkeodVfIo7CUlViPWsfVEt0W1QL8W%2BCB9prSM10jGqu9cwIw1i4gqqJowobS1jDuxfx20HGL3R25x%2FWxkcubcw9pPpPCD7BmFqAJHEDSNO88I2VIw6HjS7XUAkVXAzMADWlUjTsZFITIbuxrn0oG25GaxoFjnag8OLCxUFoEh%2Fv3y8qnP1m5XPExq7c%2F%2BRoNUHnDQFI6kAkyTgjKIWfv1XcDemAq37mEndhuvtBVKqXrR0jxtDLw31imZdfTgftSZDCUzpW%2BBjqkAUj%2F5PjlUX%2Fe2FTVWTm%2BQ%2FIcgOPpjO5QAwjzoxGH04iVc0IwSoeD0Ni9QUGcre1D8TBuD%2FksyKpfd9JIksIqVXA4kNENp6YmjCi3N6sA1H4clrmUnDxl%2BFCVl4%2BiFqc6Lmerx9QO3jyDhm8aKqDBC3OtruVlZCx6wuv32BXfgvL1Ej03qGX2z2%2BCF2%2FdCqcGglWoYIPQ1fDHaCGIXjFzeqo%2Be%2FSy&X-Amz-Signature=22fb511d1744ea423c04b175dba37d58e3b9597cda21ac397192c41cd583974b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CZUNZ2Q%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T090947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgr%2FFN%2FU3B9VUK4%2FjaoEIJjwaPKqbxR%2FJQuNdF6A6vtgIhAJoBmrq8wBSNotITfV5CF7ERrjzuhvi44usDbNm6R9yKKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxavdAKGBNFsvz5mcoq3AMKfHBgOSMvYbHnWAGgAewNpe6upMp8MOlsw9SF6tJeblCdhS5f8Kp8jUiWKLj3qEdg9P8%2Fc5Q5xDQThRX64iZACOFLqMHwWwCVa33Abad518edY9cGvYeExR%2BjB%2BK7GAhitmNr3blpwFyOb2%2FbZe16hSq4Jo6Ae0QqXqarXR7l%2FqWpB3M7aLksNShSb6zww6USFTrw4Mq593bqToA%2FqeBlFu4mCf7TiyWertlRGli7JcKvwdV7eddFy%2BwYyFXoprR3%2FVuGNiepq%2FdoLp4HOyVqXuBhlrlCVNksmPTx5VbDj884bcQkMJ56Es%2Ff%2BcZ2wyLMzRQTun%2F5gkxtZJiLG3kXp3vpDbOi235poiqa30N3XcWW3vrYJPEhklpbCkeodVfIo7CUlViPWsfVEt0W1QL8W%2BCB9prSM10jGqu9cwIw1i4gqqJowobS1jDuxfx20HGL3R25x%2FWxkcubcw9pPpPCD7BmFqAJHEDSNO88I2VIw6HjS7XUAkVXAzMADWlUjTsZFITIbuxrn0oG25GaxoFjnag8OLCxUFoEh%2Fv3y8qnP1m5XPExq7c%2F%2BRoNUHnDQFI6kAkyTgjKIWfv1XcDemAq37mEndhuvtBVKqXrR0jxtDLw31imZdfTgftSZDCUzpW%2BBjqkAUj%2F5PjlUX%2Fe2FTVWTm%2BQ%2FIcgOPpjO5QAwjzoxGH04iVc0IwSoeD0Ni9QUGcre1D8TBuD%2FksyKpfd9JIksIqVXA4kNENp6YmjCi3N6sA1H4clrmUnDxl%2BFCVl4%2BiFqc6Lmerx9QO3jyDhm8aKqDBC3OtruVlZCx6wuv32BXfgvL1Ej03qGX2z2%2BCF2%2FdCqcGglWoYIPQ1fDHaCGIXjFzeqo%2Be%2FSy&X-Amz-Signature=2afe2c571bae411ebf86c490bfb343b01d49623c2249367351bbea6728db27a3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CZUNZ2Q%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T090947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgr%2FFN%2FU3B9VUK4%2FjaoEIJjwaPKqbxR%2FJQuNdF6A6vtgIhAJoBmrq8wBSNotITfV5CF7ERrjzuhvi44usDbNm6R9yKKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxavdAKGBNFsvz5mcoq3AMKfHBgOSMvYbHnWAGgAewNpe6upMp8MOlsw9SF6tJeblCdhS5f8Kp8jUiWKLj3qEdg9P8%2Fc5Q5xDQThRX64iZACOFLqMHwWwCVa33Abad518edY9cGvYeExR%2BjB%2BK7GAhitmNr3blpwFyOb2%2FbZe16hSq4Jo6Ae0QqXqarXR7l%2FqWpB3M7aLksNShSb6zww6USFTrw4Mq593bqToA%2FqeBlFu4mCf7TiyWertlRGli7JcKvwdV7eddFy%2BwYyFXoprR3%2FVuGNiepq%2FdoLp4HOyVqXuBhlrlCVNksmPTx5VbDj884bcQkMJ56Es%2Ff%2BcZ2wyLMzRQTun%2F5gkxtZJiLG3kXp3vpDbOi235poiqa30N3XcWW3vrYJPEhklpbCkeodVfIo7CUlViPWsfVEt0W1QL8W%2BCB9prSM10jGqu9cwIw1i4gqqJowobS1jDuxfx20HGL3R25x%2FWxkcubcw9pPpPCD7BmFqAJHEDSNO88I2VIw6HjS7XUAkVXAzMADWlUjTsZFITIbuxrn0oG25GaxoFjnag8OLCxUFoEh%2Fv3y8qnP1m5XPExq7c%2F%2BRoNUHnDQFI6kAkyTgjKIWfv1XcDemAq37mEndhuvtBVKqXrR0jxtDLw31imZdfTgftSZDCUzpW%2BBjqkAUj%2F5PjlUX%2Fe2FTVWTm%2BQ%2FIcgOPpjO5QAwjzoxGH04iVc0IwSoeD0Ni9QUGcre1D8TBuD%2FksyKpfd9JIksIqVXA4kNENp6YmjCi3N6sA1H4clrmUnDxl%2BFCVl4%2BiFqc6Lmerx9QO3jyDhm8aKqDBC3OtruVlZCx6wuv32BXfgvL1Ej03qGX2z2%2BCF2%2FdCqcGglWoYIPQ1fDHaCGIXjFzeqo%2Be%2FSy&X-Amz-Signature=e70c2c035c2a8f704a6ec3721f9594d13a6fcde6a5dd43f7711b12aea9888302&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CZUNZ2Q%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T090947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgr%2FFN%2FU3B9VUK4%2FjaoEIJjwaPKqbxR%2FJQuNdF6A6vtgIhAJoBmrq8wBSNotITfV5CF7ERrjzuhvi44usDbNm6R9yKKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxavdAKGBNFsvz5mcoq3AMKfHBgOSMvYbHnWAGgAewNpe6upMp8MOlsw9SF6tJeblCdhS5f8Kp8jUiWKLj3qEdg9P8%2Fc5Q5xDQThRX64iZACOFLqMHwWwCVa33Abad518edY9cGvYeExR%2BjB%2BK7GAhitmNr3blpwFyOb2%2FbZe16hSq4Jo6Ae0QqXqarXR7l%2FqWpB3M7aLksNShSb6zww6USFTrw4Mq593bqToA%2FqeBlFu4mCf7TiyWertlRGli7JcKvwdV7eddFy%2BwYyFXoprR3%2FVuGNiepq%2FdoLp4HOyVqXuBhlrlCVNksmPTx5VbDj884bcQkMJ56Es%2Ff%2BcZ2wyLMzRQTun%2F5gkxtZJiLG3kXp3vpDbOi235poiqa30N3XcWW3vrYJPEhklpbCkeodVfIo7CUlViPWsfVEt0W1QL8W%2BCB9prSM10jGqu9cwIw1i4gqqJowobS1jDuxfx20HGL3R25x%2FWxkcubcw9pPpPCD7BmFqAJHEDSNO88I2VIw6HjS7XUAkVXAzMADWlUjTsZFITIbuxrn0oG25GaxoFjnag8OLCxUFoEh%2Fv3y8qnP1m5XPExq7c%2F%2BRoNUHnDQFI6kAkyTgjKIWfv1XcDemAq37mEndhuvtBVKqXrR0jxtDLw31imZdfTgftSZDCUzpW%2BBjqkAUj%2F5PjlUX%2Fe2FTVWTm%2BQ%2FIcgOPpjO5QAwjzoxGH04iVc0IwSoeD0Ni9QUGcre1D8TBuD%2FksyKpfd9JIksIqVXA4kNENp6YmjCi3N6sA1H4clrmUnDxl%2BFCVl4%2BiFqc6Lmerx9QO3jyDhm8aKqDBC3OtruVlZCx6wuv32BXfgvL1Ej03qGX2z2%2BCF2%2FdCqcGglWoYIPQ1fDHaCGIXjFzeqo%2Be%2FSy&X-Amz-Signature=6da19f76c3bc0075830bd0c2f6d980960bcd267cdf4e4b4fedd96d60e4d868aa&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CZUNZ2Q%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T090947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgr%2FFN%2FU3B9VUK4%2FjaoEIJjwaPKqbxR%2FJQuNdF6A6vtgIhAJoBmrq8wBSNotITfV5CF7ERrjzuhvi44usDbNm6R9yKKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxavdAKGBNFsvz5mcoq3AMKfHBgOSMvYbHnWAGgAewNpe6upMp8MOlsw9SF6tJeblCdhS5f8Kp8jUiWKLj3qEdg9P8%2Fc5Q5xDQThRX64iZACOFLqMHwWwCVa33Abad518edY9cGvYeExR%2BjB%2BK7GAhitmNr3blpwFyOb2%2FbZe16hSq4Jo6Ae0QqXqarXR7l%2FqWpB3M7aLksNShSb6zww6USFTrw4Mq593bqToA%2FqeBlFu4mCf7TiyWertlRGli7JcKvwdV7eddFy%2BwYyFXoprR3%2FVuGNiepq%2FdoLp4HOyVqXuBhlrlCVNksmPTx5VbDj884bcQkMJ56Es%2Ff%2BcZ2wyLMzRQTun%2F5gkxtZJiLG3kXp3vpDbOi235poiqa30N3XcWW3vrYJPEhklpbCkeodVfIo7CUlViPWsfVEt0W1QL8W%2BCB9prSM10jGqu9cwIw1i4gqqJowobS1jDuxfx20HGL3R25x%2FWxkcubcw9pPpPCD7BmFqAJHEDSNO88I2VIw6HjS7XUAkVXAzMADWlUjTsZFITIbuxrn0oG25GaxoFjnag8OLCxUFoEh%2Fv3y8qnP1m5XPExq7c%2F%2BRoNUHnDQFI6kAkyTgjKIWfv1XcDemAq37mEndhuvtBVKqXrR0jxtDLw31imZdfTgftSZDCUzpW%2BBjqkAUj%2F5PjlUX%2Fe2FTVWTm%2BQ%2FIcgOPpjO5QAwjzoxGH04iVc0IwSoeD0Ni9QUGcre1D8TBuD%2FksyKpfd9JIksIqVXA4kNENp6YmjCi3N6sA1H4clrmUnDxl%2BFCVl4%2BiFqc6Lmerx9QO3jyDhm8aKqDBC3OtruVlZCx6wuv32BXfgvL1Ej03qGX2z2%2BCF2%2FdCqcGglWoYIPQ1fDHaCGIXjFzeqo%2Be%2FSy&X-Amz-Signature=7d5774625278882f64f49788681b6225568b4b66ab435cb7179b02ef421b5c49&X-Amz-SignedHeaders=host&x-id=GetObject)
