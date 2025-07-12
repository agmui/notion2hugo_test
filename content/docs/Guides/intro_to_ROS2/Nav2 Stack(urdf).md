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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J3SVZIZ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T070956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBdX5edmH7Q7PtpyvGmHwyGxCVje0y0UA7VrQqV0PE9OAiEA64Xd7UrIBCW%2Fs%2F12nKNzwlMebLk43lzImheUp6Eeqm0qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4fkPoiT5bbkx2AZCrcAwEjhScx%2FA1kH0XNU5PU5Q77CJD7%2FYw7SNQ%2BRQQZWJ1AEp6Uhwv9Vq3eLgPMX81sD5XMrYU3ungSKIIzVrll21TQzHfyyWFwBWxehRsxLlWREzmqFzYcd46pIhs91wVpbH65c28mSeCQuBGW%2BcrsXc36R51U3%2BCjDYUNGI7X3Y3uOuUV80I5OwwczGvj8k861qu6mhYzzw8nDnQX0IknVNhICnr4SKQ4GJoxbWRVwIAr41OXfb7WN%2FzaOubcvxfPZD7%2FEoroCNF6CPYHPr9B33Tv5QpOwhjQRVlvVJ8TLHulOC%2FiISt4oIeHSGGtzyU8S6EhWE%2FwRKyTv9950sdPnAMRgxSYoKkkMqtExmtLMfIZVtUkUIH0rokX4LXDHe6w4MOID3zzOq0%2FU0yUbpKHIreHkHOSE8tZfm1Exi20C0gAwKbissksqhK5pdWlogTJb15Df4svHZqKSQTx2KmpKwxmk8qfdRRt1EPgPi8Ji%2FUcph%2F0bQdgDx1adbfGJBVSCtOKMmUoB5pR0BEGoEsG%2FS404EbOnaFvSAK5wl9rVMFv9VajEp%2FEuoTkxCVpPHaLdqcGo%2FvAEN4QNPH2EQEqq24Vw7OPi%2FxXnVbXGKFi9Vg6cxOstU%2BLcFR6pVNwMMP5x8MGOqUB1ewyfUKQNBM8BijW3caQfuSvGBpNVy5xiRV0Qt4b46Ntfo2GHQOyCrqaMd%2Bce2GIXYD71qjKZZIU2agVsdkpN%2BQWDchdE60lR13FtzHDm4lOFecoTyMs7he7Ba81AYaAe%2FVP%2BcOkPEYaJBdOT3g5Gkrbx9GD%2FGj%2B2kRP7qdUfmnzIGS7BE%2BElSLYUECC2qYEwikyxdLyxozA5Es04bi8MzZeQAw3&X-Amz-Signature=381004922b8d8173ffbfb0ceecf6f8eb7e7eb53c525fa82f20393c9ce9c124ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J3SVZIZ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T070956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBdX5edmH7Q7PtpyvGmHwyGxCVje0y0UA7VrQqV0PE9OAiEA64Xd7UrIBCW%2Fs%2F12nKNzwlMebLk43lzImheUp6Eeqm0qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4fkPoiT5bbkx2AZCrcAwEjhScx%2FA1kH0XNU5PU5Q77CJD7%2FYw7SNQ%2BRQQZWJ1AEp6Uhwv9Vq3eLgPMX81sD5XMrYU3ungSKIIzVrll21TQzHfyyWFwBWxehRsxLlWREzmqFzYcd46pIhs91wVpbH65c28mSeCQuBGW%2BcrsXc36R51U3%2BCjDYUNGI7X3Y3uOuUV80I5OwwczGvj8k861qu6mhYzzw8nDnQX0IknVNhICnr4SKQ4GJoxbWRVwIAr41OXfb7WN%2FzaOubcvxfPZD7%2FEoroCNF6CPYHPr9B33Tv5QpOwhjQRVlvVJ8TLHulOC%2FiISt4oIeHSGGtzyU8S6EhWE%2FwRKyTv9950sdPnAMRgxSYoKkkMqtExmtLMfIZVtUkUIH0rokX4LXDHe6w4MOID3zzOq0%2FU0yUbpKHIreHkHOSE8tZfm1Exi20C0gAwKbissksqhK5pdWlogTJb15Df4svHZqKSQTx2KmpKwxmk8qfdRRt1EPgPi8Ji%2FUcph%2F0bQdgDx1adbfGJBVSCtOKMmUoB5pR0BEGoEsG%2FS404EbOnaFvSAK5wl9rVMFv9VajEp%2FEuoTkxCVpPHaLdqcGo%2FvAEN4QNPH2EQEqq24Vw7OPi%2FxXnVbXGKFi9Vg6cxOstU%2BLcFR6pVNwMMP5x8MGOqUB1ewyfUKQNBM8BijW3caQfuSvGBpNVy5xiRV0Qt4b46Ntfo2GHQOyCrqaMd%2Bce2GIXYD71qjKZZIU2agVsdkpN%2BQWDchdE60lR13FtzHDm4lOFecoTyMs7he7Ba81AYaAe%2FVP%2BcOkPEYaJBdOT3g5Gkrbx9GD%2FGj%2B2kRP7qdUfmnzIGS7BE%2BElSLYUECC2qYEwikyxdLyxozA5Es04bi8MzZeQAw3&X-Amz-Signature=f86e7d8a15d1c6c9413ee3961c72c4e052625cf55a2f77baa57309ffb01420eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J3SVZIZ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T070956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBdX5edmH7Q7PtpyvGmHwyGxCVje0y0UA7VrQqV0PE9OAiEA64Xd7UrIBCW%2Fs%2F12nKNzwlMebLk43lzImheUp6Eeqm0qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4fkPoiT5bbkx2AZCrcAwEjhScx%2FA1kH0XNU5PU5Q77CJD7%2FYw7SNQ%2BRQQZWJ1AEp6Uhwv9Vq3eLgPMX81sD5XMrYU3ungSKIIzVrll21TQzHfyyWFwBWxehRsxLlWREzmqFzYcd46pIhs91wVpbH65c28mSeCQuBGW%2BcrsXc36R51U3%2BCjDYUNGI7X3Y3uOuUV80I5OwwczGvj8k861qu6mhYzzw8nDnQX0IknVNhICnr4SKQ4GJoxbWRVwIAr41OXfb7WN%2FzaOubcvxfPZD7%2FEoroCNF6CPYHPr9B33Tv5QpOwhjQRVlvVJ8TLHulOC%2FiISt4oIeHSGGtzyU8S6EhWE%2FwRKyTv9950sdPnAMRgxSYoKkkMqtExmtLMfIZVtUkUIH0rokX4LXDHe6w4MOID3zzOq0%2FU0yUbpKHIreHkHOSE8tZfm1Exi20C0gAwKbissksqhK5pdWlogTJb15Df4svHZqKSQTx2KmpKwxmk8qfdRRt1EPgPi8Ji%2FUcph%2F0bQdgDx1adbfGJBVSCtOKMmUoB5pR0BEGoEsG%2FS404EbOnaFvSAK5wl9rVMFv9VajEp%2FEuoTkxCVpPHaLdqcGo%2FvAEN4QNPH2EQEqq24Vw7OPi%2FxXnVbXGKFi9Vg6cxOstU%2BLcFR6pVNwMMP5x8MGOqUB1ewyfUKQNBM8BijW3caQfuSvGBpNVy5xiRV0Qt4b46Ntfo2GHQOyCrqaMd%2Bce2GIXYD71qjKZZIU2agVsdkpN%2BQWDchdE60lR13FtzHDm4lOFecoTyMs7he7Ba81AYaAe%2FVP%2BcOkPEYaJBdOT3g5Gkrbx9GD%2FGj%2B2kRP7qdUfmnzIGS7BE%2BElSLYUECC2qYEwikyxdLyxozA5Es04bi8MzZeQAw3&X-Amz-Signature=849ad899327f0084169dbfec99b1c3a486fc6fa22e456a757cbf6418490f5da8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J3SVZIZ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T070956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBdX5edmH7Q7PtpyvGmHwyGxCVje0y0UA7VrQqV0PE9OAiEA64Xd7UrIBCW%2Fs%2F12nKNzwlMebLk43lzImheUp6Eeqm0qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4fkPoiT5bbkx2AZCrcAwEjhScx%2FA1kH0XNU5PU5Q77CJD7%2FYw7SNQ%2BRQQZWJ1AEp6Uhwv9Vq3eLgPMX81sD5XMrYU3ungSKIIzVrll21TQzHfyyWFwBWxehRsxLlWREzmqFzYcd46pIhs91wVpbH65c28mSeCQuBGW%2BcrsXc36R51U3%2BCjDYUNGI7X3Y3uOuUV80I5OwwczGvj8k861qu6mhYzzw8nDnQX0IknVNhICnr4SKQ4GJoxbWRVwIAr41OXfb7WN%2FzaOubcvxfPZD7%2FEoroCNF6CPYHPr9B33Tv5QpOwhjQRVlvVJ8TLHulOC%2FiISt4oIeHSGGtzyU8S6EhWE%2FwRKyTv9950sdPnAMRgxSYoKkkMqtExmtLMfIZVtUkUIH0rokX4LXDHe6w4MOID3zzOq0%2FU0yUbpKHIreHkHOSE8tZfm1Exi20C0gAwKbissksqhK5pdWlogTJb15Df4svHZqKSQTx2KmpKwxmk8qfdRRt1EPgPi8Ji%2FUcph%2F0bQdgDx1adbfGJBVSCtOKMmUoB5pR0BEGoEsG%2FS404EbOnaFvSAK5wl9rVMFv9VajEp%2FEuoTkxCVpPHaLdqcGo%2FvAEN4QNPH2EQEqq24Vw7OPi%2FxXnVbXGKFi9Vg6cxOstU%2BLcFR6pVNwMMP5x8MGOqUB1ewyfUKQNBM8BijW3caQfuSvGBpNVy5xiRV0Qt4b46Ntfo2GHQOyCrqaMd%2Bce2GIXYD71qjKZZIU2agVsdkpN%2BQWDchdE60lR13FtzHDm4lOFecoTyMs7he7Ba81AYaAe%2FVP%2BcOkPEYaJBdOT3g5Gkrbx9GD%2FGj%2B2kRP7qdUfmnzIGS7BE%2BElSLYUECC2qYEwikyxdLyxozA5Es04bi8MzZeQAw3&X-Amz-Signature=f11c87e753cdb852ab7453b5e98067bb2b10611811846b7fa56eac7b6b5ee4c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J3SVZIZ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T070956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBdX5edmH7Q7PtpyvGmHwyGxCVje0y0UA7VrQqV0PE9OAiEA64Xd7UrIBCW%2Fs%2F12nKNzwlMebLk43lzImheUp6Eeqm0qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4fkPoiT5bbkx2AZCrcAwEjhScx%2FA1kH0XNU5PU5Q77CJD7%2FYw7SNQ%2BRQQZWJ1AEp6Uhwv9Vq3eLgPMX81sD5XMrYU3ungSKIIzVrll21TQzHfyyWFwBWxehRsxLlWREzmqFzYcd46pIhs91wVpbH65c28mSeCQuBGW%2BcrsXc36R51U3%2BCjDYUNGI7X3Y3uOuUV80I5OwwczGvj8k861qu6mhYzzw8nDnQX0IknVNhICnr4SKQ4GJoxbWRVwIAr41OXfb7WN%2FzaOubcvxfPZD7%2FEoroCNF6CPYHPr9B33Tv5QpOwhjQRVlvVJ8TLHulOC%2FiISt4oIeHSGGtzyU8S6EhWE%2FwRKyTv9950sdPnAMRgxSYoKkkMqtExmtLMfIZVtUkUIH0rokX4LXDHe6w4MOID3zzOq0%2FU0yUbpKHIreHkHOSE8tZfm1Exi20C0gAwKbissksqhK5pdWlogTJb15Df4svHZqKSQTx2KmpKwxmk8qfdRRt1EPgPi8Ji%2FUcph%2F0bQdgDx1adbfGJBVSCtOKMmUoB5pR0BEGoEsG%2FS404EbOnaFvSAK5wl9rVMFv9VajEp%2FEuoTkxCVpPHaLdqcGo%2FvAEN4QNPH2EQEqq24Vw7OPi%2FxXnVbXGKFi9Vg6cxOstU%2BLcFR6pVNwMMP5x8MGOqUB1ewyfUKQNBM8BijW3caQfuSvGBpNVy5xiRV0Qt4b46Ntfo2GHQOyCrqaMd%2Bce2GIXYD71qjKZZIU2agVsdkpN%2BQWDchdE60lR13FtzHDm4lOFecoTyMs7he7Ba81AYaAe%2FVP%2BcOkPEYaJBdOT3g5Gkrbx9GD%2FGj%2B2kRP7qdUfmnzIGS7BE%2BElSLYUECC2qYEwikyxdLyxozA5Es04bi8MzZeQAw3&X-Amz-Signature=f07e136dec533a27c502151e83e7f57e6b2ac940f480671f33b8800bfaf2eeb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J3SVZIZ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T070956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBdX5edmH7Q7PtpyvGmHwyGxCVje0y0UA7VrQqV0PE9OAiEA64Xd7UrIBCW%2Fs%2F12nKNzwlMebLk43lzImheUp6Eeqm0qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF4fkPoiT5bbkx2AZCrcAwEjhScx%2FA1kH0XNU5PU5Q77CJD7%2FYw7SNQ%2BRQQZWJ1AEp6Uhwv9Vq3eLgPMX81sD5XMrYU3ungSKIIzVrll21TQzHfyyWFwBWxehRsxLlWREzmqFzYcd46pIhs91wVpbH65c28mSeCQuBGW%2BcrsXc36R51U3%2BCjDYUNGI7X3Y3uOuUV80I5OwwczGvj8k861qu6mhYzzw8nDnQX0IknVNhICnr4SKQ4GJoxbWRVwIAr41OXfb7WN%2FzaOubcvxfPZD7%2FEoroCNF6CPYHPr9B33Tv5QpOwhjQRVlvVJ8TLHulOC%2FiISt4oIeHSGGtzyU8S6EhWE%2FwRKyTv9950sdPnAMRgxSYoKkkMqtExmtLMfIZVtUkUIH0rokX4LXDHe6w4MOID3zzOq0%2FU0yUbpKHIreHkHOSE8tZfm1Exi20C0gAwKbissksqhK5pdWlogTJb15Df4svHZqKSQTx2KmpKwxmk8qfdRRt1EPgPi8Ji%2FUcph%2F0bQdgDx1adbfGJBVSCtOKMmUoB5pR0BEGoEsG%2FS404EbOnaFvSAK5wl9rVMFv9VajEp%2FEuoTkxCVpPHaLdqcGo%2FvAEN4QNPH2EQEqq24Vw7OPi%2FxXnVbXGKFi9Vg6cxOstU%2BLcFR6pVNwMMP5x8MGOqUB1ewyfUKQNBM8BijW3caQfuSvGBpNVy5xiRV0Qt4b46Ntfo2GHQOyCrqaMd%2Bce2GIXYD71qjKZZIU2agVsdkpN%2BQWDchdE60lR13FtzHDm4lOFecoTyMs7he7Ba81AYaAe%2FVP%2BcOkPEYaJBdOT3g5Gkrbx9GD%2FGj%2B2kRP7qdUfmnzIGS7BE%2BElSLYUECC2qYEwikyxdLyxozA5Es04bi8MzZeQAw3&X-Amz-Signature=78bfd4c728097d9ab219e6475f8790a53d4fa6ba7eada4565bd360ed998bde43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
