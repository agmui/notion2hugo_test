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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4QL2354%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T161107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIE3QeJE1a0Fq7NGF6fiEgxZm6bREFRKlAsI5XhulYWkCAiEAxiSke1L0p1%2FnuQGoU0gojxQeh50AjOu5VnT9YN3AxvEq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDPzZ%2BcvXXmDu8AoGGircA%2B73h34u8FUhiBe2BNoVgy%2Fydjl0fp2v%2Fd8CyaRpBEDsedRNpSvWMcnpoyaovsK8S69VGXdchpf%2FDFE%2FkEAC%2BTk5oYj6%2FV299cG9zFYXN665rWn1jyaV%2F3G8Ak2tc4eP9LrQMBPXOH7whJUMO6bbtslxCGW5gbGyLBt5vpl0s5szEFNlvwtEHbbPclr6ioPKhVOIxzyipWVdqegdUKtoLn5GYSRhHDZp87SqhUv8uMiTzxns20BJciad3ZpZ2wlX%2BLCg7nC2feCf2ugy0H5jgJIJpsqnsHmJvVessCr%2F2vCEW%2B9U4J1MvLrxTl7bdWlFXizCoV9UyP3WfwzkPfY%2BEIwAoZCBexGszQNEiESaIeq57Z0Aa6oLHQTmm3hflOjoGxSJJfrk0R9az5%2ByTgvHuP2vYee%2Fe1zedji0ubdQ5iJ5mAqOQn8zj0pR%2BD8AYShYD9vDqlWb%2BV0oTN8PFzhDdtAJG37%2B092Ls0Gul4sNdMZqbmvWbYeHxbPt73MAk9gCFfCvA28nhUqHS705qyqX20KORiMjWy5ZHO8KH8wjuDwXvJVXYzvv3rsmwPFhBIh3S5iRaqH2y%2BzrzMQjhf27OUul6WuNvf6WmX6SrKL37D2OTON9EKvQeiLR1pmrMNqP68IGOqUBTjAYWBCngNYuwCebyvitPL%2BeFUoMzk9G4SuIiR2ob%2BofPgUMyZOZZ7MjMBVr2aX1YnVFUtc%2BVqXK6OvK15WzUQfVS13997g8k78omRsf69Xte3mz3y%2BUVpXLu7LXLV7rEmv59%2Bi8wP3bGpLu9ENj9AM3zY85O4Ila7c9R1ybxAko%2BHTZPoqPguvkwAtePtUK4abbKws%2BYEsYccvEmdUgoH3DSd7k&X-Amz-Signature=b05f9fadc73a45ed80f713b10b302eb294d71876bd3e4ebdd1dbdaf445140120&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4QL2354%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T161107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIE3QeJE1a0Fq7NGF6fiEgxZm6bREFRKlAsI5XhulYWkCAiEAxiSke1L0p1%2FnuQGoU0gojxQeh50AjOu5VnT9YN3AxvEq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDPzZ%2BcvXXmDu8AoGGircA%2B73h34u8FUhiBe2BNoVgy%2Fydjl0fp2v%2Fd8CyaRpBEDsedRNpSvWMcnpoyaovsK8S69VGXdchpf%2FDFE%2FkEAC%2BTk5oYj6%2FV299cG9zFYXN665rWn1jyaV%2F3G8Ak2tc4eP9LrQMBPXOH7whJUMO6bbtslxCGW5gbGyLBt5vpl0s5szEFNlvwtEHbbPclr6ioPKhVOIxzyipWVdqegdUKtoLn5GYSRhHDZp87SqhUv8uMiTzxns20BJciad3ZpZ2wlX%2BLCg7nC2feCf2ugy0H5jgJIJpsqnsHmJvVessCr%2F2vCEW%2B9U4J1MvLrxTl7bdWlFXizCoV9UyP3WfwzkPfY%2BEIwAoZCBexGszQNEiESaIeq57Z0Aa6oLHQTmm3hflOjoGxSJJfrk0R9az5%2ByTgvHuP2vYee%2Fe1zedji0ubdQ5iJ5mAqOQn8zj0pR%2BD8AYShYD9vDqlWb%2BV0oTN8PFzhDdtAJG37%2B092Ls0Gul4sNdMZqbmvWbYeHxbPt73MAk9gCFfCvA28nhUqHS705qyqX20KORiMjWy5ZHO8KH8wjuDwXvJVXYzvv3rsmwPFhBIh3S5iRaqH2y%2BzrzMQjhf27OUul6WuNvf6WmX6SrKL37D2OTON9EKvQeiLR1pmrMNqP68IGOqUBTjAYWBCngNYuwCebyvitPL%2BeFUoMzk9G4SuIiR2ob%2BofPgUMyZOZZ7MjMBVr2aX1YnVFUtc%2BVqXK6OvK15WzUQfVS13997g8k78omRsf69Xte3mz3y%2BUVpXLu7LXLV7rEmv59%2Bi8wP3bGpLu9ENj9AM3zY85O4Ila7c9R1ybxAko%2BHTZPoqPguvkwAtePtUK4abbKws%2BYEsYccvEmdUgoH3DSd7k&X-Amz-Signature=1b8b78863e0fd6b11057defcf015b27f53fe8675ca6e15dfedde191b6343ab84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4QL2354%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T161107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIE3QeJE1a0Fq7NGF6fiEgxZm6bREFRKlAsI5XhulYWkCAiEAxiSke1L0p1%2FnuQGoU0gojxQeh50AjOu5VnT9YN3AxvEq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDPzZ%2BcvXXmDu8AoGGircA%2B73h34u8FUhiBe2BNoVgy%2Fydjl0fp2v%2Fd8CyaRpBEDsedRNpSvWMcnpoyaovsK8S69VGXdchpf%2FDFE%2FkEAC%2BTk5oYj6%2FV299cG9zFYXN665rWn1jyaV%2F3G8Ak2tc4eP9LrQMBPXOH7whJUMO6bbtslxCGW5gbGyLBt5vpl0s5szEFNlvwtEHbbPclr6ioPKhVOIxzyipWVdqegdUKtoLn5GYSRhHDZp87SqhUv8uMiTzxns20BJciad3ZpZ2wlX%2BLCg7nC2feCf2ugy0H5jgJIJpsqnsHmJvVessCr%2F2vCEW%2B9U4J1MvLrxTl7bdWlFXizCoV9UyP3WfwzkPfY%2BEIwAoZCBexGszQNEiESaIeq57Z0Aa6oLHQTmm3hflOjoGxSJJfrk0R9az5%2ByTgvHuP2vYee%2Fe1zedji0ubdQ5iJ5mAqOQn8zj0pR%2BD8AYShYD9vDqlWb%2BV0oTN8PFzhDdtAJG37%2B092Ls0Gul4sNdMZqbmvWbYeHxbPt73MAk9gCFfCvA28nhUqHS705qyqX20KORiMjWy5ZHO8KH8wjuDwXvJVXYzvv3rsmwPFhBIh3S5iRaqH2y%2BzrzMQjhf27OUul6WuNvf6WmX6SrKL37D2OTON9EKvQeiLR1pmrMNqP68IGOqUBTjAYWBCngNYuwCebyvitPL%2BeFUoMzk9G4SuIiR2ob%2BofPgUMyZOZZ7MjMBVr2aX1YnVFUtc%2BVqXK6OvK15WzUQfVS13997g8k78omRsf69Xte3mz3y%2BUVpXLu7LXLV7rEmv59%2Bi8wP3bGpLu9ENj9AM3zY85O4Ila7c9R1ybxAko%2BHTZPoqPguvkwAtePtUK4abbKws%2BYEsYccvEmdUgoH3DSd7k&X-Amz-Signature=e53921edc5be876d6fec6c8fbce9b651f32f2d42f68252b9d6fe4dc65ce1012b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4QL2354%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T161107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIE3QeJE1a0Fq7NGF6fiEgxZm6bREFRKlAsI5XhulYWkCAiEAxiSke1L0p1%2FnuQGoU0gojxQeh50AjOu5VnT9YN3AxvEq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDPzZ%2BcvXXmDu8AoGGircA%2B73h34u8FUhiBe2BNoVgy%2Fydjl0fp2v%2Fd8CyaRpBEDsedRNpSvWMcnpoyaovsK8S69VGXdchpf%2FDFE%2FkEAC%2BTk5oYj6%2FV299cG9zFYXN665rWn1jyaV%2F3G8Ak2tc4eP9LrQMBPXOH7whJUMO6bbtslxCGW5gbGyLBt5vpl0s5szEFNlvwtEHbbPclr6ioPKhVOIxzyipWVdqegdUKtoLn5GYSRhHDZp87SqhUv8uMiTzxns20BJciad3ZpZ2wlX%2BLCg7nC2feCf2ugy0H5jgJIJpsqnsHmJvVessCr%2F2vCEW%2B9U4J1MvLrxTl7bdWlFXizCoV9UyP3WfwzkPfY%2BEIwAoZCBexGszQNEiESaIeq57Z0Aa6oLHQTmm3hflOjoGxSJJfrk0R9az5%2ByTgvHuP2vYee%2Fe1zedji0ubdQ5iJ5mAqOQn8zj0pR%2BD8AYShYD9vDqlWb%2BV0oTN8PFzhDdtAJG37%2B092Ls0Gul4sNdMZqbmvWbYeHxbPt73MAk9gCFfCvA28nhUqHS705qyqX20KORiMjWy5ZHO8KH8wjuDwXvJVXYzvv3rsmwPFhBIh3S5iRaqH2y%2BzrzMQjhf27OUul6WuNvf6WmX6SrKL37D2OTON9EKvQeiLR1pmrMNqP68IGOqUBTjAYWBCngNYuwCebyvitPL%2BeFUoMzk9G4SuIiR2ob%2BofPgUMyZOZZ7MjMBVr2aX1YnVFUtc%2BVqXK6OvK15WzUQfVS13997g8k78omRsf69Xte3mz3y%2BUVpXLu7LXLV7rEmv59%2Bi8wP3bGpLu9ENj9AM3zY85O4Ila7c9R1ybxAko%2BHTZPoqPguvkwAtePtUK4abbKws%2BYEsYccvEmdUgoH3DSd7k&X-Amz-Signature=57e7525396b6a7635cf806f14cd9463748f450aa267b66dd71be111c7d48deb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4QL2354%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T161107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIE3QeJE1a0Fq7NGF6fiEgxZm6bREFRKlAsI5XhulYWkCAiEAxiSke1L0p1%2FnuQGoU0gojxQeh50AjOu5VnT9YN3AxvEq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDPzZ%2BcvXXmDu8AoGGircA%2B73h34u8FUhiBe2BNoVgy%2Fydjl0fp2v%2Fd8CyaRpBEDsedRNpSvWMcnpoyaovsK8S69VGXdchpf%2FDFE%2FkEAC%2BTk5oYj6%2FV299cG9zFYXN665rWn1jyaV%2F3G8Ak2tc4eP9LrQMBPXOH7whJUMO6bbtslxCGW5gbGyLBt5vpl0s5szEFNlvwtEHbbPclr6ioPKhVOIxzyipWVdqegdUKtoLn5GYSRhHDZp87SqhUv8uMiTzxns20BJciad3ZpZ2wlX%2BLCg7nC2feCf2ugy0H5jgJIJpsqnsHmJvVessCr%2F2vCEW%2B9U4J1MvLrxTl7bdWlFXizCoV9UyP3WfwzkPfY%2BEIwAoZCBexGszQNEiESaIeq57Z0Aa6oLHQTmm3hflOjoGxSJJfrk0R9az5%2ByTgvHuP2vYee%2Fe1zedji0ubdQ5iJ5mAqOQn8zj0pR%2BD8AYShYD9vDqlWb%2BV0oTN8PFzhDdtAJG37%2B092Ls0Gul4sNdMZqbmvWbYeHxbPt73MAk9gCFfCvA28nhUqHS705qyqX20KORiMjWy5ZHO8KH8wjuDwXvJVXYzvv3rsmwPFhBIh3S5iRaqH2y%2BzrzMQjhf27OUul6WuNvf6WmX6SrKL37D2OTON9EKvQeiLR1pmrMNqP68IGOqUBTjAYWBCngNYuwCebyvitPL%2BeFUoMzk9G4SuIiR2ob%2BofPgUMyZOZZ7MjMBVr2aX1YnVFUtc%2BVqXK6OvK15WzUQfVS13997g8k78omRsf69Xte3mz3y%2BUVpXLu7LXLV7rEmv59%2Bi8wP3bGpLu9ENj9AM3zY85O4Ila7c9R1ybxAko%2BHTZPoqPguvkwAtePtUK4abbKws%2BYEsYccvEmdUgoH3DSd7k&X-Amz-Signature=4544b149ddf5a36bee2e0081966412546866556f3c6563ba3bd396a77a29c7d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4QL2354%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T161107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIE3QeJE1a0Fq7NGF6fiEgxZm6bREFRKlAsI5XhulYWkCAiEAxiSke1L0p1%2FnuQGoU0gojxQeh50AjOu5VnT9YN3AxvEq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDPzZ%2BcvXXmDu8AoGGircA%2B73h34u8FUhiBe2BNoVgy%2Fydjl0fp2v%2Fd8CyaRpBEDsedRNpSvWMcnpoyaovsK8S69VGXdchpf%2FDFE%2FkEAC%2BTk5oYj6%2FV299cG9zFYXN665rWn1jyaV%2F3G8Ak2tc4eP9LrQMBPXOH7whJUMO6bbtslxCGW5gbGyLBt5vpl0s5szEFNlvwtEHbbPclr6ioPKhVOIxzyipWVdqegdUKtoLn5GYSRhHDZp87SqhUv8uMiTzxns20BJciad3ZpZ2wlX%2BLCg7nC2feCf2ugy0H5jgJIJpsqnsHmJvVessCr%2F2vCEW%2B9U4J1MvLrxTl7bdWlFXizCoV9UyP3WfwzkPfY%2BEIwAoZCBexGszQNEiESaIeq57Z0Aa6oLHQTmm3hflOjoGxSJJfrk0R9az5%2ByTgvHuP2vYee%2Fe1zedji0ubdQ5iJ5mAqOQn8zj0pR%2BD8AYShYD9vDqlWb%2BV0oTN8PFzhDdtAJG37%2B092Ls0Gul4sNdMZqbmvWbYeHxbPt73MAk9gCFfCvA28nhUqHS705qyqX20KORiMjWy5ZHO8KH8wjuDwXvJVXYzvv3rsmwPFhBIh3S5iRaqH2y%2BzrzMQjhf27OUul6WuNvf6WmX6SrKL37D2OTON9EKvQeiLR1pmrMNqP68IGOqUBTjAYWBCngNYuwCebyvitPL%2BeFUoMzk9G4SuIiR2ob%2BofPgUMyZOZZ7MjMBVr2aX1YnVFUtc%2BVqXK6OvK15WzUQfVS13997g8k78omRsf69Xte3mz3y%2BUVpXLu7LXLV7rEmv59%2Bi8wP3bGpLu9ENj9AM3zY85O4Ila7c9R1ybxAko%2BHTZPoqPguvkwAtePtUK4abbKws%2BYEsYccvEmdUgoH3DSd7k&X-Amz-Signature=205d7478c5e96524ac5baaeefb40a5bd66fb28e3e08e94679cfbff1e766486f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
