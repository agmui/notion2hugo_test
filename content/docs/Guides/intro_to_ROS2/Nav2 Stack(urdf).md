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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KDF33YX%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T022748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCFdkyMFyp7g0uDmxBvGK1AkeF%2FW6%2FUUZx3keaBl9CNCwIhAJirBBe0q%2FJTptfeRzmcVTIltixwd2OhdX1wrTkkjYpuKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyV2SLV6naOMlNlF5cq3APNZH0z3%2F52ebxHcKIeSdVfFiBdhAxmGjkJvowo%2FmN8XhwSl%2FswACCw7NMwyUIIHdKgyhmznf7ggowqvx4GYLeJl1qAAShJJwThjQZWk%2FkQrAa2McMvl0%2B4%2FaU1qbi8GUbRfmQftgLOdrV7hZIwu26%2FFgdXyliGEv3cxjOGXAXayUg2nXWCwaofnHKKEFubiWKJWF04FJdFCHgQcM28kqGe2d4iGfXnbbBxI4KxSLPj%2B96lxlPn%2BMBO87LLbC9WIMNp4kVo1nBHNCMOGLI6F1BmCyYyultE7AvD3DUD3HINlzYkrxi2AXYgzHnZxiaz6KO%2Bmv0eD%2BDtdHg2x%2FNf6NCLDbgNT5SWPazJTeJ8J3iUh09D%2BGGW53z7yVojzFtZAU23JohToNE5MXxOWQ8f964dTQSn0gqNrRE%2FhrWC8OfRKSfnQzKeuF06pqX0inadADGbzWELJPSDXn4dIXEk%2FhPSTyKmCsI%2B3WY4X8Uv2GQxKjalfIukXJxZL4BeH3yCBagbaflH%2BU1BXTuwoKsyBLLIuiWLda1vLYxJmHjc8WCi0TguwXMUUVEVrdOZHtiYb7qQbb77wNIDPcsoTtVaXs5bwg44fMYNb0TcvAxLZGo7l9rW5Ch5J%2Fs%2FrPPeHDD3k7rBBjqkASUIP18%2FxaBHj1ht%2FE390mD5UjX5z0K%2FNRVAfnpd2wuBwpYZs8lpICvP8UHEacSn3bazeetsI%2FUEXyZIkaKJUQpr1D7D9MfgalfeUoSNM1za9969cFKh7jieet8ZIRr7zSYxA9%2F4h4Eg0oT9oCl%2BMwUWqHsJhkFB%2F%2BRpavjO%2BTAlp3uO8NSYDU8S7RGuU8ZXk1uFtyQZ216%2BQEzn9IRRnia80IUn&X-Amz-Signature=980b7297aed7aabbba78447711daf2b4a3dad4b11ac3461a0936bbc8c6769ced&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KDF33YX%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T022748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCFdkyMFyp7g0uDmxBvGK1AkeF%2FW6%2FUUZx3keaBl9CNCwIhAJirBBe0q%2FJTptfeRzmcVTIltixwd2OhdX1wrTkkjYpuKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyV2SLV6naOMlNlF5cq3APNZH0z3%2F52ebxHcKIeSdVfFiBdhAxmGjkJvowo%2FmN8XhwSl%2FswACCw7NMwyUIIHdKgyhmznf7ggowqvx4GYLeJl1qAAShJJwThjQZWk%2FkQrAa2McMvl0%2B4%2FaU1qbi8GUbRfmQftgLOdrV7hZIwu26%2FFgdXyliGEv3cxjOGXAXayUg2nXWCwaofnHKKEFubiWKJWF04FJdFCHgQcM28kqGe2d4iGfXnbbBxI4KxSLPj%2B96lxlPn%2BMBO87LLbC9WIMNp4kVo1nBHNCMOGLI6F1BmCyYyultE7AvD3DUD3HINlzYkrxi2AXYgzHnZxiaz6KO%2Bmv0eD%2BDtdHg2x%2FNf6NCLDbgNT5SWPazJTeJ8J3iUh09D%2BGGW53z7yVojzFtZAU23JohToNE5MXxOWQ8f964dTQSn0gqNrRE%2FhrWC8OfRKSfnQzKeuF06pqX0inadADGbzWELJPSDXn4dIXEk%2FhPSTyKmCsI%2B3WY4X8Uv2GQxKjalfIukXJxZL4BeH3yCBagbaflH%2BU1BXTuwoKsyBLLIuiWLda1vLYxJmHjc8WCi0TguwXMUUVEVrdOZHtiYb7qQbb77wNIDPcsoTtVaXs5bwg44fMYNb0TcvAxLZGo7l9rW5Ch5J%2Fs%2FrPPeHDD3k7rBBjqkASUIP18%2FxaBHj1ht%2FE390mD5UjX5z0K%2FNRVAfnpd2wuBwpYZs8lpICvP8UHEacSn3bazeetsI%2FUEXyZIkaKJUQpr1D7D9MfgalfeUoSNM1za9969cFKh7jieet8ZIRr7zSYxA9%2F4h4Eg0oT9oCl%2BMwUWqHsJhkFB%2F%2BRpavjO%2BTAlp3uO8NSYDU8S7RGuU8ZXk1uFtyQZ216%2BQEzn9IRRnia80IUn&X-Amz-Signature=603b6019d03e763cf9aa2ba4e7a6f3c04c81398eef02b83f8c7e681b4de46500&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KDF33YX%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T022748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCFdkyMFyp7g0uDmxBvGK1AkeF%2FW6%2FUUZx3keaBl9CNCwIhAJirBBe0q%2FJTptfeRzmcVTIltixwd2OhdX1wrTkkjYpuKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyV2SLV6naOMlNlF5cq3APNZH0z3%2F52ebxHcKIeSdVfFiBdhAxmGjkJvowo%2FmN8XhwSl%2FswACCw7NMwyUIIHdKgyhmznf7ggowqvx4GYLeJl1qAAShJJwThjQZWk%2FkQrAa2McMvl0%2B4%2FaU1qbi8GUbRfmQftgLOdrV7hZIwu26%2FFgdXyliGEv3cxjOGXAXayUg2nXWCwaofnHKKEFubiWKJWF04FJdFCHgQcM28kqGe2d4iGfXnbbBxI4KxSLPj%2B96lxlPn%2BMBO87LLbC9WIMNp4kVo1nBHNCMOGLI6F1BmCyYyultE7AvD3DUD3HINlzYkrxi2AXYgzHnZxiaz6KO%2Bmv0eD%2BDtdHg2x%2FNf6NCLDbgNT5SWPazJTeJ8J3iUh09D%2BGGW53z7yVojzFtZAU23JohToNE5MXxOWQ8f964dTQSn0gqNrRE%2FhrWC8OfRKSfnQzKeuF06pqX0inadADGbzWELJPSDXn4dIXEk%2FhPSTyKmCsI%2B3WY4X8Uv2GQxKjalfIukXJxZL4BeH3yCBagbaflH%2BU1BXTuwoKsyBLLIuiWLda1vLYxJmHjc8WCi0TguwXMUUVEVrdOZHtiYb7qQbb77wNIDPcsoTtVaXs5bwg44fMYNb0TcvAxLZGo7l9rW5Ch5J%2Fs%2FrPPeHDD3k7rBBjqkASUIP18%2FxaBHj1ht%2FE390mD5UjX5z0K%2FNRVAfnpd2wuBwpYZs8lpICvP8UHEacSn3bazeetsI%2FUEXyZIkaKJUQpr1D7D9MfgalfeUoSNM1za9969cFKh7jieet8ZIRr7zSYxA9%2F4h4Eg0oT9oCl%2BMwUWqHsJhkFB%2F%2BRpavjO%2BTAlp3uO8NSYDU8S7RGuU8ZXk1uFtyQZ216%2BQEzn9IRRnia80IUn&X-Amz-Signature=94860c4ce4796515f02766f985df04efb5d8d18ab7f101c7d012cbea6cc485db&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KDF33YX%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T022748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCFdkyMFyp7g0uDmxBvGK1AkeF%2FW6%2FUUZx3keaBl9CNCwIhAJirBBe0q%2FJTptfeRzmcVTIltixwd2OhdX1wrTkkjYpuKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyV2SLV6naOMlNlF5cq3APNZH0z3%2F52ebxHcKIeSdVfFiBdhAxmGjkJvowo%2FmN8XhwSl%2FswACCw7NMwyUIIHdKgyhmznf7ggowqvx4GYLeJl1qAAShJJwThjQZWk%2FkQrAa2McMvl0%2B4%2FaU1qbi8GUbRfmQftgLOdrV7hZIwu26%2FFgdXyliGEv3cxjOGXAXayUg2nXWCwaofnHKKEFubiWKJWF04FJdFCHgQcM28kqGe2d4iGfXnbbBxI4KxSLPj%2B96lxlPn%2BMBO87LLbC9WIMNp4kVo1nBHNCMOGLI6F1BmCyYyultE7AvD3DUD3HINlzYkrxi2AXYgzHnZxiaz6KO%2Bmv0eD%2BDtdHg2x%2FNf6NCLDbgNT5SWPazJTeJ8J3iUh09D%2BGGW53z7yVojzFtZAU23JohToNE5MXxOWQ8f964dTQSn0gqNrRE%2FhrWC8OfRKSfnQzKeuF06pqX0inadADGbzWELJPSDXn4dIXEk%2FhPSTyKmCsI%2B3WY4X8Uv2GQxKjalfIukXJxZL4BeH3yCBagbaflH%2BU1BXTuwoKsyBLLIuiWLda1vLYxJmHjc8WCi0TguwXMUUVEVrdOZHtiYb7qQbb77wNIDPcsoTtVaXs5bwg44fMYNb0TcvAxLZGo7l9rW5Ch5J%2Fs%2FrPPeHDD3k7rBBjqkASUIP18%2FxaBHj1ht%2FE390mD5UjX5z0K%2FNRVAfnpd2wuBwpYZs8lpICvP8UHEacSn3bazeetsI%2FUEXyZIkaKJUQpr1D7D9MfgalfeUoSNM1za9969cFKh7jieet8ZIRr7zSYxA9%2F4h4Eg0oT9oCl%2BMwUWqHsJhkFB%2F%2BRpavjO%2BTAlp3uO8NSYDU8S7RGuU8ZXk1uFtyQZ216%2BQEzn9IRRnia80IUn&X-Amz-Signature=63dd3b8bceb262d7d557d1b589f269d1b0427f9bc6216aa3c316899863f2771a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KDF33YX%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T022748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCFdkyMFyp7g0uDmxBvGK1AkeF%2FW6%2FUUZx3keaBl9CNCwIhAJirBBe0q%2FJTptfeRzmcVTIltixwd2OhdX1wrTkkjYpuKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyV2SLV6naOMlNlF5cq3APNZH0z3%2F52ebxHcKIeSdVfFiBdhAxmGjkJvowo%2FmN8XhwSl%2FswACCw7NMwyUIIHdKgyhmznf7ggowqvx4GYLeJl1qAAShJJwThjQZWk%2FkQrAa2McMvl0%2B4%2FaU1qbi8GUbRfmQftgLOdrV7hZIwu26%2FFgdXyliGEv3cxjOGXAXayUg2nXWCwaofnHKKEFubiWKJWF04FJdFCHgQcM28kqGe2d4iGfXnbbBxI4KxSLPj%2B96lxlPn%2BMBO87LLbC9WIMNp4kVo1nBHNCMOGLI6F1BmCyYyultE7AvD3DUD3HINlzYkrxi2AXYgzHnZxiaz6KO%2Bmv0eD%2BDtdHg2x%2FNf6NCLDbgNT5SWPazJTeJ8J3iUh09D%2BGGW53z7yVojzFtZAU23JohToNE5MXxOWQ8f964dTQSn0gqNrRE%2FhrWC8OfRKSfnQzKeuF06pqX0inadADGbzWELJPSDXn4dIXEk%2FhPSTyKmCsI%2B3WY4X8Uv2GQxKjalfIukXJxZL4BeH3yCBagbaflH%2BU1BXTuwoKsyBLLIuiWLda1vLYxJmHjc8WCi0TguwXMUUVEVrdOZHtiYb7qQbb77wNIDPcsoTtVaXs5bwg44fMYNb0TcvAxLZGo7l9rW5Ch5J%2Fs%2FrPPeHDD3k7rBBjqkASUIP18%2FxaBHj1ht%2FE390mD5UjX5z0K%2FNRVAfnpd2wuBwpYZs8lpICvP8UHEacSn3bazeetsI%2FUEXyZIkaKJUQpr1D7D9MfgalfeUoSNM1za9969cFKh7jieet8ZIRr7zSYxA9%2F4h4Eg0oT9oCl%2BMwUWqHsJhkFB%2F%2BRpavjO%2BTAlp3uO8NSYDU8S7RGuU8ZXk1uFtyQZ216%2BQEzn9IRRnia80IUn&X-Amz-Signature=88eeaf8e3ead82add2227159776e49e35dfe3480e07d54ef57e732ec8a048554&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KDF33YX%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T022748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCFdkyMFyp7g0uDmxBvGK1AkeF%2FW6%2FUUZx3keaBl9CNCwIhAJirBBe0q%2FJTptfeRzmcVTIltixwd2OhdX1wrTkkjYpuKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyV2SLV6naOMlNlF5cq3APNZH0z3%2F52ebxHcKIeSdVfFiBdhAxmGjkJvowo%2FmN8XhwSl%2FswACCw7NMwyUIIHdKgyhmznf7ggowqvx4GYLeJl1qAAShJJwThjQZWk%2FkQrAa2McMvl0%2B4%2FaU1qbi8GUbRfmQftgLOdrV7hZIwu26%2FFgdXyliGEv3cxjOGXAXayUg2nXWCwaofnHKKEFubiWKJWF04FJdFCHgQcM28kqGe2d4iGfXnbbBxI4KxSLPj%2B96lxlPn%2BMBO87LLbC9WIMNp4kVo1nBHNCMOGLI6F1BmCyYyultE7AvD3DUD3HINlzYkrxi2AXYgzHnZxiaz6KO%2Bmv0eD%2BDtdHg2x%2FNf6NCLDbgNT5SWPazJTeJ8J3iUh09D%2BGGW53z7yVojzFtZAU23JohToNE5MXxOWQ8f964dTQSn0gqNrRE%2FhrWC8OfRKSfnQzKeuF06pqX0inadADGbzWELJPSDXn4dIXEk%2FhPSTyKmCsI%2B3WY4X8Uv2GQxKjalfIukXJxZL4BeH3yCBagbaflH%2BU1BXTuwoKsyBLLIuiWLda1vLYxJmHjc8WCi0TguwXMUUVEVrdOZHtiYb7qQbb77wNIDPcsoTtVaXs5bwg44fMYNb0TcvAxLZGo7l9rW5Ch5J%2Fs%2FrPPeHDD3k7rBBjqkASUIP18%2FxaBHj1ht%2FE390mD5UjX5z0K%2FNRVAfnpd2wuBwpYZs8lpICvP8UHEacSn3bazeetsI%2FUEXyZIkaKJUQpr1D7D9MfgalfeUoSNM1za9969cFKh7jieet8ZIRr7zSYxA9%2F4h4Eg0oT9oCl%2BMwUWqHsJhkFB%2F%2BRpavjO%2BTAlp3uO8NSYDU8S7RGuU8ZXk1uFtyQZ216%2BQEzn9IRRnia80IUn&X-Amz-Signature=5a8a603dca4b78ea062d791c2d7e687e60a69a26eac036050d5427ce7a7d727a&X-Amz-SignedHeaders=host&x-id=GetObject)
