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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWI773D4%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T030954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIEQWNu69rwRQK%2FIqwROflR9FlyAkETiTVkjmot5dwn%2B%2FAiEAkRcGv1XRtKiJ3xfWASDBnDIJVPxc01VY%2FrR7yK7m3mcq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDHAYyKBZ%2BuuBNsp0fircAzxqtY2KLxI%2BZEOI05lt4Ocg%2F%2F6%2FnYTpZbMZGxEYCmIj2QE2WY56DJJhNM2w00xah3cTGgys9s0kI7y3iFU7enJ0GYrq3BTDMQmPPQPetO9%2Fdq0%2BJBzo%2FuITnJ9Vld0qVmlR%2FuTzv0Mknn%2BQNScN00wUpbclNccwvfK%2BtbcA%2BqDmWDP1zSiIvVHhgLNwPkBPtO7zdtAD6aK%2BPUEUzG7s6g0eisj%2B4x8ynnEelhtWhxbPqYNQjakq3epbcMc2nPOe%2BuNoW0OPBXOWbrxO7A1ZA6gRDMYNUZrO%2F4N9XUErkZYDu1mlPoqON0X9UPxtgB0NlzzIGpIJz%2Fuir2eVJ5BuXFcYzO3v0Xoje0CBMVSuJ%2F6nBnZMggwdBAGiIS9OFZ8oEmAtwjsXcin9ysROW7wCPwzzcF17HriCTiT0OfV5quHT3cC7XOWCTY8jrwEhl4A%2FSWGt5d1enz%2Fbu5LzF99T7p703uPrgoBzdw9Lhd%2BRimWE3GJxXzro2KVSBN4r03STM1okFaxkXcWTAAJ40eUUpm9G9AJrMdBB9S5r0G%2FV2qEgm5%2BkIEiNbPBlJDa1xpANLtq74%2Fl66GxQ68Q2%2BhTMEpOIUQ2RHehaoSvFNKIJ%2FPMSq5Kc%2BRf1WBXfx8zEMLWGhr0GOqUB1CcwEA8q5A7qjuE4TT128bX8Va3aBUZIY043RocyEFq3vhS3tZMEtFPTTOuQK2yGyEDIx6QAX6%2FLQbBZucJMDWn%2BC2Odv0O3hG522XcP1qiiZiAvLZWGDEIRU51utUFBRtQVCoVDDvvDmo1bruRlMO%2BkORIvtJfTbDyMXhKdtJUSPoq0avv7HzoiH1ab5eXHCq1YA4ceWn98MSR2aJIQ1WScTrp9&X-Amz-Signature=606afd23df4dd9021bd72a55cad2ad1feb30880130f2e9670838c0ecd3bfeff2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWI773D4%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T030954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIEQWNu69rwRQK%2FIqwROflR9FlyAkETiTVkjmot5dwn%2B%2FAiEAkRcGv1XRtKiJ3xfWASDBnDIJVPxc01VY%2FrR7yK7m3mcq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDHAYyKBZ%2BuuBNsp0fircAzxqtY2KLxI%2BZEOI05lt4Ocg%2F%2F6%2FnYTpZbMZGxEYCmIj2QE2WY56DJJhNM2w00xah3cTGgys9s0kI7y3iFU7enJ0GYrq3BTDMQmPPQPetO9%2Fdq0%2BJBzo%2FuITnJ9Vld0qVmlR%2FuTzv0Mknn%2BQNScN00wUpbclNccwvfK%2BtbcA%2BqDmWDP1zSiIvVHhgLNwPkBPtO7zdtAD6aK%2BPUEUzG7s6g0eisj%2B4x8ynnEelhtWhxbPqYNQjakq3epbcMc2nPOe%2BuNoW0OPBXOWbrxO7A1ZA6gRDMYNUZrO%2F4N9XUErkZYDu1mlPoqON0X9UPxtgB0NlzzIGpIJz%2Fuir2eVJ5BuXFcYzO3v0Xoje0CBMVSuJ%2F6nBnZMggwdBAGiIS9OFZ8oEmAtwjsXcin9ysROW7wCPwzzcF17HriCTiT0OfV5quHT3cC7XOWCTY8jrwEhl4A%2FSWGt5d1enz%2Fbu5LzF99T7p703uPrgoBzdw9Lhd%2BRimWE3GJxXzro2KVSBN4r03STM1okFaxkXcWTAAJ40eUUpm9G9AJrMdBB9S5r0G%2FV2qEgm5%2BkIEiNbPBlJDa1xpANLtq74%2Fl66GxQ68Q2%2BhTMEpOIUQ2RHehaoSvFNKIJ%2FPMSq5Kc%2BRf1WBXfx8zEMLWGhr0GOqUB1CcwEA8q5A7qjuE4TT128bX8Va3aBUZIY043RocyEFq3vhS3tZMEtFPTTOuQK2yGyEDIx6QAX6%2FLQbBZucJMDWn%2BC2Odv0O3hG522XcP1qiiZiAvLZWGDEIRU51utUFBRtQVCoVDDvvDmo1bruRlMO%2BkORIvtJfTbDyMXhKdtJUSPoq0avv7HzoiH1ab5eXHCq1YA4ceWn98MSR2aJIQ1WScTrp9&X-Amz-Signature=ad6ed67818c5d7d1337b84ab2f44deb0de62ae5f55c6504cfc8fbfb2254f293e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWI773D4%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T030954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIEQWNu69rwRQK%2FIqwROflR9FlyAkETiTVkjmot5dwn%2B%2FAiEAkRcGv1XRtKiJ3xfWASDBnDIJVPxc01VY%2FrR7yK7m3mcq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDHAYyKBZ%2BuuBNsp0fircAzxqtY2KLxI%2BZEOI05lt4Ocg%2F%2F6%2FnYTpZbMZGxEYCmIj2QE2WY56DJJhNM2w00xah3cTGgys9s0kI7y3iFU7enJ0GYrq3BTDMQmPPQPetO9%2Fdq0%2BJBzo%2FuITnJ9Vld0qVmlR%2FuTzv0Mknn%2BQNScN00wUpbclNccwvfK%2BtbcA%2BqDmWDP1zSiIvVHhgLNwPkBPtO7zdtAD6aK%2BPUEUzG7s6g0eisj%2B4x8ynnEelhtWhxbPqYNQjakq3epbcMc2nPOe%2BuNoW0OPBXOWbrxO7A1ZA6gRDMYNUZrO%2F4N9XUErkZYDu1mlPoqON0X9UPxtgB0NlzzIGpIJz%2Fuir2eVJ5BuXFcYzO3v0Xoje0CBMVSuJ%2F6nBnZMggwdBAGiIS9OFZ8oEmAtwjsXcin9ysROW7wCPwzzcF17HriCTiT0OfV5quHT3cC7XOWCTY8jrwEhl4A%2FSWGt5d1enz%2Fbu5LzF99T7p703uPrgoBzdw9Lhd%2BRimWE3GJxXzro2KVSBN4r03STM1okFaxkXcWTAAJ40eUUpm9G9AJrMdBB9S5r0G%2FV2qEgm5%2BkIEiNbPBlJDa1xpANLtq74%2Fl66GxQ68Q2%2BhTMEpOIUQ2RHehaoSvFNKIJ%2FPMSq5Kc%2BRf1WBXfx8zEMLWGhr0GOqUB1CcwEA8q5A7qjuE4TT128bX8Va3aBUZIY043RocyEFq3vhS3tZMEtFPTTOuQK2yGyEDIx6QAX6%2FLQbBZucJMDWn%2BC2Odv0O3hG522XcP1qiiZiAvLZWGDEIRU51utUFBRtQVCoVDDvvDmo1bruRlMO%2BkORIvtJfTbDyMXhKdtJUSPoq0avv7HzoiH1ab5eXHCq1YA4ceWn98MSR2aJIQ1WScTrp9&X-Amz-Signature=0e557057565801210de5713e4f2da478a0732a5f814641e7f998bfca38502c22&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWI773D4%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T030954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIEQWNu69rwRQK%2FIqwROflR9FlyAkETiTVkjmot5dwn%2B%2FAiEAkRcGv1XRtKiJ3xfWASDBnDIJVPxc01VY%2FrR7yK7m3mcq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDHAYyKBZ%2BuuBNsp0fircAzxqtY2KLxI%2BZEOI05lt4Ocg%2F%2F6%2FnYTpZbMZGxEYCmIj2QE2WY56DJJhNM2w00xah3cTGgys9s0kI7y3iFU7enJ0GYrq3BTDMQmPPQPetO9%2Fdq0%2BJBzo%2FuITnJ9Vld0qVmlR%2FuTzv0Mknn%2BQNScN00wUpbclNccwvfK%2BtbcA%2BqDmWDP1zSiIvVHhgLNwPkBPtO7zdtAD6aK%2BPUEUzG7s6g0eisj%2B4x8ynnEelhtWhxbPqYNQjakq3epbcMc2nPOe%2BuNoW0OPBXOWbrxO7A1ZA6gRDMYNUZrO%2F4N9XUErkZYDu1mlPoqON0X9UPxtgB0NlzzIGpIJz%2Fuir2eVJ5BuXFcYzO3v0Xoje0CBMVSuJ%2F6nBnZMggwdBAGiIS9OFZ8oEmAtwjsXcin9ysROW7wCPwzzcF17HriCTiT0OfV5quHT3cC7XOWCTY8jrwEhl4A%2FSWGt5d1enz%2Fbu5LzF99T7p703uPrgoBzdw9Lhd%2BRimWE3GJxXzro2KVSBN4r03STM1okFaxkXcWTAAJ40eUUpm9G9AJrMdBB9S5r0G%2FV2qEgm5%2BkIEiNbPBlJDa1xpANLtq74%2Fl66GxQ68Q2%2BhTMEpOIUQ2RHehaoSvFNKIJ%2FPMSq5Kc%2BRf1WBXfx8zEMLWGhr0GOqUB1CcwEA8q5A7qjuE4TT128bX8Va3aBUZIY043RocyEFq3vhS3tZMEtFPTTOuQK2yGyEDIx6QAX6%2FLQbBZucJMDWn%2BC2Odv0O3hG522XcP1qiiZiAvLZWGDEIRU51utUFBRtQVCoVDDvvDmo1bruRlMO%2BkORIvtJfTbDyMXhKdtJUSPoq0avv7HzoiH1ab5eXHCq1YA4ceWn98MSR2aJIQ1WScTrp9&X-Amz-Signature=0463caad0fc5c2b596766b26c7a3d7cf4a9cc727910c91b408fbd92029fcc1f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWI773D4%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T030954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIEQWNu69rwRQK%2FIqwROflR9FlyAkETiTVkjmot5dwn%2B%2FAiEAkRcGv1XRtKiJ3xfWASDBnDIJVPxc01VY%2FrR7yK7m3mcq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDHAYyKBZ%2BuuBNsp0fircAzxqtY2KLxI%2BZEOI05lt4Ocg%2F%2F6%2FnYTpZbMZGxEYCmIj2QE2WY56DJJhNM2w00xah3cTGgys9s0kI7y3iFU7enJ0GYrq3BTDMQmPPQPetO9%2Fdq0%2BJBzo%2FuITnJ9Vld0qVmlR%2FuTzv0Mknn%2BQNScN00wUpbclNccwvfK%2BtbcA%2BqDmWDP1zSiIvVHhgLNwPkBPtO7zdtAD6aK%2BPUEUzG7s6g0eisj%2B4x8ynnEelhtWhxbPqYNQjakq3epbcMc2nPOe%2BuNoW0OPBXOWbrxO7A1ZA6gRDMYNUZrO%2F4N9XUErkZYDu1mlPoqON0X9UPxtgB0NlzzIGpIJz%2Fuir2eVJ5BuXFcYzO3v0Xoje0CBMVSuJ%2F6nBnZMggwdBAGiIS9OFZ8oEmAtwjsXcin9ysROW7wCPwzzcF17HriCTiT0OfV5quHT3cC7XOWCTY8jrwEhl4A%2FSWGt5d1enz%2Fbu5LzF99T7p703uPrgoBzdw9Lhd%2BRimWE3GJxXzro2KVSBN4r03STM1okFaxkXcWTAAJ40eUUpm9G9AJrMdBB9S5r0G%2FV2qEgm5%2BkIEiNbPBlJDa1xpANLtq74%2Fl66GxQ68Q2%2BhTMEpOIUQ2RHehaoSvFNKIJ%2FPMSq5Kc%2BRf1WBXfx8zEMLWGhr0GOqUB1CcwEA8q5A7qjuE4TT128bX8Va3aBUZIY043RocyEFq3vhS3tZMEtFPTTOuQK2yGyEDIx6QAX6%2FLQbBZucJMDWn%2BC2Odv0O3hG522XcP1qiiZiAvLZWGDEIRU51utUFBRtQVCoVDDvvDmo1bruRlMO%2BkORIvtJfTbDyMXhKdtJUSPoq0avv7HzoiH1ab5eXHCq1YA4ceWn98MSR2aJIQ1WScTrp9&X-Amz-Signature=5f5d43b74a4e2ca923409c2140baae41e3af1da55388f7d20c7246931d1584b7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWI773D4%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T030954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIEQWNu69rwRQK%2FIqwROflR9FlyAkETiTVkjmot5dwn%2B%2FAiEAkRcGv1XRtKiJ3xfWASDBnDIJVPxc01VY%2FrR7yK7m3mcq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDHAYyKBZ%2BuuBNsp0fircAzxqtY2KLxI%2BZEOI05lt4Ocg%2F%2F6%2FnYTpZbMZGxEYCmIj2QE2WY56DJJhNM2w00xah3cTGgys9s0kI7y3iFU7enJ0GYrq3BTDMQmPPQPetO9%2Fdq0%2BJBzo%2FuITnJ9Vld0qVmlR%2FuTzv0Mknn%2BQNScN00wUpbclNccwvfK%2BtbcA%2BqDmWDP1zSiIvVHhgLNwPkBPtO7zdtAD6aK%2BPUEUzG7s6g0eisj%2B4x8ynnEelhtWhxbPqYNQjakq3epbcMc2nPOe%2BuNoW0OPBXOWbrxO7A1ZA6gRDMYNUZrO%2F4N9XUErkZYDu1mlPoqON0X9UPxtgB0NlzzIGpIJz%2Fuir2eVJ5BuXFcYzO3v0Xoje0CBMVSuJ%2F6nBnZMggwdBAGiIS9OFZ8oEmAtwjsXcin9ysROW7wCPwzzcF17HriCTiT0OfV5quHT3cC7XOWCTY8jrwEhl4A%2FSWGt5d1enz%2Fbu5LzF99T7p703uPrgoBzdw9Lhd%2BRimWE3GJxXzro2KVSBN4r03STM1okFaxkXcWTAAJ40eUUpm9G9AJrMdBB9S5r0G%2FV2qEgm5%2BkIEiNbPBlJDa1xpANLtq74%2Fl66GxQ68Q2%2BhTMEpOIUQ2RHehaoSvFNKIJ%2FPMSq5Kc%2BRf1WBXfx8zEMLWGhr0GOqUB1CcwEA8q5A7qjuE4TT128bX8Va3aBUZIY043RocyEFq3vhS3tZMEtFPTTOuQK2yGyEDIx6QAX6%2FLQbBZucJMDWn%2BC2Odv0O3hG522XcP1qiiZiAvLZWGDEIRU51utUFBRtQVCoVDDvvDmo1bruRlMO%2BkORIvtJfTbDyMXhKdtJUSPoq0avv7HzoiH1ab5eXHCq1YA4ceWn98MSR2aJIQ1WScTrp9&X-Amz-Signature=851fa421e4bc8632ffcb0501023bb06eff9b70e144644a70c24c224e58d72294&X-Amz-SignedHeaders=host&x-id=GetObject)
