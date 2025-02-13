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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647QMFRVG%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T061114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp%2F6IskvGY9TNWkHWkp51FCsHHDTBsSIjdyZtYcWNXPAIhAMkD3gCSUzyUmkKkTVzv6x%2F1SvpF2qy54vJkeqTC5ZNMKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxhxy%2B3SIQVTHtQf4wq3AOkKVT5XmudI%2BAOBjmNSw3ND8%2F9cumfnPq%2Fib9VBxMhsrquzvltsJo3KIkJk8GrKN2K8Ai8%2B7eYATXTFsLXc4%2ByrBPPGw%2FiCCqi%2B1PvoA22yUEAmNMW2Y8fR%2FZfEmfwgx6TogtD8AjcULb5%2Fsnjre3NkHKxGBync0sCNYP949Y9iYxNqrn2%2FFqCQFKZDagXL3k1m7xi1mu3RRsFNDEc5KETifuXW9bb8HHGvvm83cv%2F1AP8lGHwPSQQ3dVtD9FHdR8pWLhsBloVq3Z9qe5B191U3ld3eEBv3riwyEVt2P%2BUYlASmLCKKW1EoQXu%2FMuv8OoMMoX%2FCD5bDx4ZjMBYxQP2YZOtKu5KctdW0PPaaihw2jpj%2BTyIWxc%2FHaBUquJcpSRBY7zlgskyuWli1uWrSeH1CUqa7u7s2X9ebA3%2FIMlfRRs7%2BhgyFZpJ6lO4k3B5%2FbRojDb05wkiiOOxwNcPZ97mJ%2BhlxpdONiNTzU%2FjMvUHKra6Qf5cg2G0BjHYN9fgxtz32bCL%2BKUo89jG3sjJtYPvs%2FK4ZepwtZp0oCK%2BXiisyeURZDAkv4C68jYi36JMhO2OHpsjsh61NF7EesuUpWCl72pptyzHM2XcSAKWIL5kPXq2MEahoRLAlt2csTD9jra9BjqkAXFyXF6LUJCmTnEeqBKLn%2FG%2B%2FhgEVAGcdJsas7gTCpU0prLcWSV9fowublEsEyPS%2BiyN0jWXAgR2ihqvw6qkhLNdSH%2BxYzKBDAYQPnoM5dYz8Obu%2Bzj%2BC%2BbV1fvD3eTqPbPo9rEnxdegjFCyLCBf9tjKkS42Qk%2FMo10iOH6kg7zbuNp54gX1S8iooIHJRSA7y90eacAO8QwhRMJInl748zCVrEzW&X-Amz-Signature=570cc8e78a1b97040bad6de3c81a2c5577e09cfaf96222a6bb80a31ed5e22e5e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647QMFRVG%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T061114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp%2F6IskvGY9TNWkHWkp51FCsHHDTBsSIjdyZtYcWNXPAIhAMkD3gCSUzyUmkKkTVzv6x%2F1SvpF2qy54vJkeqTC5ZNMKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxhxy%2B3SIQVTHtQf4wq3AOkKVT5XmudI%2BAOBjmNSw3ND8%2F9cumfnPq%2Fib9VBxMhsrquzvltsJo3KIkJk8GrKN2K8Ai8%2B7eYATXTFsLXc4%2ByrBPPGw%2FiCCqi%2B1PvoA22yUEAmNMW2Y8fR%2FZfEmfwgx6TogtD8AjcULb5%2Fsnjre3NkHKxGBync0sCNYP949Y9iYxNqrn2%2FFqCQFKZDagXL3k1m7xi1mu3RRsFNDEc5KETifuXW9bb8HHGvvm83cv%2F1AP8lGHwPSQQ3dVtD9FHdR8pWLhsBloVq3Z9qe5B191U3ld3eEBv3riwyEVt2P%2BUYlASmLCKKW1EoQXu%2FMuv8OoMMoX%2FCD5bDx4ZjMBYxQP2YZOtKu5KctdW0PPaaihw2jpj%2BTyIWxc%2FHaBUquJcpSRBY7zlgskyuWli1uWrSeH1CUqa7u7s2X9ebA3%2FIMlfRRs7%2BhgyFZpJ6lO4k3B5%2FbRojDb05wkiiOOxwNcPZ97mJ%2BhlxpdONiNTzU%2FjMvUHKra6Qf5cg2G0BjHYN9fgxtz32bCL%2BKUo89jG3sjJtYPvs%2FK4ZepwtZp0oCK%2BXiisyeURZDAkv4C68jYi36JMhO2OHpsjsh61NF7EesuUpWCl72pptyzHM2XcSAKWIL5kPXq2MEahoRLAlt2csTD9jra9BjqkAXFyXF6LUJCmTnEeqBKLn%2FG%2B%2FhgEVAGcdJsas7gTCpU0prLcWSV9fowublEsEyPS%2BiyN0jWXAgR2ihqvw6qkhLNdSH%2BxYzKBDAYQPnoM5dYz8Obu%2Bzj%2BC%2BbV1fvD3eTqPbPo9rEnxdegjFCyLCBf9tjKkS42Qk%2FMo10iOH6kg7zbuNp54gX1S8iooIHJRSA7y90eacAO8QwhRMJInl748zCVrEzW&X-Amz-Signature=71c420418c96d2e0e92f636df3cdd2d4a1426996dd6d0942589998f4a7f26ced&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647QMFRVG%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T061114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp%2F6IskvGY9TNWkHWkp51FCsHHDTBsSIjdyZtYcWNXPAIhAMkD3gCSUzyUmkKkTVzv6x%2F1SvpF2qy54vJkeqTC5ZNMKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxhxy%2B3SIQVTHtQf4wq3AOkKVT5XmudI%2BAOBjmNSw3ND8%2F9cumfnPq%2Fib9VBxMhsrquzvltsJo3KIkJk8GrKN2K8Ai8%2B7eYATXTFsLXc4%2ByrBPPGw%2FiCCqi%2B1PvoA22yUEAmNMW2Y8fR%2FZfEmfwgx6TogtD8AjcULb5%2Fsnjre3NkHKxGBync0sCNYP949Y9iYxNqrn2%2FFqCQFKZDagXL3k1m7xi1mu3RRsFNDEc5KETifuXW9bb8HHGvvm83cv%2F1AP8lGHwPSQQ3dVtD9FHdR8pWLhsBloVq3Z9qe5B191U3ld3eEBv3riwyEVt2P%2BUYlASmLCKKW1EoQXu%2FMuv8OoMMoX%2FCD5bDx4ZjMBYxQP2YZOtKu5KctdW0PPaaihw2jpj%2BTyIWxc%2FHaBUquJcpSRBY7zlgskyuWli1uWrSeH1CUqa7u7s2X9ebA3%2FIMlfRRs7%2BhgyFZpJ6lO4k3B5%2FbRojDb05wkiiOOxwNcPZ97mJ%2BhlxpdONiNTzU%2FjMvUHKra6Qf5cg2G0BjHYN9fgxtz32bCL%2BKUo89jG3sjJtYPvs%2FK4ZepwtZp0oCK%2BXiisyeURZDAkv4C68jYi36JMhO2OHpsjsh61NF7EesuUpWCl72pptyzHM2XcSAKWIL5kPXq2MEahoRLAlt2csTD9jra9BjqkAXFyXF6LUJCmTnEeqBKLn%2FG%2B%2FhgEVAGcdJsas7gTCpU0prLcWSV9fowublEsEyPS%2BiyN0jWXAgR2ihqvw6qkhLNdSH%2BxYzKBDAYQPnoM5dYz8Obu%2Bzj%2BC%2BbV1fvD3eTqPbPo9rEnxdegjFCyLCBf9tjKkS42Qk%2FMo10iOH6kg7zbuNp54gX1S8iooIHJRSA7y90eacAO8QwhRMJInl748zCVrEzW&X-Amz-Signature=ca249c0891c1f814ccc80e5fc563279fd397fe4cf206e63915e46bb4fe29b05f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647QMFRVG%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T061114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp%2F6IskvGY9TNWkHWkp51FCsHHDTBsSIjdyZtYcWNXPAIhAMkD3gCSUzyUmkKkTVzv6x%2F1SvpF2qy54vJkeqTC5ZNMKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxhxy%2B3SIQVTHtQf4wq3AOkKVT5XmudI%2BAOBjmNSw3ND8%2F9cumfnPq%2Fib9VBxMhsrquzvltsJo3KIkJk8GrKN2K8Ai8%2B7eYATXTFsLXc4%2ByrBPPGw%2FiCCqi%2B1PvoA22yUEAmNMW2Y8fR%2FZfEmfwgx6TogtD8AjcULb5%2Fsnjre3NkHKxGBync0sCNYP949Y9iYxNqrn2%2FFqCQFKZDagXL3k1m7xi1mu3RRsFNDEc5KETifuXW9bb8HHGvvm83cv%2F1AP8lGHwPSQQ3dVtD9FHdR8pWLhsBloVq3Z9qe5B191U3ld3eEBv3riwyEVt2P%2BUYlASmLCKKW1EoQXu%2FMuv8OoMMoX%2FCD5bDx4ZjMBYxQP2YZOtKu5KctdW0PPaaihw2jpj%2BTyIWxc%2FHaBUquJcpSRBY7zlgskyuWli1uWrSeH1CUqa7u7s2X9ebA3%2FIMlfRRs7%2BhgyFZpJ6lO4k3B5%2FbRojDb05wkiiOOxwNcPZ97mJ%2BhlxpdONiNTzU%2FjMvUHKra6Qf5cg2G0BjHYN9fgxtz32bCL%2BKUo89jG3sjJtYPvs%2FK4ZepwtZp0oCK%2BXiisyeURZDAkv4C68jYi36JMhO2OHpsjsh61NF7EesuUpWCl72pptyzHM2XcSAKWIL5kPXq2MEahoRLAlt2csTD9jra9BjqkAXFyXF6LUJCmTnEeqBKLn%2FG%2B%2FhgEVAGcdJsas7gTCpU0prLcWSV9fowublEsEyPS%2BiyN0jWXAgR2ihqvw6qkhLNdSH%2BxYzKBDAYQPnoM5dYz8Obu%2Bzj%2BC%2BbV1fvD3eTqPbPo9rEnxdegjFCyLCBf9tjKkS42Qk%2FMo10iOH6kg7zbuNp54gX1S8iooIHJRSA7y90eacAO8QwhRMJInl748zCVrEzW&X-Amz-Signature=a9afafcf4c3bac86d991a9dadfe78bf3be10ed4f6b1c450b55152e49118dba59&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647QMFRVG%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T061114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp%2F6IskvGY9TNWkHWkp51FCsHHDTBsSIjdyZtYcWNXPAIhAMkD3gCSUzyUmkKkTVzv6x%2F1SvpF2qy54vJkeqTC5ZNMKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxhxy%2B3SIQVTHtQf4wq3AOkKVT5XmudI%2BAOBjmNSw3ND8%2F9cumfnPq%2Fib9VBxMhsrquzvltsJo3KIkJk8GrKN2K8Ai8%2B7eYATXTFsLXc4%2ByrBPPGw%2FiCCqi%2B1PvoA22yUEAmNMW2Y8fR%2FZfEmfwgx6TogtD8AjcULb5%2Fsnjre3NkHKxGBync0sCNYP949Y9iYxNqrn2%2FFqCQFKZDagXL3k1m7xi1mu3RRsFNDEc5KETifuXW9bb8HHGvvm83cv%2F1AP8lGHwPSQQ3dVtD9FHdR8pWLhsBloVq3Z9qe5B191U3ld3eEBv3riwyEVt2P%2BUYlASmLCKKW1EoQXu%2FMuv8OoMMoX%2FCD5bDx4ZjMBYxQP2YZOtKu5KctdW0PPaaihw2jpj%2BTyIWxc%2FHaBUquJcpSRBY7zlgskyuWli1uWrSeH1CUqa7u7s2X9ebA3%2FIMlfRRs7%2BhgyFZpJ6lO4k3B5%2FbRojDb05wkiiOOxwNcPZ97mJ%2BhlxpdONiNTzU%2FjMvUHKra6Qf5cg2G0BjHYN9fgxtz32bCL%2BKUo89jG3sjJtYPvs%2FK4ZepwtZp0oCK%2BXiisyeURZDAkv4C68jYi36JMhO2OHpsjsh61NF7EesuUpWCl72pptyzHM2XcSAKWIL5kPXq2MEahoRLAlt2csTD9jra9BjqkAXFyXF6LUJCmTnEeqBKLn%2FG%2B%2FhgEVAGcdJsas7gTCpU0prLcWSV9fowublEsEyPS%2BiyN0jWXAgR2ihqvw6qkhLNdSH%2BxYzKBDAYQPnoM5dYz8Obu%2Bzj%2BC%2BbV1fvD3eTqPbPo9rEnxdegjFCyLCBf9tjKkS42Qk%2FMo10iOH6kg7zbuNp54gX1S8iooIHJRSA7y90eacAO8QwhRMJInl748zCVrEzW&X-Amz-Signature=9e9f94732040afb2a1b0e6113e78d1b6f662cfb0b56ab1f2ddeabc14a151c1f1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647QMFRVG%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T061114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp%2F6IskvGY9TNWkHWkp51FCsHHDTBsSIjdyZtYcWNXPAIhAMkD3gCSUzyUmkKkTVzv6x%2F1SvpF2qy54vJkeqTC5ZNMKogECP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxhxy%2B3SIQVTHtQf4wq3AOkKVT5XmudI%2BAOBjmNSw3ND8%2F9cumfnPq%2Fib9VBxMhsrquzvltsJo3KIkJk8GrKN2K8Ai8%2B7eYATXTFsLXc4%2ByrBPPGw%2FiCCqi%2B1PvoA22yUEAmNMW2Y8fR%2FZfEmfwgx6TogtD8AjcULb5%2Fsnjre3NkHKxGBync0sCNYP949Y9iYxNqrn2%2FFqCQFKZDagXL3k1m7xi1mu3RRsFNDEc5KETifuXW9bb8HHGvvm83cv%2F1AP8lGHwPSQQ3dVtD9FHdR8pWLhsBloVq3Z9qe5B191U3ld3eEBv3riwyEVt2P%2BUYlASmLCKKW1EoQXu%2FMuv8OoMMoX%2FCD5bDx4ZjMBYxQP2YZOtKu5KctdW0PPaaihw2jpj%2BTyIWxc%2FHaBUquJcpSRBY7zlgskyuWli1uWrSeH1CUqa7u7s2X9ebA3%2FIMlfRRs7%2BhgyFZpJ6lO4k3B5%2FbRojDb05wkiiOOxwNcPZ97mJ%2BhlxpdONiNTzU%2FjMvUHKra6Qf5cg2G0BjHYN9fgxtz32bCL%2BKUo89jG3sjJtYPvs%2FK4ZepwtZp0oCK%2BXiisyeURZDAkv4C68jYi36JMhO2OHpsjsh61NF7EesuUpWCl72pptyzHM2XcSAKWIL5kPXq2MEahoRLAlt2csTD9jra9BjqkAXFyXF6LUJCmTnEeqBKLn%2FG%2B%2FhgEVAGcdJsas7gTCpU0prLcWSV9fowublEsEyPS%2BiyN0jWXAgR2ihqvw6qkhLNdSH%2BxYzKBDAYQPnoM5dYz8Obu%2Bzj%2BC%2BbV1fvD3eTqPbPo9rEnxdegjFCyLCBf9tjKkS42Qk%2FMo10iOH6kg7zbuNp54gX1S8iooIHJRSA7y90eacAO8QwhRMJInl748zCVrEzW&X-Amz-Signature=551abee92701187169885f663404536787add7f04d9f156c1ccc75e3c7e352f0&X-Amz-SignedHeaders=host&x-id=GetObject)
