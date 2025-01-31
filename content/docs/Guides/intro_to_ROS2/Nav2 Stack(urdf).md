---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X772GD3A%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T061026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4RYjd283jBZ4QF4%2F6X4e3cKD5FQtlHKZRe3ek2%2B0BmwIgVQgk6tsADDGNiktnfabLFkwrULT0uD1bNOxKdwkY3N4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJtforZl1id5rnVXyrcA2G6vbSDV1Z7mYNGQl92UUBl6ZfTUzknjLDT24bqr6I3TG1Z6Ghpct6oq7gMtOppUubu5KNcayllJFtsAs9JPMGaI%2F9bybB7JwhpsbtSh6CYaAkFNl2pFFWbrzh%2BBFPbqLO0bFj6viCCFCH1glhjbBJem%2FMRiztZknHoMG%2FMjWh6F14lvN%2F0VXsQ1cQOYmOrz%2BcYjKvsJgpWoyeZ2Mx7RUsPBSchen0BqIJ5PezD9etGoOLP5vmZXVgVLuT1Jww9gWbnkqpP5eCpdgcaUl6UX2bwJk8g3gYE0lgS6uEJtjaQv2pW7LnFtnVjT8kRDD19Qj9CGqT%2B6ZX6mWOgOe0Z4tkn7%2FulOZejNz5afS%2BukuTRw5nNjvZymKQlIydReGQ1Jl8D5LGNetJg%2BGA8q7gTcFNoiRGYwajSNWRXdRkoJp5xScGpzbSG%2FSOrDf6NwEGr5E1597UuQGXXCIy9B%2FaONLFHcuIq03xitQtiM0FSHaH9SZ7RZlz4u%2FEQY8QSAPYmjkn8M%2FZanr8XNWelpXe7ZI8ek8c1LoL06ZC3PAgSHwouPyhofJPCQRkMTmXDiS8MfgcNTawGoE%2FbAQqZUyc%2BSH6V7bOwVVUgLmXDAOqh9lmSEVkG%2BYGrYARo61YvMKfS8LwGOqUB1jwHvQVPRxdH5xQ0M7sfFJ6foyoFkvABM9et2jse%2BZi6ZGGA5IQBRn3eG2EupavFldRZUZPllIRwjg1R7W6spSseS1Id97sDUxxqShoBtSI417M3yIDgHHDas%2BNN%2FJ0WuFHmiD7vmLHL4NLQYwCUcv8acmTmtcwHMa0of0K8IUG8oNhePWMhqmMPjsafOa1Ne%2BT7zqsoBhuAjf7tO0eieLKdguRY&X-Amz-Signature=db67cd5b2d2f1bca93bf6ecd5f7cd1001447607605cf5bf191f1a8c377d30722&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X772GD3A%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T061026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4RYjd283jBZ4QF4%2F6X4e3cKD5FQtlHKZRe3ek2%2B0BmwIgVQgk6tsADDGNiktnfabLFkwrULT0uD1bNOxKdwkY3N4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJtforZl1id5rnVXyrcA2G6vbSDV1Z7mYNGQl92UUBl6ZfTUzknjLDT24bqr6I3TG1Z6Ghpct6oq7gMtOppUubu5KNcayllJFtsAs9JPMGaI%2F9bybB7JwhpsbtSh6CYaAkFNl2pFFWbrzh%2BBFPbqLO0bFj6viCCFCH1glhjbBJem%2FMRiztZknHoMG%2FMjWh6F14lvN%2F0VXsQ1cQOYmOrz%2BcYjKvsJgpWoyeZ2Mx7RUsPBSchen0BqIJ5PezD9etGoOLP5vmZXVgVLuT1Jww9gWbnkqpP5eCpdgcaUl6UX2bwJk8g3gYE0lgS6uEJtjaQv2pW7LnFtnVjT8kRDD19Qj9CGqT%2B6ZX6mWOgOe0Z4tkn7%2FulOZejNz5afS%2BukuTRw5nNjvZymKQlIydReGQ1Jl8D5LGNetJg%2BGA8q7gTcFNoiRGYwajSNWRXdRkoJp5xScGpzbSG%2FSOrDf6NwEGr5E1597UuQGXXCIy9B%2FaONLFHcuIq03xitQtiM0FSHaH9SZ7RZlz4u%2FEQY8QSAPYmjkn8M%2FZanr8XNWelpXe7ZI8ek8c1LoL06ZC3PAgSHwouPyhofJPCQRkMTmXDiS8MfgcNTawGoE%2FbAQqZUyc%2BSH6V7bOwVVUgLmXDAOqh9lmSEVkG%2BYGrYARo61YvMKfS8LwGOqUB1jwHvQVPRxdH5xQ0M7sfFJ6foyoFkvABM9et2jse%2BZi6ZGGA5IQBRn3eG2EupavFldRZUZPllIRwjg1R7W6spSseS1Id97sDUxxqShoBtSI417M3yIDgHHDas%2BNN%2FJ0WuFHmiD7vmLHL4NLQYwCUcv8acmTmtcwHMa0of0K8IUG8oNhePWMhqmMPjsafOa1Ne%2BT7zqsoBhuAjf7tO0eieLKdguRY&X-Amz-Signature=3afb71685b17cdb8bfd3a46389ad6b4747781252381caa039007e4769b66ad0a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X772GD3A%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T061026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4RYjd283jBZ4QF4%2F6X4e3cKD5FQtlHKZRe3ek2%2B0BmwIgVQgk6tsADDGNiktnfabLFkwrULT0uD1bNOxKdwkY3N4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJtforZl1id5rnVXyrcA2G6vbSDV1Z7mYNGQl92UUBl6ZfTUzknjLDT24bqr6I3TG1Z6Ghpct6oq7gMtOppUubu5KNcayllJFtsAs9JPMGaI%2F9bybB7JwhpsbtSh6CYaAkFNl2pFFWbrzh%2BBFPbqLO0bFj6viCCFCH1glhjbBJem%2FMRiztZknHoMG%2FMjWh6F14lvN%2F0VXsQ1cQOYmOrz%2BcYjKvsJgpWoyeZ2Mx7RUsPBSchen0BqIJ5PezD9etGoOLP5vmZXVgVLuT1Jww9gWbnkqpP5eCpdgcaUl6UX2bwJk8g3gYE0lgS6uEJtjaQv2pW7LnFtnVjT8kRDD19Qj9CGqT%2B6ZX6mWOgOe0Z4tkn7%2FulOZejNz5afS%2BukuTRw5nNjvZymKQlIydReGQ1Jl8D5LGNetJg%2BGA8q7gTcFNoiRGYwajSNWRXdRkoJp5xScGpzbSG%2FSOrDf6NwEGr5E1597UuQGXXCIy9B%2FaONLFHcuIq03xitQtiM0FSHaH9SZ7RZlz4u%2FEQY8QSAPYmjkn8M%2FZanr8XNWelpXe7ZI8ek8c1LoL06ZC3PAgSHwouPyhofJPCQRkMTmXDiS8MfgcNTawGoE%2FbAQqZUyc%2BSH6V7bOwVVUgLmXDAOqh9lmSEVkG%2BYGrYARo61YvMKfS8LwGOqUB1jwHvQVPRxdH5xQ0M7sfFJ6foyoFkvABM9et2jse%2BZi6ZGGA5IQBRn3eG2EupavFldRZUZPllIRwjg1R7W6spSseS1Id97sDUxxqShoBtSI417M3yIDgHHDas%2BNN%2FJ0WuFHmiD7vmLHL4NLQYwCUcv8acmTmtcwHMa0of0K8IUG8oNhePWMhqmMPjsafOa1Ne%2BT7zqsoBhuAjf7tO0eieLKdguRY&X-Amz-Signature=68b0ed24f8ce537db36f958a37955e78974cbd43dd4da1699e30783dbf7358e9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X772GD3A%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T061026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4RYjd283jBZ4QF4%2F6X4e3cKD5FQtlHKZRe3ek2%2B0BmwIgVQgk6tsADDGNiktnfabLFkwrULT0uD1bNOxKdwkY3N4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJtforZl1id5rnVXyrcA2G6vbSDV1Z7mYNGQl92UUBl6ZfTUzknjLDT24bqr6I3TG1Z6Ghpct6oq7gMtOppUubu5KNcayllJFtsAs9JPMGaI%2F9bybB7JwhpsbtSh6CYaAkFNl2pFFWbrzh%2BBFPbqLO0bFj6viCCFCH1glhjbBJem%2FMRiztZknHoMG%2FMjWh6F14lvN%2F0VXsQ1cQOYmOrz%2BcYjKvsJgpWoyeZ2Mx7RUsPBSchen0BqIJ5PezD9etGoOLP5vmZXVgVLuT1Jww9gWbnkqpP5eCpdgcaUl6UX2bwJk8g3gYE0lgS6uEJtjaQv2pW7LnFtnVjT8kRDD19Qj9CGqT%2B6ZX6mWOgOe0Z4tkn7%2FulOZejNz5afS%2BukuTRw5nNjvZymKQlIydReGQ1Jl8D5LGNetJg%2BGA8q7gTcFNoiRGYwajSNWRXdRkoJp5xScGpzbSG%2FSOrDf6NwEGr5E1597UuQGXXCIy9B%2FaONLFHcuIq03xitQtiM0FSHaH9SZ7RZlz4u%2FEQY8QSAPYmjkn8M%2FZanr8XNWelpXe7ZI8ek8c1LoL06ZC3PAgSHwouPyhofJPCQRkMTmXDiS8MfgcNTawGoE%2FbAQqZUyc%2BSH6V7bOwVVUgLmXDAOqh9lmSEVkG%2BYGrYARo61YvMKfS8LwGOqUB1jwHvQVPRxdH5xQ0M7sfFJ6foyoFkvABM9et2jse%2BZi6ZGGA5IQBRn3eG2EupavFldRZUZPllIRwjg1R7W6spSseS1Id97sDUxxqShoBtSI417M3yIDgHHDas%2BNN%2FJ0WuFHmiD7vmLHL4NLQYwCUcv8acmTmtcwHMa0of0K8IUG8oNhePWMhqmMPjsafOa1Ne%2BT7zqsoBhuAjf7tO0eieLKdguRY&X-Amz-Signature=52bec8da5008847ed01ac93cc21879e24c760e5ff0bbfa756f78a72157e3c16b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X772GD3A%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T061026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4RYjd283jBZ4QF4%2F6X4e3cKD5FQtlHKZRe3ek2%2B0BmwIgVQgk6tsADDGNiktnfabLFkwrULT0uD1bNOxKdwkY3N4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJtforZl1id5rnVXyrcA2G6vbSDV1Z7mYNGQl92UUBl6ZfTUzknjLDT24bqr6I3TG1Z6Ghpct6oq7gMtOppUubu5KNcayllJFtsAs9JPMGaI%2F9bybB7JwhpsbtSh6CYaAkFNl2pFFWbrzh%2BBFPbqLO0bFj6viCCFCH1glhjbBJem%2FMRiztZknHoMG%2FMjWh6F14lvN%2F0VXsQ1cQOYmOrz%2BcYjKvsJgpWoyeZ2Mx7RUsPBSchen0BqIJ5PezD9etGoOLP5vmZXVgVLuT1Jww9gWbnkqpP5eCpdgcaUl6UX2bwJk8g3gYE0lgS6uEJtjaQv2pW7LnFtnVjT8kRDD19Qj9CGqT%2B6ZX6mWOgOe0Z4tkn7%2FulOZejNz5afS%2BukuTRw5nNjvZymKQlIydReGQ1Jl8D5LGNetJg%2BGA8q7gTcFNoiRGYwajSNWRXdRkoJp5xScGpzbSG%2FSOrDf6NwEGr5E1597UuQGXXCIy9B%2FaONLFHcuIq03xitQtiM0FSHaH9SZ7RZlz4u%2FEQY8QSAPYmjkn8M%2FZanr8XNWelpXe7ZI8ek8c1LoL06ZC3PAgSHwouPyhofJPCQRkMTmXDiS8MfgcNTawGoE%2FbAQqZUyc%2BSH6V7bOwVVUgLmXDAOqh9lmSEVkG%2BYGrYARo61YvMKfS8LwGOqUB1jwHvQVPRxdH5xQ0M7sfFJ6foyoFkvABM9et2jse%2BZi6ZGGA5IQBRn3eG2EupavFldRZUZPllIRwjg1R7W6spSseS1Id97sDUxxqShoBtSI417M3yIDgHHDas%2BNN%2FJ0WuFHmiD7vmLHL4NLQYwCUcv8acmTmtcwHMa0of0K8IUG8oNhePWMhqmMPjsafOa1Ne%2BT7zqsoBhuAjf7tO0eieLKdguRY&X-Amz-Signature=4b93d2bdba20d16b3f8ab8ced45615f2d5486e266f81ee39f10f6c6ef2c9033e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X772GD3A%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T061026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4RYjd283jBZ4QF4%2F6X4e3cKD5FQtlHKZRe3ek2%2B0BmwIgVQgk6tsADDGNiktnfabLFkwrULT0uD1bNOxKdwkY3N4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJtforZl1id5rnVXyrcA2G6vbSDV1Z7mYNGQl92UUBl6ZfTUzknjLDT24bqr6I3TG1Z6Ghpct6oq7gMtOppUubu5KNcayllJFtsAs9JPMGaI%2F9bybB7JwhpsbtSh6CYaAkFNl2pFFWbrzh%2BBFPbqLO0bFj6viCCFCH1glhjbBJem%2FMRiztZknHoMG%2FMjWh6F14lvN%2F0VXsQ1cQOYmOrz%2BcYjKvsJgpWoyeZ2Mx7RUsPBSchen0BqIJ5PezD9etGoOLP5vmZXVgVLuT1Jww9gWbnkqpP5eCpdgcaUl6UX2bwJk8g3gYE0lgS6uEJtjaQv2pW7LnFtnVjT8kRDD19Qj9CGqT%2B6ZX6mWOgOe0Z4tkn7%2FulOZejNz5afS%2BukuTRw5nNjvZymKQlIydReGQ1Jl8D5LGNetJg%2BGA8q7gTcFNoiRGYwajSNWRXdRkoJp5xScGpzbSG%2FSOrDf6NwEGr5E1597UuQGXXCIy9B%2FaONLFHcuIq03xitQtiM0FSHaH9SZ7RZlz4u%2FEQY8QSAPYmjkn8M%2FZanr8XNWelpXe7ZI8ek8c1LoL06ZC3PAgSHwouPyhofJPCQRkMTmXDiS8MfgcNTawGoE%2FbAQqZUyc%2BSH6V7bOwVVUgLmXDAOqh9lmSEVkG%2BYGrYARo61YvMKfS8LwGOqUB1jwHvQVPRxdH5xQ0M7sfFJ6foyoFkvABM9et2jse%2BZi6ZGGA5IQBRn3eG2EupavFldRZUZPllIRwjg1R7W6spSseS1Id97sDUxxqShoBtSI417M3yIDgHHDas%2BNN%2FJ0WuFHmiD7vmLHL4NLQYwCUcv8acmTmtcwHMa0of0K8IUG8oNhePWMhqmMPjsafOa1Ne%2BT7zqsoBhuAjf7tO0eieLKdguRY&X-Amz-Signature=1ca313be2dd6886adf1a0ce3d32356d284354b50ad6aa88109ad4e9e87c4d0d4&X-Amz-SignedHeaders=host&x-id=GetObject)
