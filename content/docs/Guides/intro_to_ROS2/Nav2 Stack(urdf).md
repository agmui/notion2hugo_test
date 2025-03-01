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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQPFDOMG%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T070708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDnFDrNT%2FMKijaYhhSKs9yW09mj18A%2BfKHBXTQAj%2BR0BgIgOrYXzuzqUp8Otfp%2B4fIJQtnMBdCPkrMrNxEUh4CslnQqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEM5maFISlYE7ksLSrcAwoBfaS1fOsSlJnrqdVsM0q8dj7vXgZpzIBWShHPkyUDsimAVbOznj71Wxbi0Pohb0o2P%2Bys%2BLgwNsyVYJlGKj4Z0EwT%2FSF6FPx4KtwWwA4IB8kuWD4u5GDHJXoNns0a4zP2LyPWd26%2BGGJrgSLlMlY1vy8xqrsj8%2Fj3BSOuZWLzln8wHNlSu%2BY9pHPFEv2P5s37a4spZnNGnvWyribbItFIv3k6ZKJS2mEctiiK%2FQqZBjs%2FTqcbeh8MmObkK1krZjayEspbs1C5H7WvQasfjAAY%2BmnHDfB8RURudMffYl6OmtyZ%2F5vqbIUVybrrabF4n3yDLOoxEYXKUM33JHD1qHNi%2BiTqaG0RUv%2BMU3HZ7MgKNTHLgbws7AuRhKFmhsa2aBYC%2BQg5e9xvUDVx6pmIHaKn1XocbpMKCAD9J9%2FBG7Oi7eOa86qFHWV0ZpKZQ7ghbOK9EtwvxHS05AL7XDCBD%2BaYO5W9NektFQ8eVW82gi%2FfyNqORt8VXILI4AraAZlQpKo9VpjYyEIdgw%2FJbPFDYoCromwvUB6IMirJ8X7kcTuixKl3eLi5pEEICTz0UUwdopGKeYQKHSN7ZYFCBAGTMNLNRvwgI%2FijSR9nsp7zGCzke0BgX1MrmrDb74zeMKmQir4GOqUBy0kjOTz7EVxjjOC5FdSsnBDzJNNS4FNzW0kgGwE3lPuYx1%2BejY22RqN3QgcSgh9ceC5dy7cWOZc553QwrNYPuuppCKF6DwOS6uOLM7IEpP1y0c8bK5qr51siPM8S5wBDjkha6mu1YTTlXwNEDNMyVI9%2BmoDyjQvSpyaFDLGTCYVjDVmhZzrYdXXRVA17CuSTME6Bn673jiAMt30EkJTC4EO9bx1U&X-Amz-Signature=ae2e59241ecfce43bf62fe3d10ae51f2b9fe1b3e27eb4c8f62c5ab8ed8a88300&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQPFDOMG%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T070708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDnFDrNT%2FMKijaYhhSKs9yW09mj18A%2BfKHBXTQAj%2BR0BgIgOrYXzuzqUp8Otfp%2B4fIJQtnMBdCPkrMrNxEUh4CslnQqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEM5maFISlYE7ksLSrcAwoBfaS1fOsSlJnrqdVsM0q8dj7vXgZpzIBWShHPkyUDsimAVbOznj71Wxbi0Pohb0o2P%2Bys%2BLgwNsyVYJlGKj4Z0EwT%2FSF6FPx4KtwWwA4IB8kuWD4u5GDHJXoNns0a4zP2LyPWd26%2BGGJrgSLlMlY1vy8xqrsj8%2Fj3BSOuZWLzln8wHNlSu%2BY9pHPFEv2P5s37a4spZnNGnvWyribbItFIv3k6ZKJS2mEctiiK%2FQqZBjs%2FTqcbeh8MmObkK1krZjayEspbs1C5H7WvQasfjAAY%2BmnHDfB8RURudMffYl6OmtyZ%2F5vqbIUVybrrabF4n3yDLOoxEYXKUM33JHD1qHNi%2BiTqaG0RUv%2BMU3HZ7MgKNTHLgbws7AuRhKFmhsa2aBYC%2BQg5e9xvUDVx6pmIHaKn1XocbpMKCAD9J9%2FBG7Oi7eOa86qFHWV0ZpKZQ7ghbOK9EtwvxHS05AL7XDCBD%2BaYO5W9NektFQ8eVW82gi%2FfyNqORt8VXILI4AraAZlQpKo9VpjYyEIdgw%2FJbPFDYoCromwvUB6IMirJ8X7kcTuixKl3eLi5pEEICTz0UUwdopGKeYQKHSN7ZYFCBAGTMNLNRvwgI%2FijSR9nsp7zGCzke0BgX1MrmrDb74zeMKmQir4GOqUBy0kjOTz7EVxjjOC5FdSsnBDzJNNS4FNzW0kgGwE3lPuYx1%2BejY22RqN3QgcSgh9ceC5dy7cWOZc553QwrNYPuuppCKF6DwOS6uOLM7IEpP1y0c8bK5qr51siPM8S5wBDjkha6mu1YTTlXwNEDNMyVI9%2BmoDyjQvSpyaFDLGTCYVjDVmhZzrYdXXRVA17CuSTME6Bn673jiAMt30EkJTC4EO9bx1U&X-Amz-Signature=15ad5e7551873c16124ae9879c657275f2678c6740a845c79617dc8c79ae289d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQPFDOMG%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T070708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDnFDrNT%2FMKijaYhhSKs9yW09mj18A%2BfKHBXTQAj%2BR0BgIgOrYXzuzqUp8Otfp%2B4fIJQtnMBdCPkrMrNxEUh4CslnQqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEM5maFISlYE7ksLSrcAwoBfaS1fOsSlJnrqdVsM0q8dj7vXgZpzIBWShHPkyUDsimAVbOznj71Wxbi0Pohb0o2P%2Bys%2BLgwNsyVYJlGKj4Z0EwT%2FSF6FPx4KtwWwA4IB8kuWD4u5GDHJXoNns0a4zP2LyPWd26%2BGGJrgSLlMlY1vy8xqrsj8%2Fj3BSOuZWLzln8wHNlSu%2BY9pHPFEv2P5s37a4spZnNGnvWyribbItFIv3k6ZKJS2mEctiiK%2FQqZBjs%2FTqcbeh8MmObkK1krZjayEspbs1C5H7WvQasfjAAY%2BmnHDfB8RURudMffYl6OmtyZ%2F5vqbIUVybrrabF4n3yDLOoxEYXKUM33JHD1qHNi%2BiTqaG0RUv%2BMU3HZ7MgKNTHLgbws7AuRhKFmhsa2aBYC%2BQg5e9xvUDVx6pmIHaKn1XocbpMKCAD9J9%2FBG7Oi7eOa86qFHWV0ZpKZQ7ghbOK9EtwvxHS05AL7XDCBD%2BaYO5W9NektFQ8eVW82gi%2FfyNqORt8VXILI4AraAZlQpKo9VpjYyEIdgw%2FJbPFDYoCromwvUB6IMirJ8X7kcTuixKl3eLi5pEEICTz0UUwdopGKeYQKHSN7ZYFCBAGTMNLNRvwgI%2FijSR9nsp7zGCzke0BgX1MrmrDb74zeMKmQir4GOqUBy0kjOTz7EVxjjOC5FdSsnBDzJNNS4FNzW0kgGwE3lPuYx1%2BejY22RqN3QgcSgh9ceC5dy7cWOZc553QwrNYPuuppCKF6DwOS6uOLM7IEpP1y0c8bK5qr51siPM8S5wBDjkha6mu1YTTlXwNEDNMyVI9%2BmoDyjQvSpyaFDLGTCYVjDVmhZzrYdXXRVA17CuSTME6Bn673jiAMt30EkJTC4EO9bx1U&X-Amz-Signature=877987d6794532668a788b92e70dac29eed4a4b54bc3de9ab32fcd143d12472b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQPFDOMG%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T070708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDnFDrNT%2FMKijaYhhSKs9yW09mj18A%2BfKHBXTQAj%2BR0BgIgOrYXzuzqUp8Otfp%2B4fIJQtnMBdCPkrMrNxEUh4CslnQqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEM5maFISlYE7ksLSrcAwoBfaS1fOsSlJnrqdVsM0q8dj7vXgZpzIBWShHPkyUDsimAVbOznj71Wxbi0Pohb0o2P%2Bys%2BLgwNsyVYJlGKj4Z0EwT%2FSF6FPx4KtwWwA4IB8kuWD4u5GDHJXoNns0a4zP2LyPWd26%2BGGJrgSLlMlY1vy8xqrsj8%2Fj3BSOuZWLzln8wHNlSu%2BY9pHPFEv2P5s37a4spZnNGnvWyribbItFIv3k6ZKJS2mEctiiK%2FQqZBjs%2FTqcbeh8MmObkK1krZjayEspbs1C5H7WvQasfjAAY%2BmnHDfB8RURudMffYl6OmtyZ%2F5vqbIUVybrrabF4n3yDLOoxEYXKUM33JHD1qHNi%2BiTqaG0RUv%2BMU3HZ7MgKNTHLgbws7AuRhKFmhsa2aBYC%2BQg5e9xvUDVx6pmIHaKn1XocbpMKCAD9J9%2FBG7Oi7eOa86qFHWV0ZpKZQ7ghbOK9EtwvxHS05AL7XDCBD%2BaYO5W9NektFQ8eVW82gi%2FfyNqORt8VXILI4AraAZlQpKo9VpjYyEIdgw%2FJbPFDYoCromwvUB6IMirJ8X7kcTuixKl3eLi5pEEICTz0UUwdopGKeYQKHSN7ZYFCBAGTMNLNRvwgI%2FijSR9nsp7zGCzke0BgX1MrmrDb74zeMKmQir4GOqUBy0kjOTz7EVxjjOC5FdSsnBDzJNNS4FNzW0kgGwE3lPuYx1%2BejY22RqN3QgcSgh9ceC5dy7cWOZc553QwrNYPuuppCKF6DwOS6uOLM7IEpP1y0c8bK5qr51siPM8S5wBDjkha6mu1YTTlXwNEDNMyVI9%2BmoDyjQvSpyaFDLGTCYVjDVmhZzrYdXXRVA17CuSTME6Bn673jiAMt30EkJTC4EO9bx1U&X-Amz-Signature=a83ade7c0c0b4b06fc566c8a4015df6474e3ee2416cca3f6fe49a6afb2e72b7f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQPFDOMG%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T070708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDnFDrNT%2FMKijaYhhSKs9yW09mj18A%2BfKHBXTQAj%2BR0BgIgOrYXzuzqUp8Otfp%2B4fIJQtnMBdCPkrMrNxEUh4CslnQqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEM5maFISlYE7ksLSrcAwoBfaS1fOsSlJnrqdVsM0q8dj7vXgZpzIBWShHPkyUDsimAVbOznj71Wxbi0Pohb0o2P%2Bys%2BLgwNsyVYJlGKj4Z0EwT%2FSF6FPx4KtwWwA4IB8kuWD4u5GDHJXoNns0a4zP2LyPWd26%2BGGJrgSLlMlY1vy8xqrsj8%2Fj3BSOuZWLzln8wHNlSu%2BY9pHPFEv2P5s37a4spZnNGnvWyribbItFIv3k6ZKJS2mEctiiK%2FQqZBjs%2FTqcbeh8MmObkK1krZjayEspbs1C5H7WvQasfjAAY%2BmnHDfB8RURudMffYl6OmtyZ%2F5vqbIUVybrrabF4n3yDLOoxEYXKUM33JHD1qHNi%2BiTqaG0RUv%2BMU3HZ7MgKNTHLgbws7AuRhKFmhsa2aBYC%2BQg5e9xvUDVx6pmIHaKn1XocbpMKCAD9J9%2FBG7Oi7eOa86qFHWV0ZpKZQ7ghbOK9EtwvxHS05AL7XDCBD%2BaYO5W9NektFQ8eVW82gi%2FfyNqORt8VXILI4AraAZlQpKo9VpjYyEIdgw%2FJbPFDYoCromwvUB6IMirJ8X7kcTuixKl3eLi5pEEICTz0UUwdopGKeYQKHSN7ZYFCBAGTMNLNRvwgI%2FijSR9nsp7zGCzke0BgX1MrmrDb74zeMKmQir4GOqUBy0kjOTz7EVxjjOC5FdSsnBDzJNNS4FNzW0kgGwE3lPuYx1%2BejY22RqN3QgcSgh9ceC5dy7cWOZc553QwrNYPuuppCKF6DwOS6uOLM7IEpP1y0c8bK5qr51siPM8S5wBDjkha6mu1YTTlXwNEDNMyVI9%2BmoDyjQvSpyaFDLGTCYVjDVmhZzrYdXXRVA17CuSTME6Bn673jiAMt30EkJTC4EO9bx1U&X-Amz-Signature=f1916d342908a81c213ff6120a23c40703b609d95c85834db77c55dd84fbb1ba&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQPFDOMG%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T070708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDnFDrNT%2FMKijaYhhSKs9yW09mj18A%2BfKHBXTQAj%2BR0BgIgOrYXzuzqUp8Otfp%2B4fIJQtnMBdCPkrMrNxEUh4CslnQqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMEM5maFISlYE7ksLSrcAwoBfaS1fOsSlJnrqdVsM0q8dj7vXgZpzIBWShHPkyUDsimAVbOznj71Wxbi0Pohb0o2P%2Bys%2BLgwNsyVYJlGKj4Z0EwT%2FSF6FPx4KtwWwA4IB8kuWD4u5GDHJXoNns0a4zP2LyPWd26%2BGGJrgSLlMlY1vy8xqrsj8%2Fj3BSOuZWLzln8wHNlSu%2BY9pHPFEv2P5s37a4spZnNGnvWyribbItFIv3k6ZKJS2mEctiiK%2FQqZBjs%2FTqcbeh8MmObkK1krZjayEspbs1C5H7WvQasfjAAY%2BmnHDfB8RURudMffYl6OmtyZ%2F5vqbIUVybrrabF4n3yDLOoxEYXKUM33JHD1qHNi%2BiTqaG0RUv%2BMU3HZ7MgKNTHLgbws7AuRhKFmhsa2aBYC%2BQg5e9xvUDVx6pmIHaKn1XocbpMKCAD9J9%2FBG7Oi7eOa86qFHWV0ZpKZQ7ghbOK9EtwvxHS05AL7XDCBD%2BaYO5W9NektFQ8eVW82gi%2FfyNqORt8VXILI4AraAZlQpKo9VpjYyEIdgw%2FJbPFDYoCromwvUB6IMirJ8X7kcTuixKl3eLi5pEEICTz0UUwdopGKeYQKHSN7ZYFCBAGTMNLNRvwgI%2FijSR9nsp7zGCzke0BgX1MrmrDb74zeMKmQir4GOqUBy0kjOTz7EVxjjOC5FdSsnBDzJNNS4FNzW0kgGwE3lPuYx1%2BejY22RqN3QgcSgh9ceC5dy7cWOZc553QwrNYPuuppCKF6DwOS6uOLM7IEpP1y0c8bK5qr51siPM8S5wBDjkha6mu1YTTlXwNEDNMyVI9%2BmoDyjQvSpyaFDLGTCYVjDVmhZzrYdXXRVA17CuSTME6Bn673jiAMt30EkJTC4EO9bx1U&X-Amz-Signature=b649405e245936dfdbfc17846d832ab3c149d6e0f4a4564395c0ad9fc26dc19f&X-Amz-SignedHeaders=host&x-id=GetObject)
