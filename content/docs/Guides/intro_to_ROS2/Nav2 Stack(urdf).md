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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IUHBBK7%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T004324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCMtKUzIn8H1honAnYNjQvIEfcBVo9j7pCVoJPyhrJr0QIgS3FJOM6U1f1Jycj1KdPcN7fYaDAkFh4fg27Iu2dPWxoq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDE5VW1WQJqCS%2FEo97CrcA3Ksy2aremLEwgyaA1sRW8%2BAKP3IwshIZ6HmAwkLRTTFgju168V3DpzOwH0R7GaVA4hOK4iuIE1I5RMLx9IoCg%2FfIB7xJNmMsRbsDWxjKxP0LD%2F2m5jABV5xV3mbV6uKpETl%2FHs%2FfOsNIeJFYIXxa3BS%2F0EjtgHW9YIDMDzHHJpfWea2FZ34xz08OqkuA7D2tbu834OehNQ9E657e8hASHs2QyXiodZO44T6bEvCZSlY3O2wmDaG%2BNv5VTxogid3oXAL3Yqp8d7c0RuyiZzsyGeZ8M0VAQzC0lgNgXZvcg8fU6vMUSF8kca1FiRZ04OSf80Ylr%2BCbG7zEjhkzPlzNvxkKqPc692k8ALZ8Fc2UAtvstzyFDqpnb7w36SmB0oHVAaHl0YDL7a%2FqGMgy0usSUNQv7cHaeuERCxN3csQJui0gDG5Ye4CyC8IB3vnX9H7DSGv25OwY8D%2FsFMZ4cU5zNhepDZA5aTD4XYNyq6%2BdjfSY3JlZidhr7t1eVsQhxGIp2tgb83Axl5B0wL34bw2ZXb6nkAPi7Kpb84rkdnVMIseTHGQkS6yeb1Bdo0fLLLeuKgZFKFl51J0CIvsQypP57k2MqwbJ6GNv2cWU225Usl8BCr3JuIQYrWIwqCHMLvX58IGOqUBRsAGhsRaPHwR2LxR3tuaNQ4PMhPc6i6ABDL1wKcLLj5nT4WS4er6XPgkV0YnGPIYtCzEEW1mp0rIAL1GzgoJT2CzaS2Mqdc5Y2PJjkLoGh0daejXFCrkEJA3JMOK%2BP7vU9em9i%2B1F55iKg0ISljbXYRmZ424uNE%2BdCbe3Ds71ftAWC%2F62p4VmnI4ydbwqPy2%2BC1FrGbnu3HtjUZzcTBxxyDjlIie&X-Amz-Signature=615bfa6cee0961ce0fb30ede1894776262f88ac3d3cce62012267f06bc61e175&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IUHBBK7%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T004324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCMtKUzIn8H1honAnYNjQvIEfcBVo9j7pCVoJPyhrJr0QIgS3FJOM6U1f1Jycj1KdPcN7fYaDAkFh4fg27Iu2dPWxoq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDE5VW1WQJqCS%2FEo97CrcA3Ksy2aremLEwgyaA1sRW8%2BAKP3IwshIZ6HmAwkLRTTFgju168V3DpzOwH0R7GaVA4hOK4iuIE1I5RMLx9IoCg%2FfIB7xJNmMsRbsDWxjKxP0LD%2F2m5jABV5xV3mbV6uKpETl%2FHs%2FfOsNIeJFYIXxa3BS%2F0EjtgHW9YIDMDzHHJpfWea2FZ34xz08OqkuA7D2tbu834OehNQ9E657e8hASHs2QyXiodZO44T6bEvCZSlY3O2wmDaG%2BNv5VTxogid3oXAL3Yqp8d7c0RuyiZzsyGeZ8M0VAQzC0lgNgXZvcg8fU6vMUSF8kca1FiRZ04OSf80Ylr%2BCbG7zEjhkzPlzNvxkKqPc692k8ALZ8Fc2UAtvstzyFDqpnb7w36SmB0oHVAaHl0YDL7a%2FqGMgy0usSUNQv7cHaeuERCxN3csQJui0gDG5Ye4CyC8IB3vnX9H7DSGv25OwY8D%2FsFMZ4cU5zNhepDZA5aTD4XYNyq6%2BdjfSY3JlZidhr7t1eVsQhxGIp2tgb83Axl5B0wL34bw2ZXb6nkAPi7Kpb84rkdnVMIseTHGQkS6yeb1Bdo0fLLLeuKgZFKFl51J0CIvsQypP57k2MqwbJ6GNv2cWU225Usl8BCr3JuIQYrWIwqCHMLvX58IGOqUBRsAGhsRaPHwR2LxR3tuaNQ4PMhPc6i6ABDL1wKcLLj5nT4WS4er6XPgkV0YnGPIYtCzEEW1mp0rIAL1GzgoJT2CzaS2Mqdc5Y2PJjkLoGh0daejXFCrkEJA3JMOK%2BP7vU9em9i%2B1F55iKg0ISljbXYRmZ424uNE%2BdCbe3Ds71ftAWC%2F62p4VmnI4ydbwqPy2%2BC1FrGbnu3HtjUZzcTBxxyDjlIie&X-Amz-Signature=77e8db42802270e861396e3961a937c2fd85fe2af22040c3b121bf465f15826c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IUHBBK7%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T004324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCMtKUzIn8H1honAnYNjQvIEfcBVo9j7pCVoJPyhrJr0QIgS3FJOM6U1f1Jycj1KdPcN7fYaDAkFh4fg27Iu2dPWxoq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDE5VW1WQJqCS%2FEo97CrcA3Ksy2aremLEwgyaA1sRW8%2BAKP3IwshIZ6HmAwkLRTTFgju168V3DpzOwH0R7GaVA4hOK4iuIE1I5RMLx9IoCg%2FfIB7xJNmMsRbsDWxjKxP0LD%2F2m5jABV5xV3mbV6uKpETl%2FHs%2FfOsNIeJFYIXxa3BS%2F0EjtgHW9YIDMDzHHJpfWea2FZ34xz08OqkuA7D2tbu834OehNQ9E657e8hASHs2QyXiodZO44T6bEvCZSlY3O2wmDaG%2BNv5VTxogid3oXAL3Yqp8d7c0RuyiZzsyGeZ8M0VAQzC0lgNgXZvcg8fU6vMUSF8kca1FiRZ04OSf80Ylr%2BCbG7zEjhkzPlzNvxkKqPc692k8ALZ8Fc2UAtvstzyFDqpnb7w36SmB0oHVAaHl0YDL7a%2FqGMgy0usSUNQv7cHaeuERCxN3csQJui0gDG5Ye4CyC8IB3vnX9H7DSGv25OwY8D%2FsFMZ4cU5zNhepDZA5aTD4XYNyq6%2BdjfSY3JlZidhr7t1eVsQhxGIp2tgb83Axl5B0wL34bw2ZXb6nkAPi7Kpb84rkdnVMIseTHGQkS6yeb1Bdo0fLLLeuKgZFKFl51J0CIvsQypP57k2MqwbJ6GNv2cWU225Usl8BCr3JuIQYrWIwqCHMLvX58IGOqUBRsAGhsRaPHwR2LxR3tuaNQ4PMhPc6i6ABDL1wKcLLj5nT4WS4er6XPgkV0YnGPIYtCzEEW1mp0rIAL1GzgoJT2CzaS2Mqdc5Y2PJjkLoGh0daejXFCrkEJA3JMOK%2BP7vU9em9i%2B1F55iKg0ISljbXYRmZ424uNE%2BdCbe3Ds71ftAWC%2F62p4VmnI4ydbwqPy2%2BC1FrGbnu3HtjUZzcTBxxyDjlIie&X-Amz-Signature=bec430c10955e6fdb4d2c65078fdcf6c5a8ca2127e0330d7a80065d2729922f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IUHBBK7%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T004324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCMtKUzIn8H1honAnYNjQvIEfcBVo9j7pCVoJPyhrJr0QIgS3FJOM6U1f1Jycj1KdPcN7fYaDAkFh4fg27Iu2dPWxoq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDE5VW1WQJqCS%2FEo97CrcA3Ksy2aremLEwgyaA1sRW8%2BAKP3IwshIZ6HmAwkLRTTFgju168V3DpzOwH0R7GaVA4hOK4iuIE1I5RMLx9IoCg%2FfIB7xJNmMsRbsDWxjKxP0LD%2F2m5jABV5xV3mbV6uKpETl%2FHs%2FfOsNIeJFYIXxa3BS%2F0EjtgHW9YIDMDzHHJpfWea2FZ34xz08OqkuA7D2tbu834OehNQ9E657e8hASHs2QyXiodZO44T6bEvCZSlY3O2wmDaG%2BNv5VTxogid3oXAL3Yqp8d7c0RuyiZzsyGeZ8M0VAQzC0lgNgXZvcg8fU6vMUSF8kca1FiRZ04OSf80Ylr%2BCbG7zEjhkzPlzNvxkKqPc692k8ALZ8Fc2UAtvstzyFDqpnb7w36SmB0oHVAaHl0YDL7a%2FqGMgy0usSUNQv7cHaeuERCxN3csQJui0gDG5Ye4CyC8IB3vnX9H7DSGv25OwY8D%2FsFMZ4cU5zNhepDZA5aTD4XYNyq6%2BdjfSY3JlZidhr7t1eVsQhxGIp2tgb83Axl5B0wL34bw2ZXb6nkAPi7Kpb84rkdnVMIseTHGQkS6yeb1Bdo0fLLLeuKgZFKFl51J0CIvsQypP57k2MqwbJ6GNv2cWU225Usl8BCr3JuIQYrWIwqCHMLvX58IGOqUBRsAGhsRaPHwR2LxR3tuaNQ4PMhPc6i6ABDL1wKcLLj5nT4WS4er6XPgkV0YnGPIYtCzEEW1mp0rIAL1GzgoJT2CzaS2Mqdc5Y2PJjkLoGh0daejXFCrkEJA3JMOK%2BP7vU9em9i%2B1F55iKg0ISljbXYRmZ424uNE%2BdCbe3Ds71ftAWC%2F62p4VmnI4ydbwqPy2%2BC1FrGbnu3HtjUZzcTBxxyDjlIie&X-Amz-Signature=9fb8fe1c57ce3772ac61fb0c3b9c47406dfcd700cf7f399f8119c456407148fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IUHBBK7%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T004324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCMtKUzIn8H1honAnYNjQvIEfcBVo9j7pCVoJPyhrJr0QIgS3FJOM6U1f1Jycj1KdPcN7fYaDAkFh4fg27Iu2dPWxoq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDE5VW1WQJqCS%2FEo97CrcA3Ksy2aremLEwgyaA1sRW8%2BAKP3IwshIZ6HmAwkLRTTFgju168V3DpzOwH0R7GaVA4hOK4iuIE1I5RMLx9IoCg%2FfIB7xJNmMsRbsDWxjKxP0LD%2F2m5jABV5xV3mbV6uKpETl%2FHs%2FfOsNIeJFYIXxa3BS%2F0EjtgHW9YIDMDzHHJpfWea2FZ34xz08OqkuA7D2tbu834OehNQ9E657e8hASHs2QyXiodZO44T6bEvCZSlY3O2wmDaG%2BNv5VTxogid3oXAL3Yqp8d7c0RuyiZzsyGeZ8M0VAQzC0lgNgXZvcg8fU6vMUSF8kca1FiRZ04OSf80Ylr%2BCbG7zEjhkzPlzNvxkKqPc692k8ALZ8Fc2UAtvstzyFDqpnb7w36SmB0oHVAaHl0YDL7a%2FqGMgy0usSUNQv7cHaeuERCxN3csQJui0gDG5Ye4CyC8IB3vnX9H7DSGv25OwY8D%2FsFMZ4cU5zNhepDZA5aTD4XYNyq6%2BdjfSY3JlZidhr7t1eVsQhxGIp2tgb83Axl5B0wL34bw2ZXb6nkAPi7Kpb84rkdnVMIseTHGQkS6yeb1Bdo0fLLLeuKgZFKFl51J0CIvsQypP57k2MqwbJ6GNv2cWU225Usl8BCr3JuIQYrWIwqCHMLvX58IGOqUBRsAGhsRaPHwR2LxR3tuaNQ4PMhPc6i6ABDL1wKcLLj5nT4WS4er6XPgkV0YnGPIYtCzEEW1mp0rIAL1GzgoJT2CzaS2Mqdc5Y2PJjkLoGh0daejXFCrkEJA3JMOK%2BP7vU9em9i%2B1F55iKg0ISljbXYRmZ424uNE%2BdCbe3Ds71ftAWC%2F62p4VmnI4ydbwqPy2%2BC1FrGbnu3HtjUZzcTBxxyDjlIie&X-Amz-Signature=f4d0ecfb932bcadb0d6aee7907a88df05f2d446b7b23ac0ea217249e076b9606&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IUHBBK7%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T004324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQCMtKUzIn8H1honAnYNjQvIEfcBVo9j7pCVoJPyhrJr0QIgS3FJOM6U1f1Jycj1KdPcN7fYaDAkFh4fg27Iu2dPWxoq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDE5VW1WQJqCS%2FEo97CrcA3Ksy2aremLEwgyaA1sRW8%2BAKP3IwshIZ6HmAwkLRTTFgju168V3DpzOwH0R7GaVA4hOK4iuIE1I5RMLx9IoCg%2FfIB7xJNmMsRbsDWxjKxP0LD%2F2m5jABV5xV3mbV6uKpETl%2FHs%2FfOsNIeJFYIXxa3BS%2F0EjtgHW9YIDMDzHHJpfWea2FZ34xz08OqkuA7D2tbu834OehNQ9E657e8hASHs2QyXiodZO44T6bEvCZSlY3O2wmDaG%2BNv5VTxogid3oXAL3Yqp8d7c0RuyiZzsyGeZ8M0VAQzC0lgNgXZvcg8fU6vMUSF8kca1FiRZ04OSf80Ylr%2BCbG7zEjhkzPlzNvxkKqPc692k8ALZ8Fc2UAtvstzyFDqpnb7w36SmB0oHVAaHl0YDL7a%2FqGMgy0usSUNQv7cHaeuERCxN3csQJui0gDG5Ye4CyC8IB3vnX9H7DSGv25OwY8D%2FsFMZ4cU5zNhepDZA5aTD4XYNyq6%2BdjfSY3JlZidhr7t1eVsQhxGIp2tgb83Axl5B0wL34bw2ZXb6nkAPi7Kpb84rkdnVMIseTHGQkS6yeb1Bdo0fLLLeuKgZFKFl51J0CIvsQypP57k2MqwbJ6GNv2cWU225Usl8BCr3JuIQYrWIwqCHMLvX58IGOqUBRsAGhsRaPHwR2LxR3tuaNQ4PMhPc6i6ABDL1wKcLLj5nT4WS4er6XPgkV0YnGPIYtCzEEW1mp0rIAL1GzgoJT2CzaS2Mqdc5Y2PJjkLoGh0daejXFCrkEJA3JMOK%2BP7vU9em9i%2B1F55iKg0ISljbXYRmZ424uNE%2BdCbe3Ds71ftAWC%2F62p4VmnI4ydbwqPy2%2BC1FrGbnu3HtjUZzcTBxxyDjlIie&X-Amz-Signature=25b2a9fa3a387e103cd9acf9fcf1d6e53034a39749b6bf271cec235baddbf0e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
