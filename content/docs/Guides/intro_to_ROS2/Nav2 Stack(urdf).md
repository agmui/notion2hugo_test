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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTIUE4WF%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9rg2L7sqSWKXEbUU49nKrysj%2BC%2F1rleDvWD%2FPFJicfwIgRQycjJX4tPgGICYpDpG5UIeiwGBTmeJnQuRKLbpih3gqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFz50%2BRolQR9wEmfryrcA3REzfoGHUF48jK57dRgACPMhTXBkgem2D6OkmNof0qtKk5k2tYoMfkIQJxEMIrmdkpSCq%2B%2Bs3sFzoUVPvlGUUsIoKekgjKj6YBdx0IGe8KwgLJAuK3F80%2BNLGuDUBvUSRgjQtF2GA7YhjIiRDGqHtC0elfmYqkVkBHbdx6dwfb4X6tfGOjZRbquRpUEu8TxeSQC9DV14Py5qBJqMag4aPd6RpL86HWtSrcG%2BLjB0mJiyCEjqipmE9vtnJvzRi1yRSV40Hxsx%2FXPG3Mhk4Ue0WuAkPZwRLNAyuiS5rkyBH0Pk2vN8mYamr08rYxp1nl1OzhnI%2FWRVEpflpP7UvEKoepUj45eYrnJzfOjCsKwbhDPC4twVY%2BpGUUMoUEcvNU4ndh2DKI0Epxoq7N4OVQ4aNQKtpYVpPh9F3gGbBxjSvQkNdeLnSSlotVYqikytM77aXRXjKYXosIBsIK2udaCEtK8y%2BW7CGBlxVj2eT5bcON8O973dQHfRal4Wd5BGZwBaoxjh5CcfMk8WHnxaAyaqYwNT9VL%2BOBOrfnZpfKXYxYf65e1FP%2FHb69P1tMcV1fn81C%2FAte5fumtIB9MLU81w0eQZ%2FvhoWzDr99iKegcYpP8Sgxo02d2EV90GMzEMIyimMIGOqUBX91y8kLVHAvxxVrLA72t6v0HlI%2FFAVBLUXb2%2FeZlCxQS7lxMXnWiw3xQ2jsoZpVVFvixDxWVPN6uS42k8RUHxkOw66V6JBObpQvZBDjpwReeEGu%2BsVOo6Xx9BuHUqrX1SZ460XqugRyoaBUi1%2BRM4n3qGrnYS5REgwgzgxmcSIolaCimEIFa8GQgjDjk4I3aSlJEGrIoMOMrK2m0TErxCLLQd6tC&X-Amz-Signature=4cfdf3f44bb6e74f2ee3c705358c5a3d87b4a3a1fa94a85e5144efee218cda52&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTIUE4WF%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9rg2L7sqSWKXEbUU49nKrysj%2BC%2F1rleDvWD%2FPFJicfwIgRQycjJX4tPgGICYpDpG5UIeiwGBTmeJnQuRKLbpih3gqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFz50%2BRolQR9wEmfryrcA3REzfoGHUF48jK57dRgACPMhTXBkgem2D6OkmNof0qtKk5k2tYoMfkIQJxEMIrmdkpSCq%2B%2Bs3sFzoUVPvlGUUsIoKekgjKj6YBdx0IGe8KwgLJAuK3F80%2BNLGuDUBvUSRgjQtF2GA7YhjIiRDGqHtC0elfmYqkVkBHbdx6dwfb4X6tfGOjZRbquRpUEu8TxeSQC9DV14Py5qBJqMag4aPd6RpL86HWtSrcG%2BLjB0mJiyCEjqipmE9vtnJvzRi1yRSV40Hxsx%2FXPG3Mhk4Ue0WuAkPZwRLNAyuiS5rkyBH0Pk2vN8mYamr08rYxp1nl1OzhnI%2FWRVEpflpP7UvEKoepUj45eYrnJzfOjCsKwbhDPC4twVY%2BpGUUMoUEcvNU4ndh2DKI0Epxoq7N4OVQ4aNQKtpYVpPh9F3gGbBxjSvQkNdeLnSSlotVYqikytM77aXRXjKYXosIBsIK2udaCEtK8y%2BW7CGBlxVj2eT5bcON8O973dQHfRal4Wd5BGZwBaoxjh5CcfMk8WHnxaAyaqYwNT9VL%2BOBOrfnZpfKXYxYf65e1FP%2FHb69P1tMcV1fn81C%2FAte5fumtIB9MLU81w0eQZ%2FvhoWzDr99iKegcYpP8Sgxo02d2EV90GMzEMIyimMIGOqUBX91y8kLVHAvxxVrLA72t6v0HlI%2FFAVBLUXb2%2FeZlCxQS7lxMXnWiw3xQ2jsoZpVVFvixDxWVPN6uS42k8RUHxkOw66V6JBObpQvZBDjpwReeEGu%2BsVOo6Xx9BuHUqrX1SZ460XqugRyoaBUi1%2BRM4n3qGrnYS5REgwgzgxmcSIolaCimEIFa8GQgjDjk4I3aSlJEGrIoMOMrK2m0TErxCLLQd6tC&X-Amz-Signature=28ea87214dbd4cd215dcc8974c6486ab607d911219d4559dd9d561a96d25027a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTIUE4WF%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9rg2L7sqSWKXEbUU49nKrysj%2BC%2F1rleDvWD%2FPFJicfwIgRQycjJX4tPgGICYpDpG5UIeiwGBTmeJnQuRKLbpih3gqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFz50%2BRolQR9wEmfryrcA3REzfoGHUF48jK57dRgACPMhTXBkgem2D6OkmNof0qtKk5k2tYoMfkIQJxEMIrmdkpSCq%2B%2Bs3sFzoUVPvlGUUsIoKekgjKj6YBdx0IGe8KwgLJAuK3F80%2BNLGuDUBvUSRgjQtF2GA7YhjIiRDGqHtC0elfmYqkVkBHbdx6dwfb4X6tfGOjZRbquRpUEu8TxeSQC9DV14Py5qBJqMag4aPd6RpL86HWtSrcG%2BLjB0mJiyCEjqipmE9vtnJvzRi1yRSV40Hxsx%2FXPG3Mhk4Ue0WuAkPZwRLNAyuiS5rkyBH0Pk2vN8mYamr08rYxp1nl1OzhnI%2FWRVEpflpP7UvEKoepUj45eYrnJzfOjCsKwbhDPC4twVY%2BpGUUMoUEcvNU4ndh2DKI0Epxoq7N4OVQ4aNQKtpYVpPh9F3gGbBxjSvQkNdeLnSSlotVYqikytM77aXRXjKYXosIBsIK2udaCEtK8y%2BW7CGBlxVj2eT5bcON8O973dQHfRal4Wd5BGZwBaoxjh5CcfMk8WHnxaAyaqYwNT9VL%2BOBOrfnZpfKXYxYf65e1FP%2FHb69P1tMcV1fn81C%2FAte5fumtIB9MLU81w0eQZ%2FvhoWzDr99iKegcYpP8Sgxo02d2EV90GMzEMIyimMIGOqUBX91y8kLVHAvxxVrLA72t6v0HlI%2FFAVBLUXb2%2FeZlCxQS7lxMXnWiw3xQ2jsoZpVVFvixDxWVPN6uS42k8RUHxkOw66V6JBObpQvZBDjpwReeEGu%2BsVOo6Xx9BuHUqrX1SZ460XqugRyoaBUi1%2BRM4n3qGrnYS5REgwgzgxmcSIolaCimEIFa8GQgjDjk4I3aSlJEGrIoMOMrK2m0TErxCLLQd6tC&X-Amz-Signature=1370a50e9db36026982b493ce87cb3b1d4a05bbad8efdc0d774a3995460b6e62&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTIUE4WF%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9rg2L7sqSWKXEbUU49nKrysj%2BC%2F1rleDvWD%2FPFJicfwIgRQycjJX4tPgGICYpDpG5UIeiwGBTmeJnQuRKLbpih3gqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFz50%2BRolQR9wEmfryrcA3REzfoGHUF48jK57dRgACPMhTXBkgem2D6OkmNof0qtKk5k2tYoMfkIQJxEMIrmdkpSCq%2B%2Bs3sFzoUVPvlGUUsIoKekgjKj6YBdx0IGe8KwgLJAuK3F80%2BNLGuDUBvUSRgjQtF2GA7YhjIiRDGqHtC0elfmYqkVkBHbdx6dwfb4X6tfGOjZRbquRpUEu8TxeSQC9DV14Py5qBJqMag4aPd6RpL86HWtSrcG%2BLjB0mJiyCEjqipmE9vtnJvzRi1yRSV40Hxsx%2FXPG3Mhk4Ue0WuAkPZwRLNAyuiS5rkyBH0Pk2vN8mYamr08rYxp1nl1OzhnI%2FWRVEpflpP7UvEKoepUj45eYrnJzfOjCsKwbhDPC4twVY%2BpGUUMoUEcvNU4ndh2DKI0Epxoq7N4OVQ4aNQKtpYVpPh9F3gGbBxjSvQkNdeLnSSlotVYqikytM77aXRXjKYXosIBsIK2udaCEtK8y%2BW7CGBlxVj2eT5bcON8O973dQHfRal4Wd5BGZwBaoxjh5CcfMk8WHnxaAyaqYwNT9VL%2BOBOrfnZpfKXYxYf65e1FP%2FHb69P1tMcV1fn81C%2FAte5fumtIB9MLU81w0eQZ%2FvhoWzDr99iKegcYpP8Sgxo02d2EV90GMzEMIyimMIGOqUBX91y8kLVHAvxxVrLA72t6v0HlI%2FFAVBLUXb2%2FeZlCxQS7lxMXnWiw3xQ2jsoZpVVFvixDxWVPN6uS42k8RUHxkOw66V6JBObpQvZBDjpwReeEGu%2BsVOo6Xx9BuHUqrX1SZ460XqugRyoaBUi1%2BRM4n3qGrnYS5REgwgzgxmcSIolaCimEIFa8GQgjDjk4I3aSlJEGrIoMOMrK2m0TErxCLLQd6tC&X-Amz-Signature=e3a607cfe4e41aca52841fdf26df7abb22de55cbd1eaf0c3dc3946098cfffeb0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTIUE4WF%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9rg2L7sqSWKXEbUU49nKrysj%2BC%2F1rleDvWD%2FPFJicfwIgRQycjJX4tPgGICYpDpG5UIeiwGBTmeJnQuRKLbpih3gqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFz50%2BRolQR9wEmfryrcA3REzfoGHUF48jK57dRgACPMhTXBkgem2D6OkmNof0qtKk5k2tYoMfkIQJxEMIrmdkpSCq%2B%2Bs3sFzoUVPvlGUUsIoKekgjKj6YBdx0IGe8KwgLJAuK3F80%2BNLGuDUBvUSRgjQtF2GA7YhjIiRDGqHtC0elfmYqkVkBHbdx6dwfb4X6tfGOjZRbquRpUEu8TxeSQC9DV14Py5qBJqMag4aPd6RpL86HWtSrcG%2BLjB0mJiyCEjqipmE9vtnJvzRi1yRSV40Hxsx%2FXPG3Mhk4Ue0WuAkPZwRLNAyuiS5rkyBH0Pk2vN8mYamr08rYxp1nl1OzhnI%2FWRVEpflpP7UvEKoepUj45eYrnJzfOjCsKwbhDPC4twVY%2BpGUUMoUEcvNU4ndh2DKI0Epxoq7N4OVQ4aNQKtpYVpPh9F3gGbBxjSvQkNdeLnSSlotVYqikytM77aXRXjKYXosIBsIK2udaCEtK8y%2BW7CGBlxVj2eT5bcON8O973dQHfRal4Wd5BGZwBaoxjh5CcfMk8WHnxaAyaqYwNT9VL%2BOBOrfnZpfKXYxYf65e1FP%2FHb69P1tMcV1fn81C%2FAte5fumtIB9MLU81w0eQZ%2FvhoWzDr99iKegcYpP8Sgxo02d2EV90GMzEMIyimMIGOqUBX91y8kLVHAvxxVrLA72t6v0HlI%2FFAVBLUXb2%2FeZlCxQS7lxMXnWiw3xQ2jsoZpVVFvixDxWVPN6uS42k8RUHxkOw66V6JBObpQvZBDjpwReeEGu%2BsVOo6Xx9BuHUqrX1SZ460XqugRyoaBUi1%2BRM4n3qGrnYS5REgwgzgxmcSIolaCimEIFa8GQgjDjk4I3aSlJEGrIoMOMrK2m0TErxCLLQd6tC&X-Amz-Signature=28ce80f06999a6b57aeb17cf30cdfe3b3183ca53841b4191a5b11b9d99f25bca&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTIUE4WF%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9rg2L7sqSWKXEbUU49nKrysj%2BC%2F1rleDvWD%2FPFJicfwIgRQycjJX4tPgGICYpDpG5UIeiwGBTmeJnQuRKLbpih3gqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFz50%2BRolQR9wEmfryrcA3REzfoGHUF48jK57dRgACPMhTXBkgem2D6OkmNof0qtKk5k2tYoMfkIQJxEMIrmdkpSCq%2B%2Bs3sFzoUVPvlGUUsIoKekgjKj6YBdx0IGe8KwgLJAuK3F80%2BNLGuDUBvUSRgjQtF2GA7YhjIiRDGqHtC0elfmYqkVkBHbdx6dwfb4X6tfGOjZRbquRpUEu8TxeSQC9DV14Py5qBJqMag4aPd6RpL86HWtSrcG%2BLjB0mJiyCEjqipmE9vtnJvzRi1yRSV40Hxsx%2FXPG3Mhk4Ue0WuAkPZwRLNAyuiS5rkyBH0Pk2vN8mYamr08rYxp1nl1OzhnI%2FWRVEpflpP7UvEKoepUj45eYrnJzfOjCsKwbhDPC4twVY%2BpGUUMoUEcvNU4ndh2DKI0Epxoq7N4OVQ4aNQKtpYVpPh9F3gGbBxjSvQkNdeLnSSlotVYqikytM77aXRXjKYXosIBsIK2udaCEtK8y%2BW7CGBlxVj2eT5bcON8O973dQHfRal4Wd5BGZwBaoxjh5CcfMk8WHnxaAyaqYwNT9VL%2BOBOrfnZpfKXYxYf65e1FP%2FHb69P1tMcV1fn81C%2FAte5fumtIB9MLU81w0eQZ%2FvhoWzDr99iKegcYpP8Sgxo02d2EV90GMzEMIyimMIGOqUBX91y8kLVHAvxxVrLA72t6v0HlI%2FFAVBLUXb2%2FeZlCxQS7lxMXnWiw3xQ2jsoZpVVFvixDxWVPN6uS42k8RUHxkOw66V6JBObpQvZBDjpwReeEGu%2BsVOo6Xx9BuHUqrX1SZ460XqugRyoaBUi1%2BRM4n3qGrnYS5REgwgzgxmcSIolaCimEIFa8GQgjDjk4I3aSlJEGrIoMOMrK2m0TErxCLLQd6tC&X-Amz-Signature=df74a3f897d53fec461908a72cd99bf1b34765bec0bebc794c461c11cee16141&X-Amz-SignedHeaders=host&x-id=GetObject)
