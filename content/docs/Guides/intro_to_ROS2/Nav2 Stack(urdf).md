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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G3GHKXS%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T091032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpaj2ckw6mYZsJrpcRx3OXBbl5NCtgkdUbxkX274A15QIhAMGNXXyRwppkmAUKO56pSaFI%2FcNPvf%2F4Jwfaiqpab8X%2BKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOYX4dgTPUQMAhQ6sq3AMAgICPd%2BxzbhGpPTbzp4oLTa5Tizo9cjWScVvB7P99abneP9vll7bI9YYWHUmvWve8vO6W04uwgh0lcu5LvYLe1XHxvFTvGT7pQwRbVnYFrnIFCdh2tt9N66DWIBQcC5ae878YPPwPYNT%2BGDsdmBZqoUSNeFnpl%2BJxaGBPpqh4gWSc3xiWc6VqXrAWdwKL%2Fhzoc7QR42EO%2B182VEEH%2FGPMVChzszsjJ0WnZ311UBzLjufcAMW2dB6nYB7Q6zgMz5jVO7ThvX0JN%2FVuls58FjaQJOHpU%2B6UmHXg2zVh%2BfXnJv7aPcgBIai7kueyhm1rXT0ZFrhJ84SuDwl5pSP0uZbs4JPw2vZ51PDBFpzU9NrSLWtyufxx0OUmA%2FgsCH84yX2ngWmG0Yzpy8qpX2w7S69e7c7ZmDA7g2fo8BpadNZVITeyMxhzgLZbAsmug7hkMA2Z0OITkHr0PjR55KCiN7Fv65vrzgBkgbLjXRM%2FZqRusfwVvMRo0WQ6nmMR6dZVbCweF1tXnFoIWNPBPVCWpxZ%2FyccTJmaO6HFV8K3Na%2BJ4pv9RG4sJcf6ymKtAgrEQoSEw8wRfTFrLJAgR494A6iRQ4av2UiMRbEfCMgLdSY6gLrPB0kHR6xvCtID3KDDyv9TCBjqkAcej%2BmT%2B1Q7RSOsBZZOrL7SN0uIMapl2VLZl%2BsrKnsvJ2lLG9oig6jXhOmgVeNFfstaPCitH4wH2qEx46DrJB4bwPh9SnwwfZ0g0Erki59E%2FgC%2BDOfgaMcGhHbMAIUKoWWCNoDDh6zL%2BD355k2VD5o6yDVqjzvGzNC9ztIkIvv4NrKAnJ4H%2BrT1MTBxa8OfjQ6Q4NC1CfBbM0ixxdPG5grNV0hEf&X-Amz-Signature=ba5f528b4424e5aa1bc0f57f179592ceab65f25757bb28b99287e60dc45ec385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G3GHKXS%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T091032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpaj2ckw6mYZsJrpcRx3OXBbl5NCtgkdUbxkX274A15QIhAMGNXXyRwppkmAUKO56pSaFI%2FcNPvf%2F4Jwfaiqpab8X%2BKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOYX4dgTPUQMAhQ6sq3AMAgICPd%2BxzbhGpPTbzp4oLTa5Tizo9cjWScVvB7P99abneP9vll7bI9YYWHUmvWve8vO6W04uwgh0lcu5LvYLe1XHxvFTvGT7pQwRbVnYFrnIFCdh2tt9N66DWIBQcC5ae878YPPwPYNT%2BGDsdmBZqoUSNeFnpl%2BJxaGBPpqh4gWSc3xiWc6VqXrAWdwKL%2Fhzoc7QR42EO%2B182VEEH%2FGPMVChzszsjJ0WnZ311UBzLjufcAMW2dB6nYB7Q6zgMz5jVO7ThvX0JN%2FVuls58FjaQJOHpU%2B6UmHXg2zVh%2BfXnJv7aPcgBIai7kueyhm1rXT0ZFrhJ84SuDwl5pSP0uZbs4JPw2vZ51PDBFpzU9NrSLWtyufxx0OUmA%2FgsCH84yX2ngWmG0Yzpy8qpX2w7S69e7c7ZmDA7g2fo8BpadNZVITeyMxhzgLZbAsmug7hkMA2Z0OITkHr0PjR55KCiN7Fv65vrzgBkgbLjXRM%2FZqRusfwVvMRo0WQ6nmMR6dZVbCweF1tXnFoIWNPBPVCWpxZ%2FyccTJmaO6HFV8K3Na%2BJ4pv9RG4sJcf6ymKtAgrEQoSEw8wRfTFrLJAgR494A6iRQ4av2UiMRbEfCMgLdSY6gLrPB0kHR6xvCtID3KDDyv9TCBjqkAcej%2BmT%2B1Q7RSOsBZZOrL7SN0uIMapl2VLZl%2BsrKnsvJ2lLG9oig6jXhOmgVeNFfstaPCitH4wH2qEx46DrJB4bwPh9SnwwfZ0g0Erki59E%2FgC%2BDOfgaMcGhHbMAIUKoWWCNoDDh6zL%2BD355k2VD5o6yDVqjzvGzNC9ztIkIvv4NrKAnJ4H%2BrT1MTBxa8OfjQ6Q4NC1CfBbM0ixxdPG5grNV0hEf&X-Amz-Signature=bf8de717ad804bc4ccbfe83f205426269f3a9e0202cbb92a46a246980bbea733&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G3GHKXS%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T091032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpaj2ckw6mYZsJrpcRx3OXBbl5NCtgkdUbxkX274A15QIhAMGNXXyRwppkmAUKO56pSaFI%2FcNPvf%2F4Jwfaiqpab8X%2BKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOYX4dgTPUQMAhQ6sq3AMAgICPd%2BxzbhGpPTbzp4oLTa5Tizo9cjWScVvB7P99abneP9vll7bI9YYWHUmvWve8vO6W04uwgh0lcu5LvYLe1XHxvFTvGT7pQwRbVnYFrnIFCdh2tt9N66DWIBQcC5ae878YPPwPYNT%2BGDsdmBZqoUSNeFnpl%2BJxaGBPpqh4gWSc3xiWc6VqXrAWdwKL%2Fhzoc7QR42EO%2B182VEEH%2FGPMVChzszsjJ0WnZ311UBzLjufcAMW2dB6nYB7Q6zgMz5jVO7ThvX0JN%2FVuls58FjaQJOHpU%2B6UmHXg2zVh%2BfXnJv7aPcgBIai7kueyhm1rXT0ZFrhJ84SuDwl5pSP0uZbs4JPw2vZ51PDBFpzU9NrSLWtyufxx0OUmA%2FgsCH84yX2ngWmG0Yzpy8qpX2w7S69e7c7ZmDA7g2fo8BpadNZVITeyMxhzgLZbAsmug7hkMA2Z0OITkHr0PjR55KCiN7Fv65vrzgBkgbLjXRM%2FZqRusfwVvMRo0WQ6nmMR6dZVbCweF1tXnFoIWNPBPVCWpxZ%2FyccTJmaO6HFV8K3Na%2BJ4pv9RG4sJcf6ymKtAgrEQoSEw8wRfTFrLJAgR494A6iRQ4av2UiMRbEfCMgLdSY6gLrPB0kHR6xvCtID3KDDyv9TCBjqkAcej%2BmT%2B1Q7RSOsBZZOrL7SN0uIMapl2VLZl%2BsrKnsvJ2lLG9oig6jXhOmgVeNFfstaPCitH4wH2qEx46DrJB4bwPh9SnwwfZ0g0Erki59E%2FgC%2BDOfgaMcGhHbMAIUKoWWCNoDDh6zL%2BD355k2VD5o6yDVqjzvGzNC9ztIkIvv4NrKAnJ4H%2BrT1MTBxa8OfjQ6Q4NC1CfBbM0ixxdPG5grNV0hEf&X-Amz-Signature=4156aa309b85fb269129b9833728e25641346276f89d64a5f94cb6c252ff1e6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G3GHKXS%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T091032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpaj2ckw6mYZsJrpcRx3OXBbl5NCtgkdUbxkX274A15QIhAMGNXXyRwppkmAUKO56pSaFI%2FcNPvf%2F4Jwfaiqpab8X%2BKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOYX4dgTPUQMAhQ6sq3AMAgICPd%2BxzbhGpPTbzp4oLTa5Tizo9cjWScVvB7P99abneP9vll7bI9YYWHUmvWve8vO6W04uwgh0lcu5LvYLe1XHxvFTvGT7pQwRbVnYFrnIFCdh2tt9N66DWIBQcC5ae878YPPwPYNT%2BGDsdmBZqoUSNeFnpl%2BJxaGBPpqh4gWSc3xiWc6VqXrAWdwKL%2Fhzoc7QR42EO%2B182VEEH%2FGPMVChzszsjJ0WnZ311UBzLjufcAMW2dB6nYB7Q6zgMz5jVO7ThvX0JN%2FVuls58FjaQJOHpU%2B6UmHXg2zVh%2BfXnJv7aPcgBIai7kueyhm1rXT0ZFrhJ84SuDwl5pSP0uZbs4JPw2vZ51PDBFpzU9NrSLWtyufxx0OUmA%2FgsCH84yX2ngWmG0Yzpy8qpX2w7S69e7c7ZmDA7g2fo8BpadNZVITeyMxhzgLZbAsmug7hkMA2Z0OITkHr0PjR55KCiN7Fv65vrzgBkgbLjXRM%2FZqRusfwVvMRo0WQ6nmMR6dZVbCweF1tXnFoIWNPBPVCWpxZ%2FyccTJmaO6HFV8K3Na%2BJ4pv9RG4sJcf6ymKtAgrEQoSEw8wRfTFrLJAgR494A6iRQ4av2UiMRbEfCMgLdSY6gLrPB0kHR6xvCtID3KDDyv9TCBjqkAcej%2BmT%2B1Q7RSOsBZZOrL7SN0uIMapl2VLZl%2BsrKnsvJ2lLG9oig6jXhOmgVeNFfstaPCitH4wH2qEx46DrJB4bwPh9SnwwfZ0g0Erki59E%2FgC%2BDOfgaMcGhHbMAIUKoWWCNoDDh6zL%2BD355k2VD5o6yDVqjzvGzNC9ztIkIvv4NrKAnJ4H%2BrT1MTBxa8OfjQ6Q4NC1CfBbM0ixxdPG5grNV0hEf&X-Amz-Signature=b8d8f2ce2c649354a2026f3405f15dc44e5939d8de70df691849570c7901dd1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G3GHKXS%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T091032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpaj2ckw6mYZsJrpcRx3OXBbl5NCtgkdUbxkX274A15QIhAMGNXXyRwppkmAUKO56pSaFI%2FcNPvf%2F4Jwfaiqpab8X%2BKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOYX4dgTPUQMAhQ6sq3AMAgICPd%2BxzbhGpPTbzp4oLTa5Tizo9cjWScVvB7P99abneP9vll7bI9YYWHUmvWve8vO6W04uwgh0lcu5LvYLe1XHxvFTvGT7pQwRbVnYFrnIFCdh2tt9N66DWIBQcC5ae878YPPwPYNT%2BGDsdmBZqoUSNeFnpl%2BJxaGBPpqh4gWSc3xiWc6VqXrAWdwKL%2Fhzoc7QR42EO%2B182VEEH%2FGPMVChzszsjJ0WnZ311UBzLjufcAMW2dB6nYB7Q6zgMz5jVO7ThvX0JN%2FVuls58FjaQJOHpU%2B6UmHXg2zVh%2BfXnJv7aPcgBIai7kueyhm1rXT0ZFrhJ84SuDwl5pSP0uZbs4JPw2vZ51PDBFpzU9NrSLWtyufxx0OUmA%2FgsCH84yX2ngWmG0Yzpy8qpX2w7S69e7c7ZmDA7g2fo8BpadNZVITeyMxhzgLZbAsmug7hkMA2Z0OITkHr0PjR55KCiN7Fv65vrzgBkgbLjXRM%2FZqRusfwVvMRo0WQ6nmMR6dZVbCweF1tXnFoIWNPBPVCWpxZ%2FyccTJmaO6HFV8K3Na%2BJ4pv9RG4sJcf6ymKtAgrEQoSEw8wRfTFrLJAgR494A6iRQ4av2UiMRbEfCMgLdSY6gLrPB0kHR6xvCtID3KDDyv9TCBjqkAcej%2BmT%2B1Q7RSOsBZZOrL7SN0uIMapl2VLZl%2BsrKnsvJ2lLG9oig6jXhOmgVeNFfstaPCitH4wH2qEx46DrJB4bwPh9SnwwfZ0g0Erki59E%2FgC%2BDOfgaMcGhHbMAIUKoWWCNoDDh6zL%2BD355k2VD5o6yDVqjzvGzNC9ztIkIvv4NrKAnJ4H%2BrT1MTBxa8OfjQ6Q4NC1CfBbM0ixxdPG5grNV0hEf&X-Amz-Signature=d39671d29aac4e8bb4ac46de6f43c4268be0caca3d9b8c616273fcd0aeec6960&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G3GHKXS%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T091032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpaj2ckw6mYZsJrpcRx3OXBbl5NCtgkdUbxkX274A15QIhAMGNXXyRwppkmAUKO56pSaFI%2FcNPvf%2F4Jwfaiqpab8X%2BKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxOYX4dgTPUQMAhQ6sq3AMAgICPd%2BxzbhGpPTbzp4oLTa5Tizo9cjWScVvB7P99abneP9vll7bI9YYWHUmvWve8vO6W04uwgh0lcu5LvYLe1XHxvFTvGT7pQwRbVnYFrnIFCdh2tt9N66DWIBQcC5ae878YPPwPYNT%2BGDsdmBZqoUSNeFnpl%2BJxaGBPpqh4gWSc3xiWc6VqXrAWdwKL%2Fhzoc7QR42EO%2B182VEEH%2FGPMVChzszsjJ0WnZ311UBzLjufcAMW2dB6nYB7Q6zgMz5jVO7ThvX0JN%2FVuls58FjaQJOHpU%2B6UmHXg2zVh%2BfXnJv7aPcgBIai7kueyhm1rXT0ZFrhJ84SuDwl5pSP0uZbs4JPw2vZ51PDBFpzU9NrSLWtyufxx0OUmA%2FgsCH84yX2ngWmG0Yzpy8qpX2w7S69e7c7ZmDA7g2fo8BpadNZVITeyMxhzgLZbAsmug7hkMA2Z0OITkHr0PjR55KCiN7Fv65vrzgBkgbLjXRM%2FZqRusfwVvMRo0WQ6nmMR6dZVbCweF1tXnFoIWNPBPVCWpxZ%2FyccTJmaO6HFV8K3Na%2BJ4pv9RG4sJcf6ymKtAgrEQoSEw8wRfTFrLJAgR494A6iRQ4av2UiMRbEfCMgLdSY6gLrPB0kHR6xvCtID3KDDyv9TCBjqkAcej%2BmT%2B1Q7RSOsBZZOrL7SN0uIMapl2VLZl%2BsrKnsvJ2lLG9oig6jXhOmgVeNFfstaPCitH4wH2qEx46DrJB4bwPh9SnwwfZ0g0Erki59E%2FgC%2BDOfgaMcGhHbMAIUKoWWCNoDDh6zL%2BD355k2VD5o6yDVqjzvGzNC9ztIkIvv4NrKAnJ4H%2BrT1MTBxa8OfjQ6Q4NC1CfBbM0ixxdPG5grNV0hEf&X-Amz-Signature=fa6ef755dfb9db866542ead734ae3f929352fd64274037f619065bfca4c40816&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
