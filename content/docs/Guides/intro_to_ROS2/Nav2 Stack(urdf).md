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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VVOMWRH%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIGpkiaV1pTb7gY%2BWMWiCLgPBDEXKxazZMyQNoFsPqOTjAiAgrwrb6sd2zD4xWDOa14Mbu2X6SBHEMIhUTfcfeoIZECr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMeVilqKZ36Pocm8PLKtwDdyozAzmLzvMvcvzJp249llZ00c01R6XtSGLIJC3Nl9dsimtKuAdQ0CIAeZvPItSCgsaNrFUaxA593Txr1Jdj0iPE41e%2BHTSHw2UFsN9BLnkzzJsfRYrBrR43FKDkf4SMx7pip5YuLLo3Ce%2FIiMYdUtxg0SjqL6QzSmKfClV%2FZX6aKiMpXrq%2ByyD2e08IXv%2FZ6%2BstjzKNTYmGPDtQ79Z69Fgl7XX%2BeRMgI0VbkJE2BMmj65Ot6sxfMJTsx372VrU485WN%2BPn%2FL%2FK73t1HMWeSwllb4K5ZEASUeET1yQu8W34gqpdUMLWYM3ThnzGUKEfQWIZ%2FU5663Gkk%2F56gEn8D3kewxJFl5VoG0N7pfFjOFt7D5kQbGqSkE5Yjb6oSf35EbAwNr%2Btk1lwgq2Qd9M36Zu9HQIrmM8aJeCG1MUYCPzLeQITehvTz1FREo6bofywvChKGmVc5Uc7rlYGIBclTSHF2Lq%2BLPjAThDCNfBPc%2BIV6Y%2FsTJaYilv2lUToCA0ePpYpgMoRUNz7KDsONNzcw3%2BuHf%2F%2FrBJl6YiXikHMmO%2FH3pp24Cc4E3HiilPzRwXcZ0pkwnrC%2FPzNrKX9ST4kGQdukQ2gc7SvuJXPRdOiGhilYHy6mnEcN2wZeZhQw9b%2BEvQY6pgFnD5Q25XAzEsWFiVtfMuthHOElAgPoafAdi3%2F%2BW%2F68hEalBPG8bnXiz3mEIYkdMFqATmizRg9P6nmvWL54BmSphfOdY%2BNO8CdeDUCFWtqBzLHMJrrUuvB2agQ8LV5lRRWp7WyrXJ6ug3FKOG9KR7REny3w%2BtPXCbOgBAKBYs6SHRFmSOAyP6D4vQZg1u2E%2BLGD9QDYVBT78bKCjyc2FmKe1yKbGIsh&X-Amz-Signature=458aceffa8207992b331d5ef8e847790784f1cb62f483944ce95ddcd01e382f2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VVOMWRH%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIGpkiaV1pTb7gY%2BWMWiCLgPBDEXKxazZMyQNoFsPqOTjAiAgrwrb6sd2zD4xWDOa14Mbu2X6SBHEMIhUTfcfeoIZECr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMeVilqKZ36Pocm8PLKtwDdyozAzmLzvMvcvzJp249llZ00c01R6XtSGLIJC3Nl9dsimtKuAdQ0CIAeZvPItSCgsaNrFUaxA593Txr1Jdj0iPE41e%2BHTSHw2UFsN9BLnkzzJsfRYrBrR43FKDkf4SMx7pip5YuLLo3Ce%2FIiMYdUtxg0SjqL6QzSmKfClV%2FZX6aKiMpXrq%2ByyD2e08IXv%2FZ6%2BstjzKNTYmGPDtQ79Z69Fgl7XX%2BeRMgI0VbkJE2BMmj65Ot6sxfMJTsx372VrU485WN%2BPn%2FL%2FK73t1HMWeSwllb4K5ZEASUeET1yQu8W34gqpdUMLWYM3ThnzGUKEfQWIZ%2FU5663Gkk%2F56gEn8D3kewxJFl5VoG0N7pfFjOFt7D5kQbGqSkE5Yjb6oSf35EbAwNr%2Btk1lwgq2Qd9M36Zu9HQIrmM8aJeCG1MUYCPzLeQITehvTz1FREo6bofywvChKGmVc5Uc7rlYGIBclTSHF2Lq%2BLPjAThDCNfBPc%2BIV6Y%2FsTJaYilv2lUToCA0ePpYpgMoRUNz7KDsONNzcw3%2BuHf%2F%2FrBJl6YiXikHMmO%2FH3pp24Cc4E3HiilPzRwXcZ0pkwnrC%2FPzNrKX9ST4kGQdukQ2gc7SvuJXPRdOiGhilYHy6mnEcN2wZeZhQw9b%2BEvQY6pgFnD5Q25XAzEsWFiVtfMuthHOElAgPoafAdi3%2F%2BW%2F68hEalBPG8bnXiz3mEIYkdMFqATmizRg9P6nmvWL54BmSphfOdY%2BNO8CdeDUCFWtqBzLHMJrrUuvB2agQ8LV5lRRWp7WyrXJ6ug3FKOG9KR7REny3w%2BtPXCbOgBAKBYs6SHRFmSOAyP6D4vQZg1u2E%2BLGD9QDYVBT78bKCjyc2FmKe1yKbGIsh&X-Amz-Signature=b06f279c80c9267d7c6868a2617a6e1f102ae6cb5e5d208721d9265d4a5c558f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VVOMWRH%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIGpkiaV1pTb7gY%2BWMWiCLgPBDEXKxazZMyQNoFsPqOTjAiAgrwrb6sd2zD4xWDOa14Mbu2X6SBHEMIhUTfcfeoIZECr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMeVilqKZ36Pocm8PLKtwDdyozAzmLzvMvcvzJp249llZ00c01R6XtSGLIJC3Nl9dsimtKuAdQ0CIAeZvPItSCgsaNrFUaxA593Txr1Jdj0iPE41e%2BHTSHw2UFsN9BLnkzzJsfRYrBrR43FKDkf4SMx7pip5YuLLo3Ce%2FIiMYdUtxg0SjqL6QzSmKfClV%2FZX6aKiMpXrq%2ByyD2e08IXv%2FZ6%2BstjzKNTYmGPDtQ79Z69Fgl7XX%2BeRMgI0VbkJE2BMmj65Ot6sxfMJTsx372VrU485WN%2BPn%2FL%2FK73t1HMWeSwllb4K5ZEASUeET1yQu8W34gqpdUMLWYM3ThnzGUKEfQWIZ%2FU5663Gkk%2F56gEn8D3kewxJFl5VoG0N7pfFjOFt7D5kQbGqSkE5Yjb6oSf35EbAwNr%2Btk1lwgq2Qd9M36Zu9HQIrmM8aJeCG1MUYCPzLeQITehvTz1FREo6bofywvChKGmVc5Uc7rlYGIBclTSHF2Lq%2BLPjAThDCNfBPc%2BIV6Y%2FsTJaYilv2lUToCA0ePpYpgMoRUNz7KDsONNzcw3%2BuHf%2F%2FrBJl6YiXikHMmO%2FH3pp24Cc4E3HiilPzRwXcZ0pkwnrC%2FPzNrKX9ST4kGQdukQ2gc7SvuJXPRdOiGhilYHy6mnEcN2wZeZhQw9b%2BEvQY6pgFnD5Q25XAzEsWFiVtfMuthHOElAgPoafAdi3%2F%2BW%2F68hEalBPG8bnXiz3mEIYkdMFqATmizRg9P6nmvWL54BmSphfOdY%2BNO8CdeDUCFWtqBzLHMJrrUuvB2agQ8LV5lRRWp7WyrXJ6ug3FKOG9KR7REny3w%2BtPXCbOgBAKBYs6SHRFmSOAyP6D4vQZg1u2E%2BLGD9QDYVBT78bKCjyc2FmKe1yKbGIsh&X-Amz-Signature=727865f856da123ae6167d9a0f98627e4167a39c92e30a9de03b0e096adb3b75&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VVOMWRH%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIGpkiaV1pTb7gY%2BWMWiCLgPBDEXKxazZMyQNoFsPqOTjAiAgrwrb6sd2zD4xWDOa14Mbu2X6SBHEMIhUTfcfeoIZECr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMeVilqKZ36Pocm8PLKtwDdyozAzmLzvMvcvzJp249llZ00c01R6XtSGLIJC3Nl9dsimtKuAdQ0CIAeZvPItSCgsaNrFUaxA593Txr1Jdj0iPE41e%2BHTSHw2UFsN9BLnkzzJsfRYrBrR43FKDkf4SMx7pip5YuLLo3Ce%2FIiMYdUtxg0SjqL6QzSmKfClV%2FZX6aKiMpXrq%2ByyD2e08IXv%2FZ6%2BstjzKNTYmGPDtQ79Z69Fgl7XX%2BeRMgI0VbkJE2BMmj65Ot6sxfMJTsx372VrU485WN%2BPn%2FL%2FK73t1HMWeSwllb4K5ZEASUeET1yQu8W34gqpdUMLWYM3ThnzGUKEfQWIZ%2FU5663Gkk%2F56gEn8D3kewxJFl5VoG0N7pfFjOFt7D5kQbGqSkE5Yjb6oSf35EbAwNr%2Btk1lwgq2Qd9M36Zu9HQIrmM8aJeCG1MUYCPzLeQITehvTz1FREo6bofywvChKGmVc5Uc7rlYGIBclTSHF2Lq%2BLPjAThDCNfBPc%2BIV6Y%2FsTJaYilv2lUToCA0ePpYpgMoRUNz7KDsONNzcw3%2BuHf%2F%2FrBJl6YiXikHMmO%2FH3pp24Cc4E3HiilPzRwXcZ0pkwnrC%2FPzNrKX9ST4kGQdukQ2gc7SvuJXPRdOiGhilYHy6mnEcN2wZeZhQw9b%2BEvQY6pgFnD5Q25XAzEsWFiVtfMuthHOElAgPoafAdi3%2F%2BW%2F68hEalBPG8bnXiz3mEIYkdMFqATmizRg9P6nmvWL54BmSphfOdY%2BNO8CdeDUCFWtqBzLHMJrrUuvB2agQ8LV5lRRWp7WyrXJ6ug3FKOG9KR7REny3w%2BtPXCbOgBAKBYs6SHRFmSOAyP6D4vQZg1u2E%2BLGD9QDYVBT78bKCjyc2FmKe1yKbGIsh&X-Amz-Signature=fcf303fef5e85ef0efde9769d7aff1f881444e921f45c97a12370908049ce103&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VVOMWRH%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIGpkiaV1pTb7gY%2BWMWiCLgPBDEXKxazZMyQNoFsPqOTjAiAgrwrb6sd2zD4xWDOa14Mbu2X6SBHEMIhUTfcfeoIZECr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMeVilqKZ36Pocm8PLKtwDdyozAzmLzvMvcvzJp249llZ00c01R6XtSGLIJC3Nl9dsimtKuAdQ0CIAeZvPItSCgsaNrFUaxA593Txr1Jdj0iPE41e%2BHTSHw2UFsN9BLnkzzJsfRYrBrR43FKDkf4SMx7pip5YuLLo3Ce%2FIiMYdUtxg0SjqL6QzSmKfClV%2FZX6aKiMpXrq%2ByyD2e08IXv%2FZ6%2BstjzKNTYmGPDtQ79Z69Fgl7XX%2BeRMgI0VbkJE2BMmj65Ot6sxfMJTsx372VrU485WN%2BPn%2FL%2FK73t1HMWeSwllb4K5ZEASUeET1yQu8W34gqpdUMLWYM3ThnzGUKEfQWIZ%2FU5663Gkk%2F56gEn8D3kewxJFl5VoG0N7pfFjOFt7D5kQbGqSkE5Yjb6oSf35EbAwNr%2Btk1lwgq2Qd9M36Zu9HQIrmM8aJeCG1MUYCPzLeQITehvTz1FREo6bofywvChKGmVc5Uc7rlYGIBclTSHF2Lq%2BLPjAThDCNfBPc%2BIV6Y%2FsTJaYilv2lUToCA0ePpYpgMoRUNz7KDsONNzcw3%2BuHf%2F%2FrBJl6YiXikHMmO%2FH3pp24Cc4E3HiilPzRwXcZ0pkwnrC%2FPzNrKX9ST4kGQdukQ2gc7SvuJXPRdOiGhilYHy6mnEcN2wZeZhQw9b%2BEvQY6pgFnD5Q25XAzEsWFiVtfMuthHOElAgPoafAdi3%2F%2BW%2F68hEalBPG8bnXiz3mEIYkdMFqATmizRg9P6nmvWL54BmSphfOdY%2BNO8CdeDUCFWtqBzLHMJrrUuvB2agQ8LV5lRRWp7WyrXJ6ug3FKOG9KR7REny3w%2BtPXCbOgBAKBYs6SHRFmSOAyP6D4vQZg1u2E%2BLGD9QDYVBT78bKCjyc2FmKe1yKbGIsh&X-Amz-Signature=2e1e059251b482d5e52f775790b38ca41dff552dcca9f9d2978a6989d94fe338&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VVOMWRH%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIGpkiaV1pTb7gY%2BWMWiCLgPBDEXKxazZMyQNoFsPqOTjAiAgrwrb6sd2zD4xWDOa14Mbu2X6SBHEMIhUTfcfeoIZECr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMeVilqKZ36Pocm8PLKtwDdyozAzmLzvMvcvzJp249llZ00c01R6XtSGLIJC3Nl9dsimtKuAdQ0CIAeZvPItSCgsaNrFUaxA593Txr1Jdj0iPE41e%2BHTSHw2UFsN9BLnkzzJsfRYrBrR43FKDkf4SMx7pip5YuLLo3Ce%2FIiMYdUtxg0SjqL6QzSmKfClV%2FZX6aKiMpXrq%2ByyD2e08IXv%2FZ6%2BstjzKNTYmGPDtQ79Z69Fgl7XX%2BeRMgI0VbkJE2BMmj65Ot6sxfMJTsx372VrU485WN%2BPn%2FL%2FK73t1HMWeSwllb4K5ZEASUeET1yQu8W34gqpdUMLWYM3ThnzGUKEfQWIZ%2FU5663Gkk%2F56gEn8D3kewxJFl5VoG0N7pfFjOFt7D5kQbGqSkE5Yjb6oSf35EbAwNr%2Btk1lwgq2Qd9M36Zu9HQIrmM8aJeCG1MUYCPzLeQITehvTz1FREo6bofywvChKGmVc5Uc7rlYGIBclTSHF2Lq%2BLPjAThDCNfBPc%2BIV6Y%2FsTJaYilv2lUToCA0ePpYpgMoRUNz7KDsONNzcw3%2BuHf%2F%2FrBJl6YiXikHMmO%2FH3pp24Cc4E3HiilPzRwXcZ0pkwnrC%2FPzNrKX9ST4kGQdukQ2gc7SvuJXPRdOiGhilYHy6mnEcN2wZeZhQw9b%2BEvQY6pgFnD5Q25XAzEsWFiVtfMuthHOElAgPoafAdi3%2F%2BW%2F68hEalBPG8bnXiz3mEIYkdMFqATmizRg9P6nmvWL54BmSphfOdY%2BNO8CdeDUCFWtqBzLHMJrrUuvB2agQ8LV5lRRWp7WyrXJ6ug3FKOG9KR7REny3w%2BtPXCbOgBAKBYs6SHRFmSOAyP6D4vQZg1u2E%2BLGD9QDYVBT78bKCjyc2FmKe1yKbGIsh&X-Amz-Signature=3d5d90af51f770ab4ea2095c70d72054ecb8850b576190c2b4ae65067fb97529&X-Amz-SignedHeaders=host&x-id=GetObject)
