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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3WKZOOR%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T101005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4Uq0MB8Wo9cx2lN%2FkjmQfkfXdEmwCR2KTeTevT2Ii2gIgO0ha87rrNOKOq9yCifFGKzYHbbKeIspDMQ%2BapsOBfV0qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhsFiBXJPs%2FIyDzTircA7ghwtnopE9gzQ2GvtUWr8ONEzVTEIhrhJSmg8Tull5GdOgbnvDTmYexfzWsUrRBJEtgy2Kb1SJ%2BpEG82wbNtcByw73LsrnaR4sB%2FSo2axJ%2B%2Fg1xN7DgnDKyDvrzOJSeVkfGQLcIdPGyIOm05kqN4aGxketm4ZPtrqy%2BpHk%2FrYyTloQoXtYpPSmFHRtRvh0ljCPttk4%2BmPewaZHb%2FQib8ISbGnRUc7UAg1C5egGB106%2B6OW3sv0tyeFMVDbwCBjciFa023EC1d55M5jYw9OYYf8AvZ83Ahc3pVUnDyVmPuOsI0rdvPXJ0oa3Pfn8la5eUqDgZ1TgWoQB0SAkJHaz9AIfJqRBsHpMKsXU67ILcptl56w6PJf1nLW8iuraifvj%2FhHO2CizLUd89iwRngXHpIqVMJ8m7AirVXic%2BXf%2BUdc0T7Fuohzhw1FdAvi3SEGuaG07nMYwd0Na5Lf8ZVpcCcCxEGOzGzQcCOy2TDZNSkVb7dncrxByGMr8ewi%2B%2FdqnqKJibvC67wHWn88syNXJSOgbyYNBaITgmu7EGJ3wbo1nhep7GhZGvvIrYc4o%2BKf0kepeY6DQRvgo5GKLXHYBVfr6aVbuuZdjgMY562Bt%2FiigB2xBau%2Bg%2F8vwY3uCMK6ow8MGOqUBiZEpTBveHsWVJ2s%2B49l08aZQ4oT13U7L%2FTyzTL5jTZP0AEM%2B4WPxm1SlDbQxO4SdrfMu8cPpfrzMIvLcPRaWiywRqcw7xszylWXMvW8K9WlyhGd%2Btr7fklzWtdI%2FPCkPVcud3JZz3pIsCV2%2FjkyJtvN%2F3PHZF0Q5%2FqZuDfiKuFj8URS2tr%2F2zkGw0Sk4tl9Pzd9auM63GW5meRAHI1wqrnLo2nHi&X-Amz-Signature=f0778dc41ecab78e7f1b99fa0cc09269c3ca4e1ed20a74634e2e957a52c3d56c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3WKZOOR%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T101005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4Uq0MB8Wo9cx2lN%2FkjmQfkfXdEmwCR2KTeTevT2Ii2gIgO0ha87rrNOKOq9yCifFGKzYHbbKeIspDMQ%2BapsOBfV0qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhsFiBXJPs%2FIyDzTircA7ghwtnopE9gzQ2GvtUWr8ONEzVTEIhrhJSmg8Tull5GdOgbnvDTmYexfzWsUrRBJEtgy2Kb1SJ%2BpEG82wbNtcByw73LsrnaR4sB%2FSo2axJ%2B%2Fg1xN7DgnDKyDvrzOJSeVkfGQLcIdPGyIOm05kqN4aGxketm4ZPtrqy%2BpHk%2FrYyTloQoXtYpPSmFHRtRvh0ljCPttk4%2BmPewaZHb%2FQib8ISbGnRUc7UAg1C5egGB106%2B6OW3sv0tyeFMVDbwCBjciFa023EC1d55M5jYw9OYYf8AvZ83Ahc3pVUnDyVmPuOsI0rdvPXJ0oa3Pfn8la5eUqDgZ1TgWoQB0SAkJHaz9AIfJqRBsHpMKsXU67ILcptl56w6PJf1nLW8iuraifvj%2FhHO2CizLUd89iwRngXHpIqVMJ8m7AirVXic%2BXf%2BUdc0T7Fuohzhw1FdAvi3SEGuaG07nMYwd0Na5Lf8ZVpcCcCxEGOzGzQcCOy2TDZNSkVb7dncrxByGMr8ewi%2B%2FdqnqKJibvC67wHWn88syNXJSOgbyYNBaITgmu7EGJ3wbo1nhep7GhZGvvIrYc4o%2BKf0kepeY6DQRvgo5GKLXHYBVfr6aVbuuZdjgMY562Bt%2FiigB2xBau%2Bg%2F8vwY3uCMK6ow8MGOqUBiZEpTBveHsWVJ2s%2B49l08aZQ4oT13U7L%2FTyzTL5jTZP0AEM%2B4WPxm1SlDbQxO4SdrfMu8cPpfrzMIvLcPRaWiywRqcw7xszylWXMvW8K9WlyhGd%2Btr7fklzWtdI%2FPCkPVcud3JZz3pIsCV2%2FjkyJtvN%2F3PHZF0Q5%2FqZuDfiKuFj8URS2tr%2F2zkGw0Sk4tl9Pzd9auM63GW5meRAHI1wqrnLo2nHi&X-Amz-Signature=d3313c3554ee5b8e8b2652ea32887e9a096b4b0eb1e689866704b9a0127372c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3WKZOOR%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T101005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4Uq0MB8Wo9cx2lN%2FkjmQfkfXdEmwCR2KTeTevT2Ii2gIgO0ha87rrNOKOq9yCifFGKzYHbbKeIspDMQ%2BapsOBfV0qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhsFiBXJPs%2FIyDzTircA7ghwtnopE9gzQ2GvtUWr8ONEzVTEIhrhJSmg8Tull5GdOgbnvDTmYexfzWsUrRBJEtgy2Kb1SJ%2BpEG82wbNtcByw73LsrnaR4sB%2FSo2axJ%2B%2Fg1xN7DgnDKyDvrzOJSeVkfGQLcIdPGyIOm05kqN4aGxketm4ZPtrqy%2BpHk%2FrYyTloQoXtYpPSmFHRtRvh0ljCPttk4%2BmPewaZHb%2FQib8ISbGnRUc7UAg1C5egGB106%2B6OW3sv0tyeFMVDbwCBjciFa023EC1d55M5jYw9OYYf8AvZ83Ahc3pVUnDyVmPuOsI0rdvPXJ0oa3Pfn8la5eUqDgZ1TgWoQB0SAkJHaz9AIfJqRBsHpMKsXU67ILcptl56w6PJf1nLW8iuraifvj%2FhHO2CizLUd89iwRngXHpIqVMJ8m7AirVXic%2BXf%2BUdc0T7Fuohzhw1FdAvi3SEGuaG07nMYwd0Na5Lf8ZVpcCcCxEGOzGzQcCOy2TDZNSkVb7dncrxByGMr8ewi%2B%2FdqnqKJibvC67wHWn88syNXJSOgbyYNBaITgmu7EGJ3wbo1nhep7GhZGvvIrYc4o%2BKf0kepeY6DQRvgo5GKLXHYBVfr6aVbuuZdjgMY562Bt%2FiigB2xBau%2Bg%2F8vwY3uCMK6ow8MGOqUBiZEpTBveHsWVJ2s%2B49l08aZQ4oT13U7L%2FTyzTL5jTZP0AEM%2B4WPxm1SlDbQxO4SdrfMu8cPpfrzMIvLcPRaWiywRqcw7xszylWXMvW8K9WlyhGd%2Btr7fklzWtdI%2FPCkPVcud3JZz3pIsCV2%2FjkyJtvN%2F3PHZF0Q5%2FqZuDfiKuFj8URS2tr%2F2zkGw0Sk4tl9Pzd9auM63GW5meRAHI1wqrnLo2nHi&X-Amz-Signature=ad7c2e485cf5a2711445de3f5ae53e3296c40f6c65622cd266b8549a55742a54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3WKZOOR%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T101005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4Uq0MB8Wo9cx2lN%2FkjmQfkfXdEmwCR2KTeTevT2Ii2gIgO0ha87rrNOKOq9yCifFGKzYHbbKeIspDMQ%2BapsOBfV0qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhsFiBXJPs%2FIyDzTircA7ghwtnopE9gzQ2GvtUWr8ONEzVTEIhrhJSmg8Tull5GdOgbnvDTmYexfzWsUrRBJEtgy2Kb1SJ%2BpEG82wbNtcByw73LsrnaR4sB%2FSo2axJ%2B%2Fg1xN7DgnDKyDvrzOJSeVkfGQLcIdPGyIOm05kqN4aGxketm4ZPtrqy%2BpHk%2FrYyTloQoXtYpPSmFHRtRvh0ljCPttk4%2BmPewaZHb%2FQib8ISbGnRUc7UAg1C5egGB106%2B6OW3sv0tyeFMVDbwCBjciFa023EC1d55M5jYw9OYYf8AvZ83Ahc3pVUnDyVmPuOsI0rdvPXJ0oa3Pfn8la5eUqDgZ1TgWoQB0SAkJHaz9AIfJqRBsHpMKsXU67ILcptl56w6PJf1nLW8iuraifvj%2FhHO2CizLUd89iwRngXHpIqVMJ8m7AirVXic%2BXf%2BUdc0T7Fuohzhw1FdAvi3SEGuaG07nMYwd0Na5Lf8ZVpcCcCxEGOzGzQcCOy2TDZNSkVb7dncrxByGMr8ewi%2B%2FdqnqKJibvC67wHWn88syNXJSOgbyYNBaITgmu7EGJ3wbo1nhep7GhZGvvIrYc4o%2BKf0kepeY6DQRvgo5GKLXHYBVfr6aVbuuZdjgMY562Bt%2FiigB2xBau%2Bg%2F8vwY3uCMK6ow8MGOqUBiZEpTBveHsWVJ2s%2B49l08aZQ4oT13U7L%2FTyzTL5jTZP0AEM%2B4WPxm1SlDbQxO4SdrfMu8cPpfrzMIvLcPRaWiywRqcw7xszylWXMvW8K9WlyhGd%2Btr7fklzWtdI%2FPCkPVcud3JZz3pIsCV2%2FjkyJtvN%2F3PHZF0Q5%2FqZuDfiKuFj8URS2tr%2F2zkGw0Sk4tl9Pzd9auM63GW5meRAHI1wqrnLo2nHi&X-Amz-Signature=590b9e023a5cbfc244a224499af02ec7b1a7c689cc226af4235d5fac781dddbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3WKZOOR%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T101005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4Uq0MB8Wo9cx2lN%2FkjmQfkfXdEmwCR2KTeTevT2Ii2gIgO0ha87rrNOKOq9yCifFGKzYHbbKeIspDMQ%2BapsOBfV0qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhsFiBXJPs%2FIyDzTircA7ghwtnopE9gzQ2GvtUWr8ONEzVTEIhrhJSmg8Tull5GdOgbnvDTmYexfzWsUrRBJEtgy2Kb1SJ%2BpEG82wbNtcByw73LsrnaR4sB%2FSo2axJ%2B%2Fg1xN7DgnDKyDvrzOJSeVkfGQLcIdPGyIOm05kqN4aGxketm4ZPtrqy%2BpHk%2FrYyTloQoXtYpPSmFHRtRvh0ljCPttk4%2BmPewaZHb%2FQib8ISbGnRUc7UAg1C5egGB106%2B6OW3sv0tyeFMVDbwCBjciFa023EC1d55M5jYw9OYYf8AvZ83Ahc3pVUnDyVmPuOsI0rdvPXJ0oa3Pfn8la5eUqDgZ1TgWoQB0SAkJHaz9AIfJqRBsHpMKsXU67ILcptl56w6PJf1nLW8iuraifvj%2FhHO2CizLUd89iwRngXHpIqVMJ8m7AirVXic%2BXf%2BUdc0T7Fuohzhw1FdAvi3SEGuaG07nMYwd0Na5Lf8ZVpcCcCxEGOzGzQcCOy2TDZNSkVb7dncrxByGMr8ewi%2B%2FdqnqKJibvC67wHWn88syNXJSOgbyYNBaITgmu7EGJ3wbo1nhep7GhZGvvIrYc4o%2BKf0kepeY6DQRvgo5GKLXHYBVfr6aVbuuZdjgMY562Bt%2FiigB2xBau%2Bg%2F8vwY3uCMK6ow8MGOqUBiZEpTBveHsWVJ2s%2B49l08aZQ4oT13U7L%2FTyzTL5jTZP0AEM%2B4WPxm1SlDbQxO4SdrfMu8cPpfrzMIvLcPRaWiywRqcw7xszylWXMvW8K9WlyhGd%2Btr7fklzWtdI%2FPCkPVcud3JZz3pIsCV2%2FjkyJtvN%2F3PHZF0Q5%2FqZuDfiKuFj8URS2tr%2F2zkGw0Sk4tl9Pzd9auM63GW5meRAHI1wqrnLo2nHi&X-Amz-Signature=592a2ebc4c3457b2ba091496f5fbb767a5cd9b3e8a7f44d8ac23b33ada623cf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3WKZOOR%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T101005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4Uq0MB8Wo9cx2lN%2FkjmQfkfXdEmwCR2KTeTevT2Ii2gIgO0ha87rrNOKOq9yCifFGKzYHbbKeIspDMQ%2BapsOBfV0qiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFhsFiBXJPs%2FIyDzTircA7ghwtnopE9gzQ2GvtUWr8ONEzVTEIhrhJSmg8Tull5GdOgbnvDTmYexfzWsUrRBJEtgy2Kb1SJ%2BpEG82wbNtcByw73LsrnaR4sB%2FSo2axJ%2B%2Fg1xN7DgnDKyDvrzOJSeVkfGQLcIdPGyIOm05kqN4aGxketm4ZPtrqy%2BpHk%2FrYyTloQoXtYpPSmFHRtRvh0ljCPttk4%2BmPewaZHb%2FQib8ISbGnRUc7UAg1C5egGB106%2B6OW3sv0tyeFMVDbwCBjciFa023EC1d55M5jYw9OYYf8AvZ83Ahc3pVUnDyVmPuOsI0rdvPXJ0oa3Pfn8la5eUqDgZ1TgWoQB0SAkJHaz9AIfJqRBsHpMKsXU67ILcptl56w6PJf1nLW8iuraifvj%2FhHO2CizLUd89iwRngXHpIqVMJ8m7AirVXic%2BXf%2BUdc0T7Fuohzhw1FdAvi3SEGuaG07nMYwd0Na5Lf8ZVpcCcCxEGOzGzQcCOy2TDZNSkVb7dncrxByGMr8ewi%2B%2FdqnqKJibvC67wHWn88syNXJSOgbyYNBaITgmu7EGJ3wbo1nhep7GhZGvvIrYc4o%2BKf0kepeY6DQRvgo5GKLXHYBVfr6aVbuuZdjgMY562Bt%2FiigB2xBau%2Bg%2F8vwY3uCMK6ow8MGOqUBiZEpTBveHsWVJ2s%2B49l08aZQ4oT13U7L%2FTyzTL5jTZP0AEM%2B4WPxm1SlDbQxO4SdrfMu8cPpfrzMIvLcPRaWiywRqcw7xszylWXMvW8K9WlyhGd%2Btr7fklzWtdI%2FPCkPVcud3JZz3pIsCV2%2FjkyJtvN%2F3PHZF0Q5%2FqZuDfiKuFj8URS2tr%2F2zkGw0Sk4tl9Pzd9auM63GW5meRAHI1wqrnLo2nHi&X-Amz-Signature=52eb2f71ea345b1f66a34fe32778f7fe1e0c913be114d9c1305b27cf5ff9577b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
