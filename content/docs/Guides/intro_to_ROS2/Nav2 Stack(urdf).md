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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2VRZVKX%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T091040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzq6TmTdUsvauRQuCNMVzux%2Fp8yvSfneKOUYmSAcCVlAiEAlQa4Q%2BlyfLFBhWHY4PfT8%2Bm31i%2BM6DTdsXu3TK%2B39CIq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDEMOtv1L3ZX4NTT23SrcAyrBTjaQphWLF7ZVBs2QjHuhnAXZEZ3TCLwHvrKW5e6TEwgHphQiY5YMSKHKr6TzqswTEE2NaWeTiRVuEsXhgvF18tY4DPQ%2F%2FGYR4obkdeR%2FEtvvldgt3HacKmRTx0znrsL2pIg815k6cuJPEcKGau80VUNJgV%2Bm%2F4LCPhbuMEwgRBIFJITZ3OugI2DLO7bTnwmN3MVD2hNa3EvMVEDz3f2v4QnMxHosrg5rSHTmKC2kWcRDyH5mQ3qvMo0JLQsLLC0oWfccp%2BtJlJwZosBzIjN7yqzTtX1vAESfXkUo5C9B3cc7xooCPn7veZmZf2Akl%2FC6GxKjJUofDGUHx13gkPY4u8eYtosBlkTTRnlqSwci9CDJIfhNpmyzb4Pzd%2BI8PKMGMg0gHy6WWGKuDgC5ee9X%2FemQ%2B8dEvKSJBHJy0VPKMHnIOD%2BbIr52knKGzIA296dZNlyFkEGDw3FdMnUf30l6XLXM8gAtffRgZwL9Coq8vDBxWnon41Xu7QY%2FxYdpJlzEjiWN%2F4PO5pXYwmL2ysLZdZIsBxyJK7Ak0C8rjmHkKeDbldtqnUg9c9FilA98RWGC0ppskd8xpUIpvz81C%2BsGbNaDGIr4ZMMY1VouRCNwMfXUKIowkjTH4otWMOLP4cAGOqUBMWtWV97NH%2BG9R1g1EYVk9hdnZ%2BSpdr7OEXtU7yy63L68Mp8tJ9sXNlxzF%2BHldZd2kJXYlD0EuJ6AtTZiMj%2ByOMAOVSPRbvper9RnHJWANYEoqWx2B%2BWUUOXEHTceCFkF%2Fa%2FAIpyXt2s3b5plZEH1EU%2BDuyAaRe9CKbtOFXAAlLmA4AVBBlRj7UHznDhxf2KpEOwN46uMLyidK6XKEZyxRGkJR4LT&X-Amz-Signature=608742037252ab73b6709d018bc3f4663be0821f4cd9d7810b2f6cd77add816e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2VRZVKX%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T091040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzq6TmTdUsvauRQuCNMVzux%2Fp8yvSfneKOUYmSAcCVlAiEAlQa4Q%2BlyfLFBhWHY4PfT8%2Bm31i%2BM6DTdsXu3TK%2B39CIq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDEMOtv1L3ZX4NTT23SrcAyrBTjaQphWLF7ZVBs2QjHuhnAXZEZ3TCLwHvrKW5e6TEwgHphQiY5YMSKHKr6TzqswTEE2NaWeTiRVuEsXhgvF18tY4DPQ%2F%2FGYR4obkdeR%2FEtvvldgt3HacKmRTx0znrsL2pIg815k6cuJPEcKGau80VUNJgV%2Bm%2F4LCPhbuMEwgRBIFJITZ3OugI2DLO7bTnwmN3MVD2hNa3EvMVEDz3f2v4QnMxHosrg5rSHTmKC2kWcRDyH5mQ3qvMo0JLQsLLC0oWfccp%2BtJlJwZosBzIjN7yqzTtX1vAESfXkUo5C9B3cc7xooCPn7veZmZf2Akl%2FC6GxKjJUofDGUHx13gkPY4u8eYtosBlkTTRnlqSwci9CDJIfhNpmyzb4Pzd%2BI8PKMGMg0gHy6WWGKuDgC5ee9X%2FemQ%2B8dEvKSJBHJy0VPKMHnIOD%2BbIr52knKGzIA296dZNlyFkEGDw3FdMnUf30l6XLXM8gAtffRgZwL9Coq8vDBxWnon41Xu7QY%2FxYdpJlzEjiWN%2F4PO5pXYwmL2ysLZdZIsBxyJK7Ak0C8rjmHkKeDbldtqnUg9c9FilA98RWGC0ppskd8xpUIpvz81C%2BsGbNaDGIr4ZMMY1VouRCNwMfXUKIowkjTH4otWMOLP4cAGOqUBMWtWV97NH%2BG9R1g1EYVk9hdnZ%2BSpdr7OEXtU7yy63L68Mp8tJ9sXNlxzF%2BHldZd2kJXYlD0EuJ6AtTZiMj%2ByOMAOVSPRbvper9RnHJWANYEoqWx2B%2BWUUOXEHTceCFkF%2Fa%2FAIpyXt2s3b5plZEH1EU%2BDuyAaRe9CKbtOFXAAlLmA4AVBBlRj7UHznDhxf2KpEOwN46uMLyidK6XKEZyxRGkJR4LT&X-Amz-Signature=c7bc7e78f32f4f0690c38c09bda768e14dafaf325122e0972e9080dd9d484c94&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2VRZVKX%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T091040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzq6TmTdUsvauRQuCNMVzux%2Fp8yvSfneKOUYmSAcCVlAiEAlQa4Q%2BlyfLFBhWHY4PfT8%2Bm31i%2BM6DTdsXu3TK%2B39CIq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDEMOtv1L3ZX4NTT23SrcAyrBTjaQphWLF7ZVBs2QjHuhnAXZEZ3TCLwHvrKW5e6TEwgHphQiY5YMSKHKr6TzqswTEE2NaWeTiRVuEsXhgvF18tY4DPQ%2F%2FGYR4obkdeR%2FEtvvldgt3HacKmRTx0znrsL2pIg815k6cuJPEcKGau80VUNJgV%2Bm%2F4LCPhbuMEwgRBIFJITZ3OugI2DLO7bTnwmN3MVD2hNa3EvMVEDz3f2v4QnMxHosrg5rSHTmKC2kWcRDyH5mQ3qvMo0JLQsLLC0oWfccp%2BtJlJwZosBzIjN7yqzTtX1vAESfXkUo5C9B3cc7xooCPn7veZmZf2Akl%2FC6GxKjJUofDGUHx13gkPY4u8eYtosBlkTTRnlqSwci9CDJIfhNpmyzb4Pzd%2BI8PKMGMg0gHy6WWGKuDgC5ee9X%2FemQ%2B8dEvKSJBHJy0VPKMHnIOD%2BbIr52knKGzIA296dZNlyFkEGDw3FdMnUf30l6XLXM8gAtffRgZwL9Coq8vDBxWnon41Xu7QY%2FxYdpJlzEjiWN%2F4PO5pXYwmL2ysLZdZIsBxyJK7Ak0C8rjmHkKeDbldtqnUg9c9FilA98RWGC0ppskd8xpUIpvz81C%2BsGbNaDGIr4ZMMY1VouRCNwMfXUKIowkjTH4otWMOLP4cAGOqUBMWtWV97NH%2BG9R1g1EYVk9hdnZ%2BSpdr7OEXtU7yy63L68Mp8tJ9sXNlxzF%2BHldZd2kJXYlD0EuJ6AtTZiMj%2ByOMAOVSPRbvper9RnHJWANYEoqWx2B%2BWUUOXEHTceCFkF%2Fa%2FAIpyXt2s3b5plZEH1EU%2BDuyAaRe9CKbtOFXAAlLmA4AVBBlRj7UHznDhxf2KpEOwN46uMLyidK6XKEZyxRGkJR4LT&X-Amz-Signature=0ad63a6e7035052964427a9236fa09996f9743a09b1ec3cd2e50d4b1642b5982&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2VRZVKX%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T091040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzq6TmTdUsvauRQuCNMVzux%2Fp8yvSfneKOUYmSAcCVlAiEAlQa4Q%2BlyfLFBhWHY4PfT8%2Bm31i%2BM6DTdsXu3TK%2B39CIq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDEMOtv1L3ZX4NTT23SrcAyrBTjaQphWLF7ZVBs2QjHuhnAXZEZ3TCLwHvrKW5e6TEwgHphQiY5YMSKHKr6TzqswTEE2NaWeTiRVuEsXhgvF18tY4DPQ%2F%2FGYR4obkdeR%2FEtvvldgt3HacKmRTx0znrsL2pIg815k6cuJPEcKGau80VUNJgV%2Bm%2F4LCPhbuMEwgRBIFJITZ3OugI2DLO7bTnwmN3MVD2hNa3EvMVEDz3f2v4QnMxHosrg5rSHTmKC2kWcRDyH5mQ3qvMo0JLQsLLC0oWfccp%2BtJlJwZosBzIjN7yqzTtX1vAESfXkUo5C9B3cc7xooCPn7veZmZf2Akl%2FC6GxKjJUofDGUHx13gkPY4u8eYtosBlkTTRnlqSwci9CDJIfhNpmyzb4Pzd%2BI8PKMGMg0gHy6WWGKuDgC5ee9X%2FemQ%2B8dEvKSJBHJy0VPKMHnIOD%2BbIr52knKGzIA296dZNlyFkEGDw3FdMnUf30l6XLXM8gAtffRgZwL9Coq8vDBxWnon41Xu7QY%2FxYdpJlzEjiWN%2F4PO5pXYwmL2ysLZdZIsBxyJK7Ak0C8rjmHkKeDbldtqnUg9c9FilA98RWGC0ppskd8xpUIpvz81C%2BsGbNaDGIr4ZMMY1VouRCNwMfXUKIowkjTH4otWMOLP4cAGOqUBMWtWV97NH%2BG9R1g1EYVk9hdnZ%2BSpdr7OEXtU7yy63L68Mp8tJ9sXNlxzF%2BHldZd2kJXYlD0EuJ6AtTZiMj%2ByOMAOVSPRbvper9RnHJWANYEoqWx2B%2BWUUOXEHTceCFkF%2Fa%2FAIpyXt2s3b5plZEH1EU%2BDuyAaRe9CKbtOFXAAlLmA4AVBBlRj7UHznDhxf2KpEOwN46uMLyidK6XKEZyxRGkJR4LT&X-Amz-Signature=3bed898e8843e32e6159dc71fdd1f48e915a0d469a7aba2891dab5144bcc8f59&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2VRZVKX%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T091040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzq6TmTdUsvauRQuCNMVzux%2Fp8yvSfneKOUYmSAcCVlAiEAlQa4Q%2BlyfLFBhWHY4PfT8%2Bm31i%2BM6DTdsXu3TK%2B39CIq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDEMOtv1L3ZX4NTT23SrcAyrBTjaQphWLF7ZVBs2QjHuhnAXZEZ3TCLwHvrKW5e6TEwgHphQiY5YMSKHKr6TzqswTEE2NaWeTiRVuEsXhgvF18tY4DPQ%2F%2FGYR4obkdeR%2FEtvvldgt3HacKmRTx0znrsL2pIg815k6cuJPEcKGau80VUNJgV%2Bm%2F4LCPhbuMEwgRBIFJITZ3OugI2DLO7bTnwmN3MVD2hNa3EvMVEDz3f2v4QnMxHosrg5rSHTmKC2kWcRDyH5mQ3qvMo0JLQsLLC0oWfccp%2BtJlJwZosBzIjN7yqzTtX1vAESfXkUo5C9B3cc7xooCPn7veZmZf2Akl%2FC6GxKjJUofDGUHx13gkPY4u8eYtosBlkTTRnlqSwci9CDJIfhNpmyzb4Pzd%2BI8PKMGMg0gHy6WWGKuDgC5ee9X%2FemQ%2B8dEvKSJBHJy0VPKMHnIOD%2BbIr52knKGzIA296dZNlyFkEGDw3FdMnUf30l6XLXM8gAtffRgZwL9Coq8vDBxWnon41Xu7QY%2FxYdpJlzEjiWN%2F4PO5pXYwmL2ysLZdZIsBxyJK7Ak0C8rjmHkKeDbldtqnUg9c9FilA98RWGC0ppskd8xpUIpvz81C%2BsGbNaDGIr4ZMMY1VouRCNwMfXUKIowkjTH4otWMOLP4cAGOqUBMWtWV97NH%2BG9R1g1EYVk9hdnZ%2BSpdr7OEXtU7yy63L68Mp8tJ9sXNlxzF%2BHldZd2kJXYlD0EuJ6AtTZiMj%2ByOMAOVSPRbvper9RnHJWANYEoqWx2B%2BWUUOXEHTceCFkF%2Fa%2FAIpyXt2s3b5plZEH1EU%2BDuyAaRe9CKbtOFXAAlLmA4AVBBlRj7UHznDhxf2KpEOwN46uMLyidK6XKEZyxRGkJR4LT&X-Amz-Signature=633d7f10be25783df8c02cbe1bcaaf21349521a93a384f37ae791366439a39c7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2VRZVKX%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T091040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHzq6TmTdUsvauRQuCNMVzux%2Fp8yvSfneKOUYmSAcCVlAiEAlQa4Q%2BlyfLFBhWHY4PfT8%2Bm31i%2BM6DTdsXu3TK%2B39CIq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDEMOtv1L3ZX4NTT23SrcAyrBTjaQphWLF7ZVBs2QjHuhnAXZEZ3TCLwHvrKW5e6TEwgHphQiY5YMSKHKr6TzqswTEE2NaWeTiRVuEsXhgvF18tY4DPQ%2F%2FGYR4obkdeR%2FEtvvldgt3HacKmRTx0znrsL2pIg815k6cuJPEcKGau80VUNJgV%2Bm%2F4LCPhbuMEwgRBIFJITZ3OugI2DLO7bTnwmN3MVD2hNa3EvMVEDz3f2v4QnMxHosrg5rSHTmKC2kWcRDyH5mQ3qvMo0JLQsLLC0oWfccp%2BtJlJwZosBzIjN7yqzTtX1vAESfXkUo5C9B3cc7xooCPn7veZmZf2Akl%2FC6GxKjJUofDGUHx13gkPY4u8eYtosBlkTTRnlqSwci9CDJIfhNpmyzb4Pzd%2BI8PKMGMg0gHy6WWGKuDgC5ee9X%2FemQ%2B8dEvKSJBHJy0VPKMHnIOD%2BbIr52knKGzIA296dZNlyFkEGDw3FdMnUf30l6XLXM8gAtffRgZwL9Coq8vDBxWnon41Xu7QY%2FxYdpJlzEjiWN%2F4PO5pXYwmL2ysLZdZIsBxyJK7Ak0C8rjmHkKeDbldtqnUg9c9FilA98RWGC0ppskd8xpUIpvz81C%2BsGbNaDGIr4ZMMY1VouRCNwMfXUKIowkjTH4otWMOLP4cAGOqUBMWtWV97NH%2BG9R1g1EYVk9hdnZ%2BSpdr7OEXtU7yy63L68Mp8tJ9sXNlxzF%2BHldZd2kJXYlD0EuJ6AtTZiMj%2ByOMAOVSPRbvper9RnHJWANYEoqWx2B%2BWUUOXEHTceCFkF%2Fa%2FAIpyXt2s3b5plZEH1EU%2BDuyAaRe9CKbtOFXAAlLmA4AVBBlRj7UHznDhxf2KpEOwN46uMLyidK6XKEZyxRGkJR4LT&X-Amz-Signature=93e73628d10d7f0acfaec78acfb2b50d4a060a32a61415dc51779d4208ebe3b9&X-Amz-SignedHeaders=host&x-id=GetObject)
