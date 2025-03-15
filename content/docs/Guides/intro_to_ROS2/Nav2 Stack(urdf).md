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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UMFPZW6%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T220122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5cDdr09IC8oYS%2FjX3FdcK%2FHZRUKBCCk8b5u6MIBgd%2BgIgD%2Fm4q%2FW6VYgUU7gpnl5FrbP1Ni7DPdH8IXBS5WPlxdMq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKu%2BoBDN4YYG3aS6%2FircA8R3GUX0cPcr9eSqgHDY8a9d4bpDl1jvrLEfk2gziZFG%2BGjk755PqPHVAfv4eKZA9Em8iHEkbRIZLxGYXn6zxcnz0gGpIXWtT%2BRAuiqySvpOpcHnh%2FsKZQaAp%2BlHvpAyAPruIMTjgMqDDQbfWjFFuDxIt7TjIasNVblhSh92z0uoPuHsrjP1xaITbAMjeWSwA%2BkdvmbVRvr05MZKu3KUBOavod9c8Ce08ZS75WcZpgi1j0gecCL16hb1kClLrSfixMcrg8lQvHBYj%2FLn0ZFvCba8Wypbin4e8emOP9zo6QGQ%2BueCwouX6AS7u1SQzwhwEalnPQ0wiAkFNK%2F3vn%2Bxq8dE2sQfwXT1vPFvUOAUguJYAZPIeQ%2FjSLcYYgx27UtOvUswjT0HWRoEkp0bOAoGm6so%2FBeiScI5qxq7xon%2FoZbM%2BbfLa8cgMvJx2Ty3oTxzSb5JuoPsRvP8sFTxA%2BxnxWhJXTTiI0tC1yhI6Ms7NyE8zblwU4kbtE7pmw1zpnMuAX7JTx7MhFmNc0FaZ0Cna2L7LGwCj2ejq5oPBLMUQpj8gIMjyUhzfjJHcaGwmrkCiWNzFB49oRcQygsnsVVzrwElJGUnBCgFjurGsyBojtWgTa4ZwwzMegSbppDpMMLi174GOqUBVg2qXcpsAJTZQ2otYYynCieB4dwka%2BEyBAt4rARl4jZ4k5UboZF%2Fd6PHptUulrO3qffxB9Pqk6uvRDL1%2BEyjCg4Hydy7kMlC3A3elkd2qnV0Nun7Tz5ZXtgzhCQHYDMYlIHsxA6Js7XBco%2FAtejCAwgyuaoaJiXZ1ZvSfYL19Xjaz4%2FC0s678XxiPDRw4bwkgKTi1Z52PWBYS5eQQ8loi8IT3bSI&X-Amz-Signature=3a0ec729e5e9f4e9454577759490c8333b12d94c73807a608b4e7cc9792b91f8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UMFPZW6%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T220122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5cDdr09IC8oYS%2FjX3FdcK%2FHZRUKBCCk8b5u6MIBgd%2BgIgD%2Fm4q%2FW6VYgUU7gpnl5FrbP1Ni7DPdH8IXBS5WPlxdMq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKu%2BoBDN4YYG3aS6%2FircA8R3GUX0cPcr9eSqgHDY8a9d4bpDl1jvrLEfk2gziZFG%2BGjk755PqPHVAfv4eKZA9Em8iHEkbRIZLxGYXn6zxcnz0gGpIXWtT%2BRAuiqySvpOpcHnh%2FsKZQaAp%2BlHvpAyAPruIMTjgMqDDQbfWjFFuDxIt7TjIasNVblhSh92z0uoPuHsrjP1xaITbAMjeWSwA%2BkdvmbVRvr05MZKu3KUBOavod9c8Ce08ZS75WcZpgi1j0gecCL16hb1kClLrSfixMcrg8lQvHBYj%2FLn0ZFvCba8Wypbin4e8emOP9zo6QGQ%2BueCwouX6AS7u1SQzwhwEalnPQ0wiAkFNK%2F3vn%2Bxq8dE2sQfwXT1vPFvUOAUguJYAZPIeQ%2FjSLcYYgx27UtOvUswjT0HWRoEkp0bOAoGm6so%2FBeiScI5qxq7xon%2FoZbM%2BbfLa8cgMvJx2Ty3oTxzSb5JuoPsRvP8sFTxA%2BxnxWhJXTTiI0tC1yhI6Ms7NyE8zblwU4kbtE7pmw1zpnMuAX7JTx7MhFmNc0FaZ0Cna2L7LGwCj2ejq5oPBLMUQpj8gIMjyUhzfjJHcaGwmrkCiWNzFB49oRcQygsnsVVzrwElJGUnBCgFjurGsyBojtWgTa4ZwwzMegSbppDpMMLi174GOqUBVg2qXcpsAJTZQ2otYYynCieB4dwka%2BEyBAt4rARl4jZ4k5UboZF%2Fd6PHptUulrO3qffxB9Pqk6uvRDL1%2BEyjCg4Hydy7kMlC3A3elkd2qnV0Nun7Tz5ZXtgzhCQHYDMYlIHsxA6Js7XBco%2FAtejCAwgyuaoaJiXZ1ZvSfYL19Xjaz4%2FC0s678XxiPDRw4bwkgKTi1Z52PWBYS5eQQ8loi8IT3bSI&X-Amz-Signature=9055d16c2ec37cf0f19e32f41dd18241bcdd3c5c82482a2f94109bedd07d9e56&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UMFPZW6%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T220122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5cDdr09IC8oYS%2FjX3FdcK%2FHZRUKBCCk8b5u6MIBgd%2BgIgD%2Fm4q%2FW6VYgUU7gpnl5FrbP1Ni7DPdH8IXBS5WPlxdMq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKu%2BoBDN4YYG3aS6%2FircA8R3GUX0cPcr9eSqgHDY8a9d4bpDl1jvrLEfk2gziZFG%2BGjk755PqPHVAfv4eKZA9Em8iHEkbRIZLxGYXn6zxcnz0gGpIXWtT%2BRAuiqySvpOpcHnh%2FsKZQaAp%2BlHvpAyAPruIMTjgMqDDQbfWjFFuDxIt7TjIasNVblhSh92z0uoPuHsrjP1xaITbAMjeWSwA%2BkdvmbVRvr05MZKu3KUBOavod9c8Ce08ZS75WcZpgi1j0gecCL16hb1kClLrSfixMcrg8lQvHBYj%2FLn0ZFvCba8Wypbin4e8emOP9zo6QGQ%2BueCwouX6AS7u1SQzwhwEalnPQ0wiAkFNK%2F3vn%2Bxq8dE2sQfwXT1vPFvUOAUguJYAZPIeQ%2FjSLcYYgx27UtOvUswjT0HWRoEkp0bOAoGm6so%2FBeiScI5qxq7xon%2FoZbM%2BbfLa8cgMvJx2Ty3oTxzSb5JuoPsRvP8sFTxA%2BxnxWhJXTTiI0tC1yhI6Ms7NyE8zblwU4kbtE7pmw1zpnMuAX7JTx7MhFmNc0FaZ0Cna2L7LGwCj2ejq5oPBLMUQpj8gIMjyUhzfjJHcaGwmrkCiWNzFB49oRcQygsnsVVzrwElJGUnBCgFjurGsyBojtWgTa4ZwwzMegSbppDpMMLi174GOqUBVg2qXcpsAJTZQ2otYYynCieB4dwka%2BEyBAt4rARl4jZ4k5UboZF%2Fd6PHptUulrO3qffxB9Pqk6uvRDL1%2BEyjCg4Hydy7kMlC3A3elkd2qnV0Nun7Tz5ZXtgzhCQHYDMYlIHsxA6Js7XBco%2FAtejCAwgyuaoaJiXZ1ZvSfYL19Xjaz4%2FC0s678XxiPDRw4bwkgKTi1Z52PWBYS5eQQ8loi8IT3bSI&X-Amz-Signature=b6000b8416dabb159f6a0e8345888892c5619768155a251b7c97253957b876ad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UMFPZW6%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T220122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5cDdr09IC8oYS%2FjX3FdcK%2FHZRUKBCCk8b5u6MIBgd%2BgIgD%2Fm4q%2FW6VYgUU7gpnl5FrbP1Ni7DPdH8IXBS5WPlxdMq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKu%2BoBDN4YYG3aS6%2FircA8R3GUX0cPcr9eSqgHDY8a9d4bpDl1jvrLEfk2gziZFG%2BGjk755PqPHVAfv4eKZA9Em8iHEkbRIZLxGYXn6zxcnz0gGpIXWtT%2BRAuiqySvpOpcHnh%2FsKZQaAp%2BlHvpAyAPruIMTjgMqDDQbfWjFFuDxIt7TjIasNVblhSh92z0uoPuHsrjP1xaITbAMjeWSwA%2BkdvmbVRvr05MZKu3KUBOavod9c8Ce08ZS75WcZpgi1j0gecCL16hb1kClLrSfixMcrg8lQvHBYj%2FLn0ZFvCba8Wypbin4e8emOP9zo6QGQ%2BueCwouX6AS7u1SQzwhwEalnPQ0wiAkFNK%2F3vn%2Bxq8dE2sQfwXT1vPFvUOAUguJYAZPIeQ%2FjSLcYYgx27UtOvUswjT0HWRoEkp0bOAoGm6so%2FBeiScI5qxq7xon%2FoZbM%2BbfLa8cgMvJx2Ty3oTxzSb5JuoPsRvP8sFTxA%2BxnxWhJXTTiI0tC1yhI6Ms7NyE8zblwU4kbtE7pmw1zpnMuAX7JTx7MhFmNc0FaZ0Cna2L7LGwCj2ejq5oPBLMUQpj8gIMjyUhzfjJHcaGwmrkCiWNzFB49oRcQygsnsVVzrwElJGUnBCgFjurGsyBojtWgTa4ZwwzMegSbppDpMMLi174GOqUBVg2qXcpsAJTZQ2otYYynCieB4dwka%2BEyBAt4rARl4jZ4k5UboZF%2Fd6PHptUulrO3qffxB9Pqk6uvRDL1%2BEyjCg4Hydy7kMlC3A3elkd2qnV0Nun7Tz5ZXtgzhCQHYDMYlIHsxA6Js7XBco%2FAtejCAwgyuaoaJiXZ1ZvSfYL19Xjaz4%2FC0s678XxiPDRw4bwkgKTi1Z52PWBYS5eQQ8loi8IT3bSI&X-Amz-Signature=cad7b1c1e045ecc201bf05c4947b7eb62f2b2671aaee3e98cb7d238153dc5dbb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UMFPZW6%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T220122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5cDdr09IC8oYS%2FjX3FdcK%2FHZRUKBCCk8b5u6MIBgd%2BgIgD%2Fm4q%2FW6VYgUU7gpnl5FrbP1Ni7DPdH8IXBS5WPlxdMq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKu%2BoBDN4YYG3aS6%2FircA8R3GUX0cPcr9eSqgHDY8a9d4bpDl1jvrLEfk2gziZFG%2BGjk755PqPHVAfv4eKZA9Em8iHEkbRIZLxGYXn6zxcnz0gGpIXWtT%2BRAuiqySvpOpcHnh%2FsKZQaAp%2BlHvpAyAPruIMTjgMqDDQbfWjFFuDxIt7TjIasNVblhSh92z0uoPuHsrjP1xaITbAMjeWSwA%2BkdvmbVRvr05MZKu3KUBOavod9c8Ce08ZS75WcZpgi1j0gecCL16hb1kClLrSfixMcrg8lQvHBYj%2FLn0ZFvCba8Wypbin4e8emOP9zo6QGQ%2BueCwouX6AS7u1SQzwhwEalnPQ0wiAkFNK%2F3vn%2Bxq8dE2sQfwXT1vPFvUOAUguJYAZPIeQ%2FjSLcYYgx27UtOvUswjT0HWRoEkp0bOAoGm6so%2FBeiScI5qxq7xon%2FoZbM%2BbfLa8cgMvJx2Ty3oTxzSb5JuoPsRvP8sFTxA%2BxnxWhJXTTiI0tC1yhI6Ms7NyE8zblwU4kbtE7pmw1zpnMuAX7JTx7MhFmNc0FaZ0Cna2L7LGwCj2ejq5oPBLMUQpj8gIMjyUhzfjJHcaGwmrkCiWNzFB49oRcQygsnsVVzrwElJGUnBCgFjurGsyBojtWgTa4ZwwzMegSbppDpMMLi174GOqUBVg2qXcpsAJTZQ2otYYynCieB4dwka%2BEyBAt4rARl4jZ4k5UboZF%2Fd6PHptUulrO3qffxB9Pqk6uvRDL1%2BEyjCg4Hydy7kMlC3A3elkd2qnV0Nun7Tz5ZXtgzhCQHYDMYlIHsxA6Js7XBco%2FAtejCAwgyuaoaJiXZ1ZvSfYL19Xjaz4%2FC0s678XxiPDRw4bwkgKTi1Z52PWBYS5eQQ8loi8IT3bSI&X-Amz-Signature=6877745e25ae9971cba85c365bac59b11bccab7469b965d0be2553d123c023dc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UMFPZW6%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T220122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5cDdr09IC8oYS%2FjX3FdcK%2FHZRUKBCCk8b5u6MIBgd%2BgIgD%2Fm4q%2FW6VYgUU7gpnl5FrbP1Ni7DPdH8IXBS5WPlxdMq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKu%2BoBDN4YYG3aS6%2FircA8R3GUX0cPcr9eSqgHDY8a9d4bpDl1jvrLEfk2gziZFG%2BGjk755PqPHVAfv4eKZA9Em8iHEkbRIZLxGYXn6zxcnz0gGpIXWtT%2BRAuiqySvpOpcHnh%2FsKZQaAp%2BlHvpAyAPruIMTjgMqDDQbfWjFFuDxIt7TjIasNVblhSh92z0uoPuHsrjP1xaITbAMjeWSwA%2BkdvmbVRvr05MZKu3KUBOavod9c8Ce08ZS75WcZpgi1j0gecCL16hb1kClLrSfixMcrg8lQvHBYj%2FLn0ZFvCba8Wypbin4e8emOP9zo6QGQ%2BueCwouX6AS7u1SQzwhwEalnPQ0wiAkFNK%2F3vn%2Bxq8dE2sQfwXT1vPFvUOAUguJYAZPIeQ%2FjSLcYYgx27UtOvUswjT0HWRoEkp0bOAoGm6so%2FBeiScI5qxq7xon%2FoZbM%2BbfLa8cgMvJx2Ty3oTxzSb5JuoPsRvP8sFTxA%2BxnxWhJXTTiI0tC1yhI6Ms7NyE8zblwU4kbtE7pmw1zpnMuAX7JTx7MhFmNc0FaZ0Cna2L7LGwCj2ejq5oPBLMUQpj8gIMjyUhzfjJHcaGwmrkCiWNzFB49oRcQygsnsVVzrwElJGUnBCgFjurGsyBojtWgTa4ZwwzMegSbppDpMMLi174GOqUBVg2qXcpsAJTZQ2otYYynCieB4dwka%2BEyBAt4rARl4jZ4k5UboZF%2Fd6PHptUulrO3qffxB9Pqk6uvRDL1%2BEyjCg4Hydy7kMlC3A3elkd2qnV0Nun7Tz5ZXtgzhCQHYDMYlIHsxA6Js7XBco%2FAtejCAwgyuaoaJiXZ1ZvSfYL19Xjaz4%2FC0s678XxiPDRw4bwkgKTi1Z52PWBYS5eQQ8loi8IT3bSI&X-Amz-Signature=76fa3ac16450f323093da859e15fb5f431ce9b62c06792251cbff340301a6e0e&X-Amz-SignedHeaders=host&x-id=GetObject)
