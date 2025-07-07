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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RJFF7RH%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T034845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIG2Wqydi2EfaoMC30QrjfKUZyohm6sqhlFMZOfTM0t0DAiEAiea%2F0g5ntXqM2SlhZFurnKLxsnv8d3a%2FpBfAgg%2FDfx8q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDDNYQY19tfafqjhbrircA8G1Z%2BazEnpc30q3x1XSuHH8liSVdS%2Bnqoiw6cB97QB15dbeP30sNlgiV6d5MjuyJmAKBdxUuT21sOV1JsLCOmmTmGdjEdEDu8sdGAGBLdoJvoQTeadv%2FCgXAh32UprHCRdGTRFKZT6194%2FrUGdm0BbZCGYPGtc1%2Fwcxed8GBYd7Vl%2BLy0YX128%2BAW4PteOJvwtlLpdZ%2FCS%2BZ9usBAYn0ErMPlKaA1EsFShBO26vf5ZvUdrCq8R5MRfB%2B3kMr2sguFqgi7W0nH93Y4lWgWO8sOb82X69JFJW7CQ46%2BE2ymrdwp8LrVq634EwErMNL6Io7lAzSvlxeqttRYAZtgTtrBbr7Mj%2FJtenGFAjju65SX6ssSyu75i6zAR6UvYe71%2FfrC1br3ibcZBIaBg9bUWDuCrLXTEE7hp2jmb1UpEYzPj0KcAs3mMYmEgP1LR2cHEOo7G75LxxZCHyrrIjhatCi6YIh5Smc8ZcXUB2DaqswR0AoRXuCop2V8DB6BOetM0XuwoeBJ6NfLoujFYPWnFzmK5Mfd3Yz27J7B9dt4vMseuMh221RagxxBQJt%2FPP9AVL9Tss2mvuOG%2F6iBWZjvRA70iIbh5UYkNDzspNx37%2FOmUh4%2Fj%2FqotypYa6M0zEMIOSrMMGOqUBcEbXgvXwCI85x4ZuEc9LblVD%2FTP06YrlgsrheeOe2F16dibLQ%2BVERyDKGw%2BueseC22oeaIeAj4StgNsV%2FWSr%2FC0%2FAMxcymouORis6h51gLxqMoAWMMj%2FVx3d%2F1NpmpLjxY%2FBmcOigGFO%2FV1u6sPJ6NTuFnvzY%2FgaBQt6Ixaf9s2AR6ESiSrvPUz2S2IIwpmT6mE7mtMdhSeUaY2m%2BxOIJoFdW0i8&X-Amz-Signature=43cdb6d2daab04bc5a4a266312f7dab439f44565baf3f018b93acbfeb90c9d15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RJFF7RH%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T034845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIG2Wqydi2EfaoMC30QrjfKUZyohm6sqhlFMZOfTM0t0DAiEAiea%2F0g5ntXqM2SlhZFurnKLxsnv8d3a%2FpBfAgg%2FDfx8q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDDNYQY19tfafqjhbrircA8G1Z%2BazEnpc30q3x1XSuHH8liSVdS%2Bnqoiw6cB97QB15dbeP30sNlgiV6d5MjuyJmAKBdxUuT21sOV1JsLCOmmTmGdjEdEDu8sdGAGBLdoJvoQTeadv%2FCgXAh32UprHCRdGTRFKZT6194%2FrUGdm0BbZCGYPGtc1%2Fwcxed8GBYd7Vl%2BLy0YX128%2BAW4PteOJvwtlLpdZ%2FCS%2BZ9usBAYn0ErMPlKaA1EsFShBO26vf5ZvUdrCq8R5MRfB%2B3kMr2sguFqgi7W0nH93Y4lWgWO8sOb82X69JFJW7CQ46%2BE2ymrdwp8LrVq634EwErMNL6Io7lAzSvlxeqttRYAZtgTtrBbr7Mj%2FJtenGFAjju65SX6ssSyu75i6zAR6UvYe71%2FfrC1br3ibcZBIaBg9bUWDuCrLXTEE7hp2jmb1UpEYzPj0KcAs3mMYmEgP1LR2cHEOo7G75LxxZCHyrrIjhatCi6YIh5Smc8ZcXUB2DaqswR0AoRXuCop2V8DB6BOetM0XuwoeBJ6NfLoujFYPWnFzmK5Mfd3Yz27J7B9dt4vMseuMh221RagxxBQJt%2FPP9AVL9Tss2mvuOG%2F6iBWZjvRA70iIbh5UYkNDzspNx37%2FOmUh4%2Fj%2FqotypYa6M0zEMIOSrMMGOqUBcEbXgvXwCI85x4ZuEc9LblVD%2FTP06YrlgsrheeOe2F16dibLQ%2BVERyDKGw%2BueseC22oeaIeAj4StgNsV%2FWSr%2FC0%2FAMxcymouORis6h51gLxqMoAWMMj%2FVx3d%2F1NpmpLjxY%2FBmcOigGFO%2FV1u6sPJ6NTuFnvzY%2FgaBQt6Ixaf9s2AR6ESiSrvPUz2S2IIwpmT6mE7mtMdhSeUaY2m%2BxOIJoFdW0i8&X-Amz-Signature=c3652af9fc57f8a8c4394421ec618a65661cdc365ddc64eee0ec85586ac05371&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RJFF7RH%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T034845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIG2Wqydi2EfaoMC30QrjfKUZyohm6sqhlFMZOfTM0t0DAiEAiea%2F0g5ntXqM2SlhZFurnKLxsnv8d3a%2FpBfAgg%2FDfx8q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDDNYQY19tfafqjhbrircA8G1Z%2BazEnpc30q3x1XSuHH8liSVdS%2Bnqoiw6cB97QB15dbeP30sNlgiV6d5MjuyJmAKBdxUuT21sOV1JsLCOmmTmGdjEdEDu8sdGAGBLdoJvoQTeadv%2FCgXAh32UprHCRdGTRFKZT6194%2FrUGdm0BbZCGYPGtc1%2Fwcxed8GBYd7Vl%2BLy0YX128%2BAW4PteOJvwtlLpdZ%2FCS%2BZ9usBAYn0ErMPlKaA1EsFShBO26vf5ZvUdrCq8R5MRfB%2B3kMr2sguFqgi7W0nH93Y4lWgWO8sOb82X69JFJW7CQ46%2BE2ymrdwp8LrVq634EwErMNL6Io7lAzSvlxeqttRYAZtgTtrBbr7Mj%2FJtenGFAjju65SX6ssSyu75i6zAR6UvYe71%2FfrC1br3ibcZBIaBg9bUWDuCrLXTEE7hp2jmb1UpEYzPj0KcAs3mMYmEgP1LR2cHEOo7G75LxxZCHyrrIjhatCi6YIh5Smc8ZcXUB2DaqswR0AoRXuCop2V8DB6BOetM0XuwoeBJ6NfLoujFYPWnFzmK5Mfd3Yz27J7B9dt4vMseuMh221RagxxBQJt%2FPP9AVL9Tss2mvuOG%2F6iBWZjvRA70iIbh5UYkNDzspNx37%2FOmUh4%2Fj%2FqotypYa6M0zEMIOSrMMGOqUBcEbXgvXwCI85x4ZuEc9LblVD%2FTP06YrlgsrheeOe2F16dibLQ%2BVERyDKGw%2BueseC22oeaIeAj4StgNsV%2FWSr%2FC0%2FAMxcymouORis6h51gLxqMoAWMMj%2FVx3d%2F1NpmpLjxY%2FBmcOigGFO%2FV1u6sPJ6NTuFnvzY%2FgaBQt6Ixaf9s2AR6ESiSrvPUz2S2IIwpmT6mE7mtMdhSeUaY2m%2BxOIJoFdW0i8&X-Amz-Signature=f6dc89aa28996f55d49b68883437e879005da4f917df5d0265f35f5b14bd97eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RJFF7RH%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T034845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIG2Wqydi2EfaoMC30QrjfKUZyohm6sqhlFMZOfTM0t0DAiEAiea%2F0g5ntXqM2SlhZFurnKLxsnv8d3a%2FpBfAgg%2FDfx8q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDDNYQY19tfafqjhbrircA8G1Z%2BazEnpc30q3x1XSuHH8liSVdS%2Bnqoiw6cB97QB15dbeP30sNlgiV6d5MjuyJmAKBdxUuT21sOV1JsLCOmmTmGdjEdEDu8sdGAGBLdoJvoQTeadv%2FCgXAh32UprHCRdGTRFKZT6194%2FrUGdm0BbZCGYPGtc1%2Fwcxed8GBYd7Vl%2BLy0YX128%2BAW4PteOJvwtlLpdZ%2FCS%2BZ9usBAYn0ErMPlKaA1EsFShBO26vf5ZvUdrCq8R5MRfB%2B3kMr2sguFqgi7W0nH93Y4lWgWO8sOb82X69JFJW7CQ46%2BE2ymrdwp8LrVq634EwErMNL6Io7lAzSvlxeqttRYAZtgTtrBbr7Mj%2FJtenGFAjju65SX6ssSyu75i6zAR6UvYe71%2FfrC1br3ibcZBIaBg9bUWDuCrLXTEE7hp2jmb1UpEYzPj0KcAs3mMYmEgP1LR2cHEOo7G75LxxZCHyrrIjhatCi6YIh5Smc8ZcXUB2DaqswR0AoRXuCop2V8DB6BOetM0XuwoeBJ6NfLoujFYPWnFzmK5Mfd3Yz27J7B9dt4vMseuMh221RagxxBQJt%2FPP9AVL9Tss2mvuOG%2F6iBWZjvRA70iIbh5UYkNDzspNx37%2FOmUh4%2Fj%2FqotypYa6M0zEMIOSrMMGOqUBcEbXgvXwCI85x4ZuEc9LblVD%2FTP06YrlgsrheeOe2F16dibLQ%2BVERyDKGw%2BueseC22oeaIeAj4StgNsV%2FWSr%2FC0%2FAMxcymouORis6h51gLxqMoAWMMj%2FVx3d%2F1NpmpLjxY%2FBmcOigGFO%2FV1u6sPJ6NTuFnvzY%2FgaBQt6Ixaf9s2AR6ESiSrvPUz2S2IIwpmT6mE7mtMdhSeUaY2m%2BxOIJoFdW0i8&X-Amz-Signature=76b347b594e2ab6e7b0b89d0f596856d6a9983565ccf8ea4a08e9af91534da0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RJFF7RH%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T034845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIG2Wqydi2EfaoMC30QrjfKUZyohm6sqhlFMZOfTM0t0DAiEAiea%2F0g5ntXqM2SlhZFurnKLxsnv8d3a%2FpBfAgg%2FDfx8q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDDNYQY19tfafqjhbrircA8G1Z%2BazEnpc30q3x1XSuHH8liSVdS%2Bnqoiw6cB97QB15dbeP30sNlgiV6d5MjuyJmAKBdxUuT21sOV1JsLCOmmTmGdjEdEDu8sdGAGBLdoJvoQTeadv%2FCgXAh32UprHCRdGTRFKZT6194%2FrUGdm0BbZCGYPGtc1%2Fwcxed8GBYd7Vl%2BLy0YX128%2BAW4PteOJvwtlLpdZ%2FCS%2BZ9usBAYn0ErMPlKaA1EsFShBO26vf5ZvUdrCq8R5MRfB%2B3kMr2sguFqgi7W0nH93Y4lWgWO8sOb82X69JFJW7CQ46%2BE2ymrdwp8LrVq634EwErMNL6Io7lAzSvlxeqttRYAZtgTtrBbr7Mj%2FJtenGFAjju65SX6ssSyu75i6zAR6UvYe71%2FfrC1br3ibcZBIaBg9bUWDuCrLXTEE7hp2jmb1UpEYzPj0KcAs3mMYmEgP1LR2cHEOo7G75LxxZCHyrrIjhatCi6YIh5Smc8ZcXUB2DaqswR0AoRXuCop2V8DB6BOetM0XuwoeBJ6NfLoujFYPWnFzmK5Mfd3Yz27J7B9dt4vMseuMh221RagxxBQJt%2FPP9AVL9Tss2mvuOG%2F6iBWZjvRA70iIbh5UYkNDzspNx37%2FOmUh4%2Fj%2FqotypYa6M0zEMIOSrMMGOqUBcEbXgvXwCI85x4ZuEc9LblVD%2FTP06YrlgsrheeOe2F16dibLQ%2BVERyDKGw%2BueseC22oeaIeAj4StgNsV%2FWSr%2FC0%2FAMxcymouORis6h51gLxqMoAWMMj%2FVx3d%2F1NpmpLjxY%2FBmcOigGFO%2FV1u6sPJ6NTuFnvzY%2FgaBQt6Ixaf9s2AR6ESiSrvPUz2S2IIwpmT6mE7mtMdhSeUaY2m%2BxOIJoFdW0i8&X-Amz-Signature=b97a7796d465dc9235c5275a246419e2a3fdcd229272726b11d1962e4af7a659&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RJFF7RH%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T034845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIG2Wqydi2EfaoMC30QrjfKUZyohm6sqhlFMZOfTM0t0DAiEAiea%2F0g5ntXqM2SlhZFurnKLxsnv8d3a%2FpBfAgg%2FDfx8q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDDNYQY19tfafqjhbrircA8G1Z%2BazEnpc30q3x1XSuHH8liSVdS%2Bnqoiw6cB97QB15dbeP30sNlgiV6d5MjuyJmAKBdxUuT21sOV1JsLCOmmTmGdjEdEDu8sdGAGBLdoJvoQTeadv%2FCgXAh32UprHCRdGTRFKZT6194%2FrUGdm0BbZCGYPGtc1%2Fwcxed8GBYd7Vl%2BLy0YX128%2BAW4PteOJvwtlLpdZ%2FCS%2BZ9usBAYn0ErMPlKaA1EsFShBO26vf5ZvUdrCq8R5MRfB%2B3kMr2sguFqgi7W0nH93Y4lWgWO8sOb82X69JFJW7CQ46%2BE2ymrdwp8LrVq634EwErMNL6Io7lAzSvlxeqttRYAZtgTtrBbr7Mj%2FJtenGFAjju65SX6ssSyu75i6zAR6UvYe71%2FfrC1br3ibcZBIaBg9bUWDuCrLXTEE7hp2jmb1UpEYzPj0KcAs3mMYmEgP1LR2cHEOo7G75LxxZCHyrrIjhatCi6YIh5Smc8ZcXUB2DaqswR0AoRXuCop2V8DB6BOetM0XuwoeBJ6NfLoujFYPWnFzmK5Mfd3Yz27J7B9dt4vMseuMh221RagxxBQJt%2FPP9AVL9Tss2mvuOG%2F6iBWZjvRA70iIbh5UYkNDzspNx37%2FOmUh4%2Fj%2FqotypYa6M0zEMIOSrMMGOqUBcEbXgvXwCI85x4ZuEc9LblVD%2FTP06YrlgsrheeOe2F16dibLQ%2BVERyDKGw%2BueseC22oeaIeAj4StgNsV%2FWSr%2FC0%2FAMxcymouORis6h51gLxqMoAWMMj%2FVx3d%2F1NpmpLjxY%2FBmcOigGFO%2FV1u6sPJ6NTuFnvzY%2FgaBQt6Ixaf9s2AR6ESiSrvPUz2S2IIwpmT6mE7mtMdhSeUaY2m%2BxOIJoFdW0i8&X-Amz-Signature=98a4159861781fb90d86dcf2d2c140584e4b7f700f0579dad627fcf7df43a337&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
