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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663REXXQH7%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0NnIHKarA%2B6rTPQHRmA1TnJ6amQyqGOy0uL7tZiShwAiEAuSHq5oYM%2FvxK9SbYj%2Bfd1vkOvebgZW6kArWAeDGApNEqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtyt6OzT46r%2FQrbXyrcA2aPVHQhkqqmbw9DScG2I9EJ4bDrJh2b5brkdDqt9DlUe8tmR9eMDu5Pl0AOMgaq1CvOMynCu%2B4ZDeBA9rvCwevioR%2Bcx3hmF6YIMOdaaNRpFYWIEg9RQoNIEpsrD8XtuvaAW97jnI0OtNQW6JsK08nDBIwa6RkTjScaTIf%2BVBr%2B6Py2rBMQGuz2ISh4K2Tbf9LI%2Fr%2BrCVOWRMsoCrWx5PWft2ZOiuky8PXawteqMuhx2amkCAaSMtQlEJ1iNGx2%2F%2F65E%2F6wzYLZF7rd33dAKBf4i6INMWywwwQaHmqyixAQS4cRYHCGBpwOXz0jTwmLZc3lOwxQonaC3vi3sQqYXryLWzVH4%2BywdwySVruiNGmhuWOrgEn90QEq5ZllsASAju3pSwAZMurrNUJeYIfv6V%2FCihbhcT4alwOZVGJqi8Ft6O%2BMrT5Mq5y0XTi6Epjli7o12zzN%2Bl3UNl7fP2lN1AFb%2FHzQPxeBTHvfQLuXWkpE42ztmNsEHwGZnTQvSFdb%2F3PzoQiw%2FMEHi2NrMEisph964QPjKDTZoYPgeFadVAMjC002bjTTuc9pmzeg5cnEqqgCnTUcgBrcasET4XOurWdNao2RgsMeZJypzKWpkVHqVAYeuqbrifI8UrBvMLST98MGOqUBJN%2BzttJFMwVrgstaa%2BVmVh4GNsiMbAamG%2Bmm3dUpKVjSrEb8mBWfaUs4Q3geyI08YsXHPIxtqmowzBINHKwjwf1Ahu0RcDHqpko9c676dlyepka6PjeRPsseOUeRhVaTopgwtORkEWfLsH94GdCnbXSPV7glC9LHeYBAXhiWPtcasc3BEO2VwuIxxwmr8xNNAycjgY46ljR6utGTxer7RDC%2BlqcB&X-Amz-Signature=20ec6abbce72129b57eb2a19a5370949af530dd1e269b99b2ae55b74758b035b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663REXXQH7%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0NnIHKarA%2B6rTPQHRmA1TnJ6amQyqGOy0uL7tZiShwAiEAuSHq5oYM%2FvxK9SbYj%2Bfd1vkOvebgZW6kArWAeDGApNEqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtyt6OzT46r%2FQrbXyrcA2aPVHQhkqqmbw9DScG2I9EJ4bDrJh2b5brkdDqt9DlUe8tmR9eMDu5Pl0AOMgaq1CvOMynCu%2B4ZDeBA9rvCwevioR%2Bcx3hmF6YIMOdaaNRpFYWIEg9RQoNIEpsrD8XtuvaAW97jnI0OtNQW6JsK08nDBIwa6RkTjScaTIf%2BVBr%2B6Py2rBMQGuz2ISh4K2Tbf9LI%2Fr%2BrCVOWRMsoCrWx5PWft2ZOiuky8PXawteqMuhx2amkCAaSMtQlEJ1iNGx2%2F%2F65E%2F6wzYLZF7rd33dAKBf4i6INMWywwwQaHmqyixAQS4cRYHCGBpwOXz0jTwmLZc3lOwxQonaC3vi3sQqYXryLWzVH4%2BywdwySVruiNGmhuWOrgEn90QEq5ZllsASAju3pSwAZMurrNUJeYIfv6V%2FCihbhcT4alwOZVGJqi8Ft6O%2BMrT5Mq5y0XTi6Epjli7o12zzN%2Bl3UNl7fP2lN1AFb%2FHzQPxeBTHvfQLuXWkpE42ztmNsEHwGZnTQvSFdb%2F3PzoQiw%2FMEHi2NrMEisph964QPjKDTZoYPgeFadVAMjC002bjTTuc9pmzeg5cnEqqgCnTUcgBrcasET4XOurWdNao2RgsMeZJypzKWpkVHqVAYeuqbrifI8UrBvMLST98MGOqUBJN%2BzttJFMwVrgstaa%2BVmVh4GNsiMbAamG%2Bmm3dUpKVjSrEb8mBWfaUs4Q3geyI08YsXHPIxtqmowzBINHKwjwf1Ahu0RcDHqpko9c676dlyepka6PjeRPsseOUeRhVaTopgwtORkEWfLsH94GdCnbXSPV7glC9LHeYBAXhiWPtcasc3BEO2VwuIxxwmr8xNNAycjgY46ljR6utGTxer7RDC%2BlqcB&X-Amz-Signature=c3ce1bb864de3a770f4dbeab215ee304378b7705162b0c62d3ffbb83b3045e2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663REXXQH7%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0NnIHKarA%2B6rTPQHRmA1TnJ6amQyqGOy0uL7tZiShwAiEAuSHq5oYM%2FvxK9SbYj%2Bfd1vkOvebgZW6kArWAeDGApNEqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtyt6OzT46r%2FQrbXyrcA2aPVHQhkqqmbw9DScG2I9EJ4bDrJh2b5brkdDqt9DlUe8tmR9eMDu5Pl0AOMgaq1CvOMynCu%2B4ZDeBA9rvCwevioR%2Bcx3hmF6YIMOdaaNRpFYWIEg9RQoNIEpsrD8XtuvaAW97jnI0OtNQW6JsK08nDBIwa6RkTjScaTIf%2BVBr%2B6Py2rBMQGuz2ISh4K2Tbf9LI%2Fr%2BrCVOWRMsoCrWx5PWft2ZOiuky8PXawteqMuhx2amkCAaSMtQlEJ1iNGx2%2F%2F65E%2F6wzYLZF7rd33dAKBf4i6INMWywwwQaHmqyixAQS4cRYHCGBpwOXz0jTwmLZc3lOwxQonaC3vi3sQqYXryLWzVH4%2BywdwySVruiNGmhuWOrgEn90QEq5ZllsASAju3pSwAZMurrNUJeYIfv6V%2FCihbhcT4alwOZVGJqi8Ft6O%2BMrT5Mq5y0XTi6Epjli7o12zzN%2Bl3UNl7fP2lN1AFb%2FHzQPxeBTHvfQLuXWkpE42ztmNsEHwGZnTQvSFdb%2F3PzoQiw%2FMEHi2NrMEisph964QPjKDTZoYPgeFadVAMjC002bjTTuc9pmzeg5cnEqqgCnTUcgBrcasET4XOurWdNao2RgsMeZJypzKWpkVHqVAYeuqbrifI8UrBvMLST98MGOqUBJN%2BzttJFMwVrgstaa%2BVmVh4GNsiMbAamG%2Bmm3dUpKVjSrEb8mBWfaUs4Q3geyI08YsXHPIxtqmowzBINHKwjwf1Ahu0RcDHqpko9c676dlyepka6PjeRPsseOUeRhVaTopgwtORkEWfLsH94GdCnbXSPV7glC9LHeYBAXhiWPtcasc3BEO2VwuIxxwmr8xNNAycjgY46ljR6utGTxer7RDC%2BlqcB&X-Amz-Signature=bf79ead823c9fd29bae525c61d1f9328260d4d9befb43ffc37240e97ef0c300f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663REXXQH7%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0NnIHKarA%2B6rTPQHRmA1TnJ6amQyqGOy0uL7tZiShwAiEAuSHq5oYM%2FvxK9SbYj%2Bfd1vkOvebgZW6kArWAeDGApNEqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtyt6OzT46r%2FQrbXyrcA2aPVHQhkqqmbw9DScG2I9EJ4bDrJh2b5brkdDqt9DlUe8tmR9eMDu5Pl0AOMgaq1CvOMynCu%2B4ZDeBA9rvCwevioR%2Bcx3hmF6YIMOdaaNRpFYWIEg9RQoNIEpsrD8XtuvaAW97jnI0OtNQW6JsK08nDBIwa6RkTjScaTIf%2BVBr%2B6Py2rBMQGuz2ISh4K2Tbf9LI%2Fr%2BrCVOWRMsoCrWx5PWft2ZOiuky8PXawteqMuhx2amkCAaSMtQlEJ1iNGx2%2F%2F65E%2F6wzYLZF7rd33dAKBf4i6INMWywwwQaHmqyixAQS4cRYHCGBpwOXz0jTwmLZc3lOwxQonaC3vi3sQqYXryLWzVH4%2BywdwySVruiNGmhuWOrgEn90QEq5ZllsASAju3pSwAZMurrNUJeYIfv6V%2FCihbhcT4alwOZVGJqi8Ft6O%2BMrT5Mq5y0XTi6Epjli7o12zzN%2Bl3UNl7fP2lN1AFb%2FHzQPxeBTHvfQLuXWkpE42ztmNsEHwGZnTQvSFdb%2F3PzoQiw%2FMEHi2NrMEisph964QPjKDTZoYPgeFadVAMjC002bjTTuc9pmzeg5cnEqqgCnTUcgBrcasET4XOurWdNao2RgsMeZJypzKWpkVHqVAYeuqbrifI8UrBvMLST98MGOqUBJN%2BzttJFMwVrgstaa%2BVmVh4GNsiMbAamG%2Bmm3dUpKVjSrEb8mBWfaUs4Q3geyI08YsXHPIxtqmowzBINHKwjwf1Ahu0RcDHqpko9c676dlyepka6PjeRPsseOUeRhVaTopgwtORkEWfLsH94GdCnbXSPV7glC9LHeYBAXhiWPtcasc3BEO2VwuIxxwmr8xNNAycjgY46ljR6utGTxer7RDC%2BlqcB&X-Amz-Signature=5e4e89ea4d8c85c539cc3c2876361ce2fc63c2581adfabf50b47dee4c484b7df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663REXXQH7%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0NnIHKarA%2B6rTPQHRmA1TnJ6amQyqGOy0uL7tZiShwAiEAuSHq5oYM%2FvxK9SbYj%2Bfd1vkOvebgZW6kArWAeDGApNEqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtyt6OzT46r%2FQrbXyrcA2aPVHQhkqqmbw9DScG2I9EJ4bDrJh2b5brkdDqt9DlUe8tmR9eMDu5Pl0AOMgaq1CvOMynCu%2B4ZDeBA9rvCwevioR%2Bcx3hmF6YIMOdaaNRpFYWIEg9RQoNIEpsrD8XtuvaAW97jnI0OtNQW6JsK08nDBIwa6RkTjScaTIf%2BVBr%2B6Py2rBMQGuz2ISh4K2Tbf9LI%2Fr%2BrCVOWRMsoCrWx5PWft2ZOiuky8PXawteqMuhx2amkCAaSMtQlEJ1iNGx2%2F%2F65E%2F6wzYLZF7rd33dAKBf4i6INMWywwwQaHmqyixAQS4cRYHCGBpwOXz0jTwmLZc3lOwxQonaC3vi3sQqYXryLWzVH4%2BywdwySVruiNGmhuWOrgEn90QEq5ZllsASAju3pSwAZMurrNUJeYIfv6V%2FCihbhcT4alwOZVGJqi8Ft6O%2BMrT5Mq5y0XTi6Epjli7o12zzN%2Bl3UNl7fP2lN1AFb%2FHzQPxeBTHvfQLuXWkpE42ztmNsEHwGZnTQvSFdb%2F3PzoQiw%2FMEHi2NrMEisph964QPjKDTZoYPgeFadVAMjC002bjTTuc9pmzeg5cnEqqgCnTUcgBrcasET4XOurWdNao2RgsMeZJypzKWpkVHqVAYeuqbrifI8UrBvMLST98MGOqUBJN%2BzttJFMwVrgstaa%2BVmVh4GNsiMbAamG%2Bmm3dUpKVjSrEb8mBWfaUs4Q3geyI08YsXHPIxtqmowzBINHKwjwf1Ahu0RcDHqpko9c676dlyepka6PjeRPsseOUeRhVaTopgwtORkEWfLsH94GdCnbXSPV7glC9LHeYBAXhiWPtcasc3BEO2VwuIxxwmr8xNNAycjgY46ljR6utGTxer7RDC%2BlqcB&X-Amz-Signature=1e8f81b8ab90a5a925c744c7f65f6635626a91482584de51260f4440bbbb6bfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663REXXQH7%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID0NnIHKarA%2B6rTPQHRmA1TnJ6amQyqGOy0uL7tZiShwAiEAuSHq5oYM%2FvxK9SbYj%2Bfd1vkOvebgZW6kArWAeDGApNEqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHtyt6OzT46r%2FQrbXyrcA2aPVHQhkqqmbw9DScG2I9EJ4bDrJh2b5brkdDqt9DlUe8tmR9eMDu5Pl0AOMgaq1CvOMynCu%2B4ZDeBA9rvCwevioR%2Bcx3hmF6YIMOdaaNRpFYWIEg9RQoNIEpsrD8XtuvaAW97jnI0OtNQW6JsK08nDBIwa6RkTjScaTIf%2BVBr%2B6Py2rBMQGuz2ISh4K2Tbf9LI%2Fr%2BrCVOWRMsoCrWx5PWft2ZOiuky8PXawteqMuhx2amkCAaSMtQlEJ1iNGx2%2F%2F65E%2F6wzYLZF7rd33dAKBf4i6INMWywwwQaHmqyixAQS4cRYHCGBpwOXz0jTwmLZc3lOwxQonaC3vi3sQqYXryLWzVH4%2BywdwySVruiNGmhuWOrgEn90QEq5ZllsASAju3pSwAZMurrNUJeYIfv6V%2FCihbhcT4alwOZVGJqi8Ft6O%2BMrT5Mq5y0XTi6Epjli7o12zzN%2Bl3UNl7fP2lN1AFb%2FHzQPxeBTHvfQLuXWkpE42ztmNsEHwGZnTQvSFdb%2F3PzoQiw%2FMEHi2NrMEisph964QPjKDTZoYPgeFadVAMjC002bjTTuc9pmzeg5cnEqqgCnTUcgBrcasET4XOurWdNao2RgsMeZJypzKWpkVHqVAYeuqbrifI8UrBvMLST98MGOqUBJN%2BzttJFMwVrgstaa%2BVmVh4GNsiMbAamG%2Bmm3dUpKVjSrEb8mBWfaUs4Q3geyI08YsXHPIxtqmowzBINHKwjwf1Ahu0RcDHqpko9c676dlyepka6PjeRPsseOUeRhVaTopgwtORkEWfLsH94GdCnbXSPV7glC9LHeYBAXhiWPtcasc3BEO2VwuIxxwmr8xNNAycjgY46ljR6utGTxer7RDC%2BlqcB&X-Amz-Signature=34a07c7edcb97ca5080367ace421d1f953fd78fc27f97a4284050522b31d876f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
