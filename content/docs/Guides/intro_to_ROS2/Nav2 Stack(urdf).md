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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S72D6WEA%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T190148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAsevf2aHESZQ%2B1PWWIgsOeSj4FSgoAEsLuD99YVjOzZAiBmF%2Bg6sItSVOxtVxHNVWmpJk3Aa5A%2FriGasXjdLV6qWir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMD92amYqDoSnFLEQTKtwDRlEH0Iclcy4A%2BVY5BH83a3AgVCK%2BZjFscSxZOTx%2B073l%2F6%2FjxhakNrgUfzUqB7OPH4sA2AJZarJAhzZ5XFv6OhMhElfgCl3EyiY%2B9T%2B%2F%2Fk8J6q%2Br9PSjxZsJF%2BOFk4rdQvyMaS2wInTgsbDvi%2FNDt5%2FmIX7vhPV%2F9OEOoXPusmNmaMhaSioGsS%2FO2Wdx3m6%2BKkvcUBajO%2BuuWlaBKHerGxIV2HaAxjSukkjPOItVDrMZkI7r6UbS5V%2FZgJSd2BpLqsLxELg7WsmjWL%2BB2g9SQRbAFbV2N%2Bm1vX0TUvw8hbWyuF8IDtjTB8fYYx5zP9BffUr7vyjQT6Fiia3mjdcMC4WkzAWu6P6M4UDbG96KgPWzwOKgK201JYZuhEA4y4r95fTMfb%2F4KO9g4zuPLlH5lJRixwhpiN3duP%2BkvVbx%2FrGYW6nQg76BEsCmCoca09zKQHrShckEwy2%2FTo2a1sTbW9%2FumumXJ%2B6VWulsiwHSB4Qtx3MAF2e6vuSq5zIgQh3XZltlrx2UmCwqaOlINqkVMfhDFHybYm6qyj5Qdl6txRBe%2BHXxWp%2FVbU63KhJhzs6ZVVaSDpCnWTqWJ%2BVu2niS391E7ik3ryK7ICFOKK9s3abTwcfHR7pWdw5conUw9LWiwQY6pgF15nv1F12RiHmFuC6NUpf0q5fwedtiv%2BZqJTlTR9dkIdI9ul8vrkvGS1E%2Fp18n%2BRzI6I2fdPAJExaXCwjElxmWz743ZRePzYkxOqV7S8nTOydSsVfOr9HSaO9neRTuU1%2FPJNKe8zCJCNeMKD%2FxfsUg3str8GjaEEmSGZfn%2BKwxNw6xt9csREdhCpNMZnSqK8CvsYE7KDtTLRVCxnQ93MuASnOfPGs2&X-Amz-Signature=58f74bb6669802f7708c5b69227a20e931a4aa49807c1af6db6f68805d854e14&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S72D6WEA%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T190148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAsevf2aHESZQ%2B1PWWIgsOeSj4FSgoAEsLuD99YVjOzZAiBmF%2Bg6sItSVOxtVxHNVWmpJk3Aa5A%2FriGasXjdLV6qWir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMD92amYqDoSnFLEQTKtwDRlEH0Iclcy4A%2BVY5BH83a3AgVCK%2BZjFscSxZOTx%2B073l%2F6%2FjxhakNrgUfzUqB7OPH4sA2AJZarJAhzZ5XFv6OhMhElfgCl3EyiY%2B9T%2B%2F%2Fk8J6q%2Br9PSjxZsJF%2BOFk4rdQvyMaS2wInTgsbDvi%2FNDt5%2FmIX7vhPV%2F9OEOoXPusmNmaMhaSioGsS%2FO2Wdx3m6%2BKkvcUBajO%2BuuWlaBKHerGxIV2HaAxjSukkjPOItVDrMZkI7r6UbS5V%2FZgJSd2BpLqsLxELg7WsmjWL%2BB2g9SQRbAFbV2N%2Bm1vX0TUvw8hbWyuF8IDtjTB8fYYx5zP9BffUr7vyjQT6Fiia3mjdcMC4WkzAWu6P6M4UDbG96KgPWzwOKgK201JYZuhEA4y4r95fTMfb%2F4KO9g4zuPLlH5lJRixwhpiN3duP%2BkvVbx%2FrGYW6nQg76BEsCmCoca09zKQHrShckEwy2%2FTo2a1sTbW9%2FumumXJ%2B6VWulsiwHSB4Qtx3MAF2e6vuSq5zIgQh3XZltlrx2UmCwqaOlINqkVMfhDFHybYm6qyj5Qdl6txRBe%2BHXxWp%2FVbU63KhJhzs6ZVVaSDpCnWTqWJ%2BVu2niS391E7ik3ryK7ICFOKK9s3abTwcfHR7pWdw5conUw9LWiwQY6pgF15nv1F12RiHmFuC6NUpf0q5fwedtiv%2BZqJTlTR9dkIdI9ul8vrkvGS1E%2Fp18n%2BRzI6I2fdPAJExaXCwjElxmWz743ZRePzYkxOqV7S8nTOydSsVfOr9HSaO9neRTuU1%2FPJNKe8zCJCNeMKD%2FxfsUg3str8GjaEEmSGZfn%2BKwxNw6xt9csREdhCpNMZnSqK8CvsYE7KDtTLRVCxnQ93MuASnOfPGs2&X-Amz-Signature=0593f865ca840ed24a462dbb48e09317fa0b60f0b53d876db5a72e21c88e9859&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S72D6WEA%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T190148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAsevf2aHESZQ%2B1PWWIgsOeSj4FSgoAEsLuD99YVjOzZAiBmF%2Bg6sItSVOxtVxHNVWmpJk3Aa5A%2FriGasXjdLV6qWir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMD92amYqDoSnFLEQTKtwDRlEH0Iclcy4A%2BVY5BH83a3AgVCK%2BZjFscSxZOTx%2B073l%2F6%2FjxhakNrgUfzUqB7OPH4sA2AJZarJAhzZ5XFv6OhMhElfgCl3EyiY%2B9T%2B%2F%2Fk8J6q%2Br9PSjxZsJF%2BOFk4rdQvyMaS2wInTgsbDvi%2FNDt5%2FmIX7vhPV%2F9OEOoXPusmNmaMhaSioGsS%2FO2Wdx3m6%2BKkvcUBajO%2BuuWlaBKHerGxIV2HaAxjSukkjPOItVDrMZkI7r6UbS5V%2FZgJSd2BpLqsLxELg7WsmjWL%2BB2g9SQRbAFbV2N%2Bm1vX0TUvw8hbWyuF8IDtjTB8fYYx5zP9BffUr7vyjQT6Fiia3mjdcMC4WkzAWu6P6M4UDbG96KgPWzwOKgK201JYZuhEA4y4r95fTMfb%2F4KO9g4zuPLlH5lJRixwhpiN3duP%2BkvVbx%2FrGYW6nQg76BEsCmCoca09zKQHrShckEwy2%2FTo2a1sTbW9%2FumumXJ%2B6VWulsiwHSB4Qtx3MAF2e6vuSq5zIgQh3XZltlrx2UmCwqaOlINqkVMfhDFHybYm6qyj5Qdl6txRBe%2BHXxWp%2FVbU63KhJhzs6ZVVaSDpCnWTqWJ%2BVu2niS391E7ik3ryK7ICFOKK9s3abTwcfHR7pWdw5conUw9LWiwQY6pgF15nv1F12RiHmFuC6NUpf0q5fwedtiv%2BZqJTlTR9dkIdI9ul8vrkvGS1E%2Fp18n%2BRzI6I2fdPAJExaXCwjElxmWz743ZRePzYkxOqV7S8nTOydSsVfOr9HSaO9neRTuU1%2FPJNKe8zCJCNeMKD%2FxfsUg3str8GjaEEmSGZfn%2BKwxNw6xt9csREdhCpNMZnSqK8CvsYE7KDtTLRVCxnQ93MuASnOfPGs2&X-Amz-Signature=25f5d6ed56972fce8377b80d7630f595ec69faab1f7aefd394763105c9c7d147&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S72D6WEA%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T190148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAsevf2aHESZQ%2B1PWWIgsOeSj4FSgoAEsLuD99YVjOzZAiBmF%2Bg6sItSVOxtVxHNVWmpJk3Aa5A%2FriGasXjdLV6qWir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMD92amYqDoSnFLEQTKtwDRlEH0Iclcy4A%2BVY5BH83a3AgVCK%2BZjFscSxZOTx%2B073l%2F6%2FjxhakNrgUfzUqB7OPH4sA2AJZarJAhzZ5XFv6OhMhElfgCl3EyiY%2B9T%2B%2F%2Fk8J6q%2Br9PSjxZsJF%2BOFk4rdQvyMaS2wInTgsbDvi%2FNDt5%2FmIX7vhPV%2F9OEOoXPusmNmaMhaSioGsS%2FO2Wdx3m6%2BKkvcUBajO%2BuuWlaBKHerGxIV2HaAxjSukkjPOItVDrMZkI7r6UbS5V%2FZgJSd2BpLqsLxELg7WsmjWL%2BB2g9SQRbAFbV2N%2Bm1vX0TUvw8hbWyuF8IDtjTB8fYYx5zP9BffUr7vyjQT6Fiia3mjdcMC4WkzAWu6P6M4UDbG96KgPWzwOKgK201JYZuhEA4y4r95fTMfb%2F4KO9g4zuPLlH5lJRixwhpiN3duP%2BkvVbx%2FrGYW6nQg76BEsCmCoca09zKQHrShckEwy2%2FTo2a1sTbW9%2FumumXJ%2B6VWulsiwHSB4Qtx3MAF2e6vuSq5zIgQh3XZltlrx2UmCwqaOlINqkVMfhDFHybYm6qyj5Qdl6txRBe%2BHXxWp%2FVbU63KhJhzs6ZVVaSDpCnWTqWJ%2BVu2niS391E7ik3ryK7ICFOKK9s3abTwcfHR7pWdw5conUw9LWiwQY6pgF15nv1F12RiHmFuC6NUpf0q5fwedtiv%2BZqJTlTR9dkIdI9ul8vrkvGS1E%2Fp18n%2BRzI6I2fdPAJExaXCwjElxmWz743ZRePzYkxOqV7S8nTOydSsVfOr9HSaO9neRTuU1%2FPJNKe8zCJCNeMKD%2FxfsUg3str8GjaEEmSGZfn%2BKwxNw6xt9csREdhCpNMZnSqK8CvsYE7KDtTLRVCxnQ93MuASnOfPGs2&X-Amz-Signature=82739efb7e6c5ab39b916fa5375b6a12a6196d57d4de98eb9f153a08e226416a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S72D6WEA%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T190148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAsevf2aHESZQ%2B1PWWIgsOeSj4FSgoAEsLuD99YVjOzZAiBmF%2Bg6sItSVOxtVxHNVWmpJk3Aa5A%2FriGasXjdLV6qWir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMD92amYqDoSnFLEQTKtwDRlEH0Iclcy4A%2BVY5BH83a3AgVCK%2BZjFscSxZOTx%2B073l%2F6%2FjxhakNrgUfzUqB7OPH4sA2AJZarJAhzZ5XFv6OhMhElfgCl3EyiY%2B9T%2B%2F%2Fk8J6q%2Br9PSjxZsJF%2BOFk4rdQvyMaS2wInTgsbDvi%2FNDt5%2FmIX7vhPV%2F9OEOoXPusmNmaMhaSioGsS%2FO2Wdx3m6%2BKkvcUBajO%2BuuWlaBKHerGxIV2HaAxjSukkjPOItVDrMZkI7r6UbS5V%2FZgJSd2BpLqsLxELg7WsmjWL%2BB2g9SQRbAFbV2N%2Bm1vX0TUvw8hbWyuF8IDtjTB8fYYx5zP9BffUr7vyjQT6Fiia3mjdcMC4WkzAWu6P6M4UDbG96KgPWzwOKgK201JYZuhEA4y4r95fTMfb%2F4KO9g4zuPLlH5lJRixwhpiN3duP%2BkvVbx%2FrGYW6nQg76BEsCmCoca09zKQHrShckEwy2%2FTo2a1sTbW9%2FumumXJ%2B6VWulsiwHSB4Qtx3MAF2e6vuSq5zIgQh3XZltlrx2UmCwqaOlINqkVMfhDFHybYm6qyj5Qdl6txRBe%2BHXxWp%2FVbU63KhJhzs6ZVVaSDpCnWTqWJ%2BVu2niS391E7ik3ryK7ICFOKK9s3abTwcfHR7pWdw5conUw9LWiwQY6pgF15nv1F12RiHmFuC6NUpf0q5fwedtiv%2BZqJTlTR9dkIdI9ul8vrkvGS1E%2Fp18n%2BRzI6I2fdPAJExaXCwjElxmWz743ZRePzYkxOqV7S8nTOydSsVfOr9HSaO9neRTuU1%2FPJNKe8zCJCNeMKD%2FxfsUg3str8GjaEEmSGZfn%2BKwxNw6xt9csREdhCpNMZnSqK8CvsYE7KDtTLRVCxnQ93MuASnOfPGs2&X-Amz-Signature=d38456383e770fd61f44233a8c2c983d614010978cbdf8c303d807c8b76afead&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S72D6WEA%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T190148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAsevf2aHESZQ%2B1PWWIgsOeSj4FSgoAEsLuD99YVjOzZAiBmF%2Bg6sItSVOxtVxHNVWmpJk3Aa5A%2FriGasXjdLV6qWir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMD92amYqDoSnFLEQTKtwDRlEH0Iclcy4A%2BVY5BH83a3AgVCK%2BZjFscSxZOTx%2B073l%2F6%2FjxhakNrgUfzUqB7OPH4sA2AJZarJAhzZ5XFv6OhMhElfgCl3EyiY%2B9T%2B%2F%2Fk8J6q%2Br9PSjxZsJF%2BOFk4rdQvyMaS2wInTgsbDvi%2FNDt5%2FmIX7vhPV%2F9OEOoXPusmNmaMhaSioGsS%2FO2Wdx3m6%2BKkvcUBajO%2BuuWlaBKHerGxIV2HaAxjSukkjPOItVDrMZkI7r6UbS5V%2FZgJSd2BpLqsLxELg7WsmjWL%2BB2g9SQRbAFbV2N%2Bm1vX0TUvw8hbWyuF8IDtjTB8fYYx5zP9BffUr7vyjQT6Fiia3mjdcMC4WkzAWu6P6M4UDbG96KgPWzwOKgK201JYZuhEA4y4r95fTMfb%2F4KO9g4zuPLlH5lJRixwhpiN3duP%2BkvVbx%2FrGYW6nQg76BEsCmCoca09zKQHrShckEwy2%2FTo2a1sTbW9%2FumumXJ%2B6VWulsiwHSB4Qtx3MAF2e6vuSq5zIgQh3XZltlrx2UmCwqaOlINqkVMfhDFHybYm6qyj5Qdl6txRBe%2BHXxWp%2FVbU63KhJhzs6ZVVaSDpCnWTqWJ%2BVu2niS391E7ik3ryK7ICFOKK9s3abTwcfHR7pWdw5conUw9LWiwQY6pgF15nv1F12RiHmFuC6NUpf0q5fwedtiv%2BZqJTlTR9dkIdI9ul8vrkvGS1E%2Fp18n%2BRzI6I2fdPAJExaXCwjElxmWz743ZRePzYkxOqV7S8nTOydSsVfOr9HSaO9neRTuU1%2FPJNKe8zCJCNeMKD%2FxfsUg3str8GjaEEmSGZfn%2BKwxNw6xt9csREdhCpNMZnSqK8CvsYE7KDtTLRVCxnQ93MuASnOfPGs2&X-Amz-Signature=a6735154a6480bf1cf643f8bdd1e4b68288bffd08216ccaffd89f21e7e991074&X-Amz-SignedHeaders=host&x-id=GetObject)
