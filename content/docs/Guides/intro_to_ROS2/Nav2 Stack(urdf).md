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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5RWWVPK%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIETMOd8YxkhYjh5stGgjkhJb6l%2Bv7c%2F90y2vUYT2Up%2FtAiEAoHNM%2BTufBc6oNGcp7iyovahCQSN6MtR8T37zb9Leb9gq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDHCLOs%2B%2FW80H0eUyPCrcA%2B1f7Wc05Ihmrf4%2Fdt3LKbTow6M3ykQRptyLKDVj9RUDCKbmj8WgoTyUHd8oqqe6eeud8uMBpaFYGhQZCex5qm1FXhob81hmYHUYVUJ3dpvrYlcdilyxuqHKoG0Q66u8u0sjIO%2BBp6Nqqjp9m%2BlxZzN%2BJrAfWo3JWRgltWcfnRrOaDbiANHYyowGuiNGgDnm1vpzv5Q1hUUXKS4Rhy28q2G5H6g3h7EctT4Ocfl2hJdhWshHpLIAOYAFp1VGfOvo8OG8HCYX2umw8UI1xU4TLMBGcPvDiLxrF62AXV33dgJfFlRchUQPlKUBsFFU5n00bQBEPiVcTPFbM%2BY2HzJ4y7QTdA6Q%2FBzbOFtiLSbWTWPDLb%2BMl%2B4JlakBBv3vlSf67zNUPzxSSbmHvOuImlBLyMBMliU6T0PmlXCQJklWfWDOr9x%2BeV0oT4R2GS%2FeDYe1gPGfF%2BkH0nJ8ZROnjAcAi8pbjWP7WzbkRsalwQXTdEUi5C%2F2NWdEGZV3fFNsUMoAqrvPMzyqSTSFKmmpyfuL6QDJcIk9d6ygIc0hJdTKdIqM%2Fi90joW7kfeCMR1d%2BgsVkMnpVwksCetMaWYLOuaF9vAh2LKaIHqA502lOXH0lMDUtKNn04CJ48Y5Xqj5MPTXh8IGOqUBN0LXQLa%2B8FZmfDq9XBYm4I%2BoMHZ3lAponcgShbiz32Y5W97HdxNok4dOBpD2fSBweqxU8hhR7JxkaNhXLCsN5%2BDHHVFkdVRHCQfnZV8P2D5g2z167fOI6zYYbylO1QXr3CAjj1Dk0bbleGlk4xeymI5o4V5mpvNO3tq8bXHF84k0avPfVmLd0NOq46F9uvU1Gi2HgL3D0X3RgSdgGX57i01c11Bf&X-Amz-Signature=32e240b4cc15b489258986ace5b760b603df468fd8e1699a0cd9ebc5f629b9f8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5RWWVPK%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIETMOd8YxkhYjh5stGgjkhJb6l%2Bv7c%2F90y2vUYT2Up%2FtAiEAoHNM%2BTufBc6oNGcp7iyovahCQSN6MtR8T37zb9Leb9gq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDHCLOs%2B%2FW80H0eUyPCrcA%2B1f7Wc05Ihmrf4%2Fdt3LKbTow6M3ykQRptyLKDVj9RUDCKbmj8WgoTyUHd8oqqe6eeud8uMBpaFYGhQZCex5qm1FXhob81hmYHUYVUJ3dpvrYlcdilyxuqHKoG0Q66u8u0sjIO%2BBp6Nqqjp9m%2BlxZzN%2BJrAfWo3JWRgltWcfnRrOaDbiANHYyowGuiNGgDnm1vpzv5Q1hUUXKS4Rhy28q2G5H6g3h7EctT4Ocfl2hJdhWshHpLIAOYAFp1VGfOvo8OG8HCYX2umw8UI1xU4TLMBGcPvDiLxrF62AXV33dgJfFlRchUQPlKUBsFFU5n00bQBEPiVcTPFbM%2BY2HzJ4y7QTdA6Q%2FBzbOFtiLSbWTWPDLb%2BMl%2B4JlakBBv3vlSf67zNUPzxSSbmHvOuImlBLyMBMliU6T0PmlXCQJklWfWDOr9x%2BeV0oT4R2GS%2FeDYe1gPGfF%2BkH0nJ8ZROnjAcAi8pbjWP7WzbkRsalwQXTdEUi5C%2F2NWdEGZV3fFNsUMoAqrvPMzyqSTSFKmmpyfuL6QDJcIk9d6ygIc0hJdTKdIqM%2Fi90joW7kfeCMR1d%2BgsVkMnpVwksCetMaWYLOuaF9vAh2LKaIHqA502lOXH0lMDUtKNn04CJ48Y5Xqj5MPTXh8IGOqUBN0LXQLa%2B8FZmfDq9XBYm4I%2BoMHZ3lAponcgShbiz32Y5W97HdxNok4dOBpD2fSBweqxU8hhR7JxkaNhXLCsN5%2BDHHVFkdVRHCQfnZV8P2D5g2z167fOI6zYYbylO1QXr3CAjj1Dk0bbleGlk4xeymI5o4V5mpvNO3tq8bXHF84k0avPfVmLd0NOq46F9uvU1Gi2HgL3D0X3RgSdgGX57i01c11Bf&X-Amz-Signature=40f2b646946bbcfe65ba8300214df7446568831440d47e85b763c34b7575bd83&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5RWWVPK%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIETMOd8YxkhYjh5stGgjkhJb6l%2Bv7c%2F90y2vUYT2Up%2FtAiEAoHNM%2BTufBc6oNGcp7iyovahCQSN6MtR8T37zb9Leb9gq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDHCLOs%2B%2FW80H0eUyPCrcA%2B1f7Wc05Ihmrf4%2Fdt3LKbTow6M3ykQRptyLKDVj9RUDCKbmj8WgoTyUHd8oqqe6eeud8uMBpaFYGhQZCex5qm1FXhob81hmYHUYVUJ3dpvrYlcdilyxuqHKoG0Q66u8u0sjIO%2BBp6Nqqjp9m%2BlxZzN%2BJrAfWo3JWRgltWcfnRrOaDbiANHYyowGuiNGgDnm1vpzv5Q1hUUXKS4Rhy28q2G5H6g3h7EctT4Ocfl2hJdhWshHpLIAOYAFp1VGfOvo8OG8HCYX2umw8UI1xU4TLMBGcPvDiLxrF62AXV33dgJfFlRchUQPlKUBsFFU5n00bQBEPiVcTPFbM%2BY2HzJ4y7QTdA6Q%2FBzbOFtiLSbWTWPDLb%2BMl%2B4JlakBBv3vlSf67zNUPzxSSbmHvOuImlBLyMBMliU6T0PmlXCQJklWfWDOr9x%2BeV0oT4R2GS%2FeDYe1gPGfF%2BkH0nJ8ZROnjAcAi8pbjWP7WzbkRsalwQXTdEUi5C%2F2NWdEGZV3fFNsUMoAqrvPMzyqSTSFKmmpyfuL6QDJcIk9d6ygIc0hJdTKdIqM%2Fi90joW7kfeCMR1d%2BgsVkMnpVwksCetMaWYLOuaF9vAh2LKaIHqA502lOXH0lMDUtKNn04CJ48Y5Xqj5MPTXh8IGOqUBN0LXQLa%2B8FZmfDq9XBYm4I%2BoMHZ3lAponcgShbiz32Y5W97HdxNok4dOBpD2fSBweqxU8hhR7JxkaNhXLCsN5%2BDHHVFkdVRHCQfnZV8P2D5g2z167fOI6zYYbylO1QXr3CAjj1Dk0bbleGlk4xeymI5o4V5mpvNO3tq8bXHF84k0avPfVmLd0NOq46F9uvU1Gi2HgL3D0X3RgSdgGX57i01c11Bf&X-Amz-Signature=3688bbf05cf6c5ce09a034837ba9da207de5b8748e01a52d897ecc5698bbc1c0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5RWWVPK%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIETMOd8YxkhYjh5stGgjkhJb6l%2Bv7c%2F90y2vUYT2Up%2FtAiEAoHNM%2BTufBc6oNGcp7iyovahCQSN6MtR8T37zb9Leb9gq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDHCLOs%2B%2FW80H0eUyPCrcA%2B1f7Wc05Ihmrf4%2Fdt3LKbTow6M3ykQRptyLKDVj9RUDCKbmj8WgoTyUHd8oqqe6eeud8uMBpaFYGhQZCex5qm1FXhob81hmYHUYVUJ3dpvrYlcdilyxuqHKoG0Q66u8u0sjIO%2BBp6Nqqjp9m%2BlxZzN%2BJrAfWo3JWRgltWcfnRrOaDbiANHYyowGuiNGgDnm1vpzv5Q1hUUXKS4Rhy28q2G5H6g3h7EctT4Ocfl2hJdhWshHpLIAOYAFp1VGfOvo8OG8HCYX2umw8UI1xU4TLMBGcPvDiLxrF62AXV33dgJfFlRchUQPlKUBsFFU5n00bQBEPiVcTPFbM%2BY2HzJ4y7QTdA6Q%2FBzbOFtiLSbWTWPDLb%2BMl%2B4JlakBBv3vlSf67zNUPzxSSbmHvOuImlBLyMBMliU6T0PmlXCQJklWfWDOr9x%2BeV0oT4R2GS%2FeDYe1gPGfF%2BkH0nJ8ZROnjAcAi8pbjWP7WzbkRsalwQXTdEUi5C%2F2NWdEGZV3fFNsUMoAqrvPMzyqSTSFKmmpyfuL6QDJcIk9d6ygIc0hJdTKdIqM%2Fi90joW7kfeCMR1d%2BgsVkMnpVwksCetMaWYLOuaF9vAh2LKaIHqA502lOXH0lMDUtKNn04CJ48Y5Xqj5MPTXh8IGOqUBN0LXQLa%2B8FZmfDq9XBYm4I%2BoMHZ3lAponcgShbiz32Y5W97HdxNok4dOBpD2fSBweqxU8hhR7JxkaNhXLCsN5%2BDHHVFkdVRHCQfnZV8P2D5g2z167fOI6zYYbylO1QXr3CAjj1Dk0bbleGlk4xeymI5o4V5mpvNO3tq8bXHF84k0avPfVmLd0NOq46F9uvU1Gi2HgL3D0X3RgSdgGX57i01c11Bf&X-Amz-Signature=32942e1a3b2de74eecb609568c2e63e68eb278995e1600231e0b6ec7a83a1ce2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5RWWVPK%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIETMOd8YxkhYjh5stGgjkhJb6l%2Bv7c%2F90y2vUYT2Up%2FtAiEAoHNM%2BTufBc6oNGcp7iyovahCQSN6MtR8T37zb9Leb9gq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDHCLOs%2B%2FW80H0eUyPCrcA%2B1f7Wc05Ihmrf4%2Fdt3LKbTow6M3ykQRptyLKDVj9RUDCKbmj8WgoTyUHd8oqqe6eeud8uMBpaFYGhQZCex5qm1FXhob81hmYHUYVUJ3dpvrYlcdilyxuqHKoG0Q66u8u0sjIO%2BBp6Nqqjp9m%2BlxZzN%2BJrAfWo3JWRgltWcfnRrOaDbiANHYyowGuiNGgDnm1vpzv5Q1hUUXKS4Rhy28q2G5H6g3h7EctT4Ocfl2hJdhWshHpLIAOYAFp1VGfOvo8OG8HCYX2umw8UI1xU4TLMBGcPvDiLxrF62AXV33dgJfFlRchUQPlKUBsFFU5n00bQBEPiVcTPFbM%2BY2HzJ4y7QTdA6Q%2FBzbOFtiLSbWTWPDLb%2BMl%2B4JlakBBv3vlSf67zNUPzxSSbmHvOuImlBLyMBMliU6T0PmlXCQJklWfWDOr9x%2BeV0oT4R2GS%2FeDYe1gPGfF%2BkH0nJ8ZROnjAcAi8pbjWP7WzbkRsalwQXTdEUi5C%2F2NWdEGZV3fFNsUMoAqrvPMzyqSTSFKmmpyfuL6QDJcIk9d6ygIc0hJdTKdIqM%2Fi90joW7kfeCMR1d%2BgsVkMnpVwksCetMaWYLOuaF9vAh2LKaIHqA502lOXH0lMDUtKNn04CJ48Y5Xqj5MPTXh8IGOqUBN0LXQLa%2B8FZmfDq9XBYm4I%2BoMHZ3lAponcgShbiz32Y5W97HdxNok4dOBpD2fSBweqxU8hhR7JxkaNhXLCsN5%2BDHHVFkdVRHCQfnZV8P2D5g2z167fOI6zYYbylO1QXr3CAjj1Dk0bbleGlk4xeymI5o4V5mpvNO3tq8bXHF84k0avPfVmLd0NOq46F9uvU1Gi2HgL3D0X3RgSdgGX57i01c11Bf&X-Amz-Signature=ecebb64e1c2fd132ab4330adf4cccc49666a59eb4cd4205c3527108634299fa1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5RWWVPK%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T210832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIETMOd8YxkhYjh5stGgjkhJb6l%2Bv7c%2F90y2vUYT2Up%2FtAiEAoHNM%2BTufBc6oNGcp7iyovahCQSN6MtR8T37zb9Leb9gq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDHCLOs%2B%2FW80H0eUyPCrcA%2B1f7Wc05Ihmrf4%2Fdt3LKbTow6M3ykQRptyLKDVj9RUDCKbmj8WgoTyUHd8oqqe6eeud8uMBpaFYGhQZCex5qm1FXhob81hmYHUYVUJ3dpvrYlcdilyxuqHKoG0Q66u8u0sjIO%2BBp6Nqqjp9m%2BlxZzN%2BJrAfWo3JWRgltWcfnRrOaDbiANHYyowGuiNGgDnm1vpzv5Q1hUUXKS4Rhy28q2G5H6g3h7EctT4Ocfl2hJdhWshHpLIAOYAFp1VGfOvo8OG8HCYX2umw8UI1xU4TLMBGcPvDiLxrF62AXV33dgJfFlRchUQPlKUBsFFU5n00bQBEPiVcTPFbM%2BY2HzJ4y7QTdA6Q%2FBzbOFtiLSbWTWPDLb%2BMl%2B4JlakBBv3vlSf67zNUPzxSSbmHvOuImlBLyMBMliU6T0PmlXCQJklWfWDOr9x%2BeV0oT4R2GS%2FeDYe1gPGfF%2BkH0nJ8ZROnjAcAi8pbjWP7WzbkRsalwQXTdEUi5C%2F2NWdEGZV3fFNsUMoAqrvPMzyqSTSFKmmpyfuL6QDJcIk9d6ygIc0hJdTKdIqM%2Fi90joW7kfeCMR1d%2BgsVkMnpVwksCetMaWYLOuaF9vAh2LKaIHqA502lOXH0lMDUtKNn04CJ48Y5Xqj5MPTXh8IGOqUBN0LXQLa%2B8FZmfDq9XBYm4I%2BoMHZ3lAponcgShbiz32Y5W97HdxNok4dOBpD2fSBweqxU8hhR7JxkaNhXLCsN5%2BDHHVFkdVRHCQfnZV8P2D5g2z167fOI6zYYbylO1QXr3CAjj1Dk0bbleGlk4xeymI5o4V5mpvNO3tq8bXHF84k0avPfVmLd0NOq46F9uvU1Gi2HgL3D0X3RgSdgGX57i01c11Bf&X-Amz-Signature=9059b881971c464130567f240a503dc95d7628df6cfc0e739e03d2b4209d3290&X-Amz-SignedHeaders=host&x-id=GetObject)
