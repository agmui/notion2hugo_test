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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HRYS2TG%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T210616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDqm1Dt9FZ317UgPs%2BDilKsNETdlF2pbHarzLYISm0EhQIgRSQ%2FdoIANkFhn%2BOlCMNNKgjDJ76v%2BO%2BW6z57e9QBJpYq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDDXFxxrfeTS%2BOipirSrcA8qF81G4OAlznKjhBbTNbEzuHYlBePiCTI5XjLVEJRzZ6WC3r4dgGxUr2dNiQILvCx7FJaVbUUqNcifnNXc3L%2BSgSr%2Fa%2FPBtCUEC1bxUgGv0HLCWv6L8NcWwDHWHLgueHfoxPthCr24%2FL7U6mv4Du8r8zEihO68lLkUa3Wn08oCtPEToWVsNCAXMvYvnFb6DvNd85Ia3DoBQ8EXDj6X0DwYV77NcRcO7Ik1wF5MLN3OqyfMfCods3nRgA%2FEi4ms9GyoCavNTc8fhRniADZYkyNJj6IRPWyiEXuWHdCATbXV8xqiNw7CSj%2Fe6W70cu8qEGM4y2RQE4s4Jd%2Fia%2BFe1JtVa4rac2zJHb%2BPhXOg%2B19DettlKkdRN3erzU3MnIufDs3a%2FGHV%2BTvvsq5dLyQguNQ4zK0A6aO9tt24ACumBco%2BTvxBNE35sl8TsWvz9z40tDiTl01qpdu2KA%2FVcXhVSRNf7jaj%2F3H4tE1ZEjq7V3fO3PUiHBYSvhrAPPovMg%2F7gd9KIW6mSjXd7T0GcfmfWaEE0GiLpMlwuVp4wvgy32OvDyIS47MHncUYe%2BZJRLaFyViEzZWgqmUNS0KAHIFjKjyoxBLlnzPkKi%2FWMurhjqWHS7loHoXPFb0e2oPtNMPvahL0GOqUBwJK7SikOG3PDRlgnFvKBqSVENs3X%2FRCxMS6TZykWqvotysnvYFt%2BwOw9Nw5XXGGsPcB3chhEgMqFpdQV8tejOy4OEYPdJy%2FWSs6SjsuuEXOpcupU3N2UhwDrhR67fwMMrufH8PAy9l9f%2B6WiWSvOkBjCMjlqgH7r2kVrTKmmYMhmaYLqz73%2F5T5nnSrVQNXVVWdVvlzOdJxt2kFBBYzXKAH92hqZ&X-Amz-Signature=d391cafc3f5c3373dc8ebfe274cb8194f3f8e8c4775e4dec75120048063a338b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HRYS2TG%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T210616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDqm1Dt9FZ317UgPs%2BDilKsNETdlF2pbHarzLYISm0EhQIgRSQ%2FdoIANkFhn%2BOlCMNNKgjDJ76v%2BO%2BW6z57e9QBJpYq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDDXFxxrfeTS%2BOipirSrcA8qF81G4OAlznKjhBbTNbEzuHYlBePiCTI5XjLVEJRzZ6WC3r4dgGxUr2dNiQILvCx7FJaVbUUqNcifnNXc3L%2BSgSr%2Fa%2FPBtCUEC1bxUgGv0HLCWv6L8NcWwDHWHLgueHfoxPthCr24%2FL7U6mv4Du8r8zEihO68lLkUa3Wn08oCtPEToWVsNCAXMvYvnFb6DvNd85Ia3DoBQ8EXDj6X0DwYV77NcRcO7Ik1wF5MLN3OqyfMfCods3nRgA%2FEi4ms9GyoCavNTc8fhRniADZYkyNJj6IRPWyiEXuWHdCATbXV8xqiNw7CSj%2Fe6W70cu8qEGM4y2RQE4s4Jd%2Fia%2BFe1JtVa4rac2zJHb%2BPhXOg%2B19DettlKkdRN3erzU3MnIufDs3a%2FGHV%2BTvvsq5dLyQguNQ4zK0A6aO9tt24ACumBco%2BTvxBNE35sl8TsWvz9z40tDiTl01qpdu2KA%2FVcXhVSRNf7jaj%2F3H4tE1ZEjq7V3fO3PUiHBYSvhrAPPovMg%2F7gd9KIW6mSjXd7T0GcfmfWaEE0GiLpMlwuVp4wvgy32OvDyIS47MHncUYe%2BZJRLaFyViEzZWgqmUNS0KAHIFjKjyoxBLlnzPkKi%2FWMurhjqWHS7loHoXPFb0e2oPtNMPvahL0GOqUBwJK7SikOG3PDRlgnFvKBqSVENs3X%2FRCxMS6TZykWqvotysnvYFt%2BwOw9Nw5XXGGsPcB3chhEgMqFpdQV8tejOy4OEYPdJy%2FWSs6SjsuuEXOpcupU3N2UhwDrhR67fwMMrufH8PAy9l9f%2B6WiWSvOkBjCMjlqgH7r2kVrTKmmYMhmaYLqz73%2F5T5nnSrVQNXVVWdVvlzOdJxt2kFBBYzXKAH92hqZ&X-Amz-Signature=70f60a94e1b7b94171334a55b6f4d82b3280d37ef2f6400318d5d2cba6d03c8d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HRYS2TG%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T210616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDqm1Dt9FZ317UgPs%2BDilKsNETdlF2pbHarzLYISm0EhQIgRSQ%2FdoIANkFhn%2BOlCMNNKgjDJ76v%2BO%2BW6z57e9QBJpYq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDDXFxxrfeTS%2BOipirSrcA8qF81G4OAlznKjhBbTNbEzuHYlBePiCTI5XjLVEJRzZ6WC3r4dgGxUr2dNiQILvCx7FJaVbUUqNcifnNXc3L%2BSgSr%2Fa%2FPBtCUEC1bxUgGv0HLCWv6L8NcWwDHWHLgueHfoxPthCr24%2FL7U6mv4Du8r8zEihO68lLkUa3Wn08oCtPEToWVsNCAXMvYvnFb6DvNd85Ia3DoBQ8EXDj6X0DwYV77NcRcO7Ik1wF5MLN3OqyfMfCods3nRgA%2FEi4ms9GyoCavNTc8fhRniADZYkyNJj6IRPWyiEXuWHdCATbXV8xqiNw7CSj%2Fe6W70cu8qEGM4y2RQE4s4Jd%2Fia%2BFe1JtVa4rac2zJHb%2BPhXOg%2B19DettlKkdRN3erzU3MnIufDs3a%2FGHV%2BTvvsq5dLyQguNQ4zK0A6aO9tt24ACumBco%2BTvxBNE35sl8TsWvz9z40tDiTl01qpdu2KA%2FVcXhVSRNf7jaj%2F3H4tE1ZEjq7V3fO3PUiHBYSvhrAPPovMg%2F7gd9KIW6mSjXd7T0GcfmfWaEE0GiLpMlwuVp4wvgy32OvDyIS47MHncUYe%2BZJRLaFyViEzZWgqmUNS0KAHIFjKjyoxBLlnzPkKi%2FWMurhjqWHS7loHoXPFb0e2oPtNMPvahL0GOqUBwJK7SikOG3PDRlgnFvKBqSVENs3X%2FRCxMS6TZykWqvotysnvYFt%2BwOw9Nw5XXGGsPcB3chhEgMqFpdQV8tejOy4OEYPdJy%2FWSs6SjsuuEXOpcupU3N2UhwDrhR67fwMMrufH8PAy9l9f%2B6WiWSvOkBjCMjlqgH7r2kVrTKmmYMhmaYLqz73%2F5T5nnSrVQNXVVWdVvlzOdJxt2kFBBYzXKAH92hqZ&X-Amz-Signature=a5ae8402a97c9b9beb77540ba4cd8b8a8f30380e3df300ad3b82b788d711cb22&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HRYS2TG%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T210616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDqm1Dt9FZ317UgPs%2BDilKsNETdlF2pbHarzLYISm0EhQIgRSQ%2FdoIANkFhn%2BOlCMNNKgjDJ76v%2BO%2BW6z57e9QBJpYq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDDXFxxrfeTS%2BOipirSrcA8qF81G4OAlznKjhBbTNbEzuHYlBePiCTI5XjLVEJRzZ6WC3r4dgGxUr2dNiQILvCx7FJaVbUUqNcifnNXc3L%2BSgSr%2Fa%2FPBtCUEC1bxUgGv0HLCWv6L8NcWwDHWHLgueHfoxPthCr24%2FL7U6mv4Du8r8zEihO68lLkUa3Wn08oCtPEToWVsNCAXMvYvnFb6DvNd85Ia3DoBQ8EXDj6X0DwYV77NcRcO7Ik1wF5MLN3OqyfMfCods3nRgA%2FEi4ms9GyoCavNTc8fhRniADZYkyNJj6IRPWyiEXuWHdCATbXV8xqiNw7CSj%2Fe6W70cu8qEGM4y2RQE4s4Jd%2Fia%2BFe1JtVa4rac2zJHb%2BPhXOg%2B19DettlKkdRN3erzU3MnIufDs3a%2FGHV%2BTvvsq5dLyQguNQ4zK0A6aO9tt24ACumBco%2BTvxBNE35sl8TsWvz9z40tDiTl01qpdu2KA%2FVcXhVSRNf7jaj%2F3H4tE1ZEjq7V3fO3PUiHBYSvhrAPPovMg%2F7gd9KIW6mSjXd7T0GcfmfWaEE0GiLpMlwuVp4wvgy32OvDyIS47MHncUYe%2BZJRLaFyViEzZWgqmUNS0KAHIFjKjyoxBLlnzPkKi%2FWMurhjqWHS7loHoXPFb0e2oPtNMPvahL0GOqUBwJK7SikOG3PDRlgnFvKBqSVENs3X%2FRCxMS6TZykWqvotysnvYFt%2BwOw9Nw5XXGGsPcB3chhEgMqFpdQV8tejOy4OEYPdJy%2FWSs6SjsuuEXOpcupU3N2UhwDrhR67fwMMrufH8PAy9l9f%2B6WiWSvOkBjCMjlqgH7r2kVrTKmmYMhmaYLqz73%2F5T5nnSrVQNXVVWdVvlzOdJxt2kFBBYzXKAH92hqZ&X-Amz-Signature=d73ed43f92353a395cda7e60a14a4ce002c15fc53ce5632dcbe960273732bf68&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HRYS2TG%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T210616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDqm1Dt9FZ317UgPs%2BDilKsNETdlF2pbHarzLYISm0EhQIgRSQ%2FdoIANkFhn%2BOlCMNNKgjDJ76v%2BO%2BW6z57e9QBJpYq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDDXFxxrfeTS%2BOipirSrcA8qF81G4OAlznKjhBbTNbEzuHYlBePiCTI5XjLVEJRzZ6WC3r4dgGxUr2dNiQILvCx7FJaVbUUqNcifnNXc3L%2BSgSr%2Fa%2FPBtCUEC1bxUgGv0HLCWv6L8NcWwDHWHLgueHfoxPthCr24%2FL7U6mv4Du8r8zEihO68lLkUa3Wn08oCtPEToWVsNCAXMvYvnFb6DvNd85Ia3DoBQ8EXDj6X0DwYV77NcRcO7Ik1wF5MLN3OqyfMfCods3nRgA%2FEi4ms9GyoCavNTc8fhRniADZYkyNJj6IRPWyiEXuWHdCATbXV8xqiNw7CSj%2Fe6W70cu8qEGM4y2RQE4s4Jd%2Fia%2BFe1JtVa4rac2zJHb%2BPhXOg%2B19DettlKkdRN3erzU3MnIufDs3a%2FGHV%2BTvvsq5dLyQguNQ4zK0A6aO9tt24ACumBco%2BTvxBNE35sl8TsWvz9z40tDiTl01qpdu2KA%2FVcXhVSRNf7jaj%2F3H4tE1ZEjq7V3fO3PUiHBYSvhrAPPovMg%2F7gd9KIW6mSjXd7T0GcfmfWaEE0GiLpMlwuVp4wvgy32OvDyIS47MHncUYe%2BZJRLaFyViEzZWgqmUNS0KAHIFjKjyoxBLlnzPkKi%2FWMurhjqWHS7loHoXPFb0e2oPtNMPvahL0GOqUBwJK7SikOG3PDRlgnFvKBqSVENs3X%2FRCxMS6TZykWqvotysnvYFt%2BwOw9Nw5XXGGsPcB3chhEgMqFpdQV8tejOy4OEYPdJy%2FWSs6SjsuuEXOpcupU3N2UhwDrhR67fwMMrufH8PAy9l9f%2B6WiWSvOkBjCMjlqgH7r2kVrTKmmYMhmaYLqz73%2F5T5nnSrVQNXVVWdVvlzOdJxt2kFBBYzXKAH92hqZ&X-Amz-Signature=6c6098bb5afe9ad2c0a71fdeea9cab56b044a44d74be96dc2481a32c981eed43&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HRYS2TG%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T210616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDqm1Dt9FZ317UgPs%2BDilKsNETdlF2pbHarzLYISm0EhQIgRSQ%2FdoIANkFhn%2BOlCMNNKgjDJ76v%2BO%2BW6z57e9QBJpYq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDDXFxxrfeTS%2BOipirSrcA8qF81G4OAlznKjhBbTNbEzuHYlBePiCTI5XjLVEJRzZ6WC3r4dgGxUr2dNiQILvCx7FJaVbUUqNcifnNXc3L%2BSgSr%2Fa%2FPBtCUEC1bxUgGv0HLCWv6L8NcWwDHWHLgueHfoxPthCr24%2FL7U6mv4Du8r8zEihO68lLkUa3Wn08oCtPEToWVsNCAXMvYvnFb6DvNd85Ia3DoBQ8EXDj6X0DwYV77NcRcO7Ik1wF5MLN3OqyfMfCods3nRgA%2FEi4ms9GyoCavNTc8fhRniADZYkyNJj6IRPWyiEXuWHdCATbXV8xqiNw7CSj%2Fe6W70cu8qEGM4y2RQE4s4Jd%2Fia%2BFe1JtVa4rac2zJHb%2BPhXOg%2B19DettlKkdRN3erzU3MnIufDs3a%2FGHV%2BTvvsq5dLyQguNQ4zK0A6aO9tt24ACumBco%2BTvxBNE35sl8TsWvz9z40tDiTl01qpdu2KA%2FVcXhVSRNf7jaj%2F3H4tE1ZEjq7V3fO3PUiHBYSvhrAPPovMg%2F7gd9KIW6mSjXd7T0GcfmfWaEE0GiLpMlwuVp4wvgy32OvDyIS47MHncUYe%2BZJRLaFyViEzZWgqmUNS0KAHIFjKjyoxBLlnzPkKi%2FWMurhjqWHS7loHoXPFb0e2oPtNMPvahL0GOqUBwJK7SikOG3PDRlgnFvKBqSVENs3X%2FRCxMS6TZykWqvotysnvYFt%2BwOw9Nw5XXGGsPcB3chhEgMqFpdQV8tejOy4OEYPdJy%2FWSs6SjsuuEXOpcupU3N2UhwDrhR67fwMMrufH8PAy9l9f%2B6WiWSvOkBjCMjlqgH7r2kVrTKmmYMhmaYLqz73%2F5T5nnSrVQNXVVWdVvlzOdJxt2kFBBYzXKAH92hqZ&X-Amz-Signature=b7a98782b5fbf70d71d3a64ae75670f7da70c2b8b52e103ceece969d00b463e3&X-Amz-SignedHeaders=host&x-id=GetObject)
