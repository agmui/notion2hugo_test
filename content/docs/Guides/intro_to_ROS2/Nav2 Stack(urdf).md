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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE4V3FPJ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T061148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHU6mpOdpkmPXp3sYemSmvAOgL0jGD5rCAigNtl3fAOBAiEAjgShfj1iGnrUfY8XN1sP0hx%2BMjruqdqZgQl6NjOJbZEqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRr%2BlZwhGvzDMw05CrcA8WRxee4NdncELdcnVsFpkuxjnXUVx1AeFTaOOmlcc5sAiqjvv%2BA43mCG54Qi7l8RWtih06DmCsIcnxc5YNUNEy46QFztkYbFL9JCjeUCTG%2FM3rC9uFXKfC4nvl2WLtJE5%2BP905VsCdmVpz3f3bi%2FA1YyF643CGn8miOEYSaOgLp0zA6xEcpB4EEMBzAmsykPtzNE6DAva6s5LfCAsMYydExp%2FhvzCjD1jw%2FRzcZxgO2scyT9fj8%2BDAYcOiCFETN%2B7K1%2FdkpSyTmQLBG4Z3X1RZt5Shwg2rshfi%2Fz909HqwRjfnbBDX7oS4oWBAn1PfHVpfLYsUWzIh8oPrpD%2BrLa%2Bb%2F73Xf2sY%2BSv6r0fm7r7nJTwh5dYAHmSCzyxAEXy0IvvncJZF4d1ZmcDZqLbkI06K6ynIEqpNRpLLN%2FQ3Rh4OPE53d6xYnc8NIip6M5QEvFn9zpnCL2MX8bscEe4u0xqsWNKOqdkYxnF1buzaGpaMdzIuCw06ZAZslTHHeLeSW3u3nmFuEXb3b0V3wYhpm94oJuq94XsxWZY3ViI6oJKcdWXrblXSxVLg7I9HhZxuSwPQsuY8MMlT6EeD4b785Fg%2FSuHGqVW0WGXYnsEa%2BLie5YN7a94S4xyU1e1uaMO%2Fmr70GOqUBOBShGHp8mlO2NymhIvG%2FOcrb4xP8fFAyK1uM%2FEp9fF2UzYj7wKQgJc8XO5qFFWGMLuQsm14lcMHWeBHyKgTwWfIluJdr80nfArDNBxmo3I4ckWGdKw9u8jT9F9z2YfQpyTK%2BWossOBADpPifTXsaYELRx6uAdYZQcfQtq3GWnhmBF5lZH%2BbBoUuj3%2FiTeaSG4lEkz9BSGiVGT5g8XkreAlxijVRq&X-Amz-Signature=82609df3afbec80ac08c67c3edb1724dfbd18ade005273fc00027ca2a89b3d15&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE4V3FPJ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T061148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHU6mpOdpkmPXp3sYemSmvAOgL0jGD5rCAigNtl3fAOBAiEAjgShfj1iGnrUfY8XN1sP0hx%2BMjruqdqZgQl6NjOJbZEqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRr%2BlZwhGvzDMw05CrcA8WRxee4NdncELdcnVsFpkuxjnXUVx1AeFTaOOmlcc5sAiqjvv%2BA43mCG54Qi7l8RWtih06DmCsIcnxc5YNUNEy46QFztkYbFL9JCjeUCTG%2FM3rC9uFXKfC4nvl2WLtJE5%2BP905VsCdmVpz3f3bi%2FA1YyF643CGn8miOEYSaOgLp0zA6xEcpB4EEMBzAmsykPtzNE6DAva6s5LfCAsMYydExp%2FhvzCjD1jw%2FRzcZxgO2scyT9fj8%2BDAYcOiCFETN%2B7K1%2FdkpSyTmQLBG4Z3X1RZt5Shwg2rshfi%2Fz909HqwRjfnbBDX7oS4oWBAn1PfHVpfLYsUWzIh8oPrpD%2BrLa%2Bb%2F73Xf2sY%2BSv6r0fm7r7nJTwh5dYAHmSCzyxAEXy0IvvncJZF4d1ZmcDZqLbkI06K6ynIEqpNRpLLN%2FQ3Rh4OPE53d6xYnc8NIip6M5QEvFn9zpnCL2MX8bscEe4u0xqsWNKOqdkYxnF1buzaGpaMdzIuCw06ZAZslTHHeLeSW3u3nmFuEXb3b0V3wYhpm94oJuq94XsxWZY3ViI6oJKcdWXrblXSxVLg7I9HhZxuSwPQsuY8MMlT6EeD4b785Fg%2FSuHGqVW0WGXYnsEa%2BLie5YN7a94S4xyU1e1uaMO%2Fmr70GOqUBOBShGHp8mlO2NymhIvG%2FOcrb4xP8fFAyK1uM%2FEp9fF2UzYj7wKQgJc8XO5qFFWGMLuQsm14lcMHWeBHyKgTwWfIluJdr80nfArDNBxmo3I4ckWGdKw9u8jT9F9z2YfQpyTK%2BWossOBADpPifTXsaYELRx6uAdYZQcfQtq3GWnhmBF5lZH%2BbBoUuj3%2FiTeaSG4lEkz9BSGiVGT5g8XkreAlxijVRq&X-Amz-Signature=1390c42e6fcdd1cac180106c474a2f3511430fbff0f6f9f66c656b8a0166c13d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE4V3FPJ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T061148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHU6mpOdpkmPXp3sYemSmvAOgL0jGD5rCAigNtl3fAOBAiEAjgShfj1iGnrUfY8XN1sP0hx%2BMjruqdqZgQl6NjOJbZEqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRr%2BlZwhGvzDMw05CrcA8WRxee4NdncELdcnVsFpkuxjnXUVx1AeFTaOOmlcc5sAiqjvv%2BA43mCG54Qi7l8RWtih06DmCsIcnxc5YNUNEy46QFztkYbFL9JCjeUCTG%2FM3rC9uFXKfC4nvl2WLtJE5%2BP905VsCdmVpz3f3bi%2FA1YyF643CGn8miOEYSaOgLp0zA6xEcpB4EEMBzAmsykPtzNE6DAva6s5LfCAsMYydExp%2FhvzCjD1jw%2FRzcZxgO2scyT9fj8%2BDAYcOiCFETN%2B7K1%2FdkpSyTmQLBG4Z3X1RZt5Shwg2rshfi%2Fz909HqwRjfnbBDX7oS4oWBAn1PfHVpfLYsUWzIh8oPrpD%2BrLa%2Bb%2F73Xf2sY%2BSv6r0fm7r7nJTwh5dYAHmSCzyxAEXy0IvvncJZF4d1ZmcDZqLbkI06K6ynIEqpNRpLLN%2FQ3Rh4OPE53d6xYnc8NIip6M5QEvFn9zpnCL2MX8bscEe4u0xqsWNKOqdkYxnF1buzaGpaMdzIuCw06ZAZslTHHeLeSW3u3nmFuEXb3b0V3wYhpm94oJuq94XsxWZY3ViI6oJKcdWXrblXSxVLg7I9HhZxuSwPQsuY8MMlT6EeD4b785Fg%2FSuHGqVW0WGXYnsEa%2BLie5YN7a94S4xyU1e1uaMO%2Fmr70GOqUBOBShGHp8mlO2NymhIvG%2FOcrb4xP8fFAyK1uM%2FEp9fF2UzYj7wKQgJc8XO5qFFWGMLuQsm14lcMHWeBHyKgTwWfIluJdr80nfArDNBxmo3I4ckWGdKw9u8jT9F9z2YfQpyTK%2BWossOBADpPifTXsaYELRx6uAdYZQcfQtq3GWnhmBF5lZH%2BbBoUuj3%2FiTeaSG4lEkz9BSGiVGT5g8XkreAlxijVRq&X-Amz-Signature=69c7379073aefd5ea94d87a968805a1014b212bb4910f3553ce4d35f22743696&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE4V3FPJ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T061148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHU6mpOdpkmPXp3sYemSmvAOgL0jGD5rCAigNtl3fAOBAiEAjgShfj1iGnrUfY8XN1sP0hx%2BMjruqdqZgQl6NjOJbZEqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRr%2BlZwhGvzDMw05CrcA8WRxee4NdncELdcnVsFpkuxjnXUVx1AeFTaOOmlcc5sAiqjvv%2BA43mCG54Qi7l8RWtih06DmCsIcnxc5YNUNEy46QFztkYbFL9JCjeUCTG%2FM3rC9uFXKfC4nvl2WLtJE5%2BP905VsCdmVpz3f3bi%2FA1YyF643CGn8miOEYSaOgLp0zA6xEcpB4EEMBzAmsykPtzNE6DAva6s5LfCAsMYydExp%2FhvzCjD1jw%2FRzcZxgO2scyT9fj8%2BDAYcOiCFETN%2B7K1%2FdkpSyTmQLBG4Z3X1RZt5Shwg2rshfi%2Fz909HqwRjfnbBDX7oS4oWBAn1PfHVpfLYsUWzIh8oPrpD%2BrLa%2Bb%2F73Xf2sY%2BSv6r0fm7r7nJTwh5dYAHmSCzyxAEXy0IvvncJZF4d1ZmcDZqLbkI06K6ynIEqpNRpLLN%2FQ3Rh4OPE53d6xYnc8NIip6M5QEvFn9zpnCL2MX8bscEe4u0xqsWNKOqdkYxnF1buzaGpaMdzIuCw06ZAZslTHHeLeSW3u3nmFuEXb3b0V3wYhpm94oJuq94XsxWZY3ViI6oJKcdWXrblXSxVLg7I9HhZxuSwPQsuY8MMlT6EeD4b785Fg%2FSuHGqVW0WGXYnsEa%2BLie5YN7a94S4xyU1e1uaMO%2Fmr70GOqUBOBShGHp8mlO2NymhIvG%2FOcrb4xP8fFAyK1uM%2FEp9fF2UzYj7wKQgJc8XO5qFFWGMLuQsm14lcMHWeBHyKgTwWfIluJdr80nfArDNBxmo3I4ckWGdKw9u8jT9F9z2YfQpyTK%2BWossOBADpPifTXsaYELRx6uAdYZQcfQtq3GWnhmBF5lZH%2BbBoUuj3%2FiTeaSG4lEkz9BSGiVGT5g8XkreAlxijVRq&X-Amz-Signature=a1ab85fb0b28b3977ac493487c1cff87e648879bf214162647ff7b14f74c2eb8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE4V3FPJ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T061148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHU6mpOdpkmPXp3sYemSmvAOgL0jGD5rCAigNtl3fAOBAiEAjgShfj1iGnrUfY8XN1sP0hx%2BMjruqdqZgQl6NjOJbZEqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRr%2BlZwhGvzDMw05CrcA8WRxee4NdncELdcnVsFpkuxjnXUVx1AeFTaOOmlcc5sAiqjvv%2BA43mCG54Qi7l8RWtih06DmCsIcnxc5YNUNEy46QFztkYbFL9JCjeUCTG%2FM3rC9uFXKfC4nvl2WLtJE5%2BP905VsCdmVpz3f3bi%2FA1YyF643CGn8miOEYSaOgLp0zA6xEcpB4EEMBzAmsykPtzNE6DAva6s5LfCAsMYydExp%2FhvzCjD1jw%2FRzcZxgO2scyT9fj8%2BDAYcOiCFETN%2B7K1%2FdkpSyTmQLBG4Z3X1RZt5Shwg2rshfi%2Fz909HqwRjfnbBDX7oS4oWBAn1PfHVpfLYsUWzIh8oPrpD%2BrLa%2Bb%2F73Xf2sY%2BSv6r0fm7r7nJTwh5dYAHmSCzyxAEXy0IvvncJZF4d1ZmcDZqLbkI06K6ynIEqpNRpLLN%2FQ3Rh4OPE53d6xYnc8NIip6M5QEvFn9zpnCL2MX8bscEe4u0xqsWNKOqdkYxnF1buzaGpaMdzIuCw06ZAZslTHHeLeSW3u3nmFuEXb3b0V3wYhpm94oJuq94XsxWZY3ViI6oJKcdWXrblXSxVLg7I9HhZxuSwPQsuY8MMlT6EeD4b785Fg%2FSuHGqVW0WGXYnsEa%2BLie5YN7a94S4xyU1e1uaMO%2Fmr70GOqUBOBShGHp8mlO2NymhIvG%2FOcrb4xP8fFAyK1uM%2FEp9fF2UzYj7wKQgJc8XO5qFFWGMLuQsm14lcMHWeBHyKgTwWfIluJdr80nfArDNBxmo3I4ckWGdKw9u8jT9F9z2YfQpyTK%2BWossOBADpPifTXsaYELRx6uAdYZQcfQtq3GWnhmBF5lZH%2BbBoUuj3%2FiTeaSG4lEkz9BSGiVGT5g8XkreAlxijVRq&X-Amz-Signature=1ddc7280d08efa52bccf8423db827520420387b2eaf6cb26289337b54d0756be&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE4V3FPJ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T061148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHU6mpOdpkmPXp3sYemSmvAOgL0jGD5rCAigNtl3fAOBAiEAjgShfj1iGnrUfY8XN1sP0hx%2BMjruqdqZgQl6NjOJbZEqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNRr%2BlZwhGvzDMw05CrcA8WRxee4NdncELdcnVsFpkuxjnXUVx1AeFTaOOmlcc5sAiqjvv%2BA43mCG54Qi7l8RWtih06DmCsIcnxc5YNUNEy46QFztkYbFL9JCjeUCTG%2FM3rC9uFXKfC4nvl2WLtJE5%2BP905VsCdmVpz3f3bi%2FA1YyF643CGn8miOEYSaOgLp0zA6xEcpB4EEMBzAmsykPtzNE6DAva6s5LfCAsMYydExp%2FhvzCjD1jw%2FRzcZxgO2scyT9fj8%2BDAYcOiCFETN%2B7K1%2FdkpSyTmQLBG4Z3X1RZt5Shwg2rshfi%2Fz909HqwRjfnbBDX7oS4oWBAn1PfHVpfLYsUWzIh8oPrpD%2BrLa%2Bb%2F73Xf2sY%2BSv6r0fm7r7nJTwh5dYAHmSCzyxAEXy0IvvncJZF4d1ZmcDZqLbkI06K6ynIEqpNRpLLN%2FQ3Rh4OPE53d6xYnc8NIip6M5QEvFn9zpnCL2MX8bscEe4u0xqsWNKOqdkYxnF1buzaGpaMdzIuCw06ZAZslTHHeLeSW3u3nmFuEXb3b0V3wYhpm94oJuq94XsxWZY3ViI6oJKcdWXrblXSxVLg7I9HhZxuSwPQsuY8MMlT6EeD4b785Fg%2FSuHGqVW0WGXYnsEa%2BLie5YN7a94S4xyU1e1uaMO%2Fmr70GOqUBOBShGHp8mlO2NymhIvG%2FOcrb4xP8fFAyK1uM%2FEp9fF2UzYj7wKQgJc8XO5qFFWGMLuQsm14lcMHWeBHyKgTwWfIluJdr80nfArDNBxmo3I4ckWGdKw9u8jT9F9z2YfQpyTK%2BWossOBADpPifTXsaYELRx6uAdYZQcfQtq3GWnhmBF5lZH%2BbBoUuj3%2FiTeaSG4lEkz9BSGiVGT5g8XkreAlxijVRq&X-Amz-Signature=a299423bb1559388f31f3ad87456bc48fc35de55e5ceb4d15ef40fd557580672&X-Amz-SignedHeaders=host&x-id=GetObject)
