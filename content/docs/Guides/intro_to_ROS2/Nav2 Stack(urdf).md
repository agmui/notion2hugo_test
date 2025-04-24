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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZRJ7A3L%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEVDuc0g0eZ%2B%2F8%2B6J6QNJ4DtWpszFGkdvulBoeLhEIJwIhAJ5VHEha4JStVwIh8fUZVi1jsg5ThjJfrAlCSY0eZG9jKv8DCBoQABoMNjM3NDIzMTgzODA1IgyGCPkpbOulCj2nBOAq3AM9LESGP1r6%2Bzm%2F7P0wtTn8U2pU7u2L2OMpQDlGFizMIMNpEoy2R972Oxvdu2etUC%2B9MyzOEqaFctG%2F1ahPBWurN90A2QjMMBlJwkHPq%2Fn%2FQ3rU5C4mv61KMyTZiFaUW8pKL%2FoPjT76FvoMYUYrM925Qho9Csyv1HfDON%2BUEykMy3IL%2BWqtH1gLJv8pY2JV6HUt7FSvr1PWpsBdq3USboOzkt9M9N%2FlCEYmTfSkcaCNoc%2FmBGeOjRXbLJGkMoEuDoTKVygKZNI%2FHRaqdQY7Uya8WsM4AeMBHALcJmJrf2PY1d9h7K8SHu0MhUFYmo84jy4R2ynrLF%2B3aUko9iQMOakovP%2BTfNm%2BDG5HHdcutMsjjYjplCj8okfPT%2Fyq%2FVOZgIq0DpcJ4wsegrG%2Fs1x9fVtB9ohE1HdeiJSpiBS4sIMXvtIMUkzOUNj0Er%2BHafJtS%2FfgNJCPf9EVYH%2BVq8E85JzB0F3aQi4zUqa3t95tXL2l4UGWUY0B3KRZOd3SG2XKoC%2FiFvFABcYCf3BNwMqVXpaSP1HyYQmQcNSgKdWUIEwl0G6iDRJEEXTFs51Y4bVUHcRNi0ZaEFJJBhIfA3ANbEpx9W3AVQXsHhyW3VzghIAprvOaSpnFwqT8SPTdUjDN1anABjqkAXgm7hCN6yKNfCKa%2F9WiEoNy1PuHphxadNKgfLQ%2F782Sao0z9lNsxpUHF8U40HBwTzbG3GMVZX74ebLxhKuqOdlGh0cpyIfiYP%2BkIWo7yM1K7eBwviNeOmR2dyYNzjXoNFcvAQ%2FvZgewX9jfTzJ1h860P5VdD6u9KiErt4eVUzWu61Vc7SmOP6MEfIR4V1p1MoxN7XPvExyguXaYxU8TsNTfcD%2BJ&X-Amz-Signature=39472cad08b0e1b7b5e0aea50a669188a6f1f763c0fe5f20b5cb8886eabcf23a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZRJ7A3L%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEVDuc0g0eZ%2B%2F8%2B6J6QNJ4DtWpszFGkdvulBoeLhEIJwIhAJ5VHEha4JStVwIh8fUZVi1jsg5ThjJfrAlCSY0eZG9jKv8DCBoQABoMNjM3NDIzMTgzODA1IgyGCPkpbOulCj2nBOAq3AM9LESGP1r6%2Bzm%2F7P0wtTn8U2pU7u2L2OMpQDlGFizMIMNpEoy2R972Oxvdu2etUC%2B9MyzOEqaFctG%2F1ahPBWurN90A2QjMMBlJwkHPq%2Fn%2FQ3rU5C4mv61KMyTZiFaUW8pKL%2FoPjT76FvoMYUYrM925Qho9Csyv1HfDON%2BUEykMy3IL%2BWqtH1gLJv8pY2JV6HUt7FSvr1PWpsBdq3USboOzkt9M9N%2FlCEYmTfSkcaCNoc%2FmBGeOjRXbLJGkMoEuDoTKVygKZNI%2FHRaqdQY7Uya8WsM4AeMBHALcJmJrf2PY1d9h7K8SHu0MhUFYmo84jy4R2ynrLF%2B3aUko9iQMOakovP%2BTfNm%2BDG5HHdcutMsjjYjplCj8okfPT%2Fyq%2FVOZgIq0DpcJ4wsegrG%2Fs1x9fVtB9ohE1HdeiJSpiBS4sIMXvtIMUkzOUNj0Er%2BHafJtS%2FfgNJCPf9EVYH%2BVq8E85JzB0F3aQi4zUqa3t95tXL2l4UGWUY0B3KRZOd3SG2XKoC%2FiFvFABcYCf3BNwMqVXpaSP1HyYQmQcNSgKdWUIEwl0G6iDRJEEXTFs51Y4bVUHcRNi0ZaEFJJBhIfA3ANbEpx9W3AVQXsHhyW3VzghIAprvOaSpnFwqT8SPTdUjDN1anABjqkAXgm7hCN6yKNfCKa%2F9WiEoNy1PuHphxadNKgfLQ%2F782Sao0z9lNsxpUHF8U40HBwTzbG3GMVZX74ebLxhKuqOdlGh0cpyIfiYP%2BkIWo7yM1K7eBwviNeOmR2dyYNzjXoNFcvAQ%2FvZgewX9jfTzJ1h860P5VdD6u9KiErt4eVUzWu61Vc7SmOP6MEfIR4V1p1MoxN7XPvExyguXaYxU8TsNTfcD%2BJ&X-Amz-Signature=d2796851a00c0b948a049f438612dce685e14226d1b16afd8c630004bbb1146c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZRJ7A3L%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEVDuc0g0eZ%2B%2F8%2B6J6QNJ4DtWpszFGkdvulBoeLhEIJwIhAJ5VHEha4JStVwIh8fUZVi1jsg5ThjJfrAlCSY0eZG9jKv8DCBoQABoMNjM3NDIzMTgzODA1IgyGCPkpbOulCj2nBOAq3AM9LESGP1r6%2Bzm%2F7P0wtTn8U2pU7u2L2OMpQDlGFizMIMNpEoy2R972Oxvdu2etUC%2B9MyzOEqaFctG%2F1ahPBWurN90A2QjMMBlJwkHPq%2Fn%2FQ3rU5C4mv61KMyTZiFaUW8pKL%2FoPjT76FvoMYUYrM925Qho9Csyv1HfDON%2BUEykMy3IL%2BWqtH1gLJv8pY2JV6HUt7FSvr1PWpsBdq3USboOzkt9M9N%2FlCEYmTfSkcaCNoc%2FmBGeOjRXbLJGkMoEuDoTKVygKZNI%2FHRaqdQY7Uya8WsM4AeMBHALcJmJrf2PY1d9h7K8SHu0MhUFYmo84jy4R2ynrLF%2B3aUko9iQMOakovP%2BTfNm%2BDG5HHdcutMsjjYjplCj8okfPT%2Fyq%2FVOZgIq0DpcJ4wsegrG%2Fs1x9fVtB9ohE1HdeiJSpiBS4sIMXvtIMUkzOUNj0Er%2BHafJtS%2FfgNJCPf9EVYH%2BVq8E85JzB0F3aQi4zUqa3t95tXL2l4UGWUY0B3KRZOd3SG2XKoC%2FiFvFABcYCf3BNwMqVXpaSP1HyYQmQcNSgKdWUIEwl0G6iDRJEEXTFs51Y4bVUHcRNi0ZaEFJJBhIfA3ANbEpx9W3AVQXsHhyW3VzghIAprvOaSpnFwqT8SPTdUjDN1anABjqkAXgm7hCN6yKNfCKa%2F9WiEoNy1PuHphxadNKgfLQ%2F782Sao0z9lNsxpUHF8U40HBwTzbG3GMVZX74ebLxhKuqOdlGh0cpyIfiYP%2BkIWo7yM1K7eBwviNeOmR2dyYNzjXoNFcvAQ%2FvZgewX9jfTzJ1h860P5VdD6u9KiErt4eVUzWu61Vc7SmOP6MEfIR4V1p1MoxN7XPvExyguXaYxU8TsNTfcD%2BJ&X-Amz-Signature=8b925a10bad0437ea6f60b073372d260498ac57682d118305e05b26190670e44&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZRJ7A3L%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEVDuc0g0eZ%2B%2F8%2B6J6QNJ4DtWpszFGkdvulBoeLhEIJwIhAJ5VHEha4JStVwIh8fUZVi1jsg5ThjJfrAlCSY0eZG9jKv8DCBoQABoMNjM3NDIzMTgzODA1IgyGCPkpbOulCj2nBOAq3AM9LESGP1r6%2Bzm%2F7P0wtTn8U2pU7u2L2OMpQDlGFizMIMNpEoy2R972Oxvdu2etUC%2B9MyzOEqaFctG%2F1ahPBWurN90A2QjMMBlJwkHPq%2Fn%2FQ3rU5C4mv61KMyTZiFaUW8pKL%2FoPjT76FvoMYUYrM925Qho9Csyv1HfDON%2BUEykMy3IL%2BWqtH1gLJv8pY2JV6HUt7FSvr1PWpsBdq3USboOzkt9M9N%2FlCEYmTfSkcaCNoc%2FmBGeOjRXbLJGkMoEuDoTKVygKZNI%2FHRaqdQY7Uya8WsM4AeMBHALcJmJrf2PY1d9h7K8SHu0MhUFYmo84jy4R2ynrLF%2B3aUko9iQMOakovP%2BTfNm%2BDG5HHdcutMsjjYjplCj8okfPT%2Fyq%2FVOZgIq0DpcJ4wsegrG%2Fs1x9fVtB9ohE1HdeiJSpiBS4sIMXvtIMUkzOUNj0Er%2BHafJtS%2FfgNJCPf9EVYH%2BVq8E85JzB0F3aQi4zUqa3t95tXL2l4UGWUY0B3KRZOd3SG2XKoC%2FiFvFABcYCf3BNwMqVXpaSP1HyYQmQcNSgKdWUIEwl0G6iDRJEEXTFs51Y4bVUHcRNi0ZaEFJJBhIfA3ANbEpx9W3AVQXsHhyW3VzghIAprvOaSpnFwqT8SPTdUjDN1anABjqkAXgm7hCN6yKNfCKa%2F9WiEoNy1PuHphxadNKgfLQ%2F782Sao0z9lNsxpUHF8U40HBwTzbG3GMVZX74ebLxhKuqOdlGh0cpyIfiYP%2BkIWo7yM1K7eBwviNeOmR2dyYNzjXoNFcvAQ%2FvZgewX9jfTzJ1h860P5VdD6u9KiErt4eVUzWu61Vc7SmOP6MEfIR4V1p1MoxN7XPvExyguXaYxU8TsNTfcD%2BJ&X-Amz-Signature=71aa22084b71907eb28f20f3392506c554d91668a2c7a728783c8916b4a223bb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZRJ7A3L%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEVDuc0g0eZ%2B%2F8%2B6J6QNJ4DtWpszFGkdvulBoeLhEIJwIhAJ5VHEha4JStVwIh8fUZVi1jsg5ThjJfrAlCSY0eZG9jKv8DCBoQABoMNjM3NDIzMTgzODA1IgyGCPkpbOulCj2nBOAq3AM9LESGP1r6%2Bzm%2F7P0wtTn8U2pU7u2L2OMpQDlGFizMIMNpEoy2R972Oxvdu2etUC%2B9MyzOEqaFctG%2F1ahPBWurN90A2QjMMBlJwkHPq%2Fn%2FQ3rU5C4mv61KMyTZiFaUW8pKL%2FoPjT76FvoMYUYrM925Qho9Csyv1HfDON%2BUEykMy3IL%2BWqtH1gLJv8pY2JV6HUt7FSvr1PWpsBdq3USboOzkt9M9N%2FlCEYmTfSkcaCNoc%2FmBGeOjRXbLJGkMoEuDoTKVygKZNI%2FHRaqdQY7Uya8WsM4AeMBHALcJmJrf2PY1d9h7K8SHu0MhUFYmo84jy4R2ynrLF%2B3aUko9iQMOakovP%2BTfNm%2BDG5HHdcutMsjjYjplCj8okfPT%2Fyq%2FVOZgIq0DpcJ4wsegrG%2Fs1x9fVtB9ohE1HdeiJSpiBS4sIMXvtIMUkzOUNj0Er%2BHafJtS%2FfgNJCPf9EVYH%2BVq8E85JzB0F3aQi4zUqa3t95tXL2l4UGWUY0B3KRZOd3SG2XKoC%2FiFvFABcYCf3BNwMqVXpaSP1HyYQmQcNSgKdWUIEwl0G6iDRJEEXTFs51Y4bVUHcRNi0ZaEFJJBhIfA3ANbEpx9W3AVQXsHhyW3VzghIAprvOaSpnFwqT8SPTdUjDN1anABjqkAXgm7hCN6yKNfCKa%2F9WiEoNy1PuHphxadNKgfLQ%2F782Sao0z9lNsxpUHF8U40HBwTzbG3GMVZX74ebLxhKuqOdlGh0cpyIfiYP%2BkIWo7yM1K7eBwviNeOmR2dyYNzjXoNFcvAQ%2FvZgewX9jfTzJ1h860P5VdD6u9KiErt4eVUzWu61Vc7SmOP6MEfIR4V1p1MoxN7XPvExyguXaYxU8TsNTfcD%2BJ&X-Amz-Signature=bb05af636ffa7683bfe00cb6327073fe6117c2b2c3ed500fbceb664bab6789b4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZRJ7A3L%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEVDuc0g0eZ%2B%2F8%2B6J6QNJ4DtWpszFGkdvulBoeLhEIJwIhAJ5VHEha4JStVwIh8fUZVi1jsg5ThjJfrAlCSY0eZG9jKv8DCBoQABoMNjM3NDIzMTgzODA1IgyGCPkpbOulCj2nBOAq3AM9LESGP1r6%2Bzm%2F7P0wtTn8U2pU7u2L2OMpQDlGFizMIMNpEoy2R972Oxvdu2etUC%2B9MyzOEqaFctG%2F1ahPBWurN90A2QjMMBlJwkHPq%2Fn%2FQ3rU5C4mv61KMyTZiFaUW8pKL%2FoPjT76FvoMYUYrM925Qho9Csyv1HfDON%2BUEykMy3IL%2BWqtH1gLJv8pY2JV6HUt7FSvr1PWpsBdq3USboOzkt9M9N%2FlCEYmTfSkcaCNoc%2FmBGeOjRXbLJGkMoEuDoTKVygKZNI%2FHRaqdQY7Uya8WsM4AeMBHALcJmJrf2PY1d9h7K8SHu0MhUFYmo84jy4R2ynrLF%2B3aUko9iQMOakovP%2BTfNm%2BDG5HHdcutMsjjYjplCj8okfPT%2Fyq%2FVOZgIq0DpcJ4wsegrG%2Fs1x9fVtB9ohE1HdeiJSpiBS4sIMXvtIMUkzOUNj0Er%2BHafJtS%2FfgNJCPf9EVYH%2BVq8E85JzB0F3aQi4zUqa3t95tXL2l4UGWUY0B3KRZOd3SG2XKoC%2FiFvFABcYCf3BNwMqVXpaSP1HyYQmQcNSgKdWUIEwl0G6iDRJEEXTFs51Y4bVUHcRNi0ZaEFJJBhIfA3ANbEpx9W3AVQXsHhyW3VzghIAprvOaSpnFwqT8SPTdUjDN1anABjqkAXgm7hCN6yKNfCKa%2F9WiEoNy1PuHphxadNKgfLQ%2F782Sao0z9lNsxpUHF8U40HBwTzbG3GMVZX74ebLxhKuqOdlGh0cpyIfiYP%2BkIWo7yM1K7eBwviNeOmR2dyYNzjXoNFcvAQ%2FvZgewX9jfTzJ1h860P5VdD6u9KiErt4eVUzWu61Vc7SmOP6MEfIR4V1p1MoxN7XPvExyguXaYxU8TsNTfcD%2BJ&X-Amz-Signature=636ba3286a78895161955af24c6efd23a653e3efd2729aa6c8084bcbea3f43e7&X-Amz-SignedHeaders=host&x-id=GetObject)
