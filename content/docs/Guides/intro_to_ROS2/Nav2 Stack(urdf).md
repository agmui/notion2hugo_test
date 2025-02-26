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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USYGFIUH%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T170715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCzMYT49mZcnh62%2Fj8y3aTXG%2FAvc60jh6r0sOrrsdXgGwIhALzprcNxVuGxlgkS7JeFfP9Quq%2B3Z1faedxpb7G7t3KDKv8DCF0QABoMNjM3NDIzMTgzODA1IgyWtPApwhE90qerZ0cq3AN79pe4yWLWY6r6%2Fow8%2By%2F4KomjJ0xD1h8EggZ5NN7hd%2Fjt5oPrzrB%2BlivWc48I9dPsgSXyyTbFPUUVVmwz2EvXaSwSvxt02fx66Xe9JndIySAVW26Q2wm6jiBqQUuH%2Fmx5tQWCz0TTLgc3vZ7r4gIUPFIeBSBuKY6zlGheGdePHhoKhtWHCnn%2F%2BM7tqiKD0Bl5yJyKxkefBHYlhkmoe5WMPmryJJfGdkShtRVLKJw4gVmGlMsJfR%2Fy8Wu%2FbOkq6MI3KsbDNg9kMPi%2FoSJxJlwBwqhKfbH37ZEdsLlrwBqh7u%2Fuhj%2BldbN%2FO8dQEOR3WqJwRfMDYivTDcSjGenMLhYiAwzatY3hM20gmTCPoCSXpISCzExZMHSPFvB4Bf4X9XAla8ILlE98Srbm%2Brb5KG4FsJvM5M3Wkh1TQc5mSiwvHnR0LReHNg5dE10MYwcQAhexodYmAfxzsisIsb5TlIW5cxjICrg%2FHj6%2FZjl4Otzdmo6OAwvU8VbdONCxB%2BgGwALxcDZcwgilbl0T%2Fi%2BCaPiFODsxX7x5lkf4%2B6%2B7hF0Rsg1UfzJWlezeyQtJP1T2mp3QFTapMwfdIGPWwOWKFeWb96T3niIW91vObEzt5Jwe2rL77vuCQUPbeqQlGjC6iPy9BjqkAe6by6RwIQvSQAv5uGKX34R4GUoknKE7Cug8zJW1zlQdDL6DWosn7CHsU6qj%2B%2BdZQRV7ZcddO8L1%2FCtmNsJSczYSpoZiTenU6fc2JOPPBUfmv9JjnPT0ICt1UwOHLdR8iB%2Bdk8FELI2b3HIDfv5Se4%2FplaW5TGBjDWacuV2oqXjkByvH2ZdVv9LSYSK7B8nOWXlrtLlTBCWHAUNO%2BAGqFxkoHeCN&X-Amz-Signature=9a959538c4ef3580d50afa163ae2cac0982c7553f55ad0136f622066b74800a9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USYGFIUH%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T170715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCzMYT49mZcnh62%2Fj8y3aTXG%2FAvc60jh6r0sOrrsdXgGwIhALzprcNxVuGxlgkS7JeFfP9Quq%2B3Z1faedxpb7G7t3KDKv8DCF0QABoMNjM3NDIzMTgzODA1IgyWtPApwhE90qerZ0cq3AN79pe4yWLWY6r6%2Fow8%2By%2F4KomjJ0xD1h8EggZ5NN7hd%2Fjt5oPrzrB%2BlivWc48I9dPsgSXyyTbFPUUVVmwz2EvXaSwSvxt02fx66Xe9JndIySAVW26Q2wm6jiBqQUuH%2Fmx5tQWCz0TTLgc3vZ7r4gIUPFIeBSBuKY6zlGheGdePHhoKhtWHCnn%2F%2BM7tqiKD0Bl5yJyKxkefBHYlhkmoe5WMPmryJJfGdkShtRVLKJw4gVmGlMsJfR%2Fy8Wu%2FbOkq6MI3KsbDNg9kMPi%2FoSJxJlwBwqhKfbH37ZEdsLlrwBqh7u%2Fuhj%2BldbN%2FO8dQEOR3WqJwRfMDYivTDcSjGenMLhYiAwzatY3hM20gmTCPoCSXpISCzExZMHSPFvB4Bf4X9XAla8ILlE98Srbm%2Brb5KG4FsJvM5M3Wkh1TQc5mSiwvHnR0LReHNg5dE10MYwcQAhexodYmAfxzsisIsb5TlIW5cxjICrg%2FHj6%2FZjl4Otzdmo6OAwvU8VbdONCxB%2BgGwALxcDZcwgilbl0T%2Fi%2BCaPiFODsxX7x5lkf4%2B6%2B7hF0Rsg1UfzJWlezeyQtJP1T2mp3QFTapMwfdIGPWwOWKFeWb96T3niIW91vObEzt5Jwe2rL77vuCQUPbeqQlGjC6iPy9BjqkAe6by6RwIQvSQAv5uGKX34R4GUoknKE7Cug8zJW1zlQdDL6DWosn7CHsU6qj%2B%2BdZQRV7ZcddO8L1%2FCtmNsJSczYSpoZiTenU6fc2JOPPBUfmv9JjnPT0ICt1UwOHLdR8iB%2Bdk8FELI2b3HIDfv5Se4%2FplaW5TGBjDWacuV2oqXjkByvH2ZdVv9LSYSK7B8nOWXlrtLlTBCWHAUNO%2BAGqFxkoHeCN&X-Amz-Signature=5a41151581271061034904b26082f80a5441f7aad10bc8c1d2618f9d97325ac9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USYGFIUH%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T170715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCzMYT49mZcnh62%2Fj8y3aTXG%2FAvc60jh6r0sOrrsdXgGwIhALzprcNxVuGxlgkS7JeFfP9Quq%2B3Z1faedxpb7G7t3KDKv8DCF0QABoMNjM3NDIzMTgzODA1IgyWtPApwhE90qerZ0cq3AN79pe4yWLWY6r6%2Fow8%2By%2F4KomjJ0xD1h8EggZ5NN7hd%2Fjt5oPrzrB%2BlivWc48I9dPsgSXyyTbFPUUVVmwz2EvXaSwSvxt02fx66Xe9JndIySAVW26Q2wm6jiBqQUuH%2Fmx5tQWCz0TTLgc3vZ7r4gIUPFIeBSBuKY6zlGheGdePHhoKhtWHCnn%2F%2BM7tqiKD0Bl5yJyKxkefBHYlhkmoe5WMPmryJJfGdkShtRVLKJw4gVmGlMsJfR%2Fy8Wu%2FbOkq6MI3KsbDNg9kMPi%2FoSJxJlwBwqhKfbH37ZEdsLlrwBqh7u%2Fuhj%2BldbN%2FO8dQEOR3WqJwRfMDYivTDcSjGenMLhYiAwzatY3hM20gmTCPoCSXpISCzExZMHSPFvB4Bf4X9XAla8ILlE98Srbm%2Brb5KG4FsJvM5M3Wkh1TQc5mSiwvHnR0LReHNg5dE10MYwcQAhexodYmAfxzsisIsb5TlIW5cxjICrg%2FHj6%2FZjl4Otzdmo6OAwvU8VbdONCxB%2BgGwALxcDZcwgilbl0T%2Fi%2BCaPiFODsxX7x5lkf4%2B6%2B7hF0Rsg1UfzJWlezeyQtJP1T2mp3QFTapMwfdIGPWwOWKFeWb96T3niIW91vObEzt5Jwe2rL77vuCQUPbeqQlGjC6iPy9BjqkAe6by6RwIQvSQAv5uGKX34R4GUoknKE7Cug8zJW1zlQdDL6DWosn7CHsU6qj%2B%2BdZQRV7ZcddO8L1%2FCtmNsJSczYSpoZiTenU6fc2JOPPBUfmv9JjnPT0ICt1UwOHLdR8iB%2Bdk8FELI2b3HIDfv5Se4%2FplaW5TGBjDWacuV2oqXjkByvH2ZdVv9LSYSK7B8nOWXlrtLlTBCWHAUNO%2BAGqFxkoHeCN&X-Amz-Signature=b5c3d5846da5027b75b4ddd94d63860d915e156565e4c5942199f3c3bbbcbd75&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USYGFIUH%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T170715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCzMYT49mZcnh62%2Fj8y3aTXG%2FAvc60jh6r0sOrrsdXgGwIhALzprcNxVuGxlgkS7JeFfP9Quq%2B3Z1faedxpb7G7t3KDKv8DCF0QABoMNjM3NDIzMTgzODA1IgyWtPApwhE90qerZ0cq3AN79pe4yWLWY6r6%2Fow8%2By%2F4KomjJ0xD1h8EggZ5NN7hd%2Fjt5oPrzrB%2BlivWc48I9dPsgSXyyTbFPUUVVmwz2EvXaSwSvxt02fx66Xe9JndIySAVW26Q2wm6jiBqQUuH%2Fmx5tQWCz0TTLgc3vZ7r4gIUPFIeBSBuKY6zlGheGdePHhoKhtWHCnn%2F%2BM7tqiKD0Bl5yJyKxkefBHYlhkmoe5WMPmryJJfGdkShtRVLKJw4gVmGlMsJfR%2Fy8Wu%2FbOkq6MI3KsbDNg9kMPi%2FoSJxJlwBwqhKfbH37ZEdsLlrwBqh7u%2Fuhj%2BldbN%2FO8dQEOR3WqJwRfMDYivTDcSjGenMLhYiAwzatY3hM20gmTCPoCSXpISCzExZMHSPFvB4Bf4X9XAla8ILlE98Srbm%2Brb5KG4FsJvM5M3Wkh1TQc5mSiwvHnR0LReHNg5dE10MYwcQAhexodYmAfxzsisIsb5TlIW5cxjICrg%2FHj6%2FZjl4Otzdmo6OAwvU8VbdONCxB%2BgGwALxcDZcwgilbl0T%2Fi%2BCaPiFODsxX7x5lkf4%2B6%2B7hF0Rsg1UfzJWlezeyQtJP1T2mp3QFTapMwfdIGPWwOWKFeWb96T3niIW91vObEzt5Jwe2rL77vuCQUPbeqQlGjC6iPy9BjqkAe6by6RwIQvSQAv5uGKX34R4GUoknKE7Cug8zJW1zlQdDL6DWosn7CHsU6qj%2B%2BdZQRV7ZcddO8L1%2FCtmNsJSczYSpoZiTenU6fc2JOPPBUfmv9JjnPT0ICt1UwOHLdR8iB%2Bdk8FELI2b3HIDfv5Se4%2FplaW5TGBjDWacuV2oqXjkByvH2ZdVv9LSYSK7B8nOWXlrtLlTBCWHAUNO%2BAGqFxkoHeCN&X-Amz-Signature=b8e92cda6dd272f30037c6ce0afc68ac9719a22a6e1257b19c472f114e354616&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USYGFIUH%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T170715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCzMYT49mZcnh62%2Fj8y3aTXG%2FAvc60jh6r0sOrrsdXgGwIhALzprcNxVuGxlgkS7JeFfP9Quq%2B3Z1faedxpb7G7t3KDKv8DCF0QABoMNjM3NDIzMTgzODA1IgyWtPApwhE90qerZ0cq3AN79pe4yWLWY6r6%2Fow8%2By%2F4KomjJ0xD1h8EggZ5NN7hd%2Fjt5oPrzrB%2BlivWc48I9dPsgSXyyTbFPUUVVmwz2EvXaSwSvxt02fx66Xe9JndIySAVW26Q2wm6jiBqQUuH%2Fmx5tQWCz0TTLgc3vZ7r4gIUPFIeBSBuKY6zlGheGdePHhoKhtWHCnn%2F%2BM7tqiKD0Bl5yJyKxkefBHYlhkmoe5WMPmryJJfGdkShtRVLKJw4gVmGlMsJfR%2Fy8Wu%2FbOkq6MI3KsbDNg9kMPi%2FoSJxJlwBwqhKfbH37ZEdsLlrwBqh7u%2Fuhj%2BldbN%2FO8dQEOR3WqJwRfMDYivTDcSjGenMLhYiAwzatY3hM20gmTCPoCSXpISCzExZMHSPFvB4Bf4X9XAla8ILlE98Srbm%2Brb5KG4FsJvM5M3Wkh1TQc5mSiwvHnR0LReHNg5dE10MYwcQAhexodYmAfxzsisIsb5TlIW5cxjICrg%2FHj6%2FZjl4Otzdmo6OAwvU8VbdONCxB%2BgGwALxcDZcwgilbl0T%2Fi%2BCaPiFODsxX7x5lkf4%2B6%2B7hF0Rsg1UfzJWlezeyQtJP1T2mp3QFTapMwfdIGPWwOWKFeWb96T3niIW91vObEzt5Jwe2rL77vuCQUPbeqQlGjC6iPy9BjqkAe6by6RwIQvSQAv5uGKX34R4GUoknKE7Cug8zJW1zlQdDL6DWosn7CHsU6qj%2B%2BdZQRV7ZcddO8L1%2FCtmNsJSczYSpoZiTenU6fc2JOPPBUfmv9JjnPT0ICt1UwOHLdR8iB%2Bdk8FELI2b3HIDfv5Se4%2FplaW5TGBjDWacuV2oqXjkByvH2ZdVv9LSYSK7B8nOWXlrtLlTBCWHAUNO%2BAGqFxkoHeCN&X-Amz-Signature=d00aa7e87628c2e0ff5aed1d5a5542dc8bcb8402109a82e3288db19274036bc7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USYGFIUH%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T170715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCzMYT49mZcnh62%2Fj8y3aTXG%2FAvc60jh6r0sOrrsdXgGwIhALzprcNxVuGxlgkS7JeFfP9Quq%2B3Z1faedxpb7G7t3KDKv8DCF0QABoMNjM3NDIzMTgzODA1IgyWtPApwhE90qerZ0cq3AN79pe4yWLWY6r6%2Fow8%2By%2F4KomjJ0xD1h8EggZ5NN7hd%2Fjt5oPrzrB%2BlivWc48I9dPsgSXyyTbFPUUVVmwz2EvXaSwSvxt02fx66Xe9JndIySAVW26Q2wm6jiBqQUuH%2Fmx5tQWCz0TTLgc3vZ7r4gIUPFIeBSBuKY6zlGheGdePHhoKhtWHCnn%2F%2BM7tqiKD0Bl5yJyKxkefBHYlhkmoe5WMPmryJJfGdkShtRVLKJw4gVmGlMsJfR%2Fy8Wu%2FbOkq6MI3KsbDNg9kMPi%2FoSJxJlwBwqhKfbH37ZEdsLlrwBqh7u%2Fuhj%2BldbN%2FO8dQEOR3WqJwRfMDYivTDcSjGenMLhYiAwzatY3hM20gmTCPoCSXpISCzExZMHSPFvB4Bf4X9XAla8ILlE98Srbm%2Brb5KG4FsJvM5M3Wkh1TQc5mSiwvHnR0LReHNg5dE10MYwcQAhexodYmAfxzsisIsb5TlIW5cxjICrg%2FHj6%2FZjl4Otzdmo6OAwvU8VbdONCxB%2BgGwALxcDZcwgilbl0T%2Fi%2BCaPiFODsxX7x5lkf4%2B6%2B7hF0Rsg1UfzJWlezeyQtJP1T2mp3QFTapMwfdIGPWwOWKFeWb96T3niIW91vObEzt5Jwe2rL77vuCQUPbeqQlGjC6iPy9BjqkAe6by6RwIQvSQAv5uGKX34R4GUoknKE7Cug8zJW1zlQdDL6DWosn7CHsU6qj%2B%2BdZQRV7ZcddO8L1%2FCtmNsJSczYSpoZiTenU6fc2JOPPBUfmv9JjnPT0ICt1UwOHLdR8iB%2Bdk8FELI2b3HIDfv5Se4%2FplaW5TGBjDWacuV2oqXjkByvH2ZdVv9LSYSK7B8nOWXlrtLlTBCWHAUNO%2BAGqFxkoHeCN&X-Amz-Signature=64f8cbbaeda1f34e9ff2300573c3fb373b12085cc8e886860d90511363bee78d&X-Amz-SignedHeaders=host&x-id=GetObject)
