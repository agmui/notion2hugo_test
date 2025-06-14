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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH65FVCE%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIH7pmtw8CX2O0rXMonPTJ03XXUfGPRw0m9hhwsk%2BDOhpAiB6NHI9gZyYVz8cew9m%2FGa56QZPfI2XTNTCFxh7IWP%2Foyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMD7Mv%2B4KcJeIO7x8pKtwD6vU3n30RoxECyfeh6J0PWFGzhXW43dAJG%2FAtaVZsdHyt2AdTzsLl2HwuXj5JNDBhB5ONPY2MmqBcksxOhdd2gNrig5O%2BZ7S5HTmcbaPhv4d4m09CS46VSrXgPJfGCzhdFH07BQiCHMJM3FmUStafAjK7Oykq91u7b%2F77iBeD13pJTDkzusBMVdHsr052uO%2Fs7xOCZDD%2F4gzS6qF%2FvXlVSjRvMdb6XtyDj%2FXhxiNkSDMeSTs1vCIDuSskIOICEu%2B9gQglbN8RGdNTIOavhNOULnFhtw1noBciSVN1dRK%2B6ZzvRCRmghWEeEWt3jt7chPMZaJ%2F%2FGvw3HG70lgeWv1n%2BthyOKWSyi8kCEipx7zL3TTkWIamUhteKRMt%2FTagfjqVX%2FmB%2FJqY5JT0YNH7OmfH39KUfJLqvK%2F6Lv6dsuh5RW2gVWXFa03p4lHcnO0etne5oJuRgCOb220h1iXUTY4FLYIDIhgxeVmKu%2BUxSZ9EWkmr9zubLDyOC09myZe%2Fl2i2AnMDTV78yhxyLVKWgyMa0pt3wfwtuj3l%2FH2HRjGfmBtZeo0tQ4uzOw1hSP%2FsrGqnt1%2Blmen0lJJ2aKq4caRS37LAZQKeH1ypR3IzQc3Rij2nr%2Fv56luIQHTDAJIwxKS3wgY6pgEqG2IqJfOukxLzKuTTQfZhv0ARDIqM1VwUOwYDIYrAkue1VpLcKkvhPNfAjDmkqW5JbLb0qFsHcUYA8IxlKEd6FQcTu%2BHWoqVgeoAxA1PHV1AJBdZKWTPi%2FKLi7ced4gj9nprbReDOHZowPC2q2B2YS2StkyVQcjVYWc0sAwOmn8lIwEoDMjM0h2QGwz7UTnLJtBAggMbbbMth5D7PkFppcKLpQPz0&X-Amz-Signature=f754dff537bfd6fa5a4e21cfe47864bfa0dcf2b7de8eef41d21d747caa113495&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH65FVCE%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIH7pmtw8CX2O0rXMonPTJ03XXUfGPRw0m9hhwsk%2BDOhpAiB6NHI9gZyYVz8cew9m%2FGa56QZPfI2XTNTCFxh7IWP%2Foyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMD7Mv%2B4KcJeIO7x8pKtwD6vU3n30RoxECyfeh6J0PWFGzhXW43dAJG%2FAtaVZsdHyt2AdTzsLl2HwuXj5JNDBhB5ONPY2MmqBcksxOhdd2gNrig5O%2BZ7S5HTmcbaPhv4d4m09CS46VSrXgPJfGCzhdFH07BQiCHMJM3FmUStafAjK7Oykq91u7b%2F77iBeD13pJTDkzusBMVdHsr052uO%2Fs7xOCZDD%2F4gzS6qF%2FvXlVSjRvMdb6XtyDj%2FXhxiNkSDMeSTs1vCIDuSskIOICEu%2B9gQglbN8RGdNTIOavhNOULnFhtw1noBciSVN1dRK%2B6ZzvRCRmghWEeEWt3jt7chPMZaJ%2F%2FGvw3HG70lgeWv1n%2BthyOKWSyi8kCEipx7zL3TTkWIamUhteKRMt%2FTagfjqVX%2FmB%2FJqY5JT0YNH7OmfH39KUfJLqvK%2F6Lv6dsuh5RW2gVWXFa03p4lHcnO0etne5oJuRgCOb220h1iXUTY4FLYIDIhgxeVmKu%2BUxSZ9EWkmr9zubLDyOC09myZe%2Fl2i2AnMDTV78yhxyLVKWgyMa0pt3wfwtuj3l%2FH2HRjGfmBtZeo0tQ4uzOw1hSP%2FsrGqnt1%2Blmen0lJJ2aKq4caRS37LAZQKeH1ypR3IzQc3Rij2nr%2Fv56luIQHTDAJIwxKS3wgY6pgEqG2IqJfOukxLzKuTTQfZhv0ARDIqM1VwUOwYDIYrAkue1VpLcKkvhPNfAjDmkqW5JbLb0qFsHcUYA8IxlKEd6FQcTu%2BHWoqVgeoAxA1PHV1AJBdZKWTPi%2FKLi7ced4gj9nprbReDOHZowPC2q2B2YS2StkyVQcjVYWc0sAwOmn8lIwEoDMjM0h2QGwz7UTnLJtBAggMbbbMth5D7PkFppcKLpQPz0&X-Amz-Signature=5695ec78bc23f1f8ac09ee3eca052ba1365ea3c5820f0d0582a1a0fbb0e2ceb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH65FVCE%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIH7pmtw8CX2O0rXMonPTJ03XXUfGPRw0m9hhwsk%2BDOhpAiB6NHI9gZyYVz8cew9m%2FGa56QZPfI2XTNTCFxh7IWP%2Foyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMD7Mv%2B4KcJeIO7x8pKtwD6vU3n30RoxECyfeh6J0PWFGzhXW43dAJG%2FAtaVZsdHyt2AdTzsLl2HwuXj5JNDBhB5ONPY2MmqBcksxOhdd2gNrig5O%2BZ7S5HTmcbaPhv4d4m09CS46VSrXgPJfGCzhdFH07BQiCHMJM3FmUStafAjK7Oykq91u7b%2F77iBeD13pJTDkzusBMVdHsr052uO%2Fs7xOCZDD%2F4gzS6qF%2FvXlVSjRvMdb6XtyDj%2FXhxiNkSDMeSTs1vCIDuSskIOICEu%2B9gQglbN8RGdNTIOavhNOULnFhtw1noBciSVN1dRK%2B6ZzvRCRmghWEeEWt3jt7chPMZaJ%2F%2FGvw3HG70lgeWv1n%2BthyOKWSyi8kCEipx7zL3TTkWIamUhteKRMt%2FTagfjqVX%2FmB%2FJqY5JT0YNH7OmfH39KUfJLqvK%2F6Lv6dsuh5RW2gVWXFa03p4lHcnO0etne5oJuRgCOb220h1iXUTY4FLYIDIhgxeVmKu%2BUxSZ9EWkmr9zubLDyOC09myZe%2Fl2i2AnMDTV78yhxyLVKWgyMa0pt3wfwtuj3l%2FH2HRjGfmBtZeo0tQ4uzOw1hSP%2FsrGqnt1%2Blmen0lJJ2aKq4caRS37LAZQKeH1ypR3IzQc3Rij2nr%2Fv56luIQHTDAJIwxKS3wgY6pgEqG2IqJfOukxLzKuTTQfZhv0ARDIqM1VwUOwYDIYrAkue1VpLcKkvhPNfAjDmkqW5JbLb0qFsHcUYA8IxlKEd6FQcTu%2BHWoqVgeoAxA1PHV1AJBdZKWTPi%2FKLi7ced4gj9nprbReDOHZowPC2q2B2YS2StkyVQcjVYWc0sAwOmn8lIwEoDMjM0h2QGwz7UTnLJtBAggMbbbMth5D7PkFppcKLpQPz0&X-Amz-Signature=8d2352c36ee2225ac9fa379ddd715bfd4615223695fd3a60ddc243138a30522b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH65FVCE%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIH7pmtw8CX2O0rXMonPTJ03XXUfGPRw0m9hhwsk%2BDOhpAiB6NHI9gZyYVz8cew9m%2FGa56QZPfI2XTNTCFxh7IWP%2Foyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMD7Mv%2B4KcJeIO7x8pKtwD6vU3n30RoxECyfeh6J0PWFGzhXW43dAJG%2FAtaVZsdHyt2AdTzsLl2HwuXj5JNDBhB5ONPY2MmqBcksxOhdd2gNrig5O%2BZ7S5HTmcbaPhv4d4m09CS46VSrXgPJfGCzhdFH07BQiCHMJM3FmUStafAjK7Oykq91u7b%2F77iBeD13pJTDkzusBMVdHsr052uO%2Fs7xOCZDD%2F4gzS6qF%2FvXlVSjRvMdb6XtyDj%2FXhxiNkSDMeSTs1vCIDuSskIOICEu%2B9gQglbN8RGdNTIOavhNOULnFhtw1noBciSVN1dRK%2B6ZzvRCRmghWEeEWt3jt7chPMZaJ%2F%2FGvw3HG70lgeWv1n%2BthyOKWSyi8kCEipx7zL3TTkWIamUhteKRMt%2FTagfjqVX%2FmB%2FJqY5JT0YNH7OmfH39KUfJLqvK%2F6Lv6dsuh5RW2gVWXFa03p4lHcnO0etne5oJuRgCOb220h1iXUTY4FLYIDIhgxeVmKu%2BUxSZ9EWkmr9zubLDyOC09myZe%2Fl2i2AnMDTV78yhxyLVKWgyMa0pt3wfwtuj3l%2FH2HRjGfmBtZeo0tQ4uzOw1hSP%2FsrGqnt1%2Blmen0lJJ2aKq4caRS37LAZQKeH1ypR3IzQc3Rij2nr%2Fv56luIQHTDAJIwxKS3wgY6pgEqG2IqJfOukxLzKuTTQfZhv0ARDIqM1VwUOwYDIYrAkue1VpLcKkvhPNfAjDmkqW5JbLb0qFsHcUYA8IxlKEd6FQcTu%2BHWoqVgeoAxA1PHV1AJBdZKWTPi%2FKLi7ced4gj9nprbReDOHZowPC2q2B2YS2StkyVQcjVYWc0sAwOmn8lIwEoDMjM0h2QGwz7UTnLJtBAggMbbbMth5D7PkFppcKLpQPz0&X-Amz-Signature=3f9003e9091c8d4c6f275fe6f580cd7cc32503ead5b39d13fc2011deb089ece5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH65FVCE%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIH7pmtw8CX2O0rXMonPTJ03XXUfGPRw0m9hhwsk%2BDOhpAiB6NHI9gZyYVz8cew9m%2FGa56QZPfI2XTNTCFxh7IWP%2Foyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMD7Mv%2B4KcJeIO7x8pKtwD6vU3n30RoxECyfeh6J0PWFGzhXW43dAJG%2FAtaVZsdHyt2AdTzsLl2HwuXj5JNDBhB5ONPY2MmqBcksxOhdd2gNrig5O%2BZ7S5HTmcbaPhv4d4m09CS46VSrXgPJfGCzhdFH07BQiCHMJM3FmUStafAjK7Oykq91u7b%2F77iBeD13pJTDkzusBMVdHsr052uO%2Fs7xOCZDD%2F4gzS6qF%2FvXlVSjRvMdb6XtyDj%2FXhxiNkSDMeSTs1vCIDuSskIOICEu%2B9gQglbN8RGdNTIOavhNOULnFhtw1noBciSVN1dRK%2B6ZzvRCRmghWEeEWt3jt7chPMZaJ%2F%2FGvw3HG70lgeWv1n%2BthyOKWSyi8kCEipx7zL3TTkWIamUhteKRMt%2FTagfjqVX%2FmB%2FJqY5JT0YNH7OmfH39KUfJLqvK%2F6Lv6dsuh5RW2gVWXFa03p4lHcnO0etne5oJuRgCOb220h1iXUTY4FLYIDIhgxeVmKu%2BUxSZ9EWkmr9zubLDyOC09myZe%2Fl2i2AnMDTV78yhxyLVKWgyMa0pt3wfwtuj3l%2FH2HRjGfmBtZeo0tQ4uzOw1hSP%2FsrGqnt1%2Blmen0lJJ2aKq4caRS37LAZQKeH1ypR3IzQc3Rij2nr%2Fv56luIQHTDAJIwxKS3wgY6pgEqG2IqJfOukxLzKuTTQfZhv0ARDIqM1VwUOwYDIYrAkue1VpLcKkvhPNfAjDmkqW5JbLb0qFsHcUYA8IxlKEd6FQcTu%2BHWoqVgeoAxA1PHV1AJBdZKWTPi%2FKLi7ced4gj9nprbReDOHZowPC2q2B2YS2StkyVQcjVYWc0sAwOmn8lIwEoDMjM0h2QGwz7UTnLJtBAggMbbbMth5D7PkFppcKLpQPz0&X-Amz-Signature=1ab13c09e76206b15a63996c76e448abba34734b9d8dfdbb7c4a1b09e90bf7fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH65FVCE%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJGMEQCIH7pmtw8CX2O0rXMonPTJ03XXUfGPRw0m9hhwsk%2BDOhpAiB6NHI9gZyYVz8cew9m%2FGa56QZPfI2XTNTCFxh7IWP%2Foyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMD7Mv%2B4KcJeIO7x8pKtwD6vU3n30RoxECyfeh6J0PWFGzhXW43dAJG%2FAtaVZsdHyt2AdTzsLl2HwuXj5JNDBhB5ONPY2MmqBcksxOhdd2gNrig5O%2BZ7S5HTmcbaPhv4d4m09CS46VSrXgPJfGCzhdFH07BQiCHMJM3FmUStafAjK7Oykq91u7b%2F77iBeD13pJTDkzusBMVdHsr052uO%2Fs7xOCZDD%2F4gzS6qF%2FvXlVSjRvMdb6XtyDj%2FXhxiNkSDMeSTs1vCIDuSskIOICEu%2B9gQglbN8RGdNTIOavhNOULnFhtw1noBciSVN1dRK%2B6ZzvRCRmghWEeEWt3jt7chPMZaJ%2F%2FGvw3HG70lgeWv1n%2BthyOKWSyi8kCEipx7zL3TTkWIamUhteKRMt%2FTagfjqVX%2FmB%2FJqY5JT0YNH7OmfH39KUfJLqvK%2F6Lv6dsuh5RW2gVWXFa03p4lHcnO0etne5oJuRgCOb220h1iXUTY4FLYIDIhgxeVmKu%2BUxSZ9EWkmr9zubLDyOC09myZe%2Fl2i2AnMDTV78yhxyLVKWgyMa0pt3wfwtuj3l%2FH2HRjGfmBtZeo0tQ4uzOw1hSP%2FsrGqnt1%2Blmen0lJJ2aKq4caRS37LAZQKeH1ypR3IzQc3Rij2nr%2Fv56luIQHTDAJIwxKS3wgY6pgEqG2IqJfOukxLzKuTTQfZhv0ARDIqM1VwUOwYDIYrAkue1VpLcKkvhPNfAjDmkqW5JbLb0qFsHcUYA8IxlKEd6FQcTu%2BHWoqVgeoAxA1PHV1AJBdZKWTPi%2FKLi7ced4gj9nprbReDOHZowPC2q2B2YS2StkyVQcjVYWc0sAwOmn8lIwEoDMjM0h2QGwz7UTnLJtBAggMbbbMth5D7PkFppcKLpQPz0&X-Amz-Signature=d4ff7eed0c5debcbe4fc7917593ef6549a73117ec6b73e01e0335e65ddbe9c9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
