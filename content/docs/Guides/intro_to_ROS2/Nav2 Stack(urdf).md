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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTXBFWSO%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T100820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCysuGk6M0KRdx%2BFgHZswtuyuuDFJ%2Bgj4mW%2FIFpBxNPQAIgEHckaysy5TMLH14jAErqyrQIsWqFRi%2F9Xyi1%2BVdeEfUq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDNOENrQiJU%2BCh9e2jCrcA789xVCWlLa4ubulR7NHxNEyA8CCMsuTlTHRq9LNkCR5e6hM2Ak1lPzDpeAEevqMcnyLHWeA3eUJGUS4rWFHV2oUhoaZWAZZRtL4GzYAgGbsPPXVj3Q03DLPIpwYY3pFya8HycDfjA%2Fle289F3HnDXEix3HxUPXlpW2oqaYAptH9FGxSBi%2BbmobXSMtpg5HRYRdYYiJDQIlmU7YDWU3CudoT%2BlS5Lkcs9uyk8IurFRU3kLVAiy7lvpuJYGEQvoNgonTOD6eloRHlN62zspF1VWnL8GBacNfotr3Zo8nYU9LFiyo0gh%2F28jOgeuCIAXGvWgQSQfd1PqjJRc9j6aHIO7CKnrBJ60ntSq3AnbFeV2bKDs%2F8%2FOLbatNwP4ZLwvVDRIK7%2FZc7b8kqAC%2FsVQZ87SX4r2TNfV6LRYC7EdzMKBEMkCWBpl0BTYck8Jak4DM4p98m8iV2l9%2FuHoYraDNaKqqph9yp%2BJJdFy91%2B3o21beSxIam3ApTvg7ETr9%2FsS368J6O5qC7YqKIoa0K8NZYCk15ndd3aQBLmcyMIwoDtTiIaBDsw%2BGTe7y6vltsNp82SQLwc8t8M3erB0gV5iJYuNBvbc85Pc3J%2FfWCFkrv72VRYW0p%2FPYKNbkOHuKMMOD1gb0GOqUBXR%2FSlSLXLZWXkUqDyt7NMa%2FITqQe8z3rDUn8Zyxy%2BAHaFqjsY1%2B6Ed6NNpJLllSC14%2BFWfyRzNsRDi9EQ7GInwTZYs43G1xBh8zbaTohX5BNmsednWI0ZSPUM4pj%2BdYApakMTuvP3CdHTSUUrLqhj%2FyEkXLXW6WboC0xP8TwEGla%2BC3q0A4ndLOMG55zh3XMk81YOozJBvZOpj2my543Wy%2BYPdP1&X-Amz-Signature=5c7a6082a8b2e322625b4fa2db5b62de73941a56084874c8ea3319fa4482095a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTXBFWSO%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T100820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCysuGk6M0KRdx%2BFgHZswtuyuuDFJ%2Bgj4mW%2FIFpBxNPQAIgEHckaysy5TMLH14jAErqyrQIsWqFRi%2F9Xyi1%2BVdeEfUq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDNOENrQiJU%2BCh9e2jCrcA789xVCWlLa4ubulR7NHxNEyA8CCMsuTlTHRq9LNkCR5e6hM2Ak1lPzDpeAEevqMcnyLHWeA3eUJGUS4rWFHV2oUhoaZWAZZRtL4GzYAgGbsPPXVj3Q03DLPIpwYY3pFya8HycDfjA%2Fle289F3HnDXEix3HxUPXlpW2oqaYAptH9FGxSBi%2BbmobXSMtpg5HRYRdYYiJDQIlmU7YDWU3CudoT%2BlS5Lkcs9uyk8IurFRU3kLVAiy7lvpuJYGEQvoNgonTOD6eloRHlN62zspF1VWnL8GBacNfotr3Zo8nYU9LFiyo0gh%2F28jOgeuCIAXGvWgQSQfd1PqjJRc9j6aHIO7CKnrBJ60ntSq3AnbFeV2bKDs%2F8%2FOLbatNwP4ZLwvVDRIK7%2FZc7b8kqAC%2FsVQZ87SX4r2TNfV6LRYC7EdzMKBEMkCWBpl0BTYck8Jak4DM4p98m8iV2l9%2FuHoYraDNaKqqph9yp%2BJJdFy91%2B3o21beSxIam3ApTvg7ETr9%2FsS368J6O5qC7YqKIoa0K8NZYCk15ndd3aQBLmcyMIwoDtTiIaBDsw%2BGTe7y6vltsNp82SQLwc8t8M3erB0gV5iJYuNBvbc85Pc3J%2FfWCFkrv72VRYW0p%2FPYKNbkOHuKMMOD1gb0GOqUBXR%2FSlSLXLZWXkUqDyt7NMa%2FITqQe8z3rDUn8Zyxy%2BAHaFqjsY1%2B6Ed6NNpJLllSC14%2BFWfyRzNsRDi9EQ7GInwTZYs43G1xBh8zbaTohX5BNmsednWI0ZSPUM4pj%2BdYApakMTuvP3CdHTSUUrLqhj%2FyEkXLXW6WboC0xP8TwEGla%2BC3q0A4ndLOMG55zh3XMk81YOozJBvZOpj2my543Wy%2BYPdP1&X-Amz-Signature=e86ecdbfec40419e33745c12201034a997330acdd0e244ab736f4166bf2bc3f9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTXBFWSO%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T100820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCysuGk6M0KRdx%2BFgHZswtuyuuDFJ%2Bgj4mW%2FIFpBxNPQAIgEHckaysy5TMLH14jAErqyrQIsWqFRi%2F9Xyi1%2BVdeEfUq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDNOENrQiJU%2BCh9e2jCrcA789xVCWlLa4ubulR7NHxNEyA8CCMsuTlTHRq9LNkCR5e6hM2Ak1lPzDpeAEevqMcnyLHWeA3eUJGUS4rWFHV2oUhoaZWAZZRtL4GzYAgGbsPPXVj3Q03DLPIpwYY3pFya8HycDfjA%2Fle289F3HnDXEix3HxUPXlpW2oqaYAptH9FGxSBi%2BbmobXSMtpg5HRYRdYYiJDQIlmU7YDWU3CudoT%2BlS5Lkcs9uyk8IurFRU3kLVAiy7lvpuJYGEQvoNgonTOD6eloRHlN62zspF1VWnL8GBacNfotr3Zo8nYU9LFiyo0gh%2F28jOgeuCIAXGvWgQSQfd1PqjJRc9j6aHIO7CKnrBJ60ntSq3AnbFeV2bKDs%2F8%2FOLbatNwP4ZLwvVDRIK7%2FZc7b8kqAC%2FsVQZ87SX4r2TNfV6LRYC7EdzMKBEMkCWBpl0BTYck8Jak4DM4p98m8iV2l9%2FuHoYraDNaKqqph9yp%2BJJdFy91%2B3o21beSxIam3ApTvg7ETr9%2FsS368J6O5qC7YqKIoa0K8NZYCk15ndd3aQBLmcyMIwoDtTiIaBDsw%2BGTe7y6vltsNp82SQLwc8t8M3erB0gV5iJYuNBvbc85Pc3J%2FfWCFkrv72VRYW0p%2FPYKNbkOHuKMMOD1gb0GOqUBXR%2FSlSLXLZWXkUqDyt7NMa%2FITqQe8z3rDUn8Zyxy%2BAHaFqjsY1%2B6Ed6NNpJLllSC14%2BFWfyRzNsRDi9EQ7GInwTZYs43G1xBh8zbaTohX5BNmsednWI0ZSPUM4pj%2BdYApakMTuvP3CdHTSUUrLqhj%2FyEkXLXW6WboC0xP8TwEGla%2BC3q0A4ndLOMG55zh3XMk81YOozJBvZOpj2my543Wy%2BYPdP1&X-Amz-Signature=ca3447267264692e72944d01d85cde1891e3c0f691a3d5700e8e4b0cb6ca11fe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTXBFWSO%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCysuGk6M0KRdx%2BFgHZswtuyuuDFJ%2Bgj4mW%2FIFpBxNPQAIgEHckaysy5TMLH14jAErqyrQIsWqFRi%2F9Xyi1%2BVdeEfUq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDNOENrQiJU%2BCh9e2jCrcA789xVCWlLa4ubulR7NHxNEyA8CCMsuTlTHRq9LNkCR5e6hM2Ak1lPzDpeAEevqMcnyLHWeA3eUJGUS4rWFHV2oUhoaZWAZZRtL4GzYAgGbsPPXVj3Q03DLPIpwYY3pFya8HycDfjA%2Fle289F3HnDXEix3HxUPXlpW2oqaYAptH9FGxSBi%2BbmobXSMtpg5HRYRdYYiJDQIlmU7YDWU3CudoT%2BlS5Lkcs9uyk8IurFRU3kLVAiy7lvpuJYGEQvoNgonTOD6eloRHlN62zspF1VWnL8GBacNfotr3Zo8nYU9LFiyo0gh%2F28jOgeuCIAXGvWgQSQfd1PqjJRc9j6aHIO7CKnrBJ60ntSq3AnbFeV2bKDs%2F8%2FOLbatNwP4ZLwvVDRIK7%2FZc7b8kqAC%2FsVQZ87SX4r2TNfV6LRYC7EdzMKBEMkCWBpl0BTYck8Jak4DM4p98m8iV2l9%2FuHoYraDNaKqqph9yp%2BJJdFy91%2B3o21beSxIam3ApTvg7ETr9%2FsS368J6O5qC7YqKIoa0K8NZYCk15ndd3aQBLmcyMIwoDtTiIaBDsw%2BGTe7y6vltsNp82SQLwc8t8M3erB0gV5iJYuNBvbc85Pc3J%2FfWCFkrv72VRYW0p%2FPYKNbkOHuKMMOD1gb0GOqUBXR%2FSlSLXLZWXkUqDyt7NMa%2FITqQe8z3rDUn8Zyxy%2BAHaFqjsY1%2B6Ed6NNpJLllSC14%2BFWfyRzNsRDi9EQ7GInwTZYs43G1xBh8zbaTohX5BNmsednWI0ZSPUM4pj%2BdYApakMTuvP3CdHTSUUrLqhj%2FyEkXLXW6WboC0xP8TwEGla%2BC3q0A4ndLOMG55zh3XMk81YOozJBvZOpj2my543Wy%2BYPdP1&X-Amz-Signature=08357765c52f9a0d35ed6ab5e39a1da9876133135b117fbaf754bb1d08998baa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTXBFWSO%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T100821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCysuGk6M0KRdx%2BFgHZswtuyuuDFJ%2Bgj4mW%2FIFpBxNPQAIgEHckaysy5TMLH14jAErqyrQIsWqFRi%2F9Xyi1%2BVdeEfUq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDNOENrQiJU%2BCh9e2jCrcA789xVCWlLa4ubulR7NHxNEyA8CCMsuTlTHRq9LNkCR5e6hM2Ak1lPzDpeAEevqMcnyLHWeA3eUJGUS4rWFHV2oUhoaZWAZZRtL4GzYAgGbsPPXVj3Q03DLPIpwYY3pFya8HycDfjA%2Fle289F3HnDXEix3HxUPXlpW2oqaYAptH9FGxSBi%2BbmobXSMtpg5HRYRdYYiJDQIlmU7YDWU3CudoT%2BlS5Lkcs9uyk8IurFRU3kLVAiy7lvpuJYGEQvoNgonTOD6eloRHlN62zspF1VWnL8GBacNfotr3Zo8nYU9LFiyo0gh%2F28jOgeuCIAXGvWgQSQfd1PqjJRc9j6aHIO7CKnrBJ60ntSq3AnbFeV2bKDs%2F8%2FOLbatNwP4ZLwvVDRIK7%2FZc7b8kqAC%2FsVQZ87SX4r2TNfV6LRYC7EdzMKBEMkCWBpl0BTYck8Jak4DM4p98m8iV2l9%2FuHoYraDNaKqqph9yp%2BJJdFy91%2B3o21beSxIam3ApTvg7ETr9%2FsS368J6O5qC7YqKIoa0K8NZYCk15ndd3aQBLmcyMIwoDtTiIaBDsw%2BGTe7y6vltsNp82SQLwc8t8M3erB0gV5iJYuNBvbc85Pc3J%2FfWCFkrv72VRYW0p%2FPYKNbkOHuKMMOD1gb0GOqUBXR%2FSlSLXLZWXkUqDyt7NMa%2FITqQe8z3rDUn8Zyxy%2BAHaFqjsY1%2B6Ed6NNpJLllSC14%2BFWfyRzNsRDi9EQ7GInwTZYs43G1xBh8zbaTohX5BNmsednWI0ZSPUM4pj%2BdYApakMTuvP3CdHTSUUrLqhj%2FyEkXLXW6WboC0xP8TwEGla%2BC3q0A4ndLOMG55zh3XMk81YOozJBvZOpj2my543Wy%2BYPdP1&X-Amz-Signature=b2d25b4aa9f9cbccdb9902e122760f4c32baa1a8341833535eeef5ddd5db9910&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTXBFWSO%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T100820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCysuGk6M0KRdx%2BFgHZswtuyuuDFJ%2Bgj4mW%2FIFpBxNPQAIgEHckaysy5TMLH14jAErqyrQIsWqFRi%2F9Xyi1%2BVdeEfUq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDNOENrQiJU%2BCh9e2jCrcA789xVCWlLa4ubulR7NHxNEyA8CCMsuTlTHRq9LNkCR5e6hM2Ak1lPzDpeAEevqMcnyLHWeA3eUJGUS4rWFHV2oUhoaZWAZZRtL4GzYAgGbsPPXVj3Q03DLPIpwYY3pFya8HycDfjA%2Fle289F3HnDXEix3HxUPXlpW2oqaYAptH9FGxSBi%2BbmobXSMtpg5HRYRdYYiJDQIlmU7YDWU3CudoT%2BlS5Lkcs9uyk8IurFRU3kLVAiy7lvpuJYGEQvoNgonTOD6eloRHlN62zspF1VWnL8GBacNfotr3Zo8nYU9LFiyo0gh%2F28jOgeuCIAXGvWgQSQfd1PqjJRc9j6aHIO7CKnrBJ60ntSq3AnbFeV2bKDs%2F8%2FOLbatNwP4ZLwvVDRIK7%2FZc7b8kqAC%2FsVQZ87SX4r2TNfV6LRYC7EdzMKBEMkCWBpl0BTYck8Jak4DM4p98m8iV2l9%2FuHoYraDNaKqqph9yp%2BJJdFy91%2B3o21beSxIam3ApTvg7ETr9%2FsS368J6O5qC7YqKIoa0K8NZYCk15ndd3aQBLmcyMIwoDtTiIaBDsw%2BGTe7y6vltsNp82SQLwc8t8M3erB0gV5iJYuNBvbc85Pc3J%2FfWCFkrv72VRYW0p%2FPYKNbkOHuKMMOD1gb0GOqUBXR%2FSlSLXLZWXkUqDyt7NMa%2FITqQe8z3rDUn8Zyxy%2BAHaFqjsY1%2B6Ed6NNpJLllSC14%2BFWfyRzNsRDi9EQ7GInwTZYs43G1xBh8zbaTohX5BNmsednWI0ZSPUM4pj%2BdYApakMTuvP3CdHTSUUrLqhj%2FyEkXLXW6WboC0xP8TwEGla%2BC3q0A4ndLOMG55zh3XMk81YOozJBvZOpj2my543Wy%2BYPdP1&X-Amz-Signature=4dc3fd0adaf07108d24d0bb0edd469e6f42ea7109f37ed30e50091916d5945b9&X-Amz-SignedHeaders=host&x-id=GetObject)
