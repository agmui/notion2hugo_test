---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DFXIS5R%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T160923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BrGSk7k3JGwTkTy%2BwXeL%2FYjqPOTkpu6w3aKlaV2v21AiAspjs76UBCRe1LkUKPEjL5qQfbvTUSuxqzcbmBPYUyoyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5v%2BMHrYNiN1ThZa8KtwDB2n0xj65EeN50A44TWgtNNpC1y1OtJCPO4zO9BPqXJpleiZPr1sXG3Wd7Uo6r97NaCMThy3noZFxvqqZPITMDLCyqUfNTSe%2BPCp1YwEsgP1DXfcjcKng6KzfBEPrIegPPvL0o7CJydiCT4BNE%2FfVjIcBTTJmx0TWrVf2BAuyEpFzG%2B7923tboDPeS8mQnT56iPGRC9DNo3Bsgskyg2CpbE8HfVhm5oryponSehCbwbgqLncaeen9hMYSppgMCpk1y6eZgBAwFHJLwCMnxyvbe13wWgWdAKNLlh10Nf0mogr18vsWCdV1npAx37ZTRzrCGFcG0O0Xpiz2AG4E90v424fQBA%2Bep%2FATgb6cXHLr%2B36TNwzgzbOCBAuu3h9wn6Tmugw0nEgFbCsojXpEnG8bVtEcdLJ8%2BwnUsokejF36ZebFU6%2FazKOajY0AIOn7k2zdfpCsjLTVpVLPD2d2QdPDo0OYwHbuYdkjovUglGqxkdyxswdNZGfVRwR%2FTorxs9eZJ8TbkpgmjTsd6Msnt3RUKx%2FMjqNxKMjsgHH8FSaw8hOfHATGN%2FCEU8JQbO6A620fpL0ay0FzOZGf5cO4oPuDwN6pEeAyy2qPu5OShe1CCYE6lodQHZ9TKaYTu4YwvIXpvAY6pgHe1ywX8oNIFRxB1B7i8BsOTVf3PY3HUbg%2BTQlGDhWB%2BN6F%2B0sWMLomtiGMNZvIg1sx8a7muQGTK2DUqkK5EMixlJFXwp8Kw6AlsV0cMOtLul9XgqCsuMCcJ1Xj9iTJGDjFgqsFWjzk%2FiOfSlELKe35egy%2FZHh3vb%2F3AsH5EsFoMzqeBKWolTjjOJqLh23lKfMN7R4XZU9Aprm0AaNL%2F3v5MWN2Ob%2Ft&X-Amz-Signature=d6739caf49f2dc0a1105678ba35969644f94c49d4bb3a8e054653db69bdd8d44&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DFXIS5R%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T160923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BrGSk7k3JGwTkTy%2BwXeL%2FYjqPOTkpu6w3aKlaV2v21AiAspjs76UBCRe1LkUKPEjL5qQfbvTUSuxqzcbmBPYUyoyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5v%2BMHrYNiN1ThZa8KtwDB2n0xj65EeN50A44TWgtNNpC1y1OtJCPO4zO9BPqXJpleiZPr1sXG3Wd7Uo6r97NaCMThy3noZFxvqqZPITMDLCyqUfNTSe%2BPCp1YwEsgP1DXfcjcKng6KzfBEPrIegPPvL0o7CJydiCT4BNE%2FfVjIcBTTJmx0TWrVf2BAuyEpFzG%2B7923tboDPeS8mQnT56iPGRC9DNo3Bsgskyg2CpbE8HfVhm5oryponSehCbwbgqLncaeen9hMYSppgMCpk1y6eZgBAwFHJLwCMnxyvbe13wWgWdAKNLlh10Nf0mogr18vsWCdV1npAx37ZTRzrCGFcG0O0Xpiz2AG4E90v424fQBA%2Bep%2FATgb6cXHLr%2B36TNwzgzbOCBAuu3h9wn6Tmugw0nEgFbCsojXpEnG8bVtEcdLJ8%2BwnUsokejF36ZebFU6%2FazKOajY0AIOn7k2zdfpCsjLTVpVLPD2d2QdPDo0OYwHbuYdkjovUglGqxkdyxswdNZGfVRwR%2FTorxs9eZJ8TbkpgmjTsd6Msnt3RUKx%2FMjqNxKMjsgHH8FSaw8hOfHATGN%2FCEU8JQbO6A620fpL0ay0FzOZGf5cO4oPuDwN6pEeAyy2qPu5OShe1CCYE6lodQHZ9TKaYTu4YwvIXpvAY6pgHe1ywX8oNIFRxB1B7i8BsOTVf3PY3HUbg%2BTQlGDhWB%2BN6F%2B0sWMLomtiGMNZvIg1sx8a7muQGTK2DUqkK5EMixlJFXwp8Kw6AlsV0cMOtLul9XgqCsuMCcJ1Xj9iTJGDjFgqsFWjzk%2FiOfSlELKe35egy%2FZHh3vb%2F3AsH5EsFoMzqeBKWolTjjOJqLh23lKfMN7R4XZU9Aprm0AaNL%2F3v5MWN2Ob%2Ft&X-Amz-Signature=ef3a1847373bfe70dbd0cf1b7e388dbf33ba36556f997fc8d83c3e5ce7468a5d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DFXIS5R%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T160923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BrGSk7k3JGwTkTy%2BwXeL%2FYjqPOTkpu6w3aKlaV2v21AiAspjs76UBCRe1LkUKPEjL5qQfbvTUSuxqzcbmBPYUyoyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5v%2BMHrYNiN1ThZa8KtwDB2n0xj65EeN50A44TWgtNNpC1y1OtJCPO4zO9BPqXJpleiZPr1sXG3Wd7Uo6r97NaCMThy3noZFxvqqZPITMDLCyqUfNTSe%2BPCp1YwEsgP1DXfcjcKng6KzfBEPrIegPPvL0o7CJydiCT4BNE%2FfVjIcBTTJmx0TWrVf2BAuyEpFzG%2B7923tboDPeS8mQnT56iPGRC9DNo3Bsgskyg2CpbE8HfVhm5oryponSehCbwbgqLncaeen9hMYSppgMCpk1y6eZgBAwFHJLwCMnxyvbe13wWgWdAKNLlh10Nf0mogr18vsWCdV1npAx37ZTRzrCGFcG0O0Xpiz2AG4E90v424fQBA%2Bep%2FATgb6cXHLr%2B36TNwzgzbOCBAuu3h9wn6Tmugw0nEgFbCsojXpEnG8bVtEcdLJ8%2BwnUsokejF36ZebFU6%2FazKOajY0AIOn7k2zdfpCsjLTVpVLPD2d2QdPDo0OYwHbuYdkjovUglGqxkdyxswdNZGfVRwR%2FTorxs9eZJ8TbkpgmjTsd6Msnt3RUKx%2FMjqNxKMjsgHH8FSaw8hOfHATGN%2FCEU8JQbO6A620fpL0ay0FzOZGf5cO4oPuDwN6pEeAyy2qPu5OShe1CCYE6lodQHZ9TKaYTu4YwvIXpvAY6pgHe1ywX8oNIFRxB1B7i8BsOTVf3PY3HUbg%2BTQlGDhWB%2BN6F%2B0sWMLomtiGMNZvIg1sx8a7muQGTK2DUqkK5EMixlJFXwp8Kw6AlsV0cMOtLul9XgqCsuMCcJ1Xj9iTJGDjFgqsFWjzk%2FiOfSlELKe35egy%2FZHh3vb%2F3AsH5EsFoMzqeBKWolTjjOJqLh23lKfMN7R4XZU9Aprm0AaNL%2F3v5MWN2Ob%2Ft&X-Amz-Signature=89cb15d674b8c056b2f9526b7967b78f68012c3df83783f55c315cc51452b8da&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DFXIS5R%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T160923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BrGSk7k3JGwTkTy%2BwXeL%2FYjqPOTkpu6w3aKlaV2v21AiAspjs76UBCRe1LkUKPEjL5qQfbvTUSuxqzcbmBPYUyoyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5v%2BMHrYNiN1ThZa8KtwDB2n0xj65EeN50A44TWgtNNpC1y1OtJCPO4zO9BPqXJpleiZPr1sXG3Wd7Uo6r97NaCMThy3noZFxvqqZPITMDLCyqUfNTSe%2BPCp1YwEsgP1DXfcjcKng6KzfBEPrIegPPvL0o7CJydiCT4BNE%2FfVjIcBTTJmx0TWrVf2BAuyEpFzG%2B7923tboDPeS8mQnT56iPGRC9DNo3Bsgskyg2CpbE8HfVhm5oryponSehCbwbgqLncaeen9hMYSppgMCpk1y6eZgBAwFHJLwCMnxyvbe13wWgWdAKNLlh10Nf0mogr18vsWCdV1npAx37ZTRzrCGFcG0O0Xpiz2AG4E90v424fQBA%2Bep%2FATgb6cXHLr%2B36TNwzgzbOCBAuu3h9wn6Tmugw0nEgFbCsojXpEnG8bVtEcdLJ8%2BwnUsokejF36ZebFU6%2FazKOajY0AIOn7k2zdfpCsjLTVpVLPD2d2QdPDo0OYwHbuYdkjovUglGqxkdyxswdNZGfVRwR%2FTorxs9eZJ8TbkpgmjTsd6Msnt3RUKx%2FMjqNxKMjsgHH8FSaw8hOfHATGN%2FCEU8JQbO6A620fpL0ay0FzOZGf5cO4oPuDwN6pEeAyy2qPu5OShe1CCYE6lodQHZ9TKaYTu4YwvIXpvAY6pgHe1ywX8oNIFRxB1B7i8BsOTVf3PY3HUbg%2BTQlGDhWB%2BN6F%2B0sWMLomtiGMNZvIg1sx8a7muQGTK2DUqkK5EMixlJFXwp8Kw6AlsV0cMOtLul9XgqCsuMCcJ1Xj9iTJGDjFgqsFWjzk%2FiOfSlELKe35egy%2FZHh3vb%2F3AsH5EsFoMzqeBKWolTjjOJqLh23lKfMN7R4XZU9Aprm0AaNL%2F3v5MWN2Ob%2Ft&X-Amz-Signature=39467e7e5b12e3b2556bd5e428cf122b47c76043eaf73432a832533735b2f43c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DFXIS5R%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T160923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BrGSk7k3JGwTkTy%2BwXeL%2FYjqPOTkpu6w3aKlaV2v21AiAspjs76UBCRe1LkUKPEjL5qQfbvTUSuxqzcbmBPYUyoyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5v%2BMHrYNiN1ThZa8KtwDB2n0xj65EeN50A44TWgtNNpC1y1OtJCPO4zO9BPqXJpleiZPr1sXG3Wd7Uo6r97NaCMThy3noZFxvqqZPITMDLCyqUfNTSe%2BPCp1YwEsgP1DXfcjcKng6KzfBEPrIegPPvL0o7CJydiCT4BNE%2FfVjIcBTTJmx0TWrVf2BAuyEpFzG%2B7923tboDPeS8mQnT56iPGRC9DNo3Bsgskyg2CpbE8HfVhm5oryponSehCbwbgqLncaeen9hMYSppgMCpk1y6eZgBAwFHJLwCMnxyvbe13wWgWdAKNLlh10Nf0mogr18vsWCdV1npAx37ZTRzrCGFcG0O0Xpiz2AG4E90v424fQBA%2Bep%2FATgb6cXHLr%2B36TNwzgzbOCBAuu3h9wn6Tmugw0nEgFbCsojXpEnG8bVtEcdLJ8%2BwnUsokejF36ZebFU6%2FazKOajY0AIOn7k2zdfpCsjLTVpVLPD2d2QdPDo0OYwHbuYdkjovUglGqxkdyxswdNZGfVRwR%2FTorxs9eZJ8TbkpgmjTsd6Msnt3RUKx%2FMjqNxKMjsgHH8FSaw8hOfHATGN%2FCEU8JQbO6A620fpL0ay0FzOZGf5cO4oPuDwN6pEeAyy2qPu5OShe1CCYE6lodQHZ9TKaYTu4YwvIXpvAY6pgHe1ywX8oNIFRxB1B7i8BsOTVf3PY3HUbg%2BTQlGDhWB%2BN6F%2B0sWMLomtiGMNZvIg1sx8a7muQGTK2DUqkK5EMixlJFXwp8Kw6AlsV0cMOtLul9XgqCsuMCcJ1Xj9iTJGDjFgqsFWjzk%2FiOfSlELKe35egy%2FZHh3vb%2F3AsH5EsFoMzqeBKWolTjjOJqLh23lKfMN7R4XZU9Aprm0AaNL%2F3v5MWN2Ob%2Ft&X-Amz-Signature=bff088690f189fd5a89fc9443ae679ddf6818cb257505052b34fc1dc7215c437&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DFXIS5R%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T160923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BrGSk7k3JGwTkTy%2BwXeL%2FYjqPOTkpu6w3aKlaV2v21AiAspjs76UBCRe1LkUKPEjL5qQfbvTUSuxqzcbmBPYUyoyqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5v%2BMHrYNiN1ThZa8KtwDB2n0xj65EeN50A44TWgtNNpC1y1OtJCPO4zO9BPqXJpleiZPr1sXG3Wd7Uo6r97NaCMThy3noZFxvqqZPITMDLCyqUfNTSe%2BPCp1YwEsgP1DXfcjcKng6KzfBEPrIegPPvL0o7CJydiCT4BNE%2FfVjIcBTTJmx0TWrVf2BAuyEpFzG%2B7923tboDPeS8mQnT56iPGRC9DNo3Bsgskyg2CpbE8HfVhm5oryponSehCbwbgqLncaeen9hMYSppgMCpk1y6eZgBAwFHJLwCMnxyvbe13wWgWdAKNLlh10Nf0mogr18vsWCdV1npAx37ZTRzrCGFcG0O0Xpiz2AG4E90v424fQBA%2Bep%2FATgb6cXHLr%2B36TNwzgzbOCBAuu3h9wn6Tmugw0nEgFbCsojXpEnG8bVtEcdLJ8%2BwnUsokejF36ZebFU6%2FazKOajY0AIOn7k2zdfpCsjLTVpVLPD2d2QdPDo0OYwHbuYdkjovUglGqxkdyxswdNZGfVRwR%2FTorxs9eZJ8TbkpgmjTsd6Msnt3RUKx%2FMjqNxKMjsgHH8FSaw8hOfHATGN%2FCEU8JQbO6A620fpL0ay0FzOZGf5cO4oPuDwN6pEeAyy2qPu5OShe1CCYE6lodQHZ9TKaYTu4YwvIXpvAY6pgHe1ywX8oNIFRxB1B7i8BsOTVf3PY3HUbg%2BTQlGDhWB%2BN6F%2B0sWMLomtiGMNZvIg1sx8a7muQGTK2DUqkK5EMixlJFXwp8Kw6AlsV0cMOtLul9XgqCsuMCcJ1Xj9iTJGDjFgqsFWjzk%2FiOfSlELKe35egy%2FZHh3vb%2F3AsH5EsFoMzqeBKWolTjjOJqLh23lKfMN7R4XZU9Aprm0AaNL%2F3v5MWN2Ob%2Ft&X-Amz-Signature=adb3d1a3f753649af1fa18c4c9ed10fa34036749a54979a19ab76c1d490a5bf3&X-Amz-SignedHeaders=host&x-id=GetObject)
