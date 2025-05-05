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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUIB5IA6%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHg8M3DmzfaRBrdq60Cc15ul%2BaWksjG5VXQHsLDRu6rWAiAug27FhHbmDrdJ9KKQYyd3QgRfSP4svL2wBPpepF9uNir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMpCB%2FNuZII93GQyC%2FKtwDhMhnIsDwHodDtJKoW%2Be4EgaRmL%2BM8jwAo%2B20r7EYZsIVOjkhJBt3%2Fwe1836jsO12%2FkqK5Qwl6%2BWFORetqLj10GnTcb5NNy3fLxJrgVIhY355%2BCxBqIjdGYbetPIu9q%2BEgZFLkNYPhRIO%2FeKAMeOVPX8rfpkU2w4323LPvf0gBnHFr1%2FI8oZD5nc992D2VBszXlV%2B0s0Z7WXrcikSx4FIUHCddo0YM4leTbV4GykHt78cy3kTFndK6hA6LHU2BDOOORm%2F3geAzyaSdlgrBHRlhG%2FmBwkkTZI6jD8CxN4TOUIzQwSacS4s2EDnEv%2B%2BCoboVw4QNy0GgXpkNzbWsvZekJbVsXfxKgdk8ZxPMdfkj9wbqDAJg34CLKdpW%2FOiZl%2Bws1Hs9ZS9ADlelWoU8EUxgCxJ0sbotzMdzPFzDtupq7QlkCW%2FTDu3UTPnZHF5zWaW3jLL62Lz9LmtD7ZdGL4dx1fWpGUrjwvhaDTQDa59CtwlxQ6YnFMET15hFwnb4OUHbXbUzPsGPIzQuABkgq8DMyZorqylDQ%2BqyCywCgcxXBcT35KZzLUIOl9omMjTRRqCGZronl%2BmMAzmGEGXIKVWai%2Fqs8Y%2Fl%2BpZVkgC2QRMNUM4PoSQbLx43ocllKowksnjwAY6pgFXBKQ55Ex61NDtCLH4UzWVYEOYbYWSbjYa%2FfL2a1HBK1%2BbBtC5kfMH1e0QvvbLwCAFG%2BbM83h8FhvU2rSKB3SLWPWbws7zwXXjUcMuGpI0djx0cW5Qdb4ox6UN%2F8RRsuFoY6Y28QrJztdOmMajJKEeaSIc5dya7p2VCJbdXTO5a0ybJF6E0KHikTfawSeTiT51RndKdx1vbIqma7wBnKugvvy51Ici&X-Amz-Signature=ea89a5ad822ffe57d87068ed7b86cd521d39bcf0e7356555b4e4591f0ac5e60c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUIB5IA6%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHg8M3DmzfaRBrdq60Cc15ul%2BaWksjG5VXQHsLDRu6rWAiAug27FhHbmDrdJ9KKQYyd3QgRfSP4svL2wBPpepF9uNir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMpCB%2FNuZII93GQyC%2FKtwDhMhnIsDwHodDtJKoW%2Be4EgaRmL%2BM8jwAo%2B20r7EYZsIVOjkhJBt3%2Fwe1836jsO12%2FkqK5Qwl6%2BWFORetqLj10GnTcb5NNy3fLxJrgVIhY355%2BCxBqIjdGYbetPIu9q%2BEgZFLkNYPhRIO%2FeKAMeOVPX8rfpkU2w4323LPvf0gBnHFr1%2FI8oZD5nc992D2VBszXlV%2B0s0Z7WXrcikSx4FIUHCddo0YM4leTbV4GykHt78cy3kTFndK6hA6LHU2BDOOORm%2F3geAzyaSdlgrBHRlhG%2FmBwkkTZI6jD8CxN4TOUIzQwSacS4s2EDnEv%2B%2BCoboVw4QNy0GgXpkNzbWsvZekJbVsXfxKgdk8ZxPMdfkj9wbqDAJg34CLKdpW%2FOiZl%2Bws1Hs9ZS9ADlelWoU8EUxgCxJ0sbotzMdzPFzDtupq7QlkCW%2FTDu3UTPnZHF5zWaW3jLL62Lz9LmtD7ZdGL4dx1fWpGUrjwvhaDTQDa59CtwlxQ6YnFMET15hFwnb4OUHbXbUzPsGPIzQuABkgq8DMyZorqylDQ%2BqyCywCgcxXBcT35KZzLUIOl9omMjTRRqCGZronl%2BmMAzmGEGXIKVWai%2Fqs8Y%2Fl%2BpZVkgC2QRMNUM4PoSQbLx43ocllKowksnjwAY6pgFXBKQ55Ex61NDtCLH4UzWVYEOYbYWSbjYa%2FfL2a1HBK1%2BbBtC5kfMH1e0QvvbLwCAFG%2BbM83h8FhvU2rSKB3SLWPWbws7zwXXjUcMuGpI0djx0cW5Qdb4ox6UN%2F8RRsuFoY6Y28QrJztdOmMajJKEeaSIc5dya7p2VCJbdXTO5a0ybJF6E0KHikTfawSeTiT51RndKdx1vbIqma7wBnKugvvy51Ici&X-Amz-Signature=70e7ec3680663a46d39548081506422aa77c07c96ca9001b288272841dcaff13&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUIB5IA6%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHg8M3DmzfaRBrdq60Cc15ul%2BaWksjG5VXQHsLDRu6rWAiAug27FhHbmDrdJ9KKQYyd3QgRfSP4svL2wBPpepF9uNir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMpCB%2FNuZII93GQyC%2FKtwDhMhnIsDwHodDtJKoW%2Be4EgaRmL%2BM8jwAo%2B20r7EYZsIVOjkhJBt3%2Fwe1836jsO12%2FkqK5Qwl6%2BWFORetqLj10GnTcb5NNy3fLxJrgVIhY355%2BCxBqIjdGYbetPIu9q%2BEgZFLkNYPhRIO%2FeKAMeOVPX8rfpkU2w4323LPvf0gBnHFr1%2FI8oZD5nc992D2VBszXlV%2B0s0Z7WXrcikSx4FIUHCddo0YM4leTbV4GykHt78cy3kTFndK6hA6LHU2BDOOORm%2F3geAzyaSdlgrBHRlhG%2FmBwkkTZI6jD8CxN4TOUIzQwSacS4s2EDnEv%2B%2BCoboVw4QNy0GgXpkNzbWsvZekJbVsXfxKgdk8ZxPMdfkj9wbqDAJg34CLKdpW%2FOiZl%2Bws1Hs9ZS9ADlelWoU8EUxgCxJ0sbotzMdzPFzDtupq7QlkCW%2FTDu3UTPnZHF5zWaW3jLL62Lz9LmtD7ZdGL4dx1fWpGUrjwvhaDTQDa59CtwlxQ6YnFMET15hFwnb4OUHbXbUzPsGPIzQuABkgq8DMyZorqylDQ%2BqyCywCgcxXBcT35KZzLUIOl9omMjTRRqCGZronl%2BmMAzmGEGXIKVWai%2Fqs8Y%2Fl%2BpZVkgC2QRMNUM4PoSQbLx43ocllKowksnjwAY6pgFXBKQ55Ex61NDtCLH4UzWVYEOYbYWSbjYa%2FfL2a1HBK1%2BbBtC5kfMH1e0QvvbLwCAFG%2BbM83h8FhvU2rSKB3SLWPWbws7zwXXjUcMuGpI0djx0cW5Qdb4ox6UN%2F8RRsuFoY6Y28QrJztdOmMajJKEeaSIc5dya7p2VCJbdXTO5a0ybJF6E0KHikTfawSeTiT51RndKdx1vbIqma7wBnKugvvy51Ici&X-Amz-Signature=d6d4ccb0be3afb14f56086eeff888b9e667700ddbcc4633bb22b8824b785b5b4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUIB5IA6%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHg8M3DmzfaRBrdq60Cc15ul%2BaWksjG5VXQHsLDRu6rWAiAug27FhHbmDrdJ9KKQYyd3QgRfSP4svL2wBPpepF9uNir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMpCB%2FNuZII93GQyC%2FKtwDhMhnIsDwHodDtJKoW%2Be4EgaRmL%2BM8jwAo%2B20r7EYZsIVOjkhJBt3%2Fwe1836jsO12%2FkqK5Qwl6%2BWFORetqLj10GnTcb5NNy3fLxJrgVIhY355%2BCxBqIjdGYbetPIu9q%2BEgZFLkNYPhRIO%2FeKAMeOVPX8rfpkU2w4323LPvf0gBnHFr1%2FI8oZD5nc992D2VBszXlV%2B0s0Z7WXrcikSx4FIUHCddo0YM4leTbV4GykHt78cy3kTFndK6hA6LHU2BDOOORm%2F3geAzyaSdlgrBHRlhG%2FmBwkkTZI6jD8CxN4TOUIzQwSacS4s2EDnEv%2B%2BCoboVw4QNy0GgXpkNzbWsvZekJbVsXfxKgdk8ZxPMdfkj9wbqDAJg34CLKdpW%2FOiZl%2Bws1Hs9ZS9ADlelWoU8EUxgCxJ0sbotzMdzPFzDtupq7QlkCW%2FTDu3UTPnZHF5zWaW3jLL62Lz9LmtD7ZdGL4dx1fWpGUrjwvhaDTQDa59CtwlxQ6YnFMET15hFwnb4OUHbXbUzPsGPIzQuABkgq8DMyZorqylDQ%2BqyCywCgcxXBcT35KZzLUIOl9omMjTRRqCGZronl%2BmMAzmGEGXIKVWai%2Fqs8Y%2Fl%2BpZVkgC2QRMNUM4PoSQbLx43ocllKowksnjwAY6pgFXBKQ55Ex61NDtCLH4UzWVYEOYbYWSbjYa%2FfL2a1HBK1%2BbBtC5kfMH1e0QvvbLwCAFG%2BbM83h8FhvU2rSKB3SLWPWbws7zwXXjUcMuGpI0djx0cW5Qdb4ox6UN%2F8RRsuFoY6Y28QrJztdOmMajJKEeaSIc5dya7p2VCJbdXTO5a0ybJF6E0KHikTfawSeTiT51RndKdx1vbIqma7wBnKugvvy51Ici&X-Amz-Signature=c1754f0b400d32fd688c741b68139d0da506d5a2aa8d898afc2c530a791c225f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUIB5IA6%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHg8M3DmzfaRBrdq60Cc15ul%2BaWksjG5VXQHsLDRu6rWAiAug27FhHbmDrdJ9KKQYyd3QgRfSP4svL2wBPpepF9uNir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMpCB%2FNuZII93GQyC%2FKtwDhMhnIsDwHodDtJKoW%2Be4EgaRmL%2BM8jwAo%2B20r7EYZsIVOjkhJBt3%2Fwe1836jsO12%2FkqK5Qwl6%2BWFORetqLj10GnTcb5NNy3fLxJrgVIhY355%2BCxBqIjdGYbetPIu9q%2BEgZFLkNYPhRIO%2FeKAMeOVPX8rfpkU2w4323LPvf0gBnHFr1%2FI8oZD5nc992D2VBszXlV%2B0s0Z7WXrcikSx4FIUHCddo0YM4leTbV4GykHt78cy3kTFndK6hA6LHU2BDOOORm%2F3geAzyaSdlgrBHRlhG%2FmBwkkTZI6jD8CxN4TOUIzQwSacS4s2EDnEv%2B%2BCoboVw4QNy0GgXpkNzbWsvZekJbVsXfxKgdk8ZxPMdfkj9wbqDAJg34CLKdpW%2FOiZl%2Bws1Hs9ZS9ADlelWoU8EUxgCxJ0sbotzMdzPFzDtupq7QlkCW%2FTDu3UTPnZHF5zWaW3jLL62Lz9LmtD7ZdGL4dx1fWpGUrjwvhaDTQDa59CtwlxQ6YnFMET15hFwnb4OUHbXbUzPsGPIzQuABkgq8DMyZorqylDQ%2BqyCywCgcxXBcT35KZzLUIOl9omMjTRRqCGZronl%2BmMAzmGEGXIKVWai%2Fqs8Y%2Fl%2BpZVkgC2QRMNUM4PoSQbLx43ocllKowksnjwAY6pgFXBKQ55Ex61NDtCLH4UzWVYEOYbYWSbjYa%2FfL2a1HBK1%2BbBtC5kfMH1e0QvvbLwCAFG%2BbM83h8FhvU2rSKB3SLWPWbws7zwXXjUcMuGpI0djx0cW5Qdb4ox6UN%2F8RRsuFoY6Y28QrJztdOmMajJKEeaSIc5dya7p2VCJbdXTO5a0ybJF6E0KHikTfawSeTiT51RndKdx1vbIqma7wBnKugvvy51Ici&X-Amz-Signature=c0c8e166a6d562829de555c0acef7c2d4f385333f265ee705656b20e61b420de&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUIB5IA6%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T170746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHg8M3DmzfaRBrdq60Cc15ul%2BaWksjG5VXQHsLDRu6rWAiAug27FhHbmDrdJ9KKQYyd3QgRfSP4svL2wBPpepF9uNir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMpCB%2FNuZII93GQyC%2FKtwDhMhnIsDwHodDtJKoW%2Be4EgaRmL%2BM8jwAo%2B20r7EYZsIVOjkhJBt3%2Fwe1836jsO12%2FkqK5Qwl6%2BWFORetqLj10GnTcb5NNy3fLxJrgVIhY355%2BCxBqIjdGYbetPIu9q%2BEgZFLkNYPhRIO%2FeKAMeOVPX8rfpkU2w4323LPvf0gBnHFr1%2FI8oZD5nc992D2VBszXlV%2B0s0Z7WXrcikSx4FIUHCddo0YM4leTbV4GykHt78cy3kTFndK6hA6LHU2BDOOORm%2F3geAzyaSdlgrBHRlhG%2FmBwkkTZI6jD8CxN4TOUIzQwSacS4s2EDnEv%2B%2BCoboVw4QNy0GgXpkNzbWsvZekJbVsXfxKgdk8ZxPMdfkj9wbqDAJg34CLKdpW%2FOiZl%2Bws1Hs9ZS9ADlelWoU8EUxgCxJ0sbotzMdzPFzDtupq7QlkCW%2FTDu3UTPnZHF5zWaW3jLL62Lz9LmtD7ZdGL4dx1fWpGUrjwvhaDTQDa59CtwlxQ6YnFMET15hFwnb4OUHbXbUzPsGPIzQuABkgq8DMyZorqylDQ%2BqyCywCgcxXBcT35KZzLUIOl9omMjTRRqCGZronl%2BmMAzmGEGXIKVWai%2Fqs8Y%2Fl%2BpZVkgC2QRMNUM4PoSQbLx43ocllKowksnjwAY6pgFXBKQ55Ex61NDtCLH4UzWVYEOYbYWSbjYa%2FfL2a1HBK1%2BbBtC5kfMH1e0QvvbLwCAFG%2BbM83h8FhvU2rSKB3SLWPWbws7zwXXjUcMuGpI0djx0cW5Qdb4ox6UN%2F8RRsuFoY6Y28QrJztdOmMajJKEeaSIc5dya7p2VCJbdXTO5a0ybJF6E0KHikTfawSeTiT51RndKdx1vbIqma7wBnKugvvy51Ici&X-Amz-Signature=64a5a9db8d50110ce0c755b0fbb21b493a51542bccc4374c707e1a53bc80b0fc&X-Amz-SignedHeaders=host&x-id=GetObject)
