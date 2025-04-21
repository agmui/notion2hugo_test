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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM4NS4NF%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T170717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCEm01raBvM7rAmRHDx%2FBQd88EpUkMTqhUD2sMttdYMNAIhAMnCrwxa7pow1POp7sawAb4%2B06XxZKVxvK6tLEEmN0%2BCKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy87iRryeaGGoATnt4q3AN8btnHqwwVtDQxwKgQJ8kWAXthgWGtVnbjBHlsS2Ah0OTLjW16t66kROOa7Q3YG0FLv1KqNBEkcZlFzPHxl%2FxDeNInbZayNBH2XlsJZYUs10FVIOa2m7T3fLnnzRPb1n6cjltQpYbvL2MQsW%2BlrLPxFBC7oVCIrV9YeykS9a2gZA92E2MN%2F%2BwPnvM0T263jzly%2FptaS4%2B%2Fb18sU403cif6lw98x2ic9fMmj%2BXXmpEqxhPFu%2F2QtY%2F1Lgc2lmjKRJssiHCASyGdWszdytBdlBsFP21WtT5yRQGI%2FWn2i0IwJbL23cWIGSFtasxwQy4C9uTBdCLA8dwov5yE1UrlodAo3Wa5YB8qdbXWRqIMuXpZVcSpP92wDrMaUHToYAxqiLthX3iM4kj3MFOAyKC037MtitxX7jpB8XZ1qtT14JtHqtzHbz%2BybgYA5kXMRoLHcaVIS9rpKs8yZ%2FaA63HbMr4oN0moyyPNvj1evcNJRI9EXq6PAO4KHZ120jciMRTxn%2B8O4IEq8u775mOY4h9PMcrxVCr0jBLEZOLpNL7J59uwImMfnixsu2cmW2exovpnsvBanwNiuKSQ03AW8853qfaOurZeVevJoa1U3fEFB3Th%2BN2awJZboRuVVScAFzCY7JnABjqkAbzAkoqERtgU%2B%2F5RjphDqdbSe3uc5XGiL8aEtDZE3ym%2FxZwfK2XUHDCDcsqXvm3lrshnN1KttrXu0WupMYnljro2XliCTxtnZDtcZmN%2BVmS0hh3t8aUUNmAK89%2BUYcYzcO0GWv3DJ98SGxkjTN5fREX%2BleF%2FkA2YkJ4TMbKVeieuH%2BLdKp%2BKakRmuAnlq7zkawDNc%2Bos%2BI5SDIbEboIY0fmnFXah&X-Amz-Signature=6cd3bb5774027b556e7f73f19c36d3dbc6739533a03d38c19e4f53884d259d38&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM4NS4NF%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T170717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCEm01raBvM7rAmRHDx%2FBQd88EpUkMTqhUD2sMttdYMNAIhAMnCrwxa7pow1POp7sawAb4%2B06XxZKVxvK6tLEEmN0%2BCKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy87iRryeaGGoATnt4q3AN8btnHqwwVtDQxwKgQJ8kWAXthgWGtVnbjBHlsS2Ah0OTLjW16t66kROOa7Q3YG0FLv1KqNBEkcZlFzPHxl%2FxDeNInbZayNBH2XlsJZYUs10FVIOa2m7T3fLnnzRPb1n6cjltQpYbvL2MQsW%2BlrLPxFBC7oVCIrV9YeykS9a2gZA92E2MN%2F%2BwPnvM0T263jzly%2FptaS4%2B%2Fb18sU403cif6lw98x2ic9fMmj%2BXXmpEqxhPFu%2F2QtY%2F1Lgc2lmjKRJssiHCASyGdWszdytBdlBsFP21WtT5yRQGI%2FWn2i0IwJbL23cWIGSFtasxwQy4C9uTBdCLA8dwov5yE1UrlodAo3Wa5YB8qdbXWRqIMuXpZVcSpP92wDrMaUHToYAxqiLthX3iM4kj3MFOAyKC037MtitxX7jpB8XZ1qtT14JtHqtzHbz%2BybgYA5kXMRoLHcaVIS9rpKs8yZ%2FaA63HbMr4oN0moyyPNvj1evcNJRI9EXq6PAO4KHZ120jciMRTxn%2B8O4IEq8u775mOY4h9PMcrxVCr0jBLEZOLpNL7J59uwImMfnixsu2cmW2exovpnsvBanwNiuKSQ03AW8853qfaOurZeVevJoa1U3fEFB3Th%2BN2awJZboRuVVScAFzCY7JnABjqkAbzAkoqERtgU%2B%2F5RjphDqdbSe3uc5XGiL8aEtDZE3ym%2FxZwfK2XUHDCDcsqXvm3lrshnN1KttrXu0WupMYnljro2XliCTxtnZDtcZmN%2BVmS0hh3t8aUUNmAK89%2BUYcYzcO0GWv3DJ98SGxkjTN5fREX%2BleF%2FkA2YkJ4TMbKVeieuH%2BLdKp%2BKakRmuAnlq7zkawDNc%2Bos%2BI5SDIbEboIY0fmnFXah&X-Amz-Signature=3ade8a1badb204c2519f351349941d0ab1532024cf317e90b38b835641ea9e7e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM4NS4NF%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T170717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCEm01raBvM7rAmRHDx%2FBQd88EpUkMTqhUD2sMttdYMNAIhAMnCrwxa7pow1POp7sawAb4%2B06XxZKVxvK6tLEEmN0%2BCKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy87iRryeaGGoATnt4q3AN8btnHqwwVtDQxwKgQJ8kWAXthgWGtVnbjBHlsS2Ah0OTLjW16t66kROOa7Q3YG0FLv1KqNBEkcZlFzPHxl%2FxDeNInbZayNBH2XlsJZYUs10FVIOa2m7T3fLnnzRPb1n6cjltQpYbvL2MQsW%2BlrLPxFBC7oVCIrV9YeykS9a2gZA92E2MN%2F%2BwPnvM0T263jzly%2FptaS4%2B%2Fb18sU403cif6lw98x2ic9fMmj%2BXXmpEqxhPFu%2F2QtY%2F1Lgc2lmjKRJssiHCASyGdWszdytBdlBsFP21WtT5yRQGI%2FWn2i0IwJbL23cWIGSFtasxwQy4C9uTBdCLA8dwov5yE1UrlodAo3Wa5YB8qdbXWRqIMuXpZVcSpP92wDrMaUHToYAxqiLthX3iM4kj3MFOAyKC037MtitxX7jpB8XZ1qtT14JtHqtzHbz%2BybgYA5kXMRoLHcaVIS9rpKs8yZ%2FaA63HbMr4oN0moyyPNvj1evcNJRI9EXq6PAO4KHZ120jciMRTxn%2B8O4IEq8u775mOY4h9PMcrxVCr0jBLEZOLpNL7J59uwImMfnixsu2cmW2exovpnsvBanwNiuKSQ03AW8853qfaOurZeVevJoa1U3fEFB3Th%2BN2awJZboRuVVScAFzCY7JnABjqkAbzAkoqERtgU%2B%2F5RjphDqdbSe3uc5XGiL8aEtDZE3ym%2FxZwfK2XUHDCDcsqXvm3lrshnN1KttrXu0WupMYnljro2XliCTxtnZDtcZmN%2BVmS0hh3t8aUUNmAK89%2BUYcYzcO0GWv3DJ98SGxkjTN5fREX%2BleF%2FkA2YkJ4TMbKVeieuH%2BLdKp%2BKakRmuAnlq7zkawDNc%2Bos%2BI5SDIbEboIY0fmnFXah&X-Amz-Signature=64d43405625f3ed4d698bac0d520025330a48ecb08809f68a64069c7d9d6f069&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM4NS4NF%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T170717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCEm01raBvM7rAmRHDx%2FBQd88EpUkMTqhUD2sMttdYMNAIhAMnCrwxa7pow1POp7sawAb4%2B06XxZKVxvK6tLEEmN0%2BCKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy87iRryeaGGoATnt4q3AN8btnHqwwVtDQxwKgQJ8kWAXthgWGtVnbjBHlsS2Ah0OTLjW16t66kROOa7Q3YG0FLv1KqNBEkcZlFzPHxl%2FxDeNInbZayNBH2XlsJZYUs10FVIOa2m7T3fLnnzRPb1n6cjltQpYbvL2MQsW%2BlrLPxFBC7oVCIrV9YeykS9a2gZA92E2MN%2F%2BwPnvM0T263jzly%2FptaS4%2B%2Fb18sU403cif6lw98x2ic9fMmj%2BXXmpEqxhPFu%2F2QtY%2F1Lgc2lmjKRJssiHCASyGdWszdytBdlBsFP21WtT5yRQGI%2FWn2i0IwJbL23cWIGSFtasxwQy4C9uTBdCLA8dwov5yE1UrlodAo3Wa5YB8qdbXWRqIMuXpZVcSpP92wDrMaUHToYAxqiLthX3iM4kj3MFOAyKC037MtitxX7jpB8XZ1qtT14JtHqtzHbz%2BybgYA5kXMRoLHcaVIS9rpKs8yZ%2FaA63HbMr4oN0moyyPNvj1evcNJRI9EXq6PAO4KHZ120jciMRTxn%2B8O4IEq8u775mOY4h9PMcrxVCr0jBLEZOLpNL7J59uwImMfnixsu2cmW2exovpnsvBanwNiuKSQ03AW8853qfaOurZeVevJoa1U3fEFB3Th%2BN2awJZboRuVVScAFzCY7JnABjqkAbzAkoqERtgU%2B%2F5RjphDqdbSe3uc5XGiL8aEtDZE3ym%2FxZwfK2XUHDCDcsqXvm3lrshnN1KttrXu0WupMYnljro2XliCTxtnZDtcZmN%2BVmS0hh3t8aUUNmAK89%2BUYcYzcO0GWv3DJ98SGxkjTN5fREX%2BleF%2FkA2YkJ4TMbKVeieuH%2BLdKp%2BKakRmuAnlq7zkawDNc%2Bos%2BI5SDIbEboIY0fmnFXah&X-Amz-Signature=011368bd1468a88fdb5c86335e368fb4bd8b197367a34afe6026f8553a956d27&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM4NS4NF%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T170717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCEm01raBvM7rAmRHDx%2FBQd88EpUkMTqhUD2sMttdYMNAIhAMnCrwxa7pow1POp7sawAb4%2B06XxZKVxvK6tLEEmN0%2BCKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy87iRryeaGGoATnt4q3AN8btnHqwwVtDQxwKgQJ8kWAXthgWGtVnbjBHlsS2Ah0OTLjW16t66kROOa7Q3YG0FLv1KqNBEkcZlFzPHxl%2FxDeNInbZayNBH2XlsJZYUs10FVIOa2m7T3fLnnzRPb1n6cjltQpYbvL2MQsW%2BlrLPxFBC7oVCIrV9YeykS9a2gZA92E2MN%2F%2BwPnvM0T263jzly%2FptaS4%2B%2Fb18sU403cif6lw98x2ic9fMmj%2BXXmpEqxhPFu%2F2QtY%2F1Lgc2lmjKRJssiHCASyGdWszdytBdlBsFP21WtT5yRQGI%2FWn2i0IwJbL23cWIGSFtasxwQy4C9uTBdCLA8dwov5yE1UrlodAo3Wa5YB8qdbXWRqIMuXpZVcSpP92wDrMaUHToYAxqiLthX3iM4kj3MFOAyKC037MtitxX7jpB8XZ1qtT14JtHqtzHbz%2BybgYA5kXMRoLHcaVIS9rpKs8yZ%2FaA63HbMr4oN0moyyPNvj1evcNJRI9EXq6PAO4KHZ120jciMRTxn%2B8O4IEq8u775mOY4h9PMcrxVCr0jBLEZOLpNL7J59uwImMfnixsu2cmW2exovpnsvBanwNiuKSQ03AW8853qfaOurZeVevJoa1U3fEFB3Th%2BN2awJZboRuVVScAFzCY7JnABjqkAbzAkoqERtgU%2B%2F5RjphDqdbSe3uc5XGiL8aEtDZE3ym%2FxZwfK2XUHDCDcsqXvm3lrshnN1KttrXu0WupMYnljro2XliCTxtnZDtcZmN%2BVmS0hh3t8aUUNmAK89%2BUYcYzcO0GWv3DJ98SGxkjTN5fREX%2BleF%2FkA2YkJ4TMbKVeieuH%2BLdKp%2BKakRmuAnlq7zkawDNc%2Bos%2BI5SDIbEboIY0fmnFXah&X-Amz-Signature=a1b8527b16e86c811e19c3162230d6a926fa7890398b4106d90ff7594fa5c02c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM4NS4NF%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T170717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJIMEYCIQCEm01raBvM7rAmRHDx%2FBQd88EpUkMTqhUD2sMttdYMNAIhAMnCrwxa7pow1POp7sawAb4%2B06XxZKVxvK6tLEEmN0%2BCKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy87iRryeaGGoATnt4q3AN8btnHqwwVtDQxwKgQJ8kWAXthgWGtVnbjBHlsS2Ah0OTLjW16t66kROOa7Q3YG0FLv1KqNBEkcZlFzPHxl%2FxDeNInbZayNBH2XlsJZYUs10FVIOa2m7T3fLnnzRPb1n6cjltQpYbvL2MQsW%2BlrLPxFBC7oVCIrV9YeykS9a2gZA92E2MN%2F%2BwPnvM0T263jzly%2FptaS4%2B%2Fb18sU403cif6lw98x2ic9fMmj%2BXXmpEqxhPFu%2F2QtY%2F1Lgc2lmjKRJssiHCASyGdWszdytBdlBsFP21WtT5yRQGI%2FWn2i0IwJbL23cWIGSFtasxwQy4C9uTBdCLA8dwov5yE1UrlodAo3Wa5YB8qdbXWRqIMuXpZVcSpP92wDrMaUHToYAxqiLthX3iM4kj3MFOAyKC037MtitxX7jpB8XZ1qtT14JtHqtzHbz%2BybgYA5kXMRoLHcaVIS9rpKs8yZ%2FaA63HbMr4oN0moyyPNvj1evcNJRI9EXq6PAO4KHZ120jciMRTxn%2B8O4IEq8u775mOY4h9PMcrxVCr0jBLEZOLpNL7J59uwImMfnixsu2cmW2exovpnsvBanwNiuKSQ03AW8853qfaOurZeVevJoa1U3fEFB3Th%2BN2awJZboRuVVScAFzCY7JnABjqkAbzAkoqERtgU%2B%2F5RjphDqdbSe3uc5XGiL8aEtDZE3ym%2FxZwfK2XUHDCDcsqXvm3lrshnN1KttrXu0WupMYnljro2XliCTxtnZDtcZmN%2BVmS0hh3t8aUUNmAK89%2BUYcYzcO0GWv3DJ98SGxkjTN5fREX%2BleF%2FkA2YkJ4TMbKVeieuH%2BLdKp%2BKakRmuAnlq7zkawDNc%2Bos%2BI5SDIbEboIY0fmnFXah&X-Amz-Signature=e45f51525fe58e420f52af13ea747aa7334138a40070cb52e8f3c2a57ebeff38&X-Amz-SignedHeaders=host&x-id=GetObject)
