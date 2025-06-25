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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LLFCLVX%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T100953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDWZ1uqgQdfBBDsaTZ6zROIdpiOTYG%2BBK73Ri9Lw63O3gIhAOBAm5yAlQ0hp8sJedQ%2BMf1vFDrAiUCyQT6Tv%2BAP%2BYZgKv8DCEMQABoMNjM3NDIzMTgzODA1IgxT17ibGoRrcY4bWWwq3ANfu7pZVuOiBsscl5k39Z52lhvp7CdbAsjjPI0ocN9kdXEWB68x0%2F3j7doPkyWKrkiWOSPiwM6xlb%2FvYV6E08jKuUS8ZJnzsyL%2BXRtEi%2BmTjMaKm2eZz3b45rpWzD4juVwBPcMhwyWPHneMUHsMICeHd9txzeTiC85HQjLkprsuJodlI0hCcKZnNEMmv5UW8tBLpRqjR1VPvnR8cW2RoHYIK5%2Fw%2F6p1sA0NhbvUBhu6g0bxLj3CEXyn%2BNpzDKYssmvZmxy9fRNUvmUAhDUYYAaAxXzlisvp0Fi1wSXHn8S0MDpB5S7XbGVLDmN2UKRl0VnOkyqDFGztb3aJe8AqREK5ZdCn5LBO2jLSw1fKyRKGDCMyEM5FRYY7MEe0jkXMVVuQFnGEgbZrQydL3U42wnpoQioV%2FXbE95PJcTpntGlYnw%2FwOPo1jTwmX0CNul83CQ%2FHiJ0mQW9n0lbMl2O%2BM8h%2FJcdL4G49HyCgFL5JZh3Ni1gnj5Xa4T5PtFSBvHptw%2BTcf%2FQS1exw0OLPp8fj9eSvkL0sdhEPWlmQBuFu%2BhyW671%2BCe7IrX7Ygyl%2BHjI3fojCrDcrrJfSredPwkXzJGPQKrEtn1wPU5Rxq9V8%2FtTJi4bKitGZsEuVQOvvADD1j%2B%2FCBjqkATfZxcrtcdrnFdeqnklnqtGFZc7Dw%2BIwCgaMW34p6Qo2SJyYGdrKSgcT6GZecYmAcLr2WUNGTZ%2FKbAPAe39SOnQzOfKznVOlpOXzSHqxCQiPzRqegeRZV9YbHwI0sb%2BdNoFTWLmith9Rrnv847C6HJSNpV%2ByJ089q5tK4XRlGIzDpinUVFTopHS7zN%2FdxqQHsGvwa9f6mxz1TbKup0K%2F0Ar7VlS2&X-Amz-Signature=ef93152731ca8de97caba53786252c008e6c37a45cef95e4e5c517a333dd4f2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LLFCLVX%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T100953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDWZ1uqgQdfBBDsaTZ6zROIdpiOTYG%2BBK73Ri9Lw63O3gIhAOBAm5yAlQ0hp8sJedQ%2BMf1vFDrAiUCyQT6Tv%2BAP%2BYZgKv8DCEMQABoMNjM3NDIzMTgzODA1IgxT17ibGoRrcY4bWWwq3ANfu7pZVuOiBsscl5k39Z52lhvp7CdbAsjjPI0ocN9kdXEWB68x0%2F3j7doPkyWKrkiWOSPiwM6xlb%2FvYV6E08jKuUS8ZJnzsyL%2BXRtEi%2BmTjMaKm2eZz3b45rpWzD4juVwBPcMhwyWPHneMUHsMICeHd9txzeTiC85HQjLkprsuJodlI0hCcKZnNEMmv5UW8tBLpRqjR1VPvnR8cW2RoHYIK5%2Fw%2F6p1sA0NhbvUBhu6g0bxLj3CEXyn%2BNpzDKYssmvZmxy9fRNUvmUAhDUYYAaAxXzlisvp0Fi1wSXHn8S0MDpB5S7XbGVLDmN2UKRl0VnOkyqDFGztb3aJe8AqREK5ZdCn5LBO2jLSw1fKyRKGDCMyEM5FRYY7MEe0jkXMVVuQFnGEgbZrQydL3U42wnpoQioV%2FXbE95PJcTpntGlYnw%2FwOPo1jTwmX0CNul83CQ%2FHiJ0mQW9n0lbMl2O%2BM8h%2FJcdL4G49HyCgFL5JZh3Ni1gnj5Xa4T5PtFSBvHptw%2BTcf%2FQS1exw0OLPp8fj9eSvkL0sdhEPWlmQBuFu%2BhyW671%2BCe7IrX7Ygyl%2BHjI3fojCrDcrrJfSredPwkXzJGPQKrEtn1wPU5Rxq9V8%2FtTJi4bKitGZsEuVQOvvADD1j%2B%2FCBjqkATfZxcrtcdrnFdeqnklnqtGFZc7Dw%2BIwCgaMW34p6Qo2SJyYGdrKSgcT6GZecYmAcLr2WUNGTZ%2FKbAPAe39SOnQzOfKznVOlpOXzSHqxCQiPzRqegeRZV9YbHwI0sb%2BdNoFTWLmith9Rrnv847C6HJSNpV%2ByJ089q5tK4XRlGIzDpinUVFTopHS7zN%2FdxqQHsGvwa9f6mxz1TbKup0K%2F0Ar7VlS2&X-Amz-Signature=4a6c083174c5a320ecde1be9516adcbc03ddddaf75e0e521fcf55663a30c4c64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LLFCLVX%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T100953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDWZ1uqgQdfBBDsaTZ6zROIdpiOTYG%2BBK73Ri9Lw63O3gIhAOBAm5yAlQ0hp8sJedQ%2BMf1vFDrAiUCyQT6Tv%2BAP%2BYZgKv8DCEMQABoMNjM3NDIzMTgzODA1IgxT17ibGoRrcY4bWWwq3ANfu7pZVuOiBsscl5k39Z52lhvp7CdbAsjjPI0ocN9kdXEWB68x0%2F3j7doPkyWKrkiWOSPiwM6xlb%2FvYV6E08jKuUS8ZJnzsyL%2BXRtEi%2BmTjMaKm2eZz3b45rpWzD4juVwBPcMhwyWPHneMUHsMICeHd9txzeTiC85HQjLkprsuJodlI0hCcKZnNEMmv5UW8tBLpRqjR1VPvnR8cW2RoHYIK5%2Fw%2F6p1sA0NhbvUBhu6g0bxLj3CEXyn%2BNpzDKYssmvZmxy9fRNUvmUAhDUYYAaAxXzlisvp0Fi1wSXHn8S0MDpB5S7XbGVLDmN2UKRl0VnOkyqDFGztb3aJe8AqREK5ZdCn5LBO2jLSw1fKyRKGDCMyEM5FRYY7MEe0jkXMVVuQFnGEgbZrQydL3U42wnpoQioV%2FXbE95PJcTpntGlYnw%2FwOPo1jTwmX0CNul83CQ%2FHiJ0mQW9n0lbMl2O%2BM8h%2FJcdL4G49HyCgFL5JZh3Ni1gnj5Xa4T5PtFSBvHptw%2BTcf%2FQS1exw0OLPp8fj9eSvkL0sdhEPWlmQBuFu%2BhyW671%2BCe7IrX7Ygyl%2BHjI3fojCrDcrrJfSredPwkXzJGPQKrEtn1wPU5Rxq9V8%2FtTJi4bKitGZsEuVQOvvADD1j%2B%2FCBjqkATfZxcrtcdrnFdeqnklnqtGFZc7Dw%2BIwCgaMW34p6Qo2SJyYGdrKSgcT6GZecYmAcLr2WUNGTZ%2FKbAPAe39SOnQzOfKznVOlpOXzSHqxCQiPzRqegeRZV9YbHwI0sb%2BdNoFTWLmith9Rrnv847C6HJSNpV%2ByJ089q5tK4XRlGIzDpinUVFTopHS7zN%2FdxqQHsGvwa9f6mxz1TbKup0K%2F0Ar7VlS2&X-Amz-Signature=675687118441d463c273e3089d74b0e44191df25ffe89878dae2ee9296bc8a35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LLFCLVX%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T100953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDWZ1uqgQdfBBDsaTZ6zROIdpiOTYG%2BBK73Ri9Lw63O3gIhAOBAm5yAlQ0hp8sJedQ%2BMf1vFDrAiUCyQT6Tv%2BAP%2BYZgKv8DCEMQABoMNjM3NDIzMTgzODA1IgxT17ibGoRrcY4bWWwq3ANfu7pZVuOiBsscl5k39Z52lhvp7CdbAsjjPI0ocN9kdXEWB68x0%2F3j7doPkyWKrkiWOSPiwM6xlb%2FvYV6E08jKuUS8ZJnzsyL%2BXRtEi%2BmTjMaKm2eZz3b45rpWzD4juVwBPcMhwyWPHneMUHsMICeHd9txzeTiC85HQjLkprsuJodlI0hCcKZnNEMmv5UW8tBLpRqjR1VPvnR8cW2RoHYIK5%2Fw%2F6p1sA0NhbvUBhu6g0bxLj3CEXyn%2BNpzDKYssmvZmxy9fRNUvmUAhDUYYAaAxXzlisvp0Fi1wSXHn8S0MDpB5S7XbGVLDmN2UKRl0VnOkyqDFGztb3aJe8AqREK5ZdCn5LBO2jLSw1fKyRKGDCMyEM5FRYY7MEe0jkXMVVuQFnGEgbZrQydL3U42wnpoQioV%2FXbE95PJcTpntGlYnw%2FwOPo1jTwmX0CNul83CQ%2FHiJ0mQW9n0lbMl2O%2BM8h%2FJcdL4G49HyCgFL5JZh3Ni1gnj5Xa4T5PtFSBvHptw%2BTcf%2FQS1exw0OLPp8fj9eSvkL0sdhEPWlmQBuFu%2BhyW671%2BCe7IrX7Ygyl%2BHjI3fojCrDcrrJfSredPwkXzJGPQKrEtn1wPU5Rxq9V8%2FtTJi4bKitGZsEuVQOvvADD1j%2B%2FCBjqkATfZxcrtcdrnFdeqnklnqtGFZc7Dw%2BIwCgaMW34p6Qo2SJyYGdrKSgcT6GZecYmAcLr2WUNGTZ%2FKbAPAe39SOnQzOfKznVOlpOXzSHqxCQiPzRqegeRZV9YbHwI0sb%2BdNoFTWLmith9Rrnv847C6HJSNpV%2ByJ089q5tK4XRlGIzDpinUVFTopHS7zN%2FdxqQHsGvwa9f6mxz1TbKup0K%2F0Ar7VlS2&X-Amz-Signature=5de3e000e7ae2a6b83ffb6c0625b070c401f38fee73d517d32d4ab5c97bd9749&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LLFCLVX%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T100953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDWZ1uqgQdfBBDsaTZ6zROIdpiOTYG%2BBK73Ri9Lw63O3gIhAOBAm5yAlQ0hp8sJedQ%2BMf1vFDrAiUCyQT6Tv%2BAP%2BYZgKv8DCEMQABoMNjM3NDIzMTgzODA1IgxT17ibGoRrcY4bWWwq3ANfu7pZVuOiBsscl5k39Z52lhvp7CdbAsjjPI0ocN9kdXEWB68x0%2F3j7doPkyWKrkiWOSPiwM6xlb%2FvYV6E08jKuUS8ZJnzsyL%2BXRtEi%2BmTjMaKm2eZz3b45rpWzD4juVwBPcMhwyWPHneMUHsMICeHd9txzeTiC85HQjLkprsuJodlI0hCcKZnNEMmv5UW8tBLpRqjR1VPvnR8cW2RoHYIK5%2Fw%2F6p1sA0NhbvUBhu6g0bxLj3CEXyn%2BNpzDKYssmvZmxy9fRNUvmUAhDUYYAaAxXzlisvp0Fi1wSXHn8S0MDpB5S7XbGVLDmN2UKRl0VnOkyqDFGztb3aJe8AqREK5ZdCn5LBO2jLSw1fKyRKGDCMyEM5FRYY7MEe0jkXMVVuQFnGEgbZrQydL3U42wnpoQioV%2FXbE95PJcTpntGlYnw%2FwOPo1jTwmX0CNul83CQ%2FHiJ0mQW9n0lbMl2O%2BM8h%2FJcdL4G49HyCgFL5JZh3Ni1gnj5Xa4T5PtFSBvHptw%2BTcf%2FQS1exw0OLPp8fj9eSvkL0sdhEPWlmQBuFu%2BhyW671%2BCe7IrX7Ygyl%2BHjI3fojCrDcrrJfSredPwkXzJGPQKrEtn1wPU5Rxq9V8%2FtTJi4bKitGZsEuVQOvvADD1j%2B%2FCBjqkATfZxcrtcdrnFdeqnklnqtGFZc7Dw%2BIwCgaMW34p6Qo2SJyYGdrKSgcT6GZecYmAcLr2WUNGTZ%2FKbAPAe39SOnQzOfKznVOlpOXzSHqxCQiPzRqegeRZV9YbHwI0sb%2BdNoFTWLmith9Rrnv847C6HJSNpV%2ByJ089q5tK4XRlGIzDpinUVFTopHS7zN%2FdxqQHsGvwa9f6mxz1TbKup0K%2F0Ar7VlS2&X-Amz-Signature=ce0f2cfaaecb670177a2a248c6a3429d007e8dca5ecc1d89cee453f26759ad23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LLFCLVX%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T100953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQDWZ1uqgQdfBBDsaTZ6zROIdpiOTYG%2BBK73Ri9Lw63O3gIhAOBAm5yAlQ0hp8sJedQ%2BMf1vFDrAiUCyQT6Tv%2BAP%2BYZgKv8DCEMQABoMNjM3NDIzMTgzODA1IgxT17ibGoRrcY4bWWwq3ANfu7pZVuOiBsscl5k39Z52lhvp7CdbAsjjPI0ocN9kdXEWB68x0%2F3j7doPkyWKrkiWOSPiwM6xlb%2FvYV6E08jKuUS8ZJnzsyL%2BXRtEi%2BmTjMaKm2eZz3b45rpWzD4juVwBPcMhwyWPHneMUHsMICeHd9txzeTiC85HQjLkprsuJodlI0hCcKZnNEMmv5UW8tBLpRqjR1VPvnR8cW2RoHYIK5%2Fw%2F6p1sA0NhbvUBhu6g0bxLj3CEXyn%2BNpzDKYssmvZmxy9fRNUvmUAhDUYYAaAxXzlisvp0Fi1wSXHn8S0MDpB5S7XbGVLDmN2UKRl0VnOkyqDFGztb3aJe8AqREK5ZdCn5LBO2jLSw1fKyRKGDCMyEM5FRYY7MEe0jkXMVVuQFnGEgbZrQydL3U42wnpoQioV%2FXbE95PJcTpntGlYnw%2FwOPo1jTwmX0CNul83CQ%2FHiJ0mQW9n0lbMl2O%2BM8h%2FJcdL4G49HyCgFL5JZh3Ni1gnj5Xa4T5PtFSBvHptw%2BTcf%2FQS1exw0OLPp8fj9eSvkL0sdhEPWlmQBuFu%2BhyW671%2BCe7IrX7Ygyl%2BHjI3fojCrDcrrJfSredPwkXzJGPQKrEtn1wPU5Rxq9V8%2FtTJi4bKitGZsEuVQOvvADD1j%2B%2FCBjqkATfZxcrtcdrnFdeqnklnqtGFZc7Dw%2BIwCgaMW34p6Qo2SJyYGdrKSgcT6GZecYmAcLr2WUNGTZ%2FKbAPAe39SOnQzOfKznVOlpOXzSHqxCQiPzRqegeRZV9YbHwI0sb%2BdNoFTWLmith9Rrnv847C6HJSNpV%2ByJ089q5tK4XRlGIzDpinUVFTopHS7zN%2FdxqQHsGvwa9f6mxz1TbKup0K%2F0Ar7VlS2&X-Amz-Signature=ef11f186c46ea53f8b31a0ec170195ac70cee03709ebc40a0b2b9c90346f09a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
