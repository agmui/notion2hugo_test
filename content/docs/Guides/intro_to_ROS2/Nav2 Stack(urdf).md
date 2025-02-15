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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYUHLBHX%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T070243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCID3hAYNcTbsWd48P0pKwgRY80ixlHRT4u85Re%2FqFw%2BNtAiEAn0pEjdQnrQvFxL1goFBlyCiF7QriHEBCn588I2yeyuAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDAOuKI1HHpawbaEW1ircA7Jp7nOAYAJ4lrhnTXU02G7hbwerddUF8wcw1TviRdS0Y643rC1KWkrOhmG5O1bsIv%2FEfxmVLHuRAtSd53KFvoWeVf%2F1rp9DRdrHrPBjbxe5tjPMojb5GeI0M9A84eWLEtW9g5IKMQjjkMRDJ%2BjHDvr1J%2Bo5w%2BbFVI1%2FvxGUD1PaiscLDbeJrkgl%2FoGwOHH0RXNscEZB5vo7bcuU4C8O%2B7kjgbHKa%2FHJVL5MGLTMfcNfVRzyFjeiCGt%2B6vSJzpKdrky%2FkruV3a%2FFSi%2F3YtrEGz3%2B72cH44BDDSqwzwidF2ZAtEGU4XrpqUiAfB09S513zgr7ib19qnl59trhqIABi8n5sdtO62VheOi1PNtB0hMp4XQGpi4TM2jnTxdQU6gxl5PL%2BmyK0bPXl3KVX4fdZkP22ycma0sc2J0L9giTC2VxbrodO1%2F1ZN4O7hjx7b4V0NVdl4gmbv7g284ioL0UKUCrldZ2nlEscUcCzUYydW9bEwdmBGAWXj1vbVzEfnaAUiN7rpp5DkyJc%2Bu1lfgLMnzs9FNAenChcyRxBz7eCQofV%2Fot5vj7QQpaDge%2BD2mWybFcc9MPEXx%2FTq1LCMo9%2B1Yb%2Fi4bymDPb9i6TpmxA9KUhn6QWUPKzc9puvbeMNTowL0GOqUBeB1ZuBp%2Bk%2BFN4LIKaCz80hNSwGP%2FpIhRvslrkUGyQ4%2Bhw1UQu7X8b1BgWotwvEcnf91zHow%2FpaLIcwkB9qG314uWQe14ZyKjb5JrBw6C5XEZcuc0hDrwSSDtH72ews7NIwgb4IgAkeg6GbVicP38RIhYmHWSWn1l0jX82pkCwG0qIDQ5xC70ZdgM23HgeLfg24W77R8j99zi9DdNjrJuKd5YiT%2Bs&X-Amz-Signature=11eb22f93aa28b9bf7dc3c8fd6f4478a959346ce16c4c6c78b38a87fb4491841&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYUHLBHX%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T070243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCID3hAYNcTbsWd48P0pKwgRY80ixlHRT4u85Re%2FqFw%2BNtAiEAn0pEjdQnrQvFxL1goFBlyCiF7QriHEBCn588I2yeyuAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDAOuKI1HHpawbaEW1ircA7Jp7nOAYAJ4lrhnTXU02G7hbwerddUF8wcw1TviRdS0Y643rC1KWkrOhmG5O1bsIv%2FEfxmVLHuRAtSd53KFvoWeVf%2F1rp9DRdrHrPBjbxe5tjPMojb5GeI0M9A84eWLEtW9g5IKMQjjkMRDJ%2BjHDvr1J%2Bo5w%2BbFVI1%2FvxGUD1PaiscLDbeJrkgl%2FoGwOHH0RXNscEZB5vo7bcuU4C8O%2B7kjgbHKa%2FHJVL5MGLTMfcNfVRzyFjeiCGt%2B6vSJzpKdrky%2FkruV3a%2FFSi%2F3YtrEGz3%2B72cH44BDDSqwzwidF2ZAtEGU4XrpqUiAfB09S513zgr7ib19qnl59trhqIABi8n5sdtO62VheOi1PNtB0hMp4XQGpi4TM2jnTxdQU6gxl5PL%2BmyK0bPXl3KVX4fdZkP22ycma0sc2J0L9giTC2VxbrodO1%2F1ZN4O7hjx7b4V0NVdl4gmbv7g284ioL0UKUCrldZ2nlEscUcCzUYydW9bEwdmBGAWXj1vbVzEfnaAUiN7rpp5DkyJc%2Bu1lfgLMnzs9FNAenChcyRxBz7eCQofV%2Fot5vj7QQpaDge%2BD2mWybFcc9MPEXx%2FTq1LCMo9%2B1Yb%2Fi4bymDPb9i6TpmxA9KUhn6QWUPKzc9puvbeMNTowL0GOqUBeB1ZuBp%2Bk%2BFN4LIKaCz80hNSwGP%2FpIhRvslrkUGyQ4%2Bhw1UQu7X8b1BgWotwvEcnf91zHow%2FpaLIcwkB9qG314uWQe14ZyKjb5JrBw6C5XEZcuc0hDrwSSDtH72ews7NIwgb4IgAkeg6GbVicP38RIhYmHWSWn1l0jX82pkCwG0qIDQ5xC70ZdgM23HgeLfg24W77R8j99zi9DdNjrJuKd5YiT%2Bs&X-Amz-Signature=d12796fde6b5d59d23b410094288427bd22964537158d14de79b4ab27eb17005&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYUHLBHX%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T070243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCID3hAYNcTbsWd48P0pKwgRY80ixlHRT4u85Re%2FqFw%2BNtAiEAn0pEjdQnrQvFxL1goFBlyCiF7QriHEBCn588I2yeyuAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDAOuKI1HHpawbaEW1ircA7Jp7nOAYAJ4lrhnTXU02G7hbwerddUF8wcw1TviRdS0Y643rC1KWkrOhmG5O1bsIv%2FEfxmVLHuRAtSd53KFvoWeVf%2F1rp9DRdrHrPBjbxe5tjPMojb5GeI0M9A84eWLEtW9g5IKMQjjkMRDJ%2BjHDvr1J%2Bo5w%2BbFVI1%2FvxGUD1PaiscLDbeJrkgl%2FoGwOHH0RXNscEZB5vo7bcuU4C8O%2B7kjgbHKa%2FHJVL5MGLTMfcNfVRzyFjeiCGt%2B6vSJzpKdrky%2FkruV3a%2FFSi%2F3YtrEGz3%2B72cH44BDDSqwzwidF2ZAtEGU4XrpqUiAfB09S513zgr7ib19qnl59trhqIABi8n5sdtO62VheOi1PNtB0hMp4XQGpi4TM2jnTxdQU6gxl5PL%2BmyK0bPXl3KVX4fdZkP22ycma0sc2J0L9giTC2VxbrodO1%2F1ZN4O7hjx7b4V0NVdl4gmbv7g284ioL0UKUCrldZ2nlEscUcCzUYydW9bEwdmBGAWXj1vbVzEfnaAUiN7rpp5DkyJc%2Bu1lfgLMnzs9FNAenChcyRxBz7eCQofV%2Fot5vj7QQpaDge%2BD2mWybFcc9MPEXx%2FTq1LCMo9%2B1Yb%2Fi4bymDPb9i6TpmxA9KUhn6QWUPKzc9puvbeMNTowL0GOqUBeB1ZuBp%2Bk%2BFN4LIKaCz80hNSwGP%2FpIhRvslrkUGyQ4%2Bhw1UQu7X8b1BgWotwvEcnf91zHow%2FpaLIcwkB9qG314uWQe14ZyKjb5JrBw6C5XEZcuc0hDrwSSDtH72ews7NIwgb4IgAkeg6GbVicP38RIhYmHWSWn1l0jX82pkCwG0qIDQ5xC70ZdgM23HgeLfg24W77R8j99zi9DdNjrJuKd5YiT%2Bs&X-Amz-Signature=6a782a971b3dd0f1f68a3630a557623d4dec4fb75f490cc6055f13126013190b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYUHLBHX%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T070243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCID3hAYNcTbsWd48P0pKwgRY80ixlHRT4u85Re%2FqFw%2BNtAiEAn0pEjdQnrQvFxL1goFBlyCiF7QriHEBCn588I2yeyuAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDAOuKI1HHpawbaEW1ircA7Jp7nOAYAJ4lrhnTXU02G7hbwerddUF8wcw1TviRdS0Y643rC1KWkrOhmG5O1bsIv%2FEfxmVLHuRAtSd53KFvoWeVf%2F1rp9DRdrHrPBjbxe5tjPMojb5GeI0M9A84eWLEtW9g5IKMQjjkMRDJ%2BjHDvr1J%2Bo5w%2BbFVI1%2FvxGUD1PaiscLDbeJrkgl%2FoGwOHH0RXNscEZB5vo7bcuU4C8O%2B7kjgbHKa%2FHJVL5MGLTMfcNfVRzyFjeiCGt%2B6vSJzpKdrky%2FkruV3a%2FFSi%2F3YtrEGz3%2B72cH44BDDSqwzwidF2ZAtEGU4XrpqUiAfB09S513zgr7ib19qnl59trhqIABi8n5sdtO62VheOi1PNtB0hMp4XQGpi4TM2jnTxdQU6gxl5PL%2BmyK0bPXl3KVX4fdZkP22ycma0sc2J0L9giTC2VxbrodO1%2F1ZN4O7hjx7b4V0NVdl4gmbv7g284ioL0UKUCrldZ2nlEscUcCzUYydW9bEwdmBGAWXj1vbVzEfnaAUiN7rpp5DkyJc%2Bu1lfgLMnzs9FNAenChcyRxBz7eCQofV%2Fot5vj7QQpaDge%2BD2mWybFcc9MPEXx%2FTq1LCMo9%2B1Yb%2Fi4bymDPb9i6TpmxA9KUhn6QWUPKzc9puvbeMNTowL0GOqUBeB1ZuBp%2Bk%2BFN4LIKaCz80hNSwGP%2FpIhRvslrkUGyQ4%2Bhw1UQu7X8b1BgWotwvEcnf91zHow%2FpaLIcwkB9qG314uWQe14ZyKjb5JrBw6C5XEZcuc0hDrwSSDtH72ews7NIwgb4IgAkeg6GbVicP38RIhYmHWSWn1l0jX82pkCwG0qIDQ5xC70ZdgM23HgeLfg24W77R8j99zi9DdNjrJuKd5YiT%2Bs&X-Amz-Signature=74c6e776e996500129e5f5924e73f15fb770ad8577ee27fe85790469f36e8ee1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYUHLBHX%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T070243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCID3hAYNcTbsWd48P0pKwgRY80ixlHRT4u85Re%2FqFw%2BNtAiEAn0pEjdQnrQvFxL1goFBlyCiF7QriHEBCn588I2yeyuAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDAOuKI1HHpawbaEW1ircA7Jp7nOAYAJ4lrhnTXU02G7hbwerddUF8wcw1TviRdS0Y643rC1KWkrOhmG5O1bsIv%2FEfxmVLHuRAtSd53KFvoWeVf%2F1rp9DRdrHrPBjbxe5tjPMojb5GeI0M9A84eWLEtW9g5IKMQjjkMRDJ%2BjHDvr1J%2Bo5w%2BbFVI1%2FvxGUD1PaiscLDbeJrkgl%2FoGwOHH0RXNscEZB5vo7bcuU4C8O%2B7kjgbHKa%2FHJVL5MGLTMfcNfVRzyFjeiCGt%2B6vSJzpKdrky%2FkruV3a%2FFSi%2F3YtrEGz3%2B72cH44BDDSqwzwidF2ZAtEGU4XrpqUiAfB09S513zgr7ib19qnl59trhqIABi8n5sdtO62VheOi1PNtB0hMp4XQGpi4TM2jnTxdQU6gxl5PL%2BmyK0bPXl3KVX4fdZkP22ycma0sc2J0L9giTC2VxbrodO1%2F1ZN4O7hjx7b4V0NVdl4gmbv7g284ioL0UKUCrldZ2nlEscUcCzUYydW9bEwdmBGAWXj1vbVzEfnaAUiN7rpp5DkyJc%2Bu1lfgLMnzs9FNAenChcyRxBz7eCQofV%2Fot5vj7QQpaDge%2BD2mWybFcc9MPEXx%2FTq1LCMo9%2B1Yb%2Fi4bymDPb9i6TpmxA9KUhn6QWUPKzc9puvbeMNTowL0GOqUBeB1ZuBp%2Bk%2BFN4LIKaCz80hNSwGP%2FpIhRvslrkUGyQ4%2Bhw1UQu7X8b1BgWotwvEcnf91zHow%2FpaLIcwkB9qG314uWQe14ZyKjb5JrBw6C5XEZcuc0hDrwSSDtH72ews7NIwgb4IgAkeg6GbVicP38RIhYmHWSWn1l0jX82pkCwG0qIDQ5xC70ZdgM23HgeLfg24W77R8j99zi9DdNjrJuKd5YiT%2Bs&X-Amz-Signature=237ccf16423abb94b87566f21c72a3c3eaabd719d00b285e85b514c827a3d8bf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYUHLBHX%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T070243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCID3hAYNcTbsWd48P0pKwgRY80ixlHRT4u85Re%2FqFw%2BNtAiEAn0pEjdQnrQvFxL1goFBlyCiF7QriHEBCn588I2yeyuAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDAOuKI1HHpawbaEW1ircA7Jp7nOAYAJ4lrhnTXU02G7hbwerddUF8wcw1TviRdS0Y643rC1KWkrOhmG5O1bsIv%2FEfxmVLHuRAtSd53KFvoWeVf%2F1rp9DRdrHrPBjbxe5tjPMojb5GeI0M9A84eWLEtW9g5IKMQjjkMRDJ%2BjHDvr1J%2Bo5w%2BbFVI1%2FvxGUD1PaiscLDbeJrkgl%2FoGwOHH0RXNscEZB5vo7bcuU4C8O%2B7kjgbHKa%2FHJVL5MGLTMfcNfVRzyFjeiCGt%2B6vSJzpKdrky%2FkruV3a%2FFSi%2F3YtrEGz3%2B72cH44BDDSqwzwidF2ZAtEGU4XrpqUiAfB09S513zgr7ib19qnl59trhqIABi8n5sdtO62VheOi1PNtB0hMp4XQGpi4TM2jnTxdQU6gxl5PL%2BmyK0bPXl3KVX4fdZkP22ycma0sc2J0L9giTC2VxbrodO1%2F1ZN4O7hjx7b4V0NVdl4gmbv7g284ioL0UKUCrldZ2nlEscUcCzUYydW9bEwdmBGAWXj1vbVzEfnaAUiN7rpp5DkyJc%2Bu1lfgLMnzs9FNAenChcyRxBz7eCQofV%2Fot5vj7QQpaDge%2BD2mWybFcc9MPEXx%2FTq1LCMo9%2B1Yb%2Fi4bymDPb9i6TpmxA9KUhn6QWUPKzc9puvbeMNTowL0GOqUBeB1ZuBp%2Bk%2BFN4LIKaCz80hNSwGP%2FpIhRvslrkUGyQ4%2Bhw1UQu7X8b1BgWotwvEcnf91zHow%2FpaLIcwkB9qG314uWQe14ZyKjb5JrBw6C5XEZcuc0hDrwSSDtH72ews7NIwgb4IgAkeg6GbVicP38RIhYmHWSWn1l0jX82pkCwG0qIDQ5xC70ZdgM23HgeLfg24W77R8j99zi9DdNjrJuKd5YiT%2Bs&X-Amz-Signature=e9015bab61ff2801de3f44a00fb3d13a5d18f414ba893be744adfc1ea9e4c59e&X-Amz-SignedHeaders=host&x-id=GetObject)
