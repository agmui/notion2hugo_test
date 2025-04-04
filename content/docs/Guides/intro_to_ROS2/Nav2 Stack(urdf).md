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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GZGTA66%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T003902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB%2Fz1JVlHSS3lE8EImE4H1Y67ovqmhcLGeulZt2AN1WgIgWvE2xTaa%2BRTiKlWiOn%2BUhmdpoQecDwad%2BKp5bkt4ZPgqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJTrcTBfGddrLa%2FCSrcAwcwQ76NzC0uWPg3TkwJNSNKc1cAt5FrTVdZE9IjAEEUKVe6JNfqs%2F7IzrLjtMRJX2xXAd3oxzHyih4qMJR%2FkITm%2FoHXrggot%2FvMm21a3QWG16%2F%2FaphX6irIJ2vduDe5dRGyBZf%2Fm6%2B0o31wkMvDt%2F7gBO2eW033oQGTeKaFMrkDILOp%2FwVIc%2BEPd%2BJAFOwYAAD9hUNA89HMGPveofy1ywu23z%2Bgcjojdg0u92%2FCzYRfCZIjG1NZYJoiverjqDGir1fo5iCOArtGgXGu4UJbrxZtHFkqvz5Lf2CBWedHCD0yfIVcj90tmSEWyyPwjfvuWooLoPXmqNkStjfEEAUN%2FYHzFgzY6pSr2pvD15GsQnWWDya4cItnRniSEB%2FhzdjLE503V%2BlYPk20WPz%2BXHDczNkF%2Bx9QdNX%2BN3nhLiWt%2FUYCxc9uVg0A%2FlOJvmXgZBFVIw7KfW2NcfRynZzDvMxQpVwC44RXZqf%2BAMlexTsRli1nyLYIlVdlbKVAEcf8Ay1awOoD2XQdh34QGKYOg8iroWhne4dxjoAcucoKIwszDk3wa0guUO%2BPPZuU37qtT7WgXUyMs25%2BGbguNu%2FcpNytTUlXGP7XfYEXVP74vKKGzFq1uo4zQxGqDHjrPwMrMJe5vL8GOqUBKOwNTv1NKfbPfiPGNa20%2F7TCYR2arVjiFYGqoGdjV7iuwRZbMfz6kTq3SJ%2BYa1Uj2zmmFyLCghWWcCVzbR9LS0OIOCZSxveArwcvChQV29hB7gRCy7xmyjvc1%2FNC79Y3Qan8ABoqhWVxjCLRRJe0O2F%2BHJllKiUBJLZhLcjq%2FWBP8HEnTBNbr5uCGXg65ffrgTzfEDznagkUV9Bkp8Ozj2qPjRYM&X-Amz-Signature=c4caf5a90d641c016233e623ca46c46f72ab8cbf5d5137412a469c068c5201e5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GZGTA66%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T003902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB%2Fz1JVlHSS3lE8EImE4H1Y67ovqmhcLGeulZt2AN1WgIgWvE2xTaa%2BRTiKlWiOn%2BUhmdpoQecDwad%2BKp5bkt4ZPgqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJTrcTBfGddrLa%2FCSrcAwcwQ76NzC0uWPg3TkwJNSNKc1cAt5FrTVdZE9IjAEEUKVe6JNfqs%2F7IzrLjtMRJX2xXAd3oxzHyih4qMJR%2FkITm%2FoHXrggot%2FvMm21a3QWG16%2F%2FaphX6irIJ2vduDe5dRGyBZf%2Fm6%2B0o31wkMvDt%2F7gBO2eW033oQGTeKaFMrkDILOp%2FwVIc%2BEPd%2BJAFOwYAAD9hUNA89HMGPveofy1ywu23z%2Bgcjojdg0u92%2FCzYRfCZIjG1NZYJoiverjqDGir1fo5iCOArtGgXGu4UJbrxZtHFkqvz5Lf2CBWedHCD0yfIVcj90tmSEWyyPwjfvuWooLoPXmqNkStjfEEAUN%2FYHzFgzY6pSr2pvD15GsQnWWDya4cItnRniSEB%2FhzdjLE503V%2BlYPk20WPz%2BXHDczNkF%2Bx9QdNX%2BN3nhLiWt%2FUYCxc9uVg0A%2FlOJvmXgZBFVIw7KfW2NcfRynZzDvMxQpVwC44RXZqf%2BAMlexTsRli1nyLYIlVdlbKVAEcf8Ay1awOoD2XQdh34QGKYOg8iroWhne4dxjoAcucoKIwszDk3wa0guUO%2BPPZuU37qtT7WgXUyMs25%2BGbguNu%2FcpNytTUlXGP7XfYEXVP74vKKGzFq1uo4zQxGqDHjrPwMrMJe5vL8GOqUBKOwNTv1NKfbPfiPGNa20%2F7TCYR2arVjiFYGqoGdjV7iuwRZbMfz6kTq3SJ%2BYa1Uj2zmmFyLCghWWcCVzbR9LS0OIOCZSxveArwcvChQV29hB7gRCy7xmyjvc1%2FNC79Y3Qan8ABoqhWVxjCLRRJe0O2F%2BHJllKiUBJLZhLcjq%2FWBP8HEnTBNbr5uCGXg65ffrgTzfEDznagkUV9Bkp8Ozj2qPjRYM&X-Amz-Signature=f09ccbec663c98c0d5d766b31b2e5ff3ac9d96b69e4aa294de6652629a067084&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GZGTA66%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T003902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB%2Fz1JVlHSS3lE8EImE4H1Y67ovqmhcLGeulZt2AN1WgIgWvE2xTaa%2BRTiKlWiOn%2BUhmdpoQecDwad%2BKp5bkt4ZPgqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJTrcTBfGddrLa%2FCSrcAwcwQ76NzC0uWPg3TkwJNSNKc1cAt5FrTVdZE9IjAEEUKVe6JNfqs%2F7IzrLjtMRJX2xXAd3oxzHyih4qMJR%2FkITm%2FoHXrggot%2FvMm21a3QWG16%2F%2FaphX6irIJ2vduDe5dRGyBZf%2Fm6%2B0o31wkMvDt%2F7gBO2eW033oQGTeKaFMrkDILOp%2FwVIc%2BEPd%2BJAFOwYAAD9hUNA89HMGPveofy1ywu23z%2Bgcjojdg0u92%2FCzYRfCZIjG1NZYJoiverjqDGir1fo5iCOArtGgXGu4UJbrxZtHFkqvz5Lf2CBWedHCD0yfIVcj90tmSEWyyPwjfvuWooLoPXmqNkStjfEEAUN%2FYHzFgzY6pSr2pvD15GsQnWWDya4cItnRniSEB%2FhzdjLE503V%2BlYPk20WPz%2BXHDczNkF%2Bx9QdNX%2BN3nhLiWt%2FUYCxc9uVg0A%2FlOJvmXgZBFVIw7KfW2NcfRynZzDvMxQpVwC44RXZqf%2BAMlexTsRli1nyLYIlVdlbKVAEcf8Ay1awOoD2XQdh34QGKYOg8iroWhne4dxjoAcucoKIwszDk3wa0guUO%2BPPZuU37qtT7WgXUyMs25%2BGbguNu%2FcpNytTUlXGP7XfYEXVP74vKKGzFq1uo4zQxGqDHjrPwMrMJe5vL8GOqUBKOwNTv1NKfbPfiPGNa20%2F7TCYR2arVjiFYGqoGdjV7iuwRZbMfz6kTq3SJ%2BYa1Uj2zmmFyLCghWWcCVzbR9LS0OIOCZSxveArwcvChQV29hB7gRCy7xmyjvc1%2FNC79Y3Qan8ABoqhWVxjCLRRJe0O2F%2BHJllKiUBJLZhLcjq%2FWBP8HEnTBNbr5uCGXg65ffrgTzfEDznagkUV9Bkp8Ozj2qPjRYM&X-Amz-Signature=7a09305c45aec4edca292aac54d09b040d3000952a38cf0f175c56043e1caf65&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GZGTA66%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T003902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB%2Fz1JVlHSS3lE8EImE4H1Y67ovqmhcLGeulZt2AN1WgIgWvE2xTaa%2BRTiKlWiOn%2BUhmdpoQecDwad%2BKp5bkt4ZPgqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJTrcTBfGddrLa%2FCSrcAwcwQ76NzC0uWPg3TkwJNSNKc1cAt5FrTVdZE9IjAEEUKVe6JNfqs%2F7IzrLjtMRJX2xXAd3oxzHyih4qMJR%2FkITm%2FoHXrggot%2FvMm21a3QWG16%2F%2FaphX6irIJ2vduDe5dRGyBZf%2Fm6%2B0o31wkMvDt%2F7gBO2eW033oQGTeKaFMrkDILOp%2FwVIc%2BEPd%2BJAFOwYAAD9hUNA89HMGPveofy1ywu23z%2Bgcjojdg0u92%2FCzYRfCZIjG1NZYJoiverjqDGir1fo5iCOArtGgXGu4UJbrxZtHFkqvz5Lf2CBWedHCD0yfIVcj90tmSEWyyPwjfvuWooLoPXmqNkStjfEEAUN%2FYHzFgzY6pSr2pvD15GsQnWWDya4cItnRniSEB%2FhzdjLE503V%2BlYPk20WPz%2BXHDczNkF%2Bx9QdNX%2BN3nhLiWt%2FUYCxc9uVg0A%2FlOJvmXgZBFVIw7KfW2NcfRynZzDvMxQpVwC44RXZqf%2BAMlexTsRli1nyLYIlVdlbKVAEcf8Ay1awOoD2XQdh34QGKYOg8iroWhne4dxjoAcucoKIwszDk3wa0guUO%2BPPZuU37qtT7WgXUyMs25%2BGbguNu%2FcpNytTUlXGP7XfYEXVP74vKKGzFq1uo4zQxGqDHjrPwMrMJe5vL8GOqUBKOwNTv1NKfbPfiPGNa20%2F7TCYR2arVjiFYGqoGdjV7iuwRZbMfz6kTq3SJ%2BYa1Uj2zmmFyLCghWWcCVzbR9LS0OIOCZSxveArwcvChQV29hB7gRCy7xmyjvc1%2FNC79Y3Qan8ABoqhWVxjCLRRJe0O2F%2BHJllKiUBJLZhLcjq%2FWBP8HEnTBNbr5uCGXg65ffrgTzfEDznagkUV9Bkp8Ozj2qPjRYM&X-Amz-Signature=5d4aef577520cfd2c96d9679299fc64b2cf7bc24396effde7cd2ca8e859fbd86&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GZGTA66%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T003902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB%2Fz1JVlHSS3lE8EImE4H1Y67ovqmhcLGeulZt2AN1WgIgWvE2xTaa%2BRTiKlWiOn%2BUhmdpoQecDwad%2BKp5bkt4ZPgqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJTrcTBfGddrLa%2FCSrcAwcwQ76NzC0uWPg3TkwJNSNKc1cAt5FrTVdZE9IjAEEUKVe6JNfqs%2F7IzrLjtMRJX2xXAd3oxzHyih4qMJR%2FkITm%2FoHXrggot%2FvMm21a3QWG16%2F%2FaphX6irIJ2vduDe5dRGyBZf%2Fm6%2B0o31wkMvDt%2F7gBO2eW033oQGTeKaFMrkDILOp%2FwVIc%2BEPd%2BJAFOwYAAD9hUNA89HMGPveofy1ywu23z%2Bgcjojdg0u92%2FCzYRfCZIjG1NZYJoiverjqDGir1fo5iCOArtGgXGu4UJbrxZtHFkqvz5Lf2CBWedHCD0yfIVcj90tmSEWyyPwjfvuWooLoPXmqNkStjfEEAUN%2FYHzFgzY6pSr2pvD15GsQnWWDya4cItnRniSEB%2FhzdjLE503V%2BlYPk20WPz%2BXHDczNkF%2Bx9QdNX%2BN3nhLiWt%2FUYCxc9uVg0A%2FlOJvmXgZBFVIw7KfW2NcfRynZzDvMxQpVwC44RXZqf%2BAMlexTsRli1nyLYIlVdlbKVAEcf8Ay1awOoD2XQdh34QGKYOg8iroWhne4dxjoAcucoKIwszDk3wa0guUO%2BPPZuU37qtT7WgXUyMs25%2BGbguNu%2FcpNytTUlXGP7XfYEXVP74vKKGzFq1uo4zQxGqDHjrPwMrMJe5vL8GOqUBKOwNTv1NKfbPfiPGNa20%2F7TCYR2arVjiFYGqoGdjV7iuwRZbMfz6kTq3SJ%2BYa1Uj2zmmFyLCghWWcCVzbR9LS0OIOCZSxveArwcvChQV29hB7gRCy7xmyjvc1%2FNC79Y3Qan8ABoqhWVxjCLRRJe0O2F%2BHJllKiUBJLZhLcjq%2FWBP8HEnTBNbr5uCGXg65ffrgTzfEDznagkUV9Bkp8Ozj2qPjRYM&X-Amz-Signature=10bb44feae87adc6ce78e4cafcd07e4151524da30290291a66c2568198291a01&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GZGTA66%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T003902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB%2Fz1JVlHSS3lE8EImE4H1Y67ovqmhcLGeulZt2AN1WgIgWvE2xTaa%2BRTiKlWiOn%2BUhmdpoQecDwad%2BKp5bkt4ZPgqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJTrcTBfGddrLa%2FCSrcAwcwQ76NzC0uWPg3TkwJNSNKc1cAt5FrTVdZE9IjAEEUKVe6JNfqs%2F7IzrLjtMRJX2xXAd3oxzHyih4qMJR%2FkITm%2FoHXrggot%2FvMm21a3QWG16%2F%2FaphX6irIJ2vduDe5dRGyBZf%2Fm6%2B0o31wkMvDt%2F7gBO2eW033oQGTeKaFMrkDILOp%2FwVIc%2BEPd%2BJAFOwYAAD9hUNA89HMGPveofy1ywu23z%2Bgcjojdg0u92%2FCzYRfCZIjG1NZYJoiverjqDGir1fo5iCOArtGgXGu4UJbrxZtHFkqvz5Lf2CBWedHCD0yfIVcj90tmSEWyyPwjfvuWooLoPXmqNkStjfEEAUN%2FYHzFgzY6pSr2pvD15GsQnWWDya4cItnRniSEB%2FhzdjLE503V%2BlYPk20WPz%2BXHDczNkF%2Bx9QdNX%2BN3nhLiWt%2FUYCxc9uVg0A%2FlOJvmXgZBFVIw7KfW2NcfRynZzDvMxQpVwC44RXZqf%2BAMlexTsRli1nyLYIlVdlbKVAEcf8Ay1awOoD2XQdh34QGKYOg8iroWhne4dxjoAcucoKIwszDk3wa0guUO%2BPPZuU37qtT7WgXUyMs25%2BGbguNu%2FcpNytTUlXGP7XfYEXVP74vKKGzFq1uo4zQxGqDHjrPwMrMJe5vL8GOqUBKOwNTv1NKfbPfiPGNa20%2F7TCYR2arVjiFYGqoGdjV7iuwRZbMfz6kTq3SJ%2BYa1Uj2zmmFyLCghWWcCVzbR9LS0OIOCZSxveArwcvChQV29hB7gRCy7xmyjvc1%2FNC79Y3Qan8ABoqhWVxjCLRRJe0O2F%2BHJllKiUBJLZhLcjq%2FWBP8HEnTBNbr5uCGXg65ffrgTzfEDznagkUV9Bkp8Ozj2qPjRYM&X-Amz-Signature=f2a471e7c83fd0fb398ddfe76501fdd8cc6cbc420861582cb807da65bcd853e3&X-Amz-SignedHeaders=host&x-id=GetObject)
