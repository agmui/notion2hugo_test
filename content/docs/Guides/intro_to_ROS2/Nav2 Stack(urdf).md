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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NRC2VV4%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T042203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDPS%2B3%2FuUXVp3KhjowttBYJCWB33hkPeFOFxbw%2F97zD3wIgFYY2NnoHrRliQ5gp%2BKK%2BEAruOUAvkK3wkY2zo%2B1AmUAq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMexKYYJIaHAarTnwSrcA7xIFezyn%2FfKxlGJps88MRNwLjDAGy14TksqT%2FbLfLDne%2FJCjjCp%2BpwKBb7v20f46Yq72UhzxZrqC2jsiGAoJojIuqXSvqudpH4PC2cWDcBehF55G4QzXvSdghPztbEZdQ7xBh%2B6ek9TK%2Bj2h3tVxZgSw%2BV3Ns3RoGwSWxSp%2FEeEiSOdJhJdb4jt7jcF0OPfUCKRXPayqOPO9r9KjMERSqR44DNRJNk88SJ9VadFimWhgf4GdUWtQBTx19eTTQPbkoYp9gr9YRQfxKbP7I%2FG%2F%2FjSUsJ2XYt8HeQ7TdaNRwTR3D2zhCDOMRiwId70g9%2FxjDNFZ12Dupk7FD7lokCkzSFDp106V24WsqBbrbTuCQpa71V0Hn8RBN4A3IOaQbohMZmSWhFUc5dHHFHFxwe%2FYMYD4Auq3j2prhsCiFYw8F9RJaW4gT9SO7yUaXxGF7JHKl8lRufkH5HZTLspUyHZTZfg%2Boi33Y1zM1xESeweFY%2FDzDJ36OSqOzzn6nn8jRuPdUGsHmfOtKj9iBH5Y5PnV9ituY42nx0YN4esgkCDn3qpZIk8rVraAk9WPUzWZZVhWet%2FEOgalJoypYOxV72DWfXx0r2rW4VUA6pClHlMrkdIaVr%2BST0Uy%2BPPIumkMKb%2BvcIGOqUB5NY4um%2FMtt4U%2FoAjLE%2BrmyWk3IYO%2F2uEppfTgHUqawOA4YkSgZBUB4FdHKLAH9fbVxif2ABe62zuqFgaG47QjQCDjgSU3DDfcTQ1iRbJtThLofL66gd6zbT1XBbVhw4YUhL5c2ckwijeeBpLEdp6h0BpeRqZBz7vU6Gj5RtOJ4U5tLO1UJdEZaIdqERiy3gO3FN7iqGK%2FeOZAqumTL4dI1tNE%2B6M&X-Amz-Signature=dc250ef9281fdcf75676bb05818535129352adc9471bbeeaecd1926a9fddac02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NRC2VV4%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T042203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDPS%2B3%2FuUXVp3KhjowttBYJCWB33hkPeFOFxbw%2F97zD3wIgFYY2NnoHrRliQ5gp%2BKK%2BEAruOUAvkK3wkY2zo%2B1AmUAq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMexKYYJIaHAarTnwSrcA7xIFezyn%2FfKxlGJps88MRNwLjDAGy14TksqT%2FbLfLDne%2FJCjjCp%2BpwKBb7v20f46Yq72UhzxZrqC2jsiGAoJojIuqXSvqudpH4PC2cWDcBehF55G4QzXvSdghPztbEZdQ7xBh%2B6ek9TK%2Bj2h3tVxZgSw%2BV3Ns3RoGwSWxSp%2FEeEiSOdJhJdb4jt7jcF0OPfUCKRXPayqOPO9r9KjMERSqR44DNRJNk88SJ9VadFimWhgf4GdUWtQBTx19eTTQPbkoYp9gr9YRQfxKbP7I%2FG%2F%2FjSUsJ2XYt8HeQ7TdaNRwTR3D2zhCDOMRiwId70g9%2FxjDNFZ12Dupk7FD7lokCkzSFDp106V24WsqBbrbTuCQpa71V0Hn8RBN4A3IOaQbohMZmSWhFUc5dHHFHFxwe%2FYMYD4Auq3j2prhsCiFYw8F9RJaW4gT9SO7yUaXxGF7JHKl8lRufkH5HZTLspUyHZTZfg%2Boi33Y1zM1xESeweFY%2FDzDJ36OSqOzzn6nn8jRuPdUGsHmfOtKj9iBH5Y5PnV9ituY42nx0YN4esgkCDn3qpZIk8rVraAk9WPUzWZZVhWet%2FEOgalJoypYOxV72DWfXx0r2rW4VUA6pClHlMrkdIaVr%2BST0Uy%2BPPIumkMKb%2BvcIGOqUB5NY4um%2FMtt4U%2FoAjLE%2BrmyWk3IYO%2F2uEppfTgHUqawOA4YkSgZBUB4FdHKLAH9fbVxif2ABe62zuqFgaG47QjQCDjgSU3DDfcTQ1iRbJtThLofL66gd6zbT1XBbVhw4YUhL5c2ckwijeeBpLEdp6h0BpeRqZBz7vU6Gj5RtOJ4U5tLO1UJdEZaIdqERiy3gO3FN7iqGK%2FeOZAqumTL4dI1tNE%2B6M&X-Amz-Signature=95f2364f7f38061d00f07f8a6bdf10548686624511cc3e1a98c33bad9f04d2ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NRC2VV4%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T042203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDPS%2B3%2FuUXVp3KhjowttBYJCWB33hkPeFOFxbw%2F97zD3wIgFYY2NnoHrRliQ5gp%2BKK%2BEAruOUAvkK3wkY2zo%2B1AmUAq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMexKYYJIaHAarTnwSrcA7xIFezyn%2FfKxlGJps88MRNwLjDAGy14TksqT%2FbLfLDne%2FJCjjCp%2BpwKBb7v20f46Yq72UhzxZrqC2jsiGAoJojIuqXSvqudpH4PC2cWDcBehF55G4QzXvSdghPztbEZdQ7xBh%2B6ek9TK%2Bj2h3tVxZgSw%2BV3Ns3RoGwSWxSp%2FEeEiSOdJhJdb4jt7jcF0OPfUCKRXPayqOPO9r9KjMERSqR44DNRJNk88SJ9VadFimWhgf4GdUWtQBTx19eTTQPbkoYp9gr9YRQfxKbP7I%2FG%2F%2FjSUsJ2XYt8HeQ7TdaNRwTR3D2zhCDOMRiwId70g9%2FxjDNFZ12Dupk7FD7lokCkzSFDp106V24WsqBbrbTuCQpa71V0Hn8RBN4A3IOaQbohMZmSWhFUc5dHHFHFxwe%2FYMYD4Auq3j2prhsCiFYw8F9RJaW4gT9SO7yUaXxGF7JHKl8lRufkH5HZTLspUyHZTZfg%2Boi33Y1zM1xESeweFY%2FDzDJ36OSqOzzn6nn8jRuPdUGsHmfOtKj9iBH5Y5PnV9ituY42nx0YN4esgkCDn3qpZIk8rVraAk9WPUzWZZVhWet%2FEOgalJoypYOxV72DWfXx0r2rW4VUA6pClHlMrkdIaVr%2BST0Uy%2BPPIumkMKb%2BvcIGOqUB5NY4um%2FMtt4U%2FoAjLE%2BrmyWk3IYO%2F2uEppfTgHUqawOA4YkSgZBUB4FdHKLAH9fbVxif2ABe62zuqFgaG47QjQCDjgSU3DDfcTQ1iRbJtThLofL66gd6zbT1XBbVhw4YUhL5c2ckwijeeBpLEdp6h0BpeRqZBz7vU6Gj5RtOJ4U5tLO1UJdEZaIdqERiy3gO3FN7iqGK%2FeOZAqumTL4dI1tNE%2B6M&X-Amz-Signature=4651b31acce61e04d0ec234c65629a59bea62a2ce67a5e328ea12ccb4098d878&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NRC2VV4%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T042203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDPS%2B3%2FuUXVp3KhjowttBYJCWB33hkPeFOFxbw%2F97zD3wIgFYY2NnoHrRliQ5gp%2BKK%2BEAruOUAvkK3wkY2zo%2B1AmUAq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMexKYYJIaHAarTnwSrcA7xIFezyn%2FfKxlGJps88MRNwLjDAGy14TksqT%2FbLfLDne%2FJCjjCp%2BpwKBb7v20f46Yq72UhzxZrqC2jsiGAoJojIuqXSvqudpH4PC2cWDcBehF55G4QzXvSdghPztbEZdQ7xBh%2B6ek9TK%2Bj2h3tVxZgSw%2BV3Ns3RoGwSWxSp%2FEeEiSOdJhJdb4jt7jcF0OPfUCKRXPayqOPO9r9KjMERSqR44DNRJNk88SJ9VadFimWhgf4GdUWtQBTx19eTTQPbkoYp9gr9YRQfxKbP7I%2FG%2F%2FjSUsJ2XYt8HeQ7TdaNRwTR3D2zhCDOMRiwId70g9%2FxjDNFZ12Dupk7FD7lokCkzSFDp106V24WsqBbrbTuCQpa71V0Hn8RBN4A3IOaQbohMZmSWhFUc5dHHFHFxwe%2FYMYD4Auq3j2prhsCiFYw8F9RJaW4gT9SO7yUaXxGF7JHKl8lRufkH5HZTLspUyHZTZfg%2Boi33Y1zM1xESeweFY%2FDzDJ36OSqOzzn6nn8jRuPdUGsHmfOtKj9iBH5Y5PnV9ituY42nx0YN4esgkCDn3qpZIk8rVraAk9WPUzWZZVhWet%2FEOgalJoypYOxV72DWfXx0r2rW4VUA6pClHlMrkdIaVr%2BST0Uy%2BPPIumkMKb%2BvcIGOqUB5NY4um%2FMtt4U%2FoAjLE%2BrmyWk3IYO%2F2uEppfTgHUqawOA4YkSgZBUB4FdHKLAH9fbVxif2ABe62zuqFgaG47QjQCDjgSU3DDfcTQ1iRbJtThLofL66gd6zbT1XBbVhw4YUhL5c2ckwijeeBpLEdp6h0BpeRqZBz7vU6Gj5RtOJ4U5tLO1UJdEZaIdqERiy3gO3FN7iqGK%2FeOZAqumTL4dI1tNE%2B6M&X-Amz-Signature=e50570facde56d393db0ffac112d66a7b2cf382acc408873ca04081b8f852f4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NRC2VV4%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T042203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDPS%2B3%2FuUXVp3KhjowttBYJCWB33hkPeFOFxbw%2F97zD3wIgFYY2NnoHrRliQ5gp%2BKK%2BEAruOUAvkK3wkY2zo%2B1AmUAq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMexKYYJIaHAarTnwSrcA7xIFezyn%2FfKxlGJps88MRNwLjDAGy14TksqT%2FbLfLDne%2FJCjjCp%2BpwKBb7v20f46Yq72UhzxZrqC2jsiGAoJojIuqXSvqudpH4PC2cWDcBehF55G4QzXvSdghPztbEZdQ7xBh%2B6ek9TK%2Bj2h3tVxZgSw%2BV3Ns3RoGwSWxSp%2FEeEiSOdJhJdb4jt7jcF0OPfUCKRXPayqOPO9r9KjMERSqR44DNRJNk88SJ9VadFimWhgf4GdUWtQBTx19eTTQPbkoYp9gr9YRQfxKbP7I%2FG%2F%2FjSUsJ2XYt8HeQ7TdaNRwTR3D2zhCDOMRiwId70g9%2FxjDNFZ12Dupk7FD7lokCkzSFDp106V24WsqBbrbTuCQpa71V0Hn8RBN4A3IOaQbohMZmSWhFUc5dHHFHFxwe%2FYMYD4Auq3j2prhsCiFYw8F9RJaW4gT9SO7yUaXxGF7JHKl8lRufkH5HZTLspUyHZTZfg%2Boi33Y1zM1xESeweFY%2FDzDJ36OSqOzzn6nn8jRuPdUGsHmfOtKj9iBH5Y5PnV9ituY42nx0YN4esgkCDn3qpZIk8rVraAk9WPUzWZZVhWet%2FEOgalJoypYOxV72DWfXx0r2rW4VUA6pClHlMrkdIaVr%2BST0Uy%2BPPIumkMKb%2BvcIGOqUB5NY4um%2FMtt4U%2FoAjLE%2BrmyWk3IYO%2F2uEppfTgHUqawOA4YkSgZBUB4FdHKLAH9fbVxif2ABe62zuqFgaG47QjQCDjgSU3DDfcTQ1iRbJtThLofL66gd6zbT1XBbVhw4YUhL5c2ckwijeeBpLEdp6h0BpeRqZBz7vU6Gj5RtOJ4U5tLO1UJdEZaIdqERiy3gO3FN7iqGK%2FeOZAqumTL4dI1tNE%2B6M&X-Amz-Signature=3d61314f22559a62988babc6646cc45125bea0bfc449173751bcc3652c7f636a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NRC2VV4%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T042203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDPS%2B3%2FuUXVp3KhjowttBYJCWB33hkPeFOFxbw%2F97zD3wIgFYY2NnoHrRliQ5gp%2BKK%2BEAruOUAvkK3wkY2zo%2B1AmUAq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDMexKYYJIaHAarTnwSrcA7xIFezyn%2FfKxlGJps88MRNwLjDAGy14TksqT%2FbLfLDne%2FJCjjCp%2BpwKBb7v20f46Yq72UhzxZrqC2jsiGAoJojIuqXSvqudpH4PC2cWDcBehF55G4QzXvSdghPztbEZdQ7xBh%2B6ek9TK%2Bj2h3tVxZgSw%2BV3Ns3RoGwSWxSp%2FEeEiSOdJhJdb4jt7jcF0OPfUCKRXPayqOPO9r9KjMERSqR44DNRJNk88SJ9VadFimWhgf4GdUWtQBTx19eTTQPbkoYp9gr9YRQfxKbP7I%2FG%2F%2FjSUsJ2XYt8HeQ7TdaNRwTR3D2zhCDOMRiwId70g9%2FxjDNFZ12Dupk7FD7lokCkzSFDp106V24WsqBbrbTuCQpa71V0Hn8RBN4A3IOaQbohMZmSWhFUc5dHHFHFxwe%2FYMYD4Auq3j2prhsCiFYw8F9RJaW4gT9SO7yUaXxGF7JHKl8lRufkH5HZTLspUyHZTZfg%2Boi33Y1zM1xESeweFY%2FDzDJ36OSqOzzn6nn8jRuPdUGsHmfOtKj9iBH5Y5PnV9ituY42nx0YN4esgkCDn3qpZIk8rVraAk9WPUzWZZVhWet%2FEOgalJoypYOxV72DWfXx0r2rW4VUA6pClHlMrkdIaVr%2BST0Uy%2BPPIumkMKb%2BvcIGOqUB5NY4um%2FMtt4U%2FoAjLE%2BrmyWk3IYO%2F2uEppfTgHUqawOA4YkSgZBUB4FdHKLAH9fbVxif2ABe62zuqFgaG47QjQCDjgSU3DDfcTQ1iRbJtThLofL66gd6zbT1XBbVhw4YUhL5c2ckwijeeBpLEdp6h0BpeRqZBz7vU6Gj5RtOJ4U5tLO1UJdEZaIdqERiy3gO3FN7iqGK%2FeOZAqumTL4dI1tNE%2B6M&X-Amz-Signature=212851ce1315c2b5693e3b0c9ef1e9d6432214875061bb968e5159c8827d33c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
