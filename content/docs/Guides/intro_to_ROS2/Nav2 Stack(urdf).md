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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ROZXX65%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHeShLVngdmHEJY6dNwO9b1%2BwadxN%2BBiMbeXyocHPTs%2BAiEAsvtrD2wbH%2FrxVk2kLlJ1uiTOUyDjqb%2Bj1qEcbfxQBmkqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKofL4C9GVX69UpMgyrcAzFhTTVkIIoU59zpoSmIod3GyxeXB0oR9ZcFCwUxxrrDC0nZh4kMqAF0tCE0Si241fdbRkWzvN2Ofv0zZs6UGXFzyun094H2wh%2BB6x5PA3Y3xU7FnqUWdT%2BRN7Ce2QWcNnCTcBATkrkqC5zP1C08p8i5wIGgp2WYXFsZI7M2IpTrg2lN5mvTbmsEUhiubsSVcEsh8iR9lW4ErK%2BIGlwB3WBWzc5%2F5HRCNpmXzw%2BYT376PHLQWoEx1%2FuFG2WsQolgkemtJGTizX%2FW944SusJeEp2zfSj%2FfPGuZAIXrrjxX59qdKdre5r1K7AsrFre20bExtNZIkQ2jCWZH7Bs9w5GtJqwrRo%2FpR2hoH3r%2FyXi9Dd2KLUq%2FxiWAL0bHIPNb7NjmIxrRyijizU1xH1IB%2BeK0ZhKBplKqYUeTQ1Q8flbPrA2%2BwwbuyFSOiz%2F5aGbt8xONHsCZyyro8H4nMO0l5cTEKZrHt9wtvHeAm%2FanjjO0pquDTGnxDfYlj7TvbR94oMmgFRbis1z5cN3l0hq8oO2WIhlO2S8qD6Xm44FBSfDr2UO4B0Ra4738Mm7GUswdndHtGgCcEWNZxciR5np7r%2FPMebLP8bK0Bu0e4LFaMN%2Bs2IORkaYhd6y4lNXe5HSMPa7jMAGOqUBX5%2FnXXZDMF%2Fl4FyNVRCdSxgRptSWZeLhl4M1ub%2F5gm%2BbbVNCjWREraQFHyZs1neFfUJYoJ3PX413LUEVDyoXosYk%2BGTGR9W9QbhSxGVqjhODsNdKlQ8ZjbxYtaFuBHnr3xcrne5%2B%2BOoF1CFYidXgBHqU64N0FlO8DfnRuxIEZvbA4uJ4uWQXqlrEJMjyTQ%2F7UkoUXiXviKYmxtX%2B8h8ace8tiZre&X-Amz-Signature=22c3e3689360ea4121a4f2505ca766f2a3517376abd31d5d0e6cc789272327f5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ROZXX65%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHeShLVngdmHEJY6dNwO9b1%2BwadxN%2BBiMbeXyocHPTs%2BAiEAsvtrD2wbH%2FrxVk2kLlJ1uiTOUyDjqb%2Bj1qEcbfxQBmkqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKofL4C9GVX69UpMgyrcAzFhTTVkIIoU59zpoSmIod3GyxeXB0oR9ZcFCwUxxrrDC0nZh4kMqAF0tCE0Si241fdbRkWzvN2Ofv0zZs6UGXFzyun094H2wh%2BB6x5PA3Y3xU7FnqUWdT%2BRN7Ce2QWcNnCTcBATkrkqC5zP1C08p8i5wIGgp2WYXFsZI7M2IpTrg2lN5mvTbmsEUhiubsSVcEsh8iR9lW4ErK%2BIGlwB3WBWzc5%2F5HRCNpmXzw%2BYT376PHLQWoEx1%2FuFG2WsQolgkemtJGTizX%2FW944SusJeEp2zfSj%2FfPGuZAIXrrjxX59qdKdre5r1K7AsrFre20bExtNZIkQ2jCWZH7Bs9w5GtJqwrRo%2FpR2hoH3r%2FyXi9Dd2KLUq%2FxiWAL0bHIPNb7NjmIxrRyijizU1xH1IB%2BeK0ZhKBplKqYUeTQ1Q8flbPrA2%2BwwbuyFSOiz%2F5aGbt8xONHsCZyyro8H4nMO0l5cTEKZrHt9wtvHeAm%2FanjjO0pquDTGnxDfYlj7TvbR94oMmgFRbis1z5cN3l0hq8oO2WIhlO2S8qD6Xm44FBSfDr2UO4B0Ra4738Mm7GUswdndHtGgCcEWNZxciR5np7r%2FPMebLP8bK0Bu0e4LFaMN%2Bs2IORkaYhd6y4lNXe5HSMPa7jMAGOqUBX5%2FnXXZDMF%2Fl4FyNVRCdSxgRptSWZeLhl4M1ub%2F5gm%2BbbVNCjWREraQFHyZs1neFfUJYoJ3PX413LUEVDyoXosYk%2BGTGR9W9QbhSxGVqjhODsNdKlQ8ZjbxYtaFuBHnr3xcrne5%2B%2BOoF1CFYidXgBHqU64N0FlO8DfnRuxIEZvbA4uJ4uWQXqlrEJMjyTQ%2F7UkoUXiXviKYmxtX%2B8h8ace8tiZre&X-Amz-Signature=c387635110e58d80c0b5f151fa0a8eb4b2911591c2354dfebeab145892577d93&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ROZXX65%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHeShLVngdmHEJY6dNwO9b1%2BwadxN%2BBiMbeXyocHPTs%2BAiEAsvtrD2wbH%2FrxVk2kLlJ1uiTOUyDjqb%2Bj1qEcbfxQBmkqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKofL4C9GVX69UpMgyrcAzFhTTVkIIoU59zpoSmIod3GyxeXB0oR9ZcFCwUxxrrDC0nZh4kMqAF0tCE0Si241fdbRkWzvN2Ofv0zZs6UGXFzyun094H2wh%2BB6x5PA3Y3xU7FnqUWdT%2BRN7Ce2QWcNnCTcBATkrkqC5zP1C08p8i5wIGgp2WYXFsZI7M2IpTrg2lN5mvTbmsEUhiubsSVcEsh8iR9lW4ErK%2BIGlwB3WBWzc5%2F5HRCNpmXzw%2BYT376PHLQWoEx1%2FuFG2WsQolgkemtJGTizX%2FW944SusJeEp2zfSj%2FfPGuZAIXrrjxX59qdKdre5r1K7AsrFre20bExtNZIkQ2jCWZH7Bs9w5GtJqwrRo%2FpR2hoH3r%2FyXi9Dd2KLUq%2FxiWAL0bHIPNb7NjmIxrRyijizU1xH1IB%2BeK0ZhKBplKqYUeTQ1Q8flbPrA2%2BwwbuyFSOiz%2F5aGbt8xONHsCZyyro8H4nMO0l5cTEKZrHt9wtvHeAm%2FanjjO0pquDTGnxDfYlj7TvbR94oMmgFRbis1z5cN3l0hq8oO2WIhlO2S8qD6Xm44FBSfDr2UO4B0Ra4738Mm7GUswdndHtGgCcEWNZxciR5np7r%2FPMebLP8bK0Bu0e4LFaMN%2Bs2IORkaYhd6y4lNXe5HSMPa7jMAGOqUBX5%2FnXXZDMF%2Fl4FyNVRCdSxgRptSWZeLhl4M1ub%2F5gm%2BbbVNCjWREraQFHyZs1neFfUJYoJ3PX413LUEVDyoXosYk%2BGTGR9W9QbhSxGVqjhODsNdKlQ8ZjbxYtaFuBHnr3xcrne5%2B%2BOoF1CFYidXgBHqU64N0FlO8DfnRuxIEZvbA4uJ4uWQXqlrEJMjyTQ%2F7UkoUXiXviKYmxtX%2B8h8ace8tiZre&X-Amz-Signature=38f2102dd2eef858fe25c0b2e28220463158d7c9d4ee34b5435e1a5900d80961&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ROZXX65%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHeShLVngdmHEJY6dNwO9b1%2BwadxN%2BBiMbeXyocHPTs%2BAiEAsvtrD2wbH%2FrxVk2kLlJ1uiTOUyDjqb%2Bj1qEcbfxQBmkqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKofL4C9GVX69UpMgyrcAzFhTTVkIIoU59zpoSmIod3GyxeXB0oR9ZcFCwUxxrrDC0nZh4kMqAF0tCE0Si241fdbRkWzvN2Ofv0zZs6UGXFzyun094H2wh%2BB6x5PA3Y3xU7FnqUWdT%2BRN7Ce2QWcNnCTcBATkrkqC5zP1C08p8i5wIGgp2WYXFsZI7M2IpTrg2lN5mvTbmsEUhiubsSVcEsh8iR9lW4ErK%2BIGlwB3WBWzc5%2F5HRCNpmXzw%2BYT376PHLQWoEx1%2FuFG2WsQolgkemtJGTizX%2FW944SusJeEp2zfSj%2FfPGuZAIXrrjxX59qdKdre5r1K7AsrFre20bExtNZIkQ2jCWZH7Bs9w5GtJqwrRo%2FpR2hoH3r%2FyXi9Dd2KLUq%2FxiWAL0bHIPNb7NjmIxrRyijizU1xH1IB%2BeK0ZhKBplKqYUeTQ1Q8flbPrA2%2BwwbuyFSOiz%2F5aGbt8xONHsCZyyro8H4nMO0l5cTEKZrHt9wtvHeAm%2FanjjO0pquDTGnxDfYlj7TvbR94oMmgFRbis1z5cN3l0hq8oO2WIhlO2S8qD6Xm44FBSfDr2UO4B0Ra4738Mm7GUswdndHtGgCcEWNZxciR5np7r%2FPMebLP8bK0Bu0e4LFaMN%2Bs2IORkaYhd6y4lNXe5HSMPa7jMAGOqUBX5%2FnXXZDMF%2Fl4FyNVRCdSxgRptSWZeLhl4M1ub%2F5gm%2BbbVNCjWREraQFHyZs1neFfUJYoJ3PX413LUEVDyoXosYk%2BGTGR9W9QbhSxGVqjhODsNdKlQ8ZjbxYtaFuBHnr3xcrne5%2B%2BOoF1CFYidXgBHqU64N0FlO8DfnRuxIEZvbA4uJ4uWQXqlrEJMjyTQ%2F7UkoUXiXviKYmxtX%2B8h8ace8tiZre&X-Amz-Signature=3a95b84714e711aab008aa2be95eb8bd3a96e1fc36346e39b1a0746ede41c795&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ROZXX65%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHeShLVngdmHEJY6dNwO9b1%2BwadxN%2BBiMbeXyocHPTs%2BAiEAsvtrD2wbH%2FrxVk2kLlJ1uiTOUyDjqb%2Bj1qEcbfxQBmkqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKofL4C9GVX69UpMgyrcAzFhTTVkIIoU59zpoSmIod3GyxeXB0oR9ZcFCwUxxrrDC0nZh4kMqAF0tCE0Si241fdbRkWzvN2Ofv0zZs6UGXFzyun094H2wh%2BB6x5PA3Y3xU7FnqUWdT%2BRN7Ce2QWcNnCTcBATkrkqC5zP1C08p8i5wIGgp2WYXFsZI7M2IpTrg2lN5mvTbmsEUhiubsSVcEsh8iR9lW4ErK%2BIGlwB3WBWzc5%2F5HRCNpmXzw%2BYT376PHLQWoEx1%2FuFG2WsQolgkemtJGTizX%2FW944SusJeEp2zfSj%2FfPGuZAIXrrjxX59qdKdre5r1K7AsrFre20bExtNZIkQ2jCWZH7Bs9w5GtJqwrRo%2FpR2hoH3r%2FyXi9Dd2KLUq%2FxiWAL0bHIPNb7NjmIxrRyijizU1xH1IB%2BeK0ZhKBplKqYUeTQ1Q8flbPrA2%2BwwbuyFSOiz%2F5aGbt8xONHsCZyyro8H4nMO0l5cTEKZrHt9wtvHeAm%2FanjjO0pquDTGnxDfYlj7TvbR94oMmgFRbis1z5cN3l0hq8oO2WIhlO2S8qD6Xm44FBSfDr2UO4B0Ra4738Mm7GUswdndHtGgCcEWNZxciR5np7r%2FPMebLP8bK0Bu0e4LFaMN%2Bs2IORkaYhd6y4lNXe5HSMPa7jMAGOqUBX5%2FnXXZDMF%2Fl4FyNVRCdSxgRptSWZeLhl4M1ub%2F5gm%2BbbVNCjWREraQFHyZs1neFfUJYoJ3PX413LUEVDyoXosYk%2BGTGR9W9QbhSxGVqjhODsNdKlQ8ZjbxYtaFuBHnr3xcrne5%2B%2BOoF1CFYidXgBHqU64N0FlO8DfnRuxIEZvbA4uJ4uWQXqlrEJMjyTQ%2F7UkoUXiXviKYmxtX%2B8h8ace8tiZre&X-Amz-Signature=8c950c0b0d9b110f36d0d18ec35cc9ae015174a962125bd06df81e446a5ac25e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ROZXX65%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHeShLVngdmHEJY6dNwO9b1%2BwadxN%2BBiMbeXyocHPTs%2BAiEAsvtrD2wbH%2FrxVk2kLlJ1uiTOUyDjqb%2Bj1qEcbfxQBmkqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKofL4C9GVX69UpMgyrcAzFhTTVkIIoU59zpoSmIod3GyxeXB0oR9ZcFCwUxxrrDC0nZh4kMqAF0tCE0Si241fdbRkWzvN2Ofv0zZs6UGXFzyun094H2wh%2BB6x5PA3Y3xU7FnqUWdT%2BRN7Ce2QWcNnCTcBATkrkqC5zP1C08p8i5wIGgp2WYXFsZI7M2IpTrg2lN5mvTbmsEUhiubsSVcEsh8iR9lW4ErK%2BIGlwB3WBWzc5%2F5HRCNpmXzw%2BYT376PHLQWoEx1%2FuFG2WsQolgkemtJGTizX%2FW944SusJeEp2zfSj%2FfPGuZAIXrrjxX59qdKdre5r1K7AsrFre20bExtNZIkQ2jCWZH7Bs9w5GtJqwrRo%2FpR2hoH3r%2FyXi9Dd2KLUq%2FxiWAL0bHIPNb7NjmIxrRyijizU1xH1IB%2BeK0ZhKBplKqYUeTQ1Q8flbPrA2%2BwwbuyFSOiz%2F5aGbt8xONHsCZyyro8H4nMO0l5cTEKZrHt9wtvHeAm%2FanjjO0pquDTGnxDfYlj7TvbR94oMmgFRbis1z5cN3l0hq8oO2WIhlO2S8qD6Xm44FBSfDr2UO4B0Ra4738Mm7GUswdndHtGgCcEWNZxciR5np7r%2FPMebLP8bK0Bu0e4LFaMN%2Bs2IORkaYhd6y4lNXe5HSMPa7jMAGOqUBX5%2FnXXZDMF%2Fl4FyNVRCdSxgRptSWZeLhl4M1ub%2F5gm%2BbbVNCjWREraQFHyZs1neFfUJYoJ3PX413LUEVDyoXosYk%2BGTGR9W9QbhSxGVqjhODsNdKlQ8ZjbxYtaFuBHnr3xcrne5%2B%2BOoF1CFYidXgBHqU64N0FlO8DfnRuxIEZvbA4uJ4uWQXqlrEJMjyTQ%2F7UkoUXiXviKYmxtX%2B8h8ace8tiZre&X-Amz-Signature=1077c3c197b78e57b063ad2d0c6a9f422e33ba8794ef8f542f4379b07b079ac1&X-Amz-SignedHeaders=host&x-id=GetObject)
