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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFM5HOJP%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T051617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIHgLm24Ti3FYShtl8mJHUxXy%2Ffz9MmdXLEzSDGHBOP94AiEA6%2BY%2B98XNwfPVH78qd3q2BZXWShRFYfkg%2Bz65yAAlPrQqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2noOj04K9jfCdEqyrcA54aCzimzsTfdRic9dcuH%2BoUt%2BxZ3dDdVsM5dV39V4gEgIAv5XStoGgtqIqCH8jjOj783X6S6Juc%2FGYbuhlulnCG%2F1wwE3%2F43KMTD96cQvhzJlHdX%2FXvuWQKKXqCvB2AqFgKTOTZzV290XvCo7rWEswtHOac3bxJvv8WfwXKd1qHHc0Nm6NIJ6ULW3d7G7DelEKFFVIOsBfY8KbG7Y4ulochPzos%2FeDyEwA8P9cxwDgX4W%2BTO2ZaE%2FlCaG5fcijKl0%2B3%2BEgCkld9z2GiCGkfwG0UG4aQ%2FOivRNme5SxojeWhQQop58hDybp3G1J9y0%2FjBLhFHcaoPHAN2UEhFKqM6TBDsDx%2FS1ktTdn3gmNecTf3fpVPmtjeioQoDj3mK2BnM%2BXDGx0RbdEK%2F9MVrX7kr4H6II7iWfnLW3BrkKybjTSuefk9AJZFqBwseQdBeih%2BvwPQtzp9R3M2nnp0gDn0ovtBq%2FqpN%2BXcY7pTUQO9a58c9RuwlqPsyvtHIFFfxm9tK68gHOxrNxoUuANWpArsXyFGpJbXoR%2BqV6W4%2F%2B2wCWQ%2FDeqOvBV0uO1oyh9nn0%2FugkLJOoh4aMNC2D8MDOkFoY99EdGU0YE30vjiITL9vGX8WwV%2F%2FRg7oiVDiElIMJaN7b8GOqUB1gOInrYDPTL6sIzwo8dKUhXoXt4Ka38rOscgAfeE8sWVXAaq2Htc9XZdt0Ksl1a41YJ34LvhiootzWg9dq1dWbBwUodBmFFwfO02%2Flp8KqM%2FDFZK04I8NwZvSPX3XKNiwSGGBgRxtkY%2BzAQ%2F7GUe37Gmr2%2FNKv1rX1%2Foo5pMIsFYKHyI1whwpO%2BrXgW%2BU%2Fnrux%2FUZvIvvuZDQDx34BYtr4JtII3O&X-Amz-Signature=dd3171497ae5b94cc86c1490b775eb680772d097d5be08d903fd119fecf9b7c4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFM5HOJP%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T051617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIHgLm24Ti3FYShtl8mJHUxXy%2Ffz9MmdXLEzSDGHBOP94AiEA6%2BY%2B98XNwfPVH78qd3q2BZXWShRFYfkg%2Bz65yAAlPrQqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2noOj04K9jfCdEqyrcA54aCzimzsTfdRic9dcuH%2BoUt%2BxZ3dDdVsM5dV39V4gEgIAv5XStoGgtqIqCH8jjOj783X6S6Juc%2FGYbuhlulnCG%2F1wwE3%2F43KMTD96cQvhzJlHdX%2FXvuWQKKXqCvB2AqFgKTOTZzV290XvCo7rWEswtHOac3bxJvv8WfwXKd1qHHc0Nm6NIJ6ULW3d7G7DelEKFFVIOsBfY8KbG7Y4ulochPzos%2FeDyEwA8P9cxwDgX4W%2BTO2ZaE%2FlCaG5fcijKl0%2B3%2BEgCkld9z2GiCGkfwG0UG4aQ%2FOivRNme5SxojeWhQQop58hDybp3G1J9y0%2FjBLhFHcaoPHAN2UEhFKqM6TBDsDx%2FS1ktTdn3gmNecTf3fpVPmtjeioQoDj3mK2BnM%2BXDGx0RbdEK%2F9MVrX7kr4H6II7iWfnLW3BrkKybjTSuefk9AJZFqBwseQdBeih%2BvwPQtzp9R3M2nnp0gDn0ovtBq%2FqpN%2BXcY7pTUQO9a58c9RuwlqPsyvtHIFFfxm9tK68gHOxrNxoUuANWpArsXyFGpJbXoR%2BqV6W4%2F%2B2wCWQ%2FDeqOvBV0uO1oyh9nn0%2FugkLJOoh4aMNC2D8MDOkFoY99EdGU0YE30vjiITL9vGX8WwV%2F%2FRg7oiVDiElIMJaN7b8GOqUB1gOInrYDPTL6sIzwo8dKUhXoXt4Ka38rOscgAfeE8sWVXAaq2Htc9XZdt0Ksl1a41YJ34LvhiootzWg9dq1dWbBwUodBmFFwfO02%2Flp8KqM%2FDFZK04I8NwZvSPX3XKNiwSGGBgRxtkY%2BzAQ%2F7GUe37Gmr2%2FNKv1rX1%2Foo5pMIsFYKHyI1whwpO%2BrXgW%2BU%2Fnrux%2FUZvIvvuZDQDx34BYtr4JtII3O&X-Amz-Signature=b6467d65e854cea4cc8ff2436bd43e71c3c7064aa6e1d4443e8d018d719000b4&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFM5HOJP%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T051617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIHgLm24Ti3FYShtl8mJHUxXy%2Ffz9MmdXLEzSDGHBOP94AiEA6%2BY%2B98XNwfPVH78qd3q2BZXWShRFYfkg%2Bz65yAAlPrQqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2noOj04K9jfCdEqyrcA54aCzimzsTfdRic9dcuH%2BoUt%2BxZ3dDdVsM5dV39V4gEgIAv5XStoGgtqIqCH8jjOj783X6S6Juc%2FGYbuhlulnCG%2F1wwE3%2F43KMTD96cQvhzJlHdX%2FXvuWQKKXqCvB2AqFgKTOTZzV290XvCo7rWEswtHOac3bxJvv8WfwXKd1qHHc0Nm6NIJ6ULW3d7G7DelEKFFVIOsBfY8KbG7Y4ulochPzos%2FeDyEwA8P9cxwDgX4W%2BTO2ZaE%2FlCaG5fcijKl0%2B3%2BEgCkld9z2GiCGkfwG0UG4aQ%2FOivRNme5SxojeWhQQop58hDybp3G1J9y0%2FjBLhFHcaoPHAN2UEhFKqM6TBDsDx%2FS1ktTdn3gmNecTf3fpVPmtjeioQoDj3mK2BnM%2BXDGx0RbdEK%2F9MVrX7kr4H6II7iWfnLW3BrkKybjTSuefk9AJZFqBwseQdBeih%2BvwPQtzp9R3M2nnp0gDn0ovtBq%2FqpN%2BXcY7pTUQO9a58c9RuwlqPsyvtHIFFfxm9tK68gHOxrNxoUuANWpArsXyFGpJbXoR%2BqV6W4%2F%2B2wCWQ%2FDeqOvBV0uO1oyh9nn0%2FugkLJOoh4aMNC2D8MDOkFoY99EdGU0YE30vjiITL9vGX8WwV%2F%2FRg7oiVDiElIMJaN7b8GOqUB1gOInrYDPTL6sIzwo8dKUhXoXt4Ka38rOscgAfeE8sWVXAaq2Htc9XZdt0Ksl1a41YJ34LvhiootzWg9dq1dWbBwUodBmFFwfO02%2Flp8KqM%2FDFZK04I8NwZvSPX3XKNiwSGGBgRxtkY%2BzAQ%2F7GUe37Gmr2%2FNKv1rX1%2Foo5pMIsFYKHyI1whwpO%2BrXgW%2BU%2Fnrux%2FUZvIvvuZDQDx34BYtr4JtII3O&X-Amz-Signature=d0a0b00ddafeaf13cb4c46be4b9610ce3783cb909a4c9b1bc9250f9e2e0f2dfa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFM5HOJP%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T051617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIHgLm24Ti3FYShtl8mJHUxXy%2Ffz9MmdXLEzSDGHBOP94AiEA6%2BY%2B98XNwfPVH78qd3q2BZXWShRFYfkg%2Bz65yAAlPrQqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2noOj04K9jfCdEqyrcA54aCzimzsTfdRic9dcuH%2BoUt%2BxZ3dDdVsM5dV39V4gEgIAv5XStoGgtqIqCH8jjOj783X6S6Juc%2FGYbuhlulnCG%2F1wwE3%2F43KMTD96cQvhzJlHdX%2FXvuWQKKXqCvB2AqFgKTOTZzV290XvCo7rWEswtHOac3bxJvv8WfwXKd1qHHc0Nm6NIJ6ULW3d7G7DelEKFFVIOsBfY8KbG7Y4ulochPzos%2FeDyEwA8P9cxwDgX4W%2BTO2ZaE%2FlCaG5fcijKl0%2B3%2BEgCkld9z2GiCGkfwG0UG4aQ%2FOivRNme5SxojeWhQQop58hDybp3G1J9y0%2FjBLhFHcaoPHAN2UEhFKqM6TBDsDx%2FS1ktTdn3gmNecTf3fpVPmtjeioQoDj3mK2BnM%2BXDGx0RbdEK%2F9MVrX7kr4H6II7iWfnLW3BrkKybjTSuefk9AJZFqBwseQdBeih%2BvwPQtzp9R3M2nnp0gDn0ovtBq%2FqpN%2BXcY7pTUQO9a58c9RuwlqPsyvtHIFFfxm9tK68gHOxrNxoUuANWpArsXyFGpJbXoR%2BqV6W4%2F%2B2wCWQ%2FDeqOvBV0uO1oyh9nn0%2FugkLJOoh4aMNC2D8MDOkFoY99EdGU0YE30vjiITL9vGX8WwV%2F%2FRg7oiVDiElIMJaN7b8GOqUB1gOInrYDPTL6sIzwo8dKUhXoXt4Ka38rOscgAfeE8sWVXAaq2Htc9XZdt0Ksl1a41YJ34LvhiootzWg9dq1dWbBwUodBmFFwfO02%2Flp8KqM%2FDFZK04I8NwZvSPX3XKNiwSGGBgRxtkY%2BzAQ%2F7GUe37Gmr2%2FNKv1rX1%2Foo5pMIsFYKHyI1whwpO%2BrXgW%2BU%2Fnrux%2FUZvIvvuZDQDx34BYtr4JtII3O&X-Amz-Signature=03d62c2e8e7fb997b08d81b23371de1d4b57b625f3b7c45e9be9e69d311f1c02&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFM5HOJP%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T051617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIHgLm24Ti3FYShtl8mJHUxXy%2Ffz9MmdXLEzSDGHBOP94AiEA6%2BY%2B98XNwfPVH78qd3q2BZXWShRFYfkg%2Bz65yAAlPrQqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2noOj04K9jfCdEqyrcA54aCzimzsTfdRic9dcuH%2BoUt%2BxZ3dDdVsM5dV39V4gEgIAv5XStoGgtqIqCH8jjOj783X6S6Juc%2FGYbuhlulnCG%2F1wwE3%2F43KMTD96cQvhzJlHdX%2FXvuWQKKXqCvB2AqFgKTOTZzV290XvCo7rWEswtHOac3bxJvv8WfwXKd1qHHc0Nm6NIJ6ULW3d7G7DelEKFFVIOsBfY8KbG7Y4ulochPzos%2FeDyEwA8P9cxwDgX4W%2BTO2ZaE%2FlCaG5fcijKl0%2B3%2BEgCkld9z2GiCGkfwG0UG4aQ%2FOivRNme5SxojeWhQQop58hDybp3G1J9y0%2FjBLhFHcaoPHAN2UEhFKqM6TBDsDx%2FS1ktTdn3gmNecTf3fpVPmtjeioQoDj3mK2BnM%2BXDGx0RbdEK%2F9MVrX7kr4H6II7iWfnLW3BrkKybjTSuefk9AJZFqBwseQdBeih%2BvwPQtzp9R3M2nnp0gDn0ovtBq%2FqpN%2BXcY7pTUQO9a58c9RuwlqPsyvtHIFFfxm9tK68gHOxrNxoUuANWpArsXyFGpJbXoR%2BqV6W4%2F%2B2wCWQ%2FDeqOvBV0uO1oyh9nn0%2FugkLJOoh4aMNC2D8MDOkFoY99EdGU0YE30vjiITL9vGX8WwV%2F%2FRg7oiVDiElIMJaN7b8GOqUB1gOInrYDPTL6sIzwo8dKUhXoXt4Ka38rOscgAfeE8sWVXAaq2Htc9XZdt0Ksl1a41YJ34LvhiootzWg9dq1dWbBwUodBmFFwfO02%2Flp8KqM%2FDFZK04I8NwZvSPX3XKNiwSGGBgRxtkY%2BzAQ%2F7GUe37Gmr2%2FNKv1rX1%2Foo5pMIsFYKHyI1whwpO%2BrXgW%2BU%2Fnrux%2FUZvIvvuZDQDx34BYtr4JtII3O&X-Amz-Signature=8cb64ffe632750c8d635ffde45004beb20390491a18344213c1f66aa48020bbd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFM5HOJP%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T051617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIHgLm24Ti3FYShtl8mJHUxXy%2Ffz9MmdXLEzSDGHBOP94AiEA6%2BY%2B98XNwfPVH78qd3q2BZXWShRFYfkg%2Bz65yAAlPrQqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH2noOj04K9jfCdEqyrcA54aCzimzsTfdRic9dcuH%2BoUt%2BxZ3dDdVsM5dV39V4gEgIAv5XStoGgtqIqCH8jjOj783X6S6Juc%2FGYbuhlulnCG%2F1wwE3%2F43KMTD96cQvhzJlHdX%2FXvuWQKKXqCvB2AqFgKTOTZzV290XvCo7rWEswtHOac3bxJvv8WfwXKd1qHHc0Nm6NIJ6ULW3d7G7DelEKFFVIOsBfY8KbG7Y4ulochPzos%2FeDyEwA8P9cxwDgX4W%2BTO2ZaE%2FlCaG5fcijKl0%2B3%2BEgCkld9z2GiCGkfwG0UG4aQ%2FOivRNme5SxojeWhQQop58hDybp3G1J9y0%2FjBLhFHcaoPHAN2UEhFKqM6TBDsDx%2FS1ktTdn3gmNecTf3fpVPmtjeioQoDj3mK2BnM%2BXDGx0RbdEK%2F9MVrX7kr4H6II7iWfnLW3BrkKybjTSuefk9AJZFqBwseQdBeih%2BvwPQtzp9R3M2nnp0gDn0ovtBq%2FqpN%2BXcY7pTUQO9a58c9RuwlqPsyvtHIFFfxm9tK68gHOxrNxoUuANWpArsXyFGpJbXoR%2BqV6W4%2F%2B2wCWQ%2FDeqOvBV0uO1oyh9nn0%2FugkLJOoh4aMNC2D8MDOkFoY99EdGU0YE30vjiITL9vGX8WwV%2F%2FRg7oiVDiElIMJaN7b8GOqUB1gOInrYDPTL6sIzwo8dKUhXoXt4Ka38rOscgAfeE8sWVXAaq2Htc9XZdt0Ksl1a41YJ34LvhiootzWg9dq1dWbBwUodBmFFwfO02%2Flp8KqM%2FDFZK04I8NwZvSPX3XKNiwSGGBgRxtkY%2BzAQ%2F7GUe37Gmr2%2FNKv1rX1%2Foo5pMIsFYKHyI1whwpO%2BrXgW%2BU%2Fnrux%2FUZvIvvuZDQDx34BYtr4JtII3O&X-Amz-Signature=d57629d6d4c81d452c0401b5663be01fdacdc4196e1c0cdaf6510aa50f339968&X-Amz-SignedHeaders=host&x-id=GetObject)
