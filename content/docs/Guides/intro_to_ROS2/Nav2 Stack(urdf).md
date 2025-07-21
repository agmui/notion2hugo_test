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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7L75IZB%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T171209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ%2FrxG3dTATikbtvfOBB8FsPp28hhSE7M3rPokADqrlgIhAJi14oda0lmx1aKxC0Z%2BGo1WD8SGnkKq6kq8qT8Ma0jaKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxsbt94bZZM0VOchS0q3APTK%2Bk%2FsrvOHrryAOx1XRdWVVbqzSi7AgwQCywgrYH6WH%2FAPif1uPIOABB%2BZ62lTlUK6Akmk6l7nyCPPi98UwhBN5hSajm%2BruxhVDAYdqIba18L4Zm47RLZudWSQXjcse%2BJPOZgGJp%2F9pwqZ8Oxx0FBR4sls%2BpUAHHsRHZZ0hOJrV6qsd8AZkM9o4HYJplvQQZCXLJki6g%2BUk%2BBmECj3b%2B3f6OnD2b1Pd58p0LNHK2PdYswmzBuHhyfv8e1XTUALMob4T%2Bo4iBoqiVUi0eECjPbI%2B%2B9%2FRJJohncUOdPO3NrGaQMpus0lNFZGhOj%2BU%2BeWSG79SnXlCNFKuPZNp5yFzj9ys615qWlJKSSjoByqn5TfGv7fsxqdwaI1Z2q5kFt%2FAX%2B%2BWF1du7nHHPs3%2FAItaW1fYR0%2BGrjGKj0y%2BC%2FubTmFHXZ96fp%2F849SF0r5EY5owN9SnDd42%2BQnga%2FwqvKuUsim2u9fS5CBiqEbw0DGp0gOJMYihYizkAj1TaknXv6AAqFXzz59a0Q7fyDYKUmFo04a1MU06J%2Bcj7xAat%2FEEJ%2FrGXNLIfiT%2B3lGW3JXrqzggXZON101g6IQbEhWCJz5fLFpa%2BLyuJN7KwxvP7NlhDRRSyD65HeJ3PjmYZkpTCM6PnDBjqkASG7gDxB%2Fw%2FnxWz%2Fur6Xlg0fIGENq1bSJeY%2FeJz2EURvJTRFMBFCavaqVssKMnOPocP7PDsjkdAVS18pW04LdDkGObkFR6hc3DsKZ%2B1sbW5rM2PSQu9SFdRMKcPvce0nXD8u5HU39BFPLDf5%2FTtWaXlTYace%2BvlhGmK4QLJRv071Ip7rOPsahslasUd3OoYtO%2B5chy5TZbRBSVrEmhxR1aMAvLMV&X-Amz-Signature=9864014ff10e308e4edc247599c4e14ea135f1216ea0d8b7611c56b79eb35182&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7L75IZB%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T171209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ%2FrxG3dTATikbtvfOBB8FsPp28hhSE7M3rPokADqrlgIhAJi14oda0lmx1aKxC0Z%2BGo1WD8SGnkKq6kq8qT8Ma0jaKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxsbt94bZZM0VOchS0q3APTK%2Bk%2FsrvOHrryAOx1XRdWVVbqzSi7AgwQCywgrYH6WH%2FAPif1uPIOABB%2BZ62lTlUK6Akmk6l7nyCPPi98UwhBN5hSajm%2BruxhVDAYdqIba18L4Zm47RLZudWSQXjcse%2BJPOZgGJp%2F9pwqZ8Oxx0FBR4sls%2BpUAHHsRHZZ0hOJrV6qsd8AZkM9o4HYJplvQQZCXLJki6g%2BUk%2BBmECj3b%2B3f6OnD2b1Pd58p0LNHK2PdYswmzBuHhyfv8e1XTUALMob4T%2Bo4iBoqiVUi0eECjPbI%2B%2B9%2FRJJohncUOdPO3NrGaQMpus0lNFZGhOj%2BU%2BeWSG79SnXlCNFKuPZNp5yFzj9ys615qWlJKSSjoByqn5TfGv7fsxqdwaI1Z2q5kFt%2FAX%2B%2BWF1du7nHHPs3%2FAItaW1fYR0%2BGrjGKj0y%2BC%2FubTmFHXZ96fp%2F849SF0r5EY5owN9SnDd42%2BQnga%2FwqvKuUsim2u9fS5CBiqEbw0DGp0gOJMYihYizkAj1TaknXv6AAqFXzz59a0Q7fyDYKUmFo04a1MU06J%2Bcj7xAat%2FEEJ%2FrGXNLIfiT%2B3lGW3JXrqzggXZON101g6IQbEhWCJz5fLFpa%2BLyuJN7KwxvP7NlhDRRSyD65HeJ3PjmYZkpTCM6PnDBjqkASG7gDxB%2Fw%2FnxWz%2Fur6Xlg0fIGENq1bSJeY%2FeJz2EURvJTRFMBFCavaqVssKMnOPocP7PDsjkdAVS18pW04LdDkGObkFR6hc3DsKZ%2B1sbW5rM2PSQu9SFdRMKcPvce0nXD8u5HU39BFPLDf5%2FTtWaXlTYace%2BvlhGmK4QLJRv071Ip7rOPsahslasUd3OoYtO%2B5chy5TZbRBSVrEmhxR1aMAvLMV&X-Amz-Signature=b98b680fcdb31db90460534d30285764443eed4e4e5181ee947c9be981a11cf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7L75IZB%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T171209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ%2FrxG3dTATikbtvfOBB8FsPp28hhSE7M3rPokADqrlgIhAJi14oda0lmx1aKxC0Z%2BGo1WD8SGnkKq6kq8qT8Ma0jaKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxsbt94bZZM0VOchS0q3APTK%2Bk%2FsrvOHrryAOx1XRdWVVbqzSi7AgwQCywgrYH6WH%2FAPif1uPIOABB%2BZ62lTlUK6Akmk6l7nyCPPi98UwhBN5hSajm%2BruxhVDAYdqIba18L4Zm47RLZudWSQXjcse%2BJPOZgGJp%2F9pwqZ8Oxx0FBR4sls%2BpUAHHsRHZZ0hOJrV6qsd8AZkM9o4HYJplvQQZCXLJki6g%2BUk%2BBmECj3b%2B3f6OnD2b1Pd58p0LNHK2PdYswmzBuHhyfv8e1XTUALMob4T%2Bo4iBoqiVUi0eECjPbI%2B%2B9%2FRJJohncUOdPO3NrGaQMpus0lNFZGhOj%2BU%2BeWSG79SnXlCNFKuPZNp5yFzj9ys615qWlJKSSjoByqn5TfGv7fsxqdwaI1Z2q5kFt%2FAX%2B%2BWF1du7nHHPs3%2FAItaW1fYR0%2BGrjGKj0y%2BC%2FubTmFHXZ96fp%2F849SF0r5EY5owN9SnDd42%2BQnga%2FwqvKuUsim2u9fS5CBiqEbw0DGp0gOJMYihYizkAj1TaknXv6AAqFXzz59a0Q7fyDYKUmFo04a1MU06J%2Bcj7xAat%2FEEJ%2FrGXNLIfiT%2B3lGW3JXrqzggXZON101g6IQbEhWCJz5fLFpa%2BLyuJN7KwxvP7NlhDRRSyD65HeJ3PjmYZkpTCM6PnDBjqkASG7gDxB%2Fw%2FnxWz%2Fur6Xlg0fIGENq1bSJeY%2FeJz2EURvJTRFMBFCavaqVssKMnOPocP7PDsjkdAVS18pW04LdDkGObkFR6hc3DsKZ%2B1sbW5rM2PSQu9SFdRMKcPvce0nXD8u5HU39BFPLDf5%2FTtWaXlTYace%2BvlhGmK4QLJRv071Ip7rOPsahslasUd3OoYtO%2B5chy5TZbRBSVrEmhxR1aMAvLMV&X-Amz-Signature=b33fa7dabf18d494868b9484791e7c631a1a753e795aa0dc129f22fd5238b573&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7L75IZB%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T171209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ%2FrxG3dTATikbtvfOBB8FsPp28hhSE7M3rPokADqrlgIhAJi14oda0lmx1aKxC0Z%2BGo1WD8SGnkKq6kq8qT8Ma0jaKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxsbt94bZZM0VOchS0q3APTK%2Bk%2FsrvOHrryAOx1XRdWVVbqzSi7AgwQCywgrYH6WH%2FAPif1uPIOABB%2BZ62lTlUK6Akmk6l7nyCPPi98UwhBN5hSajm%2BruxhVDAYdqIba18L4Zm47RLZudWSQXjcse%2BJPOZgGJp%2F9pwqZ8Oxx0FBR4sls%2BpUAHHsRHZZ0hOJrV6qsd8AZkM9o4HYJplvQQZCXLJki6g%2BUk%2BBmECj3b%2B3f6OnD2b1Pd58p0LNHK2PdYswmzBuHhyfv8e1XTUALMob4T%2Bo4iBoqiVUi0eECjPbI%2B%2B9%2FRJJohncUOdPO3NrGaQMpus0lNFZGhOj%2BU%2BeWSG79SnXlCNFKuPZNp5yFzj9ys615qWlJKSSjoByqn5TfGv7fsxqdwaI1Z2q5kFt%2FAX%2B%2BWF1du7nHHPs3%2FAItaW1fYR0%2BGrjGKj0y%2BC%2FubTmFHXZ96fp%2F849SF0r5EY5owN9SnDd42%2BQnga%2FwqvKuUsim2u9fS5CBiqEbw0DGp0gOJMYihYizkAj1TaknXv6AAqFXzz59a0Q7fyDYKUmFo04a1MU06J%2Bcj7xAat%2FEEJ%2FrGXNLIfiT%2B3lGW3JXrqzggXZON101g6IQbEhWCJz5fLFpa%2BLyuJN7KwxvP7NlhDRRSyD65HeJ3PjmYZkpTCM6PnDBjqkASG7gDxB%2Fw%2FnxWz%2Fur6Xlg0fIGENq1bSJeY%2FeJz2EURvJTRFMBFCavaqVssKMnOPocP7PDsjkdAVS18pW04LdDkGObkFR6hc3DsKZ%2B1sbW5rM2PSQu9SFdRMKcPvce0nXD8u5HU39BFPLDf5%2FTtWaXlTYace%2BvlhGmK4QLJRv071Ip7rOPsahslasUd3OoYtO%2B5chy5TZbRBSVrEmhxR1aMAvLMV&X-Amz-Signature=ef99dfe1d6a1d87f45cc9f6e7f4b48229d10983e8d8e4ea4b0bdc73293829ab2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7L75IZB%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T171209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ%2FrxG3dTATikbtvfOBB8FsPp28hhSE7M3rPokADqrlgIhAJi14oda0lmx1aKxC0Z%2BGo1WD8SGnkKq6kq8qT8Ma0jaKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxsbt94bZZM0VOchS0q3APTK%2Bk%2FsrvOHrryAOx1XRdWVVbqzSi7AgwQCywgrYH6WH%2FAPif1uPIOABB%2BZ62lTlUK6Akmk6l7nyCPPi98UwhBN5hSajm%2BruxhVDAYdqIba18L4Zm47RLZudWSQXjcse%2BJPOZgGJp%2F9pwqZ8Oxx0FBR4sls%2BpUAHHsRHZZ0hOJrV6qsd8AZkM9o4HYJplvQQZCXLJki6g%2BUk%2BBmECj3b%2B3f6OnD2b1Pd58p0LNHK2PdYswmzBuHhyfv8e1XTUALMob4T%2Bo4iBoqiVUi0eECjPbI%2B%2B9%2FRJJohncUOdPO3NrGaQMpus0lNFZGhOj%2BU%2BeWSG79SnXlCNFKuPZNp5yFzj9ys615qWlJKSSjoByqn5TfGv7fsxqdwaI1Z2q5kFt%2FAX%2B%2BWF1du7nHHPs3%2FAItaW1fYR0%2BGrjGKj0y%2BC%2FubTmFHXZ96fp%2F849SF0r5EY5owN9SnDd42%2BQnga%2FwqvKuUsim2u9fS5CBiqEbw0DGp0gOJMYihYizkAj1TaknXv6AAqFXzz59a0Q7fyDYKUmFo04a1MU06J%2Bcj7xAat%2FEEJ%2FrGXNLIfiT%2B3lGW3JXrqzggXZON101g6IQbEhWCJz5fLFpa%2BLyuJN7KwxvP7NlhDRRSyD65HeJ3PjmYZkpTCM6PnDBjqkASG7gDxB%2Fw%2FnxWz%2Fur6Xlg0fIGENq1bSJeY%2FeJz2EURvJTRFMBFCavaqVssKMnOPocP7PDsjkdAVS18pW04LdDkGObkFR6hc3DsKZ%2B1sbW5rM2PSQu9SFdRMKcPvce0nXD8u5HU39BFPLDf5%2FTtWaXlTYace%2BvlhGmK4QLJRv071Ip7rOPsahslasUd3OoYtO%2B5chy5TZbRBSVrEmhxR1aMAvLMV&X-Amz-Signature=181f64a15c28666340ce828e350aa514e972c75529833813578aa977b565a874&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7L75IZB%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T171209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZ%2FrxG3dTATikbtvfOBB8FsPp28hhSE7M3rPokADqrlgIhAJi14oda0lmx1aKxC0Z%2BGo1WD8SGnkKq6kq8qT8Ma0jaKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxsbt94bZZM0VOchS0q3APTK%2Bk%2FsrvOHrryAOx1XRdWVVbqzSi7AgwQCywgrYH6WH%2FAPif1uPIOABB%2BZ62lTlUK6Akmk6l7nyCPPi98UwhBN5hSajm%2BruxhVDAYdqIba18L4Zm47RLZudWSQXjcse%2BJPOZgGJp%2F9pwqZ8Oxx0FBR4sls%2BpUAHHsRHZZ0hOJrV6qsd8AZkM9o4HYJplvQQZCXLJki6g%2BUk%2BBmECj3b%2B3f6OnD2b1Pd58p0LNHK2PdYswmzBuHhyfv8e1XTUALMob4T%2Bo4iBoqiVUi0eECjPbI%2B%2B9%2FRJJohncUOdPO3NrGaQMpus0lNFZGhOj%2BU%2BeWSG79SnXlCNFKuPZNp5yFzj9ys615qWlJKSSjoByqn5TfGv7fsxqdwaI1Z2q5kFt%2FAX%2B%2BWF1du7nHHPs3%2FAItaW1fYR0%2BGrjGKj0y%2BC%2FubTmFHXZ96fp%2F849SF0r5EY5owN9SnDd42%2BQnga%2FwqvKuUsim2u9fS5CBiqEbw0DGp0gOJMYihYizkAj1TaknXv6AAqFXzz59a0Q7fyDYKUmFo04a1MU06J%2Bcj7xAat%2FEEJ%2FrGXNLIfiT%2B3lGW3JXrqzggXZON101g6IQbEhWCJz5fLFpa%2BLyuJN7KwxvP7NlhDRRSyD65HeJ3PjmYZkpTCM6PnDBjqkASG7gDxB%2Fw%2FnxWz%2Fur6Xlg0fIGENq1bSJeY%2FeJz2EURvJTRFMBFCavaqVssKMnOPocP7PDsjkdAVS18pW04LdDkGObkFR6hc3DsKZ%2B1sbW5rM2PSQu9SFdRMKcPvce0nXD8u5HU39BFPLDf5%2FTtWaXlTYace%2BvlhGmK4QLJRv071Ip7rOPsahslasUd3OoYtO%2B5chy5TZbRBSVrEmhxR1aMAvLMV&X-Amz-Signature=b6438d2dd7a61d95f617615f573894460ecbf16eca4506c6c3f3bcb87bdfbdf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
