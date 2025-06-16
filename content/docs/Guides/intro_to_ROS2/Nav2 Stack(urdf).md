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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7437IOX%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T181247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCIDevdxJdiJ2NumGJxsx8XHfvQXobWVvXxRM0liqlaGAIhAI%2BtfdZ9eJq2NNixO%2BLq7VgVcDOrN0lbj%2F2v5ztj8EP7Kv8DCGMQABoMNjM3NDIzMTgzODA1IgwiKTsgM2%2BD7AvgZXgq3APhLFiDb2V3EniTyGW0VxyD1OHreCwNj7xi%2FvbZVy7ZJdIBDUh2mq0DckvDLtsJ7ccMm%2BDHPjHLhZfSScJbutJ0NU%2FLpECLA94ynIn30I1V3IAaZkA0Yv2TZmcW2Iv1%2F0SsY1x0fkz5y4E5Tv%2F%2BpdeZZLfM6JNXWMyjQaOEDr%2BQGVianxZzW0ob4N%2BgCNEPvnI2M3O55tll08mJhw7dM7JioXln5OimUZ%2BxrlE5rbsb%2FGR6KzA9Ort9CIrATa6%2FU%2B0br2vLMiT%2FnFBBf4Jsk9WJz7JV35ZT9zxe4%2FvItqqKbnHK7uh7tzLCz1cBnW0it0uqWhj%2Bw8mF673c6tNU74MRiqLDKqn%2FyDW%2F6V6nCt1eTtqb9SvI69q4N%2B%2FFQj7MhPLvkAJnm2KnM9DpHK2CQAzrLpt9x6dWCZIUTI1BEeFEgebFjo7S0cHeet0fR1huagL8I3fsGr6qOMfibGqnpr6lAAwCiYbwN2GOhGFfvfJ03n5koPjhV6HDF5eBrF%2Bg4Gqe5f4jrwVXDQRbE40TJLPQGr6IakRqb7WADo1j0T2e2aUhW8h%2FEnOmRaeLaodNOQGlHBiqMu38Bq0iFfARFAhl0mWA%2FdvqJ2ylk%2BATCdFeoVTSfpCEuwhSkyaNlzDbr8HCBjqkAbSGK0L%2FKzgEv1WTjvYDzo7fHG7WAZ6yJvuMMOyATcRmKr2SqOU%2BMnUufY6kgLwm9BFX5JUTNENWpPFliDOWMuI9MDLRTji4POf1%2B%2FmbctHI2MvD0zk%2FwgL74QuPyBNkHEcIFWXhDDfjgbE%2BPMyEFnv1ocSuIcrwhWNDNwk99mTLmIvqNEdk%2BRtTX%2FQNHNvv0Na5cewWXunRzdhhggSCSeQZEcdg&X-Amz-Signature=bc8035bab23b4e617b58e6a634587c996c1f5c5be0798fed0ed7d1ca487469b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7437IOX%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T181247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCIDevdxJdiJ2NumGJxsx8XHfvQXobWVvXxRM0liqlaGAIhAI%2BtfdZ9eJq2NNixO%2BLq7VgVcDOrN0lbj%2F2v5ztj8EP7Kv8DCGMQABoMNjM3NDIzMTgzODA1IgwiKTsgM2%2BD7AvgZXgq3APhLFiDb2V3EniTyGW0VxyD1OHreCwNj7xi%2FvbZVy7ZJdIBDUh2mq0DckvDLtsJ7ccMm%2BDHPjHLhZfSScJbutJ0NU%2FLpECLA94ynIn30I1V3IAaZkA0Yv2TZmcW2Iv1%2F0SsY1x0fkz5y4E5Tv%2F%2BpdeZZLfM6JNXWMyjQaOEDr%2BQGVianxZzW0ob4N%2BgCNEPvnI2M3O55tll08mJhw7dM7JioXln5OimUZ%2BxrlE5rbsb%2FGR6KzA9Ort9CIrATa6%2FU%2B0br2vLMiT%2FnFBBf4Jsk9WJz7JV35ZT9zxe4%2FvItqqKbnHK7uh7tzLCz1cBnW0it0uqWhj%2Bw8mF673c6tNU74MRiqLDKqn%2FyDW%2F6V6nCt1eTtqb9SvI69q4N%2B%2FFQj7MhPLvkAJnm2KnM9DpHK2CQAzrLpt9x6dWCZIUTI1BEeFEgebFjo7S0cHeet0fR1huagL8I3fsGr6qOMfibGqnpr6lAAwCiYbwN2GOhGFfvfJ03n5koPjhV6HDF5eBrF%2Bg4Gqe5f4jrwVXDQRbE40TJLPQGr6IakRqb7WADo1j0T2e2aUhW8h%2FEnOmRaeLaodNOQGlHBiqMu38Bq0iFfARFAhl0mWA%2FdvqJ2ylk%2BATCdFeoVTSfpCEuwhSkyaNlzDbr8HCBjqkAbSGK0L%2FKzgEv1WTjvYDzo7fHG7WAZ6yJvuMMOyATcRmKr2SqOU%2BMnUufY6kgLwm9BFX5JUTNENWpPFliDOWMuI9MDLRTji4POf1%2B%2FmbctHI2MvD0zk%2FwgL74QuPyBNkHEcIFWXhDDfjgbE%2BPMyEFnv1ocSuIcrwhWNDNwk99mTLmIvqNEdk%2BRtTX%2FQNHNvv0Na5cewWXunRzdhhggSCSeQZEcdg&X-Amz-Signature=0dfd3685e3046fc674e56a546c8b1b892645c661e3d024fe400f51301f913a5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7437IOX%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T181247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCIDevdxJdiJ2NumGJxsx8XHfvQXobWVvXxRM0liqlaGAIhAI%2BtfdZ9eJq2NNixO%2BLq7VgVcDOrN0lbj%2F2v5ztj8EP7Kv8DCGMQABoMNjM3NDIzMTgzODA1IgwiKTsgM2%2BD7AvgZXgq3APhLFiDb2V3EniTyGW0VxyD1OHreCwNj7xi%2FvbZVy7ZJdIBDUh2mq0DckvDLtsJ7ccMm%2BDHPjHLhZfSScJbutJ0NU%2FLpECLA94ynIn30I1V3IAaZkA0Yv2TZmcW2Iv1%2F0SsY1x0fkz5y4E5Tv%2F%2BpdeZZLfM6JNXWMyjQaOEDr%2BQGVianxZzW0ob4N%2BgCNEPvnI2M3O55tll08mJhw7dM7JioXln5OimUZ%2BxrlE5rbsb%2FGR6KzA9Ort9CIrATa6%2FU%2B0br2vLMiT%2FnFBBf4Jsk9WJz7JV35ZT9zxe4%2FvItqqKbnHK7uh7tzLCz1cBnW0it0uqWhj%2Bw8mF673c6tNU74MRiqLDKqn%2FyDW%2F6V6nCt1eTtqb9SvI69q4N%2B%2FFQj7MhPLvkAJnm2KnM9DpHK2CQAzrLpt9x6dWCZIUTI1BEeFEgebFjo7S0cHeet0fR1huagL8I3fsGr6qOMfibGqnpr6lAAwCiYbwN2GOhGFfvfJ03n5koPjhV6HDF5eBrF%2Bg4Gqe5f4jrwVXDQRbE40TJLPQGr6IakRqb7WADo1j0T2e2aUhW8h%2FEnOmRaeLaodNOQGlHBiqMu38Bq0iFfARFAhl0mWA%2FdvqJ2ylk%2BATCdFeoVTSfpCEuwhSkyaNlzDbr8HCBjqkAbSGK0L%2FKzgEv1WTjvYDzo7fHG7WAZ6yJvuMMOyATcRmKr2SqOU%2BMnUufY6kgLwm9BFX5JUTNENWpPFliDOWMuI9MDLRTji4POf1%2B%2FmbctHI2MvD0zk%2FwgL74QuPyBNkHEcIFWXhDDfjgbE%2BPMyEFnv1ocSuIcrwhWNDNwk99mTLmIvqNEdk%2BRtTX%2FQNHNvv0Na5cewWXunRzdhhggSCSeQZEcdg&X-Amz-Signature=d00715f8038f9ff26306a816449729f621c2b6f30166bdd2484c1e2eeec5a7fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7437IOX%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T181247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCIDevdxJdiJ2NumGJxsx8XHfvQXobWVvXxRM0liqlaGAIhAI%2BtfdZ9eJq2NNixO%2BLq7VgVcDOrN0lbj%2F2v5ztj8EP7Kv8DCGMQABoMNjM3NDIzMTgzODA1IgwiKTsgM2%2BD7AvgZXgq3APhLFiDb2V3EniTyGW0VxyD1OHreCwNj7xi%2FvbZVy7ZJdIBDUh2mq0DckvDLtsJ7ccMm%2BDHPjHLhZfSScJbutJ0NU%2FLpECLA94ynIn30I1V3IAaZkA0Yv2TZmcW2Iv1%2F0SsY1x0fkz5y4E5Tv%2F%2BpdeZZLfM6JNXWMyjQaOEDr%2BQGVianxZzW0ob4N%2BgCNEPvnI2M3O55tll08mJhw7dM7JioXln5OimUZ%2BxrlE5rbsb%2FGR6KzA9Ort9CIrATa6%2FU%2B0br2vLMiT%2FnFBBf4Jsk9WJz7JV35ZT9zxe4%2FvItqqKbnHK7uh7tzLCz1cBnW0it0uqWhj%2Bw8mF673c6tNU74MRiqLDKqn%2FyDW%2F6V6nCt1eTtqb9SvI69q4N%2B%2FFQj7MhPLvkAJnm2KnM9DpHK2CQAzrLpt9x6dWCZIUTI1BEeFEgebFjo7S0cHeet0fR1huagL8I3fsGr6qOMfibGqnpr6lAAwCiYbwN2GOhGFfvfJ03n5koPjhV6HDF5eBrF%2Bg4Gqe5f4jrwVXDQRbE40TJLPQGr6IakRqb7WADo1j0T2e2aUhW8h%2FEnOmRaeLaodNOQGlHBiqMu38Bq0iFfARFAhl0mWA%2FdvqJ2ylk%2BATCdFeoVTSfpCEuwhSkyaNlzDbr8HCBjqkAbSGK0L%2FKzgEv1WTjvYDzo7fHG7WAZ6yJvuMMOyATcRmKr2SqOU%2BMnUufY6kgLwm9BFX5JUTNENWpPFliDOWMuI9MDLRTji4POf1%2B%2FmbctHI2MvD0zk%2FwgL74QuPyBNkHEcIFWXhDDfjgbE%2BPMyEFnv1ocSuIcrwhWNDNwk99mTLmIvqNEdk%2BRtTX%2FQNHNvv0Na5cewWXunRzdhhggSCSeQZEcdg&X-Amz-Signature=f723020898fc3b163bf0762802960ada0811b5166fe43512e6199d424236f811&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7437IOX%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T181247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCIDevdxJdiJ2NumGJxsx8XHfvQXobWVvXxRM0liqlaGAIhAI%2BtfdZ9eJq2NNixO%2BLq7VgVcDOrN0lbj%2F2v5ztj8EP7Kv8DCGMQABoMNjM3NDIzMTgzODA1IgwiKTsgM2%2BD7AvgZXgq3APhLFiDb2V3EniTyGW0VxyD1OHreCwNj7xi%2FvbZVy7ZJdIBDUh2mq0DckvDLtsJ7ccMm%2BDHPjHLhZfSScJbutJ0NU%2FLpECLA94ynIn30I1V3IAaZkA0Yv2TZmcW2Iv1%2F0SsY1x0fkz5y4E5Tv%2F%2BpdeZZLfM6JNXWMyjQaOEDr%2BQGVianxZzW0ob4N%2BgCNEPvnI2M3O55tll08mJhw7dM7JioXln5OimUZ%2BxrlE5rbsb%2FGR6KzA9Ort9CIrATa6%2FU%2B0br2vLMiT%2FnFBBf4Jsk9WJz7JV35ZT9zxe4%2FvItqqKbnHK7uh7tzLCz1cBnW0it0uqWhj%2Bw8mF673c6tNU74MRiqLDKqn%2FyDW%2F6V6nCt1eTtqb9SvI69q4N%2B%2FFQj7MhPLvkAJnm2KnM9DpHK2CQAzrLpt9x6dWCZIUTI1BEeFEgebFjo7S0cHeet0fR1huagL8I3fsGr6qOMfibGqnpr6lAAwCiYbwN2GOhGFfvfJ03n5koPjhV6HDF5eBrF%2Bg4Gqe5f4jrwVXDQRbE40TJLPQGr6IakRqb7WADo1j0T2e2aUhW8h%2FEnOmRaeLaodNOQGlHBiqMu38Bq0iFfARFAhl0mWA%2FdvqJ2ylk%2BATCdFeoVTSfpCEuwhSkyaNlzDbr8HCBjqkAbSGK0L%2FKzgEv1WTjvYDzo7fHG7WAZ6yJvuMMOyATcRmKr2SqOU%2BMnUufY6kgLwm9BFX5JUTNENWpPFliDOWMuI9MDLRTji4POf1%2B%2FmbctHI2MvD0zk%2FwgL74QuPyBNkHEcIFWXhDDfjgbE%2BPMyEFnv1ocSuIcrwhWNDNwk99mTLmIvqNEdk%2BRtTX%2FQNHNvv0Na5cewWXunRzdhhggSCSeQZEcdg&X-Amz-Signature=4a6b2a6d869de2ea1aec76489a3da05de9091d81a3904470722d9ed1ebb72481&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7437IOX%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T181247Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCIDevdxJdiJ2NumGJxsx8XHfvQXobWVvXxRM0liqlaGAIhAI%2BtfdZ9eJq2NNixO%2BLq7VgVcDOrN0lbj%2F2v5ztj8EP7Kv8DCGMQABoMNjM3NDIzMTgzODA1IgwiKTsgM2%2BD7AvgZXgq3APhLFiDb2V3EniTyGW0VxyD1OHreCwNj7xi%2FvbZVy7ZJdIBDUh2mq0DckvDLtsJ7ccMm%2BDHPjHLhZfSScJbutJ0NU%2FLpECLA94ynIn30I1V3IAaZkA0Yv2TZmcW2Iv1%2F0SsY1x0fkz5y4E5Tv%2F%2BpdeZZLfM6JNXWMyjQaOEDr%2BQGVianxZzW0ob4N%2BgCNEPvnI2M3O55tll08mJhw7dM7JioXln5OimUZ%2BxrlE5rbsb%2FGR6KzA9Ort9CIrATa6%2FU%2B0br2vLMiT%2FnFBBf4Jsk9WJz7JV35ZT9zxe4%2FvItqqKbnHK7uh7tzLCz1cBnW0it0uqWhj%2Bw8mF673c6tNU74MRiqLDKqn%2FyDW%2F6V6nCt1eTtqb9SvI69q4N%2B%2FFQj7MhPLvkAJnm2KnM9DpHK2CQAzrLpt9x6dWCZIUTI1BEeFEgebFjo7S0cHeet0fR1huagL8I3fsGr6qOMfibGqnpr6lAAwCiYbwN2GOhGFfvfJ03n5koPjhV6HDF5eBrF%2Bg4Gqe5f4jrwVXDQRbE40TJLPQGr6IakRqb7WADo1j0T2e2aUhW8h%2FEnOmRaeLaodNOQGlHBiqMu38Bq0iFfARFAhl0mWA%2FdvqJ2ylk%2BATCdFeoVTSfpCEuwhSkyaNlzDbr8HCBjqkAbSGK0L%2FKzgEv1WTjvYDzo7fHG7WAZ6yJvuMMOyATcRmKr2SqOU%2BMnUufY6kgLwm9BFX5JUTNENWpPFliDOWMuI9MDLRTji4POf1%2B%2FmbctHI2MvD0zk%2FwgL74QuPyBNkHEcIFWXhDDfjgbE%2BPMyEFnv1ocSuIcrwhWNDNwk99mTLmIvqNEdk%2BRtTX%2FQNHNvv0Na5cewWXunRzdhhggSCSeQZEcdg&X-Amz-Signature=f85219b13ab39289a2da0c9c10f0f5e0c3b6970f87cfe769d0d4c0f0a51246f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
