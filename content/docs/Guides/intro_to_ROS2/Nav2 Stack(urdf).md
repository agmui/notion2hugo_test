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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4MANULL%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T210659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCVMNGsmYifnV61HEwcmLiEThYZEgHHoPW3JrNM5SeFnQIgSjxHUEzgfcZuWtrf1i88gvcrRUdyQ%2FEbdHrX7CeQ1%2Fcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDAc92uhk7%2BlYphVYTCrcAxW1m2EW0kwldxJ3usy9NVfOb3eVtinMzotvg0S4DiGWh0lmCiTrWRKlhoR6LyrMuM0GatjG7bm2ZYSda2U1rtw7s02oOx9cbiLmudsDB0Vx9Z%2FmSueQ%2Fo6K9NeOcuX3GDSg3swrQHJlrmthZ2A%2BJK4D0qHEXaWjzELCqOfuyecilyrdeRn5yF%2BjyPBeqboR%2FLH9JtfWBZnkmm%2B4S%2FNoXLNYKU6e4qSvHCbXbH5ZmNfzShVPgvhny08oUQADoCBIjkQCK9CebpXYqGvRoqw9AQpUgzHxPSl9QpoHjvguGkHrWJzjrQPuSdXjMqIf%2FafIvMeY%2FjiR2JTSvrMZzx%2FvBrg8g6%2BRFq6h66akvmZZL5awbI8uZt5r3g28oGw3SPisGY2VLBaSWarKRTEQt7ztGauiGZL5vHL7Lo%2BJnffemLpjyrrg1J0oow8zrxZVIwsQNYJt5mpCc3FmvBeAtXc9xW6ExwGIFaDfpmFS9hnsuY1jaSNVhlQBiNtXNRk2B5w4xKen0Il%2B0%2Bfqkl8VBCoH2V7ezlNJ9EwaqdQzidPr8Amu1nv9LDK2DtlFPofuFXI3KakACUh%2BDqGpnQNMPg3xxrmPJgbyfnYg%2FhNRygSp00qAr%2FZQsKa4bc4fpSKSMMW5lL0GOqUBLMSDn5uvZeU8ulbc%2F%2Frskxu26FQRp%2B4a2hpzVy84lbtMJUWk5aXBNwN1zt%2BHCicB5VeIki8ij3mPaV%2BeCmuOHkOB0Js08unbxiTC1zGOh5%2FEGk7%2Ff04iGmuaZ6175s0oolMCqD9u5yV2asx5tJxMAAjzSbA83I17xelF1tNTxu67SWJGvaQjKVHV73%2BnJoHbDoOQBDRWgUltOK39pJ66xuMTi1g2&X-Amz-Signature=7a71a688d09c13a41bc5be4eccb4abe80f24fd9eb3a0a2f7772077cc217bbdc1&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4MANULL%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T210659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCVMNGsmYifnV61HEwcmLiEThYZEgHHoPW3JrNM5SeFnQIgSjxHUEzgfcZuWtrf1i88gvcrRUdyQ%2FEbdHrX7CeQ1%2Fcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDAc92uhk7%2BlYphVYTCrcAxW1m2EW0kwldxJ3usy9NVfOb3eVtinMzotvg0S4DiGWh0lmCiTrWRKlhoR6LyrMuM0GatjG7bm2ZYSda2U1rtw7s02oOx9cbiLmudsDB0Vx9Z%2FmSueQ%2Fo6K9NeOcuX3GDSg3swrQHJlrmthZ2A%2BJK4D0qHEXaWjzELCqOfuyecilyrdeRn5yF%2BjyPBeqboR%2FLH9JtfWBZnkmm%2B4S%2FNoXLNYKU6e4qSvHCbXbH5ZmNfzShVPgvhny08oUQADoCBIjkQCK9CebpXYqGvRoqw9AQpUgzHxPSl9QpoHjvguGkHrWJzjrQPuSdXjMqIf%2FafIvMeY%2FjiR2JTSvrMZzx%2FvBrg8g6%2BRFq6h66akvmZZL5awbI8uZt5r3g28oGw3SPisGY2VLBaSWarKRTEQt7ztGauiGZL5vHL7Lo%2BJnffemLpjyrrg1J0oow8zrxZVIwsQNYJt5mpCc3FmvBeAtXc9xW6ExwGIFaDfpmFS9hnsuY1jaSNVhlQBiNtXNRk2B5w4xKen0Il%2B0%2Bfqkl8VBCoH2V7ezlNJ9EwaqdQzidPr8Amu1nv9LDK2DtlFPofuFXI3KakACUh%2BDqGpnQNMPg3xxrmPJgbyfnYg%2FhNRygSp00qAr%2FZQsKa4bc4fpSKSMMW5lL0GOqUBLMSDn5uvZeU8ulbc%2F%2Frskxu26FQRp%2B4a2hpzVy84lbtMJUWk5aXBNwN1zt%2BHCicB5VeIki8ij3mPaV%2BeCmuOHkOB0Js08unbxiTC1zGOh5%2FEGk7%2Ff04iGmuaZ6175s0oolMCqD9u5yV2asx5tJxMAAjzSbA83I17xelF1tNTxu67SWJGvaQjKVHV73%2BnJoHbDoOQBDRWgUltOK39pJ66xuMTi1g2&X-Amz-Signature=b22feb9f173c8fac47f0711f4ec746b9f60928e358605a8608bdbfab0c1c65f1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4MANULL%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T210659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCVMNGsmYifnV61HEwcmLiEThYZEgHHoPW3JrNM5SeFnQIgSjxHUEzgfcZuWtrf1i88gvcrRUdyQ%2FEbdHrX7CeQ1%2Fcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDAc92uhk7%2BlYphVYTCrcAxW1m2EW0kwldxJ3usy9NVfOb3eVtinMzotvg0S4DiGWh0lmCiTrWRKlhoR6LyrMuM0GatjG7bm2ZYSda2U1rtw7s02oOx9cbiLmudsDB0Vx9Z%2FmSueQ%2Fo6K9NeOcuX3GDSg3swrQHJlrmthZ2A%2BJK4D0qHEXaWjzELCqOfuyecilyrdeRn5yF%2BjyPBeqboR%2FLH9JtfWBZnkmm%2B4S%2FNoXLNYKU6e4qSvHCbXbH5ZmNfzShVPgvhny08oUQADoCBIjkQCK9CebpXYqGvRoqw9AQpUgzHxPSl9QpoHjvguGkHrWJzjrQPuSdXjMqIf%2FafIvMeY%2FjiR2JTSvrMZzx%2FvBrg8g6%2BRFq6h66akvmZZL5awbI8uZt5r3g28oGw3SPisGY2VLBaSWarKRTEQt7ztGauiGZL5vHL7Lo%2BJnffemLpjyrrg1J0oow8zrxZVIwsQNYJt5mpCc3FmvBeAtXc9xW6ExwGIFaDfpmFS9hnsuY1jaSNVhlQBiNtXNRk2B5w4xKen0Il%2B0%2Bfqkl8VBCoH2V7ezlNJ9EwaqdQzidPr8Amu1nv9LDK2DtlFPofuFXI3KakACUh%2BDqGpnQNMPg3xxrmPJgbyfnYg%2FhNRygSp00qAr%2FZQsKa4bc4fpSKSMMW5lL0GOqUBLMSDn5uvZeU8ulbc%2F%2Frskxu26FQRp%2B4a2hpzVy84lbtMJUWk5aXBNwN1zt%2BHCicB5VeIki8ij3mPaV%2BeCmuOHkOB0Js08unbxiTC1zGOh5%2FEGk7%2Ff04iGmuaZ6175s0oolMCqD9u5yV2asx5tJxMAAjzSbA83I17xelF1tNTxu67SWJGvaQjKVHV73%2BnJoHbDoOQBDRWgUltOK39pJ66xuMTi1g2&X-Amz-Signature=041868617c729efe0bbd1db90a2c0c84d891ce02dc3ee6f805e339a81a871531&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4MANULL%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T210659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCVMNGsmYifnV61HEwcmLiEThYZEgHHoPW3JrNM5SeFnQIgSjxHUEzgfcZuWtrf1i88gvcrRUdyQ%2FEbdHrX7CeQ1%2Fcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDAc92uhk7%2BlYphVYTCrcAxW1m2EW0kwldxJ3usy9NVfOb3eVtinMzotvg0S4DiGWh0lmCiTrWRKlhoR6LyrMuM0GatjG7bm2ZYSda2U1rtw7s02oOx9cbiLmudsDB0Vx9Z%2FmSueQ%2Fo6K9NeOcuX3GDSg3swrQHJlrmthZ2A%2BJK4D0qHEXaWjzELCqOfuyecilyrdeRn5yF%2BjyPBeqboR%2FLH9JtfWBZnkmm%2B4S%2FNoXLNYKU6e4qSvHCbXbH5ZmNfzShVPgvhny08oUQADoCBIjkQCK9CebpXYqGvRoqw9AQpUgzHxPSl9QpoHjvguGkHrWJzjrQPuSdXjMqIf%2FafIvMeY%2FjiR2JTSvrMZzx%2FvBrg8g6%2BRFq6h66akvmZZL5awbI8uZt5r3g28oGw3SPisGY2VLBaSWarKRTEQt7ztGauiGZL5vHL7Lo%2BJnffemLpjyrrg1J0oow8zrxZVIwsQNYJt5mpCc3FmvBeAtXc9xW6ExwGIFaDfpmFS9hnsuY1jaSNVhlQBiNtXNRk2B5w4xKen0Il%2B0%2Bfqkl8VBCoH2V7ezlNJ9EwaqdQzidPr8Amu1nv9LDK2DtlFPofuFXI3KakACUh%2BDqGpnQNMPg3xxrmPJgbyfnYg%2FhNRygSp00qAr%2FZQsKa4bc4fpSKSMMW5lL0GOqUBLMSDn5uvZeU8ulbc%2F%2Frskxu26FQRp%2B4a2hpzVy84lbtMJUWk5aXBNwN1zt%2BHCicB5VeIki8ij3mPaV%2BeCmuOHkOB0Js08unbxiTC1zGOh5%2FEGk7%2Ff04iGmuaZ6175s0oolMCqD9u5yV2asx5tJxMAAjzSbA83I17xelF1tNTxu67SWJGvaQjKVHV73%2BnJoHbDoOQBDRWgUltOK39pJ66xuMTi1g2&X-Amz-Signature=47289c51b43738e7706ded388efb97fde513466db1df71db8620c4c0620f659b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4MANULL%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T210659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCVMNGsmYifnV61HEwcmLiEThYZEgHHoPW3JrNM5SeFnQIgSjxHUEzgfcZuWtrf1i88gvcrRUdyQ%2FEbdHrX7CeQ1%2Fcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDAc92uhk7%2BlYphVYTCrcAxW1m2EW0kwldxJ3usy9NVfOb3eVtinMzotvg0S4DiGWh0lmCiTrWRKlhoR6LyrMuM0GatjG7bm2ZYSda2U1rtw7s02oOx9cbiLmudsDB0Vx9Z%2FmSueQ%2Fo6K9NeOcuX3GDSg3swrQHJlrmthZ2A%2BJK4D0qHEXaWjzELCqOfuyecilyrdeRn5yF%2BjyPBeqboR%2FLH9JtfWBZnkmm%2B4S%2FNoXLNYKU6e4qSvHCbXbH5ZmNfzShVPgvhny08oUQADoCBIjkQCK9CebpXYqGvRoqw9AQpUgzHxPSl9QpoHjvguGkHrWJzjrQPuSdXjMqIf%2FafIvMeY%2FjiR2JTSvrMZzx%2FvBrg8g6%2BRFq6h66akvmZZL5awbI8uZt5r3g28oGw3SPisGY2VLBaSWarKRTEQt7ztGauiGZL5vHL7Lo%2BJnffemLpjyrrg1J0oow8zrxZVIwsQNYJt5mpCc3FmvBeAtXc9xW6ExwGIFaDfpmFS9hnsuY1jaSNVhlQBiNtXNRk2B5w4xKen0Il%2B0%2Bfqkl8VBCoH2V7ezlNJ9EwaqdQzidPr8Amu1nv9LDK2DtlFPofuFXI3KakACUh%2BDqGpnQNMPg3xxrmPJgbyfnYg%2FhNRygSp00qAr%2FZQsKa4bc4fpSKSMMW5lL0GOqUBLMSDn5uvZeU8ulbc%2F%2Frskxu26FQRp%2B4a2hpzVy84lbtMJUWk5aXBNwN1zt%2BHCicB5VeIki8ij3mPaV%2BeCmuOHkOB0Js08unbxiTC1zGOh5%2FEGk7%2Ff04iGmuaZ6175s0oolMCqD9u5yV2asx5tJxMAAjzSbA83I17xelF1tNTxu67SWJGvaQjKVHV73%2BnJoHbDoOQBDRWgUltOK39pJ66xuMTi1g2&X-Amz-Signature=805ced3555ac1978ac437c1329d4e6bbf3041bf7e58f5523fe79c79c8bd2027e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4MANULL%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T210659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQCVMNGsmYifnV61HEwcmLiEThYZEgHHoPW3JrNM5SeFnQIgSjxHUEzgfcZuWtrf1i88gvcrRUdyQ%2FEbdHrX7CeQ1%2Fcq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDAc92uhk7%2BlYphVYTCrcAxW1m2EW0kwldxJ3usy9NVfOb3eVtinMzotvg0S4DiGWh0lmCiTrWRKlhoR6LyrMuM0GatjG7bm2ZYSda2U1rtw7s02oOx9cbiLmudsDB0Vx9Z%2FmSueQ%2Fo6K9NeOcuX3GDSg3swrQHJlrmthZ2A%2BJK4D0qHEXaWjzELCqOfuyecilyrdeRn5yF%2BjyPBeqboR%2FLH9JtfWBZnkmm%2B4S%2FNoXLNYKU6e4qSvHCbXbH5ZmNfzShVPgvhny08oUQADoCBIjkQCK9CebpXYqGvRoqw9AQpUgzHxPSl9QpoHjvguGkHrWJzjrQPuSdXjMqIf%2FafIvMeY%2FjiR2JTSvrMZzx%2FvBrg8g6%2BRFq6h66akvmZZL5awbI8uZt5r3g28oGw3SPisGY2VLBaSWarKRTEQt7ztGauiGZL5vHL7Lo%2BJnffemLpjyrrg1J0oow8zrxZVIwsQNYJt5mpCc3FmvBeAtXc9xW6ExwGIFaDfpmFS9hnsuY1jaSNVhlQBiNtXNRk2B5w4xKen0Il%2B0%2Bfqkl8VBCoH2V7ezlNJ9EwaqdQzidPr8Amu1nv9LDK2DtlFPofuFXI3KakACUh%2BDqGpnQNMPg3xxrmPJgbyfnYg%2FhNRygSp00qAr%2FZQsKa4bc4fpSKSMMW5lL0GOqUBLMSDn5uvZeU8ulbc%2F%2Frskxu26FQRp%2B4a2hpzVy84lbtMJUWk5aXBNwN1zt%2BHCicB5VeIki8ij3mPaV%2BeCmuOHkOB0Js08unbxiTC1zGOh5%2FEGk7%2Ff04iGmuaZ6175s0oolMCqD9u5yV2asx5tJxMAAjzSbA83I17xelF1tNTxu67SWJGvaQjKVHV73%2BnJoHbDoOQBDRWgUltOK39pJ66xuMTi1g2&X-Amz-Signature=e29544fa31550670a16a3fc71e89f1035b28fc9ffb3041775c1640b829df4987&X-Amz-SignedHeaders=host&x-id=GetObject)
