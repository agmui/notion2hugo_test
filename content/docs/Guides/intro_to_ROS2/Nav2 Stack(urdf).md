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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BZLE4N5%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T150108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCcaHAL86W4lkGn6EnALnfbgw8GV2WjD2AFdtE1pXaViQIhAIOq80APdQJniSRnFN8xVV8Wnp2wZKxpC2i%2FzAPp%2B2YSKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYERPvvk9uqiGuEvgq3AN%2Fq68c2dZo3fWh8x2bxmD5WkwDYocwYIZzozYcVTmQqvSxgwgZtqSvEv5U92IHHH7rQ9M9wdj4DkPhkl5iySsyX6BLLH%2F%2BdSRdlF0tPY0AEc65S%2BXb4YDxQcxjtYNxc3kKrcLG9MLRSop4fEqRMCc6%2FXmeUdpWFNhpS72%2FCk0Q7XnBC0jhGA1EYI5G7tmI%2FPMV%2FCnxYQpn6krSrReKTyUE%2FCLW4Qi%2BGQ%2B9pvLnO%2BGPsANb%2BbKDO%2BwZmHTu38vC53nk%2BAcsGH3Wj4tC9nKctwz1yGbNIujQZCCXzqmV0PVd%2B0buHdPuPXd62LL1kvuJfwGb2Ujd4%2Bd4x40pXq448D9whC3%2F7Gkds8%2F%2F6tFDkqjLue4KPQtCjRlCFHJdenT4lTVHm3%2FKlqjLLbKBcLUSY%2B%2FLnri70Pysclz6%2FxtbFw0ikkd8G5lQKmPG5JKWOWUc9gMrLRNRTttCzB46QjbocnnTau78504kCHpyzlIvcSP8Hxq5JMDTD8VSwfn8c4WoMNyw8tVuVfMenldC1KSda5wPhcUgWqFEHPsQo6lJTw4%2BQKtYku5PvxF%2BYMn4STtlJt61yjEUiwz9OuLD8vdqM3lFznJ3ZTWcwtKwTAAsSqVs1uYzvYexbDgZ0%2BTNhDCAqKW%2FBjqkARNxuxoa9vXgWHV7y9R8pAVSpMD973jmuhj91l70uFrmuifzQyoILqsR1EBoOTfLiEwQiTKBkav6ox08gWZp8hpADkv8NUPVEGmO0PIFsc8cE4g%2BtCKYXowwoCAiKw3NRdeSzYdoU8slnSr9tGQnR04nmtJch7qLAkkt9ZT2L2GzzUkXubRvpzpxdWAumMzvemO8Rus2xB5ohQDUyP0C07FY2zQB&X-Amz-Signature=185e855957ef6ad86bd26f6630bef5dc7f2091d0aabf134bee7903878450ea64&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BZLE4N5%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T150108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCcaHAL86W4lkGn6EnALnfbgw8GV2WjD2AFdtE1pXaViQIhAIOq80APdQJniSRnFN8xVV8Wnp2wZKxpC2i%2FzAPp%2B2YSKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYERPvvk9uqiGuEvgq3AN%2Fq68c2dZo3fWh8x2bxmD5WkwDYocwYIZzozYcVTmQqvSxgwgZtqSvEv5U92IHHH7rQ9M9wdj4DkPhkl5iySsyX6BLLH%2F%2BdSRdlF0tPY0AEc65S%2BXb4YDxQcxjtYNxc3kKrcLG9MLRSop4fEqRMCc6%2FXmeUdpWFNhpS72%2FCk0Q7XnBC0jhGA1EYI5G7tmI%2FPMV%2FCnxYQpn6krSrReKTyUE%2FCLW4Qi%2BGQ%2B9pvLnO%2BGPsANb%2BbKDO%2BwZmHTu38vC53nk%2BAcsGH3Wj4tC9nKctwz1yGbNIujQZCCXzqmV0PVd%2B0buHdPuPXd62LL1kvuJfwGb2Ujd4%2Bd4x40pXq448D9whC3%2F7Gkds8%2F%2F6tFDkqjLue4KPQtCjRlCFHJdenT4lTVHm3%2FKlqjLLbKBcLUSY%2B%2FLnri70Pysclz6%2FxtbFw0ikkd8G5lQKmPG5JKWOWUc9gMrLRNRTttCzB46QjbocnnTau78504kCHpyzlIvcSP8Hxq5JMDTD8VSwfn8c4WoMNyw8tVuVfMenldC1KSda5wPhcUgWqFEHPsQo6lJTw4%2BQKtYku5PvxF%2BYMn4STtlJt61yjEUiwz9OuLD8vdqM3lFznJ3ZTWcwtKwTAAsSqVs1uYzvYexbDgZ0%2BTNhDCAqKW%2FBjqkARNxuxoa9vXgWHV7y9R8pAVSpMD973jmuhj91l70uFrmuifzQyoILqsR1EBoOTfLiEwQiTKBkav6ox08gWZp8hpADkv8NUPVEGmO0PIFsc8cE4g%2BtCKYXowwoCAiKw3NRdeSzYdoU8slnSr9tGQnR04nmtJch7qLAkkt9ZT2L2GzzUkXubRvpzpxdWAumMzvemO8Rus2xB5ohQDUyP0C07FY2zQB&X-Amz-Signature=4711ab2664944540637b557d816b9df90613ae5cf8bf820c78a78b6b06062e26&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BZLE4N5%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T150108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCcaHAL86W4lkGn6EnALnfbgw8GV2WjD2AFdtE1pXaViQIhAIOq80APdQJniSRnFN8xVV8Wnp2wZKxpC2i%2FzAPp%2B2YSKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYERPvvk9uqiGuEvgq3AN%2Fq68c2dZo3fWh8x2bxmD5WkwDYocwYIZzozYcVTmQqvSxgwgZtqSvEv5U92IHHH7rQ9M9wdj4DkPhkl5iySsyX6BLLH%2F%2BdSRdlF0tPY0AEc65S%2BXb4YDxQcxjtYNxc3kKrcLG9MLRSop4fEqRMCc6%2FXmeUdpWFNhpS72%2FCk0Q7XnBC0jhGA1EYI5G7tmI%2FPMV%2FCnxYQpn6krSrReKTyUE%2FCLW4Qi%2BGQ%2B9pvLnO%2BGPsANb%2BbKDO%2BwZmHTu38vC53nk%2BAcsGH3Wj4tC9nKctwz1yGbNIujQZCCXzqmV0PVd%2B0buHdPuPXd62LL1kvuJfwGb2Ujd4%2Bd4x40pXq448D9whC3%2F7Gkds8%2F%2F6tFDkqjLue4KPQtCjRlCFHJdenT4lTVHm3%2FKlqjLLbKBcLUSY%2B%2FLnri70Pysclz6%2FxtbFw0ikkd8G5lQKmPG5JKWOWUc9gMrLRNRTttCzB46QjbocnnTau78504kCHpyzlIvcSP8Hxq5JMDTD8VSwfn8c4WoMNyw8tVuVfMenldC1KSda5wPhcUgWqFEHPsQo6lJTw4%2BQKtYku5PvxF%2BYMn4STtlJt61yjEUiwz9OuLD8vdqM3lFznJ3ZTWcwtKwTAAsSqVs1uYzvYexbDgZ0%2BTNhDCAqKW%2FBjqkARNxuxoa9vXgWHV7y9R8pAVSpMD973jmuhj91l70uFrmuifzQyoILqsR1EBoOTfLiEwQiTKBkav6ox08gWZp8hpADkv8NUPVEGmO0PIFsc8cE4g%2BtCKYXowwoCAiKw3NRdeSzYdoU8slnSr9tGQnR04nmtJch7qLAkkt9ZT2L2GzzUkXubRvpzpxdWAumMzvemO8Rus2xB5ohQDUyP0C07FY2zQB&X-Amz-Signature=6c324dde9fa8cf6537884fffe8b861ead7fdb93d87c3d222448d409d90c78a47&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BZLE4N5%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T150108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCcaHAL86W4lkGn6EnALnfbgw8GV2WjD2AFdtE1pXaViQIhAIOq80APdQJniSRnFN8xVV8Wnp2wZKxpC2i%2FzAPp%2B2YSKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYERPvvk9uqiGuEvgq3AN%2Fq68c2dZo3fWh8x2bxmD5WkwDYocwYIZzozYcVTmQqvSxgwgZtqSvEv5U92IHHH7rQ9M9wdj4DkPhkl5iySsyX6BLLH%2F%2BdSRdlF0tPY0AEc65S%2BXb4YDxQcxjtYNxc3kKrcLG9MLRSop4fEqRMCc6%2FXmeUdpWFNhpS72%2FCk0Q7XnBC0jhGA1EYI5G7tmI%2FPMV%2FCnxYQpn6krSrReKTyUE%2FCLW4Qi%2BGQ%2B9pvLnO%2BGPsANb%2BbKDO%2BwZmHTu38vC53nk%2BAcsGH3Wj4tC9nKctwz1yGbNIujQZCCXzqmV0PVd%2B0buHdPuPXd62LL1kvuJfwGb2Ujd4%2Bd4x40pXq448D9whC3%2F7Gkds8%2F%2F6tFDkqjLue4KPQtCjRlCFHJdenT4lTVHm3%2FKlqjLLbKBcLUSY%2B%2FLnri70Pysclz6%2FxtbFw0ikkd8G5lQKmPG5JKWOWUc9gMrLRNRTttCzB46QjbocnnTau78504kCHpyzlIvcSP8Hxq5JMDTD8VSwfn8c4WoMNyw8tVuVfMenldC1KSda5wPhcUgWqFEHPsQo6lJTw4%2BQKtYku5PvxF%2BYMn4STtlJt61yjEUiwz9OuLD8vdqM3lFznJ3ZTWcwtKwTAAsSqVs1uYzvYexbDgZ0%2BTNhDCAqKW%2FBjqkARNxuxoa9vXgWHV7y9R8pAVSpMD973jmuhj91l70uFrmuifzQyoILqsR1EBoOTfLiEwQiTKBkav6ox08gWZp8hpADkv8NUPVEGmO0PIFsc8cE4g%2BtCKYXowwoCAiKw3NRdeSzYdoU8slnSr9tGQnR04nmtJch7qLAkkt9ZT2L2GzzUkXubRvpzpxdWAumMzvemO8Rus2xB5ohQDUyP0C07FY2zQB&X-Amz-Signature=8bbe44f9a39f5a4cc64e1f8e60173661cc993e1c13bba8ff2f51718481d33f46&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BZLE4N5%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T150108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCcaHAL86W4lkGn6EnALnfbgw8GV2WjD2AFdtE1pXaViQIhAIOq80APdQJniSRnFN8xVV8Wnp2wZKxpC2i%2FzAPp%2B2YSKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYERPvvk9uqiGuEvgq3AN%2Fq68c2dZo3fWh8x2bxmD5WkwDYocwYIZzozYcVTmQqvSxgwgZtqSvEv5U92IHHH7rQ9M9wdj4DkPhkl5iySsyX6BLLH%2F%2BdSRdlF0tPY0AEc65S%2BXb4YDxQcxjtYNxc3kKrcLG9MLRSop4fEqRMCc6%2FXmeUdpWFNhpS72%2FCk0Q7XnBC0jhGA1EYI5G7tmI%2FPMV%2FCnxYQpn6krSrReKTyUE%2FCLW4Qi%2BGQ%2B9pvLnO%2BGPsANb%2BbKDO%2BwZmHTu38vC53nk%2BAcsGH3Wj4tC9nKctwz1yGbNIujQZCCXzqmV0PVd%2B0buHdPuPXd62LL1kvuJfwGb2Ujd4%2Bd4x40pXq448D9whC3%2F7Gkds8%2F%2F6tFDkqjLue4KPQtCjRlCFHJdenT4lTVHm3%2FKlqjLLbKBcLUSY%2B%2FLnri70Pysclz6%2FxtbFw0ikkd8G5lQKmPG5JKWOWUc9gMrLRNRTttCzB46QjbocnnTau78504kCHpyzlIvcSP8Hxq5JMDTD8VSwfn8c4WoMNyw8tVuVfMenldC1KSda5wPhcUgWqFEHPsQo6lJTw4%2BQKtYku5PvxF%2BYMn4STtlJt61yjEUiwz9OuLD8vdqM3lFznJ3ZTWcwtKwTAAsSqVs1uYzvYexbDgZ0%2BTNhDCAqKW%2FBjqkARNxuxoa9vXgWHV7y9R8pAVSpMD973jmuhj91l70uFrmuifzQyoILqsR1EBoOTfLiEwQiTKBkav6ox08gWZp8hpADkv8NUPVEGmO0PIFsc8cE4g%2BtCKYXowwoCAiKw3NRdeSzYdoU8slnSr9tGQnR04nmtJch7qLAkkt9ZT2L2GzzUkXubRvpzpxdWAumMzvemO8Rus2xB5ohQDUyP0C07FY2zQB&X-Amz-Signature=d99207aa8fe8a56a9b0daec8aeb9196a370ca2965bc439c58032439109edd776&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BZLE4N5%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T150108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCcaHAL86W4lkGn6EnALnfbgw8GV2WjD2AFdtE1pXaViQIhAIOq80APdQJniSRnFN8xVV8Wnp2wZKxpC2i%2FzAPp%2B2YSKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwYERPvvk9uqiGuEvgq3AN%2Fq68c2dZo3fWh8x2bxmD5WkwDYocwYIZzozYcVTmQqvSxgwgZtqSvEv5U92IHHH7rQ9M9wdj4DkPhkl5iySsyX6BLLH%2F%2BdSRdlF0tPY0AEc65S%2BXb4YDxQcxjtYNxc3kKrcLG9MLRSop4fEqRMCc6%2FXmeUdpWFNhpS72%2FCk0Q7XnBC0jhGA1EYI5G7tmI%2FPMV%2FCnxYQpn6krSrReKTyUE%2FCLW4Qi%2BGQ%2B9pvLnO%2BGPsANb%2BbKDO%2BwZmHTu38vC53nk%2BAcsGH3Wj4tC9nKctwz1yGbNIujQZCCXzqmV0PVd%2B0buHdPuPXd62LL1kvuJfwGb2Ujd4%2Bd4x40pXq448D9whC3%2F7Gkds8%2F%2F6tFDkqjLue4KPQtCjRlCFHJdenT4lTVHm3%2FKlqjLLbKBcLUSY%2B%2FLnri70Pysclz6%2FxtbFw0ikkd8G5lQKmPG5JKWOWUc9gMrLRNRTttCzB46QjbocnnTau78504kCHpyzlIvcSP8Hxq5JMDTD8VSwfn8c4WoMNyw8tVuVfMenldC1KSda5wPhcUgWqFEHPsQo6lJTw4%2BQKtYku5PvxF%2BYMn4STtlJt61yjEUiwz9OuLD8vdqM3lFznJ3ZTWcwtKwTAAsSqVs1uYzvYexbDgZ0%2BTNhDCAqKW%2FBjqkARNxuxoa9vXgWHV7y9R8pAVSpMD973jmuhj91l70uFrmuifzQyoILqsR1EBoOTfLiEwQiTKBkav6ox08gWZp8hpADkv8NUPVEGmO0PIFsc8cE4g%2BtCKYXowwoCAiKw3NRdeSzYdoU8slnSr9tGQnR04nmtJch7qLAkkt9ZT2L2GzzUkXubRvpzpxdWAumMzvemO8Rus2xB5ohQDUyP0C07FY2zQB&X-Amz-Signature=0133befc3cfff323b20e171bba81b797b0ffbc02a1feecd5500c4a5fa58cf6a6&X-Amz-SignedHeaders=host&x-id=GetObject)
