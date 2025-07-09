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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US3VU3DD%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T071135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRCFRWiYDWe9Asdwh0wTAhhNoHZk7GRrExhJO4K42QyAiEApzmmeAWEONmr%2BPtHZfL%2F%2Bl9uAca1BQo4k3mEX9kNxaAqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEziUfVOUCahAy6FCrcAx9dmKheHeGit8I3bTZw40%2BHC%2BVEVnIzrIwa3mnVvfQej8ptLkO%2FxSKjTaWskTCXkIRvAuNPzSWszQFPv7xf%2BaXYJ3DsLkavHI8tHp3Q2usRTFnWMkGppW7sTIcUntAtgqVhY1iksAV0fPj03yyRnVcOU8fuy4Zfn%2FkzrLsE2vD0drjxhMkYs3Lk%2FOXuKRx2Gc%2Fgk%2F5m7GuCdh%2F0QTlK%2BAXjDKXRT7ddCAyk69akr2mdA0UOsmja7G8AVD7hWvZSg8mQ5kyCZBEjxycRqC%2F8HT3vAUx9kHo1x02N%2FFRBdTQWzdmVTGKhbCNd3dq1c3AFuyvX7rZ4wj5tQlCPh3Ck94SWSq3ELr%2BA7ka9LlaBrPX%2Ful1N6fgCZQC0C5AGLtgRsOa%2BVCsbEhbtlJ%2F6T%2FwO5MjJbTidtFgXB44uARtPCUGxnXjxZdSr5Y3hcNDfBgWd2zd6WoinVvELkQeB2aXjHeON3qEE0J9Kg7RkEY%2BWwZamiVV4fhNmyAVeBD0fV9UMTuIoxEI582ukcfyxOT1%2BqwvDGypAiP5tQ128XncKGqG%2FJ0DxEoOVHUXQZnJXxhj%2FstzME7%2BuHjq8c0zadDXxyy3U0kx0x%2BPmi6308cUO9KkZKDz5Z8db1khLic%2BiMPaiuMMGOqUBmqlHgxdiKIrphz%2FWv2wRyMIbDMJof4rnmZ3DUSlamMTd7tOIiaYqO8HlxjPu9uDH2nIOz4yfnzQ0xEGQ%2FUQEEIFo9Ine4rf%2FXfmEgA0MFCETj7namHCipcKc9yVARE4wWYZW0b%2FFAdVpsnKO0NvItJT9LC50l0DHnrXuHP0bxxqgaoEX9gloJHSdXPAA%2FeTwMI7yJ289hBAShC1G6eqK0sieP7qN&X-Amz-Signature=e8e919e201dd39c69d23823d4f252737b6bebebb342edcad0e0c70e7c30d02a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US3VU3DD%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T071135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRCFRWiYDWe9Asdwh0wTAhhNoHZk7GRrExhJO4K42QyAiEApzmmeAWEONmr%2BPtHZfL%2F%2Bl9uAca1BQo4k3mEX9kNxaAqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEziUfVOUCahAy6FCrcAx9dmKheHeGit8I3bTZw40%2BHC%2BVEVnIzrIwa3mnVvfQej8ptLkO%2FxSKjTaWskTCXkIRvAuNPzSWszQFPv7xf%2BaXYJ3DsLkavHI8tHp3Q2usRTFnWMkGppW7sTIcUntAtgqVhY1iksAV0fPj03yyRnVcOU8fuy4Zfn%2FkzrLsE2vD0drjxhMkYs3Lk%2FOXuKRx2Gc%2Fgk%2F5m7GuCdh%2F0QTlK%2BAXjDKXRT7ddCAyk69akr2mdA0UOsmja7G8AVD7hWvZSg8mQ5kyCZBEjxycRqC%2F8HT3vAUx9kHo1x02N%2FFRBdTQWzdmVTGKhbCNd3dq1c3AFuyvX7rZ4wj5tQlCPh3Ck94SWSq3ELr%2BA7ka9LlaBrPX%2Ful1N6fgCZQC0C5AGLtgRsOa%2BVCsbEhbtlJ%2F6T%2FwO5MjJbTidtFgXB44uARtPCUGxnXjxZdSr5Y3hcNDfBgWd2zd6WoinVvELkQeB2aXjHeON3qEE0J9Kg7RkEY%2BWwZamiVV4fhNmyAVeBD0fV9UMTuIoxEI582ukcfyxOT1%2BqwvDGypAiP5tQ128XncKGqG%2FJ0DxEoOVHUXQZnJXxhj%2FstzME7%2BuHjq8c0zadDXxyy3U0kx0x%2BPmi6308cUO9KkZKDz5Z8db1khLic%2BiMPaiuMMGOqUBmqlHgxdiKIrphz%2FWv2wRyMIbDMJof4rnmZ3DUSlamMTd7tOIiaYqO8HlxjPu9uDH2nIOz4yfnzQ0xEGQ%2FUQEEIFo9Ine4rf%2FXfmEgA0MFCETj7namHCipcKc9yVARE4wWYZW0b%2FFAdVpsnKO0NvItJT9LC50l0DHnrXuHP0bxxqgaoEX9gloJHSdXPAA%2FeTwMI7yJ289hBAShC1G6eqK0sieP7qN&X-Amz-Signature=6cf074b0d57ed2e44634b0554ff31361e74afc1a8fb084782f54a5a518a94fe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US3VU3DD%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T071135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRCFRWiYDWe9Asdwh0wTAhhNoHZk7GRrExhJO4K42QyAiEApzmmeAWEONmr%2BPtHZfL%2F%2Bl9uAca1BQo4k3mEX9kNxaAqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEziUfVOUCahAy6FCrcAx9dmKheHeGit8I3bTZw40%2BHC%2BVEVnIzrIwa3mnVvfQej8ptLkO%2FxSKjTaWskTCXkIRvAuNPzSWszQFPv7xf%2BaXYJ3DsLkavHI8tHp3Q2usRTFnWMkGppW7sTIcUntAtgqVhY1iksAV0fPj03yyRnVcOU8fuy4Zfn%2FkzrLsE2vD0drjxhMkYs3Lk%2FOXuKRx2Gc%2Fgk%2F5m7GuCdh%2F0QTlK%2BAXjDKXRT7ddCAyk69akr2mdA0UOsmja7G8AVD7hWvZSg8mQ5kyCZBEjxycRqC%2F8HT3vAUx9kHo1x02N%2FFRBdTQWzdmVTGKhbCNd3dq1c3AFuyvX7rZ4wj5tQlCPh3Ck94SWSq3ELr%2BA7ka9LlaBrPX%2Ful1N6fgCZQC0C5AGLtgRsOa%2BVCsbEhbtlJ%2F6T%2FwO5MjJbTidtFgXB44uARtPCUGxnXjxZdSr5Y3hcNDfBgWd2zd6WoinVvELkQeB2aXjHeON3qEE0J9Kg7RkEY%2BWwZamiVV4fhNmyAVeBD0fV9UMTuIoxEI582ukcfyxOT1%2BqwvDGypAiP5tQ128XncKGqG%2FJ0DxEoOVHUXQZnJXxhj%2FstzME7%2BuHjq8c0zadDXxyy3U0kx0x%2BPmi6308cUO9KkZKDz5Z8db1khLic%2BiMPaiuMMGOqUBmqlHgxdiKIrphz%2FWv2wRyMIbDMJof4rnmZ3DUSlamMTd7tOIiaYqO8HlxjPu9uDH2nIOz4yfnzQ0xEGQ%2FUQEEIFo9Ine4rf%2FXfmEgA0MFCETj7namHCipcKc9yVARE4wWYZW0b%2FFAdVpsnKO0NvItJT9LC50l0DHnrXuHP0bxxqgaoEX9gloJHSdXPAA%2FeTwMI7yJ289hBAShC1G6eqK0sieP7qN&X-Amz-Signature=2c5836308f5db9889d5264610c47daa479226d2e089a4b8d16feabe46a306a4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US3VU3DD%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T071135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRCFRWiYDWe9Asdwh0wTAhhNoHZk7GRrExhJO4K42QyAiEApzmmeAWEONmr%2BPtHZfL%2F%2Bl9uAca1BQo4k3mEX9kNxaAqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEziUfVOUCahAy6FCrcAx9dmKheHeGit8I3bTZw40%2BHC%2BVEVnIzrIwa3mnVvfQej8ptLkO%2FxSKjTaWskTCXkIRvAuNPzSWszQFPv7xf%2BaXYJ3DsLkavHI8tHp3Q2usRTFnWMkGppW7sTIcUntAtgqVhY1iksAV0fPj03yyRnVcOU8fuy4Zfn%2FkzrLsE2vD0drjxhMkYs3Lk%2FOXuKRx2Gc%2Fgk%2F5m7GuCdh%2F0QTlK%2BAXjDKXRT7ddCAyk69akr2mdA0UOsmja7G8AVD7hWvZSg8mQ5kyCZBEjxycRqC%2F8HT3vAUx9kHo1x02N%2FFRBdTQWzdmVTGKhbCNd3dq1c3AFuyvX7rZ4wj5tQlCPh3Ck94SWSq3ELr%2BA7ka9LlaBrPX%2Ful1N6fgCZQC0C5AGLtgRsOa%2BVCsbEhbtlJ%2F6T%2FwO5MjJbTidtFgXB44uARtPCUGxnXjxZdSr5Y3hcNDfBgWd2zd6WoinVvELkQeB2aXjHeON3qEE0J9Kg7RkEY%2BWwZamiVV4fhNmyAVeBD0fV9UMTuIoxEI582ukcfyxOT1%2BqwvDGypAiP5tQ128XncKGqG%2FJ0DxEoOVHUXQZnJXxhj%2FstzME7%2BuHjq8c0zadDXxyy3U0kx0x%2BPmi6308cUO9KkZKDz5Z8db1khLic%2BiMPaiuMMGOqUBmqlHgxdiKIrphz%2FWv2wRyMIbDMJof4rnmZ3DUSlamMTd7tOIiaYqO8HlxjPu9uDH2nIOz4yfnzQ0xEGQ%2FUQEEIFo9Ine4rf%2FXfmEgA0MFCETj7namHCipcKc9yVARE4wWYZW0b%2FFAdVpsnKO0NvItJT9LC50l0DHnrXuHP0bxxqgaoEX9gloJHSdXPAA%2FeTwMI7yJ289hBAShC1G6eqK0sieP7qN&X-Amz-Signature=ec2d0a2ff8bc30aa08a5b49e13e0e42816e2d8a942377e7bf5109e98c05a6e80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US3VU3DD%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T071135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRCFRWiYDWe9Asdwh0wTAhhNoHZk7GRrExhJO4K42QyAiEApzmmeAWEONmr%2BPtHZfL%2F%2Bl9uAca1BQo4k3mEX9kNxaAqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEziUfVOUCahAy6FCrcAx9dmKheHeGit8I3bTZw40%2BHC%2BVEVnIzrIwa3mnVvfQej8ptLkO%2FxSKjTaWskTCXkIRvAuNPzSWszQFPv7xf%2BaXYJ3DsLkavHI8tHp3Q2usRTFnWMkGppW7sTIcUntAtgqVhY1iksAV0fPj03yyRnVcOU8fuy4Zfn%2FkzrLsE2vD0drjxhMkYs3Lk%2FOXuKRx2Gc%2Fgk%2F5m7GuCdh%2F0QTlK%2BAXjDKXRT7ddCAyk69akr2mdA0UOsmja7G8AVD7hWvZSg8mQ5kyCZBEjxycRqC%2F8HT3vAUx9kHo1x02N%2FFRBdTQWzdmVTGKhbCNd3dq1c3AFuyvX7rZ4wj5tQlCPh3Ck94SWSq3ELr%2BA7ka9LlaBrPX%2Ful1N6fgCZQC0C5AGLtgRsOa%2BVCsbEhbtlJ%2F6T%2FwO5MjJbTidtFgXB44uARtPCUGxnXjxZdSr5Y3hcNDfBgWd2zd6WoinVvELkQeB2aXjHeON3qEE0J9Kg7RkEY%2BWwZamiVV4fhNmyAVeBD0fV9UMTuIoxEI582ukcfyxOT1%2BqwvDGypAiP5tQ128XncKGqG%2FJ0DxEoOVHUXQZnJXxhj%2FstzME7%2BuHjq8c0zadDXxyy3U0kx0x%2BPmi6308cUO9KkZKDz5Z8db1khLic%2BiMPaiuMMGOqUBmqlHgxdiKIrphz%2FWv2wRyMIbDMJof4rnmZ3DUSlamMTd7tOIiaYqO8HlxjPu9uDH2nIOz4yfnzQ0xEGQ%2FUQEEIFo9Ine4rf%2FXfmEgA0MFCETj7namHCipcKc9yVARE4wWYZW0b%2FFAdVpsnKO0NvItJT9LC50l0DHnrXuHP0bxxqgaoEX9gloJHSdXPAA%2FeTwMI7yJ289hBAShC1G6eqK0sieP7qN&X-Amz-Signature=a6b4521b13dba8f59df11a6663add636b67e97e09f4a4698b280515daf4c8fd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US3VU3DD%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T071135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBRCFRWiYDWe9Asdwh0wTAhhNoHZk7GRrExhJO4K42QyAiEApzmmeAWEONmr%2BPtHZfL%2F%2Bl9uAca1BQo4k3mEX9kNxaAqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEziUfVOUCahAy6FCrcAx9dmKheHeGit8I3bTZw40%2BHC%2BVEVnIzrIwa3mnVvfQej8ptLkO%2FxSKjTaWskTCXkIRvAuNPzSWszQFPv7xf%2BaXYJ3DsLkavHI8tHp3Q2usRTFnWMkGppW7sTIcUntAtgqVhY1iksAV0fPj03yyRnVcOU8fuy4Zfn%2FkzrLsE2vD0drjxhMkYs3Lk%2FOXuKRx2Gc%2Fgk%2F5m7GuCdh%2F0QTlK%2BAXjDKXRT7ddCAyk69akr2mdA0UOsmja7G8AVD7hWvZSg8mQ5kyCZBEjxycRqC%2F8HT3vAUx9kHo1x02N%2FFRBdTQWzdmVTGKhbCNd3dq1c3AFuyvX7rZ4wj5tQlCPh3Ck94SWSq3ELr%2BA7ka9LlaBrPX%2Ful1N6fgCZQC0C5AGLtgRsOa%2BVCsbEhbtlJ%2F6T%2FwO5MjJbTidtFgXB44uARtPCUGxnXjxZdSr5Y3hcNDfBgWd2zd6WoinVvELkQeB2aXjHeON3qEE0J9Kg7RkEY%2BWwZamiVV4fhNmyAVeBD0fV9UMTuIoxEI582ukcfyxOT1%2BqwvDGypAiP5tQ128XncKGqG%2FJ0DxEoOVHUXQZnJXxhj%2FstzME7%2BuHjq8c0zadDXxyy3U0kx0x%2BPmi6308cUO9KkZKDz5Z8db1khLic%2BiMPaiuMMGOqUBmqlHgxdiKIrphz%2FWv2wRyMIbDMJof4rnmZ3DUSlamMTd7tOIiaYqO8HlxjPu9uDH2nIOz4yfnzQ0xEGQ%2FUQEEIFo9Ine4rf%2FXfmEgA0MFCETj7namHCipcKc9yVARE4wWYZW0b%2FFAdVpsnKO0NvItJT9LC50l0DHnrXuHP0bxxqgaoEX9gloJHSdXPAA%2FeTwMI7yJ289hBAShC1G6eqK0sieP7qN&X-Amz-Signature=45690fc89e43c069d10453c3831dd15ce349646a105a89a9b7eb2ab4587941ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
