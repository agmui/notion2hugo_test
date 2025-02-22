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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFNGLWH6%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T031036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7kLVthe0w5UXXMpXWhjquHiWyDisZR0Qn6HoROmrW8AiBAqVduvAk7fX%2BoqpJB8WoIVyP6iYTFH0qQ66QwU5ZEMSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpXeNW%2BYuAxKop0GIKtwDInKMyIJ2qTIPcTI4G%2B6b6PRv0wxr1lN5xN6o0KcVDiYjqA1d%2FSHbQmAEwQbQlOVmwArVE7UMNsN%2B%2FeZVOPkjClkIGmGkKfpcqToPKS1rj%2B0GVzY1IJrA7U2P3qeYF3LnAc9T8GzYHL7EeV3ZZZLcUOR73kBStVmSCfpecXWRxHsMpvPsS%2Bwk1UZdkNHAngsTEIlbX8qDjctx6dgycCt7ktD%2BNeBGl65q74z2PeYRjQGNw2CUXG%2BrHcrT8p5SJbnHglD7j9WFLy7LVHj7T0ga%2BJyH8PBUjz5UKem%2B5C%2F9iK4q94YkQoMNe3fjMj9DYRfQZT1p5a40WXAsIIqKQYoavXk%2BQfvdQvNokSuljuYOiEEbMyJGqiiRGfXXFyis0Vr605JwaMnMlYg22sY%2Bun3l9x9zWxi3d4aISRm6Ca4Ql%2ByubEhHIluqx%2FkSze9Kyw8WaQF%2FA5RhxS6q5uuoguCD%2BYyfqjg%2B2YTYN5fpGLL3GUUWWFdrd4ekFWyRXBhWf25ZTqD38o2Gnn8wNVzu0hnK8%2F52SSDb5KEIKgHq2wkBSehpMXk%2FBHyuDoastBcs3Phc0K%2BG3eTOg6%2BPOiJBcqq1RJpFQw1fxX%2FhtWivaSdWeZdUANPa9ZWm7CcybNIwiu3kvQY6pgGMr0ryE5AVLr8l1lvhrtQl4n4A%2BNv2g77ZjCeob43ImXAOakaq2fsrYehp4Db5SEWxLO%2BZ6JUadm9qNAMePf2kMARcU%2BoH5d6ogQqpNAPFkrlpNIVbB%2B3zcmJy%2Bos0%2B24kYZs964gTmBRElqtf0toOE3Cfkk4LtL9Dg0xyeYdZSjSvPUCTRkmYyZXutXjsk8lxwNiuT9nxweecScdtMq9HOS6C7o%2B0&X-Amz-Signature=e832a6cd8e3e7a6f78c62747451040e7b4694418d89ba5686e0e97933dfb5c70&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFNGLWH6%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T031036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7kLVthe0w5UXXMpXWhjquHiWyDisZR0Qn6HoROmrW8AiBAqVduvAk7fX%2BoqpJB8WoIVyP6iYTFH0qQ66QwU5ZEMSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpXeNW%2BYuAxKop0GIKtwDInKMyIJ2qTIPcTI4G%2B6b6PRv0wxr1lN5xN6o0KcVDiYjqA1d%2FSHbQmAEwQbQlOVmwArVE7UMNsN%2B%2FeZVOPkjClkIGmGkKfpcqToPKS1rj%2B0GVzY1IJrA7U2P3qeYF3LnAc9T8GzYHL7EeV3ZZZLcUOR73kBStVmSCfpecXWRxHsMpvPsS%2Bwk1UZdkNHAngsTEIlbX8qDjctx6dgycCt7ktD%2BNeBGl65q74z2PeYRjQGNw2CUXG%2BrHcrT8p5SJbnHglD7j9WFLy7LVHj7T0ga%2BJyH8PBUjz5UKem%2B5C%2F9iK4q94YkQoMNe3fjMj9DYRfQZT1p5a40WXAsIIqKQYoavXk%2BQfvdQvNokSuljuYOiEEbMyJGqiiRGfXXFyis0Vr605JwaMnMlYg22sY%2Bun3l9x9zWxi3d4aISRm6Ca4Ql%2ByubEhHIluqx%2FkSze9Kyw8WaQF%2FA5RhxS6q5uuoguCD%2BYyfqjg%2B2YTYN5fpGLL3GUUWWFdrd4ekFWyRXBhWf25ZTqD38o2Gnn8wNVzu0hnK8%2F52SSDb5KEIKgHq2wkBSehpMXk%2FBHyuDoastBcs3Phc0K%2BG3eTOg6%2BPOiJBcqq1RJpFQw1fxX%2FhtWivaSdWeZdUANPa9ZWm7CcybNIwiu3kvQY6pgGMr0ryE5AVLr8l1lvhrtQl4n4A%2BNv2g77ZjCeob43ImXAOakaq2fsrYehp4Db5SEWxLO%2BZ6JUadm9qNAMePf2kMARcU%2BoH5d6ogQqpNAPFkrlpNIVbB%2B3zcmJy%2Bos0%2B24kYZs964gTmBRElqtf0toOE3Cfkk4LtL9Dg0xyeYdZSjSvPUCTRkmYyZXutXjsk8lxwNiuT9nxweecScdtMq9HOS6C7o%2B0&X-Amz-Signature=940343782dc35555133dc3ba1b30867e28cdf0166585f4dd6f0e833058f2cf0b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFNGLWH6%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T031036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7kLVthe0w5UXXMpXWhjquHiWyDisZR0Qn6HoROmrW8AiBAqVduvAk7fX%2BoqpJB8WoIVyP6iYTFH0qQ66QwU5ZEMSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpXeNW%2BYuAxKop0GIKtwDInKMyIJ2qTIPcTI4G%2B6b6PRv0wxr1lN5xN6o0KcVDiYjqA1d%2FSHbQmAEwQbQlOVmwArVE7UMNsN%2B%2FeZVOPkjClkIGmGkKfpcqToPKS1rj%2B0GVzY1IJrA7U2P3qeYF3LnAc9T8GzYHL7EeV3ZZZLcUOR73kBStVmSCfpecXWRxHsMpvPsS%2Bwk1UZdkNHAngsTEIlbX8qDjctx6dgycCt7ktD%2BNeBGl65q74z2PeYRjQGNw2CUXG%2BrHcrT8p5SJbnHglD7j9WFLy7LVHj7T0ga%2BJyH8PBUjz5UKem%2B5C%2F9iK4q94YkQoMNe3fjMj9DYRfQZT1p5a40WXAsIIqKQYoavXk%2BQfvdQvNokSuljuYOiEEbMyJGqiiRGfXXFyis0Vr605JwaMnMlYg22sY%2Bun3l9x9zWxi3d4aISRm6Ca4Ql%2ByubEhHIluqx%2FkSze9Kyw8WaQF%2FA5RhxS6q5uuoguCD%2BYyfqjg%2B2YTYN5fpGLL3GUUWWFdrd4ekFWyRXBhWf25ZTqD38o2Gnn8wNVzu0hnK8%2F52SSDb5KEIKgHq2wkBSehpMXk%2FBHyuDoastBcs3Phc0K%2BG3eTOg6%2BPOiJBcqq1RJpFQw1fxX%2FhtWivaSdWeZdUANPa9ZWm7CcybNIwiu3kvQY6pgGMr0ryE5AVLr8l1lvhrtQl4n4A%2BNv2g77ZjCeob43ImXAOakaq2fsrYehp4Db5SEWxLO%2BZ6JUadm9qNAMePf2kMARcU%2BoH5d6ogQqpNAPFkrlpNIVbB%2B3zcmJy%2Bos0%2B24kYZs964gTmBRElqtf0toOE3Cfkk4LtL9Dg0xyeYdZSjSvPUCTRkmYyZXutXjsk8lxwNiuT9nxweecScdtMq9HOS6C7o%2B0&X-Amz-Signature=b49fc7d4f39b3ca23acc818593e3b7ecb0f780f9ae85ecf14a1a12f2d9256f0d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFNGLWH6%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T031037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7kLVthe0w5UXXMpXWhjquHiWyDisZR0Qn6HoROmrW8AiBAqVduvAk7fX%2BoqpJB8WoIVyP6iYTFH0qQ66QwU5ZEMSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpXeNW%2BYuAxKop0GIKtwDInKMyIJ2qTIPcTI4G%2B6b6PRv0wxr1lN5xN6o0KcVDiYjqA1d%2FSHbQmAEwQbQlOVmwArVE7UMNsN%2B%2FeZVOPkjClkIGmGkKfpcqToPKS1rj%2B0GVzY1IJrA7U2P3qeYF3LnAc9T8GzYHL7EeV3ZZZLcUOR73kBStVmSCfpecXWRxHsMpvPsS%2Bwk1UZdkNHAngsTEIlbX8qDjctx6dgycCt7ktD%2BNeBGl65q74z2PeYRjQGNw2CUXG%2BrHcrT8p5SJbnHglD7j9WFLy7LVHj7T0ga%2BJyH8PBUjz5UKem%2B5C%2F9iK4q94YkQoMNe3fjMj9DYRfQZT1p5a40WXAsIIqKQYoavXk%2BQfvdQvNokSuljuYOiEEbMyJGqiiRGfXXFyis0Vr605JwaMnMlYg22sY%2Bun3l9x9zWxi3d4aISRm6Ca4Ql%2ByubEhHIluqx%2FkSze9Kyw8WaQF%2FA5RhxS6q5uuoguCD%2BYyfqjg%2B2YTYN5fpGLL3GUUWWFdrd4ekFWyRXBhWf25ZTqD38o2Gnn8wNVzu0hnK8%2F52SSDb5KEIKgHq2wkBSehpMXk%2FBHyuDoastBcs3Phc0K%2BG3eTOg6%2BPOiJBcqq1RJpFQw1fxX%2FhtWivaSdWeZdUANPa9ZWm7CcybNIwiu3kvQY6pgGMr0ryE5AVLr8l1lvhrtQl4n4A%2BNv2g77ZjCeob43ImXAOakaq2fsrYehp4Db5SEWxLO%2BZ6JUadm9qNAMePf2kMARcU%2BoH5d6ogQqpNAPFkrlpNIVbB%2B3zcmJy%2Bos0%2B24kYZs964gTmBRElqtf0toOE3Cfkk4LtL9Dg0xyeYdZSjSvPUCTRkmYyZXutXjsk8lxwNiuT9nxweecScdtMq9HOS6C7o%2B0&X-Amz-Signature=a6a07b53888ccf1450e12ee4a34240ec9e3504125e19536610071fe267141d88&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFNGLWH6%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T031037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7kLVthe0w5UXXMpXWhjquHiWyDisZR0Qn6HoROmrW8AiBAqVduvAk7fX%2BoqpJB8WoIVyP6iYTFH0qQ66QwU5ZEMSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpXeNW%2BYuAxKop0GIKtwDInKMyIJ2qTIPcTI4G%2B6b6PRv0wxr1lN5xN6o0KcVDiYjqA1d%2FSHbQmAEwQbQlOVmwArVE7UMNsN%2B%2FeZVOPkjClkIGmGkKfpcqToPKS1rj%2B0GVzY1IJrA7U2P3qeYF3LnAc9T8GzYHL7EeV3ZZZLcUOR73kBStVmSCfpecXWRxHsMpvPsS%2Bwk1UZdkNHAngsTEIlbX8qDjctx6dgycCt7ktD%2BNeBGl65q74z2PeYRjQGNw2CUXG%2BrHcrT8p5SJbnHglD7j9WFLy7LVHj7T0ga%2BJyH8PBUjz5UKem%2B5C%2F9iK4q94YkQoMNe3fjMj9DYRfQZT1p5a40WXAsIIqKQYoavXk%2BQfvdQvNokSuljuYOiEEbMyJGqiiRGfXXFyis0Vr605JwaMnMlYg22sY%2Bun3l9x9zWxi3d4aISRm6Ca4Ql%2ByubEhHIluqx%2FkSze9Kyw8WaQF%2FA5RhxS6q5uuoguCD%2BYyfqjg%2B2YTYN5fpGLL3GUUWWFdrd4ekFWyRXBhWf25ZTqD38o2Gnn8wNVzu0hnK8%2F52SSDb5KEIKgHq2wkBSehpMXk%2FBHyuDoastBcs3Phc0K%2BG3eTOg6%2BPOiJBcqq1RJpFQw1fxX%2FhtWivaSdWeZdUANPa9ZWm7CcybNIwiu3kvQY6pgGMr0ryE5AVLr8l1lvhrtQl4n4A%2BNv2g77ZjCeob43ImXAOakaq2fsrYehp4Db5SEWxLO%2BZ6JUadm9qNAMePf2kMARcU%2BoH5d6ogQqpNAPFkrlpNIVbB%2B3zcmJy%2Bos0%2B24kYZs964gTmBRElqtf0toOE3Cfkk4LtL9Dg0xyeYdZSjSvPUCTRkmYyZXutXjsk8lxwNiuT9nxweecScdtMq9HOS6C7o%2B0&X-Amz-Signature=55721c78613947b39ca0b26ef5e0d026cb0713a66c6869d0eb224e89230899ea&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFNGLWH6%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T031037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC7kLVthe0w5UXXMpXWhjquHiWyDisZR0Qn6HoROmrW8AiBAqVduvAk7fX%2BoqpJB8WoIVyP6iYTFH0qQ66QwU5ZEMSqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpXeNW%2BYuAxKop0GIKtwDInKMyIJ2qTIPcTI4G%2B6b6PRv0wxr1lN5xN6o0KcVDiYjqA1d%2FSHbQmAEwQbQlOVmwArVE7UMNsN%2B%2FeZVOPkjClkIGmGkKfpcqToPKS1rj%2B0GVzY1IJrA7U2P3qeYF3LnAc9T8GzYHL7EeV3ZZZLcUOR73kBStVmSCfpecXWRxHsMpvPsS%2Bwk1UZdkNHAngsTEIlbX8qDjctx6dgycCt7ktD%2BNeBGl65q74z2PeYRjQGNw2CUXG%2BrHcrT8p5SJbnHglD7j9WFLy7LVHj7T0ga%2BJyH8PBUjz5UKem%2B5C%2F9iK4q94YkQoMNe3fjMj9DYRfQZT1p5a40WXAsIIqKQYoavXk%2BQfvdQvNokSuljuYOiEEbMyJGqiiRGfXXFyis0Vr605JwaMnMlYg22sY%2Bun3l9x9zWxi3d4aISRm6Ca4Ql%2ByubEhHIluqx%2FkSze9Kyw8WaQF%2FA5RhxS6q5uuoguCD%2BYyfqjg%2B2YTYN5fpGLL3GUUWWFdrd4ekFWyRXBhWf25ZTqD38o2Gnn8wNVzu0hnK8%2F52SSDb5KEIKgHq2wkBSehpMXk%2FBHyuDoastBcs3Phc0K%2BG3eTOg6%2BPOiJBcqq1RJpFQw1fxX%2FhtWivaSdWeZdUANPa9ZWm7CcybNIwiu3kvQY6pgGMr0ryE5AVLr8l1lvhrtQl4n4A%2BNv2g77ZjCeob43ImXAOakaq2fsrYehp4Db5SEWxLO%2BZ6JUadm9qNAMePf2kMARcU%2BoH5d6ogQqpNAPFkrlpNIVbB%2B3zcmJy%2Bos0%2B24kYZs964gTmBRElqtf0toOE3Cfkk4LtL9Dg0xyeYdZSjSvPUCTRkmYyZXutXjsk8lxwNiuT9nxweecScdtMq9HOS6C7o%2B0&X-Amz-Signature=a392aee4b113897b24f8b054ebf492a1ab598c6496429aa60274bf4d649e06be&X-Amz-SignedHeaders=host&x-id=GetObject)
