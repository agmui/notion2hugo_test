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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F5HMXTG%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T004204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHoaBo1qlc1hNlYOeQPCB6u0Pvlmu3J9LSeqnXt%2B3KjAiEA87skUquzSwMk3VX9YLyOZfQxVWj8w4IyNxFC%2BgNw3jgq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDI0BmdnFDIjABrIzhCrcA8TmyZvdSU8ya9%2F5myrco4DM1iXgtmOmSomHKY0TsrZ9Khx52C3Tn4uINYLOoFeLZh34JkQZON5NifVAQGQ%2B2u%2B2CrjX0cOe93mTlgPWJ9mCbu0KJ9lYazuSLc2gp%2B7v35TFV4B0CpH49CgEQR559lbHXLKPKHyzn%2F3IYwARM%2F9VeFdUynRuAaGMBZ5wDSE8n8OGzmet0lRI3S0g5Y5RXVI6cBk7WWdTP2fZCQHEWahicDVldm0SP3DsnKHxN9V5ynzFbsXFNsq6eDBoqHLafxvdfoWr3hbp4RFhYmbMAb%2BDg%2BWfMxRS3GMiK5slGbN1TNIDtbjHX0neYG6aJ0yJkPXhoTEcI7bnxTYgfYHi%2BxYfqMqBo9lppvRVPGF67YeoDnuXXpOnssm2d34iAGFlDPIgZ5Rtl20CRx6oQDNVAjWGlb6fzClBSpiWvVnI2c9b8cTkKFkdwZtU0aCOpNyKPLRdCmf6EXP8RH%2FvIltpandMLZB1xIGiRUE1HaGG4JnyypkcilTw7qqwBRglL2X8%2FuqpQnfJexgdx1HREXL%2FIVIAXbgsP9OZGCSVl137EAUPc3mKBSM9Av9QVBIZvsxXQ%2Bi%2B3eqQIt8o26k0Ygm8hLTy7At7OWfq7KUdy9nnMKSJjsIGOqUBLwhaiq0QDEFW3N5HhvDgZe6wTxeZrrcdkYNXLX7mwUkdF7fFrPRJuY2QIljqBv5FfgoTn3kJz7Wt0P4J0pTLO0hyPERR6n2FMz6oAKjfKkcHYMeZxOq%2BtpVhwXmKN06RWT4%2Fthk7P%2BfZ2Umj28%2Fa7Bkd%2FouqcOxkoyNVJejn3bwuicwjlYUgUObV5V2uAwCLj9pSSRVC4RIQ3%2BN0OkbLbQb7Rw2M&X-Amz-Signature=8b2dffdfe0f3a2a935a3b56335a2733056e746bd3fd22e4f0308771935b5c358&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F5HMXTG%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T004204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHoaBo1qlc1hNlYOeQPCB6u0Pvlmu3J9LSeqnXt%2B3KjAiEA87skUquzSwMk3VX9YLyOZfQxVWj8w4IyNxFC%2BgNw3jgq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDI0BmdnFDIjABrIzhCrcA8TmyZvdSU8ya9%2F5myrco4DM1iXgtmOmSomHKY0TsrZ9Khx52C3Tn4uINYLOoFeLZh34JkQZON5NifVAQGQ%2B2u%2B2CrjX0cOe93mTlgPWJ9mCbu0KJ9lYazuSLc2gp%2B7v35TFV4B0CpH49CgEQR559lbHXLKPKHyzn%2F3IYwARM%2F9VeFdUynRuAaGMBZ5wDSE8n8OGzmet0lRI3S0g5Y5RXVI6cBk7WWdTP2fZCQHEWahicDVldm0SP3DsnKHxN9V5ynzFbsXFNsq6eDBoqHLafxvdfoWr3hbp4RFhYmbMAb%2BDg%2BWfMxRS3GMiK5slGbN1TNIDtbjHX0neYG6aJ0yJkPXhoTEcI7bnxTYgfYHi%2BxYfqMqBo9lppvRVPGF67YeoDnuXXpOnssm2d34iAGFlDPIgZ5Rtl20CRx6oQDNVAjWGlb6fzClBSpiWvVnI2c9b8cTkKFkdwZtU0aCOpNyKPLRdCmf6EXP8RH%2FvIltpandMLZB1xIGiRUE1HaGG4JnyypkcilTw7qqwBRglL2X8%2FuqpQnfJexgdx1HREXL%2FIVIAXbgsP9OZGCSVl137EAUPc3mKBSM9Av9QVBIZvsxXQ%2Bi%2B3eqQIt8o26k0Ygm8hLTy7At7OWfq7KUdy9nnMKSJjsIGOqUBLwhaiq0QDEFW3N5HhvDgZe6wTxeZrrcdkYNXLX7mwUkdF7fFrPRJuY2QIljqBv5FfgoTn3kJz7Wt0P4J0pTLO0hyPERR6n2FMz6oAKjfKkcHYMeZxOq%2BtpVhwXmKN06RWT4%2Fthk7P%2BfZ2Umj28%2Fa7Bkd%2FouqcOxkoyNVJejn3bwuicwjlYUgUObV5V2uAwCLj9pSSRVC4RIQ3%2BN0OkbLbQb7Rw2M&X-Amz-Signature=bb9959614deffefca2b35ccad5410c36a9cc3704e498afd9f49e020453d8f8f4&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F5HMXTG%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T004204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHoaBo1qlc1hNlYOeQPCB6u0Pvlmu3J9LSeqnXt%2B3KjAiEA87skUquzSwMk3VX9YLyOZfQxVWj8w4IyNxFC%2BgNw3jgq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDI0BmdnFDIjABrIzhCrcA8TmyZvdSU8ya9%2F5myrco4DM1iXgtmOmSomHKY0TsrZ9Khx52C3Tn4uINYLOoFeLZh34JkQZON5NifVAQGQ%2B2u%2B2CrjX0cOe93mTlgPWJ9mCbu0KJ9lYazuSLc2gp%2B7v35TFV4B0CpH49CgEQR559lbHXLKPKHyzn%2F3IYwARM%2F9VeFdUynRuAaGMBZ5wDSE8n8OGzmet0lRI3S0g5Y5RXVI6cBk7WWdTP2fZCQHEWahicDVldm0SP3DsnKHxN9V5ynzFbsXFNsq6eDBoqHLafxvdfoWr3hbp4RFhYmbMAb%2BDg%2BWfMxRS3GMiK5slGbN1TNIDtbjHX0neYG6aJ0yJkPXhoTEcI7bnxTYgfYHi%2BxYfqMqBo9lppvRVPGF67YeoDnuXXpOnssm2d34iAGFlDPIgZ5Rtl20CRx6oQDNVAjWGlb6fzClBSpiWvVnI2c9b8cTkKFkdwZtU0aCOpNyKPLRdCmf6EXP8RH%2FvIltpandMLZB1xIGiRUE1HaGG4JnyypkcilTw7qqwBRglL2X8%2FuqpQnfJexgdx1HREXL%2FIVIAXbgsP9OZGCSVl137EAUPc3mKBSM9Av9QVBIZvsxXQ%2Bi%2B3eqQIt8o26k0Ygm8hLTy7At7OWfq7KUdy9nnMKSJjsIGOqUBLwhaiq0QDEFW3N5HhvDgZe6wTxeZrrcdkYNXLX7mwUkdF7fFrPRJuY2QIljqBv5FfgoTn3kJz7Wt0P4J0pTLO0hyPERR6n2FMz6oAKjfKkcHYMeZxOq%2BtpVhwXmKN06RWT4%2Fthk7P%2BfZ2Umj28%2Fa7Bkd%2FouqcOxkoyNVJejn3bwuicwjlYUgUObV5V2uAwCLj9pSSRVC4RIQ3%2BN0OkbLbQb7Rw2M&X-Amz-Signature=c091604a6759dd49f06d3b9c12f3a8cb1c72107cf1118a41bc3d55a7a1752ff1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F5HMXTG%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T004204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHoaBo1qlc1hNlYOeQPCB6u0Pvlmu3J9LSeqnXt%2B3KjAiEA87skUquzSwMk3VX9YLyOZfQxVWj8w4IyNxFC%2BgNw3jgq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDI0BmdnFDIjABrIzhCrcA8TmyZvdSU8ya9%2F5myrco4DM1iXgtmOmSomHKY0TsrZ9Khx52C3Tn4uINYLOoFeLZh34JkQZON5NifVAQGQ%2B2u%2B2CrjX0cOe93mTlgPWJ9mCbu0KJ9lYazuSLc2gp%2B7v35TFV4B0CpH49CgEQR559lbHXLKPKHyzn%2F3IYwARM%2F9VeFdUynRuAaGMBZ5wDSE8n8OGzmet0lRI3S0g5Y5RXVI6cBk7WWdTP2fZCQHEWahicDVldm0SP3DsnKHxN9V5ynzFbsXFNsq6eDBoqHLafxvdfoWr3hbp4RFhYmbMAb%2BDg%2BWfMxRS3GMiK5slGbN1TNIDtbjHX0neYG6aJ0yJkPXhoTEcI7bnxTYgfYHi%2BxYfqMqBo9lppvRVPGF67YeoDnuXXpOnssm2d34iAGFlDPIgZ5Rtl20CRx6oQDNVAjWGlb6fzClBSpiWvVnI2c9b8cTkKFkdwZtU0aCOpNyKPLRdCmf6EXP8RH%2FvIltpandMLZB1xIGiRUE1HaGG4JnyypkcilTw7qqwBRglL2X8%2FuqpQnfJexgdx1HREXL%2FIVIAXbgsP9OZGCSVl137EAUPc3mKBSM9Av9QVBIZvsxXQ%2Bi%2B3eqQIt8o26k0Ygm8hLTy7At7OWfq7KUdy9nnMKSJjsIGOqUBLwhaiq0QDEFW3N5HhvDgZe6wTxeZrrcdkYNXLX7mwUkdF7fFrPRJuY2QIljqBv5FfgoTn3kJz7Wt0P4J0pTLO0hyPERR6n2FMz6oAKjfKkcHYMeZxOq%2BtpVhwXmKN06RWT4%2Fthk7P%2BfZ2Umj28%2Fa7Bkd%2FouqcOxkoyNVJejn3bwuicwjlYUgUObV5V2uAwCLj9pSSRVC4RIQ3%2BN0OkbLbQb7Rw2M&X-Amz-Signature=49a38b73f7b53f1199446b3e1b1c3def8860d1060d72ef77be4c622b555fd444&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F5HMXTG%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T004204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHoaBo1qlc1hNlYOeQPCB6u0Pvlmu3J9LSeqnXt%2B3KjAiEA87skUquzSwMk3VX9YLyOZfQxVWj8w4IyNxFC%2BgNw3jgq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDI0BmdnFDIjABrIzhCrcA8TmyZvdSU8ya9%2F5myrco4DM1iXgtmOmSomHKY0TsrZ9Khx52C3Tn4uINYLOoFeLZh34JkQZON5NifVAQGQ%2B2u%2B2CrjX0cOe93mTlgPWJ9mCbu0KJ9lYazuSLc2gp%2B7v35TFV4B0CpH49CgEQR559lbHXLKPKHyzn%2F3IYwARM%2F9VeFdUynRuAaGMBZ5wDSE8n8OGzmet0lRI3S0g5Y5RXVI6cBk7WWdTP2fZCQHEWahicDVldm0SP3DsnKHxN9V5ynzFbsXFNsq6eDBoqHLafxvdfoWr3hbp4RFhYmbMAb%2BDg%2BWfMxRS3GMiK5slGbN1TNIDtbjHX0neYG6aJ0yJkPXhoTEcI7bnxTYgfYHi%2BxYfqMqBo9lppvRVPGF67YeoDnuXXpOnssm2d34iAGFlDPIgZ5Rtl20CRx6oQDNVAjWGlb6fzClBSpiWvVnI2c9b8cTkKFkdwZtU0aCOpNyKPLRdCmf6EXP8RH%2FvIltpandMLZB1xIGiRUE1HaGG4JnyypkcilTw7qqwBRglL2X8%2FuqpQnfJexgdx1HREXL%2FIVIAXbgsP9OZGCSVl137EAUPc3mKBSM9Av9QVBIZvsxXQ%2Bi%2B3eqQIt8o26k0Ygm8hLTy7At7OWfq7KUdy9nnMKSJjsIGOqUBLwhaiq0QDEFW3N5HhvDgZe6wTxeZrrcdkYNXLX7mwUkdF7fFrPRJuY2QIljqBv5FfgoTn3kJz7Wt0P4J0pTLO0hyPERR6n2FMz6oAKjfKkcHYMeZxOq%2BtpVhwXmKN06RWT4%2Fthk7P%2BfZ2Umj28%2Fa7Bkd%2FouqcOxkoyNVJejn3bwuicwjlYUgUObV5V2uAwCLj9pSSRVC4RIQ3%2BN0OkbLbQb7Rw2M&X-Amz-Signature=3f5b5e3241672ef9fe43d71cd6a3e9324141160f446ccce10dcce423afab32da&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F5HMXTG%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T004204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGHoaBo1qlc1hNlYOeQPCB6u0Pvlmu3J9LSeqnXt%2B3KjAiEA87skUquzSwMk3VX9YLyOZfQxVWj8w4IyNxFC%2BgNw3jgq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDI0BmdnFDIjABrIzhCrcA8TmyZvdSU8ya9%2F5myrco4DM1iXgtmOmSomHKY0TsrZ9Khx52C3Tn4uINYLOoFeLZh34JkQZON5NifVAQGQ%2B2u%2B2CrjX0cOe93mTlgPWJ9mCbu0KJ9lYazuSLc2gp%2B7v35TFV4B0CpH49CgEQR559lbHXLKPKHyzn%2F3IYwARM%2F9VeFdUynRuAaGMBZ5wDSE8n8OGzmet0lRI3S0g5Y5RXVI6cBk7WWdTP2fZCQHEWahicDVldm0SP3DsnKHxN9V5ynzFbsXFNsq6eDBoqHLafxvdfoWr3hbp4RFhYmbMAb%2BDg%2BWfMxRS3GMiK5slGbN1TNIDtbjHX0neYG6aJ0yJkPXhoTEcI7bnxTYgfYHi%2BxYfqMqBo9lppvRVPGF67YeoDnuXXpOnssm2d34iAGFlDPIgZ5Rtl20CRx6oQDNVAjWGlb6fzClBSpiWvVnI2c9b8cTkKFkdwZtU0aCOpNyKPLRdCmf6EXP8RH%2FvIltpandMLZB1xIGiRUE1HaGG4JnyypkcilTw7qqwBRglL2X8%2FuqpQnfJexgdx1HREXL%2FIVIAXbgsP9OZGCSVl137EAUPc3mKBSM9Av9QVBIZvsxXQ%2Bi%2B3eqQIt8o26k0Ygm8hLTy7At7OWfq7KUdy9nnMKSJjsIGOqUBLwhaiq0QDEFW3N5HhvDgZe6wTxeZrrcdkYNXLX7mwUkdF7fFrPRJuY2QIljqBv5FfgoTn3kJz7Wt0P4J0pTLO0hyPERR6n2FMz6oAKjfKkcHYMeZxOq%2BtpVhwXmKN06RWT4%2Fthk7P%2BfZ2Umj28%2Fa7Bkd%2FouqcOxkoyNVJejn3bwuicwjlYUgUObV5V2uAwCLj9pSSRVC4RIQ3%2BN0OkbLbQb7Rw2M&X-Amz-Signature=5016f86d05e7e3247a06eb48d7e00f90a5bc40ec2a8b383b7a9c9900cec46633&X-Amz-SignedHeaders=host&x-id=GetObject)
