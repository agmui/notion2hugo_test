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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5W373FY%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T190304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIF1OYJuIY67ZVZ%2Bx1NlN%2BbSL2QtfGkJAy7E96hjCRly%2FAiBF8Sh5IuJif0GgA69dpPqKXGbBHKz7DNLfNQ1jxdVU7yr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMCLPH3OH%2FAPUtP63UKtwDXecdzZAj8hQO5GHWJ5LcYr8g%2BsrFJcsGO9pHTyZzt0Q30Me10c3lA0o%2BZ0UIqGrYgmWsKBTtOvHwwcxhcjjf3SOZQmFT9WrRpWcSbfuJ6DDLr2vLgOvEG83zVutZEbJ%2B5N9Wl5bdXlBDepafHQw5kj%2FNyfQnL7xP4Kn7YgC%2FsMaV09rrN%2B63qBkzM%2FjTwrW5BVCBkN2Qb67BHGR%2F6oN0uyu%2Fkxgsgo0Ky1X0OAjSNNF17QhiCYqCCSGnmsE98X6zFnxxomZcQuZaoI8OAf6XrUW1wKX2gS7Ep2U6iE%2BHk5zVIuEszouL42xbQ0JxxF9ZQPTl9fv5MhuEhMZpuEV5aN%2F8dB8J9Wk354CKxeJq0XhG%2Fnr9sLmURGV4RdV4A6i%2B08zL0QBfjHEm1gXRHUVQDbC9lvokVl0ufccIl%2BK4aGXiGnzJPX4j2xkG7w2lsExvGTFy7VB3V5Zeq%2BXBLnMTF5IwuunONqiIDIN2%2F2Nd5GE8PilsQ0vQkhCDyQ8uxzpDHPuOxQ%2BSUAHsMaqVS2QlMRUIuD0%2BVEleS%2B5a3Jj53vFO%2FhdqwbobjPnAPHiDIbEZ7bU6BgSLEK84UiUKazGjaX9C0tXJDQ2exnquHUE906tdTs%2BqNhdWZUFeGvcwo434vQY6pgHepq6IxJNKprytF5bw179WbgAqDdzIDhZddU4gWKXu%2FauoGAoGaiirG0fat0%2B5rqSjeYAevFHES9xcntINc4%2B1IbcF8gATt4em49sitqE3CYHghHjMGR1ZD%2BA8Vl6eKe5ecaQufcNntztsduCzGk2OVrfFrM5N1I0XU4%2FcPoKBk%2BboY1i64ImOsAZiA%2FIxc2TkHYactWXeDmVKHirpisB0utSsC58r&X-Amz-Signature=bcf72aa3608d6435df4094cf3e637f33c6f7e899d68a90b8865b52577069103c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5W373FY%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T190304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIF1OYJuIY67ZVZ%2Bx1NlN%2BbSL2QtfGkJAy7E96hjCRly%2FAiBF8Sh5IuJif0GgA69dpPqKXGbBHKz7DNLfNQ1jxdVU7yr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMCLPH3OH%2FAPUtP63UKtwDXecdzZAj8hQO5GHWJ5LcYr8g%2BsrFJcsGO9pHTyZzt0Q30Me10c3lA0o%2BZ0UIqGrYgmWsKBTtOvHwwcxhcjjf3SOZQmFT9WrRpWcSbfuJ6DDLr2vLgOvEG83zVutZEbJ%2B5N9Wl5bdXlBDepafHQw5kj%2FNyfQnL7xP4Kn7YgC%2FsMaV09rrN%2B63qBkzM%2FjTwrW5BVCBkN2Qb67BHGR%2F6oN0uyu%2Fkxgsgo0Ky1X0OAjSNNF17QhiCYqCCSGnmsE98X6zFnxxomZcQuZaoI8OAf6XrUW1wKX2gS7Ep2U6iE%2BHk5zVIuEszouL42xbQ0JxxF9ZQPTl9fv5MhuEhMZpuEV5aN%2F8dB8J9Wk354CKxeJq0XhG%2Fnr9sLmURGV4RdV4A6i%2B08zL0QBfjHEm1gXRHUVQDbC9lvokVl0ufccIl%2BK4aGXiGnzJPX4j2xkG7w2lsExvGTFy7VB3V5Zeq%2BXBLnMTF5IwuunONqiIDIN2%2F2Nd5GE8PilsQ0vQkhCDyQ8uxzpDHPuOxQ%2BSUAHsMaqVS2QlMRUIuD0%2BVEleS%2B5a3Jj53vFO%2FhdqwbobjPnAPHiDIbEZ7bU6BgSLEK84UiUKazGjaX9C0tXJDQ2exnquHUE906tdTs%2BqNhdWZUFeGvcwo434vQY6pgHepq6IxJNKprytF5bw179WbgAqDdzIDhZddU4gWKXu%2FauoGAoGaiirG0fat0%2B5rqSjeYAevFHES9xcntINc4%2B1IbcF8gATt4em49sitqE3CYHghHjMGR1ZD%2BA8Vl6eKe5ecaQufcNntztsduCzGk2OVrfFrM5N1I0XU4%2FcPoKBk%2BboY1i64ImOsAZiA%2FIxc2TkHYactWXeDmVKHirpisB0utSsC58r&X-Amz-Signature=61553348b17ad5c759a6b0fd0035409c446b5d02cd1d24829abd7be3f6d325dd&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5W373FY%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T190304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIF1OYJuIY67ZVZ%2Bx1NlN%2BbSL2QtfGkJAy7E96hjCRly%2FAiBF8Sh5IuJif0GgA69dpPqKXGbBHKz7DNLfNQ1jxdVU7yr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMCLPH3OH%2FAPUtP63UKtwDXecdzZAj8hQO5GHWJ5LcYr8g%2BsrFJcsGO9pHTyZzt0Q30Me10c3lA0o%2BZ0UIqGrYgmWsKBTtOvHwwcxhcjjf3SOZQmFT9WrRpWcSbfuJ6DDLr2vLgOvEG83zVutZEbJ%2B5N9Wl5bdXlBDepafHQw5kj%2FNyfQnL7xP4Kn7YgC%2FsMaV09rrN%2B63qBkzM%2FjTwrW5BVCBkN2Qb67BHGR%2F6oN0uyu%2Fkxgsgo0Ky1X0OAjSNNF17QhiCYqCCSGnmsE98X6zFnxxomZcQuZaoI8OAf6XrUW1wKX2gS7Ep2U6iE%2BHk5zVIuEszouL42xbQ0JxxF9ZQPTl9fv5MhuEhMZpuEV5aN%2F8dB8J9Wk354CKxeJq0XhG%2Fnr9sLmURGV4RdV4A6i%2B08zL0QBfjHEm1gXRHUVQDbC9lvokVl0ufccIl%2BK4aGXiGnzJPX4j2xkG7w2lsExvGTFy7VB3V5Zeq%2BXBLnMTF5IwuunONqiIDIN2%2F2Nd5GE8PilsQ0vQkhCDyQ8uxzpDHPuOxQ%2BSUAHsMaqVS2QlMRUIuD0%2BVEleS%2B5a3Jj53vFO%2FhdqwbobjPnAPHiDIbEZ7bU6BgSLEK84UiUKazGjaX9C0tXJDQ2exnquHUE906tdTs%2BqNhdWZUFeGvcwo434vQY6pgHepq6IxJNKprytF5bw179WbgAqDdzIDhZddU4gWKXu%2FauoGAoGaiirG0fat0%2B5rqSjeYAevFHES9xcntINc4%2B1IbcF8gATt4em49sitqE3CYHghHjMGR1ZD%2BA8Vl6eKe5ecaQufcNntztsduCzGk2OVrfFrM5N1I0XU4%2FcPoKBk%2BboY1i64ImOsAZiA%2FIxc2TkHYactWXeDmVKHirpisB0utSsC58r&X-Amz-Signature=c13200e5e6f528f0b9f7edabf71b3ff815bca43678955b52ace8fe198a632f8c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5W373FY%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T190304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIF1OYJuIY67ZVZ%2Bx1NlN%2BbSL2QtfGkJAy7E96hjCRly%2FAiBF8Sh5IuJif0GgA69dpPqKXGbBHKz7DNLfNQ1jxdVU7yr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMCLPH3OH%2FAPUtP63UKtwDXecdzZAj8hQO5GHWJ5LcYr8g%2BsrFJcsGO9pHTyZzt0Q30Me10c3lA0o%2BZ0UIqGrYgmWsKBTtOvHwwcxhcjjf3SOZQmFT9WrRpWcSbfuJ6DDLr2vLgOvEG83zVutZEbJ%2B5N9Wl5bdXlBDepafHQw5kj%2FNyfQnL7xP4Kn7YgC%2FsMaV09rrN%2B63qBkzM%2FjTwrW5BVCBkN2Qb67BHGR%2F6oN0uyu%2Fkxgsgo0Ky1X0OAjSNNF17QhiCYqCCSGnmsE98X6zFnxxomZcQuZaoI8OAf6XrUW1wKX2gS7Ep2U6iE%2BHk5zVIuEszouL42xbQ0JxxF9ZQPTl9fv5MhuEhMZpuEV5aN%2F8dB8J9Wk354CKxeJq0XhG%2Fnr9sLmURGV4RdV4A6i%2B08zL0QBfjHEm1gXRHUVQDbC9lvokVl0ufccIl%2BK4aGXiGnzJPX4j2xkG7w2lsExvGTFy7VB3V5Zeq%2BXBLnMTF5IwuunONqiIDIN2%2F2Nd5GE8PilsQ0vQkhCDyQ8uxzpDHPuOxQ%2BSUAHsMaqVS2QlMRUIuD0%2BVEleS%2B5a3Jj53vFO%2FhdqwbobjPnAPHiDIbEZ7bU6BgSLEK84UiUKazGjaX9C0tXJDQ2exnquHUE906tdTs%2BqNhdWZUFeGvcwo434vQY6pgHepq6IxJNKprytF5bw179WbgAqDdzIDhZddU4gWKXu%2FauoGAoGaiirG0fat0%2B5rqSjeYAevFHES9xcntINc4%2B1IbcF8gATt4em49sitqE3CYHghHjMGR1ZD%2BA8Vl6eKe5ecaQufcNntztsduCzGk2OVrfFrM5N1I0XU4%2FcPoKBk%2BboY1i64ImOsAZiA%2FIxc2TkHYactWXeDmVKHirpisB0utSsC58r&X-Amz-Signature=9e86e42f69830b147e70a88e38169c30325c49111dd110c902b64e08173e46cd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5W373FY%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T190304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIF1OYJuIY67ZVZ%2Bx1NlN%2BbSL2QtfGkJAy7E96hjCRly%2FAiBF8Sh5IuJif0GgA69dpPqKXGbBHKz7DNLfNQ1jxdVU7yr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMCLPH3OH%2FAPUtP63UKtwDXecdzZAj8hQO5GHWJ5LcYr8g%2BsrFJcsGO9pHTyZzt0Q30Me10c3lA0o%2BZ0UIqGrYgmWsKBTtOvHwwcxhcjjf3SOZQmFT9WrRpWcSbfuJ6DDLr2vLgOvEG83zVutZEbJ%2B5N9Wl5bdXlBDepafHQw5kj%2FNyfQnL7xP4Kn7YgC%2FsMaV09rrN%2B63qBkzM%2FjTwrW5BVCBkN2Qb67BHGR%2F6oN0uyu%2Fkxgsgo0Ky1X0OAjSNNF17QhiCYqCCSGnmsE98X6zFnxxomZcQuZaoI8OAf6XrUW1wKX2gS7Ep2U6iE%2BHk5zVIuEszouL42xbQ0JxxF9ZQPTl9fv5MhuEhMZpuEV5aN%2F8dB8J9Wk354CKxeJq0XhG%2Fnr9sLmURGV4RdV4A6i%2B08zL0QBfjHEm1gXRHUVQDbC9lvokVl0ufccIl%2BK4aGXiGnzJPX4j2xkG7w2lsExvGTFy7VB3V5Zeq%2BXBLnMTF5IwuunONqiIDIN2%2F2Nd5GE8PilsQ0vQkhCDyQ8uxzpDHPuOxQ%2BSUAHsMaqVS2QlMRUIuD0%2BVEleS%2B5a3Jj53vFO%2FhdqwbobjPnAPHiDIbEZ7bU6BgSLEK84UiUKazGjaX9C0tXJDQ2exnquHUE906tdTs%2BqNhdWZUFeGvcwo434vQY6pgHepq6IxJNKprytF5bw179WbgAqDdzIDhZddU4gWKXu%2FauoGAoGaiirG0fat0%2B5rqSjeYAevFHES9xcntINc4%2B1IbcF8gATt4em49sitqE3CYHghHjMGR1ZD%2BA8Vl6eKe5ecaQufcNntztsduCzGk2OVrfFrM5N1I0XU4%2FcPoKBk%2BboY1i64ImOsAZiA%2FIxc2TkHYactWXeDmVKHirpisB0utSsC58r&X-Amz-Signature=0ae2d05638c32b072f4516926d34537beca3bcf8bde751f12376a67196a6efd5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5W373FY%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T190304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIF1OYJuIY67ZVZ%2Bx1NlN%2BbSL2QtfGkJAy7E96hjCRly%2FAiBF8Sh5IuJif0GgA69dpPqKXGbBHKz7DNLfNQ1jxdVU7yr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMCLPH3OH%2FAPUtP63UKtwDXecdzZAj8hQO5GHWJ5LcYr8g%2BsrFJcsGO9pHTyZzt0Q30Me10c3lA0o%2BZ0UIqGrYgmWsKBTtOvHwwcxhcjjf3SOZQmFT9WrRpWcSbfuJ6DDLr2vLgOvEG83zVutZEbJ%2B5N9Wl5bdXlBDepafHQw5kj%2FNyfQnL7xP4Kn7YgC%2FsMaV09rrN%2B63qBkzM%2FjTwrW5BVCBkN2Qb67BHGR%2F6oN0uyu%2Fkxgsgo0Ky1X0OAjSNNF17QhiCYqCCSGnmsE98X6zFnxxomZcQuZaoI8OAf6XrUW1wKX2gS7Ep2U6iE%2BHk5zVIuEszouL42xbQ0JxxF9ZQPTl9fv5MhuEhMZpuEV5aN%2F8dB8J9Wk354CKxeJq0XhG%2Fnr9sLmURGV4RdV4A6i%2B08zL0QBfjHEm1gXRHUVQDbC9lvokVl0ufccIl%2BK4aGXiGnzJPX4j2xkG7w2lsExvGTFy7VB3V5Zeq%2BXBLnMTF5IwuunONqiIDIN2%2F2Nd5GE8PilsQ0vQkhCDyQ8uxzpDHPuOxQ%2BSUAHsMaqVS2QlMRUIuD0%2BVEleS%2B5a3Jj53vFO%2FhdqwbobjPnAPHiDIbEZ7bU6BgSLEK84UiUKazGjaX9C0tXJDQ2exnquHUE906tdTs%2BqNhdWZUFeGvcwo434vQY6pgHepq6IxJNKprytF5bw179WbgAqDdzIDhZddU4gWKXu%2FauoGAoGaiirG0fat0%2B5rqSjeYAevFHES9xcntINc4%2B1IbcF8gATt4em49sitqE3CYHghHjMGR1ZD%2BA8Vl6eKe5ecaQufcNntztsduCzGk2OVrfFrM5N1I0XU4%2FcPoKBk%2BboY1i64ImOsAZiA%2FIxc2TkHYactWXeDmVKHirpisB0utSsC58r&X-Amz-Signature=96b71360e56fd8cf52485444af1b96c54d62917e035ff19bdf37752cd853f5cc&X-Amz-SignedHeaders=host&x-id=GetObject)
