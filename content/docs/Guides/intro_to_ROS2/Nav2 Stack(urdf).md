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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ2N6UDO%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T132224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3P3cv2nOfcQDJNfbW%2Bx989QHoUu9ci9%2Bp6F9MSrKptQIgPifAT565gdA4mklQZIa32bhrLiqs8dEYXa7aLIkvpjoqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQ5ykFIhpxDj2VapCrcA7Qrg8IgCPu%2BFbatgWxW9eWuqIYKhFGzJRZjDH3iF6MboxGZuMobXM8BHyj65lyr4%2FjWgdnUfmVvEeB3ymgYe3UcZEmjZesq9eJoRHcE1KRApZ%2Bmigm382Z5OL5kaaDFJ5jcajRIUb5sfF6R9rpI7xcz3BVADz5UQqLmI6di2jEvSgXNlZVj9mOrPc5kz1W%2Funau94ojus8egzPVHvh78XbV6IdWDvevNpx45OCXjiH4ITt9eqSjs7if2lcK2RdsrPnCu3Riv2peASHrWIKyU%2Bg6ZG3cRFxNhbw2LHULkrC23%2F1C%2BzruUGoHScSKT3TY520h1nUC0NWfC5Tb18xqNpXL3LaWjO%2BB%2BKpF15%2B8Ih6%2BIw3TbIGo%2FipdbbL%2FSIOjmA4Um2SA9Pbad1wH5Q6OBT7srDGcj%2FC5VKwHSmQd9PvMullXa1vixzUcZlYGeVhpQNjsYFayr47V%2BZXG8LQ22fpv3iOGXE%2FHjtaVd5GZZZZ%2F0wqYQ0XKM0tUg6zWqtST42zURLfvDn4v0%2FrvCjhv8FZ9sfvMhZYOs4KF50tm%2FzxiQAMA1wiQP8E91dIZXOM5kmymhOLHQ4KAuY9IisWBPTRpDzmILXC6gZ83iUxKYCysoNZJqqd0qjKtu7AZMJzj7cMGOqUBKdPm9KkLw5f4iJDB107zerAp1%2FEg6YfXBPfwAr5bv6v229mO8EEt1%2Fw2oSNuxd3CtXUCkSdxYOPLhZ5fa%2BzhAWDnaFlpNLTuw%2Bb8pu0TxgPaeAg%2FMUC%2Fzg11Ja74nvY2UffiRHD0R5tUJODsN%2B6no5%2BmVLR0lLS5HYZAX9%2BouOHcUW%2BB%2FQkgPzIE1jy4osMqx0EFm5NeCTVJHFp78mPKhHQg2DmF&X-Amz-Signature=6d73189f41540acdc71afc94dc23336af8a47332fe00bde22d7b70b396d6ccf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ2N6UDO%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T132224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3P3cv2nOfcQDJNfbW%2Bx989QHoUu9ci9%2Bp6F9MSrKptQIgPifAT565gdA4mklQZIa32bhrLiqs8dEYXa7aLIkvpjoqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQ5ykFIhpxDj2VapCrcA7Qrg8IgCPu%2BFbatgWxW9eWuqIYKhFGzJRZjDH3iF6MboxGZuMobXM8BHyj65lyr4%2FjWgdnUfmVvEeB3ymgYe3UcZEmjZesq9eJoRHcE1KRApZ%2Bmigm382Z5OL5kaaDFJ5jcajRIUb5sfF6R9rpI7xcz3BVADz5UQqLmI6di2jEvSgXNlZVj9mOrPc5kz1W%2Funau94ojus8egzPVHvh78XbV6IdWDvevNpx45OCXjiH4ITt9eqSjs7if2lcK2RdsrPnCu3Riv2peASHrWIKyU%2Bg6ZG3cRFxNhbw2LHULkrC23%2F1C%2BzruUGoHScSKT3TY520h1nUC0NWfC5Tb18xqNpXL3LaWjO%2BB%2BKpF15%2B8Ih6%2BIw3TbIGo%2FipdbbL%2FSIOjmA4Um2SA9Pbad1wH5Q6OBT7srDGcj%2FC5VKwHSmQd9PvMullXa1vixzUcZlYGeVhpQNjsYFayr47V%2BZXG8LQ22fpv3iOGXE%2FHjtaVd5GZZZZ%2F0wqYQ0XKM0tUg6zWqtST42zURLfvDn4v0%2FrvCjhv8FZ9sfvMhZYOs4KF50tm%2FzxiQAMA1wiQP8E91dIZXOM5kmymhOLHQ4KAuY9IisWBPTRpDzmILXC6gZ83iUxKYCysoNZJqqd0qjKtu7AZMJzj7cMGOqUBKdPm9KkLw5f4iJDB107zerAp1%2FEg6YfXBPfwAr5bv6v229mO8EEt1%2Fw2oSNuxd3CtXUCkSdxYOPLhZ5fa%2BzhAWDnaFlpNLTuw%2Bb8pu0TxgPaeAg%2FMUC%2Fzg11Ja74nvY2UffiRHD0R5tUJODsN%2B6no5%2BmVLR0lLS5HYZAX9%2BouOHcUW%2BB%2FQkgPzIE1jy4osMqx0EFm5NeCTVJHFp78mPKhHQg2DmF&X-Amz-Signature=14679b4c96bac3e03987eb5435ac25f4811e7df4f72ce6f957eba8ce5c8d004d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ2N6UDO%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T132224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3P3cv2nOfcQDJNfbW%2Bx989QHoUu9ci9%2Bp6F9MSrKptQIgPifAT565gdA4mklQZIa32bhrLiqs8dEYXa7aLIkvpjoqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQ5ykFIhpxDj2VapCrcA7Qrg8IgCPu%2BFbatgWxW9eWuqIYKhFGzJRZjDH3iF6MboxGZuMobXM8BHyj65lyr4%2FjWgdnUfmVvEeB3ymgYe3UcZEmjZesq9eJoRHcE1KRApZ%2Bmigm382Z5OL5kaaDFJ5jcajRIUb5sfF6R9rpI7xcz3BVADz5UQqLmI6di2jEvSgXNlZVj9mOrPc5kz1W%2Funau94ojus8egzPVHvh78XbV6IdWDvevNpx45OCXjiH4ITt9eqSjs7if2lcK2RdsrPnCu3Riv2peASHrWIKyU%2Bg6ZG3cRFxNhbw2LHULkrC23%2F1C%2BzruUGoHScSKT3TY520h1nUC0NWfC5Tb18xqNpXL3LaWjO%2BB%2BKpF15%2B8Ih6%2BIw3TbIGo%2FipdbbL%2FSIOjmA4Um2SA9Pbad1wH5Q6OBT7srDGcj%2FC5VKwHSmQd9PvMullXa1vixzUcZlYGeVhpQNjsYFayr47V%2BZXG8LQ22fpv3iOGXE%2FHjtaVd5GZZZZ%2F0wqYQ0XKM0tUg6zWqtST42zURLfvDn4v0%2FrvCjhv8FZ9sfvMhZYOs4KF50tm%2FzxiQAMA1wiQP8E91dIZXOM5kmymhOLHQ4KAuY9IisWBPTRpDzmILXC6gZ83iUxKYCysoNZJqqd0qjKtu7AZMJzj7cMGOqUBKdPm9KkLw5f4iJDB107zerAp1%2FEg6YfXBPfwAr5bv6v229mO8EEt1%2Fw2oSNuxd3CtXUCkSdxYOPLhZ5fa%2BzhAWDnaFlpNLTuw%2Bb8pu0TxgPaeAg%2FMUC%2Fzg11Ja74nvY2UffiRHD0R5tUJODsN%2B6no5%2BmVLR0lLS5HYZAX9%2BouOHcUW%2BB%2FQkgPzIE1jy4osMqx0EFm5NeCTVJHFp78mPKhHQg2DmF&X-Amz-Signature=1d35f91bb524817857084461858919fb9ae8b9856ac413722824c28ef8c2e815&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ2N6UDO%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T132224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3P3cv2nOfcQDJNfbW%2Bx989QHoUu9ci9%2Bp6F9MSrKptQIgPifAT565gdA4mklQZIa32bhrLiqs8dEYXa7aLIkvpjoqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQ5ykFIhpxDj2VapCrcA7Qrg8IgCPu%2BFbatgWxW9eWuqIYKhFGzJRZjDH3iF6MboxGZuMobXM8BHyj65lyr4%2FjWgdnUfmVvEeB3ymgYe3UcZEmjZesq9eJoRHcE1KRApZ%2Bmigm382Z5OL5kaaDFJ5jcajRIUb5sfF6R9rpI7xcz3BVADz5UQqLmI6di2jEvSgXNlZVj9mOrPc5kz1W%2Funau94ojus8egzPVHvh78XbV6IdWDvevNpx45OCXjiH4ITt9eqSjs7if2lcK2RdsrPnCu3Riv2peASHrWIKyU%2Bg6ZG3cRFxNhbw2LHULkrC23%2F1C%2BzruUGoHScSKT3TY520h1nUC0NWfC5Tb18xqNpXL3LaWjO%2BB%2BKpF15%2B8Ih6%2BIw3TbIGo%2FipdbbL%2FSIOjmA4Um2SA9Pbad1wH5Q6OBT7srDGcj%2FC5VKwHSmQd9PvMullXa1vixzUcZlYGeVhpQNjsYFayr47V%2BZXG8LQ22fpv3iOGXE%2FHjtaVd5GZZZZ%2F0wqYQ0XKM0tUg6zWqtST42zURLfvDn4v0%2FrvCjhv8FZ9sfvMhZYOs4KF50tm%2FzxiQAMA1wiQP8E91dIZXOM5kmymhOLHQ4KAuY9IisWBPTRpDzmILXC6gZ83iUxKYCysoNZJqqd0qjKtu7AZMJzj7cMGOqUBKdPm9KkLw5f4iJDB107zerAp1%2FEg6YfXBPfwAr5bv6v229mO8EEt1%2Fw2oSNuxd3CtXUCkSdxYOPLhZ5fa%2BzhAWDnaFlpNLTuw%2Bb8pu0TxgPaeAg%2FMUC%2Fzg11Ja74nvY2UffiRHD0R5tUJODsN%2B6no5%2BmVLR0lLS5HYZAX9%2BouOHcUW%2BB%2FQkgPzIE1jy4osMqx0EFm5NeCTVJHFp78mPKhHQg2DmF&X-Amz-Signature=e183e490f10870f04750faa48b42177704379d64c52da619ff72dcce4048d831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ2N6UDO%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T132224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3P3cv2nOfcQDJNfbW%2Bx989QHoUu9ci9%2Bp6F9MSrKptQIgPifAT565gdA4mklQZIa32bhrLiqs8dEYXa7aLIkvpjoqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQ5ykFIhpxDj2VapCrcA7Qrg8IgCPu%2BFbatgWxW9eWuqIYKhFGzJRZjDH3iF6MboxGZuMobXM8BHyj65lyr4%2FjWgdnUfmVvEeB3ymgYe3UcZEmjZesq9eJoRHcE1KRApZ%2Bmigm382Z5OL5kaaDFJ5jcajRIUb5sfF6R9rpI7xcz3BVADz5UQqLmI6di2jEvSgXNlZVj9mOrPc5kz1W%2Funau94ojus8egzPVHvh78XbV6IdWDvevNpx45OCXjiH4ITt9eqSjs7if2lcK2RdsrPnCu3Riv2peASHrWIKyU%2Bg6ZG3cRFxNhbw2LHULkrC23%2F1C%2BzruUGoHScSKT3TY520h1nUC0NWfC5Tb18xqNpXL3LaWjO%2BB%2BKpF15%2B8Ih6%2BIw3TbIGo%2FipdbbL%2FSIOjmA4Um2SA9Pbad1wH5Q6OBT7srDGcj%2FC5VKwHSmQd9PvMullXa1vixzUcZlYGeVhpQNjsYFayr47V%2BZXG8LQ22fpv3iOGXE%2FHjtaVd5GZZZZ%2F0wqYQ0XKM0tUg6zWqtST42zURLfvDn4v0%2FrvCjhv8FZ9sfvMhZYOs4KF50tm%2FzxiQAMA1wiQP8E91dIZXOM5kmymhOLHQ4KAuY9IisWBPTRpDzmILXC6gZ83iUxKYCysoNZJqqd0qjKtu7AZMJzj7cMGOqUBKdPm9KkLw5f4iJDB107zerAp1%2FEg6YfXBPfwAr5bv6v229mO8EEt1%2Fw2oSNuxd3CtXUCkSdxYOPLhZ5fa%2BzhAWDnaFlpNLTuw%2Bb8pu0TxgPaeAg%2FMUC%2Fzg11Ja74nvY2UffiRHD0R5tUJODsN%2B6no5%2BmVLR0lLS5HYZAX9%2BouOHcUW%2BB%2FQkgPzIE1jy4osMqx0EFm5NeCTVJHFp78mPKhHQg2DmF&X-Amz-Signature=733eebbd072e4e361b4c21cdbc0a2a01d49b7851353274d139b61ce7d084808f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ2N6UDO%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T132224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3P3cv2nOfcQDJNfbW%2Bx989QHoUu9ci9%2Bp6F9MSrKptQIgPifAT565gdA4mklQZIa32bhrLiqs8dEYXa7aLIkvpjoqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQ5ykFIhpxDj2VapCrcA7Qrg8IgCPu%2BFbatgWxW9eWuqIYKhFGzJRZjDH3iF6MboxGZuMobXM8BHyj65lyr4%2FjWgdnUfmVvEeB3ymgYe3UcZEmjZesq9eJoRHcE1KRApZ%2Bmigm382Z5OL5kaaDFJ5jcajRIUb5sfF6R9rpI7xcz3BVADz5UQqLmI6di2jEvSgXNlZVj9mOrPc5kz1W%2Funau94ojus8egzPVHvh78XbV6IdWDvevNpx45OCXjiH4ITt9eqSjs7if2lcK2RdsrPnCu3Riv2peASHrWIKyU%2Bg6ZG3cRFxNhbw2LHULkrC23%2F1C%2BzruUGoHScSKT3TY520h1nUC0NWfC5Tb18xqNpXL3LaWjO%2BB%2BKpF15%2B8Ih6%2BIw3TbIGo%2FipdbbL%2FSIOjmA4Um2SA9Pbad1wH5Q6OBT7srDGcj%2FC5VKwHSmQd9PvMullXa1vixzUcZlYGeVhpQNjsYFayr47V%2BZXG8LQ22fpv3iOGXE%2FHjtaVd5GZZZZ%2F0wqYQ0XKM0tUg6zWqtST42zURLfvDn4v0%2FrvCjhv8FZ9sfvMhZYOs4KF50tm%2FzxiQAMA1wiQP8E91dIZXOM5kmymhOLHQ4KAuY9IisWBPTRpDzmILXC6gZ83iUxKYCysoNZJqqd0qjKtu7AZMJzj7cMGOqUBKdPm9KkLw5f4iJDB107zerAp1%2FEg6YfXBPfwAr5bv6v229mO8EEt1%2Fw2oSNuxd3CtXUCkSdxYOPLhZ5fa%2BzhAWDnaFlpNLTuw%2Bb8pu0TxgPaeAg%2FMUC%2Fzg11Ja74nvY2UffiRHD0R5tUJODsN%2B6no5%2BmVLR0lLS5HYZAX9%2BouOHcUW%2BB%2FQkgPzIE1jy4osMqx0EFm5NeCTVJHFp78mPKhHQg2DmF&X-Amz-Signature=3be03a157847f9b515d0494dd7954d7898c1939c4c42637d2d1db8b75f8d35d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
