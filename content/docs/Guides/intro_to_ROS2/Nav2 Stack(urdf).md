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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XKWAFEI%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIB8NarmSmzO29evMzr%2FoDf3lLoF5Th6GSzoq%2F8NVH2x3AiEAsTUVFWJKeJ4PPeT%2F4taWaJpGXTMT8G91Oh9FaKNpNAQqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXa0DNePd86ZssuAyrcA2TJM3GHlxaUQQiGDfooc9alruN1w8w8oErGm3c42%2BMxMJOgF8e7LUJgmWEB%2FTRx8%2Bw4KiFcGbgDuQ9Bj28KnP51Q3D3DlIU5MmzF0uYvZyuOyBMPvikEKY01H2id8F6zRRP6Sb%2FyQ6tWtj3xIKCcyrcxDjIwOMM%2Bt3wZYhvz2kaXH3BjHVvSu80fa62gIchE76dk0QxCQjlhd5jFuOuRxF9FifB%2BVmswU5u0zhcChArlPvepluZqOAMfOA0ZgJWFxNDcdb79W%2BY0%2F4%2Fd8hQfDRzkqk1BjLGkMKOOGTmJA9VIdd1Z%2FRKQ0fga47usrn7yY3hym3RwTeIa68L3aSAFQfF82iga4%2F30CkCLI58YXJNzBeXCQbdEIqRo8HrxquP84XjxWBWC0tEJH4m5bzmiDpAB%2BNxz5H97Q%2BkR2lSk4UtuwBsAOH%2BmgVsSZLVwPKPjNczVyS2I720qWNa%2Bqo7Ir6WN6ZyQ%2Fc7J9a5%2FbJEPfUvbqWQ%2FSbvib9j8KRqR6zhSt73f%2FvOpImUDk2oK4MrP4eP2A%2BOgkWCJNdRK3cD4z14YEOL2i4QSe%2FQNEfHDBCnQvEhLt6I7yvhrbbfarDqyw1LQNzWWjcTIvekQ%2BFZPRBk%2FPbY8oz%2FOsFFLVeYMNTMqr8GOqUBuhDL%2FUUgfGrqMoF0SiP57Gt3TUmWje2oKtgqSW%2BUNfG3kXib%2Bw1q7S53DQR%2BJautqcfuRS3tfaaVls0GrsAa77YPXJNh1rtegdJOXxDlZHISrbb%2BULCRhOI%2FHJ5U2cGGkeDd3Zl%2FtZJE9Sij%2BY2SSf2aXj8ykcfIsL%2BMRW59u%2FqNufKeu6YHZSbZswhdg7jUyDNSscdha2ZT0d7ggXZtYW%2BHpoOg&X-Amz-Signature=eab498be4a71386e05eb9a17600c15be3a71545724ee15c80aaf7dbbd3312d49&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XKWAFEI%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIB8NarmSmzO29evMzr%2FoDf3lLoF5Th6GSzoq%2F8NVH2x3AiEAsTUVFWJKeJ4PPeT%2F4taWaJpGXTMT8G91Oh9FaKNpNAQqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXa0DNePd86ZssuAyrcA2TJM3GHlxaUQQiGDfooc9alruN1w8w8oErGm3c42%2BMxMJOgF8e7LUJgmWEB%2FTRx8%2Bw4KiFcGbgDuQ9Bj28KnP51Q3D3DlIU5MmzF0uYvZyuOyBMPvikEKY01H2id8F6zRRP6Sb%2FyQ6tWtj3xIKCcyrcxDjIwOMM%2Bt3wZYhvz2kaXH3BjHVvSu80fa62gIchE76dk0QxCQjlhd5jFuOuRxF9FifB%2BVmswU5u0zhcChArlPvepluZqOAMfOA0ZgJWFxNDcdb79W%2BY0%2F4%2Fd8hQfDRzkqk1BjLGkMKOOGTmJA9VIdd1Z%2FRKQ0fga47usrn7yY3hym3RwTeIa68L3aSAFQfF82iga4%2F30CkCLI58YXJNzBeXCQbdEIqRo8HrxquP84XjxWBWC0tEJH4m5bzmiDpAB%2BNxz5H97Q%2BkR2lSk4UtuwBsAOH%2BmgVsSZLVwPKPjNczVyS2I720qWNa%2Bqo7Ir6WN6ZyQ%2Fc7J9a5%2FbJEPfUvbqWQ%2FSbvib9j8KRqR6zhSt73f%2FvOpImUDk2oK4MrP4eP2A%2BOgkWCJNdRK3cD4z14YEOL2i4QSe%2FQNEfHDBCnQvEhLt6I7yvhrbbfarDqyw1LQNzWWjcTIvekQ%2BFZPRBk%2FPbY8oz%2FOsFFLVeYMNTMqr8GOqUBuhDL%2FUUgfGrqMoF0SiP57Gt3TUmWje2oKtgqSW%2BUNfG3kXib%2Bw1q7S53DQR%2BJautqcfuRS3tfaaVls0GrsAa77YPXJNh1rtegdJOXxDlZHISrbb%2BULCRhOI%2FHJ5U2cGGkeDd3Zl%2FtZJE9Sij%2BY2SSf2aXj8ykcfIsL%2BMRW59u%2FqNufKeu6YHZSbZswhdg7jUyDNSscdha2ZT0d7ggXZtYW%2BHpoOg&X-Amz-Signature=6c42d78b07b454342fb94db2adb639c81d17e03bf379a53584e7858a23f78ef5&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XKWAFEI%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIB8NarmSmzO29evMzr%2FoDf3lLoF5Th6GSzoq%2F8NVH2x3AiEAsTUVFWJKeJ4PPeT%2F4taWaJpGXTMT8G91Oh9FaKNpNAQqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXa0DNePd86ZssuAyrcA2TJM3GHlxaUQQiGDfooc9alruN1w8w8oErGm3c42%2BMxMJOgF8e7LUJgmWEB%2FTRx8%2Bw4KiFcGbgDuQ9Bj28KnP51Q3D3DlIU5MmzF0uYvZyuOyBMPvikEKY01H2id8F6zRRP6Sb%2FyQ6tWtj3xIKCcyrcxDjIwOMM%2Bt3wZYhvz2kaXH3BjHVvSu80fa62gIchE76dk0QxCQjlhd5jFuOuRxF9FifB%2BVmswU5u0zhcChArlPvepluZqOAMfOA0ZgJWFxNDcdb79W%2BY0%2F4%2Fd8hQfDRzkqk1BjLGkMKOOGTmJA9VIdd1Z%2FRKQ0fga47usrn7yY3hym3RwTeIa68L3aSAFQfF82iga4%2F30CkCLI58YXJNzBeXCQbdEIqRo8HrxquP84XjxWBWC0tEJH4m5bzmiDpAB%2BNxz5H97Q%2BkR2lSk4UtuwBsAOH%2BmgVsSZLVwPKPjNczVyS2I720qWNa%2Bqo7Ir6WN6ZyQ%2Fc7J9a5%2FbJEPfUvbqWQ%2FSbvib9j8KRqR6zhSt73f%2FvOpImUDk2oK4MrP4eP2A%2BOgkWCJNdRK3cD4z14YEOL2i4QSe%2FQNEfHDBCnQvEhLt6I7yvhrbbfarDqyw1LQNzWWjcTIvekQ%2BFZPRBk%2FPbY8oz%2FOsFFLVeYMNTMqr8GOqUBuhDL%2FUUgfGrqMoF0SiP57Gt3TUmWje2oKtgqSW%2BUNfG3kXib%2Bw1q7S53DQR%2BJautqcfuRS3tfaaVls0GrsAa77YPXJNh1rtegdJOXxDlZHISrbb%2BULCRhOI%2FHJ5U2cGGkeDd3Zl%2FtZJE9Sij%2BY2SSf2aXj8ykcfIsL%2BMRW59u%2FqNufKeu6YHZSbZswhdg7jUyDNSscdha2ZT0d7ggXZtYW%2BHpoOg&X-Amz-Signature=1dee6c2fafc40830bfd15a5a5cf70a735713145b12aa40af5249412b2d4479b7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XKWAFEI%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIB8NarmSmzO29evMzr%2FoDf3lLoF5Th6GSzoq%2F8NVH2x3AiEAsTUVFWJKeJ4PPeT%2F4taWaJpGXTMT8G91Oh9FaKNpNAQqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXa0DNePd86ZssuAyrcA2TJM3GHlxaUQQiGDfooc9alruN1w8w8oErGm3c42%2BMxMJOgF8e7LUJgmWEB%2FTRx8%2Bw4KiFcGbgDuQ9Bj28KnP51Q3D3DlIU5MmzF0uYvZyuOyBMPvikEKY01H2id8F6zRRP6Sb%2FyQ6tWtj3xIKCcyrcxDjIwOMM%2Bt3wZYhvz2kaXH3BjHVvSu80fa62gIchE76dk0QxCQjlhd5jFuOuRxF9FifB%2BVmswU5u0zhcChArlPvepluZqOAMfOA0ZgJWFxNDcdb79W%2BY0%2F4%2Fd8hQfDRzkqk1BjLGkMKOOGTmJA9VIdd1Z%2FRKQ0fga47usrn7yY3hym3RwTeIa68L3aSAFQfF82iga4%2F30CkCLI58YXJNzBeXCQbdEIqRo8HrxquP84XjxWBWC0tEJH4m5bzmiDpAB%2BNxz5H97Q%2BkR2lSk4UtuwBsAOH%2BmgVsSZLVwPKPjNczVyS2I720qWNa%2Bqo7Ir6WN6ZyQ%2Fc7J9a5%2FbJEPfUvbqWQ%2FSbvib9j8KRqR6zhSt73f%2FvOpImUDk2oK4MrP4eP2A%2BOgkWCJNdRK3cD4z14YEOL2i4QSe%2FQNEfHDBCnQvEhLt6I7yvhrbbfarDqyw1LQNzWWjcTIvekQ%2BFZPRBk%2FPbY8oz%2FOsFFLVeYMNTMqr8GOqUBuhDL%2FUUgfGrqMoF0SiP57Gt3TUmWje2oKtgqSW%2BUNfG3kXib%2Bw1q7S53DQR%2BJautqcfuRS3tfaaVls0GrsAa77YPXJNh1rtegdJOXxDlZHISrbb%2BULCRhOI%2FHJ5U2cGGkeDd3Zl%2FtZJE9Sij%2BY2SSf2aXj8ykcfIsL%2BMRW59u%2FqNufKeu6YHZSbZswhdg7jUyDNSscdha2ZT0d7ggXZtYW%2BHpoOg&X-Amz-Signature=0e7656d2dace0d2c7f8e030ebbac2d27f35cde41549646cb4b5da3c08173c7c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XKWAFEI%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIB8NarmSmzO29evMzr%2FoDf3lLoF5Th6GSzoq%2F8NVH2x3AiEAsTUVFWJKeJ4PPeT%2F4taWaJpGXTMT8G91Oh9FaKNpNAQqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXa0DNePd86ZssuAyrcA2TJM3GHlxaUQQiGDfooc9alruN1w8w8oErGm3c42%2BMxMJOgF8e7LUJgmWEB%2FTRx8%2Bw4KiFcGbgDuQ9Bj28KnP51Q3D3DlIU5MmzF0uYvZyuOyBMPvikEKY01H2id8F6zRRP6Sb%2FyQ6tWtj3xIKCcyrcxDjIwOMM%2Bt3wZYhvz2kaXH3BjHVvSu80fa62gIchE76dk0QxCQjlhd5jFuOuRxF9FifB%2BVmswU5u0zhcChArlPvepluZqOAMfOA0ZgJWFxNDcdb79W%2BY0%2F4%2Fd8hQfDRzkqk1BjLGkMKOOGTmJA9VIdd1Z%2FRKQ0fga47usrn7yY3hym3RwTeIa68L3aSAFQfF82iga4%2F30CkCLI58YXJNzBeXCQbdEIqRo8HrxquP84XjxWBWC0tEJH4m5bzmiDpAB%2BNxz5H97Q%2BkR2lSk4UtuwBsAOH%2BmgVsSZLVwPKPjNczVyS2I720qWNa%2Bqo7Ir6WN6ZyQ%2Fc7J9a5%2FbJEPfUvbqWQ%2FSbvib9j8KRqR6zhSt73f%2FvOpImUDk2oK4MrP4eP2A%2BOgkWCJNdRK3cD4z14YEOL2i4QSe%2FQNEfHDBCnQvEhLt6I7yvhrbbfarDqyw1LQNzWWjcTIvekQ%2BFZPRBk%2FPbY8oz%2FOsFFLVeYMNTMqr8GOqUBuhDL%2FUUgfGrqMoF0SiP57Gt3TUmWje2oKtgqSW%2BUNfG3kXib%2Bw1q7S53DQR%2BJautqcfuRS3tfaaVls0GrsAa77YPXJNh1rtegdJOXxDlZHISrbb%2BULCRhOI%2FHJ5U2cGGkeDd3Zl%2FtZJE9Sij%2BY2SSf2aXj8ykcfIsL%2BMRW59u%2FqNufKeu6YHZSbZswhdg7jUyDNSscdha2ZT0d7ggXZtYW%2BHpoOg&X-Amz-Signature=8b2a9a2fa226920cc2e1bed722b00451b63967f1d556f795c1235aca20144f80&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XKWAFEI%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIB8NarmSmzO29evMzr%2FoDf3lLoF5Th6GSzoq%2F8NVH2x3AiEAsTUVFWJKeJ4PPeT%2F4taWaJpGXTMT8G91Oh9FaKNpNAQqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXa0DNePd86ZssuAyrcA2TJM3GHlxaUQQiGDfooc9alruN1w8w8oErGm3c42%2BMxMJOgF8e7LUJgmWEB%2FTRx8%2Bw4KiFcGbgDuQ9Bj28KnP51Q3D3DlIU5MmzF0uYvZyuOyBMPvikEKY01H2id8F6zRRP6Sb%2FyQ6tWtj3xIKCcyrcxDjIwOMM%2Bt3wZYhvz2kaXH3BjHVvSu80fa62gIchE76dk0QxCQjlhd5jFuOuRxF9FifB%2BVmswU5u0zhcChArlPvepluZqOAMfOA0ZgJWFxNDcdb79W%2BY0%2F4%2Fd8hQfDRzkqk1BjLGkMKOOGTmJA9VIdd1Z%2FRKQ0fga47usrn7yY3hym3RwTeIa68L3aSAFQfF82iga4%2F30CkCLI58YXJNzBeXCQbdEIqRo8HrxquP84XjxWBWC0tEJH4m5bzmiDpAB%2BNxz5H97Q%2BkR2lSk4UtuwBsAOH%2BmgVsSZLVwPKPjNczVyS2I720qWNa%2Bqo7Ir6WN6ZyQ%2Fc7J9a5%2FbJEPfUvbqWQ%2FSbvib9j8KRqR6zhSt73f%2FvOpImUDk2oK4MrP4eP2A%2BOgkWCJNdRK3cD4z14YEOL2i4QSe%2FQNEfHDBCnQvEhLt6I7yvhrbbfarDqyw1LQNzWWjcTIvekQ%2BFZPRBk%2FPbY8oz%2FOsFFLVeYMNTMqr8GOqUBuhDL%2FUUgfGrqMoF0SiP57Gt3TUmWje2oKtgqSW%2BUNfG3kXib%2Bw1q7S53DQR%2BJautqcfuRS3tfaaVls0GrsAa77YPXJNh1rtegdJOXxDlZHISrbb%2BULCRhOI%2FHJ5U2cGGkeDd3Zl%2FtZJE9Sij%2BY2SSf2aXj8ykcfIsL%2BMRW59u%2FqNufKeu6YHZSbZswhdg7jUyDNSscdha2ZT0d7ggXZtYW%2BHpoOg&X-Amz-Signature=d6b6f92bf4f917505e6611aa245384c8365955d5ea0f88ec3fd0cdf29e94a562&X-Amz-SignedHeaders=host&x-id=GetObject)
