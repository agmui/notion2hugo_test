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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHRQRMAL%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T161108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIH5QvCoXHrLM3NcROmD2hj41mU4fL4A11HkkaS2FUGSiAiBUMsLCyoyxH15FPTlTSP5cP2Esqg0iUnqiJCcNvrl1UiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEmBB8PfHZjnKYPYtKtwDbUNZ%2BHyK8he82vV3yEmwb23Ek8R2Q70YsnJjbtJ1nPiEfnmyClIVkEbs%2FK3qPQ1oelD0EkSLG38%2FhXx2WkExaSkzK5PKXqRktjqQE6d6IItOVIG0pLHPiLRraNuJ31ny8lA3EfMy4iP9aAs0GCZUXuJn%2FGC1t7GiHeHi6DucWpzOCqh3D%2F4uvCDCyKK%2BrP0ocSJz8wmoe3I5ne5etagvXZAHymmyCmlnOr4GJnYPxZe02hUrFY%2FKbfV3QNmCrdTbw6bT9bBAMrYAgbwXBS2cOEDVrb%2FkfhK%2BDq2Vn5%2B3bKTU0ToHLIYanF1wQWnV1BIRm6zg88HKIDqrMiwmb7yd7Bb06J%2FxxyFbItNqxeaUa2iqaIJSt5VtEvzPXx0QCsn%2FrWuIxdOlewOPwmOmHUHLW0%2BcuNBACPCG9B1gpJ2%2BLWbdnM4gs012LgbeKp%2BHNSwsfhMqAzf8JKmgw7KtlFKk56nzCHSwszRsfF749zRfyMFL7cJeM91SCEUCAbKmuowTTVXduUEhB2vzmODTY%2Fob%2BQyFEbfU2hJw%2FPlwgavON7m6HVQefWs2lYgF4iDYA28A0S%2B644eKv8rNg2yKRc2GNlX48%2BueV0teOn74Y0Uy%2FNzKpvCebi3L3TMzNHYwzfK3wQY6pgH5vh8%2BSFl81K6PK83PXMwpPajnkrDRvIzKuPtUP%2Br45XQAGy%2Bn3i1cujkOYZvqKUG%2BSCJdURnUq31L32bXKVz0X6WzDz%2BEFMcKMFPjsvVvpUkFdyb9%2Bu%2Fc5MlGldZtKQcVDhCNMsfNmFIDXBL1upCORmd7HHH%2BlivVRDMUWRz9euPXU%2B5hqXBog%2FCmQJaD%2BaJqkf7nsVekBcNeWoax%2Bs%2F%2FX3cIac7T&X-Amz-Signature=cfd74c2a6c9279dac776320b4c967c854b9268ab263c94127fbdd4a9aa8854e4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHRQRMAL%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T161108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIH5QvCoXHrLM3NcROmD2hj41mU4fL4A11HkkaS2FUGSiAiBUMsLCyoyxH15FPTlTSP5cP2Esqg0iUnqiJCcNvrl1UiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEmBB8PfHZjnKYPYtKtwDbUNZ%2BHyK8he82vV3yEmwb23Ek8R2Q70YsnJjbtJ1nPiEfnmyClIVkEbs%2FK3qPQ1oelD0EkSLG38%2FhXx2WkExaSkzK5PKXqRktjqQE6d6IItOVIG0pLHPiLRraNuJ31ny8lA3EfMy4iP9aAs0GCZUXuJn%2FGC1t7GiHeHi6DucWpzOCqh3D%2F4uvCDCyKK%2BrP0ocSJz8wmoe3I5ne5etagvXZAHymmyCmlnOr4GJnYPxZe02hUrFY%2FKbfV3QNmCrdTbw6bT9bBAMrYAgbwXBS2cOEDVrb%2FkfhK%2BDq2Vn5%2B3bKTU0ToHLIYanF1wQWnV1BIRm6zg88HKIDqrMiwmb7yd7Bb06J%2FxxyFbItNqxeaUa2iqaIJSt5VtEvzPXx0QCsn%2FrWuIxdOlewOPwmOmHUHLW0%2BcuNBACPCG9B1gpJ2%2BLWbdnM4gs012LgbeKp%2BHNSwsfhMqAzf8JKmgw7KtlFKk56nzCHSwszRsfF749zRfyMFL7cJeM91SCEUCAbKmuowTTVXduUEhB2vzmODTY%2Fob%2BQyFEbfU2hJw%2FPlwgavON7m6HVQefWs2lYgF4iDYA28A0S%2B644eKv8rNg2yKRc2GNlX48%2BueV0teOn74Y0Uy%2FNzKpvCebi3L3TMzNHYwzfK3wQY6pgH5vh8%2BSFl81K6PK83PXMwpPajnkrDRvIzKuPtUP%2Br45XQAGy%2Bn3i1cujkOYZvqKUG%2BSCJdURnUq31L32bXKVz0X6WzDz%2BEFMcKMFPjsvVvpUkFdyb9%2Bu%2Fc5MlGldZtKQcVDhCNMsfNmFIDXBL1upCORmd7HHH%2BlivVRDMUWRz9euPXU%2B5hqXBog%2FCmQJaD%2BaJqkf7nsVekBcNeWoax%2Bs%2F%2FX3cIac7T&X-Amz-Signature=74eb70affe3aa04409787ec0a15b133efe455c5dbd67dfb4fd3b16cdf85a813a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHRQRMAL%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T161108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIH5QvCoXHrLM3NcROmD2hj41mU4fL4A11HkkaS2FUGSiAiBUMsLCyoyxH15FPTlTSP5cP2Esqg0iUnqiJCcNvrl1UiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEmBB8PfHZjnKYPYtKtwDbUNZ%2BHyK8he82vV3yEmwb23Ek8R2Q70YsnJjbtJ1nPiEfnmyClIVkEbs%2FK3qPQ1oelD0EkSLG38%2FhXx2WkExaSkzK5PKXqRktjqQE6d6IItOVIG0pLHPiLRraNuJ31ny8lA3EfMy4iP9aAs0GCZUXuJn%2FGC1t7GiHeHi6DucWpzOCqh3D%2F4uvCDCyKK%2BrP0ocSJz8wmoe3I5ne5etagvXZAHymmyCmlnOr4GJnYPxZe02hUrFY%2FKbfV3QNmCrdTbw6bT9bBAMrYAgbwXBS2cOEDVrb%2FkfhK%2BDq2Vn5%2B3bKTU0ToHLIYanF1wQWnV1BIRm6zg88HKIDqrMiwmb7yd7Bb06J%2FxxyFbItNqxeaUa2iqaIJSt5VtEvzPXx0QCsn%2FrWuIxdOlewOPwmOmHUHLW0%2BcuNBACPCG9B1gpJ2%2BLWbdnM4gs012LgbeKp%2BHNSwsfhMqAzf8JKmgw7KtlFKk56nzCHSwszRsfF749zRfyMFL7cJeM91SCEUCAbKmuowTTVXduUEhB2vzmODTY%2Fob%2BQyFEbfU2hJw%2FPlwgavON7m6HVQefWs2lYgF4iDYA28A0S%2B644eKv8rNg2yKRc2GNlX48%2BueV0teOn74Y0Uy%2FNzKpvCebi3L3TMzNHYwzfK3wQY6pgH5vh8%2BSFl81K6PK83PXMwpPajnkrDRvIzKuPtUP%2Br45XQAGy%2Bn3i1cujkOYZvqKUG%2BSCJdURnUq31L32bXKVz0X6WzDz%2BEFMcKMFPjsvVvpUkFdyb9%2Bu%2Fc5MlGldZtKQcVDhCNMsfNmFIDXBL1upCORmd7HHH%2BlivVRDMUWRz9euPXU%2B5hqXBog%2FCmQJaD%2BaJqkf7nsVekBcNeWoax%2Bs%2F%2FX3cIac7T&X-Amz-Signature=fcb2c36cb0c71665c5d0ae746129079349a87671146ff9e411e919cc854f2fcc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHRQRMAL%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T161108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIH5QvCoXHrLM3NcROmD2hj41mU4fL4A11HkkaS2FUGSiAiBUMsLCyoyxH15FPTlTSP5cP2Esqg0iUnqiJCcNvrl1UiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEmBB8PfHZjnKYPYtKtwDbUNZ%2BHyK8he82vV3yEmwb23Ek8R2Q70YsnJjbtJ1nPiEfnmyClIVkEbs%2FK3qPQ1oelD0EkSLG38%2FhXx2WkExaSkzK5PKXqRktjqQE6d6IItOVIG0pLHPiLRraNuJ31ny8lA3EfMy4iP9aAs0GCZUXuJn%2FGC1t7GiHeHi6DucWpzOCqh3D%2F4uvCDCyKK%2BrP0ocSJz8wmoe3I5ne5etagvXZAHymmyCmlnOr4GJnYPxZe02hUrFY%2FKbfV3QNmCrdTbw6bT9bBAMrYAgbwXBS2cOEDVrb%2FkfhK%2BDq2Vn5%2B3bKTU0ToHLIYanF1wQWnV1BIRm6zg88HKIDqrMiwmb7yd7Bb06J%2FxxyFbItNqxeaUa2iqaIJSt5VtEvzPXx0QCsn%2FrWuIxdOlewOPwmOmHUHLW0%2BcuNBACPCG9B1gpJ2%2BLWbdnM4gs012LgbeKp%2BHNSwsfhMqAzf8JKmgw7KtlFKk56nzCHSwszRsfF749zRfyMFL7cJeM91SCEUCAbKmuowTTVXduUEhB2vzmODTY%2Fob%2BQyFEbfU2hJw%2FPlwgavON7m6HVQefWs2lYgF4iDYA28A0S%2B644eKv8rNg2yKRc2GNlX48%2BueV0teOn74Y0Uy%2FNzKpvCebi3L3TMzNHYwzfK3wQY6pgH5vh8%2BSFl81K6PK83PXMwpPajnkrDRvIzKuPtUP%2Br45XQAGy%2Bn3i1cujkOYZvqKUG%2BSCJdURnUq31L32bXKVz0X6WzDz%2BEFMcKMFPjsvVvpUkFdyb9%2Bu%2Fc5MlGldZtKQcVDhCNMsfNmFIDXBL1upCORmd7HHH%2BlivVRDMUWRz9euPXU%2B5hqXBog%2FCmQJaD%2BaJqkf7nsVekBcNeWoax%2Bs%2F%2FX3cIac7T&X-Amz-Signature=5255a23278edc8673f81bff1b34c0ded7ad4ed017d2ab1c34e27e86992a0bff9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHRQRMAL%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T161108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIH5QvCoXHrLM3NcROmD2hj41mU4fL4A11HkkaS2FUGSiAiBUMsLCyoyxH15FPTlTSP5cP2Esqg0iUnqiJCcNvrl1UiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEmBB8PfHZjnKYPYtKtwDbUNZ%2BHyK8he82vV3yEmwb23Ek8R2Q70YsnJjbtJ1nPiEfnmyClIVkEbs%2FK3qPQ1oelD0EkSLG38%2FhXx2WkExaSkzK5PKXqRktjqQE6d6IItOVIG0pLHPiLRraNuJ31ny8lA3EfMy4iP9aAs0GCZUXuJn%2FGC1t7GiHeHi6DucWpzOCqh3D%2F4uvCDCyKK%2BrP0ocSJz8wmoe3I5ne5etagvXZAHymmyCmlnOr4GJnYPxZe02hUrFY%2FKbfV3QNmCrdTbw6bT9bBAMrYAgbwXBS2cOEDVrb%2FkfhK%2BDq2Vn5%2B3bKTU0ToHLIYanF1wQWnV1BIRm6zg88HKIDqrMiwmb7yd7Bb06J%2FxxyFbItNqxeaUa2iqaIJSt5VtEvzPXx0QCsn%2FrWuIxdOlewOPwmOmHUHLW0%2BcuNBACPCG9B1gpJ2%2BLWbdnM4gs012LgbeKp%2BHNSwsfhMqAzf8JKmgw7KtlFKk56nzCHSwszRsfF749zRfyMFL7cJeM91SCEUCAbKmuowTTVXduUEhB2vzmODTY%2Fob%2BQyFEbfU2hJw%2FPlwgavON7m6HVQefWs2lYgF4iDYA28A0S%2B644eKv8rNg2yKRc2GNlX48%2BueV0teOn74Y0Uy%2FNzKpvCebi3L3TMzNHYwzfK3wQY6pgH5vh8%2BSFl81K6PK83PXMwpPajnkrDRvIzKuPtUP%2Br45XQAGy%2Bn3i1cujkOYZvqKUG%2BSCJdURnUq31L32bXKVz0X6WzDz%2BEFMcKMFPjsvVvpUkFdyb9%2Bu%2Fc5MlGldZtKQcVDhCNMsfNmFIDXBL1upCORmd7HHH%2BlivVRDMUWRz9euPXU%2B5hqXBog%2FCmQJaD%2BaJqkf7nsVekBcNeWoax%2Bs%2F%2FX3cIac7T&X-Amz-Signature=2ca96aec87e077b45eecaf6e344fe8c5648ff73ce2320ddc8ae486ecb5a3de6d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHRQRMAL%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T161108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIH5QvCoXHrLM3NcROmD2hj41mU4fL4A11HkkaS2FUGSiAiBUMsLCyoyxH15FPTlTSP5cP2Esqg0iUnqiJCcNvrl1UiqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEmBB8PfHZjnKYPYtKtwDbUNZ%2BHyK8he82vV3yEmwb23Ek8R2Q70YsnJjbtJ1nPiEfnmyClIVkEbs%2FK3qPQ1oelD0EkSLG38%2FhXx2WkExaSkzK5PKXqRktjqQE6d6IItOVIG0pLHPiLRraNuJ31ny8lA3EfMy4iP9aAs0GCZUXuJn%2FGC1t7GiHeHi6DucWpzOCqh3D%2F4uvCDCyKK%2BrP0ocSJz8wmoe3I5ne5etagvXZAHymmyCmlnOr4GJnYPxZe02hUrFY%2FKbfV3QNmCrdTbw6bT9bBAMrYAgbwXBS2cOEDVrb%2FkfhK%2BDq2Vn5%2B3bKTU0ToHLIYanF1wQWnV1BIRm6zg88HKIDqrMiwmb7yd7Bb06J%2FxxyFbItNqxeaUa2iqaIJSt5VtEvzPXx0QCsn%2FrWuIxdOlewOPwmOmHUHLW0%2BcuNBACPCG9B1gpJ2%2BLWbdnM4gs012LgbeKp%2BHNSwsfhMqAzf8JKmgw7KtlFKk56nzCHSwszRsfF749zRfyMFL7cJeM91SCEUCAbKmuowTTVXduUEhB2vzmODTY%2Fob%2BQyFEbfU2hJw%2FPlwgavON7m6HVQefWs2lYgF4iDYA28A0S%2B644eKv8rNg2yKRc2GNlX48%2BueV0teOn74Y0Uy%2FNzKpvCebi3L3TMzNHYwzfK3wQY6pgH5vh8%2BSFl81K6PK83PXMwpPajnkrDRvIzKuPtUP%2Br45XQAGy%2Bn3i1cujkOYZvqKUG%2BSCJdURnUq31L32bXKVz0X6WzDz%2BEFMcKMFPjsvVvpUkFdyb9%2Bu%2Fc5MlGldZtKQcVDhCNMsfNmFIDXBL1upCORmd7HHH%2BlivVRDMUWRz9euPXU%2B5hqXBog%2FCmQJaD%2BaJqkf7nsVekBcNeWoax%2Bs%2F%2FX3cIac7T&X-Amz-Signature=e9d19f4a3e56fe2e3a433a303ed4f73f1c0173f717bc8e897136ef3681b8dc56&X-Amz-SignedHeaders=host&x-id=GetObject)
