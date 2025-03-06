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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W6AONZP%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T090904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqM0NDgFeEC33FY1kx5U%2FXiBq2S4RWFKyw5FF5T3Dd8gIhAOOh7nxCFi60oJhLakcGmXyq6kOMBUq8nXvdBQ5cVqE5Kv8DCCkQABoMNjM3NDIzMTgzODA1IgwT0AG8OQVZwNEgNmwq3ANPkX5oEHdtVshR%2BLXRvO9lDOvXfP5pRvNE51TyQ%2FxT2H1N8Qx2GmSuxWNKKtwI5AsMxHlSc4NarHVupRR1PUiY7eRoRXtZPK6Fw7e3rHkRv3YHAyrVxIM%2FwUm8Pu8i4r15%2B7pEW%2BbhPBvWi46p6ixDB6QWBrEv4eYR8JqhcFjsP%2Fo2pas9vN%2BbRzvdbSGypcACTzilKkW9XKAaxbxjl8xf427TJje1ddEg9H7mdaWqQG%2B52FMo%2BQEL8soJtE53BxMgL%2F1QrfNEO%2BZ3JTuHZNyjBOkmoIPOU6hAaey3KctH1QUL3z%2BYov2ib2SusRLGBhFDWuSRsnyUpKTe%2FNgv064Ep%2Bwy2TRgN3CGcbHer3cf7mMJmFKUiQR9Xmtqt8qN2sknW7m9vWxyn6koG4BQYJX%2BAaRuF%2BazrbUG9PPUZE7KF96Qhdd4VIVQ0OsoH6gY39cDfmerzUcozOZ2yFQR4Og71ZrIRr%2FNOUbmUVCCioMR2KhuRWQeHCabHuUSUigmM%2F75XA7byiVqZ8yV%2B6faXMAZLsmRe5Je3M5a5WrVUBruixpJ5OiKXmgoXOfS%2FMdxv1vCiMdAYEtcJK9w7RFXgLlHq4tUeflKaGkl1if2qYql%2FqVIlNFC%2Fv6m4pmURzDOtKW%2BBjqkAfPCnWHhkecwjQwciLf0hXnWlZJpMNBm6C76SPswURJp3nPMcVwyWReTgRuHrJKq2Nr7BK54ClQpwNyaXf32XRqBmpsUzYduGAno9DkuQL3UPGt65MKo%2FxHZOJ8p9KfRHWbuYMH%2Bc%2B%2B9%2F%2Fv%2FbNDKcQg5uGQ50iKdM5oVczEBEyFYtxHcjpFPTSHGoSXBebxM9ukGsAuiBl%2FRMcktarj94E2KotjD&X-Amz-Signature=67d8e1d79b5bebc1ceb46a2ab7cece0c89d0119534f741c967b29e5af33c62e2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W6AONZP%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T090904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqM0NDgFeEC33FY1kx5U%2FXiBq2S4RWFKyw5FF5T3Dd8gIhAOOh7nxCFi60oJhLakcGmXyq6kOMBUq8nXvdBQ5cVqE5Kv8DCCkQABoMNjM3NDIzMTgzODA1IgwT0AG8OQVZwNEgNmwq3ANPkX5oEHdtVshR%2BLXRvO9lDOvXfP5pRvNE51TyQ%2FxT2H1N8Qx2GmSuxWNKKtwI5AsMxHlSc4NarHVupRR1PUiY7eRoRXtZPK6Fw7e3rHkRv3YHAyrVxIM%2FwUm8Pu8i4r15%2B7pEW%2BbhPBvWi46p6ixDB6QWBrEv4eYR8JqhcFjsP%2Fo2pas9vN%2BbRzvdbSGypcACTzilKkW9XKAaxbxjl8xf427TJje1ddEg9H7mdaWqQG%2B52FMo%2BQEL8soJtE53BxMgL%2F1QrfNEO%2BZ3JTuHZNyjBOkmoIPOU6hAaey3KctH1QUL3z%2BYov2ib2SusRLGBhFDWuSRsnyUpKTe%2FNgv064Ep%2Bwy2TRgN3CGcbHer3cf7mMJmFKUiQR9Xmtqt8qN2sknW7m9vWxyn6koG4BQYJX%2BAaRuF%2BazrbUG9PPUZE7KF96Qhdd4VIVQ0OsoH6gY39cDfmerzUcozOZ2yFQR4Og71ZrIRr%2FNOUbmUVCCioMR2KhuRWQeHCabHuUSUigmM%2F75XA7byiVqZ8yV%2B6faXMAZLsmRe5Je3M5a5WrVUBruixpJ5OiKXmgoXOfS%2FMdxv1vCiMdAYEtcJK9w7RFXgLlHq4tUeflKaGkl1if2qYql%2FqVIlNFC%2Fv6m4pmURzDOtKW%2BBjqkAfPCnWHhkecwjQwciLf0hXnWlZJpMNBm6C76SPswURJp3nPMcVwyWReTgRuHrJKq2Nr7BK54ClQpwNyaXf32XRqBmpsUzYduGAno9DkuQL3UPGt65MKo%2FxHZOJ8p9KfRHWbuYMH%2Bc%2B%2B9%2F%2Fv%2FbNDKcQg5uGQ50iKdM5oVczEBEyFYtxHcjpFPTSHGoSXBebxM9ukGsAuiBl%2FRMcktarj94E2KotjD&X-Amz-Signature=15bd8d9d0c3283b96adac39913f5aac55034b705f1b930896cb18f389f5370e7&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W6AONZP%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T090904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqM0NDgFeEC33FY1kx5U%2FXiBq2S4RWFKyw5FF5T3Dd8gIhAOOh7nxCFi60oJhLakcGmXyq6kOMBUq8nXvdBQ5cVqE5Kv8DCCkQABoMNjM3NDIzMTgzODA1IgwT0AG8OQVZwNEgNmwq3ANPkX5oEHdtVshR%2BLXRvO9lDOvXfP5pRvNE51TyQ%2FxT2H1N8Qx2GmSuxWNKKtwI5AsMxHlSc4NarHVupRR1PUiY7eRoRXtZPK6Fw7e3rHkRv3YHAyrVxIM%2FwUm8Pu8i4r15%2B7pEW%2BbhPBvWi46p6ixDB6QWBrEv4eYR8JqhcFjsP%2Fo2pas9vN%2BbRzvdbSGypcACTzilKkW9XKAaxbxjl8xf427TJje1ddEg9H7mdaWqQG%2B52FMo%2BQEL8soJtE53BxMgL%2F1QrfNEO%2BZ3JTuHZNyjBOkmoIPOU6hAaey3KctH1QUL3z%2BYov2ib2SusRLGBhFDWuSRsnyUpKTe%2FNgv064Ep%2Bwy2TRgN3CGcbHer3cf7mMJmFKUiQR9Xmtqt8qN2sknW7m9vWxyn6koG4BQYJX%2BAaRuF%2BazrbUG9PPUZE7KF96Qhdd4VIVQ0OsoH6gY39cDfmerzUcozOZ2yFQR4Og71ZrIRr%2FNOUbmUVCCioMR2KhuRWQeHCabHuUSUigmM%2F75XA7byiVqZ8yV%2B6faXMAZLsmRe5Je3M5a5WrVUBruixpJ5OiKXmgoXOfS%2FMdxv1vCiMdAYEtcJK9w7RFXgLlHq4tUeflKaGkl1if2qYql%2FqVIlNFC%2Fv6m4pmURzDOtKW%2BBjqkAfPCnWHhkecwjQwciLf0hXnWlZJpMNBm6C76SPswURJp3nPMcVwyWReTgRuHrJKq2Nr7BK54ClQpwNyaXf32XRqBmpsUzYduGAno9DkuQL3UPGt65MKo%2FxHZOJ8p9KfRHWbuYMH%2Bc%2B%2B9%2F%2Fv%2FbNDKcQg5uGQ50iKdM5oVczEBEyFYtxHcjpFPTSHGoSXBebxM9ukGsAuiBl%2FRMcktarj94E2KotjD&X-Amz-Signature=a81d7dc06da5229ddedac631598b2b046de55fb91cdca10ed01c52e2b83fb299&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W6AONZP%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T090904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqM0NDgFeEC33FY1kx5U%2FXiBq2S4RWFKyw5FF5T3Dd8gIhAOOh7nxCFi60oJhLakcGmXyq6kOMBUq8nXvdBQ5cVqE5Kv8DCCkQABoMNjM3NDIzMTgzODA1IgwT0AG8OQVZwNEgNmwq3ANPkX5oEHdtVshR%2BLXRvO9lDOvXfP5pRvNE51TyQ%2FxT2H1N8Qx2GmSuxWNKKtwI5AsMxHlSc4NarHVupRR1PUiY7eRoRXtZPK6Fw7e3rHkRv3YHAyrVxIM%2FwUm8Pu8i4r15%2B7pEW%2BbhPBvWi46p6ixDB6QWBrEv4eYR8JqhcFjsP%2Fo2pas9vN%2BbRzvdbSGypcACTzilKkW9XKAaxbxjl8xf427TJje1ddEg9H7mdaWqQG%2B52FMo%2BQEL8soJtE53BxMgL%2F1QrfNEO%2BZ3JTuHZNyjBOkmoIPOU6hAaey3KctH1QUL3z%2BYov2ib2SusRLGBhFDWuSRsnyUpKTe%2FNgv064Ep%2Bwy2TRgN3CGcbHer3cf7mMJmFKUiQR9Xmtqt8qN2sknW7m9vWxyn6koG4BQYJX%2BAaRuF%2BazrbUG9PPUZE7KF96Qhdd4VIVQ0OsoH6gY39cDfmerzUcozOZ2yFQR4Og71ZrIRr%2FNOUbmUVCCioMR2KhuRWQeHCabHuUSUigmM%2F75XA7byiVqZ8yV%2B6faXMAZLsmRe5Je3M5a5WrVUBruixpJ5OiKXmgoXOfS%2FMdxv1vCiMdAYEtcJK9w7RFXgLlHq4tUeflKaGkl1if2qYql%2FqVIlNFC%2Fv6m4pmURzDOtKW%2BBjqkAfPCnWHhkecwjQwciLf0hXnWlZJpMNBm6C76SPswURJp3nPMcVwyWReTgRuHrJKq2Nr7BK54ClQpwNyaXf32XRqBmpsUzYduGAno9DkuQL3UPGt65MKo%2FxHZOJ8p9KfRHWbuYMH%2Bc%2B%2B9%2F%2Fv%2FbNDKcQg5uGQ50iKdM5oVczEBEyFYtxHcjpFPTSHGoSXBebxM9ukGsAuiBl%2FRMcktarj94E2KotjD&X-Amz-Signature=bc3bfb66747f349162a2960447ac722214aa747871a3010f304e4aabbe0d2cb5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W6AONZP%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T090904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqM0NDgFeEC33FY1kx5U%2FXiBq2S4RWFKyw5FF5T3Dd8gIhAOOh7nxCFi60oJhLakcGmXyq6kOMBUq8nXvdBQ5cVqE5Kv8DCCkQABoMNjM3NDIzMTgzODA1IgwT0AG8OQVZwNEgNmwq3ANPkX5oEHdtVshR%2BLXRvO9lDOvXfP5pRvNE51TyQ%2FxT2H1N8Qx2GmSuxWNKKtwI5AsMxHlSc4NarHVupRR1PUiY7eRoRXtZPK6Fw7e3rHkRv3YHAyrVxIM%2FwUm8Pu8i4r15%2B7pEW%2BbhPBvWi46p6ixDB6QWBrEv4eYR8JqhcFjsP%2Fo2pas9vN%2BbRzvdbSGypcACTzilKkW9XKAaxbxjl8xf427TJje1ddEg9H7mdaWqQG%2B52FMo%2BQEL8soJtE53BxMgL%2F1QrfNEO%2BZ3JTuHZNyjBOkmoIPOU6hAaey3KctH1QUL3z%2BYov2ib2SusRLGBhFDWuSRsnyUpKTe%2FNgv064Ep%2Bwy2TRgN3CGcbHer3cf7mMJmFKUiQR9Xmtqt8qN2sknW7m9vWxyn6koG4BQYJX%2BAaRuF%2BazrbUG9PPUZE7KF96Qhdd4VIVQ0OsoH6gY39cDfmerzUcozOZ2yFQR4Og71ZrIRr%2FNOUbmUVCCioMR2KhuRWQeHCabHuUSUigmM%2F75XA7byiVqZ8yV%2B6faXMAZLsmRe5Je3M5a5WrVUBruixpJ5OiKXmgoXOfS%2FMdxv1vCiMdAYEtcJK9w7RFXgLlHq4tUeflKaGkl1if2qYql%2FqVIlNFC%2Fv6m4pmURzDOtKW%2BBjqkAfPCnWHhkecwjQwciLf0hXnWlZJpMNBm6C76SPswURJp3nPMcVwyWReTgRuHrJKq2Nr7BK54ClQpwNyaXf32XRqBmpsUzYduGAno9DkuQL3UPGt65MKo%2FxHZOJ8p9KfRHWbuYMH%2Bc%2B%2B9%2F%2Fv%2FbNDKcQg5uGQ50iKdM5oVczEBEyFYtxHcjpFPTSHGoSXBebxM9ukGsAuiBl%2FRMcktarj94E2KotjD&X-Amz-Signature=73965e60570605ef782de3b58929b4888fcabcd87849f130cba8273c29e669f3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W6AONZP%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T090904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqM0NDgFeEC33FY1kx5U%2FXiBq2S4RWFKyw5FF5T3Dd8gIhAOOh7nxCFi60oJhLakcGmXyq6kOMBUq8nXvdBQ5cVqE5Kv8DCCkQABoMNjM3NDIzMTgzODA1IgwT0AG8OQVZwNEgNmwq3ANPkX5oEHdtVshR%2BLXRvO9lDOvXfP5pRvNE51TyQ%2FxT2H1N8Qx2GmSuxWNKKtwI5AsMxHlSc4NarHVupRR1PUiY7eRoRXtZPK6Fw7e3rHkRv3YHAyrVxIM%2FwUm8Pu8i4r15%2B7pEW%2BbhPBvWi46p6ixDB6QWBrEv4eYR8JqhcFjsP%2Fo2pas9vN%2BbRzvdbSGypcACTzilKkW9XKAaxbxjl8xf427TJje1ddEg9H7mdaWqQG%2B52FMo%2BQEL8soJtE53BxMgL%2F1QrfNEO%2BZ3JTuHZNyjBOkmoIPOU6hAaey3KctH1QUL3z%2BYov2ib2SusRLGBhFDWuSRsnyUpKTe%2FNgv064Ep%2Bwy2TRgN3CGcbHer3cf7mMJmFKUiQR9Xmtqt8qN2sknW7m9vWxyn6koG4BQYJX%2BAaRuF%2BazrbUG9PPUZE7KF96Qhdd4VIVQ0OsoH6gY39cDfmerzUcozOZ2yFQR4Og71ZrIRr%2FNOUbmUVCCioMR2KhuRWQeHCabHuUSUigmM%2F75XA7byiVqZ8yV%2B6faXMAZLsmRe5Je3M5a5WrVUBruixpJ5OiKXmgoXOfS%2FMdxv1vCiMdAYEtcJK9w7RFXgLlHq4tUeflKaGkl1if2qYql%2FqVIlNFC%2Fv6m4pmURzDOtKW%2BBjqkAfPCnWHhkecwjQwciLf0hXnWlZJpMNBm6C76SPswURJp3nPMcVwyWReTgRuHrJKq2Nr7BK54ClQpwNyaXf32XRqBmpsUzYduGAno9DkuQL3UPGt65MKo%2FxHZOJ8p9KfRHWbuYMH%2Bc%2B%2B9%2F%2Fv%2FbNDKcQg5uGQ50iKdM5oVczEBEyFYtxHcjpFPTSHGoSXBebxM9ukGsAuiBl%2FRMcktarj94E2KotjD&X-Amz-Signature=a3d7b1f11deabf95edfd721554f823e448051e4edcabf55fc30f651414928c8d&X-Amz-SignedHeaders=host&x-id=GetObject)
