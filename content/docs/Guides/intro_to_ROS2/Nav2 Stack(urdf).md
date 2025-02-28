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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LRNSF62%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T050834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQD1qjEmXunvksObXSfmNmuDEBr3Kg0pkJjbdLogc5liqQIhAIPgx%2FQR41A9ydSeBwQWio4aQkJZDegWuuQM5ACMvlb2KogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEbReNRdfHCl5fhQsq3AMzJ5KH0sIC6yJKOwuVtsCwIq1Ai%2ByxNpnF7h5NiYv%2FteyEH7qgkh5%2BRIKKlpjgL9%2Fsj37Qr8gKHgoJGYgUDtrdzhCdYpkFxHMWs1vsF2DA4dPPGK7KdQn%2F4Tb4aBW4icgXG6Z4jKK8fkDM4wjdqZXV5tu9L%2BRRb4D6ZPLXqlHG8jkeY%2BzYBjX5MNIiyYxuoeSDFZ555En99xQGcOQX950jw8pGS7i9gKwPVNEUnomob3eIt9mgv%2FybKO%2BeuQkpKZ4g28fv6JUy2WAo7Ilns7hZyru%2Biy3VE6d9BEqt4xBuLy1fIsDkzZR8mTRqGZBVtX7PyiJVIk2AwAGxU8Q8Y%2F9wK4bBnafMV%2BTn6KoWswDRjRhFXepvYgyS8VcBHF0%2BZSyPV6aO7Yhr9I0C%2BcZLNAJu%2F9b2uGlIHHZjAEz5GgQ97tVlzjVQk%2BFCcuYXPOyu%2FfRN%2BSj2JECqFUfzN1wbI1o88JDRhTt44ivd8b6PwGf9FhSkaAJeUbEwqXxxx%2F%2FkynbVFTKRFcDM7HFqcmWUYkjJaeVvH%2FZuGcrwJYbFlOywX634JbZaNt6w79GGdfIF42aR3Je6ULqYX5KIHNFb2OeSXbXBqhB1eFaFZVYPRMuN6CNfH%2Bx%2FwyFu4QBE5zD18oS%2BBjqkAfpShkUrJIFlo33cM2vk%2FrL4vrJOIJkvjpDpM3iM4uyG6cjqeYDkVwJ2FApCE4rd9Dk%2Bx5VYuYH44xxPhfrSCMpD%2FJfRBxW69vPnlj5Ff9aptLX96G5%2BPvVgFjEI%2FlfHvLTID3%2FdPSDIXPVaGtA%2FKjF%2BKBt1OlHR3iHoTdD%2BBi%2BAgdFxaoXIdDBF8J9vnvDAhdHdgBU3D%2BTKcHAqvvyO9vIsnAUI&X-Amz-Signature=601388f99f197034d0c29bb28bf139e17fc7d398cbc89e658f2d18ed1220f58d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LRNSF62%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T050834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQD1qjEmXunvksObXSfmNmuDEBr3Kg0pkJjbdLogc5liqQIhAIPgx%2FQR41A9ydSeBwQWio4aQkJZDegWuuQM5ACMvlb2KogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEbReNRdfHCl5fhQsq3AMzJ5KH0sIC6yJKOwuVtsCwIq1Ai%2ByxNpnF7h5NiYv%2FteyEH7qgkh5%2BRIKKlpjgL9%2Fsj37Qr8gKHgoJGYgUDtrdzhCdYpkFxHMWs1vsF2DA4dPPGK7KdQn%2F4Tb4aBW4icgXG6Z4jKK8fkDM4wjdqZXV5tu9L%2BRRb4D6ZPLXqlHG8jkeY%2BzYBjX5MNIiyYxuoeSDFZ555En99xQGcOQX950jw8pGS7i9gKwPVNEUnomob3eIt9mgv%2FybKO%2BeuQkpKZ4g28fv6JUy2WAo7Ilns7hZyru%2Biy3VE6d9BEqt4xBuLy1fIsDkzZR8mTRqGZBVtX7PyiJVIk2AwAGxU8Q8Y%2F9wK4bBnafMV%2BTn6KoWswDRjRhFXepvYgyS8VcBHF0%2BZSyPV6aO7Yhr9I0C%2BcZLNAJu%2F9b2uGlIHHZjAEz5GgQ97tVlzjVQk%2BFCcuYXPOyu%2FfRN%2BSj2JECqFUfzN1wbI1o88JDRhTt44ivd8b6PwGf9FhSkaAJeUbEwqXxxx%2F%2FkynbVFTKRFcDM7HFqcmWUYkjJaeVvH%2FZuGcrwJYbFlOywX634JbZaNt6w79GGdfIF42aR3Je6ULqYX5KIHNFb2OeSXbXBqhB1eFaFZVYPRMuN6CNfH%2Bx%2FwyFu4QBE5zD18oS%2BBjqkAfpShkUrJIFlo33cM2vk%2FrL4vrJOIJkvjpDpM3iM4uyG6cjqeYDkVwJ2FApCE4rd9Dk%2Bx5VYuYH44xxPhfrSCMpD%2FJfRBxW69vPnlj5Ff9aptLX96G5%2BPvVgFjEI%2FlfHvLTID3%2FdPSDIXPVaGtA%2FKjF%2BKBt1OlHR3iHoTdD%2BBi%2BAgdFxaoXIdDBF8J9vnvDAhdHdgBU3D%2BTKcHAqvvyO9vIsnAUI&X-Amz-Signature=d7d45d7eab0afeb52b6874a6b5c3de28b8171812995879a19524b4a26d58f013&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LRNSF62%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T050834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQD1qjEmXunvksObXSfmNmuDEBr3Kg0pkJjbdLogc5liqQIhAIPgx%2FQR41A9ydSeBwQWio4aQkJZDegWuuQM5ACMvlb2KogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEbReNRdfHCl5fhQsq3AMzJ5KH0sIC6yJKOwuVtsCwIq1Ai%2ByxNpnF7h5NiYv%2FteyEH7qgkh5%2BRIKKlpjgL9%2Fsj37Qr8gKHgoJGYgUDtrdzhCdYpkFxHMWs1vsF2DA4dPPGK7KdQn%2F4Tb4aBW4icgXG6Z4jKK8fkDM4wjdqZXV5tu9L%2BRRb4D6ZPLXqlHG8jkeY%2BzYBjX5MNIiyYxuoeSDFZ555En99xQGcOQX950jw8pGS7i9gKwPVNEUnomob3eIt9mgv%2FybKO%2BeuQkpKZ4g28fv6JUy2WAo7Ilns7hZyru%2Biy3VE6d9BEqt4xBuLy1fIsDkzZR8mTRqGZBVtX7PyiJVIk2AwAGxU8Q8Y%2F9wK4bBnafMV%2BTn6KoWswDRjRhFXepvYgyS8VcBHF0%2BZSyPV6aO7Yhr9I0C%2BcZLNAJu%2F9b2uGlIHHZjAEz5GgQ97tVlzjVQk%2BFCcuYXPOyu%2FfRN%2BSj2JECqFUfzN1wbI1o88JDRhTt44ivd8b6PwGf9FhSkaAJeUbEwqXxxx%2F%2FkynbVFTKRFcDM7HFqcmWUYkjJaeVvH%2FZuGcrwJYbFlOywX634JbZaNt6w79GGdfIF42aR3Je6ULqYX5KIHNFb2OeSXbXBqhB1eFaFZVYPRMuN6CNfH%2Bx%2FwyFu4QBE5zD18oS%2BBjqkAfpShkUrJIFlo33cM2vk%2FrL4vrJOIJkvjpDpM3iM4uyG6cjqeYDkVwJ2FApCE4rd9Dk%2Bx5VYuYH44xxPhfrSCMpD%2FJfRBxW69vPnlj5Ff9aptLX96G5%2BPvVgFjEI%2FlfHvLTID3%2FdPSDIXPVaGtA%2FKjF%2BKBt1OlHR3iHoTdD%2BBi%2BAgdFxaoXIdDBF8J9vnvDAhdHdgBU3D%2BTKcHAqvvyO9vIsnAUI&X-Amz-Signature=6a651cfd7a2aed9ffc6b50834c291d3dfa85d7234b51b803dcc880022a125ef5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LRNSF62%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T050834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQD1qjEmXunvksObXSfmNmuDEBr3Kg0pkJjbdLogc5liqQIhAIPgx%2FQR41A9ydSeBwQWio4aQkJZDegWuuQM5ACMvlb2KogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEbReNRdfHCl5fhQsq3AMzJ5KH0sIC6yJKOwuVtsCwIq1Ai%2ByxNpnF7h5NiYv%2FteyEH7qgkh5%2BRIKKlpjgL9%2Fsj37Qr8gKHgoJGYgUDtrdzhCdYpkFxHMWs1vsF2DA4dPPGK7KdQn%2F4Tb4aBW4icgXG6Z4jKK8fkDM4wjdqZXV5tu9L%2BRRb4D6ZPLXqlHG8jkeY%2BzYBjX5MNIiyYxuoeSDFZ555En99xQGcOQX950jw8pGS7i9gKwPVNEUnomob3eIt9mgv%2FybKO%2BeuQkpKZ4g28fv6JUy2WAo7Ilns7hZyru%2Biy3VE6d9BEqt4xBuLy1fIsDkzZR8mTRqGZBVtX7PyiJVIk2AwAGxU8Q8Y%2F9wK4bBnafMV%2BTn6KoWswDRjRhFXepvYgyS8VcBHF0%2BZSyPV6aO7Yhr9I0C%2BcZLNAJu%2F9b2uGlIHHZjAEz5GgQ97tVlzjVQk%2BFCcuYXPOyu%2FfRN%2BSj2JECqFUfzN1wbI1o88JDRhTt44ivd8b6PwGf9FhSkaAJeUbEwqXxxx%2F%2FkynbVFTKRFcDM7HFqcmWUYkjJaeVvH%2FZuGcrwJYbFlOywX634JbZaNt6w79GGdfIF42aR3Je6ULqYX5KIHNFb2OeSXbXBqhB1eFaFZVYPRMuN6CNfH%2Bx%2FwyFu4QBE5zD18oS%2BBjqkAfpShkUrJIFlo33cM2vk%2FrL4vrJOIJkvjpDpM3iM4uyG6cjqeYDkVwJ2FApCE4rd9Dk%2Bx5VYuYH44xxPhfrSCMpD%2FJfRBxW69vPnlj5Ff9aptLX96G5%2BPvVgFjEI%2FlfHvLTID3%2FdPSDIXPVaGtA%2FKjF%2BKBt1OlHR3iHoTdD%2BBi%2BAgdFxaoXIdDBF8J9vnvDAhdHdgBU3D%2BTKcHAqvvyO9vIsnAUI&X-Amz-Signature=bf833b7fecb8f39c50905ebd8ccaa50adcb476fd86c26a48af2eab89e9ee91df&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LRNSF62%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T050834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQD1qjEmXunvksObXSfmNmuDEBr3Kg0pkJjbdLogc5liqQIhAIPgx%2FQR41A9ydSeBwQWio4aQkJZDegWuuQM5ACMvlb2KogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEbReNRdfHCl5fhQsq3AMzJ5KH0sIC6yJKOwuVtsCwIq1Ai%2ByxNpnF7h5NiYv%2FteyEH7qgkh5%2BRIKKlpjgL9%2Fsj37Qr8gKHgoJGYgUDtrdzhCdYpkFxHMWs1vsF2DA4dPPGK7KdQn%2F4Tb4aBW4icgXG6Z4jKK8fkDM4wjdqZXV5tu9L%2BRRb4D6ZPLXqlHG8jkeY%2BzYBjX5MNIiyYxuoeSDFZ555En99xQGcOQX950jw8pGS7i9gKwPVNEUnomob3eIt9mgv%2FybKO%2BeuQkpKZ4g28fv6JUy2WAo7Ilns7hZyru%2Biy3VE6d9BEqt4xBuLy1fIsDkzZR8mTRqGZBVtX7PyiJVIk2AwAGxU8Q8Y%2F9wK4bBnafMV%2BTn6KoWswDRjRhFXepvYgyS8VcBHF0%2BZSyPV6aO7Yhr9I0C%2BcZLNAJu%2F9b2uGlIHHZjAEz5GgQ97tVlzjVQk%2BFCcuYXPOyu%2FfRN%2BSj2JECqFUfzN1wbI1o88JDRhTt44ivd8b6PwGf9FhSkaAJeUbEwqXxxx%2F%2FkynbVFTKRFcDM7HFqcmWUYkjJaeVvH%2FZuGcrwJYbFlOywX634JbZaNt6w79GGdfIF42aR3Je6ULqYX5KIHNFb2OeSXbXBqhB1eFaFZVYPRMuN6CNfH%2Bx%2FwyFu4QBE5zD18oS%2BBjqkAfpShkUrJIFlo33cM2vk%2FrL4vrJOIJkvjpDpM3iM4uyG6cjqeYDkVwJ2FApCE4rd9Dk%2Bx5VYuYH44xxPhfrSCMpD%2FJfRBxW69vPnlj5Ff9aptLX96G5%2BPvVgFjEI%2FlfHvLTID3%2FdPSDIXPVaGtA%2FKjF%2BKBt1OlHR3iHoTdD%2BBi%2BAgdFxaoXIdDBF8J9vnvDAhdHdgBU3D%2BTKcHAqvvyO9vIsnAUI&X-Amz-Signature=23454cbbb7aa9308c944cbe19142b8526bbf3e26a1b8fe7a02b6f3049deae203&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LRNSF62%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T050834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQD1qjEmXunvksObXSfmNmuDEBr3Kg0pkJjbdLogc5liqQIhAIPgx%2FQR41A9ydSeBwQWio4aQkJZDegWuuQM5ACMvlb2KogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyEbReNRdfHCl5fhQsq3AMzJ5KH0sIC6yJKOwuVtsCwIq1Ai%2ByxNpnF7h5NiYv%2FteyEH7qgkh5%2BRIKKlpjgL9%2Fsj37Qr8gKHgoJGYgUDtrdzhCdYpkFxHMWs1vsF2DA4dPPGK7KdQn%2F4Tb4aBW4icgXG6Z4jKK8fkDM4wjdqZXV5tu9L%2BRRb4D6ZPLXqlHG8jkeY%2BzYBjX5MNIiyYxuoeSDFZ555En99xQGcOQX950jw8pGS7i9gKwPVNEUnomob3eIt9mgv%2FybKO%2BeuQkpKZ4g28fv6JUy2WAo7Ilns7hZyru%2Biy3VE6d9BEqt4xBuLy1fIsDkzZR8mTRqGZBVtX7PyiJVIk2AwAGxU8Q8Y%2F9wK4bBnafMV%2BTn6KoWswDRjRhFXepvYgyS8VcBHF0%2BZSyPV6aO7Yhr9I0C%2BcZLNAJu%2F9b2uGlIHHZjAEz5GgQ97tVlzjVQk%2BFCcuYXPOyu%2FfRN%2BSj2JECqFUfzN1wbI1o88JDRhTt44ivd8b6PwGf9FhSkaAJeUbEwqXxxx%2F%2FkynbVFTKRFcDM7HFqcmWUYkjJaeVvH%2FZuGcrwJYbFlOywX634JbZaNt6w79GGdfIF42aR3Je6ULqYX5KIHNFb2OeSXbXBqhB1eFaFZVYPRMuN6CNfH%2Bx%2FwyFu4QBE5zD18oS%2BBjqkAfpShkUrJIFlo33cM2vk%2FrL4vrJOIJkvjpDpM3iM4uyG6cjqeYDkVwJ2FApCE4rd9Dk%2Bx5VYuYH44xxPhfrSCMpD%2FJfRBxW69vPnlj5Ff9aptLX96G5%2BPvVgFjEI%2FlfHvLTID3%2FdPSDIXPVaGtA%2FKjF%2BKBt1OlHR3iHoTdD%2BBi%2BAgdFxaoXIdDBF8J9vnvDAhdHdgBU3D%2BTKcHAqvvyO9vIsnAUI&X-Amz-Signature=5a5e903bcb6f097302f5d7715a210d63c00a99ca020d3df9dd36e2bfac91908d&X-Amz-SignedHeaders=host&x-id=GetObject)
