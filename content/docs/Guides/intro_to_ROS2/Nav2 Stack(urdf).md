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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EAVDJUF%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T070758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqLETdqpvE5M6fAPO7K9LjjsfBk2qIeNHZmYwBnF%2FK5AiEA1gY5biDJ7Z5YbxILUHWB8mlvfyq5z9Aym4AV3E1ooWcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDC3TTPI1Ye4dvcyd8ircAzrbNKtrq%2Fyiu3883R48%2BK3DN8VDj80btyIW8drPtLjqHN%2BOgKnUtu79kc4BvsoDqK%2BukxBbIbTz1UQEAoOg4iycUfPK6I%2FLtGA8RUhEc%2FASjPKgDa15q8A6Z6ByoFpAWvtVb5Yi1EHz3imwdK5s%2F4hKCMmkRp1V1s49tWXogiER0dILnRkq3%2F8M%2FV2qrIJrlnMiHC%2BIVL9KoZA39e5jiGigZA7w2z7XZVGowEd33OfU6xwcR41UdC%2FVNZbRszV7Qh8SlUVLEtBvK0f%2B6h%2FQqX7THY4%2F4U4o7MQS%2FCDs3L4gJ2%2F%2B3bYISf2YKnThpdPR%2FTECII%2BuqFJbf9UzmD7CiwmI7pIrA9KYG5GPpXhXYJdYKAbvusw88MnOd0CxAt9KlNdtW7wtlUk%2FVOKDDb59rq%2FrE8vP7Xen3NZRk62SiJ7nTtf07ShSGJJ9zPpUD0sOHI4xYIgyva%2B9kHlYbLlsSxYTz5PgVD4%2BHEU5vwXvv5kZPg6W3ThOZWsHUw8%2BWWVXB9QSdgOQ7HMRmfdrfeL7gIGuDVh87lTvkpC6qxtCEubHshue5evCBMaKJKo1l0SLOgHbX5CxvwL8v%2FeytJFq2ck1pFL5FVfuFiMa3A7znBkINqqLWvl3Ez9XZ9NDMLrBu70GOqUBFuUH4Dv%2FGFlBFXcOjVKnfDcJmKgZuT5%2Bw9Tmx0sNipegE%2FhXgQr4fK1iJTOPol0Yqs%2FE1%2FDZ%2BlTrDrAxfFG7Tmk8hu1XLE8SKUOEj8ayMUd4W7N0maGEENvnpOOcc5td33EtnALXGqqV0yYK6Fm%2FPw7QNBu5XV8C3l48aPFMnIIb1PegGVJ5LVEAkHtt8HZ4WCq99v0VneGtUwGAGbbybvWQfRvF&X-Amz-Signature=ddd7e6a2161c013b98751728e465c7f434f2593164d59fcfb116fdd93fafd403&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EAVDJUF%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T070758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqLETdqpvE5M6fAPO7K9LjjsfBk2qIeNHZmYwBnF%2FK5AiEA1gY5biDJ7Z5YbxILUHWB8mlvfyq5z9Aym4AV3E1ooWcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDC3TTPI1Ye4dvcyd8ircAzrbNKtrq%2Fyiu3883R48%2BK3DN8VDj80btyIW8drPtLjqHN%2BOgKnUtu79kc4BvsoDqK%2BukxBbIbTz1UQEAoOg4iycUfPK6I%2FLtGA8RUhEc%2FASjPKgDa15q8A6Z6ByoFpAWvtVb5Yi1EHz3imwdK5s%2F4hKCMmkRp1V1s49tWXogiER0dILnRkq3%2F8M%2FV2qrIJrlnMiHC%2BIVL9KoZA39e5jiGigZA7w2z7XZVGowEd33OfU6xwcR41UdC%2FVNZbRszV7Qh8SlUVLEtBvK0f%2B6h%2FQqX7THY4%2F4U4o7MQS%2FCDs3L4gJ2%2F%2B3bYISf2YKnThpdPR%2FTECII%2BuqFJbf9UzmD7CiwmI7pIrA9KYG5GPpXhXYJdYKAbvusw88MnOd0CxAt9KlNdtW7wtlUk%2FVOKDDb59rq%2FrE8vP7Xen3NZRk62SiJ7nTtf07ShSGJJ9zPpUD0sOHI4xYIgyva%2B9kHlYbLlsSxYTz5PgVD4%2BHEU5vwXvv5kZPg6W3ThOZWsHUw8%2BWWVXB9QSdgOQ7HMRmfdrfeL7gIGuDVh87lTvkpC6qxtCEubHshue5evCBMaKJKo1l0SLOgHbX5CxvwL8v%2FeytJFq2ck1pFL5FVfuFiMa3A7znBkINqqLWvl3Ez9XZ9NDMLrBu70GOqUBFuUH4Dv%2FGFlBFXcOjVKnfDcJmKgZuT5%2Bw9Tmx0sNipegE%2FhXgQr4fK1iJTOPol0Yqs%2FE1%2FDZ%2BlTrDrAxfFG7Tmk8hu1XLE8SKUOEj8ayMUd4W7N0maGEENvnpOOcc5td33EtnALXGqqV0yYK6Fm%2FPw7QNBu5XV8C3l48aPFMnIIb1PegGVJ5LVEAkHtt8HZ4WCq99v0VneGtUwGAGbbybvWQfRvF&X-Amz-Signature=25357a2e91115272a4e7cc649202f14a66e2b03db2ed28b877e0fb50c38214a8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EAVDJUF%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T070758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqLETdqpvE5M6fAPO7K9LjjsfBk2qIeNHZmYwBnF%2FK5AiEA1gY5biDJ7Z5YbxILUHWB8mlvfyq5z9Aym4AV3E1ooWcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDC3TTPI1Ye4dvcyd8ircAzrbNKtrq%2Fyiu3883R48%2BK3DN8VDj80btyIW8drPtLjqHN%2BOgKnUtu79kc4BvsoDqK%2BukxBbIbTz1UQEAoOg4iycUfPK6I%2FLtGA8RUhEc%2FASjPKgDa15q8A6Z6ByoFpAWvtVb5Yi1EHz3imwdK5s%2F4hKCMmkRp1V1s49tWXogiER0dILnRkq3%2F8M%2FV2qrIJrlnMiHC%2BIVL9KoZA39e5jiGigZA7w2z7XZVGowEd33OfU6xwcR41UdC%2FVNZbRszV7Qh8SlUVLEtBvK0f%2B6h%2FQqX7THY4%2F4U4o7MQS%2FCDs3L4gJ2%2F%2B3bYISf2YKnThpdPR%2FTECII%2BuqFJbf9UzmD7CiwmI7pIrA9KYG5GPpXhXYJdYKAbvusw88MnOd0CxAt9KlNdtW7wtlUk%2FVOKDDb59rq%2FrE8vP7Xen3NZRk62SiJ7nTtf07ShSGJJ9zPpUD0sOHI4xYIgyva%2B9kHlYbLlsSxYTz5PgVD4%2BHEU5vwXvv5kZPg6W3ThOZWsHUw8%2BWWVXB9QSdgOQ7HMRmfdrfeL7gIGuDVh87lTvkpC6qxtCEubHshue5evCBMaKJKo1l0SLOgHbX5CxvwL8v%2FeytJFq2ck1pFL5FVfuFiMa3A7znBkINqqLWvl3Ez9XZ9NDMLrBu70GOqUBFuUH4Dv%2FGFlBFXcOjVKnfDcJmKgZuT5%2Bw9Tmx0sNipegE%2FhXgQr4fK1iJTOPol0Yqs%2FE1%2FDZ%2BlTrDrAxfFG7Tmk8hu1XLE8SKUOEj8ayMUd4W7N0maGEENvnpOOcc5td33EtnALXGqqV0yYK6Fm%2FPw7QNBu5XV8C3l48aPFMnIIb1PegGVJ5LVEAkHtt8HZ4WCq99v0VneGtUwGAGbbybvWQfRvF&X-Amz-Signature=94579bf33e8407894f247841b201e3aab23ce44ff2efa9463f0efc2356c78397&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EAVDJUF%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T070758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqLETdqpvE5M6fAPO7K9LjjsfBk2qIeNHZmYwBnF%2FK5AiEA1gY5biDJ7Z5YbxILUHWB8mlvfyq5z9Aym4AV3E1ooWcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDC3TTPI1Ye4dvcyd8ircAzrbNKtrq%2Fyiu3883R48%2BK3DN8VDj80btyIW8drPtLjqHN%2BOgKnUtu79kc4BvsoDqK%2BukxBbIbTz1UQEAoOg4iycUfPK6I%2FLtGA8RUhEc%2FASjPKgDa15q8A6Z6ByoFpAWvtVb5Yi1EHz3imwdK5s%2F4hKCMmkRp1V1s49tWXogiER0dILnRkq3%2F8M%2FV2qrIJrlnMiHC%2BIVL9KoZA39e5jiGigZA7w2z7XZVGowEd33OfU6xwcR41UdC%2FVNZbRszV7Qh8SlUVLEtBvK0f%2B6h%2FQqX7THY4%2F4U4o7MQS%2FCDs3L4gJ2%2F%2B3bYISf2YKnThpdPR%2FTECII%2BuqFJbf9UzmD7CiwmI7pIrA9KYG5GPpXhXYJdYKAbvusw88MnOd0CxAt9KlNdtW7wtlUk%2FVOKDDb59rq%2FrE8vP7Xen3NZRk62SiJ7nTtf07ShSGJJ9zPpUD0sOHI4xYIgyva%2B9kHlYbLlsSxYTz5PgVD4%2BHEU5vwXvv5kZPg6W3ThOZWsHUw8%2BWWVXB9QSdgOQ7HMRmfdrfeL7gIGuDVh87lTvkpC6qxtCEubHshue5evCBMaKJKo1l0SLOgHbX5CxvwL8v%2FeytJFq2ck1pFL5FVfuFiMa3A7znBkINqqLWvl3Ez9XZ9NDMLrBu70GOqUBFuUH4Dv%2FGFlBFXcOjVKnfDcJmKgZuT5%2Bw9Tmx0sNipegE%2FhXgQr4fK1iJTOPol0Yqs%2FE1%2FDZ%2BlTrDrAxfFG7Tmk8hu1XLE8SKUOEj8ayMUd4W7N0maGEENvnpOOcc5td33EtnALXGqqV0yYK6Fm%2FPw7QNBu5XV8C3l48aPFMnIIb1PegGVJ5LVEAkHtt8HZ4WCq99v0VneGtUwGAGbbybvWQfRvF&X-Amz-Signature=b5a6273b51d94b65cc8b3c5f99649c2fcfd09fbace4d19d0fda6226cfcca65b9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EAVDJUF%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T070758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqLETdqpvE5M6fAPO7K9LjjsfBk2qIeNHZmYwBnF%2FK5AiEA1gY5biDJ7Z5YbxILUHWB8mlvfyq5z9Aym4AV3E1ooWcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDC3TTPI1Ye4dvcyd8ircAzrbNKtrq%2Fyiu3883R48%2BK3DN8VDj80btyIW8drPtLjqHN%2BOgKnUtu79kc4BvsoDqK%2BukxBbIbTz1UQEAoOg4iycUfPK6I%2FLtGA8RUhEc%2FASjPKgDa15q8A6Z6ByoFpAWvtVb5Yi1EHz3imwdK5s%2F4hKCMmkRp1V1s49tWXogiER0dILnRkq3%2F8M%2FV2qrIJrlnMiHC%2BIVL9KoZA39e5jiGigZA7w2z7XZVGowEd33OfU6xwcR41UdC%2FVNZbRszV7Qh8SlUVLEtBvK0f%2B6h%2FQqX7THY4%2F4U4o7MQS%2FCDs3L4gJ2%2F%2B3bYISf2YKnThpdPR%2FTECII%2BuqFJbf9UzmD7CiwmI7pIrA9KYG5GPpXhXYJdYKAbvusw88MnOd0CxAt9KlNdtW7wtlUk%2FVOKDDb59rq%2FrE8vP7Xen3NZRk62SiJ7nTtf07ShSGJJ9zPpUD0sOHI4xYIgyva%2B9kHlYbLlsSxYTz5PgVD4%2BHEU5vwXvv5kZPg6W3ThOZWsHUw8%2BWWVXB9QSdgOQ7HMRmfdrfeL7gIGuDVh87lTvkpC6qxtCEubHshue5evCBMaKJKo1l0SLOgHbX5CxvwL8v%2FeytJFq2ck1pFL5FVfuFiMa3A7znBkINqqLWvl3Ez9XZ9NDMLrBu70GOqUBFuUH4Dv%2FGFlBFXcOjVKnfDcJmKgZuT5%2Bw9Tmx0sNipegE%2FhXgQr4fK1iJTOPol0Yqs%2FE1%2FDZ%2BlTrDrAxfFG7Tmk8hu1XLE8SKUOEj8ayMUd4W7N0maGEENvnpOOcc5td33EtnALXGqqV0yYK6Fm%2FPw7QNBu5XV8C3l48aPFMnIIb1PegGVJ5LVEAkHtt8HZ4WCq99v0VneGtUwGAGbbybvWQfRvF&X-Amz-Signature=dc6efcf40068e421b72fe89e667ac950065f71047f90f2e82c753ed92d846fe2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EAVDJUF%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T070758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqLETdqpvE5M6fAPO7K9LjjsfBk2qIeNHZmYwBnF%2FK5AiEA1gY5biDJ7Z5YbxILUHWB8mlvfyq5z9Aym4AV3E1ooWcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDC3TTPI1Ye4dvcyd8ircAzrbNKtrq%2Fyiu3883R48%2BK3DN8VDj80btyIW8drPtLjqHN%2BOgKnUtu79kc4BvsoDqK%2BukxBbIbTz1UQEAoOg4iycUfPK6I%2FLtGA8RUhEc%2FASjPKgDa15q8A6Z6ByoFpAWvtVb5Yi1EHz3imwdK5s%2F4hKCMmkRp1V1s49tWXogiER0dILnRkq3%2F8M%2FV2qrIJrlnMiHC%2BIVL9KoZA39e5jiGigZA7w2z7XZVGowEd33OfU6xwcR41UdC%2FVNZbRszV7Qh8SlUVLEtBvK0f%2B6h%2FQqX7THY4%2F4U4o7MQS%2FCDs3L4gJ2%2F%2B3bYISf2YKnThpdPR%2FTECII%2BuqFJbf9UzmD7CiwmI7pIrA9KYG5GPpXhXYJdYKAbvusw88MnOd0CxAt9KlNdtW7wtlUk%2FVOKDDb59rq%2FrE8vP7Xen3NZRk62SiJ7nTtf07ShSGJJ9zPpUD0sOHI4xYIgyva%2B9kHlYbLlsSxYTz5PgVD4%2BHEU5vwXvv5kZPg6W3ThOZWsHUw8%2BWWVXB9QSdgOQ7HMRmfdrfeL7gIGuDVh87lTvkpC6qxtCEubHshue5evCBMaKJKo1l0SLOgHbX5CxvwL8v%2FeytJFq2ck1pFL5FVfuFiMa3A7znBkINqqLWvl3Ez9XZ9NDMLrBu70GOqUBFuUH4Dv%2FGFlBFXcOjVKnfDcJmKgZuT5%2Bw9Tmx0sNipegE%2FhXgQr4fK1iJTOPol0Yqs%2FE1%2FDZ%2BlTrDrAxfFG7Tmk8hu1XLE8SKUOEj8ayMUd4W7N0maGEENvnpOOcc5td33EtnALXGqqV0yYK6Fm%2FPw7QNBu5XV8C3l48aPFMnIIb1PegGVJ5LVEAkHtt8HZ4WCq99v0VneGtUwGAGbbybvWQfRvF&X-Amz-Signature=d44b1e38d91b9ee03bc0aff77188192f48c43ba6fccf573605ce32d6646e63fc&X-Amz-SignedHeaders=host&x-id=GetObject)
