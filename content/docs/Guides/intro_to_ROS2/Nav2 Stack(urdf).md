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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU3YYMQJ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T033606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDBse20mqA42kpaeUhfaeEtqsOtfBKN6gAtxE47MLgtVwIhAJVgaIwj5gUXjoC%2FXFaFrkKPGvDYs%2FI0gnyzqzQyofXzKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMhpwo6bFvYFjGOZsq3ANpxR7urV2IgdqAJZuy0nTCLTmiCcaZBnDYq%2FNcRyxNhvc9vuPcv7uARy%2FcLAnlfshbY%2B7xk5Bs6bXasX5Hn0%2B6YiyNnCsqop7%2BWYuWqus53NBX%2FdQ1n2zF2uDUn7zwKG3YahenpCECXoG3wesPf470yHJBoE8zD23WrfoRO8LJ%2B873A3s8lHsOgo3jBPxIPzPiTGqybHwTq2DYI5rAmnJ7Ys4VV4aGUVEZFGEAh%2FwSbsKlz4pLYdJ%2B6lhYB3KShOH4w1FOuvGQ8IFJmY3NrUtLok0oH%2BXtxdjFaj5bRl5gfTe3RU4Rm5P93Z5YkKZ33OEPQI%2FpzSxBlE%2FIkzAZkIRO%2BJwYq8gwL8LTN4txkiPfCCfzo0oUqLMtdW4uBgZmgxtSsPeHjvv%2FZKxSXwf1HWYrxrVxhP3T%2FaMs9mjEa3rl6Vo4f%2BiTDdWb8%2BqWGiEU2jCpbzPXXHSNPEffsKioDpJte0BFFJOQPXv1ldyc%2Bp2XrZm0A5Dz6CHSqMBbAX0SYD2899g7TwtoU017PW5Qc0R2OqCut4rwkTmKACEmAw8As5cTDF43TlHFZlDgLNMS3SMXWhjvUsB2zjMylXd3AZ1RRMwrVHqrbJPcIt%2BEY56wXfuu%2B9Eca%2BtI06d9MjCupK2%2FBjqkARugpX3S9Vnxx8m%2FccUk6asHbPRcP4tQlFu8lzKwrt2CQiqDfgArC4A2WOMT59SEuAj6RzbN1VjNj0Aqe57dXJk1a2NL7XURViKVfxXCXOjTuyHevlYCZBUx0Bf7UCT41SbDI62MGj1ZvrvdKcfGunI3m6vjY3YiKQvbFRxjykoUc92DoaUR9k%2BJkHEW0t9pP0KsN%2BirG4qH%2BAnVxDWTzJ4chLk2&X-Amz-Signature=a6e89c1659e7316d0ed239ba5d73320393329a11021d8f07e97c8364ed8976e7&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU3YYMQJ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T033606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDBse20mqA42kpaeUhfaeEtqsOtfBKN6gAtxE47MLgtVwIhAJVgaIwj5gUXjoC%2FXFaFrkKPGvDYs%2FI0gnyzqzQyofXzKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMhpwo6bFvYFjGOZsq3ANpxR7urV2IgdqAJZuy0nTCLTmiCcaZBnDYq%2FNcRyxNhvc9vuPcv7uARy%2FcLAnlfshbY%2B7xk5Bs6bXasX5Hn0%2B6YiyNnCsqop7%2BWYuWqus53NBX%2FdQ1n2zF2uDUn7zwKG3YahenpCECXoG3wesPf470yHJBoE8zD23WrfoRO8LJ%2B873A3s8lHsOgo3jBPxIPzPiTGqybHwTq2DYI5rAmnJ7Ys4VV4aGUVEZFGEAh%2FwSbsKlz4pLYdJ%2B6lhYB3KShOH4w1FOuvGQ8IFJmY3NrUtLok0oH%2BXtxdjFaj5bRl5gfTe3RU4Rm5P93Z5YkKZ33OEPQI%2FpzSxBlE%2FIkzAZkIRO%2BJwYq8gwL8LTN4txkiPfCCfzo0oUqLMtdW4uBgZmgxtSsPeHjvv%2FZKxSXwf1HWYrxrVxhP3T%2FaMs9mjEa3rl6Vo4f%2BiTDdWb8%2BqWGiEU2jCpbzPXXHSNPEffsKioDpJte0BFFJOQPXv1ldyc%2Bp2XrZm0A5Dz6CHSqMBbAX0SYD2899g7TwtoU017PW5Qc0R2OqCut4rwkTmKACEmAw8As5cTDF43TlHFZlDgLNMS3SMXWhjvUsB2zjMylXd3AZ1RRMwrVHqrbJPcIt%2BEY56wXfuu%2B9Eca%2BtI06d9MjCupK2%2FBjqkARugpX3S9Vnxx8m%2FccUk6asHbPRcP4tQlFu8lzKwrt2CQiqDfgArC4A2WOMT59SEuAj6RzbN1VjNj0Aqe57dXJk1a2NL7XURViKVfxXCXOjTuyHevlYCZBUx0Bf7UCT41SbDI62MGj1ZvrvdKcfGunI3m6vjY3YiKQvbFRxjykoUc92DoaUR9k%2BJkHEW0t9pP0KsN%2BirG4qH%2BAnVxDWTzJ4chLk2&X-Amz-Signature=5f192c72c6296c58d5e3ec38759e54fdb7676bf7278e61fdd5b07fa4bd098578&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU3YYMQJ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T033606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDBse20mqA42kpaeUhfaeEtqsOtfBKN6gAtxE47MLgtVwIhAJVgaIwj5gUXjoC%2FXFaFrkKPGvDYs%2FI0gnyzqzQyofXzKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMhpwo6bFvYFjGOZsq3ANpxR7urV2IgdqAJZuy0nTCLTmiCcaZBnDYq%2FNcRyxNhvc9vuPcv7uARy%2FcLAnlfshbY%2B7xk5Bs6bXasX5Hn0%2B6YiyNnCsqop7%2BWYuWqus53NBX%2FdQ1n2zF2uDUn7zwKG3YahenpCECXoG3wesPf470yHJBoE8zD23WrfoRO8LJ%2B873A3s8lHsOgo3jBPxIPzPiTGqybHwTq2DYI5rAmnJ7Ys4VV4aGUVEZFGEAh%2FwSbsKlz4pLYdJ%2B6lhYB3KShOH4w1FOuvGQ8IFJmY3NrUtLok0oH%2BXtxdjFaj5bRl5gfTe3RU4Rm5P93Z5YkKZ33OEPQI%2FpzSxBlE%2FIkzAZkIRO%2BJwYq8gwL8LTN4txkiPfCCfzo0oUqLMtdW4uBgZmgxtSsPeHjvv%2FZKxSXwf1HWYrxrVxhP3T%2FaMs9mjEa3rl6Vo4f%2BiTDdWb8%2BqWGiEU2jCpbzPXXHSNPEffsKioDpJte0BFFJOQPXv1ldyc%2Bp2XrZm0A5Dz6CHSqMBbAX0SYD2899g7TwtoU017PW5Qc0R2OqCut4rwkTmKACEmAw8As5cTDF43TlHFZlDgLNMS3SMXWhjvUsB2zjMylXd3AZ1RRMwrVHqrbJPcIt%2BEY56wXfuu%2B9Eca%2BtI06d9MjCupK2%2FBjqkARugpX3S9Vnxx8m%2FccUk6asHbPRcP4tQlFu8lzKwrt2CQiqDfgArC4A2WOMT59SEuAj6RzbN1VjNj0Aqe57dXJk1a2NL7XURViKVfxXCXOjTuyHevlYCZBUx0Bf7UCT41SbDI62MGj1ZvrvdKcfGunI3m6vjY3YiKQvbFRxjykoUc92DoaUR9k%2BJkHEW0t9pP0KsN%2BirG4qH%2BAnVxDWTzJ4chLk2&X-Amz-Signature=779c01ccc5530880b9bc5c23ee3fa0a782a941c0da1011e1e836c3bf1b018460&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU3YYMQJ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T033606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDBse20mqA42kpaeUhfaeEtqsOtfBKN6gAtxE47MLgtVwIhAJVgaIwj5gUXjoC%2FXFaFrkKPGvDYs%2FI0gnyzqzQyofXzKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMhpwo6bFvYFjGOZsq3ANpxR7urV2IgdqAJZuy0nTCLTmiCcaZBnDYq%2FNcRyxNhvc9vuPcv7uARy%2FcLAnlfshbY%2B7xk5Bs6bXasX5Hn0%2B6YiyNnCsqop7%2BWYuWqus53NBX%2FdQ1n2zF2uDUn7zwKG3YahenpCECXoG3wesPf470yHJBoE8zD23WrfoRO8LJ%2B873A3s8lHsOgo3jBPxIPzPiTGqybHwTq2DYI5rAmnJ7Ys4VV4aGUVEZFGEAh%2FwSbsKlz4pLYdJ%2B6lhYB3KShOH4w1FOuvGQ8IFJmY3NrUtLok0oH%2BXtxdjFaj5bRl5gfTe3RU4Rm5P93Z5YkKZ33OEPQI%2FpzSxBlE%2FIkzAZkIRO%2BJwYq8gwL8LTN4txkiPfCCfzo0oUqLMtdW4uBgZmgxtSsPeHjvv%2FZKxSXwf1HWYrxrVxhP3T%2FaMs9mjEa3rl6Vo4f%2BiTDdWb8%2BqWGiEU2jCpbzPXXHSNPEffsKioDpJte0BFFJOQPXv1ldyc%2Bp2XrZm0A5Dz6CHSqMBbAX0SYD2899g7TwtoU017PW5Qc0R2OqCut4rwkTmKACEmAw8As5cTDF43TlHFZlDgLNMS3SMXWhjvUsB2zjMylXd3AZ1RRMwrVHqrbJPcIt%2BEY56wXfuu%2B9Eca%2BtI06d9MjCupK2%2FBjqkARugpX3S9Vnxx8m%2FccUk6asHbPRcP4tQlFu8lzKwrt2CQiqDfgArC4A2WOMT59SEuAj6RzbN1VjNj0Aqe57dXJk1a2NL7XURViKVfxXCXOjTuyHevlYCZBUx0Bf7UCT41SbDI62MGj1ZvrvdKcfGunI3m6vjY3YiKQvbFRxjykoUc92DoaUR9k%2BJkHEW0t9pP0KsN%2BirG4qH%2BAnVxDWTzJ4chLk2&X-Amz-Signature=59a7bbb9eb2d4b30b77956dc34702d0bc87c55ca5b0581f17b3dd0f0ac9aa6f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU3YYMQJ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T033606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDBse20mqA42kpaeUhfaeEtqsOtfBKN6gAtxE47MLgtVwIhAJVgaIwj5gUXjoC%2FXFaFrkKPGvDYs%2FI0gnyzqzQyofXzKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMhpwo6bFvYFjGOZsq3ANpxR7urV2IgdqAJZuy0nTCLTmiCcaZBnDYq%2FNcRyxNhvc9vuPcv7uARy%2FcLAnlfshbY%2B7xk5Bs6bXasX5Hn0%2B6YiyNnCsqop7%2BWYuWqus53NBX%2FdQ1n2zF2uDUn7zwKG3YahenpCECXoG3wesPf470yHJBoE8zD23WrfoRO8LJ%2B873A3s8lHsOgo3jBPxIPzPiTGqybHwTq2DYI5rAmnJ7Ys4VV4aGUVEZFGEAh%2FwSbsKlz4pLYdJ%2B6lhYB3KShOH4w1FOuvGQ8IFJmY3NrUtLok0oH%2BXtxdjFaj5bRl5gfTe3RU4Rm5P93Z5YkKZ33OEPQI%2FpzSxBlE%2FIkzAZkIRO%2BJwYq8gwL8LTN4txkiPfCCfzo0oUqLMtdW4uBgZmgxtSsPeHjvv%2FZKxSXwf1HWYrxrVxhP3T%2FaMs9mjEa3rl6Vo4f%2BiTDdWb8%2BqWGiEU2jCpbzPXXHSNPEffsKioDpJte0BFFJOQPXv1ldyc%2Bp2XrZm0A5Dz6CHSqMBbAX0SYD2899g7TwtoU017PW5Qc0R2OqCut4rwkTmKACEmAw8As5cTDF43TlHFZlDgLNMS3SMXWhjvUsB2zjMylXd3AZ1RRMwrVHqrbJPcIt%2BEY56wXfuu%2B9Eca%2BtI06d9MjCupK2%2FBjqkARugpX3S9Vnxx8m%2FccUk6asHbPRcP4tQlFu8lzKwrt2CQiqDfgArC4A2WOMT59SEuAj6RzbN1VjNj0Aqe57dXJk1a2NL7XURViKVfxXCXOjTuyHevlYCZBUx0Bf7UCT41SbDI62MGj1ZvrvdKcfGunI3m6vjY3YiKQvbFRxjykoUc92DoaUR9k%2BJkHEW0t9pP0KsN%2BirG4qH%2BAnVxDWTzJ4chLk2&X-Amz-Signature=a02b5bf65b8151accf14a8da6369e26b8c9570f426572044654479ccef92a936&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU3YYMQJ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T033606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDBse20mqA42kpaeUhfaeEtqsOtfBKN6gAtxE47MLgtVwIhAJVgaIwj5gUXjoC%2FXFaFrkKPGvDYs%2FI0gnyzqzQyofXzKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyMhpwo6bFvYFjGOZsq3ANpxR7urV2IgdqAJZuy0nTCLTmiCcaZBnDYq%2FNcRyxNhvc9vuPcv7uARy%2FcLAnlfshbY%2B7xk5Bs6bXasX5Hn0%2B6YiyNnCsqop7%2BWYuWqus53NBX%2FdQ1n2zF2uDUn7zwKG3YahenpCECXoG3wesPf470yHJBoE8zD23WrfoRO8LJ%2B873A3s8lHsOgo3jBPxIPzPiTGqybHwTq2DYI5rAmnJ7Ys4VV4aGUVEZFGEAh%2FwSbsKlz4pLYdJ%2B6lhYB3KShOH4w1FOuvGQ8IFJmY3NrUtLok0oH%2BXtxdjFaj5bRl5gfTe3RU4Rm5P93Z5YkKZ33OEPQI%2FpzSxBlE%2FIkzAZkIRO%2BJwYq8gwL8LTN4txkiPfCCfzo0oUqLMtdW4uBgZmgxtSsPeHjvv%2FZKxSXwf1HWYrxrVxhP3T%2FaMs9mjEa3rl6Vo4f%2BiTDdWb8%2BqWGiEU2jCpbzPXXHSNPEffsKioDpJte0BFFJOQPXv1ldyc%2Bp2XrZm0A5Dz6CHSqMBbAX0SYD2899g7TwtoU017PW5Qc0R2OqCut4rwkTmKACEmAw8As5cTDF43TlHFZlDgLNMS3SMXWhjvUsB2zjMylXd3AZ1RRMwrVHqrbJPcIt%2BEY56wXfuu%2B9Eca%2BtI06d9MjCupK2%2FBjqkARugpX3S9Vnxx8m%2FccUk6asHbPRcP4tQlFu8lzKwrt2CQiqDfgArC4A2WOMT59SEuAj6RzbN1VjNj0Aqe57dXJk1a2NL7XURViKVfxXCXOjTuyHevlYCZBUx0Bf7UCT41SbDI62MGj1ZvrvdKcfGunI3m6vjY3YiKQvbFRxjykoUc92DoaUR9k%2BJkHEW0t9pP0KsN%2BirG4qH%2BAnVxDWTzJ4chLk2&X-Amz-Signature=52652196802fdf0c7b6c4093b984cb72087d044e7d325dd87d03b6cb8cd80745&X-Amz-SignedHeaders=host&x-id=GetObject)
