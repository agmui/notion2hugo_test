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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOAEXXHY%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCr62UkX0xo6ci0EKqPpl21r5SDk%2B79ZyqIVA4RZcwCiAIhAPRmlhCcTWVZlKU8TJjhJ29w%2Bb2ASVur8Oi%2BJ3q%2BsfpbKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5%2F9jEABkpcP%2BcnfUq3APKTNBMDERO17tVc1u39oHIOToetgO8yZUVk4tePJtX00tgWIIZ9NysjhDBC2G0tWFM8xG9DhGRphIoCWPQbTfxNzJJN1cPaOIzO2Pcy8%2FSvEYMApLBAi5sJYobB%2BH1BT8RmvOd%2FcUESGmJEA1q2UOri77ZV63F%2FARQF3Z1aXKHJY793oOS0nrKbcxTOyfh6xCG352cUTjv4kvX2ksHm90BIx9KtBCyxcloj7GWUjlkKilKDgVbNQMyGnumPWpx%2Bfst0uVt95b%2FoZtRwXw8NEk3VAV1ceJ79JPmrxX%2FZovSSciZP8Pe0CfTLFk41Sdl7nx1ODboD2CREHUbCo0hPVUgRGEbqDx7rjqPdr5J9oZfPhnHLiOSc8j4hqBzuxgDD%2BSeoyMRx0ZXwebqCr83llp95AE7YOa8trscL1WFcZ8Cyf6tadibfcb93n2V%2Ffb89dQPZt4LmwXfYb8KO8%2BjrOZ2z3mLRkaP5x7iBme9OZZCqpK7t5rKnXoippGJ34eqYznBtH7Nsbidh%2BCFcl7odeE2uXBb1JfR4DsukZwy1Qj1Jym8ZlXhKXy92KZO45rbmXiABQKH61dYb3sv9gbmwIN2cSV0Sj3r91fZiYuh4vGntBmIq%2FYS8uz1Ld2CejCxidDCBjqkAcSJ7Zkls172pTpJ1V472rTQ19nMU8bmXTzifxuHNKCg8pbexh4HKT3f%2BQYzizP1o9e5sPkSbchKM7LB9G7PGBcBrKRDB8QuqVh%2FxoVjDdJDANIlQofxSGRHeT6IgRyVoLxczxo1sFIy9ybFN1WnF1Tme6k0rJZXDhWYHqJWASLqmHIGAu1xqtr2dfzjvsJSWUurboZNJYuQmdjRBe%2BADpqq5PIK&X-Amz-Signature=6939084aa1b5cc83670283e0b7141c0db89d81f02dad9ce9f2dc6cb68ba09587&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOAEXXHY%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCr62UkX0xo6ci0EKqPpl21r5SDk%2B79ZyqIVA4RZcwCiAIhAPRmlhCcTWVZlKU8TJjhJ29w%2Bb2ASVur8Oi%2BJ3q%2BsfpbKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5%2F9jEABkpcP%2BcnfUq3APKTNBMDERO17tVc1u39oHIOToetgO8yZUVk4tePJtX00tgWIIZ9NysjhDBC2G0tWFM8xG9DhGRphIoCWPQbTfxNzJJN1cPaOIzO2Pcy8%2FSvEYMApLBAi5sJYobB%2BH1BT8RmvOd%2FcUESGmJEA1q2UOri77ZV63F%2FARQF3Z1aXKHJY793oOS0nrKbcxTOyfh6xCG352cUTjv4kvX2ksHm90BIx9KtBCyxcloj7GWUjlkKilKDgVbNQMyGnumPWpx%2Bfst0uVt95b%2FoZtRwXw8NEk3VAV1ceJ79JPmrxX%2FZovSSciZP8Pe0CfTLFk41Sdl7nx1ODboD2CREHUbCo0hPVUgRGEbqDx7rjqPdr5J9oZfPhnHLiOSc8j4hqBzuxgDD%2BSeoyMRx0ZXwebqCr83llp95AE7YOa8trscL1WFcZ8Cyf6tadibfcb93n2V%2Ffb89dQPZt4LmwXfYb8KO8%2BjrOZ2z3mLRkaP5x7iBme9OZZCqpK7t5rKnXoippGJ34eqYznBtH7Nsbidh%2BCFcl7odeE2uXBb1JfR4DsukZwy1Qj1Jym8ZlXhKXy92KZO45rbmXiABQKH61dYb3sv9gbmwIN2cSV0Sj3r91fZiYuh4vGntBmIq%2FYS8uz1Ld2CejCxidDCBjqkAcSJ7Zkls172pTpJ1V472rTQ19nMU8bmXTzifxuHNKCg8pbexh4HKT3f%2BQYzizP1o9e5sPkSbchKM7LB9G7PGBcBrKRDB8QuqVh%2FxoVjDdJDANIlQofxSGRHeT6IgRyVoLxczxo1sFIy9ybFN1WnF1Tme6k0rJZXDhWYHqJWASLqmHIGAu1xqtr2dfzjvsJSWUurboZNJYuQmdjRBe%2BADpqq5PIK&X-Amz-Signature=8de54678166c05c0b12edbf6264c980c929b1d55d4ec05bc210605cf7f19ae82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOAEXXHY%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCr62UkX0xo6ci0EKqPpl21r5SDk%2B79ZyqIVA4RZcwCiAIhAPRmlhCcTWVZlKU8TJjhJ29w%2Bb2ASVur8Oi%2BJ3q%2BsfpbKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5%2F9jEABkpcP%2BcnfUq3APKTNBMDERO17tVc1u39oHIOToetgO8yZUVk4tePJtX00tgWIIZ9NysjhDBC2G0tWFM8xG9DhGRphIoCWPQbTfxNzJJN1cPaOIzO2Pcy8%2FSvEYMApLBAi5sJYobB%2BH1BT8RmvOd%2FcUESGmJEA1q2UOri77ZV63F%2FARQF3Z1aXKHJY793oOS0nrKbcxTOyfh6xCG352cUTjv4kvX2ksHm90BIx9KtBCyxcloj7GWUjlkKilKDgVbNQMyGnumPWpx%2Bfst0uVt95b%2FoZtRwXw8NEk3VAV1ceJ79JPmrxX%2FZovSSciZP8Pe0CfTLFk41Sdl7nx1ODboD2CREHUbCo0hPVUgRGEbqDx7rjqPdr5J9oZfPhnHLiOSc8j4hqBzuxgDD%2BSeoyMRx0ZXwebqCr83llp95AE7YOa8trscL1WFcZ8Cyf6tadibfcb93n2V%2Ffb89dQPZt4LmwXfYb8KO8%2BjrOZ2z3mLRkaP5x7iBme9OZZCqpK7t5rKnXoippGJ34eqYznBtH7Nsbidh%2BCFcl7odeE2uXBb1JfR4DsukZwy1Qj1Jym8ZlXhKXy92KZO45rbmXiABQKH61dYb3sv9gbmwIN2cSV0Sj3r91fZiYuh4vGntBmIq%2FYS8uz1Ld2CejCxidDCBjqkAcSJ7Zkls172pTpJ1V472rTQ19nMU8bmXTzifxuHNKCg8pbexh4HKT3f%2BQYzizP1o9e5sPkSbchKM7LB9G7PGBcBrKRDB8QuqVh%2FxoVjDdJDANIlQofxSGRHeT6IgRyVoLxczxo1sFIy9ybFN1WnF1Tme6k0rJZXDhWYHqJWASLqmHIGAu1xqtr2dfzjvsJSWUurboZNJYuQmdjRBe%2BADpqq5PIK&X-Amz-Signature=d59ca561d676fe537e179256c98428740651d49f4778937f845c440045e35ee9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOAEXXHY%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCr62UkX0xo6ci0EKqPpl21r5SDk%2B79ZyqIVA4RZcwCiAIhAPRmlhCcTWVZlKU8TJjhJ29w%2Bb2ASVur8Oi%2BJ3q%2BsfpbKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5%2F9jEABkpcP%2BcnfUq3APKTNBMDERO17tVc1u39oHIOToetgO8yZUVk4tePJtX00tgWIIZ9NysjhDBC2G0tWFM8xG9DhGRphIoCWPQbTfxNzJJN1cPaOIzO2Pcy8%2FSvEYMApLBAi5sJYobB%2BH1BT8RmvOd%2FcUESGmJEA1q2UOri77ZV63F%2FARQF3Z1aXKHJY793oOS0nrKbcxTOyfh6xCG352cUTjv4kvX2ksHm90BIx9KtBCyxcloj7GWUjlkKilKDgVbNQMyGnumPWpx%2Bfst0uVt95b%2FoZtRwXw8NEk3VAV1ceJ79JPmrxX%2FZovSSciZP8Pe0CfTLFk41Sdl7nx1ODboD2CREHUbCo0hPVUgRGEbqDx7rjqPdr5J9oZfPhnHLiOSc8j4hqBzuxgDD%2BSeoyMRx0ZXwebqCr83llp95AE7YOa8trscL1WFcZ8Cyf6tadibfcb93n2V%2Ffb89dQPZt4LmwXfYb8KO8%2BjrOZ2z3mLRkaP5x7iBme9OZZCqpK7t5rKnXoippGJ34eqYznBtH7Nsbidh%2BCFcl7odeE2uXBb1JfR4DsukZwy1Qj1Jym8ZlXhKXy92KZO45rbmXiABQKH61dYb3sv9gbmwIN2cSV0Sj3r91fZiYuh4vGntBmIq%2FYS8uz1Ld2CejCxidDCBjqkAcSJ7Zkls172pTpJ1V472rTQ19nMU8bmXTzifxuHNKCg8pbexh4HKT3f%2BQYzizP1o9e5sPkSbchKM7LB9G7PGBcBrKRDB8QuqVh%2FxoVjDdJDANIlQofxSGRHeT6IgRyVoLxczxo1sFIy9ybFN1WnF1Tme6k0rJZXDhWYHqJWASLqmHIGAu1xqtr2dfzjvsJSWUurboZNJYuQmdjRBe%2BADpqq5PIK&X-Amz-Signature=6810f584f21a6959f5f6d30279af52795c43123abdafc469cb4b41f9dbed3f4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOAEXXHY%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCr62UkX0xo6ci0EKqPpl21r5SDk%2B79ZyqIVA4RZcwCiAIhAPRmlhCcTWVZlKU8TJjhJ29w%2Bb2ASVur8Oi%2BJ3q%2BsfpbKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5%2F9jEABkpcP%2BcnfUq3APKTNBMDERO17tVc1u39oHIOToetgO8yZUVk4tePJtX00tgWIIZ9NysjhDBC2G0tWFM8xG9DhGRphIoCWPQbTfxNzJJN1cPaOIzO2Pcy8%2FSvEYMApLBAi5sJYobB%2BH1BT8RmvOd%2FcUESGmJEA1q2UOri77ZV63F%2FARQF3Z1aXKHJY793oOS0nrKbcxTOyfh6xCG352cUTjv4kvX2ksHm90BIx9KtBCyxcloj7GWUjlkKilKDgVbNQMyGnumPWpx%2Bfst0uVt95b%2FoZtRwXw8NEk3VAV1ceJ79JPmrxX%2FZovSSciZP8Pe0CfTLFk41Sdl7nx1ODboD2CREHUbCo0hPVUgRGEbqDx7rjqPdr5J9oZfPhnHLiOSc8j4hqBzuxgDD%2BSeoyMRx0ZXwebqCr83llp95AE7YOa8trscL1WFcZ8Cyf6tadibfcb93n2V%2Ffb89dQPZt4LmwXfYb8KO8%2BjrOZ2z3mLRkaP5x7iBme9OZZCqpK7t5rKnXoippGJ34eqYznBtH7Nsbidh%2BCFcl7odeE2uXBb1JfR4DsukZwy1Qj1Jym8ZlXhKXy92KZO45rbmXiABQKH61dYb3sv9gbmwIN2cSV0Sj3r91fZiYuh4vGntBmIq%2FYS8uz1Ld2CejCxidDCBjqkAcSJ7Zkls172pTpJ1V472rTQ19nMU8bmXTzifxuHNKCg8pbexh4HKT3f%2BQYzizP1o9e5sPkSbchKM7LB9G7PGBcBrKRDB8QuqVh%2FxoVjDdJDANIlQofxSGRHeT6IgRyVoLxczxo1sFIy9ybFN1WnF1Tme6k0rJZXDhWYHqJWASLqmHIGAu1xqtr2dfzjvsJSWUurboZNJYuQmdjRBe%2BADpqq5PIK&X-Amz-Signature=f3e65dff703cc5f7d1f90d917003ad4286a81aab162210c254fa64bf58bc5ce3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOAEXXHY%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCr62UkX0xo6ci0EKqPpl21r5SDk%2B79ZyqIVA4RZcwCiAIhAPRmlhCcTWVZlKU8TJjhJ29w%2Bb2ASVur8Oi%2BJ3q%2BsfpbKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5%2F9jEABkpcP%2BcnfUq3APKTNBMDERO17tVc1u39oHIOToetgO8yZUVk4tePJtX00tgWIIZ9NysjhDBC2G0tWFM8xG9DhGRphIoCWPQbTfxNzJJN1cPaOIzO2Pcy8%2FSvEYMApLBAi5sJYobB%2BH1BT8RmvOd%2FcUESGmJEA1q2UOri77ZV63F%2FARQF3Z1aXKHJY793oOS0nrKbcxTOyfh6xCG352cUTjv4kvX2ksHm90BIx9KtBCyxcloj7GWUjlkKilKDgVbNQMyGnumPWpx%2Bfst0uVt95b%2FoZtRwXw8NEk3VAV1ceJ79JPmrxX%2FZovSSciZP8Pe0CfTLFk41Sdl7nx1ODboD2CREHUbCo0hPVUgRGEbqDx7rjqPdr5J9oZfPhnHLiOSc8j4hqBzuxgDD%2BSeoyMRx0ZXwebqCr83llp95AE7YOa8trscL1WFcZ8Cyf6tadibfcb93n2V%2Ffb89dQPZt4LmwXfYb8KO8%2BjrOZ2z3mLRkaP5x7iBme9OZZCqpK7t5rKnXoippGJ34eqYznBtH7Nsbidh%2BCFcl7odeE2uXBb1JfR4DsukZwy1Qj1Jym8ZlXhKXy92KZO45rbmXiABQKH61dYb3sv9gbmwIN2cSV0Sj3r91fZiYuh4vGntBmIq%2FYS8uz1Ld2CejCxidDCBjqkAcSJ7Zkls172pTpJ1V472rTQ19nMU8bmXTzifxuHNKCg8pbexh4HKT3f%2BQYzizP1o9e5sPkSbchKM7LB9G7PGBcBrKRDB8QuqVh%2FxoVjDdJDANIlQofxSGRHeT6IgRyVoLxczxo1sFIy9ybFN1WnF1Tme6k0rJZXDhWYHqJWASLqmHIGAu1xqtr2dfzjvsJSWUurboZNJYuQmdjRBe%2BADpqq5PIK&X-Amz-Signature=14ecd1bb9032a0c039a2702c4d4b3d795116544d02d15b26b62a98dfd0ef90bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
