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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677E3KI24%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T041837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2BGOy8h3rMpVrfrKNeaeYwH6LQVxGvCtDMPiC7sQgsBAiBwsrOGBBmPYWY%2FQsrr6rLagcHPoYntpV24a17NZLZIsiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFwg9Xpx0o7p5JHVKKtwDxvTFkIJcLpNcrzEuE6nXuZHIXXVTKnUpnY6tHm%2FPzjgxmUbqchbkibRQzlDu5GdPiHsEDwxmkMJQ8ch4KCd%2FExepHlkTH6HLU50UnALj1ZMIwx7H6rilQQp%2BxU%2BEtCYZzaF5MNwkqsnLUWZ9WosxYIrlXz08a0Gqibtfqu2CVQEnREK1b%2FkmFuf5A49nHhTLXsEiDooiU%2F%2FsM16OGCXmRsdfvavSeKnQSIRTtvn0O3ozLKZyxeL63Mz%2BsKHPn3pYQhP3HU3gJdJTD2t%2BLLnHiZeznn%2FeHIV0cnCZg9OKqnlM%2FTdsdY%2FhDRiwIDUx9CWK5GME4cK0lKVOQ5IvUGqyW7NmIAG7G8rlbkcr6nQaNCplEdC3P9CpvC8Od%2BgFIfq8SVi51U2Mst8UnaEBIWstSt5IiPQlhnHANErAcQm6Cp%2BoGrV8ilTn0z%2FsNT7IbzTDEtBQ9w3I%2BcZ%2B3Znn76xox%2Blysjd02U4XPKD0DFlFTAwOKC%2FyX4P9EqjpFOI7dq14Xzobin2z%2BzBzAH8e%2FCm0f7vYZtMTwOicKN5OvtOHWFOAqVk02HKKz4PRwv3cmEY3%2B0eVVHz2V7phJLhs8KtMe8YVHNcVkuJhqEHZ71wAo%2FihhZelyjEJ4uHe4XYwtKDIwgY6pgEuhbFpB%2B9uXYi7APzraV7DI18QOHFWqP%2FN%2Fz7r4bNxOP0s2IzqoxzzQ7UwbPbM%2BV8kZFehNojQJBG%2BRTqE7xz%2Bfqcy97k5w5fjWxYwbvQDIHj19VKrAfVZl3hJK6fA2LQ%2BC56U3DDpJvQchsJFQ00oVJjYgkpKRmb7BChZ5X3kI6XpDMaiKV8p2y3OCjRr439JW%2F6z25FcgbVKJhxQ47E4%2BvS4U2Jr&X-Amz-Signature=88b36687c3c163f23b7359246cef9e848b73f3aecac35d45bef7eaaa42c1aa21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677E3KI24%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T041837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2BGOy8h3rMpVrfrKNeaeYwH6LQVxGvCtDMPiC7sQgsBAiBwsrOGBBmPYWY%2FQsrr6rLagcHPoYntpV24a17NZLZIsiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFwg9Xpx0o7p5JHVKKtwDxvTFkIJcLpNcrzEuE6nXuZHIXXVTKnUpnY6tHm%2FPzjgxmUbqchbkibRQzlDu5GdPiHsEDwxmkMJQ8ch4KCd%2FExepHlkTH6HLU50UnALj1ZMIwx7H6rilQQp%2BxU%2BEtCYZzaF5MNwkqsnLUWZ9WosxYIrlXz08a0Gqibtfqu2CVQEnREK1b%2FkmFuf5A49nHhTLXsEiDooiU%2F%2FsM16OGCXmRsdfvavSeKnQSIRTtvn0O3ozLKZyxeL63Mz%2BsKHPn3pYQhP3HU3gJdJTD2t%2BLLnHiZeznn%2FeHIV0cnCZg9OKqnlM%2FTdsdY%2FhDRiwIDUx9CWK5GME4cK0lKVOQ5IvUGqyW7NmIAG7G8rlbkcr6nQaNCplEdC3P9CpvC8Od%2BgFIfq8SVi51U2Mst8UnaEBIWstSt5IiPQlhnHANErAcQm6Cp%2BoGrV8ilTn0z%2FsNT7IbzTDEtBQ9w3I%2BcZ%2B3Znn76xox%2Blysjd02U4XPKD0DFlFTAwOKC%2FyX4P9EqjpFOI7dq14Xzobin2z%2BzBzAH8e%2FCm0f7vYZtMTwOicKN5OvtOHWFOAqVk02HKKz4PRwv3cmEY3%2B0eVVHz2V7phJLhs8KtMe8YVHNcVkuJhqEHZ71wAo%2FihhZelyjEJ4uHe4XYwtKDIwgY6pgEuhbFpB%2B9uXYi7APzraV7DI18QOHFWqP%2FN%2Fz7r4bNxOP0s2IzqoxzzQ7UwbPbM%2BV8kZFehNojQJBG%2BRTqE7xz%2Bfqcy97k5w5fjWxYwbvQDIHj19VKrAfVZl3hJK6fA2LQ%2BC56U3DDpJvQchsJFQ00oVJjYgkpKRmb7BChZ5X3kI6XpDMaiKV8p2y3OCjRr439JW%2F6z25FcgbVKJhxQ47E4%2BvS4U2Jr&X-Amz-Signature=263196a1c3444a95954f693f3ded8ce2ea486d10ee42bb4db4e5d55d8157b9d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677E3KI24%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T041837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2BGOy8h3rMpVrfrKNeaeYwH6LQVxGvCtDMPiC7sQgsBAiBwsrOGBBmPYWY%2FQsrr6rLagcHPoYntpV24a17NZLZIsiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFwg9Xpx0o7p5JHVKKtwDxvTFkIJcLpNcrzEuE6nXuZHIXXVTKnUpnY6tHm%2FPzjgxmUbqchbkibRQzlDu5GdPiHsEDwxmkMJQ8ch4KCd%2FExepHlkTH6HLU50UnALj1ZMIwx7H6rilQQp%2BxU%2BEtCYZzaF5MNwkqsnLUWZ9WosxYIrlXz08a0Gqibtfqu2CVQEnREK1b%2FkmFuf5A49nHhTLXsEiDooiU%2F%2FsM16OGCXmRsdfvavSeKnQSIRTtvn0O3ozLKZyxeL63Mz%2BsKHPn3pYQhP3HU3gJdJTD2t%2BLLnHiZeznn%2FeHIV0cnCZg9OKqnlM%2FTdsdY%2FhDRiwIDUx9CWK5GME4cK0lKVOQ5IvUGqyW7NmIAG7G8rlbkcr6nQaNCplEdC3P9CpvC8Od%2BgFIfq8SVi51U2Mst8UnaEBIWstSt5IiPQlhnHANErAcQm6Cp%2BoGrV8ilTn0z%2FsNT7IbzTDEtBQ9w3I%2BcZ%2B3Znn76xox%2Blysjd02U4XPKD0DFlFTAwOKC%2FyX4P9EqjpFOI7dq14Xzobin2z%2BzBzAH8e%2FCm0f7vYZtMTwOicKN5OvtOHWFOAqVk02HKKz4PRwv3cmEY3%2B0eVVHz2V7phJLhs8KtMe8YVHNcVkuJhqEHZ71wAo%2FihhZelyjEJ4uHe4XYwtKDIwgY6pgEuhbFpB%2B9uXYi7APzraV7DI18QOHFWqP%2FN%2Fz7r4bNxOP0s2IzqoxzzQ7UwbPbM%2BV8kZFehNojQJBG%2BRTqE7xz%2Bfqcy97k5w5fjWxYwbvQDIHj19VKrAfVZl3hJK6fA2LQ%2BC56U3DDpJvQchsJFQ00oVJjYgkpKRmb7BChZ5X3kI6XpDMaiKV8p2y3OCjRr439JW%2F6z25FcgbVKJhxQ47E4%2BvS4U2Jr&X-Amz-Signature=00ceb31bb74bb6851fa115a5cb68150cfe453bdbf0b197ee24bf8c6f1387f59c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677E3KI24%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T041837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2BGOy8h3rMpVrfrKNeaeYwH6LQVxGvCtDMPiC7sQgsBAiBwsrOGBBmPYWY%2FQsrr6rLagcHPoYntpV24a17NZLZIsiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFwg9Xpx0o7p5JHVKKtwDxvTFkIJcLpNcrzEuE6nXuZHIXXVTKnUpnY6tHm%2FPzjgxmUbqchbkibRQzlDu5GdPiHsEDwxmkMJQ8ch4KCd%2FExepHlkTH6HLU50UnALj1ZMIwx7H6rilQQp%2BxU%2BEtCYZzaF5MNwkqsnLUWZ9WosxYIrlXz08a0Gqibtfqu2CVQEnREK1b%2FkmFuf5A49nHhTLXsEiDooiU%2F%2FsM16OGCXmRsdfvavSeKnQSIRTtvn0O3ozLKZyxeL63Mz%2BsKHPn3pYQhP3HU3gJdJTD2t%2BLLnHiZeznn%2FeHIV0cnCZg9OKqnlM%2FTdsdY%2FhDRiwIDUx9CWK5GME4cK0lKVOQ5IvUGqyW7NmIAG7G8rlbkcr6nQaNCplEdC3P9CpvC8Od%2BgFIfq8SVi51U2Mst8UnaEBIWstSt5IiPQlhnHANErAcQm6Cp%2BoGrV8ilTn0z%2FsNT7IbzTDEtBQ9w3I%2BcZ%2B3Znn76xox%2Blysjd02U4XPKD0DFlFTAwOKC%2FyX4P9EqjpFOI7dq14Xzobin2z%2BzBzAH8e%2FCm0f7vYZtMTwOicKN5OvtOHWFOAqVk02HKKz4PRwv3cmEY3%2B0eVVHz2V7phJLhs8KtMe8YVHNcVkuJhqEHZ71wAo%2FihhZelyjEJ4uHe4XYwtKDIwgY6pgEuhbFpB%2B9uXYi7APzraV7DI18QOHFWqP%2FN%2Fz7r4bNxOP0s2IzqoxzzQ7UwbPbM%2BV8kZFehNojQJBG%2BRTqE7xz%2Bfqcy97k5w5fjWxYwbvQDIHj19VKrAfVZl3hJK6fA2LQ%2BC56U3DDpJvQchsJFQ00oVJjYgkpKRmb7BChZ5X3kI6XpDMaiKV8p2y3OCjRr439JW%2F6z25FcgbVKJhxQ47E4%2BvS4U2Jr&X-Amz-Signature=61ba26a458bf454edaae67195602d9310d8aa9612a977da993f1d8830b82827f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677E3KI24%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T041837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2BGOy8h3rMpVrfrKNeaeYwH6LQVxGvCtDMPiC7sQgsBAiBwsrOGBBmPYWY%2FQsrr6rLagcHPoYntpV24a17NZLZIsiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFwg9Xpx0o7p5JHVKKtwDxvTFkIJcLpNcrzEuE6nXuZHIXXVTKnUpnY6tHm%2FPzjgxmUbqchbkibRQzlDu5GdPiHsEDwxmkMJQ8ch4KCd%2FExepHlkTH6HLU50UnALj1ZMIwx7H6rilQQp%2BxU%2BEtCYZzaF5MNwkqsnLUWZ9WosxYIrlXz08a0Gqibtfqu2CVQEnREK1b%2FkmFuf5A49nHhTLXsEiDooiU%2F%2FsM16OGCXmRsdfvavSeKnQSIRTtvn0O3ozLKZyxeL63Mz%2BsKHPn3pYQhP3HU3gJdJTD2t%2BLLnHiZeznn%2FeHIV0cnCZg9OKqnlM%2FTdsdY%2FhDRiwIDUx9CWK5GME4cK0lKVOQ5IvUGqyW7NmIAG7G8rlbkcr6nQaNCplEdC3P9CpvC8Od%2BgFIfq8SVi51U2Mst8UnaEBIWstSt5IiPQlhnHANErAcQm6Cp%2BoGrV8ilTn0z%2FsNT7IbzTDEtBQ9w3I%2BcZ%2B3Znn76xox%2Blysjd02U4XPKD0DFlFTAwOKC%2FyX4P9EqjpFOI7dq14Xzobin2z%2BzBzAH8e%2FCm0f7vYZtMTwOicKN5OvtOHWFOAqVk02HKKz4PRwv3cmEY3%2B0eVVHz2V7phJLhs8KtMe8YVHNcVkuJhqEHZ71wAo%2FihhZelyjEJ4uHe4XYwtKDIwgY6pgEuhbFpB%2B9uXYi7APzraV7DI18QOHFWqP%2FN%2Fz7r4bNxOP0s2IzqoxzzQ7UwbPbM%2BV8kZFehNojQJBG%2BRTqE7xz%2Bfqcy97k5w5fjWxYwbvQDIHj19VKrAfVZl3hJK6fA2LQ%2BC56U3DDpJvQchsJFQ00oVJjYgkpKRmb7BChZ5X3kI6XpDMaiKV8p2y3OCjRr439JW%2F6z25FcgbVKJhxQ47E4%2BvS4U2Jr&X-Amz-Signature=5a1ecbbd7132924b5cd7d1c4a4e352f765f7f8a2dd92415374156e63732281e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677E3KI24%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T041837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2BGOy8h3rMpVrfrKNeaeYwH6LQVxGvCtDMPiC7sQgsBAiBwsrOGBBmPYWY%2FQsrr6rLagcHPoYntpV24a17NZLZIsiqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFwg9Xpx0o7p5JHVKKtwDxvTFkIJcLpNcrzEuE6nXuZHIXXVTKnUpnY6tHm%2FPzjgxmUbqchbkibRQzlDu5GdPiHsEDwxmkMJQ8ch4KCd%2FExepHlkTH6HLU50UnALj1ZMIwx7H6rilQQp%2BxU%2BEtCYZzaF5MNwkqsnLUWZ9WosxYIrlXz08a0Gqibtfqu2CVQEnREK1b%2FkmFuf5A49nHhTLXsEiDooiU%2F%2FsM16OGCXmRsdfvavSeKnQSIRTtvn0O3ozLKZyxeL63Mz%2BsKHPn3pYQhP3HU3gJdJTD2t%2BLLnHiZeznn%2FeHIV0cnCZg9OKqnlM%2FTdsdY%2FhDRiwIDUx9CWK5GME4cK0lKVOQ5IvUGqyW7NmIAG7G8rlbkcr6nQaNCplEdC3P9CpvC8Od%2BgFIfq8SVi51U2Mst8UnaEBIWstSt5IiPQlhnHANErAcQm6Cp%2BoGrV8ilTn0z%2FsNT7IbzTDEtBQ9w3I%2BcZ%2B3Znn76xox%2Blysjd02U4XPKD0DFlFTAwOKC%2FyX4P9EqjpFOI7dq14Xzobin2z%2BzBzAH8e%2FCm0f7vYZtMTwOicKN5OvtOHWFOAqVk02HKKz4PRwv3cmEY3%2B0eVVHz2V7phJLhs8KtMe8YVHNcVkuJhqEHZ71wAo%2FihhZelyjEJ4uHe4XYwtKDIwgY6pgEuhbFpB%2B9uXYi7APzraV7DI18QOHFWqP%2FN%2Fz7r4bNxOP0s2IzqoxzzQ7UwbPbM%2BV8kZFehNojQJBG%2BRTqE7xz%2Bfqcy97k5w5fjWxYwbvQDIHj19VKrAfVZl3hJK6fA2LQ%2BC56U3DDpJvQchsJFQ00oVJjYgkpKRmb7BChZ5X3kI6XpDMaiKV8p2y3OCjRr439JW%2F6z25FcgbVKJhxQ47E4%2BvS4U2Jr&X-Amz-Signature=4340899d0ff1128192d55240c22a0d382d227150b7640b3cd95ca05792e33d8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
