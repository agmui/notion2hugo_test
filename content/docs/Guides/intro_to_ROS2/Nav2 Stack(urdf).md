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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KREXHDI%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T081159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3em%2FuEUFndycasTSgqPHGM1X9LN%2FpH5AYq0lppsdeBgIhAJieVkZ4gRYp%2BXnUyA3D390NojCqtvytm59sTSDXcICJKv8DCCkQABoMNjM3NDIzMTgzODA1IgyJS27J1OodquAizmQq3APA9cOlsyJ9cInwsL82roM2ELp48%2Ft4nPlFc0tfop7Wee%2FDN18lumTqJ6AGe4KeCqlyzEJTGW6VYkDGZ%2Bow2Qazrnhrh1Gzf%2BAmlXMADv%2Fquw%2Bzwh0w5h9hkG1g3A8RdIudD3aYgqv0qSGqQA%2Ft9oYHJ0PoH5Q%2FwV%2BnUfjApbNI%2BCVvNStG%2FRTZzXafCss5Hx0M3tbld71xdJph8JGOYXrNlpUXdJWk3mUM1unl3QL2wWCdMW2tb9TeRgS%2FgVS3v3bB1BtbtGijQ9IeoJromdSImAy9FH5bn01vrlfC4IFIW4%2BLHhT0fK%2ByWh5wORW1zHn%2BNsBMfXSQI%2FmXASx211QXH%2FGx9gaESjc3CvOwPME%2FZI4n2Y84IXwmTBEgFTb2G6FwexlqOr%2BB1kzpRphp5gr%2FtdOVBM9X9jlhSl4ag9vpy2LjX%2FP%2FbwNfH9By9gCWKwvXwgkb8hBhUatZzkGI2Uj9vEjm%2BFUfAlAvoxzrClB%2FFw9LsZTRSsOYeSsv8CUYsz%2FGQGlI2O2XwHK7fwU8eb8z2T6PdVD5tWqmcicBup7aEyy%2F8r8Tln4D0xEPpOhOzcoCjkFndaj14p9VKik4EeG4dKN0x%2BNUJjq3fjNOv5QXfWiSrSJcx1Hx1PY9wjD3zfC9BjqkARQhxYrJOAh0yBtNN5ffyD3dsMudy4ifG8yg67VPa3ohWRV0Jxd3m%2BMiHC60R8g5d9%2BWm3jc0GRp2W%2Bd%2B7%2FXlIudgL8%2FSUDwlFCDGFdISqX3dr3uOU%2FhoxplUQciifeCW%2FmNwvpQjeMbX0PZSfgcNWSTuRfPso6DM9wvLKos8SprW4LGW0qai%2BSS50uFK7JlX5sqUg2hcFv2cwgJvF6qosOPoLok&X-Amz-Signature=ccb6bdf93638b86b68b3a682352034b4a074cb8cc00800187d3e37c7f4836e6e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KREXHDI%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T081159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3em%2FuEUFndycasTSgqPHGM1X9LN%2FpH5AYq0lppsdeBgIhAJieVkZ4gRYp%2BXnUyA3D390NojCqtvytm59sTSDXcICJKv8DCCkQABoMNjM3NDIzMTgzODA1IgyJS27J1OodquAizmQq3APA9cOlsyJ9cInwsL82roM2ELp48%2Ft4nPlFc0tfop7Wee%2FDN18lumTqJ6AGe4KeCqlyzEJTGW6VYkDGZ%2Bow2Qazrnhrh1Gzf%2BAmlXMADv%2Fquw%2Bzwh0w5h9hkG1g3A8RdIudD3aYgqv0qSGqQA%2Ft9oYHJ0PoH5Q%2FwV%2BnUfjApbNI%2BCVvNStG%2FRTZzXafCss5Hx0M3tbld71xdJph8JGOYXrNlpUXdJWk3mUM1unl3QL2wWCdMW2tb9TeRgS%2FgVS3v3bB1BtbtGijQ9IeoJromdSImAy9FH5bn01vrlfC4IFIW4%2BLHhT0fK%2ByWh5wORW1zHn%2BNsBMfXSQI%2FmXASx211QXH%2FGx9gaESjc3CvOwPME%2FZI4n2Y84IXwmTBEgFTb2G6FwexlqOr%2BB1kzpRphp5gr%2FtdOVBM9X9jlhSl4ag9vpy2LjX%2FP%2FbwNfH9By9gCWKwvXwgkb8hBhUatZzkGI2Uj9vEjm%2BFUfAlAvoxzrClB%2FFw9LsZTRSsOYeSsv8CUYsz%2FGQGlI2O2XwHK7fwU8eb8z2T6PdVD5tWqmcicBup7aEyy%2F8r8Tln4D0xEPpOhOzcoCjkFndaj14p9VKik4EeG4dKN0x%2BNUJjq3fjNOv5QXfWiSrSJcx1Hx1PY9wjD3zfC9BjqkARQhxYrJOAh0yBtNN5ffyD3dsMudy4ifG8yg67VPa3ohWRV0Jxd3m%2BMiHC60R8g5d9%2BWm3jc0GRp2W%2Bd%2B7%2FXlIudgL8%2FSUDwlFCDGFdISqX3dr3uOU%2FhoxplUQciifeCW%2FmNwvpQjeMbX0PZSfgcNWSTuRfPso6DM9wvLKos8SprW4LGW0qai%2BSS50uFK7JlX5sqUg2hcFv2cwgJvF6qosOPoLok&X-Amz-Signature=5470a331edd002664a3b4064f54e954506428437588fea28b20ef8fa37c502c4&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KREXHDI%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T081159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3em%2FuEUFndycasTSgqPHGM1X9LN%2FpH5AYq0lppsdeBgIhAJieVkZ4gRYp%2BXnUyA3D390NojCqtvytm59sTSDXcICJKv8DCCkQABoMNjM3NDIzMTgzODA1IgyJS27J1OodquAizmQq3APA9cOlsyJ9cInwsL82roM2ELp48%2Ft4nPlFc0tfop7Wee%2FDN18lumTqJ6AGe4KeCqlyzEJTGW6VYkDGZ%2Bow2Qazrnhrh1Gzf%2BAmlXMADv%2Fquw%2Bzwh0w5h9hkG1g3A8RdIudD3aYgqv0qSGqQA%2Ft9oYHJ0PoH5Q%2FwV%2BnUfjApbNI%2BCVvNStG%2FRTZzXafCss5Hx0M3tbld71xdJph8JGOYXrNlpUXdJWk3mUM1unl3QL2wWCdMW2tb9TeRgS%2FgVS3v3bB1BtbtGijQ9IeoJromdSImAy9FH5bn01vrlfC4IFIW4%2BLHhT0fK%2ByWh5wORW1zHn%2BNsBMfXSQI%2FmXASx211QXH%2FGx9gaESjc3CvOwPME%2FZI4n2Y84IXwmTBEgFTb2G6FwexlqOr%2BB1kzpRphp5gr%2FtdOVBM9X9jlhSl4ag9vpy2LjX%2FP%2FbwNfH9By9gCWKwvXwgkb8hBhUatZzkGI2Uj9vEjm%2BFUfAlAvoxzrClB%2FFw9LsZTRSsOYeSsv8CUYsz%2FGQGlI2O2XwHK7fwU8eb8z2T6PdVD5tWqmcicBup7aEyy%2F8r8Tln4D0xEPpOhOzcoCjkFndaj14p9VKik4EeG4dKN0x%2BNUJjq3fjNOv5QXfWiSrSJcx1Hx1PY9wjD3zfC9BjqkARQhxYrJOAh0yBtNN5ffyD3dsMudy4ifG8yg67VPa3ohWRV0Jxd3m%2BMiHC60R8g5d9%2BWm3jc0GRp2W%2Bd%2B7%2FXlIudgL8%2FSUDwlFCDGFdISqX3dr3uOU%2FhoxplUQciifeCW%2FmNwvpQjeMbX0PZSfgcNWSTuRfPso6DM9wvLKos8SprW4LGW0qai%2BSS50uFK7JlX5sqUg2hcFv2cwgJvF6qosOPoLok&X-Amz-Signature=c54d7273f4ce160b371238fc5c51f5f4f60d495f72eff9e743d8cf00dd6ed293&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KREXHDI%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T081159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3em%2FuEUFndycasTSgqPHGM1X9LN%2FpH5AYq0lppsdeBgIhAJieVkZ4gRYp%2BXnUyA3D390NojCqtvytm59sTSDXcICJKv8DCCkQABoMNjM3NDIzMTgzODA1IgyJS27J1OodquAizmQq3APA9cOlsyJ9cInwsL82roM2ELp48%2Ft4nPlFc0tfop7Wee%2FDN18lumTqJ6AGe4KeCqlyzEJTGW6VYkDGZ%2Bow2Qazrnhrh1Gzf%2BAmlXMADv%2Fquw%2Bzwh0w5h9hkG1g3A8RdIudD3aYgqv0qSGqQA%2Ft9oYHJ0PoH5Q%2FwV%2BnUfjApbNI%2BCVvNStG%2FRTZzXafCss5Hx0M3tbld71xdJph8JGOYXrNlpUXdJWk3mUM1unl3QL2wWCdMW2tb9TeRgS%2FgVS3v3bB1BtbtGijQ9IeoJromdSImAy9FH5bn01vrlfC4IFIW4%2BLHhT0fK%2ByWh5wORW1zHn%2BNsBMfXSQI%2FmXASx211QXH%2FGx9gaESjc3CvOwPME%2FZI4n2Y84IXwmTBEgFTb2G6FwexlqOr%2BB1kzpRphp5gr%2FtdOVBM9X9jlhSl4ag9vpy2LjX%2FP%2FbwNfH9By9gCWKwvXwgkb8hBhUatZzkGI2Uj9vEjm%2BFUfAlAvoxzrClB%2FFw9LsZTRSsOYeSsv8CUYsz%2FGQGlI2O2XwHK7fwU8eb8z2T6PdVD5tWqmcicBup7aEyy%2F8r8Tln4D0xEPpOhOzcoCjkFndaj14p9VKik4EeG4dKN0x%2BNUJjq3fjNOv5QXfWiSrSJcx1Hx1PY9wjD3zfC9BjqkARQhxYrJOAh0yBtNN5ffyD3dsMudy4ifG8yg67VPa3ohWRV0Jxd3m%2BMiHC60R8g5d9%2BWm3jc0GRp2W%2Bd%2B7%2FXlIudgL8%2FSUDwlFCDGFdISqX3dr3uOU%2FhoxplUQciifeCW%2FmNwvpQjeMbX0PZSfgcNWSTuRfPso6DM9wvLKos8SprW4LGW0qai%2BSS50uFK7JlX5sqUg2hcFv2cwgJvF6qosOPoLok&X-Amz-Signature=89de519fd457164d698b99e2f3c6eee7f509bed7d38ef64b523595ecef04537c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KREXHDI%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T081159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3em%2FuEUFndycasTSgqPHGM1X9LN%2FpH5AYq0lppsdeBgIhAJieVkZ4gRYp%2BXnUyA3D390NojCqtvytm59sTSDXcICJKv8DCCkQABoMNjM3NDIzMTgzODA1IgyJS27J1OodquAizmQq3APA9cOlsyJ9cInwsL82roM2ELp48%2Ft4nPlFc0tfop7Wee%2FDN18lumTqJ6AGe4KeCqlyzEJTGW6VYkDGZ%2Bow2Qazrnhrh1Gzf%2BAmlXMADv%2Fquw%2Bzwh0w5h9hkG1g3A8RdIudD3aYgqv0qSGqQA%2Ft9oYHJ0PoH5Q%2FwV%2BnUfjApbNI%2BCVvNStG%2FRTZzXafCss5Hx0M3tbld71xdJph8JGOYXrNlpUXdJWk3mUM1unl3QL2wWCdMW2tb9TeRgS%2FgVS3v3bB1BtbtGijQ9IeoJromdSImAy9FH5bn01vrlfC4IFIW4%2BLHhT0fK%2ByWh5wORW1zHn%2BNsBMfXSQI%2FmXASx211QXH%2FGx9gaESjc3CvOwPME%2FZI4n2Y84IXwmTBEgFTb2G6FwexlqOr%2BB1kzpRphp5gr%2FtdOVBM9X9jlhSl4ag9vpy2LjX%2FP%2FbwNfH9By9gCWKwvXwgkb8hBhUatZzkGI2Uj9vEjm%2BFUfAlAvoxzrClB%2FFw9LsZTRSsOYeSsv8CUYsz%2FGQGlI2O2XwHK7fwU8eb8z2T6PdVD5tWqmcicBup7aEyy%2F8r8Tln4D0xEPpOhOzcoCjkFndaj14p9VKik4EeG4dKN0x%2BNUJjq3fjNOv5QXfWiSrSJcx1Hx1PY9wjD3zfC9BjqkARQhxYrJOAh0yBtNN5ffyD3dsMudy4ifG8yg67VPa3ohWRV0Jxd3m%2BMiHC60R8g5d9%2BWm3jc0GRp2W%2Bd%2B7%2FXlIudgL8%2FSUDwlFCDGFdISqX3dr3uOU%2FhoxplUQciifeCW%2FmNwvpQjeMbX0PZSfgcNWSTuRfPso6DM9wvLKos8SprW4LGW0qai%2BSS50uFK7JlX5sqUg2hcFv2cwgJvF6qosOPoLok&X-Amz-Signature=84a65b51af17d56627ce0f545ca2e3320f861546a6472e39f16821e39f7a7beb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KREXHDI%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T081159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3em%2FuEUFndycasTSgqPHGM1X9LN%2FpH5AYq0lppsdeBgIhAJieVkZ4gRYp%2BXnUyA3D390NojCqtvytm59sTSDXcICJKv8DCCkQABoMNjM3NDIzMTgzODA1IgyJS27J1OodquAizmQq3APA9cOlsyJ9cInwsL82roM2ELp48%2Ft4nPlFc0tfop7Wee%2FDN18lumTqJ6AGe4KeCqlyzEJTGW6VYkDGZ%2Bow2Qazrnhrh1Gzf%2BAmlXMADv%2Fquw%2Bzwh0w5h9hkG1g3A8RdIudD3aYgqv0qSGqQA%2Ft9oYHJ0PoH5Q%2FwV%2BnUfjApbNI%2BCVvNStG%2FRTZzXafCss5Hx0M3tbld71xdJph8JGOYXrNlpUXdJWk3mUM1unl3QL2wWCdMW2tb9TeRgS%2FgVS3v3bB1BtbtGijQ9IeoJromdSImAy9FH5bn01vrlfC4IFIW4%2BLHhT0fK%2ByWh5wORW1zHn%2BNsBMfXSQI%2FmXASx211QXH%2FGx9gaESjc3CvOwPME%2FZI4n2Y84IXwmTBEgFTb2G6FwexlqOr%2BB1kzpRphp5gr%2FtdOVBM9X9jlhSl4ag9vpy2LjX%2FP%2FbwNfH9By9gCWKwvXwgkb8hBhUatZzkGI2Uj9vEjm%2BFUfAlAvoxzrClB%2FFw9LsZTRSsOYeSsv8CUYsz%2FGQGlI2O2XwHK7fwU8eb8z2T6PdVD5tWqmcicBup7aEyy%2F8r8Tln4D0xEPpOhOzcoCjkFndaj14p9VKik4EeG4dKN0x%2BNUJjq3fjNOv5QXfWiSrSJcx1Hx1PY9wjD3zfC9BjqkARQhxYrJOAh0yBtNN5ffyD3dsMudy4ifG8yg67VPa3ohWRV0Jxd3m%2BMiHC60R8g5d9%2BWm3jc0GRp2W%2Bd%2B7%2FXlIudgL8%2FSUDwlFCDGFdISqX3dr3uOU%2FhoxplUQciifeCW%2FmNwvpQjeMbX0PZSfgcNWSTuRfPso6DM9wvLKos8SprW4LGW0qai%2BSS50uFK7JlX5sqUg2hcFv2cwgJvF6qosOPoLok&X-Amz-Signature=99077269216ee0b7207dd9103ec3da4ebe2e0e234ee92e3c5f0e97a8ae16af24&X-Amz-SignedHeaders=host&x-id=GetObject)
