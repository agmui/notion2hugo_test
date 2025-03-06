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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662I26DLN%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmshaUzgqO%2BuvPg5yVmUE7yGZ2e6RW45qShXIbPgtPjAiApHQMLeLt9ZpLCyrzeIYQLb8p8sJbMBAHK0huvnTtUjSr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM6EOf5IO0ZpvyOG1DKtwD9V0zPq%2BYP9QfoRjOqF2CZj31GLO7quyktOZXbq2leNm%2FHtjIpbQfxklxoFQ3r1perz2WHSdf6EfFespiR%2BElSfG7T8m92Be6mMd%2BGkZjxmPbAq8b8U7qV45PCCPjF8WaW80IVcvWZDqhY2f0qJsCAc15xxH4GYoBnsf7FNjv7EZhAEIemZN%2Fw5jjNdUeNFz1rndiNtlAFinW1D7DLMB9DgkpQdGNphNrW4ueUPEYhsJaVenqXdDHms5m%2FDUn2pSupZH4dTSjgR%2FDm78tkv1NAwGIO%2BCMq2NA3Vvj%2BBe1oGQaqbfWI0genFTZbULrs3BktbQXVZy%2FAO95oQbf1%2F3qB%2F6h4oZfgEpSHZ0KFDVwAFKjMYa%2BcCPh1zk2Or2gO9dq46%2F2BA6nDRthpxIfy0v1racPgdWHUbEXz3Efqp3y4mzl7UI6DFbdLQfuLJHTvJpTAziIqdj%2FTWdJM1Xki2zJwkX1V2bnK08IslEvbj3ArWEPHYhSzrB6CuMp0H6pgIFlfP5kybhP1ZwEjPbf0a9khqwlLkc75r19DxIigFeCYgcGibjAbDlURMh%2BNLKvdIE5P4K0bYcu9qYI1fVXw%2FzzH5ysYIDjpxmmtmmSfGo5RTY8UcdP%2F50Wufj1ZY0wt%2FKlvgY6pgG1YOZky0b1lD15AH4wWUW3wdfyXiBeRhN0IMVtdpEuT9Z5ygH%2BaXaIMMBoC9b49%2Bt33CKLxICC91KS4%2FP5uI09EGE9UN65qgzroAfGVGdFD58op6Oy%2FRG7jwFuUYfMxY3QF22SlDPuwDVse3%2BWA0SfRfANPrAP6ssVLhvuvQ7VggmrEz9azqzedpcWzjOsoiBHcZEKb9pQvIRknduVwyrAKhveyCCK&X-Amz-Signature=ed75cb61efb13a7b9a1898220b0d9c73712a58019d48286ddd4c72ac76c3baa2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662I26DLN%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmshaUzgqO%2BuvPg5yVmUE7yGZ2e6RW45qShXIbPgtPjAiApHQMLeLt9ZpLCyrzeIYQLb8p8sJbMBAHK0huvnTtUjSr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM6EOf5IO0ZpvyOG1DKtwD9V0zPq%2BYP9QfoRjOqF2CZj31GLO7quyktOZXbq2leNm%2FHtjIpbQfxklxoFQ3r1perz2WHSdf6EfFespiR%2BElSfG7T8m92Be6mMd%2BGkZjxmPbAq8b8U7qV45PCCPjF8WaW80IVcvWZDqhY2f0qJsCAc15xxH4GYoBnsf7FNjv7EZhAEIemZN%2Fw5jjNdUeNFz1rndiNtlAFinW1D7DLMB9DgkpQdGNphNrW4ueUPEYhsJaVenqXdDHms5m%2FDUn2pSupZH4dTSjgR%2FDm78tkv1NAwGIO%2BCMq2NA3Vvj%2BBe1oGQaqbfWI0genFTZbULrs3BktbQXVZy%2FAO95oQbf1%2F3qB%2F6h4oZfgEpSHZ0KFDVwAFKjMYa%2BcCPh1zk2Or2gO9dq46%2F2BA6nDRthpxIfy0v1racPgdWHUbEXz3Efqp3y4mzl7UI6DFbdLQfuLJHTvJpTAziIqdj%2FTWdJM1Xki2zJwkX1V2bnK08IslEvbj3ArWEPHYhSzrB6CuMp0H6pgIFlfP5kybhP1ZwEjPbf0a9khqwlLkc75r19DxIigFeCYgcGibjAbDlURMh%2BNLKvdIE5P4K0bYcu9qYI1fVXw%2FzzH5ysYIDjpxmmtmmSfGo5RTY8UcdP%2F50Wufj1ZY0wt%2FKlvgY6pgG1YOZky0b1lD15AH4wWUW3wdfyXiBeRhN0IMVtdpEuT9Z5ygH%2BaXaIMMBoC9b49%2Bt33CKLxICC91KS4%2FP5uI09EGE9UN65qgzroAfGVGdFD58op6Oy%2FRG7jwFuUYfMxY3QF22SlDPuwDVse3%2BWA0SfRfANPrAP6ssVLhvuvQ7VggmrEz9azqzedpcWzjOsoiBHcZEKb9pQvIRknduVwyrAKhveyCCK&X-Amz-Signature=7f8347956981d60d67538c3114226221d0d0807b1b83546168671ceb601ff777&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662I26DLN%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmshaUzgqO%2BuvPg5yVmUE7yGZ2e6RW45qShXIbPgtPjAiApHQMLeLt9ZpLCyrzeIYQLb8p8sJbMBAHK0huvnTtUjSr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM6EOf5IO0ZpvyOG1DKtwD9V0zPq%2BYP9QfoRjOqF2CZj31GLO7quyktOZXbq2leNm%2FHtjIpbQfxklxoFQ3r1perz2WHSdf6EfFespiR%2BElSfG7T8m92Be6mMd%2BGkZjxmPbAq8b8U7qV45PCCPjF8WaW80IVcvWZDqhY2f0qJsCAc15xxH4GYoBnsf7FNjv7EZhAEIemZN%2Fw5jjNdUeNFz1rndiNtlAFinW1D7DLMB9DgkpQdGNphNrW4ueUPEYhsJaVenqXdDHms5m%2FDUn2pSupZH4dTSjgR%2FDm78tkv1NAwGIO%2BCMq2NA3Vvj%2BBe1oGQaqbfWI0genFTZbULrs3BktbQXVZy%2FAO95oQbf1%2F3qB%2F6h4oZfgEpSHZ0KFDVwAFKjMYa%2BcCPh1zk2Or2gO9dq46%2F2BA6nDRthpxIfy0v1racPgdWHUbEXz3Efqp3y4mzl7UI6DFbdLQfuLJHTvJpTAziIqdj%2FTWdJM1Xki2zJwkX1V2bnK08IslEvbj3ArWEPHYhSzrB6CuMp0H6pgIFlfP5kybhP1ZwEjPbf0a9khqwlLkc75r19DxIigFeCYgcGibjAbDlURMh%2BNLKvdIE5P4K0bYcu9qYI1fVXw%2FzzH5ysYIDjpxmmtmmSfGo5RTY8UcdP%2F50Wufj1ZY0wt%2FKlvgY6pgG1YOZky0b1lD15AH4wWUW3wdfyXiBeRhN0IMVtdpEuT9Z5ygH%2BaXaIMMBoC9b49%2Bt33CKLxICC91KS4%2FP5uI09EGE9UN65qgzroAfGVGdFD58op6Oy%2FRG7jwFuUYfMxY3QF22SlDPuwDVse3%2BWA0SfRfANPrAP6ssVLhvuvQ7VggmrEz9azqzedpcWzjOsoiBHcZEKb9pQvIRknduVwyrAKhveyCCK&X-Amz-Signature=40710ea44d2c1c1929dec13452d15cb6339fb2e7ffd8b8dd67d6b4e6e66b992e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662I26DLN%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmshaUzgqO%2BuvPg5yVmUE7yGZ2e6RW45qShXIbPgtPjAiApHQMLeLt9ZpLCyrzeIYQLb8p8sJbMBAHK0huvnTtUjSr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM6EOf5IO0ZpvyOG1DKtwD9V0zPq%2BYP9QfoRjOqF2CZj31GLO7quyktOZXbq2leNm%2FHtjIpbQfxklxoFQ3r1perz2WHSdf6EfFespiR%2BElSfG7T8m92Be6mMd%2BGkZjxmPbAq8b8U7qV45PCCPjF8WaW80IVcvWZDqhY2f0qJsCAc15xxH4GYoBnsf7FNjv7EZhAEIemZN%2Fw5jjNdUeNFz1rndiNtlAFinW1D7DLMB9DgkpQdGNphNrW4ueUPEYhsJaVenqXdDHms5m%2FDUn2pSupZH4dTSjgR%2FDm78tkv1NAwGIO%2BCMq2NA3Vvj%2BBe1oGQaqbfWI0genFTZbULrs3BktbQXVZy%2FAO95oQbf1%2F3qB%2F6h4oZfgEpSHZ0KFDVwAFKjMYa%2BcCPh1zk2Or2gO9dq46%2F2BA6nDRthpxIfy0v1racPgdWHUbEXz3Efqp3y4mzl7UI6DFbdLQfuLJHTvJpTAziIqdj%2FTWdJM1Xki2zJwkX1V2bnK08IslEvbj3ArWEPHYhSzrB6CuMp0H6pgIFlfP5kybhP1ZwEjPbf0a9khqwlLkc75r19DxIigFeCYgcGibjAbDlURMh%2BNLKvdIE5P4K0bYcu9qYI1fVXw%2FzzH5ysYIDjpxmmtmmSfGo5RTY8UcdP%2F50Wufj1ZY0wt%2FKlvgY6pgG1YOZky0b1lD15AH4wWUW3wdfyXiBeRhN0IMVtdpEuT9Z5ygH%2BaXaIMMBoC9b49%2Bt33CKLxICC91KS4%2FP5uI09EGE9UN65qgzroAfGVGdFD58op6Oy%2FRG7jwFuUYfMxY3QF22SlDPuwDVse3%2BWA0SfRfANPrAP6ssVLhvuvQ7VggmrEz9azqzedpcWzjOsoiBHcZEKb9pQvIRknduVwyrAKhveyCCK&X-Amz-Signature=7b77799885221f89c375926ce9370ae988a2a8232ea6c356e14b855e902a7397&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662I26DLN%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmshaUzgqO%2BuvPg5yVmUE7yGZ2e6RW45qShXIbPgtPjAiApHQMLeLt9ZpLCyrzeIYQLb8p8sJbMBAHK0huvnTtUjSr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM6EOf5IO0ZpvyOG1DKtwD9V0zPq%2BYP9QfoRjOqF2CZj31GLO7quyktOZXbq2leNm%2FHtjIpbQfxklxoFQ3r1perz2WHSdf6EfFespiR%2BElSfG7T8m92Be6mMd%2BGkZjxmPbAq8b8U7qV45PCCPjF8WaW80IVcvWZDqhY2f0qJsCAc15xxH4GYoBnsf7FNjv7EZhAEIemZN%2Fw5jjNdUeNFz1rndiNtlAFinW1D7DLMB9DgkpQdGNphNrW4ueUPEYhsJaVenqXdDHms5m%2FDUn2pSupZH4dTSjgR%2FDm78tkv1NAwGIO%2BCMq2NA3Vvj%2BBe1oGQaqbfWI0genFTZbULrs3BktbQXVZy%2FAO95oQbf1%2F3qB%2F6h4oZfgEpSHZ0KFDVwAFKjMYa%2BcCPh1zk2Or2gO9dq46%2F2BA6nDRthpxIfy0v1racPgdWHUbEXz3Efqp3y4mzl7UI6DFbdLQfuLJHTvJpTAziIqdj%2FTWdJM1Xki2zJwkX1V2bnK08IslEvbj3ArWEPHYhSzrB6CuMp0H6pgIFlfP5kybhP1ZwEjPbf0a9khqwlLkc75r19DxIigFeCYgcGibjAbDlURMh%2BNLKvdIE5P4K0bYcu9qYI1fVXw%2FzzH5ysYIDjpxmmtmmSfGo5RTY8UcdP%2F50Wufj1ZY0wt%2FKlvgY6pgG1YOZky0b1lD15AH4wWUW3wdfyXiBeRhN0IMVtdpEuT9Z5ygH%2BaXaIMMBoC9b49%2Bt33CKLxICC91KS4%2FP5uI09EGE9UN65qgzroAfGVGdFD58op6Oy%2FRG7jwFuUYfMxY3QF22SlDPuwDVse3%2BWA0SfRfANPrAP6ssVLhvuvQ7VggmrEz9azqzedpcWzjOsoiBHcZEKb9pQvIRknduVwyrAKhveyCCK&X-Amz-Signature=756f163391b0e601ff257496686fb3341ef429bb448fd1f1dd18212eaa531568&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662I26DLN%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T110719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmshaUzgqO%2BuvPg5yVmUE7yGZ2e6RW45qShXIbPgtPjAiApHQMLeLt9ZpLCyrzeIYQLb8p8sJbMBAHK0huvnTtUjSr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM6EOf5IO0ZpvyOG1DKtwD9V0zPq%2BYP9QfoRjOqF2CZj31GLO7quyktOZXbq2leNm%2FHtjIpbQfxklxoFQ3r1perz2WHSdf6EfFespiR%2BElSfG7T8m92Be6mMd%2BGkZjxmPbAq8b8U7qV45PCCPjF8WaW80IVcvWZDqhY2f0qJsCAc15xxH4GYoBnsf7FNjv7EZhAEIemZN%2Fw5jjNdUeNFz1rndiNtlAFinW1D7DLMB9DgkpQdGNphNrW4ueUPEYhsJaVenqXdDHms5m%2FDUn2pSupZH4dTSjgR%2FDm78tkv1NAwGIO%2BCMq2NA3Vvj%2BBe1oGQaqbfWI0genFTZbULrs3BktbQXVZy%2FAO95oQbf1%2F3qB%2F6h4oZfgEpSHZ0KFDVwAFKjMYa%2BcCPh1zk2Or2gO9dq46%2F2BA6nDRthpxIfy0v1racPgdWHUbEXz3Efqp3y4mzl7UI6DFbdLQfuLJHTvJpTAziIqdj%2FTWdJM1Xki2zJwkX1V2bnK08IslEvbj3ArWEPHYhSzrB6CuMp0H6pgIFlfP5kybhP1ZwEjPbf0a9khqwlLkc75r19DxIigFeCYgcGibjAbDlURMh%2BNLKvdIE5P4K0bYcu9qYI1fVXw%2FzzH5ysYIDjpxmmtmmSfGo5RTY8UcdP%2F50Wufj1ZY0wt%2FKlvgY6pgG1YOZky0b1lD15AH4wWUW3wdfyXiBeRhN0IMVtdpEuT9Z5ygH%2BaXaIMMBoC9b49%2Bt33CKLxICC91KS4%2FP5uI09EGE9UN65qgzroAfGVGdFD58op6Oy%2FRG7jwFuUYfMxY3QF22SlDPuwDVse3%2BWA0SfRfANPrAP6ssVLhvuvQ7VggmrEz9azqzedpcWzjOsoiBHcZEKb9pQvIRknduVwyrAKhveyCCK&X-Amz-Signature=d7be23c531db7d999d13a44f1e3d8686ee0a5ec2482511308db5b35b7c8ade84&X-Amz-SignedHeaders=host&x-id=GetObject)
