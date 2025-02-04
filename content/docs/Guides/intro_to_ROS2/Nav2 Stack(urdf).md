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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AWBJ632%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCpWZiCSH1FOvpnBeUGOZT9c0zu4qFS3zNEaUnnoJbH0gIgZRyTsj8BYXcjAwWfcbIAasFbKYDyEdS%2B%2FRPoSl3NXKMq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDGuuQPhXlE1B2OcG5ircA%2BcBugcjgqPbrOQpPynrTGT8n0M9bOnU2r0oTMMfrQ1gLcUAMf6fEbk%2BgNYJYExNzeYy%2FWAQrw4ANO2avNwum44sBP5jjc43hdHS2KmWX6aHhY3fW9Kjh9jFE96x61KAc3m58u%2FzQPOhOJXft7KEdEakSocVCxBmlI7zmfEH6kUVOW4jF%2Fed7whIpUdz%2FUo7MiUlcNIVaYEg6J4Yuz76JP7WtxtpfMkPJJ7Y5d1KVMYLUhAn2OFwf%2B4uLDNA34%2FC%2BtzVHUl80X6h6TLM8E70PcElaw1hZfMt0OCjxc1WJe5Cf5e26muUzfgBkwQblb67g%2BlEgGm9fKz46KgRkTM8gALdbYfgcRISw6brNGf8NhhVtFf3iYeBEjm%2Bs4Simg8lA%2BPlMOjALDZRI17OdoILigZV6vb3YDaAMUCjO8h99Bhr%2BAfBd3f2oA7U%2BnrZF6hg8q8Fs6FFUfTOnIHUn0S814usxalTCSv7IZBPa%2BovM7%2FsdslAQTXWwEBGjz3fKGJL9lSH4DSIv40hiA1aHS2aR6v9fh%2FwqibtJzqSuWArsSO1E5C%2FsIJJoXyAYX%2FNDPAB3Qz9hjAzZ%2FSlt0j2t2%2FIZrW4M9EX42Ld4N7EJACf5XmcIhwSIfzIet2boE0gMPC%2Fhr0GOqUB%2BGChARS%2FSVJ0gSSAbJnN4j25cmfy9TRPpmBeXKCKEXRQwf7qSetQBRZ7Un9YIBg5sLRjAQlsv3qmQJn2TJFy7U7GtAxq0FgL1xQmHXVtPZVMOP7BdlwW3RJaJxKbey1JJGHtC2d70U5TIE%2FtgLxrUF6WvbI3i0Lf3YdpC%2BUDy%2BaO8X0CL%2FrpCqi2MywByd57KZPZg2abFaNh0V7T2UqC2KM%2FFQtl&X-Amz-Signature=0affdbdb389a65d6eac306a46c46a2723a40742d0838b95617c555e9ed10fb5e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AWBJ632%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCpWZiCSH1FOvpnBeUGOZT9c0zu4qFS3zNEaUnnoJbH0gIgZRyTsj8BYXcjAwWfcbIAasFbKYDyEdS%2B%2FRPoSl3NXKMq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDGuuQPhXlE1B2OcG5ircA%2BcBugcjgqPbrOQpPynrTGT8n0M9bOnU2r0oTMMfrQ1gLcUAMf6fEbk%2BgNYJYExNzeYy%2FWAQrw4ANO2avNwum44sBP5jjc43hdHS2KmWX6aHhY3fW9Kjh9jFE96x61KAc3m58u%2FzQPOhOJXft7KEdEakSocVCxBmlI7zmfEH6kUVOW4jF%2Fed7whIpUdz%2FUo7MiUlcNIVaYEg6J4Yuz76JP7WtxtpfMkPJJ7Y5d1KVMYLUhAn2OFwf%2B4uLDNA34%2FC%2BtzVHUl80X6h6TLM8E70PcElaw1hZfMt0OCjxc1WJe5Cf5e26muUzfgBkwQblb67g%2BlEgGm9fKz46KgRkTM8gALdbYfgcRISw6brNGf8NhhVtFf3iYeBEjm%2Bs4Simg8lA%2BPlMOjALDZRI17OdoILigZV6vb3YDaAMUCjO8h99Bhr%2BAfBd3f2oA7U%2BnrZF6hg8q8Fs6FFUfTOnIHUn0S814usxalTCSv7IZBPa%2BovM7%2FsdslAQTXWwEBGjz3fKGJL9lSH4DSIv40hiA1aHS2aR6v9fh%2FwqibtJzqSuWArsSO1E5C%2FsIJJoXyAYX%2FNDPAB3Qz9hjAzZ%2FSlt0j2t2%2FIZrW4M9EX42Ld4N7EJACf5XmcIhwSIfzIet2boE0gMPC%2Fhr0GOqUB%2BGChARS%2FSVJ0gSSAbJnN4j25cmfy9TRPpmBeXKCKEXRQwf7qSetQBRZ7Un9YIBg5sLRjAQlsv3qmQJn2TJFy7U7GtAxq0FgL1xQmHXVtPZVMOP7BdlwW3RJaJxKbey1JJGHtC2d70U5TIE%2FtgLxrUF6WvbI3i0Lf3YdpC%2BUDy%2BaO8X0CL%2FrpCqi2MywByd57KZPZg2abFaNh0V7T2UqC2KM%2FFQtl&X-Amz-Signature=0840f7e91c5cd9b2db7706c7af5285fd003f0e57225fa95a8c52e79876fc07dd&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AWBJ632%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCpWZiCSH1FOvpnBeUGOZT9c0zu4qFS3zNEaUnnoJbH0gIgZRyTsj8BYXcjAwWfcbIAasFbKYDyEdS%2B%2FRPoSl3NXKMq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDGuuQPhXlE1B2OcG5ircA%2BcBugcjgqPbrOQpPynrTGT8n0M9bOnU2r0oTMMfrQ1gLcUAMf6fEbk%2BgNYJYExNzeYy%2FWAQrw4ANO2avNwum44sBP5jjc43hdHS2KmWX6aHhY3fW9Kjh9jFE96x61KAc3m58u%2FzQPOhOJXft7KEdEakSocVCxBmlI7zmfEH6kUVOW4jF%2Fed7whIpUdz%2FUo7MiUlcNIVaYEg6J4Yuz76JP7WtxtpfMkPJJ7Y5d1KVMYLUhAn2OFwf%2B4uLDNA34%2FC%2BtzVHUl80X6h6TLM8E70PcElaw1hZfMt0OCjxc1WJe5Cf5e26muUzfgBkwQblb67g%2BlEgGm9fKz46KgRkTM8gALdbYfgcRISw6brNGf8NhhVtFf3iYeBEjm%2Bs4Simg8lA%2BPlMOjALDZRI17OdoILigZV6vb3YDaAMUCjO8h99Bhr%2BAfBd3f2oA7U%2BnrZF6hg8q8Fs6FFUfTOnIHUn0S814usxalTCSv7IZBPa%2BovM7%2FsdslAQTXWwEBGjz3fKGJL9lSH4DSIv40hiA1aHS2aR6v9fh%2FwqibtJzqSuWArsSO1E5C%2FsIJJoXyAYX%2FNDPAB3Qz9hjAzZ%2FSlt0j2t2%2FIZrW4M9EX42Ld4N7EJACf5XmcIhwSIfzIet2boE0gMPC%2Fhr0GOqUB%2BGChARS%2FSVJ0gSSAbJnN4j25cmfy9TRPpmBeXKCKEXRQwf7qSetQBRZ7Un9YIBg5sLRjAQlsv3qmQJn2TJFy7U7GtAxq0FgL1xQmHXVtPZVMOP7BdlwW3RJaJxKbey1JJGHtC2d70U5TIE%2FtgLxrUF6WvbI3i0Lf3YdpC%2BUDy%2BaO8X0CL%2FrpCqi2MywByd57KZPZg2abFaNh0V7T2UqC2KM%2FFQtl&X-Amz-Signature=7aefa90a41507fbf826d9345900582c886d833d68e2d0c0f373b68d20411875d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AWBJ632%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCpWZiCSH1FOvpnBeUGOZT9c0zu4qFS3zNEaUnnoJbH0gIgZRyTsj8BYXcjAwWfcbIAasFbKYDyEdS%2B%2FRPoSl3NXKMq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDGuuQPhXlE1B2OcG5ircA%2BcBugcjgqPbrOQpPynrTGT8n0M9bOnU2r0oTMMfrQ1gLcUAMf6fEbk%2BgNYJYExNzeYy%2FWAQrw4ANO2avNwum44sBP5jjc43hdHS2KmWX6aHhY3fW9Kjh9jFE96x61KAc3m58u%2FzQPOhOJXft7KEdEakSocVCxBmlI7zmfEH6kUVOW4jF%2Fed7whIpUdz%2FUo7MiUlcNIVaYEg6J4Yuz76JP7WtxtpfMkPJJ7Y5d1KVMYLUhAn2OFwf%2B4uLDNA34%2FC%2BtzVHUl80X6h6TLM8E70PcElaw1hZfMt0OCjxc1WJe5Cf5e26muUzfgBkwQblb67g%2BlEgGm9fKz46KgRkTM8gALdbYfgcRISw6brNGf8NhhVtFf3iYeBEjm%2Bs4Simg8lA%2BPlMOjALDZRI17OdoILigZV6vb3YDaAMUCjO8h99Bhr%2BAfBd3f2oA7U%2BnrZF6hg8q8Fs6FFUfTOnIHUn0S814usxalTCSv7IZBPa%2BovM7%2FsdslAQTXWwEBGjz3fKGJL9lSH4DSIv40hiA1aHS2aR6v9fh%2FwqibtJzqSuWArsSO1E5C%2FsIJJoXyAYX%2FNDPAB3Qz9hjAzZ%2FSlt0j2t2%2FIZrW4M9EX42Ld4N7EJACf5XmcIhwSIfzIet2boE0gMPC%2Fhr0GOqUB%2BGChARS%2FSVJ0gSSAbJnN4j25cmfy9TRPpmBeXKCKEXRQwf7qSetQBRZ7Un9YIBg5sLRjAQlsv3qmQJn2TJFy7U7GtAxq0FgL1xQmHXVtPZVMOP7BdlwW3RJaJxKbey1JJGHtC2d70U5TIE%2FtgLxrUF6WvbI3i0Lf3YdpC%2BUDy%2BaO8X0CL%2FrpCqi2MywByd57KZPZg2abFaNh0V7T2UqC2KM%2FFQtl&X-Amz-Signature=963c911e605d862230fae47d349f393ed295afea848a3caae5bd2ef4ea926392&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AWBJ632%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T050808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCpWZiCSH1FOvpnBeUGOZT9c0zu4qFS3zNEaUnnoJbH0gIgZRyTsj8BYXcjAwWfcbIAasFbKYDyEdS%2B%2FRPoSl3NXKMq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDGuuQPhXlE1B2OcG5ircA%2BcBugcjgqPbrOQpPynrTGT8n0M9bOnU2r0oTMMfrQ1gLcUAMf6fEbk%2BgNYJYExNzeYy%2FWAQrw4ANO2avNwum44sBP5jjc43hdHS2KmWX6aHhY3fW9Kjh9jFE96x61KAc3m58u%2FzQPOhOJXft7KEdEakSocVCxBmlI7zmfEH6kUVOW4jF%2Fed7whIpUdz%2FUo7MiUlcNIVaYEg6J4Yuz76JP7WtxtpfMkPJJ7Y5d1KVMYLUhAn2OFwf%2B4uLDNA34%2FC%2BtzVHUl80X6h6TLM8E70PcElaw1hZfMt0OCjxc1WJe5Cf5e26muUzfgBkwQblb67g%2BlEgGm9fKz46KgRkTM8gALdbYfgcRISw6brNGf8NhhVtFf3iYeBEjm%2Bs4Simg8lA%2BPlMOjALDZRI17OdoILigZV6vb3YDaAMUCjO8h99Bhr%2BAfBd3f2oA7U%2BnrZF6hg8q8Fs6FFUfTOnIHUn0S814usxalTCSv7IZBPa%2BovM7%2FsdslAQTXWwEBGjz3fKGJL9lSH4DSIv40hiA1aHS2aR6v9fh%2FwqibtJzqSuWArsSO1E5C%2FsIJJoXyAYX%2FNDPAB3Qz9hjAzZ%2FSlt0j2t2%2FIZrW4M9EX42Ld4N7EJACf5XmcIhwSIfzIet2boE0gMPC%2Fhr0GOqUB%2BGChARS%2FSVJ0gSSAbJnN4j25cmfy9TRPpmBeXKCKEXRQwf7qSetQBRZ7Un9YIBg5sLRjAQlsv3qmQJn2TJFy7U7GtAxq0FgL1xQmHXVtPZVMOP7BdlwW3RJaJxKbey1JJGHtC2d70U5TIE%2FtgLxrUF6WvbI3i0Lf3YdpC%2BUDy%2BaO8X0CL%2FrpCqi2MywByd57KZPZg2abFaNh0V7T2UqC2KM%2FFQtl&X-Amz-Signature=b910c7df72ccbb15338e58a2453f87d0072381b5f7d941ee0c946f1e7272bab6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AWBJ632%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T050807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCpWZiCSH1FOvpnBeUGOZT9c0zu4qFS3zNEaUnnoJbH0gIgZRyTsj8BYXcjAwWfcbIAasFbKYDyEdS%2B%2FRPoSl3NXKMq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDGuuQPhXlE1B2OcG5ircA%2BcBugcjgqPbrOQpPynrTGT8n0M9bOnU2r0oTMMfrQ1gLcUAMf6fEbk%2BgNYJYExNzeYy%2FWAQrw4ANO2avNwum44sBP5jjc43hdHS2KmWX6aHhY3fW9Kjh9jFE96x61KAc3m58u%2FzQPOhOJXft7KEdEakSocVCxBmlI7zmfEH6kUVOW4jF%2Fed7whIpUdz%2FUo7MiUlcNIVaYEg6J4Yuz76JP7WtxtpfMkPJJ7Y5d1KVMYLUhAn2OFwf%2B4uLDNA34%2FC%2BtzVHUl80X6h6TLM8E70PcElaw1hZfMt0OCjxc1WJe5Cf5e26muUzfgBkwQblb67g%2BlEgGm9fKz46KgRkTM8gALdbYfgcRISw6brNGf8NhhVtFf3iYeBEjm%2Bs4Simg8lA%2BPlMOjALDZRI17OdoILigZV6vb3YDaAMUCjO8h99Bhr%2BAfBd3f2oA7U%2BnrZF6hg8q8Fs6FFUfTOnIHUn0S814usxalTCSv7IZBPa%2BovM7%2FsdslAQTXWwEBGjz3fKGJL9lSH4DSIv40hiA1aHS2aR6v9fh%2FwqibtJzqSuWArsSO1E5C%2FsIJJoXyAYX%2FNDPAB3Qz9hjAzZ%2FSlt0j2t2%2FIZrW4M9EX42Ld4N7EJACf5XmcIhwSIfzIet2boE0gMPC%2Fhr0GOqUB%2BGChARS%2FSVJ0gSSAbJnN4j25cmfy9TRPpmBeXKCKEXRQwf7qSetQBRZ7Un9YIBg5sLRjAQlsv3qmQJn2TJFy7U7GtAxq0FgL1xQmHXVtPZVMOP7BdlwW3RJaJxKbey1JJGHtC2d70U5TIE%2FtgLxrUF6WvbI3i0Lf3YdpC%2BUDy%2BaO8X0CL%2FrpCqi2MywByd57KZPZg2abFaNh0V7T2UqC2KM%2FFQtl&X-Amz-Signature=3f71edaaa658c06c33e45ccb3735df62c71298ff71deacf7f9f5d21b416f00a5&X-Amz-SignedHeaders=host&x-id=GetObject)
