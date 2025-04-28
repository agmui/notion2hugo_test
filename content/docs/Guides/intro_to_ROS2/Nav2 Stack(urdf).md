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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663464M24B%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T022709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAC5Jebg3fLl42i0I2QQqIy9v5mfNlf%2BgCshdcQUsfFuAiEAwAnXDMIQP5K%2F6LoSCaRCy9rxDopZcFrEPJt1xKq%2F%2BtQq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDAcj9lPL4FqcnABKjSrcAwByb3hEoLb1U5jJvHc6hhnQdrXMKz4qVHOXwdRe36FG%2FPyMYg8YiXDn%2F2%2BMOITIw31SvjgEgB88w%2BnMQe%2BjeUFVv11Xtq3xQCkgbZbKKUG5GBW46rcOt8qE94qUrO6Q%2F14ebxzOSqB4953kAwQDNKnv2Z1nc%2BwmU5Oz91%2FOv9gIoK0pg4pUBo81HlfL2sl4nUert%2B7Sj7ckb7TgL4zl%2BGNGh3%2FXBmbqLiscUwSZSk1d0VX5ajmC00IqYLkUTdUDg7FfgS6K3PYa1IILsZoeUoh8oSIHyeambXMdemm%2Ftos70OO%2Bi2rLWHX4%2B%2Fd%2BB12FhOd0rj4z1Q1Slxx3RyJ2NUhSZFR%2FvYhqa9BEv3SikVZu7ezWpkPyqi%2FWjDEzAI5GVcZMZzkVu5mFeL5BnJKQcobdQL%2FgIc0qlEI19LCJ7l1uckWhwneJf2HTmN%2BhV5M%2F6Mrn7SZ2gp44OJVb4shi%2B44J9a3pojSsUrVAwwavl3BGBBa2xGnlNCP3EcwFiCeqoiIMtgTGvLpVIZ1KZGPySE4t3QevntnFi8FBHd2FhBRv4%2FiaGQWZZDv1f4SNBosYn%2FvCu6JesqGBdf0tY1s97AsdTelVzbg3pGBJq%2BpEQTc3wYloF30fmG5QgMPwMMihu8AGOqUBuv%2FGEAMuOo7AWGc1KVmzuOQwe%2FUxB%2BMDXdWY0eMvW3%2FKLiWDnaxJ6ELivpE1BWG5DkISRe%2BjR31W1tcTV%2B4Gzhp3KuhbhpDfvSizlcsaSdz1ZkEt6yZhnk5imlcXhtXX%2BplGtQuUZVPTI6QsFPDZh3pL3kGqotiFNmAiKUMhR3Q1nJqvdUQsnna4eiJWIpq128JmDXgIL7%2FF7p7fDqPrF3MlM4Kd&X-Amz-Signature=44c83e62bf9ae7902643b96a84028ecffb7e5b4bdd782a125cb5bc289bc13015&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663464M24B%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T022709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAC5Jebg3fLl42i0I2QQqIy9v5mfNlf%2BgCshdcQUsfFuAiEAwAnXDMIQP5K%2F6LoSCaRCy9rxDopZcFrEPJt1xKq%2F%2BtQq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDAcj9lPL4FqcnABKjSrcAwByb3hEoLb1U5jJvHc6hhnQdrXMKz4qVHOXwdRe36FG%2FPyMYg8YiXDn%2F2%2BMOITIw31SvjgEgB88w%2BnMQe%2BjeUFVv11Xtq3xQCkgbZbKKUG5GBW46rcOt8qE94qUrO6Q%2F14ebxzOSqB4953kAwQDNKnv2Z1nc%2BwmU5Oz91%2FOv9gIoK0pg4pUBo81HlfL2sl4nUert%2B7Sj7ckb7TgL4zl%2BGNGh3%2FXBmbqLiscUwSZSk1d0VX5ajmC00IqYLkUTdUDg7FfgS6K3PYa1IILsZoeUoh8oSIHyeambXMdemm%2Ftos70OO%2Bi2rLWHX4%2B%2Fd%2BB12FhOd0rj4z1Q1Slxx3RyJ2NUhSZFR%2FvYhqa9BEv3SikVZu7ezWpkPyqi%2FWjDEzAI5GVcZMZzkVu5mFeL5BnJKQcobdQL%2FgIc0qlEI19LCJ7l1uckWhwneJf2HTmN%2BhV5M%2F6Mrn7SZ2gp44OJVb4shi%2B44J9a3pojSsUrVAwwavl3BGBBa2xGnlNCP3EcwFiCeqoiIMtgTGvLpVIZ1KZGPySE4t3QevntnFi8FBHd2FhBRv4%2FiaGQWZZDv1f4SNBosYn%2FvCu6JesqGBdf0tY1s97AsdTelVzbg3pGBJq%2BpEQTc3wYloF30fmG5QgMPwMMihu8AGOqUBuv%2FGEAMuOo7AWGc1KVmzuOQwe%2FUxB%2BMDXdWY0eMvW3%2FKLiWDnaxJ6ELivpE1BWG5DkISRe%2BjR31W1tcTV%2B4Gzhp3KuhbhpDfvSizlcsaSdz1ZkEt6yZhnk5imlcXhtXX%2BplGtQuUZVPTI6QsFPDZh3pL3kGqotiFNmAiKUMhR3Q1nJqvdUQsnna4eiJWIpq128JmDXgIL7%2FF7p7fDqPrF3MlM4Kd&X-Amz-Signature=346effc19f25828b904382f775e4d0466c2c001902bae9b8e44810967c4cd8af&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663464M24B%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T022709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAC5Jebg3fLl42i0I2QQqIy9v5mfNlf%2BgCshdcQUsfFuAiEAwAnXDMIQP5K%2F6LoSCaRCy9rxDopZcFrEPJt1xKq%2F%2BtQq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDAcj9lPL4FqcnABKjSrcAwByb3hEoLb1U5jJvHc6hhnQdrXMKz4qVHOXwdRe36FG%2FPyMYg8YiXDn%2F2%2BMOITIw31SvjgEgB88w%2BnMQe%2BjeUFVv11Xtq3xQCkgbZbKKUG5GBW46rcOt8qE94qUrO6Q%2F14ebxzOSqB4953kAwQDNKnv2Z1nc%2BwmU5Oz91%2FOv9gIoK0pg4pUBo81HlfL2sl4nUert%2B7Sj7ckb7TgL4zl%2BGNGh3%2FXBmbqLiscUwSZSk1d0VX5ajmC00IqYLkUTdUDg7FfgS6K3PYa1IILsZoeUoh8oSIHyeambXMdemm%2Ftos70OO%2Bi2rLWHX4%2B%2Fd%2BB12FhOd0rj4z1Q1Slxx3RyJ2NUhSZFR%2FvYhqa9BEv3SikVZu7ezWpkPyqi%2FWjDEzAI5GVcZMZzkVu5mFeL5BnJKQcobdQL%2FgIc0qlEI19LCJ7l1uckWhwneJf2HTmN%2BhV5M%2F6Mrn7SZ2gp44OJVb4shi%2B44J9a3pojSsUrVAwwavl3BGBBa2xGnlNCP3EcwFiCeqoiIMtgTGvLpVIZ1KZGPySE4t3QevntnFi8FBHd2FhBRv4%2FiaGQWZZDv1f4SNBosYn%2FvCu6JesqGBdf0tY1s97AsdTelVzbg3pGBJq%2BpEQTc3wYloF30fmG5QgMPwMMihu8AGOqUBuv%2FGEAMuOo7AWGc1KVmzuOQwe%2FUxB%2BMDXdWY0eMvW3%2FKLiWDnaxJ6ELivpE1BWG5DkISRe%2BjR31W1tcTV%2B4Gzhp3KuhbhpDfvSizlcsaSdz1ZkEt6yZhnk5imlcXhtXX%2BplGtQuUZVPTI6QsFPDZh3pL3kGqotiFNmAiKUMhR3Q1nJqvdUQsnna4eiJWIpq128JmDXgIL7%2FF7p7fDqPrF3MlM4Kd&X-Amz-Signature=8c2780173a7b993ad16f0ac51a101f760bb3f0d08bdfbb939587b5dcd7fca2c8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663464M24B%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T022709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAC5Jebg3fLl42i0I2QQqIy9v5mfNlf%2BgCshdcQUsfFuAiEAwAnXDMIQP5K%2F6LoSCaRCy9rxDopZcFrEPJt1xKq%2F%2BtQq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDAcj9lPL4FqcnABKjSrcAwByb3hEoLb1U5jJvHc6hhnQdrXMKz4qVHOXwdRe36FG%2FPyMYg8YiXDn%2F2%2BMOITIw31SvjgEgB88w%2BnMQe%2BjeUFVv11Xtq3xQCkgbZbKKUG5GBW46rcOt8qE94qUrO6Q%2F14ebxzOSqB4953kAwQDNKnv2Z1nc%2BwmU5Oz91%2FOv9gIoK0pg4pUBo81HlfL2sl4nUert%2B7Sj7ckb7TgL4zl%2BGNGh3%2FXBmbqLiscUwSZSk1d0VX5ajmC00IqYLkUTdUDg7FfgS6K3PYa1IILsZoeUoh8oSIHyeambXMdemm%2Ftos70OO%2Bi2rLWHX4%2B%2Fd%2BB12FhOd0rj4z1Q1Slxx3RyJ2NUhSZFR%2FvYhqa9BEv3SikVZu7ezWpkPyqi%2FWjDEzAI5GVcZMZzkVu5mFeL5BnJKQcobdQL%2FgIc0qlEI19LCJ7l1uckWhwneJf2HTmN%2BhV5M%2F6Mrn7SZ2gp44OJVb4shi%2B44J9a3pojSsUrVAwwavl3BGBBa2xGnlNCP3EcwFiCeqoiIMtgTGvLpVIZ1KZGPySE4t3QevntnFi8FBHd2FhBRv4%2FiaGQWZZDv1f4SNBosYn%2FvCu6JesqGBdf0tY1s97AsdTelVzbg3pGBJq%2BpEQTc3wYloF30fmG5QgMPwMMihu8AGOqUBuv%2FGEAMuOo7AWGc1KVmzuOQwe%2FUxB%2BMDXdWY0eMvW3%2FKLiWDnaxJ6ELivpE1BWG5DkISRe%2BjR31W1tcTV%2B4Gzhp3KuhbhpDfvSizlcsaSdz1ZkEt6yZhnk5imlcXhtXX%2BplGtQuUZVPTI6QsFPDZh3pL3kGqotiFNmAiKUMhR3Q1nJqvdUQsnna4eiJWIpq128JmDXgIL7%2FF7p7fDqPrF3MlM4Kd&X-Amz-Signature=4cb3580a7b12c633076c5caaf28c6f4e4c395a133a6379b52cb8f618c6aba9a8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663464M24B%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T022709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAC5Jebg3fLl42i0I2QQqIy9v5mfNlf%2BgCshdcQUsfFuAiEAwAnXDMIQP5K%2F6LoSCaRCy9rxDopZcFrEPJt1xKq%2F%2BtQq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDAcj9lPL4FqcnABKjSrcAwByb3hEoLb1U5jJvHc6hhnQdrXMKz4qVHOXwdRe36FG%2FPyMYg8YiXDn%2F2%2BMOITIw31SvjgEgB88w%2BnMQe%2BjeUFVv11Xtq3xQCkgbZbKKUG5GBW46rcOt8qE94qUrO6Q%2F14ebxzOSqB4953kAwQDNKnv2Z1nc%2BwmU5Oz91%2FOv9gIoK0pg4pUBo81HlfL2sl4nUert%2B7Sj7ckb7TgL4zl%2BGNGh3%2FXBmbqLiscUwSZSk1d0VX5ajmC00IqYLkUTdUDg7FfgS6K3PYa1IILsZoeUoh8oSIHyeambXMdemm%2Ftos70OO%2Bi2rLWHX4%2B%2Fd%2BB12FhOd0rj4z1Q1Slxx3RyJ2NUhSZFR%2FvYhqa9BEv3SikVZu7ezWpkPyqi%2FWjDEzAI5GVcZMZzkVu5mFeL5BnJKQcobdQL%2FgIc0qlEI19LCJ7l1uckWhwneJf2HTmN%2BhV5M%2F6Mrn7SZ2gp44OJVb4shi%2B44J9a3pojSsUrVAwwavl3BGBBa2xGnlNCP3EcwFiCeqoiIMtgTGvLpVIZ1KZGPySE4t3QevntnFi8FBHd2FhBRv4%2FiaGQWZZDv1f4SNBosYn%2FvCu6JesqGBdf0tY1s97AsdTelVzbg3pGBJq%2BpEQTc3wYloF30fmG5QgMPwMMihu8AGOqUBuv%2FGEAMuOo7AWGc1KVmzuOQwe%2FUxB%2BMDXdWY0eMvW3%2FKLiWDnaxJ6ELivpE1BWG5DkISRe%2BjR31W1tcTV%2B4Gzhp3KuhbhpDfvSizlcsaSdz1ZkEt6yZhnk5imlcXhtXX%2BplGtQuUZVPTI6QsFPDZh3pL3kGqotiFNmAiKUMhR3Q1nJqvdUQsnna4eiJWIpq128JmDXgIL7%2FF7p7fDqPrF3MlM4Kd&X-Amz-Signature=a85a9cb48e3e1d66efafce41c88849d8d43c929d9cb55153d20c901c609cf07a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663464M24B%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T022709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAC5Jebg3fLl42i0I2QQqIy9v5mfNlf%2BgCshdcQUsfFuAiEAwAnXDMIQP5K%2F6LoSCaRCy9rxDopZcFrEPJt1xKq%2F%2BtQq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDAcj9lPL4FqcnABKjSrcAwByb3hEoLb1U5jJvHc6hhnQdrXMKz4qVHOXwdRe36FG%2FPyMYg8YiXDn%2F2%2BMOITIw31SvjgEgB88w%2BnMQe%2BjeUFVv11Xtq3xQCkgbZbKKUG5GBW46rcOt8qE94qUrO6Q%2F14ebxzOSqB4953kAwQDNKnv2Z1nc%2BwmU5Oz91%2FOv9gIoK0pg4pUBo81HlfL2sl4nUert%2B7Sj7ckb7TgL4zl%2BGNGh3%2FXBmbqLiscUwSZSk1d0VX5ajmC00IqYLkUTdUDg7FfgS6K3PYa1IILsZoeUoh8oSIHyeambXMdemm%2Ftos70OO%2Bi2rLWHX4%2B%2Fd%2BB12FhOd0rj4z1Q1Slxx3RyJ2NUhSZFR%2FvYhqa9BEv3SikVZu7ezWpkPyqi%2FWjDEzAI5GVcZMZzkVu5mFeL5BnJKQcobdQL%2FgIc0qlEI19LCJ7l1uckWhwneJf2HTmN%2BhV5M%2F6Mrn7SZ2gp44OJVb4shi%2B44J9a3pojSsUrVAwwavl3BGBBa2xGnlNCP3EcwFiCeqoiIMtgTGvLpVIZ1KZGPySE4t3QevntnFi8FBHd2FhBRv4%2FiaGQWZZDv1f4SNBosYn%2FvCu6JesqGBdf0tY1s97AsdTelVzbg3pGBJq%2BpEQTc3wYloF30fmG5QgMPwMMihu8AGOqUBuv%2FGEAMuOo7AWGc1KVmzuOQwe%2FUxB%2BMDXdWY0eMvW3%2FKLiWDnaxJ6ELivpE1BWG5DkISRe%2BjR31W1tcTV%2B4Gzhp3KuhbhpDfvSizlcsaSdz1ZkEt6yZhnk5imlcXhtXX%2BplGtQuUZVPTI6QsFPDZh3pL3kGqotiFNmAiKUMhR3Q1nJqvdUQsnna4eiJWIpq128JmDXgIL7%2FF7p7fDqPrF3MlM4Kd&X-Amz-Signature=b347e518803fd63a996d5ffd847c7bc98dbaa2d39c7718dd57934bc4e0e1e8e1&X-Amz-SignedHeaders=host&x-id=GetObject)
