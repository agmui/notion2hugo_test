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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N3U4EH6%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb1%2BjBiLxNtUt4u2CUUNJjklZRoSXmtFkypUXXCmS%2FFwIgbFfLEbIG%2By51wNec8k4yFaa5WbhZisqT4Oif0rtO9%2FIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDDvHMOad8IQAVHqCJSrcA4F2qmkGLu%2FfZ%2Fw4gutejN0sJ0jkgV1SMqAeA0Nny%2FfiJVT%2FNpxRUD%2F7E9Yq2V5VfD%2FU6G0kiAAaBCg6H1yVfn%2FFYfRtj36vsl3wu9QfW16IYCVrBw%2FGj0%2BHqHNTmqEuw0obXtb%2Fze2IuA3Fj0Jw%2BBiSRZCWN%2BNCRVfw2J30HMlMQq28HLUYwj0tLlzQJRqbf%2FWW1HCuZYh59pPFO5QeciTL9nrROBRq8zqQ9tgb9S1KBJbQ3qPoGXWr%2Bg7YhWZYuNQWb6GDt2dyLDINz5yrBOA90Tvlh3lTFYdLlQZBSm5aixK6taszuMo3Uj2Rlkx2kcw4ydBO0%2F3UF5qv7JvS97bPvACJ%2BR02ohwg1kLn0y3hkbfmIutP%2FHAJSqN4%2FHHRU9pKo550zyH5P%2F6hiv71q7EKIIqWuCAzeMMpSlyO0kcYUNN4eCBA8GrBqAv0eROkWQIq7JIqKydKa1yWkF1L%2Fu%2BUKavVPaTEJiVWRevC0gwVWou0Drwenahmq%2F9lF02hD%2FiaC2ptmR%2FV8rgmGHTPvrKf8n7cr6OpDofGB%2F6WIMWP9jIxW5p8mjbCziI6YstUqR5tZ3TfXzn8WTzKM8XHV%2FxR%2FcpnCf9AVo9ZyOvccpp%2BopsimGx0KZnHa%2FefML6kzcMGOqUB249tWORP5rcBs6XpkY3m5Q00I9j%2BGkD1IktRrWSMFygxiTfatm1Ikeuu0OYjavf0WdekMhqSR%2BeHagSturdtJDyBkBH73PRGPC50ee8C9QHdyO%2Bq95upvXJ4wlHjZMl8fjFqJhMe0sWHRtisjZWhLfJpit0CxBrEXecziVhn2zq6Jm2w1CO9jzQK3fjVA3k1ITIRdbhoYD%2B7wPzjB2S57BAkbzdJ&X-Amz-Signature=d11a1bd7ccb7ffbac91c30c1fd8731022a0b605969137e44c19305f962c31b7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N3U4EH6%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb1%2BjBiLxNtUt4u2CUUNJjklZRoSXmtFkypUXXCmS%2FFwIgbFfLEbIG%2By51wNec8k4yFaa5WbhZisqT4Oif0rtO9%2FIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDDvHMOad8IQAVHqCJSrcA4F2qmkGLu%2FfZ%2Fw4gutejN0sJ0jkgV1SMqAeA0Nny%2FfiJVT%2FNpxRUD%2F7E9Yq2V5VfD%2FU6G0kiAAaBCg6H1yVfn%2FFYfRtj36vsl3wu9QfW16IYCVrBw%2FGj0%2BHqHNTmqEuw0obXtb%2Fze2IuA3Fj0Jw%2BBiSRZCWN%2BNCRVfw2J30HMlMQq28HLUYwj0tLlzQJRqbf%2FWW1HCuZYh59pPFO5QeciTL9nrROBRq8zqQ9tgb9S1KBJbQ3qPoGXWr%2Bg7YhWZYuNQWb6GDt2dyLDINz5yrBOA90Tvlh3lTFYdLlQZBSm5aixK6taszuMo3Uj2Rlkx2kcw4ydBO0%2F3UF5qv7JvS97bPvACJ%2BR02ohwg1kLn0y3hkbfmIutP%2FHAJSqN4%2FHHRU9pKo550zyH5P%2F6hiv71q7EKIIqWuCAzeMMpSlyO0kcYUNN4eCBA8GrBqAv0eROkWQIq7JIqKydKa1yWkF1L%2Fu%2BUKavVPaTEJiVWRevC0gwVWou0Drwenahmq%2F9lF02hD%2FiaC2ptmR%2FV8rgmGHTPvrKf8n7cr6OpDofGB%2F6WIMWP9jIxW5p8mjbCziI6YstUqR5tZ3TfXzn8WTzKM8XHV%2FxR%2FcpnCf9AVo9ZyOvccpp%2BopsimGx0KZnHa%2FefML6kzcMGOqUB249tWORP5rcBs6XpkY3m5Q00I9j%2BGkD1IktRrWSMFygxiTfatm1Ikeuu0OYjavf0WdekMhqSR%2BeHagSturdtJDyBkBH73PRGPC50ee8C9QHdyO%2Bq95upvXJ4wlHjZMl8fjFqJhMe0sWHRtisjZWhLfJpit0CxBrEXecziVhn2zq6Jm2w1CO9jzQK3fjVA3k1ITIRdbhoYD%2B7wPzjB2S57BAkbzdJ&X-Amz-Signature=d5146f34b71b7e8ee03748e9f91fe9461edeba5ba510d31921fd9540902614bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N3U4EH6%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb1%2BjBiLxNtUt4u2CUUNJjklZRoSXmtFkypUXXCmS%2FFwIgbFfLEbIG%2By51wNec8k4yFaa5WbhZisqT4Oif0rtO9%2FIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDDvHMOad8IQAVHqCJSrcA4F2qmkGLu%2FfZ%2Fw4gutejN0sJ0jkgV1SMqAeA0Nny%2FfiJVT%2FNpxRUD%2F7E9Yq2V5VfD%2FU6G0kiAAaBCg6H1yVfn%2FFYfRtj36vsl3wu9QfW16IYCVrBw%2FGj0%2BHqHNTmqEuw0obXtb%2Fze2IuA3Fj0Jw%2BBiSRZCWN%2BNCRVfw2J30HMlMQq28HLUYwj0tLlzQJRqbf%2FWW1HCuZYh59pPFO5QeciTL9nrROBRq8zqQ9tgb9S1KBJbQ3qPoGXWr%2Bg7YhWZYuNQWb6GDt2dyLDINz5yrBOA90Tvlh3lTFYdLlQZBSm5aixK6taszuMo3Uj2Rlkx2kcw4ydBO0%2F3UF5qv7JvS97bPvACJ%2BR02ohwg1kLn0y3hkbfmIutP%2FHAJSqN4%2FHHRU9pKo550zyH5P%2F6hiv71q7EKIIqWuCAzeMMpSlyO0kcYUNN4eCBA8GrBqAv0eROkWQIq7JIqKydKa1yWkF1L%2Fu%2BUKavVPaTEJiVWRevC0gwVWou0Drwenahmq%2F9lF02hD%2FiaC2ptmR%2FV8rgmGHTPvrKf8n7cr6OpDofGB%2F6WIMWP9jIxW5p8mjbCziI6YstUqR5tZ3TfXzn8WTzKM8XHV%2FxR%2FcpnCf9AVo9ZyOvccpp%2BopsimGx0KZnHa%2FefML6kzcMGOqUB249tWORP5rcBs6XpkY3m5Q00I9j%2BGkD1IktRrWSMFygxiTfatm1Ikeuu0OYjavf0WdekMhqSR%2BeHagSturdtJDyBkBH73PRGPC50ee8C9QHdyO%2Bq95upvXJ4wlHjZMl8fjFqJhMe0sWHRtisjZWhLfJpit0CxBrEXecziVhn2zq6Jm2w1CO9jzQK3fjVA3k1ITIRdbhoYD%2B7wPzjB2S57BAkbzdJ&X-Amz-Signature=214a6fad600ec52684431f9c3fe03380ed4be5361a44956d29586de6e314b433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N3U4EH6%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb1%2BjBiLxNtUt4u2CUUNJjklZRoSXmtFkypUXXCmS%2FFwIgbFfLEbIG%2By51wNec8k4yFaa5WbhZisqT4Oif0rtO9%2FIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDDvHMOad8IQAVHqCJSrcA4F2qmkGLu%2FfZ%2Fw4gutejN0sJ0jkgV1SMqAeA0Nny%2FfiJVT%2FNpxRUD%2F7E9Yq2V5VfD%2FU6G0kiAAaBCg6H1yVfn%2FFYfRtj36vsl3wu9QfW16IYCVrBw%2FGj0%2BHqHNTmqEuw0obXtb%2Fze2IuA3Fj0Jw%2BBiSRZCWN%2BNCRVfw2J30HMlMQq28HLUYwj0tLlzQJRqbf%2FWW1HCuZYh59pPFO5QeciTL9nrROBRq8zqQ9tgb9S1KBJbQ3qPoGXWr%2Bg7YhWZYuNQWb6GDt2dyLDINz5yrBOA90Tvlh3lTFYdLlQZBSm5aixK6taszuMo3Uj2Rlkx2kcw4ydBO0%2F3UF5qv7JvS97bPvACJ%2BR02ohwg1kLn0y3hkbfmIutP%2FHAJSqN4%2FHHRU9pKo550zyH5P%2F6hiv71q7EKIIqWuCAzeMMpSlyO0kcYUNN4eCBA8GrBqAv0eROkWQIq7JIqKydKa1yWkF1L%2Fu%2BUKavVPaTEJiVWRevC0gwVWou0Drwenahmq%2F9lF02hD%2FiaC2ptmR%2FV8rgmGHTPvrKf8n7cr6OpDofGB%2F6WIMWP9jIxW5p8mjbCziI6YstUqR5tZ3TfXzn8WTzKM8XHV%2FxR%2FcpnCf9AVo9ZyOvccpp%2BopsimGx0KZnHa%2FefML6kzcMGOqUB249tWORP5rcBs6XpkY3m5Q00I9j%2BGkD1IktRrWSMFygxiTfatm1Ikeuu0OYjavf0WdekMhqSR%2BeHagSturdtJDyBkBH73PRGPC50ee8C9QHdyO%2Bq95upvXJ4wlHjZMl8fjFqJhMe0sWHRtisjZWhLfJpit0CxBrEXecziVhn2zq6Jm2w1CO9jzQK3fjVA3k1ITIRdbhoYD%2B7wPzjB2S57BAkbzdJ&X-Amz-Signature=e5be9491984182d7a1b614a0d158b16e5ea21cc9a7ad76ca6cbabdbb40c43b23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N3U4EH6%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb1%2BjBiLxNtUt4u2CUUNJjklZRoSXmtFkypUXXCmS%2FFwIgbFfLEbIG%2By51wNec8k4yFaa5WbhZisqT4Oif0rtO9%2FIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDDvHMOad8IQAVHqCJSrcA4F2qmkGLu%2FfZ%2Fw4gutejN0sJ0jkgV1SMqAeA0Nny%2FfiJVT%2FNpxRUD%2F7E9Yq2V5VfD%2FU6G0kiAAaBCg6H1yVfn%2FFYfRtj36vsl3wu9QfW16IYCVrBw%2FGj0%2BHqHNTmqEuw0obXtb%2Fze2IuA3Fj0Jw%2BBiSRZCWN%2BNCRVfw2J30HMlMQq28HLUYwj0tLlzQJRqbf%2FWW1HCuZYh59pPFO5QeciTL9nrROBRq8zqQ9tgb9S1KBJbQ3qPoGXWr%2Bg7YhWZYuNQWb6GDt2dyLDINz5yrBOA90Tvlh3lTFYdLlQZBSm5aixK6taszuMo3Uj2Rlkx2kcw4ydBO0%2F3UF5qv7JvS97bPvACJ%2BR02ohwg1kLn0y3hkbfmIutP%2FHAJSqN4%2FHHRU9pKo550zyH5P%2F6hiv71q7EKIIqWuCAzeMMpSlyO0kcYUNN4eCBA8GrBqAv0eROkWQIq7JIqKydKa1yWkF1L%2Fu%2BUKavVPaTEJiVWRevC0gwVWou0Drwenahmq%2F9lF02hD%2FiaC2ptmR%2FV8rgmGHTPvrKf8n7cr6OpDofGB%2F6WIMWP9jIxW5p8mjbCziI6YstUqR5tZ3TfXzn8WTzKM8XHV%2FxR%2FcpnCf9AVo9ZyOvccpp%2BopsimGx0KZnHa%2FefML6kzcMGOqUB249tWORP5rcBs6XpkY3m5Q00I9j%2BGkD1IktRrWSMFygxiTfatm1Ikeuu0OYjavf0WdekMhqSR%2BeHagSturdtJDyBkBH73PRGPC50ee8C9QHdyO%2Bq95upvXJ4wlHjZMl8fjFqJhMe0sWHRtisjZWhLfJpit0CxBrEXecziVhn2zq6Jm2w1CO9jzQK3fjVA3k1ITIRdbhoYD%2B7wPzjB2S57BAkbzdJ&X-Amz-Signature=9a69b080691887cd213892733bb7da7de971a3da5e3f73d6ccfad4ff6d4dee1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667N3U4EH6%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDb1%2BjBiLxNtUt4u2CUUNJjklZRoSXmtFkypUXXCmS%2FFwIgbFfLEbIG%2By51wNec8k4yFaa5WbhZisqT4Oif0rtO9%2FIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDDvHMOad8IQAVHqCJSrcA4F2qmkGLu%2FfZ%2Fw4gutejN0sJ0jkgV1SMqAeA0Nny%2FfiJVT%2FNpxRUD%2F7E9Yq2V5VfD%2FU6G0kiAAaBCg6H1yVfn%2FFYfRtj36vsl3wu9QfW16IYCVrBw%2FGj0%2BHqHNTmqEuw0obXtb%2Fze2IuA3Fj0Jw%2BBiSRZCWN%2BNCRVfw2J30HMlMQq28HLUYwj0tLlzQJRqbf%2FWW1HCuZYh59pPFO5QeciTL9nrROBRq8zqQ9tgb9S1KBJbQ3qPoGXWr%2Bg7YhWZYuNQWb6GDt2dyLDINz5yrBOA90Tvlh3lTFYdLlQZBSm5aixK6taszuMo3Uj2Rlkx2kcw4ydBO0%2F3UF5qv7JvS97bPvACJ%2BR02ohwg1kLn0y3hkbfmIutP%2FHAJSqN4%2FHHRU9pKo550zyH5P%2F6hiv71q7EKIIqWuCAzeMMpSlyO0kcYUNN4eCBA8GrBqAv0eROkWQIq7JIqKydKa1yWkF1L%2Fu%2BUKavVPaTEJiVWRevC0gwVWou0Drwenahmq%2F9lF02hD%2FiaC2ptmR%2FV8rgmGHTPvrKf8n7cr6OpDofGB%2F6WIMWP9jIxW5p8mjbCziI6YstUqR5tZ3TfXzn8WTzKM8XHV%2FxR%2FcpnCf9AVo9ZyOvccpp%2BopsimGx0KZnHa%2FefML6kzcMGOqUB249tWORP5rcBs6XpkY3m5Q00I9j%2BGkD1IktRrWSMFygxiTfatm1Ikeuu0OYjavf0WdekMhqSR%2BeHagSturdtJDyBkBH73PRGPC50ee8C9QHdyO%2Bq95upvXJ4wlHjZMl8fjFqJhMe0sWHRtisjZWhLfJpit0CxBrEXecziVhn2zq6Jm2w1CO9jzQK3fjVA3k1ITIRdbhoYD%2B7wPzjB2S57BAkbzdJ&X-Amz-Signature=9d1f5a825966e878685eef931cf52376b2018f77b0e2f264661a2242671446e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
