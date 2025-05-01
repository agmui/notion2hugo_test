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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB5TJWLX%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T131920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDXh5MMNzIi2D1BZpzqqNhd0Tv3JYhqPnA2f1aMAvt1eAIgKNzdjL%2F17ythFhAhO0rHMHA%2FTiH6oOcP3KmNo6qRsS8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBw1WfPNcPzMybYcACrcA0zU%2FihGTnIPlmKUPCVEr8iFWUKEPoU8ua6gqtf7wzhbnPVcL5bwaIL%2BbNZUv8xqEWFO3xNovgqVFPW1fopLXLITsuAiVBtOAWij4PtHP9XOPrQniguvKsY0kbS82mOiAWmV7U83liJ%2BT9rNtsm7Jr3DXYUMTvncbwcPMFN%2F1ac1PO%2BQzoJrygoVIjznlG9u8gH1QvrAa67sCSr1occfUDr5aiFqDQyw%2Bz8HCEEN2%2Bl%2FAA7va8YEA2urw2692UPn8SxkI7saAmRKXdpDuYS6UZySb7SN4i8ni7oLCDIIgMB0zyPW1y0oGD%2B9QbZuK7ztJsz6jO9IQZUbzYO41MLYT%2F9qfajqwOO3oCsKRkrb5gqSPIPCH8JBSmFXAuBLmjES0SSy8igB5etMLrbRpOaKZZBKRnwpR%2FSO4fXDc%2BouHWSDubDdvgc7wgHSD9CUqT4LtuqiKtofZ7IsGZm8%2FNyGVh8cV0gvDvFfbqV1nP%2BiA6MoxWSgTCwv0TPYnVOUkaXed73KtfJ9GV6U3IyJIEFfD0m%2F51xMku7uKXjk14DBN%2F%2BwtuCMyBR4bV3J0OSk04Le0C%2F%2B7EeQyiqCxMfA0eUuDdKNkrVyUl9lakauktAM72pzoNyzqkG60gKk7LrRMOjIzcAGOqUBW8c5Ud0Otv3JPLkpYK341Fagat21MiHlMo65f4YvLrcB7BP0Db3jHNZwnKxp4IyPQaPv8sMaQqUM983yzRTgXDe6ocSV7P8oYEwkq%2BAs%2BoOhRUG384V4aOQg80JuamYiAoYTmx3ENqEOu3rAHPvAGUE8v7XSZjvLSc%2BB20UyC3RsvXugAcW2%2BLFRSyZMnXf6yk3Uvz9K7NV%2BJXQbp3PVR%2B8A7l6c&X-Amz-Signature=ad4312ace0060e76085e7c83719ac9ec4f8fd56cee1972e54d4ce89d9551a834&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB5TJWLX%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T131920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDXh5MMNzIi2D1BZpzqqNhd0Tv3JYhqPnA2f1aMAvt1eAIgKNzdjL%2F17ythFhAhO0rHMHA%2FTiH6oOcP3KmNo6qRsS8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBw1WfPNcPzMybYcACrcA0zU%2FihGTnIPlmKUPCVEr8iFWUKEPoU8ua6gqtf7wzhbnPVcL5bwaIL%2BbNZUv8xqEWFO3xNovgqVFPW1fopLXLITsuAiVBtOAWij4PtHP9XOPrQniguvKsY0kbS82mOiAWmV7U83liJ%2BT9rNtsm7Jr3DXYUMTvncbwcPMFN%2F1ac1PO%2BQzoJrygoVIjznlG9u8gH1QvrAa67sCSr1occfUDr5aiFqDQyw%2Bz8HCEEN2%2Bl%2FAA7va8YEA2urw2692UPn8SxkI7saAmRKXdpDuYS6UZySb7SN4i8ni7oLCDIIgMB0zyPW1y0oGD%2B9QbZuK7ztJsz6jO9IQZUbzYO41MLYT%2F9qfajqwOO3oCsKRkrb5gqSPIPCH8JBSmFXAuBLmjES0SSy8igB5etMLrbRpOaKZZBKRnwpR%2FSO4fXDc%2BouHWSDubDdvgc7wgHSD9CUqT4LtuqiKtofZ7IsGZm8%2FNyGVh8cV0gvDvFfbqV1nP%2BiA6MoxWSgTCwv0TPYnVOUkaXed73KtfJ9GV6U3IyJIEFfD0m%2F51xMku7uKXjk14DBN%2F%2BwtuCMyBR4bV3J0OSk04Le0C%2F%2B7EeQyiqCxMfA0eUuDdKNkrVyUl9lakauktAM72pzoNyzqkG60gKk7LrRMOjIzcAGOqUBW8c5Ud0Otv3JPLkpYK341Fagat21MiHlMo65f4YvLrcB7BP0Db3jHNZwnKxp4IyPQaPv8sMaQqUM983yzRTgXDe6ocSV7P8oYEwkq%2BAs%2BoOhRUG384V4aOQg80JuamYiAoYTmx3ENqEOu3rAHPvAGUE8v7XSZjvLSc%2BB20UyC3RsvXugAcW2%2BLFRSyZMnXf6yk3Uvz9K7NV%2BJXQbp3PVR%2B8A7l6c&X-Amz-Signature=f708f28405782853fb9951f13d917833ef6b5d0979fa92d668c310a40d971df3&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB5TJWLX%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T131920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDXh5MMNzIi2D1BZpzqqNhd0Tv3JYhqPnA2f1aMAvt1eAIgKNzdjL%2F17ythFhAhO0rHMHA%2FTiH6oOcP3KmNo6qRsS8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBw1WfPNcPzMybYcACrcA0zU%2FihGTnIPlmKUPCVEr8iFWUKEPoU8ua6gqtf7wzhbnPVcL5bwaIL%2BbNZUv8xqEWFO3xNovgqVFPW1fopLXLITsuAiVBtOAWij4PtHP9XOPrQniguvKsY0kbS82mOiAWmV7U83liJ%2BT9rNtsm7Jr3DXYUMTvncbwcPMFN%2F1ac1PO%2BQzoJrygoVIjznlG9u8gH1QvrAa67sCSr1occfUDr5aiFqDQyw%2Bz8HCEEN2%2Bl%2FAA7va8YEA2urw2692UPn8SxkI7saAmRKXdpDuYS6UZySb7SN4i8ni7oLCDIIgMB0zyPW1y0oGD%2B9QbZuK7ztJsz6jO9IQZUbzYO41MLYT%2F9qfajqwOO3oCsKRkrb5gqSPIPCH8JBSmFXAuBLmjES0SSy8igB5etMLrbRpOaKZZBKRnwpR%2FSO4fXDc%2BouHWSDubDdvgc7wgHSD9CUqT4LtuqiKtofZ7IsGZm8%2FNyGVh8cV0gvDvFfbqV1nP%2BiA6MoxWSgTCwv0TPYnVOUkaXed73KtfJ9GV6U3IyJIEFfD0m%2F51xMku7uKXjk14DBN%2F%2BwtuCMyBR4bV3J0OSk04Le0C%2F%2B7EeQyiqCxMfA0eUuDdKNkrVyUl9lakauktAM72pzoNyzqkG60gKk7LrRMOjIzcAGOqUBW8c5Ud0Otv3JPLkpYK341Fagat21MiHlMo65f4YvLrcB7BP0Db3jHNZwnKxp4IyPQaPv8sMaQqUM983yzRTgXDe6ocSV7P8oYEwkq%2BAs%2BoOhRUG384V4aOQg80JuamYiAoYTmx3ENqEOu3rAHPvAGUE8v7XSZjvLSc%2BB20UyC3RsvXugAcW2%2BLFRSyZMnXf6yk3Uvz9K7NV%2BJXQbp3PVR%2B8A7l6c&X-Amz-Signature=5a89841e5e7d956b9317ec0c0ec7dd80d53eefd56c6d3f1ca1d135fafb80e49f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB5TJWLX%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T131920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDXh5MMNzIi2D1BZpzqqNhd0Tv3JYhqPnA2f1aMAvt1eAIgKNzdjL%2F17ythFhAhO0rHMHA%2FTiH6oOcP3KmNo6qRsS8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBw1WfPNcPzMybYcACrcA0zU%2FihGTnIPlmKUPCVEr8iFWUKEPoU8ua6gqtf7wzhbnPVcL5bwaIL%2BbNZUv8xqEWFO3xNovgqVFPW1fopLXLITsuAiVBtOAWij4PtHP9XOPrQniguvKsY0kbS82mOiAWmV7U83liJ%2BT9rNtsm7Jr3DXYUMTvncbwcPMFN%2F1ac1PO%2BQzoJrygoVIjznlG9u8gH1QvrAa67sCSr1occfUDr5aiFqDQyw%2Bz8HCEEN2%2Bl%2FAA7va8YEA2urw2692UPn8SxkI7saAmRKXdpDuYS6UZySb7SN4i8ni7oLCDIIgMB0zyPW1y0oGD%2B9QbZuK7ztJsz6jO9IQZUbzYO41MLYT%2F9qfajqwOO3oCsKRkrb5gqSPIPCH8JBSmFXAuBLmjES0SSy8igB5etMLrbRpOaKZZBKRnwpR%2FSO4fXDc%2BouHWSDubDdvgc7wgHSD9CUqT4LtuqiKtofZ7IsGZm8%2FNyGVh8cV0gvDvFfbqV1nP%2BiA6MoxWSgTCwv0TPYnVOUkaXed73KtfJ9GV6U3IyJIEFfD0m%2F51xMku7uKXjk14DBN%2F%2BwtuCMyBR4bV3J0OSk04Le0C%2F%2B7EeQyiqCxMfA0eUuDdKNkrVyUl9lakauktAM72pzoNyzqkG60gKk7LrRMOjIzcAGOqUBW8c5Ud0Otv3JPLkpYK341Fagat21MiHlMo65f4YvLrcB7BP0Db3jHNZwnKxp4IyPQaPv8sMaQqUM983yzRTgXDe6ocSV7P8oYEwkq%2BAs%2BoOhRUG384V4aOQg80JuamYiAoYTmx3ENqEOu3rAHPvAGUE8v7XSZjvLSc%2BB20UyC3RsvXugAcW2%2BLFRSyZMnXf6yk3Uvz9K7NV%2BJXQbp3PVR%2B8A7l6c&X-Amz-Signature=5801c8dd7e6450b693c238e974b1d0477cf2fe97d36470ad62ccdd699f274207&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB5TJWLX%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T131920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDXh5MMNzIi2D1BZpzqqNhd0Tv3JYhqPnA2f1aMAvt1eAIgKNzdjL%2F17ythFhAhO0rHMHA%2FTiH6oOcP3KmNo6qRsS8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBw1WfPNcPzMybYcACrcA0zU%2FihGTnIPlmKUPCVEr8iFWUKEPoU8ua6gqtf7wzhbnPVcL5bwaIL%2BbNZUv8xqEWFO3xNovgqVFPW1fopLXLITsuAiVBtOAWij4PtHP9XOPrQniguvKsY0kbS82mOiAWmV7U83liJ%2BT9rNtsm7Jr3DXYUMTvncbwcPMFN%2F1ac1PO%2BQzoJrygoVIjznlG9u8gH1QvrAa67sCSr1occfUDr5aiFqDQyw%2Bz8HCEEN2%2Bl%2FAA7va8YEA2urw2692UPn8SxkI7saAmRKXdpDuYS6UZySb7SN4i8ni7oLCDIIgMB0zyPW1y0oGD%2B9QbZuK7ztJsz6jO9IQZUbzYO41MLYT%2F9qfajqwOO3oCsKRkrb5gqSPIPCH8JBSmFXAuBLmjES0SSy8igB5etMLrbRpOaKZZBKRnwpR%2FSO4fXDc%2BouHWSDubDdvgc7wgHSD9CUqT4LtuqiKtofZ7IsGZm8%2FNyGVh8cV0gvDvFfbqV1nP%2BiA6MoxWSgTCwv0TPYnVOUkaXed73KtfJ9GV6U3IyJIEFfD0m%2F51xMku7uKXjk14DBN%2F%2BwtuCMyBR4bV3J0OSk04Le0C%2F%2B7EeQyiqCxMfA0eUuDdKNkrVyUl9lakauktAM72pzoNyzqkG60gKk7LrRMOjIzcAGOqUBW8c5Ud0Otv3JPLkpYK341Fagat21MiHlMo65f4YvLrcB7BP0Db3jHNZwnKxp4IyPQaPv8sMaQqUM983yzRTgXDe6ocSV7P8oYEwkq%2BAs%2BoOhRUG384V4aOQg80JuamYiAoYTmx3ENqEOu3rAHPvAGUE8v7XSZjvLSc%2BB20UyC3RsvXugAcW2%2BLFRSyZMnXf6yk3Uvz9K7NV%2BJXQbp3PVR%2B8A7l6c&X-Amz-Signature=195dae06477fe4ad812ffd31dc968806ba58e4654b23df0bd8840fbe6894d5ee&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB5TJWLX%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T131920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDXh5MMNzIi2D1BZpzqqNhd0Tv3JYhqPnA2f1aMAvt1eAIgKNzdjL%2F17ythFhAhO0rHMHA%2FTiH6oOcP3KmNo6qRsS8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBw1WfPNcPzMybYcACrcA0zU%2FihGTnIPlmKUPCVEr8iFWUKEPoU8ua6gqtf7wzhbnPVcL5bwaIL%2BbNZUv8xqEWFO3xNovgqVFPW1fopLXLITsuAiVBtOAWij4PtHP9XOPrQniguvKsY0kbS82mOiAWmV7U83liJ%2BT9rNtsm7Jr3DXYUMTvncbwcPMFN%2F1ac1PO%2BQzoJrygoVIjznlG9u8gH1QvrAa67sCSr1occfUDr5aiFqDQyw%2Bz8HCEEN2%2Bl%2FAA7va8YEA2urw2692UPn8SxkI7saAmRKXdpDuYS6UZySb7SN4i8ni7oLCDIIgMB0zyPW1y0oGD%2B9QbZuK7ztJsz6jO9IQZUbzYO41MLYT%2F9qfajqwOO3oCsKRkrb5gqSPIPCH8JBSmFXAuBLmjES0SSy8igB5etMLrbRpOaKZZBKRnwpR%2FSO4fXDc%2BouHWSDubDdvgc7wgHSD9CUqT4LtuqiKtofZ7IsGZm8%2FNyGVh8cV0gvDvFfbqV1nP%2BiA6MoxWSgTCwv0TPYnVOUkaXed73KtfJ9GV6U3IyJIEFfD0m%2F51xMku7uKXjk14DBN%2F%2BwtuCMyBR4bV3J0OSk04Le0C%2F%2B7EeQyiqCxMfA0eUuDdKNkrVyUl9lakauktAM72pzoNyzqkG60gKk7LrRMOjIzcAGOqUBW8c5Ud0Otv3JPLkpYK341Fagat21MiHlMo65f4YvLrcB7BP0Db3jHNZwnKxp4IyPQaPv8sMaQqUM983yzRTgXDe6ocSV7P8oYEwkq%2BAs%2BoOhRUG384V4aOQg80JuamYiAoYTmx3ENqEOu3rAHPvAGUE8v7XSZjvLSc%2BB20UyC3RsvXugAcW2%2BLFRSyZMnXf6yk3Uvz9K7NV%2BJXQbp3PVR%2B8A7l6c&X-Amz-Signature=5a5fdf34afebade5aa300ef647f3b98044a9b627b8c5bc6aeb037898f36278e6&X-Amz-SignedHeaders=host&x-id=GetObject)
