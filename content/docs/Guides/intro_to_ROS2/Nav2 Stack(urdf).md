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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAAQKU5K%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T070732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc3z86MO%2BbRZUfTxz35byrC%2Bifm5J7%2BeUus0ka567YrAIhAMFU%2FczVDVWoj%2BFE1sQELfeZlfk1g75S0zf2uTbZ9Eg7KogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpxPAXgK1rpWiojCoq3AMzo8aASdHeYdRmqGS3%2BQxHbZNGv0%2BSGzcls8aU1i3NKL6RTBGuxW2I9zQEv2KWo8gC3lyn8aU3ddmlqAjd90IpUIFoqw5rNtyqInKb3WyBc6KJEMxzqSkcdZp3%2B4OUkv%2BPAtpt0121BAExDTHHPqEl6fFgzI%2BjigfCu9Wm%2Ff9rDFitjeCTo0o3MH%2F53So%2B8%2FbVXyrTh2zkld3a4aR%2B7IV6L6XxTLR6DwrIEO3HR%2BCyiPFXHOGp2yU9mUn9qAGu0CHYZfGTHgbTKZz%2F6fN0rvTMAZLP3G01mXoP6emHKauppefmKvdurOiAGfgVq4UWi6KTmUnwzey2tUTvTUBGSxwqS5wPqzd3oGGHETMliliAINbne89K3pGPIYKoh5oWVm1AdUp8ZuVRg0fLYOqGWnLkS%2BTPNB4I5AwMHmxlbgIO%2F79xxRFPdQKFcbVocyM5oieU0k5D0ZjgBxZos27sBv9gwRuVzfwn4lRWumIG2VB7dGMA1hb2zwzYb16GRZoXGVAkASUccMlXE6KbevExnzzQlvJusC2txaoZaiHMlLBkYaW5DAZwwA%2Bjpj2LZ3ltWxVO2qNUYM3%2FcRVW65KSmeWVbwqszdaRVxTYKELf7MYMSZPvk%2BUxJN2x34GzhTCi4%2FG8BjqkAWHN3EauFM315xfaPs18czGKBhyF2hD0FhEJbQ9rMr20irD%2BVP5CB9r6y98HtbI0O0Om0Zzc7CaLDcjA8XKuldT0xC6yl4TmFp2Hgbc5R%2BC6nfRXroSPLDLpUuCOl9lmc4RBFOs%2FYDEkj%2FsSijIY%2By7UgIM3SyHN8vEzGtg7S3%2Bzk16RPss9aNtcLLPuc%2FemCxrFE2LJytvRF8xfJwU7ofW2ONep&X-Amz-Signature=77a260748afdc5a402431c94f65aa66c47b175a0c4ff0a44c0bde087b72e951d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAAQKU5K%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T070732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc3z86MO%2BbRZUfTxz35byrC%2Bifm5J7%2BeUus0ka567YrAIhAMFU%2FczVDVWoj%2BFE1sQELfeZlfk1g75S0zf2uTbZ9Eg7KogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpxPAXgK1rpWiojCoq3AMzo8aASdHeYdRmqGS3%2BQxHbZNGv0%2BSGzcls8aU1i3NKL6RTBGuxW2I9zQEv2KWo8gC3lyn8aU3ddmlqAjd90IpUIFoqw5rNtyqInKb3WyBc6KJEMxzqSkcdZp3%2B4OUkv%2BPAtpt0121BAExDTHHPqEl6fFgzI%2BjigfCu9Wm%2Ff9rDFitjeCTo0o3MH%2F53So%2B8%2FbVXyrTh2zkld3a4aR%2B7IV6L6XxTLR6DwrIEO3HR%2BCyiPFXHOGp2yU9mUn9qAGu0CHYZfGTHgbTKZz%2F6fN0rvTMAZLP3G01mXoP6emHKauppefmKvdurOiAGfgVq4UWi6KTmUnwzey2tUTvTUBGSxwqS5wPqzd3oGGHETMliliAINbne89K3pGPIYKoh5oWVm1AdUp8ZuVRg0fLYOqGWnLkS%2BTPNB4I5AwMHmxlbgIO%2F79xxRFPdQKFcbVocyM5oieU0k5D0ZjgBxZos27sBv9gwRuVzfwn4lRWumIG2VB7dGMA1hb2zwzYb16GRZoXGVAkASUccMlXE6KbevExnzzQlvJusC2txaoZaiHMlLBkYaW5DAZwwA%2Bjpj2LZ3ltWxVO2qNUYM3%2FcRVW65KSmeWVbwqszdaRVxTYKELf7MYMSZPvk%2BUxJN2x34GzhTCi4%2FG8BjqkAWHN3EauFM315xfaPs18czGKBhyF2hD0FhEJbQ9rMr20irD%2BVP5CB9r6y98HtbI0O0Om0Zzc7CaLDcjA8XKuldT0xC6yl4TmFp2Hgbc5R%2BC6nfRXroSPLDLpUuCOl9lmc4RBFOs%2FYDEkj%2FsSijIY%2By7UgIM3SyHN8vEzGtg7S3%2Bzk16RPss9aNtcLLPuc%2FemCxrFE2LJytvRF8xfJwU7ofW2ONep&X-Amz-Signature=2b51b9a003a5c8114979a16cc19996c2be5b5abe546a835855ca48916ab3c787&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAAQKU5K%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T070732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc3z86MO%2BbRZUfTxz35byrC%2Bifm5J7%2BeUus0ka567YrAIhAMFU%2FczVDVWoj%2BFE1sQELfeZlfk1g75S0zf2uTbZ9Eg7KogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpxPAXgK1rpWiojCoq3AMzo8aASdHeYdRmqGS3%2BQxHbZNGv0%2BSGzcls8aU1i3NKL6RTBGuxW2I9zQEv2KWo8gC3lyn8aU3ddmlqAjd90IpUIFoqw5rNtyqInKb3WyBc6KJEMxzqSkcdZp3%2B4OUkv%2BPAtpt0121BAExDTHHPqEl6fFgzI%2BjigfCu9Wm%2Ff9rDFitjeCTo0o3MH%2F53So%2B8%2FbVXyrTh2zkld3a4aR%2B7IV6L6XxTLR6DwrIEO3HR%2BCyiPFXHOGp2yU9mUn9qAGu0CHYZfGTHgbTKZz%2F6fN0rvTMAZLP3G01mXoP6emHKauppefmKvdurOiAGfgVq4UWi6KTmUnwzey2tUTvTUBGSxwqS5wPqzd3oGGHETMliliAINbne89K3pGPIYKoh5oWVm1AdUp8ZuVRg0fLYOqGWnLkS%2BTPNB4I5AwMHmxlbgIO%2F79xxRFPdQKFcbVocyM5oieU0k5D0ZjgBxZos27sBv9gwRuVzfwn4lRWumIG2VB7dGMA1hb2zwzYb16GRZoXGVAkASUccMlXE6KbevExnzzQlvJusC2txaoZaiHMlLBkYaW5DAZwwA%2Bjpj2LZ3ltWxVO2qNUYM3%2FcRVW65KSmeWVbwqszdaRVxTYKELf7MYMSZPvk%2BUxJN2x34GzhTCi4%2FG8BjqkAWHN3EauFM315xfaPs18czGKBhyF2hD0FhEJbQ9rMr20irD%2BVP5CB9r6y98HtbI0O0Om0Zzc7CaLDcjA8XKuldT0xC6yl4TmFp2Hgbc5R%2BC6nfRXroSPLDLpUuCOl9lmc4RBFOs%2FYDEkj%2FsSijIY%2By7UgIM3SyHN8vEzGtg7S3%2Bzk16RPss9aNtcLLPuc%2FemCxrFE2LJytvRF8xfJwU7ofW2ONep&X-Amz-Signature=693c4bc99ad8d07a84e71cf9d8df82851a6af05518fe51d068ecebc5aed746cc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAAQKU5K%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T070732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc3z86MO%2BbRZUfTxz35byrC%2Bifm5J7%2BeUus0ka567YrAIhAMFU%2FczVDVWoj%2BFE1sQELfeZlfk1g75S0zf2uTbZ9Eg7KogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpxPAXgK1rpWiojCoq3AMzo8aASdHeYdRmqGS3%2BQxHbZNGv0%2BSGzcls8aU1i3NKL6RTBGuxW2I9zQEv2KWo8gC3lyn8aU3ddmlqAjd90IpUIFoqw5rNtyqInKb3WyBc6KJEMxzqSkcdZp3%2B4OUkv%2BPAtpt0121BAExDTHHPqEl6fFgzI%2BjigfCu9Wm%2Ff9rDFitjeCTo0o3MH%2F53So%2B8%2FbVXyrTh2zkld3a4aR%2B7IV6L6XxTLR6DwrIEO3HR%2BCyiPFXHOGp2yU9mUn9qAGu0CHYZfGTHgbTKZz%2F6fN0rvTMAZLP3G01mXoP6emHKauppefmKvdurOiAGfgVq4UWi6KTmUnwzey2tUTvTUBGSxwqS5wPqzd3oGGHETMliliAINbne89K3pGPIYKoh5oWVm1AdUp8ZuVRg0fLYOqGWnLkS%2BTPNB4I5AwMHmxlbgIO%2F79xxRFPdQKFcbVocyM5oieU0k5D0ZjgBxZos27sBv9gwRuVzfwn4lRWumIG2VB7dGMA1hb2zwzYb16GRZoXGVAkASUccMlXE6KbevExnzzQlvJusC2txaoZaiHMlLBkYaW5DAZwwA%2Bjpj2LZ3ltWxVO2qNUYM3%2FcRVW65KSmeWVbwqszdaRVxTYKELf7MYMSZPvk%2BUxJN2x34GzhTCi4%2FG8BjqkAWHN3EauFM315xfaPs18czGKBhyF2hD0FhEJbQ9rMr20irD%2BVP5CB9r6y98HtbI0O0Om0Zzc7CaLDcjA8XKuldT0xC6yl4TmFp2Hgbc5R%2BC6nfRXroSPLDLpUuCOl9lmc4RBFOs%2FYDEkj%2FsSijIY%2By7UgIM3SyHN8vEzGtg7S3%2Bzk16RPss9aNtcLLPuc%2FemCxrFE2LJytvRF8xfJwU7ofW2ONep&X-Amz-Signature=8aa4befb02f3f6e2df128e072fcad1baa2dc3c76226af6df2a64e8cd772b0710&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAAQKU5K%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T070732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc3z86MO%2BbRZUfTxz35byrC%2Bifm5J7%2BeUus0ka567YrAIhAMFU%2FczVDVWoj%2BFE1sQELfeZlfk1g75S0zf2uTbZ9Eg7KogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpxPAXgK1rpWiojCoq3AMzo8aASdHeYdRmqGS3%2BQxHbZNGv0%2BSGzcls8aU1i3NKL6RTBGuxW2I9zQEv2KWo8gC3lyn8aU3ddmlqAjd90IpUIFoqw5rNtyqInKb3WyBc6KJEMxzqSkcdZp3%2B4OUkv%2BPAtpt0121BAExDTHHPqEl6fFgzI%2BjigfCu9Wm%2Ff9rDFitjeCTo0o3MH%2F53So%2B8%2FbVXyrTh2zkld3a4aR%2B7IV6L6XxTLR6DwrIEO3HR%2BCyiPFXHOGp2yU9mUn9qAGu0CHYZfGTHgbTKZz%2F6fN0rvTMAZLP3G01mXoP6emHKauppefmKvdurOiAGfgVq4UWi6KTmUnwzey2tUTvTUBGSxwqS5wPqzd3oGGHETMliliAINbne89K3pGPIYKoh5oWVm1AdUp8ZuVRg0fLYOqGWnLkS%2BTPNB4I5AwMHmxlbgIO%2F79xxRFPdQKFcbVocyM5oieU0k5D0ZjgBxZos27sBv9gwRuVzfwn4lRWumIG2VB7dGMA1hb2zwzYb16GRZoXGVAkASUccMlXE6KbevExnzzQlvJusC2txaoZaiHMlLBkYaW5DAZwwA%2Bjpj2LZ3ltWxVO2qNUYM3%2FcRVW65KSmeWVbwqszdaRVxTYKELf7MYMSZPvk%2BUxJN2x34GzhTCi4%2FG8BjqkAWHN3EauFM315xfaPs18czGKBhyF2hD0FhEJbQ9rMr20irD%2BVP5CB9r6y98HtbI0O0Om0Zzc7CaLDcjA8XKuldT0xC6yl4TmFp2Hgbc5R%2BC6nfRXroSPLDLpUuCOl9lmc4RBFOs%2FYDEkj%2FsSijIY%2By7UgIM3SyHN8vEzGtg7S3%2Bzk16RPss9aNtcLLPuc%2FemCxrFE2LJytvRF8xfJwU7ofW2ONep&X-Amz-Signature=8517deaeec0ad09bb7c461b13d7aa4e1ebd298901800b7ba80c9f580aad01687&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAAQKU5K%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T070732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCc3z86MO%2BbRZUfTxz35byrC%2Bifm5J7%2BeUus0ka567YrAIhAMFU%2FczVDVWoj%2BFE1sQELfeZlfk1g75S0zf2uTbZ9Eg7KogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpxPAXgK1rpWiojCoq3AMzo8aASdHeYdRmqGS3%2BQxHbZNGv0%2BSGzcls8aU1i3NKL6RTBGuxW2I9zQEv2KWo8gC3lyn8aU3ddmlqAjd90IpUIFoqw5rNtyqInKb3WyBc6KJEMxzqSkcdZp3%2B4OUkv%2BPAtpt0121BAExDTHHPqEl6fFgzI%2BjigfCu9Wm%2Ff9rDFitjeCTo0o3MH%2F53So%2B8%2FbVXyrTh2zkld3a4aR%2B7IV6L6XxTLR6DwrIEO3HR%2BCyiPFXHOGp2yU9mUn9qAGu0CHYZfGTHgbTKZz%2F6fN0rvTMAZLP3G01mXoP6emHKauppefmKvdurOiAGfgVq4UWi6KTmUnwzey2tUTvTUBGSxwqS5wPqzd3oGGHETMliliAINbne89K3pGPIYKoh5oWVm1AdUp8ZuVRg0fLYOqGWnLkS%2BTPNB4I5AwMHmxlbgIO%2F79xxRFPdQKFcbVocyM5oieU0k5D0ZjgBxZos27sBv9gwRuVzfwn4lRWumIG2VB7dGMA1hb2zwzYb16GRZoXGVAkASUccMlXE6KbevExnzzQlvJusC2txaoZaiHMlLBkYaW5DAZwwA%2Bjpj2LZ3ltWxVO2qNUYM3%2FcRVW65KSmeWVbwqszdaRVxTYKELf7MYMSZPvk%2BUxJN2x34GzhTCi4%2FG8BjqkAWHN3EauFM315xfaPs18czGKBhyF2hD0FhEJbQ9rMr20irD%2BVP5CB9r6y98HtbI0O0Om0Zzc7CaLDcjA8XKuldT0xC6yl4TmFp2Hgbc5R%2BC6nfRXroSPLDLpUuCOl9lmc4RBFOs%2FYDEkj%2FsSijIY%2By7UgIM3SyHN8vEzGtg7S3%2Bzk16RPss9aNtcLLPuc%2FemCxrFE2LJytvRF8xfJwU7ofW2ONep&X-Amz-Signature=9c2bf1538e9ecbdcd9d0ba5ce27834b5e99b2f76e5aa3aae7ef952efa1abe6a6&X-Amz-SignedHeaders=host&x-id=GetObject)
