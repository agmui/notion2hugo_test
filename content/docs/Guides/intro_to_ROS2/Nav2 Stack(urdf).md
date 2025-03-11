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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FKYY4PG%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDPNhcY5IAhGkAsYtGBk5KEfuvr0W4oHGZCgKjvGa1zEgIgHtrW%2BD68MaTchz%2Baj69u2dPrszSCOsFDG%2BlKIkTyX9AqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgxeuaXB6Cqd64BDCrcA62KN8cV2E4Y5IzhCerEqW9dJkDZjjZIPc8qiqohDe%2BaAg%2B%2FTyFaMPGNtM3Z1DrUhX9DOywBh%2F8bqxHWqQ5FL5ryn9QndWQoMAhdgmib5X0ZfvO4nXUVP77A0DrGWmTiVkc6WJu3qz0Pwn1G%2BXTpCLpJju4nUiVb48KpKJ5dgXj5J6mEJRbxLYxITsidQZfw4Q0PJwXJhB301kP058wRidaZBIcrzfeIonSgJxbLR4jE88NDblg1DXlGwAtPvs2HA8D7KK%2Bh5auPazJKhduC90wn%2FQbdwPfpFuy3EAjKaYmKsIEa1Q5o4esg%2BC6R%2FaYXwaV60mKdJQ9%2F5rKo0w46fykCHB3WdKKCh6eaqnoCtcDKv%2BkgX2c5ajFHKJP5k%2B5g0gmXn5nJ8OS3WDPmzqYSxb%2BevzM7fOu6EBWoDBI1s3LXikE57TRO0iUY4AzwiwFf9gUxg2O0rawdLVVI%2B7SaxTi4qxgP%2FsQolbXTwgm%2BQznog4T6A2def39B2Wpgbka2QcAK31tRO4%2BeR%2Fx7yrNd7%2FNriG5%2FPfVGu%2BczLImNSa89cvUOCHvTzd8JHOtujtHCtGCRoHecTS59RZoAD%2Fd%2B2yyEuvV7Tc0nGzNf8NGrO4qITs15jVrQg36%2FALduMJ6Qwr4GOqUBHSbYZ%2Bo2wFmDQAwsDGccJ6Nn%2FyM6jNt%2B0EnM%2BhSpG4cWoFIfP6jxjnG2wQz3uihY1kUymiGlrmmnyKaqMA%2Frq%2FJA98svajD4CiD8cBKvsqDj6CX0wUAsFXR4jdqTAJkaDXjdYJbnk%2BKl3nbF5tjmvNa5b63%2FsuCDif8g0Wszv1KkiZyjxE9W2iYstCNUxVHdZKCz76oNv2FlM4NyHQTI0%2BhT6NXZ&X-Amz-Signature=bcc057dcb7d7068c16f340852f9af6053746e4709c1e9413b2b5ca34eba468d1&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FKYY4PG%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDPNhcY5IAhGkAsYtGBk5KEfuvr0W4oHGZCgKjvGa1zEgIgHtrW%2BD68MaTchz%2Baj69u2dPrszSCOsFDG%2BlKIkTyX9AqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgxeuaXB6Cqd64BDCrcA62KN8cV2E4Y5IzhCerEqW9dJkDZjjZIPc8qiqohDe%2BaAg%2B%2FTyFaMPGNtM3Z1DrUhX9DOywBh%2F8bqxHWqQ5FL5ryn9QndWQoMAhdgmib5X0ZfvO4nXUVP77A0DrGWmTiVkc6WJu3qz0Pwn1G%2BXTpCLpJju4nUiVb48KpKJ5dgXj5J6mEJRbxLYxITsidQZfw4Q0PJwXJhB301kP058wRidaZBIcrzfeIonSgJxbLR4jE88NDblg1DXlGwAtPvs2HA8D7KK%2Bh5auPazJKhduC90wn%2FQbdwPfpFuy3EAjKaYmKsIEa1Q5o4esg%2BC6R%2FaYXwaV60mKdJQ9%2F5rKo0w46fykCHB3WdKKCh6eaqnoCtcDKv%2BkgX2c5ajFHKJP5k%2B5g0gmXn5nJ8OS3WDPmzqYSxb%2BevzM7fOu6EBWoDBI1s3LXikE57TRO0iUY4AzwiwFf9gUxg2O0rawdLVVI%2B7SaxTi4qxgP%2FsQolbXTwgm%2BQznog4T6A2def39B2Wpgbka2QcAK31tRO4%2BeR%2Fx7yrNd7%2FNriG5%2FPfVGu%2BczLImNSa89cvUOCHvTzd8JHOtujtHCtGCRoHecTS59RZoAD%2Fd%2B2yyEuvV7Tc0nGzNf8NGrO4qITs15jVrQg36%2FALduMJ6Qwr4GOqUBHSbYZ%2Bo2wFmDQAwsDGccJ6Nn%2FyM6jNt%2B0EnM%2BhSpG4cWoFIfP6jxjnG2wQz3uihY1kUymiGlrmmnyKaqMA%2Frq%2FJA98svajD4CiD8cBKvsqDj6CX0wUAsFXR4jdqTAJkaDXjdYJbnk%2BKl3nbF5tjmvNa5b63%2FsuCDif8g0Wszv1KkiZyjxE9W2iYstCNUxVHdZKCz76oNv2FlM4NyHQTI0%2BhT6NXZ&X-Amz-Signature=753a11289b06bb1990124be394fb14a223b718c72ff337dd507f96e3dc27fca8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FKYY4PG%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDPNhcY5IAhGkAsYtGBk5KEfuvr0W4oHGZCgKjvGa1zEgIgHtrW%2BD68MaTchz%2Baj69u2dPrszSCOsFDG%2BlKIkTyX9AqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgxeuaXB6Cqd64BDCrcA62KN8cV2E4Y5IzhCerEqW9dJkDZjjZIPc8qiqohDe%2BaAg%2B%2FTyFaMPGNtM3Z1DrUhX9DOywBh%2F8bqxHWqQ5FL5ryn9QndWQoMAhdgmib5X0ZfvO4nXUVP77A0DrGWmTiVkc6WJu3qz0Pwn1G%2BXTpCLpJju4nUiVb48KpKJ5dgXj5J6mEJRbxLYxITsidQZfw4Q0PJwXJhB301kP058wRidaZBIcrzfeIonSgJxbLR4jE88NDblg1DXlGwAtPvs2HA8D7KK%2Bh5auPazJKhduC90wn%2FQbdwPfpFuy3EAjKaYmKsIEa1Q5o4esg%2BC6R%2FaYXwaV60mKdJQ9%2F5rKo0w46fykCHB3WdKKCh6eaqnoCtcDKv%2BkgX2c5ajFHKJP5k%2B5g0gmXn5nJ8OS3WDPmzqYSxb%2BevzM7fOu6EBWoDBI1s3LXikE57TRO0iUY4AzwiwFf9gUxg2O0rawdLVVI%2B7SaxTi4qxgP%2FsQolbXTwgm%2BQznog4T6A2def39B2Wpgbka2QcAK31tRO4%2BeR%2Fx7yrNd7%2FNriG5%2FPfVGu%2BczLImNSa89cvUOCHvTzd8JHOtujtHCtGCRoHecTS59RZoAD%2Fd%2B2yyEuvV7Tc0nGzNf8NGrO4qITs15jVrQg36%2FALduMJ6Qwr4GOqUBHSbYZ%2Bo2wFmDQAwsDGccJ6Nn%2FyM6jNt%2B0EnM%2BhSpG4cWoFIfP6jxjnG2wQz3uihY1kUymiGlrmmnyKaqMA%2Frq%2FJA98svajD4CiD8cBKvsqDj6CX0wUAsFXR4jdqTAJkaDXjdYJbnk%2BKl3nbF5tjmvNa5b63%2FsuCDif8g0Wszv1KkiZyjxE9W2iYstCNUxVHdZKCz76oNv2FlM4NyHQTI0%2BhT6NXZ&X-Amz-Signature=85519b95ddfe9240346393d55e80644d93c74a27f2fa0cd1b00cf77a7ce5ef84&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FKYY4PG%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDPNhcY5IAhGkAsYtGBk5KEfuvr0W4oHGZCgKjvGa1zEgIgHtrW%2BD68MaTchz%2Baj69u2dPrszSCOsFDG%2BlKIkTyX9AqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgxeuaXB6Cqd64BDCrcA62KN8cV2E4Y5IzhCerEqW9dJkDZjjZIPc8qiqohDe%2BaAg%2B%2FTyFaMPGNtM3Z1DrUhX9DOywBh%2F8bqxHWqQ5FL5ryn9QndWQoMAhdgmib5X0ZfvO4nXUVP77A0DrGWmTiVkc6WJu3qz0Pwn1G%2BXTpCLpJju4nUiVb48KpKJ5dgXj5J6mEJRbxLYxITsidQZfw4Q0PJwXJhB301kP058wRidaZBIcrzfeIonSgJxbLR4jE88NDblg1DXlGwAtPvs2HA8D7KK%2Bh5auPazJKhduC90wn%2FQbdwPfpFuy3EAjKaYmKsIEa1Q5o4esg%2BC6R%2FaYXwaV60mKdJQ9%2F5rKo0w46fykCHB3WdKKCh6eaqnoCtcDKv%2BkgX2c5ajFHKJP5k%2B5g0gmXn5nJ8OS3WDPmzqYSxb%2BevzM7fOu6EBWoDBI1s3LXikE57TRO0iUY4AzwiwFf9gUxg2O0rawdLVVI%2B7SaxTi4qxgP%2FsQolbXTwgm%2BQznog4T6A2def39B2Wpgbka2QcAK31tRO4%2BeR%2Fx7yrNd7%2FNriG5%2FPfVGu%2BczLImNSa89cvUOCHvTzd8JHOtujtHCtGCRoHecTS59RZoAD%2Fd%2B2yyEuvV7Tc0nGzNf8NGrO4qITs15jVrQg36%2FALduMJ6Qwr4GOqUBHSbYZ%2Bo2wFmDQAwsDGccJ6Nn%2FyM6jNt%2B0EnM%2BhSpG4cWoFIfP6jxjnG2wQz3uihY1kUymiGlrmmnyKaqMA%2Frq%2FJA98svajD4CiD8cBKvsqDj6CX0wUAsFXR4jdqTAJkaDXjdYJbnk%2BKl3nbF5tjmvNa5b63%2FsuCDif8g0Wszv1KkiZyjxE9W2iYstCNUxVHdZKCz76oNv2FlM4NyHQTI0%2BhT6NXZ&X-Amz-Signature=b5e69414574cb67cf81c145b4eb9a1ec31cb78bb2300e2f94262fbfff0d74c56&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FKYY4PG%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDPNhcY5IAhGkAsYtGBk5KEfuvr0W4oHGZCgKjvGa1zEgIgHtrW%2BD68MaTchz%2Baj69u2dPrszSCOsFDG%2BlKIkTyX9AqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgxeuaXB6Cqd64BDCrcA62KN8cV2E4Y5IzhCerEqW9dJkDZjjZIPc8qiqohDe%2BaAg%2B%2FTyFaMPGNtM3Z1DrUhX9DOywBh%2F8bqxHWqQ5FL5ryn9QndWQoMAhdgmib5X0ZfvO4nXUVP77A0DrGWmTiVkc6WJu3qz0Pwn1G%2BXTpCLpJju4nUiVb48KpKJ5dgXj5J6mEJRbxLYxITsidQZfw4Q0PJwXJhB301kP058wRidaZBIcrzfeIonSgJxbLR4jE88NDblg1DXlGwAtPvs2HA8D7KK%2Bh5auPazJKhduC90wn%2FQbdwPfpFuy3EAjKaYmKsIEa1Q5o4esg%2BC6R%2FaYXwaV60mKdJQ9%2F5rKo0w46fykCHB3WdKKCh6eaqnoCtcDKv%2BkgX2c5ajFHKJP5k%2B5g0gmXn5nJ8OS3WDPmzqYSxb%2BevzM7fOu6EBWoDBI1s3LXikE57TRO0iUY4AzwiwFf9gUxg2O0rawdLVVI%2B7SaxTi4qxgP%2FsQolbXTwgm%2BQznog4T6A2def39B2Wpgbka2QcAK31tRO4%2BeR%2Fx7yrNd7%2FNriG5%2FPfVGu%2BczLImNSa89cvUOCHvTzd8JHOtujtHCtGCRoHecTS59RZoAD%2Fd%2B2yyEuvV7Tc0nGzNf8NGrO4qITs15jVrQg36%2FALduMJ6Qwr4GOqUBHSbYZ%2Bo2wFmDQAwsDGccJ6Nn%2FyM6jNt%2B0EnM%2BhSpG4cWoFIfP6jxjnG2wQz3uihY1kUymiGlrmmnyKaqMA%2Frq%2FJA98svajD4CiD8cBKvsqDj6CX0wUAsFXR4jdqTAJkaDXjdYJbnk%2BKl3nbF5tjmvNa5b63%2FsuCDif8g0Wszv1KkiZyjxE9W2iYstCNUxVHdZKCz76oNv2FlM4NyHQTI0%2BhT6NXZ&X-Amz-Signature=793828dc7c6154ff6eda04ae6a7d9956511cdcf264fd41df98845fcaf748be9a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FKYY4PG%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T190204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDPNhcY5IAhGkAsYtGBk5KEfuvr0W4oHGZCgKjvGa1zEgIgHtrW%2BD68MaTchz%2Baj69u2dPrszSCOsFDG%2BlKIkTyX9AqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHgxeuaXB6Cqd64BDCrcA62KN8cV2E4Y5IzhCerEqW9dJkDZjjZIPc8qiqohDe%2BaAg%2B%2FTyFaMPGNtM3Z1DrUhX9DOywBh%2F8bqxHWqQ5FL5ryn9QndWQoMAhdgmib5X0ZfvO4nXUVP77A0DrGWmTiVkc6WJu3qz0Pwn1G%2BXTpCLpJju4nUiVb48KpKJ5dgXj5J6mEJRbxLYxITsidQZfw4Q0PJwXJhB301kP058wRidaZBIcrzfeIonSgJxbLR4jE88NDblg1DXlGwAtPvs2HA8D7KK%2Bh5auPazJKhduC90wn%2FQbdwPfpFuy3EAjKaYmKsIEa1Q5o4esg%2BC6R%2FaYXwaV60mKdJQ9%2F5rKo0w46fykCHB3WdKKCh6eaqnoCtcDKv%2BkgX2c5ajFHKJP5k%2B5g0gmXn5nJ8OS3WDPmzqYSxb%2BevzM7fOu6EBWoDBI1s3LXikE57TRO0iUY4AzwiwFf9gUxg2O0rawdLVVI%2B7SaxTi4qxgP%2FsQolbXTwgm%2BQznog4T6A2def39B2Wpgbka2QcAK31tRO4%2BeR%2Fx7yrNd7%2FNriG5%2FPfVGu%2BczLImNSa89cvUOCHvTzd8JHOtujtHCtGCRoHecTS59RZoAD%2Fd%2B2yyEuvV7Tc0nGzNf8NGrO4qITs15jVrQg36%2FALduMJ6Qwr4GOqUBHSbYZ%2Bo2wFmDQAwsDGccJ6Nn%2FyM6jNt%2B0EnM%2BhSpG4cWoFIfP6jxjnG2wQz3uihY1kUymiGlrmmnyKaqMA%2Frq%2FJA98svajD4CiD8cBKvsqDj6CX0wUAsFXR4jdqTAJkaDXjdYJbnk%2BKl3nbF5tjmvNa5b63%2FsuCDif8g0Wszv1KkiZyjxE9W2iYstCNUxVHdZKCz76oNv2FlM4NyHQTI0%2BhT6NXZ&X-Amz-Signature=15c27001f9be24f92e53ccb9f4564079d30dd94ed402d7980abcedbc9e7880e6&X-Amz-SignedHeaders=host&x-id=GetObject)
