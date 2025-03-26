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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R33VXN7T%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEUJ0ZzYD%2BnWjPUbTLYDFyV5VLgAcLNaMsnVI65nhRGwIhAI1myLHcCKfKGKbOAfy0qn4uqHTOaeOUVIqXBRfadxaqKv8DCCsQABoMNjM3NDIzMTgzODA1IgyJ%2BHDby%2B4YOKFbGgoq3APFAGYO6P33Ws7grXOpJB8VEEPPjiZpqtUhJh94wPcwpO86DrYtWH9xSYYwZ%2FyIZEmLcWsea54sN9RBgiECz8B%2F6Cg8BT5HMBLIMWaecDFsueMJoI3aafFQ4lJ3n%2F%2FppWOVIkf8udMxlYnzMysD%2F5Ez0940hLADojqUbqMY3bvC22bSq73TrZBaP%2FM1uYiV8jdUjQBpUXNSCXhfYWYb18pVH7sIXFjNYzdt7SeOCHuFJhbFiY9Q6P%2FTxpI8DjDB%2BOOmI6qn1btTNjKb9%2Fl1L25knferaZbMtKmd1lre%2BijNviXUlTooNetB0gDyVdk%2Fp6qX4K80ni7heGuDSOgnf%2B%2B7uNQkEPOBo%2B28UUAt%2Fpec11ryTM%2BIR3%2FEXm1FRooeS6F%2FUr4kkUMZ9yKEfqTDESxP031ARqQdHDBmAnp9IQeX6pmu8uTO8XtXDjtys%2FvA%2FhTdRY0qbixG6dEovUoXlntKn8bu6gTQiEdRALi6PG51FsxGgLr%2FrDRObJwd%2FTHybwkGViBaiiDIwi4CTgIo3M0aBZoKZuZ8KeoNIsezp5m1uRK7z5X3ptceAb2J5UGeSAg2QOzws1I7czJS4EXTvFmrpVTLn77UVzZPqJdCkewadyLLy3TZ5A4LNIelvzDapo%2B%2FBjqkARMzET8bMdAiCezofxhw0uOshanYEEPM5iD2%2B7e9CjnBUYUxC%2F5YRnAx6UDoXNzOx0umKAj8wPa%2FoSdN9KzUPoJjbejPVeeSXM7wmJycmtIwLt0QbxoyBSBVP1f%2Bd186JEtxXEAg4jwSjbMpgGWkxosh2ifbiGXKgpMOCyeIMjqofPglPoGOR1iDopXVYtjqrqc8vdmQF55J0BH1I3QvlJ1ba4Uh&X-Amz-Signature=d8f3b586c8fd7e0e26bc6014f7726f3fd37a8b2682ec37024d7f216fbbca6989&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R33VXN7T%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEUJ0ZzYD%2BnWjPUbTLYDFyV5VLgAcLNaMsnVI65nhRGwIhAI1myLHcCKfKGKbOAfy0qn4uqHTOaeOUVIqXBRfadxaqKv8DCCsQABoMNjM3NDIzMTgzODA1IgyJ%2BHDby%2B4YOKFbGgoq3APFAGYO6P33Ws7grXOpJB8VEEPPjiZpqtUhJh94wPcwpO86DrYtWH9xSYYwZ%2FyIZEmLcWsea54sN9RBgiECz8B%2F6Cg8BT5HMBLIMWaecDFsueMJoI3aafFQ4lJ3n%2F%2FppWOVIkf8udMxlYnzMysD%2F5Ez0940hLADojqUbqMY3bvC22bSq73TrZBaP%2FM1uYiV8jdUjQBpUXNSCXhfYWYb18pVH7sIXFjNYzdt7SeOCHuFJhbFiY9Q6P%2FTxpI8DjDB%2BOOmI6qn1btTNjKb9%2Fl1L25knferaZbMtKmd1lre%2BijNviXUlTooNetB0gDyVdk%2Fp6qX4K80ni7heGuDSOgnf%2B%2B7uNQkEPOBo%2B28UUAt%2Fpec11ryTM%2BIR3%2FEXm1FRooeS6F%2FUr4kkUMZ9yKEfqTDESxP031ARqQdHDBmAnp9IQeX6pmu8uTO8XtXDjtys%2FvA%2FhTdRY0qbixG6dEovUoXlntKn8bu6gTQiEdRALi6PG51FsxGgLr%2FrDRObJwd%2FTHybwkGViBaiiDIwi4CTgIo3M0aBZoKZuZ8KeoNIsezp5m1uRK7z5X3ptceAb2J5UGeSAg2QOzws1I7czJS4EXTvFmrpVTLn77UVzZPqJdCkewadyLLy3TZ5A4LNIelvzDapo%2B%2FBjqkARMzET8bMdAiCezofxhw0uOshanYEEPM5iD2%2B7e9CjnBUYUxC%2F5YRnAx6UDoXNzOx0umKAj8wPa%2FoSdN9KzUPoJjbejPVeeSXM7wmJycmtIwLt0QbxoyBSBVP1f%2Bd186JEtxXEAg4jwSjbMpgGWkxosh2ifbiGXKgpMOCyeIMjqofPglPoGOR1iDopXVYtjqrqc8vdmQF55J0BH1I3QvlJ1ba4Uh&X-Amz-Signature=ebb78ea6b93b2e2bde01faf8b950ed0b4cdc523494f585b3ad48c33492a3e184&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R33VXN7T%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEUJ0ZzYD%2BnWjPUbTLYDFyV5VLgAcLNaMsnVI65nhRGwIhAI1myLHcCKfKGKbOAfy0qn4uqHTOaeOUVIqXBRfadxaqKv8DCCsQABoMNjM3NDIzMTgzODA1IgyJ%2BHDby%2B4YOKFbGgoq3APFAGYO6P33Ws7grXOpJB8VEEPPjiZpqtUhJh94wPcwpO86DrYtWH9xSYYwZ%2FyIZEmLcWsea54sN9RBgiECz8B%2F6Cg8BT5HMBLIMWaecDFsueMJoI3aafFQ4lJ3n%2F%2FppWOVIkf8udMxlYnzMysD%2F5Ez0940hLADojqUbqMY3bvC22bSq73TrZBaP%2FM1uYiV8jdUjQBpUXNSCXhfYWYb18pVH7sIXFjNYzdt7SeOCHuFJhbFiY9Q6P%2FTxpI8DjDB%2BOOmI6qn1btTNjKb9%2Fl1L25knferaZbMtKmd1lre%2BijNviXUlTooNetB0gDyVdk%2Fp6qX4K80ni7heGuDSOgnf%2B%2B7uNQkEPOBo%2B28UUAt%2Fpec11ryTM%2BIR3%2FEXm1FRooeS6F%2FUr4kkUMZ9yKEfqTDESxP031ARqQdHDBmAnp9IQeX6pmu8uTO8XtXDjtys%2FvA%2FhTdRY0qbixG6dEovUoXlntKn8bu6gTQiEdRALi6PG51FsxGgLr%2FrDRObJwd%2FTHybwkGViBaiiDIwi4CTgIo3M0aBZoKZuZ8KeoNIsezp5m1uRK7z5X3ptceAb2J5UGeSAg2QOzws1I7czJS4EXTvFmrpVTLn77UVzZPqJdCkewadyLLy3TZ5A4LNIelvzDapo%2B%2FBjqkARMzET8bMdAiCezofxhw0uOshanYEEPM5iD2%2B7e9CjnBUYUxC%2F5YRnAx6UDoXNzOx0umKAj8wPa%2FoSdN9KzUPoJjbejPVeeSXM7wmJycmtIwLt0QbxoyBSBVP1f%2Bd186JEtxXEAg4jwSjbMpgGWkxosh2ifbiGXKgpMOCyeIMjqofPglPoGOR1iDopXVYtjqrqc8vdmQF55J0BH1I3QvlJ1ba4Uh&X-Amz-Signature=f8cb6735a646548b4b49ad3acc8bd8ab6dc18d4aa62da6a5e32e864eb5337e6b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R33VXN7T%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEUJ0ZzYD%2BnWjPUbTLYDFyV5VLgAcLNaMsnVI65nhRGwIhAI1myLHcCKfKGKbOAfy0qn4uqHTOaeOUVIqXBRfadxaqKv8DCCsQABoMNjM3NDIzMTgzODA1IgyJ%2BHDby%2B4YOKFbGgoq3APFAGYO6P33Ws7grXOpJB8VEEPPjiZpqtUhJh94wPcwpO86DrYtWH9xSYYwZ%2FyIZEmLcWsea54sN9RBgiECz8B%2F6Cg8BT5HMBLIMWaecDFsueMJoI3aafFQ4lJ3n%2F%2FppWOVIkf8udMxlYnzMysD%2F5Ez0940hLADojqUbqMY3bvC22bSq73TrZBaP%2FM1uYiV8jdUjQBpUXNSCXhfYWYb18pVH7sIXFjNYzdt7SeOCHuFJhbFiY9Q6P%2FTxpI8DjDB%2BOOmI6qn1btTNjKb9%2Fl1L25knferaZbMtKmd1lre%2BijNviXUlTooNetB0gDyVdk%2Fp6qX4K80ni7heGuDSOgnf%2B%2B7uNQkEPOBo%2B28UUAt%2Fpec11ryTM%2BIR3%2FEXm1FRooeS6F%2FUr4kkUMZ9yKEfqTDESxP031ARqQdHDBmAnp9IQeX6pmu8uTO8XtXDjtys%2FvA%2FhTdRY0qbixG6dEovUoXlntKn8bu6gTQiEdRALi6PG51FsxGgLr%2FrDRObJwd%2FTHybwkGViBaiiDIwi4CTgIo3M0aBZoKZuZ8KeoNIsezp5m1uRK7z5X3ptceAb2J5UGeSAg2QOzws1I7czJS4EXTvFmrpVTLn77UVzZPqJdCkewadyLLy3TZ5A4LNIelvzDapo%2B%2FBjqkARMzET8bMdAiCezofxhw0uOshanYEEPM5iD2%2B7e9CjnBUYUxC%2F5YRnAx6UDoXNzOx0umKAj8wPa%2FoSdN9KzUPoJjbejPVeeSXM7wmJycmtIwLt0QbxoyBSBVP1f%2Bd186JEtxXEAg4jwSjbMpgGWkxosh2ifbiGXKgpMOCyeIMjqofPglPoGOR1iDopXVYtjqrqc8vdmQF55J0BH1I3QvlJ1ba4Uh&X-Amz-Signature=c91dd15bb6ce1ae5c0eddf00bc5d71748c050e8e0e7640a300c455c3dd3dccc9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R33VXN7T%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEUJ0ZzYD%2BnWjPUbTLYDFyV5VLgAcLNaMsnVI65nhRGwIhAI1myLHcCKfKGKbOAfy0qn4uqHTOaeOUVIqXBRfadxaqKv8DCCsQABoMNjM3NDIzMTgzODA1IgyJ%2BHDby%2B4YOKFbGgoq3APFAGYO6P33Ws7grXOpJB8VEEPPjiZpqtUhJh94wPcwpO86DrYtWH9xSYYwZ%2FyIZEmLcWsea54sN9RBgiECz8B%2F6Cg8BT5HMBLIMWaecDFsueMJoI3aafFQ4lJ3n%2F%2FppWOVIkf8udMxlYnzMysD%2F5Ez0940hLADojqUbqMY3bvC22bSq73TrZBaP%2FM1uYiV8jdUjQBpUXNSCXhfYWYb18pVH7sIXFjNYzdt7SeOCHuFJhbFiY9Q6P%2FTxpI8DjDB%2BOOmI6qn1btTNjKb9%2Fl1L25knferaZbMtKmd1lre%2BijNviXUlTooNetB0gDyVdk%2Fp6qX4K80ni7heGuDSOgnf%2B%2B7uNQkEPOBo%2B28UUAt%2Fpec11ryTM%2BIR3%2FEXm1FRooeS6F%2FUr4kkUMZ9yKEfqTDESxP031ARqQdHDBmAnp9IQeX6pmu8uTO8XtXDjtys%2FvA%2FhTdRY0qbixG6dEovUoXlntKn8bu6gTQiEdRALi6PG51FsxGgLr%2FrDRObJwd%2FTHybwkGViBaiiDIwi4CTgIo3M0aBZoKZuZ8KeoNIsezp5m1uRK7z5X3ptceAb2J5UGeSAg2QOzws1I7czJS4EXTvFmrpVTLn77UVzZPqJdCkewadyLLy3TZ5A4LNIelvzDapo%2B%2FBjqkARMzET8bMdAiCezofxhw0uOshanYEEPM5iD2%2B7e9CjnBUYUxC%2F5YRnAx6UDoXNzOx0umKAj8wPa%2FoSdN9KzUPoJjbejPVeeSXM7wmJycmtIwLt0QbxoyBSBVP1f%2Bd186JEtxXEAg4jwSjbMpgGWkxosh2ifbiGXKgpMOCyeIMjqofPglPoGOR1iDopXVYtjqrqc8vdmQF55J0BH1I3QvlJ1ba4Uh&X-Amz-Signature=7a75eead9b2fd5dc77ad0a49d7ce6261ab41954b5151be29fec760f74369770a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R33VXN7T%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEUJ0ZzYD%2BnWjPUbTLYDFyV5VLgAcLNaMsnVI65nhRGwIhAI1myLHcCKfKGKbOAfy0qn4uqHTOaeOUVIqXBRfadxaqKv8DCCsQABoMNjM3NDIzMTgzODA1IgyJ%2BHDby%2B4YOKFbGgoq3APFAGYO6P33Ws7grXOpJB8VEEPPjiZpqtUhJh94wPcwpO86DrYtWH9xSYYwZ%2FyIZEmLcWsea54sN9RBgiECz8B%2F6Cg8BT5HMBLIMWaecDFsueMJoI3aafFQ4lJ3n%2F%2FppWOVIkf8udMxlYnzMysD%2F5Ez0940hLADojqUbqMY3bvC22bSq73TrZBaP%2FM1uYiV8jdUjQBpUXNSCXhfYWYb18pVH7sIXFjNYzdt7SeOCHuFJhbFiY9Q6P%2FTxpI8DjDB%2BOOmI6qn1btTNjKb9%2Fl1L25knferaZbMtKmd1lre%2BijNviXUlTooNetB0gDyVdk%2Fp6qX4K80ni7heGuDSOgnf%2B%2B7uNQkEPOBo%2B28UUAt%2Fpec11ryTM%2BIR3%2FEXm1FRooeS6F%2FUr4kkUMZ9yKEfqTDESxP031ARqQdHDBmAnp9IQeX6pmu8uTO8XtXDjtys%2FvA%2FhTdRY0qbixG6dEovUoXlntKn8bu6gTQiEdRALi6PG51FsxGgLr%2FrDRObJwd%2FTHybwkGViBaiiDIwi4CTgIo3M0aBZoKZuZ8KeoNIsezp5m1uRK7z5X3ptceAb2J5UGeSAg2QOzws1I7czJS4EXTvFmrpVTLn77UVzZPqJdCkewadyLLy3TZ5A4LNIelvzDapo%2B%2FBjqkARMzET8bMdAiCezofxhw0uOshanYEEPM5iD2%2B7e9CjnBUYUxC%2F5YRnAx6UDoXNzOx0umKAj8wPa%2FoSdN9KzUPoJjbejPVeeSXM7wmJycmtIwLt0QbxoyBSBVP1f%2Bd186JEtxXEAg4jwSjbMpgGWkxosh2ifbiGXKgpMOCyeIMjqofPglPoGOR1iDopXVYtjqrqc8vdmQF55J0BH1I3QvlJ1ba4Uh&X-Amz-Signature=a5de564f1a42baa6a0dc75fcbc02510a1e9bb0a20dff0e20440444c054113660&X-Amz-SignedHeaders=host&x-id=GetObject)
