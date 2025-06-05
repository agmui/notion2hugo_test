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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZDMDWPQ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIB2VjYlbbvfzyKsg87vB8F2o0a2ZXfUWdzPH8F%2BT%2BwYcAiEAvamKcql17WdoPVI38ptScH5zzJ8fPY%2Bffb18FUdm2Q0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIUSkDN0wXaUoOFd7SrcA%2FPuTQ37M06%2Bn6GPeweZE%2FsyJsZ7K%2B2CCzgtv32WenT9qKnpx8i5h5PyzF2EKsLZZfBtEgLtHwF%2F1CHYwZRmsoQtethcsjzGlUti%2BOVvZMLVbtyO5OfQ9hp84ALWuhWNCkRJ4ocu42V48SVFH4%2B8OWDLu3SPXQcI3T2k07fyNXixL6SMpXzAZbyxbbZMXRtKxsKSA1a5JhbpydcTaThVXmzORn0DH5K4hqKrqk0kfM2EQo7ovso1JguM%2BegJbJV2p6%2FjLdadELMuVmTZ%2F1C5x5N9lCeXhAL8eqpfvu4X32SaNE86fGMsqx2vG9HD0EIJBIkelDR%2Ftrua9HqWxUSi9S9FG5DRmez5egFr2y6sdLAh8Avl2wCme2yTROC5bBEVovC%2FOMYb9qXZtaf3lT0IBjRM5R%2FQFILWD%2BSUNt3A8tSa9IJglrvzO8mw59%2FByYgEZni0n51WTOr%2FgbNOyGWkxG0Kz%2B8brH%2BD46uDT4PGzkqC97EurbbQ8jAyaayc52AcL8jc0iZBrYIksKSmGCYshBs4YkEtppNZH%2FKPtEqA0jlsJarV6mx%2BmZfmVHzYDNWd6ggQkxJgubpdTVryy%2BTurxd7lteTqNIi7yX6c4TV9P9kdKmnFO0tJkLWJc17MKzYh8IGOqUBryC%2FQH8ece97CHtMaLUOjTGsrEJiAQBpKbmxqXFv%2BdvytCCfZUXT0CpJQRKjkLpUHGDfeHwE2AazvkuAcSHxcof1JSkNDZTJuAJLJ8biiKSxKxEj%2BP1%2FoEzAgbnBbeVgiVx3fWNbDdvUymLVNRT3qG%2BDKfMnggf3Et88lbjcJb%2F7yOFb6%2FElNkZWqluORmIZMqLxensbdDeLP1vG4tfXYQDwY6Fs&X-Amz-Signature=1e196ab08c3687754d9ba017af2d9cc735c77bd863b44ea59686dd2104b885f6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZDMDWPQ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIB2VjYlbbvfzyKsg87vB8F2o0a2ZXfUWdzPH8F%2BT%2BwYcAiEAvamKcql17WdoPVI38ptScH5zzJ8fPY%2Bffb18FUdm2Q0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIUSkDN0wXaUoOFd7SrcA%2FPuTQ37M06%2Bn6GPeweZE%2FsyJsZ7K%2B2CCzgtv32WenT9qKnpx8i5h5PyzF2EKsLZZfBtEgLtHwF%2F1CHYwZRmsoQtethcsjzGlUti%2BOVvZMLVbtyO5OfQ9hp84ALWuhWNCkRJ4ocu42V48SVFH4%2B8OWDLu3SPXQcI3T2k07fyNXixL6SMpXzAZbyxbbZMXRtKxsKSA1a5JhbpydcTaThVXmzORn0DH5K4hqKrqk0kfM2EQo7ovso1JguM%2BegJbJV2p6%2FjLdadELMuVmTZ%2F1C5x5N9lCeXhAL8eqpfvu4X32SaNE86fGMsqx2vG9HD0EIJBIkelDR%2Ftrua9HqWxUSi9S9FG5DRmez5egFr2y6sdLAh8Avl2wCme2yTROC5bBEVovC%2FOMYb9qXZtaf3lT0IBjRM5R%2FQFILWD%2BSUNt3A8tSa9IJglrvzO8mw59%2FByYgEZni0n51WTOr%2FgbNOyGWkxG0Kz%2B8brH%2BD46uDT4PGzkqC97EurbbQ8jAyaayc52AcL8jc0iZBrYIksKSmGCYshBs4YkEtppNZH%2FKPtEqA0jlsJarV6mx%2BmZfmVHzYDNWd6ggQkxJgubpdTVryy%2BTurxd7lteTqNIi7yX6c4TV9P9kdKmnFO0tJkLWJc17MKzYh8IGOqUBryC%2FQH8ece97CHtMaLUOjTGsrEJiAQBpKbmxqXFv%2BdvytCCfZUXT0CpJQRKjkLpUHGDfeHwE2AazvkuAcSHxcof1JSkNDZTJuAJLJ8biiKSxKxEj%2BP1%2FoEzAgbnBbeVgiVx3fWNbDdvUymLVNRT3qG%2BDKfMnggf3Et88lbjcJb%2F7yOFb6%2FElNkZWqluORmIZMqLxensbdDeLP1vG4tfXYQDwY6Fs&X-Amz-Signature=c54132ce0704ff7d06b32c2529ab806a22a485ce4759a20959ed9830622c49da&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZDMDWPQ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIB2VjYlbbvfzyKsg87vB8F2o0a2ZXfUWdzPH8F%2BT%2BwYcAiEAvamKcql17WdoPVI38ptScH5zzJ8fPY%2Bffb18FUdm2Q0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIUSkDN0wXaUoOFd7SrcA%2FPuTQ37M06%2Bn6GPeweZE%2FsyJsZ7K%2B2CCzgtv32WenT9qKnpx8i5h5PyzF2EKsLZZfBtEgLtHwF%2F1CHYwZRmsoQtethcsjzGlUti%2BOVvZMLVbtyO5OfQ9hp84ALWuhWNCkRJ4ocu42V48SVFH4%2B8OWDLu3SPXQcI3T2k07fyNXixL6SMpXzAZbyxbbZMXRtKxsKSA1a5JhbpydcTaThVXmzORn0DH5K4hqKrqk0kfM2EQo7ovso1JguM%2BegJbJV2p6%2FjLdadELMuVmTZ%2F1C5x5N9lCeXhAL8eqpfvu4X32SaNE86fGMsqx2vG9HD0EIJBIkelDR%2Ftrua9HqWxUSi9S9FG5DRmez5egFr2y6sdLAh8Avl2wCme2yTROC5bBEVovC%2FOMYb9qXZtaf3lT0IBjRM5R%2FQFILWD%2BSUNt3A8tSa9IJglrvzO8mw59%2FByYgEZni0n51WTOr%2FgbNOyGWkxG0Kz%2B8brH%2BD46uDT4PGzkqC97EurbbQ8jAyaayc52AcL8jc0iZBrYIksKSmGCYshBs4YkEtppNZH%2FKPtEqA0jlsJarV6mx%2BmZfmVHzYDNWd6ggQkxJgubpdTVryy%2BTurxd7lteTqNIi7yX6c4TV9P9kdKmnFO0tJkLWJc17MKzYh8IGOqUBryC%2FQH8ece97CHtMaLUOjTGsrEJiAQBpKbmxqXFv%2BdvytCCfZUXT0CpJQRKjkLpUHGDfeHwE2AazvkuAcSHxcof1JSkNDZTJuAJLJ8biiKSxKxEj%2BP1%2FoEzAgbnBbeVgiVx3fWNbDdvUymLVNRT3qG%2BDKfMnggf3Et88lbjcJb%2F7yOFb6%2FElNkZWqluORmIZMqLxensbdDeLP1vG4tfXYQDwY6Fs&X-Amz-Signature=c7d171ccb46194903a81ccf06b7f254bbf420014dc0d31dd5db76013fab4ebc7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZDMDWPQ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIB2VjYlbbvfzyKsg87vB8F2o0a2ZXfUWdzPH8F%2BT%2BwYcAiEAvamKcql17WdoPVI38ptScH5zzJ8fPY%2Bffb18FUdm2Q0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIUSkDN0wXaUoOFd7SrcA%2FPuTQ37M06%2Bn6GPeweZE%2FsyJsZ7K%2B2CCzgtv32WenT9qKnpx8i5h5PyzF2EKsLZZfBtEgLtHwF%2F1CHYwZRmsoQtethcsjzGlUti%2BOVvZMLVbtyO5OfQ9hp84ALWuhWNCkRJ4ocu42V48SVFH4%2B8OWDLu3SPXQcI3T2k07fyNXixL6SMpXzAZbyxbbZMXRtKxsKSA1a5JhbpydcTaThVXmzORn0DH5K4hqKrqk0kfM2EQo7ovso1JguM%2BegJbJV2p6%2FjLdadELMuVmTZ%2F1C5x5N9lCeXhAL8eqpfvu4X32SaNE86fGMsqx2vG9HD0EIJBIkelDR%2Ftrua9HqWxUSi9S9FG5DRmez5egFr2y6sdLAh8Avl2wCme2yTROC5bBEVovC%2FOMYb9qXZtaf3lT0IBjRM5R%2FQFILWD%2BSUNt3A8tSa9IJglrvzO8mw59%2FByYgEZni0n51WTOr%2FgbNOyGWkxG0Kz%2B8brH%2BD46uDT4PGzkqC97EurbbQ8jAyaayc52AcL8jc0iZBrYIksKSmGCYshBs4YkEtppNZH%2FKPtEqA0jlsJarV6mx%2BmZfmVHzYDNWd6ggQkxJgubpdTVryy%2BTurxd7lteTqNIi7yX6c4TV9P9kdKmnFO0tJkLWJc17MKzYh8IGOqUBryC%2FQH8ece97CHtMaLUOjTGsrEJiAQBpKbmxqXFv%2BdvytCCfZUXT0CpJQRKjkLpUHGDfeHwE2AazvkuAcSHxcof1JSkNDZTJuAJLJ8biiKSxKxEj%2BP1%2FoEzAgbnBbeVgiVx3fWNbDdvUymLVNRT3qG%2BDKfMnggf3Et88lbjcJb%2F7yOFb6%2FElNkZWqluORmIZMqLxensbdDeLP1vG4tfXYQDwY6Fs&X-Amz-Signature=b3f6a49a28c48ff89caa245b3e0f28d3322e3cf678222aae95feb65e095d1dfd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZDMDWPQ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIB2VjYlbbvfzyKsg87vB8F2o0a2ZXfUWdzPH8F%2BT%2BwYcAiEAvamKcql17WdoPVI38ptScH5zzJ8fPY%2Bffb18FUdm2Q0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIUSkDN0wXaUoOFd7SrcA%2FPuTQ37M06%2Bn6GPeweZE%2FsyJsZ7K%2B2CCzgtv32WenT9qKnpx8i5h5PyzF2EKsLZZfBtEgLtHwF%2F1CHYwZRmsoQtethcsjzGlUti%2BOVvZMLVbtyO5OfQ9hp84ALWuhWNCkRJ4ocu42V48SVFH4%2B8OWDLu3SPXQcI3T2k07fyNXixL6SMpXzAZbyxbbZMXRtKxsKSA1a5JhbpydcTaThVXmzORn0DH5K4hqKrqk0kfM2EQo7ovso1JguM%2BegJbJV2p6%2FjLdadELMuVmTZ%2F1C5x5N9lCeXhAL8eqpfvu4X32SaNE86fGMsqx2vG9HD0EIJBIkelDR%2Ftrua9HqWxUSi9S9FG5DRmez5egFr2y6sdLAh8Avl2wCme2yTROC5bBEVovC%2FOMYb9qXZtaf3lT0IBjRM5R%2FQFILWD%2BSUNt3A8tSa9IJglrvzO8mw59%2FByYgEZni0n51WTOr%2FgbNOyGWkxG0Kz%2B8brH%2BD46uDT4PGzkqC97EurbbQ8jAyaayc52AcL8jc0iZBrYIksKSmGCYshBs4YkEtppNZH%2FKPtEqA0jlsJarV6mx%2BmZfmVHzYDNWd6ggQkxJgubpdTVryy%2BTurxd7lteTqNIi7yX6c4TV9P9kdKmnFO0tJkLWJc17MKzYh8IGOqUBryC%2FQH8ece97CHtMaLUOjTGsrEJiAQBpKbmxqXFv%2BdvytCCfZUXT0CpJQRKjkLpUHGDfeHwE2AazvkuAcSHxcof1JSkNDZTJuAJLJ8biiKSxKxEj%2BP1%2FoEzAgbnBbeVgiVx3fWNbDdvUymLVNRT3qG%2BDKfMnggf3Et88lbjcJb%2F7yOFb6%2FElNkZWqluORmIZMqLxensbdDeLP1vG4tfXYQDwY6Fs&X-Amz-Signature=0785d23f37af9c3380162c879be41fb103f0b490b078a6510817a7e834f8cfa5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZDMDWPQ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIB2VjYlbbvfzyKsg87vB8F2o0a2ZXfUWdzPH8F%2BT%2BwYcAiEAvamKcql17WdoPVI38ptScH5zzJ8fPY%2Bffb18FUdm2Q0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDIUSkDN0wXaUoOFd7SrcA%2FPuTQ37M06%2Bn6GPeweZE%2FsyJsZ7K%2B2CCzgtv32WenT9qKnpx8i5h5PyzF2EKsLZZfBtEgLtHwF%2F1CHYwZRmsoQtethcsjzGlUti%2BOVvZMLVbtyO5OfQ9hp84ALWuhWNCkRJ4ocu42V48SVFH4%2B8OWDLu3SPXQcI3T2k07fyNXixL6SMpXzAZbyxbbZMXRtKxsKSA1a5JhbpydcTaThVXmzORn0DH5K4hqKrqk0kfM2EQo7ovso1JguM%2BegJbJV2p6%2FjLdadELMuVmTZ%2F1C5x5N9lCeXhAL8eqpfvu4X32SaNE86fGMsqx2vG9HD0EIJBIkelDR%2Ftrua9HqWxUSi9S9FG5DRmez5egFr2y6sdLAh8Avl2wCme2yTROC5bBEVovC%2FOMYb9qXZtaf3lT0IBjRM5R%2FQFILWD%2BSUNt3A8tSa9IJglrvzO8mw59%2FByYgEZni0n51WTOr%2FgbNOyGWkxG0Kz%2B8brH%2BD46uDT4PGzkqC97EurbbQ8jAyaayc52AcL8jc0iZBrYIksKSmGCYshBs4YkEtppNZH%2FKPtEqA0jlsJarV6mx%2BmZfmVHzYDNWd6ggQkxJgubpdTVryy%2BTurxd7lteTqNIi7yX6c4TV9P9kdKmnFO0tJkLWJc17MKzYh8IGOqUBryC%2FQH8ece97CHtMaLUOjTGsrEJiAQBpKbmxqXFv%2BdvytCCfZUXT0CpJQRKjkLpUHGDfeHwE2AazvkuAcSHxcof1JSkNDZTJuAJLJ8biiKSxKxEj%2BP1%2FoEzAgbnBbeVgiVx3fWNbDdvUymLVNRT3qG%2BDKfMnggf3Et88lbjcJb%2F7yOFb6%2FElNkZWqluORmIZMqLxensbdDeLP1vG4tfXYQDwY6Fs&X-Amz-Signature=dc833a3acc53fad61cde81f03384da83b9ae43ab765e621241fce32b1b1673be&X-Amz-SignedHeaders=host&x-id=GetObject)
