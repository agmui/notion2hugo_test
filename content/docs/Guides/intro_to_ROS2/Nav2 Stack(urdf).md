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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR6OCAYK%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T190259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHif7baf5EZxtGO4SdbM%2BKDfwO0bDvuY0A%2B06K8mFlNKAiAciSW%2BKwdS%2BJS6qWO8P2T458Pz4%2BO3gn3oSyGkCaA9oiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF%2BAi0z1RKst1X5iiKtwDpGvXMDpspOcFjrdfcA3KxORHlMCi92ODgRyv7ZXpQtOf0A3X3SWlfCon5T87b5QOeRFSIlViH9pcMIvFTxyxLa6L4ZCcaCXi0tPyq2Q1vymPvjJVo0E4T2RKp3CUjLNR3sP8LmVzAxWdk1OsdGScVmXU2E%2BtNecmKMhDeIhB9ixeFtgUgKHfMn9f3ly5IkFNiobrcBjXVbq%2BEgIOSA1ibLB1qpZ%2BcYhgYioaO9t9pEafKUFoYo7VH3Ia0qvtVsOtqBfRvleWCokFq2%2BqlghAkL9Mqi5Xdz7BfmxHKP0oBw3stLpm7eaP0wgoIo1I2p8yC7%2FJBYSnF1%2BwfcoTbp8448IYYGGh57dusBQxo3NLLPfyNkDik%2FGF%2BFFDf074KsdMt0T0cLfQP0TnTyGnVf92v%2BJ1lHj3M%2FDkp4f0hkVkgRv6s1j6oX%2Bs69%2ByFXDyYwK5HdYQD51hKwqaWYn1VzypmmwDqpP0G1FcaICTBJQS%2BQ7xZHCnuOLRK%2BVetlbfv5qc0mENdndDafOi4x6N%2FB%2Bywf4JprMlcp1R7tgS4cXWYYMi3zaaLW9AY1gwiVVeRi1lvkj5dm48pn2FXWFTceV8767n3iTILkQyuPea0LOkwVY%2FWxQrcYLuBPEchiEwkdXMvgY6pgGRqczZLNcZVkQrCpApA5PEnoRpZtK%2FsWaQZCkkSDb4m7rOmP8cpQceN8lT6QWyzP7eHxx3V5IlAwVecy4mRsrOjBy3aq%2FPW9q9JdMPXOLW443Jj3JeZs15mBQ9860xEjMb9wmBEhQ9ixHLeln6DUw85KNBcRKLSjx9GGB%2Bnmtgl1q7pVFfvo65lQxe36dOT%2Fp%2B%2F%2FgX3gIbW3tikqJVk18E%2FSE%2BldV5&X-Amz-Signature=5bbb9cee1ea392931f61e303010efb6c856b36ebfa51911b945cbb50aee5ac4a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR6OCAYK%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T190259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHif7baf5EZxtGO4SdbM%2BKDfwO0bDvuY0A%2B06K8mFlNKAiAciSW%2BKwdS%2BJS6qWO8P2T458Pz4%2BO3gn3oSyGkCaA9oiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF%2BAi0z1RKst1X5iiKtwDpGvXMDpspOcFjrdfcA3KxORHlMCi92ODgRyv7ZXpQtOf0A3X3SWlfCon5T87b5QOeRFSIlViH9pcMIvFTxyxLa6L4ZCcaCXi0tPyq2Q1vymPvjJVo0E4T2RKp3CUjLNR3sP8LmVzAxWdk1OsdGScVmXU2E%2BtNecmKMhDeIhB9ixeFtgUgKHfMn9f3ly5IkFNiobrcBjXVbq%2BEgIOSA1ibLB1qpZ%2BcYhgYioaO9t9pEafKUFoYo7VH3Ia0qvtVsOtqBfRvleWCokFq2%2BqlghAkL9Mqi5Xdz7BfmxHKP0oBw3stLpm7eaP0wgoIo1I2p8yC7%2FJBYSnF1%2BwfcoTbp8448IYYGGh57dusBQxo3NLLPfyNkDik%2FGF%2BFFDf074KsdMt0T0cLfQP0TnTyGnVf92v%2BJ1lHj3M%2FDkp4f0hkVkgRv6s1j6oX%2Bs69%2ByFXDyYwK5HdYQD51hKwqaWYn1VzypmmwDqpP0G1FcaICTBJQS%2BQ7xZHCnuOLRK%2BVetlbfv5qc0mENdndDafOi4x6N%2FB%2Bywf4JprMlcp1R7tgS4cXWYYMi3zaaLW9AY1gwiVVeRi1lvkj5dm48pn2FXWFTceV8767n3iTILkQyuPea0LOkwVY%2FWxQrcYLuBPEchiEwkdXMvgY6pgGRqczZLNcZVkQrCpApA5PEnoRpZtK%2FsWaQZCkkSDb4m7rOmP8cpQceN8lT6QWyzP7eHxx3V5IlAwVecy4mRsrOjBy3aq%2FPW9q9JdMPXOLW443Jj3JeZs15mBQ9860xEjMb9wmBEhQ9ixHLeln6DUw85KNBcRKLSjx9GGB%2Bnmtgl1q7pVFfvo65lQxe36dOT%2Fp%2B%2F%2FgX3gIbW3tikqJVk18E%2FSE%2BldV5&X-Amz-Signature=d593e27e74b66f3ac8d98b78532a4c3b592921a0d90d49454f0942f7890e32e1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR6OCAYK%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T190259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHif7baf5EZxtGO4SdbM%2BKDfwO0bDvuY0A%2B06K8mFlNKAiAciSW%2BKwdS%2BJS6qWO8P2T458Pz4%2BO3gn3oSyGkCaA9oiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF%2BAi0z1RKst1X5iiKtwDpGvXMDpspOcFjrdfcA3KxORHlMCi92ODgRyv7ZXpQtOf0A3X3SWlfCon5T87b5QOeRFSIlViH9pcMIvFTxyxLa6L4ZCcaCXi0tPyq2Q1vymPvjJVo0E4T2RKp3CUjLNR3sP8LmVzAxWdk1OsdGScVmXU2E%2BtNecmKMhDeIhB9ixeFtgUgKHfMn9f3ly5IkFNiobrcBjXVbq%2BEgIOSA1ibLB1qpZ%2BcYhgYioaO9t9pEafKUFoYo7VH3Ia0qvtVsOtqBfRvleWCokFq2%2BqlghAkL9Mqi5Xdz7BfmxHKP0oBw3stLpm7eaP0wgoIo1I2p8yC7%2FJBYSnF1%2BwfcoTbp8448IYYGGh57dusBQxo3NLLPfyNkDik%2FGF%2BFFDf074KsdMt0T0cLfQP0TnTyGnVf92v%2BJ1lHj3M%2FDkp4f0hkVkgRv6s1j6oX%2Bs69%2ByFXDyYwK5HdYQD51hKwqaWYn1VzypmmwDqpP0G1FcaICTBJQS%2BQ7xZHCnuOLRK%2BVetlbfv5qc0mENdndDafOi4x6N%2FB%2Bywf4JprMlcp1R7tgS4cXWYYMi3zaaLW9AY1gwiVVeRi1lvkj5dm48pn2FXWFTceV8767n3iTILkQyuPea0LOkwVY%2FWxQrcYLuBPEchiEwkdXMvgY6pgGRqczZLNcZVkQrCpApA5PEnoRpZtK%2FsWaQZCkkSDb4m7rOmP8cpQceN8lT6QWyzP7eHxx3V5IlAwVecy4mRsrOjBy3aq%2FPW9q9JdMPXOLW443Jj3JeZs15mBQ9860xEjMb9wmBEhQ9ixHLeln6DUw85KNBcRKLSjx9GGB%2Bnmtgl1q7pVFfvo65lQxe36dOT%2Fp%2B%2F%2FgX3gIbW3tikqJVk18E%2FSE%2BldV5&X-Amz-Signature=8a50a3faf17efd1502e7f9b58ce25899f0fc7d5d4bb7c5cbb8bc4945c8952156&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR6OCAYK%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T190259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHif7baf5EZxtGO4SdbM%2BKDfwO0bDvuY0A%2B06K8mFlNKAiAciSW%2BKwdS%2BJS6qWO8P2T458Pz4%2BO3gn3oSyGkCaA9oiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF%2BAi0z1RKst1X5iiKtwDpGvXMDpspOcFjrdfcA3KxORHlMCi92ODgRyv7ZXpQtOf0A3X3SWlfCon5T87b5QOeRFSIlViH9pcMIvFTxyxLa6L4ZCcaCXi0tPyq2Q1vymPvjJVo0E4T2RKp3CUjLNR3sP8LmVzAxWdk1OsdGScVmXU2E%2BtNecmKMhDeIhB9ixeFtgUgKHfMn9f3ly5IkFNiobrcBjXVbq%2BEgIOSA1ibLB1qpZ%2BcYhgYioaO9t9pEafKUFoYo7VH3Ia0qvtVsOtqBfRvleWCokFq2%2BqlghAkL9Mqi5Xdz7BfmxHKP0oBw3stLpm7eaP0wgoIo1I2p8yC7%2FJBYSnF1%2BwfcoTbp8448IYYGGh57dusBQxo3NLLPfyNkDik%2FGF%2BFFDf074KsdMt0T0cLfQP0TnTyGnVf92v%2BJ1lHj3M%2FDkp4f0hkVkgRv6s1j6oX%2Bs69%2ByFXDyYwK5HdYQD51hKwqaWYn1VzypmmwDqpP0G1FcaICTBJQS%2BQ7xZHCnuOLRK%2BVetlbfv5qc0mENdndDafOi4x6N%2FB%2Bywf4JprMlcp1R7tgS4cXWYYMi3zaaLW9AY1gwiVVeRi1lvkj5dm48pn2FXWFTceV8767n3iTILkQyuPea0LOkwVY%2FWxQrcYLuBPEchiEwkdXMvgY6pgGRqczZLNcZVkQrCpApA5PEnoRpZtK%2FsWaQZCkkSDb4m7rOmP8cpQceN8lT6QWyzP7eHxx3V5IlAwVecy4mRsrOjBy3aq%2FPW9q9JdMPXOLW443Jj3JeZs15mBQ9860xEjMb9wmBEhQ9ixHLeln6DUw85KNBcRKLSjx9GGB%2Bnmtgl1q7pVFfvo65lQxe36dOT%2Fp%2B%2F%2FgX3gIbW3tikqJVk18E%2FSE%2BldV5&X-Amz-Signature=fb55acf428bf3f8ec0bd812a36f472212f92c9143ee3dd0a0fd0234f26642024&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR6OCAYK%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T190259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHif7baf5EZxtGO4SdbM%2BKDfwO0bDvuY0A%2B06K8mFlNKAiAciSW%2BKwdS%2BJS6qWO8P2T458Pz4%2BO3gn3oSyGkCaA9oiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF%2BAi0z1RKst1X5iiKtwDpGvXMDpspOcFjrdfcA3KxORHlMCi92ODgRyv7ZXpQtOf0A3X3SWlfCon5T87b5QOeRFSIlViH9pcMIvFTxyxLa6L4ZCcaCXi0tPyq2Q1vymPvjJVo0E4T2RKp3CUjLNR3sP8LmVzAxWdk1OsdGScVmXU2E%2BtNecmKMhDeIhB9ixeFtgUgKHfMn9f3ly5IkFNiobrcBjXVbq%2BEgIOSA1ibLB1qpZ%2BcYhgYioaO9t9pEafKUFoYo7VH3Ia0qvtVsOtqBfRvleWCokFq2%2BqlghAkL9Mqi5Xdz7BfmxHKP0oBw3stLpm7eaP0wgoIo1I2p8yC7%2FJBYSnF1%2BwfcoTbp8448IYYGGh57dusBQxo3NLLPfyNkDik%2FGF%2BFFDf074KsdMt0T0cLfQP0TnTyGnVf92v%2BJ1lHj3M%2FDkp4f0hkVkgRv6s1j6oX%2Bs69%2ByFXDyYwK5HdYQD51hKwqaWYn1VzypmmwDqpP0G1FcaICTBJQS%2BQ7xZHCnuOLRK%2BVetlbfv5qc0mENdndDafOi4x6N%2FB%2Bywf4JprMlcp1R7tgS4cXWYYMi3zaaLW9AY1gwiVVeRi1lvkj5dm48pn2FXWFTceV8767n3iTILkQyuPea0LOkwVY%2FWxQrcYLuBPEchiEwkdXMvgY6pgGRqczZLNcZVkQrCpApA5PEnoRpZtK%2FsWaQZCkkSDb4m7rOmP8cpQceN8lT6QWyzP7eHxx3V5IlAwVecy4mRsrOjBy3aq%2FPW9q9JdMPXOLW443Jj3JeZs15mBQ9860xEjMb9wmBEhQ9ixHLeln6DUw85KNBcRKLSjx9GGB%2Bnmtgl1q7pVFfvo65lQxe36dOT%2Fp%2B%2F%2FgX3gIbW3tikqJVk18E%2FSE%2BldV5&X-Amz-Signature=d8af3027535f7242364898ef50370c4c126301ab884beb3d247a1ef8efc0cfcb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR6OCAYK%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T190259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHif7baf5EZxtGO4SdbM%2BKDfwO0bDvuY0A%2B06K8mFlNKAiAciSW%2BKwdS%2BJS6qWO8P2T458Pz4%2BO3gn3oSyGkCaA9oiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF%2BAi0z1RKst1X5iiKtwDpGvXMDpspOcFjrdfcA3KxORHlMCi92ODgRyv7ZXpQtOf0A3X3SWlfCon5T87b5QOeRFSIlViH9pcMIvFTxyxLa6L4ZCcaCXi0tPyq2Q1vymPvjJVo0E4T2RKp3CUjLNR3sP8LmVzAxWdk1OsdGScVmXU2E%2BtNecmKMhDeIhB9ixeFtgUgKHfMn9f3ly5IkFNiobrcBjXVbq%2BEgIOSA1ibLB1qpZ%2BcYhgYioaO9t9pEafKUFoYo7VH3Ia0qvtVsOtqBfRvleWCokFq2%2BqlghAkL9Mqi5Xdz7BfmxHKP0oBw3stLpm7eaP0wgoIo1I2p8yC7%2FJBYSnF1%2BwfcoTbp8448IYYGGh57dusBQxo3NLLPfyNkDik%2FGF%2BFFDf074KsdMt0T0cLfQP0TnTyGnVf92v%2BJ1lHj3M%2FDkp4f0hkVkgRv6s1j6oX%2Bs69%2ByFXDyYwK5HdYQD51hKwqaWYn1VzypmmwDqpP0G1FcaICTBJQS%2BQ7xZHCnuOLRK%2BVetlbfv5qc0mENdndDafOi4x6N%2FB%2Bywf4JprMlcp1R7tgS4cXWYYMi3zaaLW9AY1gwiVVeRi1lvkj5dm48pn2FXWFTceV8767n3iTILkQyuPea0LOkwVY%2FWxQrcYLuBPEchiEwkdXMvgY6pgGRqczZLNcZVkQrCpApA5PEnoRpZtK%2FsWaQZCkkSDb4m7rOmP8cpQceN8lT6QWyzP7eHxx3V5IlAwVecy4mRsrOjBy3aq%2FPW9q9JdMPXOLW443Jj3JeZs15mBQ9860xEjMb9wmBEhQ9ixHLeln6DUw85KNBcRKLSjx9GGB%2Bnmtgl1q7pVFfvo65lQxe36dOT%2Fp%2B%2F%2FgX3gIbW3tikqJVk18E%2FSE%2BldV5&X-Amz-Signature=53f0e9d2a205a570ed7f714dd5a3ca83d91f59f2b87582b216e86dce8e31b1f0&X-Amz-SignedHeaders=host&x-id=GetObject)
