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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V7HNWLD%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T051056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuzSlECFU9ezY4ZcHMYYG%2Fl1uWDdqYOOpYh8hUipnKrAIgN9fOqIdHsl%2FY9lw%2Ft9ZHg0MFmlBbVj%2BBXi%2Bt6zwhRDYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZB5%2FN24N0quqCtSyrcAxRq5eRoyG7hajcv30Ri6tHohZdqn8b%2FC1E975ejP3gfIS9m8vS7ms1%2BeyYVnYxOAHCAkRQEda%2F9Trj0HXSllmMJ8VVy8VZk8IW62eHv6okdnyIsDyGD5Qkz2IEi1JhDRFOAxRpmSPb5cxceErM%2FQzvUl5zo0jiLIJNab5ivkFn1VegyqaWJv4xn9jAozH%2F17qtQPZi6ndJPXUYUT4YQlJ7mEHz1GxhSwDWFfJ%2Fu94V6vHLZ%2F3J%2FsKxDQ4fUjRCmAvZr8%2FMYgFJGINOjtfVqjOV4ugY2Wvd2HqQM8LKB8PIvxkFYPkedFbkyQM8MyLP70VrS5opb%2FS2XRTjNmmx3pIP5nkNHM%2BcIYVPO1PC7JQgD2UN1e74Vy3bEhdsmzdihP%2F%2FV66eTJ%2FR97IN0OeI7iOPOr9KfTRjV7pkkJaekfc2TZLKzV3iXmzHbQeLKdiYiz%2BR8yTFF3KLmeyBVkdwbJExIejMLgtDSul3reTXyhnoVMaW2YL6XzSfnoavDQ9Hc%2BQeNhHNvO0xMxb%2FN50%2BN4pnvSZekz8DwQWr7TkzJdSSqYRbrbXNocf5xUChxUhkDBZwQCJs58B7iYmft5Jmrq7fOF24WAgy3gDJzrWIqVJccWKTAcRl7yqqRUeFrMI2XpMIGOqUBNNwQo0CiibuiLNWn7KSt4%2Fx4qggJhyFTidqaG1H6d%2Bcqi%2FRf3OyAn7TCb03F5dpMd1OM2ueuyP8U4EzMWc42U7myrGWypgZPrBPN9f0evzvPv9Nfd%2BooMAfAMyHI%2Bf9k9qhFn80IWIN7hIpB6O2c6z97pbQNG49TjJrSTmIho%2BoIK9d7C5Fj884rdBe2uzX50hYgMwseIzn4vW7AjNUBz%2FeoKhl2&X-Amz-Signature=70f8fa8a67772d384ccb24b0d215004a3e50b6ebc1087d3b0f7a8f30ff13b9a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V7HNWLD%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T051056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuzSlECFU9ezY4ZcHMYYG%2Fl1uWDdqYOOpYh8hUipnKrAIgN9fOqIdHsl%2FY9lw%2Ft9ZHg0MFmlBbVj%2BBXi%2Bt6zwhRDYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZB5%2FN24N0quqCtSyrcAxRq5eRoyG7hajcv30Ri6tHohZdqn8b%2FC1E975ejP3gfIS9m8vS7ms1%2BeyYVnYxOAHCAkRQEda%2F9Trj0HXSllmMJ8VVy8VZk8IW62eHv6okdnyIsDyGD5Qkz2IEi1JhDRFOAxRpmSPb5cxceErM%2FQzvUl5zo0jiLIJNab5ivkFn1VegyqaWJv4xn9jAozH%2F17qtQPZi6ndJPXUYUT4YQlJ7mEHz1GxhSwDWFfJ%2Fu94V6vHLZ%2F3J%2FsKxDQ4fUjRCmAvZr8%2FMYgFJGINOjtfVqjOV4ugY2Wvd2HqQM8LKB8PIvxkFYPkedFbkyQM8MyLP70VrS5opb%2FS2XRTjNmmx3pIP5nkNHM%2BcIYVPO1PC7JQgD2UN1e74Vy3bEhdsmzdihP%2F%2FV66eTJ%2FR97IN0OeI7iOPOr9KfTRjV7pkkJaekfc2TZLKzV3iXmzHbQeLKdiYiz%2BR8yTFF3KLmeyBVkdwbJExIejMLgtDSul3reTXyhnoVMaW2YL6XzSfnoavDQ9Hc%2BQeNhHNvO0xMxb%2FN50%2BN4pnvSZekz8DwQWr7TkzJdSSqYRbrbXNocf5xUChxUhkDBZwQCJs58B7iYmft5Jmrq7fOF24WAgy3gDJzrWIqVJccWKTAcRl7yqqRUeFrMI2XpMIGOqUBNNwQo0CiibuiLNWn7KSt4%2Fx4qggJhyFTidqaG1H6d%2Bcqi%2FRf3OyAn7TCb03F5dpMd1OM2ueuyP8U4EzMWc42U7myrGWypgZPrBPN9f0evzvPv9Nfd%2BooMAfAMyHI%2Bf9k9qhFn80IWIN7hIpB6O2c6z97pbQNG49TjJrSTmIho%2BoIK9d7C5Fj884rdBe2uzX50hYgMwseIzn4vW7AjNUBz%2FeoKhl2&X-Amz-Signature=37c79c4f07bfd74ac42d19ff31c1b45268ef7f234fa0057d4b26ea1ee4010460&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V7HNWLD%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T051056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuzSlECFU9ezY4ZcHMYYG%2Fl1uWDdqYOOpYh8hUipnKrAIgN9fOqIdHsl%2FY9lw%2Ft9ZHg0MFmlBbVj%2BBXi%2Bt6zwhRDYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZB5%2FN24N0quqCtSyrcAxRq5eRoyG7hajcv30Ri6tHohZdqn8b%2FC1E975ejP3gfIS9m8vS7ms1%2BeyYVnYxOAHCAkRQEda%2F9Trj0HXSllmMJ8VVy8VZk8IW62eHv6okdnyIsDyGD5Qkz2IEi1JhDRFOAxRpmSPb5cxceErM%2FQzvUl5zo0jiLIJNab5ivkFn1VegyqaWJv4xn9jAozH%2F17qtQPZi6ndJPXUYUT4YQlJ7mEHz1GxhSwDWFfJ%2Fu94V6vHLZ%2F3J%2FsKxDQ4fUjRCmAvZr8%2FMYgFJGINOjtfVqjOV4ugY2Wvd2HqQM8LKB8PIvxkFYPkedFbkyQM8MyLP70VrS5opb%2FS2XRTjNmmx3pIP5nkNHM%2BcIYVPO1PC7JQgD2UN1e74Vy3bEhdsmzdihP%2F%2FV66eTJ%2FR97IN0OeI7iOPOr9KfTRjV7pkkJaekfc2TZLKzV3iXmzHbQeLKdiYiz%2BR8yTFF3KLmeyBVkdwbJExIejMLgtDSul3reTXyhnoVMaW2YL6XzSfnoavDQ9Hc%2BQeNhHNvO0xMxb%2FN50%2BN4pnvSZekz8DwQWr7TkzJdSSqYRbrbXNocf5xUChxUhkDBZwQCJs58B7iYmft5Jmrq7fOF24WAgy3gDJzrWIqVJccWKTAcRl7yqqRUeFrMI2XpMIGOqUBNNwQo0CiibuiLNWn7KSt4%2Fx4qggJhyFTidqaG1H6d%2Bcqi%2FRf3OyAn7TCb03F5dpMd1OM2ueuyP8U4EzMWc42U7myrGWypgZPrBPN9f0evzvPv9Nfd%2BooMAfAMyHI%2Bf9k9qhFn80IWIN7hIpB6O2c6z97pbQNG49TjJrSTmIho%2BoIK9d7C5Fj884rdBe2uzX50hYgMwseIzn4vW7AjNUBz%2FeoKhl2&X-Amz-Signature=a3b05761201a56711eea79654a105f13185e497d45a4e063facac6f2555ef3ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V7HNWLD%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T051056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuzSlECFU9ezY4ZcHMYYG%2Fl1uWDdqYOOpYh8hUipnKrAIgN9fOqIdHsl%2FY9lw%2Ft9ZHg0MFmlBbVj%2BBXi%2Bt6zwhRDYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZB5%2FN24N0quqCtSyrcAxRq5eRoyG7hajcv30Ri6tHohZdqn8b%2FC1E975ejP3gfIS9m8vS7ms1%2BeyYVnYxOAHCAkRQEda%2F9Trj0HXSllmMJ8VVy8VZk8IW62eHv6okdnyIsDyGD5Qkz2IEi1JhDRFOAxRpmSPb5cxceErM%2FQzvUl5zo0jiLIJNab5ivkFn1VegyqaWJv4xn9jAozH%2F17qtQPZi6ndJPXUYUT4YQlJ7mEHz1GxhSwDWFfJ%2Fu94V6vHLZ%2F3J%2FsKxDQ4fUjRCmAvZr8%2FMYgFJGINOjtfVqjOV4ugY2Wvd2HqQM8LKB8PIvxkFYPkedFbkyQM8MyLP70VrS5opb%2FS2XRTjNmmx3pIP5nkNHM%2BcIYVPO1PC7JQgD2UN1e74Vy3bEhdsmzdihP%2F%2FV66eTJ%2FR97IN0OeI7iOPOr9KfTRjV7pkkJaekfc2TZLKzV3iXmzHbQeLKdiYiz%2BR8yTFF3KLmeyBVkdwbJExIejMLgtDSul3reTXyhnoVMaW2YL6XzSfnoavDQ9Hc%2BQeNhHNvO0xMxb%2FN50%2BN4pnvSZekz8DwQWr7TkzJdSSqYRbrbXNocf5xUChxUhkDBZwQCJs58B7iYmft5Jmrq7fOF24WAgy3gDJzrWIqVJccWKTAcRl7yqqRUeFrMI2XpMIGOqUBNNwQo0CiibuiLNWn7KSt4%2Fx4qggJhyFTidqaG1H6d%2Bcqi%2FRf3OyAn7TCb03F5dpMd1OM2ueuyP8U4EzMWc42U7myrGWypgZPrBPN9f0evzvPv9Nfd%2BooMAfAMyHI%2Bf9k9qhFn80IWIN7hIpB6O2c6z97pbQNG49TjJrSTmIho%2BoIK9d7C5Fj884rdBe2uzX50hYgMwseIzn4vW7AjNUBz%2FeoKhl2&X-Amz-Signature=6b03de2f05d5e442f2d463363cf62e493a536122d3e8a8d37704150eb25d19a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V7HNWLD%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T051056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuzSlECFU9ezY4ZcHMYYG%2Fl1uWDdqYOOpYh8hUipnKrAIgN9fOqIdHsl%2FY9lw%2Ft9ZHg0MFmlBbVj%2BBXi%2Bt6zwhRDYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZB5%2FN24N0quqCtSyrcAxRq5eRoyG7hajcv30Ri6tHohZdqn8b%2FC1E975ejP3gfIS9m8vS7ms1%2BeyYVnYxOAHCAkRQEda%2F9Trj0HXSllmMJ8VVy8VZk8IW62eHv6okdnyIsDyGD5Qkz2IEi1JhDRFOAxRpmSPb5cxceErM%2FQzvUl5zo0jiLIJNab5ivkFn1VegyqaWJv4xn9jAozH%2F17qtQPZi6ndJPXUYUT4YQlJ7mEHz1GxhSwDWFfJ%2Fu94V6vHLZ%2F3J%2FsKxDQ4fUjRCmAvZr8%2FMYgFJGINOjtfVqjOV4ugY2Wvd2HqQM8LKB8PIvxkFYPkedFbkyQM8MyLP70VrS5opb%2FS2XRTjNmmx3pIP5nkNHM%2BcIYVPO1PC7JQgD2UN1e74Vy3bEhdsmzdihP%2F%2FV66eTJ%2FR97IN0OeI7iOPOr9KfTRjV7pkkJaekfc2TZLKzV3iXmzHbQeLKdiYiz%2BR8yTFF3KLmeyBVkdwbJExIejMLgtDSul3reTXyhnoVMaW2YL6XzSfnoavDQ9Hc%2BQeNhHNvO0xMxb%2FN50%2BN4pnvSZekz8DwQWr7TkzJdSSqYRbrbXNocf5xUChxUhkDBZwQCJs58B7iYmft5Jmrq7fOF24WAgy3gDJzrWIqVJccWKTAcRl7yqqRUeFrMI2XpMIGOqUBNNwQo0CiibuiLNWn7KSt4%2Fx4qggJhyFTidqaG1H6d%2Bcqi%2FRf3OyAn7TCb03F5dpMd1OM2ueuyP8U4EzMWc42U7myrGWypgZPrBPN9f0evzvPv9Nfd%2BooMAfAMyHI%2Bf9k9qhFn80IWIN7hIpB6O2c6z97pbQNG49TjJrSTmIho%2BoIK9d7C5Fj884rdBe2uzX50hYgMwseIzn4vW7AjNUBz%2FeoKhl2&X-Amz-Signature=3f9c784e4f3d78e69371c820053629576acf375d21995b8f084dccbce706f95b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667V7HNWLD%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T051056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuzSlECFU9ezY4ZcHMYYG%2Fl1uWDdqYOOpYh8hUipnKrAIgN9fOqIdHsl%2FY9lw%2Ft9ZHg0MFmlBbVj%2BBXi%2Bt6zwhRDYqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZB5%2FN24N0quqCtSyrcAxRq5eRoyG7hajcv30Ri6tHohZdqn8b%2FC1E975ejP3gfIS9m8vS7ms1%2BeyYVnYxOAHCAkRQEda%2F9Trj0HXSllmMJ8VVy8VZk8IW62eHv6okdnyIsDyGD5Qkz2IEi1JhDRFOAxRpmSPb5cxceErM%2FQzvUl5zo0jiLIJNab5ivkFn1VegyqaWJv4xn9jAozH%2F17qtQPZi6ndJPXUYUT4YQlJ7mEHz1GxhSwDWFfJ%2Fu94V6vHLZ%2F3J%2FsKxDQ4fUjRCmAvZr8%2FMYgFJGINOjtfVqjOV4ugY2Wvd2HqQM8LKB8PIvxkFYPkedFbkyQM8MyLP70VrS5opb%2FS2XRTjNmmx3pIP5nkNHM%2BcIYVPO1PC7JQgD2UN1e74Vy3bEhdsmzdihP%2F%2FV66eTJ%2FR97IN0OeI7iOPOr9KfTRjV7pkkJaekfc2TZLKzV3iXmzHbQeLKdiYiz%2BR8yTFF3KLmeyBVkdwbJExIejMLgtDSul3reTXyhnoVMaW2YL6XzSfnoavDQ9Hc%2BQeNhHNvO0xMxb%2FN50%2BN4pnvSZekz8DwQWr7TkzJdSSqYRbrbXNocf5xUChxUhkDBZwQCJs58B7iYmft5Jmrq7fOF24WAgy3gDJzrWIqVJccWKTAcRl7yqqRUeFrMI2XpMIGOqUBNNwQo0CiibuiLNWn7KSt4%2Fx4qggJhyFTidqaG1H6d%2Bcqi%2FRf3OyAn7TCb03F5dpMd1OM2ueuyP8U4EzMWc42U7myrGWypgZPrBPN9f0evzvPv9Nfd%2BooMAfAMyHI%2Bf9k9qhFn80IWIN7hIpB6O2c6z97pbQNG49TjJrSTmIho%2BoIK9d7C5Fj884rdBe2uzX50hYgMwseIzn4vW7AjNUBz%2FeoKhl2&X-Amz-Signature=4f563ab08c07d016f8e8aeef3f54e959c45407d5d7d44b9f18694f854af392d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
