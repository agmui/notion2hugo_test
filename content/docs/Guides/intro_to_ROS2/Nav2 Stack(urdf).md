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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RFTYQ2I%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T050906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqzQDNpIGYjHvOr6mn7RDOXu%2F9PmLLEd0vWSA5nmQq4gIhAIaaTn607mysYe7ELyImwxVOfH4NWXzsJ3ZSS2O%2BQEjUKv8DCFUQABoMNjM3NDIzMTgzODA1Igw8w5xzlaQe21oCRC4q3AMNTbrJ2AA40z5hTZvJ0tH%2F%2FuG%2BL%2FsofLDgwu7hY1We%2FPe8WISl9xojdWNUVGRAValmLth0uCSoOP1yaus2t0R5oLKmCpwMAHAw7EIrWh2WzIB5fip%2Bp7ifi12lvpchFcAnqWLMeU1C9JxPkeaqy6dBPhyU9Arlhl0IFPXCtrc2UI99Pir6XUEi5byfVMKab3j%2BDwGCfdM5GBwwWsGfwuecaD%2F%2Bf4F3L8ylRDRA5LoJ4BnsjcW05ajcXczOYr47eoZ38PCFqeSsUEuiQDw%2BeX6leh%2By0oqoGV4P59NCqswkhFOmS6kZexAN7M%2F62JpnlUMriFHIqfFx0VFrTu%2FM2%2BjSP40xNIuIcvRaAwGbL0FIFh%2FMsgrhrdUMbQSWZSt7CEkexUmfN6FTzJ8HDezgf55qyCjwBtIaVlN%2FeLw%2F53COi0THADE0KyQDG8XUFwAqBWNiQmaoA3ySuU0IXlV%2FDZWJg5rLrBzLpQPeEEigqSfICcUVQCjt1sAFapTZbFIB%2BHmM3upNiI1XLY6Hk3gdW9P1rj81QROy1Kb9uY8HANHTVi5Zz71nnFvsZSHiILtMdFxOrA0YhZeHjd%2FTnCw8w6ppQG9ZXoFlrbIf2DGZ7pEDKG32szIdNc6sdh5RCzCP6OO%2BBjqkAZvzceYZ9901fVAUhikSzRZi%2BuaD8CqYkuGhAKgV6laapb139Yy5Z1vSisVfwTjqjCN4wX24EE%2FQl4EF2g7MTwBdIB26rNrKnc0osj6vie%2BgyuR2UZjtDIR%2FU%2FYq8sYxgU77KSYYww3Y43l7QqvjOybc%2BdYas5gdfKrY9dC3erKDsEZqIRWIUvx5lvPyRjT578LURRJiucMdGY0Ri9MHnCPxMoC5&X-Amz-Signature=1e0384d2611293493fb4511658711de6a20eeec5989edd5419633f55ed1acf60&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RFTYQ2I%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T050906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqzQDNpIGYjHvOr6mn7RDOXu%2F9PmLLEd0vWSA5nmQq4gIhAIaaTn607mysYe7ELyImwxVOfH4NWXzsJ3ZSS2O%2BQEjUKv8DCFUQABoMNjM3NDIzMTgzODA1Igw8w5xzlaQe21oCRC4q3AMNTbrJ2AA40z5hTZvJ0tH%2F%2FuG%2BL%2FsofLDgwu7hY1We%2FPe8WISl9xojdWNUVGRAValmLth0uCSoOP1yaus2t0R5oLKmCpwMAHAw7EIrWh2WzIB5fip%2Bp7ifi12lvpchFcAnqWLMeU1C9JxPkeaqy6dBPhyU9Arlhl0IFPXCtrc2UI99Pir6XUEi5byfVMKab3j%2BDwGCfdM5GBwwWsGfwuecaD%2F%2Bf4F3L8ylRDRA5LoJ4BnsjcW05ajcXczOYr47eoZ38PCFqeSsUEuiQDw%2BeX6leh%2By0oqoGV4P59NCqswkhFOmS6kZexAN7M%2F62JpnlUMriFHIqfFx0VFrTu%2FM2%2BjSP40xNIuIcvRaAwGbL0FIFh%2FMsgrhrdUMbQSWZSt7CEkexUmfN6FTzJ8HDezgf55qyCjwBtIaVlN%2FeLw%2F53COi0THADE0KyQDG8XUFwAqBWNiQmaoA3ySuU0IXlV%2FDZWJg5rLrBzLpQPeEEigqSfICcUVQCjt1sAFapTZbFIB%2BHmM3upNiI1XLY6Hk3gdW9P1rj81QROy1Kb9uY8HANHTVi5Zz71nnFvsZSHiILtMdFxOrA0YhZeHjd%2FTnCw8w6ppQG9ZXoFlrbIf2DGZ7pEDKG32szIdNc6sdh5RCzCP6OO%2BBjqkAZvzceYZ9901fVAUhikSzRZi%2BuaD8CqYkuGhAKgV6laapb139Yy5Z1vSisVfwTjqjCN4wX24EE%2FQl4EF2g7MTwBdIB26rNrKnc0osj6vie%2BgyuR2UZjtDIR%2FU%2FYq8sYxgU77KSYYww3Y43l7QqvjOybc%2BdYas5gdfKrY9dC3erKDsEZqIRWIUvx5lvPyRjT578LURRJiucMdGY0Ri9MHnCPxMoC5&X-Amz-Signature=bd50ee94fdd6cad64c07877d5cabc2ac0b682ddac7759e97185fb9d56588cd00&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RFTYQ2I%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T050906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqzQDNpIGYjHvOr6mn7RDOXu%2F9PmLLEd0vWSA5nmQq4gIhAIaaTn607mysYe7ELyImwxVOfH4NWXzsJ3ZSS2O%2BQEjUKv8DCFUQABoMNjM3NDIzMTgzODA1Igw8w5xzlaQe21oCRC4q3AMNTbrJ2AA40z5hTZvJ0tH%2F%2FuG%2BL%2FsofLDgwu7hY1We%2FPe8WISl9xojdWNUVGRAValmLth0uCSoOP1yaus2t0R5oLKmCpwMAHAw7EIrWh2WzIB5fip%2Bp7ifi12lvpchFcAnqWLMeU1C9JxPkeaqy6dBPhyU9Arlhl0IFPXCtrc2UI99Pir6XUEi5byfVMKab3j%2BDwGCfdM5GBwwWsGfwuecaD%2F%2Bf4F3L8ylRDRA5LoJ4BnsjcW05ajcXczOYr47eoZ38PCFqeSsUEuiQDw%2BeX6leh%2By0oqoGV4P59NCqswkhFOmS6kZexAN7M%2F62JpnlUMriFHIqfFx0VFrTu%2FM2%2BjSP40xNIuIcvRaAwGbL0FIFh%2FMsgrhrdUMbQSWZSt7CEkexUmfN6FTzJ8HDezgf55qyCjwBtIaVlN%2FeLw%2F53COi0THADE0KyQDG8XUFwAqBWNiQmaoA3ySuU0IXlV%2FDZWJg5rLrBzLpQPeEEigqSfICcUVQCjt1sAFapTZbFIB%2BHmM3upNiI1XLY6Hk3gdW9P1rj81QROy1Kb9uY8HANHTVi5Zz71nnFvsZSHiILtMdFxOrA0YhZeHjd%2FTnCw8w6ppQG9ZXoFlrbIf2DGZ7pEDKG32szIdNc6sdh5RCzCP6OO%2BBjqkAZvzceYZ9901fVAUhikSzRZi%2BuaD8CqYkuGhAKgV6laapb139Yy5Z1vSisVfwTjqjCN4wX24EE%2FQl4EF2g7MTwBdIB26rNrKnc0osj6vie%2BgyuR2UZjtDIR%2FU%2FYq8sYxgU77KSYYww3Y43l7QqvjOybc%2BdYas5gdfKrY9dC3erKDsEZqIRWIUvx5lvPyRjT578LURRJiucMdGY0Ri9MHnCPxMoC5&X-Amz-Signature=e9a212493deed660a872b867a07160d28cb186e78636243d3f97130b2233394f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RFTYQ2I%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T050906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqzQDNpIGYjHvOr6mn7RDOXu%2F9PmLLEd0vWSA5nmQq4gIhAIaaTn607mysYe7ELyImwxVOfH4NWXzsJ3ZSS2O%2BQEjUKv8DCFUQABoMNjM3NDIzMTgzODA1Igw8w5xzlaQe21oCRC4q3AMNTbrJ2AA40z5hTZvJ0tH%2F%2FuG%2BL%2FsofLDgwu7hY1We%2FPe8WISl9xojdWNUVGRAValmLth0uCSoOP1yaus2t0R5oLKmCpwMAHAw7EIrWh2WzIB5fip%2Bp7ifi12lvpchFcAnqWLMeU1C9JxPkeaqy6dBPhyU9Arlhl0IFPXCtrc2UI99Pir6XUEi5byfVMKab3j%2BDwGCfdM5GBwwWsGfwuecaD%2F%2Bf4F3L8ylRDRA5LoJ4BnsjcW05ajcXczOYr47eoZ38PCFqeSsUEuiQDw%2BeX6leh%2By0oqoGV4P59NCqswkhFOmS6kZexAN7M%2F62JpnlUMriFHIqfFx0VFrTu%2FM2%2BjSP40xNIuIcvRaAwGbL0FIFh%2FMsgrhrdUMbQSWZSt7CEkexUmfN6FTzJ8HDezgf55qyCjwBtIaVlN%2FeLw%2F53COi0THADE0KyQDG8XUFwAqBWNiQmaoA3ySuU0IXlV%2FDZWJg5rLrBzLpQPeEEigqSfICcUVQCjt1sAFapTZbFIB%2BHmM3upNiI1XLY6Hk3gdW9P1rj81QROy1Kb9uY8HANHTVi5Zz71nnFvsZSHiILtMdFxOrA0YhZeHjd%2FTnCw8w6ppQG9ZXoFlrbIf2DGZ7pEDKG32szIdNc6sdh5RCzCP6OO%2BBjqkAZvzceYZ9901fVAUhikSzRZi%2BuaD8CqYkuGhAKgV6laapb139Yy5Z1vSisVfwTjqjCN4wX24EE%2FQl4EF2g7MTwBdIB26rNrKnc0osj6vie%2BgyuR2UZjtDIR%2FU%2FYq8sYxgU77KSYYww3Y43l7QqvjOybc%2BdYas5gdfKrY9dC3erKDsEZqIRWIUvx5lvPyRjT578LURRJiucMdGY0Ri9MHnCPxMoC5&X-Amz-Signature=61c1ceb5f30468569f158813adc6379714d329939c76ca393482532731321921&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RFTYQ2I%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T050906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqzQDNpIGYjHvOr6mn7RDOXu%2F9PmLLEd0vWSA5nmQq4gIhAIaaTn607mysYe7ELyImwxVOfH4NWXzsJ3ZSS2O%2BQEjUKv8DCFUQABoMNjM3NDIzMTgzODA1Igw8w5xzlaQe21oCRC4q3AMNTbrJ2AA40z5hTZvJ0tH%2F%2FuG%2BL%2FsofLDgwu7hY1We%2FPe8WISl9xojdWNUVGRAValmLth0uCSoOP1yaus2t0R5oLKmCpwMAHAw7EIrWh2WzIB5fip%2Bp7ifi12lvpchFcAnqWLMeU1C9JxPkeaqy6dBPhyU9Arlhl0IFPXCtrc2UI99Pir6XUEi5byfVMKab3j%2BDwGCfdM5GBwwWsGfwuecaD%2F%2Bf4F3L8ylRDRA5LoJ4BnsjcW05ajcXczOYr47eoZ38PCFqeSsUEuiQDw%2BeX6leh%2By0oqoGV4P59NCqswkhFOmS6kZexAN7M%2F62JpnlUMriFHIqfFx0VFrTu%2FM2%2BjSP40xNIuIcvRaAwGbL0FIFh%2FMsgrhrdUMbQSWZSt7CEkexUmfN6FTzJ8HDezgf55qyCjwBtIaVlN%2FeLw%2F53COi0THADE0KyQDG8XUFwAqBWNiQmaoA3ySuU0IXlV%2FDZWJg5rLrBzLpQPeEEigqSfICcUVQCjt1sAFapTZbFIB%2BHmM3upNiI1XLY6Hk3gdW9P1rj81QROy1Kb9uY8HANHTVi5Zz71nnFvsZSHiILtMdFxOrA0YhZeHjd%2FTnCw8w6ppQG9ZXoFlrbIf2DGZ7pEDKG32szIdNc6sdh5RCzCP6OO%2BBjqkAZvzceYZ9901fVAUhikSzRZi%2BuaD8CqYkuGhAKgV6laapb139Yy5Z1vSisVfwTjqjCN4wX24EE%2FQl4EF2g7MTwBdIB26rNrKnc0osj6vie%2BgyuR2UZjtDIR%2FU%2FYq8sYxgU77KSYYww3Y43l7QqvjOybc%2BdYas5gdfKrY9dC3erKDsEZqIRWIUvx5lvPyRjT578LURRJiucMdGY0Ri9MHnCPxMoC5&X-Amz-Signature=2f600627a721af60cd8120b9c089d6dc997dc826e42704cff3674bc00c2d2f22&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RFTYQ2I%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T050906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqzQDNpIGYjHvOr6mn7RDOXu%2F9PmLLEd0vWSA5nmQq4gIhAIaaTn607mysYe7ELyImwxVOfH4NWXzsJ3ZSS2O%2BQEjUKv8DCFUQABoMNjM3NDIzMTgzODA1Igw8w5xzlaQe21oCRC4q3AMNTbrJ2AA40z5hTZvJ0tH%2F%2FuG%2BL%2FsofLDgwu7hY1We%2FPe8WISl9xojdWNUVGRAValmLth0uCSoOP1yaus2t0R5oLKmCpwMAHAw7EIrWh2WzIB5fip%2Bp7ifi12lvpchFcAnqWLMeU1C9JxPkeaqy6dBPhyU9Arlhl0IFPXCtrc2UI99Pir6XUEi5byfVMKab3j%2BDwGCfdM5GBwwWsGfwuecaD%2F%2Bf4F3L8ylRDRA5LoJ4BnsjcW05ajcXczOYr47eoZ38PCFqeSsUEuiQDw%2BeX6leh%2By0oqoGV4P59NCqswkhFOmS6kZexAN7M%2F62JpnlUMriFHIqfFx0VFrTu%2FM2%2BjSP40xNIuIcvRaAwGbL0FIFh%2FMsgrhrdUMbQSWZSt7CEkexUmfN6FTzJ8HDezgf55qyCjwBtIaVlN%2FeLw%2F53COi0THADE0KyQDG8XUFwAqBWNiQmaoA3ySuU0IXlV%2FDZWJg5rLrBzLpQPeEEigqSfICcUVQCjt1sAFapTZbFIB%2BHmM3upNiI1XLY6Hk3gdW9P1rj81QROy1Kb9uY8HANHTVi5Zz71nnFvsZSHiILtMdFxOrA0YhZeHjd%2FTnCw8w6ppQG9ZXoFlrbIf2DGZ7pEDKG32szIdNc6sdh5RCzCP6OO%2BBjqkAZvzceYZ9901fVAUhikSzRZi%2BuaD8CqYkuGhAKgV6laapb139Yy5Z1vSisVfwTjqjCN4wX24EE%2FQl4EF2g7MTwBdIB26rNrKnc0osj6vie%2BgyuR2UZjtDIR%2FU%2FYq8sYxgU77KSYYww3Y43l7QqvjOybc%2BdYas5gdfKrY9dC3erKDsEZqIRWIUvx5lvPyRjT578LURRJiucMdGY0Ri9MHnCPxMoC5&X-Amz-Signature=23f723ea69a00f816c385efe222e3b4a2777abdc22cc0f7711b99bb439a336ba&X-Amz-SignedHeaders=host&x-id=GetObject)
