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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GELH67S%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T022357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDe9v32BhlOWMe0rc8P0LDMNMZ4jEGn6SJAPupMjRjXvwIgFCwZAFaK5ZgYoRSkW1AJTUdHNN%2Bn7A0a%2BvJwy0obX0Yq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJNhu2ZusxH1nzrE6SrcA%2FwTKvmsz0d%2B2Xdh5IXK6IQe78GF23geqZiDxVGWVcsE%2FWRmNJMnENlA5qGVQLLuqAQRcl8gQwkw0C3lUyC21rtevfkGjVwRR7lK%2FWFf0OxfLj1cPc2I6lvnuTqZvJ2npgNEBqzAZM6CUFd2YDQNMODYxp5KwufAUzSA%2Bu6VzKjRku%2BcPbf%2F%2FcvfMxhpebRTPVPUx7kBaUfmovYMVjLQNLHaI0H2Xc6glffCIACvCqUj72%2F03tBdEvmGjzip1e9XKR3szUMJwcFBHyhC%2BK4e47OSaWCnHzxglrJ1a0tOYpjIbsm5PC1jzdBnb%2BwMnq18A7%2BtuvZ4JHUMBRDWTf9vqf9ACVWT%2FJDblxUaTGeTDpzgq%2FSFb1n1j1eYlfRiUKIhPAgNBdpWWEo4cwbXHs5bPmYki9ZxLsyAHd6SBs%2FJybLZglMBBJRNSNOg81lpLpsvOfwz29ocwQ8AXOrgUAhGqHwSBfHl9dBHfw04SX%2F6vQdPmYqCCn5wuJNsEu2uNZokZ2gkuOb3h8OgXTk8q2nSNsAOT1rNua44i1U3PXD%2BAJaN%2BCZMMQ%2BTLQk18lDGyeNkHAhwhrn6tbD8NXSEpHkZvxdtff6EaE23SNU%2BOsSWsQeK5Ui0ZOHS%2FjmP9lBuMLbgq8AGOqUBy3nmAXDUFlBh52TCFjVQ2HyAVZfDt95ofOkMp6Sx5gpwHurcDjgVC8IE25PwnsXHwVRyWwyo3TvwWF3Xq4ohQj1QJYkx97VRLEXQugS2O1QYzgY%2Bq%2B57HC5CiE9XtZD4dL1RW%2FzD1CwaxKOBPh6PiVcDeId9VELA%2FSVbsvamndf6Vhukr1Jk1FQpy0Pt003y9PbMuxpf4dcX3OMEAUj%2FqFHC8eCF&X-Amz-Signature=e743aa410220dc840c8304261abf414343823f2da426f0894cf56ae69af7be8f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GELH67S%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T022357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDe9v32BhlOWMe0rc8P0LDMNMZ4jEGn6SJAPupMjRjXvwIgFCwZAFaK5ZgYoRSkW1AJTUdHNN%2Bn7A0a%2BvJwy0obX0Yq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJNhu2ZusxH1nzrE6SrcA%2FwTKvmsz0d%2B2Xdh5IXK6IQe78GF23geqZiDxVGWVcsE%2FWRmNJMnENlA5qGVQLLuqAQRcl8gQwkw0C3lUyC21rtevfkGjVwRR7lK%2FWFf0OxfLj1cPc2I6lvnuTqZvJ2npgNEBqzAZM6CUFd2YDQNMODYxp5KwufAUzSA%2Bu6VzKjRku%2BcPbf%2F%2FcvfMxhpebRTPVPUx7kBaUfmovYMVjLQNLHaI0H2Xc6glffCIACvCqUj72%2F03tBdEvmGjzip1e9XKR3szUMJwcFBHyhC%2BK4e47OSaWCnHzxglrJ1a0tOYpjIbsm5PC1jzdBnb%2BwMnq18A7%2BtuvZ4JHUMBRDWTf9vqf9ACVWT%2FJDblxUaTGeTDpzgq%2FSFb1n1j1eYlfRiUKIhPAgNBdpWWEo4cwbXHs5bPmYki9ZxLsyAHd6SBs%2FJybLZglMBBJRNSNOg81lpLpsvOfwz29ocwQ8AXOrgUAhGqHwSBfHl9dBHfw04SX%2F6vQdPmYqCCn5wuJNsEu2uNZokZ2gkuOb3h8OgXTk8q2nSNsAOT1rNua44i1U3PXD%2BAJaN%2BCZMMQ%2BTLQk18lDGyeNkHAhwhrn6tbD8NXSEpHkZvxdtff6EaE23SNU%2BOsSWsQeK5Ui0ZOHS%2FjmP9lBuMLbgq8AGOqUBy3nmAXDUFlBh52TCFjVQ2HyAVZfDt95ofOkMp6Sx5gpwHurcDjgVC8IE25PwnsXHwVRyWwyo3TvwWF3Xq4ohQj1QJYkx97VRLEXQugS2O1QYzgY%2Bq%2B57HC5CiE9XtZD4dL1RW%2FzD1CwaxKOBPh6PiVcDeId9VELA%2FSVbsvamndf6Vhukr1Jk1FQpy0Pt003y9PbMuxpf4dcX3OMEAUj%2FqFHC8eCF&X-Amz-Signature=14aa5016464119756662c76afec397d05443a10e5d2bae38888434a3ebbebb6f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GELH67S%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T022357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDe9v32BhlOWMe0rc8P0LDMNMZ4jEGn6SJAPupMjRjXvwIgFCwZAFaK5ZgYoRSkW1AJTUdHNN%2Bn7A0a%2BvJwy0obX0Yq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJNhu2ZusxH1nzrE6SrcA%2FwTKvmsz0d%2B2Xdh5IXK6IQe78GF23geqZiDxVGWVcsE%2FWRmNJMnENlA5qGVQLLuqAQRcl8gQwkw0C3lUyC21rtevfkGjVwRR7lK%2FWFf0OxfLj1cPc2I6lvnuTqZvJ2npgNEBqzAZM6CUFd2YDQNMODYxp5KwufAUzSA%2Bu6VzKjRku%2BcPbf%2F%2FcvfMxhpebRTPVPUx7kBaUfmovYMVjLQNLHaI0H2Xc6glffCIACvCqUj72%2F03tBdEvmGjzip1e9XKR3szUMJwcFBHyhC%2BK4e47OSaWCnHzxglrJ1a0tOYpjIbsm5PC1jzdBnb%2BwMnq18A7%2BtuvZ4JHUMBRDWTf9vqf9ACVWT%2FJDblxUaTGeTDpzgq%2FSFb1n1j1eYlfRiUKIhPAgNBdpWWEo4cwbXHs5bPmYki9ZxLsyAHd6SBs%2FJybLZglMBBJRNSNOg81lpLpsvOfwz29ocwQ8AXOrgUAhGqHwSBfHl9dBHfw04SX%2F6vQdPmYqCCn5wuJNsEu2uNZokZ2gkuOb3h8OgXTk8q2nSNsAOT1rNua44i1U3PXD%2BAJaN%2BCZMMQ%2BTLQk18lDGyeNkHAhwhrn6tbD8NXSEpHkZvxdtff6EaE23SNU%2BOsSWsQeK5Ui0ZOHS%2FjmP9lBuMLbgq8AGOqUBy3nmAXDUFlBh52TCFjVQ2HyAVZfDt95ofOkMp6Sx5gpwHurcDjgVC8IE25PwnsXHwVRyWwyo3TvwWF3Xq4ohQj1QJYkx97VRLEXQugS2O1QYzgY%2Bq%2B57HC5CiE9XtZD4dL1RW%2FzD1CwaxKOBPh6PiVcDeId9VELA%2FSVbsvamndf6Vhukr1Jk1FQpy0Pt003y9PbMuxpf4dcX3OMEAUj%2FqFHC8eCF&X-Amz-Signature=db55e23f71cc0240a98c170f843e1d4966f2ceaa16ad58f341d31207437266e8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GELH67S%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T022357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDe9v32BhlOWMe0rc8P0LDMNMZ4jEGn6SJAPupMjRjXvwIgFCwZAFaK5ZgYoRSkW1AJTUdHNN%2Bn7A0a%2BvJwy0obX0Yq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJNhu2ZusxH1nzrE6SrcA%2FwTKvmsz0d%2B2Xdh5IXK6IQe78GF23geqZiDxVGWVcsE%2FWRmNJMnENlA5qGVQLLuqAQRcl8gQwkw0C3lUyC21rtevfkGjVwRR7lK%2FWFf0OxfLj1cPc2I6lvnuTqZvJ2npgNEBqzAZM6CUFd2YDQNMODYxp5KwufAUzSA%2Bu6VzKjRku%2BcPbf%2F%2FcvfMxhpebRTPVPUx7kBaUfmovYMVjLQNLHaI0H2Xc6glffCIACvCqUj72%2F03tBdEvmGjzip1e9XKR3szUMJwcFBHyhC%2BK4e47OSaWCnHzxglrJ1a0tOYpjIbsm5PC1jzdBnb%2BwMnq18A7%2BtuvZ4JHUMBRDWTf9vqf9ACVWT%2FJDblxUaTGeTDpzgq%2FSFb1n1j1eYlfRiUKIhPAgNBdpWWEo4cwbXHs5bPmYki9ZxLsyAHd6SBs%2FJybLZglMBBJRNSNOg81lpLpsvOfwz29ocwQ8AXOrgUAhGqHwSBfHl9dBHfw04SX%2F6vQdPmYqCCn5wuJNsEu2uNZokZ2gkuOb3h8OgXTk8q2nSNsAOT1rNua44i1U3PXD%2BAJaN%2BCZMMQ%2BTLQk18lDGyeNkHAhwhrn6tbD8NXSEpHkZvxdtff6EaE23SNU%2BOsSWsQeK5Ui0ZOHS%2FjmP9lBuMLbgq8AGOqUBy3nmAXDUFlBh52TCFjVQ2HyAVZfDt95ofOkMp6Sx5gpwHurcDjgVC8IE25PwnsXHwVRyWwyo3TvwWF3Xq4ohQj1QJYkx97VRLEXQugS2O1QYzgY%2Bq%2B57HC5CiE9XtZD4dL1RW%2FzD1CwaxKOBPh6PiVcDeId9VELA%2FSVbsvamndf6Vhukr1Jk1FQpy0Pt003y9PbMuxpf4dcX3OMEAUj%2FqFHC8eCF&X-Amz-Signature=795a1c140fba9e0547b0d76024909e634db669c634142890aadc51ae4a0713b8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GELH67S%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T022357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDe9v32BhlOWMe0rc8P0LDMNMZ4jEGn6SJAPupMjRjXvwIgFCwZAFaK5ZgYoRSkW1AJTUdHNN%2Bn7A0a%2BvJwy0obX0Yq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJNhu2ZusxH1nzrE6SrcA%2FwTKvmsz0d%2B2Xdh5IXK6IQe78GF23geqZiDxVGWVcsE%2FWRmNJMnENlA5qGVQLLuqAQRcl8gQwkw0C3lUyC21rtevfkGjVwRR7lK%2FWFf0OxfLj1cPc2I6lvnuTqZvJ2npgNEBqzAZM6CUFd2YDQNMODYxp5KwufAUzSA%2Bu6VzKjRku%2BcPbf%2F%2FcvfMxhpebRTPVPUx7kBaUfmovYMVjLQNLHaI0H2Xc6glffCIACvCqUj72%2F03tBdEvmGjzip1e9XKR3szUMJwcFBHyhC%2BK4e47OSaWCnHzxglrJ1a0tOYpjIbsm5PC1jzdBnb%2BwMnq18A7%2BtuvZ4JHUMBRDWTf9vqf9ACVWT%2FJDblxUaTGeTDpzgq%2FSFb1n1j1eYlfRiUKIhPAgNBdpWWEo4cwbXHs5bPmYki9ZxLsyAHd6SBs%2FJybLZglMBBJRNSNOg81lpLpsvOfwz29ocwQ8AXOrgUAhGqHwSBfHl9dBHfw04SX%2F6vQdPmYqCCn5wuJNsEu2uNZokZ2gkuOb3h8OgXTk8q2nSNsAOT1rNua44i1U3PXD%2BAJaN%2BCZMMQ%2BTLQk18lDGyeNkHAhwhrn6tbD8NXSEpHkZvxdtff6EaE23SNU%2BOsSWsQeK5Ui0ZOHS%2FjmP9lBuMLbgq8AGOqUBy3nmAXDUFlBh52TCFjVQ2HyAVZfDt95ofOkMp6Sx5gpwHurcDjgVC8IE25PwnsXHwVRyWwyo3TvwWF3Xq4ohQj1QJYkx97VRLEXQugS2O1QYzgY%2Bq%2B57HC5CiE9XtZD4dL1RW%2FzD1CwaxKOBPh6PiVcDeId9VELA%2FSVbsvamndf6Vhukr1Jk1FQpy0Pt003y9PbMuxpf4dcX3OMEAUj%2FqFHC8eCF&X-Amz-Signature=9c5504400817d0ad28a82a4ce4cd1358d00aa938beb143130653985dbcacec1b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GELH67S%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T022357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDe9v32BhlOWMe0rc8P0LDMNMZ4jEGn6SJAPupMjRjXvwIgFCwZAFaK5ZgYoRSkW1AJTUdHNN%2Bn7A0a%2BvJwy0obX0Yq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJNhu2ZusxH1nzrE6SrcA%2FwTKvmsz0d%2B2Xdh5IXK6IQe78GF23geqZiDxVGWVcsE%2FWRmNJMnENlA5qGVQLLuqAQRcl8gQwkw0C3lUyC21rtevfkGjVwRR7lK%2FWFf0OxfLj1cPc2I6lvnuTqZvJ2npgNEBqzAZM6CUFd2YDQNMODYxp5KwufAUzSA%2Bu6VzKjRku%2BcPbf%2F%2FcvfMxhpebRTPVPUx7kBaUfmovYMVjLQNLHaI0H2Xc6glffCIACvCqUj72%2F03tBdEvmGjzip1e9XKR3szUMJwcFBHyhC%2BK4e47OSaWCnHzxglrJ1a0tOYpjIbsm5PC1jzdBnb%2BwMnq18A7%2BtuvZ4JHUMBRDWTf9vqf9ACVWT%2FJDblxUaTGeTDpzgq%2FSFb1n1j1eYlfRiUKIhPAgNBdpWWEo4cwbXHs5bPmYki9ZxLsyAHd6SBs%2FJybLZglMBBJRNSNOg81lpLpsvOfwz29ocwQ8AXOrgUAhGqHwSBfHl9dBHfw04SX%2F6vQdPmYqCCn5wuJNsEu2uNZokZ2gkuOb3h8OgXTk8q2nSNsAOT1rNua44i1U3PXD%2BAJaN%2BCZMMQ%2BTLQk18lDGyeNkHAhwhrn6tbD8NXSEpHkZvxdtff6EaE23SNU%2BOsSWsQeK5Ui0ZOHS%2FjmP9lBuMLbgq8AGOqUBy3nmAXDUFlBh52TCFjVQ2HyAVZfDt95ofOkMp6Sx5gpwHurcDjgVC8IE25PwnsXHwVRyWwyo3TvwWF3Xq4ohQj1QJYkx97VRLEXQugS2O1QYzgY%2Bq%2B57HC5CiE9XtZD4dL1RW%2FzD1CwaxKOBPh6PiVcDeId9VELA%2FSVbsvamndf6Vhukr1Jk1FQpy0Pt003y9PbMuxpf4dcX3OMEAUj%2FqFHC8eCF&X-Amz-Signature=6174124984920a0f8c7589577103ae8e9b56835906d7f705a4e5b964995e5390&X-Amz-SignedHeaders=host&x-id=GetObject)
