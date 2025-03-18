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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HB5MVEI%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T070856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDnxG42OfNeqZv855Pap60%2BgZP1GOqLe7ljhaK9FsSxDAiB4EKkuE3ilsDmvtYUANrKK7Wf9FlTzFc87j34wvCymhir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMbAKvw5YorE3Paau1KtwDC1fwa6HXxd53GB%2BVz491z4JG7y97huL30DGK2fs%2B8PLPoE%2B0A%2BeNUq1lN3ihTxHIE4hbRDzaldaa4TNti5o7DcN9qjj5%2BNkkO9%2ByTdbJiJOqQaxF46%2Fqp25gT2os%2BdY3nRY0VP4SZHQcK72myxIjKopZywlUZLA1t114Alzux%2BH6vgf98l1awJDeIvMpUZipZryxwSe3Cp5LC0sYu7y%2F6qZ157wwMF75%2FnwcLkPKi02aEM%2B3psTfnIwVScsNeGdI%2B23KutVW91d62lJPtnFkw584WNjL8dSnEePIMGa929gEsw7LSJ58Buad%2BsNL3mUOb3%2FjICv4a2kpef9B3gNzvvucPgOWbRvDeETaJMqFVciUdFVLv52EUI%2FxgKFhUm2W2nu4fF5GtecpnpVzbucb%2BNNAe5f63kcA1Vd5lzlVZ7zKgVVESAmEzuH7Rm9skMRk5pBHIqRoBUCot8DajWcfJydgFKhKibPefzF4qljyaypqp5lwcqHBeGvEjCH76os9r1PTxfbZVcxP1gmk4RqFDJAD%2BZXiTpOSEoPLvR2S62QoU211h62YKN8PJ1ucTvH7skXbm2hAuiuvQXVpxMNZv3iq3ba%2FrkhWBNVdWfSKIYYRn1Xdr2EMZLAuuNQw9rbkvgY6pgEWMdyyFAO1drL5RTH49hG%2F22sTEMGx1wXqWfezRnEgFtcNp9RbxOtvvIX%2B3hERvBSom7u%2FBzjCQtv5GmT43xPzha32xtJB%2F6BqNu0l57VPMDQflXy68aFPU%2BgvvJdAOAIYxQlmjYftdELGP3I6Kh%2FqvWy9Nrj2W86V6aM0K3O00HmquvgpfEOfaCJGr5p9VwA8jDzJ7I%2FaeKMiq2wsfrdmsqF0a51d&X-Amz-Signature=8e43a3b4cb7abb4009bca41beca538bc7885d808810f4009b354df248081af8d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HB5MVEI%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T070856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDnxG42OfNeqZv855Pap60%2BgZP1GOqLe7ljhaK9FsSxDAiB4EKkuE3ilsDmvtYUANrKK7Wf9FlTzFc87j34wvCymhir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMbAKvw5YorE3Paau1KtwDC1fwa6HXxd53GB%2BVz491z4JG7y97huL30DGK2fs%2B8PLPoE%2B0A%2BeNUq1lN3ihTxHIE4hbRDzaldaa4TNti5o7DcN9qjj5%2BNkkO9%2ByTdbJiJOqQaxF46%2Fqp25gT2os%2BdY3nRY0VP4SZHQcK72myxIjKopZywlUZLA1t114Alzux%2BH6vgf98l1awJDeIvMpUZipZryxwSe3Cp5LC0sYu7y%2F6qZ157wwMF75%2FnwcLkPKi02aEM%2B3psTfnIwVScsNeGdI%2B23KutVW91d62lJPtnFkw584WNjL8dSnEePIMGa929gEsw7LSJ58Buad%2BsNL3mUOb3%2FjICv4a2kpef9B3gNzvvucPgOWbRvDeETaJMqFVciUdFVLv52EUI%2FxgKFhUm2W2nu4fF5GtecpnpVzbucb%2BNNAe5f63kcA1Vd5lzlVZ7zKgVVESAmEzuH7Rm9skMRk5pBHIqRoBUCot8DajWcfJydgFKhKibPefzF4qljyaypqp5lwcqHBeGvEjCH76os9r1PTxfbZVcxP1gmk4RqFDJAD%2BZXiTpOSEoPLvR2S62QoU211h62YKN8PJ1ucTvH7skXbm2hAuiuvQXVpxMNZv3iq3ba%2FrkhWBNVdWfSKIYYRn1Xdr2EMZLAuuNQw9rbkvgY6pgEWMdyyFAO1drL5RTH49hG%2F22sTEMGx1wXqWfezRnEgFtcNp9RbxOtvvIX%2B3hERvBSom7u%2FBzjCQtv5GmT43xPzha32xtJB%2F6BqNu0l57VPMDQflXy68aFPU%2BgvvJdAOAIYxQlmjYftdELGP3I6Kh%2FqvWy9Nrj2W86V6aM0K3O00HmquvgpfEOfaCJGr5p9VwA8jDzJ7I%2FaeKMiq2wsfrdmsqF0a51d&X-Amz-Signature=d6addafbfb24944a83f6fc47624ed1409f01ec2a57d7d0b10844cb8edad35e61&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HB5MVEI%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T070856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDnxG42OfNeqZv855Pap60%2BgZP1GOqLe7ljhaK9FsSxDAiB4EKkuE3ilsDmvtYUANrKK7Wf9FlTzFc87j34wvCymhir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMbAKvw5YorE3Paau1KtwDC1fwa6HXxd53GB%2BVz491z4JG7y97huL30DGK2fs%2B8PLPoE%2B0A%2BeNUq1lN3ihTxHIE4hbRDzaldaa4TNti5o7DcN9qjj5%2BNkkO9%2ByTdbJiJOqQaxF46%2Fqp25gT2os%2BdY3nRY0VP4SZHQcK72myxIjKopZywlUZLA1t114Alzux%2BH6vgf98l1awJDeIvMpUZipZryxwSe3Cp5LC0sYu7y%2F6qZ157wwMF75%2FnwcLkPKi02aEM%2B3psTfnIwVScsNeGdI%2B23KutVW91d62lJPtnFkw584WNjL8dSnEePIMGa929gEsw7LSJ58Buad%2BsNL3mUOb3%2FjICv4a2kpef9B3gNzvvucPgOWbRvDeETaJMqFVciUdFVLv52EUI%2FxgKFhUm2W2nu4fF5GtecpnpVzbucb%2BNNAe5f63kcA1Vd5lzlVZ7zKgVVESAmEzuH7Rm9skMRk5pBHIqRoBUCot8DajWcfJydgFKhKibPefzF4qljyaypqp5lwcqHBeGvEjCH76os9r1PTxfbZVcxP1gmk4RqFDJAD%2BZXiTpOSEoPLvR2S62QoU211h62YKN8PJ1ucTvH7skXbm2hAuiuvQXVpxMNZv3iq3ba%2FrkhWBNVdWfSKIYYRn1Xdr2EMZLAuuNQw9rbkvgY6pgEWMdyyFAO1drL5RTH49hG%2F22sTEMGx1wXqWfezRnEgFtcNp9RbxOtvvIX%2B3hERvBSom7u%2FBzjCQtv5GmT43xPzha32xtJB%2F6BqNu0l57VPMDQflXy68aFPU%2BgvvJdAOAIYxQlmjYftdELGP3I6Kh%2FqvWy9Nrj2W86V6aM0K3O00HmquvgpfEOfaCJGr5p9VwA8jDzJ7I%2FaeKMiq2wsfrdmsqF0a51d&X-Amz-Signature=d014cad32013a3283495c585c4a981bc1cd8acf33737adb88bb8a04b62eb26d8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HB5MVEI%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T070856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDnxG42OfNeqZv855Pap60%2BgZP1GOqLe7ljhaK9FsSxDAiB4EKkuE3ilsDmvtYUANrKK7Wf9FlTzFc87j34wvCymhir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMbAKvw5YorE3Paau1KtwDC1fwa6HXxd53GB%2BVz491z4JG7y97huL30DGK2fs%2B8PLPoE%2B0A%2BeNUq1lN3ihTxHIE4hbRDzaldaa4TNti5o7DcN9qjj5%2BNkkO9%2ByTdbJiJOqQaxF46%2Fqp25gT2os%2BdY3nRY0VP4SZHQcK72myxIjKopZywlUZLA1t114Alzux%2BH6vgf98l1awJDeIvMpUZipZryxwSe3Cp5LC0sYu7y%2F6qZ157wwMF75%2FnwcLkPKi02aEM%2B3psTfnIwVScsNeGdI%2B23KutVW91d62lJPtnFkw584WNjL8dSnEePIMGa929gEsw7LSJ58Buad%2BsNL3mUOb3%2FjICv4a2kpef9B3gNzvvucPgOWbRvDeETaJMqFVciUdFVLv52EUI%2FxgKFhUm2W2nu4fF5GtecpnpVzbucb%2BNNAe5f63kcA1Vd5lzlVZ7zKgVVESAmEzuH7Rm9skMRk5pBHIqRoBUCot8DajWcfJydgFKhKibPefzF4qljyaypqp5lwcqHBeGvEjCH76os9r1PTxfbZVcxP1gmk4RqFDJAD%2BZXiTpOSEoPLvR2S62QoU211h62YKN8PJ1ucTvH7skXbm2hAuiuvQXVpxMNZv3iq3ba%2FrkhWBNVdWfSKIYYRn1Xdr2EMZLAuuNQw9rbkvgY6pgEWMdyyFAO1drL5RTH49hG%2F22sTEMGx1wXqWfezRnEgFtcNp9RbxOtvvIX%2B3hERvBSom7u%2FBzjCQtv5GmT43xPzha32xtJB%2F6BqNu0l57VPMDQflXy68aFPU%2BgvvJdAOAIYxQlmjYftdELGP3I6Kh%2FqvWy9Nrj2W86V6aM0K3O00HmquvgpfEOfaCJGr5p9VwA8jDzJ7I%2FaeKMiq2wsfrdmsqF0a51d&X-Amz-Signature=ef1206854a302fae8b75510433f74fd0a6f0430fbad50e03c990127ed6b6e3b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HB5MVEI%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T070856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDnxG42OfNeqZv855Pap60%2BgZP1GOqLe7ljhaK9FsSxDAiB4EKkuE3ilsDmvtYUANrKK7Wf9FlTzFc87j34wvCymhir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMbAKvw5YorE3Paau1KtwDC1fwa6HXxd53GB%2BVz491z4JG7y97huL30DGK2fs%2B8PLPoE%2B0A%2BeNUq1lN3ihTxHIE4hbRDzaldaa4TNti5o7DcN9qjj5%2BNkkO9%2ByTdbJiJOqQaxF46%2Fqp25gT2os%2BdY3nRY0VP4SZHQcK72myxIjKopZywlUZLA1t114Alzux%2BH6vgf98l1awJDeIvMpUZipZryxwSe3Cp5LC0sYu7y%2F6qZ157wwMF75%2FnwcLkPKi02aEM%2B3psTfnIwVScsNeGdI%2B23KutVW91d62lJPtnFkw584WNjL8dSnEePIMGa929gEsw7LSJ58Buad%2BsNL3mUOb3%2FjICv4a2kpef9B3gNzvvucPgOWbRvDeETaJMqFVciUdFVLv52EUI%2FxgKFhUm2W2nu4fF5GtecpnpVzbucb%2BNNAe5f63kcA1Vd5lzlVZ7zKgVVESAmEzuH7Rm9skMRk5pBHIqRoBUCot8DajWcfJydgFKhKibPefzF4qljyaypqp5lwcqHBeGvEjCH76os9r1PTxfbZVcxP1gmk4RqFDJAD%2BZXiTpOSEoPLvR2S62QoU211h62YKN8PJ1ucTvH7skXbm2hAuiuvQXVpxMNZv3iq3ba%2FrkhWBNVdWfSKIYYRn1Xdr2EMZLAuuNQw9rbkvgY6pgEWMdyyFAO1drL5RTH49hG%2F22sTEMGx1wXqWfezRnEgFtcNp9RbxOtvvIX%2B3hERvBSom7u%2FBzjCQtv5GmT43xPzha32xtJB%2F6BqNu0l57VPMDQflXy68aFPU%2BgvvJdAOAIYxQlmjYftdELGP3I6Kh%2FqvWy9Nrj2W86V6aM0K3O00HmquvgpfEOfaCJGr5p9VwA8jDzJ7I%2FaeKMiq2wsfrdmsqF0a51d&X-Amz-Signature=9e5120f25aa0c50f69506ff1b582c67d65c228269027c91eae7b3eac824a1c23&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HB5MVEI%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T070856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDnxG42OfNeqZv855Pap60%2BgZP1GOqLe7ljhaK9FsSxDAiB4EKkuE3ilsDmvtYUANrKK7Wf9FlTzFc87j34wvCymhir%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMbAKvw5YorE3Paau1KtwDC1fwa6HXxd53GB%2BVz491z4JG7y97huL30DGK2fs%2B8PLPoE%2B0A%2BeNUq1lN3ihTxHIE4hbRDzaldaa4TNti5o7DcN9qjj5%2BNkkO9%2ByTdbJiJOqQaxF46%2Fqp25gT2os%2BdY3nRY0VP4SZHQcK72myxIjKopZywlUZLA1t114Alzux%2BH6vgf98l1awJDeIvMpUZipZryxwSe3Cp5LC0sYu7y%2F6qZ157wwMF75%2FnwcLkPKi02aEM%2B3psTfnIwVScsNeGdI%2B23KutVW91d62lJPtnFkw584WNjL8dSnEePIMGa929gEsw7LSJ58Buad%2BsNL3mUOb3%2FjICv4a2kpef9B3gNzvvucPgOWbRvDeETaJMqFVciUdFVLv52EUI%2FxgKFhUm2W2nu4fF5GtecpnpVzbucb%2BNNAe5f63kcA1Vd5lzlVZ7zKgVVESAmEzuH7Rm9skMRk5pBHIqRoBUCot8DajWcfJydgFKhKibPefzF4qljyaypqp5lwcqHBeGvEjCH76os9r1PTxfbZVcxP1gmk4RqFDJAD%2BZXiTpOSEoPLvR2S62QoU211h62YKN8PJ1ucTvH7skXbm2hAuiuvQXVpxMNZv3iq3ba%2FrkhWBNVdWfSKIYYRn1Xdr2EMZLAuuNQw9rbkvgY6pgEWMdyyFAO1drL5RTH49hG%2F22sTEMGx1wXqWfezRnEgFtcNp9RbxOtvvIX%2B3hERvBSom7u%2FBzjCQtv5GmT43xPzha32xtJB%2F6BqNu0l57VPMDQflXy68aFPU%2BgvvJdAOAIYxQlmjYftdELGP3I6Kh%2FqvWy9Nrj2W86V6aM0K3O00HmquvgpfEOfaCJGr5p9VwA8jDzJ7I%2FaeKMiq2wsfrdmsqF0a51d&X-Amz-Signature=e48a53b6da41b5fdd6aa348604f56ed8bf2e79df152be816c0823069533e2eea&X-Amz-SignedHeaders=host&x-id=GetObject)
