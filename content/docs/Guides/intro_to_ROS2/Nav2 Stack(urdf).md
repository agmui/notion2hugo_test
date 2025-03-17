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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDGKNB6J%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1JASGSj%2FsqbB2LzTKq67zbTqp8gIMQCF1%2BD6U4D8ylAiEA7Wafx0vxy3R5U0oaV8%2BQmfujKvSvTFmO8VTJ34lC3Ugq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDKM87pEtC4JFpabExSrcAw2ABdZDeJitZ2FGmuCy3X5pZ7n66ZWA0fcetneofc%2F9hF3itsouZr5s3XQEiZdgGL0jR85kOEIP12Bkm9IO9Z4JLiZG0QIf0ZZ09oaO0Hs%2BPoBpqD8rNHATNZAG5hoPusA9MrRHnuztSfrjUglWjYxwkXh6gGYsLmiPoa2KAPO6ZSwvTWWmD9fpuX0%2FCftst%2F0NxssUCa4RLnOZJG6lepRLS1du22bRN7U2W8zNBpKl9KL7iRe%2FExgxYJhblKBSKJG1hRUYb09GnZXvcBE%2Bp1z8YdTG2xfbPWcZSE8UU8NvD0ia3Durgty87rPKQWXr12k4%2BpTyoyZ0gJnpI8RiDvVw6v%2FrP6slEJdI37%2BNtfbBjCoNijDnRaMBLbeOPZbJWpwrldPvErTNEb5YUFb4nRNij4cwf8f6N6exGCXYHo3Dol94nekj8vO%2FXRJlBzTmwC5PXcL8tXGRIw8%2BkVsx16FtBPF3a28rXi5T9K95nHMvnRCIRmSuUohGsWzqCQ7Bi%2BaJnvtb%2B%2BFyRojaAgNyeIlQoSTKi0qIqpafLFf%2FOvDiYKZfHF7tbik0uhLtyXxrzTaeslWqEqevbkT1vgy1uu2uVPGBcvxaiF5uKMJJSIacxMO9otJTBpaYg6N8MLbF4b4GOqUBprVt7t83sbo4pmGRYrj5qhuQjGAxekncF2WnCDnBL%2FkoNyrV%2BhRRNnVvfemOwDVkWDgwOmwub1yf%2F2wdKkH0WevkxM7ovnpU%2BIYVGlQGwU%2F9duQvas1OEsTB%2BZCBpQE%2FSbP6XYtuyUaDArb0V5IOsJ9sy2YhMwfSA9c3TEApuetxE7e4q1jXu3wXp5mzKr1s8ABIUYF7XDHF0zTXn%2Fl7r6gqpbIh&X-Amz-Signature=516cd8541840790b71d145600c4e9ac875954e08117fab8c0abfc7b1c05f4a01&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDGKNB6J%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1JASGSj%2FsqbB2LzTKq67zbTqp8gIMQCF1%2BD6U4D8ylAiEA7Wafx0vxy3R5U0oaV8%2BQmfujKvSvTFmO8VTJ34lC3Ugq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDKM87pEtC4JFpabExSrcAw2ABdZDeJitZ2FGmuCy3X5pZ7n66ZWA0fcetneofc%2F9hF3itsouZr5s3XQEiZdgGL0jR85kOEIP12Bkm9IO9Z4JLiZG0QIf0ZZ09oaO0Hs%2BPoBpqD8rNHATNZAG5hoPusA9MrRHnuztSfrjUglWjYxwkXh6gGYsLmiPoa2KAPO6ZSwvTWWmD9fpuX0%2FCftst%2F0NxssUCa4RLnOZJG6lepRLS1du22bRN7U2W8zNBpKl9KL7iRe%2FExgxYJhblKBSKJG1hRUYb09GnZXvcBE%2Bp1z8YdTG2xfbPWcZSE8UU8NvD0ia3Durgty87rPKQWXr12k4%2BpTyoyZ0gJnpI8RiDvVw6v%2FrP6slEJdI37%2BNtfbBjCoNijDnRaMBLbeOPZbJWpwrldPvErTNEb5YUFb4nRNij4cwf8f6N6exGCXYHo3Dol94nekj8vO%2FXRJlBzTmwC5PXcL8tXGRIw8%2BkVsx16FtBPF3a28rXi5T9K95nHMvnRCIRmSuUohGsWzqCQ7Bi%2BaJnvtb%2B%2BFyRojaAgNyeIlQoSTKi0qIqpafLFf%2FOvDiYKZfHF7tbik0uhLtyXxrzTaeslWqEqevbkT1vgy1uu2uVPGBcvxaiF5uKMJJSIacxMO9otJTBpaYg6N8MLbF4b4GOqUBprVt7t83sbo4pmGRYrj5qhuQjGAxekncF2WnCDnBL%2FkoNyrV%2BhRRNnVvfemOwDVkWDgwOmwub1yf%2F2wdKkH0WevkxM7ovnpU%2BIYVGlQGwU%2F9duQvas1OEsTB%2BZCBpQE%2FSbP6XYtuyUaDArb0V5IOsJ9sy2YhMwfSA9c3TEApuetxE7e4q1jXu3wXp5mzKr1s8ABIUYF7XDHF0zTXn%2Fl7r6gqpbIh&X-Amz-Signature=6755e20c618672105884c3ddf72d2d09314d0b95070ff95ba8ba10b1ae4c6887&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDGKNB6J%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1JASGSj%2FsqbB2LzTKq67zbTqp8gIMQCF1%2BD6U4D8ylAiEA7Wafx0vxy3R5U0oaV8%2BQmfujKvSvTFmO8VTJ34lC3Ugq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDKM87pEtC4JFpabExSrcAw2ABdZDeJitZ2FGmuCy3X5pZ7n66ZWA0fcetneofc%2F9hF3itsouZr5s3XQEiZdgGL0jR85kOEIP12Bkm9IO9Z4JLiZG0QIf0ZZ09oaO0Hs%2BPoBpqD8rNHATNZAG5hoPusA9MrRHnuztSfrjUglWjYxwkXh6gGYsLmiPoa2KAPO6ZSwvTWWmD9fpuX0%2FCftst%2F0NxssUCa4RLnOZJG6lepRLS1du22bRN7U2W8zNBpKl9KL7iRe%2FExgxYJhblKBSKJG1hRUYb09GnZXvcBE%2Bp1z8YdTG2xfbPWcZSE8UU8NvD0ia3Durgty87rPKQWXr12k4%2BpTyoyZ0gJnpI8RiDvVw6v%2FrP6slEJdI37%2BNtfbBjCoNijDnRaMBLbeOPZbJWpwrldPvErTNEb5YUFb4nRNij4cwf8f6N6exGCXYHo3Dol94nekj8vO%2FXRJlBzTmwC5PXcL8tXGRIw8%2BkVsx16FtBPF3a28rXi5T9K95nHMvnRCIRmSuUohGsWzqCQ7Bi%2BaJnvtb%2B%2BFyRojaAgNyeIlQoSTKi0qIqpafLFf%2FOvDiYKZfHF7tbik0uhLtyXxrzTaeslWqEqevbkT1vgy1uu2uVPGBcvxaiF5uKMJJSIacxMO9otJTBpaYg6N8MLbF4b4GOqUBprVt7t83sbo4pmGRYrj5qhuQjGAxekncF2WnCDnBL%2FkoNyrV%2BhRRNnVvfemOwDVkWDgwOmwub1yf%2F2wdKkH0WevkxM7ovnpU%2BIYVGlQGwU%2F9duQvas1OEsTB%2BZCBpQE%2FSbP6XYtuyUaDArb0V5IOsJ9sy2YhMwfSA9c3TEApuetxE7e4q1jXu3wXp5mzKr1s8ABIUYF7XDHF0zTXn%2Fl7r6gqpbIh&X-Amz-Signature=c83df4ebf4653cf5a925af1c5ba77fb764ab9ecfabc01b1b1b77537fef417723&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDGKNB6J%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1JASGSj%2FsqbB2LzTKq67zbTqp8gIMQCF1%2BD6U4D8ylAiEA7Wafx0vxy3R5U0oaV8%2BQmfujKvSvTFmO8VTJ34lC3Ugq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDKM87pEtC4JFpabExSrcAw2ABdZDeJitZ2FGmuCy3X5pZ7n66ZWA0fcetneofc%2F9hF3itsouZr5s3XQEiZdgGL0jR85kOEIP12Bkm9IO9Z4JLiZG0QIf0ZZ09oaO0Hs%2BPoBpqD8rNHATNZAG5hoPusA9MrRHnuztSfrjUglWjYxwkXh6gGYsLmiPoa2KAPO6ZSwvTWWmD9fpuX0%2FCftst%2F0NxssUCa4RLnOZJG6lepRLS1du22bRN7U2W8zNBpKl9KL7iRe%2FExgxYJhblKBSKJG1hRUYb09GnZXvcBE%2Bp1z8YdTG2xfbPWcZSE8UU8NvD0ia3Durgty87rPKQWXr12k4%2BpTyoyZ0gJnpI8RiDvVw6v%2FrP6slEJdI37%2BNtfbBjCoNijDnRaMBLbeOPZbJWpwrldPvErTNEb5YUFb4nRNij4cwf8f6N6exGCXYHo3Dol94nekj8vO%2FXRJlBzTmwC5PXcL8tXGRIw8%2BkVsx16FtBPF3a28rXi5T9K95nHMvnRCIRmSuUohGsWzqCQ7Bi%2BaJnvtb%2B%2BFyRojaAgNyeIlQoSTKi0qIqpafLFf%2FOvDiYKZfHF7tbik0uhLtyXxrzTaeslWqEqevbkT1vgy1uu2uVPGBcvxaiF5uKMJJSIacxMO9otJTBpaYg6N8MLbF4b4GOqUBprVt7t83sbo4pmGRYrj5qhuQjGAxekncF2WnCDnBL%2FkoNyrV%2BhRRNnVvfemOwDVkWDgwOmwub1yf%2F2wdKkH0WevkxM7ovnpU%2BIYVGlQGwU%2F9duQvas1OEsTB%2BZCBpQE%2FSbP6XYtuyUaDArb0V5IOsJ9sy2YhMwfSA9c3TEApuetxE7e4q1jXu3wXp5mzKr1s8ABIUYF7XDHF0zTXn%2Fl7r6gqpbIh&X-Amz-Signature=edb4cc7f8bf629a690f89cf2da8b0df02f60051932a8b5a521db5f2d86e8c077&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDGKNB6J%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1JASGSj%2FsqbB2LzTKq67zbTqp8gIMQCF1%2BD6U4D8ylAiEA7Wafx0vxy3R5U0oaV8%2BQmfujKvSvTFmO8VTJ34lC3Ugq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDKM87pEtC4JFpabExSrcAw2ABdZDeJitZ2FGmuCy3X5pZ7n66ZWA0fcetneofc%2F9hF3itsouZr5s3XQEiZdgGL0jR85kOEIP12Bkm9IO9Z4JLiZG0QIf0ZZ09oaO0Hs%2BPoBpqD8rNHATNZAG5hoPusA9MrRHnuztSfrjUglWjYxwkXh6gGYsLmiPoa2KAPO6ZSwvTWWmD9fpuX0%2FCftst%2F0NxssUCa4RLnOZJG6lepRLS1du22bRN7U2W8zNBpKl9KL7iRe%2FExgxYJhblKBSKJG1hRUYb09GnZXvcBE%2Bp1z8YdTG2xfbPWcZSE8UU8NvD0ia3Durgty87rPKQWXr12k4%2BpTyoyZ0gJnpI8RiDvVw6v%2FrP6slEJdI37%2BNtfbBjCoNijDnRaMBLbeOPZbJWpwrldPvErTNEb5YUFb4nRNij4cwf8f6N6exGCXYHo3Dol94nekj8vO%2FXRJlBzTmwC5PXcL8tXGRIw8%2BkVsx16FtBPF3a28rXi5T9K95nHMvnRCIRmSuUohGsWzqCQ7Bi%2BaJnvtb%2B%2BFyRojaAgNyeIlQoSTKi0qIqpafLFf%2FOvDiYKZfHF7tbik0uhLtyXxrzTaeslWqEqevbkT1vgy1uu2uVPGBcvxaiF5uKMJJSIacxMO9otJTBpaYg6N8MLbF4b4GOqUBprVt7t83sbo4pmGRYrj5qhuQjGAxekncF2WnCDnBL%2FkoNyrV%2BhRRNnVvfemOwDVkWDgwOmwub1yf%2F2wdKkH0WevkxM7ovnpU%2BIYVGlQGwU%2F9duQvas1OEsTB%2BZCBpQE%2FSbP6XYtuyUaDArb0V5IOsJ9sy2YhMwfSA9c3TEApuetxE7e4q1jXu3wXp5mzKr1s8ABIUYF7XDHF0zTXn%2Fl7r6gqpbIh&X-Amz-Signature=4ba8ee13f9350b26005636c64a9ec552648bf97e3bd9f40f7c563f9bdf28a17b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDGKNB6J%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T190211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB1JASGSj%2FsqbB2LzTKq67zbTqp8gIMQCF1%2BD6U4D8ylAiEA7Wafx0vxy3R5U0oaV8%2BQmfujKvSvTFmO8VTJ34lC3Ugq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDKM87pEtC4JFpabExSrcAw2ABdZDeJitZ2FGmuCy3X5pZ7n66ZWA0fcetneofc%2F9hF3itsouZr5s3XQEiZdgGL0jR85kOEIP12Bkm9IO9Z4JLiZG0QIf0ZZ09oaO0Hs%2BPoBpqD8rNHATNZAG5hoPusA9MrRHnuztSfrjUglWjYxwkXh6gGYsLmiPoa2KAPO6ZSwvTWWmD9fpuX0%2FCftst%2F0NxssUCa4RLnOZJG6lepRLS1du22bRN7U2W8zNBpKl9KL7iRe%2FExgxYJhblKBSKJG1hRUYb09GnZXvcBE%2Bp1z8YdTG2xfbPWcZSE8UU8NvD0ia3Durgty87rPKQWXr12k4%2BpTyoyZ0gJnpI8RiDvVw6v%2FrP6slEJdI37%2BNtfbBjCoNijDnRaMBLbeOPZbJWpwrldPvErTNEb5YUFb4nRNij4cwf8f6N6exGCXYHo3Dol94nekj8vO%2FXRJlBzTmwC5PXcL8tXGRIw8%2BkVsx16FtBPF3a28rXi5T9K95nHMvnRCIRmSuUohGsWzqCQ7Bi%2BaJnvtb%2B%2BFyRojaAgNyeIlQoSTKi0qIqpafLFf%2FOvDiYKZfHF7tbik0uhLtyXxrzTaeslWqEqevbkT1vgy1uu2uVPGBcvxaiF5uKMJJSIacxMO9otJTBpaYg6N8MLbF4b4GOqUBprVt7t83sbo4pmGRYrj5qhuQjGAxekncF2WnCDnBL%2FkoNyrV%2BhRRNnVvfemOwDVkWDgwOmwub1yf%2F2wdKkH0WevkxM7ovnpU%2BIYVGlQGwU%2F9duQvas1OEsTB%2BZCBpQE%2FSbP6XYtuyUaDArb0V5IOsJ9sy2YhMwfSA9c3TEApuetxE7e4q1jXu3wXp5mzKr1s8ABIUYF7XDHF0zTXn%2Fl7r6gqpbIh&X-Amz-Signature=1e4076e368d68a27217a17f31cc4ace7c8bf5252b5d152f56571749bb381dfbf&X-Amz-SignedHeaders=host&x-id=GetObject)
