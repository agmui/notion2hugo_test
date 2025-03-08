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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3TBRRXE%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T160308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIGUrEbS6Wy9OPSkAzVnaUwOXATRFMf3isXLKBh63fwotAiEAvRZocjrlW2Qkvj2O4bTJ9WkhLpM6AgeWdcGEdpflQ6wq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDCAu9lrmJo%2FE33a98ircAwakOUmFak9CXfoD3fDmuY50ENvYSMKBigeuwzFBGq07HBmyf9oawlUiboEd8Pfu%2FRBHZusUYdCIua9sgF63igvbbLMuZBcdRUNAynLglWi2B1U5TMB51x8pro%2F%2BJXxuXJ0ecNGGe3qCRK9hUTAmkuMw7%2BXNyt4toIOwvHQRKR8999G37n6Jzp%2FayT%2Fty1vIG%2BpFYqwLldgoQkzVnxqUQA2N5w5ljkWNYvUM1iKgWHuM%2FCJbUeD63e7TTSRYL7T418tlxwjvDgwi5rHNW%2BFRvnSoKtbW2ubrELqd4drJW09xke6xoJPKZ0HicCPTxCFNvplMjrqxbL64F2cUXDGcgb0zVBZzNcWFSwAOb7lfT2Q7XrT4jovadLNJ5MhDwSLiWjGyDvSqjyXOJboEvkyW3xh8RadLdFcd%2FlP%2Fd08xGYBPTSzd%2BXFBJ%2BSrfhHds1a5TQQhbQeuLcSr6uVc4qVqQkhonVfoNvi62VyhJPKzaSoa%2BUCkMeSIyZFP5%2Bjqiq%2BQqARJbZGV5FGWV2bQ%2BHbVEtxvfvX7hHd20MYKyR6X%2BokirBdQjodMwY86BdDGjpcmb6k4aRm%2BnQOFhHNSzwiadhreYS4jaul4%2FdfPCT7AWy1QtGR%2Fxqm%2BxoFiLgGDMI%2Bzsb4GOqUBb4WwZtWDH%2FnPoeJtYO25ITNhoQwNs76XOgFLUfaYAZEcjBOKQah3eN36qm1MkmsYXYA3SbkvtOC7bhrwCkxuS9OfmWyYiYy9jRRZLLsuT8DJ%2B%2FQ2vqC0fiOjm7Sx6h%2F1fiislSwIn8fjxh1QvAT3ojW8Vvxbi2n3IfTejWkNS1ivQ%2FsbbARRvUPuNHAQmZOdWQHsTh4pi3%2BfLU9yieyURnntl4Np&X-Amz-Signature=8681186c1b70efdba1a79e3fab2ad7eb481c00bdff688fa30e2b89584e8d41df&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3TBRRXE%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T160308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIGUrEbS6Wy9OPSkAzVnaUwOXATRFMf3isXLKBh63fwotAiEAvRZocjrlW2Qkvj2O4bTJ9WkhLpM6AgeWdcGEdpflQ6wq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDCAu9lrmJo%2FE33a98ircAwakOUmFak9CXfoD3fDmuY50ENvYSMKBigeuwzFBGq07HBmyf9oawlUiboEd8Pfu%2FRBHZusUYdCIua9sgF63igvbbLMuZBcdRUNAynLglWi2B1U5TMB51x8pro%2F%2BJXxuXJ0ecNGGe3qCRK9hUTAmkuMw7%2BXNyt4toIOwvHQRKR8999G37n6Jzp%2FayT%2Fty1vIG%2BpFYqwLldgoQkzVnxqUQA2N5w5ljkWNYvUM1iKgWHuM%2FCJbUeD63e7TTSRYL7T418tlxwjvDgwi5rHNW%2BFRvnSoKtbW2ubrELqd4drJW09xke6xoJPKZ0HicCPTxCFNvplMjrqxbL64F2cUXDGcgb0zVBZzNcWFSwAOb7lfT2Q7XrT4jovadLNJ5MhDwSLiWjGyDvSqjyXOJboEvkyW3xh8RadLdFcd%2FlP%2Fd08xGYBPTSzd%2BXFBJ%2BSrfhHds1a5TQQhbQeuLcSr6uVc4qVqQkhonVfoNvi62VyhJPKzaSoa%2BUCkMeSIyZFP5%2Bjqiq%2BQqARJbZGV5FGWV2bQ%2BHbVEtxvfvX7hHd20MYKyR6X%2BokirBdQjodMwY86BdDGjpcmb6k4aRm%2BnQOFhHNSzwiadhreYS4jaul4%2FdfPCT7AWy1QtGR%2Fxqm%2BxoFiLgGDMI%2Bzsb4GOqUBb4WwZtWDH%2FnPoeJtYO25ITNhoQwNs76XOgFLUfaYAZEcjBOKQah3eN36qm1MkmsYXYA3SbkvtOC7bhrwCkxuS9OfmWyYiYy9jRRZLLsuT8DJ%2B%2FQ2vqC0fiOjm7Sx6h%2F1fiislSwIn8fjxh1QvAT3ojW8Vvxbi2n3IfTejWkNS1ivQ%2FsbbARRvUPuNHAQmZOdWQHsTh4pi3%2BfLU9yieyURnntl4Np&X-Amz-Signature=77bc6f0362fd69280cc9cd374083c5b49b2baf8ca7860e757b58abc180d32b22&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3TBRRXE%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T160308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIGUrEbS6Wy9OPSkAzVnaUwOXATRFMf3isXLKBh63fwotAiEAvRZocjrlW2Qkvj2O4bTJ9WkhLpM6AgeWdcGEdpflQ6wq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDCAu9lrmJo%2FE33a98ircAwakOUmFak9CXfoD3fDmuY50ENvYSMKBigeuwzFBGq07HBmyf9oawlUiboEd8Pfu%2FRBHZusUYdCIua9sgF63igvbbLMuZBcdRUNAynLglWi2B1U5TMB51x8pro%2F%2BJXxuXJ0ecNGGe3qCRK9hUTAmkuMw7%2BXNyt4toIOwvHQRKR8999G37n6Jzp%2FayT%2Fty1vIG%2BpFYqwLldgoQkzVnxqUQA2N5w5ljkWNYvUM1iKgWHuM%2FCJbUeD63e7TTSRYL7T418tlxwjvDgwi5rHNW%2BFRvnSoKtbW2ubrELqd4drJW09xke6xoJPKZ0HicCPTxCFNvplMjrqxbL64F2cUXDGcgb0zVBZzNcWFSwAOb7lfT2Q7XrT4jovadLNJ5MhDwSLiWjGyDvSqjyXOJboEvkyW3xh8RadLdFcd%2FlP%2Fd08xGYBPTSzd%2BXFBJ%2BSrfhHds1a5TQQhbQeuLcSr6uVc4qVqQkhonVfoNvi62VyhJPKzaSoa%2BUCkMeSIyZFP5%2Bjqiq%2BQqARJbZGV5FGWV2bQ%2BHbVEtxvfvX7hHd20MYKyR6X%2BokirBdQjodMwY86BdDGjpcmb6k4aRm%2BnQOFhHNSzwiadhreYS4jaul4%2FdfPCT7AWy1QtGR%2Fxqm%2BxoFiLgGDMI%2Bzsb4GOqUBb4WwZtWDH%2FnPoeJtYO25ITNhoQwNs76XOgFLUfaYAZEcjBOKQah3eN36qm1MkmsYXYA3SbkvtOC7bhrwCkxuS9OfmWyYiYy9jRRZLLsuT8DJ%2B%2FQ2vqC0fiOjm7Sx6h%2F1fiislSwIn8fjxh1QvAT3ojW8Vvxbi2n3IfTejWkNS1ivQ%2FsbbARRvUPuNHAQmZOdWQHsTh4pi3%2BfLU9yieyURnntl4Np&X-Amz-Signature=70698c1f22af32e50fe82d2615d0579d9d5e47618aeaab8b832b189104ff47d0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3TBRRXE%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T160308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIGUrEbS6Wy9OPSkAzVnaUwOXATRFMf3isXLKBh63fwotAiEAvRZocjrlW2Qkvj2O4bTJ9WkhLpM6AgeWdcGEdpflQ6wq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDCAu9lrmJo%2FE33a98ircAwakOUmFak9CXfoD3fDmuY50ENvYSMKBigeuwzFBGq07HBmyf9oawlUiboEd8Pfu%2FRBHZusUYdCIua9sgF63igvbbLMuZBcdRUNAynLglWi2B1U5TMB51x8pro%2F%2BJXxuXJ0ecNGGe3qCRK9hUTAmkuMw7%2BXNyt4toIOwvHQRKR8999G37n6Jzp%2FayT%2Fty1vIG%2BpFYqwLldgoQkzVnxqUQA2N5w5ljkWNYvUM1iKgWHuM%2FCJbUeD63e7TTSRYL7T418tlxwjvDgwi5rHNW%2BFRvnSoKtbW2ubrELqd4drJW09xke6xoJPKZ0HicCPTxCFNvplMjrqxbL64F2cUXDGcgb0zVBZzNcWFSwAOb7lfT2Q7XrT4jovadLNJ5MhDwSLiWjGyDvSqjyXOJboEvkyW3xh8RadLdFcd%2FlP%2Fd08xGYBPTSzd%2BXFBJ%2BSrfhHds1a5TQQhbQeuLcSr6uVc4qVqQkhonVfoNvi62VyhJPKzaSoa%2BUCkMeSIyZFP5%2Bjqiq%2BQqARJbZGV5FGWV2bQ%2BHbVEtxvfvX7hHd20MYKyR6X%2BokirBdQjodMwY86BdDGjpcmb6k4aRm%2BnQOFhHNSzwiadhreYS4jaul4%2FdfPCT7AWy1QtGR%2Fxqm%2BxoFiLgGDMI%2Bzsb4GOqUBb4WwZtWDH%2FnPoeJtYO25ITNhoQwNs76XOgFLUfaYAZEcjBOKQah3eN36qm1MkmsYXYA3SbkvtOC7bhrwCkxuS9OfmWyYiYy9jRRZLLsuT8DJ%2B%2FQ2vqC0fiOjm7Sx6h%2F1fiislSwIn8fjxh1QvAT3ojW8Vvxbi2n3IfTejWkNS1ivQ%2FsbbARRvUPuNHAQmZOdWQHsTh4pi3%2BfLU9yieyURnntl4Np&X-Amz-Signature=b04e2dac5ef192fe9c9c4a0d9daca7e11d2217050b6fe7ee8c2704bc071462bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3TBRRXE%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T160308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIGUrEbS6Wy9OPSkAzVnaUwOXATRFMf3isXLKBh63fwotAiEAvRZocjrlW2Qkvj2O4bTJ9WkhLpM6AgeWdcGEdpflQ6wq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDCAu9lrmJo%2FE33a98ircAwakOUmFak9CXfoD3fDmuY50ENvYSMKBigeuwzFBGq07HBmyf9oawlUiboEd8Pfu%2FRBHZusUYdCIua9sgF63igvbbLMuZBcdRUNAynLglWi2B1U5TMB51x8pro%2F%2BJXxuXJ0ecNGGe3qCRK9hUTAmkuMw7%2BXNyt4toIOwvHQRKR8999G37n6Jzp%2FayT%2Fty1vIG%2BpFYqwLldgoQkzVnxqUQA2N5w5ljkWNYvUM1iKgWHuM%2FCJbUeD63e7TTSRYL7T418tlxwjvDgwi5rHNW%2BFRvnSoKtbW2ubrELqd4drJW09xke6xoJPKZ0HicCPTxCFNvplMjrqxbL64F2cUXDGcgb0zVBZzNcWFSwAOb7lfT2Q7XrT4jovadLNJ5MhDwSLiWjGyDvSqjyXOJboEvkyW3xh8RadLdFcd%2FlP%2Fd08xGYBPTSzd%2BXFBJ%2BSrfhHds1a5TQQhbQeuLcSr6uVc4qVqQkhonVfoNvi62VyhJPKzaSoa%2BUCkMeSIyZFP5%2Bjqiq%2BQqARJbZGV5FGWV2bQ%2BHbVEtxvfvX7hHd20MYKyR6X%2BokirBdQjodMwY86BdDGjpcmb6k4aRm%2BnQOFhHNSzwiadhreYS4jaul4%2FdfPCT7AWy1QtGR%2Fxqm%2BxoFiLgGDMI%2Bzsb4GOqUBb4WwZtWDH%2FnPoeJtYO25ITNhoQwNs76XOgFLUfaYAZEcjBOKQah3eN36qm1MkmsYXYA3SbkvtOC7bhrwCkxuS9OfmWyYiYy9jRRZLLsuT8DJ%2B%2FQ2vqC0fiOjm7Sx6h%2F1fiislSwIn8fjxh1QvAT3ojW8Vvxbi2n3IfTejWkNS1ivQ%2FsbbARRvUPuNHAQmZOdWQHsTh4pi3%2BfLU9yieyURnntl4Np&X-Amz-Signature=70ed1e7e5e3843a3d79f6beb6f82efebb26a97db004d5b491ede0cf180f2902d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3TBRRXE%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T160308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIGUrEbS6Wy9OPSkAzVnaUwOXATRFMf3isXLKBh63fwotAiEAvRZocjrlW2Qkvj2O4bTJ9WkhLpM6AgeWdcGEdpflQ6wq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDCAu9lrmJo%2FE33a98ircAwakOUmFak9CXfoD3fDmuY50ENvYSMKBigeuwzFBGq07HBmyf9oawlUiboEd8Pfu%2FRBHZusUYdCIua9sgF63igvbbLMuZBcdRUNAynLglWi2B1U5TMB51x8pro%2F%2BJXxuXJ0ecNGGe3qCRK9hUTAmkuMw7%2BXNyt4toIOwvHQRKR8999G37n6Jzp%2FayT%2Fty1vIG%2BpFYqwLldgoQkzVnxqUQA2N5w5ljkWNYvUM1iKgWHuM%2FCJbUeD63e7TTSRYL7T418tlxwjvDgwi5rHNW%2BFRvnSoKtbW2ubrELqd4drJW09xke6xoJPKZ0HicCPTxCFNvplMjrqxbL64F2cUXDGcgb0zVBZzNcWFSwAOb7lfT2Q7XrT4jovadLNJ5MhDwSLiWjGyDvSqjyXOJboEvkyW3xh8RadLdFcd%2FlP%2Fd08xGYBPTSzd%2BXFBJ%2BSrfhHds1a5TQQhbQeuLcSr6uVc4qVqQkhonVfoNvi62VyhJPKzaSoa%2BUCkMeSIyZFP5%2Bjqiq%2BQqARJbZGV5FGWV2bQ%2BHbVEtxvfvX7hHd20MYKyR6X%2BokirBdQjodMwY86BdDGjpcmb6k4aRm%2BnQOFhHNSzwiadhreYS4jaul4%2FdfPCT7AWy1QtGR%2Fxqm%2BxoFiLgGDMI%2Bzsb4GOqUBb4WwZtWDH%2FnPoeJtYO25ITNhoQwNs76XOgFLUfaYAZEcjBOKQah3eN36qm1MkmsYXYA3SbkvtOC7bhrwCkxuS9OfmWyYiYy9jRRZLLsuT8DJ%2B%2FQ2vqC0fiOjm7Sx6h%2F1fiislSwIn8fjxh1QvAT3ojW8Vvxbi2n3IfTejWkNS1ivQ%2FsbbARRvUPuNHAQmZOdWQHsTh4pi3%2BfLU9yieyURnntl4Np&X-Amz-Signature=cbf6eacf0780ea127b668a6100c32584f8765d03e47c20dc92d99ab059a0b4cf&X-Amz-SignedHeaders=host&x-id=GetObject)
