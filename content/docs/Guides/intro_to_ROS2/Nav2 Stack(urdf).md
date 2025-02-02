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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWFMUWWY%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T190130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLvs8Ny5QlrtU0Nu0ChDcNKV5vO3hcqJA41RQMb5H7QAIhAISCwtyv7Z3gR%2BiRYx6qEtUf34EGIVj6XjBBBXfPxqLzKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLSuS4rKcSu5zowhIq3ANDhtQR%2FzaS5hrBwmpjkyPt%2BTYj%2FppZXlS8hNGY0C%2F8QgTFmLQeFZiOuBoZVkyhotlZ3BPAY7v0JWWoFvm83Omiv5imfoWsZCMS%2FdMG03b%2F4JPiDJnrc1YJfvJ7%2Be6TP51wFPP3UzhDfecahKturUdda%2FzKQCLKJ%2BOYdHpNauTPvTQDCoojGW0TvlCrSGbsHpiGyxH%2FS4YAcXryeNYhIQM3AwoW6PgxKpaNRADA0W3GRJcb6D19xrjOMFXndosOiRxgJFjPBBmDqJIap%2FPhZM%2F%2FeFVbg%2BTxVvoy8%2BGFGydABk5AyC01EdtAU6gKyItGIkWujyUHKG%2FO%2Fvpsgt612jWlZQoV9hnfL06uT5XnL5dIrPpLd%2FIGy7wPSosuYD0nlsgovoCaWG06qHEPvLJTPecQldab2aWyEMe78%2B%2B36CZG5XrWUTWR%2BSVPkxFskrMGwktBpDAiCj5rdysgVfwRMGomptWJ8ZjSkSVKTmakHEfgCn0vcayTVBWhoWc89ijt2fRv0w3PxGDL1oxlZ26egtPZjSBSss85y0VxNQ0gZXCAYtqYoyhBIMWvPnSmHmL270nvA9bDvaSKuZ4YT6nhRdR%2FGlL45A3zO4TDxYxC0J4wRu5Ta84VHNUDbLu8GzDm2%2F68BjqkAZ5NgWDETAUBsejpXYil9POITJwv6oioc7Q1DwhjeqYjcaGXJ2Sxi2dp1mLBikKV%2FA0kvsmObo8gekHV06Q75BCi8htJVWGsUG4snLxn6zVpDxCaJWuRH9oiqkeAPB9ZLFDKdfVdYJRijiGO4CQOFzmaRa5ehCPbb7C2sFW0ZrNovL7KNYm9vIp6ovcZgx%2BxLl%2FDc4NU0f%2FGxgLGlo9NWxhipkYU&X-Amz-Signature=51c1646be78f85ab8256d2e22470f511823069242796e5dddd5ac82854910946&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWFMUWWY%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T190130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLvs8Ny5QlrtU0Nu0ChDcNKV5vO3hcqJA41RQMb5H7QAIhAISCwtyv7Z3gR%2BiRYx6qEtUf34EGIVj6XjBBBXfPxqLzKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLSuS4rKcSu5zowhIq3ANDhtQR%2FzaS5hrBwmpjkyPt%2BTYj%2FppZXlS8hNGY0C%2F8QgTFmLQeFZiOuBoZVkyhotlZ3BPAY7v0JWWoFvm83Omiv5imfoWsZCMS%2FdMG03b%2F4JPiDJnrc1YJfvJ7%2Be6TP51wFPP3UzhDfecahKturUdda%2FzKQCLKJ%2BOYdHpNauTPvTQDCoojGW0TvlCrSGbsHpiGyxH%2FS4YAcXryeNYhIQM3AwoW6PgxKpaNRADA0W3GRJcb6D19xrjOMFXndosOiRxgJFjPBBmDqJIap%2FPhZM%2F%2FeFVbg%2BTxVvoy8%2BGFGydABk5AyC01EdtAU6gKyItGIkWujyUHKG%2FO%2Fvpsgt612jWlZQoV9hnfL06uT5XnL5dIrPpLd%2FIGy7wPSosuYD0nlsgovoCaWG06qHEPvLJTPecQldab2aWyEMe78%2B%2B36CZG5XrWUTWR%2BSVPkxFskrMGwktBpDAiCj5rdysgVfwRMGomptWJ8ZjSkSVKTmakHEfgCn0vcayTVBWhoWc89ijt2fRv0w3PxGDL1oxlZ26egtPZjSBSss85y0VxNQ0gZXCAYtqYoyhBIMWvPnSmHmL270nvA9bDvaSKuZ4YT6nhRdR%2FGlL45A3zO4TDxYxC0J4wRu5Ta84VHNUDbLu8GzDm2%2F68BjqkAZ5NgWDETAUBsejpXYil9POITJwv6oioc7Q1DwhjeqYjcaGXJ2Sxi2dp1mLBikKV%2FA0kvsmObo8gekHV06Q75BCi8htJVWGsUG4snLxn6zVpDxCaJWuRH9oiqkeAPB9ZLFDKdfVdYJRijiGO4CQOFzmaRa5ehCPbb7C2sFW0ZrNovL7KNYm9vIp6ovcZgx%2BxLl%2FDc4NU0f%2FGxgLGlo9NWxhipkYU&X-Amz-Signature=da592c2234bb15cb7fbf9a1ec24b2b18e31bcfde4272ca38caa8d10185312d27&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWFMUWWY%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T190130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLvs8Ny5QlrtU0Nu0ChDcNKV5vO3hcqJA41RQMb5H7QAIhAISCwtyv7Z3gR%2BiRYx6qEtUf34EGIVj6XjBBBXfPxqLzKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLSuS4rKcSu5zowhIq3ANDhtQR%2FzaS5hrBwmpjkyPt%2BTYj%2FppZXlS8hNGY0C%2F8QgTFmLQeFZiOuBoZVkyhotlZ3BPAY7v0JWWoFvm83Omiv5imfoWsZCMS%2FdMG03b%2F4JPiDJnrc1YJfvJ7%2Be6TP51wFPP3UzhDfecahKturUdda%2FzKQCLKJ%2BOYdHpNauTPvTQDCoojGW0TvlCrSGbsHpiGyxH%2FS4YAcXryeNYhIQM3AwoW6PgxKpaNRADA0W3GRJcb6D19xrjOMFXndosOiRxgJFjPBBmDqJIap%2FPhZM%2F%2FeFVbg%2BTxVvoy8%2BGFGydABk5AyC01EdtAU6gKyItGIkWujyUHKG%2FO%2Fvpsgt612jWlZQoV9hnfL06uT5XnL5dIrPpLd%2FIGy7wPSosuYD0nlsgovoCaWG06qHEPvLJTPecQldab2aWyEMe78%2B%2B36CZG5XrWUTWR%2BSVPkxFskrMGwktBpDAiCj5rdysgVfwRMGomptWJ8ZjSkSVKTmakHEfgCn0vcayTVBWhoWc89ijt2fRv0w3PxGDL1oxlZ26egtPZjSBSss85y0VxNQ0gZXCAYtqYoyhBIMWvPnSmHmL270nvA9bDvaSKuZ4YT6nhRdR%2FGlL45A3zO4TDxYxC0J4wRu5Ta84VHNUDbLu8GzDm2%2F68BjqkAZ5NgWDETAUBsejpXYil9POITJwv6oioc7Q1DwhjeqYjcaGXJ2Sxi2dp1mLBikKV%2FA0kvsmObo8gekHV06Q75BCi8htJVWGsUG4snLxn6zVpDxCaJWuRH9oiqkeAPB9ZLFDKdfVdYJRijiGO4CQOFzmaRa5ehCPbb7C2sFW0ZrNovL7KNYm9vIp6ovcZgx%2BxLl%2FDc4NU0f%2FGxgLGlo9NWxhipkYU&X-Amz-Signature=de02beb105952fce0e20325141ddddcecf69f341c323b3daec7f9de757a52154&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWFMUWWY%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T190130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLvs8Ny5QlrtU0Nu0ChDcNKV5vO3hcqJA41RQMb5H7QAIhAISCwtyv7Z3gR%2BiRYx6qEtUf34EGIVj6XjBBBXfPxqLzKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLSuS4rKcSu5zowhIq3ANDhtQR%2FzaS5hrBwmpjkyPt%2BTYj%2FppZXlS8hNGY0C%2F8QgTFmLQeFZiOuBoZVkyhotlZ3BPAY7v0JWWoFvm83Omiv5imfoWsZCMS%2FdMG03b%2F4JPiDJnrc1YJfvJ7%2Be6TP51wFPP3UzhDfecahKturUdda%2FzKQCLKJ%2BOYdHpNauTPvTQDCoojGW0TvlCrSGbsHpiGyxH%2FS4YAcXryeNYhIQM3AwoW6PgxKpaNRADA0W3GRJcb6D19xrjOMFXndosOiRxgJFjPBBmDqJIap%2FPhZM%2F%2FeFVbg%2BTxVvoy8%2BGFGydABk5AyC01EdtAU6gKyItGIkWujyUHKG%2FO%2Fvpsgt612jWlZQoV9hnfL06uT5XnL5dIrPpLd%2FIGy7wPSosuYD0nlsgovoCaWG06qHEPvLJTPecQldab2aWyEMe78%2B%2B36CZG5XrWUTWR%2BSVPkxFskrMGwktBpDAiCj5rdysgVfwRMGomptWJ8ZjSkSVKTmakHEfgCn0vcayTVBWhoWc89ijt2fRv0w3PxGDL1oxlZ26egtPZjSBSss85y0VxNQ0gZXCAYtqYoyhBIMWvPnSmHmL270nvA9bDvaSKuZ4YT6nhRdR%2FGlL45A3zO4TDxYxC0J4wRu5Ta84VHNUDbLu8GzDm2%2F68BjqkAZ5NgWDETAUBsejpXYil9POITJwv6oioc7Q1DwhjeqYjcaGXJ2Sxi2dp1mLBikKV%2FA0kvsmObo8gekHV06Q75BCi8htJVWGsUG4snLxn6zVpDxCaJWuRH9oiqkeAPB9ZLFDKdfVdYJRijiGO4CQOFzmaRa5ehCPbb7C2sFW0ZrNovL7KNYm9vIp6ovcZgx%2BxLl%2FDc4NU0f%2FGxgLGlo9NWxhipkYU&X-Amz-Signature=82c7ec72b31f06a73c6fddf1c81ed80c03286f9fb03a3f1b8dfa7241f5d98f41&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWFMUWWY%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T190130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLvs8Ny5QlrtU0Nu0ChDcNKV5vO3hcqJA41RQMb5H7QAIhAISCwtyv7Z3gR%2BiRYx6qEtUf34EGIVj6XjBBBXfPxqLzKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLSuS4rKcSu5zowhIq3ANDhtQR%2FzaS5hrBwmpjkyPt%2BTYj%2FppZXlS8hNGY0C%2F8QgTFmLQeFZiOuBoZVkyhotlZ3BPAY7v0JWWoFvm83Omiv5imfoWsZCMS%2FdMG03b%2F4JPiDJnrc1YJfvJ7%2Be6TP51wFPP3UzhDfecahKturUdda%2FzKQCLKJ%2BOYdHpNauTPvTQDCoojGW0TvlCrSGbsHpiGyxH%2FS4YAcXryeNYhIQM3AwoW6PgxKpaNRADA0W3GRJcb6D19xrjOMFXndosOiRxgJFjPBBmDqJIap%2FPhZM%2F%2FeFVbg%2BTxVvoy8%2BGFGydABk5AyC01EdtAU6gKyItGIkWujyUHKG%2FO%2Fvpsgt612jWlZQoV9hnfL06uT5XnL5dIrPpLd%2FIGy7wPSosuYD0nlsgovoCaWG06qHEPvLJTPecQldab2aWyEMe78%2B%2B36CZG5XrWUTWR%2BSVPkxFskrMGwktBpDAiCj5rdysgVfwRMGomptWJ8ZjSkSVKTmakHEfgCn0vcayTVBWhoWc89ijt2fRv0w3PxGDL1oxlZ26egtPZjSBSss85y0VxNQ0gZXCAYtqYoyhBIMWvPnSmHmL270nvA9bDvaSKuZ4YT6nhRdR%2FGlL45A3zO4TDxYxC0J4wRu5Ta84VHNUDbLu8GzDm2%2F68BjqkAZ5NgWDETAUBsejpXYil9POITJwv6oioc7Q1DwhjeqYjcaGXJ2Sxi2dp1mLBikKV%2FA0kvsmObo8gekHV06Q75BCi8htJVWGsUG4snLxn6zVpDxCaJWuRH9oiqkeAPB9ZLFDKdfVdYJRijiGO4CQOFzmaRa5ehCPbb7C2sFW0ZrNovL7KNYm9vIp6ovcZgx%2BxLl%2FDc4NU0f%2FGxgLGlo9NWxhipkYU&X-Amz-Signature=f7e7fec4ee7b6595d4087d674c7a70a4d18ac8ea125af311c7a0c6a6005bf75c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWFMUWWY%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T190130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLvs8Ny5QlrtU0Nu0ChDcNKV5vO3hcqJA41RQMb5H7QAIhAISCwtyv7Z3gR%2BiRYx6qEtUf34EGIVj6XjBBBXfPxqLzKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLSuS4rKcSu5zowhIq3ANDhtQR%2FzaS5hrBwmpjkyPt%2BTYj%2FppZXlS8hNGY0C%2F8QgTFmLQeFZiOuBoZVkyhotlZ3BPAY7v0JWWoFvm83Omiv5imfoWsZCMS%2FdMG03b%2F4JPiDJnrc1YJfvJ7%2Be6TP51wFPP3UzhDfecahKturUdda%2FzKQCLKJ%2BOYdHpNauTPvTQDCoojGW0TvlCrSGbsHpiGyxH%2FS4YAcXryeNYhIQM3AwoW6PgxKpaNRADA0W3GRJcb6D19xrjOMFXndosOiRxgJFjPBBmDqJIap%2FPhZM%2F%2FeFVbg%2BTxVvoy8%2BGFGydABk5AyC01EdtAU6gKyItGIkWujyUHKG%2FO%2Fvpsgt612jWlZQoV9hnfL06uT5XnL5dIrPpLd%2FIGy7wPSosuYD0nlsgovoCaWG06qHEPvLJTPecQldab2aWyEMe78%2B%2B36CZG5XrWUTWR%2BSVPkxFskrMGwktBpDAiCj5rdysgVfwRMGomptWJ8ZjSkSVKTmakHEfgCn0vcayTVBWhoWc89ijt2fRv0w3PxGDL1oxlZ26egtPZjSBSss85y0VxNQ0gZXCAYtqYoyhBIMWvPnSmHmL270nvA9bDvaSKuZ4YT6nhRdR%2FGlL45A3zO4TDxYxC0J4wRu5Ta84VHNUDbLu8GzDm2%2F68BjqkAZ5NgWDETAUBsejpXYil9POITJwv6oioc7Q1DwhjeqYjcaGXJ2Sxi2dp1mLBikKV%2FA0kvsmObo8gekHV06Q75BCi8htJVWGsUG4snLxn6zVpDxCaJWuRH9oiqkeAPB9ZLFDKdfVdYJRijiGO4CQOFzmaRa5ehCPbb7C2sFW0ZrNovL7KNYm9vIp6ovcZgx%2BxLl%2FDc4NU0f%2FGxgLGlo9NWxhipkYU&X-Amz-Signature=37f84d0d811297768b302deb73958711e586ebe0fe2b1ea4b84af92afa6e4b7f&X-Amz-SignedHeaders=host&x-id=GetObject)
