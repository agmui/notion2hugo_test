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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z73X5YC%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T131926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdWQ6HIPhdq5UaeG%2F59wTqTD6iwd7koacm7THVJ2qYqAiAbqCvOgTkhQtbOe47hu8serNhJesdqo9xpC0BNMWQyPyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWkz75setDarH1vqtKtwDGWImu3u7OFGsJUJzwLIkYC4jX27aT7YDlQW7s1Cq4psrcGbA2uBGTF4Gr4wqufJfwNNKp0%2BAsjTaGJ1nHHQ9siIHBN0mFHsagGQy%2BXFKJ%2BUtoSrtvYsu9zi%2Fp89ZZmDpNXJkVY92lCFqWG3wPZ7BUuK%2FMrxLRW9E5b6Rm5%2BOMqgjItpDnBWaZpKR378Zh0BSt2a3Mbf4S2ON7ILbl7r2z4jYB5cFSyZaf%2F5l%2F0zCZfI5HWdXIs30JRBWeqmlnBgo3mIwpujHOx9u7t7cij4UKM27%2B56VwDU%2FF%2FJhNLioPzHKw9oT1jkxzAfxK%2BFLVKtvfq74ghpRGBNoJzwAM5iYFWhb3jtUWv2Avlnx1wXQkPFZi8COtx5Cl7%2F3OEQ9fEPji5idc6mUT5i1A8qUMzY20OaRBdxArXtHgBRHkdIiTwkEkikaYzjOhCeL7sHXn037R6Ih%2B5PonV6gzAUoXNoukPnSMS9IGFKlnPQJljJnPkuhpK3lCieU4ZHELmdqUd2yIleOafxZjRKKmgCRT2XcCSUJ6lWiZpTGlf5MMOK4Q2SBNOsfNYvk5zCxmxEWflv0ThTLihVZVjwShwj%2BKx1EBV0XwJbKpmS9sTv%2Bxagj8LLKFDQGtQrdxkppqp0wvoTrwQY6pgFbFiGIO4JQlsSXPrePxRiEGQ%2B6rvsqPTIFJSmgvUTAJ8HLnpJuGMeW1dnft6kpmMdCavRJcqN8bC9ZpaFaf2UcKjSR2mlHgekKpxtCYMzMbwSdeJY6TdCa150Mt%2FNSnW%2Bft7dPpJ4PKJLFzTXQnowJT2V%2FnXk5YUC7cYeRlKRZi8k5np6BDsGnc23%2Bl2EtNVGFjrceEuWXgoNBKLpcKCUy0VhDHAHI&X-Amz-Signature=be8b21c4687b74e5f1951ba6524ce15128024012d9edb97f0249a61aecbbeeae&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z73X5YC%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T131926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdWQ6HIPhdq5UaeG%2F59wTqTD6iwd7koacm7THVJ2qYqAiAbqCvOgTkhQtbOe47hu8serNhJesdqo9xpC0BNMWQyPyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWkz75setDarH1vqtKtwDGWImu3u7OFGsJUJzwLIkYC4jX27aT7YDlQW7s1Cq4psrcGbA2uBGTF4Gr4wqufJfwNNKp0%2BAsjTaGJ1nHHQ9siIHBN0mFHsagGQy%2BXFKJ%2BUtoSrtvYsu9zi%2Fp89ZZmDpNXJkVY92lCFqWG3wPZ7BUuK%2FMrxLRW9E5b6Rm5%2BOMqgjItpDnBWaZpKR378Zh0BSt2a3Mbf4S2ON7ILbl7r2z4jYB5cFSyZaf%2F5l%2F0zCZfI5HWdXIs30JRBWeqmlnBgo3mIwpujHOx9u7t7cij4UKM27%2B56VwDU%2FF%2FJhNLioPzHKw9oT1jkxzAfxK%2BFLVKtvfq74ghpRGBNoJzwAM5iYFWhb3jtUWv2Avlnx1wXQkPFZi8COtx5Cl7%2F3OEQ9fEPji5idc6mUT5i1A8qUMzY20OaRBdxArXtHgBRHkdIiTwkEkikaYzjOhCeL7sHXn037R6Ih%2B5PonV6gzAUoXNoukPnSMS9IGFKlnPQJljJnPkuhpK3lCieU4ZHELmdqUd2yIleOafxZjRKKmgCRT2XcCSUJ6lWiZpTGlf5MMOK4Q2SBNOsfNYvk5zCxmxEWflv0ThTLihVZVjwShwj%2BKx1EBV0XwJbKpmS9sTv%2Bxagj8LLKFDQGtQrdxkppqp0wvoTrwQY6pgFbFiGIO4JQlsSXPrePxRiEGQ%2B6rvsqPTIFJSmgvUTAJ8HLnpJuGMeW1dnft6kpmMdCavRJcqN8bC9ZpaFaf2UcKjSR2mlHgekKpxtCYMzMbwSdeJY6TdCa150Mt%2FNSnW%2Bft7dPpJ4PKJLFzTXQnowJT2V%2FnXk5YUC7cYeRlKRZi8k5np6BDsGnc23%2Bl2EtNVGFjrceEuWXgoNBKLpcKCUy0VhDHAHI&X-Amz-Signature=c9ad3327b5c059e9bf7549cf20513ff1244cd716fbb0fd6bb6ddf25df6921899&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z73X5YC%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T131926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdWQ6HIPhdq5UaeG%2F59wTqTD6iwd7koacm7THVJ2qYqAiAbqCvOgTkhQtbOe47hu8serNhJesdqo9xpC0BNMWQyPyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWkz75setDarH1vqtKtwDGWImu3u7OFGsJUJzwLIkYC4jX27aT7YDlQW7s1Cq4psrcGbA2uBGTF4Gr4wqufJfwNNKp0%2BAsjTaGJ1nHHQ9siIHBN0mFHsagGQy%2BXFKJ%2BUtoSrtvYsu9zi%2Fp89ZZmDpNXJkVY92lCFqWG3wPZ7BUuK%2FMrxLRW9E5b6Rm5%2BOMqgjItpDnBWaZpKR378Zh0BSt2a3Mbf4S2ON7ILbl7r2z4jYB5cFSyZaf%2F5l%2F0zCZfI5HWdXIs30JRBWeqmlnBgo3mIwpujHOx9u7t7cij4UKM27%2B56VwDU%2FF%2FJhNLioPzHKw9oT1jkxzAfxK%2BFLVKtvfq74ghpRGBNoJzwAM5iYFWhb3jtUWv2Avlnx1wXQkPFZi8COtx5Cl7%2F3OEQ9fEPji5idc6mUT5i1A8qUMzY20OaRBdxArXtHgBRHkdIiTwkEkikaYzjOhCeL7sHXn037R6Ih%2B5PonV6gzAUoXNoukPnSMS9IGFKlnPQJljJnPkuhpK3lCieU4ZHELmdqUd2yIleOafxZjRKKmgCRT2XcCSUJ6lWiZpTGlf5MMOK4Q2SBNOsfNYvk5zCxmxEWflv0ThTLihVZVjwShwj%2BKx1EBV0XwJbKpmS9sTv%2Bxagj8LLKFDQGtQrdxkppqp0wvoTrwQY6pgFbFiGIO4JQlsSXPrePxRiEGQ%2B6rvsqPTIFJSmgvUTAJ8HLnpJuGMeW1dnft6kpmMdCavRJcqN8bC9ZpaFaf2UcKjSR2mlHgekKpxtCYMzMbwSdeJY6TdCa150Mt%2FNSnW%2Bft7dPpJ4PKJLFzTXQnowJT2V%2FnXk5YUC7cYeRlKRZi8k5np6BDsGnc23%2Bl2EtNVGFjrceEuWXgoNBKLpcKCUy0VhDHAHI&X-Amz-Signature=6f1bb0984957c38d71295a876e73a44eefdffa91690b18e1cbe2c584f97996b4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z73X5YC%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T131926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdWQ6HIPhdq5UaeG%2F59wTqTD6iwd7koacm7THVJ2qYqAiAbqCvOgTkhQtbOe47hu8serNhJesdqo9xpC0BNMWQyPyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWkz75setDarH1vqtKtwDGWImu3u7OFGsJUJzwLIkYC4jX27aT7YDlQW7s1Cq4psrcGbA2uBGTF4Gr4wqufJfwNNKp0%2BAsjTaGJ1nHHQ9siIHBN0mFHsagGQy%2BXFKJ%2BUtoSrtvYsu9zi%2Fp89ZZmDpNXJkVY92lCFqWG3wPZ7BUuK%2FMrxLRW9E5b6Rm5%2BOMqgjItpDnBWaZpKR378Zh0BSt2a3Mbf4S2ON7ILbl7r2z4jYB5cFSyZaf%2F5l%2F0zCZfI5HWdXIs30JRBWeqmlnBgo3mIwpujHOx9u7t7cij4UKM27%2B56VwDU%2FF%2FJhNLioPzHKw9oT1jkxzAfxK%2BFLVKtvfq74ghpRGBNoJzwAM5iYFWhb3jtUWv2Avlnx1wXQkPFZi8COtx5Cl7%2F3OEQ9fEPji5idc6mUT5i1A8qUMzY20OaRBdxArXtHgBRHkdIiTwkEkikaYzjOhCeL7sHXn037R6Ih%2B5PonV6gzAUoXNoukPnSMS9IGFKlnPQJljJnPkuhpK3lCieU4ZHELmdqUd2yIleOafxZjRKKmgCRT2XcCSUJ6lWiZpTGlf5MMOK4Q2SBNOsfNYvk5zCxmxEWflv0ThTLihVZVjwShwj%2BKx1EBV0XwJbKpmS9sTv%2Bxagj8LLKFDQGtQrdxkppqp0wvoTrwQY6pgFbFiGIO4JQlsSXPrePxRiEGQ%2B6rvsqPTIFJSmgvUTAJ8HLnpJuGMeW1dnft6kpmMdCavRJcqN8bC9ZpaFaf2UcKjSR2mlHgekKpxtCYMzMbwSdeJY6TdCa150Mt%2FNSnW%2Bft7dPpJ4PKJLFzTXQnowJT2V%2FnXk5YUC7cYeRlKRZi8k5np6BDsGnc23%2Bl2EtNVGFjrceEuWXgoNBKLpcKCUy0VhDHAHI&X-Amz-Signature=95f6eb891a555739e1aa1f9255afdf73ec6408186d6978b29339c32cf14bce39&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z73X5YC%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T131926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdWQ6HIPhdq5UaeG%2F59wTqTD6iwd7koacm7THVJ2qYqAiAbqCvOgTkhQtbOe47hu8serNhJesdqo9xpC0BNMWQyPyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWkz75setDarH1vqtKtwDGWImu3u7OFGsJUJzwLIkYC4jX27aT7YDlQW7s1Cq4psrcGbA2uBGTF4Gr4wqufJfwNNKp0%2BAsjTaGJ1nHHQ9siIHBN0mFHsagGQy%2BXFKJ%2BUtoSrtvYsu9zi%2Fp89ZZmDpNXJkVY92lCFqWG3wPZ7BUuK%2FMrxLRW9E5b6Rm5%2BOMqgjItpDnBWaZpKR378Zh0BSt2a3Mbf4S2ON7ILbl7r2z4jYB5cFSyZaf%2F5l%2F0zCZfI5HWdXIs30JRBWeqmlnBgo3mIwpujHOx9u7t7cij4UKM27%2B56VwDU%2FF%2FJhNLioPzHKw9oT1jkxzAfxK%2BFLVKtvfq74ghpRGBNoJzwAM5iYFWhb3jtUWv2Avlnx1wXQkPFZi8COtx5Cl7%2F3OEQ9fEPji5idc6mUT5i1A8qUMzY20OaRBdxArXtHgBRHkdIiTwkEkikaYzjOhCeL7sHXn037R6Ih%2B5PonV6gzAUoXNoukPnSMS9IGFKlnPQJljJnPkuhpK3lCieU4ZHELmdqUd2yIleOafxZjRKKmgCRT2XcCSUJ6lWiZpTGlf5MMOK4Q2SBNOsfNYvk5zCxmxEWflv0ThTLihVZVjwShwj%2BKx1EBV0XwJbKpmS9sTv%2Bxagj8LLKFDQGtQrdxkppqp0wvoTrwQY6pgFbFiGIO4JQlsSXPrePxRiEGQ%2B6rvsqPTIFJSmgvUTAJ8HLnpJuGMeW1dnft6kpmMdCavRJcqN8bC9ZpaFaf2UcKjSR2mlHgekKpxtCYMzMbwSdeJY6TdCa150Mt%2FNSnW%2Bft7dPpJ4PKJLFzTXQnowJT2V%2FnXk5YUC7cYeRlKRZi8k5np6BDsGnc23%2Bl2EtNVGFjrceEuWXgoNBKLpcKCUy0VhDHAHI&X-Amz-Signature=3ed5f7d73951fc67f3524f6b17adcfaa62e81519d2dc3a6cfd1cff4a6ef886d9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z73X5YC%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T131926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdWQ6HIPhdq5UaeG%2F59wTqTD6iwd7koacm7THVJ2qYqAiAbqCvOgTkhQtbOe47hu8serNhJesdqo9xpC0BNMWQyPyqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWkz75setDarH1vqtKtwDGWImu3u7OFGsJUJzwLIkYC4jX27aT7YDlQW7s1Cq4psrcGbA2uBGTF4Gr4wqufJfwNNKp0%2BAsjTaGJ1nHHQ9siIHBN0mFHsagGQy%2BXFKJ%2BUtoSrtvYsu9zi%2Fp89ZZmDpNXJkVY92lCFqWG3wPZ7BUuK%2FMrxLRW9E5b6Rm5%2BOMqgjItpDnBWaZpKR378Zh0BSt2a3Mbf4S2ON7ILbl7r2z4jYB5cFSyZaf%2F5l%2F0zCZfI5HWdXIs30JRBWeqmlnBgo3mIwpujHOx9u7t7cij4UKM27%2B56VwDU%2FF%2FJhNLioPzHKw9oT1jkxzAfxK%2BFLVKtvfq74ghpRGBNoJzwAM5iYFWhb3jtUWv2Avlnx1wXQkPFZi8COtx5Cl7%2F3OEQ9fEPji5idc6mUT5i1A8qUMzY20OaRBdxArXtHgBRHkdIiTwkEkikaYzjOhCeL7sHXn037R6Ih%2B5PonV6gzAUoXNoukPnSMS9IGFKlnPQJljJnPkuhpK3lCieU4ZHELmdqUd2yIleOafxZjRKKmgCRT2XcCSUJ6lWiZpTGlf5MMOK4Q2SBNOsfNYvk5zCxmxEWflv0ThTLihVZVjwShwj%2BKx1EBV0XwJbKpmS9sTv%2Bxagj8LLKFDQGtQrdxkppqp0wvoTrwQY6pgFbFiGIO4JQlsSXPrePxRiEGQ%2B6rvsqPTIFJSmgvUTAJ8HLnpJuGMeW1dnft6kpmMdCavRJcqN8bC9ZpaFaf2UcKjSR2mlHgekKpxtCYMzMbwSdeJY6TdCa150Mt%2FNSnW%2Bft7dPpJ4PKJLFzTXQnowJT2V%2FnXk5YUC7cYeRlKRZi8k5np6BDsGnc23%2Bl2EtNVGFjrceEuWXgoNBKLpcKCUy0VhDHAHI&X-Amz-Signature=7a9b20ba47014b542ec8634df456df3015952989ae9db9bffa87596d93204bf7&X-Amz-SignedHeaders=host&x-id=GetObject)
