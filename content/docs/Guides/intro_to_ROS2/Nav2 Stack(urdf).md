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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FNPUGOU%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T190300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQD16QzW8T8RcPYYcpfWkh3XsLE8NkcwPQgdnWApWttSXwIgFanDYRYd3SNY2QXfdRRSubcf6In6nFVW%2FDUMvtZgQmgq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDO4hyWkFH9SwQPLwdircA%2BMXnsuERWPnyujeiZm%2B7i5vZX3XZc75zCmertxZkkgxE8WurjXwfZ8uoiwmqtEzCCdxXMU6e0T2rJgASxIlHLl5nr4flMz0lqQnMpjdqr%2FvlRCpvVGRKUnHJY76SmF3g5shdL%2BKD8AcH8RwWtk8bT%2BA%2BV9ESYzJWc8kMB%2FkiqzfJTQAEEOB7h6z6cdcOussHADPe8Xl4KAxFHGfYDEJ0m0NuTUG36VautupzRRpKTxy0wABE1zSWeB3YRSlmdzruM09Vj3sYuvVnrzkakYzJ9ebgRFh5TB9KFqnuG9WN3g34IePQ1IvXVtwrymL7ll1WVbMwA3RqpgtLINv8R9gvNHToSZrK%2BFpMjhrVm%2FMj%2F8rkVMUar3QMiLwBBSMg6lxwDmOuTOSfdxFpGYA9q4CVzf94gvaBpMJVk3fSOlbFa8E2cmY9gdAcuPyNb9lZTd09XCO5t4vVfJ1NbVApxUJtM2Hri4KWi8uYvDcvIUAiTRW%2FA6h3lM4bQZZ0yLl0AOyXrMRUFGWq%2BoSOseV%2Bam6ix9L6dLF58mdfdL6lh3Gayj0iGg6PFO5WPMVTZu5KXElmqYvW%2BLP0bbdbte0hC4OrAIJ9B%2BeNtcl16yuSPkRUTQDLpRXm3EWwW2EYp6PMNb6tsIGOqUBSwhngJ7ME%2F08n%2BtJ1aMqCZBW7IeQpVWTjIKF6O%2B7QTsgwwr5fQ9jg20NWYBCnpDEoB6TA6hzXDiirrsKETXJOQmKEJZlXRQx9NbQGDNS1HouvL5R0dN8VnObdWBLCfbGb%2BaLeac7b912toGkSoc1F%2F7C49%2F8ftUz8p2Z38etro48%2BkcrRXGBVRhprao4x7kYoV6A1turKmPMf6E0%2F9VgOgxUz1vX&X-Amz-Signature=26dc036d40358f066450594dbd5b4f815aef5711b840d0426a898bd53411d451&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FNPUGOU%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T190300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQD16QzW8T8RcPYYcpfWkh3XsLE8NkcwPQgdnWApWttSXwIgFanDYRYd3SNY2QXfdRRSubcf6In6nFVW%2FDUMvtZgQmgq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDO4hyWkFH9SwQPLwdircA%2BMXnsuERWPnyujeiZm%2B7i5vZX3XZc75zCmertxZkkgxE8WurjXwfZ8uoiwmqtEzCCdxXMU6e0T2rJgASxIlHLl5nr4flMz0lqQnMpjdqr%2FvlRCpvVGRKUnHJY76SmF3g5shdL%2BKD8AcH8RwWtk8bT%2BA%2BV9ESYzJWc8kMB%2FkiqzfJTQAEEOB7h6z6cdcOussHADPe8Xl4KAxFHGfYDEJ0m0NuTUG36VautupzRRpKTxy0wABE1zSWeB3YRSlmdzruM09Vj3sYuvVnrzkakYzJ9ebgRFh5TB9KFqnuG9WN3g34IePQ1IvXVtwrymL7ll1WVbMwA3RqpgtLINv8R9gvNHToSZrK%2BFpMjhrVm%2FMj%2F8rkVMUar3QMiLwBBSMg6lxwDmOuTOSfdxFpGYA9q4CVzf94gvaBpMJVk3fSOlbFa8E2cmY9gdAcuPyNb9lZTd09XCO5t4vVfJ1NbVApxUJtM2Hri4KWi8uYvDcvIUAiTRW%2FA6h3lM4bQZZ0yLl0AOyXrMRUFGWq%2BoSOseV%2Bam6ix9L6dLF58mdfdL6lh3Gayj0iGg6PFO5WPMVTZu5KXElmqYvW%2BLP0bbdbte0hC4OrAIJ9B%2BeNtcl16yuSPkRUTQDLpRXm3EWwW2EYp6PMNb6tsIGOqUBSwhngJ7ME%2F08n%2BtJ1aMqCZBW7IeQpVWTjIKF6O%2B7QTsgwwr5fQ9jg20NWYBCnpDEoB6TA6hzXDiirrsKETXJOQmKEJZlXRQx9NbQGDNS1HouvL5R0dN8VnObdWBLCfbGb%2BaLeac7b912toGkSoc1F%2F7C49%2F8ftUz8p2Z38etro48%2BkcrRXGBVRhprao4x7kYoV6A1turKmPMf6E0%2F9VgOgxUz1vX&X-Amz-Signature=4e5e5eaf6da53264aafc468b9875ccef40cb6ee38d1a86d91838a73530e6d740&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FNPUGOU%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T190300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQD16QzW8T8RcPYYcpfWkh3XsLE8NkcwPQgdnWApWttSXwIgFanDYRYd3SNY2QXfdRRSubcf6In6nFVW%2FDUMvtZgQmgq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDO4hyWkFH9SwQPLwdircA%2BMXnsuERWPnyujeiZm%2B7i5vZX3XZc75zCmertxZkkgxE8WurjXwfZ8uoiwmqtEzCCdxXMU6e0T2rJgASxIlHLl5nr4flMz0lqQnMpjdqr%2FvlRCpvVGRKUnHJY76SmF3g5shdL%2BKD8AcH8RwWtk8bT%2BA%2BV9ESYzJWc8kMB%2FkiqzfJTQAEEOB7h6z6cdcOussHADPe8Xl4KAxFHGfYDEJ0m0NuTUG36VautupzRRpKTxy0wABE1zSWeB3YRSlmdzruM09Vj3sYuvVnrzkakYzJ9ebgRFh5TB9KFqnuG9WN3g34IePQ1IvXVtwrymL7ll1WVbMwA3RqpgtLINv8R9gvNHToSZrK%2BFpMjhrVm%2FMj%2F8rkVMUar3QMiLwBBSMg6lxwDmOuTOSfdxFpGYA9q4CVzf94gvaBpMJVk3fSOlbFa8E2cmY9gdAcuPyNb9lZTd09XCO5t4vVfJ1NbVApxUJtM2Hri4KWi8uYvDcvIUAiTRW%2FA6h3lM4bQZZ0yLl0AOyXrMRUFGWq%2BoSOseV%2Bam6ix9L6dLF58mdfdL6lh3Gayj0iGg6PFO5WPMVTZu5KXElmqYvW%2BLP0bbdbte0hC4OrAIJ9B%2BeNtcl16yuSPkRUTQDLpRXm3EWwW2EYp6PMNb6tsIGOqUBSwhngJ7ME%2F08n%2BtJ1aMqCZBW7IeQpVWTjIKF6O%2B7QTsgwwr5fQ9jg20NWYBCnpDEoB6TA6hzXDiirrsKETXJOQmKEJZlXRQx9NbQGDNS1HouvL5R0dN8VnObdWBLCfbGb%2BaLeac7b912toGkSoc1F%2F7C49%2F8ftUz8p2Z38etro48%2BkcrRXGBVRhprao4x7kYoV6A1turKmPMf6E0%2F9VgOgxUz1vX&X-Amz-Signature=149a9fc5b6193d17a14ee024c8704a901466d4db3cfd8149b0aed079197f0ab2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FNPUGOU%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T190300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQD16QzW8T8RcPYYcpfWkh3XsLE8NkcwPQgdnWApWttSXwIgFanDYRYd3SNY2QXfdRRSubcf6In6nFVW%2FDUMvtZgQmgq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDO4hyWkFH9SwQPLwdircA%2BMXnsuERWPnyujeiZm%2B7i5vZX3XZc75zCmertxZkkgxE8WurjXwfZ8uoiwmqtEzCCdxXMU6e0T2rJgASxIlHLl5nr4flMz0lqQnMpjdqr%2FvlRCpvVGRKUnHJY76SmF3g5shdL%2BKD8AcH8RwWtk8bT%2BA%2BV9ESYzJWc8kMB%2FkiqzfJTQAEEOB7h6z6cdcOussHADPe8Xl4KAxFHGfYDEJ0m0NuTUG36VautupzRRpKTxy0wABE1zSWeB3YRSlmdzruM09Vj3sYuvVnrzkakYzJ9ebgRFh5TB9KFqnuG9WN3g34IePQ1IvXVtwrymL7ll1WVbMwA3RqpgtLINv8R9gvNHToSZrK%2BFpMjhrVm%2FMj%2F8rkVMUar3QMiLwBBSMg6lxwDmOuTOSfdxFpGYA9q4CVzf94gvaBpMJVk3fSOlbFa8E2cmY9gdAcuPyNb9lZTd09XCO5t4vVfJ1NbVApxUJtM2Hri4KWi8uYvDcvIUAiTRW%2FA6h3lM4bQZZ0yLl0AOyXrMRUFGWq%2BoSOseV%2Bam6ix9L6dLF58mdfdL6lh3Gayj0iGg6PFO5WPMVTZu5KXElmqYvW%2BLP0bbdbte0hC4OrAIJ9B%2BeNtcl16yuSPkRUTQDLpRXm3EWwW2EYp6PMNb6tsIGOqUBSwhngJ7ME%2F08n%2BtJ1aMqCZBW7IeQpVWTjIKF6O%2B7QTsgwwr5fQ9jg20NWYBCnpDEoB6TA6hzXDiirrsKETXJOQmKEJZlXRQx9NbQGDNS1HouvL5R0dN8VnObdWBLCfbGb%2BaLeac7b912toGkSoc1F%2F7C49%2F8ftUz8p2Z38etro48%2BkcrRXGBVRhprao4x7kYoV6A1turKmPMf6E0%2F9VgOgxUz1vX&X-Amz-Signature=2e5749b88ce26a074ad2cdc8f76e6f0ab11afdcbe22a63d042751fffa1fb958d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FNPUGOU%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T190300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQD16QzW8T8RcPYYcpfWkh3XsLE8NkcwPQgdnWApWttSXwIgFanDYRYd3SNY2QXfdRRSubcf6In6nFVW%2FDUMvtZgQmgq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDO4hyWkFH9SwQPLwdircA%2BMXnsuERWPnyujeiZm%2B7i5vZX3XZc75zCmertxZkkgxE8WurjXwfZ8uoiwmqtEzCCdxXMU6e0T2rJgASxIlHLl5nr4flMz0lqQnMpjdqr%2FvlRCpvVGRKUnHJY76SmF3g5shdL%2BKD8AcH8RwWtk8bT%2BA%2BV9ESYzJWc8kMB%2FkiqzfJTQAEEOB7h6z6cdcOussHADPe8Xl4KAxFHGfYDEJ0m0NuTUG36VautupzRRpKTxy0wABE1zSWeB3YRSlmdzruM09Vj3sYuvVnrzkakYzJ9ebgRFh5TB9KFqnuG9WN3g34IePQ1IvXVtwrymL7ll1WVbMwA3RqpgtLINv8R9gvNHToSZrK%2BFpMjhrVm%2FMj%2F8rkVMUar3QMiLwBBSMg6lxwDmOuTOSfdxFpGYA9q4CVzf94gvaBpMJVk3fSOlbFa8E2cmY9gdAcuPyNb9lZTd09XCO5t4vVfJ1NbVApxUJtM2Hri4KWi8uYvDcvIUAiTRW%2FA6h3lM4bQZZ0yLl0AOyXrMRUFGWq%2BoSOseV%2Bam6ix9L6dLF58mdfdL6lh3Gayj0iGg6PFO5WPMVTZu5KXElmqYvW%2BLP0bbdbte0hC4OrAIJ9B%2BeNtcl16yuSPkRUTQDLpRXm3EWwW2EYp6PMNb6tsIGOqUBSwhngJ7ME%2F08n%2BtJ1aMqCZBW7IeQpVWTjIKF6O%2B7QTsgwwr5fQ9jg20NWYBCnpDEoB6TA6hzXDiirrsKETXJOQmKEJZlXRQx9NbQGDNS1HouvL5R0dN8VnObdWBLCfbGb%2BaLeac7b912toGkSoc1F%2F7C49%2F8ftUz8p2Z38etro48%2BkcrRXGBVRhprao4x7kYoV6A1turKmPMf6E0%2F9VgOgxUz1vX&X-Amz-Signature=59b0db92106062788042d728498f36194b62812164d83dbb47ca3668becdba92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FNPUGOU%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T190300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQD16QzW8T8RcPYYcpfWkh3XsLE8NkcwPQgdnWApWttSXwIgFanDYRYd3SNY2QXfdRRSubcf6In6nFVW%2FDUMvtZgQmgq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDO4hyWkFH9SwQPLwdircA%2BMXnsuERWPnyujeiZm%2B7i5vZX3XZc75zCmertxZkkgxE8WurjXwfZ8uoiwmqtEzCCdxXMU6e0T2rJgASxIlHLl5nr4flMz0lqQnMpjdqr%2FvlRCpvVGRKUnHJY76SmF3g5shdL%2BKD8AcH8RwWtk8bT%2BA%2BV9ESYzJWc8kMB%2FkiqzfJTQAEEOB7h6z6cdcOussHADPe8Xl4KAxFHGfYDEJ0m0NuTUG36VautupzRRpKTxy0wABE1zSWeB3YRSlmdzruM09Vj3sYuvVnrzkakYzJ9ebgRFh5TB9KFqnuG9WN3g34IePQ1IvXVtwrymL7ll1WVbMwA3RqpgtLINv8R9gvNHToSZrK%2BFpMjhrVm%2FMj%2F8rkVMUar3QMiLwBBSMg6lxwDmOuTOSfdxFpGYA9q4CVzf94gvaBpMJVk3fSOlbFa8E2cmY9gdAcuPyNb9lZTd09XCO5t4vVfJ1NbVApxUJtM2Hri4KWi8uYvDcvIUAiTRW%2FA6h3lM4bQZZ0yLl0AOyXrMRUFGWq%2BoSOseV%2Bam6ix9L6dLF58mdfdL6lh3Gayj0iGg6PFO5WPMVTZu5KXElmqYvW%2BLP0bbdbte0hC4OrAIJ9B%2BeNtcl16yuSPkRUTQDLpRXm3EWwW2EYp6PMNb6tsIGOqUBSwhngJ7ME%2F08n%2BtJ1aMqCZBW7IeQpVWTjIKF6O%2B7QTsgwwr5fQ9jg20NWYBCnpDEoB6TA6hzXDiirrsKETXJOQmKEJZlXRQx9NbQGDNS1HouvL5R0dN8VnObdWBLCfbGb%2BaLeac7b912toGkSoc1F%2F7C49%2F8ftUz8p2Z38etro48%2BkcrRXGBVRhprao4x7kYoV6A1turKmPMf6E0%2F9VgOgxUz1vX&X-Amz-Signature=1587afc681ffb65402c527b899ef9936cf6e00d1f317ee93f8b326b2b389b946&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
