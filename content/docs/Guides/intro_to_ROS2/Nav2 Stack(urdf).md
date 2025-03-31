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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S24GUQY2%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T081239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDNd2XSAvG07T%2BgkdF1WD%2Bc3%2Byu52wAfU5%2FubvamjQ9oAIgSpN6votL7Oyn2wuhYnlyX%2BWmfgMxRgYi%2FtntLLpdn0cqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0uAd%2BfIGeSJ%2FkS7ircA04TLSIdyxZgiEp40kyBhzKtERN3JpDDTvPXXU3qFoQ0R%2BaPV2N2OW%2BHegWBOy6El7wWw6Lh3eGgRtK%2FGyytem2Sk3J489We29F5L5AZsW5S5CW9%2BKRYRb%2BBrjB4H2%2BwazoWpqW0C2feX1ms%2B0AkM9oj5qCF4Du3TIlK%2B13HkH%2F7kCB2i7ifLtzc89yWxm4%2B4fuqwQruTxlVF%2BTqn0C67LYV9jUpUJEvRQyew1r9yPHdwj47Rhlb%2BLt0NsVHZ448e8JID4NyYnpsmpIr7AaY7mMRrC5iZ9z%2FMocAncYni0B%2FLJmrCrpVP%2F335hNELvkLRRBAiEFvxE5R3SIcIeSU0KO0ZQ%2B3ZFODeMSp8liCMoq61O38JlJ9orxrMyGIZ%2FLpEOxnvJjCRwi1XJuohOsv64Dc8vUhdEqIlbGqKmyZLwVFcRLhI9U9tMJPM3ljI1X64%2B%2F48lcqufELt%2FdMWKW1%2BlbsNnn9%2FuFBGY13MLnW2F%2FKI8Zex3lo9zECIDmxZNHVRwZA4dI%2BDV5ifSZatJXCDq9L0PcNYrOqacKNw8dau4c2vFmq8tEFCbK07sgpheGoyhIS62TLto9wpA%2BBIszBPWerNvY4HpNiEjtvqu%2FiiT6Gf5wK%2Fn7NPfyVEoioMJvlqL8GOqUBkkrMrBf28h0yqrQdRjPFMlV4sKMekDlyvHUyABrx8vEZ17T0RYPbtwlFJ00QfVLJOAag%2FNOG94OMUh5lbazpbKR8KRA%2FsezkD6JuZgQTo0Htg51SisKycrfnHjLfvSE6wsWoZHX16gLjK%2F%2FyvdT7m42baLsM%2BYEUjWHiJQAVD7R4H5qcTVAjKUCaVzgx7iUnjh8R15jcZiAH%2BntdFmwHlVFFrgdI&X-Amz-Signature=2f9fda47ea6c02666b4e6a5745c65eb82a21b759d42a6aec57300f78de2b242d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S24GUQY2%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T081239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDNd2XSAvG07T%2BgkdF1WD%2Bc3%2Byu52wAfU5%2FubvamjQ9oAIgSpN6votL7Oyn2wuhYnlyX%2BWmfgMxRgYi%2FtntLLpdn0cqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0uAd%2BfIGeSJ%2FkS7ircA04TLSIdyxZgiEp40kyBhzKtERN3JpDDTvPXXU3qFoQ0R%2BaPV2N2OW%2BHegWBOy6El7wWw6Lh3eGgRtK%2FGyytem2Sk3J489We29F5L5AZsW5S5CW9%2BKRYRb%2BBrjB4H2%2BwazoWpqW0C2feX1ms%2B0AkM9oj5qCF4Du3TIlK%2B13HkH%2F7kCB2i7ifLtzc89yWxm4%2B4fuqwQruTxlVF%2BTqn0C67LYV9jUpUJEvRQyew1r9yPHdwj47Rhlb%2BLt0NsVHZ448e8JID4NyYnpsmpIr7AaY7mMRrC5iZ9z%2FMocAncYni0B%2FLJmrCrpVP%2F335hNELvkLRRBAiEFvxE5R3SIcIeSU0KO0ZQ%2B3ZFODeMSp8liCMoq61O38JlJ9orxrMyGIZ%2FLpEOxnvJjCRwi1XJuohOsv64Dc8vUhdEqIlbGqKmyZLwVFcRLhI9U9tMJPM3ljI1X64%2B%2F48lcqufELt%2FdMWKW1%2BlbsNnn9%2FuFBGY13MLnW2F%2FKI8Zex3lo9zECIDmxZNHVRwZA4dI%2BDV5ifSZatJXCDq9L0PcNYrOqacKNw8dau4c2vFmq8tEFCbK07sgpheGoyhIS62TLto9wpA%2BBIszBPWerNvY4HpNiEjtvqu%2FiiT6Gf5wK%2Fn7NPfyVEoioMJvlqL8GOqUBkkrMrBf28h0yqrQdRjPFMlV4sKMekDlyvHUyABrx8vEZ17T0RYPbtwlFJ00QfVLJOAag%2FNOG94OMUh5lbazpbKR8KRA%2FsezkD6JuZgQTo0Htg51SisKycrfnHjLfvSE6wsWoZHX16gLjK%2F%2FyvdT7m42baLsM%2BYEUjWHiJQAVD7R4H5qcTVAjKUCaVzgx7iUnjh8R15jcZiAH%2BntdFmwHlVFFrgdI&X-Amz-Signature=f5873c599272758f3e1944a7cb1c513d0a1451a6a0b3b1da62f9458f3110c4fc&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S24GUQY2%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T081239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDNd2XSAvG07T%2BgkdF1WD%2Bc3%2Byu52wAfU5%2FubvamjQ9oAIgSpN6votL7Oyn2wuhYnlyX%2BWmfgMxRgYi%2FtntLLpdn0cqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0uAd%2BfIGeSJ%2FkS7ircA04TLSIdyxZgiEp40kyBhzKtERN3JpDDTvPXXU3qFoQ0R%2BaPV2N2OW%2BHegWBOy6El7wWw6Lh3eGgRtK%2FGyytem2Sk3J489We29F5L5AZsW5S5CW9%2BKRYRb%2BBrjB4H2%2BwazoWpqW0C2feX1ms%2B0AkM9oj5qCF4Du3TIlK%2B13HkH%2F7kCB2i7ifLtzc89yWxm4%2B4fuqwQruTxlVF%2BTqn0C67LYV9jUpUJEvRQyew1r9yPHdwj47Rhlb%2BLt0NsVHZ448e8JID4NyYnpsmpIr7AaY7mMRrC5iZ9z%2FMocAncYni0B%2FLJmrCrpVP%2F335hNELvkLRRBAiEFvxE5R3SIcIeSU0KO0ZQ%2B3ZFODeMSp8liCMoq61O38JlJ9orxrMyGIZ%2FLpEOxnvJjCRwi1XJuohOsv64Dc8vUhdEqIlbGqKmyZLwVFcRLhI9U9tMJPM3ljI1X64%2B%2F48lcqufELt%2FdMWKW1%2BlbsNnn9%2FuFBGY13MLnW2F%2FKI8Zex3lo9zECIDmxZNHVRwZA4dI%2BDV5ifSZatJXCDq9L0PcNYrOqacKNw8dau4c2vFmq8tEFCbK07sgpheGoyhIS62TLto9wpA%2BBIszBPWerNvY4HpNiEjtvqu%2FiiT6Gf5wK%2Fn7NPfyVEoioMJvlqL8GOqUBkkrMrBf28h0yqrQdRjPFMlV4sKMekDlyvHUyABrx8vEZ17T0RYPbtwlFJ00QfVLJOAag%2FNOG94OMUh5lbazpbKR8KRA%2FsezkD6JuZgQTo0Htg51SisKycrfnHjLfvSE6wsWoZHX16gLjK%2F%2FyvdT7m42baLsM%2BYEUjWHiJQAVD7R4H5qcTVAjKUCaVzgx7iUnjh8R15jcZiAH%2BntdFmwHlVFFrgdI&X-Amz-Signature=6bf5d8706fa42ddc036ea53aba487ebd72f9dc1d1cafc7fcff3333f22c18b0ad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S24GUQY2%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T081239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDNd2XSAvG07T%2BgkdF1WD%2Bc3%2Byu52wAfU5%2FubvamjQ9oAIgSpN6votL7Oyn2wuhYnlyX%2BWmfgMxRgYi%2FtntLLpdn0cqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0uAd%2BfIGeSJ%2FkS7ircA04TLSIdyxZgiEp40kyBhzKtERN3JpDDTvPXXU3qFoQ0R%2BaPV2N2OW%2BHegWBOy6El7wWw6Lh3eGgRtK%2FGyytem2Sk3J489We29F5L5AZsW5S5CW9%2BKRYRb%2BBrjB4H2%2BwazoWpqW0C2feX1ms%2B0AkM9oj5qCF4Du3TIlK%2B13HkH%2F7kCB2i7ifLtzc89yWxm4%2B4fuqwQruTxlVF%2BTqn0C67LYV9jUpUJEvRQyew1r9yPHdwj47Rhlb%2BLt0NsVHZ448e8JID4NyYnpsmpIr7AaY7mMRrC5iZ9z%2FMocAncYni0B%2FLJmrCrpVP%2F335hNELvkLRRBAiEFvxE5R3SIcIeSU0KO0ZQ%2B3ZFODeMSp8liCMoq61O38JlJ9orxrMyGIZ%2FLpEOxnvJjCRwi1XJuohOsv64Dc8vUhdEqIlbGqKmyZLwVFcRLhI9U9tMJPM3ljI1X64%2B%2F48lcqufELt%2FdMWKW1%2BlbsNnn9%2FuFBGY13MLnW2F%2FKI8Zex3lo9zECIDmxZNHVRwZA4dI%2BDV5ifSZatJXCDq9L0PcNYrOqacKNw8dau4c2vFmq8tEFCbK07sgpheGoyhIS62TLto9wpA%2BBIszBPWerNvY4HpNiEjtvqu%2FiiT6Gf5wK%2Fn7NPfyVEoioMJvlqL8GOqUBkkrMrBf28h0yqrQdRjPFMlV4sKMekDlyvHUyABrx8vEZ17T0RYPbtwlFJ00QfVLJOAag%2FNOG94OMUh5lbazpbKR8KRA%2FsezkD6JuZgQTo0Htg51SisKycrfnHjLfvSE6wsWoZHX16gLjK%2F%2FyvdT7m42baLsM%2BYEUjWHiJQAVD7R4H5qcTVAjKUCaVzgx7iUnjh8R15jcZiAH%2BntdFmwHlVFFrgdI&X-Amz-Signature=483d360798ece005290f02c7a608133e97e48297484983ab2764d4c5faf25fb3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S24GUQY2%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T081239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDNd2XSAvG07T%2BgkdF1WD%2Bc3%2Byu52wAfU5%2FubvamjQ9oAIgSpN6votL7Oyn2wuhYnlyX%2BWmfgMxRgYi%2FtntLLpdn0cqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0uAd%2BfIGeSJ%2FkS7ircA04TLSIdyxZgiEp40kyBhzKtERN3JpDDTvPXXU3qFoQ0R%2BaPV2N2OW%2BHegWBOy6El7wWw6Lh3eGgRtK%2FGyytem2Sk3J489We29F5L5AZsW5S5CW9%2BKRYRb%2BBrjB4H2%2BwazoWpqW0C2feX1ms%2B0AkM9oj5qCF4Du3TIlK%2B13HkH%2F7kCB2i7ifLtzc89yWxm4%2B4fuqwQruTxlVF%2BTqn0C67LYV9jUpUJEvRQyew1r9yPHdwj47Rhlb%2BLt0NsVHZ448e8JID4NyYnpsmpIr7AaY7mMRrC5iZ9z%2FMocAncYni0B%2FLJmrCrpVP%2F335hNELvkLRRBAiEFvxE5R3SIcIeSU0KO0ZQ%2B3ZFODeMSp8liCMoq61O38JlJ9orxrMyGIZ%2FLpEOxnvJjCRwi1XJuohOsv64Dc8vUhdEqIlbGqKmyZLwVFcRLhI9U9tMJPM3ljI1X64%2B%2F48lcqufELt%2FdMWKW1%2BlbsNnn9%2FuFBGY13MLnW2F%2FKI8Zex3lo9zECIDmxZNHVRwZA4dI%2BDV5ifSZatJXCDq9L0PcNYrOqacKNw8dau4c2vFmq8tEFCbK07sgpheGoyhIS62TLto9wpA%2BBIszBPWerNvY4HpNiEjtvqu%2FiiT6Gf5wK%2Fn7NPfyVEoioMJvlqL8GOqUBkkrMrBf28h0yqrQdRjPFMlV4sKMekDlyvHUyABrx8vEZ17T0RYPbtwlFJ00QfVLJOAag%2FNOG94OMUh5lbazpbKR8KRA%2FsezkD6JuZgQTo0Htg51SisKycrfnHjLfvSE6wsWoZHX16gLjK%2F%2FyvdT7m42baLsM%2BYEUjWHiJQAVD7R4H5qcTVAjKUCaVzgx7iUnjh8R15jcZiAH%2BntdFmwHlVFFrgdI&X-Amz-Signature=04d6a2cdd3b92c0b76a8041512e2c81507619724e788a8f779800342a74e093c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S24GUQY2%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T081239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDNd2XSAvG07T%2BgkdF1WD%2Bc3%2Byu52wAfU5%2FubvamjQ9oAIgSpN6votL7Oyn2wuhYnlyX%2BWmfgMxRgYi%2FtntLLpdn0cqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0uAd%2BfIGeSJ%2FkS7ircA04TLSIdyxZgiEp40kyBhzKtERN3JpDDTvPXXU3qFoQ0R%2BaPV2N2OW%2BHegWBOy6El7wWw6Lh3eGgRtK%2FGyytem2Sk3J489We29F5L5AZsW5S5CW9%2BKRYRb%2BBrjB4H2%2BwazoWpqW0C2feX1ms%2B0AkM9oj5qCF4Du3TIlK%2B13HkH%2F7kCB2i7ifLtzc89yWxm4%2B4fuqwQruTxlVF%2BTqn0C67LYV9jUpUJEvRQyew1r9yPHdwj47Rhlb%2BLt0NsVHZ448e8JID4NyYnpsmpIr7AaY7mMRrC5iZ9z%2FMocAncYni0B%2FLJmrCrpVP%2F335hNELvkLRRBAiEFvxE5R3SIcIeSU0KO0ZQ%2B3ZFODeMSp8liCMoq61O38JlJ9orxrMyGIZ%2FLpEOxnvJjCRwi1XJuohOsv64Dc8vUhdEqIlbGqKmyZLwVFcRLhI9U9tMJPM3ljI1X64%2B%2F48lcqufELt%2FdMWKW1%2BlbsNnn9%2FuFBGY13MLnW2F%2FKI8Zex3lo9zECIDmxZNHVRwZA4dI%2BDV5ifSZatJXCDq9L0PcNYrOqacKNw8dau4c2vFmq8tEFCbK07sgpheGoyhIS62TLto9wpA%2BBIszBPWerNvY4HpNiEjtvqu%2FiiT6Gf5wK%2Fn7NPfyVEoioMJvlqL8GOqUBkkrMrBf28h0yqrQdRjPFMlV4sKMekDlyvHUyABrx8vEZ17T0RYPbtwlFJ00QfVLJOAag%2FNOG94OMUh5lbazpbKR8KRA%2FsezkD6JuZgQTo0Htg51SisKycrfnHjLfvSE6wsWoZHX16gLjK%2F%2FyvdT7m42baLsM%2BYEUjWHiJQAVD7R4H5qcTVAjKUCaVzgx7iUnjh8R15jcZiAH%2BntdFmwHlVFFrgdI&X-Amz-Signature=89d7ac2a9020f9b3cc2071d0772c77653dcfe723c5e9d820b8884609eba3c3ee&X-Amz-SignedHeaders=host&x-id=GetObject)
