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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MR722GD%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T121514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3%2FMsh8%2FmA3Spc9POUDDeiNBo5QYv9skAfGIF5lCuo5AIgeLCIlW0rlO2%2BrL1xhWOQtWU8U7aYVZavfZoLf7UxnKIq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDEfZi%2BmHtw4KDGmM%2FyrcA47OPMNeuQjRP0z34qwVUCHCmRHREsxXbSkvoUSVM0MWrcppstB8REXbMVKgI9jk%2Bd7AIqeWEVkETnQwBbr5xaUfzeXybJ3HjoBxus%2Fl6ZmiXy2YP0EmiXtnwRUlMYF3paJ7KkdRduwFny0wZwr8wVpv5OUVwoVfVf58ByL9KYvKuKtunv10llLdscsezyc54zfIKEd346svwbiHDbufk2X8vs2a71bLt9K9M2SV5vJOP9iT0iFb94y2b16VRY5J5jWExkSFthzG7aaOpzc09eI%2FUcdMw3KAmI2tiFAYqBRDGC2IoWCiVB0HvjCoCOpaaUS1bl%2B%2Fe7Xd5ryOnvk%2BDMBK5XR9S1CmzQBj7NreNoYYuVDA5vBF1lnqUgF5UP3Fpq%2BfS3CSeJhOvYef6nCVv5qArOOEJQwnUJ6zH09VUuPmEQDbzVK6synxsf1ddkjcChMQssIw5PRlJVY%2BEuwgvHeIi7PQUrSuAfkdGGuJ3mmIN3CJZTUqsydlnKfcLFMKe92uzSV51DbRFu8EpGIu1tz00WqohT5GEMg6j%2BAwaLpRPVcbXZgbQrriN1Vf8OA%2FdJecCxGhFruym%2BuwGUIIANCs%2FXRWtovjoJhCWg2CLSpKQ1tF8bCKzk%2FLxfSsMIyr%2Fr8GOqUBtSzqMtGj7KzeMAsi2izWhBRUvTp7KLoWceccVR7vfzKuc755jAWYGbsC26NZMa974u9yAKlTX7%2FYlgUOJ30SFfRKz9B8w2ZkSh8ow%2FAaFWscw3OAIVR8PtK67IpUsQKl%2F6RCpI6cPkOPb58JLg35j%2FCNO7pn%2BKfoBC2954jyo%2BveT4l9Lp4agj%2F9M3zHGFsMMocLtg7XvvX7v6q4i124Xuj9OrGz&X-Amz-Signature=33062c1baa1c84c09129086c8019526231083a0e8284f7091bd1c2b2adfd3662&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MR722GD%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T121514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3%2FMsh8%2FmA3Spc9POUDDeiNBo5QYv9skAfGIF5lCuo5AIgeLCIlW0rlO2%2BrL1xhWOQtWU8U7aYVZavfZoLf7UxnKIq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDEfZi%2BmHtw4KDGmM%2FyrcA47OPMNeuQjRP0z34qwVUCHCmRHREsxXbSkvoUSVM0MWrcppstB8REXbMVKgI9jk%2Bd7AIqeWEVkETnQwBbr5xaUfzeXybJ3HjoBxus%2Fl6ZmiXy2YP0EmiXtnwRUlMYF3paJ7KkdRduwFny0wZwr8wVpv5OUVwoVfVf58ByL9KYvKuKtunv10llLdscsezyc54zfIKEd346svwbiHDbufk2X8vs2a71bLt9K9M2SV5vJOP9iT0iFb94y2b16VRY5J5jWExkSFthzG7aaOpzc09eI%2FUcdMw3KAmI2tiFAYqBRDGC2IoWCiVB0HvjCoCOpaaUS1bl%2B%2Fe7Xd5ryOnvk%2BDMBK5XR9S1CmzQBj7NreNoYYuVDA5vBF1lnqUgF5UP3Fpq%2BfS3CSeJhOvYef6nCVv5qArOOEJQwnUJ6zH09VUuPmEQDbzVK6synxsf1ddkjcChMQssIw5PRlJVY%2BEuwgvHeIi7PQUrSuAfkdGGuJ3mmIN3CJZTUqsydlnKfcLFMKe92uzSV51DbRFu8EpGIu1tz00WqohT5GEMg6j%2BAwaLpRPVcbXZgbQrriN1Vf8OA%2FdJecCxGhFruym%2BuwGUIIANCs%2FXRWtovjoJhCWg2CLSpKQ1tF8bCKzk%2FLxfSsMIyr%2Fr8GOqUBtSzqMtGj7KzeMAsi2izWhBRUvTp7KLoWceccVR7vfzKuc755jAWYGbsC26NZMa974u9yAKlTX7%2FYlgUOJ30SFfRKz9B8w2ZkSh8ow%2FAaFWscw3OAIVR8PtK67IpUsQKl%2F6RCpI6cPkOPb58JLg35j%2FCNO7pn%2BKfoBC2954jyo%2BveT4l9Lp4agj%2F9M3zHGFsMMocLtg7XvvX7v6q4i124Xuj9OrGz&X-Amz-Signature=1ed168b968929589e6194b6d8d3fe7f474763437654951e4c9eb2d6e603619bd&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MR722GD%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T121514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3%2FMsh8%2FmA3Spc9POUDDeiNBo5QYv9skAfGIF5lCuo5AIgeLCIlW0rlO2%2BrL1xhWOQtWU8U7aYVZavfZoLf7UxnKIq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDEfZi%2BmHtw4KDGmM%2FyrcA47OPMNeuQjRP0z34qwVUCHCmRHREsxXbSkvoUSVM0MWrcppstB8REXbMVKgI9jk%2Bd7AIqeWEVkETnQwBbr5xaUfzeXybJ3HjoBxus%2Fl6ZmiXy2YP0EmiXtnwRUlMYF3paJ7KkdRduwFny0wZwr8wVpv5OUVwoVfVf58ByL9KYvKuKtunv10llLdscsezyc54zfIKEd346svwbiHDbufk2X8vs2a71bLt9K9M2SV5vJOP9iT0iFb94y2b16VRY5J5jWExkSFthzG7aaOpzc09eI%2FUcdMw3KAmI2tiFAYqBRDGC2IoWCiVB0HvjCoCOpaaUS1bl%2B%2Fe7Xd5ryOnvk%2BDMBK5XR9S1CmzQBj7NreNoYYuVDA5vBF1lnqUgF5UP3Fpq%2BfS3CSeJhOvYef6nCVv5qArOOEJQwnUJ6zH09VUuPmEQDbzVK6synxsf1ddkjcChMQssIw5PRlJVY%2BEuwgvHeIi7PQUrSuAfkdGGuJ3mmIN3CJZTUqsydlnKfcLFMKe92uzSV51DbRFu8EpGIu1tz00WqohT5GEMg6j%2BAwaLpRPVcbXZgbQrriN1Vf8OA%2FdJecCxGhFruym%2BuwGUIIANCs%2FXRWtovjoJhCWg2CLSpKQ1tF8bCKzk%2FLxfSsMIyr%2Fr8GOqUBtSzqMtGj7KzeMAsi2izWhBRUvTp7KLoWceccVR7vfzKuc755jAWYGbsC26NZMa974u9yAKlTX7%2FYlgUOJ30SFfRKz9B8w2ZkSh8ow%2FAaFWscw3OAIVR8PtK67IpUsQKl%2F6RCpI6cPkOPb58JLg35j%2FCNO7pn%2BKfoBC2954jyo%2BveT4l9Lp4agj%2F9M3zHGFsMMocLtg7XvvX7v6q4i124Xuj9OrGz&X-Amz-Signature=5f56ced33c27f563e92ece4dc600d420d3c98981c31e13ac3e4af1c33b2e5159&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MR722GD%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T121514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3%2FMsh8%2FmA3Spc9POUDDeiNBo5QYv9skAfGIF5lCuo5AIgeLCIlW0rlO2%2BrL1xhWOQtWU8U7aYVZavfZoLf7UxnKIq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDEfZi%2BmHtw4KDGmM%2FyrcA47OPMNeuQjRP0z34qwVUCHCmRHREsxXbSkvoUSVM0MWrcppstB8REXbMVKgI9jk%2Bd7AIqeWEVkETnQwBbr5xaUfzeXybJ3HjoBxus%2Fl6ZmiXy2YP0EmiXtnwRUlMYF3paJ7KkdRduwFny0wZwr8wVpv5OUVwoVfVf58ByL9KYvKuKtunv10llLdscsezyc54zfIKEd346svwbiHDbufk2X8vs2a71bLt9K9M2SV5vJOP9iT0iFb94y2b16VRY5J5jWExkSFthzG7aaOpzc09eI%2FUcdMw3KAmI2tiFAYqBRDGC2IoWCiVB0HvjCoCOpaaUS1bl%2B%2Fe7Xd5ryOnvk%2BDMBK5XR9S1CmzQBj7NreNoYYuVDA5vBF1lnqUgF5UP3Fpq%2BfS3CSeJhOvYef6nCVv5qArOOEJQwnUJ6zH09VUuPmEQDbzVK6synxsf1ddkjcChMQssIw5PRlJVY%2BEuwgvHeIi7PQUrSuAfkdGGuJ3mmIN3CJZTUqsydlnKfcLFMKe92uzSV51DbRFu8EpGIu1tz00WqohT5GEMg6j%2BAwaLpRPVcbXZgbQrriN1Vf8OA%2FdJecCxGhFruym%2BuwGUIIANCs%2FXRWtovjoJhCWg2CLSpKQ1tF8bCKzk%2FLxfSsMIyr%2Fr8GOqUBtSzqMtGj7KzeMAsi2izWhBRUvTp7KLoWceccVR7vfzKuc755jAWYGbsC26NZMa974u9yAKlTX7%2FYlgUOJ30SFfRKz9B8w2ZkSh8ow%2FAaFWscw3OAIVR8PtK67IpUsQKl%2F6RCpI6cPkOPb58JLg35j%2FCNO7pn%2BKfoBC2954jyo%2BveT4l9Lp4agj%2F9M3zHGFsMMocLtg7XvvX7v6q4i124Xuj9OrGz&X-Amz-Signature=a9efc696b4a1acff97532c3a2a6c85c3b269ef8143c1622af37f9b094a77b109&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MR722GD%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T121514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3%2FMsh8%2FmA3Spc9POUDDeiNBo5QYv9skAfGIF5lCuo5AIgeLCIlW0rlO2%2BrL1xhWOQtWU8U7aYVZavfZoLf7UxnKIq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDEfZi%2BmHtw4KDGmM%2FyrcA47OPMNeuQjRP0z34qwVUCHCmRHREsxXbSkvoUSVM0MWrcppstB8REXbMVKgI9jk%2Bd7AIqeWEVkETnQwBbr5xaUfzeXybJ3HjoBxus%2Fl6ZmiXy2YP0EmiXtnwRUlMYF3paJ7KkdRduwFny0wZwr8wVpv5OUVwoVfVf58ByL9KYvKuKtunv10llLdscsezyc54zfIKEd346svwbiHDbufk2X8vs2a71bLt9K9M2SV5vJOP9iT0iFb94y2b16VRY5J5jWExkSFthzG7aaOpzc09eI%2FUcdMw3KAmI2tiFAYqBRDGC2IoWCiVB0HvjCoCOpaaUS1bl%2B%2Fe7Xd5ryOnvk%2BDMBK5XR9S1CmzQBj7NreNoYYuVDA5vBF1lnqUgF5UP3Fpq%2BfS3CSeJhOvYef6nCVv5qArOOEJQwnUJ6zH09VUuPmEQDbzVK6synxsf1ddkjcChMQssIw5PRlJVY%2BEuwgvHeIi7PQUrSuAfkdGGuJ3mmIN3CJZTUqsydlnKfcLFMKe92uzSV51DbRFu8EpGIu1tz00WqohT5GEMg6j%2BAwaLpRPVcbXZgbQrriN1Vf8OA%2FdJecCxGhFruym%2BuwGUIIANCs%2FXRWtovjoJhCWg2CLSpKQ1tF8bCKzk%2FLxfSsMIyr%2Fr8GOqUBtSzqMtGj7KzeMAsi2izWhBRUvTp7KLoWceccVR7vfzKuc755jAWYGbsC26NZMa974u9yAKlTX7%2FYlgUOJ30SFfRKz9B8w2ZkSh8ow%2FAaFWscw3OAIVR8PtK67IpUsQKl%2F6RCpI6cPkOPb58JLg35j%2FCNO7pn%2BKfoBC2954jyo%2BveT4l9Lp4agj%2F9M3zHGFsMMocLtg7XvvX7v6q4i124Xuj9OrGz&X-Amz-Signature=df0292bbcbabe2c16e1a22a7b27c14776a55d49ca368141cb5c7fc1d166634b0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MR722GD%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T121514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3%2FMsh8%2FmA3Spc9POUDDeiNBo5QYv9skAfGIF5lCuo5AIgeLCIlW0rlO2%2BrL1xhWOQtWU8U7aYVZavfZoLf7UxnKIq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDEfZi%2BmHtw4KDGmM%2FyrcA47OPMNeuQjRP0z34qwVUCHCmRHREsxXbSkvoUSVM0MWrcppstB8REXbMVKgI9jk%2Bd7AIqeWEVkETnQwBbr5xaUfzeXybJ3HjoBxus%2Fl6ZmiXy2YP0EmiXtnwRUlMYF3paJ7KkdRduwFny0wZwr8wVpv5OUVwoVfVf58ByL9KYvKuKtunv10llLdscsezyc54zfIKEd346svwbiHDbufk2X8vs2a71bLt9K9M2SV5vJOP9iT0iFb94y2b16VRY5J5jWExkSFthzG7aaOpzc09eI%2FUcdMw3KAmI2tiFAYqBRDGC2IoWCiVB0HvjCoCOpaaUS1bl%2B%2Fe7Xd5ryOnvk%2BDMBK5XR9S1CmzQBj7NreNoYYuVDA5vBF1lnqUgF5UP3Fpq%2BfS3CSeJhOvYef6nCVv5qArOOEJQwnUJ6zH09VUuPmEQDbzVK6synxsf1ddkjcChMQssIw5PRlJVY%2BEuwgvHeIi7PQUrSuAfkdGGuJ3mmIN3CJZTUqsydlnKfcLFMKe92uzSV51DbRFu8EpGIu1tz00WqohT5GEMg6j%2BAwaLpRPVcbXZgbQrriN1Vf8OA%2FdJecCxGhFruym%2BuwGUIIANCs%2FXRWtovjoJhCWg2CLSpKQ1tF8bCKzk%2FLxfSsMIyr%2Fr8GOqUBtSzqMtGj7KzeMAsi2izWhBRUvTp7KLoWceccVR7vfzKuc755jAWYGbsC26NZMa974u9yAKlTX7%2FYlgUOJ30SFfRKz9B8w2ZkSh8ow%2FAaFWscw3OAIVR8PtK67IpUsQKl%2F6RCpI6cPkOPb58JLg35j%2FCNO7pn%2BKfoBC2954jyo%2BveT4l9Lp4agj%2F9M3zHGFsMMocLtg7XvvX7v6q4i124Xuj9OrGz&X-Amz-Signature=77b9535759dd279eb964334b503e1229116b341aa22ad8b9c897e51c44e31a51&X-Amz-SignedHeaders=host&x-id=GetObject)
