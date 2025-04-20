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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ4FZWW3%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T040952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCLPkX8ikBfgWb9cAM86fWyPwOHj1A%2FaYwVrd4qascdFwIgQE6bMFGWJY6uDHP8faPe1KSt%2Bhem9%2B5ceveGBoMGD7AqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBq%2BYH8t0ulm8%2BQ7NSrcA8sLNpTlSm9%2BvZN4BX8Y5hwupjQmvLSwyoKhtecnw2Cfh49KlSCtxJZDfQ42%2FyOX3VuTwj3qAgfD53GyO6p4N4N8hARBUzxf6HcDhlw0UJDBzatD5IsRHkQCDfd%2BShvAKXCQfNj82gVDDkib2gEsNOCsSpOqngB4Rnsusv2PsFKguRK%2B2yVrNrXETK3rGufu0%2Bekn2pkUB2ya22gL%2FfiSCBA9LopUSuZPSlbTJe4EsuISpQgVEs9gKl9RbaaioRItu6i6dI5LuDEkEpfHQGpoGX%2FMewbKaGiWB1M5%2Fkwa14pgc4wIEpFfRX%2Bq4Enw3yuHu704Bhi5U9BjoZ3EzBCE3WEsszpRV%2FCkwxp9d%2F6PLZrgGZKBVB%2BrEFsWR6O5LfcYaepQpFJ0gRvGdTy%2BXnWkaGrtjpOnJKCTFVa%2FczfytPH9%2FHIaV00YArf5FKd4GcIIhXUa1eW4R%2BvJN%2BjDjgTRzzZXQhaHXSergtDnTs%2FPFZo4xFD%2BQT2GA%2BHVCJbTl0BBpXiwjrKh4SQ28eLGrJqIrjLAe3FydMEZEFcVLlqxJh5OXVBTf6a6BpcVzsdj9q7oFh3DzAYheJlPnDCGegv6Nyrl%2B%2BSOOuaFdo%2BsiXyA865U1VpKQ3ATTqwYRUzMPmBkcAGOqUBQ%2FeUk53PqQYDeHsIL3SlKsPm1Pe8MvWXC9tZh0ic36cYsqN7Ra06AF1btQCckxGoyuoj7gzseuEnR3zxToB1QxK6SwFNRnVZq%2Bhp8Mv5aCL5J77Q%2FK7vmp4WtGUXWP%2Bopq4IrllkUdTuHb3yDeFK0IjILScPNAtLHksijpnciUpjyYxxK3T8P%2Fr9vT%2B8CfPtqMwv8lSZBm178P%2FoxVvMxYsy%2Bbnp&X-Amz-Signature=949595fc8d7352bcf23af7f316db9f08daab796c78a94c9b854f0bd664c16526&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ4FZWW3%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T040952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCLPkX8ikBfgWb9cAM86fWyPwOHj1A%2FaYwVrd4qascdFwIgQE6bMFGWJY6uDHP8faPe1KSt%2Bhem9%2B5ceveGBoMGD7AqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBq%2BYH8t0ulm8%2BQ7NSrcA8sLNpTlSm9%2BvZN4BX8Y5hwupjQmvLSwyoKhtecnw2Cfh49KlSCtxJZDfQ42%2FyOX3VuTwj3qAgfD53GyO6p4N4N8hARBUzxf6HcDhlw0UJDBzatD5IsRHkQCDfd%2BShvAKXCQfNj82gVDDkib2gEsNOCsSpOqngB4Rnsusv2PsFKguRK%2B2yVrNrXETK3rGufu0%2Bekn2pkUB2ya22gL%2FfiSCBA9LopUSuZPSlbTJe4EsuISpQgVEs9gKl9RbaaioRItu6i6dI5LuDEkEpfHQGpoGX%2FMewbKaGiWB1M5%2Fkwa14pgc4wIEpFfRX%2Bq4Enw3yuHu704Bhi5U9BjoZ3EzBCE3WEsszpRV%2FCkwxp9d%2F6PLZrgGZKBVB%2BrEFsWR6O5LfcYaepQpFJ0gRvGdTy%2BXnWkaGrtjpOnJKCTFVa%2FczfytPH9%2FHIaV00YArf5FKd4GcIIhXUa1eW4R%2BvJN%2BjDjgTRzzZXQhaHXSergtDnTs%2FPFZo4xFD%2BQT2GA%2BHVCJbTl0BBpXiwjrKh4SQ28eLGrJqIrjLAe3FydMEZEFcVLlqxJh5OXVBTf6a6BpcVzsdj9q7oFh3DzAYheJlPnDCGegv6Nyrl%2B%2BSOOuaFdo%2BsiXyA865U1VpKQ3ATTqwYRUzMPmBkcAGOqUBQ%2FeUk53PqQYDeHsIL3SlKsPm1Pe8MvWXC9tZh0ic36cYsqN7Ra06AF1btQCckxGoyuoj7gzseuEnR3zxToB1QxK6SwFNRnVZq%2Bhp8Mv5aCL5J77Q%2FK7vmp4WtGUXWP%2Bopq4IrllkUdTuHb3yDeFK0IjILScPNAtLHksijpnciUpjyYxxK3T8P%2Fr9vT%2B8CfPtqMwv8lSZBm178P%2FoxVvMxYsy%2Bbnp&X-Amz-Signature=a8d35fc9debd439035dbaffab5c82d4550430d572b3b488470006fbca3f49fd0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ4FZWW3%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T040952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCLPkX8ikBfgWb9cAM86fWyPwOHj1A%2FaYwVrd4qascdFwIgQE6bMFGWJY6uDHP8faPe1KSt%2Bhem9%2B5ceveGBoMGD7AqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBq%2BYH8t0ulm8%2BQ7NSrcA8sLNpTlSm9%2BvZN4BX8Y5hwupjQmvLSwyoKhtecnw2Cfh49KlSCtxJZDfQ42%2FyOX3VuTwj3qAgfD53GyO6p4N4N8hARBUzxf6HcDhlw0UJDBzatD5IsRHkQCDfd%2BShvAKXCQfNj82gVDDkib2gEsNOCsSpOqngB4Rnsusv2PsFKguRK%2B2yVrNrXETK3rGufu0%2Bekn2pkUB2ya22gL%2FfiSCBA9LopUSuZPSlbTJe4EsuISpQgVEs9gKl9RbaaioRItu6i6dI5LuDEkEpfHQGpoGX%2FMewbKaGiWB1M5%2Fkwa14pgc4wIEpFfRX%2Bq4Enw3yuHu704Bhi5U9BjoZ3EzBCE3WEsszpRV%2FCkwxp9d%2F6PLZrgGZKBVB%2BrEFsWR6O5LfcYaepQpFJ0gRvGdTy%2BXnWkaGrtjpOnJKCTFVa%2FczfytPH9%2FHIaV00YArf5FKd4GcIIhXUa1eW4R%2BvJN%2BjDjgTRzzZXQhaHXSergtDnTs%2FPFZo4xFD%2BQT2GA%2BHVCJbTl0BBpXiwjrKh4SQ28eLGrJqIrjLAe3FydMEZEFcVLlqxJh5OXVBTf6a6BpcVzsdj9q7oFh3DzAYheJlPnDCGegv6Nyrl%2B%2BSOOuaFdo%2BsiXyA865U1VpKQ3ATTqwYRUzMPmBkcAGOqUBQ%2FeUk53PqQYDeHsIL3SlKsPm1Pe8MvWXC9tZh0ic36cYsqN7Ra06AF1btQCckxGoyuoj7gzseuEnR3zxToB1QxK6SwFNRnVZq%2Bhp8Mv5aCL5J77Q%2FK7vmp4WtGUXWP%2Bopq4IrllkUdTuHb3yDeFK0IjILScPNAtLHksijpnciUpjyYxxK3T8P%2Fr9vT%2B8CfPtqMwv8lSZBm178P%2FoxVvMxYsy%2Bbnp&X-Amz-Signature=ae32f0aadb81dd1970914673bec045d7b172856a67912183a2bdbb74e0cbf3b2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ4FZWW3%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T040952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCLPkX8ikBfgWb9cAM86fWyPwOHj1A%2FaYwVrd4qascdFwIgQE6bMFGWJY6uDHP8faPe1KSt%2Bhem9%2B5ceveGBoMGD7AqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBq%2BYH8t0ulm8%2BQ7NSrcA8sLNpTlSm9%2BvZN4BX8Y5hwupjQmvLSwyoKhtecnw2Cfh49KlSCtxJZDfQ42%2FyOX3VuTwj3qAgfD53GyO6p4N4N8hARBUzxf6HcDhlw0UJDBzatD5IsRHkQCDfd%2BShvAKXCQfNj82gVDDkib2gEsNOCsSpOqngB4Rnsusv2PsFKguRK%2B2yVrNrXETK3rGufu0%2Bekn2pkUB2ya22gL%2FfiSCBA9LopUSuZPSlbTJe4EsuISpQgVEs9gKl9RbaaioRItu6i6dI5LuDEkEpfHQGpoGX%2FMewbKaGiWB1M5%2Fkwa14pgc4wIEpFfRX%2Bq4Enw3yuHu704Bhi5U9BjoZ3EzBCE3WEsszpRV%2FCkwxp9d%2F6PLZrgGZKBVB%2BrEFsWR6O5LfcYaepQpFJ0gRvGdTy%2BXnWkaGrtjpOnJKCTFVa%2FczfytPH9%2FHIaV00YArf5FKd4GcIIhXUa1eW4R%2BvJN%2BjDjgTRzzZXQhaHXSergtDnTs%2FPFZo4xFD%2BQT2GA%2BHVCJbTl0BBpXiwjrKh4SQ28eLGrJqIrjLAe3FydMEZEFcVLlqxJh5OXVBTf6a6BpcVzsdj9q7oFh3DzAYheJlPnDCGegv6Nyrl%2B%2BSOOuaFdo%2BsiXyA865U1VpKQ3ATTqwYRUzMPmBkcAGOqUBQ%2FeUk53PqQYDeHsIL3SlKsPm1Pe8MvWXC9tZh0ic36cYsqN7Ra06AF1btQCckxGoyuoj7gzseuEnR3zxToB1QxK6SwFNRnVZq%2Bhp8Mv5aCL5J77Q%2FK7vmp4WtGUXWP%2Bopq4IrllkUdTuHb3yDeFK0IjILScPNAtLHksijpnciUpjyYxxK3T8P%2Fr9vT%2B8CfPtqMwv8lSZBm178P%2FoxVvMxYsy%2Bbnp&X-Amz-Signature=44b5aa3874dfb00ca494b7776f15a111b4d3597f1288467ad8a3a20186025b7f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ4FZWW3%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T040952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCLPkX8ikBfgWb9cAM86fWyPwOHj1A%2FaYwVrd4qascdFwIgQE6bMFGWJY6uDHP8faPe1KSt%2Bhem9%2B5ceveGBoMGD7AqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBq%2BYH8t0ulm8%2BQ7NSrcA8sLNpTlSm9%2BvZN4BX8Y5hwupjQmvLSwyoKhtecnw2Cfh49KlSCtxJZDfQ42%2FyOX3VuTwj3qAgfD53GyO6p4N4N8hARBUzxf6HcDhlw0UJDBzatD5IsRHkQCDfd%2BShvAKXCQfNj82gVDDkib2gEsNOCsSpOqngB4Rnsusv2PsFKguRK%2B2yVrNrXETK3rGufu0%2Bekn2pkUB2ya22gL%2FfiSCBA9LopUSuZPSlbTJe4EsuISpQgVEs9gKl9RbaaioRItu6i6dI5LuDEkEpfHQGpoGX%2FMewbKaGiWB1M5%2Fkwa14pgc4wIEpFfRX%2Bq4Enw3yuHu704Bhi5U9BjoZ3EzBCE3WEsszpRV%2FCkwxp9d%2F6PLZrgGZKBVB%2BrEFsWR6O5LfcYaepQpFJ0gRvGdTy%2BXnWkaGrtjpOnJKCTFVa%2FczfytPH9%2FHIaV00YArf5FKd4GcIIhXUa1eW4R%2BvJN%2BjDjgTRzzZXQhaHXSergtDnTs%2FPFZo4xFD%2BQT2GA%2BHVCJbTl0BBpXiwjrKh4SQ28eLGrJqIrjLAe3FydMEZEFcVLlqxJh5OXVBTf6a6BpcVzsdj9q7oFh3DzAYheJlPnDCGegv6Nyrl%2B%2BSOOuaFdo%2BsiXyA865U1VpKQ3ATTqwYRUzMPmBkcAGOqUBQ%2FeUk53PqQYDeHsIL3SlKsPm1Pe8MvWXC9tZh0ic36cYsqN7Ra06AF1btQCckxGoyuoj7gzseuEnR3zxToB1QxK6SwFNRnVZq%2Bhp8Mv5aCL5J77Q%2FK7vmp4WtGUXWP%2Bopq4IrllkUdTuHb3yDeFK0IjILScPNAtLHksijpnciUpjyYxxK3T8P%2Fr9vT%2B8CfPtqMwv8lSZBm178P%2FoxVvMxYsy%2Bbnp&X-Amz-Signature=70da87c94fb689f78e877f1ea36e2bc6a81e8bc8e0b93caa48f3255430226dac&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZ4FZWW3%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T040952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCLPkX8ikBfgWb9cAM86fWyPwOHj1A%2FaYwVrd4qascdFwIgQE6bMFGWJY6uDHP8faPe1KSt%2Bhem9%2B5ceveGBoMGD7AqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBq%2BYH8t0ulm8%2BQ7NSrcA8sLNpTlSm9%2BvZN4BX8Y5hwupjQmvLSwyoKhtecnw2Cfh49KlSCtxJZDfQ42%2FyOX3VuTwj3qAgfD53GyO6p4N4N8hARBUzxf6HcDhlw0UJDBzatD5IsRHkQCDfd%2BShvAKXCQfNj82gVDDkib2gEsNOCsSpOqngB4Rnsusv2PsFKguRK%2B2yVrNrXETK3rGufu0%2Bekn2pkUB2ya22gL%2FfiSCBA9LopUSuZPSlbTJe4EsuISpQgVEs9gKl9RbaaioRItu6i6dI5LuDEkEpfHQGpoGX%2FMewbKaGiWB1M5%2Fkwa14pgc4wIEpFfRX%2Bq4Enw3yuHu704Bhi5U9BjoZ3EzBCE3WEsszpRV%2FCkwxp9d%2F6PLZrgGZKBVB%2BrEFsWR6O5LfcYaepQpFJ0gRvGdTy%2BXnWkaGrtjpOnJKCTFVa%2FczfytPH9%2FHIaV00YArf5FKd4GcIIhXUa1eW4R%2BvJN%2BjDjgTRzzZXQhaHXSergtDnTs%2FPFZo4xFD%2BQT2GA%2BHVCJbTl0BBpXiwjrKh4SQ28eLGrJqIrjLAe3FydMEZEFcVLlqxJh5OXVBTf6a6BpcVzsdj9q7oFh3DzAYheJlPnDCGegv6Nyrl%2B%2BSOOuaFdo%2BsiXyA865U1VpKQ3ATTqwYRUzMPmBkcAGOqUBQ%2FeUk53PqQYDeHsIL3SlKsPm1Pe8MvWXC9tZh0ic36cYsqN7Ra06AF1btQCckxGoyuoj7gzseuEnR3zxToB1QxK6SwFNRnVZq%2Bhp8Mv5aCL5J77Q%2FK7vmp4WtGUXWP%2Bopq4IrllkUdTuHb3yDeFK0IjILScPNAtLHksijpnciUpjyYxxK3T8P%2Fr9vT%2B8CfPtqMwv8lSZBm178P%2FoxVvMxYsy%2Bbnp&X-Amz-Signature=85d4f914d61e9c5b9eccadd220a65ddeedc7fb201f6a83d08d523cfec9e0b562&X-Amz-SignedHeaders=host&x-id=GetObject)
