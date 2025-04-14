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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG7Q6PTI%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T070936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsgZh7CKVObdkU7CQyIQKUTQjW9PIcpoZXp0TjO8UcGgIgOcMgTEIdF7nde3zFevEwtDYVTxQZjKABWQc9y0vwGfkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDCaGKqGdJKFQHXulCSrcA1J9Ih2s9lt5%2FO%2FzlW5RRLNt0mnzOw6WfJrLRHYLrQfYMV%2B1bx5kSUsoCU2shCmSlgQpQeL9Cq4s1h42KxA%2Fkg63775w4Vi2TjyHxX%2FfbQnRGfDl15NWuDTdKJDhM1H2JPt0gLHA%2BVWkjHc2ApjVrI0%2Fawz2%2BWCzyHqLFvftSi%2Fcib9KJJ3hGYnvZ%2Fp9DRMnqulpZ2fgiz3P0vBdixhTjW0vOgOPOx%2FT0r9LaehP7%2B381nu5p32YEau%2FozNyIOhGhXud9%2BhzqJAjcaB2mYJLrHu8A%2BHAyIxOOV0SHhPb2CAVzRQT57Z12SHrLZFRSvHBAJugV9FqHxkHEGXTMlEs88LYz%2FHyNgWUpRvjbblBBw%2FsoKpQo72FKHNM3prhIRRbvbvb%2BqO1SRWFNKi45q%2B%2BZhkyxCHaJLfDmoFFgiTUx2FEX8C%2BWNOuWYVfWcP%2Bx8QdFfSMexXwfyKukZgdLobIuU52yMW8M2VZKyNNOCcTB7wAb%2FeEH%2BRIC6W25%2F1jr7b7lANvoLatSdm8%2BL9ubEfSv9J%2Ful40tWZhTk6JZmJyHF1C3FWXCANh8j5niidR0%2Fw5vx%2BdbuPiun8ulQPmDiRtNZj5SMdtRR9Y7O%2BJbZEtSbiGjjfe4lcVO3LLteMbMMLj8r8GOqUBc7vpbLscE%2BNEfVoh%2F20GlAIRkO3eQV6JVvUbBX0bTmK42TTALubbeeoVE9Xo2qAjp0HnLIZEkERbZygyg4DbO08R47qq2tQMKsyINNkuRTzrvlfb%2BlahnKuQHAGt6A1ks3TjiRT3OpxFxZIjjUXBDyJpaJlvBmKDSys4qlAJpIiXOygsKDGQB7cINqyFWxc77v3pzxaNGFKGFCm7Spbtue%2B6WGFz&X-Amz-Signature=e2f62e4e1854140a2919853a6852a993a24c8a0849ddd67b94bce19618068345&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG7Q6PTI%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T070936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsgZh7CKVObdkU7CQyIQKUTQjW9PIcpoZXp0TjO8UcGgIgOcMgTEIdF7nde3zFevEwtDYVTxQZjKABWQc9y0vwGfkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDCaGKqGdJKFQHXulCSrcA1J9Ih2s9lt5%2FO%2FzlW5RRLNt0mnzOw6WfJrLRHYLrQfYMV%2B1bx5kSUsoCU2shCmSlgQpQeL9Cq4s1h42KxA%2Fkg63775w4Vi2TjyHxX%2FfbQnRGfDl15NWuDTdKJDhM1H2JPt0gLHA%2BVWkjHc2ApjVrI0%2Fawz2%2BWCzyHqLFvftSi%2Fcib9KJJ3hGYnvZ%2Fp9DRMnqulpZ2fgiz3P0vBdixhTjW0vOgOPOx%2FT0r9LaehP7%2B381nu5p32YEau%2FozNyIOhGhXud9%2BhzqJAjcaB2mYJLrHu8A%2BHAyIxOOV0SHhPb2CAVzRQT57Z12SHrLZFRSvHBAJugV9FqHxkHEGXTMlEs88LYz%2FHyNgWUpRvjbblBBw%2FsoKpQo72FKHNM3prhIRRbvbvb%2BqO1SRWFNKi45q%2B%2BZhkyxCHaJLfDmoFFgiTUx2FEX8C%2BWNOuWYVfWcP%2Bx8QdFfSMexXwfyKukZgdLobIuU52yMW8M2VZKyNNOCcTB7wAb%2FeEH%2BRIC6W25%2F1jr7b7lANvoLatSdm8%2BL9ubEfSv9J%2Ful40tWZhTk6JZmJyHF1C3FWXCANh8j5niidR0%2Fw5vx%2BdbuPiun8ulQPmDiRtNZj5SMdtRR9Y7O%2BJbZEtSbiGjjfe4lcVO3LLteMbMMLj8r8GOqUBc7vpbLscE%2BNEfVoh%2F20GlAIRkO3eQV6JVvUbBX0bTmK42TTALubbeeoVE9Xo2qAjp0HnLIZEkERbZygyg4DbO08R47qq2tQMKsyINNkuRTzrvlfb%2BlahnKuQHAGt6A1ks3TjiRT3OpxFxZIjjUXBDyJpaJlvBmKDSys4qlAJpIiXOygsKDGQB7cINqyFWxc77v3pzxaNGFKGFCm7Spbtue%2B6WGFz&X-Amz-Signature=9307225d118a39f5440699426c0a7febe98e63e4c13057294874042ee57c308c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG7Q6PTI%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T070936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsgZh7CKVObdkU7CQyIQKUTQjW9PIcpoZXp0TjO8UcGgIgOcMgTEIdF7nde3zFevEwtDYVTxQZjKABWQc9y0vwGfkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDCaGKqGdJKFQHXulCSrcA1J9Ih2s9lt5%2FO%2FzlW5RRLNt0mnzOw6WfJrLRHYLrQfYMV%2B1bx5kSUsoCU2shCmSlgQpQeL9Cq4s1h42KxA%2Fkg63775w4Vi2TjyHxX%2FfbQnRGfDl15NWuDTdKJDhM1H2JPt0gLHA%2BVWkjHc2ApjVrI0%2Fawz2%2BWCzyHqLFvftSi%2Fcib9KJJ3hGYnvZ%2Fp9DRMnqulpZ2fgiz3P0vBdixhTjW0vOgOPOx%2FT0r9LaehP7%2B381nu5p32YEau%2FozNyIOhGhXud9%2BhzqJAjcaB2mYJLrHu8A%2BHAyIxOOV0SHhPb2CAVzRQT57Z12SHrLZFRSvHBAJugV9FqHxkHEGXTMlEs88LYz%2FHyNgWUpRvjbblBBw%2FsoKpQo72FKHNM3prhIRRbvbvb%2BqO1SRWFNKi45q%2B%2BZhkyxCHaJLfDmoFFgiTUx2FEX8C%2BWNOuWYVfWcP%2Bx8QdFfSMexXwfyKukZgdLobIuU52yMW8M2VZKyNNOCcTB7wAb%2FeEH%2BRIC6W25%2F1jr7b7lANvoLatSdm8%2BL9ubEfSv9J%2Ful40tWZhTk6JZmJyHF1C3FWXCANh8j5niidR0%2Fw5vx%2BdbuPiun8ulQPmDiRtNZj5SMdtRR9Y7O%2BJbZEtSbiGjjfe4lcVO3LLteMbMMLj8r8GOqUBc7vpbLscE%2BNEfVoh%2F20GlAIRkO3eQV6JVvUbBX0bTmK42TTALubbeeoVE9Xo2qAjp0HnLIZEkERbZygyg4DbO08R47qq2tQMKsyINNkuRTzrvlfb%2BlahnKuQHAGt6A1ks3TjiRT3OpxFxZIjjUXBDyJpaJlvBmKDSys4qlAJpIiXOygsKDGQB7cINqyFWxc77v3pzxaNGFKGFCm7Spbtue%2B6WGFz&X-Amz-Signature=4fb8d9858759a194f720f77473473f93666c2c92ea074c3f88c353527a686059&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG7Q6PTI%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T070936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsgZh7CKVObdkU7CQyIQKUTQjW9PIcpoZXp0TjO8UcGgIgOcMgTEIdF7nde3zFevEwtDYVTxQZjKABWQc9y0vwGfkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDCaGKqGdJKFQHXulCSrcA1J9Ih2s9lt5%2FO%2FzlW5RRLNt0mnzOw6WfJrLRHYLrQfYMV%2B1bx5kSUsoCU2shCmSlgQpQeL9Cq4s1h42KxA%2Fkg63775w4Vi2TjyHxX%2FfbQnRGfDl15NWuDTdKJDhM1H2JPt0gLHA%2BVWkjHc2ApjVrI0%2Fawz2%2BWCzyHqLFvftSi%2Fcib9KJJ3hGYnvZ%2Fp9DRMnqulpZ2fgiz3P0vBdixhTjW0vOgOPOx%2FT0r9LaehP7%2B381nu5p32YEau%2FozNyIOhGhXud9%2BhzqJAjcaB2mYJLrHu8A%2BHAyIxOOV0SHhPb2CAVzRQT57Z12SHrLZFRSvHBAJugV9FqHxkHEGXTMlEs88LYz%2FHyNgWUpRvjbblBBw%2FsoKpQo72FKHNM3prhIRRbvbvb%2BqO1SRWFNKi45q%2B%2BZhkyxCHaJLfDmoFFgiTUx2FEX8C%2BWNOuWYVfWcP%2Bx8QdFfSMexXwfyKukZgdLobIuU52yMW8M2VZKyNNOCcTB7wAb%2FeEH%2BRIC6W25%2F1jr7b7lANvoLatSdm8%2BL9ubEfSv9J%2Ful40tWZhTk6JZmJyHF1C3FWXCANh8j5niidR0%2Fw5vx%2BdbuPiun8ulQPmDiRtNZj5SMdtRR9Y7O%2BJbZEtSbiGjjfe4lcVO3LLteMbMMLj8r8GOqUBc7vpbLscE%2BNEfVoh%2F20GlAIRkO3eQV6JVvUbBX0bTmK42TTALubbeeoVE9Xo2qAjp0HnLIZEkERbZygyg4DbO08R47qq2tQMKsyINNkuRTzrvlfb%2BlahnKuQHAGt6A1ks3TjiRT3OpxFxZIjjUXBDyJpaJlvBmKDSys4qlAJpIiXOygsKDGQB7cINqyFWxc77v3pzxaNGFKGFCm7Spbtue%2B6WGFz&X-Amz-Signature=b7b112ce5aeda1bd747405a0baf133c92875dab02f719cbc119e579248a32593&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG7Q6PTI%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T070936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsgZh7CKVObdkU7CQyIQKUTQjW9PIcpoZXp0TjO8UcGgIgOcMgTEIdF7nde3zFevEwtDYVTxQZjKABWQc9y0vwGfkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDCaGKqGdJKFQHXulCSrcA1J9Ih2s9lt5%2FO%2FzlW5RRLNt0mnzOw6WfJrLRHYLrQfYMV%2B1bx5kSUsoCU2shCmSlgQpQeL9Cq4s1h42KxA%2Fkg63775w4Vi2TjyHxX%2FfbQnRGfDl15NWuDTdKJDhM1H2JPt0gLHA%2BVWkjHc2ApjVrI0%2Fawz2%2BWCzyHqLFvftSi%2Fcib9KJJ3hGYnvZ%2Fp9DRMnqulpZ2fgiz3P0vBdixhTjW0vOgOPOx%2FT0r9LaehP7%2B381nu5p32YEau%2FozNyIOhGhXud9%2BhzqJAjcaB2mYJLrHu8A%2BHAyIxOOV0SHhPb2CAVzRQT57Z12SHrLZFRSvHBAJugV9FqHxkHEGXTMlEs88LYz%2FHyNgWUpRvjbblBBw%2FsoKpQo72FKHNM3prhIRRbvbvb%2BqO1SRWFNKi45q%2B%2BZhkyxCHaJLfDmoFFgiTUx2FEX8C%2BWNOuWYVfWcP%2Bx8QdFfSMexXwfyKukZgdLobIuU52yMW8M2VZKyNNOCcTB7wAb%2FeEH%2BRIC6W25%2F1jr7b7lANvoLatSdm8%2BL9ubEfSv9J%2Ful40tWZhTk6JZmJyHF1C3FWXCANh8j5niidR0%2Fw5vx%2BdbuPiun8ulQPmDiRtNZj5SMdtRR9Y7O%2BJbZEtSbiGjjfe4lcVO3LLteMbMMLj8r8GOqUBc7vpbLscE%2BNEfVoh%2F20GlAIRkO3eQV6JVvUbBX0bTmK42TTALubbeeoVE9Xo2qAjp0HnLIZEkERbZygyg4DbO08R47qq2tQMKsyINNkuRTzrvlfb%2BlahnKuQHAGt6A1ks3TjiRT3OpxFxZIjjUXBDyJpaJlvBmKDSys4qlAJpIiXOygsKDGQB7cINqyFWxc77v3pzxaNGFKGFCm7Spbtue%2B6WGFz&X-Amz-Signature=d22bbcf2dd158dbc7f4089ab87bbe0e367f5a9eaf90886ddbb8643e7a6130e60&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG7Q6PTI%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T070936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsgZh7CKVObdkU7CQyIQKUTQjW9PIcpoZXp0TjO8UcGgIgOcMgTEIdF7nde3zFevEwtDYVTxQZjKABWQc9y0vwGfkq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDCaGKqGdJKFQHXulCSrcA1J9Ih2s9lt5%2FO%2FzlW5RRLNt0mnzOw6WfJrLRHYLrQfYMV%2B1bx5kSUsoCU2shCmSlgQpQeL9Cq4s1h42KxA%2Fkg63775w4Vi2TjyHxX%2FfbQnRGfDl15NWuDTdKJDhM1H2JPt0gLHA%2BVWkjHc2ApjVrI0%2Fawz2%2BWCzyHqLFvftSi%2Fcib9KJJ3hGYnvZ%2Fp9DRMnqulpZ2fgiz3P0vBdixhTjW0vOgOPOx%2FT0r9LaehP7%2B381nu5p32YEau%2FozNyIOhGhXud9%2BhzqJAjcaB2mYJLrHu8A%2BHAyIxOOV0SHhPb2CAVzRQT57Z12SHrLZFRSvHBAJugV9FqHxkHEGXTMlEs88LYz%2FHyNgWUpRvjbblBBw%2FsoKpQo72FKHNM3prhIRRbvbvb%2BqO1SRWFNKi45q%2B%2BZhkyxCHaJLfDmoFFgiTUx2FEX8C%2BWNOuWYVfWcP%2Bx8QdFfSMexXwfyKukZgdLobIuU52yMW8M2VZKyNNOCcTB7wAb%2FeEH%2BRIC6W25%2F1jr7b7lANvoLatSdm8%2BL9ubEfSv9J%2Ful40tWZhTk6JZmJyHF1C3FWXCANh8j5niidR0%2Fw5vx%2BdbuPiun8ulQPmDiRtNZj5SMdtRR9Y7O%2BJbZEtSbiGjjfe4lcVO3LLteMbMMLj8r8GOqUBc7vpbLscE%2BNEfVoh%2F20GlAIRkO3eQV6JVvUbBX0bTmK42TTALubbeeoVE9Xo2qAjp0HnLIZEkERbZygyg4DbO08R47qq2tQMKsyINNkuRTzrvlfb%2BlahnKuQHAGt6A1ks3TjiRT3OpxFxZIjjUXBDyJpaJlvBmKDSys4qlAJpIiXOygsKDGQB7cINqyFWxc77v3pzxaNGFKGFCm7Spbtue%2B6WGFz&X-Amz-Signature=be09b32e236e3db4e96e3cb45b32af26dfccedd80609d9ceb0078ea43e1f146d&X-Amz-SignedHeaders=host&x-id=GetObject)
