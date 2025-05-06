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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5JTE5K6%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T081258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyIp%2BrvDr5hy2sLdv6EZkG171dxqaDw5Roou2uhLOpoAiBAas9Axb55wEMC86KbIEIl%2B4aDrS15iIAreOd%2BAk14eyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMnM9rgKewuQpoRpjjKtwDdHMAKXF17tiqqjU2vKjvlQGK%2BrcAk5E2NMMCcOgiRRJAodKdhqfylLEY6g1Mm7%2FXRG3EKrA3tFCYE6%2Fe53NKx96XFFBpyCyMeJaQWvjPfaBr747bKa72MEqAstNpZ2ssCkx5WtRK1e7X3X88gJV6FgT7aUQ0aNApIbwtXZKWXA6KA3Ulv2RMcZlH1QCCXeFFPbamA%2FM%2FQlHAM%2BoR9xS79w8q0F4O7i%2FAHF2wvmxU1ULWjHxu5UMvIlQb0NO3lxn9v%2BppyIA2%2BHgDa86X17yIMwCCBgxe272jDt9Q%2BwhZuAeMQy6qwvhZHCKBkk1hlry3c9dZzMnTe2qRR2nydy1KxjPki%2BhdGnLsDHRuFcLkTtFB7gep%2B6JVQdinsI1vbKjxPnZuakf9jzXlt7Ph%2FsQeMA3jBc76FmpP7uRyqtFW%2Bcbayxl6n3gCEx51gcpxTGrq1DX2PddYKNlHiDrSKyJzBAWoz9FoOAsskYpOxoG9LHN6wktMG%2Bz9igdvzI4bDxD%2BebbyJ2ivd2meJrMirPJpaNv%2B5weiRIUu6eAXGt1raffFs%2B%2FX36ZogTq6Z6mbr%2FN%2FCP55GkdyheaL6hNkAKe1cY8Y1kCIo8Dzc8p0e7uhxLe4Rbl4zQy7w5T8X9MwxvDmwAY6pgFt8XmtZidErdpCqLhNJwSE%2BjOkkoe32nzGb5hdUUZkF9v5gDGt1uqUGRyAS%2FtR25IBfICIjv5EUUrVMT3Ldzw9kKBdSEF4BXOBzItiG6JgmkKuLXexcMno92gfU80qJmq08V6FbUHkq1a5QxVB%2F036L%2BSdx%2BetZ4pFdSl55z6tE9EfZFE3tNYhkPp1aKIBfKPpLSL6ItB9oJT6PwD2vhHW7LQWEBmR&X-Amz-Signature=d738087f138dcc22e3bd2571c59779ee9a46207ba29de877e8be426ec5ac4c96&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5JTE5K6%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T081258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyIp%2BrvDr5hy2sLdv6EZkG171dxqaDw5Roou2uhLOpoAiBAas9Axb55wEMC86KbIEIl%2B4aDrS15iIAreOd%2BAk14eyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMnM9rgKewuQpoRpjjKtwDdHMAKXF17tiqqjU2vKjvlQGK%2BrcAk5E2NMMCcOgiRRJAodKdhqfylLEY6g1Mm7%2FXRG3EKrA3tFCYE6%2Fe53NKx96XFFBpyCyMeJaQWvjPfaBr747bKa72MEqAstNpZ2ssCkx5WtRK1e7X3X88gJV6FgT7aUQ0aNApIbwtXZKWXA6KA3Ulv2RMcZlH1QCCXeFFPbamA%2FM%2FQlHAM%2BoR9xS79w8q0F4O7i%2FAHF2wvmxU1ULWjHxu5UMvIlQb0NO3lxn9v%2BppyIA2%2BHgDa86X17yIMwCCBgxe272jDt9Q%2BwhZuAeMQy6qwvhZHCKBkk1hlry3c9dZzMnTe2qRR2nydy1KxjPki%2BhdGnLsDHRuFcLkTtFB7gep%2B6JVQdinsI1vbKjxPnZuakf9jzXlt7Ph%2FsQeMA3jBc76FmpP7uRyqtFW%2Bcbayxl6n3gCEx51gcpxTGrq1DX2PddYKNlHiDrSKyJzBAWoz9FoOAsskYpOxoG9LHN6wktMG%2Bz9igdvzI4bDxD%2BebbyJ2ivd2meJrMirPJpaNv%2B5weiRIUu6eAXGt1raffFs%2B%2FX36ZogTq6Z6mbr%2FN%2FCP55GkdyheaL6hNkAKe1cY8Y1kCIo8Dzc8p0e7uhxLe4Rbl4zQy7w5T8X9MwxvDmwAY6pgFt8XmtZidErdpCqLhNJwSE%2BjOkkoe32nzGb5hdUUZkF9v5gDGt1uqUGRyAS%2FtR25IBfICIjv5EUUrVMT3Ldzw9kKBdSEF4BXOBzItiG6JgmkKuLXexcMno92gfU80qJmq08V6FbUHkq1a5QxVB%2F036L%2BSdx%2BetZ4pFdSl55z6tE9EfZFE3tNYhkPp1aKIBfKPpLSL6ItB9oJT6PwD2vhHW7LQWEBmR&X-Amz-Signature=685599293fcab6a64d7cc628bf924346f28431d1d373a1afee2435e254a73747&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5JTE5K6%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T081258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyIp%2BrvDr5hy2sLdv6EZkG171dxqaDw5Roou2uhLOpoAiBAas9Axb55wEMC86KbIEIl%2B4aDrS15iIAreOd%2BAk14eyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMnM9rgKewuQpoRpjjKtwDdHMAKXF17tiqqjU2vKjvlQGK%2BrcAk5E2NMMCcOgiRRJAodKdhqfylLEY6g1Mm7%2FXRG3EKrA3tFCYE6%2Fe53NKx96XFFBpyCyMeJaQWvjPfaBr747bKa72MEqAstNpZ2ssCkx5WtRK1e7X3X88gJV6FgT7aUQ0aNApIbwtXZKWXA6KA3Ulv2RMcZlH1QCCXeFFPbamA%2FM%2FQlHAM%2BoR9xS79w8q0F4O7i%2FAHF2wvmxU1ULWjHxu5UMvIlQb0NO3lxn9v%2BppyIA2%2BHgDa86X17yIMwCCBgxe272jDt9Q%2BwhZuAeMQy6qwvhZHCKBkk1hlry3c9dZzMnTe2qRR2nydy1KxjPki%2BhdGnLsDHRuFcLkTtFB7gep%2B6JVQdinsI1vbKjxPnZuakf9jzXlt7Ph%2FsQeMA3jBc76FmpP7uRyqtFW%2Bcbayxl6n3gCEx51gcpxTGrq1DX2PddYKNlHiDrSKyJzBAWoz9FoOAsskYpOxoG9LHN6wktMG%2Bz9igdvzI4bDxD%2BebbyJ2ivd2meJrMirPJpaNv%2B5weiRIUu6eAXGt1raffFs%2B%2FX36ZogTq6Z6mbr%2FN%2FCP55GkdyheaL6hNkAKe1cY8Y1kCIo8Dzc8p0e7uhxLe4Rbl4zQy7w5T8X9MwxvDmwAY6pgFt8XmtZidErdpCqLhNJwSE%2BjOkkoe32nzGb5hdUUZkF9v5gDGt1uqUGRyAS%2FtR25IBfICIjv5EUUrVMT3Ldzw9kKBdSEF4BXOBzItiG6JgmkKuLXexcMno92gfU80qJmq08V6FbUHkq1a5QxVB%2F036L%2BSdx%2BetZ4pFdSl55z6tE9EfZFE3tNYhkPp1aKIBfKPpLSL6ItB9oJT6PwD2vhHW7LQWEBmR&X-Amz-Signature=fa6c48530101bece83dd4754b576c4efdf5cd78323adc9e06c5dc18d9950e4e6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5JTE5K6%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T081258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyIp%2BrvDr5hy2sLdv6EZkG171dxqaDw5Roou2uhLOpoAiBAas9Axb55wEMC86KbIEIl%2B4aDrS15iIAreOd%2BAk14eyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMnM9rgKewuQpoRpjjKtwDdHMAKXF17tiqqjU2vKjvlQGK%2BrcAk5E2NMMCcOgiRRJAodKdhqfylLEY6g1Mm7%2FXRG3EKrA3tFCYE6%2Fe53NKx96XFFBpyCyMeJaQWvjPfaBr747bKa72MEqAstNpZ2ssCkx5WtRK1e7X3X88gJV6FgT7aUQ0aNApIbwtXZKWXA6KA3Ulv2RMcZlH1QCCXeFFPbamA%2FM%2FQlHAM%2BoR9xS79w8q0F4O7i%2FAHF2wvmxU1ULWjHxu5UMvIlQb0NO3lxn9v%2BppyIA2%2BHgDa86X17yIMwCCBgxe272jDt9Q%2BwhZuAeMQy6qwvhZHCKBkk1hlry3c9dZzMnTe2qRR2nydy1KxjPki%2BhdGnLsDHRuFcLkTtFB7gep%2B6JVQdinsI1vbKjxPnZuakf9jzXlt7Ph%2FsQeMA3jBc76FmpP7uRyqtFW%2Bcbayxl6n3gCEx51gcpxTGrq1DX2PddYKNlHiDrSKyJzBAWoz9FoOAsskYpOxoG9LHN6wktMG%2Bz9igdvzI4bDxD%2BebbyJ2ivd2meJrMirPJpaNv%2B5weiRIUu6eAXGt1raffFs%2B%2FX36ZogTq6Z6mbr%2FN%2FCP55GkdyheaL6hNkAKe1cY8Y1kCIo8Dzc8p0e7uhxLe4Rbl4zQy7w5T8X9MwxvDmwAY6pgFt8XmtZidErdpCqLhNJwSE%2BjOkkoe32nzGb5hdUUZkF9v5gDGt1uqUGRyAS%2FtR25IBfICIjv5EUUrVMT3Ldzw9kKBdSEF4BXOBzItiG6JgmkKuLXexcMno92gfU80qJmq08V6FbUHkq1a5QxVB%2F036L%2BSdx%2BetZ4pFdSl55z6tE9EfZFE3tNYhkPp1aKIBfKPpLSL6ItB9oJT6PwD2vhHW7LQWEBmR&X-Amz-Signature=2aef29c5a4dca636bdce022bff7eb5fa8c4de3ba1b071b68f15165fdcc4c02b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5JTE5K6%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T081258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyIp%2BrvDr5hy2sLdv6EZkG171dxqaDw5Roou2uhLOpoAiBAas9Axb55wEMC86KbIEIl%2B4aDrS15iIAreOd%2BAk14eyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMnM9rgKewuQpoRpjjKtwDdHMAKXF17tiqqjU2vKjvlQGK%2BrcAk5E2NMMCcOgiRRJAodKdhqfylLEY6g1Mm7%2FXRG3EKrA3tFCYE6%2Fe53NKx96XFFBpyCyMeJaQWvjPfaBr747bKa72MEqAstNpZ2ssCkx5WtRK1e7X3X88gJV6FgT7aUQ0aNApIbwtXZKWXA6KA3Ulv2RMcZlH1QCCXeFFPbamA%2FM%2FQlHAM%2BoR9xS79w8q0F4O7i%2FAHF2wvmxU1ULWjHxu5UMvIlQb0NO3lxn9v%2BppyIA2%2BHgDa86X17yIMwCCBgxe272jDt9Q%2BwhZuAeMQy6qwvhZHCKBkk1hlry3c9dZzMnTe2qRR2nydy1KxjPki%2BhdGnLsDHRuFcLkTtFB7gep%2B6JVQdinsI1vbKjxPnZuakf9jzXlt7Ph%2FsQeMA3jBc76FmpP7uRyqtFW%2Bcbayxl6n3gCEx51gcpxTGrq1DX2PddYKNlHiDrSKyJzBAWoz9FoOAsskYpOxoG9LHN6wktMG%2Bz9igdvzI4bDxD%2BebbyJ2ivd2meJrMirPJpaNv%2B5weiRIUu6eAXGt1raffFs%2B%2FX36ZogTq6Z6mbr%2FN%2FCP55GkdyheaL6hNkAKe1cY8Y1kCIo8Dzc8p0e7uhxLe4Rbl4zQy7w5T8X9MwxvDmwAY6pgFt8XmtZidErdpCqLhNJwSE%2BjOkkoe32nzGb5hdUUZkF9v5gDGt1uqUGRyAS%2FtR25IBfICIjv5EUUrVMT3Ldzw9kKBdSEF4BXOBzItiG6JgmkKuLXexcMno92gfU80qJmq08V6FbUHkq1a5QxVB%2F036L%2BSdx%2BetZ4pFdSl55z6tE9EfZFE3tNYhkPp1aKIBfKPpLSL6ItB9oJT6PwD2vhHW7LQWEBmR&X-Amz-Signature=1aa7e76f23eda60368b8eb36f7b1021309a427c00c0fe3b019b7e6868d46449b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5JTE5K6%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T081258Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHyIp%2BrvDr5hy2sLdv6EZkG171dxqaDw5Roou2uhLOpoAiBAas9Axb55wEMC86KbIEIl%2B4aDrS15iIAreOd%2BAk14eyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMnM9rgKewuQpoRpjjKtwDdHMAKXF17tiqqjU2vKjvlQGK%2BrcAk5E2NMMCcOgiRRJAodKdhqfylLEY6g1Mm7%2FXRG3EKrA3tFCYE6%2Fe53NKx96XFFBpyCyMeJaQWvjPfaBr747bKa72MEqAstNpZ2ssCkx5WtRK1e7X3X88gJV6FgT7aUQ0aNApIbwtXZKWXA6KA3Ulv2RMcZlH1QCCXeFFPbamA%2FM%2FQlHAM%2BoR9xS79w8q0F4O7i%2FAHF2wvmxU1ULWjHxu5UMvIlQb0NO3lxn9v%2BppyIA2%2BHgDa86X17yIMwCCBgxe272jDt9Q%2BwhZuAeMQy6qwvhZHCKBkk1hlry3c9dZzMnTe2qRR2nydy1KxjPki%2BhdGnLsDHRuFcLkTtFB7gep%2B6JVQdinsI1vbKjxPnZuakf9jzXlt7Ph%2FsQeMA3jBc76FmpP7uRyqtFW%2Bcbayxl6n3gCEx51gcpxTGrq1DX2PddYKNlHiDrSKyJzBAWoz9FoOAsskYpOxoG9LHN6wktMG%2Bz9igdvzI4bDxD%2BebbyJ2ivd2meJrMirPJpaNv%2B5weiRIUu6eAXGt1raffFs%2B%2FX36ZogTq6Z6mbr%2FN%2FCP55GkdyheaL6hNkAKe1cY8Y1kCIo8Dzc8p0e7uhxLe4Rbl4zQy7w5T8X9MwxvDmwAY6pgFt8XmtZidErdpCqLhNJwSE%2BjOkkoe32nzGb5hdUUZkF9v5gDGt1uqUGRyAS%2FtR25IBfICIjv5EUUrVMT3Ldzw9kKBdSEF4BXOBzItiG6JgmkKuLXexcMno92gfU80qJmq08V6FbUHkq1a5QxVB%2F036L%2BSdx%2BetZ4pFdSl55z6tE9EfZFE3tNYhkPp1aKIBfKPpLSL6ItB9oJT6PwD2vhHW7LQWEBmR&X-Amz-Signature=0ed00d823c9e673255cdd122a46a4722721fe1b02b2a90fdb3149e2cc78dca49&X-Amz-SignedHeaders=host&x-id=GetObject)
