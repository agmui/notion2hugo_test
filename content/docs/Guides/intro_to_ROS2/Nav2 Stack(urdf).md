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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FDMXJXH%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T081040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDhpGlmXOUHepAdIEF5Hde9RWEn%2FD1ZrIjqajbVwMgw3gIgVcaPJJ4qZKmprE3XP7MgOEuQd%2B5RaSSJByo0%2FSR%2BEs8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHSQLCFlRNJERGN0dircA0pHOyYeec1Apdo7hxfDqECAEwiRRPxQ%2FNKkpIJm2K7UxFZLomk8ONqDNaFuiIODo6qaSj2ERTxzFw0%2FYlzVdhXq3zxb6Np7mdN%2BHxdIX9BU5L9r9%2F8UJM%2Fb5eyqYugQYRhFuEfrCUUpI62GBLnyYitu%2FFvaXxT3Vjz5Gsnc7pvEssjH%2B9Agy2ya9AWEViiqtyzDt3TmyRoX4tmCWXCn3AT3%2F9txyt0dmCCdfMaH0sqYKDGubuBylPix7pfflNWbNq%2F0z3hDZ9VDMnltr6WeWp%2BtXWY7SyOcKoSwCCSzx2C%2BNYwZvF1O%2FQiuOVRLB4gtvOvjc6DCmT9FQhYkrVaP3yf4r12kUn4LVOzhRuSqd3AotawmmQdsv3XT6uPw1RlcEmC5TD9FlDAYxJyjwWe08CaY2WIJ3u9w12rVpAeSiEpaL2Crm71iA%2B19IkGkHWCuC8od1HENcOFmD2AISniVtpY9fJUJ%2FlJTZetCAG2094Cg2uf5gT3F7In6En6WNR3rpTbIeloCkjAAxxpUhgjTzJtYVDas7%2BvBkQbS7Lt2pS1QJfMrYAX21hyfIVawaHwiLjeYTsCeEo3jY7vvoU3UnKYcVj1JuPivWpGTjf82nJeAhBnlovWnSTD4cGMeMLrr28AGOqUBZkfnuNurclMV5Rem%2FGFurLYKHKm0fqs0mtidH6wWXQKadKhCT4kjoP00lQhzEweqD0280BV2WDi7GCydItB4d33wSe8ozH%2FPBbVp09K5gzg%2FTMFpJeae3fuUlKoowvAXZ7NhxV62SEttYEQYS7MgeHMG253ipAvTgdMqKQFZfWup2OV%2Bfr%2FWjPwA2Y9nw70aVyJcEmxTDU%2FzOa7YKYo5Id%2B1n2mU&X-Amz-Signature=12cb8ece761b97974b0c6233290689e7c7e354a2616c1fc88ef301394b360b31&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FDMXJXH%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T081040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDhpGlmXOUHepAdIEF5Hde9RWEn%2FD1ZrIjqajbVwMgw3gIgVcaPJJ4qZKmprE3XP7MgOEuQd%2B5RaSSJByo0%2FSR%2BEs8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHSQLCFlRNJERGN0dircA0pHOyYeec1Apdo7hxfDqECAEwiRRPxQ%2FNKkpIJm2K7UxFZLomk8ONqDNaFuiIODo6qaSj2ERTxzFw0%2FYlzVdhXq3zxb6Np7mdN%2BHxdIX9BU5L9r9%2F8UJM%2Fb5eyqYugQYRhFuEfrCUUpI62GBLnyYitu%2FFvaXxT3Vjz5Gsnc7pvEssjH%2B9Agy2ya9AWEViiqtyzDt3TmyRoX4tmCWXCn3AT3%2F9txyt0dmCCdfMaH0sqYKDGubuBylPix7pfflNWbNq%2F0z3hDZ9VDMnltr6WeWp%2BtXWY7SyOcKoSwCCSzx2C%2BNYwZvF1O%2FQiuOVRLB4gtvOvjc6DCmT9FQhYkrVaP3yf4r12kUn4LVOzhRuSqd3AotawmmQdsv3XT6uPw1RlcEmC5TD9FlDAYxJyjwWe08CaY2WIJ3u9w12rVpAeSiEpaL2Crm71iA%2B19IkGkHWCuC8od1HENcOFmD2AISniVtpY9fJUJ%2FlJTZetCAG2094Cg2uf5gT3F7In6En6WNR3rpTbIeloCkjAAxxpUhgjTzJtYVDas7%2BvBkQbS7Lt2pS1QJfMrYAX21hyfIVawaHwiLjeYTsCeEo3jY7vvoU3UnKYcVj1JuPivWpGTjf82nJeAhBnlovWnSTD4cGMeMLrr28AGOqUBZkfnuNurclMV5Rem%2FGFurLYKHKm0fqs0mtidH6wWXQKadKhCT4kjoP00lQhzEweqD0280BV2WDi7GCydItB4d33wSe8ozH%2FPBbVp09K5gzg%2FTMFpJeae3fuUlKoowvAXZ7NhxV62SEttYEQYS7MgeHMG253ipAvTgdMqKQFZfWup2OV%2Bfr%2FWjPwA2Y9nw70aVyJcEmxTDU%2FzOa7YKYo5Id%2B1n2mU&X-Amz-Signature=fb2b4b719bf8507c762c04dfa0539d9ac48ee5349d40dc02347c9f4972fe2631&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FDMXJXH%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T081040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDhpGlmXOUHepAdIEF5Hde9RWEn%2FD1ZrIjqajbVwMgw3gIgVcaPJJ4qZKmprE3XP7MgOEuQd%2B5RaSSJByo0%2FSR%2BEs8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHSQLCFlRNJERGN0dircA0pHOyYeec1Apdo7hxfDqECAEwiRRPxQ%2FNKkpIJm2K7UxFZLomk8ONqDNaFuiIODo6qaSj2ERTxzFw0%2FYlzVdhXq3zxb6Np7mdN%2BHxdIX9BU5L9r9%2F8UJM%2Fb5eyqYugQYRhFuEfrCUUpI62GBLnyYitu%2FFvaXxT3Vjz5Gsnc7pvEssjH%2B9Agy2ya9AWEViiqtyzDt3TmyRoX4tmCWXCn3AT3%2F9txyt0dmCCdfMaH0sqYKDGubuBylPix7pfflNWbNq%2F0z3hDZ9VDMnltr6WeWp%2BtXWY7SyOcKoSwCCSzx2C%2BNYwZvF1O%2FQiuOVRLB4gtvOvjc6DCmT9FQhYkrVaP3yf4r12kUn4LVOzhRuSqd3AotawmmQdsv3XT6uPw1RlcEmC5TD9FlDAYxJyjwWe08CaY2WIJ3u9w12rVpAeSiEpaL2Crm71iA%2B19IkGkHWCuC8od1HENcOFmD2AISniVtpY9fJUJ%2FlJTZetCAG2094Cg2uf5gT3F7In6En6WNR3rpTbIeloCkjAAxxpUhgjTzJtYVDas7%2BvBkQbS7Lt2pS1QJfMrYAX21hyfIVawaHwiLjeYTsCeEo3jY7vvoU3UnKYcVj1JuPivWpGTjf82nJeAhBnlovWnSTD4cGMeMLrr28AGOqUBZkfnuNurclMV5Rem%2FGFurLYKHKm0fqs0mtidH6wWXQKadKhCT4kjoP00lQhzEweqD0280BV2WDi7GCydItB4d33wSe8ozH%2FPBbVp09K5gzg%2FTMFpJeae3fuUlKoowvAXZ7NhxV62SEttYEQYS7MgeHMG253ipAvTgdMqKQFZfWup2OV%2Bfr%2FWjPwA2Y9nw70aVyJcEmxTDU%2FzOa7YKYo5Id%2B1n2mU&X-Amz-Signature=f845dde39d1a75b263f9f5337b4fda69429e044de8de6593fe2bc70e4138ade3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FDMXJXH%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T081040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDhpGlmXOUHepAdIEF5Hde9RWEn%2FD1ZrIjqajbVwMgw3gIgVcaPJJ4qZKmprE3XP7MgOEuQd%2B5RaSSJByo0%2FSR%2BEs8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHSQLCFlRNJERGN0dircA0pHOyYeec1Apdo7hxfDqECAEwiRRPxQ%2FNKkpIJm2K7UxFZLomk8ONqDNaFuiIODo6qaSj2ERTxzFw0%2FYlzVdhXq3zxb6Np7mdN%2BHxdIX9BU5L9r9%2F8UJM%2Fb5eyqYugQYRhFuEfrCUUpI62GBLnyYitu%2FFvaXxT3Vjz5Gsnc7pvEssjH%2B9Agy2ya9AWEViiqtyzDt3TmyRoX4tmCWXCn3AT3%2F9txyt0dmCCdfMaH0sqYKDGubuBylPix7pfflNWbNq%2F0z3hDZ9VDMnltr6WeWp%2BtXWY7SyOcKoSwCCSzx2C%2BNYwZvF1O%2FQiuOVRLB4gtvOvjc6DCmT9FQhYkrVaP3yf4r12kUn4LVOzhRuSqd3AotawmmQdsv3XT6uPw1RlcEmC5TD9FlDAYxJyjwWe08CaY2WIJ3u9w12rVpAeSiEpaL2Crm71iA%2B19IkGkHWCuC8od1HENcOFmD2AISniVtpY9fJUJ%2FlJTZetCAG2094Cg2uf5gT3F7In6En6WNR3rpTbIeloCkjAAxxpUhgjTzJtYVDas7%2BvBkQbS7Lt2pS1QJfMrYAX21hyfIVawaHwiLjeYTsCeEo3jY7vvoU3UnKYcVj1JuPivWpGTjf82nJeAhBnlovWnSTD4cGMeMLrr28AGOqUBZkfnuNurclMV5Rem%2FGFurLYKHKm0fqs0mtidH6wWXQKadKhCT4kjoP00lQhzEweqD0280BV2WDi7GCydItB4d33wSe8ozH%2FPBbVp09K5gzg%2FTMFpJeae3fuUlKoowvAXZ7NhxV62SEttYEQYS7MgeHMG253ipAvTgdMqKQFZfWup2OV%2Bfr%2FWjPwA2Y9nw70aVyJcEmxTDU%2FzOa7YKYo5Id%2B1n2mU&X-Amz-Signature=b59b7704782eb1c5b6970de92353c864ea9d42a40f2025d5ba688129a43a0dc8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FDMXJXH%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T081040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDhpGlmXOUHepAdIEF5Hde9RWEn%2FD1ZrIjqajbVwMgw3gIgVcaPJJ4qZKmprE3XP7MgOEuQd%2B5RaSSJByo0%2FSR%2BEs8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHSQLCFlRNJERGN0dircA0pHOyYeec1Apdo7hxfDqECAEwiRRPxQ%2FNKkpIJm2K7UxFZLomk8ONqDNaFuiIODo6qaSj2ERTxzFw0%2FYlzVdhXq3zxb6Np7mdN%2BHxdIX9BU5L9r9%2F8UJM%2Fb5eyqYugQYRhFuEfrCUUpI62GBLnyYitu%2FFvaXxT3Vjz5Gsnc7pvEssjH%2B9Agy2ya9AWEViiqtyzDt3TmyRoX4tmCWXCn3AT3%2F9txyt0dmCCdfMaH0sqYKDGubuBylPix7pfflNWbNq%2F0z3hDZ9VDMnltr6WeWp%2BtXWY7SyOcKoSwCCSzx2C%2BNYwZvF1O%2FQiuOVRLB4gtvOvjc6DCmT9FQhYkrVaP3yf4r12kUn4LVOzhRuSqd3AotawmmQdsv3XT6uPw1RlcEmC5TD9FlDAYxJyjwWe08CaY2WIJ3u9w12rVpAeSiEpaL2Crm71iA%2B19IkGkHWCuC8od1HENcOFmD2AISniVtpY9fJUJ%2FlJTZetCAG2094Cg2uf5gT3F7In6En6WNR3rpTbIeloCkjAAxxpUhgjTzJtYVDas7%2BvBkQbS7Lt2pS1QJfMrYAX21hyfIVawaHwiLjeYTsCeEo3jY7vvoU3UnKYcVj1JuPivWpGTjf82nJeAhBnlovWnSTD4cGMeMLrr28AGOqUBZkfnuNurclMV5Rem%2FGFurLYKHKm0fqs0mtidH6wWXQKadKhCT4kjoP00lQhzEweqD0280BV2WDi7GCydItB4d33wSe8ozH%2FPBbVp09K5gzg%2FTMFpJeae3fuUlKoowvAXZ7NhxV62SEttYEQYS7MgeHMG253ipAvTgdMqKQFZfWup2OV%2Bfr%2FWjPwA2Y9nw70aVyJcEmxTDU%2FzOa7YKYo5Id%2B1n2mU&X-Amz-Signature=73ab9e49a90ecbc9f651b6cd1ce4686669e935a8d194261176689e2673f8c51e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FDMXJXH%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T081040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDhpGlmXOUHepAdIEF5Hde9RWEn%2FD1ZrIjqajbVwMgw3gIgVcaPJJ4qZKmprE3XP7MgOEuQd%2B5RaSSJByo0%2FSR%2BEs8qiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHSQLCFlRNJERGN0dircA0pHOyYeec1Apdo7hxfDqECAEwiRRPxQ%2FNKkpIJm2K7UxFZLomk8ONqDNaFuiIODo6qaSj2ERTxzFw0%2FYlzVdhXq3zxb6Np7mdN%2BHxdIX9BU5L9r9%2F8UJM%2Fb5eyqYugQYRhFuEfrCUUpI62GBLnyYitu%2FFvaXxT3Vjz5Gsnc7pvEssjH%2B9Agy2ya9AWEViiqtyzDt3TmyRoX4tmCWXCn3AT3%2F9txyt0dmCCdfMaH0sqYKDGubuBylPix7pfflNWbNq%2F0z3hDZ9VDMnltr6WeWp%2BtXWY7SyOcKoSwCCSzx2C%2BNYwZvF1O%2FQiuOVRLB4gtvOvjc6DCmT9FQhYkrVaP3yf4r12kUn4LVOzhRuSqd3AotawmmQdsv3XT6uPw1RlcEmC5TD9FlDAYxJyjwWe08CaY2WIJ3u9w12rVpAeSiEpaL2Crm71iA%2B19IkGkHWCuC8od1HENcOFmD2AISniVtpY9fJUJ%2FlJTZetCAG2094Cg2uf5gT3F7In6En6WNR3rpTbIeloCkjAAxxpUhgjTzJtYVDas7%2BvBkQbS7Lt2pS1QJfMrYAX21hyfIVawaHwiLjeYTsCeEo3jY7vvoU3UnKYcVj1JuPivWpGTjf82nJeAhBnlovWnSTD4cGMeMLrr28AGOqUBZkfnuNurclMV5Rem%2FGFurLYKHKm0fqs0mtidH6wWXQKadKhCT4kjoP00lQhzEweqD0280BV2WDi7GCydItB4d33wSe8ozH%2FPBbVp09K5gzg%2FTMFpJeae3fuUlKoowvAXZ7NhxV62SEttYEQYS7MgeHMG253ipAvTgdMqKQFZfWup2OV%2Bfr%2FWjPwA2Y9nw70aVyJcEmxTDU%2FzOa7YKYo5Id%2B1n2mU&X-Amz-Signature=cf0994726dba0939189864f4e07dd207d6087e5731d6a8e9cd0b27a4f047e50d&X-Amz-SignedHeaders=host&x-id=GetObject)
