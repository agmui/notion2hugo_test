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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MXP2OGI%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T061131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTMx8qVDjOELjw7BZpPZrcOwXC3O0VDvkulu%2FuJToJNQIhAIAVlRXGDQIyRzp3ehbXmfVdNMj6D%2FtrHcibyHm2J1L9KogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxu1G4D%2B9dHa9fJAQAq3AMcD7DAlGslZtlXhucVodO59MdWTCqpG7y%2Ba9z70FMUz2qE2BwIKbpKKfj1dt%2B1xDj%2BV5vsWLGChdOlGeRXKCxblNMq67nm7k26twjALPgUBxCyD5nlV%2FUAXYioifpoKXXzHHFWN5dPoadX1zdWH%2Ft4HMyZ43WoI%2FlV1ETXpn%2BjbWLWyyKQ3IMneUMTDU%2BqtuBfuaFV4FcKtXy3MI539Adzl0cjlogfj55y4eryoM1QqjfXtVkuMjNMXbxgnHeM7WFO35fTaHPuPbv9pQ4LkMABUsOlnCBBsuIQkUj1c8rLW0fDFVepezXElrpGiDhtnUMRVI1dcpJRA3m644Gy1gxmaotATz75eagbE9t0C1yD3vIqjgbXnnhMNaNNicI4yjcxDh6urorlfKXEgGE1hrApDxEK8B8kYPigTENiv6Kil2VM72xKB2wMkOllOOc95jY320gFK8W%2BHvuFKaBWp6vIl26lSDtSa4xrG4jHPdczI0Tzvk5NBK4UfsA%2Bp6TdIfNcNAYScTuVhGxU06RRY6l2mx1ZfvQ7X5d8ZXFQ0x6%2B7%2Bj5YMo4OR6OC%2FGqIFGyFQi4JED8oUHAQZlnZrciaILsq5hjtnSNLZXgQLJON2GTPZIjkxTNJw%2FUvOm9OTC9%2Bf3CBjqkAURW%2FQkIRw02wbm08sVGHooS075Q4923rq5RwAhqClQRRcIlV0rICK6aXYqPnxVP8g%2FroRa92jmyxNLAN6LfiKD%2FREAvVxeMiPN2lkvf3EF256x3Cnnu25ufZyxjf9yiyNVENN2P4nS9XGYKcQqoWygBA02UB1aE0qDcIx4teGPX3f7AzX2i8IIOlyS4RTyud%2BHUIFbez73QxrzVz6N6DcBsUHOf&X-Amz-Signature=e42d06cc63c806941fb0d1fb691b7b0d8c810138c0b4277feabde29e60ada3cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MXP2OGI%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T061131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTMx8qVDjOELjw7BZpPZrcOwXC3O0VDvkulu%2FuJToJNQIhAIAVlRXGDQIyRzp3ehbXmfVdNMj6D%2FtrHcibyHm2J1L9KogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxu1G4D%2B9dHa9fJAQAq3AMcD7DAlGslZtlXhucVodO59MdWTCqpG7y%2Ba9z70FMUz2qE2BwIKbpKKfj1dt%2B1xDj%2BV5vsWLGChdOlGeRXKCxblNMq67nm7k26twjALPgUBxCyD5nlV%2FUAXYioifpoKXXzHHFWN5dPoadX1zdWH%2Ft4HMyZ43WoI%2FlV1ETXpn%2BjbWLWyyKQ3IMneUMTDU%2BqtuBfuaFV4FcKtXy3MI539Adzl0cjlogfj55y4eryoM1QqjfXtVkuMjNMXbxgnHeM7WFO35fTaHPuPbv9pQ4LkMABUsOlnCBBsuIQkUj1c8rLW0fDFVepezXElrpGiDhtnUMRVI1dcpJRA3m644Gy1gxmaotATz75eagbE9t0C1yD3vIqjgbXnnhMNaNNicI4yjcxDh6urorlfKXEgGE1hrApDxEK8B8kYPigTENiv6Kil2VM72xKB2wMkOllOOc95jY320gFK8W%2BHvuFKaBWp6vIl26lSDtSa4xrG4jHPdczI0Tzvk5NBK4UfsA%2Bp6TdIfNcNAYScTuVhGxU06RRY6l2mx1ZfvQ7X5d8ZXFQ0x6%2B7%2Bj5YMo4OR6OC%2FGqIFGyFQi4JED8oUHAQZlnZrciaILsq5hjtnSNLZXgQLJON2GTPZIjkxTNJw%2FUvOm9OTC9%2Bf3CBjqkAURW%2FQkIRw02wbm08sVGHooS075Q4923rq5RwAhqClQRRcIlV0rICK6aXYqPnxVP8g%2FroRa92jmyxNLAN6LfiKD%2FREAvVxeMiPN2lkvf3EF256x3Cnnu25ufZyxjf9yiyNVENN2P4nS9XGYKcQqoWygBA02UB1aE0qDcIx4teGPX3f7AzX2i8IIOlyS4RTyud%2BHUIFbez73QxrzVz6N6DcBsUHOf&X-Amz-Signature=d868da67b10bfdc4ae881f2541b61fb1f189db289a03d851313a5f93bb6dbf1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MXP2OGI%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T061131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTMx8qVDjOELjw7BZpPZrcOwXC3O0VDvkulu%2FuJToJNQIhAIAVlRXGDQIyRzp3ehbXmfVdNMj6D%2FtrHcibyHm2J1L9KogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxu1G4D%2B9dHa9fJAQAq3AMcD7DAlGslZtlXhucVodO59MdWTCqpG7y%2Ba9z70FMUz2qE2BwIKbpKKfj1dt%2B1xDj%2BV5vsWLGChdOlGeRXKCxblNMq67nm7k26twjALPgUBxCyD5nlV%2FUAXYioifpoKXXzHHFWN5dPoadX1zdWH%2Ft4HMyZ43WoI%2FlV1ETXpn%2BjbWLWyyKQ3IMneUMTDU%2BqtuBfuaFV4FcKtXy3MI539Adzl0cjlogfj55y4eryoM1QqjfXtVkuMjNMXbxgnHeM7WFO35fTaHPuPbv9pQ4LkMABUsOlnCBBsuIQkUj1c8rLW0fDFVepezXElrpGiDhtnUMRVI1dcpJRA3m644Gy1gxmaotATz75eagbE9t0C1yD3vIqjgbXnnhMNaNNicI4yjcxDh6urorlfKXEgGE1hrApDxEK8B8kYPigTENiv6Kil2VM72xKB2wMkOllOOc95jY320gFK8W%2BHvuFKaBWp6vIl26lSDtSa4xrG4jHPdczI0Tzvk5NBK4UfsA%2Bp6TdIfNcNAYScTuVhGxU06RRY6l2mx1ZfvQ7X5d8ZXFQ0x6%2B7%2Bj5YMo4OR6OC%2FGqIFGyFQi4JED8oUHAQZlnZrciaILsq5hjtnSNLZXgQLJON2GTPZIjkxTNJw%2FUvOm9OTC9%2Bf3CBjqkAURW%2FQkIRw02wbm08sVGHooS075Q4923rq5RwAhqClQRRcIlV0rICK6aXYqPnxVP8g%2FroRa92jmyxNLAN6LfiKD%2FREAvVxeMiPN2lkvf3EF256x3Cnnu25ufZyxjf9yiyNVENN2P4nS9XGYKcQqoWygBA02UB1aE0qDcIx4teGPX3f7AzX2i8IIOlyS4RTyud%2BHUIFbez73QxrzVz6N6DcBsUHOf&X-Amz-Signature=70af69208e8da2e1e4fa3aca5b7e8a439d3ab4af2cc292ace8e17e9750fe4b0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MXP2OGI%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T061131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTMx8qVDjOELjw7BZpPZrcOwXC3O0VDvkulu%2FuJToJNQIhAIAVlRXGDQIyRzp3ehbXmfVdNMj6D%2FtrHcibyHm2J1L9KogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxu1G4D%2B9dHa9fJAQAq3AMcD7DAlGslZtlXhucVodO59MdWTCqpG7y%2Ba9z70FMUz2qE2BwIKbpKKfj1dt%2B1xDj%2BV5vsWLGChdOlGeRXKCxblNMq67nm7k26twjALPgUBxCyD5nlV%2FUAXYioifpoKXXzHHFWN5dPoadX1zdWH%2Ft4HMyZ43WoI%2FlV1ETXpn%2BjbWLWyyKQ3IMneUMTDU%2BqtuBfuaFV4FcKtXy3MI539Adzl0cjlogfj55y4eryoM1QqjfXtVkuMjNMXbxgnHeM7WFO35fTaHPuPbv9pQ4LkMABUsOlnCBBsuIQkUj1c8rLW0fDFVepezXElrpGiDhtnUMRVI1dcpJRA3m644Gy1gxmaotATz75eagbE9t0C1yD3vIqjgbXnnhMNaNNicI4yjcxDh6urorlfKXEgGE1hrApDxEK8B8kYPigTENiv6Kil2VM72xKB2wMkOllOOc95jY320gFK8W%2BHvuFKaBWp6vIl26lSDtSa4xrG4jHPdczI0Tzvk5NBK4UfsA%2Bp6TdIfNcNAYScTuVhGxU06RRY6l2mx1ZfvQ7X5d8ZXFQ0x6%2B7%2Bj5YMo4OR6OC%2FGqIFGyFQi4JED8oUHAQZlnZrciaILsq5hjtnSNLZXgQLJON2GTPZIjkxTNJw%2FUvOm9OTC9%2Bf3CBjqkAURW%2FQkIRw02wbm08sVGHooS075Q4923rq5RwAhqClQRRcIlV0rICK6aXYqPnxVP8g%2FroRa92jmyxNLAN6LfiKD%2FREAvVxeMiPN2lkvf3EF256x3Cnnu25ufZyxjf9yiyNVENN2P4nS9XGYKcQqoWygBA02UB1aE0qDcIx4teGPX3f7AzX2i8IIOlyS4RTyud%2BHUIFbez73QxrzVz6N6DcBsUHOf&X-Amz-Signature=4b2d4d31a3bfde0fd3ce6c0f8bc52f583f07702f694e333fce6db97eaa035b16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MXP2OGI%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T061131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTMx8qVDjOELjw7BZpPZrcOwXC3O0VDvkulu%2FuJToJNQIhAIAVlRXGDQIyRzp3ehbXmfVdNMj6D%2FtrHcibyHm2J1L9KogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxu1G4D%2B9dHa9fJAQAq3AMcD7DAlGslZtlXhucVodO59MdWTCqpG7y%2Ba9z70FMUz2qE2BwIKbpKKfj1dt%2B1xDj%2BV5vsWLGChdOlGeRXKCxblNMq67nm7k26twjALPgUBxCyD5nlV%2FUAXYioifpoKXXzHHFWN5dPoadX1zdWH%2Ft4HMyZ43WoI%2FlV1ETXpn%2BjbWLWyyKQ3IMneUMTDU%2BqtuBfuaFV4FcKtXy3MI539Adzl0cjlogfj55y4eryoM1QqjfXtVkuMjNMXbxgnHeM7WFO35fTaHPuPbv9pQ4LkMABUsOlnCBBsuIQkUj1c8rLW0fDFVepezXElrpGiDhtnUMRVI1dcpJRA3m644Gy1gxmaotATz75eagbE9t0C1yD3vIqjgbXnnhMNaNNicI4yjcxDh6urorlfKXEgGE1hrApDxEK8B8kYPigTENiv6Kil2VM72xKB2wMkOllOOc95jY320gFK8W%2BHvuFKaBWp6vIl26lSDtSa4xrG4jHPdczI0Tzvk5NBK4UfsA%2Bp6TdIfNcNAYScTuVhGxU06RRY6l2mx1ZfvQ7X5d8ZXFQ0x6%2B7%2Bj5YMo4OR6OC%2FGqIFGyFQi4JED8oUHAQZlnZrciaILsq5hjtnSNLZXgQLJON2GTPZIjkxTNJw%2FUvOm9OTC9%2Bf3CBjqkAURW%2FQkIRw02wbm08sVGHooS075Q4923rq5RwAhqClQRRcIlV0rICK6aXYqPnxVP8g%2FroRa92jmyxNLAN6LfiKD%2FREAvVxeMiPN2lkvf3EF256x3Cnnu25ufZyxjf9yiyNVENN2P4nS9XGYKcQqoWygBA02UB1aE0qDcIx4teGPX3f7AzX2i8IIOlyS4RTyud%2BHUIFbez73QxrzVz6N6DcBsUHOf&X-Amz-Signature=4950ed3a4d296f03c4d10bfe5a1f52612cf9d56388202cb8a837ac85c58bb5e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MXP2OGI%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T061131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTMx8qVDjOELjw7BZpPZrcOwXC3O0VDvkulu%2FuJToJNQIhAIAVlRXGDQIyRzp3ehbXmfVdNMj6D%2FtrHcibyHm2J1L9KogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxu1G4D%2B9dHa9fJAQAq3AMcD7DAlGslZtlXhucVodO59MdWTCqpG7y%2Ba9z70FMUz2qE2BwIKbpKKfj1dt%2B1xDj%2BV5vsWLGChdOlGeRXKCxblNMq67nm7k26twjALPgUBxCyD5nlV%2FUAXYioifpoKXXzHHFWN5dPoadX1zdWH%2Ft4HMyZ43WoI%2FlV1ETXpn%2BjbWLWyyKQ3IMneUMTDU%2BqtuBfuaFV4FcKtXy3MI539Adzl0cjlogfj55y4eryoM1QqjfXtVkuMjNMXbxgnHeM7WFO35fTaHPuPbv9pQ4LkMABUsOlnCBBsuIQkUj1c8rLW0fDFVepezXElrpGiDhtnUMRVI1dcpJRA3m644Gy1gxmaotATz75eagbE9t0C1yD3vIqjgbXnnhMNaNNicI4yjcxDh6urorlfKXEgGE1hrApDxEK8B8kYPigTENiv6Kil2VM72xKB2wMkOllOOc95jY320gFK8W%2BHvuFKaBWp6vIl26lSDtSa4xrG4jHPdczI0Tzvk5NBK4UfsA%2Bp6TdIfNcNAYScTuVhGxU06RRY6l2mx1ZfvQ7X5d8ZXFQ0x6%2B7%2Bj5YMo4OR6OC%2FGqIFGyFQi4JED8oUHAQZlnZrciaILsq5hjtnSNLZXgQLJON2GTPZIjkxTNJw%2FUvOm9OTC9%2Bf3CBjqkAURW%2FQkIRw02wbm08sVGHooS075Q4923rq5RwAhqClQRRcIlV0rICK6aXYqPnxVP8g%2FroRa92jmyxNLAN6LfiKD%2FREAvVxeMiPN2lkvf3EF256x3Cnnu25ufZyxjf9yiyNVENN2P4nS9XGYKcQqoWygBA02UB1aE0qDcIx4teGPX3f7AzX2i8IIOlyS4RTyud%2BHUIFbez73QxrzVz6N6DcBsUHOf&X-Amz-Signature=98a076dcd672274254bc2c599b21c4b0f1c42afc3ff163a8a0dd2f0610857290&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
