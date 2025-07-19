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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q7T6CHX%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMISG2zr0CeeDf%2B7Lrwn3WaVnqHuiQz8U4toEj%2BEWjWAiB3is9JsEXL7Nio%2BbnSzv3ihGxWqcQOpbUTcntUtz6zbyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1iwuD4fltW9tK%2Bv%2FKtwDWvVzW7M%2FyoQjoLWQUvCWjPsNTnw0jdvF00ojmCOX3WqaBowHRrPZm%2FkgvnjqrNKSRY%2B%2BB1wyAPTeUo2M%2BjEMQDNXHCVyNqT4s7n3lDKQ24Vhkx%2Bsf9iSRSaoPNegPPUCMwW8K4yYDz6QHrfEH%2F8q6XyOwZ5RTK4hvWVQN5eb7iAW%2Bu7TQmI9JnI2Rj7k2dEnDLqwKriPw1u417b4ZiqP0w0Td2WFiW3TPp5Q4LI28Mprol7CNYZS6h7kIY1V5JI91dEWY%2BdEE2FlJF6IutvLd9gWtXjsL7ZMqMr2fjr7WWz8R0A2izcY25QoqBKp5MCmFov5A0WScR1Hr7tw37NxRVPMQsrS%2FcMlydGwV9LulYz9aGY0RmL6Wr2gZ5e1UYV9YvFkeWZ9o5vpqkJEVntflCDb3Ay1eU1ckX5RxUiCj%2F6qyEjqVAuLKlNCQ4Hu6lioBlvnrHq0GqUtCoIEW1iEvYDTVDq3Tx38nMV2C3asXcBR8xkO9dbXFAmGVx52QP32U%2BaYH47ckfEsQuEPogKyldJXj%2FniRzd1RQ4LdqNjEQe0FozhdqmjlbmDzZ%2FZaq8UacNBGYvLhdoty6SCuRXlpMcxfX%2F5fITm279WwHmYWbTHd740MgrRzn5hOmEwkMbswwY6pgGLF1qktY%2B%2B5RP2RSVe1NHPhfeh6oUIqe1fmpopYpFNQpIEg6LRj964NjVxn9YXbhCR3vrmKUx8BgPOAnwwmhDoMCj1SO%2FwEfikvZlBcxS%2BE38%2Bv9k28tUR8vXwikt8BXOOoBE0%2B2P17V0eamxzk2OxJjLzA40pmrfOQSuepgLJfKXao2bwv%2F16y1oxapzp9kVWkD8s3AGrjzK2%2Bzf7hxkmcX7yRH%2BD&X-Amz-Signature=8464dcb12ba90cb5df06af3e5ffbf4218586068a29ff312f29d2aeff28d72def&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q7T6CHX%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMISG2zr0CeeDf%2B7Lrwn3WaVnqHuiQz8U4toEj%2BEWjWAiB3is9JsEXL7Nio%2BbnSzv3ihGxWqcQOpbUTcntUtz6zbyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1iwuD4fltW9tK%2Bv%2FKtwDWvVzW7M%2FyoQjoLWQUvCWjPsNTnw0jdvF00ojmCOX3WqaBowHRrPZm%2FkgvnjqrNKSRY%2B%2BB1wyAPTeUo2M%2BjEMQDNXHCVyNqT4s7n3lDKQ24Vhkx%2Bsf9iSRSaoPNegPPUCMwW8K4yYDz6QHrfEH%2F8q6XyOwZ5RTK4hvWVQN5eb7iAW%2Bu7TQmI9JnI2Rj7k2dEnDLqwKriPw1u417b4ZiqP0w0Td2WFiW3TPp5Q4LI28Mprol7CNYZS6h7kIY1V5JI91dEWY%2BdEE2FlJF6IutvLd9gWtXjsL7ZMqMr2fjr7WWz8R0A2izcY25QoqBKp5MCmFov5A0WScR1Hr7tw37NxRVPMQsrS%2FcMlydGwV9LulYz9aGY0RmL6Wr2gZ5e1UYV9YvFkeWZ9o5vpqkJEVntflCDb3Ay1eU1ckX5RxUiCj%2F6qyEjqVAuLKlNCQ4Hu6lioBlvnrHq0GqUtCoIEW1iEvYDTVDq3Tx38nMV2C3asXcBR8xkO9dbXFAmGVx52QP32U%2BaYH47ckfEsQuEPogKyldJXj%2FniRzd1RQ4LdqNjEQe0FozhdqmjlbmDzZ%2FZaq8UacNBGYvLhdoty6SCuRXlpMcxfX%2F5fITm279WwHmYWbTHd740MgrRzn5hOmEwkMbswwY6pgGLF1qktY%2B%2B5RP2RSVe1NHPhfeh6oUIqe1fmpopYpFNQpIEg6LRj964NjVxn9YXbhCR3vrmKUx8BgPOAnwwmhDoMCj1SO%2FwEfikvZlBcxS%2BE38%2Bv9k28tUR8vXwikt8BXOOoBE0%2B2P17V0eamxzk2OxJjLzA40pmrfOQSuepgLJfKXao2bwv%2F16y1oxapzp9kVWkD8s3AGrjzK2%2Bzf7hxkmcX7yRH%2BD&X-Amz-Signature=4c94cf51b34e903e78da01a72e0a5ce5f6c9704e90306ee3b4421d5d9f82cdd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q7T6CHX%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMISG2zr0CeeDf%2B7Lrwn3WaVnqHuiQz8U4toEj%2BEWjWAiB3is9JsEXL7Nio%2BbnSzv3ihGxWqcQOpbUTcntUtz6zbyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1iwuD4fltW9tK%2Bv%2FKtwDWvVzW7M%2FyoQjoLWQUvCWjPsNTnw0jdvF00ojmCOX3WqaBowHRrPZm%2FkgvnjqrNKSRY%2B%2BB1wyAPTeUo2M%2BjEMQDNXHCVyNqT4s7n3lDKQ24Vhkx%2Bsf9iSRSaoPNegPPUCMwW8K4yYDz6QHrfEH%2F8q6XyOwZ5RTK4hvWVQN5eb7iAW%2Bu7TQmI9JnI2Rj7k2dEnDLqwKriPw1u417b4ZiqP0w0Td2WFiW3TPp5Q4LI28Mprol7CNYZS6h7kIY1V5JI91dEWY%2BdEE2FlJF6IutvLd9gWtXjsL7ZMqMr2fjr7WWz8R0A2izcY25QoqBKp5MCmFov5A0WScR1Hr7tw37NxRVPMQsrS%2FcMlydGwV9LulYz9aGY0RmL6Wr2gZ5e1UYV9YvFkeWZ9o5vpqkJEVntflCDb3Ay1eU1ckX5RxUiCj%2F6qyEjqVAuLKlNCQ4Hu6lioBlvnrHq0GqUtCoIEW1iEvYDTVDq3Tx38nMV2C3asXcBR8xkO9dbXFAmGVx52QP32U%2BaYH47ckfEsQuEPogKyldJXj%2FniRzd1RQ4LdqNjEQe0FozhdqmjlbmDzZ%2FZaq8UacNBGYvLhdoty6SCuRXlpMcxfX%2F5fITm279WwHmYWbTHd740MgrRzn5hOmEwkMbswwY6pgGLF1qktY%2B%2B5RP2RSVe1NHPhfeh6oUIqe1fmpopYpFNQpIEg6LRj964NjVxn9YXbhCR3vrmKUx8BgPOAnwwmhDoMCj1SO%2FwEfikvZlBcxS%2BE38%2Bv9k28tUR8vXwikt8BXOOoBE0%2B2P17V0eamxzk2OxJjLzA40pmrfOQSuepgLJfKXao2bwv%2F16y1oxapzp9kVWkD8s3AGrjzK2%2Bzf7hxkmcX7yRH%2BD&X-Amz-Signature=b7ccceb77f0d35d0f746c98e909b03d0ce012526dc801a3d40563643e49e0c13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q7T6CHX%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMISG2zr0CeeDf%2B7Lrwn3WaVnqHuiQz8U4toEj%2BEWjWAiB3is9JsEXL7Nio%2BbnSzv3ihGxWqcQOpbUTcntUtz6zbyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1iwuD4fltW9tK%2Bv%2FKtwDWvVzW7M%2FyoQjoLWQUvCWjPsNTnw0jdvF00ojmCOX3WqaBowHRrPZm%2FkgvnjqrNKSRY%2B%2BB1wyAPTeUo2M%2BjEMQDNXHCVyNqT4s7n3lDKQ24Vhkx%2Bsf9iSRSaoPNegPPUCMwW8K4yYDz6QHrfEH%2F8q6XyOwZ5RTK4hvWVQN5eb7iAW%2Bu7TQmI9JnI2Rj7k2dEnDLqwKriPw1u417b4ZiqP0w0Td2WFiW3TPp5Q4LI28Mprol7CNYZS6h7kIY1V5JI91dEWY%2BdEE2FlJF6IutvLd9gWtXjsL7ZMqMr2fjr7WWz8R0A2izcY25QoqBKp5MCmFov5A0WScR1Hr7tw37NxRVPMQsrS%2FcMlydGwV9LulYz9aGY0RmL6Wr2gZ5e1UYV9YvFkeWZ9o5vpqkJEVntflCDb3Ay1eU1ckX5RxUiCj%2F6qyEjqVAuLKlNCQ4Hu6lioBlvnrHq0GqUtCoIEW1iEvYDTVDq3Tx38nMV2C3asXcBR8xkO9dbXFAmGVx52QP32U%2BaYH47ckfEsQuEPogKyldJXj%2FniRzd1RQ4LdqNjEQe0FozhdqmjlbmDzZ%2FZaq8UacNBGYvLhdoty6SCuRXlpMcxfX%2F5fITm279WwHmYWbTHd740MgrRzn5hOmEwkMbswwY6pgGLF1qktY%2B%2B5RP2RSVe1NHPhfeh6oUIqe1fmpopYpFNQpIEg6LRj964NjVxn9YXbhCR3vrmKUx8BgPOAnwwmhDoMCj1SO%2FwEfikvZlBcxS%2BE38%2Bv9k28tUR8vXwikt8BXOOoBE0%2B2P17V0eamxzk2OxJjLzA40pmrfOQSuepgLJfKXao2bwv%2F16y1oxapzp9kVWkD8s3AGrjzK2%2Bzf7hxkmcX7yRH%2BD&X-Amz-Signature=cd763a17decc2bff1143a36c9179821c34306dae35b1d3fc280ed0fa820c5fe3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q7T6CHX%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMISG2zr0CeeDf%2B7Lrwn3WaVnqHuiQz8U4toEj%2BEWjWAiB3is9JsEXL7Nio%2BbnSzv3ihGxWqcQOpbUTcntUtz6zbyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1iwuD4fltW9tK%2Bv%2FKtwDWvVzW7M%2FyoQjoLWQUvCWjPsNTnw0jdvF00ojmCOX3WqaBowHRrPZm%2FkgvnjqrNKSRY%2B%2BB1wyAPTeUo2M%2BjEMQDNXHCVyNqT4s7n3lDKQ24Vhkx%2Bsf9iSRSaoPNegPPUCMwW8K4yYDz6QHrfEH%2F8q6XyOwZ5RTK4hvWVQN5eb7iAW%2Bu7TQmI9JnI2Rj7k2dEnDLqwKriPw1u417b4ZiqP0w0Td2WFiW3TPp5Q4LI28Mprol7CNYZS6h7kIY1V5JI91dEWY%2BdEE2FlJF6IutvLd9gWtXjsL7ZMqMr2fjr7WWz8R0A2izcY25QoqBKp5MCmFov5A0WScR1Hr7tw37NxRVPMQsrS%2FcMlydGwV9LulYz9aGY0RmL6Wr2gZ5e1UYV9YvFkeWZ9o5vpqkJEVntflCDb3Ay1eU1ckX5RxUiCj%2F6qyEjqVAuLKlNCQ4Hu6lioBlvnrHq0GqUtCoIEW1iEvYDTVDq3Tx38nMV2C3asXcBR8xkO9dbXFAmGVx52QP32U%2BaYH47ckfEsQuEPogKyldJXj%2FniRzd1RQ4LdqNjEQe0FozhdqmjlbmDzZ%2FZaq8UacNBGYvLhdoty6SCuRXlpMcxfX%2F5fITm279WwHmYWbTHd740MgrRzn5hOmEwkMbswwY6pgGLF1qktY%2B%2B5RP2RSVe1NHPhfeh6oUIqe1fmpopYpFNQpIEg6LRj964NjVxn9YXbhCR3vrmKUx8BgPOAnwwmhDoMCj1SO%2FwEfikvZlBcxS%2BE38%2Bv9k28tUR8vXwikt8BXOOoBE0%2B2P17V0eamxzk2OxJjLzA40pmrfOQSuepgLJfKXao2bwv%2F16y1oxapzp9kVWkD8s3AGrjzK2%2Bzf7hxkmcX7yRH%2BD&X-Amz-Signature=6b85089dd5d8e54860826bedeba1418075818cdcf586efee6fc0d1068c417bd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q7T6CHX%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMISG2zr0CeeDf%2B7Lrwn3WaVnqHuiQz8U4toEj%2BEWjWAiB3is9JsEXL7Nio%2BbnSzv3ihGxWqcQOpbUTcntUtz6zbyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1iwuD4fltW9tK%2Bv%2FKtwDWvVzW7M%2FyoQjoLWQUvCWjPsNTnw0jdvF00ojmCOX3WqaBowHRrPZm%2FkgvnjqrNKSRY%2B%2BB1wyAPTeUo2M%2BjEMQDNXHCVyNqT4s7n3lDKQ24Vhkx%2Bsf9iSRSaoPNegPPUCMwW8K4yYDz6QHrfEH%2F8q6XyOwZ5RTK4hvWVQN5eb7iAW%2Bu7TQmI9JnI2Rj7k2dEnDLqwKriPw1u417b4ZiqP0w0Td2WFiW3TPp5Q4LI28Mprol7CNYZS6h7kIY1V5JI91dEWY%2BdEE2FlJF6IutvLd9gWtXjsL7ZMqMr2fjr7WWz8R0A2izcY25QoqBKp5MCmFov5A0WScR1Hr7tw37NxRVPMQsrS%2FcMlydGwV9LulYz9aGY0RmL6Wr2gZ5e1UYV9YvFkeWZ9o5vpqkJEVntflCDb3Ay1eU1ckX5RxUiCj%2F6qyEjqVAuLKlNCQ4Hu6lioBlvnrHq0GqUtCoIEW1iEvYDTVDq3Tx38nMV2C3asXcBR8xkO9dbXFAmGVx52QP32U%2BaYH47ckfEsQuEPogKyldJXj%2FniRzd1RQ4LdqNjEQe0FozhdqmjlbmDzZ%2FZaq8UacNBGYvLhdoty6SCuRXlpMcxfX%2F5fITm279WwHmYWbTHd740MgrRzn5hOmEwkMbswwY6pgGLF1qktY%2B%2B5RP2RSVe1NHPhfeh6oUIqe1fmpopYpFNQpIEg6LRj964NjVxn9YXbhCR3vrmKUx8BgPOAnwwmhDoMCj1SO%2FwEfikvZlBcxS%2BE38%2Bv9k28tUR8vXwikt8BXOOoBE0%2B2P17V0eamxzk2OxJjLzA40pmrfOQSuepgLJfKXao2bwv%2F16y1oxapzp9kVWkD8s3AGrjzK2%2Bzf7hxkmcX7yRH%2BD&X-Amz-Signature=973bb489a1e3bb347479f857e956ee18b69c207f81af5f806cd8dad5b073df29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
