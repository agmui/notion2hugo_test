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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLRJL77C%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T230702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIFnwW39WvKcHiOVs4hgwfJjm%2BFHEntc4sAYqDwOC87LGAiEA4HC0RhrQz6gtyhnzdS3dhMfYubtOWbHLzq7moCNlpfkq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDK4cCv31Ik9bMJA8PyrcA4MIEnsw0kIdGsVIUk3JP1EaXre684deCxQjH%2FGjbvuKXtOpDG4uAzr5T9dXt0M71kUh6S5u0l0xuaZpgZtDPA0QLDXRuCJFr4Dz1fzhzWgUPyl1X1uIB%2Fqx0S4hDp6qjP85aTqmq0%2Bi52e4aIJK0fC5G2o386PX6kvyJntZHWUIaTVyqe%2F9uZ%2BabwIqmKSGsrHZxUr2yZNbVhrBhnHtrY4R7Cd3fyfcVPIgAzJbAUOSbzBLaY5sfWX7bySJebrhqLYLeiepQiWNm36ZsAYz8Xf5apJunJj7y%2FeI94uHR%2FmELUsrzF19BqwnEKviOX1Zawkb2UCoLErdyE%2BRU2WFc3TU%2FsjF11b2dBqkEwjtZKchFoReIa43Q51KgK%2FWmnGpJ%2FJhrhEV0dyauE5iZHftbJXbaYZ9Dyo67B%2Bz1W%2BZflk3GPM5ZgILdNn9Ov7ssA%2F9HdyMTv2Uir5pDh7u8eM0X%2BhF%2FMfNAskLR8DEatMXiAiCnsfQmBIGrdyXP3v1pI6048k%2B0fAWLBFBdsl%2Fmo4J9AVyqICwYoBrT00Tt8%2FIZIPe9eq3VzAusw0B0kx4KCBkksweWeGSRaju81MCi8XIutHoAjm7dT%2Fv8yQOVTfp7xpkv1MKqN6mWk%2BssSN1MMPIyb0GOqUBMpTJDeMoTl8aBFbABhIIYAn0%2FrpGJwlTGjiGzGsl5nrxy2XOW73VJwX7gUdi52KSvQsrB63yko0pej8poV%2BYJII6nURB9kUms3n1N990btZZUHx%2BKEmsKTZNGLd0q%2FV%2F3cVJiyMCIRj6sAxuR52uHGAdmIc2DTeJxktZIoWxk%2BBN6%2BiVA57KDKaIuc9H2Yl6kHyyhM8GdikvKQlzUoi%2FpYmZ7u0T&X-Amz-Signature=200a4514b5abdf7cd5252a60d6ec986340b5c24fcc395ff8fae98d42bff7e618&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLRJL77C%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T230702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIFnwW39WvKcHiOVs4hgwfJjm%2BFHEntc4sAYqDwOC87LGAiEA4HC0RhrQz6gtyhnzdS3dhMfYubtOWbHLzq7moCNlpfkq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDK4cCv31Ik9bMJA8PyrcA4MIEnsw0kIdGsVIUk3JP1EaXre684deCxQjH%2FGjbvuKXtOpDG4uAzr5T9dXt0M71kUh6S5u0l0xuaZpgZtDPA0QLDXRuCJFr4Dz1fzhzWgUPyl1X1uIB%2Fqx0S4hDp6qjP85aTqmq0%2Bi52e4aIJK0fC5G2o386PX6kvyJntZHWUIaTVyqe%2F9uZ%2BabwIqmKSGsrHZxUr2yZNbVhrBhnHtrY4R7Cd3fyfcVPIgAzJbAUOSbzBLaY5sfWX7bySJebrhqLYLeiepQiWNm36ZsAYz8Xf5apJunJj7y%2FeI94uHR%2FmELUsrzF19BqwnEKviOX1Zawkb2UCoLErdyE%2BRU2WFc3TU%2FsjF11b2dBqkEwjtZKchFoReIa43Q51KgK%2FWmnGpJ%2FJhrhEV0dyauE5iZHftbJXbaYZ9Dyo67B%2Bz1W%2BZflk3GPM5ZgILdNn9Ov7ssA%2F9HdyMTv2Uir5pDh7u8eM0X%2BhF%2FMfNAskLR8DEatMXiAiCnsfQmBIGrdyXP3v1pI6048k%2B0fAWLBFBdsl%2Fmo4J9AVyqICwYoBrT00Tt8%2FIZIPe9eq3VzAusw0B0kx4KCBkksweWeGSRaju81MCi8XIutHoAjm7dT%2Fv8yQOVTfp7xpkv1MKqN6mWk%2BssSN1MMPIyb0GOqUBMpTJDeMoTl8aBFbABhIIYAn0%2FrpGJwlTGjiGzGsl5nrxy2XOW73VJwX7gUdi52KSvQsrB63yko0pej8poV%2BYJII6nURB9kUms3n1N990btZZUHx%2BKEmsKTZNGLd0q%2FV%2F3cVJiyMCIRj6sAxuR52uHGAdmIc2DTeJxktZIoWxk%2BBN6%2BiVA57KDKaIuc9H2Yl6kHyyhM8GdikvKQlzUoi%2FpYmZ7u0T&X-Amz-Signature=a5af24c746981e469634ae2d40cf7adae4b3a97732a9c9ccd6f304e71dddee09&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLRJL77C%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T230702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIFnwW39WvKcHiOVs4hgwfJjm%2BFHEntc4sAYqDwOC87LGAiEA4HC0RhrQz6gtyhnzdS3dhMfYubtOWbHLzq7moCNlpfkq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDK4cCv31Ik9bMJA8PyrcA4MIEnsw0kIdGsVIUk3JP1EaXre684deCxQjH%2FGjbvuKXtOpDG4uAzr5T9dXt0M71kUh6S5u0l0xuaZpgZtDPA0QLDXRuCJFr4Dz1fzhzWgUPyl1X1uIB%2Fqx0S4hDp6qjP85aTqmq0%2Bi52e4aIJK0fC5G2o386PX6kvyJntZHWUIaTVyqe%2F9uZ%2BabwIqmKSGsrHZxUr2yZNbVhrBhnHtrY4R7Cd3fyfcVPIgAzJbAUOSbzBLaY5sfWX7bySJebrhqLYLeiepQiWNm36ZsAYz8Xf5apJunJj7y%2FeI94uHR%2FmELUsrzF19BqwnEKviOX1Zawkb2UCoLErdyE%2BRU2WFc3TU%2FsjF11b2dBqkEwjtZKchFoReIa43Q51KgK%2FWmnGpJ%2FJhrhEV0dyauE5iZHftbJXbaYZ9Dyo67B%2Bz1W%2BZflk3GPM5ZgILdNn9Ov7ssA%2F9HdyMTv2Uir5pDh7u8eM0X%2BhF%2FMfNAskLR8DEatMXiAiCnsfQmBIGrdyXP3v1pI6048k%2B0fAWLBFBdsl%2Fmo4J9AVyqICwYoBrT00Tt8%2FIZIPe9eq3VzAusw0B0kx4KCBkksweWeGSRaju81MCi8XIutHoAjm7dT%2Fv8yQOVTfp7xpkv1MKqN6mWk%2BssSN1MMPIyb0GOqUBMpTJDeMoTl8aBFbABhIIYAn0%2FrpGJwlTGjiGzGsl5nrxy2XOW73VJwX7gUdi52KSvQsrB63yko0pej8poV%2BYJII6nURB9kUms3n1N990btZZUHx%2BKEmsKTZNGLd0q%2FV%2F3cVJiyMCIRj6sAxuR52uHGAdmIc2DTeJxktZIoWxk%2BBN6%2BiVA57KDKaIuc9H2Yl6kHyyhM8GdikvKQlzUoi%2FpYmZ7u0T&X-Amz-Signature=c1d59f8527eb9902a405512e3d4acf608cf0e431e44212db95114c6535413113&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLRJL77C%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T230702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIFnwW39WvKcHiOVs4hgwfJjm%2BFHEntc4sAYqDwOC87LGAiEA4HC0RhrQz6gtyhnzdS3dhMfYubtOWbHLzq7moCNlpfkq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDK4cCv31Ik9bMJA8PyrcA4MIEnsw0kIdGsVIUk3JP1EaXre684deCxQjH%2FGjbvuKXtOpDG4uAzr5T9dXt0M71kUh6S5u0l0xuaZpgZtDPA0QLDXRuCJFr4Dz1fzhzWgUPyl1X1uIB%2Fqx0S4hDp6qjP85aTqmq0%2Bi52e4aIJK0fC5G2o386PX6kvyJntZHWUIaTVyqe%2F9uZ%2BabwIqmKSGsrHZxUr2yZNbVhrBhnHtrY4R7Cd3fyfcVPIgAzJbAUOSbzBLaY5sfWX7bySJebrhqLYLeiepQiWNm36ZsAYz8Xf5apJunJj7y%2FeI94uHR%2FmELUsrzF19BqwnEKviOX1Zawkb2UCoLErdyE%2BRU2WFc3TU%2FsjF11b2dBqkEwjtZKchFoReIa43Q51KgK%2FWmnGpJ%2FJhrhEV0dyauE5iZHftbJXbaYZ9Dyo67B%2Bz1W%2BZflk3GPM5ZgILdNn9Ov7ssA%2F9HdyMTv2Uir5pDh7u8eM0X%2BhF%2FMfNAskLR8DEatMXiAiCnsfQmBIGrdyXP3v1pI6048k%2B0fAWLBFBdsl%2Fmo4J9AVyqICwYoBrT00Tt8%2FIZIPe9eq3VzAusw0B0kx4KCBkksweWeGSRaju81MCi8XIutHoAjm7dT%2Fv8yQOVTfp7xpkv1MKqN6mWk%2BssSN1MMPIyb0GOqUBMpTJDeMoTl8aBFbABhIIYAn0%2FrpGJwlTGjiGzGsl5nrxy2XOW73VJwX7gUdi52KSvQsrB63yko0pej8poV%2BYJII6nURB9kUms3n1N990btZZUHx%2BKEmsKTZNGLd0q%2FV%2F3cVJiyMCIRj6sAxuR52uHGAdmIc2DTeJxktZIoWxk%2BBN6%2BiVA57KDKaIuc9H2Yl6kHyyhM8GdikvKQlzUoi%2FpYmZ7u0T&X-Amz-Signature=ef710f77fc6720277313bede081a3b692df3660eb91a1658a226b7e1663c80be&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLRJL77C%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T230702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIFnwW39WvKcHiOVs4hgwfJjm%2BFHEntc4sAYqDwOC87LGAiEA4HC0RhrQz6gtyhnzdS3dhMfYubtOWbHLzq7moCNlpfkq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDK4cCv31Ik9bMJA8PyrcA4MIEnsw0kIdGsVIUk3JP1EaXre684deCxQjH%2FGjbvuKXtOpDG4uAzr5T9dXt0M71kUh6S5u0l0xuaZpgZtDPA0QLDXRuCJFr4Dz1fzhzWgUPyl1X1uIB%2Fqx0S4hDp6qjP85aTqmq0%2Bi52e4aIJK0fC5G2o386PX6kvyJntZHWUIaTVyqe%2F9uZ%2BabwIqmKSGsrHZxUr2yZNbVhrBhnHtrY4R7Cd3fyfcVPIgAzJbAUOSbzBLaY5sfWX7bySJebrhqLYLeiepQiWNm36ZsAYz8Xf5apJunJj7y%2FeI94uHR%2FmELUsrzF19BqwnEKviOX1Zawkb2UCoLErdyE%2BRU2WFc3TU%2FsjF11b2dBqkEwjtZKchFoReIa43Q51KgK%2FWmnGpJ%2FJhrhEV0dyauE5iZHftbJXbaYZ9Dyo67B%2Bz1W%2BZflk3GPM5ZgILdNn9Ov7ssA%2F9HdyMTv2Uir5pDh7u8eM0X%2BhF%2FMfNAskLR8DEatMXiAiCnsfQmBIGrdyXP3v1pI6048k%2B0fAWLBFBdsl%2Fmo4J9AVyqICwYoBrT00Tt8%2FIZIPe9eq3VzAusw0B0kx4KCBkksweWeGSRaju81MCi8XIutHoAjm7dT%2Fv8yQOVTfp7xpkv1MKqN6mWk%2BssSN1MMPIyb0GOqUBMpTJDeMoTl8aBFbABhIIYAn0%2FrpGJwlTGjiGzGsl5nrxy2XOW73VJwX7gUdi52KSvQsrB63yko0pej8poV%2BYJII6nURB9kUms3n1N990btZZUHx%2BKEmsKTZNGLd0q%2FV%2F3cVJiyMCIRj6sAxuR52uHGAdmIc2DTeJxktZIoWxk%2BBN6%2BiVA57KDKaIuc9H2Yl6kHyyhM8GdikvKQlzUoi%2FpYmZ7u0T&X-Amz-Signature=c8b718e56cdf97b73ea2330057e037aa4c780498480b8ff3eef58162649cae87&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLRJL77C%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T230702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIFnwW39WvKcHiOVs4hgwfJjm%2BFHEntc4sAYqDwOC87LGAiEA4HC0RhrQz6gtyhnzdS3dhMfYubtOWbHLzq7moCNlpfkq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDK4cCv31Ik9bMJA8PyrcA4MIEnsw0kIdGsVIUk3JP1EaXre684deCxQjH%2FGjbvuKXtOpDG4uAzr5T9dXt0M71kUh6S5u0l0xuaZpgZtDPA0QLDXRuCJFr4Dz1fzhzWgUPyl1X1uIB%2Fqx0S4hDp6qjP85aTqmq0%2Bi52e4aIJK0fC5G2o386PX6kvyJntZHWUIaTVyqe%2F9uZ%2BabwIqmKSGsrHZxUr2yZNbVhrBhnHtrY4R7Cd3fyfcVPIgAzJbAUOSbzBLaY5sfWX7bySJebrhqLYLeiepQiWNm36ZsAYz8Xf5apJunJj7y%2FeI94uHR%2FmELUsrzF19BqwnEKviOX1Zawkb2UCoLErdyE%2BRU2WFc3TU%2FsjF11b2dBqkEwjtZKchFoReIa43Q51KgK%2FWmnGpJ%2FJhrhEV0dyauE5iZHftbJXbaYZ9Dyo67B%2Bz1W%2BZflk3GPM5ZgILdNn9Ov7ssA%2F9HdyMTv2Uir5pDh7u8eM0X%2BhF%2FMfNAskLR8DEatMXiAiCnsfQmBIGrdyXP3v1pI6048k%2B0fAWLBFBdsl%2Fmo4J9AVyqICwYoBrT00Tt8%2FIZIPe9eq3VzAusw0B0kx4KCBkksweWeGSRaju81MCi8XIutHoAjm7dT%2Fv8yQOVTfp7xpkv1MKqN6mWk%2BssSN1MMPIyb0GOqUBMpTJDeMoTl8aBFbABhIIYAn0%2FrpGJwlTGjiGzGsl5nrxy2XOW73VJwX7gUdi52KSvQsrB63yko0pej8poV%2BYJII6nURB9kUms3n1N990btZZUHx%2BKEmsKTZNGLd0q%2FV%2F3cVJiyMCIRj6sAxuR52uHGAdmIc2DTeJxktZIoWxk%2BBN6%2BiVA57KDKaIuc9H2Yl6kHyyhM8GdikvKQlzUoi%2FpYmZ7u0T&X-Amz-Signature=5bbb65ba2f512eb82920193b2989348d29f8c9104f1e282521137dce003a8dd5&X-Amz-SignedHeaders=host&x-id=GetObject)
