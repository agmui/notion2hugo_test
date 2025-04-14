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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJU7HEEG%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T190149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe37XkcKcMmQLRkMes4cwsGNR40penWXTLRO%2BDoMpokQIgLfHeuywOA6OtbTbrK1%2BGiyxojzuGONDeLHV10Whjr0Aq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHqNg7AUzsGssicsVyrcA%2BsJqBS7m5hSYdFyVKT1O8HemH0YXV51%2F0lgZb%2FCd7uWZCnJamx1F22jNTHxum0BaPmv94%2BfpmPPGRBSUpKItpJ9Xv%2By7nrwo1e02dm0cWwhfRTOXekvHLYiJuQfbdNLnPijFMP%2Fj3IQ6LMA29XevBrmSTMAUcxbc%2F4LPxNNvVdDWPEH9jnOgZnGxCfpG0krsUIpPxRDkm2P14mO2GBk1FIxuQR1KndWGTKCTa1LlwcIIqxmfQzzdB%2F4w1Ex9pNwG4YwT5qFowUb26wtQj58ZFTGRM87xOiJTbmhZDhyF1yqY%2Ba73edmzZrFv5rYSQ85LM9ZUQ%2Ffbgfz%2FlazIa0h9OTVBfsi%2FnsSUlUWPFt0UR0HR9ZVEEZiRIZQ8V1DJX86MRoU7W4kqvbqtsy9hg07%2B%2B%2Bz5MKCU3NrVM2RaE%2BQb4zwtolZL5mFP6CU5hUxsQr7AIY2wC%2F9ulcAnK6Fhr2Kc6DFQ6gWqMClf5ZCFzsI%2FZ3xcz%2BROL9tp%2BLGMZ38ZCZWHDyGMczdClB4EMa9x48a7qClPZt5gXugV8veDM1k0i73K19y9CDg7H9CvRr8mNddwu9T7EGYd6oJGoMKlTz3T3Do5uixZiqHOz03xlLBWRTNLnNM%2FAtOCyUqawJvMIWU9b8GOqUBwoLeNlwV%2FCdqaNhJJm2uN5EOlZMT%2B1S01C3WIbpi2B5T%2BXb2Kh1c8e5Sdkm3Gw0c6eB%2Bs2FbJ%2FjzoF6e6UUQKBUUZFfp0rDaCqK%2FUB0IgkXXCLPsrm6SCkQ2oZxPV8%2Bu%2BUnZfyHtyA1v9lmztthhOoNs9%2BDabShdIAZM6PBPXz7802f%2BwckH%2F5YbLiBRCsxSBsb3yNxr%2FKn1oFsCNTjAWTyl7zIY&X-Amz-Signature=853a4bcf460ec59e28d852ae93444c9575eeead15fd51875c19475eaf3bdfe7a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJU7HEEG%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T190149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe37XkcKcMmQLRkMes4cwsGNR40penWXTLRO%2BDoMpokQIgLfHeuywOA6OtbTbrK1%2BGiyxojzuGONDeLHV10Whjr0Aq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHqNg7AUzsGssicsVyrcA%2BsJqBS7m5hSYdFyVKT1O8HemH0YXV51%2F0lgZb%2FCd7uWZCnJamx1F22jNTHxum0BaPmv94%2BfpmPPGRBSUpKItpJ9Xv%2By7nrwo1e02dm0cWwhfRTOXekvHLYiJuQfbdNLnPijFMP%2Fj3IQ6LMA29XevBrmSTMAUcxbc%2F4LPxNNvVdDWPEH9jnOgZnGxCfpG0krsUIpPxRDkm2P14mO2GBk1FIxuQR1KndWGTKCTa1LlwcIIqxmfQzzdB%2F4w1Ex9pNwG4YwT5qFowUb26wtQj58ZFTGRM87xOiJTbmhZDhyF1yqY%2Ba73edmzZrFv5rYSQ85LM9ZUQ%2Ffbgfz%2FlazIa0h9OTVBfsi%2FnsSUlUWPFt0UR0HR9ZVEEZiRIZQ8V1DJX86MRoU7W4kqvbqtsy9hg07%2B%2B%2Bz5MKCU3NrVM2RaE%2BQb4zwtolZL5mFP6CU5hUxsQr7AIY2wC%2F9ulcAnK6Fhr2Kc6DFQ6gWqMClf5ZCFzsI%2FZ3xcz%2BROL9tp%2BLGMZ38ZCZWHDyGMczdClB4EMa9x48a7qClPZt5gXugV8veDM1k0i73K19y9CDg7H9CvRr8mNddwu9T7EGYd6oJGoMKlTz3T3Do5uixZiqHOz03xlLBWRTNLnNM%2FAtOCyUqawJvMIWU9b8GOqUBwoLeNlwV%2FCdqaNhJJm2uN5EOlZMT%2B1S01C3WIbpi2B5T%2BXb2Kh1c8e5Sdkm3Gw0c6eB%2Bs2FbJ%2FjzoF6e6UUQKBUUZFfp0rDaCqK%2FUB0IgkXXCLPsrm6SCkQ2oZxPV8%2Bu%2BUnZfyHtyA1v9lmztthhOoNs9%2BDabShdIAZM6PBPXz7802f%2BwckH%2F5YbLiBRCsxSBsb3yNxr%2FKn1oFsCNTjAWTyl7zIY&X-Amz-Signature=180b6d7c6107b233102489b3d457a94329953d099a847d910ca118f475bfec55&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJU7HEEG%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T190149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe37XkcKcMmQLRkMes4cwsGNR40penWXTLRO%2BDoMpokQIgLfHeuywOA6OtbTbrK1%2BGiyxojzuGONDeLHV10Whjr0Aq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHqNg7AUzsGssicsVyrcA%2BsJqBS7m5hSYdFyVKT1O8HemH0YXV51%2F0lgZb%2FCd7uWZCnJamx1F22jNTHxum0BaPmv94%2BfpmPPGRBSUpKItpJ9Xv%2By7nrwo1e02dm0cWwhfRTOXekvHLYiJuQfbdNLnPijFMP%2Fj3IQ6LMA29XevBrmSTMAUcxbc%2F4LPxNNvVdDWPEH9jnOgZnGxCfpG0krsUIpPxRDkm2P14mO2GBk1FIxuQR1KndWGTKCTa1LlwcIIqxmfQzzdB%2F4w1Ex9pNwG4YwT5qFowUb26wtQj58ZFTGRM87xOiJTbmhZDhyF1yqY%2Ba73edmzZrFv5rYSQ85LM9ZUQ%2Ffbgfz%2FlazIa0h9OTVBfsi%2FnsSUlUWPFt0UR0HR9ZVEEZiRIZQ8V1DJX86MRoU7W4kqvbqtsy9hg07%2B%2B%2Bz5MKCU3NrVM2RaE%2BQb4zwtolZL5mFP6CU5hUxsQr7AIY2wC%2F9ulcAnK6Fhr2Kc6DFQ6gWqMClf5ZCFzsI%2FZ3xcz%2BROL9tp%2BLGMZ38ZCZWHDyGMczdClB4EMa9x48a7qClPZt5gXugV8veDM1k0i73K19y9CDg7H9CvRr8mNddwu9T7EGYd6oJGoMKlTz3T3Do5uixZiqHOz03xlLBWRTNLnNM%2FAtOCyUqawJvMIWU9b8GOqUBwoLeNlwV%2FCdqaNhJJm2uN5EOlZMT%2B1S01C3WIbpi2B5T%2BXb2Kh1c8e5Sdkm3Gw0c6eB%2Bs2FbJ%2FjzoF6e6UUQKBUUZFfp0rDaCqK%2FUB0IgkXXCLPsrm6SCkQ2oZxPV8%2Bu%2BUnZfyHtyA1v9lmztthhOoNs9%2BDabShdIAZM6PBPXz7802f%2BwckH%2F5YbLiBRCsxSBsb3yNxr%2FKn1oFsCNTjAWTyl7zIY&X-Amz-Signature=5fcd944d92ab97723ac6c1a5cd380b2823332fe11f7385e134012915517a4b62&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJU7HEEG%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T190149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe37XkcKcMmQLRkMes4cwsGNR40penWXTLRO%2BDoMpokQIgLfHeuywOA6OtbTbrK1%2BGiyxojzuGONDeLHV10Whjr0Aq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHqNg7AUzsGssicsVyrcA%2BsJqBS7m5hSYdFyVKT1O8HemH0YXV51%2F0lgZb%2FCd7uWZCnJamx1F22jNTHxum0BaPmv94%2BfpmPPGRBSUpKItpJ9Xv%2By7nrwo1e02dm0cWwhfRTOXekvHLYiJuQfbdNLnPijFMP%2Fj3IQ6LMA29XevBrmSTMAUcxbc%2F4LPxNNvVdDWPEH9jnOgZnGxCfpG0krsUIpPxRDkm2P14mO2GBk1FIxuQR1KndWGTKCTa1LlwcIIqxmfQzzdB%2F4w1Ex9pNwG4YwT5qFowUb26wtQj58ZFTGRM87xOiJTbmhZDhyF1yqY%2Ba73edmzZrFv5rYSQ85LM9ZUQ%2Ffbgfz%2FlazIa0h9OTVBfsi%2FnsSUlUWPFt0UR0HR9ZVEEZiRIZQ8V1DJX86MRoU7W4kqvbqtsy9hg07%2B%2B%2Bz5MKCU3NrVM2RaE%2BQb4zwtolZL5mFP6CU5hUxsQr7AIY2wC%2F9ulcAnK6Fhr2Kc6DFQ6gWqMClf5ZCFzsI%2FZ3xcz%2BROL9tp%2BLGMZ38ZCZWHDyGMczdClB4EMa9x48a7qClPZt5gXugV8veDM1k0i73K19y9CDg7H9CvRr8mNddwu9T7EGYd6oJGoMKlTz3T3Do5uixZiqHOz03xlLBWRTNLnNM%2FAtOCyUqawJvMIWU9b8GOqUBwoLeNlwV%2FCdqaNhJJm2uN5EOlZMT%2B1S01C3WIbpi2B5T%2BXb2Kh1c8e5Sdkm3Gw0c6eB%2Bs2FbJ%2FjzoF6e6UUQKBUUZFfp0rDaCqK%2FUB0IgkXXCLPsrm6SCkQ2oZxPV8%2Bu%2BUnZfyHtyA1v9lmztthhOoNs9%2BDabShdIAZM6PBPXz7802f%2BwckH%2F5YbLiBRCsxSBsb3yNxr%2FKn1oFsCNTjAWTyl7zIY&X-Amz-Signature=472ccd0a7cc0ff031f91cd1d1309be44e6b17b8cb30770a6cedd956d57f0b328&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJU7HEEG%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T190149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe37XkcKcMmQLRkMes4cwsGNR40penWXTLRO%2BDoMpokQIgLfHeuywOA6OtbTbrK1%2BGiyxojzuGONDeLHV10Whjr0Aq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHqNg7AUzsGssicsVyrcA%2BsJqBS7m5hSYdFyVKT1O8HemH0YXV51%2F0lgZb%2FCd7uWZCnJamx1F22jNTHxum0BaPmv94%2BfpmPPGRBSUpKItpJ9Xv%2By7nrwo1e02dm0cWwhfRTOXekvHLYiJuQfbdNLnPijFMP%2Fj3IQ6LMA29XevBrmSTMAUcxbc%2F4LPxNNvVdDWPEH9jnOgZnGxCfpG0krsUIpPxRDkm2P14mO2GBk1FIxuQR1KndWGTKCTa1LlwcIIqxmfQzzdB%2F4w1Ex9pNwG4YwT5qFowUb26wtQj58ZFTGRM87xOiJTbmhZDhyF1yqY%2Ba73edmzZrFv5rYSQ85LM9ZUQ%2Ffbgfz%2FlazIa0h9OTVBfsi%2FnsSUlUWPFt0UR0HR9ZVEEZiRIZQ8V1DJX86MRoU7W4kqvbqtsy9hg07%2B%2B%2Bz5MKCU3NrVM2RaE%2BQb4zwtolZL5mFP6CU5hUxsQr7AIY2wC%2F9ulcAnK6Fhr2Kc6DFQ6gWqMClf5ZCFzsI%2FZ3xcz%2BROL9tp%2BLGMZ38ZCZWHDyGMczdClB4EMa9x48a7qClPZt5gXugV8veDM1k0i73K19y9CDg7H9CvRr8mNddwu9T7EGYd6oJGoMKlTz3T3Do5uixZiqHOz03xlLBWRTNLnNM%2FAtOCyUqawJvMIWU9b8GOqUBwoLeNlwV%2FCdqaNhJJm2uN5EOlZMT%2B1S01C3WIbpi2B5T%2BXb2Kh1c8e5Sdkm3Gw0c6eB%2Bs2FbJ%2FjzoF6e6UUQKBUUZFfp0rDaCqK%2FUB0IgkXXCLPsrm6SCkQ2oZxPV8%2Bu%2BUnZfyHtyA1v9lmztthhOoNs9%2BDabShdIAZM6PBPXz7802f%2BwckH%2F5YbLiBRCsxSBsb3yNxr%2FKn1oFsCNTjAWTyl7zIY&X-Amz-Signature=9cc2ec7ace16439d3af782cfa05e564cb4217de2ab3fdf2e33ed23490459f49d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJU7HEEG%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T190149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe37XkcKcMmQLRkMes4cwsGNR40penWXTLRO%2BDoMpokQIgLfHeuywOA6OtbTbrK1%2BGiyxojzuGONDeLHV10Whjr0Aq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHqNg7AUzsGssicsVyrcA%2BsJqBS7m5hSYdFyVKT1O8HemH0YXV51%2F0lgZb%2FCd7uWZCnJamx1F22jNTHxum0BaPmv94%2BfpmPPGRBSUpKItpJ9Xv%2By7nrwo1e02dm0cWwhfRTOXekvHLYiJuQfbdNLnPijFMP%2Fj3IQ6LMA29XevBrmSTMAUcxbc%2F4LPxNNvVdDWPEH9jnOgZnGxCfpG0krsUIpPxRDkm2P14mO2GBk1FIxuQR1KndWGTKCTa1LlwcIIqxmfQzzdB%2F4w1Ex9pNwG4YwT5qFowUb26wtQj58ZFTGRM87xOiJTbmhZDhyF1yqY%2Ba73edmzZrFv5rYSQ85LM9ZUQ%2Ffbgfz%2FlazIa0h9OTVBfsi%2FnsSUlUWPFt0UR0HR9ZVEEZiRIZQ8V1DJX86MRoU7W4kqvbqtsy9hg07%2B%2B%2Bz5MKCU3NrVM2RaE%2BQb4zwtolZL5mFP6CU5hUxsQr7AIY2wC%2F9ulcAnK6Fhr2Kc6DFQ6gWqMClf5ZCFzsI%2FZ3xcz%2BROL9tp%2BLGMZ38ZCZWHDyGMczdClB4EMa9x48a7qClPZt5gXugV8veDM1k0i73K19y9CDg7H9CvRr8mNddwu9T7EGYd6oJGoMKlTz3T3Do5uixZiqHOz03xlLBWRTNLnNM%2FAtOCyUqawJvMIWU9b8GOqUBwoLeNlwV%2FCdqaNhJJm2uN5EOlZMT%2B1S01C3WIbpi2B5T%2BXb2Kh1c8e5Sdkm3Gw0c6eB%2Bs2FbJ%2FjzoF6e6UUQKBUUZFfp0rDaCqK%2FUB0IgkXXCLPsrm6SCkQ2oZxPV8%2Bu%2BUnZfyHtyA1v9lmztthhOoNs9%2BDabShdIAZM6PBPXz7802f%2BwckH%2F5YbLiBRCsxSBsb3yNxr%2FKn1oFsCNTjAWTyl7zIY&X-Amz-Signature=a477cf439a9326e37b19c06fd74de2aba10afd4646452d6f3a7c99bc87d0215c&X-Amz-SignedHeaders=host&x-id=GetObject)
