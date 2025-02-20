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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G4IS2K7%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T041008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWMf7ZWI7zekcgardeLN8pI3e3owkY9EKRX%2FlBfl405AiEA1zeOeFnCUbGve3gb3ffUXCS3yYJp8zvAi%2Fgji2BhypoqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAPOs1z9g1s2H7PQ3yrcAzP6ha%2FrUK9muUl7vpMipJvXLXBpo2G0EMbibZz19MjUYj0Smzm5Y1W1F5BGPbUVnAi4m0xlU0RbOfpGNpQWrKYA1XInFHchbtce7%2BGI4kW0TcsDIKj0Oo6gRv0jUiUTKNxtYj29uMPGzQHvrac5g2gaYGIbA4e%2Byak9lz2%2BjzVUm34kFIw7hvkYEbUSnVSknsvXNiCZkb%2BVmrvKWLvtIRx7JtbWihGVB46fm9Uk8fwaAnc5DP%2F6eTDoLc7dI9EggGG67vx6wzc4sU4WIhLGdMdmdPE1BSKPoux04grvulJEveIdZJrQ%2FseC03BTO3B4hbbih14%2Bfym5zojj00dsK9txtbDp6QPYBtLlrW%2BlUov%2BSCTmEIBCpgXd4G0pHf3l1LBQQHh5O%2BG%2BjmbGQSVlke1mnZFZVTotk8ShCeSnGYZRQCykdadpjXc4MZXLBwVVfhXpTLIRZ5SC%2BVjkpKhHYLUoNi9VB7XOwz3Z5S6Qrez7PtwhyK6lblvVeoThk6RphTX5C9%2Bdlsq5sV%2F5U1xJcDGk1e4Ei%2BTcdhWeVRynO6cBJ%2BUWLofVzm6fGEqHQAi59ET6CNDrrzwHp5a9fnFnMtppdrO1cVcVo7iYvvJ%2BfgC%2B4oFrxFHiiSRORVUPMMvD2r0GOqUBaMl6UEz5VmSBRiz8l0MG8rF2oWaMYZHls0yuGMbD9fwOHdpZr0by2T82oWRS8C%2FrAtrTgB%2B3S1lwrDnTDIYecEKvr147Gr6lZ6zyNTaxKfNq1HKThTLXJqCisGbw9DJzb3SMpyBQxfOBKsWZHP%2BRHvN88azKUCzKgBRH9UjhpwUFI2onBRdWmV65V%2F5qNs5xlTxstFKPpFDUessC4zGNmXy3hw8p&X-Amz-Signature=b7521e1d990cba128098a9023437e964b7683c4eb23f6633687ba6bbfdabd12e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G4IS2K7%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T041008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWMf7ZWI7zekcgardeLN8pI3e3owkY9EKRX%2FlBfl405AiEA1zeOeFnCUbGve3gb3ffUXCS3yYJp8zvAi%2Fgji2BhypoqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAPOs1z9g1s2H7PQ3yrcAzP6ha%2FrUK9muUl7vpMipJvXLXBpo2G0EMbibZz19MjUYj0Smzm5Y1W1F5BGPbUVnAi4m0xlU0RbOfpGNpQWrKYA1XInFHchbtce7%2BGI4kW0TcsDIKj0Oo6gRv0jUiUTKNxtYj29uMPGzQHvrac5g2gaYGIbA4e%2Byak9lz2%2BjzVUm34kFIw7hvkYEbUSnVSknsvXNiCZkb%2BVmrvKWLvtIRx7JtbWihGVB46fm9Uk8fwaAnc5DP%2F6eTDoLc7dI9EggGG67vx6wzc4sU4WIhLGdMdmdPE1BSKPoux04grvulJEveIdZJrQ%2FseC03BTO3B4hbbih14%2Bfym5zojj00dsK9txtbDp6QPYBtLlrW%2BlUov%2BSCTmEIBCpgXd4G0pHf3l1LBQQHh5O%2BG%2BjmbGQSVlke1mnZFZVTotk8ShCeSnGYZRQCykdadpjXc4MZXLBwVVfhXpTLIRZ5SC%2BVjkpKhHYLUoNi9VB7XOwz3Z5S6Qrez7PtwhyK6lblvVeoThk6RphTX5C9%2Bdlsq5sV%2F5U1xJcDGk1e4Ei%2BTcdhWeVRynO6cBJ%2BUWLofVzm6fGEqHQAi59ET6CNDrrzwHp5a9fnFnMtppdrO1cVcVo7iYvvJ%2BfgC%2B4oFrxFHiiSRORVUPMMvD2r0GOqUBaMl6UEz5VmSBRiz8l0MG8rF2oWaMYZHls0yuGMbD9fwOHdpZr0by2T82oWRS8C%2FrAtrTgB%2B3S1lwrDnTDIYecEKvr147Gr6lZ6zyNTaxKfNq1HKThTLXJqCisGbw9DJzb3SMpyBQxfOBKsWZHP%2BRHvN88azKUCzKgBRH9UjhpwUFI2onBRdWmV65V%2F5qNs5xlTxstFKPpFDUessC4zGNmXy3hw8p&X-Amz-Signature=50164bda722048f15bff60b6064418e0381dd5b8600296ceea98b4eb9742467f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G4IS2K7%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T041008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWMf7ZWI7zekcgardeLN8pI3e3owkY9EKRX%2FlBfl405AiEA1zeOeFnCUbGve3gb3ffUXCS3yYJp8zvAi%2Fgji2BhypoqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAPOs1z9g1s2H7PQ3yrcAzP6ha%2FrUK9muUl7vpMipJvXLXBpo2G0EMbibZz19MjUYj0Smzm5Y1W1F5BGPbUVnAi4m0xlU0RbOfpGNpQWrKYA1XInFHchbtce7%2BGI4kW0TcsDIKj0Oo6gRv0jUiUTKNxtYj29uMPGzQHvrac5g2gaYGIbA4e%2Byak9lz2%2BjzVUm34kFIw7hvkYEbUSnVSknsvXNiCZkb%2BVmrvKWLvtIRx7JtbWihGVB46fm9Uk8fwaAnc5DP%2F6eTDoLc7dI9EggGG67vx6wzc4sU4WIhLGdMdmdPE1BSKPoux04grvulJEveIdZJrQ%2FseC03BTO3B4hbbih14%2Bfym5zojj00dsK9txtbDp6QPYBtLlrW%2BlUov%2BSCTmEIBCpgXd4G0pHf3l1LBQQHh5O%2BG%2BjmbGQSVlke1mnZFZVTotk8ShCeSnGYZRQCykdadpjXc4MZXLBwVVfhXpTLIRZ5SC%2BVjkpKhHYLUoNi9VB7XOwz3Z5S6Qrez7PtwhyK6lblvVeoThk6RphTX5C9%2Bdlsq5sV%2F5U1xJcDGk1e4Ei%2BTcdhWeVRynO6cBJ%2BUWLofVzm6fGEqHQAi59ET6CNDrrzwHp5a9fnFnMtppdrO1cVcVo7iYvvJ%2BfgC%2B4oFrxFHiiSRORVUPMMvD2r0GOqUBaMl6UEz5VmSBRiz8l0MG8rF2oWaMYZHls0yuGMbD9fwOHdpZr0by2T82oWRS8C%2FrAtrTgB%2B3S1lwrDnTDIYecEKvr147Gr6lZ6zyNTaxKfNq1HKThTLXJqCisGbw9DJzb3SMpyBQxfOBKsWZHP%2BRHvN88azKUCzKgBRH9UjhpwUFI2onBRdWmV65V%2F5qNs5xlTxstFKPpFDUessC4zGNmXy3hw8p&X-Amz-Signature=a07428b838460a69005d656a19f6ba95f066dfb33de91f1cb238341ef086d4e5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G4IS2K7%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T041008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWMf7ZWI7zekcgardeLN8pI3e3owkY9EKRX%2FlBfl405AiEA1zeOeFnCUbGve3gb3ffUXCS3yYJp8zvAi%2Fgji2BhypoqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAPOs1z9g1s2H7PQ3yrcAzP6ha%2FrUK9muUl7vpMipJvXLXBpo2G0EMbibZz19MjUYj0Smzm5Y1W1F5BGPbUVnAi4m0xlU0RbOfpGNpQWrKYA1XInFHchbtce7%2BGI4kW0TcsDIKj0Oo6gRv0jUiUTKNxtYj29uMPGzQHvrac5g2gaYGIbA4e%2Byak9lz2%2BjzVUm34kFIw7hvkYEbUSnVSknsvXNiCZkb%2BVmrvKWLvtIRx7JtbWihGVB46fm9Uk8fwaAnc5DP%2F6eTDoLc7dI9EggGG67vx6wzc4sU4WIhLGdMdmdPE1BSKPoux04grvulJEveIdZJrQ%2FseC03BTO3B4hbbih14%2Bfym5zojj00dsK9txtbDp6QPYBtLlrW%2BlUov%2BSCTmEIBCpgXd4G0pHf3l1LBQQHh5O%2BG%2BjmbGQSVlke1mnZFZVTotk8ShCeSnGYZRQCykdadpjXc4MZXLBwVVfhXpTLIRZ5SC%2BVjkpKhHYLUoNi9VB7XOwz3Z5S6Qrez7PtwhyK6lblvVeoThk6RphTX5C9%2Bdlsq5sV%2F5U1xJcDGk1e4Ei%2BTcdhWeVRynO6cBJ%2BUWLofVzm6fGEqHQAi59ET6CNDrrzwHp5a9fnFnMtppdrO1cVcVo7iYvvJ%2BfgC%2B4oFrxFHiiSRORVUPMMvD2r0GOqUBaMl6UEz5VmSBRiz8l0MG8rF2oWaMYZHls0yuGMbD9fwOHdpZr0by2T82oWRS8C%2FrAtrTgB%2B3S1lwrDnTDIYecEKvr147Gr6lZ6zyNTaxKfNq1HKThTLXJqCisGbw9DJzb3SMpyBQxfOBKsWZHP%2BRHvN88azKUCzKgBRH9UjhpwUFI2onBRdWmV65V%2F5qNs5xlTxstFKPpFDUessC4zGNmXy3hw8p&X-Amz-Signature=3d4de03aedc5651f71d0a480b2fe1e686815e055c5633dd453636384670950d5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G4IS2K7%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T041008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWMf7ZWI7zekcgardeLN8pI3e3owkY9EKRX%2FlBfl405AiEA1zeOeFnCUbGve3gb3ffUXCS3yYJp8zvAi%2Fgji2BhypoqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAPOs1z9g1s2H7PQ3yrcAzP6ha%2FrUK9muUl7vpMipJvXLXBpo2G0EMbibZz19MjUYj0Smzm5Y1W1F5BGPbUVnAi4m0xlU0RbOfpGNpQWrKYA1XInFHchbtce7%2BGI4kW0TcsDIKj0Oo6gRv0jUiUTKNxtYj29uMPGzQHvrac5g2gaYGIbA4e%2Byak9lz2%2BjzVUm34kFIw7hvkYEbUSnVSknsvXNiCZkb%2BVmrvKWLvtIRx7JtbWihGVB46fm9Uk8fwaAnc5DP%2F6eTDoLc7dI9EggGG67vx6wzc4sU4WIhLGdMdmdPE1BSKPoux04grvulJEveIdZJrQ%2FseC03BTO3B4hbbih14%2Bfym5zojj00dsK9txtbDp6QPYBtLlrW%2BlUov%2BSCTmEIBCpgXd4G0pHf3l1LBQQHh5O%2BG%2BjmbGQSVlke1mnZFZVTotk8ShCeSnGYZRQCykdadpjXc4MZXLBwVVfhXpTLIRZ5SC%2BVjkpKhHYLUoNi9VB7XOwz3Z5S6Qrez7PtwhyK6lblvVeoThk6RphTX5C9%2Bdlsq5sV%2F5U1xJcDGk1e4Ei%2BTcdhWeVRynO6cBJ%2BUWLofVzm6fGEqHQAi59ET6CNDrrzwHp5a9fnFnMtppdrO1cVcVo7iYvvJ%2BfgC%2B4oFrxFHiiSRORVUPMMvD2r0GOqUBaMl6UEz5VmSBRiz8l0MG8rF2oWaMYZHls0yuGMbD9fwOHdpZr0by2T82oWRS8C%2FrAtrTgB%2B3S1lwrDnTDIYecEKvr147Gr6lZ6zyNTaxKfNq1HKThTLXJqCisGbw9DJzb3SMpyBQxfOBKsWZHP%2BRHvN88azKUCzKgBRH9UjhpwUFI2onBRdWmV65V%2F5qNs5xlTxstFKPpFDUessC4zGNmXy3hw8p&X-Amz-Signature=d482dcc474df657ae8bc50ac739cdb90a44cd0ee7eab37e8412ffad32ac9102d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G4IS2K7%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T041008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWMf7ZWI7zekcgardeLN8pI3e3owkY9EKRX%2FlBfl405AiEA1zeOeFnCUbGve3gb3ffUXCS3yYJp8zvAi%2Fgji2BhypoqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAPOs1z9g1s2H7PQ3yrcAzP6ha%2FrUK9muUl7vpMipJvXLXBpo2G0EMbibZz19MjUYj0Smzm5Y1W1F5BGPbUVnAi4m0xlU0RbOfpGNpQWrKYA1XInFHchbtce7%2BGI4kW0TcsDIKj0Oo6gRv0jUiUTKNxtYj29uMPGzQHvrac5g2gaYGIbA4e%2Byak9lz2%2BjzVUm34kFIw7hvkYEbUSnVSknsvXNiCZkb%2BVmrvKWLvtIRx7JtbWihGVB46fm9Uk8fwaAnc5DP%2F6eTDoLc7dI9EggGG67vx6wzc4sU4WIhLGdMdmdPE1BSKPoux04grvulJEveIdZJrQ%2FseC03BTO3B4hbbih14%2Bfym5zojj00dsK9txtbDp6QPYBtLlrW%2BlUov%2BSCTmEIBCpgXd4G0pHf3l1LBQQHh5O%2BG%2BjmbGQSVlke1mnZFZVTotk8ShCeSnGYZRQCykdadpjXc4MZXLBwVVfhXpTLIRZ5SC%2BVjkpKhHYLUoNi9VB7XOwz3Z5S6Qrez7PtwhyK6lblvVeoThk6RphTX5C9%2Bdlsq5sV%2F5U1xJcDGk1e4Ei%2BTcdhWeVRynO6cBJ%2BUWLofVzm6fGEqHQAi59ET6CNDrrzwHp5a9fnFnMtppdrO1cVcVo7iYvvJ%2BfgC%2B4oFrxFHiiSRORVUPMMvD2r0GOqUBaMl6UEz5VmSBRiz8l0MG8rF2oWaMYZHls0yuGMbD9fwOHdpZr0by2T82oWRS8C%2FrAtrTgB%2B3S1lwrDnTDIYecEKvr147Gr6lZ6zyNTaxKfNq1HKThTLXJqCisGbw9DJzb3SMpyBQxfOBKsWZHP%2BRHvN88azKUCzKgBRH9UjhpwUFI2onBRdWmV65V%2F5qNs5xlTxstFKPpFDUessC4zGNmXy3hw8p&X-Amz-Signature=42e112efac3765785a2a8e93a75fcd6a8dcbfb8e774533f65c9d4b2dcfdd4ddc&X-Amz-SignedHeaders=host&x-id=GetObject)
