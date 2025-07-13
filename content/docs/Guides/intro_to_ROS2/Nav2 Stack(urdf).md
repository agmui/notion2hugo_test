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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGIG3Y3S%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T071034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtJjPMEJysDwtW0e5HlwibVxz%2BFfC7gG%2BFNlJTM%2FtDUgIhAKl%2B8fwJsi9pmjhUcq7YI31mmXPhFQOjI0YlayjvEu5HKv8DCBAQABoMNjM3NDIzMTgzODA1IgyJU%2F%2BYLJ2KjXZTquYq3ANQ1zTAXUjhNc8YFxs876HiJIw9sjierSBVqJc69fvfrMaNs6ljL5xiVVkV4cc22FY9Um42Zp65ewEhZ%2BQsQ3Ec2JcPtVzcof%2F%2FN8qpAk7uMidfKRjPM7z594D%2FkSCgp2OoZXVmLsNSRy14ss9ou%2BSs6%2BjsnIrsuY5nBQN2%2FNBV4v76L%2Bl26%2Brl5z1nmZLELq34toUD8DJP47YjS7g5kthLwu9E8ZTrt27O6gFRse8UMiRPkPU7grW6aZQyrWBWOiuNFZjkqTE9AjWbR%2FWLxABrnRYwWqqPe7fE1%2FJEg3%2Bs1oMDqSFwvB6rrJ9wHu%2B5cL6X78WTnaMZYRZqtn%2Fd2%2FezF3WM9XNQPbApmAxhDU3jJgsrWwBYspy4YFUqRch6RIpaRgbxk51uKS3w9ZenEi1XWZNDVK3ItMQWelrDLzci1%2FfpK8gOX86P9rBteAuk624Ez3aN1gqlwwo32wDt%2Bz3FtIOIRVP2O6flo%2Bh8HrSGqrGESD%2Fi4kgZZmo46kbOLWgq8SpiBCUP%2FDM62rqbnplTRtaLf7r8M5c36SApUAJCdOGWdwVritu1d70er0Cg6iitckhFSgcIxALisy8dnTHpBFeFhPaC9bQKgx9UfBdzbZ%2BuZXiNoHo7LrLnOjCCpM3DBjqkARHjI80VE1FwldDuU1vJqi83oUmKQP1oxp7ehxqEaK9Pcg%2F7oAtJ0RnL33fzGle%2Bk0GK%2FeO26ThaSy%2FNK4Zq0%2B%2B6wF4xpztM%2Fdlzp%2B8nU51oq%2BBHyFwSdTIovRSbAFU26%2BQFOhWduZcfLzB0VAIYGw8i04fFMOzQFTRIoPo3DB%2BX4txnzmxiYmf5JzDOEe45160CSF91AftfrWGY3XGcNR%2BE2xzJ&X-Amz-Signature=3e36aa49d19128a00c23a1ce6094c7e18dc8593a996e347c342c48f2dde3dc7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGIG3Y3S%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T071034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtJjPMEJysDwtW0e5HlwibVxz%2BFfC7gG%2BFNlJTM%2FtDUgIhAKl%2B8fwJsi9pmjhUcq7YI31mmXPhFQOjI0YlayjvEu5HKv8DCBAQABoMNjM3NDIzMTgzODA1IgyJU%2F%2BYLJ2KjXZTquYq3ANQ1zTAXUjhNc8YFxs876HiJIw9sjierSBVqJc69fvfrMaNs6ljL5xiVVkV4cc22FY9Um42Zp65ewEhZ%2BQsQ3Ec2JcPtVzcof%2F%2FN8qpAk7uMidfKRjPM7z594D%2FkSCgp2OoZXVmLsNSRy14ss9ou%2BSs6%2BjsnIrsuY5nBQN2%2FNBV4v76L%2Bl26%2Brl5z1nmZLELq34toUD8DJP47YjS7g5kthLwu9E8ZTrt27O6gFRse8UMiRPkPU7grW6aZQyrWBWOiuNFZjkqTE9AjWbR%2FWLxABrnRYwWqqPe7fE1%2FJEg3%2Bs1oMDqSFwvB6rrJ9wHu%2B5cL6X78WTnaMZYRZqtn%2Fd2%2FezF3WM9XNQPbApmAxhDU3jJgsrWwBYspy4YFUqRch6RIpaRgbxk51uKS3w9ZenEi1XWZNDVK3ItMQWelrDLzci1%2FfpK8gOX86P9rBteAuk624Ez3aN1gqlwwo32wDt%2Bz3FtIOIRVP2O6flo%2Bh8HrSGqrGESD%2Fi4kgZZmo46kbOLWgq8SpiBCUP%2FDM62rqbnplTRtaLf7r8M5c36SApUAJCdOGWdwVritu1d70er0Cg6iitckhFSgcIxALisy8dnTHpBFeFhPaC9bQKgx9UfBdzbZ%2BuZXiNoHo7LrLnOjCCpM3DBjqkARHjI80VE1FwldDuU1vJqi83oUmKQP1oxp7ehxqEaK9Pcg%2F7oAtJ0RnL33fzGle%2Bk0GK%2FeO26ThaSy%2FNK4Zq0%2B%2B6wF4xpztM%2Fdlzp%2B8nU51oq%2BBHyFwSdTIovRSbAFU26%2BQFOhWduZcfLzB0VAIYGw8i04fFMOzQFTRIoPo3DB%2BX4txnzmxiYmf5JzDOEe45160CSF91AftfrWGY3XGcNR%2BE2xzJ&X-Amz-Signature=3ebc341dfd9277d053b9a035fa5fbc9de5ee9921e4205fc4a5198c8f49f801f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGIG3Y3S%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T071034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtJjPMEJysDwtW0e5HlwibVxz%2BFfC7gG%2BFNlJTM%2FtDUgIhAKl%2B8fwJsi9pmjhUcq7YI31mmXPhFQOjI0YlayjvEu5HKv8DCBAQABoMNjM3NDIzMTgzODA1IgyJU%2F%2BYLJ2KjXZTquYq3ANQ1zTAXUjhNc8YFxs876HiJIw9sjierSBVqJc69fvfrMaNs6ljL5xiVVkV4cc22FY9Um42Zp65ewEhZ%2BQsQ3Ec2JcPtVzcof%2F%2FN8qpAk7uMidfKRjPM7z594D%2FkSCgp2OoZXVmLsNSRy14ss9ou%2BSs6%2BjsnIrsuY5nBQN2%2FNBV4v76L%2Bl26%2Brl5z1nmZLELq34toUD8DJP47YjS7g5kthLwu9E8ZTrt27O6gFRse8UMiRPkPU7grW6aZQyrWBWOiuNFZjkqTE9AjWbR%2FWLxABrnRYwWqqPe7fE1%2FJEg3%2Bs1oMDqSFwvB6rrJ9wHu%2B5cL6X78WTnaMZYRZqtn%2Fd2%2FezF3WM9XNQPbApmAxhDU3jJgsrWwBYspy4YFUqRch6RIpaRgbxk51uKS3w9ZenEi1XWZNDVK3ItMQWelrDLzci1%2FfpK8gOX86P9rBteAuk624Ez3aN1gqlwwo32wDt%2Bz3FtIOIRVP2O6flo%2Bh8HrSGqrGESD%2Fi4kgZZmo46kbOLWgq8SpiBCUP%2FDM62rqbnplTRtaLf7r8M5c36SApUAJCdOGWdwVritu1d70er0Cg6iitckhFSgcIxALisy8dnTHpBFeFhPaC9bQKgx9UfBdzbZ%2BuZXiNoHo7LrLnOjCCpM3DBjqkARHjI80VE1FwldDuU1vJqi83oUmKQP1oxp7ehxqEaK9Pcg%2F7oAtJ0RnL33fzGle%2Bk0GK%2FeO26ThaSy%2FNK4Zq0%2B%2B6wF4xpztM%2Fdlzp%2B8nU51oq%2BBHyFwSdTIovRSbAFU26%2BQFOhWduZcfLzB0VAIYGw8i04fFMOzQFTRIoPo3DB%2BX4txnzmxiYmf5JzDOEe45160CSF91AftfrWGY3XGcNR%2BE2xzJ&X-Amz-Signature=6757fca4b62038346f1afa3d06cb7b57f7ddc1d602ed718f1a76205da91f3a38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGIG3Y3S%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T071034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtJjPMEJysDwtW0e5HlwibVxz%2BFfC7gG%2BFNlJTM%2FtDUgIhAKl%2B8fwJsi9pmjhUcq7YI31mmXPhFQOjI0YlayjvEu5HKv8DCBAQABoMNjM3NDIzMTgzODA1IgyJU%2F%2BYLJ2KjXZTquYq3ANQ1zTAXUjhNc8YFxs876HiJIw9sjierSBVqJc69fvfrMaNs6ljL5xiVVkV4cc22FY9Um42Zp65ewEhZ%2BQsQ3Ec2JcPtVzcof%2F%2FN8qpAk7uMidfKRjPM7z594D%2FkSCgp2OoZXVmLsNSRy14ss9ou%2BSs6%2BjsnIrsuY5nBQN2%2FNBV4v76L%2Bl26%2Brl5z1nmZLELq34toUD8DJP47YjS7g5kthLwu9E8ZTrt27O6gFRse8UMiRPkPU7grW6aZQyrWBWOiuNFZjkqTE9AjWbR%2FWLxABrnRYwWqqPe7fE1%2FJEg3%2Bs1oMDqSFwvB6rrJ9wHu%2B5cL6X78WTnaMZYRZqtn%2Fd2%2FezF3WM9XNQPbApmAxhDU3jJgsrWwBYspy4YFUqRch6RIpaRgbxk51uKS3w9ZenEi1XWZNDVK3ItMQWelrDLzci1%2FfpK8gOX86P9rBteAuk624Ez3aN1gqlwwo32wDt%2Bz3FtIOIRVP2O6flo%2Bh8HrSGqrGESD%2Fi4kgZZmo46kbOLWgq8SpiBCUP%2FDM62rqbnplTRtaLf7r8M5c36SApUAJCdOGWdwVritu1d70er0Cg6iitckhFSgcIxALisy8dnTHpBFeFhPaC9bQKgx9UfBdzbZ%2BuZXiNoHo7LrLnOjCCpM3DBjqkARHjI80VE1FwldDuU1vJqi83oUmKQP1oxp7ehxqEaK9Pcg%2F7oAtJ0RnL33fzGle%2Bk0GK%2FeO26ThaSy%2FNK4Zq0%2B%2B6wF4xpztM%2Fdlzp%2B8nU51oq%2BBHyFwSdTIovRSbAFU26%2BQFOhWduZcfLzB0VAIYGw8i04fFMOzQFTRIoPo3DB%2BX4txnzmxiYmf5JzDOEe45160CSF91AftfrWGY3XGcNR%2BE2xzJ&X-Amz-Signature=9ce1d8c237c9b3af90eab4eb03309db29e0198e1598f174d98ab6ccb96dac7fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGIG3Y3S%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T071034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtJjPMEJysDwtW0e5HlwibVxz%2BFfC7gG%2BFNlJTM%2FtDUgIhAKl%2B8fwJsi9pmjhUcq7YI31mmXPhFQOjI0YlayjvEu5HKv8DCBAQABoMNjM3NDIzMTgzODA1IgyJU%2F%2BYLJ2KjXZTquYq3ANQ1zTAXUjhNc8YFxs876HiJIw9sjierSBVqJc69fvfrMaNs6ljL5xiVVkV4cc22FY9Um42Zp65ewEhZ%2BQsQ3Ec2JcPtVzcof%2F%2FN8qpAk7uMidfKRjPM7z594D%2FkSCgp2OoZXVmLsNSRy14ss9ou%2BSs6%2BjsnIrsuY5nBQN2%2FNBV4v76L%2Bl26%2Brl5z1nmZLELq34toUD8DJP47YjS7g5kthLwu9E8ZTrt27O6gFRse8UMiRPkPU7grW6aZQyrWBWOiuNFZjkqTE9AjWbR%2FWLxABrnRYwWqqPe7fE1%2FJEg3%2Bs1oMDqSFwvB6rrJ9wHu%2B5cL6X78WTnaMZYRZqtn%2Fd2%2FezF3WM9XNQPbApmAxhDU3jJgsrWwBYspy4YFUqRch6RIpaRgbxk51uKS3w9ZenEi1XWZNDVK3ItMQWelrDLzci1%2FfpK8gOX86P9rBteAuk624Ez3aN1gqlwwo32wDt%2Bz3FtIOIRVP2O6flo%2Bh8HrSGqrGESD%2Fi4kgZZmo46kbOLWgq8SpiBCUP%2FDM62rqbnplTRtaLf7r8M5c36SApUAJCdOGWdwVritu1d70er0Cg6iitckhFSgcIxALisy8dnTHpBFeFhPaC9bQKgx9UfBdzbZ%2BuZXiNoHo7LrLnOjCCpM3DBjqkARHjI80VE1FwldDuU1vJqi83oUmKQP1oxp7ehxqEaK9Pcg%2F7oAtJ0RnL33fzGle%2Bk0GK%2FeO26ThaSy%2FNK4Zq0%2B%2B6wF4xpztM%2Fdlzp%2B8nU51oq%2BBHyFwSdTIovRSbAFU26%2BQFOhWduZcfLzB0VAIYGw8i04fFMOzQFTRIoPo3DB%2BX4txnzmxiYmf5JzDOEe45160CSF91AftfrWGY3XGcNR%2BE2xzJ&X-Amz-Signature=80c0b680c745a70ce5ae305f6fe1d51dd4b09fc33a1515e92d9143c5937de157&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGIG3Y3S%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T071034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtJjPMEJysDwtW0e5HlwibVxz%2BFfC7gG%2BFNlJTM%2FtDUgIhAKl%2B8fwJsi9pmjhUcq7YI31mmXPhFQOjI0YlayjvEu5HKv8DCBAQABoMNjM3NDIzMTgzODA1IgyJU%2F%2BYLJ2KjXZTquYq3ANQ1zTAXUjhNc8YFxs876HiJIw9sjierSBVqJc69fvfrMaNs6ljL5xiVVkV4cc22FY9Um42Zp65ewEhZ%2BQsQ3Ec2JcPtVzcof%2F%2FN8qpAk7uMidfKRjPM7z594D%2FkSCgp2OoZXVmLsNSRy14ss9ou%2BSs6%2BjsnIrsuY5nBQN2%2FNBV4v76L%2Bl26%2Brl5z1nmZLELq34toUD8DJP47YjS7g5kthLwu9E8ZTrt27O6gFRse8UMiRPkPU7grW6aZQyrWBWOiuNFZjkqTE9AjWbR%2FWLxABrnRYwWqqPe7fE1%2FJEg3%2Bs1oMDqSFwvB6rrJ9wHu%2B5cL6X78WTnaMZYRZqtn%2Fd2%2FezF3WM9XNQPbApmAxhDU3jJgsrWwBYspy4YFUqRch6RIpaRgbxk51uKS3w9ZenEi1XWZNDVK3ItMQWelrDLzci1%2FfpK8gOX86P9rBteAuk624Ez3aN1gqlwwo32wDt%2Bz3FtIOIRVP2O6flo%2Bh8HrSGqrGESD%2Fi4kgZZmo46kbOLWgq8SpiBCUP%2FDM62rqbnplTRtaLf7r8M5c36SApUAJCdOGWdwVritu1d70er0Cg6iitckhFSgcIxALisy8dnTHpBFeFhPaC9bQKgx9UfBdzbZ%2BuZXiNoHo7LrLnOjCCpM3DBjqkARHjI80VE1FwldDuU1vJqi83oUmKQP1oxp7ehxqEaK9Pcg%2F7oAtJ0RnL33fzGle%2Bk0GK%2FeO26ThaSy%2FNK4Zq0%2B%2B6wF4xpztM%2Fdlzp%2B8nU51oq%2BBHyFwSdTIovRSbAFU26%2BQFOhWduZcfLzB0VAIYGw8i04fFMOzQFTRIoPo3DB%2BX4txnzmxiYmf5JzDOEe45160CSF91AftfrWGY3XGcNR%2BE2xzJ&X-Amz-Signature=5b86fe6618c2a3a1fa108331c0a32e073cea2d5548fd3fadba4d27c32713e306&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
