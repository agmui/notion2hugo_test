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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RDQKTAO%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T061047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAhyOlXPpHrE1PpKg817KWsGWTfIn35FQSPpv%2BviDAvXAiAoeRfDMyukaziAsskWY3l5%2BUPTX82zzC%2FnEuK0URXJViqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB4nne9nI%2BHbkP9cTKtwD9JtImNiDxbvhIlJ02e%2B5AW%2FY%2FXLSd35ApL%2BVAQRj6wIERgNQVVmwvtw3AXXvZ3LStML7c%2B3%2FW45vmJNxTxaJcbx6ygDknvWSeCN51F0qQvxm2PfkqEnaj9lT7mgqDG9%2FJSOpK7niql5fZHXUVlFn3KbSvktM8bK4lamCEasGzgaFICbJIT1ZHEIckp%2B5D4r%2Fno2BlrEGRSnFtmXRk7C7%2FMjrXd8l9I4Am5PsrPyBpQWH62mjeSHArVPjrf5Rcql7Nf9nrGysf6uYtMJpPT0BKUz7UCUYPpDGlAG61uZtcY0R5kjM7e%2B2rDmWATJGACqdQUWeTsvY%2FySMTdPdQcz4VyoV4OIUzWFCW21SYXBkDJub7FgrNX%2BvWxcP%2F3uKH1qE8D92%2B7ZAGwcEL0hbyzx%2BkxjPbb3U5ad72PU5A0BF%2BUrTSxRgFeG17cE%2FJUc%2BB%2BKr48OOHPfWgpJjaGpU4aeU9HtSdcAc6TQUZvCRzVvyHMNwU267ynzWMWbs3yuboSDCSuiKEJ3DC4IL%2F0pLr0u7EEYoUbirNGGmCTLbAdC7DOx1UuzrIaMr2481aWERsY1fNI87daK7pAvK%2F%2BbRvCggBwu21jtVG0gikWpuWcSg6BqUxRrEk5byB5YEC8MwlaTsvAY6pgFHPseVPloN4LF6TGwqeKoghvA9fp%2FQd29WdmZHCcfUFeSw9L5QLHhC1gNs3xDB7SQvZeZxucmomvQnF8BnfzSUqfsYkdUHKK%2F083g%2BPLWSRFoQwy6Ru2v5%2BKGu3ES2ngr5inZ8wEK6SI%2FnwpvPJpRfxpYuMRk2zkEfiMbT8K1y%2FMGej8pBkZnrqOAQWFkORvrZGWD4oCZQw6M9gaLoG%2Bddr%2FVxziT2&X-Amz-Signature=56e65a1589300c997dd6c3170ae4d36d6a20d1247f2d0742b9529ee11e1eeb4f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RDQKTAO%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T061048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAhyOlXPpHrE1PpKg817KWsGWTfIn35FQSPpv%2BviDAvXAiAoeRfDMyukaziAsskWY3l5%2BUPTX82zzC%2FnEuK0URXJViqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB4nne9nI%2BHbkP9cTKtwD9JtImNiDxbvhIlJ02e%2B5AW%2FY%2FXLSd35ApL%2BVAQRj6wIERgNQVVmwvtw3AXXvZ3LStML7c%2B3%2FW45vmJNxTxaJcbx6ygDknvWSeCN51F0qQvxm2PfkqEnaj9lT7mgqDG9%2FJSOpK7niql5fZHXUVlFn3KbSvktM8bK4lamCEasGzgaFICbJIT1ZHEIckp%2B5D4r%2Fno2BlrEGRSnFtmXRk7C7%2FMjrXd8l9I4Am5PsrPyBpQWH62mjeSHArVPjrf5Rcql7Nf9nrGysf6uYtMJpPT0BKUz7UCUYPpDGlAG61uZtcY0R5kjM7e%2B2rDmWATJGACqdQUWeTsvY%2FySMTdPdQcz4VyoV4OIUzWFCW21SYXBkDJub7FgrNX%2BvWxcP%2F3uKH1qE8D92%2B7ZAGwcEL0hbyzx%2BkxjPbb3U5ad72PU5A0BF%2BUrTSxRgFeG17cE%2FJUc%2BB%2BKr48OOHPfWgpJjaGpU4aeU9HtSdcAc6TQUZvCRzVvyHMNwU267ynzWMWbs3yuboSDCSuiKEJ3DC4IL%2F0pLr0u7EEYoUbirNGGmCTLbAdC7DOx1UuzrIaMr2481aWERsY1fNI87daK7pAvK%2F%2BbRvCggBwu21jtVG0gikWpuWcSg6BqUxRrEk5byB5YEC8MwlaTsvAY6pgFHPseVPloN4LF6TGwqeKoghvA9fp%2FQd29WdmZHCcfUFeSw9L5QLHhC1gNs3xDB7SQvZeZxucmomvQnF8BnfzSUqfsYkdUHKK%2F083g%2BPLWSRFoQwy6Ru2v5%2BKGu3ES2ngr5inZ8wEK6SI%2FnwpvPJpRfxpYuMRk2zkEfiMbT8K1y%2FMGej8pBkZnrqOAQWFkORvrZGWD4oCZQw6M9gaLoG%2Bddr%2FVxziT2&X-Amz-Signature=906d833c89b464090ad101d7c15dd657b303643d2ac9e7ea371ba144b7a87b79&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RDQKTAO%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T061048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAhyOlXPpHrE1PpKg817KWsGWTfIn35FQSPpv%2BviDAvXAiAoeRfDMyukaziAsskWY3l5%2BUPTX82zzC%2FnEuK0URXJViqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB4nne9nI%2BHbkP9cTKtwD9JtImNiDxbvhIlJ02e%2B5AW%2FY%2FXLSd35ApL%2BVAQRj6wIERgNQVVmwvtw3AXXvZ3LStML7c%2B3%2FW45vmJNxTxaJcbx6ygDknvWSeCN51F0qQvxm2PfkqEnaj9lT7mgqDG9%2FJSOpK7niql5fZHXUVlFn3KbSvktM8bK4lamCEasGzgaFICbJIT1ZHEIckp%2B5D4r%2Fno2BlrEGRSnFtmXRk7C7%2FMjrXd8l9I4Am5PsrPyBpQWH62mjeSHArVPjrf5Rcql7Nf9nrGysf6uYtMJpPT0BKUz7UCUYPpDGlAG61uZtcY0R5kjM7e%2B2rDmWATJGACqdQUWeTsvY%2FySMTdPdQcz4VyoV4OIUzWFCW21SYXBkDJub7FgrNX%2BvWxcP%2F3uKH1qE8D92%2B7ZAGwcEL0hbyzx%2BkxjPbb3U5ad72PU5A0BF%2BUrTSxRgFeG17cE%2FJUc%2BB%2BKr48OOHPfWgpJjaGpU4aeU9HtSdcAc6TQUZvCRzVvyHMNwU267ynzWMWbs3yuboSDCSuiKEJ3DC4IL%2F0pLr0u7EEYoUbirNGGmCTLbAdC7DOx1UuzrIaMr2481aWERsY1fNI87daK7pAvK%2F%2BbRvCggBwu21jtVG0gikWpuWcSg6BqUxRrEk5byB5YEC8MwlaTsvAY6pgFHPseVPloN4LF6TGwqeKoghvA9fp%2FQd29WdmZHCcfUFeSw9L5QLHhC1gNs3xDB7SQvZeZxucmomvQnF8BnfzSUqfsYkdUHKK%2F083g%2BPLWSRFoQwy6Ru2v5%2BKGu3ES2ngr5inZ8wEK6SI%2FnwpvPJpRfxpYuMRk2zkEfiMbT8K1y%2FMGej8pBkZnrqOAQWFkORvrZGWD4oCZQw6M9gaLoG%2Bddr%2FVxziT2&X-Amz-Signature=af66a03b39b47bf3cac19202bd55533864c71e1abbfec44623bffe1b5253e4f4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RDQKTAO%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T061047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAhyOlXPpHrE1PpKg817KWsGWTfIn35FQSPpv%2BviDAvXAiAoeRfDMyukaziAsskWY3l5%2BUPTX82zzC%2FnEuK0URXJViqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB4nne9nI%2BHbkP9cTKtwD9JtImNiDxbvhIlJ02e%2B5AW%2FY%2FXLSd35ApL%2BVAQRj6wIERgNQVVmwvtw3AXXvZ3LStML7c%2B3%2FW45vmJNxTxaJcbx6ygDknvWSeCN51F0qQvxm2PfkqEnaj9lT7mgqDG9%2FJSOpK7niql5fZHXUVlFn3KbSvktM8bK4lamCEasGzgaFICbJIT1ZHEIckp%2B5D4r%2Fno2BlrEGRSnFtmXRk7C7%2FMjrXd8l9I4Am5PsrPyBpQWH62mjeSHArVPjrf5Rcql7Nf9nrGysf6uYtMJpPT0BKUz7UCUYPpDGlAG61uZtcY0R5kjM7e%2B2rDmWATJGACqdQUWeTsvY%2FySMTdPdQcz4VyoV4OIUzWFCW21SYXBkDJub7FgrNX%2BvWxcP%2F3uKH1qE8D92%2B7ZAGwcEL0hbyzx%2BkxjPbb3U5ad72PU5A0BF%2BUrTSxRgFeG17cE%2FJUc%2BB%2BKr48OOHPfWgpJjaGpU4aeU9HtSdcAc6TQUZvCRzVvyHMNwU267ynzWMWbs3yuboSDCSuiKEJ3DC4IL%2F0pLr0u7EEYoUbirNGGmCTLbAdC7DOx1UuzrIaMr2481aWERsY1fNI87daK7pAvK%2F%2BbRvCggBwu21jtVG0gikWpuWcSg6BqUxRrEk5byB5YEC8MwlaTsvAY6pgFHPseVPloN4LF6TGwqeKoghvA9fp%2FQd29WdmZHCcfUFeSw9L5QLHhC1gNs3xDB7SQvZeZxucmomvQnF8BnfzSUqfsYkdUHKK%2F083g%2BPLWSRFoQwy6Ru2v5%2BKGu3ES2ngr5inZ8wEK6SI%2FnwpvPJpRfxpYuMRk2zkEfiMbT8K1y%2FMGej8pBkZnrqOAQWFkORvrZGWD4oCZQw6M9gaLoG%2Bddr%2FVxziT2&X-Amz-Signature=fe36987f32918c335cc00ecf854426495fdd9e02094638328210d172c85f7230&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RDQKTAO%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T061047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAhyOlXPpHrE1PpKg817KWsGWTfIn35FQSPpv%2BviDAvXAiAoeRfDMyukaziAsskWY3l5%2BUPTX82zzC%2FnEuK0URXJViqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB4nne9nI%2BHbkP9cTKtwD9JtImNiDxbvhIlJ02e%2B5AW%2FY%2FXLSd35ApL%2BVAQRj6wIERgNQVVmwvtw3AXXvZ3LStML7c%2B3%2FW45vmJNxTxaJcbx6ygDknvWSeCN51F0qQvxm2PfkqEnaj9lT7mgqDG9%2FJSOpK7niql5fZHXUVlFn3KbSvktM8bK4lamCEasGzgaFICbJIT1ZHEIckp%2B5D4r%2Fno2BlrEGRSnFtmXRk7C7%2FMjrXd8l9I4Am5PsrPyBpQWH62mjeSHArVPjrf5Rcql7Nf9nrGysf6uYtMJpPT0BKUz7UCUYPpDGlAG61uZtcY0R5kjM7e%2B2rDmWATJGACqdQUWeTsvY%2FySMTdPdQcz4VyoV4OIUzWFCW21SYXBkDJub7FgrNX%2BvWxcP%2F3uKH1qE8D92%2B7ZAGwcEL0hbyzx%2BkxjPbb3U5ad72PU5A0BF%2BUrTSxRgFeG17cE%2FJUc%2BB%2BKr48OOHPfWgpJjaGpU4aeU9HtSdcAc6TQUZvCRzVvyHMNwU267ynzWMWbs3yuboSDCSuiKEJ3DC4IL%2F0pLr0u7EEYoUbirNGGmCTLbAdC7DOx1UuzrIaMr2481aWERsY1fNI87daK7pAvK%2F%2BbRvCggBwu21jtVG0gikWpuWcSg6BqUxRrEk5byB5YEC8MwlaTsvAY6pgFHPseVPloN4LF6TGwqeKoghvA9fp%2FQd29WdmZHCcfUFeSw9L5QLHhC1gNs3xDB7SQvZeZxucmomvQnF8BnfzSUqfsYkdUHKK%2F083g%2BPLWSRFoQwy6Ru2v5%2BKGu3ES2ngr5inZ8wEK6SI%2FnwpvPJpRfxpYuMRk2zkEfiMbT8K1y%2FMGej8pBkZnrqOAQWFkORvrZGWD4oCZQw6M9gaLoG%2Bddr%2FVxziT2&X-Amz-Signature=9a7e9f05589f0cd69217aeb1cda1ee18dddca9d1562badbb819b397a73c2540e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RDQKTAO%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T061047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAhyOlXPpHrE1PpKg817KWsGWTfIn35FQSPpv%2BviDAvXAiAoeRfDMyukaziAsskWY3l5%2BUPTX82zzC%2FnEuK0URXJViqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMB4nne9nI%2BHbkP9cTKtwD9JtImNiDxbvhIlJ02e%2B5AW%2FY%2FXLSd35ApL%2BVAQRj6wIERgNQVVmwvtw3AXXvZ3LStML7c%2B3%2FW45vmJNxTxaJcbx6ygDknvWSeCN51F0qQvxm2PfkqEnaj9lT7mgqDG9%2FJSOpK7niql5fZHXUVlFn3KbSvktM8bK4lamCEasGzgaFICbJIT1ZHEIckp%2B5D4r%2Fno2BlrEGRSnFtmXRk7C7%2FMjrXd8l9I4Am5PsrPyBpQWH62mjeSHArVPjrf5Rcql7Nf9nrGysf6uYtMJpPT0BKUz7UCUYPpDGlAG61uZtcY0R5kjM7e%2B2rDmWATJGACqdQUWeTsvY%2FySMTdPdQcz4VyoV4OIUzWFCW21SYXBkDJub7FgrNX%2BvWxcP%2F3uKH1qE8D92%2B7ZAGwcEL0hbyzx%2BkxjPbb3U5ad72PU5A0BF%2BUrTSxRgFeG17cE%2FJUc%2BB%2BKr48OOHPfWgpJjaGpU4aeU9HtSdcAc6TQUZvCRzVvyHMNwU267ynzWMWbs3yuboSDCSuiKEJ3DC4IL%2F0pLr0u7EEYoUbirNGGmCTLbAdC7DOx1UuzrIaMr2481aWERsY1fNI87daK7pAvK%2F%2BbRvCggBwu21jtVG0gikWpuWcSg6BqUxRrEk5byB5YEC8MwlaTsvAY6pgFHPseVPloN4LF6TGwqeKoghvA9fp%2FQd29WdmZHCcfUFeSw9L5QLHhC1gNs3xDB7SQvZeZxucmomvQnF8BnfzSUqfsYkdUHKK%2F083g%2BPLWSRFoQwy6Ru2v5%2BKGu3ES2ngr5inZ8wEK6SI%2FnwpvPJpRfxpYuMRk2zkEfiMbT8K1y%2FMGej8pBkZnrqOAQWFkORvrZGWD4oCZQw6M9gaLoG%2Bddr%2FVxziT2&X-Amz-Signature=05b78d465cb91c9fe5ab6b18a0973584cdd28f5d292d5ce57513381810643f9a&X-Amz-SignedHeaders=host&x-id=GetObject)
