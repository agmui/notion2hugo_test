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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEYNGQKN%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T132047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdAk9xj0LVgzp%2FeTJPWe99K8l4VintnW%2B0s%2FnDrk4zqwIgETHGEpgMxso2qXO%2FXuUEIDKq1v%2FZGUiOLl2FhGSXspwqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFsSwqzhtwjcqJusyrcA0qwyGCFiP4ay2ZJfcDFkI1T39GD0M1vXoabrReJt1Nuc%2Bzm7TuD4PdXCesY2RsVsgFZCzP0pu6wYjdjqLaUVYq0ZteRtYthb7XeP2zGm%2BIbtI9%2F2ZPql%2B4DgjGN20YXOzZ4WzHyFzGzGGjMSH2nMBc39Sndb7BvNZDFPi1aJzzpoZFq2Bdlz6HJD27TvaAQRUm9eLfa6OR52wmyfzzVJfS1aU6TMNYK7PvpWuXWfLgfAM7qOxPLSAr1Rbh6Yspw6jsziqAgUycGBERClc4Wl0aNEn1Q9OImS017RSFiwAjY4uPB0t4mAGEfq2cT5xqjQWHuQMaEl%2Fsl2XvZvkzSaB8neYMIHF4oQdmmNLAE8%2Fawd8x7KOj%2Ft10qAzbVkm3iC9VcPPGaOHoNQTDCrMHvYiefdgVIKHyj6LamVNCn8KDyp%2B5lwqCPzsEopJ%2BL29JHqO9idxo5a0m4aQXixksKfq43nNlwF9q9o1FlYSeLMtrP%2BXON9Vt9p3QgyD%2FzxStfXvQFysqGrD57G4W0N%2FkianwuMnBMUjhm0T84kCxs6XrNNRhcwLn1QyC4vUBy877ZBr3jnetxhgcJoBGyEPf7DcsFAqdGcYawyHalrGbGPTRVgQci%2BpCkoC%2B3rENmMI39yMMGOqUB5tFJgAygBj9RIPOvNfpBy6LW1hsxvzxzySDNX%2B5yRnnuJifkn%2BJ5tFB5tcv8kGb5cr6YJCH1nzcKN7DYwBOrQBLnz0gN%2FClDmDJULK%2Blt5f5Fh8aNezS3KpqWI%2FBQ%2FDaKH6NO3ZV%2BdpQBwxD1v97dO9wElf7V7mp7bA6vlJmz2sVi%2FBoEZk0Kw%2BNyl2EiaPEWW8%2B1%2Fx43WLGILPLqwBh%2BeEsWi5o&X-Amz-Signature=92eff7f0019bf0e2f9191eb073e746e203d18e125f96c61dca0f6ec3b06be142&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEYNGQKN%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T132047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdAk9xj0LVgzp%2FeTJPWe99K8l4VintnW%2B0s%2FnDrk4zqwIgETHGEpgMxso2qXO%2FXuUEIDKq1v%2FZGUiOLl2FhGSXspwqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFsSwqzhtwjcqJusyrcA0qwyGCFiP4ay2ZJfcDFkI1T39GD0M1vXoabrReJt1Nuc%2Bzm7TuD4PdXCesY2RsVsgFZCzP0pu6wYjdjqLaUVYq0ZteRtYthb7XeP2zGm%2BIbtI9%2F2ZPql%2B4DgjGN20YXOzZ4WzHyFzGzGGjMSH2nMBc39Sndb7BvNZDFPi1aJzzpoZFq2Bdlz6HJD27TvaAQRUm9eLfa6OR52wmyfzzVJfS1aU6TMNYK7PvpWuXWfLgfAM7qOxPLSAr1Rbh6Yspw6jsziqAgUycGBERClc4Wl0aNEn1Q9OImS017RSFiwAjY4uPB0t4mAGEfq2cT5xqjQWHuQMaEl%2Fsl2XvZvkzSaB8neYMIHF4oQdmmNLAE8%2Fawd8x7KOj%2Ft10qAzbVkm3iC9VcPPGaOHoNQTDCrMHvYiefdgVIKHyj6LamVNCn8KDyp%2B5lwqCPzsEopJ%2BL29JHqO9idxo5a0m4aQXixksKfq43nNlwF9q9o1FlYSeLMtrP%2BXON9Vt9p3QgyD%2FzxStfXvQFysqGrD57G4W0N%2FkianwuMnBMUjhm0T84kCxs6XrNNRhcwLn1QyC4vUBy877ZBr3jnetxhgcJoBGyEPf7DcsFAqdGcYawyHalrGbGPTRVgQci%2BpCkoC%2B3rENmMI39yMMGOqUB5tFJgAygBj9RIPOvNfpBy6LW1hsxvzxzySDNX%2B5yRnnuJifkn%2BJ5tFB5tcv8kGb5cr6YJCH1nzcKN7DYwBOrQBLnz0gN%2FClDmDJULK%2Blt5f5Fh8aNezS3KpqWI%2FBQ%2FDaKH6NO3ZV%2BdpQBwxD1v97dO9wElf7V7mp7bA6vlJmz2sVi%2FBoEZk0Kw%2BNyl2EiaPEWW8%2B1%2Fx43WLGILPLqwBh%2BeEsWi5o&X-Amz-Signature=5500fc4a76070bc828bb7fe489456b7a4fd9e7613fc0f462e5474e2e5f13ada9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEYNGQKN%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T132047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdAk9xj0LVgzp%2FeTJPWe99K8l4VintnW%2B0s%2FnDrk4zqwIgETHGEpgMxso2qXO%2FXuUEIDKq1v%2FZGUiOLl2FhGSXspwqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFsSwqzhtwjcqJusyrcA0qwyGCFiP4ay2ZJfcDFkI1T39GD0M1vXoabrReJt1Nuc%2Bzm7TuD4PdXCesY2RsVsgFZCzP0pu6wYjdjqLaUVYq0ZteRtYthb7XeP2zGm%2BIbtI9%2F2ZPql%2B4DgjGN20YXOzZ4WzHyFzGzGGjMSH2nMBc39Sndb7BvNZDFPi1aJzzpoZFq2Bdlz6HJD27TvaAQRUm9eLfa6OR52wmyfzzVJfS1aU6TMNYK7PvpWuXWfLgfAM7qOxPLSAr1Rbh6Yspw6jsziqAgUycGBERClc4Wl0aNEn1Q9OImS017RSFiwAjY4uPB0t4mAGEfq2cT5xqjQWHuQMaEl%2Fsl2XvZvkzSaB8neYMIHF4oQdmmNLAE8%2Fawd8x7KOj%2Ft10qAzbVkm3iC9VcPPGaOHoNQTDCrMHvYiefdgVIKHyj6LamVNCn8KDyp%2B5lwqCPzsEopJ%2BL29JHqO9idxo5a0m4aQXixksKfq43nNlwF9q9o1FlYSeLMtrP%2BXON9Vt9p3QgyD%2FzxStfXvQFysqGrD57G4W0N%2FkianwuMnBMUjhm0T84kCxs6XrNNRhcwLn1QyC4vUBy877ZBr3jnetxhgcJoBGyEPf7DcsFAqdGcYawyHalrGbGPTRVgQci%2BpCkoC%2B3rENmMI39yMMGOqUB5tFJgAygBj9RIPOvNfpBy6LW1hsxvzxzySDNX%2B5yRnnuJifkn%2BJ5tFB5tcv8kGb5cr6YJCH1nzcKN7DYwBOrQBLnz0gN%2FClDmDJULK%2Blt5f5Fh8aNezS3KpqWI%2FBQ%2FDaKH6NO3ZV%2BdpQBwxD1v97dO9wElf7V7mp7bA6vlJmz2sVi%2FBoEZk0Kw%2BNyl2EiaPEWW8%2B1%2Fx43WLGILPLqwBh%2BeEsWi5o&X-Amz-Signature=99389a39f3d6419090bff6d6c59ee63507ecf97a090c4fb1b37bbd2b7a42140b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEYNGQKN%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T132047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdAk9xj0LVgzp%2FeTJPWe99K8l4VintnW%2B0s%2FnDrk4zqwIgETHGEpgMxso2qXO%2FXuUEIDKq1v%2FZGUiOLl2FhGSXspwqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFsSwqzhtwjcqJusyrcA0qwyGCFiP4ay2ZJfcDFkI1T39GD0M1vXoabrReJt1Nuc%2Bzm7TuD4PdXCesY2RsVsgFZCzP0pu6wYjdjqLaUVYq0ZteRtYthb7XeP2zGm%2BIbtI9%2F2ZPql%2B4DgjGN20YXOzZ4WzHyFzGzGGjMSH2nMBc39Sndb7BvNZDFPi1aJzzpoZFq2Bdlz6HJD27TvaAQRUm9eLfa6OR52wmyfzzVJfS1aU6TMNYK7PvpWuXWfLgfAM7qOxPLSAr1Rbh6Yspw6jsziqAgUycGBERClc4Wl0aNEn1Q9OImS017RSFiwAjY4uPB0t4mAGEfq2cT5xqjQWHuQMaEl%2Fsl2XvZvkzSaB8neYMIHF4oQdmmNLAE8%2Fawd8x7KOj%2Ft10qAzbVkm3iC9VcPPGaOHoNQTDCrMHvYiefdgVIKHyj6LamVNCn8KDyp%2B5lwqCPzsEopJ%2BL29JHqO9idxo5a0m4aQXixksKfq43nNlwF9q9o1FlYSeLMtrP%2BXON9Vt9p3QgyD%2FzxStfXvQFysqGrD57G4W0N%2FkianwuMnBMUjhm0T84kCxs6XrNNRhcwLn1QyC4vUBy877ZBr3jnetxhgcJoBGyEPf7DcsFAqdGcYawyHalrGbGPTRVgQci%2BpCkoC%2B3rENmMI39yMMGOqUB5tFJgAygBj9RIPOvNfpBy6LW1hsxvzxzySDNX%2B5yRnnuJifkn%2BJ5tFB5tcv8kGb5cr6YJCH1nzcKN7DYwBOrQBLnz0gN%2FClDmDJULK%2Blt5f5Fh8aNezS3KpqWI%2FBQ%2FDaKH6NO3ZV%2BdpQBwxD1v97dO9wElf7V7mp7bA6vlJmz2sVi%2FBoEZk0Kw%2BNyl2EiaPEWW8%2B1%2Fx43WLGILPLqwBh%2BeEsWi5o&X-Amz-Signature=64c2b357a6a9934c23caab575991a282a31b50294d857c02e5e30c541ac4108c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEYNGQKN%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T132047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdAk9xj0LVgzp%2FeTJPWe99K8l4VintnW%2B0s%2FnDrk4zqwIgETHGEpgMxso2qXO%2FXuUEIDKq1v%2FZGUiOLl2FhGSXspwqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFsSwqzhtwjcqJusyrcA0qwyGCFiP4ay2ZJfcDFkI1T39GD0M1vXoabrReJt1Nuc%2Bzm7TuD4PdXCesY2RsVsgFZCzP0pu6wYjdjqLaUVYq0ZteRtYthb7XeP2zGm%2BIbtI9%2F2ZPql%2B4DgjGN20YXOzZ4WzHyFzGzGGjMSH2nMBc39Sndb7BvNZDFPi1aJzzpoZFq2Bdlz6HJD27TvaAQRUm9eLfa6OR52wmyfzzVJfS1aU6TMNYK7PvpWuXWfLgfAM7qOxPLSAr1Rbh6Yspw6jsziqAgUycGBERClc4Wl0aNEn1Q9OImS017RSFiwAjY4uPB0t4mAGEfq2cT5xqjQWHuQMaEl%2Fsl2XvZvkzSaB8neYMIHF4oQdmmNLAE8%2Fawd8x7KOj%2Ft10qAzbVkm3iC9VcPPGaOHoNQTDCrMHvYiefdgVIKHyj6LamVNCn8KDyp%2B5lwqCPzsEopJ%2BL29JHqO9idxo5a0m4aQXixksKfq43nNlwF9q9o1FlYSeLMtrP%2BXON9Vt9p3QgyD%2FzxStfXvQFysqGrD57G4W0N%2FkianwuMnBMUjhm0T84kCxs6XrNNRhcwLn1QyC4vUBy877ZBr3jnetxhgcJoBGyEPf7DcsFAqdGcYawyHalrGbGPTRVgQci%2BpCkoC%2B3rENmMI39yMMGOqUB5tFJgAygBj9RIPOvNfpBy6LW1hsxvzxzySDNX%2B5yRnnuJifkn%2BJ5tFB5tcv8kGb5cr6YJCH1nzcKN7DYwBOrQBLnz0gN%2FClDmDJULK%2Blt5f5Fh8aNezS3KpqWI%2FBQ%2FDaKH6NO3ZV%2BdpQBwxD1v97dO9wElf7V7mp7bA6vlJmz2sVi%2FBoEZk0Kw%2BNyl2EiaPEWW8%2B1%2Fx43WLGILPLqwBh%2BeEsWi5o&X-Amz-Signature=018091e7add82fbeea716ad31c20ffa5676fe8645a3f3527605cd025e7ecbf5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEYNGQKN%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T132047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdAk9xj0LVgzp%2FeTJPWe99K8l4VintnW%2B0s%2FnDrk4zqwIgETHGEpgMxso2qXO%2FXuUEIDKq1v%2FZGUiOLl2FhGSXspwqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFsSwqzhtwjcqJusyrcA0qwyGCFiP4ay2ZJfcDFkI1T39GD0M1vXoabrReJt1Nuc%2Bzm7TuD4PdXCesY2RsVsgFZCzP0pu6wYjdjqLaUVYq0ZteRtYthb7XeP2zGm%2BIbtI9%2F2ZPql%2B4DgjGN20YXOzZ4WzHyFzGzGGjMSH2nMBc39Sndb7BvNZDFPi1aJzzpoZFq2Bdlz6HJD27TvaAQRUm9eLfa6OR52wmyfzzVJfS1aU6TMNYK7PvpWuXWfLgfAM7qOxPLSAr1Rbh6Yspw6jsziqAgUycGBERClc4Wl0aNEn1Q9OImS017RSFiwAjY4uPB0t4mAGEfq2cT5xqjQWHuQMaEl%2Fsl2XvZvkzSaB8neYMIHF4oQdmmNLAE8%2Fawd8x7KOj%2Ft10qAzbVkm3iC9VcPPGaOHoNQTDCrMHvYiefdgVIKHyj6LamVNCn8KDyp%2B5lwqCPzsEopJ%2BL29JHqO9idxo5a0m4aQXixksKfq43nNlwF9q9o1FlYSeLMtrP%2BXON9Vt9p3QgyD%2FzxStfXvQFysqGrD57G4W0N%2FkianwuMnBMUjhm0T84kCxs6XrNNRhcwLn1QyC4vUBy877ZBr3jnetxhgcJoBGyEPf7DcsFAqdGcYawyHalrGbGPTRVgQci%2BpCkoC%2B3rENmMI39yMMGOqUB5tFJgAygBj9RIPOvNfpBy6LW1hsxvzxzySDNX%2B5yRnnuJifkn%2BJ5tFB5tcv8kGb5cr6YJCH1nzcKN7DYwBOrQBLnz0gN%2FClDmDJULK%2Blt5f5Fh8aNezS3KpqWI%2FBQ%2FDaKH6NO3ZV%2BdpQBwxD1v97dO9wElf7V7mp7bA6vlJmz2sVi%2FBoEZk0Kw%2BNyl2EiaPEWW8%2B1%2Fx43WLGILPLqwBh%2BeEsWi5o&X-Amz-Signature=811b765ff0303fe62e26f057b767e6696ec5a18062e3f3e6ab77cd81cc0d49f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
