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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VIGZC7N%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T160854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNmENBug35l%2F4jxBzjB9ttVVGgdDoGZ1QcVfIxeD7lPwIhAJg6kbu0hFl%2F0nJz4ONWKgFSVtgPfjaa5F13au7LFLaZKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBn20qzAk61AG1ww0q3ANhBuqUt5E7H23npSMPcnJ0rIqeBCBO5wFSn3jEp7gJ%2Bs8eQzclnpIZZZrf%2F9sRZg3ozEEMbiWrNHQL0qdiVe%2BDssUl4YCODZqG%2FkEPl9179dQJ0Z2wDuixYd05Fk1otSSHqdmRN6XmmWq%2F4WFtZ%2BeKE3CSWfhIxyScDZdLssRnLizd5G7BoQ16UFYZRdxV2DymbXCWDrPvniAqQvy2X%2B7TDC38XZvtF9JapsMJbpKY9sx26Q3k%2B3z6xW6Ju6rByNO81CrNfLk9uGxB4b2Pp%2Boefl%2FHmC78JNyCaWUlE7FsjWSunagNrBeBb%2BEjpxLWhInTNUYcu5VrHC1%2FB26gb8Dz%2BX%2Frg9jnB5a4OXlpcCR7IeudcaZHAEK9P5zvKH1IvHJrfUmYu4YHw2lCstMvxwEG1rLIM5lMjptnunHrPhPMPsNEHEDAS6BkbMhwfDxm1%2BX9%2FPkSS4HF%2BxrhGVts%2F5M2au61uvXYop3935BW8smHjQa%2FaHhIUrana%2F%2Fld0yBMS0%2BGjyy0%2B1m8pZ8UlPcKCum5tSF1dmzfs0FZqYvBARL1gj8FnNDGds7vFo8%2FZFh0LVMZ2ANpPfLz9DD8WCl7QBDpB2VuEIqLFtzn87o5qSZjcSVRgwzXb0TixKP6jCgyfO8BjqkARbNb5M9tVJak%2F3dAVkSBWcXn7eRytZkierxQpNt%2Fw4Ry7Ble3TH1WubO0h%2FiN43KSdIITG0ojGHud%2BdOl2UXBlg29w%2F91Y%2FRHbMRd1RQ9QjIcqkOmgbrXYlo0PyE9XttU6nBE67wZ8uP3%2FE7IEmy8Myb8tw92KItFHquy3FA%2FPaQ04NVUQuG6DWWC6kfBzE57V6Ta%2Fp%2FyR6l89wfO5hu1QgWu4D&X-Amz-Signature=1a324e450cf4b8b08ea80083240b2cd32f9690688699eb15838409921ee2544e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VIGZC7N%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T160854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNmENBug35l%2F4jxBzjB9ttVVGgdDoGZ1QcVfIxeD7lPwIhAJg6kbu0hFl%2F0nJz4ONWKgFSVtgPfjaa5F13au7LFLaZKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBn20qzAk61AG1ww0q3ANhBuqUt5E7H23npSMPcnJ0rIqeBCBO5wFSn3jEp7gJ%2Bs8eQzclnpIZZZrf%2F9sRZg3ozEEMbiWrNHQL0qdiVe%2BDssUl4YCODZqG%2FkEPl9179dQJ0Z2wDuixYd05Fk1otSSHqdmRN6XmmWq%2F4WFtZ%2BeKE3CSWfhIxyScDZdLssRnLizd5G7BoQ16UFYZRdxV2DymbXCWDrPvniAqQvy2X%2B7TDC38XZvtF9JapsMJbpKY9sx26Q3k%2B3z6xW6Ju6rByNO81CrNfLk9uGxB4b2Pp%2Boefl%2FHmC78JNyCaWUlE7FsjWSunagNrBeBb%2BEjpxLWhInTNUYcu5VrHC1%2FB26gb8Dz%2BX%2Frg9jnB5a4OXlpcCR7IeudcaZHAEK9P5zvKH1IvHJrfUmYu4YHw2lCstMvxwEG1rLIM5lMjptnunHrPhPMPsNEHEDAS6BkbMhwfDxm1%2BX9%2FPkSS4HF%2BxrhGVts%2F5M2au61uvXYop3935BW8smHjQa%2FaHhIUrana%2F%2Fld0yBMS0%2BGjyy0%2B1m8pZ8UlPcKCum5tSF1dmzfs0FZqYvBARL1gj8FnNDGds7vFo8%2FZFh0LVMZ2ANpPfLz9DD8WCl7QBDpB2VuEIqLFtzn87o5qSZjcSVRgwzXb0TixKP6jCgyfO8BjqkARbNb5M9tVJak%2F3dAVkSBWcXn7eRytZkierxQpNt%2Fw4Ry7Ble3TH1WubO0h%2FiN43KSdIITG0ojGHud%2BdOl2UXBlg29w%2F91Y%2FRHbMRd1RQ9QjIcqkOmgbrXYlo0PyE9XttU6nBE67wZ8uP3%2FE7IEmy8Myb8tw92KItFHquy3FA%2FPaQ04NVUQuG6DWWC6kfBzE57V6Ta%2Fp%2FyR6l89wfO5hu1QgWu4D&X-Amz-Signature=285f1671412f04c9b8ea4ffcdf9b123fa1c2717a2b12550130197b0e6c1e4937&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VIGZC7N%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T160854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNmENBug35l%2F4jxBzjB9ttVVGgdDoGZ1QcVfIxeD7lPwIhAJg6kbu0hFl%2F0nJz4ONWKgFSVtgPfjaa5F13au7LFLaZKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBn20qzAk61AG1ww0q3ANhBuqUt5E7H23npSMPcnJ0rIqeBCBO5wFSn3jEp7gJ%2Bs8eQzclnpIZZZrf%2F9sRZg3ozEEMbiWrNHQL0qdiVe%2BDssUl4YCODZqG%2FkEPl9179dQJ0Z2wDuixYd05Fk1otSSHqdmRN6XmmWq%2F4WFtZ%2BeKE3CSWfhIxyScDZdLssRnLizd5G7BoQ16UFYZRdxV2DymbXCWDrPvniAqQvy2X%2B7TDC38XZvtF9JapsMJbpKY9sx26Q3k%2B3z6xW6Ju6rByNO81CrNfLk9uGxB4b2Pp%2Boefl%2FHmC78JNyCaWUlE7FsjWSunagNrBeBb%2BEjpxLWhInTNUYcu5VrHC1%2FB26gb8Dz%2BX%2Frg9jnB5a4OXlpcCR7IeudcaZHAEK9P5zvKH1IvHJrfUmYu4YHw2lCstMvxwEG1rLIM5lMjptnunHrPhPMPsNEHEDAS6BkbMhwfDxm1%2BX9%2FPkSS4HF%2BxrhGVts%2F5M2au61uvXYop3935BW8smHjQa%2FaHhIUrana%2F%2Fld0yBMS0%2BGjyy0%2B1m8pZ8UlPcKCum5tSF1dmzfs0FZqYvBARL1gj8FnNDGds7vFo8%2FZFh0LVMZ2ANpPfLz9DD8WCl7QBDpB2VuEIqLFtzn87o5qSZjcSVRgwzXb0TixKP6jCgyfO8BjqkARbNb5M9tVJak%2F3dAVkSBWcXn7eRytZkierxQpNt%2Fw4Ry7Ble3TH1WubO0h%2FiN43KSdIITG0ojGHud%2BdOl2UXBlg29w%2F91Y%2FRHbMRd1RQ9QjIcqkOmgbrXYlo0PyE9XttU6nBE67wZ8uP3%2FE7IEmy8Myb8tw92KItFHquy3FA%2FPaQ04NVUQuG6DWWC6kfBzE57V6Ta%2Fp%2FyR6l89wfO5hu1QgWu4D&X-Amz-Signature=c35a910ec91d56c519b1db6a7629ebbebc0a7bb9a986921f733cf746fe80db81&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VIGZC7N%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T160854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNmENBug35l%2F4jxBzjB9ttVVGgdDoGZ1QcVfIxeD7lPwIhAJg6kbu0hFl%2F0nJz4ONWKgFSVtgPfjaa5F13au7LFLaZKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBn20qzAk61AG1ww0q3ANhBuqUt5E7H23npSMPcnJ0rIqeBCBO5wFSn3jEp7gJ%2Bs8eQzclnpIZZZrf%2F9sRZg3ozEEMbiWrNHQL0qdiVe%2BDssUl4YCODZqG%2FkEPl9179dQJ0Z2wDuixYd05Fk1otSSHqdmRN6XmmWq%2F4WFtZ%2BeKE3CSWfhIxyScDZdLssRnLizd5G7BoQ16UFYZRdxV2DymbXCWDrPvniAqQvy2X%2B7TDC38XZvtF9JapsMJbpKY9sx26Q3k%2B3z6xW6Ju6rByNO81CrNfLk9uGxB4b2Pp%2Boefl%2FHmC78JNyCaWUlE7FsjWSunagNrBeBb%2BEjpxLWhInTNUYcu5VrHC1%2FB26gb8Dz%2BX%2Frg9jnB5a4OXlpcCR7IeudcaZHAEK9P5zvKH1IvHJrfUmYu4YHw2lCstMvxwEG1rLIM5lMjptnunHrPhPMPsNEHEDAS6BkbMhwfDxm1%2BX9%2FPkSS4HF%2BxrhGVts%2F5M2au61uvXYop3935BW8smHjQa%2FaHhIUrana%2F%2Fld0yBMS0%2BGjyy0%2B1m8pZ8UlPcKCum5tSF1dmzfs0FZqYvBARL1gj8FnNDGds7vFo8%2FZFh0LVMZ2ANpPfLz9DD8WCl7QBDpB2VuEIqLFtzn87o5qSZjcSVRgwzXb0TixKP6jCgyfO8BjqkARbNb5M9tVJak%2F3dAVkSBWcXn7eRytZkierxQpNt%2Fw4Ry7Ble3TH1WubO0h%2FiN43KSdIITG0ojGHud%2BdOl2UXBlg29w%2F91Y%2FRHbMRd1RQ9QjIcqkOmgbrXYlo0PyE9XttU6nBE67wZ8uP3%2FE7IEmy8Myb8tw92KItFHquy3FA%2FPaQ04NVUQuG6DWWC6kfBzE57V6Ta%2Fp%2FyR6l89wfO5hu1QgWu4D&X-Amz-Signature=2dc1faecf538c64142467bdbcda69db829decd383562d27a0eadaae509f4c19f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VIGZC7N%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T160854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNmENBug35l%2F4jxBzjB9ttVVGgdDoGZ1QcVfIxeD7lPwIhAJg6kbu0hFl%2F0nJz4ONWKgFSVtgPfjaa5F13au7LFLaZKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBn20qzAk61AG1ww0q3ANhBuqUt5E7H23npSMPcnJ0rIqeBCBO5wFSn3jEp7gJ%2Bs8eQzclnpIZZZrf%2F9sRZg3ozEEMbiWrNHQL0qdiVe%2BDssUl4YCODZqG%2FkEPl9179dQJ0Z2wDuixYd05Fk1otSSHqdmRN6XmmWq%2F4WFtZ%2BeKE3CSWfhIxyScDZdLssRnLizd5G7BoQ16UFYZRdxV2DymbXCWDrPvniAqQvy2X%2B7TDC38XZvtF9JapsMJbpKY9sx26Q3k%2B3z6xW6Ju6rByNO81CrNfLk9uGxB4b2Pp%2Boefl%2FHmC78JNyCaWUlE7FsjWSunagNrBeBb%2BEjpxLWhInTNUYcu5VrHC1%2FB26gb8Dz%2BX%2Frg9jnB5a4OXlpcCR7IeudcaZHAEK9P5zvKH1IvHJrfUmYu4YHw2lCstMvxwEG1rLIM5lMjptnunHrPhPMPsNEHEDAS6BkbMhwfDxm1%2BX9%2FPkSS4HF%2BxrhGVts%2F5M2au61uvXYop3935BW8smHjQa%2FaHhIUrana%2F%2Fld0yBMS0%2BGjyy0%2B1m8pZ8UlPcKCum5tSF1dmzfs0FZqYvBARL1gj8FnNDGds7vFo8%2FZFh0LVMZ2ANpPfLz9DD8WCl7QBDpB2VuEIqLFtzn87o5qSZjcSVRgwzXb0TixKP6jCgyfO8BjqkARbNb5M9tVJak%2F3dAVkSBWcXn7eRytZkierxQpNt%2Fw4Ry7Ble3TH1WubO0h%2FiN43KSdIITG0ojGHud%2BdOl2UXBlg29w%2F91Y%2FRHbMRd1RQ9QjIcqkOmgbrXYlo0PyE9XttU6nBE67wZ8uP3%2FE7IEmy8Myb8tw92KItFHquy3FA%2FPaQ04NVUQuG6DWWC6kfBzE57V6Ta%2Fp%2FyR6l89wfO5hu1QgWu4D&X-Amz-Signature=14b5a6ff35ec1a03dd19fca8efe04e25d75f451a2f3825d1f583ca72f2e5f7bd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VIGZC7N%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T160854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNmENBug35l%2F4jxBzjB9ttVVGgdDoGZ1QcVfIxeD7lPwIhAJg6kbu0hFl%2F0nJz4ONWKgFSVtgPfjaa5F13au7LFLaZKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBn20qzAk61AG1ww0q3ANhBuqUt5E7H23npSMPcnJ0rIqeBCBO5wFSn3jEp7gJ%2Bs8eQzclnpIZZZrf%2F9sRZg3ozEEMbiWrNHQL0qdiVe%2BDssUl4YCODZqG%2FkEPl9179dQJ0Z2wDuixYd05Fk1otSSHqdmRN6XmmWq%2F4WFtZ%2BeKE3CSWfhIxyScDZdLssRnLizd5G7BoQ16UFYZRdxV2DymbXCWDrPvniAqQvy2X%2B7TDC38XZvtF9JapsMJbpKY9sx26Q3k%2B3z6xW6Ju6rByNO81CrNfLk9uGxB4b2Pp%2Boefl%2FHmC78JNyCaWUlE7FsjWSunagNrBeBb%2BEjpxLWhInTNUYcu5VrHC1%2FB26gb8Dz%2BX%2Frg9jnB5a4OXlpcCR7IeudcaZHAEK9P5zvKH1IvHJrfUmYu4YHw2lCstMvxwEG1rLIM5lMjptnunHrPhPMPsNEHEDAS6BkbMhwfDxm1%2BX9%2FPkSS4HF%2BxrhGVts%2F5M2au61uvXYop3935BW8smHjQa%2FaHhIUrana%2F%2Fld0yBMS0%2BGjyy0%2B1m8pZ8UlPcKCum5tSF1dmzfs0FZqYvBARL1gj8FnNDGds7vFo8%2FZFh0LVMZ2ANpPfLz9DD8WCl7QBDpB2VuEIqLFtzn87o5qSZjcSVRgwzXb0TixKP6jCgyfO8BjqkARbNb5M9tVJak%2F3dAVkSBWcXn7eRytZkierxQpNt%2Fw4Ry7Ble3TH1WubO0h%2FiN43KSdIITG0ojGHud%2BdOl2UXBlg29w%2F91Y%2FRHbMRd1RQ9QjIcqkOmgbrXYlo0PyE9XttU6nBE67wZ8uP3%2FE7IEmy8Myb8tw92KItFHquy3FA%2FPaQ04NVUQuG6DWWC6kfBzE57V6Ta%2Fp%2FyR6l89wfO5hu1QgWu4D&X-Amz-Signature=6cdfcb436e713059151650d4c5b0e922234dcbaf0818d6ddb2262022ddfffe1f&X-Amz-SignedHeaders=host&x-id=GetObject)
