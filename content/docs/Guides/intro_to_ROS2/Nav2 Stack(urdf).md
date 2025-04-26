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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HRILJOR%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T100741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXlDnQp6PkseRvJM7GSNEl0qWVyOCSngtA5Wx3i4inAwIgI9WnDH0noGZshf%2B%2B7OW5UnXmzX5lgaXa3rM8GeSWrBUq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDMIVL26i0RUHda06QSrcA8uEDanzpV7LibrM1DCHyPxx6HMhUYtS%2B90R1j0eNHXH53TqBNySGKxeSkzqXCczASqOCj2p8Yzcj8gaW1QlLSuP6gbK8zGc2H9cQS2NFeqRiFuXID535q37F%2FEpCi0uUt597f%2B4InzdsVg4wXoix%2FYXbJGOxmkefefLAAd8Hi%2FiH0a3jltgJXiW54qh7%2BWS2aezQJGF0VNJyHHZdz55iGTAiifulB0wqNY9qnR1GkoFq9dCJBGfAqq1u2CGdkc4AtQiKXZFwK1ozF0WJ51mvAJfdrmFjlMHn8FZIL25pbw6gxnLWJklScPmMsDaopgj7i42lSqYnLDQIH8X0XUNNUruofiaDyMkZM%2BM9EcjmQgQFpKrqJSPC0%2BDmha6e0F%2Bz0PPOb7YEtBrM6OtTQXgolhGFOcsHpqc1mjInj953I%2FQx4pjhVFwd3JiNtE%2BH6YCaJYM3%2FcJGP8I7PTbCSurIDCc5a892h0cVSlbz%2FpCAZjCUiGuhiwBmlgY3yidTsdZKLbY%2FYMvOoMKoa7VTA0kCSqXYfse3XWmxTHJ%2FOtwHlCa0bEPtQIXcXG1BbBFJnIHchrKuw5yyZqIBidL%2B6vGcdylSNdO7f%2BiEd%2BlwHfEc%2FuOxYWDDOxQ7l96kIulMLKEssAGOqUBjKNM8xWHm4SaKcEf%2BYAEt%2FWuK%2FBQ7g3Gbm862%2F1Y%2FjP8%2BcQ998ZV8DitpDDDqXMXZIoZtibGt0kDH57YGAtPkt3SNowXbKkFap8FcCftv4%2F%2F9%2BrSEtfwIAQ%2BOoA4WooUT%2BjhX5HO%2FlFsOUbToex7o%2BxAy0OkCsJidBHBfxsgbCLex5K2tgCQabjmm%2F1OfjWlMqsHhJkfjehiStjzdQJSJ13E%2B6me&X-Amz-Signature=da4636f6f48656945cbf59e1e7a4ac58a262bc773811ea0ec1ea3dee3173378a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HRILJOR%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T100741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXlDnQp6PkseRvJM7GSNEl0qWVyOCSngtA5Wx3i4inAwIgI9WnDH0noGZshf%2B%2B7OW5UnXmzX5lgaXa3rM8GeSWrBUq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDMIVL26i0RUHda06QSrcA8uEDanzpV7LibrM1DCHyPxx6HMhUYtS%2B90R1j0eNHXH53TqBNySGKxeSkzqXCczASqOCj2p8Yzcj8gaW1QlLSuP6gbK8zGc2H9cQS2NFeqRiFuXID535q37F%2FEpCi0uUt597f%2B4InzdsVg4wXoix%2FYXbJGOxmkefefLAAd8Hi%2FiH0a3jltgJXiW54qh7%2BWS2aezQJGF0VNJyHHZdz55iGTAiifulB0wqNY9qnR1GkoFq9dCJBGfAqq1u2CGdkc4AtQiKXZFwK1ozF0WJ51mvAJfdrmFjlMHn8FZIL25pbw6gxnLWJklScPmMsDaopgj7i42lSqYnLDQIH8X0XUNNUruofiaDyMkZM%2BM9EcjmQgQFpKrqJSPC0%2BDmha6e0F%2Bz0PPOb7YEtBrM6OtTQXgolhGFOcsHpqc1mjInj953I%2FQx4pjhVFwd3JiNtE%2BH6YCaJYM3%2FcJGP8I7PTbCSurIDCc5a892h0cVSlbz%2FpCAZjCUiGuhiwBmlgY3yidTsdZKLbY%2FYMvOoMKoa7VTA0kCSqXYfse3XWmxTHJ%2FOtwHlCa0bEPtQIXcXG1BbBFJnIHchrKuw5yyZqIBidL%2B6vGcdylSNdO7f%2BiEd%2BlwHfEc%2FuOxYWDDOxQ7l96kIulMLKEssAGOqUBjKNM8xWHm4SaKcEf%2BYAEt%2FWuK%2FBQ7g3Gbm862%2F1Y%2FjP8%2BcQ998ZV8DitpDDDqXMXZIoZtibGt0kDH57YGAtPkt3SNowXbKkFap8FcCftv4%2F%2F9%2BrSEtfwIAQ%2BOoA4WooUT%2BjhX5HO%2FlFsOUbToex7o%2BxAy0OkCsJidBHBfxsgbCLex5K2tgCQabjmm%2F1OfjWlMqsHhJkfjehiStjzdQJSJ13E%2B6me&X-Amz-Signature=865d4d1a82c795c26a6432891b670951e265ba0887b3d685828d58a68e9ba242&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HRILJOR%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T100741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXlDnQp6PkseRvJM7GSNEl0qWVyOCSngtA5Wx3i4inAwIgI9WnDH0noGZshf%2B%2B7OW5UnXmzX5lgaXa3rM8GeSWrBUq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDMIVL26i0RUHda06QSrcA8uEDanzpV7LibrM1DCHyPxx6HMhUYtS%2B90R1j0eNHXH53TqBNySGKxeSkzqXCczASqOCj2p8Yzcj8gaW1QlLSuP6gbK8zGc2H9cQS2NFeqRiFuXID535q37F%2FEpCi0uUt597f%2B4InzdsVg4wXoix%2FYXbJGOxmkefefLAAd8Hi%2FiH0a3jltgJXiW54qh7%2BWS2aezQJGF0VNJyHHZdz55iGTAiifulB0wqNY9qnR1GkoFq9dCJBGfAqq1u2CGdkc4AtQiKXZFwK1ozF0WJ51mvAJfdrmFjlMHn8FZIL25pbw6gxnLWJklScPmMsDaopgj7i42lSqYnLDQIH8X0XUNNUruofiaDyMkZM%2BM9EcjmQgQFpKrqJSPC0%2BDmha6e0F%2Bz0PPOb7YEtBrM6OtTQXgolhGFOcsHpqc1mjInj953I%2FQx4pjhVFwd3JiNtE%2BH6YCaJYM3%2FcJGP8I7PTbCSurIDCc5a892h0cVSlbz%2FpCAZjCUiGuhiwBmlgY3yidTsdZKLbY%2FYMvOoMKoa7VTA0kCSqXYfse3XWmxTHJ%2FOtwHlCa0bEPtQIXcXG1BbBFJnIHchrKuw5yyZqIBidL%2B6vGcdylSNdO7f%2BiEd%2BlwHfEc%2FuOxYWDDOxQ7l96kIulMLKEssAGOqUBjKNM8xWHm4SaKcEf%2BYAEt%2FWuK%2FBQ7g3Gbm862%2F1Y%2FjP8%2BcQ998ZV8DitpDDDqXMXZIoZtibGt0kDH57YGAtPkt3SNowXbKkFap8FcCftv4%2F%2F9%2BrSEtfwIAQ%2BOoA4WooUT%2BjhX5HO%2FlFsOUbToex7o%2BxAy0OkCsJidBHBfxsgbCLex5K2tgCQabjmm%2F1OfjWlMqsHhJkfjehiStjzdQJSJ13E%2B6me&X-Amz-Signature=5fa68c651c74adde804f7443b93da30513cd38d01892cc0f0e37f3b33dd73aca&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HRILJOR%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T100741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXlDnQp6PkseRvJM7GSNEl0qWVyOCSngtA5Wx3i4inAwIgI9WnDH0noGZshf%2B%2B7OW5UnXmzX5lgaXa3rM8GeSWrBUq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDMIVL26i0RUHda06QSrcA8uEDanzpV7LibrM1DCHyPxx6HMhUYtS%2B90R1j0eNHXH53TqBNySGKxeSkzqXCczASqOCj2p8Yzcj8gaW1QlLSuP6gbK8zGc2H9cQS2NFeqRiFuXID535q37F%2FEpCi0uUt597f%2B4InzdsVg4wXoix%2FYXbJGOxmkefefLAAd8Hi%2FiH0a3jltgJXiW54qh7%2BWS2aezQJGF0VNJyHHZdz55iGTAiifulB0wqNY9qnR1GkoFq9dCJBGfAqq1u2CGdkc4AtQiKXZFwK1ozF0WJ51mvAJfdrmFjlMHn8FZIL25pbw6gxnLWJklScPmMsDaopgj7i42lSqYnLDQIH8X0XUNNUruofiaDyMkZM%2BM9EcjmQgQFpKrqJSPC0%2BDmha6e0F%2Bz0PPOb7YEtBrM6OtTQXgolhGFOcsHpqc1mjInj953I%2FQx4pjhVFwd3JiNtE%2BH6YCaJYM3%2FcJGP8I7PTbCSurIDCc5a892h0cVSlbz%2FpCAZjCUiGuhiwBmlgY3yidTsdZKLbY%2FYMvOoMKoa7VTA0kCSqXYfse3XWmxTHJ%2FOtwHlCa0bEPtQIXcXG1BbBFJnIHchrKuw5yyZqIBidL%2B6vGcdylSNdO7f%2BiEd%2BlwHfEc%2FuOxYWDDOxQ7l96kIulMLKEssAGOqUBjKNM8xWHm4SaKcEf%2BYAEt%2FWuK%2FBQ7g3Gbm862%2F1Y%2FjP8%2BcQ998ZV8DitpDDDqXMXZIoZtibGt0kDH57YGAtPkt3SNowXbKkFap8FcCftv4%2F%2F9%2BrSEtfwIAQ%2BOoA4WooUT%2BjhX5HO%2FlFsOUbToex7o%2BxAy0OkCsJidBHBfxsgbCLex5K2tgCQabjmm%2F1OfjWlMqsHhJkfjehiStjzdQJSJ13E%2B6me&X-Amz-Signature=19287e7da1a596d417fd63c84fb4844ca2fa1bf2aaa277b9d1ee6418f53b242e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HRILJOR%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T100741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXlDnQp6PkseRvJM7GSNEl0qWVyOCSngtA5Wx3i4inAwIgI9WnDH0noGZshf%2B%2B7OW5UnXmzX5lgaXa3rM8GeSWrBUq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDMIVL26i0RUHda06QSrcA8uEDanzpV7LibrM1DCHyPxx6HMhUYtS%2B90R1j0eNHXH53TqBNySGKxeSkzqXCczASqOCj2p8Yzcj8gaW1QlLSuP6gbK8zGc2H9cQS2NFeqRiFuXID535q37F%2FEpCi0uUt597f%2B4InzdsVg4wXoix%2FYXbJGOxmkefefLAAd8Hi%2FiH0a3jltgJXiW54qh7%2BWS2aezQJGF0VNJyHHZdz55iGTAiifulB0wqNY9qnR1GkoFq9dCJBGfAqq1u2CGdkc4AtQiKXZFwK1ozF0WJ51mvAJfdrmFjlMHn8FZIL25pbw6gxnLWJklScPmMsDaopgj7i42lSqYnLDQIH8X0XUNNUruofiaDyMkZM%2BM9EcjmQgQFpKrqJSPC0%2BDmha6e0F%2Bz0PPOb7YEtBrM6OtTQXgolhGFOcsHpqc1mjInj953I%2FQx4pjhVFwd3JiNtE%2BH6YCaJYM3%2FcJGP8I7PTbCSurIDCc5a892h0cVSlbz%2FpCAZjCUiGuhiwBmlgY3yidTsdZKLbY%2FYMvOoMKoa7VTA0kCSqXYfse3XWmxTHJ%2FOtwHlCa0bEPtQIXcXG1BbBFJnIHchrKuw5yyZqIBidL%2B6vGcdylSNdO7f%2BiEd%2BlwHfEc%2FuOxYWDDOxQ7l96kIulMLKEssAGOqUBjKNM8xWHm4SaKcEf%2BYAEt%2FWuK%2FBQ7g3Gbm862%2F1Y%2FjP8%2BcQ998ZV8DitpDDDqXMXZIoZtibGt0kDH57YGAtPkt3SNowXbKkFap8FcCftv4%2F%2F9%2BrSEtfwIAQ%2BOoA4WooUT%2BjhX5HO%2FlFsOUbToex7o%2BxAy0OkCsJidBHBfxsgbCLex5K2tgCQabjmm%2F1OfjWlMqsHhJkfjehiStjzdQJSJ13E%2B6me&X-Amz-Signature=e9d0c61db132935c7ae12ff7258e1506cc892bce6141401cebd19a1ea9fccfd1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HRILJOR%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T100741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXlDnQp6PkseRvJM7GSNEl0qWVyOCSngtA5Wx3i4inAwIgI9WnDH0noGZshf%2B%2B7OW5UnXmzX5lgaXa3rM8GeSWrBUq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDMIVL26i0RUHda06QSrcA8uEDanzpV7LibrM1DCHyPxx6HMhUYtS%2B90R1j0eNHXH53TqBNySGKxeSkzqXCczASqOCj2p8Yzcj8gaW1QlLSuP6gbK8zGc2H9cQS2NFeqRiFuXID535q37F%2FEpCi0uUt597f%2B4InzdsVg4wXoix%2FYXbJGOxmkefefLAAd8Hi%2FiH0a3jltgJXiW54qh7%2BWS2aezQJGF0VNJyHHZdz55iGTAiifulB0wqNY9qnR1GkoFq9dCJBGfAqq1u2CGdkc4AtQiKXZFwK1ozF0WJ51mvAJfdrmFjlMHn8FZIL25pbw6gxnLWJklScPmMsDaopgj7i42lSqYnLDQIH8X0XUNNUruofiaDyMkZM%2BM9EcjmQgQFpKrqJSPC0%2BDmha6e0F%2Bz0PPOb7YEtBrM6OtTQXgolhGFOcsHpqc1mjInj953I%2FQx4pjhVFwd3JiNtE%2BH6YCaJYM3%2FcJGP8I7PTbCSurIDCc5a892h0cVSlbz%2FpCAZjCUiGuhiwBmlgY3yidTsdZKLbY%2FYMvOoMKoa7VTA0kCSqXYfse3XWmxTHJ%2FOtwHlCa0bEPtQIXcXG1BbBFJnIHchrKuw5yyZqIBidL%2B6vGcdylSNdO7f%2BiEd%2BlwHfEc%2FuOxYWDDOxQ7l96kIulMLKEssAGOqUBjKNM8xWHm4SaKcEf%2BYAEt%2FWuK%2FBQ7g3Gbm862%2F1Y%2FjP8%2BcQ998ZV8DitpDDDqXMXZIoZtibGt0kDH57YGAtPkt3SNowXbKkFap8FcCftv4%2F%2F9%2BrSEtfwIAQ%2BOoA4WooUT%2BjhX5HO%2FlFsOUbToex7o%2BxAy0OkCsJidBHBfxsgbCLex5K2tgCQabjmm%2F1OfjWlMqsHhJkfjehiStjzdQJSJ13E%2B6me&X-Amz-Signature=3e320e7ed51bb6f3a018d92585475536e415a172f5cb0b2265d96273ab1bcdce&X-Amz-SignedHeaders=host&x-id=GetObject)
