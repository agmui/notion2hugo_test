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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIEMSLFI%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T140725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3i3HLLetKBKDIBoFz%2BZFulpadh53ft5vYHFSpYDIkBAiEA863o5eage3c77Au0U5WuUE3YortY4rwTBr7tIg4m73wqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJinZ7UADq1pX2lVCrcAxdlrwViIOtsEA8ZEQ%2FCk07oZndy361%2FA%2BRIMKNFs5MrmAuWp18KluH6%2BMsGZgfiT7Oqks8VGVHzUbHwqMM0bEDG%2BKjXwp1lKqWAUbpEkXkwlyBLJ6eiQnv2YJ75kJLHDcxLbimn50W%2FZVs0FjmKCN6mARYZH7FXWNvQNshODEHhtLs6ok1ZqZCfxYI7eZIkV04%2FBL0bNlCDC6hUmmW3Rc0TESXhD%2BcCOiV%2BkDWiDWu0Hn%2BQEgsqZdxZGjXaVg1PUIySqR82YHAQGhBRPm5PVDLzBxTTKU71IKopb4BWiYLi0NJE2mWZyXEpu1Z7d5JQzleOUEhu95sXTyAxiTl12wGPVfgDW%2FHU9pz4%2F3JyOXnO8CguZM5kNXOVwUB6fuPOBfomnvEKCv9OaXkwO0RuUD0X4l4nsZImq8BL2PfwLYW6MqTqTVLOIvXiXOO34AzgY%2BtfT2oEGbkAGsNA5jsc%2BRoopm1BulwNXQ0YtGbDSwRny62444v1XetUBrX01nWBVC0XkhVsAbjSG%2Fp54b0B9ORUg%2Bw6NIAjiJyW3HyIDshSalmU0Di35XQx29QaNS1QCvaRHpjtEjTqBGyFVpZtwCttzMa0ocLLY0qgvtIMXj%2Bv6xRHC85u%2BunMLXK%2BMIiv87wGOqUBYN66zEwLzoHSlUF15KTf1WpYeCnj2GDp02noaeTTlT7CaT6hdqKI30PdEtIEX0ls3FOvkU4zSoswiWpKvwC44ZIUly3YogPDRoMlOYclf4jWFZqrXa7CKX9Jq%2BnsxUG%2BifmL9WEAZyzb5I8q%2B3mQelyVwtYl%2FLGw5nihDngbIrf2GMRYXOdjvzbwci308XMguxpNOFLzdsB2hnfbx3i1HAf%2BEGzw&X-Amz-Signature=121dbf76a1322630002b576597ea1981743a53a38f11f257911d26f99b464653&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIEMSLFI%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T140725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3i3HLLetKBKDIBoFz%2BZFulpadh53ft5vYHFSpYDIkBAiEA863o5eage3c77Au0U5WuUE3YortY4rwTBr7tIg4m73wqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJinZ7UADq1pX2lVCrcAxdlrwViIOtsEA8ZEQ%2FCk07oZndy361%2FA%2BRIMKNFs5MrmAuWp18KluH6%2BMsGZgfiT7Oqks8VGVHzUbHwqMM0bEDG%2BKjXwp1lKqWAUbpEkXkwlyBLJ6eiQnv2YJ75kJLHDcxLbimn50W%2FZVs0FjmKCN6mARYZH7FXWNvQNshODEHhtLs6ok1ZqZCfxYI7eZIkV04%2FBL0bNlCDC6hUmmW3Rc0TESXhD%2BcCOiV%2BkDWiDWu0Hn%2BQEgsqZdxZGjXaVg1PUIySqR82YHAQGhBRPm5PVDLzBxTTKU71IKopb4BWiYLi0NJE2mWZyXEpu1Z7d5JQzleOUEhu95sXTyAxiTl12wGPVfgDW%2FHU9pz4%2F3JyOXnO8CguZM5kNXOVwUB6fuPOBfomnvEKCv9OaXkwO0RuUD0X4l4nsZImq8BL2PfwLYW6MqTqTVLOIvXiXOO34AzgY%2BtfT2oEGbkAGsNA5jsc%2BRoopm1BulwNXQ0YtGbDSwRny62444v1XetUBrX01nWBVC0XkhVsAbjSG%2Fp54b0B9ORUg%2Bw6NIAjiJyW3HyIDshSalmU0Di35XQx29QaNS1QCvaRHpjtEjTqBGyFVpZtwCttzMa0ocLLY0qgvtIMXj%2Bv6xRHC85u%2BunMLXK%2BMIiv87wGOqUBYN66zEwLzoHSlUF15KTf1WpYeCnj2GDp02noaeTTlT7CaT6hdqKI30PdEtIEX0ls3FOvkU4zSoswiWpKvwC44ZIUly3YogPDRoMlOYclf4jWFZqrXa7CKX9Jq%2BnsxUG%2BifmL9WEAZyzb5I8q%2B3mQelyVwtYl%2FLGw5nihDngbIrf2GMRYXOdjvzbwci308XMguxpNOFLzdsB2hnfbx3i1HAf%2BEGzw&X-Amz-Signature=71efb70a0c038b7e3eddd2af6de91150971c564883c0d30b4ffff9139deeec89&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIEMSLFI%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T140725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3i3HLLetKBKDIBoFz%2BZFulpadh53ft5vYHFSpYDIkBAiEA863o5eage3c77Au0U5WuUE3YortY4rwTBr7tIg4m73wqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJinZ7UADq1pX2lVCrcAxdlrwViIOtsEA8ZEQ%2FCk07oZndy361%2FA%2BRIMKNFs5MrmAuWp18KluH6%2BMsGZgfiT7Oqks8VGVHzUbHwqMM0bEDG%2BKjXwp1lKqWAUbpEkXkwlyBLJ6eiQnv2YJ75kJLHDcxLbimn50W%2FZVs0FjmKCN6mARYZH7FXWNvQNshODEHhtLs6ok1ZqZCfxYI7eZIkV04%2FBL0bNlCDC6hUmmW3Rc0TESXhD%2BcCOiV%2BkDWiDWu0Hn%2BQEgsqZdxZGjXaVg1PUIySqR82YHAQGhBRPm5PVDLzBxTTKU71IKopb4BWiYLi0NJE2mWZyXEpu1Z7d5JQzleOUEhu95sXTyAxiTl12wGPVfgDW%2FHU9pz4%2F3JyOXnO8CguZM5kNXOVwUB6fuPOBfomnvEKCv9OaXkwO0RuUD0X4l4nsZImq8BL2PfwLYW6MqTqTVLOIvXiXOO34AzgY%2BtfT2oEGbkAGsNA5jsc%2BRoopm1BulwNXQ0YtGbDSwRny62444v1XetUBrX01nWBVC0XkhVsAbjSG%2Fp54b0B9ORUg%2Bw6NIAjiJyW3HyIDshSalmU0Di35XQx29QaNS1QCvaRHpjtEjTqBGyFVpZtwCttzMa0ocLLY0qgvtIMXj%2Bv6xRHC85u%2BunMLXK%2BMIiv87wGOqUBYN66zEwLzoHSlUF15KTf1WpYeCnj2GDp02noaeTTlT7CaT6hdqKI30PdEtIEX0ls3FOvkU4zSoswiWpKvwC44ZIUly3YogPDRoMlOYclf4jWFZqrXa7CKX9Jq%2BnsxUG%2BifmL9WEAZyzb5I8q%2B3mQelyVwtYl%2FLGw5nihDngbIrf2GMRYXOdjvzbwci308XMguxpNOFLzdsB2hnfbx3i1HAf%2BEGzw&X-Amz-Signature=1ab5771951fc9562bd1c5ba05e209dc567e6ecbecf3d00e35b46f10f8e09f31a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIEMSLFI%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T140725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3i3HLLetKBKDIBoFz%2BZFulpadh53ft5vYHFSpYDIkBAiEA863o5eage3c77Au0U5WuUE3YortY4rwTBr7tIg4m73wqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJinZ7UADq1pX2lVCrcAxdlrwViIOtsEA8ZEQ%2FCk07oZndy361%2FA%2BRIMKNFs5MrmAuWp18KluH6%2BMsGZgfiT7Oqks8VGVHzUbHwqMM0bEDG%2BKjXwp1lKqWAUbpEkXkwlyBLJ6eiQnv2YJ75kJLHDcxLbimn50W%2FZVs0FjmKCN6mARYZH7FXWNvQNshODEHhtLs6ok1ZqZCfxYI7eZIkV04%2FBL0bNlCDC6hUmmW3Rc0TESXhD%2BcCOiV%2BkDWiDWu0Hn%2BQEgsqZdxZGjXaVg1PUIySqR82YHAQGhBRPm5PVDLzBxTTKU71IKopb4BWiYLi0NJE2mWZyXEpu1Z7d5JQzleOUEhu95sXTyAxiTl12wGPVfgDW%2FHU9pz4%2F3JyOXnO8CguZM5kNXOVwUB6fuPOBfomnvEKCv9OaXkwO0RuUD0X4l4nsZImq8BL2PfwLYW6MqTqTVLOIvXiXOO34AzgY%2BtfT2oEGbkAGsNA5jsc%2BRoopm1BulwNXQ0YtGbDSwRny62444v1XetUBrX01nWBVC0XkhVsAbjSG%2Fp54b0B9ORUg%2Bw6NIAjiJyW3HyIDshSalmU0Di35XQx29QaNS1QCvaRHpjtEjTqBGyFVpZtwCttzMa0ocLLY0qgvtIMXj%2Bv6xRHC85u%2BunMLXK%2BMIiv87wGOqUBYN66zEwLzoHSlUF15KTf1WpYeCnj2GDp02noaeTTlT7CaT6hdqKI30PdEtIEX0ls3FOvkU4zSoswiWpKvwC44ZIUly3YogPDRoMlOYclf4jWFZqrXa7CKX9Jq%2BnsxUG%2BifmL9WEAZyzb5I8q%2B3mQelyVwtYl%2FLGw5nihDngbIrf2GMRYXOdjvzbwci308XMguxpNOFLzdsB2hnfbx3i1HAf%2BEGzw&X-Amz-Signature=9d1be6ba63b7cda2eb8c8701d805d28ed15085a03ccbb27267198f461908181a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIEMSLFI%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T140725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3i3HLLetKBKDIBoFz%2BZFulpadh53ft5vYHFSpYDIkBAiEA863o5eage3c77Au0U5WuUE3YortY4rwTBr7tIg4m73wqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJinZ7UADq1pX2lVCrcAxdlrwViIOtsEA8ZEQ%2FCk07oZndy361%2FA%2BRIMKNFs5MrmAuWp18KluH6%2BMsGZgfiT7Oqks8VGVHzUbHwqMM0bEDG%2BKjXwp1lKqWAUbpEkXkwlyBLJ6eiQnv2YJ75kJLHDcxLbimn50W%2FZVs0FjmKCN6mARYZH7FXWNvQNshODEHhtLs6ok1ZqZCfxYI7eZIkV04%2FBL0bNlCDC6hUmmW3Rc0TESXhD%2BcCOiV%2BkDWiDWu0Hn%2BQEgsqZdxZGjXaVg1PUIySqR82YHAQGhBRPm5PVDLzBxTTKU71IKopb4BWiYLi0NJE2mWZyXEpu1Z7d5JQzleOUEhu95sXTyAxiTl12wGPVfgDW%2FHU9pz4%2F3JyOXnO8CguZM5kNXOVwUB6fuPOBfomnvEKCv9OaXkwO0RuUD0X4l4nsZImq8BL2PfwLYW6MqTqTVLOIvXiXOO34AzgY%2BtfT2oEGbkAGsNA5jsc%2BRoopm1BulwNXQ0YtGbDSwRny62444v1XetUBrX01nWBVC0XkhVsAbjSG%2Fp54b0B9ORUg%2Bw6NIAjiJyW3HyIDshSalmU0Di35XQx29QaNS1QCvaRHpjtEjTqBGyFVpZtwCttzMa0ocLLY0qgvtIMXj%2Bv6xRHC85u%2BunMLXK%2BMIiv87wGOqUBYN66zEwLzoHSlUF15KTf1WpYeCnj2GDp02noaeTTlT7CaT6hdqKI30PdEtIEX0ls3FOvkU4zSoswiWpKvwC44ZIUly3YogPDRoMlOYclf4jWFZqrXa7CKX9Jq%2BnsxUG%2BifmL9WEAZyzb5I8q%2B3mQelyVwtYl%2FLGw5nihDngbIrf2GMRYXOdjvzbwci308XMguxpNOFLzdsB2hnfbx3i1HAf%2BEGzw&X-Amz-Signature=a932a8d39389b8e2ad411e6bb3fe54789c15175bb9b7977edc0e4f8f1e7c9692&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIEMSLFI%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T140725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3i3HLLetKBKDIBoFz%2BZFulpadh53ft5vYHFSpYDIkBAiEA863o5eage3c77Au0U5WuUE3YortY4rwTBr7tIg4m73wqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJinZ7UADq1pX2lVCrcAxdlrwViIOtsEA8ZEQ%2FCk07oZndy361%2FA%2BRIMKNFs5MrmAuWp18KluH6%2BMsGZgfiT7Oqks8VGVHzUbHwqMM0bEDG%2BKjXwp1lKqWAUbpEkXkwlyBLJ6eiQnv2YJ75kJLHDcxLbimn50W%2FZVs0FjmKCN6mARYZH7FXWNvQNshODEHhtLs6ok1ZqZCfxYI7eZIkV04%2FBL0bNlCDC6hUmmW3Rc0TESXhD%2BcCOiV%2BkDWiDWu0Hn%2BQEgsqZdxZGjXaVg1PUIySqR82YHAQGhBRPm5PVDLzBxTTKU71IKopb4BWiYLi0NJE2mWZyXEpu1Z7d5JQzleOUEhu95sXTyAxiTl12wGPVfgDW%2FHU9pz4%2F3JyOXnO8CguZM5kNXOVwUB6fuPOBfomnvEKCv9OaXkwO0RuUD0X4l4nsZImq8BL2PfwLYW6MqTqTVLOIvXiXOO34AzgY%2BtfT2oEGbkAGsNA5jsc%2BRoopm1BulwNXQ0YtGbDSwRny62444v1XetUBrX01nWBVC0XkhVsAbjSG%2Fp54b0B9ORUg%2Bw6NIAjiJyW3HyIDshSalmU0Di35XQx29QaNS1QCvaRHpjtEjTqBGyFVpZtwCttzMa0ocLLY0qgvtIMXj%2Bv6xRHC85u%2BunMLXK%2BMIiv87wGOqUBYN66zEwLzoHSlUF15KTf1WpYeCnj2GDp02noaeTTlT7CaT6hdqKI30PdEtIEX0ls3FOvkU4zSoswiWpKvwC44ZIUly3YogPDRoMlOYclf4jWFZqrXa7CKX9Jq%2BnsxUG%2BifmL9WEAZyzb5I8q%2B3mQelyVwtYl%2FLGw5nihDngbIrf2GMRYXOdjvzbwci308XMguxpNOFLzdsB2hnfbx3i1HAf%2BEGzw&X-Amz-Signature=633eca5d2f51b91f064143dd8e2d9b0782b88af6c609c3c9599c18311bcda19b&X-Amz-SignedHeaders=host&x-id=GetObject)
