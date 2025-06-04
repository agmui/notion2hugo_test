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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEO65ECR%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T220124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDlAbUmsDMu7P0hMZURVoGkpn%2B7Ywm%2FNogwfSKnvL%2FAkAIhAJeJcbtxct3clYD5OIAS3Sfs24IbTyc2M3QllWJKy36GKv8DCDUQABoMNjM3NDIzMTgzODA1Igw0DCH5waGss8BUvlYq3AOpMUDFA%2BuBhOlCfICdUleF400O6%2ByQf0edvWlVvzlfOq9bNI5WvH%2Fhrf%2FBxiYS0GCHP0v79%2BaUWPc4IrOSS7oWtQsPMVY3F%2Bb%2Fd6Usra%2FDK4qkiXNkY0Vn5E%2Bz8J9%2FXzCEJkpVS%2BOd%2FX6McayUKCtslEp1OA5oJlpeskjlDIjCj%2Fisouw0PIJS%2FINuIPVzxFTr49oJy%2FFgaHe5LPTmnxbf5jLPqIk0c%2BFk556QAZEofqwSHBB%2F%2FmpMG2iu5FmeXtt2ibg58xE9c8YaTdR8FMdw2l50y52lYHwqDTAimM3mTjF9TFHJpRhtXiu2IqmJLDtFt%2FLyAQWv10KlDECh8%2FN6A8%2BiPit9eJYih8SHiqf0w%2BBgSPo5nubhNz5vT9iSxXquBYd5dxvhFYK017RO9Pz6q0jReotlkzAfQmlN%2B48J64jS0CTLeugjoVlonDxbDH7Dro0RiiafmXNmMcmpA7UpzkIW9lbeJFeMTVFydOwt8vDO1h5ewoG81WNR8W4WbL3m0YXaEQcvj0jR29eGYi9sA0Dzjr5jApTfRnwZ5b9XtquBxWWH2VMYzfSmMSPuumVUMWmju2FIwbLxJszME7ObclwiplSv4%2BrNiY7OzKCZPyGl3yfQx6fWnuqUFjDB1YLCBjqkAXcErMWikl5EIzhbxt9ktMuluPWEcAN8m6zU1l5D%2BImzsPrFlAvW7hVyRF71jpCo9LoE7m3Hu4z13QXcQZbzCKLzLlJwbuxggpuPl%2Fjjv1SyX1Cxq7QLy4AhybVNq8QPFxZbhBKYxUwTtgBJ%2FOnsCD8CP9UxY3u8R%2Fw3%2Bn1bNnCOWfSrtt4VcLz10LxcINquZiY71QPpo9qu9EoImsF3os9J36Zc&X-Amz-Signature=c463f23018b1916e3e010d9ad67559c0f9ccc9bbe3ec75756c0bc9d80f21c3aa&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEO65ECR%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T220124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDlAbUmsDMu7P0hMZURVoGkpn%2B7Ywm%2FNogwfSKnvL%2FAkAIhAJeJcbtxct3clYD5OIAS3Sfs24IbTyc2M3QllWJKy36GKv8DCDUQABoMNjM3NDIzMTgzODA1Igw0DCH5waGss8BUvlYq3AOpMUDFA%2BuBhOlCfICdUleF400O6%2ByQf0edvWlVvzlfOq9bNI5WvH%2Fhrf%2FBxiYS0GCHP0v79%2BaUWPc4IrOSS7oWtQsPMVY3F%2Bb%2Fd6Usra%2FDK4qkiXNkY0Vn5E%2Bz8J9%2FXzCEJkpVS%2BOd%2FX6McayUKCtslEp1OA5oJlpeskjlDIjCj%2Fisouw0PIJS%2FINuIPVzxFTr49oJy%2FFgaHe5LPTmnxbf5jLPqIk0c%2BFk556QAZEofqwSHBB%2F%2FmpMG2iu5FmeXtt2ibg58xE9c8YaTdR8FMdw2l50y52lYHwqDTAimM3mTjF9TFHJpRhtXiu2IqmJLDtFt%2FLyAQWv10KlDECh8%2FN6A8%2BiPit9eJYih8SHiqf0w%2BBgSPo5nubhNz5vT9iSxXquBYd5dxvhFYK017RO9Pz6q0jReotlkzAfQmlN%2B48J64jS0CTLeugjoVlonDxbDH7Dro0RiiafmXNmMcmpA7UpzkIW9lbeJFeMTVFydOwt8vDO1h5ewoG81WNR8W4WbL3m0YXaEQcvj0jR29eGYi9sA0Dzjr5jApTfRnwZ5b9XtquBxWWH2VMYzfSmMSPuumVUMWmju2FIwbLxJszME7ObclwiplSv4%2BrNiY7OzKCZPyGl3yfQx6fWnuqUFjDB1YLCBjqkAXcErMWikl5EIzhbxt9ktMuluPWEcAN8m6zU1l5D%2BImzsPrFlAvW7hVyRF71jpCo9LoE7m3Hu4z13QXcQZbzCKLzLlJwbuxggpuPl%2Fjjv1SyX1Cxq7QLy4AhybVNq8QPFxZbhBKYxUwTtgBJ%2FOnsCD8CP9UxY3u8R%2Fw3%2Bn1bNnCOWfSrtt4VcLz10LxcINquZiY71QPpo9qu9EoImsF3os9J36Zc&X-Amz-Signature=ff6e02a0ac94b02f3de95eb45e858263feec3d7fa5bfe4585c523f07d179ec45&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEO65ECR%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T220124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDlAbUmsDMu7P0hMZURVoGkpn%2B7Ywm%2FNogwfSKnvL%2FAkAIhAJeJcbtxct3clYD5OIAS3Sfs24IbTyc2M3QllWJKy36GKv8DCDUQABoMNjM3NDIzMTgzODA1Igw0DCH5waGss8BUvlYq3AOpMUDFA%2BuBhOlCfICdUleF400O6%2ByQf0edvWlVvzlfOq9bNI5WvH%2Fhrf%2FBxiYS0GCHP0v79%2BaUWPc4IrOSS7oWtQsPMVY3F%2Bb%2Fd6Usra%2FDK4qkiXNkY0Vn5E%2Bz8J9%2FXzCEJkpVS%2BOd%2FX6McayUKCtslEp1OA5oJlpeskjlDIjCj%2Fisouw0PIJS%2FINuIPVzxFTr49oJy%2FFgaHe5LPTmnxbf5jLPqIk0c%2BFk556QAZEofqwSHBB%2F%2FmpMG2iu5FmeXtt2ibg58xE9c8YaTdR8FMdw2l50y52lYHwqDTAimM3mTjF9TFHJpRhtXiu2IqmJLDtFt%2FLyAQWv10KlDECh8%2FN6A8%2BiPit9eJYih8SHiqf0w%2BBgSPo5nubhNz5vT9iSxXquBYd5dxvhFYK017RO9Pz6q0jReotlkzAfQmlN%2B48J64jS0CTLeugjoVlonDxbDH7Dro0RiiafmXNmMcmpA7UpzkIW9lbeJFeMTVFydOwt8vDO1h5ewoG81WNR8W4WbL3m0YXaEQcvj0jR29eGYi9sA0Dzjr5jApTfRnwZ5b9XtquBxWWH2VMYzfSmMSPuumVUMWmju2FIwbLxJszME7ObclwiplSv4%2BrNiY7OzKCZPyGl3yfQx6fWnuqUFjDB1YLCBjqkAXcErMWikl5EIzhbxt9ktMuluPWEcAN8m6zU1l5D%2BImzsPrFlAvW7hVyRF71jpCo9LoE7m3Hu4z13QXcQZbzCKLzLlJwbuxggpuPl%2Fjjv1SyX1Cxq7QLy4AhybVNq8QPFxZbhBKYxUwTtgBJ%2FOnsCD8CP9UxY3u8R%2Fw3%2Bn1bNnCOWfSrtt4VcLz10LxcINquZiY71QPpo9qu9EoImsF3os9J36Zc&X-Amz-Signature=a97f098fe3f341408be62344b32a81c5111173893c3fbf7b22765ed7adfb8c8d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEO65ECR%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T220124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDlAbUmsDMu7P0hMZURVoGkpn%2B7Ywm%2FNogwfSKnvL%2FAkAIhAJeJcbtxct3clYD5OIAS3Sfs24IbTyc2M3QllWJKy36GKv8DCDUQABoMNjM3NDIzMTgzODA1Igw0DCH5waGss8BUvlYq3AOpMUDFA%2BuBhOlCfICdUleF400O6%2ByQf0edvWlVvzlfOq9bNI5WvH%2Fhrf%2FBxiYS0GCHP0v79%2BaUWPc4IrOSS7oWtQsPMVY3F%2Bb%2Fd6Usra%2FDK4qkiXNkY0Vn5E%2Bz8J9%2FXzCEJkpVS%2BOd%2FX6McayUKCtslEp1OA5oJlpeskjlDIjCj%2Fisouw0PIJS%2FINuIPVzxFTr49oJy%2FFgaHe5LPTmnxbf5jLPqIk0c%2BFk556QAZEofqwSHBB%2F%2FmpMG2iu5FmeXtt2ibg58xE9c8YaTdR8FMdw2l50y52lYHwqDTAimM3mTjF9TFHJpRhtXiu2IqmJLDtFt%2FLyAQWv10KlDECh8%2FN6A8%2BiPit9eJYih8SHiqf0w%2BBgSPo5nubhNz5vT9iSxXquBYd5dxvhFYK017RO9Pz6q0jReotlkzAfQmlN%2B48J64jS0CTLeugjoVlonDxbDH7Dro0RiiafmXNmMcmpA7UpzkIW9lbeJFeMTVFydOwt8vDO1h5ewoG81WNR8W4WbL3m0YXaEQcvj0jR29eGYi9sA0Dzjr5jApTfRnwZ5b9XtquBxWWH2VMYzfSmMSPuumVUMWmju2FIwbLxJszME7ObclwiplSv4%2BrNiY7OzKCZPyGl3yfQx6fWnuqUFjDB1YLCBjqkAXcErMWikl5EIzhbxt9ktMuluPWEcAN8m6zU1l5D%2BImzsPrFlAvW7hVyRF71jpCo9LoE7m3Hu4z13QXcQZbzCKLzLlJwbuxggpuPl%2Fjjv1SyX1Cxq7QLy4AhybVNq8QPFxZbhBKYxUwTtgBJ%2FOnsCD8CP9UxY3u8R%2Fw3%2Bn1bNnCOWfSrtt4VcLz10LxcINquZiY71QPpo9qu9EoImsF3os9J36Zc&X-Amz-Signature=b27cc9c8fa2f0311b51e48bdc31c71de6f9802dde230169eb053544a9450e9ee&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEO65ECR%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T220124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDlAbUmsDMu7P0hMZURVoGkpn%2B7Ywm%2FNogwfSKnvL%2FAkAIhAJeJcbtxct3clYD5OIAS3Sfs24IbTyc2M3QllWJKy36GKv8DCDUQABoMNjM3NDIzMTgzODA1Igw0DCH5waGss8BUvlYq3AOpMUDFA%2BuBhOlCfICdUleF400O6%2ByQf0edvWlVvzlfOq9bNI5WvH%2Fhrf%2FBxiYS0GCHP0v79%2BaUWPc4IrOSS7oWtQsPMVY3F%2Bb%2Fd6Usra%2FDK4qkiXNkY0Vn5E%2Bz8J9%2FXzCEJkpVS%2BOd%2FX6McayUKCtslEp1OA5oJlpeskjlDIjCj%2Fisouw0PIJS%2FINuIPVzxFTr49oJy%2FFgaHe5LPTmnxbf5jLPqIk0c%2BFk556QAZEofqwSHBB%2F%2FmpMG2iu5FmeXtt2ibg58xE9c8YaTdR8FMdw2l50y52lYHwqDTAimM3mTjF9TFHJpRhtXiu2IqmJLDtFt%2FLyAQWv10KlDECh8%2FN6A8%2BiPit9eJYih8SHiqf0w%2BBgSPo5nubhNz5vT9iSxXquBYd5dxvhFYK017RO9Pz6q0jReotlkzAfQmlN%2B48J64jS0CTLeugjoVlonDxbDH7Dro0RiiafmXNmMcmpA7UpzkIW9lbeJFeMTVFydOwt8vDO1h5ewoG81WNR8W4WbL3m0YXaEQcvj0jR29eGYi9sA0Dzjr5jApTfRnwZ5b9XtquBxWWH2VMYzfSmMSPuumVUMWmju2FIwbLxJszME7ObclwiplSv4%2BrNiY7OzKCZPyGl3yfQx6fWnuqUFjDB1YLCBjqkAXcErMWikl5EIzhbxt9ktMuluPWEcAN8m6zU1l5D%2BImzsPrFlAvW7hVyRF71jpCo9LoE7m3Hu4z13QXcQZbzCKLzLlJwbuxggpuPl%2Fjjv1SyX1Cxq7QLy4AhybVNq8QPFxZbhBKYxUwTtgBJ%2FOnsCD8CP9UxY3u8R%2Fw3%2Bn1bNnCOWfSrtt4VcLz10LxcINquZiY71QPpo9qu9EoImsF3os9J36Zc&X-Amz-Signature=1a10feedbd36614a95997765c412a80a81bfbec74870153684b3ef342d545e0a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEO65ECR%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T220124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDlAbUmsDMu7P0hMZURVoGkpn%2B7Ywm%2FNogwfSKnvL%2FAkAIhAJeJcbtxct3clYD5OIAS3Sfs24IbTyc2M3QllWJKy36GKv8DCDUQABoMNjM3NDIzMTgzODA1Igw0DCH5waGss8BUvlYq3AOpMUDFA%2BuBhOlCfICdUleF400O6%2ByQf0edvWlVvzlfOq9bNI5WvH%2Fhrf%2FBxiYS0GCHP0v79%2BaUWPc4IrOSS7oWtQsPMVY3F%2Bb%2Fd6Usra%2FDK4qkiXNkY0Vn5E%2Bz8J9%2FXzCEJkpVS%2BOd%2FX6McayUKCtslEp1OA5oJlpeskjlDIjCj%2Fisouw0PIJS%2FINuIPVzxFTr49oJy%2FFgaHe5LPTmnxbf5jLPqIk0c%2BFk556QAZEofqwSHBB%2F%2FmpMG2iu5FmeXtt2ibg58xE9c8YaTdR8FMdw2l50y52lYHwqDTAimM3mTjF9TFHJpRhtXiu2IqmJLDtFt%2FLyAQWv10KlDECh8%2FN6A8%2BiPit9eJYih8SHiqf0w%2BBgSPo5nubhNz5vT9iSxXquBYd5dxvhFYK017RO9Pz6q0jReotlkzAfQmlN%2B48J64jS0CTLeugjoVlonDxbDH7Dro0RiiafmXNmMcmpA7UpzkIW9lbeJFeMTVFydOwt8vDO1h5ewoG81WNR8W4WbL3m0YXaEQcvj0jR29eGYi9sA0Dzjr5jApTfRnwZ5b9XtquBxWWH2VMYzfSmMSPuumVUMWmju2FIwbLxJszME7ObclwiplSv4%2BrNiY7OzKCZPyGl3yfQx6fWnuqUFjDB1YLCBjqkAXcErMWikl5EIzhbxt9ktMuluPWEcAN8m6zU1l5D%2BImzsPrFlAvW7hVyRF71jpCo9LoE7m3Hu4z13QXcQZbzCKLzLlJwbuxggpuPl%2Fjjv1SyX1Cxq7QLy4AhybVNq8QPFxZbhBKYxUwTtgBJ%2FOnsCD8CP9UxY3u8R%2Fw3%2Bn1bNnCOWfSrtt4VcLz10LxcINquZiY71QPpo9qu9EoImsF3os9J36Zc&X-Amz-Signature=1e32e434e674a69b0521a6d62e27c67a4c5b54e37fd408bdee13e7cfc75e9da1&X-Amz-SignedHeaders=host&x-id=GetObject)
