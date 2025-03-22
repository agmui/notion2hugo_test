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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFI4NUSW%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T150358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCqAZUMPLGvE33eo8D5f0gAHDKV%2Fd3gY9LI8DXTkdcQ%2FAIhAPTSLTpFiVvCTkOGfpE0mTN%2FQz%2BB%2Bbna0Lfgzib6wWsKKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCQDjHBIi6%2Fkf28kYq3AOD5H4IrkxxY60JjF9DUkKyqBjTT%2FHfeq3DZDSajG8WocWyArtd%2Fn%2BY8OJy%2FcMUGUWb19oMnE8va0Lhp6T%2FQTAhiVe4op193imR%2FXq1OyyxWWYTzTv0HBC4Xd28b1J2a2bQrAxuSgp39PkUdLWwOoZ9mECHqvsb5UowLcrBex6cEzbrEfBSg%2FM8fRVl3sMET8AVS9RJPYyEH%2Bm6sTmRvvU2tZg2%2BGe2hHWClDNY0Jkg4SAVKNsAWUejAikSdCHpkPoTVkICWwoaZEK2a3NpdaU2%2BgXgEQKZLsDJogsG3iIi%2BCGlQzx1bLT6XqHT%2FrY4ZTkO%2FHJPXmRIh6D9qswFSfR487C5kznrUEK4%2B4IY%2F3o18lwMlH8khdqrCoPgdw9f0VdFVb3tGm5jV%2FT%2FhG6GwRXi18IlmofnnAbce5%2F7QL44xLODpvGFkiYh2AS9NRgKFhwy7jXik08Xm3VYbfdXuFKgldMQsu8akxz23%2BO4wMYoIrdzQ%2B9bwdWRgH3Ybi8PMd6hjjw%2F4jqr2Rdq48%2BuBgq5k3%2F4iZg7OMecsgaGu9OrEP23%2BKjpqOXs0H2j2WjaiJKOdeXgeBg9Jt%2Bv3buHMiEq7kP6bq%2BkCM4ss%2F4KBpn8WWXhsWzQUMmE3sTxzTCF9%2Fq%2BBjqkAfhSlCPr9vh%2FA3J3wTqhJD3XYCTwHNekfL5Xd11dMluC%2FaOOr%2BMyz%2FGPpHYZaFweNKuQZF2bBXlyM51t4fcAOalyMnSnCHt6r9TCZbkx%2F2%2Bpy2gJ1O%2FmMTQ0EWFk51FSSViKolGnT4qnk1q3GjaX3fEHyOUu%2BXStIBBknhKXuvWSbmh%2BKpBybPgrbD3CTevfv1oES4XWxn4OhbsfegXRX%2B2x92QH&X-Amz-Signature=096de9ae6967c404fce95ce13b36b2308fb8615533f6b331463c04aa0ecca379&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFI4NUSW%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T150358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCqAZUMPLGvE33eo8D5f0gAHDKV%2Fd3gY9LI8DXTkdcQ%2FAIhAPTSLTpFiVvCTkOGfpE0mTN%2FQz%2BB%2Bbna0Lfgzib6wWsKKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCQDjHBIi6%2Fkf28kYq3AOD5H4IrkxxY60JjF9DUkKyqBjTT%2FHfeq3DZDSajG8WocWyArtd%2Fn%2BY8OJy%2FcMUGUWb19oMnE8va0Lhp6T%2FQTAhiVe4op193imR%2FXq1OyyxWWYTzTv0HBC4Xd28b1J2a2bQrAxuSgp39PkUdLWwOoZ9mECHqvsb5UowLcrBex6cEzbrEfBSg%2FM8fRVl3sMET8AVS9RJPYyEH%2Bm6sTmRvvU2tZg2%2BGe2hHWClDNY0Jkg4SAVKNsAWUejAikSdCHpkPoTVkICWwoaZEK2a3NpdaU2%2BgXgEQKZLsDJogsG3iIi%2BCGlQzx1bLT6XqHT%2FrY4ZTkO%2FHJPXmRIh6D9qswFSfR487C5kznrUEK4%2B4IY%2F3o18lwMlH8khdqrCoPgdw9f0VdFVb3tGm5jV%2FT%2FhG6GwRXi18IlmofnnAbce5%2F7QL44xLODpvGFkiYh2AS9NRgKFhwy7jXik08Xm3VYbfdXuFKgldMQsu8akxz23%2BO4wMYoIrdzQ%2B9bwdWRgH3Ybi8PMd6hjjw%2F4jqr2Rdq48%2BuBgq5k3%2F4iZg7OMecsgaGu9OrEP23%2BKjpqOXs0H2j2WjaiJKOdeXgeBg9Jt%2Bv3buHMiEq7kP6bq%2BkCM4ss%2F4KBpn8WWXhsWzQUMmE3sTxzTCF9%2Fq%2BBjqkAfhSlCPr9vh%2FA3J3wTqhJD3XYCTwHNekfL5Xd11dMluC%2FaOOr%2BMyz%2FGPpHYZaFweNKuQZF2bBXlyM51t4fcAOalyMnSnCHt6r9TCZbkx%2F2%2Bpy2gJ1O%2FmMTQ0EWFk51FSSViKolGnT4qnk1q3GjaX3fEHyOUu%2BXStIBBknhKXuvWSbmh%2BKpBybPgrbD3CTevfv1oES4XWxn4OhbsfegXRX%2B2x92QH&X-Amz-Signature=8e784c7db91f91549071313871df2939ce80af02cc0f1f08a6deac7fd35b0140&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFI4NUSW%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T150358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCqAZUMPLGvE33eo8D5f0gAHDKV%2Fd3gY9LI8DXTkdcQ%2FAIhAPTSLTpFiVvCTkOGfpE0mTN%2FQz%2BB%2Bbna0Lfgzib6wWsKKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCQDjHBIi6%2Fkf28kYq3AOD5H4IrkxxY60JjF9DUkKyqBjTT%2FHfeq3DZDSajG8WocWyArtd%2Fn%2BY8OJy%2FcMUGUWb19oMnE8va0Lhp6T%2FQTAhiVe4op193imR%2FXq1OyyxWWYTzTv0HBC4Xd28b1J2a2bQrAxuSgp39PkUdLWwOoZ9mECHqvsb5UowLcrBex6cEzbrEfBSg%2FM8fRVl3sMET8AVS9RJPYyEH%2Bm6sTmRvvU2tZg2%2BGe2hHWClDNY0Jkg4SAVKNsAWUejAikSdCHpkPoTVkICWwoaZEK2a3NpdaU2%2BgXgEQKZLsDJogsG3iIi%2BCGlQzx1bLT6XqHT%2FrY4ZTkO%2FHJPXmRIh6D9qswFSfR487C5kznrUEK4%2B4IY%2F3o18lwMlH8khdqrCoPgdw9f0VdFVb3tGm5jV%2FT%2FhG6GwRXi18IlmofnnAbce5%2F7QL44xLODpvGFkiYh2AS9NRgKFhwy7jXik08Xm3VYbfdXuFKgldMQsu8akxz23%2BO4wMYoIrdzQ%2B9bwdWRgH3Ybi8PMd6hjjw%2F4jqr2Rdq48%2BuBgq5k3%2F4iZg7OMecsgaGu9OrEP23%2BKjpqOXs0H2j2WjaiJKOdeXgeBg9Jt%2Bv3buHMiEq7kP6bq%2BkCM4ss%2F4KBpn8WWXhsWzQUMmE3sTxzTCF9%2Fq%2BBjqkAfhSlCPr9vh%2FA3J3wTqhJD3XYCTwHNekfL5Xd11dMluC%2FaOOr%2BMyz%2FGPpHYZaFweNKuQZF2bBXlyM51t4fcAOalyMnSnCHt6r9TCZbkx%2F2%2Bpy2gJ1O%2FmMTQ0EWFk51FSSViKolGnT4qnk1q3GjaX3fEHyOUu%2BXStIBBknhKXuvWSbmh%2BKpBybPgrbD3CTevfv1oES4XWxn4OhbsfegXRX%2B2x92QH&X-Amz-Signature=301b29c48f9d833d3aeda41c5cf3a366c4302290c93780c75bf82b1fb9f99bf4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFI4NUSW%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T150358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCqAZUMPLGvE33eo8D5f0gAHDKV%2Fd3gY9LI8DXTkdcQ%2FAIhAPTSLTpFiVvCTkOGfpE0mTN%2FQz%2BB%2Bbna0Lfgzib6wWsKKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCQDjHBIi6%2Fkf28kYq3AOD5H4IrkxxY60JjF9DUkKyqBjTT%2FHfeq3DZDSajG8WocWyArtd%2Fn%2BY8OJy%2FcMUGUWb19oMnE8va0Lhp6T%2FQTAhiVe4op193imR%2FXq1OyyxWWYTzTv0HBC4Xd28b1J2a2bQrAxuSgp39PkUdLWwOoZ9mECHqvsb5UowLcrBex6cEzbrEfBSg%2FM8fRVl3sMET8AVS9RJPYyEH%2Bm6sTmRvvU2tZg2%2BGe2hHWClDNY0Jkg4SAVKNsAWUejAikSdCHpkPoTVkICWwoaZEK2a3NpdaU2%2BgXgEQKZLsDJogsG3iIi%2BCGlQzx1bLT6XqHT%2FrY4ZTkO%2FHJPXmRIh6D9qswFSfR487C5kznrUEK4%2B4IY%2F3o18lwMlH8khdqrCoPgdw9f0VdFVb3tGm5jV%2FT%2FhG6GwRXi18IlmofnnAbce5%2F7QL44xLODpvGFkiYh2AS9NRgKFhwy7jXik08Xm3VYbfdXuFKgldMQsu8akxz23%2BO4wMYoIrdzQ%2B9bwdWRgH3Ybi8PMd6hjjw%2F4jqr2Rdq48%2BuBgq5k3%2F4iZg7OMecsgaGu9OrEP23%2BKjpqOXs0H2j2WjaiJKOdeXgeBg9Jt%2Bv3buHMiEq7kP6bq%2BkCM4ss%2F4KBpn8WWXhsWzQUMmE3sTxzTCF9%2Fq%2BBjqkAfhSlCPr9vh%2FA3J3wTqhJD3XYCTwHNekfL5Xd11dMluC%2FaOOr%2BMyz%2FGPpHYZaFweNKuQZF2bBXlyM51t4fcAOalyMnSnCHt6r9TCZbkx%2F2%2Bpy2gJ1O%2FmMTQ0EWFk51FSSViKolGnT4qnk1q3GjaX3fEHyOUu%2BXStIBBknhKXuvWSbmh%2BKpBybPgrbD3CTevfv1oES4XWxn4OhbsfegXRX%2B2x92QH&X-Amz-Signature=bbc4af4c22189d239aebb50aaa5701ec1677fe799dd1a18c1bb3521aadba2088&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFI4NUSW%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T150358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCqAZUMPLGvE33eo8D5f0gAHDKV%2Fd3gY9LI8DXTkdcQ%2FAIhAPTSLTpFiVvCTkOGfpE0mTN%2FQz%2BB%2Bbna0Lfgzib6wWsKKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCQDjHBIi6%2Fkf28kYq3AOD5H4IrkxxY60JjF9DUkKyqBjTT%2FHfeq3DZDSajG8WocWyArtd%2Fn%2BY8OJy%2FcMUGUWb19oMnE8va0Lhp6T%2FQTAhiVe4op193imR%2FXq1OyyxWWYTzTv0HBC4Xd28b1J2a2bQrAxuSgp39PkUdLWwOoZ9mECHqvsb5UowLcrBex6cEzbrEfBSg%2FM8fRVl3sMET8AVS9RJPYyEH%2Bm6sTmRvvU2tZg2%2BGe2hHWClDNY0Jkg4SAVKNsAWUejAikSdCHpkPoTVkICWwoaZEK2a3NpdaU2%2BgXgEQKZLsDJogsG3iIi%2BCGlQzx1bLT6XqHT%2FrY4ZTkO%2FHJPXmRIh6D9qswFSfR487C5kznrUEK4%2B4IY%2F3o18lwMlH8khdqrCoPgdw9f0VdFVb3tGm5jV%2FT%2FhG6GwRXi18IlmofnnAbce5%2F7QL44xLODpvGFkiYh2AS9NRgKFhwy7jXik08Xm3VYbfdXuFKgldMQsu8akxz23%2BO4wMYoIrdzQ%2B9bwdWRgH3Ybi8PMd6hjjw%2F4jqr2Rdq48%2BuBgq5k3%2F4iZg7OMecsgaGu9OrEP23%2BKjpqOXs0H2j2WjaiJKOdeXgeBg9Jt%2Bv3buHMiEq7kP6bq%2BkCM4ss%2F4KBpn8WWXhsWzQUMmE3sTxzTCF9%2Fq%2BBjqkAfhSlCPr9vh%2FA3J3wTqhJD3XYCTwHNekfL5Xd11dMluC%2FaOOr%2BMyz%2FGPpHYZaFweNKuQZF2bBXlyM51t4fcAOalyMnSnCHt6r9TCZbkx%2F2%2Bpy2gJ1O%2FmMTQ0EWFk51FSSViKolGnT4qnk1q3GjaX3fEHyOUu%2BXStIBBknhKXuvWSbmh%2BKpBybPgrbD3CTevfv1oES4XWxn4OhbsfegXRX%2B2x92QH&X-Amz-Signature=16d92676e83f71b0c4ee886e509ab2fadc396f83b456b0420e05f540820faf03&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFI4NUSW%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T150358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCqAZUMPLGvE33eo8D5f0gAHDKV%2Fd3gY9LI8DXTkdcQ%2FAIhAPTSLTpFiVvCTkOGfpE0mTN%2FQz%2BB%2Bbna0Lfgzib6wWsKKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCQDjHBIi6%2Fkf28kYq3AOD5H4IrkxxY60JjF9DUkKyqBjTT%2FHfeq3DZDSajG8WocWyArtd%2Fn%2BY8OJy%2FcMUGUWb19oMnE8va0Lhp6T%2FQTAhiVe4op193imR%2FXq1OyyxWWYTzTv0HBC4Xd28b1J2a2bQrAxuSgp39PkUdLWwOoZ9mECHqvsb5UowLcrBex6cEzbrEfBSg%2FM8fRVl3sMET8AVS9RJPYyEH%2Bm6sTmRvvU2tZg2%2BGe2hHWClDNY0Jkg4SAVKNsAWUejAikSdCHpkPoTVkICWwoaZEK2a3NpdaU2%2BgXgEQKZLsDJogsG3iIi%2BCGlQzx1bLT6XqHT%2FrY4ZTkO%2FHJPXmRIh6D9qswFSfR487C5kznrUEK4%2B4IY%2F3o18lwMlH8khdqrCoPgdw9f0VdFVb3tGm5jV%2FT%2FhG6GwRXi18IlmofnnAbce5%2F7QL44xLODpvGFkiYh2AS9NRgKFhwy7jXik08Xm3VYbfdXuFKgldMQsu8akxz23%2BO4wMYoIrdzQ%2B9bwdWRgH3Ybi8PMd6hjjw%2F4jqr2Rdq48%2BuBgq5k3%2F4iZg7OMecsgaGu9OrEP23%2BKjpqOXs0H2j2WjaiJKOdeXgeBg9Jt%2Bv3buHMiEq7kP6bq%2BkCM4ss%2F4KBpn8WWXhsWzQUMmE3sTxzTCF9%2Fq%2BBjqkAfhSlCPr9vh%2FA3J3wTqhJD3XYCTwHNekfL5Xd11dMluC%2FaOOr%2BMyz%2FGPpHYZaFweNKuQZF2bBXlyM51t4fcAOalyMnSnCHt6r9TCZbkx%2F2%2Bpy2gJ1O%2FmMTQ0EWFk51FSSViKolGnT4qnk1q3GjaX3fEHyOUu%2BXStIBBknhKXuvWSbmh%2BKpBybPgrbD3CTevfv1oES4XWxn4OhbsfegXRX%2B2x92QH&X-Amz-Signature=4df029207bcd05c2e3709bc212b221cdec75edbec58581f63dca8e288715a30f&X-Amz-SignedHeaders=host&x-id=GetObject)
