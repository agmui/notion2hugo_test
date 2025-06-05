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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WJ2H3C2%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T041734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIETa2%2FBko7EPVMpxTiNZIon%2B%2Fe%2FTZjOQoavCGWVwLN5LAiA1e0g9JTNI6ND2eAoEZKlPRNY0FwNH%2FQYV0%2FJ9v67o5Cr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMNllFtZ9zupfk5zk7KtwDNP8jJ3T8BHuTwilEr65K7bBIYrbGc39OGHn%2BSlLLEA3oKsxhMdqiAt3sfFzwj9OHHQSL84rQ61jTV%2FiHMJJSY%2BtlOVFc7d6XlklOkk8p1HuPOUeY79mg%2F%2F5Wi3w8uYVv2YrW7xe2LefxvDntKfgHi2Bf7ayuCb0pDMSUBjUn5r5Q%2BUtjO54PUFC2ziSMGlo6br9bssunquWZI4yb0L4VCkZcMEkLRsaJd1Ghr6dnD1Xp19UDvaW4zg5gMxgr00M%2BxYXEnsYnip%2BHGEPgGJujeMmwQPD540snvsrhY9f2d2UxGNhHqyMOjnnFLFXKGB6lASp0dndOUQE11KGzgfQDl4m0n8oEpEViVoR88MaBosn9SVrnAB2chaiYHz31Cq%2Bl9mg8tMxxRG8NZ6QDd3KlhNnHE8DcSX4%2BzvUrylTixCrKegw4uMuK%2F%2BvwVA6TAbWgr2CasHTzzUEj8E8ycpTRZzaw4paHNWwuC5LLTA7QizUWxk1BWk2Xec7fYUh0bvxZXvheXSfPFltfNuQS6Qw6ZrnN8KQpEJTIDo0Axhhin93nOlCZX%2B19mnurVZX36mqV9lCTsI9WBJu85UiPyyOnaxXjSVpseqwmrG%2BNPbF2f%2F4A3en9JQQ4jXAoLV8wz6aEwgY6pgHp2u5VOY%2BOa3FjCMPgzUdAti5wF9f65YrrmWBvo7rBtxunKzL4Su9Jkk%2F4boLvMi4ek2gZi1W5D8%2ByQDTTrEuc0cmzpYVFRFTKnKzbJ41wSt%2BA826PCalYaFXewjpVG6au0FF%2BHZa%2FyBdTNi1haF%2BqgYlTaQLItXbp%2BkmYVRk6U%2BI77HBURnEl08RPPsMvZngjlNhuqhR%2FICpCW76ZeVRqQ%2BxZeu3B&X-Amz-Signature=bdf6198a7e5b50f9dc333082ec4ad0a35ca43bffedc88c91a0518bbe72941f82&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WJ2H3C2%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T041734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIETa2%2FBko7EPVMpxTiNZIon%2B%2Fe%2FTZjOQoavCGWVwLN5LAiA1e0g9JTNI6ND2eAoEZKlPRNY0FwNH%2FQYV0%2FJ9v67o5Cr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMNllFtZ9zupfk5zk7KtwDNP8jJ3T8BHuTwilEr65K7bBIYrbGc39OGHn%2BSlLLEA3oKsxhMdqiAt3sfFzwj9OHHQSL84rQ61jTV%2FiHMJJSY%2BtlOVFc7d6XlklOkk8p1HuPOUeY79mg%2F%2F5Wi3w8uYVv2YrW7xe2LefxvDntKfgHi2Bf7ayuCb0pDMSUBjUn5r5Q%2BUtjO54PUFC2ziSMGlo6br9bssunquWZI4yb0L4VCkZcMEkLRsaJd1Ghr6dnD1Xp19UDvaW4zg5gMxgr00M%2BxYXEnsYnip%2BHGEPgGJujeMmwQPD540snvsrhY9f2d2UxGNhHqyMOjnnFLFXKGB6lASp0dndOUQE11KGzgfQDl4m0n8oEpEViVoR88MaBosn9SVrnAB2chaiYHz31Cq%2Bl9mg8tMxxRG8NZ6QDd3KlhNnHE8DcSX4%2BzvUrylTixCrKegw4uMuK%2F%2BvwVA6TAbWgr2CasHTzzUEj8E8ycpTRZzaw4paHNWwuC5LLTA7QizUWxk1BWk2Xec7fYUh0bvxZXvheXSfPFltfNuQS6Qw6ZrnN8KQpEJTIDo0Axhhin93nOlCZX%2B19mnurVZX36mqV9lCTsI9WBJu85UiPyyOnaxXjSVpseqwmrG%2BNPbF2f%2F4A3en9JQQ4jXAoLV8wz6aEwgY6pgHp2u5VOY%2BOa3FjCMPgzUdAti5wF9f65YrrmWBvo7rBtxunKzL4Su9Jkk%2F4boLvMi4ek2gZi1W5D8%2ByQDTTrEuc0cmzpYVFRFTKnKzbJ41wSt%2BA826PCalYaFXewjpVG6au0FF%2BHZa%2FyBdTNi1haF%2BqgYlTaQLItXbp%2BkmYVRk6U%2BI77HBURnEl08RPPsMvZngjlNhuqhR%2FICpCW76ZeVRqQ%2BxZeu3B&X-Amz-Signature=ca3c7566c7dd9569ab29195bc51f4460e52a0683e432309d0b6a572f49feac2c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WJ2H3C2%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T041734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIETa2%2FBko7EPVMpxTiNZIon%2B%2Fe%2FTZjOQoavCGWVwLN5LAiA1e0g9JTNI6ND2eAoEZKlPRNY0FwNH%2FQYV0%2FJ9v67o5Cr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMNllFtZ9zupfk5zk7KtwDNP8jJ3T8BHuTwilEr65K7bBIYrbGc39OGHn%2BSlLLEA3oKsxhMdqiAt3sfFzwj9OHHQSL84rQ61jTV%2FiHMJJSY%2BtlOVFc7d6XlklOkk8p1HuPOUeY79mg%2F%2F5Wi3w8uYVv2YrW7xe2LefxvDntKfgHi2Bf7ayuCb0pDMSUBjUn5r5Q%2BUtjO54PUFC2ziSMGlo6br9bssunquWZI4yb0L4VCkZcMEkLRsaJd1Ghr6dnD1Xp19UDvaW4zg5gMxgr00M%2BxYXEnsYnip%2BHGEPgGJujeMmwQPD540snvsrhY9f2d2UxGNhHqyMOjnnFLFXKGB6lASp0dndOUQE11KGzgfQDl4m0n8oEpEViVoR88MaBosn9SVrnAB2chaiYHz31Cq%2Bl9mg8tMxxRG8NZ6QDd3KlhNnHE8DcSX4%2BzvUrylTixCrKegw4uMuK%2F%2BvwVA6TAbWgr2CasHTzzUEj8E8ycpTRZzaw4paHNWwuC5LLTA7QizUWxk1BWk2Xec7fYUh0bvxZXvheXSfPFltfNuQS6Qw6ZrnN8KQpEJTIDo0Axhhin93nOlCZX%2B19mnurVZX36mqV9lCTsI9WBJu85UiPyyOnaxXjSVpseqwmrG%2BNPbF2f%2F4A3en9JQQ4jXAoLV8wz6aEwgY6pgHp2u5VOY%2BOa3FjCMPgzUdAti5wF9f65YrrmWBvo7rBtxunKzL4Su9Jkk%2F4boLvMi4ek2gZi1W5D8%2ByQDTTrEuc0cmzpYVFRFTKnKzbJ41wSt%2BA826PCalYaFXewjpVG6au0FF%2BHZa%2FyBdTNi1haF%2BqgYlTaQLItXbp%2BkmYVRk6U%2BI77HBURnEl08RPPsMvZngjlNhuqhR%2FICpCW76ZeVRqQ%2BxZeu3B&X-Amz-Signature=074dac2f6b7bf88a23a179d9c1e1cd72595b6005cbbbb39e4ca72b554aaf723a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WJ2H3C2%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T041734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIETa2%2FBko7EPVMpxTiNZIon%2B%2Fe%2FTZjOQoavCGWVwLN5LAiA1e0g9JTNI6ND2eAoEZKlPRNY0FwNH%2FQYV0%2FJ9v67o5Cr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMNllFtZ9zupfk5zk7KtwDNP8jJ3T8BHuTwilEr65K7bBIYrbGc39OGHn%2BSlLLEA3oKsxhMdqiAt3sfFzwj9OHHQSL84rQ61jTV%2FiHMJJSY%2BtlOVFc7d6XlklOkk8p1HuPOUeY79mg%2F%2F5Wi3w8uYVv2YrW7xe2LefxvDntKfgHi2Bf7ayuCb0pDMSUBjUn5r5Q%2BUtjO54PUFC2ziSMGlo6br9bssunquWZI4yb0L4VCkZcMEkLRsaJd1Ghr6dnD1Xp19UDvaW4zg5gMxgr00M%2BxYXEnsYnip%2BHGEPgGJujeMmwQPD540snvsrhY9f2d2UxGNhHqyMOjnnFLFXKGB6lASp0dndOUQE11KGzgfQDl4m0n8oEpEViVoR88MaBosn9SVrnAB2chaiYHz31Cq%2Bl9mg8tMxxRG8NZ6QDd3KlhNnHE8DcSX4%2BzvUrylTixCrKegw4uMuK%2F%2BvwVA6TAbWgr2CasHTzzUEj8E8ycpTRZzaw4paHNWwuC5LLTA7QizUWxk1BWk2Xec7fYUh0bvxZXvheXSfPFltfNuQS6Qw6ZrnN8KQpEJTIDo0Axhhin93nOlCZX%2B19mnurVZX36mqV9lCTsI9WBJu85UiPyyOnaxXjSVpseqwmrG%2BNPbF2f%2F4A3en9JQQ4jXAoLV8wz6aEwgY6pgHp2u5VOY%2BOa3FjCMPgzUdAti5wF9f65YrrmWBvo7rBtxunKzL4Su9Jkk%2F4boLvMi4ek2gZi1W5D8%2ByQDTTrEuc0cmzpYVFRFTKnKzbJ41wSt%2BA826PCalYaFXewjpVG6au0FF%2BHZa%2FyBdTNi1haF%2BqgYlTaQLItXbp%2BkmYVRk6U%2BI77HBURnEl08RPPsMvZngjlNhuqhR%2FICpCW76ZeVRqQ%2BxZeu3B&X-Amz-Signature=8ca5f534032f4523a73b7d4998b5cfe34f384d2af728a36dbb6d71295365c422&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WJ2H3C2%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T041734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIETa2%2FBko7EPVMpxTiNZIon%2B%2Fe%2FTZjOQoavCGWVwLN5LAiA1e0g9JTNI6ND2eAoEZKlPRNY0FwNH%2FQYV0%2FJ9v67o5Cr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMNllFtZ9zupfk5zk7KtwDNP8jJ3T8BHuTwilEr65K7bBIYrbGc39OGHn%2BSlLLEA3oKsxhMdqiAt3sfFzwj9OHHQSL84rQ61jTV%2FiHMJJSY%2BtlOVFc7d6XlklOkk8p1HuPOUeY79mg%2F%2F5Wi3w8uYVv2YrW7xe2LefxvDntKfgHi2Bf7ayuCb0pDMSUBjUn5r5Q%2BUtjO54PUFC2ziSMGlo6br9bssunquWZI4yb0L4VCkZcMEkLRsaJd1Ghr6dnD1Xp19UDvaW4zg5gMxgr00M%2BxYXEnsYnip%2BHGEPgGJujeMmwQPD540snvsrhY9f2d2UxGNhHqyMOjnnFLFXKGB6lASp0dndOUQE11KGzgfQDl4m0n8oEpEViVoR88MaBosn9SVrnAB2chaiYHz31Cq%2Bl9mg8tMxxRG8NZ6QDd3KlhNnHE8DcSX4%2BzvUrylTixCrKegw4uMuK%2F%2BvwVA6TAbWgr2CasHTzzUEj8E8ycpTRZzaw4paHNWwuC5LLTA7QizUWxk1BWk2Xec7fYUh0bvxZXvheXSfPFltfNuQS6Qw6ZrnN8KQpEJTIDo0Axhhin93nOlCZX%2B19mnurVZX36mqV9lCTsI9WBJu85UiPyyOnaxXjSVpseqwmrG%2BNPbF2f%2F4A3en9JQQ4jXAoLV8wz6aEwgY6pgHp2u5VOY%2BOa3FjCMPgzUdAti5wF9f65YrrmWBvo7rBtxunKzL4Su9Jkk%2F4boLvMi4ek2gZi1W5D8%2ByQDTTrEuc0cmzpYVFRFTKnKzbJ41wSt%2BA826PCalYaFXewjpVG6au0FF%2BHZa%2FyBdTNi1haF%2BqgYlTaQLItXbp%2BkmYVRk6U%2BI77HBURnEl08RPPsMvZngjlNhuqhR%2FICpCW76ZeVRqQ%2BxZeu3B&X-Amz-Signature=d53a6298ae2ec401e8bd3135fddae9ed10bd02aabd112def7f41519c1c18e6f4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WJ2H3C2%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T041734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIETa2%2FBko7EPVMpxTiNZIon%2B%2Fe%2FTZjOQoavCGWVwLN5LAiA1e0g9JTNI6ND2eAoEZKlPRNY0FwNH%2FQYV0%2FJ9v67o5Cr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMNllFtZ9zupfk5zk7KtwDNP8jJ3T8BHuTwilEr65K7bBIYrbGc39OGHn%2BSlLLEA3oKsxhMdqiAt3sfFzwj9OHHQSL84rQ61jTV%2FiHMJJSY%2BtlOVFc7d6XlklOkk8p1HuPOUeY79mg%2F%2F5Wi3w8uYVv2YrW7xe2LefxvDntKfgHi2Bf7ayuCb0pDMSUBjUn5r5Q%2BUtjO54PUFC2ziSMGlo6br9bssunquWZI4yb0L4VCkZcMEkLRsaJd1Ghr6dnD1Xp19UDvaW4zg5gMxgr00M%2BxYXEnsYnip%2BHGEPgGJujeMmwQPD540snvsrhY9f2d2UxGNhHqyMOjnnFLFXKGB6lASp0dndOUQE11KGzgfQDl4m0n8oEpEViVoR88MaBosn9SVrnAB2chaiYHz31Cq%2Bl9mg8tMxxRG8NZ6QDd3KlhNnHE8DcSX4%2BzvUrylTixCrKegw4uMuK%2F%2BvwVA6TAbWgr2CasHTzzUEj8E8ycpTRZzaw4paHNWwuC5LLTA7QizUWxk1BWk2Xec7fYUh0bvxZXvheXSfPFltfNuQS6Qw6ZrnN8KQpEJTIDo0Axhhin93nOlCZX%2B19mnurVZX36mqV9lCTsI9WBJu85UiPyyOnaxXjSVpseqwmrG%2BNPbF2f%2F4A3en9JQQ4jXAoLV8wz6aEwgY6pgHp2u5VOY%2BOa3FjCMPgzUdAti5wF9f65YrrmWBvo7rBtxunKzL4Su9Jkk%2F4boLvMi4ek2gZi1W5D8%2ByQDTTrEuc0cmzpYVFRFTKnKzbJ41wSt%2BA826PCalYaFXewjpVG6au0FF%2BHZa%2FyBdTNi1haF%2BqgYlTaQLItXbp%2BkmYVRk6U%2BI77HBURnEl08RPPsMvZngjlNhuqhR%2FICpCW76ZeVRqQ%2BxZeu3B&X-Amz-Signature=98d24a8894357a1cdc11446a01a7b241531c2c6f953f9ec2fa5d18b272b9df7d&X-Amz-SignedHeaders=host&x-id=GetObject)
