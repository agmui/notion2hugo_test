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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IKVLYUB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T110124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQHoluZugKWU%2Bn1yW%2FBf4jl85HvcJjk%2B963s6BOOK1MAiADMN8LL1uXyVfzLoRVQAIxVrlj6ETU2YYOhJFIkKhZHir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMa%2FNASybHODVpjtEKKtwD5RAeRc6JY4xbamm583TvIP4edEvSEbkHtCS%2BQuFnMUxM3kBDemeEQOp%2F4%2FLd%2FdHQTzE%2B%2BRL3QwAkxzk%2FBMuo9Vnnzscymxycyl2gL47%2Bx4q4iZRh5vTTmrtDouwbf5Ytr15bs4pLGjNW13vqjackWTeCpniYz8TDzi79YKD2xbSuP2CSm1pe22shd5I78nDmFOEYMQS5m3yublMcbS6c9AQngzkpGFRJDGuwMTY11SFW10drOP6knY7f9tyuA56cjatfP9u0VXW3zgu8%2FwESZCdR5CaJ98IWUO5lK7AS8yidiH3SF7ncIFYA%2Bh6O7XH4o3PN%2FQpGSeG3eOeH00IMKsb7fQbmimZEwB7jkDIKXICcsjUf3j3CM%2FD%2FiohrswgEKHdDqoUJ%2FaSknhHsV63GsS6Sk4Rh64fQqQb%2FPVxaHZsnQ0jcVnJByF8QdMzX42KfOFu38kB6d98RJsz6PtMDVpgi5lhbbeZ5KGKTu%2BKK2HckzOy6RmFmfAqUGoEaDrOVU6DGxe2nKjww4pvgUmNug4nqufdPGt4MoSMAQpVLiOSlvQtT4H5mEmn5petp8%2F6qCO3Qtbta326ceSTcr6nKzrmmmfBrPywvzh17o4SuT8u7LZ4Qk0cPoR%2BylbYw8%2BPDvwY6pgHELRl9as9jahRMxUe7BPlEFy5eHNoX165WrbAtA2mqI%2BWJb0Nz05A5yj%2F5ZKfl6sPqaO7jyiWfxssjKb4Tgx2e4B%2BaQBQmQ0BOHa6TIwZ7OUyiB0cpi8%2BsHog48nOsGF4VeVcciW7EO1dvbiKTPLxHkQxD9IoO6hXAdyAk2f2mD3tXw6FeBM1V1fwrmqRrPyj1ZhqA2YABqSM%2BoB4A6oadiJ6bMNWo&X-Amz-Signature=e10a3cd20282cbcfe52ea7c59597ea40f4d21fb46723e7be3e5dd1306f2421a2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IKVLYUB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T110124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQHoluZugKWU%2Bn1yW%2FBf4jl85HvcJjk%2B963s6BOOK1MAiADMN8LL1uXyVfzLoRVQAIxVrlj6ETU2YYOhJFIkKhZHir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMa%2FNASybHODVpjtEKKtwD5RAeRc6JY4xbamm583TvIP4edEvSEbkHtCS%2BQuFnMUxM3kBDemeEQOp%2F4%2FLd%2FdHQTzE%2B%2BRL3QwAkxzk%2FBMuo9Vnnzscymxycyl2gL47%2Bx4q4iZRh5vTTmrtDouwbf5Ytr15bs4pLGjNW13vqjackWTeCpniYz8TDzi79YKD2xbSuP2CSm1pe22shd5I78nDmFOEYMQS5m3yublMcbS6c9AQngzkpGFRJDGuwMTY11SFW10drOP6knY7f9tyuA56cjatfP9u0VXW3zgu8%2FwESZCdR5CaJ98IWUO5lK7AS8yidiH3SF7ncIFYA%2Bh6O7XH4o3PN%2FQpGSeG3eOeH00IMKsb7fQbmimZEwB7jkDIKXICcsjUf3j3CM%2FD%2FiohrswgEKHdDqoUJ%2FaSknhHsV63GsS6Sk4Rh64fQqQb%2FPVxaHZsnQ0jcVnJByF8QdMzX42KfOFu38kB6d98RJsz6PtMDVpgi5lhbbeZ5KGKTu%2BKK2HckzOy6RmFmfAqUGoEaDrOVU6DGxe2nKjww4pvgUmNug4nqufdPGt4MoSMAQpVLiOSlvQtT4H5mEmn5petp8%2F6qCO3Qtbta326ceSTcr6nKzrmmmfBrPywvzh17o4SuT8u7LZ4Qk0cPoR%2BylbYw8%2BPDvwY6pgHELRl9as9jahRMxUe7BPlEFy5eHNoX165WrbAtA2mqI%2BWJb0Nz05A5yj%2F5ZKfl6sPqaO7jyiWfxssjKb4Tgx2e4B%2BaQBQmQ0BOHa6TIwZ7OUyiB0cpi8%2BsHog48nOsGF4VeVcciW7EO1dvbiKTPLxHkQxD9IoO6hXAdyAk2f2mD3tXw6FeBM1V1fwrmqRrPyj1ZhqA2YABqSM%2BoB4A6oadiJ6bMNWo&X-Amz-Signature=78464fa96c81969dcef90fd054eafaec732fffd8875f5568f65a2cca2fd82a39&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IKVLYUB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T110124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQHoluZugKWU%2Bn1yW%2FBf4jl85HvcJjk%2B963s6BOOK1MAiADMN8LL1uXyVfzLoRVQAIxVrlj6ETU2YYOhJFIkKhZHir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMa%2FNASybHODVpjtEKKtwD5RAeRc6JY4xbamm583TvIP4edEvSEbkHtCS%2BQuFnMUxM3kBDemeEQOp%2F4%2FLd%2FdHQTzE%2B%2BRL3QwAkxzk%2FBMuo9Vnnzscymxycyl2gL47%2Bx4q4iZRh5vTTmrtDouwbf5Ytr15bs4pLGjNW13vqjackWTeCpniYz8TDzi79YKD2xbSuP2CSm1pe22shd5I78nDmFOEYMQS5m3yublMcbS6c9AQngzkpGFRJDGuwMTY11SFW10drOP6knY7f9tyuA56cjatfP9u0VXW3zgu8%2FwESZCdR5CaJ98IWUO5lK7AS8yidiH3SF7ncIFYA%2Bh6O7XH4o3PN%2FQpGSeG3eOeH00IMKsb7fQbmimZEwB7jkDIKXICcsjUf3j3CM%2FD%2FiohrswgEKHdDqoUJ%2FaSknhHsV63GsS6Sk4Rh64fQqQb%2FPVxaHZsnQ0jcVnJByF8QdMzX42KfOFu38kB6d98RJsz6PtMDVpgi5lhbbeZ5KGKTu%2BKK2HckzOy6RmFmfAqUGoEaDrOVU6DGxe2nKjww4pvgUmNug4nqufdPGt4MoSMAQpVLiOSlvQtT4H5mEmn5petp8%2F6qCO3Qtbta326ceSTcr6nKzrmmmfBrPywvzh17o4SuT8u7LZ4Qk0cPoR%2BylbYw8%2BPDvwY6pgHELRl9as9jahRMxUe7BPlEFy5eHNoX165WrbAtA2mqI%2BWJb0Nz05A5yj%2F5ZKfl6sPqaO7jyiWfxssjKb4Tgx2e4B%2BaQBQmQ0BOHa6TIwZ7OUyiB0cpi8%2BsHog48nOsGF4VeVcciW7EO1dvbiKTPLxHkQxD9IoO6hXAdyAk2f2mD3tXw6FeBM1V1fwrmqRrPyj1ZhqA2YABqSM%2BoB4A6oadiJ6bMNWo&X-Amz-Signature=e4a296ec77a092eb3f4b4121508a795c3c495727c1e9abaa9c440561dc0c3886&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IKVLYUB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T110124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQHoluZugKWU%2Bn1yW%2FBf4jl85HvcJjk%2B963s6BOOK1MAiADMN8LL1uXyVfzLoRVQAIxVrlj6ETU2YYOhJFIkKhZHir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMa%2FNASybHODVpjtEKKtwD5RAeRc6JY4xbamm583TvIP4edEvSEbkHtCS%2BQuFnMUxM3kBDemeEQOp%2F4%2FLd%2FdHQTzE%2B%2BRL3QwAkxzk%2FBMuo9Vnnzscymxycyl2gL47%2Bx4q4iZRh5vTTmrtDouwbf5Ytr15bs4pLGjNW13vqjackWTeCpniYz8TDzi79YKD2xbSuP2CSm1pe22shd5I78nDmFOEYMQS5m3yublMcbS6c9AQngzkpGFRJDGuwMTY11SFW10drOP6knY7f9tyuA56cjatfP9u0VXW3zgu8%2FwESZCdR5CaJ98IWUO5lK7AS8yidiH3SF7ncIFYA%2Bh6O7XH4o3PN%2FQpGSeG3eOeH00IMKsb7fQbmimZEwB7jkDIKXICcsjUf3j3CM%2FD%2FiohrswgEKHdDqoUJ%2FaSknhHsV63GsS6Sk4Rh64fQqQb%2FPVxaHZsnQ0jcVnJByF8QdMzX42KfOFu38kB6d98RJsz6PtMDVpgi5lhbbeZ5KGKTu%2BKK2HckzOy6RmFmfAqUGoEaDrOVU6DGxe2nKjww4pvgUmNug4nqufdPGt4MoSMAQpVLiOSlvQtT4H5mEmn5petp8%2F6qCO3Qtbta326ceSTcr6nKzrmmmfBrPywvzh17o4SuT8u7LZ4Qk0cPoR%2BylbYw8%2BPDvwY6pgHELRl9as9jahRMxUe7BPlEFy5eHNoX165WrbAtA2mqI%2BWJb0Nz05A5yj%2F5ZKfl6sPqaO7jyiWfxssjKb4Tgx2e4B%2BaQBQmQ0BOHa6TIwZ7OUyiB0cpi8%2BsHog48nOsGF4VeVcciW7EO1dvbiKTPLxHkQxD9IoO6hXAdyAk2f2mD3tXw6FeBM1V1fwrmqRrPyj1ZhqA2YABqSM%2BoB4A6oadiJ6bMNWo&X-Amz-Signature=39f6f65fc7c0bc106a95df110d7fb7276a182c6ed8c40db53449459c4bebcba4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IKVLYUB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T110124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQHoluZugKWU%2Bn1yW%2FBf4jl85HvcJjk%2B963s6BOOK1MAiADMN8LL1uXyVfzLoRVQAIxVrlj6ETU2YYOhJFIkKhZHir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMa%2FNASybHODVpjtEKKtwD5RAeRc6JY4xbamm583TvIP4edEvSEbkHtCS%2BQuFnMUxM3kBDemeEQOp%2F4%2FLd%2FdHQTzE%2B%2BRL3QwAkxzk%2FBMuo9Vnnzscymxycyl2gL47%2Bx4q4iZRh5vTTmrtDouwbf5Ytr15bs4pLGjNW13vqjackWTeCpniYz8TDzi79YKD2xbSuP2CSm1pe22shd5I78nDmFOEYMQS5m3yublMcbS6c9AQngzkpGFRJDGuwMTY11SFW10drOP6knY7f9tyuA56cjatfP9u0VXW3zgu8%2FwESZCdR5CaJ98IWUO5lK7AS8yidiH3SF7ncIFYA%2Bh6O7XH4o3PN%2FQpGSeG3eOeH00IMKsb7fQbmimZEwB7jkDIKXICcsjUf3j3CM%2FD%2FiohrswgEKHdDqoUJ%2FaSknhHsV63GsS6Sk4Rh64fQqQb%2FPVxaHZsnQ0jcVnJByF8QdMzX42KfOFu38kB6d98RJsz6PtMDVpgi5lhbbeZ5KGKTu%2BKK2HckzOy6RmFmfAqUGoEaDrOVU6DGxe2nKjww4pvgUmNug4nqufdPGt4MoSMAQpVLiOSlvQtT4H5mEmn5petp8%2F6qCO3Qtbta326ceSTcr6nKzrmmmfBrPywvzh17o4SuT8u7LZ4Qk0cPoR%2BylbYw8%2BPDvwY6pgHELRl9as9jahRMxUe7BPlEFy5eHNoX165WrbAtA2mqI%2BWJb0Nz05A5yj%2F5ZKfl6sPqaO7jyiWfxssjKb4Tgx2e4B%2BaQBQmQ0BOHa6TIwZ7OUyiB0cpi8%2BsHog48nOsGF4VeVcciW7EO1dvbiKTPLxHkQxD9IoO6hXAdyAk2f2mD3tXw6FeBM1V1fwrmqRrPyj1ZhqA2YABqSM%2BoB4A6oadiJ6bMNWo&X-Amz-Signature=6122bce8898307a7f677ced15ca3c97cafd73eaaf59a3375375f24e3d639c940&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IKVLYUB%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T110124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBQHoluZugKWU%2Bn1yW%2FBf4jl85HvcJjk%2B963s6BOOK1MAiADMN8LL1uXyVfzLoRVQAIxVrlj6ETU2YYOhJFIkKhZHir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMa%2FNASybHODVpjtEKKtwD5RAeRc6JY4xbamm583TvIP4edEvSEbkHtCS%2BQuFnMUxM3kBDemeEQOp%2F4%2FLd%2FdHQTzE%2B%2BRL3QwAkxzk%2FBMuo9Vnnzscymxycyl2gL47%2Bx4q4iZRh5vTTmrtDouwbf5Ytr15bs4pLGjNW13vqjackWTeCpniYz8TDzi79YKD2xbSuP2CSm1pe22shd5I78nDmFOEYMQS5m3yublMcbS6c9AQngzkpGFRJDGuwMTY11SFW10drOP6knY7f9tyuA56cjatfP9u0VXW3zgu8%2FwESZCdR5CaJ98IWUO5lK7AS8yidiH3SF7ncIFYA%2Bh6O7XH4o3PN%2FQpGSeG3eOeH00IMKsb7fQbmimZEwB7jkDIKXICcsjUf3j3CM%2FD%2FiohrswgEKHdDqoUJ%2FaSknhHsV63GsS6Sk4Rh64fQqQb%2FPVxaHZsnQ0jcVnJByF8QdMzX42KfOFu38kB6d98RJsz6PtMDVpgi5lhbbeZ5KGKTu%2BKK2HckzOy6RmFmfAqUGoEaDrOVU6DGxe2nKjww4pvgUmNug4nqufdPGt4MoSMAQpVLiOSlvQtT4H5mEmn5petp8%2F6qCO3Qtbta326ceSTcr6nKzrmmmfBrPywvzh17o4SuT8u7LZ4Qk0cPoR%2BylbYw8%2BPDvwY6pgHELRl9as9jahRMxUe7BPlEFy5eHNoX165WrbAtA2mqI%2BWJb0Nz05A5yj%2F5ZKfl6sPqaO7jyiWfxssjKb4Tgx2e4B%2BaQBQmQ0BOHa6TIwZ7OUyiB0cpi8%2BsHog48nOsGF4VeVcciW7EO1dvbiKTPLxHkQxD9IoO6hXAdyAk2f2mD3tXw6FeBM1V1fwrmqRrPyj1ZhqA2YABqSM%2BoB4A6oadiJ6bMNWo&X-Amz-Signature=0719f64fdb7172c4c0e9db9a11575b3d6c14a855d86740b45059cefaef595d7c&X-Amz-SignedHeaders=host&x-id=GetObject)
