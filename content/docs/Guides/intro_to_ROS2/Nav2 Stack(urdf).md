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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDVLN4KJ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T121426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCTqGF8W9ljRQjqxSifF8bzoJEEm0vKNl5%2BxqXrojGXZgIhAIwrbm0FVVkPAtBdTyiKgPmNPQchmPP15vslPjNb1QovKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWEijftxCRFfAlzQEq3APnZiscfg1WPez0vda9E2RYOqKXpU06h5vQP1P3GWkfgSUEIfUDWwiuw64TQIErG0Q0SoQw24Ew6UxLCnSi1M87c3%2FJVhix9yZj7mxr3pQG6bqW3l292EMqrPQP4jTxLQBa65XA4RN1nOcQ6SA6YDB73Sh%2BZ5sVSSPqgVFHxKKmDTv%2BhddGPXqdn46tu90MLYfuMYC%2FH0VsVbp2CFGkbjrI23%2BQ8iwqXWUZwFx7eYCWXpy3DIuaGtnGJrCtERgTsrydK0M0F%2FMjpMzl2D3KhiT63g2IxOYLZJo%2FE%2BypSPNQiCZOnc78JNAhxG%2FXilBRJxT2tq71SG4lywUMJAhI8EffQEW7FF7lasKDJ6Ykxu4kuYZFk7kt3QeK8t6mL41%2FUvyT1w7JF1w849k8xTi91tJ0PpS9Xj9YVNCMBQoiGD6FJE7RuZdkwqgLUP7BzH9jf4OcBIr3MVryy%2BeKFT16HzfPjI4L4K%2Bp5fnj4qG1hNp54In3vTr9hAIbVOvtK2xEeQHKrIe1mPkR9tGRUCu9xleKcGBL%2FRc0IsYdmgEmim1u2CbcLyVpdnXl5RjEcBxg0o%2FE6kPTQzorrzY4%2BqtFIcixddQ5TJd%2Bk8nShdoMRAhql5i62khmxF5xcYKBEDDA3%2FDBBjqkAfsNTGs%2FifEoqmo0BzTMNm3VL6%2BerYLAJZndqCwebgN2c311Q5DRcTDtmtf7mnDnfvSX84XJqYLbcDtP5XEK%2BOJ3Jb%2B7CL3QjPVb3OnYAxPxWRvqsS%2BqK4byhbOggdFf1FOadHD5laLanpEz1DSVwlxbPqizglU9rduK9nVX69xuFmX4zhYalVePZgY48%2FQbkynLT4xIlIGHZn3XkoWo2OzyjZgI&X-Amz-Signature=307e94f055f285dc3a3762373777e42e4b2324b2ee7ba208c6e26cf14f8c06e4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDVLN4KJ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T121426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCTqGF8W9ljRQjqxSifF8bzoJEEm0vKNl5%2BxqXrojGXZgIhAIwrbm0FVVkPAtBdTyiKgPmNPQchmPP15vslPjNb1QovKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWEijftxCRFfAlzQEq3APnZiscfg1WPez0vda9E2RYOqKXpU06h5vQP1P3GWkfgSUEIfUDWwiuw64TQIErG0Q0SoQw24Ew6UxLCnSi1M87c3%2FJVhix9yZj7mxr3pQG6bqW3l292EMqrPQP4jTxLQBa65XA4RN1nOcQ6SA6YDB73Sh%2BZ5sVSSPqgVFHxKKmDTv%2BhddGPXqdn46tu90MLYfuMYC%2FH0VsVbp2CFGkbjrI23%2BQ8iwqXWUZwFx7eYCWXpy3DIuaGtnGJrCtERgTsrydK0M0F%2FMjpMzl2D3KhiT63g2IxOYLZJo%2FE%2BypSPNQiCZOnc78JNAhxG%2FXilBRJxT2tq71SG4lywUMJAhI8EffQEW7FF7lasKDJ6Ykxu4kuYZFk7kt3QeK8t6mL41%2FUvyT1w7JF1w849k8xTi91tJ0PpS9Xj9YVNCMBQoiGD6FJE7RuZdkwqgLUP7BzH9jf4OcBIr3MVryy%2BeKFT16HzfPjI4L4K%2Bp5fnj4qG1hNp54In3vTr9hAIbVOvtK2xEeQHKrIe1mPkR9tGRUCu9xleKcGBL%2FRc0IsYdmgEmim1u2CbcLyVpdnXl5RjEcBxg0o%2FE6kPTQzorrzY4%2BqtFIcixddQ5TJd%2Bk8nShdoMRAhql5i62khmxF5xcYKBEDDA3%2FDBBjqkAfsNTGs%2FifEoqmo0BzTMNm3VL6%2BerYLAJZndqCwebgN2c311Q5DRcTDtmtf7mnDnfvSX84XJqYLbcDtP5XEK%2BOJ3Jb%2B7CL3QjPVb3OnYAxPxWRvqsS%2BqK4byhbOggdFf1FOadHD5laLanpEz1DSVwlxbPqizglU9rduK9nVX69xuFmX4zhYalVePZgY48%2FQbkynLT4xIlIGHZn3XkoWo2OzyjZgI&X-Amz-Signature=25f30e6c574f0d1915cd42958295985f3137f9e9ac49b90c12bd7d108d6ec65a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDVLN4KJ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T121426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCTqGF8W9ljRQjqxSifF8bzoJEEm0vKNl5%2BxqXrojGXZgIhAIwrbm0FVVkPAtBdTyiKgPmNPQchmPP15vslPjNb1QovKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWEijftxCRFfAlzQEq3APnZiscfg1WPez0vda9E2RYOqKXpU06h5vQP1P3GWkfgSUEIfUDWwiuw64TQIErG0Q0SoQw24Ew6UxLCnSi1M87c3%2FJVhix9yZj7mxr3pQG6bqW3l292EMqrPQP4jTxLQBa65XA4RN1nOcQ6SA6YDB73Sh%2BZ5sVSSPqgVFHxKKmDTv%2BhddGPXqdn46tu90MLYfuMYC%2FH0VsVbp2CFGkbjrI23%2BQ8iwqXWUZwFx7eYCWXpy3DIuaGtnGJrCtERgTsrydK0M0F%2FMjpMzl2D3KhiT63g2IxOYLZJo%2FE%2BypSPNQiCZOnc78JNAhxG%2FXilBRJxT2tq71SG4lywUMJAhI8EffQEW7FF7lasKDJ6Ykxu4kuYZFk7kt3QeK8t6mL41%2FUvyT1w7JF1w849k8xTi91tJ0PpS9Xj9YVNCMBQoiGD6FJE7RuZdkwqgLUP7BzH9jf4OcBIr3MVryy%2BeKFT16HzfPjI4L4K%2Bp5fnj4qG1hNp54In3vTr9hAIbVOvtK2xEeQHKrIe1mPkR9tGRUCu9xleKcGBL%2FRc0IsYdmgEmim1u2CbcLyVpdnXl5RjEcBxg0o%2FE6kPTQzorrzY4%2BqtFIcixddQ5TJd%2Bk8nShdoMRAhql5i62khmxF5xcYKBEDDA3%2FDBBjqkAfsNTGs%2FifEoqmo0BzTMNm3VL6%2BerYLAJZndqCwebgN2c311Q5DRcTDtmtf7mnDnfvSX84XJqYLbcDtP5XEK%2BOJ3Jb%2B7CL3QjPVb3OnYAxPxWRvqsS%2BqK4byhbOggdFf1FOadHD5laLanpEz1DSVwlxbPqizglU9rduK9nVX69xuFmX4zhYalVePZgY48%2FQbkynLT4xIlIGHZn3XkoWo2OzyjZgI&X-Amz-Signature=30489377339d066a0d80062c51fc128526f4bd91e1ba070704098787ea807d00&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDVLN4KJ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T121426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCTqGF8W9ljRQjqxSifF8bzoJEEm0vKNl5%2BxqXrojGXZgIhAIwrbm0FVVkPAtBdTyiKgPmNPQchmPP15vslPjNb1QovKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWEijftxCRFfAlzQEq3APnZiscfg1WPez0vda9E2RYOqKXpU06h5vQP1P3GWkfgSUEIfUDWwiuw64TQIErG0Q0SoQw24Ew6UxLCnSi1M87c3%2FJVhix9yZj7mxr3pQG6bqW3l292EMqrPQP4jTxLQBa65XA4RN1nOcQ6SA6YDB73Sh%2BZ5sVSSPqgVFHxKKmDTv%2BhddGPXqdn46tu90MLYfuMYC%2FH0VsVbp2CFGkbjrI23%2BQ8iwqXWUZwFx7eYCWXpy3DIuaGtnGJrCtERgTsrydK0M0F%2FMjpMzl2D3KhiT63g2IxOYLZJo%2FE%2BypSPNQiCZOnc78JNAhxG%2FXilBRJxT2tq71SG4lywUMJAhI8EffQEW7FF7lasKDJ6Ykxu4kuYZFk7kt3QeK8t6mL41%2FUvyT1w7JF1w849k8xTi91tJ0PpS9Xj9YVNCMBQoiGD6FJE7RuZdkwqgLUP7BzH9jf4OcBIr3MVryy%2BeKFT16HzfPjI4L4K%2Bp5fnj4qG1hNp54In3vTr9hAIbVOvtK2xEeQHKrIe1mPkR9tGRUCu9xleKcGBL%2FRc0IsYdmgEmim1u2CbcLyVpdnXl5RjEcBxg0o%2FE6kPTQzorrzY4%2BqtFIcixddQ5TJd%2Bk8nShdoMRAhql5i62khmxF5xcYKBEDDA3%2FDBBjqkAfsNTGs%2FifEoqmo0BzTMNm3VL6%2BerYLAJZndqCwebgN2c311Q5DRcTDtmtf7mnDnfvSX84XJqYLbcDtP5XEK%2BOJ3Jb%2B7CL3QjPVb3OnYAxPxWRvqsS%2BqK4byhbOggdFf1FOadHD5laLanpEz1DSVwlxbPqizglU9rduK9nVX69xuFmX4zhYalVePZgY48%2FQbkynLT4xIlIGHZn3XkoWo2OzyjZgI&X-Amz-Signature=7d6a63f55ff7da07bbaa84fa8f62d82f9296150a3ebaf9dba85cfd3225571057&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDVLN4KJ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T121426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCTqGF8W9ljRQjqxSifF8bzoJEEm0vKNl5%2BxqXrojGXZgIhAIwrbm0FVVkPAtBdTyiKgPmNPQchmPP15vslPjNb1QovKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWEijftxCRFfAlzQEq3APnZiscfg1WPez0vda9E2RYOqKXpU06h5vQP1P3GWkfgSUEIfUDWwiuw64TQIErG0Q0SoQw24Ew6UxLCnSi1M87c3%2FJVhix9yZj7mxr3pQG6bqW3l292EMqrPQP4jTxLQBa65XA4RN1nOcQ6SA6YDB73Sh%2BZ5sVSSPqgVFHxKKmDTv%2BhddGPXqdn46tu90MLYfuMYC%2FH0VsVbp2CFGkbjrI23%2BQ8iwqXWUZwFx7eYCWXpy3DIuaGtnGJrCtERgTsrydK0M0F%2FMjpMzl2D3KhiT63g2IxOYLZJo%2FE%2BypSPNQiCZOnc78JNAhxG%2FXilBRJxT2tq71SG4lywUMJAhI8EffQEW7FF7lasKDJ6Ykxu4kuYZFk7kt3QeK8t6mL41%2FUvyT1w7JF1w849k8xTi91tJ0PpS9Xj9YVNCMBQoiGD6FJE7RuZdkwqgLUP7BzH9jf4OcBIr3MVryy%2BeKFT16HzfPjI4L4K%2Bp5fnj4qG1hNp54In3vTr9hAIbVOvtK2xEeQHKrIe1mPkR9tGRUCu9xleKcGBL%2FRc0IsYdmgEmim1u2CbcLyVpdnXl5RjEcBxg0o%2FE6kPTQzorrzY4%2BqtFIcixddQ5TJd%2Bk8nShdoMRAhql5i62khmxF5xcYKBEDDA3%2FDBBjqkAfsNTGs%2FifEoqmo0BzTMNm3VL6%2BerYLAJZndqCwebgN2c311Q5DRcTDtmtf7mnDnfvSX84XJqYLbcDtP5XEK%2BOJ3Jb%2B7CL3QjPVb3OnYAxPxWRvqsS%2BqK4byhbOggdFf1FOadHD5laLanpEz1DSVwlxbPqizglU9rduK9nVX69xuFmX4zhYalVePZgY48%2FQbkynLT4xIlIGHZn3XkoWo2OzyjZgI&X-Amz-Signature=e9d93c1d81db59276fd46d0d0ff358c15f4cd31cb99b87b755e8f008847e591d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDVLN4KJ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T121426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCTqGF8W9ljRQjqxSifF8bzoJEEm0vKNl5%2BxqXrojGXZgIhAIwrbm0FVVkPAtBdTyiKgPmNPQchmPP15vslPjNb1QovKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWEijftxCRFfAlzQEq3APnZiscfg1WPez0vda9E2RYOqKXpU06h5vQP1P3GWkfgSUEIfUDWwiuw64TQIErG0Q0SoQw24Ew6UxLCnSi1M87c3%2FJVhix9yZj7mxr3pQG6bqW3l292EMqrPQP4jTxLQBa65XA4RN1nOcQ6SA6YDB73Sh%2BZ5sVSSPqgVFHxKKmDTv%2BhddGPXqdn46tu90MLYfuMYC%2FH0VsVbp2CFGkbjrI23%2BQ8iwqXWUZwFx7eYCWXpy3DIuaGtnGJrCtERgTsrydK0M0F%2FMjpMzl2D3KhiT63g2IxOYLZJo%2FE%2BypSPNQiCZOnc78JNAhxG%2FXilBRJxT2tq71SG4lywUMJAhI8EffQEW7FF7lasKDJ6Ykxu4kuYZFk7kt3QeK8t6mL41%2FUvyT1w7JF1w849k8xTi91tJ0PpS9Xj9YVNCMBQoiGD6FJE7RuZdkwqgLUP7BzH9jf4OcBIr3MVryy%2BeKFT16HzfPjI4L4K%2Bp5fnj4qG1hNp54In3vTr9hAIbVOvtK2xEeQHKrIe1mPkR9tGRUCu9xleKcGBL%2FRc0IsYdmgEmim1u2CbcLyVpdnXl5RjEcBxg0o%2FE6kPTQzorrzY4%2BqtFIcixddQ5TJd%2Bk8nShdoMRAhql5i62khmxF5xcYKBEDDA3%2FDBBjqkAfsNTGs%2FifEoqmo0BzTMNm3VL6%2BerYLAJZndqCwebgN2c311Q5DRcTDtmtf7mnDnfvSX84XJqYLbcDtP5XEK%2BOJ3Jb%2B7CL3QjPVb3OnYAxPxWRvqsS%2BqK4byhbOggdFf1FOadHD5laLanpEz1DSVwlxbPqizglU9rduK9nVX69xuFmX4zhYalVePZgY48%2FQbkynLT4xIlIGHZn3XkoWo2OzyjZgI&X-Amz-Signature=08d6f37793d5ac0f59e74a605fafdd5dc0243050855af102435b210231e325e6&X-Amz-SignedHeaders=host&x-id=GetObject)
