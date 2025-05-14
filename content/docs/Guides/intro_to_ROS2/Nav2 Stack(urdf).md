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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5BAOMSJ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T181138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIA87Xa%2BCNknBhtdGG52dgAJDX3iL83hYHNjRSK5Rs1OdAiEAoxOSDFMm5tMWIbDfhIn6bgBJQjCKYyXC8A1PFYBb0zUq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHFG5vvYIjdqELw59SrcA3igmtc5zAEJZo70pZ46Q7d3dy%2BI0NGfDVYRbF1Ls539kh50tDlngUjlFWUL5YDtsbT6cdUDLdEb3NQbQcPPebhfmtNjI4Wkq%2FFTlBr933O38sy1DHrslpWNObyarNNBftpPUZS5xwLkEb4ZPA01WNzlJv2gMvrXj4uljkyuihEBvhHBnCtb8m9j3lzjvwy97pjPrT3%2B6fCCrAKNuQSNef822QaS%2B%2FnGmBTvmwrksGCvM1n%2FVLNtTIK6Tj%2FJ7nFR5%2BIpCwVzRjLzEWzsqx%2FpoLo3qJLYTWtmME%2FF7wYNyIxToleqtIY%2B0pVefPLnhhjtJwxfGoqRd88zLm19F%2FLReSTzOLKNFuNZVgXTZ6A71QD3GOmfhkjH4MYoF%2B40Gp%2FcbLhLcFHbALdOS%2FN6w57lOqnQ52vSiN%2B1JPxsXRpB%2FdaEau4WHkCmL53Sgl7CfG917BRF8jhQhbjH3xOEWJGH%2BryzAfYMdg4%2FJv482ARdfZqEEDwgYyagm7hY0JwuukZ5PAbNgEGV77pMmy%2BHBXUc4PtvoT8ZjdH62RnW8fgAq1%2Fe6a45J4nvUMSjzzcTWHk6tYvK%2FzMqACIZL2yhOO%2B2xncBLCKVWY%2Bdpprtch16YhXvCRq8U2NQXr7wOjvpMLikk8EGOqUBiklOml%2Fz5lsgwwE8mjEoajkJgny9CkvwsKqJ%2BjEKth3LbS68bJXWuXN%2Byf6FPzdvhUugc4yMdgPBFDesOskbwU3UI5DJCiZR%2Bm%2FxRcKTP3rWDF6FPnKaRo4VZrYP%2FHVj1bIUzSq8e9eLmKKiXGo%2BX8Zc9OjOgbYBw4RDodWrJwEdHghvhs1X52N2Hk1cGSi8CycEVP9pormEA9UTD12auRB7Pg%2BU&X-Amz-Signature=25175266d8bf64f18f4c6b3cd705ac2cb71c711ad655170b6511d934fa470405&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5BAOMSJ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T181138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIA87Xa%2BCNknBhtdGG52dgAJDX3iL83hYHNjRSK5Rs1OdAiEAoxOSDFMm5tMWIbDfhIn6bgBJQjCKYyXC8A1PFYBb0zUq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHFG5vvYIjdqELw59SrcA3igmtc5zAEJZo70pZ46Q7d3dy%2BI0NGfDVYRbF1Ls539kh50tDlngUjlFWUL5YDtsbT6cdUDLdEb3NQbQcPPebhfmtNjI4Wkq%2FFTlBr933O38sy1DHrslpWNObyarNNBftpPUZS5xwLkEb4ZPA01WNzlJv2gMvrXj4uljkyuihEBvhHBnCtb8m9j3lzjvwy97pjPrT3%2B6fCCrAKNuQSNef822QaS%2B%2FnGmBTvmwrksGCvM1n%2FVLNtTIK6Tj%2FJ7nFR5%2BIpCwVzRjLzEWzsqx%2FpoLo3qJLYTWtmME%2FF7wYNyIxToleqtIY%2B0pVefPLnhhjtJwxfGoqRd88zLm19F%2FLReSTzOLKNFuNZVgXTZ6A71QD3GOmfhkjH4MYoF%2B40Gp%2FcbLhLcFHbALdOS%2FN6w57lOqnQ52vSiN%2B1JPxsXRpB%2FdaEau4WHkCmL53Sgl7CfG917BRF8jhQhbjH3xOEWJGH%2BryzAfYMdg4%2FJv482ARdfZqEEDwgYyagm7hY0JwuukZ5PAbNgEGV77pMmy%2BHBXUc4PtvoT8ZjdH62RnW8fgAq1%2Fe6a45J4nvUMSjzzcTWHk6tYvK%2FzMqACIZL2yhOO%2B2xncBLCKVWY%2Bdpprtch16YhXvCRq8U2NQXr7wOjvpMLikk8EGOqUBiklOml%2Fz5lsgwwE8mjEoajkJgny9CkvwsKqJ%2BjEKth3LbS68bJXWuXN%2Byf6FPzdvhUugc4yMdgPBFDesOskbwU3UI5DJCiZR%2Bm%2FxRcKTP3rWDF6FPnKaRo4VZrYP%2FHVj1bIUzSq8e9eLmKKiXGo%2BX8Zc9OjOgbYBw4RDodWrJwEdHghvhs1X52N2Hk1cGSi8CycEVP9pormEA9UTD12auRB7Pg%2BU&X-Amz-Signature=989d6dd9ccf7c5c160d85dee0d3899a71a3b0b135316f84f65ba75463f54edfa&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5BAOMSJ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T181138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIA87Xa%2BCNknBhtdGG52dgAJDX3iL83hYHNjRSK5Rs1OdAiEAoxOSDFMm5tMWIbDfhIn6bgBJQjCKYyXC8A1PFYBb0zUq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHFG5vvYIjdqELw59SrcA3igmtc5zAEJZo70pZ46Q7d3dy%2BI0NGfDVYRbF1Ls539kh50tDlngUjlFWUL5YDtsbT6cdUDLdEb3NQbQcPPebhfmtNjI4Wkq%2FFTlBr933O38sy1DHrslpWNObyarNNBftpPUZS5xwLkEb4ZPA01WNzlJv2gMvrXj4uljkyuihEBvhHBnCtb8m9j3lzjvwy97pjPrT3%2B6fCCrAKNuQSNef822QaS%2B%2FnGmBTvmwrksGCvM1n%2FVLNtTIK6Tj%2FJ7nFR5%2BIpCwVzRjLzEWzsqx%2FpoLo3qJLYTWtmME%2FF7wYNyIxToleqtIY%2B0pVefPLnhhjtJwxfGoqRd88zLm19F%2FLReSTzOLKNFuNZVgXTZ6A71QD3GOmfhkjH4MYoF%2B40Gp%2FcbLhLcFHbALdOS%2FN6w57lOqnQ52vSiN%2B1JPxsXRpB%2FdaEau4WHkCmL53Sgl7CfG917BRF8jhQhbjH3xOEWJGH%2BryzAfYMdg4%2FJv482ARdfZqEEDwgYyagm7hY0JwuukZ5PAbNgEGV77pMmy%2BHBXUc4PtvoT8ZjdH62RnW8fgAq1%2Fe6a45J4nvUMSjzzcTWHk6tYvK%2FzMqACIZL2yhOO%2B2xncBLCKVWY%2Bdpprtch16YhXvCRq8U2NQXr7wOjvpMLikk8EGOqUBiklOml%2Fz5lsgwwE8mjEoajkJgny9CkvwsKqJ%2BjEKth3LbS68bJXWuXN%2Byf6FPzdvhUugc4yMdgPBFDesOskbwU3UI5DJCiZR%2Bm%2FxRcKTP3rWDF6FPnKaRo4VZrYP%2FHVj1bIUzSq8e9eLmKKiXGo%2BX8Zc9OjOgbYBw4RDodWrJwEdHghvhs1X52N2Hk1cGSi8CycEVP9pormEA9UTD12auRB7Pg%2BU&X-Amz-Signature=a37c2a6023993c88f4d2108ab04c7a375a98b268ffd3ccb6f6322952cd25fa0e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5BAOMSJ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T181138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIA87Xa%2BCNknBhtdGG52dgAJDX3iL83hYHNjRSK5Rs1OdAiEAoxOSDFMm5tMWIbDfhIn6bgBJQjCKYyXC8A1PFYBb0zUq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHFG5vvYIjdqELw59SrcA3igmtc5zAEJZo70pZ46Q7d3dy%2BI0NGfDVYRbF1Ls539kh50tDlngUjlFWUL5YDtsbT6cdUDLdEb3NQbQcPPebhfmtNjI4Wkq%2FFTlBr933O38sy1DHrslpWNObyarNNBftpPUZS5xwLkEb4ZPA01WNzlJv2gMvrXj4uljkyuihEBvhHBnCtb8m9j3lzjvwy97pjPrT3%2B6fCCrAKNuQSNef822QaS%2B%2FnGmBTvmwrksGCvM1n%2FVLNtTIK6Tj%2FJ7nFR5%2BIpCwVzRjLzEWzsqx%2FpoLo3qJLYTWtmME%2FF7wYNyIxToleqtIY%2B0pVefPLnhhjtJwxfGoqRd88zLm19F%2FLReSTzOLKNFuNZVgXTZ6A71QD3GOmfhkjH4MYoF%2B40Gp%2FcbLhLcFHbALdOS%2FN6w57lOqnQ52vSiN%2B1JPxsXRpB%2FdaEau4WHkCmL53Sgl7CfG917BRF8jhQhbjH3xOEWJGH%2BryzAfYMdg4%2FJv482ARdfZqEEDwgYyagm7hY0JwuukZ5PAbNgEGV77pMmy%2BHBXUc4PtvoT8ZjdH62RnW8fgAq1%2Fe6a45J4nvUMSjzzcTWHk6tYvK%2FzMqACIZL2yhOO%2B2xncBLCKVWY%2Bdpprtch16YhXvCRq8U2NQXr7wOjvpMLikk8EGOqUBiklOml%2Fz5lsgwwE8mjEoajkJgny9CkvwsKqJ%2BjEKth3LbS68bJXWuXN%2Byf6FPzdvhUugc4yMdgPBFDesOskbwU3UI5DJCiZR%2Bm%2FxRcKTP3rWDF6FPnKaRo4VZrYP%2FHVj1bIUzSq8e9eLmKKiXGo%2BX8Zc9OjOgbYBw4RDodWrJwEdHghvhs1X52N2Hk1cGSi8CycEVP9pormEA9UTD12auRB7Pg%2BU&X-Amz-Signature=7cb4bfcfd2b9839c02f65aa066ad1595bda335f307a2677a68992237d8f50c1a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5BAOMSJ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T181138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIA87Xa%2BCNknBhtdGG52dgAJDX3iL83hYHNjRSK5Rs1OdAiEAoxOSDFMm5tMWIbDfhIn6bgBJQjCKYyXC8A1PFYBb0zUq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHFG5vvYIjdqELw59SrcA3igmtc5zAEJZo70pZ46Q7d3dy%2BI0NGfDVYRbF1Ls539kh50tDlngUjlFWUL5YDtsbT6cdUDLdEb3NQbQcPPebhfmtNjI4Wkq%2FFTlBr933O38sy1DHrslpWNObyarNNBftpPUZS5xwLkEb4ZPA01WNzlJv2gMvrXj4uljkyuihEBvhHBnCtb8m9j3lzjvwy97pjPrT3%2B6fCCrAKNuQSNef822QaS%2B%2FnGmBTvmwrksGCvM1n%2FVLNtTIK6Tj%2FJ7nFR5%2BIpCwVzRjLzEWzsqx%2FpoLo3qJLYTWtmME%2FF7wYNyIxToleqtIY%2B0pVefPLnhhjtJwxfGoqRd88zLm19F%2FLReSTzOLKNFuNZVgXTZ6A71QD3GOmfhkjH4MYoF%2B40Gp%2FcbLhLcFHbALdOS%2FN6w57lOqnQ52vSiN%2B1JPxsXRpB%2FdaEau4WHkCmL53Sgl7CfG917BRF8jhQhbjH3xOEWJGH%2BryzAfYMdg4%2FJv482ARdfZqEEDwgYyagm7hY0JwuukZ5PAbNgEGV77pMmy%2BHBXUc4PtvoT8ZjdH62RnW8fgAq1%2Fe6a45J4nvUMSjzzcTWHk6tYvK%2FzMqACIZL2yhOO%2B2xncBLCKVWY%2Bdpprtch16YhXvCRq8U2NQXr7wOjvpMLikk8EGOqUBiklOml%2Fz5lsgwwE8mjEoajkJgny9CkvwsKqJ%2BjEKth3LbS68bJXWuXN%2Byf6FPzdvhUugc4yMdgPBFDesOskbwU3UI5DJCiZR%2Bm%2FxRcKTP3rWDF6FPnKaRo4VZrYP%2FHVj1bIUzSq8e9eLmKKiXGo%2BX8Zc9OjOgbYBw4RDodWrJwEdHghvhs1X52N2Hk1cGSi8CycEVP9pormEA9UTD12auRB7Pg%2BU&X-Amz-Signature=12cbfc085ddbc6fc2d04c6cd448bce229b341e3c3db71c87ec8eefd65184f627&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5BAOMSJ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T181138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIA87Xa%2BCNknBhtdGG52dgAJDX3iL83hYHNjRSK5Rs1OdAiEAoxOSDFMm5tMWIbDfhIn6bgBJQjCKYyXC8A1PFYBb0zUq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHFG5vvYIjdqELw59SrcA3igmtc5zAEJZo70pZ46Q7d3dy%2BI0NGfDVYRbF1Ls539kh50tDlngUjlFWUL5YDtsbT6cdUDLdEb3NQbQcPPebhfmtNjI4Wkq%2FFTlBr933O38sy1DHrslpWNObyarNNBftpPUZS5xwLkEb4ZPA01WNzlJv2gMvrXj4uljkyuihEBvhHBnCtb8m9j3lzjvwy97pjPrT3%2B6fCCrAKNuQSNef822QaS%2B%2FnGmBTvmwrksGCvM1n%2FVLNtTIK6Tj%2FJ7nFR5%2BIpCwVzRjLzEWzsqx%2FpoLo3qJLYTWtmME%2FF7wYNyIxToleqtIY%2B0pVefPLnhhjtJwxfGoqRd88zLm19F%2FLReSTzOLKNFuNZVgXTZ6A71QD3GOmfhkjH4MYoF%2B40Gp%2FcbLhLcFHbALdOS%2FN6w57lOqnQ52vSiN%2B1JPxsXRpB%2FdaEau4WHkCmL53Sgl7CfG917BRF8jhQhbjH3xOEWJGH%2BryzAfYMdg4%2FJv482ARdfZqEEDwgYyagm7hY0JwuukZ5PAbNgEGV77pMmy%2BHBXUc4PtvoT8ZjdH62RnW8fgAq1%2Fe6a45J4nvUMSjzzcTWHk6tYvK%2FzMqACIZL2yhOO%2B2xncBLCKVWY%2Bdpprtch16YhXvCRq8U2NQXr7wOjvpMLikk8EGOqUBiklOml%2Fz5lsgwwE8mjEoajkJgny9CkvwsKqJ%2BjEKth3LbS68bJXWuXN%2Byf6FPzdvhUugc4yMdgPBFDesOskbwU3UI5DJCiZR%2Bm%2FxRcKTP3rWDF6FPnKaRo4VZrYP%2FHVj1bIUzSq8e9eLmKKiXGo%2BX8Zc9OjOgbYBw4RDodWrJwEdHghvhs1X52N2Hk1cGSi8CycEVP9pormEA9UTD12auRB7Pg%2BU&X-Amz-Signature=0dd7a9d31396ac18ecc7d29c23f209aab497b5dbb098e9da6079906cb8ab6edf&X-Amz-SignedHeaders=host&x-id=GetObject)
