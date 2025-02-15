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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4Y7ATAV%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIHad%2F8amn9ozjqRopSfZejupQae7ptw7uOL9prVjynacAiBxc0sbY1HN6sbIcKhahbS2aRuuO%2BM1Sl3rGRj9koyJcir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMHaa%2FMZLhE5KMpmiQKtwDBAygH3oUfxucK28xnyrcQ%2F%2Fa3VMVnvQVHvhBJmqQ8eavZ1T5Ht3VfhgdjanC7u9Tsp4Jq7qhOtgsbRh2eb0UWmQhj3erTcRZe%2BUyOu7t7fSIFXelQ9pkYc05ufjYICB22mFcdNa6GB1khU7jEEMv1a9XZGnizUzrjeZ1qxU%2B7kPcVeRbUqwTBGlZzKs81kPHX1nSZWMheQbSTOkzk%2BFQW8vVPVKb0M06TI4aj4KOOnfBUCPkaY0VDkTrJqVDVyCLdAOY9XdgeKSo3SUwNGIsHPKgJHBg6Ra8vCJbgCl2o5%2BY2intUkTuEnuej5qnucX0iDugmvUZP4VS6Pjq%2BELsmxeTiWT1QRdBNRVehzcwXvBYZX6xBHqfck5WXzI4yDi7WNxj12tD%2Fk2ALMNB88WWwgBMiEWtI1pOA3I1mllAo301rhEjz5x1aBzFrW5qioGrAAEFt1ky%2Fq8VF91qfRME%2BtgU5mHYEZFIwK8PQln6WkqLayGWU3suykbQQuoKTeWoK15R6yMo59Sy8TIjGkPzSvaO6O0M52qltk3ycSN2LKjyd0X7FscNstFAJ92jXBMWIV0dI6ShWZzw4%2FurztEZ8QCWNHybMOJc%2FmyQQsewie2gmKYPDVFvmvQS8zcw3LrDvQY6pgETjrHrP1Nea2idt0F0Z0EqM9vV9ILXjZnAalOO6Z%2BUisBy3EjSaKhHTcj%2FoI3ioj7vj6GmrGi7OvBtSXXUQNUj4RHp6uHm0zBfvnhYuY%2FFsgcWuF8ckYyfkJoQsK45PlDgV1gKYUyXuLDIFPH6bugdpt7%2FlSO9ZeRhHbiavl1JKG4lTm3EdMcvfYwH9sHkop1dGZvwtLK%2FnaSWwcYaRlXYFUw2qBm6&X-Amz-Signature=cd2ef3bafd138da8d868d1d00501fd6047b56625ce675e319f6cc0e8d3fc43d6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4Y7ATAV%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIHad%2F8amn9ozjqRopSfZejupQae7ptw7uOL9prVjynacAiBxc0sbY1HN6sbIcKhahbS2aRuuO%2BM1Sl3rGRj9koyJcir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMHaa%2FMZLhE5KMpmiQKtwDBAygH3oUfxucK28xnyrcQ%2F%2Fa3VMVnvQVHvhBJmqQ8eavZ1T5Ht3VfhgdjanC7u9Tsp4Jq7qhOtgsbRh2eb0UWmQhj3erTcRZe%2BUyOu7t7fSIFXelQ9pkYc05ufjYICB22mFcdNa6GB1khU7jEEMv1a9XZGnizUzrjeZ1qxU%2B7kPcVeRbUqwTBGlZzKs81kPHX1nSZWMheQbSTOkzk%2BFQW8vVPVKb0M06TI4aj4KOOnfBUCPkaY0VDkTrJqVDVyCLdAOY9XdgeKSo3SUwNGIsHPKgJHBg6Ra8vCJbgCl2o5%2BY2intUkTuEnuej5qnucX0iDugmvUZP4VS6Pjq%2BELsmxeTiWT1QRdBNRVehzcwXvBYZX6xBHqfck5WXzI4yDi7WNxj12tD%2Fk2ALMNB88WWwgBMiEWtI1pOA3I1mllAo301rhEjz5x1aBzFrW5qioGrAAEFt1ky%2Fq8VF91qfRME%2BtgU5mHYEZFIwK8PQln6WkqLayGWU3suykbQQuoKTeWoK15R6yMo59Sy8TIjGkPzSvaO6O0M52qltk3ycSN2LKjyd0X7FscNstFAJ92jXBMWIV0dI6ShWZzw4%2FurztEZ8QCWNHybMOJc%2FmyQQsewie2gmKYPDVFvmvQS8zcw3LrDvQY6pgETjrHrP1Nea2idt0F0Z0EqM9vV9ILXjZnAalOO6Z%2BUisBy3EjSaKhHTcj%2FoI3ioj7vj6GmrGi7OvBtSXXUQNUj4RHp6uHm0zBfvnhYuY%2FFsgcWuF8ckYyfkJoQsK45PlDgV1gKYUyXuLDIFPH6bugdpt7%2FlSO9ZeRhHbiavl1JKG4lTm3EdMcvfYwH9sHkop1dGZvwtLK%2FnaSWwcYaRlXYFUw2qBm6&X-Amz-Signature=5afaa5bd5a1717f55d02f46ee1157a2bd3d0d939043ea23cb15d43c5550081db&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4Y7ATAV%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIHad%2F8amn9ozjqRopSfZejupQae7ptw7uOL9prVjynacAiBxc0sbY1HN6sbIcKhahbS2aRuuO%2BM1Sl3rGRj9koyJcir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMHaa%2FMZLhE5KMpmiQKtwDBAygH3oUfxucK28xnyrcQ%2F%2Fa3VMVnvQVHvhBJmqQ8eavZ1T5Ht3VfhgdjanC7u9Tsp4Jq7qhOtgsbRh2eb0UWmQhj3erTcRZe%2BUyOu7t7fSIFXelQ9pkYc05ufjYICB22mFcdNa6GB1khU7jEEMv1a9XZGnizUzrjeZ1qxU%2B7kPcVeRbUqwTBGlZzKs81kPHX1nSZWMheQbSTOkzk%2BFQW8vVPVKb0M06TI4aj4KOOnfBUCPkaY0VDkTrJqVDVyCLdAOY9XdgeKSo3SUwNGIsHPKgJHBg6Ra8vCJbgCl2o5%2BY2intUkTuEnuej5qnucX0iDugmvUZP4VS6Pjq%2BELsmxeTiWT1QRdBNRVehzcwXvBYZX6xBHqfck5WXzI4yDi7WNxj12tD%2Fk2ALMNB88WWwgBMiEWtI1pOA3I1mllAo301rhEjz5x1aBzFrW5qioGrAAEFt1ky%2Fq8VF91qfRME%2BtgU5mHYEZFIwK8PQln6WkqLayGWU3suykbQQuoKTeWoK15R6yMo59Sy8TIjGkPzSvaO6O0M52qltk3ycSN2LKjyd0X7FscNstFAJ92jXBMWIV0dI6ShWZzw4%2FurztEZ8QCWNHybMOJc%2FmyQQsewie2gmKYPDVFvmvQS8zcw3LrDvQY6pgETjrHrP1Nea2idt0F0Z0EqM9vV9ILXjZnAalOO6Z%2BUisBy3EjSaKhHTcj%2FoI3ioj7vj6GmrGi7OvBtSXXUQNUj4RHp6uHm0zBfvnhYuY%2FFsgcWuF8ckYyfkJoQsK45PlDgV1gKYUyXuLDIFPH6bugdpt7%2FlSO9ZeRhHbiavl1JKG4lTm3EdMcvfYwH9sHkop1dGZvwtLK%2FnaSWwcYaRlXYFUw2qBm6&X-Amz-Signature=e7b7c2cec36653b51490261e0cd24b96a39a020d023966dc765c24004fc0d904&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4Y7ATAV%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIHad%2F8amn9ozjqRopSfZejupQae7ptw7uOL9prVjynacAiBxc0sbY1HN6sbIcKhahbS2aRuuO%2BM1Sl3rGRj9koyJcir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMHaa%2FMZLhE5KMpmiQKtwDBAygH3oUfxucK28xnyrcQ%2F%2Fa3VMVnvQVHvhBJmqQ8eavZ1T5Ht3VfhgdjanC7u9Tsp4Jq7qhOtgsbRh2eb0UWmQhj3erTcRZe%2BUyOu7t7fSIFXelQ9pkYc05ufjYICB22mFcdNa6GB1khU7jEEMv1a9XZGnizUzrjeZ1qxU%2B7kPcVeRbUqwTBGlZzKs81kPHX1nSZWMheQbSTOkzk%2BFQW8vVPVKb0M06TI4aj4KOOnfBUCPkaY0VDkTrJqVDVyCLdAOY9XdgeKSo3SUwNGIsHPKgJHBg6Ra8vCJbgCl2o5%2BY2intUkTuEnuej5qnucX0iDugmvUZP4VS6Pjq%2BELsmxeTiWT1QRdBNRVehzcwXvBYZX6xBHqfck5WXzI4yDi7WNxj12tD%2Fk2ALMNB88WWwgBMiEWtI1pOA3I1mllAo301rhEjz5x1aBzFrW5qioGrAAEFt1ky%2Fq8VF91qfRME%2BtgU5mHYEZFIwK8PQln6WkqLayGWU3suykbQQuoKTeWoK15R6yMo59Sy8TIjGkPzSvaO6O0M52qltk3ycSN2LKjyd0X7FscNstFAJ92jXBMWIV0dI6ShWZzw4%2FurztEZ8QCWNHybMOJc%2FmyQQsewie2gmKYPDVFvmvQS8zcw3LrDvQY6pgETjrHrP1Nea2idt0F0Z0EqM9vV9ILXjZnAalOO6Z%2BUisBy3EjSaKhHTcj%2FoI3ioj7vj6GmrGi7OvBtSXXUQNUj4RHp6uHm0zBfvnhYuY%2FFsgcWuF8ckYyfkJoQsK45PlDgV1gKYUyXuLDIFPH6bugdpt7%2FlSO9ZeRhHbiavl1JKG4lTm3EdMcvfYwH9sHkop1dGZvwtLK%2FnaSWwcYaRlXYFUw2qBm6&X-Amz-Signature=3c58b9ef81917d17e57e66b2aed2e4c638f436e18b821d067fb1066fd5972e69&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4Y7ATAV%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIHad%2F8amn9ozjqRopSfZejupQae7ptw7uOL9prVjynacAiBxc0sbY1HN6sbIcKhahbS2aRuuO%2BM1Sl3rGRj9koyJcir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMHaa%2FMZLhE5KMpmiQKtwDBAygH3oUfxucK28xnyrcQ%2F%2Fa3VMVnvQVHvhBJmqQ8eavZ1T5Ht3VfhgdjanC7u9Tsp4Jq7qhOtgsbRh2eb0UWmQhj3erTcRZe%2BUyOu7t7fSIFXelQ9pkYc05ufjYICB22mFcdNa6GB1khU7jEEMv1a9XZGnizUzrjeZ1qxU%2B7kPcVeRbUqwTBGlZzKs81kPHX1nSZWMheQbSTOkzk%2BFQW8vVPVKb0M06TI4aj4KOOnfBUCPkaY0VDkTrJqVDVyCLdAOY9XdgeKSo3SUwNGIsHPKgJHBg6Ra8vCJbgCl2o5%2BY2intUkTuEnuej5qnucX0iDugmvUZP4VS6Pjq%2BELsmxeTiWT1QRdBNRVehzcwXvBYZX6xBHqfck5WXzI4yDi7WNxj12tD%2Fk2ALMNB88WWwgBMiEWtI1pOA3I1mllAo301rhEjz5x1aBzFrW5qioGrAAEFt1ky%2Fq8VF91qfRME%2BtgU5mHYEZFIwK8PQln6WkqLayGWU3suykbQQuoKTeWoK15R6yMo59Sy8TIjGkPzSvaO6O0M52qltk3ycSN2LKjyd0X7FscNstFAJ92jXBMWIV0dI6ShWZzw4%2FurztEZ8QCWNHybMOJc%2FmyQQsewie2gmKYPDVFvmvQS8zcw3LrDvQY6pgETjrHrP1Nea2idt0F0Z0EqM9vV9ILXjZnAalOO6Z%2BUisBy3EjSaKhHTcj%2FoI3ioj7vj6GmrGi7OvBtSXXUQNUj4RHp6uHm0zBfvnhYuY%2FFsgcWuF8ckYyfkJoQsK45PlDgV1gKYUyXuLDIFPH6bugdpt7%2FlSO9ZeRhHbiavl1JKG4lTm3EdMcvfYwH9sHkop1dGZvwtLK%2FnaSWwcYaRlXYFUw2qBm6&X-Amz-Signature=e7e43da04e9ab15bfc849d3bfac5383767913e45bb3b70dacb5410d0f13dc78c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4Y7ATAV%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIHad%2F8amn9ozjqRopSfZejupQae7ptw7uOL9prVjynacAiBxc0sbY1HN6sbIcKhahbS2aRuuO%2BM1Sl3rGRj9koyJcir%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMHaa%2FMZLhE5KMpmiQKtwDBAygH3oUfxucK28xnyrcQ%2F%2Fa3VMVnvQVHvhBJmqQ8eavZ1T5Ht3VfhgdjanC7u9Tsp4Jq7qhOtgsbRh2eb0UWmQhj3erTcRZe%2BUyOu7t7fSIFXelQ9pkYc05ufjYICB22mFcdNa6GB1khU7jEEMv1a9XZGnizUzrjeZ1qxU%2B7kPcVeRbUqwTBGlZzKs81kPHX1nSZWMheQbSTOkzk%2BFQW8vVPVKb0M06TI4aj4KOOnfBUCPkaY0VDkTrJqVDVyCLdAOY9XdgeKSo3SUwNGIsHPKgJHBg6Ra8vCJbgCl2o5%2BY2intUkTuEnuej5qnucX0iDugmvUZP4VS6Pjq%2BELsmxeTiWT1QRdBNRVehzcwXvBYZX6xBHqfck5WXzI4yDi7WNxj12tD%2Fk2ALMNB88WWwgBMiEWtI1pOA3I1mllAo301rhEjz5x1aBzFrW5qioGrAAEFt1ky%2Fq8VF91qfRME%2BtgU5mHYEZFIwK8PQln6WkqLayGWU3suykbQQuoKTeWoK15R6yMo59Sy8TIjGkPzSvaO6O0M52qltk3ycSN2LKjyd0X7FscNstFAJ92jXBMWIV0dI6ShWZzw4%2FurztEZ8QCWNHybMOJc%2FmyQQsewie2gmKYPDVFvmvQS8zcw3LrDvQY6pgETjrHrP1Nea2idt0F0Z0EqM9vV9ILXjZnAalOO6Z%2BUisBy3EjSaKhHTcj%2FoI3ioj7vj6GmrGi7OvBtSXXUQNUj4RHp6uHm0zBfvnhYuY%2FFsgcWuF8ckYyfkJoQsK45PlDgV1gKYUyXuLDIFPH6bugdpt7%2FlSO9ZeRhHbiavl1JKG4lTm3EdMcvfYwH9sHkop1dGZvwtLK%2FnaSWwcYaRlXYFUw2qBm6&X-Amz-Signature=c40c962093983e98ab5e50b305ed728b88d4e5134d0e710a4a1b3e273eeae544&X-Amz-SignedHeaders=host&x-id=GetObject)
