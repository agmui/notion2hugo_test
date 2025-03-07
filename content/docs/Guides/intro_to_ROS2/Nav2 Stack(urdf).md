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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMGKZD6T%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T170726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQD9RUvJZH3BygcotbBZr68%2B%2F8TGAwluhikc65zAbrqw3gIhANBt7wcljfyU5QqOzA4DThOXS4kpIRgzv6%2BOwK2ddy%2BVKv8DCEoQABoMNjM3NDIzMTgzODA1IgydRewsOm%2FIvvgiGrEq3ANd4QaTHYa1Tleusf0j32FnUmSbopPGxVPmNVG%2By9tsCIdoy6IL7U5QR2fc8IW99XDkgYReFRLBS3YAgnebMaS0RexXr2AUe2X73ZmSTNtUlMIXNOKgNDf3%2BxgJXaUyAM0GZqQCUKQrMiypWmGN2ReRXPdrx%2BdpOihqF6A1711tRdnIckXbBm6xdcJ%2FRj65h9riVqKY4J7bZCkMfKPd1J2NytpMnQ0eCNPwK%2F%2BPrfwMiivy9HqutqC5VwBepnhvhyGQX60N1XtpfI7baAnROI8oFsa6CQiO5S30n2vhqKaZy2Lb4I2nIQSO4OV0FvUMIsakcgemidkXWhiJz9E2bRhotAEdinWd%2FFCqxOYUYUwyvbYxSanCjyAiO1Y69acBqAAG0%2BmGqKc3km3zL7KQMU7nqJ%2FJKu3yubwigd4jKb4vjfCdO2E9d267d%2Fni4m%2BypPRMAGOx2BmphxG%2Fu6vKkWt7l%2FyB4g%2FGgAMNzcLYyFS29eGZeDKBzNT0hamxsdmPBYWv97mWJ1ik08A5NZ4%2B%2Fp9bT7sQk%2FvfADicBs%2FlleuQvPVMrbXIeeD%2FGwFmmPBfDAxonDD0YeGOS1FDxoh8TuNAiYorWbWQk8fgkj5ZY0DbU1dS7TVmXeEP2aFnZDDuv6y%2BBjqkAYm%2BGAEmAsyOxb0WjbscipZdPcEfYzkxE6fcBF2YK2kHRdq7UdIeEAyixp1pm9AQxqerR0nzHKiY7N1f9bT8QTIpnXSAvIE%2Bf%2Bf8B7icvegKL3OPjB4D2sB4%2Bf%2BHUJzlSU6HN7lNboLYkLmQqtwdeZKYJN9p1BOa42ulc2YtLbEEvF9wCGSamWA6Vbu2k%2FYmKp%2BdFXHQuEnpRVoYVipsqJMe4dJX&X-Amz-Signature=7397750b33bbb434474b58aea3a8f20b84cd14896e1292f3b310053a9afd13d0&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMGKZD6T%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T170726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQD9RUvJZH3BygcotbBZr68%2B%2F8TGAwluhikc65zAbrqw3gIhANBt7wcljfyU5QqOzA4DThOXS4kpIRgzv6%2BOwK2ddy%2BVKv8DCEoQABoMNjM3NDIzMTgzODA1IgydRewsOm%2FIvvgiGrEq3ANd4QaTHYa1Tleusf0j32FnUmSbopPGxVPmNVG%2By9tsCIdoy6IL7U5QR2fc8IW99XDkgYReFRLBS3YAgnebMaS0RexXr2AUe2X73ZmSTNtUlMIXNOKgNDf3%2BxgJXaUyAM0GZqQCUKQrMiypWmGN2ReRXPdrx%2BdpOihqF6A1711tRdnIckXbBm6xdcJ%2FRj65h9riVqKY4J7bZCkMfKPd1J2NytpMnQ0eCNPwK%2F%2BPrfwMiivy9HqutqC5VwBepnhvhyGQX60N1XtpfI7baAnROI8oFsa6CQiO5S30n2vhqKaZy2Lb4I2nIQSO4OV0FvUMIsakcgemidkXWhiJz9E2bRhotAEdinWd%2FFCqxOYUYUwyvbYxSanCjyAiO1Y69acBqAAG0%2BmGqKc3km3zL7KQMU7nqJ%2FJKu3yubwigd4jKb4vjfCdO2E9d267d%2Fni4m%2BypPRMAGOx2BmphxG%2Fu6vKkWt7l%2FyB4g%2FGgAMNzcLYyFS29eGZeDKBzNT0hamxsdmPBYWv97mWJ1ik08A5NZ4%2B%2Fp9bT7sQk%2FvfADicBs%2FlleuQvPVMrbXIeeD%2FGwFmmPBfDAxonDD0YeGOS1FDxoh8TuNAiYorWbWQk8fgkj5ZY0DbU1dS7TVmXeEP2aFnZDDuv6y%2BBjqkAYm%2BGAEmAsyOxb0WjbscipZdPcEfYzkxE6fcBF2YK2kHRdq7UdIeEAyixp1pm9AQxqerR0nzHKiY7N1f9bT8QTIpnXSAvIE%2Bf%2Bf8B7icvegKL3OPjB4D2sB4%2Bf%2BHUJzlSU6HN7lNboLYkLmQqtwdeZKYJN9p1BOa42ulc2YtLbEEvF9wCGSamWA6Vbu2k%2FYmKp%2BdFXHQuEnpRVoYVipsqJMe4dJX&X-Amz-Signature=099a82c007ec5c2c71c0a5589fa97dfbb065f60e7f5679e32cf7e4486ed99012&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMGKZD6T%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T170726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQD9RUvJZH3BygcotbBZr68%2B%2F8TGAwluhikc65zAbrqw3gIhANBt7wcljfyU5QqOzA4DThOXS4kpIRgzv6%2BOwK2ddy%2BVKv8DCEoQABoMNjM3NDIzMTgzODA1IgydRewsOm%2FIvvgiGrEq3ANd4QaTHYa1Tleusf0j32FnUmSbopPGxVPmNVG%2By9tsCIdoy6IL7U5QR2fc8IW99XDkgYReFRLBS3YAgnebMaS0RexXr2AUe2X73ZmSTNtUlMIXNOKgNDf3%2BxgJXaUyAM0GZqQCUKQrMiypWmGN2ReRXPdrx%2BdpOihqF6A1711tRdnIckXbBm6xdcJ%2FRj65h9riVqKY4J7bZCkMfKPd1J2NytpMnQ0eCNPwK%2F%2BPrfwMiivy9HqutqC5VwBepnhvhyGQX60N1XtpfI7baAnROI8oFsa6CQiO5S30n2vhqKaZy2Lb4I2nIQSO4OV0FvUMIsakcgemidkXWhiJz9E2bRhotAEdinWd%2FFCqxOYUYUwyvbYxSanCjyAiO1Y69acBqAAG0%2BmGqKc3km3zL7KQMU7nqJ%2FJKu3yubwigd4jKb4vjfCdO2E9d267d%2Fni4m%2BypPRMAGOx2BmphxG%2Fu6vKkWt7l%2FyB4g%2FGgAMNzcLYyFS29eGZeDKBzNT0hamxsdmPBYWv97mWJ1ik08A5NZ4%2B%2Fp9bT7sQk%2FvfADicBs%2FlleuQvPVMrbXIeeD%2FGwFmmPBfDAxonDD0YeGOS1FDxoh8TuNAiYorWbWQk8fgkj5ZY0DbU1dS7TVmXeEP2aFnZDDuv6y%2BBjqkAYm%2BGAEmAsyOxb0WjbscipZdPcEfYzkxE6fcBF2YK2kHRdq7UdIeEAyixp1pm9AQxqerR0nzHKiY7N1f9bT8QTIpnXSAvIE%2Bf%2Bf8B7icvegKL3OPjB4D2sB4%2Bf%2BHUJzlSU6HN7lNboLYkLmQqtwdeZKYJN9p1BOa42ulc2YtLbEEvF9wCGSamWA6Vbu2k%2FYmKp%2BdFXHQuEnpRVoYVipsqJMe4dJX&X-Amz-Signature=17beb513a3e1dd39343bb71572594a8f745db73d6882ebd1e8ab445180b164ba&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMGKZD6T%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T170726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQD9RUvJZH3BygcotbBZr68%2B%2F8TGAwluhikc65zAbrqw3gIhANBt7wcljfyU5QqOzA4DThOXS4kpIRgzv6%2BOwK2ddy%2BVKv8DCEoQABoMNjM3NDIzMTgzODA1IgydRewsOm%2FIvvgiGrEq3ANd4QaTHYa1Tleusf0j32FnUmSbopPGxVPmNVG%2By9tsCIdoy6IL7U5QR2fc8IW99XDkgYReFRLBS3YAgnebMaS0RexXr2AUe2X73ZmSTNtUlMIXNOKgNDf3%2BxgJXaUyAM0GZqQCUKQrMiypWmGN2ReRXPdrx%2BdpOihqF6A1711tRdnIckXbBm6xdcJ%2FRj65h9riVqKY4J7bZCkMfKPd1J2NytpMnQ0eCNPwK%2F%2BPrfwMiivy9HqutqC5VwBepnhvhyGQX60N1XtpfI7baAnROI8oFsa6CQiO5S30n2vhqKaZy2Lb4I2nIQSO4OV0FvUMIsakcgemidkXWhiJz9E2bRhotAEdinWd%2FFCqxOYUYUwyvbYxSanCjyAiO1Y69acBqAAG0%2BmGqKc3km3zL7KQMU7nqJ%2FJKu3yubwigd4jKb4vjfCdO2E9d267d%2Fni4m%2BypPRMAGOx2BmphxG%2Fu6vKkWt7l%2FyB4g%2FGgAMNzcLYyFS29eGZeDKBzNT0hamxsdmPBYWv97mWJ1ik08A5NZ4%2B%2Fp9bT7sQk%2FvfADicBs%2FlleuQvPVMrbXIeeD%2FGwFmmPBfDAxonDD0YeGOS1FDxoh8TuNAiYorWbWQk8fgkj5ZY0DbU1dS7TVmXeEP2aFnZDDuv6y%2BBjqkAYm%2BGAEmAsyOxb0WjbscipZdPcEfYzkxE6fcBF2YK2kHRdq7UdIeEAyixp1pm9AQxqerR0nzHKiY7N1f9bT8QTIpnXSAvIE%2Bf%2Bf8B7icvegKL3OPjB4D2sB4%2Bf%2BHUJzlSU6HN7lNboLYkLmQqtwdeZKYJN9p1BOa42ulc2YtLbEEvF9wCGSamWA6Vbu2k%2FYmKp%2BdFXHQuEnpRVoYVipsqJMe4dJX&X-Amz-Signature=c4b1c19e03c4a402c6af4bd8ff6ed84900dad4e30ccb3ce2cb98edb51a405690&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMGKZD6T%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T170726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQD9RUvJZH3BygcotbBZr68%2B%2F8TGAwluhikc65zAbrqw3gIhANBt7wcljfyU5QqOzA4DThOXS4kpIRgzv6%2BOwK2ddy%2BVKv8DCEoQABoMNjM3NDIzMTgzODA1IgydRewsOm%2FIvvgiGrEq3ANd4QaTHYa1Tleusf0j32FnUmSbopPGxVPmNVG%2By9tsCIdoy6IL7U5QR2fc8IW99XDkgYReFRLBS3YAgnebMaS0RexXr2AUe2X73ZmSTNtUlMIXNOKgNDf3%2BxgJXaUyAM0GZqQCUKQrMiypWmGN2ReRXPdrx%2BdpOihqF6A1711tRdnIckXbBm6xdcJ%2FRj65h9riVqKY4J7bZCkMfKPd1J2NytpMnQ0eCNPwK%2F%2BPrfwMiivy9HqutqC5VwBepnhvhyGQX60N1XtpfI7baAnROI8oFsa6CQiO5S30n2vhqKaZy2Lb4I2nIQSO4OV0FvUMIsakcgemidkXWhiJz9E2bRhotAEdinWd%2FFCqxOYUYUwyvbYxSanCjyAiO1Y69acBqAAG0%2BmGqKc3km3zL7KQMU7nqJ%2FJKu3yubwigd4jKb4vjfCdO2E9d267d%2Fni4m%2BypPRMAGOx2BmphxG%2Fu6vKkWt7l%2FyB4g%2FGgAMNzcLYyFS29eGZeDKBzNT0hamxsdmPBYWv97mWJ1ik08A5NZ4%2B%2Fp9bT7sQk%2FvfADicBs%2FlleuQvPVMrbXIeeD%2FGwFmmPBfDAxonDD0YeGOS1FDxoh8TuNAiYorWbWQk8fgkj5ZY0DbU1dS7TVmXeEP2aFnZDDuv6y%2BBjqkAYm%2BGAEmAsyOxb0WjbscipZdPcEfYzkxE6fcBF2YK2kHRdq7UdIeEAyixp1pm9AQxqerR0nzHKiY7N1f9bT8QTIpnXSAvIE%2Bf%2Bf8B7icvegKL3OPjB4D2sB4%2Bf%2BHUJzlSU6HN7lNboLYkLmQqtwdeZKYJN9p1BOa42ulc2YtLbEEvF9wCGSamWA6Vbu2k%2FYmKp%2BdFXHQuEnpRVoYVipsqJMe4dJX&X-Amz-Signature=13fda40061b89da2da655bc2a9f2e646d26a0cc34d0b224f0210b7938240811a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMGKZD6T%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T170726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQD9RUvJZH3BygcotbBZr68%2B%2F8TGAwluhikc65zAbrqw3gIhANBt7wcljfyU5QqOzA4DThOXS4kpIRgzv6%2BOwK2ddy%2BVKv8DCEoQABoMNjM3NDIzMTgzODA1IgydRewsOm%2FIvvgiGrEq3ANd4QaTHYa1Tleusf0j32FnUmSbopPGxVPmNVG%2By9tsCIdoy6IL7U5QR2fc8IW99XDkgYReFRLBS3YAgnebMaS0RexXr2AUe2X73ZmSTNtUlMIXNOKgNDf3%2BxgJXaUyAM0GZqQCUKQrMiypWmGN2ReRXPdrx%2BdpOihqF6A1711tRdnIckXbBm6xdcJ%2FRj65h9riVqKY4J7bZCkMfKPd1J2NytpMnQ0eCNPwK%2F%2BPrfwMiivy9HqutqC5VwBepnhvhyGQX60N1XtpfI7baAnROI8oFsa6CQiO5S30n2vhqKaZy2Lb4I2nIQSO4OV0FvUMIsakcgemidkXWhiJz9E2bRhotAEdinWd%2FFCqxOYUYUwyvbYxSanCjyAiO1Y69acBqAAG0%2BmGqKc3km3zL7KQMU7nqJ%2FJKu3yubwigd4jKb4vjfCdO2E9d267d%2Fni4m%2BypPRMAGOx2BmphxG%2Fu6vKkWt7l%2FyB4g%2FGgAMNzcLYyFS29eGZeDKBzNT0hamxsdmPBYWv97mWJ1ik08A5NZ4%2B%2Fp9bT7sQk%2FvfADicBs%2FlleuQvPVMrbXIeeD%2FGwFmmPBfDAxonDD0YeGOS1FDxoh8TuNAiYorWbWQk8fgkj5ZY0DbU1dS7TVmXeEP2aFnZDDuv6y%2BBjqkAYm%2BGAEmAsyOxb0WjbscipZdPcEfYzkxE6fcBF2YK2kHRdq7UdIeEAyixp1pm9AQxqerR0nzHKiY7N1f9bT8QTIpnXSAvIE%2Bf%2Bf8B7icvegKL3OPjB4D2sB4%2Bf%2BHUJzlSU6HN7lNboLYkLmQqtwdeZKYJN9p1BOa42ulc2YtLbEEvF9wCGSamWA6Vbu2k%2FYmKp%2BdFXHQuEnpRVoYVipsqJMe4dJX&X-Amz-Signature=2d118551be9a588017b97098279dc5b4315bf9588723f40998c2ff38ddd1b954&X-Amz-SignedHeaders=host&x-id=GetObject)
