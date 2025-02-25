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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC5JZXGO%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T200907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIFgI3VdFvWZPJ%2B%2F2GZ0%2BWLF%2BnzC7Mh%2BBH2AYKCFJ8DU%2BAiEAknmMvqUjwlMT1ARgzKbAXmrHFec%2FK4nYt2FR2nwOua0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDNeqXL195GmmhEEU0yrcA9nDQmtzdzA3jWWHhVcSeol%2BStm2iogiIHD7bo6qHyCRXzi0YK4k3KLBmC9I1RP5M41w5o2iBW8BE7DbtRiFauD38bEq0c6ZUiWuz6HQPgv34Q7Z1l6nXwGlzTnbg0PRH14iQto6PqCB4AyDvENaCtJD8ioxJhJxeAZ%2Fkydhw2RLw31fwB5iJX9xm0UMLrqMY%2BzA6MDfo8lzIpzIXBMKIKhj%2BrOwSAHlPFgfL3PT%2Fh1SYrLdZbX2ZS5Lh2L1lI0McoOg7UnXeojLedr31zMZNAJ%2BfvkJ4JRNtDm9swh7JafTYju2fC6wnMgNKLmfkyQBa7%2FQvaqrM3fdYeWXI36Y7EhlT3wTfkl5rSdpP5MLQD0dbv%2FBwLyhBbKliLaBm%2FkOLsKQqH0p4MEtDvtjCnj8Nh3ngT6c5lyicswAACPUCcvHnSyPg9g1mxIxZY6UhVasvrHnuKBjcjoQsriNMmJac3jsNDakxn3BNJeSlTcxOEe%2FN22xqxzj0C0JGnc6uxJI4jXYWk6vj4c%2Faa8zLawrpRYkgcJMRU9X3t9if%2B1OrIkBJHVgilMbEo%2BXgyk9wzj29H8DFtOynmZYg4tLhHjbywEQVMFUJXupB52Zrxb8%2FvrVUnTzXidyZCPfABDpMJOq%2BL0GOqUBXJPNrvg1%2F1KKPHWIf7wqmDFPth4WllmKOrtlbJAwEKbQKBclX0dJO9EaFiktu3mFBya%2BTOV29KfFXsfaSnZhgw2mg5NDZhanRvLXROv2411YTvwftD21x1R1i8Qb6rPENs%2BYiJ724tD840p8twcqnZ4RaygnjO9k0quqMtjrKs6dn2hGripG%2BSgOPM2sDsWBLEkLS67Sd3RehFVWeguDIaDY%2F5Dj&X-Amz-Signature=ccc808b5ae024994661444e3d83cf1c0e274b660fa6f25ce90f60c74b6c66028&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC5JZXGO%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T200907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIFgI3VdFvWZPJ%2B%2F2GZ0%2BWLF%2BnzC7Mh%2BBH2AYKCFJ8DU%2BAiEAknmMvqUjwlMT1ARgzKbAXmrHFec%2FK4nYt2FR2nwOua0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDNeqXL195GmmhEEU0yrcA9nDQmtzdzA3jWWHhVcSeol%2BStm2iogiIHD7bo6qHyCRXzi0YK4k3KLBmC9I1RP5M41w5o2iBW8BE7DbtRiFauD38bEq0c6ZUiWuz6HQPgv34Q7Z1l6nXwGlzTnbg0PRH14iQto6PqCB4AyDvENaCtJD8ioxJhJxeAZ%2Fkydhw2RLw31fwB5iJX9xm0UMLrqMY%2BzA6MDfo8lzIpzIXBMKIKhj%2BrOwSAHlPFgfL3PT%2Fh1SYrLdZbX2ZS5Lh2L1lI0McoOg7UnXeojLedr31zMZNAJ%2BfvkJ4JRNtDm9swh7JafTYju2fC6wnMgNKLmfkyQBa7%2FQvaqrM3fdYeWXI36Y7EhlT3wTfkl5rSdpP5MLQD0dbv%2FBwLyhBbKliLaBm%2FkOLsKQqH0p4MEtDvtjCnj8Nh3ngT6c5lyicswAACPUCcvHnSyPg9g1mxIxZY6UhVasvrHnuKBjcjoQsriNMmJac3jsNDakxn3BNJeSlTcxOEe%2FN22xqxzj0C0JGnc6uxJI4jXYWk6vj4c%2Faa8zLawrpRYkgcJMRU9X3t9if%2B1OrIkBJHVgilMbEo%2BXgyk9wzj29H8DFtOynmZYg4tLhHjbywEQVMFUJXupB52Zrxb8%2FvrVUnTzXidyZCPfABDpMJOq%2BL0GOqUBXJPNrvg1%2F1KKPHWIf7wqmDFPth4WllmKOrtlbJAwEKbQKBclX0dJO9EaFiktu3mFBya%2BTOV29KfFXsfaSnZhgw2mg5NDZhanRvLXROv2411YTvwftD21x1R1i8Qb6rPENs%2BYiJ724tD840p8twcqnZ4RaygnjO9k0quqMtjrKs6dn2hGripG%2BSgOPM2sDsWBLEkLS67Sd3RehFVWeguDIaDY%2F5Dj&X-Amz-Signature=68c3605b6c4541892d61686170a2570d07d51e621e3a10ce1eaa90c675aff4b6&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC5JZXGO%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T200907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIFgI3VdFvWZPJ%2B%2F2GZ0%2BWLF%2BnzC7Mh%2BBH2AYKCFJ8DU%2BAiEAknmMvqUjwlMT1ARgzKbAXmrHFec%2FK4nYt2FR2nwOua0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDNeqXL195GmmhEEU0yrcA9nDQmtzdzA3jWWHhVcSeol%2BStm2iogiIHD7bo6qHyCRXzi0YK4k3KLBmC9I1RP5M41w5o2iBW8BE7DbtRiFauD38bEq0c6ZUiWuz6HQPgv34Q7Z1l6nXwGlzTnbg0PRH14iQto6PqCB4AyDvENaCtJD8ioxJhJxeAZ%2Fkydhw2RLw31fwB5iJX9xm0UMLrqMY%2BzA6MDfo8lzIpzIXBMKIKhj%2BrOwSAHlPFgfL3PT%2Fh1SYrLdZbX2ZS5Lh2L1lI0McoOg7UnXeojLedr31zMZNAJ%2BfvkJ4JRNtDm9swh7JafTYju2fC6wnMgNKLmfkyQBa7%2FQvaqrM3fdYeWXI36Y7EhlT3wTfkl5rSdpP5MLQD0dbv%2FBwLyhBbKliLaBm%2FkOLsKQqH0p4MEtDvtjCnj8Nh3ngT6c5lyicswAACPUCcvHnSyPg9g1mxIxZY6UhVasvrHnuKBjcjoQsriNMmJac3jsNDakxn3BNJeSlTcxOEe%2FN22xqxzj0C0JGnc6uxJI4jXYWk6vj4c%2Faa8zLawrpRYkgcJMRU9X3t9if%2B1OrIkBJHVgilMbEo%2BXgyk9wzj29H8DFtOynmZYg4tLhHjbywEQVMFUJXupB52Zrxb8%2FvrVUnTzXidyZCPfABDpMJOq%2BL0GOqUBXJPNrvg1%2F1KKPHWIf7wqmDFPth4WllmKOrtlbJAwEKbQKBclX0dJO9EaFiktu3mFBya%2BTOV29KfFXsfaSnZhgw2mg5NDZhanRvLXROv2411YTvwftD21x1R1i8Qb6rPENs%2BYiJ724tD840p8twcqnZ4RaygnjO9k0quqMtjrKs6dn2hGripG%2BSgOPM2sDsWBLEkLS67Sd3RehFVWeguDIaDY%2F5Dj&X-Amz-Signature=d1f29b43003936b08cd715a5c78336424a7a7a26fad70803ec4b318929722e8b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC5JZXGO%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T200907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIFgI3VdFvWZPJ%2B%2F2GZ0%2BWLF%2BnzC7Mh%2BBH2AYKCFJ8DU%2BAiEAknmMvqUjwlMT1ARgzKbAXmrHFec%2FK4nYt2FR2nwOua0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDNeqXL195GmmhEEU0yrcA9nDQmtzdzA3jWWHhVcSeol%2BStm2iogiIHD7bo6qHyCRXzi0YK4k3KLBmC9I1RP5M41w5o2iBW8BE7DbtRiFauD38bEq0c6ZUiWuz6HQPgv34Q7Z1l6nXwGlzTnbg0PRH14iQto6PqCB4AyDvENaCtJD8ioxJhJxeAZ%2Fkydhw2RLw31fwB5iJX9xm0UMLrqMY%2BzA6MDfo8lzIpzIXBMKIKhj%2BrOwSAHlPFgfL3PT%2Fh1SYrLdZbX2ZS5Lh2L1lI0McoOg7UnXeojLedr31zMZNAJ%2BfvkJ4JRNtDm9swh7JafTYju2fC6wnMgNKLmfkyQBa7%2FQvaqrM3fdYeWXI36Y7EhlT3wTfkl5rSdpP5MLQD0dbv%2FBwLyhBbKliLaBm%2FkOLsKQqH0p4MEtDvtjCnj8Nh3ngT6c5lyicswAACPUCcvHnSyPg9g1mxIxZY6UhVasvrHnuKBjcjoQsriNMmJac3jsNDakxn3BNJeSlTcxOEe%2FN22xqxzj0C0JGnc6uxJI4jXYWk6vj4c%2Faa8zLawrpRYkgcJMRU9X3t9if%2B1OrIkBJHVgilMbEo%2BXgyk9wzj29H8DFtOynmZYg4tLhHjbywEQVMFUJXupB52Zrxb8%2FvrVUnTzXidyZCPfABDpMJOq%2BL0GOqUBXJPNrvg1%2F1KKPHWIf7wqmDFPth4WllmKOrtlbJAwEKbQKBclX0dJO9EaFiktu3mFBya%2BTOV29KfFXsfaSnZhgw2mg5NDZhanRvLXROv2411YTvwftD21x1R1i8Qb6rPENs%2BYiJ724tD840p8twcqnZ4RaygnjO9k0quqMtjrKs6dn2hGripG%2BSgOPM2sDsWBLEkLS67Sd3RehFVWeguDIaDY%2F5Dj&X-Amz-Signature=62e58141f58b7162435bac168aef114306a0b665567c3ece378f3f9d61e688ae&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC5JZXGO%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T200907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIFgI3VdFvWZPJ%2B%2F2GZ0%2BWLF%2BnzC7Mh%2BBH2AYKCFJ8DU%2BAiEAknmMvqUjwlMT1ARgzKbAXmrHFec%2FK4nYt2FR2nwOua0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDNeqXL195GmmhEEU0yrcA9nDQmtzdzA3jWWHhVcSeol%2BStm2iogiIHD7bo6qHyCRXzi0YK4k3KLBmC9I1RP5M41w5o2iBW8BE7DbtRiFauD38bEq0c6ZUiWuz6HQPgv34Q7Z1l6nXwGlzTnbg0PRH14iQto6PqCB4AyDvENaCtJD8ioxJhJxeAZ%2Fkydhw2RLw31fwB5iJX9xm0UMLrqMY%2BzA6MDfo8lzIpzIXBMKIKhj%2BrOwSAHlPFgfL3PT%2Fh1SYrLdZbX2ZS5Lh2L1lI0McoOg7UnXeojLedr31zMZNAJ%2BfvkJ4JRNtDm9swh7JafTYju2fC6wnMgNKLmfkyQBa7%2FQvaqrM3fdYeWXI36Y7EhlT3wTfkl5rSdpP5MLQD0dbv%2FBwLyhBbKliLaBm%2FkOLsKQqH0p4MEtDvtjCnj8Nh3ngT6c5lyicswAACPUCcvHnSyPg9g1mxIxZY6UhVasvrHnuKBjcjoQsriNMmJac3jsNDakxn3BNJeSlTcxOEe%2FN22xqxzj0C0JGnc6uxJI4jXYWk6vj4c%2Faa8zLawrpRYkgcJMRU9X3t9if%2B1OrIkBJHVgilMbEo%2BXgyk9wzj29H8DFtOynmZYg4tLhHjbywEQVMFUJXupB52Zrxb8%2FvrVUnTzXidyZCPfABDpMJOq%2BL0GOqUBXJPNrvg1%2F1KKPHWIf7wqmDFPth4WllmKOrtlbJAwEKbQKBclX0dJO9EaFiktu3mFBya%2BTOV29KfFXsfaSnZhgw2mg5NDZhanRvLXROv2411YTvwftD21x1R1i8Qb6rPENs%2BYiJ724tD840p8twcqnZ4RaygnjO9k0quqMtjrKs6dn2hGripG%2BSgOPM2sDsWBLEkLS67Sd3RehFVWeguDIaDY%2F5Dj&X-Amz-Signature=3679accef6953d16e6d62df5c5118a35ea1f15465894df67635460e11d5572b8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC5JZXGO%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T200907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIFgI3VdFvWZPJ%2B%2F2GZ0%2BWLF%2BnzC7Mh%2BBH2AYKCFJ8DU%2BAiEAknmMvqUjwlMT1ARgzKbAXmrHFec%2FK4nYt2FR2nwOua0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDNeqXL195GmmhEEU0yrcA9nDQmtzdzA3jWWHhVcSeol%2BStm2iogiIHD7bo6qHyCRXzi0YK4k3KLBmC9I1RP5M41w5o2iBW8BE7DbtRiFauD38bEq0c6ZUiWuz6HQPgv34Q7Z1l6nXwGlzTnbg0PRH14iQto6PqCB4AyDvENaCtJD8ioxJhJxeAZ%2Fkydhw2RLw31fwB5iJX9xm0UMLrqMY%2BzA6MDfo8lzIpzIXBMKIKhj%2BrOwSAHlPFgfL3PT%2Fh1SYrLdZbX2ZS5Lh2L1lI0McoOg7UnXeojLedr31zMZNAJ%2BfvkJ4JRNtDm9swh7JafTYju2fC6wnMgNKLmfkyQBa7%2FQvaqrM3fdYeWXI36Y7EhlT3wTfkl5rSdpP5MLQD0dbv%2FBwLyhBbKliLaBm%2FkOLsKQqH0p4MEtDvtjCnj8Nh3ngT6c5lyicswAACPUCcvHnSyPg9g1mxIxZY6UhVasvrHnuKBjcjoQsriNMmJac3jsNDakxn3BNJeSlTcxOEe%2FN22xqxzj0C0JGnc6uxJI4jXYWk6vj4c%2Faa8zLawrpRYkgcJMRU9X3t9if%2B1OrIkBJHVgilMbEo%2BXgyk9wzj29H8DFtOynmZYg4tLhHjbywEQVMFUJXupB52Zrxb8%2FvrVUnTzXidyZCPfABDpMJOq%2BL0GOqUBXJPNrvg1%2F1KKPHWIf7wqmDFPth4WllmKOrtlbJAwEKbQKBclX0dJO9EaFiktu3mFBya%2BTOV29KfFXsfaSnZhgw2mg5NDZhanRvLXROv2411YTvwftD21x1R1i8Qb6rPENs%2BYiJ724tD840p8twcqnZ4RaygnjO9k0quqMtjrKs6dn2hGripG%2BSgOPM2sDsWBLEkLS67Sd3RehFVWeguDIaDY%2F5Dj&X-Amz-Signature=947ab4789a6b6e12f93b53f0adbc6d8182d6ce6b609c737459754e9bb9c88862&X-Amz-SignedHeaders=host&x-id=GetObject)
