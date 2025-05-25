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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTZU43JV%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T110217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQC7g4jh0ueBywllI9c12ZvP9QaxPCAiXdvMp6LwopaOEwIgZDtsQfB%2BojNHHO47Cbqd0ytaGQblI1oahqj43ef4pfwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNYcJGxgQy5yGp2feSrcA9Jg81DnertYkLb1eaj2eT%2F6MXuWpjT8U4Dht3%2ByRCKMReSXoEieyaa64TOfYWb6g69t68DhjSLewGymtMrPgwGwMBPUA0Alw1ftdbLSsqt9dCcdPQr81huElZNgpJaRUF8xl0ybTTQ02TCkD7SmBUm%2BJDXdV2K0pJTUJ95YOZvDGaicL%2F2%2FHA2fjGaf7WqTod9X23r0KgndKuEtKiZv9cJwlzCJpb%2Fw3ZWta%2F2TReKcCBvlO7r6ahS4w9OkEASMLQh7oRvHUXuKDdHInkRrJzuKr%2F%2FPOiok%2FkFRSC%2FtmcsWDH5aF%2FGTCFWIx98RPz6vTTaFq7KdqJzrn7ytYGOiP%2Fb7zulRiJFiWviglRLmzzjwjia8RP%2BbqOXwO9vmas0Pcm4tIANnTykYy0vRRzUnTSeU8FGwb5qiHcBhOOD2Y4nC%2BTNXKJ2DHKKWj9%2BbPINohgwX74GdIFlB%2BZO%2F9ZIXE8f59mzFZhhWi%2BwWuNOj9c%2Bh8E58BoMEJj%2Fepmtz80QOQVOZkYekTZyBoYV7zvxolPVibqY3MA8GZUhdYX0XBlNATWZEteUmwidNdCduhIENJjPVQXQwUVz0Y6oXV3dU%2BbpKOX7ddnPDcigaSjLupUWXLt1vryYJqSIV6hExMNG%2By8EGOqUBYpa9NQzvvMnDAKowiA2WcaUsGF%2BRoneon7s5HQU%2BtY2Oet0xJOCEG0MK%2Bj1ns3ALMxbQVngjRMB4r%2BA4O%2BUIUCTPtr4KC2ItWtCtvJ%2FzooeooLNEu4d5UL50H5qrWv5qJ%2FulhR7rJbh422GFCH8P6LNosA7Jh3A0s5za7WbT3%2FOFEXjF49Z9IAgPiUQhmf%2Ffecx0PMOXJPgAticIcqp6ya2Lxa57&X-Amz-Signature=7c417784040597fd6ad06bdbd6d985c8e60421984f60d82ddfcebdf40e04dd80&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTZU43JV%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T110217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQC7g4jh0ueBywllI9c12ZvP9QaxPCAiXdvMp6LwopaOEwIgZDtsQfB%2BojNHHO47Cbqd0ytaGQblI1oahqj43ef4pfwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNYcJGxgQy5yGp2feSrcA9Jg81DnertYkLb1eaj2eT%2F6MXuWpjT8U4Dht3%2ByRCKMReSXoEieyaa64TOfYWb6g69t68DhjSLewGymtMrPgwGwMBPUA0Alw1ftdbLSsqt9dCcdPQr81huElZNgpJaRUF8xl0ybTTQ02TCkD7SmBUm%2BJDXdV2K0pJTUJ95YOZvDGaicL%2F2%2FHA2fjGaf7WqTod9X23r0KgndKuEtKiZv9cJwlzCJpb%2Fw3ZWta%2F2TReKcCBvlO7r6ahS4w9OkEASMLQh7oRvHUXuKDdHInkRrJzuKr%2F%2FPOiok%2FkFRSC%2FtmcsWDH5aF%2FGTCFWIx98RPz6vTTaFq7KdqJzrn7ytYGOiP%2Fb7zulRiJFiWviglRLmzzjwjia8RP%2BbqOXwO9vmas0Pcm4tIANnTykYy0vRRzUnTSeU8FGwb5qiHcBhOOD2Y4nC%2BTNXKJ2DHKKWj9%2BbPINohgwX74GdIFlB%2BZO%2F9ZIXE8f59mzFZhhWi%2BwWuNOj9c%2Bh8E58BoMEJj%2Fepmtz80QOQVOZkYekTZyBoYV7zvxolPVibqY3MA8GZUhdYX0XBlNATWZEteUmwidNdCduhIENJjPVQXQwUVz0Y6oXV3dU%2BbpKOX7ddnPDcigaSjLupUWXLt1vryYJqSIV6hExMNG%2By8EGOqUBYpa9NQzvvMnDAKowiA2WcaUsGF%2BRoneon7s5HQU%2BtY2Oet0xJOCEG0MK%2Bj1ns3ALMxbQVngjRMB4r%2BA4O%2BUIUCTPtr4KC2ItWtCtvJ%2FzooeooLNEu4d5UL50H5qrWv5qJ%2FulhR7rJbh422GFCH8P6LNosA7Jh3A0s5za7WbT3%2FOFEXjF49Z9IAgPiUQhmf%2Ffecx0PMOXJPgAticIcqp6ya2Lxa57&X-Amz-Signature=e0d64bbfcd41a4e845c9a9c07fa3579c723c7280d26308274dadbf18f263485f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTZU43JV%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T110217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQC7g4jh0ueBywllI9c12ZvP9QaxPCAiXdvMp6LwopaOEwIgZDtsQfB%2BojNHHO47Cbqd0ytaGQblI1oahqj43ef4pfwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNYcJGxgQy5yGp2feSrcA9Jg81DnertYkLb1eaj2eT%2F6MXuWpjT8U4Dht3%2ByRCKMReSXoEieyaa64TOfYWb6g69t68DhjSLewGymtMrPgwGwMBPUA0Alw1ftdbLSsqt9dCcdPQr81huElZNgpJaRUF8xl0ybTTQ02TCkD7SmBUm%2BJDXdV2K0pJTUJ95YOZvDGaicL%2F2%2FHA2fjGaf7WqTod9X23r0KgndKuEtKiZv9cJwlzCJpb%2Fw3ZWta%2F2TReKcCBvlO7r6ahS4w9OkEASMLQh7oRvHUXuKDdHInkRrJzuKr%2F%2FPOiok%2FkFRSC%2FtmcsWDH5aF%2FGTCFWIx98RPz6vTTaFq7KdqJzrn7ytYGOiP%2Fb7zulRiJFiWviglRLmzzjwjia8RP%2BbqOXwO9vmas0Pcm4tIANnTykYy0vRRzUnTSeU8FGwb5qiHcBhOOD2Y4nC%2BTNXKJ2DHKKWj9%2BbPINohgwX74GdIFlB%2BZO%2F9ZIXE8f59mzFZhhWi%2BwWuNOj9c%2Bh8E58BoMEJj%2Fepmtz80QOQVOZkYekTZyBoYV7zvxolPVibqY3MA8GZUhdYX0XBlNATWZEteUmwidNdCduhIENJjPVQXQwUVz0Y6oXV3dU%2BbpKOX7ddnPDcigaSjLupUWXLt1vryYJqSIV6hExMNG%2By8EGOqUBYpa9NQzvvMnDAKowiA2WcaUsGF%2BRoneon7s5HQU%2BtY2Oet0xJOCEG0MK%2Bj1ns3ALMxbQVngjRMB4r%2BA4O%2BUIUCTPtr4KC2ItWtCtvJ%2FzooeooLNEu4d5UL50H5qrWv5qJ%2FulhR7rJbh422GFCH8P6LNosA7Jh3A0s5za7WbT3%2FOFEXjF49Z9IAgPiUQhmf%2Ffecx0PMOXJPgAticIcqp6ya2Lxa57&X-Amz-Signature=4fe6ab5fee215ecf7f8372ff498ba09e6054bfa3c12b930949929eb1fd836c1a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTZU43JV%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T110217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQC7g4jh0ueBywllI9c12ZvP9QaxPCAiXdvMp6LwopaOEwIgZDtsQfB%2BojNHHO47Cbqd0ytaGQblI1oahqj43ef4pfwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNYcJGxgQy5yGp2feSrcA9Jg81DnertYkLb1eaj2eT%2F6MXuWpjT8U4Dht3%2ByRCKMReSXoEieyaa64TOfYWb6g69t68DhjSLewGymtMrPgwGwMBPUA0Alw1ftdbLSsqt9dCcdPQr81huElZNgpJaRUF8xl0ybTTQ02TCkD7SmBUm%2BJDXdV2K0pJTUJ95YOZvDGaicL%2F2%2FHA2fjGaf7WqTod9X23r0KgndKuEtKiZv9cJwlzCJpb%2Fw3ZWta%2F2TReKcCBvlO7r6ahS4w9OkEASMLQh7oRvHUXuKDdHInkRrJzuKr%2F%2FPOiok%2FkFRSC%2FtmcsWDH5aF%2FGTCFWIx98RPz6vTTaFq7KdqJzrn7ytYGOiP%2Fb7zulRiJFiWviglRLmzzjwjia8RP%2BbqOXwO9vmas0Pcm4tIANnTykYy0vRRzUnTSeU8FGwb5qiHcBhOOD2Y4nC%2BTNXKJ2DHKKWj9%2BbPINohgwX74GdIFlB%2BZO%2F9ZIXE8f59mzFZhhWi%2BwWuNOj9c%2Bh8E58BoMEJj%2Fepmtz80QOQVOZkYekTZyBoYV7zvxolPVibqY3MA8GZUhdYX0XBlNATWZEteUmwidNdCduhIENJjPVQXQwUVz0Y6oXV3dU%2BbpKOX7ddnPDcigaSjLupUWXLt1vryYJqSIV6hExMNG%2By8EGOqUBYpa9NQzvvMnDAKowiA2WcaUsGF%2BRoneon7s5HQU%2BtY2Oet0xJOCEG0MK%2Bj1ns3ALMxbQVngjRMB4r%2BA4O%2BUIUCTPtr4KC2ItWtCtvJ%2FzooeooLNEu4d5UL50H5qrWv5qJ%2FulhR7rJbh422GFCH8P6LNosA7Jh3A0s5za7WbT3%2FOFEXjF49Z9IAgPiUQhmf%2Ffecx0PMOXJPgAticIcqp6ya2Lxa57&X-Amz-Signature=7a1f984a12a05555716bb1ea837c1a559089d15293bb6fba441e29eee6df344d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTZU43JV%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T110217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQC7g4jh0ueBywllI9c12ZvP9QaxPCAiXdvMp6LwopaOEwIgZDtsQfB%2BojNHHO47Cbqd0ytaGQblI1oahqj43ef4pfwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNYcJGxgQy5yGp2feSrcA9Jg81DnertYkLb1eaj2eT%2F6MXuWpjT8U4Dht3%2ByRCKMReSXoEieyaa64TOfYWb6g69t68DhjSLewGymtMrPgwGwMBPUA0Alw1ftdbLSsqt9dCcdPQr81huElZNgpJaRUF8xl0ybTTQ02TCkD7SmBUm%2BJDXdV2K0pJTUJ95YOZvDGaicL%2F2%2FHA2fjGaf7WqTod9X23r0KgndKuEtKiZv9cJwlzCJpb%2Fw3ZWta%2F2TReKcCBvlO7r6ahS4w9OkEASMLQh7oRvHUXuKDdHInkRrJzuKr%2F%2FPOiok%2FkFRSC%2FtmcsWDH5aF%2FGTCFWIx98RPz6vTTaFq7KdqJzrn7ytYGOiP%2Fb7zulRiJFiWviglRLmzzjwjia8RP%2BbqOXwO9vmas0Pcm4tIANnTykYy0vRRzUnTSeU8FGwb5qiHcBhOOD2Y4nC%2BTNXKJ2DHKKWj9%2BbPINohgwX74GdIFlB%2BZO%2F9ZIXE8f59mzFZhhWi%2BwWuNOj9c%2Bh8E58BoMEJj%2Fepmtz80QOQVOZkYekTZyBoYV7zvxolPVibqY3MA8GZUhdYX0XBlNATWZEteUmwidNdCduhIENJjPVQXQwUVz0Y6oXV3dU%2BbpKOX7ddnPDcigaSjLupUWXLt1vryYJqSIV6hExMNG%2By8EGOqUBYpa9NQzvvMnDAKowiA2WcaUsGF%2BRoneon7s5HQU%2BtY2Oet0xJOCEG0MK%2Bj1ns3ALMxbQVngjRMB4r%2BA4O%2BUIUCTPtr4KC2ItWtCtvJ%2FzooeooLNEu4d5UL50H5qrWv5qJ%2FulhR7rJbh422GFCH8P6LNosA7Jh3A0s5za7WbT3%2FOFEXjF49Z9IAgPiUQhmf%2Ffecx0PMOXJPgAticIcqp6ya2Lxa57&X-Amz-Signature=f6b50df0f1a94cd4ee23ca1bd21bf2e0d81e61f6d107296ec49127454a373a83&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTZU43JV%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T110217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQC7g4jh0ueBywllI9c12ZvP9QaxPCAiXdvMp6LwopaOEwIgZDtsQfB%2BojNHHO47Cbqd0ytaGQblI1oahqj43ef4pfwq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDNYcJGxgQy5yGp2feSrcA9Jg81DnertYkLb1eaj2eT%2F6MXuWpjT8U4Dht3%2ByRCKMReSXoEieyaa64TOfYWb6g69t68DhjSLewGymtMrPgwGwMBPUA0Alw1ftdbLSsqt9dCcdPQr81huElZNgpJaRUF8xl0ybTTQ02TCkD7SmBUm%2BJDXdV2K0pJTUJ95YOZvDGaicL%2F2%2FHA2fjGaf7WqTod9X23r0KgndKuEtKiZv9cJwlzCJpb%2Fw3ZWta%2F2TReKcCBvlO7r6ahS4w9OkEASMLQh7oRvHUXuKDdHInkRrJzuKr%2F%2FPOiok%2FkFRSC%2FtmcsWDH5aF%2FGTCFWIx98RPz6vTTaFq7KdqJzrn7ytYGOiP%2Fb7zulRiJFiWviglRLmzzjwjia8RP%2BbqOXwO9vmas0Pcm4tIANnTykYy0vRRzUnTSeU8FGwb5qiHcBhOOD2Y4nC%2BTNXKJ2DHKKWj9%2BbPINohgwX74GdIFlB%2BZO%2F9ZIXE8f59mzFZhhWi%2BwWuNOj9c%2Bh8E58BoMEJj%2Fepmtz80QOQVOZkYekTZyBoYV7zvxolPVibqY3MA8GZUhdYX0XBlNATWZEteUmwidNdCduhIENJjPVQXQwUVz0Y6oXV3dU%2BbpKOX7ddnPDcigaSjLupUWXLt1vryYJqSIV6hExMNG%2By8EGOqUBYpa9NQzvvMnDAKowiA2WcaUsGF%2BRoneon7s5HQU%2BtY2Oet0xJOCEG0MK%2Bj1ns3ALMxbQVngjRMB4r%2BA4O%2BUIUCTPtr4KC2ItWtCtvJ%2FzooeooLNEu4d5UL50H5qrWv5qJ%2FulhR7rJbh422GFCH8P6LNosA7Jh3A0s5za7WbT3%2FOFEXjF49Z9IAgPiUQhmf%2Ffecx0PMOXJPgAticIcqp6ya2Lxa57&X-Amz-Signature=8848ba4c8ee60f658b6cd55207dcd9c03b5d59aebd008fb765a27ce7af1c90e2&X-Amz-SignedHeaders=host&x-id=GetObject)
