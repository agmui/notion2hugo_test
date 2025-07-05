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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MKZHJXE%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T061204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIG%2F%2FfQTjvQu0LcLJe%2Bccrodut9jGuNieZfWHG%2FSfQqZ7AiBT3a0Bj1KH0xampQCvohPbSZyy3CQzqaCpalVLyUbTwyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMMBh8jXjG0T%2B2ZYOUKtwDunysQc5SrmZdM1i6hf2jXylIU1HRXo8TPishh%2BP9gSOtgyv8Oky8qy7xeAXQ4bbtk%2BpY6fq7RZuSjoezHbNO20tnh34riTcwdbU%2FJ2rejURytcOcVhWRLvYN7UUkkPJa7HWeBmCG4gzwudt8yfljhSx19sKGtC%2BT7hEMtJKmjaYGitzYZHdcKVqe5PoOxGrC5dbvR%2FFGSErvc7oGBj%2B8Ci0p0z7Ep6OpBFtcCyvwmUvTILolf19rzz9Rm60JNeEeSZIxYfk9hef%2FhuQBaqF%2FRs0fT68c60AIFUXjF5tFj37G%2F0j0gVzQsgD7josqXrhEiY5lHMowUl4wyQSyJ%2FP%2Bgd%2FBDsEhi0gXNWod7OL5bMViO9qdGAfr54xZFCIDfDt941iLy5ewocM0UF2y6EaNMcfzLqw1dPyBnbXI29sjy9xn7TDvce2HSFo9MOOHfBPfFlc%2FJeeNds72mCN8MIS%2BpO3SVer%2BPi%2FoAsjRWswkSnocR8bl9DHPt7gKoD728Vxw5pZVkm55lHseDDwMQijqGZar15IJp%2FPcJrTuG31ssBRvwzG0ZIka15%2F6ZtFGMSab74aP6UlXoNvrds2S8tI8otV%2FW77Da0CbMsaLbUkf17L4eqje1lo0BifPWTYw%2FumiwwY6pgFLxECM%2F13ZUJAlxLwyN6mYlMzsYgzrm0nQHzR6AfwNfVETbgdScn%2BRDK9Vm1Qg6Fmv4iAm8Wq65aokV0Q6kxlshWg28iaKk4s7f%2B2RoOcJwyN19GkIWCLxwkKkOo0NSoQNbibX9fjEd838Bjn6B4%2FZ5jKAlJNwMVS%2F1yn3HPow8XNj3SpWJP6bLZhLOE87tRBplJUjgKBmlR8cUFPfwmz8kjZOh5%2Fs&X-Amz-Signature=ad119bd9d2bae616dc960f3ab1493a61730b0783a2b8351966c1c805acffdb2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MKZHJXE%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T061204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIG%2F%2FfQTjvQu0LcLJe%2Bccrodut9jGuNieZfWHG%2FSfQqZ7AiBT3a0Bj1KH0xampQCvohPbSZyy3CQzqaCpalVLyUbTwyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMMBh8jXjG0T%2B2ZYOUKtwDunysQc5SrmZdM1i6hf2jXylIU1HRXo8TPishh%2BP9gSOtgyv8Oky8qy7xeAXQ4bbtk%2BpY6fq7RZuSjoezHbNO20tnh34riTcwdbU%2FJ2rejURytcOcVhWRLvYN7UUkkPJa7HWeBmCG4gzwudt8yfljhSx19sKGtC%2BT7hEMtJKmjaYGitzYZHdcKVqe5PoOxGrC5dbvR%2FFGSErvc7oGBj%2B8Ci0p0z7Ep6OpBFtcCyvwmUvTILolf19rzz9Rm60JNeEeSZIxYfk9hef%2FhuQBaqF%2FRs0fT68c60AIFUXjF5tFj37G%2F0j0gVzQsgD7josqXrhEiY5lHMowUl4wyQSyJ%2FP%2Bgd%2FBDsEhi0gXNWod7OL5bMViO9qdGAfr54xZFCIDfDt941iLy5ewocM0UF2y6EaNMcfzLqw1dPyBnbXI29sjy9xn7TDvce2HSFo9MOOHfBPfFlc%2FJeeNds72mCN8MIS%2BpO3SVer%2BPi%2FoAsjRWswkSnocR8bl9DHPt7gKoD728Vxw5pZVkm55lHseDDwMQijqGZar15IJp%2FPcJrTuG31ssBRvwzG0ZIka15%2F6ZtFGMSab74aP6UlXoNvrds2S8tI8otV%2FW77Da0CbMsaLbUkf17L4eqje1lo0BifPWTYw%2FumiwwY6pgFLxECM%2F13ZUJAlxLwyN6mYlMzsYgzrm0nQHzR6AfwNfVETbgdScn%2BRDK9Vm1Qg6Fmv4iAm8Wq65aokV0Q6kxlshWg28iaKk4s7f%2B2RoOcJwyN19GkIWCLxwkKkOo0NSoQNbibX9fjEd838Bjn6B4%2FZ5jKAlJNwMVS%2F1yn3HPow8XNj3SpWJP6bLZhLOE87tRBplJUjgKBmlR8cUFPfwmz8kjZOh5%2Fs&X-Amz-Signature=c891e21f5e8a356517c9c9c059745cf7a36300f5c92b0682dc41011a52ef958f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MKZHJXE%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T061204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIG%2F%2FfQTjvQu0LcLJe%2Bccrodut9jGuNieZfWHG%2FSfQqZ7AiBT3a0Bj1KH0xampQCvohPbSZyy3CQzqaCpalVLyUbTwyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMMBh8jXjG0T%2B2ZYOUKtwDunysQc5SrmZdM1i6hf2jXylIU1HRXo8TPishh%2BP9gSOtgyv8Oky8qy7xeAXQ4bbtk%2BpY6fq7RZuSjoezHbNO20tnh34riTcwdbU%2FJ2rejURytcOcVhWRLvYN7UUkkPJa7HWeBmCG4gzwudt8yfljhSx19sKGtC%2BT7hEMtJKmjaYGitzYZHdcKVqe5PoOxGrC5dbvR%2FFGSErvc7oGBj%2B8Ci0p0z7Ep6OpBFtcCyvwmUvTILolf19rzz9Rm60JNeEeSZIxYfk9hef%2FhuQBaqF%2FRs0fT68c60AIFUXjF5tFj37G%2F0j0gVzQsgD7josqXrhEiY5lHMowUl4wyQSyJ%2FP%2Bgd%2FBDsEhi0gXNWod7OL5bMViO9qdGAfr54xZFCIDfDt941iLy5ewocM0UF2y6EaNMcfzLqw1dPyBnbXI29sjy9xn7TDvce2HSFo9MOOHfBPfFlc%2FJeeNds72mCN8MIS%2BpO3SVer%2BPi%2FoAsjRWswkSnocR8bl9DHPt7gKoD728Vxw5pZVkm55lHseDDwMQijqGZar15IJp%2FPcJrTuG31ssBRvwzG0ZIka15%2F6ZtFGMSab74aP6UlXoNvrds2S8tI8otV%2FW77Da0CbMsaLbUkf17L4eqje1lo0BifPWTYw%2FumiwwY6pgFLxECM%2F13ZUJAlxLwyN6mYlMzsYgzrm0nQHzR6AfwNfVETbgdScn%2BRDK9Vm1Qg6Fmv4iAm8Wq65aokV0Q6kxlshWg28iaKk4s7f%2B2RoOcJwyN19GkIWCLxwkKkOo0NSoQNbibX9fjEd838Bjn6B4%2FZ5jKAlJNwMVS%2F1yn3HPow8XNj3SpWJP6bLZhLOE87tRBplJUjgKBmlR8cUFPfwmz8kjZOh5%2Fs&X-Amz-Signature=711983c7130b4e9c83e7487aef7ee8743a1b25b4cc04d3e40290e0f74e5f8f0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MKZHJXE%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T061204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIG%2F%2FfQTjvQu0LcLJe%2Bccrodut9jGuNieZfWHG%2FSfQqZ7AiBT3a0Bj1KH0xampQCvohPbSZyy3CQzqaCpalVLyUbTwyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMMBh8jXjG0T%2B2ZYOUKtwDunysQc5SrmZdM1i6hf2jXylIU1HRXo8TPishh%2BP9gSOtgyv8Oky8qy7xeAXQ4bbtk%2BpY6fq7RZuSjoezHbNO20tnh34riTcwdbU%2FJ2rejURytcOcVhWRLvYN7UUkkPJa7HWeBmCG4gzwudt8yfljhSx19sKGtC%2BT7hEMtJKmjaYGitzYZHdcKVqe5PoOxGrC5dbvR%2FFGSErvc7oGBj%2B8Ci0p0z7Ep6OpBFtcCyvwmUvTILolf19rzz9Rm60JNeEeSZIxYfk9hef%2FhuQBaqF%2FRs0fT68c60AIFUXjF5tFj37G%2F0j0gVzQsgD7josqXrhEiY5lHMowUl4wyQSyJ%2FP%2Bgd%2FBDsEhi0gXNWod7OL5bMViO9qdGAfr54xZFCIDfDt941iLy5ewocM0UF2y6EaNMcfzLqw1dPyBnbXI29sjy9xn7TDvce2HSFo9MOOHfBPfFlc%2FJeeNds72mCN8MIS%2BpO3SVer%2BPi%2FoAsjRWswkSnocR8bl9DHPt7gKoD728Vxw5pZVkm55lHseDDwMQijqGZar15IJp%2FPcJrTuG31ssBRvwzG0ZIka15%2F6ZtFGMSab74aP6UlXoNvrds2S8tI8otV%2FW77Da0CbMsaLbUkf17L4eqje1lo0BifPWTYw%2FumiwwY6pgFLxECM%2F13ZUJAlxLwyN6mYlMzsYgzrm0nQHzR6AfwNfVETbgdScn%2BRDK9Vm1Qg6Fmv4iAm8Wq65aokV0Q6kxlshWg28iaKk4s7f%2B2RoOcJwyN19GkIWCLxwkKkOo0NSoQNbibX9fjEd838Bjn6B4%2FZ5jKAlJNwMVS%2F1yn3HPow8XNj3SpWJP6bLZhLOE87tRBplJUjgKBmlR8cUFPfwmz8kjZOh5%2Fs&X-Amz-Signature=10ca01f636dfe5ae85114ae827ff9606b8843203865f3754b4255c9e26490f23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MKZHJXE%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T061205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIG%2F%2FfQTjvQu0LcLJe%2Bccrodut9jGuNieZfWHG%2FSfQqZ7AiBT3a0Bj1KH0xampQCvohPbSZyy3CQzqaCpalVLyUbTwyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMMBh8jXjG0T%2B2ZYOUKtwDunysQc5SrmZdM1i6hf2jXylIU1HRXo8TPishh%2BP9gSOtgyv8Oky8qy7xeAXQ4bbtk%2BpY6fq7RZuSjoezHbNO20tnh34riTcwdbU%2FJ2rejURytcOcVhWRLvYN7UUkkPJa7HWeBmCG4gzwudt8yfljhSx19sKGtC%2BT7hEMtJKmjaYGitzYZHdcKVqe5PoOxGrC5dbvR%2FFGSErvc7oGBj%2B8Ci0p0z7Ep6OpBFtcCyvwmUvTILolf19rzz9Rm60JNeEeSZIxYfk9hef%2FhuQBaqF%2FRs0fT68c60AIFUXjF5tFj37G%2F0j0gVzQsgD7josqXrhEiY5lHMowUl4wyQSyJ%2FP%2Bgd%2FBDsEhi0gXNWod7OL5bMViO9qdGAfr54xZFCIDfDt941iLy5ewocM0UF2y6EaNMcfzLqw1dPyBnbXI29sjy9xn7TDvce2HSFo9MOOHfBPfFlc%2FJeeNds72mCN8MIS%2BpO3SVer%2BPi%2FoAsjRWswkSnocR8bl9DHPt7gKoD728Vxw5pZVkm55lHseDDwMQijqGZar15IJp%2FPcJrTuG31ssBRvwzG0ZIka15%2F6ZtFGMSab74aP6UlXoNvrds2S8tI8otV%2FW77Da0CbMsaLbUkf17L4eqje1lo0BifPWTYw%2FumiwwY6pgFLxECM%2F13ZUJAlxLwyN6mYlMzsYgzrm0nQHzR6AfwNfVETbgdScn%2BRDK9Vm1Qg6Fmv4iAm8Wq65aokV0Q6kxlshWg28iaKk4s7f%2B2RoOcJwyN19GkIWCLxwkKkOo0NSoQNbibX9fjEd838Bjn6B4%2FZ5jKAlJNwMVS%2F1yn3HPow8XNj3SpWJP6bLZhLOE87tRBplJUjgKBmlR8cUFPfwmz8kjZOh5%2Fs&X-Amz-Signature=14325ad2281b9fd8faa3eb8f193b0cfc4cf5a9fdcf66090077faf5ed2741566a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MKZHJXE%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T061205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIG%2F%2FfQTjvQu0LcLJe%2Bccrodut9jGuNieZfWHG%2FSfQqZ7AiBT3a0Bj1KH0xampQCvohPbSZyy3CQzqaCpalVLyUbTwyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMMBh8jXjG0T%2B2ZYOUKtwDunysQc5SrmZdM1i6hf2jXylIU1HRXo8TPishh%2BP9gSOtgyv8Oky8qy7xeAXQ4bbtk%2BpY6fq7RZuSjoezHbNO20tnh34riTcwdbU%2FJ2rejURytcOcVhWRLvYN7UUkkPJa7HWeBmCG4gzwudt8yfljhSx19sKGtC%2BT7hEMtJKmjaYGitzYZHdcKVqe5PoOxGrC5dbvR%2FFGSErvc7oGBj%2B8Ci0p0z7Ep6OpBFtcCyvwmUvTILolf19rzz9Rm60JNeEeSZIxYfk9hef%2FhuQBaqF%2FRs0fT68c60AIFUXjF5tFj37G%2F0j0gVzQsgD7josqXrhEiY5lHMowUl4wyQSyJ%2FP%2Bgd%2FBDsEhi0gXNWod7OL5bMViO9qdGAfr54xZFCIDfDt941iLy5ewocM0UF2y6EaNMcfzLqw1dPyBnbXI29sjy9xn7TDvce2HSFo9MOOHfBPfFlc%2FJeeNds72mCN8MIS%2BpO3SVer%2BPi%2FoAsjRWswkSnocR8bl9DHPt7gKoD728Vxw5pZVkm55lHseDDwMQijqGZar15IJp%2FPcJrTuG31ssBRvwzG0ZIka15%2F6ZtFGMSab74aP6UlXoNvrds2S8tI8otV%2FW77Da0CbMsaLbUkf17L4eqje1lo0BifPWTYw%2FumiwwY6pgFLxECM%2F13ZUJAlxLwyN6mYlMzsYgzrm0nQHzR6AfwNfVETbgdScn%2BRDK9Vm1Qg6Fmv4iAm8Wq65aokV0Q6kxlshWg28iaKk4s7f%2B2RoOcJwyN19GkIWCLxwkKkOo0NSoQNbibX9fjEd838Bjn6B4%2FZ5jKAlJNwMVS%2F1yn3HPow8XNj3SpWJP6bLZhLOE87tRBplJUjgKBmlR8cUFPfwmz8kjZOh5%2Fs&X-Amz-Signature=0226e68d55c80cc732ab4163961e6f4ea2b66a03ad90e3892a8a936934236162&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
