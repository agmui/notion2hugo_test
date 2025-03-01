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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U43LWTW2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T004023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIDc7K7Hq3KqgylvwpkUWKaWJwOJZwLB%2FYnmt1BojxUKUAiEAz0OW%2BBsbiACaOE9tgpIrmCEQyfbZsOX3xhGQ7cq1Y%2FYqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQANkxryGozUt%2B5tircAwQMEfWhqn%2BQbkuZcawPA3Apc20q8klV7eK903omP6gOJRi7X6P6dJ7Tz5r6K1qVZ3RANAzEZdaHhTk8BDlFf271Wx3XdOUaBrhRqf36qLVXOzk9kve8f3AXd%2FYkVVDlZasAHIp5zZ%2FfnHQAOjBZwzOXeMTCdpFlI1enlVtcauwFuvKNfiPUXA0g4AFlGprCxLlNkxMIzXnMpYay1fskB4wo5oCcoqnA%2Fpn2oMveeSq9sc%2BleHFumKiby9hPLEiC3TZnJ1Y6LgFDgnA2pdYsVBiXv2NUoqaMlMWQAiPPh4R7ylvMU87Ihi%2BHKM2nal1MwOD8V1TgYi0%2FPWkOktbnIOTccL8JnE8f2Ae8H8haKCagA%2FlZkCElJ4KJguctSoGGTXNxTMJxK0pwGEUhbakTs1fnWqRKrxNvhFgCZgMaXJb9S%2BqFCe7Xot1hSjYmm2ffw5D80AuQMoAVNSg1xksz8NnJPmG6Rb7rnPJdF7xHNs3Q7eV1AMKyOQM%2FEAQ8aiOKUgEI84DKg8HRHZcnDe2lhV8MCw05upFQGzKLnVAL88%2BMaZke4UWB22kFyR73BC%2F3CO7HhBFNqIGewTBCKrZ4A3XKDoJaIQO7SCv4WRHqMP21OdnMppLiXIRBaLr6MJ2Fib4GOqUBb%2Fngdndbm964%2FK3wOTvgfEJls5ethdz1rlksfliD1EAs7KgXMAso1gqx0L67FpzlfsbcVYLwnDvlmSow9LpmmgAAhJR5sYZvT6fxClsO1S5EOA0jF4b7eRJ%2BPq82LvMyiwqWgwpSxI4DJHDenFy173L9For2amc5tqNH9SwWCHa7COPOBhrFPzU55REO8ulogKEQDVM8%2Bio1wOpw9gnoNW1tQBeN&X-Amz-Signature=f246de00951846e6fc7c5e01289b2e2ec1d0c403a933fbbfd93541d6a90df603&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U43LWTW2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T004023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIDc7K7Hq3KqgylvwpkUWKaWJwOJZwLB%2FYnmt1BojxUKUAiEAz0OW%2BBsbiACaOE9tgpIrmCEQyfbZsOX3xhGQ7cq1Y%2FYqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQANkxryGozUt%2B5tircAwQMEfWhqn%2BQbkuZcawPA3Apc20q8klV7eK903omP6gOJRi7X6P6dJ7Tz5r6K1qVZ3RANAzEZdaHhTk8BDlFf271Wx3XdOUaBrhRqf36qLVXOzk9kve8f3AXd%2FYkVVDlZasAHIp5zZ%2FfnHQAOjBZwzOXeMTCdpFlI1enlVtcauwFuvKNfiPUXA0g4AFlGprCxLlNkxMIzXnMpYay1fskB4wo5oCcoqnA%2Fpn2oMveeSq9sc%2BleHFumKiby9hPLEiC3TZnJ1Y6LgFDgnA2pdYsVBiXv2NUoqaMlMWQAiPPh4R7ylvMU87Ihi%2BHKM2nal1MwOD8V1TgYi0%2FPWkOktbnIOTccL8JnE8f2Ae8H8haKCagA%2FlZkCElJ4KJguctSoGGTXNxTMJxK0pwGEUhbakTs1fnWqRKrxNvhFgCZgMaXJb9S%2BqFCe7Xot1hSjYmm2ffw5D80AuQMoAVNSg1xksz8NnJPmG6Rb7rnPJdF7xHNs3Q7eV1AMKyOQM%2FEAQ8aiOKUgEI84DKg8HRHZcnDe2lhV8MCw05upFQGzKLnVAL88%2BMaZke4UWB22kFyR73BC%2F3CO7HhBFNqIGewTBCKrZ4A3XKDoJaIQO7SCv4WRHqMP21OdnMppLiXIRBaLr6MJ2Fib4GOqUBb%2Fngdndbm964%2FK3wOTvgfEJls5ethdz1rlksfliD1EAs7KgXMAso1gqx0L67FpzlfsbcVYLwnDvlmSow9LpmmgAAhJR5sYZvT6fxClsO1S5EOA0jF4b7eRJ%2BPq82LvMyiwqWgwpSxI4DJHDenFy173L9For2amc5tqNH9SwWCHa7COPOBhrFPzU55REO8ulogKEQDVM8%2Bio1wOpw9gnoNW1tQBeN&X-Amz-Signature=d95ce0fdc7f0b735b421b46b54adaa890406d122dd8134bb1a0621f54856905c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U43LWTW2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T004023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIDc7K7Hq3KqgylvwpkUWKaWJwOJZwLB%2FYnmt1BojxUKUAiEAz0OW%2BBsbiACaOE9tgpIrmCEQyfbZsOX3xhGQ7cq1Y%2FYqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQANkxryGozUt%2B5tircAwQMEfWhqn%2BQbkuZcawPA3Apc20q8klV7eK903omP6gOJRi7X6P6dJ7Tz5r6K1qVZ3RANAzEZdaHhTk8BDlFf271Wx3XdOUaBrhRqf36qLVXOzk9kve8f3AXd%2FYkVVDlZasAHIp5zZ%2FfnHQAOjBZwzOXeMTCdpFlI1enlVtcauwFuvKNfiPUXA0g4AFlGprCxLlNkxMIzXnMpYay1fskB4wo5oCcoqnA%2Fpn2oMveeSq9sc%2BleHFumKiby9hPLEiC3TZnJ1Y6LgFDgnA2pdYsVBiXv2NUoqaMlMWQAiPPh4R7ylvMU87Ihi%2BHKM2nal1MwOD8V1TgYi0%2FPWkOktbnIOTccL8JnE8f2Ae8H8haKCagA%2FlZkCElJ4KJguctSoGGTXNxTMJxK0pwGEUhbakTs1fnWqRKrxNvhFgCZgMaXJb9S%2BqFCe7Xot1hSjYmm2ffw5D80AuQMoAVNSg1xksz8NnJPmG6Rb7rnPJdF7xHNs3Q7eV1AMKyOQM%2FEAQ8aiOKUgEI84DKg8HRHZcnDe2lhV8MCw05upFQGzKLnVAL88%2BMaZke4UWB22kFyR73BC%2F3CO7HhBFNqIGewTBCKrZ4A3XKDoJaIQO7SCv4WRHqMP21OdnMppLiXIRBaLr6MJ2Fib4GOqUBb%2Fngdndbm964%2FK3wOTvgfEJls5ethdz1rlksfliD1EAs7KgXMAso1gqx0L67FpzlfsbcVYLwnDvlmSow9LpmmgAAhJR5sYZvT6fxClsO1S5EOA0jF4b7eRJ%2BPq82LvMyiwqWgwpSxI4DJHDenFy173L9For2amc5tqNH9SwWCHa7COPOBhrFPzU55REO8ulogKEQDVM8%2Bio1wOpw9gnoNW1tQBeN&X-Amz-Signature=e4c20af3ddede199233c6f365371ae08cf67ca057072357e4d28d79437d83afa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U43LWTW2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T004023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIDc7K7Hq3KqgylvwpkUWKaWJwOJZwLB%2FYnmt1BojxUKUAiEAz0OW%2BBsbiACaOE9tgpIrmCEQyfbZsOX3xhGQ7cq1Y%2FYqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQANkxryGozUt%2B5tircAwQMEfWhqn%2BQbkuZcawPA3Apc20q8klV7eK903omP6gOJRi7X6P6dJ7Tz5r6K1qVZ3RANAzEZdaHhTk8BDlFf271Wx3XdOUaBrhRqf36qLVXOzk9kve8f3AXd%2FYkVVDlZasAHIp5zZ%2FfnHQAOjBZwzOXeMTCdpFlI1enlVtcauwFuvKNfiPUXA0g4AFlGprCxLlNkxMIzXnMpYay1fskB4wo5oCcoqnA%2Fpn2oMveeSq9sc%2BleHFumKiby9hPLEiC3TZnJ1Y6LgFDgnA2pdYsVBiXv2NUoqaMlMWQAiPPh4R7ylvMU87Ihi%2BHKM2nal1MwOD8V1TgYi0%2FPWkOktbnIOTccL8JnE8f2Ae8H8haKCagA%2FlZkCElJ4KJguctSoGGTXNxTMJxK0pwGEUhbakTs1fnWqRKrxNvhFgCZgMaXJb9S%2BqFCe7Xot1hSjYmm2ffw5D80AuQMoAVNSg1xksz8NnJPmG6Rb7rnPJdF7xHNs3Q7eV1AMKyOQM%2FEAQ8aiOKUgEI84DKg8HRHZcnDe2lhV8MCw05upFQGzKLnVAL88%2BMaZke4UWB22kFyR73BC%2F3CO7HhBFNqIGewTBCKrZ4A3XKDoJaIQO7SCv4WRHqMP21OdnMppLiXIRBaLr6MJ2Fib4GOqUBb%2Fngdndbm964%2FK3wOTvgfEJls5ethdz1rlksfliD1EAs7KgXMAso1gqx0L67FpzlfsbcVYLwnDvlmSow9LpmmgAAhJR5sYZvT6fxClsO1S5EOA0jF4b7eRJ%2BPq82LvMyiwqWgwpSxI4DJHDenFy173L9For2amc5tqNH9SwWCHa7COPOBhrFPzU55REO8ulogKEQDVM8%2Bio1wOpw9gnoNW1tQBeN&X-Amz-Signature=f617547b2b28b783aac46f52380b8709a16d02c459a6b0e5197f8663a3f6e33b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U43LWTW2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T004023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIDc7K7Hq3KqgylvwpkUWKaWJwOJZwLB%2FYnmt1BojxUKUAiEAz0OW%2BBsbiACaOE9tgpIrmCEQyfbZsOX3xhGQ7cq1Y%2FYqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQANkxryGozUt%2B5tircAwQMEfWhqn%2BQbkuZcawPA3Apc20q8klV7eK903omP6gOJRi7X6P6dJ7Tz5r6K1qVZ3RANAzEZdaHhTk8BDlFf271Wx3XdOUaBrhRqf36qLVXOzk9kve8f3AXd%2FYkVVDlZasAHIp5zZ%2FfnHQAOjBZwzOXeMTCdpFlI1enlVtcauwFuvKNfiPUXA0g4AFlGprCxLlNkxMIzXnMpYay1fskB4wo5oCcoqnA%2Fpn2oMveeSq9sc%2BleHFumKiby9hPLEiC3TZnJ1Y6LgFDgnA2pdYsVBiXv2NUoqaMlMWQAiPPh4R7ylvMU87Ihi%2BHKM2nal1MwOD8V1TgYi0%2FPWkOktbnIOTccL8JnE8f2Ae8H8haKCagA%2FlZkCElJ4KJguctSoGGTXNxTMJxK0pwGEUhbakTs1fnWqRKrxNvhFgCZgMaXJb9S%2BqFCe7Xot1hSjYmm2ffw5D80AuQMoAVNSg1xksz8NnJPmG6Rb7rnPJdF7xHNs3Q7eV1AMKyOQM%2FEAQ8aiOKUgEI84DKg8HRHZcnDe2lhV8MCw05upFQGzKLnVAL88%2BMaZke4UWB22kFyR73BC%2F3CO7HhBFNqIGewTBCKrZ4A3XKDoJaIQO7SCv4WRHqMP21OdnMppLiXIRBaLr6MJ2Fib4GOqUBb%2Fngdndbm964%2FK3wOTvgfEJls5ethdz1rlksfliD1EAs7KgXMAso1gqx0L67FpzlfsbcVYLwnDvlmSow9LpmmgAAhJR5sYZvT6fxClsO1S5EOA0jF4b7eRJ%2BPq82LvMyiwqWgwpSxI4DJHDenFy173L9For2amc5tqNH9SwWCHa7COPOBhrFPzU55REO8ulogKEQDVM8%2Bio1wOpw9gnoNW1tQBeN&X-Amz-Signature=0c490ce06778d1d001700965e930f1bb9003bd8b84f8bf541fb31ba8e6f328be&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U43LWTW2%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T004023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIDc7K7Hq3KqgylvwpkUWKaWJwOJZwLB%2FYnmt1BojxUKUAiEAz0OW%2BBsbiACaOE9tgpIrmCEQyfbZsOX3xhGQ7cq1Y%2FYqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQANkxryGozUt%2B5tircAwQMEfWhqn%2BQbkuZcawPA3Apc20q8klV7eK903omP6gOJRi7X6P6dJ7Tz5r6K1qVZ3RANAzEZdaHhTk8BDlFf271Wx3XdOUaBrhRqf36qLVXOzk9kve8f3AXd%2FYkVVDlZasAHIp5zZ%2FfnHQAOjBZwzOXeMTCdpFlI1enlVtcauwFuvKNfiPUXA0g4AFlGprCxLlNkxMIzXnMpYay1fskB4wo5oCcoqnA%2Fpn2oMveeSq9sc%2BleHFumKiby9hPLEiC3TZnJ1Y6LgFDgnA2pdYsVBiXv2NUoqaMlMWQAiPPh4R7ylvMU87Ihi%2BHKM2nal1MwOD8V1TgYi0%2FPWkOktbnIOTccL8JnE8f2Ae8H8haKCagA%2FlZkCElJ4KJguctSoGGTXNxTMJxK0pwGEUhbakTs1fnWqRKrxNvhFgCZgMaXJb9S%2BqFCe7Xot1hSjYmm2ffw5D80AuQMoAVNSg1xksz8NnJPmG6Rb7rnPJdF7xHNs3Q7eV1AMKyOQM%2FEAQ8aiOKUgEI84DKg8HRHZcnDe2lhV8MCw05upFQGzKLnVAL88%2BMaZke4UWB22kFyR73BC%2F3CO7HhBFNqIGewTBCKrZ4A3XKDoJaIQO7SCv4WRHqMP21OdnMppLiXIRBaLr6MJ2Fib4GOqUBb%2Fngdndbm964%2FK3wOTvgfEJls5ethdz1rlksfliD1EAs7KgXMAso1gqx0L67FpzlfsbcVYLwnDvlmSow9LpmmgAAhJR5sYZvT6fxClsO1S5EOA0jF4b7eRJ%2BPq82LvMyiwqWgwpSxI4DJHDenFy173L9For2amc5tqNH9SwWCHa7COPOBhrFPzU55REO8ulogKEQDVM8%2Bio1wOpw9gnoNW1tQBeN&X-Amz-Signature=9b6a4a06baebb35d44721de0ece43d60ccb347ef40389e19c4a0d851e2a0c0e8&X-Amz-SignedHeaders=host&x-id=GetObject)
