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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XK63Z5D%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T090951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAr%2B733OO5Prkrh0QbBuHXx8G6aGKHhyL9tjOdepcJcMAiEA9L9FPvjH4iIj%2FC5JwzA6doqEtqhQh0kb3oelMjodHswqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgAG9mz1yXh4AAYuyrcA7QqhfNL5xzwAfpThlXKG8oIy5e5Il%2Fzu5kLpSCh9jKPf3aFcLgYFT7HzC1UjBZ3aQYsOhrN%2BlTEvKPkmC3d4NJumzsgehetJMhzuv%2ByO34Z3TY7tN8YngoPKTtf55ebv9VgTqTyubU62rZ5bDsDB5Wc1igKvm%2F6BqP%2Bhw4dCWlJzN5RRsUtrhJJ1RuKrOI0fLjvEo%2BwI4OMe1RmjRHtQ14AAYTAI8WGgka7w1WTn4BS%2FqWDJrXMDXURDG%2BOmNdlUB76bpJQT0OHGDMVJ8wazVDguw1htubnUKrrj%2ByuHjf%2BZ6QnSohq0MRNqEqfn617OETj6piOanZZCm8qAISQIypcR6q%2FIt1kJec02fqAj29ITJbWZW9Kk2n9pLRwF1CafsL%2BCbDF86ybWEEIaVcQvIPTgjXCZq6N2hxMllexxVFedGPb%2BWI8f%2BsLbA%2FbYMNDds4x5ppDeg%2B8G%2F1EI9rBRQbFbj4l7VKMs0Qj%2FBZH2nUD6tKd3ftuMYwX2%2B0DDVw%2FdLdGy0nVyCZQ1B9gwZBkkj49x7MJO72WgBMgp3qKZWXBVuclnnf%2B2TaU1sZ7LOTWCA2YaaDZqX1KbMIHSq9%2FJQme7U7haoK7On1GXpkb3ni8SQtiVSGbS2X8DRuQMLSowsAGOqUBeG8b7LYJxPgyw8GWCENVHtDWT0TGjQ00eP4bgZ6ajb6CkWk6vFtpURPHSKs9FVrtB0PZ7ybUoJCfS5EmeY3fa0ZMoqHHoEzcY5uZ2ZkTxORvnDP1sMD6seGr5VvK9tHPEWZHnDO5BQi7IDdaUoOHRQYrTmzv85NZo1lBISYJIq%2Fqh8FRj14PoHZFsc%2Fd3UpHsgWXLF9DSEJ%2B8GXUAEkkmFqM6Z10&X-Amz-Signature=4a4b4e8b32cd874ee8c82373241275c0bee282e5864bd0899bf94f595503936f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XK63Z5D%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T090951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAr%2B733OO5Prkrh0QbBuHXx8G6aGKHhyL9tjOdepcJcMAiEA9L9FPvjH4iIj%2FC5JwzA6doqEtqhQh0kb3oelMjodHswqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgAG9mz1yXh4AAYuyrcA7QqhfNL5xzwAfpThlXKG8oIy5e5Il%2Fzu5kLpSCh9jKPf3aFcLgYFT7HzC1UjBZ3aQYsOhrN%2BlTEvKPkmC3d4NJumzsgehetJMhzuv%2ByO34Z3TY7tN8YngoPKTtf55ebv9VgTqTyubU62rZ5bDsDB5Wc1igKvm%2F6BqP%2Bhw4dCWlJzN5RRsUtrhJJ1RuKrOI0fLjvEo%2BwI4OMe1RmjRHtQ14AAYTAI8WGgka7w1WTn4BS%2FqWDJrXMDXURDG%2BOmNdlUB76bpJQT0OHGDMVJ8wazVDguw1htubnUKrrj%2ByuHjf%2BZ6QnSohq0MRNqEqfn617OETj6piOanZZCm8qAISQIypcR6q%2FIt1kJec02fqAj29ITJbWZW9Kk2n9pLRwF1CafsL%2BCbDF86ybWEEIaVcQvIPTgjXCZq6N2hxMllexxVFedGPb%2BWI8f%2BsLbA%2FbYMNDds4x5ppDeg%2B8G%2F1EI9rBRQbFbj4l7VKMs0Qj%2FBZH2nUD6tKd3ftuMYwX2%2B0DDVw%2FdLdGy0nVyCZQ1B9gwZBkkj49x7MJO72WgBMgp3qKZWXBVuclnnf%2B2TaU1sZ7LOTWCA2YaaDZqX1KbMIHSq9%2FJQme7U7haoK7On1GXpkb3ni8SQtiVSGbS2X8DRuQMLSowsAGOqUBeG8b7LYJxPgyw8GWCENVHtDWT0TGjQ00eP4bgZ6ajb6CkWk6vFtpURPHSKs9FVrtB0PZ7ybUoJCfS5EmeY3fa0ZMoqHHoEzcY5uZ2ZkTxORvnDP1sMD6seGr5VvK9tHPEWZHnDO5BQi7IDdaUoOHRQYrTmzv85NZo1lBISYJIq%2Fqh8FRj14PoHZFsc%2Fd3UpHsgWXLF9DSEJ%2B8GXUAEkkmFqM6Z10&X-Amz-Signature=245b02d866be462f662143b0f2a0c204e429ca65cc05dad593e8a19315530c3a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XK63Z5D%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T090951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAr%2B733OO5Prkrh0QbBuHXx8G6aGKHhyL9tjOdepcJcMAiEA9L9FPvjH4iIj%2FC5JwzA6doqEtqhQh0kb3oelMjodHswqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgAG9mz1yXh4AAYuyrcA7QqhfNL5xzwAfpThlXKG8oIy5e5Il%2Fzu5kLpSCh9jKPf3aFcLgYFT7HzC1UjBZ3aQYsOhrN%2BlTEvKPkmC3d4NJumzsgehetJMhzuv%2ByO34Z3TY7tN8YngoPKTtf55ebv9VgTqTyubU62rZ5bDsDB5Wc1igKvm%2F6BqP%2Bhw4dCWlJzN5RRsUtrhJJ1RuKrOI0fLjvEo%2BwI4OMe1RmjRHtQ14AAYTAI8WGgka7w1WTn4BS%2FqWDJrXMDXURDG%2BOmNdlUB76bpJQT0OHGDMVJ8wazVDguw1htubnUKrrj%2ByuHjf%2BZ6QnSohq0MRNqEqfn617OETj6piOanZZCm8qAISQIypcR6q%2FIt1kJec02fqAj29ITJbWZW9Kk2n9pLRwF1CafsL%2BCbDF86ybWEEIaVcQvIPTgjXCZq6N2hxMllexxVFedGPb%2BWI8f%2BsLbA%2FbYMNDds4x5ppDeg%2B8G%2F1EI9rBRQbFbj4l7VKMs0Qj%2FBZH2nUD6tKd3ftuMYwX2%2B0DDVw%2FdLdGy0nVyCZQ1B9gwZBkkj49x7MJO72WgBMgp3qKZWXBVuclnnf%2B2TaU1sZ7LOTWCA2YaaDZqX1KbMIHSq9%2FJQme7U7haoK7On1GXpkb3ni8SQtiVSGbS2X8DRuQMLSowsAGOqUBeG8b7LYJxPgyw8GWCENVHtDWT0TGjQ00eP4bgZ6ajb6CkWk6vFtpURPHSKs9FVrtB0PZ7ybUoJCfS5EmeY3fa0ZMoqHHoEzcY5uZ2ZkTxORvnDP1sMD6seGr5VvK9tHPEWZHnDO5BQi7IDdaUoOHRQYrTmzv85NZo1lBISYJIq%2Fqh8FRj14PoHZFsc%2Fd3UpHsgWXLF9DSEJ%2B8GXUAEkkmFqM6Z10&X-Amz-Signature=2a0638af0d003bda896c5cfa5c3c2bc36bfab790926f5313f6fcc0b1fcb4bf3a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XK63Z5D%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T090951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAr%2B733OO5Prkrh0QbBuHXx8G6aGKHhyL9tjOdepcJcMAiEA9L9FPvjH4iIj%2FC5JwzA6doqEtqhQh0kb3oelMjodHswqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgAG9mz1yXh4AAYuyrcA7QqhfNL5xzwAfpThlXKG8oIy5e5Il%2Fzu5kLpSCh9jKPf3aFcLgYFT7HzC1UjBZ3aQYsOhrN%2BlTEvKPkmC3d4NJumzsgehetJMhzuv%2ByO34Z3TY7tN8YngoPKTtf55ebv9VgTqTyubU62rZ5bDsDB5Wc1igKvm%2F6BqP%2Bhw4dCWlJzN5RRsUtrhJJ1RuKrOI0fLjvEo%2BwI4OMe1RmjRHtQ14AAYTAI8WGgka7w1WTn4BS%2FqWDJrXMDXURDG%2BOmNdlUB76bpJQT0OHGDMVJ8wazVDguw1htubnUKrrj%2ByuHjf%2BZ6QnSohq0MRNqEqfn617OETj6piOanZZCm8qAISQIypcR6q%2FIt1kJec02fqAj29ITJbWZW9Kk2n9pLRwF1CafsL%2BCbDF86ybWEEIaVcQvIPTgjXCZq6N2hxMllexxVFedGPb%2BWI8f%2BsLbA%2FbYMNDds4x5ppDeg%2B8G%2F1EI9rBRQbFbj4l7VKMs0Qj%2FBZH2nUD6tKd3ftuMYwX2%2B0DDVw%2FdLdGy0nVyCZQ1B9gwZBkkj49x7MJO72WgBMgp3qKZWXBVuclnnf%2B2TaU1sZ7LOTWCA2YaaDZqX1KbMIHSq9%2FJQme7U7haoK7On1GXpkb3ni8SQtiVSGbS2X8DRuQMLSowsAGOqUBeG8b7LYJxPgyw8GWCENVHtDWT0TGjQ00eP4bgZ6ajb6CkWk6vFtpURPHSKs9FVrtB0PZ7ybUoJCfS5EmeY3fa0ZMoqHHoEzcY5uZ2ZkTxORvnDP1sMD6seGr5VvK9tHPEWZHnDO5BQi7IDdaUoOHRQYrTmzv85NZo1lBISYJIq%2Fqh8FRj14PoHZFsc%2Fd3UpHsgWXLF9DSEJ%2B8GXUAEkkmFqM6Z10&X-Amz-Signature=7a171be33f6867794817af9b38d84884ad512e7ec17517e62477e0ffdcfed06f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XK63Z5D%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T090951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAr%2B733OO5Prkrh0QbBuHXx8G6aGKHhyL9tjOdepcJcMAiEA9L9FPvjH4iIj%2FC5JwzA6doqEtqhQh0kb3oelMjodHswqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgAG9mz1yXh4AAYuyrcA7QqhfNL5xzwAfpThlXKG8oIy5e5Il%2Fzu5kLpSCh9jKPf3aFcLgYFT7HzC1UjBZ3aQYsOhrN%2BlTEvKPkmC3d4NJumzsgehetJMhzuv%2ByO34Z3TY7tN8YngoPKTtf55ebv9VgTqTyubU62rZ5bDsDB5Wc1igKvm%2F6BqP%2Bhw4dCWlJzN5RRsUtrhJJ1RuKrOI0fLjvEo%2BwI4OMe1RmjRHtQ14AAYTAI8WGgka7w1WTn4BS%2FqWDJrXMDXURDG%2BOmNdlUB76bpJQT0OHGDMVJ8wazVDguw1htubnUKrrj%2ByuHjf%2BZ6QnSohq0MRNqEqfn617OETj6piOanZZCm8qAISQIypcR6q%2FIt1kJec02fqAj29ITJbWZW9Kk2n9pLRwF1CafsL%2BCbDF86ybWEEIaVcQvIPTgjXCZq6N2hxMllexxVFedGPb%2BWI8f%2BsLbA%2FbYMNDds4x5ppDeg%2B8G%2F1EI9rBRQbFbj4l7VKMs0Qj%2FBZH2nUD6tKd3ftuMYwX2%2B0DDVw%2FdLdGy0nVyCZQ1B9gwZBkkj49x7MJO72WgBMgp3qKZWXBVuclnnf%2B2TaU1sZ7LOTWCA2YaaDZqX1KbMIHSq9%2FJQme7U7haoK7On1GXpkb3ni8SQtiVSGbS2X8DRuQMLSowsAGOqUBeG8b7LYJxPgyw8GWCENVHtDWT0TGjQ00eP4bgZ6ajb6CkWk6vFtpURPHSKs9FVrtB0PZ7ybUoJCfS5EmeY3fa0ZMoqHHoEzcY5uZ2ZkTxORvnDP1sMD6seGr5VvK9tHPEWZHnDO5BQi7IDdaUoOHRQYrTmzv85NZo1lBISYJIq%2Fqh8FRj14PoHZFsc%2Fd3UpHsgWXLF9DSEJ%2B8GXUAEkkmFqM6Z10&X-Amz-Signature=15b3ad0a49957f519807b765066ab6ca556763443919c1d2d7714e46833f8aa0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XK63Z5D%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T090951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAr%2B733OO5Prkrh0QbBuHXx8G6aGKHhyL9tjOdepcJcMAiEA9L9FPvjH4iIj%2FC5JwzA6doqEtqhQh0kb3oelMjodHswqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgAG9mz1yXh4AAYuyrcA7QqhfNL5xzwAfpThlXKG8oIy5e5Il%2Fzu5kLpSCh9jKPf3aFcLgYFT7HzC1UjBZ3aQYsOhrN%2BlTEvKPkmC3d4NJumzsgehetJMhzuv%2ByO34Z3TY7tN8YngoPKTtf55ebv9VgTqTyubU62rZ5bDsDB5Wc1igKvm%2F6BqP%2Bhw4dCWlJzN5RRsUtrhJJ1RuKrOI0fLjvEo%2BwI4OMe1RmjRHtQ14AAYTAI8WGgka7w1WTn4BS%2FqWDJrXMDXURDG%2BOmNdlUB76bpJQT0OHGDMVJ8wazVDguw1htubnUKrrj%2ByuHjf%2BZ6QnSohq0MRNqEqfn617OETj6piOanZZCm8qAISQIypcR6q%2FIt1kJec02fqAj29ITJbWZW9Kk2n9pLRwF1CafsL%2BCbDF86ybWEEIaVcQvIPTgjXCZq6N2hxMllexxVFedGPb%2BWI8f%2BsLbA%2FbYMNDds4x5ppDeg%2B8G%2F1EI9rBRQbFbj4l7VKMs0Qj%2FBZH2nUD6tKd3ftuMYwX2%2B0DDVw%2FdLdGy0nVyCZQ1B9gwZBkkj49x7MJO72WgBMgp3qKZWXBVuclnnf%2B2TaU1sZ7LOTWCA2YaaDZqX1KbMIHSq9%2FJQme7U7haoK7On1GXpkb3ni8SQtiVSGbS2X8DRuQMLSowsAGOqUBeG8b7LYJxPgyw8GWCENVHtDWT0TGjQ00eP4bgZ6ajb6CkWk6vFtpURPHSKs9FVrtB0PZ7ybUoJCfS5EmeY3fa0ZMoqHHoEzcY5uZ2ZkTxORvnDP1sMD6seGr5VvK9tHPEWZHnDO5BQi7IDdaUoOHRQYrTmzv85NZo1lBISYJIq%2Fqh8FRj14PoHZFsc%2Fd3UpHsgWXLF9DSEJ%2B8GXUAEkkmFqM6Z10&X-Amz-Signature=cb3bc6ab7ad1c27963431bfcb0e806b33f37e1b172a5ce1482ca9bfacadbbf2f&X-Amz-SignedHeaders=host&x-id=GetObject)
