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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDDKZNYM%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T041013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIAFOzYjf6XIxqFj3H4abEPc75xwbAVFaUespzjvNnJGVAiBrubZZcPI2nFmejb7FqO%2B0efLH8ndgAitJn7hW%2BmhnNCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMULvFPlwv%2B4g8oMbxKtwDBEgOU76l9SZo0NjrRV%2B%2FPSgwv9D23fYCf6jmM5el3pAzHZi%2BVnjvHUeue%2Fo66GswcbJzxW85Qn0h%2Fdv56TWbP0%2FDo2xogZhhG0yBtN9jaN7EopMhw%2FAtk%2BELb4CTZzCap4T9rHLnvN%2BL32gULA5QjA98g0ICf7dA3Jd%2BXMzPuAx1x7ccA6JB5J9GDgwiEDO1dPy6DoFaMdfhawhV%2Fqp0mn5M1ndFFszHB6W%2F0jNF5AnN1dcZv45vB1dA8trsYGbluQCx%2Biu5gK1Ipurw1tSQMV06Y%2BM1PexAVxzD4oaHdo%2BcAyw1WnKRFR1zPeFRQqKR%2FYIY%2B7KYTi5hgKysRDXIgveKs425u0fUvtkTIuDt1PfL%2BUxvBoCI2Vp2sheydZudanuYB1T3P9JZvLA%2FR1YJf9iQJ6fIgKs6or9YRkPPj06X7YrYECu7%2B%2FMPNICgPkrK9tHCcN3QF8fXi%2FXDiU4Hfhq2wIdYk%2FA2eRx%2BrzBvQqtgsQ6%2FTpY%2BKE55hjMWCcKcof3WM1%2BNREDmgCmUziLq0tDS0Kh%2BqD77ofAlGDKsd6WCjZLkqP7Sjcki2bTiKGDGmRFcApAyeLvU1QCJzQyuvw5vyH3fnRha%2Fi%2BWj%2BDaSO%2B07W7Ok9FwoQAWv5QwscrKvQY6pgG9RFabCfmB%2FBD6B2o2RyP2wIXE3A%2BG%2FWrPG8BrMu%2BDUuji4fGohNE%2B2pZY%2FsDgX%2FYo4oNyt%2B5gYGIlADzRjN9OMOMcdUcO1VePvoxkNkd6A%2Bo8tbdUHx%2Fq8XcseaL5v3W85hxjqCsnJuXsA5NbPh58bhaLOFCCK%2BvwnTbmaNXBbMj%2FJekOIwRk4KHMEYc3Oiu9iwdfTqcCCDnHPZDu7SE4Gre5yV52&X-Amz-Signature=7b8a029cf4eb2e3bc047e40881e8302117b0a3d4b4e473a6ab60dd78d100fbdc&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDDKZNYM%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T041013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIAFOzYjf6XIxqFj3H4abEPc75xwbAVFaUespzjvNnJGVAiBrubZZcPI2nFmejb7FqO%2B0efLH8ndgAitJn7hW%2BmhnNCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMULvFPlwv%2B4g8oMbxKtwDBEgOU76l9SZo0NjrRV%2B%2FPSgwv9D23fYCf6jmM5el3pAzHZi%2BVnjvHUeue%2Fo66GswcbJzxW85Qn0h%2Fdv56TWbP0%2FDo2xogZhhG0yBtN9jaN7EopMhw%2FAtk%2BELb4CTZzCap4T9rHLnvN%2BL32gULA5QjA98g0ICf7dA3Jd%2BXMzPuAx1x7ccA6JB5J9GDgwiEDO1dPy6DoFaMdfhawhV%2Fqp0mn5M1ndFFszHB6W%2F0jNF5AnN1dcZv45vB1dA8trsYGbluQCx%2Biu5gK1Ipurw1tSQMV06Y%2BM1PexAVxzD4oaHdo%2BcAyw1WnKRFR1zPeFRQqKR%2FYIY%2B7KYTi5hgKysRDXIgveKs425u0fUvtkTIuDt1PfL%2BUxvBoCI2Vp2sheydZudanuYB1T3P9JZvLA%2FR1YJf9iQJ6fIgKs6or9YRkPPj06X7YrYECu7%2B%2FMPNICgPkrK9tHCcN3QF8fXi%2FXDiU4Hfhq2wIdYk%2FA2eRx%2BrzBvQqtgsQ6%2FTpY%2BKE55hjMWCcKcof3WM1%2BNREDmgCmUziLq0tDS0Kh%2BqD77ofAlGDKsd6WCjZLkqP7Sjcki2bTiKGDGmRFcApAyeLvU1QCJzQyuvw5vyH3fnRha%2Fi%2BWj%2BDaSO%2B07W7Ok9FwoQAWv5QwscrKvQY6pgG9RFabCfmB%2FBD6B2o2RyP2wIXE3A%2BG%2FWrPG8BrMu%2BDUuji4fGohNE%2B2pZY%2FsDgX%2FYo4oNyt%2B5gYGIlADzRjN9OMOMcdUcO1VePvoxkNkd6A%2Bo8tbdUHx%2Fq8XcseaL5v3W85hxjqCsnJuXsA5NbPh58bhaLOFCCK%2BvwnTbmaNXBbMj%2FJekOIwRk4KHMEYc3Oiu9iwdfTqcCCDnHPZDu7SE4Gre5yV52&X-Amz-Signature=d65db825eab4cdf5e5914fc264bf6f062fa1472e51f203d430cc4692d35a0ab8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDDKZNYM%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T041013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIAFOzYjf6XIxqFj3H4abEPc75xwbAVFaUespzjvNnJGVAiBrubZZcPI2nFmejb7FqO%2B0efLH8ndgAitJn7hW%2BmhnNCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMULvFPlwv%2B4g8oMbxKtwDBEgOU76l9SZo0NjrRV%2B%2FPSgwv9D23fYCf6jmM5el3pAzHZi%2BVnjvHUeue%2Fo66GswcbJzxW85Qn0h%2Fdv56TWbP0%2FDo2xogZhhG0yBtN9jaN7EopMhw%2FAtk%2BELb4CTZzCap4T9rHLnvN%2BL32gULA5QjA98g0ICf7dA3Jd%2BXMzPuAx1x7ccA6JB5J9GDgwiEDO1dPy6DoFaMdfhawhV%2Fqp0mn5M1ndFFszHB6W%2F0jNF5AnN1dcZv45vB1dA8trsYGbluQCx%2Biu5gK1Ipurw1tSQMV06Y%2BM1PexAVxzD4oaHdo%2BcAyw1WnKRFR1zPeFRQqKR%2FYIY%2B7KYTi5hgKysRDXIgveKs425u0fUvtkTIuDt1PfL%2BUxvBoCI2Vp2sheydZudanuYB1T3P9JZvLA%2FR1YJf9iQJ6fIgKs6or9YRkPPj06X7YrYECu7%2B%2FMPNICgPkrK9tHCcN3QF8fXi%2FXDiU4Hfhq2wIdYk%2FA2eRx%2BrzBvQqtgsQ6%2FTpY%2BKE55hjMWCcKcof3WM1%2BNREDmgCmUziLq0tDS0Kh%2BqD77ofAlGDKsd6WCjZLkqP7Sjcki2bTiKGDGmRFcApAyeLvU1QCJzQyuvw5vyH3fnRha%2Fi%2BWj%2BDaSO%2B07W7Ok9FwoQAWv5QwscrKvQY6pgG9RFabCfmB%2FBD6B2o2RyP2wIXE3A%2BG%2FWrPG8BrMu%2BDUuji4fGohNE%2B2pZY%2FsDgX%2FYo4oNyt%2B5gYGIlADzRjN9OMOMcdUcO1VePvoxkNkd6A%2Bo8tbdUHx%2Fq8XcseaL5v3W85hxjqCsnJuXsA5NbPh58bhaLOFCCK%2BvwnTbmaNXBbMj%2FJekOIwRk4KHMEYc3Oiu9iwdfTqcCCDnHPZDu7SE4Gre5yV52&X-Amz-Signature=1b4097f1df9cd0acca1299cc9ca27e17dd6e6230f03b281126b1889b20572d22&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDDKZNYM%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T041013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIAFOzYjf6XIxqFj3H4abEPc75xwbAVFaUespzjvNnJGVAiBrubZZcPI2nFmejb7FqO%2B0efLH8ndgAitJn7hW%2BmhnNCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMULvFPlwv%2B4g8oMbxKtwDBEgOU76l9SZo0NjrRV%2B%2FPSgwv9D23fYCf6jmM5el3pAzHZi%2BVnjvHUeue%2Fo66GswcbJzxW85Qn0h%2Fdv56TWbP0%2FDo2xogZhhG0yBtN9jaN7EopMhw%2FAtk%2BELb4CTZzCap4T9rHLnvN%2BL32gULA5QjA98g0ICf7dA3Jd%2BXMzPuAx1x7ccA6JB5J9GDgwiEDO1dPy6DoFaMdfhawhV%2Fqp0mn5M1ndFFszHB6W%2F0jNF5AnN1dcZv45vB1dA8trsYGbluQCx%2Biu5gK1Ipurw1tSQMV06Y%2BM1PexAVxzD4oaHdo%2BcAyw1WnKRFR1zPeFRQqKR%2FYIY%2B7KYTi5hgKysRDXIgveKs425u0fUvtkTIuDt1PfL%2BUxvBoCI2Vp2sheydZudanuYB1T3P9JZvLA%2FR1YJf9iQJ6fIgKs6or9YRkPPj06X7YrYECu7%2B%2FMPNICgPkrK9tHCcN3QF8fXi%2FXDiU4Hfhq2wIdYk%2FA2eRx%2BrzBvQqtgsQ6%2FTpY%2BKE55hjMWCcKcof3WM1%2BNREDmgCmUziLq0tDS0Kh%2BqD77ofAlGDKsd6WCjZLkqP7Sjcki2bTiKGDGmRFcApAyeLvU1QCJzQyuvw5vyH3fnRha%2Fi%2BWj%2BDaSO%2B07W7Ok9FwoQAWv5QwscrKvQY6pgG9RFabCfmB%2FBD6B2o2RyP2wIXE3A%2BG%2FWrPG8BrMu%2BDUuji4fGohNE%2B2pZY%2FsDgX%2FYo4oNyt%2B5gYGIlADzRjN9OMOMcdUcO1VePvoxkNkd6A%2Bo8tbdUHx%2Fq8XcseaL5v3W85hxjqCsnJuXsA5NbPh58bhaLOFCCK%2BvwnTbmaNXBbMj%2FJekOIwRk4KHMEYc3Oiu9iwdfTqcCCDnHPZDu7SE4Gre5yV52&X-Amz-Signature=9b9808b825a3b8df7564f63648aa73dc9aaa14822581e5f59745627a2d3b9a38&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDDKZNYM%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T041013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIAFOzYjf6XIxqFj3H4abEPc75xwbAVFaUespzjvNnJGVAiBrubZZcPI2nFmejb7FqO%2B0efLH8ndgAitJn7hW%2BmhnNCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMULvFPlwv%2B4g8oMbxKtwDBEgOU76l9SZo0NjrRV%2B%2FPSgwv9D23fYCf6jmM5el3pAzHZi%2BVnjvHUeue%2Fo66GswcbJzxW85Qn0h%2Fdv56TWbP0%2FDo2xogZhhG0yBtN9jaN7EopMhw%2FAtk%2BELb4CTZzCap4T9rHLnvN%2BL32gULA5QjA98g0ICf7dA3Jd%2BXMzPuAx1x7ccA6JB5J9GDgwiEDO1dPy6DoFaMdfhawhV%2Fqp0mn5M1ndFFszHB6W%2F0jNF5AnN1dcZv45vB1dA8trsYGbluQCx%2Biu5gK1Ipurw1tSQMV06Y%2BM1PexAVxzD4oaHdo%2BcAyw1WnKRFR1zPeFRQqKR%2FYIY%2B7KYTi5hgKysRDXIgveKs425u0fUvtkTIuDt1PfL%2BUxvBoCI2Vp2sheydZudanuYB1T3P9JZvLA%2FR1YJf9iQJ6fIgKs6or9YRkPPj06X7YrYECu7%2B%2FMPNICgPkrK9tHCcN3QF8fXi%2FXDiU4Hfhq2wIdYk%2FA2eRx%2BrzBvQqtgsQ6%2FTpY%2BKE55hjMWCcKcof3WM1%2BNREDmgCmUziLq0tDS0Kh%2BqD77ofAlGDKsd6WCjZLkqP7Sjcki2bTiKGDGmRFcApAyeLvU1QCJzQyuvw5vyH3fnRha%2Fi%2BWj%2BDaSO%2B07W7Ok9FwoQAWv5QwscrKvQY6pgG9RFabCfmB%2FBD6B2o2RyP2wIXE3A%2BG%2FWrPG8BrMu%2BDUuji4fGohNE%2B2pZY%2FsDgX%2FYo4oNyt%2B5gYGIlADzRjN9OMOMcdUcO1VePvoxkNkd6A%2Bo8tbdUHx%2Fq8XcseaL5v3W85hxjqCsnJuXsA5NbPh58bhaLOFCCK%2BvwnTbmaNXBbMj%2FJekOIwRk4KHMEYc3Oiu9iwdfTqcCCDnHPZDu7SE4Gre5yV52&X-Amz-Signature=36464ea079d03381b5b590261130a9aa4acf1542ac14e709cef1350e0ce7f572&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDDKZNYM%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T041013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIAFOzYjf6XIxqFj3H4abEPc75xwbAVFaUespzjvNnJGVAiBrubZZcPI2nFmejb7FqO%2B0efLH8ndgAitJn7hW%2BmhnNCr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMULvFPlwv%2B4g8oMbxKtwDBEgOU76l9SZo0NjrRV%2B%2FPSgwv9D23fYCf6jmM5el3pAzHZi%2BVnjvHUeue%2Fo66GswcbJzxW85Qn0h%2Fdv56TWbP0%2FDo2xogZhhG0yBtN9jaN7EopMhw%2FAtk%2BELb4CTZzCap4T9rHLnvN%2BL32gULA5QjA98g0ICf7dA3Jd%2BXMzPuAx1x7ccA6JB5J9GDgwiEDO1dPy6DoFaMdfhawhV%2Fqp0mn5M1ndFFszHB6W%2F0jNF5AnN1dcZv45vB1dA8trsYGbluQCx%2Biu5gK1Ipurw1tSQMV06Y%2BM1PexAVxzD4oaHdo%2BcAyw1WnKRFR1zPeFRQqKR%2FYIY%2B7KYTi5hgKysRDXIgveKs425u0fUvtkTIuDt1PfL%2BUxvBoCI2Vp2sheydZudanuYB1T3P9JZvLA%2FR1YJf9iQJ6fIgKs6or9YRkPPj06X7YrYECu7%2B%2FMPNICgPkrK9tHCcN3QF8fXi%2FXDiU4Hfhq2wIdYk%2FA2eRx%2BrzBvQqtgsQ6%2FTpY%2BKE55hjMWCcKcof3WM1%2BNREDmgCmUziLq0tDS0Kh%2BqD77ofAlGDKsd6WCjZLkqP7Sjcki2bTiKGDGmRFcApAyeLvU1QCJzQyuvw5vyH3fnRha%2Fi%2BWj%2BDaSO%2B07W7Ok9FwoQAWv5QwscrKvQY6pgG9RFabCfmB%2FBD6B2o2RyP2wIXE3A%2BG%2FWrPG8BrMu%2BDUuji4fGohNE%2B2pZY%2FsDgX%2FYo4oNyt%2B5gYGIlADzRjN9OMOMcdUcO1VePvoxkNkd6A%2Bo8tbdUHx%2Fq8XcseaL5v3W85hxjqCsnJuXsA5NbPh58bhaLOFCCK%2BvwnTbmaNXBbMj%2FJekOIwRk4KHMEYc3Oiu9iwdfTqcCCDnHPZDu7SE4Gre5yV52&X-Amz-Signature=1ae4a65bfa8066aaa01d333aee62149f75347d5e50555aeae2bc34069ac88898&X-Amz-SignedHeaders=host&x-id=GetObject)
