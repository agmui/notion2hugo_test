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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGSZVKF3%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T190250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIBKRj4QFmIGFnA6%2BXuQxI8ArvLPnIMU3GXulLTx5CJJZAiEAv88hpbPeYDsvmg34A8lXkCn6nctRMpboiMSZVUcYdOUq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDBEqWZGf0x3O1SP5yircA%2BumwJnrykebpLqbmH%2Bw6uGifU4B3MfYbZMqpBZHx48IvnrzcImg2W8icyG7EZSqBkOgdeMfgKvDldBY33d%2B%2BdGztSk%2B75qtehKbGKgkV4qiwHFnTNuDHxeGfQNDuDOFEMR4dXTrtwR%2FmQWiMHuvgwAGPRDoOSx%2FSi1fEdVXIvwJjWRylpJh5Wkm7f5DEIkDYGmPVYXC%2BUFWpmla5rGmw9gz0U1%2B7azCdvAlv5alejzlCoeM5907gEV%2FDNo%2F88NdAgTM4ySvzTolXKS3yGSEY4fKjzqta%2BEZeomAzV49ILaatnFFCdwxkqg2BhoqmI6CeJjo3TB5um0yMmchxWhZzLB7VhTDxx4HcNg1E0RcQjuvfyEQxs%2FU1S9SzDacTK%2FuAk8%2BwvG3NiBeFMyTQYwNThzGd8AvIAx6E4dOXTjmI%2BBvzBXQTQhoLw2zEaIgrx8K4gtUHhPONaIGd9ROtuOS%2B1KE57lht22JGIG5zPtjSAgcEZXWJM78tZ7MJ%2FbMzBAzoAIEkcuBmhuWe42iLcOogmTKO3OyoQzSKoF891d2FTDnS%2FiwLNeS26FgzeFSCrnW7hFxmsQA%2BKYkz0LBiWBd%2FQ1W5NFw7Qso5JyLkz5x7EX%2BxRtmEVzKtcrVhO8OMN3rqsMGOqUBsv1NcwAWF8mXJtiqYftFNwo3bEsYDEXLx8U3tFIqta0uYZk%2BodgJlM%2BfwRvjHGara1%2BEKeyIEaVzTpQLSawVo97WqpAxh8F1QGSgMjg7awh6YE7d7IJwVfPVhhoXb6SbNEnrD3NZYBbuLk7n%2FH1HwIDN2RxrnOLX0CDR0UX3CofLa4nhQWXthtVhBiQZj0Tv%2BuigGMAb%2Bv7L55gLAbZgdbBXe3EG&X-Amz-Signature=7ccc81ab6f8d065f90bd03f1e9c6c437f658f40f5988335fa9a82ff61ea2436e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGSZVKF3%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T190250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIBKRj4QFmIGFnA6%2BXuQxI8ArvLPnIMU3GXulLTx5CJJZAiEAv88hpbPeYDsvmg34A8lXkCn6nctRMpboiMSZVUcYdOUq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDBEqWZGf0x3O1SP5yircA%2BumwJnrykebpLqbmH%2Bw6uGifU4B3MfYbZMqpBZHx48IvnrzcImg2W8icyG7EZSqBkOgdeMfgKvDldBY33d%2B%2BdGztSk%2B75qtehKbGKgkV4qiwHFnTNuDHxeGfQNDuDOFEMR4dXTrtwR%2FmQWiMHuvgwAGPRDoOSx%2FSi1fEdVXIvwJjWRylpJh5Wkm7f5DEIkDYGmPVYXC%2BUFWpmla5rGmw9gz0U1%2B7azCdvAlv5alejzlCoeM5907gEV%2FDNo%2F88NdAgTM4ySvzTolXKS3yGSEY4fKjzqta%2BEZeomAzV49ILaatnFFCdwxkqg2BhoqmI6CeJjo3TB5um0yMmchxWhZzLB7VhTDxx4HcNg1E0RcQjuvfyEQxs%2FU1S9SzDacTK%2FuAk8%2BwvG3NiBeFMyTQYwNThzGd8AvIAx6E4dOXTjmI%2BBvzBXQTQhoLw2zEaIgrx8K4gtUHhPONaIGd9ROtuOS%2B1KE57lht22JGIG5zPtjSAgcEZXWJM78tZ7MJ%2FbMzBAzoAIEkcuBmhuWe42iLcOogmTKO3OyoQzSKoF891d2FTDnS%2FiwLNeS26FgzeFSCrnW7hFxmsQA%2BKYkz0LBiWBd%2FQ1W5NFw7Qso5JyLkz5x7EX%2BxRtmEVzKtcrVhO8OMN3rqsMGOqUBsv1NcwAWF8mXJtiqYftFNwo3bEsYDEXLx8U3tFIqta0uYZk%2BodgJlM%2BfwRvjHGara1%2BEKeyIEaVzTpQLSawVo97WqpAxh8F1QGSgMjg7awh6YE7d7IJwVfPVhhoXb6SbNEnrD3NZYBbuLk7n%2FH1HwIDN2RxrnOLX0CDR0UX3CofLa4nhQWXthtVhBiQZj0Tv%2BuigGMAb%2Bv7L55gLAbZgdbBXe3EG&X-Amz-Signature=239925e0f6c3d04841dfcc340dbf43af770b9e3e1b8c6cdea9c375b83491798a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGSZVKF3%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T190250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIBKRj4QFmIGFnA6%2BXuQxI8ArvLPnIMU3GXulLTx5CJJZAiEAv88hpbPeYDsvmg34A8lXkCn6nctRMpboiMSZVUcYdOUq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDBEqWZGf0x3O1SP5yircA%2BumwJnrykebpLqbmH%2Bw6uGifU4B3MfYbZMqpBZHx48IvnrzcImg2W8icyG7EZSqBkOgdeMfgKvDldBY33d%2B%2BdGztSk%2B75qtehKbGKgkV4qiwHFnTNuDHxeGfQNDuDOFEMR4dXTrtwR%2FmQWiMHuvgwAGPRDoOSx%2FSi1fEdVXIvwJjWRylpJh5Wkm7f5DEIkDYGmPVYXC%2BUFWpmla5rGmw9gz0U1%2B7azCdvAlv5alejzlCoeM5907gEV%2FDNo%2F88NdAgTM4ySvzTolXKS3yGSEY4fKjzqta%2BEZeomAzV49ILaatnFFCdwxkqg2BhoqmI6CeJjo3TB5um0yMmchxWhZzLB7VhTDxx4HcNg1E0RcQjuvfyEQxs%2FU1S9SzDacTK%2FuAk8%2BwvG3NiBeFMyTQYwNThzGd8AvIAx6E4dOXTjmI%2BBvzBXQTQhoLw2zEaIgrx8K4gtUHhPONaIGd9ROtuOS%2B1KE57lht22JGIG5zPtjSAgcEZXWJM78tZ7MJ%2FbMzBAzoAIEkcuBmhuWe42iLcOogmTKO3OyoQzSKoF891d2FTDnS%2FiwLNeS26FgzeFSCrnW7hFxmsQA%2BKYkz0LBiWBd%2FQ1W5NFw7Qso5JyLkz5x7EX%2BxRtmEVzKtcrVhO8OMN3rqsMGOqUBsv1NcwAWF8mXJtiqYftFNwo3bEsYDEXLx8U3tFIqta0uYZk%2BodgJlM%2BfwRvjHGara1%2BEKeyIEaVzTpQLSawVo97WqpAxh8F1QGSgMjg7awh6YE7d7IJwVfPVhhoXb6SbNEnrD3NZYBbuLk7n%2FH1HwIDN2RxrnOLX0CDR0UX3CofLa4nhQWXthtVhBiQZj0Tv%2BuigGMAb%2Bv7L55gLAbZgdbBXe3EG&X-Amz-Signature=39b98de5418568fc518ec44647740f3333a66547ecc987d57e098a80ae327e14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGSZVKF3%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T190250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIBKRj4QFmIGFnA6%2BXuQxI8ArvLPnIMU3GXulLTx5CJJZAiEAv88hpbPeYDsvmg34A8lXkCn6nctRMpboiMSZVUcYdOUq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDBEqWZGf0x3O1SP5yircA%2BumwJnrykebpLqbmH%2Bw6uGifU4B3MfYbZMqpBZHx48IvnrzcImg2W8icyG7EZSqBkOgdeMfgKvDldBY33d%2B%2BdGztSk%2B75qtehKbGKgkV4qiwHFnTNuDHxeGfQNDuDOFEMR4dXTrtwR%2FmQWiMHuvgwAGPRDoOSx%2FSi1fEdVXIvwJjWRylpJh5Wkm7f5DEIkDYGmPVYXC%2BUFWpmla5rGmw9gz0U1%2B7azCdvAlv5alejzlCoeM5907gEV%2FDNo%2F88NdAgTM4ySvzTolXKS3yGSEY4fKjzqta%2BEZeomAzV49ILaatnFFCdwxkqg2BhoqmI6CeJjo3TB5um0yMmchxWhZzLB7VhTDxx4HcNg1E0RcQjuvfyEQxs%2FU1S9SzDacTK%2FuAk8%2BwvG3NiBeFMyTQYwNThzGd8AvIAx6E4dOXTjmI%2BBvzBXQTQhoLw2zEaIgrx8K4gtUHhPONaIGd9ROtuOS%2B1KE57lht22JGIG5zPtjSAgcEZXWJM78tZ7MJ%2FbMzBAzoAIEkcuBmhuWe42iLcOogmTKO3OyoQzSKoF891d2FTDnS%2FiwLNeS26FgzeFSCrnW7hFxmsQA%2BKYkz0LBiWBd%2FQ1W5NFw7Qso5JyLkz5x7EX%2BxRtmEVzKtcrVhO8OMN3rqsMGOqUBsv1NcwAWF8mXJtiqYftFNwo3bEsYDEXLx8U3tFIqta0uYZk%2BodgJlM%2BfwRvjHGara1%2BEKeyIEaVzTpQLSawVo97WqpAxh8F1QGSgMjg7awh6YE7d7IJwVfPVhhoXb6SbNEnrD3NZYBbuLk7n%2FH1HwIDN2RxrnOLX0CDR0UX3CofLa4nhQWXthtVhBiQZj0Tv%2BuigGMAb%2Bv7L55gLAbZgdbBXe3EG&X-Amz-Signature=2774943afca68a827a76636f342aa749634313a0c260ec1e4ec32cf8d1182e58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGSZVKF3%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T190250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIBKRj4QFmIGFnA6%2BXuQxI8ArvLPnIMU3GXulLTx5CJJZAiEAv88hpbPeYDsvmg34A8lXkCn6nctRMpboiMSZVUcYdOUq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDBEqWZGf0x3O1SP5yircA%2BumwJnrykebpLqbmH%2Bw6uGifU4B3MfYbZMqpBZHx48IvnrzcImg2W8icyG7EZSqBkOgdeMfgKvDldBY33d%2B%2BdGztSk%2B75qtehKbGKgkV4qiwHFnTNuDHxeGfQNDuDOFEMR4dXTrtwR%2FmQWiMHuvgwAGPRDoOSx%2FSi1fEdVXIvwJjWRylpJh5Wkm7f5DEIkDYGmPVYXC%2BUFWpmla5rGmw9gz0U1%2B7azCdvAlv5alejzlCoeM5907gEV%2FDNo%2F88NdAgTM4ySvzTolXKS3yGSEY4fKjzqta%2BEZeomAzV49ILaatnFFCdwxkqg2BhoqmI6CeJjo3TB5um0yMmchxWhZzLB7VhTDxx4HcNg1E0RcQjuvfyEQxs%2FU1S9SzDacTK%2FuAk8%2BwvG3NiBeFMyTQYwNThzGd8AvIAx6E4dOXTjmI%2BBvzBXQTQhoLw2zEaIgrx8K4gtUHhPONaIGd9ROtuOS%2B1KE57lht22JGIG5zPtjSAgcEZXWJM78tZ7MJ%2FbMzBAzoAIEkcuBmhuWe42iLcOogmTKO3OyoQzSKoF891d2FTDnS%2FiwLNeS26FgzeFSCrnW7hFxmsQA%2BKYkz0LBiWBd%2FQ1W5NFw7Qso5JyLkz5x7EX%2BxRtmEVzKtcrVhO8OMN3rqsMGOqUBsv1NcwAWF8mXJtiqYftFNwo3bEsYDEXLx8U3tFIqta0uYZk%2BodgJlM%2BfwRvjHGara1%2BEKeyIEaVzTpQLSawVo97WqpAxh8F1QGSgMjg7awh6YE7d7IJwVfPVhhoXb6SbNEnrD3NZYBbuLk7n%2FH1HwIDN2RxrnOLX0CDR0UX3CofLa4nhQWXthtVhBiQZj0Tv%2BuigGMAb%2Bv7L55gLAbZgdbBXe3EG&X-Amz-Signature=f79891b3a732425c018492b91e7002e46500a6f5cba7f09c13e26a964601ddf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGSZVKF3%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T190250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIBKRj4QFmIGFnA6%2BXuQxI8ArvLPnIMU3GXulLTx5CJJZAiEAv88hpbPeYDsvmg34A8lXkCn6nctRMpboiMSZVUcYdOUq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDBEqWZGf0x3O1SP5yircA%2BumwJnrykebpLqbmH%2Bw6uGifU4B3MfYbZMqpBZHx48IvnrzcImg2W8icyG7EZSqBkOgdeMfgKvDldBY33d%2B%2BdGztSk%2B75qtehKbGKgkV4qiwHFnTNuDHxeGfQNDuDOFEMR4dXTrtwR%2FmQWiMHuvgwAGPRDoOSx%2FSi1fEdVXIvwJjWRylpJh5Wkm7f5DEIkDYGmPVYXC%2BUFWpmla5rGmw9gz0U1%2B7azCdvAlv5alejzlCoeM5907gEV%2FDNo%2F88NdAgTM4ySvzTolXKS3yGSEY4fKjzqta%2BEZeomAzV49ILaatnFFCdwxkqg2BhoqmI6CeJjo3TB5um0yMmchxWhZzLB7VhTDxx4HcNg1E0RcQjuvfyEQxs%2FU1S9SzDacTK%2FuAk8%2BwvG3NiBeFMyTQYwNThzGd8AvIAx6E4dOXTjmI%2BBvzBXQTQhoLw2zEaIgrx8K4gtUHhPONaIGd9ROtuOS%2B1KE57lht22JGIG5zPtjSAgcEZXWJM78tZ7MJ%2FbMzBAzoAIEkcuBmhuWe42iLcOogmTKO3OyoQzSKoF891d2FTDnS%2FiwLNeS26FgzeFSCrnW7hFxmsQA%2BKYkz0LBiWBd%2FQ1W5NFw7Qso5JyLkz5x7EX%2BxRtmEVzKtcrVhO8OMN3rqsMGOqUBsv1NcwAWF8mXJtiqYftFNwo3bEsYDEXLx8U3tFIqta0uYZk%2BodgJlM%2BfwRvjHGara1%2BEKeyIEaVzTpQLSawVo97WqpAxh8F1QGSgMjg7awh6YE7d7IJwVfPVhhoXb6SbNEnrD3NZYBbuLk7n%2FH1HwIDN2RxrnOLX0CDR0UX3CofLa4nhQWXthtVhBiQZj0Tv%2BuigGMAb%2Bv7L55gLAbZgdbBXe3EG&X-Amz-Signature=6c907d0b99a728798f97d545adeb66de253fabbe09270559ab0c864a23f59982&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
