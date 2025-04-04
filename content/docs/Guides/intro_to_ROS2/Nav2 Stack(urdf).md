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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7RAIF5E%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHTvTdSXAOhSSCd%2BHL8vTD6DXLufUzVYuo%2FXViNmzeGOAiEA5mZGw1Zj49prwAgCv95yLwGYYjPunh6Z%2Fmu5S14QsU4q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDAbosdkS%2BlXQC3YJdyrcA6%2FDxtZIAWA0AooQBkRMq2ulMFcwGcAHc55YQ5dfTc6VUR5Grv8CPN23HhWQyT1Vq%2FYEjVeBynnfQ1g7TPd%2BRhUKNW7ErFFJDOy4tm3zCnwB3sYq%2FjXMG0ZqZwJnBlZuKVfTPgFP5Z0P%2BO02Y7T21rWVu73De0X1b2y7zyMD7xYpi6ceC%2FJdfaL7avjZmDAZWJOuPOwy0HdqgbgQDQeJac%2F70Dkh%2FuaOPtg9EoXEhKcp1aBjaF1NzjcVuIi5Cw3FifYuhii2PNF6gfdPuuq19a%2BkGEvSukvo9gIPRYFCaHitWAYJbO%2FEe%2BU7eqBzDsI6nAipNbT1wqS3Tto8yHXETh4xF0dGcjYKRZSfnHchWpES8IwH0gM%2BeEGVOwK%2FDLsS%2FDPjJPaebld5TEfFQBQN0IYoDsZ6thF9Ac083InZjKi8syDOjZOaUha1%2FXXznIMtBmxLJ8oFz7CMxgEdll71usBDVgBCscjnpojgco6w4NjDVOXhHM8JiI7MzQ4oAq%2BMhBGIpO9GfAxMEWeAZPBfmCspSV9R9vjNkN9UD2XqOKD7jjyW8WqD7kNLgKw%2BGPQhp0MolpamAzAfZD%2F49azXa1MOY8sg9yXWl5gFio4CI75CkIMmQ%2Fj%2Bwp77MPjGMM2cwL8GOqUByx7gi9dzF%2BNsQkC5%2Fo8E0NkkijPk92FQSwRqx9QvDcKg%2Bq0HQn3DxRvyCmdTXiQm6P2N6KuSHr3NeFPELOx%2FKV%2FFwo8VHstQXi9NdJbv8jjGYAWlJyxwLIT%2BMvuYBlyNY1dyIp8bk6J8AND3iZ4Dw8KpzeHdti4gJH%2Fe1xW%2BEdg69Z6AF5a9vnc31SH8uoj3eo1%2FBz2AoEBw%2FS93Pqjgey6t%2FXjX&X-Amz-Signature=1875bc8681cbe52274d222402cf84a90018a46f199d10b05330c876d325d0991&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7RAIF5E%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHTvTdSXAOhSSCd%2BHL8vTD6DXLufUzVYuo%2FXViNmzeGOAiEA5mZGw1Zj49prwAgCv95yLwGYYjPunh6Z%2Fmu5S14QsU4q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDAbosdkS%2BlXQC3YJdyrcA6%2FDxtZIAWA0AooQBkRMq2ulMFcwGcAHc55YQ5dfTc6VUR5Grv8CPN23HhWQyT1Vq%2FYEjVeBynnfQ1g7TPd%2BRhUKNW7ErFFJDOy4tm3zCnwB3sYq%2FjXMG0ZqZwJnBlZuKVfTPgFP5Z0P%2BO02Y7T21rWVu73De0X1b2y7zyMD7xYpi6ceC%2FJdfaL7avjZmDAZWJOuPOwy0HdqgbgQDQeJac%2F70Dkh%2FuaOPtg9EoXEhKcp1aBjaF1NzjcVuIi5Cw3FifYuhii2PNF6gfdPuuq19a%2BkGEvSukvo9gIPRYFCaHitWAYJbO%2FEe%2BU7eqBzDsI6nAipNbT1wqS3Tto8yHXETh4xF0dGcjYKRZSfnHchWpES8IwH0gM%2BeEGVOwK%2FDLsS%2FDPjJPaebld5TEfFQBQN0IYoDsZ6thF9Ac083InZjKi8syDOjZOaUha1%2FXXznIMtBmxLJ8oFz7CMxgEdll71usBDVgBCscjnpojgco6w4NjDVOXhHM8JiI7MzQ4oAq%2BMhBGIpO9GfAxMEWeAZPBfmCspSV9R9vjNkN9UD2XqOKD7jjyW8WqD7kNLgKw%2BGPQhp0MolpamAzAfZD%2F49azXa1MOY8sg9yXWl5gFio4CI75CkIMmQ%2Fj%2Bwp77MPjGMM2cwL8GOqUByx7gi9dzF%2BNsQkC5%2Fo8E0NkkijPk92FQSwRqx9QvDcKg%2Bq0HQn3DxRvyCmdTXiQm6P2N6KuSHr3NeFPELOx%2FKV%2FFwo8VHstQXi9NdJbv8jjGYAWlJyxwLIT%2BMvuYBlyNY1dyIp8bk6J8AND3iZ4Dw8KpzeHdti4gJH%2Fe1xW%2BEdg69Z6AF5a9vnc31SH8uoj3eo1%2FBz2AoEBw%2FS93Pqjgey6t%2FXjX&X-Amz-Signature=5345d0d138f07f8cb613ebc9b8314a65635b227642ec1713210f2f458d5bd097&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7RAIF5E%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHTvTdSXAOhSSCd%2BHL8vTD6DXLufUzVYuo%2FXViNmzeGOAiEA5mZGw1Zj49prwAgCv95yLwGYYjPunh6Z%2Fmu5S14QsU4q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDAbosdkS%2BlXQC3YJdyrcA6%2FDxtZIAWA0AooQBkRMq2ulMFcwGcAHc55YQ5dfTc6VUR5Grv8CPN23HhWQyT1Vq%2FYEjVeBynnfQ1g7TPd%2BRhUKNW7ErFFJDOy4tm3zCnwB3sYq%2FjXMG0ZqZwJnBlZuKVfTPgFP5Z0P%2BO02Y7T21rWVu73De0X1b2y7zyMD7xYpi6ceC%2FJdfaL7avjZmDAZWJOuPOwy0HdqgbgQDQeJac%2F70Dkh%2FuaOPtg9EoXEhKcp1aBjaF1NzjcVuIi5Cw3FifYuhii2PNF6gfdPuuq19a%2BkGEvSukvo9gIPRYFCaHitWAYJbO%2FEe%2BU7eqBzDsI6nAipNbT1wqS3Tto8yHXETh4xF0dGcjYKRZSfnHchWpES8IwH0gM%2BeEGVOwK%2FDLsS%2FDPjJPaebld5TEfFQBQN0IYoDsZ6thF9Ac083InZjKi8syDOjZOaUha1%2FXXznIMtBmxLJ8oFz7CMxgEdll71usBDVgBCscjnpojgco6w4NjDVOXhHM8JiI7MzQ4oAq%2BMhBGIpO9GfAxMEWeAZPBfmCspSV9R9vjNkN9UD2XqOKD7jjyW8WqD7kNLgKw%2BGPQhp0MolpamAzAfZD%2F49azXa1MOY8sg9yXWl5gFio4CI75CkIMmQ%2Fj%2Bwp77MPjGMM2cwL8GOqUByx7gi9dzF%2BNsQkC5%2Fo8E0NkkijPk92FQSwRqx9QvDcKg%2Bq0HQn3DxRvyCmdTXiQm6P2N6KuSHr3NeFPELOx%2FKV%2FFwo8VHstQXi9NdJbv8jjGYAWlJyxwLIT%2BMvuYBlyNY1dyIp8bk6J8AND3iZ4Dw8KpzeHdti4gJH%2Fe1xW%2BEdg69Z6AF5a9vnc31SH8uoj3eo1%2FBz2AoEBw%2FS93Pqjgey6t%2FXjX&X-Amz-Signature=f3c2b6513bc10d68c16f0318397d8e1ba5db18d6444544e5375d1de3e558af51&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7RAIF5E%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHTvTdSXAOhSSCd%2BHL8vTD6DXLufUzVYuo%2FXViNmzeGOAiEA5mZGw1Zj49prwAgCv95yLwGYYjPunh6Z%2Fmu5S14QsU4q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDAbosdkS%2BlXQC3YJdyrcA6%2FDxtZIAWA0AooQBkRMq2ulMFcwGcAHc55YQ5dfTc6VUR5Grv8CPN23HhWQyT1Vq%2FYEjVeBynnfQ1g7TPd%2BRhUKNW7ErFFJDOy4tm3zCnwB3sYq%2FjXMG0ZqZwJnBlZuKVfTPgFP5Z0P%2BO02Y7T21rWVu73De0X1b2y7zyMD7xYpi6ceC%2FJdfaL7avjZmDAZWJOuPOwy0HdqgbgQDQeJac%2F70Dkh%2FuaOPtg9EoXEhKcp1aBjaF1NzjcVuIi5Cw3FifYuhii2PNF6gfdPuuq19a%2BkGEvSukvo9gIPRYFCaHitWAYJbO%2FEe%2BU7eqBzDsI6nAipNbT1wqS3Tto8yHXETh4xF0dGcjYKRZSfnHchWpES8IwH0gM%2BeEGVOwK%2FDLsS%2FDPjJPaebld5TEfFQBQN0IYoDsZ6thF9Ac083InZjKi8syDOjZOaUha1%2FXXznIMtBmxLJ8oFz7CMxgEdll71usBDVgBCscjnpojgco6w4NjDVOXhHM8JiI7MzQ4oAq%2BMhBGIpO9GfAxMEWeAZPBfmCspSV9R9vjNkN9UD2XqOKD7jjyW8WqD7kNLgKw%2BGPQhp0MolpamAzAfZD%2F49azXa1MOY8sg9yXWl5gFio4CI75CkIMmQ%2Fj%2Bwp77MPjGMM2cwL8GOqUByx7gi9dzF%2BNsQkC5%2Fo8E0NkkijPk92FQSwRqx9QvDcKg%2Bq0HQn3DxRvyCmdTXiQm6P2N6KuSHr3NeFPELOx%2FKV%2FFwo8VHstQXi9NdJbv8jjGYAWlJyxwLIT%2BMvuYBlyNY1dyIp8bk6J8AND3iZ4Dw8KpzeHdti4gJH%2Fe1xW%2BEdg69Z6AF5a9vnc31SH8uoj3eo1%2FBz2AoEBw%2FS93Pqjgey6t%2FXjX&X-Amz-Signature=8638288d88db7447e396ff11b75f48c7b4353fbec27a16cbba6d8b6306afd64a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7RAIF5E%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHTvTdSXAOhSSCd%2BHL8vTD6DXLufUzVYuo%2FXViNmzeGOAiEA5mZGw1Zj49prwAgCv95yLwGYYjPunh6Z%2Fmu5S14QsU4q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDAbosdkS%2BlXQC3YJdyrcA6%2FDxtZIAWA0AooQBkRMq2ulMFcwGcAHc55YQ5dfTc6VUR5Grv8CPN23HhWQyT1Vq%2FYEjVeBynnfQ1g7TPd%2BRhUKNW7ErFFJDOy4tm3zCnwB3sYq%2FjXMG0ZqZwJnBlZuKVfTPgFP5Z0P%2BO02Y7T21rWVu73De0X1b2y7zyMD7xYpi6ceC%2FJdfaL7avjZmDAZWJOuPOwy0HdqgbgQDQeJac%2F70Dkh%2FuaOPtg9EoXEhKcp1aBjaF1NzjcVuIi5Cw3FifYuhii2PNF6gfdPuuq19a%2BkGEvSukvo9gIPRYFCaHitWAYJbO%2FEe%2BU7eqBzDsI6nAipNbT1wqS3Tto8yHXETh4xF0dGcjYKRZSfnHchWpES8IwH0gM%2BeEGVOwK%2FDLsS%2FDPjJPaebld5TEfFQBQN0IYoDsZ6thF9Ac083InZjKi8syDOjZOaUha1%2FXXznIMtBmxLJ8oFz7CMxgEdll71usBDVgBCscjnpojgco6w4NjDVOXhHM8JiI7MzQ4oAq%2BMhBGIpO9GfAxMEWeAZPBfmCspSV9R9vjNkN9UD2XqOKD7jjyW8WqD7kNLgKw%2BGPQhp0MolpamAzAfZD%2F49azXa1MOY8sg9yXWl5gFio4CI75CkIMmQ%2Fj%2Bwp77MPjGMM2cwL8GOqUByx7gi9dzF%2BNsQkC5%2Fo8E0NkkijPk92FQSwRqx9QvDcKg%2Bq0HQn3DxRvyCmdTXiQm6P2N6KuSHr3NeFPELOx%2FKV%2FFwo8VHstQXi9NdJbv8jjGYAWlJyxwLIT%2BMvuYBlyNY1dyIp8bk6J8AND3iZ4Dw8KpzeHdti4gJH%2Fe1xW%2BEdg69Z6AF5a9vnc31SH8uoj3eo1%2FBz2AoEBw%2FS93Pqjgey6t%2FXjX&X-Amz-Signature=19ba755ae39b40f50462859b9a0d635a55d95c0b1b5b4b83b8ab1e37e25442c2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7RAIF5E%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T170747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHTvTdSXAOhSSCd%2BHL8vTD6DXLufUzVYuo%2FXViNmzeGOAiEA5mZGw1Zj49prwAgCv95yLwGYYjPunh6Z%2Fmu5S14QsU4q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDAbosdkS%2BlXQC3YJdyrcA6%2FDxtZIAWA0AooQBkRMq2ulMFcwGcAHc55YQ5dfTc6VUR5Grv8CPN23HhWQyT1Vq%2FYEjVeBynnfQ1g7TPd%2BRhUKNW7ErFFJDOy4tm3zCnwB3sYq%2FjXMG0ZqZwJnBlZuKVfTPgFP5Z0P%2BO02Y7T21rWVu73De0X1b2y7zyMD7xYpi6ceC%2FJdfaL7avjZmDAZWJOuPOwy0HdqgbgQDQeJac%2F70Dkh%2FuaOPtg9EoXEhKcp1aBjaF1NzjcVuIi5Cw3FifYuhii2PNF6gfdPuuq19a%2BkGEvSukvo9gIPRYFCaHitWAYJbO%2FEe%2BU7eqBzDsI6nAipNbT1wqS3Tto8yHXETh4xF0dGcjYKRZSfnHchWpES8IwH0gM%2BeEGVOwK%2FDLsS%2FDPjJPaebld5TEfFQBQN0IYoDsZ6thF9Ac083InZjKi8syDOjZOaUha1%2FXXznIMtBmxLJ8oFz7CMxgEdll71usBDVgBCscjnpojgco6w4NjDVOXhHM8JiI7MzQ4oAq%2BMhBGIpO9GfAxMEWeAZPBfmCspSV9R9vjNkN9UD2XqOKD7jjyW8WqD7kNLgKw%2BGPQhp0MolpamAzAfZD%2F49azXa1MOY8sg9yXWl5gFio4CI75CkIMmQ%2Fj%2Bwp77MPjGMM2cwL8GOqUByx7gi9dzF%2BNsQkC5%2Fo8E0NkkijPk92FQSwRqx9QvDcKg%2Bq0HQn3DxRvyCmdTXiQm6P2N6KuSHr3NeFPELOx%2FKV%2FFwo8VHstQXi9NdJbv8jjGYAWlJyxwLIT%2BMvuYBlyNY1dyIp8bk6J8AND3iZ4Dw8KpzeHdti4gJH%2Fe1xW%2BEdg69Z6AF5a9vnc31SH8uoj3eo1%2FBz2AoEBw%2FS93Pqjgey6t%2FXjX&X-Amz-Signature=2f5b9795b88a13d39dab61cd18b786fa09a8b425e0299fe11fff534271269738&X-Amz-SignedHeaders=host&x-id=GetObject)
