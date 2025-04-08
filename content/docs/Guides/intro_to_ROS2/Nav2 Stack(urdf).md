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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ROJGZJU%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T181044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDD8nK9%2FZFbzTlcumLmIIf42Hb7oqSO1Vg%2FVhvwRzwoDAiBITYT3TN6MZAwSbT%2BZDk4xf%2BEzPQgGoiFOpendYuFPJir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMd4DBN0TAiuI5HCxSKtwDvJ%2F0%2B0ka6q8xtygTNyh22UG1ma2qDevCzFRy%2B0mCphgzpXuJbkLDbeXnoDaNSYobZ5C%2Bt5087S3uYK520Hn6tlvUoRhIwW5D%2BRz0yDWl8Sd4ak1yRzUNW%2BosYvfC1XqcU6kXv%2FNiKaDy4kK98EURxPoghBMeJ6MYSYqMmrVLdcpGB3r%2Bz7y22B1949kQ9OuiqiPvVDUlieBjm1%2Bpq8ebzFn5TpXpyovbJXTV9b%2FIq1lLBG6pzbihPI7PbEszHp%2By87T7D8htGrsY66Acr2bTd8af6sIKPOMdjbDkLLV8dQDLiHD%2FmCGS2VXqMR1nMm%2Bm3USyo%2BlFYVOHk3ieYJQ93vF8Taw0ciukLLKWCpEx8RRuZLaPPU2ydgUdTRrShgC%2BHGvJRjn%2FLwLlkLnf566SOlvcc6Jr9gAXxlGhrbvx9pZskq19XJ8IzgpPv%2BcNTQIu3EfcofYdGP0M6HtQovusdkfdJeK5T6Uzac9TYnVbIkJlwJ9yfTkihOum8Kc8EZ4A0lgGvVH4aoUwRLhYxUbLDhJbRv1FJjai2e%2Bc0eIxVjqkYB%2B48CczsHXzOmNJIocOKEXhjmIY1HWXVtGabeV3VxeuYBrzDZvLZRSUVU8BVFx3vGF4M09XIzNygUIw3LrVvwY6pgFsrkk8I9ecdgUfRgt%2BPLhUEttaPoqMhWanuuMneMuP1OS6uEprvu0CKm36qxua8Jodwc%2FX%2FTap8kPaOTuRb2lX1xnsvKkKpIXPGVmA2ggMeQQzLtE0A%2FwF8Uua2RZV%2FMQAMc%2Brkimr6bDBDpl8rygVyjOQdK6yuS1l2RV2PbLEd4AC5tU5i7ahNDW7FvyhECGfBgJU5eabRHsLixC73myXFi1kdPK9&X-Amz-Signature=ffb7821718af98c763bd52e743a606d977d41b62ca11c1746ead83480ecab410&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ROJGZJU%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T181044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDD8nK9%2FZFbzTlcumLmIIf42Hb7oqSO1Vg%2FVhvwRzwoDAiBITYT3TN6MZAwSbT%2BZDk4xf%2BEzPQgGoiFOpendYuFPJir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMd4DBN0TAiuI5HCxSKtwDvJ%2F0%2B0ka6q8xtygTNyh22UG1ma2qDevCzFRy%2B0mCphgzpXuJbkLDbeXnoDaNSYobZ5C%2Bt5087S3uYK520Hn6tlvUoRhIwW5D%2BRz0yDWl8Sd4ak1yRzUNW%2BosYvfC1XqcU6kXv%2FNiKaDy4kK98EURxPoghBMeJ6MYSYqMmrVLdcpGB3r%2Bz7y22B1949kQ9OuiqiPvVDUlieBjm1%2Bpq8ebzFn5TpXpyovbJXTV9b%2FIq1lLBG6pzbihPI7PbEszHp%2By87T7D8htGrsY66Acr2bTd8af6sIKPOMdjbDkLLV8dQDLiHD%2FmCGS2VXqMR1nMm%2Bm3USyo%2BlFYVOHk3ieYJQ93vF8Taw0ciukLLKWCpEx8RRuZLaPPU2ydgUdTRrShgC%2BHGvJRjn%2FLwLlkLnf566SOlvcc6Jr9gAXxlGhrbvx9pZskq19XJ8IzgpPv%2BcNTQIu3EfcofYdGP0M6HtQovusdkfdJeK5T6Uzac9TYnVbIkJlwJ9yfTkihOum8Kc8EZ4A0lgGvVH4aoUwRLhYxUbLDhJbRv1FJjai2e%2Bc0eIxVjqkYB%2B48CczsHXzOmNJIocOKEXhjmIY1HWXVtGabeV3VxeuYBrzDZvLZRSUVU8BVFx3vGF4M09XIzNygUIw3LrVvwY6pgFsrkk8I9ecdgUfRgt%2BPLhUEttaPoqMhWanuuMneMuP1OS6uEprvu0CKm36qxua8Jodwc%2FX%2FTap8kPaOTuRb2lX1xnsvKkKpIXPGVmA2ggMeQQzLtE0A%2FwF8Uua2RZV%2FMQAMc%2Brkimr6bDBDpl8rygVyjOQdK6yuS1l2RV2PbLEd4AC5tU5i7ahNDW7FvyhECGfBgJU5eabRHsLixC73myXFi1kdPK9&X-Amz-Signature=e9372864698f07e0af3606c5094be009c3acb458298625ccb7fa701c6605b21f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ROJGZJU%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T181044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDD8nK9%2FZFbzTlcumLmIIf42Hb7oqSO1Vg%2FVhvwRzwoDAiBITYT3TN6MZAwSbT%2BZDk4xf%2BEzPQgGoiFOpendYuFPJir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMd4DBN0TAiuI5HCxSKtwDvJ%2F0%2B0ka6q8xtygTNyh22UG1ma2qDevCzFRy%2B0mCphgzpXuJbkLDbeXnoDaNSYobZ5C%2Bt5087S3uYK520Hn6tlvUoRhIwW5D%2BRz0yDWl8Sd4ak1yRzUNW%2BosYvfC1XqcU6kXv%2FNiKaDy4kK98EURxPoghBMeJ6MYSYqMmrVLdcpGB3r%2Bz7y22B1949kQ9OuiqiPvVDUlieBjm1%2Bpq8ebzFn5TpXpyovbJXTV9b%2FIq1lLBG6pzbihPI7PbEszHp%2By87T7D8htGrsY66Acr2bTd8af6sIKPOMdjbDkLLV8dQDLiHD%2FmCGS2VXqMR1nMm%2Bm3USyo%2BlFYVOHk3ieYJQ93vF8Taw0ciukLLKWCpEx8RRuZLaPPU2ydgUdTRrShgC%2BHGvJRjn%2FLwLlkLnf566SOlvcc6Jr9gAXxlGhrbvx9pZskq19XJ8IzgpPv%2BcNTQIu3EfcofYdGP0M6HtQovusdkfdJeK5T6Uzac9TYnVbIkJlwJ9yfTkihOum8Kc8EZ4A0lgGvVH4aoUwRLhYxUbLDhJbRv1FJjai2e%2Bc0eIxVjqkYB%2B48CczsHXzOmNJIocOKEXhjmIY1HWXVtGabeV3VxeuYBrzDZvLZRSUVU8BVFx3vGF4M09XIzNygUIw3LrVvwY6pgFsrkk8I9ecdgUfRgt%2BPLhUEttaPoqMhWanuuMneMuP1OS6uEprvu0CKm36qxua8Jodwc%2FX%2FTap8kPaOTuRb2lX1xnsvKkKpIXPGVmA2ggMeQQzLtE0A%2FwF8Uua2RZV%2FMQAMc%2Brkimr6bDBDpl8rygVyjOQdK6yuS1l2RV2PbLEd4AC5tU5i7ahNDW7FvyhECGfBgJU5eabRHsLixC73myXFi1kdPK9&X-Amz-Signature=9da851a6a7aa387338cd906230969a44a3e83130992a11c48f1a842003e67952&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ROJGZJU%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T181044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDD8nK9%2FZFbzTlcumLmIIf42Hb7oqSO1Vg%2FVhvwRzwoDAiBITYT3TN6MZAwSbT%2BZDk4xf%2BEzPQgGoiFOpendYuFPJir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMd4DBN0TAiuI5HCxSKtwDvJ%2F0%2B0ka6q8xtygTNyh22UG1ma2qDevCzFRy%2B0mCphgzpXuJbkLDbeXnoDaNSYobZ5C%2Bt5087S3uYK520Hn6tlvUoRhIwW5D%2BRz0yDWl8Sd4ak1yRzUNW%2BosYvfC1XqcU6kXv%2FNiKaDy4kK98EURxPoghBMeJ6MYSYqMmrVLdcpGB3r%2Bz7y22B1949kQ9OuiqiPvVDUlieBjm1%2Bpq8ebzFn5TpXpyovbJXTV9b%2FIq1lLBG6pzbihPI7PbEszHp%2By87T7D8htGrsY66Acr2bTd8af6sIKPOMdjbDkLLV8dQDLiHD%2FmCGS2VXqMR1nMm%2Bm3USyo%2BlFYVOHk3ieYJQ93vF8Taw0ciukLLKWCpEx8RRuZLaPPU2ydgUdTRrShgC%2BHGvJRjn%2FLwLlkLnf566SOlvcc6Jr9gAXxlGhrbvx9pZskq19XJ8IzgpPv%2BcNTQIu3EfcofYdGP0M6HtQovusdkfdJeK5T6Uzac9TYnVbIkJlwJ9yfTkihOum8Kc8EZ4A0lgGvVH4aoUwRLhYxUbLDhJbRv1FJjai2e%2Bc0eIxVjqkYB%2B48CczsHXzOmNJIocOKEXhjmIY1HWXVtGabeV3VxeuYBrzDZvLZRSUVU8BVFx3vGF4M09XIzNygUIw3LrVvwY6pgFsrkk8I9ecdgUfRgt%2BPLhUEttaPoqMhWanuuMneMuP1OS6uEprvu0CKm36qxua8Jodwc%2FX%2FTap8kPaOTuRb2lX1xnsvKkKpIXPGVmA2ggMeQQzLtE0A%2FwF8Uua2RZV%2FMQAMc%2Brkimr6bDBDpl8rygVyjOQdK6yuS1l2RV2PbLEd4AC5tU5i7ahNDW7FvyhECGfBgJU5eabRHsLixC73myXFi1kdPK9&X-Amz-Signature=2e039bca8bee16964f7004cffcb4a716f195ae01df212861436a27290d384a5c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ROJGZJU%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T181044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDD8nK9%2FZFbzTlcumLmIIf42Hb7oqSO1Vg%2FVhvwRzwoDAiBITYT3TN6MZAwSbT%2BZDk4xf%2BEzPQgGoiFOpendYuFPJir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMd4DBN0TAiuI5HCxSKtwDvJ%2F0%2B0ka6q8xtygTNyh22UG1ma2qDevCzFRy%2B0mCphgzpXuJbkLDbeXnoDaNSYobZ5C%2Bt5087S3uYK520Hn6tlvUoRhIwW5D%2BRz0yDWl8Sd4ak1yRzUNW%2BosYvfC1XqcU6kXv%2FNiKaDy4kK98EURxPoghBMeJ6MYSYqMmrVLdcpGB3r%2Bz7y22B1949kQ9OuiqiPvVDUlieBjm1%2Bpq8ebzFn5TpXpyovbJXTV9b%2FIq1lLBG6pzbihPI7PbEszHp%2By87T7D8htGrsY66Acr2bTd8af6sIKPOMdjbDkLLV8dQDLiHD%2FmCGS2VXqMR1nMm%2Bm3USyo%2BlFYVOHk3ieYJQ93vF8Taw0ciukLLKWCpEx8RRuZLaPPU2ydgUdTRrShgC%2BHGvJRjn%2FLwLlkLnf566SOlvcc6Jr9gAXxlGhrbvx9pZskq19XJ8IzgpPv%2BcNTQIu3EfcofYdGP0M6HtQovusdkfdJeK5T6Uzac9TYnVbIkJlwJ9yfTkihOum8Kc8EZ4A0lgGvVH4aoUwRLhYxUbLDhJbRv1FJjai2e%2Bc0eIxVjqkYB%2B48CczsHXzOmNJIocOKEXhjmIY1HWXVtGabeV3VxeuYBrzDZvLZRSUVU8BVFx3vGF4M09XIzNygUIw3LrVvwY6pgFsrkk8I9ecdgUfRgt%2BPLhUEttaPoqMhWanuuMneMuP1OS6uEprvu0CKm36qxua8Jodwc%2FX%2FTap8kPaOTuRb2lX1xnsvKkKpIXPGVmA2ggMeQQzLtE0A%2FwF8Uua2RZV%2FMQAMc%2Brkimr6bDBDpl8rygVyjOQdK6yuS1l2RV2PbLEd4AC5tU5i7ahNDW7FvyhECGfBgJU5eabRHsLixC73myXFi1kdPK9&X-Amz-Signature=ce45ebf53bd53684484c249467d47ec9dd4136fc56422d01c9e80eab83886bb3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ROJGZJU%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T181044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDD8nK9%2FZFbzTlcumLmIIf42Hb7oqSO1Vg%2FVhvwRzwoDAiBITYT3TN6MZAwSbT%2BZDk4xf%2BEzPQgGoiFOpendYuFPJir%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMd4DBN0TAiuI5HCxSKtwDvJ%2F0%2B0ka6q8xtygTNyh22UG1ma2qDevCzFRy%2B0mCphgzpXuJbkLDbeXnoDaNSYobZ5C%2Bt5087S3uYK520Hn6tlvUoRhIwW5D%2BRz0yDWl8Sd4ak1yRzUNW%2BosYvfC1XqcU6kXv%2FNiKaDy4kK98EURxPoghBMeJ6MYSYqMmrVLdcpGB3r%2Bz7y22B1949kQ9OuiqiPvVDUlieBjm1%2Bpq8ebzFn5TpXpyovbJXTV9b%2FIq1lLBG6pzbihPI7PbEszHp%2By87T7D8htGrsY66Acr2bTd8af6sIKPOMdjbDkLLV8dQDLiHD%2FmCGS2VXqMR1nMm%2Bm3USyo%2BlFYVOHk3ieYJQ93vF8Taw0ciukLLKWCpEx8RRuZLaPPU2ydgUdTRrShgC%2BHGvJRjn%2FLwLlkLnf566SOlvcc6Jr9gAXxlGhrbvx9pZskq19XJ8IzgpPv%2BcNTQIu3EfcofYdGP0M6HtQovusdkfdJeK5T6Uzac9TYnVbIkJlwJ9yfTkihOum8Kc8EZ4A0lgGvVH4aoUwRLhYxUbLDhJbRv1FJjai2e%2Bc0eIxVjqkYB%2B48CczsHXzOmNJIocOKEXhjmIY1HWXVtGabeV3VxeuYBrzDZvLZRSUVU8BVFx3vGF4M09XIzNygUIw3LrVvwY6pgFsrkk8I9ecdgUfRgt%2BPLhUEttaPoqMhWanuuMneMuP1OS6uEprvu0CKm36qxua8Jodwc%2FX%2FTap8kPaOTuRb2lX1xnsvKkKpIXPGVmA2ggMeQQzLtE0A%2FwF8Uua2RZV%2FMQAMc%2Brkimr6bDBDpl8rygVyjOQdK6yuS1l2RV2PbLEd4AC5tU5i7ahNDW7FvyhECGfBgJU5eabRHsLixC73myXFi1kdPK9&X-Amz-Signature=ebe5abb101e39bdd6c57c6d99177b41298181dd78142ca0fad5ab1e988ee2d2c&X-Amz-SignedHeaders=host&x-id=GetObject)
