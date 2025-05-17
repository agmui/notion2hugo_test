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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLU3N2S2%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T070759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKZ9DVrU%2B6jn%2BOhWZKt96vuzJpp%2FndTxqupIqK%2FOficQIgM5Kfvdd2N%2FzMNFovaQxE%2FJAB8u9URiKTKLjFL8PvgGsq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDAzvUADIAq1PERNBiSrcAy9%2BkGG63gfbemaIyJYZgYyuXoq5usMPlgK2gti9CRu2RBLe%2B45DF5Aj831vICkr7CVmbw%2B2GQS6BItBGM6jDVN4h45s9dbwPd7QkNgj9ZJeQaHlxMVcm7NEHhN5R1j%2Bae70IGpWsDDuZ0YgCVTnnzC62b2XPxhfuFtk52puMnqGtxHPZ1pi02zB3tpvPPVLYSOoi2IKfLjjB%2B1ipcksWUzD5iYt87sFEIAW6DkznfQPJkSmquzK1w2ku%2BIcnT1pz75iQ8Rev1k8N94MQPOTM%2BYjmwRCvjs5HdT5C3YeKnp%2FbM%2BJK%2FYX6174OoawxxCe5VVUByp363GJCKdC%2FbjfpcxX9QEi10by3R%2F4jTV9je%2BYdmq0TBr9czhuoBAb3b9WGE9cr98PMtt%2FGnC3OcdDRPSTlsW8TkN6lusL5Wfz5kWx%2FRHXixVL3OzKvMZx59ZMCYzvDIj1eRdjSQOkuFQK1LqJanomDoBezNFJGHujrgTue%2B9YdQWvNk%2FL5gJiKoRaWty80xy5otrAIqSPzLWbAWqABKv%2Bq07JP6QVbZzEDxEglr6YajZK40xs0sWf5Qju%2BuxpYP4xqETSLWEn8zHJawH1ax6tEv%2Bz1CZDFpIdFKqgAnA1yYFPgU6GiSBoMMzgoMEGOqUBlt0E7Iy%2Fxd1vspL53ake%2F8MXllGFgGC0rB%2Fb4QZOUfFovXgHTYP4I%2FeO5UXt4raeRQF7cNSM1Hlo9hfewZeEeo6GCipssELl6Naljrz0DuAD%2FmEpGOl4AXm1VwRw%2FlTE8M3kGqMtD59FYzYm2s8NPEV7gkSXH3APb1E8C0IDgzpwlwAGpAmw4rj9XwhiuxVEIAa%2FpC0dc5YAK3UR%2BnZAZ%2FlSVXg%2B&X-Amz-Signature=33029e2c7bd70d0b38a64d90849abcf3ff4c74031a4ffdb4b96690344b7c3bcd&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLU3N2S2%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T070759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKZ9DVrU%2B6jn%2BOhWZKt96vuzJpp%2FndTxqupIqK%2FOficQIgM5Kfvdd2N%2FzMNFovaQxE%2FJAB8u9URiKTKLjFL8PvgGsq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDAzvUADIAq1PERNBiSrcAy9%2BkGG63gfbemaIyJYZgYyuXoq5usMPlgK2gti9CRu2RBLe%2B45DF5Aj831vICkr7CVmbw%2B2GQS6BItBGM6jDVN4h45s9dbwPd7QkNgj9ZJeQaHlxMVcm7NEHhN5R1j%2Bae70IGpWsDDuZ0YgCVTnnzC62b2XPxhfuFtk52puMnqGtxHPZ1pi02zB3tpvPPVLYSOoi2IKfLjjB%2B1ipcksWUzD5iYt87sFEIAW6DkznfQPJkSmquzK1w2ku%2BIcnT1pz75iQ8Rev1k8N94MQPOTM%2BYjmwRCvjs5HdT5C3YeKnp%2FbM%2BJK%2FYX6174OoawxxCe5VVUByp363GJCKdC%2FbjfpcxX9QEi10by3R%2F4jTV9je%2BYdmq0TBr9czhuoBAb3b9WGE9cr98PMtt%2FGnC3OcdDRPSTlsW8TkN6lusL5Wfz5kWx%2FRHXixVL3OzKvMZx59ZMCYzvDIj1eRdjSQOkuFQK1LqJanomDoBezNFJGHujrgTue%2B9YdQWvNk%2FL5gJiKoRaWty80xy5otrAIqSPzLWbAWqABKv%2Bq07JP6QVbZzEDxEglr6YajZK40xs0sWf5Qju%2BuxpYP4xqETSLWEn8zHJawH1ax6tEv%2Bz1CZDFpIdFKqgAnA1yYFPgU6GiSBoMMzgoMEGOqUBlt0E7Iy%2Fxd1vspL53ake%2F8MXllGFgGC0rB%2Fb4QZOUfFovXgHTYP4I%2FeO5UXt4raeRQF7cNSM1Hlo9hfewZeEeo6GCipssELl6Naljrz0DuAD%2FmEpGOl4AXm1VwRw%2FlTE8M3kGqMtD59FYzYm2s8NPEV7gkSXH3APb1E8C0IDgzpwlwAGpAmw4rj9XwhiuxVEIAa%2FpC0dc5YAK3UR%2BnZAZ%2FlSVXg%2B&X-Amz-Signature=7c6334b2497a35aaec2eeff6e174f68edb57bea0ef93a92adffb1cc46e66d670&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLU3N2S2%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T070759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKZ9DVrU%2B6jn%2BOhWZKt96vuzJpp%2FndTxqupIqK%2FOficQIgM5Kfvdd2N%2FzMNFovaQxE%2FJAB8u9URiKTKLjFL8PvgGsq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDAzvUADIAq1PERNBiSrcAy9%2BkGG63gfbemaIyJYZgYyuXoq5usMPlgK2gti9CRu2RBLe%2B45DF5Aj831vICkr7CVmbw%2B2GQS6BItBGM6jDVN4h45s9dbwPd7QkNgj9ZJeQaHlxMVcm7NEHhN5R1j%2Bae70IGpWsDDuZ0YgCVTnnzC62b2XPxhfuFtk52puMnqGtxHPZ1pi02zB3tpvPPVLYSOoi2IKfLjjB%2B1ipcksWUzD5iYt87sFEIAW6DkznfQPJkSmquzK1w2ku%2BIcnT1pz75iQ8Rev1k8N94MQPOTM%2BYjmwRCvjs5HdT5C3YeKnp%2FbM%2BJK%2FYX6174OoawxxCe5VVUByp363GJCKdC%2FbjfpcxX9QEi10by3R%2F4jTV9je%2BYdmq0TBr9czhuoBAb3b9WGE9cr98PMtt%2FGnC3OcdDRPSTlsW8TkN6lusL5Wfz5kWx%2FRHXixVL3OzKvMZx59ZMCYzvDIj1eRdjSQOkuFQK1LqJanomDoBezNFJGHujrgTue%2B9YdQWvNk%2FL5gJiKoRaWty80xy5otrAIqSPzLWbAWqABKv%2Bq07JP6QVbZzEDxEglr6YajZK40xs0sWf5Qju%2BuxpYP4xqETSLWEn8zHJawH1ax6tEv%2Bz1CZDFpIdFKqgAnA1yYFPgU6GiSBoMMzgoMEGOqUBlt0E7Iy%2Fxd1vspL53ake%2F8MXllGFgGC0rB%2Fb4QZOUfFovXgHTYP4I%2FeO5UXt4raeRQF7cNSM1Hlo9hfewZeEeo6GCipssELl6Naljrz0DuAD%2FmEpGOl4AXm1VwRw%2FlTE8M3kGqMtD59FYzYm2s8NPEV7gkSXH3APb1E8C0IDgzpwlwAGpAmw4rj9XwhiuxVEIAa%2FpC0dc5YAK3UR%2BnZAZ%2FlSVXg%2B&X-Amz-Signature=aad4a3483be2008d6ca326cf29f09e5dd9c1838910975f2b0bb0cc3d62cd8339&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLU3N2S2%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T070759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKZ9DVrU%2B6jn%2BOhWZKt96vuzJpp%2FndTxqupIqK%2FOficQIgM5Kfvdd2N%2FzMNFovaQxE%2FJAB8u9URiKTKLjFL8PvgGsq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDAzvUADIAq1PERNBiSrcAy9%2BkGG63gfbemaIyJYZgYyuXoq5usMPlgK2gti9CRu2RBLe%2B45DF5Aj831vICkr7CVmbw%2B2GQS6BItBGM6jDVN4h45s9dbwPd7QkNgj9ZJeQaHlxMVcm7NEHhN5R1j%2Bae70IGpWsDDuZ0YgCVTnnzC62b2XPxhfuFtk52puMnqGtxHPZ1pi02zB3tpvPPVLYSOoi2IKfLjjB%2B1ipcksWUzD5iYt87sFEIAW6DkznfQPJkSmquzK1w2ku%2BIcnT1pz75iQ8Rev1k8N94MQPOTM%2BYjmwRCvjs5HdT5C3YeKnp%2FbM%2BJK%2FYX6174OoawxxCe5VVUByp363GJCKdC%2FbjfpcxX9QEi10by3R%2F4jTV9je%2BYdmq0TBr9czhuoBAb3b9WGE9cr98PMtt%2FGnC3OcdDRPSTlsW8TkN6lusL5Wfz5kWx%2FRHXixVL3OzKvMZx59ZMCYzvDIj1eRdjSQOkuFQK1LqJanomDoBezNFJGHujrgTue%2B9YdQWvNk%2FL5gJiKoRaWty80xy5otrAIqSPzLWbAWqABKv%2Bq07JP6QVbZzEDxEglr6YajZK40xs0sWf5Qju%2BuxpYP4xqETSLWEn8zHJawH1ax6tEv%2Bz1CZDFpIdFKqgAnA1yYFPgU6GiSBoMMzgoMEGOqUBlt0E7Iy%2Fxd1vspL53ake%2F8MXllGFgGC0rB%2Fb4QZOUfFovXgHTYP4I%2FeO5UXt4raeRQF7cNSM1Hlo9hfewZeEeo6GCipssELl6Naljrz0DuAD%2FmEpGOl4AXm1VwRw%2FlTE8M3kGqMtD59FYzYm2s8NPEV7gkSXH3APb1E8C0IDgzpwlwAGpAmw4rj9XwhiuxVEIAa%2FpC0dc5YAK3UR%2BnZAZ%2FlSVXg%2B&X-Amz-Signature=abf2ef87503853c192abd190cbc6b13768fbba70e7b6b42901832fa7aaf5c556&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLU3N2S2%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T070759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKZ9DVrU%2B6jn%2BOhWZKt96vuzJpp%2FndTxqupIqK%2FOficQIgM5Kfvdd2N%2FzMNFovaQxE%2FJAB8u9URiKTKLjFL8PvgGsq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDAzvUADIAq1PERNBiSrcAy9%2BkGG63gfbemaIyJYZgYyuXoq5usMPlgK2gti9CRu2RBLe%2B45DF5Aj831vICkr7CVmbw%2B2GQS6BItBGM6jDVN4h45s9dbwPd7QkNgj9ZJeQaHlxMVcm7NEHhN5R1j%2Bae70IGpWsDDuZ0YgCVTnnzC62b2XPxhfuFtk52puMnqGtxHPZ1pi02zB3tpvPPVLYSOoi2IKfLjjB%2B1ipcksWUzD5iYt87sFEIAW6DkznfQPJkSmquzK1w2ku%2BIcnT1pz75iQ8Rev1k8N94MQPOTM%2BYjmwRCvjs5HdT5C3YeKnp%2FbM%2BJK%2FYX6174OoawxxCe5VVUByp363GJCKdC%2FbjfpcxX9QEi10by3R%2F4jTV9je%2BYdmq0TBr9czhuoBAb3b9WGE9cr98PMtt%2FGnC3OcdDRPSTlsW8TkN6lusL5Wfz5kWx%2FRHXixVL3OzKvMZx59ZMCYzvDIj1eRdjSQOkuFQK1LqJanomDoBezNFJGHujrgTue%2B9YdQWvNk%2FL5gJiKoRaWty80xy5otrAIqSPzLWbAWqABKv%2Bq07JP6QVbZzEDxEglr6YajZK40xs0sWf5Qju%2BuxpYP4xqETSLWEn8zHJawH1ax6tEv%2Bz1CZDFpIdFKqgAnA1yYFPgU6GiSBoMMzgoMEGOqUBlt0E7Iy%2Fxd1vspL53ake%2F8MXllGFgGC0rB%2Fb4QZOUfFovXgHTYP4I%2FeO5UXt4raeRQF7cNSM1Hlo9hfewZeEeo6GCipssELl6Naljrz0DuAD%2FmEpGOl4AXm1VwRw%2FlTE8M3kGqMtD59FYzYm2s8NPEV7gkSXH3APb1E8C0IDgzpwlwAGpAmw4rj9XwhiuxVEIAa%2FpC0dc5YAK3UR%2BnZAZ%2FlSVXg%2B&X-Amz-Signature=7c8b710e566f27541fa9a2c0ba58543749a198017c57428d483cfeeb4bb7bd8d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLU3N2S2%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T070759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCKZ9DVrU%2B6jn%2BOhWZKt96vuzJpp%2FndTxqupIqK%2FOficQIgM5Kfvdd2N%2FzMNFovaQxE%2FJAB8u9URiKTKLjFL8PvgGsq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDAzvUADIAq1PERNBiSrcAy9%2BkGG63gfbemaIyJYZgYyuXoq5usMPlgK2gti9CRu2RBLe%2B45DF5Aj831vICkr7CVmbw%2B2GQS6BItBGM6jDVN4h45s9dbwPd7QkNgj9ZJeQaHlxMVcm7NEHhN5R1j%2Bae70IGpWsDDuZ0YgCVTnnzC62b2XPxhfuFtk52puMnqGtxHPZ1pi02zB3tpvPPVLYSOoi2IKfLjjB%2B1ipcksWUzD5iYt87sFEIAW6DkznfQPJkSmquzK1w2ku%2BIcnT1pz75iQ8Rev1k8N94MQPOTM%2BYjmwRCvjs5HdT5C3YeKnp%2FbM%2BJK%2FYX6174OoawxxCe5VVUByp363GJCKdC%2FbjfpcxX9QEi10by3R%2F4jTV9je%2BYdmq0TBr9czhuoBAb3b9WGE9cr98PMtt%2FGnC3OcdDRPSTlsW8TkN6lusL5Wfz5kWx%2FRHXixVL3OzKvMZx59ZMCYzvDIj1eRdjSQOkuFQK1LqJanomDoBezNFJGHujrgTue%2B9YdQWvNk%2FL5gJiKoRaWty80xy5otrAIqSPzLWbAWqABKv%2Bq07JP6QVbZzEDxEglr6YajZK40xs0sWf5Qju%2BuxpYP4xqETSLWEn8zHJawH1ax6tEv%2Bz1CZDFpIdFKqgAnA1yYFPgU6GiSBoMMzgoMEGOqUBlt0E7Iy%2Fxd1vspL53ake%2F8MXllGFgGC0rB%2Fb4QZOUfFovXgHTYP4I%2FeO5UXt4raeRQF7cNSM1Hlo9hfewZeEeo6GCipssELl6Naljrz0DuAD%2FmEpGOl4AXm1VwRw%2FlTE8M3kGqMtD59FYzYm2s8NPEV7gkSXH3APb1E8C0IDgzpwlwAGpAmw4rj9XwhiuxVEIAa%2FpC0dc5YAK3UR%2BnZAZ%2FlSVXg%2B&X-Amz-Signature=f6d19f318a0d9904db210858956d83f8885d65be1785f8b929298b3c37db467a&X-Amz-SignedHeaders=host&x-id=GetObject)
