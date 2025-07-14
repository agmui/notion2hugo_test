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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OOWAVNQ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T035654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAh2ws0EKRuDeR5cbYrRkm7rXmUib1KBkZpuUqDE8O3cAiEA99DcvRZ80dyjUTsgUnAgLKRBJxMGg5ZmPYX5v%2BiaCKEq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDAmn5J4Y8tFaN1%2B4DCrcA0JSNdZiult1P%2BQOWYoVKdRzIgZRAtbYuavVHemQISGn0tyVUyhDLMVluAPBD5SbaQfAKE3QjKMMnugYLL%2BES3pre7dpuY4oS2WdJDybTlSy1TG3bvtB%2Fk%2FrQyMeI1amVb9elL8iAMa3eVzgiAfro%2BuCIEbQQb0c833if50WU%2FORAJElclZKGLs0E%2B%2FiOOm%2Bj0edBKUKPxZDZkAD1LpVoELnXpfPVzSvqPzE9cl8SaR3J3hhboLoQuJ1BP8dnP5sRac5BVGZgAxabV7%2BVnIlvVtOT4LcPowdTU%2BeupKEq6VlB9rq5Uvd9%2FcSyZDrmkPQWNNrzPCXzomfuRjWwbEYBRiHyfcAdBSsyQS2EEfaMi8ktiwklixf%2BbRsS06NguCCjLSAKWWbo08Cg7ZTajP45JVRMhZ9N%2BExUxxgiAjjvECumisbsbfbBZTFFgBZ8ns4EIUe70ehNRF8IUGjqOwsYUoWDP02HR7WvejUFggKkTgZWhFNbd3hqYXuihFfwPk65Ayuca0cqaBeqDDqO%2FamQd257gQ6gO2oC4IkKFW6j8GZzhCnq3FKeX0oc4o8HgAnhMqkW%2Bk%2Fpy68k7uddProZsOIENfGukTesEId7KOSXAXCMUlOQMTNfm84qt%2B2MITN0cMGOqUBcjc7iD%2BzfTGQiNNmSSTkw2ttlYgbfiuEkwgPGgITkUUGuu0LKzWcLgyqXLseHEayG%2FxK7VKwPgQ%2FJfoRk5ZRbOJUALHyiY1%2Fj1oZsAHurLzsbzKO0eDAmmrD8xv%2FCspm6USGI3HvcV9LkyUOTlBHFNJieJGI0P4HThGibnSHQixJXTQNTU1IuFLe5DbDMlRXa2xb2hl4B0LyxSlUUYwROi6QW0ad&X-Amz-Signature=f781a3a7b6fcc95d8beffdf4dd4f48025703fd7d7d4f635d114e598f005a44bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OOWAVNQ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T035654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAh2ws0EKRuDeR5cbYrRkm7rXmUib1KBkZpuUqDE8O3cAiEA99DcvRZ80dyjUTsgUnAgLKRBJxMGg5ZmPYX5v%2BiaCKEq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDAmn5J4Y8tFaN1%2B4DCrcA0JSNdZiult1P%2BQOWYoVKdRzIgZRAtbYuavVHemQISGn0tyVUyhDLMVluAPBD5SbaQfAKE3QjKMMnugYLL%2BES3pre7dpuY4oS2WdJDybTlSy1TG3bvtB%2Fk%2FrQyMeI1amVb9elL8iAMa3eVzgiAfro%2BuCIEbQQb0c833if50WU%2FORAJElclZKGLs0E%2B%2FiOOm%2Bj0edBKUKPxZDZkAD1LpVoELnXpfPVzSvqPzE9cl8SaR3J3hhboLoQuJ1BP8dnP5sRac5BVGZgAxabV7%2BVnIlvVtOT4LcPowdTU%2BeupKEq6VlB9rq5Uvd9%2FcSyZDrmkPQWNNrzPCXzomfuRjWwbEYBRiHyfcAdBSsyQS2EEfaMi8ktiwklixf%2BbRsS06NguCCjLSAKWWbo08Cg7ZTajP45JVRMhZ9N%2BExUxxgiAjjvECumisbsbfbBZTFFgBZ8ns4EIUe70ehNRF8IUGjqOwsYUoWDP02HR7WvejUFggKkTgZWhFNbd3hqYXuihFfwPk65Ayuca0cqaBeqDDqO%2FamQd257gQ6gO2oC4IkKFW6j8GZzhCnq3FKeX0oc4o8HgAnhMqkW%2Bk%2Fpy68k7uddProZsOIENfGukTesEId7KOSXAXCMUlOQMTNfm84qt%2B2MITN0cMGOqUBcjc7iD%2BzfTGQiNNmSSTkw2ttlYgbfiuEkwgPGgITkUUGuu0LKzWcLgyqXLseHEayG%2FxK7VKwPgQ%2FJfoRk5ZRbOJUALHyiY1%2Fj1oZsAHurLzsbzKO0eDAmmrD8xv%2FCspm6USGI3HvcV9LkyUOTlBHFNJieJGI0P4HThGibnSHQixJXTQNTU1IuFLe5DbDMlRXa2xb2hl4B0LyxSlUUYwROi6QW0ad&X-Amz-Signature=3e18d2e09f5763beb994fa27020758b537d52fd462df32f949a588481197be88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OOWAVNQ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T035654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAh2ws0EKRuDeR5cbYrRkm7rXmUib1KBkZpuUqDE8O3cAiEA99DcvRZ80dyjUTsgUnAgLKRBJxMGg5ZmPYX5v%2BiaCKEq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDAmn5J4Y8tFaN1%2B4DCrcA0JSNdZiult1P%2BQOWYoVKdRzIgZRAtbYuavVHemQISGn0tyVUyhDLMVluAPBD5SbaQfAKE3QjKMMnugYLL%2BES3pre7dpuY4oS2WdJDybTlSy1TG3bvtB%2Fk%2FrQyMeI1amVb9elL8iAMa3eVzgiAfro%2BuCIEbQQb0c833if50WU%2FORAJElclZKGLs0E%2B%2FiOOm%2Bj0edBKUKPxZDZkAD1LpVoELnXpfPVzSvqPzE9cl8SaR3J3hhboLoQuJ1BP8dnP5sRac5BVGZgAxabV7%2BVnIlvVtOT4LcPowdTU%2BeupKEq6VlB9rq5Uvd9%2FcSyZDrmkPQWNNrzPCXzomfuRjWwbEYBRiHyfcAdBSsyQS2EEfaMi8ktiwklixf%2BbRsS06NguCCjLSAKWWbo08Cg7ZTajP45JVRMhZ9N%2BExUxxgiAjjvECumisbsbfbBZTFFgBZ8ns4EIUe70ehNRF8IUGjqOwsYUoWDP02HR7WvejUFggKkTgZWhFNbd3hqYXuihFfwPk65Ayuca0cqaBeqDDqO%2FamQd257gQ6gO2oC4IkKFW6j8GZzhCnq3FKeX0oc4o8HgAnhMqkW%2Bk%2Fpy68k7uddProZsOIENfGukTesEId7KOSXAXCMUlOQMTNfm84qt%2B2MITN0cMGOqUBcjc7iD%2BzfTGQiNNmSSTkw2ttlYgbfiuEkwgPGgITkUUGuu0LKzWcLgyqXLseHEayG%2FxK7VKwPgQ%2FJfoRk5ZRbOJUALHyiY1%2Fj1oZsAHurLzsbzKO0eDAmmrD8xv%2FCspm6USGI3HvcV9LkyUOTlBHFNJieJGI0P4HThGibnSHQixJXTQNTU1IuFLe5DbDMlRXa2xb2hl4B0LyxSlUUYwROi6QW0ad&X-Amz-Signature=8b7dcbc2855e6065b93b12e433f0cf752a6d344a441aaf3f52f9b82041f8be64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OOWAVNQ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T035654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAh2ws0EKRuDeR5cbYrRkm7rXmUib1KBkZpuUqDE8O3cAiEA99DcvRZ80dyjUTsgUnAgLKRBJxMGg5ZmPYX5v%2BiaCKEq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDAmn5J4Y8tFaN1%2B4DCrcA0JSNdZiult1P%2BQOWYoVKdRzIgZRAtbYuavVHemQISGn0tyVUyhDLMVluAPBD5SbaQfAKE3QjKMMnugYLL%2BES3pre7dpuY4oS2WdJDybTlSy1TG3bvtB%2Fk%2FrQyMeI1amVb9elL8iAMa3eVzgiAfro%2BuCIEbQQb0c833if50WU%2FORAJElclZKGLs0E%2B%2FiOOm%2Bj0edBKUKPxZDZkAD1LpVoELnXpfPVzSvqPzE9cl8SaR3J3hhboLoQuJ1BP8dnP5sRac5BVGZgAxabV7%2BVnIlvVtOT4LcPowdTU%2BeupKEq6VlB9rq5Uvd9%2FcSyZDrmkPQWNNrzPCXzomfuRjWwbEYBRiHyfcAdBSsyQS2EEfaMi8ktiwklixf%2BbRsS06NguCCjLSAKWWbo08Cg7ZTajP45JVRMhZ9N%2BExUxxgiAjjvECumisbsbfbBZTFFgBZ8ns4EIUe70ehNRF8IUGjqOwsYUoWDP02HR7WvejUFggKkTgZWhFNbd3hqYXuihFfwPk65Ayuca0cqaBeqDDqO%2FamQd257gQ6gO2oC4IkKFW6j8GZzhCnq3FKeX0oc4o8HgAnhMqkW%2Bk%2Fpy68k7uddProZsOIENfGukTesEId7KOSXAXCMUlOQMTNfm84qt%2B2MITN0cMGOqUBcjc7iD%2BzfTGQiNNmSSTkw2ttlYgbfiuEkwgPGgITkUUGuu0LKzWcLgyqXLseHEayG%2FxK7VKwPgQ%2FJfoRk5ZRbOJUALHyiY1%2Fj1oZsAHurLzsbzKO0eDAmmrD8xv%2FCspm6USGI3HvcV9LkyUOTlBHFNJieJGI0P4HThGibnSHQixJXTQNTU1IuFLe5DbDMlRXa2xb2hl4B0LyxSlUUYwROi6QW0ad&X-Amz-Signature=97d5278bbfbbe4aa722a7a9d4918ad878f9fdff2330010548cfa081c3c901653&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OOWAVNQ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T035655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAh2ws0EKRuDeR5cbYrRkm7rXmUib1KBkZpuUqDE8O3cAiEA99DcvRZ80dyjUTsgUnAgLKRBJxMGg5ZmPYX5v%2BiaCKEq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDAmn5J4Y8tFaN1%2B4DCrcA0JSNdZiult1P%2BQOWYoVKdRzIgZRAtbYuavVHemQISGn0tyVUyhDLMVluAPBD5SbaQfAKE3QjKMMnugYLL%2BES3pre7dpuY4oS2WdJDybTlSy1TG3bvtB%2Fk%2FrQyMeI1amVb9elL8iAMa3eVzgiAfro%2BuCIEbQQb0c833if50WU%2FORAJElclZKGLs0E%2B%2FiOOm%2Bj0edBKUKPxZDZkAD1LpVoELnXpfPVzSvqPzE9cl8SaR3J3hhboLoQuJ1BP8dnP5sRac5BVGZgAxabV7%2BVnIlvVtOT4LcPowdTU%2BeupKEq6VlB9rq5Uvd9%2FcSyZDrmkPQWNNrzPCXzomfuRjWwbEYBRiHyfcAdBSsyQS2EEfaMi8ktiwklixf%2BbRsS06NguCCjLSAKWWbo08Cg7ZTajP45JVRMhZ9N%2BExUxxgiAjjvECumisbsbfbBZTFFgBZ8ns4EIUe70ehNRF8IUGjqOwsYUoWDP02HR7WvejUFggKkTgZWhFNbd3hqYXuihFfwPk65Ayuca0cqaBeqDDqO%2FamQd257gQ6gO2oC4IkKFW6j8GZzhCnq3FKeX0oc4o8HgAnhMqkW%2Bk%2Fpy68k7uddProZsOIENfGukTesEId7KOSXAXCMUlOQMTNfm84qt%2B2MITN0cMGOqUBcjc7iD%2BzfTGQiNNmSSTkw2ttlYgbfiuEkwgPGgITkUUGuu0LKzWcLgyqXLseHEayG%2FxK7VKwPgQ%2FJfoRk5ZRbOJUALHyiY1%2Fj1oZsAHurLzsbzKO0eDAmmrD8xv%2FCspm6USGI3HvcV9LkyUOTlBHFNJieJGI0P4HThGibnSHQixJXTQNTU1IuFLe5DbDMlRXa2xb2hl4B0LyxSlUUYwROi6QW0ad&X-Amz-Signature=944b02acd60ae91dd98a005186682e4e0ac84c9eeea0e318978705d0541d3f13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OOWAVNQ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T035655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIAh2ws0EKRuDeR5cbYrRkm7rXmUib1KBkZpuUqDE8O3cAiEA99DcvRZ80dyjUTsgUnAgLKRBJxMGg5ZmPYX5v%2BiaCKEq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDAmn5J4Y8tFaN1%2B4DCrcA0JSNdZiult1P%2BQOWYoVKdRzIgZRAtbYuavVHemQISGn0tyVUyhDLMVluAPBD5SbaQfAKE3QjKMMnugYLL%2BES3pre7dpuY4oS2WdJDybTlSy1TG3bvtB%2Fk%2FrQyMeI1amVb9elL8iAMa3eVzgiAfro%2BuCIEbQQb0c833if50WU%2FORAJElclZKGLs0E%2B%2FiOOm%2Bj0edBKUKPxZDZkAD1LpVoELnXpfPVzSvqPzE9cl8SaR3J3hhboLoQuJ1BP8dnP5sRac5BVGZgAxabV7%2BVnIlvVtOT4LcPowdTU%2BeupKEq6VlB9rq5Uvd9%2FcSyZDrmkPQWNNrzPCXzomfuRjWwbEYBRiHyfcAdBSsyQS2EEfaMi8ktiwklixf%2BbRsS06NguCCjLSAKWWbo08Cg7ZTajP45JVRMhZ9N%2BExUxxgiAjjvECumisbsbfbBZTFFgBZ8ns4EIUe70ehNRF8IUGjqOwsYUoWDP02HR7WvejUFggKkTgZWhFNbd3hqYXuihFfwPk65Ayuca0cqaBeqDDqO%2FamQd257gQ6gO2oC4IkKFW6j8GZzhCnq3FKeX0oc4o8HgAnhMqkW%2Bk%2Fpy68k7uddProZsOIENfGukTesEId7KOSXAXCMUlOQMTNfm84qt%2B2MITN0cMGOqUBcjc7iD%2BzfTGQiNNmSSTkw2ttlYgbfiuEkwgPGgITkUUGuu0LKzWcLgyqXLseHEayG%2FxK7VKwPgQ%2FJfoRk5ZRbOJUALHyiY1%2Fj1oZsAHurLzsbzKO0eDAmmrD8xv%2FCspm6USGI3HvcV9LkyUOTlBHFNJieJGI0P4HThGibnSHQixJXTQNTU1IuFLe5DbDMlRXa2xb2hl4B0LyxSlUUYwROi6QW0ad&X-Amz-Signature=107a2e9643f10765d5420de6d91224c4ed3e7a51fee860418c45db271cbec82d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
