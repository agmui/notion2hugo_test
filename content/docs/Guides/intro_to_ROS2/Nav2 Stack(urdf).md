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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEOVUP5A%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T100745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCY%2FMUR9VzimXydvVADM0yGjiW2IUGfVhewec0JZKW5WAIgdEI6HouJAPj3MXLoOu0XRbTogLIodtfQgigUrDxX6ewqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAD%2F7djOlvj1GMsB%2BircA%2BdVqg%2BJQxBaD7qX2oxwZZVacvfJNDZe1c08oQGsrgGgReZc89gkZHv04SHDJd0YAA5Es9AXmb6Wjn6mt%2Fe0QoioWNE%2B3bhEFjTQhZDrB8pJv7EwNSkfWJvICqqCqg4O%2FhrZ1%2FpycXt6ZcWJ8nlmHReWOQctZTDRvUdVzfn6C6GfGd0QxTQUXX1Hlv1IMAN2VTngeVo8jqBtGSHWlKBY7No8EHm4rvuSL9ww1c9%2Ffot5CS0YGSxBurv9SGbWfklLQFGfhPi9vX%2BrgYO5Ik2xIzCvOr92yC6xhzToYoTrJs%2FUCXXTxJOi%2BA%2FiQqgj%2BDiWf1BmsZz8w3FYG0UkV5etPMWbxSr4aZOqUlAMXTCSupiV%2BjNaVfvUt5yOC7JdrB7YegV3wsYgwCGWTY8jQi21HIVTD8Snxgj%2FU20UToqw8s17gVKanIPqmBhcPM9LqbraCRrGXsKDGQchB58ZTx8Dbl2S4%2Bht0rrdGqsWn5k4ZJpxPdG8YH1J1Jp%2BI%2F5GFqIXHB0tcovcbK7u8l9ry2%2FvqpjHxzENQneD5fjU%2FYHCcYifepoXzKVutCM7WiYcHPd6m0VEyTKHw0GDL%2F%2FDfUT37ralQgGBhknH22gAuGJqtbZxKfXR1zkk7Kx8Uq4YMJKn6L8GOqUByDlwVzR4wzE2Vm%2BO19PX%2FgHZayHF1XdZqUtD9t2N4%2FCtoDmgRj4DEf5Bdpmt75K5PsK8egjGdpAkxTeX%2F8RcIIMFgrm3aksy66047eWAbTf9yOweme0RYhZTe%2F%2FMIlDMUleANYfuOQbncC4rFwc15%2FSjuAED0frJ6gzg1ptgeO4j18P1LXirP1x30x65wgCb1OSx62bn38fpgCoJdy5q4g0RkpSe&X-Amz-Signature=403bcb849e5547c26093ba92251e4e544a4901d58106a29a258c0bba692de9a2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEOVUP5A%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T100745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCY%2FMUR9VzimXydvVADM0yGjiW2IUGfVhewec0JZKW5WAIgdEI6HouJAPj3MXLoOu0XRbTogLIodtfQgigUrDxX6ewqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAD%2F7djOlvj1GMsB%2BircA%2BdVqg%2BJQxBaD7qX2oxwZZVacvfJNDZe1c08oQGsrgGgReZc89gkZHv04SHDJd0YAA5Es9AXmb6Wjn6mt%2Fe0QoioWNE%2B3bhEFjTQhZDrB8pJv7EwNSkfWJvICqqCqg4O%2FhrZ1%2FpycXt6ZcWJ8nlmHReWOQctZTDRvUdVzfn6C6GfGd0QxTQUXX1Hlv1IMAN2VTngeVo8jqBtGSHWlKBY7No8EHm4rvuSL9ww1c9%2Ffot5CS0YGSxBurv9SGbWfklLQFGfhPi9vX%2BrgYO5Ik2xIzCvOr92yC6xhzToYoTrJs%2FUCXXTxJOi%2BA%2FiQqgj%2BDiWf1BmsZz8w3FYG0UkV5etPMWbxSr4aZOqUlAMXTCSupiV%2BjNaVfvUt5yOC7JdrB7YegV3wsYgwCGWTY8jQi21HIVTD8Snxgj%2FU20UToqw8s17gVKanIPqmBhcPM9LqbraCRrGXsKDGQchB58ZTx8Dbl2S4%2Bht0rrdGqsWn5k4ZJpxPdG8YH1J1Jp%2BI%2F5GFqIXHB0tcovcbK7u8l9ry2%2FvqpjHxzENQneD5fjU%2FYHCcYifepoXzKVutCM7WiYcHPd6m0VEyTKHw0GDL%2F%2FDfUT37ralQgGBhknH22gAuGJqtbZxKfXR1zkk7Kx8Uq4YMJKn6L8GOqUByDlwVzR4wzE2Vm%2BO19PX%2FgHZayHF1XdZqUtD9t2N4%2FCtoDmgRj4DEf5Bdpmt75K5PsK8egjGdpAkxTeX%2F8RcIIMFgrm3aksy66047eWAbTf9yOweme0RYhZTe%2F%2FMIlDMUleANYfuOQbncC4rFwc15%2FSjuAED0frJ6gzg1ptgeO4j18P1LXirP1x30x65wgCb1OSx62bn38fpgCoJdy5q4g0RkpSe&X-Amz-Signature=ae0849901edae878d470300ab85f7e6df241d935bc4f23c1c57cfcf13acd2b67&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEOVUP5A%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T100745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCY%2FMUR9VzimXydvVADM0yGjiW2IUGfVhewec0JZKW5WAIgdEI6HouJAPj3MXLoOu0XRbTogLIodtfQgigUrDxX6ewqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAD%2F7djOlvj1GMsB%2BircA%2BdVqg%2BJQxBaD7qX2oxwZZVacvfJNDZe1c08oQGsrgGgReZc89gkZHv04SHDJd0YAA5Es9AXmb6Wjn6mt%2Fe0QoioWNE%2B3bhEFjTQhZDrB8pJv7EwNSkfWJvICqqCqg4O%2FhrZ1%2FpycXt6ZcWJ8nlmHReWOQctZTDRvUdVzfn6C6GfGd0QxTQUXX1Hlv1IMAN2VTngeVo8jqBtGSHWlKBY7No8EHm4rvuSL9ww1c9%2Ffot5CS0YGSxBurv9SGbWfklLQFGfhPi9vX%2BrgYO5Ik2xIzCvOr92yC6xhzToYoTrJs%2FUCXXTxJOi%2BA%2FiQqgj%2BDiWf1BmsZz8w3FYG0UkV5etPMWbxSr4aZOqUlAMXTCSupiV%2BjNaVfvUt5yOC7JdrB7YegV3wsYgwCGWTY8jQi21HIVTD8Snxgj%2FU20UToqw8s17gVKanIPqmBhcPM9LqbraCRrGXsKDGQchB58ZTx8Dbl2S4%2Bht0rrdGqsWn5k4ZJpxPdG8YH1J1Jp%2BI%2F5GFqIXHB0tcovcbK7u8l9ry2%2FvqpjHxzENQneD5fjU%2FYHCcYifepoXzKVutCM7WiYcHPd6m0VEyTKHw0GDL%2F%2FDfUT37ralQgGBhknH22gAuGJqtbZxKfXR1zkk7Kx8Uq4YMJKn6L8GOqUByDlwVzR4wzE2Vm%2BO19PX%2FgHZayHF1XdZqUtD9t2N4%2FCtoDmgRj4DEf5Bdpmt75K5PsK8egjGdpAkxTeX%2F8RcIIMFgrm3aksy66047eWAbTf9yOweme0RYhZTe%2F%2FMIlDMUleANYfuOQbncC4rFwc15%2FSjuAED0frJ6gzg1ptgeO4j18P1LXirP1x30x65wgCb1OSx62bn38fpgCoJdy5q4g0RkpSe&X-Amz-Signature=e789e1a0bcb6031126beb554685269bb0ea311b4e64e1ddbe28e3069323f8a1e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEOVUP5A%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T100745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCY%2FMUR9VzimXydvVADM0yGjiW2IUGfVhewec0JZKW5WAIgdEI6HouJAPj3MXLoOu0XRbTogLIodtfQgigUrDxX6ewqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAD%2F7djOlvj1GMsB%2BircA%2BdVqg%2BJQxBaD7qX2oxwZZVacvfJNDZe1c08oQGsrgGgReZc89gkZHv04SHDJd0YAA5Es9AXmb6Wjn6mt%2Fe0QoioWNE%2B3bhEFjTQhZDrB8pJv7EwNSkfWJvICqqCqg4O%2FhrZ1%2FpycXt6ZcWJ8nlmHReWOQctZTDRvUdVzfn6C6GfGd0QxTQUXX1Hlv1IMAN2VTngeVo8jqBtGSHWlKBY7No8EHm4rvuSL9ww1c9%2Ffot5CS0YGSxBurv9SGbWfklLQFGfhPi9vX%2BrgYO5Ik2xIzCvOr92yC6xhzToYoTrJs%2FUCXXTxJOi%2BA%2FiQqgj%2BDiWf1BmsZz8w3FYG0UkV5etPMWbxSr4aZOqUlAMXTCSupiV%2BjNaVfvUt5yOC7JdrB7YegV3wsYgwCGWTY8jQi21HIVTD8Snxgj%2FU20UToqw8s17gVKanIPqmBhcPM9LqbraCRrGXsKDGQchB58ZTx8Dbl2S4%2Bht0rrdGqsWn5k4ZJpxPdG8YH1J1Jp%2BI%2F5GFqIXHB0tcovcbK7u8l9ry2%2FvqpjHxzENQneD5fjU%2FYHCcYifepoXzKVutCM7WiYcHPd6m0VEyTKHw0GDL%2F%2FDfUT37ralQgGBhknH22gAuGJqtbZxKfXR1zkk7Kx8Uq4YMJKn6L8GOqUByDlwVzR4wzE2Vm%2BO19PX%2FgHZayHF1XdZqUtD9t2N4%2FCtoDmgRj4DEf5Bdpmt75K5PsK8egjGdpAkxTeX%2F8RcIIMFgrm3aksy66047eWAbTf9yOweme0RYhZTe%2F%2FMIlDMUleANYfuOQbncC4rFwc15%2FSjuAED0frJ6gzg1ptgeO4j18P1LXirP1x30x65wgCb1OSx62bn38fpgCoJdy5q4g0RkpSe&X-Amz-Signature=6e6e3ab85a2a2da4bef0f0a5645b39d76a5677447b75accf7a314fb797f78b07&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEOVUP5A%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T100745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCY%2FMUR9VzimXydvVADM0yGjiW2IUGfVhewec0JZKW5WAIgdEI6HouJAPj3MXLoOu0XRbTogLIodtfQgigUrDxX6ewqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAD%2F7djOlvj1GMsB%2BircA%2BdVqg%2BJQxBaD7qX2oxwZZVacvfJNDZe1c08oQGsrgGgReZc89gkZHv04SHDJd0YAA5Es9AXmb6Wjn6mt%2Fe0QoioWNE%2B3bhEFjTQhZDrB8pJv7EwNSkfWJvICqqCqg4O%2FhrZ1%2FpycXt6ZcWJ8nlmHReWOQctZTDRvUdVzfn6C6GfGd0QxTQUXX1Hlv1IMAN2VTngeVo8jqBtGSHWlKBY7No8EHm4rvuSL9ww1c9%2Ffot5CS0YGSxBurv9SGbWfklLQFGfhPi9vX%2BrgYO5Ik2xIzCvOr92yC6xhzToYoTrJs%2FUCXXTxJOi%2BA%2FiQqgj%2BDiWf1BmsZz8w3FYG0UkV5etPMWbxSr4aZOqUlAMXTCSupiV%2BjNaVfvUt5yOC7JdrB7YegV3wsYgwCGWTY8jQi21HIVTD8Snxgj%2FU20UToqw8s17gVKanIPqmBhcPM9LqbraCRrGXsKDGQchB58ZTx8Dbl2S4%2Bht0rrdGqsWn5k4ZJpxPdG8YH1J1Jp%2BI%2F5GFqIXHB0tcovcbK7u8l9ry2%2FvqpjHxzENQneD5fjU%2FYHCcYifepoXzKVutCM7WiYcHPd6m0VEyTKHw0GDL%2F%2FDfUT37ralQgGBhknH22gAuGJqtbZxKfXR1zkk7Kx8Uq4YMJKn6L8GOqUByDlwVzR4wzE2Vm%2BO19PX%2FgHZayHF1XdZqUtD9t2N4%2FCtoDmgRj4DEf5Bdpmt75K5PsK8egjGdpAkxTeX%2F8RcIIMFgrm3aksy66047eWAbTf9yOweme0RYhZTe%2F%2FMIlDMUleANYfuOQbncC4rFwc15%2FSjuAED0frJ6gzg1ptgeO4j18P1LXirP1x30x65wgCb1OSx62bn38fpgCoJdy5q4g0RkpSe&X-Amz-Signature=7ebf7a9847b4c6096ef2e2ef29e80ba5fca40b0eabca8b8a8e820324da761b30&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEOVUP5A%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T100745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCY%2FMUR9VzimXydvVADM0yGjiW2IUGfVhewec0JZKW5WAIgdEI6HouJAPj3MXLoOu0XRbTogLIodtfQgigUrDxX6ewqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAD%2F7djOlvj1GMsB%2BircA%2BdVqg%2BJQxBaD7qX2oxwZZVacvfJNDZe1c08oQGsrgGgReZc89gkZHv04SHDJd0YAA5Es9AXmb6Wjn6mt%2Fe0QoioWNE%2B3bhEFjTQhZDrB8pJv7EwNSkfWJvICqqCqg4O%2FhrZ1%2FpycXt6ZcWJ8nlmHReWOQctZTDRvUdVzfn6C6GfGd0QxTQUXX1Hlv1IMAN2VTngeVo8jqBtGSHWlKBY7No8EHm4rvuSL9ww1c9%2Ffot5CS0YGSxBurv9SGbWfklLQFGfhPi9vX%2BrgYO5Ik2xIzCvOr92yC6xhzToYoTrJs%2FUCXXTxJOi%2BA%2FiQqgj%2BDiWf1BmsZz8w3FYG0UkV5etPMWbxSr4aZOqUlAMXTCSupiV%2BjNaVfvUt5yOC7JdrB7YegV3wsYgwCGWTY8jQi21HIVTD8Snxgj%2FU20UToqw8s17gVKanIPqmBhcPM9LqbraCRrGXsKDGQchB58ZTx8Dbl2S4%2Bht0rrdGqsWn5k4ZJpxPdG8YH1J1Jp%2BI%2F5GFqIXHB0tcovcbK7u8l9ry2%2FvqpjHxzENQneD5fjU%2FYHCcYifepoXzKVutCM7WiYcHPd6m0VEyTKHw0GDL%2F%2FDfUT37ralQgGBhknH22gAuGJqtbZxKfXR1zkk7Kx8Uq4YMJKn6L8GOqUByDlwVzR4wzE2Vm%2BO19PX%2FgHZayHF1XdZqUtD9t2N4%2FCtoDmgRj4DEf5Bdpmt75K5PsK8egjGdpAkxTeX%2F8RcIIMFgrm3aksy66047eWAbTf9yOweme0RYhZTe%2F%2FMIlDMUleANYfuOQbncC4rFwc15%2FSjuAED0frJ6gzg1ptgeO4j18P1LXirP1x30x65wgCb1OSx62bn38fpgCoJdy5q4g0RkpSe&X-Amz-Signature=8960b32986ca434c6feb431be93d1cdc71e228a82c547628568ddcc9c7416462&X-Amz-SignedHeaders=host&x-id=GetObject)
