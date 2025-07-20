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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNPMMWBY%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQblLg0RcWivGVK2QZs2loOG%2B1G7bHWYs6dfN6l5gJCAiEA2FFaodHYYmoo14AwiN6baf2ngTi8KFgRqC9%2Fi8Ct4oQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFlZsbRrp23GNT7MCrcAxxKFi%2F4JO%2Fi4GCgeotfjfslFlTdUtpQl%2F89aG2bw63xOnVovnhNnD62HxLuhYgF9YjYlwJ4o%2FsMluEB8PioSrwcVQfIwdYEqr913FUW3SYCS1WbOd0%2BUBNVqSwpQbVRO5REMcUo50KywZ34IjRxYWNhoKsDM3cChlEQWNdR8W1oGHeVTeMYGaKmauCvI8cFkc4U5aOwzlETvR%2F5vSnQWNDA1jq1UP0%2BIElMUBSFZrogY7j%2F6F3hkQ26DSYaZv9LcNPMb14qd8ojTVeNUttlk84%2FjoIFzRe%2B8WY7iBDHf1HC2dmmEVX8TNgPW7Q8NA3tHDckY3l94bTn9%2BIvXHPELwb9W53jwdDTZON3WYBmjxma5KX1%2Bx9rHPMTgotiYLyUMDtDMMmMsb8XbgExkSXDcgmF34L81sv1K5t0mozXVe91imBtZxaGstU0%2Bc43B2KMYMwgp%2FAUo1QoevhGZHzSHBt%2FrTBbrO5q%2BI9z9v8eujcaKYYX%2Fv5iXxiy8A0qwfauiHFGYL5pSyUSD2Ejs%2Bxho2%2BV0aaPVE3ww4EhSkdXdkI4xuf%2BAJtRKsCfAbLic45rrUsyuvqD%2BwgsK4Svs4d5P1XHusZRAaSUxI2u789aqysu2zp%2FO7viLsrDIjz%2FMIi88sMGOqUBG6VGQg4644YZ3jKl1hRBXMNxog4dtrs8UDApzAziLKO018Hh94V7Sp8vAaRZe45k3legg0dTJHMSM6KWUYYuHO0Emu4fRJCQ%2FvtkiEZHWCot7j5twc4d5Kqde3U0Rfd22Rm2JZH%2Btn5h8cXsj4chMdx%2B6VaLT3Vow5BntNeOQ5XRwpHkT3FTlZpzV3yQkL4eI%2BVaxVIRh5tk95qQYdExSt04r79b&X-Amz-Signature=a15be3e6f643caf1f3ef364d15702a18ae03e28eadb5ae20a2de95b309af5f85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNPMMWBY%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQblLg0RcWivGVK2QZs2loOG%2B1G7bHWYs6dfN6l5gJCAiEA2FFaodHYYmoo14AwiN6baf2ngTi8KFgRqC9%2Fi8Ct4oQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFlZsbRrp23GNT7MCrcAxxKFi%2F4JO%2Fi4GCgeotfjfslFlTdUtpQl%2F89aG2bw63xOnVovnhNnD62HxLuhYgF9YjYlwJ4o%2FsMluEB8PioSrwcVQfIwdYEqr913FUW3SYCS1WbOd0%2BUBNVqSwpQbVRO5REMcUo50KywZ34IjRxYWNhoKsDM3cChlEQWNdR8W1oGHeVTeMYGaKmauCvI8cFkc4U5aOwzlETvR%2F5vSnQWNDA1jq1UP0%2BIElMUBSFZrogY7j%2F6F3hkQ26DSYaZv9LcNPMb14qd8ojTVeNUttlk84%2FjoIFzRe%2B8WY7iBDHf1HC2dmmEVX8TNgPW7Q8NA3tHDckY3l94bTn9%2BIvXHPELwb9W53jwdDTZON3WYBmjxma5KX1%2Bx9rHPMTgotiYLyUMDtDMMmMsb8XbgExkSXDcgmF34L81sv1K5t0mozXVe91imBtZxaGstU0%2Bc43B2KMYMwgp%2FAUo1QoevhGZHzSHBt%2FrTBbrO5q%2BI9z9v8eujcaKYYX%2Fv5iXxiy8A0qwfauiHFGYL5pSyUSD2Ejs%2Bxho2%2BV0aaPVE3ww4EhSkdXdkI4xuf%2BAJtRKsCfAbLic45rrUsyuvqD%2BwgsK4Svs4d5P1XHusZRAaSUxI2u789aqysu2zp%2FO7viLsrDIjz%2FMIi88sMGOqUBG6VGQg4644YZ3jKl1hRBXMNxog4dtrs8UDApzAziLKO018Hh94V7Sp8vAaRZe45k3legg0dTJHMSM6KWUYYuHO0Emu4fRJCQ%2FvtkiEZHWCot7j5twc4d5Kqde3U0Rfd22Rm2JZH%2Btn5h8cXsj4chMdx%2B6VaLT3Vow5BntNeOQ5XRwpHkT3FTlZpzV3yQkL4eI%2BVaxVIRh5tk95qQYdExSt04r79b&X-Amz-Signature=12882afd22f8641a0d180062c7ee1b9a09a84334680b4757bf92f4f1a3c915e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNPMMWBY%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQblLg0RcWivGVK2QZs2loOG%2B1G7bHWYs6dfN6l5gJCAiEA2FFaodHYYmoo14AwiN6baf2ngTi8KFgRqC9%2Fi8Ct4oQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFlZsbRrp23GNT7MCrcAxxKFi%2F4JO%2Fi4GCgeotfjfslFlTdUtpQl%2F89aG2bw63xOnVovnhNnD62HxLuhYgF9YjYlwJ4o%2FsMluEB8PioSrwcVQfIwdYEqr913FUW3SYCS1WbOd0%2BUBNVqSwpQbVRO5REMcUo50KywZ34IjRxYWNhoKsDM3cChlEQWNdR8W1oGHeVTeMYGaKmauCvI8cFkc4U5aOwzlETvR%2F5vSnQWNDA1jq1UP0%2BIElMUBSFZrogY7j%2F6F3hkQ26DSYaZv9LcNPMb14qd8ojTVeNUttlk84%2FjoIFzRe%2B8WY7iBDHf1HC2dmmEVX8TNgPW7Q8NA3tHDckY3l94bTn9%2BIvXHPELwb9W53jwdDTZON3WYBmjxma5KX1%2Bx9rHPMTgotiYLyUMDtDMMmMsb8XbgExkSXDcgmF34L81sv1K5t0mozXVe91imBtZxaGstU0%2Bc43B2KMYMwgp%2FAUo1QoevhGZHzSHBt%2FrTBbrO5q%2BI9z9v8eujcaKYYX%2Fv5iXxiy8A0qwfauiHFGYL5pSyUSD2Ejs%2Bxho2%2BV0aaPVE3ww4EhSkdXdkI4xuf%2BAJtRKsCfAbLic45rrUsyuvqD%2BwgsK4Svs4d5P1XHusZRAaSUxI2u789aqysu2zp%2FO7viLsrDIjz%2FMIi88sMGOqUBG6VGQg4644YZ3jKl1hRBXMNxog4dtrs8UDApzAziLKO018Hh94V7Sp8vAaRZe45k3legg0dTJHMSM6KWUYYuHO0Emu4fRJCQ%2FvtkiEZHWCot7j5twc4d5Kqde3U0Rfd22Rm2JZH%2Btn5h8cXsj4chMdx%2B6VaLT3Vow5BntNeOQ5XRwpHkT3FTlZpzV3yQkL4eI%2BVaxVIRh5tk95qQYdExSt04r79b&X-Amz-Signature=49dd42579e8ef61bb6791dfdfe7404c07169b2553309035eec24a693dc60cb0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNPMMWBY%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQblLg0RcWivGVK2QZs2loOG%2B1G7bHWYs6dfN6l5gJCAiEA2FFaodHYYmoo14AwiN6baf2ngTi8KFgRqC9%2Fi8Ct4oQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFlZsbRrp23GNT7MCrcAxxKFi%2F4JO%2Fi4GCgeotfjfslFlTdUtpQl%2F89aG2bw63xOnVovnhNnD62HxLuhYgF9YjYlwJ4o%2FsMluEB8PioSrwcVQfIwdYEqr913FUW3SYCS1WbOd0%2BUBNVqSwpQbVRO5REMcUo50KywZ34IjRxYWNhoKsDM3cChlEQWNdR8W1oGHeVTeMYGaKmauCvI8cFkc4U5aOwzlETvR%2F5vSnQWNDA1jq1UP0%2BIElMUBSFZrogY7j%2F6F3hkQ26DSYaZv9LcNPMb14qd8ojTVeNUttlk84%2FjoIFzRe%2B8WY7iBDHf1HC2dmmEVX8TNgPW7Q8NA3tHDckY3l94bTn9%2BIvXHPELwb9W53jwdDTZON3WYBmjxma5KX1%2Bx9rHPMTgotiYLyUMDtDMMmMsb8XbgExkSXDcgmF34L81sv1K5t0mozXVe91imBtZxaGstU0%2Bc43B2KMYMwgp%2FAUo1QoevhGZHzSHBt%2FrTBbrO5q%2BI9z9v8eujcaKYYX%2Fv5iXxiy8A0qwfauiHFGYL5pSyUSD2Ejs%2Bxho2%2BV0aaPVE3ww4EhSkdXdkI4xuf%2BAJtRKsCfAbLic45rrUsyuvqD%2BwgsK4Svs4d5P1XHusZRAaSUxI2u789aqysu2zp%2FO7viLsrDIjz%2FMIi88sMGOqUBG6VGQg4644YZ3jKl1hRBXMNxog4dtrs8UDApzAziLKO018Hh94V7Sp8vAaRZe45k3legg0dTJHMSM6KWUYYuHO0Emu4fRJCQ%2FvtkiEZHWCot7j5twc4d5Kqde3U0Rfd22Rm2JZH%2Btn5h8cXsj4chMdx%2B6VaLT3Vow5BntNeOQ5XRwpHkT3FTlZpzV3yQkL4eI%2BVaxVIRh5tk95qQYdExSt04r79b&X-Amz-Signature=ed43b68fca95bd2c4ffd6d4f323f994321350078e3c55d31d567408166b03f97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNPMMWBY%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQblLg0RcWivGVK2QZs2loOG%2B1G7bHWYs6dfN6l5gJCAiEA2FFaodHYYmoo14AwiN6baf2ngTi8KFgRqC9%2Fi8Ct4oQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFlZsbRrp23GNT7MCrcAxxKFi%2F4JO%2Fi4GCgeotfjfslFlTdUtpQl%2F89aG2bw63xOnVovnhNnD62HxLuhYgF9YjYlwJ4o%2FsMluEB8PioSrwcVQfIwdYEqr913FUW3SYCS1WbOd0%2BUBNVqSwpQbVRO5REMcUo50KywZ34IjRxYWNhoKsDM3cChlEQWNdR8W1oGHeVTeMYGaKmauCvI8cFkc4U5aOwzlETvR%2F5vSnQWNDA1jq1UP0%2BIElMUBSFZrogY7j%2F6F3hkQ26DSYaZv9LcNPMb14qd8ojTVeNUttlk84%2FjoIFzRe%2B8WY7iBDHf1HC2dmmEVX8TNgPW7Q8NA3tHDckY3l94bTn9%2BIvXHPELwb9W53jwdDTZON3WYBmjxma5KX1%2Bx9rHPMTgotiYLyUMDtDMMmMsb8XbgExkSXDcgmF34L81sv1K5t0mozXVe91imBtZxaGstU0%2Bc43B2KMYMwgp%2FAUo1QoevhGZHzSHBt%2FrTBbrO5q%2BI9z9v8eujcaKYYX%2Fv5iXxiy8A0qwfauiHFGYL5pSyUSD2Ejs%2Bxho2%2BV0aaPVE3ww4EhSkdXdkI4xuf%2BAJtRKsCfAbLic45rrUsyuvqD%2BwgsK4Svs4d5P1XHusZRAaSUxI2u789aqysu2zp%2FO7viLsrDIjz%2FMIi88sMGOqUBG6VGQg4644YZ3jKl1hRBXMNxog4dtrs8UDApzAziLKO018Hh94V7Sp8vAaRZe45k3legg0dTJHMSM6KWUYYuHO0Emu4fRJCQ%2FvtkiEZHWCot7j5twc4d5Kqde3U0Rfd22Rm2JZH%2Btn5h8cXsj4chMdx%2B6VaLT3Vow5BntNeOQ5XRwpHkT3FTlZpzV3yQkL4eI%2BVaxVIRh5tk95qQYdExSt04r79b&X-Amz-Signature=382625238c70f95548e9064c40fa6bc91fcb89d3482bf98a26149f375b8d7506&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNPMMWBY%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T121525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEQblLg0RcWivGVK2QZs2loOG%2B1G7bHWYs6dfN6l5gJCAiEA2FFaodHYYmoo14AwiN6baf2ngTi8KFgRqC9%2Fi8Ct4oQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFlZsbRrp23GNT7MCrcAxxKFi%2F4JO%2Fi4GCgeotfjfslFlTdUtpQl%2F89aG2bw63xOnVovnhNnD62HxLuhYgF9YjYlwJ4o%2FsMluEB8PioSrwcVQfIwdYEqr913FUW3SYCS1WbOd0%2BUBNVqSwpQbVRO5REMcUo50KywZ34IjRxYWNhoKsDM3cChlEQWNdR8W1oGHeVTeMYGaKmauCvI8cFkc4U5aOwzlETvR%2F5vSnQWNDA1jq1UP0%2BIElMUBSFZrogY7j%2F6F3hkQ26DSYaZv9LcNPMb14qd8ojTVeNUttlk84%2FjoIFzRe%2B8WY7iBDHf1HC2dmmEVX8TNgPW7Q8NA3tHDckY3l94bTn9%2BIvXHPELwb9W53jwdDTZON3WYBmjxma5KX1%2Bx9rHPMTgotiYLyUMDtDMMmMsb8XbgExkSXDcgmF34L81sv1K5t0mozXVe91imBtZxaGstU0%2Bc43B2KMYMwgp%2FAUo1QoevhGZHzSHBt%2FrTBbrO5q%2BI9z9v8eujcaKYYX%2Fv5iXxiy8A0qwfauiHFGYL5pSyUSD2Ejs%2Bxho2%2BV0aaPVE3ww4EhSkdXdkI4xuf%2BAJtRKsCfAbLic45rrUsyuvqD%2BwgsK4Svs4d5P1XHusZRAaSUxI2u789aqysu2zp%2FO7viLsrDIjz%2FMIi88sMGOqUBG6VGQg4644YZ3jKl1hRBXMNxog4dtrs8UDApzAziLKO018Hh94V7Sp8vAaRZe45k3legg0dTJHMSM6KWUYYuHO0Emu4fRJCQ%2FvtkiEZHWCot7j5twc4d5Kqde3U0Rfd22Rm2JZH%2Btn5h8cXsj4chMdx%2B6VaLT3Vow5BntNeOQ5XRwpHkT3FTlZpzV3yQkL4eI%2BVaxVIRh5tk95qQYdExSt04r79b&X-Amz-Signature=19d3511617130582c45879dd9b445ba677bc9e33dcf4817ecc766f622d8874fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
