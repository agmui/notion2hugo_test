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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URMKN4QA%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T170631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4AyjJM7M1hd8vKRp1nZymQoq67tsWOgYHoMqoFjF4iAiBri9brNUNBafTziMCM5BTE0QQhlf0ug%2FFrfTL2swnpACqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2GBC8jSuyOIZ8pWvKtwD%2FCdZIlDgiUPGb9M6WNiYyY82drbVLPb%2FDio83MIvLP6SklflOCjvGTQpKp1dzK8fp5KlT8XDDWVvEqvA5HIYTKb0Iyd2ANNEksQIsBsQV2HEUL6HOC7hco7IHSeRRjCFMR3DGN4bgKGHFx3vWv1kgvu9xAWFSVAPfgqLE5JxKcrXPH8daLPDisJKXIGTuhlBhlcltPy%2BDPT1HsQ%2Ff9OviPf4kkUBbFag4nQqsdgEQ3jdj69u0cEbF9r2M8qbMgzypYKuZe%2BNf2QQV1bydC%2Fg%2BO0CL5qZmeGYdNdhBWU1CsSr5fd0rILLn041O3i0ZKtPjYuFO7wBTXFQHSyN1ERJMDhxyEyS%2BVS%2FDH611nrgFFEYEKKXwdNQ2g5X4%2FmQGMj0bu%2Bxzg5N%2Bfga97ljnl1IvO65qaqGHxFIJfFZ7JY0UdM3Ge1gHJaTkVffBYqHba4KYBbRldQGyWi7u1wropbJgENplquqD4VIW851gipkrps0YVi1sqCkuF0cNgsyYjicMpgBuj%2Btd%2Fcb1qXlLEmk39Gsa2yuvdDdEhSEDqHE8ghz2tJBFPAr%2BTLm0687zTVKXu2g4sXtjMB7s%2FrG%2BMza0DUm3AUxGMUK5F9mes4dqWoBH1y5q9%2Ffc0epkjAwg%2BTivQY6pgF8ccyp2Syda%2Bk5mBzwYGILCkE1V1JDdkONu4idhV7pE28zkk09KQjppIVDUss6nQBSLnfyxZif4VNZuctEjdpTsfNiYgll9459z8fBMJVEQzNOoCrLdSN3jCBgBEZLA%2F3LvTic8RSXWy8%2Bs79%2BIQ3AxNGQ%2Ba57efL4SR2W%2BZ8DSBT47ZfG0tzl02V2pHCg9ZptU%2F%2F9wuoHuiKzywD4vLTbHKufcjwV&X-Amz-Signature=c362b29faf596ec8a06f5c7c0aad0e8aa9b3118f2a1aee130fbf7211915366a8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URMKN4QA%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T170631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4AyjJM7M1hd8vKRp1nZymQoq67tsWOgYHoMqoFjF4iAiBri9brNUNBafTziMCM5BTE0QQhlf0ug%2FFrfTL2swnpACqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2GBC8jSuyOIZ8pWvKtwD%2FCdZIlDgiUPGb9M6WNiYyY82drbVLPb%2FDio83MIvLP6SklflOCjvGTQpKp1dzK8fp5KlT8XDDWVvEqvA5HIYTKb0Iyd2ANNEksQIsBsQV2HEUL6HOC7hco7IHSeRRjCFMR3DGN4bgKGHFx3vWv1kgvu9xAWFSVAPfgqLE5JxKcrXPH8daLPDisJKXIGTuhlBhlcltPy%2BDPT1HsQ%2Ff9OviPf4kkUBbFag4nQqsdgEQ3jdj69u0cEbF9r2M8qbMgzypYKuZe%2BNf2QQV1bydC%2Fg%2BO0CL5qZmeGYdNdhBWU1CsSr5fd0rILLn041O3i0ZKtPjYuFO7wBTXFQHSyN1ERJMDhxyEyS%2BVS%2FDH611nrgFFEYEKKXwdNQ2g5X4%2FmQGMj0bu%2Bxzg5N%2Bfga97ljnl1IvO65qaqGHxFIJfFZ7JY0UdM3Ge1gHJaTkVffBYqHba4KYBbRldQGyWi7u1wropbJgENplquqD4VIW851gipkrps0YVi1sqCkuF0cNgsyYjicMpgBuj%2Btd%2Fcb1qXlLEmk39Gsa2yuvdDdEhSEDqHE8ghz2tJBFPAr%2BTLm0687zTVKXu2g4sXtjMB7s%2FrG%2BMza0DUm3AUxGMUK5F9mes4dqWoBH1y5q9%2Ffc0epkjAwg%2BTivQY6pgF8ccyp2Syda%2Bk5mBzwYGILCkE1V1JDdkONu4idhV7pE28zkk09KQjppIVDUss6nQBSLnfyxZif4VNZuctEjdpTsfNiYgll9459z8fBMJVEQzNOoCrLdSN3jCBgBEZLA%2F3LvTic8RSXWy8%2Bs79%2BIQ3AxNGQ%2Ba57efL4SR2W%2BZ8DSBT47ZfG0tzl02V2pHCg9ZptU%2F%2F9wuoHuiKzywD4vLTbHKufcjwV&X-Amz-Signature=1ddbd36393631d5d85d1d7362597d2791405c5554ced03ca7c8f4707083092d5&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URMKN4QA%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T170631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4AyjJM7M1hd8vKRp1nZymQoq67tsWOgYHoMqoFjF4iAiBri9brNUNBafTziMCM5BTE0QQhlf0ug%2FFrfTL2swnpACqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2GBC8jSuyOIZ8pWvKtwD%2FCdZIlDgiUPGb9M6WNiYyY82drbVLPb%2FDio83MIvLP6SklflOCjvGTQpKp1dzK8fp5KlT8XDDWVvEqvA5HIYTKb0Iyd2ANNEksQIsBsQV2HEUL6HOC7hco7IHSeRRjCFMR3DGN4bgKGHFx3vWv1kgvu9xAWFSVAPfgqLE5JxKcrXPH8daLPDisJKXIGTuhlBhlcltPy%2BDPT1HsQ%2Ff9OviPf4kkUBbFag4nQqsdgEQ3jdj69u0cEbF9r2M8qbMgzypYKuZe%2BNf2QQV1bydC%2Fg%2BO0CL5qZmeGYdNdhBWU1CsSr5fd0rILLn041O3i0ZKtPjYuFO7wBTXFQHSyN1ERJMDhxyEyS%2BVS%2FDH611nrgFFEYEKKXwdNQ2g5X4%2FmQGMj0bu%2Bxzg5N%2Bfga97ljnl1IvO65qaqGHxFIJfFZ7JY0UdM3Ge1gHJaTkVffBYqHba4KYBbRldQGyWi7u1wropbJgENplquqD4VIW851gipkrps0YVi1sqCkuF0cNgsyYjicMpgBuj%2Btd%2Fcb1qXlLEmk39Gsa2yuvdDdEhSEDqHE8ghz2tJBFPAr%2BTLm0687zTVKXu2g4sXtjMB7s%2FrG%2BMza0DUm3AUxGMUK5F9mes4dqWoBH1y5q9%2Ffc0epkjAwg%2BTivQY6pgF8ccyp2Syda%2Bk5mBzwYGILCkE1V1JDdkONu4idhV7pE28zkk09KQjppIVDUss6nQBSLnfyxZif4VNZuctEjdpTsfNiYgll9459z8fBMJVEQzNOoCrLdSN3jCBgBEZLA%2F3LvTic8RSXWy8%2Bs79%2BIQ3AxNGQ%2Ba57efL4SR2W%2BZ8DSBT47ZfG0tzl02V2pHCg9ZptU%2F%2F9wuoHuiKzywD4vLTbHKufcjwV&X-Amz-Signature=f2271cbd7c38988525987f9ba1fc873fb2c2382410df35aba120deeb7ed0d201&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URMKN4QA%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T170631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4AyjJM7M1hd8vKRp1nZymQoq67tsWOgYHoMqoFjF4iAiBri9brNUNBafTziMCM5BTE0QQhlf0ug%2FFrfTL2swnpACqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2GBC8jSuyOIZ8pWvKtwD%2FCdZIlDgiUPGb9M6WNiYyY82drbVLPb%2FDio83MIvLP6SklflOCjvGTQpKp1dzK8fp5KlT8XDDWVvEqvA5HIYTKb0Iyd2ANNEksQIsBsQV2HEUL6HOC7hco7IHSeRRjCFMR3DGN4bgKGHFx3vWv1kgvu9xAWFSVAPfgqLE5JxKcrXPH8daLPDisJKXIGTuhlBhlcltPy%2BDPT1HsQ%2Ff9OviPf4kkUBbFag4nQqsdgEQ3jdj69u0cEbF9r2M8qbMgzypYKuZe%2BNf2QQV1bydC%2Fg%2BO0CL5qZmeGYdNdhBWU1CsSr5fd0rILLn041O3i0ZKtPjYuFO7wBTXFQHSyN1ERJMDhxyEyS%2BVS%2FDH611nrgFFEYEKKXwdNQ2g5X4%2FmQGMj0bu%2Bxzg5N%2Bfga97ljnl1IvO65qaqGHxFIJfFZ7JY0UdM3Ge1gHJaTkVffBYqHba4KYBbRldQGyWi7u1wropbJgENplquqD4VIW851gipkrps0YVi1sqCkuF0cNgsyYjicMpgBuj%2Btd%2Fcb1qXlLEmk39Gsa2yuvdDdEhSEDqHE8ghz2tJBFPAr%2BTLm0687zTVKXu2g4sXtjMB7s%2FrG%2BMza0DUm3AUxGMUK5F9mes4dqWoBH1y5q9%2Ffc0epkjAwg%2BTivQY6pgF8ccyp2Syda%2Bk5mBzwYGILCkE1V1JDdkONu4idhV7pE28zkk09KQjppIVDUss6nQBSLnfyxZif4VNZuctEjdpTsfNiYgll9459z8fBMJVEQzNOoCrLdSN3jCBgBEZLA%2F3LvTic8RSXWy8%2Bs79%2BIQ3AxNGQ%2Ba57efL4SR2W%2BZ8DSBT47ZfG0tzl02V2pHCg9ZptU%2F%2F9wuoHuiKzywD4vLTbHKufcjwV&X-Amz-Signature=b1452b1c131d400ec1e946f1efbb9e33ef05c0360985833b5c725b3be0b4a2d6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URMKN4QA%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T170631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4AyjJM7M1hd8vKRp1nZymQoq67tsWOgYHoMqoFjF4iAiBri9brNUNBafTziMCM5BTE0QQhlf0ug%2FFrfTL2swnpACqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2GBC8jSuyOIZ8pWvKtwD%2FCdZIlDgiUPGb9M6WNiYyY82drbVLPb%2FDio83MIvLP6SklflOCjvGTQpKp1dzK8fp5KlT8XDDWVvEqvA5HIYTKb0Iyd2ANNEksQIsBsQV2HEUL6HOC7hco7IHSeRRjCFMR3DGN4bgKGHFx3vWv1kgvu9xAWFSVAPfgqLE5JxKcrXPH8daLPDisJKXIGTuhlBhlcltPy%2BDPT1HsQ%2Ff9OviPf4kkUBbFag4nQqsdgEQ3jdj69u0cEbF9r2M8qbMgzypYKuZe%2BNf2QQV1bydC%2Fg%2BO0CL5qZmeGYdNdhBWU1CsSr5fd0rILLn041O3i0ZKtPjYuFO7wBTXFQHSyN1ERJMDhxyEyS%2BVS%2FDH611nrgFFEYEKKXwdNQ2g5X4%2FmQGMj0bu%2Bxzg5N%2Bfga97ljnl1IvO65qaqGHxFIJfFZ7JY0UdM3Ge1gHJaTkVffBYqHba4KYBbRldQGyWi7u1wropbJgENplquqD4VIW851gipkrps0YVi1sqCkuF0cNgsyYjicMpgBuj%2Btd%2Fcb1qXlLEmk39Gsa2yuvdDdEhSEDqHE8ghz2tJBFPAr%2BTLm0687zTVKXu2g4sXtjMB7s%2FrG%2BMza0DUm3AUxGMUK5F9mes4dqWoBH1y5q9%2Ffc0epkjAwg%2BTivQY6pgF8ccyp2Syda%2Bk5mBzwYGILCkE1V1JDdkONu4idhV7pE28zkk09KQjppIVDUss6nQBSLnfyxZif4VNZuctEjdpTsfNiYgll9459z8fBMJVEQzNOoCrLdSN3jCBgBEZLA%2F3LvTic8RSXWy8%2Bs79%2BIQ3AxNGQ%2Ba57efL4SR2W%2BZ8DSBT47ZfG0tzl02V2pHCg9ZptU%2F%2F9wuoHuiKzywD4vLTbHKufcjwV&X-Amz-Signature=7c1a16dbb28e89975ad6737216a08cce024bcaecec86f17a8e89119f165b9431&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URMKN4QA%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T170631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4AyjJM7M1hd8vKRp1nZymQoq67tsWOgYHoMqoFjF4iAiBri9brNUNBafTziMCM5BTE0QQhlf0ug%2FFrfTL2swnpACqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2GBC8jSuyOIZ8pWvKtwD%2FCdZIlDgiUPGb9M6WNiYyY82drbVLPb%2FDio83MIvLP6SklflOCjvGTQpKp1dzK8fp5KlT8XDDWVvEqvA5HIYTKb0Iyd2ANNEksQIsBsQV2HEUL6HOC7hco7IHSeRRjCFMR3DGN4bgKGHFx3vWv1kgvu9xAWFSVAPfgqLE5JxKcrXPH8daLPDisJKXIGTuhlBhlcltPy%2BDPT1HsQ%2Ff9OviPf4kkUBbFag4nQqsdgEQ3jdj69u0cEbF9r2M8qbMgzypYKuZe%2BNf2QQV1bydC%2Fg%2BO0CL5qZmeGYdNdhBWU1CsSr5fd0rILLn041O3i0ZKtPjYuFO7wBTXFQHSyN1ERJMDhxyEyS%2BVS%2FDH611nrgFFEYEKKXwdNQ2g5X4%2FmQGMj0bu%2Bxzg5N%2Bfga97ljnl1IvO65qaqGHxFIJfFZ7JY0UdM3Ge1gHJaTkVffBYqHba4KYBbRldQGyWi7u1wropbJgENplquqD4VIW851gipkrps0YVi1sqCkuF0cNgsyYjicMpgBuj%2Btd%2Fcb1qXlLEmk39Gsa2yuvdDdEhSEDqHE8ghz2tJBFPAr%2BTLm0687zTVKXu2g4sXtjMB7s%2FrG%2BMza0DUm3AUxGMUK5F9mes4dqWoBH1y5q9%2Ffc0epkjAwg%2BTivQY6pgF8ccyp2Syda%2Bk5mBzwYGILCkE1V1JDdkONu4idhV7pE28zkk09KQjppIVDUss6nQBSLnfyxZif4VNZuctEjdpTsfNiYgll9459z8fBMJVEQzNOoCrLdSN3jCBgBEZLA%2F3LvTic8RSXWy8%2Bs79%2BIQ3AxNGQ%2Ba57efL4SR2W%2BZ8DSBT47ZfG0tzl02V2pHCg9ZptU%2F%2F9wuoHuiKzywD4vLTbHKufcjwV&X-Amz-Signature=cade15dd9f1a059d30c6505964bb3798a004c3e970c8918fd74703d890f529f7&X-Amz-SignedHeaders=host&x-id=GetObject)
