---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG5A65Q5%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T131452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFtx%2BfokBIaTbeRAElUcj%2BRzgPSDqKvvcUnspbTAPwHAiEAq2t5L%2FCrqj2FXOxOq%2FhekfH1WeLDKczdvm%2F0QxVe5gYq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKf%2FjiA1baa584ysRSrcA3PQZQYspLwsC8d7F4X3DjUCHY3dlsAudlll72%2BGRv%2BQr0vqLQvEitMmCKZztLsloSXCxOfX7gT2GZh5fOVRO7LnVrR4jokwS%2FQVE6QR2fAzl8g8USxBYfwnYWX7ymZOiLyNkvtX1B54ngzsQ%2ByfsGS7afhk%2FDTZWvArc5JO8i6NuHNGeQBNvNvl46r3vQQIFqPsdBifnml81q6YO6X2%2Foxvlu6xtp5FoH%2BwTcKgsKaVhpyBBkFbm8cqhti6%2BMOhcJbxaNWShHJTkts06lopIgMoxn1%2Bn3J94Hlg6eba5RJtV477oXYXxxypVsZPgERuhHk6lXyYZM2l1b1xjDYyu%2BiIzxvyNwSMz3ptZ3%2BUzuia1B1%2BIQt3RBADVsWTKzn2KPhLPf0RXrTKoVhwbMGlSCO3NuYpNZ3qApBwaUM7GuRQa3hPJPZtcN6tweaHvOEi9i8X7XzVLFUbX%2FBP1NRLeAEvqABY3l5yEqoQ6qffo3RKDrlBX2bW6LeGlKKE1xpeNyP3uXxTrY0Bp10n0xO49P00IkpXbl%2F1DMNA2uy%2FsPy6pl0npOrRu0KeN8HLWJ7L7ZUdgG7KKym8XzdRwahdGE2VfmVxY4%2Fu0D8USrBl63NbmMgrbdFlfQM%2F70PYMPzygr0GOqUBEK7iybZiH9sUgctqR6e6FfQoLAR5Cz6oMNfKhqGH9VroMI4iaa2g%2FSITpHycKXUm1%2FqRP5fEF%2FrsfHxD0vOiXm24ggpQ1PvQWmFwuHT%2FDEm%2FVKldgmgc4rf8%2B9aV3VHF7i1R7nl7tNVKOWcLEMtPTdmEEJ9BnpnLaOW6pcApo9TQjSzwTe0W1%2FEivFStKnJLRp4w%2BmI8GvkYLOS2OZcWvUETnCah&X-Amz-Signature=164d48a480b39441d3d07c39eb44b3430d8193cb327c2dc5d6699a59c1bdce07&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG5A65Q5%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T131452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFtx%2BfokBIaTbeRAElUcj%2BRzgPSDqKvvcUnspbTAPwHAiEAq2t5L%2FCrqj2FXOxOq%2FhekfH1WeLDKczdvm%2F0QxVe5gYq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKf%2FjiA1baa584ysRSrcA3PQZQYspLwsC8d7F4X3DjUCHY3dlsAudlll72%2BGRv%2BQr0vqLQvEitMmCKZztLsloSXCxOfX7gT2GZh5fOVRO7LnVrR4jokwS%2FQVE6QR2fAzl8g8USxBYfwnYWX7ymZOiLyNkvtX1B54ngzsQ%2ByfsGS7afhk%2FDTZWvArc5JO8i6NuHNGeQBNvNvl46r3vQQIFqPsdBifnml81q6YO6X2%2Foxvlu6xtp5FoH%2BwTcKgsKaVhpyBBkFbm8cqhti6%2BMOhcJbxaNWShHJTkts06lopIgMoxn1%2Bn3J94Hlg6eba5RJtV477oXYXxxypVsZPgERuhHk6lXyYZM2l1b1xjDYyu%2BiIzxvyNwSMz3ptZ3%2BUzuia1B1%2BIQt3RBADVsWTKzn2KPhLPf0RXrTKoVhwbMGlSCO3NuYpNZ3qApBwaUM7GuRQa3hPJPZtcN6tweaHvOEi9i8X7XzVLFUbX%2FBP1NRLeAEvqABY3l5yEqoQ6qffo3RKDrlBX2bW6LeGlKKE1xpeNyP3uXxTrY0Bp10n0xO49P00IkpXbl%2F1DMNA2uy%2FsPy6pl0npOrRu0KeN8HLWJ7L7ZUdgG7KKym8XzdRwahdGE2VfmVxY4%2Fu0D8USrBl63NbmMgrbdFlfQM%2F70PYMPzygr0GOqUBEK7iybZiH9sUgctqR6e6FfQoLAR5Cz6oMNfKhqGH9VroMI4iaa2g%2FSITpHycKXUm1%2FqRP5fEF%2FrsfHxD0vOiXm24ggpQ1PvQWmFwuHT%2FDEm%2FVKldgmgc4rf8%2B9aV3VHF7i1R7nl7tNVKOWcLEMtPTdmEEJ9BnpnLaOW6pcApo9TQjSzwTe0W1%2FEivFStKnJLRp4w%2BmI8GvkYLOS2OZcWvUETnCah&X-Amz-Signature=c81eafe51b0e34a53ce40754f5447576041e4e5b9383e436834c70da5018d7d2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG5A65Q5%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T131452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFtx%2BfokBIaTbeRAElUcj%2BRzgPSDqKvvcUnspbTAPwHAiEAq2t5L%2FCrqj2FXOxOq%2FhekfH1WeLDKczdvm%2F0QxVe5gYq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKf%2FjiA1baa584ysRSrcA3PQZQYspLwsC8d7F4X3DjUCHY3dlsAudlll72%2BGRv%2BQr0vqLQvEitMmCKZztLsloSXCxOfX7gT2GZh5fOVRO7LnVrR4jokwS%2FQVE6QR2fAzl8g8USxBYfwnYWX7ymZOiLyNkvtX1B54ngzsQ%2ByfsGS7afhk%2FDTZWvArc5JO8i6NuHNGeQBNvNvl46r3vQQIFqPsdBifnml81q6YO6X2%2Foxvlu6xtp5FoH%2BwTcKgsKaVhpyBBkFbm8cqhti6%2BMOhcJbxaNWShHJTkts06lopIgMoxn1%2Bn3J94Hlg6eba5RJtV477oXYXxxypVsZPgERuhHk6lXyYZM2l1b1xjDYyu%2BiIzxvyNwSMz3ptZ3%2BUzuia1B1%2BIQt3RBADVsWTKzn2KPhLPf0RXrTKoVhwbMGlSCO3NuYpNZ3qApBwaUM7GuRQa3hPJPZtcN6tweaHvOEi9i8X7XzVLFUbX%2FBP1NRLeAEvqABY3l5yEqoQ6qffo3RKDrlBX2bW6LeGlKKE1xpeNyP3uXxTrY0Bp10n0xO49P00IkpXbl%2F1DMNA2uy%2FsPy6pl0npOrRu0KeN8HLWJ7L7ZUdgG7KKym8XzdRwahdGE2VfmVxY4%2Fu0D8USrBl63NbmMgrbdFlfQM%2F70PYMPzygr0GOqUBEK7iybZiH9sUgctqR6e6FfQoLAR5Cz6oMNfKhqGH9VroMI4iaa2g%2FSITpHycKXUm1%2FqRP5fEF%2FrsfHxD0vOiXm24ggpQ1PvQWmFwuHT%2FDEm%2FVKldgmgc4rf8%2B9aV3VHF7i1R7nl7tNVKOWcLEMtPTdmEEJ9BnpnLaOW6pcApo9TQjSzwTe0W1%2FEivFStKnJLRp4w%2BmI8GvkYLOS2OZcWvUETnCah&X-Amz-Signature=4366b9b0d2810af0dbe6890ffd2a664670745fb74c577b5e14226c6c4cf72ea4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG5A65Q5%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T131452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFtx%2BfokBIaTbeRAElUcj%2BRzgPSDqKvvcUnspbTAPwHAiEAq2t5L%2FCrqj2FXOxOq%2FhekfH1WeLDKczdvm%2F0QxVe5gYq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKf%2FjiA1baa584ysRSrcA3PQZQYspLwsC8d7F4X3DjUCHY3dlsAudlll72%2BGRv%2BQr0vqLQvEitMmCKZztLsloSXCxOfX7gT2GZh5fOVRO7LnVrR4jokwS%2FQVE6QR2fAzl8g8USxBYfwnYWX7ymZOiLyNkvtX1B54ngzsQ%2ByfsGS7afhk%2FDTZWvArc5JO8i6NuHNGeQBNvNvl46r3vQQIFqPsdBifnml81q6YO6X2%2Foxvlu6xtp5FoH%2BwTcKgsKaVhpyBBkFbm8cqhti6%2BMOhcJbxaNWShHJTkts06lopIgMoxn1%2Bn3J94Hlg6eba5RJtV477oXYXxxypVsZPgERuhHk6lXyYZM2l1b1xjDYyu%2BiIzxvyNwSMz3ptZ3%2BUzuia1B1%2BIQt3RBADVsWTKzn2KPhLPf0RXrTKoVhwbMGlSCO3NuYpNZ3qApBwaUM7GuRQa3hPJPZtcN6tweaHvOEi9i8X7XzVLFUbX%2FBP1NRLeAEvqABY3l5yEqoQ6qffo3RKDrlBX2bW6LeGlKKE1xpeNyP3uXxTrY0Bp10n0xO49P00IkpXbl%2F1DMNA2uy%2FsPy6pl0npOrRu0KeN8HLWJ7L7ZUdgG7KKym8XzdRwahdGE2VfmVxY4%2Fu0D8USrBl63NbmMgrbdFlfQM%2F70PYMPzygr0GOqUBEK7iybZiH9sUgctqR6e6FfQoLAR5Cz6oMNfKhqGH9VroMI4iaa2g%2FSITpHycKXUm1%2FqRP5fEF%2FrsfHxD0vOiXm24ggpQ1PvQWmFwuHT%2FDEm%2FVKldgmgc4rf8%2B9aV3VHF7i1R7nl7tNVKOWcLEMtPTdmEEJ9BnpnLaOW6pcApo9TQjSzwTe0W1%2FEivFStKnJLRp4w%2BmI8GvkYLOS2OZcWvUETnCah&X-Amz-Signature=04a40b09c1a7972fd56636f7ffb0948c3ee035ede7d442df34df7c783be59fa0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG5A65Q5%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T131452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFtx%2BfokBIaTbeRAElUcj%2BRzgPSDqKvvcUnspbTAPwHAiEAq2t5L%2FCrqj2FXOxOq%2FhekfH1WeLDKczdvm%2F0QxVe5gYq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKf%2FjiA1baa584ysRSrcA3PQZQYspLwsC8d7F4X3DjUCHY3dlsAudlll72%2BGRv%2BQr0vqLQvEitMmCKZztLsloSXCxOfX7gT2GZh5fOVRO7LnVrR4jokwS%2FQVE6QR2fAzl8g8USxBYfwnYWX7ymZOiLyNkvtX1B54ngzsQ%2ByfsGS7afhk%2FDTZWvArc5JO8i6NuHNGeQBNvNvl46r3vQQIFqPsdBifnml81q6YO6X2%2Foxvlu6xtp5FoH%2BwTcKgsKaVhpyBBkFbm8cqhti6%2BMOhcJbxaNWShHJTkts06lopIgMoxn1%2Bn3J94Hlg6eba5RJtV477oXYXxxypVsZPgERuhHk6lXyYZM2l1b1xjDYyu%2BiIzxvyNwSMz3ptZ3%2BUzuia1B1%2BIQt3RBADVsWTKzn2KPhLPf0RXrTKoVhwbMGlSCO3NuYpNZ3qApBwaUM7GuRQa3hPJPZtcN6tweaHvOEi9i8X7XzVLFUbX%2FBP1NRLeAEvqABY3l5yEqoQ6qffo3RKDrlBX2bW6LeGlKKE1xpeNyP3uXxTrY0Bp10n0xO49P00IkpXbl%2F1DMNA2uy%2FsPy6pl0npOrRu0KeN8HLWJ7L7ZUdgG7KKym8XzdRwahdGE2VfmVxY4%2Fu0D8USrBl63NbmMgrbdFlfQM%2F70PYMPzygr0GOqUBEK7iybZiH9sUgctqR6e6FfQoLAR5Cz6oMNfKhqGH9VroMI4iaa2g%2FSITpHycKXUm1%2FqRP5fEF%2FrsfHxD0vOiXm24ggpQ1PvQWmFwuHT%2FDEm%2FVKldgmgc4rf8%2B9aV3VHF7i1R7nl7tNVKOWcLEMtPTdmEEJ9BnpnLaOW6pcApo9TQjSzwTe0W1%2FEivFStKnJLRp4w%2BmI8GvkYLOS2OZcWvUETnCah&X-Amz-Signature=28480b9649eb77d5a2c41283a31303835379344beca4d9a9326acbac19ac3248&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SG5A65Q5%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T131452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFtx%2BfokBIaTbeRAElUcj%2BRzgPSDqKvvcUnspbTAPwHAiEAq2t5L%2FCrqj2FXOxOq%2FhekfH1WeLDKczdvm%2F0QxVe5gYq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDKf%2FjiA1baa584ysRSrcA3PQZQYspLwsC8d7F4X3DjUCHY3dlsAudlll72%2BGRv%2BQr0vqLQvEitMmCKZztLsloSXCxOfX7gT2GZh5fOVRO7LnVrR4jokwS%2FQVE6QR2fAzl8g8USxBYfwnYWX7ymZOiLyNkvtX1B54ngzsQ%2ByfsGS7afhk%2FDTZWvArc5JO8i6NuHNGeQBNvNvl46r3vQQIFqPsdBifnml81q6YO6X2%2Foxvlu6xtp5FoH%2BwTcKgsKaVhpyBBkFbm8cqhti6%2BMOhcJbxaNWShHJTkts06lopIgMoxn1%2Bn3J94Hlg6eba5RJtV477oXYXxxypVsZPgERuhHk6lXyYZM2l1b1xjDYyu%2BiIzxvyNwSMz3ptZ3%2BUzuia1B1%2BIQt3RBADVsWTKzn2KPhLPf0RXrTKoVhwbMGlSCO3NuYpNZ3qApBwaUM7GuRQa3hPJPZtcN6tweaHvOEi9i8X7XzVLFUbX%2FBP1NRLeAEvqABY3l5yEqoQ6qffo3RKDrlBX2bW6LeGlKKE1xpeNyP3uXxTrY0Bp10n0xO49P00IkpXbl%2F1DMNA2uy%2FsPy6pl0npOrRu0KeN8HLWJ7L7ZUdgG7KKym8XzdRwahdGE2VfmVxY4%2Fu0D8USrBl63NbmMgrbdFlfQM%2F70PYMPzygr0GOqUBEK7iybZiH9sUgctqR6e6FfQoLAR5Cz6oMNfKhqGH9VroMI4iaa2g%2FSITpHycKXUm1%2FqRP5fEF%2FrsfHxD0vOiXm24ggpQ1PvQWmFwuHT%2FDEm%2FVKldgmgc4rf8%2B9aV3VHF7i1R7nl7tNVKOWcLEMtPTdmEEJ9BnpnLaOW6pcApo9TQjSzwTe0W1%2FEivFStKnJLRp4w%2BmI8GvkYLOS2OZcWvUETnCah&X-Amz-Signature=3d1ec5ae95b5838ba0dabd80b4c7499f9ce1bba7e65b62bc632b088255b6b2c6&X-Amz-SignedHeaders=host&x-id=GetObject)
