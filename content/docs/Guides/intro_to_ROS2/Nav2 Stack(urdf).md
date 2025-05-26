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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUEMJEZQ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T170127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCW7yHrC8XdfGwjKiWvXu5fAFOFmk4LTvMUb%2F9GmJPjLAIgSAJHmL0iOfbrJRgoO4QlYaM%2BKnjo33hftRLtdDp0YKQq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDDUqXPiEDa5Y1QbQJSrcA3Mg3pEngf%2BvbCFZO1Zse4RAa8yMXdacMVRA0ri1diKuEGnSqj%2BEGdofRjHZbzeCmjAxi%2BldcHpz6QtMmBdNSaYsXa7SxCmdHenU%2B1l8kgu5KzjSN3h%2B9hk5d4a%2FAej0eq2hh7Kfx3ZFaW6x%2BLqP6L0X76C7YnfEANo6sTeGcOtpQtRPCSUaJrLXcNW4rmZ%2FExwetrqL5nPtXwfkb5LA96xehDDPU7wh4MkyPAlWeMzdWiOAzMx6oe2b9WdorAvdQCgu8q49TBRAZ0J%2BRgwTiZqniwGMW1P8c8irQVDISwyinxFYnCY1hb5xAIFDzcF27vGAuqEF5ZlhmZUtdHWekPr%2Fo8lLYAC2AaQp1KCjEfa2quJRAUrZl%2BUziflX2Gm9gC5KgylZK8qwB3%2FcC1p6eSADsct1NPSJujCgXtCX1Ow5zJxyw7YkWscwiSFI5O4WO92nEMs88hx5E10kA3z9%2FQNM2fUgtgXLQpXiZ0S9F1cdvnIbmoIfnk2kaa0lZ6ZhucgV5vylNVJrJgKDngrqH%2Bfb%2B7KJ8Scem4es%2FJdtNO8CTW5b7RaoJTnbMP5jxgQxmmrWUYkNLEpeTIOlZz2Mu%2FTWXn377UtfMP9JSZ1IcJDpOyE4OzF%2FW7FVo6H8MIqr0sEGOqUBbB4a0UGh1nzNVtQYK1RkSqa3D2wB4AvG95i7SG6cFO%2Bw64czxmNzacAyX8z3glbltHj0T1LFiVJm6N%2FenNDHjUL%2BSUVUisbbvAej2tY1%2Bte0udxIYvSJ9k6BHAVmT3anClFPM9s3BYCSddChpD%2BrhOoZIdzgRSvMGcdyhRLfapkxdxGhHUQqjltz%2BVOcRC8HyQfmDLrAY6SMPngAqT%2FhEnBzcSWl&X-Amz-Signature=3a1c70263846a80eb09c992b849dfac9edb0cc49f02c3e8c430b99b6af69f97a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUEMJEZQ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T170127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCW7yHrC8XdfGwjKiWvXu5fAFOFmk4LTvMUb%2F9GmJPjLAIgSAJHmL0iOfbrJRgoO4QlYaM%2BKnjo33hftRLtdDp0YKQq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDDUqXPiEDa5Y1QbQJSrcA3Mg3pEngf%2BvbCFZO1Zse4RAa8yMXdacMVRA0ri1diKuEGnSqj%2BEGdofRjHZbzeCmjAxi%2BldcHpz6QtMmBdNSaYsXa7SxCmdHenU%2B1l8kgu5KzjSN3h%2B9hk5d4a%2FAej0eq2hh7Kfx3ZFaW6x%2BLqP6L0X76C7YnfEANo6sTeGcOtpQtRPCSUaJrLXcNW4rmZ%2FExwetrqL5nPtXwfkb5LA96xehDDPU7wh4MkyPAlWeMzdWiOAzMx6oe2b9WdorAvdQCgu8q49TBRAZ0J%2BRgwTiZqniwGMW1P8c8irQVDISwyinxFYnCY1hb5xAIFDzcF27vGAuqEF5ZlhmZUtdHWekPr%2Fo8lLYAC2AaQp1KCjEfa2quJRAUrZl%2BUziflX2Gm9gC5KgylZK8qwB3%2FcC1p6eSADsct1NPSJujCgXtCX1Ow5zJxyw7YkWscwiSFI5O4WO92nEMs88hx5E10kA3z9%2FQNM2fUgtgXLQpXiZ0S9F1cdvnIbmoIfnk2kaa0lZ6ZhucgV5vylNVJrJgKDngrqH%2Bfb%2B7KJ8Scem4es%2FJdtNO8CTW5b7RaoJTnbMP5jxgQxmmrWUYkNLEpeTIOlZz2Mu%2FTWXn377UtfMP9JSZ1IcJDpOyE4OzF%2FW7FVo6H8MIqr0sEGOqUBbB4a0UGh1nzNVtQYK1RkSqa3D2wB4AvG95i7SG6cFO%2Bw64czxmNzacAyX8z3glbltHj0T1LFiVJm6N%2FenNDHjUL%2BSUVUisbbvAej2tY1%2Bte0udxIYvSJ9k6BHAVmT3anClFPM9s3BYCSddChpD%2BrhOoZIdzgRSvMGcdyhRLfapkxdxGhHUQqjltz%2BVOcRC8HyQfmDLrAY6SMPngAqT%2FhEnBzcSWl&X-Amz-Signature=f6b6c2d75e787b24c92ba04c0e90de9bf422d0e107f3dad5bce94ccc220f8aa2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUEMJEZQ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T170127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCW7yHrC8XdfGwjKiWvXu5fAFOFmk4LTvMUb%2F9GmJPjLAIgSAJHmL0iOfbrJRgoO4QlYaM%2BKnjo33hftRLtdDp0YKQq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDDUqXPiEDa5Y1QbQJSrcA3Mg3pEngf%2BvbCFZO1Zse4RAa8yMXdacMVRA0ri1diKuEGnSqj%2BEGdofRjHZbzeCmjAxi%2BldcHpz6QtMmBdNSaYsXa7SxCmdHenU%2B1l8kgu5KzjSN3h%2B9hk5d4a%2FAej0eq2hh7Kfx3ZFaW6x%2BLqP6L0X76C7YnfEANo6sTeGcOtpQtRPCSUaJrLXcNW4rmZ%2FExwetrqL5nPtXwfkb5LA96xehDDPU7wh4MkyPAlWeMzdWiOAzMx6oe2b9WdorAvdQCgu8q49TBRAZ0J%2BRgwTiZqniwGMW1P8c8irQVDISwyinxFYnCY1hb5xAIFDzcF27vGAuqEF5ZlhmZUtdHWekPr%2Fo8lLYAC2AaQp1KCjEfa2quJRAUrZl%2BUziflX2Gm9gC5KgylZK8qwB3%2FcC1p6eSADsct1NPSJujCgXtCX1Ow5zJxyw7YkWscwiSFI5O4WO92nEMs88hx5E10kA3z9%2FQNM2fUgtgXLQpXiZ0S9F1cdvnIbmoIfnk2kaa0lZ6ZhucgV5vylNVJrJgKDngrqH%2Bfb%2B7KJ8Scem4es%2FJdtNO8CTW5b7RaoJTnbMP5jxgQxmmrWUYkNLEpeTIOlZz2Mu%2FTWXn377UtfMP9JSZ1IcJDpOyE4OzF%2FW7FVo6H8MIqr0sEGOqUBbB4a0UGh1nzNVtQYK1RkSqa3D2wB4AvG95i7SG6cFO%2Bw64czxmNzacAyX8z3glbltHj0T1LFiVJm6N%2FenNDHjUL%2BSUVUisbbvAej2tY1%2Bte0udxIYvSJ9k6BHAVmT3anClFPM9s3BYCSddChpD%2BrhOoZIdzgRSvMGcdyhRLfapkxdxGhHUQqjltz%2BVOcRC8HyQfmDLrAY6SMPngAqT%2FhEnBzcSWl&X-Amz-Signature=985871a52175346b50b1b3dc0258debfbd4f70dfb136db37d673f8a9bda3687b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUEMJEZQ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T170127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCW7yHrC8XdfGwjKiWvXu5fAFOFmk4LTvMUb%2F9GmJPjLAIgSAJHmL0iOfbrJRgoO4QlYaM%2BKnjo33hftRLtdDp0YKQq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDDUqXPiEDa5Y1QbQJSrcA3Mg3pEngf%2BvbCFZO1Zse4RAa8yMXdacMVRA0ri1diKuEGnSqj%2BEGdofRjHZbzeCmjAxi%2BldcHpz6QtMmBdNSaYsXa7SxCmdHenU%2B1l8kgu5KzjSN3h%2B9hk5d4a%2FAej0eq2hh7Kfx3ZFaW6x%2BLqP6L0X76C7YnfEANo6sTeGcOtpQtRPCSUaJrLXcNW4rmZ%2FExwetrqL5nPtXwfkb5LA96xehDDPU7wh4MkyPAlWeMzdWiOAzMx6oe2b9WdorAvdQCgu8q49TBRAZ0J%2BRgwTiZqniwGMW1P8c8irQVDISwyinxFYnCY1hb5xAIFDzcF27vGAuqEF5ZlhmZUtdHWekPr%2Fo8lLYAC2AaQp1KCjEfa2quJRAUrZl%2BUziflX2Gm9gC5KgylZK8qwB3%2FcC1p6eSADsct1NPSJujCgXtCX1Ow5zJxyw7YkWscwiSFI5O4WO92nEMs88hx5E10kA3z9%2FQNM2fUgtgXLQpXiZ0S9F1cdvnIbmoIfnk2kaa0lZ6ZhucgV5vylNVJrJgKDngrqH%2Bfb%2B7KJ8Scem4es%2FJdtNO8CTW5b7RaoJTnbMP5jxgQxmmrWUYkNLEpeTIOlZz2Mu%2FTWXn377UtfMP9JSZ1IcJDpOyE4OzF%2FW7FVo6H8MIqr0sEGOqUBbB4a0UGh1nzNVtQYK1RkSqa3D2wB4AvG95i7SG6cFO%2Bw64czxmNzacAyX8z3glbltHj0T1LFiVJm6N%2FenNDHjUL%2BSUVUisbbvAej2tY1%2Bte0udxIYvSJ9k6BHAVmT3anClFPM9s3BYCSddChpD%2BrhOoZIdzgRSvMGcdyhRLfapkxdxGhHUQqjltz%2BVOcRC8HyQfmDLrAY6SMPngAqT%2FhEnBzcSWl&X-Amz-Signature=2557199697df96a77be9805e75563c20550695ef006587fc7a16817f03487552&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUEMJEZQ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T170127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCW7yHrC8XdfGwjKiWvXu5fAFOFmk4LTvMUb%2F9GmJPjLAIgSAJHmL0iOfbrJRgoO4QlYaM%2BKnjo33hftRLtdDp0YKQq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDDUqXPiEDa5Y1QbQJSrcA3Mg3pEngf%2BvbCFZO1Zse4RAa8yMXdacMVRA0ri1diKuEGnSqj%2BEGdofRjHZbzeCmjAxi%2BldcHpz6QtMmBdNSaYsXa7SxCmdHenU%2B1l8kgu5KzjSN3h%2B9hk5d4a%2FAej0eq2hh7Kfx3ZFaW6x%2BLqP6L0X76C7YnfEANo6sTeGcOtpQtRPCSUaJrLXcNW4rmZ%2FExwetrqL5nPtXwfkb5LA96xehDDPU7wh4MkyPAlWeMzdWiOAzMx6oe2b9WdorAvdQCgu8q49TBRAZ0J%2BRgwTiZqniwGMW1P8c8irQVDISwyinxFYnCY1hb5xAIFDzcF27vGAuqEF5ZlhmZUtdHWekPr%2Fo8lLYAC2AaQp1KCjEfa2quJRAUrZl%2BUziflX2Gm9gC5KgylZK8qwB3%2FcC1p6eSADsct1NPSJujCgXtCX1Ow5zJxyw7YkWscwiSFI5O4WO92nEMs88hx5E10kA3z9%2FQNM2fUgtgXLQpXiZ0S9F1cdvnIbmoIfnk2kaa0lZ6ZhucgV5vylNVJrJgKDngrqH%2Bfb%2B7KJ8Scem4es%2FJdtNO8CTW5b7RaoJTnbMP5jxgQxmmrWUYkNLEpeTIOlZz2Mu%2FTWXn377UtfMP9JSZ1IcJDpOyE4OzF%2FW7FVo6H8MIqr0sEGOqUBbB4a0UGh1nzNVtQYK1RkSqa3D2wB4AvG95i7SG6cFO%2Bw64czxmNzacAyX8z3glbltHj0T1LFiVJm6N%2FenNDHjUL%2BSUVUisbbvAej2tY1%2Bte0udxIYvSJ9k6BHAVmT3anClFPM9s3BYCSddChpD%2BrhOoZIdzgRSvMGcdyhRLfapkxdxGhHUQqjltz%2BVOcRC8HyQfmDLrAY6SMPngAqT%2FhEnBzcSWl&X-Amz-Signature=67817f89814ac43b8c4322ab4ed1c6cd5c597f62d4bc751afb067e88978efe36&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUEMJEZQ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T170127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCW7yHrC8XdfGwjKiWvXu5fAFOFmk4LTvMUb%2F9GmJPjLAIgSAJHmL0iOfbrJRgoO4QlYaM%2BKnjo33hftRLtdDp0YKQq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDDUqXPiEDa5Y1QbQJSrcA3Mg3pEngf%2BvbCFZO1Zse4RAa8yMXdacMVRA0ri1diKuEGnSqj%2BEGdofRjHZbzeCmjAxi%2BldcHpz6QtMmBdNSaYsXa7SxCmdHenU%2B1l8kgu5KzjSN3h%2B9hk5d4a%2FAej0eq2hh7Kfx3ZFaW6x%2BLqP6L0X76C7YnfEANo6sTeGcOtpQtRPCSUaJrLXcNW4rmZ%2FExwetrqL5nPtXwfkb5LA96xehDDPU7wh4MkyPAlWeMzdWiOAzMx6oe2b9WdorAvdQCgu8q49TBRAZ0J%2BRgwTiZqniwGMW1P8c8irQVDISwyinxFYnCY1hb5xAIFDzcF27vGAuqEF5ZlhmZUtdHWekPr%2Fo8lLYAC2AaQp1KCjEfa2quJRAUrZl%2BUziflX2Gm9gC5KgylZK8qwB3%2FcC1p6eSADsct1NPSJujCgXtCX1Ow5zJxyw7YkWscwiSFI5O4WO92nEMs88hx5E10kA3z9%2FQNM2fUgtgXLQpXiZ0S9F1cdvnIbmoIfnk2kaa0lZ6ZhucgV5vylNVJrJgKDngrqH%2Bfb%2B7KJ8Scem4es%2FJdtNO8CTW5b7RaoJTnbMP5jxgQxmmrWUYkNLEpeTIOlZz2Mu%2FTWXn377UtfMP9JSZ1IcJDpOyE4OzF%2FW7FVo6H8MIqr0sEGOqUBbB4a0UGh1nzNVtQYK1RkSqa3D2wB4AvG95i7SG6cFO%2Bw64czxmNzacAyX8z3glbltHj0T1LFiVJm6N%2FenNDHjUL%2BSUVUisbbvAej2tY1%2Bte0udxIYvSJ9k6BHAVmT3anClFPM9s3BYCSddChpD%2BrhOoZIdzgRSvMGcdyhRLfapkxdxGhHUQqjltz%2BVOcRC8HyQfmDLrAY6SMPngAqT%2FhEnBzcSWl&X-Amz-Signature=482fe5da60a6c8c5345b94ddf8a1956c756d3fa942c804348fa2b848e77f6f6b&X-Amz-SignedHeaders=host&x-id=GetObject)
