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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLHXIMU3%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T061447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQClS%2FLh2cClB7OcmUG8DXCydFbRhZmk29yYURIOkGBUJAIhAPXdIFmJOKFbesKL2D3KO9A%2Bc4A7w%2FZkXMak2FOaQ%2FEGKv8DCG4QABoMNjM3NDIzMTgzODA1IgzCt3RUnPsDJ2L6Lp8q3AOkSM3Hb8o7b0TMU1YDEz9YbxblWqyC8UPA9xF9WApkeIBM30Tzb0CHu%2F%2FW5CDG52n2jJxqn6oHji9DdGSghv7RKzIK6vtuah21ZQNa%2FqkF7pXrICJ2htuSuaHd6gESkyzzAt4dmLpOARslAIbhwz%2BbtRxdOn1JYNtUWjgiPMevBoxLZwp05vZcYEa5odz4hQ%2BSUdA1GPl9Ccu3Uu1R92IDeG1k3HMy3V62HF27Hr%2FPDpSPgrA84GVJ9Q0F%2FPfvxUR5lTdzI3A365ddLofDzDAfaodCLgiEn7aAiOmtrUlhOAcSMKVyY%2FJ5pPfN%2Fr2SgiVyhIfdqF6nCW7l76Z9g77Bs8itNxD59MKC5piw9oKizqLvyoUy0V0WWdOlqDBfw8Ij2EpD2094sC8vw8oDXyL3Ucl2AW6l048DYbMj8Z8L1m218jKFLOAWzKBzFD6OOP3f7VUzrePPMjZPcxVtniy7E6xPZIFfkdJDBrzZsZsN55uMf3jepd5dcyU0YSDecGIg22y8ZpexXOeHDzBfYPsY%2BJ%2Bhm%2FCNdQe7bYhvT37mo8UakmLnRG1%2BZFhL3OvSlx5%2FGb0UwWenuPe2T%2FzxQPmkqZcoZDm4Gfy%2FyjttWDPd4mUHPCF9v%2B395%2FqTBTD1rq3DBjqkAbwee0vvGjMyU48oh%2BCJ69JbOGgY0LojhE7dKi2fkA3waKlcTvuJpNSPUbaN1RJVZB7G3sGFciCVO1eddAW5RpdB3YI%2BAtjUTsss3uGzo6GsFOdXGw0z0dZOQEPxYnfrEjkpCpnfsJzNoWZsGDcUQxG29D7mXeVIzPae0M1GlclxTkHqPEgZsFd2tDKWC6Ld0Rb9R%2FnP%2F97BbA%2BqRpf23Y65ffHR&X-Amz-Signature=3a212dc31d54b5bc58b80976db6add96659157addea694781f9514dce0f69ab7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLHXIMU3%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T061447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQClS%2FLh2cClB7OcmUG8DXCydFbRhZmk29yYURIOkGBUJAIhAPXdIFmJOKFbesKL2D3KO9A%2Bc4A7w%2FZkXMak2FOaQ%2FEGKv8DCG4QABoMNjM3NDIzMTgzODA1IgzCt3RUnPsDJ2L6Lp8q3AOkSM3Hb8o7b0TMU1YDEz9YbxblWqyC8UPA9xF9WApkeIBM30Tzb0CHu%2F%2FW5CDG52n2jJxqn6oHji9DdGSghv7RKzIK6vtuah21ZQNa%2FqkF7pXrICJ2htuSuaHd6gESkyzzAt4dmLpOARslAIbhwz%2BbtRxdOn1JYNtUWjgiPMevBoxLZwp05vZcYEa5odz4hQ%2BSUdA1GPl9Ccu3Uu1R92IDeG1k3HMy3V62HF27Hr%2FPDpSPgrA84GVJ9Q0F%2FPfvxUR5lTdzI3A365ddLofDzDAfaodCLgiEn7aAiOmtrUlhOAcSMKVyY%2FJ5pPfN%2Fr2SgiVyhIfdqF6nCW7l76Z9g77Bs8itNxD59MKC5piw9oKizqLvyoUy0V0WWdOlqDBfw8Ij2EpD2094sC8vw8oDXyL3Ucl2AW6l048DYbMj8Z8L1m218jKFLOAWzKBzFD6OOP3f7VUzrePPMjZPcxVtniy7E6xPZIFfkdJDBrzZsZsN55uMf3jepd5dcyU0YSDecGIg22y8ZpexXOeHDzBfYPsY%2BJ%2Bhm%2FCNdQe7bYhvT37mo8UakmLnRG1%2BZFhL3OvSlx5%2FGb0UwWenuPe2T%2FzxQPmkqZcoZDm4Gfy%2FyjttWDPd4mUHPCF9v%2B395%2FqTBTD1rq3DBjqkAbwee0vvGjMyU48oh%2BCJ69JbOGgY0LojhE7dKi2fkA3waKlcTvuJpNSPUbaN1RJVZB7G3sGFciCVO1eddAW5RpdB3YI%2BAtjUTsss3uGzo6GsFOdXGw0z0dZOQEPxYnfrEjkpCpnfsJzNoWZsGDcUQxG29D7mXeVIzPae0M1GlclxTkHqPEgZsFd2tDKWC6Ld0Rb9R%2FnP%2F97BbA%2BqRpf23Y65ffHR&X-Amz-Signature=c9e09bd0c93645bcacf9e6389112c88c1ed8d4f2dc4aa251866b9a4de9648c5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLHXIMU3%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T061447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQClS%2FLh2cClB7OcmUG8DXCydFbRhZmk29yYURIOkGBUJAIhAPXdIFmJOKFbesKL2D3KO9A%2Bc4A7w%2FZkXMak2FOaQ%2FEGKv8DCG4QABoMNjM3NDIzMTgzODA1IgzCt3RUnPsDJ2L6Lp8q3AOkSM3Hb8o7b0TMU1YDEz9YbxblWqyC8UPA9xF9WApkeIBM30Tzb0CHu%2F%2FW5CDG52n2jJxqn6oHji9DdGSghv7RKzIK6vtuah21ZQNa%2FqkF7pXrICJ2htuSuaHd6gESkyzzAt4dmLpOARslAIbhwz%2BbtRxdOn1JYNtUWjgiPMevBoxLZwp05vZcYEa5odz4hQ%2BSUdA1GPl9Ccu3Uu1R92IDeG1k3HMy3V62HF27Hr%2FPDpSPgrA84GVJ9Q0F%2FPfvxUR5lTdzI3A365ddLofDzDAfaodCLgiEn7aAiOmtrUlhOAcSMKVyY%2FJ5pPfN%2Fr2SgiVyhIfdqF6nCW7l76Z9g77Bs8itNxD59MKC5piw9oKizqLvyoUy0V0WWdOlqDBfw8Ij2EpD2094sC8vw8oDXyL3Ucl2AW6l048DYbMj8Z8L1m218jKFLOAWzKBzFD6OOP3f7VUzrePPMjZPcxVtniy7E6xPZIFfkdJDBrzZsZsN55uMf3jepd5dcyU0YSDecGIg22y8ZpexXOeHDzBfYPsY%2BJ%2Bhm%2FCNdQe7bYhvT37mo8UakmLnRG1%2BZFhL3OvSlx5%2FGb0UwWenuPe2T%2FzxQPmkqZcoZDm4Gfy%2FyjttWDPd4mUHPCF9v%2B395%2FqTBTD1rq3DBjqkAbwee0vvGjMyU48oh%2BCJ69JbOGgY0LojhE7dKi2fkA3waKlcTvuJpNSPUbaN1RJVZB7G3sGFciCVO1eddAW5RpdB3YI%2BAtjUTsss3uGzo6GsFOdXGw0z0dZOQEPxYnfrEjkpCpnfsJzNoWZsGDcUQxG29D7mXeVIzPae0M1GlclxTkHqPEgZsFd2tDKWC6Ld0Rb9R%2FnP%2F97BbA%2BqRpf23Y65ffHR&X-Amz-Signature=cca83c147579df073b5ba876b03fd5b79b27ed3c1b889da8309eebeadfc4a8e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLHXIMU3%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T061447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQClS%2FLh2cClB7OcmUG8DXCydFbRhZmk29yYURIOkGBUJAIhAPXdIFmJOKFbesKL2D3KO9A%2Bc4A7w%2FZkXMak2FOaQ%2FEGKv8DCG4QABoMNjM3NDIzMTgzODA1IgzCt3RUnPsDJ2L6Lp8q3AOkSM3Hb8o7b0TMU1YDEz9YbxblWqyC8UPA9xF9WApkeIBM30Tzb0CHu%2F%2FW5CDG52n2jJxqn6oHji9DdGSghv7RKzIK6vtuah21ZQNa%2FqkF7pXrICJ2htuSuaHd6gESkyzzAt4dmLpOARslAIbhwz%2BbtRxdOn1JYNtUWjgiPMevBoxLZwp05vZcYEa5odz4hQ%2BSUdA1GPl9Ccu3Uu1R92IDeG1k3HMy3V62HF27Hr%2FPDpSPgrA84GVJ9Q0F%2FPfvxUR5lTdzI3A365ddLofDzDAfaodCLgiEn7aAiOmtrUlhOAcSMKVyY%2FJ5pPfN%2Fr2SgiVyhIfdqF6nCW7l76Z9g77Bs8itNxD59MKC5piw9oKizqLvyoUy0V0WWdOlqDBfw8Ij2EpD2094sC8vw8oDXyL3Ucl2AW6l048DYbMj8Z8L1m218jKFLOAWzKBzFD6OOP3f7VUzrePPMjZPcxVtniy7E6xPZIFfkdJDBrzZsZsN55uMf3jepd5dcyU0YSDecGIg22y8ZpexXOeHDzBfYPsY%2BJ%2Bhm%2FCNdQe7bYhvT37mo8UakmLnRG1%2BZFhL3OvSlx5%2FGb0UwWenuPe2T%2FzxQPmkqZcoZDm4Gfy%2FyjttWDPd4mUHPCF9v%2B395%2FqTBTD1rq3DBjqkAbwee0vvGjMyU48oh%2BCJ69JbOGgY0LojhE7dKi2fkA3waKlcTvuJpNSPUbaN1RJVZB7G3sGFciCVO1eddAW5RpdB3YI%2BAtjUTsss3uGzo6GsFOdXGw0z0dZOQEPxYnfrEjkpCpnfsJzNoWZsGDcUQxG29D7mXeVIzPae0M1GlclxTkHqPEgZsFd2tDKWC6Ld0Rb9R%2FnP%2F97BbA%2BqRpf23Y65ffHR&X-Amz-Signature=2c28833d188c59c3236181dd32e5ebbee441da6c4242e549fad53d0e0953b799&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLHXIMU3%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T061448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQClS%2FLh2cClB7OcmUG8DXCydFbRhZmk29yYURIOkGBUJAIhAPXdIFmJOKFbesKL2D3KO9A%2Bc4A7w%2FZkXMak2FOaQ%2FEGKv8DCG4QABoMNjM3NDIzMTgzODA1IgzCt3RUnPsDJ2L6Lp8q3AOkSM3Hb8o7b0TMU1YDEz9YbxblWqyC8UPA9xF9WApkeIBM30Tzb0CHu%2F%2FW5CDG52n2jJxqn6oHji9DdGSghv7RKzIK6vtuah21ZQNa%2FqkF7pXrICJ2htuSuaHd6gESkyzzAt4dmLpOARslAIbhwz%2BbtRxdOn1JYNtUWjgiPMevBoxLZwp05vZcYEa5odz4hQ%2BSUdA1GPl9Ccu3Uu1R92IDeG1k3HMy3V62HF27Hr%2FPDpSPgrA84GVJ9Q0F%2FPfvxUR5lTdzI3A365ddLofDzDAfaodCLgiEn7aAiOmtrUlhOAcSMKVyY%2FJ5pPfN%2Fr2SgiVyhIfdqF6nCW7l76Z9g77Bs8itNxD59MKC5piw9oKizqLvyoUy0V0WWdOlqDBfw8Ij2EpD2094sC8vw8oDXyL3Ucl2AW6l048DYbMj8Z8L1m218jKFLOAWzKBzFD6OOP3f7VUzrePPMjZPcxVtniy7E6xPZIFfkdJDBrzZsZsN55uMf3jepd5dcyU0YSDecGIg22y8ZpexXOeHDzBfYPsY%2BJ%2Bhm%2FCNdQe7bYhvT37mo8UakmLnRG1%2BZFhL3OvSlx5%2FGb0UwWenuPe2T%2FzxQPmkqZcoZDm4Gfy%2FyjttWDPd4mUHPCF9v%2B395%2FqTBTD1rq3DBjqkAbwee0vvGjMyU48oh%2BCJ69JbOGgY0LojhE7dKi2fkA3waKlcTvuJpNSPUbaN1RJVZB7G3sGFciCVO1eddAW5RpdB3YI%2BAtjUTsss3uGzo6GsFOdXGw0z0dZOQEPxYnfrEjkpCpnfsJzNoWZsGDcUQxG29D7mXeVIzPae0M1GlclxTkHqPEgZsFd2tDKWC6Ld0Rb9R%2FnP%2F97BbA%2BqRpf23Y65ffHR&X-Amz-Signature=f24ba77e4f62c67589c9dc7c4a9ee613e89fa74e9860161839eabd126ab78ce2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLHXIMU3%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T061448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQClS%2FLh2cClB7OcmUG8DXCydFbRhZmk29yYURIOkGBUJAIhAPXdIFmJOKFbesKL2D3KO9A%2Bc4A7w%2FZkXMak2FOaQ%2FEGKv8DCG4QABoMNjM3NDIzMTgzODA1IgzCt3RUnPsDJ2L6Lp8q3AOkSM3Hb8o7b0TMU1YDEz9YbxblWqyC8UPA9xF9WApkeIBM30Tzb0CHu%2F%2FW5CDG52n2jJxqn6oHji9DdGSghv7RKzIK6vtuah21ZQNa%2FqkF7pXrICJ2htuSuaHd6gESkyzzAt4dmLpOARslAIbhwz%2BbtRxdOn1JYNtUWjgiPMevBoxLZwp05vZcYEa5odz4hQ%2BSUdA1GPl9Ccu3Uu1R92IDeG1k3HMy3V62HF27Hr%2FPDpSPgrA84GVJ9Q0F%2FPfvxUR5lTdzI3A365ddLofDzDAfaodCLgiEn7aAiOmtrUlhOAcSMKVyY%2FJ5pPfN%2Fr2SgiVyhIfdqF6nCW7l76Z9g77Bs8itNxD59MKC5piw9oKizqLvyoUy0V0WWdOlqDBfw8Ij2EpD2094sC8vw8oDXyL3Ucl2AW6l048DYbMj8Z8L1m218jKFLOAWzKBzFD6OOP3f7VUzrePPMjZPcxVtniy7E6xPZIFfkdJDBrzZsZsN55uMf3jepd5dcyU0YSDecGIg22y8ZpexXOeHDzBfYPsY%2BJ%2Bhm%2FCNdQe7bYhvT37mo8UakmLnRG1%2BZFhL3OvSlx5%2FGb0UwWenuPe2T%2FzxQPmkqZcoZDm4Gfy%2FyjttWDPd4mUHPCF9v%2B395%2FqTBTD1rq3DBjqkAbwee0vvGjMyU48oh%2BCJ69JbOGgY0LojhE7dKi2fkA3waKlcTvuJpNSPUbaN1RJVZB7G3sGFciCVO1eddAW5RpdB3YI%2BAtjUTsss3uGzo6GsFOdXGw0z0dZOQEPxYnfrEjkpCpnfsJzNoWZsGDcUQxG29D7mXeVIzPae0M1GlclxTkHqPEgZsFd2tDKWC6Ld0Rb9R%2FnP%2F97BbA%2BqRpf23Y65ffHR&X-Amz-Signature=71821077f88138713915e6a0f4320147a84a42cde2ce25e7639c547d8c38f4d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
