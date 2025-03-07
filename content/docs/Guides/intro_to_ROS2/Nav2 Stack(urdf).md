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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIFWY4JY%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T003805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzykBOemxzunv%2B0%2F3s6h2edSfmQZDHDn45cp0aLC8x6AIhAIUsKTHOO60Blh5iQX5IkdXvHJ48sfgI0gUPdSPzfeedKv8DCDgQABoMNjM3NDIzMTgzODA1Igxnd8GaD7TKOfutlSoq3AOIKkYoJYSirtW8jRtlSyYgKqnqykNwcsdmbmXFcckhYceicCQirZvi6IBY31ninjJpNnTEv%2B90PLSvnFYxILdR8U8qOjq0vd%2FhAb7u9ISZ44Wez3r0QDNXfozICHjwAQNOPQXxEmthvHiv0lR4238TUoCoDIM7TDA%2FO%2Bs1%2BFev8sE%2BirbJ1feXAPCg5l1Uo%2BGBT5wwD2DLuaJ54aj%2Fq3fGlgGzYEjIdQYyBws3OVtf8YHF5bbLdxXiCWPIMoqTSYzPliDM13vPO8CSQhphU9fxPLUrHMEe%2FNQpZBk5L47bisetw72fA8%2BxobKb6l17JDUpWNznph%2BC3qMItibE%2BMckcRKWXkhkvCFvUiq9BRCA4AqjAx168ffd2cQO8aTt7%2BLHv%2BFwxf2Kuh8FFFjjLatylhy8DZ0s1YmSezDzN37Xu1SS8Qsya2y1xkAi2R%2BP%2FBdzq4RmxXUTZIAVNvMyB5TkYZJNmWBBDJg7TtJSx%2Fhsul1RDmtYTl3XrFhZMAzCfPbFu77DAzwqsGVeNtLx8Ra4Vy5gVfAnEt4xPH1%2FjU7DRBRDVnHuttq5zDY4PQWuK4ah7eHsxlyduclaBo%2FL9ChFpBd5GBasBYx%2FjHjp5LCXcbB8mQvmJrk4SGvFejDCyai%2BBjqkARLShboGRMZchoLTp2ct4udBmBtXEZEGLEoRqNss3zwh1baKZrYIqZnPLHk7YWiTDMt%2FnYF5YF%2FI9G4LccNTAxArn0v8kMTmr5H0sITFV8ZZnzg77I6K1eG4KQ7ZzFBd1FOsPe9YkkQMGCRtq%2BK1SPtFibTt9GwvgRltqKBWEt8QliVLTXKDZlMbwf%2Fk%2FIqYHBoQZL6AjlW%2FtHICb5PPK5G%2BOeK7&X-Amz-Signature=67464e0ac1bfb84e4873770dc90b01159b5127432f547d00833cdce3fcbe4509&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIFWY4JY%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T003805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzykBOemxzunv%2B0%2F3s6h2edSfmQZDHDn45cp0aLC8x6AIhAIUsKTHOO60Blh5iQX5IkdXvHJ48sfgI0gUPdSPzfeedKv8DCDgQABoMNjM3NDIzMTgzODA1Igxnd8GaD7TKOfutlSoq3AOIKkYoJYSirtW8jRtlSyYgKqnqykNwcsdmbmXFcckhYceicCQirZvi6IBY31ninjJpNnTEv%2B90PLSvnFYxILdR8U8qOjq0vd%2FhAb7u9ISZ44Wez3r0QDNXfozICHjwAQNOPQXxEmthvHiv0lR4238TUoCoDIM7TDA%2FO%2Bs1%2BFev8sE%2BirbJ1feXAPCg5l1Uo%2BGBT5wwD2DLuaJ54aj%2Fq3fGlgGzYEjIdQYyBws3OVtf8YHF5bbLdxXiCWPIMoqTSYzPliDM13vPO8CSQhphU9fxPLUrHMEe%2FNQpZBk5L47bisetw72fA8%2BxobKb6l17JDUpWNznph%2BC3qMItibE%2BMckcRKWXkhkvCFvUiq9BRCA4AqjAx168ffd2cQO8aTt7%2BLHv%2BFwxf2Kuh8FFFjjLatylhy8DZ0s1YmSezDzN37Xu1SS8Qsya2y1xkAi2R%2BP%2FBdzq4RmxXUTZIAVNvMyB5TkYZJNmWBBDJg7TtJSx%2Fhsul1RDmtYTl3XrFhZMAzCfPbFu77DAzwqsGVeNtLx8Ra4Vy5gVfAnEt4xPH1%2FjU7DRBRDVnHuttq5zDY4PQWuK4ah7eHsxlyduclaBo%2FL9ChFpBd5GBasBYx%2FjHjp5LCXcbB8mQvmJrk4SGvFejDCyai%2BBjqkARLShboGRMZchoLTp2ct4udBmBtXEZEGLEoRqNss3zwh1baKZrYIqZnPLHk7YWiTDMt%2FnYF5YF%2FI9G4LccNTAxArn0v8kMTmr5H0sITFV8ZZnzg77I6K1eG4KQ7ZzFBd1FOsPe9YkkQMGCRtq%2BK1SPtFibTt9GwvgRltqKBWEt8QliVLTXKDZlMbwf%2Fk%2FIqYHBoQZL6AjlW%2FtHICb5PPK5G%2BOeK7&X-Amz-Signature=3f9df0362861c69283cc913488baf489d3ac12ab8dab5875ccefd85fead4aa33&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIFWY4JY%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T003805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzykBOemxzunv%2B0%2F3s6h2edSfmQZDHDn45cp0aLC8x6AIhAIUsKTHOO60Blh5iQX5IkdXvHJ48sfgI0gUPdSPzfeedKv8DCDgQABoMNjM3NDIzMTgzODA1Igxnd8GaD7TKOfutlSoq3AOIKkYoJYSirtW8jRtlSyYgKqnqykNwcsdmbmXFcckhYceicCQirZvi6IBY31ninjJpNnTEv%2B90PLSvnFYxILdR8U8qOjq0vd%2FhAb7u9ISZ44Wez3r0QDNXfozICHjwAQNOPQXxEmthvHiv0lR4238TUoCoDIM7TDA%2FO%2Bs1%2BFev8sE%2BirbJ1feXAPCg5l1Uo%2BGBT5wwD2DLuaJ54aj%2Fq3fGlgGzYEjIdQYyBws3OVtf8YHF5bbLdxXiCWPIMoqTSYzPliDM13vPO8CSQhphU9fxPLUrHMEe%2FNQpZBk5L47bisetw72fA8%2BxobKb6l17JDUpWNznph%2BC3qMItibE%2BMckcRKWXkhkvCFvUiq9BRCA4AqjAx168ffd2cQO8aTt7%2BLHv%2BFwxf2Kuh8FFFjjLatylhy8DZ0s1YmSezDzN37Xu1SS8Qsya2y1xkAi2R%2BP%2FBdzq4RmxXUTZIAVNvMyB5TkYZJNmWBBDJg7TtJSx%2Fhsul1RDmtYTl3XrFhZMAzCfPbFu77DAzwqsGVeNtLx8Ra4Vy5gVfAnEt4xPH1%2FjU7DRBRDVnHuttq5zDY4PQWuK4ah7eHsxlyduclaBo%2FL9ChFpBd5GBasBYx%2FjHjp5LCXcbB8mQvmJrk4SGvFejDCyai%2BBjqkARLShboGRMZchoLTp2ct4udBmBtXEZEGLEoRqNss3zwh1baKZrYIqZnPLHk7YWiTDMt%2FnYF5YF%2FI9G4LccNTAxArn0v8kMTmr5H0sITFV8ZZnzg77I6K1eG4KQ7ZzFBd1FOsPe9YkkQMGCRtq%2BK1SPtFibTt9GwvgRltqKBWEt8QliVLTXKDZlMbwf%2Fk%2FIqYHBoQZL6AjlW%2FtHICb5PPK5G%2BOeK7&X-Amz-Signature=69bacf3cb3e48b8b96aacaf1a7f282bd505b70a8797c48b3336e1a33a5556835&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIFWY4JY%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T003805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzykBOemxzunv%2B0%2F3s6h2edSfmQZDHDn45cp0aLC8x6AIhAIUsKTHOO60Blh5iQX5IkdXvHJ48sfgI0gUPdSPzfeedKv8DCDgQABoMNjM3NDIzMTgzODA1Igxnd8GaD7TKOfutlSoq3AOIKkYoJYSirtW8jRtlSyYgKqnqykNwcsdmbmXFcckhYceicCQirZvi6IBY31ninjJpNnTEv%2B90PLSvnFYxILdR8U8qOjq0vd%2FhAb7u9ISZ44Wez3r0QDNXfozICHjwAQNOPQXxEmthvHiv0lR4238TUoCoDIM7TDA%2FO%2Bs1%2BFev8sE%2BirbJ1feXAPCg5l1Uo%2BGBT5wwD2DLuaJ54aj%2Fq3fGlgGzYEjIdQYyBws3OVtf8YHF5bbLdxXiCWPIMoqTSYzPliDM13vPO8CSQhphU9fxPLUrHMEe%2FNQpZBk5L47bisetw72fA8%2BxobKb6l17JDUpWNznph%2BC3qMItibE%2BMckcRKWXkhkvCFvUiq9BRCA4AqjAx168ffd2cQO8aTt7%2BLHv%2BFwxf2Kuh8FFFjjLatylhy8DZ0s1YmSezDzN37Xu1SS8Qsya2y1xkAi2R%2BP%2FBdzq4RmxXUTZIAVNvMyB5TkYZJNmWBBDJg7TtJSx%2Fhsul1RDmtYTl3XrFhZMAzCfPbFu77DAzwqsGVeNtLx8Ra4Vy5gVfAnEt4xPH1%2FjU7DRBRDVnHuttq5zDY4PQWuK4ah7eHsxlyduclaBo%2FL9ChFpBd5GBasBYx%2FjHjp5LCXcbB8mQvmJrk4SGvFejDCyai%2BBjqkARLShboGRMZchoLTp2ct4udBmBtXEZEGLEoRqNss3zwh1baKZrYIqZnPLHk7YWiTDMt%2FnYF5YF%2FI9G4LccNTAxArn0v8kMTmr5H0sITFV8ZZnzg77I6K1eG4KQ7ZzFBd1FOsPe9YkkQMGCRtq%2BK1SPtFibTt9GwvgRltqKBWEt8QliVLTXKDZlMbwf%2Fk%2FIqYHBoQZL6AjlW%2FtHICb5PPK5G%2BOeK7&X-Amz-Signature=57fe4df396567e94a88300e03c8222431ad1b5827f7e791a21991061676a9113&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIFWY4JY%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T003805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzykBOemxzunv%2B0%2F3s6h2edSfmQZDHDn45cp0aLC8x6AIhAIUsKTHOO60Blh5iQX5IkdXvHJ48sfgI0gUPdSPzfeedKv8DCDgQABoMNjM3NDIzMTgzODA1Igxnd8GaD7TKOfutlSoq3AOIKkYoJYSirtW8jRtlSyYgKqnqykNwcsdmbmXFcckhYceicCQirZvi6IBY31ninjJpNnTEv%2B90PLSvnFYxILdR8U8qOjq0vd%2FhAb7u9ISZ44Wez3r0QDNXfozICHjwAQNOPQXxEmthvHiv0lR4238TUoCoDIM7TDA%2FO%2Bs1%2BFev8sE%2BirbJ1feXAPCg5l1Uo%2BGBT5wwD2DLuaJ54aj%2Fq3fGlgGzYEjIdQYyBws3OVtf8YHF5bbLdxXiCWPIMoqTSYzPliDM13vPO8CSQhphU9fxPLUrHMEe%2FNQpZBk5L47bisetw72fA8%2BxobKb6l17JDUpWNznph%2BC3qMItibE%2BMckcRKWXkhkvCFvUiq9BRCA4AqjAx168ffd2cQO8aTt7%2BLHv%2BFwxf2Kuh8FFFjjLatylhy8DZ0s1YmSezDzN37Xu1SS8Qsya2y1xkAi2R%2BP%2FBdzq4RmxXUTZIAVNvMyB5TkYZJNmWBBDJg7TtJSx%2Fhsul1RDmtYTl3XrFhZMAzCfPbFu77DAzwqsGVeNtLx8Ra4Vy5gVfAnEt4xPH1%2FjU7DRBRDVnHuttq5zDY4PQWuK4ah7eHsxlyduclaBo%2FL9ChFpBd5GBasBYx%2FjHjp5LCXcbB8mQvmJrk4SGvFejDCyai%2BBjqkARLShboGRMZchoLTp2ct4udBmBtXEZEGLEoRqNss3zwh1baKZrYIqZnPLHk7YWiTDMt%2FnYF5YF%2FI9G4LccNTAxArn0v8kMTmr5H0sITFV8ZZnzg77I6K1eG4KQ7ZzFBd1FOsPe9YkkQMGCRtq%2BK1SPtFibTt9GwvgRltqKBWEt8QliVLTXKDZlMbwf%2Fk%2FIqYHBoQZL6AjlW%2FtHICb5PPK5G%2BOeK7&X-Amz-Signature=1558858d4f71c7605896b21ae655c3b82ae699745ec802ffe713a2c7fc2683fd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIFWY4JY%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T003805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzykBOemxzunv%2B0%2F3s6h2edSfmQZDHDn45cp0aLC8x6AIhAIUsKTHOO60Blh5iQX5IkdXvHJ48sfgI0gUPdSPzfeedKv8DCDgQABoMNjM3NDIzMTgzODA1Igxnd8GaD7TKOfutlSoq3AOIKkYoJYSirtW8jRtlSyYgKqnqykNwcsdmbmXFcckhYceicCQirZvi6IBY31ninjJpNnTEv%2B90PLSvnFYxILdR8U8qOjq0vd%2FhAb7u9ISZ44Wez3r0QDNXfozICHjwAQNOPQXxEmthvHiv0lR4238TUoCoDIM7TDA%2FO%2Bs1%2BFev8sE%2BirbJ1feXAPCg5l1Uo%2BGBT5wwD2DLuaJ54aj%2Fq3fGlgGzYEjIdQYyBws3OVtf8YHF5bbLdxXiCWPIMoqTSYzPliDM13vPO8CSQhphU9fxPLUrHMEe%2FNQpZBk5L47bisetw72fA8%2BxobKb6l17JDUpWNznph%2BC3qMItibE%2BMckcRKWXkhkvCFvUiq9BRCA4AqjAx168ffd2cQO8aTt7%2BLHv%2BFwxf2Kuh8FFFjjLatylhy8DZ0s1YmSezDzN37Xu1SS8Qsya2y1xkAi2R%2BP%2FBdzq4RmxXUTZIAVNvMyB5TkYZJNmWBBDJg7TtJSx%2Fhsul1RDmtYTl3XrFhZMAzCfPbFu77DAzwqsGVeNtLx8Ra4Vy5gVfAnEt4xPH1%2FjU7DRBRDVnHuttq5zDY4PQWuK4ah7eHsxlyduclaBo%2FL9ChFpBd5GBasBYx%2FjHjp5LCXcbB8mQvmJrk4SGvFejDCyai%2BBjqkARLShboGRMZchoLTp2ct4udBmBtXEZEGLEoRqNss3zwh1baKZrYIqZnPLHk7YWiTDMt%2FnYF5YF%2FI9G4LccNTAxArn0v8kMTmr5H0sITFV8ZZnzg77I6K1eG4KQ7ZzFBd1FOsPe9YkkQMGCRtq%2BK1SPtFibTt9GwvgRltqKBWEt8QliVLTXKDZlMbwf%2Fk%2FIqYHBoQZL6AjlW%2FtHICb5PPK5G%2BOeK7&X-Amz-Signature=7d48525e9412f459e5441a508eabd49095f09a001aff803ead8569f9a73b0196&X-Amz-SignedHeaders=host&x-id=GetObject)
