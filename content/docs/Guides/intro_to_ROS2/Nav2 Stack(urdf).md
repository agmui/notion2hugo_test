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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTDKMUGG%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T200709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1LgRaHvc1Jki3zs4c4%2BJOYQUnO5tYkBe4D9cMU5e1SAiEA%2BHA%2BGpHxO7LB61jQaY2F61CbMGdsxo2%2FvpyYjS7Vok0qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmLh%2BLauEcQLOM73yrcA52r3GR5yWolau3p8ClbWQha1jMBvQoX0pvCpdjjoGwUHlPnOxQ4MWNlf%2FdbRhHd9AWYkEKqUcqaA7mig8R0J0%2Fnf0DFlUNSAV49XcEukzWi02olR7IAMVly68CZn78E2tep%2BpxVbGi47WY3KI6EWf3VPAq1GR7xwwRMqhHhrbVrhVQ6v4QaE2LQ2rBivuKcT8FvIIFWq7r1VhRTQlNX3PNYo2jRbAmBaRIXZKz%2FKfmrtwg4F9JeZ7dN%2FCwCvT7vb5lXWbdefTyCUGrt5X3I6FnnDkFOgdLluwOdnUWEyB8RYFL8eYLvn9zkEpN%2FXw5Ff8Gs0ctO%2BsDJIwVs8TzemMKhY9%2Fu7u6Gc6jQC8ofoZ8w3bLuQIqOHRUCaGS3rDLwGDcaVSDg41xEzo0t5zkA5YldGbu1IDMx7w8GLNmoa1wIL%2F7pNh9nkPpHTGiM3M8VAd3s4tzwY5PJ3lyd5ctoTIv0g2tf8UUF8qi5DhhM5x%2BvUJPSYkJoayEKofEdIS2%2FUB6faX4qv8AZ7ThloUbJqtR%2BtnBvfbHKj67Zv1c4QRLclXWFhRSN1Iwd7ezf%2FYlaCAMVm3juJZ5eaoavR4qGDT1m55%2Bw8qIXLF5pSpU8ccAv14oCf1eyHOESVq%2BZMMr4%2BbwGOqUBUKv0WUD0uxSNR07afJRD2JvOmosEiCQuySe8MJFj%2BGdJwTTB91k7zNSaWnmUQapJ0fBiwYf9pKx6YMmSX5j5TqI4Rz8Hhjn4Y24o4PnmY%2Fk0WwpGIAYn0PoCpd1%2BDjcUlrt8tlzvfWZJL2H0DIPhW2z4Zfa%2F5mgJnWZ0VXR%2BEOAFVmMoG05G%2FUT4lGnJtN0PxumYtBhOUvyY%2F92W0ge3IvuSw3EE&X-Amz-Signature=99501b7ee2ebcc7a38d45a44f024b9b8509d220ab5505e82bc73d3d9a8f96c18&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTDKMUGG%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T200709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1LgRaHvc1Jki3zs4c4%2BJOYQUnO5tYkBe4D9cMU5e1SAiEA%2BHA%2BGpHxO7LB61jQaY2F61CbMGdsxo2%2FvpyYjS7Vok0qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmLh%2BLauEcQLOM73yrcA52r3GR5yWolau3p8ClbWQha1jMBvQoX0pvCpdjjoGwUHlPnOxQ4MWNlf%2FdbRhHd9AWYkEKqUcqaA7mig8R0J0%2Fnf0DFlUNSAV49XcEukzWi02olR7IAMVly68CZn78E2tep%2BpxVbGi47WY3KI6EWf3VPAq1GR7xwwRMqhHhrbVrhVQ6v4QaE2LQ2rBivuKcT8FvIIFWq7r1VhRTQlNX3PNYo2jRbAmBaRIXZKz%2FKfmrtwg4F9JeZ7dN%2FCwCvT7vb5lXWbdefTyCUGrt5X3I6FnnDkFOgdLluwOdnUWEyB8RYFL8eYLvn9zkEpN%2FXw5Ff8Gs0ctO%2BsDJIwVs8TzemMKhY9%2Fu7u6Gc6jQC8ofoZ8w3bLuQIqOHRUCaGS3rDLwGDcaVSDg41xEzo0t5zkA5YldGbu1IDMx7w8GLNmoa1wIL%2F7pNh9nkPpHTGiM3M8VAd3s4tzwY5PJ3lyd5ctoTIv0g2tf8UUF8qi5DhhM5x%2BvUJPSYkJoayEKofEdIS2%2FUB6faX4qv8AZ7ThloUbJqtR%2BtnBvfbHKj67Zv1c4QRLclXWFhRSN1Iwd7ezf%2FYlaCAMVm3juJZ5eaoavR4qGDT1m55%2Bw8qIXLF5pSpU8ccAv14oCf1eyHOESVq%2BZMMr4%2BbwGOqUBUKv0WUD0uxSNR07afJRD2JvOmosEiCQuySe8MJFj%2BGdJwTTB91k7zNSaWnmUQapJ0fBiwYf9pKx6YMmSX5j5TqI4Rz8Hhjn4Y24o4PnmY%2Fk0WwpGIAYn0PoCpd1%2BDjcUlrt8tlzvfWZJL2H0DIPhW2z4Zfa%2F5mgJnWZ0VXR%2BEOAFVmMoG05G%2FUT4lGnJtN0PxumYtBhOUvyY%2F92W0ge3IvuSw3EE&X-Amz-Signature=73639174ae3168fe6c936fee7267e0cba5b8646fa28259df3eba13affafeaf55&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTDKMUGG%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T200709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1LgRaHvc1Jki3zs4c4%2BJOYQUnO5tYkBe4D9cMU5e1SAiEA%2BHA%2BGpHxO7LB61jQaY2F61CbMGdsxo2%2FvpyYjS7Vok0qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmLh%2BLauEcQLOM73yrcA52r3GR5yWolau3p8ClbWQha1jMBvQoX0pvCpdjjoGwUHlPnOxQ4MWNlf%2FdbRhHd9AWYkEKqUcqaA7mig8R0J0%2Fnf0DFlUNSAV49XcEukzWi02olR7IAMVly68CZn78E2tep%2BpxVbGi47WY3KI6EWf3VPAq1GR7xwwRMqhHhrbVrhVQ6v4QaE2LQ2rBivuKcT8FvIIFWq7r1VhRTQlNX3PNYo2jRbAmBaRIXZKz%2FKfmrtwg4F9JeZ7dN%2FCwCvT7vb5lXWbdefTyCUGrt5X3I6FnnDkFOgdLluwOdnUWEyB8RYFL8eYLvn9zkEpN%2FXw5Ff8Gs0ctO%2BsDJIwVs8TzemMKhY9%2Fu7u6Gc6jQC8ofoZ8w3bLuQIqOHRUCaGS3rDLwGDcaVSDg41xEzo0t5zkA5YldGbu1IDMx7w8GLNmoa1wIL%2F7pNh9nkPpHTGiM3M8VAd3s4tzwY5PJ3lyd5ctoTIv0g2tf8UUF8qi5DhhM5x%2BvUJPSYkJoayEKofEdIS2%2FUB6faX4qv8AZ7ThloUbJqtR%2BtnBvfbHKj67Zv1c4QRLclXWFhRSN1Iwd7ezf%2FYlaCAMVm3juJZ5eaoavR4qGDT1m55%2Bw8qIXLF5pSpU8ccAv14oCf1eyHOESVq%2BZMMr4%2BbwGOqUBUKv0WUD0uxSNR07afJRD2JvOmosEiCQuySe8MJFj%2BGdJwTTB91k7zNSaWnmUQapJ0fBiwYf9pKx6YMmSX5j5TqI4Rz8Hhjn4Y24o4PnmY%2Fk0WwpGIAYn0PoCpd1%2BDjcUlrt8tlzvfWZJL2H0DIPhW2z4Zfa%2F5mgJnWZ0VXR%2BEOAFVmMoG05G%2FUT4lGnJtN0PxumYtBhOUvyY%2F92W0ge3IvuSw3EE&X-Amz-Signature=091409f9d7e1ca00bbc6144bf4a636b23632b874c65c758b2916b78086cd50f9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTDKMUGG%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T200709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1LgRaHvc1Jki3zs4c4%2BJOYQUnO5tYkBe4D9cMU5e1SAiEA%2BHA%2BGpHxO7LB61jQaY2F61CbMGdsxo2%2FvpyYjS7Vok0qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmLh%2BLauEcQLOM73yrcA52r3GR5yWolau3p8ClbWQha1jMBvQoX0pvCpdjjoGwUHlPnOxQ4MWNlf%2FdbRhHd9AWYkEKqUcqaA7mig8R0J0%2Fnf0DFlUNSAV49XcEukzWi02olR7IAMVly68CZn78E2tep%2BpxVbGi47WY3KI6EWf3VPAq1GR7xwwRMqhHhrbVrhVQ6v4QaE2LQ2rBivuKcT8FvIIFWq7r1VhRTQlNX3PNYo2jRbAmBaRIXZKz%2FKfmrtwg4F9JeZ7dN%2FCwCvT7vb5lXWbdefTyCUGrt5X3I6FnnDkFOgdLluwOdnUWEyB8RYFL8eYLvn9zkEpN%2FXw5Ff8Gs0ctO%2BsDJIwVs8TzemMKhY9%2Fu7u6Gc6jQC8ofoZ8w3bLuQIqOHRUCaGS3rDLwGDcaVSDg41xEzo0t5zkA5YldGbu1IDMx7w8GLNmoa1wIL%2F7pNh9nkPpHTGiM3M8VAd3s4tzwY5PJ3lyd5ctoTIv0g2tf8UUF8qi5DhhM5x%2BvUJPSYkJoayEKofEdIS2%2FUB6faX4qv8AZ7ThloUbJqtR%2BtnBvfbHKj67Zv1c4QRLclXWFhRSN1Iwd7ezf%2FYlaCAMVm3juJZ5eaoavR4qGDT1m55%2Bw8qIXLF5pSpU8ccAv14oCf1eyHOESVq%2BZMMr4%2BbwGOqUBUKv0WUD0uxSNR07afJRD2JvOmosEiCQuySe8MJFj%2BGdJwTTB91k7zNSaWnmUQapJ0fBiwYf9pKx6YMmSX5j5TqI4Rz8Hhjn4Y24o4PnmY%2Fk0WwpGIAYn0PoCpd1%2BDjcUlrt8tlzvfWZJL2H0DIPhW2z4Zfa%2F5mgJnWZ0VXR%2BEOAFVmMoG05G%2FUT4lGnJtN0PxumYtBhOUvyY%2F92W0ge3IvuSw3EE&X-Amz-Signature=f0e8b0be5e8aa1aeeca6a1cfba429179496657061194de9dd7b008f30f7b6b7f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTDKMUGG%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T200709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1LgRaHvc1Jki3zs4c4%2BJOYQUnO5tYkBe4D9cMU5e1SAiEA%2BHA%2BGpHxO7LB61jQaY2F61CbMGdsxo2%2FvpyYjS7Vok0qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmLh%2BLauEcQLOM73yrcA52r3GR5yWolau3p8ClbWQha1jMBvQoX0pvCpdjjoGwUHlPnOxQ4MWNlf%2FdbRhHd9AWYkEKqUcqaA7mig8R0J0%2Fnf0DFlUNSAV49XcEukzWi02olR7IAMVly68CZn78E2tep%2BpxVbGi47WY3KI6EWf3VPAq1GR7xwwRMqhHhrbVrhVQ6v4QaE2LQ2rBivuKcT8FvIIFWq7r1VhRTQlNX3PNYo2jRbAmBaRIXZKz%2FKfmrtwg4F9JeZ7dN%2FCwCvT7vb5lXWbdefTyCUGrt5X3I6FnnDkFOgdLluwOdnUWEyB8RYFL8eYLvn9zkEpN%2FXw5Ff8Gs0ctO%2BsDJIwVs8TzemMKhY9%2Fu7u6Gc6jQC8ofoZ8w3bLuQIqOHRUCaGS3rDLwGDcaVSDg41xEzo0t5zkA5YldGbu1IDMx7w8GLNmoa1wIL%2F7pNh9nkPpHTGiM3M8VAd3s4tzwY5PJ3lyd5ctoTIv0g2tf8UUF8qi5DhhM5x%2BvUJPSYkJoayEKofEdIS2%2FUB6faX4qv8AZ7ThloUbJqtR%2BtnBvfbHKj67Zv1c4QRLclXWFhRSN1Iwd7ezf%2FYlaCAMVm3juJZ5eaoavR4qGDT1m55%2Bw8qIXLF5pSpU8ccAv14oCf1eyHOESVq%2BZMMr4%2BbwGOqUBUKv0WUD0uxSNR07afJRD2JvOmosEiCQuySe8MJFj%2BGdJwTTB91k7zNSaWnmUQapJ0fBiwYf9pKx6YMmSX5j5TqI4Rz8Hhjn4Y24o4PnmY%2Fk0WwpGIAYn0PoCpd1%2BDjcUlrt8tlzvfWZJL2H0DIPhW2z4Zfa%2F5mgJnWZ0VXR%2BEOAFVmMoG05G%2FUT4lGnJtN0PxumYtBhOUvyY%2F92W0ge3IvuSw3EE&X-Amz-Signature=7d888e42dac42941b0ddd7ea2f91c7fbf54f3d4a7b078464ab4e92b2be364100&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTDKMUGG%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T200709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA1LgRaHvc1Jki3zs4c4%2BJOYQUnO5tYkBe4D9cMU5e1SAiEA%2BHA%2BGpHxO7LB61jQaY2F61CbMGdsxo2%2FvpyYjS7Vok0qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPmLh%2BLauEcQLOM73yrcA52r3GR5yWolau3p8ClbWQha1jMBvQoX0pvCpdjjoGwUHlPnOxQ4MWNlf%2FdbRhHd9AWYkEKqUcqaA7mig8R0J0%2Fnf0DFlUNSAV49XcEukzWi02olR7IAMVly68CZn78E2tep%2BpxVbGi47WY3KI6EWf3VPAq1GR7xwwRMqhHhrbVrhVQ6v4QaE2LQ2rBivuKcT8FvIIFWq7r1VhRTQlNX3PNYo2jRbAmBaRIXZKz%2FKfmrtwg4F9JeZ7dN%2FCwCvT7vb5lXWbdefTyCUGrt5X3I6FnnDkFOgdLluwOdnUWEyB8RYFL8eYLvn9zkEpN%2FXw5Ff8Gs0ctO%2BsDJIwVs8TzemMKhY9%2Fu7u6Gc6jQC8ofoZ8w3bLuQIqOHRUCaGS3rDLwGDcaVSDg41xEzo0t5zkA5YldGbu1IDMx7w8GLNmoa1wIL%2F7pNh9nkPpHTGiM3M8VAd3s4tzwY5PJ3lyd5ctoTIv0g2tf8UUF8qi5DhhM5x%2BvUJPSYkJoayEKofEdIS2%2FUB6faX4qv8AZ7ThloUbJqtR%2BtnBvfbHKj67Zv1c4QRLclXWFhRSN1Iwd7ezf%2FYlaCAMVm3juJZ5eaoavR4qGDT1m55%2Bw8qIXLF5pSpU8ccAv14oCf1eyHOESVq%2BZMMr4%2BbwGOqUBUKv0WUD0uxSNR07afJRD2JvOmosEiCQuySe8MJFj%2BGdJwTTB91k7zNSaWnmUQapJ0fBiwYf9pKx6YMmSX5j5TqI4Rz8Hhjn4Y24o4PnmY%2Fk0WwpGIAYn0PoCpd1%2BDjcUlrt8tlzvfWZJL2H0DIPhW2z4Zfa%2F5mgJnWZ0VXR%2BEOAFVmMoG05G%2FUT4lGnJtN0PxumYtBhOUvyY%2F92W0ge3IvuSw3EE&X-Amz-Signature=100fed870d6c69750a88e4319120c017a95196811390836c38bca9fc922bdb36&X-Amz-SignedHeaders=host&x-id=GetObject)
