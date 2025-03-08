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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HGXU27V%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T220143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIEF8S%2FjVdJzYVv3d0KuVW5W26xhwzxH9ZlG%2F6KDSliaPAiBO8C6oFEfysiqPXMFdcicCz7qWD7fMoyLgh2wFySan%2Bir%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMUrMcUWJC%2FkIpkRL6KtwDnSL5xj1JwGk0E8surRLDC61re2R6P8UvYN%2BfdCLfbSMD4mmKaUAT0UomdJHXuyV3D9Gj60Y7w2%2FTFQvqzWzHKWS79eVyohqhD8OJpEAI1Co0s%2BhFc1Cl0z8Pz6h2KgJazk%2FckIyhreDL%2Fd5E2mrugFYReumUEEeD0BleVgltdqX62sTDRjQYmY%2Fl7352kBxmV0thOZ9GS1tJII90sYfKSF8DKKAQIaA5RprmEAsuhWEOmC9L%2BRz3qwAwbzpX1yAEQuOfALLqLSmzoaZtB4Ny2t7KnbGsjN3De7gEKdmErtU2onfIXwz2EKeq%2BcU0g3NiicURdZYN3p6U9Efeh7X4lxmV0UVv4e9JDBqEcuJLUYavRBuFSmuA0EXgQ8Gm1afomnux188gSr4SgYxhk8MRHACxqHjX7aKRqNU3h5XMWDC8Q2ENUFxnT4cE3muFEGgng4c36mdJNMIaJedgBkYeVxbOfLzvXh5XvgiqYzRtOZxRevoBd4i6zK64OZQg9ZOVUkEoeooVGh5M2jPMcjOlwRzAD4jGRHEtoX77icSPMe7NFi3qOHfNHzfaQwYUukvA0j0jM5jnkD2hea0hi8O7yOmoeUJG50tQRS4Ae5RG0%2BK9KOOhgIxkG%2BeQ5Qgw%2B%2FKyvgY6pgEi%2B6g25r2XkQbUCS4RNJ3s6%2FLFHqx21f%2FxbIb8ahJCDUenJJg2gOXjqemLsO02BhPi9EDwnFRXRHNOQLKvS7agwFaDvST2sy1Y6SEhY2dve8C%2Bq8qS%2Fl0EQ5devUucOLS%2BuGby2%2FI5TJhda3NoRelmYflWD7bapJguITaSPR0XOyn8M6q72Gy6jpzistAE4sntoZNC%2Bra2BnJRaiCdw7tHUDEeLg0R&X-Amz-Signature=a8b257f011831bead85c8ce0609681115913b2451ff2ef565c6e798415d36f8c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HGXU27V%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T220143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIEF8S%2FjVdJzYVv3d0KuVW5W26xhwzxH9ZlG%2F6KDSliaPAiBO8C6oFEfysiqPXMFdcicCz7qWD7fMoyLgh2wFySan%2Bir%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMUrMcUWJC%2FkIpkRL6KtwDnSL5xj1JwGk0E8surRLDC61re2R6P8UvYN%2BfdCLfbSMD4mmKaUAT0UomdJHXuyV3D9Gj60Y7w2%2FTFQvqzWzHKWS79eVyohqhD8OJpEAI1Co0s%2BhFc1Cl0z8Pz6h2KgJazk%2FckIyhreDL%2Fd5E2mrugFYReumUEEeD0BleVgltdqX62sTDRjQYmY%2Fl7352kBxmV0thOZ9GS1tJII90sYfKSF8DKKAQIaA5RprmEAsuhWEOmC9L%2BRz3qwAwbzpX1yAEQuOfALLqLSmzoaZtB4Ny2t7KnbGsjN3De7gEKdmErtU2onfIXwz2EKeq%2BcU0g3NiicURdZYN3p6U9Efeh7X4lxmV0UVv4e9JDBqEcuJLUYavRBuFSmuA0EXgQ8Gm1afomnux188gSr4SgYxhk8MRHACxqHjX7aKRqNU3h5XMWDC8Q2ENUFxnT4cE3muFEGgng4c36mdJNMIaJedgBkYeVxbOfLzvXh5XvgiqYzRtOZxRevoBd4i6zK64OZQg9ZOVUkEoeooVGh5M2jPMcjOlwRzAD4jGRHEtoX77icSPMe7NFi3qOHfNHzfaQwYUukvA0j0jM5jnkD2hea0hi8O7yOmoeUJG50tQRS4Ae5RG0%2BK9KOOhgIxkG%2BeQ5Qgw%2B%2FKyvgY6pgEi%2B6g25r2XkQbUCS4RNJ3s6%2FLFHqx21f%2FxbIb8ahJCDUenJJg2gOXjqemLsO02BhPi9EDwnFRXRHNOQLKvS7agwFaDvST2sy1Y6SEhY2dve8C%2Bq8qS%2Fl0EQ5devUucOLS%2BuGby2%2FI5TJhda3NoRelmYflWD7bapJguITaSPR0XOyn8M6q72Gy6jpzistAE4sntoZNC%2Bra2BnJRaiCdw7tHUDEeLg0R&X-Amz-Signature=9c6a53d140976e0c79b4f5931b79808429219e446fd8f5955612674e102a1033&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HGXU27V%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T220143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIEF8S%2FjVdJzYVv3d0KuVW5W26xhwzxH9ZlG%2F6KDSliaPAiBO8C6oFEfysiqPXMFdcicCz7qWD7fMoyLgh2wFySan%2Bir%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMUrMcUWJC%2FkIpkRL6KtwDnSL5xj1JwGk0E8surRLDC61re2R6P8UvYN%2BfdCLfbSMD4mmKaUAT0UomdJHXuyV3D9Gj60Y7w2%2FTFQvqzWzHKWS79eVyohqhD8OJpEAI1Co0s%2BhFc1Cl0z8Pz6h2KgJazk%2FckIyhreDL%2Fd5E2mrugFYReumUEEeD0BleVgltdqX62sTDRjQYmY%2Fl7352kBxmV0thOZ9GS1tJII90sYfKSF8DKKAQIaA5RprmEAsuhWEOmC9L%2BRz3qwAwbzpX1yAEQuOfALLqLSmzoaZtB4Ny2t7KnbGsjN3De7gEKdmErtU2onfIXwz2EKeq%2BcU0g3NiicURdZYN3p6U9Efeh7X4lxmV0UVv4e9JDBqEcuJLUYavRBuFSmuA0EXgQ8Gm1afomnux188gSr4SgYxhk8MRHACxqHjX7aKRqNU3h5XMWDC8Q2ENUFxnT4cE3muFEGgng4c36mdJNMIaJedgBkYeVxbOfLzvXh5XvgiqYzRtOZxRevoBd4i6zK64OZQg9ZOVUkEoeooVGh5M2jPMcjOlwRzAD4jGRHEtoX77icSPMe7NFi3qOHfNHzfaQwYUukvA0j0jM5jnkD2hea0hi8O7yOmoeUJG50tQRS4Ae5RG0%2BK9KOOhgIxkG%2BeQ5Qgw%2B%2FKyvgY6pgEi%2B6g25r2XkQbUCS4RNJ3s6%2FLFHqx21f%2FxbIb8ahJCDUenJJg2gOXjqemLsO02BhPi9EDwnFRXRHNOQLKvS7agwFaDvST2sy1Y6SEhY2dve8C%2Bq8qS%2Fl0EQ5devUucOLS%2BuGby2%2FI5TJhda3NoRelmYflWD7bapJguITaSPR0XOyn8M6q72Gy6jpzistAE4sntoZNC%2Bra2BnJRaiCdw7tHUDEeLg0R&X-Amz-Signature=e9eb9ccdee750bfc6d90f6f7be3da80f1f5eb7928eb24651d16ee2c583751e93&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HGXU27V%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T220143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIEF8S%2FjVdJzYVv3d0KuVW5W26xhwzxH9ZlG%2F6KDSliaPAiBO8C6oFEfysiqPXMFdcicCz7qWD7fMoyLgh2wFySan%2Bir%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMUrMcUWJC%2FkIpkRL6KtwDnSL5xj1JwGk0E8surRLDC61re2R6P8UvYN%2BfdCLfbSMD4mmKaUAT0UomdJHXuyV3D9Gj60Y7w2%2FTFQvqzWzHKWS79eVyohqhD8OJpEAI1Co0s%2BhFc1Cl0z8Pz6h2KgJazk%2FckIyhreDL%2Fd5E2mrugFYReumUEEeD0BleVgltdqX62sTDRjQYmY%2Fl7352kBxmV0thOZ9GS1tJII90sYfKSF8DKKAQIaA5RprmEAsuhWEOmC9L%2BRz3qwAwbzpX1yAEQuOfALLqLSmzoaZtB4Ny2t7KnbGsjN3De7gEKdmErtU2onfIXwz2EKeq%2BcU0g3NiicURdZYN3p6U9Efeh7X4lxmV0UVv4e9JDBqEcuJLUYavRBuFSmuA0EXgQ8Gm1afomnux188gSr4SgYxhk8MRHACxqHjX7aKRqNU3h5XMWDC8Q2ENUFxnT4cE3muFEGgng4c36mdJNMIaJedgBkYeVxbOfLzvXh5XvgiqYzRtOZxRevoBd4i6zK64OZQg9ZOVUkEoeooVGh5M2jPMcjOlwRzAD4jGRHEtoX77icSPMe7NFi3qOHfNHzfaQwYUukvA0j0jM5jnkD2hea0hi8O7yOmoeUJG50tQRS4Ae5RG0%2BK9KOOhgIxkG%2BeQ5Qgw%2B%2FKyvgY6pgEi%2B6g25r2XkQbUCS4RNJ3s6%2FLFHqx21f%2FxbIb8ahJCDUenJJg2gOXjqemLsO02BhPi9EDwnFRXRHNOQLKvS7agwFaDvST2sy1Y6SEhY2dve8C%2Bq8qS%2Fl0EQ5devUucOLS%2BuGby2%2FI5TJhda3NoRelmYflWD7bapJguITaSPR0XOyn8M6q72Gy6jpzistAE4sntoZNC%2Bra2BnJRaiCdw7tHUDEeLg0R&X-Amz-Signature=d5e130116b806fb6b817f21979840d7f80b595c9865486854bbc9416a1e6866c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HGXU27V%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T220143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIEF8S%2FjVdJzYVv3d0KuVW5W26xhwzxH9ZlG%2F6KDSliaPAiBO8C6oFEfysiqPXMFdcicCz7qWD7fMoyLgh2wFySan%2Bir%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMUrMcUWJC%2FkIpkRL6KtwDnSL5xj1JwGk0E8surRLDC61re2R6P8UvYN%2BfdCLfbSMD4mmKaUAT0UomdJHXuyV3D9Gj60Y7w2%2FTFQvqzWzHKWS79eVyohqhD8OJpEAI1Co0s%2BhFc1Cl0z8Pz6h2KgJazk%2FckIyhreDL%2Fd5E2mrugFYReumUEEeD0BleVgltdqX62sTDRjQYmY%2Fl7352kBxmV0thOZ9GS1tJII90sYfKSF8DKKAQIaA5RprmEAsuhWEOmC9L%2BRz3qwAwbzpX1yAEQuOfALLqLSmzoaZtB4Ny2t7KnbGsjN3De7gEKdmErtU2onfIXwz2EKeq%2BcU0g3NiicURdZYN3p6U9Efeh7X4lxmV0UVv4e9JDBqEcuJLUYavRBuFSmuA0EXgQ8Gm1afomnux188gSr4SgYxhk8MRHACxqHjX7aKRqNU3h5XMWDC8Q2ENUFxnT4cE3muFEGgng4c36mdJNMIaJedgBkYeVxbOfLzvXh5XvgiqYzRtOZxRevoBd4i6zK64OZQg9ZOVUkEoeooVGh5M2jPMcjOlwRzAD4jGRHEtoX77icSPMe7NFi3qOHfNHzfaQwYUukvA0j0jM5jnkD2hea0hi8O7yOmoeUJG50tQRS4Ae5RG0%2BK9KOOhgIxkG%2BeQ5Qgw%2B%2FKyvgY6pgEi%2B6g25r2XkQbUCS4RNJ3s6%2FLFHqx21f%2FxbIb8ahJCDUenJJg2gOXjqemLsO02BhPi9EDwnFRXRHNOQLKvS7agwFaDvST2sy1Y6SEhY2dve8C%2Bq8qS%2Fl0EQ5devUucOLS%2BuGby2%2FI5TJhda3NoRelmYflWD7bapJguITaSPR0XOyn8M6q72Gy6jpzistAE4sntoZNC%2Bra2BnJRaiCdw7tHUDEeLg0R&X-Amz-Signature=1c926a3c15990f3e79956dc2f28cf61bbe407179fe37a91ea1e6ea5bceac6aec&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HGXU27V%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T220143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIEF8S%2FjVdJzYVv3d0KuVW5W26xhwzxH9ZlG%2F6KDSliaPAiBO8C6oFEfysiqPXMFdcicCz7qWD7fMoyLgh2wFySan%2Bir%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMUrMcUWJC%2FkIpkRL6KtwDnSL5xj1JwGk0E8surRLDC61re2R6P8UvYN%2BfdCLfbSMD4mmKaUAT0UomdJHXuyV3D9Gj60Y7w2%2FTFQvqzWzHKWS79eVyohqhD8OJpEAI1Co0s%2BhFc1Cl0z8Pz6h2KgJazk%2FckIyhreDL%2Fd5E2mrugFYReumUEEeD0BleVgltdqX62sTDRjQYmY%2Fl7352kBxmV0thOZ9GS1tJII90sYfKSF8DKKAQIaA5RprmEAsuhWEOmC9L%2BRz3qwAwbzpX1yAEQuOfALLqLSmzoaZtB4Ny2t7KnbGsjN3De7gEKdmErtU2onfIXwz2EKeq%2BcU0g3NiicURdZYN3p6U9Efeh7X4lxmV0UVv4e9JDBqEcuJLUYavRBuFSmuA0EXgQ8Gm1afomnux188gSr4SgYxhk8MRHACxqHjX7aKRqNU3h5XMWDC8Q2ENUFxnT4cE3muFEGgng4c36mdJNMIaJedgBkYeVxbOfLzvXh5XvgiqYzRtOZxRevoBd4i6zK64OZQg9ZOVUkEoeooVGh5M2jPMcjOlwRzAD4jGRHEtoX77icSPMe7NFi3qOHfNHzfaQwYUukvA0j0jM5jnkD2hea0hi8O7yOmoeUJG50tQRS4Ae5RG0%2BK9KOOhgIxkG%2BeQ5Qgw%2B%2FKyvgY6pgEi%2B6g25r2XkQbUCS4RNJ3s6%2FLFHqx21f%2FxbIb8ahJCDUenJJg2gOXjqemLsO02BhPi9EDwnFRXRHNOQLKvS7agwFaDvST2sy1Y6SEhY2dve8C%2Bq8qS%2Fl0EQ5devUucOLS%2BuGby2%2FI5TJhda3NoRelmYflWD7bapJguITaSPR0XOyn8M6q72Gy6jpzistAE4sntoZNC%2Bra2BnJRaiCdw7tHUDEeLg0R&X-Amz-Signature=63e7167b5409cc40c93c9206e513bf570a498a7b74ff3cd881db1e33edde8704&X-Amz-SignedHeaders=host&x-id=GetObject)
