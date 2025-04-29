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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UM43JXU%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAM96WScd2q8x1eA0XAHOu0WpzoiQEUIk5AfyxjBazg4AiAFX%2F4%2B3ot5gg486SoVyj1K8i5lSN6FobX%2FPQP17NbttSqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5YBNPRyhDeM4viPgKtwDxx8dDFxfajBTbi0KQ19YMcWYTIk9lcK2m%2F4kXBvQrsTeF5VFSC3sj3KdbDzbIlfwsdyvquRjRKFywcUNTWRRBtUjQjxzePzcaND0kvIBMjoT8IY5hrMuMw6QMe8ETn8GBNZE5LL5tyqBH%2B8TUYFQzXP0ofKVL9P6V%2BMTMxD%2FwdMXWvGf1fFFfg2bSzLaLMQEXuVY528Wycgolmp%2B4Voo%2BNegGMWjpUK73EyjfWV5RQbwqRG5EivLxXLkBYOjay7gZHKcuWXKk1%2BzXv4xq4uKDnczWp5VEZiMPIE2x7bluhMjf2HPDiyXTROQUPaVVu3Ct%2BjfGDDPY26boOMaTHGSLX6LRfwGkfJBzCfHLyhpGEya4jFJH%2FIJH03nbqyOw6TpDzysWjPyx8FQlyMpQyAgyw3HeG3NEzNvaBM2p%2BPuE7IVmVFWZLttAdUj5frLjTb3hRtjQEMT1Qk%2FIjm5XhwTfQTQGpjkkIYnvDRVYDk9QJwABaymfZWwquVE%2Fz%2BoNCJ0EVZOsIxBQfP8s30qAnUkAjENzv4kobLLthiptnSw0mzKAn4kE4hYIq8nVGokd3AyOd%2B5w0KuCx%2Fr7K4IuCqZHpFvWvv0KW8VooarYJyV8frX02%2BAb063ILxw6ZAwrsDDwAY6pgGwc3tTemXps4tOtrPtU79W8oxBPzLK3Wiwf8O6TotQipqJxlQJxH%2BQ7Bo%2BPOJRbutschhl9mTizuVYAyI5nsXlRZ%2Fhc4Gy8JVs1ROYYqLRGSfuU9c1j2zcNsUPN8yfBs%2FCLAnmXn607%2BIg1KmuDsF99AMt9FUczNMnT9B%2F86UWlG4dky9EeqOdzFRqts38T5%2FySHMXyRL%2FU5TCTzmf2WXQ21Ia3kS%2B&X-Amz-Signature=4636ec231cef60cb5c2b6e78563dc8e412e05fb55533512d2f787ecac669f82f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UM43JXU%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAM96WScd2q8x1eA0XAHOu0WpzoiQEUIk5AfyxjBazg4AiAFX%2F4%2B3ot5gg486SoVyj1K8i5lSN6FobX%2FPQP17NbttSqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5YBNPRyhDeM4viPgKtwDxx8dDFxfajBTbi0KQ19YMcWYTIk9lcK2m%2F4kXBvQrsTeF5VFSC3sj3KdbDzbIlfwsdyvquRjRKFywcUNTWRRBtUjQjxzePzcaND0kvIBMjoT8IY5hrMuMw6QMe8ETn8GBNZE5LL5tyqBH%2B8TUYFQzXP0ofKVL9P6V%2BMTMxD%2FwdMXWvGf1fFFfg2bSzLaLMQEXuVY528Wycgolmp%2B4Voo%2BNegGMWjpUK73EyjfWV5RQbwqRG5EivLxXLkBYOjay7gZHKcuWXKk1%2BzXv4xq4uKDnczWp5VEZiMPIE2x7bluhMjf2HPDiyXTROQUPaVVu3Ct%2BjfGDDPY26boOMaTHGSLX6LRfwGkfJBzCfHLyhpGEya4jFJH%2FIJH03nbqyOw6TpDzysWjPyx8FQlyMpQyAgyw3HeG3NEzNvaBM2p%2BPuE7IVmVFWZLttAdUj5frLjTb3hRtjQEMT1Qk%2FIjm5XhwTfQTQGpjkkIYnvDRVYDk9QJwABaymfZWwquVE%2Fz%2BoNCJ0EVZOsIxBQfP8s30qAnUkAjENzv4kobLLthiptnSw0mzKAn4kE4hYIq8nVGokd3AyOd%2B5w0KuCx%2Fr7K4IuCqZHpFvWvv0KW8VooarYJyV8frX02%2BAb063ILxw6ZAwrsDDwAY6pgGwc3tTemXps4tOtrPtU79W8oxBPzLK3Wiwf8O6TotQipqJxlQJxH%2BQ7Bo%2BPOJRbutschhl9mTizuVYAyI5nsXlRZ%2Fhc4Gy8JVs1ROYYqLRGSfuU9c1j2zcNsUPN8yfBs%2FCLAnmXn607%2BIg1KmuDsF99AMt9FUczNMnT9B%2F86UWlG4dky9EeqOdzFRqts38T5%2FySHMXyRL%2FU5TCTzmf2WXQ21Ia3kS%2B&X-Amz-Signature=0dda8d884b45f237e5989aadf0ffda79c1c844dbf081ca7935a4037f0573c985&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UM43JXU%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAM96WScd2q8x1eA0XAHOu0WpzoiQEUIk5AfyxjBazg4AiAFX%2F4%2B3ot5gg486SoVyj1K8i5lSN6FobX%2FPQP17NbttSqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5YBNPRyhDeM4viPgKtwDxx8dDFxfajBTbi0KQ19YMcWYTIk9lcK2m%2F4kXBvQrsTeF5VFSC3sj3KdbDzbIlfwsdyvquRjRKFywcUNTWRRBtUjQjxzePzcaND0kvIBMjoT8IY5hrMuMw6QMe8ETn8GBNZE5LL5tyqBH%2B8TUYFQzXP0ofKVL9P6V%2BMTMxD%2FwdMXWvGf1fFFfg2bSzLaLMQEXuVY528Wycgolmp%2B4Voo%2BNegGMWjpUK73EyjfWV5RQbwqRG5EivLxXLkBYOjay7gZHKcuWXKk1%2BzXv4xq4uKDnczWp5VEZiMPIE2x7bluhMjf2HPDiyXTROQUPaVVu3Ct%2BjfGDDPY26boOMaTHGSLX6LRfwGkfJBzCfHLyhpGEya4jFJH%2FIJH03nbqyOw6TpDzysWjPyx8FQlyMpQyAgyw3HeG3NEzNvaBM2p%2BPuE7IVmVFWZLttAdUj5frLjTb3hRtjQEMT1Qk%2FIjm5XhwTfQTQGpjkkIYnvDRVYDk9QJwABaymfZWwquVE%2Fz%2BoNCJ0EVZOsIxBQfP8s30qAnUkAjENzv4kobLLthiptnSw0mzKAn4kE4hYIq8nVGokd3AyOd%2B5w0KuCx%2Fr7K4IuCqZHpFvWvv0KW8VooarYJyV8frX02%2BAb063ILxw6ZAwrsDDwAY6pgGwc3tTemXps4tOtrPtU79W8oxBPzLK3Wiwf8O6TotQipqJxlQJxH%2BQ7Bo%2BPOJRbutschhl9mTizuVYAyI5nsXlRZ%2Fhc4Gy8JVs1ROYYqLRGSfuU9c1j2zcNsUPN8yfBs%2FCLAnmXn607%2BIg1KmuDsF99AMt9FUczNMnT9B%2F86UWlG4dky9EeqOdzFRqts38T5%2FySHMXyRL%2FU5TCTzmf2WXQ21Ia3kS%2B&X-Amz-Signature=097a01625befce687c4343b714e2b01799c64f4172ae537deae0676b082bc080&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UM43JXU%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAM96WScd2q8x1eA0XAHOu0WpzoiQEUIk5AfyxjBazg4AiAFX%2F4%2B3ot5gg486SoVyj1K8i5lSN6FobX%2FPQP17NbttSqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5YBNPRyhDeM4viPgKtwDxx8dDFxfajBTbi0KQ19YMcWYTIk9lcK2m%2F4kXBvQrsTeF5VFSC3sj3KdbDzbIlfwsdyvquRjRKFywcUNTWRRBtUjQjxzePzcaND0kvIBMjoT8IY5hrMuMw6QMe8ETn8GBNZE5LL5tyqBH%2B8TUYFQzXP0ofKVL9P6V%2BMTMxD%2FwdMXWvGf1fFFfg2bSzLaLMQEXuVY528Wycgolmp%2B4Voo%2BNegGMWjpUK73EyjfWV5RQbwqRG5EivLxXLkBYOjay7gZHKcuWXKk1%2BzXv4xq4uKDnczWp5VEZiMPIE2x7bluhMjf2HPDiyXTROQUPaVVu3Ct%2BjfGDDPY26boOMaTHGSLX6LRfwGkfJBzCfHLyhpGEya4jFJH%2FIJH03nbqyOw6TpDzysWjPyx8FQlyMpQyAgyw3HeG3NEzNvaBM2p%2BPuE7IVmVFWZLttAdUj5frLjTb3hRtjQEMT1Qk%2FIjm5XhwTfQTQGpjkkIYnvDRVYDk9QJwABaymfZWwquVE%2Fz%2BoNCJ0EVZOsIxBQfP8s30qAnUkAjENzv4kobLLthiptnSw0mzKAn4kE4hYIq8nVGokd3AyOd%2B5w0KuCx%2Fr7K4IuCqZHpFvWvv0KW8VooarYJyV8frX02%2BAb063ILxw6ZAwrsDDwAY6pgGwc3tTemXps4tOtrPtU79W8oxBPzLK3Wiwf8O6TotQipqJxlQJxH%2BQ7Bo%2BPOJRbutschhl9mTizuVYAyI5nsXlRZ%2Fhc4Gy8JVs1ROYYqLRGSfuU9c1j2zcNsUPN8yfBs%2FCLAnmXn607%2BIg1KmuDsF99AMt9FUczNMnT9B%2F86UWlG4dky9EeqOdzFRqts38T5%2FySHMXyRL%2FU5TCTzmf2WXQ21Ia3kS%2B&X-Amz-Signature=09ceb3bd93fccc2c09a0b18b2964f75c6c5b3de8bea39d3fee4d1f447ad2a41b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UM43JXU%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAM96WScd2q8x1eA0XAHOu0WpzoiQEUIk5AfyxjBazg4AiAFX%2F4%2B3ot5gg486SoVyj1K8i5lSN6FobX%2FPQP17NbttSqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5YBNPRyhDeM4viPgKtwDxx8dDFxfajBTbi0KQ19YMcWYTIk9lcK2m%2F4kXBvQrsTeF5VFSC3sj3KdbDzbIlfwsdyvquRjRKFywcUNTWRRBtUjQjxzePzcaND0kvIBMjoT8IY5hrMuMw6QMe8ETn8GBNZE5LL5tyqBH%2B8TUYFQzXP0ofKVL9P6V%2BMTMxD%2FwdMXWvGf1fFFfg2bSzLaLMQEXuVY528Wycgolmp%2B4Voo%2BNegGMWjpUK73EyjfWV5RQbwqRG5EivLxXLkBYOjay7gZHKcuWXKk1%2BzXv4xq4uKDnczWp5VEZiMPIE2x7bluhMjf2HPDiyXTROQUPaVVu3Ct%2BjfGDDPY26boOMaTHGSLX6LRfwGkfJBzCfHLyhpGEya4jFJH%2FIJH03nbqyOw6TpDzysWjPyx8FQlyMpQyAgyw3HeG3NEzNvaBM2p%2BPuE7IVmVFWZLttAdUj5frLjTb3hRtjQEMT1Qk%2FIjm5XhwTfQTQGpjkkIYnvDRVYDk9QJwABaymfZWwquVE%2Fz%2BoNCJ0EVZOsIxBQfP8s30qAnUkAjENzv4kobLLthiptnSw0mzKAn4kE4hYIq8nVGokd3AyOd%2B5w0KuCx%2Fr7K4IuCqZHpFvWvv0KW8VooarYJyV8frX02%2BAb063ILxw6ZAwrsDDwAY6pgGwc3tTemXps4tOtrPtU79W8oxBPzLK3Wiwf8O6TotQipqJxlQJxH%2BQ7Bo%2BPOJRbutschhl9mTizuVYAyI5nsXlRZ%2Fhc4Gy8JVs1ROYYqLRGSfuU9c1j2zcNsUPN8yfBs%2FCLAnmXn607%2BIg1KmuDsF99AMt9FUczNMnT9B%2F86UWlG4dky9EeqOdzFRqts38T5%2FySHMXyRL%2FU5TCTzmf2WXQ21Ia3kS%2B&X-Amz-Signature=7485a101f24e40414246c1051174f472d2f8f87c897f4d9c6fbe358885ec4238&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UM43JXU%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T150853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAM96WScd2q8x1eA0XAHOu0WpzoiQEUIk5AfyxjBazg4AiAFX%2F4%2B3ot5gg486SoVyj1K8i5lSN6FobX%2FPQP17NbttSqIBAiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5YBNPRyhDeM4viPgKtwDxx8dDFxfajBTbi0KQ19YMcWYTIk9lcK2m%2F4kXBvQrsTeF5VFSC3sj3KdbDzbIlfwsdyvquRjRKFywcUNTWRRBtUjQjxzePzcaND0kvIBMjoT8IY5hrMuMw6QMe8ETn8GBNZE5LL5tyqBH%2B8TUYFQzXP0ofKVL9P6V%2BMTMxD%2FwdMXWvGf1fFFfg2bSzLaLMQEXuVY528Wycgolmp%2B4Voo%2BNegGMWjpUK73EyjfWV5RQbwqRG5EivLxXLkBYOjay7gZHKcuWXKk1%2BzXv4xq4uKDnczWp5VEZiMPIE2x7bluhMjf2HPDiyXTROQUPaVVu3Ct%2BjfGDDPY26boOMaTHGSLX6LRfwGkfJBzCfHLyhpGEya4jFJH%2FIJH03nbqyOw6TpDzysWjPyx8FQlyMpQyAgyw3HeG3NEzNvaBM2p%2BPuE7IVmVFWZLttAdUj5frLjTb3hRtjQEMT1Qk%2FIjm5XhwTfQTQGpjkkIYnvDRVYDk9QJwABaymfZWwquVE%2Fz%2BoNCJ0EVZOsIxBQfP8s30qAnUkAjENzv4kobLLthiptnSw0mzKAn4kE4hYIq8nVGokd3AyOd%2B5w0KuCx%2Fr7K4IuCqZHpFvWvv0KW8VooarYJyV8frX02%2BAb063ILxw6ZAwrsDDwAY6pgGwc3tTemXps4tOtrPtU79W8oxBPzLK3Wiwf8O6TotQipqJxlQJxH%2BQ7Bo%2BPOJRbutschhl9mTizuVYAyI5nsXlRZ%2Fhc4Gy8JVs1ROYYqLRGSfuU9c1j2zcNsUPN8yfBs%2FCLAnmXn607%2BIg1KmuDsF99AMt9FUczNMnT9B%2F86UWlG4dky9EeqOdzFRqts38T5%2FySHMXyRL%2FU5TCTzmf2WXQ21Ia3kS%2B&X-Amz-Signature=72a1c81d081cf45274dc11f6de26261998e9bb58191c3312b1e8dba449d4cd3e&X-Amz-SignedHeaders=host&x-id=GetObject)
