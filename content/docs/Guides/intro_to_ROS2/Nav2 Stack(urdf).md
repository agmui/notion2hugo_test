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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNBI6WNM%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T170212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCIWcMxcz8BNX1%2Bm%2BOmSwIMFjCyvOD2IeoCjtOcUSbzrgIgOQDqVI8VUINps3ZDUlquMKva5QtpY1BkuPUehj49bREq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDEq2xzJPZTMkAs3sFyrcAw13mWoA6bHquks0Rk8zlmE9hLAVMqtyY8H3j%2Fti7%2F4om9%2FFhx8x6SsFv5JM72hsPIJICVb37mZOmX6UNP2Ik%2FtxrWhpAZtMbmfgtp1xSAdIPOTwGwGTGmXNxP0QQku27T0xYccmFVGvcjOjZi1cntPSgX7l%2FJoiolbKR9R8kGAJeBUuHAfuAKvRX5ZTgf2OaJIFG5a26KvTrTmSMCgM%2BY1eR4yMgSBnkM79OMIdnDMQiVyGbYumxHW%2FytrDBEidtGzRNkNRiiS4FQedxktP41qvme8Du9Ei47CN%2BMJuS2RTJkf%2BskzeJPB4NWCwpH7Rry5liszDyUjGp45woCcaq04zM2Ooes73pox826xKnyoBsBtsPUnADbptvyHxwpTUsx2gumTAV0%2FDOUhBSqu0xTi5olrvLaTM1sZjVOKpV3ViPOwUbos1ggOyO6zIaNCSkcs5LGT5B3iRh%2BZjAXKPZhVycKzFbM5xHVN6QbjIO9ey4ARAeESIiiLKlyDwgBNv40z%2Bwuv9IXj74%2BWWSOYBLp1UCTRg3qchjU%2BsBb8QJmqK4kRqvcG695GP5R9OsvHZGoGYTnr5LXKgql0DYwuegOmLN50Pr5UE3OVvznuHXca%2BdEvoX%2FuoUR1FlOxaMKOgoL8GOqUBZZp8g70xMUvw50n2zwHNOa9tyLXDbE2bo0k6O87EIrw2PQXqe7ChngPXnKU2sKNOdbeS0sBS6VNviKu8CVfS26ZvCZba8jv%2FcHJTPB8RMHbzhxg%2F8shH0%2FOJt9hymuPkrSpxZjNJIFV0%2FTQly%2BhApHvnjygNG1E2OoA%2Bh8gI%2FBmzr1OcC4QJD6%2FjbWnISzmbGlIhCIqLwTDdOufopqUoGbluFkMV&X-Amz-Signature=a557f2ae47dcc99b379db14c670dc120098c3c4bdf403fcefbceb3bef717f4e4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNBI6WNM%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T170212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCIWcMxcz8BNX1%2Bm%2BOmSwIMFjCyvOD2IeoCjtOcUSbzrgIgOQDqVI8VUINps3ZDUlquMKva5QtpY1BkuPUehj49bREq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDEq2xzJPZTMkAs3sFyrcAw13mWoA6bHquks0Rk8zlmE9hLAVMqtyY8H3j%2Fti7%2F4om9%2FFhx8x6SsFv5JM72hsPIJICVb37mZOmX6UNP2Ik%2FtxrWhpAZtMbmfgtp1xSAdIPOTwGwGTGmXNxP0QQku27T0xYccmFVGvcjOjZi1cntPSgX7l%2FJoiolbKR9R8kGAJeBUuHAfuAKvRX5ZTgf2OaJIFG5a26KvTrTmSMCgM%2BY1eR4yMgSBnkM79OMIdnDMQiVyGbYumxHW%2FytrDBEidtGzRNkNRiiS4FQedxktP41qvme8Du9Ei47CN%2BMJuS2RTJkf%2BskzeJPB4NWCwpH7Rry5liszDyUjGp45woCcaq04zM2Ooes73pox826xKnyoBsBtsPUnADbptvyHxwpTUsx2gumTAV0%2FDOUhBSqu0xTi5olrvLaTM1sZjVOKpV3ViPOwUbos1ggOyO6zIaNCSkcs5LGT5B3iRh%2BZjAXKPZhVycKzFbM5xHVN6QbjIO9ey4ARAeESIiiLKlyDwgBNv40z%2Bwuv9IXj74%2BWWSOYBLp1UCTRg3qchjU%2BsBb8QJmqK4kRqvcG695GP5R9OsvHZGoGYTnr5LXKgql0DYwuegOmLN50Pr5UE3OVvznuHXca%2BdEvoX%2FuoUR1FlOxaMKOgoL8GOqUBZZp8g70xMUvw50n2zwHNOa9tyLXDbE2bo0k6O87EIrw2PQXqe7ChngPXnKU2sKNOdbeS0sBS6VNviKu8CVfS26ZvCZba8jv%2FcHJTPB8RMHbzhxg%2F8shH0%2FOJt9hymuPkrSpxZjNJIFV0%2FTQly%2BhApHvnjygNG1E2OoA%2Bh8gI%2FBmzr1OcC4QJD6%2FjbWnISzmbGlIhCIqLwTDdOufopqUoGbluFkMV&X-Amz-Signature=a89d66e77f94a11424294f50df6b6509acf3cd21dd91a73891a8075330c60a3a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNBI6WNM%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T170212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCIWcMxcz8BNX1%2Bm%2BOmSwIMFjCyvOD2IeoCjtOcUSbzrgIgOQDqVI8VUINps3ZDUlquMKva5QtpY1BkuPUehj49bREq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDEq2xzJPZTMkAs3sFyrcAw13mWoA6bHquks0Rk8zlmE9hLAVMqtyY8H3j%2Fti7%2F4om9%2FFhx8x6SsFv5JM72hsPIJICVb37mZOmX6UNP2Ik%2FtxrWhpAZtMbmfgtp1xSAdIPOTwGwGTGmXNxP0QQku27T0xYccmFVGvcjOjZi1cntPSgX7l%2FJoiolbKR9R8kGAJeBUuHAfuAKvRX5ZTgf2OaJIFG5a26KvTrTmSMCgM%2BY1eR4yMgSBnkM79OMIdnDMQiVyGbYumxHW%2FytrDBEidtGzRNkNRiiS4FQedxktP41qvme8Du9Ei47CN%2BMJuS2RTJkf%2BskzeJPB4NWCwpH7Rry5liszDyUjGp45woCcaq04zM2Ooes73pox826xKnyoBsBtsPUnADbptvyHxwpTUsx2gumTAV0%2FDOUhBSqu0xTi5olrvLaTM1sZjVOKpV3ViPOwUbos1ggOyO6zIaNCSkcs5LGT5B3iRh%2BZjAXKPZhVycKzFbM5xHVN6QbjIO9ey4ARAeESIiiLKlyDwgBNv40z%2Bwuv9IXj74%2BWWSOYBLp1UCTRg3qchjU%2BsBb8QJmqK4kRqvcG695GP5R9OsvHZGoGYTnr5LXKgql0DYwuegOmLN50Pr5UE3OVvznuHXca%2BdEvoX%2FuoUR1FlOxaMKOgoL8GOqUBZZp8g70xMUvw50n2zwHNOa9tyLXDbE2bo0k6O87EIrw2PQXqe7ChngPXnKU2sKNOdbeS0sBS6VNviKu8CVfS26ZvCZba8jv%2FcHJTPB8RMHbzhxg%2F8shH0%2FOJt9hymuPkrSpxZjNJIFV0%2FTQly%2BhApHvnjygNG1E2OoA%2Bh8gI%2FBmzr1OcC4QJD6%2FjbWnISzmbGlIhCIqLwTDdOufopqUoGbluFkMV&X-Amz-Signature=89202a1f6dde1766ada602a263bb89f97700cf0344e4dd8095e2733e2e0c6265&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNBI6WNM%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T170212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCIWcMxcz8BNX1%2Bm%2BOmSwIMFjCyvOD2IeoCjtOcUSbzrgIgOQDqVI8VUINps3ZDUlquMKva5QtpY1BkuPUehj49bREq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDEq2xzJPZTMkAs3sFyrcAw13mWoA6bHquks0Rk8zlmE9hLAVMqtyY8H3j%2Fti7%2F4om9%2FFhx8x6SsFv5JM72hsPIJICVb37mZOmX6UNP2Ik%2FtxrWhpAZtMbmfgtp1xSAdIPOTwGwGTGmXNxP0QQku27T0xYccmFVGvcjOjZi1cntPSgX7l%2FJoiolbKR9R8kGAJeBUuHAfuAKvRX5ZTgf2OaJIFG5a26KvTrTmSMCgM%2BY1eR4yMgSBnkM79OMIdnDMQiVyGbYumxHW%2FytrDBEidtGzRNkNRiiS4FQedxktP41qvme8Du9Ei47CN%2BMJuS2RTJkf%2BskzeJPB4NWCwpH7Rry5liszDyUjGp45woCcaq04zM2Ooes73pox826xKnyoBsBtsPUnADbptvyHxwpTUsx2gumTAV0%2FDOUhBSqu0xTi5olrvLaTM1sZjVOKpV3ViPOwUbos1ggOyO6zIaNCSkcs5LGT5B3iRh%2BZjAXKPZhVycKzFbM5xHVN6QbjIO9ey4ARAeESIiiLKlyDwgBNv40z%2Bwuv9IXj74%2BWWSOYBLp1UCTRg3qchjU%2BsBb8QJmqK4kRqvcG695GP5R9OsvHZGoGYTnr5LXKgql0DYwuegOmLN50Pr5UE3OVvznuHXca%2BdEvoX%2FuoUR1FlOxaMKOgoL8GOqUBZZp8g70xMUvw50n2zwHNOa9tyLXDbE2bo0k6O87EIrw2PQXqe7ChngPXnKU2sKNOdbeS0sBS6VNviKu8CVfS26ZvCZba8jv%2FcHJTPB8RMHbzhxg%2F8shH0%2FOJt9hymuPkrSpxZjNJIFV0%2FTQly%2BhApHvnjygNG1E2OoA%2Bh8gI%2FBmzr1OcC4QJD6%2FjbWnISzmbGlIhCIqLwTDdOufopqUoGbluFkMV&X-Amz-Signature=cd0e28a4b63b97fa185aa00de70950326028faeb88fa26badf0ccf21cbacaf88&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNBI6WNM%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T170212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCIWcMxcz8BNX1%2Bm%2BOmSwIMFjCyvOD2IeoCjtOcUSbzrgIgOQDqVI8VUINps3ZDUlquMKva5QtpY1BkuPUehj49bREq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDEq2xzJPZTMkAs3sFyrcAw13mWoA6bHquks0Rk8zlmE9hLAVMqtyY8H3j%2Fti7%2F4om9%2FFhx8x6SsFv5JM72hsPIJICVb37mZOmX6UNP2Ik%2FtxrWhpAZtMbmfgtp1xSAdIPOTwGwGTGmXNxP0QQku27T0xYccmFVGvcjOjZi1cntPSgX7l%2FJoiolbKR9R8kGAJeBUuHAfuAKvRX5ZTgf2OaJIFG5a26KvTrTmSMCgM%2BY1eR4yMgSBnkM79OMIdnDMQiVyGbYumxHW%2FytrDBEidtGzRNkNRiiS4FQedxktP41qvme8Du9Ei47CN%2BMJuS2RTJkf%2BskzeJPB4NWCwpH7Rry5liszDyUjGp45woCcaq04zM2Ooes73pox826xKnyoBsBtsPUnADbptvyHxwpTUsx2gumTAV0%2FDOUhBSqu0xTi5olrvLaTM1sZjVOKpV3ViPOwUbos1ggOyO6zIaNCSkcs5LGT5B3iRh%2BZjAXKPZhVycKzFbM5xHVN6QbjIO9ey4ARAeESIiiLKlyDwgBNv40z%2Bwuv9IXj74%2BWWSOYBLp1UCTRg3qchjU%2BsBb8QJmqK4kRqvcG695GP5R9OsvHZGoGYTnr5LXKgql0DYwuegOmLN50Pr5UE3OVvznuHXca%2BdEvoX%2FuoUR1FlOxaMKOgoL8GOqUBZZp8g70xMUvw50n2zwHNOa9tyLXDbE2bo0k6O87EIrw2PQXqe7ChngPXnKU2sKNOdbeS0sBS6VNviKu8CVfS26ZvCZba8jv%2FcHJTPB8RMHbzhxg%2F8shH0%2FOJt9hymuPkrSpxZjNJIFV0%2FTQly%2BhApHvnjygNG1E2OoA%2Bh8gI%2FBmzr1OcC4QJD6%2FjbWnISzmbGlIhCIqLwTDdOufopqUoGbluFkMV&X-Amz-Signature=9c25ee7dc089aa5a44e34652edbc8ff36e9853a44ac0b635b148b3d3f8a8ba76&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNBI6WNM%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T170212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCIWcMxcz8BNX1%2Bm%2BOmSwIMFjCyvOD2IeoCjtOcUSbzrgIgOQDqVI8VUINps3ZDUlquMKva5QtpY1BkuPUehj49bREq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDEq2xzJPZTMkAs3sFyrcAw13mWoA6bHquks0Rk8zlmE9hLAVMqtyY8H3j%2Fti7%2F4om9%2FFhx8x6SsFv5JM72hsPIJICVb37mZOmX6UNP2Ik%2FtxrWhpAZtMbmfgtp1xSAdIPOTwGwGTGmXNxP0QQku27T0xYccmFVGvcjOjZi1cntPSgX7l%2FJoiolbKR9R8kGAJeBUuHAfuAKvRX5ZTgf2OaJIFG5a26KvTrTmSMCgM%2BY1eR4yMgSBnkM79OMIdnDMQiVyGbYumxHW%2FytrDBEidtGzRNkNRiiS4FQedxktP41qvme8Du9Ei47CN%2BMJuS2RTJkf%2BskzeJPB4NWCwpH7Rry5liszDyUjGp45woCcaq04zM2Ooes73pox826xKnyoBsBtsPUnADbptvyHxwpTUsx2gumTAV0%2FDOUhBSqu0xTi5olrvLaTM1sZjVOKpV3ViPOwUbos1ggOyO6zIaNCSkcs5LGT5B3iRh%2BZjAXKPZhVycKzFbM5xHVN6QbjIO9ey4ARAeESIiiLKlyDwgBNv40z%2Bwuv9IXj74%2BWWSOYBLp1UCTRg3qchjU%2BsBb8QJmqK4kRqvcG695GP5R9OsvHZGoGYTnr5LXKgql0DYwuegOmLN50Pr5UE3OVvznuHXca%2BdEvoX%2FuoUR1FlOxaMKOgoL8GOqUBZZp8g70xMUvw50n2zwHNOa9tyLXDbE2bo0k6O87EIrw2PQXqe7ChngPXnKU2sKNOdbeS0sBS6VNviKu8CVfS26ZvCZba8jv%2FcHJTPB8RMHbzhxg%2F8shH0%2FOJt9hymuPkrSpxZjNJIFV0%2FTQly%2BhApHvnjygNG1E2OoA%2Bh8gI%2FBmzr1OcC4QJD6%2FjbWnISzmbGlIhCIqLwTDdOufopqUoGbluFkMV&X-Amz-Signature=28644298d67dd8dc62db04a7309524590e99313de8c6771999745face382514d&X-Amz-SignedHeaders=host&x-id=GetObject)
