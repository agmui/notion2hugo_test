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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V46YMGLL%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIE9XbRWoYnxpakr6MYG%2F%2F0BSFCxuv0sjTS9n6ry2tFQ%2BAiBupgp1pqtCb9Hs7YbBw6KmnnnnymhEmTzZGvpyrnL6JCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMZcthZbJzHo4caZUQKtwDr9A%2BdxrIXa%2FqngWloxfVKCrPnMMj6pIwra2ybhcBinxOgoUWb%2BiJhE%2FEuJ1DB3ZOnBLk5CKuAQt71ddDroDRhMqi9eo6qux2jO2DaEms3LSaKTF46i37KQAOP0A1zObuGN24fuBegbJ1MJFRqx8cCK%2B6GUJpIbRaqkKkSLNxIUvtJ4Jk4Vb01dKUtbSfMVypw1wfdQchGxj7kOMW%2BaHoTuUKcrA9UYFD61eMHMijKpFc0AudqNPXhSbmSAdXK4s%2FXQz3%2FRU9gHDTdRI1LKStqtRx%2Bb5C7yyImF1IO%2FHxX4lRaGP7rm39FKDvP1oSauO7Mo4m9FvTVCCt4rT%2Bwtg9tE4IP5TC3JwR0CyAAtbqyMwnoRjKZMPVwh1YMV915HrbJfDS75JUozkWU0v8ZOXPfGXaEEMRZgc1yZ%2F8kPYvTVNCMLAN%2BWLnwGHKu%2BOg2LMejqfJ%2BtsE%2BIpLmnCQy4IGurmgcHoyvy0ZtLqqgs3aHLqcQfiHrLcN8gaju9kyq4UgJOl9skGUqA%2BNOAOIv5yUbJr0Egbe79Q%2FnivqqhYgCYDQ6kV5fOrn%2BbEhwW82jmWKOVkE4kAJzV3RozSSpzF06X6Izv%2BQ9s31Qach%2Bk61tbnEy1aWBcUxWWCoDwwwoLyOvQY6pgFrThu%2BjG1xdPkOZXO3O5o5hMUbJ%2ByLRdOZF0W9PqbLF0nfIctII00TvpnO2mqdunHnkOqZpBvKzv392SgxICl8zjBjPl%2FFxRm%2Fe4j3xWOoUvQlA1buHpdzswsltnivenfAy08EJi6%2FwAuqhb0yAxrJBmCUlQvBslTe11CsfJQhAce06DxE3N6zMK1isya9Hgxxv%2FCnC4Zei7kAKDBoa2N8kAPnxT%2Fh&X-Amz-Signature=13ac2aa332981d4170d63f6bdbbdd410d8ae6b9d3546f73012e0d61942aae83c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V46YMGLL%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIE9XbRWoYnxpakr6MYG%2F%2F0BSFCxuv0sjTS9n6ry2tFQ%2BAiBupgp1pqtCb9Hs7YbBw6KmnnnnymhEmTzZGvpyrnL6JCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMZcthZbJzHo4caZUQKtwDr9A%2BdxrIXa%2FqngWloxfVKCrPnMMj6pIwra2ybhcBinxOgoUWb%2BiJhE%2FEuJ1DB3ZOnBLk5CKuAQt71ddDroDRhMqi9eo6qux2jO2DaEms3LSaKTF46i37KQAOP0A1zObuGN24fuBegbJ1MJFRqx8cCK%2B6GUJpIbRaqkKkSLNxIUvtJ4Jk4Vb01dKUtbSfMVypw1wfdQchGxj7kOMW%2BaHoTuUKcrA9UYFD61eMHMijKpFc0AudqNPXhSbmSAdXK4s%2FXQz3%2FRU9gHDTdRI1LKStqtRx%2Bb5C7yyImF1IO%2FHxX4lRaGP7rm39FKDvP1oSauO7Mo4m9FvTVCCt4rT%2Bwtg9tE4IP5TC3JwR0CyAAtbqyMwnoRjKZMPVwh1YMV915HrbJfDS75JUozkWU0v8ZOXPfGXaEEMRZgc1yZ%2F8kPYvTVNCMLAN%2BWLnwGHKu%2BOg2LMejqfJ%2BtsE%2BIpLmnCQy4IGurmgcHoyvy0ZtLqqgs3aHLqcQfiHrLcN8gaju9kyq4UgJOl9skGUqA%2BNOAOIv5yUbJr0Egbe79Q%2FnivqqhYgCYDQ6kV5fOrn%2BbEhwW82jmWKOVkE4kAJzV3RozSSpzF06X6Izv%2BQ9s31Qach%2Bk61tbnEy1aWBcUxWWCoDwwwoLyOvQY6pgFrThu%2BjG1xdPkOZXO3O5o5hMUbJ%2ByLRdOZF0W9PqbLF0nfIctII00TvpnO2mqdunHnkOqZpBvKzv392SgxICl8zjBjPl%2FFxRm%2Fe4j3xWOoUvQlA1buHpdzswsltnivenfAy08EJi6%2FwAuqhb0yAxrJBmCUlQvBslTe11CsfJQhAce06DxE3N6zMK1isya9Hgxxv%2FCnC4Zei7kAKDBoa2N8kAPnxT%2Fh&X-Amz-Signature=5e00e670ada0a7dd4b647bde15f7874b4f08c222d01ac7e66afee2edc5739dc3&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V46YMGLL%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIE9XbRWoYnxpakr6MYG%2F%2F0BSFCxuv0sjTS9n6ry2tFQ%2BAiBupgp1pqtCb9Hs7YbBw6KmnnnnymhEmTzZGvpyrnL6JCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMZcthZbJzHo4caZUQKtwDr9A%2BdxrIXa%2FqngWloxfVKCrPnMMj6pIwra2ybhcBinxOgoUWb%2BiJhE%2FEuJ1DB3ZOnBLk5CKuAQt71ddDroDRhMqi9eo6qux2jO2DaEms3LSaKTF46i37KQAOP0A1zObuGN24fuBegbJ1MJFRqx8cCK%2B6GUJpIbRaqkKkSLNxIUvtJ4Jk4Vb01dKUtbSfMVypw1wfdQchGxj7kOMW%2BaHoTuUKcrA9UYFD61eMHMijKpFc0AudqNPXhSbmSAdXK4s%2FXQz3%2FRU9gHDTdRI1LKStqtRx%2Bb5C7yyImF1IO%2FHxX4lRaGP7rm39FKDvP1oSauO7Mo4m9FvTVCCt4rT%2Bwtg9tE4IP5TC3JwR0CyAAtbqyMwnoRjKZMPVwh1YMV915HrbJfDS75JUozkWU0v8ZOXPfGXaEEMRZgc1yZ%2F8kPYvTVNCMLAN%2BWLnwGHKu%2BOg2LMejqfJ%2BtsE%2BIpLmnCQy4IGurmgcHoyvy0ZtLqqgs3aHLqcQfiHrLcN8gaju9kyq4UgJOl9skGUqA%2BNOAOIv5yUbJr0Egbe79Q%2FnivqqhYgCYDQ6kV5fOrn%2BbEhwW82jmWKOVkE4kAJzV3RozSSpzF06X6Izv%2BQ9s31Qach%2Bk61tbnEy1aWBcUxWWCoDwwwoLyOvQY6pgFrThu%2BjG1xdPkOZXO3O5o5hMUbJ%2ByLRdOZF0W9PqbLF0nfIctII00TvpnO2mqdunHnkOqZpBvKzv392SgxICl8zjBjPl%2FFxRm%2Fe4j3xWOoUvQlA1buHpdzswsltnivenfAy08EJi6%2FwAuqhb0yAxrJBmCUlQvBslTe11CsfJQhAce06DxE3N6zMK1isya9Hgxxv%2FCnC4Zei7kAKDBoa2N8kAPnxT%2Fh&X-Amz-Signature=4962d162841c3f3859f72a4d13bf2a1291cb86cd8bd1948674ba70700ab92d47&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V46YMGLL%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIE9XbRWoYnxpakr6MYG%2F%2F0BSFCxuv0sjTS9n6ry2tFQ%2BAiBupgp1pqtCb9Hs7YbBw6KmnnnnymhEmTzZGvpyrnL6JCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMZcthZbJzHo4caZUQKtwDr9A%2BdxrIXa%2FqngWloxfVKCrPnMMj6pIwra2ybhcBinxOgoUWb%2BiJhE%2FEuJ1DB3ZOnBLk5CKuAQt71ddDroDRhMqi9eo6qux2jO2DaEms3LSaKTF46i37KQAOP0A1zObuGN24fuBegbJ1MJFRqx8cCK%2B6GUJpIbRaqkKkSLNxIUvtJ4Jk4Vb01dKUtbSfMVypw1wfdQchGxj7kOMW%2BaHoTuUKcrA9UYFD61eMHMijKpFc0AudqNPXhSbmSAdXK4s%2FXQz3%2FRU9gHDTdRI1LKStqtRx%2Bb5C7yyImF1IO%2FHxX4lRaGP7rm39FKDvP1oSauO7Mo4m9FvTVCCt4rT%2Bwtg9tE4IP5TC3JwR0CyAAtbqyMwnoRjKZMPVwh1YMV915HrbJfDS75JUozkWU0v8ZOXPfGXaEEMRZgc1yZ%2F8kPYvTVNCMLAN%2BWLnwGHKu%2BOg2LMejqfJ%2BtsE%2BIpLmnCQy4IGurmgcHoyvy0ZtLqqgs3aHLqcQfiHrLcN8gaju9kyq4UgJOl9skGUqA%2BNOAOIv5yUbJr0Egbe79Q%2FnivqqhYgCYDQ6kV5fOrn%2BbEhwW82jmWKOVkE4kAJzV3RozSSpzF06X6Izv%2BQ9s31Qach%2Bk61tbnEy1aWBcUxWWCoDwwwoLyOvQY6pgFrThu%2BjG1xdPkOZXO3O5o5hMUbJ%2ByLRdOZF0W9PqbLF0nfIctII00TvpnO2mqdunHnkOqZpBvKzv392SgxICl8zjBjPl%2FFxRm%2Fe4j3xWOoUvQlA1buHpdzswsltnivenfAy08EJi6%2FwAuqhb0yAxrJBmCUlQvBslTe11CsfJQhAce06DxE3N6zMK1isya9Hgxxv%2FCnC4Zei7kAKDBoa2N8kAPnxT%2Fh&X-Amz-Signature=5441a3783e9580671062d8e7a1cb72af6554e90c90d903d1cffc77e0f30644ab&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V46YMGLL%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIE9XbRWoYnxpakr6MYG%2F%2F0BSFCxuv0sjTS9n6ry2tFQ%2BAiBupgp1pqtCb9Hs7YbBw6KmnnnnymhEmTzZGvpyrnL6JCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMZcthZbJzHo4caZUQKtwDr9A%2BdxrIXa%2FqngWloxfVKCrPnMMj6pIwra2ybhcBinxOgoUWb%2BiJhE%2FEuJ1DB3ZOnBLk5CKuAQt71ddDroDRhMqi9eo6qux2jO2DaEms3LSaKTF46i37KQAOP0A1zObuGN24fuBegbJ1MJFRqx8cCK%2B6GUJpIbRaqkKkSLNxIUvtJ4Jk4Vb01dKUtbSfMVypw1wfdQchGxj7kOMW%2BaHoTuUKcrA9UYFD61eMHMijKpFc0AudqNPXhSbmSAdXK4s%2FXQz3%2FRU9gHDTdRI1LKStqtRx%2Bb5C7yyImF1IO%2FHxX4lRaGP7rm39FKDvP1oSauO7Mo4m9FvTVCCt4rT%2Bwtg9tE4IP5TC3JwR0CyAAtbqyMwnoRjKZMPVwh1YMV915HrbJfDS75JUozkWU0v8ZOXPfGXaEEMRZgc1yZ%2F8kPYvTVNCMLAN%2BWLnwGHKu%2BOg2LMejqfJ%2BtsE%2BIpLmnCQy4IGurmgcHoyvy0ZtLqqgs3aHLqcQfiHrLcN8gaju9kyq4UgJOl9skGUqA%2BNOAOIv5yUbJr0Egbe79Q%2FnivqqhYgCYDQ6kV5fOrn%2BbEhwW82jmWKOVkE4kAJzV3RozSSpzF06X6Izv%2BQ9s31Qach%2Bk61tbnEy1aWBcUxWWCoDwwwoLyOvQY6pgFrThu%2BjG1xdPkOZXO3O5o5hMUbJ%2ByLRdOZF0W9PqbLF0nfIctII00TvpnO2mqdunHnkOqZpBvKzv392SgxICl8zjBjPl%2FFxRm%2Fe4j3xWOoUvQlA1buHpdzswsltnivenfAy08EJi6%2FwAuqhb0yAxrJBmCUlQvBslTe11CsfJQhAce06DxE3N6zMK1isya9Hgxxv%2FCnC4Zei7kAKDBoa2N8kAPnxT%2Fh&X-Amz-Signature=05c02e615bad85540e42adff09e06f127f8cae6c1ec9e1c2af83ff378e506cce&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V46YMGLL%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T190128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIE9XbRWoYnxpakr6MYG%2F%2F0BSFCxuv0sjTS9n6ry2tFQ%2BAiBupgp1pqtCb9Hs7YbBw6KmnnnnymhEmTzZGvpyrnL6JCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMZcthZbJzHo4caZUQKtwDr9A%2BdxrIXa%2FqngWloxfVKCrPnMMj6pIwra2ybhcBinxOgoUWb%2BiJhE%2FEuJ1DB3ZOnBLk5CKuAQt71ddDroDRhMqi9eo6qux2jO2DaEms3LSaKTF46i37KQAOP0A1zObuGN24fuBegbJ1MJFRqx8cCK%2B6GUJpIbRaqkKkSLNxIUvtJ4Jk4Vb01dKUtbSfMVypw1wfdQchGxj7kOMW%2BaHoTuUKcrA9UYFD61eMHMijKpFc0AudqNPXhSbmSAdXK4s%2FXQz3%2FRU9gHDTdRI1LKStqtRx%2Bb5C7yyImF1IO%2FHxX4lRaGP7rm39FKDvP1oSauO7Mo4m9FvTVCCt4rT%2Bwtg9tE4IP5TC3JwR0CyAAtbqyMwnoRjKZMPVwh1YMV915HrbJfDS75JUozkWU0v8ZOXPfGXaEEMRZgc1yZ%2F8kPYvTVNCMLAN%2BWLnwGHKu%2BOg2LMejqfJ%2BtsE%2BIpLmnCQy4IGurmgcHoyvy0ZtLqqgs3aHLqcQfiHrLcN8gaju9kyq4UgJOl9skGUqA%2BNOAOIv5yUbJr0Egbe79Q%2FnivqqhYgCYDQ6kV5fOrn%2BbEhwW82jmWKOVkE4kAJzV3RozSSpzF06X6Izv%2BQ9s31Qach%2Bk61tbnEy1aWBcUxWWCoDwwwoLyOvQY6pgFrThu%2BjG1xdPkOZXO3O5o5hMUbJ%2ByLRdOZF0W9PqbLF0nfIctII00TvpnO2mqdunHnkOqZpBvKzv392SgxICl8zjBjPl%2FFxRm%2Fe4j3xWOoUvQlA1buHpdzswsltnivenfAy08EJi6%2FwAuqhb0yAxrJBmCUlQvBslTe11CsfJQhAce06DxE3N6zMK1isya9Hgxxv%2FCnC4Zei7kAKDBoa2N8kAPnxT%2Fh&X-Amz-Signature=2f59482b7db1d259b0a0458976ea8c8d8f3639574b6391c3f6d4141d7aec3432&X-Amz-SignedHeaders=host&x-id=GetObject)
