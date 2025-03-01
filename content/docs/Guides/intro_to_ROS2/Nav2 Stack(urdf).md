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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ROSO6IY%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T032232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIGdLjy98H9fm5Ch4pTswMsgZhF3yQquOxaRNH%2FYHAxf8AiBYsRPkfGWz27tCG6%2BhTqqCZN9CQvujLwtcXtO6aZUKvyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBVkySC5zPeX88D3AKtwD8aTJ3BSs4bvI9tw46oYVJP5NCFs4zjaDzDNpNzmQlbEUrGKoxv55z2v1%2BUJZ1kP%2Bfp3j8LXbZSscRMmFVodqftkB6oZfeIorc4Wo39kxz5MhWpky9TAdLqDSrkpJT5hKqhqLzqlNRbDUnTGCgOObXo33k2D3LHG4SMNu9jJPg%2BWKra%2BdiAO7hBtr%2Bugq9RbZXabqL6PuNtY82aGeAeRiD0WVBG7JMPV%2F%2FGJ%2BGDeb5Jv49hl6o3LiMrtS4PSfoFBsSu20eJ0Hl51WRAHIJU1FgOF%2Buftme80nn1yoeRx%2FErueMZ3c7cqqyD%2BMzbxqcQSF%2FKJyed4iP0axDfKLrS8BNhsX1Qn07%2B8RUkh%2BtkwkT%2FZ44rXE%2BX%2Fm10ral%2Bg%2BTEBZ5U4UoOh9NEiLprTxiKzKQauIaxfftHlSm983hLbaWt3Eek34PWRm8nO6DQFaBjBjrXoiFvQdy7jPrO8ateUaOEH%2BvQKG4%2FKVIcXP7ZpyVReCs4BdCQvGyI4XbXiRs0xYW5CoXCqCygTOEvAF5bBIiJu7%2FOwmUl1Xo41qWLjP5pbhqnjbiqgu0LD%2BcLSXSTzuH2G9KcnN8cAgPQKc5P6oZQjaGUCr0OCAe3GdGN29EdxyXe3UW40DtK4UTL4w7fGJvgY6pgF4qcKXDm7%2FUQy83%2F7JsiXpVBHxBOF062qLzhdfompRXLRg3HYSIFZZDZCDdNStH18Ui52gIcJlVeq6rogWpXd6Fkp06zk5nLO4RX1nZR5XpqJVtBTbI5oBq4lG15W%2FJ7NAhyGXa65tSbhK%2BcOm7Mlszlqp5zvHbETJppal3nZdJ30XblaX5AShxYo%2FLaitfZ6VwCEZOBXfZZe28YwxQhGvC5hezr1E&X-Amz-Signature=9bc1799d0ecdb17ad27ac0579d060447792075d5482fe1915914b34590e11ca6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ROSO6IY%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T032232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIGdLjy98H9fm5Ch4pTswMsgZhF3yQquOxaRNH%2FYHAxf8AiBYsRPkfGWz27tCG6%2BhTqqCZN9CQvujLwtcXtO6aZUKvyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBVkySC5zPeX88D3AKtwD8aTJ3BSs4bvI9tw46oYVJP5NCFs4zjaDzDNpNzmQlbEUrGKoxv55z2v1%2BUJZ1kP%2Bfp3j8LXbZSscRMmFVodqftkB6oZfeIorc4Wo39kxz5MhWpky9TAdLqDSrkpJT5hKqhqLzqlNRbDUnTGCgOObXo33k2D3LHG4SMNu9jJPg%2BWKra%2BdiAO7hBtr%2Bugq9RbZXabqL6PuNtY82aGeAeRiD0WVBG7JMPV%2F%2FGJ%2BGDeb5Jv49hl6o3LiMrtS4PSfoFBsSu20eJ0Hl51WRAHIJU1FgOF%2Buftme80nn1yoeRx%2FErueMZ3c7cqqyD%2BMzbxqcQSF%2FKJyed4iP0axDfKLrS8BNhsX1Qn07%2B8RUkh%2BtkwkT%2FZ44rXE%2BX%2Fm10ral%2Bg%2BTEBZ5U4UoOh9NEiLprTxiKzKQauIaxfftHlSm983hLbaWt3Eek34PWRm8nO6DQFaBjBjrXoiFvQdy7jPrO8ateUaOEH%2BvQKG4%2FKVIcXP7ZpyVReCs4BdCQvGyI4XbXiRs0xYW5CoXCqCygTOEvAF5bBIiJu7%2FOwmUl1Xo41qWLjP5pbhqnjbiqgu0LD%2BcLSXSTzuH2G9KcnN8cAgPQKc5P6oZQjaGUCr0OCAe3GdGN29EdxyXe3UW40DtK4UTL4w7fGJvgY6pgF4qcKXDm7%2FUQy83%2F7JsiXpVBHxBOF062qLzhdfompRXLRg3HYSIFZZDZCDdNStH18Ui52gIcJlVeq6rogWpXd6Fkp06zk5nLO4RX1nZR5XpqJVtBTbI5oBq4lG15W%2FJ7NAhyGXa65tSbhK%2BcOm7Mlszlqp5zvHbETJppal3nZdJ30XblaX5AShxYo%2FLaitfZ6VwCEZOBXfZZe28YwxQhGvC5hezr1E&X-Amz-Signature=cc7792b2fd3e931791dacf889337289ed9ec1165d0e4a6b264a1ee1cc60f061d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ROSO6IY%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T032232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIGdLjy98H9fm5Ch4pTswMsgZhF3yQquOxaRNH%2FYHAxf8AiBYsRPkfGWz27tCG6%2BhTqqCZN9CQvujLwtcXtO6aZUKvyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBVkySC5zPeX88D3AKtwD8aTJ3BSs4bvI9tw46oYVJP5NCFs4zjaDzDNpNzmQlbEUrGKoxv55z2v1%2BUJZ1kP%2Bfp3j8LXbZSscRMmFVodqftkB6oZfeIorc4Wo39kxz5MhWpky9TAdLqDSrkpJT5hKqhqLzqlNRbDUnTGCgOObXo33k2D3LHG4SMNu9jJPg%2BWKra%2BdiAO7hBtr%2Bugq9RbZXabqL6PuNtY82aGeAeRiD0WVBG7JMPV%2F%2FGJ%2BGDeb5Jv49hl6o3LiMrtS4PSfoFBsSu20eJ0Hl51WRAHIJU1FgOF%2Buftme80nn1yoeRx%2FErueMZ3c7cqqyD%2BMzbxqcQSF%2FKJyed4iP0axDfKLrS8BNhsX1Qn07%2B8RUkh%2BtkwkT%2FZ44rXE%2BX%2Fm10ral%2Bg%2BTEBZ5U4UoOh9NEiLprTxiKzKQauIaxfftHlSm983hLbaWt3Eek34PWRm8nO6DQFaBjBjrXoiFvQdy7jPrO8ateUaOEH%2BvQKG4%2FKVIcXP7ZpyVReCs4BdCQvGyI4XbXiRs0xYW5CoXCqCygTOEvAF5bBIiJu7%2FOwmUl1Xo41qWLjP5pbhqnjbiqgu0LD%2BcLSXSTzuH2G9KcnN8cAgPQKc5P6oZQjaGUCr0OCAe3GdGN29EdxyXe3UW40DtK4UTL4w7fGJvgY6pgF4qcKXDm7%2FUQy83%2F7JsiXpVBHxBOF062qLzhdfompRXLRg3HYSIFZZDZCDdNStH18Ui52gIcJlVeq6rogWpXd6Fkp06zk5nLO4RX1nZR5XpqJVtBTbI5oBq4lG15W%2FJ7NAhyGXa65tSbhK%2BcOm7Mlszlqp5zvHbETJppal3nZdJ30XblaX5AShxYo%2FLaitfZ6VwCEZOBXfZZe28YwxQhGvC5hezr1E&X-Amz-Signature=c43b6ee0ff903440ef0469967ad13b8563d531303d91595f3c64fbff3f23253a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ROSO6IY%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T032232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIGdLjy98H9fm5Ch4pTswMsgZhF3yQquOxaRNH%2FYHAxf8AiBYsRPkfGWz27tCG6%2BhTqqCZN9CQvujLwtcXtO6aZUKvyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBVkySC5zPeX88D3AKtwD8aTJ3BSs4bvI9tw46oYVJP5NCFs4zjaDzDNpNzmQlbEUrGKoxv55z2v1%2BUJZ1kP%2Bfp3j8LXbZSscRMmFVodqftkB6oZfeIorc4Wo39kxz5MhWpky9TAdLqDSrkpJT5hKqhqLzqlNRbDUnTGCgOObXo33k2D3LHG4SMNu9jJPg%2BWKra%2BdiAO7hBtr%2Bugq9RbZXabqL6PuNtY82aGeAeRiD0WVBG7JMPV%2F%2FGJ%2BGDeb5Jv49hl6o3LiMrtS4PSfoFBsSu20eJ0Hl51WRAHIJU1FgOF%2Buftme80nn1yoeRx%2FErueMZ3c7cqqyD%2BMzbxqcQSF%2FKJyed4iP0axDfKLrS8BNhsX1Qn07%2B8RUkh%2BtkwkT%2FZ44rXE%2BX%2Fm10ral%2Bg%2BTEBZ5U4UoOh9NEiLprTxiKzKQauIaxfftHlSm983hLbaWt3Eek34PWRm8nO6DQFaBjBjrXoiFvQdy7jPrO8ateUaOEH%2BvQKG4%2FKVIcXP7ZpyVReCs4BdCQvGyI4XbXiRs0xYW5CoXCqCygTOEvAF5bBIiJu7%2FOwmUl1Xo41qWLjP5pbhqnjbiqgu0LD%2BcLSXSTzuH2G9KcnN8cAgPQKc5P6oZQjaGUCr0OCAe3GdGN29EdxyXe3UW40DtK4UTL4w7fGJvgY6pgF4qcKXDm7%2FUQy83%2F7JsiXpVBHxBOF062qLzhdfompRXLRg3HYSIFZZDZCDdNStH18Ui52gIcJlVeq6rogWpXd6Fkp06zk5nLO4RX1nZR5XpqJVtBTbI5oBq4lG15W%2FJ7NAhyGXa65tSbhK%2BcOm7Mlszlqp5zvHbETJppal3nZdJ30XblaX5AShxYo%2FLaitfZ6VwCEZOBXfZZe28YwxQhGvC5hezr1E&X-Amz-Signature=a10100fdf5aa6475465d6da31477e1c57661728c7ef8ff20b8429532c5754774&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ROSO6IY%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T032232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIGdLjy98H9fm5Ch4pTswMsgZhF3yQquOxaRNH%2FYHAxf8AiBYsRPkfGWz27tCG6%2BhTqqCZN9CQvujLwtcXtO6aZUKvyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBVkySC5zPeX88D3AKtwD8aTJ3BSs4bvI9tw46oYVJP5NCFs4zjaDzDNpNzmQlbEUrGKoxv55z2v1%2BUJZ1kP%2Bfp3j8LXbZSscRMmFVodqftkB6oZfeIorc4Wo39kxz5MhWpky9TAdLqDSrkpJT5hKqhqLzqlNRbDUnTGCgOObXo33k2D3LHG4SMNu9jJPg%2BWKra%2BdiAO7hBtr%2Bugq9RbZXabqL6PuNtY82aGeAeRiD0WVBG7JMPV%2F%2FGJ%2BGDeb5Jv49hl6o3LiMrtS4PSfoFBsSu20eJ0Hl51WRAHIJU1FgOF%2Buftme80nn1yoeRx%2FErueMZ3c7cqqyD%2BMzbxqcQSF%2FKJyed4iP0axDfKLrS8BNhsX1Qn07%2B8RUkh%2BtkwkT%2FZ44rXE%2BX%2Fm10ral%2Bg%2BTEBZ5U4UoOh9NEiLprTxiKzKQauIaxfftHlSm983hLbaWt3Eek34PWRm8nO6DQFaBjBjrXoiFvQdy7jPrO8ateUaOEH%2BvQKG4%2FKVIcXP7ZpyVReCs4BdCQvGyI4XbXiRs0xYW5CoXCqCygTOEvAF5bBIiJu7%2FOwmUl1Xo41qWLjP5pbhqnjbiqgu0LD%2BcLSXSTzuH2G9KcnN8cAgPQKc5P6oZQjaGUCr0OCAe3GdGN29EdxyXe3UW40DtK4UTL4w7fGJvgY6pgF4qcKXDm7%2FUQy83%2F7JsiXpVBHxBOF062qLzhdfompRXLRg3HYSIFZZDZCDdNStH18Ui52gIcJlVeq6rogWpXd6Fkp06zk5nLO4RX1nZR5XpqJVtBTbI5oBq4lG15W%2FJ7NAhyGXa65tSbhK%2BcOm7Mlszlqp5zvHbETJppal3nZdJ30XblaX5AShxYo%2FLaitfZ6VwCEZOBXfZZe28YwxQhGvC5hezr1E&X-Amz-Signature=fecee01c0705bb3faf73948bf1cbd6c946f26ca2c80392148e3f0c2c5761e5b5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ROSO6IY%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T032232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIGdLjy98H9fm5Ch4pTswMsgZhF3yQquOxaRNH%2FYHAxf8AiBYsRPkfGWz27tCG6%2BhTqqCZN9CQvujLwtcXtO6aZUKvyqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBVkySC5zPeX88D3AKtwD8aTJ3BSs4bvI9tw46oYVJP5NCFs4zjaDzDNpNzmQlbEUrGKoxv55z2v1%2BUJZ1kP%2Bfp3j8LXbZSscRMmFVodqftkB6oZfeIorc4Wo39kxz5MhWpky9TAdLqDSrkpJT5hKqhqLzqlNRbDUnTGCgOObXo33k2D3LHG4SMNu9jJPg%2BWKra%2BdiAO7hBtr%2Bugq9RbZXabqL6PuNtY82aGeAeRiD0WVBG7JMPV%2F%2FGJ%2BGDeb5Jv49hl6o3LiMrtS4PSfoFBsSu20eJ0Hl51WRAHIJU1FgOF%2Buftme80nn1yoeRx%2FErueMZ3c7cqqyD%2BMzbxqcQSF%2FKJyed4iP0axDfKLrS8BNhsX1Qn07%2B8RUkh%2BtkwkT%2FZ44rXE%2BX%2Fm10ral%2Bg%2BTEBZ5U4UoOh9NEiLprTxiKzKQauIaxfftHlSm983hLbaWt3Eek34PWRm8nO6DQFaBjBjrXoiFvQdy7jPrO8ateUaOEH%2BvQKG4%2FKVIcXP7ZpyVReCs4BdCQvGyI4XbXiRs0xYW5CoXCqCygTOEvAF5bBIiJu7%2FOwmUl1Xo41qWLjP5pbhqnjbiqgu0LD%2BcLSXSTzuH2G9KcnN8cAgPQKc5P6oZQjaGUCr0OCAe3GdGN29EdxyXe3UW40DtK4UTL4w7fGJvgY6pgF4qcKXDm7%2FUQy83%2F7JsiXpVBHxBOF062qLzhdfompRXLRg3HYSIFZZDZCDdNStH18Ui52gIcJlVeq6rogWpXd6Fkp06zk5nLO4RX1nZR5XpqJVtBTbI5oBq4lG15W%2FJ7NAhyGXa65tSbhK%2BcOm7Mlszlqp5zvHbETJppal3nZdJ30XblaX5AShxYo%2FLaitfZ6VwCEZOBXfZZe28YwxQhGvC5hezr1E&X-Amz-Signature=ce2e534149ba1660df063bfba82d47f9369536f8b60583142f9bbbe9f002ea83&X-Amz-SignedHeaders=host&x-id=GetObject)
