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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNE6X7H6%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQC3sOdB%2B9HC2JLsI%2FkAU5P3%2FPgT%2FwZfSsN85y49LgUcIgIgP9Ax83tHN02L6eGh1RVGuh%2Bs0ml5iKnsi%2Bhwmh9z8hgqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPngcOwRz000PGW6GircA%2BEPyaDFyOn2fQC8Bi0tGHb09v6l7vJdAzxbrVPuUZpwGt8rryjYX%2FFXX9R1wyHV7Yg2SlSGo6CF5LAAfIeszmiA96%2BZFJDCdROgCyAWjczNqjk61uBjZiFSO6IAfmdJZXwVlL31j%2BlxG2RIj7NFlAeUjdA2jNjcM2rz2JmcgSVW33jR8f9YPtL5HvHkirTDFKdb0uAcwPSm%2Bldv7NGuuO0ldtuJAIJm15bxUDPeZFJQPbLLsSDIwxKh2G3wOPz7Gr0%2F%2Fzd8z82KxLjyyFseArZ3pEqch4%2BeMBuINffdDbTe7bU0MowTsvnjJfLbymBLcLD%2BcVGxZNFLpAxcldpwmoeLsjcJi5x1ChuMTNFtxxopxKF%2BlQux%2FuPdA6MmUDNNdDNRIYVzleDUHLypHWLygbekRAORc%2B3lBXEDmZi9d%2FJMfmFKIMRADtixqeBJK%2ByZFgCa0bjRMbZoMJxq5ol85DaeuhY3m5mihYYft6Yp1E2A0doAaVE8x%2BZXya7hQubBLD4un0snlgbUQoq4uZZZDZrUiIXkyJ%2FBAwzYtGUIAmJBrHRDwCVcmglLkIAZp51LQEOh2t96lkTjBvSEeb0imCLwyZeRF%2Bf%2FfFLMJ5cDdZgApRjp%2FkPPIivBray1MJyap8IGOqUBy0snv8tRh5lY0fArVEYXCbtwAyZm58gGxDJ3ZCJyu9PyJ9u3CtjwYSdXAFg7ZmIsoom0gjbLsZw4XWa1iGgpoCin0cJ2VjvZ9hIAUS%2Ba1%2FP7GuXjXUsgxq%2BcAOYkfXVMEBY%2FmSDwdMPnaj8KWiP2uu4uPoG5ON42rO%2BC1yrwEFtdJ2yeVvmUDDjt%2FfRqlYtQz%2FVvhVg0MMDpI9YVlfAL%2B3OTThhP&X-Amz-Signature=8318fb52a1209ec7f47d7306a4135c8fa26a3f4de8ba82c7687501c2c59a0db7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNE6X7H6%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQC3sOdB%2B9HC2JLsI%2FkAU5P3%2FPgT%2FwZfSsN85y49LgUcIgIgP9Ax83tHN02L6eGh1RVGuh%2Bs0ml5iKnsi%2Bhwmh9z8hgqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPngcOwRz000PGW6GircA%2BEPyaDFyOn2fQC8Bi0tGHb09v6l7vJdAzxbrVPuUZpwGt8rryjYX%2FFXX9R1wyHV7Yg2SlSGo6CF5LAAfIeszmiA96%2BZFJDCdROgCyAWjczNqjk61uBjZiFSO6IAfmdJZXwVlL31j%2BlxG2RIj7NFlAeUjdA2jNjcM2rz2JmcgSVW33jR8f9YPtL5HvHkirTDFKdb0uAcwPSm%2Bldv7NGuuO0ldtuJAIJm15bxUDPeZFJQPbLLsSDIwxKh2G3wOPz7Gr0%2F%2Fzd8z82KxLjyyFseArZ3pEqch4%2BeMBuINffdDbTe7bU0MowTsvnjJfLbymBLcLD%2BcVGxZNFLpAxcldpwmoeLsjcJi5x1ChuMTNFtxxopxKF%2BlQux%2FuPdA6MmUDNNdDNRIYVzleDUHLypHWLygbekRAORc%2B3lBXEDmZi9d%2FJMfmFKIMRADtixqeBJK%2ByZFgCa0bjRMbZoMJxq5ol85DaeuhY3m5mihYYft6Yp1E2A0doAaVE8x%2BZXya7hQubBLD4un0snlgbUQoq4uZZZDZrUiIXkyJ%2FBAwzYtGUIAmJBrHRDwCVcmglLkIAZp51LQEOh2t96lkTjBvSEeb0imCLwyZeRF%2Bf%2FfFLMJ5cDdZgApRjp%2FkPPIivBray1MJyap8IGOqUBy0snv8tRh5lY0fArVEYXCbtwAyZm58gGxDJ3ZCJyu9PyJ9u3CtjwYSdXAFg7ZmIsoom0gjbLsZw4XWa1iGgpoCin0cJ2VjvZ9hIAUS%2Ba1%2FP7GuXjXUsgxq%2BcAOYkfXVMEBY%2FmSDwdMPnaj8KWiP2uu4uPoG5ON42rO%2BC1yrwEFtdJ2yeVvmUDDjt%2FfRqlYtQz%2FVvhVg0MMDpI9YVlfAL%2B3OTThhP&X-Amz-Signature=bd036b90e468e6b167adc99f4e4b294a54df72568bc2c88b536e21b7ff6dd920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNE6X7H6%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQC3sOdB%2B9HC2JLsI%2FkAU5P3%2FPgT%2FwZfSsN85y49LgUcIgIgP9Ax83tHN02L6eGh1RVGuh%2Bs0ml5iKnsi%2Bhwmh9z8hgqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPngcOwRz000PGW6GircA%2BEPyaDFyOn2fQC8Bi0tGHb09v6l7vJdAzxbrVPuUZpwGt8rryjYX%2FFXX9R1wyHV7Yg2SlSGo6CF5LAAfIeszmiA96%2BZFJDCdROgCyAWjczNqjk61uBjZiFSO6IAfmdJZXwVlL31j%2BlxG2RIj7NFlAeUjdA2jNjcM2rz2JmcgSVW33jR8f9YPtL5HvHkirTDFKdb0uAcwPSm%2Bldv7NGuuO0ldtuJAIJm15bxUDPeZFJQPbLLsSDIwxKh2G3wOPz7Gr0%2F%2Fzd8z82KxLjyyFseArZ3pEqch4%2BeMBuINffdDbTe7bU0MowTsvnjJfLbymBLcLD%2BcVGxZNFLpAxcldpwmoeLsjcJi5x1ChuMTNFtxxopxKF%2BlQux%2FuPdA6MmUDNNdDNRIYVzleDUHLypHWLygbekRAORc%2B3lBXEDmZi9d%2FJMfmFKIMRADtixqeBJK%2ByZFgCa0bjRMbZoMJxq5ol85DaeuhY3m5mihYYft6Yp1E2A0doAaVE8x%2BZXya7hQubBLD4un0snlgbUQoq4uZZZDZrUiIXkyJ%2FBAwzYtGUIAmJBrHRDwCVcmglLkIAZp51LQEOh2t96lkTjBvSEeb0imCLwyZeRF%2Bf%2FfFLMJ5cDdZgApRjp%2FkPPIivBray1MJyap8IGOqUBy0snv8tRh5lY0fArVEYXCbtwAyZm58gGxDJ3ZCJyu9PyJ9u3CtjwYSdXAFg7ZmIsoom0gjbLsZw4XWa1iGgpoCin0cJ2VjvZ9hIAUS%2Ba1%2FP7GuXjXUsgxq%2BcAOYkfXVMEBY%2FmSDwdMPnaj8KWiP2uu4uPoG5ON42rO%2BC1yrwEFtdJ2yeVvmUDDjt%2FfRqlYtQz%2FVvhVg0MMDpI9YVlfAL%2B3OTThhP&X-Amz-Signature=1f8abc95af44e624fe2812c62868cbf159548c9b02edeb6bb16b58c9c4466485&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNE6X7H6%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQC3sOdB%2B9HC2JLsI%2FkAU5P3%2FPgT%2FwZfSsN85y49LgUcIgIgP9Ax83tHN02L6eGh1RVGuh%2Bs0ml5iKnsi%2Bhwmh9z8hgqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPngcOwRz000PGW6GircA%2BEPyaDFyOn2fQC8Bi0tGHb09v6l7vJdAzxbrVPuUZpwGt8rryjYX%2FFXX9R1wyHV7Yg2SlSGo6CF5LAAfIeszmiA96%2BZFJDCdROgCyAWjczNqjk61uBjZiFSO6IAfmdJZXwVlL31j%2BlxG2RIj7NFlAeUjdA2jNjcM2rz2JmcgSVW33jR8f9YPtL5HvHkirTDFKdb0uAcwPSm%2Bldv7NGuuO0ldtuJAIJm15bxUDPeZFJQPbLLsSDIwxKh2G3wOPz7Gr0%2F%2Fzd8z82KxLjyyFseArZ3pEqch4%2BeMBuINffdDbTe7bU0MowTsvnjJfLbymBLcLD%2BcVGxZNFLpAxcldpwmoeLsjcJi5x1ChuMTNFtxxopxKF%2BlQux%2FuPdA6MmUDNNdDNRIYVzleDUHLypHWLygbekRAORc%2B3lBXEDmZi9d%2FJMfmFKIMRADtixqeBJK%2ByZFgCa0bjRMbZoMJxq5ol85DaeuhY3m5mihYYft6Yp1E2A0doAaVE8x%2BZXya7hQubBLD4un0snlgbUQoq4uZZZDZrUiIXkyJ%2FBAwzYtGUIAmJBrHRDwCVcmglLkIAZp51LQEOh2t96lkTjBvSEeb0imCLwyZeRF%2Bf%2FfFLMJ5cDdZgApRjp%2FkPPIivBray1MJyap8IGOqUBy0snv8tRh5lY0fArVEYXCbtwAyZm58gGxDJ3ZCJyu9PyJ9u3CtjwYSdXAFg7ZmIsoom0gjbLsZw4XWa1iGgpoCin0cJ2VjvZ9hIAUS%2Ba1%2FP7GuXjXUsgxq%2BcAOYkfXVMEBY%2FmSDwdMPnaj8KWiP2uu4uPoG5ON42rO%2BC1yrwEFtdJ2yeVvmUDDjt%2FfRqlYtQz%2FVvhVg0MMDpI9YVlfAL%2B3OTThhP&X-Amz-Signature=5ceede0395c1d8dc5c6acdf5d3e8e88b7b0a7ffae087a02734b3423c05548a83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNE6X7H6%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQC3sOdB%2B9HC2JLsI%2FkAU5P3%2FPgT%2FwZfSsN85y49LgUcIgIgP9Ax83tHN02L6eGh1RVGuh%2Bs0ml5iKnsi%2Bhwmh9z8hgqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPngcOwRz000PGW6GircA%2BEPyaDFyOn2fQC8Bi0tGHb09v6l7vJdAzxbrVPuUZpwGt8rryjYX%2FFXX9R1wyHV7Yg2SlSGo6CF5LAAfIeszmiA96%2BZFJDCdROgCyAWjczNqjk61uBjZiFSO6IAfmdJZXwVlL31j%2BlxG2RIj7NFlAeUjdA2jNjcM2rz2JmcgSVW33jR8f9YPtL5HvHkirTDFKdb0uAcwPSm%2Bldv7NGuuO0ldtuJAIJm15bxUDPeZFJQPbLLsSDIwxKh2G3wOPz7Gr0%2F%2Fzd8z82KxLjyyFseArZ3pEqch4%2BeMBuINffdDbTe7bU0MowTsvnjJfLbymBLcLD%2BcVGxZNFLpAxcldpwmoeLsjcJi5x1ChuMTNFtxxopxKF%2BlQux%2FuPdA6MmUDNNdDNRIYVzleDUHLypHWLygbekRAORc%2B3lBXEDmZi9d%2FJMfmFKIMRADtixqeBJK%2ByZFgCa0bjRMbZoMJxq5ol85DaeuhY3m5mihYYft6Yp1E2A0doAaVE8x%2BZXya7hQubBLD4un0snlgbUQoq4uZZZDZrUiIXkyJ%2FBAwzYtGUIAmJBrHRDwCVcmglLkIAZp51LQEOh2t96lkTjBvSEeb0imCLwyZeRF%2Bf%2FfFLMJ5cDdZgApRjp%2FkPPIivBray1MJyap8IGOqUBy0snv8tRh5lY0fArVEYXCbtwAyZm58gGxDJ3ZCJyu9PyJ9u3CtjwYSdXAFg7ZmIsoom0gjbLsZw4XWa1iGgpoCin0cJ2VjvZ9hIAUS%2Ba1%2FP7GuXjXUsgxq%2BcAOYkfXVMEBY%2FmSDwdMPnaj8KWiP2uu4uPoG5ON42rO%2BC1yrwEFtdJ2yeVvmUDDjt%2FfRqlYtQz%2FVvhVg0MMDpI9YVlfAL%2B3OTThhP&X-Amz-Signature=16e322a438f498b2a7ac02acc655dd21f13ef03181914c0ed3ffda7045e8ab58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNE6X7H6%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T200900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQC3sOdB%2B9HC2JLsI%2FkAU5P3%2FPgT%2FwZfSsN85y49LgUcIgIgP9Ax83tHN02L6eGh1RVGuh%2Bs0ml5iKnsi%2Bhwmh9z8hgqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPngcOwRz000PGW6GircA%2BEPyaDFyOn2fQC8Bi0tGHb09v6l7vJdAzxbrVPuUZpwGt8rryjYX%2FFXX9R1wyHV7Yg2SlSGo6CF5LAAfIeszmiA96%2BZFJDCdROgCyAWjczNqjk61uBjZiFSO6IAfmdJZXwVlL31j%2BlxG2RIj7NFlAeUjdA2jNjcM2rz2JmcgSVW33jR8f9YPtL5HvHkirTDFKdb0uAcwPSm%2Bldv7NGuuO0ldtuJAIJm15bxUDPeZFJQPbLLsSDIwxKh2G3wOPz7Gr0%2F%2Fzd8z82KxLjyyFseArZ3pEqch4%2BeMBuINffdDbTe7bU0MowTsvnjJfLbymBLcLD%2BcVGxZNFLpAxcldpwmoeLsjcJi5x1ChuMTNFtxxopxKF%2BlQux%2FuPdA6MmUDNNdDNRIYVzleDUHLypHWLygbekRAORc%2B3lBXEDmZi9d%2FJMfmFKIMRADtixqeBJK%2ByZFgCa0bjRMbZoMJxq5ol85DaeuhY3m5mihYYft6Yp1E2A0doAaVE8x%2BZXya7hQubBLD4un0snlgbUQoq4uZZZDZrUiIXkyJ%2FBAwzYtGUIAmJBrHRDwCVcmglLkIAZp51LQEOh2t96lkTjBvSEeb0imCLwyZeRF%2Bf%2FfFLMJ5cDdZgApRjp%2FkPPIivBray1MJyap8IGOqUBy0snv8tRh5lY0fArVEYXCbtwAyZm58gGxDJ3ZCJyu9PyJ9u3CtjwYSdXAFg7ZmIsoom0gjbLsZw4XWa1iGgpoCin0cJ2VjvZ9hIAUS%2Ba1%2FP7GuXjXUsgxq%2BcAOYkfXVMEBY%2FmSDwdMPnaj8KWiP2uu4uPoG5ON42rO%2BC1yrwEFtdJ2yeVvmUDDjt%2FfRqlYtQz%2FVvhVg0MMDpI9YVlfAL%2B3OTThhP&X-Amz-Signature=748282bc7434961cff4df31df11efb0cfea07222a60e4fe8f8357bf874045fdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
