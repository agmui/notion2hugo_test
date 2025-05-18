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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPJBCEAM%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqVvCks788Wu5K%2B5dJ79zNqxAW0RgS7fN1kxilssLnmAiEAriL9NrzxlpBhr5Je8yj3vsT0hVzIdYh1WGEpUII9M04q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDDSCVVFtW8lOn8wk1SrcA8p8mvMhsjOxR3ZySFFBQUale1SzmZOI%2Bxy7bmp%2Bz9sWzF4nLzqDlHwxWfjoxtixPgx6eruZYb62N3X37Q1O6X90xPQiMsozAPWai8%2BLaXoITcTaHobC5c%2BZqzM0argI0Cxa6HD0tNWiQw9Zgd67tCd9OizZxlHpDRc83dHRVKBXsijlU84w02kZDdqTAolMyPiWoRiLS3J1iti3HyQe5PqfSZY5mH5yqd0koJ1htpXSq69kpOBOT6PmqznC6346VPalJ%2BY%2Fn3e01wv768pOjYn92LGi%2FMkkwnOi4flLJfuLW%2FY23JEFX9HAUzNNQG%2BKRA8U16DBvATjc8bcsRzIRJ7I7czJhvykFIY5RCDmpY14Qo90NLL8xDQiYt5XAtgIID9akr%2FjYdhB1maQ67xRtN%2B2gI%2FLhrtjHvMxRB%2Bd%2Fbts8rxIWrNKR7o3Yein3w9mT3NKyx7q0wNM0wAnmHrt8eUHTSwmbMJq3KesLDkfPWxZWPo66Q48kt0lZUhwMOiWubnBzWhdh4FxRH4COpOzAfCKTTEczkC2%2FUNeX3XFdpYnK8ETE%2F0ouBZLRgN0%2FmK7CsPHpnFXhn%2FOgYRJAwgx6jKjR9d7z8smGfBCpWlh5Ms8XEfDnWi7eW%2BDxGc6MOnmqMEGOqUBgftHF0u1DAgZs6f7BddmI23pduDjeMC1OMeTTE%2FmL8A16qU0EPeUZIbBdTlB1yheauPjwXUUvs7KEXqc51Ky1aniJ1VO90%2BgTNN%2BGdPMNTaLzHxatQtSmqSZqdCfR%2FVMXNLZP08x%2F2HqsRqBRcfTnu07m9zSVn7sH6qnhT8hVg48Hv55kCT53CrxeldF806Lxu0qdOQRsIW7GPL7NI3yiUQaOpzK&X-Amz-Signature=26b579a007f7af8eb794d4629843220436c860093c2a4592853b0d969ea7f506&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPJBCEAM%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqVvCks788Wu5K%2B5dJ79zNqxAW0RgS7fN1kxilssLnmAiEAriL9NrzxlpBhr5Je8yj3vsT0hVzIdYh1WGEpUII9M04q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDDSCVVFtW8lOn8wk1SrcA8p8mvMhsjOxR3ZySFFBQUale1SzmZOI%2Bxy7bmp%2Bz9sWzF4nLzqDlHwxWfjoxtixPgx6eruZYb62N3X37Q1O6X90xPQiMsozAPWai8%2BLaXoITcTaHobC5c%2BZqzM0argI0Cxa6HD0tNWiQw9Zgd67tCd9OizZxlHpDRc83dHRVKBXsijlU84w02kZDdqTAolMyPiWoRiLS3J1iti3HyQe5PqfSZY5mH5yqd0koJ1htpXSq69kpOBOT6PmqznC6346VPalJ%2BY%2Fn3e01wv768pOjYn92LGi%2FMkkwnOi4flLJfuLW%2FY23JEFX9HAUzNNQG%2BKRA8U16DBvATjc8bcsRzIRJ7I7czJhvykFIY5RCDmpY14Qo90NLL8xDQiYt5XAtgIID9akr%2FjYdhB1maQ67xRtN%2B2gI%2FLhrtjHvMxRB%2Bd%2Fbts8rxIWrNKR7o3Yein3w9mT3NKyx7q0wNM0wAnmHrt8eUHTSwmbMJq3KesLDkfPWxZWPo66Q48kt0lZUhwMOiWubnBzWhdh4FxRH4COpOzAfCKTTEczkC2%2FUNeX3XFdpYnK8ETE%2F0ouBZLRgN0%2FmK7CsPHpnFXhn%2FOgYRJAwgx6jKjR9d7z8smGfBCpWlh5Ms8XEfDnWi7eW%2BDxGc6MOnmqMEGOqUBgftHF0u1DAgZs6f7BddmI23pduDjeMC1OMeTTE%2FmL8A16qU0EPeUZIbBdTlB1yheauPjwXUUvs7KEXqc51Ky1aniJ1VO90%2BgTNN%2BGdPMNTaLzHxatQtSmqSZqdCfR%2FVMXNLZP08x%2F2HqsRqBRcfTnu07m9zSVn7sH6qnhT8hVg48Hv55kCT53CrxeldF806Lxu0qdOQRsIW7GPL7NI3yiUQaOpzK&X-Amz-Signature=11650b41d428b17f56ceef76bd1b0a51d1dcfef1d57b3cfa12a07817fac87ade&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPJBCEAM%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqVvCks788Wu5K%2B5dJ79zNqxAW0RgS7fN1kxilssLnmAiEAriL9NrzxlpBhr5Je8yj3vsT0hVzIdYh1WGEpUII9M04q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDDSCVVFtW8lOn8wk1SrcA8p8mvMhsjOxR3ZySFFBQUale1SzmZOI%2Bxy7bmp%2Bz9sWzF4nLzqDlHwxWfjoxtixPgx6eruZYb62N3X37Q1O6X90xPQiMsozAPWai8%2BLaXoITcTaHobC5c%2BZqzM0argI0Cxa6HD0tNWiQw9Zgd67tCd9OizZxlHpDRc83dHRVKBXsijlU84w02kZDdqTAolMyPiWoRiLS3J1iti3HyQe5PqfSZY5mH5yqd0koJ1htpXSq69kpOBOT6PmqznC6346VPalJ%2BY%2Fn3e01wv768pOjYn92LGi%2FMkkwnOi4flLJfuLW%2FY23JEFX9HAUzNNQG%2BKRA8U16DBvATjc8bcsRzIRJ7I7czJhvykFIY5RCDmpY14Qo90NLL8xDQiYt5XAtgIID9akr%2FjYdhB1maQ67xRtN%2B2gI%2FLhrtjHvMxRB%2Bd%2Fbts8rxIWrNKR7o3Yein3w9mT3NKyx7q0wNM0wAnmHrt8eUHTSwmbMJq3KesLDkfPWxZWPo66Q48kt0lZUhwMOiWubnBzWhdh4FxRH4COpOzAfCKTTEczkC2%2FUNeX3XFdpYnK8ETE%2F0ouBZLRgN0%2FmK7CsPHpnFXhn%2FOgYRJAwgx6jKjR9d7z8smGfBCpWlh5Ms8XEfDnWi7eW%2BDxGc6MOnmqMEGOqUBgftHF0u1DAgZs6f7BddmI23pduDjeMC1OMeTTE%2FmL8A16qU0EPeUZIbBdTlB1yheauPjwXUUvs7KEXqc51Ky1aniJ1VO90%2BgTNN%2BGdPMNTaLzHxatQtSmqSZqdCfR%2FVMXNLZP08x%2F2HqsRqBRcfTnu07m9zSVn7sH6qnhT8hVg48Hv55kCT53CrxeldF806Lxu0qdOQRsIW7GPL7NI3yiUQaOpzK&X-Amz-Signature=b99c33b97076681fe6909a52cbd673029a8112d00f53b6056302e3091b903ae4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPJBCEAM%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqVvCks788Wu5K%2B5dJ79zNqxAW0RgS7fN1kxilssLnmAiEAriL9NrzxlpBhr5Je8yj3vsT0hVzIdYh1WGEpUII9M04q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDDSCVVFtW8lOn8wk1SrcA8p8mvMhsjOxR3ZySFFBQUale1SzmZOI%2Bxy7bmp%2Bz9sWzF4nLzqDlHwxWfjoxtixPgx6eruZYb62N3X37Q1O6X90xPQiMsozAPWai8%2BLaXoITcTaHobC5c%2BZqzM0argI0Cxa6HD0tNWiQw9Zgd67tCd9OizZxlHpDRc83dHRVKBXsijlU84w02kZDdqTAolMyPiWoRiLS3J1iti3HyQe5PqfSZY5mH5yqd0koJ1htpXSq69kpOBOT6PmqznC6346VPalJ%2BY%2Fn3e01wv768pOjYn92LGi%2FMkkwnOi4flLJfuLW%2FY23JEFX9HAUzNNQG%2BKRA8U16DBvATjc8bcsRzIRJ7I7czJhvykFIY5RCDmpY14Qo90NLL8xDQiYt5XAtgIID9akr%2FjYdhB1maQ67xRtN%2B2gI%2FLhrtjHvMxRB%2Bd%2Fbts8rxIWrNKR7o3Yein3w9mT3NKyx7q0wNM0wAnmHrt8eUHTSwmbMJq3KesLDkfPWxZWPo66Q48kt0lZUhwMOiWubnBzWhdh4FxRH4COpOzAfCKTTEczkC2%2FUNeX3XFdpYnK8ETE%2F0ouBZLRgN0%2FmK7CsPHpnFXhn%2FOgYRJAwgx6jKjR9d7z8smGfBCpWlh5Ms8XEfDnWi7eW%2BDxGc6MOnmqMEGOqUBgftHF0u1DAgZs6f7BddmI23pduDjeMC1OMeTTE%2FmL8A16qU0EPeUZIbBdTlB1yheauPjwXUUvs7KEXqc51Ky1aniJ1VO90%2BgTNN%2BGdPMNTaLzHxatQtSmqSZqdCfR%2FVMXNLZP08x%2F2HqsRqBRcfTnu07m9zSVn7sH6qnhT8hVg48Hv55kCT53CrxeldF806Lxu0qdOQRsIW7GPL7NI3yiUQaOpzK&X-Amz-Signature=4c4bb3477a24d14cb465af19d3809a239a7b44703196d4149ffb88cf6eca35e1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPJBCEAM%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqVvCks788Wu5K%2B5dJ79zNqxAW0RgS7fN1kxilssLnmAiEAriL9NrzxlpBhr5Je8yj3vsT0hVzIdYh1WGEpUII9M04q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDDSCVVFtW8lOn8wk1SrcA8p8mvMhsjOxR3ZySFFBQUale1SzmZOI%2Bxy7bmp%2Bz9sWzF4nLzqDlHwxWfjoxtixPgx6eruZYb62N3X37Q1O6X90xPQiMsozAPWai8%2BLaXoITcTaHobC5c%2BZqzM0argI0Cxa6HD0tNWiQw9Zgd67tCd9OizZxlHpDRc83dHRVKBXsijlU84w02kZDdqTAolMyPiWoRiLS3J1iti3HyQe5PqfSZY5mH5yqd0koJ1htpXSq69kpOBOT6PmqznC6346VPalJ%2BY%2Fn3e01wv768pOjYn92LGi%2FMkkwnOi4flLJfuLW%2FY23JEFX9HAUzNNQG%2BKRA8U16DBvATjc8bcsRzIRJ7I7czJhvykFIY5RCDmpY14Qo90NLL8xDQiYt5XAtgIID9akr%2FjYdhB1maQ67xRtN%2B2gI%2FLhrtjHvMxRB%2Bd%2Fbts8rxIWrNKR7o3Yein3w9mT3NKyx7q0wNM0wAnmHrt8eUHTSwmbMJq3KesLDkfPWxZWPo66Q48kt0lZUhwMOiWubnBzWhdh4FxRH4COpOzAfCKTTEczkC2%2FUNeX3XFdpYnK8ETE%2F0ouBZLRgN0%2FmK7CsPHpnFXhn%2FOgYRJAwgx6jKjR9d7z8smGfBCpWlh5Ms8XEfDnWi7eW%2BDxGc6MOnmqMEGOqUBgftHF0u1DAgZs6f7BddmI23pduDjeMC1OMeTTE%2FmL8A16qU0EPeUZIbBdTlB1yheauPjwXUUvs7KEXqc51Ky1aniJ1VO90%2BgTNN%2BGdPMNTaLzHxatQtSmqSZqdCfR%2FVMXNLZP08x%2F2HqsRqBRcfTnu07m9zSVn7sH6qnhT8hVg48Hv55kCT53CrxeldF806Lxu0qdOQRsIW7GPL7NI3yiUQaOpzK&X-Amz-Signature=f65a312f4accad4501bbd67bcb8432c0b6cdfa6b1100c019dcb85530f04adad0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPJBCEAM%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqVvCks788Wu5K%2B5dJ79zNqxAW0RgS7fN1kxilssLnmAiEAriL9NrzxlpBhr5Je8yj3vsT0hVzIdYh1WGEpUII9M04q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDDSCVVFtW8lOn8wk1SrcA8p8mvMhsjOxR3ZySFFBQUale1SzmZOI%2Bxy7bmp%2Bz9sWzF4nLzqDlHwxWfjoxtixPgx6eruZYb62N3X37Q1O6X90xPQiMsozAPWai8%2BLaXoITcTaHobC5c%2BZqzM0argI0Cxa6HD0tNWiQw9Zgd67tCd9OizZxlHpDRc83dHRVKBXsijlU84w02kZDdqTAolMyPiWoRiLS3J1iti3HyQe5PqfSZY5mH5yqd0koJ1htpXSq69kpOBOT6PmqznC6346VPalJ%2BY%2Fn3e01wv768pOjYn92LGi%2FMkkwnOi4flLJfuLW%2FY23JEFX9HAUzNNQG%2BKRA8U16DBvATjc8bcsRzIRJ7I7czJhvykFIY5RCDmpY14Qo90NLL8xDQiYt5XAtgIID9akr%2FjYdhB1maQ67xRtN%2B2gI%2FLhrtjHvMxRB%2Bd%2Fbts8rxIWrNKR7o3Yein3w9mT3NKyx7q0wNM0wAnmHrt8eUHTSwmbMJq3KesLDkfPWxZWPo66Q48kt0lZUhwMOiWubnBzWhdh4FxRH4COpOzAfCKTTEczkC2%2FUNeX3XFdpYnK8ETE%2F0ouBZLRgN0%2FmK7CsPHpnFXhn%2FOgYRJAwgx6jKjR9d7z8smGfBCpWlh5Ms8XEfDnWi7eW%2BDxGc6MOnmqMEGOqUBgftHF0u1DAgZs6f7BddmI23pduDjeMC1OMeTTE%2FmL8A16qU0EPeUZIbBdTlB1yheauPjwXUUvs7KEXqc51Ky1aniJ1VO90%2BgTNN%2BGdPMNTaLzHxatQtSmqSZqdCfR%2FVMXNLZP08x%2F2HqsRqBRcfTnu07m9zSVn7sH6qnhT8hVg48Hv55kCT53CrxeldF806Lxu0qdOQRsIW7GPL7NI3yiUQaOpzK&X-Amz-Signature=95de8437fc1beaaf389a3fc102af2fdf77cfda3cf63060778f89bd922fd80f1e&X-Amz-SignedHeaders=host&x-id=GetObject)
