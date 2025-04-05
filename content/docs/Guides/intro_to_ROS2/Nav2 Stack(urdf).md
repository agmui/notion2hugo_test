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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P22AU36%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBQViH6Rq0D%2FBMfcfBgfbzEnoqMt%2Bd49CY%2FlKh6eW6OAiEA7vhy%2Fh0GsKQ%2BtF%2FVHb6jflgRF8yao0ekNh9%2BTH4KTToq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDAV7fu2SAetYyD4DnSrcAwwrR%2F8%2By8OSVkdP3NO2Qd12aPvDxm4UCfBiFEYecrX3o2Q834qM0N48uazhed7x%2FU2wSeNgfkhYacb3jRmoXDZAKT6D%2B9raOCMGvM5clqaMscL5vmMD0Bx9VA4vT4NxPF5OTQLXl2yRsMQh4qbuej%2B7E4qgaL5C0N8VN7X4SZd5q5yuNoAeWWMJzTV6BXMxSlhd6aSNGbFPK8WqQwHJYKgdxEZHCcYQRI2WcpnxS%2FkUplPlFbzDHLuGFZP04zzaUXc4EBRlkCTn9i99MbNwVnLNz5vbakdLpiSL%2BlaVaymjedhCHtnOdCq2Cv7BeUB3zDR2EjYPxC2aU40QoSxLb8Qi7FDGdhVRUvhpo3wSVeuB2mP5P3udJJz7IxNPXqVXk2R%2Fsv5h%2FekfoDuyJ4XJJ5kpK4tHXb4I4RmrmQL%2B%2FW28T4TT%2FAQf3cSxn6T0YQwE2Ztcmfds%2Fk0106%2FddI1jz%2BsutOJcPuQTneSLL0%2FDWQTmivD36eOiEe%2F2OE01nmjOS19yR3XBbNWnb8T00eiFo059boon8fkmk2%2Bn2NXWgnhk%2BdXdK56p%2FshExcsTr2gW43U85XCikKAaIkp7xfS21acbcKV7fg67C4ndCYOT4LA3CSsHasJYtXpo%2FskgMODXwr8GOqUB7bOiII53GRtdgquNBSRd40B5tAUxlhuaphgRYu7bP6fsKtIs5EZB4yLkqMq78oRr0MdmWhvzCnxqYV%2FYmkvUhENdtdlh3am5vaZi%2BciO0lXzvFXmRvUu3AJ1hAuYEp4%2B82u%2F6L37Ro%2F6fnMHr6Ei8jaFJIjOcpqpOxaCwZKliRTS3xNIqMaBYS57MXeWWoIdr5tSzuNdTbGCsdRquc8fHoir1gzw&X-Amz-Signature=ed35a41573989ad6ad7785b81961caf8c03df36d7f75fad41989ccbac20f92f7&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P22AU36%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBQViH6Rq0D%2FBMfcfBgfbzEnoqMt%2Bd49CY%2FlKh6eW6OAiEA7vhy%2Fh0GsKQ%2BtF%2FVHb6jflgRF8yao0ekNh9%2BTH4KTToq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDAV7fu2SAetYyD4DnSrcAwwrR%2F8%2By8OSVkdP3NO2Qd12aPvDxm4UCfBiFEYecrX3o2Q834qM0N48uazhed7x%2FU2wSeNgfkhYacb3jRmoXDZAKT6D%2B9raOCMGvM5clqaMscL5vmMD0Bx9VA4vT4NxPF5OTQLXl2yRsMQh4qbuej%2B7E4qgaL5C0N8VN7X4SZd5q5yuNoAeWWMJzTV6BXMxSlhd6aSNGbFPK8WqQwHJYKgdxEZHCcYQRI2WcpnxS%2FkUplPlFbzDHLuGFZP04zzaUXc4EBRlkCTn9i99MbNwVnLNz5vbakdLpiSL%2BlaVaymjedhCHtnOdCq2Cv7BeUB3zDR2EjYPxC2aU40QoSxLb8Qi7FDGdhVRUvhpo3wSVeuB2mP5P3udJJz7IxNPXqVXk2R%2Fsv5h%2FekfoDuyJ4XJJ5kpK4tHXb4I4RmrmQL%2B%2FW28T4TT%2FAQf3cSxn6T0YQwE2Ztcmfds%2Fk0106%2FddI1jz%2BsutOJcPuQTneSLL0%2FDWQTmivD36eOiEe%2F2OE01nmjOS19yR3XBbNWnb8T00eiFo059boon8fkmk2%2Bn2NXWgnhk%2BdXdK56p%2FshExcsTr2gW43U85XCikKAaIkp7xfS21acbcKV7fg67C4ndCYOT4LA3CSsHasJYtXpo%2FskgMODXwr8GOqUB7bOiII53GRtdgquNBSRd40B5tAUxlhuaphgRYu7bP6fsKtIs5EZB4yLkqMq78oRr0MdmWhvzCnxqYV%2FYmkvUhENdtdlh3am5vaZi%2BciO0lXzvFXmRvUu3AJ1hAuYEp4%2B82u%2F6L37Ro%2F6fnMHr6Ei8jaFJIjOcpqpOxaCwZKliRTS3xNIqMaBYS57MXeWWoIdr5tSzuNdTbGCsdRquc8fHoir1gzw&X-Amz-Signature=3533746a1685d4f553e65f3a59daf569901be84b878323ab054ab42a4bf1dd3e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P22AU36%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBQViH6Rq0D%2FBMfcfBgfbzEnoqMt%2Bd49CY%2FlKh6eW6OAiEA7vhy%2Fh0GsKQ%2BtF%2FVHb6jflgRF8yao0ekNh9%2BTH4KTToq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDAV7fu2SAetYyD4DnSrcAwwrR%2F8%2By8OSVkdP3NO2Qd12aPvDxm4UCfBiFEYecrX3o2Q834qM0N48uazhed7x%2FU2wSeNgfkhYacb3jRmoXDZAKT6D%2B9raOCMGvM5clqaMscL5vmMD0Bx9VA4vT4NxPF5OTQLXl2yRsMQh4qbuej%2B7E4qgaL5C0N8VN7X4SZd5q5yuNoAeWWMJzTV6BXMxSlhd6aSNGbFPK8WqQwHJYKgdxEZHCcYQRI2WcpnxS%2FkUplPlFbzDHLuGFZP04zzaUXc4EBRlkCTn9i99MbNwVnLNz5vbakdLpiSL%2BlaVaymjedhCHtnOdCq2Cv7BeUB3zDR2EjYPxC2aU40QoSxLb8Qi7FDGdhVRUvhpo3wSVeuB2mP5P3udJJz7IxNPXqVXk2R%2Fsv5h%2FekfoDuyJ4XJJ5kpK4tHXb4I4RmrmQL%2B%2FW28T4TT%2FAQf3cSxn6T0YQwE2Ztcmfds%2Fk0106%2FddI1jz%2BsutOJcPuQTneSLL0%2FDWQTmivD36eOiEe%2F2OE01nmjOS19yR3XBbNWnb8T00eiFo059boon8fkmk2%2Bn2NXWgnhk%2BdXdK56p%2FshExcsTr2gW43U85XCikKAaIkp7xfS21acbcKV7fg67C4ndCYOT4LA3CSsHasJYtXpo%2FskgMODXwr8GOqUB7bOiII53GRtdgquNBSRd40B5tAUxlhuaphgRYu7bP6fsKtIs5EZB4yLkqMq78oRr0MdmWhvzCnxqYV%2FYmkvUhENdtdlh3am5vaZi%2BciO0lXzvFXmRvUu3AJ1hAuYEp4%2B82u%2F6L37Ro%2F6fnMHr6Ei8jaFJIjOcpqpOxaCwZKliRTS3xNIqMaBYS57MXeWWoIdr5tSzuNdTbGCsdRquc8fHoir1gzw&X-Amz-Signature=0b4d7890dec2ec2b64e1e6621b0e2513b296df969545a9a3af9f2c9f01ea48e8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P22AU36%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBQViH6Rq0D%2FBMfcfBgfbzEnoqMt%2Bd49CY%2FlKh6eW6OAiEA7vhy%2Fh0GsKQ%2BtF%2FVHb6jflgRF8yao0ekNh9%2BTH4KTToq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDAV7fu2SAetYyD4DnSrcAwwrR%2F8%2By8OSVkdP3NO2Qd12aPvDxm4UCfBiFEYecrX3o2Q834qM0N48uazhed7x%2FU2wSeNgfkhYacb3jRmoXDZAKT6D%2B9raOCMGvM5clqaMscL5vmMD0Bx9VA4vT4NxPF5OTQLXl2yRsMQh4qbuej%2B7E4qgaL5C0N8VN7X4SZd5q5yuNoAeWWMJzTV6BXMxSlhd6aSNGbFPK8WqQwHJYKgdxEZHCcYQRI2WcpnxS%2FkUplPlFbzDHLuGFZP04zzaUXc4EBRlkCTn9i99MbNwVnLNz5vbakdLpiSL%2BlaVaymjedhCHtnOdCq2Cv7BeUB3zDR2EjYPxC2aU40QoSxLb8Qi7FDGdhVRUvhpo3wSVeuB2mP5P3udJJz7IxNPXqVXk2R%2Fsv5h%2FekfoDuyJ4XJJ5kpK4tHXb4I4RmrmQL%2B%2FW28T4TT%2FAQf3cSxn6T0YQwE2Ztcmfds%2Fk0106%2FddI1jz%2BsutOJcPuQTneSLL0%2FDWQTmivD36eOiEe%2F2OE01nmjOS19yR3XBbNWnb8T00eiFo059boon8fkmk2%2Bn2NXWgnhk%2BdXdK56p%2FshExcsTr2gW43U85XCikKAaIkp7xfS21acbcKV7fg67C4ndCYOT4LA3CSsHasJYtXpo%2FskgMODXwr8GOqUB7bOiII53GRtdgquNBSRd40B5tAUxlhuaphgRYu7bP6fsKtIs5EZB4yLkqMq78oRr0MdmWhvzCnxqYV%2FYmkvUhENdtdlh3am5vaZi%2BciO0lXzvFXmRvUu3AJ1hAuYEp4%2B82u%2F6L37Ro%2F6fnMHr6Ei8jaFJIjOcpqpOxaCwZKliRTS3xNIqMaBYS57MXeWWoIdr5tSzuNdTbGCsdRquc8fHoir1gzw&X-Amz-Signature=259a31171e4728e4dbd201d5445ba176151e8ce46ecbae89c36034d106378eb6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P22AU36%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBQViH6Rq0D%2FBMfcfBgfbzEnoqMt%2Bd49CY%2FlKh6eW6OAiEA7vhy%2Fh0GsKQ%2BtF%2FVHb6jflgRF8yao0ekNh9%2BTH4KTToq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDAV7fu2SAetYyD4DnSrcAwwrR%2F8%2By8OSVkdP3NO2Qd12aPvDxm4UCfBiFEYecrX3o2Q834qM0N48uazhed7x%2FU2wSeNgfkhYacb3jRmoXDZAKT6D%2B9raOCMGvM5clqaMscL5vmMD0Bx9VA4vT4NxPF5OTQLXl2yRsMQh4qbuej%2B7E4qgaL5C0N8VN7X4SZd5q5yuNoAeWWMJzTV6BXMxSlhd6aSNGbFPK8WqQwHJYKgdxEZHCcYQRI2WcpnxS%2FkUplPlFbzDHLuGFZP04zzaUXc4EBRlkCTn9i99MbNwVnLNz5vbakdLpiSL%2BlaVaymjedhCHtnOdCq2Cv7BeUB3zDR2EjYPxC2aU40QoSxLb8Qi7FDGdhVRUvhpo3wSVeuB2mP5P3udJJz7IxNPXqVXk2R%2Fsv5h%2FekfoDuyJ4XJJ5kpK4tHXb4I4RmrmQL%2B%2FW28T4TT%2FAQf3cSxn6T0YQwE2Ztcmfds%2Fk0106%2FddI1jz%2BsutOJcPuQTneSLL0%2FDWQTmivD36eOiEe%2F2OE01nmjOS19yR3XBbNWnb8T00eiFo059boon8fkmk2%2Bn2NXWgnhk%2BdXdK56p%2FshExcsTr2gW43U85XCikKAaIkp7xfS21acbcKV7fg67C4ndCYOT4LA3CSsHasJYtXpo%2FskgMODXwr8GOqUB7bOiII53GRtdgquNBSRd40B5tAUxlhuaphgRYu7bP6fsKtIs5EZB4yLkqMq78oRr0MdmWhvzCnxqYV%2FYmkvUhENdtdlh3am5vaZi%2BciO0lXzvFXmRvUu3AJ1hAuYEp4%2B82u%2F6L37Ro%2F6fnMHr6Ei8jaFJIjOcpqpOxaCwZKliRTS3xNIqMaBYS57MXeWWoIdr5tSzuNdTbGCsdRquc8fHoir1gzw&X-Amz-Signature=5c8176bb6165172650cc644f4dcbb4a5a6a0f607f0da5c94b3c0582e109b1ff8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P22AU36%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICBQViH6Rq0D%2FBMfcfBgfbzEnoqMt%2Bd49CY%2FlKh6eW6OAiEA7vhy%2Fh0GsKQ%2BtF%2FVHb6jflgRF8yao0ekNh9%2BTH4KTToq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDAV7fu2SAetYyD4DnSrcAwwrR%2F8%2By8OSVkdP3NO2Qd12aPvDxm4UCfBiFEYecrX3o2Q834qM0N48uazhed7x%2FU2wSeNgfkhYacb3jRmoXDZAKT6D%2B9raOCMGvM5clqaMscL5vmMD0Bx9VA4vT4NxPF5OTQLXl2yRsMQh4qbuej%2B7E4qgaL5C0N8VN7X4SZd5q5yuNoAeWWMJzTV6BXMxSlhd6aSNGbFPK8WqQwHJYKgdxEZHCcYQRI2WcpnxS%2FkUplPlFbzDHLuGFZP04zzaUXc4EBRlkCTn9i99MbNwVnLNz5vbakdLpiSL%2BlaVaymjedhCHtnOdCq2Cv7BeUB3zDR2EjYPxC2aU40QoSxLb8Qi7FDGdhVRUvhpo3wSVeuB2mP5P3udJJz7IxNPXqVXk2R%2Fsv5h%2FekfoDuyJ4XJJ5kpK4tHXb4I4RmrmQL%2B%2FW28T4TT%2FAQf3cSxn6T0YQwE2Ztcmfds%2Fk0106%2FddI1jz%2BsutOJcPuQTneSLL0%2FDWQTmivD36eOiEe%2F2OE01nmjOS19yR3XBbNWnb8T00eiFo059boon8fkmk2%2Bn2NXWgnhk%2BdXdK56p%2FshExcsTr2gW43U85XCikKAaIkp7xfS21acbcKV7fg67C4ndCYOT4LA3CSsHasJYtXpo%2FskgMODXwr8GOqUB7bOiII53GRtdgquNBSRd40B5tAUxlhuaphgRYu7bP6fsKtIs5EZB4yLkqMq78oRr0MdmWhvzCnxqYV%2FYmkvUhENdtdlh3am5vaZi%2BciO0lXzvFXmRvUu3AJ1hAuYEp4%2B82u%2F6L37Ro%2F6fnMHr6Ei8jaFJIjOcpqpOxaCwZKliRTS3xNIqMaBYS57MXeWWoIdr5tSzuNdTbGCsdRquc8fHoir1gzw&X-Amz-Signature=7673f33030713888b41bb8a766d0d2aa6c7f2055856d803d86b71e4acddb48db&X-Amz-SignedHeaders=host&x-id=GetObject)
