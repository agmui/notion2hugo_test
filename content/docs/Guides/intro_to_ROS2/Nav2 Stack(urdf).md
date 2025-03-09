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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRL6Q5O3%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T003338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIF4uy4RehWEjQkgluzImXxTReGOVF4yBsTT1KxFNqCMiAiEAuj7DQFl0ZKF98NnFToqlaEH3ipbP31RElw0zBnksJooq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDDn2fA07z%2BRsmDfDSCrcAwtl8RkCJl%2Fx8B1RFieqYOhQyDy4x2NJzJkVsIH9xLLVWHk9Ti1zsiBZz0oS3dJykGc0PXSTZmsRa%2FMlmQmPlxK0R5YPxgMvUE1f2ixIw1dxmaMdWRadeOa4HUm6ZuQDVm46iS6RhIC3LZCXUCmSgUDMohyQ2eZzFXVYQPjBAcJBQCF8Hf%2B09DrHCMP8rihEHgvTVWrYlVxLdpofldqA%2BHNi9GfPoHyIn5UZQjzPYaqT2fZBgQDfvbKMd05spUkFMaYCgfe29fOnSOOM3LwBBSazI82ACCCeEO2%2FcEDUt8dK0dAso4Avag90or1O2BbeosW5KAJhRMb8S%2FIPT%2F4KQFAGpRuovDKpQ%2B2lTpXQRV8NjcO0B%2Fd8TUXG5PD4BZrZukKjKDBl%2ByrpUk9rhZMu%2FIBxgZDI1jfaIlgRRztNY%2BCLkjWYT1M34YJLztTJBqo9DCUIGcO5FAbZgoiOvWr%2BOKcvegsZzvfTT1oT9EBhSeNJShBSRA6qTZcEnaZkRIeDu8BgEYB%2Bj69RfoMbL%2Bl3x2Gujdbs45aTJm8PkviuAzMn%2BnhUrLrYPZXBB2REVudHyPD4Hdz5Fk%2FTpQcqjwoBz1dXFfQrrMRea4nmJPbY8wep4B%2FMa%2FkeiN8AIn4dMImss74GOqUBxJo5yzxN%2BRdS8ftcJup2FBLF7b8344OcsMVTCHDxXzFL%2FwGv9eUEErzYuATN5gJW5OWzBef%2BcKjiJVpiP3N8IBNbiHxugrO0ecLiVF5gctpT7q45tKa0NCfdqXWP7yupJmenVSdSgDflJ3SnzyQD%2FIqvau%2Bpr6A7jPshGIo39dLZPtF%2BPyKHhIpAV%2Baz8IAc9LgczrMJK2Y6KnzO92tme5Y6oizv&X-Amz-Signature=88509051214af495703c6ece82d9b58fdc0720c30d3fd7613477aed55990d527&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRL6Q5O3%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T003338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIF4uy4RehWEjQkgluzImXxTReGOVF4yBsTT1KxFNqCMiAiEAuj7DQFl0ZKF98NnFToqlaEH3ipbP31RElw0zBnksJooq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDDn2fA07z%2BRsmDfDSCrcAwtl8RkCJl%2Fx8B1RFieqYOhQyDy4x2NJzJkVsIH9xLLVWHk9Ti1zsiBZz0oS3dJykGc0PXSTZmsRa%2FMlmQmPlxK0R5YPxgMvUE1f2ixIw1dxmaMdWRadeOa4HUm6ZuQDVm46iS6RhIC3LZCXUCmSgUDMohyQ2eZzFXVYQPjBAcJBQCF8Hf%2B09DrHCMP8rihEHgvTVWrYlVxLdpofldqA%2BHNi9GfPoHyIn5UZQjzPYaqT2fZBgQDfvbKMd05spUkFMaYCgfe29fOnSOOM3LwBBSazI82ACCCeEO2%2FcEDUt8dK0dAso4Avag90or1O2BbeosW5KAJhRMb8S%2FIPT%2F4KQFAGpRuovDKpQ%2B2lTpXQRV8NjcO0B%2Fd8TUXG5PD4BZrZukKjKDBl%2ByrpUk9rhZMu%2FIBxgZDI1jfaIlgRRztNY%2BCLkjWYT1M34YJLztTJBqo9DCUIGcO5FAbZgoiOvWr%2BOKcvegsZzvfTT1oT9EBhSeNJShBSRA6qTZcEnaZkRIeDu8BgEYB%2Bj69RfoMbL%2Bl3x2Gujdbs45aTJm8PkviuAzMn%2BnhUrLrYPZXBB2REVudHyPD4Hdz5Fk%2FTpQcqjwoBz1dXFfQrrMRea4nmJPbY8wep4B%2FMa%2FkeiN8AIn4dMImss74GOqUBxJo5yzxN%2BRdS8ftcJup2FBLF7b8344OcsMVTCHDxXzFL%2FwGv9eUEErzYuATN5gJW5OWzBef%2BcKjiJVpiP3N8IBNbiHxugrO0ecLiVF5gctpT7q45tKa0NCfdqXWP7yupJmenVSdSgDflJ3SnzyQD%2FIqvau%2Bpr6A7jPshGIo39dLZPtF%2BPyKHhIpAV%2Baz8IAc9LgczrMJK2Y6KnzO92tme5Y6oizv&X-Amz-Signature=73a0fa7f861387eb287e032a75f4519d432fed07a84048c77bbae1116f5b1926&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRL6Q5O3%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T003338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIF4uy4RehWEjQkgluzImXxTReGOVF4yBsTT1KxFNqCMiAiEAuj7DQFl0ZKF98NnFToqlaEH3ipbP31RElw0zBnksJooq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDDn2fA07z%2BRsmDfDSCrcAwtl8RkCJl%2Fx8B1RFieqYOhQyDy4x2NJzJkVsIH9xLLVWHk9Ti1zsiBZz0oS3dJykGc0PXSTZmsRa%2FMlmQmPlxK0R5YPxgMvUE1f2ixIw1dxmaMdWRadeOa4HUm6ZuQDVm46iS6RhIC3LZCXUCmSgUDMohyQ2eZzFXVYQPjBAcJBQCF8Hf%2B09DrHCMP8rihEHgvTVWrYlVxLdpofldqA%2BHNi9GfPoHyIn5UZQjzPYaqT2fZBgQDfvbKMd05spUkFMaYCgfe29fOnSOOM3LwBBSazI82ACCCeEO2%2FcEDUt8dK0dAso4Avag90or1O2BbeosW5KAJhRMb8S%2FIPT%2F4KQFAGpRuovDKpQ%2B2lTpXQRV8NjcO0B%2Fd8TUXG5PD4BZrZukKjKDBl%2ByrpUk9rhZMu%2FIBxgZDI1jfaIlgRRztNY%2BCLkjWYT1M34YJLztTJBqo9DCUIGcO5FAbZgoiOvWr%2BOKcvegsZzvfTT1oT9EBhSeNJShBSRA6qTZcEnaZkRIeDu8BgEYB%2Bj69RfoMbL%2Bl3x2Gujdbs45aTJm8PkviuAzMn%2BnhUrLrYPZXBB2REVudHyPD4Hdz5Fk%2FTpQcqjwoBz1dXFfQrrMRea4nmJPbY8wep4B%2FMa%2FkeiN8AIn4dMImss74GOqUBxJo5yzxN%2BRdS8ftcJup2FBLF7b8344OcsMVTCHDxXzFL%2FwGv9eUEErzYuATN5gJW5OWzBef%2BcKjiJVpiP3N8IBNbiHxugrO0ecLiVF5gctpT7q45tKa0NCfdqXWP7yupJmenVSdSgDflJ3SnzyQD%2FIqvau%2Bpr6A7jPshGIo39dLZPtF%2BPyKHhIpAV%2Baz8IAc9LgczrMJK2Y6KnzO92tme5Y6oizv&X-Amz-Signature=0fc53d31e2b76ba1863638585c9151c9a169448fe2ebf155804d13dda27c7d8a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRL6Q5O3%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T003338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIF4uy4RehWEjQkgluzImXxTReGOVF4yBsTT1KxFNqCMiAiEAuj7DQFl0ZKF98NnFToqlaEH3ipbP31RElw0zBnksJooq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDDn2fA07z%2BRsmDfDSCrcAwtl8RkCJl%2Fx8B1RFieqYOhQyDy4x2NJzJkVsIH9xLLVWHk9Ti1zsiBZz0oS3dJykGc0PXSTZmsRa%2FMlmQmPlxK0R5YPxgMvUE1f2ixIw1dxmaMdWRadeOa4HUm6ZuQDVm46iS6RhIC3LZCXUCmSgUDMohyQ2eZzFXVYQPjBAcJBQCF8Hf%2B09DrHCMP8rihEHgvTVWrYlVxLdpofldqA%2BHNi9GfPoHyIn5UZQjzPYaqT2fZBgQDfvbKMd05spUkFMaYCgfe29fOnSOOM3LwBBSazI82ACCCeEO2%2FcEDUt8dK0dAso4Avag90or1O2BbeosW5KAJhRMb8S%2FIPT%2F4KQFAGpRuovDKpQ%2B2lTpXQRV8NjcO0B%2Fd8TUXG5PD4BZrZukKjKDBl%2ByrpUk9rhZMu%2FIBxgZDI1jfaIlgRRztNY%2BCLkjWYT1M34YJLztTJBqo9DCUIGcO5FAbZgoiOvWr%2BOKcvegsZzvfTT1oT9EBhSeNJShBSRA6qTZcEnaZkRIeDu8BgEYB%2Bj69RfoMbL%2Bl3x2Gujdbs45aTJm8PkviuAzMn%2BnhUrLrYPZXBB2REVudHyPD4Hdz5Fk%2FTpQcqjwoBz1dXFfQrrMRea4nmJPbY8wep4B%2FMa%2FkeiN8AIn4dMImss74GOqUBxJo5yzxN%2BRdS8ftcJup2FBLF7b8344OcsMVTCHDxXzFL%2FwGv9eUEErzYuATN5gJW5OWzBef%2BcKjiJVpiP3N8IBNbiHxugrO0ecLiVF5gctpT7q45tKa0NCfdqXWP7yupJmenVSdSgDflJ3SnzyQD%2FIqvau%2Bpr6A7jPshGIo39dLZPtF%2BPyKHhIpAV%2Baz8IAc9LgczrMJK2Y6KnzO92tme5Y6oizv&X-Amz-Signature=3bef657156cf9963441fc0dc19cf8edecbf7509b481cc9b12e5fe5e04c6a0b6e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRL6Q5O3%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T003338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIF4uy4RehWEjQkgluzImXxTReGOVF4yBsTT1KxFNqCMiAiEAuj7DQFl0ZKF98NnFToqlaEH3ipbP31RElw0zBnksJooq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDDn2fA07z%2BRsmDfDSCrcAwtl8RkCJl%2Fx8B1RFieqYOhQyDy4x2NJzJkVsIH9xLLVWHk9Ti1zsiBZz0oS3dJykGc0PXSTZmsRa%2FMlmQmPlxK0R5YPxgMvUE1f2ixIw1dxmaMdWRadeOa4HUm6ZuQDVm46iS6RhIC3LZCXUCmSgUDMohyQ2eZzFXVYQPjBAcJBQCF8Hf%2B09DrHCMP8rihEHgvTVWrYlVxLdpofldqA%2BHNi9GfPoHyIn5UZQjzPYaqT2fZBgQDfvbKMd05spUkFMaYCgfe29fOnSOOM3LwBBSazI82ACCCeEO2%2FcEDUt8dK0dAso4Avag90or1O2BbeosW5KAJhRMb8S%2FIPT%2F4KQFAGpRuovDKpQ%2B2lTpXQRV8NjcO0B%2Fd8TUXG5PD4BZrZukKjKDBl%2ByrpUk9rhZMu%2FIBxgZDI1jfaIlgRRztNY%2BCLkjWYT1M34YJLztTJBqo9DCUIGcO5FAbZgoiOvWr%2BOKcvegsZzvfTT1oT9EBhSeNJShBSRA6qTZcEnaZkRIeDu8BgEYB%2Bj69RfoMbL%2Bl3x2Gujdbs45aTJm8PkviuAzMn%2BnhUrLrYPZXBB2REVudHyPD4Hdz5Fk%2FTpQcqjwoBz1dXFfQrrMRea4nmJPbY8wep4B%2FMa%2FkeiN8AIn4dMImss74GOqUBxJo5yzxN%2BRdS8ftcJup2FBLF7b8344OcsMVTCHDxXzFL%2FwGv9eUEErzYuATN5gJW5OWzBef%2BcKjiJVpiP3N8IBNbiHxugrO0ecLiVF5gctpT7q45tKa0NCfdqXWP7yupJmenVSdSgDflJ3SnzyQD%2FIqvau%2Bpr6A7jPshGIo39dLZPtF%2BPyKHhIpAV%2Baz8IAc9LgczrMJK2Y6KnzO92tme5Y6oizv&X-Amz-Signature=60210d113bbc901e6ec0b5f81c3d8f0f8ed8b7d23f85fb75ef05c34da9a6ebc7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRL6Q5O3%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T003338Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIF4uy4RehWEjQkgluzImXxTReGOVF4yBsTT1KxFNqCMiAiEAuj7DQFl0ZKF98NnFToqlaEH3ipbP31RElw0zBnksJooq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDDn2fA07z%2BRsmDfDSCrcAwtl8RkCJl%2Fx8B1RFieqYOhQyDy4x2NJzJkVsIH9xLLVWHk9Ti1zsiBZz0oS3dJykGc0PXSTZmsRa%2FMlmQmPlxK0R5YPxgMvUE1f2ixIw1dxmaMdWRadeOa4HUm6ZuQDVm46iS6RhIC3LZCXUCmSgUDMohyQ2eZzFXVYQPjBAcJBQCF8Hf%2B09DrHCMP8rihEHgvTVWrYlVxLdpofldqA%2BHNi9GfPoHyIn5UZQjzPYaqT2fZBgQDfvbKMd05spUkFMaYCgfe29fOnSOOM3LwBBSazI82ACCCeEO2%2FcEDUt8dK0dAso4Avag90or1O2BbeosW5KAJhRMb8S%2FIPT%2F4KQFAGpRuovDKpQ%2B2lTpXQRV8NjcO0B%2Fd8TUXG5PD4BZrZukKjKDBl%2ByrpUk9rhZMu%2FIBxgZDI1jfaIlgRRztNY%2BCLkjWYT1M34YJLztTJBqo9DCUIGcO5FAbZgoiOvWr%2BOKcvegsZzvfTT1oT9EBhSeNJShBSRA6qTZcEnaZkRIeDu8BgEYB%2Bj69RfoMbL%2Bl3x2Gujdbs45aTJm8PkviuAzMn%2BnhUrLrYPZXBB2REVudHyPD4Hdz5Fk%2FTpQcqjwoBz1dXFfQrrMRea4nmJPbY8wep4B%2FMa%2FkeiN8AIn4dMImss74GOqUBxJo5yzxN%2BRdS8ftcJup2FBLF7b8344OcsMVTCHDxXzFL%2FwGv9eUEErzYuATN5gJW5OWzBef%2BcKjiJVpiP3N8IBNbiHxugrO0ecLiVF5gctpT7q45tKa0NCfdqXWP7yupJmenVSdSgDflJ3SnzyQD%2FIqvau%2Bpr6A7jPshGIo39dLZPtF%2BPyKHhIpAV%2Baz8IAc9LgczrMJK2Y6KnzO92tme5Y6oizv&X-Amz-Signature=c4e31cbc634f5459263afe4cb795b19be9197b664845d26319f80cb89c394298&X-Amz-SignedHeaders=host&x-id=GetObject)
