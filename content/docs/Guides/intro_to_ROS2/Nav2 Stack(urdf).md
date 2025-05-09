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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBD7U7XD%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T121513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZrCNxrBhj9qEGaEp7it%2B%2BvtJOxIdcX7gV4T15eFBneQIhAJ7sQr2dLLML%2FnGRLKl%2BHYowLsf3frgfof5PECqra64VKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRr0I6e5Lb2QzxC4wq3APbxe0Bp%2BcyuHrZtD5RqnHfUS7FerF2c2sstIZSh2BTWLybD2JELNZE%2FJ4WUgaNPaAUcJvb9bHlbHqVdhDfAWHzreQB4MUcTaHlG1kDoyfH0ZO9tN3DlvKsjXGwkIkbUro4fdetsfdDkyKbLFk4XMofFaIoNZEOtUcx2hv15SB%2FPUo9Lt41ZWQuBHE1gN3XowHcAiIlvFvGxEWdyV6dQofim3QqwYbB8mZm1kE1x2V2qPAuBurLkh1L2b%2BLrWlvkGW%2BgEyqOivGiRhYMB2rg%2BL98A7cFdmWD2Q%2FrLOD7He9HcmVDYIoU8EbZ12%2BOp13djrijY4sOacQ6dQ7p9FPEg4HgNgSQe74S8%2B3LxX%2BEEooDD519FI13OMtuj0K7zbqcMBmHd0odZEQhHgicuXrNT8Fhg7sh%2Bn6fnCHHyLfoED5rrQ%2FzOpSK5PYPnQu8He1c3LIc6ZW%2B2ysXCXwUH9SD761h1TyOBejViL0JhEAIqJyDmaSROsy%2BpKrY9mKpG%2BEo4bGMPXH2QhrDmYC2mmxTLOFMiGqYttTeTcvJZ%2BrrjwVSfZouzbzc2fm%2Fwx6Mbfqjtty4SGxO523YZ6D0quY8LV6crV9%2B%2BXsaAIjuh0fNuWwh9niHDUq7vUoX1hxaDDa1ffABjqkATyCC9q9kcLO%2B8c081X7ELLVTrObvfSqoLivdQCskDyzumsbVFwCT6pyRL%2FcDtwK%2FSuKGG1O1eAcj5OKvlg1qiZk8A%2B%2BD4MgMWSQIUSN5H0YdrzHquchEqbHSkuFg4%2BQkzjqujiVRu3ukT36C6lnOKrBtj0LRVxeZTLmQrsbpI4ZOXQw7PA8MK9%2BxtD1dlVOX6HCGVUD%2BQqLgmfs%2B7zjWAZ%2Fqnj7&X-Amz-Signature=5374903d1e3e9f7172965f9323a753920eecc9d07308c6c1436c26e78d7fbf15&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBD7U7XD%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T121513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZrCNxrBhj9qEGaEp7it%2B%2BvtJOxIdcX7gV4T15eFBneQIhAJ7sQr2dLLML%2FnGRLKl%2BHYowLsf3frgfof5PECqra64VKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRr0I6e5Lb2QzxC4wq3APbxe0Bp%2BcyuHrZtD5RqnHfUS7FerF2c2sstIZSh2BTWLybD2JELNZE%2FJ4WUgaNPaAUcJvb9bHlbHqVdhDfAWHzreQB4MUcTaHlG1kDoyfH0ZO9tN3DlvKsjXGwkIkbUro4fdetsfdDkyKbLFk4XMofFaIoNZEOtUcx2hv15SB%2FPUo9Lt41ZWQuBHE1gN3XowHcAiIlvFvGxEWdyV6dQofim3QqwYbB8mZm1kE1x2V2qPAuBurLkh1L2b%2BLrWlvkGW%2BgEyqOivGiRhYMB2rg%2BL98A7cFdmWD2Q%2FrLOD7He9HcmVDYIoU8EbZ12%2BOp13djrijY4sOacQ6dQ7p9FPEg4HgNgSQe74S8%2B3LxX%2BEEooDD519FI13OMtuj0K7zbqcMBmHd0odZEQhHgicuXrNT8Fhg7sh%2Bn6fnCHHyLfoED5rrQ%2FzOpSK5PYPnQu8He1c3LIc6ZW%2B2ysXCXwUH9SD761h1TyOBejViL0JhEAIqJyDmaSROsy%2BpKrY9mKpG%2BEo4bGMPXH2QhrDmYC2mmxTLOFMiGqYttTeTcvJZ%2BrrjwVSfZouzbzc2fm%2Fwx6Mbfqjtty4SGxO523YZ6D0quY8LV6crV9%2B%2BXsaAIjuh0fNuWwh9niHDUq7vUoX1hxaDDa1ffABjqkATyCC9q9kcLO%2B8c081X7ELLVTrObvfSqoLivdQCskDyzumsbVFwCT6pyRL%2FcDtwK%2FSuKGG1O1eAcj5OKvlg1qiZk8A%2B%2BD4MgMWSQIUSN5H0YdrzHquchEqbHSkuFg4%2BQkzjqujiVRu3ukT36C6lnOKrBtj0LRVxeZTLmQrsbpI4ZOXQw7PA8MK9%2BxtD1dlVOX6HCGVUD%2BQqLgmfs%2B7zjWAZ%2Fqnj7&X-Amz-Signature=82ae1f315ff2c4ba6ea8754df2cfc30d577dc143c7518f96048368d62f4adf5e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBD7U7XD%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T121513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZrCNxrBhj9qEGaEp7it%2B%2BvtJOxIdcX7gV4T15eFBneQIhAJ7sQr2dLLML%2FnGRLKl%2BHYowLsf3frgfof5PECqra64VKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRr0I6e5Lb2QzxC4wq3APbxe0Bp%2BcyuHrZtD5RqnHfUS7FerF2c2sstIZSh2BTWLybD2JELNZE%2FJ4WUgaNPaAUcJvb9bHlbHqVdhDfAWHzreQB4MUcTaHlG1kDoyfH0ZO9tN3DlvKsjXGwkIkbUro4fdetsfdDkyKbLFk4XMofFaIoNZEOtUcx2hv15SB%2FPUo9Lt41ZWQuBHE1gN3XowHcAiIlvFvGxEWdyV6dQofim3QqwYbB8mZm1kE1x2V2qPAuBurLkh1L2b%2BLrWlvkGW%2BgEyqOivGiRhYMB2rg%2BL98A7cFdmWD2Q%2FrLOD7He9HcmVDYIoU8EbZ12%2BOp13djrijY4sOacQ6dQ7p9FPEg4HgNgSQe74S8%2B3LxX%2BEEooDD519FI13OMtuj0K7zbqcMBmHd0odZEQhHgicuXrNT8Fhg7sh%2Bn6fnCHHyLfoED5rrQ%2FzOpSK5PYPnQu8He1c3LIc6ZW%2B2ysXCXwUH9SD761h1TyOBejViL0JhEAIqJyDmaSROsy%2BpKrY9mKpG%2BEo4bGMPXH2QhrDmYC2mmxTLOFMiGqYttTeTcvJZ%2BrrjwVSfZouzbzc2fm%2Fwx6Mbfqjtty4SGxO523YZ6D0quY8LV6crV9%2B%2BXsaAIjuh0fNuWwh9niHDUq7vUoX1hxaDDa1ffABjqkATyCC9q9kcLO%2B8c081X7ELLVTrObvfSqoLivdQCskDyzumsbVFwCT6pyRL%2FcDtwK%2FSuKGG1O1eAcj5OKvlg1qiZk8A%2B%2BD4MgMWSQIUSN5H0YdrzHquchEqbHSkuFg4%2BQkzjqujiVRu3ukT36C6lnOKrBtj0LRVxeZTLmQrsbpI4ZOXQw7PA8MK9%2BxtD1dlVOX6HCGVUD%2BQqLgmfs%2B7zjWAZ%2Fqnj7&X-Amz-Signature=80d45dbbee1b5d2c4447c549b07357239ca2b8c419ea2b331a7d99cc80eccb39&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBD7U7XD%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T121513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZrCNxrBhj9qEGaEp7it%2B%2BvtJOxIdcX7gV4T15eFBneQIhAJ7sQr2dLLML%2FnGRLKl%2BHYowLsf3frgfof5PECqra64VKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRr0I6e5Lb2QzxC4wq3APbxe0Bp%2BcyuHrZtD5RqnHfUS7FerF2c2sstIZSh2BTWLybD2JELNZE%2FJ4WUgaNPaAUcJvb9bHlbHqVdhDfAWHzreQB4MUcTaHlG1kDoyfH0ZO9tN3DlvKsjXGwkIkbUro4fdetsfdDkyKbLFk4XMofFaIoNZEOtUcx2hv15SB%2FPUo9Lt41ZWQuBHE1gN3XowHcAiIlvFvGxEWdyV6dQofim3QqwYbB8mZm1kE1x2V2qPAuBurLkh1L2b%2BLrWlvkGW%2BgEyqOivGiRhYMB2rg%2BL98A7cFdmWD2Q%2FrLOD7He9HcmVDYIoU8EbZ12%2BOp13djrijY4sOacQ6dQ7p9FPEg4HgNgSQe74S8%2B3LxX%2BEEooDD519FI13OMtuj0K7zbqcMBmHd0odZEQhHgicuXrNT8Fhg7sh%2Bn6fnCHHyLfoED5rrQ%2FzOpSK5PYPnQu8He1c3LIc6ZW%2B2ysXCXwUH9SD761h1TyOBejViL0JhEAIqJyDmaSROsy%2BpKrY9mKpG%2BEo4bGMPXH2QhrDmYC2mmxTLOFMiGqYttTeTcvJZ%2BrrjwVSfZouzbzc2fm%2Fwx6Mbfqjtty4SGxO523YZ6D0quY8LV6crV9%2B%2BXsaAIjuh0fNuWwh9niHDUq7vUoX1hxaDDa1ffABjqkATyCC9q9kcLO%2B8c081X7ELLVTrObvfSqoLivdQCskDyzumsbVFwCT6pyRL%2FcDtwK%2FSuKGG1O1eAcj5OKvlg1qiZk8A%2B%2BD4MgMWSQIUSN5H0YdrzHquchEqbHSkuFg4%2BQkzjqujiVRu3ukT36C6lnOKrBtj0LRVxeZTLmQrsbpI4ZOXQw7PA8MK9%2BxtD1dlVOX6HCGVUD%2BQqLgmfs%2B7zjWAZ%2Fqnj7&X-Amz-Signature=02159fb6716cc9c3a33326d07a705d1bd3ea41492d16b9c6300a610116d59bdb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBD7U7XD%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T121513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZrCNxrBhj9qEGaEp7it%2B%2BvtJOxIdcX7gV4T15eFBneQIhAJ7sQr2dLLML%2FnGRLKl%2BHYowLsf3frgfof5PECqra64VKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRr0I6e5Lb2QzxC4wq3APbxe0Bp%2BcyuHrZtD5RqnHfUS7FerF2c2sstIZSh2BTWLybD2JELNZE%2FJ4WUgaNPaAUcJvb9bHlbHqVdhDfAWHzreQB4MUcTaHlG1kDoyfH0ZO9tN3DlvKsjXGwkIkbUro4fdetsfdDkyKbLFk4XMofFaIoNZEOtUcx2hv15SB%2FPUo9Lt41ZWQuBHE1gN3XowHcAiIlvFvGxEWdyV6dQofim3QqwYbB8mZm1kE1x2V2qPAuBurLkh1L2b%2BLrWlvkGW%2BgEyqOivGiRhYMB2rg%2BL98A7cFdmWD2Q%2FrLOD7He9HcmVDYIoU8EbZ12%2BOp13djrijY4sOacQ6dQ7p9FPEg4HgNgSQe74S8%2B3LxX%2BEEooDD519FI13OMtuj0K7zbqcMBmHd0odZEQhHgicuXrNT8Fhg7sh%2Bn6fnCHHyLfoED5rrQ%2FzOpSK5PYPnQu8He1c3LIc6ZW%2B2ysXCXwUH9SD761h1TyOBejViL0JhEAIqJyDmaSROsy%2BpKrY9mKpG%2BEo4bGMPXH2QhrDmYC2mmxTLOFMiGqYttTeTcvJZ%2BrrjwVSfZouzbzc2fm%2Fwx6Mbfqjtty4SGxO523YZ6D0quY8LV6crV9%2B%2BXsaAIjuh0fNuWwh9niHDUq7vUoX1hxaDDa1ffABjqkATyCC9q9kcLO%2B8c081X7ELLVTrObvfSqoLivdQCskDyzumsbVFwCT6pyRL%2FcDtwK%2FSuKGG1O1eAcj5OKvlg1qiZk8A%2B%2BD4MgMWSQIUSN5H0YdrzHquchEqbHSkuFg4%2BQkzjqujiVRu3ukT36C6lnOKrBtj0LRVxeZTLmQrsbpI4ZOXQw7PA8MK9%2BxtD1dlVOX6HCGVUD%2BQqLgmfs%2B7zjWAZ%2Fqnj7&X-Amz-Signature=bd8a9f404a347413f8ba7c5ba669e54fdd40981629208d87999d3eb09725873d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBD7U7XD%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T121513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZrCNxrBhj9qEGaEp7it%2B%2BvtJOxIdcX7gV4T15eFBneQIhAJ7sQr2dLLML%2FnGRLKl%2BHYowLsf3frgfof5PECqra64VKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRr0I6e5Lb2QzxC4wq3APbxe0Bp%2BcyuHrZtD5RqnHfUS7FerF2c2sstIZSh2BTWLybD2JELNZE%2FJ4WUgaNPaAUcJvb9bHlbHqVdhDfAWHzreQB4MUcTaHlG1kDoyfH0ZO9tN3DlvKsjXGwkIkbUro4fdetsfdDkyKbLFk4XMofFaIoNZEOtUcx2hv15SB%2FPUo9Lt41ZWQuBHE1gN3XowHcAiIlvFvGxEWdyV6dQofim3QqwYbB8mZm1kE1x2V2qPAuBurLkh1L2b%2BLrWlvkGW%2BgEyqOivGiRhYMB2rg%2BL98A7cFdmWD2Q%2FrLOD7He9HcmVDYIoU8EbZ12%2BOp13djrijY4sOacQ6dQ7p9FPEg4HgNgSQe74S8%2B3LxX%2BEEooDD519FI13OMtuj0K7zbqcMBmHd0odZEQhHgicuXrNT8Fhg7sh%2Bn6fnCHHyLfoED5rrQ%2FzOpSK5PYPnQu8He1c3LIc6ZW%2B2ysXCXwUH9SD761h1TyOBejViL0JhEAIqJyDmaSROsy%2BpKrY9mKpG%2BEo4bGMPXH2QhrDmYC2mmxTLOFMiGqYttTeTcvJZ%2BrrjwVSfZouzbzc2fm%2Fwx6Mbfqjtty4SGxO523YZ6D0quY8LV6crV9%2B%2BXsaAIjuh0fNuWwh9niHDUq7vUoX1hxaDDa1ffABjqkATyCC9q9kcLO%2B8c081X7ELLVTrObvfSqoLivdQCskDyzumsbVFwCT6pyRL%2FcDtwK%2FSuKGG1O1eAcj5OKvlg1qiZk8A%2B%2BD4MgMWSQIUSN5H0YdrzHquchEqbHSkuFg4%2BQkzjqujiVRu3ukT36C6lnOKrBtj0LRVxeZTLmQrsbpI4ZOXQw7PA8MK9%2BxtD1dlVOX6HCGVUD%2BQqLgmfs%2B7zjWAZ%2Fqnj7&X-Amz-Signature=51cb5c5990b361003c5c0ce6507b8fa31ae7bff1579a84f5674b4aca02dd43f1&X-Amz-SignedHeaders=host&x-id=GetObject)
