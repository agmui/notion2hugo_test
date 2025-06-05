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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNUGNJST%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T150940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDPY2h91v93ATPvCVsfru9GY6rec13PXPxeowfeJOw8JgIhALMy3qhnvVOxLNwphL%2BPewRhq8HGogd8Z%2BsNQTkvnnJ2Kv8DCEcQABoMNjM3NDIzMTgzODA1IgwHg%2FQhkLQ9XcshMxIq3AOX9unI8RILRmulrdg8LdLkMCXFxTqaT2Ew2zdyyw8PCbVEJwXVZYdjPrzCQ3xODHdPAfR76BEul9YbmRQsWCRdlMTpnAFlGSve9RqepjnOwlquLOTueKjdnSOIhN3YzM%2BkJcimeykWHAbMJo9501y3PytH4jNarhJjm%2BNB2%2BkwHJpakMfXnWQNRj5ykLLufMOdtF6ey7Dv3b65QlULMHq1kEN2PM7xSpdfLsfmteXrhpwx8I7dvXGXU0yXNU7xEWqvggAR%2BxGM023ZlLcwLI6x0koJPXrg5KHOUp%2FTzjJ7wSpkbkNMQx4R3ZvsgSq6LdBWlGiL8n%2B3BTtxkKmStyfOqqz7e6zga6ffAaGSN0TS53gcQ%2FxXbo0JIXqD42SQv7ew5pk6sM6zaTgzkr0jv7CZlcvp%2B5FvpboNK6uOGEyWaLvyFRpGpOvH3d6cWEoP9sfBAEArbfV%2BuAUxtdcafssTOtMjETwzSSLolOjd03DDtgOU4SgFJFVvPkpeCFNmJiWv3W81ioWaEMbobwegpJclkvu1axVA%2FwOmdRTwxpxuJQTYi%2BF314ftpwTiJkDMgP2pNKq6Ank1KlVMJMHaLY4MfIP%2BAjQk5TxMa94uMvLLwDdAJCDUQOYTeoFgzjCPxIbCBjqkAfgpYZDH7e5ZmlYGGVLLNrlaHlbFFZmQcblZ1rxrRX5Fa2DtCbKlvhJI3L1BbdaDIVtzF7P1vcpVoIuBKLgy9eV3C0lN6K2%2Fn0wJnpO65SDIQ%2ByVuEj5Httk3ouzQyH5Oi8xZIG0KjiHkkEFFdC3SBkq2gwbV7lsRhO1eA5vPGxNAO36aIodxQR2nwGJtVmz%2BsN0XFmHuXg7Oqs4P7P6Y77a9cWg&X-Amz-Signature=4fda4f37982eaacf163d493f72809ba91a80c76cf83e0b591654d3f5671c44e4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNUGNJST%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T150940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDPY2h91v93ATPvCVsfru9GY6rec13PXPxeowfeJOw8JgIhALMy3qhnvVOxLNwphL%2BPewRhq8HGogd8Z%2BsNQTkvnnJ2Kv8DCEcQABoMNjM3NDIzMTgzODA1IgwHg%2FQhkLQ9XcshMxIq3AOX9unI8RILRmulrdg8LdLkMCXFxTqaT2Ew2zdyyw8PCbVEJwXVZYdjPrzCQ3xODHdPAfR76BEul9YbmRQsWCRdlMTpnAFlGSve9RqepjnOwlquLOTueKjdnSOIhN3YzM%2BkJcimeykWHAbMJo9501y3PytH4jNarhJjm%2BNB2%2BkwHJpakMfXnWQNRj5ykLLufMOdtF6ey7Dv3b65QlULMHq1kEN2PM7xSpdfLsfmteXrhpwx8I7dvXGXU0yXNU7xEWqvggAR%2BxGM023ZlLcwLI6x0koJPXrg5KHOUp%2FTzjJ7wSpkbkNMQx4R3ZvsgSq6LdBWlGiL8n%2B3BTtxkKmStyfOqqz7e6zga6ffAaGSN0TS53gcQ%2FxXbo0JIXqD42SQv7ew5pk6sM6zaTgzkr0jv7CZlcvp%2B5FvpboNK6uOGEyWaLvyFRpGpOvH3d6cWEoP9sfBAEArbfV%2BuAUxtdcafssTOtMjETwzSSLolOjd03DDtgOU4SgFJFVvPkpeCFNmJiWv3W81ioWaEMbobwegpJclkvu1axVA%2FwOmdRTwxpxuJQTYi%2BF314ftpwTiJkDMgP2pNKq6Ank1KlVMJMHaLY4MfIP%2BAjQk5TxMa94uMvLLwDdAJCDUQOYTeoFgzjCPxIbCBjqkAfgpYZDH7e5ZmlYGGVLLNrlaHlbFFZmQcblZ1rxrRX5Fa2DtCbKlvhJI3L1BbdaDIVtzF7P1vcpVoIuBKLgy9eV3C0lN6K2%2Fn0wJnpO65SDIQ%2ByVuEj5Httk3ouzQyH5Oi8xZIG0KjiHkkEFFdC3SBkq2gwbV7lsRhO1eA5vPGxNAO36aIodxQR2nwGJtVmz%2BsN0XFmHuXg7Oqs4P7P6Y77a9cWg&X-Amz-Signature=7b3c28627a58a0a90fac477fccb0282ab123926edb3b62348deb4d0597da2754&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNUGNJST%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T150940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDPY2h91v93ATPvCVsfru9GY6rec13PXPxeowfeJOw8JgIhALMy3qhnvVOxLNwphL%2BPewRhq8HGogd8Z%2BsNQTkvnnJ2Kv8DCEcQABoMNjM3NDIzMTgzODA1IgwHg%2FQhkLQ9XcshMxIq3AOX9unI8RILRmulrdg8LdLkMCXFxTqaT2Ew2zdyyw8PCbVEJwXVZYdjPrzCQ3xODHdPAfR76BEul9YbmRQsWCRdlMTpnAFlGSve9RqepjnOwlquLOTueKjdnSOIhN3YzM%2BkJcimeykWHAbMJo9501y3PytH4jNarhJjm%2BNB2%2BkwHJpakMfXnWQNRj5ykLLufMOdtF6ey7Dv3b65QlULMHq1kEN2PM7xSpdfLsfmteXrhpwx8I7dvXGXU0yXNU7xEWqvggAR%2BxGM023ZlLcwLI6x0koJPXrg5KHOUp%2FTzjJ7wSpkbkNMQx4R3ZvsgSq6LdBWlGiL8n%2B3BTtxkKmStyfOqqz7e6zga6ffAaGSN0TS53gcQ%2FxXbo0JIXqD42SQv7ew5pk6sM6zaTgzkr0jv7CZlcvp%2B5FvpboNK6uOGEyWaLvyFRpGpOvH3d6cWEoP9sfBAEArbfV%2BuAUxtdcafssTOtMjETwzSSLolOjd03DDtgOU4SgFJFVvPkpeCFNmJiWv3W81ioWaEMbobwegpJclkvu1axVA%2FwOmdRTwxpxuJQTYi%2BF314ftpwTiJkDMgP2pNKq6Ank1KlVMJMHaLY4MfIP%2BAjQk5TxMa94uMvLLwDdAJCDUQOYTeoFgzjCPxIbCBjqkAfgpYZDH7e5ZmlYGGVLLNrlaHlbFFZmQcblZ1rxrRX5Fa2DtCbKlvhJI3L1BbdaDIVtzF7P1vcpVoIuBKLgy9eV3C0lN6K2%2Fn0wJnpO65SDIQ%2ByVuEj5Httk3ouzQyH5Oi8xZIG0KjiHkkEFFdC3SBkq2gwbV7lsRhO1eA5vPGxNAO36aIodxQR2nwGJtVmz%2BsN0XFmHuXg7Oqs4P7P6Y77a9cWg&X-Amz-Signature=9c1a27ee219808537d7171e7063faa07e47471dba00295a5209bf0d7eaa69569&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNUGNJST%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T150940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDPY2h91v93ATPvCVsfru9GY6rec13PXPxeowfeJOw8JgIhALMy3qhnvVOxLNwphL%2BPewRhq8HGogd8Z%2BsNQTkvnnJ2Kv8DCEcQABoMNjM3NDIzMTgzODA1IgwHg%2FQhkLQ9XcshMxIq3AOX9unI8RILRmulrdg8LdLkMCXFxTqaT2Ew2zdyyw8PCbVEJwXVZYdjPrzCQ3xODHdPAfR76BEul9YbmRQsWCRdlMTpnAFlGSve9RqepjnOwlquLOTueKjdnSOIhN3YzM%2BkJcimeykWHAbMJo9501y3PytH4jNarhJjm%2BNB2%2BkwHJpakMfXnWQNRj5ykLLufMOdtF6ey7Dv3b65QlULMHq1kEN2PM7xSpdfLsfmteXrhpwx8I7dvXGXU0yXNU7xEWqvggAR%2BxGM023ZlLcwLI6x0koJPXrg5KHOUp%2FTzjJ7wSpkbkNMQx4R3ZvsgSq6LdBWlGiL8n%2B3BTtxkKmStyfOqqz7e6zga6ffAaGSN0TS53gcQ%2FxXbo0JIXqD42SQv7ew5pk6sM6zaTgzkr0jv7CZlcvp%2B5FvpboNK6uOGEyWaLvyFRpGpOvH3d6cWEoP9sfBAEArbfV%2BuAUxtdcafssTOtMjETwzSSLolOjd03DDtgOU4SgFJFVvPkpeCFNmJiWv3W81ioWaEMbobwegpJclkvu1axVA%2FwOmdRTwxpxuJQTYi%2BF314ftpwTiJkDMgP2pNKq6Ank1KlVMJMHaLY4MfIP%2BAjQk5TxMa94uMvLLwDdAJCDUQOYTeoFgzjCPxIbCBjqkAfgpYZDH7e5ZmlYGGVLLNrlaHlbFFZmQcblZ1rxrRX5Fa2DtCbKlvhJI3L1BbdaDIVtzF7P1vcpVoIuBKLgy9eV3C0lN6K2%2Fn0wJnpO65SDIQ%2ByVuEj5Httk3ouzQyH5Oi8xZIG0KjiHkkEFFdC3SBkq2gwbV7lsRhO1eA5vPGxNAO36aIodxQR2nwGJtVmz%2BsN0XFmHuXg7Oqs4P7P6Y77a9cWg&X-Amz-Signature=87655d6aa8066608a018a8649f359a85e52f219f0b574dd3a38af692ef947c40&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNUGNJST%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T150940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDPY2h91v93ATPvCVsfru9GY6rec13PXPxeowfeJOw8JgIhALMy3qhnvVOxLNwphL%2BPewRhq8HGogd8Z%2BsNQTkvnnJ2Kv8DCEcQABoMNjM3NDIzMTgzODA1IgwHg%2FQhkLQ9XcshMxIq3AOX9unI8RILRmulrdg8LdLkMCXFxTqaT2Ew2zdyyw8PCbVEJwXVZYdjPrzCQ3xODHdPAfR76BEul9YbmRQsWCRdlMTpnAFlGSve9RqepjnOwlquLOTueKjdnSOIhN3YzM%2BkJcimeykWHAbMJo9501y3PytH4jNarhJjm%2BNB2%2BkwHJpakMfXnWQNRj5ykLLufMOdtF6ey7Dv3b65QlULMHq1kEN2PM7xSpdfLsfmteXrhpwx8I7dvXGXU0yXNU7xEWqvggAR%2BxGM023ZlLcwLI6x0koJPXrg5KHOUp%2FTzjJ7wSpkbkNMQx4R3ZvsgSq6LdBWlGiL8n%2B3BTtxkKmStyfOqqz7e6zga6ffAaGSN0TS53gcQ%2FxXbo0JIXqD42SQv7ew5pk6sM6zaTgzkr0jv7CZlcvp%2B5FvpboNK6uOGEyWaLvyFRpGpOvH3d6cWEoP9sfBAEArbfV%2BuAUxtdcafssTOtMjETwzSSLolOjd03DDtgOU4SgFJFVvPkpeCFNmJiWv3W81ioWaEMbobwegpJclkvu1axVA%2FwOmdRTwxpxuJQTYi%2BF314ftpwTiJkDMgP2pNKq6Ank1KlVMJMHaLY4MfIP%2BAjQk5TxMa94uMvLLwDdAJCDUQOYTeoFgzjCPxIbCBjqkAfgpYZDH7e5ZmlYGGVLLNrlaHlbFFZmQcblZ1rxrRX5Fa2DtCbKlvhJI3L1BbdaDIVtzF7P1vcpVoIuBKLgy9eV3C0lN6K2%2Fn0wJnpO65SDIQ%2ByVuEj5Httk3ouzQyH5Oi8xZIG0KjiHkkEFFdC3SBkq2gwbV7lsRhO1eA5vPGxNAO36aIodxQR2nwGJtVmz%2BsN0XFmHuXg7Oqs4P7P6Y77a9cWg&X-Amz-Signature=e1e1c3ab6fedeea96e8424384deac381a8c0706fda11bbffc9329073bebb93a5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNUGNJST%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T150940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDPY2h91v93ATPvCVsfru9GY6rec13PXPxeowfeJOw8JgIhALMy3qhnvVOxLNwphL%2BPewRhq8HGogd8Z%2BsNQTkvnnJ2Kv8DCEcQABoMNjM3NDIzMTgzODA1IgwHg%2FQhkLQ9XcshMxIq3AOX9unI8RILRmulrdg8LdLkMCXFxTqaT2Ew2zdyyw8PCbVEJwXVZYdjPrzCQ3xODHdPAfR76BEul9YbmRQsWCRdlMTpnAFlGSve9RqepjnOwlquLOTueKjdnSOIhN3YzM%2BkJcimeykWHAbMJo9501y3PytH4jNarhJjm%2BNB2%2BkwHJpakMfXnWQNRj5ykLLufMOdtF6ey7Dv3b65QlULMHq1kEN2PM7xSpdfLsfmteXrhpwx8I7dvXGXU0yXNU7xEWqvggAR%2BxGM023ZlLcwLI6x0koJPXrg5KHOUp%2FTzjJ7wSpkbkNMQx4R3ZvsgSq6LdBWlGiL8n%2B3BTtxkKmStyfOqqz7e6zga6ffAaGSN0TS53gcQ%2FxXbo0JIXqD42SQv7ew5pk6sM6zaTgzkr0jv7CZlcvp%2B5FvpboNK6uOGEyWaLvyFRpGpOvH3d6cWEoP9sfBAEArbfV%2BuAUxtdcafssTOtMjETwzSSLolOjd03DDtgOU4SgFJFVvPkpeCFNmJiWv3W81ioWaEMbobwegpJclkvu1axVA%2FwOmdRTwxpxuJQTYi%2BF314ftpwTiJkDMgP2pNKq6Ank1KlVMJMHaLY4MfIP%2BAjQk5TxMa94uMvLLwDdAJCDUQOYTeoFgzjCPxIbCBjqkAfgpYZDH7e5ZmlYGGVLLNrlaHlbFFZmQcblZ1rxrRX5Fa2DtCbKlvhJI3L1BbdaDIVtzF7P1vcpVoIuBKLgy9eV3C0lN6K2%2Fn0wJnpO65SDIQ%2ByVuEj5Httk3ouzQyH5Oi8xZIG0KjiHkkEFFdC3SBkq2gwbV7lsRhO1eA5vPGxNAO36aIodxQR2nwGJtVmz%2BsN0XFmHuXg7Oqs4P7P6Y77a9cWg&X-Amz-Signature=9487d9750470318464a2b44d86665f01f718cd1dab707b753268523ad19442d7&X-Amz-SignedHeaders=host&x-id=GetObject)
