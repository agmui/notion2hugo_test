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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UDI2L7O%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFhDJ%2B7RirlYRmBgoneudK3xpYaB3VvUAl3W9uGO1r5QIgL7JnK1p6N%2FMuah0Lcarj5xcZ%2B9d5AxDoAxnGX3RVTAMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIKlPpDUdCuL%2F5x4yrcAzr7fYqUAotFGnLOqPhQgdp1RiggE56t3P2IjmZNfh0u5%2Bb1LHRS1UQr2JpQqR4BniAB%2FO1%2FbtK26DAjT5sCBdAPCAp15jGnyQycIceI%2BXnPakM4kupymGbO2CR%2B696Y5%2B5us1ZhZqAgtl0SHlv8KCnkn5GhT3hbC3UmuxY7wErS1kujO8dckbotl35bfzVTLQKzax4PDO2f%2BkB9IpYQzebsLRsocGgxREAVmfbzzvfiE1xKb%2FueP0Zv7z%2F1DumR7t8TxOc%2FX%2BiP%2Fd7UB9Ck29o6e4w%2FVHzdFucHZefMn%2FExPQE%2B2lZ%2FSS63bdr37G%2BjtAJWHOuBCw65J%2BY2KzREiRKp8M56vLo4JizuAiupwhyQdzKVxlcIAgGAibR9OuEve2PzT%2F2sldlmF2lCXUvZFrZLy5BqD0HzKkLxP9GIIl5ZZQF4xbaxRAw7cacM7gOiFE3sTFn9%2Fn%2FjV40l4oTWPw9LcLTYU%2FLMyejTxs1K6MHRWpNHjlAMECVApNIqQRCuB1PTjmq4AK8A7eWxSEhLa7Dx%2FUqEkKxStOT0OpUDHruksDY2Paa9QDTVj%2BeSVfI0OHZdggh%2BisVGUBbgMNek3wkzTLt2qsB5XKgcOIXVq5LQPDiffptji%2FS%2BGg6BMK7bl74GOqUBDMmh%2FlbvMdFFhL4SGjMDPNXihVJ9qFaH2uYHwbcOJzG%2BDojgVC1KK6V%2Bx%2Fjo0LLCAvZQsxursGgz47FUMonANuZzF3bMehjiMIw34sOtf6xTXR%2Be56iu3V2EMCxZLm1blMNPkoREhIs0YM0%2B7gmp9hS8sjLltAraspc8%2FmY2FzWFbj7BZ6f3ojpgwZPh8HPOk8fQ8H1ha07u6vB0pbiNSWAlPDoY&X-Amz-Signature=0a615f8ec5faed7a453f680933db56dcbd0f44eb289c58950610d58057afb152&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UDI2L7O%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFhDJ%2B7RirlYRmBgoneudK3xpYaB3VvUAl3W9uGO1r5QIgL7JnK1p6N%2FMuah0Lcarj5xcZ%2B9d5AxDoAxnGX3RVTAMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIKlPpDUdCuL%2F5x4yrcAzr7fYqUAotFGnLOqPhQgdp1RiggE56t3P2IjmZNfh0u5%2Bb1LHRS1UQr2JpQqR4BniAB%2FO1%2FbtK26DAjT5sCBdAPCAp15jGnyQycIceI%2BXnPakM4kupymGbO2CR%2B696Y5%2B5us1ZhZqAgtl0SHlv8KCnkn5GhT3hbC3UmuxY7wErS1kujO8dckbotl35bfzVTLQKzax4PDO2f%2BkB9IpYQzebsLRsocGgxREAVmfbzzvfiE1xKb%2FueP0Zv7z%2F1DumR7t8TxOc%2FX%2BiP%2Fd7UB9Ck29o6e4w%2FVHzdFucHZefMn%2FExPQE%2B2lZ%2FSS63bdr37G%2BjtAJWHOuBCw65J%2BY2KzREiRKp8M56vLo4JizuAiupwhyQdzKVxlcIAgGAibR9OuEve2PzT%2F2sldlmF2lCXUvZFrZLy5BqD0HzKkLxP9GIIl5ZZQF4xbaxRAw7cacM7gOiFE3sTFn9%2Fn%2FjV40l4oTWPw9LcLTYU%2FLMyejTxs1K6MHRWpNHjlAMECVApNIqQRCuB1PTjmq4AK8A7eWxSEhLa7Dx%2FUqEkKxStOT0OpUDHruksDY2Paa9QDTVj%2BeSVfI0OHZdggh%2BisVGUBbgMNek3wkzTLt2qsB5XKgcOIXVq5LQPDiffptji%2FS%2BGg6BMK7bl74GOqUBDMmh%2FlbvMdFFhL4SGjMDPNXihVJ9qFaH2uYHwbcOJzG%2BDojgVC1KK6V%2Bx%2Fjo0LLCAvZQsxursGgz47FUMonANuZzF3bMehjiMIw34sOtf6xTXR%2Be56iu3V2EMCxZLm1blMNPkoREhIs0YM0%2B7gmp9hS8sjLltAraspc8%2FmY2FzWFbj7BZ6f3ojpgwZPh8HPOk8fQ8H1ha07u6vB0pbiNSWAlPDoY&X-Amz-Signature=d2cfe9e993d879fdb3f28acba76bd2ee1c413e3a463e09f2d42e47bb960d155b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UDI2L7O%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFhDJ%2B7RirlYRmBgoneudK3xpYaB3VvUAl3W9uGO1r5QIgL7JnK1p6N%2FMuah0Lcarj5xcZ%2B9d5AxDoAxnGX3RVTAMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIKlPpDUdCuL%2F5x4yrcAzr7fYqUAotFGnLOqPhQgdp1RiggE56t3P2IjmZNfh0u5%2Bb1LHRS1UQr2JpQqR4BniAB%2FO1%2FbtK26DAjT5sCBdAPCAp15jGnyQycIceI%2BXnPakM4kupymGbO2CR%2B696Y5%2B5us1ZhZqAgtl0SHlv8KCnkn5GhT3hbC3UmuxY7wErS1kujO8dckbotl35bfzVTLQKzax4PDO2f%2BkB9IpYQzebsLRsocGgxREAVmfbzzvfiE1xKb%2FueP0Zv7z%2F1DumR7t8TxOc%2FX%2BiP%2Fd7UB9Ck29o6e4w%2FVHzdFucHZefMn%2FExPQE%2B2lZ%2FSS63bdr37G%2BjtAJWHOuBCw65J%2BY2KzREiRKp8M56vLo4JizuAiupwhyQdzKVxlcIAgGAibR9OuEve2PzT%2F2sldlmF2lCXUvZFrZLy5BqD0HzKkLxP9GIIl5ZZQF4xbaxRAw7cacM7gOiFE3sTFn9%2Fn%2FjV40l4oTWPw9LcLTYU%2FLMyejTxs1K6MHRWpNHjlAMECVApNIqQRCuB1PTjmq4AK8A7eWxSEhLa7Dx%2FUqEkKxStOT0OpUDHruksDY2Paa9QDTVj%2BeSVfI0OHZdggh%2BisVGUBbgMNek3wkzTLt2qsB5XKgcOIXVq5LQPDiffptji%2FS%2BGg6BMK7bl74GOqUBDMmh%2FlbvMdFFhL4SGjMDPNXihVJ9qFaH2uYHwbcOJzG%2BDojgVC1KK6V%2Bx%2Fjo0LLCAvZQsxursGgz47FUMonANuZzF3bMehjiMIw34sOtf6xTXR%2Be56iu3V2EMCxZLm1blMNPkoREhIs0YM0%2B7gmp9hS8sjLltAraspc8%2FmY2FzWFbj7BZ6f3ojpgwZPh8HPOk8fQ8H1ha07u6vB0pbiNSWAlPDoY&X-Amz-Signature=11b4553410f6d8d4817923ed2a5cc783170d1cb4f802e1dc3cd267c89f3993d4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UDI2L7O%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFhDJ%2B7RirlYRmBgoneudK3xpYaB3VvUAl3W9uGO1r5QIgL7JnK1p6N%2FMuah0Lcarj5xcZ%2B9d5AxDoAxnGX3RVTAMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIKlPpDUdCuL%2F5x4yrcAzr7fYqUAotFGnLOqPhQgdp1RiggE56t3P2IjmZNfh0u5%2Bb1LHRS1UQr2JpQqR4BniAB%2FO1%2FbtK26DAjT5sCBdAPCAp15jGnyQycIceI%2BXnPakM4kupymGbO2CR%2B696Y5%2B5us1ZhZqAgtl0SHlv8KCnkn5GhT3hbC3UmuxY7wErS1kujO8dckbotl35bfzVTLQKzax4PDO2f%2BkB9IpYQzebsLRsocGgxREAVmfbzzvfiE1xKb%2FueP0Zv7z%2F1DumR7t8TxOc%2FX%2BiP%2Fd7UB9Ck29o6e4w%2FVHzdFucHZefMn%2FExPQE%2B2lZ%2FSS63bdr37G%2BjtAJWHOuBCw65J%2BY2KzREiRKp8M56vLo4JizuAiupwhyQdzKVxlcIAgGAibR9OuEve2PzT%2F2sldlmF2lCXUvZFrZLy5BqD0HzKkLxP9GIIl5ZZQF4xbaxRAw7cacM7gOiFE3sTFn9%2Fn%2FjV40l4oTWPw9LcLTYU%2FLMyejTxs1K6MHRWpNHjlAMECVApNIqQRCuB1PTjmq4AK8A7eWxSEhLa7Dx%2FUqEkKxStOT0OpUDHruksDY2Paa9QDTVj%2BeSVfI0OHZdggh%2BisVGUBbgMNek3wkzTLt2qsB5XKgcOIXVq5LQPDiffptji%2FS%2BGg6BMK7bl74GOqUBDMmh%2FlbvMdFFhL4SGjMDPNXihVJ9qFaH2uYHwbcOJzG%2BDojgVC1KK6V%2Bx%2Fjo0LLCAvZQsxursGgz47FUMonANuZzF3bMehjiMIw34sOtf6xTXR%2Be56iu3V2EMCxZLm1blMNPkoREhIs0YM0%2B7gmp9hS8sjLltAraspc8%2FmY2FzWFbj7BZ6f3ojpgwZPh8HPOk8fQ8H1ha07u6vB0pbiNSWAlPDoY&X-Amz-Signature=adf8cc0a9d3b9c3e4f94d46692a4dab31757cf53f060b402bcd0fc9392d73431&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UDI2L7O%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFhDJ%2B7RirlYRmBgoneudK3xpYaB3VvUAl3W9uGO1r5QIgL7JnK1p6N%2FMuah0Lcarj5xcZ%2B9d5AxDoAxnGX3RVTAMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIKlPpDUdCuL%2F5x4yrcAzr7fYqUAotFGnLOqPhQgdp1RiggE56t3P2IjmZNfh0u5%2Bb1LHRS1UQr2JpQqR4BniAB%2FO1%2FbtK26DAjT5sCBdAPCAp15jGnyQycIceI%2BXnPakM4kupymGbO2CR%2B696Y5%2B5us1ZhZqAgtl0SHlv8KCnkn5GhT3hbC3UmuxY7wErS1kujO8dckbotl35bfzVTLQKzax4PDO2f%2BkB9IpYQzebsLRsocGgxREAVmfbzzvfiE1xKb%2FueP0Zv7z%2F1DumR7t8TxOc%2FX%2BiP%2Fd7UB9Ck29o6e4w%2FVHzdFucHZefMn%2FExPQE%2B2lZ%2FSS63bdr37G%2BjtAJWHOuBCw65J%2BY2KzREiRKp8M56vLo4JizuAiupwhyQdzKVxlcIAgGAibR9OuEve2PzT%2F2sldlmF2lCXUvZFrZLy5BqD0HzKkLxP9GIIl5ZZQF4xbaxRAw7cacM7gOiFE3sTFn9%2Fn%2FjV40l4oTWPw9LcLTYU%2FLMyejTxs1K6MHRWpNHjlAMECVApNIqQRCuB1PTjmq4AK8A7eWxSEhLa7Dx%2FUqEkKxStOT0OpUDHruksDY2Paa9QDTVj%2BeSVfI0OHZdggh%2BisVGUBbgMNek3wkzTLt2qsB5XKgcOIXVq5LQPDiffptji%2FS%2BGg6BMK7bl74GOqUBDMmh%2FlbvMdFFhL4SGjMDPNXihVJ9qFaH2uYHwbcOJzG%2BDojgVC1KK6V%2Bx%2Fjo0LLCAvZQsxursGgz47FUMonANuZzF3bMehjiMIw34sOtf6xTXR%2Be56iu3V2EMCxZLm1blMNPkoREhIs0YM0%2B7gmp9hS8sjLltAraspc8%2FmY2FzWFbj7BZ6f3ojpgwZPh8HPOk8fQ8H1ha07u6vB0pbiNSWAlPDoY&X-Amz-Signature=79b6f7e779ac4f1c819e057ff2bf9381de0b4b8e16d8cda4f12efc5c3afdca6a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UDI2L7O%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCFhDJ%2B7RirlYRmBgoneudK3xpYaB3VvUAl3W9uGO1r5QIgL7JnK1p6N%2FMuah0Lcarj5xcZ%2B9d5AxDoAxnGX3RVTAMqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIKlPpDUdCuL%2F5x4yrcAzr7fYqUAotFGnLOqPhQgdp1RiggE56t3P2IjmZNfh0u5%2Bb1LHRS1UQr2JpQqR4BniAB%2FO1%2FbtK26DAjT5sCBdAPCAp15jGnyQycIceI%2BXnPakM4kupymGbO2CR%2B696Y5%2B5us1ZhZqAgtl0SHlv8KCnkn5GhT3hbC3UmuxY7wErS1kujO8dckbotl35bfzVTLQKzax4PDO2f%2BkB9IpYQzebsLRsocGgxREAVmfbzzvfiE1xKb%2FueP0Zv7z%2F1DumR7t8TxOc%2FX%2BiP%2Fd7UB9Ck29o6e4w%2FVHzdFucHZefMn%2FExPQE%2B2lZ%2FSS63bdr37G%2BjtAJWHOuBCw65J%2BY2KzREiRKp8M56vLo4JizuAiupwhyQdzKVxlcIAgGAibR9OuEve2PzT%2F2sldlmF2lCXUvZFrZLy5BqD0HzKkLxP9GIIl5ZZQF4xbaxRAw7cacM7gOiFE3sTFn9%2Fn%2FjV40l4oTWPw9LcLTYU%2FLMyejTxs1K6MHRWpNHjlAMECVApNIqQRCuB1PTjmq4AK8A7eWxSEhLa7Dx%2FUqEkKxStOT0OpUDHruksDY2Paa9QDTVj%2BeSVfI0OHZdggh%2BisVGUBbgMNek3wkzTLt2qsB5XKgcOIXVq5LQPDiffptji%2FS%2BGg6BMK7bl74GOqUBDMmh%2FlbvMdFFhL4SGjMDPNXihVJ9qFaH2uYHwbcOJzG%2BDojgVC1KK6V%2Bx%2Fjo0LLCAvZQsxursGgz47FUMonANuZzF3bMehjiMIw34sOtf6xTXR%2Be56iu3V2EMCxZLm1blMNPkoREhIs0YM0%2B7gmp9hS8sjLltAraspc8%2FmY2FzWFbj7BZ6f3ojpgwZPh8HPOk8fQ8H1ha07u6vB0pbiNSWAlPDoY&X-Amz-Signature=aae528269b0cdfca16b7a329921d7cdb970ff19528bf43841521c8f7557418c8&X-Amz-SignedHeaders=host&x-id=GetObject)
