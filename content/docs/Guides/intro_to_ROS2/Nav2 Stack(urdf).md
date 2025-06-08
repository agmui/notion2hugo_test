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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSICP2NY%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T090802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCM4eVleLJfCmAGx68sOOKSTNuGI84Aaip7WhKP2yrwHgIgPTEBj%2BXFkGRIJhSo%2BoIclLojflPT%2B92q0v2EklgsWgoqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvFkMT1gTwVO8mUQSrcAxGGw8eR%2BtxxU5QOMXG%2Btrp2ltKaI5e98fEUpiSHeQJ56SUcwadeedYpjIavJ%2BACd6AckdUTbpBclO9b52lMXfqrsImeQlXgF68PNyz321lqnWDBUd2AkKbNPBoPp41%2BJphOpbVdrc%2F1p6mKPP2zeh5yLzFoXG%2B1tXj9WDTmPvL7hxNlJLBv0QRM5yjTIYlHzRWnC1NxGyipUrMclTw5I7ZmR8FBIxak6oCB3iSCKCnsNzXPm454ohcLe%2F8nbuURlAebAk0dCe7ZDPi73iBjq9sxVYB9kLVJpROZAWU9F1zie0cS2u7M8KXVkrspIrbXo6dQ2MVSABaZ2sZ1SWGewTBNEuROtzD1OAYwEVQt1Y89tc5G4SXARqFcJc9yiitzUefSHAWYr6akTf96DkJ8qtzFsbcsijxKEuxiHEHa4idjmKBOfVHA97ESch9Edt5jItT18JNBSSDiruoAKg3JZzkMsz%2FzMjQqUkQa3nDZ%2F8Oj8Zf1ssZ%2FJF%2FSbP5ueND8QYmMDlOfvvK0zRjCgqCiNV0fQgJQKlY2nwQykOOapL9S2HwdJPHDgX9y4W0ebAhJNXugUZ4%2Bb3u8CA7QABfathmsO%2BJzdrEpBcxMR5ZWfG%2FH0I8jILPzgZDkX1hcMIvzlMIGOqUB0pZPZ5mEuEIpMSW39YpuKCVgBbCuRUQprqCNirhbRRID6TtvpGRJRkDcqEiQEl5htLD21X4EhOWhDogx2iGJSJQrQk3MAo6WFL%2Bp3eqQwSiIv0Ht6aHh1xgofJKi8EcJfFIEd1faw4ute2ueMkQlr%2BWn4ndl50LhqRI%2Bv2V%2FEegkEBiQW26FoqKLKEKf6Zs%2B7Bkb4VYtJXTBBnK1N5bhUXkRz7P6&X-Amz-Signature=d655e4fa93b480df8761ef8014f0be508855303e3bcf20b99ecff79123b9cec2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSICP2NY%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T090802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCM4eVleLJfCmAGx68sOOKSTNuGI84Aaip7WhKP2yrwHgIgPTEBj%2BXFkGRIJhSo%2BoIclLojflPT%2B92q0v2EklgsWgoqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvFkMT1gTwVO8mUQSrcAxGGw8eR%2BtxxU5QOMXG%2Btrp2ltKaI5e98fEUpiSHeQJ56SUcwadeedYpjIavJ%2BACd6AckdUTbpBclO9b52lMXfqrsImeQlXgF68PNyz321lqnWDBUd2AkKbNPBoPp41%2BJphOpbVdrc%2F1p6mKPP2zeh5yLzFoXG%2B1tXj9WDTmPvL7hxNlJLBv0QRM5yjTIYlHzRWnC1NxGyipUrMclTw5I7ZmR8FBIxak6oCB3iSCKCnsNzXPm454ohcLe%2F8nbuURlAebAk0dCe7ZDPi73iBjq9sxVYB9kLVJpROZAWU9F1zie0cS2u7M8KXVkrspIrbXo6dQ2MVSABaZ2sZ1SWGewTBNEuROtzD1OAYwEVQt1Y89tc5G4SXARqFcJc9yiitzUefSHAWYr6akTf96DkJ8qtzFsbcsijxKEuxiHEHa4idjmKBOfVHA97ESch9Edt5jItT18JNBSSDiruoAKg3JZzkMsz%2FzMjQqUkQa3nDZ%2F8Oj8Zf1ssZ%2FJF%2FSbP5ueND8QYmMDlOfvvK0zRjCgqCiNV0fQgJQKlY2nwQykOOapL9S2HwdJPHDgX9y4W0ebAhJNXugUZ4%2Bb3u8CA7QABfathmsO%2BJzdrEpBcxMR5ZWfG%2FH0I8jILPzgZDkX1hcMIvzlMIGOqUB0pZPZ5mEuEIpMSW39YpuKCVgBbCuRUQprqCNirhbRRID6TtvpGRJRkDcqEiQEl5htLD21X4EhOWhDogx2iGJSJQrQk3MAo6WFL%2Bp3eqQwSiIv0Ht6aHh1xgofJKi8EcJfFIEd1faw4ute2ueMkQlr%2BWn4ndl50LhqRI%2Bv2V%2FEegkEBiQW26FoqKLKEKf6Zs%2B7Bkb4VYtJXTBBnK1N5bhUXkRz7P6&X-Amz-Signature=7abb21c882e3cca6f952a165518819467b6e0a8a25e30a2d57b93a5479fc1450&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSICP2NY%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T090802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCM4eVleLJfCmAGx68sOOKSTNuGI84Aaip7WhKP2yrwHgIgPTEBj%2BXFkGRIJhSo%2BoIclLojflPT%2B92q0v2EklgsWgoqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvFkMT1gTwVO8mUQSrcAxGGw8eR%2BtxxU5QOMXG%2Btrp2ltKaI5e98fEUpiSHeQJ56SUcwadeedYpjIavJ%2BACd6AckdUTbpBclO9b52lMXfqrsImeQlXgF68PNyz321lqnWDBUd2AkKbNPBoPp41%2BJphOpbVdrc%2F1p6mKPP2zeh5yLzFoXG%2B1tXj9WDTmPvL7hxNlJLBv0QRM5yjTIYlHzRWnC1NxGyipUrMclTw5I7ZmR8FBIxak6oCB3iSCKCnsNzXPm454ohcLe%2F8nbuURlAebAk0dCe7ZDPi73iBjq9sxVYB9kLVJpROZAWU9F1zie0cS2u7M8KXVkrspIrbXo6dQ2MVSABaZ2sZ1SWGewTBNEuROtzD1OAYwEVQt1Y89tc5G4SXARqFcJc9yiitzUefSHAWYr6akTf96DkJ8qtzFsbcsijxKEuxiHEHa4idjmKBOfVHA97ESch9Edt5jItT18JNBSSDiruoAKg3JZzkMsz%2FzMjQqUkQa3nDZ%2F8Oj8Zf1ssZ%2FJF%2FSbP5ueND8QYmMDlOfvvK0zRjCgqCiNV0fQgJQKlY2nwQykOOapL9S2HwdJPHDgX9y4W0ebAhJNXugUZ4%2Bb3u8CA7QABfathmsO%2BJzdrEpBcxMR5ZWfG%2FH0I8jILPzgZDkX1hcMIvzlMIGOqUB0pZPZ5mEuEIpMSW39YpuKCVgBbCuRUQprqCNirhbRRID6TtvpGRJRkDcqEiQEl5htLD21X4EhOWhDogx2iGJSJQrQk3MAo6WFL%2Bp3eqQwSiIv0Ht6aHh1xgofJKi8EcJfFIEd1faw4ute2ueMkQlr%2BWn4ndl50LhqRI%2Bv2V%2FEegkEBiQW26FoqKLKEKf6Zs%2B7Bkb4VYtJXTBBnK1N5bhUXkRz7P6&X-Amz-Signature=9360f74ff036dd45e33625129192ddcd91eb3cab5d769d68abed5e0b66ab11f8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSICP2NY%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T090802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCM4eVleLJfCmAGx68sOOKSTNuGI84Aaip7WhKP2yrwHgIgPTEBj%2BXFkGRIJhSo%2BoIclLojflPT%2B92q0v2EklgsWgoqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvFkMT1gTwVO8mUQSrcAxGGw8eR%2BtxxU5QOMXG%2Btrp2ltKaI5e98fEUpiSHeQJ56SUcwadeedYpjIavJ%2BACd6AckdUTbpBclO9b52lMXfqrsImeQlXgF68PNyz321lqnWDBUd2AkKbNPBoPp41%2BJphOpbVdrc%2F1p6mKPP2zeh5yLzFoXG%2B1tXj9WDTmPvL7hxNlJLBv0QRM5yjTIYlHzRWnC1NxGyipUrMclTw5I7ZmR8FBIxak6oCB3iSCKCnsNzXPm454ohcLe%2F8nbuURlAebAk0dCe7ZDPi73iBjq9sxVYB9kLVJpROZAWU9F1zie0cS2u7M8KXVkrspIrbXo6dQ2MVSABaZ2sZ1SWGewTBNEuROtzD1OAYwEVQt1Y89tc5G4SXARqFcJc9yiitzUefSHAWYr6akTf96DkJ8qtzFsbcsijxKEuxiHEHa4idjmKBOfVHA97ESch9Edt5jItT18JNBSSDiruoAKg3JZzkMsz%2FzMjQqUkQa3nDZ%2F8Oj8Zf1ssZ%2FJF%2FSbP5ueND8QYmMDlOfvvK0zRjCgqCiNV0fQgJQKlY2nwQykOOapL9S2HwdJPHDgX9y4W0ebAhJNXugUZ4%2Bb3u8CA7QABfathmsO%2BJzdrEpBcxMR5ZWfG%2FH0I8jILPzgZDkX1hcMIvzlMIGOqUB0pZPZ5mEuEIpMSW39YpuKCVgBbCuRUQprqCNirhbRRID6TtvpGRJRkDcqEiQEl5htLD21X4EhOWhDogx2iGJSJQrQk3MAo6WFL%2Bp3eqQwSiIv0Ht6aHh1xgofJKi8EcJfFIEd1faw4ute2ueMkQlr%2BWn4ndl50LhqRI%2Bv2V%2FEegkEBiQW26FoqKLKEKf6Zs%2B7Bkb4VYtJXTBBnK1N5bhUXkRz7P6&X-Amz-Signature=2279a19dbafed10bfa52a5d04e17a8c06908bdd4aada076091c420619cfecebc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSICP2NY%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T090802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCM4eVleLJfCmAGx68sOOKSTNuGI84Aaip7WhKP2yrwHgIgPTEBj%2BXFkGRIJhSo%2BoIclLojflPT%2B92q0v2EklgsWgoqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvFkMT1gTwVO8mUQSrcAxGGw8eR%2BtxxU5QOMXG%2Btrp2ltKaI5e98fEUpiSHeQJ56SUcwadeedYpjIavJ%2BACd6AckdUTbpBclO9b52lMXfqrsImeQlXgF68PNyz321lqnWDBUd2AkKbNPBoPp41%2BJphOpbVdrc%2F1p6mKPP2zeh5yLzFoXG%2B1tXj9WDTmPvL7hxNlJLBv0QRM5yjTIYlHzRWnC1NxGyipUrMclTw5I7ZmR8FBIxak6oCB3iSCKCnsNzXPm454ohcLe%2F8nbuURlAebAk0dCe7ZDPi73iBjq9sxVYB9kLVJpROZAWU9F1zie0cS2u7M8KXVkrspIrbXo6dQ2MVSABaZ2sZ1SWGewTBNEuROtzD1OAYwEVQt1Y89tc5G4SXARqFcJc9yiitzUefSHAWYr6akTf96DkJ8qtzFsbcsijxKEuxiHEHa4idjmKBOfVHA97ESch9Edt5jItT18JNBSSDiruoAKg3JZzkMsz%2FzMjQqUkQa3nDZ%2F8Oj8Zf1ssZ%2FJF%2FSbP5ueND8QYmMDlOfvvK0zRjCgqCiNV0fQgJQKlY2nwQykOOapL9S2HwdJPHDgX9y4W0ebAhJNXugUZ4%2Bb3u8CA7QABfathmsO%2BJzdrEpBcxMR5ZWfG%2FH0I8jILPzgZDkX1hcMIvzlMIGOqUB0pZPZ5mEuEIpMSW39YpuKCVgBbCuRUQprqCNirhbRRID6TtvpGRJRkDcqEiQEl5htLD21X4EhOWhDogx2iGJSJQrQk3MAo6WFL%2Bp3eqQwSiIv0Ht6aHh1xgofJKi8EcJfFIEd1faw4ute2ueMkQlr%2BWn4ndl50LhqRI%2Bv2V%2FEegkEBiQW26FoqKLKEKf6Zs%2B7Bkb4VYtJXTBBnK1N5bhUXkRz7P6&X-Amz-Signature=e5ea6e822a1843c40cbc8652fd87d1da285083ade8e190469507306a52398353&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSICP2NY%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T090802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCM4eVleLJfCmAGx68sOOKSTNuGI84Aaip7WhKP2yrwHgIgPTEBj%2BXFkGRIJhSo%2BoIclLojflPT%2B92q0v2EklgsWgoqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvFkMT1gTwVO8mUQSrcAxGGw8eR%2BtxxU5QOMXG%2Btrp2ltKaI5e98fEUpiSHeQJ56SUcwadeedYpjIavJ%2BACd6AckdUTbpBclO9b52lMXfqrsImeQlXgF68PNyz321lqnWDBUd2AkKbNPBoPp41%2BJphOpbVdrc%2F1p6mKPP2zeh5yLzFoXG%2B1tXj9WDTmPvL7hxNlJLBv0QRM5yjTIYlHzRWnC1NxGyipUrMclTw5I7ZmR8FBIxak6oCB3iSCKCnsNzXPm454ohcLe%2F8nbuURlAebAk0dCe7ZDPi73iBjq9sxVYB9kLVJpROZAWU9F1zie0cS2u7M8KXVkrspIrbXo6dQ2MVSABaZ2sZ1SWGewTBNEuROtzD1OAYwEVQt1Y89tc5G4SXARqFcJc9yiitzUefSHAWYr6akTf96DkJ8qtzFsbcsijxKEuxiHEHa4idjmKBOfVHA97ESch9Edt5jItT18JNBSSDiruoAKg3JZzkMsz%2FzMjQqUkQa3nDZ%2F8Oj8Zf1ssZ%2FJF%2FSbP5ueND8QYmMDlOfvvK0zRjCgqCiNV0fQgJQKlY2nwQykOOapL9S2HwdJPHDgX9y4W0ebAhJNXugUZ4%2Bb3u8CA7QABfathmsO%2BJzdrEpBcxMR5ZWfG%2FH0I8jILPzgZDkX1hcMIvzlMIGOqUB0pZPZ5mEuEIpMSW39YpuKCVgBbCuRUQprqCNirhbRRID6TtvpGRJRkDcqEiQEl5htLD21X4EhOWhDogx2iGJSJQrQk3MAo6WFL%2Bp3eqQwSiIv0Ht6aHh1xgofJKi8EcJfFIEd1faw4ute2ueMkQlr%2BWn4ndl50LhqRI%2Bv2V%2FEegkEBiQW26FoqKLKEKf6Zs%2B7Bkb4VYtJXTBBnK1N5bhUXkRz7P6&X-Amz-Signature=a40441d2e967e35f30a22a6875506236b0816d19e0a13c941ae3999fb056d7d1&X-Amz-SignedHeaders=host&x-id=GetObject)
