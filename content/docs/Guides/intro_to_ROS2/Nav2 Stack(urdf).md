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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP4RGVVR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T121742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIC5CNSTkzRf9Nz5xYGej3rchIjHj0hObzPFGcHeU8gOeAiEAkW2Jgg4zfBDp0kXqzNYUcmZK2rKqyV4aNZ%2F4tq20bjwqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOP1OVoayoRf7UmgDCrcA9ZO%2BmcknpUppoo1MPumCXZg7vNsiqb9sk%2FvL81iAV13IK1Z7q1l7Lr78xhjJt5k8PG0RVzuhy1rhGs9rRkj7md9lrHybxI5MDFsMoKnFoeGs2GqtoP1LVfL%2FT2aKeY%2BNCJRJlycXAgVPce02wGitLcuus%2Btju8vlgv5uzYw5AUegPJDFgaWusJ1dIJ2IHf98jYyJ%2BNVWn%2BDgu0sDz%2FM9m3oXGnEthVNV5V0fNON0xhoZYojsA33UAO6yzhVjN1XDAGOnivK2LVCVsAcGayTQKEc7vfivPYKAZ7nnE1us3T%2FJNudy9asGt0wXzS4qr7noIR%2Bc4lHfk6EHH4uh%2BB95BZVWngBEwKlNWfK%2FRN2pJAGdeQiTsZ5abNVTZXLQ268dA4ZKie%2BOEr0LZb6bZis7SZupmQUCm5fFRMGPMRgHwvPw%2BN7RLZAFi9G6hZa2YJpbDT0vP7lDSGUM5Q3F%2Fd1GE%2FWZpiPXyxhSz%2Fe90qS0jJjmBpUnsX1j6iYPgYjJz%2FLcxmVGgu7mjWw9DHDiH1ZER9j9t%2FvA9nwLVs1RKxbWYsyH1zPgqHEQMYrCaya51qv%2B4v5qZS2t4SGAqmf15Gv3698rYM6bELGnf4b2paGyFZxF2t8jO3SnNvj%2BE8jMM7P6MMGOqUB189gl4NBlWnead3w%2Fc%2F9HwofyYzZFh6rBjMvkai3mPF9Neu%2BS3zRVK8poqRLBei7PVIJsd3MvwkgS%2FACp75YUKw77c%2Bodx0z7K6u7huWLX15jeplJwGvkZob6bZjh5qWS2wtBelua8tZmfz3OWK24DPyCHHRSy8cY%2Bj3xSzfH%2BlUANp%2BM2nH0LzQoVC9s3Wb8PWwbb1TzZJ6nDoirc6dHCy8VgRx&X-Amz-Signature=a67fa85384e4ad89001f29fbbacb03c047496c71468dcf9383d33ed0c23deacc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP4RGVVR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T121742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIC5CNSTkzRf9Nz5xYGej3rchIjHj0hObzPFGcHeU8gOeAiEAkW2Jgg4zfBDp0kXqzNYUcmZK2rKqyV4aNZ%2F4tq20bjwqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOP1OVoayoRf7UmgDCrcA9ZO%2BmcknpUppoo1MPumCXZg7vNsiqb9sk%2FvL81iAV13IK1Z7q1l7Lr78xhjJt5k8PG0RVzuhy1rhGs9rRkj7md9lrHybxI5MDFsMoKnFoeGs2GqtoP1LVfL%2FT2aKeY%2BNCJRJlycXAgVPce02wGitLcuus%2Btju8vlgv5uzYw5AUegPJDFgaWusJ1dIJ2IHf98jYyJ%2BNVWn%2BDgu0sDz%2FM9m3oXGnEthVNV5V0fNON0xhoZYojsA33UAO6yzhVjN1XDAGOnivK2LVCVsAcGayTQKEc7vfivPYKAZ7nnE1us3T%2FJNudy9asGt0wXzS4qr7noIR%2Bc4lHfk6EHH4uh%2BB95BZVWngBEwKlNWfK%2FRN2pJAGdeQiTsZ5abNVTZXLQ268dA4ZKie%2BOEr0LZb6bZis7SZupmQUCm5fFRMGPMRgHwvPw%2BN7RLZAFi9G6hZa2YJpbDT0vP7lDSGUM5Q3F%2Fd1GE%2FWZpiPXyxhSz%2Fe90qS0jJjmBpUnsX1j6iYPgYjJz%2FLcxmVGgu7mjWw9DHDiH1ZER9j9t%2FvA9nwLVs1RKxbWYsyH1zPgqHEQMYrCaya51qv%2B4v5qZS2t4SGAqmf15Gv3698rYM6bELGnf4b2paGyFZxF2t8jO3SnNvj%2BE8jMM7P6MMGOqUB189gl4NBlWnead3w%2Fc%2F9HwofyYzZFh6rBjMvkai3mPF9Neu%2BS3zRVK8poqRLBei7PVIJsd3MvwkgS%2FACp75YUKw77c%2Bodx0z7K6u7huWLX15jeplJwGvkZob6bZjh5qWS2wtBelua8tZmfz3OWK24DPyCHHRSy8cY%2Bj3xSzfH%2BlUANp%2BM2nH0LzQoVC9s3Wb8PWwbb1TzZJ6nDoirc6dHCy8VgRx&X-Amz-Signature=c657cf25f950f864046f35d5b94efe6c5843866fc9a2c4a603326b5da14fc50d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP4RGVVR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T121742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIC5CNSTkzRf9Nz5xYGej3rchIjHj0hObzPFGcHeU8gOeAiEAkW2Jgg4zfBDp0kXqzNYUcmZK2rKqyV4aNZ%2F4tq20bjwqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOP1OVoayoRf7UmgDCrcA9ZO%2BmcknpUppoo1MPumCXZg7vNsiqb9sk%2FvL81iAV13IK1Z7q1l7Lr78xhjJt5k8PG0RVzuhy1rhGs9rRkj7md9lrHybxI5MDFsMoKnFoeGs2GqtoP1LVfL%2FT2aKeY%2BNCJRJlycXAgVPce02wGitLcuus%2Btju8vlgv5uzYw5AUegPJDFgaWusJ1dIJ2IHf98jYyJ%2BNVWn%2BDgu0sDz%2FM9m3oXGnEthVNV5V0fNON0xhoZYojsA33UAO6yzhVjN1XDAGOnivK2LVCVsAcGayTQKEc7vfivPYKAZ7nnE1us3T%2FJNudy9asGt0wXzS4qr7noIR%2Bc4lHfk6EHH4uh%2BB95BZVWngBEwKlNWfK%2FRN2pJAGdeQiTsZ5abNVTZXLQ268dA4ZKie%2BOEr0LZb6bZis7SZupmQUCm5fFRMGPMRgHwvPw%2BN7RLZAFi9G6hZa2YJpbDT0vP7lDSGUM5Q3F%2Fd1GE%2FWZpiPXyxhSz%2Fe90qS0jJjmBpUnsX1j6iYPgYjJz%2FLcxmVGgu7mjWw9DHDiH1ZER9j9t%2FvA9nwLVs1RKxbWYsyH1zPgqHEQMYrCaya51qv%2B4v5qZS2t4SGAqmf15Gv3698rYM6bELGnf4b2paGyFZxF2t8jO3SnNvj%2BE8jMM7P6MMGOqUB189gl4NBlWnead3w%2Fc%2F9HwofyYzZFh6rBjMvkai3mPF9Neu%2BS3zRVK8poqRLBei7PVIJsd3MvwkgS%2FACp75YUKw77c%2Bodx0z7K6u7huWLX15jeplJwGvkZob6bZjh5qWS2wtBelua8tZmfz3OWK24DPyCHHRSy8cY%2Bj3xSzfH%2BlUANp%2BM2nH0LzQoVC9s3Wb8PWwbb1TzZJ6nDoirc6dHCy8VgRx&X-Amz-Signature=531ad84a944d004555f1173fb6afa9891b628fa4f6a1e3402d8c1cc3956b073d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP4RGVVR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T121742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIC5CNSTkzRf9Nz5xYGej3rchIjHj0hObzPFGcHeU8gOeAiEAkW2Jgg4zfBDp0kXqzNYUcmZK2rKqyV4aNZ%2F4tq20bjwqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOP1OVoayoRf7UmgDCrcA9ZO%2BmcknpUppoo1MPumCXZg7vNsiqb9sk%2FvL81iAV13IK1Z7q1l7Lr78xhjJt5k8PG0RVzuhy1rhGs9rRkj7md9lrHybxI5MDFsMoKnFoeGs2GqtoP1LVfL%2FT2aKeY%2BNCJRJlycXAgVPce02wGitLcuus%2Btju8vlgv5uzYw5AUegPJDFgaWusJ1dIJ2IHf98jYyJ%2BNVWn%2BDgu0sDz%2FM9m3oXGnEthVNV5V0fNON0xhoZYojsA33UAO6yzhVjN1XDAGOnivK2LVCVsAcGayTQKEc7vfivPYKAZ7nnE1us3T%2FJNudy9asGt0wXzS4qr7noIR%2Bc4lHfk6EHH4uh%2BB95BZVWngBEwKlNWfK%2FRN2pJAGdeQiTsZ5abNVTZXLQ268dA4ZKie%2BOEr0LZb6bZis7SZupmQUCm5fFRMGPMRgHwvPw%2BN7RLZAFi9G6hZa2YJpbDT0vP7lDSGUM5Q3F%2Fd1GE%2FWZpiPXyxhSz%2Fe90qS0jJjmBpUnsX1j6iYPgYjJz%2FLcxmVGgu7mjWw9DHDiH1ZER9j9t%2FvA9nwLVs1RKxbWYsyH1zPgqHEQMYrCaya51qv%2B4v5qZS2t4SGAqmf15Gv3698rYM6bELGnf4b2paGyFZxF2t8jO3SnNvj%2BE8jMM7P6MMGOqUB189gl4NBlWnead3w%2Fc%2F9HwofyYzZFh6rBjMvkai3mPF9Neu%2BS3zRVK8poqRLBei7PVIJsd3MvwkgS%2FACp75YUKw77c%2Bodx0z7K6u7huWLX15jeplJwGvkZob6bZjh5qWS2wtBelua8tZmfz3OWK24DPyCHHRSy8cY%2Bj3xSzfH%2BlUANp%2BM2nH0LzQoVC9s3Wb8PWwbb1TzZJ6nDoirc6dHCy8VgRx&X-Amz-Signature=4b9c7c020c8d010df50d67a9a8bbee3ec2dbc9e26bccfbee83a3466acb38f1e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP4RGVVR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T121742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIC5CNSTkzRf9Nz5xYGej3rchIjHj0hObzPFGcHeU8gOeAiEAkW2Jgg4zfBDp0kXqzNYUcmZK2rKqyV4aNZ%2F4tq20bjwqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOP1OVoayoRf7UmgDCrcA9ZO%2BmcknpUppoo1MPumCXZg7vNsiqb9sk%2FvL81iAV13IK1Z7q1l7Lr78xhjJt5k8PG0RVzuhy1rhGs9rRkj7md9lrHybxI5MDFsMoKnFoeGs2GqtoP1LVfL%2FT2aKeY%2BNCJRJlycXAgVPce02wGitLcuus%2Btju8vlgv5uzYw5AUegPJDFgaWusJ1dIJ2IHf98jYyJ%2BNVWn%2BDgu0sDz%2FM9m3oXGnEthVNV5V0fNON0xhoZYojsA33UAO6yzhVjN1XDAGOnivK2LVCVsAcGayTQKEc7vfivPYKAZ7nnE1us3T%2FJNudy9asGt0wXzS4qr7noIR%2Bc4lHfk6EHH4uh%2BB95BZVWngBEwKlNWfK%2FRN2pJAGdeQiTsZ5abNVTZXLQ268dA4ZKie%2BOEr0LZb6bZis7SZupmQUCm5fFRMGPMRgHwvPw%2BN7RLZAFi9G6hZa2YJpbDT0vP7lDSGUM5Q3F%2Fd1GE%2FWZpiPXyxhSz%2Fe90qS0jJjmBpUnsX1j6iYPgYjJz%2FLcxmVGgu7mjWw9DHDiH1ZER9j9t%2FvA9nwLVs1RKxbWYsyH1zPgqHEQMYrCaya51qv%2B4v5qZS2t4SGAqmf15Gv3698rYM6bELGnf4b2paGyFZxF2t8jO3SnNvj%2BE8jMM7P6MMGOqUB189gl4NBlWnead3w%2Fc%2F9HwofyYzZFh6rBjMvkai3mPF9Neu%2BS3zRVK8poqRLBei7PVIJsd3MvwkgS%2FACp75YUKw77c%2Bodx0z7K6u7huWLX15jeplJwGvkZob6bZjh5qWS2wtBelua8tZmfz3OWK24DPyCHHRSy8cY%2Bj3xSzfH%2BlUANp%2BM2nH0LzQoVC9s3Wb8PWwbb1TzZJ6nDoirc6dHCy8VgRx&X-Amz-Signature=f4dadd7302f63d07dde65fb83b16924c10ae09598c7849d26622bd6e918ef002&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP4RGVVR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T121742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIC5CNSTkzRf9Nz5xYGej3rchIjHj0hObzPFGcHeU8gOeAiEAkW2Jgg4zfBDp0kXqzNYUcmZK2rKqyV4aNZ%2F4tq20bjwqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOP1OVoayoRf7UmgDCrcA9ZO%2BmcknpUppoo1MPumCXZg7vNsiqb9sk%2FvL81iAV13IK1Z7q1l7Lr78xhjJt5k8PG0RVzuhy1rhGs9rRkj7md9lrHybxI5MDFsMoKnFoeGs2GqtoP1LVfL%2FT2aKeY%2BNCJRJlycXAgVPce02wGitLcuus%2Btju8vlgv5uzYw5AUegPJDFgaWusJ1dIJ2IHf98jYyJ%2BNVWn%2BDgu0sDz%2FM9m3oXGnEthVNV5V0fNON0xhoZYojsA33UAO6yzhVjN1XDAGOnivK2LVCVsAcGayTQKEc7vfivPYKAZ7nnE1us3T%2FJNudy9asGt0wXzS4qr7noIR%2Bc4lHfk6EHH4uh%2BB95BZVWngBEwKlNWfK%2FRN2pJAGdeQiTsZ5abNVTZXLQ268dA4ZKie%2BOEr0LZb6bZis7SZupmQUCm5fFRMGPMRgHwvPw%2BN7RLZAFi9G6hZa2YJpbDT0vP7lDSGUM5Q3F%2Fd1GE%2FWZpiPXyxhSz%2Fe90qS0jJjmBpUnsX1j6iYPgYjJz%2FLcxmVGgu7mjWw9DHDiH1ZER9j9t%2FvA9nwLVs1RKxbWYsyH1zPgqHEQMYrCaya51qv%2B4v5qZS2t4SGAqmf15Gv3698rYM6bELGnf4b2paGyFZxF2t8jO3SnNvj%2BE8jMM7P6MMGOqUB189gl4NBlWnead3w%2Fc%2F9HwofyYzZFh6rBjMvkai3mPF9Neu%2BS3zRVK8poqRLBei7PVIJsd3MvwkgS%2FACp75YUKw77c%2Bodx0z7K6u7huWLX15jeplJwGvkZob6bZjh5qWS2wtBelua8tZmfz3OWK24DPyCHHRSy8cY%2Bj3xSzfH%2BlUANp%2BM2nH0LzQoVC9s3Wb8PWwbb1TzZJ6nDoirc6dHCy8VgRx&X-Amz-Signature=0ba30c06427ede3bf438bcfe6ed6218340e927b1f730552512e5fcff771437f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
