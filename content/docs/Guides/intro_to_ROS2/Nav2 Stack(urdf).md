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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LBSPXLD%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBQ9BrFuPCnoGcTS%2BhrES2f0oLkaAbZ3aGJ9A34ISa%2FUAiBaMTeTFRZxuPDEDbZq%2BomZDoquW4BZHhaUrzGcqkjd0yr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM175zM2VeuSG3Rc3nKtwDz%2BWSttREAuKIUuyr9ezVkS4rmbByhXXHRFk%2FluHuKCSybts1b9PLW42z0qsCAFGFdiOm%2FLMVYZhbuczHMvGn8Hu%2BPiL5GdahdQ6JpAB6OF8qa9xjomZgvcqsovjiHRfoakoQt5JTYrjOGkV0uNZoi8Zit6hlt9JoJclDmOuwsmiyldi4p4tnrOeMX4rIEdH7CCEf%2BeB3BVQDSn1FZrY7MfRnC6ARC6yJpSXKZ8vVBJGkb5u1ipz67ihDsoJ9kueUBHNY%2F8lEM0JUNKOHnlryjycJrk6rOCB2UszoYrfisDA8OfyMcj2lG%2FVVCq3Uf1ks9N9o6Cr46pLCqBMwrGzTfR4Q%2B4i3f%2F81cgTa726PQvRl8s6LMEwP%2B%2BjG2AzA5FHcazeOXNMxv57V7E3cXQkV3EZzowZioGVCZl4DBtM8cBCb8TA0jl4Vgq6SXioc8Z0KJTg8bcz9JYjnul3BFwaMC%2B6uuTcF%2BZYiDjmm70Byewf7U3Qf2VN05En7fgJYD4S%2BCaSiW5r6nzPiKuve0r1sCgxFyUCVXEvunYsWlnsO0zkxHi%2BYlkcgL1uCMFwsWirP%2B0XxTcNLnmw2VhHfMP4lZt9KHo6hBMO8I9JlSxpS1Z8%2F6XLUae2%2B%2B7ImHfsw59%2FewAY6pgF6bH0hbt0yAfCVwRqPYPgzIEb%2FGkTc1pkBnHK57NnTKwhzlWXx5sx%2FtSa0DFaUYunqdOB%2F%2F4SFgPxkaR4T8%2BvR%2BzcKfgpL%2FpjFfbp6X45m1Uz66Yr6Fb9ND9%2FmNI8eYHK2EtW6DpE%2Br8vvusEq4VkPbeF7IIlocIGaFK1UcLw84cC89RFKb5SM%2Fl3JnBpS8MlsV7ozYWrvzegBlv1Y5GzNMVFFHkVr&X-Amz-Signature=dc5bc37ddffd2caeda85c136d94965e503ed5920d6f07d05492cb7166bca6bb6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LBSPXLD%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBQ9BrFuPCnoGcTS%2BhrES2f0oLkaAbZ3aGJ9A34ISa%2FUAiBaMTeTFRZxuPDEDbZq%2BomZDoquW4BZHhaUrzGcqkjd0yr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM175zM2VeuSG3Rc3nKtwDz%2BWSttREAuKIUuyr9ezVkS4rmbByhXXHRFk%2FluHuKCSybts1b9PLW42z0qsCAFGFdiOm%2FLMVYZhbuczHMvGn8Hu%2BPiL5GdahdQ6JpAB6OF8qa9xjomZgvcqsovjiHRfoakoQt5JTYrjOGkV0uNZoi8Zit6hlt9JoJclDmOuwsmiyldi4p4tnrOeMX4rIEdH7CCEf%2BeB3BVQDSn1FZrY7MfRnC6ARC6yJpSXKZ8vVBJGkb5u1ipz67ihDsoJ9kueUBHNY%2F8lEM0JUNKOHnlryjycJrk6rOCB2UszoYrfisDA8OfyMcj2lG%2FVVCq3Uf1ks9N9o6Cr46pLCqBMwrGzTfR4Q%2B4i3f%2F81cgTa726PQvRl8s6LMEwP%2B%2BjG2AzA5FHcazeOXNMxv57V7E3cXQkV3EZzowZioGVCZl4DBtM8cBCb8TA0jl4Vgq6SXioc8Z0KJTg8bcz9JYjnul3BFwaMC%2B6uuTcF%2BZYiDjmm70Byewf7U3Qf2VN05En7fgJYD4S%2BCaSiW5r6nzPiKuve0r1sCgxFyUCVXEvunYsWlnsO0zkxHi%2BYlkcgL1uCMFwsWirP%2B0XxTcNLnmw2VhHfMP4lZt9KHo6hBMO8I9JlSxpS1Z8%2F6XLUae2%2B%2B7ImHfsw59%2FewAY6pgF6bH0hbt0yAfCVwRqPYPgzIEb%2FGkTc1pkBnHK57NnTKwhzlWXx5sx%2FtSa0DFaUYunqdOB%2F%2F4SFgPxkaR4T8%2BvR%2BzcKfgpL%2FpjFfbp6X45m1Uz66Yr6Fb9ND9%2FmNI8eYHK2EtW6DpE%2Br8vvusEq4VkPbeF7IIlocIGaFK1UcLw84cC89RFKb5SM%2Fl3JnBpS8MlsV7ozYWrvzegBlv1Y5GzNMVFFHkVr&X-Amz-Signature=d5d7771f643e209176a0c88b03a0421bd563754320413bd8c6b36a7f8bf2acd4&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LBSPXLD%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBQ9BrFuPCnoGcTS%2BhrES2f0oLkaAbZ3aGJ9A34ISa%2FUAiBaMTeTFRZxuPDEDbZq%2BomZDoquW4BZHhaUrzGcqkjd0yr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM175zM2VeuSG3Rc3nKtwDz%2BWSttREAuKIUuyr9ezVkS4rmbByhXXHRFk%2FluHuKCSybts1b9PLW42z0qsCAFGFdiOm%2FLMVYZhbuczHMvGn8Hu%2BPiL5GdahdQ6JpAB6OF8qa9xjomZgvcqsovjiHRfoakoQt5JTYrjOGkV0uNZoi8Zit6hlt9JoJclDmOuwsmiyldi4p4tnrOeMX4rIEdH7CCEf%2BeB3BVQDSn1FZrY7MfRnC6ARC6yJpSXKZ8vVBJGkb5u1ipz67ihDsoJ9kueUBHNY%2F8lEM0JUNKOHnlryjycJrk6rOCB2UszoYrfisDA8OfyMcj2lG%2FVVCq3Uf1ks9N9o6Cr46pLCqBMwrGzTfR4Q%2B4i3f%2F81cgTa726PQvRl8s6LMEwP%2B%2BjG2AzA5FHcazeOXNMxv57V7E3cXQkV3EZzowZioGVCZl4DBtM8cBCb8TA0jl4Vgq6SXioc8Z0KJTg8bcz9JYjnul3BFwaMC%2B6uuTcF%2BZYiDjmm70Byewf7U3Qf2VN05En7fgJYD4S%2BCaSiW5r6nzPiKuve0r1sCgxFyUCVXEvunYsWlnsO0zkxHi%2BYlkcgL1uCMFwsWirP%2B0XxTcNLnmw2VhHfMP4lZt9KHo6hBMO8I9JlSxpS1Z8%2F6XLUae2%2B%2B7ImHfsw59%2FewAY6pgF6bH0hbt0yAfCVwRqPYPgzIEb%2FGkTc1pkBnHK57NnTKwhzlWXx5sx%2FtSa0DFaUYunqdOB%2F%2F4SFgPxkaR4T8%2BvR%2BzcKfgpL%2FpjFfbp6X45m1Uz66Yr6Fb9ND9%2FmNI8eYHK2EtW6DpE%2Br8vvusEq4VkPbeF7IIlocIGaFK1UcLw84cC89RFKb5SM%2Fl3JnBpS8MlsV7ozYWrvzegBlv1Y5GzNMVFFHkVr&X-Amz-Signature=acc0fc1bf6678496b9cc7604ebb527d8243f0fd8370a600b118a6633e579cc1e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LBSPXLD%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBQ9BrFuPCnoGcTS%2BhrES2f0oLkaAbZ3aGJ9A34ISa%2FUAiBaMTeTFRZxuPDEDbZq%2BomZDoquW4BZHhaUrzGcqkjd0yr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM175zM2VeuSG3Rc3nKtwDz%2BWSttREAuKIUuyr9ezVkS4rmbByhXXHRFk%2FluHuKCSybts1b9PLW42z0qsCAFGFdiOm%2FLMVYZhbuczHMvGn8Hu%2BPiL5GdahdQ6JpAB6OF8qa9xjomZgvcqsovjiHRfoakoQt5JTYrjOGkV0uNZoi8Zit6hlt9JoJclDmOuwsmiyldi4p4tnrOeMX4rIEdH7CCEf%2BeB3BVQDSn1FZrY7MfRnC6ARC6yJpSXKZ8vVBJGkb5u1ipz67ihDsoJ9kueUBHNY%2F8lEM0JUNKOHnlryjycJrk6rOCB2UszoYrfisDA8OfyMcj2lG%2FVVCq3Uf1ks9N9o6Cr46pLCqBMwrGzTfR4Q%2B4i3f%2F81cgTa726PQvRl8s6LMEwP%2B%2BjG2AzA5FHcazeOXNMxv57V7E3cXQkV3EZzowZioGVCZl4DBtM8cBCb8TA0jl4Vgq6SXioc8Z0KJTg8bcz9JYjnul3BFwaMC%2B6uuTcF%2BZYiDjmm70Byewf7U3Qf2VN05En7fgJYD4S%2BCaSiW5r6nzPiKuve0r1sCgxFyUCVXEvunYsWlnsO0zkxHi%2BYlkcgL1uCMFwsWirP%2B0XxTcNLnmw2VhHfMP4lZt9KHo6hBMO8I9JlSxpS1Z8%2F6XLUae2%2B%2B7ImHfsw59%2FewAY6pgF6bH0hbt0yAfCVwRqPYPgzIEb%2FGkTc1pkBnHK57NnTKwhzlWXx5sx%2FtSa0DFaUYunqdOB%2F%2F4SFgPxkaR4T8%2BvR%2BzcKfgpL%2FpjFfbp6X45m1Uz66Yr6Fb9ND9%2FmNI8eYHK2EtW6DpE%2Br8vvusEq4VkPbeF7IIlocIGaFK1UcLw84cC89RFKb5SM%2Fl3JnBpS8MlsV7ozYWrvzegBlv1Y5GzNMVFFHkVr&X-Amz-Signature=f62f2757569039d9234d6ac03540c189315e081fb51ff4a37b3c480204d7898e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LBSPXLD%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBQ9BrFuPCnoGcTS%2BhrES2f0oLkaAbZ3aGJ9A34ISa%2FUAiBaMTeTFRZxuPDEDbZq%2BomZDoquW4BZHhaUrzGcqkjd0yr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM175zM2VeuSG3Rc3nKtwDz%2BWSttREAuKIUuyr9ezVkS4rmbByhXXHRFk%2FluHuKCSybts1b9PLW42z0qsCAFGFdiOm%2FLMVYZhbuczHMvGn8Hu%2BPiL5GdahdQ6JpAB6OF8qa9xjomZgvcqsovjiHRfoakoQt5JTYrjOGkV0uNZoi8Zit6hlt9JoJclDmOuwsmiyldi4p4tnrOeMX4rIEdH7CCEf%2BeB3BVQDSn1FZrY7MfRnC6ARC6yJpSXKZ8vVBJGkb5u1ipz67ihDsoJ9kueUBHNY%2F8lEM0JUNKOHnlryjycJrk6rOCB2UszoYrfisDA8OfyMcj2lG%2FVVCq3Uf1ks9N9o6Cr46pLCqBMwrGzTfR4Q%2B4i3f%2F81cgTa726PQvRl8s6LMEwP%2B%2BjG2AzA5FHcazeOXNMxv57V7E3cXQkV3EZzowZioGVCZl4DBtM8cBCb8TA0jl4Vgq6SXioc8Z0KJTg8bcz9JYjnul3BFwaMC%2B6uuTcF%2BZYiDjmm70Byewf7U3Qf2VN05En7fgJYD4S%2BCaSiW5r6nzPiKuve0r1sCgxFyUCVXEvunYsWlnsO0zkxHi%2BYlkcgL1uCMFwsWirP%2B0XxTcNLnmw2VhHfMP4lZt9KHo6hBMO8I9JlSxpS1Z8%2F6XLUae2%2B%2B7ImHfsw59%2FewAY6pgF6bH0hbt0yAfCVwRqPYPgzIEb%2FGkTc1pkBnHK57NnTKwhzlWXx5sx%2FtSa0DFaUYunqdOB%2F%2F4SFgPxkaR4T8%2BvR%2BzcKfgpL%2FpjFfbp6X45m1Uz66Yr6Fb9ND9%2FmNI8eYHK2EtW6DpE%2Br8vvusEq4VkPbeF7IIlocIGaFK1UcLw84cC89RFKb5SM%2Fl3JnBpS8MlsV7ozYWrvzegBlv1Y5GzNMVFFHkVr&X-Amz-Signature=1dcca41eabb4c35c9eb219d1bb3d91985e3938567f1ee5b0bea87d63f9cfb1b6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LBSPXLD%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIBQ9BrFuPCnoGcTS%2BhrES2f0oLkaAbZ3aGJ9A34ISa%2FUAiBaMTeTFRZxuPDEDbZq%2BomZDoquW4BZHhaUrzGcqkjd0yr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIM175zM2VeuSG3Rc3nKtwDz%2BWSttREAuKIUuyr9ezVkS4rmbByhXXHRFk%2FluHuKCSybts1b9PLW42z0qsCAFGFdiOm%2FLMVYZhbuczHMvGn8Hu%2BPiL5GdahdQ6JpAB6OF8qa9xjomZgvcqsovjiHRfoakoQt5JTYrjOGkV0uNZoi8Zit6hlt9JoJclDmOuwsmiyldi4p4tnrOeMX4rIEdH7CCEf%2BeB3BVQDSn1FZrY7MfRnC6ARC6yJpSXKZ8vVBJGkb5u1ipz67ihDsoJ9kueUBHNY%2F8lEM0JUNKOHnlryjycJrk6rOCB2UszoYrfisDA8OfyMcj2lG%2FVVCq3Uf1ks9N9o6Cr46pLCqBMwrGzTfR4Q%2B4i3f%2F81cgTa726PQvRl8s6LMEwP%2B%2BjG2AzA5FHcazeOXNMxv57V7E3cXQkV3EZzowZioGVCZl4DBtM8cBCb8TA0jl4Vgq6SXioc8Z0KJTg8bcz9JYjnul3BFwaMC%2B6uuTcF%2BZYiDjmm70Byewf7U3Qf2VN05En7fgJYD4S%2BCaSiW5r6nzPiKuve0r1sCgxFyUCVXEvunYsWlnsO0zkxHi%2BYlkcgL1uCMFwsWirP%2B0XxTcNLnmw2VhHfMP4lZt9KHo6hBMO8I9JlSxpS1Z8%2F6XLUae2%2B%2B7ImHfsw59%2FewAY6pgF6bH0hbt0yAfCVwRqPYPgzIEb%2FGkTc1pkBnHK57NnTKwhzlWXx5sx%2FtSa0DFaUYunqdOB%2F%2F4SFgPxkaR4T8%2BvR%2BzcKfgpL%2FpjFfbp6X45m1Uz66Yr6Fb9ND9%2FmNI8eYHK2EtW6DpE%2Br8vvusEq4VkPbeF7IIlocIGaFK1UcLw84cC89RFKb5SM%2Fl3JnBpS8MlsV7ozYWrvzegBlv1Y5GzNMVFFHkVr&X-Amz-Signature=e3ba720631e52d56609956e9bcee18f47fb656cd686411d4066627ba8c0e5818&X-Amz-SignedHeaders=host&x-id=GetObject)
