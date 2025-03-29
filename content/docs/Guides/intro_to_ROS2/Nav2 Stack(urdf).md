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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HAH5KPZ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T121237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIGxFA5MHBZ%2BCCKkiF%2BjdEKDQYKxSYjAdi1caHjKHmd48AiEA8G0Ef%2BkV8ehxkrz2S1iki3rU5ouISFh2jEQmyyQq%2FKwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDK2fq0r9UbHR0E5CuSrcA%2FiDRAhgF8Ut3ZL2Jf6SHKO4405byirooJAd%2BhIEmvKfWDHDtKB%2F0uFwldHIGYP7lZuxpgNrOmee0H9tsxeLKxiU9gznySOnNwnNYWy1pDMZyaT4aQjDrpLep07EbDfJY664uOzRWCbwHv8J%2FqKIeBifaGWAjK0pqxyKbnhUza8QhiAKJ0nofp2I1%2B8SOsnfixo90hYsfo%2Fy9sLE7cYI0m6tPBvD5d7%2F%2BDdvzoRLk8CN%2BNLhrbZHa%2FhMAZ364LXu585NwtRoL59qzKlr9Bd1SkTAER22YR9LeavH8X1S0uQknS6LfiA0F%2FbWYwF988G7R6T%2FFw2tKPwkXAMFYziWZSMt3ymwWlZ2ohVY5WMR8QyFUwdWoYy0yzICcLp%2FT2dTgTK2KsWyj7gCrTelDhsq5zhoriSk8iwSYzxJMa5qNjmsP4wDSiceq1Jp1bVZlRydqSKWt7XRRqPIB%2B%2B5wWlxWjMufAYnQWGuIrKwyif7VaTeYosINxluizV%2Bj986j8HhlRvQ4clFcPmtOM3ku2Yn4YH9oXOFpo531UvKcvfexYfXYoSo5A5oiT8%2Be2DEruhCBe27ffOLnl76zQrQpiZjow4ySZ8Hl%2F25lAjGzRDjxgzbgV1kAiHYJQHiaLQCMIO1n78GOqUBw9KBoAu2p3Oaur8o23PmW1dyCbUvBwen1tRVBFmbcSrkOR5g66nKQyahZVvnFGQ0sEKweLVTFSUOZ1hYanwLvwO%2BXrrZ4T4n4cUidlnTK4XPprb1qWeQzY67NDMAZsXgrYVzNKDuhFAMI0zSi3RxlNy3SdhlLltkSnmTmYjPNHjssWCkMH4hM5ViJiGQN804fLAAT9CJ0eguM62xfA7hViCrciqP&X-Amz-Signature=801d68906f787e435bff95353e95f1b8e76b6f972cf35f65c8faaecf2c6cc859&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HAH5KPZ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T121237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIGxFA5MHBZ%2BCCKkiF%2BjdEKDQYKxSYjAdi1caHjKHmd48AiEA8G0Ef%2BkV8ehxkrz2S1iki3rU5ouISFh2jEQmyyQq%2FKwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDK2fq0r9UbHR0E5CuSrcA%2FiDRAhgF8Ut3ZL2Jf6SHKO4405byirooJAd%2BhIEmvKfWDHDtKB%2F0uFwldHIGYP7lZuxpgNrOmee0H9tsxeLKxiU9gznySOnNwnNYWy1pDMZyaT4aQjDrpLep07EbDfJY664uOzRWCbwHv8J%2FqKIeBifaGWAjK0pqxyKbnhUza8QhiAKJ0nofp2I1%2B8SOsnfixo90hYsfo%2Fy9sLE7cYI0m6tPBvD5d7%2F%2BDdvzoRLk8CN%2BNLhrbZHa%2FhMAZ364LXu585NwtRoL59qzKlr9Bd1SkTAER22YR9LeavH8X1S0uQknS6LfiA0F%2FbWYwF988G7R6T%2FFw2tKPwkXAMFYziWZSMt3ymwWlZ2ohVY5WMR8QyFUwdWoYy0yzICcLp%2FT2dTgTK2KsWyj7gCrTelDhsq5zhoriSk8iwSYzxJMa5qNjmsP4wDSiceq1Jp1bVZlRydqSKWt7XRRqPIB%2B%2B5wWlxWjMufAYnQWGuIrKwyif7VaTeYosINxluizV%2Bj986j8HhlRvQ4clFcPmtOM3ku2Yn4YH9oXOFpo531UvKcvfexYfXYoSo5A5oiT8%2Be2DEruhCBe27ffOLnl76zQrQpiZjow4ySZ8Hl%2F25lAjGzRDjxgzbgV1kAiHYJQHiaLQCMIO1n78GOqUBw9KBoAu2p3Oaur8o23PmW1dyCbUvBwen1tRVBFmbcSrkOR5g66nKQyahZVvnFGQ0sEKweLVTFSUOZ1hYanwLvwO%2BXrrZ4T4n4cUidlnTK4XPprb1qWeQzY67NDMAZsXgrYVzNKDuhFAMI0zSi3RxlNy3SdhlLltkSnmTmYjPNHjssWCkMH4hM5ViJiGQN804fLAAT9CJ0eguM62xfA7hViCrciqP&X-Amz-Signature=cb86a4fbcd516fb529244e784352af00a4b1a2f6b6215f830964a397d1e9a26d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HAH5KPZ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T121237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIGxFA5MHBZ%2BCCKkiF%2BjdEKDQYKxSYjAdi1caHjKHmd48AiEA8G0Ef%2BkV8ehxkrz2S1iki3rU5ouISFh2jEQmyyQq%2FKwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDK2fq0r9UbHR0E5CuSrcA%2FiDRAhgF8Ut3ZL2Jf6SHKO4405byirooJAd%2BhIEmvKfWDHDtKB%2F0uFwldHIGYP7lZuxpgNrOmee0H9tsxeLKxiU9gznySOnNwnNYWy1pDMZyaT4aQjDrpLep07EbDfJY664uOzRWCbwHv8J%2FqKIeBifaGWAjK0pqxyKbnhUza8QhiAKJ0nofp2I1%2B8SOsnfixo90hYsfo%2Fy9sLE7cYI0m6tPBvD5d7%2F%2BDdvzoRLk8CN%2BNLhrbZHa%2FhMAZ364LXu585NwtRoL59qzKlr9Bd1SkTAER22YR9LeavH8X1S0uQknS6LfiA0F%2FbWYwF988G7R6T%2FFw2tKPwkXAMFYziWZSMt3ymwWlZ2ohVY5WMR8QyFUwdWoYy0yzICcLp%2FT2dTgTK2KsWyj7gCrTelDhsq5zhoriSk8iwSYzxJMa5qNjmsP4wDSiceq1Jp1bVZlRydqSKWt7XRRqPIB%2B%2B5wWlxWjMufAYnQWGuIrKwyif7VaTeYosINxluizV%2Bj986j8HhlRvQ4clFcPmtOM3ku2Yn4YH9oXOFpo531UvKcvfexYfXYoSo5A5oiT8%2Be2DEruhCBe27ffOLnl76zQrQpiZjow4ySZ8Hl%2F25lAjGzRDjxgzbgV1kAiHYJQHiaLQCMIO1n78GOqUBw9KBoAu2p3Oaur8o23PmW1dyCbUvBwen1tRVBFmbcSrkOR5g66nKQyahZVvnFGQ0sEKweLVTFSUOZ1hYanwLvwO%2BXrrZ4T4n4cUidlnTK4XPprb1qWeQzY67NDMAZsXgrYVzNKDuhFAMI0zSi3RxlNy3SdhlLltkSnmTmYjPNHjssWCkMH4hM5ViJiGQN804fLAAT9CJ0eguM62xfA7hViCrciqP&X-Amz-Signature=f8cf04d9240740d38408513c9159c314375dd273064d843e6331f05d9bbe3e61&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HAH5KPZ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T121237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIGxFA5MHBZ%2BCCKkiF%2BjdEKDQYKxSYjAdi1caHjKHmd48AiEA8G0Ef%2BkV8ehxkrz2S1iki3rU5ouISFh2jEQmyyQq%2FKwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDK2fq0r9UbHR0E5CuSrcA%2FiDRAhgF8Ut3ZL2Jf6SHKO4405byirooJAd%2BhIEmvKfWDHDtKB%2F0uFwldHIGYP7lZuxpgNrOmee0H9tsxeLKxiU9gznySOnNwnNYWy1pDMZyaT4aQjDrpLep07EbDfJY664uOzRWCbwHv8J%2FqKIeBifaGWAjK0pqxyKbnhUza8QhiAKJ0nofp2I1%2B8SOsnfixo90hYsfo%2Fy9sLE7cYI0m6tPBvD5d7%2F%2BDdvzoRLk8CN%2BNLhrbZHa%2FhMAZ364LXu585NwtRoL59qzKlr9Bd1SkTAER22YR9LeavH8X1S0uQknS6LfiA0F%2FbWYwF988G7R6T%2FFw2tKPwkXAMFYziWZSMt3ymwWlZ2ohVY5WMR8QyFUwdWoYy0yzICcLp%2FT2dTgTK2KsWyj7gCrTelDhsq5zhoriSk8iwSYzxJMa5qNjmsP4wDSiceq1Jp1bVZlRydqSKWt7XRRqPIB%2B%2B5wWlxWjMufAYnQWGuIrKwyif7VaTeYosINxluizV%2Bj986j8HhlRvQ4clFcPmtOM3ku2Yn4YH9oXOFpo531UvKcvfexYfXYoSo5A5oiT8%2Be2DEruhCBe27ffOLnl76zQrQpiZjow4ySZ8Hl%2F25lAjGzRDjxgzbgV1kAiHYJQHiaLQCMIO1n78GOqUBw9KBoAu2p3Oaur8o23PmW1dyCbUvBwen1tRVBFmbcSrkOR5g66nKQyahZVvnFGQ0sEKweLVTFSUOZ1hYanwLvwO%2BXrrZ4T4n4cUidlnTK4XPprb1qWeQzY67NDMAZsXgrYVzNKDuhFAMI0zSi3RxlNy3SdhlLltkSnmTmYjPNHjssWCkMH4hM5ViJiGQN804fLAAT9CJ0eguM62xfA7hViCrciqP&X-Amz-Signature=caac709315a1cb654588fbb27ce9bac1ffebded4944971cc9d17791f27c17cc7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HAH5KPZ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T121237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIGxFA5MHBZ%2BCCKkiF%2BjdEKDQYKxSYjAdi1caHjKHmd48AiEA8G0Ef%2BkV8ehxkrz2S1iki3rU5ouISFh2jEQmyyQq%2FKwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDK2fq0r9UbHR0E5CuSrcA%2FiDRAhgF8Ut3ZL2Jf6SHKO4405byirooJAd%2BhIEmvKfWDHDtKB%2F0uFwldHIGYP7lZuxpgNrOmee0H9tsxeLKxiU9gznySOnNwnNYWy1pDMZyaT4aQjDrpLep07EbDfJY664uOzRWCbwHv8J%2FqKIeBifaGWAjK0pqxyKbnhUza8QhiAKJ0nofp2I1%2B8SOsnfixo90hYsfo%2Fy9sLE7cYI0m6tPBvD5d7%2F%2BDdvzoRLk8CN%2BNLhrbZHa%2FhMAZ364LXu585NwtRoL59qzKlr9Bd1SkTAER22YR9LeavH8X1S0uQknS6LfiA0F%2FbWYwF988G7R6T%2FFw2tKPwkXAMFYziWZSMt3ymwWlZ2ohVY5WMR8QyFUwdWoYy0yzICcLp%2FT2dTgTK2KsWyj7gCrTelDhsq5zhoriSk8iwSYzxJMa5qNjmsP4wDSiceq1Jp1bVZlRydqSKWt7XRRqPIB%2B%2B5wWlxWjMufAYnQWGuIrKwyif7VaTeYosINxluizV%2Bj986j8HhlRvQ4clFcPmtOM3ku2Yn4YH9oXOFpo531UvKcvfexYfXYoSo5A5oiT8%2Be2DEruhCBe27ffOLnl76zQrQpiZjow4ySZ8Hl%2F25lAjGzRDjxgzbgV1kAiHYJQHiaLQCMIO1n78GOqUBw9KBoAu2p3Oaur8o23PmW1dyCbUvBwen1tRVBFmbcSrkOR5g66nKQyahZVvnFGQ0sEKweLVTFSUOZ1hYanwLvwO%2BXrrZ4T4n4cUidlnTK4XPprb1qWeQzY67NDMAZsXgrYVzNKDuhFAMI0zSi3RxlNy3SdhlLltkSnmTmYjPNHjssWCkMH4hM5ViJiGQN804fLAAT9CJ0eguM62xfA7hViCrciqP&X-Amz-Signature=37498958a1d3861a6636f72f6434ecf75518ce13200deeeda2c7664c8ff59534&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HAH5KPZ%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T121237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIGxFA5MHBZ%2BCCKkiF%2BjdEKDQYKxSYjAdi1caHjKHmd48AiEA8G0Ef%2BkV8ehxkrz2S1iki3rU5ouISFh2jEQmyyQq%2FKwq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDK2fq0r9UbHR0E5CuSrcA%2FiDRAhgF8Ut3ZL2Jf6SHKO4405byirooJAd%2BhIEmvKfWDHDtKB%2F0uFwldHIGYP7lZuxpgNrOmee0H9tsxeLKxiU9gznySOnNwnNYWy1pDMZyaT4aQjDrpLep07EbDfJY664uOzRWCbwHv8J%2FqKIeBifaGWAjK0pqxyKbnhUza8QhiAKJ0nofp2I1%2B8SOsnfixo90hYsfo%2Fy9sLE7cYI0m6tPBvD5d7%2F%2BDdvzoRLk8CN%2BNLhrbZHa%2FhMAZ364LXu585NwtRoL59qzKlr9Bd1SkTAER22YR9LeavH8X1S0uQknS6LfiA0F%2FbWYwF988G7R6T%2FFw2tKPwkXAMFYziWZSMt3ymwWlZ2ohVY5WMR8QyFUwdWoYy0yzICcLp%2FT2dTgTK2KsWyj7gCrTelDhsq5zhoriSk8iwSYzxJMa5qNjmsP4wDSiceq1Jp1bVZlRydqSKWt7XRRqPIB%2B%2B5wWlxWjMufAYnQWGuIrKwyif7VaTeYosINxluizV%2Bj986j8HhlRvQ4clFcPmtOM3ku2Yn4YH9oXOFpo531UvKcvfexYfXYoSo5A5oiT8%2Be2DEruhCBe27ffOLnl76zQrQpiZjow4ySZ8Hl%2F25lAjGzRDjxgzbgV1kAiHYJQHiaLQCMIO1n78GOqUBw9KBoAu2p3Oaur8o23PmW1dyCbUvBwen1tRVBFmbcSrkOR5g66nKQyahZVvnFGQ0sEKweLVTFSUOZ1hYanwLvwO%2BXrrZ4T4n4cUidlnTK4XPprb1qWeQzY67NDMAZsXgrYVzNKDuhFAMI0zSi3RxlNy3SdhlLltkSnmTmYjPNHjssWCkMH4hM5ViJiGQN804fLAAT9CJ0eguM62xfA7hViCrciqP&X-Amz-Signature=5b3d0f582fa38cf38cc4650878e812a5c4f4f3b31fd0c49ec1990e3ede34848e&X-Amz-SignedHeaders=host&x-id=GetObject)
