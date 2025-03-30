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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7PI52WK%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIDNFxMv0g5GbWf09vgjQ08ExDppvzYXJXusLMtKtFaFtAiEA%2BN%2F9k429jFzvDECy5Sx98SykV%2F7iHOANmFeKI7V6L68qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2huV7D8pPn6PrMQyrcA5JgkyxekzZGHFG3KzhJ4ZWK4o2mCHkbefsS7G1Z8UcGG1t9jfGJQSDf%2BnJM2gy9IXY6YPivFf%2BuJ3BkAIs%2Fa5gPdv%2FvsZPJjtPsCrlDfIrGUO9tICAJk2PS8fAgUbZ08eROkgSKp0Zfbwtb4z6SipTGIF%2F9M0EtXBlVYoVI4VSKrBpTB0%2B5RqDM6B5tpYfgfADxkadV7EMMlgnxDjLZhvPwr8uEVUOOx5Pr0r07sjYN2bOzdgTjjIWztw7zQ9jnb4yDYA%2Fmk7SDiva35uSflkxQ37kxJgAyvg8e4s6gnwH3dWZKBWE2lEtrteN3%2FhK59VILHv1WJJX7P3NF5CB6s5bYkzWAh2e%2Bj4Dg8fZDtCG3mxhqyGGo2521sufy48r6DTenbpvT1OOalMhYOMKEdt7CenFuMaoqdlermDoK54%2BUWSb6udBSC%2BkPTgmlyLs78%2B7qMtXkzpdjlBSSNPCk3mES0EoXZvDSDwiO5vLqWYjTTTGtntQiYCOnk8rOBOhGOQTu4U67YAwbnnu0vhOuXFSPM7Bho%2B%2FerqjOqfDKk%2BWVLf%2BGLIUBLI7CQX%2FQ2ZE2tJ5lxKTK1%2Bx5v%2FRm%2Fenji9a%2Ff7LS00A7cU60dJAkRc3dMf8oftXPA5lm%2Fw8TMInqor8GOqUB66jkuX41ChFXrPJMjDI9cT2aDAYIS63kLCafhkrEs%2Bb5ruEi%2BOkoruTLehQ9FbzkytQVIsnS9azbbbWUokBgmyr9xNz3%2FpjiCAeLpxc5mj8LTVK28PKTeS5Cf9hWJoXeLG9OEBrVfXXOBHUdPmaLhHu48U%2FD4HGr%2FcslDLVNf6Kq8ZAW9f7TbYQtS0YP4sscf16H1WiBGMU5KHRIUUZY%2F6j9W8gW&X-Amz-Signature=82df9140ed8746241aaa2bc46fec4dd43f65eecb6375010a65be887440d24786&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7PI52WK%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIDNFxMv0g5GbWf09vgjQ08ExDppvzYXJXusLMtKtFaFtAiEA%2BN%2F9k429jFzvDECy5Sx98SykV%2F7iHOANmFeKI7V6L68qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2huV7D8pPn6PrMQyrcA5JgkyxekzZGHFG3KzhJ4ZWK4o2mCHkbefsS7G1Z8UcGG1t9jfGJQSDf%2BnJM2gy9IXY6YPivFf%2BuJ3BkAIs%2Fa5gPdv%2FvsZPJjtPsCrlDfIrGUO9tICAJk2PS8fAgUbZ08eROkgSKp0Zfbwtb4z6SipTGIF%2F9M0EtXBlVYoVI4VSKrBpTB0%2B5RqDM6B5tpYfgfADxkadV7EMMlgnxDjLZhvPwr8uEVUOOx5Pr0r07sjYN2bOzdgTjjIWztw7zQ9jnb4yDYA%2Fmk7SDiva35uSflkxQ37kxJgAyvg8e4s6gnwH3dWZKBWE2lEtrteN3%2FhK59VILHv1WJJX7P3NF5CB6s5bYkzWAh2e%2Bj4Dg8fZDtCG3mxhqyGGo2521sufy48r6DTenbpvT1OOalMhYOMKEdt7CenFuMaoqdlermDoK54%2BUWSb6udBSC%2BkPTgmlyLs78%2B7qMtXkzpdjlBSSNPCk3mES0EoXZvDSDwiO5vLqWYjTTTGtntQiYCOnk8rOBOhGOQTu4U67YAwbnnu0vhOuXFSPM7Bho%2B%2FerqjOqfDKk%2BWVLf%2BGLIUBLI7CQX%2FQ2ZE2tJ5lxKTK1%2Bx5v%2FRm%2Fenji9a%2Ff7LS00A7cU60dJAkRc3dMf8oftXPA5lm%2Fw8TMInqor8GOqUB66jkuX41ChFXrPJMjDI9cT2aDAYIS63kLCafhkrEs%2Bb5ruEi%2BOkoruTLehQ9FbzkytQVIsnS9azbbbWUokBgmyr9xNz3%2FpjiCAeLpxc5mj8LTVK28PKTeS5Cf9hWJoXeLG9OEBrVfXXOBHUdPmaLhHu48U%2FD4HGr%2FcslDLVNf6Kq8ZAW9f7TbYQtS0YP4sscf16H1WiBGMU5KHRIUUZY%2F6j9W8gW&X-Amz-Signature=e4ca0c3297a5c1f977e96ef6c866b82edae58733230a32ec766165284f2f3a52&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7PI52WK%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIDNFxMv0g5GbWf09vgjQ08ExDppvzYXJXusLMtKtFaFtAiEA%2BN%2F9k429jFzvDECy5Sx98SykV%2F7iHOANmFeKI7V6L68qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2huV7D8pPn6PrMQyrcA5JgkyxekzZGHFG3KzhJ4ZWK4o2mCHkbefsS7G1Z8UcGG1t9jfGJQSDf%2BnJM2gy9IXY6YPivFf%2BuJ3BkAIs%2Fa5gPdv%2FvsZPJjtPsCrlDfIrGUO9tICAJk2PS8fAgUbZ08eROkgSKp0Zfbwtb4z6SipTGIF%2F9M0EtXBlVYoVI4VSKrBpTB0%2B5RqDM6B5tpYfgfADxkadV7EMMlgnxDjLZhvPwr8uEVUOOx5Pr0r07sjYN2bOzdgTjjIWztw7zQ9jnb4yDYA%2Fmk7SDiva35uSflkxQ37kxJgAyvg8e4s6gnwH3dWZKBWE2lEtrteN3%2FhK59VILHv1WJJX7P3NF5CB6s5bYkzWAh2e%2Bj4Dg8fZDtCG3mxhqyGGo2521sufy48r6DTenbpvT1OOalMhYOMKEdt7CenFuMaoqdlermDoK54%2BUWSb6udBSC%2BkPTgmlyLs78%2B7qMtXkzpdjlBSSNPCk3mES0EoXZvDSDwiO5vLqWYjTTTGtntQiYCOnk8rOBOhGOQTu4U67YAwbnnu0vhOuXFSPM7Bho%2B%2FerqjOqfDKk%2BWVLf%2BGLIUBLI7CQX%2FQ2ZE2tJ5lxKTK1%2Bx5v%2FRm%2Fenji9a%2Ff7LS00A7cU60dJAkRc3dMf8oftXPA5lm%2Fw8TMInqor8GOqUB66jkuX41ChFXrPJMjDI9cT2aDAYIS63kLCafhkrEs%2Bb5ruEi%2BOkoruTLehQ9FbzkytQVIsnS9azbbbWUokBgmyr9xNz3%2FpjiCAeLpxc5mj8LTVK28PKTeS5Cf9hWJoXeLG9OEBrVfXXOBHUdPmaLhHu48U%2FD4HGr%2FcslDLVNf6Kq8ZAW9f7TbYQtS0YP4sscf16H1WiBGMU5KHRIUUZY%2F6j9W8gW&X-Amz-Signature=ca411665777bbf9b4d93ddf01b798e524c2b6cfa3340dd6cc4501833caa2c7b2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7PI52WK%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIDNFxMv0g5GbWf09vgjQ08ExDppvzYXJXusLMtKtFaFtAiEA%2BN%2F9k429jFzvDECy5Sx98SykV%2F7iHOANmFeKI7V6L68qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2huV7D8pPn6PrMQyrcA5JgkyxekzZGHFG3KzhJ4ZWK4o2mCHkbefsS7G1Z8UcGG1t9jfGJQSDf%2BnJM2gy9IXY6YPivFf%2BuJ3BkAIs%2Fa5gPdv%2FvsZPJjtPsCrlDfIrGUO9tICAJk2PS8fAgUbZ08eROkgSKp0Zfbwtb4z6SipTGIF%2F9M0EtXBlVYoVI4VSKrBpTB0%2B5RqDM6B5tpYfgfADxkadV7EMMlgnxDjLZhvPwr8uEVUOOx5Pr0r07sjYN2bOzdgTjjIWztw7zQ9jnb4yDYA%2Fmk7SDiva35uSflkxQ37kxJgAyvg8e4s6gnwH3dWZKBWE2lEtrteN3%2FhK59VILHv1WJJX7P3NF5CB6s5bYkzWAh2e%2Bj4Dg8fZDtCG3mxhqyGGo2521sufy48r6DTenbpvT1OOalMhYOMKEdt7CenFuMaoqdlermDoK54%2BUWSb6udBSC%2BkPTgmlyLs78%2B7qMtXkzpdjlBSSNPCk3mES0EoXZvDSDwiO5vLqWYjTTTGtntQiYCOnk8rOBOhGOQTu4U67YAwbnnu0vhOuXFSPM7Bho%2B%2FerqjOqfDKk%2BWVLf%2BGLIUBLI7CQX%2FQ2ZE2tJ5lxKTK1%2Bx5v%2FRm%2Fenji9a%2Ff7LS00A7cU60dJAkRc3dMf8oftXPA5lm%2Fw8TMInqor8GOqUB66jkuX41ChFXrPJMjDI9cT2aDAYIS63kLCafhkrEs%2Bb5ruEi%2BOkoruTLehQ9FbzkytQVIsnS9azbbbWUokBgmyr9xNz3%2FpjiCAeLpxc5mj8LTVK28PKTeS5Cf9hWJoXeLG9OEBrVfXXOBHUdPmaLhHu48U%2FD4HGr%2FcslDLVNf6Kq8ZAW9f7TbYQtS0YP4sscf16H1WiBGMU5KHRIUUZY%2F6j9W8gW&X-Amz-Signature=e7218f8ba07de8e637b665edbb369c75f787e77c3b0d231df7d8369fd449b539&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7PI52WK%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIDNFxMv0g5GbWf09vgjQ08ExDppvzYXJXusLMtKtFaFtAiEA%2BN%2F9k429jFzvDECy5Sx98SykV%2F7iHOANmFeKI7V6L68qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2huV7D8pPn6PrMQyrcA5JgkyxekzZGHFG3KzhJ4ZWK4o2mCHkbefsS7G1Z8UcGG1t9jfGJQSDf%2BnJM2gy9IXY6YPivFf%2BuJ3BkAIs%2Fa5gPdv%2FvsZPJjtPsCrlDfIrGUO9tICAJk2PS8fAgUbZ08eROkgSKp0Zfbwtb4z6SipTGIF%2F9M0EtXBlVYoVI4VSKrBpTB0%2B5RqDM6B5tpYfgfADxkadV7EMMlgnxDjLZhvPwr8uEVUOOx5Pr0r07sjYN2bOzdgTjjIWztw7zQ9jnb4yDYA%2Fmk7SDiva35uSflkxQ37kxJgAyvg8e4s6gnwH3dWZKBWE2lEtrteN3%2FhK59VILHv1WJJX7P3NF5CB6s5bYkzWAh2e%2Bj4Dg8fZDtCG3mxhqyGGo2521sufy48r6DTenbpvT1OOalMhYOMKEdt7CenFuMaoqdlermDoK54%2BUWSb6udBSC%2BkPTgmlyLs78%2B7qMtXkzpdjlBSSNPCk3mES0EoXZvDSDwiO5vLqWYjTTTGtntQiYCOnk8rOBOhGOQTu4U67YAwbnnu0vhOuXFSPM7Bho%2B%2FerqjOqfDKk%2BWVLf%2BGLIUBLI7CQX%2FQ2ZE2tJ5lxKTK1%2Bx5v%2FRm%2Fenji9a%2Ff7LS00A7cU60dJAkRc3dMf8oftXPA5lm%2Fw8TMInqor8GOqUB66jkuX41ChFXrPJMjDI9cT2aDAYIS63kLCafhkrEs%2Bb5ruEi%2BOkoruTLehQ9FbzkytQVIsnS9azbbbWUokBgmyr9xNz3%2FpjiCAeLpxc5mj8LTVK28PKTeS5Cf9hWJoXeLG9OEBrVfXXOBHUdPmaLhHu48U%2FD4HGr%2FcslDLVNf6Kq8ZAW9f7TbYQtS0YP4sscf16H1WiBGMU5KHRIUUZY%2F6j9W8gW&X-Amz-Signature=8400db952720ecbd581b5f2b0c07dde603ad2a5897c8dd5ac013fa1a3032a0d0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7PI52WK%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T040948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIDNFxMv0g5GbWf09vgjQ08ExDppvzYXJXusLMtKtFaFtAiEA%2BN%2F9k429jFzvDECy5Sx98SykV%2F7iHOANmFeKI7V6L68qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO2huV7D8pPn6PrMQyrcA5JgkyxekzZGHFG3KzhJ4ZWK4o2mCHkbefsS7G1Z8UcGG1t9jfGJQSDf%2BnJM2gy9IXY6YPivFf%2BuJ3BkAIs%2Fa5gPdv%2FvsZPJjtPsCrlDfIrGUO9tICAJk2PS8fAgUbZ08eROkgSKp0Zfbwtb4z6SipTGIF%2F9M0EtXBlVYoVI4VSKrBpTB0%2B5RqDM6B5tpYfgfADxkadV7EMMlgnxDjLZhvPwr8uEVUOOx5Pr0r07sjYN2bOzdgTjjIWztw7zQ9jnb4yDYA%2Fmk7SDiva35uSflkxQ37kxJgAyvg8e4s6gnwH3dWZKBWE2lEtrteN3%2FhK59VILHv1WJJX7P3NF5CB6s5bYkzWAh2e%2Bj4Dg8fZDtCG3mxhqyGGo2521sufy48r6DTenbpvT1OOalMhYOMKEdt7CenFuMaoqdlermDoK54%2BUWSb6udBSC%2BkPTgmlyLs78%2B7qMtXkzpdjlBSSNPCk3mES0EoXZvDSDwiO5vLqWYjTTTGtntQiYCOnk8rOBOhGOQTu4U67YAwbnnu0vhOuXFSPM7Bho%2B%2FerqjOqfDKk%2BWVLf%2BGLIUBLI7CQX%2FQ2ZE2tJ5lxKTK1%2Bx5v%2FRm%2Fenji9a%2Ff7LS00A7cU60dJAkRc3dMf8oftXPA5lm%2Fw8TMInqor8GOqUB66jkuX41ChFXrPJMjDI9cT2aDAYIS63kLCafhkrEs%2Bb5ruEi%2BOkoruTLehQ9FbzkytQVIsnS9azbbbWUokBgmyr9xNz3%2FpjiCAeLpxc5mj8LTVK28PKTeS5Cf9hWJoXeLG9OEBrVfXXOBHUdPmaLhHu48U%2FD4HGr%2FcslDLVNf6Kq8ZAW9f7TbYQtS0YP4sscf16H1WiBGMU5KHRIUUZY%2F6j9W8gW&X-Amz-Signature=b27e548e32291bc9553bbe64f82452b0a8b2a66b21219f24c35c512b0e9b6202&X-Amz-SignedHeaders=host&x-id=GetObject)
