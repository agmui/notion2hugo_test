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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SGGZMAH%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T150725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQCHlXe1BeufVl9qaxj41bt5kM5oVvzfjvjk1i5JRIXhvAIgJ2eY%2BsZK4hmNtPmnBuw7jh5dKNNVP2K%2BxplPtpS2wS8q%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDOT1N7i%2Bn1CysTUmBSrcA2weD9xsJLdLGZQE4gSToffIAPDX7SXzifuvyFcnPK4sNYiNOPlIgmS6jD2MoQeba%2FsguAqOP4NgK5x1xD6Lo6tOR613%2FS4K%2BbwGj4E7c8cbJimdAB18lZLK9PUw57T%2BqalBAZ1sOxQBZhj1pR60dazOimLXC97wY0o%2Ba9v%2B5FHYgsCVXFs7mZ6vkPqDVgoyI%2BpSqoxk1n%2FPQyLsbx8stwXLcGf4cmo0KAtc5YaT%2F8znc1d1h310zJqLrsPZihjy5RU%2BIZti567xAFXAksBgauYFq1FSxdC90ilzficDBGS0lr0XBmn7B1JOMtXU%2FyZbAHo4OhTiOKS9KaaP4lfXZ02zyIJoSBMsSd6DUd%2FqFZ8ZKJD1%2BB72ooCCT7ZgartUVdtaZHFgIOQg0jO1FKwhCEvQ2Z3hRHL%2B0hTG4qiRzpLAV7qoLcU%2Fzokwjwl%2BBn%2BnW9PTj3793z%2Bh4o26p45a%2FtWE5fdi7snftawODwywOJPohfa2VrK%2BoKFa8IlhnhwZtU5wKPcD7C7gdjw6zLPdeHXBsvvYvFdb7KBoUnoDexmiz2Jig0RDINODFPjUmlq%2BVKDqWc2tuvGDTimH5c9J72Aua%2B4WlTdvg5Yvj9ka1%2Bj%2FvxnPgVojvl3nymbeMISmx8EGOqUBPqDtysu7JkxiuJHHWIyJAj0uJdwlJI0FZAMgdefU3zjV8fzkJErw679thsADw032tsJsJSv77m6%2FPR%2BBLhpQZqBSJY2QL2Ssiy3q34HCs0Lbzf1sa09hh8GpIlKJIkMZYYerMPw2neZkkaKManNVQDciaVOcLO9T%2B%2BWcngLa%2FpPJwxLE3VeHCLqWxxC3%2FZdsATdPUJA8w0LYqNi%2B54%2F513Ak0rnd&X-Amz-Signature=ff71c4e0005267743a0e6cfc595626f743c3d88f69089a8cfb7c7a0e49581781&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SGGZMAH%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T150725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQCHlXe1BeufVl9qaxj41bt5kM5oVvzfjvjk1i5JRIXhvAIgJ2eY%2BsZK4hmNtPmnBuw7jh5dKNNVP2K%2BxplPtpS2wS8q%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDOT1N7i%2Bn1CysTUmBSrcA2weD9xsJLdLGZQE4gSToffIAPDX7SXzifuvyFcnPK4sNYiNOPlIgmS6jD2MoQeba%2FsguAqOP4NgK5x1xD6Lo6tOR613%2FS4K%2BbwGj4E7c8cbJimdAB18lZLK9PUw57T%2BqalBAZ1sOxQBZhj1pR60dazOimLXC97wY0o%2Ba9v%2B5FHYgsCVXFs7mZ6vkPqDVgoyI%2BpSqoxk1n%2FPQyLsbx8stwXLcGf4cmo0KAtc5YaT%2F8znc1d1h310zJqLrsPZihjy5RU%2BIZti567xAFXAksBgauYFq1FSxdC90ilzficDBGS0lr0XBmn7B1JOMtXU%2FyZbAHo4OhTiOKS9KaaP4lfXZ02zyIJoSBMsSd6DUd%2FqFZ8ZKJD1%2BB72ooCCT7ZgartUVdtaZHFgIOQg0jO1FKwhCEvQ2Z3hRHL%2B0hTG4qiRzpLAV7qoLcU%2Fzokwjwl%2BBn%2BnW9PTj3793z%2Bh4o26p45a%2FtWE5fdi7snftawODwywOJPohfa2VrK%2BoKFa8IlhnhwZtU5wKPcD7C7gdjw6zLPdeHXBsvvYvFdb7KBoUnoDexmiz2Jig0RDINODFPjUmlq%2BVKDqWc2tuvGDTimH5c9J72Aua%2B4WlTdvg5Yvj9ka1%2Bj%2FvxnPgVojvl3nymbeMISmx8EGOqUBPqDtysu7JkxiuJHHWIyJAj0uJdwlJI0FZAMgdefU3zjV8fzkJErw679thsADw032tsJsJSv77m6%2FPR%2BBLhpQZqBSJY2QL2Ssiy3q34HCs0Lbzf1sa09hh8GpIlKJIkMZYYerMPw2neZkkaKManNVQDciaVOcLO9T%2B%2BWcngLa%2FpPJwxLE3VeHCLqWxxC3%2FZdsATdPUJA8w0LYqNi%2B54%2F513Ak0rnd&X-Amz-Signature=c134fbd350cd2a43d289b5755a633bb684d3057b15b2ef85896f7ffe4c07c172&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SGGZMAH%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T150725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQCHlXe1BeufVl9qaxj41bt5kM5oVvzfjvjk1i5JRIXhvAIgJ2eY%2BsZK4hmNtPmnBuw7jh5dKNNVP2K%2BxplPtpS2wS8q%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDOT1N7i%2Bn1CysTUmBSrcA2weD9xsJLdLGZQE4gSToffIAPDX7SXzifuvyFcnPK4sNYiNOPlIgmS6jD2MoQeba%2FsguAqOP4NgK5x1xD6Lo6tOR613%2FS4K%2BbwGj4E7c8cbJimdAB18lZLK9PUw57T%2BqalBAZ1sOxQBZhj1pR60dazOimLXC97wY0o%2Ba9v%2B5FHYgsCVXFs7mZ6vkPqDVgoyI%2BpSqoxk1n%2FPQyLsbx8stwXLcGf4cmo0KAtc5YaT%2F8znc1d1h310zJqLrsPZihjy5RU%2BIZti567xAFXAksBgauYFq1FSxdC90ilzficDBGS0lr0XBmn7B1JOMtXU%2FyZbAHo4OhTiOKS9KaaP4lfXZ02zyIJoSBMsSd6DUd%2FqFZ8ZKJD1%2BB72ooCCT7ZgartUVdtaZHFgIOQg0jO1FKwhCEvQ2Z3hRHL%2B0hTG4qiRzpLAV7qoLcU%2Fzokwjwl%2BBn%2BnW9PTj3793z%2Bh4o26p45a%2FtWE5fdi7snftawODwywOJPohfa2VrK%2BoKFa8IlhnhwZtU5wKPcD7C7gdjw6zLPdeHXBsvvYvFdb7KBoUnoDexmiz2Jig0RDINODFPjUmlq%2BVKDqWc2tuvGDTimH5c9J72Aua%2B4WlTdvg5Yvj9ka1%2Bj%2FvxnPgVojvl3nymbeMISmx8EGOqUBPqDtysu7JkxiuJHHWIyJAj0uJdwlJI0FZAMgdefU3zjV8fzkJErw679thsADw032tsJsJSv77m6%2FPR%2BBLhpQZqBSJY2QL2Ssiy3q34HCs0Lbzf1sa09hh8GpIlKJIkMZYYerMPw2neZkkaKManNVQDciaVOcLO9T%2B%2BWcngLa%2FpPJwxLE3VeHCLqWxxC3%2FZdsATdPUJA8w0LYqNi%2B54%2F513Ak0rnd&X-Amz-Signature=c6ca7d84aef1d5dfa5ab17e32329d22fa1bb5d11d9bfd7bdb99f823c13ec7258&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SGGZMAH%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T150725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQCHlXe1BeufVl9qaxj41bt5kM5oVvzfjvjk1i5JRIXhvAIgJ2eY%2BsZK4hmNtPmnBuw7jh5dKNNVP2K%2BxplPtpS2wS8q%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDOT1N7i%2Bn1CysTUmBSrcA2weD9xsJLdLGZQE4gSToffIAPDX7SXzifuvyFcnPK4sNYiNOPlIgmS6jD2MoQeba%2FsguAqOP4NgK5x1xD6Lo6tOR613%2FS4K%2BbwGj4E7c8cbJimdAB18lZLK9PUw57T%2BqalBAZ1sOxQBZhj1pR60dazOimLXC97wY0o%2Ba9v%2B5FHYgsCVXFs7mZ6vkPqDVgoyI%2BpSqoxk1n%2FPQyLsbx8stwXLcGf4cmo0KAtc5YaT%2F8znc1d1h310zJqLrsPZihjy5RU%2BIZti567xAFXAksBgauYFq1FSxdC90ilzficDBGS0lr0XBmn7B1JOMtXU%2FyZbAHo4OhTiOKS9KaaP4lfXZ02zyIJoSBMsSd6DUd%2FqFZ8ZKJD1%2BB72ooCCT7ZgartUVdtaZHFgIOQg0jO1FKwhCEvQ2Z3hRHL%2B0hTG4qiRzpLAV7qoLcU%2Fzokwjwl%2BBn%2BnW9PTj3793z%2Bh4o26p45a%2FtWE5fdi7snftawODwywOJPohfa2VrK%2BoKFa8IlhnhwZtU5wKPcD7C7gdjw6zLPdeHXBsvvYvFdb7KBoUnoDexmiz2Jig0RDINODFPjUmlq%2BVKDqWc2tuvGDTimH5c9J72Aua%2B4WlTdvg5Yvj9ka1%2Bj%2FvxnPgVojvl3nymbeMISmx8EGOqUBPqDtysu7JkxiuJHHWIyJAj0uJdwlJI0FZAMgdefU3zjV8fzkJErw679thsADw032tsJsJSv77m6%2FPR%2BBLhpQZqBSJY2QL2Ssiy3q34HCs0Lbzf1sa09hh8GpIlKJIkMZYYerMPw2neZkkaKManNVQDciaVOcLO9T%2B%2BWcngLa%2FpPJwxLE3VeHCLqWxxC3%2FZdsATdPUJA8w0LYqNi%2B54%2F513Ak0rnd&X-Amz-Signature=6b9052a01a309cc758a5e9452deed0eae5852b5e157cb30178c7a3675a30e393&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SGGZMAH%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T150725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQCHlXe1BeufVl9qaxj41bt5kM5oVvzfjvjk1i5JRIXhvAIgJ2eY%2BsZK4hmNtPmnBuw7jh5dKNNVP2K%2BxplPtpS2wS8q%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDOT1N7i%2Bn1CysTUmBSrcA2weD9xsJLdLGZQE4gSToffIAPDX7SXzifuvyFcnPK4sNYiNOPlIgmS6jD2MoQeba%2FsguAqOP4NgK5x1xD6Lo6tOR613%2FS4K%2BbwGj4E7c8cbJimdAB18lZLK9PUw57T%2BqalBAZ1sOxQBZhj1pR60dazOimLXC97wY0o%2Ba9v%2B5FHYgsCVXFs7mZ6vkPqDVgoyI%2BpSqoxk1n%2FPQyLsbx8stwXLcGf4cmo0KAtc5YaT%2F8znc1d1h310zJqLrsPZihjy5RU%2BIZti567xAFXAksBgauYFq1FSxdC90ilzficDBGS0lr0XBmn7B1JOMtXU%2FyZbAHo4OhTiOKS9KaaP4lfXZ02zyIJoSBMsSd6DUd%2FqFZ8ZKJD1%2BB72ooCCT7ZgartUVdtaZHFgIOQg0jO1FKwhCEvQ2Z3hRHL%2B0hTG4qiRzpLAV7qoLcU%2Fzokwjwl%2BBn%2BnW9PTj3793z%2Bh4o26p45a%2FtWE5fdi7snftawODwywOJPohfa2VrK%2BoKFa8IlhnhwZtU5wKPcD7C7gdjw6zLPdeHXBsvvYvFdb7KBoUnoDexmiz2Jig0RDINODFPjUmlq%2BVKDqWc2tuvGDTimH5c9J72Aua%2B4WlTdvg5Yvj9ka1%2Bj%2FvxnPgVojvl3nymbeMISmx8EGOqUBPqDtysu7JkxiuJHHWIyJAj0uJdwlJI0FZAMgdefU3zjV8fzkJErw679thsADw032tsJsJSv77m6%2FPR%2BBLhpQZqBSJY2QL2Ssiy3q34HCs0Lbzf1sa09hh8GpIlKJIkMZYYerMPw2neZkkaKManNVQDciaVOcLO9T%2B%2BWcngLa%2FpPJwxLE3VeHCLqWxxC3%2FZdsATdPUJA8w0LYqNi%2B54%2F513Ak0rnd&X-Amz-Signature=46d2d9d88ff6d213fcc0afaeb21f01ef3f958a1057513ca148bdab5a2d67e52e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SGGZMAH%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T150725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCIQCHlXe1BeufVl9qaxj41bt5kM5oVvzfjvjk1i5JRIXhvAIgJ2eY%2BsZK4hmNtPmnBuw7jh5dKNNVP2K%2BxplPtpS2wS8q%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDOT1N7i%2Bn1CysTUmBSrcA2weD9xsJLdLGZQE4gSToffIAPDX7SXzifuvyFcnPK4sNYiNOPlIgmS6jD2MoQeba%2FsguAqOP4NgK5x1xD6Lo6tOR613%2FS4K%2BbwGj4E7c8cbJimdAB18lZLK9PUw57T%2BqalBAZ1sOxQBZhj1pR60dazOimLXC97wY0o%2Ba9v%2B5FHYgsCVXFs7mZ6vkPqDVgoyI%2BpSqoxk1n%2FPQyLsbx8stwXLcGf4cmo0KAtc5YaT%2F8znc1d1h310zJqLrsPZihjy5RU%2BIZti567xAFXAksBgauYFq1FSxdC90ilzficDBGS0lr0XBmn7B1JOMtXU%2FyZbAHo4OhTiOKS9KaaP4lfXZ02zyIJoSBMsSd6DUd%2FqFZ8ZKJD1%2BB72ooCCT7ZgartUVdtaZHFgIOQg0jO1FKwhCEvQ2Z3hRHL%2B0hTG4qiRzpLAV7qoLcU%2Fzokwjwl%2BBn%2BnW9PTj3793z%2Bh4o26p45a%2FtWE5fdi7snftawODwywOJPohfa2VrK%2BoKFa8IlhnhwZtU5wKPcD7C7gdjw6zLPdeHXBsvvYvFdb7KBoUnoDexmiz2Jig0RDINODFPjUmlq%2BVKDqWc2tuvGDTimH5c9J72Aua%2B4WlTdvg5Yvj9ka1%2Bj%2FvxnPgVojvl3nymbeMISmx8EGOqUBPqDtysu7JkxiuJHHWIyJAj0uJdwlJI0FZAMgdefU3zjV8fzkJErw679thsADw032tsJsJSv77m6%2FPR%2BBLhpQZqBSJY2QL2Ssiy3q34HCs0Lbzf1sa09hh8GpIlKJIkMZYYerMPw2neZkkaKManNVQDciaVOcLO9T%2B%2BWcngLa%2FpPJwxLE3VeHCLqWxxC3%2FZdsATdPUJA8w0LYqNi%2B54%2F513Ak0rnd&X-Amz-Signature=16e7187abbad961754cd8566997e0b9ce89a0111164369a89c46a7b98b36cca5&X-Amz-SignedHeaders=host&x-id=GetObject)
