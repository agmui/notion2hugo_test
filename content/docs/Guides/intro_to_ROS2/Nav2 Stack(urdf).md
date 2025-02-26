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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z65YYI2H%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T003655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIHq5wkQHpnBdpdVTm1tReJahUU93TeZlNc9BPcn06owfAiEA70Mq8bQuVfkIWZl04Tng9teraGH5N25nII7QTY7SqRAq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDG1WhMmFU%2BZgcgrKwCrcA5mP4Dnv0ahLoR6W9KkaeZpn3nW3%2BrCKEGEx0UItQ7vkPOMo2NGa2ZjSqEnB%2B5NcCADg0AkF0TLnpBN3LEKX83fJLDXSFeCWsiKa3AOJIH4%2FAzlcXnzuA1D%2B%2Fmg7Q34AjVFwUqA3pvK1JubjhrwJaa6VcvA1%2Fruzx%2FjPi40MVgnS5fY6qTj5WDVxbSwQ%2FyChtSp8QHNR4op8aQnJqDyRG6wS2FzW0jVcZpwZq3M0b6eS%2Fea7GzpfLl0%2Bz0xWMpgr%2ByDBsGyEmDsuE7uFEmPSfBC2TryepYrBV%2BkG%2BE7NRL1FwUAV944lmT%2BhpXobSAEE%2FLjm81FHVqknczjJY6Z7nvcp3Sul1rZ9uJe8jUUvGlKdQ4PD%2BQunQ7h%2BJCcsp8OJEOPP%2FWz6HJTNsjkTTGj2Th1wZEdMg%2BRxicGUIXJzpMOWDDUrnCNmnBp7BK1Ilw23shRPuLHUvjHfaxQVvM4l0pwC9PzP8zfV4NgKWWL5BgpQgjmunbsxwccT5%2F1%2FCpSlmTcF9w8J%2FttR5ufVU9rCL%2FM67HB5%2F8mZwvP2rzpD6VpD%2B%2FD%2FcOksqlLRQPzGixxppXb9ZBcX049xElg%2BKZAPzfhCgLpR9DyV0Xi2MrpYNXEq2ajzIdg1PreL%2BTrPMM68%2Bb0GOqUBqsza02pVU9Vgck1OCDWiDBAQ0PJb1oebz%2B1fun%2BBrQMbz098or%2FTok0YHmcVeclfBQiLfs6RIYIcPJfFNQ51OmSkB1TFFA3u4tnO3pGAIC8jkcf4x1qxnrbb%2FwMvJvHyiUADwNS5r7tpicrDzcdQjJjXRQ7rWpvFXdx1ZoTowRd%2BwlfpGYlDuTAl9r1exfOiNp1UDE%2FFJqMgSXaQvwDae7cD01b7&X-Amz-Signature=d75f43e22f2c3eb600a3e8bc5e86628da7535584e1b2f783b6cb3a05b56340b1&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z65YYI2H%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T003655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIHq5wkQHpnBdpdVTm1tReJahUU93TeZlNc9BPcn06owfAiEA70Mq8bQuVfkIWZl04Tng9teraGH5N25nII7QTY7SqRAq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDG1WhMmFU%2BZgcgrKwCrcA5mP4Dnv0ahLoR6W9KkaeZpn3nW3%2BrCKEGEx0UItQ7vkPOMo2NGa2ZjSqEnB%2B5NcCADg0AkF0TLnpBN3LEKX83fJLDXSFeCWsiKa3AOJIH4%2FAzlcXnzuA1D%2B%2Fmg7Q34AjVFwUqA3pvK1JubjhrwJaa6VcvA1%2Fruzx%2FjPi40MVgnS5fY6qTj5WDVxbSwQ%2FyChtSp8QHNR4op8aQnJqDyRG6wS2FzW0jVcZpwZq3M0b6eS%2Fea7GzpfLl0%2Bz0xWMpgr%2ByDBsGyEmDsuE7uFEmPSfBC2TryepYrBV%2BkG%2BE7NRL1FwUAV944lmT%2BhpXobSAEE%2FLjm81FHVqknczjJY6Z7nvcp3Sul1rZ9uJe8jUUvGlKdQ4PD%2BQunQ7h%2BJCcsp8OJEOPP%2FWz6HJTNsjkTTGj2Th1wZEdMg%2BRxicGUIXJzpMOWDDUrnCNmnBp7BK1Ilw23shRPuLHUvjHfaxQVvM4l0pwC9PzP8zfV4NgKWWL5BgpQgjmunbsxwccT5%2F1%2FCpSlmTcF9w8J%2FttR5ufVU9rCL%2FM67HB5%2F8mZwvP2rzpD6VpD%2B%2FD%2FcOksqlLRQPzGixxppXb9ZBcX049xElg%2BKZAPzfhCgLpR9DyV0Xi2MrpYNXEq2ajzIdg1PreL%2BTrPMM68%2Bb0GOqUBqsza02pVU9Vgck1OCDWiDBAQ0PJb1oebz%2B1fun%2BBrQMbz098or%2FTok0YHmcVeclfBQiLfs6RIYIcPJfFNQ51OmSkB1TFFA3u4tnO3pGAIC8jkcf4x1qxnrbb%2FwMvJvHyiUADwNS5r7tpicrDzcdQjJjXRQ7rWpvFXdx1ZoTowRd%2BwlfpGYlDuTAl9r1exfOiNp1UDE%2FFJqMgSXaQvwDae7cD01b7&X-Amz-Signature=19f84840a75a8702d65c0807379da65f7fa77e446f07e38c4e31d05f0561e578&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z65YYI2H%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T003655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIHq5wkQHpnBdpdVTm1tReJahUU93TeZlNc9BPcn06owfAiEA70Mq8bQuVfkIWZl04Tng9teraGH5N25nII7QTY7SqRAq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDG1WhMmFU%2BZgcgrKwCrcA5mP4Dnv0ahLoR6W9KkaeZpn3nW3%2BrCKEGEx0UItQ7vkPOMo2NGa2ZjSqEnB%2B5NcCADg0AkF0TLnpBN3LEKX83fJLDXSFeCWsiKa3AOJIH4%2FAzlcXnzuA1D%2B%2Fmg7Q34AjVFwUqA3pvK1JubjhrwJaa6VcvA1%2Fruzx%2FjPi40MVgnS5fY6qTj5WDVxbSwQ%2FyChtSp8QHNR4op8aQnJqDyRG6wS2FzW0jVcZpwZq3M0b6eS%2Fea7GzpfLl0%2Bz0xWMpgr%2ByDBsGyEmDsuE7uFEmPSfBC2TryepYrBV%2BkG%2BE7NRL1FwUAV944lmT%2BhpXobSAEE%2FLjm81FHVqknczjJY6Z7nvcp3Sul1rZ9uJe8jUUvGlKdQ4PD%2BQunQ7h%2BJCcsp8OJEOPP%2FWz6HJTNsjkTTGj2Th1wZEdMg%2BRxicGUIXJzpMOWDDUrnCNmnBp7BK1Ilw23shRPuLHUvjHfaxQVvM4l0pwC9PzP8zfV4NgKWWL5BgpQgjmunbsxwccT5%2F1%2FCpSlmTcF9w8J%2FttR5ufVU9rCL%2FM67HB5%2F8mZwvP2rzpD6VpD%2B%2FD%2FcOksqlLRQPzGixxppXb9ZBcX049xElg%2BKZAPzfhCgLpR9DyV0Xi2MrpYNXEq2ajzIdg1PreL%2BTrPMM68%2Bb0GOqUBqsza02pVU9Vgck1OCDWiDBAQ0PJb1oebz%2B1fun%2BBrQMbz098or%2FTok0YHmcVeclfBQiLfs6RIYIcPJfFNQ51OmSkB1TFFA3u4tnO3pGAIC8jkcf4x1qxnrbb%2FwMvJvHyiUADwNS5r7tpicrDzcdQjJjXRQ7rWpvFXdx1ZoTowRd%2BwlfpGYlDuTAl9r1exfOiNp1UDE%2FFJqMgSXaQvwDae7cD01b7&X-Amz-Signature=41504ad629a5f1371d28def0f7a5197cef4d3cc94aa1a657ca3b8c7f65db7c58&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z65YYI2H%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T003655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIHq5wkQHpnBdpdVTm1tReJahUU93TeZlNc9BPcn06owfAiEA70Mq8bQuVfkIWZl04Tng9teraGH5N25nII7QTY7SqRAq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDG1WhMmFU%2BZgcgrKwCrcA5mP4Dnv0ahLoR6W9KkaeZpn3nW3%2BrCKEGEx0UItQ7vkPOMo2NGa2ZjSqEnB%2B5NcCADg0AkF0TLnpBN3LEKX83fJLDXSFeCWsiKa3AOJIH4%2FAzlcXnzuA1D%2B%2Fmg7Q34AjVFwUqA3pvK1JubjhrwJaa6VcvA1%2Fruzx%2FjPi40MVgnS5fY6qTj5WDVxbSwQ%2FyChtSp8QHNR4op8aQnJqDyRG6wS2FzW0jVcZpwZq3M0b6eS%2Fea7GzpfLl0%2Bz0xWMpgr%2ByDBsGyEmDsuE7uFEmPSfBC2TryepYrBV%2BkG%2BE7NRL1FwUAV944lmT%2BhpXobSAEE%2FLjm81FHVqknczjJY6Z7nvcp3Sul1rZ9uJe8jUUvGlKdQ4PD%2BQunQ7h%2BJCcsp8OJEOPP%2FWz6HJTNsjkTTGj2Th1wZEdMg%2BRxicGUIXJzpMOWDDUrnCNmnBp7BK1Ilw23shRPuLHUvjHfaxQVvM4l0pwC9PzP8zfV4NgKWWL5BgpQgjmunbsxwccT5%2F1%2FCpSlmTcF9w8J%2FttR5ufVU9rCL%2FM67HB5%2F8mZwvP2rzpD6VpD%2B%2FD%2FcOksqlLRQPzGixxppXb9ZBcX049xElg%2BKZAPzfhCgLpR9DyV0Xi2MrpYNXEq2ajzIdg1PreL%2BTrPMM68%2Bb0GOqUBqsza02pVU9Vgck1OCDWiDBAQ0PJb1oebz%2B1fun%2BBrQMbz098or%2FTok0YHmcVeclfBQiLfs6RIYIcPJfFNQ51OmSkB1TFFA3u4tnO3pGAIC8jkcf4x1qxnrbb%2FwMvJvHyiUADwNS5r7tpicrDzcdQjJjXRQ7rWpvFXdx1ZoTowRd%2BwlfpGYlDuTAl9r1exfOiNp1UDE%2FFJqMgSXaQvwDae7cD01b7&X-Amz-Signature=c87e2f3d3faab7ca273923489008c1c265c9b746648380bbc55777eee5153cf5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z65YYI2H%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T003655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIHq5wkQHpnBdpdVTm1tReJahUU93TeZlNc9BPcn06owfAiEA70Mq8bQuVfkIWZl04Tng9teraGH5N25nII7QTY7SqRAq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDG1WhMmFU%2BZgcgrKwCrcA5mP4Dnv0ahLoR6W9KkaeZpn3nW3%2BrCKEGEx0UItQ7vkPOMo2NGa2ZjSqEnB%2B5NcCADg0AkF0TLnpBN3LEKX83fJLDXSFeCWsiKa3AOJIH4%2FAzlcXnzuA1D%2B%2Fmg7Q34AjVFwUqA3pvK1JubjhrwJaa6VcvA1%2Fruzx%2FjPi40MVgnS5fY6qTj5WDVxbSwQ%2FyChtSp8QHNR4op8aQnJqDyRG6wS2FzW0jVcZpwZq3M0b6eS%2Fea7GzpfLl0%2Bz0xWMpgr%2ByDBsGyEmDsuE7uFEmPSfBC2TryepYrBV%2BkG%2BE7NRL1FwUAV944lmT%2BhpXobSAEE%2FLjm81FHVqknczjJY6Z7nvcp3Sul1rZ9uJe8jUUvGlKdQ4PD%2BQunQ7h%2BJCcsp8OJEOPP%2FWz6HJTNsjkTTGj2Th1wZEdMg%2BRxicGUIXJzpMOWDDUrnCNmnBp7BK1Ilw23shRPuLHUvjHfaxQVvM4l0pwC9PzP8zfV4NgKWWL5BgpQgjmunbsxwccT5%2F1%2FCpSlmTcF9w8J%2FttR5ufVU9rCL%2FM67HB5%2F8mZwvP2rzpD6VpD%2B%2FD%2FcOksqlLRQPzGixxppXb9ZBcX049xElg%2BKZAPzfhCgLpR9DyV0Xi2MrpYNXEq2ajzIdg1PreL%2BTrPMM68%2Bb0GOqUBqsza02pVU9Vgck1OCDWiDBAQ0PJb1oebz%2B1fun%2BBrQMbz098or%2FTok0YHmcVeclfBQiLfs6RIYIcPJfFNQ51OmSkB1TFFA3u4tnO3pGAIC8jkcf4x1qxnrbb%2FwMvJvHyiUADwNS5r7tpicrDzcdQjJjXRQ7rWpvFXdx1ZoTowRd%2BwlfpGYlDuTAl9r1exfOiNp1UDE%2FFJqMgSXaQvwDae7cD01b7&X-Amz-Signature=d02533bd79d1d0b4764d023421daf9536c4a8bcc55551508d9e901e5de2196c6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z65YYI2H%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T003655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIHq5wkQHpnBdpdVTm1tReJahUU93TeZlNc9BPcn06owfAiEA70Mq8bQuVfkIWZl04Tng9teraGH5N25nII7QTY7SqRAq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDG1WhMmFU%2BZgcgrKwCrcA5mP4Dnv0ahLoR6W9KkaeZpn3nW3%2BrCKEGEx0UItQ7vkPOMo2NGa2ZjSqEnB%2B5NcCADg0AkF0TLnpBN3LEKX83fJLDXSFeCWsiKa3AOJIH4%2FAzlcXnzuA1D%2B%2Fmg7Q34AjVFwUqA3pvK1JubjhrwJaa6VcvA1%2Fruzx%2FjPi40MVgnS5fY6qTj5WDVxbSwQ%2FyChtSp8QHNR4op8aQnJqDyRG6wS2FzW0jVcZpwZq3M0b6eS%2Fea7GzpfLl0%2Bz0xWMpgr%2ByDBsGyEmDsuE7uFEmPSfBC2TryepYrBV%2BkG%2BE7NRL1FwUAV944lmT%2BhpXobSAEE%2FLjm81FHVqknczjJY6Z7nvcp3Sul1rZ9uJe8jUUvGlKdQ4PD%2BQunQ7h%2BJCcsp8OJEOPP%2FWz6HJTNsjkTTGj2Th1wZEdMg%2BRxicGUIXJzpMOWDDUrnCNmnBp7BK1Ilw23shRPuLHUvjHfaxQVvM4l0pwC9PzP8zfV4NgKWWL5BgpQgjmunbsxwccT5%2F1%2FCpSlmTcF9w8J%2FttR5ufVU9rCL%2FM67HB5%2F8mZwvP2rzpD6VpD%2B%2FD%2FcOksqlLRQPzGixxppXb9ZBcX049xElg%2BKZAPzfhCgLpR9DyV0Xi2MrpYNXEq2ajzIdg1PreL%2BTrPMM68%2Bb0GOqUBqsza02pVU9Vgck1OCDWiDBAQ0PJb1oebz%2B1fun%2BBrQMbz098or%2FTok0YHmcVeclfBQiLfs6RIYIcPJfFNQ51OmSkB1TFFA3u4tnO3pGAIC8jkcf4x1qxnrbb%2FwMvJvHyiUADwNS5r7tpicrDzcdQjJjXRQ7rWpvFXdx1ZoTowRd%2BwlfpGYlDuTAl9r1exfOiNp1UDE%2FFJqMgSXaQvwDae7cD01b7&X-Amz-Signature=694ec4fc4c9c825e789f665bd4cea647e463c8bbe4a5e55a6b5d8236215a5dc8&X-Amz-SignedHeaders=host&x-id=GetObject)
