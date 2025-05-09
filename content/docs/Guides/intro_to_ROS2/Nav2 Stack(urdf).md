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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTC4YZR7%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T004125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCY%2BVN6nqWfe6p7Z46CcQUm98NTGS4iwf5wqF%2BUWSO6JAIgM4IyckUgggABFoAr7avA4bCqCOwe11z%2F3ExJOGswl%2BEqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDiceERLkZBew11MYSrcA8OgYGFzLpD%2BdEq0Lj1YfhI8ujrV1Wgj88xcDai34v8lzGqCEpGkkUXPpdO%2FVNoSwHkyk7AuvIVgd32na9Sy9FTn4C7dsDOWX3UxozLRWENlX51H4KaCI%2BY5XNYIEsT9ZXSTgmAj8R9dX8mCvYjGIOYHebuXxbIZ%2F%2F0ZgiQ3m9D44F3tAqyvyLoLuGDFNCoHml2pl4Ty%2FtyEejqC%2FmW2Jp11vs1X79oRaXTNJ1gCtbIARXjeCO%2BoqBGSxQ3Vly7DH58JQ7KBwXWQul5vgVxtlO3nCdIOLfb9WL7MSfQtnwNy2oNucwcpmDIaQ44%2FnIgAxlk%2FhirMFUhEW0FRhr%2F3sbI5YYZ%2FizJBGeEgXfs8ppI%2FJwhyKwSn3INwZvvcmI4JAFGg5SWHj5IMd4%2FIfmVDnQEJNdCQoACTByWwnlOyaHVZi%2BzSLHFIsqsMZU%2FXcdvk%2FQ1Ghf7OzCPiSuITsPBQJDMB2tebg1Vr7zGQFq8sning5kUMz6xTP0WRwXGKg%2FFhvXiWyMH6lwPVa6g2HW%2B3w6PHBS3LXYOH7dVqelWUOfKJMqAqi8a6HyWdAcxSmaX00N1DQt7WocoJbV356fhZuFK%2Bh4AWmDYJzoXCnw9D1wRjh9sxqw5C5mF82mxCMMnj9MAGOqUBO9QbfP3tdcWlYmcndXZdKMz%2BDHZpJCB6pwXPnaBWMKcnB5dz6YWPIYsd5QBP8%2Bf1Y4R1XqbbyR0FVzBRf38Y4z1mF1OWRgYHngTmOyjbt84sk7VEjzRVR06rn6DY29aq8tVpRZk%2BvtrydGLxKF6CZN4n068sHlcKi6OGyRwbsHSQignViGPhW6BAC%2BwB5Kx6NIyc%2BB0i%2BJOw1YCB48IlVAvT3CHy&X-Amz-Signature=e47aa221adc4f9fdaddb4befd2ba164a131469e744d1fb74f8e4bddd6c4ba991&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTC4YZR7%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T004125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCY%2BVN6nqWfe6p7Z46CcQUm98NTGS4iwf5wqF%2BUWSO6JAIgM4IyckUgggABFoAr7avA4bCqCOwe11z%2F3ExJOGswl%2BEqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDiceERLkZBew11MYSrcA8OgYGFzLpD%2BdEq0Lj1YfhI8ujrV1Wgj88xcDai34v8lzGqCEpGkkUXPpdO%2FVNoSwHkyk7AuvIVgd32na9Sy9FTn4C7dsDOWX3UxozLRWENlX51H4KaCI%2BY5XNYIEsT9ZXSTgmAj8R9dX8mCvYjGIOYHebuXxbIZ%2F%2F0ZgiQ3m9D44F3tAqyvyLoLuGDFNCoHml2pl4Ty%2FtyEejqC%2FmW2Jp11vs1X79oRaXTNJ1gCtbIARXjeCO%2BoqBGSxQ3Vly7DH58JQ7KBwXWQul5vgVxtlO3nCdIOLfb9WL7MSfQtnwNy2oNucwcpmDIaQ44%2FnIgAxlk%2FhirMFUhEW0FRhr%2F3sbI5YYZ%2FizJBGeEgXfs8ppI%2FJwhyKwSn3INwZvvcmI4JAFGg5SWHj5IMd4%2FIfmVDnQEJNdCQoACTByWwnlOyaHVZi%2BzSLHFIsqsMZU%2FXcdvk%2FQ1Ghf7OzCPiSuITsPBQJDMB2tebg1Vr7zGQFq8sning5kUMz6xTP0WRwXGKg%2FFhvXiWyMH6lwPVa6g2HW%2B3w6PHBS3LXYOH7dVqelWUOfKJMqAqi8a6HyWdAcxSmaX00N1DQt7WocoJbV356fhZuFK%2Bh4AWmDYJzoXCnw9D1wRjh9sxqw5C5mF82mxCMMnj9MAGOqUBO9QbfP3tdcWlYmcndXZdKMz%2BDHZpJCB6pwXPnaBWMKcnB5dz6YWPIYsd5QBP8%2Bf1Y4R1XqbbyR0FVzBRf38Y4z1mF1OWRgYHngTmOyjbt84sk7VEjzRVR06rn6DY29aq8tVpRZk%2BvtrydGLxKF6CZN4n068sHlcKi6OGyRwbsHSQignViGPhW6BAC%2BwB5Kx6NIyc%2BB0i%2BJOw1YCB48IlVAvT3CHy&X-Amz-Signature=cd537a36c7f62d8a515eed978b18fa37c652b4fbbd937648560d05f7c3af0d42&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTC4YZR7%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T004125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCY%2BVN6nqWfe6p7Z46CcQUm98NTGS4iwf5wqF%2BUWSO6JAIgM4IyckUgggABFoAr7avA4bCqCOwe11z%2F3ExJOGswl%2BEqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDiceERLkZBew11MYSrcA8OgYGFzLpD%2BdEq0Lj1YfhI8ujrV1Wgj88xcDai34v8lzGqCEpGkkUXPpdO%2FVNoSwHkyk7AuvIVgd32na9Sy9FTn4C7dsDOWX3UxozLRWENlX51H4KaCI%2BY5XNYIEsT9ZXSTgmAj8R9dX8mCvYjGIOYHebuXxbIZ%2F%2F0ZgiQ3m9D44F3tAqyvyLoLuGDFNCoHml2pl4Ty%2FtyEejqC%2FmW2Jp11vs1X79oRaXTNJ1gCtbIARXjeCO%2BoqBGSxQ3Vly7DH58JQ7KBwXWQul5vgVxtlO3nCdIOLfb9WL7MSfQtnwNy2oNucwcpmDIaQ44%2FnIgAxlk%2FhirMFUhEW0FRhr%2F3sbI5YYZ%2FizJBGeEgXfs8ppI%2FJwhyKwSn3INwZvvcmI4JAFGg5SWHj5IMd4%2FIfmVDnQEJNdCQoACTByWwnlOyaHVZi%2BzSLHFIsqsMZU%2FXcdvk%2FQ1Ghf7OzCPiSuITsPBQJDMB2tebg1Vr7zGQFq8sning5kUMz6xTP0WRwXGKg%2FFhvXiWyMH6lwPVa6g2HW%2B3w6PHBS3LXYOH7dVqelWUOfKJMqAqi8a6HyWdAcxSmaX00N1DQt7WocoJbV356fhZuFK%2Bh4AWmDYJzoXCnw9D1wRjh9sxqw5C5mF82mxCMMnj9MAGOqUBO9QbfP3tdcWlYmcndXZdKMz%2BDHZpJCB6pwXPnaBWMKcnB5dz6YWPIYsd5QBP8%2Bf1Y4R1XqbbyR0FVzBRf38Y4z1mF1OWRgYHngTmOyjbt84sk7VEjzRVR06rn6DY29aq8tVpRZk%2BvtrydGLxKF6CZN4n068sHlcKi6OGyRwbsHSQignViGPhW6BAC%2BwB5Kx6NIyc%2BB0i%2BJOw1YCB48IlVAvT3CHy&X-Amz-Signature=1524628194495951d2ccfd485804a9ba2dfb37fcb0e515a8501890eba8e20e5a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTC4YZR7%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T004125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCY%2BVN6nqWfe6p7Z46CcQUm98NTGS4iwf5wqF%2BUWSO6JAIgM4IyckUgggABFoAr7avA4bCqCOwe11z%2F3ExJOGswl%2BEqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDiceERLkZBew11MYSrcA8OgYGFzLpD%2BdEq0Lj1YfhI8ujrV1Wgj88xcDai34v8lzGqCEpGkkUXPpdO%2FVNoSwHkyk7AuvIVgd32na9Sy9FTn4C7dsDOWX3UxozLRWENlX51H4KaCI%2BY5XNYIEsT9ZXSTgmAj8R9dX8mCvYjGIOYHebuXxbIZ%2F%2F0ZgiQ3m9D44F3tAqyvyLoLuGDFNCoHml2pl4Ty%2FtyEejqC%2FmW2Jp11vs1X79oRaXTNJ1gCtbIARXjeCO%2BoqBGSxQ3Vly7DH58JQ7KBwXWQul5vgVxtlO3nCdIOLfb9WL7MSfQtnwNy2oNucwcpmDIaQ44%2FnIgAxlk%2FhirMFUhEW0FRhr%2F3sbI5YYZ%2FizJBGeEgXfs8ppI%2FJwhyKwSn3INwZvvcmI4JAFGg5SWHj5IMd4%2FIfmVDnQEJNdCQoACTByWwnlOyaHVZi%2BzSLHFIsqsMZU%2FXcdvk%2FQ1Ghf7OzCPiSuITsPBQJDMB2tebg1Vr7zGQFq8sning5kUMz6xTP0WRwXGKg%2FFhvXiWyMH6lwPVa6g2HW%2B3w6PHBS3LXYOH7dVqelWUOfKJMqAqi8a6HyWdAcxSmaX00N1DQt7WocoJbV356fhZuFK%2Bh4AWmDYJzoXCnw9D1wRjh9sxqw5C5mF82mxCMMnj9MAGOqUBO9QbfP3tdcWlYmcndXZdKMz%2BDHZpJCB6pwXPnaBWMKcnB5dz6YWPIYsd5QBP8%2Bf1Y4R1XqbbyR0FVzBRf38Y4z1mF1OWRgYHngTmOyjbt84sk7VEjzRVR06rn6DY29aq8tVpRZk%2BvtrydGLxKF6CZN4n068sHlcKi6OGyRwbsHSQignViGPhW6BAC%2BwB5Kx6NIyc%2BB0i%2BJOw1YCB48IlVAvT3CHy&X-Amz-Signature=229ed82f1d545eeb64bd46f0b45c8f0e83baf4851113b9d2ab835f40c416f743&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTC4YZR7%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T004125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCY%2BVN6nqWfe6p7Z46CcQUm98NTGS4iwf5wqF%2BUWSO6JAIgM4IyckUgggABFoAr7avA4bCqCOwe11z%2F3ExJOGswl%2BEqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDiceERLkZBew11MYSrcA8OgYGFzLpD%2BdEq0Lj1YfhI8ujrV1Wgj88xcDai34v8lzGqCEpGkkUXPpdO%2FVNoSwHkyk7AuvIVgd32na9Sy9FTn4C7dsDOWX3UxozLRWENlX51H4KaCI%2BY5XNYIEsT9ZXSTgmAj8R9dX8mCvYjGIOYHebuXxbIZ%2F%2F0ZgiQ3m9D44F3tAqyvyLoLuGDFNCoHml2pl4Ty%2FtyEejqC%2FmW2Jp11vs1X79oRaXTNJ1gCtbIARXjeCO%2BoqBGSxQ3Vly7DH58JQ7KBwXWQul5vgVxtlO3nCdIOLfb9WL7MSfQtnwNy2oNucwcpmDIaQ44%2FnIgAxlk%2FhirMFUhEW0FRhr%2F3sbI5YYZ%2FizJBGeEgXfs8ppI%2FJwhyKwSn3INwZvvcmI4JAFGg5SWHj5IMd4%2FIfmVDnQEJNdCQoACTByWwnlOyaHVZi%2BzSLHFIsqsMZU%2FXcdvk%2FQ1Ghf7OzCPiSuITsPBQJDMB2tebg1Vr7zGQFq8sning5kUMz6xTP0WRwXGKg%2FFhvXiWyMH6lwPVa6g2HW%2B3w6PHBS3LXYOH7dVqelWUOfKJMqAqi8a6HyWdAcxSmaX00N1DQt7WocoJbV356fhZuFK%2Bh4AWmDYJzoXCnw9D1wRjh9sxqw5C5mF82mxCMMnj9MAGOqUBO9QbfP3tdcWlYmcndXZdKMz%2BDHZpJCB6pwXPnaBWMKcnB5dz6YWPIYsd5QBP8%2Bf1Y4R1XqbbyR0FVzBRf38Y4z1mF1OWRgYHngTmOyjbt84sk7VEjzRVR06rn6DY29aq8tVpRZk%2BvtrydGLxKF6CZN4n068sHlcKi6OGyRwbsHSQignViGPhW6BAC%2BwB5Kx6NIyc%2BB0i%2BJOw1YCB48IlVAvT3CHy&X-Amz-Signature=7e6b2a84dc1bc11dbe2db46a43cbb527ab5b152654da9dd16ea90eaf60d72a6f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTC4YZR7%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T004125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCY%2BVN6nqWfe6p7Z46CcQUm98NTGS4iwf5wqF%2BUWSO6JAIgM4IyckUgggABFoAr7avA4bCqCOwe11z%2F3ExJOGswl%2BEqiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDiceERLkZBew11MYSrcA8OgYGFzLpD%2BdEq0Lj1YfhI8ujrV1Wgj88xcDai34v8lzGqCEpGkkUXPpdO%2FVNoSwHkyk7AuvIVgd32na9Sy9FTn4C7dsDOWX3UxozLRWENlX51H4KaCI%2BY5XNYIEsT9ZXSTgmAj8R9dX8mCvYjGIOYHebuXxbIZ%2F%2F0ZgiQ3m9D44F3tAqyvyLoLuGDFNCoHml2pl4Ty%2FtyEejqC%2FmW2Jp11vs1X79oRaXTNJ1gCtbIARXjeCO%2BoqBGSxQ3Vly7DH58JQ7KBwXWQul5vgVxtlO3nCdIOLfb9WL7MSfQtnwNy2oNucwcpmDIaQ44%2FnIgAxlk%2FhirMFUhEW0FRhr%2F3sbI5YYZ%2FizJBGeEgXfs8ppI%2FJwhyKwSn3INwZvvcmI4JAFGg5SWHj5IMd4%2FIfmVDnQEJNdCQoACTByWwnlOyaHVZi%2BzSLHFIsqsMZU%2FXcdvk%2FQ1Ghf7OzCPiSuITsPBQJDMB2tebg1Vr7zGQFq8sning5kUMz6xTP0WRwXGKg%2FFhvXiWyMH6lwPVa6g2HW%2B3w6PHBS3LXYOH7dVqelWUOfKJMqAqi8a6HyWdAcxSmaX00N1DQt7WocoJbV356fhZuFK%2Bh4AWmDYJzoXCnw9D1wRjh9sxqw5C5mF82mxCMMnj9MAGOqUBO9QbfP3tdcWlYmcndXZdKMz%2BDHZpJCB6pwXPnaBWMKcnB5dz6YWPIYsd5QBP8%2Bf1Y4R1XqbbyR0FVzBRf38Y4z1mF1OWRgYHngTmOyjbt84sk7VEjzRVR06rn6DY29aq8tVpRZk%2BvtrydGLxKF6CZN4n068sHlcKi6OGyRwbsHSQignViGPhW6BAC%2BwB5Kx6NIyc%2BB0i%2BJOw1YCB48IlVAvT3CHy&X-Amz-Signature=d55eaa92962a0f99bb2d791790e6bb0deaec846e04a876cfb278d59e2bc90a51&X-Amz-SignedHeaders=host&x-id=GetObject)
