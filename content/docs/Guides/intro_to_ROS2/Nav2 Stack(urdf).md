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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KQKZDTC%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T025815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk2IrLfStBRc3F5Wq5TWrf4cliH6NToj63L%2FVoOOfYkQIhAM4VY%2FFvvrbXfVwK%2BRfwZBpBo71RZGO%2FtGrkFVrdLEagKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxscadjyqHW7tQPwXAq3ANBrTvjvgiO2lZbEKHVyyhIR1tlxAu3JM%2F0N9jXebEtkl2UNaJ9BmrIiBQPvoUQv%2BDn%2FjL9TjgkAY9r%2F4kMSa8wTv6lEPCXaf2wPpnPlQn3e%2F%2Bj0MlHkEWoJmgQT0Dzu2axmUEyaLgtdQ3EwBxK93ixaBhfJQ3SleMc8JudvFYKJPTm277UPCqqdFeHFKTkajGidaqjY%2BKrcTHwYXM%2B%2BO2eAXXP83ojld9qTgR4rb71fSVFzoQEd%2FVRcTLU04vsd%2BEkG6Plz2Qvi9lSnngKf9uxsJgQXMUSBEZkyT1luLTOt%2FGT5pICGFNnxUzMRENh%2F1ekWo6UUls6GMZFQEfepW06IwahEgnsJHATex8Uh%2F4B8%2FQR%2BDGl%2B9gVMLYow1MC8JB0RM%2Bux%2F7XPV0dkOegNhx59bAqLIAhL%2FCfBwEsnA38OUtPsyWORJVXVG5iIO0ZJ%2BjZgtCAscXY4g30IoqZWbpSxw%2BhLPaiPJMqBjEUaQGxPDiRZXkeDDEpT5z78W1Eg7ntzDDjsFb2ILOjGRO6MuymooIg5KPMEqfpeL5JNGY2%2BHkVreHIQJN6%2FWTj6MvrD2qAoxuNPxiHLZDRy98QlXlYitxMyYljUERkdhpKWHpMhCk6cXLVOXvQUWLm3zDxxvbDBjqkAd5Q9Jls8Y1vHWci3WGI9b01dNC9eBt0GD2HjQAdsU9jJttTjsHQyNNqJcIyO9XnN4vx%2Bv0x6KLuUr6W1u9ksMMb4PE87JbqRANkwwrPDfAKhYeDyLi30RPTxldphu8ewPoU9uj35zRy2J1M8lBumY%2ByJwNpPBxNZSxKLbu4ZXRBF79ubvlWwUGKtQdcX1p69NSqOGIYZlQ16ig4hSvXak0OOTTx&X-Amz-Signature=c468e2a03a601e357fb6336218ea40b0833cba9300cd93546c8974e182b09ebc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KQKZDTC%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T025815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk2IrLfStBRc3F5Wq5TWrf4cliH6NToj63L%2FVoOOfYkQIhAM4VY%2FFvvrbXfVwK%2BRfwZBpBo71RZGO%2FtGrkFVrdLEagKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxscadjyqHW7tQPwXAq3ANBrTvjvgiO2lZbEKHVyyhIR1tlxAu3JM%2F0N9jXebEtkl2UNaJ9BmrIiBQPvoUQv%2BDn%2FjL9TjgkAY9r%2F4kMSa8wTv6lEPCXaf2wPpnPlQn3e%2F%2Bj0MlHkEWoJmgQT0Dzu2axmUEyaLgtdQ3EwBxK93ixaBhfJQ3SleMc8JudvFYKJPTm277UPCqqdFeHFKTkajGidaqjY%2BKrcTHwYXM%2B%2BO2eAXXP83ojld9qTgR4rb71fSVFzoQEd%2FVRcTLU04vsd%2BEkG6Plz2Qvi9lSnngKf9uxsJgQXMUSBEZkyT1luLTOt%2FGT5pICGFNnxUzMRENh%2F1ekWo6UUls6GMZFQEfepW06IwahEgnsJHATex8Uh%2F4B8%2FQR%2BDGl%2B9gVMLYow1MC8JB0RM%2Bux%2F7XPV0dkOegNhx59bAqLIAhL%2FCfBwEsnA38OUtPsyWORJVXVG5iIO0ZJ%2BjZgtCAscXY4g30IoqZWbpSxw%2BhLPaiPJMqBjEUaQGxPDiRZXkeDDEpT5z78W1Eg7ntzDDjsFb2ILOjGRO6MuymooIg5KPMEqfpeL5JNGY2%2BHkVreHIQJN6%2FWTj6MvrD2qAoxuNPxiHLZDRy98QlXlYitxMyYljUERkdhpKWHpMhCk6cXLVOXvQUWLm3zDxxvbDBjqkAd5Q9Jls8Y1vHWci3WGI9b01dNC9eBt0GD2HjQAdsU9jJttTjsHQyNNqJcIyO9XnN4vx%2Bv0x6KLuUr6W1u9ksMMb4PE87JbqRANkwwrPDfAKhYeDyLi30RPTxldphu8ewPoU9uj35zRy2J1M8lBumY%2ByJwNpPBxNZSxKLbu4ZXRBF79ubvlWwUGKtQdcX1p69NSqOGIYZlQ16ig4hSvXak0OOTTx&X-Amz-Signature=adc7f2dc6bdc94987ba1b0d9f4b910f7d6d49b8fd81490420770d7e774bc18a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KQKZDTC%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T025815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk2IrLfStBRc3F5Wq5TWrf4cliH6NToj63L%2FVoOOfYkQIhAM4VY%2FFvvrbXfVwK%2BRfwZBpBo71RZGO%2FtGrkFVrdLEagKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxscadjyqHW7tQPwXAq3ANBrTvjvgiO2lZbEKHVyyhIR1tlxAu3JM%2F0N9jXebEtkl2UNaJ9BmrIiBQPvoUQv%2BDn%2FjL9TjgkAY9r%2F4kMSa8wTv6lEPCXaf2wPpnPlQn3e%2F%2Bj0MlHkEWoJmgQT0Dzu2axmUEyaLgtdQ3EwBxK93ixaBhfJQ3SleMc8JudvFYKJPTm277UPCqqdFeHFKTkajGidaqjY%2BKrcTHwYXM%2B%2BO2eAXXP83ojld9qTgR4rb71fSVFzoQEd%2FVRcTLU04vsd%2BEkG6Plz2Qvi9lSnngKf9uxsJgQXMUSBEZkyT1luLTOt%2FGT5pICGFNnxUzMRENh%2F1ekWo6UUls6GMZFQEfepW06IwahEgnsJHATex8Uh%2F4B8%2FQR%2BDGl%2B9gVMLYow1MC8JB0RM%2Bux%2F7XPV0dkOegNhx59bAqLIAhL%2FCfBwEsnA38OUtPsyWORJVXVG5iIO0ZJ%2BjZgtCAscXY4g30IoqZWbpSxw%2BhLPaiPJMqBjEUaQGxPDiRZXkeDDEpT5z78W1Eg7ntzDDjsFb2ILOjGRO6MuymooIg5KPMEqfpeL5JNGY2%2BHkVreHIQJN6%2FWTj6MvrD2qAoxuNPxiHLZDRy98QlXlYitxMyYljUERkdhpKWHpMhCk6cXLVOXvQUWLm3zDxxvbDBjqkAd5Q9Jls8Y1vHWci3WGI9b01dNC9eBt0GD2HjQAdsU9jJttTjsHQyNNqJcIyO9XnN4vx%2Bv0x6KLuUr6W1u9ksMMb4PE87JbqRANkwwrPDfAKhYeDyLi30RPTxldphu8ewPoU9uj35zRy2J1M8lBumY%2ByJwNpPBxNZSxKLbu4ZXRBF79ubvlWwUGKtQdcX1p69NSqOGIYZlQ16ig4hSvXak0OOTTx&X-Amz-Signature=5e69b97b8ce2ac584db83040ff25c4cdf29b57dfb611ffdbd6d2735e749fcd13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KQKZDTC%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T025815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk2IrLfStBRc3F5Wq5TWrf4cliH6NToj63L%2FVoOOfYkQIhAM4VY%2FFvvrbXfVwK%2BRfwZBpBo71RZGO%2FtGrkFVrdLEagKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxscadjyqHW7tQPwXAq3ANBrTvjvgiO2lZbEKHVyyhIR1tlxAu3JM%2F0N9jXebEtkl2UNaJ9BmrIiBQPvoUQv%2BDn%2FjL9TjgkAY9r%2F4kMSa8wTv6lEPCXaf2wPpnPlQn3e%2F%2Bj0MlHkEWoJmgQT0Dzu2axmUEyaLgtdQ3EwBxK93ixaBhfJQ3SleMc8JudvFYKJPTm277UPCqqdFeHFKTkajGidaqjY%2BKrcTHwYXM%2B%2BO2eAXXP83ojld9qTgR4rb71fSVFzoQEd%2FVRcTLU04vsd%2BEkG6Plz2Qvi9lSnngKf9uxsJgQXMUSBEZkyT1luLTOt%2FGT5pICGFNnxUzMRENh%2F1ekWo6UUls6GMZFQEfepW06IwahEgnsJHATex8Uh%2F4B8%2FQR%2BDGl%2B9gVMLYow1MC8JB0RM%2Bux%2F7XPV0dkOegNhx59bAqLIAhL%2FCfBwEsnA38OUtPsyWORJVXVG5iIO0ZJ%2BjZgtCAscXY4g30IoqZWbpSxw%2BhLPaiPJMqBjEUaQGxPDiRZXkeDDEpT5z78W1Eg7ntzDDjsFb2ILOjGRO6MuymooIg5KPMEqfpeL5JNGY2%2BHkVreHIQJN6%2FWTj6MvrD2qAoxuNPxiHLZDRy98QlXlYitxMyYljUERkdhpKWHpMhCk6cXLVOXvQUWLm3zDxxvbDBjqkAd5Q9Jls8Y1vHWci3WGI9b01dNC9eBt0GD2HjQAdsU9jJttTjsHQyNNqJcIyO9XnN4vx%2Bv0x6KLuUr6W1u9ksMMb4PE87JbqRANkwwrPDfAKhYeDyLi30RPTxldphu8ewPoU9uj35zRy2J1M8lBumY%2ByJwNpPBxNZSxKLbu4ZXRBF79ubvlWwUGKtQdcX1p69NSqOGIYZlQ16ig4hSvXak0OOTTx&X-Amz-Signature=380d0e94d658b6730429c9b9a91cb0fb8ab0d3e765408a567a98d143dc3cf109&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KQKZDTC%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T025815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk2IrLfStBRc3F5Wq5TWrf4cliH6NToj63L%2FVoOOfYkQIhAM4VY%2FFvvrbXfVwK%2BRfwZBpBo71RZGO%2FtGrkFVrdLEagKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxscadjyqHW7tQPwXAq3ANBrTvjvgiO2lZbEKHVyyhIR1tlxAu3JM%2F0N9jXebEtkl2UNaJ9BmrIiBQPvoUQv%2BDn%2FjL9TjgkAY9r%2F4kMSa8wTv6lEPCXaf2wPpnPlQn3e%2F%2Bj0MlHkEWoJmgQT0Dzu2axmUEyaLgtdQ3EwBxK93ixaBhfJQ3SleMc8JudvFYKJPTm277UPCqqdFeHFKTkajGidaqjY%2BKrcTHwYXM%2B%2BO2eAXXP83ojld9qTgR4rb71fSVFzoQEd%2FVRcTLU04vsd%2BEkG6Plz2Qvi9lSnngKf9uxsJgQXMUSBEZkyT1luLTOt%2FGT5pICGFNnxUzMRENh%2F1ekWo6UUls6GMZFQEfepW06IwahEgnsJHATex8Uh%2F4B8%2FQR%2BDGl%2B9gVMLYow1MC8JB0RM%2Bux%2F7XPV0dkOegNhx59bAqLIAhL%2FCfBwEsnA38OUtPsyWORJVXVG5iIO0ZJ%2BjZgtCAscXY4g30IoqZWbpSxw%2BhLPaiPJMqBjEUaQGxPDiRZXkeDDEpT5z78W1Eg7ntzDDjsFb2ILOjGRO6MuymooIg5KPMEqfpeL5JNGY2%2BHkVreHIQJN6%2FWTj6MvrD2qAoxuNPxiHLZDRy98QlXlYitxMyYljUERkdhpKWHpMhCk6cXLVOXvQUWLm3zDxxvbDBjqkAd5Q9Jls8Y1vHWci3WGI9b01dNC9eBt0GD2HjQAdsU9jJttTjsHQyNNqJcIyO9XnN4vx%2Bv0x6KLuUr6W1u9ksMMb4PE87JbqRANkwwrPDfAKhYeDyLi30RPTxldphu8ewPoU9uj35zRy2J1M8lBumY%2ByJwNpPBxNZSxKLbu4ZXRBF79ubvlWwUGKtQdcX1p69NSqOGIYZlQ16ig4hSvXak0OOTTx&X-Amz-Signature=0d122c8fc840be92b180a17fd01b2eba52668ad80435997969365ff165dda793&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KQKZDTC%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T025816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDk2IrLfStBRc3F5Wq5TWrf4cliH6NToj63L%2FVoOOfYkQIhAM4VY%2FFvvrbXfVwK%2BRfwZBpBo71RZGO%2FtGrkFVrdLEagKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxscadjyqHW7tQPwXAq3ANBrTvjvgiO2lZbEKHVyyhIR1tlxAu3JM%2F0N9jXebEtkl2UNaJ9BmrIiBQPvoUQv%2BDn%2FjL9TjgkAY9r%2F4kMSa8wTv6lEPCXaf2wPpnPlQn3e%2F%2Bj0MlHkEWoJmgQT0Dzu2axmUEyaLgtdQ3EwBxK93ixaBhfJQ3SleMc8JudvFYKJPTm277UPCqqdFeHFKTkajGidaqjY%2BKrcTHwYXM%2B%2BO2eAXXP83ojld9qTgR4rb71fSVFzoQEd%2FVRcTLU04vsd%2BEkG6Plz2Qvi9lSnngKf9uxsJgQXMUSBEZkyT1luLTOt%2FGT5pICGFNnxUzMRENh%2F1ekWo6UUls6GMZFQEfepW06IwahEgnsJHATex8Uh%2F4B8%2FQR%2BDGl%2B9gVMLYow1MC8JB0RM%2Bux%2F7XPV0dkOegNhx59bAqLIAhL%2FCfBwEsnA38OUtPsyWORJVXVG5iIO0ZJ%2BjZgtCAscXY4g30IoqZWbpSxw%2BhLPaiPJMqBjEUaQGxPDiRZXkeDDEpT5z78W1Eg7ntzDDjsFb2ILOjGRO6MuymooIg5KPMEqfpeL5JNGY2%2BHkVreHIQJN6%2FWTj6MvrD2qAoxuNPxiHLZDRy98QlXlYitxMyYljUERkdhpKWHpMhCk6cXLVOXvQUWLm3zDxxvbDBjqkAd5Q9Jls8Y1vHWci3WGI9b01dNC9eBt0GD2HjQAdsU9jJttTjsHQyNNqJcIyO9XnN4vx%2Bv0x6KLuUr6W1u9ksMMb4PE87JbqRANkwwrPDfAKhYeDyLi30RPTxldphu8ewPoU9uj35zRy2J1M8lBumY%2ByJwNpPBxNZSxKLbu4ZXRBF79ubvlWwUGKtQdcX1p69NSqOGIYZlQ16ig4hSvXak0OOTTx&X-Amz-Signature=9471ea61aa695af31466f9d713b2a3701bba7e639cd8ab0356b20d1efb85c427&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
