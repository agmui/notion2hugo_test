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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXC3OBDM%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T132622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDqRCo%2Fg1r8wSTYvDz08jIKau2woCU0qRCvWWgzq%2BNj4QIhAJZRlJNZ31n1yLqwFg91tFBViA0XrPtJ10MEl%2FBLe1MFKv8DCHYQABoMNjM3NDIzMTgzODA1Igx%2By%2Bw%2Foz3XymI0vl8q3APQWyjvuUs2NZUSbxaDsdlVj1SZNqz1d7%2BEQvwuOl56ulyxiG3jbtYcPyvGnDQv4z%2FVF8oiT9Pj8Mvr4ZNm%2F%2Buy9GUkrqmtn9%2F9an8WQZjRcRV0evEa7ZFX%2FjVmMwx%2FOS8ampTI1npwaXq1CI98By%2FFjejO%2FxpB4Dh%2B3ee1o8HW5rfUME6gqSPh7YUoUH%2FPJqapuO78rHoJLYgh90rcKqr7jDtPhAMFRcdKgtMVykvAm5L%2BeKIcGc9EX1lxTq6WcmVrDXPlOtdyCMsZjQjOkTOI3DTNytyDmqar07qcrX5VT05uhaaTdQ1kVpm%2FZmLsddfSY%2FuCkGD5Gn6Cd7wK5CvKtoUvgO0%2BrKKilMaz5FUYS6twefTIUT8HY7vUn05nlmPY1YdxKIo3IGT2jHH0gAt8tQwPYKVroQd58MxM3c6pxGv7StDSZl4agkUYQddWeQTdDshwsg8O%2BSVlM%2FE5j76BskxEFsVb%2FEjydMW219JYi94krqVY8M3O3Cl8Kx9IoVNAikCEh9uRdWXq2%2BlzbsfqSd0sPJLtml1pTDDhZOwgLMsCCnnX%2FULC62TE5JhuLdMAM2keTIXSB7n1Gojk3pKOf6KjhWY25Xw78s9ZSoPPl292m%2FfhPQgnLU83xTCyi6%2FDBjqkARhfmJrKY6JiGp4uiQexKUYNWoiNL1KQIgO%2F%2ByzaJwKRW2ejl4YP5fdMjRpmPBVDz%2FZisbwNpRvX6buhrcSHrhOdi5JASfZEWti%2Fqez7Ze87CMTQTZy9P4RHeJ6JLXzCJetERiaJUCUwHjrNm%2B9UYBj0XOqImsJiO9uPXYu%2B8gplsIcOWRD2uoCE9AZBRSWhUmaOlhhqkKqToilMuO%2Fg%2BSTM1svp&X-Amz-Signature=1409c254f7decbe7f2c974d5a166a153aa0422fab6645d53297d703bf746aae0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXC3OBDM%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T132622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDqRCo%2Fg1r8wSTYvDz08jIKau2woCU0qRCvWWgzq%2BNj4QIhAJZRlJNZ31n1yLqwFg91tFBViA0XrPtJ10MEl%2FBLe1MFKv8DCHYQABoMNjM3NDIzMTgzODA1Igx%2By%2Bw%2Foz3XymI0vl8q3APQWyjvuUs2NZUSbxaDsdlVj1SZNqz1d7%2BEQvwuOl56ulyxiG3jbtYcPyvGnDQv4z%2FVF8oiT9Pj8Mvr4ZNm%2F%2Buy9GUkrqmtn9%2F9an8WQZjRcRV0evEa7ZFX%2FjVmMwx%2FOS8ampTI1npwaXq1CI98By%2FFjejO%2FxpB4Dh%2B3ee1o8HW5rfUME6gqSPh7YUoUH%2FPJqapuO78rHoJLYgh90rcKqr7jDtPhAMFRcdKgtMVykvAm5L%2BeKIcGc9EX1lxTq6WcmVrDXPlOtdyCMsZjQjOkTOI3DTNytyDmqar07qcrX5VT05uhaaTdQ1kVpm%2FZmLsddfSY%2FuCkGD5Gn6Cd7wK5CvKtoUvgO0%2BrKKilMaz5FUYS6twefTIUT8HY7vUn05nlmPY1YdxKIo3IGT2jHH0gAt8tQwPYKVroQd58MxM3c6pxGv7StDSZl4agkUYQddWeQTdDshwsg8O%2BSVlM%2FE5j76BskxEFsVb%2FEjydMW219JYi94krqVY8M3O3Cl8Kx9IoVNAikCEh9uRdWXq2%2BlzbsfqSd0sPJLtml1pTDDhZOwgLMsCCnnX%2FULC62TE5JhuLdMAM2keTIXSB7n1Gojk3pKOf6KjhWY25Xw78s9ZSoPPl292m%2FfhPQgnLU83xTCyi6%2FDBjqkARhfmJrKY6JiGp4uiQexKUYNWoiNL1KQIgO%2F%2ByzaJwKRW2ejl4YP5fdMjRpmPBVDz%2FZisbwNpRvX6buhrcSHrhOdi5JASfZEWti%2Fqez7Ze87CMTQTZy9P4RHeJ6JLXzCJetERiaJUCUwHjrNm%2B9UYBj0XOqImsJiO9uPXYu%2B8gplsIcOWRD2uoCE9AZBRSWhUmaOlhhqkKqToilMuO%2Fg%2BSTM1svp&X-Amz-Signature=e34678c0f073cb03b54f3d078477b074de4fe57b0fc90882b3f1e4418451bd4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXC3OBDM%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T132622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDqRCo%2Fg1r8wSTYvDz08jIKau2woCU0qRCvWWgzq%2BNj4QIhAJZRlJNZ31n1yLqwFg91tFBViA0XrPtJ10MEl%2FBLe1MFKv8DCHYQABoMNjM3NDIzMTgzODA1Igx%2By%2Bw%2Foz3XymI0vl8q3APQWyjvuUs2NZUSbxaDsdlVj1SZNqz1d7%2BEQvwuOl56ulyxiG3jbtYcPyvGnDQv4z%2FVF8oiT9Pj8Mvr4ZNm%2F%2Buy9GUkrqmtn9%2F9an8WQZjRcRV0evEa7ZFX%2FjVmMwx%2FOS8ampTI1npwaXq1CI98By%2FFjejO%2FxpB4Dh%2B3ee1o8HW5rfUME6gqSPh7YUoUH%2FPJqapuO78rHoJLYgh90rcKqr7jDtPhAMFRcdKgtMVykvAm5L%2BeKIcGc9EX1lxTq6WcmVrDXPlOtdyCMsZjQjOkTOI3DTNytyDmqar07qcrX5VT05uhaaTdQ1kVpm%2FZmLsddfSY%2FuCkGD5Gn6Cd7wK5CvKtoUvgO0%2BrKKilMaz5FUYS6twefTIUT8HY7vUn05nlmPY1YdxKIo3IGT2jHH0gAt8tQwPYKVroQd58MxM3c6pxGv7StDSZl4agkUYQddWeQTdDshwsg8O%2BSVlM%2FE5j76BskxEFsVb%2FEjydMW219JYi94krqVY8M3O3Cl8Kx9IoVNAikCEh9uRdWXq2%2BlzbsfqSd0sPJLtml1pTDDhZOwgLMsCCnnX%2FULC62TE5JhuLdMAM2keTIXSB7n1Gojk3pKOf6KjhWY25Xw78s9ZSoPPl292m%2FfhPQgnLU83xTCyi6%2FDBjqkARhfmJrKY6JiGp4uiQexKUYNWoiNL1KQIgO%2F%2ByzaJwKRW2ejl4YP5fdMjRpmPBVDz%2FZisbwNpRvX6buhrcSHrhOdi5JASfZEWti%2Fqez7Ze87CMTQTZy9P4RHeJ6JLXzCJetERiaJUCUwHjrNm%2B9UYBj0XOqImsJiO9uPXYu%2B8gplsIcOWRD2uoCE9AZBRSWhUmaOlhhqkKqToilMuO%2Fg%2BSTM1svp&X-Amz-Signature=8a068bf8cd4e98594fa5e7d4f1f0dc140a32fd232aeee2f768adae9f61e46e12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXC3OBDM%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T132622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDqRCo%2Fg1r8wSTYvDz08jIKau2woCU0qRCvWWgzq%2BNj4QIhAJZRlJNZ31n1yLqwFg91tFBViA0XrPtJ10MEl%2FBLe1MFKv8DCHYQABoMNjM3NDIzMTgzODA1Igx%2By%2Bw%2Foz3XymI0vl8q3APQWyjvuUs2NZUSbxaDsdlVj1SZNqz1d7%2BEQvwuOl56ulyxiG3jbtYcPyvGnDQv4z%2FVF8oiT9Pj8Mvr4ZNm%2F%2Buy9GUkrqmtn9%2F9an8WQZjRcRV0evEa7ZFX%2FjVmMwx%2FOS8ampTI1npwaXq1CI98By%2FFjejO%2FxpB4Dh%2B3ee1o8HW5rfUME6gqSPh7YUoUH%2FPJqapuO78rHoJLYgh90rcKqr7jDtPhAMFRcdKgtMVykvAm5L%2BeKIcGc9EX1lxTq6WcmVrDXPlOtdyCMsZjQjOkTOI3DTNytyDmqar07qcrX5VT05uhaaTdQ1kVpm%2FZmLsddfSY%2FuCkGD5Gn6Cd7wK5CvKtoUvgO0%2BrKKilMaz5FUYS6twefTIUT8HY7vUn05nlmPY1YdxKIo3IGT2jHH0gAt8tQwPYKVroQd58MxM3c6pxGv7StDSZl4agkUYQddWeQTdDshwsg8O%2BSVlM%2FE5j76BskxEFsVb%2FEjydMW219JYi94krqVY8M3O3Cl8Kx9IoVNAikCEh9uRdWXq2%2BlzbsfqSd0sPJLtml1pTDDhZOwgLMsCCnnX%2FULC62TE5JhuLdMAM2keTIXSB7n1Gojk3pKOf6KjhWY25Xw78s9ZSoPPl292m%2FfhPQgnLU83xTCyi6%2FDBjqkARhfmJrKY6JiGp4uiQexKUYNWoiNL1KQIgO%2F%2ByzaJwKRW2ejl4YP5fdMjRpmPBVDz%2FZisbwNpRvX6buhrcSHrhOdi5JASfZEWti%2Fqez7Ze87CMTQTZy9P4RHeJ6JLXzCJetERiaJUCUwHjrNm%2B9UYBj0XOqImsJiO9uPXYu%2B8gplsIcOWRD2uoCE9AZBRSWhUmaOlhhqkKqToilMuO%2Fg%2BSTM1svp&X-Amz-Signature=9b03eafcbcb0dfc41a2933a2196f2f54c6161f11a01088f2dc401dd4fae5eea3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXC3OBDM%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T132622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDqRCo%2Fg1r8wSTYvDz08jIKau2woCU0qRCvWWgzq%2BNj4QIhAJZRlJNZ31n1yLqwFg91tFBViA0XrPtJ10MEl%2FBLe1MFKv8DCHYQABoMNjM3NDIzMTgzODA1Igx%2By%2Bw%2Foz3XymI0vl8q3APQWyjvuUs2NZUSbxaDsdlVj1SZNqz1d7%2BEQvwuOl56ulyxiG3jbtYcPyvGnDQv4z%2FVF8oiT9Pj8Mvr4ZNm%2F%2Buy9GUkrqmtn9%2F9an8WQZjRcRV0evEa7ZFX%2FjVmMwx%2FOS8ampTI1npwaXq1CI98By%2FFjejO%2FxpB4Dh%2B3ee1o8HW5rfUME6gqSPh7YUoUH%2FPJqapuO78rHoJLYgh90rcKqr7jDtPhAMFRcdKgtMVykvAm5L%2BeKIcGc9EX1lxTq6WcmVrDXPlOtdyCMsZjQjOkTOI3DTNytyDmqar07qcrX5VT05uhaaTdQ1kVpm%2FZmLsddfSY%2FuCkGD5Gn6Cd7wK5CvKtoUvgO0%2BrKKilMaz5FUYS6twefTIUT8HY7vUn05nlmPY1YdxKIo3IGT2jHH0gAt8tQwPYKVroQd58MxM3c6pxGv7StDSZl4agkUYQddWeQTdDshwsg8O%2BSVlM%2FE5j76BskxEFsVb%2FEjydMW219JYi94krqVY8M3O3Cl8Kx9IoVNAikCEh9uRdWXq2%2BlzbsfqSd0sPJLtml1pTDDhZOwgLMsCCnnX%2FULC62TE5JhuLdMAM2keTIXSB7n1Gojk3pKOf6KjhWY25Xw78s9ZSoPPl292m%2FfhPQgnLU83xTCyi6%2FDBjqkARhfmJrKY6JiGp4uiQexKUYNWoiNL1KQIgO%2F%2ByzaJwKRW2ejl4YP5fdMjRpmPBVDz%2FZisbwNpRvX6buhrcSHrhOdi5JASfZEWti%2Fqez7Ze87CMTQTZy9P4RHeJ6JLXzCJetERiaJUCUwHjrNm%2B9UYBj0XOqImsJiO9uPXYu%2B8gplsIcOWRD2uoCE9AZBRSWhUmaOlhhqkKqToilMuO%2Fg%2BSTM1svp&X-Amz-Signature=9c372eed9ab702f799ffe4a875adb575de408a0737098c57f6660d65f43cfbe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXC3OBDM%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T132622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDqRCo%2Fg1r8wSTYvDz08jIKau2woCU0qRCvWWgzq%2BNj4QIhAJZRlJNZ31n1yLqwFg91tFBViA0XrPtJ10MEl%2FBLe1MFKv8DCHYQABoMNjM3NDIzMTgzODA1Igx%2By%2Bw%2Foz3XymI0vl8q3APQWyjvuUs2NZUSbxaDsdlVj1SZNqz1d7%2BEQvwuOl56ulyxiG3jbtYcPyvGnDQv4z%2FVF8oiT9Pj8Mvr4ZNm%2F%2Buy9GUkrqmtn9%2F9an8WQZjRcRV0evEa7ZFX%2FjVmMwx%2FOS8ampTI1npwaXq1CI98By%2FFjejO%2FxpB4Dh%2B3ee1o8HW5rfUME6gqSPh7YUoUH%2FPJqapuO78rHoJLYgh90rcKqr7jDtPhAMFRcdKgtMVykvAm5L%2BeKIcGc9EX1lxTq6WcmVrDXPlOtdyCMsZjQjOkTOI3DTNytyDmqar07qcrX5VT05uhaaTdQ1kVpm%2FZmLsddfSY%2FuCkGD5Gn6Cd7wK5CvKtoUvgO0%2BrKKilMaz5FUYS6twefTIUT8HY7vUn05nlmPY1YdxKIo3IGT2jHH0gAt8tQwPYKVroQd58MxM3c6pxGv7StDSZl4agkUYQddWeQTdDshwsg8O%2BSVlM%2FE5j76BskxEFsVb%2FEjydMW219JYi94krqVY8M3O3Cl8Kx9IoVNAikCEh9uRdWXq2%2BlzbsfqSd0sPJLtml1pTDDhZOwgLMsCCnnX%2FULC62TE5JhuLdMAM2keTIXSB7n1Gojk3pKOf6KjhWY25Xw78s9ZSoPPl292m%2FfhPQgnLU83xTCyi6%2FDBjqkARhfmJrKY6JiGp4uiQexKUYNWoiNL1KQIgO%2F%2ByzaJwKRW2ejl4YP5fdMjRpmPBVDz%2FZisbwNpRvX6buhrcSHrhOdi5JASfZEWti%2Fqez7Ze87CMTQTZy9P4RHeJ6JLXzCJetERiaJUCUwHjrNm%2B9UYBj0XOqImsJiO9uPXYu%2B8gplsIcOWRD2uoCE9AZBRSWhUmaOlhhqkKqToilMuO%2Fg%2BSTM1svp&X-Amz-Signature=0aeee052d87147c6310d30135ff5729360df82c11761b2f3c2c1503bdf217851&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
