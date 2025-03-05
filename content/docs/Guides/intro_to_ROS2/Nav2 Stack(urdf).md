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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6Y2OXSC%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMwr8aPMlNqyCURC87n3HRpBDlOzXpeWYL3fQIvutZEgIhALqYOoRQNasJrLalf2dV6HgTIbsDWPd5gESJ%2Bqt1qAh2Kv8DCBoQABoMNjM3NDIzMTgzODA1IgxvA5gpf%2BtGnCgUea8q3AP5AlNmSZV1V67opZ4UldWMSoGqpCRIEOtWgHzsUpbeIp6DsTdKrnqu3p6E0o07b5EwCOwUZ%2Be6HWc246F7BW5F6btj0mffUSI6Bh3uFfwYrTIdf62z3F%2BLbZnf1RfB1GOhNBm%2FSSMk%2BKgxw1sEgvUrcwPi%2BJb26tzXpeveugsKmL18FCNVNyHDuflt9J2zgNlaTyFfosAnao0jelK5Nq49cyjnICJaGxFMHxkyrcWs4qzPKtG3WSMsaQgPpc7bsUqnPTV0E%2FexOj2NaZAOMLdF1GT1Xee6EdYPKePUDMXWhNpJnLH5tuhXAjijHZSfZDsxhWsVA%2FAoLa%2BkT0tpthzWAGscMaVywmrHjt8gwtHGjLqcPmto8ICLmVi%2Bs1quCSDo65EkRDoyit%2FzUBU9fo7FTs%2BOWjSvUNXzuYmJqcC6KL1YGFYNivSlA2Ztz%2FQjO%2BYlOshUkICyoVHqlDAwOHDRYltoM8P44oI4%2F0atrjgATJQGOX3pmEv7XbRixuJOwbr%2BE%2FnNCtWO8b6%2ByzcLLEDXJc9%2FOGEl8Y3e%2FwarKjAG9X0sOQ5OX%2BX5zDCc%2Frzh1s9Z86%2FE%2BbVg9Bl0ZcoDq9OBDEq9x9QU8kQFtZ5rCHrmEnTTGCYF1%2Br3Ns9kgjDJhKK%2BBjqkAfiqiXZh4Fgg0zW42m%2F%2FT5vTKgo96gdhV6fEe0QRHMFM5f6yGS%2BmAHdB8SXB4nc0xtIC41KKutQWS5qG98KjLgl5EwpZE0XKvar2bBDjnJ%2BrGs23EmbF2p57qKNUU41fkV6gAHACe%2BEVMkRHkaP%2FM2L1J9FL5OPxj4XnLX29RQlJv6bI%2BcMari3FcXNi8CXnpo6Sga0f5Nh%2FNcqz%2BOAQzSUj3LpE&X-Amz-Signature=cc3c680790fd20d163fac0de9cf9801d8e3645cdc7375eccfbda27cdb904ebdd&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6Y2OXSC%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMwr8aPMlNqyCURC87n3HRpBDlOzXpeWYL3fQIvutZEgIhALqYOoRQNasJrLalf2dV6HgTIbsDWPd5gESJ%2Bqt1qAh2Kv8DCBoQABoMNjM3NDIzMTgzODA1IgxvA5gpf%2BtGnCgUea8q3AP5AlNmSZV1V67opZ4UldWMSoGqpCRIEOtWgHzsUpbeIp6DsTdKrnqu3p6E0o07b5EwCOwUZ%2Be6HWc246F7BW5F6btj0mffUSI6Bh3uFfwYrTIdf62z3F%2BLbZnf1RfB1GOhNBm%2FSSMk%2BKgxw1sEgvUrcwPi%2BJb26tzXpeveugsKmL18FCNVNyHDuflt9J2zgNlaTyFfosAnao0jelK5Nq49cyjnICJaGxFMHxkyrcWs4qzPKtG3WSMsaQgPpc7bsUqnPTV0E%2FexOj2NaZAOMLdF1GT1Xee6EdYPKePUDMXWhNpJnLH5tuhXAjijHZSfZDsxhWsVA%2FAoLa%2BkT0tpthzWAGscMaVywmrHjt8gwtHGjLqcPmto8ICLmVi%2Bs1quCSDo65EkRDoyit%2FzUBU9fo7FTs%2BOWjSvUNXzuYmJqcC6KL1YGFYNivSlA2Ztz%2FQjO%2BYlOshUkICyoVHqlDAwOHDRYltoM8P44oI4%2F0atrjgATJQGOX3pmEv7XbRixuJOwbr%2BE%2FnNCtWO8b6%2ByzcLLEDXJc9%2FOGEl8Y3e%2FwarKjAG9X0sOQ5OX%2BX5zDCc%2Frzh1s9Z86%2FE%2BbVg9Bl0ZcoDq9OBDEq9x9QU8kQFtZ5rCHrmEnTTGCYF1%2Br3Ns9kgjDJhKK%2BBjqkAfiqiXZh4Fgg0zW42m%2F%2FT5vTKgo96gdhV6fEe0QRHMFM5f6yGS%2BmAHdB8SXB4nc0xtIC41KKutQWS5qG98KjLgl5EwpZE0XKvar2bBDjnJ%2BrGs23EmbF2p57qKNUU41fkV6gAHACe%2BEVMkRHkaP%2FM2L1J9FL5OPxj4XnLX29RQlJv6bI%2BcMari3FcXNi8CXnpo6Sga0f5Nh%2FNcqz%2BOAQzSUj3LpE&X-Amz-Signature=cb70e77080fca46166dc817370f18192aac2089c287ef0267c87738dc8d9f8c3&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6Y2OXSC%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMwr8aPMlNqyCURC87n3HRpBDlOzXpeWYL3fQIvutZEgIhALqYOoRQNasJrLalf2dV6HgTIbsDWPd5gESJ%2Bqt1qAh2Kv8DCBoQABoMNjM3NDIzMTgzODA1IgxvA5gpf%2BtGnCgUea8q3AP5AlNmSZV1V67opZ4UldWMSoGqpCRIEOtWgHzsUpbeIp6DsTdKrnqu3p6E0o07b5EwCOwUZ%2Be6HWc246F7BW5F6btj0mffUSI6Bh3uFfwYrTIdf62z3F%2BLbZnf1RfB1GOhNBm%2FSSMk%2BKgxw1sEgvUrcwPi%2BJb26tzXpeveugsKmL18FCNVNyHDuflt9J2zgNlaTyFfosAnao0jelK5Nq49cyjnICJaGxFMHxkyrcWs4qzPKtG3WSMsaQgPpc7bsUqnPTV0E%2FexOj2NaZAOMLdF1GT1Xee6EdYPKePUDMXWhNpJnLH5tuhXAjijHZSfZDsxhWsVA%2FAoLa%2BkT0tpthzWAGscMaVywmrHjt8gwtHGjLqcPmto8ICLmVi%2Bs1quCSDo65EkRDoyit%2FzUBU9fo7FTs%2BOWjSvUNXzuYmJqcC6KL1YGFYNivSlA2Ztz%2FQjO%2BYlOshUkICyoVHqlDAwOHDRYltoM8P44oI4%2F0atrjgATJQGOX3pmEv7XbRixuJOwbr%2BE%2FnNCtWO8b6%2ByzcLLEDXJc9%2FOGEl8Y3e%2FwarKjAG9X0sOQ5OX%2BX5zDCc%2Frzh1s9Z86%2FE%2BbVg9Bl0ZcoDq9OBDEq9x9QU8kQFtZ5rCHrmEnTTGCYF1%2Br3Ns9kgjDJhKK%2BBjqkAfiqiXZh4Fgg0zW42m%2F%2FT5vTKgo96gdhV6fEe0QRHMFM5f6yGS%2BmAHdB8SXB4nc0xtIC41KKutQWS5qG98KjLgl5EwpZE0XKvar2bBDjnJ%2BrGs23EmbF2p57qKNUU41fkV6gAHACe%2BEVMkRHkaP%2FM2L1J9FL5OPxj4XnLX29RQlJv6bI%2BcMari3FcXNi8CXnpo6Sga0f5Nh%2FNcqz%2BOAQzSUj3LpE&X-Amz-Signature=9f1e6dd94ae158ca296f1650cb2f47e4c11c3abcaecf435319fc4cce74b1e3cb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6Y2OXSC%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMwr8aPMlNqyCURC87n3HRpBDlOzXpeWYL3fQIvutZEgIhALqYOoRQNasJrLalf2dV6HgTIbsDWPd5gESJ%2Bqt1qAh2Kv8DCBoQABoMNjM3NDIzMTgzODA1IgxvA5gpf%2BtGnCgUea8q3AP5AlNmSZV1V67opZ4UldWMSoGqpCRIEOtWgHzsUpbeIp6DsTdKrnqu3p6E0o07b5EwCOwUZ%2Be6HWc246F7BW5F6btj0mffUSI6Bh3uFfwYrTIdf62z3F%2BLbZnf1RfB1GOhNBm%2FSSMk%2BKgxw1sEgvUrcwPi%2BJb26tzXpeveugsKmL18FCNVNyHDuflt9J2zgNlaTyFfosAnao0jelK5Nq49cyjnICJaGxFMHxkyrcWs4qzPKtG3WSMsaQgPpc7bsUqnPTV0E%2FexOj2NaZAOMLdF1GT1Xee6EdYPKePUDMXWhNpJnLH5tuhXAjijHZSfZDsxhWsVA%2FAoLa%2BkT0tpthzWAGscMaVywmrHjt8gwtHGjLqcPmto8ICLmVi%2Bs1quCSDo65EkRDoyit%2FzUBU9fo7FTs%2BOWjSvUNXzuYmJqcC6KL1YGFYNivSlA2Ztz%2FQjO%2BYlOshUkICyoVHqlDAwOHDRYltoM8P44oI4%2F0atrjgATJQGOX3pmEv7XbRixuJOwbr%2BE%2FnNCtWO8b6%2ByzcLLEDXJc9%2FOGEl8Y3e%2FwarKjAG9X0sOQ5OX%2BX5zDCc%2Frzh1s9Z86%2FE%2BbVg9Bl0ZcoDq9OBDEq9x9QU8kQFtZ5rCHrmEnTTGCYF1%2Br3Ns9kgjDJhKK%2BBjqkAfiqiXZh4Fgg0zW42m%2F%2FT5vTKgo96gdhV6fEe0QRHMFM5f6yGS%2BmAHdB8SXB4nc0xtIC41KKutQWS5qG98KjLgl5EwpZE0XKvar2bBDjnJ%2BrGs23EmbF2p57qKNUU41fkV6gAHACe%2BEVMkRHkaP%2FM2L1J9FL5OPxj4XnLX29RQlJv6bI%2BcMari3FcXNi8CXnpo6Sga0f5Nh%2FNcqz%2BOAQzSUj3LpE&X-Amz-Signature=fbe05e6cc953f4a71ada782ff6a8c0d857bfb755ac2bdba8e1fa05a4d589246e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6Y2OXSC%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMwr8aPMlNqyCURC87n3HRpBDlOzXpeWYL3fQIvutZEgIhALqYOoRQNasJrLalf2dV6HgTIbsDWPd5gESJ%2Bqt1qAh2Kv8DCBoQABoMNjM3NDIzMTgzODA1IgxvA5gpf%2BtGnCgUea8q3AP5AlNmSZV1V67opZ4UldWMSoGqpCRIEOtWgHzsUpbeIp6DsTdKrnqu3p6E0o07b5EwCOwUZ%2Be6HWc246F7BW5F6btj0mffUSI6Bh3uFfwYrTIdf62z3F%2BLbZnf1RfB1GOhNBm%2FSSMk%2BKgxw1sEgvUrcwPi%2BJb26tzXpeveugsKmL18FCNVNyHDuflt9J2zgNlaTyFfosAnao0jelK5Nq49cyjnICJaGxFMHxkyrcWs4qzPKtG3WSMsaQgPpc7bsUqnPTV0E%2FexOj2NaZAOMLdF1GT1Xee6EdYPKePUDMXWhNpJnLH5tuhXAjijHZSfZDsxhWsVA%2FAoLa%2BkT0tpthzWAGscMaVywmrHjt8gwtHGjLqcPmto8ICLmVi%2Bs1quCSDo65EkRDoyit%2FzUBU9fo7FTs%2BOWjSvUNXzuYmJqcC6KL1YGFYNivSlA2Ztz%2FQjO%2BYlOshUkICyoVHqlDAwOHDRYltoM8P44oI4%2F0atrjgATJQGOX3pmEv7XbRixuJOwbr%2BE%2FnNCtWO8b6%2ByzcLLEDXJc9%2FOGEl8Y3e%2FwarKjAG9X0sOQ5OX%2BX5zDCc%2Frzh1s9Z86%2FE%2BbVg9Bl0ZcoDq9OBDEq9x9QU8kQFtZ5rCHrmEnTTGCYF1%2Br3Ns9kgjDJhKK%2BBjqkAfiqiXZh4Fgg0zW42m%2F%2FT5vTKgo96gdhV6fEe0QRHMFM5f6yGS%2BmAHdB8SXB4nc0xtIC41KKutQWS5qG98KjLgl5EwpZE0XKvar2bBDjnJ%2BrGs23EmbF2p57qKNUU41fkV6gAHACe%2BEVMkRHkaP%2FM2L1J9FL5OPxj4XnLX29RQlJv6bI%2BcMari3FcXNi8CXnpo6Sga0f5Nh%2FNcqz%2BOAQzSUj3LpE&X-Amz-Signature=56ebcd8b0056d826e9eeb7969d185e05450d3eaa7394899952363dc4b959a0e0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6Y2OXSC%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T170757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMwr8aPMlNqyCURC87n3HRpBDlOzXpeWYL3fQIvutZEgIhALqYOoRQNasJrLalf2dV6HgTIbsDWPd5gESJ%2Bqt1qAh2Kv8DCBoQABoMNjM3NDIzMTgzODA1IgxvA5gpf%2BtGnCgUea8q3AP5AlNmSZV1V67opZ4UldWMSoGqpCRIEOtWgHzsUpbeIp6DsTdKrnqu3p6E0o07b5EwCOwUZ%2Be6HWc246F7BW5F6btj0mffUSI6Bh3uFfwYrTIdf62z3F%2BLbZnf1RfB1GOhNBm%2FSSMk%2BKgxw1sEgvUrcwPi%2BJb26tzXpeveugsKmL18FCNVNyHDuflt9J2zgNlaTyFfosAnao0jelK5Nq49cyjnICJaGxFMHxkyrcWs4qzPKtG3WSMsaQgPpc7bsUqnPTV0E%2FexOj2NaZAOMLdF1GT1Xee6EdYPKePUDMXWhNpJnLH5tuhXAjijHZSfZDsxhWsVA%2FAoLa%2BkT0tpthzWAGscMaVywmrHjt8gwtHGjLqcPmto8ICLmVi%2Bs1quCSDo65EkRDoyit%2FzUBU9fo7FTs%2BOWjSvUNXzuYmJqcC6KL1YGFYNivSlA2Ztz%2FQjO%2BYlOshUkICyoVHqlDAwOHDRYltoM8P44oI4%2F0atrjgATJQGOX3pmEv7XbRixuJOwbr%2BE%2FnNCtWO8b6%2ByzcLLEDXJc9%2FOGEl8Y3e%2FwarKjAG9X0sOQ5OX%2BX5zDCc%2Frzh1s9Z86%2FE%2BbVg9Bl0ZcoDq9OBDEq9x9QU8kQFtZ5rCHrmEnTTGCYF1%2Br3Ns9kgjDJhKK%2BBjqkAfiqiXZh4Fgg0zW42m%2F%2FT5vTKgo96gdhV6fEe0QRHMFM5f6yGS%2BmAHdB8SXB4nc0xtIC41KKutQWS5qG98KjLgl5EwpZE0XKvar2bBDjnJ%2BrGs23EmbF2p57qKNUU41fkV6gAHACe%2BEVMkRHkaP%2FM2L1J9FL5OPxj4XnLX29RQlJv6bI%2BcMari3FcXNi8CXnpo6Sga0f5Nh%2FNcqz%2BOAQzSUj3LpE&X-Amz-Signature=b32aca84e497f58ec863b84d0e982469c1debe10fe639c3d992f56f79eb315ef&X-Amz-SignedHeaders=host&x-id=GetObject)
