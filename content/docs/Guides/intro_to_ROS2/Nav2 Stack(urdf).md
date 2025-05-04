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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYDPDM7N%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIAZmDcHxpQ6UlWJ%2BRZBXqyMd30o%2FyHYqO1z%2BhoGIar5VAiEArq9d4UTVBpx2Us%2BO3QaQUi%2BNIL%2BSHKq9cGpfUSPkYhoq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDBknWXvFDTeGooh0MyrcAxJKylcHMt%2B3GonfHkyZvYvVTIG7LMrCWii0Uvvq1InXJbMx0jEK7FsLK%2FXELelU4JSrPXeRRjxqqO%2FFDHQb3W1sx99YkVbHDviUm4MYD5Nme%2FI0Z2ZspvuqaAnKBvic59C9CLwUxsvBhoVK0Pg9MkEldVXZkSbhwrdw39TxtzY1rlLVIdFLgBanLDMS0WGpKVJ5o%2FBep3tjJ%2F2dUrCen6ePBLhuwLLDBf0kp9jcngOqD1JwqMm%2F3df%2FwItcWHx1vq1K6V0WmMS%2BT3rHHU508%2F%2FlllPTvW9Vv0gcIdEuq2JCulVUz7fMsS0MjyAC6TLSg3Le1xvPlFDI7VJHsiXAmZbCAr2%2F7WNfHWzond5FvWc1pg%2BvXXMXb9rc7qoD%2BgBbgtmWGk9qgniNUZ3SRBwOPP8GteQUt%2FvbrBU8i%2FaicSZ%2Bsx9XnBh%2B1Ysir%2FwlbRfbGcaUkl5zPWWBu435junhTqx4t9GWnWCdou%2BpcprCAUUzLPNNaVgSWXaW9ElO%2FGWQVEZCkg%2FVMW56n9Tmou1SG%2FJ%2B0jaFCSgT4o9UWqxWeE2266BIlGhzSUSEN1vBkX6DpGYStbW8rLDRFUXDFcJogW4KIJ8XDZMHj5wGQjZTw6cZ6CPTCbPPH7aoE89JMI7d3cAGOqUBT0kEJ3%2FHJpFmrMDg7ErelaBVq9y4wIVglQsd63jvLgTJo6ZtqEqnTLvDqSYEpSuLwpMmU2UNJowRtDxG2w37M8o7K2skrAMQWiVoyHcxet0rzlLeS3rUGnpvymw8NQGgRX%2FTuEEiursqtvFI%2FZqDack%2F5bdDgCzk8VVspg8P%2FhMH%2FwLrGGmbL4BVlSshJaV1cn9DNAz9LJEefzuEXNyWBJjMjVpX&X-Amz-Signature=92dc5a6942a3370b7a9f372ad67d5314a6fbc46845493d1db0580ac0a877304f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYDPDM7N%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIAZmDcHxpQ6UlWJ%2BRZBXqyMd30o%2FyHYqO1z%2BhoGIar5VAiEArq9d4UTVBpx2Us%2BO3QaQUi%2BNIL%2BSHKq9cGpfUSPkYhoq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDBknWXvFDTeGooh0MyrcAxJKylcHMt%2B3GonfHkyZvYvVTIG7LMrCWii0Uvvq1InXJbMx0jEK7FsLK%2FXELelU4JSrPXeRRjxqqO%2FFDHQb3W1sx99YkVbHDviUm4MYD5Nme%2FI0Z2ZspvuqaAnKBvic59C9CLwUxsvBhoVK0Pg9MkEldVXZkSbhwrdw39TxtzY1rlLVIdFLgBanLDMS0WGpKVJ5o%2FBep3tjJ%2F2dUrCen6ePBLhuwLLDBf0kp9jcngOqD1JwqMm%2F3df%2FwItcWHx1vq1K6V0WmMS%2BT3rHHU508%2F%2FlllPTvW9Vv0gcIdEuq2JCulVUz7fMsS0MjyAC6TLSg3Le1xvPlFDI7VJHsiXAmZbCAr2%2F7WNfHWzond5FvWc1pg%2BvXXMXb9rc7qoD%2BgBbgtmWGk9qgniNUZ3SRBwOPP8GteQUt%2FvbrBU8i%2FaicSZ%2Bsx9XnBh%2B1Ysir%2FwlbRfbGcaUkl5zPWWBu435junhTqx4t9GWnWCdou%2BpcprCAUUzLPNNaVgSWXaW9ElO%2FGWQVEZCkg%2FVMW56n9Tmou1SG%2FJ%2B0jaFCSgT4o9UWqxWeE2266BIlGhzSUSEN1vBkX6DpGYStbW8rLDRFUXDFcJogW4KIJ8XDZMHj5wGQjZTw6cZ6CPTCbPPH7aoE89JMI7d3cAGOqUBT0kEJ3%2FHJpFmrMDg7ErelaBVq9y4wIVglQsd63jvLgTJo6ZtqEqnTLvDqSYEpSuLwpMmU2UNJowRtDxG2w37M8o7K2skrAMQWiVoyHcxet0rzlLeS3rUGnpvymw8NQGgRX%2FTuEEiursqtvFI%2FZqDack%2F5bdDgCzk8VVspg8P%2FhMH%2FwLrGGmbL4BVlSshJaV1cn9DNAz9LJEefzuEXNyWBJjMjVpX&X-Amz-Signature=a65d3bebd389a7dc0621fd59464c75429171f84d417d4ab5ef1132f27e6f2ce8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYDPDM7N%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIAZmDcHxpQ6UlWJ%2BRZBXqyMd30o%2FyHYqO1z%2BhoGIar5VAiEArq9d4UTVBpx2Us%2BO3QaQUi%2BNIL%2BSHKq9cGpfUSPkYhoq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDBknWXvFDTeGooh0MyrcAxJKylcHMt%2B3GonfHkyZvYvVTIG7LMrCWii0Uvvq1InXJbMx0jEK7FsLK%2FXELelU4JSrPXeRRjxqqO%2FFDHQb3W1sx99YkVbHDviUm4MYD5Nme%2FI0Z2ZspvuqaAnKBvic59C9CLwUxsvBhoVK0Pg9MkEldVXZkSbhwrdw39TxtzY1rlLVIdFLgBanLDMS0WGpKVJ5o%2FBep3tjJ%2F2dUrCen6ePBLhuwLLDBf0kp9jcngOqD1JwqMm%2F3df%2FwItcWHx1vq1K6V0WmMS%2BT3rHHU508%2F%2FlllPTvW9Vv0gcIdEuq2JCulVUz7fMsS0MjyAC6TLSg3Le1xvPlFDI7VJHsiXAmZbCAr2%2F7WNfHWzond5FvWc1pg%2BvXXMXb9rc7qoD%2BgBbgtmWGk9qgniNUZ3SRBwOPP8GteQUt%2FvbrBU8i%2FaicSZ%2Bsx9XnBh%2B1Ysir%2FwlbRfbGcaUkl5zPWWBu435junhTqx4t9GWnWCdou%2BpcprCAUUzLPNNaVgSWXaW9ElO%2FGWQVEZCkg%2FVMW56n9Tmou1SG%2FJ%2B0jaFCSgT4o9UWqxWeE2266BIlGhzSUSEN1vBkX6DpGYStbW8rLDRFUXDFcJogW4KIJ8XDZMHj5wGQjZTw6cZ6CPTCbPPH7aoE89JMI7d3cAGOqUBT0kEJ3%2FHJpFmrMDg7ErelaBVq9y4wIVglQsd63jvLgTJo6ZtqEqnTLvDqSYEpSuLwpMmU2UNJowRtDxG2w37M8o7K2skrAMQWiVoyHcxet0rzlLeS3rUGnpvymw8NQGgRX%2FTuEEiursqtvFI%2FZqDack%2F5bdDgCzk8VVspg8P%2FhMH%2FwLrGGmbL4BVlSshJaV1cn9DNAz9LJEefzuEXNyWBJjMjVpX&X-Amz-Signature=c90c09e3d647eb40a4f10e77347ec7da538c5b57d3d6dc3700f25c7567c3fefa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYDPDM7N%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIAZmDcHxpQ6UlWJ%2BRZBXqyMd30o%2FyHYqO1z%2BhoGIar5VAiEArq9d4UTVBpx2Us%2BO3QaQUi%2BNIL%2BSHKq9cGpfUSPkYhoq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDBknWXvFDTeGooh0MyrcAxJKylcHMt%2B3GonfHkyZvYvVTIG7LMrCWii0Uvvq1InXJbMx0jEK7FsLK%2FXELelU4JSrPXeRRjxqqO%2FFDHQb3W1sx99YkVbHDviUm4MYD5Nme%2FI0Z2ZspvuqaAnKBvic59C9CLwUxsvBhoVK0Pg9MkEldVXZkSbhwrdw39TxtzY1rlLVIdFLgBanLDMS0WGpKVJ5o%2FBep3tjJ%2F2dUrCen6ePBLhuwLLDBf0kp9jcngOqD1JwqMm%2F3df%2FwItcWHx1vq1K6V0WmMS%2BT3rHHU508%2F%2FlllPTvW9Vv0gcIdEuq2JCulVUz7fMsS0MjyAC6TLSg3Le1xvPlFDI7VJHsiXAmZbCAr2%2F7WNfHWzond5FvWc1pg%2BvXXMXb9rc7qoD%2BgBbgtmWGk9qgniNUZ3SRBwOPP8GteQUt%2FvbrBU8i%2FaicSZ%2Bsx9XnBh%2B1Ysir%2FwlbRfbGcaUkl5zPWWBu435junhTqx4t9GWnWCdou%2BpcprCAUUzLPNNaVgSWXaW9ElO%2FGWQVEZCkg%2FVMW56n9Tmou1SG%2FJ%2B0jaFCSgT4o9UWqxWeE2266BIlGhzSUSEN1vBkX6DpGYStbW8rLDRFUXDFcJogW4KIJ8XDZMHj5wGQjZTw6cZ6CPTCbPPH7aoE89JMI7d3cAGOqUBT0kEJ3%2FHJpFmrMDg7ErelaBVq9y4wIVglQsd63jvLgTJo6ZtqEqnTLvDqSYEpSuLwpMmU2UNJowRtDxG2w37M8o7K2skrAMQWiVoyHcxet0rzlLeS3rUGnpvymw8NQGgRX%2FTuEEiursqtvFI%2FZqDack%2F5bdDgCzk8VVspg8P%2FhMH%2FwLrGGmbL4BVlSshJaV1cn9DNAz9LJEefzuEXNyWBJjMjVpX&X-Amz-Signature=05cf13f0bd7c357ebe649831f5ce5a5f09f0f561bef741de91fb7ee8000f6333&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYDPDM7N%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIAZmDcHxpQ6UlWJ%2BRZBXqyMd30o%2FyHYqO1z%2BhoGIar5VAiEArq9d4UTVBpx2Us%2BO3QaQUi%2BNIL%2BSHKq9cGpfUSPkYhoq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDBknWXvFDTeGooh0MyrcAxJKylcHMt%2B3GonfHkyZvYvVTIG7LMrCWii0Uvvq1InXJbMx0jEK7FsLK%2FXELelU4JSrPXeRRjxqqO%2FFDHQb3W1sx99YkVbHDviUm4MYD5Nme%2FI0Z2ZspvuqaAnKBvic59C9CLwUxsvBhoVK0Pg9MkEldVXZkSbhwrdw39TxtzY1rlLVIdFLgBanLDMS0WGpKVJ5o%2FBep3tjJ%2F2dUrCen6ePBLhuwLLDBf0kp9jcngOqD1JwqMm%2F3df%2FwItcWHx1vq1K6V0WmMS%2BT3rHHU508%2F%2FlllPTvW9Vv0gcIdEuq2JCulVUz7fMsS0MjyAC6TLSg3Le1xvPlFDI7VJHsiXAmZbCAr2%2F7WNfHWzond5FvWc1pg%2BvXXMXb9rc7qoD%2BgBbgtmWGk9qgniNUZ3SRBwOPP8GteQUt%2FvbrBU8i%2FaicSZ%2Bsx9XnBh%2B1Ysir%2FwlbRfbGcaUkl5zPWWBu435junhTqx4t9GWnWCdou%2BpcprCAUUzLPNNaVgSWXaW9ElO%2FGWQVEZCkg%2FVMW56n9Tmou1SG%2FJ%2B0jaFCSgT4o9UWqxWeE2266BIlGhzSUSEN1vBkX6DpGYStbW8rLDRFUXDFcJogW4KIJ8XDZMHj5wGQjZTw6cZ6CPTCbPPH7aoE89JMI7d3cAGOqUBT0kEJ3%2FHJpFmrMDg7ErelaBVq9y4wIVglQsd63jvLgTJo6ZtqEqnTLvDqSYEpSuLwpMmU2UNJowRtDxG2w37M8o7K2skrAMQWiVoyHcxet0rzlLeS3rUGnpvymw8NQGgRX%2FTuEEiursqtvFI%2FZqDack%2F5bdDgCzk8VVspg8P%2FhMH%2FwLrGGmbL4BVlSshJaV1cn9DNAz9LJEefzuEXNyWBJjMjVpX&X-Amz-Signature=22a268b571a5ba558bb7ec11c2c67eca7228f42e4b3cbbac8a8a00f1ede24ffc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYDPDM7N%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T140719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIAZmDcHxpQ6UlWJ%2BRZBXqyMd30o%2FyHYqO1z%2BhoGIar5VAiEArq9d4UTVBpx2Us%2BO3QaQUi%2BNIL%2BSHKq9cGpfUSPkYhoq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDBknWXvFDTeGooh0MyrcAxJKylcHMt%2B3GonfHkyZvYvVTIG7LMrCWii0Uvvq1InXJbMx0jEK7FsLK%2FXELelU4JSrPXeRRjxqqO%2FFDHQb3W1sx99YkVbHDviUm4MYD5Nme%2FI0Z2ZspvuqaAnKBvic59C9CLwUxsvBhoVK0Pg9MkEldVXZkSbhwrdw39TxtzY1rlLVIdFLgBanLDMS0WGpKVJ5o%2FBep3tjJ%2F2dUrCen6ePBLhuwLLDBf0kp9jcngOqD1JwqMm%2F3df%2FwItcWHx1vq1K6V0WmMS%2BT3rHHU508%2F%2FlllPTvW9Vv0gcIdEuq2JCulVUz7fMsS0MjyAC6TLSg3Le1xvPlFDI7VJHsiXAmZbCAr2%2F7WNfHWzond5FvWc1pg%2BvXXMXb9rc7qoD%2BgBbgtmWGk9qgniNUZ3SRBwOPP8GteQUt%2FvbrBU8i%2FaicSZ%2Bsx9XnBh%2B1Ysir%2FwlbRfbGcaUkl5zPWWBu435junhTqx4t9GWnWCdou%2BpcprCAUUzLPNNaVgSWXaW9ElO%2FGWQVEZCkg%2FVMW56n9Tmou1SG%2FJ%2B0jaFCSgT4o9UWqxWeE2266BIlGhzSUSEN1vBkX6DpGYStbW8rLDRFUXDFcJogW4KIJ8XDZMHj5wGQjZTw6cZ6CPTCbPPH7aoE89JMI7d3cAGOqUBT0kEJ3%2FHJpFmrMDg7ErelaBVq9y4wIVglQsd63jvLgTJo6ZtqEqnTLvDqSYEpSuLwpMmU2UNJowRtDxG2w37M8o7K2skrAMQWiVoyHcxet0rzlLeS3rUGnpvymw8NQGgRX%2FTuEEiursqtvFI%2FZqDack%2F5bdDgCzk8VVspg8P%2FhMH%2FwLrGGmbL4BVlSshJaV1cn9DNAz9LJEefzuEXNyWBJjMjVpX&X-Amz-Signature=2cc28b931cc8e2754701585fdfa41479b1e148a7702cc43fc5e09b2732f07970&X-Amz-SignedHeaders=host&x-id=GetObject)
