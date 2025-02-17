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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AMBZUCV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T100851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIErnnunUKy7Z5WN%2BGf4hYi7PIiGztUMHen2ad9lxPUifAiBb8kRx2r%2F0vzyMyzJWFVAWA5q7WYUuHxB%2BtM5K3yFdiCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMAYzIFlJmvxWB9jlwKtwD2oGERqIwO5e1WBAts4gAgnIrJZQA17JgeiuqAuI6wMJ9M%2Fpcu98AafFFA3yn%2FAxDf%2F%2F8af6JrE6K9cQNiq71cC7g6QNrO5GzQ3VgzboW8uWWrbDrJ%2FOJSR9Gy34ET33qEW8VuRnZOCLXVv28ygPd93UJdHVWim4p%2Bz%2BcKXTmTp4awbqZZRfdyI469W1bSHQqdyC9mRM14n9csf5qlDx8TX2RObVMvwKRilYVeGoCCVQ0eK%2FNuFEwBTj8KLWnzxDia2p2J3BjDUY5VKEMacpJH0g%2F9OtGxroi4%2FHkS0dkZhiTqBuWnDJwhk%2B6gn0l0%2FF59j537GGm%2Fp1VOcvJ1PlL4m3eYJ7DrSp%2F%2Bzd%2Bc2l%2FuqJCk7wbO%2F1CkNr7m2B3aJojEEh3wXfbV4ogmrpbZcWmwP%2FPOMNDwsxM7Q%2BTAERqK%2FkfFN89H0Sw%2Fld4ff0pl%2BxUq54Fl21OCw4Q1H5wAPU8OXnNneizYuA90R7Imrza7Mx1V95WJ9d4ElE8ghV4xf7uLFoY%2Fim%2FL95%2FddravuMT%2BQnL10jUyKOBsGa43iQnR1Wt5PN92%2BivyTOrWxnUH3vPpRY9QOXkgYesXao0M3ulc5YL%2BJWW7SeTLE6SpiNa0SuWAMrB9XsyeI41RCMw%2F%2BjLvQY6pgE67wlN3AP8GspvLwuISSe9HxXWoFcl26BncymNZQvwkE5p0BVX0hKfZ7C%2BC7X1kDEi%2F7oh6OyMTvymVWc1St2pUj3wD6MPEE75AayesXUPUN%2BlJixLqxAaN3fzngg91nIF9tXIjQV7A5gPgjuj6iqu7ervZgkm77QHOf5X11aAplRZxbq7LrJrFwvzNOpq%2FUoXrFLH%2BC4yz6xFN8MSg2iqJh5oOc7k&X-Amz-Signature=9ee1c357137e4af355347c0b25c094931ee4dec85f2d236cb4066e38aeac0b9d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AMBZUCV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T100851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIErnnunUKy7Z5WN%2BGf4hYi7PIiGztUMHen2ad9lxPUifAiBb8kRx2r%2F0vzyMyzJWFVAWA5q7WYUuHxB%2BtM5K3yFdiCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMAYzIFlJmvxWB9jlwKtwD2oGERqIwO5e1WBAts4gAgnIrJZQA17JgeiuqAuI6wMJ9M%2Fpcu98AafFFA3yn%2FAxDf%2F%2F8af6JrE6K9cQNiq71cC7g6QNrO5GzQ3VgzboW8uWWrbDrJ%2FOJSR9Gy34ET33qEW8VuRnZOCLXVv28ygPd93UJdHVWim4p%2Bz%2BcKXTmTp4awbqZZRfdyI469W1bSHQqdyC9mRM14n9csf5qlDx8TX2RObVMvwKRilYVeGoCCVQ0eK%2FNuFEwBTj8KLWnzxDia2p2J3BjDUY5VKEMacpJH0g%2F9OtGxroi4%2FHkS0dkZhiTqBuWnDJwhk%2B6gn0l0%2FF59j537GGm%2Fp1VOcvJ1PlL4m3eYJ7DrSp%2F%2Bzd%2Bc2l%2FuqJCk7wbO%2F1CkNr7m2B3aJojEEh3wXfbV4ogmrpbZcWmwP%2FPOMNDwsxM7Q%2BTAERqK%2FkfFN89H0Sw%2Fld4ff0pl%2BxUq54Fl21OCw4Q1H5wAPU8OXnNneizYuA90R7Imrza7Mx1V95WJ9d4ElE8ghV4xf7uLFoY%2Fim%2FL95%2FddravuMT%2BQnL10jUyKOBsGa43iQnR1Wt5PN92%2BivyTOrWxnUH3vPpRY9QOXkgYesXao0M3ulc5YL%2BJWW7SeTLE6SpiNa0SuWAMrB9XsyeI41RCMw%2F%2BjLvQY6pgE67wlN3AP8GspvLwuISSe9HxXWoFcl26BncymNZQvwkE5p0BVX0hKfZ7C%2BC7X1kDEi%2F7oh6OyMTvymVWc1St2pUj3wD6MPEE75AayesXUPUN%2BlJixLqxAaN3fzngg91nIF9tXIjQV7A5gPgjuj6iqu7ervZgkm77QHOf5X11aAplRZxbq7LrJrFwvzNOpq%2FUoXrFLH%2BC4yz6xFN8MSg2iqJh5oOc7k&X-Amz-Signature=fecc9429d9df345c4358a67732d7db8a05ec5e9d447f510c73d0bbef238ed1f1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AMBZUCV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T100851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIErnnunUKy7Z5WN%2BGf4hYi7PIiGztUMHen2ad9lxPUifAiBb8kRx2r%2F0vzyMyzJWFVAWA5q7WYUuHxB%2BtM5K3yFdiCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMAYzIFlJmvxWB9jlwKtwD2oGERqIwO5e1WBAts4gAgnIrJZQA17JgeiuqAuI6wMJ9M%2Fpcu98AafFFA3yn%2FAxDf%2F%2F8af6JrE6K9cQNiq71cC7g6QNrO5GzQ3VgzboW8uWWrbDrJ%2FOJSR9Gy34ET33qEW8VuRnZOCLXVv28ygPd93UJdHVWim4p%2Bz%2BcKXTmTp4awbqZZRfdyI469W1bSHQqdyC9mRM14n9csf5qlDx8TX2RObVMvwKRilYVeGoCCVQ0eK%2FNuFEwBTj8KLWnzxDia2p2J3BjDUY5VKEMacpJH0g%2F9OtGxroi4%2FHkS0dkZhiTqBuWnDJwhk%2B6gn0l0%2FF59j537GGm%2Fp1VOcvJ1PlL4m3eYJ7DrSp%2F%2Bzd%2Bc2l%2FuqJCk7wbO%2F1CkNr7m2B3aJojEEh3wXfbV4ogmrpbZcWmwP%2FPOMNDwsxM7Q%2BTAERqK%2FkfFN89H0Sw%2Fld4ff0pl%2BxUq54Fl21OCw4Q1H5wAPU8OXnNneizYuA90R7Imrza7Mx1V95WJ9d4ElE8ghV4xf7uLFoY%2Fim%2FL95%2FddravuMT%2BQnL10jUyKOBsGa43iQnR1Wt5PN92%2BivyTOrWxnUH3vPpRY9QOXkgYesXao0M3ulc5YL%2BJWW7SeTLE6SpiNa0SuWAMrB9XsyeI41RCMw%2F%2BjLvQY6pgE67wlN3AP8GspvLwuISSe9HxXWoFcl26BncymNZQvwkE5p0BVX0hKfZ7C%2BC7X1kDEi%2F7oh6OyMTvymVWc1St2pUj3wD6MPEE75AayesXUPUN%2BlJixLqxAaN3fzngg91nIF9tXIjQV7A5gPgjuj6iqu7ervZgkm77QHOf5X11aAplRZxbq7LrJrFwvzNOpq%2FUoXrFLH%2BC4yz6xFN8MSg2iqJh5oOc7k&X-Amz-Signature=1225676ad1302547ab475c7114cded538c0442ea28955fe285edcb6aee46be80&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AMBZUCV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T100851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIErnnunUKy7Z5WN%2BGf4hYi7PIiGztUMHen2ad9lxPUifAiBb8kRx2r%2F0vzyMyzJWFVAWA5q7WYUuHxB%2BtM5K3yFdiCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMAYzIFlJmvxWB9jlwKtwD2oGERqIwO5e1WBAts4gAgnIrJZQA17JgeiuqAuI6wMJ9M%2Fpcu98AafFFA3yn%2FAxDf%2F%2F8af6JrE6K9cQNiq71cC7g6QNrO5GzQ3VgzboW8uWWrbDrJ%2FOJSR9Gy34ET33qEW8VuRnZOCLXVv28ygPd93UJdHVWim4p%2Bz%2BcKXTmTp4awbqZZRfdyI469W1bSHQqdyC9mRM14n9csf5qlDx8TX2RObVMvwKRilYVeGoCCVQ0eK%2FNuFEwBTj8KLWnzxDia2p2J3BjDUY5VKEMacpJH0g%2F9OtGxroi4%2FHkS0dkZhiTqBuWnDJwhk%2B6gn0l0%2FF59j537GGm%2Fp1VOcvJ1PlL4m3eYJ7DrSp%2F%2Bzd%2Bc2l%2FuqJCk7wbO%2F1CkNr7m2B3aJojEEh3wXfbV4ogmrpbZcWmwP%2FPOMNDwsxM7Q%2BTAERqK%2FkfFN89H0Sw%2Fld4ff0pl%2BxUq54Fl21OCw4Q1H5wAPU8OXnNneizYuA90R7Imrza7Mx1V95WJ9d4ElE8ghV4xf7uLFoY%2Fim%2FL95%2FddravuMT%2BQnL10jUyKOBsGa43iQnR1Wt5PN92%2BivyTOrWxnUH3vPpRY9QOXkgYesXao0M3ulc5YL%2BJWW7SeTLE6SpiNa0SuWAMrB9XsyeI41RCMw%2F%2BjLvQY6pgE67wlN3AP8GspvLwuISSe9HxXWoFcl26BncymNZQvwkE5p0BVX0hKfZ7C%2BC7X1kDEi%2F7oh6OyMTvymVWc1St2pUj3wD6MPEE75AayesXUPUN%2BlJixLqxAaN3fzngg91nIF9tXIjQV7A5gPgjuj6iqu7ervZgkm77QHOf5X11aAplRZxbq7LrJrFwvzNOpq%2FUoXrFLH%2BC4yz6xFN8MSg2iqJh5oOc7k&X-Amz-Signature=f77cefc75cfbc627fbc5c10e910fc1f7a2b9fba2575bb3cfbc9160b6d4afe300&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AMBZUCV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T100851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIErnnunUKy7Z5WN%2BGf4hYi7PIiGztUMHen2ad9lxPUifAiBb8kRx2r%2F0vzyMyzJWFVAWA5q7WYUuHxB%2BtM5K3yFdiCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMAYzIFlJmvxWB9jlwKtwD2oGERqIwO5e1WBAts4gAgnIrJZQA17JgeiuqAuI6wMJ9M%2Fpcu98AafFFA3yn%2FAxDf%2F%2F8af6JrE6K9cQNiq71cC7g6QNrO5GzQ3VgzboW8uWWrbDrJ%2FOJSR9Gy34ET33qEW8VuRnZOCLXVv28ygPd93UJdHVWim4p%2Bz%2BcKXTmTp4awbqZZRfdyI469W1bSHQqdyC9mRM14n9csf5qlDx8TX2RObVMvwKRilYVeGoCCVQ0eK%2FNuFEwBTj8KLWnzxDia2p2J3BjDUY5VKEMacpJH0g%2F9OtGxroi4%2FHkS0dkZhiTqBuWnDJwhk%2B6gn0l0%2FF59j537GGm%2Fp1VOcvJ1PlL4m3eYJ7DrSp%2F%2Bzd%2Bc2l%2FuqJCk7wbO%2F1CkNr7m2B3aJojEEh3wXfbV4ogmrpbZcWmwP%2FPOMNDwsxM7Q%2BTAERqK%2FkfFN89H0Sw%2Fld4ff0pl%2BxUq54Fl21OCw4Q1H5wAPU8OXnNneizYuA90R7Imrza7Mx1V95WJ9d4ElE8ghV4xf7uLFoY%2Fim%2FL95%2FddravuMT%2BQnL10jUyKOBsGa43iQnR1Wt5PN92%2BivyTOrWxnUH3vPpRY9QOXkgYesXao0M3ulc5YL%2BJWW7SeTLE6SpiNa0SuWAMrB9XsyeI41RCMw%2F%2BjLvQY6pgE67wlN3AP8GspvLwuISSe9HxXWoFcl26BncymNZQvwkE5p0BVX0hKfZ7C%2BC7X1kDEi%2F7oh6OyMTvymVWc1St2pUj3wD6MPEE75AayesXUPUN%2BlJixLqxAaN3fzngg91nIF9tXIjQV7A5gPgjuj6iqu7ervZgkm77QHOf5X11aAplRZxbq7LrJrFwvzNOpq%2FUoXrFLH%2BC4yz6xFN8MSg2iqJh5oOc7k&X-Amz-Signature=a23a56b87490de965bec84eb6371cb9fa9ec1699cd316e958bfd3e78c3e96450&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AMBZUCV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T100851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIErnnunUKy7Z5WN%2BGf4hYi7PIiGztUMHen2ad9lxPUifAiBb8kRx2r%2F0vzyMyzJWFVAWA5q7WYUuHxB%2BtM5K3yFdiCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMAYzIFlJmvxWB9jlwKtwD2oGERqIwO5e1WBAts4gAgnIrJZQA17JgeiuqAuI6wMJ9M%2Fpcu98AafFFA3yn%2FAxDf%2F%2F8af6JrE6K9cQNiq71cC7g6QNrO5GzQ3VgzboW8uWWrbDrJ%2FOJSR9Gy34ET33qEW8VuRnZOCLXVv28ygPd93UJdHVWim4p%2Bz%2BcKXTmTp4awbqZZRfdyI469W1bSHQqdyC9mRM14n9csf5qlDx8TX2RObVMvwKRilYVeGoCCVQ0eK%2FNuFEwBTj8KLWnzxDia2p2J3BjDUY5VKEMacpJH0g%2F9OtGxroi4%2FHkS0dkZhiTqBuWnDJwhk%2B6gn0l0%2FF59j537GGm%2Fp1VOcvJ1PlL4m3eYJ7DrSp%2F%2Bzd%2Bc2l%2FuqJCk7wbO%2F1CkNr7m2B3aJojEEh3wXfbV4ogmrpbZcWmwP%2FPOMNDwsxM7Q%2BTAERqK%2FkfFN89H0Sw%2Fld4ff0pl%2BxUq54Fl21OCw4Q1H5wAPU8OXnNneizYuA90R7Imrza7Mx1V95WJ9d4ElE8ghV4xf7uLFoY%2Fim%2FL95%2FddravuMT%2BQnL10jUyKOBsGa43iQnR1Wt5PN92%2BivyTOrWxnUH3vPpRY9QOXkgYesXao0M3ulc5YL%2BJWW7SeTLE6SpiNa0SuWAMrB9XsyeI41RCMw%2F%2BjLvQY6pgE67wlN3AP8GspvLwuISSe9HxXWoFcl26BncymNZQvwkE5p0BVX0hKfZ7C%2BC7X1kDEi%2F7oh6OyMTvymVWc1St2pUj3wD6MPEE75AayesXUPUN%2BlJixLqxAaN3fzngg91nIF9tXIjQV7A5gPgjuj6iqu7ervZgkm77QHOf5X11aAplRZxbq7LrJrFwvzNOpq%2FUoXrFLH%2BC4yz6xFN8MSg2iqJh5oOc7k&X-Amz-Signature=63b6c78c784d6f7d6a6e54cfee86e516db8d8a50006ba98c73fc4fbba97bfc7b&X-Amz-SignedHeaders=host&x-id=GetObject)
