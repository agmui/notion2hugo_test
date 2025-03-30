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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVEUEVHO%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T230711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDuQ2%2BJl1DtFAIDtRs23YnAO4EnvUiD%2F8%2BOPhJFSAX4sAiEA9vak3IW2Q6ZSrROPDFTpf41%2BKj1qZUKDo%2BfeHZ34khUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNyrYZbhmkx4MK8grCrcA8FMTy04nnvvE9of4%2F6hNP2%2FTIi3KFSM41wXKLCaJ%2F8PQYwSpHHbYEclCVqJd7CNmW2AwdjJoashBSuaLQH%2FwsuPnqucH1zNesPNTPZonZMfEPUsYwVnuvnU9A1YzVR8gOBxLBEQpp%2Br2qD98CPCaZsE9ZEKWbprR0jNmxqpD7IZQJaZ6jwuHrGuP0pCAcjk%2FSDFJiK69QdJ7I1JkF04C1v6pTcN4eyN3nuaf7V2%2BDpH%2FDKo8rdpuXRzwSr7YwGOcPUkzpSJegqkqihv3dr807qWeWQdo0dxGHAxMqva4P4ckwNWGY74g%2BA4nc%2F%2BHqKvQ1yoeosiXrPA1hms4BgAeKITAxO0GLl%2BEOh5EzQrocihAOEn46KL49HwTlade2zaloFggi5VGDPphZumivkLCdkyQJ%2BJvZa88n%2Bw%2BO5H1cfCqKYsJGDjbmM%2FzV4rLue%2BGblTGNNLOsZQot7AmYjk9%2BMGX4p5TKSgJy0uc2TesOPwDut24IkxV8aDMT8b5w11LpCt5xL%2BnHs5sUvtSpWeQKk05hJkuwbKcuMWGboJev98DoMMn6beb4QFWpJRVErzeVjPeGjsno4cEicL9Aw563rxZTOZeWzXWDRrfR3IWYGOGA4wra4ch39Ml0mvMPCFp78GOqUBKqdJ0h6khEA4lYPll8IybydoaCWE3XAy0DAtbvVJIymM4ZmHWw129edDsBI62F5WUsuXC%2Bq23YLn96vgdmvSk9D5GutMU1JmKgqBBHU9bveoiiC2h4v6LPkOgl85q3LkGQXvX%2F0cavIqjz8CLp5kvD8cBV7YFP4R9iYwbJFRsPmfV37oSVHLwz9shmKGr%2B6%2FnKXW0JZusz0NclYimw3Nqf65EPVg&X-Amz-Signature=1f094877b59e6082eb24d283bf89063971df68e314c90faa357c9d95b2d2410e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVEUEVHO%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T230711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDuQ2%2BJl1DtFAIDtRs23YnAO4EnvUiD%2F8%2BOPhJFSAX4sAiEA9vak3IW2Q6ZSrROPDFTpf41%2BKj1qZUKDo%2BfeHZ34khUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNyrYZbhmkx4MK8grCrcA8FMTy04nnvvE9of4%2F6hNP2%2FTIi3KFSM41wXKLCaJ%2F8PQYwSpHHbYEclCVqJd7CNmW2AwdjJoashBSuaLQH%2FwsuPnqucH1zNesPNTPZonZMfEPUsYwVnuvnU9A1YzVR8gOBxLBEQpp%2Br2qD98CPCaZsE9ZEKWbprR0jNmxqpD7IZQJaZ6jwuHrGuP0pCAcjk%2FSDFJiK69QdJ7I1JkF04C1v6pTcN4eyN3nuaf7V2%2BDpH%2FDKo8rdpuXRzwSr7YwGOcPUkzpSJegqkqihv3dr807qWeWQdo0dxGHAxMqva4P4ckwNWGY74g%2BA4nc%2F%2BHqKvQ1yoeosiXrPA1hms4BgAeKITAxO0GLl%2BEOh5EzQrocihAOEn46KL49HwTlade2zaloFggi5VGDPphZumivkLCdkyQJ%2BJvZa88n%2Bw%2BO5H1cfCqKYsJGDjbmM%2FzV4rLue%2BGblTGNNLOsZQot7AmYjk9%2BMGX4p5TKSgJy0uc2TesOPwDut24IkxV8aDMT8b5w11LpCt5xL%2BnHs5sUvtSpWeQKk05hJkuwbKcuMWGboJev98DoMMn6beb4QFWpJRVErzeVjPeGjsno4cEicL9Aw563rxZTOZeWzXWDRrfR3IWYGOGA4wra4ch39Ml0mvMPCFp78GOqUBKqdJ0h6khEA4lYPll8IybydoaCWE3XAy0DAtbvVJIymM4ZmHWw129edDsBI62F5WUsuXC%2Bq23YLn96vgdmvSk9D5GutMU1JmKgqBBHU9bveoiiC2h4v6LPkOgl85q3LkGQXvX%2F0cavIqjz8CLp5kvD8cBV7YFP4R9iYwbJFRsPmfV37oSVHLwz9shmKGr%2B6%2FnKXW0JZusz0NclYimw3Nqf65EPVg&X-Amz-Signature=c150810947c9fbed1c44e55093966ecc5cfacfa746db4ffcb592f7cea27d75c5&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVEUEVHO%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T230711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDuQ2%2BJl1DtFAIDtRs23YnAO4EnvUiD%2F8%2BOPhJFSAX4sAiEA9vak3IW2Q6ZSrROPDFTpf41%2BKj1qZUKDo%2BfeHZ34khUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNyrYZbhmkx4MK8grCrcA8FMTy04nnvvE9of4%2F6hNP2%2FTIi3KFSM41wXKLCaJ%2F8PQYwSpHHbYEclCVqJd7CNmW2AwdjJoashBSuaLQH%2FwsuPnqucH1zNesPNTPZonZMfEPUsYwVnuvnU9A1YzVR8gOBxLBEQpp%2Br2qD98CPCaZsE9ZEKWbprR0jNmxqpD7IZQJaZ6jwuHrGuP0pCAcjk%2FSDFJiK69QdJ7I1JkF04C1v6pTcN4eyN3nuaf7V2%2BDpH%2FDKo8rdpuXRzwSr7YwGOcPUkzpSJegqkqihv3dr807qWeWQdo0dxGHAxMqva4P4ckwNWGY74g%2BA4nc%2F%2BHqKvQ1yoeosiXrPA1hms4BgAeKITAxO0GLl%2BEOh5EzQrocihAOEn46KL49HwTlade2zaloFggi5VGDPphZumivkLCdkyQJ%2BJvZa88n%2Bw%2BO5H1cfCqKYsJGDjbmM%2FzV4rLue%2BGblTGNNLOsZQot7AmYjk9%2BMGX4p5TKSgJy0uc2TesOPwDut24IkxV8aDMT8b5w11LpCt5xL%2BnHs5sUvtSpWeQKk05hJkuwbKcuMWGboJev98DoMMn6beb4QFWpJRVErzeVjPeGjsno4cEicL9Aw563rxZTOZeWzXWDRrfR3IWYGOGA4wra4ch39Ml0mvMPCFp78GOqUBKqdJ0h6khEA4lYPll8IybydoaCWE3XAy0DAtbvVJIymM4ZmHWw129edDsBI62F5WUsuXC%2Bq23YLn96vgdmvSk9D5GutMU1JmKgqBBHU9bveoiiC2h4v6LPkOgl85q3LkGQXvX%2F0cavIqjz8CLp5kvD8cBV7YFP4R9iYwbJFRsPmfV37oSVHLwz9shmKGr%2B6%2FnKXW0JZusz0NclYimw3Nqf65EPVg&X-Amz-Signature=fc48548ad021c2fba12ce372a49956a7b18dc1805ea82c26c1576b01c4c5f4d1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVEUEVHO%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T230711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDuQ2%2BJl1DtFAIDtRs23YnAO4EnvUiD%2F8%2BOPhJFSAX4sAiEA9vak3IW2Q6ZSrROPDFTpf41%2BKj1qZUKDo%2BfeHZ34khUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNyrYZbhmkx4MK8grCrcA8FMTy04nnvvE9of4%2F6hNP2%2FTIi3KFSM41wXKLCaJ%2F8PQYwSpHHbYEclCVqJd7CNmW2AwdjJoashBSuaLQH%2FwsuPnqucH1zNesPNTPZonZMfEPUsYwVnuvnU9A1YzVR8gOBxLBEQpp%2Br2qD98CPCaZsE9ZEKWbprR0jNmxqpD7IZQJaZ6jwuHrGuP0pCAcjk%2FSDFJiK69QdJ7I1JkF04C1v6pTcN4eyN3nuaf7V2%2BDpH%2FDKo8rdpuXRzwSr7YwGOcPUkzpSJegqkqihv3dr807qWeWQdo0dxGHAxMqva4P4ckwNWGY74g%2BA4nc%2F%2BHqKvQ1yoeosiXrPA1hms4BgAeKITAxO0GLl%2BEOh5EzQrocihAOEn46KL49HwTlade2zaloFggi5VGDPphZumivkLCdkyQJ%2BJvZa88n%2Bw%2BO5H1cfCqKYsJGDjbmM%2FzV4rLue%2BGblTGNNLOsZQot7AmYjk9%2BMGX4p5TKSgJy0uc2TesOPwDut24IkxV8aDMT8b5w11LpCt5xL%2BnHs5sUvtSpWeQKk05hJkuwbKcuMWGboJev98DoMMn6beb4QFWpJRVErzeVjPeGjsno4cEicL9Aw563rxZTOZeWzXWDRrfR3IWYGOGA4wra4ch39Ml0mvMPCFp78GOqUBKqdJ0h6khEA4lYPll8IybydoaCWE3XAy0DAtbvVJIymM4ZmHWw129edDsBI62F5WUsuXC%2Bq23YLn96vgdmvSk9D5GutMU1JmKgqBBHU9bveoiiC2h4v6LPkOgl85q3LkGQXvX%2F0cavIqjz8CLp5kvD8cBV7YFP4R9iYwbJFRsPmfV37oSVHLwz9shmKGr%2B6%2FnKXW0JZusz0NclYimw3Nqf65EPVg&X-Amz-Signature=669fab3e5d528457066dfde5ed4cd1630d40f637c68e017e65969668d86bfb05&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVEUEVHO%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T230711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDuQ2%2BJl1DtFAIDtRs23YnAO4EnvUiD%2F8%2BOPhJFSAX4sAiEA9vak3IW2Q6ZSrROPDFTpf41%2BKj1qZUKDo%2BfeHZ34khUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNyrYZbhmkx4MK8grCrcA8FMTy04nnvvE9of4%2F6hNP2%2FTIi3KFSM41wXKLCaJ%2F8PQYwSpHHbYEclCVqJd7CNmW2AwdjJoashBSuaLQH%2FwsuPnqucH1zNesPNTPZonZMfEPUsYwVnuvnU9A1YzVR8gOBxLBEQpp%2Br2qD98CPCaZsE9ZEKWbprR0jNmxqpD7IZQJaZ6jwuHrGuP0pCAcjk%2FSDFJiK69QdJ7I1JkF04C1v6pTcN4eyN3nuaf7V2%2BDpH%2FDKo8rdpuXRzwSr7YwGOcPUkzpSJegqkqihv3dr807qWeWQdo0dxGHAxMqva4P4ckwNWGY74g%2BA4nc%2F%2BHqKvQ1yoeosiXrPA1hms4BgAeKITAxO0GLl%2BEOh5EzQrocihAOEn46KL49HwTlade2zaloFggi5VGDPphZumivkLCdkyQJ%2BJvZa88n%2Bw%2BO5H1cfCqKYsJGDjbmM%2FzV4rLue%2BGblTGNNLOsZQot7AmYjk9%2BMGX4p5TKSgJy0uc2TesOPwDut24IkxV8aDMT8b5w11LpCt5xL%2BnHs5sUvtSpWeQKk05hJkuwbKcuMWGboJev98DoMMn6beb4QFWpJRVErzeVjPeGjsno4cEicL9Aw563rxZTOZeWzXWDRrfR3IWYGOGA4wra4ch39Ml0mvMPCFp78GOqUBKqdJ0h6khEA4lYPll8IybydoaCWE3XAy0DAtbvVJIymM4ZmHWw129edDsBI62F5WUsuXC%2Bq23YLn96vgdmvSk9D5GutMU1JmKgqBBHU9bveoiiC2h4v6LPkOgl85q3LkGQXvX%2F0cavIqjz8CLp5kvD8cBV7YFP4R9iYwbJFRsPmfV37oSVHLwz9shmKGr%2B6%2FnKXW0JZusz0NclYimw3Nqf65EPVg&X-Amz-Signature=81f6fde5ed1033d96180b18505bffb41110fde96bbb89a7ce88cbf0c3d452867&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVEUEVHO%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T230711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDuQ2%2BJl1DtFAIDtRs23YnAO4EnvUiD%2F8%2BOPhJFSAX4sAiEA9vak3IW2Q6ZSrROPDFTpf41%2BKj1qZUKDo%2BfeHZ34khUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNyrYZbhmkx4MK8grCrcA8FMTy04nnvvE9of4%2F6hNP2%2FTIi3KFSM41wXKLCaJ%2F8PQYwSpHHbYEclCVqJd7CNmW2AwdjJoashBSuaLQH%2FwsuPnqucH1zNesPNTPZonZMfEPUsYwVnuvnU9A1YzVR8gOBxLBEQpp%2Br2qD98CPCaZsE9ZEKWbprR0jNmxqpD7IZQJaZ6jwuHrGuP0pCAcjk%2FSDFJiK69QdJ7I1JkF04C1v6pTcN4eyN3nuaf7V2%2BDpH%2FDKo8rdpuXRzwSr7YwGOcPUkzpSJegqkqihv3dr807qWeWQdo0dxGHAxMqva4P4ckwNWGY74g%2BA4nc%2F%2BHqKvQ1yoeosiXrPA1hms4BgAeKITAxO0GLl%2BEOh5EzQrocihAOEn46KL49HwTlade2zaloFggi5VGDPphZumivkLCdkyQJ%2BJvZa88n%2Bw%2BO5H1cfCqKYsJGDjbmM%2FzV4rLue%2BGblTGNNLOsZQot7AmYjk9%2BMGX4p5TKSgJy0uc2TesOPwDut24IkxV8aDMT8b5w11LpCt5xL%2BnHs5sUvtSpWeQKk05hJkuwbKcuMWGboJev98DoMMn6beb4QFWpJRVErzeVjPeGjsno4cEicL9Aw563rxZTOZeWzXWDRrfR3IWYGOGA4wra4ch39Ml0mvMPCFp78GOqUBKqdJ0h6khEA4lYPll8IybydoaCWE3XAy0DAtbvVJIymM4ZmHWw129edDsBI62F5WUsuXC%2Bq23YLn96vgdmvSk9D5GutMU1JmKgqBBHU9bveoiiC2h4v6LPkOgl85q3LkGQXvX%2F0cavIqjz8CLp5kvD8cBV7YFP4R9iYwbJFRsPmfV37oSVHLwz9shmKGr%2B6%2FnKXW0JZusz0NclYimw3Nqf65EPVg&X-Amz-Signature=2abeb3a77b82658d82165160fd89e0c7f246e746cc2bcef113a133f823bca964&X-Amz-SignedHeaders=host&x-id=GetObject)
