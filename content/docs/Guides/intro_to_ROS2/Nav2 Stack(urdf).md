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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOZRPPG3%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIGjUOtaAdupGDxsrbwsMEi689VjWui9oJLf5etsfgJ%2BFAiBqlC9a%2BahV1%2BwV%2FjcAzt1uLLSY2Q%2BXiS5Uq4skpTnXgyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMFZU4Mk4DJFKlxVwmKtwDe5UkvvuxR12EHff92xl6EnSO%2Fo3pdfpjoDrKbyqqp05kvyG4Q6RgJPNCOK0BocVoKd%2BZgwSAp0O0nrhOf2HI9lKehzIMuK4rBmeCjTyrckTwcKKiuTG7kRPyE0zxh%2FM%2BktIMEaYrkwAQ0nOaoNH906ImkOqmUhxA5rqojz0DR9c6JAhL8QuZkaHAyMzaqkTthodEDzJT5yxs4Zly1j2EDaLhP89Yyt%2F304oSLZGz%2F2PSHmJmlZH9U8EOwHAurz%2BPwXPD%2Fy1bvhRqhPAC%2B8W5ELtp7SMHOZjApKkxQ%2F3Bka7Ef3t3FiNkgFvHQ%2BsxZAXYcUKF8tLFZ6yAsPwC5Wjj9uJ16jKYxjF2xItLxtrlQxPVS1p4N6TlmZFeaayBTK0pfPODQPTk0g%2BnXyfr7cohx7lJ7DkpDsmt9YDqcbr4gNS0lcBjXXHJMfFQG1%2BNqfKkzdSs3Toiec3Fjm4J5WIrqhGQ2zOICYzkYioacVXQfAOeHAQ92IvFdc554JOD0EzjFEnXKvOsiPmt%2BMS7P9PTaDmHOcELQXWl7%2FgzXOh4z5WEM2vLGnn3qS8%2BYP0k1r9AmPwJCRw%2FEF4x4iyyTccuZiavm9rFfowW1BmSfgtI%2BXlfRAcGOOzODMqJED0wxo3xwgY6pgGg%2FyqOBeUW9AApkK8NLLy7AZsQzAhRTdgfRmPChPLs3iCKV6QGCPSYuXoM%2Fa0b9ixn3KZ%2B5n%2F2KUYr28%2FwALHArfNEkGiXRAX2lXRKbr7YDcxrtCq6ooGUQt2O45s%2FJiVKDDB%2Ffm7XPMpYN52d6tQPMx8dLnBtBG67xlTltctZqbAxltHu%2B%2BMo2qw5Vn8XVL5Jk0bWqFcn9vtMtOS7b5UtJbL1mtKM&X-Amz-Signature=e6568fbf6cb2f55da1dc39f9ee49ee1579ec07f3962df9c157736b2cbaf650f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOZRPPG3%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIGjUOtaAdupGDxsrbwsMEi689VjWui9oJLf5etsfgJ%2BFAiBqlC9a%2BahV1%2BwV%2FjcAzt1uLLSY2Q%2BXiS5Uq4skpTnXgyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMFZU4Mk4DJFKlxVwmKtwDe5UkvvuxR12EHff92xl6EnSO%2Fo3pdfpjoDrKbyqqp05kvyG4Q6RgJPNCOK0BocVoKd%2BZgwSAp0O0nrhOf2HI9lKehzIMuK4rBmeCjTyrckTwcKKiuTG7kRPyE0zxh%2FM%2BktIMEaYrkwAQ0nOaoNH906ImkOqmUhxA5rqojz0DR9c6JAhL8QuZkaHAyMzaqkTthodEDzJT5yxs4Zly1j2EDaLhP89Yyt%2F304oSLZGz%2F2PSHmJmlZH9U8EOwHAurz%2BPwXPD%2Fy1bvhRqhPAC%2B8W5ELtp7SMHOZjApKkxQ%2F3Bka7Ef3t3FiNkgFvHQ%2BsxZAXYcUKF8tLFZ6yAsPwC5Wjj9uJ16jKYxjF2xItLxtrlQxPVS1p4N6TlmZFeaayBTK0pfPODQPTk0g%2BnXyfr7cohx7lJ7DkpDsmt9YDqcbr4gNS0lcBjXXHJMfFQG1%2BNqfKkzdSs3Toiec3Fjm4J5WIrqhGQ2zOICYzkYioacVXQfAOeHAQ92IvFdc554JOD0EzjFEnXKvOsiPmt%2BMS7P9PTaDmHOcELQXWl7%2FgzXOh4z5WEM2vLGnn3qS8%2BYP0k1r9AmPwJCRw%2FEF4x4iyyTccuZiavm9rFfowW1BmSfgtI%2BXlfRAcGOOzODMqJED0wxo3xwgY6pgGg%2FyqOBeUW9AApkK8NLLy7AZsQzAhRTdgfRmPChPLs3iCKV6QGCPSYuXoM%2Fa0b9ixn3KZ%2B5n%2F2KUYr28%2FwALHArfNEkGiXRAX2lXRKbr7YDcxrtCq6ooGUQt2O45s%2FJiVKDDB%2Ffm7XPMpYN52d6tQPMx8dLnBtBG67xlTltctZqbAxltHu%2B%2BMo2qw5Vn8XVL5Jk0bWqFcn9vtMtOS7b5UtJbL1mtKM&X-Amz-Signature=bad6f7734b6c9b1169ba0fdcb17a29caf314dac2a212ee76bd0d617f6e45a053&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOZRPPG3%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIGjUOtaAdupGDxsrbwsMEi689VjWui9oJLf5etsfgJ%2BFAiBqlC9a%2BahV1%2BwV%2FjcAzt1uLLSY2Q%2BXiS5Uq4skpTnXgyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMFZU4Mk4DJFKlxVwmKtwDe5UkvvuxR12EHff92xl6EnSO%2Fo3pdfpjoDrKbyqqp05kvyG4Q6RgJPNCOK0BocVoKd%2BZgwSAp0O0nrhOf2HI9lKehzIMuK4rBmeCjTyrckTwcKKiuTG7kRPyE0zxh%2FM%2BktIMEaYrkwAQ0nOaoNH906ImkOqmUhxA5rqojz0DR9c6JAhL8QuZkaHAyMzaqkTthodEDzJT5yxs4Zly1j2EDaLhP89Yyt%2F304oSLZGz%2F2PSHmJmlZH9U8EOwHAurz%2BPwXPD%2Fy1bvhRqhPAC%2B8W5ELtp7SMHOZjApKkxQ%2F3Bka7Ef3t3FiNkgFvHQ%2BsxZAXYcUKF8tLFZ6yAsPwC5Wjj9uJ16jKYxjF2xItLxtrlQxPVS1p4N6TlmZFeaayBTK0pfPODQPTk0g%2BnXyfr7cohx7lJ7DkpDsmt9YDqcbr4gNS0lcBjXXHJMfFQG1%2BNqfKkzdSs3Toiec3Fjm4J5WIrqhGQ2zOICYzkYioacVXQfAOeHAQ92IvFdc554JOD0EzjFEnXKvOsiPmt%2BMS7P9PTaDmHOcELQXWl7%2FgzXOh4z5WEM2vLGnn3qS8%2BYP0k1r9AmPwJCRw%2FEF4x4iyyTccuZiavm9rFfowW1BmSfgtI%2BXlfRAcGOOzODMqJED0wxo3xwgY6pgGg%2FyqOBeUW9AApkK8NLLy7AZsQzAhRTdgfRmPChPLs3iCKV6QGCPSYuXoM%2Fa0b9ixn3KZ%2B5n%2F2KUYr28%2FwALHArfNEkGiXRAX2lXRKbr7YDcxrtCq6ooGUQt2O45s%2FJiVKDDB%2Ffm7XPMpYN52d6tQPMx8dLnBtBG67xlTltctZqbAxltHu%2B%2BMo2qw5Vn8XVL5Jk0bWqFcn9vtMtOS7b5UtJbL1mtKM&X-Amz-Signature=7e98c0ac94d2a8ad81fd6cc40464190b1c29d648b7aecfebbd465d89e175a59f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOZRPPG3%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIGjUOtaAdupGDxsrbwsMEi689VjWui9oJLf5etsfgJ%2BFAiBqlC9a%2BahV1%2BwV%2FjcAzt1uLLSY2Q%2BXiS5Uq4skpTnXgyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMFZU4Mk4DJFKlxVwmKtwDe5UkvvuxR12EHff92xl6EnSO%2Fo3pdfpjoDrKbyqqp05kvyG4Q6RgJPNCOK0BocVoKd%2BZgwSAp0O0nrhOf2HI9lKehzIMuK4rBmeCjTyrckTwcKKiuTG7kRPyE0zxh%2FM%2BktIMEaYrkwAQ0nOaoNH906ImkOqmUhxA5rqojz0DR9c6JAhL8QuZkaHAyMzaqkTthodEDzJT5yxs4Zly1j2EDaLhP89Yyt%2F304oSLZGz%2F2PSHmJmlZH9U8EOwHAurz%2BPwXPD%2Fy1bvhRqhPAC%2B8W5ELtp7SMHOZjApKkxQ%2F3Bka7Ef3t3FiNkgFvHQ%2BsxZAXYcUKF8tLFZ6yAsPwC5Wjj9uJ16jKYxjF2xItLxtrlQxPVS1p4N6TlmZFeaayBTK0pfPODQPTk0g%2BnXyfr7cohx7lJ7DkpDsmt9YDqcbr4gNS0lcBjXXHJMfFQG1%2BNqfKkzdSs3Toiec3Fjm4J5WIrqhGQ2zOICYzkYioacVXQfAOeHAQ92IvFdc554JOD0EzjFEnXKvOsiPmt%2BMS7P9PTaDmHOcELQXWl7%2FgzXOh4z5WEM2vLGnn3qS8%2BYP0k1r9AmPwJCRw%2FEF4x4iyyTccuZiavm9rFfowW1BmSfgtI%2BXlfRAcGOOzODMqJED0wxo3xwgY6pgGg%2FyqOBeUW9AApkK8NLLy7AZsQzAhRTdgfRmPChPLs3iCKV6QGCPSYuXoM%2Fa0b9ixn3KZ%2B5n%2F2KUYr28%2FwALHArfNEkGiXRAX2lXRKbr7YDcxrtCq6ooGUQt2O45s%2FJiVKDDB%2Ffm7XPMpYN52d6tQPMx8dLnBtBG67xlTltctZqbAxltHu%2B%2BMo2qw5Vn8XVL5Jk0bWqFcn9vtMtOS7b5UtJbL1mtKM&X-Amz-Signature=bc68fc8035c62fb83f6b22b4a7725e9967452c1b6105526e8279fb7c84808cc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOZRPPG3%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIGjUOtaAdupGDxsrbwsMEi689VjWui9oJLf5etsfgJ%2BFAiBqlC9a%2BahV1%2BwV%2FjcAzt1uLLSY2Q%2BXiS5Uq4skpTnXgyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMFZU4Mk4DJFKlxVwmKtwDe5UkvvuxR12EHff92xl6EnSO%2Fo3pdfpjoDrKbyqqp05kvyG4Q6RgJPNCOK0BocVoKd%2BZgwSAp0O0nrhOf2HI9lKehzIMuK4rBmeCjTyrckTwcKKiuTG7kRPyE0zxh%2FM%2BktIMEaYrkwAQ0nOaoNH906ImkOqmUhxA5rqojz0DR9c6JAhL8QuZkaHAyMzaqkTthodEDzJT5yxs4Zly1j2EDaLhP89Yyt%2F304oSLZGz%2F2PSHmJmlZH9U8EOwHAurz%2BPwXPD%2Fy1bvhRqhPAC%2B8W5ELtp7SMHOZjApKkxQ%2F3Bka7Ef3t3FiNkgFvHQ%2BsxZAXYcUKF8tLFZ6yAsPwC5Wjj9uJ16jKYxjF2xItLxtrlQxPVS1p4N6TlmZFeaayBTK0pfPODQPTk0g%2BnXyfr7cohx7lJ7DkpDsmt9YDqcbr4gNS0lcBjXXHJMfFQG1%2BNqfKkzdSs3Toiec3Fjm4J5WIrqhGQ2zOICYzkYioacVXQfAOeHAQ92IvFdc554JOD0EzjFEnXKvOsiPmt%2BMS7P9PTaDmHOcELQXWl7%2FgzXOh4z5WEM2vLGnn3qS8%2BYP0k1r9AmPwJCRw%2FEF4x4iyyTccuZiavm9rFfowW1BmSfgtI%2BXlfRAcGOOzODMqJED0wxo3xwgY6pgGg%2FyqOBeUW9AApkK8NLLy7AZsQzAhRTdgfRmPChPLs3iCKV6QGCPSYuXoM%2Fa0b9ixn3KZ%2B5n%2F2KUYr28%2FwALHArfNEkGiXRAX2lXRKbr7YDcxrtCq6ooGUQt2O45s%2FJiVKDDB%2Ffm7XPMpYN52d6tQPMx8dLnBtBG67xlTltctZqbAxltHu%2B%2BMo2qw5Vn8XVL5Jk0bWqFcn9vtMtOS7b5UtJbL1mtKM&X-Amz-Signature=190d20c1e6cd86ec1ff60acba4a2216b89c8c816b718a2e409c2a4d00729938f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOZRPPG3%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIGjUOtaAdupGDxsrbwsMEi689VjWui9oJLf5etsfgJ%2BFAiBqlC9a%2BahV1%2BwV%2FjcAzt1uLLSY2Q%2BXiS5Uq4skpTnXgyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMFZU4Mk4DJFKlxVwmKtwDe5UkvvuxR12EHff92xl6EnSO%2Fo3pdfpjoDrKbyqqp05kvyG4Q6RgJPNCOK0BocVoKd%2BZgwSAp0O0nrhOf2HI9lKehzIMuK4rBmeCjTyrckTwcKKiuTG7kRPyE0zxh%2FM%2BktIMEaYrkwAQ0nOaoNH906ImkOqmUhxA5rqojz0DR9c6JAhL8QuZkaHAyMzaqkTthodEDzJT5yxs4Zly1j2EDaLhP89Yyt%2F304oSLZGz%2F2PSHmJmlZH9U8EOwHAurz%2BPwXPD%2Fy1bvhRqhPAC%2B8W5ELtp7SMHOZjApKkxQ%2F3Bka7Ef3t3FiNkgFvHQ%2BsxZAXYcUKF8tLFZ6yAsPwC5Wjj9uJ16jKYxjF2xItLxtrlQxPVS1p4N6TlmZFeaayBTK0pfPODQPTk0g%2BnXyfr7cohx7lJ7DkpDsmt9YDqcbr4gNS0lcBjXXHJMfFQG1%2BNqfKkzdSs3Toiec3Fjm4J5WIrqhGQ2zOICYzkYioacVXQfAOeHAQ92IvFdc554JOD0EzjFEnXKvOsiPmt%2BMS7P9PTaDmHOcELQXWl7%2FgzXOh4z5WEM2vLGnn3qS8%2BYP0k1r9AmPwJCRw%2FEF4x4iyyTccuZiavm9rFfowW1BmSfgtI%2BXlfRAcGOOzODMqJED0wxo3xwgY6pgGg%2FyqOBeUW9AApkK8NLLy7AZsQzAhRTdgfRmPChPLs3iCKV6QGCPSYuXoM%2Fa0b9ixn3KZ%2B5n%2F2KUYr28%2FwALHArfNEkGiXRAX2lXRKbr7YDcxrtCq6ooGUQt2O45s%2FJiVKDDB%2Ffm7XPMpYN52d6tQPMx8dLnBtBG67xlTltctZqbAxltHu%2B%2BMo2qw5Vn8XVL5Jk0bWqFcn9vtMtOS7b5UtJbL1mtKM&X-Amz-Signature=080175329d5cbf2e908a66ecad1a4be09a01db03cdd9c4f4df97373aa143f4a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
