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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFQEH5QG%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQD4SIJsqrfUSP587mmrkLvnQtqw31bqSZGtj5TyF8OyAgIgV2kop5amahljyTIyOHzmGtnGmSDf%2FgIBRl84r%2Fs5l6Yq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDAiktc9N777yeaWFgSrcA2K9r4GYngQGsHFKVdFtCGh6X4DqqCDyeA%2FQGwZPHEax10JRAehRp%2BMHW7nDcSZbQX8MVbiG7s4x351pdt1FqTk6xHL0sOnaXdaZ216%2BQj7kyilwn2Q04COvD6tVqHdC86AZbT4Wed4LEZ6n5yoryMnZJ4%2F8R9kU%2FW%2FZy3nJVa99PvrnNf7abvwb7sXEpzTsNYtk8i0o716wVc%2BAdxAt6gbUHl6tvpAiAKVYG6toZPOzL3TSfH%2Fxcf%2BkkFBvjRCrDe%2BQ0P2EMrgHdvYZHsZAAtSXctAP05mXuOkoOMq2R9UoODyiLxCLcXdWj6eMllbcn3WsRNySBwY9mBm0FsqFvEtrGe6if3jQmDWyYMeJ9w6pwW0ApTvZ4dOF7Z%2B2WMvJbhZ2%2BkC30wjLRpCKkudfrFJUiP3V8xNSV%2F4gjaYQmbKnqroU62ne%2B2CYlnjF1ePxI0lEsFo%2BgGCyUBRY6IF2LcQ4rMljRkOhTFAPcsNmKW7xMEh8d%2BbUAIIz6SB99uHVKWjf%2FtN78bmC2csmQwoakkG5z%2BvdtD7v%2FY26HAa0ltWxArr3e6Rbfb1285noGU%2Bg6xspkSGsTSF%2FuTcGp2N%2BdrEQvkRHtQPsipBjoLTVr9Wp9z5%2FSo6%2BasCPAHySMLrEhsIGOqUBzQ3xmBVG6g0yELmvmWfR%2Bfqk6XLzqBs3Y9gGxV%2F3iiDZ44Durb1JNRgtcuxyZoghVXzaHQ7SrJR88jTHlHyc0qm%2FiHEjXl2QLer1wCIe2rZT44J9o2WFthMjB7DfEJ8wuR8o7egkmD9QXflDz1GlqPAgRzqAOTzxo58HVQMR8sxy7SGl5adyOHwmOcafDC%2BPgFTM7xh8cVvAo3BQ8IwCLzFyxPE3&X-Amz-Signature=3fb3947b9cec2e936c66a67dfa7eb907089198646dab344a6409b64572defa79&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFQEH5QG%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQD4SIJsqrfUSP587mmrkLvnQtqw31bqSZGtj5TyF8OyAgIgV2kop5amahljyTIyOHzmGtnGmSDf%2FgIBRl84r%2Fs5l6Yq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDAiktc9N777yeaWFgSrcA2K9r4GYngQGsHFKVdFtCGh6X4DqqCDyeA%2FQGwZPHEax10JRAehRp%2BMHW7nDcSZbQX8MVbiG7s4x351pdt1FqTk6xHL0sOnaXdaZ216%2BQj7kyilwn2Q04COvD6tVqHdC86AZbT4Wed4LEZ6n5yoryMnZJ4%2F8R9kU%2FW%2FZy3nJVa99PvrnNf7abvwb7sXEpzTsNYtk8i0o716wVc%2BAdxAt6gbUHl6tvpAiAKVYG6toZPOzL3TSfH%2Fxcf%2BkkFBvjRCrDe%2BQ0P2EMrgHdvYZHsZAAtSXctAP05mXuOkoOMq2R9UoODyiLxCLcXdWj6eMllbcn3WsRNySBwY9mBm0FsqFvEtrGe6if3jQmDWyYMeJ9w6pwW0ApTvZ4dOF7Z%2B2WMvJbhZ2%2BkC30wjLRpCKkudfrFJUiP3V8xNSV%2F4gjaYQmbKnqroU62ne%2B2CYlnjF1ePxI0lEsFo%2BgGCyUBRY6IF2LcQ4rMljRkOhTFAPcsNmKW7xMEh8d%2BbUAIIz6SB99uHVKWjf%2FtN78bmC2csmQwoakkG5z%2BvdtD7v%2FY26HAa0ltWxArr3e6Rbfb1285noGU%2Bg6xspkSGsTSF%2FuTcGp2N%2BdrEQvkRHtQPsipBjoLTVr9Wp9z5%2FSo6%2BasCPAHySMLrEhsIGOqUBzQ3xmBVG6g0yELmvmWfR%2Bfqk6XLzqBs3Y9gGxV%2F3iiDZ44Durb1JNRgtcuxyZoghVXzaHQ7SrJR88jTHlHyc0qm%2FiHEjXl2QLer1wCIe2rZT44J9o2WFthMjB7DfEJ8wuR8o7egkmD9QXflDz1GlqPAgRzqAOTzxo58HVQMR8sxy7SGl5adyOHwmOcafDC%2BPgFTM7xh8cVvAo3BQ8IwCLzFyxPE3&X-Amz-Signature=a81926cd12878f663e46f1a28d5f09e385e5e39a65f5d37d79f62164f8433a48&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFQEH5QG%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQD4SIJsqrfUSP587mmrkLvnQtqw31bqSZGtj5TyF8OyAgIgV2kop5amahljyTIyOHzmGtnGmSDf%2FgIBRl84r%2Fs5l6Yq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDAiktc9N777yeaWFgSrcA2K9r4GYngQGsHFKVdFtCGh6X4DqqCDyeA%2FQGwZPHEax10JRAehRp%2BMHW7nDcSZbQX8MVbiG7s4x351pdt1FqTk6xHL0sOnaXdaZ216%2BQj7kyilwn2Q04COvD6tVqHdC86AZbT4Wed4LEZ6n5yoryMnZJ4%2F8R9kU%2FW%2FZy3nJVa99PvrnNf7abvwb7sXEpzTsNYtk8i0o716wVc%2BAdxAt6gbUHl6tvpAiAKVYG6toZPOzL3TSfH%2Fxcf%2BkkFBvjRCrDe%2BQ0P2EMrgHdvYZHsZAAtSXctAP05mXuOkoOMq2R9UoODyiLxCLcXdWj6eMllbcn3WsRNySBwY9mBm0FsqFvEtrGe6if3jQmDWyYMeJ9w6pwW0ApTvZ4dOF7Z%2B2WMvJbhZ2%2BkC30wjLRpCKkudfrFJUiP3V8xNSV%2F4gjaYQmbKnqroU62ne%2B2CYlnjF1ePxI0lEsFo%2BgGCyUBRY6IF2LcQ4rMljRkOhTFAPcsNmKW7xMEh8d%2BbUAIIz6SB99uHVKWjf%2FtN78bmC2csmQwoakkG5z%2BvdtD7v%2FY26HAa0ltWxArr3e6Rbfb1285noGU%2Bg6xspkSGsTSF%2FuTcGp2N%2BdrEQvkRHtQPsipBjoLTVr9Wp9z5%2FSo6%2BasCPAHySMLrEhsIGOqUBzQ3xmBVG6g0yELmvmWfR%2Bfqk6XLzqBs3Y9gGxV%2F3iiDZ44Durb1JNRgtcuxyZoghVXzaHQ7SrJR88jTHlHyc0qm%2FiHEjXl2QLer1wCIe2rZT44J9o2WFthMjB7DfEJ8wuR8o7egkmD9QXflDz1GlqPAgRzqAOTzxo58HVQMR8sxy7SGl5adyOHwmOcafDC%2BPgFTM7xh8cVvAo3BQ8IwCLzFyxPE3&X-Amz-Signature=8a580174bc524b33bd9ebecdbc41cbbcbc7c638c9a137b5a2cc220008615e2fc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFQEH5QG%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQD4SIJsqrfUSP587mmrkLvnQtqw31bqSZGtj5TyF8OyAgIgV2kop5amahljyTIyOHzmGtnGmSDf%2FgIBRl84r%2Fs5l6Yq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDAiktc9N777yeaWFgSrcA2K9r4GYngQGsHFKVdFtCGh6X4DqqCDyeA%2FQGwZPHEax10JRAehRp%2BMHW7nDcSZbQX8MVbiG7s4x351pdt1FqTk6xHL0sOnaXdaZ216%2BQj7kyilwn2Q04COvD6tVqHdC86AZbT4Wed4LEZ6n5yoryMnZJ4%2F8R9kU%2FW%2FZy3nJVa99PvrnNf7abvwb7sXEpzTsNYtk8i0o716wVc%2BAdxAt6gbUHl6tvpAiAKVYG6toZPOzL3TSfH%2Fxcf%2BkkFBvjRCrDe%2BQ0P2EMrgHdvYZHsZAAtSXctAP05mXuOkoOMq2R9UoODyiLxCLcXdWj6eMllbcn3WsRNySBwY9mBm0FsqFvEtrGe6if3jQmDWyYMeJ9w6pwW0ApTvZ4dOF7Z%2B2WMvJbhZ2%2BkC30wjLRpCKkudfrFJUiP3V8xNSV%2F4gjaYQmbKnqroU62ne%2B2CYlnjF1ePxI0lEsFo%2BgGCyUBRY6IF2LcQ4rMljRkOhTFAPcsNmKW7xMEh8d%2BbUAIIz6SB99uHVKWjf%2FtN78bmC2csmQwoakkG5z%2BvdtD7v%2FY26HAa0ltWxArr3e6Rbfb1285noGU%2Bg6xspkSGsTSF%2FuTcGp2N%2BdrEQvkRHtQPsipBjoLTVr9Wp9z5%2FSo6%2BasCPAHySMLrEhsIGOqUBzQ3xmBVG6g0yELmvmWfR%2Bfqk6XLzqBs3Y9gGxV%2F3iiDZ44Durb1JNRgtcuxyZoghVXzaHQ7SrJR88jTHlHyc0qm%2FiHEjXl2QLer1wCIe2rZT44J9o2WFthMjB7DfEJ8wuR8o7egkmD9QXflDz1GlqPAgRzqAOTzxo58HVQMR8sxy7SGl5adyOHwmOcafDC%2BPgFTM7xh8cVvAo3BQ8IwCLzFyxPE3&X-Amz-Signature=dc83eb654ff942c19718c6d89ee86b383aa08f6f1e74d383c690cd322135f81c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFQEH5QG%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQD4SIJsqrfUSP587mmrkLvnQtqw31bqSZGtj5TyF8OyAgIgV2kop5amahljyTIyOHzmGtnGmSDf%2FgIBRl84r%2Fs5l6Yq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDAiktc9N777yeaWFgSrcA2K9r4GYngQGsHFKVdFtCGh6X4DqqCDyeA%2FQGwZPHEax10JRAehRp%2BMHW7nDcSZbQX8MVbiG7s4x351pdt1FqTk6xHL0sOnaXdaZ216%2BQj7kyilwn2Q04COvD6tVqHdC86AZbT4Wed4LEZ6n5yoryMnZJ4%2F8R9kU%2FW%2FZy3nJVa99PvrnNf7abvwb7sXEpzTsNYtk8i0o716wVc%2BAdxAt6gbUHl6tvpAiAKVYG6toZPOzL3TSfH%2Fxcf%2BkkFBvjRCrDe%2BQ0P2EMrgHdvYZHsZAAtSXctAP05mXuOkoOMq2R9UoODyiLxCLcXdWj6eMllbcn3WsRNySBwY9mBm0FsqFvEtrGe6if3jQmDWyYMeJ9w6pwW0ApTvZ4dOF7Z%2B2WMvJbhZ2%2BkC30wjLRpCKkudfrFJUiP3V8xNSV%2F4gjaYQmbKnqroU62ne%2B2CYlnjF1ePxI0lEsFo%2BgGCyUBRY6IF2LcQ4rMljRkOhTFAPcsNmKW7xMEh8d%2BbUAIIz6SB99uHVKWjf%2FtN78bmC2csmQwoakkG5z%2BvdtD7v%2FY26HAa0ltWxArr3e6Rbfb1285noGU%2Bg6xspkSGsTSF%2FuTcGp2N%2BdrEQvkRHtQPsipBjoLTVr9Wp9z5%2FSo6%2BasCPAHySMLrEhsIGOqUBzQ3xmBVG6g0yELmvmWfR%2Bfqk6XLzqBs3Y9gGxV%2F3iiDZ44Durb1JNRgtcuxyZoghVXzaHQ7SrJR88jTHlHyc0qm%2FiHEjXl2QLer1wCIe2rZT44J9o2WFthMjB7DfEJ8wuR8o7egkmD9QXflDz1GlqPAgRzqAOTzxo58HVQMR8sxy7SGl5adyOHwmOcafDC%2BPgFTM7xh8cVvAo3BQ8IwCLzFyxPE3&X-Amz-Signature=ace71cc5367ccf4e0808c4822a9ad0da5d29091cf56e965038778e58e9a38620&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFQEH5QG%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T140917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQD4SIJsqrfUSP587mmrkLvnQtqw31bqSZGtj5TyF8OyAgIgV2kop5amahljyTIyOHzmGtnGmSDf%2FgIBRl84r%2Fs5l6Yq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDAiktc9N777yeaWFgSrcA2K9r4GYngQGsHFKVdFtCGh6X4DqqCDyeA%2FQGwZPHEax10JRAehRp%2BMHW7nDcSZbQX8MVbiG7s4x351pdt1FqTk6xHL0sOnaXdaZ216%2BQj7kyilwn2Q04COvD6tVqHdC86AZbT4Wed4LEZ6n5yoryMnZJ4%2F8R9kU%2FW%2FZy3nJVa99PvrnNf7abvwb7sXEpzTsNYtk8i0o716wVc%2BAdxAt6gbUHl6tvpAiAKVYG6toZPOzL3TSfH%2Fxcf%2BkkFBvjRCrDe%2BQ0P2EMrgHdvYZHsZAAtSXctAP05mXuOkoOMq2R9UoODyiLxCLcXdWj6eMllbcn3WsRNySBwY9mBm0FsqFvEtrGe6if3jQmDWyYMeJ9w6pwW0ApTvZ4dOF7Z%2B2WMvJbhZ2%2BkC30wjLRpCKkudfrFJUiP3V8xNSV%2F4gjaYQmbKnqroU62ne%2B2CYlnjF1ePxI0lEsFo%2BgGCyUBRY6IF2LcQ4rMljRkOhTFAPcsNmKW7xMEh8d%2BbUAIIz6SB99uHVKWjf%2FtN78bmC2csmQwoakkG5z%2BvdtD7v%2FY26HAa0ltWxArr3e6Rbfb1285noGU%2Bg6xspkSGsTSF%2FuTcGp2N%2BdrEQvkRHtQPsipBjoLTVr9Wp9z5%2FSo6%2BasCPAHySMLrEhsIGOqUBzQ3xmBVG6g0yELmvmWfR%2Bfqk6XLzqBs3Y9gGxV%2F3iiDZ44Durb1JNRgtcuxyZoghVXzaHQ7SrJR88jTHlHyc0qm%2FiHEjXl2QLer1wCIe2rZT44J9o2WFthMjB7DfEJ8wuR8o7egkmD9QXflDz1GlqPAgRzqAOTzxo58HVQMR8sxy7SGl5adyOHwmOcafDC%2BPgFTM7xh8cVvAo3BQ8IwCLzFyxPE3&X-Amz-Signature=9c7f94fee05c615ec30bf44f825d0b9d6915c4aa18cb98541517c0c1f65bbc41&X-Amz-SignedHeaders=host&x-id=GetObject)
