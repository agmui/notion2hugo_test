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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2VXBX2K%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDkXajL9wZwoiaEbGUjhNS%2FogkkD1WsdASsGDZtLhVaogIgVfwKThaxKF6JRWRBBLiqfQKRowyU34GGOp51WWMGNAMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMrmjLuP08MTBlBoCrcAyTPT1KY74nD%2BGIvAhanqgeRiwwfBfnjkP%2FKJK%2BODC81WSZz1452RQztqDRQsHsvQkr5%2BtoZGcNU6u3wQ3Mp3EDKoJmSUoH3k1i%2Fjz3GtiCFmXRe5v%2BBdine8x5jkvoxSqs23lzMkyht81bbJGFwXx%2FiflzFG9o1JDl7YmgkBeBcsWC5rXviYPYxrAfvzksKXfQD%2FKb1n6G9stIOGt6dFQkLOQUAf%2FVXCRwZV3J%2BjaUbCqm%2FxIrAYvwdavJJPveVeqby6re%2B8TNIsDFxuBTzIDTYNJDIiRgWhkzd92lGxD1VocqhEJqx8BE1PlRDfbGtauwdTnK6iXqqE1dlPC4VWorfP2Pm4OmYp4hQxXFrxvFGWApnWcGmBSuOaVFwwoS9rXU6r8MkyTkFcxVM8uqa2qbxZYwshQi5MkgCWlZCU2wKrCqBIwbKY2A%2FIdWY1y682IB4OAjs6%2FuSIce2ikNNeBVUWO%2Fv%2FRbviGlalH9MlqwARSp92V%2FU2CvSt39LjdknsviUhBLhv6hZ80cq2GL8E4AnmCAblHajx%2F4c33JIPyeDpQ9PCI%2BZz23a4uGEeZ8EAXwqp1QxmmGCX40YRuaSsZsK%2Fs3jL1DStKIDbXiIl3KYYZH2MPgq5Gah%2BmEnMIGHmcAGOqUBj2xaNkFUhtjdZiiTe%2FfUoeEwdejl41t9veD2zysyXbxa%2F5qd0vQ%2FNBGheuVl55b4CyLU1zqglNw6aMJxEvuBaLhVj5rpBIZVl6BWQ5DYkPaLG1hzatm9VmZxTI7SLa0zNuFpOwKtChv89sXCIFYTWiD4dfQoBJkCxcrQ5kbefQd%2Fje7P4%2BWqwf%2FjhB3OAv4Pd2wdVsKJbnzMtL6C4pNCNxqjBucE&X-Amz-Signature=9ddf697ff50ffcc4644235a0af21e301177cb0859c6b2b31fc2fde5af42cfb59&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2VXBX2K%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDkXajL9wZwoiaEbGUjhNS%2FogkkD1WsdASsGDZtLhVaogIgVfwKThaxKF6JRWRBBLiqfQKRowyU34GGOp51WWMGNAMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMrmjLuP08MTBlBoCrcAyTPT1KY74nD%2BGIvAhanqgeRiwwfBfnjkP%2FKJK%2BODC81WSZz1452RQztqDRQsHsvQkr5%2BtoZGcNU6u3wQ3Mp3EDKoJmSUoH3k1i%2Fjz3GtiCFmXRe5v%2BBdine8x5jkvoxSqs23lzMkyht81bbJGFwXx%2FiflzFG9o1JDl7YmgkBeBcsWC5rXviYPYxrAfvzksKXfQD%2FKb1n6G9stIOGt6dFQkLOQUAf%2FVXCRwZV3J%2BjaUbCqm%2FxIrAYvwdavJJPveVeqby6re%2B8TNIsDFxuBTzIDTYNJDIiRgWhkzd92lGxD1VocqhEJqx8BE1PlRDfbGtauwdTnK6iXqqE1dlPC4VWorfP2Pm4OmYp4hQxXFrxvFGWApnWcGmBSuOaVFwwoS9rXU6r8MkyTkFcxVM8uqa2qbxZYwshQi5MkgCWlZCU2wKrCqBIwbKY2A%2FIdWY1y682IB4OAjs6%2FuSIce2ikNNeBVUWO%2Fv%2FRbviGlalH9MlqwARSp92V%2FU2CvSt39LjdknsviUhBLhv6hZ80cq2GL8E4AnmCAblHajx%2F4c33JIPyeDpQ9PCI%2BZz23a4uGEeZ8EAXwqp1QxmmGCX40YRuaSsZsK%2Fs3jL1DStKIDbXiIl3KYYZH2MPgq5Gah%2BmEnMIGHmcAGOqUBj2xaNkFUhtjdZiiTe%2FfUoeEwdejl41t9veD2zysyXbxa%2F5qd0vQ%2FNBGheuVl55b4CyLU1zqglNw6aMJxEvuBaLhVj5rpBIZVl6BWQ5DYkPaLG1hzatm9VmZxTI7SLa0zNuFpOwKtChv89sXCIFYTWiD4dfQoBJkCxcrQ5kbefQd%2Fje7P4%2BWqwf%2FjhB3OAv4Pd2wdVsKJbnzMtL6C4pNCNxqjBucE&X-Amz-Signature=c92db02fdac4030e060b7edc938fc5fa959234d59755283047b0ca485c1620b8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2VXBX2K%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDkXajL9wZwoiaEbGUjhNS%2FogkkD1WsdASsGDZtLhVaogIgVfwKThaxKF6JRWRBBLiqfQKRowyU34GGOp51WWMGNAMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMrmjLuP08MTBlBoCrcAyTPT1KY74nD%2BGIvAhanqgeRiwwfBfnjkP%2FKJK%2BODC81WSZz1452RQztqDRQsHsvQkr5%2BtoZGcNU6u3wQ3Mp3EDKoJmSUoH3k1i%2Fjz3GtiCFmXRe5v%2BBdine8x5jkvoxSqs23lzMkyht81bbJGFwXx%2FiflzFG9o1JDl7YmgkBeBcsWC5rXviYPYxrAfvzksKXfQD%2FKb1n6G9stIOGt6dFQkLOQUAf%2FVXCRwZV3J%2BjaUbCqm%2FxIrAYvwdavJJPveVeqby6re%2B8TNIsDFxuBTzIDTYNJDIiRgWhkzd92lGxD1VocqhEJqx8BE1PlRDfbGtauwdTnK6iXqqE1dlPC4VWorfP2Pm4OmYp4hQxXFrxvFGWApnWcGmBSuOaVFwwoS9rXU6r8MkyTkFcxVM8uqa2qbxZYwshQi5MkgCWlZCU2wKrCqBIwbKY2A%2FIdWY1y682IB4OAjs6%2FuSIce2ikNNeBVUWO%2Fv%2FRbviGlalH9MlqwARSp92V%2FU2CvSt39LjdknsviUhBLhv6hZ80cq2GL8E4AnmCAblHajx%2F4c33JIPyeDpQ9PCI%2BZz23a4uGEeZ8EAXwqp1QxmmGCX40YRuaSsZsK%2Fs3jL1DStKIDbXiIl3KYYZH2MPgq5Gah%2BmEnMIGHmcAGOqUBj2xaNkFUhtjdZiiTe%2FfUoeEwdejl41t9veD2zysyXbxa%2F5qd0vQ%2FNBGheuVl55b4CyLU1zqglNw6aMJxEvuBaLhVj5rpBIZVl6BWQ5DYkPaLG1hzatm9VmZxTI7SLa0zNuFpOwKtChv89sXCIFYTWiD4dfQoBJkCxcrQ5kbefQd%2Fje7P4%2BWqwf%2FjhB3OAv4Pd2wdVsKJbnzMtL6C4pNCNxqjBucE&X-Amz-Signature=e36dc0c230a715995c247ec02dd12e673657c540dc4fb938cdb8170200e5920d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2VXBX2K%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDkXajL9wZwoiaEbGUjhNS%2FogkkD1WsdASsGDZtLhVaogIgVfwKThaxKF6JRWRBBLiqfQKRowyU34GGOp51WWMGNAMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMrmjLuP08MTBlBoCrcAyTPT1KY74nD%2BGIvAhanqgeRiwwfBfnjkP%2FKJK%2BODC81WSZz1452RQztqDRQsHsvQkr5%2BtoZGcNU6u3wQ3Mp3EDKoJmSUoH3k1i%2Fjz3GtiCFmXRe5v%2BBdine8x5jkvoxSqs23lzMkyht81bbJGFwXx%2FiflzFG9o1JDl7YmgkBeBcsWC5rXviYPYxrAfvzksKXfQD%2FKb1n6G9stIOGt6dFQkLOQUAf%2FVXCRwZV3J%2BjaUbCqm%2FxIrAYvwdavJJPveVeqby6re%2B8TNIsDFxuBTzIDTYNJDIiRgWhkzd92lGxD1VocqhEJqx8BE1PlRDfbGtauwdTnK6iXqqE1dlPC4VWorfP2Pm4OmYp4hQxXFrxvFGWApnWcGmBSuOaVFwwoS9rXU6r8MkyTkFcxVM8uqa2qbxZYwshQi5MkgCWlZCU2wKrCqBIwbKY2A%2FIdWY1y682IB4OAjs6%2FuSIce2ikNNeBVUWO%2Fv%2FRbviGlalH9MlqwARSp92V%2FU2CvSt39LjdknsviUhBLhv6hZ80cq2GL8E4AnmCAblHajx%2F4c33JIPyeDpQ9PCI%2BZz23a4uGEeZ8EAXwqp1QxmmGCX40YRuaSsZsK%2Fs3jL1DStKIDbXiIl3KYYZH2MPgq5Gah%2BmEnMIGHmcAGOqUBj2xaNkFUhtjdZiiTe%2FfUoeEwdejl41t9veD2zysyXbxa%2F5qd0vQ%2FNBGheuVl55b4CyLU1zqglNw6aMJxEvuBaLhVj5rpBIZVl6BWQ5DYkPaLG1hzatm9VmZxTI7SLa0zNuFpOwKtChv89sXCIFYTWiD4dfQoBJkCxcrQ5kbefQd%2Fje7P4%2BWqwf%2FjhB3OAv4Pd2wdVsKJbnzMtL6C4pNCNxqjBucE&X-Amz-Signature=3efbcd1b84ea61fb96c4192689ebdf81d788b76c055e130464afd7d9a154f2f9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2VXBX2K%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDkXajL9wZwoiaEbGUjhNS%2FogkkD1WsdASsGDZtLhVaogIgVfwKThaxKF6JRWRBBLiqfQKRowyU34GGOp51WWMGNAMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMrmjLuP08MTBlBoCrcAyTPT1KY74nD%2BGIvAhanqgeRiwwfBfnjkP%2FKJK%2BODC81WSZz1452RQztqDRQsHsvQkr5%2BtoZGcNU6u3wQ3Mp3EDKoJmSUoH3k1i%2Fjz3GtiCFmXRe5v%2BBdine8x5jkvoxSqs23lzMkyht81bbJGFwXx%2FiflzFG9o1JDl7YmgkBeBcsWC5rXviYPYxrAfvzksKXfQD%2FKb1n6G9stIOGt6dFQkLOQUAf%2FVXCRwZV3J%2BjaUbCqm%2FxIrAYvwdavJJPveVeqby6re%2B8TNIsDFxuBTzIDTYNJDIiRgWhkzd92lGxD1VocqhEJqx8BE1PlRDfbGtauwdTnK6iXqqE1dlPC4VWorfP2Pm4OmYp4hQxXFrxvFGWApnWcGmBSuOaVFwwoS9rXU6r8MkyTkFcxVM8uqa2qbxZYwshQi5MkgCWlZCU2wKrCqBIwbKY2A%2FIdWY1y682IB4OAjs6%2FuSIce2ikNNeBVUWO%2Fv%2FRbviGlalH9MlqwARSp92V%2FU2CvSt39LjdknsviUhBLhv6hZ80cq2GL8E4AnmCAblHajx%2F4c33JIPyeDpQ9PCI%2BZz23a4uGEeZ8EAXwqp1QxmmGCX40YRuaSsZsK%2Fs3jL1DStKIDbXiIl3KYYZH2MPgq5Gah%2BmEnMIGHmcAGOqUBj2xaNkFUhtjdZiiTe%2FfUoeEwdejl41t9veD2zysyXbxa%2F5qd0vQ%2FNBGheuVl55b4CyLU1zqglNw6aMJxEvuBaLhVj5rpBIZVl6BWQ5DYkPaLG1hzatm9VmZxTI7SLa0zNuFpOwKtChv89sXCIFYTWiD4dfQoBJkCxcrQ5kbefQd%2Fje7P4%2BWqwf%2FjhB3OAv4Pd2wdVsKJbnzMtL6C4pNCNxqjBucE&X-Amz-Signature=723160310ac57096e8db701d7b298c140cf71e4571583600597769fe7a5239a5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2VXBX2K%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T140819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDkXajL9wZwoiaEbGUjhNS%2FogkkD1WsdASsGDZtLhVaogIgVfwKThaxKF6JRWRBBLiqfQKRowyU34GGOp51WWMGNAMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIMrmjLuP08MTBlBoCrcAyTPT1KY74nD%2BGIvAhanqgeRiwwfBfnjkP%2FKJK%2BODC81WSZz1452RQztqDRQsHsvQkr5%2BtoZGcNU6u3wQ3Mp3EDKoJmSUoH3k1i%2Fjz3GtiCFmXRe5v%2BBdine8x5jkvoxSqs23lzMkyht81bbJGFwXx%2FiflzFG9o1JDl7YmgkBeBcsWC5rXviYPYxrAfvzksKXfQD%2FKb1n6G9stIOGt6dFQkLOQUAf%2FVXCRwZV3J%2BjaUbCqm%2FxIrAYvwdavJJPveVeqby6re%2B8TNIsDFxuBTzIDTYNJDIiRgWhkzd92lGxD1VocqhEJqx8BE1PlRDfbGtauwdTnK6iXqqE1dlPC4VWorfP2Pm4OmYp4hQxXFrxvFGWApnWcGmBSuOaVFwwoS9rXU6r8MkyTkFcxVM8uqa2qbxZYwshQi5MkgCWlZCU2wKrCqBIwbKY2A%2FIdWY1y682IB4OAjs6%2FuSIce2ikNNeBVUWO%2Fv%2FRbviGlalH9MlqwARSp92V%2FU2CvSt39LjdknsviUhBLhv6hZ80cq2GL8E4AnmCAblHajx%2F4c33JIPyeDpQ9PCI%2BZz23a4uGEeZ8EAXwqp1QxmmGCX40YRuaSsZsK%2Fs3jL1DStKIDbXiIl3KYYZH2MPgq5Gah%2BmEnMIGHmcAGOqUBj2xaNkFUhtjdZiiTe%2FfUoeEwdejl41t9veD2zysyXbxa%2F5qd0vQ%2FNBGheuVl55b4CyLU1zqglNw6aMJxEvuBaLhVj5rpBIZVl6BWQ5DYkPaLG1hzatm9VmZxTI7SLa0zNuFpOwKtChv89sXCIFYTWiD4dfQoBJkCxcrQ5kbefQd%2Fje7P4%2BWqwf%2FjhB3OAv4Pd2wdVsKJbnzMtL6C4pNCNxqjBucE&X-Amz-Signature=f19250eeae973b54e6f1222d4c3d0f1046d457e8344c6dcc3d575e5c68d2ed25&X-Amz-SignedHeaders=host&x-id=GetObject)
