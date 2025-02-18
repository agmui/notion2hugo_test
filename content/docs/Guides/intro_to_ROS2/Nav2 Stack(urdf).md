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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633NQMZSP%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIGI3emSETcxXpiWBn2AOVdU8kku6TRCSW%2ByUMbzbOtqVAiEArm%2F4qAiXWTeM%2Fv2kvX94y%2BdKAf16zSyO8zi4NvjMDIsqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENzTjgP2W6Ifd32xyrcA3sR3v6yMWye7O%2BYowLRcH%2BuSjuwmmlyRIbRSO0E3DPL7%2FpNy2kHj2YprPqHdN6WTFdLB%2FflALgnG%2FWXAwHOzSu%2BRQyJTw7Uiy2tLFVmLLfLmwrvBJSy5EXOOocz2putRVXMXnle7tZiB88raAJgz68nBIb6jNFEq%2FSfOgGbVX7w6vbhCoix2%2BC3og1fObbe%2Biw64%2BJH9PRdlPgr1kG918jApUwNK6eFnZWbxASnDyf%2BPL9JHWRqLUWSKQGAJ9Y%2BK8VvqaMgVNIXQsInmAxwSbcNP%2Bv5FG%2BZ59IFhb%2Bd4XUn%2FIQ5l023OwX9NRqU705AqbA82Cl2TxE811WnIKK3pQXNceDHhNwQqrAspT5Iub0V%2BVxhXUCWLV3tK3efN4ildEphfhJKf7LROZkQVtkV4DIFmuFcR75FAw7QrCAQktJxXshScs2SzCvqPYeqFIC6gkzYFDR1g%2FznXB6ywlXFjy1dp4vSaO5OhY3CAvaqPFl28qQB%2FkHIiNVbrBDPEMLc6qNDcHTqTnAkBHRvdQtIDfx7x%2BtmT49Md9GXEeeqRqGg11QABWulisuB8yGUe2tHrLwwjn1vneMu8J2BHsEKeXMvGJMC%2BO7NevBR5dAEW3V4Pib3yWB4TTRr5rsKMJGU0r0GOqUBHdvv%2BXH1T58Gi6YLnTYU2kh4uttcmPvKk4dcTxQv2%2FKecZuBZDJKjfg5VT6OxkLT9T6XXWF986Q5ii7NCmnXDED%2Ba80AgMcpHUfH2zXSfytCQ1DeQ48Yibjf72tVnsXPj4rxxZdN6GnKe7XjEXha8dJldXix5mcHfPs3WKdQVxhAq%2BOL0mIq8bRi4XO0lJuuuchxtfhUHrTt468r8I1eQUWObJEb&X-Amz-Signature=54465efe1c1eea42fbbd07d984236f1dbec566a30181a82a8e801afc1176d2ee&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633NQMZSP%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T140755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIGI3emSETcxXpiWBn2AOVdU8kku6TRCSW%2ByUMbzbOtqVAiEArm%2F4qAiXWTeM%2Fv2kvX94y%2BdKAf16zSyO8zi4NvjMDIsqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENzTjgP2W6Ifd32xyrcA3sR3v6yMWye7O%2BYowLRcH%2BuSjuwmmlyRIbRSO0E3DPL7%2FpNy2kHj2YprPqHdN6WTFdLB%2FflALgnG%2FWXAwHOzSu%2BRQyJTw7Uiy2tLFVmLLfLmwrvBJSy5EXOOocz2putRVXMXnle7tZiB88raAJgz68nBIb6jNFEq%2FSfOgGbVX7w6vbhCoix2%2BC3og1fObbe%2Biw64%2BJH9PRdlPgr1kG918jApUwNK6eFnZWbxASnDyf%2BPL9JHWRqLUWSKQGAJ9Y%2BK8VvqaMgVNIXQsInmAxwSbcNP%2Bv5FG%2BZ59IFhb%2Bd4XUn%2FIQ5l023OwX9NRqU705AqbA82Cl2TxE811WnIKK3pQXNceDHhNwQqrAspT5Iub0V%2BVxhXUCWLV3tK3efN4ildEphfhJKf7LROZkQVtkV4DIFmuFcR75FAw7QrCAQktJxXshScs2SzCvqPYeqFIC6gkzYFDR1g%2FznXB6ywlXFjy1dp4vSaO5OhY3CAvaqPFl28qQB%2FkHIiNVbrBDPEMLc6qNDcHTqTnAkBHRvdQtIDfx7x%2BtmT49Md9GXEeeqRqGg11QABWulisuB8yGUe2tHrLwwjn1vneMu8J2BHsEKeXMvGJMC%2BO7NevBR5dAEW3V4Pib3yWB4TTRr5rsKMJGU0r0GOqUBHdvv%2BXH1T58Gi6YLnTYU2kh4uttcmPvKk4dcTxQv2%2FKecZuBZDJKjfg5VT6OxkLT9T6XXWF986Q5ii7NCmnXDED%2Ba80AgMcpHUfH2zXSfytCQ1DeQ48Yibjf72tVnsXPj4rxxZdN6GnKe7XjEXha8dJldXix5mcHfPs3WKdQVxhAq%2BOL0mIq8bRi4XO0lJuuuchxtfhUHrTt468r8I1eQUWObJEb&X-Amz-Signature=1c8c3566890e61d10b732cdc00b988b9539f4835e9c3da913a333b789a9669f2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633NQMZSP%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIGI3emSETcxXpiWBn2AOVdU8kku6TRCSW%2ByUMbzbOtqVAiEArm%2F4qAiXWTeM%2Fv2kvX94y%2BdKAf16zSyO8zi4NvjMDIsqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENzTjgP2W6Ifd32xyrcA3sR3v6yMWye7O%2BYowLRcH%2BuSjuwmmlyRIbRSO0E3DPL7%2FpNy2kHj2YprPqHdN6WTFdLB%2FflALgnG%2FWXAwHOzSu%2BRQyJTw7Uiy2tLFVmLLfLmwrvBJSy5EXOOocz2putRVXMXnle7tZiB88raAJgz68nBIb6jNFEq%2FSfOgGbVX7w6vbhCoix2%2BC3og1fObbe%2Biw64%2BJH9PRdlPgr1kG918jApUwNK6eFnZWbxASnDyf%2BPL9JHWRqLUWSKQGAJ9Y%2BK8VvqaMgVNIXQsInmAxwSbcNP%2Bv5FG%2BZ59IFhb%2Bd4XUn%2FIQ5l023OwX9NRqU705AqbA82Cl2TxE811WnIKK3pQXNceDHhNwQqrAspT5Iub0V%2BVxhXUCWLV3tK3efN4ildEphfhJKf7LROZkQVtkV4DIFmuFcR75FAw7QrCAQktJxXshScs2SzCvqPYeqFIC6gkzYFDR1g%2FznXB6ywlXFjy1dp4vSaO5OhY3CAvaqPFl28qQB%2FkHIiNVbrBDPEMLc6qNDcHTqTnAkBHRvdQtIDfx7x%2BtmT49Md9GXEeeqRqGg11QABWulisuB8yGUe2tHrLwwjn1vneMu8J2BHsEKeXMvGJMC%2BO7NevBR5dAEW3V4Pib3yWB4TTRr5rsKMJGU0r0GOqUBHdvv%2BXH1T58Gi6YLnTYU2kh4uttcmPvKk4dcTxQv2%2FKecZuBZDJKjfg5VT6OxkLT9T6XXWF986Q5ii7NCmnXDED%2Ba80AgMcpHUfH2zXSfytCQ1DeQ48Yibjf72tVnsXPj4rxxZdN6GnKe7XjEXha8dJldXix5mcHfPs3WKdQVxhAq%2BOL0mIq8bRi4XO0lJuuuchxtfhUHrTt468r8I1eQUWObJEb&X-Amz-Signature=84cbf53090475707ddfc102a4a2842fa1b6348d47b12e0d28694f0d580175b26&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633NQMZSP%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIGI3emSETcxXpiWBn2AOVdU8kku6TRCSW%2ByUMbzbOtqVAiEArm%2F4qAiXWTeM%2Fv2kvX94y%2BdKAf16zSyO8zi4NvjMDIsqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENzTjgP2W6Ifd32xyrcA3sR3v6yMWye7O%2BYowLRcH%2BuSjuwmmlyRIbRSO0E3DPL7%2FpNy2kHj2YprPqHdN6WTFdLB%2FflALgnG%2FWXAwHOzSu%2BRQyJTw7Uiy2tLFVmLLfLmwrvBJSy5EXOOocz2putRVXMXnle7tZiB88raAJgz68nBIb6jNFEq%2FSfOgGbVX7w6vbhCoix2%2BC3og1fObbe%2Biw64%2BJH9PRdlPgr1kG918jApUwNK6eFnZWbxASnDyf%2BPL9JHWRqLUWSKQGAJ9Y%2BK8VvqaMgVNIXQsInmAxwSbcNP%2Bv5FG%2BZ59IFhb%2Bd4XUn%2FIQ5l023OwX9NRqU705AqbA82Cl2TxE811WnIKK3pQXNceDHhNwQqrAspT5Iub0V%2BVxhXUCWLV3tK3efN4ildEphfhJKf7LROZkQVtkV4DIFmuFcR75FAw7QrCAQktJxXshScs2SzCvqPYeqFIC6gkzYFDR1g%2FznXB6ywlXFjy1dp4vSaO5OhY3CAvaqPFl28qQB%2FkHIiNVbrBDPEMLc6qNDcHTqTnAkBHRvdQtIDfx7x%2BtmT49Md9GXEeeqRqGg11QABWulisuB8yGUe2tHrLwwjn1vneMu8J2BHsEKeXMvGJMC%2BO7NevBR5dAEW3V4Pib3yWB4TTRr5rsKMJGU0r0GOqUBHdvv%2BXH1T58Gi6YLnTYU2kh4uttcmPvKk4dcTxQv2%2FKecZuBZDJKjfg5VT6OxkLT9T6XXWF986Q5ii7NCmnXDED%2Ba80AgMcpHUfH2zXSfytCQ1DeQ48Yibjf72tVnsXPj4rxxZdN6GnKe7XjEXha8dJldXix5mcHfPs3WKdQVxhAq%2BOL0mIq8bRi4XO0lJuuuchxtfhUHrTt468r8I1eQUWObJEb&X-Amz-Signature=1f3dec269dffa969e140c9d55acf5cd57fb8b03b0f2139d62f6952aae6abefa4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633NQMZSP%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIGI3emSETcxXpiWBn2AOVdU8kku6TRCSW%2ByUMbzbOtqVAiEArm%2F4qAiXWTeM%2Fv2kvX94y%2BdKAf16zSyO8zi4NvjMDIsqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENzTjgP2W6Ifd32xyrcA3sR3v6yMWye7O%2BYowLRcH%2BuSjuwmmlyRIbRSO0E3DPL7%2FpNy2kHj2YprPqHdN6WTFdLB%2FflALgnG%2FWXAwHOzSu%2BRQyJTw7Uiy2tLFVmLLfLmwrvBJSy5EXOOocz2putRVXMXnle7tZiB88raAJgz68nBIb6jNFEq%2FSfOgGbVX7w6vbhCoix2%2BC3og1fObbe%2Biw64%2BJH9PRdlPgr1kG918jApUwNK6eFnZWbxASnDyf%2BPL9JHWRqLUWSKQGAJ9Y%2BK8VvqaMgVNIXQsInmAxwSbcNP%2Bv5FG%2BZ59IFhb%2Bd4XUn%2FIQ5l023OwX9NRqU705AqbA82Cl2TxE811WnIKK3pQXNceDHhNwQqrAspT5Iub0V%2BVxhXUCWLV3tK3efN4ildEphfhJKf7LROZkQVtkV4DIFmuFcR75FAw7QrCAQktJxXshScs2SzCvqPYeqFIC6gkzYFDR1g%2FznXB6ywlXFjy1dp4vSaO5OhY3CAvaqPFl28qQB%2FkHIiNVbrBDPEMLc6qNDcHTqTnAkBHRvdQtIDfx7x%2BtmT49Md9GXEeeqRqGg11QABWulisuB8yGUe2tHrLwwjn1vneMu8J2BHsEKeXMvGJMC%2BO7NevBR5dAEW3V4Pib3yWB4TTRr5rsKMJGU0r0GOqUBHdvv%2BXH1T58Gi6YLnTYU2kh4uttcmPvKk4dcTxQv2%2FKecZuBZDJKjfg5VT6OxkLT9T6XXWF986Q5ii7NCmnXDED%2Ba80AgMcpHUfH2zXSfytCQ1DeQ48Yibjf72tVnsXPj4rxxZdN6GnKe7XjEXha8dJldXix5mcHfPs3WKdQVxhAq%2BOL0mIq8bRi4XO0lJuuuchxtfhUHrTt468r8I1eQUWObJEb&X-Amz-Signature=846daa8ced8a2158acdf8debd3e444a1b1f4243340b3906bf01f82d660cf31d2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633NQMZSP%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIGI3emSETcxXpiWBn2AOVdU8kku6TRCSW%2ByUMbzbOtqVAiEArm%2F4qAiXWTeM%2Fv2kvX94y%2BdKAf16zSyO8zi4NvjMDIsqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDENzTjgP2W6Ifd32xyrcA3sR3v6yMWye7O%2BYowLRcH%2BuSjuwmmlyRIbRSO0E3DPL7%2FpNy2kHj2YprPqHdN6WTFdLB%2FflALgnG%2FWXAwHOzSu%2BRQyJTw7Uiy2tLFVmLLfLmwrvBJSy5EXOOocz2putRVXMXnle7tZiB88raAJgz68nBIb6jNFEq%2FSfOgGbVX7w6vbhCoix2%2BC3og1fObbe%2Biw64%2BJH9PRdlPgr1kG918jApUwNK6eFnZWbxASnDyf%2BPL9JHWRqLUWSKQGAJ9Y%2BK8VvqaMgVNIXQsInmAxwSbcNP%2Bv5FG%2BZ59IFhb%2Bd4XUn%2FIQ5l023OwX9NRqU705AqbA82Cl2TxE811WnIKK3pQXNceDHhNwQqrAspT5Iub0V%2BVxhXUCWLV3tK3efN4ildEphfhJKf7LROZkQVtkV4DIFmuFcR75FAw7QrCAQktJxXshScs2SzCvqPYeqFIC6gkzYFDR1g%2FznXB6ywlXFjy1dp4vSaO5OhY3CAvaqPFl28qQB%2FkHIiNVbrBDPEMLc6qNDcHTqTnAkBHRvdQtIDfx7x%2BtmT49Md9GXEeeqRqGg11QABWulisuB8yGUe2tHrLwwjn1vneMu8J2BHsEKeXMvGJMC%2BO7NevBR5dAEW3V4Pib3yWB4TTRr5rsKMJGU0r0GOqUBHdvv%2BXH1T58Gi6YLnTYU2kh4uttcmPvKk4dcTxQv2%2FKecZuBZDJKjfg5VT6OxkLT9T6XXWF986Q5ii7NCmnXDED%2Ba80AgMcpHUfH2zXSfytCQ1DeQ48Yibjf72tVnsXPj4rxxZdN6GnKe7XjEXha8dJldXix5mcHfPs3WKdQVxhAq%2BOL0mIq8bRi4XO0lJuuuchxtfhUHrTt468r8I1eQUWObJEb&X-Amz-Signature=3fffff1867a354837e5701bfccc0253b29c9fb287ffe00cdfb626f876d688d34&X-Amz-SignedHeaders=host&x-id=GetObject)
