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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G77ESZ6%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpFspIPzcNS5tIaJ4jK1W%2FHaHV9W92ThjIOlypzbuh8AIhAObUw1legE88N0rD77TRJx0nxhvqMQsRFCgJntJegZrFKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzW2IHTE1f2tQH9eowq3APOE57Nw8P0uG66VJfijuIuPeMr%2FoWyRFR2AmZZzbu2Y%2BSGImJZ3uBNyFDQGYiA2Pp8WAPXuQeVfY1uGfr%2B%2BtpLMXi8fm2QePUYFhaOKhWgmiLRAtQJR1eK9NoOS9uLGaJKZXsbPUKUTu8YjV%2BL7u7lcphgUNmmEWISLGRw5jZydKTWJvm1MOZ4%2BRwzt7GktFk8lU0Mi3b%2FXEnlIJFQ%2FsjRUPKNcRRTCO1rHIl9LupFRto2orlcCoT%2BT5dlHk0I1ohv%2Bbat01xitP%2BoAn5%2BIazAc5225xpcaZw9L%2BdsjwIBqNZYVdoaH%2FP6H5W6pFkVnaTRtQW3IPaJ4kktJ9YF6M06foyON6h%2BdWmAZZL%2BagRpXx266dL73cttRyxsnd2LjOERAQN5f0iLeeM%2FR%2FjLVNCZDzWNF6CphCXC6zeE6w30hVOfzVLTCvAmGMPCe4GavtGyHQmNzVrg0GCEK78kChqJW71gSkjUQcY72Yo8CGGi4BzB2drZkCO%2BoOblwSSKmNfHeyDmxixYO92VlWlB7H7u5MxD0SLom96Qp8Xgidp%2Fse6LGBW4Bk3JJ7WrNymHBwKgfatTlexLiHX4mqDHRodg3dRFleugkbVfKcEjCRf3t1vReo985BU2CpRhFzD0wMq%2BBjqkAcqXRyDg8XXQEtCRTt%2FZdnujD84Uwm8GjlPe9FqNXPGKdSgnE80ikoFEoqSzeT6ox681%2F35LzGEkgd7EBw1GA6LpeKhg0JkzmrfYPdLPHe5t35wtsk0%2F1Z%2BFVvwZyNanmhXCLU7z%2BEpxWtcNb8N5x9ed%2BKQzqKX4Fxv1sYQgJ9oetWxfygNYElIFdrdAJP75bZ7t5XQdz5bK5Sbo0dO%2BSo1eeILp&X-Amz-Signature=96b4508f1d12e3d89afe759d93950c825b3fe54dc806bde8e3877fa36debe5f2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G77ESZ6%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpFspIPzcNS5tIaJ4jK1W%2FHaHV9W92ThjIOlypzbuh8AIhAObUw1legE88N0rD77TRJx0nxhvqMQsRFCgJntJegZrFKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzW2IHTE1f2tQH9eowq3APOE57Nw8P0uG66VJfijuIuPeMr%2FoWyRFR2AmZZzbu2Y%2BSGImJZ3uBNyFDQGYiA2Pp8WAPXuQeVfY1uGfr%2B%2BtpLMXi8fm2QePUYFhaOKhWgmiLRAtQJR1eK9NoOS9uLGaJKZXsbPUKUTu8YjV%2BL7u7lcphgUNmmEWISLGRw5jZydKTWJvm1MOZ4%2BRwzt7GktFk8lU0Mi3b%2FXEnlIJFQ%2FsjRUPKNcRRTCO1rHIl9LupFRto2orlcCoT%2BT5dlHk0I1ohv%2Bbat01xitP%2BoAn5%2BIazAc5225xpcaZw9L%2BdsjwIBqNZYVdoaH%2FP6H5W6pFkVnaTRtQW3IPaJ4kktJ9YF6M06foyON6h%2BdWmAZZL%2BagRpXx266dL73cttRyxsnd2LjOERAQN5f0iLeeM%2FR%2FjLVNCZDzWNF6CphCXC6zeE6w30hVOfzVLTCvAmGMPCe4GavtGyHQmNzVrg0GCEK78kChqJW71gSkjUQcY72Yo8CGGi4BzB2drZkCO%2BoOblwSSKmNfHeyDmxixYO92VlWlB7H7u5MxD0SLom96Qp8Xgidp%2Fse6LGBW4Bk3JJ7WrNymHBwKgfatTlexLiHX4mqDHRodg3dRFleugkbVfKcEjCRf3t1vReo985BU2CpRhFzD0wMq%2BBjqkAcqXRyDg8XXQEtCRTt%2FZdnujD84Uwm8GjlPe9FqNXPGKdSgnE80ikoFEoqSzeT6ox681%2F35LzGEkgd7EBw1GA6LpeKhg0JkzmrfYPdLPHe5t35wtsk0%2F1Z%2BFVvwZyNanmhXCLU7z%2BEpxWtcNb8N5x9ed%2BKQzqKX4Fxv1sYQgJ9oetWxfygNYElIFdrdAJP75bZ7t5XQdz5bK5Sbo0dO%2BSo1eeILp&X-Amz-Signature=61f791c48ea00d5fa36609a039211e51771f7b821d4228a59729d4d229f2b5b4&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G77ESZ6%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpFspIPzcNS5tIaJ4jK1W%2FHaHV9W92ThjIOlypzbuh8AIhAObUw1legE88N0rD77TRJx0nxhvqMQsRFCgJntJegZrFKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzW2IHTE1f2tQH9eowq3APOE57Nw8P0uG66VJfijuIuPeMr%2FoWyRFR2AmZZzbu2Y%2BSGImJZ3uBNyFDQGYiA2Pp8WAPXuQeVfY1uGfr%2B%2BtpLMXi8fm2QePUYFhaOKhWgmiLRAtQJR1eK9NoOS9uLGaJKZXsbPUKUTu8YjV%2BL7u7lcphgUNmmEWISLGRw5jZydKTWJvm1MOZ4%2BRwzt7GktFk8lU0Mi3b%2FXEnlIJFQ%2FsjRUPKNcRRTCO1rHIl9LupFRto2orlcCoT%2BT5dlHk0I1ohv%2Bbat01xitP%2BoAn5%2BIazAc5225xpcaZw9L%2BdsjwIBqNZYVdoaH%2FP6H5W6pFkVnaTRtQW3IPaJ4kktJ9YF6M06foyON6h%2BdWmAZZL%2BagRpXx266dL73cttRyxsnd2LjOERAQN5f0iLeeM%2FR%2FjLVNCZDzWNF6CphCXC6zeE6w30hVOfzVLTCvAmGMPCe4GavtGyHQmNzVrg0GCEK78kChqJW71gSkjUQcY72Yo8CGGi4BzB2drZkCO%2BoOblwSSKmNfHeyDmxixYO92VlWlB7H7u5MxD0SLom96Qp8Xgidp%2Fse6LGBW4Bk3JJ7WrNymHBwKgfatTlexLiHX4mqDHRodg3dRFleugkbVfKcEjCRf3t1vReo985BU2CpRhFzD0wMq%2BBjqkAcqXRyDg8XXQEtCRTt%2FZdnujD84Uwm8GjlPe9FqNXPGKdSgnE80ikoFEoqSzeT6ox681%2F35LzGEkgd7EBw1GA6LpeKhg0JkzmrfYPdLPHe5t35wtsk0%2F1Z%2BFVvwZyNanmhXCLU7z%2BEpxWtcNb8N5x9ed%2BKQzqKX4Fxv1sYQgJ9oetWxfygNYElIFdrdAJP75bZ7t5XQdz5bK5Sbo0dO%2BSo1eeILp&X-Amz-Signature=3d25bb57c82e3cb3b996a64ef826b7cc21a849142a7fdd2223e28309382bd640&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G77ESZ6%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpFspIPzcNS5tIaJ4jK1W%2FHaHV9W92ThjIOlypzbuh8AIhAObUw1legE88N0rD77TRJx0nxhvqMQsRFCgJntJegZrFKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzW2IHTE1f2tQH9eowq3APOE57Nw8P0uG66VJfijuIuPeMr%2FoWyRFR2AmZZzbu2Y%2BSGImJZ3uBNyFDQGYiA2Pp8WAPXuQeVfY1uGfr%2B%2BtpLMXi8fm2QePUYFhaOKhWgmiLRAtQJR1eK9NoOS9uLGaJKZXsbPUKUTu8YjV%2BL7u7lcphgUNmmEWISLGRw5jZydKTWJvm1MOZ4%2BRwzt7GktFk8lU0Mi3b%2FXEnlIJFQ%2FsjRUPKNcRRTCO1rHIl9LupFRto2orlcCoT%2BT5dlHk0I1ohv%2Bbat01xitP%2BoAn5%2BIazAc5225xpcaZw9L%2BdsjwIBqNZYVdoaH%2FP6H5W6pFkVnaTRtQW3IPaJ4kktJ9YF6M06foyON6h%2BdWmAZZL%2BagRpXx266dL73cttRyxsnd2LjOERAQN5f0iLeeM%2FR%2FjLVNCZDzWNF6CphCXC6zeE6w30hVOfzVLTCvAmGMPCe4GavtGyHQmNzVrg0GCEK78kChqJW71gSkjUQcY72Yo8CGGi4BzB2drZkCO%2BoOblwSSKmNfHeyDmxixYO92VlWlB7H7u5MxD0SLom96Qp8Xgidp%2Fse6LGBW4Bk3JJ7WrNymHBwKgfatTlexLiHX4mqDHRodg3dRFleugkbVfKcEjCRf3t1vReo985BU2CpRhFzD0wMq%2BBjqkAcqXRyDg8XXQEtCRTt%2FZdnujD84Uwm8GjlPe9FqNXPGKdSgnE80ikoFEoqSzeT6ox681%2F35LzGEkgd7EBw1GA6LpeKhg0JkzmrfYPdLPHe5t35wtsk0%2F1Z%2BFVvwZyNanmhXCLU7z%2BEpxWtcNb8N5x9ed%2BKQzqKX4Fxv1sYQgJ9oetWxfygNYElIFdrdAJP75bZ7t5XQdz5bK5Sbo0dO%2BSo1eeILp&X-Amz-Signature=55b188b25207ed7cb1487e53b1166c15783d3a7fa1c24833ef194b35d84cd786&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G77ESZ6%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpFspIPzcNS5tIaJ4jK1W%2FHaHV9W92ThjIOlypzbuh8AIhAObUw1legE88N0rD77TRJx0nxhvqMQsRFCgJntJegZrFKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzW2IHTE1f2tQH9eowq3APOE57Nw8P0uG66VJfijuIuPeMr%2FoWyRFR2AmZZzbu2Y%2BSGImJZ3uBNyFDQGYiA2Pp8WAPXuQeVfY1uGfr%2B%2BtpLMXi8fm2QePUYFhaOKhWgmiLRAtQJR1eK9NoOS9uLGaJKZXsbPUKUTu8YjV%2BL7u7lcphgUNmmEWISLGRw5jZydKTWJvm1MOZ4%2BRwzt7GktFk8lU0Mi3b%2FXEnlIJFQ%2FsjRUPKNcRRTCO1rHIl9LupFRto2orlcCoT%2BT5dlHk0I1ohv%2Bbat01xitP%2BoAn5%2BIazAc5225xpcaZw9L%2BdsjwIBqNZYVdoaH%2FP6H5W6pFkVnaTRtQW3IPaJ4kktJ9YF6M06foyON6h%2BdWmAZZL%2BagRpXx266dL73cttRyxsnd2LjOERAQN5f0iLeeM%2FR%2FjLVNCZDzWNF6CphCXC6zeE6w30hVOfzVLTCvAmGMPCe4GavtGyHQmNzVrg0GCEK78kChqJW71gSkjUQcY72Yo8CGGi4BzB2drZkCO%2BoOblwSSKmNfHeyDmxixYO92VlWlB7H7u5MxD0SLom96Qp8Xgidp%2Fse6LGBW4Bk3JJ7WrNymHBwKgfatTlexLiHX4mqDHRodg3dRFleugkbVfKcEjCRf3t1vReo985BU2CpRhFzD0wMq%2BBjqkAcqXRyDg8XXQEtCRTt%2FZdnujD84Uwm8GjlPe9FqNXPGKdSgnE80ikoFEoqSzeT6ox681%2F35LzGEkgd7EBw1GA6LpeKhg0JkzmrfYPdLPHe5t35wtsk0%2F1Z%2BFVvwZyNanmhXCLU7z%2BEpxWtcNb8N5x9ed%2BKQzqKX4Fxv1sYQgJ9oetWxfygNYElIFdrdAJP75bZ7t5XQdz5bK5Sbo0dO%2BSo1eeILp&X-Amz-Signature=b622e0927691ea094696d692b75d655df00c0ac268ea615fa16325189bc37c9b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G77ESZ6%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpFspIPzcNS5tIaJ4jK1W%2FHaHV9W92ThjIOlypzbuh8AIhAObUw1legE88N0rD77TRJx0nxhvqMQsRFCgJntJegZrFKogECNL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzW2IHTE1f2tQH9eowq3APOE57Nw8P0uG66VJfijuIuPeMr%2FoWyRFR2AmZZzbu2Y%2BSGImJZ3uBNyFDQGYiA2Pp8WAPXuQeVfY1uGfr%2B%2BtpLMXi8fm2QePUYFhaOKhWgmiLRAtQJR1eK9NoOS9uLGaJKZXsbPUKUTu8YjV%2BL7u7lcphgUNmmEWISLGRw5jZydKTWJvm1MOZ4%2BRwzt7GktFk8lU0Mi3b%2FXEnlIJFQ%2FsjRUPKNcRRTCO1rHIl9LupFRto2orlcCoT%2BT5dlHk0I1ohv%2Bbat01xitP%2BoAn5%2BIazAc5225xpcaZw9L%2BdsjwIBqNZYVdoaH%2FP6H5W6pFkVnaTRtQW3IPaJ4kktJ9YF6M06foyON6h%2BdWmAZZL%2BagRpXx266dL73cttRyxsnd2LjOERAQN5f0iLeeM%2FR%2FjLVNCZDzWNF6CphCXC6zeE6w30hVOfzVLTCvAmGMPCe4GavtGyHQmNzVrg0GCEK78kChqJW71gSkjUQcY72Yo8CGGi4BzB2drZkCO%2BoOblwSSKmNfHeyDmxixYO92VlWlB7H7u5MxD0SLom96Qp8Xgidp%2Fse6LGBW4Bk3JJ7WrNymHBwKgfatTlexLiHX4mqDHRodg3dRFleugkbVfKcEjCRf3t1vReo985BU2CpRhFzD0wMq%2BBjqkAcqXRyDg8XXQEtCRTt%2FZdnujD84Uwm8GjlPe9FqNXPGKdSgnE80ikoFEoqSzeT6ox681%2F35LzGEkgd7EBw1GA6LpeKhg0JkzmrfYPdLPHe5t35wtsk0%2F1Z%2BFVvwZyNanmhXCLU7z%2BEpxWtcNb8N5x9ed%2BKQzqKX4Fxv1sYQgJ9oetWxfygNYElIFdrdAJP75bZ7t5XQdz5bK5Sbo0dO%2BSo1eeILp&X-Amz-Signature=2f1eebbb7f41ff6be936a994d814f175692b062e90428b6f9c524cf1fff6540a&X-Amz-SignedHeaders=host&x-id=GetObject)
