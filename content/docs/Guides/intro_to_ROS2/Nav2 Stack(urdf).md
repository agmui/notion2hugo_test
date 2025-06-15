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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4FZYERT%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T190317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCaKSZPeK6HYTKrLlah4hhbL7xOIhJg%2ByDeZNp0A9BMDQIgPxISd0%2FKX9qLgc4UF8u7VFZDvQ5%2FHaqAIGuTX6BBAjwq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDG4UjBcQCwG5NOlyLCrcA%2FccPf8Qm2GqWcl%2B0KN%2FIE0q5aIjigBmBnFiPg43MddMR%2BtTM45cK6NDtdMlW8%2FtkqA7ZOgMtyCOxSEiu0%2BMupSeMhk7UIIXIISIjvgsFpLhE8pIRdVMuMFEfBlcDp0nvX0uzU4LFvjrYxiD6zhKp9xIaWaLquiM2fD%2BHP2H4idrWAurWnxV8Di6SgcQyuafxiKF65t9u3pK8aFfIFyLrMIDJlr0wHzTifOhegqkjzpzveFuAzV2Hfn5BTdNm9kN4Y6h%2BwpD5yIoCilf2wEu5a95kLZ5suOifslE%2FApVlcpI9WpEU0McEPSkM83qMaofSJO4XzcIVbwJeMrbbYq4YAF37%2FtvDwVbwzvWg6xiRO%2BS8Nj9o6rCkmL3NGTJuM8FxgzzqEXYA5auvf4jnyrFqq%2Fdh2UUOydqvEJNDwkrY3l%2BHMOT2gyayfXXAQrxGc6ym%2BW02Zuh2hQiEAnYO8z5Y5xc3FPj5%2FukltXmHymDQFY%2B9nXB9UlUKBdAiUwouG2CQLSrBBiopRXEsdT%2BovrPuvhVeX7hUXWMZq7u%2FeIx6Oek4PMcrXlzCH6pPMgKhKKU0QfDiemS%2BeQC%2F6D5XaG8pcHPH77ymyOVAR0c%2BuhXraMOndcAkccZw%2FdXEYzlMKenvMIGOqUBxHWrYFGiLpyg%2BYqta%2BJD2RMdXzI83BSnUxlGwl4kv%2F6ZOV%2B3qvocUHZ0Sq64HF54zbtfLFMpjWvuglKrFQg836swG56AzFECwiTkxYffSDNiQAS9QoQ5AnYlPhW6AglHvq2PSlrJTCJ%2FJUIo7ZjiEe%2FNOiBYQwZcJzFYrdMnuatQJbur%2FA6waJ3uamPhghDq%2F8AQWNOXqYVcfrVyJNXJTiTz16H5&X-Amz-Signature=064987d49527c0c2ccd66a3ec471f7963a2ee0e29519d4a0dcf6b5e9c323004e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4FZYERT%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T190317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCaKSZPeK6HYTKrLlah4hhbL7xOIhJg%2ByDeZNp0A9BMDQIgPxISd0%2FKX9qLgc4UF8u7VFZDvQ5%2FHaqAIGuTX6BBAjwq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDG4UjBcQCwG5NOlyLCrcA%2FccPf8Qm2GqWcl%2B0KN%2FIE0q5aIjigBmBnFiPg43MddMR%2BtTM45cK6NDtdMlW8%2FtkqA7ZOgMtyCOxSEiu0%2BMupSeMhk7UIIXIISIjvgsFpLhE8pIRdVMuMFEfBlcDp0nvX0uzU4LFvjrYxiD6zhKp9xIaWaLquiM2fD%2BHP2H4idrWAurWnxV8Di6SgcQyuafxiKF65t9u3pK8aFfIFyLrMIDJlr0wHzTifOhegqkjzpzveFuAzV2Hfn5BTdNm9kN4Y6h%2BwpD5yIoCilf2wEu5a95kLZ5suOifslE%2FApVlcpI9WpEU0McEPSkM83qMaofSJO4XzcIVbwJeMrbbYq4YAF37%2FtvDwVbwzvWg6xiRO%2BS8Nj9o6rCkmL3NGTJuM8FxgzzqEXYA5auvf4jnyrFqq%2Fdh2UUOydqvEJNDwkrY3l%2BHMOT2gyayfXXAQrxGc6ym%2BW02Zuh2hQiEAnYO8z5Y5xc3FPj5%2FukltXmHymDQFY%2B9nXB9UlUKBdAiUwouG2CQLSrBBiopRXEsdT%2BovrPuvhVeX7hUXWMZq7u%2FeIx6Oek4PMcrXlzCH6pPMgKhKKU0QfDiemS%2BeQC%2F6D5XaG8pcHPH77ymyOVAR0c%2BuhXraMOndcAkccZw%2FdXEYzlMKenvMIGOqUBxHWrYFGiLpyg%2BYqta%2BJD2RMdXzI83BSnUxlGwl4kv%2F6ZOV%2B3qvocUHZ0Sq64HF54zbtfLFMpjWvuglKrFQg836swG56AzFECwiTkxYffSDNiQAS9QoQ5AnYlPhW6AglHvq2PSlrJTCJ%2FJUIo7ZjiEe%2FNOiBYQwZcJzFYrdMnuatQJbur%2FA6waJ3uamPhghDq%2F8AQWNOXqYVcfrVyJNXJTiTz16H5&X-Amz-Signature=5ebfe95592f32ce4b77611fed908f62376be5effa6057884da05bdde9556abdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4FZYERT%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T190317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCaKSZPeK6HYTKrLlah4hhbL7xOIhJg%2ByDeZNp0A9BMDQIgPxISd0%2FKX9qLgc4UF8u7VFZDvQ5%2FHaqAIGuTX6BBAjwq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDG4UjBcQCwG5NOlyLCrcA%2FccPf8Qm2GqWcl%2B0KN%2FIE0q5aIjigBmBnFiPg43MddMR%2BtTM45cK6NDtdMlW8%2FtkqA7ZOgMtyCOxSEiu0%2BMupSeMhk7UIIXIISIjvgsFpLhE8pIRdVMuMFEfBlcDp0nvX0uzU4LFvjrYxiD6zhKp9xIaWaLquiM2fD%2BHP2H4idrWAurWnxV8Di6SgcQyuafxiKF65t9u3pK8aFfIFyLrMIDJlr0wHzTifOhegqkjzpzveFuAzV2Hfn5BTdNm9kN4Y6h%2BwpD5yIoCilf2wEu5a95kLZ5suOifslE%2FApVlcpI9WpEU0McEPSkM83qMaofSJO4XzcIVbwJeMrbbYq4YAF37%2FtvDwVbwzvWg6xiRO%2BS8Nj9o6rCkmL3NGTJuM8FxgzzqEXYA5auvf4jnyrFqq%2Fdh2UUOydqvEJNDwkrY3l%2BHMOT2gyayfXXAQrxGc6ym%2BW02Zuh2hQiEAnYO8z5Y5xc3FPj5%2FukltXmHymDQFY%2B9nXB9UlUKBdAiUwouG2CQLSrBBiopRXEsdT%2BovrPuvhVeX7hUXWMZq7u%2FeIx6Oek4PMcrXlzCH6pPMgKhKKU0QfDiemS%2BeQC%2F6D5XaG8pcHPH77ymyOVAR0c%2BuhXraMOndcAkccZw%2FdXEYzlMKenvMIGOqUBxHWrYFGiLpyg%2BYqta%2BJD2RMdXzI83BSnUxlGwl4kv%2F6ZOV%2B3qvocUHZ0Sq64HF54zbtfLFMpjWvuglKrFQg836swG56AzFECwiTkxYffSDNiQAS9QoQ5AnYlPhW6AglHvq2PSlrJTCJ%2FJUIo7ZjiEe%2FNOiBYQwZcJzFYrdMnuatQJbur%2FA6waJ3uamPhghDq%2F8AQWNOXqYVcfrVyJNXJTiTz16H5&X-Amz-Signature=49255a19deef2af74fedc45f5f0d3a45eb1b5ab52ad77435911177416529e311&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4FZYERT%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T190317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCaKSZPeK6HYTKrLlah4hhbL7xOIhJg%2ByDeZNp0A9BMDQIgPxISd0%2FKX9qLgc4UF8u7VFZDvQ5%2FHaqAIGuTX6BBAjwq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDG4UjBcQCwG5NOlyLCrcA%2FccPf8Qm2GqWcl%2B0KN%2FIE0q5aIjigBmBnFiPg43MddMR%2BtTM45cK6NDtdMlW8%2FtkqA7ZOgMtyCOxSEiu0%2BMupSeMhk7UIIXIISIjvgsFpLhE8pIRdVMuMFEfBlcDp0nvX0uzU4LFvjrYxiD6zhKp9xIaWaLquiM2fD%2BHP2H4idrWAurWnxV8Di6SgcQyuafxiKF65t9u3pK8aFfIFyLrMIDJlr0wHzTifOhegqkjzpzveFuAzV2Hfn5BTdNm9kN4Y6h%2BwpD5yIoCilf2wEu5a95kLZ5suOifslE%2FApVlcpI9WpEU0McEPSkM83qMaofSJO4XzcIVbwJeMrbbYq4YAF37%2FtvDwVbwzvWg6xiRO%2BS8Nj9o6rCkmL3NGTJuM8FxgzzqEXYA5auvf4jnyrFqq%2Fdh2UUOydqvEJNDwkrY3l%2BHMOT2gyayfXXAQrxGc6ym%2BW02Zuh2hQiEAnYO8z5Y5xc3FPj5%2FukltXmHymDQFY%2B9nXB9UlUKBdAiUwouG2CQLSrBBiopRXEsdT%2BovrPuvhVeX7hUXWMZq7u%2FeIx6Oek4PMcrXlzCH6pPMgKhKKU0QfDiemS%2BeQC%2F6D5XaG8pcHPH77ymyOVAR0c%2BuhXraMOndcAkccZw%2FdXEYzlMKenvMIGOqUBxHWrYFGiLpyg%2BYqta%2BJD2RMdXzI83BSnUxlGwl4kv%2F6ZOV%2B3qvocUHZ0Sq64HF54zbtfLFMpjWvuglKrFQg836swG56AzFECwiTkxYffSDNiQAS9QoQ5AnYlPhW6AglHvq2PSlrJTCJ%2FJUIo7ZjiEe%2FNOiBYQwZcJzFYrdMnuatQJbur%2FA6waJ3uamPhghDq%2F8AQWNOXqYVcfrVyJNXJTiTz16H5&X-Amz-Signature=198e068a9721237d72e0fbf632bcb32be672c9fa91cb6f4fd5f815493ae9d0ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4FZYERT%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T190317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCaKSZPeK6HYTKrLlah4hhbL7xOIhJg%2ByDeZNp0A9BMDQIgPxISd0%2FKX9qLgc4UF8u7VFZDvQ5%2FHaqAIGuTX6BBAjwq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDG4UjBcQCwG5NOlyLCrcA%2FccPf8Qm2GqWcl%2B0KN%2FIE0q5aIjigBmBnFiPg43MddMR%2BtTM45cK6NDtdMlW8%2FtkqA7ZOgMtyCOxSEiu0%2BMupSeMhk7UIIXIISIjvgsFpLhE8pIRdVMuMFEfBlcDp0nvX0uzU4LFvjrYxiD6zhKp9xIaWaLquiM2fD%2BHP2H4idrWAurWnxV8Di6SgcQyuafxiKF65t9u3pK8aFfIFyLrMIDJlr0wHzTifOhegqkjzpzveFuAzV2Hfn5BTdNm9kN4Y6h%2BwpD5yIoCilf2wEu5a95kLZ5suOifslE%2FApVlcpI9WpEU0McEPSkM83qMaofSJO4XzcIVbwJeMrbbYq4YAF37%2FtvDwVbwzvWg6xiRO%2BS8Nj9o6rCkmL3NGTJuM8FxgzzqEXYA5auvf4jnyrFqq%2Fdh2UUOydqvEJNDwkrY3l%2BHMOT2gyayfXXAQrxGc6ym%2BW02Zuh2hQiEAnYO8z5Y5xc3FPj5%2FukltXmHymDQFY%2B9nXB9UlUKBdAiUwouG2CQLSrBBiopRXEsdT%2BovrPuvhVeX7hUXWMZq7u%2FeIx6Oek4PMcrXlzCH6pPMgKhKKU0QfDiemS%2BeQC%2F6D5XaG8pcHPH77ymyOVAR0c%2BuhXraMOndcAkccZw%2FdXEYzlMKenvMIGOqUBxHWrYFGiLpyg%2BYqta%2BJD2RMdXzI83BSnUxlGwl4kv%2F6ZOV%2B3qvocUHZ0Sq64HF54zbtfLFMpjWvuglKrFQg836swG56AzFECwiTkxYffSDNiQAS9QoQ5AnYlPhW6AglHvq2PSlrJTCJ%2FJUIo7ZjiEe%2FNOiBYQwZcJzFYrdMnuatQJbur%2FA6waJ3uamPhghDq%2F8AQWNOXqYVcfrVyJNXJTiTz16H5&X-Amz-Signature=c2571568ee6c0a8644012bf490821f2ebd7a7244f9ced9f6a86d87dbd347d4d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4FZYERT%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T190317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCaKSZPeK6HYTKrLlah4hhbL7xOIhJg%2ByDeZNp0A9BMDQIgPxISd0%2FKX9qLgc4UF8u7VFZDvQ5%2FHaqAIGuTX6BBAjwq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDG4UjBcQCwG5NOlyLCrcA%2FccPf8Qm2GqWcl%2B0KN%2FIE0q5aIjigBmBnFiPg43MddMR%2BtTM45cK6NDtdMlW8%2FtkqA7ZOgMtyCOxSEiu0%2BMupSeMhk7UIIXIISIjvgsFpLhE8pIRdVMuMFEfBlcDp0nvX0uzU4LFvjrYxiD6zhKp9xIaWaLquiM2fD%2BHP2H4idrWAurWnxV8Di6SgcQyuafxiKF65t9u3pK8aFfIFyLrMIDJlr0wHzTifOhegqkjzpzveFuAzV2Hfn5BTdNm9kN4Y6h%2BwpD5yIoCilf2wEu5a95kLZ5suOifslE%2FApVlcpI9WpEU0McEPSkM83qMaofSJO4XzcIVbwJeMrbbYq4YAF37%2FtvDwVbwzvWg6xiRO%2BS8Nj9o6rCkmL3NGTJuM8FxgzzqEXYA5auvf4jnyrFqq%2Fdh2UUOydqvEJNDwkrY3l%2BHMOT2gyayfXXAQrxGc6ym%2BW02Zuh2hQiEAnYO8z5Y5xc3FPj5%2FukltXmHymDQFY%2B9nXB9UlUKBdAiUwouG2CQLSrBBiopRXEsdT%2BovrPuvhVeX7hUXWMZq7u%2FeIx6Oek4PMcrXlzCH6pPMgKhKKU0QfDiemS%2BeQC%2F6D5XaG8pcHPH77ymyOVAR0c%2BuhXraMOndcAkccZw%2FdXEYzlMKenvMIGOqUBxHWrYFGiLpyg%2BYqta%2BJD2RMdXzI83BSnUxlGwl4kv%2F6ZOV%2B3qvocUHZ0Sq64HF54zbtfLFMpjWvuglKrFQg836swG56AzFECwiTkxYffSDNiQAS9QoQ5AnYlPhW6AglHvq2PSlrJTCJ%2FJUIo7ZjiEe%2FNOiBYQwZcJzFYrdMnuatQJbur%2FA6waJ3uamPhghDq%2F8AQWNOXqYVcfrVyJNXJTiTz16H5&X-Amz-Signature=f8a3640d9c9316347fd0de901c7962017811fa4466faa1dbdab929f73a00b627&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
