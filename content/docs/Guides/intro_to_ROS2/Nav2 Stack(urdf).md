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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFXSAIEP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T110123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG6r3EAUIIZ9gY3lUYJjJfe7YOqvz3aNprMKN%2FA0EAkgIhAJIuArZjziXzcU0TjUQqhdHd4RNhB27RU1D46FdV4IhcKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igybes8QKanJQCgjqxQq3AOE%2FYNTpYt50Q1cMauSxcxCPp93rF72B%2BZ1Y8cJkdFZKE8FB1zO1wTDQyV00rxPSaws1xO%2BqaalTff073BaJ1q9wZ4%2F%2Bk8y1R7a3JU09u8F9eFhUq%2FXaV13bbj1pdipfCW2jRv9xcGAdq3ovE6OdWSI668UXi9TCjubqx6ihQcZNU7sgBGRxdfq5NrmB8pn7BekDwCUC8Um%2Fy7DPOgtD%2B%2FY0gVtU2H3VbUGlOrm9wCPRhG54MHZSwjqZI6ZySAPHZSi3Mj18j9NAkBlXbEhSynE3RZYQsix07l2f0a64WR8pb4g%2BKoCTpnXjwqKYeIq%2BxOhqvNjNoQzQaQ6UHd3zAIyeIwEKq2rXwRptbS7C9yTaa0NA1%2BO3wqggDvM83bm9o%2FDCWqKgSZy6WWjDq40MhIFa%2BOBexf4oXWngW66s1Ivc7kmAo%2FqpOUNyHE%2BOTbvGRvudRtvZGEwT3%2F5q0mA8QRiNhD%2B9N9U64DsQcYTPIcDEwPVo9I%2FphD2gqhSXMaUpnfhdXZZbN3OE0Y3qj2aIsjRuTyXLfpmoZ8AQRS9vgEv8L5CVdq1n%2FVHzi%2Bo9t6YNkY2TvppkRRdo67qIyEb4K%2B1VMp4qrpHO87qOADQDEy54c6Lk4qcfsLqelWLkjDNyrm%2FBjqkASkabPOnykaYxRu9Haw%2FCBd6MuXlUF%2BGaXH1A1P4gwWKnEuVbVWrjasjo%2B2Kke5lpJQrbcYg2Voh6um7vKd%2F5%2Fz%2FxpKhyewjZzowz3kIg9ywCwvn3U58%2FKRM%2F19ncJHBzhaOT2WlBBAHLmm2zF%2Fp4bc56gzXJQtadcRm6MsMQh1gfgY%2FBKIEe6NAFM9unBgRgSGSV9arrbi1ttwqe457mByHNG36&X-Amz-Signature=2decea64c47e62671825b20d938c77fec738b017e9fa929159e15e3ee7e19eb8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFXSAIEP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T110123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG6r3EAUIIZ9gY3lUYJjJfe7YOqvz3aNprMKN%2FA0EAkgIhAJIuArZjziXzcU0TjUQqhdHd4RNhB27RU1D46FdV4IhcKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igybes8QKanJQCgjqxQq3AOE%2FYNTpYt50Q1cMauSxcxCPp93rF72B%2BZ1Y8cJkdFZKE8FB1zO1wTDQyV00rxPSaws1xO%2BqaalTff073BaJ1q9wZ4%2F%2Bk8y1R7a3JU09u8F9eFhUq%2FXaV13bbj1pdipfCW2jRv9xcGAdq3ovE6OdWSI668UXi9TCjubqx6ihQcZNU7sgBGRxdfq5NrmB8pn7BekDwCUC8Um%2Fy7DPOgtD%2B%2FY0gVtU2H3VbUGlOrm9wCPRhG54MHZSwjqZI6ZySAPHZSi3Mj18j9NAkBlXbEhSynE3RZYQsix07l2f0a64WR8pb4g%2BKoCTpnXjwqKYeIq%2BxOhqvNjNoQzQaQ6UHd3zAIyeIwEKq2rXwRptbS7C9yTaa0NA1%2BO3wqggDvM83bm9o%2FDCWqKgSZy6WWjDq40MhIFa%2BOBexf4oXWngW66s1Ivc7kmAo%2FqpOUNyHE%2BOTbvGRvudRtvZGEwT3%2F5q0mA8QRiNhD%2B9N9U64DsQcYTPIcDEwPVo9I%2FphD2gqhSXMaUpnfhdXZZbN3OE0Y3qj2aIsjRuTyXLfpmoZ8AQRS9vgEv8L5CVdq1n%2FVHzi%2Bo9t6YNkY2TvppkRRdo67qIyEb4K%2B1VMp4qrpHO87qOADQDEy54c6Lk4qcfsLqelWLkjDNyrm%2FBjqkASkabPOnykaYxRu9Haw%2FCBd6MuXlUF%2BGaXH1A1P4gwWKnEuVbVWrjasjo%2B2Kke5lpJQrbcYg2Voh6um7vKd%2F5%2Fz%2FxpKhyewjZzowz3kIg9ywCwvn3U58%2FKRM%2F19ncJHBzhaOT2WlBBAHLmm2zF%2Fp4bc56gzXJQtadcRm6MsMQh1gfgY%2FBKIEe6NAFM9unBgRgSGSV9arrbi1ttwqe457mByHNG36&X-Amz-Signature=a453e30ba8dcb23a273ec5486eed0b387c00203239740ff02cf82ad69e18ebb5&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFXSAIEP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T110123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG6r3EAUIIZ9gY3lUYJjJfe7YOqvz3aNprMKN%2FA0EAkgIhAJIuArZjziXzcU0TjUQqhdHd4RNhB27RU1D46FdV4IhcKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igybes8QKanJQCgjqxQq3AOE%2FYNTpYt50Q1cMauSxcxCPp93rF72B%2BZ1Y8cJkdFZKE8FB1zO1wTDQyV00rxPSaws1xO%2BqaalTff073BaJ1q9wZ4%2F%2Bk8y1R7a3JU09u8F9eFhUq%2FXaV13bbj1pdipfCW2jRv9xcGAdq3ovE6OdWSI668UXi9TCjubqx6ihQcZNU7sgBGRxdfq5NrmB8pn7BekDwCUC8Um%2Fy7DPOgtD%2B%2FY0gVtU2H3VbUGlOrm9wCPRhG54MHZSwjqZI6ZySAPHZSi3Mj18j9NAkBlXbEhSynE3RZYQsix07l2f0a64WR8pb4g%2BKoCTpnXjwqKYeIq%2BxOhqvNjNoQzQaQ6UHd3zAIyeIwEKq2rXwRptbS7C9yTaa0NA1%2BO3wqggDvM83bm9o%2FDCWqKgSZy6WWjDq40MhIFa%2BOBexf4oXWngW66s1Ivc7kmAo%2FqpOUNyHE%2BOTbvGRvudRtvZGEwT3%2F5q0mA8QRiNhD%2B9N9U64DsQcYTPIcDEwPVo9I%2FphD2gqhSXMaUpnfhdXZZbN3OE0Y3qj2aIsjRuTyXLfpmoZ8AQRS9vgEv8L5CVdq1n%2FVHzi%2Bo9t6YNkY2TvppkRRdo67qIyEb4K%2B1VMp4qrpHO87qOADQDEy54c6Lk4qcfsLqelWLkjDNyrm%2FBjqkASkabPOnykaYxRu9Haw%2FCBd6MuXlUF%2BGaXH1A1P4gwWKnEuVbVWrjasjo%2B2Kke5lpJQrbcYg2Voh6um7vKd%2F5%2Fz%2FxpKhyewjZzowz3kIg9ywCwvn3U58%2FKRM%2F19ncJHBzhaOT2WlBBAHLmm2zF%2Fp4bc56gzXJQtadcRm6MsMQh1gfgY%2FBKIEe6NAFM9unBgRgSGSV9arrbi1ttwqe457mByHNG36&X-Amz-Signature=048638a59048f1410845c0f09fff6ed3e4cf3714f3d3186232f7b095950d5f2f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFXSAIEP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T110123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG6r3EAUIIZ9gY3lUYJjJfe7YOqvz3aNprMKN%2FA0EAkgIhAJIuArZjziXzcU0TjUQqhdHd4RNhB27RU1D46FdV4IhcKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igybes8QKanJQCgjqxQq3AOE%2FYNTpYt50Q1cMauSxcxCPp93rF72B%2BZ1Y8cJkdFZKE8FB1zO1wTDQyV00rxPSaws1xO%2BqaalTff073BaJ1q9wZ4%2F%2Bk8y1R7a3JU09u8F9eFhUq%2FXaV13bbj1pdipfCW2jRv9xcGAdq3ovE6OdWSI668UXi9TCjubqx6ihQcZNU7sgBGRxdfq5NrmB8pn7BekDwCUC8Um%2Fy7DPOgtD%2B%2FY0gVtU2H3VbUGlOrm9wCPRhG54MHZSwjqZI6ZySAPHZSi3Mj18j9NAkBlXbEhSynE3RZYQsix07l2f0a64WR8pb4g%2BKoCTpnXjwqKYeIq%2BxOhqvNjNoQzQaQ6UHd3zAIyeIwEKq2rXwRptbS7C9yTaa0NA1%2BO3wqggDvM83bm9o%2FDCWqKgSZy6WWjDq40MhIFa%2BOBexf4oXWngW66s1Ivc7kmAo%2FqpOUNyHE%2BOTbvGRvudRtvZGEwT3%2F5q0mA8QRiNhD%2B9N9U64DsQcYTPIcDEwPVo9I%2FphD2gqhSXMaUpnfhdXZZbN3OE0Y3qj2aIsjRuTyXLfpmoZ8AQRS9vgEv8L5CVdq1n%2FVHzi%2Bo9t6YNkY2TvppkRRdo67qIyEb4K%2B1VMp4qrpHO87qOADQDEy54c6Lk4qcfsLqelWLkjDNyrm%2FBjqkASkabPOnykaYxRu9Haw%2FCBd6MuXlUF%2BGaXH1A1P4gwWKnEuVbVWrjasjo%2B2Kke5lpJQrbcYg2Voh6um7vKd%2F5%2Fz%2FxpKhyewjZzowz3kIg9ywCwvn3U58%2FKRM%2F19ncJHBzhaOT2WlBBAHLmm2zF%2Fp4bc56gzXJQtadcRm6MsMQh1gfgY%2FBKIEe6NAFM9unBgRgSGSV9arrbi1ttwqe457mByHNG36&X-Amz-Signature=22808128116dc238213e95efba888c7d28b7390b9345478e179417223d9a45f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFXSAIEP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T110123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG6r3EAUIIZ9gY3lUYJjJfe7YOqvz3aNprMKN%2FA0EAkgIhAJIuArZjziXzcU0TjUQqhdHd4RNhB27RU1D46FdV4IhcKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igybes8QKanJQCgjqxQq3AOE%2FYNTpYt50Q1cMauSxcxCPp93rF72B%2BZ1Y8cJkdFZKE8FB1zO1wTDQyV00rxPSaws1xO%2BqaalTff073BaJ1q9wZ4%2F%2Bk8y1R7a3JU09u8F9eFhUq%2FXaV13bbj1pdipfCW2jRv9xcGAdq3ovE6OdWSI668UXi9TCjubqx6ihQcZNU7sgBGRxdfq5NrmB8pn7BekDwCUC8Um%2Fy7DPOgtD%2B%2FY0gVtU2H3VbUGlOrm9wCPRhG54MHZSwjqZI6ZySAPHZSi3Mj18j9NAkBlXbEhSynE3RZYQsix07l2f0a64WR8pb4g%2BKoCTpnXjwqKYeIq%2BxOhqvNjNoQzQaQ6UHd3zAIyeIwEKq2rXwRptbS7C9yTaa0NA1%2BO3wqggDvM83bm9o%2FDCWqKgSZy6WWjDq40MhIFa%2BOBexf4oXWngW66s1Ivc7kmAo%2FqpOUNyHE%2BOTbvGRvudRtvZGEwT3%2F5q0mA8QRiNhD%2B9N9U64DsQcYTPIcDEwPVo9I%2FphD2gqhSXMaUpnfhdXZZbN3OE0Y3qj2aIsjRuTyXLfpmoZ8AQRS9vgEv8L5CVdq1n%2FVHzi%2Bo9t6YNkY2TvppkRRdo67qIyEb4K%2B1VMp4qrpHO87qOADQDEy54c6Lk4qcfsLqelWLkjDNyrm%2FBjqkASkabPOnykaYxRu9Haw%2FCBd6MuXlUF%2BGaXH1A1P4gwWKnEuVbVWrjasjo%2B2Kke5lpJQrbcYg2Voh6um7vKd%2F5%2Fz%2FxpKhyewjZzowz3kIg9ywCwvn3U58%2FKRM%2F19ncJHBzhaOT2WlBBAHLmm2zF%2Fp4bc56gzXJQtadcRm6MsMQh1gfgY%2FBKIEe6NAFM9unBgRgSGSV9arrbi1ttwqe457mByHNG36&X-Amz-Signature=b912a6f04e6961edd549ee901f5f53cba52701565b8751ec751b5389a884f5d1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFXSAIEP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T110123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG6r3EAUIIZ9gY3lUYJjJfe7YOqvz3aNprMKN%2FA0EAkgIhAJIuArZjziXzcU0TjUQqhdHd4RNhB27RU1D46FdV4IhcKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igybes8QKanJQCgjqxQq3AOE%2FYNTpYt50Q1cMauSxcxCPp93rF72B%2BZ1Y8cJkdFZKE8FB1zO1wTDQyV00rxPSaws1xO%2BqaalTff073BaJ1q9wZ4%2F%2Bk8y1R7a3JU09u8F9eFhUq%2FXaV13bbj1pdipfCW2jRv9xcGAdq3ovE6OdWSI668UXi9TCjubqx6ihQcZNU7sgBGRxdfq5NrmB8pn7BekDwCUC8Um%2Fy7DPOgtD%2B%2FY0gVtU2H3VbUGlOrm9wCPRhG54MHZSwjqZI6ZySAPHZSi3Mj18j9NAkBlXbEhSynE3RZYQsix07l2f0a64WR8pb4g%2BKoCTpnXjwqKYeIq%2BxOhqvNjNoQzQaQ6UHd3zAIyeIwEKq2rXwRptbS7C9yTaa0NA1%2BO3wqggDvM83bm9o%2FDCWqKgSZy6WWjDq40MhIFa%2BOBexf4oXWngW66s1Ivc7kmAo%2FqpOUNyHE%2BOTbvGRvudRtvZGEwT3%2F5q0mA8QRiNhD%2B9N9U64DsQcYTPIcDEwPVo9I%2FphD2gqhSXMaUpnfhdXZZbN3OE0Y3qj2aIsjRuTyXLfpmoZ8AQRS9vgEv8L5CVdq1n%2FVHzi%2Bo9t6YNkY2TvppkRRdo67qIyEb4K%2B1VMp4qrpHO87qOADQDEy54c6Lk4qcfsLqelWLkjDNyrm%2FBjqkASkabPOnykaYxRu9Haw%2FCBd6MuXlUF%2BGaXH1A1P4gwWKnEuVbVWrjasjo%2B2Kke5lpJQrbcYg2Voh6um7vKd%2F5%2Fz%2FxpKhyewjZzowz3kIg9ywCwvn3U58%2FKRM%2F19ncJHBzhaOT2WlBBAHLmm2zF%2Fp4bc56gzXJQtadcRm6MsMQh1gfgY%2FBKIEe6NAFM9unBgRgSGSV9arrbi1ttwqe457mByHNG36&X-Amz-Signature=00ec25d98349f25580e1a2e5de6a654396222146d337c0620674b09fa7106b80&X-Amz-SignedHeaders=host&x-id=GetObject)
