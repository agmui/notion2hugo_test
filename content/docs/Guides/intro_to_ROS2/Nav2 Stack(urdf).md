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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSDZG7JN%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T181254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOLwCEEpBzTQmPyzDZ1%2BaIdPY0bUFC7uOUVJoD%2B9plDAiEA4cKPT6hFYhI0Shmkoy3d9NNphd8O656gawyVaTdOepgqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIjUe748UUjqUl36yrcA2RTA25u1iH2Hnt0NorEJ236B0jY2J36aXEs895XQ%2BgnNkcl9eCKeCneegGqx1VgBiydB8H0Qf0xOY1tUEUPMyAIcE1%2F%2FcON%2Fc%2Bm7XbRxV%2BOLWDqiUrHNCZfiWgh%2B5a11lFxGtRN5WnMllWlq4ZKHNmGh44uKz8LFlGaRkUF9eB4HuMqYBErABHhHE39TFo68atWhxXgRoqsEJpW9Wq5exIQlEzn7jZV%2FZBLVXh%2FJ%2B%2Fn7Pg0wddAeeo2qNycI1pL8shrfw6uvY0Gl0BTMMc4tUcEnusz1B%2BtnObGSKOsGO9KVmn2sJTl%2BKyPbhZYXHktq%2FlfPneaXxhUGxaUlrOkQkJGzCpF066Mu4F7ftXm5tpujaJpWXz9f9ZdYzVK0u0ovPLoPle%2B6XEAFcM6J5bv2kzQnc9xceFiLckfCIu%2BuX2j8g99rpbC%2B9%2BJ6KqPNciug5b5IKIUV%2BZfxkA3IlehvFOvkXSZYPq0WwrAKK0luLJcItCQ2K0McxV%2BtjKviFeT4kdDcce5Bpu%2FSGig1isJPa6MfXWboWOcerHPfjLCzZ%2BmgE29NCbYmX8J8atYTekR0jtddBD9%2BWK71lJ1yGrG6XM7x8lKckWOeI7aDnf%2BoGPEN%2Fe7SiyLXhn43xmbMN7plcMGOqUBUr0PBxdKq2iLNVtDeKbV0%2F9Aj61y%2FWc2jY6Q5hVlMYJEqxIEjKNaLcniwRcLUEujy5hp45WgWCQgrMWnouz6tQq5K5zT3NvONawF%2Bu5iehiokHj1cZnBvt4vZp21g2lJPUjybp%2Fox3Q7m6muIJqXSgWK47MXhR0mu3Sbncl9mxbu0r8aR3e4f2rDxGek9ep9OsCeErhJRa4%2BGR9rMXCh0kq6X65u&X-Amz-Signature=49709bdf0a8deba19a09ce183b94f2c63a1e5ffd9f07019c78a881066f21903e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSDZG7JN%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T181254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOLwCEEpBzTQmPyzDZ1%2BaIdPY0bUFC7uOUVJoD%2B9plDAiEA4cKPT6hFYhI0Shmkoy3d9NNphd8O656gawyVaTdOepgqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIjUe748UUjqUl36yrcA2RTA25u1iH2Hnt0NorEJ236B0jY2J36aXEs895XQ%2BgnNkcl9eCKeCneegGqx1VgBiydB8H0Qf0xOY1tUEUPMyAIcE1%2F%2FcON%2Fc%2Bm7XbRxV%2BOLWDqiUrHNCZfiWgh%2B5a11lFxGtRN5WnMllWlq4ZKHNmGh44uKz8LFlGaRkUF9eB4HuMqYBErABHhHE39TFo68atWhxXgRoqsEJpW9Wq5exIQlEzn7jZV%2FZBLVXh%2FJ%2B%2Fn7Pg0wddAeeo2qNycI1pL8shrfw6uvY0Gl0BTMMc4tUcEnusz1B%2BtnObGSKOsGO9KVmn2sJTl%2BKyPbhZYXHktq%2FlfPneaXxhUGxaUlrOkQkJGzCpF066Mu4F7ftXm5tpujaJpWXz9f9ZdYzVK0u0ovPLoPle%2B6XEAFcM6J5bv2kzQnc9xceFiLckfCIu%2BuX2j8g99rpbC%2B9%2BJ6KqPNciug5b5IKIUV%2BZfxkA3IlehvFOvkXSZYPq0WwrAKK0luLJcItCQ2K0McxV%2BtjKviFeT4kdDcce5Bpu%2FSGig1isJPa6MfXWboWOcerHPfjLCzZ%2BmgE29NCbYmX8J8atYTekR0jtddBD9%2BWK71lJ1yGrG6XM7x8lKckWOeI7aDnf%2BoGPEN%2Fe7SiyLXhn43xmbMN7plcMGOqUBUr0PBxdKq2iLNVtDeKbV0%2F9Aj61y%2FWc2jY6Q5hVlMYJEqxIEjKNaLcniwRcLUEujy5hp45WgWCQgrMWnouz6tQq5K5zT3NvONawF%2Bu5iehiokHj1cZnBvt4vZp21g2lJPUjybp%2Fox3Q7m6muIJqXSgWK47MXhR0mu3Sbncl9mxbu0r8aR3e4f2rDxGek9ep9OsCeErhJRa4%2BGR9rMXCh0kq6X65u&X-Amz-Signature=0f789b19d5b5e2d0b853fc620b85eb1fbd38d07fcc7fe3b3753c23727db77ef3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSDZG7JN%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T181254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOLwCEEpBzTQmPyzDZ1%2BaIdPY0bUFC7uOUVJoD%2B9plDAiEA4cKPT6hFYhI0Shmkoy3d9NNphd8O656gawyVaTdOepgqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIjUe748UUjqUl36yrcA2RTA25u1iH2Hnt0NorEJ236B0jY2J36aXEs895XQ%2BgnNkcl9eCKeCneegGqx1VgBiydB8H0Qf0xOY1tUEUPMyAIcE1%2F%2FcON%2Fc%2Bm7XbRxV%2BOLWDqiUrHNCZfiWgh%2B5a11lFxGtRN5WnMllWlq4ZKHNmGh44uKz8LFlGaRkUF9eB4HuMqYBErABHhHE39TFo68atWhxXgRoqsEJpW9Wq5exIQlEzn7jZV%2FZBLVXh%2FJ%2B%2Fn7Pg0wddAeeo2qNycI1pL8shrfw6uvY0Gl0BTMMc4tUcEnusz1B%2BtnObGSKOsGO9KVmn2sJTl%2BKyPbhZYXHktq%2FlfPneaXxhUGxaUlrOkQkJGzCpF066Mu4F7ftXm5tpujaJpWXz9f9ZdYzVK0u0ovPLoPle%2B6XEAFcM6J5bv2kzQnc9xceFiLckfCIu%2BuX2j8g99rpbC%2B9%2BJ6KqPNciug5b5IKIUV%2BZfxkA3IlehvFOvkXSZYPq0WwrAKK0luLJcItCQ2K0McxV%2BtjKviFeT4kdDcce5Bpu%2FSGig1isJPa6MfXWboWOcerHPfjLCzZ%2BmgE29NCbYmX8J8atYTekR0jtddBD9%2BWK71lJ1yGrG6XM7x8lKckWOeI7aDnf%2BoGPEN%2Fe7SiyLXhn43xmbMN7plcMGOqUBUr0PBxdKq2iLNVtDeKbV0%2F9Aj61y%2FWc2jY6Q5hVlMYJEqxIEjKNaLcniwRcLUEujy5hp45WgWCQgrMWnouz6tQq5K5zT3NvONawF%2Bu5iehiokHj1cZnBvt4vZp21g2lJPUjybp%2Fox3Q7m6muIJqXSgWK47MXhR0mu3Sbncl9mxbu0r8aR3e4f2rDxGek9ep9OsCeErhJRa4%2BGR9rMXCh0kq6X65u&X-Amz-Signature=f652c0190f0261648652dce3ee96973c03a2648848d15c2d1733df2405c58641&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSDZG7JN%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T181254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOLwCEEpBzTQmPyzDZ1%2BaIdPY0bUFC7uOUVJoD%2B9plDAiEA4cKPT6hFYhI0Shmkoy3d9NNphd8O656gawyVaTdOepgqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIjUe748UUjqUl36yrcA2RTA25u1iH2Hnt0NorEJ236B0jY2J36aXEs895XQ%2BgnNkcl9eCKeCneegGqx1VgBiydB8H0Qf0xOY1tUEUPMyAIcE1%2F%2FcON%2Fc%2Bm7XbRxV%2BOLWDqiUrHNCZfiWgh%2B5a11lFxGtRN5WnMllWlq4ZKHNmGh44uKz8LFlGaRkUF9eB4HuMqYBErABHhHE39TFo68atWhxXgRoqsEJpW9Wq5exIQlEzn7jZV%2FZBLVXh%2FJ%2B%2Fn7Pg0wddAeeo2qNycI1pL8shrfw6uvY0Gl0BTMMc4tUcEnusz1B%2BtnObGSKOsGO9KVmn2sJTl%2BKyPbhZYXHktq%2FlfPneaXxhUGxaUlrOkQkJGzCpF066Mu4F7ftXm5tpujaJpWXz9f9ZdYzVK0u0ovPLoPle%2B6XEAFcM6J5bv2kzQnc9xceFiLckfCIu%2BuX2j8g99rpbC%2B9%2BJ6KqPNciug5b5IKIUV%2BZfxkA3IlehvFOvkXSZYPq0WwrAKK0luLJcItCQ2K0McxV%2BtjKviFeT4kdDcce5Bpu%2FSGig1isJPa6MfXWboWOcerHPfjLCzZ%2BmgE29NCbYmX8J8atYTekR0jtddBD9%2BWK71lJ1yGrG6XM7x8lKckWOeI7aDnf%2BoGPEN%2Fe7SiyLXhn43xmbMN7plcMGOqUBUr0PBxdKq2iLNVtDeKbV0%2F9Aj61y%2FWc2jY6Q5hVlMYJEqxIEjKNaLcniwRcLUEujy5hp45WgWCQgrMWnouz6tQq5K5zT3NvONawF%2Bu5iehiokHj1cZnBvt4vZp21g2lJPUjybp%2Fox3Q7m6muIJqXSgWK47MXhR0mu3Sbncl9mxbu0r8aR3e4f2rDxGek9ep9OsCeErhJRa4%2BGR9rMXCh0kq6X65u&X-Amz-Signature=fc8e1e945ce8106de3d895e9009fa29605796aeb43c02de6406faeab490c3db9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSDZG7JN%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T181254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOLwCEEpBzTQmPyzDZ1%2BaIdPY0bUFC7uOUVJoD%2B9plDAiEA4cKPT6hFYhI0Shmkoy3d9NNphd8O656gawyVaTdOepgqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIjUe748UUjqUl36yrcA2RTA25u1iH2Hnt0NorEJ236B0jY2J36aXEs895XQ%2BgnNkcl9eCKeCneegGqx1VgBiydB8H0Qf0xOY1tUEUPMyAIcE1%2F%2FcON%2Fc%2Bm7XbRxV%2BOLWDqiUrHNCZfiWgh%2B5a11lFxGtRN5WnMllWlq4ZKHNmGh44uKz8LFlGaRkUF9eB4HuMqYBErABHhHE39TFo68atWhxXgRoqsEJpW9Wq5exIQlEzn7jZV%2FZBLVXh%2FJ%2B%2Fn7Pg0wddAeeo2qNycI1pL8shrfw6uvY0Gl0BTMMc4tUcEnusz1B%2BtnObGSKOsGO9KVmn2sJTl%2BKyPbhZYXHktq%2FlfPneaXxhUGxaUlrOkQkJGzCpF066Mu4F7ftXm5tpujaJpWXz9f9ZdYzVK0u0ovPLoPle%2B6XEAFcM6J5bv2kzQnc9xceFiLckfCIu%2BuX2j8g99rpbC%2B9%2BJ6KqPNciug5b5IKIUV%2BZfxkA3IlehvFOvkXSZYPq0WwrAKK0luLJcItCQ2K0McxV%2BtjKviFeT4kdDcce5Bpu%2FSGig1isJPa6MfXWboWOcerHPfjLCzZ%2BmgE29NCbYmX8J8atYTekR0jtddBD9%2BWK71lJ1yGrG6XM7x8lKckWOeI7aDnf%2BoGPEN%2Fe7SiyLXhn43xmbMN7plcMGOqUBUr0PBxdKq2iLNVtDeKbV0%2F9Aj61y%2FWc2jY6Q5hVlMYJEqxIEjKNaLcniwRcLUEujy5hp45WgWCQgrMWnouz6tQq5K5zT3NvONawF%2Bu5iehiokHj1cZnBvt4vZp21g2lJPUjybp%2Fox3Q7m6muIJqXSgWK47MXhR0mu3Sbncl9mxbu0r8aR3e4f2rDxGek9ep9OsCeErhJRa4%2BGR9rMXCh0kq6X65u&X-Amz-Signature=3e979a07c72ff10e5f08db752da4a4d7a586f1919b629e4103420f9bc5d08d72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSDZG7JN%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T181254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEOLwCEEpBzTQmPyzDZ1%2BaIdPY0bUFC7uOUVJoD%2B9plDAiEA4cKPT6hFYhI0Shmkoy3d9NNphd8O656gawyVaTdOepgqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGIjUe748UUjqUl36yrcA2RTA25u1iH2Hnt0NorEJ236B0jY2J36aXEs895XQ%2BgnNkcl9eCKeCneegGqx1VgBiydB8H0Qf0xOY1tUEUPMyAIcE1%2F%2FcON%2Fc%2Bm7XbRxV%2BOLWDqiUrHNCZfiWgh%2B5a11lFxGtRN5WnMllWlq4ZKHNmGh44uKz8LFlGaRkUF9eB4HuMqYBErABHhHE39TFo68atWhxXgRoqsEJpW9Wq5exIQlEzn7jZV%2FZBLVXh%2FJ%2B%2Fn7Pg0wddAeeo2qNycI1pL8shrfw6uvY0Gl0BTMMc4tUcEnusz1B%2BtnObGSKOsGO9KVmn2sJTl%2BKyPbhZYXHktq%2FlfPneaXxhUGxaUlrOkQkJGzCpF066Mu4F7ftXm5tpujaJpWXz9f9ZdYzVK0u0ovPLoPle%2B6XEAFcM6J5bv2kzQnc9xceFiLckfCIu%2BuX2j8g99rpbC%2B9%2BJ6KqPNciug5b5IKIUV%2BZfxkA3IlehvFOvkXSZYPq0WwrAKK0luLJcItCQ2K0McxV%2BtjKviFeT4kdDcce5Bpu%2FSGig1isJPa6MfXWboWOcerHPfjLCzZ%2BmgE29NCbYmX8J8atYTekR0jtddBD9%2BWK71lJ1yGrG6XM7x8lKckWOeI7aDnf%2BoGPEN%2Fe7SiyLXhn43xmbMN7plcMGOqUBUr0PBxdKq2iLNVtDeKbV0%2F9Aj61y%2FWc2jY6Q5hVlMYJEqxIEjKNaLcniwRcLUEujy5hp45WgWCQgrMWnouz6tQq5K5zT3NvONawF%2Bu5iehiokHj1cZnBvt4vZp21g2lJPUjybp%2Fox3Q7m6muIJqXSgWK47MXhR0mu3Sbncl9mxbu0r8aR3e4f2rDxGek9ep9OsCeErhJRa4%2BGR9rMXCh0kq6X65u&X-Amz-Signature=0652622fc60c814f1ebfcf826fcaec5751a6d7f23e34e9a22bffc544d6ed5969&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
