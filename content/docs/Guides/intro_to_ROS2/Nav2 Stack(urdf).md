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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DFYGGUW%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4Gm3l3qdLjow8cuxuY1Ung7sBfEdXXyDoc2J4yWaVgQIhALlMJceW5j%2BbO0ug5OOqxQ%2FgK9UkYdJz6B2BKh2QwqPDKv8DCFAQABoMNjM3NDIzMTgzODA1Igxbrw30Jvo0W6S6ji4q3ANX96D23JY2Us3zaLHHA5aLvsAoEnk77ImYBrXpQ9v3e8ue57YnJVag3BYSmvpmzJBJaNlynWFA0lP1021qkTS4yTZEsHuyqUbs6WgvGFIW2mr1uME7K6e8p8N34LowpIdfqccgGMOwb1SRZPoqx8jsuujXnK36xwg0r%2FZ9h8ouCaq9HdSfGv7GvZ7vErK4yPPYrFNI6t1vjggt6iJft7zq54OgDRnmU44AhTGIezxB6%2BWxK%2BrRdySyxzEkox3JBFT69%2BFtUduT4Gngg4VqMZzs2nMRMa3kON5MmTkX4nmUlNab1QPb2Zqv6r8Ijpey73PTiCCpZK21Op9d3fM%2FY4xx8%2FSr3Pgs0pHfQl1TU0PkCj6f40fXx6Rna%2FPXGtx7yPiQJdlXjIkQ7MtfEoQ3osum9mtKAyKsMSo3v8vNc1YMvSJ9ibI1gVGgmGeXzOXLtzoyg53H%2B%2B2VDIiKR5x4Pg4vSWXaPy%2FfzltiYgnVHv1NsoHoV6gzH4MRRkDXtneYnSd%2B3XlF%2BpxvFkXERREIC9C4hSIFDRndZrRUKInIXat3zg%2F8TMaNryc2Da8gRilp5Cyh1JL8vit1kCsS40Sj4A4uURifXb22cybTeJbCN7VrzHAtKCr%2B8W%2FuufdxNDCWope%2FBjqkAauSK3oNVUmDUiSxzATydKeSvf185Qsq1pWLmiDOb9xG5gwArITtCtjZdY9mccPPhWF%2FuJqodtNIUANJb8dbdjH6WmxlkPpQKLgkCC5uB6yiCY0%2FGO3fwoe2ZN2wZbRmaG2xVUqpnLj0Gb5LabpEQdHpxyzO9Ru%2BaWuBAoUQWAqSBL8SxFBDgVYi%2FilzSxNWGUGpZliHdfEz0fBDSihcOYjf8gQI&X-Amz-Signature=210fbda0c30ae597e7e216cc8187df893dbd99c09af8d745249fa225f5c274f1&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DFYGGUW%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4Gm3l3qdLjow8cuxuY1Ung7sBfEdXXyDoc2J4yWaVgQIhALlMJceW5j%2BbO0ug5OOqxQ%2FgK9UkYdJz6B2BKh2QwqPDKv8DCFAQABoMNjM3NDIzMTgzODA1Igxbrw30Jvo0W6S6ji4q3ANX96D23JY2Us3zaLHHA5aLvsAoEnk77ImYBrXpQ9v3e8ue57YnJVag3BYSmvpmzJBJaNlynWFA0lP1021qkTS4yTZEsHuyqUbs6WgvGFIW2mr1uME7K6e8p8N34LowpIdfqccgGMOwb1SRZPoqx8jsuujXnK36xwg0r%2FZ9h8ouCaq9HdSfGv7GvZ7vErK4yPPYrFNI6t1vjggt6iJft7zq54OgDRnmU44AhTGIezxB6%2BWxK%2BrRdySyxzEkox3JBFT69%2BFtUduT4Gngg4VqMZzs2nMRMa3kON5MmTkX4nmUlNab1QPb2Zqv6r8Ijpey73PTiCCpZK21Op9d3fM%2FY4xx8%2FSr3Pgs0pHfQl1TU0PkCj6f40fXx6Rna%2FPXGtx7yPiQJdlXjIkQ7MtfEoQ3osum9mtKAyKsMSo3v8vNc1YMvSJ9ibI1gVGgmGeXzOXLtzoyg53H%2B%2B2VDIiKR5x4Pg4vSWXaPy%2FfzltiYgnVHv1NsoHoV6gzH4MRRkDXtneYnSd%2B3XlF%2BpxvFkXERREIC9C4hSIFDRndZrRUKInIXat3zg%2F8TMaNryc2Da8gRilp5Cyh1JL8vit1kCsS40Sj4A4uURifXb22cybTeJbCN7VrzHAtKCr%2B8W%2FuufdxNDCWope%2FBjqkAauSK3oNVUmDUiSxzATydKeSvf185Qsq1pWLmiDOb9xG5gwArITtCtjZdY9mccPPhWF%2FuJqodtNIUANJb8dbdjH6WmxlkPpQKLgkCC5uB6yiCY0%2FGO3fwoe2ZN2wZbRmaG2xVUqpnLj0Gb5LabpEQdHpxyzO9Ru%2BaWuBAoUQWAqSBL8SxFBDgVYi%2FilzSxNWGUGpZliHdfEz0fBDSihcOYjf8gQI&X-Amz-Signature=71a44bb473e284651adb33e428b6a1210ec3e3ce0d543262508f4e4e0d898e0a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DFYGGUW%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4Gm3l3qdLjow8cuxuY1Ung7sBfEdXXyDoc2J4yWaVgQIhALlMJceW5j%2BbO0ug5OOqxQ%2FgK9UkYdJz6B2BKh2QwqPDKv8DCFAQABoMNjM3NDIzMTgzODA1Igxbrw30Jvo0W6S6ji4q3ANX96D23JY2Us3zaLHHA5aLvsAoEnk77ImYBrXpQ9v3e8ue57YnJVag3BYSmvpmzJBJaNlynWFA0lP1021qkTS4yTZEsHuyqUbs6WgvGFIW2mr1uME7K6e8p8N34LowpIdfqccgGMOwb1SRZPoqx8jsuujXnK36xwg0r%2FZ9h8ouCaq9HdSfGv7GvZ7vErK4yPPYrFNI6t1vjggt6iJft7zq54OgDRnmU44AhTGIezxB6%2BWxK%2BrRdySyxzEkox3JBFT69%2BFtUduT4Gngg4VqMZzs2nMRMa3kON5MmTkX4nmUlNab1QPb2Zqv6r8Ijpey73PTiCCpZK21Op9d3fM%2FY4xx8%2FSr3Pgs0pHfQl1TU0PkCj6f40fXx6Rna%2FPXGtx7yPiQJdlXjIkQ7MtfEoQ3osum9mtKAyKsMSo3v8vNc1YMvSJ9ibI1gVGgmGeXzOXLtzoyg53H%2B%2B2VDIiKR5x4Pg4vSWXaPy%2FfzltiYgnVHv1NsoHoV6gzH4MRRkDXtneYnSd%2B3XlF%2BpxvFkXERREIC9C4hSIFDRndZrRUKInIXat3zg%2F8TMaNryc2Da8gRilp5Cyh1JL8vit1kCsS40Sj4A4uURifXb22cybTeJbCN7VrzHAtKCr%2B8W%2FuufdxNDCWope%2FBjqkAauSK3oNVUmDUiSxzATydKeSvf185Qsq1pWLmiDOb9xG5gwArITtCtjZdY9mccPPhWF%2FuJqodtNIUANJb8dbdjH6WmxlkPpQKLgkCC5uB6yiCY0%2FGO3fwoe2ZN2wZbRmaG2xVUqpnLj0Gb5LabpEQdHpxyzO9Ru%2BaWuBAoUQWAqSBL8SxFBDgVYi%2FilzSxNWGUGpZliHdfEz0fBDSihcOYjf8gQI&X-Amz-Signature=91eefb8a1ddfcebbd52dd60b51efe5f9095fe615c7db8835c8ce88a58ff7f1c7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DFYGGUW%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4Gm3l3qdLjow8cuxuY1Ung7sBfEdXXyDoc2J4yWaVgQIhALlMJceW5j%2BbO0ug5OOqxQ%2FgK9UkYdJz6B2BKh2QwqPDKv8DCFAQABoMNjM3NDIzMTgzODA1Igxbrw30Jvo0W6S6ji4q3ANX96D23JY2Us3zaLHHA5aLvsAoEnk77ImYBrXpQ9v3e8ue57YnJVag3BYSmvpmzJBJaNlynWFA0lP1021qkTS4yTZEsHuyqUbs6WgvGFIW2mr1uME7K6e8p8N34LowpIdfqccgGMOwb1SRZPoqx8jsuujXnK36xwg0r%2FZ9h8ouCaq9HdSfGv7GvZ7vErK4yPPYrFNI6t1vjggt6iJft7zq54OgDRnmU44AhTGIezxB6%2BWxK%2BrRdySyxzEkox3JBFT69%2BFtUduT4Gngg4VqMZzs2nMRMa3kON5MmTkX4nmUlNab1QPb2Zqv6r8Ijpey73PTiCCpZK21Op9d3fM%2FY4xx8%2FSr3Pgs0pHfQl1TU0PkCj6f40fXx6Rna%2FPXGtx7yPiQJdlXjIkQ7MtfEoQ3osum9mtKAyKsMSo3v8vNc1YMvSJ9ibI1gVGgmGeXzOXLtzoyg53H%2B%2B2VDIiKR5x4Pg4vSWXaPy%2FfzltiYgnVHv1NsoHoV6gzH4MRRkDXtneYnSd%2B3XlF%2BpxvFkXERREIC9C4hSIFDRndZrRUKInIXat3zg%2F8TMaNryc2Da8gRilp5Cyh1JL8vit1kCsS40Sj4A4uURifXb22cybTeJbCN7VrzHAtKCr%2B8W%2FuufdxNDCWope%2FBjqkAauSK3oNVUmDUiSxzATydKeSvf185Qsq1pWLmiDOb9xG5gwArITtCtjZdY9mccPPhWF%2FuJqodtNIUANJb8dbdjH6WmxlkPpQKLgkCC5uB6yiCY0%2FGO3fwoe2ZN2wZbRmaG2xVUqpnLj0Gb5LabpEQdHpxyzO9Ru%2BaWuBAoUQWAqSBL8SxFBDgVYi%2FilzSxNWGUGpZliHdfEz0fBDSihcOYjf8gQI&X-Amz-Signature=d92269ef8070919eda04efcb0691a1034b9ae2f2f745a64854b4592a707f6b38&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DFYGGUW%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4Gm3l3qdLjow8cuxuY1Ung7sBfEdXXyDoc2J4yWaVgQIhALlMJceW5j%2BbO0ug5OOqxQ%2FgK9UkYdJz6B2BKh2QwqPDKv8DCFAQABoMNjM3NDIzMTgzODA1Igxbrw30Jvo0W6S6ji4q3ANX96D23JY2Us3zaLHHA5aLvsAoEnk77ImYBrXpQ9v3e8ue57YnJVag3BYSmvpmzJBJaNlynWFA0lP1021qkTS4yTZEsHuyqUbs6WgvGFIW2mr1uME7K6e8p8N34LowpIdfqccgGMOwb1SRZPoqx8jsuujXnK36xwg0r%2FZ9h8ouCaq9HdSfGv7GvZ7vErK4yPPYrFNI6t1vjggt6iJft7zq54OgDRnmU44AhTGIezxB6%2BWxK%2BrRdySyxzEkox3JBFT69%2BFtUduT4Gngg4VqMZzs2nMRMa3kON5MmTkX4nmUlNab1QPb2Zqv6r8Ijpey73PTiCCpZK21Op9d3fM%2FY4xx8%2FSr3Pgs0pHfQl1TU0PkCj6f40fXx6Rna%2FPXGtx7yPiQJdlXjIkQ7MtfEoQ3osum9mtKAyKsMSo3v8vNc1YMvSJ9ibI1gVGgmGeXzOXLtzoyg53H%2B%2B2VDIiKR5x4Pg4vSWXaPy%2FfzltiYgnVHv1NsoHoV6gzH4MRRkDXtneYnSd%2B3XlF%2BpxvFkXERREIC9C4hSIFDRndZrRUKInIXat3zg%2F8TMaNryc2Da8gRilp5Cyh1JL8vit1kCsS40Sj4A4uURifXb22cybTeJbCN7VrzHAtKCr%2B8W%2FuufdxNDCWope%2FBjqkAauSK3oNVUmDUiSxzATydKeSvf185Qsq1pWLmiDOb9xG5gwArITtCtjZdY9mccPPhWF%2FuJqodtNIUANJb8dbdjH6WmxlkPpQKLgkCC5uB6yiCY0%2FGO3fwoe2ZN2wZbRmaG2xVUqpnLj0Gb5LabpEQdHpxyzO9Ru%2BaWuBAoUQWAqSBL8SxFBDgVYi%2FilzSxNWGUGpZliHdfEz0fBDSihcOYjf8gQI&X-Amz-Signature=d060371c4c26f251fef90624ea66268dce8eb0d100dcaeb8dbafbb6094940207&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DFYGGUW%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4Gm3l3qdLjow8cuxuY1Ung7sBfEdXXyDoc2J4yWaVgQIhALlMJceW5j%2BbO0ug5OOqxQ%2FgK9UkYdJz6B2BKh2QwqPDKv8DCFAQABoMNjM3NDIzMTgzODA1Igxbrw30Jvo0W6S6ji4q3ANX96D23JY2Us3zaLHHA5aLvsAoEnk77ImYBrXpQ9v3e8ue57YnJVag3BYSmvpmzJBJaNlynWFA0lP1021qkTS4yTZEsHuyqUbs6WgvGFIW2mr1uME7K6e8p8N34LowpIdfqccgGMOwb1SRZPoqx8jsuujXnK36xwg0r%2FZ9h8ouCaq9HdSfGv7GvZ7vErK4yPPYrFNI6t1vjggt6iJft7zq54OgDRnmU44AhTGIezxB6%2BWxK%2BrRdySyxzEkox3JBFT69%2BFtUduT4Gngg4VqMZzs2nMRMa3kON5MmTkX4nmUlNab1QPb2Zqv6r8Ijpey73PTiCCpZK21Op9d3fM%2FY4xx8%2FSr3Pgs0pHfQl1TU0PkCj6f40fXx6Rna%2FPXGtx7yPiQJdlXjIkQ7MtfEoQ3osum9mtKAyKsMSo3v8vNc1YMvSJ9ibI1gVGgmGeXzOXLtzoyg53H%2B%2B2VDIiKR5x4Pg4vSWXaPy%2FfzltiYgnVHv1NsoHoV6gzH4MRRkDXtneYnSd%2B3XlF%2BpxvFkXERREIC9C4hSIFDRndZrRUKInIXat3zg%2F8TMaNryc2Da8gRilp5Cyh1JL8vit1kCsS40Sj4A4uURifXb22cybTeJbCN7VrzHAtKCr%2B8W%2FuufdxNDCWope%2FBjqkAauSK3oNVUmDUiSxzATydKeSvf185Qsq1pWLmiDOb9xG5gwArITtCtjZdY9mccPPhWF%2FuJqodtNIUANJb8dbdjH6WmxlkPpQKLgkCC5uB6yiCY0%2FGO3fwoe2ZN2wZbRmaG2xVUqpnLj0Gb5LabpEQdHpxyzO9Ru%2BaWuBAoUQWAqSBL8SxFBDgVYi%2FilzSxNWGUGpZliHdfEz0fBDSihcOYjf8gQI&X-Amz-Signature=dc29934d86134c994df30e407c232663945271450276f4f5893b3bdd187f48ea&X-Amz-SignedHeaders=host&x-id=GetObject)
