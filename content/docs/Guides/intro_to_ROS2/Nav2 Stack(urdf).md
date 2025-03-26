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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE7NU5FC%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T041032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeDmmp%2Fxak95mZQX5bFDLkE7QQf1PIpdL07t11s3yLLgIgdEIRlijrQPaXrYt5RWRSP8W4nS8HBb0sD3rsGff02hEq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDEKILvzTYHdMgcVdKyrcA7nYXZz7EsSUp3SprsusmfxWBHxISzdLTdqjak0zE%2Bqgm0a3I%2F0vEMF2kO3ruW1BNCCM%2BmX5Fq2PzH9pAxsm%2Flldad5fKCnqfXo4q2P7L7lQPsQqXfYlSoekWUehWfYlACXa1ZADOuSOo8S1Lskr5PvTXyuxiC7zIMHpkKqSPW1vq3EKNbKrroUm5xrtjjQt1LWWK0lAbFMVvS9X5cJwYRxUH37AK8VfSGbqkhFWdwApeXXKPjcmCPfWEYlIkgwhWMZcFt9%2BOEGTnieanjHIwpLMyXX0DLMWGabNiJ6IAZKxld1wX%2FP%2FEkBCHeh4apvnlghaCb9ITyZ%2BqiGKExoA6iGT4AJTKd1%2FCLovUJkIcFh7hG8UZCwo9SimC8PT51cHpel257WbbXXx6DsoS0JqiHJLI3%2F0OpNPujE27noxropppYxNeSmxb51UVPt%2F%2B%2FJPF%2FWitHPBHZu159jREG7NT28lSR69x2vzXf80sDGBjAeXNchlyOcQUGpQy0DGHuwfrN776D%2BxOdAGGDp4SN6jp4I6ZE0WzVBuiOIrFNbEkm0LWzXR62sGrcekhbSmmQAfsYqAMUVNUSrlQuaaQ5vK2g9MuVLcqXpf%2FDpxdb7sWPBNeyCiEB210LMqxwtrMP%2Fpjb8GOqUBK3k2m50sgiHjMJjtnTMm3YavEk%2FRgJ%2BsEkBkLI55dOVDPAHukICnrszipAdgFYE7rbz0LEe8hTIpuBUEIDX32w9FA6MT%2BpCQJHQuoIdD5Zu46b5lE634ZMZS%2FZF%2BW8SjPN1PVqdM%2BknRPUAlYJW2iXNxNvLo8C7ocSyUGZOw2SvO0cvVwuaKaqMrLkii3gv1QIz%2BU2ddafKe4kWfd6HncVjubw5E&X-Amz-Signature=e5b18eaf289a0213382161ace40e0c1994a982ef9c4fa15b69f767e1a9da952f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE7NU5FC%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T041032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeDmmp%2Fxak95mZQX5bFDLkE7QQf1PIpdL07t11s3yLLgIgdEIRlijrQPaXrYt5RWRSP8W4nS8HBb0sD3rsGff02hEq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDEKILvzTYHdMgcVdKyrcA7nYXZz7EsSUp3SprsusmfxWBHxISzdLTdqjak0zE%2Bqgm0a3I%2F0vEMF2kO3ruW1BNCCM%2BmX5Fq2PzH9pAxsm%2Flldad5fKCnqfXo4q2P7L7lQPsQqXfYlSoekWUehWfYlACXa1ZADOuSOo8S1Lskr5PvTXyuxiC7zIMHpkKqSPW1vq3EKNbKrroUm5xrtjjQt1LWWK0lAbFMVvS9X5cJwYRxUH37AK8VfSGbqkhFWdwApeXXKPjcmCPfWEYlIkgwhWMZcFt9%2BOEGTnieanjHIwpLMyXX0DLMWGabNiJ6IAZKxld1wX%2FP%2FEkBCHeh4apvnlghaCb9ITyZ%2BqiGKExoA6iGT4AJTKd1%2FCLovUJkIcFh7hG8UZCwo9SimC8PT51cHpel257WbbXXx6DsoS0JqiHJLI3%2F0OpNPujE27noxropppYxNeSmxb51UVPt%2F%2B%2FJPF%2FWitHPBHZu159jREG7NT28lSR69x2vzXf80sDGBjAeXNchlyOcQUGpQy0DGHuwfrN776D%2BxOdAGGDp4SN6jp4I6ZE0WzVBuiOIrFNbEkm0LWzXR62sGrcekhbSmmQAfsYqAMUVNUSrlQuaaQ5vK2g9MuVLcqXpf%2FDpxdb7sWPBNeyCiEB210LMqxwtrMP%2Fpjb8GOqUBK3k2m50sgiHjMJjtnTMm3YavEk%2FRgJ%2BsEkBkLI55dOVDPAHukICnrszipAdgFYE7rbz0LEe8hTIpuBUEIDX32w9FA6MT%2BpCQJHQuoIdD5Zu46b5lE634ZMZS%2FZF%2BW8SjPN1PVqdM%2BknRPUAlYJW2iXNxNvLo8C7ocSyUGZOw2SvO0cvVwuaKaqMrLkii3gv1QIz%2BU2ddafKe4kWfd6HncVjubw5E&X-Amz-Signature=fc3ccbe33d0574dec8a927783a0388af66d8c1baf3b3cda7a7bb3c28fb6b6b61&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE7NU5FC%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T041032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeDmmp%2Fxak95mZQX5bFDLkE7QQf1PIpdL07t11s3yLLgIgdEIRlijrQPaXrYt5RWRSP8W4nS8HBb0sD3rsGff02hEq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDEKILvzTYHdMgcVdKyrcA7nYXZz7EsSUp3SprsusmfxWBHxISzdLTdqjak0zE%2Bqgm0a3I%2F0vEMF2kO3ruW1BNCCM%2BmX5Fq2PzH9pAxsm%2Flldad5fKCnqfXo4q2P7L7lQPsQqXfYlSoekWUehWfYlACXa1ZADOuSOo8S1Lskr5PvTXyuxiC7zIMHpkKqSPW1vq3EKNbKrroUm5xrtjjQt1LWWK0lAbFMVvS9X5cJwYRxUH37AK8VfSGbqkhFWdwApeXXKPjcmCPfWEYlIkgwhWMZcFt9%2BOEGTnieanjHIwpLMyXX0DLMWGabNiJ6IAZKxld1wX%2FP%2FEkBCHeh4apvnlghaCb9ITyZ%2BqiGKExoA6iGT4AJTKd1%2FCLovUJkIcFh7hG8UZCwo9SimC8PT51cHpel257WbbXXx6DsoS0JqiHJLI3%2F0OpNPujE27noxropppYxNeSmxb51UVPt%2F%2B%2FJPF%2FWitHPBHZu159jREG7NT28lSR69x2vzXf80sDGBjAeXNchlyOcQUGpQy0DGHuwfrN776D%2BxOdAGGDp4SN6jp4I6ZE0WzVBuiOIrFNbEkm0LWzXR62sGrcekhbSmmQAfsYqAMUVNUSrlQuaaQ5vK2g9MuVLcqXpf%2FDpxdb7sWPBNeyCiEB210LMqxwtrMP%2Fpjb8GOqUBK3k2m50sgiHjMJjtnTMm3YavEk%2FRgJ%2BsEkBkLI55dOVDPAHukICnrszipAdgFYE7rbz0LEe8hTIpuBUEIDX32w9FA6MT%2BpCQJHQuoIdD5Zu46b5lE634ZMZS%2FZF%2BW8SjPN1PVqdM%2BknRPUAlYJW2iXNxNvLo8C7ocSyUGZOw2SvO0cvVwuaKaqMrLkii3gv1QIz%2BU2ddafKe4kWfd6HncVjubw5E&X-Amz-Signature=4a4618aa22d192601e4b88f6f5fcbb015ed73f2f88401a0cd1a2800b921e2d1b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE7NU5FC%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T041032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeDmmp%2Fxak95mZQX5bFDLkE7QQf1PIpdL07t11s3yLLgIgdEIRlijrQPaXrYt5RWRSP8W4nS8HBb0sD3rsGff02hEq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDEKILvzTYHdMgcVdKyrcA7nYXZz7EsSUp3SprsusmfxWBHxISzdLTdqjak0zE%2Bqgm0a3I%2F0vEMF2kO3ruW1BNCCM%2BmX5Fq2PzH9pAxsm%2Flldad5fKCnqfXo4q2P7L7lQPsQqXfYlSoekWUehWfYlACXa1ZADOuSOo8S1Lskr5PvTXyuxiC7zIMHpkKqSPW1vq3EKNbKrroUm5xrtjjQt1LWWK0lAbFMVvS9X5cJwYRxUH37AK8VfSGbqkhFWdwApeXXKPjcmCPfWEYlIkgwhWMZcFt9%2BOEGTnieanjHIwpLMyXX0DLMWGabNiJ6IAZKxld1wX%2FP%2FEkBCHeh4apvnlghaCb9ITyZ%2BqiGKExoA6iGT4AJTKd1%2FCLovUJkIcFh7hG8UZCwo9SimC8PT51cHpel257WbbXXx6DsoS0JqiHJLI3%2F0OpNPujE27noxropppYxNeSmxb51UVPt%2F%2B%2FJPF%2FWitHPBHZu159jREG7NT28lSR69x2vzXf80sDGBjAeXNchlyOcQUGpQy0DGHuwfrN776D%2BxOdAGGDp4SN6jp4I6ZE0WzVBuiOIrFNbEkm0LWzXR62sGrcekhbSmmQAfsYqAMUVNUSrlQuaaQ5vK2g9MuVLcqXpf%2FDpxdb7sWPBNeyCiEB210LMqxwtrMP%2Fpjb8GOqUBK3k2m50sgiHjMJjtnTMm3YavEk%2FRgJ%2BsEkBkLI55dOVDPAHukICnrszipAdgFYE7rbz0LEe8hTIpuBUEIDX32w9FA6MT%2BpCQJHQuoIdD5Zu46b5lE634ZMZS%2FZF%2BW8SjPN1PVqdM%2BknRPUAlYJW2iXNxNvLo8C7ocSyUGZOw2SvO0cvVwuaKaqMrLkii3gv1QIz%2BU2ddafKe4kWfd6HncVjubw5E&X-Amz-Signature=2e514dca2154f6b257f1e3ca65e49ea6adeed361c7283973c30efe3feb4800e0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE7NU5FC%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T041032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeDmmp%2Fxak95mZQX5bFDLkE7QQf1PIpdL07t11s3yLLgIgdEIRlijrQPaXrYt5RWRSP8W4nS8HBb0sD3rsGff02hEq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDEKILvzTYHdMgcVdKyrcA7nYXZz7EsSUp3SprsusmfxWBHxISzdLTdqjak0zE%2Bqgm0a3I%2F0vEMF2kO3ruW1BNCCM%2BmX5Fq2PzH9pAxsm%2Flldad5fKCnqfXo4q2P7L7lQPsQqXfYlSoekWUehWfYlACXa1ZADOuSOo8S1Lskr5PvTXyuxiC7zIMHpkKqSPW1vq3EKNbKrroUm5xrtjjQt1LWWK0lAbFMVvS9X5cJwYRxUH37AK8VfSGbqkhFWdwApeXXKPjcmCPfWEYlIkgwhWMZcFt9%2BOEGTnieanjHIwpLMyXX0DLMWGabNiJ6IAZKxld1wX%2FP%2FEkBCHeh4apvnlghaCb9ITyZ%2BqiGKExoA6iGT4AJTKd1%2FCLovUJkIcFh7hG8UZCwo9SimC8PT51cHpel257WbbXXx6DsoS0JqiHJLI3%2F0OpNPujE27noxropppYxNeSmxb51UVPt%2F%2B%2FJPF%2FWitHPBHZu159jREG7NT28lSR69x2vzXf80sDGBjAeXNchlyOcQUGpQy0DGHuwfrN776D%2BxOdAGGDp4SN6jp4I6ZE0WzVBuiOIrFNbEkm0LWzXR62sGrcekhbSmmQAfsYqAMUVNUSrlQuaaQ5vK2g9MuVLcqXpf%2FDpxdb7sWPBNeyCiEB210LMqxwtrMP%2Fpjb8GOqUBK3k2m50sgiHjMJjtnTMm3YavEk%2FRgJ%2BsEkBkLI55dOVDPAHukICnrszipAdgFYE7rbz0LEe8hTIpuBUEIDX32w9FA6MT%2BpCQJHQuoIdD5Zu46b5lE634ZMZS%2FZF%2BW8SjPN1PVqdM%2BknRPUAlYJW2iXNxNvLo8C7ocSyUGZOw2SvO0cvVwuaKaqMrLkii3gv1QIz%2BU2ddafKe4kWfd6HncVjubw5E&X-Amz-Signature=fc8e6e1e5435894aa1ca08532ad2297d74c84c9e319df550c1780e6c0e04a675&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE7NU5FC%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T041032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeDmmp%2Fxak95mZQX5bFDLkE7QQf1PIpdL07t11s3yLLgIgdEIRlijrQPaXrYt5RWRSP8W4nS8HBb0sD3rsGff02hEq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDEKILvzTYHdMgcVdKyrcA7nYXZz7EsSUp3SprsusmfxWBHxISzdLTdqjak0zE%2Bqgm0a3I%2F0vEMF2kO3ruW1BNCCM%2BmX5Fq2PzH9pAxsm%2Flldad5fKCnqfXo4q2P7L7lQPsQqXfYlSoekWUehWfYlACXa1ZADOuSOo8S1Lskr5PvTXyuxiC7zIMHpkKqSPW1vq3EKNbKrroUm5xrtjjQt1LWWK0lAbFMVvS9X5cJwYRxUH37AK8VfSGbqkhFWdwApeXXKPjcmCPfWEYlIkgwhWMZcFt9%2BOEGTnieanjHIwpLMyXX0DLMWGabNiJ6IAZKxld1wX%2FP%2FEkBCHeh4apvnlghaCb9ITyZ%2BqiGKExoA6iGT4AJTKd1%2FCLovUJkIcFh7hG8UZCwo9SimC8PT51cHpel257WbbXXx6DsoS0JqiHJLI3%2F0OpNPujE27noxropppYxNeSmxb51UVPt%2F%2B%2FJPF%2FWitHPBHZu159jREG7NT28lSR69x2vzXf80sDGBjAeXNchlyOcQUGpQy0DGHuwfrN776D%2BxOdAGGDp4SN6jp4I6ZE0WzVBuiOIrFNbEkm0LWzXR62sGrcekhbSmmQAfsYqAMUVNUSrlQuaaQ5vK2g9MuVLcqXpf%2FDpxdb7sWPBNeyCiEB210LMqxwtrMP%2Fpjb8GOqUBK3k2m50sgiHjMJjtnTMm3YavEk%2FRgJ%2BsEkBkLI55dOVDPAHukICnrszipAdgFYE7rbz0LEe8hTIpuBUEIDX32w9FA6MT%2BpCQJHQuoIdD5Zu46b5lE634ZMZS%2FZF%2BW8SjPN1PVqdM%2BknRPUAlYJW2iXNxNvLo8C7ocSyUGZOw2SvO0cvVwuaKaqMrLkii3gv1QIz%2BU2ddafKe4kWfd6HncVjubw5E&X-Amz-Signature=0b674140a8afc11c1cb2c11f8f2c313a222c414a259ae9b617e7b7c2660f5839&X-Amz-SignedHeaders=host&x-id=GetObject)
