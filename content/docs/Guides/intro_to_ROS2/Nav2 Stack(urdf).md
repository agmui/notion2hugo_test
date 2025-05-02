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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCETFSUW%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T140826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQC8Z3MERd59C5tWwGDTfQIWt3I1VLFQd2NaQVkNqxOwaAIgXl9hwUkZ6fLvPL24imbencVos%2BWqNU9J%2BU5Y27s%2FHBoqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWdeZClpuSjMjfXyyrcAxWxWd5GDuXPJuPhTO16zZDOmSN7gKsSETq4MhII%2BGUOMEqXNz7Fc3Mq5ff4xBjEJuxxp0NnMF%2FGEsR8t%2FzmKBDSIGGminLgrQZQphjYLCAW2HEsfNtSdPxHYDrOcdVMHfLfCLknw%2FZpfmRDuMDi4WJ%2BMEk6yWXM6%2BzndpRCXr9jwZG8jbPWCWnOVkmqJo%2BRMr3jzYmWSRgfj4CBqRh03gfP8PGc7Vzf%2FJPRk7SJGjKlDOhFpJV1yNxTLdqDikbE9nlEexTjg2kEUuCfEnjepj6gR4%2FfVx3dfyAmF7YEViIJY4Pzil%2FEVm5WI55XYxlYoy0E7%2BJYB%2FfIr%2F4VjuKygaSbtrT40p1jrRF1cfxRfSmacGT%2F869fNcjj8cQLCPDIDWOEJdv9vgSFv4Eo2RvwpxXClK7DTkytJVMnNJyBV5uQy5uCoXLq8l8hE4XGkRUhZkdMX3YtQQIs1sjIPtfcDRhjLpHOcD4quhRFUv3IYrrvmRWLAxQN%2ByzhRwNNCdS09Ho0LBiX4Obu0bcgS4B7D9t6TvcGWwPmt70Z9yd1oDs193%2Flg%2B2h36YHmoFuleYqFlHTgzPMtko%2FLZyXu5Nb7MKLW3e3m8jroF6PGHB%2FpADQRhqoOAHbp2l1Fe8vMJiO08AGOqUBQBiOGqcMDAO7yxrQeP%2Bt%2FyhJlYc6OFdtjOKOrfRS6eNXm6%2F5dtFdVRc1v4P0mj%2F8uhfz5OCb%2F5g1IAdjgEtVSviGeAhBrkNLMRph9c9IjC3IQo3oY5TQBWiWhIywAJuYsO3kziodbEDpcH4EXR3wuNcTlRQcmOlPFZAwuNlUC3u71CUwEqTsBq8xuFzZW4XKu180DB7W6uIsT5et5PMRUtpFrLsH&X-Amz-Signature=fe518219d0e2c879b582159790518a80e186f7ddc67c6f51d4ffc006c6d63406&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCETFSUW%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T140826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQC8Z3MERd59C5tWwGDTfQIWt3I1VLFQd2NaQVkNqxOwaAIgXl9hwUkZ6fLvPL24imbencVos%2BWqNU9J%2BU5Y27s%2FHBoqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWdeZClpuSjMjfXyyrcAxWxWd5GDuXPJuPhTO16zZDOmSN7gKsSETq4MhII%2BGUOMEqXNz7Fc3Mq5ff4xBjEJuxxp0NnMF%2FGEsR8t%2FzmKBDSIGGminLgrQZQphjYLCAW2HEsfNtSdPxHYDrOcdVMHfLfCLknw%2FZpfmRDuMDi4WJ%2BMEk6yWXM6%2BzndpRCXr9jwZG8jbPWCWnOVkmqJo%2BRMr3jzYmWSRgfj4CBqRh03gfP8PGc7Vzf%2FJPRk7SJGjKlDOhFpJV1yNxTLdqDikbE9nlEexTjg2kEUuCfEnjepj6gR4%2FfVx3dfyAmF7YEViIJY4Pzil%2FEVm5WI55XYxlYoy0E7%2BJYB%2FfIr%2F4VjuKygaSbtrT40p1jrRF1cfxRfSmacGT%2F869fNcjj8cQLCPDIDWOEJdv9vgSFv4Eo2RvwpxXClK7DTkytJVMnNJyBV5uQy5uCoXLq8l8hE4XGkRUhZkdMX3YtQQIs1sjIPtfcDRhjLpHOcD4quhRFUv3IYrrvmRWLAxQN%2ByzhRwNNCdS09Ho0LBiX4Obu0bcgS4B7D9t6TvcGWwPmt70Z9yd1oDs193%2Flg%2B2h36YHmoFuleYqFlHTgzPMtko%2FLZyXu5Nb7MKLW3e3m8jroF6PGHB%2FpADQRhqoOAHbp2l1Fe8vMJiO08AGOqUBQBiOGqcMDAO7yxrQeP%2Bt%2FyhJlYc6OFdtjOKOrfRS6eNXm6%2F5dtFdVRc1v4P0mj%2F8uhfz5OCb%2F5g1IAdjgEtVSviGeAhBrkNLMRph9c9IjC3IQo3oY5TQBWiWhIywAJuYsO3kziodbEDpcH4EXR3wuNcTlRQcmOlPFZAwuNlUC3u71CUwEqTsBq8xuFzZW4XKu180DB7W6uIsT5et5PMRUtpFrLsH&X-Amz-Signature=f2eaeabdb743a35d5fa028f0792ce25fdc04039f5f3ea250e3f7483d01119711&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCETFSUW%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T140826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQC8Z3MERd59C5tWwGDTfQIWt3I1VLFQd2NaQVkNqxOwaAIgXl9hwUkZ6fLvPL24imbencVos%2BWqNU9J%2BU5Y27s%2FHBoqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWdeZClpuSjMjfXyyrcAxWxWd5GDuXPJuPhTO16zZDOmSN7gKsSETq4MhII%2BGUOMEqXNz7Fc3Mq5ff4xBjEJuxxp0NnMF%2FGEsR8t%2FzmKBDSIGGminLgrQZQphjYLCAW2HEsfNtSdPxHYDrOcdVMHfLfCLknw%2FZpfmRDuMDi4WJ%2BMEk6yWXM6%2BzndpRCXr9jwZG8jbPWCWnOVkmqJo%2BRMr3jzYmWSRgfj4CBqRh03gfP8PGc7Vzf%2FJPRk7SJGjKlDOhFpJV1yNxTLdqDikbE9nlEexTjg2kEUuCfEnjepj6gR4%2FfVx3dfyAmF7YEViIJY4Pzil%2FEVm5WI55XYxlYoy0E7%2BJYB%2FfIr%2F4VjuKygaSbtrT40p1jrRF1cfxRfSmacGT%2F869fNcjj8cQLCPDIDWOEJdv9vgSFv4Eo2RvwpxXClK7DTkytJVMnNJyBV5uQy5uCoXLq8l8hE4XGkRUhZkdMX3YtQQIs1sjIPtfcDRhjLpHOcD4quhRFUv3IYrrvmRWLAxQN%2ByzhRwNNCdS09Ho0LBiX4Obu0bcgS4B7D9t6TvcGWwPmt70Z9yd1oDs193%2Flg%2B2h36YHmoFuleYqFlHTgzPMtko%2FLZyXu5Nb7MKLW3e3m8jroF6PGHB%2FpADQRhqoOAHbp2l1Fe8vMJiO08AGOqUBQBiOGqcMDAO7yxrQeP%2Bt%2FyhJlYc6OFdtjOKOrfRS6eNXm6%2F5dtFdVRc1v4P0mj%2F8uhfz5OCb%2F5g1IAdjgEtVSviGeAhBrkNLMRph9c9IjC3IQo3oY5TQBWiWhIywAJuYsO3kziodbEDpcH4EXR3wuNcTlRQcmOlPFZAwuNlUC3u71CUwEqTsBq8xuFzZW4XKu180DB7W6uIsT5et5PMRUtpFrLsH&X-Amz-Signature=e25ecd41d310de18d8128166bec763f83d2c598e46d90f4f15d5f4ecf820513f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCETFSUW%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T140826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQC8Z3MERd59C5tWwGDTfQIWt3I1VLFQd2NaQVkNqxOwaAIgXl9hwUkZ6fLvPL24imbencVos%2BWqNU9J%2BU5Y27s%2FHBoqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWdeZClpuSjMjfXyyrcAxWxWd5GDuXPJuPhTO16zZDOmSN7gKsSETq4MhII%2BGUOMEqXNz7Fc3Mq5ff4xBjEJuxxp0NnMF%2FGEsR8t%2FzmKBDSIGGminLgrQZQphjYLCAW2HEsfNtSdPxHYDrOcdVMHfLfCLknw%2FZpfmRDuMDi4WJ%2BMEk6yWXM6%2BzndpRCXr9jwZG8jbPWCWnOVkmqJo%2BRMr3jzYmWSRgfj4CBqRh03gfP8PGc7Vzf%2FJPRk7SJGjKlDOhFpJV1yNxTLdqDikbE9nlEexTjg2kEUuCfEnjepj6gR4%2FfVx3dfyAmF7YEViIJY4Pzil%2FEVm5WI55XYxlYoy0E7%2BJYB%2FfIr%2F4VjuKygaSbtrT40p1jrRF1cfxRfSmacGT%2F869fNcjj8cQLCPDIDWOEJdv9vgSFv4Eo2RvwpxXClK7DTkytJVMnNJyBV5uQy5uCoXLq8l8hE4XGkRUhZkdMX3YtQQIs1sjIPtfcDRhjLpHOcD4quhRFUv3IYrrvmRWLAxQN%2ByzhRwNNCdS09Ho0LBiX4Obu0bcgS4B7D9t6TvcGWwPmt70Z9yd1oDs193%2Flg%2B2h36YHmoFuleYqFlHTgzPMtko%2FLZyXu5Nb7MKLW3e3m8jroF6PGHB%2FpADQRhqoOAHbp2l1Fe8vMJiO08AGOqUBQBiOGqcMDAO7yxrQeP%2Bt%2FyhJlYc6OFdtjOKOrfRS6eNXm6%2F5dtFdVRc1v4P0mj%2F8uhfz5OCb%2F5g1IAdjgEtVSviGeAhBrkNLMRph9c9IjC3IQo3oY5TQBWiWhIywAJuYsO3kziodbEDpcH4EXR3wuNcTlRQcmOlPFZAwuNlUC3u71CUwEqTsBq8xuFzZW4XKu180DB7W6uIsT5et5PMRUtpFrLsH&X-Amz-Signature=5997d635d9c423a7e4b22f5bacdd3975c3d93ac2563bdd63451d8d151d59234c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCETFSUW%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T140826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQC8Z3MERd59C5tWwGDTfQIWt3I1VLFQd2NaQVkNqxOwaAIgXl9hwUkZ6fLvPL24imbencVos%2BWqNU9J%2BU5Y27s%2FHBoqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWdeZClpuSjMjfXyyrcAxWxWd5GDuXPJuPhTO16zZDOmSN7gKsSETq4MhII%2BGUOMEqXNz7Fc3Mq5ff4xBjEJuxxp0NnMF%2FGEsR8t%2FzmKBDSIGGminLgrQZQphjYLCAW2HEsfNtSdPxHYDrOcdVMHfLfCLknw%2FZpfmRDuMDi4WJ%2BMEk6yWXM6%2BzndpRCXr9jwZG8jbPWCWnOVkmqJo%2BRMr3jzYmWSRgfj4CBqRh03gfP8PGc7Vzf%2FJPRk7SJGjKlDOhFpJV1yNxTLdqDikbE9nlEexTjg2kEUuCfEnjepj6gR4%2FfVx3dfyAmF7YEViIJY4Pzil%2FEVm5WI55XYxlYoy0E7%2BJYB%2FfIr%2F4VjuKygaSbtrT40p1jrRF1cfxRfSmacGT%2F869fNcjj8cQLCPDIDWOEJdv9vgSFv4Eo2RvwpxXClK7DTkytJVMnNJyBV5uQy5uCoXLq8l8hE4XGkRUhZkdMX3YtQQIs1sjIPtfcDRhjLpHOcD4quhRFUv3IYrrvmRWLAxQN%2ByzhRwNNCdS09Ho0LBiX4Obu0bcgS4B7D9t6TvcGWwPmt70Z9yd1oDs193%2Flg%2B2h36YHmoFuleYqFlHTgzPMtko%2FLZyXu5Nb7MKLW3e3m8jroF6PGHB%2FpADQRhqoOAHbp2l1Fe8vMJiO08AGOqUBQBiOGqcMDAO7yxrQeP%2Bt%2FyhJlYc6OFdtjOKOrfRS6eNXm6%2F5dtFdVRc1v4P0mj%2F8uhfz5OCb%2F5g1IAdjgEtVSviGeAhBrkNLMRph9c9IjC3IQo3oY5TQBWiWhIywAJuYsO3kziodbEDpcH4EXR3wuNcTlRQcmOlPFZAwuNlUC3u71CUwEqTsBq8xuFzZW4XKu180DB7W6uIsT5et5PMRUtpFrLsH&X-Amz-Signature=00ab0f1903c674dcc0f1a0a613ead276d7879f06f4e22fc5b614d0c422b89d02&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCETFSUW%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T140826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQC8Z3MERd59C5tWwGDTfQIWt3I1VLFQd2NaQVkNqxOwaAIgXl9hwUkZ6fLvPL24imbencVos%2BWqNU9J%2BU5Y27s%2FHBoqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJWdeZClpuSjMjfXyyrcAxWxWd5GDuXPJuPhTO16zZDOmSN7gKsSETq4MhII%2BGUOMEqXNz7Fc3Mq5ff4xBjEJuxxp0NnMF%2FGEsR8t%2FzmKBDSIGGminLgrQZQphjYLCAW2HEsfNtSdPxHYDrOcdVMHfLfCLknw%2FZpfmRDuMDi4WJ%2BMEk6yWXM6%2BzndpRCXr9jwZG8jbPWCWnOVkmqJo%2BRMr3jzYmWSRgfj4CBqRh03gfP8PGc7Vzf%2FJPRk7SJGjKlDOhFpJV1yNxTLdqDikbE9nlEexTjg2kEUuCfEnjepj6gR4%2FfVx3dfyAmF7YEViIJY4Pzil%2FEVm5WI55XYxlYoy0E7%2BJYB%2FfIr%2F4VjuKygaSbtrT40p1jrRF1cfxRfSmacGT%2F869fNcjj8cQLCPDIDWOEJdv9vgSFv4Eo2RvwpxXClK7DTkytJVMnNJyBV5uQy5uCoXLq8l8hE4XGkRUhZkdMX3YtQQIs1sjIPtfcDRhjLpHOcD4quhRFUv3IYrrvmRWLAxQN%2ByzhRwNNCdS09Ho0LBiX4Obu0bcgS4B7D9t6TvcGWwPmt70Z9yd1oDs193%2Flg%2B2h36YHmoFuleYqFlHTgzPMtko%2FLZyXu5Nb7MKLW3e3m8jroF6PGHB%2FpADQRhqoOAHbp2l1Fe8vMJiO08AGOqUBQBiOGqcMDAO7yxrQeP%2Bt%2FyhJlYc6OFdtjOKOrfRS6eNXm6%2F5dtFdVRc1v4P0mj%2F8uhfz5OCb%2F5g1IAdjgEtVSviGeAhBrkNLMRph9c9IjC3IQo3oY5TQBWiWhIywAJuYsO3kziodbEDpcH4EXR3wuNcTlRQcmOlPFZAwuNlUC3u71CUwEqTsBq8xuFzZW4XKu180DB7W6uIsT5et5PMRUtpFrLsH&X-Amz-Signature=1ff8c7f4119868210564335d11900e82603c68a85d0245447e41c2d02dbeb1ff&X-Amz-SignedHeaders=host&x-id=GetObject)
