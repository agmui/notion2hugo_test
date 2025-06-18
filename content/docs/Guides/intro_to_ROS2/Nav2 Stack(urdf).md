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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5GYBXSP%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T210818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXOMrOPurDeEnmU1Mr6w94yInmUOAGHZ7ZBK%2FenAFPOAIgLy4eWk5KOCXXf44%2FKAw3AIAlzVqeP%2BpB4JRBX61XLxMqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE2w8FlprHi1E2mSnCrcA6yXm5V84IsgdSBLrdmRjkoLYEp21ZSAvJPpiayaxB7eeRmM23A04gJH6hOi4c7Bi%2Bgx9OGorGp33AQK7quOp1G4ND5RDsZGrAbR8kRrFfWJrcSQhYIL28hC15y0fDC%2FrvLWutDACg9wSFd8ceOPQ8Nca7Bmj5ThaVkb8U1WFA5n0u9CAhihCiU0lPZEJb9qCJDsnPpVwxCXGe%2BbelR%2FicF8kka%2FLU0dQ6yKqSqRgqY4twf6SBUlPF4gbLpH9o2lFJ%2B6JTkNqG%2BorMbsWqN%2FNBCbGXPSdYonz%2Fle8fbbXGAAT8LHKZI55JezsA5GRkVk20sNKNExNbcuNl4TVAL1pNAPqjqRCJd74YFjXig%2FlXwlRE%2BinZAbwKJwpBRAB1zrkaBnh%2Bn52ODcNcA1VUWfsX4ul7zxLJExcfXewvjHtTWt1TV4UCJXs8Pa7yg%2FFS4wfGhxsRfzUpYwPdPOM8OG0%2BVvQhuHXacLt%2F6WhPTCKM3qr3u3kC0%2F8Htwr2hpzQw7aNjvxz30mLyy0PjNMvZTil5U%2FguG0K9rJ%2BrnnAODGJhQEWoOA9Y%2BHcegJn9oVH7ybgnPfLjnPLjGvtmqVGWh09vlz2Sj8%2FT%2BMKssLco8rwEM2IanWaLIibLiZ3%2BGMMP7y8IGOqUBnPOirxLUFkdN3RNB%2Fnfw7uD%2B4%2FWzra60QdZ2zhcr9w0oO5ahWnhBx1SEnhbN50mk5%2Byz5t5DeyBTDICtKRUIctoAu2hHNweQGMzDUj0MsWGur%2FTpdRv9u0RKaXxYJkRjotZMQHB5CLKtQUUm77bPK5a%2Fmeus8pIfSlirugWznPi8O%2FODKMNYF8efQHcEHBQs7asovZlU%2ByZDJXOR8d%2BMJOFNLWVR&X-Amz-Signature=6f4f91d39f7d51cc18124f277ab127aea3d598ddb2fe38ae77bea8c7e2872b90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5GYBXSP%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T210818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXOMrOPurDeEnmU1Mr6w94yInmUOAGHZ7ZBK%2FenAFPOAIgLy4eWk5KOCXXf44%2FKAw3AIAlzVqeP%2BpB4JRBX61XLxMqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE2w8FlprHi1E2mSnCrcA6yXm5V84IsgdSBLrdmRjkoLYEp21ZSAvJPpiayaxB7eeRmM23A04gJH6hOi4c7Bi%2Bgx9OGorGp33AQK7quOp1G4ND5RDsZGrAbR8kRrFfWJrcSQhYIL28hC15y0fDC%2FrvLWutDACg9wSFd8ceOPQ8Nca7Bmj5ThaVkb8U1WFA5n0u9CAhihCiU0lPZEJb9qCJDsnPpVwxCXGe%2BbelR%2FicF8kka%2FLU0dQ6yKqSqRgqY4twf6SBUlPF4gbLpH9o2lFJ%2B6JTkNqG%2BorMbsWqN%2FNBCbGXPSdYonz%2Fle8fbbXGAAT8LHKZI55JezsA5GRkVk20sNKNExNbcuNl4TVAL1pNAPqjqRCJd74YFjXig%2FlXwlRE%2BinZAbwKJwpBRAB1zrkaBnh%2Bn52ODcNcA1VUWfsX4ul7zxLJExcfXewvjHtTWt1TV4UCJXs8Pa7yg%2FFS4wfGhxsRfzUpYwPdPOM8OG0%2BVvQhuHXacLt%2F6WhPTCKM3qr3u3kC0%2F8Htwr2hpzQw7aNjvxz30mLyy0PjNMvZTil5U%2FguG0K9rJ%2BrnnAODGJhQEWoOA9Y%2BHcegJn9oVH7ybgnPfLjnPLjGvtmqVGWh09vlz2Sj8%2FT%2BMKssLco8rwEM2IanWaLIibLiZ3%2BGMMP7y8IGOqUBnPOirxLUFkdN3RNB%2Fnfw7uD%2B4%2FWzra60QdZ2zhcr9w0oO5ahWnhBx1SEnhbN50mk5%2Byz5t5DeyBTDICtKRUIctoAu2hHNweQGMzDUj0MsWGur%2FTpdRv9u0RKaXxYJkRjotZMQHB5CLKtQUUm77bPK5a%2Fmeus8pIfSlirugWznPi8O%2FODKMNYF8efQHcEHBQs7asovZlU%2ByZDJXOR8d%2BMJOFNLWVR&X-Amz-Signature=4b4c800034c3dc48b0dfde7979266447bf77eb4188f090c2bf99c11de7c31543&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5GYBXSP%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T210818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXOMrOPurDeEnmU1Mr6w94yInmUOAGHZ7ZBK%2FenAFPOAIgLy4eWk5KOCXXf44%2FKAw3AIAlzVqeP%2BpB4JRBX61XLxMqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE2w8FlprHi1E2mSnCrcA6yXm5V84IsgdSBLrdmRjkoLYEp21ZSAvJPpiayaxB7eeRmM23A04gJH6hOi4c7Bi%2Bgx9OGorGp33AQK7quOp1G4ND5RDsZGrAbR8kRrFfWJrcSQhYIL28hC15y0fDC%2FrvLWutDACg9wSFd8ceOPQ8Nca7Bmj5ThaVkb8U1WFA5n0u9CAhihCiU0lPZEJb9qCJDsnPpVwxCXGe%2BbelR%2FicF8kka%2FLU0dQ6yKqSqRgqY4twf6SBUlPF4gbLpH9o2lFJ%2B6JTkNqG%2BorMbsWqN%2FNBCbGXPSdYonz%2Fle8fbbXGAAT8LHKZI55JezsA5GRkVk20sNKNExNbcuNl4TVAL1pNAPqjqRCJd74YFjXig%2FlXwlRE%2BinZAbwKJwpBRAB1zrkaBnh%2Bn52ODcNcA1VUWfsX4ul7zxLJExcfXewvjHtTWt1TV4UCJXs8Pa7yg%2FFS4wfGhxsRfzUpYwPdPOM8OG0%2BVvQhuHXacLt%2F6WhPTCKM3qr3u3kC0%2F8Htwr2hpzQw7aNjvxz30mLyy0PjNMvZTil5U%2FguG0K9rJ%2BrnnAODGJhQEWoOA9Y%2BHcegJn9oVH7ybgnPfLjnPLjGvtmqVGWh09vlz2Sj8%2FT%2BMKssLco8rwEM2IanWaLIibLiZ3%2BGMMP7y8IGOqUBnPOirxLUFkdN3RNB%2Fnfw7uD%2B4%2FWzra60QdZ2zhcr9w0oO5ahWnhBx1SEnhbN50mk5%2Byz5t5DeyBTDICtKRUIctoAu2hHNweQGMzDUj0MsWGur%2FTpdRv9u0RKaXxYJkRjotZMQHB5CLKtQUUm77bPK5a%2Fmeus8pIfSlirugWznPi8O%2FODKMNYF8efQHcEHBQs7asovZlU%2ByZDJXOR8d%2BMJOFNLWVR&X-Amz-Signature=e12228a59c869ce27aff290ceb5446dbe76ed2c25decbf1a781475b87a064707&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5GYBXSP%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T210818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXOMrOPurDeEnmU1Mr6w94yInmUOAGHZ7ZBK%2FenAFPOAIgLy4eWk5KOCXXf44%2FKAw3AIAlzVqeP%2BpB4JRBX61XLxMqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE2w8FlprHi1E2mSnCrcA6yXm5V84IsgdSBLrdmRjkoLYEp21ZSAvJPpiayaxB7eeRmM23A04gJH6hOi4c7Bi%2Bgx9OGorGp33AQK7quOp1G4ND5RDsZGrAbR8kRrFfWJrcSQhYIL28hC15y0fDC%2FrvLWutDACg9wSFd8ceOPQ8Nca7Bmj5ThaVkb8U1WFA5n0u9CAhihCiU0lPZEJb9qCJDsnPpVwxCXGe%2BbelR%2FicF8kka%2FLU0dQ6yKqSqRgqY4twf6SBUlPF4gbLpH9o2lFJ%2B6JTkNqG%2BorMbsWqN%2FNBCbGXPSdYonz%2Fle8fbbXGAAT8LHKZI55JezsA5GRkVk20sNKNExNbcuNl4TVAL1pNAPqjqRCJd74YFjXig%2FlXwlRE%2BinZAbwKJwpBRAB1zrkaBnh%2Bn52ODcNcA1VUWfsX4ul7zxLJExcfXewvjHtTWt1TV4UCJXs8Pa7yg%2FFS4wfGhxsRfzUpYwPdPOM8OG0%2BVvQhuHXacLt%2F6WhPTCKM3qr3u3kC0%2F8Htwr2hpzQw7aNjvxz30mLyy0PjNMvZTil5U%2FguG0K9rJ%2BrnnAODGJhQEWoOA9Y%2BHcegJn9oVH7ybgnPfLjnPLjGvtmqVGWh09vlz2Sj8%2FT%2BMKssLco8rwEM2IanWaLIibLiZ3%2BGMMP7y8IGOqUBnPOirxLUFkdN3RNB%2Fnfw7uD%2B4%2FWzra60QdZ2zhcr9w0oO5ahWnhBx1SEnhbN50mk5%2Byz5t5DeyBTDICtKRUIctoAu2hHNweQGMzDUj0MsWGur%2FTpdRv9u0RKaXxYJkRjotZMQHB5CLKtQUUm77bPK5a%2Fmeus8pIfSlirugWznPi8O%2FODKMNYF8efQHcEHBQs7asovZlU%2ByZDJXOR8d%2BMJOFNLWVR&X-Amz-Signature=8aed318079380d9063f17c64e8d74ec559addf7eddee6faa223e51f38a3c5285&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5GYBXSP%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T210818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXOMrOPurDeEnmU1Mr6w94yInmUOAGHZ7ZBK%2FenAFPOAIgLy4eWk5KOCXXf44%2FKAw3AIAlzVqeP%2BpB4JRBX61XLxMqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE2w8FlprHi1E2mSnCrcA6yXm5V84IsgdSBLrdmRjkoLYEp21ZSAvJPpiayaxB7eeRmM23A04gJH6hOi4c7Bi%2Bgx9OGorGp33AQK7quOp1G4ND5RDsZGrAbR8kRrFfWJrcSQhYIL28hC15y0fDC%2FrvLWutDACg9wSFd8ceOPQ8Nca7Bmj5ThaVkb8U1WFA5n0u9CAhihCiU0lPZEJb9qCJDsnPpVwxCXGe%2BbelR%2FicF8kka%2FLU0dQ6yKqSqRgqY4twf6SBUlPF4gbLpH9o2lFJ%2B6JTkNqG%2BorMbsWqN%2FNBCbGXPSdYonz%2Fle8fbbXGAAT8LHKZI55JezsA5GRkVk20sNKNExNbcuNl4TVAL1pNAPqjqRCJd74YFjXig%2FlXwlRE%2BinZAbwKJwpBRAB1zrkaBnh%2Bn52ODcNcA1VUWfsX4ul7zxLJExcfXewvjHtTWt1TV4UCJXs8Pa7yg%2FFS4wfGhxsRfzUpYwPdPOM8OG0%2BVvQhuHXacLt%2F6WhPTCKM3qr3u3kC0%2F8Htwr2hpzQw7aNjvxz30mLyy0PjNMvZTil5U%2FguG0K9rJ%2BrnnAODGJhQEWoOA9Y%2BHcegJn9oVH7ybgnPfLjnPLjGvtmqVGWh09vlz2Sj8%2FT%2BMKssLco8rwEM2IanWaLIibLiZ3%2BGMMP7y8IGOqUBnPOirxLUFkdN3RNB%2Fnfw7uD%2B4%2FWzra60QdZ2zhcr9w0oO5ahWnhBx1SEnhbN50mk5%2Byz5t5DeyBTDICtKRUIctoAu2hHNweQGMzDUj0MsWGur%2FTpdRv9u0RKaXxYJkRjotZMQHB5CLKtQUUm77bPK5a%2Fmeus8pIfSlirugWznPi8O%2FODKMNYF8efQHcEHBQs7asovZlU%2ByZDJXOR8d%2BMJOFNLWVR&X-Amz-Signature=4f49fb7ecfaed09adb72c170d841e1f9d5080ebc3ca5e34fe00169e2fa2de3f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5GYBXSP%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T210818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXOMrOPurDeEnmU1Mr6w94yInmUOAGHZ7ZBK%2FenAFPOAIgLy4eWk5KOCXXf44%2FKAw3AIAlzVqeP%2BpB4JRBX61XLxMqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE2w8FlprHi1E2mSnCrcA6yXm5V84IsgdSBLrdmRjkoLYEp21ZSAvJPpiayaxB7eeRmM23A04gJH6hOi4c7Bi%2Bgx9OGorGp33AQK7quOp1G4ND5RDsZGrAbR8kRrFfWJrcSQhYIL28hC15y0fDC%2FrvLWutDACg9wSFd8ceOPQ8Nca7Bmj5ThaVkb8U1WFA5n0u9CAhihCiU0lPZEJb9qCJDsnPpVwxCXGe%2BbelR%2FicF8kka%2FLU0dQ6yKqSqRgqY4twf6SBUlPF4gbLpH9o2lFJ%2B6JTkNqG%2BorMbsWqN%2FNBCbGXPSdYonz%2Fle8fbbXGAAT8LHKZI55JezsA5GRkVk20sNKNExNbcuNl4TVAL1pNAPqjqRCJd74YFjXig%2FlXwlRE%2BinZAbwKJwpBRAB1zrkaBnh%2Bn52ODcNcA1VUWfsX4ul7zxLJExcfXewvjHtTWt1TV4UCJXs8Pa7yg%2FFS4wfGhxsRfzUpYwPdPOM8OG0%2BVvQhuHXacLt%2F6WhPTCKM3qr3u3kC0%2F8Htwr2hpzQw7aNjvxz30mLyy0PjNMvZTil5U%2FguG0K9rJ%2BrnnAODGJhQEWoOA9Y%2BHcegJn9oVH7ybgnPfLjnPLjGvtmqVGWh09vlz2Sj8%2FT%2BMKssLco8rwEM2IanWaLIibLiZ3%2BGMMP7y8IGOqUBnPOirxLUFkdN3RNB%2Fnfw7uD%2B4%2FWzra60QdZ2zhcr9w0oO5ahWnhBx1SEnhbN50mk5%2Byz5t5DeyBTDICtKRUIctoAu2hHNweQGMzDUj0MsWGur%2FTpdRv9u0RKaXxYJkRjotZMQHB5CLKtQUUm77bPK5a%2Fmeus8pIfSlirugWznPi8O%2FODKMNYF8efQHcEHBQs7asovZlU%2ByZDJXOR8d%2BMJOFNLWVR&X-Amz-Signature=e7143d78858ad3861560618a53e9118cbb3a5de2ace7e9a77e59469154d56424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
