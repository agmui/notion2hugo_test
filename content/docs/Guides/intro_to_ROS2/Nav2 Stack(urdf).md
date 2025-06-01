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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664NDS5JK%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCICMjBk2Ln4Ocyu012pMrgESpO8fntFKsyNwTKji19jJvAiBrPdI0B5L1dr1Oqfdirj6C4uM7%2BIAW2XAosF3qMZ%2BhcSqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1C1gsAC97x1AnObkKtwDGoy92Oz3rv50ebx42PQEOYT1FB96ksQUDLtYZg99GhIkR7WC%2BEUivhmQzS9mXwjHF4aVMVNV4dK9MjYD2ckHh92A1Njkg68QzVEoFVtY%2FF5eOGfCdYRCp5mpN%2FN38Dj5wkvXK5IErkz3xXJmhw6QvTYjHJmyswVRexi8YAYajothMcFuU2BlWlssYV0Oz820o9ciw9yd7GVUC1d0Sdd%2BCVSaUy8hf59R1ydWe%2FGu6eVyM8KcSBYkJJIUSb7Ccv5PISA9yysmMZZeWN%2BabRht8IRutB4PRoZ2y1Etl6YJzwnB5bVvTwH2FU7iRo1%2Br8R%2BGK%2BBK3hJvUQRbSNdpzzTx5n8wQLk8TMNEs4IeAFxYINfOcLQPQ1AKXsxRNpTTaEKJRaKo6CuFass8NfQE36euXLb9mdM8bpAu%2FBquz%2B406G8UNz0HtRJ%2F1be%2F8on929YFrmWzYdVEUSFAEGrTJtIFWtbrUo07EW%2F8VBXz0TPQEsEID4rOx3KO948Av6wbctLkG0kPrkA7npC4g32TNE8meiKyJFrJT3n%2F%2BhK25aq5xym0abiOf0pxBQPsW9Tozx7sMnX1i%2BOIwGZe0hZlUWsz%2FvUFru8FpUMbUMuOE9T2289iEWZhTOV0zFcge0w6oXxwQY6pgG%2FSmB%2FRIVWJfXR5k8D9sopHRiG3VFdk00Sb4rt1eGnG%2F8JZzeRejnuhuTGiP%2Bx5AHVWR7qkQZSPKcTx8PH3AYHnMcJCw8FC3m7cSmtsvOdY01pdVdhsVF0nz0IUVj8llJpT%2FMF3iwUSnlCBlAKDB7%2FR5De%2Btku1ailxVzGSBp%2BRv17grdR2Lf7L6HhIfiFIM31dkSt2DLJ6TeiYPVZS9WIibNutuSd&X-Amz-Signature=2cff63f545871a30744e7f39a5097a84ccc152426b0e5c9eee02c2c2a80807ff&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664NDS5JK%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCICMjBk2Ln4Ocyu012pMrgESpO8fntFKsyNwTKji19jJvAiBrPdI0B5L1dr1Oqfdirj6C4uM7%2BIAW2XAosF3qMZ%2BhcSqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1C1gsAC97x1AnObkKtwDGoy92Oz3rv50ebx42PQEOYT1FB96ksQUDLtYZg99GhIkR7WC%2BEUivhmQzS9mXwjHF4aVMVNV4dK9MjYD2ckHh92A1Njkg68QzVEoFVtY%2FF5eOGfCdYRCp5mpN%2FN38Dj5wkvXK5IErkz3xXJmhw6QvTYjHJmyswVRexi8YAYajothMcFuU2BlWlssYV0Oz820o9ciw9yd7GVUC1d0Sdd%2BCVSaUy8hf59R1ydWe%2FGu6eVyM8KcSBYkJJIUSb7Ccv5PISA9yysmMZZeWN%2BabRht8IRutB4PRoZ2y1Etl6YJzwnB5bVvTwH2FU7iRo1%2Br8R%2BGK%2BBK3hJvUQRbSNdpzzTx5n8wQLk8TMNEs4IeAFxYINfOcLQPQ1AKXsxRNpTTaEKJRaKo6CuFass8NfQE36euXLb9mdM8bpAu%2FBquz%2B406G8UNz0HtRJ%2F1be%2F8on929YFrmWzYdVEUSFAEGrTJtIFWtbrUo07EW%2F8VBXz0TPQEsEID4rOx3KO948Av6wbctLkG0kPrkA7npC4g32TNE8meiKyJFrJT3n%2F%2BhK25aq5xym0abiOf0pxBQPsW9Tozx7sMnX1i%2BOIwGZe0hZlUWsz%2FvUFru8FpUMbUMuOE9T2289iEWZhTOV0zFcge0w6oXxwQY6pgG%2FSmB%2FRIVWJfXR5k8D9sopHRiG3VFdk00Sb4rt1eGnG%2F8JZzeRejnuhuTGiP%2Bx5AHVWR7qkQZSPKcTx8PH3AYHnMcJCw8FC3m7cSmtsvOdY01pdVdhsVF0nz0IUVj8llJpT%2FMF3iwUSnlCBlAKDB7%2FR5De%2Btku1ailxVzGSBp%2BRv17grdR2Lf7L6HhIfiFIM31dkSt2DLJ6TeiYPVZS9WIibNutuSd&X-Amz-Signature=fa0ce3e511b5b339f01d95007a88b34641367fdd3b2ff9d37848f20fbc667b41&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664NDS5JK%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCICMjBk2Ln4Ocyu012pMrgESpO8fntFKsyNwTKji19jJvAiBrPdI0B5L1dr1Oqfdirj6C4uM7%2BIAW2XAosF3qMZ%2BhcSqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1C1gsAC97x1AnObkKtwDGoy92Oz3rv50ebx42PQEOYT1FB96ksQUDLtYZg99GhIkR7WC%2BEUivhmQzS9mXwjHF4aVMVNV4dK9MjYD2ckHh92A1Njkg68QzVEoFVtY%2FF5eOGfCdYRCp5mpN%2FN38Dj5wkvXK5IErkz3xXJmhw6QvTYjHJmyswVRexi8YAYajothMcFuU2BlWlssYV0Oz820o9ciw9yd7GVUC1d0Sdd%2BCVSaUy8hf59R1ydWe%2FGu6eVyM8KcSBYkJJIUSb7Ccv5PISA9yysmMZZeWN%2BabRht8IRutB4PRoZ2y1Etl6YJzwnB5bVvTwH2FU7iRo1%2Br8R%2BGK%2BBK3hJvUQRbSNdpzzTx5n8wQLk8TMNEs4IeAFxYINfOcLQPQ1AKXsxRNpTTaEKJRaKo6CuFass8NfQE36euXLb9mdM8bpAu%2FBquz%2B406G8UNz0HtRJ%2F1be%2F8on929YFrmWzYdVEUSFAEGrTJtIFWtbrUo07EW%2F8VBXz0TPQEsEID4rOx3KO948Av6wbctLkG0kPrkA7npC4g32TNE8meiKyJFrJT3n%2F%2BhK25aq5xym0abiOf0pxBQPsW9Tozx7sMnX1i%2BOIwGZe0hZlUWsz%2FvUFru8FpUMbUMuOE9T2289iEWZhTOV0zFcge0w6oXxwQY6pgG%2FSmB%2FRIVWJfXR5k8D9sopHRiG3VFdk00Sb4rt1eGnG%2F8JZzeRejnuhuTGiP%2Bx5AHVWR7qkQZSPKcTx8PH3AYHnMcJCw8FC3m7cSmtsvOdY01pdVdhsVF0nz0IUVj8llJpT%2FMF3iwUSnlCBlAKDB7%2FR5De%2Btku1ailxVzGSBp%2BRv17grdR2Lf7L6HhIfiFIM31dkSt2DLJ6TeiYPVZS9WIibNutuSd&X-Amz-Signature=b8ba255f88a2d0e7300f8150e2dd4633df565ba693a0a61846be1d553536fde6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664NDS5JK%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCICMjBk2Ln4Ocyu012pMrgESpO8fntFKsyNwTKji19jJvAiBrPdI0B5L1dr1Oqfdirj6C4uM7%2BIAW2XAosF3qMZ%2BhcSqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1C1gsAC97x1AnObkKtwDGoy92Oz3rv50ebx42PQEOYT1FB96ksQUDLtYZg99GhIkR7WC%2BEUivhmQzS9mXwjHF4aVMVNV4dK9MjYD2ckHh92A1Njkg68QzVEoFVtY%2FF5eOGfCdYRCp5mpN%2FN38Dj5wkvXK5IErkz3xXJmhw6QvTYjHJmyswVRexi8YAYajothMcFuU2BlWlssYV0Oz820o9ciw9yd7GVUC1d0Sdd%2BCVSaUy8hf59R1ydWe%2FGu6eVyM8KcSBYkJJIUSb7Ccv5PISA9yysmMZZeWN%2BabRht8IRutB4PRoZ2y1Etl6YJzwnB5bVvTwH2FU7iRo1%2Br8R%2BGK%2BBK3hJvUQRbSNdpzzTx5n8wQLk8TMNEs4IeAFxYINfOcLQPQ1AKXsxRNpTTaEKJRaKo6CuFass8NfQE36euXLb9mdM8bpAu%2FBquz%2B406G8UNz0HtRJ%2F1be%2F8on929YFrmWzYdVEUSFAEGrTJtIFWtbrUo07EW%2F8VBXz0TPQEsEID4rOx3KO948Av6wbctLkG0kPrkA7npC4g32TNE8meiKyJFrJT3n%2F%2BhK25aq5xym0abiOf0pxBQPsW9Tozx7sMnX1i%2BOIwGZe0hZlUWsz%2FvUFru8FpUMbUMuOE9T2289iEWZhTOV0zFcge0w6oXxwQY6pgG%2FSmB%2FRIVWJfXR5k8D9sopHRiG3VFdk00Sb4rt1eGnG%2F8JZzeRejnuhuTGiP%2Bx5AHVWR7qkQZSPKcTx8PH3AYHnMcJCw8FC3m7cSmtsvOdY01pdVdhsVF0nz0IUVj8llJpT%2FMF3iwUSnlCBlAKDB7%2FR5De%2Btku1ailxVzGSBp%2BRv17grdR2Lf7L6HhIfiFIM31dkSt2DLJ6TeiYPVZS9WIibNutuSd&X-Amz-Signature=3857f9df505a74419aa05de69d6bd22717bbf7d38ca54a55f97ce0f0d9f6202b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664NDS5JK%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCICMjBk2Ln4Ocyu012pMrgESpO8fntFKsyNwTKji19jJvAiBrPdI0B5L1dr1Oqfdirj6C4uM7%2BIAW2XAosF3qMZ%2BhcSqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1C1gsAC97x1AnObkKtwDGoy92Oz3rv50ebx42PQEOYT1FB96ksQUDLtYZg99GhIkR7WC%2BEUivhmQzS9mXwjHF4aVMVNV4dK9MjYD2ckHh92A1Njkg68QzVEoFVtY%2FF5eOGfCdYRCp5mpN%2FN38Dj5wkvXK5IErkz3xXJmhw6QvTYjHJmyswVRexi8YAYajothMcFuU2BlWlssYV0Oz820o9ciw9yd7GVUC1d0Sdd%2BCVSaUy8hf59R1ydWe%2FGu6eVyM8KcSBYkJJIUSb7Ccv5PISA9yysmMZZeWN%2BabRht8IRutB4PRoZ2y1Etl6YJzwnB5bVvTwH2FU7iRo1%2Br8R%2BGK%2BBK3hJvUQRbSNdpzzTx5n8wQLk8TMNEs4IeAFxYINfOcLQPQ1AKXsxRNpTTaEKJRaKo6CuFass8NfQE36euXLb9mdM8bpAu%2FBquz%2B406G8UNz0HtRJ%2F1be%2F8on929YFrmWzYdVEUSFAEGrTJtIFWtbrUo07EW%2F8VBXz0TPQEsEID4rOx3KO948Av6wbctLkG0kPrkA7npC4g32TNE8meiKyJFrJT3n%2F%2BhK25aq5xym0abiOf0pxBQPsW9Tozx7sMnX1i%2BOIwGZe0hZlUWsz%2FvUFru8FpUMbUMuOE9T2289iEWZhTOV0zFcge0w6oXxwQY6pgG%2FSmB%2FRIVWJfXR5k8D9sopHRiG3VFdk00Sb4rt1eGnG%2F8JZzeRejnuhuTGiP%2Bx5AHVWR7qkQZSPKcTx8PH3AYHnMcJCw8FC3m7cSmtsvOdY01pdVdhsVF0nz0IUVj8llJpT%2FMF3iwUSnlCBlAKDB7%2FR5De%2Btku1ailxVzGSBp%2BRv17grdR2Lf7L6HhIfiFIM31dkSt2DLJ6TeiYPVZS9WIibNutuSd&X-Amz-Signature=b20b0e7987878ab2ef1d9751dd6d5c26204f34858728beb936544e5190d66507&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664NDS5JK%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T140729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCICMjBk2Ln4Ocyu012pMrgESpO8fntFKsyNwTKji19jJvAiBrPdI0B5L1dr1Oqfdirj6C4uM7%2BIAW2XAosF3qMZ%2BhcSqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1C1gsAC97x1AnObkKtwDGoy92Oz3rv50ebx42PQEOYT1FB96ksQUDLtYZg99GhIkR7WC%2BEUivhmQzS9mXwjHF4aVMVNV4dK9MjYD2ckHh92A1Njkg68QzVEoFVtY%2FF5eOGfCdYRCp5mpN%2FN38Dj5wkvXK5IErkz3xXJmhw6QvTYjHJmyswVRexi8YAYajothMcFuU2BlWlssYV0Oz820o9ciw9yd7GVUC1d0Sdd%2BCVSaUy8hf59R1ydWe%2FGu6eVyM8KcSBYkJJIUSb7Ccv5PISA9yysmMZZeWN%2BabRht8IRutB4PRoZ2y1Etl6YJzwnB5bVvTwH2FU7iRo1%2Br8R%2BGK%2BBK3hJvUQRbSNdpzzTx5n8wQLk8TMNEs4IeAFxYINfOcLQPQ1AKXsxRNpTTaEKJRaKo6CuFass8NfQE36euXLb9mdM8bpAu%2FBquz%2B406G8UNz0HtRJ%2F1be%2F8on929YFrmWzYdVEUSFAEGrTJtIFWtbrUo07EW%2F8VBXz0TPQEsEID4rOx3KO948Av6wbctLkG0kPrkA7npC4g32TNE8meiKyJFrJT3n%2F%2BhK25aq5xym0abiOf0pxBQPsW9Tozx7sMnX1i%2BOIwGZe0hZlUWsz%2FvUFru8FpUMbUMuOE9T2289iEWZhTOV0zFcge0w6oXxwQY6pgG%2FSmB%2FRIVWJfXR5k8D9sopHRiG3VFdk00Sb4rt1eGnG%2F8JZzeRejnuhuTGiP%2Bx5AHVWR7qkQZSPKcTx8PH3AYHnMcJCw8FC3m7cSmtsvOdY01pdVdhsVF0nz0IUVj8llJpT%2FMF3iwUSnlCBlAKDB7%2FR5De%2Btku1ailxVzGSBp%2BRv17grdR2Lf7L6HhIfiFIM31dkSt2DLJ6TeiYPVZS9WIibNutuSd&X-Amz-Signature=7b0619c2ad973872a9a1d26a6f7e9d80d26005490185a7849c8e2ff2ae2c7663&X-Amz-SignedHeaders=host&x-id=GetObject)
