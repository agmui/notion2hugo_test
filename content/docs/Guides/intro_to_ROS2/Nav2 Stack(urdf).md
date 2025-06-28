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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEGFBRSF%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T100823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHz4y89GKs7kuyb%2Fd0%2FmvPf60YI8FjJaAPqdkcrfvHKwIhAM%2FVX3JmOSHk60%2B7NJwGSNSbV0mdWWlfnrQM5NSB4qIAKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytetRTRKogaNlSgHoq3AM5OGVws1EE0OkbjmmBH2Rkcm96ypGqvidoaCyoQ9Kp%2BRTS1cJ89ReU7j0%2BqY68nkPqqYY2AFgus3nVGpnLNLclbeJth8ODycxR5tLJ915jHisg3%2FzTM%2Bi2bfSgXXHsm%2B0xoVZo6%2FjObaagvGp0%2FoVLZB1uML7wdG3ofmyyYAFECbGEIsQ1uaj3rY8tf0ZLsiUmJpJTLJDW3dx3PpOq2aicUmWgMAPNGpMIriVZNDXp5gTgt70PcpvNIzgdednjzhu%2FIbIgP%2FRaLRGK1uAkAgnwXMtmv4UmNqL6D3mODv09iqiYg3%2FD%2BB%2FHWwRw2zsWF7b%2FtsAZvDHFgAWAxK5HLjW8agwGPkkp2m734FRkj5fYYnoIIsTYruUMDLW6SVP4tPHIcBAQO6hmiW7wYHdvn3LAra%2FLKQm8svzWYaeUffM6SBwZi0t8lxj7qjC3qIbAYNqrRg6txK9QEXVF1mLXx7HOwsAV%2BN15GAGUaalMD%2FjVnLT3hB3GhC7KM5GaNkrc23QJvxiUvUMLU0p8ZWzbiLKAOIpKIqafZyzu51zYbxEG6P2eq8y9GEuXCiiWkhHfBPhA0RLtcqtKQXObW0f0SboWzA8AF9FyQ%2B9UO6fR92rZLic%2BI7utwj%2BhyvlFBDDLyv7CBjqkAVwpblr%2Fev5O9iMjPk9AeVjObcqkZizt7zeFcGmpnCMu53v7wC2BQXNb7w6aPVGjMeAapfUcqlKIZzHfk%2FOKHhdlhDtmxKvUsDfOjlxrQKOxwZ1V3dumIPxxkbGHM1eLrqibCXOqu49uR9NLAW1BtpF93NKauWzmEBV15hL0JKkFVzBYtpHEKSKHEDn4y7LyF9ZmQVNUdvsE8COBvHWj%2BAuALRpH&X-Amz-Signature=a55a1a0619353cd8f071b7fde8d03456d87110293b8ee13c9f8ebc34ca9752b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEGFBRSF%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T100823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHz4y89GKs7kuyb%2Fd0%2FmvPf60YI8FjJaAPqdkcrfvHKwIhAM%2FVX3JmOSHk60%2B7NJwGSNSbV0mdWWlfnrQM5NSB4qIAKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytetRTRKogaNlSgHoq3AM5OGVws1EE0OkbjmmBH2Rkcm96ypGqvidoaCyoQ9Kp%2BRTS1cJ89ReU7j0%2BqY68nkPqqYY2AFgus3nVGpnLNLclbeJth8ODycxR5tLJ915jHisg3%2FzTM%2Bi2bfSgXXHsm%2B0xoVZo6%2FjObaagvGp0%2FoVLZB1uML7wdG3ofmyyYAFECbGEIsQ1uaj3rY8tf0ZLsiUmJpJTLJDW3dx3PpOq2aicUmWgMAPNGpMIriVZNDXp5gTgt70PcpvNIzgdednjzhu%2FIbIgP%2FRaLRGK1uAkAgnwXMtmv4UmNqL6D3mODv09iqiYg3%2FD%2BB%2FHWwRw2zsWF7b%2FtsAZvDHFgAWAxK5HLjW8agwGPkkp2m734FRkj5fYYnoIIsTYruUMDLW6SVP4tPHIcBAQO6hmiW7wYHdvn3LAra%2FLKQm8svzWYaeUffM6SBwZi0t8lxj7qjC3qIbAYNqrRg6txK9QEXVF1mLXx7HOwsAV%2BN15GAGUaalMD%2FjVnLT3hB3GhC7KM5GaNkrc23QJvxiUvUMLU0p8ZWzbiLKAOIpKIqafZyzu51zYbxEG6P2eq8y9GEuXCiiWkhHfBPhA0RLtcqtKQXObW0f0SboWzA8AF9FyQ%2B9UO6fR92rZLic%2BI7utwj%2BhyvlFBDDLyv7CBjqkAVwpblr%2Fev5O9iMjPk9AeVjObcqkZizt7zeFcGmpnCMu53v7wC2BQXNb7w6aPVGjMeAapfUcqlKIZzHfk%2FOKHhdlhDtmxKvUsDfOjlxrQKOxwZ1V3dumIPxxkbGHM1eLrqibCXOqu49uR9NLAW1BtpF93NKauWzmEBV15hL0JKkFVzBYtpHEKSKHEDn4y7LyF9ZmQVNUdvsE8COBvHWj%2BAuALRpH&X-Amz-Signature=b507e561553632ceda7b3c7e63c5a8885ae0347d4a60eaab9d61319d5be5c95d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEGFBRSF%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T100823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHz4y89GKs7kuyb%2Fd0%2FmvPf60YI8FjJaAPqdkcrfvHKwIhAM%2FVX3JmOSHk60%2B7NJwGSNSbV0mdWWlfnrQM5NSB4qIAKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytetRTRKogaNlSgHoq3AM5OGVws1EE0OkbjmmBH2Rkcm96ypGqvidoaCyoQ9Kp%2BRTS1cJ89ReU7j0%2BqY68nkPqqYY2AFgus3nVGpnLNLclbeJth8ODycxR5tLJ915jHisg3%2FzTM%2Bi2bfSgXXHsm%2B0xoVZo6%2FjObaagvGp0%2FoVLZB1uML7wdG3ofmyyYAFECbGEIsQ1uaj3rY8tf0ZLsiUmJpJTLJDW3dx3PpOq2aicUmWgMAPNGpMIriVZNDXp5gTgt70PcpvNIzgdednjzhu%2FIbIgP%2FRaLRGK1uAkAgnwXMtmv4UmNqL6D3mODv09iqiYg3%2FD%2BB%2FHWwRw2zsWF7b%2FtsAZvDHFgAWAxK5HLjW8agwGPkkp2m734FRkj5fYYnoIIsTYruUMDLW6SVP4tPHIcBAQO6hmiW7wYHdvn3LAra%2FLKQm8svzWYaeUffM6SBwZi0t8lxj7qjC3qIbAYNqrRg6txK9QEXVF1mLXx7HOwsAV%2BN15GAGUaalMD%2FjVnLT3hB3GhC7KM5GaNkrc23QJvxiUvUMLU0p8ZWzbiLKAOIpKIqafZyzu51zYbxEG6P2eq8y9GEuXCiiWkhHfBPhA0RLtcqtKQXObW0f0SboWzA8AF9FyQ%2B9UO6fR92rZLic%2BI7utwj%2BhyvlFBDDLyv7CBjqkAVwpblr%2Fev5O9iMjPk9AeVjObcqkZizt7zeFcGmpnCMu53v7wC2BQXNb7w6aPVGjMeAapfUcqlKIZzHfk%2FOKHhdlhDtmxKvUsDfOjlxrQKOxwZ1V3dumIPxxkbGHM1eLrqibCXOqu49uR9NLAW1BtpF93NKauWzmEBV15hL0JKkFVzBYtpHEKSKHEDn4y7LyF9ZmQVNUdvsE8COBvHWj%2BAuALRpH&X-Amz-Signature=a004d6eb540b5bb5498f0f4a6d1f58cd4a47487c13f8fac0b5522288be6b5394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEGFBRSF%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T100823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHz4y89GKs7kuyb%2Fd0%2FmvPf60YI8FjJaAPqdkcrfvHKwIhAM%2FVX3JmOSHk60%2B7NJwGSNSbV0mdWWlfnrQM5NSB4qIAKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytetRTRKogaNlSgHoq3AM5OGVws1EE0OkbjmmBH2Rkcm96ypGqvidoaCyoQ9Kp%2BRTS1cJ89ReU7j0%2BqY68nkPqqYY2AFgus3nVGpnLNLclbeJth8ODycxR5tLJ915jHisg3%2FzTM%2Bi2bfSgXXHsm%2B0xoVZo6%2FjObaagvGp0%2FoVLZB1uML7wdG3ofmyyYAFECbGEIsQ1uaj3rY8tf0ZLsiUmJpJTLJDW3dx3PpOq2aicUmWgMAPNGpMIriVZNDXp5gTgt70PcpvNIzgdednjzhu%2FIbIgP%2FRaLRGK1uAkAgnwXMtmv4UmNqL6D3mODv09iqiYg3%2FD%2BB%2FHWwRw2zsWF7b%2FtsAZvDHFgAWAxK5HLjW8agwGPkkp2m734FRkj5fYYnoIIsTYruUMDLW6SVP4tPHIcBAQO6hmiW7wYHdvn3LAra%2FLKQm8svzWYaeUffM6SBwZi0t8lxj7qjC3qIbAYNqrRg6txK9QEXVF1mLXx7HOwsAV%2BN15GAGUaalMD%2FjVnLT3hB3GhC7KM5GaNkrc23QJvxiUvUMLU0p8ZWzbiLKAOIpKIqafZyzu51zYbxEG6P2eq8y9GEuXCiiWkhHfBPhA0RLtcqtKQXObW0f0SboWzA8AF9FyQ%2B9UO6fR92rZLic%2BI7utwj%2BhyvlFBDDLyv7CBjqkAVwpblr%2Fev5O9iMjPk9AeVjObcqkZizt7zeFcGmpnCMu53v7wC2BQXNb7w6aPVGjMeAapfUcqlKIZzHfk%2FOKHhdlhDtmxKvUsDfOjlxrQKOxwZ1V3dumIPxxkbGHM1eLrqibCXOqu49uR9NLAW1BtpF93NKauWzmEBV15hL0JKkFVzBYtpHEKSKHEDn4y7LyF9ZmQVNUdvsE8COBvHWj%2BAuALRpH&X-Amz-Signature=7eca4af84a9ff1da687b71126361786bbb9a679d4f21ebc3325300bb57dd6d69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEGFBRSF%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T100823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHz4y89GKs7kuyb%2Fd0%2FmvPf60YI8FjJaAPqdkcrfvHKwIhAM%2FVX3JmOSHk60%2B7NJwGSNSbV0mdWWlfnrQM5NSB4qIAKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytetRTRKogaNlSgHoq3AM5OGVws1EE0OkbjmmBH2Rkcm96ypGqvidoaCyoQ9Kp%2BRTS1cJ89ReU7j0%2BqY68nkPqqYY2AFgus3nVGpnLNLclbeJth8ODycxR5tLJ915jHisg3%2FzTM%2Bi2bfSgXXHsm%2B0xoVZo6%2FjObaagvGp0%2FoVLZB1uML7wdG3ofmyyYAFECbGEIsQ1uaj3rY8tf0ZLsiUmJpJTLJDW3dx3PpOq2aicUmWgMAPNGpMIriVZNDXp5gTgt70PcpvNIzgdednjzhu%2FIbIgP%2FRaLRGK1uAkAgnwXMtmv4UmNqL6D3mODv09iqiYg3%2FD%2BB%2FHWwRw2zsWF7b%2FtsAZvDHFgAWAxK5HLjW8agwGPkkp2m734FRkj5fYYnoIIsTYruUMDLW6SVP4tPHIcBAQO6hmiW7wYHdvn3LAra%2FLKQm8svzWYaeUffM6SBwZi0t8lxj7qjC3qIbAYNqrRg6txK9QEXVF1mLXx7HOwsAV%2BN15GAGUaalMD%2FjVnLT3hB3GhC7KM5GaNkrc23QJvxiUvUMLU0p8ZWzbiLKAOIpKIqafZyzu51zYbxEG6P2eq8y9GEuXCiiWkhHfBPhA0RLtcqtKQXObW0f0SboWzA8AF9FyQ%2B9UO6fR92rZLic%2BI7utwj%2BhyvlFBDDLyv7CBjqkAVwpblr%2Fev5O9iMjPk9AeVjObcqkZizt7zeFcGmpnCMu53v7wC2BQXNb7w6aPVGjMeAapfUcqlKIZzHfk%2FOKHhdlhDtmxKvUsDfOjlxrQKOxwZ1V3dumIPxxkbGHM1eLrqibCXOqu49uR9NLAW1BtpF93NKauWzmEBV15hL0JKkFVzBYtpHEKSKHEDn4y7LyF9ZmQVNUdvsE8COBvHWj%2BAuALRpH&X-Amz-Signature=20749184cacbda056fed77ce4ae63b154a4ea39a09e9adf3f2dbe26449cfe4a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEGFBRSF%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T100823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHz4y89GKs7kuyb%2Fd0%2FmvPf60YI8FjJaAPqdkcrfvHKwIhAM%2FVX3JmOSHk60%2B7NJwGSNSbV0mdWWlfnrQM5NSB4qIAKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytetRTRKogaNlSgHoq3AM5OGVws1EE0OkbjmmBH2Rkcm96ypGqvidoaCyoQ9Kp%2BRTS1cJ89ReU7j0%2BqY68nkPqqYY2AFgus3nVGpnLNLclbeJth8ODycxR5tLJ915jHisg3%2FzTM%2Bi2bfSgXXHsm%2B0xoVZo6%2FjObaagvGp0%2FoVLZB1uML7wdG3ofmyyYAFECbGEIsQ1uaj3rY8tf0ZLsiUmJpJTLJDW3dx3PpOq2aicUmWgMAPNGpMIriVZNDXp5gTgt70PcpvNIzgdednjzhu%2FIbIgP%2FRaLRGK1uAkAgnwXMtmv4UmNqL6D3mODv09iqiYg3%2FD%2BB%2FHWwRw2zsWF7b%2FtsAZvDHFgAWAxK5HLjW8agwGPkkp2m734FRkj5fYYnoIIsTYruUMDLW6SVP4tPHIcBAQO6hmiW7wYHdvn3LAra%2FLKQm8svzWYaeUffM6SBwZi0t8lxj7qjC3qIbAYNqrRg6txK9QEXVF1mLXx7HOwsAV%2BN15GAGUaalMD%2FjVnLT3hB3GhC7KM5GaNkrc23QJvxiUvUMLU0p8ZWzbiLKAOIpKIqafZyzu51zYbxEG6P2eq8y9GEuXCiiWkhHfBPhA0RLtcqtKQXObW0f0SboWzA8AF9FyQ%2B9UO6fR92rZLic%2BI7utwj%2BhyvlFBDDLyv7CBjqkAVwpblr%2Fev5O9iMjPk9AeVjObcqkZizt7zeFcGmpnCMu53v7wC2BQXNb7w6aPVGjMeAapfUcqlKIZzHfk%2FOKHhdlhDtmxKvUsDfOjlxrQKOxwZ1V3dumIPxxkbGHM1eLrqibCXOqu49uR9NLAW1BtpF93NKauWzmEBV15hL0JKkFVzBYtpHEKSKHEDn4y7LyF9ZmQVNUdvsE8COBvHWj%2BAuALRpH&X-Amz-Signature=d7432b177fb26f2deb5759add404d8de2b7102731f2e2ba9b4c7dcf6397925aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
