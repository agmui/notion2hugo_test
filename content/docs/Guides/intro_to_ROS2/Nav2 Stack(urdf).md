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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OZ5CM2J%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T041852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIAhYpHQViKcoRUmG8zhyAPm5QujQW0I4rgTvCV8bE7u0AiAGWWPa5lAggJJPsG84VJYCgq2gw3ZgFXYz2nWC43NnrCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMsyFLKFYEX7NM6saNKtwD8IFV6mN26xYRyGN85RU%2B6pptXBm1tfMw6TzP19Nt%2BokcK7KV7CMlVp8LMvtYaLwg1rUx4JTqVXMyaaqHtw3yg85L%2BbN8bLrlLU4lldGhDRylIKfivqbkiZCjwbNC%2B6UgsuSPGvFCaZzS97WxzsZpamvzy6iYAyCfLj7JciDPfWuXG81ZuJ3nmdlt41uKIPaw00A7b9wHqs%2Fs9Z7tsHBJ608PnJPdqjrzeGNk1bM35dTpZolMvq6g4zpJh2jVP3M%2BQ2zWOc1XF%2Fah6UO88YtdD%2Fds%2F0bzmK8R56Ea6yUW2P0SB8584TIo1PHDEnK6d2rI2Mm3N3sW21%2Ff8w2tM3l4XFX1QH%2BmVw%2F%2BGfJcLw1A8suzAjj4A2TR3Q1kPC2vROVHMrs3GSEi15pUQ0lanvNV%2Fx3wIAe59q%2FV1%2BmFdxYo2Ge7dZVL1EyZpYidChPniqvkH6L4v%2Fpj52NxMMLBHG0qtn19TxDef27vx0eUYEuu5u9rYua2XZ70LW67DxGey98WUEiOGaa6BZtVxR8iU%2BB1qzSEbarkf0BIygF2wdpKp3mkLOTVx9BEFeNH9hFBVoiwGDdvj8dzZiOtBomN9rtis61RHsfaCPMscq9zDPUJ7wcXLJEOTW2QqhLo2HIwvqD4wgY6pgFtzHfihhnWXvhl7JgIX01KSqgT6ZRGUc4I6xmUt31fI%2BM%2FK%2BFMQZHF28fTPmDGhNcsrQSDJWZ1JwS%2FYV4nWK%2F83Q3ouwtTCnCqN11cfVybpnfyiYTM9y1AQtYOHtV77PQFSsAXF9jWCgBkKbOMLn0q8Vgka0snUjK0%2BxIjVhmZiYxo21Ps5SP8auWESLvCx2wUjGGAHuYoLXE0f3QtijXvDjrh4MWa&X-Amz-Signature=23ecb99147a91a9ad68cc069df523c42733421ac6f780e76a66b01c402724649&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OZ5CM2J%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T041852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIAhYpHQViKcoRUmG8zhyAPm5QujQW0I4rgTvCV8bE7u0AiAGWWPa5lAggJJPsG84VJYCgq2gw3ZgFXYz2nWC43NnrCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMsyFLKFYEX7NM6saNKtwD8IFV6mN26xYRyGN85RU%2B6pptXBm1tfMw6TzP19Nt%2BokcK7KV7CMlVp8LMvtYaLwg1rUx4JTqVXMyaaqHtw3yg85L%2BbN8bLrlLU4lldGhDRylIKfivqbkiZCjwbNC%2B6UgsuSPGvFCaZzS97WxzsZpamvzy6iYAyCfLj7JciDPfWuXG81ZuJ3nmdlt41uKIPaw00A7b9wHqs%2Fs9Z7tsHBJ608PnJPdqjrzeGNk1bM35dTpZolMvq6g4zpJh2jVP3M%2BQ2zWOc1XF%2Fah6UO88YtdD%2Fds%2F0bzmK8R56Ea6yUW2P0SB8584TIo1PHDEnK6d2rI2Mm3N3sW21%2Ff8w2tM3l4XFX1QH%2BmVw%2F%2BGfJcLw1A8suzAjj4A2TR3Q1kPC2vROVHMrs3GSEi15pUQ0lanvNV%2Fx3wIAe59q%2FV1%2BmFdxYo2Ge7dZVL1EyZpYidChPniqvkH6L4v%2Fpj52NxMMLBHG0qtn19TxDef27vx0eUYEuu5u9rYua2XZ70LW67DxGey98WUEiOGaa6BZtVxR8iU%2BB1qzSEbarkf0BIygF2wdpKp3mkLOTVx9BEFeNH9hFBVoiwGDdvj8dzZiOtBomN9rtis61RHsfaCPMscq9zDPUJ7wcXLJEOTW2QqhLo2HIwvqD4wgY6pgFtzHfihhnWXvhl7JgIX01KSqgT6ZRGUc4I6xmUt31fI%2BM%2FK%2BFMQZHF28fTPmDGhNcsrQSDJWZ1JwS%2FYV4nWK%2F83Q3ouwtTCnCqN11cfVybpnfyiYTM9y1AQtYOHtV77PQFSsAXF9jWCgBkKbOMLn0q8Vgka0snUjK0%2BxIjVhmZiYxo21Ps5SP8auWESLvCx2wUjGGAHuYoLXE0f3QtijXvDjrh4MWa&X-Amz-Signature=d9cf3b216adaf5828480c9f29161c52eca812977d3684069d58f7b76efad3056&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OZ5CM2J%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T041852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIAhYpHQViKcoRUmG8zhyAPm5QujQW0I4rgTvCV8bE7u0AiAGWWPa5lAggJJPsG84VJYCgq2gw3ZgFXYz2nWC43NnrCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMsyFLKFYEX7NM6saNKtwD8IFV6mN26xYRyGN85RU%2B6pptXBm1tfMw6TzP19Nt%2BokcK7KV7CMlVp8LMvtYaLwg1rUx4JTqVXMyaaqHtw3yg85L%2BbN8bLrlLU4lldGhDRylIKfivqbkiZCjwbNC%2B6UgsuSPGvFCaZzS97WxzsZpamvzy6iYAyCfLj7JciDPfWuXG81ZuJ3nmdlt41uKIPaw00A7b9wHqs%2Fs9Z7tsHBJ608PnJPdqjrzeGNk1bM35dTpZolMvq6g4zpJh2jVP3M%2BQ2zWOc1XF%2Fah6UO88YtdD%2Fds%2F0bzmK8R56Ea6yUW2P0SB8584TIo1PHDEnK6d2rI2Mm3N3sW21%2Ff8w2tM3l4XFX1QH%2BmVw%2F%2BGfJcLw1A8suzAjj4A2TR3Q1kPC2vROVHMrs3GSEi15pUQ0lanvNV%2Fx3wIAe59q%2FV1%2BmFdxYo2Ge7dZVL1EyZpYidChPniqvkH6L4v%2Fpj52NxMMLBHG0qtn19TxDef27vx0eUYEuu5u9rYua2XZ70LW67DxGey98WUEiOGaa6BZtVxR8iU%2BB1qzSEbarkf0BIygF2wdpKp3mkLOTVx9BEFeNH9hFBVoiwGDdvj8dzZiOtBomN9rtis61RHsfaCPMscq9zDPUJ7wcXLJEOTW2QqhLo2HIwvqD4wgY6pgFtzHfihhnWXvhl7JgIX01KSqgT6ZRGUc4I6xmUt31fI%2BM%2FK%2BFMQZHF28fTPmDGhNcsrQSDJWZ1JwS%2FYV4nWK%2F83Q3ouwtTCnCqN11cfVybpnfyiYTM9y1AQtYOHtV77PQFSsAXF9jWCgBkKbOMLn0q8Vgka0snUjK0%2BxIjVhmZiYxo21Ps5SP8auWESLvCx2wUjGGAHuYoLXE0f3QtijXvDjrh4MWa&X-Amz-Signature=1fb909b5c262290eeef252877cc2620b200512a00dcb5a9e5e114a8394d8f68f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OZ5CM2J%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T041852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIAhYpHQViKcoRUmG8zhyAPm5QujQW0I4rgTvCV8bE7u0AiAGWWPa5lAggJJPsG84VJYCgq2gw3ZgFXYz2nWC43NnrCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMsyFLKFYEX7NM6saNKtwD8IFV6mN26xYRyGN85RU%2B6pptXBm1tfMw6TzP19Nt%2BokcK7KV7CMlVp8LMvtYaLwg1rUx4JTqVXMyaaqHtw3yg85L%2BbN8bLrlLU4lldGhDRylIKfivqbkiZCjwbNC%2B6UgsuSPGvFCaZzS97WxzsZpamvzy6iYAyCfLj7JciDPfWuXG81ZuJ3nmdlt41uKIPaw00A7b9wHqs%2Fs9Z7tsHBJ608PnJPdqjrzeGNk1bM35dTpZolMvq6g4zpJh2jVP3M%2BQ2zWOc1XF%2Fah6UO88YtdD%2Fds%2F0bzmK8R56Ea6yUW2P0SB8584TIo1PHDEnK6d2rI2Mm3N3sW21%2Ff8w2tM3l4XFX1QH%2BmVw%2F%2BGfJcLw1A8suzAjj4A2TR3Q1kPC2vROVHMrs3GSEi15pUQ0lanvNV%2Fx3wIAe59q%2FV1%2BmFdxYo2Ge7dZVL1EyZpYidChPniqvkH6L4v%2Fpj52NxMMLBHG0qtn19TxDef27vx0eUYEuu5u9rYua2XZ70LW67DxGey98WUEiOGaa6BZtVxR8iU%2BB1qzSEbarkf0BIygF2wdpKp3mkLOTVx9BEFeNH9hFBVoiwGDdvj8dzZiOtBomN9rtis61RHsfaCPMscq9zDPUJ7wcXLJEOTW2QqhLo2HIwvqD4wgY6pgFtzHfihhnWXvhl7JgIX01KSqgT6ZRGUc4I6xmUt31fI%2BM%2FK%2BFMQZHF28fTPmDGhNcsrQSDJWZ1JwS%2FYV4nWK%2F83Q3ouwtTCnCqN11cfVybpnfyiYTM9y1AQtYOHtV77PQFSsAXF9jWCgBkKbOMLn0q8Vgka0snUjK0%2BxIjVhmZiYxo21Ps5SP8auWESLvCx2wUjGGAHuYoLXE0f3QtijXvDjrh4MWa&X-Amz-Signature=395673a3d63bc33dccde4927e3c078c19648cc7ef25df27ac73f3b570aa5e6f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OZ5CM2J%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T041852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIAhYpHQViKcoRUmG8zhyAPm5QujQW0I4rgTvCV8bE7u0AiAGWWPa5lAggJJPsG84VJYCgq2gw3ZgFXYz2nWC43NnrCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMsyFLKFYEX7NM6saNKtwD8IFV6mN26xYRyGN85RU%2B6pptXBm1tfMw6TzP19Nt%2BokcK7KV7CMlVp8LMvtYaLwg1rUx4JTqVXMyaaqHtw3yg85L%2BbN8bLrlLU4lldGhDRylIKfivqbkiZCjwbNC%2B6UgsuSPGvFCaZzS97WxzsZpamvzy6iYAyCfLj7JciDPfWuXG81ZuJ3nmdlt41uKIPaw00A7b9wHqs%2Fs9Z7tsHBJ608PnJPdqjrzeGNk1bM35dTpZolMvq6g4zpJh2jVP3M%2BQ2zWOc1XF%2Fah6UO88YtdD%2Fds%2F0bzmK8R56Ea6yUW2P0SB8584TIo1PHDEnK6d2rI2Mm3N3sW21%2Ff8w2tM3l4XFX1QH%2BmVw%2F%2BGfJcLw1A8suzAjj4A2TR3Q1kPC2vROVHMrs3GSEi15pUQ0lanvNV%2Fx3wIAe59q%2FV1%2BmFdxYo2Ge7dZVL1EyZpYidChPniqvkH6L4v%2Fpj52NxMMLBHG0qtn19TxDef27vx0eUYEuu5u9rYua2XZ70LW67DxGey98WUEiOGaa6BZtVxR8iU%2BB1qzSEbarkf0BIygF2wdpKp3mkLOTVx9BEFeNH9hFBVoiwGDdvj8dzZiOtBomN9rtis61RHsfaCPMscq9zDPUJ7wcXLJEOTW2QqhLo2HIwvqD4wgY6pgFtzHfihhnWXvhl7JgIX01KSqgT6ZRGUc4I6xmUt31fI%2BM%2FK%2BFMQZHF28fTPmDGhNcsrQSDJWZ1JwS%2FYV4nWK%2F83Q3ouwtTCnCqN11cfVybpnfyiYTM9y1AQtYOHtV77PQFSsAXF9jWCgBkKbOMLn0q8Vgka0snUjK0%2BxIjVhmZiYxo21Ps5SP8auWESLvCx2wUjGGAHuYoLXE0f3QtijXvDjrh4MWa&X-Amz-Signature=e47183032808081622570ac005266b77157470df1710d84fdb1c565311b27ea3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OZ5CM2J%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T041852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIAhYpHQViKcoRUmG8zhyAPm5QujQW0I4rgTvCV8bE7u0AiAGWWPa5lAggJJPsG84VJYCgq2gw3ZgFXYz2nWC43NnrCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMsyFLKFYEX7NM6saNKtwD8IFV6mN26xYRyGN85RU%2B6pptXBm1tfMw6TzP19Nt%2BokcK7KV7CMlVp8LMvtYaLwg1rUx4JTqVXMyaaqHtw3yg85L%2BbN8bLrlLU4lldGhDRylIKfivqbkiZCjwbNC%2B6UgsuSPGvFCaZzS97WxzsZpamvzy6iYAyCfLj7JciDPfWuXG81ZuJ3nmdlt41uKIPaw00A7b9wHqs%2Fs9Z7tsHBJ608PnJPdqjrzeGNk1bM35dTpZolMvq6g4zpJh2jVP3M%2BQ2zWOc1XF%2Fah6UO88YtdD%2Fds%2F0bzmK8R56Ea6yUW2P0SB8584TIo1PHDEnK6d2rI2Mm3N3sW21%2Ff8w2tM3l4XFX1QH%2BmVw%2F%2BGfJcLw1A8suzAjj4A2TR3Q1kPC2vROVHMrs3GSEi15pUQ0lanvNV%2Fx3wIAe59q%2FV1%2BmFdxYo2Ge7dZVL1EyZpYidChPniqvkH6L4v%2Fpj52NxMMLBHG0qtn19TxDef27vx0eUYEuu5u9rYua2XZ70LW67DxGey98WUEiOGaa6BZtVxR8iU%2BB1qzSEbarkf0BIygF2wdpKp3mkLOTVx9BEFeNH9hFBVoiwGDdvj8dzZiOtBomN9rtis61RHsfaCPMscq9zDPUJ7wcXLJEOTW2QqhLo2HIwvqD4wgY6pgFtzHfihhnWXvhl7JgIX01KSqgT6ZRGUc4I6xmUt31fI%2BM%2FK%2BFMQZHF28fTPmDGhNcsrQSDJWZ1JwS%2FYV4nWK%2F83Q3ouwtTCnCqN11cfVybpnfyiYTM9y1AQtYOHtV77PQFSsAXF9jWCgBkKbOMLn0q8Vgka0snUjK0%2BxIjVhmZiYxo21Ps5SP8auWESLvCx2wUjGGAHuYoLXE0f3QtijXvDjrh4MWa&X-Amz-Signature=0a2f3590f2c353fe83fea0644ff37fea96b33220b3aa1a8e4630a3ff3c895047&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
