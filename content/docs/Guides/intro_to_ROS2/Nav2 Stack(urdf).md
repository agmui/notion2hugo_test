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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN4HV6YI%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T090955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIByAY5k0gJfoaO2vfTbXM2XjQPBndEDCBURQF0kuZmdFAiA2WcLofRBMXD1BIZ9XM1xmMkFzCL5EriqN4CBAENkKXCr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMpOUf3DgelmVJjnrMKtwDxKsp09lzU1jeuPtminKqWiSRtH4p0xbFnwb4sbF1dOGTibObPBmCttHXtlbEJtD9f3BRciwSGLetE%2FjPzJ8WdPn3FLMkACELOYmYSeaqaBD8b3Ow8VMPKGw0olxfvjonGCndSNLgJlwOZNCcMe1BvxFbVc7eEC9rRVKDmG1Q0pXqs3aJ4UFRx823ufRIejUe0v%2BYAXHpikji0qUXiv6WWCch5c1TiTNh8gP2ws53xEGCMiXSaX1AsnnDUMRgkVwEi9rZAnKBcJC%2FZKyC4O7Wq1vYWIE%2FEeAhabUBoIg%2BgE9hAIpAip4UGXD%2FoL8f6zJiE6YpmwIS8YgfLifLvvXFMj71z0vuVzsFsCIT6fX0sghS9h%2Fx0aYZlWIs6tAMEiJCe%2B3T5IO2EKBLy3fS22jIuLYxabGM4cHdpP4zGwHCRu8zH1h6r%2BznYeT%2BDCtRK9THX8SfSpAm8OIboryROvUudz%2BSAbiBfrZZ27yTlZJAFzjwE5MoyjXAB%2F4nXZ4ElINhOiab99dVnp2ltluzcjtDcP8crcbbakOrmk0Zj%2FhUj6ZgCBMpjVRl76EOyKuLkM69vCPlwCFXpI5iiPCCwoiPRBUNKBvV6qKIpre8vKTj6%2Bfw6XxHFQLLCCz8wBYwja6FwgY6pgHbTXqVC1Xtd3Z5ZPzHAeL3sHJ0VGgwtRqDxeXAcTvq3qNTNp7RwrltLnh1EBdqPEbCodaDukUqInJOkwNzNO8bguF4Z%2FH9Nkp6TfhESBWBkB1nBX1PJyJuwnGX8C6C%2FizQncYxHsq5sflCcspLD7gkLUWzTmIldFgs41p2Nm46Xa6aNRbYuOeDCgLXt5AcskQfT1dnlFD9xnFwlv4CjqZfs4N3o14O&X-Amz-Signature=f86eaf20b5ced097fb18c13b17e1862e7639f545495dcb995670cd0d4d885371&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN4HV6YI%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T090955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIByAY5k0gJfoaO2vfTbXM2XjQPBndEDCBURQF0kuZmdFAiA2WcLofRBMXD1BIZ9XM1xmMkFzCL5EriqN4CBAENkKXCr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMpOUf3DgelmVJjnrMKtwDxKsp09lzU1jeuPtminKqWiSRtH4p0xbFnwb4sbF1dOGTibObPBmCttHXtlbEJtD9f3BRciwSGLetE%2FjPzJ8WdPn3FLMkACELOYmYSeaqaBD8b3Ow8VMPKGw0olxfvjonGCndSNLgJlwOZNCcMe1BvxFbVc7eEC9rRVKDmG1Q0pXqs3aJ4UFRx823ufRIejUe0v%2BYAXHpikji0qUXiv6WWCch5c1TiTNh8gP2ws53xEGCMiXSaX1AsnnDUMRgkVwEi9rZAnKBcJC%2FZKyC4O7Wq1vYWIE%2FEeAhabUBoIg%2BgE9hAIpAip4UGXD%2FoL8f6zJiE6YpmwIS8YgfLifLvvXFMj71z0vuVzsFsCIT6fX0sghS9h%2Fx0aYZlWIs6tAMEiJCe%2B3T5IO2EKBLy3fS22jIuLYxabGM4cHdpP4zGwHCRu8zH1h6r%2BznYeT%2BDCtRK9THX8SfSpAm8OIboryROvUudz%2BSAbiBfrZZ27yTlZJAFzjwE5MoyjXAB%2F4nXZ4ElINhOiab99dVnp2ltluzcjtDcP8crcbbakOrmk0Zj%2FhUj6ZgCBMpjVRl76EOyKuLkM69vCPlwCFXpI5iiPCCwoiPRBUNKBvV6qKIpre8vKTj6%2Bfw6XxHFQLLCCz8wBYwja6FwgY6pgHbTXqVC1Xtd3Z5ZPzHAeL3sHJ0VGgwtRqDxeXAcTvq3qNTNp7RwrltLnh1EBdqPEbCodaDukUqInJOkwNzNO8bguF4Z%2FH9Nkp6TfhESBWBkB1nBX1PJyJuwnGX8C6C%2FizQncYxHsq5sflCcspLD7gkLUWzTmIldFgs41p2Nm46Xa6aNRbYuOeDCgLXt5AcskQfT1dnlFD9xnFwlv4CjqZfs4N3o14O&X-Amz-Signature=78c7aa25cf0faf516a3c0b5018ee8ab0cad284bf5362fb44f862f0e3c578c7e8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN4HV6YI%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T090955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIByAY5k0gJfoaO2vfTbXM2XjQPBndEDCBURQF0kuZmdFAiA2WcLofRBMXD1BIZ9XM1xmMkFzCL5EriqN4CBAENkKXCr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMpOUf3DgelmVJjnrMKtwDxKsp09lzU1jeuPtminKqWiSRtH4p0xbFnwb4sbF1dOGTibObPBmCttHXtlbEJtD9f3BRciwSGLetE%2FjPzJ8WdPn3FLMkACELOYmYSeaqaBD8b3Ow8VMPKGw0olxfvjonGCndSNLgJlwOZNCcMe1BvxFbVc7eEC9rRVKDmG1Q0pXqs3aJ4UFRx823ufRIejUe0v%2BYAXHpikji0qUXiv6WWCch5c1TiTNh8gP2ws53xEGCMiXSaX1AsnnDUMRgkVwEi9rZAnKBcJC%2FZKyC4O7Wq1vYWIE%2FEeAhabUBoIg%2BgE9hAIpAip4UGXD%2FoL8f6zJiE6YpmwIS8YgfLifLvvXFMj71z0vuVzsFsCIT6fX0sghS9h%2Fx0aYZlWIs6tAMEiJCe%2B3T5IO2EKBLy3fS22jIuLYxabGM4cHdpP4zGwHCRu8zH1h6r%2BznYeT%2BDCtRK9THX8SfSpAm8OIboryROvUudz%2BSAbiBfrZZ27yTlZJAFzjwE5MoyjXAB%2F4nXZ4ElINhOiab99dVnp2ltluzcjtDcP8crcbbakOrmk0Zj%2FhUj6ZgCBMpjVRl76EOyKuLkM69vCPlwCFXpI5iiPCCwoiPRBUNKBvV6qKIpre8vKTj6%2Bfw6XxHFQLLCCz8wBYwja6FwgY6pgHbTXqVC1Xtd3Z5ZPzHAeL3sHJ0VGgwtRqDxeXAcTvq3qNTNp7RwrltLnh1EBdqPEbCodaDukUqInJOkwNzNO8bguF4Z%2FH9Nkp6TfhESBWBkB1nBX1PJyJuwnGX8C6C%2FizQncYxHsq5sflCcspLD7gkLUWzTmIldFgs41p2Nm46Xa6aNRbYuOeDCgLXt5AcskQfT1dnlFD9xnFwlv4CjqZfs4N3o14O&X-Amz-Signature=09bd6793cdec4c4e13b9f9bd9cddbca50e9af19aa62f7037af43fca37707428b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN4HV6YI%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T090955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIByAY5k0gJfoaO2vfTbXM2XjQPBndEDCBURQF0kuZmdFAiA2WcLofRBMXD1BIZ9XM1xmMkFzCL5EriqN4CBAENkKXCr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMpOUf3DgelmVJjnrMKtwDxKsp09lzU1jeuPtminKqWiSRtH4p0xbFnwb4sbF1dOGTibObPBmCttHXtlbEJtD9f3BRciwSGLetE%2FjPzJ8WdPn3FLMkACELOYmYSeaqaBD8b3Ow8VMPKGw0olxfvjonGCndSNLgJlwOZNCcMe1BvxFbVc7eEC9rRVKDmG1Q0pXqs3aJ4UFRx823ufRIejUe0v%2BYAXHpikji0qUXiv6WWCch5c1TiTNh8gP2ws53xEGCMiXSaX1AsnnDUMRgkVwEi9rZAnKBcJC%2FZKyC4O7Wq1vYWIE%2FEeAhabUBoIg%2BgE9hAIpAip4UGXD%2FoL8f6zJiE6YpmwIS8YgfLifLvvXFMj71z0vuVzsFsCIT6fX0sghS9h%2Fx0aYZlWIs6tAMEiJCe%2B3T5IO2EKBLy3fS22jIuLYxabGM4cHdpP4zGwHCRu8zH1h6r%2BznYeT%2BDCtRK9THX8SfSpAm8OIboryROvUudz%2BSAbiBfrZZ27yTlZJAFzjwE5MoyjXAB%2F4nXZ4ElINhOiab99dVnp2ltluzcjtDcP8crcbbakOrmk0Zj%2FhUj6ZgCBMpjVRl76EOyKuLkM69vCPlwCFXpI5iiPCCwoiPRBUNKBvV6qKIpre8vKTj6%2Bfw6XxHFQLLCCz8wBYwja6FwgY6pgHbTXqVC1Xtd3Z5ZPzHAeL3sHJ0VGgwtRqDxeXAcTvq3qNTNp7RwrltLnh1EBdqPEbCodaDukUqInJOkwNzNO8bguF4Z%2FH9Nkp6TfhESBWBkB1nBX1PJyJuwnGX8C6C%2FizQncYxHsq5sflCcspLD7gkLUWzTmIldFgs41p2Nm46Xa6aNRbYuOeDCgLXt5AcskQfT1dnlFD9xnFwlv4CjqZfs4N3o14O&X-Amz-Signature=8574ada37395f6af53027dc0d2f72d791794550484167a78047bcf94d0a55510&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN4HV6YI%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T090955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIByAY5k0gJfoaO2vfTbXM2XjQPBndEDCBURQF0kuZmdFAiA2WcLofRBMXD1BIZ9XM1xmMkFzCL5EriqN4CBAENkKXCr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMpOUf3DgelmVJjnrMKtwDxKsp09lzU1jeuPtminKqWiSRtH4p0xbFnwb4sbF1dOGTibObPBmCttHXtlbEJtD9f3BRciwSGLetE%2FjPzJ8WdPn3FLMkACELOYmYSeaqaBD8b3Ow8VMPKGw0olxfvjonGCndSNLgJlwOZNCcMe1BvxFbVc7eEC9rRVKDmG1Q0pXqs3aJ4UFRx823ufRIejUe0v%2BYAXHpikji0qUXiv6WWCch5c1TiTNh8gP2ws53xEGCMiXSaX1AsnnDUMRgkVwEi9rZAnKBcJC%2FZKyC4O7Wq1vYWIE%2FEeAhabUBoIg%2BgE9hAIpAip4UGXD%2FoL8f6zJiE6YpmwIS8YgfLifLvvXFMj71z0vuVzsFsCIT6fX0sghS9h%2Fx0aYZlWIs6tAMEiJCe%2B3T5IO2EKBLy3fS22jIuLYxabGM4cHdpP4zGwHCRu8zH1h6r%2BznYeT%2BDCtRK9THX8SfSpAm8OIboryROvUudz%2BSAbiBfrZZ27yTlZJAFzjwE5MoyjXAB%2F4nXZ4ElINhOiab99dVnp2ltluzcjtDcP8crcbbakOrmk0Zj%2FhUj6ZgCBMpjVRl76EOyKuLkM69vCPlwCFXpI5iiPCCwoiPRBUNKBvV6qKIpre8vKTj6%2Bfw6XxHFQLLCCz8wBYwja6FwgY6pgHbTXqVC1Xtd3Z5ZPzHAeL3sHJ0VGgwtRqDxeXAcTvq3qNTNp7RwrltLnh1EBdqPEbCodaDukUqInJOkwNzNO8bguF4Z%2FH9Nkp6TfhESBWBkB1nBX1PJyJuwnGX8C6C%2FizQncYxHsq5sflCcspLD7gkLUWzTmIldFgs41p2Nm46Xa6aNRbYuOeDCgLXt5AcskQfT1dnlFD9xnFwlv4CjqZfs4N3o14O&X-Amz-Signature=67fa162b48979979aa3025013c48c3f78826726b5967527b989e69402ee17389&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN4HV6YI%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T090955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIByAY5k0gJfoaO2vfTbXM2XjQPBndEDCBURQF0kuZmdFAiA2WcLofRBMXD1BIZ9XM1xmMkFzCL5EriqN4CBAENkKXCr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMpOUf3DgelmVJjnrMKtwDxKsp09lzU1jeuPtminKqWiSRtH4p0xbFnwb4sbF1dOGTibObPBmCttHXtlbEJtD9f3BRciwSGLetE%2FjPzJ8WdPn3FLMkACELOYmYSeaqaBD8b3Ow8VMPKGw0olxfvjonGCndSNLgJlwOZNCcMe1BvxFbVc7eEC9rRVKDmG1Q0pXqs3aJ4UFRx823ufRIejUe0v%2BYAXHpikji0qUXiv6WWCch5c1TiTNh8gP2ws53xEGCMiXSaX1AsnnDUMRgkVwEi9rZAnKBcJC%2FZKyC4O7Wq1vYWIE%2FEeAhabUBoIg%2BgE9hAIpAip4UGXD%2FoL8f6zJiE6YpmwIS8YgfLifLvvXFMj71z0vuVzsFsCIT6fX0sghS9h%2Fx0aYZlWIs6tAMEiJCe%2B3T5IO2EKBLy3fS22jIuLYxabGM4cHdpP4zGwHCRu8zH1h6r%2BznYeT%2BDCtRK9THX8SfSpAm8OIboryROvUudz%2BSAbiBfrZZ27yTlZJAFzjwE5MoyjXAB%2F4nXZ4ElINhOiab99dVnp2ltluzcjtDcP8crcbbakOrmk0Zj%2FhUj6ZgCBMpjVRl76EOyKuLkM69vCPlwCFXpI5iiPCCwoiPRBUNKBvV6qKIpre8vKTj6%2Bfw6XxHFQLLCCz8wBYwja6FwgY6pgHbTXqVC1Xtd3Z5ZPzHAeL3sHJ0VGgwtRqDxeXAcTvq3qNTNp7RwrltLnh1EBdqPEbCodaDukUqInJOkwNzNO8bguF4Z%2FH9Nkp6TfhESBWBkB1nBX1PJyJuwnGX8C6C%2FizQncYxHsq5sflCcspLD7gkLUWzTmIldFgs41p2Nm46Xa6aNRbYuOeDCgLXt5AcskQfT1dnlFD9xnFwlv4CjqZfs4N3o14O&X-Amz-Signature=c3b9459c85be5cb40d7839261e5c0d59965f7e890f114a0b326a312e6ef60089&X-Amz-SignedHeaders=host&x-id=GetObject)
