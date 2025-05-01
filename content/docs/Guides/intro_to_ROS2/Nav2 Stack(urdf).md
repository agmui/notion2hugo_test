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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XPW5S7F%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T081200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIBiD4e4qpzVPA0ONb%2B8VAZWjRDYTxQLSUVusGCY1CO54AiAiR22H0RBgUR%2BzKF63EZ1snz7X%2FAcdUY9BZurUpvCTyiqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGq52OghCNyExBDzjKtwDqoAXKUzgOx%2F4wbKHt7laDXT8LSjii4GY9a0qJ%2F%2FX454b%2Bh7bIuCJrhiI4yUx5DA1mx6714nUKgS1hKNW8RmCnjTEkxFQ9sRHSmHPori3YpmRX9cnLnTTFlXxkCVzTsOxkIFZlTyh6tZh8q4muBjBJKH1jkRmbjx5awJl0Nfc7A%2BjVIP%2FFeKBOOebyeCpMfR2jczLiCmXk8v6Zsivklkvu2kkpp4XDjgXNNeVuvrl%2Bf4HEtAQXtlHvWs53QftH%2BydmvWFnFvvIvoxe6GM5IWIOvr%2BJqgLXgbxh3d29s3Tjko%2B07cgEVGWjl9PYhMAseLuxRzZjnvpIYwTyEzNVVZsj5AENQqI1KVZ6JH%2Fu3DjpZdQ0Aqrf4eaVyCdgRHUqWzWcTS8OhGLX2C0lF9LSGoiu23zTNMhxviBwZb0Ni%2FCbeboQ8u6lXs13yDdtLou7Rk0jl65MteDfPowdxCTrJ6%2FmGO7XqpKbK72ZeiNP%2FwSdEotuKNVdWFaetg5UFPOfPC5KuN%2FEO%2BcE3YNpz13J4RVxlxg95u2aL5PQ0rC1itFoa6lblEmJ%2FP5xGMnEkCvSxM8G6BI%2B1eTXVBjxXOyKr3i8gVFAqanfmEA4XleRvnCnCLIYE9LnOauplgiLNww9c3MwAY6pgHwer09ZYLXuBNo5M%2FeAJfeMIZ%2BFi1InwGRrx3Jhz9%2FRmAVIaqeFMMXITG%2BublpQ3xwwSucNfGCWR333QfvDlaIIfLDH5tLE%2BcTBuCAFyt3%2FBIXvOGqsoeKESVHAyH3EtGx%2BFTwHOIcfdDghszoij5siJ7AdtDTJEijjj7nfdc3sUeTLbFYIMSYDtMr%2B8TzQhWb5rH5osRE7EKCuJeD%2F%2Bs8j9OBwFmc&X-Amz-Signature=035cc12f0dc74b265f305dbc1e07691bc7a73220edf45b37f832f3b4cd0de89b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XPW5S7F%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T081200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIBiD4e4qpzVPA0ONb%2B8VAZWjRDYTxQLSUVusGCY1CO54AiAiR22H0RBgUR%2BzKF63EZ1snz7X%2FAcdUY9BZurUpvCTyiqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGq52OghCNyExBDzjKtwDqoAXKUzgOx%2F4wbKHt7laDXT8LSjii4GY9a0qJ%2F%2FX454b%2Bh7bIuCJrhiI4yUx5DA1mx6714nUKgS1hKNW8RmCnjTEkxFQ9sRHSmHPori3YpmRX9cnLnTTFlXxkCVzTsOxkIFZlTyh6tZh8q4muBjBJKH1jkRmbjx5awJl0Nfc7A%2BjVIP%2FFeKBOOebyeCpMfR2jczLiCmXk8v6Zsivklkvu2kkpp4XDjgXNNeVuvrl%2Bf4HEtAQXtlHvWs53QftH%2BydmvWFnFvvIvoxe6GM5IWIOvr%2BJqgLXgbxh3d29s3Tjko%2B07cgEVGWjl9PYhMAseLuxRzZjnvpIYwTyEzNVVZsj5AENQqI1KVZ6JH%2Fu3DjpZdQ0Aqrf4eaVyCdgRHUqWzWcTS8OhGLX2C0lF9LSGoiu23zTNMhxviBwZb0Ni%2FCbeboQ8u6lXs13yDdtLou7Rk0jl65MteDfPowdxCTrJ6%2FmGO7XqpKbK72ZeiNP%2FwSdEotuKNVdWFaetg5UFPOfPC5KuN%2FEO%2BcE3YNpz13J4RVxlxg95u2aL5PQ0rC1itFoa6lblEmJ%2FP5xGMnEkCvSxM8G6BI%2B1eTXVBjxXOyKr3i8gVFAqanfmEA4XleRvnCnCLIYE9LnOauplgiLNww9c3MwAY6pgHwer09ZYLXuBNo5M%2FeAJfeMIZ%2BFi1InwGRrx3Jhz9%2FRmAVIaqeFMMXITG%2BublpQ3xwwSucNfGCWR333QfvDlaIIfLDH5tLE%2BcTBuCAFyt3%2FBIXvOGqsoeKESVHAyH3EtGx%2BFTwHOIcfdDghszoij5siJ7AdtDTJEijjj7nfdc3sUeTLbFYIMSYDtMr%2B8TzQhWb5rH5osRE7EKCuJeD%2F%2Bs8j9OBwFmc&X-Amz-Signature=de2eb7a7bcc4412d97ee03d39e485a3840f566bdd699d620d6e0557f33a241ce&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XPW5S7F%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T081200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIBiD4e4qpzVPA0ONb%2B8VAZWjRDYTxQLSUVusGCY1CO54AiAiR22H0RBgUR%2BzKF63EZ1snz7X%2FAcdUY9BZurUpvCTyiqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGq52OghCNyExBDzjKtwDqoAXKUzgOx%2F4wbKHt7laDXT8LSjii4GY9a0qJ%2F%2FX454b%2Bh7bIuCJrhiI4yUx5DA1mx6714nUKgS1hKNW8RmCnjTEkxFQ9sRHSmHPori3YpmRX9cnLnTTFlXxkCVzTsOxkIFZlTyh6tZh8q4muBjBJKH1jkRmbjx5awJl0Nfc7A%2BjVIP%2FFeKBOOebyeCpMfR2jczLiCmXk8v6Zsivklkvu2kkpp4XDjgXNNeVuvrl%2Bf4HEtAQXtlHvWs53QftH%2BydmvWFnFvvIvoxe6GM5IWIOvr%2BJqgLXgbxh3d29s3Tjko%2B07cgEVGWjl9PYhMAseLuxRzZjnvpIYwTyEzNVVZsj5AENQqI1KVZ6JH%2Fu3DjpZdQ0Aqrf4eaVyCdgRHUqWzWcTS8OhGLX2C0lF9LSGoiu23zTNMhxviBwZb0Ni%2FCbeboQ8u6lXs13yDdtLou7Rk0jl65MteDfPowdxCTrJ6%2FmGO7XqpKbK72ZeiNP%2FwSdEotuKNVdWFaetg5UFPOfPC5KuN%2FEO%2BcE3YNpz13J4RVxlxg95u2aL5PQ0rC1itFoa6lblEmJ%2FP5xGMnEkCvSxM8G6BI%2B1eTXVBjxXOyKr3i8gVFAqanfmEA4XleRvnCnCLIYE9LnOauplgiLNww9c3MwAY6pgHwer09ZYLXuBNo5M%2FeAJfeMIZ%2BFi1InwGRrx3Jhz9%2FRmAVIaqeFMMXITG%2BublpQ3xwwSucNfGCWR333QfvDlaIIfLDH5tLE%2BcTBuCAFyt3%2FBIXvOGqsoeKESVHAyH3EtGx%2BFTwHOIcfdDghszoij5siJ7AdtDTJEijjj7nfdc3sUeTLbFYIMSYDtMr%2B8TzQhWb5rH5osRE7EKCuJeD%2F%2Bs8j9OBwFmc&X-Amz-Signature=92a326114ccf79083d62a2d0b38c7185780094af0ed22f72d93ba6b29b23ca8d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XPW5S7F%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T081200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIBiD4e4qpzVPA0ONb%2B8VAZWjRDYTxQLSUVusGCY1CO54AiAiR22H0RBgUR%2BzKF63EZ1snz7X%2FAcdUY9BZurUpvCTyiqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGq52OghCNyExBDzjKtwDqoAXKUzgOx%2F4wbKHt7laDXT8LSjii4GY9a0qJ%2F%2FX454b%2Bh7bIuCJrhiI4yUx5DA1mx6714nUKgS1hKNW8RmCnjTEkxFQ9sRHSmHPori3YpmRX9cnLnTTFlXxkCVzTsOxkIFZlTyh6tZh8q4muBjBJKH1jkRmbjx5awJl0Nfc7A%2BjVIP%2FFeKBOOebyeCpMfR2jczLiCmXk8v6Zsivklkvu2kkpp4XDjgXNNeVuvrl%2Bf4HEtAQXtlHvWs53QftH%2BydmvWFnFvvIvoxe6GM5IWIOvr%2BJqgLXgbxh3d29s3Tjko%2B07cgEVGWjl9PYhMAseLuxRzZjnvpIYwTyEzNVVZsj5AENQqI1KVZ6JH%2Fu3DjpZdQ0Aqrf4eaVyCdgRHUqWzWcTS8OhGLX2C0lF9LSGoiu23zTNMhxviBwZb0Ni%2FCbeboQ8u6lXs13yDdtLou7Rk0jl65MteDfPowdxCTrJ6%2FmGO7XqpKbK72ZeiNP%2FwSdEotuKNVdWFaetg5UFPOfPC5KuN%2FEO%2BcE3YNpz13J4RVxlxg95u2aL5PQ0rC1itFoa6lblEmJ%2FP5xGMnEkCvSxM8G6BI%2B1eTXVBjxXOyKr3i8gVFAqanfmEA4XleRvnCnCLIYE9LnOauplgiLNww9c3MwAY6pgHwer09ZYLXuBNo5M%2FeAJfeMIZ%2BFi1InwGRrx3Jhz9%2FRmAVIaqeFMMXITG%2BublpQ3xwwSucNfGCWR333QfvDlaIIfLDH5tLE%2BcTBuCAFyt3%2FBIXvOGqsoeKESVHAyH3EtGx%2BFTwHOIcfdDghszoij5siJ7AdtDTJEijjj7nfdc3sUeTLbFYIMSYDtMr%2B8TzQhWb5rH5osRE7EKCuJeD%2F%2Bs8j9OBwFmc&X-Amz-Signature=5626760bfd17864cc840f7f2d736174cabf2814c4af2113efc70cd4a6a258f9b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XPW5S7F%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T081200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIBiD4e4qpzVPA0ONb%2B8VAZWjRDYTxQLSUVusGCY1CO54AiAiR22H0RBgUR%2BzKF63EZ1snz7X%2FAcdUY9BZurUpvCTyiqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGq52OghCNyExBDzjKtwDqoAXKUzgOx%2F4wbKHt7laDXT8LSjii4GY9a0qJ%2F%2FX454b%2Bh7bIuCJrhiI4yUx5DA1mx6714nUKgS1hKNW8RmCnjTEkxFQ9sRHSmHPori3YpmRX9cnLnTTFlXxkCVzTsOxkIFZlTyh6tZh8q4muBjBJKH1jkRmbjx5awJl0Nfc7A%2BjVIP%2FFeKBOOebyeCpMfR2jczLiCmXk8v6Zsivklkvu2kkpp4XDjgXNNeVuvrl%2Bf4HEtAQXtlHvWs53QftH%2BydmvWFnFvvIvoxe6GM5IWIOvr%2BJqgLXgbxh3d29s3Tjko%2B07cgEVGWjl9PYhMAseLuxRzZjnvpIYwTyEzNVVZsj5AENQqI1KVZ6JH%2Fu3DjpZdQ0Aqrf4eaVyCdgRHUqWzWcTS8OhGLX2C0lF9LSGoiu23zTNMhxviBwZb0Ni%2FCbeboQ8u6lXs13yDdtLou7Rk0jl65MteDfPowdxCTrJ6%2FmGO7XqpKbK72ZeiNP%2FwSdEotuKNVdWFaetg5UFPOfPC5KuN%2FEO%2BcE3YNpz13J4RVxlxg95u2aL5PQ0rC1itFoa6lblEmJ%2FP5xGMnEkCvSxM8G6BI%2B1eTXVBjxXOyKr3i8gVFAqanfmEA4XleRvnCnCLIYE9LnOauplgiLNww9c3MwAY6pgHwer09ZYLXuBNo5M%2FeAJfeMIZ%2BFi1InwGRrx3Jhz9%2FRmAVIaqeFMMXITG%2BublpQ3xwwSucNfGCWR333QfvDlaIIfLDH5tLE%2BcTBuCAFyt3%2FBIXvOGqsoeKESVHAyH3EtGx%2BFTwHOIcfdDghszoij5siJ7AdtDTJEijjj7nfdc3sUeTLbFYIMSYDtMr%2B8TzQhWb5rH5osRE7EKCuJeD%2F%2Bs8j9OBwFmc&X-Amz-Signature=201d06c79d2d11c8df17ba0d8977871b14b6c9db1c9c54ccc675189cf95f15ca&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XPW5S7F%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T081200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIBiD4e4qpzVPA0ONb%2B8VAZWjRDYTxQLSUVusGCY1CO54AiAiR22H0RBgUR%2BzKF63EZ1snz7X%2FAcdUY9BZurUpvCTyiqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGq52OghCNyExBDzjKtwDqoAXKUzgOx%2F4wbKHt7laDXT8LSjii4GY9a0qJ%2F%2FX454b%2Bh7bIuCJrhiI4yUx5DA1mx6714nUKgS1hKNW8RmCnjTEkxFQ9sRHSmHPori3YpmRX9cnLnTTFlXxkCVzTsOxkIFZlTyh6tZh8q4muBjBJKH1jkRmbjx5awJl0Nfc7A%2BjVIP%2FFeKBOOebyeCpMfR2jczLiCmXk8v6Zsivklkvu2kkpp4XDjgXNNeVuvrl%2Bf4HEtAQXtlHvWs53QftH%2BydmvWFnFvvIvoxe6GM5IWIOvr%2BJqgLXgbxh3d29s3Tjko%2B07cgEVGWjl9PYhMAseLuxRzZjnvpIYwTyEzNVVZsj5AENQqI1KVZ6JH%2Fu3DjpZdQ0Aqrf4eaVyCdgRHUqWzWcTS8OhGLX2C0lF9LSGoiu23zTNMhxviBwZb0Ni%2FCbeboQ8u6lXs13yDdtLou7Rk0jl65MteDfPowdxCTrJ6%2FmGO7XqpKbK72ZeiNP%2FwSdEotuKNVdWFaetg5UFPOfPC5KuN%2FEO%2BcE3YNpz13J4RVxlxg95u2aL5PQ0rC1itFoa6lblEmJ%2FP5xGMnEkCvSxM8G6BI%2B1eTXVBjxXOyKr3i8gVFAqanfmEA4XleRvnCnCLIYE9LnOauplgiLNww9c3MwAY6pgHwer09ZYLXuBNo5M%2FeAJfeMIZ%2BFi1InwGRrx3Jhz9%2FRmAVIaqeFMMXITG%2BublpQ3xwwSucNfGCWR333QfvDlaIIfLDH5tLE%2BcTBuCAFyt3%2FBIXvOGqsoeKESVHAyH3EtGx%2BFTwHOIcfdDghszoij5siJ7AdtDTJEijjj7nfdc3sUeTLbFYIMSYDtMr%2B8TzQhWb5rH5osRE7EKCuJeD%2F%2Bs8j9OBwFmc&X-Amz-Signature=b8fd48e72bb8d0cfb2a24a662e72564c9384274be53fa514c269f46045f3ff46&X-Amz-SignedHeaders=host&x-id=GetObject)
