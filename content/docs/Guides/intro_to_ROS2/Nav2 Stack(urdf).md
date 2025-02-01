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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ODNWOQS%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T130950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWmxfSMzuiY26yiwNXdJdaMBLF%2F%2FQCgnggOabEF0%2BRIgIgX4pty6eiVPoDxANWxnTUHc1MH%2BNb7qVKI78vyLVtH8sqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8pm%2FE9rykHEf67cCrcAwoYO55MXwx4nq7JiB3az1jBCH%2FlN6hk6Wvm8BuR7KKiTXKdoGRTcxZr0S0pQGq%2BRhZr8fJ8FdBXqzS3WuKI9vRYSggHDDbvksvjGatEsJoyBUI9t%2BOK1UAJQW70ewKasv%2BqeNLO1hkGx4Ryl2w93z0EKryuAGrjD%2Ba%2Fh7k9Gb5%2FsY5MhtXyIYpNMV084xMLWglOCSJEwKbJZd4Nzaw1PNBoglgdCXepLInUXKqa1oLFN21KeRT1nsRr%2F835ucU0X6uBy76JA6rtkIYYhI1%2FudGje%2Ftgzxhzy0p88FDGlbIpva0vMyDKpfp6S0qq69VLQbmC1zIUpAwmiYNufon9oiKDNen8qDNwUsMhjvkiTNadki01Hh89pIkgIYUqXQOLA%2B55xMdXf30b6YdvW3ke8EXlXhLpLdw9HN3aGX2wBSjs58v%2BmXLwhlB9ekr%2Bu3BC4gDUDFhQCMQnFbQ0F%2Bq5EctsmyKBRQ%2Fm55tMx4WcEKec4EBFYkOI6bvvT8moZLBLxC1FyTf4ly%2Ba408UG2cbK8hUcHYIyNf2gJGEQqPw3HZSgQ2BDYhXSY14UrHyLWmvsYjqCDza3gQUMIGR5TXctLpdThhF9Bo%2BfbXgTPZz5ILhrMTgk9hnF0JX6NRkMO2l97wGOqUBXhwzZRxcpmMMfVHDa6GvyeBuyFs6GkGtRrSLl7J%2BP0oC8YPdB566eD17a%2BD7okQai2oU8%2FFE9C5sAT7sbk1oMwJe9I8mmzLj2ERix16LASUCIL6K5YPCiylW%2BNTwvIbyTb6DmC9pK6JOGXdQLKrWoGcUPSbrkPZ0I3Hq3q69RiB11UDmYP%2Fpuz3LmVP6tg0T0r8MTbTbuamsW4TRwThfNThcILzl&X-Amz-Signature=c1fc8ece4e8ce0a853339af9a83aee24c81e222a79777fda6864d75d3f22a285&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ODNWOQS%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T130949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWmxfSMzuiY26yiwNXdJdaMBLF%2F%2FQCgnggOabEF0%2BRIgIgX4pty6eiVPoDxANWxnTUHc1MH%2BNb7qVKI78vyLVtH8sqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8pm%2FE9rykHEf67cCrcAwoYO55MXwx4nq7JiB3az1jBCH%2FlN6hk6Wvm8BuR7KKiTXKdoGRTcxZr0S0pQGq%2BRhZr8fJ8FdBXqzS3WuKI9vRYSggHDDbvksvjGatEsJoyBUI9t%2BOK1UAJQW70ewKasv%2BqeNLO1hkGx4Ryl2w93z0EKryuAGrjD%2Ba%2Fh7k9Gb5%2FsY5MhtXyIYpNMV084xMLWglOCSJEwKbJZd4Nzaw1PNBoglgdCXepLInUXKqa1oLFN21KeRT1nsRr%2F835ucU0X6uBy76JA6rtkIYYhI1%2FudGje%2Ftgzxhzy0p88FDGlbIpva0vMyDKpfp6S0qq69VLQbmC1zIUpAwmiYNufon9oiKDNen8qDNwUsMhjvkiTNadki01Hh89pIkgIYUqXQOLA%2B55xMdXf30b6YdvW3ke8EXlXhLpLdw9HN3aGX2wBSjs58v%2BmXLwhlB9ekr%2Bu3BC4gDUDFhQCMQnFbQ0F%2Bq5EctsmyKBRQ%2Fm55tMx4WcEKec4EBFYkOI6bvvT8moZLBLxC1FyTf4ly%2Ba408UG2cbK8hUcHYIyNf2gJGEQqPw3HZSgQ2BDYhXSY14UrHyLWmvsYjqCDza3gQUMIGR5TXctLpdThhF9Bo%2BfbXgTPZz5ILhrMTgk9hnF0JX6NRkMO2l97wGOqUBXhwzZRxcpmMMfVHDa6GvyeBuyFs6GkGtRrSLl7J%2BP0oC8YPdB566eD17a%2BD7okQai2oU8%2FFE9C5sAT7sbk1oMwJe9I8mmzLj2ERix16LASUCIL6K5YPCiylW%2BNTwvIbyTb6DmC9pK6JOGXdQLKrWoGcUPSbrkPZ0I3Hq3q69RiB11UDmYP%2Fpuz3LmVP6tg0T0r8MTbTbuamsW4TRwThfNThcILzl&X-Amz-Signature=fc9e82f4b7e5a775c0cc7f42f44d36a9784bdb592d1227f10e7ff697c1322564&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ODNWOQS%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T130950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWmxfSMzuiY26yiwNXdJdaMBLF%2F%2FQCgnggOabEF0%2BRIgIgX4pty6eiVPoDxANWxnTUHc1MH%2BNb7qVKI78vyLVtH8sqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8pm%2FE9rykHEf67cCrcAwoYO55MXwx4nq7JiB3az1jBCH%2FlN6hk6Wvm8BuR7KKiTXKdoGRTcxZr0S0pQGq%2BRhZr8fJ8FdBXqzS3WuKI9vRYSggHDDbvksvjGatEsJoyBUI9t%2BOK1UAJQW70ewKasv%2BqeNLO1hkGx4Ryl2w93z0EKryuAGrjD%2Ba%2Fh7k9Gb5%2FsY5MhtXyIYpNMV084xMLWglOCSJEwKbJZd4Nzaw1PNBoglgdCXepLInUXKqa1oLFN21KeRT1nsRr%2F835ucU0X6uBy76JA6rtkIYYhI1%2FudGje%2Ftgzxhzy0p88FDGlbIpva0vMyDKpfp6S0qq69VLQbmC1zIUpAwmiYNufon9oiKDNen8qDNwUsMhjvkiTNadki01Hh89pIkgIYUqXQOLA%2B55xMdXf30b6YdvW3ke8EXlXhLpLdw9HN3aGX2wBSjs58v%2BmXLwhlB9ekr%2Bu3BC4gDUDFhQCMQnFbQ0F%2Bq5EctsmyKBRQ%2Fm55tMx4WcEKec4EBFYkOI6bvvT8moZLBLxC1FyTf4ly%2Ba408UG2cbK8hUcHYIyNf2gJGEQqPw3HZSgQ2BDYhXSY14UrHyLWmvsYjqCDza3gQUMIGR5TXctLpdThhF9Bo%2BfbXgTPZz5ILhrMTgk9hnF0JX6NRkMO2l97wGOqUBXhwzZRxcpmMMfVHDa6GvyeBuyFs6GkGtRrSLl7J%2BP0oC8YPdB566eD17a%2BD7okQai2oU8%2FFE9C5sAT7sbk1oMwJe9I8mmzLj2ERix16LASUCIL6K5YPCiylW%2BNTwvIbyTb6DmC9pK6JOGXdQLKrWoGcUPSbrkPZ0I3Hq3q69RiB11UDmYP%2Fpuz3LmVP6tg0T0r8MTbTbuamsW4TRwThfNThcILzl&X-Amz-Signature=2c4987fea1590a5e8352965ded1a0e7b537ef7a424094e8809b794a1b9f8a6e8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ODNWOQS%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T130950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWmxfSMzuiY26yiwNXdJdaMBLF%2F%2FQCgnggOabEF0%2BRIgIgX4pty6eiVPoDxANWxnTUHc1MH%2BNb7qVKI78vyLVtH8sqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8pm%2FE9rykHEf67cCrcAwoYO55MXwx4nq7JiB3az1jBCH%2FlN6hk6Wvm8BuR7KKiTXKdoGRTcxZr0S0pQGq%2BRhZr8fJ8FdBXqzS3WuKI9vRYSggHDDbvksvjGatEsJoyBUI9t%2BOK1UAJQW70ewKasv%2BqeNLO1hkGx4Ryl2w93z0EKryuAGrjD%2Ba%2Fh7k9Gb5%2FsY5MhtXyIYpNMV084xMLWglOCSJEwKbJZd4Nzaw1PNBoglgdCXepLInUXKqa1oLFN21KeRT1nsRr%2F835ucU0X6uBy76JA6rtkIYYhI1%2FudGje%2Ftgzxhzy0p88FDGlbIpva0vMyDKpfp6S0qq69VLQbmC1zIUpAwmiYNufon9oiKDNen8qDNwUsMhjvkiTNadki01Hh89pIkgIYUqXQOLA%2B55xMdXf30b6YdvW3ke8EXlXhLpLdw9HN3aGX2wBSjs58v%2BmXLwhlB9ekr%2Bu3BC4gDUDFhQCMQnFbQ0F%2Bq5EctsmyKBRQ%2Fm55tMx4WcEKec4EBFYkOI6bvvT8moZLBLxC1FyTf4ly%2Ba408UG2cbK8hUcHYIyNf2gJGEQqPw3HZSgQ2BDYhXSY14UrHyLWmvsYjqCDza3gQUMIGR5TXctLpdThhF9Bo%2BfbXgTPZz5ILhrMTgk9hnF0JX6NRkMO2l97wGOqUBXhwzZRxcpmMMfVHDa6GvyeBuyFs6GkGtRrSLl7J%2BP0oC8YPdB566eD17a%2BD7okQai2oU8%2FFE9C5sAT7sbk1oMwJe9I8mmzLj2ERix16LASUCIL6K5YPCiylW%2BNTwvIbyTb6DmC9pK6JOGXdQLKrWoGcUPSbrkPZ0I3Hq3q69RiB11UDmYP%2Fpuz3LmVP6tg0T0r8MTbTbuamsW4TRwThfNThcILzl&X-Amz-Signature=4624334728cc0bfb2d7a56f019e9c8bb4e203a329bf7ec78ba9cf752313b6ce1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ODNWOQS%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T130950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWmxfSMzuiY26yiwNXdJdaMBLF%2F%2FQCgnggOabEF0%2BRIgIgX4pty6eiVPoDxANWxnTUHc1MH%2BNb7qVKI78vyLVtH8sqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8pm%2FE9rykHEf67cCrcAwoYO55MXwx4nq7JiB3az1jBCH%2FlN6hk6Wvm8BuR7KKiTXKdoGRTcxZr0S0pQGq%2BRhZr8fJ8FdBXqzS3WuKI9vRYSggHDDbvksvjGatEsJoyBUI9t%2BOK1UAJQW70ewKasv%2BqeNLO1hkGx4Ryl2w93z0EKryuAGrjD%2Ba%2Fh7k9Gb5%2FsY5MhtXyIYpNMV084xMLWglOCSJEwKbJZd4Nzaw1PNBoglgdCXepLInUXKqa1oLFN21KeRT1nsRr%2F835ucU0X6uBy76JA6rtkIYYhI1%2FudGje%2Ftgzxhzy0p88FDGlbIpva0vMyDKpfp6S0qq69VLQbmC1zIUpAwmiYNufon9oiKDNen8qDNwUsMhjvkiTNadki01Hh89pIkgIYUqXQOLA%2B55xMdXf30b6YdvW3ke8EXlXhLpLdw9HN3aGX2wBSjs58v%2BmXLwhlB9ekr%2Bu3BC4gDUDFhQCMQnFbQ0F%2Bq5EctsmyKBRQ%2Fm55tMx4WcEKec4EBFYkOI6bvvT8moZLBLxC1FyTf4ly%2Ba408UG2cbK8hUcHYIyNf2gJGEQqPw3HZSgQ2BDYhXSY14UrHyLWmvsYjqCDza3gQUMIGR5TXctLpdThhF9Bo%2BfbXgTPZz5ILhrMTgk9hnF0JX6NRkMO2l97wGOqUBXhwzZRxcpmMMfVHDa6GvyeBuyFs6GkGtRrSLl7J%2BP0oC8YPdB566eD17a%2BD7okQai2oU8%2FFE9C5sAT7sbk1oMwJe9I8mmzLj2ERix16LASUCIL6K5YPCiylW%2BNTwvIbyTb6DmC9pK6JOGXdQLKrWoGcUPSbrkPZ0I3Hq3q69RiB11UDmYP%2Fpuz3LmVP6tg0T0r8MTbTbuamsW4TRwThfNThcILzl&X-Amz-Signature=73f4b614a3ee6b054710abe39ce8217b35803198730e137aa6a1a60a5a18ae33&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ODNWOQS%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T130950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWmxfSMzuiY26yiwNXdJdaMBLF%2F%2FQCgnggOabEF0%2BRIgIgX4pty6eiVPoDxANWxnTUHc1MH%2BNb7qVKI78vyLVtH8sqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF8pm%2FE9rykHEf67cCrcAwoYO55MXwx4nq7JiB3az1jBCH%2FlN6hk6Wvm8BuR7KKiTXKdoGRTcxZr0S0pQGq%2BRhZr8fJ8FdBXqzS3WuKI9vRYSggHDDbvksvjGatEsJoyBUI9t%2BOK1UAJQW70ewKasv%2BqeNLO1hkGx4Ryl2w93z0EKryuAGrjD%2Ba%2Fh7k9Gb5%2FsY5MhtXyIYpNMV084xMLWglOCSJEwKbJZd4Nzaw1PNBoglgdCXepLInUXKqa1oLFN21KeRT1nsRr%2F835ucU0X6uBy76JA6rtkIYYhI1%2FudGje%2Ftgzxhzy0p88FDGlbIpva0vMyDKpfp6S0qq69VLQbmC1zIUpAwmiYNufon9oiKDNen8qDNwUsMhjvkiTNadki01Hh89pIkgIYUqXQOLA%2B55xMdXf30b6YdvW3ke8EXlXhLpLdw9HN3aGX2wBSjs58v%2BmXLwhlB9ekr%2Bu3BC4gDUDFhQCMQnFbQ0F%2Bq5EctsmyKBRQ%2Fm55tMx4WcEKec4EBFYkOI6bvvT8moZLBLxC1FyTf4ly%2Ba408UG2cbK8hUcHYIyNf2gJGEQqPw3HZSgQ2BDYhXSY14UrHyLWmvsYjqCDza3gQUMIGR5TXctLpdThhF9Bo%2BfbXgTPZz5ILhrMTgk9hnF0JX6NRkMO2l97wGOqUBXhwzZRxcpmMMfVHDa6GvyeBuyFs6GkGtRrSLl7J%2BP0oC8YPdB566eD17a%2BD7okQai2oU8%2FFE9C5sAT7sbk1oMwJe9I8mmzLj2ERix16LASUCIL6K5YPCiylW%2BNTwvIbyTb6DmC9pK6JOGXdQLKrWoGcUPSbrkPZ0I3Hq3q69RiB11UDmYP%2Fpuz3LmVP6tg0T0r8MTbTbuamsW4TRwThfNThcILzl&X-Amz-Signature=bfbe944b779bc6ba3bf039d3500b54ff375563a34dfce9d69ecf3ce5f3cefe35&X-Amz-SignedHeaders=host&x-id=GetObject)
