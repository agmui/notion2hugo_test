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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQGGQRIK%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIEWADxLPHkT5E41R25j9Cg1qsZflI%2FQbpNdv2qaA91YnAiA4LUS94dALaUBWd1gM%2BDy5UualS5dfXsMDZjuphn03qSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6DuDk0uuuFJaidzhKtwD3tbdELbsMJsJDC46e6qwEuqP%2Bq9dveh15O5Vk5oZ2I3MnwUc8X5IaclGEatO%2Bjdst%2FOVBqd88h2K5UQCN8caPx2SZdV2asGy27XwTP3XI%2FetArcKh3g3buqrtlfZWyRZ5TYH8V02QsQQ2hmzgSx3xeK6gRfUx5jwhe37pwz6wbVB0RhRaW5QqiehBsJBd7TD30gTROMFicMl4XL3LPm53psIu4bjEcOgv%2FwJ2N2U7jeDHL4XuvsPEXvgo1EfqP%2BVqZ%2Fndmv3zRly%2FxplNIPbuFE4uvbQiioUdM3kQe31g1OMLxX2VlNq%2BPtEcBbjtnft6diEpCyE64hENTMt6rtXh1vt4J61KZFivHF3Gzd71VCCtVb1t8DObQ19JvpMUuEM7nHamlz3QXDCiFo%2BffH7KfqNw0%2FvHrl89WbnjFDjLNukcAGeHDofoj1zKj7cQ3DOTLjShhZ%2F%2FDmY1ltwIOPxCmmza5I5%2FvwNeSL1mS%2FvTmYfCKWZ%2FXVImHVwAjBWoXvc5arTiByVSe0BizX4g%2F4PyrULJDcD2wfrJDBMQ0lTggTVSEF4Kfb6t03VkgdcqreGvJfYbm8%2B8s3hXiy3kcJFUkz0zBR1YpMrq9ibQzR0J9lmCBQ55GUcHPrCjdsw67vWvQY6pgG55UokGUYYwwbDm4bRqhjDFsUBlmU%2F%2Fyj6DbJB7OpUVrPFF5Xs7w8rQ%2F3XU2dOwFvQspYmn45Sg2IClF57cuRJbl1983GiR2ksB5VdIhocKCPfbEF7T8YBplKniQXRPj1JMAVg%2F%2FDpoRkdGhIDmbnEYCUF%2FR7%2Bn8ia2Y6K9YZvF8JDGbRV%2F%2BrM0vSRRUrYDgh7DY2krpnd%2Bbe64rfB5jneYaufMzqz&X-Amz-Signature=a09119f857ad9a5fa13087b5d7b91406b87be47d3bd13f8dd043a084cd819f50&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQGGQRIK%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIEWADxLPHkT5E41R25j9Cg1qsZflI%2FQbpNdv2qaA91YnAiA4LUS94dALaUBWd1gM%2BDy5UualS5dfXsMDZjuphn03qSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6DuDk0uuuFJaidzhKtwD3tbdELbsMJsJDC46e6qwEuqP%2Bq9dveh15O5Vk5oZ2I3MnwUc8X5IaclGEatO%2Bjdst%2FOVBqd88h2K5UQCN8caPx2SZdV2asGy27XwTP3XI%2FetArcKh3g3buqrtlfZWyRZ5TYH8V02QsQQ2hmzgSx3xeK6gRfUx5jwhe37pwz6wbVB0RhRaW5QqiehBsJBd7TD30gTROMFicMl4XL3LPm53psIu4bjEcOgv%2FwJ2N2U7jeDHL4XuvsPEXvgo1EfqP%2BVqZ%2Fndmv3zRly%2FxplNIPbuFE4uvbQiioUdM3kQe31g1OMLxX2VlNq%2BPtEcBbjtnft6diEpCyE64hENTMt6rtXh1vt4J61KZFivHF3Gzd71VCCtVb1t8DObQ19JvpMUuEM7nHamlz3QXDCiFo%2BffH7KfqNw0%2FvHrl89WbnjFDjLNukcAGeHDofoj1zKj7cQ3DOTLjShhZ%2F%2FDmY1ltwIOPxCmmza5I5%2FvwNeSL1mS%2FvTmYfCKWZ%2FXVImHVwAjBWoXvc5arTiByVSe0BizX4g%2F4PyrULJDcD2wfrJDBMQ0lTggTVSEF4Kfb6t03VkgdcqreGvJfYbm8%2B8s3hXiy3kcJFUkz0zBR1YpMrq9ibQzR0J9lmCBQ55GUcHPrCjdsw67vWvQY6pgG55UokGUYYwwbDm4bRqhjDFsUBlmU%2F%2Fyj6DbJB7OpUVrPFF5Xs7w8rQ%2F3XU2dOwFvQspYmn45Sg2IClF57cuRJbl1983GiR2ksB5VdIhocKCPfbEF7T8YBplKniQXRPj1JMAVg%2F%2FDpoRkdGhIDmbnEYCUF%2FR7%2Bn8ia2Y6K9YZvF8JDGbRV%2F%2BrM0vSRRUrYDgh7DY2krpnd%2Bbe64rfB5jneYaufMzqz&X-Amz-Signature=0bf609e818d6b350b91092f4f86bed08d4a6e692ec5ccae9653078aeaac22c9d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQGGQRIK%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIEWADxLPHkT5E41R25j9Cg1qsZflI%2FQbpNdv2qaA91YnAiA4LUS94dALaUBWd1gM%2BDy5UualS5dfXsMDZjuphn03qSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6DuDk0uuuFJaidzhKtwD3tbdELbsMJsJDC46e6qwEuqP%2Bq9dveh15O5Vk5oZ2I3MnwUc8X5IaclGEatO%2Bjdst%2FOVBqd88h2K5UQCN8caPx2SZdV2asGy27XwTP3XI%2FetArcKh3g3buqrtlfZWyRZ5TYH8V02QsQQ2hmzgSx3xeK6gRfUx5jwhe37pwz6wbVB0RhRaW5QqiehBsJBd7TD30gTROMFicMl4XL3LPm53psIu4bjEcOgv%2FwJ2N2U7jeDHL4XuvsPEXvgo1EfqP%2BVqZ%2Fndmv3zRly%2FxplNIPbuFE4uvbQiioUdM3kQe31g1OMLxX2VlNq%2BPtEcBbjtnft6diEpCyE64hENTMt6rtXh1vt4J61KZFivHF3Gzd71VCCtVb1t8DObQ19JvpMUuEM7nHamlz3QXDCiFo%2BffH7KfqNw0%2FvHrl89WbnjFDjLNukcAGeHDofoj1zKj7cQ3DOTLjShhZ%2F%2FDmY1ltwIOPxCmmza5I5%2FvwNeSL1mS%2FvTmYfCKWZ%2FXVImHVwAjBWoXvc5arTiByVSe0BizX4g%2F4PyrULJDcD2wfrJDBMQ0lTggTVSEF4Kfb6t03VkgdcqreGvJfYbm8%2B8s3hXiy3kcJFUkz0zBR1YpMrq9ibQzR0J9lmCBQ55GUcHPrCjdsw67vWvQY6pgG55UokGUYYwwbDm4bRqhjDFsUBlmU%2F%2Fyj6DbJB7OpUVrPFF5Xs7w8rQ%2F3XU2dOwFvQspYmn45Sg2IClF57cuRJbl1983GiR2ksB5VdIhocKCPfbEF7T8YBplKniQXRPj1JMAVg%2F%2FDpoRkdGhIDmbnEYCUF%2FR7%2Bn8ia2Y6K9YZvF8JDGbRV%2F%2BrM0vSRRUrYDgh7DY2krpnd%2Bbe64rfB5jneYaufMzqz&X-Amz-Signature=bbbaaa75fb69583a7f2ac727255b6695cc0af79ae25976017598dbf07f6dc959&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQGGQRIK%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIEWADxLPHkT5E41R25j9Cg1qsZflI%2FQbpNdv2qaA91YnAiA4LUS94dALaUBWd1gM%2BDy5UualS5dfXsMDZjuphn03qSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6DuDk0uuuFJaidzhKtwD3tbdELbsMJsJDC46e6qwEuqP%2Bq9dveh15O5Vk5oZ2I3MnwUc8X5IaclGEatO%2Bjdst%2FOVBqd88h2K5UQCN8caPx2SZdV2asGy27XwTP3XI%2FetArcKh3g3buqrtlfZWyRZ5TYH8V02QsQQ2hmzgSx3xeK6gRfUx5jwhe37pwz6wbVB0RhRaW5QqiehBsJBd7TD30gTROMFicMl4XL3LPm53psIu4bjEcOgv%2FwJ2N2U7jeDHL4XuvsPEXvgo1EfqP%2BVqZ%2Fndmv3zRly%2FxplNIPbuFE4uvbQiioUdM3kQe31g1OMLxX2VlNq%2BPtEcBbjtnft6diEpCyE64hENTMt6rtXh1vt4J61KZFivHF3Gzd71VCCtVb1t8DObQ19JvpMUuEM7nHamlz3QXDCiFo%2BffH7KfqNw0%2FvHrl89WbnjFDjLNukcAGeHDofoj1zKj7cQ3DOTLjShhZ%2F%2FDmY1ltwIOPxCmmza5I5%2FvwNeSL1mS%2FvTmYfCKWZ%2FXVImHVwAjBWoXvc5arTiByVSe0BizX4g%2F4PyrULJDcD2wfrJDBMQ0lTggTVSEF4Kfb6t03VkgdcqreGvJfYbm8%2B8s3hXiy3kcJFUkz0zBR1YpMrq9ibQzR0J9lmCBQ55GUcHPrCjdsw67vWvQY6pgG55UokGUYYwwbDm4bRqhjDFsUBlmU%2F%2Fyj6DbJB7OpUVrPFF5Xs7w8rQ%2F3XU2dOwFvQspYmn45Sg2IClF57cuRJbl1983GiR2ksB5VdIhocKCPfbEF7T8YBplKniQXRPj1JMAVg%2F%2FDpoRkdGhIDmbnEYCUF%2FR7%2Bn8ia2Y6K9YZvF8JDGbRV%2F%2BrM0vSRRUrYDgh7DY2krpnd%2Bbe64rfB5jneYaufMzqz&X-Amz-Signature=3cd5b79613e05cc7d93c1d9733741410bab39da5e61de0936363da018d00f54a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQGGQRIK%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIEWADxLPHkT5E41R25j9Cg1qsZflI%2FQbpNdv2qaA91YnAiA4LUS94dALaUBWd1gM%2BDy5UualS5dfXsMDZjuphn03qSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6DuDk0uuuFJaidzhKtwD3tbdELbsMJsJDC46e6qwEuqP%2Bq9dveh15O5Vk5oZ2I3MnwUc8X5IaclGEatO%2Bjdst%2FOVBqd88h2K5UQCN8caPx2SZdV2asGy27XwTP3XI%2FetArcKh3g3buqrtlfZWyRZ5TYH8V02QsQQ2hmzgSx3xeK6gRfUx5jwhe37pwz6wbVB0RhRaW5QqiehBsJBd7TD30gTROMFicMl4XL3LPm53psIu4bjEcOgv%2FwJ2N2U7jeDHL4XuvsPEXvgo1EfqP%2BVqZ%2Fndmv3zRly%2FxplNIPbuFE4uvbQiioUdM3kQe31g1OMLxX2VlNq%2BPtEcBbjtnft6diEpCyE64hENTMt6rtXh1vt4J61KZFivHF3Gzd71VCCtVb1t8DObQ19JvpMUuEM7nHamlz3QXDCiFo%2BffH7KfqNw0%2FvHrl89WbnjFDjLNukcAGeHDofoj1zKj7cQ3DOTLjShhZ%2F%2FDmY1ltwIOPxCmmza5I5%2FvwNeSL1mS%2FvTmYfCKWZ%2FXVImHVwAjBWoXvc5arTiByVSe0BizX4g%2F4PyrULJDcD2wfrJDBMQ0lTggTVSEF4Kfb6t03VkgdcqreGvJfYbm8%2B8s3hXiy3kcJFUkz0zBR1YpMrq9ibQzR0J9lmCBQ55GUcHPrCjdsw67vWvQY6pgG55UokGUYYwwbDm4bRqhjDFsUBlmU%2F%2Fyj6DbJB7OpUVrPFF5Xs7w8rQ%2F3XU2dOwFvQspYmn45Sg2IClF57cuRJbl1983GiR2ksB5VdIhocKCPfbEF7T8YBplKniQXRPj1JMAVg%2F%2FDpoRkdGhIDmbnEYCUF%2FR7%2Bn8ia2Y6K9YZvF8JDGbRV%2F%2BrM0vSRRUrYDgh7DY2krpnd%2Bbe64rfB5jneYaufMzqz&X-Amz-Signature=a11fd3bc28f59f7b6e2d40eecda3efbc018e1003d802d0773252b18c2b751fae&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQGGQRIK%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T090828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIEWADxLPHkT5E41R25j9Cg1qsZflI%2FQbpNdv2qaA91YnAiA4LUS94dALaUBWd1gM%2BDy5UualS5dfXsMDZjuphn03qSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6DuDk0uuuFJaidzhKtwD3tbdELbsMJsJDC46e6qwEuqP%2Bq9dveh15O5Vk5oZ2I3MnwUc8X5IaclGEatO%2Bjdst%2FOVBqd88h2K5UQCN8caPx2SZdV2asGy27XwTP3XI%2FetArcKh3g3buqrtlfZWyRZ5TYH8V02QsQQ2hmzgSx3xeK6gRfUx5jwhe37pwz6wbVB0RhRaW5QqiehBsJBd7TD30gTROMFicMl4XL3LPm53psIu4bjEcOgv%2FwJ2N2U7jeDHL4XuvsPEXvgo1EfqP%2BVqZ%2Fndmv3zRly%2FxplNIPbuFE4uvbQiioUdM3kQe31g1OMLxX2VlNq%2BPtEcBbjtnft6diEpCyE64hENTMt6rtXh1vt4J61KZFivHF3Gzd71VCCtVb1t8DObQ19JvpMUuEM7nHamlz3QXDCiFo%2BffH7KfqNw0%2FvHrl89WbnjFDjLNukcAGeHDofoj1zKj7cQ3DOTLjShhZ%2F%2FDmY1ltwIOPxCmmza5I5%2FvwNeSL1mS%2FvTmYfCKWZ%2FXVImHVwAjBWoXvc5arTiByVSe0BizX4g%2F4PyrULJDcD2wfrJDBMQ0lTggTVSEF4Kfb6t03VkgdcqreGvJfYbm8%2B8s3hXiy3kcJFUkz0zBR1YpMrq9ibQzR0J9lmCBQ55GUcHPrCjdsw67vWvQY6pgG55UokGUYYwwbDm4bRqhjDFsUBlmU%2F%2Fyj6DbJB7OpUVrPFF5Xs7w8rQ%2F3XU2dOwFvQspYmn45Sg2IClF57cuRJbl1983GiR2ksB5VdIhocKCPfbEF7T8YBplKniQXRPj1JMAVg%2F%2FDpoRkdGhIDmbnEYCUF%2FR7%2Bn8ia2Y6K9YZvF8JDGbRV%2F%2BrM0vSRRUrYDgh7DY2krpnd%2Bbe64rfB5jneYaufMzqz&X-Amz-Signature=33545fabaf12c1564dd30b50b1adf030a1ca591f31abb686b07a060fcac18fbf&X-Amz-SignedHeaders=host&x-id=GetObject)
