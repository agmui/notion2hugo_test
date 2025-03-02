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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBMGIPGJ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T180904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCz%2B%2BPFcAXNfIHI%2FAQgXmTi24sjyxdiW0ggmhf6kC5uQAIgdx8WNhzQbG0UdC7uaPYzCE%2FnF7mvY9xP4%2FHiRo%2BT8pYqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImfWr0MnSvtQL1IZCrcA%2FLeqVlNKua9pmyhafzz584EqUTFgVNiwTvdRSUAOI3Z2QATYGxQW3IjowpPm5OirU6vW5bI3dMj%2FqSYOzjSeKZJnWGklVaN5DPwd5dmWGRqd7MNF3a7A8uwpgJJrGWAp16bEPST%2BF8KBcAna8i2Aupu6VuWtaqRCctZ5BZM7x5NbuvW5msFoTZURnBrw7TBL7SNl10ar3tThZYp2ZFlbCYIHMxFm8ozsXpGadVNkbCjoEUvNhnBLiU7Jb9dkk%2FZvOL%2BMfAaQugjPi%2FCcNL4rNm91mk1MUhrb0mMsPG7s12w%2FbKqIHDHHbkruado9yUM44V%2FxOLDtdSXbeVi%2BaD3uqIqN0OZzOO1iZCj%2FxopV3jUpZTpuYqmiGoMqEy9zAZFg1xKYzo0%2BWTOS1yqbvUUkvusOUdv7QnBpnlC1%2BoRApliMiRfhw2hvSOMeybFPapRSFHmuzHpDyFyiuCzAdoh7bNMa0I2v%2Fgnjd5NV%2BRn%2Bp0SqxssIlW4eHgzHPN91cXYswC%2FjGaamwUKKrfaIBRc57NBoRWp39UVIjO4tvNzR%2FiS3l%2FP72p9J52ecVpBWtt%2Fq%2B5GhhLp3fUtz6Va60ahaSU1MbVHnkAu3wN09KjZJ9FuQCtsW%2BezlZgc%2FdCdMLyakr4GOqUBpz2jT8rVcQVPdB4EhR8cf6Q4ZrkzQ9y4gcybugNOQJuRAJTGru7%2BQje9xE0OhHjbvWLqr%2B2TU0oIG2i%2BtHHyZH322ZMI%2B1R3JrOzy4cS76Ghu76jr%2B3APPIziX0Ja2tLIo%2B7C01EBR%2F%2BY%2F%2BW3NeAOIYskCbVOUUvF4j4KIUBj4LQvxeV%2Bme6owUaldiOKv2bTEuxaFCtM5BpvHZb7OZWlskqhdTY&X-Amz-Signature=ba476d67b6d7b037f7b8ef14ce47dc6a1d575a88407af379891ac70d9c4127c6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBMGIPGJ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T180904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCz%2B%2BPFcAXNfIHI%2FAQgXmTi24sjyxdiW0ggmhf6kC5uQAIgdx8WNhzQbG0UdC7uaPYzCE%2FnF7mvY9xP4%2FHiRo%2BT8pYqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImfWr0MnSvtQL1IZCrcA%2FLeqVlNKua9pmyhafzz584EqUTFgVNiwTvdRSUAOI3Z2QATYGxQW3IjowpPm5OirU6vW5bI3dMj%2FqSYOzjSeKZJnWGklVaN5DPwd5dmWGRqd7MNF3a7A8uwpgJJrGWAp16bEPST%2BF8KBcAna8i2Aupu6VuWtaqRCctZ5BZM7x5NbuvW5msFoTZURnBrw7TBL7SNl10ar3tThZYp2ZFlbCYIHMxFm8ozsXpGadVNkbCjoEUvNhnBLiU7Jb9dkk%2FZvOL%2BMfAaQugjPi%2FCcNL4rNm91mk1MUhrb0mMsPG7s12w%2FbKqIHDHHbkruado9yUM44V%2FxOLDtdSXbeVi%2BaD3uqIqN0OZzOO1iZCj%2FxopV3jUpZTpuYqmiGoMqEy9zAZFg1xKYzo0%2BWTOS1yqbvUUkvusOUdv7QnBpnlC1%2BoRApliMiRfhw2hvSOMeybFPapRSFHmuzHpDyFyiuCzAdoh7bNMa0I2v%2Fgnjd5NV%2BRn%2Bp0SqxssIlW4eHgzHPN91cXYswC%2FjGaamwUKKrfaIBRc57NBoRWp39UVIjO4tvNzR%2FiS3l%2FP72p9J52ecVpBWtt%2Fq%2B5GhhLp3fUtz6Va60ahaSU1MbVHnkAu3wN09KjZJ9FuQCtsW%2BezlZgc%2FdCdMLyakr4GOqUBpz2jT8rVcQVPdB4EhR8cf6Q4ZrkzQ9y4gcybugNOQJuRAJTGru7%2BQje9xE0OhHjbvWLqr%2B2TU0oIG2i%2BtHHyZH322ZMI%2B1R3JrOzy4cS76Ghu76jr%2B3APPIziX0Ja2tLIo%2B7C01EBR%2F%2BY%2F%2BW3NeAOIYskCbVOUUvF4j4KIUBj4LQvxeV%2Bme6owUaldiOKv2bTEuxaFCtM5BpvHZb7OZWlskqhdTY&X-Amz-Signature=0624bb8762eb79b56bc356ef8f35e96da3b90bc5f7320cb3e80c038a314f4015&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBMGIPGJ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T180904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCz%2B%2BPFcAXNfIHI%2FAQgXmTi24sjyxdiW0ggmhf6kC5uQAIgdx8WNhzQbG0UdC7uaPYzCE%2FnF7mvY9xP4%2FHiRo%2BT8pYqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImfWr0MnSvtQL1IZCrcA%2FLeqVlNKua9pmyhafzz584EqUTFgVNiwTvdRSUAOI3Z2QATYGxQW3IjowpPm5OirU6vW5bI3dMj%2FqSYOzjSeKZJnWGklVaN5DPwd5dmWGRqd7MNF3a7A8uwpgJJrGWAp16bEPST%2BF8KBcAna8i2Aupu6VuWtaqRCctZ5BZM7x5NbuvW5msFoTZURnBrw7TBL7SNl10ar3tThZYp2ZFlbCYIHMxFm8ozsXpGadVNkbCjoEUvNhnBLiU7Jb9dkk%2FZvOL%2BMfAaQugjPi%2FCcNL4rNm91mk1MUhrb0mMsPG7s12w%2FbKqIHDHHbkruado9yUM44V%2FxOLDtdSXbeVi%2BaD3uqIqN0OZzOO1iZCj%2FxopV3jUpZTpuYqmiGoMqEy9zAZFg1xKYzo0%2BWTOS1yqbvUUkvusOUdv7QnBpnlC1%2BoRApliMiRfhw2hvSOMeybFPapRSFHmuzHpDyFyiuCzAdoh7bNMa0I2v%2Fgnjd5NV%2BRn%2Bp0SqxssIlW4eHgzHPN91cXYswC%2FjGaamwUKKrfaIBRc57NBoRWp39UVIjO4tvNzR%2FiS3l%2FP72p9J52ecVpBWtt%2Fq%2B5GhhLp3fUtz6Va60ahaSU1MbVHnkAu3wN09KjZJ9FuQCtsW%2BezlZgc%2FdCdMLyakr4GOqUBpz2jT8rVcQVPdB4EhR8cf6Q4ZrkzQ9y4gcybugNOQJuRAJTGru7%2BQje9xE0OhHjbvWLqr%2B2TU0oIG2i%2BtHHyZH322ZMI%2B1R3JrOzy4cS76Ghu76jr%2B3APPIziX0Ja2tLIo%2B7C01EBR%2F%2BY%2F%2BW3NeAOIYskCbVOUUvF4j4KIUBj4LQvxeV%2Bme6owUaldiOKv2bTEuxaFCtM5BpvHZb7OZWlskqhdTY&X-Amz-Signature=3a8831745eaba4f0919b5f98d0a9241151e1735192cc167ffa99f7fcc9fbeccd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBMGIPGJ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T180904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCz%2B%2BPFcAXNfIHI%2FAQgXmTi24sjyxdiW0ggmhf6kC5uQAIgdx8WNhzQbG0UdC7uaPYzCE%2FnF7mvY9xP4%2FHiRo%2BT8pYqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImfWr0MnSvtQL1IZCrcA%2FLeqVlNKua9pmyhafzz584EqUTFgVNiwTvdRSUAOI3Z2QATYGxQW3IjowpPm5OirU6vW5bI3dMj%2FqSYOzjSeKZJnWGklVaN5DPwd5dmWGRqd7MNF3a7A8uwpgJJrGWAp16bEPST%2BF8KBcAna8i2Aupu6VuWtaqRCctZ5BZM7x5NbuvW5msFoTZURnBrw7TBL7SNl10ar3tThZYp2ZFlbCYIHMxFm8ozsXpGadVNkbCjoEUvNhnBLiU7Jb9dkk%2FZvOL%2BMfAaQugjPi%2FCcNL4rNm91mk1MUhrb0mMsPG7s12w%2FbKqIHDHHbkruado9yUM44V%2FxOLDtdSXbeVi%2BaD3uqIqN0OZzOO1iZCj%2FxopV3jUpZTpuYqmiGoMqEy9zAZFg1xKYzo0%2BWTOS1yqbvUUkvusOUdv7QnBpnlC1%2BoRApliMiRfhw2hvSOMeybFPapRSFHmuzHpDyFyiuCzAdoh7bNMa0I2v%2Fgnjd5NV%2BRn%2Bp0SqxssIlW4eHgzHPN91cXYswC%2FjGaamwUKKrfaIBRc57NBoRWp39UVIjO4tvNzR%2FiS3l%2FP72p9J52ecVpBWtt%2Fq%2B5GhhLp3fUtz6Va60ahaSU1MbVHnkAu3wN09KjZJ9FuQCtsW%2BezlZgc%2FdCdMLyakr4GOqUBpz2jT8rVcQVPdB4EhR8cf6Q4ZrkzQ9y4gcybugNOQJuRAJTGru7%2BQje9xE0OhHjbvWLqr%2B2TU0oIG2i%2BtHHyZH322ZMI%2B1R3JrOzy4cS76Ghu76jr%2B3APPIziX0Ja2tLIo%2B7C01EBR%2F%2BY%2F%2BW3NeAOIYskCbVOUUvF4j4KIUBj4LQvxeV%2Bme6owUaldiOKv2bTEuxaFCtM5BpvHZb7OZWlskqhdTY&X-Amz-Signature=e07c78eba3fdf8e4f3609420de6dae08695138b07ab459f1e9474aba92766574&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBMGIPGJ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T180904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCz%2B%2BPFcAXNfIHI%2FAQgXmTi24sjyxdiW0ggmhf6kC5uQAIgdx8WNhzQbG0UdC7uaPYzCE%2FnF7mvY9xP4%2FHiRo%2BT8pYqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImfWr0MnSvtQL1IZCrcA%2FLeqVlNKua9pmyhafzz584EqUTFgVNiwTvdRSUAOI3Z2QATYGxQW3IjowpPm5OirU6vW5bI3dMj%2FqSYOzjSeKZJnWGklVaN5DPwd5dmWGRqd7MNF3a7A8uwpgJJrGWAp16bEPST%2BF8KBcAna8i2Aupu6VuWtaqRCctZ5BZM7x5NbuvW5msFoTZURnBrw7TBL7SNl10ar3tThZYp2ZFlbCYIHMxFm8ozsXpGadVNkbCjoEUvNhnBLiU7Jb9dkk%2FZvOL%2BMfAaQugjPi%2FCcNL4rNm91mk1MUhrb0mMsPG7s12w%2FbKqIHDHHbkruado9yUM44V%2FxOLDtdSXbeVi%2BaD3uqIqN0OZzOO1iZCj%2FxopV3jUpZTpuYqmiGoMqEy9zAZFg1xKYzo0%2BWTOS1yqbvUUkvusOUdv7QnBpnlC1%2BoRApliMiRfhw2hvSOMeybFPapRSFHmuzHpDyFyiuCzAdoh7bNMa0I2v%2Fgnjd5NV%2BRn%2Bp0SqxssIlW4eHgzHPN91cXYswC%2FjGaamwUKKrfaIBRc57NBoRWp39UVIjO4tvNzR%2FiS3l%2FP72p9J52ecVpBWtt%2Fq%2B5GhhLp3fUtz6Va60ahaSU1MbVHnkAu3wN09KjZJ9FuQCtsW%2BezlZgc%2FdCdMLyakr4GOqUBpz2jT8rVcQVPdB4EhR8cf6Q4ZrkzQ9y4gcybugNOQJuRAJTGru7%2BQje9xE0OhHjbvWLqr%2B2TU0oIG2i%2BtHHyZH322ZMI%2B1R3JrOzy4cS76Ghu76jr%2B3APPIziX0Ja2tLIo%2B7C01EBR%2F%2BY%2F%2BW3NeAOIYskCbVOUUvF4j4KIUBj4LQvxeV%2Bme6owUaldiOKv2bTEuxaFCtM5BpvHZb7OZWlskqhdTY&X-Amz-Signature=1b5446aaaa45761dce8a8dbf9ff34468ef6d5fae0031cafadf7060f0863fac90&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBMGIPGJ%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T180904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCz%2B%2BPFcAXNfIHI%2FAQgXmTi24sjyxdiW0ggmhf6kC5uQAIgdx8WNhzQbG0UdC7uaPYzCE%2FnF7mvY9xP4%2FHiRo%2BT8pYqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDImfWr0MnSvtQL1IZCrcA%2FLeqVlNKua9pmyhafzz584EqUTFgVNiwTvdRSUAOI3Z2QATYGxQW3IjowpPm5OirU6vW5bI3dMj%2FqSYOzjSeKZJnWGklVaN5DPwd5dmWGRqd7MNF3a7A8uwpgJJrGWAp16bEPST%2BF8KBcAna8i2Aupu6VuWtaqRCctZ5BZM7x5NbuvW5msFoTZURnBrw7TBL7SNl10ar3tThZYp2ZFlbCYIHMxFm8ozsXpGadVNkbCjoEUvNhnBLiU7Jb9dkk%2FZvOL%2BMfAaQugjPi%2FCcNL4rNm91mk1MUhrb0mMsPG7s12w%2FbKqIHDHHbkruado9yUM44V%2FxOLDtdSXbeVi%2BaD3uqIqN0OZzOO1iZCj%2FxopV3jUpZTpuYqmiGoMqEy9zAZFg1xKYzo0%2BWTOS1yqbvUUkvusOUdv7QnBpnlC1%2BoRApliMiRfhw2hvSOMeybFPapRSFHmuzHpDyFyiuCzAdoh7bNMa0I2v%2Fgnjd5NV%2BRn%2Bp0SqxssIlW4eHgzHPN91cXYswC%2FjGaamwUKKrfaIBRc57NBoRWp39UVIjO4tvNzR%2FiS3l%2FP72p9J52ecVpBWtt%2Fq%2B5GhhLp3fUtz6Va60ahaSU1MbVHnkAu3wN09KjZJ9FuQCtsW%2BezlZgc%2FdCdMLyakr4GOqUBpz2jT8rVcQVPdB4EhR8cf6Q4ZrkzQ9y4gcybugNOQJuRAJTGru7%2BQje9xE0OhHjbvWLqr%2B2TU0oIG2i%2BtHHyZH322ZMI%2B1R3JrOzy4cS76Ghu76jr%2B3APPIziX0Ja2tLIo%2B7C01EBR%2F%2BY%2F%2BW3NeAOIYskCbVOUUvF4j4KIUBj4LQvxeV%2Bme6owUaldiOKv2bTEuxaFCtM5BpvHZb7OZWlskqhdTY&X-Amz-Signature=64e05f41b9f91c4699f301cbd77b45fe917365d9ca2f50659ebf6a3db22e2253&X-Amz-SignedHeaders=host&x-id=GetObject)
