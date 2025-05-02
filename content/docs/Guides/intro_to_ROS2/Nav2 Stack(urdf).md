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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTBGB5OD%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T050932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIFhRszwp69LA2jRlevIjtFR%2BrsaSsmUaoYxwxfCnIgycAiEAqznZdJXM9XlcfHTY9btr2cZtHZDB4mjnlbwfqzwmjOIqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmclZSxtSBYJjl8TSrcA4UFRmVwg6ckpLuC8P59dXh7Aodht9dOncKzC42iGG5TqAFkMkO0HFA0iDlO5jnZizqHyFjtVRtiF0jNkymc9xtIPTlFQumPSjjLMoxmWHsruhCf4iekITvD3l8BC0YLa0jqORO9eg47XxiLW9FiiLbBkkqJZuByX4LixDdfLGjQWooSx7So%2BJvYK%2FSs%2FNArI2cuj%2B7hnn%2BuA2d%2ByncA1%2BvxPwheLe5ygqFt4QuUhhRZLM3fpjuFP25agmTks6wqfrT%2BiFyXgv5Olxt7SugAaokg2AA9frGBxgYIQtHeTunkFNuhpkRFa7Eb7JgDbD0HybTvpdlWz2GT5oXneZCv10sjsfDZxoUBgyvu4wSTiwn%2FVebZr%2BJlePvMx2ZdI5S0LlX6%2BfSKfUeNtbIVsWVOzeucfydIoaIakmJIdNeW3w982qrSlOsJXHGgAA7RnjXSumHiwWDMI4RWrKHeAqPTVhIQ%2FDHog9%2F8Jj7ywSEMbak60Fd6jgT%2FnQcEcrNUZa9Ycd%2Fl9xQwx7Ke3Y6zQ77UMTM5Skl1HykB61wi6%2FlBVrRzkiw2V1l5b37yN7HKWnKO8IJC9hR2Ug%2FhwBI1mo6HoQkPGyMBJ4nvjt%2B45Tedbs28JYEuM%2FQd19WLRcbTML%2Bh0cAGOqUB1Np69oIdcLXGyMAG0%2F6phKbelOrHxn2kfgXndZ3PzQkxP70Rznw53E%2BX5oS7yUwS135SK6CEkW%2FWOiZTtCEy%2FuWgHLE7bX8m3fwpsIutmgzdg%2BOyzPwACHk9g633kpqYGmMs%2FOq6ENcS26LyxLP2y%2BKaHcTCbUTUqMqLc%2BUuTicaKkIPFN%2BUiKs7vzH2%2BYciXW73o1ODkgF9ifrL6GO7BquymplV&X-Amz-Signature=2b5bfa03ed1dbb43ec3dfaaa4f4d2d55c5fbdf239d6d96e9b543f3261563b6d1&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTBGB5OD%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T050932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIFhRszwp69LA2jRlevIjtFR%2BrsaSsmUaoYxwxfCnIgycAiEAqznZdJXM9XlcfHTY9btr2cZtHZDB4mjnlbwfqzwmjOIqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmclZSxtSBYJjl8TSrcA4UFRmVwg6ckpLuC8P59dXh7Aodht9dOncKzC42iGG5TqAFkMkO0HFA0iDlO5jnZizqHyFjtVRtiF0jNkymc9xtIPTlFQumPSjjLMoxmWHsruhCf4iekITvD3l8BC0YLa0jqORO9eg47XxiLW9FiiLbBkkqJZuByX4LixDdfLGjQWooSx7So%2BJvYK%2FSs%2FNArI2cuj%2B7hnn%2BuA2d%2ByncA1%2BvxPwheLe5ygqFt4QuUhhRZLM3fpjuFP25agmTks6wqfrT%2BiFyXgv5Olxt7SugAaokg2AA9frGBxgYIQtHeTunkFNuhpkRFa7Eb7JgDbD0HybTvpdlWz2GT5oXneZCv10sjsfDZxoUBgyvu4wSTiwn%2FVebZr%2BJlePvMx2ZdI5S0LlX6%2BfSKfUeNtbIVsWVOzeucfydIoaIakmJIdNeW3w982qrSlOsJXHGgAA7RnjXSumHiwWDMI4RWrKHeAqPTVhIQ%2FDHog9%2F8Jj7ywSEMbak60Fd6jgT%2FnQcEcrNUZa9Ycd%2Fl9xQwx7Ke3Y6zQ77UMTM5Skl1HykB61wi6%2FlBVrRzkiw2V1l5b37yN7HKWnKO8IJC9hR2Ug%2FhwBI1mo6HoQkPGyMBJ4nvjt%2B45Tedbs28JYEuM%2FQd19WLRcbTML%2Bh0cAGOqUB1Np69oIdcLXGyMAG0%2F6phKbelOrHxn2kfgXndZ3PzQkxP70Rznw53E%2BX5oS7yUwS135SK6CEkW%2FWOiZTtCEy%2FuWgHLE7bX8m3fwpsIutmgzdg%2BOyzPwACHk9g633kpqYGmMs%2FOq6ENcS26LyxLP2y%2BKaHcTCbUTUqMqLc%2BUuTicaKkIPFN%2BUiKs7vzH2%2BYciXW73o1ODkgF9ifrL6GO7BquymplV&X-Amz-Signature=f4b4b654885ec34390e355e4bae53e19b91f5896845331e1dec805fa90e01f82&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTBGB5OD%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T050932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIFhRszwp69LA2jRlevIjtFR%2BrsaSsmUaoYxwxfCnIgycAiEAqznZdJXM9XlcfHTY9btr2cZtHZDB4mjnlbwfqzwmjOIqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmclZSxtSBYJjl8TSrcA4UFRmVwg6ckpLuC8P59dXh7Aodht9dOncKzC42iGG5TqAFkMkO0HFA0iDlO5jnZizqHyFjtVRtiF0jNkymc9xtIPTlFQumPSjjLMoxmWHsruhCf4iekITvD3l8BC0YLa0jqORO9eg47XxiLW9FiiLbBkkqJZuByX4LixDdfLGjQWooSx7So%2BJvYK%2FSs%2FNArI2cuj%2B7hnn%2BuA2d%2ByncA1%2BvxPwheLe5ygqFt4QuUhhRZLM3fpjuFP25agmTks6wqfrT%2BiFyXgv5Olxt7SugAaokg2AA9frGBxgYIQtHeTunkFNuhpkRFa7Eb7JgDbD0HybTvpdlWz2GT5oXneZCv10sjsfDZxoUBgyvu4wSTiwn%2FVebZr%2BJlePvMx2ZdI5S0LlX6%2BfSKfUeNtbIVsWVOzeucfydIoaIakmJIdNeW3w982qrSlOsJXHGgAA7RnjXSumHiwWDMI4RWrKHeAqPTVhIQ%2FDHog9%2F8Jj7ywSEMbak60Fd6jgT%2FnQcEcrNUZa9Ycd%2Fl9xQwx7Ke3Y6zQ77UMTM5Skl1HykB61wi6%2FlBVrRzkiw2V1l5b37yN7HKWnKO8IJC9hR2Ug%2FhwBI1mo6HoQkPGyMBJ4nvjt%2B45Tedbs28JYEuM%2FQd19WLRcbTML%2Bh0cAGOqUB1Np69oIdcLXGyMAG0%2F6phKbelOrHxn2kfgXndZ3PzQkxP70Rznw53E%2BX5oS7yUwS135SK6CEkW%2FWOiZTtCEy%2FuWgHLE7bX8m3fwpsIutmgzdg%2BOyzPwACHk9g633kpqYGmMs%2FOq6ENcS26LyxLP2y%2BKaHcTCbUTUqMqLc%2BUuTicaKkIPFN%2BUiKs7vzH2%2BYciXW73o1ODkgF9ifrL6GO7BquymplV&X-Amz-Signature=d92d252a1798a64bf6f3089e58b2b88adf90b95c99e969ec1c6dcb63c16301c2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTBGB5OD%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T050932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIFhRszwp69LA2jRlevIjtFR%2BrsaSsmUaoYxwxfCnIgycAiEAqznZdJXM9XlcfHTY9btr2cZtHZDB4mjnlbwfqzwmjOIqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmclZSxtSBYJjl8TSrcA4UFRmVwg6ckpLuC8P59dXh7Aodht9dOncKzC42iGG5TqAFkMkO0HFA0iDlO5jnZizqHyFjtVRtiF0jNkymc9xtIPTlFQumPSjjLMoxmWHsruhCf4iekITvD3l8BC0YLa0jqORO9eg47XxiLW9FiiLbBkkqJZuByX4LixDdfLGjQWooSx7So%2BJvYK%2FSs%2FNArI2cuj%2B7hnn%2BuA2d%2ByncA1%2BvxPwheLe5ygqFt4QuUhhRZLM3fpjuFP25agmTks6wqfrT%2BiFyXgv5Olxt7SugAaokg2AA9frGBxgYIQtHeTunkFNuhpkRFa7Eb7JgDbD0HybTvpdlWz2GT5oXneZCv10sjsfDZxoUBgyvu4wSTiwn%2FVebZr%2BJlePvMx2ZdI5S0LlX6%2BfSKfUeNtbIVsWVOzeucfydIoaIakmJIdNeW3w982qrSlOsJXHGgAA7RnjXSumHiwWDMI4RWrKHeAqPTVhIQ%2FDHog9%2F8Jj7ywSEMbak60Fd6jgT%2FnQcEcrNUZa9Ycd%2Fl9xQwx7Ke3Y6zQ77UMTM5Skl1HykB61wi6%2FlBVrRzkiw2V1l5b37yN7HKWnKO8IJC9hR2Ug%2FhwBI1mo6HoQkPGyMBJ4nvjt%2B45Tedbs28JYEuM%2FQd19WLRcbTML%2Bh0cAGOqUB1Np69oIdcLXGyMAG0%2F6phKbelOrHxn2kfgXndZ3PzQkxP70Rznw53E%2BX5oS7yUwS135SK6CEkW%2FWOiZTtCEy%2FuWgHLE7bX8m3fwpsIutmgzdg%2BOyzPwACHk9g633kpqYGmMs%2FOq6ENcS26LyxLP2y%2BKaHcTCbUTUqMqLc%2BUuTicaKkIPFN%2BUiKs7vzH2%2BYciXW73o1ODkgF9ifrL6GO7BquymplV&X-Amz-Signature=274ca2cba28b31d4cf90b34ab8ef28fabb8b29e76862ae0450e4796597ae144d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTBGB5OD%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T050932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIFhRszwp69LA2jRlevIjtFR%2BrsaSsmUaoYxwxfCnIgycAiEAqznZdJXM9XlcfHTY9btr2cZtHZDB4mjnlbwfqzwmjOIqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmclZSxtSBYJjl8TSrcA4UFRmVwg6ckpLuC8P59dXh7Aodht9dOncKzC42iGG5TqAFkMkO0HFA0iDlO5jnZizqHyFjtVRtiF0jNkymc9xtIPTlFQumPSjjLMoxmWHsruhCf4iekITvD3l8BC0YLa0jqORO9eg47XxiLW9FiiLbBkkqJZuByX4LixDdfLGjQWooSx7So%2BJvYK%2FSs%2FNArI2cuj%2B7hnn%2BuA2d%2ByncA1%2BvxPwheLe5ygqFt4QuUhhRZLM3fpjuFP25agmTks6wqfrT%2BiFyXgv5Olxt7SugAaokg2AA9frGBxgYIQtHeTunkFNuhpkRFa7Eb7JgDbD0HybTvpdlWz2GT5oXneZCv10sjsfDZxoUBgyvu4wSTiwn%2FVebZr%2BJlePvMx2ZdI5S0LlX6%2BfSKfUeNtbIVsWVOzeucfydIoaIakmJIdNeW3w982qrSlOsJXHGgAA7RnjXSumHiwWDMI4RWrKHeAqPTVhIQ%2FDHog9%2F8Jj7ywSEMbak60Fd6jgT%2FnQcEcrNUZa9Ycd%2Fl9xQwx7Ke3Y6zQ77UMTM5Skl1HykB61wi6%2FlBVrRzkiw2V1l5b37yN7HKWnKO8IJC9hR2Ug%2FhwBI1mo6HoQkPGyMBJ4nvjt%2B45Tedbs28JYEuM%2FQd19WLRcbTML%2Bh0cAGOqUB1Np69oIdcLXGyMAG0%2F6phKbelOrHxn2kfgXndZ3PzQkxP70Rznw53E%2BX5oS7yUwS135SK6CEkW%2FWOiZTtCEy%2FuWgHLE7bX8m3fwpsIutmgzdg%2BOyzPwACHk9g633kpqYGmMs%2FOq6ENcS26LyxLP2y%2BKaHcTCbUTUqMqLc%2BUuTicaKkIPFN%2BUiKs7vzH2%2BYciXW73o1ODkgF9ifrL6GO7BquymplV&X-Amz-Signature=67f012bc08d6f7833149ee4bd52a4ccdbcc07a22a2bbddccf2fec76157157c63&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTBGB5OD%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T050932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIFhRszwp69LA2jRlevIjtFR%2BrsaSsmUaoYxwxfCnIgycAiEAqznZdJXM9XlcfHTY9btr2cZtHZDB4mjnlbwfqzwmjOIqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmclZSxtSBYJjl8TSrcA4UFRmVwg6ckpLuC8P59dXh7Aodht9dOncKzC42iGG5TqAFkMkO0HFA0iDlO5jnZizqHyFjtVRtiF0jNkymc9xtIPTlFQumPSjjLMoxmWHsruhCf4iekITvD3l8BC0YLa0jqORO9eg47XxiLW9FiiLbBkkqJZuByX4LixDdfLGjQWooSx7So%2BJvYK%2FSs%2FNArI2cuj%2B7hnn%2BuA2d%2ByncA1%2BvxPwheLe5ygqFt4QuUhhRZLM3fpjuFP25agmTks6wqfrT%2BiFyXgv5Olxt7SugAaokg2AA9frGBxgYIQtHeTunkFNuhpkRFa7Eb7JgDbD0HybTvpdlWz2GT5oXneZCv10sjsfDZxoUBgyvu4wSTiwn%2FVebZr%2BJlePvMx2ZdI5S0LlX6%2BfSKfUeNtbIVsWVOzeucfydIoaIakmJIdNeW3w982qrSlOsJXHGgAA7RnjXSumHiwWDMI4RWrKHeAqPTVhIQ%2FDHog9%2F8Jj7ywSEMbak60Fd6jgT%2FnQcEcrNUZa9Ycd%2Fl9xQwx7Ke3Y6zQ77UMTM5Skl1HykB61wi6%2FlBVrRzkiw2V1l5b37yN7HKWnKO8IJC9hR2Ug%2FhwBI1mo6HoQkPGyMBJ4nvjt%2B45Tedbs28JYEuM%2FQd19WLRcbTML%2Bh0cAGOqUB1Np69oIdcLXGyMAG0%2F6phKbelOrHxn2kfgXndZ3PzQkxP70Rznw53E%2BX5oS7yUwS135SK6CEkW%2FWOiZTtCEy%2FuWgHLE7bX8m3fwpsIutmgzdg%2BOyzPwACHk9g633kpqYGmMs%2FOq6ENcS26LyxLP2y%2BKaHcTCbUTUqMqLc%2BUuTicaKkIPFN%2BUiKs7vzH2%2BYciXW73o1ODkgF9ifrL6GO7BquymplV&X-Amz-Signature=db69ee91c881641605fe7597d7333f5b56b7ec62b83b5ca6df78f21f3bc8a429&X-Amz-SignedHeaders=host&x-id=GetObject)
