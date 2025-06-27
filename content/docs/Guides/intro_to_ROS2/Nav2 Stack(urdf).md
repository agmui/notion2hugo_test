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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGKDNLUX%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrm7MChJ%2F%2F5QvtlOkOr1GXcUOrm8UPuLIukIQrfGdr4AIhAM0NcLsfABx9vjrPWINYabv920kXmheXFhF0XMOPZ48WKv8DCHwQABoMNjM3NDIzMTgzODA1Igy9Byzmvcyem%2FU%2FRasq3AOQQgalvT1wlzrxZ2hGFSckYIF9Y1gj0gY1oJ6dDMB6N8xTM4n4iPN%2FEBAhkndGef%2F57iECMQHtrcQvNriqKK1LO5RFHbQUGrNboD%2B%2FvX%2FHLRz6gtvzzbKVWxR84Lzbg6yHadrvzKhWoKkmCljFmUZhnt3TeTG%2F44dqW0s9Fav8iuz%2FQN3zgu3PzR3YOyHSRinEzU5qa34GGhCXLNFhbiRaioGp8wuoq0XicFRr9MnwXx5Xe9uFBjcFvN%2F1NBZQsLxNdGXywp7jJrFl7tvR76zsKTEX1U4eP0aiKPLgUPe5gffRAHyvWBwsTDgzywLfuSRC8mPsD2%2FyeHIEGh0nfdQsQrVnewJSVQ6lI0keKA43507PCSxwfTsYrd4wNmVMFNxf6OSCVKE0PAL%2Fb5dmeh1a%2BQvhVk2Rt6p9FkVPBAQsFG96ScCqr%2BVYJXxBt0pnRsLTPNcUGDBuRDwbqO1DqQwlSu6rNxqxUrFokms%2BfdcsvOiEHWqPoRuO4O%2F5B62TlVe8do3hvgRtIr9zlGjgOEnpY5BenpeKPw4cxgukg70fpFXueKdSlcbVA1pJ%2Bjosa1%2F6SNFgmNe6gsKW5H9EvlZxp0v2CwSInjMV%2Fas9Jksa3wZiFb1zsDAgwc%2BctzD7yvvCBjqkAeL4JJty7LVhMSNLoHFHAsaWjOTn5P3qTOREguABthaJx7Uy77Tt8%2FrCjUGrS86iz9iavJFqXm5FsU0VvwSBeKgaO039WZYiGpSm3Ih7SMYTZ9cmBfrJrOMeVhnXPVFuUuENiy01uzo7t7hKpl9jRLKRq5DVIlD8tsoRhQPFXJSStcQgoLi4GIuslJ3vstjVpHf5rEZfJwM4pO1ZiAH9lIs9uM4C&X-Amz-Signature=b20613e1401e9133730189ff927cf21c0648db678736bd7d87880382997935b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGKDNLUX%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrm7MChJ%2F%2F5QvtlOkOr1GXcUOrm8UPuLIukIQrfGdr4AIhAM0NcLsfABx9vjrPWINYabv920kXmheXFhF0XMOPZ48WKv8DCHwQABoMNjM3NDIzMTgzODA1Igy9Byzmvcyem%2FU%2FRasq3AOQQgalvT1wlzrxZ2hGFSckYIF9Y1gj0gY1oJ6dDMB6N8xTM4n4iPN%2FEBAhkndGef%2F57iECMQHtrcQvNriqKK1LO5RFHbQUGrNboD%2B%2FvX%2FHLRz6gtvzzbKVWxR84Lzbg6yHadrvzKhWoKkmCljFmUZhnt3TeTG%2F44dqW0s9Fav8iuz%2FQN3zgu3PzR3YOyHSRinEzU5qa34GGhCXLNFhbiRaioGp8wuoq0XicFRr9MnwXx5Xe9uFBjcFvN%2F1NBZQsLxNdGXywp7jJrFl7tvR76zsKTEX1U4eP0aiKPLgUPe5gffRAHyvWBwsTDgzywLfuSRC8mPsD2%2FyeHIEGh0nfdQsQrVnewJSVQ6lI0keKA43507PCSxwfTsYrd4wNmVMFNxf6OSCVKE0PAL%2Fb5dmeh1a%2BQvhVk2Rt6p9FkVPBAQsFG96ScCqr%2BVYJXxBt0pnRsLTPNcUGDBuRDwbqO1DqQwlSu6rNxqxUrFokms%2BfdcsvOiEHWqPoRuO4O%2F5B62TlVe8do3hvgRtIr9zlGjgOEnpY5BenpeKPw4cxgukg70fpFXueKdSlcbVA1pJ%2Bjosa1%2F6SNFgmNe6gsKW5H9EvlZxp0v2CwSInjMV%2Fas9Jksa3wZiFb1zsDAgwc%2BctzD7yvvCBjqkAeL4JJty7LVhMSNLoHFHAsaWjOTn5P3qTOREguABthaJx7Uy77Tt8%2FrCjUGrS86iz9iavJFqXm5FsU0VvwSBeKgaO039WZYiGpSm3Ih7SMYTZ9cmBfrJrOMeVhnXPVFuUuENiy01uzo7t7hKpl9jRLKRq5DVIlD8tsoRhQPFXJSStcQgoLi4GIuslJ3vstjVpHf5rEZfJwM4pO1ZiAH9lIs9uM4C&X-Amz-Signature=82ba875bd3ccbea6e5e6003d7d798ab168ef79fb182aa9482424306bf15c5bff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGKDNLUX%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrm7MChJ%2F%2F5QvtlOkOr1GXcUOrm8UPuLIukIQrfGdr4AIhAM0NcLsfABx9vjrPWINYabv920kXmheXFhF0XMOPZ48WKv8DCHwQABoMNjM3NDIzMTgzODA1Igy9Byzmvcyem%2FU%2FRasq3AOQQgalvT1wlzrxZ2hGFSckYIF9Y1gj0gY1oJ6dDMB6N8xTM4n4iPN%2FEBAhkndGef%2F57iECMQHtrcQvNriqKK1LO5RFHbQUGrNboD%2B%2FvX%2FHLRz6gtvzzbKVWxR84Lzbg6yHadrvzKhWoKkmCljFmUZhnt3TeTG%2F44dqW0s9Fav8iuz%2FQN3zgu3PzR3YOyHSRinEzU5qa34GGhCXLNFhbiRaioGp8wuoq0XicFRr9MnwXx5Xe9uFBjcFvN%2F1NBZQsLxNdGXywp7jJrFl7tvR76zsKTEX1U4eP0aiKPLgUPe5gffRAHyvWBwsTDgzywLfuSRC8mPsD2%2FyeHIEGh0nfdQsQrVnewJSVQ6lI0keKA43507PCSxwfTsYrd4wNmVMFNxf6OSCVKE0PAL%2Fb5dmeh1a%2BQvhVk2Rt6p9FkVPBAQsFG96ScCqr%2BVYJXxBt0pnRsLTPNcUGDBuRDwbqO1DqQwlSu6rNxqxUrFokms%2BfdcsvOiEHWqPoRuO4O%2F5B62TlVe8do3hvgRtIr9zlGjgOEnpY5BenpeKPw4cxgukg70fpFXueKdSlcbVA1pJ%2Bjosa1%2F6SNFgmNe6gsKW5H9EvlZxp0v2CwSInjMV%2Fas9Jksa3wZiFb1zsDAgwc%2BctzD7yvvCBjqkAeL4JJty7LVhMSNLoHFHAsaWjOTn5P3qTOREguABthaJx7Uy77Tt8%2FrCjUGrS86iz9iavJFqXm5FsU0VvwSBeKgaO039WZYiGpSm3Ih7SMYTZ9cmBfrJrOMeVhnXPVFuUuENiy01uzo7t7hKpl9jRLKRq5DVIlD8tsoRhQPFXJSStcQgoLi4GIuslJ3vstjVpHf5rEZfJwM4pO1ZiAH9lIs9uM4C&X-Amz-Signature=cb629372481898ed4e0f5a85a60833fcc430750e066dd891d99d723947e92594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGKDNLUX%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrm7MChJ%2F%2F5QvtlOkOr1GXcUOrm8UPuLIukIQrfGdr4AIhAM0NcLsfABx9vjrPWINYabv920kXmheXFhF0XMOPZ48WKv8DCHwQABoMNjM3NDIzMTgzODA1Igy9Byzmvcyem%2FU%2FRasq3AOQQgalvT1wlzrxZ2hGFSckYIF9Y1gj0gY1oJ6dDMB6N8xTM4n4iPN%2FEBAhkndGef%2F57iECMQHtrcQvNriqKK1LO5RFHbQUGrNboD%2B%2FvX%2FHLRz6gtvzzbKVWxR84Lzbg6yHadrvzKhWoKkmCljFmUZhnt3TeTG%2F44dqW0s9Fav8iuz%2FQN3zgu3PzR3YOyHSRinEzU5qa34GGhCXLNFhbiRaioGp8wuoq0XicFRr9MnwXx5Xe9uFBjcFvN%2F1NBZQsLxNdGXywp7jJrFl7tvR76zsKTEX1U4eP0aiKPLgUPe5gffRAHyvWBwsTDgzywLfuSRC8mPsD2%2FyeHIEGh0nfdQsQrVnewJSVQ6lI0keKA43507PCSxwfTsYrd4wNmVMFNxf6OSCVKE0PAL%2Fb5dmeh1a%2BQvhVk2Rt6p9FkVPBAQsFG96ScCqr%2BVYJXxBt0pnRsLTPNcUGDBuRDwbqO1DqQwlSu6rNxqxUrFokms%2BfdcsvOiEHWqPoRuO4O%2F5B62TlVe8do3hvgRtIr9zlGjgOEnpY5BenpeKPw4cxgukg70fpFXueKdSlcbVA1pJ%2Bjosa1%2F6SNFgmNe6gsKW5H9EvlZxp0v2CwSInjMV%2Fas9Jksa3wZiFb1zsDAgwc%2BctzD7yvvCBjqkAeL4JJty7LVhMSNLoHFHAsaWjOTn5P3qTOREguABthaJx7Uy77Tt8%2FrCjUGrS86iz9iavJFqXm5FsU0VvwSBeKgaO039WZYiGpSm3Ih7SMYTZ9cmBfrJrOMeVhnXPVFuUuENiy01uzo7t7hKpl9jRLKRq5DVIlD8tsoRhQPFXJSStcQgoLi4GIuslJ3vstjVpHf5rEZfJwM4pO1ZiAH9lIs9uM4C&X-Amz-Signature=4563108d7d6ca60c40ad275e263d77aec2b07649cc30dab01fc7ccd67284b03a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGKDNLUX%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrm7MChJ%2F%2F5QvtlOkOr1GXcUOrm8UPuLIukIQrfGdr4AIhAM0NcLsfABx9vjrPWINYabv920kXmheXFhF0XMOPZ48WKv8DCHwQABoMNjM3NDIzMTgzODA1Igy9Byzmvcyem%2FU%2FRasq3AOQQgalvT1wlzrxZ2hGFSckYIF9Y1gj0gY1oJ6dDMB6N8xTM4n4iPN%2FEBAhkndGef%2F57iECMQHtrcQvNriqKK1LO5RFHbQUGrNboD%2B%2FvX%2FHLRz6gtvzzbKVWxR84Lzbg6yHadrvzKhWoKkmCljFmUZhnt3TeTG%2F44dqW0s9Fav8iuz%2FQN3zgu3PzR3YOyHSRinEzU5qa34GGhCXLNFhbiRaioGp8wuoq0XicFRr9MnwXx5Xe9uFBjcFvN%2F1NBZQsLxNdGXywp7jJrFl7tvR76zsKTEX1U4eP0aiKPLgUPe5gffRAHyvWBwsTDgzywLfuSRC8mPsD2%2FyeHIEGh0nfdQsQrVnewJSVQ6lI0keKA43507PCSxwfTsYrd4wNmVMFNxf6OSCVKE0PAL%2Fb5dmeh1a%2BQvhVk2Rt6p9FkVPBAQsFG96ScCqr%2BVYJXxBt0pnRsLTPNcUGDBuRDwbqO1DqQwlSu6rNxqxUrFokms%2BfdcsvOiEHWqPoRuO4O%2F5B62TlVe8do3hvgRtIr9zlGjgOEnpY5BenpeKPw4cxgukg70fpFXueKdSlcbVA1pJ%2Bjosa1%2F6SNFgmNe6gsKW5H9EvlZxp0v2CwSInjMV%2Fas9Jksa3wZiFb1zsDAgwc%2BctzD7yvvCBjqkAeL4JJty7LVhMSNLoHFHAsaWjOTn5P3qTOREguABthaJx7Uy77Tt8%2FrCjUGrS86iz9iavJFqXm5FsU0VvwSBeKgaO039WZYiGpSm3Ih7SMYTZ9cmBfrJrOMeVhnXPVFuUuENiy01uzo7t7hKpl9jRLKRq5DVIlD8tsoRhQPFXJSStcQgoLi4GIuslJ3vstjVpHf5rEZfJwM4pO1ZiAH9lIs9uM4C&X-Amz-Signature=0ac0a0e000bed568ba3df06b5666787f4bb8a28a29a2e6ef0e248293ca6d7e84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGKDNLUX%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrm7MChJ%2F%2F5QvtlOkOr1GXcUOrm8UPuLIukIQrfGdr4AIhAM0NcLsfABx9vjrPWINYabv920kXmheXFhF0XMOPZ48WKv8DCHwQABoMNjM3NDIzMTgzODA1Igy9Byzmvcyem%2FU%2FRasq3AOQQgalvT1wlzrxZ2hGFSckYIF9Y1gj0gY1oJ6dDMB6N8xTM4n4iPN%2FEBAhkndGef%2F57iECMQHtrcQvNriqKK1LO5RFHbQUGrNboD%2B%2FvX%2FHLRz6gtvzzbKVWxR84Lzbg6yHadrvzKhWoKkmCljFmUZhnt3TeTG%2F44dqW0s9Fav8iuz%2FQN3zgu3PzR3YOyHSRinEzU5qa34GGhCXLNFhbiRaioGp8wuoq0XicFRr9MnwXx5Xe9uFBjcFvN%2F1NBZQsLxNdGXywp7jJrFl7tvR76zsKTEX1U4eP0aiKPLgUPe5gffRAHyvWBwsTDgzywLfuSRC8mPsD2%2FyeHIEGh0nfdQsQrVnewJSVQ6lI0keKA43507PCSxwfTsYrd4wNmVMFNxf6OSCVKE0PAL%2Fb5dmeh1a%2BQvhVk2Rt6p9FkVPBAQsFG96ScCqr%2BVYJXxBt0pnRsLTPNcUGDBuRDwbqO1DqQwlSu6rNxqxUrFokms%2BfdcsvOiEHWqPoRuO4O%2F5B62TlVe8do3hvgRtIr9zlGjgOEnpY5BenpeKPw4cxgukg70fpFXueKdSlcbVA1pJ%2Bjosa1%2F6SNFgmNe6gsKW5H9EvlZxp0v2CwSInjMV%2Fas9Jksa3wZiFb1zsDAgwc%2BctzD7yvvCBjqkAeL4JJty7LVhMSNLoHFHAsaWjOTn5P3qTOREguABthaJx7Uy77Tt8%2FrCjUGrS86iz9iavJFqXm5FsU0VvwSBeKgaO039WZYiGpSm3Ih7SMYTZ9cmBfrJrOMeVhnXPVFuUuENiy01uzo7t7hKpl9jRLKRq5DVIlD8tsoRhQPFXJSStcQgoLi4GIuslJ3vstjVpHf5rEZfJwM4pO1ZiAH9lIs9uM4C&X-Amz-Signature=b11a4db2fd0451fbfbaa5ea606bb989f2eee308fb80094403cc23c6d6aa729f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
