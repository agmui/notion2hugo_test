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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RYJ7H6I%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T020650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPB9ka%2BwTCX9Quh7e03DA%2BvCJ5vCZcY3fE%2BM1SagTkDAiEA6xBvJ6MeSzuJt%2BX5nxdVWabIDNrjG2l6R%2BPw%2FZUeTNUqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrjZVvLdEvLdrKuzCrcA%2FywfH3eC4i6q5ZYP1B83Pw1YEseGw8c%2BhpXLfFTJougAV1%2BpMb720RCbwH9Wk1Pz2G6SjZn4pxkBas4sdUWTTtLBR3zBIdjxg85Lm8At7JZScBVKWfEG1SPRv3Z1Mjbd4jSl4fNdA%2B2x17BqwmOKQgelOABMTJJ82Bd%2Fq7XmA%2FRLW%2FEtEAq%2BiBJ7UPFoI2c2%2FjdfndDyL%2FEnNbNRt5lKm79sVkBmnlm9MZss6Ob8yKm%2FvPAiTDwWs3bft%2FtxbX%2Fe4PuOlrQjhjHYW7wjJo0rV4kIwzy5Jh%2Fy%2B7D3oGOlVki%2FBkzwz6Oif9tuYZnl%2F2oQneBQUKRkYTvtE53y%2BRiaGl1K45yrT9%2BnTp2bI5jMRiUsXkXsfh73bZ104ynuyKny71fCkkvAkoRLO5HgqmwVjwIhnkQ8tqzTVoy%2FfOe1A3YfvQ9HBGtOID%2FSFby31yaYG%2FV%2FCYge%2BelXVzlpl55uMDz00iIGAw8bRCXXQlZASF8ZI%2Bfjp4g3StpmuZV6U9xDEte1QamqqAQv1TT%2Bbg2TftOP%2FhHotUt0ESpqPbIH2o7bczmYuHiIYwwetIo4PwkkcqLjF8OuqQWJ7YdGRE0CkMUXeu%2F%2BkORS9GYm7%2BPqmK6IA0VVuAHL1usQ9nEMKHS8LwGOqUB7MQ9z%2FGZ0Kk2E0RTmVD5UTYpZtDAUupXedrD%2FuIDq29l7a1yFFmDK8IroH7Q1D8SfTbN2hsMonTSx2w2I4Bw9Gfov8uLLQDjH9cSbny%2Bfrj95Q7BPjqnpXA0ViCBH0d3k%2B5LW2QG5QAOeB7gto3IjENU0s6BaDDc10VeJZ%2Bqv%2B4ht1g%2B50wKg8GKFh7okRtIApyGc4yaKbCd5A%2FqXWtpeTYtGFiH&X-Amz-Signature=e2554048d9c13d87f87b7c69d90a3a5fc06b8ad066628629e73b827de5f71040&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RYJ7H6I%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T020650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPB9ka%2BwTCX9Quh7e03DA%2BvCJ5vCZcY3fE%2BM1SagTkDAiEA6xBvJ6MeSzuJt%2BX5nxdVWabIDNrjG2l6R%2BPw%2FZUeTNUqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrjZVvLdEvLdrKuzCrcA%2FywfH3eC4i6q5ZYP1B83Pw1YEseGw8c%2BhpXLfFTJougAV1%2BpMb720RCbwH9Wk1Pz2G6SjZn4pxkBas4sdUWTTtLBR3zBIdjxg85Lm8At7JZScBVKWfEG1SPRv3Z1Mjbd4jSl4fNdA%2B2x17BqwmOKQgelOABMTJJ82Bd%2Fq7XmA%2FRLW%2FEtEAq%2BiBJ7UPFoI2c2%2FjdfndDyL%2FEnNbNRt5lKm79sVkBmnlm9MZss6Ob8yKm%2FvPAiTDwWs3bft%2FtxbX%2Fe4PuOlrQjhjHYW7wjJo0rV4kIwzy5Jh%2Fy%2B7D3oGOlVki%2FBkzwz6Oif9tuYZnl%2F2oQneBQUKRkYTvtE53y%2BRiaGl1K45yrT9%2BnTp2bI5jMRiUsXkXsfh73bZ104ynuyKny71fCkkvAkoRLO5HgqmwVjwIhnkQ8tqzTVoy%2FfOe1A3YfvQ9HBGtOID%2FSFby31yaYG%2FV%2FCYge%2BelXVzlpl55uMDz00iIGAw8bRCXXQlZASF8ZI%2Bfjp4g3StpmuZV6U9xDEte1QamqqAQv1TT%2Bbg2TftOP%2FhHotUt0ESpqPbIH2o7bczmYuHiIYwwetIo4PwkkcqLjF8OuqQWJ7YdGRE0CkMUXeu%2F%2BkORS9GYm7%2BPqmK6IA0VVuAHL1usQ9nEMKHS8LwGOqUB7MQ9z%2FGZ0Kk2E0RTmVD5UTYpZtDAUupXedrD%2FuIDq29l7a1yFFmDK8IroH7Q1D8SfTbN2hsMonTSx2w2I4Bw9Gfov8uLLQDjH9cSbny%2Bfrj95Q7BPjqnpXA0ViCBH0d3k%2B5LW2QG5QAOeB7gto3IjENU0s6BaDDc10VeJZ%2Bqv%2B4ht1g%2B50wKg8GKFh7okRtIApyGc4yaKbCd5A%2FqXWtpeTYtGFiH&X-Amz-Signature=a6998c718e3af04a80c26c953943915a973634cc6bd6c4f9b76cd72bbce4a403&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RYJ7H6I%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T020650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPB9ka%2BwTCX9Quh7e03DA%2BvCJ5vCZcY3fE%2BM1SagTkDAiEA6xBvJ6MeSzuJt%2BX5nxdVWabIDNrjG2l6R%2BPw%2FZUeTNUqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrjZVvLdEvLdrKuzCrcA%2FywfH3eC4i6q5ZYP1B83Pw1YEseGw8c%2BhpXLfFTJougAV1%2BpMb720RCbwH9Wk1Pz2G6SjZn4pxkBas4sdUWTTtLBR3zBIdjxg85Lm8At7JZScBVKWfEG1SPRv3Z1Mjbd4jSl4fNdA%2B2x17BqwmOKQgelOABMTJJ82Bd%2Fq7XmA%2FRLW%2FEtEAq%2BiBJ7UPFoI2c2%2FjdfndDyL%2FEnNbNRt5lKm79sVkBmnlm9MZss6Ob8yKm%2FvPAiTDwWs3bft%2FtxbX%2Fe4PuOlrQjhjHYW7wjJo0rV4kIwzy5Jh%2Fy%2B7D3oGOlVki%2FBkzwz6Oif9tuYZnl%2F2oQneBQUKRkYTvtE53y%2BRiaGl1K45yrT9%2BnTp2bI5jMRiUsXkXsfh73bZ104ynuyKny71fCkkvAkoRLO5HgqmwVjwIhnkQ8tqzTVoy%2FfOe1A3YfvQ9HBGtOID%2FSFby31yaYG%2FV%2FCYge%2BelXVzlpl55uMDz00iIGAw8bRCXXQlZASF8ZI%2Bfjp4g3StpmuZV6U9xDEte1QamqqAQv1TT%2Bbg2TftOP%2FhHotUt0ESpqPbIH2o7bczmYuHiIYwwetIo4PwkkcqLjF8OuqQWJ7YdGRE0CkMUXeu%2F%2BkORS9GYm7%2BPqmK6IA0VVuAHL1usQ9nEMKHS8LwGOqUB7MQ9z%2FGZ0Kk2E0RTmVD5UTYpZtDAUupXedrD%2FuIDq29l7a1yFFmDK8IroH7Q1D8SfTbN2hsMonTSx2w2I4Bw9Gfov8uLLQDjH9cSbny%2Bfrj95Q7BPjqnpXA0ViCBH0d3k%2B5LW2QG5QAOeB7gto3IjENU0s6BaDDc10VeJZ%2Bqv%2B4ht1g%2B50wKg8GKFh7okRtIApyGc4yaKbCd5A%2FqXWtpeTYtGFiH&X-Amz-Signature=ed7da87927519bdb7bb7295860bd2fdb57c9f9693035c5c9e344ff7c2f24d3c9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RYJ7H6I%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T020650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPB9ka%2BwTCX9Quh7e03DA%2BvCJ5vCZcY3fE%2BM1SagTkDAiEA6xBvJ6MeSzuJt%2BX5nxdVWabIDNrjG2l6R%2BPw%2FZUeTNUqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrjZVvLdEvLdrKuzCrcA%2FywfH3eC4i6q5ZYP1B83Pw1YEseGw8c%2BhpXLfFTJougAV1%2BpMb720RCbwH9Wk1Pz2G6SjZn4pxkBas4sdUWTTtLBR3zBIdjxg85Lm8At7JZScBVKWfEG1SPRv3Z1Mjbd4jSl4fNdA%2B2x17BqwmOKQgelOABMTJJ82Bd%2Fq7XmA%2FRLW%2FEtEAq%2BiBJ7UPFoI2c2%2FjdfndDyL%2FEnNbNRt5lKm79sVkBmnlm9MZss6Ob8yKm%2FvPAiTDwWs3bft%2FtxbX%2Fe4PuOlrQjhjHYW7wjJo0rV4kIwzy5Jh%2Fy%2B7D3oGOlVki%2FBkzwz6Oif9tuYZnl%2F2oQneBQUKRkYTvtE53y%2BRiaGl1K45yrT9%2BnTp2bI5jMRiUsXkXsfh73bZ104ynuyKny71fCkkvAkoRLO5HgqmwVjwIhnkQ8tqzTVoy%2FfOe1A3YfvQ9HBGtOID%2FSFby31yaYG%2FV%2FCYge%2BelXVzlpl55uMDz00iIGAw8bRCXXQlZASF8ZI%2Bfjp4g3StpmuZV6U9xDEte1QamqqAQv1TT%2Bbg2TftOP%2FhHotUt0ESpqPbIH2o7bczmYuHiIYwwetIo4PwkkcqLjF8OuqQWJ7YdGRE0CkMUXeu%2F%2BkORS9GYm7%2BPqmK6IA0VVuAHL1usQ9nEMKHS8LwGOqUB7MQ9z%2FGZ0Kk2E0RTmVD5UTYpZtDAUupXedrD%2FuIDq29l7a1yFFmDK8IroH7Q1D8SfTbN2hsMonTSx2w2I4Bw9Gfov8uLLQDjH9cSbny%2Bfrj95Q7BPjqnpXA0ViCBH0d3k%2B5LW2QG5QAOeB7gto3IjENU0s6BaDDc10VeJZ%2Bqv%2B4ht1g%2B50wKg8GKFh7okRtIApyGc4yaKbCd5A%2FqXWtpeTYtGFiH&X-Amz-Signature=dad4c4ef874bfda6a1c359d39881c859f32c73427192be9c9a5cf879491eb2d5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RYJ7H6I%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T020650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPB9ka%2BwTCX9Quh7e03DA%2BvCJ5vCZcY3fE%2BM1SagTkDAiEA6xBvJ6MeSzuJt%2BX5nxdVWabIDNrjG2l6R%2BPw%2FZUeTNUqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrjZVvLdEvLdrKuzCrcA%2FywfH3eC4i6q5ZYP1B83Pw1YEseGw8c%2BhpXLfFTJougAV1%2BpMb720RCbwH9Wk1Pz2G6SjZn4pxkBas4sdUWTTtLBR3zBIdjxg85Lm8At7JZScBVKWfEG1SPRv3Z1Mjbd4jSl4fNdA%2B2x17BqwmOKQgelOABMTJJ82Bd%2Fq7XmA%2FRLW%2FEtEAq%2BiBJ7UPFoI2c2%2FjdfndDyL%2FEnNbNRt5lKm79sVkBmnlm9MZss6Ob8yKm%2FvPAiTDwWs3bft%2FtxbX%2Fe4PuOlrQjhjHYW7wjJo0rV4kIwzy5Jh%2Fy%2B7D3oGOlVki%2FBkzwz6Oif9tuYZnl%2F2oQneBQUKRkYTvtE53y%2BRiaGl1K45yrT9%2BnTp2bI5jMRiUsXkXsfh73bZ104ynuyKny71fCkkvAkoRLO5HgqmwVjwIhnkQ8tqzTVoy%2FfOe1A3YfvQ9HBGtOID%2FSFby31yaYG%2FV%2FCYge%2BelXVzlpl55uMDz00iIGAw8bRCXXQlZASF8ZI%2Bfjp4g3StpmuZV6U9xDEte1QamqqAQv1TT%2Bbg2TftOP%2FhHotUt0ESpqPbIH2o7bczmYuHiIYwwetIo4PwkkcqLjF8OuqQWJ7YdGRE0CkMUXeu%2F%2BkORS9GYm7%2BPqmK6IA0VVuAHL1usQ9nEMKHS8LwGOqUB7MQ9z%2FGZ0Kk2E0RTmVD5UTYpZtDAUupXedrD%2FuIDq29l7a1yFFmDK8IroH7Q1D8SfTbN2hsMonTSx2w2I4Bw9Gfov8uLLQDjH9cSbny%2Bfrj95Q7BPjqnpXA0ViCBH0d3k%2B5LW2QG5QAOeB7gto3IjENU0s6BaDDc10VeJZ%2Bqv%2B4ht1g%2B50wKg8GKFh7okRtIApyGc4yaKbCd5A%2FqXWtpeTYtGFiH&X-Amz-Signature=5d258f2de58677185a7112954a3522df09a5b55b0da60df39c8b434a968bbf7f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RYJ7H6I%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T020650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPB9ka%2BwTCX9Quh7e03DA%2BvCJ5vCZcY3fE%2BM1SagTkDAiEA6xBvJ6MeSzuJt%2BX5nxdVWabIDNrjG2l6R%2BPw%2FZUeTNUqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFrjZVvLdEvLdrKuzCrcA%2FywfH3eC4i6q5ZYP1B83Pw1YEseGw8c%2BhpXLfFTJougAV1%2BpMb720RCbwH9Wk1Pz2G6SjZn4pxkBas4sdUWTTtLBR3zBIdjxg85Lm8At7JZScBVKWfEG1SPRv3Z1Mjbd4jSl4fNdA%2B2x17BqwmOKQgelOABMTJJ82Bd%2Fq7XmA%2FRLW%2FEtEAq%2BiBJ7UPFoI2c2%2FjdfndDyL%2FEnNbNRt5lKm79sVkBmnlm9MZss6Ob8yKm%2FvPAiTDwWs3bft%2FtxbX%2Fe4PuOlrQjhjHYW7wjJo0rV4kIwzy5Jh%2Fy%2B7D3oGOlVki%2FBkzwz6Oif9tuYZnl%2F2oQneBQUKRkYTvtE53y%2BRiaGl1K45yrT9%2BnTp2bI5jMRiUsXkXsfh73bZ104ynuyKny71fCkkvAkoRLO5HgqmwVjwIhnkQ8tqzTVoy%2FfOe1A3YfvQ9HBGtOID%2FSFby31yaYG%2FV%2FCYge%2BelXVzlpl55uMDz00iIGAw8bRCXXQlZASF8ZI%2Bfjp4g3StpmuZV6U9xDEte1QamqqAQv1TT%2Bbg2TftOP%2FhHotUt0ESpqPbIH2o7bczmYuHiIYwwetIo4PwkkcqLjF8OuqQWJ7YdGRE0CkMUXeu%2F%2BkORS9GYm7%2BPqmK6IA0VVuAHL1usQ9nEMKHS8LwGOqUB7MQ9z%2FGZ0Kk2E0RTmVD5UTYpZtDAUupXedrD%2FuIDq29l7a1yFFmDK8IroH7Q1D8SfTbN2hsMonTSx2w2I4Bw9Gfov8uLLQDjH9cSbny%2Bfrj95Q7BPjqnpXA0ViCBH0d3k%2B5LW2QG5QAOeB7gto3IjENU0s6BaDDc10VeJZ%2Bqv%2B4ht1g%2B50wKg8GKFh7okRtIApyGc4yaKbCd5A%2FqXWtpeTYtGFiH&X-Amz-Signature=628a3f1728ed3dcab1d325e7e34d32c9355169d3abaaa73a8d8a23bc4162dace&X-Amz-SignedHeaders=host&x-id=GetObject)
