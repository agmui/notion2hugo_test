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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA3KZG6Y%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T161025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD96CeJJGTNie2fT8zdNaDEL8xcqbRYtKfOYUPqzad9cwIgT6sn7GJBpsnLZFaRnP38%2BSycSflUyKqJ8in0sVlk8vgq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDJFMc%2FdC7x0ADhgymCrcAwoBCjRCZPyH1qfKcXzk8VvMNLthp2dE2bbn5MKOkYFQvWUAu%2Bkkj8sT98%2Fk5ep5eSTXV3oFCfsFGfPS30vPPLsEjiAp24W5EDU5tNMk3lU%2BC2P%2F7NLqJ4LZ1k3HNJmOm0ocCN87B2SawgoaMcwqRTr1enhsH%2F3ZFAcBqC43a023gjSWHrhViRbWhEjtm0Cn7VEIIwMknAX7IsZNjmopwwRYHZowQ3c7zLnSflyPDs%2FM7qK8hMKV7CVQTKumrguvVrH5Qtopc9yHh%2BXHzK91szUJ%2BrPo%2Fpq6PgXNo2wVv5o7HqMBKdf7AhHKJ2ntCCzOFp441Tfptvj1plvFGmtKVJZzGIPHlRFBKmkVCI27rO8ac%2BQzc3HbwW%2BxCHu%2FDVJ0YVbQNr0vYN%2FOefod5VL%2Bf2oqmTH7Ub3ROqiT4nra29AAPxCGKVhRufpItSNiQph4uOlPBzO3NfMiX20S9xwBFuIOxJ%2B52mFNhxTqp6GXbtIaXyXm9M5ek%2F0EpUUyDPGflHsn%2Bm%2Blo4i5T%2BU%2Fv50XWkGU7JZ8eGN47CSDzmUIJEkn4R5XP7uy1PvC69WLTPZsJsgcJDZoU7hcRv%2FgVfJZc6BzEM3ZmnskyswuRAMZaJJlEMsO6W%2B6qZ6M11L%2FMKy0ncEGOqUBYrocHBLKvB19O2ZDFmoVCExExGFxX%2BsVUtD8kp4fr3zMSuHna5tRVYIzdeSuBNgFs0W1j7oglKk%2Fb987%2FobzFwFH7J0go8rHk%2FXAJkJgED8yE2L2pxeUZ6KU7l5Oj7yLZ2YOoW8jt4qxq3MFkAyXseQ2VGdLXVTxte5sLBeE9IDWLerfBJ6bLVW6um5XcZl7ZlC5vo%2B3jkY1KzYRKm4H9V90WnPc&X-Amz-Signature=2afffc6aabd78697846edcd18e05953c71c16078db059fc4f3c2b5135c24a3c8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA3KZG6Y%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T161025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD96CeJJGTNie2fT8zdNaDEL8xcqbRYtKfOYUPqzad9cwIgT6sn7GJBpsnLZFaRnP38%2BSycSflUyKqJ8in0sVlk8vgq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDJFMc%2FdC7x0ADhgymCrcAwoBCjRCZPyH1qfKcXzk8VvMNLthp2dE2bbn5MKOkYFQvWUAu%2Bkkj8sT98%2Fk5ep5eSTXV3oFCfsFGfPS30vPPLsEjiAp24W5EDU5tNMk3lU%2BC2P%2F7NLqJ4LZ1k3HNJmOm0ocCN87B2SawgoaMcwqRTr1enhsH%2F3ZFAcBqC43a023gjSWHrhViRbWhEjtm0Cn7VEIIwMknAX7IsZNjmopwwRYHZowQ3c7zLnSflyPDs%2FM7qK8hMKV7CVQTKumrguvVrH5Qtopc9yHh%2BXHzK91szUJ%2BrPo%2Fpq6PgXNo2wVv5o7HqMBKdf7AhHKJ2ntCCzOFp441Tfptvj1plvFGmtKVJZzGIPHlRFBKmkVCI27rO8ac%2BQzc3HbwW%2BxCHu%2FDVJ0YVbQNr0vYN%2FOefod5VL%2Bf2oqmTH7Ub3ROqiT4nra29AAPxCGKVhRufpItSNiQph4uOlPBzO3NfMiX20S9xwBFuIOxJ%2B52mFNhxTqp6GXbtIaXyXm9M5ek%2F0EpUUyDPGflHsn%2Bm%2Blo4i5T%2BU%2Fv50XWkGU7JZ8eGN47CSDzmUIJEkn4R5XP7uy1PvC69WLTPZsJsgcJDZoU7hcRv%2FgVfJZc6BzEM3ZmnskyswuRAMZaJJlEMsO6W%2B6qZ6M11L%2FMKy0ncEGOqUBYrocHBLKvB19O2ZDFmoVCExExGFxX%2BsVUtD8kp4fr3zMSuHna5tRVYIzdeSuBNgFs0W1j7oglKk%2Fb987%2FobzFwFH7J0go8rHk%2FXAJkJgED8yE2L2pxeUZ6KU7l5Oj7yLZ2YOoW8jt4qxq3MFkAyXseQ2VGdLXVTxte5sLBeE9IDWLerfBJ6bLVW6um5XcZl7ZlC5vo%2B3jkY1KzYRKm4H9V90WnPc&X-Amz-Signature=78ca04960869abc7946a51bbb4f576319d6a8707e2f8a7fdf1cb757ca6b5fc73&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA3KZG6Y%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T161025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD96CeJJGTNie2fT8zdNaDEL8xcqbRYtKfOYUPqzad9cwIgT6sn7GJBpsnLZFaRnP38%2BSycSflUyKqJ8in0sVlk8vgq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDJFMc%2FdC7x0ADhgymCrcAwoBCjRCZPyH1qfKcXzk8VvMNLthp2dE2bbn5MKOkYFQvWUAu%2Bkkj8sT98%2Fk5ep5eSTXV3oFCfsFGfPS30vPPLsEjiAp24W5EDU5tNMk3lU%2BC2P%2F7NLqJ4LZ1k3HNJmOm0ocCN87B2SawgoaMcwqRTr1enhsH%2F3ZFAcBqC43a023gjSWHrhViRbWhEjtm0Cn7VEIIwMknAX7IsZNjmopwwRYHZowQ3c7zLnSflyPDs%2FM7qK8hMKV7CVQTKumrguvVrH5Qtopc9yHh%2BXHzK91szUJ%2BrPo%2Fpq6PgXNo2wVv5o7HqMBKdf7AhHKJ2ntCCzOFp441Tfptvj1plvFGmtKVJZzGIPHlRFBKmkVCI27rO8ac%2BQzc3HbwW%2BxCHu%2FDVJ0YVbQNr0vYN%2FOefod5VL%2Bf2oqmTH7Ub3ROqiT4nra29AAPxCGKVhRufpItSNiQph4uOlPBzO3NfMiX20S9xwBFuIOxJ%2B52mFNhxTqp6GXbtIaXyXm9M5ek%2F0EpUUyDPGflHsn%2Bm%2Blo4i5T%2BU%2Fv50XWkGU7JZ8eGN47CSDzmUIJEkn4R5XP7uy1PvC69WLTPZsJsgcJDZoU7hcRv%2FgVfJZc6BzEM3ZmnskyswuRAMZaJJlEMsO6W%2B6qZ6M11L%2FMKy0ncEGOqUBYrocHBLKvB19O2ZDFmoVCExExGFxX%2BsVUtD8kp4fr3zMSuHna5tRVYIzdeSuBNgFs0W1j7oglKk%2Fb987%2FobzFwFH7J0go8rHk%2FXAJkJgED8yE2L2pxeUZ6KU7l5Oj7yLZ2YOoW8jt4qxq3MFkAyXseQ2VGdLXVTxte5sLBeE9IDWLerfBJ6bLVW6um5XcZl7ZlC5vo%2B3jkY1KzYRKm4H9V90WnPc&X-Amz-Signature=7742609f2a3e92a96ab8b24edfadca442ce15e5baf10f6a902225b8a7f592fba&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA3KZG6Y%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T161025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD96CeJJGTNie2fT8zdNaDEL8xcqbRYtKfOYUPqzad9cwIgT6sn7GJBpsnLZFaRnP38%2BSycSflUyKqJ8in0sVlk8vgq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDJFMc%2FdC7x0ADhgymCrcAwoBCjRCZPyH1qfKcXzk8VvMNLthp2dE2bbn5MKOkYFQvWUAu%2Bkkj8sT98%2Fk5ep5eSTXV3oFCfsFGfPS30vPPLsEjiAp24W5EDU5tNMk3lU%2BC2P%2F7NLqJ4LZ1k3HNJmOm0ocCN87B2SawgoaMcwqRTr1enhsH%2F3ZFAcBqC43a023gjSWHrhViRbWhEjtm0Cn7VEIIwMknAX7IsZNjmopwwRYHZowQ3c7zLnSflyPDs%2FM7qK8hMKV7CVQTKumrguvVrH5Qtopc9yHh%2BXHzK91szUJ%2BrPo%2Fpq6PgXNo2wVv5o7HqMBKdf7AhHKJ2ntCCzOFp441Tfptvj1plvFGmtKVJZzGIPHlRFBKmkVCI27rO8ac%2BQzc3HbwW%2BxCHu%2FDVJ0YVbQNr0vYN%2FOefod5VL%2Bf2oqmTH7Ub3ROqiT4nra29AAPxCGKVhRufpItSNiQph4uOlPBzO3NfMiX20S9xwBFuIOxJ%2B52mFNhxTqp6GXbtIaXyXm9M5ek%2F0EpUUyDPGflHsn%2Bm%2Blo4i5T%2BU%2Fv50XWkGU7JZ8eGN47CSDzmUIJEkn4R5XP7uy1PvC69WLTPZsJsgcJDZoU7hcRv%2FgVfJZc6BzEM3ZmnskyswuRAMZaJJlEMsO6W%2B6qZ6M11L%2FMKy0ncEGOqUBYrocHBLKvB19O2ZDFmoVCExExGFxX%2BsVUtD8kp4fr3zMSuHna5tRVYIzdeSuBNgFs0W1j7oglKk%2Fb987%2FobzFwFH7J0go8rHk%2FXAJkJgED8yE2L2pxeUZ6KU7l5Oj7yLZ2YOoW8jt4qxq3MFkAyXseQ2VGdLXVTxte5sLBeE9IDWLerfBJ6bLVW6um5XcZl7ZlC5vo%2B3jkY1KzYRKm4H9V90WnPc&X-Amz-Signature=b62c102f5d96838a5cb7e93ede801ab014eccff2c1af9446e913489286bc90d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA3KZG6Y%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T161025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD96CeJJGTNie2fT8zdNaDEL8xcqbRYtKfOYUPqzad9cwIgT6sn7GJBpsnLZFaRnP38%2BSycSflUyKqJ8in0sVlk8vgq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDJFMc%2FdC7x0ADhgymCrcAwoBCjRCZPyH1qfKcXzk8VvMNLthp2dE2bbn5MKOkYFQvWUAu%2Bkkj8sT98%2Fk5ep5eSTXV3oFCfsFGfPS30vPPLsEjiAp24W5EDU5tNMk3lU%2BC2P%2F7NLqJ4LZ1k3HNJmOm0ocCN87B2SawgoaMcwqRTr1enhsH%2F3ZFAcBqC43a023gjSWHrhViRbWhEjtm0Cn7VEIIwMknAX7IsZNjmopwwRYHZowQ3c7zLnSflyPDs%2FM7qK8hMKV7CVQTKumrguvVrH5Qtopc9yHh%2BXHzK91szUJ%2BrPo%2Fpq6PgXNo2wVv5o7HqMBKdf7AhHKJ2ntCCzOFp441Tfptvj1plvFGmtKVJZzGIPHlRFBKmkVCI27rO8ac%2BQzc3HbwW%2BxCHu%2FDVJ0YVbQNr0vYN%2FOefod5VL%2Bf2oqmTH7Ub3ROqiT4nra29AAPxCGKVhRufpItSNiQph4uOlPBzO3NfMiX20S9xwBFuIOxJ%2B52mFNhxTqp6GXbtIaXyXm9M5ek%2F0EpUUyDPGflHsn%2Bm%2Blo4i5T%2BU%2Fv50XWkGU7JZ8eGN47CSDzmUIJEkn4R5XP7uy1PvC69WLTPZsJsgcJDZoU7hcRv%2FgVfJZc6BzEM3ZmnskyswuRAMZaJJlEMsO6W%2B6qZ6M11L%2FMKy0ncEGOqUBYrocHBLKvB19O2ZDFmoVCExExGFxX%2BsVUtD8kp4fr3zMSuHna5tRVYIzdeSuBNgFs0W1j7oglKk%2Fb987%2FobzFwFH7J0go8rHk%2FXAJkJgED8yE2L2pxeUZ6KU7l5Oj7yLZ2YOoW8jt4qxq3MFkAyXseQ2VGdLXVTxte5sLBeE9IDWLerfBJ6bLVW6um5XcZl7ZlC5vo%2B3jkY1KzYRKm4H9V90WnPc&X-Amz-Signature=2398c404c694142c89fd84d8c80ad47fc500ccf51e45b20875341b9eed36019d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA3KZG6Y%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T161025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD96CeJJGTNie2fT8zdNaDEL8xcqbRYtKfOYUPqzad9cwIgT6sn7GJBpsnLZFaRnP38%2BSycSflUyKqJ8in0sVlk8vgq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDJFMc%2FdC7x0ADhgymCrcAwoBCjRCZPyH1qfKcXzk8VvMNLthp2dE2bbn5MKOkYFQvWUAu%2Bkkj8sT98%2Fk5ep5eSTXV3oFCfsFGfPS30vPPLsEjiAp24W5EDU5tNMk3lU%2BC2P%2F7NLqJ4LZ1k3HNJmOm0ocCN87B2SawgoaMcwqRTr1enhsH%2F3ZFAcBqC43a023gjSWHrhViRbWhEjtm0Cn7VEIIwMknAX7IsZNjmopwwRYHZowQ3c7zLnSflyPDs%2FM7qK8hMKV7CVQTKumrguvVrH5Qtopc9yHh%2BXHzK91szUJ%2BrPo%2Fpq6PgXNo2wVv5o7HqMBKdf7AhHKJ2ntCCzOFp441Tfptvj1plvFGmtKVJZzGIPHlRFBKmkVCI27rO8ac%2BQzc3HbwW%2BxCHu%2FDVJ0YVbQNr0vYN%2FOefod5VL%2Bf2oqmTH7Ub3ROqiT4nra29AAPxCGKVhRufpItSNiQph4uOlPBzO3NfMiX20S9xwBFuIOxJ%2B52mFNhxTqp6GXbtIaXyXm9M5ek%2F0EpUUyDPGflHsn%2Bm%2Blo4i5T%2BU%2Fv50XWkGU7JZ8eGN47CSDzmUIJEkn4R5XP7uy1PvC69WLTPZsJsgcJDZoU7hcRv%2FgVfJZc6BzEM3ZmnskyswuRAMZaJJlEMsO6W%2B6qZ6M11L%2FMKy0ncEGOqUBYrocHBLKvB19O2ZDFmoVCExExGFxX%2BsVUtD8kp4fr3zMSuHna5tRVYIzdeSuBNgFs0W1j7oglKk%2Fb987%2FobzFwFH7J0go8rHk%2FXAJkJgED8yE2L2pxeUZ6KU7l5Oj7yLZ2YOoW8jt4qxq3MFkAyXseQ2VGdLXVTxte5sLBeE9IDWLerfBJ6bLVW6um5XcZl7ZlC5vo%2B3jkY1KzYRKm4H9V90WnPc&X-Amz-Signature=58c37ad6d0474d249097a300abd0b93a8a56f56940b3d2793debb7ccf1f00e21&X-Amz-SignedHeaders=host&x-id=GetObject)
