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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN3HEM2O%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T140926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIE%2Bd8T72epabV6FttiGeh%2FOPMcsRWipw88VPXtPoG3UDAiEAxsSOD27tRWQFnrMvSGFG%2FQgbjtNMKkAPa5Zie26sR94q%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDDa5piE3HsbvtIgv3SrcA7ykego%2FJ74gwWvMYvbHMhFm9bs%2F2J8WpO8MtTdt5ueV%2FdPExTpvGajWk%2FUb8zIerZl669ZNIw1hjOiCs30BJOLB7DAR%2BChpBm3DxVzm2ZSr7D6uuRPbehLv80DtMuzPYINS0EdDkX2b3J0mNly%2FOI5R%2FQ%2F3Zr%2F5rp7%2BdZ%2BVdr5qOgqst33CbNfhfRhwg29%2BjoZu8w7%2F8PSrbnrQc%2Fjrv8eGotXqtq7lVNEeOxJH4YhFqtPk4h8P4quVz2UNaqqVnKvh2qrSRCUBcT%2BTg6TNFjY2suvZXfIM%2BDUVaZtzhZkdv9aFrtsTGO9209DhMkGuB0t0lrmI9xW6WtSmxOI2eHQftZXOXkl9bkjvQT5smf%2BdR4FbklKgh1WCIWhaCHKb8w3DKrgYztExYhqZYG1pNStegsCmdEbT1vCaULbIqQMUjImainkecgrGN9Lqmx0%2FmpIH2SDqq65p2VhJ0NO9mc8p05xrvqMf5MFY4QTPpuXtZkBUb09aINmhyWiyYFQL5ujoLCfn2nIYPrXhe7lv6TjTFHjptJrwJgXe7BTeRMFCqjywZLNDlmNFZ0rs34vu6ND1Mwg9Lpm6MivcdGy7GUeVi7sC4cM8WQJsqxOXikiQN1aQW48mytz%2FVnsVMImNmsMGOqUB9baOUyq77Lhy0qOdQ3ZAn4x7%2BN6d67Thd%2BPNUQcFg7CoKNPDGLi0mwYqY20c09x6yPpw5vpDUxE%2FbRAuEsRb972RVzWTuw3j2A1zX34vvYgIcdtvul%2BnNXm1a%2FXYoDgbxzYf2VqSL8PJCnTytzk2PMp9GfOIZeyYcGfDb1oOaj%2Bd5BsIGGPAmp9jjEGOtM9rFhQY%2BfF2ZlLQ6e9TtECCo8fBjPTv&X-Amz-Signature=c8b1e3225bee5619028dbe79cb7a6c23a404899e2e15355f8d8be037654f1041&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN3HEM2O%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T140926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIE%2Bd8T72epabV6FttiGeh%2FOPMcsRWipw88VPXtPoG3UDAiEAxsSOD27tRWQFnrMvSGFG%2FQgbjtNMKkAPa5Zie26sR94q%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDDa5piE3HsbvtIgv3SrcA7ykego%2FJ74gwWvMYvbHMhFm9bs%2F2J8WpO8MtTdt5ueV%2FdPExTpvGajWk%2FUb8zIerZl669ZNIw1hjOiCs30BJOLB7DAR%2BChpBm3DxVzm2ZSr7D6uuRPbehLv80DtMuzPYINS0EdDkX2b3J0mNly%2FOI5R%2FQ%2F3Zr%2F5rp7%2BdZ%2BVdr5qOgqst33CbNfhfRhwg29%2BjoZu8w7%2F8PSrbnrQc%2Fjrv8eGotXqtq7lVNEeOxJH4YhFqtPk4h8P4quVz2UNaqqVnKvh2qrSRCUBcT%2BTg6TNFjY2suvZXfIM%2BDUVaZtzhZkdv9aFrtsTGO9209DhMkGuB0t0lrmI9xW6WtSmxOI2eHQftZXOXkl9bkjvQT5smf%2BdR4FbklKgh1WCIWhaCHKb8w3DKrgYztExYhqZYG1pNStegsCmdEbT1vCaULbIqQMUjImainkecgrGN9Lqmx0%2FmpIH2SDqq65p2VhJ0NO9mc8p05xrvqMf5MFY4QTPpuXtZkBUb09aINmhyWiyYFQL5ujoLCfn2nIYPrXhe7lv6TjTFHjptJrwJgXe7BTeRMFCqjywZLNDlmNFZ0rs34vu6ND1Mwg9Lpm6MivcdGy7GUeVi7sC4cM8WQJsqxOXikiQN1aQW48mytz%2FVnsVMImNmsMGOqUB9baOUyq77Lhy0qOdQ3ZAn4x7%2BN6d67Thd%2BPNUQcFg7CoKNPDGLi0mwYqY20c09x6yPpw5vpDUxE%2FbRAuEsRb972RVzWTuw3j2A1zX34vvYgIcdtvul%2BnNXm1a%2FXYoDgbxzYf2VqSL8PJCnTytzk2PMp9GfOIZeyYcGfDb1oOaj%2Bd5BsIGGPAmp9jjEGOtM9rFhQY%2BfF2ZlLQ6e9TtECCo8fBjPTv&X-Amz-Signature=6595b9dc263e25b4083c8de27cd56903c2900a60a02f6bfb955430dd341625a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN3HEM2O%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T140926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIE%2Bd8T72epabV6FttiGeh%2FOPMcsRWipw88VPXtPoG3UDAiEAxsSOD27tRWQFnrMvSGFG%2FQgbjtNMKkAPa5Zie26sR94q%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDDa5piE3HsbvtIgv3SrcA7ykego%2FJ74gwWvMYvbHMhFm9bs%2F2J8WpO8MtTdt5ueV%2FdPExTpvGajWk%2FUb8zIerZl669ZNIw1hjOiCs30BJOLB7DAR%2BChpBm3DxVzm2ZSr7D6uuRPbehLv80DtMuzPYINS0EdDkX2b3J0mNly%2FOI5R%2FQ%2F3Zr%2F5rp7%2BdZ%2BVdr5qOgqst33CbNfhfRhwg29%2BjoZu8w7%2F8PSrbnrQc%2Fjrv8eGotXqtq7lVNEeOxJH4YhFqtPk4h8P4quVz2UNaqqVnKvh2qrSRCUBcT%2BTg6TNFjY2suvZXfIM%2BDUVaZtzhZkdv9aFrtsTGO9209DhMkGuB0t0lrmI9xW6WtSmxOI2eHQftZXOXkl9bkjvQT5smf%2BdR4FbklKgh1WCIWhaCHKb8w3DKrgYztExYhqZYG1pNStegsCmdEbT1vCaULbIqQMUjImainkecgrGN9Lqmx0%2FmpIH2SDqq65p2VhJ0NO9mc8p05xrvqMf5MFY4QTPpuXtZkBUb09aINmhyWiyYFQL5ujoLCfn2nIYPrXhe7lv6TjTFHjptJrwJgXe7BTeRMFCqjywZLNDlmNFZ0rs34vu6ND1Mwg9Lpm6MivcdGy7GUeVi7sC4cM8WQJsqxOXikiQN1aQW48mytz%2FVnsVMImNmsMGOqUB9baOUyq77Lhy0qOdQ3ZAn4x7%2BN6d67Thd%2BPNUQcFg7CoKNPDGLi0mwYqY20c09x6yPpw5vpDUxE%2FbRAuEsRb972RVzWTuw3j2A1zX34vvYgIcdtvul%2BnNXm1a%2FXYoDgbxzYf2VqSL8PJCnTytzk2PMp9GfOIZeyYcGfDb1oOaj%2Bd5BsIGGPAmp9jjEGOtM9rFhQY%2BfF2ZlLQ6e9TtECCo8fBjPTv&X-Amz-Signature=2528da24f1a2973d61009b73846bb36d0a460c74b70bac7d7513ac93218703fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN3HEM2O%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T140926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIE%2Bd8T72epabV6FttiGeh%2FOPMcsRWipw88VPXtPoG3UDAiEAxsSOD27tRWQFnrMvSGFG%2FQgbjtNMKkAPa5Zie26sR94q%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDDa5piE3HsbvtIgv3SrcA7ykego%2FJ74gwWvMYvbHMhFm9bs%2F2J8WpO8MtTdt5ueV%2FdPExTpvGajWk%2FUb8zIerZl669ZNIw1hjOiCs30BJOLB7DAR%2BChpBm3DxVzm2ZSr7D6uuRPbehLv80DtMuzPYINS0EdDkX2b3J0mNly%2FOI5R%2FQ%2F3Zr%2F5rp7%2BdZ%2BVdr5qOgqst33CbNfhfRhwg29%2BjoZu8w7%2F8PSrbnrQc%2Fjrv8eGotXqtq7lVNEeOxJH4YhFqtPk4h8P4quVz2UNaqqVnKvh2qrSRCUBcT%2BTg6TNFjY2suvZXfIM%2BDUVaZtzhZkdv9aFrtsTGO9209DhMkGuB0t0lrmI9xW6WtSmxOI2eHQftZXOXkl9bkjvQT5smf%2BdR4FbklKgh1WCIWhaCHKb8w3DKrgYztExYhqZYG1pNStegsCmdEbT1vCaULbIqQMUjImainkecgrGN9Lqmx0%2FmpIH2SDqq65p2VhJ0NO9mc8p05xrvqMf5MFY4QTPpuXtZkBUb09aINmhyWiyYFQL5ujoLCfn2nIYPrXhe7lv6TjTFHjptJrwJgXe7BTeRMFCqjywZLNDlmNFZ0rs34vu6ND1Mwg9Lpm6MivcdGy7GUeVi7sC4cM8WQJsqxOXikiQN1aQW48mytz%2FVnsVMImNmsMGOqUB9baOUyq77Lhy0qOdQ3ZAn4x7%2BN6d67Thd%2BPNUQcFg7CoKNPDGLi0mwYqY20c09x6yPpw5vpDUxE%2FbRAuEsRb972RVzWTuw3j2A1zX34vvYgIcdtvul%2BnNXm1a%2FXYoDgbxzYf2VqSL8PJCnTytzk2PMp9GfOIZeyYcGfDb1oOaj%2Bd5BsIGGPAmp9jjEGOtM9rFhQY%2BfF2ZlLQ6e9TtECCo8fBjPTv&X-Amz-Signature=93690dc95b91eec0aad0c7a6cae2ad5593ec4f168b9edcc6fcc513f7de8a126d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN3HEM2O%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T140926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIE%2Bd8T72epabV6FttiGeh%2FOPMcsRWipw88VPXtPoG3UDAiEAxsSOD27tRWQFnrMvSGFG%2FQgbjtNMKkAPa5Zie26sR94q%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDDa5piE3HsbvtIgv3SrcA7ykego%2FJ74gwWvMYvbHMhFm9bs%2F2J8WpO8MtTdt5ueV%2FdPExTpvGajWk%2FUb8zIerZl669ZNIw1hjOiCs30BJOLB7DAR%2BChpBm3DxVzm2ZSr7D6uuRPbehLv80DtMuzPYINS0EdDkX2b3J0mNly%2FOI5R%2FQ%2F3Zr%2F5rp7%2BdZ%2BVdr5qOgqst33CbNfhfRhwg29%2BjoZu8w7%2F8PSrbnrQc%2Fjrv8eGotXqtq7lVNEeOxJH4YhFqtPk4h8P4quVz2UNaqqVnKvh2qrSRCUBcT%2BTg6TNFjY2suvZXfIM%2BDUVaZtzhZkdv9aFrtsTGO9209DhMkGuB0t0lrmI9xW6WtSmxOI2eHQftZXOXkl9bkjvQT5smf%2BdR4FbklKgh1WCIWhaCHKb8w3DKrgYztExYhqZYG1pNStegsCmdEbT1vCaULbIqQMUjImainkecgrGN9Lqmx0%2FmpIH2SDqq65p2VhJ0NO9mc8p05xrvqMf5MFY4QTPpuXtZkBUb09aINmhyWiyYFQL5ujoLCfn2nIYPrXhe7lv6TjTFHjptJrwJgXe7BTeRMFCqjywZLNDlmNFZ0rs34vu6ND1Mwg9Lpm6MivcdGy7GUeVi7sC4cM8WQJsqxOXikiQN1aQW48mytz%2FVnsVMImNmsMGOqUB9baOUyq77Lhy0qOdQ3ZAn4x7%2BN6d67Thd%2BPNUQcFg7CoKNPDGLi0mwYqY20c09x6yPpw5vpDUxE%2FbRAuEsRb972RVzWTuw3j2A1zX34vvYgIcdtvul%2BnNXm1a%2FXYoDgbxzYf2VqSL8PJCnTytzk2PMp9GfOIZeyYcGfDb1oOaj%2Bd5BsIGGPAmp9jjEGOtM9rFhQY%2BfF2ZlLQ6e9TtECCo8fBjPTv&X-Amz-Signature=7f561b6f808b69c61b4f3438b0fffb0c826fd5f26f671d6da83e46b14c979c90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN3HEM2O%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T140926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIE%2Bd8T72epabV6FttiGeh%2FOPMcsRWipw88VPXtPoG3UDAiEAxsSOD27tRWQFnrMvSGFG%2FQgbjtNMKkAPa5Zie26sR94q%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDDa5piE3HsbvtIgv3SrcA7ykego%2FJ74gwWvMYvbHMhFm9bs%2F2J8WpO8MtTdt5ueV%2FdPExTpvGajWk%2FUb8zIerZl669ZNIw1hjOiCs30BJOLB7DAR%2BChpBm3DxVzm2ZSr7D6uuRPbehLv80DtMuzPYINS0EdDkX2b3J0mNly%2FOI5R%2FQ%2F3Zr%2F5rp7%2BdZ%2BVdr5qOgqst33CbNfhfRhwg29%2BjoZu8w7%2F8PSrbnrQc%2Fjrv8eGotXqtq7lVNEeOxJH4YhFqtPk4h8P4quVz2UNaqqVnKvh2qrSRCUBcT%2BTg6TNFjY2suvZXfIM%2BDUVaZtzhZkdv9aFrtsTGO9209DhMkGuB0t0lrmI9xW6WtSmxOI2eHQftZXOXkl9bkjvQT5smf%2BdR4FbklKgh1WCIWhaCHKb8w3DKrgYztExYhqZYG1pNStegsCmdEbT1vCaULbIqQMUjImainkecgrGN9Lqmx0%2FmpIH2SDqq65p2VhJ0NO9mc8p05xrvqMf5MFY4QTPpuXtZkBUb09aINmhyWiyYFQL5ujoLCfn2nIYPrXhe7lv6TjTFHjptJrwJgXe7BTeRMFCqjywZLNDlmNFZ0rs34vu6ND1Mwg9Lpm6MivcdGy7GUeVi7sC4cM8WQJsqxOXikiQN1aQW48mytz%2FVnsVMImNmsMGOqUB9baOUyq77Lhy0qOdQ3ZAn4x7%2BN6d67Thd%2BPNUQcFg7CoKNPDGLi0mwYqY20c09x6yPpw5vpDUxE%2FbRAuEsRb972RVzWTuw3j2A1zX34vvYgIcdtvul%2BnNXm1a%2FXYoDgbxzYf2VqSL8PJCnTytzk2PMp9GfOIZeyYcGfDb1oOaj%2Bd5BsIGGPAmp9jjEGOtM9rFhQY%2BfF2ZlLQ6e9TtECCo8fBjPTv&X-Amz-Signature=179083cc4ce741ee490a0d0ed031060b5cd9504c484c0feb3c89d9d6195dc482&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
