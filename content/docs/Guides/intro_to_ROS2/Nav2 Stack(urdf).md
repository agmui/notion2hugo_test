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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBUWAXXI%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T081123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDuMhFrZB7UBZuszW3jOaFoYnHxVnB56UipWkc0Nd6A9gIgE4RIrwUii2Ti4SXTkQthjpNBSXVo%2B0dJ3aUIcZMCnCMqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQ2JSZzbx8WkuMd0yrcA3v6n%2BCH2AW2yYOh2IFetydnUuAXVaeP4MpKQdLPviba49qvyfk6E9W63ih%2B8ZnGdpwsuiWjMmTZvPqQoWDgVSA3bGl3UpOiGXLxPvVcfoTtH0gM9j04OMG4KXzCbpnJleGHqhSC6QLfhUaFt8X%2F7WlR7IMP3GOLpE%2BGjwuX9Pv1nwchmsXJV5n1IH49jyj704WfZAx2mW5nippOgg9hINGpEFkotIZEoOV4w%2Bo54IG4CUEZeiXA2ewFIpziSe8lA4zChk5GBv3guyciqdHxTM4kPTKe1JlBbjRt7wsgxeai4M2THmwq0QG0%2B1wedOPO%2FdwD9x9XjlBXXlwlUIcQlaiGUlIq1%2BWUpB1PfVaOzus0LuJuaOdMrBcAe8WiWDWRSbghtyettCTqPwXqSDGjHWBkPRK23SgpGHMNiB5O4CnwPmFCMOneVJytTILnxDlitcj8eKXNXe2%2BLRkV3c4g473SkK%2FmbZARIBn4h2LrnZNdXhhlw12gDRkONse0yUKu6Gw7WBbdI4bvgjw0vmc2mCuCucataPyoPNP4FFmJKVAAZoPDRt3vM1TcGdr0qxbL2HeSZaG64YVOkPY2KN%2BrW4wk1JIe5KYkGxn8zlWGwLQhxojSc3gxmMJsKG7IMMq59L4GOqUBI%2BhdjwsifzOmcRcOobdeq5uTXdv46%2FmpLHIReifXc1Fnhe7E%2BPLh%2Fs5ypq1RNR9HCssNKsCE%2FlUAFwrKe4w2AJoVJZAAidpucnpqgy3tXVQsX9SAdeaxHiPTRuohPm8u5nypaV3b094AIE6Kp0st7Qo9g5e4Df%2BahOnB1GiYaEmmXaJ%2Fj5nxfy09sY8hsEv%2BPh8ND8vrgvRrjix5o3r2msugk53h&X-Amz-Signature=afbb4cd52c2c718f56e0572392c0162c74969c1fec06204b3d0e482d9842a680&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBUWAXXI%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T081123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDuMhFrZB7UBZuszW3jOaFoYnHxVnB56UipWkc0Nd6A9gIgE4RIrwUii2Ti4SXTkQthjpNBSXVo%2B0dJ3aUIcZMCnCMqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQ2JSZzbx8WkuMd0yrcA3v6n%2BCH2AW2yYOh2IFetydnUuAXVaeP4MpKQdLPviba49qvyfk6E9W63ih%2B8ZnGdpwsuiWjMmTZvPqQoWDgVSA3bGl3UpOiGXLxPvVcfoTtH0gM9j04OMG4KXzCbpnJleGHqhSC6QLfhUaFt8X%2F7WlR7IMP3GOLpE%2BGjwuX9Pv1nwchmsXJV5n1IH49jyj704WfZAx2mW5nippOgg9hINGpEFkotIZEoOV4w%2Bo54IG4CUEZeiXA2ewFIpziSe8lA4zChk5GBv3guyciqdHxTM4kPTKe1JlBbjRt7wsgxeai4M2THmwq0QG0%2B1wedOPO%2FdwD9x9XjlBXXlwlUIcQlaiGUlIq1%2BWUpB1PfVaOzus0LuJuaOdMrBcAe8WiWDWRSbghtyettCTqPwXqSDGjHWBkPRK23SgpGHMNiB5O4CnwPmFCMOneVJytTILnxDlitcj8eKXNXe2%2BLRkV3c4g473SkK%2FmbZARIBn4h2LrnZNdXhhlw12gDRkONse0yUKu6Gw7WBbdI4bvgjw0vmc2mCuCucataPyoPNP4FFmJKVAAZoPDRt3vM1TcGdr0qxbL2HeSZaG64YVOkPY2KN%2BrW4wk1JIe5KYkGxn8zlWGwLQhxojSc3gxmMJsKG7IMMq59L4GOqUBI%2BhdjwsifzOmcRcOobdeq5uTXdv46%2FmpLHIReifXc1Fnhe7E%2BPLh%2Fs5ypq1RNR9HCssNKsCE%2FlUAFwrKe4w2AJoVJZAAidpucnpqgy3tXVQsX9SAdeaxHiPTRuohPm8u5nypaV3b094AIE6Kp0st7Qo9g5e4Df%2BahOnB1GiYaEmmXaJ%2Fj5nxfy09sY8hsEv%2BPh8ND8vrgvRrjix5o3r2msugk53h&X-Amz-Signature=7b7205c39f0ce4a9f9fbab373b8b7dad4f3a3c9e5b8ebd7adbd2339aa46e6c4d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBUWAXXI%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T081123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDuMhFrZB7UBZuszW3jOaFoYnHxVnB56UipWkc0Nd6A9gIgE4RIrwUii2Ti4SXTkQthjpNBSXVo%2B0dJ3aUIcZMCnCMqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQ2JSZzbx8WkuMd0yrcA3v6n%2BCH2AW2yYOh2IFetydnUuAXVaeP4MpKQdLPviba49qvyfk6E9W63ih%2B8ZnGdpwsuiWjMmTZvPqQoWDgVSA3bGl3UpOiGXLxPvVcfoTtH0gM9j04OMG4KXzCbpnJleGHqhSC6QLfhUaFt8X%2F7WlR7IMP3GOLpE%2BGjwuX9Pv1nwchmsXJV5n1IH49jyj704WfZAx2mW5nippOgg9hINGpEFkotIZEoOV4w%2Bo54IG4CUEZeiXA2ewFIpziSe8lA4zChk5GBv3guyciqdHxTM4kPTKe1JlBbjRt7wsgxeai4M2THmwq0QG0%2B1wedOPO%2FdwD9x9XjlBXXlwlUIcQlaiGUlIq1%2BWUpB1PfVaOzus0LuJuaOdMrBcAe8WiWDWRSbghtyettCTqPwXqSDGjHWBkPRK23SgpGHMNiB5O4CnwPmFCMOneVJytTILnxDlitcj8eKXNXe2%2BLRkV3c4g473SkK%2FmbZARIBn4h2LrnZNdXhhlw12gDRkONse0yUKu6Gw7WBbdI4bvgjw0vmc2mCuCucataPyoPNP4FFmJKVAAZoPDRt3vM1TcGdr0qxbL2HeSZaG64YVOkPY2KN%2BrW4wk1JIe5KYkGxn8zlWGwLQhxojSc3gxmMJsKG7IMMq59L4GOqUBI%2BhdjwsifzOmcRcOobdeq5uTXdv46%2FmpLHIReifXc1Fnhe7E%2BPLh%2Fs5ypq1RNR9HCssNKsCE%2FlUAFwrKe4w2AJoVJZAAidpucnpqgy3tXVQsX9SAdeaxHiPTRuohPm8u5nypaV3b094AIE6Kp0st7Qo9g5e4Df%2BahOnB1GiYaEmmXaJ%2Fj5nxfy09sY8hsEv%2BPh8ND8vrgvRrjix5o3r2msugk53h&X-Amz-Signature=8931f8f18d5cafa09286177b99c1e9999ca6c95504e0a7c4f8e66f9f86ca63e8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBUWAXXI%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T081123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDuMhFrZB7UBZuszW3jOaFoYnHxVnB56UipWkc0Nd6A9gIgE4RIrwUii2Ti4SXTkQthjpNBSXVo%2B0dJ3aUIcZMCnCMqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQ2JSZzbx8WkuMd0yrcA3v6n%2BCH2AW2yYOh2IFetydnUuAXVaeP4MpKQdLPviba49qvyfk6E9W63ih%2B8ZnGdpwsuiWjMmTZvPqQoWDgVSA3bGl3UpOiGXLxPvVcfoTtH0gM9j04OMG4KXzCbpnJleGHqhSC6QLfhUaFt8X%2F7WlR7IMP3GOLpE%2BGjwuX9Pv1nwchmsXJV5n1IH49jyj704WfZAx2mW5nippOgg9hINGpEFkotIZEoOV4w%2Bo54IG4CUEZeiXA2ewFIpziSe8lA4zChk5GBv3guyciqdHxTM4kPTKe1JlBbjRt7wsgxeai4M2THmwq0QG0%2B1wedOPO%2FdwD9x9XjlBXXlwlUIcQlaiGUlIq1%2BWUpB1PfVaOzus0LuJuaOdMrBcAe8WiWDWRSbghtyettCTqPwXqSDGjHWBkPRK23SgpGHMNiB5O4CnwPmFCMOneVJytTILnxDlitcj8eKXNXe2%2BLRkV3c4g473SkK%2FmbZARIBn4h2LrnZNdXhhlw12gDRkONse0yUKu6Gw7WBbdI4bvgjw0vmc2mCuCucataPyoPNP4FFmJKVAAZoPDRt3vM1TcGdr0qxbL2HeSZaG64YVOkPY2KN%2BrW4wk1JIe5KYkGxn8zlWGwLQhxojSc3gxmMJsKG7IMMq59L4GOqUBI%2BhdjwsifzOmcRcOobdeq5uTXdv46%2FmpLHIReifXc1Fnhe7E%2BPLh%2Fs5ypq1RNR9HCssNKsCE%2FlUAFwrKe4w2AJoVJZAAidpucnpqgy3tXVQsX9SAdeaxHiPTRuohPm8u5nypaV3b094AIE6Kp0st7Qo9g5e4Df%2BahOnB1GiYaEmmXaJ%2Fj5nxfy09sY8hsEv%2BPh8ND8vrgvRrjix5o3r2msugk53h&X-Amz-Signature=bfcde1d551234602a25262f78443b2caf776406ec1644e89ab513219c55eadf2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBUWAXXI%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T081123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDuMhFrZB7UBZuszW3jOaFoYnHxVnB56UipWkc0Nd6A9gIgE4RIrwUii2Ti4SXTkQthjpNBSXVo%2B0dJ3aUIcZMCnCMqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQ2JSZzbx8WkuMd0yrcA3v6n%2BCH2AW2yYOh2IFetydnUuAXVaeP4MpKQdLPviba49qvyfk6E9W63ih%2B8ZnGdpwsuiWjMmTZvPqQoWDgVSA3bGl3UpOiGXLxPvVcfoTtH0gM9j04OMG4KXzCbpnJleGHqhSC6QLfhUaFt8X%2F7WlR7IMP3GOLpE%2BGjwuX9Pv1nwchmsXJV5n1IH49jyj704WfZAx2mW5nippOgg9hINGpEFkotIZEoOV4w%2Bo54IG4CUEZeiXA2ewFIpziSe8lA4zChk5GBv3guyciqdHxTM4kPTKe1JlBbjRt7wsgxeai4M2THmwq0QG0%2B1wedOPO%2FdwD9x9XjlBXXlwlUIcQlaiGUlIq1%2BWUpB1PfVaOzus0LuJuaOdMrBcAe8WiWDWRSbghtyettCTqPwXqSDGjHWBkPRK23SgpGHMNiB5O4CnwPmFCMOneVJytTILnxDlitcj8eKXNXe2%2BLRkV3c4g473SkK%2FmbZARIBn4h2LrnZNdXhhlw12gDRkONse0yUKu6Gw7WBbdI4bvgjw0vmc2mCuCucataPyoPNP4FFmJKVAAZoPDRt3vM1TcGdr0qxbL2HeSZaG64YVOkPY2KN%2BrW4wk1JIe5KYkGxn8zlWGwLQhxojSc3gxmMJsKG7IMMq59L4GOqUBI%2BhdjwsifzOmcRcOobdeq5uTXdv46%2FmpLHIReifXc1Fnhe7E%2BPLh%2Fs5ypq1RNR9HCssNKsCE%2FlUAFwrKe4w2AJoVJZAAidpucnpqgy3tXVQsX9SAdeaxHiPTRuohPm8u5nypaV3b094AIE6Kp0st7Qo9g5e4Df%2BahOnB1GiYaEmmXaJ%2Fj5nxfy09sY8hsEv%2BPh8ND8vrgvRrjix5o3r2msugk53h&X-Amz-Signature=83f4d2527c1161508f5c9b2d6979f2158f13b16dc5a68219b3815af3dcef0882&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBUWAXXI%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T081123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDuMhFrZB7UBZuszW3jOaFoYnHxVnB56UipWkc0Nd6A9gIgE4RIrwUii2Ti4SXTkQthjpNBSXVo%2B0dJ3aUIcZMCnCMqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGQ2JSZzbx8WkuMd0yrcA3v6n%2BCH2AW2yYOh2IFetydnUuAXVaeP4MpKQdLPviba49qvyfk6E9W63ih%2B8ZnGdpwsuiWjMmTZvPqQoWDgVSA3bGl3UpOiGXLxPvVcfoTtH0gM9j04OMG4KXzCbpnJleGHqhSC6QLfhUaFt8X%2F7WlR7IMP3GOLpE%2BGjwuX9Pv1nwchmsXJV5n1IH49jyj704WfZAx2mW5nippOgg9hINGpEFkotIZEoOV4w%2Bo54IG4CUEZeiXA2ewFIpziSe8lA4zChk5GBv3guyciqdHxTM4kPTKe1JlBbjRt7wsgxeai4M2THmwq0QG0%2B1wedOPO%2FdwD9x9XjlBXXlwlUIcQlaiGUlIq1%2BWUpB1PfVaOzus0LuJuaOdMrBcAe8WiWDWRSbghtyettCTqPwXqSDGjHWBkPRK23SgpGHMNiB5O4CnwPmFCMOneVJytTILnxDlitcj8eKXNXe2%2BLRkV3c4g473SkK%2FmbZARIBn4h2LrnZNdXhhlw12gDRkONse0yUKu6Gw7WBbdI4bvgjw0vmc2mCuCucataPyoPNP4FFmJKVAAZoPDRt3vM1TcGdr0qxbL2HeSZaG64YVOkPY2KN%2BrW4wk1JIe5KYkGxn8zlWGwLQhxojSc3gxmMJsKG7IMMq59L4GOqUBI%2BhdjwsifzOmcRcOobdeq5uTXdv46%2FmpLHIReifXc1Fnhe7E%2BPLh%2Fs5ypq1RNR9HCssNKsCE%2FlUAFwrKe4w2AJoVJZAAidpucnpqgy3tXVQsX9SAdeaxHiPTRuohPm8u5nypaV3b094AIE6Kp0st7Qo9g5e4Df%2BahOnB1GiYaEmmXaJ%2Fj5nxfy09sY8hsEv%2BPh8ND8vrgvRrjix5o3r2msugk53h&X-Amz-Signature=9fdaad8dbd4f426805318dcac0ad03de10c4d4ecd783b02df1aa6f4d0d3f3562&X-Amz-SignedHeaders=host&x-id=GetObject)
