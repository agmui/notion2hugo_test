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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIBKU4MG%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T160811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLKNHWjhwpq4rG4%2BPklKZ2q6neNtp0CI8lDsp7XbUYCgIgHyjaHXIIn0ADBecgbpTG1SW%2FJAG5HL0Cx5E6UOYjsacq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDJZlghc3vahFOiAjyrcA1UMiG1liI%2FpzYJXxNtHcJtGaLGhQtOUeXP%2FBeJndRy50jjpFL%2FgEsQFaZ599pkzYmyX2jLUZw9iGXbSI9CPa4Rn99O6RhPb2VuWSdCmYUmcyXNfcQ%2BGhAyE7E5rs%2FRHHbNA38Dshq9SVcTm2ZmsCLvd6ZVaqNZ8fXzdhSIEUXU%2BVXlSMEUQDfplzmqXdTzD2BbAsea88tt22BjunOaycKEdEZDIsDNgHtE4xDxM7JreDMJKWISuzYQ2F9jbs9tKsXqlXAf3TjthXSD80vokkDnoIGrW6j6KxUoX9EoX644AH4h6jbdqKa79mR%2Bz8pZbHAC3GGpRmTCu%2Fw0eDBFOY6fnGy7c8o%2FhIg0QDSuf2OjoV2LcwSyzzUWVsiO1mumdOm3WuSnH2MwJ%2B7uGVBcldC4OJpIkc0op4rAw4c2jqxjEBrun5LsT0tm7gFGKX2AaLr7QFP8%2F%2BbAqLDfGrRXHI%2BttXFEjiw5pMaTGGaNVyCpCSV%2Bp317lI7CZzortCzDLki7CecUblHsLps0MlRb1tcSAxGlX6r3TAL6Isutb5ZIAvCOP358N%2BoL%2FQYZp%2BDNH7jr0HqOwTEYMO03LSZfkQ%2Bs3Dsqt95r01h2GCrIKSWLPJhSqxycB%2FVHALkNwMPGjxb8GOqUBvpA6U3QQ6Zl5c4qh81gKhaiKK2rE3fAN7gLd%2FUcXe7J21%2FtLhBJjsWNfr%2B9oCCw1yDPv%2FaE%2FnX%2Bv3oxEMQtADU7mqGimb6OQJ%2BiLFqXNqocCVl5eYA0hQgJ03YFuJFc9lsK1M8N46lZpsT%2FvsRHstjN8RdkuZ1nz1eYwaf%2BOj5v5DsdLOd6yArTHhcx%2FVG5E2p5JD7DCoSOla43ixkG3CwBeUNUW&X-Amz-Signature=1c13dffcf9434bd1f4dd7938980cf8a10bc56ed7fbf7b6906010e349ac4ba57f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIBKU4MG%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T160811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLKNHWjhwpq4rG4%2BPklKZ2q6neNtp0CI8lDsp7XbUYCgIgHyjaHXIIn0ADBecgbpTG1SW%2FJAG5HL0Cx5E6UOYjsacq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDJZlghc3vahFOiAjyrcA1UMiG1liI%2FpzYJXxNtHcJtGaLGhQtOUeXP%2FBeJndRy50jjpFL%2FgEsQFaZ599pkzYmyX2jLUZw9iGXbSI9CPa4Rn99O6RhPb2VuWSdCmYUmcyXNfcQ%2BGhAyE7E5rs%2FRHHbNA38Dshq9SVcTm2ZmsCLvd6ZVaqNZ8fXzdhSIEUXU%2BVXlSMEUQDfplzmqXdTzD2BbAsea88tt22BjunOaycKEdEZDIsDNgHtE4xDxM7JreDMJKWISuzYQ2F9jbs9tKsXqlXAf3TjthXSD80vokkDnoIGrW6j6KxUoX9EoX644AH4h6jbdqKa79mR%2Bz8pZbHAC3GGpRmTCu%2Fw0eDBFOY6fnGy7c8o%2FhIg0QDSuf2OjoV2LcwSyzzUWVsiO1mumdOm3WuSnH2MwJ%2B7uGVBcldC4OJpIkc0op4rAw4c2jqxjEBrun5LsT0tm7gFGKX2AaLr7QFP8%2F%2BbAqLDfGrRXHI%2BttXFEjiw5pMaTGGaNVyCpCSV%2Bp317lI7CZzortCzDLki7CecUblHsLps0MlRb1tcSAxGlX6r3TAL6Isutb5ZIAvCOP358N%2BoL%2FQYZp%2BDNH7jr0HqOwTEYMO03LSZfkQ%2Bs3Dsqt95r01h2GCrIKSWLPJhSqxycB%2FVHALkNwMPGjxb8GOqUBvpA6U3QQ6Zl5c4qh81gKhaiKK2rE3fAN7gLd%2FUcXe7J21%2FtLhBJjsWNfr%2B9oCCw1yDPv%2FaE%2FnX%2Bv3oxEMQtADU7mqGimb6OQJ%2BiLFqXNqocCVl5eYA0hQgJ03YFuJFc9lsK1M8N46lZpsT%2FvsRHstjN8RdkuZ1nz1eYwaf%2BOj5v5DsdLOd6yArTHhcx%2FVG5E2p5JD7DCoSOla43ixkG3CwBeUNUW&X-Amz-Signature=aad4976c5925a280fa4b62149d165da1bf45e4270fd97c6cc30e8ed89cd4e4b4&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIBKU4MG%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T160811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLKNHWjhwpq4rG4%2BPklKZ2q6neNtp0CI8lDsp7XbUYCgIgHyjaHXIIn0ADBecgbpTG1SW%2FJAG5HL0Cx5E6UOYjsacq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDJZlghc3vahFOiAjyrcA1UMiG1liI%2FpzYJXxNtHcJtGaLGhQtOUeXP%2FBeJndRy50jjpFL%2FgEsQFaZ599pkzYmyX2jLUZw9iGXbSI9CPa4Rn99O6RhPb2VuWSdCmYUmcyXNfcQ%2BGhAyE7E5rs%2FRHHbNA38Dshq9SVcTm2ZmsCLvd6ZVaqNZ8fXzdhSIEUXU%2BVXlSMEUQDfplzmqXdTzD2BbAsea88tt22BjunOaycKEdEZDIsDNgHtE4xDxM7JreDMJKWISuzYQ2F9jbs9tKsXqlXAf3TjthXSD80vokkDnoIGrW6j6KxUoX9EoX644AH4h6jbdqKa79mR%2Bz8pZbHAC3GGpRmTCu%2Fw0eDBFOY6fnGy7c8o%2FhIg0QDSuf2OjoV2LcwSyzzUWVsiO1mumdOm3WuSnH2MwJ%2B7uGVBcldC4OJpIkc0op4rAw4c2jqxjEBrun5LsT0tm7gFGKX2AaLr7QFP8%2F%2BbAqLDfGrRXHI%2BttXFEjiw5pMaTGGaNVyCpCSV%2Bp317lI7CZzortCzDLki7CecUblHsLps0MlRb1tcSAxGlX6r3TAL6Isutb5ZIAvCOP358N%2BoL%2FQYZp%2BDNH7jr0HqOwTEYMO03LSZfkQ%2Bs3Dsqt95r01h2GCrIKSWLPJhSqxycB%2FVHALkNwMPGjxb8GOqUBvpA6U3QQ6Zl5c4qh81gKhaiKK2rE3fAN7gLd%2FUcXe7J21%2FtLhBJjsWNfr%2B9oCCw1yDPv%2FaE%2FnX%2Bv3oxEMQtADU7mqGimb6OQJ%2BiLFqXNqocCVl5eYA0hQgJ03YFuJFc9lsK1M8N46lZpsT%2FvsRHstjN8RdkuZ1nz1eYwaf%2BOj5v5DsdLOd6yArTHhcx%2FVG5E2p5JD7DCoSOla43ixkG3CwBeUNUW&X-Amz-Signature=bc974bc7cf7a350250a2609884511d6bee5c77bb04b81390fe7298e82a574290&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIBKU4MG%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T160811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLKNHWjhwpq4rG4%2BPklKZ2q6neNtp0CI8lDsp7XbUYCgIgHyjaHXIIn0ADBecgbpTG1SW%2FJAG5HL0Cx5E6UOYjsacq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDJZlghc3vahFOiAjyrcA1UMiG1liI%2FpzYJXxNtHcJtGaLGhQtOUeXP%2FBeJndRy50jjpFL%2FgEsQFaZ599pkzYmyX2jLUZw9iGXbSI9CPa4Rn99O6RhPb2VuWSdCmYUmcyXNfcQ%2BGhAyE7E5rs%2FRHHbNA38Dshq9SVcTm2ZmsCLvd6ZVaqNZ8fXzdhSIEUXU%2BVXlSMEUQDfplzmqXdTzD2BbAsea88tt22BjunOaycKEdEZDIsDNgHtE4xDxM7JreDMJKWISuzYQ2F9jbs9tKsXqlXAf3TjthXSD80vokkDnoIGrW6j6KxUoX9EoX644AH4h6jbdqKa79mR%2Bz8pZbHAC3GGpRmTCu%2Fw0eDBFOY6fnGy7c8o%2FhIg0QDSuf2OjoV2LcwSyzzUWVsiO1mumdOm3WuSnH2MwJ%2B7uGVBcldC4OJpIkc0op4rAw4c2jqxjEBrun5LsT0tm7gFGKX2AaLr7QFP8%2F%2BbAqLDfGrRXHI%2BttXFEjiw5pMaTGGaNVyCpCSV%2Bp317lI7CZzortCzDLki7CecUblHsLps0MlRb1tcSAxGlX6r3TAL6Isutb5ZIAvCOP358N%2BoL%2FQYZp%2BDNH7jr0HqOwTEYMO03LSZfkQ%2Bs3Dsqt95r01h2GCrIKSWLPJhSqxycB%2FVHALkNwMPGjxb8GOqUBvpA6U3QQ6Zl5c4qh81gKhaiKK2rE3fAN7gLd%2FUcXe7J21%2FtLhBJjsWNfr%2B9oCCw1yDPv%2FaE%2FnX%2Bv3oxEMQtADU7mqGimb6OQJ%2BiLFqXNqocCVl5eYA0hQgJ03YFuJFc9lsK1M8N46lZpsT%2FvsRHstjN8RdkuZ1nz1eYwaf%2BOj5v5DsdLOd6yArTHhcx%2FVG5E2p5JD7DCoSOla43ixkG3CwBeUNUW&X-Amz-Signature=0deafe996ef02f9dc5188e94fa7e38fec237e4d6b50998c58be147352a619da1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIBKU4MG%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T160811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLKNHWjhwpq4rG4%2BPklKZ2q6neNtp0CI8lDsp7XbUYCgIgHyjaHXIIn0ADBecgbpTG1SW%2FJAG5HL0Cx5E6UOYjsacq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDJZlghc3vahFOiAjyrcA1UMiG1liI%2FpzYJXxNtHcJtGaLGhQtOUeXP%2FBeJndRy50jjpFL%2FgEsQFaZ599pkzYmyX2jLUZw9iGXbSI9CPa4Rn99O6RhPb2VuWSdCmYUmcyXNfcQ%2BGhAyE7E5rs%2FRHHbNA38Dshq9SVcTm2ZmsCLvd6ZVaqNZ8fXzdhSIEUXU%2BVXlSMEUQDfplzmqXdTzD2BbAsea88tt22BjunOaycKEdEZDIsDNgHtE4xDxM7JreDMJKWISuzYQ2F9jbs9tKsXqlXAf3TjthXSD80vokkDnoIGrW6j6KxUoX9EoX644AH4h6jbdqKa79mR%2Bz8pZbHAC3GGpRmTCu%2Fw0eDBFOY6fnGy7c8o%2FhIg0QDSuf2OjoV2LcwSyzzUWVsiO1mumdOm3WuSnH2MwJ%2B7uGVBcldC4OJpIkc0op4rAw4c2jqxjEBrun5LsT0tm7gFGKX2AaLr7QFP8%2F%2BbAqLDfGrRXHI%2BttXFEjiw5pMaTGGaNVyCpCSV%2Bp317lI7CZzortCzDLki7CecUblHsLps0MlRb1tcSAxGlX6r3TAL6Isutb5ZIAvCOP358N%2BoL%2FQYZp%2BDNH7jr0HqOwTEYMO03LSZfkQ%2Bs3Dsqt95r01h2GCrIKSWLPJhSqxycB%2FVHALkNwMPGjxb8GOqUBvpA6U3QQ6Zl5c4qh81gKhaiKK2rE3fAN7gLd%2FUcXe7J21%2FtLhBJjsWNfr%2B9oCCw1yDPv%2FaE%2FnX%2Bv3oxEMQtADU7mqGimb6OQJ%2BiLFqXNqocCVl5eYA0hQgJ03YFuJFc9lsK1M8N46lZpsT%2FvsRHstjN8RdkuZ1nz1eYwaf%2BOj5v5DsdLOd6yArTHhcx%2FVG5E2p5JD7DCoSOla43ixkG3CwBeUNUW&X-Amz-Signature=c6434aac0fc21aa3f7e1154a975cb5dd212a21324dc008ab8ae599ee9477a6af&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIBKU4MG%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T160811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLKNHWjhwpq4rG4%2BPklKZ2q6neNtp0CI8lDsp7XbUYCgIgHyjaHXIIn0ADBecgbpTG1SW%2FJAG5HL0Cx5E6UOYjsacq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDDJZlghc3vahFOiAjyrcA1UMiG1liI%2FpzYJXxNtHcJtGaLGhQtOUeXP%2FBeJndRy50jjpFL%2FgEsQFaZ599pkzYmyX2jLUZw9iGXbSI9CPa4Rn99O6RhPb2VuWSdCmYUmcyXNfcQ%2BGhAyE7E5rs%2FRHHbNA38Dshq9SVcTm2ZmsCLvd6ZVaqNZ8fXzdhSIEUXU%2BVXlSMEUQDfplzmqXdTzD2BbAsea88tt22BjunOaycKEdEZDIsDNgHtE4xDxM7JreDMJKWISuzYQ2F9jbs9tKsXqlXAf3TjthXSD80vokkDnoIGrW6j6KxUoX9EoX644AH4h6jbdqKa79mR%2Bz8pZbHAC3GGpRmTCu%2Fw0eDBFOY6fnGy7c8o%2FhIg0QDSuf2OjoV2LcwSyzzUWVsiO1mumdOm3WuSnH2MwJ%2B7uGVBcldC4OJpIkc0op4rAw4c2jqxjEBrun5LsT0tm7gFGKX2AaLr7QFP8%2F%2BbAqLDfGrRXHI%2BttXFEjiw5pMaTGGaNVyCpCSV%2Bp317lI7CZzortCzDLki7CecUblHsLps0MlRb1tcSAxGlX6r3TAL6Isutb5ZIAvCOP358N%2BoL%2FQYZp%2BDNH7jr0HqOwTEYMO03LSZfkQ%2Bs3Dsqt95r01h2GCrIKSWLPJhSqxycB%2FVHALkNwMPGjxb8GOqUBvpA6U3QQ6Zl5c4qh81gKhaiKK2rE3fAN7gLd%2FUcXe7J21%2FtLhBJjsWNfr%2B9oCCw1yDPv%2FaE%2FnX%2Bv3oxEMQtADU7mqGimb6OQJ%2BiLFqXNqocCVl5eYA0hQgJ03YFuJFc9lsK1M8N46lZpsT%2FvsRHstjN8RdkuZ1nz1eYwaf%2BOj5v5DsdLOd6yArTHhcx%2FVG5E2p5JD7DCoSOla43ixkG3CwBeUNUW&X-Amz-Signature=d751d7c0e06a297cd53888ebb4e8227d6095ec53962150bb32fbf9aeb14b6427&X-Amz-SignedHeaders=host&x-id=GetObject)
