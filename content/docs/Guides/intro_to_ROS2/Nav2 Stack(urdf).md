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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DPWDJIU%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T160949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG51BgZyB8nQgYiOwBUKLGMEEuavL%2Feg4tkmRrJ67hrzAiAJEQjAJHoyYbsWKIm7gNpo3tiQk9OfNIMxR%2FzWkHMU6Cr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM2FGwgOqo5r4hynizKtwDkqaCWhUQAA3%2FTCY3SBPxV%2FTaZrSDUMoBfdoMXJTAiFbimLs3WHRrQq4MQlpZDC7L93kdmGxKaCS45p0cpXEtU9YW1BZNgSt0mlmuIP%2FxEc3dIjYIrKvtI5CjzLs2hZh2AQqWvS%2BszrHcgkGe74E6vR3sSonzZelYs4vJ8u2CnrcqcfHmbA%2B0ztuOisHte0LZ1fkQ1XWZ81yHklcDPyEDfsJu0ObCu8MrTf4SxXbOBahyns5ierv%2F8ukMVHpnQ1E%2BTMkkQWh1vNTQyw7HaiK47ZMfk2c7gVFJlhZdYCoMWUk5F%2FszF080mmLNi5ThHb9ouuM4ih7r%2FOLSz7cJ7p%2BuApLkxvQJNGSWJPzChqljCtRHIEz%2B%2Bj8c8DZ%2FH8Eqf%2B4PypCmHrUgpC5TbQUva1TUZYvu3LcPKrm%2BDKZrSN9KVLmXMdjVTyJpaVgDG9M87JizyYv3hTqgu8dnj7hN86eNeCCQvDtrDy%2Fl7EZISMLOFLWWmbg%2BRJONr6r0igNvRG3xdINTvyw8%2BrXAMf60ErSdIuUSKoQcGpo%2BwbBj2C6EvVXaPIi8%2F82KXkdDv0p%2FmKKfrKAhucmPMhbmwgDflGqVOg6ou0aIFWsJzlze%2BFXFg7Hi1jX8l6CkGK1fYk8wgZCnvgY6pgElxruvENKvvrPSLP8799w90FNJp6H0ELf2UkqXNJi%2B0UW1i%2FvBiHPIUcprDB5C50EgkAPOfc16%2FXWp%2B9Q3evOLXBaXAk6gf4rX7XJn7W8Iz0IPyYjnyMhvF%2FuHqP6eauUxcm14cLmvLXT2%2FhKYYOEBFTcgWsH799qC3GlekvdT45xKecc%2BE%2BenZ5VxcuaCE%2FYPLIefXd4XThzQIEnB1gAhOuTZxZ%2Fe&X-Amz-Signature=f4b01fe7f37f702b35c1ccc7e040e36e479397a747b787f64ce05f62293913db&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DPWDJIU%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T160949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG51BgZyB8nQgYiOwBUKLGMEEuavL%2Feg4tkmRrJ67hrzAiAJEQjAJHoyYbsWKIm7gNpo3tiQk9OfNIMxR%2FzWkHMU6Cr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM2FGwgOqo5r4hynizKtwDkqaCWhUQAA3%2FTCY3SBPxV%2FTaZrSDUMoBfdoMXJTAiFbimLs3WHRrQq4MQlpZDC7L93kdmGxKaCS45p0cpXEtU9YW1BZNgSt0mlmuIP%2FxEc3dIjYIrKvtI5CjzLs2hZh2AQqWvS%2BszrHcgkGe74E6vR3sSonzZelYs4vJ8u2CnrcqcfHmbA%2B0ztuOisHte0LZ1fkQ1XWZ81yHklcDPyEDfsJu0ObCu8MrTf4SxXbOBahyns5ierv%2F8ukMVHpnQ1E%2BTMkkQWh1vNTQyw7HaiK47ZMfk2c7gVFJlhZdYCoMWUk5F%2FszF080mmLNi5ThHb9ouuM4ih7r%2FOLSz7cJ7p%2BuApLkxvQJNGSWJPzChqljCtRHIEz%2B%2Bj8c8DZ%2FH8Eqf%2B4PypCmHrUgpC5TbQUva1TUZYvu3LcPKrm%2BDKZrSN9KVLmXMdjVTyJpaVgDG9M87JizyYv3hTqgu8dnj7hN86eNeCCQvDtrDy%2Fl7EZISMLOFLWWmbg%2BRJONr6r0igNvRG3xdINTvyw8%2BrXAMf60ErSdIuUSKoQcGpo%2BwbBj2C6EvVXaPIi8%2F82KXkdDv0p%2FmKKfrKAhucmPMhbmwgDflGqVOg6ou0aIFWsJzlze%2BFXFg7Hi1jX8l6CkGK1fYk8wgZCnvgY6pgElxruvENKvvrPSLP8799w90FNJp6H0ELf2UkqXNJi%2B0UW1i%2FvBiHPIUcprDB5C50EgkAPOfc16%2FXWp%2B9Q3evOLXBaXAk6gf4rX7XJn7W8Iz0IPyYjnyMhvF%2FuHqP6eauUxcm14cLmvLXT2%2FhKYYOEBFTcgWsH799qC3GlekvdT45xKecc%2BE%2BenZ5VxcuaCE%2FYPLIefXd4XThzQIEnB1gAhOuTZxZ%2Fe&X-Amz-Signature=ef2fdccd5667789a085090cac8536edd925114d65714d59ddf23376856895c17&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DPWDJIU%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T160949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG51BgZyB8nQgYiOwBUKLGMEEuavL%2Feg4tkmRrJ67hrzAiAJEQjAJHoyYbsWKIm7gNpo3tiQk9OfNIMxR%2FzWkHMU6Cr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM2FGwgOqo5r4hynizKtwDkqaCWhUQAA3%2FTCY3SBPxV%2FTaZrSDUMoBfdoMXJTAiFbimLs3WHRrQq4MQlpZDC7L93kdmGxKaCS45p0cpXEtU9YW1BZNgSt0mlmuIP%2FxEc3dIjYIrKvtI5CjzLs2hZh2AQqWvS%2BszrHcgkGe74E6vR3sSonzZelYs4vJ8u2CnrcqcfHmbA%2B0ztuOisHte0LZ1fkQ1XWZ81yHklcDPyEDfsJu0ObCu8MrTf4SxXbOBahyns5ierv%2F8ukMVHpnQ1E%2BTMkkQWh1vNTQyw7HaiK47ZMfk2c7gVFJlhZdYCoMWUk5F%2FszF080mmLNi5ThHb9ouuM4ih7r%2FOLSz7cJ7p%2BuApLkxvQJNGSWJPzChqljCtRHIEz%2B%2Bj8c8DZ%2FH8Eqf%2B4PypCmHrUgpC5TbQUva1TUZYvu3LcPKrm%2BDKZrSN9KVLmXMdjVTyJpaVgDG9M87JizyYv3hTqgu8dnj7hN86eNeCCQvDtrDy%2Fl7EZISMLOFLWWmbg%2BRJONr6r0igNvRG3xdINTvyw8%2BrXAMf60ErSdIuUSKoQcGpo%2BwbBj2C6EvVXaPIi8%2F82KXkdDv0p%2FmKKfrKAhucmPMhbmwgDflGqVOg6ou0aIFWsJzlze%2BFXFg7Hi1jX8l6CkGK1fYk8wgZCnvgY6pgElxruvENKvvrPSLP8799w90FNJp6H0ELf2UkqXNJi%2B0UW1i%2FvBiHPIUcprDB5C50EgkAPOfc16%2FXWp%2B9Q3evOLXBaXAk6gf4rX7XJn7W8Iz0IPyYjnyMhvF%2FuHqP6eauUxcm14cLmvLXT2%2FhKYYOEBFTcgWsH799qC3GlekvdT45xKecc%2BE%2BenZ5VxcuaCE%2FYPLIefXd4XThzQIEnB1gAhOuTZxZ%2Fe&X-Amz-Signature=b4f2e7fcbd2fe84f0a40917d70c4c1e5a13129e8add590442b2e3f542e697019&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DPWDJIU%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T160950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG51BgZyB8nQgYiOwBUKLGMEEuavL%2Feg4tkmRrJ67hrzAiAJEQjAJHoyYbsWKIm7gNpo3tiQk9OfNIMxR%2FzWkHMU6Cr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM2FGwgOqo5r4hynizKtwDkqaCWhUQAA3%2FTCY3SBPxV%2FTaZrSDUMoBfdoMXJTAiFbimLs3WHRrQq4MQlpZDC7L93kdmGxKaCS45p0cpXEtU9YW1BZNgSt0mlmuIP%2FxEc3dIjYIrKvtI5CjzLs2hZh2AQqWvS%2BszrHcgkGe74E6vR3sSonzZelYs4vJ8u2CnrcqcfHmbA%2B0ztuOisHte0LZ1fkQ1XWZ81yHklcDPyEDfsJu0ObCu8MrTf4SxXbOBahyns5ierv%2F8ukMVHpnQ1E%2BTMkkQWh1vNTQyw7HaiK47ZMfk2c7gVFJlhZdYCoMWUk5F%2FszF080mmLNi5ThHb9ouuM4ih7r%2FOLSz7cJ7p%2BuApLkxvQJNGSWJPzChqljCtRHIEz%2B%2Bj8c8DZ%2FH8Eqf%2B4PypCmHrUgpC5TbQUva1TUZYvu3LcPKrm%2BDKZrSN9KVLmXMdjVTyJpaVgDG9M87JizyYv3hTqgu8dnj7hN86eNeCCQvDtrDy%2Fl7EZISMLOFLWWmbg%2BRJONr6r0igNvRG3xdINTvyw8%2BrXAMf60ErSdIuUSKoQcGpo%2BwbBj2C6EvVXaPIi8%2F82KXkdDv0p%2FmKKfrKAhucmPMhbmwgDflGqVOg6ou0aIFWsJzlze%2BFXFg7Hi1jX8l6CkGK1fYk8wgZCnvgY6pgElxruvENKvvrPSLP8799w90FNJp6H0ELf2UkqXNJi%2B0UW1i%2FvBiHPIUcprDB5C50EgkAPOfc16%2FXWp%2B9Q3evOLXBaXAk6gf4rX7XJn7W8Iz0IPyYjnyMhvF%2FuHqP6eauUxcm14cLmvLXT2%2FhKYYOEBFTcgWsH799qC3GlekvdT45xKecc%2BE%2BenZ5VxcuaCE%2FYPLIefXd4XThzQIEnB1gAhOuTZxZ%2Fe&X-Amz-Signature=2693ac248a126b1681caf1fa304a9246a22e715071dabdb914e64782a7396249&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DPWDJIU%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T160949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG51BgZyB8nQgYiOwBUKLGMEEuavL%2Feg4tkmRrJ67hrzAiAJEQjAJHoyYbsWKIm7gNpo3tiQk9OfNIMxR%2FzWkHMU6Cr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM2FGwgOqo5r4hynizKtwDkqaCWhUQAA3%2FTCY3SBPxV%2FTaZrSDUMoBfdoMXJTAiFbimLs3WHRrQq4MQlpZDC7L93kdmGxKaCS45p0cpXEtU9YW1BZNgSt0mlmuIP%2FxEc3dIjYIrKvtI5CjzLs2hZh2AQqWvS%2BszrHcgkGe74E6vR3sSonzZelYs4vJ8u2CnrcqcfHmbA%2B0ztuOisHte0LZ1fkQ1XWZ81yHklcDPyEDfsJu0ObCu8MrTf4SxXbOBahyns5ierv%2F8ukMVHpnQ1E%2BTMkkQWh1vNTQyw7HaiK47ZMfk2c7gVFJlhZdYCoMWUk5F%2FszF080mmLNi5ThHb9ouuM4ih7r%2FOLSz7cJ7p%2BuApLkxvQJNGSWJPzChqljCtRHIEz%2B%2Bj8c8DZ%2FH8Eqf%2B4PypCmHrUgpC5TbQUva1TUZYvu3LcPKrm%2BDKZrSN9KVLmXMdjVTyJpaVgDG9M87JizyYv3hTqgu8dnj7hN86eNeCCQvDtrDy%2Fl7EZISMLOFLWWmbg%2BRJONr6r0igNvRG3xdINTvyw8%2BrXAMf60ErSdIuUSKoQcGpo%2BwbBj2C6EvVXaPIi8%2F82KXkdDv0p%2FmKKfrKAhucmPMhbmwgDflGqVOg6ou0aIFWsJzlze%2BFXFg7Hi1jX8l6CkGK1fYk8wgZCnvgY6pgElxruvENKvvrPSLP8799w90FNJp6H0ELf2UkqXNJi%2B0UW1i%2FvBiHPIUcprDB5C50EgkAPOfc16%2FXWp%2B9Q3evOLXBaXAk6gf4rX7XJn7W8Iz0IPyYjnyMhvF%2FuHqP6eauUxcm14cLmvLXT2%2FhKYYOEBFTcgWsH799qC3GlekvdT45xKecc%2BE%2BenZ5VxcuaCE%2FYPLIefXd4XThzQIEnB1gAhOuTZxZ%2Fe&X-Amz-Signature=de183373acc37e2632356067ad517cb8952d22ab16587e893e6b01619411c56f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DPWDJIU%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T160950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG51BgZyB8nQgYiOwBUKLGMEEuavL%2Feg4tkmRrJ67hrzAiAJEQjAJHoyYbsWKIm7gNpo3tiQk9OfNIMxR%2FzWkHMU6Cr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIM2FGwgOqo5r4hynizKtwDkqaCWhUQAA3%2FTCY3SBPxV%2FTaZrSDUMoBfdoMXJTAiFbimLs3WHRrQq4MQlpZDC7L93kdmGxKaCS45p0cpXEtU9YW1BZNgSt0mlmuIP%2FxEc3dIjYIrKvtI5CjzLs2hZh2AQqWvS%2BszrHcgkGe74E6vR3sSonzZelYs4vJ8u2CnrcqcfHmbA%2B0ztuOisHte0LZ1fkQ1XWZ81yHklcDPyEDfsJu0ObCu8MrTf4SxXbOBahyns5ierv%2F8ukMVHpnQ1E%2BTMkkQWh1vNTQyw7HaiK47ZMfk2c7gVFJlhZdYCoMWUk5F%2FszF080mmLNi5ThHb9ouuM4ih7r%2FOLSz7cJ7p%2BuApLkxvQJNGSWJPzChqljCtRHIEz%2B%2Bj8c8DZ%2FH8Eqf%2B4PypCmHrUgpC5TbQUva1TUZYvu3LcPKrm%2BDKZrSN9KVLmXMdjVTyJpaVgDG9M87JizyYv3hTqgu8dnj7hN86eNeCCQvDtrDy%2Fl7EZISMLOFLWWmbg%2BRJONr6r0igNvRG3xdINTvyw8%2BrXAMf60ErSdIuUSKoQcGpo%2BwbBj2C6EvVXaPIi8%2F82KXkdDv0p%2FmKKfrKAhucmPMhbmwgDflGqVOg6ou0aIFWsJzlze%2BFXFg7Hi1jX8l6CkGK1fYk8wgZCnvgY6pgElxruvENKvvrPSLP8799w90FNJp6H0ELf2UkqXNJi%2B0UW1i%2FvBiHPIUcprDB5C50EgkAPOfc16%2FXWp%2B9Q3evOLXBaXAk6gf4rX7XJn7W8Iz0IPyYjnyMhvF%2FuHqP6eauUxcm14cLmvLXT2%2FhKYYOEBFTcgWsH799qC3GlekvdT45xKecc%2BE%2BenZ5VxcuaCE%2FYPLIefXd4XThzQIEnB1gAhOuTZxZ%2Fe&X-Amz-Signature=90e54b669f0ca8e5d5b0a610e56ad638c1874a0e77757901182b35edc95fc09e&X-Amz-SignedHeaders=host&x-id=GetObject)
