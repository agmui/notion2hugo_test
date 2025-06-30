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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UBTVZEO%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLG12djkJr6BCSnejl%2BSIJPuDHsfAGlG6o6%2Fz7XekFagIgGTf42T182%2BeuKq1pukImbk9N0XzD7QWfOfH3E%2BkdzSgqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAUFE1fSl5VIJMQACrcAz1zpGAuUMO4nSCcwhGa5lqWKpI74WcrxNAR1Ksp8Z2O%2B192qziXrDXHyXDxs1iVYfFdYTNWg0vwnh2Jojlr7xF7AToQtOzXaZU8zIxqukj8Me%2Fx2TcmS%2BoGcT2FpdZGEwrnCSl4weN0IjDAloPaq5BIcmzgzeFuv%2FIC8rUiXeGlZOeBKxpwLo7NXbr4aTajezRt114W8VEETcBt03is5qVejtHq%2F%2FykkMqLm7GoLNA8%2Frfx2qNAOJWr9N5F7Nsy3axS%2FipVSrhYH4AwYrkmegZ%2Bbqs%2B4gntT0QXLYSmcKfISzthpIf2awZGBXh95K5Qp0aP735rOG2nrHEStO%2B%2FRq39AVSYBznrDSnBJU9OD1iamO0z3iQhfmEX8esjYW4zRQeFe%2BlHQI0aB7VkrRSPxDoj%2Btn9ABh2xdifDeaDtslFBV0Hu2Yl5ON9RTLesIdqgegDUmRxtKg8oFcPjoPB4aiP3k57r1aHiMAQheU6dkptbCNF%2BFqQM22oQShx7GR4Xy3pIYYTGt%2Br%2FaYI7C2Fx4W35CZjT5P0vFMHPDldXG5fN9TqYVbVFI8NjRuac9x6DXg1I42Jz%2BpJSmU7Ka5tVSGBCXcC%2F5tj1vYNBoZQxBexpaORDtKJp0b1AEqyMICnjMMGOqUB2Jw35Ag7ZKUWR8Sms153dPxUfWBH5nUbts89mX7jf9nRw3S7gzYLtBeEyVbMYaqq%2B4tjxaGXKRfDDBee22pyDCzI3Zd3%2FmC%2FBbZUSIZmdcwOHb1%2Fsfk8Dlj%2F%2B%2Fpf5Ef2ewPqmFVobK2jr8WRr50otU2lP00ER0p8alQhQBdKGQW5BKps3DGHnO51xvPvTZN0TMpj8o4R0PUpwGOClBJHyhZQrq7F&X-Amz-Signature=3c8043422814e9ad71a12c50f49a0f079434a8436648222c17c4da68aafde199&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UBTVZEO%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLG12djkJr6BCSnejl%2BSIJPuDHsfAGlG6o6%2Fz7XekFagIgGTf42T182%2BeuKq1pukImbk9N0XzD7QWfOfH3E%2BkdzSgqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAUFE1fSl5VIJMQACrcAz1zpGAuUMO4nSCcwhGa5lqWKpI74WcrxNAR1Ksp8Z2O%2B192qziXrDXHyXDxs1iVYfFdYTNWg0vwnh2Jojlr7xF7AToQtOzXaZU8zIxqukj8Me%2Fx2TcmS%2BoGcT2FpdZGEwrnCSl4weN0IjDAloPaq5BIcmzgzeFuv%2FIC8rUiXeGlZOeBKxpwLo7NXbr4aTajezRt114W8VEETcBt03is5qVejtHq%2F%2FykkMqLm7GoLNA8%2Frfx2qNAOJWr9N5F7Nsy3axS%2FipVSrhYH4AwYrkmegZ%2Bbqs%2B4gntT0QXLYSmcKfISzthpIf2awZGBXh95K5Qp0aP735rOG2nrHEStO%2B%2FRq39AVSYBznrDSnBJU9OD1iamO0z3iQhfmEX8esjYW4zRQeFe%2BlHQI0aB7VkrRSPxDoj%2Btn9ABh2xdifDeaDtslFBV0Hu2Yl5ON9RTLesIdqgegDUmRxtKg8oFcPjoPB4aiP3k57r1aHiMAQheU6dkptbCNF%2BFqQM22oQShx7GR4Xy3pIYYTGt%2Br%2FaYI7C2Fx4W35CZjT5P0vFMHPDldXG5fN9TqYVbVFI8NjRuac9x6DXg1I42Jz%2BpJSmU7Ka5tVSGBCXcC%2F5tj1vYNBoZQxBexpaORDtKJp0b1AEqyMICnjMMGOqUB2Jw35Ag7ZKUWR8Sms153dPxUfWBH5nUbts89mX7jf9nRw3S7gzYLtBeEyVbMYaqq%2B4tjxaGXKRfDDBee22pyDCzI3Zd3%2FmC%2FBbZUSIZmdcwOHb1%2Fsfk8Dlj%2F%2B%2Fpf5Ef2ewPqmFVobK2jr8WRr50otU2lP00ER0p8alQhQBdKGQW5BKps3DGHnO51xvPvTZN0TMpj8o4R0PUpwGOClBJHyhZQrq7F&X-Amz-Signature=ac8ee137fb1ba8eb7ba69168ffecc1e9be8c858937bf81d126e3daf995b4c701&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UBTVZEO%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLG12djkJr6BCSnejl%2BSIJPuDHsfAGlG6o6%2Fz7XekFagIgGTf42T182%2BeuKq1pukImbk9N0XzD7QWfOfH3E%2BkdzSgqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAUFE1fSl5VIJMQACrcAz1zpGAuUMO4nSCcwhGa5lqWKpI74WcrxNAR1Ksp8Z2O%2B192qziXrDXHyXDxs1iVYfFdYTNWg0vwnh2Jojlr7xF7AToQtOzXaZU8zIxqukj8Me%2Fx2TcmS%2BoGcT2FpdZGEwrnCSl4weN0IjDAloPaq5BIcmzgzeFuv%2FIC8rUiXeGlZOeBKxpwLo7NXbr4aTajezRt114W8VEETcBt03is5qVejtHq%2F%2FykkMqLm7GoLNA8%2Frfx2qNAOJWr9N5F7Nsy3axS%2FipVSrhYH4AwYrkmegZ%2Bbqs%2B4gntT0QXLYSmcKfISzthpIf2awZGBXh95K5Qp0aP735rOG2nrHEStO%2B%2FRq39AVSYBznrDSnBJU9OD1iamO0z3iQhfmEX8esjYW4zRQeFe%2BlHQI0aB7VkrRSPxDoj%2Btn9ABh2xdifDeaDtslFBV0Hu2Yl5ON9RTLesIdqgegDUmRxtKg8oFcPjoPB4aiP3k57r1aHiMAQheU6dkptbCNF%2BFqQM22oQShx7GR4Xy3pIYYTGt%2Br%2FaYI7C2Fx4W35CZjT5P0vFMHPDldXG5fN9TqYVbVFI8NjRuac9x6DXg1I42Jz%2BpJSmU7Ka5tVSGBCXcC%2F5tj1vYNBoZQxBexpaORDtKJp0b1AEqyMICnjMMGOqUB2Jw35Ag7ZKUWR8Sms153dPxUfWBH5nUbts89mX7jf9nRw3S7gzYLtBeEyVbMYaqq%2B4tjxaGXKRfDDBee22pyDCzI3Zd3%2FmC%2FBbZUSIZmdcwOHb1%2Fsfk8Dlj%2F%2B%2Fpf5Ef2ewPqmFVobK2jr8WRr50otU2lP00ER0p8alQhQBdKGQW5BKps3DGHnO51xvPvTZN0TMpj8o4R0PUpwGOClBJHyhZQrq7F&X-Amz-Signature=8dd727a294761dd60f3ae51355da6a7c771e6e3652cb7a025eb58ff202a352d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UBTVZEO%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T230846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLG12djkJr6BCSnejl%2BSIJPuDHsfAGlG6o6%2Fz7XekFagIgGTf42T182%2BeuKq1pukImbk9N0XzD7QWfOfH3E%2BkdzSgqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAUFE1fSl5VIJMQACrcAz1zpGAuUMO4nSCcwhGa5lqWKpI74WcrxNAR1Ksp8Z2O%2B192qziXrDXHyXDxs1iVYfFdYTNWg0vwnh2Jojlr7xF7AToQtOzXaZU8zIxqukj8Me%2Fx2TcmS%2BoGcT2FpdZGEwrnCSl4weN0IjDAloPaq5BIcmzgzeFuv%2FIC8rUiXeGlZOeBKxpwLo7NXbr4aTajezRt114W8VEETcBt03is5qVejtHq%2F%2FykkMqLm7GoLNA8%2Frfx2qNAOJWr9N5F7Nsy3axS%2FipVSrhYH4AwYrkmegZ%2Bbqs%2B4gntT0QXLYSmcKfISzthpIf2awZGBXh95K5Qp0aP735rOG2nrHEStO%2B%2FRq39AVSYBznrDSnBJU9OD1iamO0z3iQhfmEX8esjYW4zRQeFe%2BlHQI0aB7VkrRSPxDoj%2Btn9ABh2xdifDeaDtslFBV0Hu2Yl5ON9RTLesIdqgegDUmRxtKg8oFcPjoPB4aiP3k57r1aHiMAQheU6dkptbCNF%2BFqQM22oQShx7GR4Xy3pIYYTGt%2Br%2FaYI7C2Fx4W35CZjT5P0vFMHPDldXG5fN9TqYVbVFI8NjRuac9x6DXg1I42Jz%2BpJSmU7Ka5tVSGBCXcC%2F5tj1vYNBoZQxBexpaORDtKJp0b1AEqyMICnjMMGOqUB2Jw35Ag7ZKUWR8Sms153dPxUfWBH5nUbts89mX7jf9nRw3S7gzYLtBeEyVbMYaqq%2B4tjxaGXKRfDDBee22pyDCzI3Zd3%2FmC%2FBbZUSIZmdcwOHb1%2Fsfk8Dlj%2F%2B%2Fpf5Ef2ewPqmFVobK2jr8WRr50otU2lP00ER0p8alQhQBdKGQW5BKps3DGHnO51xvPvTZN0TMpj8o4R0PUpwGOClBJHyhZQrq7F&X-Amz-Signature=c28f99990c560d809fa31e1a4c20fe707cd627eeca36224a602d0e4d16ea2d6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UBTVZEO%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T230847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLG12djkJr6BCSnejl%2BSIJPuDHsfAGlG6o6%2Fz7XekFagIgGTf42T182%2BeuKq1pukImbk9N0XzD7QWfOfH3E%2BkdzSgqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAUFE1fSl5VIJMQACrcAz1zpGAuUMO4nSCcwhGa5lqWKpI74WcrxNAR1Ksp8Z2O%2B192qziXrDXHyXDxs1iVYfFdYTNWg0vwnh2Jojlr7xF7AToQtOzXaZU8zIxqukj8Me%2Fx2TcmS%2BoGcT2FpdZGEwrnCSl4weN0IjDAloPaq5BIcmzgzeFuv%2FIC8rUiXeGlZOeBKxpwLo7NXbr4aTajezRt114W8VEETcBt03is5qVejtHq%2F%2FykkMqLm7GoLNA8%2Frfx2qNAOJWr9N5F7Nsy3axS%2FipVSrhYH4AwYrkmegZ%2Bbqs%2B4gntT0QXLYSmcKfISzthpIf2awZGBXh95K5Qp0aP735rOG2nrHEStO%2B%2FRq39AVSYBznrDSnBJU9OD1iamO0z3iQhfmEX8esjYW4zRQeFe%2BlHQI0aB7VkrRSPxDoj%2Btn9ABh2xdifDeaDtslFBV0Hu2Yl5ON9RTLesIdqgegDUmRxtKg8oFcPjoPB4aiP3k57r1aHiMAQheU6dkptbCNF%2BFqQM22oQShx7GR4Xy3pIYYTGt%2Br%2FaYI7C2Fx4W35CZjT5P0vFMHPDldXG5fN9TqYVbVFI8NjRuac9x6DXg1I42Jz%2BpJSmU7Ka5tVSGBCXcC%2F5tj1vYNBoZQxBexpaORDtKJp0b1AEqyMICnjMMGOqUB2Jw35Ag7ZKUWR8Sms153dPxUfWBH5nUbts89mX7jf9nRw3S7gzYLtBeEyVbMYaqq%2B4tjxaGXKRfDDBee22pyDCzI3Zd3%2FmC%2FBbZUSIZmdcwOHb1%2Fsfk8Dlj%2F%2B%2Fpf5Ef2ewPqmFVobK2jr8WRr50otU2lP00ER0p8alQhQBdKGQW5BKps3DGHnO51xvPvTZN0TMpj8o4R0PUpwGOClBJHyhZQrq7F&X-Amz-Signature=d551fac58bfecabd9bc2cf41ff06c60cc63f2f8e0a0e8461cac1d834635b8a0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UBTVZEO%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T230847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLG12djkJr6BCSnejl%2BSIJPuDHsfAGlG6o6%2Fz7XekFagIgGTf42T182%2BeuKq1pukImbk9N0XzD7QWfOfH3E%2BkdzSgqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAUFE1fSl5VIJMQACrcAz1zpGAuUMO4nSCcwhGa5lqWKpI74WcrxNAR1Ksp8Z2O%2B192qziXrDXHyXDxs1iVYfFdYTNWg0vwnh2Jojlr7xF7AToQtOzXaZU8zIxqukj8Me%2Fx2TcmS%2BoGcT2FpdZGEwrnCSl4weN0IjDAloPaq5BIcmzgzeFuv%2FIC8rUiXeGlZOeBKxpwLo7NXbr4aTajezRt114W8VEETcBt03is5qVejtHq%2F%2FykkMqLm7GoLNA8%2Frfx2qNAOJWr9N5F7Nsy3axS%2FipVSrhYH4AwYrkmegZ%2Bbqs%2B4gntT0QXLYSmcKfISzthpIf2awZGBXh95K5Qp0aP735rOG2nrHEStO%2B%2FRq39AVSYBznrDSnBJU9OD1iamO0z3iQhfmEX8esjYW4zRQeFe%2BlHQI0aB7VkrRSPxDoj%2Btn9ABh2xdifDeaDtslFBV0Hu2Yl5ON9RTLesIdqgegDUmRxtKg8oFcPjoPB4aiP3k57r1aHiMAQheU6dkptbCNF%2BFqQM22oQShx7GR4Xy3pIYYTGt%2Br%2FaYI7C2Fx4W35CZjT5P0vFMHPDldXG5fN9TqYVbVFI8NjRuac9x6DXg1I42Jz%2BpJSmU7Ka5tVSGBCXcC%2F5tj1vYNBoZQxBexpaORDtKJp0b1AEqyMICnjMMGOqUB2Jw35Ag7ZKUWR8Sms153dPxUfWBH5nUbts89mX7jf9nRw3S7gzYLtBeEyVbMYaqq%2B4tjxaGXKRfDDBee22pyDCzI3Zd3%2FmC%2FBbZUSIZmdcwOHb1%2Fsfk8Dlj%2F%2B%2Fpf5Ef2ewPqmFVobK2jr8WRr50otU2lP00ER0p8alQhQBdKGQW5BKps3DGHnO51xvPvTZN0TMpj8o4R0PUpwGOClBJHyhZQrq7F&X-Amz-Signature=3bc73cc7690e40b64ca1569f5264c7078a854d1b3777061c05b02973e1e189f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
