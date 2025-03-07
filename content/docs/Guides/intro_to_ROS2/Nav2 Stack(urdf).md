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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D7GWKTR%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T210124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIBuGpfzaTZDa8BKmQ%2FZ0hgZVh5uv9pbN%2FrcE7spEXbNlAiA8c0SD%2ByaeJwLTniHJWi7v%2BHElN6Y%2F7vw6NRPmctRClSr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMN1mPbs4iq76vlxE6KtwDt0nKjnJkjkWpJpiVYJWrthc79W6VM43owIp%2BBzrrZrZ2Hi5UMTYgVoj%2BMMuqZ%2BwvDWiD8EEG75jCjOP3LeVIgoJ8673Qnfi0OsIryqJ0Cii3W6jr51vbV08Dazd7cGjdyMbASN7FgpTuKCl0nsXS%2BnDcsPvq8REJhI5JrkozDoWI%2Fzo2KOPUZdE2aLj%2FOrZw%2Fyi0sZAVLrh7GdKuW0AlNmS4Sm0JlORgf8xRZ4%2FGR6xqcRakuwF161HDCGd%2F%2FRhuBf%2B3of1kepgcgbCRojK%2BRn7oqGn0MN6lEcm8a77K5sr9ey%2B%2BRFVycws%2FkBpMYs5xLWO9cFAxr3UZeBQ28Z0zQht%2F3G4R7%2Fx%2Fz%2FrTnWzL6dH90%2BtT2PyKvpuO0x%2B2LTD2KfBRkDiAl3L4TTfjqxjQOaLp%2BV1waMHsDVl2LjKuHj2iTopTm%2BJB84Z%2B%2BT7kJjwcLVnJhnh3q6wp2Wx767vRh0Un%2FgpbojhYNQlQTXSL5ujs9KOVEMfyaDYvTXNXfqRVY4mdU3iapubJLruqIaeKGXZ2CZAZFuinmNIFvNzRV5lnjWFd5MZBuaBXJV0JHv%2BQmIk6iSaAmRi%2FI2Mm%2F%2FBYKqyw4Wv7PD6Ih4Sqrpwg6x%2FqEyKy5psEdVgExzww6Z%2BtvgY6pgG%2FtldeGYqx2AXR4CFCZo6qY7wVu3%2FpvnJb4wjykBeJUAaWBVIM0BkY73aGdgUvLJ9%2Fhx78hb4j%2BG4Gwbj5%2FHneoEIVV4UwihTZVQQd74Y7yihsqJ3CqsXIitu2VBuuEiv%2B1KCGksIYU5H7Wb6rMexSGLolJdXoQ32mu%2FBLwGVjYIqyWY27ajFwtn3srZEyPYEKdIJQl1RidjxYL8Np08L3Z3gIsyCM&X-Amz-Signature=4b625d44aec78706e839cdacb2efd0a1eca9e4cd23154d5697d76f762a7a6be5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D7GWKTR%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T210124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIBuGpfzaTZDa8BKmQ%2FZ0hgZVh5uv9pbN%2FrcE7spEXbNlAiA8c0SD%2ByaeJwLTniHJWi7v%2BHElN6Y%2F7vw6NRPmctRClSr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMN1mPbs4iq76vlxE6KtwDt0nKjnJkjkWpJpiVYJWrthc79W6VM43owIp%2BBzrrZrZ2Hi5UMTYgVoj%2BMMuqZ%2BwvDWiD8EEG75jCjOP3LeVIgoJ8673Qnfi0OsIryqJ0Cii3W6jr51vbV08Dazd7cGjdyMbASN7FgpTuKCl0nsXS%2BnDcsPvq8REJhI5JrkozDoWI%2Fzo2KOPUZdE2aLj%2FOrZw%2Fyi0sZAVLrh7GdKuW0AlNmS4Sm0JlORgf8xRZ4%2FGR6xqcRakuwF161HDCGd%2F%2FRhuBf%2B3of1kepgcgbCRojK%2BRn7oqGn0MN6lEcm8a77K5sr9ey%2B%2BRFVycws%2FkBpMYs5xLWO9cFAxr3UZeBQ28Z0zQht%2F3G4R7%2Fx%2Fz%2FrTnWzL6dH90%2BtT2PyKvpuO0x%2B2LTD2KfBRkDiAl3L4TTfjqxjQOaLp%2BV1waMHsDVl2LjKuHj2iTopTm%2BJB84Z%2B%2BT7kJjwcLVnJhnh3q6wp2Wx767vRh0Un%2FgpbojhYNQlQTXSL5ujs9KOVEMfyaDYvTXNXfqRVY4mdU3iapubJLruqIaeKGXZ2CZAZFuinmNIFvNzRV5lnjWFd5MZBuaBXJV0JHv%2BQmIk6iSaAmRi%2FI2Mm%2F%2FBYKqyw4Wv7PD6Ih4Sqrpwg6x%2FqEyKy5psEdVgExzww6Z%2BtvgY6pgG%2FtldeGYqx2AXR4CFCZo6qY7wVu3%2FpvnJb4wjykBeJUAaWBVIM0BkY73aGdgUvLJ9%2Fhx78hb4j%2BG4Gwbj5%2FHneoEIVV4UwihTZVQQd74Y7yihsqJ3CqsXIitu2VBuuEiv%2B1KCGksIYU5H7Wb6rMexSGLolJdXoQ32mu%2FBLwGVjYIqyWY27ajFwtn3srZEyPYEKdIJQl1RidjxYL8Np08L3Z3gIsyCM&X-Amz-Signature=591dda00f24525eece1a2a81532a92f7d4cd4e056e316d334dd13d563533a1e7&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D7GWKTR%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T210124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIBuGpfzaTZDa8BKmQ%2FZ0hgZVh5uv9pbN%2FrcE7spEXbNlAiA8c0SD%2ByaeJwLTniHJWi7v%2BHElN6Y%2F7vw6NRPmctRClSr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMN1mPbs4iq76vlxE6KtwDt0nKjnJkjkWpJpiVYJWrthc79W6VM43owIp%2BBzrrZrZ2Hi5UMTYgVoj%2BMMuqZ%2BwvDWiD8EEG75jCjOP3LeVIgoJ8673Qnfi0OsIryqJ0Cii3W6jr51vbV08Dazd7cGjdyMbASN7FgpTuKCl0nsXS%2BnDcsPvq8REJhI5JrkozDoWI%2Fzo2KOPUZdE2aLj%2FOrZw%2Fyi0sZAVLrh7GdKuW0AlNmS4Sm0JlORgf8xRZ4%2FGR6xqcRakuwF161HDCGd%2F%2FRhuBf%2B3of1kepgcgbCRojK%2BRn7oqGn0MN6lEcm8a77K5sr9ey%2B%2BRFVycws%2FkBpMYs5xLWO9cFAxr3UZeBQ28Z0zQht%2F3G4R7%2Fx%2Fz%2FrTnWzL6dH90%2BtT2PyKvpuO0x%2B2LTD2KfBRkDiAl3L4TTfjqxjQOaLp%2BV1waMHsDVl2LjKuHj2iTopTm%2BJB84Z%2B%2BT7kJjwcLVnJhnh3q6wp2Wx767vRh0Un%2FgpbojhYNQlQTXSL5ujs9KOVEMfyaDYvTXNXfqRVY4mdU3iapubJLruqIaeKGXZ2CZAZFuinmNIFvNzRV5lnjWFd5MZBuaBXJV0JHv%2BQmIk6iSaAmRi%2FI2Mm%2F%2FBYKqyw4Wv7PD6Ih4Sqrpwg6x%2FqEyKy5psEdVgExzww6Z%2BtvgY6pgG%2FtldeGYqx2AXR4CFCZo6qY7wVu3%2FpvnJb4wjykBeJUAaWBVIM0BkY73aGdgUvLJ9%2Fhx78hb4j%2BG4Gwbj5%2FHneoEIVV4UwihTZVQQd74Y7yihsqJ3CqsXIitu2VBuuEiv%2B1KCGksIYU5H7Wb6rMexSGLolJdXoQ32mu%2FBLwGVjYIqyWY27ajFwtn3srZEyPYEKdIJQl1RidjxYL8Np08L3Z3gIsyCM&X-Amz-Signature=10cdfb13e13ee0e3d32d1a3ae00f574edb65fbfda64b6fd865ecd1bf499706a1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D7GWKTR%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T210124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIBuGpfzaTZDa8BKmQ%2FZ0hgZVh5uv9pbN%2FrcE7spEXbNlAiA8c0SD%2ByaeJwLTniHJWi7v%2BHElN6Y%2F7vw6NRPmctRClSr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMN1mPbs4iq76vlxE6KtwDt0nKjnJkjkWpJpiVYJWrthc79W6VM43owIp%2BBzrrZrZ2Hi5UMTYgVoj%2BMMuqZ%2BwvDWiD8EEG75jCjOP3LeVIgoJ8673Qnfi0OsIryqJ0Cii3W6jr51vbV08Dazd7cGjdyMbASN7FgpTuKCl0nsXS%2BnDcsPvq8REJhI5JrkozDoWI%2Fzo2KOPUZdE2aLj%2FOrZw%2Fyi0sZAVLrh7GdKuW0AlNmS4Sm0JlORgf8xRZ4%2FGR6xqcRakuwF161HDCGd%2F%2FRhuBf%2B3of1kepgcgbCRojK%2BRn7oqGn0MN6lEcm8a77K5sr9ey%2B%2BRFVycws%2FkBpMYs5xLWO9cFAxr3UZeBQ28Z0zQht%2F3G4R7%2Fx%2Fz%2FrTnWzL6dH90%2BtT2PyKvpuO0x%2B2LTD2KfBRkDiAl3L4TTfjqxjQOaLp%2BV1waMHsDVl2LjKuHj2iTopTm%2BJB84Z%2B%2BT7kJjwcLVnJhnh3q6wp2Wx767vRh0Un%2FgpbojhYNQlQTXSL5ujs9KOVEMfyaDYvTXNXfqRVY4mdU3iapubJLruqIaeKGXZ2CZAZFuinmNIFvNzRV5lnjWFd5MZBuaBXJV0JHv%2BQmIk6iSaAmRi%2FI2Mm%2F%2FBYKqyw4Wv7PD6Ih4Sqrpwg6x%2FqEyKy5psEdVgExzww6Z%2BtvgY6pgG%2FtldeGYqx2AXR4CFCZo6qY7wVu3%2FpvnJb4wjykBeJUAaWBVIM0BkY73aGdgUvLJ9%2Fhx78hb4j%2BG4Gwbj5%2FHneoEIVV4UwihTZVQQd74Y7yihsqJ3CqsXIitu2VBuuEiv%2B1KCGksIYU5H7Wb6rMexSGLolJdXoQ32mu%2FBLwGVjYIqyWY27ajFwtn3srZEyPYEKdIJQl1RidjxYL8Np08L3Z3gIsyCM&X-Amz-Signature=0931b2049de950b81be181036e174c81feb088e5cc3fe53abde68a353cae8aa6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D7GWKTR%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T210124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIBuGpfzaTZDa8BKmQ%2FZ0hgZVh5uv9pbN%2FrcE7spEXbNlAiA8c0SD%2ByaeJwLTniHJWi7v%2BHElN6Y%2F7vw6NRPmctRClSr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMN1mPbs4iq76vlxE6KtwDt0nKjnJkjkWpJpiVYJWrthc79W6VM43owIp%2BBzrrZrZ2Hi5UMTYgVoj%2BMMuqZ%2BwvDWiD8EEG75jCjOP3LeVIgoJ8673Qnfi0OsIryqJ0Cii3W6jr51vbV08Dazd7cGjdyMbASN7FgpTuKCl0nsXS%2BnDcsPvq8REJhI5JrkozDoWI%2Fzo2KOPUZdE2aLj%2FOrZw%2Fyi0sZAVLrh7GdKuW0AlNmS4Sm0JlORgf8xRZ4%2FGR6xqcRakuwF161HDCGd%2F%2FRhuBf%2B3of1kepgcgbCRojK%2BRn7oqGn0MN6lEcm8a77K5sr9ey%2B%2BRFVycws%2FkBpMYs5xLWO9cFAxr3UZeBQ28Z0zQht%2F3G4R7%2Fx%2Fz%2FrTnWzL6dH90%2BtT2PyKvpuO0x%2B2LTD2KfBRkDiAl3L4TTfjqxjQOaLp%2BV1waMHsDVl2LjKuHj2iTopTm%2BJB84Z%2B%2BT7kJjwcLVnJhnh3q6wp2Wx767vRh0Un%2FgpbojhYNQlQTXSL5ujs9KOVEMfyaDYvTXNXfqRVY4mdU3iapubJLruqIaeKGXZ2CZAZFuinmNIFvNzRV5lnjWFd5MZBuaBXJV0JHv%2BQmIk6iSaAmRi%2FI2Mm%2F%2FBYKqyw4Wv7PD6Ih4Sqrpwg6x%2FqEyKy5psEdVgExzww6Z%2BtvgY6pgG%2FtldeGYqx2AXR4CFCZo6qY7wVu3%2FpvnJb4wjykBeJUAaWBVIM0BkY73aGdgUvLJ9%2Fhx78hb4j%2BG4Gwbj5%2FHneoEIVV4UwihTZVQQd74Y7yihsqJ3CqsXIitu2VBuuEiv%2B1KCGksIYU5H7Wb6rMexSGLolJdXoQ32mu%2FBLwGVjYIqyWY27ajFwtn3srZEyPYEKdIJQl1RidjxYL8Np08L3Z3gIsyCM&X-Amz-Signature=c65c16e3a0339eaf5990ccfc05973bf2a9c59b873e4c71f03ecc7e3c39049d8f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D7GWKTR%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T210124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIBuGpfzaTZDa8BKmQ%2FZ0hgZVh5uv9pbN%2FrcE7spEXbNlAiA8c0SD%2ByaeJwLTniHJWi7v%2BHElN6Y%2F7vw6NRPmctRClSr%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMN1mPbs4iq76vlxE6KtwDt0nKjnJkjkWpJpiVYJWrthc79W6VM43owIp%2BBzrrZrZ2Hi5UMTYgVoj%2BMMuqZ%2BwvDWiD8EEG75jCjOP3LeVIgoJ8673Qnfi0OsIryqJ0Cii3W6jr51vbV08Dazd7cGjdyMbASN7FgpTuKCl0nsXS%2BnDcsPvq8REJhI5JrkozDoWI%2Fzo2KOPUZdE2aLj%2FOrZw%2Fyi0sZAVLrh7GdKuW0AlNmS4Sm0JlORgf8xRZ4%2FGR6xqcRakuwF161HDCGd%2F%2FRhuBf%2B3of1kepgcgbCRojK%2BRn7oqGn0MN6lEcm8a77K5sr9ey%2B%2BRFVycws%2FkBpMYs5xLWO9cFAxr3UZeBQ28Z0zQht%2F3G4R7%2Fx%2Fz%2FrTnWzL6dH90%2BtT2PyKvpuO0x%2B2LTD2KfBRkDiAl3L4TTfjqxjQOaLp%2BV1waMHsDVl2LjKuHj2iTopTm%2BJB84Z%2B%2BT7kJjwcLVnJhnh3q6wp2Wx767vRh0Un%2FgpbojhYNQlQTXSL5ujs9KOVEMfyaDYvTXNXfqRVY4mdU3iapubJLruqIaeKGXZ2CZAZFuinmNIFvNzRV5lnjWFd5MZBuaBXJV0JHv%2BQmIk6iSaAmRi%2FI2Mm%2F%2FBYKqyw4Wv7PD6Ih4Sqrpwg6x%2FqEyKy5psEdVgExzww6Z%2BtvgY6pgG%2FtldeGYqx2AXR4CFCZo6qY7wVu3%2FpvnJb4wjykBeJUAaWBVIM0BkY73aGdgUvLJ9%2Fhx78hb4j%2BG4Gwbj5%2FHneoEIVV4UwihTZVQQd74Y7yihsqJ3CqsXIitu2VBuuEiv%2B1KCGksIYU5H7Wb6rMexSGLolJdXoQ32mu%2FBLwGVjYIqyWY27ajFwtn3srZEyPYEKdIJQl1RidjxYL8Np08L3Z3gIsyCM&X-Amz-Signature=f80777a7ed0a32f8b063ffa11b702e6a0297402f0270225a0c2c4cd5c0d21c0f&X-Amz-SignedHeaders=host&x-id=GetObject)
