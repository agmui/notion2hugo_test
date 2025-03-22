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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J56Z7YG%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T121226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIHV6mPrJV4LKfoYX6tlL2eoGffyFywzLTxe4yHbYDmCOAiBLaxUySM50AN4SSOHEWO0BgDGSsxNCbL1s4O%2FqgAad7iqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHaNcvBRovtiV3OcJKtwDIuPi%2F5nQpAArHaSTTJlSeahvFvpykK5MlAgL6cKXhdKp2hb0H%2FUIzL7ZXfrxM9sKEXgIVR3uLUbn16aGNd5eh7AuiIYKTSsNtVA7Nzz0O5vUmugalbeTR%2B8BqZdZf1f7z0Yop1%2FlD24YEUIsLTAkPLnVQ5sP%2BaeUaTCVSIA7eQ66OdWHPxfR0pGSNHIIb1HKMhswr8e6mG5Ssvupc1b2k9SfRHaIuu%2Bew1Ce3cCoOiL8KsRBpkMUV%2F8NFK4Tu%2BUwNJ4ME%2BaB71Yt0d2F8qPWDP7AAsUDMXCi%2FxPEkEeGqB5lXyPMBXl5d8rhV6Xh2KOouzkhUktYcYGQf8qn3v9L79RgHJWCTW9aZCFApHYhbJixoBhg7PalKCI%2BKizX7bMEuKogzio93oQzXm%2F6FT9H2ckoQRwRIjdIWc6dR9VcSzoiXLP%2Bhvjx83x33%2Bbw3TOXX1tGupQ26MtbJPWMnLnoRIL8T0o0qYlz3yntXxS5NsSGSuzdevncDx1Y65SrNhZ%2BQcWcXnGVFfVRnEW7vstYLF78q%2FBksWD7s6UViiIwZJSQr5hsJ%2BsU4sJQp4jkz4%2FCV2yGO1lKiAi2l9xx56ACFHoYeLBmhmTtiTX2urow6lc%2BMIXXd%2BA6Xn9%2BfrQwxa76vgY6pgE7PX2J8r4sToEgN%2FzdXKmjDh%2Bj3y5xlYu8NzwONVf38FmOqy6vnV6hji%2Fuo8S3ez27hsd5nacTf9tDi21BzVPqImd5hdpcfWNvexXXXxtyf%2BSCGdD4iiWrXFaVq%2FfurT616wLYF88Qtq9oTMED8ZRAZ3X70FfqjprZ6UkMXgtnTUgKp9H3eXJ2rYSc1Kw48eboD%2B1RxX5CljQhli2xXO8%2BfLUWPEsR&X-Amz-Signature=d1ab13cd189996aced8ba7595b8910acd4a2b2645910fcae1db279e572901b25&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J56Z7YG%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T121226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIHV6mPrJV4LKfoYX6tlL2eoGffyFywzLTxe4yHbYDmCOAiBLaxUySM50AN4SSOHEWO0BgDGSsxNCbL1s4O%2FqgAad7iqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHaNcvBRovtiV3OcJKtwDIuPi%2F5nQpAArHaSTTJlSeahvFvpykK5MlAgL6cKXhdKp2hb0H%2FUIzL7ZXfrxM9sKEXgIVR3uLUbn16aGNd5eh7AuiIYKTSsNtVA7Nzz0O5vUmugalbeTR%2B8BqZdZf1f7z0Yop1%2FlD24YEUIsLTAkPLnVQ5sP%2BaeUaTCVSIA7eQ66OdWHPxfR0pGSNHIIb1HKMhswr8e6mG5Ssvupc1b2k9SfRHaIuu%2Bew1Ce3cCoOiL8KsRBpkMUV%2F8NFK4Tu%2BUwNJ4ME%2BaB71Yt0d2F8qPWDP7AAsUDMXCi%2FxPEkEeGqB5lXyPMBXl5d8rhV6Xh2KOouzkhUktYcYGQf8qn3v9L79RgHJWCTW9aZCFApHYhbJixoBhg7PalKCI%2BKizX7bMEuKogzio93oQzXm%2F6FT9H2ckoQRwRIjdIWc6dR9VcSzoiXLP%2Bhvjx83x33%2Bbw3TOXX1tGupQ26MtbJPWMnLnoRIL8T0o0qYlz3yntXxS5NsSGSuzdevncDx1Y65SrNhZ%2BQcWcXnGVFfVRnEW7vstYLF78q%2FBksWD7s6UViiIwZJSQr5hsJ%2BsU4sJQp4jkz4%2FCV2yGO1lKiAi2l9xx56ACFHoYeLBmhmTtiTX2urow6lc%2BMIXXd%2BA6Xn9%2BfrQwxa76vgY6pgE7PX2J8r4sToEgN%2FzdXKmjDh%2Bj3y5xlYu8NzwONVf38FmOqy6vnV6hji%2Fuo8S3ez27hsd5nacTf9tDi21BzVPqImd5hdpcfWNvexXXXxtyf%2BSCGdD4iiWrXFaVq%2FfurT616wLYF88Qtq9oTMED8ZRAZ3X70FfqjprZ6UkMXgtnTUgKp9H3eXJ2rYSc1Kw48eboD%2B1RxX5CljQhli2xXO8%2BfLUWPEsR&X-Amz-Signature=d3ca5c77a4cc6fe138d527189046da82280b28430149988276cd3bc8c30c10f3&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J56Z7YG%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T121226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIHV6mPrJV4LKfoYX6tlL2eoGffyFywzLTxe4yHbYDmCOAiBLaxUySM50AN4SSOHEWO0BgDGSsxNCbL1s4O%2FqgAad7iqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHaNcvBRovtiV3OcJKtwDIuPi%2F5nQpAArHaSTTJlSeahvFvpykK5MlAgL6cKXhdKp2hb0H%2FUIzL7ZXfrxM9sKEXgIVR3uLUbn16aGNd5eh7AuiIYKTSsNtVA7Nzz0O5vUmugalbeTR%2B8BqZdZf1f7z0Yop1%2FlD24YEUIsLTAkPLnVQ5sP%2BaeUaTCVSIA7eQ66OdWHPxfR0pGSNHIIb1HKMhswr8e6mG5Ssvupc1b2k9SfRHaIuu%2Bew1Ce3cCoOiL8KsRBpkMUV%2F8NFK4Tu%2BUwNJ4ME%2BaB71Yt0d2F8qPWDP7AAsUDMXCi%2FxPEkEeGqB5lXyPMBXl5d8rhV6Xh2KOouzkhUktYcYGQf8qn3v9L79RgHJWCTW9aZCFApHYhbJixoBhg7PalKCI%2BKizX7bMEuKogzio93oQzXm%2F6FT9H2ckoQRwRIjdIWc6dR9VcSzoiXLP%2Bhvjx83x33%2Bbw3TOXX1tGupQ26MtbJPWMnLnoRIL8T0o0qYlz3yntXxS5NsSGSuzdevncDx1Y65SrNhZ%2BQcWcXnGVFfVRnEW7vstYLF78q%2FBksWD7s6UViiIwZJSQr5hsJ%2BsU4sJQp4jkz4%2FCV2yGO1lKiAi2l9xx56ACFHoYeLBmhmTtiTX2urow6lc%2BMIXXd%2BA6Xn9%2BfrQwxa76vgY6pgE7PX2J8r4sToEgN%2FzdXKmjDh%2Bj3y5xlYu8NzwONVf38FmOqy6vnV6hji%2Fuo8S3ez27hsd5nacTf9tDi21BzVPqImd5hdpcfWNvexXXXxtyf%2BSCGdD4iiWrXFaVq%2FfurT616wLYF88Qtq9oTMED8ZRAZ3X70FfqjprZ6UkMXgtnTUgKp9H3eXJ2rYSc1Kw48eboD%2B1RxX5CljQhli2xXO8%2BfLUWPEsR&X-Amz-Signature=68909e5abd9da87868b6db9e2ec6fde4c9b39d85b97267ebf342b4b32d1b33ec&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J56Z7YG%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T121226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIHV6mPrJV4LKfoYX6tlL2eoGffyFywzLTxe4yHbYDmCOAiBLaxUySM50AN4SSOHEWO0BgDGSsxNCbL1s4O%2FqgAad7iqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHaNcvBRovtiV3OcJKtwDIuPi%2F5nQpAArHaSTTJlSeahvFvpykK5MlAgL6cKXhdKp2hb0H%2FUIzL7ZXfrxM9sKEXgIVR3uLUbn16aGNd5eh7AuiIYKTSsNtVA7Nzz0O5vUmugalbeTR%2B8BqZdZf1f7z0Yop1%2FlD24YEUIsLTAkPLnVQ5sP%2BaeUaTCVSIA7eQ66OdWHPxfR0pGSNHIIb1HKMhswr8e6mG5Ssvupc1b2k9SfRHaIuu%2Bew1Ce3cCoOiL8KsRBpkMUV%2F8NFK4Tu%2BUwNJ4ME%2BaB71Yt0d2F8qPWDP7AAsUDMXCi%2FxPEkEeGqB5lXyPMBXl5d8rhV6Xh2KOouzkhUktYcYGQf8qn3v9L79RgHJWCTW9aZCFApHYhbJixoBhg7PalKCI%2BKizX7bMEuKogzio93oQzXm%2F6FT9H2ckoQRwRIjdIWc6dR9VcSzoiXLP%2Bhvjx83x33%2Bbw3TOXX1tGupQ26MtbJPWMnLnoRIL8T0o0qYlz3yntXxS5NsSGSuzdevncDx1Y65SrNhZ%2BQcWcXnGVFfVRnEW7vstYLF78q%2FBksWD7s6UViiIwZJSQr5hsJ%2BsU4sJQp4jkz4%2FCV2yGO1lKiAi2l9xx56ACFHoYeLBmhmTtiTX2urow6lc%2BMIXXd%2BA6Xn9%2BfrQwxa76vgY6pgE7PX2J8r4sToEgN%2FzdXKmjDh%2Bj3y5xlYu8NzwONVf38FmOqy6vnV6hji%2Fuo8S3ez27hsd5nacTf9tDi21BzVPqImd5hdpcfWNvexXXXxtyf%2BSCGdD4iiWrXFaVq%2FfurT616wLYF88Qtq9oTMED8ZRAZ3X70FfqjprZ6UkMXgtnTUgKp9H3eXJ2rYSc1Kw48eboD%2B1RxX5CljQhli2xXO8%2BfLUWPEsR&X-Amz-Signature=4b66bbd2277a353fbb7454d214843c21ed1a3cd7f47a496b2f4a1e3f2858bf29&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J56Z7YG%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T121226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIHV6mPrJV4LKfoYX6tlL2eoGffyFywzLTxe4yHbYDmCOAiBLaxUySM50AN4SSOHEWO0BgDGSsxNCbL1s4O%2FqgAad7iqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHaNcvBRovtiV3OcJKtwDIuPi%2F5nQpAArHaSTTJlSeahvFvpykK5MlAgL6cKXhdKp2hb0H%2FUIzL7ZXfrxM9sKEXgIVR3uLUbn16aGNd5eh7AuiIYKTSsNtVA7Nzz0O5vUmugalbeTR%2B8BqZdZf1f7z0Yop1%2FlD24YEUIsLTAkPLnVQ5sP%2BaeUaTCVSIA7eQ66OdWHPxfR0pGSNHIIb1HKMhswr8e6mG5Ssvupc1b2k9SfRHaIuu%2Bew1Ce3cCoOiL8KsRBpkMUV%2F8NFK4Tu%2BUwNJ4ME%2BaB71Yt0d2F8qPWDP7AAsUDMXCi%2FxPEkEeGqB5lXyPMBXl5d8rhV6Xh2KOouzkhUktYcYGQf8qn3v9L79RgHJWCTW9aZCFApHYhbJixoBhg7PalKCI%2BKizX7bMEuKogzio93oQzXm%2F6FT9H2ckoQRwRIjdIWc6dR9VcSzoiXLP%2Bhvjx83x33%2Bbw3TOXX1tGupQ26MtbJPWMnLnoRIL8T0o0qYlz3yntXxS5NsSGSuzdevncDx1Y65SrNhZ%2BQcWcXnGVFfVRnEW7vstYLF78q%2FBksWD7s6UViiIwZJSQr5hsJ%2BsU4sJQp4jkz4%2FCV2yGO1lKiAi2l9xx56ACFHoYeLBmhmTtiTX2urow6lc%2BMIXXd%2BA6Xn9%2BfrQwxa76vgY6pgE7PX2J8r4sToEgN%2FzdXKmjDh%2Bj3y5xlYu8NzwONVf38FmOqy6vnV6hji%2Fuo8S3ez27hsd5nacTf9tDi21BzVPqImd5hdpcfWNvexXXXxtyf%2BSCGdD4iiWrXFaVq%2FfurT616wLYF88Qtq9oTMED8ZRAZ3X70FfqjprZ6UkMXgtnTUgKp9H3eXJ2rYSc1Kw48eboD%2B1RxX5CljQhli2xXO8%2BfLUWPEsR&X-Amz-Signature=7eb3098cf2a018aabbf9377080bb9a855ec7a865151bf7244e2fb1070e65f44a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J56Z7YG%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T121226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIHV6mPrJV4LKfoYX6tlL2eoGffyFywzLTxe4yHbYDmCOAiBLaxUySM50AN4SSOHEWO0BgDGSsxNCbL1s4O%2FqgAad7iqIBAi8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHaNcvBRovtiV3OcJKtwDIuPi%2F5nQpAArHaSTTJlSeahvFvpykK5MlAgL6cKXhdKp2hb0H%2FUIzL7ZXfrxM9sKEXgIVR3uLUbn16aGNd5eh7AuiIYKTSsNtVA7Nzz0O5vUmugalbeTR%2B8BqZdZf1f7z0Yop1%2FlD24YEUIsLTAkPLnVQ5sP%2BaeUaTCVSIA7eQ66OdWHPxfR0pGSNHIIb1HKMhswr8e6mG5Ssvupc1b2k9SfRHaIuu%2Bew1Ce3cCoOiL8KsRBpkMUV%2F8NFK4Tu%2BUwNJ4ME%2BaB71Yt0d2F8qPWDP7AAsUDMXCi%2FxPEkEeGqB5lXyPMBXl5d8rhV6Xh2KOouzkhUktYcYGQf8qn3v9L79RgHJWCTW9aZCFApHYhbJixoBhg7PalKCI%2BKizX7bMEuKogzio93oQzXm%2F6FT9H2ckoQRwRIjdIWc6dR9VcSzoiXLP%2Bhvjx83x33%2Bbw3TOXX1tGupQ26MtbJPWMnLnoRIL8T0o0qYlz3yntXxS5NsSGSuzdevncDx1Y65SrNhZ%2BQcWcXnGVFfVRnEW7vstYLF78q%2FBksWD7s6UViiIwZJSQr5hsJ%2BsU4sJQp4jkz4%2FCV2yGO1lKiAi2l9xx56ACFHoYeLBmhmTtiTX2urow6lc%2BMIXXd%2BA6Xn9%2BfrQwxa76vgY6pgE7PX2J8r4sToEgN%2FzdXKmjDh%2Bj3y5xlYu8NzwONVf38FmOqy6vnV6hji%2Fuo8S3ez27hsd5nacTf9tDi21BzVPqImd5hdpcfWNvexXXXxtyf%2BSCGdD4iiWrXFaVq%2FfurT616wLYF88Qtq9oTMED8ZRAZ3X70FfqjprZ6UkMXgtnTUgKp9H3eXJ2rYSc1Kw48eboD%2B1RxX5CljQhli2xXO8%2BfLUWPEsR&X-Amz-Signature=a496f7db8eb5d31bef575e17d44e8826c465c45a52f8cabb357bc5a2bd497e17&X-Amz-SignedHeaders=host&x-id=GetObject)
