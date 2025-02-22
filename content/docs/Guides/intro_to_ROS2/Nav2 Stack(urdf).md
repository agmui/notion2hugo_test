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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHQ5N4R6%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T220239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUY4apNWdOjAthdCz8QFHgtG3otXizWROrr3aIcfSNcAiEArY6OzbUTLWfjcQQmjltCt7eKpUqusdvJhREwE6OL1fAqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BpTFc4TO%2FUdFIpqSrcA9XG10oRzZmQ6338Nm%2BupHCRkpUTpusStUEDVDBWob75NxiiYL4%2FqCDbxs1yuw0gr7mPxSQKf7uh1F5txestnlmNmP5BU6TfS%2B2dRviDHB7yxySB29HcFQMfdXzt1lhVk%2Fbwh9GwbB17by%2BEaHBF51N9bIfH%2Fk2060EVhG82UnUNdfx96qt9B7ZGX9t%2FFuf8jd6goNXpuTiNbGbd9oLm6pRCyy%2FhE06lVP0IgR1Br3dKfXYZXOfJFZOviGxQrRK2hybjfC1UStbbK1h8v1TlDnFgeAw4nCZGVdGA%2FBzZEffvJ8CPnZGPgG9xx3n85qwuhjoYfvbye1rviwpFOPYrZmKDMgGiYjs3l1OeFwKpnITrXLeEUgdwInAyg1XmhCt7PuzQ%2F6uX%2BcRVSjvL3cR085ouDNc5PYb%2F2VO3pE7YkpU7AgAxzAN9xPXwN9oOJ2lebfLUW7LNjPhoYRQsqH%2BYg0ZzwYcwX2S31FoicJsgNH7zGvd%2Bi%2BxU86B5mhjQVrEpUEP3jigd4rXwkbLGgCB%2BrPiTMfaUHNnq66hIzWqHuo0Cb36DbhBmQPmoEiUADbmm1MCxbVMm2%2FUdpYO6cNv8WpYjk%2Fn%2BHZwqNZETaAW%2BHs2xvHfsNOzbbnBH7Fh%2FMOOH6L0GOqUBFANa74taO%2FdFFJoXNXfOtu1hgeNL3TRo77s1CUUo5qTO3iX7u54fc9GEAYo%2F4bxzLqrcqGyqa6T1OHZq3GlO2Qj%2FGeZ%2B91Vp4AbHUE85MLoxZwPqiCYSzk%2B0fM92AgD3VnxKrHiBd7EXRMB9VsmM%2FaZmk6vEMJOuSR1Ip90kBoC6gGOeT6iwEQlfBlHEC4y4k0o6clm4tqmKjnmA4vVJ70OEHBci&X-Amz-Signature=82a64c176a63c5e2f594c2571deffcbe44c3002ae1da2d77b18fcd208aff8792&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHQ5N4R6%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T220239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUY4apNWdOjAthdCz8QFHgtG3otXizWROrr3aIcfSNcAiEArY6OzbUTLWfjcQQmjltCt7eKpUqusdvJhREwE6OL1fAqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BpTFc4TO%2FUdFIpqSrcA9XG10oRzZmQ6338Nm%2BupHCRkpUTpusStUEDVDBWob75NxiiYL4%2FqCDbxs1yuw0gr7mPxSQKf7uh1F5txestnlmNmP5BU6TfS%2B2dRviDHB7yxySB29HcFQMfdXzt1lhVk%2Fbwh9GwbB17by%2BEaHBF51N9bIfH%2Fk2060EVhG82UnUNdfx96qt9B7ZGX9t%2FFuf8jd6goNXpuTiNbGbd9oLm6pRCyy%2FhE06lVP0IgR1Br3dKfXYZXOfJFZOviGxQrRK2hybjfC1UStbbK1h8v1TlDnFgeAw4nCZGVdGA%2FBzZEffvJ8CPnZGPgG9xx3n85qwuhjoYfvbye1rviwpFOPYrZmKDMgGiYjs3l1OeFwKpnITrXLeEUgdwInAyg1XmhCt7PuzQ%2F6uX%2BcRVSjvL3cR085ouDNc5PYb%2F2VO3pE7YkpU7AgAxzAN9xPXwN9oOJ2lebfLUW7LNjPhoYRQsqH%2BYg0ZzwYcwX2S31FoicJsgNH7zGvd%2Bi%2BxU86B5mhjQVrEpUEP3jigd4rXwkbLGgCB%2BrPiTMfaUHNnq66hIzWqHuo0Cb36DbhBmQPmoEiUADbmm1MCxbVMm2%2FUdpYO6cNv8WpYjk%2Fn%2BHZwqNZETaAW%2BHs2xvHfsNOzbbnBH7Fh%2FMOOH6L0GOqUBFANa74taO%2FdFFJoXNXfOtu1hgeNL3TRo77s1CUUo5qTO3iX7u54fc9GEAYo%2F4bxzLqrcqGyqa6T1OHZq3GlO2Qj%2FGeZ%2B91Vp4AbHUE85MLoxZwPqiCYSzk%2B0fM92AgD3VnxKrHiBd7EXRMB9VsmM%2FaZmk6vEMJOuSR1Ip90kBoC6gGOeT6iwEQlfBlHEC4y4k0o6clm4tqmKjnmA4vVJ70OEHBci&X-Amz-Signature=1febe9bfd376fa37fa359d89f4076df75528825a2aef2323a759a1601d8a355f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHQ5N4R6%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T220239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUY4apNWdOjAthdCz8QFHgtG3otXizWROrr3aIcfSNcAiEArY6OzbUTLWfjcQQmjltCt7eKpUqusdvJhREwE6OL1fAqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BpTFc4TO%2FUdFIpqSrcA9XG10oRzZmQ6338Nm%2BupHCRkpUTpusStUEDVDBWob75NxiiYL4%2FqCDbxs1yuw0gr7mPxSQKf7uh1F5txestnlmNmP5BU6TfS%2B2dRviDHB7yxySB29HcFQMfdXzt1lhVk%2Fbwh9GwbB17by%2BEaHBF51N9bIfH%2Fk2060EVhG82UnUNdfx96qt9B7ZGX9t%2FFuf8jd6goNXpuTiNbGbd9oLm6pRCyy%2FhE06lVP0IgR1Br3dKfXYZXOfJFZOviGxQrRK2hybjfC1UStbbK1h8v1TlDnFgeAw4nCZGVdGA%2FBzZEffvJ8CPnZGPgG9xx3n85qwuhjoYfvbye1rviwpFOPYrZmKDMgGiYjs3l1OeFwKpnITrXLeEUgdwInAyg1XmhCt7PuzQ%2F6uX%2BcRVSjvL3cR085ouDNc5PYb%2F2VO3pE7YkpU7AgAxzAN9xPXwN9oOJ2lebfLUW7LNjPhoYRQsqH%2BYg0ZzwYcwX2S31FoicJsgNH7zGvd%2Bi%2BxU86B5mhjQVrEpUEP3jigd4rXwkbLGgCB%2BrPiTMfaUHNnq66hIzWqHuo0Cb36DbhBmQPmoEiUADbmm1MCxbVMm2%2FUdpYO6cNv8WpYjk%2Fn%2BHZwqNZETaAW%2BHs2xvHfsNOzbbnBH7Fh%2FMOOH6L0GOqUBFANa74taO%2FdFFJoXNXfOtu1hgeNL3TRo77s1CUUo5qTO3iX7u54fc9GEAYo%2F4bxzLqrcqGyqa6T1OHZq3GlO2Qj%2FGeZ%2B91Vp4AbHUE85MLoxZwPqiCYSzk%2B0fM92AgD3VnxKrHiBd7EXRMB9VsmM%2FaZmk6vEMJOuSR1Ip90kBoC6gGOeT6iwEQlfBlHEC4y4k0o6clm4tqmKjnmA4vVJ70OEHBci&X-Amz-Signature=b3b72553b9046d269e363e3cb68ba9943c81dcf5265467add65e9bf79cd29189&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHQ5N4R6%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T220239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUY4apNWdOjAthdCz8QFHgtG3otXizWROrr3aIcfSNcAiEArY6OzbUTLWfjcQQmjltCt7eKpUqusdvJhREwE6OL1fAqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BpTFc4TO%2FUdFIpqSrcA9XG10oRzZmQ6338Nm%2BupHCRkpUTpusStUEDVDBWob75NxiiYL4%2FqCDbxs1yuw0gr7mPxSQKf7uh1F5txestnlmNmP5BU6TfS%2B2dRviDHB7yxySB29HcFQMfdXzt1lhVk%2Fbwh9GwbB17by%2BEaHBF51N9bIfH%2Fk2060EVhG82UnUNdfx96qt9B7ZGX9t%2FFuf8jd6goNXpuTiNbGbd9oLm6pRCyy%2FhE06lVP0IgR1Br3dKfXYZXOfJFZOviGxQrRK2hybjfC1UStbbK1h8v1TlDnFgeAw4nCZGVdGA%2FBzZEffvJ8CPnZGPgG9xx3n85qwuhjoYfvbye1rviwpFOPYrZmKDMgGiYjs3l1OeFwKpnITrXLeEUgdwInAyg1XmhCt7PuzQ%2F6uX%2BcRVSjvL3cR085ouDNc5PYb%2F2VO3pE7YkpU7AgAxzAN9xPXwN9oOJ2lebfLUW7LNjPhoYRQsqH%2BYg0ZzwYcwX2S31FoicJsgNH7zGvd%2Bi%2BxU86B5mhjQVrEpUEP3jigd4rXwkbLGgCB%2BrPiTMfaUHNnq66hIzWqHuo0Cb36DbhBmQPmoEiUADbmm1MCxbVMm2%2FUdpYO6cNv8WpYjk%2Fn%2BHZwqNZETaAW%2BHs2xvHfsNOzbbnBH7Fh%2FMOOH6L0GOqUBFANa74taO%2FdFFJoXNXfOtu1hgeNL3TRo77s1CUUo5qTO3iX7u54fc9GEAYo%2F4bxzLqrcqGyqa6T1OHZq3GlO2Qj%2FGeZ%2B91Vp4AbHUE85MLoxZwPqiCYSzk%2B0fM92AgD3VnxKrHiBd7EXRMB9VsmM%2FaZmk6vEMJOuSR1Ip90kBoC6gGOeT6iwEQlfBlHEC4y4k0o6clm4tqmKjnmA4vVJ70OEHBci&X-Amz-Signature=d6a448b92a1ce52f66b9987d54cd9da0d896a17089f271d2b5db9f44618e9dd9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHQ5N4R6%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T220239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUY4apNWdOjAthdCz8QFHgtG3otXizWROrr3aIcfSNcAiEArY6OzbUTLWfjcQQmjltCt7eKpUqusdvJhREwE6OL1fAqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BpTFc4TO%2FUdFIpqSrcA9XG10oRzZmQ6338Nm%2BupHCRkpUTpusStUEDVDBWob75NxiiYL4%2FqCDbxs1yuw0gr7mPxSQKf7uh1F5txestnlmNmP5BU6TfS%2B2dRviDHB7yxySB29HcFQMfdXzt1lhVk%2Fbwh9GwbB17by%2BEaHBF51N9bIfH%2Fk2060EVhG82UnUNdfx96qt9B7ZGX9t%2FFuf8jd6goNXpuTiNbGbd9oLm6pRCyy%2FhE06lVP0IgR1Br3dKfXYZXOfJFZOviGxQrRK2hybjfC1UStbbK1h8v1TlDnFgeAw4nCZGVdGA%2FBzZEffvJ8CPnZGPgG9xx3n85qwuhjoYfvbye1rviwpFOPYrZmKDMgGiYjs3l1OeFwKpnITrXLeEUgdwInAyg1XmhCt7PuzQ%2F6uX%2BcRVSjvL3cR085ouDNc5PYb%2F2VO3pE7YkpU7AgAxzAN9xPXwN9oOJ2lebfLUW7LNjPhoYRQsqH%2BYg0ZzwYcwX2S31FoicJsgNH7zGvd%2Bi%2BxU86B5mhjQVrEpUEP3jigd4rXwkbLGgCB%2BrPiTMfaUHNnq66hIzWqHuo0Cb36DbhBmQPmoEiUADbmm1MCxbVMm2%2FUdpYO6cNv8WpYjk%2Fn%2BHZwqNZETaAW%2BHs2xvHfsNOzbbnBH7Fh%2FMOOH6L0GOqUBFANa74taO%2FdFFJoXNXfOtu1hgeNL3TRo77s1CUUo5qTO3iX7u54fc9GEAYo%2F4bxzLqrcqGyqa6T1OHZq3GlO2Qj%2FGeZ%2B91Vp4AbHUE85MLoxZwPqiCYSzk%2B0fM92AgD3VnxKrHiBd7EXRMB9VsmM%2FaZmk6vEMJOuSR1Ip90kBoC6gGOeT6iwEQlfBlHEC4y4k0o6clm4tqmKjnmA4vVJ70OEHBci&X-Amz-Signature=52240002bc672ebe6cd281832aad4ac2ba1d850ceb1aaafc46be670f21ce2e37&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHQ5N4R6%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T220239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUY4apNWdOjAthdCz8QFHgtG3otXizWROrr3aIcfSNcAiEArY6OzbUTLWfjcQQmjltCt7eKpUqusdvJhREwE6OL1fAqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2BpTFc4TO%2FUdFIpqSrcA9XG10oRzZmQ6338Nm%2BupHCRkpUTpusStUEDVDBWob75NxiiYL4%2FqCDbxs1yuw0gr7mPxSQKf7uh1F5txestnlmNmP5BU6TfS%2B2dRviDHB7yxySB29HcFQMfdXzt1lhVk%2Fbwh9GwbB17by%2BEaHBF51N9bIfH%2Fk2060EVhG82UnUNdfx96qt9B7ZGX9t%2FFuf8jd6goNXpuTiNbGbd9oLm6pRCyy%2FhE06lVP0IgR1Br3dKfXYZXOfJFZOviGxQrRK2hybjfC1UStbbK1h8v1TlDnFgeAw4nCZGVdGA%2FBzZEffvJ8CPnZGPgG9xx3n85qwuhjoYfvbye1rviwpFOPYrZmKDMgGiYjs3l1OeFwKpnITrXLeEUgdwInAyg1XmhCt7PuzQ%2F6uX%2BcRVSjvL3cR085ouDNc5PYb%2F2VO3pE7YkpU7AgAxzAN9xPXwN9oOJ2lebfLUW7LNjPhoYRQsqH%2BYg0ZzwYcwX2S31FoicJsgNH7zGvd%2Bi%2BxU86B5mhjQVrEpUEP3jigd4rXwkbLGgCB%2BrPiTMfaUHNnq66hIzWqHuo0Cb36DbhBmQPmoEiUADbmm1MCxbVMm2%2FUdpYO6cNv8WpYjk%2Fn%2BHZwqNZETaAW%2BHs2xvHfsNOzbbnBH7Fh%2FMOOH6L0GOqUBFANa74taO%2FdFFJoXNXfOtu1hgeNL3TRo77s1CUUo5qTO3iX7u54fc9GEAYo%2F4bxzLqrcqGyqa6T1OHZq3GlO2Qj%2FGeZ%2B91Vp4AbHUE85MLoxZwPqiCYSzk%2B0fM92AgD3VnxKrHiBd7EXRMB9VsmM%2FaZmk6vEMJOuSR1Ip90kBoC6gGOeT6iwEQlfBlHEC4y4k0o6clm4tqmKjnmA4vVJ70OEHBci&X-Amz-Signature=5927a8f0329d50c458d87b9a1df2fc3c91d4f62ef7dc0450a84d26e1889d4948&X-Amz-SignedHeaders=host&x-id=GetObject)
