---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5TSX6AA%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T160911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDFl%2BOowCsF1ZfHZH251y52OL0GDg05iMb9ThmC2MTClAIhAOpRM6gqJq5OevwbrxBarNtB%2B6VffdNic%2Bh8db7aAQlsKv8DCEgQABoMNjM3NDIzMTgzODA1IgyffX2PMAjx28R%2Fq0sq3APzcH4Ior%2FnR4h6OYbhjJ0556Y%2FCdXIo3kgWbV3%2BLcsdUWoj7GtFugS8u6T51abcw4JAqxJnhKLx15ZWA1aYPwOa3vRVwqP3nHbI2f6P88iapsvk5ieNmhwvZx7zO9loRMW3WH8sCzEb2TSMm%2Bv0y6iXxjlY12d3JuYX4MNiUHBlXuobiDfYWpQN%2FM1Ttxy6POtTwvqfCuC6fHMpAMdVfmww8INZlxzdtriDGllS2ttciit3TlRcMKdfJQxTOUE3LXgv%2FMJzB30iDqb%2BN1hruMTdKlA35Ehef5YftLKu2aIpd6NA3sOLY%2B%2B7TG0ZB9o%2FW52c547VFr%2FfGB40xFIhMHKTzYx%2BnM2p0msujf1xakU26zP2oh0lK%2BDLaxpiTROhUme9M06XjjqpWZwcSueHBDH%2FJFyJxoEBDN7CldkyMzj6W5QGlUm6dyT9yPV486BUDFR3%2Bjys%2FZvxryWumh%2B45wrQs79CuE4%2BE3%2F9w5jszL1TPSGhM2GqNbUk0HkaI%2FVnhUy4Pxgz2cHbFnkYBOb%2BxRoLL%2BskpM0mtcWbp%2BIZVQJWBgkYBQJNpynvhSI2xiRbVODcsug9YoMLby1IsXbe6T35tIRH65OMYJCBCYWE20QO7yyhwPL1Ap34ekXRzDIgo69BjqkAZvJd5tQS971sZUfgbb6%2FX3imtVqbKPHYA7Yo347AVoShZZB%2FB9X0DBcGxWI0tXW20OJZxBYfcUT5QUXKiDXeJGlCGpPnkvtHjzoqnQ%2FPJjWDZ4LvvMtd0Ub904XAnMQ7czVl3AwoY%2BUuM%2FWBVEa49DsW1TmORsCrFuVqLtE%2BNI1qYffkS8h%2Fz7wjoO1RylLX0kak4GPMMjl0yQw7RhpNZMCZCde&X-Amz-Signature=db70ef7b24cd0c14bae3045ce58a8ed368b037b04fff584f66c85e59cd29850d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5TSX6AA%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T160911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDFl%2BOowCsF1ZfHZH251y52OL0GDg05iMb9ThmC2MTClAIhAOpRM6gqJq5OevwbrxBarNtB%2B6VffdNic%2Bh8db7aAQlsKv8DCEgQABoMNjM3NDIzMTgzODA1IgyffX2PMAjx28R%2Fq0sq3APzcH4Ior%2FnR4h6OYbhjJ0556Y%2FCdXIo3kgWbV3%2BLcsdUWoj7GtFugS8u6T51abcw4JAqxJnhKLx15ZWA1aYPwOa3vRVwqP3nHbI2f6P88iapsvk5ieNmhwvZx7zO9loRMW3WH8sCzEb2TSMm%2Bv0y6iXxjlY12d3JuYX4MNiUHBlXuobiDfYWpQN%2FM1Ttxy6POtTwvqfCuC6fHMpAMdVfmww8INZlxzdtriDGllS2ttciit3TlRcMKdfJQxTOUE3LXgv%2FMJzB30iDqb%2BN1hruMTdKlA35Ehef5YftLKu2aIpd6NA3sOLY%2B%2B7TG0ZB9o%2FW52c547VFr%2FfGB40xFIhMHKTzYx%2BnM2p0msujf1xakU26zP2oh0lK%2BDLaxpiTROhUme9M06XjjqpWZwcSueHBDH%2FJFyJxoEBDN7CldkyMzj6W5QGlUm6dyT9yPV486BUDFR3%2Bjys%2FZvxryWumh%2B45wrQs79CuE4%2BE3%2F9w5jszL1TPSGhM2GqNbUk0HkaI%2FVnhUy4Pxgz2cHbFnkYBOb%2BxRoLL%2BskpM0mtcWbp%2BIZVQJWBgkYBQJNpynvhSI2xiRbVODcsug9YoMLby1IsXbe6T35tIRH65OMYJCBCYWE20QO7yyhwPL1Ap34ekXRzDIgo69BjqkAZvJd5tQS971sZUfgbb6%2FX3imtVqbKPHYA7Yo347AVoShZZB%2FB9X0DBcGxWI0tXW20OJZxBYfcUT5QUXKiDXeJGlCGpPnkvtHjzoqnQ%2FPJjWDZ4LvvMtd0Ub904XAnMQ7czVl3AwoY%2BUuM%2FWBVEa49DsW1TmORsCrFuVqLtE%2BNI1qYffkS8h%2Fz7wjoO1RylLX0kak4GPMMjl0yQw7RhpNZMCZCde&X-Amz-Signature=7cc333781b402b3ef8cf7094d7266709f995466ddfbcdda2be822f7f97ec657f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5TSX6AA%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T160911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDFl%2BOowCsF1ZfHZH251y52OL0GDg05iMb9ThmC2MTClAIhAOpRM6gqJq5OevwbrxBarNtB%2B6VffdNic%2Bh8db7aAQlsKv8DCEgQABoMNjM3NDIzMTgzODA1IgyffX2PMAjx28R%2Fq0sq3APzcH4Ior%2FnR4h6OYbhjJ0556Y%2FCdXIo3kgWbV3%2BLcsdUWoj7GtFugS8u6T51abcw4JAqxJnhKLx15ZWA1aYPwOa3vRVwqP3nHbI2f6P88iapsvk5ieNmhwvZx7zO9loRMW3WH8sCzEb2TSMm%2Bv0y6iXxjlY12d3JuYX4MNiUHBlXuobiDfYWpQN%2FM1Ttxy6POtTwvqfCuC6fHMpAMdVfmww8INZlxzdtriDGllS2ttciit3TlRcMKdfJQxTOUE3LXgv%2FMJzB30iDqb%2BN1hruMTdKlA35Ehef5YftLKu2aIpd6NA3sOLY%2B%2B7TG0ZB9o%2FW52c547VFr%2FfGB40xFIhMHKTzYx%2BnM2p0msujf1xakU26zP2oh0lK%2BDLaxpiTROhUme9M06XjjqpWZwcSueHBDH%2FJFyJxoEBDN7CldkyMzj6W5QGlUm6dyT9yPV486BUDFR3%2Bjys%2FZvxryWumh%2B45wrQs79CuE4%2BE3%2F9w5jszL1TPSGhM2GqNbUk0HkaI%2FVnhUy4Pxgz2cHbFnkYBOb%2BxRoLL%2BskpM0mtcWbp%2BIZVQJWBgkYBQJNpynvhSI2xiRbVODcsug9YoMLby1IsXbe6T35tIRH65OMYJCBCYWE20QO7yyhwPL1Ap34ekXRzDIgo69BjqkAZvJd5tQS971sZUfgbb6%2FX3imtVqbKPHYA7Yo347AVoShZZB%2FB9X0DBcGxWI0tXW20OJZxBYfcUT5QUXKiDXeJGlCGpPnkvtHjzoqnQ%2FPJjWDZ4LvvMtd0Ub904XAnMQ7czVl3AwoY%2BUuM%2FWBVEa49DsW1TmORsCrFuVqLtE%2BNI1qYffkS8h%2Fz7wjoO1RylLX0kak4GPMMjl0yQw7RhpNZMCZCde&X-Amz-Signature=3685b9b64bf32063b45fbc97c1261a3b3b65557f1c3bad1091849fddeee2b8c3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5TSX6AA%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T160911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDFl%2BOowCsF1ZfHZH251y52OL0GDg05iMb9ThmC2MTClAIhAOpRM6gqJq5OevwbrxBarNtB%2B6VffdNic%2Bh8db7aAQlsKv8DCEgQABoMNjM3NDIzMTgzODA1IgyffX2PMAjx28R%2Fq0sq3APzcH4Ior%2FnR4h6OYbhjJ0556Y%2FCdXIo3kgWbV3%2BLcsdUWoj7GtFugS8u6T51abcw4JAqxJnhKLx15ZWA1aYPwOa3vRVwqP3nHbI2f6P88iapsvk5ieNmhwvZx7zO9loRMW3WH8sCzEb2TSMm%2Bv0y6iXxjlY12d3JuYX4MNiUHBlXuobiDfYWpQN%2FM1Ttxy6POtTwvqfCuC6fHMpAMdVfmww8INZlxzdtriDGllS2ttciit3TlRcMKdfJQxTOUE3LXgv%2FMJzB30iDqb%2BN1hruMTdKlA35Ehef5YftLKu2aIpd6NA3sOLY%2B%2B7TG0ZB9o%2FW52c547VFr%2FfGB40xFIhMHKTzYx%2BnM2p0msujf1xakU26zP2oh0lK%2BDLaxpiTROhUme9M06XjjqpWZwcSueHBDH%2FJFyJxoEBDN7CldkyMzj6W5QGlUm6dyT9yPV486BUDFR3%2Bjys%2FZvxryWumh%2B45wrQs79CuE4%2BE3%2F9w5jszL1TPSGhM2GqNbUk0HkaI%2FVnhUy4Pxgz2cHbFnkYBOb%2BxRoLL%2BskpM0mtcWbp%2BIZVQJWBgkYBQJNpynvhSI2xiRbVODcsug9YoMLby1IsXbe6T35tIRH65OMYJCBCYWE20QO7yyhwPL1Ap34ekXRzDIgo69BjqkAZvJd5tQS971sZUfgbb6%2FX3imtVqbKPHYA7Yo347AVoShZZB%2FB9X0DBcGxWI0tXW20OJZxBYfcUT5QUXKiDXeJGlCGpPnkvtHjzoqnQ%2FPJjWDZ4LvvMtd0Ub904XAnMQ7czVl3AwoY%2BUuM%2FWBVEa49DsW1TmORsCrFuVqLtE%2BNI1qYffkS8h%2Fz7wjoO1RylLX0kak4GPMMjl0yQw7RhpNZMCZCde&X-Amz-Signature=158586915ea56fc63a5e0338a7413227e9258ee49fe89939a60bbb27d3683bcb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5TSX6AA%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T160911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDFl%2BOowCsF1ZfHZH251y52OL0GDg05iMb9ThmC2MTClAIhAOpRM6gqJq5OevwbrxBarNtB%2B6VffdNic%2Bh8db7aAQlsKv8DCEgQABoMNjM3NDIzMTgzODA1IgyffX2PMAjx28R%2Fq0sq3APzcH4Ior%2FnR4h6OYbhjJ0556Y%2FCdXIo3kgWbV3%2BLcsdUWoj7GtFugS8u6T51abcw4JAqxJnhKLx15ZWA1aYPwOa3vRVwqP3nHbI2f6P88iapsvk5ieNmhwvZx7zO9loRMW3WH8sCzEb2TSMm%2Bv0y6iXxjlY12d3JuYX4MNiUHBlXuobiDfYWpQN%2FM1Ttxy6POtTwvqfCuC6fHMpAMdVfmww8INZlxzdtriDGllS2ttciit3TlRcMKdfJQxTOUE3LXgv%2FMJzB30iDqb%2BN1hruMTdKlA35Ehef5YftLKu2aIpd6NA3sOLY%2B%2B7TG0ZB9o%2FW52c547VFr%2FfGB40xFIhMHKTzYx%2BnM2p0msujf1xakU26zP2oh0lK%2BDLaxpiTROhUme9M06XjjqpWZwcSueHBDH%2FJFyJxoEBDN7CldkyMzj6W5QGlUm6dyT9yPV486BUDFR3%2Bjys%2FZvxryWumh%2B45wrQs79CuE4%2BE3%2F9w5jszL1TPSGhM2GqNbUk0HkaI%2FVnhUy4Pxgz2cHbFnkYBOb%2BxRoLL%2BskpM0mtcWbp%2BIZVQJWBgkYBQJNpynvhSI2xiRbVODcsug9YoMLby1IsXbe6T35tIRH65OMYJCBCYWE20QO7yyhwPL1Ap34ekXRzDIgo69BjqkAZvJd5tQS971sZUfgbb6%2FX3imtVqbKPHYA7Yo347AVoShZZB%2FB9X0DBcGxWI0tXW20OJZxBYfcUT5QUXKiDXeJGlCGpPnkvtHjzoqnQ%2FPJjWDZ4LvvMtd0Ub904XAnMQ7czVl3AwoY%2BUuM%2FWBVEa49DsW1TmORsCrFuVqLtE%2BNI1qYffkS8h%2Fz7wjoO1RylLX0kak4GPMMjl0yQw7RhpNZMCZCde&X-Amz-Signature=213b388870bebd743c9739c76038f184b0878ca7c1d01a0cdf2e3e071c245bcc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5TSX6AA%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T160911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDFl%2BOowCsF1ZfHZH251y52OL0GDg05iMb9ThmC2MTClAIhAOpRM6gqJq5OevwbrxBarNtB%2B6VffdNic%2Bh8db7aAQlsKv8DCEgQABoMNjM3NDIzMTgzODA1IgyffX2PMAjx28R%2Fq0sq3APzcH4Ior%2FnR4h6OYbhjJ0556Y%2FCdXIo3kgWbV3%2BLcsdUWoj7GtFugS8u6T51abcw4JAqxJnhKLx15ZWA1aYPwOa3vRVwqP3nHbI2f6P88iapsvk5ieNmhwvZx7zO9loRMW3WH8sCzEb2TSMm%2Bv0y6iXxjlY12d3JuYX4MNiUHBlXuobiDfYWpQN%2FM1Ttxy6POtTwvqfCuC6fHMpAMdVfmww8INZlxzdtriDGllS2ttciit3TlRcMKdfJQxTOUE3LXgv%2FMJzB30iDqb%2BN1hruMTdKlA35Ehef5YftLKu2aIpd6NA3sOLY%2B%2B7TG0ZB9o%2FW52c547VFr%2FfGB40xFIhMHKTzYx%2BnM2p0msujf1xakU26zP2oh0lK%2BDLaxpiTROhUme9M06XjjqpWZwcSueHBDH%2FJFyJxoEBDN7CldkyMzj6W5QGlUm6dyT9yPV486BUDFR3%2Bjys%2FZvxryWumh%2B45wrQs79CuE4%2BE3%2F9w5jszL1TPSGhM2GqNbUk0HkaI%2FVnhUy4Pxgz2cHbFnkYBOb%2BxRoLL%2BskpM0mtcWbp%2BIZVQJWBgkYBQJNpynvhSI2xiRbVODcsug9YoMLby1IsXbe6T35tIRH65OMYJCBCYWE20QO7yyhwPL1Ap34ekXRzDIgo69BjqkAZvJd5tQS971sZUfgbb6%2FX3imtVqbKPHYA7Yo347AVoShZZB%2FB9X0DBcGxWI0tXW20OJZxBYfcUT5QUXKiDXeJGlCGpPnkvtHjzoqnQ%2FPJjWDZ4LvvMtd0Ub904XAnMQ7czVl3AwoY%2BUuM%2FWBVEa49DsW1TmORsCrFuVqLtE%2BNI1qYffkS8h%2Fz7wjoO1RylLX0kak4GPMMjl0yQw7RhpNZMCZCde&X-Amz-Signature=f34cad0cf88a46fcfd3a4a222f07089f1e54c9f9df49c119b34be78dcf4007aa&X-Amz-SignedHeaders=host&x-id=GetObject)
