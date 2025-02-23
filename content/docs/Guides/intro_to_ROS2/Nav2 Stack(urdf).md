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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KTUZTVX%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T090719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhP1C2f%2F58PH5nzyJm7JnYnbNRz7%2FTRE6jF1t4Y6SqkAiEAoCU9yrPb61g0YlbXxItrZoYeehdrM2NswzQXxZMtH%2BEqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhY3aoOfV8rY1WnNyrcA4GirmGzhkmvLmNXQJHsRdyuEkNaceR942bpDpTwIGb%2FVrYttSZRAnUuLCVefpHvLmg9dKCHbNwUr%2FLP6t1iLglBnEe7qCq%2Benu4ghJ3HKaOiZhfvIaL8L3IaF26d18%2BW1zWE7AQA%2B1OLrmRXATPDZ6boPwvbAeaaB0cFNtQYcwl7VLwvrxe21L8S1glycbtXahQgYCHMA1H%2BT6ez00C0rPyf9LzK3f5LNCWrQ5HXhi%2F7e3p1kWuZILIkGZrg7OSqlA063BlLDQB7INBbgoEqFHiYcFP1h4KvXG4wRqioS%2BwVHA5AIO2Xv0bKcJwhV04%2BHkamatFe6tz%2FpAPcVya3rad35Ae1eQNtuJ%2BP6TUi4eaDYkJz4ROc2Gk7APMNMBgx0Rdxtlrbo8pj2MoMJ9kUjTgESHVAsFC4jOtkijpwTXhgx17tBd1xVjhp5QMXnrWsawNAn9rjXFm5p%2F%2BwKjZTwvqdPyL0l2j%2BGPzklpGuJtBfKrpX0LZ8TmVafgGwX%2BkVe9cPN50Sooy6RtXWm90p6RlLYl6bzJq%2Bri%2F4Pb8MjEOeiubByrmsETIePNg5cB8agVLcWcz%2FayfCtc5EeKPSusW5LVknNcSA7Q2nqSKj9dqeJ4dFmWA4K%2FWWuwOMJTF6r0GOqUByYN5oDoAbbJsBDbOnB8NVvDCZ5AsFz2Y%2FeTOjeJc7FjlWlftaB2yq%2B3nu4ruu1KIj6KINig1824bjz6jtp9aJhMZ49Qg6YErXb5B691PUb95MA1nctMWJBN8lfJl1LAYeIbIhOBSMA9DDeHBku4jczq10BYk4ds0dijlDyJcZB8pmfUL4zzKv29G4%2FFzKAGL8dy90aAfF8FsRrGfJOgLB6N06OSu&X-Amz-Signature=d616d9fc083c50623d19cce9eafd3e4281fc834bbdeeedaf30237fe24ec6d2f3&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KTUZTVX%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T090719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhP1C2f%2F58PH5nzyJm7JnYnbNRz7%2FTRE6jF1t4Y6SqkAiEAoCU9yrPb61g0YlbXxItrZoYeehdrM2NswzQXxZMtH%2BEqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhY3aoOfV8rY1WnNyrcA4GirmGzhkmvLmNXQJHsRdyuEkNaceR942bpDpTwIGb%2FVrYttSZRAnUuLCVefpHvLmg9dKCHbNwUr%2FLP6t1iLglBnEe7qCq%2Benu4ghJ3HKaOiZhfvIaL8L3IaF26d18%2BW1zWE7AQA%2B1OLrmRXATPDZ6boPwvbAeaaB0cFNtQYcwl7VLwvrxe21L8S1glycbtXahQgYCHMA1H%2BT6ez00C0rPyf9LzK3f5LNCWrQ5HXhi%2F7e3p1kWuZILIkGZrg7OSqlA063BlLDQB7INBbgoEqFHiYcFP1h4KvXG4wRqioS%2BwVHA5AIO2Xv0bKcJwhV04%2BHkamatFe6tz%2FpAPcVya3rad35Ae1eQNtuJ%2BP6TUi4eaDYkJz4ROc2Gk7APMNMBgx0Rdxtlrbo8pj2MoMJ9kUjTgESHVAsFC4jOtkijpwTXhgx17tBd1xVjhp5QMXnrWsawNAn9rjXFm5p%2F%2BwKjZTwvqdPyL0l2j%2BGPzklpGuJtBfKrpX0LZ8TmVafgGwX%2BkVe9cPN50Sooy6RtXWm90p6RlLYl6bzJq%2Bri%2F4Pb8MjEOeiubByrmsETIePNg5cB8agVLcWcz%2FayfCtc5EeKPSusW5LVknNcSA7Q2nqSKj9dqeJ4dFmWA4K%2FWWuwOMJTF6r0GOqUByYN5oDoAbbJsBDbOnB8NVvDCZ5AsFz2Y%2FeTOjeJc7FjlWlftaB2yq%2B3nu4ruu1KIj6KINig1824bjz6jtp9aJhMZ49Qg6YErXb5B691PUb95MA1nctMWJBN8lfJl1LAYeIbIhOBSMA9DDeHBku4jczq10BYk4ds0dijlDyJcZB8pmfUL4zzKv29G4%2FFzKAGL8dy90aAfF8FsRrGfJOgLB6N06OSu&X-Amz-Signature=74e9d866bb0ce9f3f7697b1430a0e98a24bb20685f4949ef38bd138a6aad6c8e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KTUZTVX%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T090719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhP1C2f%2F58PH5nzyJm7JnYnbNRz7%2FTRE6jF1t4Y6SqkAiEAoCU9yrPb61g0YlbXxItrZoYeehdrM2NswzQXxZMtH%2BEqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhY3aoOfV8rY1WnNyrcA4GirmGzhkmvLmNXQJHsRdyuEkNaceR942bpDpTwIGb%2FVrYttSZRAnUuLCVefpHvLmg9dKCHbNwUr%2FLP6t1iLglBnEe7qCq%2Benu4ghJ3HKaOiZhfvIaL8L3IaF26d18%2BW1zWE7AQA%2B1OLrmRXATPDZ6boPwvbAeaaB0cFNtQYcwl7VLwvrxe21L8S1glycbtXahQgYCHMA1H%2BT6ez00C0rPyf9LzK3f5LNCWrQ5HXhi%2F7e3p1kWuZILIkGZrg7OSqlA063BlLDQB7INBbgoEqFHiYcFP1h4KvXG4wRqioS%2BwVHA5AIO2Xv0bKcJwhV04%2BHkamatFe6tz%2FpAPcVya3rad35Ae1eQNtuJ%2BP6TUi4eaDYkJz4ROc2Gk7APMNMBgx0Rdxtlrbo8pj2MoMJ9kUjTgESHVAsFC4jOtkijpwTXhgx17tBd1xVjhp5QMXnrWsawNAn9rjXFm5p%2F%2BwKjZTwvqdPyL0l2j%2BGPzklpGuJtBfKrpX0LZ8TmVafgGwX%2BkVe9cPN50Sooy6RtXWm90p6RlLYl6bzJq%2Bri%2F4Pb8MjEOeiubByrmsETIePNg5cB8agVLcWcz%2FayfCtc5EeKPSusW5LVknNcSA7Q2nqSKj9dqeJ4dFmWA4K%2FWWuwOMJTF6r0GOqUByYN5oDoAbbJsBDbOnB8NVvDCZ5AsFz2Y%2FeTOjeJc7FjlWlftaB2yq%2B3nu4ruu1KIj6KINig1824bjz6jtp9aJhMZ49Qg6YErXb5B691PUb95MA1nctMWJBN8lfJl1LAYeIbIhOBSMA9DDeHBku4jczq10BYk4ds0dijlDyJcZB8pmfUL4zzKv29G4%2FFzKAGL8dy90aAfF8FsRrGfJOgLB6N06OSu&X-Amz-Signature=74eaa0c5600402c11baed0db70472a571dc525aae23f1a8359cb86c2b5e69572&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KTUZTVX%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T090719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhP1C2f%2F58PH5nzyJm7JnYnbNRz7%2FTRE6jF1t4Y6SqkAiEAoCU9yrPb61g0YlbXxItrZoYeehdrM2NswzQXxZMtH%2BEqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhY3aoOfV8rY1WnNyrcA4GirmGzhkmvLmNXQJHsRdyuEkNaceR942bpDpTwIGb%2FVrYttSZRAnUuLCVefpHvLmg9dKCHbNwUr%2FLP6t1iLglBnEe7qCq%2Benu4ghJ3HKaOiZhfvIaL8L3IaF26d18%2BW1zWE7AQA%2B1OLrmRXATPDZ6boPwvbAeaaB0cFNtQYcwl7VLwvrxe21L8S1glycbtXahQgYCHMA1H%2BT6ez00C0rPyf9LzK3f5LNCWrQ5HXhi%2F7e3p1kWuZILIkGZrg7OSqlA063BlLDQB7INBbgoEqFHiYcFP1h4KvXG4wRqioS%2BwVHA5AIO2Xv0bKcJwhV04%2BHkamatFe6tz%2FpAPcVya3rad35Ae1eQNtuJ%2BP6TUi4eaDYkJz4ROc2Gk7APMNMBgx0Rdxtlrbo8pj2MoMJ9kUjTgESHVAsFC4jOtkijpwTXhgx17tBd1xVjhp5QMXnrWsawNAn9rjXFm5p%2F%2BwKjZTwvqdPyL0l2j%2BGPzklpGuJtBfKrpX0LZ8TmVafgGwX%2BkVe9cPN50Sooy6RtXWm90p6RlLYl6bzJq%2Bri%2F4Pb8MjEOeiubByrmsETIePNg5cB8agVLcWcz%2FayfCtc5EeKPSusW5LVknNcSA7Q2nqSKj9dqeJ4dFmWA4K%2FWWuwOMJTF6r0GOqUByYN5oDoAbbJsBDbOnB8NVvDCZ5AsFz2Y%2FeTOjeJc7FjlWlftaB2yq%2B3nu4ruu1KIj6KINig1824bjz6jtp9aJhMZ49Qg6YErXb5B691PUb95MA1nctMWJBN8lfJl1LAYeIbIhOBSMA9DDeHBku4jczq10BYk4ds0dijlDyJcZB8pmfUL4zzKv29G4%2FFzKAGL8dy90aAfF8FsRrGfJOgLB6N06OSu&X-Amz-Signature=d2c75cb15bc753b210a35f4d116e5894425aaa2b4a3d79fa45a2dcea5402eef0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KTUZTVX%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T090719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhP1C2f%2F58PH5nzyJm7JnYnbNRz7%2FTRE6jF1t4Y6SqkAiEAoCU9yrPb61g0YlbXxItrZoYeehdrM2NswzQXxZMtH%2BEqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhY3aoOfV8rY1WnNyrcA4GirmGzhkmvLmNXQJHsRdyuEkNaceR942bpDpTwIGb%2FVrYttSZRAnUuLCVefpHvLmg9dKCHbNwUr%2FLP6t1iLglBnEe7qCq%2Benu4ghJ3HKaOiZhfvIaL8L3IaF26d18%2BW1zWE7AQA%2B1OLrmRXATPDZ6boPwvbAeaaB0cFNtQYcwl7VLwvrxe21L8S1glycbtXahQgYCHMA1H%2BT6ez00C0rPyf9LzK3f5LNCWrQ5HXhi%2F7e3p1kWuZILIkGZrg7OSqlA063BlLDQB7INBbgoEqFHiYcFP1h4KvXG4wRqioS%2BwVHA5AIO2Xv0bKcJwhV04%2BHkamatFe6tz%2FpAPcVya3rad35Ae1eQNtuJ%2BP6TUi4eaDYkJz4ROc2Gk7APMNMBgx0Rdxtlrbo8pj2MoMJ9kUjTgESHVAsFC4jOtkijpwTXhgx17tBd1xVjhp5QMXnrWsawNAn9rjXFm5p%2F%2BwKjZTwvqdPyL0l2j%2BGPzklpGuJtBfKrpX0LZ8TmVafgGwX%2BkVe9cPN50Sooy6RtXWm90p6RlLYl6bzJq%2Bri%2F4Pb8MjEOeiubByrmsETIePNg5cB8agVLcWcz%2FayfCtc5EeKPSusW5LVknNcSA7Q2nqSKj9dqeJ4dFmWA4K%2FWWuwOMJTF6r0GOqUByYN5oDoAbbJsBDbOnB8NVvDCZ5AsFz2Y%2FeTOjeJc7FjlWlftaB2yq%2B3nu4ruu1KIj6KINig1824bjz6jtp9aJhMZ49Qg6YErXb5B691PUb95MA1nctMWJBN8lfJl1LAYeIbIhOBSMA9DDeHBku4jczq10BYk4ds0dijlDyJcZB8pmfUL4zzKv29G4%2FFzKAGL8dy90aAfF8FsRrGfJOgLB6N06OSu&X-Amz-Signature=fb5892136b8c7903e008e037c994945e5d31a71470b77d8e6c13c02267ee9cc0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KTUZTVX%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T090719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHhP1C2f%2F58PH5nzyJm7JnYnbNRz7%2FTRE6jF1t4Y6SqkAiEAoCU9yrPb61g0YlbXxItrZoYeehdrM2NswzQXxZMtH%2BEqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGhY3aoOfV8rY1WnNyrcA4GirmGzhkmvLmNXQJHsRdyuEkNaceR942bpDpTwIGb%2FVrYttSZRAnUuLCVefpHvLmg9dKCHbNwUr%2FLP6t1iLglBnEe7qCq%2Benu4ghJ3HKaOiZhfvIaL8L3IaF26d18%2BW1zWE7AQA%2B1OLrmRXATPDZ6boPwvbAeaaB0cFNtQYcwl7VLwvrxe21L8S1glycbtXahQgYCHMA1H%2BT6ez00C0rPyf9LzK3f5LNCWrQ5HXhi%2F7e3p1kWuZILIkGZrg7OSqlA063BlLDQB7INBbgoEqFHiYcFP1h4KvXG4wRqioS%2BwVHA5AIO2Xv0bKcJwhV04%2BHkamatFe6tz%2FpAPcVya3rad35Ae1eQNtuJ%2BP6TUi4eaDYkJz4ROc2Gk7APMNMBgx0Rdxtlrbo8pj2MoMJ9kUjTgESHVAsFC4jOtkijpwTXhgx17tBd1xVjhp5QMXnrWsawNAn9rjXFm5p%2F%2BwKjZTwvqdPyL0l2j%2BGPzklpGuJtBfKrpX0LZ8TmVafgGwX%2BkVe9cPN50Sooy6RtXWm90p6RlLYl6bzJq%2Bri%2F4Pb8MjEOeiubByrmsETIePNg5cB8agVLcWcz%2FayfCtc5EeKPSusW5LVknNcSA7Q2nqSKj9dqeJ4dFmWA4K%2FWWuwOMJTF6r0GOqUByYN5oDoAbbJsBDbOnB8NVvDCZ5AsFz2Y%2FeTOjeJc7FjlWlftaB2yq%2B3nu4ruu1KIj6KINig1824bjz6jtp9aJhMZ49Qg6YErXb5B691PUb95MA1nctMWJBN8lfJl1LAYeIbIhOBSMA9DDeHBku4jczq10BYk4ds0dijlDyJcZB8pmfUL4zzKv29G4%2FFzKAGL8dy90aAfF8FsRrGfJOgLB6N06OSu&X-Amz-Signature=7596fe5c4ef3db08259c8c2151a022ff8c2a223f50f4cfd7e7823aac17726e32&X-Amz-SignedHeaders=host&x-id=GetObject)
