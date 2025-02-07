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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2NKJLIX%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQD%2BwZA1TLEj8LBxER32xCDqiF2A0at7jtte4xagW1fO2gIhAPerHoF7%2FXttbE28YBw1%2FwfKPwXKzUI4GDM99IDvg2NvKv8DCHEQABoMNjM3NDIzMTgzODA1IgwQzPvp4G3Z8YfYN1gq3APNoy367xqed8VnTPwiZNUMtap676y0BmP0a3LyUXsqZI%2BYsWO97BYbq8Zvip04PeSH5P3niEy6RwlFIQBta6DX6nn6kGvoe7DTAqMiIKxE1VwRcuD4NAktaW80oltoKewl2zeRQX1e0sr0NzBzCHDPVh%2F%2BucA7FmrWUWZ4nbq38%2FsnZRRUZeIGm%2Fr1fOQyvRBDhimAuU%2FVBMXiTQDHQ3u3chAl0mAjbgnIGLfK3Ko74duXZkYFaXYR9LGs%2B19k0RVIhY8OEk06WWIeA2edOYy2TIBYdEFSgT4kKcx%2F%2F9c%2B8TA%2F10%2Fclo33Nfl2jiTxDxd83JkoN%2FBs7aNlfBb4jyrqyObzWaAuPhBoJMpucymlkVbV2TOfiX7%2BThoxuL%2B5P3KP%2B8jahs5Aajrkwc6jEaXUmfcANWrk2LXi6VBiHsz4UYG56il0WJv9o9wGc6ADuvRDISonKa9Uh5kyhz6WcP41yUQCRGHHPPjaHtdxjqMfbgPcEmH49P227AkyqDAwrSnQPBchB69OOe6LAbXLLGJYwaMorwmFFr%2BlVW%2BwG9TtCKTujxeqq3655IqCS2IwSpCgVNivzqgVHkCWB%2FBLBueFkTVYY73ve1XuwJM%2BGxE8phIiV2XwF8v5qgRhDzD6%2B5a9BjqkAVswwyo4Esw3dI0eoEFQDp1ibY%2BNsXq8IfArD5BshSKdejWZUAooT8Ev9NYw5CmTx7c7c76biap1jtz44XT4by6spCWSrvmejjpaZMUZEmMwRtEgFoob0vG8x04sHb9UmEwY9SrytL2dVcfUKedKLd6dqd%2F70JOtkt%2BFsl5EI8DL%2BwAXhmlRmrIGM%2FaONiHoYAe8pMQI8OY%2FyLTehnF3arVRB%2Bir&X-Amz-Signature=8ec609f3fcc625d01d666e76d0f1faa221f9832d8f9854c3001a1e1c85b2ab4e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2NKJLIX%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQD%2BwZA1TLEj8LBxER32xCDqiF2A0at7jtte4xagW1fO2gIhAPerHoF7%2FXttbE28YBw1%2FwfKPwXKzUI4GDM99IDvg2NvKv8DCHEQABoMNjM3NDIzMTgzODA1IgwQzPvp4G3Z8YfYN1gq3APNoy367xqed8VnTPwiZNUMtap676y0BmP0a3LyUXsqZI%2BYsWO97BYbq8Zvip04PeSH5P3niEy6RwlFIQBta6DX6nn6kGvoe7DTAqMiIKxE1VwRcuD4NAktaW80oltoKewl2zeRQX1e0sr0NzBzCHDPVh%2F%2BucA7FmrWUWZ4nbq38%2FsnZRRUZeIGm%2Fr1fOQyvRBDhimAuU%2FVBMXiTQDHQ3u3chAl0mAjbgnIGLfK3Ko74duXZkYFaXYR9LGs%2B19k0RVIhY8OEk06WWIeA2edOYy2TIBYdEFSgT4kKcx%2F%2F9c%2B8TA%2F10%2Fclo33Nfl2jiTxDxd83JkoN%2FBs7aNlfBb4jyrqyObzWaAuPhBoJMpucymlkVbV2TOfiX7%2BThoxuL%2B5P3KP%2B8jahs5Aajrkwc6jEaXUmfcANWrk2LXi6VBiHsz4UYG56il0WJv9o9wGc6ADuvRDISonKa9Uh5kyhz6WcP41yUQCRGHHPPjaHtdxjqMfbgPcEmH49P227AkyqDAwrSnQPBchB69OOe6LAbXLLGJYwaMorwmFFr%2BlVW%2BwG9TtCKTujxeqq3655IqCS2IwSpCgVNivzqgVHkCWB%2FBLBueFkTVYY73ve1XuwJM%2BGxE8phIiV2XwF8v5qgRhDzD6%2B5a9BjqkAVswwyo4Esw3dI0eoEFQDp1ibY%2BNsXq8IfArD5BshSKdejWZUAooT8Ev9NYw5CmTx7c7c76biap1jtz44XT4by6spCWSrvmejjpaZMUZEmMwRtEgFoob0vG8x04sHb9UmEwY9SrytL2dVcfUKedKLd6dqd%2F70JOtkt%2BFsl5EI8DL%2BwAXhmlRmrIGM%2FaONiHoYAe8pMQI8OY%2FyLTehnF3arVRB%2Bir&X-Amz-Signature=89444efc2a14b7d238e8bc2e42a01a0c8eb09c252ee91b40768149897e7560fe&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2NKJLIX%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQD%2BwZA1TLEj8LBxER32xCDqiF2A0at7jtte4xagW1fO2gIhAPerHoF7%2FXttbE28YBw1%2FwfKPwXKzUI4GDM99IDvg2NvKv8DCHEQABoMNjM3NDIzMTgzODA1IgwQzPvp4G3Z8YfYN1gq3APNoy367xqed8VnTPwiZNUMtap676y0BmP0a3LyUXsqZI%2BYsWO97BYbq8Zvip04PeSH5P3niEy6RwlFIQBta6DX6nn6kGvoe7DTAqMiIKxE1VwRcuD4NAktaW80oltoKewl2zeRQX1e0sr0NzBzCHDPVh%2F%2BucA7FmrWUWZ4nbq38%2FsnZRRUZeIGm%2Fr1fOQyvRBDhimAuU%2FVBMXiTQDHQ3u3chAl0mAjbgnIGLfK3Ko74duXZkYFaXYR9LGs%2B19k0RVIhY8OEk06WWIeA2edOYy2TIBYdEFSgT4kKcx%2F%2F9c%2B8TA%2F10%2Fclo33Nfl2jiTxDxd83JkoN%2FBs7aNlfBb4jyrqyObzWaAuPhBoJMpucymlkVbV2TOfiX7%2BThoxuL%2B5P3KP%2B8jahs5Aajrkwc6jEaXUmfcANWrk2LXi6VBiHsz4UYG56il0WJv9o9wGc6ADuvRDISonKa9Uh5kyhz6WcP41yUQCRGHHPPjaHtdxjqMfbgPcEmH49P227AkyqDAwrSnQPBchB69OOe6LAbXLLGJYwaMorwmFFr%2BlVW%2BwG9TtCKTujxeqq3655IqCS2IwSpCgVNivzqgVHkCWB%2FBLBueFkTVYY73ve1XuwJM%2BGxE8phIiV2XwF8v5qgRhDzD6%2B5a9BjqkAVswwyo4Esw3dI0eoEFQDp1ibY%2BNsXq8IfArD5BshSKdejWZUAooT8Ev9NYw5CmTx7c7c76biap1jtz44XT4by6spCWSrvmejjpaZMUZEmMwRtEgFoob0vG8x04sHb9UmEwY9SrytL2dVcfUKedKLd6dqd%2F70JOtkt%2BFsl5EI8DL%2BwAXhmlRmrIGM%2FaONiHoYAe8pMQI8OY%2FyLTehnF3arVRB%2Bir&X-Amz-Signature=1a2f701cf07573d5ae58bf48d5b66f891482cc9e0fe2d9dd2e8be1b9a3c62955&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2NKJLIX%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQD%2BwZA1TLEj8LBxER32xCDqiF2A0at7jtte4xagW1fO2gIhAPerHoF7%2FXttbE28YBw1%2FwfKPwXKzUI4GDM99IDvg2NvKv8DCHEQABoMNjM3NDIzMTgzODA1IgwQzPvp4G3Z8YfYN1gq3APNoy367xqed8VnTPwiZNUMtap676y0BmP0a3LyUXsqZI%2BYsWO97BYbq8Zvip04PeSH5P3niEy6RwlFIQBta6DX6nn6kGvoe7DTAqMiIKxE1VwRcuD4NAktaW80oltoKewl2zeRQX1e0sr0NzBzCHDPVh%2F%2BucA7FmrWUWZ4nbq38%2FsnZRRUZeIGm%2Fr1fOQyvRBDhimAuU%2FVBMXiTQDHQ3u3chAl0mAjbgnIGLfK3Ko74duXZkYFaXYR9LGs%2B19k0RVIhY8OEk06WWIeA2edOYy2TIBYdEFSgT4kKcx%2F%2F9c%2B8TA%2F10%2Fclo33Nfl2jiTxDxd83JkoN%2FBs7aNlfBb4jyrqyObzWaAuPhBoJMpucymlkVbV2TOfiX7%2BThoxuL%2B5P3KP%2B8jahs5Aajrkwc6jEaXUmfcANWrk2LXi6VBiHsz4UYG56il0WJv9o9wGc6ADuvRDISonKa9Uh5kyhz6WcP41yUQCRGHHPPjaHtdxjqMfbgPcEmH49P227AkyqDAwrSnQPBchB69OOe6LAbXLLGJYwaMorwmFFr%2BlVW%2BwG9TtCKTujxeqq3655IqCS2IwSpCgVNivzqgVHkCWB%2FBLBueFkTVYY73ve1XuwJM%2BGxE8phIiV2XwF8v5qgRhDzD6%2B5a9BjqkAVswwyo4Esw3dI0eoEFQDp1ibY%2BNsXq8IfArD5BshSKdejWZUAooT8Ev9NYw5CmTx7c7c76biap1jtz44XT4by6spCWSrvmejjpaZMUZEmMwRtEgFoob0vG8x04sHb9UmEwY9SrytL2dVcfUKedKLd6dqd%2F70JOtkt%2BFsl5EI8DL%2BwAXhmlRmrIGM%2FaONiHoYAe8pMQI8OY%2FyLTehnF3arVRB%2Bir&X-Amz-Signature=64cfa57cc2ac7c06455779c3abfd0605aae76c3decb9f4cf1b51f3864d79bc52&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2NKJLIX%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQD%2BwZA1TLEj8LBxER32xCDqiF2A0at7jtte4xagW1fO2gIhAPerHoF7%2FXttbE28YBw1%2FwfKPwXKzUI4GDM99IDvg2NvKv8DCHEQABoMNjM3NDIzMTgzODA1IgwQzPvp4G3Z8YfYN1gq3APNoy367xqed8VnTPwiZNUMtap676y0BmP0a3LyUXsqZI%2BYsWO97BYbq8Zvip04PeSH5P3niEy6RwlFIQBta6DX6nn6kGvoe7DTAqMiIKxE1VwRcuD4NAktaW80oltoKewl2zeRQX1e0sr0NzBzCHDPVh%2F%2BucA7FmrWUWZ4nbq38%2FsnZRRUZeIGm%2Fr1fOQyvRBDhimAuU%2FVBMXiTQDHQ3u3chAl0mAjbgnIGLfK3Ko74duXZkYFaXYR9LGs%2B19k0RVIhY8OEk06WWIeA2edOYy2TIBYdEFSgT4kKcx%2F%2F9c%2B8TA%2F10%2Fclo33Nfl2jiTxDxd83JkoN%2FBs7aNlfBb4jyrqyObzWaAuPhBoJMpucymlkVbV2TOfiX7%2BThoxuL%2B5P3KP%2B8jahs5Aajrkwc6jEaXUmfcANWrk2LXi6VBiHsz4UYG56il0WJv9o9wGc6ADuvRDISonKa9Uh5kyhz6WcP41yUQCRGHHPPjaHtdxjqMfbgPcEmH49P227AkyqDAwrSnQPBchB69OOe6LAbXLLGJYwaMorwmFFr%2BlVW%2BwG9TtCKTujxeqq3655IqCS2IwSpCgVNivzqgVHkCWB%2FBLBueFkTVYY73ve1XuwJM%2BGxE8phIiV2XwF8v5qgRhDzD6%2B5a9BjqkAVswwyo4Esw3dI0eoEFQDp1ibY%2BNsXq8IfArD5BshSKdejWZUAooT8Ev9NYw5CmTx7c7c76biap1jtz44XT4by6spCWSrvmejjpaZMUZEmMwRtEgFoob0vG8x04sHb9UmEwY9SrytL2dVcfUKedKLd6dqd%2F70JOtkt%2BFsl5EI8DL%2BwAXhmlRmrIGM%2FaONiHoYAe8pMQI8OY%2FyLTehnF3arVRB%2Bir&X-Amz-Signature=50bf1c2304eea49aa96976353e35f661dca738e788bb93225d0889e1ac31376c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2NKJLIX%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQD%2BwZA1TLEj8LBxER32xCDqiF2A0at7jtte4xagW1fO2gIhAPerHoF7%2FXttbE28YBw1%2FwfKPwXKzUI4GDM99IDvg2NvKv8DCHEQABoMNjM3NDIzMTgzODA1IgwQzPvp4G3Z8YfYN1gq3APNoy367xqed8VnTPwiZNUMtap676y0BmP0a3LyUXsqZI%2BYsWO97BYbq8Zvip04PeSH5P3niEy6RwlFIQBta6DX6nn6kGvoe7DTAqMiIKxE1VwRcuD4NAktaW80oltoKewl2zeRQX1e0sr0NzBzCHDPVh%2F%2BucA7FmrWUWZ4nbq38%2FsnZRRUZeIGm%2Fr1fOQyvRBDhimAuU%2FVBMXiTQDHQ3u3chAl0mAjbgnIGLfK3Ko74duXZkYFaXYR9LGs%2B19k0RVIhY8OEk06WWIeA2edOYy2TIBYdEFSgT4kKcx%2F%2F9c%2B8TA%2F10%2Fclo33Nfl2jiTxDxd83JkoN%2FBs7aNlfBb4jyrqyObzWaAuPhBoJMpucymlkVbV2TOfiX7%2BThoxuL%2B5P3KP%2B8jahs5Aajrkwc6jEaXUmfcANWrk2LXi6VBiHsz4UYG56il0WJv9o9wGc6ADuvRDISonKa9Uh5kyhz6WcP41yUQCRGHHPPjaHtdxjqMfbgPcEmH49P227AkyqDAwrSnQPBchB69OOe6LAbXLLGJYwaMorwmFFr%2BlVW%2BwG9TtCKTujxeqq3655IqCS2IwSpCgVNivzqgVHkCWB%2FBLBueFkTVYY73ve1XuwJM%2BGxE8phIiV2XwF8v5qgRhDzD6%2B5a9BjqkAVswwyo4Esw3dI0eoEFQDp1ibY%2BNsXq8IfArD5BshSKdejWZUAooT8Ev9NYw5CmTx7c7c76biap1jtz44XT4by6spCWSrvmejjpaZMUZEmMwRtEgFoob0vG8x04sHb9UmEwY9SrytL2dVcfUKedKLd6dqd%2F70JOtkt%2BFsl5EI8DL%2BwAXhmlRmrIGM%2FaONiHoYAe8pMQI8OY%2FyLTehnF3arVRB%2Bir&X-Amz-Signature=a8941e3c6638a3ca4f46ad552f1b17d254fa29dc374a947e6127dd350b6c16b5&X-Amz-SignedHeaders=host&x-id=GetObject)
