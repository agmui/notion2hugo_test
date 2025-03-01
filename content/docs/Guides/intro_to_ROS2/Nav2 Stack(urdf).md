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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLUHTKKQ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T230204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQC4jnZDf8L2m0YvldfdYwBy1FDEjMHLqroOe9L33AmmNQIgTB6p%2BnoDnaB89Iq8s0FqRIelVdyhSVYFYF1dD1dY1%2BQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEs28zjt3FsjUE7circA7AL9XWl4xs0PpT8Fkfh8X%2FrpGb2K3fcYJxZjyahpl5USezU2rLASN0Yw0UX0pOzeyOqOrR1AYSM5O0gHNOBTQuSNUXngxtvmgw0ci5X3qMlBv%2BPSlA8MmBSzB2Q9%2F8QysRz8ZEkOU8XdPiJdvyj%2FPUN2OJ9o5%2FhhTbptWLtAeDr1If%2BaZnIJLIYYH3E%2F2f4lnUKtwXYMheTyP3JQlHro6mDacMie1sUjy8tUUVa%2Fzq2y7zWSqbPRTo9ch2R9fnPO2NkaD45d85pOyoNDQqOTp7oPcYcCpYZPil9QeZ4qKw8UXn92VI7wLYIO9TwqLvjV1ooi83ksQv8cP1K7m7uLeHxIW7m30un%2BK%2FgQw3TjcZMAEq4qJEc3wpNpusK%2Fh5%2Fr1BrCBub%2BO9LkPDND7hcJYzrlNY%2B9kfpmQOHZr5JGF2H0pa%2FmkbvMcXZdsnM0Hmqw28kQ%2BNn2gc%2FrFcMA21oOnhK5iD%2F38u6oxexFJnq73aczmsiTpqCXX0gWf2L0xW4bYqIBiTRhPX%2F2hYfny0yrkH0m3jw%2F%2BY6eIPc%2FUppkGQtQonHlowOfPqMBjbiS5PAFVts%2F8Nf%2BpoXqfFP3XGwrT%2FZcWEzFEaYo6oNeu8Ukjgfgio4WZ6H6DEqjenEMMfHjb4GOqUB1mvqogHf%2FLuPq7Pee7qNjS4b1hv5zhDDdRiFiKgFWvmfmkiGUdJreGOlbLMYCIaNHmuPvfPQ4dNT8pHT6ZfeB3yKFq7LL%2B9gGP6OPfDT59XA9Dy7%2B%2B0%2FvlRNvD3COg%2FQ0O0GZxzxNsuBZbGX%2FDbrAZKsSKSUl9pVgCYokt%2BB5WNfIQpj%2FktVYJHfOfdwdF2%2BvXECe62DZ%2FPH0B9R3Me37QMtHFvd&X-Amz-Signature=bcfa356157b753d07ad7cd2675e39c9638f6c156b2b7961e5aaa3731766c600f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLUHTKKQ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T230204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQC4jnZDf8L2m0YvldfdYwBy1FDEjMHLqroOe9L33AmmNQIgTB6p%2BnoDnaB89Iq8s0FqRIelVdyhSVYFYF1dD1dY1%2BQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEs28zjt3FsjUE7circA7AL9XWl4xs0PpT8Fkfh8X%2FrpGb2K3fcYJxZjyahpl5USezU2rLASN0Yw0UX0pOzeyOqOrR1AYSM5O0gHNOBTQuSNUXngxtvmgw0ci5X3qMlBv%2BPSlA8MmBSzB2Q9%2F8QysRz8ZEkOU8XdPiJdvyj%2FPUN2OJ9o5%2FhhTbptWLtAeDr1If%2BaZnIJLIYYH3E%2F2f4lnUKtwXYMheTyP3JQlHro6mDacMie1sUjy8tUUVa%2Fzq2y7zWSqbPRTo9ch2R9fnPO2NkaD45d85pOyoNDQqOTp7oPcYcCpYZPil9QeZ4qKw8UXn92VI7wLYIO9TwqLvjV1ooi83ksQv8cP1K7m7uLeHxIW7m30un%2BK%2FgQw3TjcZMAEq4qJEc3wpNpusK%2Fh5%2Fr1BrCBub%2BO9LkPDND7hcJYzrlNY%2B9kfpmQOHZr5JGF2H0pa%2FmkbvMcXZdsnM0Hmqw28kQ%2BNn2gc%2FrFcMA21oOnhK5iD%2F38u6oxexFJnq73aczmsiTpqCXX0gWf2L0xW4bYqIBiTRhPX%2F2hYfny0yrkH0m3jw%2F%2BY6eIPc%2FUppkGQtQonHlowOfPqMBjbiS5PAFVts%2F8Nf%2BpoXqfFP3XGwrT%2FZcWEzFEaYo6oNeu8Ukjgfgio4WZ6H6DEqjenEMMfHjb4GOqUB1mvqogHf%2FLuPq7Pee7qNjS4b1hv5zhDDdRiFiKgFWvmfmkiGUdJreGOlbLMYCIaNHmuPvfPQ4dNT8pHT6ZfeB3yKFq7LL%2B9gGP6OPfDT59XA9Dy7%2B%2B0%2FvlRNvD3COg%2FQ0O0GZxzxNsuBZbGX%2FDbrAZKsSKSUl9pVgCYokt%2BB5WNfIQpj%2FktVYJHfOfdwdF2%2BvXECe62DZ%2FPH0B9R3Me37QMtHFvd&X-Amz-Signature=f0910da7c0caef2a0544eee3b577cdcdee59b1459c6cfcb4facf77739af3ed41&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLUHTKKQ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T230204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQC4jnZDf8L2m0YvldfdYwBy1FDEjMHLqroOe9L33AmmNQIgTB6p%2BnoDnaB89Iq8s0FqRIelVdyhSVYFYF1dD1dY1%2BQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEs28zjt3FsjUE7circA7AL9XWl4xs0PpT8Fkfh8X%2FrpGb2K3fcYJxZjyahpl5USezU2rLASN0Yw0UX0pOzeyOqOrR1AYSM5O0gHNOBTQuSNUXngxtvmgw0ci5X3qMlBv%2BPSlA8MmBSzB2Q9%2F8QysRz8ZEkOU8XdPiJdvyj%2FPUN2OJ9o5%2FhhTbptWLtAeDr1If%2BaZnIJLIYYH3E%2F2f4lnUKtwXYMheTyP3JQlHro6mDacMie1sUjy8tUUVa%2Fzq2y7zWSqbPRTo9ch2R9fnPO2NkaD45d85pOyoNDQqOTp7oPcYcCpYZPil9QeZ4qKw8UXn92VI7wLYIO9TwqLvjV1ooi83ksQv8cP1K7m7uLeHxIW7m30un%2BK%2FgQw3TjcZMAEq4qJEc3wpNpusK%2Fh5%2Fr1BrCBub%2BO9LkPDND7hcJYzrlNY%2B9kfpmQOHZr5JGF2H0pa%2FmkbvMcXZdsnM0Hmqw28kQ%2BNn2gc%2FrFcMA21oOnhK5iD%2F38u6oxexFJnq73aczmsiTpqCXX0gWf2L0xW4bYqIBiTRhPX%2F2hYfny0yrkH0m3jw%2F%2BY6eIPc%2FUppkGQtQonHlowOfPqMBjbiS5PAFVts%2F8Nf%2BpoXqfFP3XGwrT%2FZcWEzFEaYo6oNeu8Ukjgfgio4WZ6H6DEqjenEMMfHjb4GOqUB1mvqogHf%2FLuPq7Pee7qNjS4b1hv5zhDDdRiFiKgFWvmfmkiGUdJreGOlbLMYCIaNHmuPvfPQ4dNT8pHT6ZfeB3yKFq7LL%2B9gGP6OPfDT59XA9Dy7%2B%2B0%2FvlRNvD3COg%2FQ0O0GZxzxNsuBZbGX%2FDbrAZKsSKSUl9pVgCYokt%2BB5WNfIQpj%2FktVYJHfOfdwdF2%2BvXECe62DZ%2FPH0B9R3Me37QMtHFvd&X-Amz-Signature=ca7468da17783a6c9def7472718e0f9843a874aa7d72ffdf36ef29dd097b5dde&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLUHTKKQ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T230204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQC4jnZDf8L2m0YvldfdYwBy1FDEjMHLqroOe9L33AmmNQIgTB6p%2BnoDnaB89Iq8s0FqRIelVdyhSVYFYF1dD1dY1%2BQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEs28zjt3FsjUE7circA7AL9XWl4xs0PpT8Fkfh8X%2FrpGb2K3fcYJxZjyahpl5USezU2rLASN0Yw0UX0pOzeyOqOrR1AYSM5O0gHNOBTQuSNUXngxtvmgw0ci5X3qMlBv%2BPSlA8MmBSzB2Q9%2F8QysRz8ZEkOU8XdPiJdvyj%2FPUN2OJ9o5%2FhhTbptWLtAeDr1If%2BaZnIJLIYYH3E%2F2f4lnUKtwXYMheTyP3JQlHro6mDacMie1sUjy8tUUVa%2Fzq2y7zWSqbPRTo9ch2R9fnPO2NkaD45d85pOyoNDQqOTp7oPcYcCpYZPil9QeZ4qKw8UXn92VI7wLYIO9TwqLvjV1ooi83ksQv8cP1K7m7uLeHxIW7m30un%2BK%2FgQw3TjcZMAEq4qJEc3wpNpusK%2Fh5%2Fr1BrCBub%2BO9LkPDND7hcJYzrlNY%2B9kfpmQOHZr5JGF2H0pa%2FmkbvMcXZdsnM0Hmqw28kQ%2BNn2gc%2FrFcMA21oOnhK5iD%2F38u6oxexFJnq73aczmsiTpqCXX0gWf2L0xW4bYqIBiTRhPX%2F2hYfny0yrkH0m3jw%2F%2BY6eIPc%2FUppkGQtQonHlowOfPqMBjbiS5PAFVts%2F8Nf%2BpoXqfFP3XGwrT%2FZcWEzFEaYo6oNeu8Ukjgfgio4WZ6H6DEqjenEMMfHjb4GOqUB1mvqogHf%2FLuPq7Pee7qNjS4b1hv5zhDDdRiFiKgFWvmfmkiGUdJreGOlbLMYCIaNHmuPvfPQ4dNT8pHT6ZfeB3yKFq7LL%2B9gGP6OPfDT59XA9Dy7%2B%2B0%2FvlRNvD3COg%2FQ0O0GZxzxNsuBZbGX%2FDbrAZKsSKSUl9pVgCYokt%2BB5WNfIQpj%2FktVYJHfOfdwdF2%2BvXECe62DZ%2FPH0B9R3Me37QMtHFvd&X-Amz-Signature=039ab96bc8faf2b558a7cce3deb3dd9edb91d25811d941446664e92f01eed691&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLUHTKKQ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T230204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQC4jnZDf8L2m0YvldfdYwBy1FDEjMHLqroOe9L33AmmNQIgTB6p%2BnoDnaB89Iq8s0FqRIelVdyhSVYFYF1dD1dY1%2BQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEs28zjt3FsjUE7circA7AL9XWl4xs0PpT8Fkfh8X%2FrpGb2K3fcYJxZjyahpl5USezU2rLASN0Yw0UX0pOzeyOqOrR1AYSM5O0gHNOBTQuSNUXngxtvmgw0ci5X3qMlBv%2BPSlA8MmBSzB2Q9%2F8QysRz8ZEkOU8XdPiJdvyj%2FPUN2OJ9o5%2FhhTbptWLtAeDr1If%2BaZnIJLIYYH3E%2F2f4lnUKtwXYMheTyP3JQlHro6mDacMie1sUjy8tUUVa%2Fzq2y7zWSqbPRTo9ch2R9fnPO2NkaD45d85pOyoNDQqOTp7oPcYcCpYZPil9QeZ4qKw8UXn92VI7wLYIO9TwqLvjV1ooi83ksQv8cP1K7m7uLeHxIW7m30un%2BK%2FgQw3TjcZMAEq4qJEc3wpNpusK%2Fh5%2Fr1BrCBub%2BO9LkPDND7hcJYzrlNY%2B9kfpmQOHZr5JGF2H0pa%2FmkbvMcXZdsnM0Hmqw28kQ%2BNn2gc%2FrFcMA21oOnhK5iD%2F38u6oxexFJnq73aczmsiTpqCXX0gWf2L0xW4bYqIBiTRhPX%2F2hYfny0yrkH0m3jw%2F%2BY6eIPc%2FUppkGQtQonHlowOfPqMBjbiS5PAFVts%2F8Nf%2BpoXqfFP3XGwrT%2FZcWEzFEaYo6oNeu8Ukjgfgio4WZ6H6DEqjenEMMfHjb4GOqUB1mvqogHf%2FLuPq7Pee7qNjS4b1hv5zhDDdRiFiKgFWvmfmkiGUdJreGOlbLMYCIaNHmuPvfPQ4dNT8pHT6ZfeB3yKFq7LL%2B9gGP6OPfDT59XA9Dy7%2B%2B0%2FvlRNvD3COg%2FQ0O0GZxzxNsuBZbGX%2FDbrAZKsSKSUl9pVgCYokt%2BB5WNfIQpj%2FktVYJHfOfdwdF2%2BvXECe62DZ%2FPH0B9R3Me37QMtHFvd&X-Amz-Signature=e2104ee5fc7ef28542be8d5c5d816a955a0d1dfb8db87e5b2309dd1edf63c72d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLUHTKKQ%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T230204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQC4jnZDf8L2m0YvldfdYwBy1FDEjMHLqroOe9L33AmmNQIgTB6p%2BnoDnaB89Iq8s0FqRIelVdyhSVYFYF1dD1dY1%2BQqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEs28zjt3FsjUE7circA7AL9XWl4xs0PpT8Fkfh8X%2FrpGb2K3fcYJxZjyahpl5USezU2rLASN0Yw0UX0pOzeyOqOrR1AYSM5O0gHNOBTQuSNUXngxtvmgw0ci5X3qMlBv%2BPSlA8MmBSzB2Q9%2F8QysRz8ZEkOU8XdPiJdvyj%2FPUN2OJ9o5%2FhhTbptWLtAeDr1If%2BaZnIJLIYYH3E%2F2f4lnUKtwXYMheTyP3JQlHro6mDacMie1sUjy8tUUVa%2Fzq2y7zWSqbPRTo9ch2R9fnPO2NkaD45d85pOyoNDQqOTp7oPcYcCpYZPil9QeZ4qKw8UXn92VI7wLYIO9TwqLvjV1ooi83ksQv8cP1K7m7uLeHxIW7m30un%2BK%2FgQw3TjcZMAEq4qJEc3wpNpusK%2Fh5%2Fr1BrCBub%2BO9LkPDND7hcJYzrlNY%2B9kfpmQOHZr5JGF2H0pa%2FmkbvMcXZdsnM0Hmqw28kQ%2BNn2gc%2FrFcMA21oOnhK5iD%2F38u6oxexFJnq73aczmsiTpqCXX0gWf2L0xW4bYqIBiTRhPX%2F2hYfny0yrkH0m3jw%2F%2BY6eIPc%2FUppkGQtQonHlowOfPqMBjbiS5PAFVts%2F8Nf%2BpoXqfFP3XGwrT%2FZcWEzFEaYo6oNeu8Ukjgfgio4WZ6H6DEqjenEMMfHjb4GOqUB1mvqogHf%2FLuPq7Pee7qNjS4b1hv5zhDDdRiFiKgFWvmfmkiGUdJreGOlbLMYCIaNHmuPvfPQ4dNT8pHT6ZfeB3yKFq7LL%2B9gGP6OPfDT59XA9Dy7%2B%2B0%2FvlRNvD3COg%2FQ0O0GZxzxNsuBZbGX%2FDbrAZKsSKSUl9pVgCYokt%2BB5WNfIQpj%2FktVYJHfOfdwdF2%2BvXECe62DZ%2FPH0B9R3Me37QMtHFvd&X-Amz-Signature=2366fbe0d5a77087ff1644bf89627d117fdb55f800fa9ddc9a9e8d5db71242f9&X-Amz-SignedHeaders=host&x-id=GetObject)
