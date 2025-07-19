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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MPJVINL%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T034608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcvgAY8YvnuBXJaszcfdm5TsMYugWrmS%2BeCGOmiqKJ%2BAIgGUWY4Y04TLdfF0R1WCLVMt9aUR74rjZ9rZjTqZxgHm4qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDICd5lIB8gXfHp1tQircA6yzUHvt1Ut0pC1U3y6QRWyDejwQRKkyjYjSoPfj0fYen9VGsaTfqhOqTMJGCHwLcsF16F2%2FgV5dwe2bdxZLgCuYvzSETPmMajqukBwSYHPAZp%2FNC3qCglzXtymNhRhD%2FeJWlFIoKJJZ8dklkctpiY33haENmkQSM%2Fqx3yfGaicBrX4xMcWrPfgeuunHxP1daaROyjLt4OgdasbrvHAGm8bqvN9vVucQSZsTxnCJslD%2BBDjVRj1rcNbixT44AeHrnKVDpY0mNckwfrppwNotkrDKqo2oA8PSBVWzAtpmtgwrwTRmFHj8wbbQLWC03j8rk0r6qKH2Osv6PvTshfb1nDfz%2BqbaLY2QWqLmQg6DVnGltDbaa7V%2FgnoiVyektGlYDGue77ICaRBv%2BfvdnmrRwFhvRXnbn%2BKUCvSlrBi0xPWE9VOQ%2B%2By%2FigUdvP6dbLK8x6SLudDuOJWARhMzuypVTJ9TRQU0adLNhB7xwurA2bU3kSvXGwVZIIoWNJ3dnBJJ873ibtjgi9mcqbk%2FqRLaKYTcwwFz8nKfasQOTKWOBMqpQK26mZ1%2FRik%2FQCJFB%2FYf%2BrMK8IziMODO5YX7e59I6VWmAlKAlAMjBopS%2FRp5X9AWOvOflrlBwwm3DmGLMIah7MMGOqUBJUwXpzEdnfpoX%2FiYD6HjDJrDdYbrEejSODem8gWndJBLjgvdp0j4xPWoSg%2BJLnxv6cQ2P3j7m056hEkc9FwwHNLRdqdi4AVk%2BBEyAs52YTRVnGay4rliBytIjKyppGf4XrH25rQqaVySSKWwG8R5evewqSCFo%2B5Z%2Bq0ecn59huTppB8Zhm81n1QlrxkQbH%2FqDMYFKRsjQ1UcazEntyh6TyTNK3ih&X-Amz-Signature=cf2db9992b6024605c039a37798f8ea2caecf2e62bb9853a078cd1c47bed5641&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MPJVINL%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T034608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcvgAY8YvnuBXJaszcfdm5TsMYugWrmS%2BeCGOmiqKJ%2BAIgGUWY4Y04TLdfF0R1WCLVMt9aUR74rjZ9rZjTqZxgHm4qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDICd5lIB8gXfHp1tQircA6yzUHvt1Ut0pC1U3y6QRWyDejwQRKkyjYjSoPfj0fYen9VGsaTfqhOqTMJGCHwLcsF16F2%2FgV5dwe2bdxZLgCuYvzSETPmMajqukBwSYHPAZp%2FNC3qCglzXtymNhRhD%2FeJWlFIoKJJZ8dklkctpiY33haENmkQSM%2Fqx3yfGaicBrX4xMcWrPfgeuunHxP1daaROyjLt4OgdasbrvHAGm8bqvN9vVucQSZsTxnCJslD%2BBDjVRj1rcNbixT44AeHrnKVDpY0mNckwfrppwNotkrDKqo2oA8PSBVWzAtpmtgwrwTRmFHj8wbbQLWC03j8rk0r6qKH2Osv6PvTshfb1nDfz%2BqbaLY2QWqLmQg6DVnGltDbaa7V%2FgnoiVyektGlYDGue77ICaRBv%2BfvdnmrRwFhvRXnbn%2BKUCvSlrBi0xPWE9VOQ%2B%2By%2FigUdvP6dbLK8x6SLudDuOJWARhMzuypVTJ9TRQU0adLNhB7xwurA2bU3kSvXGwVZIIoWNJ3dnBJJ873ibtjgi9mcqbk%2FqRLaKYTcwwFz8nKfasQOTKWOBMqpQK26mZ1%2FRik%2FQCJFB%2FYf%2BrMK8IziMODO5YX7e59I6VWmAlKAlAMjBopS%2FRp5X9AWOvOflrlBwwm3DmGLMIah7MMGOqUBJUwXpzEdnfpoX%2FiYD6HjDJrDdYbrEejSODem8gWndJBLjgvdp0j4xPWoSg%2BJLnxv6cQ2P3j7m056hEkc9FwwHNLRdqdi4AVk%2BBEyAs52YTRVnGay4rliBytIjKyppGf4XrH25rQqaVySSKWwG8R5evewqSCFo%2B5Z%2Bq0ecn59huTppB8Zhm81n1QlrxkQbH%2FqDMYFKRsjQ1UcazEntyh6TyTNK3ih&X-Amz-Signature=2dfa6f9109d85125e6830966b37c3322ae4440fe97661d4d9950758a334d2e3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MPJVINL%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T034608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcvgAY8YvnuBXJaszcfdm5TsMYugWrmS%2BeCGOmiqKJ%2BAIgGUWY4Y04TLdfF0R1WCLVMt9aUR74rjZ9rZjTqZxgHm4qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDICd5lIB8gXfHp1tQircA6yzUHvt1Ut0pC1U3y6QRWyDejwQRKkyjYjSoPfj0fYen9VGsaTfqhOqTMJGCHwLcsF16F2%2FgV5dwe2bdxZLgCuYvzSETPmMajqukBwSYHPAZp%2FNC3qCglzXtymNhRhD%2FeJWlFIoKJJZ8dklkctpiY33haENmkQSM%2Fqx3yfGaicBrX4xMcWrPfgeuunHxP1daaROyjLt4OgdasbrvHAGm8bqvN9vVucQSZsTxnCJslD%2BBDjVRj1rcNbixT44AeHrnKVDpY0mNckwfrppwNotkrDKqo2oA8PSBVWzAtpmtgwrwTRmFHj8wbbQLWC03j8rk0r6qKH2Osv6PvTshfb1nDfz%2BqbaLY2QWqLmQg6DVnGltDbaa7V%2FgnoiVyektGlYDGue77ICaRBv%2BfvdnmrRwFhvRXnbn%2BKUCvSlrBi0xPWE9VOQ%2B%2By%2FigUdvP6dbLK8x6SLudDuOJWARhMzuypVTJ9TRQU0adLNhB7xwurA2bU3kSvXGwVZIIoWNJ3dnBJJ873ibtjgi9mcqbk%2FqRLaKYTcwwFz8nKfasQOTKWOBMqpQK26mZ1%2FRik%2FQCJFB%2FYf%2BrMK8IziMODO5YX7e59I6VWmAlKAlAMjBopS%2FRp5X9AWOvOflrlBwwm3DmGLMIah7MMGOqUBJUwXpzEdnfpoX%2FiYD6HjDJrDdYbrEejSODem8gWndJBLjgvdp0j4xPWoSg%2BJLnxv6cQ2P3j7m056hEkc9FwwHNLRdqdi4AVk%2BBEyAs52YTRVnGay4rliBytIjKyppGf4XrH25rQqaVySSKWwG8R5evewqSCFo%2B5Z%2Bq0ecn59huTppB8Zhm81n1QlrxkQbH%2FqDMYFKRsjQ1UcazEntyh6TyTNK3ih&X-Amz-Signature=ed599256c8feca5d09b3c65665b22290a3327acaed95ff140052717922638bd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MPJVINL%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T034608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcvgAY8YvnuBXJaszcfdm5TsMYugWrmS%2BeCGOmiqKJ%2BAIgGUWY4Y04TLdfF0R1WCLVMt9aUR74rjZ9rZjTqZxgHm4qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDICd5lIB8gXfHp1tQircA6yzUHvt1Ut0pC1U3y6QRWyDejwQRKkyjYjSoPfj0fYen9VGsaTfqhOqTMJGCHwLcsF16F2%2FgV5dwe2bdxZLgCuYvzSETPmMajqukBwSYHPAZp%2FNC3qCglzXtymNhRhD%2FeJWlFIoKJJZ8dklkctpiY33haENmkQSM%2Fqx3yfGaicBrX4xMcWrPfgeuunHxP1daaROyjLt4OgdasbrvHAGm8bqvN9vVucQSZsTxnCJslD%2BBDjVRj1rcNbixT44AeHrnKVDpY0mNckwfrppwNotkrDKqo2oA8PSBVWzAtpmtgwrwTRmFHj8wbbQLWC03j8rk0r6qKH2Osv6PvTshfb1nDfz%2BqbaLY2QWqLmQg6DVnGltDbaa7V%2FgnoiVyektGlYDGue77ICaRBv%2BfvdnmrRwFhvRXnbn%2BKUCvSlrBi0xPWE9VOQ%2B%2By%2FigUdvP6dbLK8x6SLudDuOJWARhMzuypVTJ9TRQU0adLNhB7xwurA2bU3kSvXGwVZIIoWNJ3dnBJJ873ibtjgi9mcqbk%2FqRLaKYTcwwFz8nKfasQOTKWOBMqpQK26mZ1%2FRik%2FQCJFB%2FYf%2BrMK8IziMODO5YX7e59I6VWmAlKAlAMjBopS%2FRp5X9AWOvOflrlBwwm3DmGLMIah7MMGOqUBJUwXpzEdnfpoX%2FiYD6HjDJrDdYbrEejSODem8gWndJBLjgvdp0j4xPWoSg%2BJLnxv6cQ2P3j7m056hEkc9FwwHNLRdqdi4AVk%2BBEyAs52YTRVnGay4rliBytIjKyppGf4XrH25rQqaVySSKWwG8R5evewqSCFo%2B5Z%2Bq0ecn59huTppB8Zhm81n1QlrxkQbH%2FqDMYFKRsjQ1UcazEntyh6TyTNK3ih&X-Amz-Signature=df7ea1579d8af79c0f0fe3284b9e0ff3b1e8e966cabdd28595421a47dd152a2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MPJVINL%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T034608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcvgAY8YvnuBXJaszcfdm5TsMYugWrmS%2BeCGOmiqKJ%2BAIgGUWY4Y04TLdfF0R1WCLVMt9aUR74rjZ9rZjTqZxgHm4qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDICd5lIB8gXfHp1tQircA6yzUHvt1Ut0pC1U3y6QRWyDejwQRKkyjYjSoPfj0fYen9VGsaTfqhOqTMJGCHwLcsF16F2%2FgV5dwe2bdxZLgCuYvzSETPmMajqukBwSYHPAZp%2FNC3qCglzXtymNhRhD%2FeJWlFIoKJJZ8dklkctpiY33haENmkQSM%2Fqx3yfGaicBrX4xMcWrPfgeuunHxP1daaROyjLt4OgdasbrvHAGm8bqvN9vVucQSZsTxnCJslD%2BBDjVRj1rcNbixT44AeHrnKVDpY0mNckwfrppwNotkrDKqo2oA8PSBVWzAtpmtgwrwTRmFHj8wbbQLWC03j8rk0r6qKH2Osv6PvTshfb1nDfz%2BqbaLY2QWqLmQg6DVnGltDbaa7V%2FgnoiVyektGlYDGue77ICaRBv%2BfvdnmrRwFhvRXnbn%2BKUCvSlrBi0xPWE9VOQ%2B%2By%2FigUdvP6dbLK8x6SLudDuOJWARhMzuypVTJ9TRQU0adLNhB7xwurA2bU3kSvXGwVZIIoWNJ3dnBJJ873ibtjgi9mcqbk%2FqRLaKYTcwwFz8nKfasQOTKWOBMqpQK26mZ1%2FRik%2FQCJFB%2FYf%2BrMK8IziMODO5YX7e59I6VWmAlKAlAMjBopS%2FRp5X9AWOvOflrlBwwm3DmGLMIah7MMGOqUBJUwXpzEdnfpoX%2FiYD6HjDJrDdYbrEejSODem8gWndJBLjgvdp0j4xPWoSg%2BJLnxv6cQ2P3j7m056hEkc9FwwHNLRdqdi4AVk%2BBEyAs52YTRVnGay4rliBytIjKyppGf4XrH25rQqaVySSKWwG8R5evewqSCFo%2B5Z%2Bq0ecn59huTppB8Zhm81n1QlrxkQbH%2FqDMYFKRsjQ1UcazEntyh6TyTNK3ih&X-Amz-Signature=8d057d7c887ed02ce4e78acc4949199c61dbd5772f1c766a07ce2a6c0cc278b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MPJVINL%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T034608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcvgAY8YvnuBXJaszcfdm5TsMYugWrmS%2BeCGOmiqKJ%2BAIgGUWY4Y04TLdfF0R1WCLVMt9aUR74rjZ9rZjTqZxgHm4qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDICd5lIB8gXfHp1tQircA6yzUHvt1Ut0pC1U3y6QRWyDejwQRKkyjYjSoPfj0fYen9VGsaTfqhOqTMJGCHwLcsF16F2%2FgV5dwe2bdxZLgCuYvzSETPmMajqukBwSYHPAZp%2FNC3qCglzXtymNhRhD%2FeJWlFIoKJJZ8dklkctpiY33haENmkQSM%2Fqx3yfGaicBrX4xMcWrPfgeuunHxP1daaROyjLt4OgdasbrvHAGm8bqvN9vVucQSZsTxnCJslD%2BBDjVRj1rcNbixT44AeHrnKVDpY0mNckwfrppwNotkrDKqo2oA8PSBVWzAtpmtgwrwTRmFHj8wbbQLWC03j8rk0r6qKH2Osv6PvTshfb1nDfz%2BqbaLY2QWqLmQg6DVnGltDbaa7V%2FgnoiVyektGlYDGue77ICaRBv%2BfvdnmrRwFhvRXnbn%2BKUCvSlrBi0xPWE9VOQ%2B%2By%2FigUdvP6dbLK8x6SLudDuOJWARhMzuypVTJ9TRQU0adLNhB7xwurA2bU3kSvXGwVZIIoWNJ3dnBJJ873ibtjgi9mcqbk%2FqRLaKYTcwwFz8nKfasQOTKWOBMqpQK26mZ1%2FRik%2FQCJFB%2FYf%2BrMK8IziMODO5YX7e59I6VWmAlKAlAMjBopS%2FRp5X9AWOvOflrlBwwm3DmGLMIah7MMGOqUBJUwXpzEdnfpoX%2FiYD6HjDJrDdYbrEejSODem8gWndJBLjgvdp0j4xPWoSg%2BJLnxv6cQ2P3j7m056hEkc9FwwHNLRdqdi4AVk%2BBEyAs52YTRVnGay4rliBytIjKyppGf4XrH25rQqaVySSKWwG8R5evewqSCFo%2B5Z%2Bq0ecn59huTppB8Zhm81n1QlrxkQbH%2FqDMYFKRsjQ1UcazEntyh6TyTNK3ih&X-Amz-Signature=bfe3d33b5d2f08d9ad23b9a51b7dacf13da587733353bfdbf50f066dc6aac4b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
