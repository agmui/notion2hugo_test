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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQKGN6BQ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFW6dS2We%2FpFC0DhbnRd5%2B%2Fjl1wK7f36KOOSOnLK6WtpAiBgUhC9cGWTR%2F%2F0nvVFZs9A9IpCh1D3jZ%2BC4u4hX86ohCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXllXoD05hNY6qSKQKtwDsx7gXFbFYFNd0xzzrYjA5HPhTVPcV6onrcK5orXUDX34MBzticLq%2B8TDYGIXrVPoQDynrsCKMjMaxUUMLf8Dd4XCNI%2B3mL4P%2BJrLpy5hTCBIqkLwC6WIgvd4hgvOOvRy8ZPNbcseLCcnBdtUDKlAfiM6FQUjZKbtJJSwCIaM5RnSYs%2BzoW6dJNbaN%2B07%2BUVtPK6ii0chzmwQKjKGBFLaKt3OCTT4%2BtC%2FmbxrY90TyJUr8URG5wGIeaD4ZCvap7tWZcC%2Fe3RybA93A%2B6iPh%2FM6rnNhbRfybTDKM5GGIg6bwYBkRpuMb%2FtTzcwYzELssKSBLGnikHv8udpUOrmOPpy8kiMZaZb3V8CwDZJaxzJNC0ocXUcmm0Fnne3Tw8NBwcbjqUO2EJ%2FrexHIMfz28fEZmx%2BVD1UNHG5KzbVQJcagqcopR%2BWOpEAz%2FLbkLyPfvgeMmGnDjv1%2F4luHukEvMmBELSXpEp3S%2BFrTEBQdHRiesPZqynLi40RcBkfdQ%2BDCWX3WKpWJQGjBCVuQX7PE2m6GkMDH5b9K9XW%2F%2FvhTxpWcKI4Q5Ps5x9uPxi3PG93oQyr0bwhSC6KxyLh8pEqqm0%2BLL1P1Bf%2FawxihHR41YaBMc2ZUMXMEPvrUrapGaUwouq5wwY6pgEnU2BxDZwmNdpGy1LqM1Aj3fcN8yLuN%2F1oTq3COV%2FGCWhMr0UMTuZGt4zNvdq7rpsiKtlTImt6GbBgnZZQUN4%2Fk6Hn1mKGqFwB9IFqEe3hAMHmp4OvB9%2F79jz1aDxDLDiWw0E489edlCKe%2BkWXd2baPbRm7Qn0Iwm8eyUjZxU4YcwpkiiOgF0ggGlrwDSB0ml7vx2M52g1LigbvyxLa%2BTH2CA6PvtS&X-Amz-Signature=3ca9164df7ca54bf9b81de960012adddc349f96729a7d4948fb432da9f4d5969&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQKGN6BQ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFW6dS2We%2FpFC0DhbnRd5%2B%2Fjl1wK7f36KOOSOnLK6WtpAiBgUhC9cGWTR%2F%2F0nvVFZs9A9IpCh1D3jZ%2BC4u4hX86ohCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXllXoD05hNY6qSKQKtwDsx7gXFbFYFNd0xzzrYjA5HPhTVPcV6onrcK5orXUDX34MBzticLq%2B8TDYGIXrVPoQDynrsCKMjMaxUUMLf8Dd4XCNI%2B3mL4P%2BJrLpy5hTCBIqkLwC6WIgvd4hgvOOvRy8ZPNbcseLCcnBdtUDKlAfiM6FQUjZKbtJJSwCIaM5RnSYs%2BzoW6dJNbaN%2B07%2BUVtPK6ii0chzmwQKjKGBFLaKt3OCTT4%2BtC%2FmbxrY90TyJUr8URG5wGIeaD4ZCvap7tWZcC%2Fe3RybA93A%2B6iPh%2FM6rnNhbRfybTDKM5GGIg6bwYBkRpuMb%2FtTzcwYzELssKSBLGnikHv8udpUOrmOPpy8kiMZaZb3V8CwDZJaxzJNC0ocXUcmm0Fnne3Tw8NBwcbjqUO2EJ%2FrexHIMfz28fEZmx%2BVD1UNHG5KzbVQJcagqcopR%2BWOpEAz%2FLbkLyPfvgeMmGnDjv1%2F4luHukEvMmBELSXpEp3S%2BFrTEBQdHRiesPZqynLi40RcBkfdQ%2BDCWX3WKpWJQGjBCVuQX7PE2m6GkMDH5b9K9XW%2F%2FvhTxpWcKI4Q5Ps5x9uPxi3PG93oQyr0bwhSC6KxyLh8pEqqm0%2BLL1P1Bf%2FawxihHR41YaBMc2ZUMXMEPvrUrapGaUwouq5wwY6pgEnU2BxDZwmNdpGy1LqM1Aj3fcN8yLuN%2F1oTq3COV%2FGCWhMr0UMTuZGt4zNvdq7rpsiKtlTImt6GbBgnZZQUN4%2Fk6Hn1mKGqFwB9IFqEe3hAMHmp4OvB9%2F79jz1aDxDLDiWw0E489edlCKe%2BkWXd2baPbRm7Qn0Iwm8eyUjZxU4YcwpkiiOgF0ggGlrwDSB0ml7vx2M52g1LigbvyxLa%2BTH2CA6PvtS&X-Amz-Signature=a82390354b4b1ac52bedb2436ce934ba3b339f4bdaa370b0c2a3efdb5bc5a988&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQKGN6BQ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFW6dS2We%2FpFC0DhbnRd5%2B%2Fjl1wK7f36KOOSOnLK6WtpAiBgUhC9cGWTR%2F%2F0nvVFZs9A9IpCh1D3jZ%2BC4u4hX86ohCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXllXoD05hNY6qSKQKtwDsx7gXFbFYFNd0xzzrYjA5HPhTVPcV6onrcK5orXUDX34MBzticLq%2B8TDYGIXrVPoQDynrsCKMjMaxUUMLf8Dd4XCNI%2B3mL4P%2BJrLpy5hTCBIqkLwC6WIgvd4hgvOOvRy8ZPNbcseLCcnBdtUDKlAfiM6FQUjZKbtJJSwCIaM5RnSYs%2BzoW6dJNbaN%2B07%2BUVtPK6ii0chzmwQKjKGBFLaKt3OCTT4%2BtC%2FmbxrY90TyJUr8URG5wGIeaD4ZCvap7tWZcC%2Fe3RybA93A%2B6iPh%2FM6rnNhbRfybTDKM5GGIg6bwYBkRpuMb%2FtTzcwYzELssKSBLGnikHv8udpUOrmOPpy8kiMZaZb3V8CwDZJaxzJNC0ocXUcmm0Fnne3Tw8NBwcbjqUO2EJ%2FrexHIMfz28fEZmx%2BVD1UNHG5KzbVQJcagqcopR%2BWOpEAz%2FLbkLyPfvgeMmGnDjv1%2F4luHukEvMmBELSXpEp3S%2BFrTEBQdHRiesPZqynLi40RcBkfdQ%2BDCWX3WKpWJQGjBCVuQX7PE2m6GkMDH5b9K9XW%2F%2FvhTxpWcKI4Q5Ps5x9uPxi3PG93oQyr0bwhSC6KxyLh8pEqqm0%2BLL1P1Bf%2FawxihHR41YaBMc2ZUMXMEPvrUrapGaUwouq5wwY6pgEnU2BxDZwmNdpGy1LqM1Aj3fcN8yLuN%2F1oTq3COV%2FGCWhMr0UMTuZGt4zNvdq7rpsiKtlTImt6GbBgnZZQUN4%2Fk6Hn1mKGqFwB9IFqEe3hAMHmp4OvB9%2F79jz1aDxDLDiWw0E489edlCKe%2BkWXd2baPbRm7Qn0Iwm8eyUjZxU4YcwpkiiOgF0ggGlrwDSB0ml7vx2M52g1LigbvyxLa%2BTH2CA6PvtS&X-Amz-Signature=f67f4e630a5ebd3a73f88127a01dec0f6e593982090ce8cff85cc78b084a00bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQKGN6BQ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFW6dS2We%2FpFC0DhbnRd5%2B%2Fjl1wK7f36KOOSOnLK6WtpAiBgUhC9cGWTR%2F%2F0nvVFZs9A9IpCh1D3jZ%2BC4u4hX86ohCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXllXoD05hNY6qSKQKtwDsx7gXFbFYFNd0xzzrYjA5HPhTVPcV6onrcK5orXUDX34MBzticLq%2B8TDYGIXrVPoQDynrsCKMjMaxUUMLf8Dd4XCNI%2B3mL4P%2BJrLpy5hTCBIqkLwC6WIgvd4hgvOOvRy8ZPNbcseLCcnBdtUDKlAfiM6FQUjZKbtJJSwCIaM5RnSYs%2BzoW6dJNbaN%2B07%2BUVtPK6ii0chzmwQKjKGBFLaKt3OCTT4%2BtC%2FmbxrY90TyJUr8URG5wGIeaD4ZCvap7tWZcC%2Fe3RybA93A%2B6iPh%2FM6rnNhbRfybTDKM5GGIg6bwYBkRpuMb%2FtTzcwYzELssKSBLGnikHv8udpUOrmOPpy8kiMZaZb3V8CwDZJaxzJNC0ocXUcmm0Fnne3Tw8NBwcbjqUO2EJ%2FrexHIMfz28fEZmx%2BVD1UNHG5KzbVQJcagqcopR%2BWOpEAz%2FLbkLyPfvgeMmGnDjv1%2F4luHukEvMmBELSXpEp3S%2BFrTEBQdHRiesPZqynLi40RcBkfdQ%2BDCWX3WKpWJQGjBCVuQX7PE2m6GkMDH5b9K9XW%2F%2FvhTxpWcKI4Q5Ps5x9uPxi3PG93oQyr0bwhSC6KxyLh8pEqqm0%2BLL1P1Bf%2FawxihHR41YaBMc2ZUMXMEPvrUrapGaUwouq5wwY6pgEnU2BxDZwmNdpGy1LqM1Aj3fcN8yLuN%2F1oTq3COV%2FGCWhMr0UMTuZGt4zNvdq7rpsiKtlTImt6GbBgnZZQUN4%2Fk6Hn1mKGqFwB9IFqEe3hAMHmp4OvB9%2F79jz1aDxDLDiWw0E489edlCKe%2BkWXd2baPbRm7Qn0Iwm8eyUjZxU4YcwpkiiOgF0ggGlrwDSB0ml7vx2M52g1LigbvyxLa%2BTH2CA6PvtS&X-Amz-Signature=27cf46821179bec68f81c066784b17a08eca4377f46532dd6e54a3f22691cc5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQKGN6BQ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFW6dS2We%2FpFC0DhbnRd5%2B%2Fjl1wK7f36KOOSOnLK6WtpAiBgUhC9cGWTR%2F%2F0nvVFZs9A9IpCh1D3jZ%2BC4u4hX86ohCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXllXoD05hNY6qSKQKtwDsx7gXFbFYFNd0xzzrYjA5HPhTVPcV6onrcK5orXUDX34MBzticLq%2B8TDYGIXrVPoQDynrsCKMjMaxUUMLf8Dd4XCNI%2B3mL4P%2BJrLpy5hTCBIqkLwC6WIgvd4hgvOOvRy8ZPNbcseLCcnBdtUDKlAfiM6FQUjZKbtJJSwCIaM5RnSYs%2BzoW6dJNbaN%2B07%2BUVtPK6ii0chzmwQKjKGBFLaKt3OCTT4%2BtC%2FmbxrY90TyJUr8URG5wGIeaD4ZCvap7tWZcC%2Fe3RybA93A%2B6iPh%2FM6rnNhbRfybTDKM5GGIg6bwYBkRpuMb%2FtTzcwYzELssKSBLGnikHv8udpUOrmOPpy8kiMZaZb3V8CwDZJaxzJNC0ocXUcmm0Fnne3Tw8NBwcbjqUO2EJ%2FrexHIMfz28fEZmx%2BVD1UNHG5KzbVQJcagqcopR%2BWOpEAz%2FLbkLyPfvgeMmGnDjv1%2F4luHukEvMmBELSXpEp3S%2BFrTEBQdHRiesPZqynLi40RcBkfdQ%2BDCWX3WKpWJQGjBCVuQX7PE2m6GkMDH5b9K9XW%2F%2FvhTxpWcKI4Q5Ps5x9uPxi3PG93oQyr0bwhSC6KxyLh8pEqqm0%2BLL1P1Bf%2FawxihHR41YaBMc2ZUMXMEPvrUrapGaUwouq5wwY6pgEnU2BxDZwmNdpGy1LqM1Aj3fcN8yLuN%2F1oTq3COV%2FGCWhMr0UMTuZGt4zNvdq7rpsiKtlTImt6GbBgnZZQUN4%2Fk6Hn1mKGqFwB9IFqEe3hAMHmp4OvB9%2F79jz1aDxDLDiWw0E489edlCKe%2BkWXd2baPbRm7Qn0Iwm8eyUjZxU4YcwpkiiOgF0ggGlrwDSB0ml7vx2M52g1LigbvyxLa%2BTH2CA6PvtS&X-Amz-Signature=8cc29f37d5bedeaad778893272bfda6d866b0d847e607d90c35164e1dd2cc490&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQKGN6BQ%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T150943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFW6dS2We%2FpFC0DhbnRd5%2B%2Fjl1wK7f36KOOSOnLK6WtpAiBgUhC9cGWTR%2F%2F0nvVFZs9A9IpCh1D3jZ%2BC4u4hX86ohCqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXllXoD05hNY6qSKQKtwDsx7gXFbFYFNd0xzzrYjA5HPhTVPcV6onrcK5orXUDX34MBzticLq%2B8TDYGIXrVPoQDynrsCKMjMaxUUMLf8Dd4XCNI%2B3mL4P%2BJrLpy5hTCBIqkLwC6WIgvd4hgvOOvRy8ZPNbcseLCcnBdtUDKlAfiM6FQUjZKbtJJSwCIaM5RnSYs%2BzoW6dJNbaN%2B07%2BUVtPK6ii0chzmwQKjKGBFLaKt3OCTT4%2BtC%2FmbxrY90TyJUr8URG5wGIeaD4ZCvap7tWZcC%2Fe3RybA93A%2B6iPh%2FM6rnNhbRfybTDKM5GGIg6bwYBkRpuMb%2FtTzcwYzELssKSBLGnikHv8udpUOrmOPpy8kiMZaZb3V8CwDZJaxzJNC0ocXUcmm0Fnne3Tw8NBwcbjqUO2EJ%2FrexHIMfz28fEZmx%2BVD1UNHG5KzbVQJcagqcopR%2BWOpEAz%2FLbkLyPfvgeMmGnDjv1%2F4luHukEvMmBELSXpEp3S%2BFrTEBQdHRiesPZqynLi40RcBkfdQ%2BDCWX3WKpWJQGjBCVuQX7PE2m6GkMDH5b9K9XW%2F%2FvhTxpWcKI4Q5Ps5x9uPxi3PG93oQyr0bwhSC6KxyLh8pEqqm0%2BLL1P1Bf%2FawxihHR41YaBMc2ZUMXMEPvrUrapGaUwouq5wwY6pgEnU2BxDZwmNdpGy1LqM1Aj3fcN8yLuN%2F1oTq3COV%2FGCWhMr0UMTuZGt4zNvdq7rpsiKtlTImt6GbBgnZZQUN4%2Fk6Hn1mKGqFwB9IFqEe3hAMHmp4OvB9%2F79jz1aDxDLDiWw0E489edlCKe%2BkWXd2baPbRm7Qn0Iwm8eyUjZxU4YcwpkiiOgF0ggGlrwDSB0ml7vx2M52g1LigbvyxLa%2BTH2CA6PvtS&X-Amz-Signature=ec0d53920bcdb453d8b056e711cc66e851d4e10108edb6785dee582dad885600&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
