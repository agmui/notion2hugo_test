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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T7FIPFC%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T003816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBoN96BKaDFf8Q090pbd5RpciBVzxqEb2sU3%2BxWJ%2BLuAiBWawCmcGeObV88E%2BAtSD3iux1OansoSK6hDEjZCRnj9Cr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMmux0r7uz99MFVT%2BcKtwDrQyQFAFAYZpglGc%2BaDpgVQEiGaouvxhteuv6hcK6lrhewHz9um7XoB8AMcHtXVm5Gr9Ed%2BWQCnLjP9BQ7TENdC4GlRNdmXSbygSEIrSnTOQ8wUU4yRBB9HLLOtfQRJw%2BInLJx8hCEm%2FzcQ8x1BJjOdnX1TxQXyTONXAlAlx4WvNkhFRB97lmSwH50rXnieQ0ziF3yj55x9EffVzXw9ycv6RgnnyPd5T%2FP%2B8Y8E2n13MknUvpnGpD7Q02jZ%2Bm0qGe1489sdJNykWglllS2l%2F16AOuJq7iuoRIJ7NEMYKbiN1%2F7mvd%2FMsQ0qo8p2VB9niiLdbFDHjN9Kz5nzihImGP2atd8m8DjkDjks20Hb0Zy0WPLPEqN3o0uKJSV%2FOw6DN%2FxGrXzNFw3N1GIJKXUxSpjrd6f2WisrpQeMhrjV7UWpCP340vQEyaoIigluKM1Mldr2n390ZXWpCEcof3GDpZLy2wBaA7vdoEBetzMcvPiwNbJjVqoyvQm%2F5pZKuVq7HbznxPIhc8O93wboyy0MllJhf%2Flrroc%2BzCeOXDCN3%2Bk2GPNJE6XiI6Oj0hlpQuTiXTW1N%2Fd0uuWG284b7HsTM%2FliO46fGvR%2BQ%2BnFGDr3hYiyiLmKuuJY9PP0jTw9cwsO%2FBvwY6pgG1ft1XZ855uJY3xhJanbGnR4382v7nPlqf9kD2wAME1mT0oPsCOK15M8aVLFdgES5vDdYAptWIar%2F%2FxvCzOt0O1mJBIYjChOqSVbd12tceyCtAe7IJojElB0Ja601fszTnsabqRAfHMwKkaExVUE7mAwOzgV5Z5DzOY3DnCIFSeO73jQH4RkB%2Frqtlf2iNthFOeWBFxYI%2BPl5m3O3PkmSe5z%2BlqBOe&X-Amz-Signature=7fed27f439f3f35b3991a3345d94f81e85cdd22d32cd377c4a12634c752ea996&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T7FIPFC%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T003816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBoN96BKaDFf8Q090pbd5RpciBVzxqEb2sU3%2BxWJ%2BLuAiBWawCmcGeObV88E%2BAtSD3iux1OansoSK6hDEjZCRnj9Cr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMmux0r7uz99MFVT%2BcKtwDrQyQFAFAYZpglGc%2BaDpgVQEiGaouvxhteuv6hcK6lrhewHz9um7XoB8AMcHtXVm5Gr9Ed%2BWQCnLjP9BQ7TENdC4GlRNdmXSbygSEIrSnTOQ8wUU4yRBB9HLLOtfQRJw%2BInLJx8hCEm%2FzcQ8x1BJjOdnX1TxQXyTONXAlAlx4WvNkhFRB97lmSwH50rXnieQ0ziF3yj55x9EffVzXw9ycv6RgnnyPd5T%2FP%2B8Y8E2n13MknUvpnGpD7Q02jZ%2Bm0qGe1489sdJNykWglllS2l%2F16AOuJq7iuoRIJ7NEMYKbiN1%2F7mvd%2FMsQ0qo8p2VB9niiLdbFDHjN9Kz5nzihImGP2atd8m8DjkDjks20Hb0Zy0WPLPEqN3o0uKJSV%2FOw6DN%2FxGrXzNFw3N1GIJKXUxSpjrd6f2WisrpQeMhrjV7UWpCP340vQEyaoIigluKM1Mldr2n390ZXWpCEcof3GDpZLy2wBaA7vdoEBetzMcvPiwNbJjVqoyvQm%2F5pZKuVq7HbznxPIhc8O93wboyy0MllJhf%2Flrroc%2BzCeOXDCN3%2Bk2GPNJE6XiI6Oj0hlpQuTiXTW1N%2Fd0uuWG284b7HsTM%2FliO46fGvR%2BQ%2BnFGDr3hYiyiLmKuuJY9PP0jTw9cwsO%2FBvwY6pgG1ft1XZ855uJY3xhJanbGnR4382v7nPlqf9kD2wAME1mT0oPsCOK15M8aVLFdgES5vDdYAptWIar%2F%2FxvCzOt0O1mJBIYjChOqSVbd12tceyCtAe7IJojElB0Ja601fszTnsabqRAfHMwKkaExVUE7mAwOzgV5Z5DzOY3DnCIFSeO73jQH4RkB%2Frqtlf2iNthFOeWBFxYI%2BPl5m3O3PkmSe5z%2BlqBOe&X-Amz-Signature=3d7434caee5976de0d27e267f8aa0d2dc4a65cf102d000d405bbf3674cb81b8b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T7FIPFC%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T003816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBoN96BKaDFf8Q090pbd5RpciBVzxqEb2sU3%2BxWJ%2BLuAiBWawCmcGeObV88E%2BAtSD3iux1OansoSK6hDEjZCRnj9Cr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMmux0r7uz99MFVT%2BcKtwDrQyQFAFAYZpglGc%2BaDpgVQEiGaouvxhteuv6hcK6lrhewHz9um7XoB8AMcHtXVm5Gr9Ed%2BWQCnLjP9BQ7TENdC4GlRNdmXSbygSEIrSnTOQ8wUU4yRBB9HLLOtfQRJw%2BInLJx8hCEm%2FzcQ8x1BJjOdnX1TxQXyTONXAlAlx4WvNkhFRB97lmSwH50rXnieQ0ziF3yj55x9EffVzXw9ycv6RgnnyPd5T%2FP%2B8Y8E2n13MknUvpnGpD7Q02jZ%2Bm0qGe1489sdJNykWglllS2l%2F16AOuJq7iuoRIJ7NEMYKbiN1%2F7mvd%2FMsQ0qo8p2VB9niiLdbFDHjN9Kz5nzihImGP2atd8m8DjkDjks20Hb0Zy0WPLPEqN3o0uKJSV%2FOw6DN%2FxGrXzNFw3N1GIJKXUxSpjrd6f2WisrpQeMhrjV7UWpCP340vQEyaoIigluKM1Mldr2n390ZXWpCEcof3GDpZLy2wBaA7vdoEBetzMcvPiwNbJjVqoyvQm%2F5pZKuVq7HbznxPIhc8O93wboyy0MllJhf%2Flrroc%2BzCeOXDCN3%2Bk2GPNJE6XiI6Oj0hlpQuTiXTW1N%2Fd0uuWG284b7HsTM%2FliO46fGvR%2BQ%2BnFGDr3hYiyiLmKuuJY9PP0jTw9cwsO%2FBvwY6pgG1ft1XZ855uJY3xhJanbGnR4382v7nPlqf9kD2wAME1mT0oPsCOK15M8aVLFdgES5vDdYAptWIar%2F%2FxvCzOt0O1mJBIYjChOqSVbd12tceyCtAe7IJojElB0Ja601fszTnsabqRAfHMwKkaExVUE7mAwOzgV5Z5DzOY3DnCIFSeO73jQH4RkB%2Frqtlf2iNthFOeWBFxYI%2BPl5m3O3PkmSe5z%2BlqBOe&X-Amz-Signature=ffef311dc194678d1bed35dbe2c6826878e25b386e1505e5b6e6c32aca6391a2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T7FIPFC%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T003816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBoN96BKaDFf8Q090pbd5RpciBVzxqEb2sU3%2BxWJ%2BLuAiBWawCmcGeObV88E%2BAtSD3iux1OansoSK6hDEjZCRnj9Cr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMmux0r7uz99MFVT%2BcKtwDrQyQFAFAYZpglGc%2BaDpgVQEiGaouvxhteuv6hcK6lrhewHz9um7XoB8AMcHtXVm5Gr9Ed%2BWQCnLjP9BQ7TENdC4GlRNdmXSbygSEIrSnTOQ8wUU4yRBB9HLLOtfQRJw%2BInLJx8hCEm%2FzcQ8x1BJjOdnX1TxQXyTONXAlAlx4WvNkhFRB97lmSwH50rXnieQ0ziF3yj55x9EffVzXw9ycv6RgnnyPd5T%2FP%2B8Y8E2n13MknUvpnGpD7Q02jZ%2Bm0qGe1489sdJNykWglllS2l%2F16AOuJq7iuoRIJ7NEMYKbiN1%2F7mvd%2FMsQ0qo8p2VB9niiLdbFDHjN9Kz5nzihImGP2atd8m8DjkDjks20Hb0Zy0WPLPEqN3o0uKJSV%2FOw6DN%2FxGrXzNFw3N1GIJKXUxSpjrd6f2WisrpQeMhrjV7UWpCP340vQEyaoIigluKM1Mldr2n390ZXWpCEcof3GDpZLy2wBaA7vdoEBetzMcvPiwNbJjVqoyvQm%2F5pZKuVq7HbznxPIhc8O93wboyy0MllJhf%2Flrroc%2BzCeOXDCN3%2Bk2GPNJE6XiI6Oj0hlpQuTiXTW1N%2Fd0uuWG284b7HsTM%2FliO46fGvR%2BQ%2BnFGDr3hYiyiLmKuuJY9PP0jTw9cwsO%2FBvwY6pgG1ft1XZ855uJY3xhJanbGnR4382v7nPlqf9kD2wAME1mT0oPsCOK15M8aVLFdgES5vDdYAptWIar%2F%2FxvCzOt0O1mJBIYjChOqSVbd12tceyCtAe7IJojElB0Ja601fszTnsabqRAfHMwKkaExVUE7mAwOzgV5Z5DzOY3DnCIFSeO73jQH4RkB%2Frqtlf2iNthFOeWBFxYI%2BPl5m3O3PkmSe5z%2BlqBOe&X-Amz-Signature=30ed98af8975cf7e88554d2e01ec533005b62ed94463f496f773c798a5d98586&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T7FIPFC%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T003816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBoN96BKaDFf8Q090pbd5RpciBVzxqEb2sU3%2BxWJ%2BLuAiBWawCmcGeObV88E%2BAtSD3iux1OansoSK6hDEjZCRnj9Cr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMmux0r7uz99MFVT%2BcKtwDrQyQFAFAYZpglGc%2BaDpgVQEiGaouvxhteuv6hcK6lrhewHz9um7XoB8AMcHtXVm5Gr9Ed%2BWQCnLjP9BQ7TENdC4GlRNdmXSbygSEIrSnTOQ8wUU4yRBB9HLLOtfQRJw%2BInLJx8hCEm%2FzcQ8x1BJjOdnX1TxQXyTONXAlAlx4WvNkhFRB97lmSwH50rXnieQ0ziF3yj55x9EffVzXw9ycv6RgnnyPd5T%2FP%2B8Y8E2n13MknUvpnGpD7Q02jZ%2Bm0qGe1489sdJNykWglllS2l%2F16AOuJq7iuoRIJ7NEMYKbiN1%2F7mvd%2FMsQ0qo8p2VB9niiLdbFDHjN9Kz5nzihImGP2atd8m8DjkDjks20Hb0Zy0WPLPEqN3o0uKJSV%2FOw6DN%2FxGrXzNFw3N1GIJKXUxSpjrd6f2WisrpQeMhrjV7UWpCP340vQEyaoIigluKM1Mldr2n390ZXWpCEcof3GDpZLy2wBaA7vdoEBetzMcvPiwNbJjVqoyvQm%2F5pZKuVq7HbznxPIhc8O93wboyy0MllJhf%2Flrroc%2BzCeOXDCN3%2Bk2GPNJE6XiI6Oj0hlpQuTiXTW1N%2Fd0uuWG284b7HsTM%2FliO46fGvR%2BQ%2BnFGDr3hYiyiLmKuuJY9PP0jTw9cwsO%2FBvwY6pgG1ft1XZ855uJY3xhJanbGnR4382v7nPlqf9kD2wAME1mT0oPsCOK15M8aVLFdgES5vDdYAptWIar%2F%2FxvCzOt0O1mJBIYjChOqSVbd12tceyCtAe7IJojElB0Ja601fszTnsabqRAfHMwKkaExVUE7mAwOzgV5Z5DzOY3DnCIFSeO73jQH4RkB%2Frqtlf2iNthFOeWBFxYI%2BPl5m3O3PkmSe5z%2BlqBOe&X-Amz-Signature=6984f3272b3b3809fd8722fd34f07358c5e9a59f2ecb82878ea13cfbfc4b5efa&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T7FIPFC%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T003816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBoN96BKaDFf8Q090pbd5RpciBVzxqEb2sU3%2BxWJ%2BLuAiBWawCmcGeObV88E%2BAtSD3iux1OansoSK6hDEjZCRnj9Cr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMmux0r7uz99MFVT%2BcKtwDrQyQFAFAYZpglGc%2BaDpgVQEiGaouvxhteuv6hcK6lrhewHz9um7XoB8AMcHtXVm5Gr9Ed%2BWQCnLjP9BQ7TENdC4GlRNdmXSbygSEIrSnTOQ8wUU4yRBB9HLLOtfQRJw%2BInLJx8hCEm%2FzcQ8x1BJjOdnX1TxQXyTONXAlAlx4WvNkhFRB97lmSwH50rXnieQ0ziF3yj55x9EffVzXw9ycv6RgnnyPd5T%2FP%2B8Y8E2n13MknUvpnGpD7Q02jZ%2Bm0qGe1489sdJNykWglllS2l%2F16AOuJq7iuoRIJ7NEMYKbiN1%2F7mvd%2FMsQ0qo8p2VB9niiLdbFDHjN9Kz5nzihImGP2atd8m8DjkDjks20Hb0Zy0WPLPEqN3o0uKJSV%2FOw6DN%2FxGrXzNFw3N1GIJKXUxSpjrd6f2WisrpQeMhrjV7UWpCP340vQEyaoIigluKM1Mldr2n390ZXWpCEcof3GDpZLy2wBaA7vdoEBetzMcvPiwNbJjVqoyvQm%2F5pZKuVq7HbznxPIhc8O93wboyy0MllJhf%2Flrroc%2BzCeOXDCN3%2Bk2GPNJE6XiI6Oj0hlpQuTiXTW1N%2Fd0uuWG284b7HsTM%2FliO46fGvR%2BQ%2BnFGDr3hYiyiLmKuuJY9PP0jTw9cwsO%2FBvwY6pgG1ft1XZ855uJY3xhJanbGnR4382v7nPlqf9kD2wAME1mT0oPsCOK15M8aVLFdgES5vDdYAptWIar%2F%2FxvCzOt0O1mJBIYjChOqSVbd12tceyCtAe7IJojElB0Ja601fszTnsabqRAfHMwKkaExVUE7mAwOzgV5Z5DzOY3DnCIFSeO73jQH4RkB%2Frqtlf2iNthFOeWBFxYI%2BPl5m3O3PkmSe5z%2BlqBOe&X-Amz-Signature=6f8a6bf9578856b4840cc2064f666fef509e49f33c875663a9faeb087f1af54f&X-Amz-SignedHeaders=host&x-id=GetObject)
