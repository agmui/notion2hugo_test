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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3ZD7C3L%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUG945NZyFSW5DtJ2uDZxBUxWQtOWQ7FT3tqwS0Cz1pAIhAK%2FSg2bWNDYY%2Fmj%2F5%2BZG1Yl0BzFC0FBU4PZdMhd7KMgsKv8DCHwQABoMNjM3NDIzMTgzODA1IgzoGy%2BHoJQc%2Bawsda8q3AO%2BTBZWKDrokCKgKchGB1gWzFTSXG%2BZFVIbDQ%2F%2B3eHCVX%2FHRdUqp%2Fu1bTLqD%2BOwfXhYO3PfvW%2FjfZNOAVfA5SwReVtn4RlZzhc6ibRmd%2BEeAq6x1CLDat74DlzoyqCLJGLL%2FoqWJPdrHMOdaYLmrMogNRxSFfWs%2FS4XmqI3DIfPv%2Fo4jSHRYRd7yf85J%2BIU6LgT%2BcTeluBpwrQOy7d8PMgaNdy4rNcA4WYx8CjpsUdMlsyGFfjPPIsLgRXqmONI5%2BlIyX4TkNtefCbQoFA%2FCEsDMi4gYpLO4XLKItUf75KowvgXBZPNV6PZzbMTE1eMjkCz9ykuitCo9D4epVe5UqDAMrDyWXOusq5MNe9%2FGh%2B7%2BdXCK9Z1ttQ2F8VFZhL6uUIG1RiY5eB%2BFIaEY%2BrLFHx61aAM3krRivYJ31w2xme8H7%2FN8dZllZGqlP%2BEGTzaT7GCHRXwklh%2FTIap85aYGK%2FUbgsTJ1xu3rMcUcDBYpMnfu2n6uDV03M2nGRZX5L3oskt05AVvD8fTE5o20wbRaH81AvYjevnnVCbUHxpmklpy5TZ%2FglgTVZNAO%2B99%2Ba0BZvMQWfTG7odAP3gbdjKf%2FanmpaXFOXGAYPYfIqkj0InV344wE%2BZnYD2JOtp7TDeyvvCBjqkAZO1omRRO3MEy7sDup7T%2FH1J9BS1CDLrzCd8XbvFDYBO%2F0hF2Niy08pIYfosy9Hlrhnzv4XIrTODYedUY3ju88MumwVY3usIUYYMcprieH0oJe5s2sIJ2FEJ%2BU0W9jjDKP9jDQ7jZewd3YNhOoVj0sL44Hgo5FuWSV%2FsZuwt6upSPaVyCsQ3tnOl3WVLfjZjMg%2BucJvZgNm36FbuuHBeIlZnmEcE&X-Amz-Signature=c5e36797ee10738fd711b80916df6767d61a7bc2a9ec7b71fef0b2f2e911bb89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3ZD7C3L%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUG945NZyFSW5DtJ2uDZxBUxWQtOWQ7FT3tqwS0Cz1pAIhAK%2FSg2bWNDYY%2Fmj%2F5%2BZG1Yl0BzFC0FBU4PZdMhd7KMgsKv8DCHwQABoMNjM3NDIzMTgzODA1IgzoGy%2BHoJQc%2Bawsda8q3AO%2BTBZWKDrokCKgKchGB1gWzFTSXG%2BZFVIbDQ%2F%2B3eHCVX%2FHRdUqp%2Fu1bTLqD%2BOwfXhYO3PfvW%2FjfZNOAVfA5SwReVtn4RlZzhc6ibRmd%2BEeAq6x1CLDat74DlzoyqCLJGLL%2FoqWJPdrHMOdaYLmrMogNRxSFfWs%2FS4XmqI3DIfPv%2Fo4jSHRYRd7yf85J%2BIU6LgT%2BcTeluBpwrQOy7d8PMgaNdy4rNcA4WYx8CjpsUdMlsyGFfjPPIsLgRXqmONI5%2BlIyX4TkNtefCbQoFA%2FCEsDMi4gYpLO4XLKItUf75KowvgXBZPNV6PZzbMTE1eMjkCz9ykuitCo9D4epVe5UqDAMrDyWXOusq5MNe9%2FGh%2B7%2BdXCK9Z1ttQ2F8VFZhL6uUIG1RiY5eB%2BFIaEY%2BrLFHx61aAM3krRivYJ31w2xme8H7%2FN8dZllZGqlP%2BEGTzaT7GCHRXwklh%2FTIap85aYGK%2FUbgsTJ1xu3rMcUcDBYpMnfu2n6uDV03M2nGRZX5L3oskt05AVvD8fTE5o20wbRaH81AvYjevnnVCbUHxpmklpy5TZ%2FglgTVZNAO%2B99%2Ba0BZvMQWfTG7odAP3gbdjKf%2FanmpaXFOXGAYPYfIqkj0InV344wE%2BZnYD2JOtp7TDeyvvCBjqkAZO1omRRO3MEy7sDup7T%2FH1J9BS1CDLrzCd8XbvFDYBO%2F0hF2Niy08pIYfosy9Hlrhnzv4XIrTODYedUY3ju88MumwVY3usIUYYMcprieH0oJe5s2sIJ2FEJ%2BU0W9jjDKP9jDQ7jZewd3YNhOoVj0sL44Hgo5FuWSV%2FsZuwt6upSPaVyCsQ3tnOl3WVLfjZjMg%2BucJvZgNm36FbuuHBeIlZnmEcE&X-Amz-Signature=8b185f2c75ec7cb3b148294f6cae01955e7270835ba0ab3910b32b4a3ecad66e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3ZD7C3L%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUG945NZyFSW5DtJ2uDZxBUxWQtOWQ7FT3tqwS0Cz1pAIhAK%2FSg2bWNDYY%2Fmj%2F5%2BZG1Yl0BzFC0FBU4PZdMhd7KMgsKv8DCHwQABoMNjM3NDIzMTgzODA1IgzoGy%2BHoJQc%2Bawsda8q3AO%2BTBZWKDrokCKgKchGB1gWzFTSXG%2BZFVIbDQ%2F%2B3eHCVX%2FHRdUqp%2Fu1bTLqD%2BOwfXhYO3PfvW%2FjfZNOAVfA5SwReVtn4RlZzhc6ibRmd%2BEeAq6x1CLDat74DlzoyqCLJGLL%2FoqWJPdrHMOdaYLmrMogNRxSFfWs%2FS4XmqI3DIfPv%2Fo4jSHRYRd7yf85J%2BIU6LgT%2BcTeluBpwrQOy7d8PMgaNdy4rNcA4WYx8CjpsUdMlsyGFfjPPIsLgRXqmONI5%2BlIyX4TkNtefCbQoFA%2FCEsDMi4gYpLO4XLKItUf75KowvgXBZPNV6PZzbMTE1eMjkCz9ykuitCo9D4epVe5UqDAMrDyWXOusq5MNe9%2FGh%2B7%2BdXCK9Z1ttQ2F8VFZhL6uUIG1RiY5eB%2BFIaEY%2BrLFHx61aAM3krRivYJ31w2xme8H7%2FN8dZllZGqlP%2BEGTzaT7GCHRXwklh%2FTIap85aYGK%2FUbgsTJ1xu3rMcUcDBYpMnfu2n6uDV03M2nGRZX5L3oskt05AVvD8fTE5o20wbRaH81AvYjevnnVCbUHxpmklpy5TZ%2FglgTVZNAO%2B99%2Ba0BZvMQWfTG7odAP3gbdjKf%2FanmpaXFOXGAYPYfIqkj0InV344wE%2BZnYD2JOtp7TDeyvvCBjqkAZO1omRRO3MEy7sDup7T%2FH1J9BS1CDLrzCd8XbvFDYBO%2F0hF2Niy08pIYfosy9Hlrhnzv4XIrTODYedUY3ju88MumwVY3usIUYYMcprieH0oJe5s2sIJ2FEJ%2BU0W9jjDKP9jDQ7jZewd3YNhOoVj0sL44Hgo5FuWSV%2FsZuwt6upSPaVyCsQ3tnOl3WVLfjZjMg%2BucJvZgNm36FbuuHBeIlZnmEcE&X-Amz-Signature=767d151b8963a58ec5a13348f078e313ead2516bdc9b3e595be2bdd00d80b68a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3ZD7C3L%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUG945NZyFSW5DtJ2uDZxBUxWQtOWQ7FT3tqwS0Cz1pAIhAK%2FSg2bWNDYY%2Fmj%2F5%2BZG1Yl0BzFC0FBU4PZdMhd7KMgsKv8DCHwQABoMNjM3NDIzMTgzODA1IgzoGy%2BHoJQc%2Bawsda8q3AO%2BTBZWKDrokCKgKchGB1gWzFTSXG%2BZFVIbDQ%2F%2B3eHCVX%2FHRdUqp%2Fu1bTLqD%2BOwfXhYO3PfvW%2FjfZNOAVfA5SwReVtn4RlZzhc6ibRmd%2BEeAq6x1CLDat74DlzoyqCLJGLL%2FoqWJPdrHMOdaYLmrMogNRxSFfWs%2FS4XmqI3DIfPv%2Fo4jSHRYRd7yf85J%2BIU6LgT%2BcTeluBpwrQOy7d8PMgaNdy4rNcA4WYx8CjpsUdMlsyGFfjPPIsLgRXqmONI5%2BlIyX4TkNtefCbQoFA%2FCEsDMi4gYpLO4XLKItUf75KowvgXBZPNV6PZzbMTE1eMjkCz9ykuitCo9D4epVe5UqDAMrDyWXOusq5MNe9%2FGh%2B7%2BdXCK9Z1ttQ2F8VFZhL6uUIG1RiY5eB%2BFIaEY%2BrLFHx61aAM3krRivYJ31w2xme8H7%2FN8dZllZGqlP%2BEGTzaT7GCHRXwklh%2FTIap85aYGK%2FUbgsTJ1xu3rMcUcDBYpMnfu2n6uDV03M2nGRZX5L3oskt05AVvD8fTE5o20wbRaH81AvYjevnnVCbUHxpmklpy5TZ%2FglgTVZNAO%2B99%2Ba0BZvMQWfTG7odAP3gbdjKf%2FanmpaXFOXGAYPYfIqkj0InV344wE%2BZnYD2JOtp7TDeyvvCBjqkAZO1omRRO3MEy7sDup7T%2FH1J9BS1CDLrzCd8XbvFDYBO%2F0hF2Niy08pIYfosy9Hlrhnzv4XIrTODYedUY3ju88MumwVY3usIUYYMcprieH0oJe5s2sIJ2FEJ%2BU0W9jjDKP9jDQ7jZewd3YNhOoVj0sL44Hgo5FuWSV%2FsZuwt6upSPaVyCsQ3tnOl3WVLfjZjMg%2BucJvZgNm36FbuuHBeIlZnmEcE&X-Amz-Signature=717725a091c42aac1add6dc9a864dea15f5aa93a00b223bee41f75e34f305bc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3ZD7C3L%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUG945NZyFSW5DtJ2uDZxBUxWQtOWQ7FT3tqwS0Cz1pAIhAK%2FSg2bWNDYY%2Fmj%2F5%2BZG1Yl0BzFC0FBU4PZdMhd7KMgsKv8DCHwQABoMNjM3NDIzMTgzODA1IgzoGy%2BHoJQc%2Bawsda8q3AO%2BTBZWKDrokCKgKchGB1gWzFTSXG%2BZFVIbDQ%2F%2B3eHCVX%2FHRdUqp%2Fu1bTLqD%2BOwfXhYO3PfvW%2FjfZNOAVfA5SwReVtn4RlZzhc6ibRmd%2BEeAq6x1CLDat74DlzoyqCLJGLL%2FoqWJPdrHMOdaYLmrMogNRxSFfWs%2FS4XmqI3DIfPv%2Fo4jSHRYRd7yf85J%2BIU6LgT%2BcTeluBpwrQOy7d8PMgaNdy4rNcA4WYx8CjpsUdMlsyGFfjPPIsLgRXqmONI5%2BlIyX4TkNtefCbQoFA%2FCEsDMi4gYpLO4XLKItUf75KowvgXBZPNV6PZzbMTE1eMjkCz9ykuitCo9D4epVe5UqDAMrDyWXOusq5MNe9%2FGh%2B7%2BdXCK9Z1ttQ2F8VFZhL6uUIG1RiY5eB%2BFIaEY%2BrLFHx61aAM3krRivYJ31w2xme8H7%2FN8dZllZGqlP%2BEGTzaT7GCHRXwklh%2FTIap85aYGK%2FUbgsTJ1xu3rMcUcDBYpMnfu2n6uDV03M2nGRZX5L3oskt05AVvD8fTE5o20wbRaH81AvYjevnnVCbUHxpmklpy5TZ%2FglgTVZNAO%2B99%2Ba0BZvMQWfTG7odAP3gbdjKf%2FanmpaXFOXGAYPYfIqkj0InV344wE%2BZnYD2JOtp7TDeyvvCBjqkAZO1omRRO3MEy7sDup7T%2FH1J9BS1CDLrzCd8XbvFDYBO%2F0hF2Niy08pIYfosy9Hlrhnzv4XIrTODYedUY3ju88MumwVY3usIUYYMcprieH0oJe5s2sIJ2FEJ%2BU0W9jjDKP9jDQ7jZewd3YNhOoVj0sL44Hgo5FuWSV%2FsZuwt6upSPaVyCsQ3tnOl3WVLfjZjMg%2BucJvZgNm36FbuuHBeIlZnmEcE&X-Amz-Signature=de01dafb6e8e41bee255e6aa18d616532445148ee3bd2d851fa41b695e795e50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3ZD7C3L%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUG945NZyFSW5DtJ2uDZxBUxWQtOWQ7FT3tqwS0Cz1pAIhAK%2FSg2bWNDYY%2Fmj%2F5%2BZG1Yl0BzFC0FBU4PZdMhd7KMgsKv8DCHwQABoMNjM3NDIzMTgzODA1IgzoGy%2BHoJQc%2Bawsda8q3AO%2BTBZWKDrokCKgKchGB1gWzFTSXG%2BZFVIbDQ%2F%2B3eHCVX%2FHRdUqp%2Fu1bTLqD%2BOwfXhYO3PfvW%2FjfZNOAVfA5SwReVtn4RlZzhc6ibRmd%2BEeAq6x1CLDat74DlzoyqCLJGLL%2FoqWJPdrHMOdaYLmrMogNRxSFfWs%2FS4XmqI3DIfPv%2Fo4jSHRYRd7yf85J%2BIU6LgT%2BcTeluBpwrQOy7d8PMgaNdy4rNcA4WYx8CjpsUdMlsyGFfjPPIsLgRXqmONI5%2BlIyX4TkNtefCbQoFA%2FCEsDMi4gYpLO4XLKItUf75KowvgXBZPNV6PZzbMTE1eMjkCz9ykuitCo9D4epVe5UqDAMrDyWXOusq5MNe9%2FGh%2B7%2BdXCK9Z1ttQ2F8VFZhL6uUIG1RiY5eB%2BFIaEY%2BrLFHx61aAM3krRivYJ31w2xme8H7%2FN8dZllZGqlP%2BEGTzaT7GCHRXwklh%2FTIap85aYGK%2FUbgsTJ1xu3rMcUcDBYpMnfu2n6uDV03M2nGRZX5L3oskt05AVvD8fTE5o20wbRaH81AvYjevnnVCbUHxpmklpy5TZ%2FglgTVZNAO%2B99%2Ba0BZvMQWfTG7odAP3gbdjKf%2FanmpaXFOXGAYPYfIqkj0InV344wE%2BZnYD2JOtp7TDeyvvCBjqkAZO1omRRO3MEy7sDup7T%2FH1J9BS1CDLrzCd8XbvFDYBO%2F0hF2Niy08pIYfosy9Hlrhnzv4XIrTODYedUY3ju88MumwVY3usIUYYMcprieH0oJe5s2sIJ2FEJ%2BU0W9jjDKP9jDQ7jZewd3YNhOoVj0sL44Hgo5FuWSV%2FsZuwt6upSPaVyCsQ3tnOl3WVLfjZjMg%2BucJvZgNm36FbuuHBeIlZnmEcE&X-Amz-Signature=38e686a7a6d924d5d58d052c014e4dd24ae8ac3a61c3077399e04836bc869d5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
