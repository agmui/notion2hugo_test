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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5PR46PC%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T170804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqPr0uhNJCUTRqqYvo7Q8mqxrLVBT%2FF74n7JPpEjKUyQIgbg4iIeDruVqjyvEOqkDzhkY4Cu7eJ05aSx498j2HC%2FMq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDD55FZrGMEzMNL9snyrcA4fjh%2BYVeAciwWcup0MVaIIqdYjbm%2BM97PsS%2Fn%2Bps1Yg9ThR0LiivowkAHYrm6RvagYuOHrgvAik%2Fdytoet7XjWC9buhc%2BPU4i%2FN8Zk3zOitWr19CEBHRbJ3DKeQ2dzioDqnsvvmmiY4Bp4IYNBlQAJz6dDpIYSssa77DYHk5cXgnn5%2F21nfG%2BVvjVn%2Brp7NW0dZ0jKZ8%2BfHxVk2Jmc26AbQ9miPe8ODg%2FbRxP2SR1tz%2B8fX7Zi2X3x42SGkrYnceHS8pidybcB2xuxs%2BLMrBSDq7piOswcBoCWWXYPDrVolNrm4pxzXqtdd7HvgzjxvdOo1apCz36yJl%2Bi%2BIQzXZPDpomECKn6x7QSU4TVw2mUl4jjGxOqrdnRrJ79u%2FL38YK7ePxX7EC6dv7XueWLkpndTI1bRJO5TfFgg57uiQQLlvfcnoBJCQvDetfltJ4HArH4XnuG3fVCJcYjXAlKq3isQYSrut9%2FrujSA6c%2B1NTYrH8%2FPHwKedlwCKOuA6drp8qQO8iAeVYbETgly3ok%2B9YgbJO%2FqrcB5iNeqi7XqDStTXos1QzJHc0SLHghf1gamD3DjVFBUSJiOaKA0M5oG1oeKGURGK2qZL3rPoh0hXLx7Bs4S7LgXPfdrhLGUMOmI0L8GOqUBDsqphnd6XtIw9tMWsRhGcvf%2FRpmDdbFD934tnsJnNpvf6Yjm0st0NoxaM00RLVamdiybpdWcVb7vLRxoAF%2BYib26fWte6xMZaSrYhHFdEGr%2B%2F4qGBFiVGNlx1yyKKvvdmRUU3t9Bt7yCdrA0jg6QjXRfG0eXWgZIEcVd7RsnrCJ84bzfRKh7iAhCGr7b0kTJ7Y%2FjhaijzTENAN2zyqnRLjErgpwe&X-Amz-Signature=023a9af5482bd5da2048a7ec5f86af6fe3926755af7c1b26e96adac6f02e09d5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5PR46PC%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T170804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqPr0uhNJCUTRqqYvo7Q8mqxrLVBT%2FF74n7JPpEjKUyQIgbg4iIeDruVqjyvEOqkDzhkY4Cu7eJ05aSx498j2HC%2FMq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDD55FZrGMEzMNL9snyrcA4fjh%2BYVeAciwWcup0MVaIIqdYjbm%2BM97PsS%2Fn%2Bps1Yg9ThR0LiivowkAHYrm6RvagYuOHrgvAik%2Fdytoet7XjWC9buhc%2BPU4i%2FN8Zk3zOitWr19CEBHRbJ3DKeQ2dzioDqnsvvmmiY4Bp4IYNBlQAJz6dDpIYSssa77DYHk5cXgnn5%2F21nfG%2BVvjVn%2Brp7NW0dZ0jKZ8%2BfHxVk2Jmc26AbQ9miPe8ODg%2FbRxP2SR1tz%2B8fX7Zi2X3x42SGkrYnceHS8pidybcB2xuxs%2BLMrBSDq7piOswcBoCWWXYPDrVolNrm4pxzXqtdd7HvgzjxvdOo1apCz36yJl%2Bi%2BIQzXZPDpomECKn6x7QSU4TVw2mUl4jjGxOqrdnRrJ79u%2FL38YK7ePxX7EC6dv7XueWLkpndTI1bRJO5TfFgg57uiQQLlvfcnoBJCQvDetfltJ4HArH4XnuG3fVCJcYjXAlKq3isQYSrut9%2FrujSA6c%2B1NTYrH8%2FPHwKedlwCKOuA6drp8qQO8iAeVYbETgly3ok%2B9YgbJO%2FqrcB5iNeqi7XqDStTXos1QzJHc0SLHghf1gamD3DjVFBUSJiOaKA0M5oG1oeKGURGK2qZL3rPoh0hXLx7Bs4S7LgXPfdrhLGUMOmI0L8GOqUBDsqphnd6XtIw9tMWsRhGcvf%2FRpmDdbFD934tnsJnNpvf6Yjm0st0NoxaM00RLVamdiybpdWcVb7vLRxoAF%2BYib26fWte6xMZaSrYhHFdEGr%2B%2F4qGBFiVGNlx1yyKKvvdmRUU3t9Bt7yCdrA0jg6QjXRfG0eXWgZIEcVd7RsnrCJ84bzfRKh7iAhCGr7b0kTJ7Y%2FjhaijzTENAN2zyqnRLjErgpwe&X-Amz-Signature=3a2d32b8a153cb683849823e6f1ced89ba6ed59d5c62579bfeb9c9d41382064e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5PR46PC%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T170804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqPr0uhNJCUTRqqYvo7Q8mqxrLVBT%2FF74n7JPpEjKUyQIgbg4iIeDruVqjyvEOqkDzhkY4Cu7eJ05aSx498j2HC%2FMq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDD55FZrGMEzMNL9snyrcA4fjh%2BYVeAciwWcup0MVaIIqdYjbm%2BM97PsS%2Fn%2Bps1Yg9ThR0LiivowkAHYrm6RvagYuOHrgvAik%2Fdytoet7XjWC9buhc%2BPU4i%2FN8Zk3zOitWr19CEBHRbJ3DKeQ2dzioDqnsvvmmiY4Bp4IYNBlQAJz6dDpIYSssa77DYHk5cXgnn5%2F21nfG%2BVvjVn%2Brp7NW0dZ0jKZ8%2BfHxVk2Jmc26AbQ9miPe8ODg%2FbRxP2SR1tz%2B8fX7Zi2X3x42SGkrYnceHS8pidybcB2xuxs%2BLMrBSDq7piOswcBoCWWXYPDrVolNrm4pxzXqtdd7HvgzjxvdOo1apCz36yJl%2Bi%2BIQzXZPDpomECKn6x7QSU4TVw2mUl4jjGxOqrdnRrJ79u%2FL38YK7ePxX7EC6dv7XueWLkpndTI1bRJO5TfFgg57uiQQLlvfcnoBJCQvDetfltJ4HArH4XnuG3fVCJcYjXAlKq3isQYSrut9%2FrujSA6c%2B1NTYrH8%2FPHwKedlwCKOuA6drp8qQO8iAeVYbETgly3ok%2B9YgbJO%2FqrcB5iNeqi7XqDStTXos1QzJHc0SLHghf1gamD3DjVFBUSJiOaKA0M5oG1oeKGURGK2qZL3rPoh0hXLx7Bs4S7LgXPfdrhLGUMOmI0L8GOqUBDsqphnd6XtIw9tMWsRhGcvf%2FRpmDdbFD934tnsJnNpvf6Yjm0st0NoxaM00RLVamdiybpdWcVb7vLRxoAF%2BYib26fWte6xMZaSrYhHFdEGr%2B%2F4qGBFiVGNlx1yyKKvvdmRUU3t9Bt7yCdrA0jg6QjXRfG0eXWgZIEcVd7RsnrCJ84bzfRKh7iAhCGr7b0kTJ7Y%2FjhaijzTENAN2zyqnRLjErgpwe&X-Amz-Signature=8a4e2487afe6fed66eb736de3ef368becdd36b43b54adf7b2cdecaf60b8e8bc5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5PR46PC%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T170804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqPr0uhNJCUTRqqYvo7Q8mqxrLVBT%2FF74n7JPpEjKUyQIgbg4iIeDruVqjyvEOqkDzhkY4Cu7eJ05aSx498j2HC%2FMq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDD55FZrGMEzMNL9snyrcA4fjh%2BYVeAciwWcup0MVaIIqdYjbm%2BM97PsS%2Fn%2Bps1Yg9ThR0LiivowkAHYrm6RvagYuOHrgvAik%2Fdytoet7XjWC9buhc%2BPU4i%2FN8Zk3zOitWr19CEBHRbJ3DKeQ2dzioDqnsvvmmiY4Bp4IYNBlQAJz6dDpIYSssa77DYHk5cXgnn5%2F21nfG%2BVvjVn%2Brp7NW0dZ0jKZ8%2BfHxVk2Jmc26AbQ9miPe8ODg%2FbRxP2SR1tz%2B8fX7Zi2X3x42SGkrYnceHS8pidybcB2xuxs%2BLMrBSDq7piOswcBoCWWXYPDrVolNrm4pxzXqtdd7HvgzjxvdOo1apCz36yJl%2Bi%2BIQzXZPDpomECKn6x7QSU4TVw2mUl4jjGxOqrdnRrJ79u%2FL38YK7ePxX7EC6dv7XueWLkpndTI1bRJO5TfFgg57uiQQLlvfcnoBJCQvDetfltJ4HArH4XnuG3fVCJcYjXAlKq3isQYSrut9%2FrujSA6c%2B1NTYrH8%2FPHwKedlwCKOuA6drp8qQO8iAeVYbETgly3ok%2B9YgbJO%2FqrcB5iNeqi7XqDStTXos1QzJHc0SLHghf1gamD3DjVFBUSJiOaKA0M5oG1oeKGURGK2qZL3rPoh0hXLx7Bs4S7LgXPfdrhLGUMOmI0L8GOqUBDsqphnd6XtIw9tMWsRhGcvf%2FRpmDdbFD934tnsJnNpvf6Yjm0st0NoxaM00RLVamdiybpdWcVb7vLRxoAF%2BYib26fWte6xMZaSrYhHFdEGr%2B%2F4qGBFiVGNlx1yyKKvvdmRUU3t9Bt7yCdrA0jg6QjXRfG0eXWgZIEcVd7RsnrCJ84bzfRKh7iAhCGr7b0kTJ7Y%2FjhaijzTENAN2zyqnRLjErgpwe&X-Amz-Signature=9f567314e43f82a8ad8f3ec647fb4cf8c3ba4cbde02ba06440524ffa523d05c2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5PR46PC%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T170804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqPr0uhNJCUTRqqYvo7Q8mqxrLVBT%2FF74n7JPpEjKUyQIgbg4iIeDruVqjyvEOqkDzhkY4Cu7eJ05aSx498j2HC%2FMq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDD55FZrGMEzMNL9snyrcA4fjh%2BYVeAciwWcup0MVaIIqdYjbm%2BM97PsS%2Fn%2Bps1Yg9ThR0LiivowkAHYrm6RvagYuOHrgvAik%2Fdytoet7XjWC9buhc%2BPU4i%2FN8Zk3zOitWr19CEBHRbJ3DKeQ2dzioDqnsvvmmiY4Bp4IYNBlQAJz6dDpIYSssa77DYHk5cXgnn5%2F21nfG%2BVvjVn%2Brp7NW0dZ0jKZ8%2BfHxVk2Jmc26AbQ9miPe8ODg%2FbRxP2SR1tz%2B8fX7Zi2X3x42SGkrYnceHS8pidybcB2xuxs%2BLMrBSDq7piOswcBoCWWXYPDrVolNrm4pxzXqtdd7HvgzjxvdOo1apCz36yJl%2Bi%2BIQzXZPDpomECKn6x7QSU4TVw2mUl4jjGxOqrdnRrJ79u%2FL38YK7ePxX7EC6dv7XueWLkpndTI1bRJO5TfFgg57uiQQLlvfcnoBJCQvDetfltJ4HArH4XnuG3fVCJcYjXAlKq3isQYSrut9%2FrujSA6c%2B1NTYrH8%2FPHwKedlwCKOuA6drp8qQO8iAeVYbETgly3ok%2B9YgbJO%2FqrcB5iNeqi7XqDStTXos1QzJHc0SLHghf1gamD3DjVFBUSJiOaKA0M5oG1oeKGURGK2qZL3rPoh0hXLx7Bs4S7LgXPfdrhLGUMOmI0L8GOqUBDsqphnd6XtIw9tMWsRhGcvf%2FRpmDdbFD934tnsJnNpvf6Yjm0st0NoxaM00RLVamdiybpdWcVb7vLRxoAF%2BYib26fWte6xMZaSrYhHFdEGr%2B%2F4qGBFiVGNlx1yyKKvvdmRUU3t9Bt7yCdrA0jg6QjXRfG0eXWgZIEcVd7RsnrCJ84bzfRKh7iAhCGr7b0kTJ7Y%2FjhaijzTENAN2zyqnRLjErgpwe&X-Amz-Signature=4900c8574f0c725736c3e29fb32c57033c2a84d704cf7fb9ca7579354ea29ad9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5PR46PC%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T170804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqPr0uhNJCUTRqqYvo7Q8mqxrLVBT%2FF74n7JPpEjKUyQIgbg4iIeDruVqjyvEOqkDzhkY4Cu7eJ05aSx498j2HC%2FMq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDD55FZrGMEzMNL9snyrcA4fjh%2BYVeAciwWcup0MVaIIqdYjbm%2BM97PsS%2Fn%2Bps1Yg9ThR0LiivowkAHYrm6RvagYuOHrgvAik%2Fdytoet7XjWC9buhc%2BPU4i%2FN8Zk3zOitWr19CEBHRbJ3DKeQ2dzioDqnsvvmmiY4Bp4IYNBlQAJz6dDpIYSssa77DYHk5cXgnn5%2F21nfG%2BVvjVn%2Brp7NW0dZ0jKZ8%2BfHxVk2Jmc26AbQ9miPe8ODg%2FbRxP2SR1tz%2B8fX7Zi2X3x42SGkrYnceHS8pidybcB2xuxs%2BLMrBSDq7piOswcBoCWWXYPDrVolNrm4pxzXqtdd7HvgzjxvdOo1apCz36yJl%2Bi%2BIQzXZPDpomECKn6x7QSU4TVw2mUl4jjGxOqrdnRrJ79u%2FL38YK7ePxX7EC6dv7XueWLkpndTI1bRJO5TfFgg57uiQQLlvfcnoBJCQvDetfltJ4HArH4XnuG3fVCJcYjXAlKq3isQYSrut9%2FrujSA6c%2B1NTYrH8%2FPHwKedlwCKOuA6drp8qQO8iAeVYbETgly3ok%2B9YgbJO%2FqrcB5iNeqi7XqDStTXos1QzJHc0SLHghf1gamD3DjVFBUSJiOaKA0M5oG1oeKGURGK2qZL3rPoh0hXLx7Bs4S7LgXPfdrhLGUMOmI0L8GOqUBDsqphnd6XtIw9tMWsRhGcvf%2FRpmDdbFD934tnsJnNpvf6Yjm0st0NoxaM00RLVamdiybpdWcVb7vLRxoAF%2BYib26fWte6xMZaSrYhHFdEGr%2B%2F4qGBFiVGNlx1yyKKvvdmRUU3t9Bt7yCdrA0jg6QjXRfG0eXWgZIEcVd7RsnrCJ84bzfRKh7iAhCGr7b0kTJ7Y%2FjhaijzTENAN2zyqnRLjErgpwe&X-Amz-Signature=6102c067c6720d9fc5f34b37921f6ac2fb41f8adda34a3eea3db4d4ed79d06fc&X-Amz-SignedHeaders=host&x-id=GetObject)
