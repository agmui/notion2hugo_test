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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFDQYDFT%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCr6VE6%2B4tOFF6wePskOc2mNBZlY79GXPjPqhl7%2F2NrmgIgCZnKno4Gj1kLOtFqv5KYgmnAvUe%2FGmIq4%2FmgkATCXxUq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDFos%2Bny2r9%2BLPRfPaCrcA8IW2OU05ZQk1Nv3qhE8FaWOCimj%2BcfDwzYzjUVeW80glYa5ieYXCzAotz8WMjcAD0eSIWHyKwNagH7XkwkzEkErWpxdU5kWhEJkGaxYRTa37jZsUBrHkMi6%2FWBFePhZnSQtDtR%2Bp2QZTByq0WZdKD04Tnzo5YkV7h1VAIeHo98PwnIUDYW2pwY5qhbuPIZU3%2FycO5YvAC5oibHlqmZNO6iB9QqORrjFAIK1Asue2PiPugT7ywi4td0V%2Fcjn0KhbVfeyHn5nvPy8qijBtuy3CasOM%2BP7Ynr%2BlkRJ0ggUrr%2Bb0bHty%2FlLhIOctXly7ZRkenFANjwx7ThweGPSSXQXTyTPONNykqIBbj%2FSHc8qHLL7DTiFthUlGwu3Jh4qBekUnIc1JIVzYwB1oi9jRAgKV2CGKw%2F8C88XQnKGQcwJ3sya8ydwKorIjHnUGGVs4LbBOz0qPX4b1j9KspOZc%2BvVOZj2el2ih3nphIvoLbkMwwfprdz6msVbaG4u7QdJe%2BScaDK5vn9F3QffE8eq%2FqP75Ctf9ufU6PFeniHU1QqYu1n95qQD%2B8YQsMiaGwCSpTgO21auL30QQG9KqXKep%2BmGTVzPhkC4KrSOpHJ6vHlyHv1Y6ETrj7GsfdJBVJHqMPG8tMIGOqUBfw7GlEUyZ5VHgNDWSlPL%2BYWy57J%2Bkpxq4cIvCxauez731XqAfVUUp%2BqUhhqKyQMvDL64Vy0MKWb5BeFGbN9uOwkYxGZhkQTwiqKflQfgjXXBdyiuxnyM%2FWrfp%2B4PiVIs71DHqAdh9lw7uYPkEqTw4HcVYu04De0p5BonL%2B6pDnOJ2CxBX3tmNOVFDh3FGdFkpHpd9hxmPVOsoRpW54WW0nMiH%2F6H&X-Amz-Signature=2bf8468cad1decb1ac26c921b232e63a5ec2ada747aba90cf2e2730d3eae5786&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFDQYDFT%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCr6VE6%2B4tOFF6wePskOc2mNBZlY79GXPjPqhl7%2F2NrmgIgCZnKno4Gj1kLOtFqv5KYgmnAvUe%2FGmIq4%2FmgkATCXxUq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDFos%2Bny2r9%2BLPRfPaCrcA8IW2OU05ZQk1Nv3qhE8FaWOCimj%2BcfDwzYzjUVeW80glYa5ieYXCzAotz8WMjcAD0eSIWHyKwNagH7XkwkzEkErWpxdU5kWhEJkGaxYRTa37jZsUBrHkMi6%2FWBFePhZnSQtDtR%2Bp2QZTByq0WZdKD04Tnzo5YkV7h1VAIeHo98PwnIUDYW2pwY5qhbuPIZU3%2FycO5YvAC5oibHlqmZNO6iB9QqORrjFAIK1Asue2PiPugT7ywi4td0V%2Fcjn0KhbVfeyHn5nvPy8qijBtuy3CasOM%2BP7Ynr%2BlkRJ0ggUrr%2Bb0bHty%2FlLhIOctXly7ZRkenFANjwx7ThweGPSSXQXTyTPONNykqIBbj%2FSHc8qHLL7DTiFthUlGwu3Jh4qBekUnIc1JIVzYwB1oi9jRAgKV2CGKw%2F8C88XQnKGQcwJ3sya8ydwKorIjHnUGGVs4LbBOz0qPX4b1j9KspOZc%2BvVOZj2el2ih3nphIvoLbkMwwfprdz6msVbaG4u7QdJe%2BScaDK5vn9F3QffE8eq%2FqP75Ctf9ufU6PFeniHU1QqYu1n95qQD%2B8YQsMiaGwCSpTgO21auL30QQG9KqXKep%2BmGTVzPhkC4KrSOpHJ6vHlyHv1Y6ETrj7GsfdJBVJHqMPG8tMIGOqUBfw7GlEUyZ5VHgNDWSlPL%2BYWy57J%2Bkpxq4cIvCxauez731XqAfVUUp%2BqUhhqKyQMvDL64Vy0MKWb5BeFGbN9uOwkYxGZhkQTwiqKflQfgjXXBdyiuxnyM%2FWrfp%2B4PiVIs71DHqAdh9lw7uYPkEqTw4HcVYu04De0p5BonL%2B6pDnOJ2CxBX3tmNOVFDh3FGdFkpHpd9hxmPVOsoRpW54WW0nMiH%2F6H&X-Amz-Signature=12ff6d403a008af231504b158fbbe304b1e129897a2812914fb4801e7a38ab0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFDQYDFT%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCr6VE6%2B4tOFF6wePskOc2mNBZlY79GXPjPqhl7%2F2NrmgIgCZnKno4Gj1kLOtFqv5KYgmnAvUe%2FGmIq4%2FmgkATCXxUq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDFos%2Bny2r9%2BLPRfPaCrcA8IW2OU05ZQk1Nv3qhE8FaWOCimj%2BcfDwzYzjUVeW80glYa5ieYXCzAotz8WMjcAD0eSIWHyKwNagH7XkwkzEkErWpxdU5kWhEJkGaxYRTa37jZsUBrHkMi6%2FWBFePhZnSQtDtR%2Bp2QZTByq0WZdKD04Tnzo5YkV7h1VAIeHo98PwnIUDYW2pwY5qhbuPIZU3%2FycO5YvAC5oibHlqmZNO6iB9QqORrjFAIK1Asue2PiPugT7ywi4td0V%2Fcjn0KhbVfeyHn5nvPy8qijBtuy3CasOM%2BP7Ynr%2BlkRJ0ggUrr%2Bb0bHty%2FlLhIOctXly7ZRkenFANjwx7ThweGPSSXQXTyTPONNykqIBbj%2FSHc8qHLL7DTiFthUlGwu3Jh4qBekUnIc1JIVzYwB1oi9jRAgKV2CGKw%2F8C88XQnKGQcwJ3sya8ydwKorIjHnUGGVs4LbBOz0qPX4b1j9KspOZc%2BvVOZj2el2ih3nphIvoLbkMwwfprdz6msVbaG4u7QdJe%2BScaDK5vn9F3QffE8eq%2FqP75Ctf9ufU6PFeniHU1QqYu1n95qQD%2B8YQsMiaGwCSpTgO21auL30QQG9KqXKep%2BmGTVzPhkC4KrSOpHJ6vHlyHv1Y6ETrj7GsfdJBVJHqMPG8tMIGOqUBfw7GlEUyZ5VHgNDWSlPL%2BYWy57J%2Bkpxq4cIvCxauez731XqAfVUUp%2BqUhhqKyQMvDL64Vy0MKWb5BeFGbN9uOwkYxGZhkQTwiqKflQfgjXXBdyiuxnyM%2FWrfp%2B4PiVIs71DHqAdh9lw7uYPkEqTw4HcVYu04De0p5BonL%2B6pDnOJ2CxBX3tmNOVFDh3FGdFkpHpd9hxmPVOsoRpW54WW0nMiH%2F6H&X-Amz-Signature=1bb779ec2bffab3cd2581bd2f03b53e6fa5a6a1c6dd8402979234b6a07138572&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFDQYDFT%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCr6VE6%2B4tOFF6wePskOc2mNBZlY79GXPjPqhl7%2F2NrmgIgCZnKno4Gj1kLOtFqv5KYgmnAvUe%2FGmIq4%2FmgkATCXxUq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDFos%2Bny2r9%2BLPRfPaCrcA8IW2OU05ZQk1Nv3qhE8FaWOCimj%2BcfDwzYzjUVeW80glYa5ieYXCzAotz8WMjcAD0eSIWHyKwNagH7XkwkzEkErWpxdU5kWhEJkGaxYRTa37jZsUBrHkMi6%2FWBFePhZnSQtDtR%2Bp2QZTByq0WZdKD04Tnzo5YkV7h1VAIeHo98PwnIUDYW2pwY5qhbuPIZU3%2FycO5YvAC5oibHlqmZNO6iB9QqORrjFAIK1Asue2PiPugT7ywi4td0V%2Fcjn0KhbVfeyHn5nvPy8qijBtuy3CasOM%2BP7Ynr%2BlkRJ0ggUrr%2Bb0bHty%2FlLhIOctXly7ZRkenFANjwx7ThweGPSSXQXTyTPONNykqIBbj%2FSHc8qHLL7DTiFthUlGwu3Jh4qBekUnIc1JIVzYwB1oi9jRAgKV2CGKw%2F8C88XQnKGQcwJ3sya8ydwKorIjHnUGGVs4LbBOz0qPX4b1j9KspOZc%2BvVOZj2el2ih3nphIvoLbkMwwfprdz6msVbaG4u7QdJe%2BScaDK5vn9F3QffE8eq%2FqP75Ctf9ufU6PFeniHU1QqYu1n95qQD%2B8YQsMiaGwCSpTgO21auL30QQG9KqXKep%2BmGTVzPhkC4KrSOpHJ6vHlyHv1Y6ETrj7GsfdJBVJHqMPG8tMIGOqUBfw7GlEUyZ5VHgNDWSlPL%2BYWy57J%2Bkpxq4cIvCxauez731XqAfVUUp%2BqUhhqKyQMvDL64Vy0MKWb5BeFGbN9uOwkYxGZhkQTwiqKflQfgjXXBdyiuxnyM%2FWrfp%2B4PiVIs71DHqAdh9lw7uYPkEqTw4HcVYu04De0p5BonL%2B6pDnOJ2CxBX3tmNOVFDh3FGdFkpHpd9hxmPVOsoRpW54WW0nMiH%2F6H&X-Amz-Signature=cfcd2823851df5de556bf7cf945e8aabe27a2af695bd4a10688855b9ad945073&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFDQYDFT%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCr6VE6%2B4tOFF6wePskOc2mNBZlY79GXPjPqhl7%2F2NrmgIgCZnKno4Gj1kLOtFqv5KYgmnAvUe%2FGmIq4%2FmgkATCXxUq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDFos%2Bny2r9%2BLPRfPaCrcA8IW2OU05ZQk1Nv3qhE8FaWOCimj%2BcfDwzYzjUVeW80glYa5ieYXCzAotz8WMjcAD0eSIWHyKwNagH7XkwkzEkErWpxdU5kWhEJkGaxYRTa37jZsUBrHkMi6%2FWBFePhZnSQtDtR%2Bp2QZTByq0WZdKD04Tnzo5YkV7h1VAIeHo98PwnIUDYW2pwY5qhbuPIZU3%2FycO5YvAC5oibHlqmZNO6iB9QqORrjFAIK1Asue2PiPugT7ywi4td0V%2Fcjn0KhbVfeyHn5nvPy8qijBtuy3CasOM%2BP7Ynr%2BlkRJ0ggUrr%2Bb0bHty%2FlLhIOctXly7ZRkenFANjwx7ThweGPSSXQXTyTPONNykqIBbj%2FSHc8qHLL7DTiFthUlGwu3Jh4qBekUnIc1JIVzYwB1oi9jRAgKV2CGKw%2F8C88XQnKGQcwJ3sya8ydwKorIjHnUGGVs4LbBOz0qPX4b1j9KspOZc%2BvVOZj2el2ih3nphIvoLbkMwwfprdz6msVbaG4u7QdJe%2BScaDK5vn9F3QffE8eq%2FqP75Ctf9ufU6PFeniHU1QqYu1n95qQD%2B8YQsMiaGwCSpTgO21auL30QQG9KqXKep%2BmGTVzPhkC4KrSOpHJ6vHlyHv1Y6ETrj7GsfdJBVJHqMPG8tMIGOqUBfw7GlEUyZ5VHgNDWSlPL%2BYWy57J%2Bkpxq4cIvCxauez731XqAfVUUp%2BqUhhqKyQMvDL64Vy0MKWb5BeFGbN9uOwkYxGZhkQTwiqKflQfgjXXBdyiuxnyM%2FWrfp%2B4PiVIs71DHqAdh9lw7uYPkEqTw4HcVYu04De0p5BonL%2B6pDnOJ2CxBX3tmNOVFDh3FGdFkpHpd9hxmPVOsoRpW54WW0nMiH%2F6H&X-Amz-Signature=9e5aeaf111208ad75a673e9dd5ee2260632f6d2a4480657be5fb1f01a2dfbb93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFDQYDFT%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T081038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQCr6VE6%2B4tOFF6wePskOc2mNBZlY79GXPjPqhl7%2F2NrmgIgCZnKno4Gj1kLOtFqv5KYgmnAvUe%2FGmIq4%2FmgkATCXxUq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDFos%2Bny2r9%2BLPRfPaCrcA8IW2OU05ZQk1Nv3qhE8FaWOCimj%2BcfDwzYzjUVeW80glYa5ieYXCzAotz8WMjcAD0eSIWHyKwNagH7XkwkzEkErWpxdU5kWhEJkGaxYRTa37jZsUBrHkMi6%2FWBFePhZnSQtDtR%2Bp2QZTByq0WZdKD04Tnzo5YkV7h1VAIeHo98PwnIUDYW2pwY5qhbuPIZU3%2FycO5YvAC5oibHlqmZNO6iB9QqORrjFAIK1Asue2PiPugT7ywi4td0V%2Fcjn0KhbVfeyHn5nvPy8qijBtuy3CasOM%2BP7Ynr%2BlkRJ0ggUrr%2Bb0bHty%2FlLhIOctXly7ZRkenFANjwx7ThweGPSSXQXTyTPONNykqIBbj%2FSHc8qHLL7DTiFthUlGwu3Jh4qBekUnIc1JIVzYwB1oi9jRAgKV2CGKw%2F8C88XQnKGQcwJ3sya8ydwKorIjHnUGGVs4LbBOz0qPX4b1j9KspOZc%2BvVOZj2el2ih3nphIvoLbkMwwfprdz6msVbaG4u7QdJe%2BScaDK5vn9F3QffE8eq%2FqP75Ctf9ufU6PFeniHU1QqYu1n95qQD%2B8YQsMiaGwCSpTgO21auL30QQG9KqXKep%2BmGTVzPhkC4KrSOpHJ6vHlyHv1Y6ETrj7GsfdJBVJHqMPG8tMIGOqUBfw7GlEUyZ5VHgNDWSlPL%2BYWy57J%2Bkpxq4cIvCxauez731XqAfVUUp%2BqUhhqKyQMvDL64Vy0MKWb5BeFGbN9uOwkYxGZhkQTwiqKflQfgjXXBdyiuxnyM%2FWrfp%2B4PiVIs71DHqAdh9lw7uYPkEqTw4HcVYu04De0p5BonL%2B6pDnOJ2CxBX3tmNOVFDh3FGdFkpHpd9hxmPVOsoRpW54WW0nMiH%2F6H&X-Amz-Signature=c9d010f82099f5dcf905b2fcc6d343180dfb9c5d1be24d2933248850f936b23e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
