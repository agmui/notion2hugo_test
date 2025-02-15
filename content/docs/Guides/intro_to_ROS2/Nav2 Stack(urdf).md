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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UIRA653%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T160726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCIGFdlNsY2JunNkj0xfKgvmcGClPAHGt36v8i67CUHLwIgDAlL9ybYqeumKEcHrmAodz6wz8BGEAT68H8K%2FgMVWS0q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDE88M1NRqzfvKsIU%2FyrcA6gkzAHpAhfASdpMN%2Bjy9HXRDqKuFgAWyGb%2BKxCCjkQBXgUKY%2B983it%2BP2M24HK7IoVqJwfLCpRVz1DdCHaj85z%2FtEHtcjX0PUFURBP4bAiBcYWPFsgYaZcgniBx91ec%2BtuL4rzO0XogP%2F9n%2B1kbTuh8t3nmYFB0rjyuQon79tFjqsUhWntgkPmE0p6gatLIJWX1WyF7QFBKj50kmgMkswG9Dx%2FYm6tNS4Cspaz1XpRzIIsW7mHcviGJ87UaW0APuH1F%2FpywNqP1YGmS66KYn6sEPvNgM%2BY%2FtFHw%2B%2FnlTXVYZXdlNOXvfMCjiF5%2B7XfuQbQkGyJOuTnH0djAc9X0A3NEg9pteREv80QTxf6VMDBom7bLJghZe9beNLOIBz6iQMCVU6bkz3W%2FQb1TFC2byP983I6m8f2qoHMPv38GTLZ59MqxdTye0eePeZz0Me85HbLI%2FBg6lCZri8y4j74tj4QL5JjgOT%2B3VLy2p3gDEhm1ul%2Bt%2FeEf6jEn0L0AiMf5izRv70KXBiixpUGVUkmSbTioeOjzNX3jkZ9B2DRZ7fVNn8g%2Fy1MTEgQooCIXOkn6cyoA1yNhjIvZUIu64mZlsZwLAX28uaRo6MD4IZm9qlvB%2FsKyLFwFnAHDScWVMIvGwr0GOqUBPpwk2QznuZMS%2BioYqdkxgDMvcairHGhCOSdw0ZGMSZ3fWQGlaWgGshQNZez%2FnbHxkbFfRhvtzwQuJg1iZIR%2BaOgG6MCt2K1f00dEcmXxY14PcWfe96sY%2Fjkn%2BguxrOI5WJ7vpgtisl8ExwnEaOLxjHd3f%2BZNdlHasyN39s2gOgCFlC79QZGcYYPaDfFOzVM2skaDiYd6St6zq%2FlJi5%2BHdA71k%2B1o&X-Amz-Signature=7227db15d921dc9a79c10cf2f7780d95e6c53022f2d61dc0c7956d079c784ed3&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UIRA653%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T160726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCIGFdlNsY2JunNkj0xfKgvmcGClPAHGt36v8i67CUHLwIgDAlL9ybYqeumKEcHrmAodz6wz8BGEAT68H8K%2FgMVWS0q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDE88M1NRqzfvKsIU%2FyrcA6gkzAHpAhfASdpMN%2Bjy9HXRDqKuFgAWyGb%2BKxCCjkQBXgUKY%2B983it%2BP2M24HK7IoVqJwfLCpRVz1DdCHaj85z%2FtEHtcjX0PUFURBP4bAiBcYWPFsgYaZcgniBx91ec%2BtuL4rzO0XogP%2F9n%2B1kbTuh8t3nmYFB0rjyuQon79tFjqsUhWntgkPmE0p6gatLIJWX1WyF7QFBKj50kmgMkswG9Dx%2FYm6tNS4Cspaz1XpRzIIsW7mHcviGJ87UaW0APuH1F%2FpywNqP1YGmS66KYn6sEPvNgM%2BY%2FtFHw%2B%2FnlTXVYZXdlNOXvfMCjiF5%2B7XfuQbQkGyJOuTnH0djAc9X0A3NEg9pteREv80QTxf6VMDBom7bLJghZe9beNLOIBz6iQMCVU6bkz3W%2FQb1TFC2byP983I6m8f2qoHMPv38GTLZ59MqxdTye0eePeZz0Me85HbLI%2FBg6lCZri8y4j74tj4QL5JjgOT%2B3VLy2p3gDEhm1ul%2Bt%2FeEf6jEn0L0AiMf5izRv70KXBiixpUGVUkmSbTioeOjzNX3jkZ9B2DRZ7fVNn8g%2Fy1MTEgQooCIXOkn6cyoA1yNhjIvZUIu64mZlsZwLAX28uaRo6MD4IZm9qlvB%2FsKyLFwFnAHDScWVMIvGwr0GOqUBPpwk2QznuZMS%2BioYqdkxgDMvcairHGhCOSdw0ZGMSZ3fWQGlaWgGshQNZez%2FnbHxkbFfRhvtzwQuJg1iZIR%2BaOgG6MCt2K1f00dEcmXxY14PcWfe96sY%2Fjkn%2BguxrOI5WJ7vpgtisl8ExwnEaOLxjHd3f%2BZNdlHasyN39s2gOgCFlC79QZGcYYPaDfFOzVM2skaDiYd6St6zq%2FlJi5%2BHdA71k%2B1o&X-Amz-Signature=dc6a70ba43ac821aa62aa97913815a9244b6e045f9cbfe75ddb8f4df4dc6befc&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UIRA653%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T160726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCIGFdlNsY2JunNkj0xfKgvmcGClPAHGt36v8i67CUHLwIgDAlL9ybYqeumKEcHrmAodz6wz8BGEAT68H8K%2FgMVWS0q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDE88M1NRqzfvKsIU%2FyrcA6gkzAHpAhfASdpMN%2Bjy9HXRDqKuFgAWyGb%2BKxCCjkQBXgUKY%2B983it%2BP2M24HK7IoVqJwfLCpRVz1DdCHaj85z%2FtEHtcjX0PUFURBP4bAiBcYWPFsgYaZcgniBx91ec%2BtuL4rzO0XogP%2F9n%2B1kbTuh8t3nmYFB0rjyuQon79tFjqsUhWntgkPmE0p6gatLIJWX1WyF7QFBKj50kmgMkswG9Dx%2FYm6tNS4Cspaz1XpRzIIsW7mHcviGJ87UaW0APuH1F%2FpywNqP1YGmS66KYn6sEPvNgM%2BY%2FtFHw%2B%2FnlTXVYZXdlNOXvfMCjiF5%2B7XfuQbQkGyJOuTnH0djAc9X0A3NEg9pteREv80QTxf6VMDBom7bLJghZe9beNLOIBz6iQMCVU6bkz3W%2FQb1TFC2byP983I6m8f2qoHMPv38GTLZ59MqxdTye0eePeZz0Me85HbLI%2FBg6lCZri8y4j74tj4QL5JjgOT%2B3VLy2p3gDEhm1ul%2Bt%2FeEf6jEn0L0AiMf5izRv70KXBiixpUGVUkmSbTioeOjzNX3jkZ9B2DRZ7fVNn8g%2Fy1MTEgQooCIXOkn6cyoA1yNhjIvZUIu64mZlsZwLAX28uaRo6MD4IZm9qlvB%2FsKyLFwFnAHDScWVMIvGwr0GOqUBPpwk2QznuZMS%2BioYqdkxgDMvcairHGhCOSdw0ZGMSZ3fWQGlaWgGshQNZez%2FnbHxkbFfRhvtzwQuJg1iZIR%2BaOgG6MCt2K1f00dEcmXxY14PcWfe96sY%2Fjkn%2BguxrOI5WJ7vpgtisl8ExwnEaOLxjHd3f%2BZNdlHasyN39s2gOgCFlC79QZGcYYPaDfFOzVM2skaDiYd6St6zq%2FlJi5%2BHdA71k%2B1o&X-Amz-Signature=d19a5c79476175505cbe974bc6080c758ea0da820a6aaa075e7ce38b3c9d3777&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UIRA653%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T160726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCIGFdlNsY2JunNkj0xfKgvmcGClPAHGt36v8i67CUHLwIgDAlL9ybYqeumKEcHrmAodz6wz8BGEAT68H8K%2FgMVWS0q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDE88M1NRqzfvKsIU%2FyrcA6gkzAHpAhfASdpMN%2Bjy9HXRDqKuFgAWyGb%2BKxCCjkQBXgUKY%2B983it%2BP2M24HK7IoVqJwfLCpRVz1DdCHaj85z%2FtEHtcjX0PUFURBP4bAiBcYWPFsgYaZcgniBx91ec%2BtuL4rzO0XogP%2F9n%2B1kbTuh8t3nmYFB0rjyuQon79tFjqsUhWntgkPmE0p6gatLIJWX1WyF7QFBKj50kmgMkswG9Dx%2FYm6tNS4Cspaz1XpRzIIsW7mHcviGJ87UaW0APuH1F%2FpywNqP1YGmS66KYn6sEPvNgM%2BY%2FtFHw%2B%2FnlTXVYZXdlNOXvfMCjiF5%2B7XfuQbQkGyJOuTnH0djAc9X0A3NEg9pteREv80QTxf6VMDBom7bLJghZe9beNLOIBz6iQMCVU6bkz3W%2FQb1TFC2byP983I6m8f2qoHMPv38GTLZ59MqxdTye0eePeZz0Me85HbLI%2FBg6lCZri8y4j74tj4QL5JjgOT%2B3VLy2p3gDEhm1ul%2Bt%2FeEf6jEn0L0AiMf5izRv70KXBiixpUGVUkmSbTioeOjzNX3jkZ9B2DRZ7fVNn8g%2Fy1MTEgQooCIXOkn6cyoA1yNhjIvZUIu64mZlsZwLAX28uaRo6MD4IZm9qlvB%2FsKyLFwFnAHDScWVMIvGwr0GOqUBPpwk2QznuZMS%2BioYqdkxgDMvcairHGhCOSdw0ZGMSZ3fWQGlaWgGshQNZez%2FnbHxkbFfRhvtzwQuJg1iZIR%2BaOgG6MCt2K1f00dEcmXxY14PcWfe96sY%2Fjkn%2BguxrOI5WJ7vpgtisl8ExwnEaOLxjHd3f%2BZNdlHasyN39s2gOgCFlC79QZGcYYPaDfFOzVM2skaDiYd6St6zq%2FlJi5%2BHdA71k%2B1o&X-Amz-Signature=39ffe7f7f3af44a581eb1d8aa3f132ec7e272f72bda3bee9ffe8da8abd1fe947&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UIRA653%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T160726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCIGFdlNsY2JunNkj0xfKgvmcGClPAHGt36v8i67CUHLwIgDAlL9ybYqeumKEcHrmAodz6wz8BGEAT68H8K%2FgMVWS0q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDE88M1NRqzfvKsIU%2FyrcA6gkzAHpAhfASdpMN%2Bjy9HXRDqKuFgAWyGb%2BKxCCjkQBXgUKY%2B983it%2BP2M24HK7IoVqJwfLCpRVz1DdCHaj85z%2FtEHtcjX0PUFURBP4bAiBcYWPFsgYaZcgniBx91ec%2BtuL4rzO0XogP%2F9n%2B1kbTuh8t3nmYFB0rjyuQon79tFjqsUhWntgkPmE0p6gatLIJWX1WyF7QFBKj50kmgMkswG9Dx%2FYm6tNS4Cspaz1XpRzIIsW7mHcviGJ87UaW0APuH1F%2FpywNqP1YGmS66KYn6sEPvNgM%2BY%2FtFHw%2B%2FnlTXVYZXdlNOXvfMCjiF5%2B7XfuQbQkGyJOuTnH0djAc9X0A3NEg9pteREv80QTxf6VMDBom7bLJghZe9beNLOIBz6iQMCVU6bkz3W%2FQb1TFC2byP983I6m8f2qoHMPv38GTLZ59MqxdTye0eePeZz0Me85HbLI%2FBg6lCZri8y4j74tj4QL5JjgOT%2B3VLy2p3gDEhm1ul%2Bt%2FeEf6jEn0L0AiMf5izRv70KXBiixpUGVUkmSbTioeOjzNX3jkZ9B2DRZ7fVNn8g%2Fy1MTEgQooCIXOkn6cyoA1yNhjIvZUIu64mZlsZwLAX28uaRo6MD4IZm9qlvB%2FsKyLFwFnAHDScWVMIvGwr0GOqUBPpwk2QznuZMS%2BioYqdkxgDMvcairHGhCOSdw0ZGMSZ3fWQGlaWgGshQNZez%2FnbHxkbFfRhvtzwQuJg1iZIR%2BaOgG6MCt2K1f00dEcmXxY14PcWfe96sY%2Fjkn%2BguxrOI5WJ7vpgtisl8ExwnEaOLxjHd3f%2BZNdlHasyN39s2gOgCFlC79QZGcYYPaDfFOzVM2skaDiYd6St6zq%2FlJi5%2BHdA71k%2B1o&X-Amz-Signature=b403178df8e83a451a8e32a1059cb376a1e6ea0a9ffd655655b91c932351dee2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UIRA653%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T160726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQCIGFdlNsY2JunNkj0xfKgvmcGClPAHGt36v8i67CUHLwIgDAlL9ybYqeumKEcHrmAodz6wz8BGEAT68H8K%2FgMVWS0q%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDE88M1NRqzfvKsIU%2FyrcA6gkzAHpAhfASdpMN%2Bjy9HXRDqKuFgAWyGb%2BKxCCjkQBXgUKY%2B983it%2BP2M24HK7IoVqJwfLCpRVz1DdCHaj85z%2FtEHtcjX0PUFURBP4bAiBcYWPFsgYaZcgniBx91ec%2BtuL4rzO0XogP%2F9n%2B1kbTuh8t3nmYFB0rjyuQon79tFjqsUhWntgkPmE0p6gatLIJWX1WyF7QFBKj50kmgMkswG9Dx%2FYm6tNS4Cspaz1XpRzIIsW7mHcviGJ87UaW0APuH1F%2FpywNqP1YGmS66KYn6sEPvNgM%2BY%2FtFHw%2B%2FnlTXVYZXdlNOXvfMCjiF5%2B7XfuQbQkGyJOuTnH0djAc9X0A3NEg9pteREv80QTxf6VMDBom7bLJghZe9beNLOIBz6iQMCVU6bkz3W%2FQb1TFC2byP983I6m8f2qoHMPv38GTLZ59MqxdTye0eePeZz0Me85HbLI%2FBg6lCZri8y4j74tj4QL5JjgOT%2B3VLy2p3gDEhm1ul%2Bt%2FeEf6jEn0L0AiMf5izRv70KXBiixpUGVUkmSbTioeOjzNX3jkZ9B2DRZ7fVNn8g%2Fy1MTEgQooCIXOkn6cyoA1yNhjIvZUIu64mZlsZwLAX28uaRo6MD4IZm9qlvB%2FsKyLFwFnAHDScWVMIvGwr0GOqUBPpwk2QznuZMS%2BioYqdkxgDMvcairHGhCOSdw0ZGMSZ3fWQGlaWgGshQNZez%2FnbHxkbFfRhvtzwQuJg1iZIR%2BaOgG6MCt2K1f00dEcmXxY14PcWfe96sY%2Fjkn%2BguxrOI5WJ7vpgtisl8ExwnEaOLxjHd3f%2BZNdlHasyN39s2gOgCFlC79QZGcYYPaDfFOzVM2skaDiYd6St6zq%2FlJi5%2BHdA71k%2B1o&X-Amz-Signature=38d3302417863e8f03f66dcd6b44e1510340a242cdb196d5f4c1b498b5fa6377&X-Amz-SignedHeaders=host&x-id=GetObject)
