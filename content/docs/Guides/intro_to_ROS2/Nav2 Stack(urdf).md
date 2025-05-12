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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7E65YGF%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T081319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCHzgAFsZuJX6MGEORQ4Br0WFL9K7AgPOkeboiSGmkK3gCIQClG%2F8NYWCY0SApZDWLba%2BuuJK9pqaMpndkx%2BSqfFzLoiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0fJIuwYqT8gj1v9CKtwDT4yyoAf02nF8eAeuIXrc5TgTB0UV052Z8dPzlfyxvhDY7TdKY3uc8Jj8WKBPF%2FAG%2FmLIJ9bdTNRpa5fuKz4CuOcWmBoR%2BgqyqvIhRZNcHZSjGd3nn98I30fS%2FeqV5deFC24OfjuPpn5BFKVzVt4SB3U64QLr3ATdYuvinMUWSH1aWdeG9%2BT4YP48dBNwu903zkUgwCOVMeGkl0o0CQb3LL0VORQ%2BEq4%2FbcWIChRWx6ZTb2axCUwnvujaUFBSFYvXfpvXpeAzC2ALfouO87YYZPOq7jbMU4aKKYhotxOBCf1HAKn9d5Q2enmVRQdpWV9g0hkhQrxUD8NPZ3NLKEM99H5xaznRE%2BjTMtKhuJU%2FnU57B1euauZJ1R26Dct3f%2FNPFDbj4ZHH6E%2FtbljVYTjK8CoZzCUR8oA%2BVJjOOlB%2FSPXf06od%2FCWQCL5m8HEk2KOuajf3w8ZfQblZAool08RI2HXu0s1vZHkaZIVDYE63Pma37KZQ4gdcP9pPPSItpDWxaqZupqh3Eqq2WL0gFzjMIRqrYO2mu%2FQL3aU%2FMPBpbbyx4hx%2BQhOctR84ritjoCNBUWoEUV2vtjcLqRTdjlZMqXk4Idm%2B53MRfpmJWRfMtNSPoUWXMmTwQekTZlYws9CGwQY6pgFAdnkizbLyqR312jityseI6UZlm6g9%2BJh2R401TgjF81CR6%2BFlguy5sJBFS2VVEl%2F2zrC4KFB70eHigXa9qk%2BKx6tepO77IC7a9f31Q4H5Pq4LM5HDdF5xnA4Uq4p3T8fp5NL62P%2Bv7%2BnFKmvdahuEVUIOD8%2BwiIwjwxY4XnhejDwqr%2BroLVTj8GXpm95Suil%2BxzQWIuvGzipHSKPsTmOSg06KFTM%2F&X-Amz-Signature=0762d0f6479a9496764dc68b17360090a86b34f1571499587efd643cb22d12f6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7E65YGF%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T081319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCHzgAFsZuJX6MGEORQ4Br0WFL9K7AgPOkeboiSGmkK3gCIQClG%2F8NYWCY0SApZDWLba%2BuuJK9pqaMpndkx%2BSqfFzLoiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0fJIuwYqT8gj1v9CKtwDT4yyoAf02nF8eAeuIXrc5TgTB0UV052Z8dPzlfyxvhDY7TdKY3uc8Jj8WKBPF%2FAG%2FmLIJ9bdTNRpa5fuKz4CuOcWmBoR%2BgqyqvIhRZNcHZSjGd3nn98I30fS%2FeqV5deFC24OfjuPpn5BFKVzVt4SB3U64QLr3ATdYuvinMUWSH1aWdeG9%2BT4YP48dBNwu903zkUgwCOVMeGkl0o0CQb3LL0VORQ%2BEq4%2FbcWIChRWx6ZTb2axCUwnvujaUFBSFYvXfpvXpeAzC2ALfouO87YYZPOq7jbMU4aKKYhotxOBCf1HAKn9d5Q2enmVRQdpWV9g0hkhQrxUD8NPZ3NLKEM99H5xaznRE%2BjTMtKhuJU%2FnU57B1euauZJ1R26Dct3f%2FNPFDbj4ZHH6E%2FtbljVYTjK8CoZzCUR8oA%2BVJjOOlB%2FSPXf06od%2FCWQCL5m8HEk2KOuajf3w8ZfQblZAool08RI2HXu0s1vZHkaZIVDYE63Pma37KZQ4gdcP9pPPSItpDWxaqZupqh3Eqq2WL0gFzjMIRqrYO2mu%2FQL3aU%2FMPBpbbyx4hx%2BQhOctR84ritjoCNBUWoEUV2vtjcLqRTdjlZMqXk4Idm%2B53MRfpmJWRfMtNSPoUWXMmTwQekTZlYws9CGwQY6pgFAdnkizbLyqR312jityseI6UZlm6g9%2BJh2R401TgjF81CR6%2BFlguy5sJBFS2VVEl%2F2zrC4KFB70eHigXa9qk%2BKx6tepO77IC7a9f31Q4H5Pq4LM5HDdF5xnA4Uq4p3T8fp5NL62P%2Bv7%2BnFKmvdahuEVUIOD8%2BwiIwjwxY4XnhejDwqr%2BroLVTj8GXpm95Suil%2BxzQWIuvGzipHSKPsTmOSg06KFTM%2F&X-Amz-Signature=69d0be02866f921e2956e8fcd104f41f3b16c22d5fc88120e6b64cf43471d2ad&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7E65YGF%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T081319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCHzgAFsZuJX6MGEORQ4Br0WFL9K7AgPOkeboiSGmkK3gCIQClG%2F8NYWCY0SApZDWLba%2BuuJK9pqaMpndkx%2BSqfFzLoiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0fJIuwYqT8gj1v9CKtwDT4yyoAf02nF8eAeuIXrc5TgTB0UV052Z8dPzlfyxvhDY7TdKY3uc8Jj8WKBPF%2FAG%2FmLIJ9bdTNRpa5fuKz4CuOcWmBoR%2BgqyqvIhRZNcHZSjGd3nn98I30fS%2FeqV5deFC24OfjuPpn5BFKVzVt4SB3U64QLr3ATdYuvinMUWSH1aWdeG9%2BT4YP48dBNwu903zkUgwCOVMeGkl0o0CQb3LL0VORQ%2BEq4%2FbcWIChRWx6ZTb2axCUwnvujaUFBSFYvXfpvXpeAzC2ALfouO87YYZPOq7jbMU4aKKYhotxOBCf1HAKn9d5Q2enmVRQdpWV9g0hkhQrxUD8NPZ3NLKEM99H5xaznRE%2BjTMtKhuJU%2FnU57B1euauZJ1R26Dct3f%2FNPFDbj4ZHH6E%2FtbljVYTjK8CoZzCUR8oA%2BVJjOOlB%2FSPXf06od%2FCWQCL5m8HEk2KOuajf3w8ZfQblZAool08RI2HXu0s1vZHkaZIVDYE63Pma37KZQ4gdcP9pPPSItpDWxaqZupqh3Eqq2WL0gFzjMIRqrYO2mu%2FQL3aU%2FMPBpbbyx4hx%2BQhOctR84ritjoCNBUWoEUV2vtjcLqRTdjlZMqXk4Idm%2B53MRfpmJWRfMtNSPoUWXMmTwQekTZlYws9CGwQY6pgFAdnkizbLyqR312jityseI6UZlm6g9%2BJh2R401TgjF81CR6%2BFlguy5sJBFS2VVEl%2F2zrC4KFB70eHigXa9qk%2BKx6tepO77IC7a9f31Q4H5Pq4LM5HDdF5xnA4Uq4p3T8fp5NL62P%2Bv7%2BnFKmvdahuEVUIOD8%2BwiIwjwxY4XnhejDwqr%2BroLVTj8GXpm95Suil%2BxzQWIuvGzipHSKPsTmOSg06KFTM%2F&X-Amz-Signature=ffd34066d7665a810b0406d9a04b150917b98a4e7dd1eafc42ddfc2f0effcd8f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7E65YGF%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T081319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCHzgAFsZuJX6MGEORQ4Br0WFL9K7AgPOkeboiSGmkK3gCIQClG%2F8NYWCY0SApZDWLba%2BuuJK9pqaMpndkx%2BSqfFzLoiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0fJIuwYqT8gj1v9CKtwDT4yyoAf02nF8eAeuIXrc5TgTB0UV052Z8dPzlfyxvhDY7TdKY3uc8Jj8WKBPF%2FAG%2FmLIJ9bdTNRpa5fuKz4CuOcWmBoR%2BgqyqvIhRZNcHZSjGd3nn98I30fS%2FeqV5deFC24OfjuPpn5BFKVzVt4SB3U64QLr3ATdYuvinMUWSH1aWdeG9%2BT4YP48dBNwu903zkUgwCOVMeGkl0o0CQb3LL0VORQ%2BEq4%2FbcWIChRWx6ZTb2axCUwnvujaUFBSFYvXfpvXpeAzC2ALfouO87YYZPOq7jbMU4aKKYhotxOBCf1HAKn9d5Q2enmVRQdpWV9g0hkhQrxUD8NPZ3NLKEM99H5xaznRE%2BjTMtKhuJU%2FnU57B1euauZJ1R26Dct3f%2FNPFDbj4ZHH6E%2FtbljVYTjK8CoZzCUR8oA%2BVJjOOlB%2FSPXf06od%2FCWQCL5m8HEk2KOuajf3w8ZfQblZAool08RI2HXu0s1vZHkaZIVDYE63Pma37KZQ4gdcP9pPPSItpDWxaqZupqh3Eqq2WL0gFzjMIRqrYO2mu%2FQL3aU%2FMPBpbbyx4hx%2BQhOctR84ritjoCNBUWoEUV2vtjcLqRTdjlZMqXk4Idm%2B53MRfpmJWRfMtNSPoUWXMmTwQekTZlYws9CGwQY6pgFAdnkizbLyqR312jityseI6UZlm6g9%2BJh2R401TgjF81CR6%2BFlguy5sJBFS2VVEl%2F2zrC4KFB70eHigXa9qk%2BKx6tepO77IC7a9f31Q4H5Pq4LM5HDdF5xnA4Uq4p3T8fp5NL62P%2Bv7%2BnFKmvdahuEVUIOD8%2BwiIwjwxY4XnhejDwqr%2BroLVTj8GXpm95Suil%2BxzQWIuvGzipHSKPsTmOSg06KFTM%2F&X-Amz-Signature=4546239b49e1b3ef0515e4af472cfbd14bc11a6e88ea658fd881e954393e48d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7E65YGF%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T081319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCHzgAFsZuJX6MGEORQ4Br0WFL9K7AgPOkeboiSGmkK3gCIQClG%2F8NYWCY0SApZDWLba%2BuuJK9pqaMpndkx%2BSqfFzLoiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0fJIuwYqT8gj1v9CKtwDT4yyoAf02nF8eAeuIXrc5TgTB0UV052Z8dPzlfyxvhDY7TdKY3uc8Jj8WKBPF%2FAG%2FmLIJ9bdTNRpa5fuKz4CuOcWmBoR%2BgqyqvIhRZNcHZSjGd3nn98I30fS%2FeqV5deFC24OfjuPpn5BFKVzVt4SB3U64QLr3ATdYuvinMUWSH1aWdeG9%2BT4YP48dBNwu903zkUgwCOVMeGkl0o0CQb3LL0VORQ%2BEq4%2FbcWIChRWx6ZTb2axCUwnvujaUFBSFYvXfpvXpeAzC2ALfouO87YYZPOq7jbMU4aKKYhotxOBCf1HAKn9d5Q2enmVRQdpWV9g0hkhQrxUD8NPZ3NLKEM99H5xaznRE%2BjTMtKhuJU%2FnU57B1euauZJ1R26Dct3f%2FNPFDbj4ZHH6E%2FtbljVYTjK8CoZzCUR8oA%2BVJjOOlB%2FSPXf06od%2FCWQCL5m8HEk2KOuajf3w8ZfQblZAool08RI2HXu0s1vZHkaZIVDYE63Pma37KZQ4gdcP9pPPSItpDWxaqZupqh3Eqq2WL0gFzjMIRqrYO2mu%2FQL3aU%2FMPBpbbyx4hx%2BQhOctR84ritjoCNBUWoEUV2vtjcLqRTdjlZMqXk4Idm%2B53MRfpmJWRfMtNSPoUWXMmTwQekTZlYws9CGwQY6pgFAdnkizbLyqR312jityseI6UZlm6g9%2BJh2R401TgjF81CR6%2BFlguy5sJBFS2VVEl%2F2zrC4KFB70eHigXa9qk%2BKx6tepO77IC7a9f31Q4H5Pq4LM5HDdF5xnA4Uq4p3T8fp5NL62P%2Bv7%2BnFKmvdahuEVUIOD8%2BwiIwjwxY4XnhejDwqr%2BroLVTj8GXpm95Suil%2BxzQWIuvGzipHSKPsTmOSg06KFTM%2F&X-Amz-Signature=52de072677a3a4b0595163255e7719255cd3eaf851673fa84d69c6f2f827c3a7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7E65YGF%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T081319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCHzgAFsZuJX6MGEORQ4Br0WFL9K7AgPOkeboiSGmkK3gCIQClG%2F8NYWCY0SApZDWLba%2BuuJK9pqaMpndkx%2BSqfFzLoiqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0fJIuwYqT8gj1v9CKtwDT4yyoAf02nF8eAeuIXrc5TgTB0UV052Z8dPzlfyxvhDY7TdKY3uc8Jj8WKBPF%2FAG%2FmLIJ9bdTNRpa5fuKz4CuOcWmBoR%2BgqyqvIhRZNcHZSjGd3nn98I30fS%2FeqV5deFC24OfjuPpn5BFKVzVt4SB3U64QLr3ATdYuvinMUWSH1aWdeG9%2BT4YP48dBNwu903zkUgwCOVMeGkl0o0CQb3LL0VORQ%2BEq4%2FbcWIChRWx6ZTb2axCUwnvujaUFBSFYvXfpvXpeAzC2ALfouO87YYZPOq7jbMU4aKKYhotxOBCf1HAKn9d5Q2enmVRQdpWV9g0hkhQrxUD8NPZ3NLKEM99H5xaznRE%2BjTMtKhuJU%2FnU57B1euauZJ1R26Dct3f%2FNPFDbj4ZHH6E%2FtbljVYTjK8CoZzCUR8oA%2BVJjOOlB%2FSPXf06od%2FCWQCL5m8HEk2KOuajf3w8ZfQblZAool08RI2HXu0s1vZHkaZIVDYE63Pma37KZQ4gdcP9pPPSItpDWxaqZupqh3Eqq2WL0gFzjMIRqrYO2mu%2FQL3aU%2FMPBpbbyx4hx%2BQhOctR84ritjoCNBUWoEUV2vtjcLqRTdjlZMqXk4Idm%2B53MRfpmJWRfMtNSPoUWXMmTwQekTZlYws9CGwQY6pgFAdnkizbLyqR312jityseI6UZlm6g9%2BJh2R401TgjF81CR6%2BFlguy5sJBFS2VVEl%2F2zrC4KFB70eHigXa9qk%2BKx6tepO77IC7a9f31Q4H5Pq4LM5HDdF5xnA4Uq4p3T8fp5NL62P%2Bv7%2BnFKmvdahuEVUIOD8%2BwiIwjwxY4XnhejDwqr%2BroLVTj8GXpm95Suil%2BxzQWIuvGzipHSKPsTmOSg06KFTM%2F&X-Amz-Signature=6ce33fafee6192f29ab772c33042da48d7c6a050add5e73315eeb86a641bff08&X-Amz-SignedHeaders=host&x-id=GetObject)
