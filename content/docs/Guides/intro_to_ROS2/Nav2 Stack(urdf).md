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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KBQ2S4P%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T080750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIEyV%2FnTxZdAgBVpt4rNBlWGj3TUmPx%2B1EDWQBFWgF9TrAiEAuP%2Fq6dTciTV%2FdsTa2AMgD2mHa99z2PQFb0JU0g9cFewq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDDgwzbz%2F%2FDMGfXlPzCrcAyys%2BOtxTqI4aOe884NFXVxl2nFyt82oIq7%2FKM2bgrkqMrpAwaJCM6eNiKHmIqLBdLmu%2FaVmf0grD%2B9zZuLU87KC5NkFB%2FQmw8Vx3jJ9zJ5wxiwFbMSjjfAPJqRbsofHqLFSiwGV02VPBz55jPdt%2By5hvZZCbOgu3qQbv4MSndwsoMOzggQbtGdKXYeVnsEd5OgiSet5CNW7JNhFmrUDO%2BTvxUIOtdYwAKX6DI57ty%2F3uOmHY9B86SDUf6L2V4Pb%2BK9Zlq0lqPhovWeNMXUsBReUrwW0Sok9ElWjlsjWUKVgEuYVl%2BhjsnpFA0owPGiyC7xMuhXR2eZt2xRflZIBvh3dJvapTKQFEeeV%2FmWURcnlVu2RNk8B58EE8GavNfX%2BpnXg19F1BUWt%2BFaj8nndcmo2QUOmeMn2AWfSM8h9xywwbRJAa%2BZsFmSO9eXTxCREcjoNoU6hy8bW7yQobXjf5gftxddbhUsJ0FixCWqMv%2BqgM3qDHfYe3Ulc11EvzeFoC0%2BpDd4WGQRvhqiEHX9cCQE8TGw1ys%2FgmlowX4hqP%2B7yTCoPGOq9DBEvLszDaKEaEBev0Inj5JYuIX4e%2BUJ5zR3qafciyaVjHYkTT5yAxSwZUYEN%2BeN9WW2QjRWjMODgr74GOqUBsMeeYDj80L8SlKcE0mT84wnQeXhs4zpzBGr6V%2FWMtdGS%2F1ESCy7dafNmeKM57d9r5HaGLL58nCoItis8cRBcVU7luK6RI7yWPMKL6Fx34%2BtCJ9gx18xs7SzkoRXq5ZhB5pEj2kcl2W4Ksa51xV5TTt4GVcW66qt4VwHBNzyyYGDJwV4jRvK4bmS4tlqtirFQXdI3tSZ070UJRfCrgiIWOTrd82Gj&X-Amz-Signature=c5ccda8ae929c63e98c21bd9df0a1272ab9a31c865602ea34ff073a6c6169306&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KBQ2S4P%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T080750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIEyV%2FnTxZdAgBVpt4rNBlWGj3TUmPx%2B1EDWQBFWgF9TrAiEAuP%2Fq6dTciTV%2FdsTa2AMgD2mHa99z2PQFb0JU0g9cFewq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDDgwzbz%2F%2FDMGfXlPzCrcAyys%2BOtxTqI4aOe884NFXVxl2nFyt82oIq7%2FKM2bgrkqMrpAwaJCM6eNiKHmIqLBdLmu%2FaVmf0grD%2B9zZuLU87KC5NkFB%2FQmw8Vx3jJ9zJ5wxiwFbMSjjfAPJqRbsofHqLFSiwGV02VPBz55jPdt%2By5hvZZCbOgu3qQbv4MSndwsoMOzggQbtGdKXYeVnsEd5OgiSet5CNW7JNhFmrUDO%2BTvxUIOtdYwAKX6DI57ty%2F3uOmHY9B86SDUf6L2V4Pb%2BK9Zlq0lqPhovWeNMXUsBReUrwW0Sok9ElWjlsjWUKVgEuYVl%2BhjsnpFA0owPGiyC7xMuhXR2eZt2xRflZIBvh3dJvapTKQFEeeV%2FmWURcnlVu2RNk8B58EE8GavNfX%2BpnXg19F1BUWt%2BFaj8nndcmo2QUOmeMn2AWfSM8h9xywwbRJAa%2BZsFmSO9eXTxCREcjoNoU6hy8bW7yQobXjf5gftxddbhUsJ0FixCWqMv%2BqgM3qDHfYe3Ulc11EvzeFoC0%2BpDd4WGQRvhqiEHX9cCQE8TGw1ys%2FgmlowX4hqP%2B7yTCoPGOq9DBEvLszDaKEaEBev0Inj5JYuIX4e%2BUJ5zR3qafciyaVjHYkTT5yAxSwZUYEN%2BeN9WW2QjRWjMODgr74GOqUBsMeeYDj80L8SlKcE0mT84wnQeXhs4zpzBGr6V%2FWMtdGS%2F1ESCy7dafNmeKM57d9r5HaGLL58nCoItis8cRBcVU7luK6RI7yWPMKL6Fx34%2BtCJ9gx18xs7SzkoRXq5ZhB5pEj2kcl2W4Ksa51xV5TTt4GVcW66qt4VwHBNzyyYGDJwV4jRvK4bmS4tlqtirFQXdI3tSZ070UJRfCrgiIWOTrd82Gj&X-Amz-Signature=86425a2bfb93432bde985804a5f2e698086f77f2aeeae0f50931e871ac03363a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KBQ2S4P%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T080750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIEyV%2FnTxZdAgBVpt4rNBlWGj3TUmPx%2B1EDWQBFWgF9TrAiEAuP%2Fq6dTciTV%2FdsTa2AMgD2mHa99z2PQFb0JU0g9cFewq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDDgwzbz%2F%2FDMGfXlPzCrcAyys%2BOtxTqI4aOe884NFXVxl2nFyt82oIq7%2FKM2bgrkqMrpAwaJCM6eNiKHmIqLBdLmu%2FaVmf0grD%2B9zZuLU87KC5NkFB%2FQmw8Vx3jJ9zJ5wxiwFbMSjjfAPJqRbsofHqLFSiwGV02VPBz55jPdt%2By5hvZZCbOgu3qQbv4MSndwsoMOzggQbtGdKXYeVnsEd5OgiSet5CNW7JNhFmrUDO%2BTvxUIOtdYwAKX6DI57ty%2F3uOmHY9B86SDUf6L2V4Pb%2BK9Zlq0lqPhovWeNMXUsBReUrwW0Sok9ElWjlsjWUKVgEuYVl%2BhjsnpFA0owPGiyC7xMuhXR2eZt2xRflZIBvh3dJvapTKQFEeeV%2FmWURcnlVu2RNk8B58EE8GavNfX%2BpnXg19F1BUWt%2BFaj8nndcmo2QUOmeMn2AWfSM8h9xywwbRJAa%2BZsFmSO9eXTxCREcjoNoU6hy8bW7yQobXjf5gftxddbhUsJ0FixCWqMv%2BqgM3qDHfYe3Ulc11EvzeFoC0%2BpDd4WGQRvhqiEHX9cCQE8TGw1ys%2FgmlowX4hqP%2B7yTCoPGOq9DBEvLszDaKEaEBev0Inj5JYuIX4e%2BUJ5zR3qafciyaVjHYkTT5yAxSwZUYEN%2BeN9WW2QjRWjMODgr74GOqUBsMeeYDj80L8SlKcE0mT84wnQeXhs4zpzBGr6V%2FWMtdGS%2F1ESCy7dafNmeKM57d9r5HaGLL58nCoItis8cRBcVU7luK6RI7yWPMKL6Fx34%2BtCJ9gx18xs7SzkoRXq5ZhB5pEj2kcl2W4Ksa51xV5TTt4GVcW66qt4VwHBNzyyYGDJwV4jRvK4bmS4tlqtirFQXdI3tSZ070UJRfCrgiIWOTrd82Gj&X-Amz-Signature=78525ee3f588232e0d2169e3a30931b86677446c2dc0a7b9ed5108d5c183d43c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KBQ2S4P%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T080750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIEyV%2FnTxZdAgBVpt4rNBlWGj3TUmPx%2B1EDWQBFWgF9TrAiEAuP%2Fq6dTciTV%2FdsTa2AMgD2mHa99z2PQFb0JU0g9cFewq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDDgwzbz%2F%2FDMGfXlPzCrcAyys%2BOtxTqI4aOe884NFXVxl2nFyt82oIq7%2FKM2bgrkqMrpAwaJCM6eNiKHmIqLBdLmu%2FaVmf0grD%2B9zZuLU87KC5NkFB%2FQmw8Vx3jJ9zJ5wxiwFbMSjjfAPJqRbsofHqLFSiwGV02VPBz55jPdt%2By5hvZZCbOgu3qQbv4MSndwsoMOzggQbtGdKXYeVnsEd5OgiSet5CNW7JNhFmrUDO%2BTvxUIOtdYwAKX6DI57ty%2F3uOmHY9B86SDUf6L2V4Pb%2BK9Zlq0lqPhovWeNMXUsBReUrwW0Sok9ElWjlsjWUKVgEuYVl%2BhjsnpFA0owPGiyC7xMuhXR2eZt2xRflZIBvh3dJvapTKQFEeeV%2FmWURcnlVu2RNk8B58EE8GavNfX%2BpnXg19F1BUWt%2BFaj8nndcmo2QUOmeMn2AWfSM8h9xywwbRJAa%2BZsFmSO9eXTxCREcjoNoU6hy8bW7yQobXjf5gftxddbhUsJ0FixCWqMv%2BqgM3qDHfYe3Ulc11EvzeFoC0%2BpDd4WGQRvhqiEHX9cCQE8TGw1ys%2FgmlowX4hqP%2B7yTCoPGOq9DBEvLszDaKEaEBev0Inj5JYuIX4e%2BUJ5zR3qafciyaVjHYkTT5yAxSwZUYEN%2BeN9WW2QjRWjMODgr74GOqUBsMeeYDj80L8SlKcE0mT84wnQeXhs4zpzBGr6V%2FWMtdGS%2F1ESCy7dafNmeKM57d9r5HaGLL58nCoItis8cRBcVU7luK6RI7yWPMKL6Fx34%2BtCJ9gx18xs7SzkoRXq5ZhB5pEj2kcl2W4Ksa51xV5TTt4GVcW66qt4VwHBNzyyYGDJwV4jRvK4bmS4tlqtirFQXdI3tSZ070UJRfCrgiIWOTrd82Gj&X-Amz-Signature=a5402b41ae2d568ff56f73f54e45e14f6fa96a41d95d68d171337e88f4252148&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KBQ2S4P%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T080750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIEyV%2FnTxZdAgBVpt4rNBlWGj3TUmPx%2B1EDWQBFWgF9TrAiEAuP%2Fq6dTciTV%2FdsTa2AMgD2mHa99z2PQFb0JU0g9cFewq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDDgwzbz%2F%2FDMGfXlPzCrcAyys%2BOtxTqI4aOe884NFXVxl2nFyt82oIq7%2FKM2bgrkqMrpAwaJCM6eNiKHmIqLBdLmu%2FaVmf0grD%2B9zZuLU87KC5NkFB%2FQmw8Vx3jJ9zJ5wxiwFbMSjjfAPJqRbsofHqLFSiwGV02VPBz55jPdt%2By5hvZZCbOgu3qQbv4MSndwsoMOzggQbtGdKXYeVnsEd5OgiSet5CNW7JNhFmrUDO%2BTvxUIOtdYwAKX6DI57ty%2F3uOmHY9B86SDUf6L2V4Pb%2BK9Zlq0lqPhovWeNMXUsBReUrwW0Sok9ElWjlsjWUKVgEuYVl%2BhjsnpFA0owPGiyC7xMuhXR2eZt2xRflZIBvh3dJvapTKQFEeeV%2FmWURcnlVu2RNk8B58EE8GavNfX%2BpnXg19F1BUWt%2BFaj8nndcmo2QUOmeMn2AWfSM8h9xywwbRJAa%2BZsFmSO9eXTxCREcjoNoU6hy8bW7yQobXjf5gftxddbhUsJ0FixCWqMv%2BqgM3qDHfYe3Ulc11EvzeFoC0%2BpDd4WGQRvhqiEHX9cCQE8TGw1ys%2FgmlowX4hqP%2B7yTCoPGOq9DBEvLszDaKEaEBev0Inj5JYuIX4e%2BUJ5zR3qafciyaVjHYkTT5yAxSwZUYEN%2BeN9WW2QjRWjMODgr74GOqUBsMeeYDj80L8SlKcE0mT84wnQeXhs4zpzBGr6V%2FWMtdGS%2F1ESCy7dafNmeKM57d9r5HaGLL58nCoItis8cRBcVU7luK6RI7yWPMKL6Fx34%2BtCJ9gx18xs7SzkoRXq5ZhB5pEj2kcl2W4Ksa51xV5TTt4GVcW66qt4VwHBNzyyYGDJwV4jRvK4bmS4tlqtirFQXdI3tSZ070UJRfCrgiIWOTrd82Gj&X-Amz-Signature=090fa93b3839775695bd796d65d47368cd6435f6a380da2a9150f7bd65c97c25&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KBQ2S4P%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T080750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIEyV%2FnTxZdAgBVpt4rNBlWGj3TUmPx%2B1EDWQBFWgF9TrAiEAuP%2Fq6dTciTV%2FdsTa2AMgD2mHa99z2PQFb0JU0g9cFewq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDDgwzbz%2F%2FDMGfXlPzCrcAyys%2BOtxTqI4aOe884NFXVxl2nFyt82oIq7%2FKM2bgrkqMrpAwaJCM6eNiKHmIqLBdLmu%2FaVmf0grD%2B9zZuLU87KC5NkFB%2FQmw8Vx3jJ9zJ5wxiwFbMSjjfAPJqRbsofHqLFSiwGV02VPBz55jPdt%2By5hvZZCbOgu3qQbv4MSndwsoMOzggQbtGdKXYeVnsEd5OgiSet5CNW7JNhFmrUDO%2BTvxUIOtdYwAKX6DI57ty%2F3uOmHY9B86SDUf6L2V4Pb%2BK9Zlq0lqPhovWeNMXUsBReUrwW0Sok9ElWjlsjWUKVgEuYVl%2BhjsnpFA0owPGiyC7xMuhXR2eZt2xRflZIBvh3dJvapTKQFEeeV%2FmWURcnlVu2RNk8B58EE8GavNfX%2BpnXg19F1BUWt%2BFaj8nndcmo2QUOmeMn2AWfSM8h9xywwbRJAa%2BZsFmSO9eXTxCREcjoNoU6hy8bW7yQobXjf5gftxddbhUsJ0FixCWqMv%2BqgM3qDHfYe3Ulc11EvzeFoC0%2BpDd4WGQRvhqiEHX9cCQE8TGw1ys%2FgmlowX4hqP%2B7yTCoPGOq9DBEvLszDaKEaEBev0Inj5JYuIX4e%2BUJ5zR3qafciyaVjHYkTT5yAxSwZUYEN%2BeN9WW2QjRWjMODgr74GOqUBsMeeYDj80L8SlKcE0mT84wnQeXhs4zpzBGr6V%2FWMtdGS%2F1ESCy7dafNmeKM57d9r5HaGLL58nCoItis8cRBcVU7luK6RI7yWPMKL6Fx34%2BtCJ9gx18xs7SzkoRXq5ZhB5pEj2kcl2W4Ksa51xV5TTt4GVcW66qt4VwHBNzyyYGDJwV4jRvK4bmS4tlqtirFQXdI3tSZ070UJRfCrgiIWOTrd82Gj&X-Amz-Signature=6dd47ccfb818227930b203d41cf956bce6cafb60ac241cc0f7a32c46ac603499&X-Amz-SignedHeaders=host&x-id=GetObject)
