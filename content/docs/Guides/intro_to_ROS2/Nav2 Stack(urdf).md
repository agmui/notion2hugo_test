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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHNV6DOL%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T034908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDRRr5uhJKuMx%2Fx4CIbMWQZxfWV7lpdhU6TtNmp%2B2vrTgIhAP2pWMRsSXXMwpWd9cWn3T%2FKw%2FpRBxtFfCObkca8VKhlKv8DCFIQABoMNjM3NDIzMTgzODA1IgzB8MeItramuT%2Fw7Kgq3AP6EiI88hudx0oV1YANeNk2eSlV7BZcOvRcnZqG109Z3ctKpfo%2FHLncjoFE%2F5yZlfFUmgSdGlD3xGr%2Be6j0ZKkcOBEeAuDAa78OyUL4pVDRB7psrk%2BMJ8bBrYZGb%2FA1zSk5%2BG8ggO5zlyOwOtWtoDrmlcYqdevTz8tiJ%2BnHSrzSett%2BQsj878Xtnb8O2rMvhOhSd8vcfhYqw7GkpjAbYoFDTYWqTBH3QFVIxaYd49etJ5LQ0yETl%2BM1Q%2Bs2y0oZmjzBRnN0eO151BF4ww5dAV8d1o5I0edNMPjFfM2sIaX7spTjtwCxUHL5XEZj7eq9quZpp5XniK1DVry1RuPOBs5Xdn21R3vO3q83zBsowvv6Ae5DTs8HKpEJjizkOpmbZmByYMdfW5AI2PUIO7EP00%2BPLLwJW8OmW8i0qN%2BLD5ghxh6JEDIQhZmDffXFfvrK%2FMtMK6d95G%2B68oHdzbvZZa0SxAoZlP6hy7FYVEY6kubvcZTCYapSEgxOiZE5MRKaIDpel79eFPfye%2FPMNPYbE4glW4JwYD3BTPZ%2BblkHxGLneQhbDMzmnDKnXgsY4nSYUSqCPgd2Rsrl8t50HfxRgWMuMovxUdFxQX5AlfP%2FrmesmqKEJ%2BaGio6Sg%2BVrFDCUlKfDBjqkAV1V7HWoBty7%2Fdhqkpr9a0XWWyLk40Yc0NdX4z414BsHJR1uywa26PSdY88HtzVEl3YhHenEsOvfnb6Qzve%2BX%2Bo5o7IaSUKhd2npnLf1ENi867MuOh49bzcpZdNB1vBG5OLW2MLblGFHxCsPAJfCLYBQBk5E2cFTdV3UgpqzFvmUvCsPYV2afQUhgi%2BHqh%2BNMIcE1MwLrnd0B3lHEm7%2Fg2H12Ijj&X-Amz-Signature=84be58eaa78efafecf064ae3233fb0968799bcab8ab43c465b6a365eafb77972&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHNV6DOL%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T034908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDRRr5uhJKuMx%2Fx4CIbMWQZxfWV7lpdhU6TtNmp%2B2vrTgIhAP2pWMRsSXXMwpWd9cWn3T%2FKw%2FpRBxtFfCObkca8VKhlKv8DCFIQABoMNjM3NDIzMTgzODA1IgzB8MeItramuT%2Fw7Kgq3AP6EiI88hudx0oV1YANeNk2eSlV7BZcOvRcnZqG109Z3ctKpfo%2FHLncjoFE%2F5yZlfFUmgSdGlD3xGr%2Be6j0ZKkcOBEeAuDAa78OyUL4pVDRB7psrk%2BMJ8bBrYZGb%2FA1zSk5%2BG8ggO5zlyOwOtWtoDrmlcYqdevTz8tiJ%2BnHSrzSett%2BQsj878Xtnb8O2rMvhOhSd8vcfhYqw7GkpjAbYoFDTYWqTBH3QFVIxaYd49etJ5LQ0yETl%2BM1Q%2Bs2y0oZmjzBRnN0eO151BF4ww5dAV8d1o5I0edNMPjFfM2sIaX7spTjtwCxUHL5XEZj7eq9quZpp5XniK1DVry1RuPOBs5Xdn21R3vO3q83zBsowvv6Ae5DTs8HKpEJjizkOpmbZmByYMdfW5AI2PUIO7EP00%2BPLLwJW8OmW8i0qN%2BLD5ghxh6JEDIQhZmDffXFfvrK%2FMtMK6d95G%2B68oHdzbvZZa0SxAoZlP6hy7FYVEY6kubvcZTCYapSEgxOiZE5MRKaIDpel79eFPfye%2FPMNPYbE4glW4JwYD3BTPZ%2BblkHxGLneQhbDMzmnDKnXgsY4nSYUSqCPgd2Rsrl8t50HfxRgWMuMovxUdFxQX5AlfP%2FrmesmqKEJ%2BaGio6Sg%2BVrFDCUlKfDBjqkAV1V7HWoBty7%2Fdhqkpr9a0XWWyLk40Yc0NdX4z414BsHJR1uywa26PSdY88HtzVEl3YhHenEsOvfnb6Qzve%2BX%2Bo5o7IaSUKhd2npnLf1ENi867MuOh49bzcpZdNB1vBG5OLW2MLblGFHxCsPAJfCLYBQBk5E2cFTdV3UgpqzFvmUvCsPYV2afQUhgi%2BHqh%2BNMIcE1MwLrnd0B3lHEm7%2Fg2H12Ijj&X-Amz-Signature=aab30b2384a8347dce129519c5fb96ab1c4ab6a1600584ee8fed53128bb50f25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHNV6DOL%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T034908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDRRr5uhJKuMx%2Fx4CIbMWQZxfWV7lpdhU6TtNmp%2B2vrTgIhAP2pWMRsSXXMwpWd9cWn3T%2FKw%2FpRBxtFfCObkca8VKhlKv8DCFIQABoMNjM3NDIzMTgzODA1IgzB8MeItramuT%2Fw7Kgq3AP6EiI88hudx0oV1YANeNk2eSlV7BZcOvRcnZqG109Z3ctKpfo%2FHLncjoFE%2F5yZlfFUmgSdGlD3xGr%2Be6j0ZKkcOBEeAuDAa78OyUL4pVDRB7psrk%2BMJ8bBrYZGb%2FA1zSk5%2BG8ggO5zlyOwOtWtoDrmlcYqdevTz8tiJ%2BnHSrzSett%2BQsj878Xtnb8O2rMvhOhSd8vcfhYqw7GkpjAbYoFDTYWqTBH3QFVIxaYd49etJ5LQ0yETl%2BM1Q%2Bs2y0oZmjzBRnN0eO151BF4ww5dAV8d1o5I0edNMPjFfM2sIaX7spTjtwCxUHL5XEZj7eq9quZpp5XniK1DVry1RuPOBs5Xdn21R3vO3q83zBsowvv6Ae5DTs8HKpEJjizkOpmbZmByYMdfW5AI2PUIO7EP00%2BPLLwJW8OmW8i0qN%2BLD5ghxh6JEDIQhZmDffXFfvrK%2FMtMK6d95G%2B68oHdzbvZZa0SxAoZlP6hy7FYVEY6kubvcZTCYapSEgxOiZE5MRKaIDpel79eFPfye%2FPMNPYbE4glW4JwYD3BTPZ%2BblkHxGLneQhbDMzmnDKnXgsY4nSYUSqCPgd2Rsrl8t50HfxRgWMuMovxUdFxQX5AlfP%2FrmesmqKEJ%2BaGio6Sg%2BVrFDCUlKfDBjqkAV1V7HWoBty7%2Fdhqkpr9a0XWWyLk40Yc0NdX4z414BsHJR1uywa26PSdY88HtzVEl3YhHenEsOvfnb6Qzve%2BX%2Bo5o7IaSUKhd2npnLf1ENi867MuOh49bzcpZdNB1vBG5OLW2MLblGFHxCsPAJfCLYBQBk5E2cFTdV3UgpqzFvmUvCsPYV2afQUhgi%2BHqh%2BNMIcE1MwLrnd0B3lHEm7%2Fg2H12Ijj&X-Amz-Signature=30231cb510a5d0097f70bdc4a4c0e5bf122d277dd5c92ba1cf9e63ca099ed830&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHNV6DOL%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T034908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDRRr5uhJKuMx%2Fx4CIbMWQZxfWV7lpdhU6TtNmp%2B2vrTgIhAP2pWMRsSXXMwpWd9cWn3T%2FKw%2FpRBxtFfCObkca8VKhlKv8DCFIQABoMNjM3NDIzMTgzODA1IgzB8MeItramuT%2Fw7Kgq3AP6EiI88hudx0oV1YANeNk2eSlV7BZcOvRcnZqG109Z3ctKpfo%2FHLncjoFE%2F5yZlfFUmgSdGlD3xGr%2Be6j0ZKkcOBEeAuDAa78OyUL4pVDRB7psrk%2BMJ8bBrYZGb%2FA1zSk5%2BG8ggO5zlyOwOtWtoDrmlcYqdevTz8tiJ%2BnHSrzSett%2BQsj878Xtnb8O2rMvhOhSd8vcfhYqw7GkpjAbYoFDTYWqTBH3QFVIxaYd49etJ5LQ0yETl%2BM1Q%2Bs2y0oZmjzBRnN0eO151BF4ww5dAV8d1o5I0edNMPjFfM2sIaX7spTjtwCxUHL5XEZj7eq9quZpp5XniK1DVry1RuPOBs5Xdn21R3vO3q83zBsowvv6Ae5DTs8HKpEJjizkOpmbZmByYMdfW5AI2PUIO7EP00%2BPLLwJW8OmW8i0qN%2BLD5ghxh6JEDIQhZmDffXFfvrK%2FMtMK6d95G%2B68oHdzbvZZa0SxAoZlP6hy7FYVEY6kubvcZTCYapSEgxOiZE5MRKaIDpel79eFPfye%2FPMNPYbE4glW4JwYD3BTPZ%2BblkHxGLneQhbDMzmnDKnXgsY4nSYUSqCPgd2Rsrl8t50HfxRgWMuMovxUdFxQX5AlfP%2FrmesmqKEJ%2BaGio6Sg%2BVrFDCUlKfDBjqkAV1V7HWoBty7%2Fdhqkpr9a0XWWyLk40Yc0NdX4z414BsHJR1uywa26PSdY88HtzVEl3YhHenEsOvfnb6Qzve%2BX%2Bo5o7IaSUKhd2npnLf1ENi867MuOh49bzcpZdNB1vBG5OLW2MLblGFHxCsPAJfCLYBQBk5E2cFTdV3UgpqzFvmUvCsPYV2afQUhgi%2BHqh%2BNMIcE1MwLrnd0B3lHEm7%2Fg2H12Ijj&X-Amz-Signature=9d0bd29ab5a93d450c61d9cd423f7545657723be35b31997cfeb3da9623cfd86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHNV6DOL%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T034909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDRRr5uhJKuMx%2Fx4CIbMWQZxfWV7lpdhU6TtNmp%2B2vrTgIhAP2pWMRsSXXMwpWd9cWn3T%2FKw%2FpRBxtFfCObkca8VKhlKv8DCFIQABoMNjM3NDIzMTgzODA1IgzB8MeItramuT%2Fw7Kgq3AP6EiI88hudx0oV1YANeNk2eSlV7BZcOvRcnZqG109Z3ctKpfo%2FHLncjoFE%2F5yZlfFUmgSdGlD3xGr%2Be6j0ZKkcOBEeAuDAa78OyUL4pVDRB7psrk%2BMJ8bBrYZGb%2FA1zSk5%2BG8ggO5zlyOwOtWtoDrmlcYqdevTz8tiJ%2BnHSrzSett%2BQsj878Xtnb8O2rMvhOhSd8vcfhYqw7GkpjAbYoFDTYWqTBH3QFVIxaYd49etJ5LQ0yETl%2BM1Q%2Bs2y0oZmjzBRnN0eO151BF4ww5dAV8d1o5I0edNMPjFfM2sIaX7spTjtwCxUHL5XEZj7eq9quZpp5XniK1DVry1RuPOBs5Xdn21R3vO3q83zBsowvv6Ae5DTs8HKpEJjizkOpmbZmByYMdfW5AI2PUIO7EP00%2BPLLwJW8OmW8i0qN%2BLD5ghxh6JEDIQhZmDffXFfvrK%2FMtMK6d95G%2B68oHdzbvZZa0SxAoZlP6hy7FYVEY6kubvcZTCYapSEgxOiZE5MRKaIDpel79eFPfye%2FPMNPYbE4glW4JwYD3BTPZ%2BblkHxGLneQhbDMzmnDKnXgsY4nSYUSqCPgd2Rsrl8t50HfxRgWMuMovxUdFxQX5AlfP%2FrmesmqKEJ%2BaGio6Sg%2BVrFDCUlKfDBjqkAV1V7HWoBty7%2Fdhqkpr9a0XWWyLk40Yc0NdX4z414BsHJR1uywa26PSdY88HtzVEl3YhHenEsOvfnb6Qzve%2BX%2Bo5o7IaSUKhd2npnLf1ENi867MuOh49bzcpZdNB1vBG5OLW2MLblGFHxCsPAJfCLYBQBk5E2cFTdV3UgpqzFvmUvCsPYV2afQUhgi%2BHqh%2BNMIcE1MwLrnd0B3lHEm7%2Fg2H12Ijj&X-Amz-Signature=50a2892db215f0e508cdabc5363d8270054cf5241c930f91d3a58de07d641200&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHNV6DOL%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T034909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQDRRr5uhJKuMx%2Fx4CIbMWQZxfWV7lpdhU6TtNmp%2B2vrTgIhAP2pWMRsSXXMwpWd9cWn3T%2FKw%2FpRBxtFfCObkca8VKhlKv8DCFIQABoMNjM3NDIzMTgzODA1IgzB8MeItramuT%2Fw7Kgq3AP6EiI88hudx0oV1YANeNk2eSlV7BZcOvRcnZqG109Z3ctKpfo%2FHLncjoFE%2F5yZlfFUmgSdGlD3xGr%2Be6j0ZKkcOBEeAuDAa78OyUL4pVDRB7psrk%2BMJ8bBrYZGb%2FA1zSk5%2BG8ggO5zlyOwOtWtoDrmlcYqdevTz8tiJ%2BnHSrzSett%2BQsj878Xtnb8O2rMvhOhSd8vcfhYqw7GkpjAbYoFDTYWqTBH3QFVIxaYd49etJ5LQ0yETl%2BM1Q%2Bs2y0oZmjzBRnN0eO151BF4ww5dAV8d1o5I0edNMPjFfM2sIaX7spTjtwCxUHL5XEZj7eq9quZpp5XniK1DVry1RuPOBs5Xdn21R3vO3q83zBsowvv6Ae5DTs8HKpEJjizkOpmbZmByYMdfW5AI2PUIO7EP00%2BPLLwJW8OmW8i0qN%2BLD5ghxh6JEDIQhZmDffXFfvrK%2FMtMK6d95G%2B68oHdzbvZZa0SxAoZlP6hy7FYVEY6kubvcZTCYapSEgxOiZE5MRKaIDpel79eFPfye%2FPMNPYbE4glW4JwYD3BTPZ%2BblkHxGLneQhbDMzmnDKnXgsY4nSYUSqCPgd2Rsrl8t50HfxRgWMuMovxUdFxQX5AlfP%2FrmesmqKEJ%2BaGio6Sg%2BVrFDCUlKfDBjqkAV1V7HWoBty7%2Fdhqkpr9a0XWWyLk40Yc0NdX4z414BsHJR1uywa26PSdY88HtzVEl3YhHenEsOvfnb6Qzve%2BX%2Bo5o7IaSUKhd2npnLf1ENi867MuOh49bzcpZdNB1vBG5OLW2MLblGFHxCsPAJfCLYBQBk5E2cFTdV3UgpqzFvmUvCsPYV2afQUhgi%2BHqh%2BNMIcE1MwLrnd0B3lHEm7%2Fg2H12Ijj&X-Amz-Signature=caad68c5e4a040a9676b8b5cbe22ae47ea1c2461ec383494984281bc2c3e3a75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
