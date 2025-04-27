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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q5S5QAD%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T061113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCTd6eZThviOvNqCx8I5X6d6hMeuIlP7jhJa5mIakifQIgecC4%2Bpe4hq9thmqFEEZ%2Bf2%2B7%2FVON5CT5wbXvkMUts6sq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDMJM5a7cOXT5YGCGxSrcA9ULB84bOTJD34FGuwmGufQjFg2pLpeS3pPsVq0ipSmqjc3%2FKygnYl6e59h0tbMpZDbFepKeJp%2BXFnZMQ5lKUO7Kos1%2FEHCYA%2FaeN9gcLc2rmey8qMrtFmHFSkqYcoHHKPm83edWDgzHnzEebNt9Wq%2FC4T8SPygmv3KBm7hoye%2FHXjFXTZS815rzpBWJ8TEo9YqkfAKUGo2K5pBNB24VSHhYS0mbQS5LV9iDk9TdN5iBpEuzEylMpIsOHUezpSpXQSp7oF2HIXMbLI%2Flo7CRhv6DULYlNIGKClF3LYfFFS9TpmxHxABwstOsVGWn95v8eW7UEVoEgp%2Fd5iTX%2B0OyQr1oGmknMvqWfdcBrhv8i8P6t6kXhmnVPK2OoScE%2FLt%2BQ0anURcHOAPdfXNZ9AwoD%2BP3z5kt6fvdJLNKOeM6a4SBTYXlxbmyhyEUGtV%2B062gHjJXWF%2F%2F7%2Fk%2BvEHvITxNuhKBZ%2BVDneUPFTNLNVpdAPlICiLs0T6sON4UW0LE2RkjorRzkWVeEfni3B9x0Ges%2F3HyYZS9taR%2FUHpZi0rvnoW%2FCovCGIPqAWj0UzN1TBv%2B608ptgV9yjwzJ5MoiJvHaN9hleoezGWemg9Agxgo0Zo2MbyieWeFPEtXuMZZMO%2FstsAGOqUBrIrdFWVxtj9D1xur2gLKtjrh3%2Fr3dTijcwgMt0cKNgeVYNws82HfeAv9QW59Stksl0c4yxtTDvLzJHUChJ8T5UclszTArebORxrYpOM7ZPJ1AVFWRDUXA7gH2CYYQtgxguB1Fx%2BkStYdPmjvl6VkKHBRP%2FDkYQ5v%2FA3nyKc%2BI43NU06RK3j10H5RwSidFAAwCFGrTNHfhrbU1P1RwoHB3exT5J7K&X-Amz-Signature=dcbdf0f82288f5aac0a6784b172102a84f08b6891396c1f3f7aa755124445e3a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q5S5QAD%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T061113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCTd6eZThviOvNqCx8I5X6d6hMeuIlP7jhJa5mIakifQIgecC4%2Bpe4hq9thmqFEEZ%2Bf2%2B7%2FVON5CT5wbXvkMUts6sq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDMJM5a7cOXT5YGCGxSrcA9ULB84bOTJD34FGuwmGufQjFg2pLpeS3pPsVq0ipSmqjc3%2FKygnYl6e59h0tbMpZDbFepKeJp%2BXFnZMQ5lKUO7Kos1%2FEHCYA%2FaeN9gcLc2rmey8qMrtFmHFSkqYcoHHKPm83edWDgzHnzEebNt9Wq%2FC4T8SPygmv3KBm7hoye%2FHXjFXTZS815rzpBWJ8TEo9YqkfAKUGo2K5pBNB24VSHhYS0mbQS5LV9iDk9TdN5iBpEuzEylMpIsOHUezpSpXQSp7oF2HIXMbLI%2Flo7CRhv6DULYlNIGKClF3LYfFFS9TpmxHxABwstOsVGWn95v8eW7UEVoEgp%2Fd5iTX%2B0OyQr1oGmknMvqWfdcBrhv8i8P6t6kXhmnVPK2OoScE%2FLt%2BQ0anURcHOAPdfXNZ9AwoD%2BP3z5kt6fvdJLNKOeM6a4SBTYXlxbmyhyEUGtV%2B062gHjJXWF%2F%2F7%2Fk%2BvEHvITxNuhKBZ%2BVDneUPFTNLNVpdAPlICiLs0T6sON4UW0LE2RkjorRzkWVeEfni3B9x0Ges%2F3HyYZS9taR%2FUHpZi0rvnoW%2FCovCGIPqAWj0UzN1TBv%2B608ptgV9yjwzJ5MoiJvHaN9hleoezGWemg9Agxgo0Zo2MbyieWeFPEtXuMZZMO%2FstsAGOqUBrIrdFWVxtj9D1xur2gLKtjrh3%2Fr3dTijcwgMt0cKNgeVYNws82HfeAv9QW59Stksl0c4yxtTDvLzJHUChJ8T5UclszTArebORxrYpOM7ZPJ1AVFWRDUXA7gH2CYYQtgxguB1Fx%2BkStYdPmjvl6VkKHBRP%2FDkYQ5v%2FA3nyKc%2BI43NU06RK3j10H5RwSidFAAwCFGrTNHfhrbU1P1RwoHB3exT5J7K&X-Amz-Signature=25ae5e8d8a76b482e2d68927e2c34af0836705d1df82583976e317f1b6fef3ba&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q5S5QAD%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T061113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCTd6eZThviOvNqCx8I5X6d6hMeuIlP7jhJa5mIakifQIgecC4%2Bpe4hq9thmqFEEZ%2Bf2%2B7%2FVON5CT5wbXvkMUts6sq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDMJM5a7cOXT5YGCGxSrcA9ULB84bOTJD34FGuwmGufQjFg2pLpeS3pPsVq0ipSmqjc3%2FKygnYl6e59h0tbMpZDbFepKeJp%2BXFnZMQ5lKUO7Kos1%2FEHCYA%2FaeN9gcLc2rmey8qMrtFmHFSkqYcoHHKPm83edWDgzHnzEebNt9Wq%2FC4T8SPygmv3KBm7hoye%2FHXjFXTZS815rzpBWJ8TEo9YqkfAKUGo2K5pBNB24VSHhYS0mbQS5LV9iDk9TdN5iBpEuzEylMpIsOHUezpSpXQSp7oF2HIXMbLI%2Flo7CRhv6DULYlNIGKClF3LYfFFS9TpmxHxABwstOsVGWn95v8eW7UEVoEgp%2Fd5iTX%2B0OyQr1oGmknMvqWfdcBrhv8i8P6t6kXhmnVPK2OoScE%2FLt%2BQ0anURcHOAPdfXNZ9AwoD%2BP3z5kt6fvdJLNKOeM6a4SBTYXlxbmyhyEUGtV%2B062gHjJXWF%2F%2F7%2Fk%2BvEHvITxNuhKBZ%2BVDneUPFTNLNVpdAPlICiLs0T6sON4UW0LE2RkjorRzkWVeEfni3B9x0Ges%2F3HyYZS9taR%2FUHpZi0rvnoW%2FCovCGIPqAWj0UzN1TBv%2B608ptgV9yjwzJ5MoiJvHaN9hleoezGWemg9Agxgo0Zo2MbyieWeFPEtXuMZZMO%2FstsAGOqUBrIrdFWVxtj9D1xur2gLKtjrh3%2Fr3dTijcwgMt0cKNgeVYNws82HfeAv9QW59Stksl0c4yxtTDvLzJHUChJ8T5UclszTArebORxrYpOM7ZPJ1AVFWRDUXA7gH2CYYQtgxguB1Fx%2BkStYdPmjvl6VkKHBRP%2FDkYQ5v%2FA3nyKc%2BI43NU06RK3j10H5RwSidFAAwCFGrTNHfhrbU1P1RwoHB3exT5J7K&X-Amz-Signature=a07379210097abd6a2988103ee898210e421b36633e141d7239ba47bed3d99b9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q5S5QAD%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T061113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCTd6eZThviOvNqCx8I5X6d6hMeuIlP7jhJa5mIakifQIgecC4%2Bpe4hq9thmqFEEZ%2Bf2%2B7%2FVON5CT5wbXvkMUts6sq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDMJM5a7cOXT5YGCGxSrcA9ULB84bOTJD34FGuwmGufQjFg2pLpeS3pPsVq0ipSmqjc3%2FKygnYl6e59h0tbMpZDbFepKeJp%2BXFnZMQ5lKUO7Kos1%2FEHCYA%2FaeN9gcLc2rmey8qMrtFmHFSkqYcoHHKPm83edWDgzHnzEebNt9Wq%2FC4T8SPygmv3KBm7hoye%2FHXjFXTZS815rzpBWJ8TEo9YqkfAKUGo2K5pBNB24VSHhYS0mbQS5LV9iDk9TdN5iBpEuzEylMpIsOHUezpSpXQSp7oF2HIXMbLI%2Flo7CRhv6DULYlNIGKClF3LYfFFS9TpmxHxABwstOsVGWn95v8eW7UEVoEgp%2Fd5iTX%2B0OyQr1oGmknMvqWfdcBrhv8i8P6t6kXhmnVPK2OoScE%2FLt%2BQ0anURcHOAPdfXNZ9AwoD%2BP3z5kt6fvdJLNKOeM6a4SBTYXlxbmyhyEUGtV%2B062gHjJXWF%2F%2F7%2Fk%2BvEHvITxNuhKBZ%2BVDneUPFTNLNVpdAPlICiLs0T6sON4UW0LE2RkjorRzkWVeEfni3B9x0Ges%2F3HyYZS9taR%2FUHpZi0rvnoW%2FCovCGIPqAWj0UzN1TBv%2B608ptgV9yjwzJ5MoiJvHaN9hleoezGWemg9Agxgo0Zo2MbyieWeFPEtXuMZZMO%2FstsAGOqUBrIrdFWVxtj9D1xur2gLKtjrh3%2Fr3dTijcwgMt0cKNgeVYNws82HfeAv9QW59Stksl0c4yxtTDvLzJHUChJ8T5UclszTArebORxrYpOM7ZPJ1AVFWRDUXA7gH2CYYQtgxguB1Fx%2BkStYdPmjvl6VkKHBRP%2FDkYQ5v%2FA3nyKc%2BI43NU06RK3j10H5RwSidFAAwCFGrTNHfhrbU1P1RwoHB3exT5J7K&X-Amz-Signature=6eada8795bb75b55e22d0aaf74d83f96be02d345a5fb5c8bcc671ecf44648e11&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q5S5QAD%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T061113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCTd6eZThviOvNqCx8I5X6d6hMeuIlP7jhJa5mIakifQIgecC4%2Bpe4hq9thmqFEEZ%2Bf2%2B7%2FVON5CT5wbXvkMUts6sq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDMJM5a7cOXT5YGCGxSrcA9ULB84bOTJD34FGuwmGufQjFg2pLpeS3pPsVq0ipSmqjc3%2FKygnYl6e59h0tbMpZDbFepKeJp%2BXFnZMQ5lKUO7Kos1%2FEHCYA%2FaeN9gcLc2rmey8qMrtFmHFSkqYcoHHKPm83edWDgzHnzEebNt9Wq%2FC4T8SPygmv3KBm7hoye%2FHXjFXTZS815rzpBWJ8TEo9YqkfAKUGo2K5pBNB24VSHhYS0mbQS5LV9iDk9TdN5iBpEuzEylMpIsOHUezpSpXQSp7oF2HIXMbLI%2Flo7CRhv6DULYlNIGKClF3LYfFFS9TpmxHxABwstOsVGWn95v8eW7UEVoEgp%2Fd5iTX%2B0OyQr1oGmknMvqWfdcBrhv8i8P6t6kXhmnVPK2OoScE%2FLt%2BQ0anURcHOAPdfXNZ9AwoD%2BP3z5kt6fvdJLNKOeM6a4SBTYXlxbmyhyEUGtV%2B062gHjJXWF%2F%2F7%2Fk%2BvEHvITxNuhKBZ%2BVDneUPFTNLNVpdAPlICiLs0T6sON4UW0LE2RkjorRzkWVeEfni3B9x0Ges%2F3HyYZS9taR%2FUHpZi0rvnoW%2FCovCGIPqAWj0UzN1TBv%2B608ptgV9yjwzJ5MoiJvHaN9hleoezGWemg9Agxgo0Zo2MbyieWeFPEtXuMZZMO%2FstsAGOqUBrIrdFWVxtj9D1xur2gLKtjrh3%2Fr3dTijcwgMt0cKNgeVYNws82HfeAv9QW59Stksl0c4yxtTDvLzJHUChJ8T5UclszTArebORxrYpOM7ZPJ1AVFWRDUXA7gH2CYYQtgxguB1Fx%2BkStYdPmjvl6VkKHBRP%2FDkYQ5v%2FA3nyKc%2BI43NU06RK3j10H5RwSidFAAwCFGrTNHfhrbU1P1RwoHB3exT5J7K&X-Amz-Signature=373dafbe85e83aef7dd69f4f9a523caa9feaae961351103e9b1dde214584ef0e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q5S5QAD%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T061113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCTd6eZThviOvNqCx8I5X6d6hMeuIlP7jhJa5mIakifQIgecC4%2Bpe4hq9thmqFEEZ%2Bf2%2B7%2FVON5CT5wbXvkMUts6sq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDMJM5a7cOXT5YGCGxSrcA9ULB84bOTJD34FGuwmGufQjFg2pLpeS3pPsVq0ipSmqjc3%2FKygnYl6e59h0tbMpZDbFepKeJp%2BXFnZMQ5lKUO7Kos1%2FEHCYA%2FaeN9gcLc2rmey8qMrtFmHFSkqYcoHHKPm83edWDgzHnzEebNt9Wq%2FC4T8SPygmv3KBm7hoye%2FHXjFXTZS815rzpBWJ8TEo9YqkfAKUGo2K5pBNB24VSHhYS0mbQS5LV9iDk9TdN5iBpEuzEylMpIsOHUezpSpXQSp7oF2HIXMbLI%2Flo7CRhv6DULYlNIGKClF3LYfFFS9TpmxHxABwstOsVGWn95v8eW7UEVoEgp%2Fd5iTX%2B0OyQr1oGmknMvqWfdcBrhv8i8P6t6kXhmnVPK2OoScE%2FLt%2BQ0anURcHOAPdfXNZ9AwoD%2BP3z5kt6fvdJLNKOeM6a4SBTYXlxbmyhyEUGtV%2B062gHjJXWF%2F%2F7%2Fk%2BvEHvITxNuhKBZ%2BVDneUPFTNLNVpdAPlICiLs0T6sON4UW0LE2RkjorRzkWVeEfni3B9x0Ges%2F3HyYZS9taR%2FUHpZi0rvnoW%2FCovCGIPqAWj0UzN1TBv%2B608ptgV9yjwzJ5MoiJvHaN9hleoezGWemg9Agxgo0Zo2MbyieWeFPEtXuMZZMO%2FstsAGOqUBrIrdFWVxtj9D1xur2gLKtjrh3%2Fr3dTijcwgMt0cKNgeVYNws82HfeAv9QW59Stksl0c4yxtTDvLzJHUChJ8T5UclszTArebORxrYpOM7ZPJ1AVFWRDUXA7gH2CYYQtgxguB1Fx%2BkStYdPmjvl6VkKHBRP%2FDkYQ5v%2FA3nyKc%2BI43NU06RK3j10H5RwSidFAAwCFGrTNHfhrbU1P1RwoHB3exT5J7K&X-Amz-Signature=9b2eed6f65b6801de9b5f97e87456fe2844fad309bed73fba513a10d5d194c55&X-Amz-SignedHeaders=host&x-id=GetObject)
