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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4ACYECU%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T042345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZw7K7hiT%2Bb7BUBW0wMvUSWCMjRHZ%2FnLnF%2FXWhMkRUzAiEAgSvua7t4HF0KlfeG92tUr38iU0IyZKxwYpFWLtJfn2oqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOZGwE9rJkESi%2B65ircA7kLIA5YD32A%2FuZB4SKnJgEB2GHCQCpk%2FUeM0YZtGGZmQfd86xVK%2F4wkc27qfdd26FqY3dHStDSypdIOhnXgwzgteMbv%2FqcPB1ABoDyzNNaj91FANq%2BOAX0debpJ%2BRRYIMO%2FO1r3uft5mEB5FliCrXgHNv8Rqv1xAEOrVATjModlmYQkkS23uj0ATmNX%2Fdno8UBDhpTG05SB0B%2B2%2BnaOgLy3Wx%2FC2FxnuJWYOZF9SINpLuzm8RcehUNSjphZNwE2LJ4rxf%2B%2Fw3CaUw2rqQb7lw33HifbRcsDx8z3eu0JnANzj%2F7ZPNdrZndFBa1WhWbCWveyWI0cKFe9SDPs%2FOCPbWE55laGj5%2FNWtZvTnEHJSoBBcLS7kN9%2FRMvt%2Br8ek%2FmSD1HS3RIoLkZcrftIU0gUjJE7ckaBN503G7K73iSCvUXm48wZOBtmxN6U0toaat6mHPFmOYPKXTUdEq%2FqOzm1m75Y4kO9LZkcw%2BnIOQat8%2BBJ9dKAHEb1BhEJjxnolAAU5duPdd25V2FwsT3njqeRZCPEpRYHLGYDauCf8cTQbGo%2FR9tjunmqSvwYmjqVxD%2BLk0Z201YngAceZqD0E8iJsifP29gAuFlvKvEXJn5dtKg7aIIDs2JchmEg25eMMLnh8MGOqUBIriGTnEeS%2BU04GIvTxnnZbAKefhiwkHUHMSyWP%2FS1etjP%2Fp1BHZz3itnQqzWropwhE5WNFMZO7uyG2qHlbSsmWm3sS97%2Byr8XPcKsgVm4inlCCADw2OjiHGmZ%2BkUDiRv%2FvH7Dbkne8MV7VRFRUwhpZq2vJv7Oura%2BtGlht445icP9yESXjrrte9xjq4pU8pWRXkesh6COf%2FTFOg2%2FidTQCIxL1o3&X-Amz-Signature=96c84656ece85370f104a8b3cf0bb6a8c59d8f482682501d44f7b4d1f0aa5ecf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4ACYECU%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T042344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZw7K7hiT%2Bb7BUBW0wMvUSWCMjRHZ%2FnLnF%2FXWhMkRUzAiEAgSvua7t4HF0KlfeG92tUr38iU0IyZKxwYpFWLtJfn2oqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOZGwE9rJkESi%2B65ircA7kLIA5YD32A%2FuZB4SKnJgEB2GHCQCpk%2FUeM0YZtGGZmQfd86xVK%2F4wkc27qfdd26FqY3dHStDSypdIOhnXgwzgteMbv%2FqcPB1ABoDyzNNaj91FANq%2BOAX0debpJ%2BRRYIMO%2FO1r3uft5mEB5FliCrXgHNv8Rqv1xAEOrVATjModlmYQkkS23uj0ATmNX%2Fdno8UBDhpTG05SB0B%2B2%2BnaOgLy3Wx%2FC2FxnuJWYOZF9SINpLuzm8RcehUNSjphZNwE2LJ4rxf%2B%2Fw3CaUw2rqQb7lw33HifbRcsDx8z3eu0JnANzj%2F7ZPNdrZndFBa1WhWbCWveyWI0cKFe9SDPs%2FOCPbWE55laGj5%2FNWtZvTnEHJSoBBcLS7kN9%2FRMvt%2Br8ek%2FmSD1HS3RIoLkZcrftIU0gUjJE7ckaBN503G7K73iSCvUXm48wZOBtmxN6U0toaat6mHPFmOYPKXTUdEq%2FqOzm1m75Y4kO9LZkcw%2BnIOQat8%2BBJ9dKAHEb1BhEJjxnolAAU5duPdd25V2FwsT3njqeRZCPEpRYHLGYDauCf8cTQbGo%2FR9tjunmqSvwYmjqVxD%2BLk0Z201YngAceZqD0E8iJsifP29gAuFlvKvEXJn5dtKg7aIIDs2JchmEg25eMMLnh8MGOqUBIriGTnEeS%2BU04GIvTxnnZbAKefhiwkHUHMSyWP%2FS1etjP%2Fp1BHZz3itnQqzWropwhE5WNFMZO7uyG2qHlbSsmWm3sS97%2Byr8XPcKsgVm4inlCCADw2OjiHGmZ%2BkUDiRv%2FvH7Dbkne8MV7VRFRUwhpZq2vJv7Oura%2BtGlht445icP9yESXjrrte9xjq4pU8pWRXkesh6COf%2FTFOg2%2FidTQCIxL1o3&X-Amz-Signature=8922cb52f9ffaa0bca4d9f4ff88a09a79307c2dd5d3db38c7aeb88eb7886770c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4ACYECU%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T042345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZw7K7hiT%2Bb7BUBW0wMvUSWCMjRHZ%2FnLnF%2FXWhMkRUzAiEAgSvua7t4HF0KlfeG92tUr38iU0IyZKxwYpFWLtJfn2oqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOZGwE9rJkESi%2B65ircA7kLIA5YD32A%2FuZB4SKnJgEB2GHCQCpk%2FUeM0YZtGGZmQfd86xVK%2F4wkc27qfdd26FqY3dHStDSypdIOhnXgwzgteMbv%2FqcPB1ABoDyzNNaj91FANq%2BOAX0debpJ%2BRRYIMO%2FO1r3uft5mEB5FliCrXgHNv8Rqv1xAEOrVATjModlmYQkkS23uj0ATmNX%2Fdno8UBDhpTG05SB0B%2B2%2BnaOgLy3Wx%2FC2FxnuJWYOZF9SINpLuzm8RcehUNSjphZNwE2LJ4rxf%2B%2Fw3CaUw2rqQb7lw33HifbRcsDx8z3eu0JnANzj%2F7ZPNdrZndFBa1WhWbCWveyWI0cKFe9SDPs%2FOCPbWE55laGj5%2FNWtZvTnEHJSoBBcLS7kN9%2FRMvt%2Br8ek%2FmSD1HS3RIoLkZcrftIU0gUjJE7ckaBN503G7K73iSCvUXm48wZOBtmxN6U0toaat6mHPFmOYPKXTUdEq%2FqOzm1m75Y4kO9LZkcw%2BnIOQat8%2BBJ9dKAHEb1BhEJjxnolAAU5duPdd25V2FwsT3njqeRZCPEpRYHLGYDauCf8cTQbGo%2FR9tjunmqSvwYmjqVxD%2BLk0Z201YngAceZqD0E8iJsifP29gAuFlvKvEXJn5dtKg7aIIDs2JchmEg25eMMLnh8MGOqUBIriGTnEeS%2BU04GIvTxnnZbAKefhiwkHUHMSyWP%2FS1etjP%2Fp1BHZz3itnQqzWropwhE5WNFMZO7uyG2qHlbSsmWm3sS97%2Byr8XPcKsgVm4inlCCADw2OjiHGmZ%2BkUDiRv%2FvH7Dbkne8MV7VRFRUwhpZq2vJv7Oura%2BtGlht445icP9yESXjrrte9xjq4pU8pWRXkesh6COf%2FTFOg2%2FidTQCIxL1o3&X-Amz-Signature=e3d0bb8205784063192a35cdf5208623c3385a750447ac5fc381c3796506e9c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4ACYECU%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T042345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZw7K7hiT%2Bb7BUBW0wMvUSWCMjRHZ%2FnLnF%2FXWhMkRUzAiEAgSvua7t4HF0KlfeG92tUr38iU0IyZKxwYpFWLtJfn2oqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOZGwE9rJkESi%2B65ircA7kLIA5YD32A%2FuZB4SKnJgEB2GHCQCpk%2FUeM0YZtGGZmQfd86xVK%2F4wkc27qfdd26FqY3dHStDSypdIOhnXgwzgteMbv%2FqcPB1ABoDyzNNaj91FANq%2BOAX0debpJ%2BRRYIMO%2FO1r3uft5mEB5FliCrXgHNv8Rqv1xAEOrVATjModlmYQkkS23uj0ATmNX%2Fdno8UBDhpTG05SB0B%2B2%2BnaOgLy3Wx%2FC2FxnuJWYOZF9SINpLuzm8RcehUNSjphZNwE2LJ4rxf%2B%2Fw3CaUw2rqQb7lw33HifbRcsDx8z3eu0JnANzj%2F7ZPNdrZndFBa1WhWbCWveyWI0cKFe9SDPs%2FOCPbWE55laGj5%2FNWtZvTnEHJSoBBcLS7kN9%2FRMvt%2Br8ek%2FmSD1HS3RIoLkZcrftIU0gUjJE7ckaBN503G7K73iSCvUXm48wZOBtmxN6U0toaat6mHPFmOYPKXTUdEq%2FqOzm1m75Y4kO9LZkcw%2BnIOQat8%2BBJ9dKAHEb1BhEJjxnolAAU5duPdd25V2FwsT3njqeRZCPEpRYHLGYDauCf8cTQbGo%2FR9tjunmqSvwYmjqVxD%2BLk0Z201YngAceZqD0E8iJsifP29gAuFlvKvEXJn5dtKg7aIIDs2JchmEg25eMMLnh8MGOqUBIriGTnEeS%2BU04GIvTxnnZbAKefhiwkHUHMSyWP%2FS1etjP%2Fp1BHZz3itnQqzWropwhE5WNFMZO7uyG2qHlbSsmWm3sS97%2Byr8XPcKsgVm4inlCCADw2OjiHGmZ%2BkUDiRv%2FvH7Dbkne8MV7VRFRUwhpZq2vJv7Oura%2BtGlht445icP9yESXjrrte9xjq4pU8pWRXkesh6COf%2FTFOg2%2FidTQCIxL1o3&X-Amz-Signature=b50908bf032a62fcda8c04390f24c864a8b1854de84a76ef148a2b38282da19d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4ACYECU%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T042345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZw7K7hiT%2Bb7BUBW0wMvUSWCMjRHZ%2FnLnF%2FXWhMkRUzAiEAgSvua7t4HF0KlfeG92tUr38iU0IyZKxwYpFWLtJfn2oqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOZGwE9rJkESi%2B65ircA7kLIA5YD32A%2FuZB4SKnJgEB2GHCQCpk%2FUeM0YZtGGZmQfd86xVK%2F4wkc27qfdd26FqY3dHStDSypdIOhnXgwzgteMbv%2FqcPB1ABoDyzNNaj91FANq%2BOAX0debpJ%2BRRYIMO%2FO1r3uft5mEB5FliCrXgHNv8Rqv1xAEOrVATjModlmYQkkS23uj0ATmNX%2Fdno8UBDhpTG05SB0B%2B2%2BnaOgLy3Wx%2FC2FxnuJWYOZF9SINpLuzm8RcehUNSjphZNwE2LJ4rxf%2B%2Fw3CaUw2rqQb7lw33HifbRcsDx8z3eu0JnANzj%2F7ZPNdrZndFBa1WhWbCWveyWI0cKFe9SDPs%2FOCPbWE55laGj5%2FNWtZvTnEHJSoBBcLS7kN9%2FRMvt%2Br8ek%2FmSD1HS3RIoLkZcrftIU0gUjJE7ckaBN503G7K73iSCvUXm48wZOBtmxN6U0toaat6mHPFmOYPKXTUdEq%2FqOzm1m75Y4kO9LZkcw%2BnIOQat8%2BBJ9dKAHEb1BhEJjxnolAAU5duPdd25V2FwsT3njqeRZCPEpRYHLGYDauCf8cTQbGo%2FR9tjunmqSvwYmjqVxD%2BLk0Z201YngAceZqD0E8iJsifP29gAuFlvKvEXJn5dtKg7aIIDs2JchmEg25eMMLnh8MGOqUBIriGTnEeS%2BU04GIvTxnnZbAKefhiwkHUHMSyWP%2FS1etjP%2Fp1BHZz3itnQqzWropwhE5WNFMZO7uyG2qHlbSsmWm3sS97%2Byr8XPcKsgVm4inlCCADw2OjiHGmZ%2BkUDiRv%2FvH7Dbkne8MV7VRFRUwhpZq2vJv7Oura%2BtGlht445icP9yESXjrrte9xjq4pU8pWRXkesh6COf%2FTFOg2%2FidTQCIxL1o3&X-Amz-Signature=63b519e5e63e87abccd9dc389ee19b83836d9fa50b5ca894b797d35bb74d53d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4ACYECU%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T042345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZw7K7hiT%2Bb7BUBW0wMvUSWCMjRHZ%2FnLnF%2FXWhMkRUzAiEAgSvua7t4HF0KlfeG92tUr38iU0IyZKxwYpFWLtJfn2oqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIOZGwE9rJkESi%2B65ircA7kLIA5YD32A%2FuZB4SKnJgEB2GHCQCpk%2FUeM0YZtGGZmQfd86xVK%2F4wkc27qfdd26FqY3dHStDSypdIOhnXgwzgteMbv%2FqcPB1ABoDyzNNaj91FANq%2BOAX0debpJ%2BRRYIMO%2FO1r3uft5mEB5FliCrXgHNv8Rqv1xAEOrVATjModlmYQkkS23uj0ATmNX%2Fdno8UBDhpTG05SB0B%2B2%2BnaOgLy3Wx%2FC2FxnuJWYOZF9SINpLuzm8RcehUNSjphZNwE2LJ4rxf%2B%2Fw3CaUw2rqQb7lw33HifbRcsDx8z3eu0JnANzj%2F7ZPNdrZndFBa1WhWbCWveyWI0cKFe9SDPs%2FOCPbWE55laGj5%2FNWtZvTnEHJSoBBcLS7kN9%2FRMvt%2Br8ek%2FmSD1HS3RIoLkZcrftIU0gUjJE7ckaBN503G7K73iSCvUXm48wZOBtmxN6U0toaat6mHPFmOYPKXTUdEq%2FqOzm1m75Y4kO9LZkcw%2BnIOQat8%2BBJ9dKAHEb1BhEJjxnolAAU5duPdd25V2FwsT3njqeRZCPEpRYHLGYDauCf8cTQbGo%2FR9tjunmqSvwYmjqVxD%2BLk0Z201YngAceZqD0E8iJsifP29gAuFlvKvEXJn5dtKg7aIIDs2JchmEg25eMMLnh8MGOqUBIriGTnEeS%2BU04GIvTxnnZbAKefhiwkHUHMSyWP%2FS1etjP%2Fp1BHZz3itnQqzWropwhE5WNFMZO7uyG2qHlbSsmWm3sS97%2Byr8XPcKsgVm4inlCCADw2OjiHGmZ%2BkUDiRv%2FvH7Dbkne8MV7VRFRUwhpZq2vJv7Oura%2BtGlht445icP9yESXjrrte9xjq4pU8pWRXkesh6COf%2FTFOg2%2FidTQCIxL1o3&X-Amz-Signature=e1fb8e9d378b134113ba2316b82ac809b00ba3347a26eb585764b5b537a927a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
