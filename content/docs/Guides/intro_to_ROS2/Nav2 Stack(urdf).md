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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZZXQGJK%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIBU5mLwxJlkjEXtBAGmDBsLR7tgPkakoNQRJ2O%2F5Drn7AiEAnXafCYzBBI44fE6DXPnXKucHSQ8e89eEYF9LEZ1VTNsq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDODr9QHtnN0mumxZcyrcA68Vq5J%2B2tZV%2BC17bjATHy1kIikz5NQpygBo7CLRY5xzIAT2264%2Buo0mppS3zOVRdiU95QbAaxChUSJXNRcdMzfkLXQbL3vQHv7gsVbjsPfayNlF3mLClrU03o%2Bq%2B3h3%2BRGhrlY3Tndf5BXYU4mb8dbRAVYBtdGhxJExrHFXMHe945bOxCuKcqRtBILLgTmsze%2BwJZAVA39GCYGHeUD0fcNurFlok64dk4cH83J7%2BBOYvBA6VSI2u4I7ZrpPdaN0SuDtwjPZL365lrMY4KDYW%2BuhDgnmROknhJzqpdTcSgoKjJsy7ouLjvyR2D9yfvbLn5xhlubR0Qi41fEfE2kCqkbAzYA6bnS4Z8JWwfh3j%2FFcBxeK0fhLweomtMjBRTrf8Du9M8pGC6Yk91BV74j2%2FNkzJHD%2FDEUrVUlJtGXe6NBGZ825LVabRYRsFIHdlWTq1jtTPYZtSnguJ79YCcPMh84tSG%2B1flo5iEW0xuYA85sA8RqwgIBahxbFVSpDOKKcEeF2DVhrNO7VO%2FQteM9xKvXdkGlMlKWOWj%2B7YXOC13a3I%2Fse2uDAzazj6D1GKrS%2F7FFnL0HVEGWkUIT7NAPs0WMkLbWkAU2imYv0SRLk9p%2FTiarR%2FJhGMpCoeAX0MN2w574GOqUBHBPM9UGGo%2FVGyfQ4OH2%2F7I9nZeHNV7RoLfCMmNIyfalqewSD%2BkHc%2BhFdEX6ShB07lWqwX7xZRC4wyGkdW3r70oV03sN18BSE2U3l7cjdfuItylJuJbCCZpYacMSsqfTfPeuGJ6Uh3Gr4S7uc3P%2FxyXdn%2F1Cz9G8scufbI8bhcnoEpcstjx9B%2BpVQVyJDjcilOgiccy5jCVZlzLpNSPuoqiNCy2EW&X-Amz-Signature=a21d391ca527b28e86eec54eab85300da2a63ee5a991b6117c9fc6d3f8fcf86a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZZXQGJK%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIBU5mLwxJlkjEXtBAGmDBsLR7tgPkakoNQRJ2O%2F5Drn7AiEAnXafCYzBBI44fE6DXPnXKucHSQ8e89eEYF9LEZ1VTNsq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDODr9QHtnN0mumxZcyrcA68Vq5J%2B2tZV%2BC17bjATHy1kIikz5NQpygBo7CLRY5xzIAT2264%2Buo0mppS3zOVRdiU95QbAaxChUSJXNRcdMzfkLXQbL3vQHv7gsVbjsPfayNlF3mLClrU03o%2Bq%2B3h3%2BRGhrlY3Tndf5BXYU4mb8dbRAVYBtdGhxJExrHFXMHe945bOxCuKcqRtBILLgTmsze%2BwJZAVA39GCYGHeUD0fcNurFlok64dk4cH83J7%2BBOYvBA6VSI2u4I7ZrpPdaN0SuDtwjPZL365lrMY4KDYW%2BuhDgnmROknhJzqpdTcSgoKjJsy7ouLjvyR2D9yfvbLn5xhlubR0Qi41fEfE2kCqkbAzYA6bnS4Z8JWwfh3j%2FFcBxeK0fhLweomtMjBRTrf8Du9M8pGC6Yk91BV74j2%2FNkzJHD%2FDEUrVUlJtGXe6NBGZ825LVabRYRsFIHdlWTq1jtTPYZtSnguJ79YCcPMh84tSG%2B1flo5iEW0xuYA85sA8RqwgIBahxbFVSpDOKKcEeF2DVhrNO7VO%2FQteM9xKvXdkGlMlKWOWj%2B7YXOC13a3I%2Fse2uDAzazj6D1GKrS%2F7FFnL0HVEGWkUIT7NAPs0WMkLbWkAU2imYv0SRLk9p%2FTiarR%2FJhGMpCoeAX0MN2w574GOqUBHBPM9UGGo%2FVGyfQ4OH2%2F7I9nZeHNV7RoLfCMmNIyfalqewSD%2BkHc%2BhFdEX6ShB07lWqwX7xZRC4wyGkdW3r70oV03sN18BSE2U3l7cjdfuItylJuJbCCZpYacMSsqfTfPeuGJ6Uh3Gr4S7uc3P%2FxyXdn%2F1Cz9G8scufbI8bhcnoEpcstjx9B%2BpVQVyJDjcilOgiccy5jCVZlzLpNSPuoqiNCy2EW&X-Amz-Signature=803604f73abf8f7570084d892be65a70e9c7c2f54e2ec142fa62a95c4573ea42&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZZXQGJK%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIBU5mLwxJlkjEXtBAGmDBsLR7tgPkakoNQRJ2O%2F5Drn7AiEAnXafCYzBBI44fE6DXPnXKucHSQ8e89eEYF9LEZ1VTNsq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDODr9QHtnN0mumxZcyrcA68Vq5J%2B2tZV%2BC17bjATHy1kIikz5NQpygBo7CLRY5xzIAT2264%2Buo0mppS3zOVRdiU95QbAaxChUSJXNRcdMzfkLXQbL3vQHv7gsVbjsPfayNlF3mLClrU03o%2Bq%2B3h3%2BRGhrlY3Tndf5BXYU4mb8dbRAVYBtdGhxJExrHFXMHe945bOxCuKcqRtBILLgTmsze%2BwJZAVA39GCYGHeUD0fcNurFlok64dk4cH83J7%2BBOYvBA6VSI2u4I7ZrpPdaN0SuDtwjPZL365lrMY4KDYW%2BuhDgnmROknhJzqpdTcSgoKjJsy7ouLjvyR2D9yfvbLn5xhlubR0Qi41fEfE2kCqkbAzYA6bnS4Z8JWwfh3j%2FFcBxeK0fhLweomtMjBRTrf8Du9M8pGC6Yk91BV74j2%2FNkzJHD%2FDEUrVUlJtGXe6NBGZ825LVabRYRsFIHdlWTq1jtTPYZtSnguJ79YCcPMh84tSG%2B1flo5iEW0xuYA85sA8RqwgIBahxbFVSpDOKKcEeF2DVhrNO7VO%2FQteM9xKvXdkGlMlKWOWj%2B7YXOC13a3I%2Fse2uDAzazj6D1GKrS%2F7FFnL0HVEGWkUIT7NAPs0WMkLbWkAU2imYv0SRLk9p%2FTiarR%2FJhGMpCoeAX0MN2w574GOqUBHBPM9UGGo%2FVGyfQ4OH2%2F7I9nZeHNV7RoLfCMmNIyfalqewSD%2BkHc%2BhFdEX6ShB07lWqwX7xZRC4wyGkdW3r70oV03sN18BSE2U3l7cjdfuItylJuJbCCZpYacMSsqfTfPeuGJ6Uh3Gr4S7uc3P%2FxyXdn%2F1Cz9G8scufbI8bhcnoEpcstjx9B%2BpVQVyJDjcilOgiccy5jCVZlzLpNSPuoqiNCy2EW&X-Amz-Signature=4694c764b2ebfaf111aaff4dda5050331ed3620b8c5031c1bb0e628e5e929317&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZZXQGJK%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIBU5mLwxJlkjEXtBAGmDBsLR7tgPkakoNQRJ2O%2F5Drn7AiEAnXafCYzBBI44fE6DXPnXKucHSQ8e89eEYF9LEZ1VTNsq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDODr9QHtnN0mumxZcyrcA68Vq5J%2B2tZV%2BC17bjATHy1kIikz5NQpygBo7CLRY5xzIAT2264%2Buo0mppS3zOVRdiU95QbAaxChUSJXNRcdMzfkLXQbL3vQHv7gsVbjsPfayNlF3mLClrU03o%2Bq%2B3h3%2BRGhrlY3Tndf5BXYU4mb8dbRAVYBtdGhxJExrHFXMHe945bOxCuKcqRtBILLgTmsze%2BwJZAVA39GCYGHeUD0fcNurFlok64dk4cH83J7%2BBOYvBA6VSI2u4I7ZrpPdaN0SuDtwjPZL365lrMY4KDYW%2BuhDgnmROknhJzqpdTcSgoKjJsy7ouLjvyR2D9yfvbLn5xhlubR0Qi41fEfE2kCqkbAzYA6bnS4Z8JWwfh3j%2FFcBxeK0fhLweomtMjBRTrf8Du9M8pGC6Yk91BV74j2%2FNkzJHD%2FDEUrVUlJtGXe6NBGZ825LVabRYRsFIHdlWTq1jtTPYZtSnguJ79YCcPMh84tSG%2B1flo5iEW0xuYA85sA8RqwgIBahxbFVSpDOKKcEeF2DVhrNO7VO%2FQteM9xKvXdkGlMlKWOWj%2B7YXOC13a3I%2Fse2uDAzazj6D1GKrS%2F7FFnL0HVEGWkUIT7NAPs0WMkLbWkAU2imYv0SRLk9p%2FTiarR%2FJhGMpCoeAX0MN2w574GOqUBHBPM9UGGo%2FVGyfQ4OH2%2F7I9nZeHNV7RoLfCMmNIyfalqewSD%2BkHc%2BhFdEX6ShB07lWqwX7xZRC4wyGkdW3r70oV03sN18BSE2U3l7cjdfuItylJuJbCCZpYacMSsqfTfPeuGJ6Uh3Gr4S7uc3P%2FxyXdn%2F1Cz9G8scufbI8bhcnoEpcstjx9B%2BpVQVyJDjcilOgiccy5jCVZlzLpNSPuoqiNCy2EW&X-Amz-Signature=06d4ad05470bc7f1f3a2a8a448d5b7428f72a8672f0faf92d60c916907b9274c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZZXQGJK%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIBU5mLwxJlkjEXtBAGmDBsLR7tgPkakoNQRJ2O%2F5Drn7AiEAnXafCYzBBI44fE6DXPnXKucHSQ8e89eEYF9LEZ1VTNsq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDODr9QHtnN0mumxZcyrcA68Vq5J%2B2tZV%2BC17bjATHy1kIikz5NQpygBo7CLRY5xzIAT2264%2Buo0mppS3zOVRdiU95QbAaxChUSJXNRcdMzfkLXQbL3vQHv7gsVbjsPfayNlF3mLClrU03o%2Bq%2B3h3%2BRGhrlY3Tndf5BXYU4mb8dbRAVYBtdGhxJExrHFXMHe945bOxCuKcqRtBILLgTmsze%2BwJZAVA39GCYGHeUD0fcNurFlok64dk4cH83J7%2BBOYvBA6VSI2u4I7ZrpPdaN0SuDtwjPZL365lrMY4KDYW%2BuhDgnmROknhJzqpdTcSgoKjJsy7ouLjvyR2D9yfvbLn5xhlubR0Qi41fEfE2kCqkbAzYA6bnS4Z8JWwfh3j%2FFcBxeK0fhLweomtMjBRTrf8Du9M8pGC6Yk91BV74j2%2FNkzJHD%2FDEUrVUlJtGXe6NBGZ825LVabRYRsFIHdlWTq1jtTPYZtSnguJ79YCcPMh84tSG%2B1flo5iEW0xuYA85sA8RqwgIBahxbFVSpDOKKcEeF2DVhrNO7VO%2FQteM9xKvXdkGlMlKWOWj%2B7YXOC13a3I%2Fse2uDAzazj6D1GKrS%2F7FFnL0HVEGWkUIT7NAPs0WMkLbWkAU2imYv0SRLk9p%2FTiarR%2FJhGMpCoeAX0MN2w574GOqUBHBPM9UGGo%2FVGyfQ4OH2%2F7I9nZeHNV7RoLfCMmNIyfalqewSD%2BkHc%2BhFdEX6ShB07lWqwX7xZRC4wyGkdW3r70oV03sN18BSE2U3l7cjdfuItylJuJbCCZpYacMSsqfTfPeuGJ6Uh3Gr4S7uc3P%2FxyXdn%2F1Cz9G8scufbI8bhcnoEpcstjx9B%2BpVQVyJDjcilOgiccy5jCVZlzLpNSPuoqiNCy2EW&X-Amz-Signature=cda554c631a2c38131dcf0f59bee5ce7f1c62ec757017099b1c8eedb3970af8e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZZXQGJK%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T220738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIBU5mLwxJlkjEXtBAGmDBsLR7tgPkakoNQRJ2O%2F5Drn7AiEAnXafCYzBBI44fE6DXPnXKucHSQ8e89eEYF9LEZ1VTNsq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDODr9QHtnN0mumxZcyrcA68Vq5J%2B2tZV%2BC17bjATHy1kIikz5NQpygBo7CLRY5xzIAT2264%2Buo0mppS3zOVRdiU95QbAaxChUSJXNRcdMzfkLXQbL3vQHv7gsVbjsPfayNlF3mLClrU03o%2Bq%2B3h3%2BRGhrlY3Tndf5BXYU4mb8dbRAVYBtdGhxJExrHFXMHe945bOxCuKcqRtBILLgTmsze%2BwJZAVA39GCYGHeUD0fcNurFlok64dk4cH83J7%2BBOYvBA6VSI2u4I7ZrpPdaN0SuDtwjPZL365lrMY4KDYW%2BuhDgnmROknhJzqpdTcSgoKjJsy7ouLjvyR2D9yfvbLn5xhlubR0Qi41fEfE2kCqkbAzYA6bnS4Z8JWwfh3j%2FFcBxeK0fhLweomtMjBRTrf8Du9M8pGC6Yk91BV74j2%2FNkzJHD%2FDEUrVUlJtGXe6NBGZ825LVabRYRsFIHdlWTq1jtTPYZtSnguJ79YCcPMh84tSG%2B1flo5iEW0xuYA85sA8RqwgIBahxbFVSpDOKKcEeF2DVhrNO7VO%2FQteM9xKvXdkGlMlKWOWj%2B7YXOC13a3I%2Fse2uDAzazj6D1GKrS%2F7FFnL0HVEGWkUIT7NAPs0WMkLbWkAU2imYv0SRLk9p%2FTiarR%2FJhGMpCoeAX0MN2w574GOqUBHBPM9UGGo%2FVGyfQ4OH2%2F7I9nZeHNV7RoLfCMmNIyfalqewSD%2BkHc%2BhFdEX6ShB07lWqwX7xZRC4wyGkdW3r70oV03sN18BSE2U3l7cjdfuItylJuJbCCZpYacMSsqfTfPeuGJ6Uh3Gr4S7uc3P%2FxyXdn%2F1Cz9G8scufbI8bhcnoEpcstjx9B%2BpVQVyJDjcilOgiccy5jCVZlzLpNSPuoqiNCy2EW&X-Amz-Signature=4efa793fc5d38a6ca0c506a4a7287e55d303be1e06e81e454ac42058f3e06426&X-Amz-SignedHeaders=host&x-id=GetObject)
