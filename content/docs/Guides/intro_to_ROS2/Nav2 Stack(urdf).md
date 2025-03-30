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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3WVKPZU%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T061037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCoUQ%2BYc0x%2FZ5qVZBIYqqaf5MlgiKYMsEiNvHwQmKTxiAIhAL1LwY1WDBRBj8nDi16WOegL7V5KGllWvSAXBXtdi2w%2FKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNclHUdTvsQG4q1okq3AOECvnPdZBJTpXajkryQj%2FlNfLM9RggdHUaO%2FyU8ZEabvEtAC3bSqMxUwZS%2BXKtJcW003LpWYixafY4k71c2Xtfov52HIGTlS27vpV62avfOMzuXojhrvisW6AcDk3nP8SFGTiRI0q66ZFVjbhZY90bNlDmDKGAhubMTKJQ9CO6TSZ4TkCvMEXP%2BgW%2FiuofI8%2BhOuJ2jRMDTAtDiwnakwjwI65tK39RCINeQiTYL%2FBOVCXNICEvnOwJ5rTktadPAcNzZ4KxVmoTeIiw02xD47Y%2FsKarjTr0lYiwKW%2B2551kFfJLh%2BpiStYEhYbsfqiMAmnU08cM7jv%2Ftt94XqON8MJmA%2B7X6prVyQGLsPBagj6MyCqNmkH9i%2BYMNKletN6VzVQxHCj7NnSWTfaRz49v5Qzomix1gvjXhyorq135UtNkpME31L48R1yR79PnO13o8MABlnilMpEkDXZQgoOPiBUJ6zjCN%2F6ADhOmG2PNcKK162r54TfvCR9H6Rxh6%2FbuB0yOxvfMLchFLuuHv2EK%2BQx5pYzFBkgOKzb0Yqu2LiPeifvaUznQ4d%2Bhi2eF1x9EKcpIGz%2FNBLfs3QId6QG7lEafa8EVgYkw%2Fr28tUWr9uIM%2Bhba0PV%2Fn1IZt2wKgzDg6aK%2FBjqkASPmYSIPNjPZf8NXa7irZ1%2BTs%2BBcr9KDNVu24imjD3zo8%2BJ6VdLkDgayDH2pztTe%2FpQlCKyZvCZxIczYrnhlrl8izk4owztnLYuSNlLHShl0gNQ7YaYRGJECpbmwdkQgx%2BUJhOIT%2Bn9T0rZ4vUOT%2F8QxpyCwbqjlvLKRapzBhr9NscqeBTBy49fldO4gcqnQ8II6EI8jGIqd2%2BziJCYtkV%2BfNOZG&X-Amz-Signature=c1e193131416c9c545ad92aaef8ade8156336f10db88259fc54fb169f46619fe&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3WVKPZU%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T061037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCoUQ%2BYc0x%2FZ5qVZBIYqqaf5MlgiKYMsEiNvHwQmKTxiAIhAL1LwY1WDBRBj8nDi16WOegL7V5KGllWvSAXBXtdi2w%2FKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNclHUdTvsQG4q1okq3AOECvnPdZBJTpXajkryQj%2FlNfLM9RggdHUaO%2FyU8ZEabvEtAC3bSqMxUwZS%2BXKtJcW003LpWYixafY4k71c2Xtfov52HIGTlS27vpV62avfOMzuXojhrvisW6AcDk3nP8SFGTiRI0q66ZFVjbhZY90bNlDmDKGAhubMTKJQ9CO6TSZ4TkCvMEXP%2BgW%2FiuofI8%2BhOuJ2jRMDTAtDiwnakwjwI65tK39RCINeQiTYL%2FBOVCXNICEvnOwJ5rTktadPAcNzZ4KxVmoTeIiw02xD47Y%2FsKarjTr0lYiwKW%2B2551kFfJLh%2BpiStYEhYbsfqiMAmnU08cM7jv%2Ftt94XqON8MJmA%2B7X6prVyQGLsPBagj6MyCqNmkH9i%2BYMNKletN6VzVQxHCj7NnSWTfaRz49v5Qzomix1gvjXhyorq135UtNkpME31L48R1yR79PnO13o8MABlnilMpEkDXZQgoOPiBUJ6zjCN%2F6ADhOmG2PNcKK162r54TfvCR9H6Rxh6%2FbuB0yOxvfMLchFLuuHv2EK%2BQx5pYzFBkgOKzb0Yqu2LiPeifvaUznQ4d%2Bhi2eF1x9EKcpIGz%2FNBLfs3QId6QG7lEafa8EVgYkw%2Fr28tUWr9uIM%2Bhba0PV%2Fn1IZt2wKgzDg6aK%2FBjqkASPmYSIPNjPZf8NXa7irZ1%2BTs%2BBcr9KDNVu24imjD3zo8%2BJ6VdLkDgayDH2pztTe%2FpQlCKyZvCZxIczYrnhlrl8izk4owztnLYuSNlLHShl0gNQ7YaYRGJECpbmwdkQgx%2BUJhOIT%2Bn9T0rZ4vUOT%2F8QxpyCwbqjlvLKRapzBhr9NscqeBTBy49fldO4gcqnQ8II6EI8jGIqd2%2BziJCYtkV%2BfNOZG&X-Amz-Signature=3c1f1c2fc73277cd1ba135315d1fd56bbc6913494300445bb5dcf441ff7b6abc&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3WVKPZU%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T061037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCoUQ%2BYc0x%2FZ5qVZBIYqqaf5MlgiKYMsEiNvHwQmKTxiAIhAL1LwY1WDBRBj8nDi16WOegL7V5KGllWvSAXBXtdi2w%2FKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNclHUdTvsQG4q1okq3AOECvnPdZBJTpXajkryQj%2FlNfLM9RggdHUaO%2FyU8ZEabvEtAC3bSqMxUwZS%2BXKtJcW003LpWYixafY4k71c2Xtfov52HIGTlS27vpV62avfOMzuXojhrvisW6AcDk3nP8SFGTiRI0q66ZFVjbhZY90bNlDmDKGAhubMTKJQ9CO6TSZ4TkCvMEXP%2BgW%2FiuofI8%2BhOuJ2jRMDTAtDiwnakwjwI65tK39RCINeQiTYL%2FBOVCXNICEvnOwJ5rTktadPAcNzZ4KxVmoTeIiw02xD47Y%2FsKarjTr0lYiwKW%2B2551kFfJLh%2BpiStYEhYbsfqiMAmnU08cM7jv%2Ftt94XqON8MJmA%2B7X6prVyQGLsPBagj6MyCqNmkH9i%2BYMNKletN6VzVQxHCj7NnSWTfaRz49v5Qzomix1gvjXhyorq135UtNkpME31L48R1yR79PnO13o8MABlnilMpEkDXZQgoOPiBUJ6zjCN%2F6ADhOmG2PNcKK162r54TfvCR9H6Rxh6%2FbuB0yOxvfMLchFLuuHv2EK%2BQx5pYzFBkgOKzb0Yqu2LiPeifvaUznQ4d%2Bhi2eF1x9EKcpIGz%2FNBLfs3QId6QG7lEafa8EVgYkw%2Fr28tUWr9uIM%2Bhba0PV%2Fn1IZt2wKgzDg6aK%2FBjqkASPmYSIPNjPZf8NXa7irZ1%2BTs%2BBcr9KDNVu24imjD3zo8%2BJ6VdLkDgayDH2pztTe%2FpQlCKyZvCZxIczYrnhlrl8izk4owztnLYuSNlLHShl0gNQ7YaYRGJECpbmwdkQgx%2BUJhOIT%2Bn9T0rZ4vUOT%2F8QxpyCwbqjlvLKRapzBhr9NscqeBTBy49fldO4gcqnQ8II6EI8jGIqd2%2BziJCYtkV%2BfNOZG&X-Amz-Signature=dccd3a64d773175577cba3ebec8f1f35040321a1cc98b9c4d6b9be9380c3e61e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3WVKPZU%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T061037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCoUQ%2BYc0x%2FZ5qVZBIYqqaf5MlgiKYMsEiNvHwQmKTxiAIhAL1LwY1WDBRBj8nDi16WOegL7V5KGllWvSAXBXtdi2w%2FKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNclHUdTvsQG4q1okq3AOECvnPdZBJTpXajkryQj%2FlNfLM9RggdHUaO%2FyU8ZEabvEtAC3bSqMxUwZS%2BXKtJcW003LpWYixafY4k71c2Xtfov52HIGTlS27vpV62avfOMzuXojhrvisW6AcDk3nP8SFGTiRI0q66ZFVjbhZY90bNlDmDKGAhubMTKJQ9CO6TSZ4TkCvMEXP%2BgW%2FiuofI8%2BhOuJ2jRMDTAtDiwnakwjwI65tK39RCINeQiTYL%2FBOVCXNICEvnOwJ5rTktadPAcNzZ4KxVmoTeIiw02xD47Y%2FsKarjTr0lYiwKW%2B2551kFfJLh%2BpiStYEhYbsfqiMAmnU08cM7jv%2Ftt94XqON8MJmA%2B7X6prVyQGLsPBagj6MyCqNmkH9i%2BYMNKletN6VzVQxHCj7NnSWTfaRz49v5Qzomix1gvjXhyorq135UtNkpME31L48R1yR79PnO13o8MABlnilMpEkDXZQgoOPiBUJ6zjCN%2F6ADhOmG2PNcKK162r54TfvCR9H6Rxh6%2FbuB0yOxvfMLchFLuuHv2EK%2BQx5pYzFBkgOKzb0Yqu2LiPeifvaUznQ4d%2Bhi2eF1x9EKcpIGz%2FNBLfs3QId6QG7lEafa8EVgYkw%2Fr28tUWr9uIM%2Bhba0PV%2Fn1IZt2wKgzDg6aK%2FBjqkASPmYSIPNjPZf8NXa7irZ1%2BTs%2BBcr9KDNVu24imjD3zo8%2BJ6VdLkDgayDH2pztTe%2FpQlCKyZvCZxIczYrnhlrl8izk4owztnLYuSNlLHShl0gNQ7YaYRGJECpbmwdkQgx%2BUJhOIT%2Bn9T0rZ4vUOT%2F8QxpyCwbqjlvLKRapzBhr9NscqeBTBy49fldO4gcqnQ8II6EI8jGIqd2%2BziJCYtkV%2BfNOZG&X-Amz-Signature=9acaac81c33d051943ee1ac1b1ab6813641cdb3393a92e0228bc5b4111e5d2cc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3WVKPZU%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T061037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCoUQ%2BYc0x%2FZ5qVZBIYqqaf5MlgiKYMsEiNvHwQmKTxiAIhAL1LwY1WDBRBj8nDi16WOegL7V5KGllWvSAXBXtdi2w%2FKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNclHUdTvsQG4q1okq3AOECvnPdZBJTpXajkryQj%2FlNfLM9RggdHUaO%2FyU8ZEabvEtAC3bSqMxUwZS%2BXKtJcW003LpWYixafY4k71c2Xtfov52HIGTlS27vpV62avfOMzuXojhrvisW6AcDk3nP8SFGTiRI0q66ZFVjbhZY90bNlDmDKGAhubMTKJQ9CO6TSZ4TkCvMEXP%2BgW%2FiuofI8%2BhOuJ2jRMDTAtDiwnakwjwI65tK39RCINeQiTYL%2FBOVCXNICEvnOwJ5rTktadPAcNzZ4KxVmoTeIiw02xD47Y%2FsKarjTr0lYiwKW%2B2551kFfJLh%2BpiStYEhYbsfqiMAmnU08cM7jv%2Ftt94XqON8MJmA%2B7X6prVyQGLsPBagj6MyCqNmkH9i%2BYMNKletN6VzVQxHCj7NnSWTfaRz49v5Qzomix1gvjXhyorq135UtNkpME31L48R1yR79PnO13o8MABlnilMpEkDXZQgoOPiBUJ6zjCN%2F6ADhOmG2PNcKK162r54TfvCR9H6Rxh6%2FbuB0yOxvfMLchFLuuHv2EK%2BQx5pYzFBkgOKzb0Yqu2LiPeifvaUznQ4d%2Bhi2eF1x9EKcpIGz%2FNBLfs3QId6QG7lEafa8EVgYkw%2Fr28tUWr9uIM%2Bhba0PV%2Fn1IZt2wKgzDg6aK%2FBjqkASPmYSIPNjPZf8NXa7irZ1%2BTs%2BBcr9KDNVu24imjD3zo8%2BJ6VdLkDgayDH2pztTe%2FpQlCKyZvCZxIczYrnhlrl8izk4owztnLYuSNlLHShl0gNQ7YaYRGJECpbmwdkQgx%2BUJhOIT%2Bn9T0rZ4vUOT%2F8QxpyCwbqjlvLKRapzBhr9NscqeBTBy49fldO4gcqnQ8II6EI8jGIqd2%2BziJCYtkV%2BfNOZG&X-Amz-Signature=b1bd882b3e6ecca1dbe40d39c5cfb1a1b7947e0656b8ac1639b7c01c355cc531&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3WVKPZU%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T061037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCoUQ%2BYc0x%2FZ5qVZBIYqqaf5MlgiKYMsEiNvHwQmKTxiAIhAL1LwY1WDBRBj8nDi16WOegL7V5KGllWvSAXBXtdi2w%2FKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNclHUdTvsQG4q1okq3AOECvnPdZBJTpXajkryQj%2FlNfLM9RggdHUaO%2FyU8ZEabvEtAC3bSqMxUwZS%2BXKtJcW003LpWYixafY4k71c2Xtfov52HIGTlS27vpV62avfOMzuXojhrvisW6AcDk3nP8SFGTiRI0q66ZFVjbhZY90bNlDmDKGAhubMTKJQ9CO6TSZ4TkCvMEXP%2BgW%2FiuofI8%2BhOuJ2jRMDTAtDiwnakwjwI65tK39RCINeQiTYL%2FBOVCXNICEvnOwJ5rTktadPAcNzZ4KxVmoTeIiw02xD47Y%2FsKarjTr0lYiwKW%2B2551kFfJLh%2BpiStYEhYbsfqiMAmnU08cM7jv%2Ftt94XqON8MJmA%2B7X6prVyQGLsPBagj6MyCqNmkH9i%2BYMNKletN6VzVQxHCj7NnSWTfaRz49v5Qzomix1gvjXhyorq135UtNkpME31L48R1yR79PnO13o8MABlnilMpEkDXZQgoOPiBUJ6zjCN%2F6ADhOmG2PNcKK162r54TfvCR9H6Rxh6%2FbuB0yOxvfMLchFLuuHv2EK%2BQx5pYzFBkgOKzb0Yqu2LiPeifvaUznQ4d%2Bhi2eF1x9EKcpIGz%2FNBLfs3QId6QG7lEafa8EVgYkw%2Fr28tUWr9uIM%2Bhba0PV%2Fn1IZt2wKgzDg6aK%2FBjqkASPmYSIPNjPZf8NXa7irZ1%2BTs%2BBcr9KDNVu24imjD3zo8%2BJ6VdLkDgayDH2pztTe%2FpQlCKyZvCZxIczYrnhlrl8izk4owztnLYuSNlLHShl0gNQ7YaYRGJECpbmwdkQgx%2BUJhOIT%2Bn9T0rZ4vUOT%2F8QxpyCwbqjlvLKRapzBhr9NscqeBTBy49fldO4gcqnQ8II6EI8jGIqd2%2BziJCYtkV%2BfNOZG&X-Amz-Signature=e7bccd810e342510353f8f2f7ecc62e06caf633ebc274dba5525c59035cac0dc&X-Amz-SignedHeaders=host&x-id=GetObject)
