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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y4JSW2J%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnr2IILIhg7ibJ3YigGNKmpZi1atl2jpdCCTEaLrU3ZQIhAKOdAkbMDWdXArjuia62BdJhMOxG1xm58roKEbPSM8LzKv8DCCwQABoMNjM3NDIzMTgzODA1IgynJQxFS3pCg3PL8%2Fgq3APXRjPc2QjhplJgXc5TYW2RUpDGYG1%2FoYJ1ktD%2B5%2FglHpihZ2Ezf2UH2w1Ukkgk0JIRzgjluRvU5YZORTUHkaPlS5zCwhLPau%2B4YNWOBcDlhCkpcsB0e9gSu%2F%2FOIN6Pai0UaUtAcjlLef456i6t9yFJgN%2BsX4nS7%2BJo%2BLMR8Utp8Wipr08rrWPXzMw%2FlqieKxqwx2GTIUyjBJdh7YvPSE2IZXOZWLFpR8ZaM7XsV7hFZKFrEbOiU0Am6q8PF8FVX0p4Tb3s2u8QadKz55%2BJsNRDZkB7Gu1NMz9SIH5fgq97RsZy1%2FE2QWVF23RROS1hpiK4aI20q6qxF5cYaCmIH82HoKMaVnjDijZ7ShuvfNqub6uy6Y1mCkxM3OxQamUTBAF9weciuGOTdkhtSmrp8LrxcLdr2OiFoGKaf8DFFup7X3X8kt0VUhZ%2BzkDQBOCVTeu6jFRj9w0WMxujb8pC6bKVVE0R2blC07xdENf6NJd%2B2IRd%2F%2FCd4Uv22hspVDkcCNzGSQB%2F0HR2%2Fy5oCF6Vg6%2FM9skPwsi%2BnpQqO04%2FWK0KgZik%2Bnc3krBxcLF%2FXJaYCFutLtNYW%2BuxXLzRDgJl2CWcz4d3UJH%2FGjHq3TL6rZRTofO0%2FFR3Phj2muK4WzCI8fi%2FBjqkAfpBZVVAl4BHm851lZZOW%2FcLwlu9ktGkDleqAQmyLaELEFHZuo1FX%2BtSLZkwrXJDc7FXCrfFZ9yn79S6dbXUQW%2FRXOkkNGoRJsyYHyOoPg4pwaDJ5mI0S4yMcNSKdcPATks1IMUcqIES7%2B09ni5RGjYEioMBtiAgizqq48dB%2F37Lh6rO9uLxLtlh6my84HU%2FHSBcn%2FWOWtL0SGS5RPToa%2FQ0Mppk&X-Amz-Signature=90be28b722ac109fc688f908f367941f579c6478a32545136103eb9fd535ba0e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y4JSW2J%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnr2IILIhg7ibJ3YigGNKmpZi1atl2jpdCCTEaLrU3ZQIhAKOdAkbMDWdXArjuia62BdJhMOxG1xm58roKEbPSM8LzKv8DCCwQABoMNjM3NDIzMTgzODA1IgynJQxFS3pCg3PL8%2Fgq3APXRjPc2QjhplJgXc5TYW2RUpDGYG1%2FoYJ1ktD%2B5%2FglHpihZ2Ezf2UH2w1Ukkgk0JIRzgjluRvU5YZORTUHkaPlS5zCwhLPau%2B4YNWOBcDlhCkpcsB0e9gSu%2F%2FOIN6Pai0UaUtAcjlLef456i6t9yFJgN%2BsX4nS7%2BJo%2BLMR8Utp8Wipr08rrWPXzMw%2FlqieKxqwx2GTIUyjBJdh7YvPSE2IZXOZWLFpR8ZaM7XsV7hFZKFrEbOiU0Am6q8PF8FVX0p4Tb3s2u8QadKz55%2BJsNRDZkB7Gu1NMz9SIH5fgq97RsZy1%2FE2QWVF23RROS1hpiK4aI20q6qxF5cYaCmIH82HoKMaVnjDijZ7ShuvfNqub6uy6Y1mCkxM3OxQamUTBAF9weciuGOTdkhtSmrp8LrxcLdr2OiFoGKaf8DFFup7X3X8kt0VUhZ%2BzkDQBOCVTeu6jFRj9w0WMxujb8pC6bKVVE0R2blC07xdENf6NJd%2B2IRd%2F%2FCd4Uv22hspVDkcCNzGSQB%2F0HR2%2Fy5oCF6Vg6%2FM9skPwsi%2BnpQqO04%2FWK0KgZik%2Bnc3krBxcLF%2FXJaYCFutLtNYW%2BuxXLzRDgJl2CWcz4d3UJH%2FGjHq3TL6rZRTofO0%2FFR3Phj2muK4WzCI8fi%2FBjqkAfpBZVVAl4BHm851lZZOW%2FcLwlu9ktGkDleqAQmyLaELEFHZuo1FX%2BtSLZkwrXJDc7FXCrfFZ9yn79S6dbXUQW%2FRXOkkNGoRJsyYHyOoPg4pwaDJ5mI0S4yMcNSKdcPATks1IMUcqIES7%2B09ni5RGjYEioMBtiAgizqq48dB%2F37Lh6rO9uLxLtlh6my84HU%2FHSBcn%2FWOWtL0SGS5RPToa%2FQ0Mppk&X-Amz-Signature=575bbd8994dfae0314a4a00ab367ef5abbce3f7030fbde547f6d34bdcd61728c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y4JSW2J%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnr2IILIhg7ibJ3YigGNKmpZi1atl2jpdCCTEaLrU3ZQIhAKOdAkbMDWdXArjuia62BdJhMOxG1xm58roKEbPSM8LzKv8DCCwQABoMNjM3NDIzMTgzODA1IgynJQxFS3pCg3PL8%2Fgq3APXRjPc2QjhplJgXc5TYW2RUpDGYG1%2FoYJ1ktD%2B5%2FglHpihZ2Ezf2UH2w1Ukkgk0JIRzgjluRvU5YZORTUHkaPlS5zCwhLPau%2B4YNWOBcDlhCkpcsB0e9gSu%2F%2FOIN6Pai0UaUtAcjlLef456i6t9yFJgN%2BsX4nS7%2BJo%2BLMR8Utp8Wipr08rrWPXzMw%2FlqieKxqwx2GTIUyjBJdh7YvPSE2IZXOZWLFpR8ZaM7XsV7hFZKFrEbOiU0Am6q8PF8FVX0p4Tb3s2u8QadKz55%2BJsNRDZkB7Gu1NMz9SIH5fgq97RsZy1%2FE2QWVF23RROS1hpiK4aI20q6qxF5cYaCmIH82HoKMaVnjDijZ7ShuvfNqub6uy6Y1mCkxM3OxQamUTBAF9weciuGOTdkhtSmrp8LrxcLdr2OiFoGKaf8DFFup7X3X8kt0VUhZ%2BzkDQBOCVTeu6jFRj9w0WMxujb8pC6bKVVE0R2blC07xdENf6NJd%2B2IRd%2F%2FCd4Uv22hspVDkcCNzGSQB%2F0HR2%2Fy5oCF6Vg6%2FM9skPwsi%2BnpQqO04%2FWK0KgZik%2Bnc3krBxcLF%2FXJaYCFutLtNYW%2BuxXLzRDgJl2CWcz4d3UJH%2FGjHq3TL6rZRTofO0%2FFR3Phj2muK4WzCI8fi%2FBjqkAfpBZVVAl4BHm851lZZOW%2FcLwlu9ktGkDleqAQmyLaELEFHZuo1FX%2BtSLZkwrXJDc7FXCrfFZ9yn79S6dbXUQW%2FRXOkkNGoRJsyYHyOoPg4pwaDJ5mI0S4yMcNSKdcPATks1IMUcqIES7%2B09ni5RGjYEioMBtiAgizqq48dB%2F37Lh6rO9uLxLtlh6my84HU%2FHSBcn%2FWOWtL0SGS5RPToa%2FQ0Mppk&X-Amz-Signature=b06f237bac2dbf3c73c63b9e1bfeebabb2e6fd187ee4df1a0200d69ad6e650a9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y4JSW2J%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnr2IILIhg7ibJ3YigGNKmpZi1atl2jpdCCTEaLrU3ZQIhAKOdAkbMDWdXArjuia62BdJhMOxG1xm58roKEbPSM8LzKv8DCCwQABoMNjM3NDIzMTgzODA1IgynJQxFS3pCg3PL8%2Fgq3APXRjPc2QjhplJgXc5TYW2RUpDGYG1%2FoYJ1ktD%2B5%2FglHpihZ2Ezf2UH2w1Ukkgk0JIRzgjluRvU5YZORTUHkaPlS5zCwhLPau%2B4YNWOBcDlhCkpcsB0e9gSu%2F%2FOIN6Pai0UaUtAcjlLef456i6t9yFJgN%2BsX4nS7%2BJo%2BLMR8Utp8Wipr08rrWPXzMw%2FlqieKxqwx2GTIUyjBJdh7YvPSE2IZXOZWLFpR8ZaM7XsV7hFZKFrEbOiU0Am6q8PF8FVX0p4Tb3s2u8QadKz55%2BJsNRDZkB7Gu1NMz9SIH5fgq97RsZy1%2FE2QWVF23RROS1hpiK4aI20q6qxF5cYaCmIH82HoKMaVnjDijZ7ShuvfNqub6uy6Y1mCkxM3OxQamUTBAF9weciuGOTdkhtSmrp8LrxcLdr2OiFoGKaf8DFFup7X3X8kt0VUhZ%2BzkDQBOCVTeu6jFRj9w0WMxujb8pC6bKVVE0R2blC07xdENf6NJd%2B2IRd%2F%2FCd4Uv22hspVDkcCNzGSQB%2F0HR2%2Fy5oCF6Vg6%2FM9skPwsi%2BnpQqO04%2FWK0KgZik%2Bnc3krBxcLF%2FXJaYCFutLtNYW%2BuxXLzRDgJl2CWcz4d3UJH%2FGjHq3TL6rZRTofO0%2FFR3Phj2muK4WzCI8fi%2FBjqkAfpBZVVAl4BHm851lZZOW%2FcLwlu9ktGkDleqAQmyLaELEFHZuo1FX%2BtSLZkwrXJDc7FXCrfFZ9yn79S6dbXUQW%2FRXOkkNGoRJsyYHyOoPg4pwaDJ5mI0S4yMcNSKdcPATks1IMUcqIES7%2B09ni5RGjYEioMBtiAgizqq48dB%2F37Lh6rO9uLxLtlh6my84HU%2FHSBcn%2FWOWtL0SGS5RPToa%2FQ0Mppk&X-Amz-Signature=06e5d0ec433d62af3ec0045aeb7a9c2c92b921855c954fa996a86888758b2562&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y4JSW2J%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnr2IILIhg7ibJ3YigGNKmpZi1atl2jpdCCTEaLrU3ZQIhAKOdAkbMDWdXArjuia62BdJhMOxG1xm58roKEbPSM8LzKv8DCCwQABoMNjM3NDIzMTgzODA1IgynJQxFS3pCg3PL8%2Fgq3APXRjPc2QjhplJgXc5TYW2RUpDGYG1%2FoYJ1ktD%2B5%2FglHpihZ2Ezf2UH2w1Ukkgk0JIRzgjluRvU5YZORTUHkaPlS5zCwhLPau%2B4YNWOBcDlhCkpcsB0e9gSu%2F%2FOIN6Pai0UaUtAcjlLef456i6t9yFJgN%2BsX4nS7%2BJo%2BLMR8Utp8Wipr08rrWPXzMw%2FlqieKxqwx2GTIUyjBJdh7YvPSE2IZXOZWLFpR8ZaM7XsV7hFZKFrEbOiU0Am6q8PF8FVX0p4Tb3s2u8QadKz55%2BJsNRDZkB7Gu1NMz9SIH5fgq97RsZy1%2FE2QWVF23RROS1hpiK4aI20q6qxF5cYaCmIH82HoKMaVnjDijZ7ShuvfNqub6uy6Y1mCkxM3OxQamUTBAF9weciuGOTdkhtSmrp8LrxcLdr2OiFoGKaf8DFFup7X3X8kt0VUhZ%2BzkDQBOCVTeu6jFRj9w0WMxujb8pC6bKVVE0R2blC07xdENf6NJd%2B2IRd%2F%2FCd4Uv22hspVDkcCNzGSQB%2F0HR2%2Fy5oCF6Vg6%2FM9skPwsi%2BnpQqO04%2FWK0KgZik%2Bnc3krBxcLF%2FXJaYCFutLtNYW%2BuxXLzRDgJl2CWcz4d3UJH%2FGjHq3TL6rZRTofO0%2FFR3Phj2muK4WzCI8fi%2FBjqkAfpBZVVAl4BHm851lZZOW%2FcLwlu9ktGkDleqAQmyLaELEFHZuo1FX%2BtSLZkwrXJDc7FXCrfFZ9yn79S6dbXUQW%2FRXOkkNGoRJsyYHyOoPg4pwaDJ5mI0S4yMcNSKdcPATks1IMUcqIES7%2B09ni5RGjYEioMBtiAgizqq48dB%2F37Lh6rO9uLxLtlh6my84HU%2FHSBcn%2FWOWtL0SGS5RPToa%2FQ0Mppk&X-Amz-Signature=9e3fd4b8974d1f90c47e24edee1bb72e519551c34a5b5d6c47d07701e1e1165a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y4JSW2J%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnr2IILIhg7ibJ3YigGNKmpZi1atl2jpdCCTEaLrU3ZQIhAKOdAkbMDWdXArjuia62BdJhMOxG1xm58roKEbPSM8LzKv8DCCwQABoMNjM3NDIzMTgzODA1IgynJQxFS3pCg3PL8%2Fgq3APXRjPc2QjhplJgXc5TYW2RUpDGYG1%2FoYJ1ktD%2B5%2FglHpihZ2Ezf2UH2w1Ukkgk0JIRzgjluRvU5YZORTUHkaPlS5zCwhLPau%2B4YNWOBcDlhCkpcsB0e9gSu%2F%2FOIN6Pai0UaUtAcjlLef456i6t9yFJgN%2BsX4nS7%2BJo%2BLMR8Utp8Wipr08rrWPXzMw%2FlqieKxqwx2GTIUyjBJdh7YvPSE2IZXOZWLFpR8ZaM7XsV7hFZKFrEbOiU0Am6q8PF8FVX0p4Tb3s2u8QadKz55%2BJsNRDZkB7Gu1NMz9SIH5fgq97RsZy1%2FE2QWVF23RROS1hpiK4aI20q6qxF5cYaCmIH82HoKMaVnjDijZ7ShuvfNqub6uy6Y1mCkxM3OxQamUTBAF9weciuGOTdkhtSmrp8LrxcLdr2OiFoGKaf8DFFup7X3X8kt0VUhZ%2BzkDQBOCVTeu6jFRj9w0WMxujb8pC6bKVVE0R2blC07xdENf6NJd%2B2IRd%2F%2FCd4Uv22hspVDkcCNzGSQB%2F0HR2%2Fy5oCF6Vg6%2FM9skPwsi%2BnpQqO04%2FWK0KgZik%2Bnc3krBxcLF%2FXJaYCFutLtNYW%2BuxXLzRDgJl2CWcz4d3UJH%2FGjHq3TL6rZRTofO0%2FFR3Phj2muK4WzCI8fi%2FBjqkAfpBZVVAl4BHm851lZZOW%2FcLwlu9ktGkDleqAQmyLaELEFHZuo1FX%2BtSLZkwrXJDc7FXCrfFZ9yn79S6dbXUQW%2FRXOkkNGoRJsyYHyOoPg4pwaDJ5mI0S4yMcNSKdcPATks1IMUcqIES7%2B09ni5RGjYEioMBtiAgizqq48dB%2F37Lh6rO9uLxLtlh6my84HU%2FHSBcn%2FWOWtL0SGS5RPToa%2FQ0Mppk&X-Amz-Signature=311094e328aa72f8fec78161e524a11fbcffe68a25c7abfe1074282ee0a55161&X-Amz-SignedHeaders=host&x-id=GetObject)
