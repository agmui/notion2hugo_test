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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674C4ERE3%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T110808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDjSIlRA63jpzsjQ4x%2F6Cj4EVkUsnNy2%2BTowjW8U%2FWLEwIgOUy9cUuhQA35hIlHt89boKbcErwXJL5dUCWTVennRR4q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDBFctNHIddCiQGNbwCrcA%2BCX5pwZ4VRYYwep1ZHK%2FZcRT%2FI6FUXU0V1BFbFQQDrCPHqIGjtb6ZanMfugBYzvHeruDavjjl2hAAfWFVU3vdWVaJZI3qU49VxxmN1j1bnOPxiqfsQLgSr0kcLOiHFjMjdGNmdidHNW%2Fqley8MWeSt0hnItJ6sRcIir5X9hsm9JMK7tEmGJtTvEfLNusjsJFM21wG%2Fh6W7pbggLBnm0TQ4cutZzEW9b4W7P56udfYwL3r8N1K%2FOhI5HpZaCpnFpDepBcLzzIh3Ma1ck%2B84hruQgXvtspOH0eShvo5FEMzrV6BDNAQXnF4cDHnoDEYb0lfzgw3QT9RSMLltKF5ZzonQzNAKoiaJaRsQnLvJ5UCSOsHHhVNkHKcHKgLhZnj7kkbioHz9SP6bXG7VVtjACevaewGMcRONLkHWyC%2BwCXMwgVC9piCog9I8z4VDlF%2FwDx3rLnN2SBdjduzSWded6QWw3CJ0kcMvtskWHi9VSNMM%2Fm4a38GgzAHhYd0MtFr3fInqhoS2qjFQdmyLhcgOtTqBFXXhE08Mk%2FK7jc6AM4LSNyOw%2FpvWcPlxzqAs1yXlsVDBZDRMZs1ricjFDYRsBobME2r30yzaGVGC08LzZ9jpkdeknnMJBfxf%2FFsvWMNms%2B8EGOqUBVT0%2Bgmdmg80LvJvTlXdPYMsDHv1eAxsnHKErksH%2F6PghjfD1gVmNQS6OD066y%2Fs6UAPPhL3SsBrGezRNR1bRCHHhSzSxEo7byp6Lw2a6%2FPTbvpXreBZWdIkuTkJqUOimF4huOwMGUuHFiW9e8w62fnebUN1VVHhbH%2FS%2FekYTVRUqgIBttTys%2FFLCrqiZrPr4vC1LxzQdK3OTLPCMvrwgKfBwAiCT&X-Amz-Signature=759569008e9455b1e6e643d0fa6573d3ca77a7cb334b56dfd3b17b5cd29fde26&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674C4ERE3%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T110808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDjSIlRA63jpzsjQ4x%2F6Cj4EVkUsnNy2%2BTowjW8U%2FWLEwIgOUy9cUuhQA35hIlHt89boKbcErwXJL5dUCWTVennRR4q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDBFctNHIddCiQGNbwCrcA%2BCX5pwZ4VRYYwep1ZHK%2FZcRT%2FI6FUXU0V1BFbFQQDrCPHqIGjtb6ZanMfugBYzvHeruDavjjl2hAAfWFVU3vdWVaJZI3qU49VxxmN1j1bnOPxiqfsQLgSr0kcLOiHFjMjdGNmdidHNW%2Fqley8MWeSt0hnItJ6sRcIir5X9hsm9JMK7tEmGJtTvEfLNusjsJFM21wG%2Fh6W7pbggLBnm0TQ4cutZzEW9b4W7P56udfYwL3r8N1K%2FOhI5HpZaCpnFpDepBcLzzIh3Ma1ck%2B84hruQgXvtspOH0eShvo5FEMzrV6BDNAQXnF4cDHnoDEYb0lfzgw3QT9RSMLltKF5ZzonQzNAKoiaJaRsQnLvJ5UCSOsHHhVNkHKcHKgLhZnj7kkbioHz9SP6bXG7VVtjACevaewGMcRONLkHWyC%2BwCXMwgVC9piCog9I8z4VDlF%2FwDx3rLnN2SBdjduzSWded6QWw3CJ0kcMvtskWHi9VSNMM%2Fm4a38GgzAHhYd0MtFr3fInqhoS2qjFQdmyLhcgOtTqBFXXhE08Mk%2FK7jc6AM4LSNyOw%2FpvWcPlxzqAs1yXlsVDBZDRMZs1ricjFDYRsBobME2r30yzaGVGC08LzZ9jpkdeknnMJBfxf%2FFsvWMNms%2B8EGOqUBVT0%2Bgmdmg80LvJvTlXdPYMsDHv1eAxsnHKErksH%2F6PghjfD1gVmNQS6OD066y%2Fs6UAPPhL3SsBrGezRNR1bRCHHhSzSxEo7byp6Lw2a6%2FPTbvpXreBZWdIkuTkJqUOimF4huOwMGUuHFiW9e8w62fnebUN1VVHhbH%2FS%2FekYTVRUqgIBttTys%2FFLCrqiZrPr4vC1LxzQdK3OTLPCMvrwgKfBwAiCT&X-Amz-Signature=5588ffc6ebdc3cf3acc4b35b9891cc701e8c5f1624e27b8cdedc11a719c5f6ea&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674C4ERE3%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T110808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDjSIlRA63jpzsjQ4x%2F6Cj4EVkUsnNy2%2BTowjW8U%2FWLEwIgOUy9cUuhQA35hIlHt89boKbcErwXJL5dUCWTVennRR4q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDBFctNHIddCiQGNbwCrcA%2BCX5pwZ4VRYYwep1ZHK%2FZcRT%2FI6FUXU0V1BFbFQQDrCPHqIGjtb6ZanMfugBYzvHeruDavjjl2hAAfWFVU3vdWVaJZI3qU49VxxmN1j1bnOPxiqfsQLgSr0kcLOiHFjMjdGNmdidHNW%2Fqley8MWeSt0hnItJ6sRcIir5X9hsm9JMK7tEmGJtTvEfLNusjsJFM21wG%2Fh6W7pbggLBnm0TQ4cutZzEW9b4W7P56udfYwL3r8N1K%2FOhI5HpZaCpnFpDepBcLzzIh3Ma1ck%2B84hruQgXvtspOH0eShvo5FEMzrV6BDNAQXnF4cDHnoDEYb0lfzgw3QT9RSMLltKF5ZzonQzNAKoiaJaRsQnLvJ5UCSOsHHhVNkHKcHKgLhZnj7kkbioHz9SP6bXG7VVtjACevaewGMcRONLkHWyC%2BwCXMwgVC9piCog9I8z4VDlF%2FwDx3rLnN2SBdjduzSWded6QWw3CJ0kcMvtskWHi9VSNMM%2Fm4a38GgzAHhYd0MtFr3fInqhoS2qjFQdmyLhcgOtTqBFXXhE08Mk%2FK7jc6AM4LSNyOw%2FpvWcPlxzqAs1yXlsVDBZDRMZs1ricjFDYRsBobME2r30yzaGVGC08LzZ9jpkdeknnMJBfxf%2FFsvWMNms%2B8EGOqUBVT0%2Bgmdmg80LvJvTlXdPYMsDHv1eAxsnHKErksH%2F6PghjfD1gVmNQS6OD066y%2Fs6UAPPhL3SsBrGezRNR1bRCHHhSzSxEo7byp6Lw2a6%2FPTbvpXreBZWdIkuTkJqUOimF4huOwMGUuHFiW9e8w62fnebUN1VVHhbH%2FS%2FekYTVRUqgIBttTys%2FFLCrqiZrPr4vC1LxzQdK3OTLPCMvrwgKfBwAiCT&X-Amz-Signature=921f32b29c7e276b5415a8d859a96663e89b13fb36846d78b6d4da29d1771bbd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674C4ERE3%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T110808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDjSIlRA63jpzsjQ4x%2F6Cj4EVkUsnNy2%2BTowjW8U%2FWLEwIgOUy9cUuhQA35hIlHt89boKbcErwXJL5dUCWTVennRR4q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDBFctNHIddCiQGNbwCrcA%2BCX5pwZ4VRYYwep1ZHK%2FZcRT%2FI6FUXU0V1BFbFQQDrCPHqIGjtb6ZanMfugBYzvHeruDavjjl2hAAfWFVU3vdWVaJZI3qU49VxxmN1j1bnOPxiqfsQLgSr0kcLOiHFjMjdGNmdidHNW%2Fqley8MWeSt0hnItJ6sRcIir5X9hsm9JMK7tEmGJtTvEfLNusjsJFM21wG%2Fh6W7pbggLBnm0TQ4cutZzEW9b4W7P56udfYwL3r8N1K%2FOhI5HpZaCpnFpDepBcLzzIh3Ma1ck%2B84hruQgXvtspOH0eShvo5FEMzrV6BDNAQXnF4cDHnoDEYb0lfzgw3QT9RSMLltKF5ZzonQzNAKoiaJaRsQnLvJ5UCSOsHHhVNkHKcHKgLhZnj7kkbioHz9SP6bXG7VVtjACevaewGMcRONLkHWyC%2BwCXMwgVC9piCog9I8z4VDlF%2FwDx3rLnN2SBdjduzSWded6QWw3CJ0kcMvtskWHi9VSNMM%2Fm4a38GgzAHhYd0MtFr3fInqhoS2qjFQdmyLhcgOtTqBFXXhE08Mk%2FK7jc6AM4LSNyOw%2FpvWcPlxzqAs1yXlsVDBZDRMZs1ricjFDYRsBobME2r30yzaGVGC08LzZ9jpkdeknnMJBfxf%2FFsvWMNms%2B8EGOqUBVT0%2Bgmdmg80LvJvTlXdPYMsDHv1eAxsnHKErksH%2F6PghjfD1gVmNQS6OD066y%2Fs6UAPPhL3SsBrGezRNR1bRCHHhSzSxEo7byp6Lw2a6%2FPTbvpXreBZWdIkuTkJqUOimF4huOwMGUuHFiW9e8w62fnebUN1VVHhbH%2FS%2FekYTVRUqgIBttTys%2FFLCrqiZrPr4vC1LxzQdK3OTLPCMvrwgKfBwAiCT&X-Amz-Signature=f4d2ab00f59bfba66c6b75f2366bcc680f661890364c240f970688737a0f5855&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674C4ERE3%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T110808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDjSIlRA63jpzsjQ4x%2F6Cj4EVkUsnNy2%2BTowjW8U%2FWLEwIgOUy9cUuhQA35hIlHt89boKbcErwXJL5dUCWTVennRR4q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDBFctNHIddCiQGNbwCrcA%2BCX5pwZ4VRYYwep1ZHK%2FZcRT%2FI6FUXU0V1BFbFQQDrCPHqIGjtb6ZanMfugBYzvHeruDavjjl2hAAfWFVU3vdWVaJZI3qU49VxxmN1j1bnOPxiqfsQLgSr0kcLOiHFjMjdGNmdidHNW%2Fqley8MWeSt0hnItJ6sRcIir5X9hsm9JMK7tEmGJtTvEfLNusjsJFM21wG%2Fh6W7pbggLBnm0TQ4cutZzEW9b4W7P56udfYwL3r8N1K%2FOhI5HpZaCpnFpDepBcLzzIh3Ma1ck%2B84hruQgXvtspOH0eShvo5FEMzrV6BDNAQXnF4cDHnoDEYb0lfzgw3QT9RSMLltKF5ZzonQzNAKoiaJaRsQnLvJ5UCSOsHHhVNkHKcHKgLhZnj7kkbioHz9SP6bXG7VVtjACevaewGMcRONLkHWyC%2BwCXMwgVC9piCog9I8z4VDlF%2FwDx3rLnN2SBdjduzSWded6QWw3CJ0kcMvtskWHi9VSNMM%2Fm4a38GgzAHhYd0MtFr3fInqhoS2qjFQdmyLhcgOtTqBFXXhE08Mk%2FK7jc6AM4LSNyOw%2FpvWcPlxzqAs1yXlsVDBZDRMZs1ricjFDYRsBobME2r30yzaGVGC08LzZ9jpkdeknnMJBfxf%2FFsvWMNms%2B8EGOqUBVT0%2Bgmdmg80LvJvTlXdPYMsDHv1eAxsnHKErksH%2F6PghjfD1gVmNQS6OD066y%2Fs6UAPPhL3SsBrGezRNR1bRCHHhSzSxEo7byp6Lw2a6%2FPTbvpXreBZWdIkuTkJqUOimF4huOwMGUuHFiW9e8w62fnebUN1VVHhbH%2FS%2FekYTVRUqgIBttTys%2FFLCrqiZrPr4vC1LxzQdK3OTLPCMvrwgKfBwAiCT&X-Amz-Signature=82fef93ae118dbfe4558ecc5cf69589e7de2cbd70d5fbfb548ebdeda79190a72&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674C4ERE3%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T110808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQDjSIlRA63jpzsjQ4x%2F6Cj4EVkUsnNy2%2BTowjW8U%2FWLEwIgOUy9cUuhQA35hIlHt89boKbcErwXJL5dUCWTVennRR4q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDBFctNHIddCiQGNbwCrcA%2BCX5pwZ4VRYYwep1ZHK%2FZcRT%2FI6FUXU0V1BFbFQQDrCPHqIGjtb6ZanMfugBYzvHeruDavjjl2hAAfWFVU3vdWVaJZI3qU49VxxmN1j1bnOPxiqfsQLgSr0kcLOiHFjMjdGNmdidHNW%2Fqley8MWeSt0hnItJ6sRcIir5X9hsm9JMK7tEmGJtTvEfLNusjsJFM21wG%2Fh6W7pbggLBnm0TQ4cutZzEW9b4W7P56udfYwL3r8N1K%2FOhI5HpZaCpnFpDepBcLzzIh3Ma1ck%2B84hruQgXvtspOH0eShvo5FEMzrV6BDNAQXnF4cDHnoDEYb0lfzgw3QT9RSMLltKF5ZzonQzNAKoiaJaRsQnLvJ5UCSOsHHhVNkHKcHKgLhZnj7kkbioHz9SP6bXG7VVtjACevaewGMcRONLkHWyC%2BwCXMwgVC9piCog9I8z4VDlF%2FwDx3rLnN2SBdjduzSWded6QWw3CJ0kcMvtskWHi9VSNMM%2Fm4a38GgzAHhYd0MtFr3fInqhoS2qjFQdmyLhcgOtTqBFXXhE08Mk%2FK7jc6AM4LSNyOw%2FpvWcPlxzqAs1yXlsVDBZDRMZs1ricjFDYRsBobME2r30yzaGVGC08LzZ9jpkdeknnMJBfxf%2FFsvWMNms%2B8EGOqUBVT0%2Bgmdmg80LvJvTlXdPYMsDHv1eAxsnHKErksH%2F6PghjfD1gVmNQS6OD066y%2Fs6UAPPhL3SsBrGezRNR1bRCHHhSzSxEo7byp6Lw2a6%2FPTbvpXreBZWdIkuTkJqUOimF4huOwMGUuHFiW9e8w62fnebUN1VVHhbH%2FS%2FekYTVRUqgIBttTys%2FFLCrqiZrPr4vC1LxzQdK3OTLPCMvrwgKfBwAiCT&X-Amz-Signature=7656af1afbff1ba0af050e409c861a5dc629ce243cfcc2170b108d863d21ea92&X-Amz-SignedHeaders=host&x-id=GetObject)
