---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6ZGZ46P%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T210520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBTAc2KBmCeL5xDdQmC28PNgCikdt307la3ZyHJHG%2BVeAiACfGHFOmYXvyUAyLiur%2BPSPccHRSvvWeuQe1c9B2x54yqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRoZ4py7FtJMjDsmyKtwDsgCT5UIrE7GEzDKKJXJAXef81WAo40VBGOnwjq9vHuVJigC3mKARWLnZ5ymiaQyLEDC6lvwS1%2F3zRgBp%2By1V%2B41S4%2FNfQSeA1My5wXWVXK0EGfN5kIgEDmQlLnp%2FHJYCMq2LNtMtgfSxIdKsm2PI9Rs1w1ys7GJBQdogk4U8Bsuu0tgxzrOcmDK5JCRCUkcCz6ujDtvfoe4hOc00ljdygyklYT%2FsEXO%2BH7tfUzwflFAZadmDgvFZ6vJ1%2FfaJWL1EHGCntyxC9RTcuMOm0TdHDl2%2FNLaPyan1ldMZI4FuW7qjwHENQUmi0YrOBH3gwsRi4hYP%2BS%2FaLZxYy3LyE95OjKQUwbBBtzqclmbGhQ1%2FJZmGU0T27AgyYtLJHI%2FeOMr20X3Ux116iHHOklYBT%2B7tR38Fl3jqe6ErTS4PU05TzEO29gVD0XI7ijKS%2B95U7j6DDwO%2BtS7uZY2aTMUAoN3pPFJ%2BWSPAFo3NHXIi7s4T3rEVdFaz7b902JeIdiTAmeC0hKn9eaSDXq7hnsSFCPnimQv9jSwpRaez69zalrR%2BwFRQMX7btBrP1vrXyKeU2SRD40FC4ridofejCb20G0%2B4X0djlzQ4lo%2BGMwSE4%2FAvyCHxSRgWIXM2x2nOUZww0MbvvAY6pgFfjRRIfwfkUU%2B0yNLlzT10JDWLbU7h4E9uxbW7mnjltq%2FSTmVrB9zLeXXypMQWT7lsNGqe4yNw%2FgxhMpvippMG9V2ohV6Ww2kDSmChsX4uClTTbDLoEGjw3Qc1qk480VTmsPjCS8%2FsS5yF2GeHpM1JF%2FfnJ3NMWvfrjfpkQfWgH2KJbNVSVxf3k5SBFdqlPBRg0WYBjBHaBoGfz7FsnevSaY9f0cfZ&X-Amz-Signature=7070a8302ee0657af0280dc90ff18adc06b6e238d121c366b9e387c0475d56e4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6ZGZ46P%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T210520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBTAc2KBmCeL5xDdQmC28PNgCikdt307la3ZyHJHG%2BVeAiACfGHFOmYXvyUAyLiur%2BPSPccHRSvvWeuQe1c9B2x54yqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRoZ4py7FtJMjDsmyKtwDsgCT5UIrE7GEzDKKJXJAXef81WAo40VBGOnwjq9vHuVJigC3mKARWLnZ5ymiaQyLEDC6lvwS1%2F3zRgBp%2By1V%2B41S4%2FNfQSeA1My5wXWVXK0EGfN5kIgEDmQlLnp%2FHJYCMq2LNtMtgfSxIdKsm2PI9Rs1w1ys7GJBQdogk4U8Bsuu0tgxzrOcmDK5JCRCUkcCz6ujDtvfoe4hOc00ljdygyklYT%2FsEXO%2BH7tfUzwflFAZadmDgvFZ6vJ1%2FfaJWL1EHGCntyxC9RTcuMOm0TdHDl2%2FNLaPyan1ldMZI4FuW7qjwHENQUmi0YrOBH3gwsRi4hYP%2BS%2FaLZxYy3LyE95OjKQUwbBBtzqclmbGhQ1%2FJZmGU0T27AgyYtLJHI%2FeOMr20X3Ux116iHHOklYBT%2B7tR38Fl3jqe6ErTS4PU05TzEO29gVD0XI7ijKS%2B95U7j6DDwO%2BtS7uZY2aTMUAoN3pPFJ%2BWSPAFo3NHXIi7s4T3rEVdFaz7b902JeIdiTAmeC0hKn9eaSDXq7hnsSFCPnimQv9jSwpRaez69zalrR%2BwFRQMX7btBrP1vrXyKeU2SRD40FC4ridofejCb20G0%2B4X0djlzQ4lo%2BGMwSE4%2FAvyCHxSRgWIXM2x2nOUZww0MbvvAY6pgFfjRRIfwfkUU%2B0yNLlzT10JDWLbU7h4E9uxbW7mnjltq%2FSTmVrB9zLeXXypMQWT7lsNGqe4yNw%2FgxhMpvippMG9V2ohV6Ww2kDSmChsX4uClTTbDLoEGjw3Qc1qk480VTmsPjCS8%2FsS5yF2GeHpM1JF%2FfnJ3NMWvfrjfpkQfWgH2KJbNVSVxf3k5SBFdqlPBRg0WYBjBHaBoGfz7FsnevSaY9f0cfZ&X-Amz-Signature=9a32adecd1f817db573e30fe267cbad6ae3e9d47297abaeca928b28a8bebacd0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6ZGZ46P%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T210520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBTAc2KBmCeL5xDdQmC28PNgCikdt307la3ZyHJHG%2BVeAiACfGHFOmYXvyUAyLiur%2BPSPccHRSvvWeuQe1c9B2x54yqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRoZ4py7FtJMjDsmyKtwDsgCT5UIrE7GEzDKKJXJAXef81WAo40VBGOnwjq9vHuVJigC3mKARWLnZ5ymiaQyLEDC6lvwS1%2F3zRgBp%2By1V%2B41S4%2FNfQSeA1My5wXWVXK0EGfN5kIgEDmQlLnp%2FHJYCMq2LNtMtgfSxIdKsm2PI9Rs1w1ys7GJBQdogk4U8Bsuu0tgxzrOcmDK5JCRCUkcCz6ujDtvfoe4hOc00ljdygyklYT%2FsEXO%2BH7tfUzwflFAZadmDgvFZ6vJ1%2FfaJWL1EHGCntyxC9RTcuMOm0TdHDl2%2FNLaPyan1ldMZI4FuW7qjwHENQUmi0YrOBH3gwsRi4hYP%2BS%2FaLZxYy3LyE95OjKQUwbBBtzqclmbGhQ1%2FJZmGU0T27AgyYtLJHI%2FeOMr20X3Ux116iHHOklYBT%2B7tR38Fl3jqe6ErTS4PU05TzEO29gVD0XI7ijKS%2B95U7j6DDwO%2BtS7uZY2aTMUAoN3pPFJ%2BWSPAFo3NHXIi7s4T3rEVdFaz7b902JeIdiTAmeC0hKn9eaSDXq7hnsSFCPnimQv9jSwpRaez69zalrR%2BwFRQMX7btBrP1vrXyKeU2SRD40FC4ridofejCb20G0%2B4X0djlzQ4lo%2BGMwSE4%2FAvyCHxSRgWIXM2x2nOUZww0MbvvAY6pgFfjRRIfwfkUU%2B0yNLlzT10JDWLbU7h4E9uxbW7mnjltq%2FSTmVrB9zLeXXypMQWT7lsNGqe4yNw%2FgxhMpvippMG9V2ohV6Ww2kDSmChsX4uClTTbDLoEGjw3Qc1qk480VTmsPjCS8%2FsS5yF2GeHpM1JF%2FfnJ3NMWvfrjfpkQfWgH2KJbNVSVxf3k5SBFdqlPBRg0WYBjBHaBoGfz7FsnevSaY9f0cfZ&X-Amz-Signature=ea27ca607f846d2b129d3367b2e0de46f0ff55498651962060de5588197bed23&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6ZGZ46P%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T210520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBTAc2KBmCeL5xDdQmC28PNgCikdt307la3ZyHJHG%2BVeAiACfGHFOmYXvyUAyLiur%2BPSPccHRSvvWeuQe1c9B2x54yqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRoZ4py7FtJMjDsmyKtwDsgCT5UIrE7GEzDKKJXJAXef81WAo40VBGOnwjq9vHuVJigC3mKARWLnZ5ymiaQyLEDC6lvwS1%2F3zRgBp%2By1V%2B41S4%2FNfQSeA1My5wXWVXK0EGfN5kIgEDmQlLnp%2FHJYCMq2LNtMtgfSxIdKsm2PI9Rs1w1ys7GJBQdogk4U8Bsuu0tgxzrOcmDK5JCRCUkcCz6ujDtvfoe4hOc00ljdygyklYT%2FsEXO%2BH7tfUzwflFAZadmDgvFZ6vJ1%2FfaJWL1EHGCntyxC9RTcuMOm0TdHDl2%2FNLaPyan1ldMZI4FuW7qjwHENQUmi0YrOBH3gwsRi4hYP%2BS%2FaLZxYy3LyE95OjKQUwbBBtzqclmbGhQ1%2FJZmGU0T27AgyYtLJHI%2FeOMr20X3Ux116iHHOklYBT%2B7tR38Fl3jqe6ErTS4PU05TzEO29gVD0XI7ijKS%2B95U7j6DDwO%2BtS7uZY2aTMUAoN3pPFJ%2BWSPAFo3NHXIi7s4T3rEVdFaz7b902JeIdiTAmeC0hKn9eaSDXq7hnsSFCPnimQv9jSwpRaez69zalrR%2BwFRQMX7btBrP1vrXyKeU2SRD40FC4ridofejCb20G0%2B4X0djlzQ4lo%2BGMwSE4%2FAvyCHxSRgWIXM2x2nOUZww0MbvvAY6pgFfjRRIfwfkUU%2B0yNLlzT10JDWLbU7h4E9uxbW7mnjltq%2FSTmVrB9zLeXXypMQWT7lsNGqe4yNw%2FgxhMpvippMG9V2ohV6Ww2kDSmChsX4uClTTbDLoEGjw3Qc1qk480VTmsPjCS8%2FsS5yF2GeHpM1JF%2FfnJ3NMWvfrjfpkQfWgH2KJbNVSVxf3k5SBFdqlPBRg0WYBjBHaBoGfz7FsnevSaY9f0cfZ&X-Amz-Signature=5b32395390b338f17adfc1b61da3a74a73734cef9e288329df2cc19160bfbdbc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6ZGZ46P%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T210520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBTAc2KBmCeL5xDdQmC28PNgCikdt307la3ZyHJHG%2BVeAiACfGHFOmYXvyUAyLiur%2BPSPccHRSvvWeuQe1c9B2x54yqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRoZ4py7FtJMjDsmyKtwDsgCT5UIrE7GEzDKKJXJAXef81WAo40VBGOnwjq9vHuVJigC3mKARWLnZ5ymiaQyLEDC6lvwS1%2F3zRgBp%2By1V%2B41S4%2FNfQSeA1My5wXWVXK0EGfN5kIgEDmQlLnp%2FHJYCMq2LNtMtgfSxIdKsm2PI9Rs1w1ys7GJBQdogk4U8Bsuu0tgxzrOcmDK5JCRCUkcCz6ujDtvfoe4hOc00ljdygyklYT%2FsEXO%2BH7tfUzwflFAZadmDgvFZ6vJ1%2FfaJWL1EHGCntyxC9RTcuMOm0TdHDl2%2FNLaPyan1ldMZI4FuW7qjwHENQUmi0YrOBH3gwsRi4hYP%2BS%2FaLZxYy3LyE95OjKQUwbBBtzqclmbGhQ1%2FJZmGU0T27AgyYtLJHI%2FeOMr20X3Ux116iHHOklYBT%2B7tR38Fl3jqe6ErTS4PU05TzEO29gVD0XI7ijKS%2B95U7j6DDwO%2BtS7uZY2aTMUAoN3pPFJ%2BWSPAFo3NHXIi7s4T3rEVdFaz7b902JeIdiTAmeC0hKn9eaSDXq7hnsSFCPnimQv9jSwpRaez69zalrR%2BwFRQMX7btBrP1vrXyKeU2SRD40FC4ridofejCb20G0%2B4X0djlzQ4lo%2BGMwSE4%2FAvyCHxSRgWIXM2x2nOUZww0MbvvAY6pgFfjRRIfwfkUU%2B0yNLlzT10JDWLbU7h4E9uxbW7mnjltq%2FSTmVrB9zLeXXypMQWT7lsNGqe4yNw%2FgxhMpvippMG9V2ohV6Ww2kDSmChsX4uClTTbDLoEGjw3Qc1qk480VTmsPjCS8%2FsS5yF2GeHpM1JF%2FfnJ3NMWvfrjfpkQfWgH2KJbNVSVxf3k5SBFdqlPBRg0WYBjBHaBoGfz7FsnevSaY9f0cfZ&X-Amz-Signature=902954ed5bcd10390baac8640ce4ca13fec47f857f6d7490056a4bf2ee03455a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6ZGZ46P%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T210520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBTAc2KBmCeL5xDdQmC28PNgCikdt307la3ZyHJHG%2BVeAiACfGHFOmYXvyUAyLiur%2BPSPccHRSvvWeuQe1c9B2x54yqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRoZ4py7FtJMjDsmyKtwDsgCT5UIrE7GEzDKKJXJAXef81WAo40VBGOnwjq9vHuVJigC3mKARWLnZ5ymiaQyLEDC6lvwS1%2F3zRgBp%2By1V%2B41S4%2FNfQSeA1My5wXWVXK0EGfN5kIgEDmQlLnp%2FHJYCMq2LNtMtgfSxIdKsm2PI9Rs1w1ys7GJBQdogk4U8Bsuu0tgxzrOcmDK5JCRCUkcCz6ujDtvfoe4hOc00ljdygyklYT%2FsEXO%2BH7tfUzwflFAZadmDgvFZ6vJ1%2FfaJWL1EHGCntyxC9RTcuMOm0TdHDl2%2FNLaPyan1ldMZI4FuW7qjwHENQUmi0YrOBH3gwsRi4hYP%2BS%2FaLZxYy3LyE95OjKQUwbBBtzqclmbGhQ1%2FJZmGU0T27AgyYtLJHI%2FeOMr20X3Ux116iHHOklYBT%2B7tR38Fl3jqe6ErTS4PU05TzEO29gVD0XI7ijKS%2B95U7j6DDwO%2BtS7uZY2aTMUAoN3pPFJ%2BWSPAFo3NHXIi7s4T3rEVdFaz7b902JeIdiTAmeC0hKn9eaSDXq7hnsSFCPnimQv9jSwpRaez69zalrR%2BwFRQMX7btBrP1vrXyKeU2SRD40FC4ridofejCb20G0%2B4X0djlzQ4lo%2BGMwSE4%2FAvyCHxSRgWIXM2x2nOUZww0MbvvAY6pgFfjRRIfwfkUU%2B0yNLlzT10JDWLbU7h4E9uxbW7mnjltq%2FSTmVrB9zLeXXypMQWT7lsNGqe4yNw%2FgxhMpvippMG9V2ohV6Ww2kDSmChsX4uClTTbDLoEGjw3Qc1qk480VTmsPjCS8%2FsS5yF2GeHpM1JF%2FfnJ3NMWvfrjfpkQfWgH2KJbNVSVxf3k5SBFdqlPBRg0WYBjBHaBoGfz7FsnevSaY9f0cfZ&X-Amz-Signature=a633c3d609b4f22ae43975f5c6d9e4d13ca43d62e386ba9e826a44cb0163e0a2&X-Amz-SignedHeaders=host&x-id=GetObject)
