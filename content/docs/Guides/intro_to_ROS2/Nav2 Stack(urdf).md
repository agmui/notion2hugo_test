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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULVCR3D7%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM7pBqzi39EnfK1LS8ZmTDNwnWt1mOkDMsryalrCqoPgIhAKMmvSeampadd7FvuKqzJmfRRpZB6jxwT6igvJxhtQ1mKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfCpi33Kuu8j36q34q3APJAMh6KPcCLLa3w%2FOt9it9Uw2jaSSXw2AFeoAN88%2BYYnwxBQhD9StJDExsRGVrawulzt9T8CrhLhv0qiklXhxo%2FRgCuWu3RTKVOOIbXbj3tyTdH3bEfwrcVq7l9WthFE01hoikJBeZWIzuRfZelRuoCG4o57fmfVZZQB5MFl4klj6smQmZt3ObcRqMzaN8jO%2FS4tMoXUdVrWuSjZf2%2B%2F80nlcZMUVnLdj4N%2FBljve2lVsQdjyxBe1LMs5tvgnKJZrs9NnQ2wBHviq%2Fxgo8Sv6c%2FMw6BfbjyRh1ZeAIhG%2FGco0j%2FJmCUZdoU666RYLKDC6QRN5W4K%2FdSvMsSk30%2BPirpTMmj7guY767wdo5%2B2xgUtBjcU41g7w7WMjI3UxvIDSVOM1MEi5tj42qyUXOhmYpKQTz%2F86x%2FD%2Bce%2FGBsBtyjDiMizByWkoaaN5sW1dTuS8LzhocISAx5qqqAvD0lDzybU4wSCJkWA7mYsznioepKfgcGt%2BY4iRUbVaSP8%2FpK4yQIl%2Be0icNEyvVatlvRDAZbCD9jWCaDy%2Blfsk%2B2%2BJk6i2PLhE6nAL9nT3COx3P9a8eWf1xaqHYrTx8QaPMblLfUW%2FT6ls1GGSsQVfqX1uoZQVzmweKRjkkq9FviDCZyZfCBjqkAUc3Yi9Rv%2Fixr8tmIgLGM5j7UfZ%2Bzp3PfZbvsSlnXI2P4zx5nu4G1lEU5D0mPfb7eidSCM8X4yWN1E0VsQnJr9uvE2or6akLRRmggtmicv3oom%2FAgtun3FOVQi83yrQvGRrlErErO0NdFf%2FG7wnY0Mb0eiXBsEq%2FQLtqj0hjREZ0wcODt%2F0e06SA28zUH2%2BLnw6TdRGWcDVMu6YehQtMd71dUcdl&X-Amz-Signature=1d0fb98e30794efac3a601af54be6de418a6b7a31bb852ea1aa7185c5512bd69&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULVCR3D7%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM7pBqzi39EnfK1LS8ZmTDNwnWt1mOkDMsryalrCqoPgIhAKMmvSeampadd7FvuKqzJmfRRpZB6jxwT6igvJxhtQ1mKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfCpi33Kuu8j36q34q3APJAMh6KPcCLLa3w%2FOt9it9Uw2jaSSXw2AFeoAN88%2BYYnwxBQhD9StJDExsRGVrawulzt9T8CrhLhv0qiklXhxo%2FRgCuWu3RTKVOOIbXbj3tyTdH3bEfwrcVq7l9WthFE01hoikJBeZWIzuRfZelRuoCG4o57fmfVZZQB5MFl4klj6smQmZt3ObcRqMzaN8jO%2FS4tMoXUdVrWuSjZf2%2B%2F80nlcZMUVnLdj4N%2FBljve2lVsQdjyxBe1LMs5tvgnKJZrs9NnQ2wBHviq%2Fxgo8Sv6c%2FMw6BfbjyRh1ZeAIhG%2FGco0j%2FJmCUZdoU666RYLKDC6QRN5W4K%2FdSvMsSk30%2BPirpTMmj7guY767wdo5%2B2xgUtBjcU41g7w7WMjI3UxvIDSVOM1MEi5tj42qyUXOhmYpKQTz%2F86x%2FD%2Bce%2FGBsBtyjDiMizByWkoaaN5sW1dTuS8LzhocISAx5qqqAvD0lDzybU4wSCJkWA7mYsznioepKfgcGt%2BY4iRUbVaSP8%2FpK4yQIl%2Be0icNEyvVatlvRDAZbCD9jWCaDy%2Blfsk%2B2%2BJk6i2PLhE6nAL9nT3COx3P9a8eWf1xaqHYrTx8QaPMblLfUW%2FT6ls1GGSsQVfqX1uoZQVzmweKRjkkq9FviDCZyZfCBjqkAUc3Yi9Rv%2Fixr8tmIgLGM5j7UfZ%2Bzp3PfZbvsSlnXI2P4zx5nu4G1lEU5D0mPfb7eidSCM8X4yWN1E0VsQnJr9uvE2or6akLRRmggtmicv3oom%2FAgtun3FOVQi83yrQvGRrlErErO0NdFf%2FG7wnY0Mb0eiXBsEq%2FQLtqj0hjREZ0wcODt%2F0e06SA28zUH2%2BLnw6TdRGWcDVMu6YehQtMd71dUcdl&X-Amz-Signature=c5b5f6ecabd6ddfe73002291331f91e58683888166987b6641f9e94d037eea76&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULVCR3D7%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM7pBqzi39EnfK1LS8ZmTDNwnWt1mOkDMsryalrCqoPgIhAKMmvSeampadd7FvuKqzJmfRRpZB6jxwT6igvJxhtQ1mKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfCpi33Kuu8j36q34q3APJAMh6KPcCLLa3w%2FOt9it9Uw2jaSSXw2AFeoAN88%2BYYnwxBQhD9StJDExsRGVrawulzt9T8CrhLhv0qiklXhxo%2FRgCuWu3RTKVOOIbXbj3tyTdH3bEfwrcVq7l9WthFE01hoikJBeZWIzuRfZelRuoCG4o57fmfVZZQB5MFl4klj6smQmZt3ObcRqMzaN8jO%2FS4tMoXUdVrWuSjZf2%2B%2F80nlcZMUVnLdj4N%2FBljve2lVsQdjyxBe1LMs5tvgnKJZrs9NnQ2wBHviq%2Fxgo8Sv6c%2FMw6BfbjyRh1ZeAIhG%2FGco0j%2FJmCUZdoU666RYLKDC6QRN5W4K%2FdSvMsSk30%2BPirpTMmj7guY767wdo5%2B2xgUtBjcU41g7w7WMjI3UxvIDSVOM1MEi5tj42qyUXOhmYpKQTz%2F86x%2FD%2Bce%2FGBsBtyjDiMizByWkoaaN5sW1dTuS8LzhocISAx5qqqAvD0lDzybU4wSCJkWA7mYsznioepKfgcGt%2BY4iRUbVaSP8%2FpK4yQIl%2Be0icNEyvVatlvRDAZbCD9jWCaDy%2Blfsk%2B2%2BJk6i2PLhE6nAL9nT3COx3P9a8eWf1xaqHYrTx8QaPMblLfUW%2FT6ls1GGSsQVfqX1uoZQVzmweKRjkkq9FviDCZyZfCBjqkAUc3Yi9Rv%2Fixr8tmIgLGM5j7UfZ%2Bzp3PfZbvsSlnXI2P4zx5nu4G1lEU5D0mPfb7eidSCM8X4yWN1E0VsQnJr9uvE2or6akLRRmggtmicv3oom%2FAgtun3FOVQi83yrQvGRrlErErO0NdFf%2FG7wnY0Mb0eiXBsEq%2FQLtqj0hjREZ0wcODt%2F0e06SA28zUH2%2BLnw6TdRGWcDVMu6YehQtMd71dUcdl&X-Amz-Signature=3732bc66a8b6dbba606fb7285d047851696d67b2bf98676ff1a4f5d81b93743a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULVCR3D7%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM7pBqzi39EnfK1LS8ZmTDNwnWt1mOkDMsryalrCqoPgIhAKMmvSeampadd7FvuKqzJmfRRpZB6jxwT6igvJxhtQ1mKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfCpi33Kuu8j36q34q3APJAMh6KPcCLLa3w%2FOt9it9Uw2jaSSXw2AFeoAN88%2BYYnwxBQhD9StJDExsRGVrawulzt9T8CrhLhv0qiklXhxo%2FRgCuWu3RTKVOOIbXbj3tyTdH3bEfwrcVq7l9WthFE01hoikJBeZWIzuRfZelRuoCG4o57fmfVZZQB5MFl4klj6smQmZt3ObcRqMzaN8jO%2FS4tMoXUdVrWuSjZf2%2B%2F80nlcZMUVnLdj4N%2FBljve2lVsQdjyxBe1LMs5tvgnKJZrs9NnQ2wBHviq%2Fxgo8Sv6c%2FMw6BfbjyRh1ZeAIhG%2FGco0j%2FJmCUZdoU666RYLKDC6QRN5W4K%2FdSvMsSk30%2BPirpTMmj7guY767wdo5%2B2xgUtBjcU41g7w7WMjI3UxvIDSVOM1MEi5tj42qyUXOhmYpKQTz%2F86x%2FD%2Bce%2FGBsBtyjDiMizByWkoaaN5sW1dTuS8LzhocISAx5qqqAvD0lDzybU4wSCJkWA7mYsznioepKfgcGt%2BY4iRUbVaSP8%2FpK4yQIl%2Be0icNEyvVatlvRDAZbCD9jWCaDy%2Blfsk%2B2%2BJk6i2PLhE6nAL9nT3COx3P9a8eWf1xaqHYrTx8QaPMblLfUW%2FT6ls1GGSsQVfqX1uoZQVzmweKRjkkq9FviDCZyZfCBjqkAUc3Yi9Rv%2Fixr8tmIgLGM5j7UfZ%2Bzp3PfZbvsSlnXI2P4zx5nu4G1lEU5D0mPfb7eidSCM8X4yWN1E0VsQnJr9uvE2or6akLRRmggtmicv3oom%2FAgtun3FOVQi83yrQvGRrlErErO0NdFf%2FG7wnY0Mb0eiXBsEq%2FQLtqj0hjREZ0wcODt%2F0e06SA28zUH2%2BLnw6TdRGWcDVMu6YehQtMd71dUcdl&X-Amz-Signature=8c73c11cc69e94ff5613947ea2518aaaec0ad950db0877d50f8327848ee5ae17&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULVCR3D7%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM7pBqzi39EnfK1LS8ZmTDNwnWt1mOkDMsryalrCqoPgIhAKMmvSeampadd7FvuKqzJmfRRpZB6jxwT6igvJxhtQ1mKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfCpi33Kuu8j36q34q3APJAMh6KPcCLLa3w%2FOt9it9Uw2jaSSXw2AFeoAN88%2BYYnwxBQhD9StJDExsRGVrawulzt9T8CrhLhv0qiklXhxo%2FRgCuWu3RTKVOOIbXbj3tyTdH3bEfwrcVq7l9WthFE01hoikJBeZWIzuRfZelRuoCG4o57fmfVZZQB5MFl4klj6smQmZt3ObcRqMzaN8jO%2FS4tMoXUdVrWuSjZf2%2B%2F80nlcZMUVnLdj4N%2FBljve2lVsQdjyxBe1LMs5tvgnKJZrs9NnQ2wBHviq%2Fxgo8Sv6c%2FMw6BfbjyRh1ZeAIhG%2FGco0j%2FJmCUZdoU666RYLKDC6QRN5W4K%2FdSvMsSk30%2BPirpTMmj7guY767wdo5%2B2xgUtBjcU41g7w7WMjI3UxvIDSVOM1MEi5tj42qyUXOhmYpKQTz%2F86x%2FD%2Bce%2FGBsBtyjDiMizByWkoaaN5sW1dTuS8LzhocISAx5qqqAvD0lDzybU4wSCJkWA7mYsznioepKfgcGt%2BY4iRUbVaSP8%2FpK4yQIl%2Be0icNEyvVatlvRDAZbCD9jWCaDy%2Blfsk%2B2%2BJk6i2PLhE6nAL9nT3COx3P9a8eWf1xaqHYrTx8QaPMblLfUW%2FT6ls1GGSsQVfqX1uoZQVzmweKRjkkq9FviDCZyZfCBjqkAUc3Yi9Rv%2Fixr8tmIgLGM5j7UfZ%2Bzp3PfZbvsSlnXI2P4zx5nu4G1lEU5D0mPfb7eidSCM8X4yWN1E0VsQnJr9uvE2or6akLRRmggtmicv3oom%2FAgtun3FOVQi83yrQvGRrlErErO0NdFf%2FG7wnY0Mb0eiXBsEq%2FQLtqj0hjREZ0wcODt%2F0e06SA28zUH2%2BLnw6TdRGWcDVMu6YehQtMd71dUcdl&X-Amz-Signature=15fd877c153dea0a2ff97a1c443c5f8a4915251e4838dcbb4c261ff794858834&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULVCR3D7%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T200843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCM7pBqzi39EnfK1LS8ZmTDNwnWt1mOkDMsryalrCqoPgIhAKMmvSeampadd7FvuKqzJmfRRpZB6jxwT6igvJxhtQ1mKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfCpi33Kuu8j36q34q3APJAMh6KPcCLLa3w%2FOt9it9Uw2jaSSXw2AFeoAN88%2BYYnwxBQhD9StJDExsRGVrawulzt9T8CrhLhv0qiklXhxo%2FRgCuWu3RTKVOOIbXbj3tyTdH3bEfwrcVq7l9WthFE01hoikJBeZWIzuRfZelRuoCG4o57fmfVZZQB5MFl4klj6smQmZt3ObcRqMzaN8jO%2FS4tMoXUdVrWuSjZf2%2B%2F80nlcZMUVnLdj4N%2FBljve2lVsQdjyxBe1LMs5tvgnKJZrs9NnQ2wBHviq%2Fxgo8Sv6c%2FMw6BfbjyRh1ZeAIhG%2FGco0j%2FJmCUZdoU666RYLKDC6QRN5W4K%2FdSvMsSk30%2BPirpTMmj7guY767wdo5%2B2xgUtBjcU41g7w7WMjI3UxvIDSVOM1MEi5tj42qyUXOhmYpKQTz%2F86x%2FD%2Bce%2FGBsBtyjDiMizByWkoaaN5sW1dTuS8LzhocISAx5qqqAvD0lDzybU4wSCJkWA7mYsznioepKfgcGt%2BY4iRUbVaSP8%2FpK4yQIl%2Be0icNEyvVatlvRDAZbCD9jWCaDy%2Blfsk%2B2%2BJk6i2PLhE6nAL9nT3COx3P9a8eWf1xaqHYrTx8QaPMblLfUW%2FT6ls1GGSsQVfqX1uoZQVzmweKRjkkq9FviDCZyZfCBjqkAUc3Yi9Rv%2Fixr8tmIgLGM5j7UfZ%2Bzp3PfZbvsSlnXI2P4zx5nu4G1lEU5D0mPfb7eidSCM8X4yWN1E0VsQnJr9uvE2or6akLRRmggtmicv3oom%2FAgtun3FOVQi83yrQvGRrlErErO0NdFf%2FG7wnY0Mb0eiXBsEq%2FQLtqj0hjREZ0wcODt%2F0e06SA28zUH2%2BLnw6TdRGWcDVMu6YehQtMd71dUcdl&X-Amz-Signature=e5d986f2b9ce09cf799b3ca36126bd31c7f3d6de31b38785a808c4a93d55bf8b&X-Amz-SignedHeaders=host&x-id=GetObject)
