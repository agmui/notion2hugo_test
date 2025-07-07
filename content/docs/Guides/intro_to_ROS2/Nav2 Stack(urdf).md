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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVHLERPR%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIE2gZOG%2BnkN1Q6wvwgnvCcP1PlAgT%2FplZEJL2GWIj1QcAiEA8S5DGSzqWaBmdlwJYR0egjJQiGJ5GtgQQFWzhS4dTZUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDJMut9oPksZxIZEGzCrcA3hvSvQCEIapgmPZU1dexiRt%2BRQc4ib%2BW1DneX5l2qWgQIN4na2FoskcXKdNXB9NI155G68RDflbdQW47k27KLEqI%2Fr29eD6Z9RS14Olzunw8L%2FF9SatWRXXrctp7%2FTN%2FbZ3amBu5wOrw%2BcRUN%2FW8WioiM23xWUDJCJoNVm1cb7Wy1bE9zUMzelE1gqq%2FR1YuGFHVX2BYAa%2BzqaA8d%2B1GvFDjVIZjWJ96rB0Cl0X3nlwuhMVp7N10%2B0UwGeonio92zddASr7umIhHclMP9EEWSsQpfvJwLKZ8KYhjlLB9FSHgSKfkaUL%2FS51cEnTqr%2Bwk6BIqA7NOPDHWI1tUD1r63txr4IvSeBR2qr4VWtazCkhCcYpi%2FSeuOQAtcJO2aRmt9kGEC96QOVuMfIo6POPKlTuGk4sd8juXH6rmordo5CsWUWqjXcas0l4dpRwo5B6A%2BAg9Zeo86l%2Bj9B1QLqnsxFK%2FOtpTvndzrOP1PhdHOGNqJsWkxfYcbKqCIoYM3yfm8WueRoXjk2mXv4rWc%2Fwnbu3CAp6%2BvbJSon6%2FS3bFfbAY2owv8RrWHNc9rumMUNDZ%2FzQKsQA8MbXrRxFmDY4JV4cq5poc56hHCksqFSmeHgDsVVSEL9fl7Sd4zjHMNXosMMGOqUBlazEXa2ayM%2FKGHfkazYre58xCNi2ZOCmVp9f%2FJWfUAoYuohvdpBOgA1johk58nGdewtVABeqd2bokUBXrvNFEm4zJ53cvQpOMxeJAHAW4htbUMaliik68rvZEGXsFjx4GSOKoY27%2BY3UWiMoOg32nVokk43b6lXIL1HtXyEtQZNLYySbfEO0qWvaIusHvH0ZgGXfO2jhnjHQBObn3AYGJyfixTtq&X-Amz-Signature=593884332c07567df58cd9f8560a70a7a6032b66c7a715d5def99be919ea5314&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVHLERPR%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIE2gZOG%2BnkN1Q6wvwgnvCcP1PlAgT%2FplZEJL2GWIj1QcAiEA8S5DGSzqWaBmdlwJYR0egjJQiGJ5GtgQQFWzhS4dTZUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDJMut9oPksZxIZEGzCrcA3hvSvQCEIapgmPZU1dexiRt%2BRQc4ib%2BW1DneX5l2qWgQIN4na2FoskcXKdNXB9NI155G68RDflbdQW47k27KLEqI%2Fr29eD6Z9RS14Olzunw8L%2FF9SatWRXXrctp7%2FTN%2FbZ3amBu5wOrw%2BcRUN%2FW8WioiM23xWUDJCJoNVm1cb7Wy1bE9zUMzelE1gqq%2FR1YuGFHVX2BYAa%2BzqaA8d%2B1GvFDjVIZjWJ96rB0Cl0X3nlwuhMVp7N10%2B0UwGeonio92zddASr7umIhHclMP9EEWSsQpfvJwLKZ8KYhjlLB9FSHgSKfkaUL%2FS51cEnTqr%2Bwk6BIqA7NOPDHWI1tUD1r63txr4IvSeBR2qr4VWtazCkhCcYpi%2FSeuOQAtcJO2aRmt9kGEC96QOVuMfIo6POPKlTuGk4sd8juXH6rmordo5CsWUWqjXcas0l4dpRwo5B6A%2BAg9Zeo86l%2Bj9B1QLqnsxFK%2FOtpTvndzrOP1PhdHOGNqJsWkxfYcbKqCIoYM3yfm8WueRoXjk2mXv4rWc%2Fwnbu3CAp6%2BvbJSon6%2FS3bFfbAY2owv8RrWHNc9rumMUNDZ%2FzQKsQA8MbXrRxFmDY4JV4cq5poc56hHCksqFSmeHgDsVVSEL9fl7Sd4zjHMNXosMMGOqUBlazEXa2ayM%2FKGHfkazYre58xCNi2ZOCmVp9f%2FJWfUAoYuohvdpBOgA1johk58nGdewtVABeqd2bokUBXrvNFEm4zJ53cvQpOMxeJAHAW4htbUMaliik68rvZEGXsFjx4GSOKoY27%2BY3UWiMoOg32nVokk43b6lXIL1HtXyEtQZNLYySbfEO0qWvaIusHvH0ZgGXfO2jhnjHQBObn3AYGJyfixTtq&X-Amz-Signature=2d67118a5e1b30adb8a2c9e3ae017b70c3ffd693b351b2bd2313aa004674d216&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVHLERPR%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIE2gZOG%2BnkN1Q6wvwgnvCcP1PlAgT%2FplZEJL2GWIj1QcAiEA8S5DGSzqWaBmdlwJYR0egjJQiGJ5GtgQQFWzhS4dTZUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDJMut9oPksZxIZEGzCrcA3hvSvQCEIapgmPZU1dexiRt%2BRQc4ib%2BW1DneX5l2qWgQIN4na2FoskcXKdNXB9NI155G68RDflbdQW47k27KLEqI%2Fr29eD6Z9RS14Olzunw8L%2FF9SatWRXXrctp7%2FTN%2FbZ3amBu5wOrw%2BcRUN%2FW8WioiM23xWUDJCJoNVm1cb7Wy1bE9zUMzelE1gqq%2FR1YuGFHVX2BYAa%2BzqaA8d%2B1GvFDjVIZjWJ96rB0Cl0X3nlwuhMVp7N10%2B0UwGeonio92zddASr7umIhHclMP9EEWSsQpfvJwLKZ8KYhjlLB9FSHgSKfkaUL%2FS51cEnTqr%2Bwk6BIqA7NOPDHWI1tUD1r63txr4IvSeBR2qr4VWtazCkhCcYpi%2FSeuOQAtcJO2aRmt9kGEC96QOVuMfIo6POPKlTuGk4sd8juXH6rmordo5CsWUWqjXcas0l4dpRwo5B6A%2BAg9Zeo86l%2Bj9B1QLqnsxFK%2FOtpTvndzrOP1PhdHOGNqJsWkxfYcbKqCIoYM3yfm8WueRoXjk2mXv4rWc%2Fwnbu3CAp6%2BvbJSon6%2FS3bFfbAY2owv8RrWHNc9rumMUNDZ%2FzQKsQA8MbXrRxFmDY4JV4cq5poc56hHCksqFSmeHgDsVVSEL9fl7Sd4zjHMNXosMMGOqUBlazEXa2ayM%2FKGHfkazYre58xCNi2ZOCmVp9f%2FJWfUAoYuohvdpBOgA1johk58nGdewtVABeqd2bokUBXrvNFEm4zJ53cvQpOMxeJAHAW4htbUMaliik68rvZEGXsFjx4GSOKoY27%2BY3UWiMoOg32nVokk43b6lXIL1HtXyEtQZNLYySbfEO0qWvaIusHvH0ZgGXfO2jhnjHQBObn3AYGJyfixTtq&X-Amz-Signature=7608e4a1e3310f317179f3947313ab38427940a2574b0318dc963043936efe59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVHLERPR%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIE2gZOG%2BnkN1Q6wvwgnvCcP1PlAgT%2FplZEJL2GWIj1QcAiEA8S5DGSzqWaBmdlwJYR0egjJQiGJ5GtgQQFWzhS4dTZUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDJMut9oPksZxIZEGzCrcA3hvSvQCEIapgmPZU1dexiRt%2BRQc4ib%2BW1DneX5l2qWgQIN4na2FoskcXKdNXB9NI155G68RDflbdQW47k27KLEqI%2Fr29eD6Z9RS14Olzunw8L%2FF9SatWRXXrctp7%2FTN%2FbZ3amBu5wOrw%2BcRUN%2FW8WioiM23xWUDJCJoNVm1cb7Wy1bE9zUMzelE1gqq%2FR1YuGFHVX2BYAa%2BzqaA8d%2B1GvFDjVIZjWJ96rB0Cl0X3nlwuhMVp7N10%2B0UwGeonio92zddASr7umIhHclMP9EEWSsQpfvJwLKZ8KYhjlLB9FSHgSKfkaUL%2FS51cEnTqr%2Bwk6BIqA7NOPDHWI1tUD1r63txr4IvSeBR2qr4VWtazCkhCcYpi%2FSeuOQAtcJO2aRmt9kGEC96QOVuMfIo6POPKlTuGk4sd8juXH6rmordo5CsWUWqjXcas0l4dpRwo5B6A%2BAg9Zeo86l%2Bj9B1QLqnsxFK%2FOtpTvndzrOP1PhdHOGNqJsWkxfYcbKqCIoYM3yfm8WueRoXjk2mXv4rWc%2Fwnbu3CAp6%2BvbJSon6%2FS3bFfbAY2owv8RrWHNc9rumMUNDZ%2FzQKsQA8MbXrRxFmDY4JV4cq5poc56hHCksqFSmeHgDsVVSEL9fl7Sd4zjHMNXosMMGOqUBlazEXa2ayM%2FKGHfkazYre58xCNi2ZOCmVp9f%2FJWfUAoYuohvdpBOgA1johk58nGdewtVABeqd2bokUBXrvNFEm4zJ53cvQpOMxeJAHAW4htbUMaliik68rvZEGXsFjx4GSOKoY27%2BY3UWiMoOg32nVokk43b6lXIL1HtXyEtQZNLYySbfEO0qWvaIusHvH0ZgGXfO2jhnjHQBObn3AYGJyfixTtq&X-Amz-Signature=826e7ae27d415906856f2f260cc15d0f085557baa109e07898eb35ac1ac3f8c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVHLERPR%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIE2gZOG%2BnkN1Q6wvwgnvCcP1PlAgT%2FplZEJL2GWIj1QcAiEA8S5DGSzqWaBmdlwJYR0egjJQiGJ5GtgQQFWzhS4dTZUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDJMut9oPksZxIZEGzCrcA3hvSvQCEIapgmPZU1dexiRt%2BRQc4ib%2BW1DneX5l2qWgQIN4na2FoskcXKdNXB9NI155G68RDflbdQW47k27KLEqI%2Fr29eD6Z9RS14Olzunw8L%2FF9SatWRXXrctp7%2FTN%2FbZ3amBu5wOrw%2BcRUN%2FW8WioiM23xWUDJCJoNVm1cb7Wy1bE9zUMzelE1gqq%2FR1YuGFHVX2BYAa%2BzqaA8d%2B1GvFDjVIZjWJ96rB0Cl0X3nlwuhMVp7N10%2B0UwGeonio92zddASr7umIhHclMP9EEWSsQpfvJwLKZ8KYhjlLB9FSHgSKfkaUL%2FS51cEnTqr%2Bwk6BIqA7NOPDHWI1tUD1r63txr4IvSeBR2qr4VWtazCkhCcYpi%2FSeuOQAtcJO2aRmt9kGEC96QOVuMfIo6POPKlTuGk4sd8juXH6rmordo5CsWUWqjXcas0l4dpRwo5B6A%2BAg9Zeo86l%2Bj9B1QLqnsxFK%2FOtpTvndzrOP1PhdHOGNqJsWkxfYcbKqCIoYM3yfm8WueRoXjk2mXv4rWc%2Fwnbu3CAp6%2BvbJSon6%2FS3bFfbAY2owv8RrWHNc9rumMUNDZ%2FzQKsQA8MbXrRxFmDY4JV4cq5poc56hHCksqFSmeHgDsVVSEL9fl7Sd4zjHMNXosMMGOqUBlazEXa2ayM%2FKGHfkazYre58xCNi2ZOCmVp9f%2FJWfUAoYuohvdpBOgA1johk58nGdewtVABeqd2bokUBXrvNFEm4zJ53cvQpOMxeJAHAW4htbUMaliik68rvZEGXsFjx4GSOKoY27%2BY3UWiMoOg32nVokk43b6lXIL1HtXyEtQZNLYySbfEO0qWvaIusHvH0ZgGXfO2jhnjHQBObn3AYGJyfixTtq&X-Amz-Signature=3f67febf1d881e6bb4afef6706a9763ba8653bca77d7c217b012f71bd1e8bcf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVHLERPR%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIE2gZOG%2BnkN1Q6wvwgnvCcP1PlAgT%2FplZEJL2GWIj1QcAiEA8S5DGSzqWaBmdlwJYR0egjJQiGJ5GtgQQFWzhS4dTZUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDJMut9oPksZxIZEGzCrcA3hvSvQCEIapgmPZU1dexiRt%2BRQc4ib%2BW1DneX5l2qWgQIN4na2FoskcXKdNXB9NI155G68RDflbdQW47k27KLEqI%2Fr29eD6Z9RS14Olzunw8L%2FF9SatWRXXrctp7%2FTN%2FbZ3amBu5wOrw%2BcRUN%2FW8WioiM23xWUDJCJoNVm1cb7Wy1bE9zUMzelE1gqq%2FR1YuGFHVX2BYAa%2BzqaA8d%2B1GvFDjVIZjWJ96rB0Cl0X3nlwuhMVp7N10%2B0UwGeonio92zddASr7umIhHclMP9EEWSsQpfvJwLKZ8KYhjlLB9FSHgSKfkaUL%2FS51cEnTqr%2Bwk6BIqA7NOPDHWI1tUD1r63txr4IvSeBR2qr4VWtazCkhCcYpi%2FSeuOQAtcJO2aRmt9kGEC96QOVuMfIo6POPKlTuGk4sd8juXH6rmordo5CsWUWqjXcas0l4dpRwo5B6A%2BAg9Zeo86l%2Bj9B1QLqnsxFK%2FOtpTvndzrOP1PhdHOGNqJsWkxfYcbKqCIoYM3yfm8WueRoXjk2mXv4rWc%2Fwnbu3CAp6%2BvbJSon6%2FS3bFfbAY2owv8RrWHNc9rumMUNDZ%2FzQKsQA8MbXrRxFmDY4JV4cq5poc56hHCksqFSmeHgDsVVSEL9fl7Sd4zjHMNXosMMGOqUBlazEXa2ayM%2FKGHfkazYre58xCNi2ZOCmVp9f%2FJWfUAoYuohvdpBOgA1johk58nGdewtVABeqd2bokUBXrvNFEm4zJ53cvQpOMxeJAHAW4htbUMaliik68rvZEGXsFjx4GSOKoY27%2BY3UWiMoOg32nVokk43b6lXIL1HtXyEtQZNLYySbfEO0qWvaIusHvH0ZgGXfO2jhnjHQBObn3AYGJyfixTtq&X-Amz-Signature=e4d225e94e5f0f05a1fdf92cf3748ba2f3a96442a263f43de040036fdeab6863&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
