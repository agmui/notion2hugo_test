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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOXNMJZW%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T004157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfvRdZcFK4GsW6j52cQggI%2FEh8Xs2B19G7TRui20gFrwIgaSsWP95%2BTwHYjClrD4l3jlWzFBvTZe%2F9AUGWpm6WQ84qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCl6skV4G56nddd8eSrcA5mKHQkZcPcgKyLlASF9CzEXvE2ecHXq81MZnREM7gjqW5B%2FZ8lBFWMAMJf7ZRZRZ0p0fWM204J6qWXs%2BVOGFGXGi5l1iWOMT8A2jsMEI572wlaZdsVcvekuBb7Vw9npsBoUow52q7fA2OFobgfAoZbHHPzbOtLhBX%2FO2Kg2KI0Ct7icsDX0tJXQrBoy09RJb8cGNkxtnqv5GUg%2FdZcQV7JLbNHbUSmyNyBq2m9dduvutSEImz0xB3%2FB7kI1I5oE2zCsN%2FwUAfnq2Idnuh8Q5Ao%2FBk%2By4QsG1L5H%2FqiNjSbSlfiB7NwOTaZT3N1fzuTvR2Jcso7bTnDI5UZ9ANdROw6UqV4oSSEh70poukTRk5H4gErr4FYVu87rZMVKeC%2BP71vWnHoA9%2FkXchnhE0vVpxas4FeGoJhrwTtyvnIrifZOci2VgvuFxU8bKh%2Fj77By%2BexdaD4tzzWK3sUJgVaVeV2pF4U9ABcfkq1c82puh53n%2FiNkiZcaMYxhGNs%2BTiO0e1XlxIRP%2FQ8%2F6YXg3BubCukA%2B7jjBw65HQ9614Lj6xAMrWkShFHhk8RWtnZneH8HWqStFFpvtz09NwxTmgEChj14A82hmiC1KWTP6iOdxUlh67eRZ6p%2B3WjrzkwkMJWz3sEGOqUBbi9JADW1yJ8H03G9UnFl8gyEwVlHBE8QjmPl95LjSoAHbE4p7SO%2BvMCMOnleLeT0a5f79pz3KPTIYzG9ZoQ%2FcAhWaUSQwYXWuYaHSaUIno8VjGkkkmVrRnKr%2BeE1X4TDWYeWHXz0Zx69yxtTUomWWyf8a9%2BIcMCLIMK2XmOx4lhB2NvM%2BCvSJioYKB6bjs1aPaOHONLwW9UHJWO1b5qYiEXPB2%2BB&X-Amz-Signature=6743a70543c2e3d3b18aba01da0aac25d63e5ba6abec78ab9fd2bdab1c08faf4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOXNMJZW%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T004157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfvRdZcFK4GsW6j52cQggI%2FEh8Xs2B19G7TRui20gFrwIgaSsWP95%2BTwHYjClrD4l3jlWzFBvTZe%2F9AUGWpm6WQ84qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCl6skV4G56nddd8eSrcA5mKHQkZcPcgKyLlASF9CzEXvE2ecHXq81MZnREM7gjqW5B%2FZ8lBFWMAMJf7ZRZRZ0p0fWM204J6qWXs%2BVOGFGXGi5l1iWOMT8A2jsMEI572wlaZdsVcvekuBb7Vw9npsBoUow52q7fA2OFobgfAoZbHHPzbOtLhBX%2FO2Kg2KI0Ct7icsDX0tJXQrBoy09RJb8cGNkxtnqv5GUg%2FdZcQV7JLbNHbUSmyNyBq2m9dduvutSEImz0xB3%2FB7kI1I5oE2zCsN%2FwUAfnq2Idnuh8Q5Ao%2FBk%2By4QsG1L5H%2FqiNjSbSlfiB7NwOTaZT3N1fzuTvR2Jcso7bTnDI5UZ9ANdROw6UqV4oSSEh70poukTRk5H4gErr4FYVu87rZMVKeC%2BP71vWnHoA9%2FkXchnhE0vVpxas4FeGoJhrwTtyvnIrifZOci2VgvuFxU8bKh%2Fj77By%2BexdaD4tzzWK3sUJgVaVeV2pF4U9ABcfkq1c82puh53n%2FiNkiZcaMYxhGNs%2BTiO0e1XlxIRP%2FQ8%2F6YXg3BubCukA%2B7jjBw65HQ9614Lj6xAMrWkShFHhk8RWtnZneH8HWqStFFpvtz09NwxTmgEChj14A82hmiC1KWTP6iOdxUlh67eRZ6p%2B3WjrzkwkMJWz3sEGOqUBbi9JADW1yJ8H03G9UnFl8gyEwVlHBE8QjmPl95LjSoAHbE4p7SO%2BvMCMOnleLeT0a5f79pz3KPTIYzG9ZoQ%2FcAhWaUSQwYXWuYaHSaUIno8VjGkkkmVrRnKr%2BeE1X4TDWYeWHXz0Zx69yxtTUomWWyf8a9%2BIcMCLIMK2XmOx4lhB2NvM%2BCvSJioYKB6bjs1aPaOHONLwW9UHJWO1b5qYiEXPB2%2BB&X-Amz-Signature=efe687618205e57d076b4d952a768d3bf84b9718301b2b7c3484f23801b6a070&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOXNMJZW%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T004157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfvRdZcFK4GsW6j52cQggI%2FEh8Xs2B19G7TRui20gFrwIgaSsWP95%2BTwHYjClrD4l3jlWzFBvTZe%2F9AUGWpm6WQ84qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCl6skV4G56nddd8eSrcA5mKHQkZcPcgKyLlASF9CzEXvE2ecHXq81MZnREM7gjqW5B%2FZ8lBFWMAMJf7ZRZRZ0p0fWM204J6qWXs%2BVOGFGXGi5l1iWOMT8A2jsMEI572wlaZdsVcvekuBb7Vw9npsBoUow52q7fA2OFobgfAoZbHHPzbOtLhBX%2FO2Kg2KI0Ct7icsDX0tJXQrBoy09RJb8cGNkxtnqv5GUg%2FdZcQV7JLbNHbUSmyNyBq2m9dduvutSEImz0xB3%2FB7kI1I5oE2zCsN%2FwUAfnq2Idnuh8Q5Ao%2FBk%2By4QsG1L5H%2FqiNjSbSlfiB7NwOTaZT3N1fzuTvR2Jcso7bTnDI5UZ9ANdROw6UqV4oSSEh70poukTRk5H4gErr4FYVu87rZMVKeC%2BP71vWnHoA9%2FkXchnhE0vVpxas4FeGoJhrwTtyvnIrifZOci2VgvuFxU8bKh%2Fj77By%2BexdaD4tzzWK3sUJgVaVeV2pF4U9ABcfkq1c82puh53n%2FiNkiZcaMYxhGNs%2BTiO0e1XlxIRP%2FQ8%2F6YXg3BubCukA%2B7jjBw65HQ9614Lj6xAMrWkShFHhk8RWtnZneH8HWqStFFpvtz09NwxTmgEChj14A82hmiC1KWTP6iOdxUlh67eRZ6p%2B3WjrzkwkMJWz3sEGOqUBbi9JADW1yJ8H03G9UnFl8gyEwVlHBE8QjmPl95LjSoAHbE4p7SO%2BvMCMOnleLeT0a5f79pz3KPTIYzG9ZoQ%2FcAhWaUSQwYXWuYaHSaUIno8VjGkkkmVrRnKr%2BeE1X4TDWYeWHXz0Zx69yxtTUomWWyf8a9%2BIcMCLIMK2XmOx4lhB2NvM%2BCvSJioYKB6bjs1aPaOHONLwW9UHJWO1b5qYiEXPB2%2BB&X-Amz-Signature=9e516e4366cf6f4a188554446c450373d1c9d9bd9002abdeb03cfb22eba8f34c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOXNMJZW%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T004157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfvRdZcFK4GsW6j52cQggI%2FEh8Xs2B19G7TRui20gFrwIgaSsWP95%2BTwHYjClrD4l3jlWzFBvTZe%2F9AUGWpm6WQ84qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCl6skV4G56nddd8eSrcA5mKHQkZcPcgKyLlASF9CzEXvE2ecHXq81MZnREM7gjqW5B%2FZ8lBFWMAMJf7ZRZRZ0p0fWM204J6qWXs%2BVOGFGXGi5l1iWOMT8A2jsMEI572wlaZdsVcvekuBb7Vw9npsBoUow52q7fA2OFobgfAoZbHHPzbOtLhBX%2FO2Kg2KI0Ct7icsDX0tJXQrBoy09RJb8cGNkxtnqv5GUg%2FdZcQV7JLbNHbUSmyNyBq2m9dduvutSEImz0xB3%2FB7kI1I5oE2zCsN%2FwUAfnq2Idnuh8Q5Ao%2FBk%2By4QsG1L5H%2FqiNjSbSlfiB7NwOTaZT3N1fzuTvR2Jcso7bTnDI5UZ9ANdROw6UqV4oSSEh70poukTRk5H4gErr4FYVu87rZMVKeC%2BP71vWnHoA9%2FkXchnhE0vVpxas4FeGoJhrwTtyvnIrifZOci2VgvuFxU8bKh%2Fj77By%2BexdaD4tzzWK3sUJgVaVeV2pF4U9ABcfkq1c82puh53n%2FiNkiZcaMYxhGNs%2BTiO0e1XlxIRP%2FQ8%2F6YXg3BubCukA%2B7jjBw65HQ9614Lj6xAMrWkShFHhk8RWtnZneH8HWqStFFpvtz09NwxTmgEChj14A82hmiC1KWTP6iOdxUlh67eRZ6p%2B3WjrzkwkMJWz3sEGOqUBbi9JADW1yJ8H03G9UnFl8gyEwVlHBE8QjmPl95LjSoAHbE4p7SO%2BvMCMOnleLeT0a5f79pz3KPTIYzG9ZoQ%2FcAhWaUSQwYXWuYaHSaUIno8VjGkkkmVrRnKr%2BeE1X4TDWYeWHXz0Zx69yxtTUomWWyf8a9%2BIcMCLIMK2XmOx4lhB2NvM%2BCvSJioYKB6bjs1aPaOHONLwW9UHJWO1b5qYiEXPB2%2BB&X-Amz-Signature=cd66a8a65deb1a65a932fab2d3ae1b2b4e6a2e858c35511e5e224c3d0a4f3f6d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOXNMJZW%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T004157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfvRdZcFK4GsW6j52cQggI%2FEh8Xs2B19G7TRui20gFrwIgaSsWP95%2BTwHYjClrD4l3jlWzFBvTZe%2F9AUGWpm6WQ84qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCl6skV4G56nddd8eSrcA5mKHQkZcPcgKyLlASF9CzEXvE2ecHXq81MZnREM7gjqW5B%2FZ8lBFWMAMJf7ZRZRZ0p0fWM204J6qWXs%2BVOGFGXGi5l1iWOMT8A2jsMEI572wlaZdsVcvekuBb7Vw9npsBoUow52q7fA2OFobgfAoZbHHPzbOtLhBX%2FO2Kg2KI0Ct7icsDX0tJXQrBoy09RJb8cGNkxtnqv5GUg%2FdZcQV7JLbNHbUSmyNyBq2m9dduvutSEImz0xB3%2FB7kI1I5oE2zCsN%2FwUAfnq2Idnuh8Q5Ao%2FBk%2By4QsG1L5H%2FqiNjSbSlfiB7NwOTaZT3N1fzuTvR2Jcso7bTnDI5UZ9ANdROw6UqV4oSSEh70poukTRk5H4gErr4FYVu87rZMVKeC%2BP71vWnHoA9%2FkXchnhE0vVpxas4FeGoJhrwTtyvnIrifZOci2VgvuFxU8bKh%2Fj77By%2BexdaD4tzzWK3sUJgVaVeV2pF4U9ABcfkq1c82puh53n%2FiNkiZcaMYxhGNs%2BTiO0e1XlxIRP%2FQ8%2F6YXg3BubCukA%2B7jjBw65HQ9614Lj6xAMrWkShFHhk8RWtnZneH8HWqStFFpvtz09NwxTmgEChj14A82hmiC1KWTP6iOdxUlh67eRZ6p%2B3WjrzkwkMJWz3sEGOqUBbi9JADW1yJ8H03G9UnFl8gyEwVlHBE8QjmPl95LjSoAHbE4p7SO%2BvMCMOnleLeT0a5f79pz3KPTIYzG9ZoQ%2FcAhWaUSQwYXWuYaHSaUIno8VjGkkkmVrRnKr%2BeE1X4TDWYeWHXz0Zx69yxtTUomWWyf8a9%2BIcMCLIMK2XmOx4lhB2NvM%2BCvSJioYKB6bjs1aPaOHONLwW9UHJWO1b5qYiEXPB2%2BB&X-Amz-Signature=76c2d05dedb47c779bbd040505bc7e90b05aee82634187d136ea06f89ad8d3d9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOXNMJZW%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T004157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfvRdZcFK4GsW6j52cQggI%2FEh8Xs2B19G7TRui20gFrwIgaSsWP95%2BTwHYjClrD4l3jlWzFBvTZe%2F9AUGWpm6WQ84qiAQIgP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCl6skV4G56nddd8eSrcA5mKHQkZcPcgKyLlASF9CzEXvE2ecHXq81MZnREM7gjqW5B%2FZ8lBFWMAMJf7ZRZRZ0p0fWM204J6qWXs%2BVOGFGXGi5l1iWOMT8A2jsMEI572wlaZdsVcvekuBb7Vw9npsBoUow52q7fA2OFobgfAoZbHHPzbOtLhBX%2FO2Kg2KI0Ct7icsDX0tJXQrBoy09RJb8cGNkxtnqv5GUg%2FdZcQV7JLbNHbUSmyNyBq2m9dduvutSEImz0xB3%2FB7kI1I5oE2zCsN%2FwUAfnq2Idnuh8Q5Ao%2FBk%2By4QsG1L5H%2FqiNjSbSlfiB7NwOTaZT3N1fzuTvR2Jcso7bTnDI5UZ9ANdROw6UqV4oSSEh70poukTRk5H4gErr4FYVu87rZMVKeC%2BP71vWnHoA9%2FkXchnhE0vVpxas4FeGoJhrwTtyvnIrifZOci2VgvuFxU8bKh%2Fj77By%2BexdaD4tzzWK3sUJgVaVeV2pF4U9ABcfkq1c82puh53n%2FiNkiZcaMYxhGNs%2BTiO0e1XlxIRP%2FQ8%2F6YXg3BubCukA%2B7jjBw65HQ9614Lj6xAMrWkShFHhk8RWtnZneH8HWqStFFpvtz09NwxTmgEChj14A82hmiC1KWTP6iOdxUlh67eRZ6p%2B3WjrzkwkMJWz3sEGOqUBbi9JADW1yJ8H03G9UnFl8gyEwVlHBE8QjmPl95LjSoAHbE4p7SO%2BvMCMOnleLeT0a5f79pz3KPTIYzG9ZoQ%2FcAhWaUSQwYXWuYaHSaUIno8VjGkkkmVrRnKr%2BeE1X4TDWYeWHXz0Zx69yxtTUomWWyf8a9%2BIcMCLIMK2XmOx4lhB2NvM%2BCvSJioYKB6bjs1aPaOHONLwW9UHJWO1b5qYiEXPB2%2BB&X-Amz-Signature=ba72dd9c105bb9f24a2c9a862cca1f992623f7664e007c25bfae6fb9ea97d47a&X-Amz-SignedHeaders=host&x-id=GetObject)
