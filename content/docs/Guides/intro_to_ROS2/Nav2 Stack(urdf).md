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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655WJIF3U%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T150931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIA%2FVabuAkoT0uW1dQ%2BCHqU6AG%2Fvk%2F5UXP1ut0dfnhQl7AiEAlmJxV6P%2FkVLfMWUpqJH1%2F1EUkn0XVRKI2dN9RAGtIcwqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLXgvT2BICk2DCxTSircA%2FtFevvJu7iHpIZYNEgasT7YcX9ZRUrFAeQGYopRtoVCSLeIimLDOJmMzrvJf4KbYuniPHnGTJVk%2FOixeUBkWkS1uWrHbwmIJqg2%2F4jnCNl2JPGuKVcryhdtU0S%2FqLyldW7beGMBqMO6hyJvXfuB0O5q5sYIE%2BSvMomrkufwl0Vra%2F%2BfnrXoq7QL4cTlWQdzsWbq%2FHp8S9hi3oTdwuaMVu0mPPQvLiwxuKOQIDNITMDZOdsL8AMFiQSV1v0LqNMuQRTMM7uoq35Vw%2Fq%2FmjFmC0NzazgynO5w6Do%2BefEssl4vB%2FC6QQgbZTIfMtB5aEwoE2Z8ed2rKZ3qAN0qj3l3%2BjUE0fPDjA5kmtWAU7KSOzbEgbtCstnB2C0nJd6Yh6XBnEY4Q91pYH8%2F7iwFQ8GK0KQE3nRBAj9QjZ1%2Bs9UArOFceOWyWL7hrRZYvrN8gtnIQFEGhYXJsdBvVUSvEKeDedD9J6KUAvGKAN%2FHG0N3Jgu9fhzVzLsYUfn28VhfjjRvTUL0hC3QWfObV%2Fs0y%2FknwgYcvy14oYWdT51M%2BRlfAyfkml9dZGeTXDvw4qQhH9%2BfTeD676yOTV3F19ECc4w7EEiTcyC5HqC7Qp8rnpLlJWp8%2Fv0P3r95cba%2BWK%2BkMI%2BNwb4GOqUBmN6E0MAKgOqY33uPWFtAUbL7t66ojTTK5laZDi4xmU3bUqGFV3JPrDB%2BUJko1EAK53u1B0f60VhMKpBqxHHBDEqWHhYNh74pKv2sGm7NlVsrq4HODGGFx%2FdD6Y%2Fz76higbwUQ3ny49RC%2FxrXgnL9YkNs8RL5OnqY8n5hvIx7HRkr3pdYzMX1e4Zw9heFPGcpTNOXrLtR1dJyUD0iwK6N5G5xivJL&X-Amz-Signature=7a3d379e4ea65ec630bed41e4fd4f83bda4d78ecad3d7028c0172bc9cd9e5a60&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655WJIF3U%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T150931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIA%2FVabuAkoT0uW1dQ%2BCHqU6AG%2Fvk%2F5UXP1ut0dfnhQl7AiEAlmJxV6P%2FkVLfMWUpqJH1%2F1EUkn0XVRKI2dN9RAGtIcwqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLXgvT2BICk2DCxTSircA%2FtFevvJu7iHpIZYNEgasT7YcX9ZRUrFAeQGYopRtoVCSLeIimLDOJmMzrvJf4KbYuniPHnGTJVk%2FOixeUBkWkS1uWrHbwmIJqg2%2F4jnCNl2JPGuKVcryhdtU0S%2FqLyldW7beGMBqMO6hyJvXfuB0O5q5sYIE%2BSvMomrkufwl0Vra%2F%2BfnrXoq7QL4cTlWQdzsWbq%2FHp8S9hi3oTdwuaMVu0mPPQvLiwxuKOQIDNITMDZOdsL8AMFiQSV1v0LqNMuQRTMM7uoq35Vw%2Fq%2FmjFmC0NzazgynO5w6Do%2BefEssl4vB%2FC6QQgbZTIfMtB5aEwoE2Z8ed2rKZ3qAN0qj3l3%2BjUE0fPDjA5kmtWAU7KSOzbEgbtCstnB2C0nJd6Yh6XBnEY4Q91pYH8%2F7iwFQ8GK0KQE3nRBAj9QjZ1%2Bs9UArOFceOWyWL7hrRZYvrN8gtnIQFEGhYXJsdBvVUSvEKeDedD9J6KUAvGKAN%2FHG0N3Jgu9fhzVzLsYUfn28VhfjjRvTUL0hC3QWfObV%2Fs0y%2FknwgYcvy14oYWdT51M%2BRlfAyfkml9dZGeTXDvw4qQhH9%2BfTeD676yOTV3F19ECc4w7EEiTcyC5HqC7Qp8rnpLlJWp8%2Fv0P3r95cba%2BWK%2BkMI%2BNwb4GOqUBmN6E0MAKgOqY33uPWFtAUbL7t66ojTTK5laZDi4xmU3bUqGFV3JPrDB%2BUJko1EAK53u1B0f60VhMKpBqxHHBDEqWHhYNh74pKv2sGm7NlVsrq4HODGGFx%2FdD6Y%2Fz76higbwUQ3ny49RC%2FxrXgnL9YkNs8RL5OnqY8n5hvIx7HRkr3pdYzMX1e4Zw9heFPGcpTNOXrLtR1dJyUD0iwK6N5G5xivJL&X-Amz-Signature=ad3b9a24a132a517e3afc98ff506a9f729889dec191ca7d069782975ea03888f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655WJIF3U%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T150931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIA%2FVabuAkoT0uW1dQ%2BCHqU6AG%2Fvk%2F5UXP1ut0dfnhQl7AiEAlmJxV6P%2FkVLfMWUpqJH1%2F1EUkn0XVRKI2dN9RAGtIcwqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLXgvT2BICk2DCxTSircA%2FtFevvJu7iHpIZYNEgasT7YcX9ZRUrFAeQGYopRtoVCSLeIimLDOJmMzrvJf4KbYuniPHnGTJVk%2FOixeUBkWkS1uWrHbwmIJqg2%2F4jnCNl2JPGuKVcryhdtU0S%2FqLyldW7beGMBqMO6hyJvXfuB0O5q5sYIE%2BSvMomrkufwl0Vra%2F%2BfnrXoq7QL4cTlWQdzsWbq%2FHp8S9hi3oTdwuaMVu0mPPQvLiwxuKOQIDNITMDZOdsL8AMFiQSV1v0LqNMuQRTMM7uoq35Vw%2Fq%2FmjFmC0NzazgynO5w6Do%2BefEssl4vB%2FC6QQgbZTIfMtB5aEwoE2Z8ed2rKZ3qAN0qj3l3%2BjUE0fPDjA5kmtWAU7KSOzbEgbtCstnB2C0nJd6Yh6XBnEY4Q91pYH8%2F7iwFQ8GK0KQE3nRBAj9QjZ1%2Bs9UArOFceOWyWL7hrRZYvrN8gtnIQFEGhYXJsdBvVUSvEKeDedD9J6KUAvGKAN%2FHG0N3Jgu9fhzVzLsYUfn28VhfjjRvTUL0hC3QWfObV%2Fs0y%2FknwgYcvy14oYWdT51M%2BRlfAyfkml9dZGeTXDvw4qQhH9%2BfTeD676yOTV3F19ECc4w7EEiTcyC5HqC7Qp8rnpLlJWp8%2Fv0P3r95cba%2BWK%2BkMI%2BNwb4GOqUBmN6E0MAKgOqY33uPWFtAUbL7t66ojTTK5laZDi4xmU3bUqGFV3JPrDB%2BUJko1EAK53u1B0f60VhMKpBqxHHBDEqWHhYNh74pKv2sGm7NlVsrq4HODGGFx%2FdD6Y%2Fz76higbwUQ3ny49RC%2FxrXgnL9YkNs8RL5OnqY8n5hvIx7HRkr3pdYzMX1e4Zw9heFPGcpTNOXrLtR1dJyUD0iwK6N5G5xivJL&X-Amz-Signature=edd19e0fb9e4e40490d2111904ea9f0bc8a9e2830bc9ed9f49551f7156f66747&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655WJIF3U%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T150931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIA%2FVabuAkoT0uW1dQ%2BCHqU6AG%2Fvk%2F5UXP1ut0dfnhQl7AiEAlmJxV6P%2FkVLfMWUpqJH1%2F1EUkn0XVRKI2dN9RAGtIcwqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLXgvT2BICk2DCxTSircA%2FtFevvJu7iHpIZYNEgasT7YcX9ZRUrFAeQGYopRtoVCSLeIimLDOJmMzrvJf4KbYuniPHnGTJVk%2FOixeUBkWkS1uWrHbwmIJqg2%2F4jnCNl2JPGuKVcryhdtU0S%2FqLyldW7beGMBqMO6hyJvXfuB0O5q5sYIE%2BSvMomrkufwl0Vra%2F%2BfnrXoq7QL4cTlWQdzsWbq%2FHp8S9hi3oTdwuaMVu0mPPQvLiwxuKOQIDNITMDZOdsL8AMFiQSV1v0LqNMuQRTMM7uoq35Vw%2Fq%2FmjFmC0NzazgynO5w6Do%2BefEssl4vB%2FC6QQgbZTIfMtB5aEwoE2Z8ed2rKZ3qAN0qj3l3%2BjUE0fPDjA5kmtWAU7KSOzbEgbtCstnB2C0nJd6Yh6XBnEY4Q91pYH8%2F7iwFQ8GK0KQE3nRBAj9QjZ1%2Bs9UArOFceOWyWL7hrRZYvrN8gtnIQFEGhYXJsdBvVUSvEKeDedD9J6KUAvGKAN%2FHG0N3Jgu9fhzVzLsYUfn28VhfjjRvTUL0hC3QWfObV%2Fs0y%2FknwgYcvy14oYWdT51M%2BRlfAyfkml9dZGeTXDvw4qQhH9%2BfTeD676yOTV3F19ECc4w7EEiTcyC5HqC7Qp8rnpLlJWp8%2Fv0P3r95cba%2BWK%2BkMI%2BNwb4GOqUBmN6E0MAKgOqY33uPWFtAUbL7t66ojTTK5laZDi4xmU3bUqGFV3JPrDB%2BUJko1EAK53u1B0f60VhMKpBqxHHBDEqWHhYNh74pKv2sGm7NlVsrq4HODGGFx%2FdD6Y%2Fz76higbwUQ3ny49RC%2FxrXgnL9YkNs8RL5OnqY8n5hvIx7HRkr3pdYzMX1e4Zw9heFPGcpTNOXrLtR1dJyUD0iwK6N5G5xivJL&X-Amz-Signature=24d30f64246aba992d956847ee6f46fb73ca3dd8c6a91828c22fe96f4df7623f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655WJIF3U%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T150931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIA%2FVabuAkoT0uW1dQ%2BCHqU6AG%2Fvk%2F5UXP1ut0dfnhQl7AiEAlmJxV6P%2FkVLfMWUpqJH1%2F1EUkn0XVRKI2dN9RAGtIcwqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLXgvT2BICk2DCxTSircA%2FtFevvJu7iHpIZYNEgasT7YcX9ZRUrFAeQGYopRtoVCSLeIimLDOJmMzrvJf4KbYuniPHnGTJVk%2FOixeUBkWkS1uWrHbwmIJqg2%2F4jnCNl2JPGuKVcryhdtU0S%2FqLyldW7beGMBqMO6hyJvXfuB0O5q5sYIE%2BSvMomrkufwl0Vra%2F%2BfnrXoq7QL4cTlWQdzsWbq%2FHp8S9hi3oTdwuaMVu0mPPQvLiwxuKOQIDNITMDZOdsL8AMFiQSV1v0LqNMuQRTMM7uoq35Vw%2Fq%2FmjFmC0NzazgynO5w6Do%2BefEssl4vB%2FC6QQgbZTIfMtB5aEwoE2Z8ed2rKZ3qAN0qj3l3%2BjUE0fPDjA5kmtWAU7KSOzbEgbtCstnB2C0nJd6Yh6XBnEY4Q91pYH8%2F7iwFQ8GK0KQE3nRBAj9QjZ1%2Bs9UArOFceOWyWL7hrRZYvrN8gtnIQFEGhYXJsdBvVUSvEKeDedD9J6KUAvGKAN%2FHG0N3Jgu9fhzVzLsYUfn28VhfjjRvTUL0hC3QWfObV%2Fs0y%2FknwgYcvy14oYWdT51M%2BRlfAyfkml9dZGeTXDvw4qQhH9%2BfTeD676yOTV3F19ECc4w7EEiTcyC5HqC7Qp8rnpLlJWp8%2Fv0P3r95cba%2BWK%2BkMI%2BNwb4GOqUBmN6E0MAKgOqY33uPWFtAUbL7t66ojTTK5laZDi4xmU3bUqGFV3JPrDB%2BUJko1EAK53u1B0f60VhMKpBqxHHBDEqWHhYNh74pKv2sGm7NlVsrq4HODGGFx%2FdD6Y%2Fz76higbwUQ3ny49RC%2FxrXgnL9YkNs8RL5OnqY8n5hvIx7HRkr3pdYzMX1e4Zw9heFPGcpTNOXrLtR1dJyUD0iwK6N5G5xivJL&X-Amz-Signature=8f717aac5989d46b68595303d3c3ca8b7fe2a84addbbb406242db7274c17c196&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655WJIF3U%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T150931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIA%2FVabuAkoT0uW1dQ%2BCHqU6AG%2Fvk%2F5UXP1ut0dfnhQl7AiEAlmJxV6P%2FkVLfMWUpqJH1%2F1EUkn0XVRKI2dN9RAGtIcwqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLXgvT2BICk2DCxTSircA%2FtFevvJu7iHpIZYNEgasT7YcX9ZRUrFAeQGYopRtoVCSLeIimLDOJmMzrvJf4KbYuniPHnGTJVk%2FOixeUBkWkS1uWrHbwmIJqg2%2F4jnCNl2JPGuKVcryhdtU0S%2FqLyldW7beGMBqMO6hyJvXfuB0O5q5sYIE%2BSvMomrkufwl0Vra%2F%2BfnrXoq7QL4cTlWQdzsWbq%2FHp8S9hi3oTdwuaMVu0mPPQvLiwxuKOQIDNITMDZOdsL8AMFiQSV1v0LqNMuQRTMM7uoq35Vw%2Fq%2FmjFmC0NzazgynO5w6Do%2BefEssl4vB%2FC6QQgbZTIfMtB5aEwoE2Z8ed2rKZ3qAN0qj3l3%2BjUE0fPDjA5kmtWAU7KSOzbEgbtCstnB2C0nJd6Yh6XBnEY4Q91pYH8%2F7iwFQ8GK0KQE3nRBAj9QjZ1%2Bs9UArOFceOWyWL7hrRZYvrN8gtnIQFEGhYXJsdBvVUSvEKeDedD9J6KUAvGKAN%2FHG0N3Jgu9fhzVzLsYUfn28VhfjjRvTUL0hC3QWfObV%2Fs0y%2FknwgYcvy14oYWdT51M%2BRlfAyfkml9dZGeTXDvw4qQhH9%2BfTeD676yOTV3F19ECc4w7EEiTcyC5HqC7Qp8rnpLlJWp8%2Fv0P3r95cba%2BWK%2BkMI%2BNwb4GOqUBmN6E0MAKgOqY33uPWFtAUbL7t66ojTTK5laZDi4xmU3bUqGFV3JPrDB%2BUJko1EAK53u1B0f60VhMKpBqxHHBDEqWHhYNh74pKv2sGm7NlVsrq4HODGGFx%2FdD6Y%2Fz76higbwUQ3ny49RC%2FxrXgnL9YkNs8RL5OnqY8n5hvIx7HRkr3pdYzMX1e4Zw9heFPGcpTNOXrLtR1dJyUD0iwK6N5G5xivJL&X-Amz-Signature=399a5ff39d1299921c2b39596f0101c2722a224250d733f13d0dcec4e65eaf2a&X-Amz-SignedHeaders=host&x-id=GetObject)
