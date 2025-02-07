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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667266MIGF%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQC9OAVUMs1zMSxw3E7kP7NoEmaBgMkkC9PBWn8CZIE89AIgYcGbXWtq4lvQfA6d6PWLplFBDjJYUNp71%2FJUdXkcHN8q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDKnfRdL6XSE9CT%2FMJCrcA8ZSDkkeybJyYmfgHq67rqsYOC5RlCIeEl94iyrpwjOXI0QTZzmnKjMnJOpfPeLfLngKqSgK6yZo%2BKvqcJyH%2B35zSK94qboSiaNNOubVpNMrTl5oQstD4mE6Aa1U2VcoMT2vYpleQZvl%2FxA9wJK%2F%2FK75VQPztu%2BCCWExlbJDv6UAR4DV6nhpGoN%2BNEL77ttF36HgPlJKl7DU%2BQm8jgSsJ69m4p6vJ8ppbNvxYxnVQ5hzf4dqYHTmbRqKvWOnp20PEJhorNdodLVyQ3woPY0l%2Bc4a5hKjukWF5%2FoWv8rGSKgX3upshmFxDE46jlQbL6Chh%2FMraJCnm5GzXwHofe5lBHwaZ1XogeKPbe%2B1NWcmIHtPmh3m%2BzGIgYoFY8OsBamBIKkD3rdlx8rCuRBzNuKSXDOPlfp9YcbI9hjuHH%2FhgtgOKTnnjb1172%2BnV5yuTtMmNFTULw2JlxOzbylL338Zgdp4uOzynleerJ0Tcw0IvqIveFiHshBtin7r5gSNzixpCdipN7c6Y4QUCk6gS%2B%2BIfd5leWo4IZLfmTOiVLEbSqteX8aFIxVbX9E8guCAuTBVxcmEuj%2Fo6zJG%2FhByO0WHkq5RHU%2BK42rZRemNNn2azwS1GKcqUKLPlourru7QMKublb0GOqUBIe5eeTi0wfrHFpD2unrruTOL5pVUMnUSmCqE6KG1fP0GQPaVm7KTcKfF9QxPeGZkBF6ouCB%2BpSN4yidfcbCJM4iv3e8K50QjSAuC639gbdQfkqFzogSeYnT1jVyyHIfbnj%2FPEK5HMXb1kBHM0XXv%2FvU569DDmze6Or3StaI2D1251FD4yk9jISl0LtNZuG1HEZrj%2FPei3KLlyJ6nbFlaiLCBTtc4&X-Amz-Signature=869e3b826aebcb668e91ac91fea0b36aab3a5287564ba0ce8f17ed8c9d2d42a8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667266MIGF%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQC9OAVUMs1zMSxw3E7kP7NoEmaBgMkkC9PBWn8CZIE89AIgYcGbXWtq4lvQfA6d6PWLplFBDjJYUNp71%2FJUdXkcHN8q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDKnfRdL6XSE9CT%2FMJCrcA8ZSDkkeybJyYmfgHq67rqsYOC5RlCIeEl94iyrpwjOXI0QTZzmnKjMnJOpfPeLfLngKqSgK6yZo%2BKvqcJyH%2B35zSK94qboSiaNNOubVpNMrTl5oQstD4mE6Aa1U2VcoMT2vYpleQZvl%2FxA9wJK%2F%2FK75VQPztu%2BCCWExlbJDv6UAR4DV6nhpGoN%2BNEL77ttF36HgPlJKl7DU%2BQm8jgSsJ69m4p6vJ8ppbNvxYxnVQ5hzf4dqYHTmbRqKvWOnp20PEJhorNdodLVyQ3woPY0l%2Bc4a5hKjukWF5%2FoWv8rGSKgX3upshmFxDE46jlQbL6Chh%2FMraJCnm5GzXwHofe5lBHwaZ1XogeKPbe%2B1NWcmIHtPmh3m%2BzGIgYoFY8OsBamBIKkD3rdlx8rCuRBzNuKSXDOPlfp9YcbI9hjuHH%2FhgtgOKTnnjb1172%2BnV5yuTtMmNFTULw2JlxOzbylL338Zgdp4uOzynleerJ0Tcw0IvqIveFiHshBtin7r5gSNzixpCdipN7c6Y4QUCk6gS%2B%2BIfd5leWo4IZLfmTOiVLEbSqteX8aFIxVbX9E8guCAuTBVxcmEuj%2Fo6zJG%2FhByO0WHkq5RHU%2BK42rZRemNNn2azwS1GKcqUKLPlourru7QMKublb0GOqUBIe5eeTi0wfrHFpD2unrruTOL5pVUMnUSmCqE6KG1fP0GQPaVm7KTcKfF9QxPeGZkBF6ouCB%2BpSN4yidfcbCJM4iv3e8K50QjSAuC639gbdQfkqFzogSeYnT1jVyyHIfbnj%2FPEK5HMXb1kBHM0XXv%2FvU569DDmze6Or3StaI2D1251FD4yk9jISl0LtNZuG1HEZrj%2FPei3KLlyJ6nbFlaiLCBTtc4&X-Amz-Signature=72736d2c83e0615650909c5cdc846e30976055fe6394317e2c7d48ba2bcfd3b9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667266MIGF%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQC9OAVUMs1zMSxw3E7kP7NoEmaBgMkkC9PBWn8CZIE89AIgYcGbXWtq4lvQfA6d6PWLplFBDjJYUNp71%2FJUdXkcHN8q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDKnfRdL6XSE9CT%2FMJCrcA8ZSDkkeybJyYmfgHq67rqsYOC5RlCIeEl94iyrpwjOXI0QTZzmnKjMnJOpfPeLfLngKqSgK6yZo%2BKvqcJyH%2B35zSK94qboSiaNNOubVpNMrTl5oQstD4mE6Aa1U2VcoMT2vYpleQZvl%2FxA9wJK%2F%2FK75VQPztu%2BCCWExlbJDv6UAR4DV6nhpGoN%2BNEL77ttF36HgPlJKl7DU%2BQm8jgSsJ69m4p6vJ8ppbNvxYxnVQ5hzf4dqYHTmbRqKvWOnp20PEJhorNdodLVyQ3woPY0l%2Bc4a5hKjukWF5%2FoWv8rGSKgX3upshmFxDE46jlQbL6Chh%2FMraJCnm5GzXwHofe5lBHwaZ1XogeKPbe%2B1NWcmIHtPmh3m%2BzGIgYoFY8OsBamBIKkD3rdlx8rCuRBzNuKSXDOPlfp9YcbI9hjuHH%2FhgtgOKTnnjb1172%2BnV5yuTtMmNFTULw2JlxOzbylL338Zgdp4uOzynleerJ0Tcw0IvqIveFiHshBtin7r5gSNzixpCdipN7c6Y4QUCk6gS%2B%2BIfd5leWo4IZLfmTOiVLEbSqteX8aFIxVbX9E8guCAuTBVxcmEuj%2Fo6zJG%2FhByO0WHkq5RHU%2BK42rZRemNNn2azwS1GKcqUKLPlourru7QMKublb0GOqUBIe5eeTi0wfrHFpD2unrruTOL5pVUMnUSmCqE6KG1fP0GQPaVm7KTcKfF9QxPeGZkBF6ouCB%2BpSN4yidfcbCJM4iv3e8K50QjSAuC639gbdQfkqFzogSeYnT1jVyyHIfbnj%2FPEK5HMXb1kBHM0XXv%2FvU569DDmze6Or3StaI2D1251FD4yk9jISl0LtNZuG1HEZrj%2FPei3KLlyJ6nbFlaiLCBTtc4&X-Amz-Signature=6a6057d4ae34d964d620fc2a46c79118f715214da64282528503c23e21590dbc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667266MIGF%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQC9OAVUMs1zMSxw3E7kP7NoEmaBgMkkC9PBWn8CZIE89AIgYcGbXWtq4lvQfA6d6PWLplFBDjJYUNp71%2FJUdXkcHN8q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDKnfRdL6XSE9CT%2FMJCrcA8ZSDkkeybJyYmfgHq67rqsYOC5RlCIeEl94iyrpwjOXI0QTZzmnKjMnJOpfPeLfLngKqSgK6yZo%2BKvqcJyH%2B35zSK94qboSiaNNOubVpNMrTl5oQstD4mE6Aa1U2VcoMT2vYpleQZvl%2FxA9wJK%2F%2FK75VQPztu%2BCCWExlbJDv6UAR4DV6nhpGoN%2BNEL77ttF36HgPlJKl7DU%2BQm8jgSsJ69m4p6vJ8ppbNvxYxnVQ5hzf4dqYHTmbRqKvWOnp20PEJhorNdodLVyQ3woPY0l%2Bc4a5hKjukWF5%2FoWv8rGSKgX3upshmFxDE46jlQbL6Chh%2FMraJCnm5GzXwHofe5lBHwaZ1XogeKPbe%2B1NWcmIHtPmh3m%2BzGIgYoFY8OsBamBIKkD3rdlx8rCuRBzNuKSXDOPlfp9YcbI9hjuHH%2FhgtgOKTnnjb1172%2BnV5yuTtMmNFTULw2JlxOzbylL338Zgdp4uOzynleerJ0Tcw0IvqIveFiHshBtin7r5gSNzixpCdipN7c6Y4QUCk6gS%2B%2BIfd5leWo4IZLfmTOiVLEbSqteX8aFIxVbX9E8guCAuTBVxcmEuj%2Fo6zJG%2FhByO0WHkq5RHU%2BK42rZRemNNn2azwS1GKcqUKLPlourru7QMKublb0GOqUBIe5eeTi0wfrHFpD2unrruTOL5pVUMnUSmCqE6KG1fP0GQPaVm7KTcKfF9QxPeGZkBF6ouCB%2BpSN4yidfcbCJM4iv3e8K50QjSAuC639gbdQfkqFzogSeYnT1jVyyHIfbnj%2FPEK5HMXb1kBHM0XXv%2FvU569DDmze6Or3StaI2D1251FD4yk9jISl0LtNZuG1HEZrj%2FPei3KLlyJ6nbFlaiLCBTtc4&X-Amz-Signature=74e1959d7aa85df2369147f6a8ac2d9008983d90147097d79e065c1dedba6f89&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667266MIGF%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQC9OAVUMs1zMSxw3E7kP7NoEmaBgMkkC9PBWn8CZIE89AIgYcGbXWtq4lvQfA6d6PWLplFBDjJYUNp71%2FJUdXkcHN8q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDKnfRdL6XSE9CT%2FMJCrcA8ZSDkkeybJyYmfgHq67rqsYOC5RlCIeEl94iyrpwjOXI0QTZzmnKjMnJOpfPeLfLngKqSgK6yZo%2BKvqcJyH%2B35zSK94qboSiaNNOubVpNMrTl5oQstD4mE6Aa1U2VcoMT2vYpleQZvl%2FxA9wJK%2F%2FK75VQPztu%2BCCWExlbJDv6UAR4DV6nhpGoN%2BNEL77ttF36HgPlJKl7DU%2BQm8jgSsJ69m4p6vJ8ppbNvxYxnVQ5hzf4dqYHTmbRqKvWOnp20PEJhorNdodLVyQ3woPY0l%2Bc4a5hKjukWF5%2FoWv8rGSKgX3upshmFxDE46jlQbL6Chh%2FMraJCnm5GzXwHofe5lBHwaZ1XogeKPbe%2B1NWcmIHtPmh3m%2BzGIgYoFY8OsBamBIKkD3rdlx8rCuRBzNuKSXDOPlfp9YcbI9hjuHH%2FhgtgOKTnnjb1172%2BnV5yuTtMmNFTULw2JlxOzbylL338Zgdp4uOzynleerJ0Tcw0IvqIveFiHshBtin7r5gSNzixpCdipN7c6Y4QUCk6gS%2B%2BIfd5leWo4IZLfmTOiVLEbSqteX8aFIxVbX9E8guCAuTBVxcmEuj%2Fo6zJG%2FhByO0WHkq5RHU%2BK42rZRemNNn2azwS1GKcqUKLPlourru7QMKublb0GOqUBIe5eeTi0wfrHFpD2unrruTOL5pVUMnUSmCqE6KG1fP0GQPaVm7KTcKfF9QxPeGZkBF6ouCB%2BpSN4yidfcbCJM4iv3e8K50QjSAuC639gbdQfkqFzogSeYnT1jVyyHIfbnj%2FPEK5HMXb1kBHM0XXv%2FvU569DDmze6Or3StaI2D1251FD4yk9jISl0LtNZuG1HEZrj%2FPei3KLlyJ6nbFlaiLCBTtc4&X-Amz-Signature=1a2c47f1e7a731aec5cf19df5b5ce3faedfae0e7e0fc0669e0b995d7c2939b97&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667266MIGF%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIQC9OAVUMs1zMSxw3E7kP7NoEmaBgMkkC9PBWn8CZIE89AIgYcGbXWtq4lvQfA6d6PWLplFBDjJYUNp71%2FJUdXkcHN8q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDKnfRdL6XSE9CT%2FMJCrcA8ZSDkkeybJyYmfgHq67rqsYOC5RlCIeEl94iyrpwjOXI0QTZzmnKjMnJOpfPeLfLngKqSgK6yZo%2BKvqcJyH%2B35zSK94qboSiaNNOubVpNMrTl5oQstD4mE6Aa1U2VcoMT2vYpleQZvl%2FxA9wJK%2F%2FK75VQPztu%2BCCWExlbJDv6UAR4DV6nhpGoN%2BNEL77ttF36HgPlJKl7DU%2BQm8jgSsJ69m4p6vJ8ppbNvxYxnVQ5hzf4dqYHTmbRqKvWOnp20PEJhorNdodLVyQ3woPY0l%2Bc4a5hKjukWF5%2FoWv8rGSKgX3upshmFxDE46jlQbL6Chh%2FMraJCnm5GzXwHofe5lBHwaZ1XogeKPbe%2B1NWcmIHtPmh3m%2BzGIgYoFY8OsBamBIKkD3rdlx8rCuRBzNuKSXDOPlfp9YcbI9hjuHH%2FhgtgOKTnnjb1172%2BnV5yuTtMmNFTULw2JlxOzbylL338Zgdp4uOzynleerJ0Tcw0IvqIveFiHshBtin7r5gSNzixpCdipN7c6Y4QUCk6gS%2B%2BIfd5leWo4IZLfmTOiVLEbSqteX8aFIxVbX9E8guCAuTBVxcmEuj%2Fo6zJG%2FhByO0WHkq5RHU%2BK42rZRemNNn2azwS1GKcqUKLPlourru7QMKublb0GOqUBIe5eeTi0wfrHFpD2unrruTOL5pVUMnUSmCqE6KG1fP0GQPaVm7KTcKfF9QxPeGZkBF6ouCB%2BpSN4yidfcbCJM4iv3e8K50QjSAuC639gbdQfkqFzogSeYnT1jVyyHIfbnj%2FPEK5HMXb1kBHM0XXv%2FvU569DDmze6Or3StaI2D1251FD4yk9jISl0LtNZuG1HEZrj%2FPei3KLlyJ6nbFlaiLCBTtc4&X-Amz-Signature=a6bcdb2b6b2fd88446732296e538d6bccab3e52bc940cd48ed830fab045e7167&X-Amz-SignedHeaders=host&x-id=GetObject)
