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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBZKJN6I%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDEjEvUDATEOnfst924Oz6H7oPa4YOfnZvwkP%2FV%2Fqo%2FogIgWeNyks23ftD2%2BKLjCEf4%2BMIrdsJlytZaJQrAGXQyaugq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDATfJmLvm536cuQpuyrcA%2FFA1T6OC8KHE8LIlvbpJRbWsiA%2Fkw77kq%2FJZ8Udf0TUDS8PwR64Yl6Soxyb7ZgIXmt%2BMRQSHal5j7JNc9xvyznzHL%2F%2Bj1uezltpVS%2BKnbMfja%2BNbGXgHWcVuu%2FgtGiApEdvO4Pgpp1S%2Fpq16wW%2BIrSu3kmCnEGnhVE81OARWihrBSdoBX88Tn095W50mlKhW4ZvgK6LhygVSvo7echxuQ0An6Gzythvz4x5w9EbRCxojJhjpTusaUyGmR3sWy2pyZHZ5V1MR0xx%2FD6BwJnd%2B1T4%2F1cYZeJjJQkNw%2B9osCuAwV2FZ%2BkAiwEVI0%2B8DKXuAChlEy%2FZ78DZr97Q83y9x6NC8Wk2AlcSeCJ%2BYXa3Oid978%2Bd851xqo%2B6AUyxVmy2T2WWP2QIP%2FOosDl%2FFCj97IqYNZavopcG3UaSpay4YK1nwln%2BNKCgsl4EEzQudEs4cBjO4Gv%2Fr2A2eXYNxpjpDOiuT1GMIAWVj4KMy%2Fc2CLlnqpr%2BBNaVw9j5GK0yEaGHk0yJ%2FfxLucx3Ajdbo5gnlFNtc9cw1y9VBq0Qs0gy81FhEIQWiwe8xhCpLrYisPzfquMIFzfup0SHWtZstsLy%2B501BZLa%2FqTEqPT4oKinoSDqIzBLbSYto8IPAdf1MIWFl8EGOqUBmwYWds%2BLrscBwk42XeEwWUDEhuKZfYaCtPh%2BsXEqKIQCd5ZpD35387ihdTLtE0hMRP%2BSuUONAh7OvcH1OtiidSPs1iiyBjnbBGjZuMr%2B6nqvVeeLsqid2VKZ47wvBX%2Fz8CFYRSgItc5dpWkuGCAyj4hCTFg7wDtZxW%2FZ9vfgE3LrHeqUrCvbh5zY6OrhtE8tK9ZULIBCot7UI4zBFokaGZmlnDlb&X-Amz-Signature=8a0b82d869cb9a94191df00e14af09592640a8bd0e85c93e25d78cde879a54f8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBZKJN6I%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDEjEvUDATEOnfst924Oz6H7oPa4YOfnZvwkP%2FV%2Fqo%2FogIgWeNyks23ftD2%2BKLjCEf4%2BMIrdsJlytZaJQrAGXQyaugq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDATfJmLvm536cuQpuyrcA%2FFA1T6OC8KHE8LIlvbpJRbWsiA%2Fkw77kq%2FJZ8Udf0TUDS8PwR64Yl6Soxyb7ZgIXmt%2BMRQSHal5j7JNc9xvyznzHL%2F%2Bj1uezltpVS%2BKnbMfja%2BNbGXgHWcVuu%2FgtGiApEdvO4Pgpp1S%2Fpq16wW%2BIrSu3kmCnEGnhVE81OARWihrBSdoBX88Tn095W50mlKhW4ZvgK6LhygVSvo7echxuQ0An6Gzythvz4x5w9EbRCxojJhjpTusaUyGmR3sWy2pyZHZ5V1MR0xx%2FD6BwJnd%2B1T4%2F1cYZeJjJQkNw%2B9osCuAwV2FZ%2BkAiwEVI0%2B8DKXuAChlEy%2FZ78DZr97Q83y9x6NC8Wk2AlcSeCJ%2BYXa3Oid978%2Bd851xqo%2B6AUyxVmy2T2WWP2QIP%2FOosDl%2FFCj97IqYNZavopcG3UaSpay4YK1nwln%2BNKCgsl4EEzQudEs4cBjO4Gv%2Fr2A2eXYNxpjpDOiuT1GMIAWVj4KMy%2Fc2CLlnqpr%2BBNaVw9j5GK0yEaGHk0yJ%2FfxLucx3Ajdbo5gnlFNtc9cw1y9VBq0Qs0gy81FhEIQWiwe8xhCpLrYisPzfquMIFzfup0SHWtZstsLy%2B501BZLa%2FqTEqPT4oKinoSDqIzBLbSYto8IPAdf1MIWFl8EGOqUBmwYWds%2BLrscBwk42XeEwWUDEhuKZfYaCtPh%2BsXEqKIQCd5ZpD35387ihdTLtE0hMRP%2BSuUONAh7OvcH1OtiidSPs1iiyBjnbBGjZuMr%2B6nqvVeeLsqid2VKZ47wvBX%2Fz8CFYRSgItc5dpWkuGCAyj4hCTFg7wDtZxW%2FZ9vfgE3LrHeqUrCvbh5zY6OrhtE8tK9ZULIBCot7UI4zBFokaGZmlnDlb&X-Amz-Signature=517eb2ac268c266f1a112ee8cff45ce3ff8db23e8f9105ad7bc489ef58b94c79&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBZKJN6I%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDEjEvUDATEOnfst924Oz6H7oPa4YOfnZvwkP%2FV%2Fqo%2FogIgWeNyks23ftD2%2BKLjCEf4%2BMIrdsJlytZaJQrAGXQyaugq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDATfJmLvm536cuQpuyrcA%2FFA1T6OC8KHE8LIlvbpJRbWsiA%2Fkw77kq%2FJZ8Udf0TUDS8PwR64Yl6Soxyb7ZgIXmt%2BMRQSHal5j7JNc9xvyznzHL%2F%2Bj1uezltpVS%2BKnbMfja%2BNbGXgHWcVuu%2FgtGiApEdvO4Pgpp1S%2Fpq16wW%2BIrSu3kmCnEGnhVE81OARWihrBSdoBX88Tn095W50mlKhW4ZvgK6LhygVSvo7echxuQ0An6Gzythvz4x5w9EbRCxojJhjpTusaUyGmR3sWy2pyZHZ5V1MR0xx%2FD6BwJnd%2B1T4%2F1cYZeJjJQkNw%2B9osCuAwV2FZ%2BkAiwEVI0%2B8DKXuAChlEy%2FZ78DZr97Q83y9x6NC8Wk2AlcSeCJ%2BYXa3Oid978%2Bd851xqo%2B6AUyxVmy2T2WWP2QIP%2FOosDl%2FFCj97IqYNZavopcG3UaSpay4YK1nwln%2BNKCgsl4EEzQudEs4cBjO4Gv%2Fr2A2eXYNxpjpDOiuT1GMIAWVj4KMy%2Fc2CLlnqpr%2BBNaVw9j5GK0yEaGHk0yJ%2FfxLucx3Ajdbo5gnlFNtc9cw1y9VBq0Qs0gy81FhEIQWiwe8xhCpLrYisPzfquMIFzfup0SHWtZstsLy%2B501BZLa%2FqTEqPT4oKinoSDqIzBLbSYto8IPAdf1MIWFl8EGOqUBmwYWds%2BLrscBwk42XeEwWUDEhuKZfYaCtPh%2BsXEqKIQCd5ZpD35387ihdTLtE0hMRP%2BSuUONAh7OvcH1OtiidSPs1iiyBjnbBGjZuMr%2B6nqvVeeLsqid2VKZ47wvBX%2Fz8CFYRSgItc5dpWkuGCAyj4hCTFg7wDtZxW%2FZ9vfgE3LrHeqUrCvbh5zY6OrhtE8tK9ZULIBCot7UI4zBFokaGZmlnDlb&X-Amz-Signature=6d38414b4db6ff282cf699df0529b96ce470e5a5b8cbcbcc4e1be234d3e60b19&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBZKJN6I%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDEjEvUDATEOnfst924Oz6H7oPa4YOfnZvwkP%2FV%2Fqo%2FogIgWeNyks23ftD2%2BKLjCEf4%2BMIrdsJlytZaJQrAGXQyaugq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDATfJmLvm536cuQpuyrcA%2FFA1T6OC8KHE8LIlvbpJRbWsiA%2Fkw77kq%2FJZ8Udf0TUDS8PwR64Yl6Soxyb7ZgIXmt%2BMRQSHal5j7JNc9xvyznzHL%2F%2Bj1uezltpVS%2BKnbMfja%2BNbGXgHWcVuu%2FgtGiApEdvO4Pgpp1S%2Fpq16wW%2BIrSu3kmCnEGnhVE81OARWihrBSdoBX88Tn095W50mlKhW4ZvgK6LhygVSvo7echxuQ0An6Gzythvz4x5w9EbRCxojJhjpTusaUyGmR3sWy2pyZHZ5V1MR0xx%2FD6BwJnd%2B1T4%2F1cYZeJjJQkNw%2B9osCuAwV2FZ%2BkAiwEVI0%2B8DKXuAChlEy%2FZ78DZr97Q83y9x6NC8Wk2AlcSeCJ%2BYXa3Oid978%2Bd851xqo%2B6AUyxVmy2T2WWP2QIP%2FOosDl%2FFCj97IqYNZavopcG3UaSpay4YK1nwln%2BNKCgsl4EEzQudEs4cBjO4Gv%2Fr2A2eXYNxpjpDOiuT1GMIAWVj4KMy%2Fc2CLlnqpr%2BBNaVw9j5GK0yEaGHk0yJ%2FfxLucx3Ajdbo5gnlFNtc9cw1y9VBq0Qs0gy81FhEIQWiwe8xhCpLrYisPzfquMIFzfup0SHWtZstsLy%2B501BZLa%2FqTEqPT4oKinoSDqIzBLbSYto8IPAdf1MIWFl8EGOqUBmwYWds%2BLrscBwk42XeEwWUDEhuKZfYaCtPh%2BsXEqKIQCd5ZpD35387ihdTLtE0hMRP%2BSuUONAh7OvcH1OtiidSPs1iiyBjnbBGjZuMr%2B6nqvVeeLsqid2VKZ47wvBX%2Fz8CFYRSgItc5dpWkuGCAyj4hCTFg7wDtZxW%2FZ9vfgE3LrHeqUrCvbh5zY6OrhtE8tK9ZULIBCot7UI4zBFokaGZmlnDlb&X-Amz-Signature=940e1f23ed578bd023644a44fd9dab3485b5831184c0ea1fba121f05b9b93a82&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBZKJN6I%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDEjEvUDATEOnfst924Oz6H7oPa4YOfnZvwkP%2FV%2Fqo%2FogIgWeNyks23ftD2%2BKLjCEf4%2BMIrdsJlytZaJQrAGXQyaugq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDATfJmLvm536cuQpuyrcA%2FFA1T6OC8KHE8LIlvbpJRbWsiA%2Fkw77kq%2FJZ8Udf0TUDS8PwR64Yl6Soxyb7ZgIXmt%2BMRQSHal5j7JNc9xvyznzHL%2F%2Bj1uezltpVS%2BKnbMfja%2BNbGXgHWcVuu%2FgtGiApEdvO4Pgpp1S%2Fpq16wW%2BIrSu3kmCnEGnhVE81OARWihrBSdoBX88Tn095W50mlKhW4ZvgK6LhygVSvo7echxuQ0An6Gzythvz4x5w9EbRCxojJhjpTusaUyGmR3sWy2pyZHZ5V1MR0xx%2FD6BwJnd%2B1T4%2F1cYZeJjJQkNw%2B9osCuAwV2FZ%2BkAiwEVI0%2B8DKXuAChlEy%2FZ78DZr97Q83y9x6NC8Wk2AlcSeCJ%2BYXa3Oid978%2Bd851xqo%2B6AUyxVmy2T2WWP2QIP%2FOosDl%2FFCj97IqYNZavopcG3UaSpay4YK1nwln%2BNKCgsl4EEzQudEs4cBjO4Gv%2Fr2A2eXYNxpjpDOiuT1GMIAWVj4KMy%2Fc2CLlnqpr%2BBNaVw9j5GK0yEaGHk0yJ%2FfxLucx3Ajdbo5gnlFNtc9cw1y9VBq0Qs0gy81FhEIQWiwe8xhCpLrYisPzfquMIFzfup0SHWtZstsLy%2B501BZLa%2FqTEqPT4oKinoSDqIzBLbSYto8IPAdf1MIWFl8EGOqUBmwYWds%2BLrscBwk42XeEwWUDEhuKZfYaCtPh%2BsXEqKIQCd5ZpD35387ihdTLtE0hMRP%2BSuUONAh7OvcH1OtiidSPs1iiyBjnbBGjZuMr%2B6nqvVeeLsqid2VKZ47wvBX%2Fz8CFYRSgItc5dpWkuGCAyj4hCTFg7wDtZxW%2FZ9vfgE3LrHeqUrCvbh5zY6OrhtE8tK9ZULIBCot7UI4zBFokaGZmlnDlb&X-Amz-Signature=a609ed29d2a9c22c9572ded4313c8af47a4b2ce1a284af5980cd763c894a69ec&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBZKJN6I%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T110746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDEjEvUDATEOnfst924Oz6H7oPa4YOfnZvwkP%2FV%2Fqo%2FogIgWeNyks23ftD2%2BKLjCEf4%2BMIrdsJlytZaJQrAGXQyaugq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDATfJmLvm536cuQpuyrcA%2FFA1T6OC8KHE8LIlvbpJRbWsiA%2Fkw77kq%2FJZ8Udf0TUDS8PwR64Yl6Soxyb7ZgIXmt%2BMRQSHal5j7JNc9xvyznzHL%2F%2Bj1uezltpVS%2BKnbMfja%2BNbGXgHWcVuu%2FgtGiApEdvO4Pgpp1S%2Fpq16wW%2BIrSu3kmCnEGnhVE81OARWihrBSdoBX88Tn095W50mlKhW4ZvgK6LhygVSvo7echxuQ0An6Gzythvz4x5w9EbRCxojJhjpTusaUyGmR3sWy2pyZHZ5V1MR0xx%2FD6BwJnd%2B1T4%2F1cYZeJjJQkNw%2B9osCuAwV2FZ%2BkAiwEVI0%2B8DKXuAChlEy%2FZ78DZr97Q83y9x6NC8Wk2AlcSeCJ%2BYXa3Oid978%2Bd851xqo%2B6AUyxVmy2T2WWP2QIP%2FOosDl%2FFCj97IqYNZavopcG3UaSpay4YK1nwln%2BNKCgsl4EEzQudEs4cBjO4Gv%2Fr2A2eXYNxpjpDOiuT1GMIAWVj4KMy%2Fc2CLlnqpr%2BBNaVw9j5GK0yEaGHk0yJ%2FfxLucx3Ajdbo5gnlFNtc9cw1y9VBq0Qs0gy81FhEIQWiwe8xhCpLrYisPzfquMIFzfup0SHWtZstsLy%2B501BZLa%2FqTEqPT4oKinoSDqIzBLbSYto8IPAdf1MIWFl8EGOqUBmwYWds%2BLrscBwk42XeEwWUDEhuKZfYaCtPh%2BsXEqKIQCd5ZpD35387ihdTLtE0hMRP%2BSuUONAh7OvcH1OtiidSPs1iiyBjnbBGjZuMr%2B6nqvVeeLsqid2VKZ47wvBX%2Fz8CFYRSgItc5dpWkuGCAyj4hCTFg7wDtZxW%2FZ9vfgE3LrHeqUrCvbh5zY6OrhtE8tK9ZULIBCot7UI4zBFokaGZmlnDlb&X-Amz-Signature=74855e033f976c9261805aafd1dc637fe305e75f9b45561ac247cce730aa4395&X-Amz-SignedHeaders=host&x-id=GetObject)
