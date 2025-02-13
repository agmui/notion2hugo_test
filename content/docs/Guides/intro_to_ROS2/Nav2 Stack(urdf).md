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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT3DMNNZ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T031240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOXFtzGVP8eSYCfVfwGvlszPDJXFLCj%2B3xmgADKTx2GwIhAOYz03rQiiqFj5uRhQtokM6bXiuJzgWsPy2h6KSN%2FlpDKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8q%2FjjfKJMmW94xVoq3AOtSbOWrbuJXoScw%2FOUIoS30vhM53r4BERHHpFZTV52JLCmgh5Bdk3yptfxPTSOa0Bgvc%2FoxiCOdR0V0t3ePYbJXW24u0wZL2iUc1j5MkxRBQjLsKDiphW0hN2EwZaHI4nyioyDQEWjSXpgbl0H2lzLSlBhV6WPLe3%2FGirMwndFURT%2FM6woeYlq%2BCsXkTGZGUO2yx21vXaz6FPmyKz6%2Bs9cR92s7aoHz8qiF2CPbThDnsNkxGHEQDnddRDXhUzGhyvohJd%2FBR3cdDyDkhPqW8VaRvbABcReQdQxyAkLQ5Y%2BnP6Uu3U2630sgH%2Bb%2BA2SVX4SlM9Tw41bM8YCV6OwE%2BOHruT%2BBBQSwH4Pc3fVpBcQZ9RPixOo1%2F9xoV4TfUdqQMdYoHaVwlPKj04eqXD0DKWo0%2BwBBU0dFAXIBOGgRtZNMzdknT6EDGTRRPm%2BNNi7MJ3eIcyuZgqBaT0%2F7WwpiNNneZ3b1OMNrzkTwJf6y2FNeK8Sa6Gm1T4JWSxl5oxkCG4JAHXk9B02nqWZir8%2BzPL7pjLYQgZF2gWasl2Hxa0uJgfQGLIGl8o2Bq9PXs1Zi8ovN6mcA2kzXqvZ7Cq%2FztnxZ30zaY%2F%2F1WWIOEGvvlQcJ%2F%2BueekB57scTtZgLzDRmLW9BjqkAYPEy3BeFoRDRTr8YXcF091KGRL%2BimSl4OKaQ4n%2FQvBvI4RIvM%2Fw%2BQsUFfzTReCuj6LJxXg44HmQrJet8uwlzx4d%2BlHbgmaXsx36UvXnaQjqAoKu0VjZW31RYPfe0m%2BiiBK3GzJPiiezPnw3S1dWW%2FMvLoyeJQFzj97rfg%2Bl4wmom8Ckt6F7D3tpF5oBNGnTOcLVVQ0KVUTuj%2FE2V2BeTfVHaEIN&X-Amz-Signature=49b0ea23b4ba564786b6a83d3eadbf3e9dc79a774956148833a3c20d2c1f3cf6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT3DMNNZ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T031240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOXFtzGVP8eSYCfVfwGvlszPDJXFLCj%2B3xmgADKTx2GwIhAOYz03rQiiqFj5uRhQtokM6bXiuJzgWsPy2h6KSN%2FlpDKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8q%2FjjfKJMmW94xVoq3AOtSbOWrbuJXoScw%2FOUIoS30vhM53r4BERHHpFZTV52JLCmgh5Bdk3yptfxPTSOa0Bgvc%2FoxiCOdR0V0t3ePYbJXW24u0wZL2iUc1j5MkxRBQjLsKDiphW0hN2EwZaHI4nyioyDQEWjSXpgbl0H2lzLSlBhV6WPLe3%2FGirMwndFURT%2FM6woeYlq%2BCsXkTGZGUO2yx21vXaz6FPmyKz6%2Bs9cR92s7aoHz8qiF2CPbThDnsNkxGHEQDnddRDXhUzGhyvohJd%2FBR3cdDyDkhPqW8VaRvbABcReQdQxyAkLQ5Y%2BnP6Uu3U2630sgH%2Bb%2BA2SVX4SlM9Tw41bM8YCV6OwE%2BOHruT%2BBBQSwH4Pc3fVpBcQZ9RPixOo1%2F9xoV4TfUdqQMdYoHaVwlPKj04eqXD0DKWo0%2BwBBU0dFAXIBOGgRtZNMzdknT6EDGTRRPm%2BNNi7MJ3eIcyuZgqBaT0%2F7WwpiNNneZ3b1OMNrzkTwJf6y2FNeK8Sa6Gm1T4JWSxl5oxkCG4JAHXk9B02nqWZir8%2BzPL7pjLYQgZF2gWasl2Hxa0uJgfQGLIGl8o2Bq9PXs1Zi8ovN6mcA2kzXqvZ7Cq%2FztnxZ30zaY%2F%2F1WWIOEGvvlQcJ%2F%2BueekB57scTtZgLzDRmLW9BjqkAYPEy3BeFoRDRTr8YXcF091KGRL%2BimSl4OKaQ4n%2FQvBvI4RIvM%2Fw%2BQsUFfzTReCuj6LJxXg44HmQrJet8uwlzx4d%2BlHbgmaXsx36UvXnaQjqAoKu0VjZW31RYPfe0m%2BiiBK3GzJPiiezPnw3S1dWW%2FMvLoyeJQFzj97rfg%2Bl4wmom8Ckt6F7D3tpF5oBNGnTOcLVVQ0KVUTuj%2FE2V2BeTfVHaEIN&X-Amz-Signature=f9044fedaecf237b76b4a96fd17b8323bfe73f204b3356ce726741efbfe36f18&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT3DMNNZ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T031240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOXFtzGVP8eSYCfVfwGvlszPDJXFLCj%2B3xmgADKTx2GwIhAOYz03rQiiqFj5uRhQtokM6bXiuJzgWsPy2h6KSN%2FlpDKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8q%2FjjfKJMmW94xVoq3AOtSbOWrbuJXoScw%2FOUIoS30vhM53r4BERHHpFZTV52JLCmgh5Bdk3yptfxPTSOa0Bgvc%2FoxiCOdR0V0t3ePYbJXW24u0wZL2iUc1j5MkxRBQjLsKDiphW0hN2EwZaHI4nyioyDQEWjSXpgbl0H2lzLSlBhV6WPLe3%2FGirMwndFURT%2FM6woeYlq%2BCsXkTGZGUO2yx21vXaz6FPmyKz6%2Bs9cR92s7aoHz8qiF2CPbThDnsNkxGHEQDnddRDXhUzGhyvohJd%2FBR3cdDyDkhPqW8VaRvbABcReQdQxyAkLQ5Y%2BnP6Uu3U2630sgH%2Bb%2BA2SVX4SlM9Tw41bM8YCV6OwE%2BOHruT%2BBBQSwH4Pc3fVpBcQZ9RPixOo1%2F9xoV4TfUdqQMdYoHaVwlPKj04eqXD0DKWo0%2BwBBU0dFAXIBOGgRtZNMzdknT6EDGTRRPm%2BNNi7MJ3eIcyuZgqBaT0%2F7WwpiNNneZ3b1OMNrzkTwJf6y2FNeK8Sa6Gm1T4JWSxl5oxkCG4JAHXk9B02nqWZir8%2BzPL7pjLYQgZF2gWasl2Hxa0uJgfQGLIGl8o2Bq9PXs1Zi8ovN6mcA2kzXqvZ7Cq%2FztnxZ30zaY%2F%2F1WWIOEGvvlQcJ%2F%2BueekB57scTtZgLzDRmLW9BjqkAYPEy3BeFoRDRTr8YXcF091KGRL%2BimSl4OKaQ4n%2FQvBvI4RIvM%2Fw%2BQsUFfzTReCuj6LJxXg44HmQrJet8uwlzx4d%2BlHbgmaXsx36UvXnaQjqAoKu0VjZW31RYPfe0m%2BiiBK3GzJPiiezPnw3S1dWW%2FMvLoyeJQFzj97rfg%2Bl4wmom8Ckt6F7D3tpF5oBNGnTOcLVVQ0KVUTuj%2FE2V2BeTfVHaEIN&X-Amz-Signature=297e949f3000a4682a20486cb4eb260982d34dcec4bc2887e0721e65c0e8ef3f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT3DMNNZ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T031240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOXFtzGVP8eSYCfVfwGvlszPDJXFLCj%2B3xmgADKTx2GwIhAOYz03rQiiqFj5uRhQtokM6bXiuJzgWsPy2h6KSN%2FlpDKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8q%2FjjfKJMmW94xVoq3AOtSbOWrbuJXoScw%2FOUIoS30vhM53r4BERHHpFZTV52JLCmgh5Bdk3yptfxPTSOa0Bgvc%2FoxiCOdR0V0t3ePYbJXW24u0wZL2iUc1j5MkxRBQjLsKDiphW0hN2EwZaHI4nyioyDQEWjSXpgbl0H2lzLSlBhV6WPLe3%2FGirMwndFURT%2FM6woeYlq%2BCsXkTGZGUO2yx21vXaz6FPmyKz6%2Bs9cR92s7aoHz8qiF2CPbThDnsNkxGHEQDnddRDXhUzGhyvohJd%2FBR3cdDyDkhPqW8VaRvbABcReQdQxyAkLQ5Y%2BnP6Uu3U2630sgH%2Bb%2BA2SVX4SlM9Tw41bM8YCV6OwE%2BOHruT%2BBBQSwH4Pc3fVpBcQZ9RPixOo1%2F9xoV4TfUdqQMdYoHaVwlPKj04eqXD0DKWo0%2BwBBU0dFAXIBOGgRtZNMzdknT6EDGTRRPm%2BNNi7MJ3eIcyuZgqBaT0%2F7WwpiNNneZ3b1OMNrzkTwJf6y2FNeK8Sa6Gm1T4JWSxl5oxkCG4JAHXk9B02nqWZir8%2BzPL7pjLYQgZF2gWasl2Hxa0uJgfQGLIGl8o2Bq9PXs1Zi8ovN6mcA2kzXqvZ7Cq%2FztnxZ30zaY%2F%2F1WWIOEGvvlQcJ%2F%2BueekB57scTtZgLzDRmLW9BjqkAYPEy3BeFoRDRTr8YXcF091KGRL%2BimSl4OKaQ4n%2FQvBvI4RIvM%2Fw%2BQsUFfzTReCuj6LJxXg44HmQrJet8uwlzx4d%2BlHbgmaXsx36UvXnaQjqAoKu0VjZW31RYPfe0m%2BiiBK3GzJPiiezPnw3S1dWW%2FMvLoyeJQFzj97rfg%2Bl4wmom8Ckt6F7D3tpF5oBNGnTOcLVVQ0KVUTuj%2FE2V2BeTfVHaEIN&X-Amz-Signature=86e6ea26791eb456e97a0735644945a86cb9d1518a3aebf4a806806d01a14239&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT3DMNNZ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T031240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOXFtzGVP8eSYCfVfwGvlszPDJXFLCj%2B3xmgADKTx2GwIhAOYz03rQiiqFj5uRhQtokM6bXiuJzgWsPy2h6KSN%2FlpDKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8q%2FjjfKJMmW94xVoq3AOtSbOWrbuJXoScw%2FOUIoS30vhM53r4BERHHpFZTV52JLCmgh5Bdk3yptfxPTSOa0Bgvc%2FoxiCOdR0V0t3ePYbJXW24u0wZL2iUc1j5MkxRBQjLsKDiphW0hN2EwZaHI4nyioyDQEWjSXpgbl0H2lzLSlBhV6WPLe3%2FGirMwndFURT%2FM6woeYlq%2BCsXkTGZGUO2yx21vXaz6FPmyKz6%2Bs9cR92s7aoHz8qiF2CPbThDnsNkxGHEQDnddRDXhUzGhyvohJd%2FBR3cdDyDkhPqW8VaRvbABcReQdQxyAkLQ5Y%2BnP6Uu3U2630sgH%2Bb%2BA2SVX4SlM9Tw41bM8YCV6OwE%2BOHruT%2BBBQSwH4Pc3fVpBcQZ9RPixOo1%2F9xoV4TfUdqQMdYoHaVwlPKj04eqXD0DKWo0%2BwBBU0dFAXIBOGgRtZNMzdknT6EDGTRRPm%2BNNi7MJ3eIcyuZgqBaT0%2F7WwpiNNneZ3b1OMNrzkTwJf6y2FNeK8Sa6Gm1T4JWSxl5oxkCG4JAHXk9B02nqWZir8%2BzPL7pjLYQgZF2gWasl2Hxa0uJgfQGLIGl8o2Bq9PXs1Zi8ovN6mcA2kzXqvZ7Cq%2FztnxZ30zaY%2F%2F1WWIOEGvvlQcJ%2F%2BueekB57scTtZgLzDRmLW9BjqkAYPEy3BeFoRDRTr8YXcF091KGRL%2BimSl4OKaQ4n%2FQvBvI4RIvM%2Fw%2BQsUFfzTReCuj6LJxXg44HmQrJet8uwlzx4d%2BlHbgmaXsx36UvXnaQjqAoKu0VjZW31RYPfe0m%2BiiBK3GzJPiiezPnw3S1dWW%2FMvLoyeJQFzj97rfg%2Bl4wmom8Ckt6F7D3tpF5oBNGnTOcLVVQ0KVUTuj%2FE2V2BeTfVHaEIN&X-Amz-Signature=2575896826922f1a480734a0f68c93ff8625fe11684e7b5a633f409b65f88698&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT3DMNNZ%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T031240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOXFtzGVP8eSYCfVfwGvlszPDJXFLCj%2B3xmgADKTx2GwIhAOYz03rQiiqFj5uRhQtokM6bXiuJzgWsPy2h6KSN%2FlpDKogECPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8q%2FjjfKJMmW94xVoq3AOtSbOWrbuJXoScw%2FOUIoS30vhM53r4BERHHpFZTV52JLCmgh5Bdk3yptfxPTSOa0Bgvc%2FoxiCOdR0V0t3ePYbJXW24u0wZL2iUc1j5MkxRBQjLsKDiphW0hN2EwZaHI4nyioyDQEWjSXpgbl0H2lzLSlBhV6WPLe3%2FGirMwndFURT%2FM6woeYlq%2BCsXkTGZGUO2yx21vXaz6FPmyKz6%2Bs9cR92s7aoHz8qiF2CPbThDnsNkxGHEQDnddRDXhUzGhyvohJd%2FBR3cdDyDkhPqW8VaRvbABcReQdQxyAkLQ5Y%2BnP6Uu3U2630sgH%2Bb%2BA2SVX4SlM9Tw41bM8YCV6OwE%2BOHruT%2BBBQSwH4Pc3fVpBcQZ9RPixOo1%2F9xoV4TfUdqQMdYoHaVwlPKj04eqXD0DKWo0%2BwBBU0dFAXIBOGgRtZNMzdknT6EDGTRRPm%2BNNi7MJ3eIcyuZgqBaT0%2F7WwpiNNneZ3b1OMNrzkTwJf6y2FNeK8Sa6Gm1T4JWSxl5oxkCG4JAHXk9B02nqWZir8%2BzPL7pjLYQgZF2gWasl2Hxa0uJgfQGLIGl8o2Bq9PXs1Zi8ovN6mcA2kzXqvZ7Cq%2FztnxZ30zaY%2F%2F1WWIOEGvvlQcJ%2F%2BueekB57scTtZgLzDRmLW9BjqkAYPEy3BeFoRDRTr8YXcF091KGRL%2BimSl4OKaQ4n%2FQvBvI4RIvM%2Fw%2BQsUFfzTReCuj6LJxXg44HmQrJet8uwlzx4d%2BlHbgmaXsx36UvXnaQjqAoKu0VjZW31RYPfe0m%2BiiBK3GzJPiiezPnw3S1dWW%2FMvLoyeJQFzj97rfg%2Bl4wmom8Ckt6F7D3tpF5oBNGnTOcLVVQ0KVUTuj%2FE2V2BeTfVHaEIN&X-Amz-Signature=0eda495f19dcef2e89261e9ae389f7f493fbb073101024e7761119a1d5dcec46&X-Amz-SignedHeaders=host&x-id=GetObject)
