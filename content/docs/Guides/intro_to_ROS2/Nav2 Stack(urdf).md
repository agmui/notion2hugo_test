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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662522YTO3%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgoJnQVmlA6zjQFnlCCR8spOxEjnqGxADIgFh9mp0dMAiEA%2FoKVrLQwVl%2FDI%2F46sxPjl9An19nlhG%2FnVfikt45pUUoq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDJolYpVlarGkJg7y%2FircA3geod971E0Is2M3sVoInarfhIMH0F%2BBzaKR2rKt%2FQ%2FGT8kfTbdQL3sklbzxZkcJAhWm%2B6mtyvU8N4yJTvYAjunpw4iLqzs51RDq8wCSVjzxVWzURA7awNfFfahZKXysmjRcr3oFDBG0rnerpXtxjsn%2FVSlbwFRtxO7SMrR2y7HCPIKJthXvaCzGsbEmRwi7rCI8gp2Bjr6rD%2F8F%2F9WcQK3peLJICdD8QcnV1ktJrKCBrkmw0%2F7cj2oBucsb2%2Fum%2F3R2y3Cd%2Frvz9bEzhvYM9GhAYdYra9Av%2FTDgFUfjHEoYSu1lEr1K0pjLboyAHl5j7D%2F%2BDhqCRZ2VkkqYlP0qOfxaNQYOCK8201mbsbzTPDF9o%2FtcCc4g5Uh2TcpcmaIR%2FeHFJQ2pp36MLOPklQ5xAzWUgWP%2FYy93R4dbnlZKrrbg8E44aoLB6llCxb3E4tEDfxiPssFupY8iL%2BZPM3EtqJRA6qBpMPM3wul72ZIhtuRgJCR0Legfu98IjUxJwxhPqv0QFUkYiPIMdbFtJAzjS%2FtRfcydfgyzuOgqWu10CmBgBr%2BpSmvoRcTwPPycsdThczPShRqXRrSRa%2B34H8xO1pzzSIMG7VTZQlbqOr%2B4IfXM3nw5m7HsQw2zGH6bMKSMuMAGOqUBMLOMOAmiMnYipIxWo8j7SLaA5vw6sVRYQ9yLHz2gY6uUSPTWbXsht6bifbGzoqAfsrasa8ode0pqtyp%2BlbcsPrgSKGOf0KW1Kms%2BYdLXLSNuG3KfMGY9gSadPtCLx1cII4o9C%2FAsu8Oq5xc5NVU5yNg1oOP4CHWQEWZ1I5%2FViwGeb1S9veDiqGirK%2BTgMmSBdYkyO%2BzIlnwrC2mdb40xuX6SmBZK&X-Amz-Signature=d22fe49ff9fc355ee7960f4a208104feeadc501f3aa452abc2e3ac1eae01f0fe&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662522YTO3%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgoJnQVmlA6zjQFnlCCR8spOxEjnqGxADIgFh9mp0dMAiEA%2FoKVrLQwVl%2FDI%2F46sxPjl9An19nlhG%2FnVfikt45pUUoq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDJolYpVlarGkJg7y%2FircA3geod971E0Is2M3sVoInarfhIMH0F%2BBzaKR2rKt%2FQ%2FGT8kfTbdQL3sklbzxZkcJAhWm%2B6mtyvU8N4yJTvYAjunpw4iLqzs51RDq8wCSVjzxVWzURA7awNfFfahZKXysmjRcr3oFDBG0rnerpXtxjsn%2FVSlbwFRtxO7SMrR2y7HCPIKJthXvaCzGsbEmRwi7rCI8gp2Bjr6rD%2F8F%2F9WcQK3peLJICdD8QcnV1ktJrKCBrkmw0%2F7cj2oBucsb2%2Fum%2F3R2y3Cd%2Frvz9bEzhvYM9GhAYdYra9Av%2FTDgFUfjHEoYSu1lEr1K0pjLboyAHl5j7D%2F%2BDhqCRZ2VkkqYlP0qOfxaNQYOCK8201mbsbzTPDF9o%2FtcCc4g5Uh2TcpcmaIR%2FeHFJQ2pp36MLOPklQ5xAzWUgWP%2FYy93R4dbnlZKrrbg8E44aoLB6llCxb3E4tEDfxiPssFupY8iL%2BZPM3EtqJRA6qBpMPM3wul72ZIhtuRgJCR0Legfu98IjUxJwxhPqv0QFUkYiPIMdbFtJAzjS%2FtRfcydfgyzuOgqWu10CmBgBr%2BpSmvoRcTwPPycsdThczPShRqXRrSRa%2B34H8xO1pzzSIMG7VTZQlbqOr%2B4IfXM3nw5m7HsQw2zGH6bMKSMuMAGOqUBMLOMOAmiMnYipIxWo8j7SLaA5vw6sVRYQ9yLHz2gY6uUSPTWbXsht6bifbGzoqAfsrasa8ode0pqtyp%2BlbcsPrgSKGOf0KW1Kms%2BYdLXLSNuG3KfMGY9gSadPtCLx1cII4o9C%2FAsu8Oq5xc5NVU5yNg1oOP4CHWQEWZ1I5%2FViwGeb1S9veDiqGirK%2BTgMmSBdYkyO%2BzIlnwrC2mdb40xuX6SmBZK&X-Amz-Signature=19eee9d6ee3ded9613ad7597e40ba3b0d1258ecbece72cfc764d93b973031585&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662522YTO3%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgoJnQVmlA6zjQFnlCCR8spOxEjnqGxADIgFh9mp0dMAiEA%2FoKVrLQwVl%2FDI%2F46sxPjl9An19nlhG%2FnVfikt45pUUoq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDJolYpVlarGkJg7y%2FircA3geod971E0Is2M3sVoInarfhIMH0F%2BBzaKR2rKt%2FQ%2FGT8kfTbdQL3sklbzxZkcJAhWm%2B6mtyvU8N4yJTvYAjunpw4iLqzs51RDq8wCSVjzxVWzURA7awNfFfahZKXysmjRcr3oFDBG0rnerpXtxjsn%2FVSlbwFRtxO7SMrR2y7HCPIKJthXvaCzGsbEmRwi7rCI8gp2Bjr6rD%2F8F%2F9WcQK3peLJICdD8QcnV1ktJrKCBrkmw0%2F7cj2oBucsb2%2Fum%2F3R2y3Cd%2Frvz9bEzhvYM9GhAYdYra9Av%2FTDgFUfjHEoYSu1lEr1K0pjLboyAHl5j7D%2F%2BDhqCRZ2VkkqYlP0qOfxaNQYOCK8201mbsbzTPDF9o%2FtcCc4g5Uh2TcpcmaIR%2FeHFJQ2pp36MLOPklQ5xAzWUgWP%2FYy93R4dbnlZKrrbg8E44aoLB6llCxb3E4tEDfxiPssFupY8iL%2BZPM3EtqJRA6qBpMPM3wul72ZIhtuRgJCR0Legfu98IjUxJwxhPqv0QFUkYiPIMdbFtJAzjS%2FtRfcydfgyzuOgqWu10CmBgBr%2BpSmvoRcTwPPycsdThczPShRqXRrSRa%2B34H8xO1pzzSIMG7VTZQlbqOr%2B4IfXM3nw5m7HsQw2zGH6bMKSMuMAGOqUBMLOMOAmiMnYipIxWo8j7SLaA5vw6sVRYQ9yLHz2gY6uUSPTWbXsht6bifbGzoqAfsrasa8ode0pqtyp%2BlbcsPrgSKGOf0KW1Kms%2BYdLXLSNuG3KfMGY9gSadPtCLx1cII4o9C%2FAsu8Oq5xc5NVU5yNg1oOP4CHWQEWZ1I5%2FViwGeb1S9veDiqGirK%2BTgMmSBdYkyO%2BzIlnwrC2mdb40xuX6SmBZK&X-Amz-Signature=86d0ba6a313027cbfd121590788109073895945fe4bac06d4039208aa8bbbe25&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662522YTO3%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgoJnQVmlA6zjQFnlCCR8spOxEjnqGxADIgFh9mp0dMAiEA%2FoKVrLQwVl%2FDI%2F46sxPjl9An19nlhG%2FnVfikt45pUUoq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDJolYpVlarGkJg7y%2FircA3geod971E0Is2M3sVoInarfhIMH0F%2BBzaKR2rKt%2FQ%2FGT8kfTbdQL3sklbzxZkcJAhWm%2B6mtyvU8N4yJTvYAjunpw4iLqzs51RDq8wCSVjzxVWzURA7awNfFfahZKXysmjRcr3oFDBG0rnerpXtxjsn%2FVSlbwFRtxO7SMrR2y7HCPIKJthXvaCzGsbEmRwi7rCI8gp2Bjr6rD%2F8F%2F9WcQK3peLJICdD8QcnV1ktJrKCBrkmw0%2F7cj2oBucsb2%2Fum%2F3R2y3Cd%2Frvz9bEzhvYM9GhAYdYra9Av%2FTDgFUfjHEoYSu1lEr1K0pjLboyAHl5j7D%2F%2BDhqCRZ2VkkqYlP0qOfxaNQYOCK8201mbsbzTPDF9o%2FtcCc4g5Uh2TcpcmaIR%2FeHFJQ2pp36MLOPklQ5xAzWUgWP%2FYy93R4dbnlZKrrbg8E44aoLB6llCxb3E4tEDfxiPssFupY8iL%2BZPM3EtqJRA6qBpMPM3wul72ZIhtuRgJCR0Legfu98IjUxJwxhPqv0QFUkYiPIMdbFtJAzjS%2FtRfcydfgyzuOgqWu10CmBgBr%2BpSmvoRcTwPPycsdThczPShRqXRrSRa%2B34H8xO1pzzSIMG7VTZQlbqOr%2B4IfXM3nw5m7HsQw2zGH6bMKSMuMAGOqUBMLOMOAmiMnYipIxWo8j7SLaA5vw6sVRYQ9yLHz2gY6uUSPTWbXsht6bifbGzoqAfsrasa8ode0pqtyp%2BlbcsPrgSKGOf0KW1Kms%2BYdLXLSNuG3KfMGY9gSadPtCLx1cII4o9C%2FAsu8Oq5xc5NVU5yNg1oOP4CHWQEWZ1I5%2FViwGeb1S9veDiqGirK%2BTgMmSBdYkyO%2BzIlnwrC2mdb40xuX6SmBZK&X-Amz-Signature=d087fd7f16ba1684bd58b7e7785ab1babe5b2fc9f95f2093f954f2be5448a403&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662522YTO3%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgoJnQVmlA6zjQFnlCCR8spOxEjnqGxADIgFh9mp0dMAiEA%2FoKVrLQwVl%2FDI%2F46sxPjl9An19nlhG%2FnVfikt45pUUoq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDJolYpVlarGkJg7y%2FircA3geod971E0Is2M3sVoInarfhIMH0F%2BBzaKR2rKt%2FQ%2FGT8kfTbdQL3sklbzxZkcJAhWm%2B6mtyvU8N4yJTvYAjunpw4iLqzs51RDq8wCSVjzxVWzURA7awNfFfahZKXysmjRcr3oFDBG0rnerpXtxjsn%2FVSlbwFRtxO7SMrR2y7HCPIKJthXvaCzGsbEmRwi7rCI8gp2Bjr6rD%2F8F%2F9WcQK3peLJICdD8QcnV1ktJrKCBrkmw0%2F7cj2oBucsb2%2Fum%2F3R2y3Cd%2Frvz9bEzhvYM9GhAYdYra9Av%2FTDgFUfjHEoYSu1lEr1K0pjLboyAHl5j7D%2F%2BDhqCRZ2VkkqYlP0qOfxaNQYOCK8201mbsbzTPDF9o%2FtcCc4g5Uh2TcpcmaIR%2FeHFJQ2pp36MLOPklQ5xAzWUgWP%2FYy93R4dbnlZKrrbg8E44aoLB6llCxb3E4tEDfxiPssFupY8iL%2BZPM3EtqJRA6qBpMPM3wul72ZIhtuRgJCR0Legfu98IjUxJwxhPqv0QFUkYiPIMdbFtJAzjS%2FtRfcydfgyzuOgqWu10CmBgBr%2BpSmvoRcTwPPycsdThczPShRqXRrSRa%2B34H8xO1pzzSIMG7VTZQlbqOr%2B4IfXM3nw5m7HsQw2zGH6bMKSMuMAGOqUBMLOMOAmiMnYipIxWo8j7SLaA5vw6sVRYQ9yLHz2gY6uUSPTWbXsht6bifbGzoqAfsrasa8ode0pqtyp%2BlbcsPrgSKGOf0KW1Kms%2BYdLXLSNuG3KfMGY9gSadPtCLx1cII4o9C%2FAsu8Oq5xc5NVU5yNg1oOP4CHWQEWZ1I5%2FViwGeb1S9veDiqGirK%2BTgMmSBdYkyO%2BzIlnwrC2mdb40xuX6SmBZK&X-Amz-Signature=c5e699c116639906d22c50946f170d6f97b0d519fe529d0af7039005a2172bb7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662522YTO3%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgoJnQVmlA6zjQFnlCCR8spOxEjnqGxADIgFh9mp0dMAiEA%2FoKVrLQwVl%2FDI%2F46sxPjl9An19nlhG%2FnVfikt45pUUoq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDJolYpVlarGkJg7y%2FircA3geod971E0Is2M3sVoInarfhIMH0F%2BBzaKR2rKt%2FQ%2FGT8kfTbdQL3sklbzxZkcJAhWm%2B6mtyvU8N4yJTvYAjunpw4iLqzs51RDq8wCSVjzxVWzURA7awNfFfahZKXysmjRcr3oFDBG0rnerpXtxjsn%2FVSlbwFRtxO7SMrR2y7HCPIKJthXvaCzGsbEmRwi7rCI8gp2Bjr6rD%2F8F%2F9WcQK3peLJICdD8QcnV1ktJrKCBrkmw0%2F7cj2oBucsb2%2Fum%2F3R2y3Cd%2Frvz9bEzhvYM9GhAYdYra9Av%2FTDgFUfjHEoYSu1lEr1K0pjLboyAHl5j7D%2F%2BDhqCRZ2VkkqYlP0qOfxaNQYOCK8201mbsbzTPDF9o%2FtcCc4g5Uh2TcpcmaIR%2FeHFJQ2pp36MLOPklQ5xAzWUgWP%2FYy93R4dbnlZKrrbg8E44aoLB6llCxb3E4tEDfxiPssFupY8iL%2BZPM3EtqJRA6qBpMPM3wul72ZIhtuRgJCR0Legfu98IjUxJwxhPqv0QFUkYiPIMdbFtJAzjS%2FtRfcydfgyzuOgqWu10CmBgBr%2BpSmvoRcTwPPycsdThczPShRqXRrSRa%2B34H8xO1pzzSIMG7VTZQlbqOr%2B4IfXM3nw5m7HsQw2zGH6bMKSMuMAGOqUBMLOMOAmiMnYipIxWo8j7SLaA5vw6sVRYQ9yLHz2gY6uUSPTWbXsht6bifbGzoqAfsrasa8ode0pqtyp%2BlbcsPrgSKGOf0KW1Kms%2BYdLXLSNuG3KfMGY9gSadPtCLx1cII4o9C%2FAsu8Oq5xc5NVU5yNg1oOP4CHWQEWZ1I5%2FViwGeb1S9veDiqGirK%2BTgMmSBdYkyO%2BzIlnwrC2mdb40xuX6SmBZK&X-Amz-Signature=a3f07416e8139dcde51a3474057398e269e5eb242c41642b0660aab427f3f473&X-Amz-SignedHeaders=host&x-id=GetObject)
