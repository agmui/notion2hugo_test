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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ADBVPF%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T022648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIGCu%2Br5omn9mJDnmdkErevxRFv%2BlfOmNQBfZkXAJehBzAiEA35HASlQ2r7ZrF7qlM0TKJZOLnkXhrZv57j536vNFAYgqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAn1sGO3qndYhTd%2FHSrcA1GoK1b9rUQMe0eB80BrVB1oS%2BtX7pXDPGLo0bIT%2B%2BdPAu7pofCHBOurnA%2BLo6To1BMETgRHHkzG21zYlrpKtwV5J4fLfdKkIhD50o5bA67iZdmWvy9S2Fz%2B%2FZCaYxoThVsh9dRA%2Bqo8Xga1IU4G1xKdx2uKlO5HkrA1m3M2m9QOUZBGF8nEnUEln%2Fzw%2FoZK165v%2FEsxk5g0po7MKgslSlBoxo2Fogl3JSfljjMkzsw2WNhdweUtFO6ImTUtzPyaJ6OrIxf43wxd5xOUfuWtovc4BALc3Vnc7NecGDUjPFZLMVMROcR0JSqs4NqkgiO4x7QcBdNN%2F2LtzAOxs782dZieTpfrCdGwdy%2FaExttxkpOTxUC64%2FdqpK48fgx9Xvnhv49Ge85OdWCwcjjRWO30B0DWXg2SJMtU0aSWCV%2BQ44mABeVHldm8nyJxhZE8l9uFM9cJeItDWszewBbbOKdlw1sNNQ931p2ZJnCyGgcm%2F5PdP5n0NtuqaJoy6vtaTP06hySBb4AO6bysQptTVrh%2BfjLb54y0TeykLQnA9cAy7szEPlh1C7znOVQg%2FMNFRfJrLBF6mD2FRyLlhHDHS%2BqyldEdtZtdqjQrpqYX5qOWP3C9G41FsOb9mg7OopzMOSBkcAGOqUB5VI7yYFqdrqKwHQpkrRtUKyWPMWMJb5DV5USF9ECxl0C4ADFFPf8GziOjPW9XKDTqujJ7LbQ3i%2F7U9pi2aRCMXt2Sb%2FGjmGP%2BSJJxc6WQ0f%2BD7IKvbuob0M8B3DsWktazjipqXMwrdo2OG%2Be8dFcXefEL1UT3Lc0GHH8ECKGdW21Yu4%2BhPs24icV9ilW0Uv8T%2FeE%2FUYyYI79p1ltc504Wu%2FMLMR2&X-Amz-Signature=d5e9d4dcc15776fab0743e21d012c3b4531c3d3479bf8cdd43bd81856171d296&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ADBVPF%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T022648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIGCu%2Br5omn9mJDnmdkErevxRFv%2BlfOmNQBfZkXAJehBzAiEA35HASlQ2r7ZrF7qlM0TKJZOLnkXhrZv57j536vNFAYgqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAn1sGO3qndYhTd%2FHSrcA1GoK1b9rUQMe0eB80BrVB1oS%2BtX7pXDPGLo0bIT%2B%2BdPAu7pofCHBOurnA%2BLo6To1BMETgRHHkzG21zYlrpKtwV5J4fLfdKkIhD50o5bA67iZdmWvy9S2Fz%2B%2FZCaYxoThVsh9dRA%2Bqo8Xga1IU4G1xKdx2uKlO5HkrA1m3M2m9QOUZBGF8nEnUEln%2Fzw%2FoZK165v%2FEsxk5g0po7MKgslSlBoxo2Fogl3JSfljjMkzsw2WNhdweUtFO6ImTUtzPyaJ6OrIxf43wxd5xOUfuWtovc4BALc3Vnc7NecGDUjPFZLMVMROcR0JSqs4NqkgiO4x7QcBdNN%2F2LtzAOxs782dZieTpfrCdGwdy%2FaExttxkpOTxUC64%2FdqpK48fgx9Xvnhv49Ge85OdWCwcjjRWO30B0DWXg2SJMtU0aSWCV%2BQ44mABeVHldm8nyJxhZE8l9uFM9cJeItDWszewBbbOKdlw1sNNQ931p2ZJnCyGgcm%2F5PdP5n0NtuqaJoy6vtaTP06hySBb4AO6bysQptTVrh%2BfjLb54y0TeykLQnA9cAy7szEPlh1C7znOVQg%2FMNFRfJrLBF6mD2FRyLlhHDHS%2BqyldEdtZtdqjQrpqYX5qOWP3C9G41FsOb9mg7OopzMOSBkcAGOqUB5VI7yYFqdrqKwHQpkrRtUKyWPMWMJb5DV5USF9ECxl0C4ADFFPf8GziOjPW9XKDTqujJ7LbQ3i%2F7U9pi2aRCMXt2Sb%2FGjmGP%2BSJJxc6WQ0f%2BD7IKvbuob0M8B3DsWktazjipqXMwrdo2OG%2Be8dFcXefEL1UT3Lc0GHH8ECKGdW21Yu4%2BhPs24icV9ilW0Uv8T%2FeE%2FUYyYI79p1ltc504Wu%2FMLMR2&X-Amz-Signature=ecb74f7713b86bdf5324cfd15cfa6902a04084a9f19ee0901c6b5abd4d475cac&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ADBVPF%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T022648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIGCu%2Br5omn9mJDnmdkErevxRFv%2BlfOmNQBfZkXAJehBzAiEA35HASlQ2r7ZrF7qlM0TKJZOLnkXhrZv57j536vNFAYgqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAn1sGO3qndYhTd%2FHSrcA1GoK1b9rUQMe0eB80BrVB1oS%2BtX7pXDPGLo0bIT%2B%2BdPAu7pofCHBOurnA%2BLo6To1BMETgRHHkzG21zYlrpKtwV5J4fLfdKkIhD50o5bA67iZdmWvy9S2Fz%2B%2FZCaYxoThVsh9dRA%2Bqo8Xga1IU4G1xKdx2uKlO5HkrA1m3M2m9QOUZBGF8nEnUEln%2Fzw%2FoZK165v%2FEsxk5g0po7MKgslSlBoxo2Fogl3JSfljjMkzsw2WNhdweUtFO6ImTUtzPyaJ6OrIxf43wxd5xOUfuWtovc4BALc3Vnc7NecGDUjPFZLMVMROcR0JSqs4NqkgiO4x7QcBdNN%2F2LtzAOxs782dZieTpfrCdGwdy%2FaExttxkpOTxUC64%2FdqpK48fgx9Xvnhv49Ge85OdWCwcjjRWO30B0DWXg2SJMtU0aSWCV%2BQ44mABeVHldm8nyJxhZE8l9uFM9cJeItDWszewBbbOKdlw1sNNQ931p2ZJnCyGgcm%2F5PdP5n0NtuqaJoy6vtaTP06hySBb4AO6bysQptTVrh%2BfjLb54y0TeykLQnA9cAy7szEPlh1C7znOVQg%2FMNFRfJrLBF6mD2FRyLlhHDHS%2BqyldEdtZtdqjQrpqYX5qOWP3C9G41FsOb9mg7OopzMOSBkcAGOqUB5VI7yYFqdrqKwHQpkrRtUKyWPMWMJb5DV5USF9ECxl0C4ADFFPf8GziOjPW9XKDTqujJ7LbQ3i%2F7U9pi2aRCMXt2Sb%2FGjmGP%2BSJJxc6WQ0f%2BD7IKvbuob0M8B3DsWktazjipqXMwrdo2OG%2Be8dFcXefEL1UT3Lc0GHH8ECKGdW21Yu4%2BhPs24icV9ilW0Uv8T%2FeE%2FUYyYI79p1ltc504Wu%2FMLMR2&X-Amz-Signature=a1a5bfb3fad9e670112e75d4a293b059a0893da49b33bcb7864315ef1f29781d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ADBVPF%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T022648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIGCu%2Br5omn9mJDnmdkErevxRFv%2BlfOmNQBfZkXAJehBzAiEA35HASlQ2r7ZrF7qlM0TKJZOLnkXhrZv57j536vNFAYgqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAn1sGO3qndYhTd%2FHSrcA1GoK1b9rUQMe0eB80BrVB1oS%2BtX7pXDPGLo0bIT%2B%2BdPAu7pofCHBOurnA%2BLo6To1BMETgRHHkzG21zYlrpKtwV5J4fLfdKkIhD50o5bA67iZdmWvy9S2Fz%2B%2FZCaYxoThVsh9dRA%2Bqo8Xga1IU4G1xKdx2uKlO5HkrA1m3M2m9QOUZBGF8nEnUEln%2Fzw%2FoZK165v%2FEsxk5g0po7MKgslSlBoxo2Fogl3JSfljjMkzsw2WNhdweUtFO6ImTUtzPyaJ6OrIxf43wxd5xOUfuWtovc4BALc3Vnc7NecGDUjPFZLMVMROcR0JSqs4NqkgiO4x7QcBdNN%2F2LtzAOxs782dZieTpfrCdGwdy%2FaExttxkpOTxUC64%2FdqpK48fgx9Xvnhv49Ge85OdWCwcjjRWO30B0DWXg2SJMtU0aSWCV%2BQ44mABeVHldm8nyJxhZE8l9uFM9cJeItDWszewBbbOKdlw1sNNQ931p2ZJnCyGgcm%2F5PdP5n0NtuqaJoy6vtaTP06hySBb4AO6bysQptTVrh%2BfjLb54y0TeykLQnA9cAy7szEPlh1C7znOVQg%2FMNFRfJrLBF6mD2FRyLlhHDHS%2BqyldEdtZtdqjQrpqYX5qOWP3C9G41FsOb9mg7OopzMOSBkcAGOqUB5VI7yYFqdrqKwHQpkrRtUKyWPMWMJb5DV5USF9ECxl0C4ADFFPf8GziOjPW9XKDTqujJ7LbQ3i%2F7U9pi2aRCMXt2Sb%2FGjmGP%2BSJJxc6WQ0f%2BD7IKvbuob0M8B3DsWktazjipqXMwrdo2OG%2Be8dFcXefEL1UT3Lc0GHH8ECKGdW21Yu4%2BhPs24icV9ilW0Uv8T%2FeE%2FUYyYI79p1ltc504Wu%2FMLMR2&X-Amz-Signature=672705b1e8d073e63f48284b1801b9f1ab14cbeecb9844a3a98a7e85514253aa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ADBVPF%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T022648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIGCu%2Br5omn9mJDnmdkErevxRFv%2BlfOmNQBfZkXAJehBzAiEA35HASlQ2r7ZrF7qlM0TKJZOLnkXhrZv57j536vNFAYgqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAn1sGO3qndYhTd%2FHSrcA1GoK1b9rUQMe0eB80BrVB1oS%2BtX7pXDPGLo0bIT%2B%2BdPAu7pofCHBOurnA%2BLo6To1BMETgRHHkzG21zYlrpKtwV5J4fLfdKkIhD50o5bA67iZdmWvy9S2Fz%2B%2FZCaYxoThVsh9dRA%2Bqo8Xga1IU4G1xKdx2uKlO5HkrA1m3M2m9QOUZBGF8nEnUEln%2Fzw%2FoZK165v%2FEsxk5g0po7MKgslSlBoxo2Fogl3JSfljjMkzsw2WNhdweUtFO6ImTUtzPyaJ6OrIxf43wxd5xOUfuWtovc4BALc3Vnc7NecGDUjPFZLMVMROcR0JSqs4NqkgiO4x7QcBdNN%2F2LtzAOxs782dZieTpfrCdGwdy%2FaExttxkpOTxUC64%2FdqpK48fgx9Xvnhv49Ge85OdWCwcjjRWO30B0DWXg2SJMtU0aSWCV%2BQ44mABeVHldm8nyJxhZE8l9uFM9cJeItDWszewBbbOKdlw1sNNQ931p2ZJnCyGgcm%2F5PdP5n0NtuqaJoy6vtaTP06hySBb4AO6bysQptTVrh%2BfjLb54y0TeykLQnA9cAy7szEPlh1C7znOVQg%2FMNFRfJrLBF6mD2FRyLlhHDHS%2BqyldEdtZtdqjQrpqYX5qOWP3C9G41FsOb9mg7OopzMOSBkcAGOqUB5VI7yYFqdrqKwHQpkrRtUKyWPMWMJb5DV5USF9ECxl0C4ADFFPf8GziOjPW9XKDTqujJ7LbQ3i%2F7U9pi2aRCMXt2Sb%2FGjmGP%2BSJJxc6WQ0f%2BD7IKvbuob0M8B3DsWktazjipqXMwrdo2OG%2Be8dFcXefEL1UT3Lc0GHH8ECKGdW21Yu4%2BhPs24icV9ilW0Uv8T%2FeE%2FUYyYI79p1ltc504Wu%2FMLMR2&X-Amz-Signature=c871d4d450d94f2c11d23ecd96c357f015dc79df5999145bfd61a02033c3fedb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ADBVPF%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T022648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIGCu%2Br5omn9mJDnmdkErevxRFv%2BlfOmNQBfZkXAJehBzAiEA35HASlQ2r7ZrF7qlM0TKJZOLnkXhrZv57j536vNFAYgqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAn1sGO3qndYhTd%2FHSrcA1GoK1b9rUQMe0eB80BrVB1oS%2BtX7pXDPGLo0bIT%2B%2BdPAu7pofCHBOurnA%2BLo6To1BMETgRHHkzG21zYlrpKtwV5J4fLfdKkIhD50o5bA67iZdmWvy9S2Fz%2B%2FZCaYxoThVsh9dRA%2Bqo8Xga1IU4G1xKdx2uKlO5HkrA1m3M2m9QOUZBGF8nEnUEln%2Fzw%2FoZK165v%2FEsxk5g0po7MKgslSlBoxo2Fogl3JSfljjMkzsw2WNhdweUtFO6ImTUtzPyaJ6OrIxf43wxd5xOUfuWtovc4BALc3Vnc7NecGDUjPFZLMVMROcR0JSqs4NqkgiO4x7QcBdNN%2F2LtzAOxs782dZieTpfrCdGwdy%2FaExttxkpOTxUC64%2FdqpK48fgx9Xvnhv49Ge85OdWCwcjjRWO30B0DWXg2SJMtU0aSWCV%2BQ44mABeVHldm8nyJxhZE8l9uFM9cJeItDWszewBbbOKdlw1sNNQ931p2ZJnCyGgcm%2F5PdP5n0NtuqaJoy6vtaTP06hySBb4AO6bysQptTVrh%2BfjLb54y0TeykLQnA9cAy7szEPlh1C7znOVQg%2FMNFRfJrLBF6mD2FRyLlhHDHS%2BqyldEdtZtdqjQrpqYX5qOWP3C9G41FsOb9mg7OopzMOSBkcAGOqUB5VI7yYFqdrqKwHQpkrRtUKyWPMWMJb5DV5USF9ECxl0C4ADFFPf8GziOjPW9XKDTqujJ7LbQ3i%2F7U9pi2aRCMXt2Sb%2FGjmGP%2BSJJxc6WQ0f%2BD7IKvbuob0M8B3DsWktazjipqXMwrdo2OG%2Be8dFcXefEL1UT3Lc0GHH8ECKGdW21Yu4%2BhPs24icV9ilW0Uv8T%2FeE%2FUYyYI79p1ltc504Wu%2FMLMR2&X-Amz-Signature=40265caeb297c7f4a3a62d346209da6a88caf01611788b43a22c756e02d0960a&X-Amz-SignedHeaders=host&x-id=GetObject)
