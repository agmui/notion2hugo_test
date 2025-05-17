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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOGS4NJT%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI9xlrCQOzflgwGOv6ZioeSQaVusXgXgSNF7aAkyMQKwIgYA0X6vYXst1HY2bDVYodR9iFNMQMXCvMgad7Eqq%2Bf6kq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDC0CwBXUTseetmof3CrcAxh8oZ9CzZLolxlKL8%2Fjyob8rEnzrPgZN7DddX8%2BnVNBnJGVOYsCbX%2FNON%2B5JhxdK2o85QkQHTvuOllogt%2Bywyt%2BIuUjIZ0N%2BqOweZanUntA8O%2FBIvud9TT2CiHrxd2YcWFveEYRayo3xrqndNsaWNG15qOBMa3cKBQtseCe6wyqsPmfuWAhNj6TgqZAQISpcb1pyYsRZzUUAYqWBdFxvYZp%2BED7y0CJAdDBaZO0px5CfrOFU60Gtm65%2FctQGokeoeJcaIOpFRsQnDv9j0%2By5DDP8DuNwnrAnHL33hIoDEa%2FHeaDoxoaz3lNu9jpBe2YxVVPSKGFZeAF4xDtFGhrk4oQzkYy815rDLemC%2B0dItEFl5Qk4mYkKzdItB5Hur0qA8fsDL104qyEDfPSMGTCWPTaHyNdnge%2F7lS4L88wzp%2FciALjiXD3AObl6usx8RfiqdGndfIAKLU2LNdoSx%2BvgngfRLBj9R%2FDn%2FmSiuvclUUrmGRekjRwTXN9ejlPEV3F5Zko1AYqSqsKpqQ3BIH6x8OviAbsoZ1WmZPkJvvjAmCmG70exaCR9xpgmZUZxBzubfyrQGXdPXabu39EzuYfsBlmKw%2FiKIpDpXUf0JaDcduChF4ACpqS5PiCGW23MLqroMEGOqUBd7791Bi8o3FQF3U0DUhuJkEH%2Br%2FQU0Zh0dnXRCOr9eSTulu9iH77NONIM20nPxEa2Z6GeJvgNLk4UtFQ5fU3DELvSwxANWnh%2FbD6kte4%2F7unLQE2niqXJSpFxLoN1PNRQvVK%2BEadL4ANG8oX4g%2FH5CP5VRFZQf7DudJGTRNYDgTggwirdIMrrhwo3GFSjv6dhnVZ6WGQom2eKPI5YZ0Lfbg%2Bx9wz&X-Amz-Signature=1e18c8a4703f14c578e500c69be1d73228f6c5f93a92b0000b477dfbd087631e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOGS4NJT%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI9xlrCQOzflgwGOv6ZioeSQaVusXgXgSNF7aAkyMQKwIgYA0X6vYXst1HY2bDVYodR9iFNMQMXCvMgad7Eqq%2Bf6kq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDC0CwBXUTseetmof3CrcAxh8oZ9CzZLolxlKL8%2Fjyob8rEnzrPgZN7DddX8%2BnVNBnJGVOYsCbX%2FNON%2B5JhxdK2o85QkQHTvuOllogt%2Bywyt%2BIuUjIZ0N%2BqOweZanUntA8O%2FBIvud9TT2CiHrxd2YcWFveEYRayo3xrqndNsaWNG15qOBMa3cKBQtseCe6wyqsPmfuWAhNj6TgqZAQISpcb1pyYsRZzUUAYqWBdFxvYZp%2BED7y0CJAdDBaZO0px5CfrOFU60Gtm65%2FctQGokeoeJcaIOpFRsQnDv9j0%2By5DDP8DuNwnrAnHL33hIoDEa%2FHeaDoxoaz3lNu9jpBe2YxVVPSKGFZeAF4xDtFGhrk4oQzkYy815rDLemC%2B0dItEFl5Qk4mYkKzdItB5Hur0qA8fsDL104qyEDfPSMGTCWPTaHyNdnge%2F7lS4L88wzp%2FciALjiXD3AObl6usx8RfiqdGndfIAKLU2LNdoSx%2BvgngfRLBj9R%2FDn%2FmSiuvclUUrmGRekjRwTXN9ejlPEV3F5Zko1AYqSqsKpqQ3BIH6x8OviAbsoZ1WmZPkJvvjAmCmG70exaCR9xpgmZUZxBzubfyrQGXdPXabu39EzuYfsBlmKw%2FiKIpDpXUf0JaDcduChF4ACpqS5PiCGW23MLqroMEGOqUBd7791Bi8o3FQF3U0DUhuJkEH%2Br%2FQU0Zh0dnXRCOr9eSTulu9iH77NONIM20nPxEa2Z6GeJvgNLk4UtFQ5fU3DELvSwxANWnh%2FbD6kte4%2F7unLQE2niqXJSpFxLoN1PNRQvVK%2BEadL4ANG8oX4g%2FH5CP5VRFZQf7DudJGTRNYDgTggwirdIMrrhwo3GFSjv6dhnVZ6WGQom2eKPI5YZ0Lfbg%2Bx9wz&X-Amz-Signature=3e1a89638090e512aadc0e74a68253cc3e912c0b04e6d60385c426bbeac38a29&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOGS4NJT%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI9xlrCQOzflgwGOv6ZioeSQaVusXgXgSNF7aAkyMQKwIgYA0X6vYXst1HY2bDVYodR9iFNMQMXCvMgad7Eqq%2Bf6kq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDC0CwBXUTseetmof3CrcAxh8oZ9CzZLolxlKL8%2Fjyob8rEnzrPgZN7DddX8%2BnVNBnJGVOYsCbX%2FNON%2B5JhxdK2o85QkQHTvuOllogt%2Bywyt%2BIuUjIZ0N%2BqOweZanUntA8O%2FBIvud9TT2CiHrxd2YcWFveEYRayo3xrqndNsaWNG15qOBMa3cKBQtseCe6wyqsPmfuWAhNj6TgqZAQISpcb1pyYsRZzUUAYqWBdFxvYZp%2BED7y0CJAdDBaZO0px5CfrOFU60Gtm65%2FctQGokeoeJcaIOpFRsQnDv9j0%2By5DDP8DuNwnrAnHL33hIoDEa%2FHeaDoxoaz3lNu9jpBe2YxVVPSKGFZeAF4xDtFGhrk4oQzkYy815rDLemC%2B0dItEFl5Qk4mYkKzdItB5Hur0qA8fsDL104qyEDfPSMGTCWPTaHyNdnge%2F7lS4L88wzp%2FciALjiXD3AObl6usx8RfiqdGndfIAKLU2LNdoSx%2BvgngfRLBj9R%2FDn%2FmSiuvclUUrmGRekjRwTXN9ejlPEV3F5Zko1AYqSqsKpqQ3BIH6x8OviAbsoZ1WmZPkJvvjAmCmG70exaCR9xpgmZUZxBzubfyrQGXdPXabu39EzuYfsBlmKw%2FiKIpDpXUf0JaDcduChF4ACpqS5PiCGW23MLqroMEGOqUBd7791Bi8o3FQF3U0DUhuJkEH%2Br%2FQU0Zh0dnXRCOr9eSTulu9iH77NONIM20nPxEa2Z6GeJvgNLk4UtFQ5fU3DELvSwxANWnh%2FbD6kte4%2F7unLQE2niqXJSpFxLoN1PNRQvVK%2BEadL4ANG8oX4g%2FH5CP5VRFZQf7DudJGTRNYDgTggwirdIMrrhwo3GFSjv6dhnVZ6WGQom2eKPI5YZ0Lfbg%2Bx9wz&X-Amz-Signature=5792485fa1677ca2164e5b90a10f2c703f79a910efa80ac8dddad0ecfe7c7da9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOGS4NJT%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI9xlrCQOzflgwGOv6ZioeSQaVusXgXgSNF7aAkyMQKwIgYA0X6vYXst1HY2bDVYodR9iFNMQMXCvMgad7Eqq%2Bf6kq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDC0CwBXUTseetmof3CrcAxh8oZ9CzZLolxlKL8%2Fjyob8rEnzrPgZN7DddX8%2BnVNBnJGVOYsCbX%2FNON%2B5JhxdK2o85QkQHTvuOllogt%2Bywyt%2BIuUjIZ0N%2BqOweZanUntA8O%2FBIvud9TT2CiHrxd2YcWFveEYRayo3xrqndNsaWNG15qOBMa3cKBQtseCe6wyqsPmfuWAhNj6TgqZAQISpcb1pyYsRZzUUAYqWBdFxvYZp%2BED7y0CJAdDBaZO0px5CfrOFU60Gtm65%2FctQGokeoeJcaIOpFRsQnDv9j0%2By5DDP8DuNwnrAnHL33hIoDEa%2FHeaDoxoaz3lNu9jpBe2YxVVPSKGFZeAF4xDtFGhrk4oQzkYy815rDLemC%2B0dItEFl5Qk4mYkKzdItB5Hur0qA8fsDL104qyEDfPSMGTCWPTaHyNdnge%2F7lS4L88wzp%2FciALjiXD3AObl6usx8RfiqdGndfIAKLU2LNdoSx%2BvgngfRLBj9R%2FDn%2FmSiuvclUUrmGRekjRwTXN9ejlPEV3F5Zko1AYqSqsKpqQ3BIH6x8OviAbsoZ1WmZPkJvvjAmCmG70exaCR9xpgmZUZxBzubfyrQGXdPXabu39EzuYfsBlmKw%2FiKIpDpXUf0JaDcduChF4ACpqS5PiCGW23MLqroMEGOqUBd7791Bi8o3FQF3U0DUhuJkEH%2Br%2FQU0Zh0dnXRCOr9eSTulu9iH77NONIM20nPxEa2Z6GeJvgNLk4UtFQ5fU3DELvSwxANWnh%2FbD6kte4%2F7unLQE2niqXJSpFxLoN1PNRQvVK%2BEadL4ANG8oX4g%2FH5CP5VRFZQf7DudJGTRNYDgTggwirdIMrrhwo3GFSjv6dhnVZ6WGQom2eKPI5YZ0Lfbg%2Bx9wz&X-Amz-Signature=3d2b0567c3c5757e5a969b4b1fb66b9bb875b6bf9d3565e78136139f76189726&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOGS4NJT%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI9xlrCQOzflgwGOv6ZioeSQaVusXgXgSNF7aAkyMQKwIgYA0X6vYXst1HY2bDVYodR9iFNMQMXCvMgad7Eqq%2Bf6kq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDC0CwBXUTseetmof3CrcAxh8oZ9CzZLolxlKL8%2Fjyob8rEnzrPgZN7DddX8%2BnVNBnJGVOYsCbX%2FNON%2B5JhxdK2o85QkQHTvuOllogt%2Bywyt%2BIuUjIZ0N%2BqOweZanUntA8O%2FBIvud9TT2CiHrxd2YcWFveEYRayo3xrqndNsaWNG15qOBMa3cKBQtseCe6wyqsPmfuWAhNj6TgqZAQISpcb1pyYsRZzUUAYqWBdFxvYZp%2BED7y0CJAdDBaZO0px5CfrOFU60Gtm65%2FctQGokeoeJcaIOpFRsQnDv9j0%2By5DDP8DuNwnrAnHL33hIoDEa%2FHeaDoxoaz3lNu9jpBe2YxVVPSKGFZeAF4xDtFGhrk4oQzkYy815rDLemC%2B0dItEFl5Qk4mYkKzdItB5Hur0qA8fsDL104qyEDfPSMGTCWPTaHyNdnge%2F7lS4L88wzp%2FciALjiXD3AObl6usx8RfiqdGndfIAKLU2LNdoSx%2BvgngfRLBj9R%2FDn%2FmSiuvclUUrmGRekjRwTXN9ejlPEV3F5Zko1AYqSqsKpqQ3BIH6x8OviAbsoZ1WmZPkJvvjAmCmG70exaCR9xpgmZUZxBzubfyrQGXdPXabu39EzuYfsBlmKw%2FiKIpDpXUf0JaDcduChF4ACpqS5PiCGW23MLqroMEGOqUBd7791Bi8o3FQF3U0DUhuJkEH%2Br%2FQU0Zh0dnXRCOr9eSTulu9iH77NONIM20nPxEa2Z6GeJvgNLk4UtFQ5fU3DELvSwxANWnh%2FbD6kte4%2F7unLQE2niqXJSpFxLoN1PNRQvVK%2BEadL4ANG8oX4g%2FH5CP5VRFZQf7DudJGTRNYDgTggwirdIMrrhwo3GFSjv6dhnVZ6WGQom2eKPI5YZ0Lfbg%2Bx9wz&X-Amz-Signature=c9613dd17e49a38c2f022dc1c558c5813ada11add0e722913178fbfc6a5993ab&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOGS4NJT%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T050829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI9xlrCQOzflgwGOv6ZioeSQaVusXgXgSNF7aAkyMQKwIgYA0X6vYXst1HY2bDVYodR9iFNMQMXCvMgad7Eqq%2Bf6kq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDC0CwBXUTseetmof3CrcAxh8oZ9CzZLolxlKL8%2Fjyob8rEnzrPgZN7DddX8%2BnVNBnJGVOYsCbX%2FNON%2B5JhxdK2o85QkQHTvuOllogt%2Bywyt%2BIuUjIZ0N%2BqOweZanUntA8O%2FBIvud9TT2CiHrxd2YcWFveEYRayo3xrqndNsaWNG15qOBMa3cKBQtseCe6wyqsPmfuWAhNj6TgqZAQISpcb1pyYsRZzUUAYqWBdFxvYZp%2BED7y0CJAdDBaZO0px5CfrOFU60Gtm65%2FctQGokeoeJcaIOpFRsQnDv9j0%2By5DDP8DuNwnrAnHL33hIoDEa%2FHeaDoxoaz3lNu9jpBe2YxVVPSKGFZeAF4xDtFGhrk4oQzkYy815rDLemC%2B0dItEFl5Qk4mYkKzdItB5Hur0qA8fsDL104qyEDfPSMGTCWPTaHyNdnge%2F7lS4L88wzp%2FciALjiXD3AObl6usx8RfiqdGndfIAKLU2LNdoSx%2BvgngfRLBj9R%2FDn%2FmSiuvclUUrmGRekjRwTXN9ejlPEV3F5Zko1AYqSqsKpqQ3BIH6x8OviAbsoZ1WmZPkJvvjAmCmG70exaCR9xpgmZUZxBzubfyrQGXdPXabu39EzuYfsBlmKw%2FiKIpDpXUf0JaDcduChF4ACpqS5PiCGW23MLqroMEGOqUBd7791Bi8o3FQF3U0DUhuJkEH%2Br%2FQU0Zh0dnXRCOr9eSTulu9iH77NONIM20nPxEa2Z6GeJvgNLk4UtFQ5fU3DELvSwxANWnh%2FbD6kte4%2F7unLQE2niqXJSpFxLoN1PNRQvVK%2BEadL4ANG8oX4g%2FH5CP5VRFZQf7DudJGTRNYDgTggwirdIMrrhwo3GFSjv6dhnVZ6WGQom2eKPI5YZ0Lfbg%2Bx9wz&X-Amz-Signature=b7d6ecf82770c538848b4502656cdf67a5f36792b3a240e89d2d98955dab9c90&X-Amz-SignedHeaders=host&x-id=GetObject)
