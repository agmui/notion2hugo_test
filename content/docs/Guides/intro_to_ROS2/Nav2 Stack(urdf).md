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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXRKQBX7%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T003559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQC%2Fd7Q9RGZLf8i%2BW2Jlhyd0auYmUTWLwmo5uZYdv3SzPAIhANw8UsAWxZdhqG28qtiOZFWNlQ%2BLTbvrKZhTWzrMfIi7KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzI8T4uOtsZKKm3dcMq3ANPhK1mqi6mFHSxOSqlVnhs3spmth9dkSfWPqZrrWtSXPturnRBnjwcDIS%2B8X7d0ZNdA5xeKS1bDhnjuscjKTFSlimPH0aSMJdWqoNguPHhY8n5NTK2ty65Kzc%2FkOfuOSHpfS3CqqANpfmIZPMwXH2tQOLM1A82G8gkGWb7rAlNaxtbritIizBvMa3E2akFEPXzA%2FeOXTmwyXGpRiOVVf0Q%2Fe3OwQG6Co0G1TFfO%2BsPkqrjp%2Bt657VFoqjHzXRW0GHNzcEC1uj5Di4ykCxYJyBwK6c5Xq2lnuTCB0LL28ECGJO2op0u8o%2BGmi2ilVj0iJVFC8U6RCSv8ZFL%2BGwSuGfOEsAJUiRUjTwOi5SxmCG6pOmTT2dLFjjXMxvlmrkT8lljLo04xh248mNLtq0ypelGjXtV5XCAOaXTOAwB6u9W3KYwV6C7eI8IBifTlx%2FZMhaZBGbrlIflE2N2GbJga1aHhSPYG6v2dIdfTGbeKe40eD2vFbuMRPfTPGB4PgMBe%2BF0bQtHwMWbwlOxTzfIm0UQiRDjlAy17LzL%2BTPabrBIXLwNaDLVIVffM3ytgzCstqxqe5Tx9IdgFY0QnGVKdpo1jqnTDzUPQ7fAwnj30Tmmcuu%2FZ17jykcPD%2Fs4ITDwpc%2B9BjqkAYKkAlIKO4h7vYch43u3bz4g4zRTZBGE9mKPYkdP37muGsUu%2Fd7F0uk%2Bq3kEbHDv1dpCQI87f0pg1lDBpVv%2F19obXaz7QlArN2VRNBHIjSe7Q2yIgF8ibMktD9uoXx0ME1NAGLkvQvUq0G11zN7vf1UXbSHWWIVdpCz3rgkcRaJrfzPK4K0aKIQgBqFZFDDOxCHU6pBRHIU63Mfwz6pJKhQStO%2BG&X-Amz-Signature=6a115e73cdc50606fa3d790224de91a5178f2b841c3f0810d49a334bc47e0c1d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXRKQBX7%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T003559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQC%2Fd7Q9RGZLf8i%2BW2Jlhyd0auYmUTWLwmo5uZYdv3SzPAIhANw8UsAWxZdhqG28qtiOZFWNlQ%2BLTbvrKZhTWzrMfIi7KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzI8T4uOtsZKKm3dcMq3ANPhK1mqi6mFHSxOSqlVnhs3spmth9dkSfWPqZrrWtSXPturnRBnjwcDIS%2B8X7d0ZNdA5xeKS1bDhnjuscjKTFSlimPH0aSMJdWqoNguPHhY8n5NTK2ty65Kzc%2FkOfuOSHpfS3CqqANpfmIZPMwXH2tQOLM1A82G8gkGWb7rAlNaxtbritIizBvMa3E2akFEPXzA%2FeOXTmwyXGpRiOVVf0Q%2Fe3OwQG6Co0G1TFfO%2BsPkqrjp%2Bt657VFoqjHzXRW0GHNzcEC1uj5Di4ykCxYJyBwK6c5Xq2lnuTCB0LL28ECGJO2op0u8o%2BGmi2ilVj0iJVFC8U6RCSv8ZFL%2BGwSuGfOEsAJUiRUjTwOi5SxmCG6pOmTT2dLFjjXMxvlmrkT8lljLo04xh248mNLtq0ypelGjXtV5XCAOaXTOAwB6u9W3KYwV6C7eI8IBifTlx%2FZMhaZBGbrlIflE2N2GbJga1aHhSPYG6v2dIdfTGbeKe40eD2vFbuMRPfTPGB4PgMBe%2BF0bQtHwMWbwlOxTzfIm0UQiRDjlAy17LzL%2BTPabrBIXLwNaDLVIVffM3ytgzCstqxqe5Tx9IdgFY0QnGVKdpo1jqnTDzUPQ7fAwnj30Tmmcuu%2FZ17jykcPD%2Fs4ITDwpc%2B9BjqkAYKkAlIKO4h7vYch43u3bz4g4zRTZBGE9mKPYkdP37muGsUu%2Fd7F0uk%2Bq3kEbHDv1dpCQI87f0pg1lDBpVv%2F19obXaz7QlArN2VRNBHIjSe7Q2yIgF8ibMktD9uoXx0ME1NAGLkvQvUq0G11zN7vf1UXbSHWWIVdpCz3rgkcRaJrfzPK4K0aKIQgBqFZFDDOxCHU6pBRHIU63Mfwz6pJKhQStO%2BG&X-Amz-Signature=70e635b9f2795bc7156b3ef58d180e049d5c3601fb554c1a8403bf708b83a1f5&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXRKQBX7%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T003559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQC%2Fd7Q9RGZLf8i%2BW2Jlhyd0auYmUTWLwmo5uZYdv3SzPAIhANw8UsAWxZdhqG28qtiOZFWNlQ%2BLTbvrKZhTWzrMfIi7KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzI8T4uOtsZKKm3dcMq3ANPhK1mqi6mFHSxOSqlVnhs3spmth9dkSfWPqZrrWtSXPturnRBnjwcDIS%2B8X7d0ZNdA5xeKS1bDhnjuscjKTFSlimPH0aSMJdWqoNguPHhY8n5NTK2ty65Kzc%2FkOfuOSHpfS3CqqANpfmIZPMwXH2tQOLM1A82G8gkGWb7rAlNaxtbritIizBvMa3E2akFEPXzA%2FeOXTmwyXGpRiOVVf0Q%2Fe3OwQG6Co0G1TFfO%2BsPkqrjp%2Bt657VFoqjHzXRW0GHNzcEC1uj5Di4ykCxYJyBwK6c5Xq2lnuTCB0LL28ECGJO2op0u8o%2BGmi2ilVj0iJVFC8U6RCSv8ZFL%2BGwSuGfOEsAJUiRUjTwOi5SxmCG6pOmTT2dLFjjXMxvlmrkT8lljLo04xh248mNLtq0ypelGjXtV5XCAOaXTOAwB6u9W3KYwV6C7eI8IBifTlx%2FZMhaZBGbrlIflE2N2GbJga1aHhSPYG6v2dIdfTGbeKe40eD2vFbuMRPfTPGB4PgMBe%2BF0bQtHwMWbwlOxTzfIm0UQiRDjlAy17LzL%2BTPabrBIXLwNaDLVIVffM3ytgzCstqxqe5Tx9IdgFY0QnGVKdpo1jqnTDzUPQ7fAwnj30Tmmcuu%2FZ17jykcPD%2Fs4ITDwpc%2B9BjqkAYKkAlIKO4h7vYch43u3bz4g4zRTZBGE9mKPYkdP37muGsUu%2Fd7F0uk%2Bq3kEbHDv1dpCQI87f0pg1lDBpVv%2F19obXaz7QlArN2VRNBHIjSe7Q2yIgF8ibMktD9uoXx0ME1NAGLkvQvUq0G11zN7vf1UXbSHWWIVdpCz3rgkcRaJrfzPK4K0aKIQgBqFZFDDOxCHU6pBRHIU63Mfwz6pJKhQStO%2BG&X-Amz-Signature=b42b4ec300ca50615d2446de8d1b946a8440d0481e34af35064d8880d3fdf57e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXRKQBX7%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T003559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQC%2Fd7Q9RGZLf8i%2BW2Jlhyd0auYmUTWLwmo5uZYdv3SzPAIhANw8UsAWxZdhqG28qtiOZFWNlQ%2BLTbvrKZhTWzrMfIi7KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzI8T4uOtsZKKm3dcMq3ANPhK1mqi6mFHSxOSqlVnhs3spmth9dkSfWPqZrrWtSXPturnRBnjwcDIS%2B8X7d0ZNdA5xeKS1bDhnjuscjKTFSlimPH0aSMJdWqoNguPHhY8n5NTK2ty65Kzc%2FkOfuOSHpfS3CqqANpfmIZPMwXH2tQOLM1A82G8gkGWb7rAlNaxtbritIizBvMa3E2akFEPXzA%2FeOXTmwyXGpRiOVVf0Q%2Fe3OwQG6Co0G1TFfO%2BsPkqrjp%2Bt657VFoqjHzXRW0GHNzcEC1uj5Di4ykCxYJyBwK6c5Xq2lnuTCB0LL28ECGJO2op0u8o%2BGmi2ilVj0iJVFC8U6RCSv8ZFL%2BGwSuGfOEsAJUiRUjTwOi5SxmCG6pOmTT2dLFjjXMxvlmrkT8lljLo04xh248mNLtq0ypelGjXtV5XCAOaXTOAwB6u9W3KYwV6C7eI8IBifTlx%2FZMhaZBGbrlIflE2N2GbJga1aHhSPYG6v2dIdfTGbeKe40eD2vFbuMRPfTPGB4PgMBe%2BF0bQtHwMWbwlOxTzfIm0UQiRDjlAy17LzL%2BTPabrBIXLwNaDLVIVffM3ytgzCstqxqe5Tx9IdgFY0QnGVKdpo1jqnTDzUPQ7fAwnj30Tmmcuu%2FZ17jykcPD%2Fs4ITDwpc%2B9BjqkAYKkAlIKO4h7vYch43u3bz4g4zRTZBGE9mKPYkdP37muGsUu%2Fd7F0uk%2Bq3kEbHDv1dpCQI87f0pg1lDBpVv%2F19obXaz7QlArN2VRNBHIjSe7Q2yIgF8ibMktD9uoXx0ME1NAGLkvQvUq0G11zN7vf1UXbSHWWIVdpCz3rgkcRaJrfzPK4K0aKIQgBqFZFDDOxCHU6pBRHIU63Mfwz6pJKhQStO%2BG&X-Amz-Signature=8d4804514b7cdb3ed686593106e0f441852d80e91da49fa3b47c04670cb9c444&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXRKQBX7%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T003559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQC%2Fd7Q9RGZLf8i%2BW2Jlhyd0auYmUTWLwmo5uZYdv3SzPAIhANw8UsAWxZdhqG28qtiOZFWNlQ%2BLTbvrKZhTWzrMfIi7KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzI8T4uOtsZKKm3dcMq3ANPhK1mqi6mFHSxOSqlVnhs3spmth9dkSfWPqZrrWtSXPturnRBnjwcDIS%2B8X7d0ZNdA5xeKS1bDhnjuscjKTFSlimPH0aSMJdWqoNguPHhY8n5NTK2ty65Kzc%2FkOfuOSHpfS3CqqANpfmIZPMwXH2tQOLM1A82G8gkGWb7rAlNaxtbritIizBvMa3E2akFEPXzA%2FeOXTmwyXGpRiOVVf0Q%2Fe3OwQG6Co0G1TFfO%2BsPkqrjp%2Bt657VFoqjHzXRW0GHNzcEC1uj5Di4ykCxYJyBwK6c5Xq2lnuTCB0LL28ECGJO2op0u8o%2BGmi2ilVj0iJVFC8U6RCSv8ZFL%2BGwSuGfOEsAJUiRUjTwOi5SxmCG6pOmTT2dLFjjXMxvlmrkT8lljLo04xh248mNLtq0ypelGjXtV5XCAOaXTOAwB6u9W3KYwV6C7eI8IBifTlx%2FZMhaZBGbrlIflE2N2GbJga1aHhSPYG6v2dIdfTGbeKe40eD2vFbuMRPfTPGB4PgMBe%2BF0bQtHwMWbwlOxTzfIm0UQiRDjlAy17LzL%2BTPabrBIXLwNaDLVIVffM3ytgzCstqxqe5Tx9IdgFY0QnGVKdpo1jqnTDzUPQ7fAwnj30Tmmcuu%2FZ17jykcPD%2Fs4ITDwpc%2B9BjqkAYKkAlIKO4h7vYch43u3bz4g4zRTZBGE9mKPYkdP37muGsUu%2Fd7F0uk%2Bq3kEbHDv1dpCQI87f0pg1lDBpVv%2F19obXaz7QlArN2VRNBHIjSe7Q2yIgF8ibMktD9uoXx0ME1NAGLkvQvUq0G11zN7vf1UXbSHWWIVdpCz3rgkcRaJrfzPK4K0aKIQgBqFZFDDOxCHU6pBRHIU63Mfwz6pJKhQStO%2BG&X-Amz-Signature=fcd11a1930617ae1787ffe964de63a2f29eb917ba1b8dc3f4ca5e4655e49b61f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXRKQBX7%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T003559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQC%2Fd7Q9RGZLf8i%2BW2Jlhyd0auYmUTWLwmo5uZYdv3SzPAIhANw8UsAWxZdhqG28qtiOZFWNlQ%2BLTbvrKZhTWzrMfIi7KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzI8T4uOtsZKKm3dcMq3ANPhK1mqi6mFHSxOSqlVnhs3spmth9dkSfWPqZrrWtSXPturnRBnjwcDIS%2B8X7d0ZNdA5xeKS1bDhnjuscjKTFSlimPH0aSMJdWqoNguPHhY8n5NTK2ty65Kzc%2FkOfuOSHpfS3CqqANpfmIZPMwXH2tQOLM1A82G8gkGWb7rAlNaxtbritIizBvMa3E2akFEPXzA%2FeOXTmwyXGpRiOVVf0Q%2Fe3OwQG6Co0G1TFfO%2BsPkqrjp%2Bt657VFoqjHzXRW0GHNzcEC1uj5Di4ykCxYJyBwK6c5Xq2lnuTCB0LL28ECGJO2op0u8o%2BGmi2ilVj0iJVFC8U6RCSv8ZFL%2BGwSuGfOEsAJUiRUjTwOi5SxmCG6pOmTT2dLFjjXMxvlmrkT8lljLo04xh248mNLtq0ypelGjXtV5XCAOaXTOAwB6u9W3KYwV6C7eI8IBifTlx%2FZMhaZBGbrlIflE2N2GbJga1aHhSPYG6v2dIdfTGbeKe40eD2vFbuMRPfTPGB4PgMBe%2BF0bQtHwMWbwlOxTzfIm0UQiRDjlAy17LzL%2BTPabrBIXLwNaDLVIVffM3ytgzCstqxqe5Tx9IdgFY0QnGVKdpo1jqnTDzUPQ7fAwnj30Tmmcuu%2FZ17jykcPD%2Fs4ITDwpc%2B9BjqkAYKkAlIKO4h7vYch43u3bz4g4zRTZBGE9mKPYkdP37muGsUu%2Fd7F0uk%2Bq3kEbHDv1dpCQI87f0pg1lDBpVv%2F19obXaz7QlArN2VRNBHIjSe7Q2yIgF8ibMktD9uoXx0ME1NAGLkvQvUq0G11zN7vf1UXbSHWWIVdpCz3rgkcRaJrfzPK4K0aKIQgBqFZFDDOxCHU6pBRHIU63Mfwz6pJKhQStO%2BG&X-Amz-Signature=9be92132d1cf28deb446ef26499aa5e351629782317eeb0b4c83d524421590db&X-Amz-SignedHeaders=host&x-id=GetObject)
