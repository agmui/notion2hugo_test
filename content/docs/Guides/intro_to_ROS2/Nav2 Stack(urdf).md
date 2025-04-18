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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A3VXWQJ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T061236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLOSHZMh59bhdqnyJnQisO0acuWSs8hiqp6daIKYx1jwIgXguf2gMCBLinbWKPPgI5%2BT5FBERM8AI3QDJtn%2FH2lz8q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDP96njdOlgdf3T4mcSrcAw8wDb3iQkN8nDZ1%2B92sHqtLWBb8V6aNMpF%2BrHbPpyBQvCqab1Gbwi1NYOXxr4ulGzc3P2SVM0BdgBPEBWETu2JiKbbagJ9mQujfrtZypzBtAh2AsGK4hPhbYSpTGwVdPSHkq0cHYIfKJmXsl0k55BJCjtgxaZ3HHk57qnVEPNNffzPTwpBIozP4vs7OwLoGLDoMOg%2Fr4wthGQQclSUO2V4zxTzjAjB30VCVQ0atr99rM08Mg1gVnzyorzObId0XEN7Ryg8sdawpvquK54DiI%2Bc8F7jJ5G4XTu93mW6HIJ1mnKJRxWJ%2FyPa19HMWo8xlF%2BpbKVjaWVjzpKi6xDObMTKYm3%2FfEubL1q6F9kOm4Rp3cIFtakVl9s1EFd6XNtPhu1nSNNyROxFcwIy4woVvAIVB%2FJKkXqRh6EcCg81yVFA36ihCjLrpaCCdjhiKNTcVvZ5RlBWvZOpQQh2Xi6x76xwgjH13AO0fXajd53w0okbrAXdlo7f4YMGKdyJaZln%2B77hKsdpqritN2oRw1fEb%2BuABZDb6YLMhw9EEaMuJBGhjWyh77TNcjBu4I%2B6oOT8QEmtioyhPwiAymUbZkoeL8KMiulQ9kdY%2B6cBIH2W5xXY3gNxsA%2BK71SmBzE5rMPzCh8AGOqUBf2xbNw2eiu0OV646RsYQy6VUzWWFALuIzCaqccJ74p7dGWUwlUkiDKVDKfYJai0JS9Vg1mWWtFFZIVbGm4frYZuAw2v5Y8JL0XHfys%2BbeD0LVJdzRja6OxzS0SqOuIfcEzq5vy0k4huvX%2BpcPCWO0E5H8mEL2z7r8Z1z%2B%2B6K115UNu%2FqchdBdGarnByvFVYZawJqfpFVyZME%2FbxSf7Y0A0j2wYAf&X-Amz-Signature=d4c250deb771bb32d0a0abd72d0125808bb89abf2c573e916551418af28a49fe&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A3VXWQJ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T061236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLOSHZMh59bhdqnyJnQisO0acuWSs8hiqp6daIKYx1jwIgXguf2gMCBLinbWKPPgI5%2BT5FBERM8AI3QDJtn%2FH2lz8q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDP96njdOlgdf3T4mcSrcAw8wDb3iQkN8nDZ1%2B92sHqtLWBb8V6aNMpF%2BrHbPpyBQvCqab1Gbwi1NYOXxr4ulGzc3P2SVM0BdgBPEBWETu2JiKbbagJ9mQujfrtZypzBtAh2AsGK4hPhbYSpTGwVdPSHkq0cHYIfKJmXsl0k55BJCjtgxaZ3HHk57qnVEPNNffzPTwpBIozP4vs7OwLoGLDoMOg%2Fr4wthGQQclSUO2V4zxTzjAjB30VCVQ0atr99rM08Mg1gVnzyorzObId0XEN7Ryg8sdawpvquK54DiI%2Bc8F7jJ5G4XTu93mW6HIJ1mnKJRxWJ%2FyPa19HMWo8xlF%2BpbKVjaWVjzpKi6xDObMTKYm3%2FfEubL1q6F9kOm4Rp3cIFtakVl9s1EFd6XNtPhu1nSNNyROxFcwIy4woVvAIVB%2FJKkXqRh6EcCg81yVFA36ihCjLrpaCCdjhiKNTcVvZ5RlBWvZOpQQh2Xi6x76xwgjH13AO0fXajd53w0okbrAXdlo7f4YMGKdyJaZln%2B77hKsdpqritN2oRw1fEb%2BuABZDb6YLMhw9EEaMuJBGhjWyh77TNcjBu4I%2B6oOT8QEmtioyhPwiAymUbZkoeL8KMiulQ9kdY%2B6cBIH2W5xXY3gNxsA%2BK71SmBzE5rMPzCh8AGOqUBf2xbNw2eiu0OV646RsYQy6VUzWWFALuIzCaqccJ74p7dGWUwlUkiDKVDKfYJai0JS9Vg1mWWtFFZIVbGm4frYZuAw2v5Y8JL0XHfys%2BbeD0LVJdzRja6OxzS0SqOuIfcEzq5vy0k4huvX%2BpcPCWO0E5H8mEL2z7r8Z1z%2B%2B6K115UNu%2FqchdBdGarnByvFVYZawJqfpFVyZME%2FbxSf7Y0A0j2wYAf&X-Amz-Signature=ba12bf31c4ff0563f3f6d98d427ed2e4ebe642293cf085ccaaec6d0a70031a36&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A3VXWQJ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T061236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLOSHZMh59bhdqnyJnQisO0acuWSs8hiqp6daIKYx1jwIgXguf2gMCBLinbWKPPgI5%2BT5FBERM8AI3QDJtn%2FH2lz8q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDP96njdOlgdf3T4mcSrcAw8wDb3iQkN8nDZ1%2B92sHqtLWBb8V6aNMpF%2BrHbPpyBQvCqab1Gbwi1NYOXxr4ulGzc3P2SVM0BdgBPEBWETu2JiKbbagJ9mQujfrtZypzBtAh2AsGK4hPhbYSpTGwVdPSHkq0cHYIfKJmXsl0k55BJCjtgxaZ3HHk57qnVEPNNffzPTwpBIozP4vs7OwLoGLDoMOg%2Fr4wthGQQclSUO2V4zxTzjAjB30VCVQ0atr99rM08Mg1gVnzyorzObId0XEN7Ryg8sdawpvquK54DiI%2Bc8F7jJ5G4XTu93mW6HIJ1mnKJRxWJ%2FyPa19HMWo8xlF%2BpbKVjaWVjzpKi6xDObMTKYm3%2FfEubL1q6F9kOm4Rp3cIFtakVl9s1EFd6XNtPhu1nSNNyROxFcwIy4woVvAIVB%2FJKkXqRh6EcCg81yVFA36ihCjLrpaCCdjhiKNTcVvZ5RlBWvZOpQQh2Xi6x76xwgjH13AO0fXajd53w0okbrAXdlo7f4YMGKdyJaZln%2B77hKsdpqritN2oRw1fEb%2BuABZDb6YLMhw9EEaMuJBGhjWyh77TNcjBu4I%2B6oOT8QEmtioyhPwiAymUbZkoeL8KMiulQ9kdY%2B6cBIH2W5xXY3gNxsA%2BK71SmBzE5rMPzCh8AGOqUBf2xbNw2eiu0OV646RsYQy6VUzWWFALuIzCaqccJ74p7dGWUwlUkiDKVDKfYJai0JS9Vg1mWWtFFZIVbGm4frYZuAw2v5Y8JL0XHfys%2BbeD0LVJdzRja6OxzS0SqOuIfcEzq5vy0k4huvX%2BpcPCWO0E5H8mEL2z7r8Z1z%2B%2B6K115UNu%2FqchdBdGarnByvFVYZawJqfpFVyZME%2FbxSf7Y0A0j2wYAf&X-Amz-Signature=c9df56f523f555f95c683671294728d7f7b2ed641c0201534c70d88665e41a30&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A3VXWQJ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T061236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLOSHZMh59bhdqnyJnQisO0acuWSs8hiqp6daIKYx1jwIgXguf2gMCBLinbWKPPgI5%2BT5FBERM8AI3QDJtn%2FH2lz8q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDP96njdOlgdf3T4mcSrcAw8wDb3iQkN8nDZ1%2B92sHqtLWBb8V6aNMpF%2BrHbPpyBQvCqab1Gbwi1NYOXxr4ulGzc3P2SVM0BdgBPEBWETu2JiKbbagJ9mQujfrtZypzBtAh2AsGK4hPhbYSpTGwVdPSHkq0cHYIfKJmXsl0k55BJCjtgxaZ3HHk57qnVEPNNffzPTwpBIozP4vs7OwLoGLDoMOg%2Fr4wthGQQclSUO2V4zxTzjAjB30VCVQ0atr99rM08Mg1gVnzyorzObId0XEN7Ryg8sdawpvquK54DiI%2Bc8F7jJ5G4XTu93mW6HIJ1mnKJRxWJ%2FyPa19HMWo8xlF%2BpbKVjaWVjzpKi6xDObMTKYm3%2FfEubL1q6F9kOm4Rp3cIFtakVl9s1EFd6XNtPhu1nSNNyROxFcwIy4woVvAIVB%2FJKkXqRh6EcCg81yVFA36ihCjLrpaCCdjhiKNTcVvZ5RlBWvZOpQQh2Xi6x76xwgjH13AO0fXajd53w0okbrAXdlo7f4YMGKdyJaZln%2B77hKsdpqritN2oRw1fEb%2BuABZDb6YLMhw9EEaMuJBGhjWyh77TNcjBu4I%2B6oOT8QEmtioyhPwiAymUbZkoeL8KMiulQ9kdY%2B6cBIH2W5xXY3gNxsA%2BK71SmBzE5rMPzCh8AGOqUBf2xbNw2eiu0OV646RsYQy6VUzWWFALuIzCaqccJ74p7dGWUwlUkiDKVDKfYJai0JS9Vg1mWWtFFZIVbGm4frYZuAw2v5Y8JL0XHfys%2BbeD0LVJdzRja6OxzS0SqOuIfcEzq5vy0k4huvX%2BpcPCWO0E5H8mEL2z7r8Z1z%2B%2B6K115UNu%2FqchdBdGarnByvFVYZawJqfpFVyZME%2FbxSf7Y0A0j2wYAf&X-Amz-Signature=912c58707a4c2517f2c0b6afb0509295c09e2a23ed68d37a40289b06f1f74308&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A3VXWQJ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T061236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLOSHZMh59bhdqnyJnQisO0acuWSs8hiqp6daIKYx1jwIgXguf2gMCBLinbWKPPgI5%2BT5FBERM8AI3QDJtn%2FH2lz8q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDP96njdOlgdf3T4mcSrcAw8wDb3iQkN8nDZ1%2B92sHqtLWBb8V6aNMpF%2BrHbPpyBQvCqab1Gbwi1NYOXxr4ulGzc3P2SVM0BdgBPEBWETu2JiKbbagJ9mQujfrtZypzBtAh2AsGK4hPhbYSpTGwVdPSHkq0cHYIfKJmXsl0k55BJCjtgxaZ3HHk57qnVEPNNffzPTwpBIozP4vs7OwLoGLDoMOg%2Fr4wthGQQclSUO2V4zxTzjAjB30VCVQ0atr99rM08Mg1gVnzyorzObId0XEN7Ryg8sdawpvquK54DiI%2Bc8F7jJ5G4XTu93mW6HIJ1mnKJRxWJ%2FyPa19HMWo8xlF%2BpbKVjaWVjzpKi6xDObMTKYm3%2FfEubL1q6F9kOm4Rp3cIFtakVl9s1EFd6XNtPhu1nSNNyROxFcwIy4woVvAIVB%2FJKkXqRh6EcCg81yVFA36ihCjLrpaCCdjhiKNTcVvZ5RlBWvZOpQQh2Xi6x76xwgjH13AO0fXajd53w0okbrAXdlo7f4YMGKdyJaZln%2B77hKsdpqritN2oRw1fEb%2BuABZDb6YLMhw9EEaMuJBGhjWyh77TNcjBu4I%2B6oOT8QEmtioyhPwiAymUbZkoeL8KMiulQ9kdY%2B6cBIH2W5xXY3gNxsA%2BK71SmBzE5rMPzCh8AGOqUBf2xbNw2eiu0OV646RsYQy6VUzWWFALuIzCaqccJ74p7dGWUwlUkiDKVDKfYJai0JS9Vg1mWWtFFZIVbGm4frYZuAw2v5Y8JL0XHfys%2BbeD0LVJdzRja6OxzS0SqOuIfcEzq5vy0k4huvX%2BpcPCWO0E5H8mEL2z7r8Z1z%2B%2B6K115UNu%2FqchdBdGarnByvFVYZawJqfpFVyZME%2FbxSf7Y0A0j2wYAf&X-Amz-Signature=27e1cf65a7ad7e7a17ed40b3e952fd45ab60a19c0415bf72044d23510671f8ea&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667A3VXWQJ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T061236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLOSHZMh59bhdqnyJnQisO0acuWSs8hiqp6daIKYx1jwIgXguf2gMCBLinbWKPPgI5%2BT5FBERM8AI3QDJtn%2FH2lz8q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDP96njdOlgdf3T4mcSrcAw8wDb3iQkN8nDZ1%2B92sHqtLWBb8V6aNMpF%2BrHbPpyBQvCqab1Gbwi1NYOXxr4ulGzc3P2SVM0BdgBPEBWETu2JiKbbagJ9mQujfrtZypzBtAh2AsGK4hPhbYSpTGwVdPSHkq0cHYIfKJmXsl0k55BJCjtgxaZ3HHk57qnVEPNNffzPTwpBIozP4vs7OwLoGLDoMOg%2Fr4wthGQQclSUO2V4zxTzjAjB30VCVQ0atr99rM08Mg1gVnzyorzObId0XEN7Ryg8sdawpvquK54DiI%2Bc8F7jJ5G4XTu93mW6HIJ1mnKJRxWJ%2FyPa19HMWo8xlF%2BpbKVjaWVjzpKi6xDObMTKYm3%2FfEubL1q6F9kOm4Rp3cIFtakVl9s1EFd6XNtPhu1nSNNyROxFcwIy4woVvAIVB%2FJKkXqRh6EcCg81yVFA36ihCjLrpaCCdjhiKNTcVvZ5RlBWvZOpQQh2Xi6x76xwgjH13AO0fXajd53w0okbrAXdlo7f4YMGKdyJaZln%2B77hKsdpqritN2oRw1fEb%2BuABZDb6YLMhw9EEaMuJBGhjWyh77TNcjBu4I%2B6oOT8QEmtioyhPwiAymUbZkoeL8KMiulQ9kdY%2B6cBIH2W5xXY3gNxsA%2BK71SmBzE5rMPzCh8AGOqUBf2xbNw2eiu0OV646RsYQy6VUzWWFALuIzCaqccJ74p7dGWUwlUkiDKVDKfYJai0JS9Vg1mWWtFFZIVbGm4frYZuAw2v5Y8JL0XHfys%2BbeD0LVJdzRja6OxzS0SqOuIfcEzq5vy0k4huvX%2BpcPCWO0E5H8mEL2z7r8Z1z%2B%2B6K115UNu%2FqchdBdGarnByvFVYZawJqfpFVyZME%2FbxSf7Y0A0j2wYAf&X-Amz-Signature=0100b3363a98916b6c7e7973f6425cea48272a8a9adab5c51d6eae31447992ba&X-Amz-SignedHeaders=host&x-id=GetObject)
