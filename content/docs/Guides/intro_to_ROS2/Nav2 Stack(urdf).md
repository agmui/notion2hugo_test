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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466354K2IZN%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T081433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIB3Rk%2F2KUiXKNENTFTowGlsB5FIcrLfJ1qYB%2BAXEDxzeAiBk8P%2FyU7cFdVe7iGj5UVcUnTm85tAIEHYrkp7NZlftPir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM3Wo%2FJzx8BBXeLk8pKtwDIiLLlrMOyEy1SJ8i%2BlGxkiX3B%2FnWpy%2FM%2Fhy%2BM5K5pbyjIEtRHSK49vwFX5%2FlZHaRGPN1N1q0HLL8x75e0G%2BPmbpl9WptgELoe1fOhgEGUegNZOBUudRzKrFGoUlwW1d2ZSuNOJRrMJLPLZ8%2Fa0KZKC0Irx6DtXCOqmrBwwHU3E3kmR8OsX7ll6aCy9Ol2Vm29xw0GJr4pIDUEl74kLedK3xRIKo4TAFNYGwvKGFGdifwaJWDy15pNl0JRDYP5a4iQ0bghZGZiOp9pqJz8IpWSvreOR%2BHXDiHgkT%2FrGSAxbs5NV3yiWDV1XMBYBLT%2Fb7iX4Kd8Mxte855ISiliLtLjdIlVH2wZKoKJXzID3aanfjqegU7FzQDm%2F1tjS80wlFkIJydGqc8TmbchFwP0X1nRKzYID05HzrjKObxtcglY9YFeXrmqsfOUOkKlMA%2BpDr96hVlWXofnjMc3zkqmEXdLsivfN6Kq%2BE4ZGOHEv5r1j5HuAZ99Uiloaid%2FL79jMBhZbKFTmB1%2BdBUU%2FCdeRtKRQIyfjxu0FwcNbB4TVYY5%2FJ%2FmlfHiAyUBs%2BK4vbr7ha5JlgPP7TlXYsEBzvH0EtN3ttowxnwOxrjg%2Fcdg6KKGNAmlu27K7CH%2Fm4JcxIwt6%2BtwwY6pgGb4GQV3dYmUMq2eH1MyaVvWMsWHIjtaD03IXf9qWrmKmsW1RKPWK%2BBoiRQUFTnuRLYO%2FD3rCebkxl5z3dzfxkyDUwFa0Sg5B9fZ0REwHXCzR7SFDyDtG9awEgOPUgYDHGZYFuZiF6QD%2B8xpTUGidKqL1L51GYVDkP1ogY%2BVzeEM11qqett5Xb2V6eAaPD8ypZ5Jq15c9XiwMr3x8sKI4bVWAHHTeRj&X-Amz-Signature=f4a010903f3d698012f4f061b1c0a9f8917fccbaacd19dbf25e1f94fcd8b9f4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466354K2IZN%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T081433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIB3Rk%2F2KUiXKNENTFTowGlsB5FIcrLfJ1qYB%2BAXEDxzeAiBk8P%2FyU7cFdVe7iGj5UVcUnTm85tAIEHYrkp7NZlftPir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM3Wo%2FJzx8BBXeLk8pKtwDIiLLlrMOyEy1SJ8i%2BlGxkiX3B%2FnWpy%2FM%2Fhy%2BM5K5pbyjIEtRHSK49vwFX5%2FlZHaRGPN1N1q0HLL8x75e0G%2BPmbpl9WptgELoe1fOhgEGUegNZOBUudRzKrFGoUlwW1d2ZSuNOJRrMJLPLZ8%2Fa0KZKC0Irx6DtXCOqmrBwwHU3E3kmR8OsX7ll6aCy9Ol2Vm29xw0GJr4pIDUEl74kLedK3xRIKo4TAFNYGwvKGFGdifwaJWDy15pNl0JRDYP5a4iQ0bghZGZiOp9pqJz8IpWSvreOR%2BHXDiHgkT%2FrGSAxbs5NV3yiWDV1XMBYBLT%2Fb7iX4Kd8Mxte855ISiliLtLjdIlVH2wZKoKJXzID3aanfjqegU7FzQDm%2F1tjS80wlFkIJydGqc8TmbchFwP0X1nRKzYID05HzrjKObxtcglY9YFeXrmqsfOUOkKlMA%2BpDr96hVlWXofnjMc3zkqmEXdLsivfN6Kq%2BE4ZGOHEv5r1j5HuAZ99Uiloaid%2FL79jMBhZbKFTmB1%2BdBUU%2FCdeRtKRQIyfjxu0FwcNbB4TVYY5%2FJ%2FmlfHiAyUBs%2BK4vbr7ha5JlgPP7TlXYsEBzvH0EtN3ttowxnwOxrjg%2Fcdg6KKGNAmlu27K7CH%2Fm4JcxIwt6%2BtwwY6pgGb4GQV3dYmUMq2eH1MyaVvWMsWHIjtaD03IXf9qWrmKmsW1RKPWK%2BBoiRQUFTnuRLYO%2FD3rCebkxl5z3dzfxkyDUwFa0Sg5B9fZ0REwHXCzR7SFDyDtG9awEgOPUgYDHGZYFuZiF6QD%2B8xpTUGidKqL1L51GYVDkP1ogY%2BVzeEM11qqett5Xb2V6eAaPD8ypZ5Jq15c9XiwMr3x8sKI4bVWAHHTeRj&X-Amz-Signature=10f4e7c1bf6b437128753700b60a85aee5aa29285aaeb8c32ddeb4aba6e92d51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466354K2IZN%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T081433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIB3Rk%2F2KUiXKNENTFTowGlsB5FIcrLfJ1qYB%2BAXEDxzeAiBk8P%2FyU7cFdVe7iGj5UVcUnTm85tAIEHYrkp7NZlftPir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM3Wo%2FJzx8BBXeLk8pKtwDIiLLlrMOyEy1SJ8i%2BlGxkiX3B%2FnWpy%2FM%2Fhy%2BM5K5pbyjIEtRHSK49vwFX5%2FlZHaRGPN1N1q0HLL8x75e0G%2BPmbpl9WptgELoe1fOhgEGUegNZOBUudRzKrFGoUlwW1d2ZSuNOJRrMJLPLZ8%2Fa0KZKC0Irx6DtXCOqmrBwwHU3E3kmR8OsX7ll6aCy9Ol2Vm29xw0GJr4pIDUEl74kLedK3xRIKo4TAFNYGwvKGFGdifwaJWDy15pNl0JRDYP5a4iQ0bghZGZiOp9pqJz8IpWSvreOR%2BHXDiHgkT%2FrGSAxbs5NV3yiWDV1XMBYBLT%2Fb7iX4Kd8Mxte855ISiliLtLjdIlVH2wZKoKJXzID3aanfjqegU7FzQDm%2F1tjS80wlFkIJydGqc8TmbchFwP0X1nRKzYID05HzrjKObxtcglY9YFeXrmqsfOUOkKlMA%2BpDr96hVlWXofnjMc3zkqmEXdLsivfN6Kq%2BE4ZGOHEv5r1j5HuAZ99Uiloaid%2FL79jMBhZbKFTmB1%2BdBUU%2FCdeRtKRQIyfjxu0FwcNbB4TVYY5%2FJ%2FmlfHiAyUBs%2BK4vbr7ha5JlgPP7TlXYsEBzvH0EtN3ttowxnwOxrjg%2Fcdg6KKGNAmlu27K7CH%2Fm4JcxIwt6%2BtwwY6pgGb4GQV3dYmUMq2eH1MyaVvWMsWHIjtaD03IXf9qWrmKmsW1RKPWK%2BBoiRQUFTnuRLYO%2FD3rCebkxl5z3dzfxkyDUwFa0Sg5B9fZ0REwHXCzR7SFDyDtG9awEgOPUgYDHGZYFuZiF6QD%2B8xpTUGidKqL1L51GYVDkP1ogY%2BVzeEM11qqett5Xb2V6eAaPD8ypZ5Jq15c9XiwMr3x8sKI4bVWAHHTeRj&X-Amz-Signature=e366df48a349210edccaddbb294c4a0207580dacdea70935a8b02c5ad71b8c0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466354K2IZN%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T081433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIB3Rk%2F2KUiXKNENTFTowGlsB5FIcrLfJ1qYB%2BAXEDxzeAiBk8P%2FyU7cFdVe7iGj5UVcUnTm85tAIEHYrkp7NZlftPir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM3Wo%2FJzx8BBXeLk8pKtwDIiLLlrMOyEy1SJ8i%2BlGxkiX3B%2FnWpy%2FM%2Fhy%2BM5K5pbyjIEtRHSK49vwFX5%2FlZHaRGPN1N1q0HLL8x75e0G%2BPmbpl9WptgELoe1fOhgEGUegNZOBUudRzKrFGoUlwW1d2ZSuNOJRrMJLPLZ8%2Fa0KZKC0Irx6DtXCOqmrBwwHU3E3kmR8OsX7ll6aCy9Ol2Vm29xw0GJr4pIDUEl74kLedK3xRIKo4TAFNYGwvKGFGdifwaJWDy15pNl0JRDYP5a4iQ0bghZGZiOp9pqJz8IpWSvreOR%2BHXDiHgkT%2FrGSAxbs5NV3yiWDV1XMBYBLT%2Fb7iX4Kd8Mxte855ISiliLtLjdIlVH2wZKoKJXzID3aanfjqegU7FzQDm%2F1tjS80wlFkIJydGqc8TmbchFwP0X1nRKzYID05HzrjKObxtcglY9YFeXrmqsfOUOkKlMA%2BpDr96hVlWXofnjMc3zkqmEXdLsivfN6Kq%2BE4ZGOHEv5r1j5HuAZ99Uiloaid%2FL79jMBhZbKFTmB1%2BdBUU%2FCdeRtKRQIyfjxu0FwcNbB4TVYY5%2FJ%2FmlfHiAyUBs%2BK4vbr7ha5JlgPP7TlXYsEBzvH0EtN3ttowxnwOxrjg%2Fcdg6KKGNAmlu27K7CH%2Fm4JcxIwt6%2BtwwY6pgGb4GQV3dYmUMq2eH1MyaVvWMsWHIjtaD03IXf9qWrmKmsW1RKPWK%2BBoiRQUFTnuRLYO%2FD3rCebkxl5z3dzfxkyDUwFa0Sg5B9fZ0REwHXCzR7SFDyDtG9awEgOPUgYDHGZYFuZiF6QD%2B8xpTUGidKqL1L51GYVDkP1ogY%2BVzeEM11qqett5Xb2V6eAaPD8ypZ5Jq15c9XiwMr3x8sKI4bVWAHHTeRj&X-Amz-Signature=f39a1487346bb8f578468c9d3e6f326ac82c058ce71352a0b131208977ce9680&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466354K2IZN%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T081433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIB3Rk%2F2KUiXKNENTFTowGlsB5FIcrLfJ1qYB%2BAXEDxzeAiBk8P%2FyU7cFdVe7iGj5UVcUnTm85tAIEHYrkp7NZlftPir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM3Wo%2FJzx8BBXeLk8pKtwDIiLLlrMOyEy1SJ8i%2BlGxkiX3B%2FnWpy%2FM%2Fhy%2BM5K5pbyjIEtRHSK49vwFX5%2FlZHaRGPN1N1q0HLL8x75e0G%2BPmbpl9WptgELoe1fOhgEGUegNZOBUudRzKrFGoUlwW1d2ZSuNOJRrMJLPLZ8%2Fa0KZKC0Irx6DtXCOqmrBwwHU3E3kmR8OsX7ll6aCy9Ol2Vm29xw0GJr4pIDUEl74kLedK3xRIKo4TAFNYGwvKGFGdifwaJWDy15pNl0JRDYP5a4iQ0bghZGZiOp9pqJz8IpWSvreOR%2BHXDiHgkT%2FrGSAxbs5NV3yiWDV1XMBYBLT%2Fb7iX4Kd8Mxte855ISiliLtLjdIlVH2wZKoKJXzID3aanfjqegU7FzQDm%2F1tjS80wlFkIJydGqc8TmbchFwP0X1nRKzYID05HzrjKObxtcglY9YFeXrmqsfOUOkKlMA%2BpDr96hVlWXofnjMc3zkqmEXdLsivfN6Kq%2BE4ZGOHEv5r1j5HuAZ99Uiloaid%2FL79jMBhZbKFTmB1%2BdBUU%2FCdeRtKRQIyfjxu0FwcNbB4TVYY5%2FJ%2FmlfHiAyUBs%2BK4vbr7ha5JlgPP7TlXYsEBzvH0EtN3ttowxnwOxrjg%2Fcdg6KKGNAmlu27K7CH%2Fm4JcxIwt6%2BtwwY6pgGb4GQV3dYmUMq2eH1MyaVvWMsWHIjtaD03IXf9qWrmKmsW1RKPWK%2BBoiRQUFTnuRLYO%2FD3rCebkxl5z3dzfxkyDUwFa0Sg5B9fZ0REwHXCzR7SFDyDtG9awEgOPUgYDHGZYFuZiF6QD%2B8xpTUGidKqL1L51GYVDkP1ogY%2BVzeEM11qqett5Xb2V6eAaPD8ypZ5Jq15c9XiwMr3x8sKI4bVWAHHTeRj&X-Amz-Signature=b6d676491446515c10ebeaf7bcb4063dc2ef554b82f3149740516ab20a264e33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466354K2IZN%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T081433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIB3Rk%2F2KUiXKNENTFTowGlsB5FIcrLfJ1qYB%2BAXEDxzeAiBk8P%2FyU7cFdVe7iGj5UVcUnTm85tAIEHYrkp7NZlftPir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIM3Wo%2FJzx8BBXeLk8pKtwDIiLLlrMOyEy1SJ8i%2BlGxkiX3B%2FnWpy%2FM%2Fhy%2BM5K5pbyjIEtRHSK49vwFX5%2FlZHaRGPN1N1q0HLL8x75e0G%2BPmbpl9WptgELoe1fOhgEGUegNZOBUudRzKrFGoUlwW1d2ZSuNOJRrMJLPLZ8%2Fa0KZKC0Irx6DtXCOqmrBwwHU3E3kmR8OsX7ll6aCy9Ol2Vm29xw0GJr4pIDUEl74kLedK3xRIKo4TAFNYGwvKGFGdifwaJWDy15pNl0JRDYP5a4iQ0bghZGZiOp9pqJz8IpWSvreOR%2BHXDiHgkT%2FrGSAxbs5NV3yiWDV1XMBYBLT%2Fb7iX4Kd8Mxte855ISiliLtLjdIlVH2wZKoKJXzID3aanfjqegU7FzQDm%2F1tjS80wlFkIJydGqc8TmbchFwP0X1nRKzYID05HzrjKObxtcglY9YFeXrmqsfOUOkKlMA%2BpDr96hVlWXofnjMc3zkqmEXdLsivfN6Kq%2BE4ZGOHEv5r1j5HuAZ99Uiloaid%2FL79jMBhZbKFTmB1%2BdBUU%2FCdeRtKRQIyfjxu0FwcNbB4TVYY5%2FJ%2FmlfHiAyUBs%2BK4vbr7ha5JlgPP7TlXYsEBzvH0EtN3ttowxnwOxrjg%2Fcdg6KKGNAmlu27K7CH%2Fm4JcxIwt6%2BtwwY6pgGb4GQV3dYmUMq2eH1MyaVvWMsWHIjtaD03IXf9qWrmKmsW1RKPWK%2BBoiRQUFTnuRLYO%2FD3rCebkxl5z3dzfxkyDUwFa0Sg5B9fZ0REwHXCzR7SFDyDtG9awEgOPUgYDHGZYFuZiF6QD%2B8xpTUGidKqL1L51GYVDkP1ogY%2BVzeEM11qqett5Xb2V6eAaPD8ypZ5Jq15c9XiwMr3x8sKI4bVWAHHTeRj&X-Amz-Signature=1bd17d6aee689678d9157a0e7a876eb950de9396597b79c74a5cb6d15d1fc454&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
