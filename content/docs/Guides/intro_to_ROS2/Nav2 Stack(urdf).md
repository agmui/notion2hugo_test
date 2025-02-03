---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L6JK3MJ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClkkJuBU3%2BtujSGtbGiA9zcL%2BIVqHROF6quGJC28czYAIhANX6kZDFzl%2BXnHqyy9ByjXFAxV1Uz%2BiNY0jJI02WF0uaKv8DCBAQABoMNjM3NDIzMTgzODA1IgxKYr2LoRwaYYZXFb0q3AMrOwyzqBLOg%2F4T%2BeusNnSp%2FKiJjrBGeV2gN4oVt1pff9SI4neYOwzTpkWnRfvmKhuHnLzJU7GVL%2FZzM0mPSxKX3yrUm4GKbixdggXwMDfQHzjpLJ9EjCNn5SIvtaI3UoZ5MU%2BJVXTQo4mWOnsy%2BDb2%2F5r7fO%2FmihVNdreDpgpskDjz3X42jjwM40YB1lvkywjuUUWvBt6xrCcHJCOt9b2Ih4LurcKyTQPWh6b9h4TCbu2CMA0jZ2RSh58goBAAf4mFDH0GnP0KnbN7QewZ4jvhyLjz2Fqnn1Zy53WjcbNSkb3q8xD%2Bsm1ab2cYZC8ociLTBjfy%2B3nz%2B7Mm5MZ3ewJ7DNsZtp%2FAaSyagZTSvcMEKSwZPGBiMADJH%2FNJ5dT2QYzTG57sTBYodo5TX8yiM9N73qu31ohBG9Vv26sa8L7W5L4eQ0vs7wCcNavzH3UzrJbuMK%2FGSsqKWE8PdTMazHVyz49Tnvq9Q57zQV%2FVuo4ExfrnBJF4%2FrcnlT5BBg7K12Q0ICy404GiwDdqYWr8%2BKD3Ck62TCyl6V7fcJ%2Fn4vKK5T2KXMzKB4vFhm%2BegYh5fxUnRxFaBROjtnv1z2UK5XxBYCTrV2TF6yuuX987FPvp90y256J2eEDyClB5rjDd2IG9BjqkAZEGzMggyN0uZs57j5ap21qVT0mrKp1bp6%2BU%2BsKEu%2B25Bdw36OQvV7YpC%2BkBsw3GlKJjk4LcUpNliH0JOKpZNxO%2BSiZ44vElau27KnU5ka71wvhpiR5utTKBIfl3uLINMlUn1XaMk2AbJ%2FQISy02OTjFB4yPRc%2BxUu1HzYpxvPJGmNHIcbdnsfxoNi8AArovv%2F6N17YWS4XhSYyQBNQYXxp06nlb&X-Amz-Signature=ce8c2ba93fc2823bddc0680e1e371876066499e6567de0fb658e7c898b363b03&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L6JK3MJ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClkkJuBU3%2BtujSGtbGiA9zcL%2BIVqHROF6quGJC28czYAIhANX6kZDFzl%2BXnHqyy9ByjXFAxV1Uz%2BiNY0jJI02WF0uaKv8DCBAQABoMNjM3NDIzMTgzODA1IgxKYr2LoRwaYYZXFb0q3AMrOwyzqBLOg%2F4T%2BeusNnSp%2FKiJjrBGeV2gN4oVt1pff9SI4neYOwzTpkWnRfvmKhuHnLzJU7GVL%2FZzM0mPSxKX3yrUm4GKbixdggXwMDfQHzjpLJ9EjCNn5SIvtaI3UoZ5MU%2BJVXTQo4mWOnsy%2BDb2%2F5r7fO%2FmihVNdreDpgpskDjz3X42jjwM40YB1lvkywjuUUWvBt6xrCcHJCOt9b2Ih4LurcKyTQPWh6b9h4TCbu2CMA0jZ2RSh58goBAAf4mFDH0GnP0KnbN7QewZ4jvhyLjz2Fqnn1Zy53WjcbNSkb3q8xD%2Bsm1ab2cYZC8ociLTBjfy%2B3nz%2B7Mm5MZ3ewJ7DNsZtp%2FAaSyagZTSvcMEKSwZPGBiMADJH%2FNJ5dT2QYzTG57sTBYodo5TX8yiM9N73qu31ohBG9Vv26sa8L7W5L4eQ0vs7wCcNavzH3UzrJbuMK%2FGSsqKWE8PdTMazHVyz49Tnvq9Q57zQV%2FVuo4ExfrnBJF4%2FrcnlT5BBg7K12Q0ICy404GiwDdqYWr8%2BKD3Ck62TCyl6V7fcJ%2Fn4vKK5T2KXMzKB4vFhm%2BegYh5fxUnRxFaBROjtnv1z2UK5XxBYCTrV2TF6yuuX987FPvp90y256J2eEDyClB5rjDd2IG9BjqkAZEGzMggyN0uZs57j5ap21qVT0mrKp1bp6%2BU%2BsKEu%2B25Bdw36OQvV7YpC%2BkBsw3GlKJjk4LcUpNliH0JOKpZNxO%2BSiZ44vElau27KnU5ka71wvhpiR5utTKBIfl3uLINMlUn1XaMk2AbJ%2FQISy02OTjFB4yPRc%2BxUu1HzYpxvPJGmNHIcbdnsfxoNi8AArovv%2F6N17YWS4XhSYyQBNQYXxp06nlb&X-Amz-Signature=ab1df8731b3ed66be7960afed8f44e423590bcde2c83675175077b33790dae08&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L6JK3MJ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClkkJuBU3%2BtujSGtbGiA9zcL%2BIVqHROF6quGJC28czYAIhANX6kZDFzl%2BXnHqyy9ByjXFAxV1Uz%2BiNY0jJI02WF0uaKv8DCBAQABoMNjM3NDIzMTgzODA1IgxKYr2LoRwaYYZXFb0q3AMrOwyzqBLOg%2F4T%2BeusNnSp%2FKiJjrBGeV2gN4oVt1pff9SI4neYOwzTpkWnRfvmKhuHnLzJU7GVL%2FZzM0mPSxKX3yrUm4GKbixdggXwMDfQHzjpLJ9EjCNn5SIvtaI3UoZ5MU%2BJVXTQo4mWOnsy%2BDb2%2F5r7fO%2FmihVNdreDpgpskDjz3X42jjwM40YB1lvkywjuUUWvBt6xrCcHJCOt9b2Ih4LurcKyTQPWh6b9h4TCbu2CMA0jZ2RSh58goBAAf4mFDH0GnP0KnbN7QewZ4jvhyLjz2Fqnn1Zy53WjcbNSkb3q8xD%2Bsm1ab2cYZC8ociLTBjfy%2B3nz%2B7Mm5MZ3ewJ7DNsZtp%2FAaSyagZTSvcMEKSwZPGBiMADJH%2FNJ5dT2QYzTG57sTBYodo5TX8yiM9N73qu31ohBG9Vv26sa8L7W5L4eQ0vs7wCcNavzH3UzrJbuMK%2FGSsqKWE8PdTMazHVyz49Tnvq9Q57zQV%2FVuo4ExfrnBJF4%2FrcnlT5BBg7K12Q0ICy404GiwDdqYWr8%2BKD3Ck62TCyl6V7fcJ%2Fn4vKK5T2KXMzKB4vFhm%2BegYh5fxUnRxFaBROjtnv1z2UK5XxBYCTrV2TF6yuuX987FPvp90y256J2eEDyClB5rjDd2IG9BjqkAZEGzMggyN0uZs57j5ap21qVT0mrKp1bp6%2BU%2BsKEu%2B25Bdw36OQvV7YpC%2BkBsw3GlKJjk4LcUpNliH0JOKpZNxO%2BSiZ44vElau27KnU5ka71wvhpiR5utTKBIfl3uLINMlUn1XaMk2AbJ%2FQISy02OTjFB4yPRc%2BxUu1HzYpxvPJGmNHIcbdnsfxoNi8AArovv%2F6N17YWS4XhSYyQBNQYXxp06nlb&X-Amz-Signature=0534883491513b50760d1064ea6205b448907fde1a7c570b20dd32df2e2e95f4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L6JK3MJ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClkkJuBU3%2BtujSGtbGiA9zcL%2BIVqHROF6quGJC28czYAIhANX6kZDFzl%2BXnHqyy9ByjXFAxV1Uz%2BiNY0jJI02WF0uaKv8DCBAQABoMNjM3NDIzMTgzODA1IgxKYr2LoRwaYYZXFb0q3AMrOwyzqBLOg%2F4T%2BeusNnSp%2FKiJjrBGeV2gN4oVt1pff9SI4neYOwzTpkWnRfvmKhuHnLzJU7GVL%2FZzM0mPSxKX3yrUm4GKbixdggXwMDfQHzjpLJ9EjCNn5SIvtaI3UoZ5MU%2BJVXTQo4mWOnsy%2BDb2%2F5r7fO%2FmihVNdreDpgpskDjz3X42jjwM40YB1lvkywjuUUWvBt6xrCcHJCOt9b2Ih4LurcKyTQPWh6b9h4TCbu2CMA0jZ2RSh58goBAAf4mFDH0GnP0KnbN7QewZ4jvhyLjz2Fqnn1Zy53WjcbNSkb3q8xD%2Bsm1ab2cYZC8ociLTBjfy%2B3nz%2B7Mm5MZ3ewJ7DNsZtp%2FAaSyagZTSvcMEKSwZPGBiMADJH%2FNJ5dT2QYzTG57sTBYodo5TX8yiM9N73qu31ohBG9Vv26sa8L7W5L4eQ0vs7wCcNavzH3UzrJbuMK%2FGSsqKWE8PdTMazHVyz49Tnvq9Q57zQV%2FVuo4ExfrnBJF4%2FrcnlT5BBg7K12Q0ICy404GiwDdqYWr8%2BKD3Ck62TCyl6V7fcJ%2Fn4vKK5T2KXMzKB4vFhm%2BegYh5fxUnRxFaBROjtnv1z2UK5XxBYCTrV2TF6yuuX987FPvp90y256J2eEDyClB5rjDd2IG9BjqkAZEGzMggyN0uZs57j5ap21qVT0mrKp1bp6%2BU%2BsKEu%2B25Bdw36OQvV7YpC%2BkBsw3GlKJjk4LcUpNliH0JOKpZNxO%2BSiZ44vElau27KnU5ka71wvhpiR5utTKBIfl3uLINMlUn1XaMk2AbJ%2FQISy02OTjFB4yPRc%2BxUu1HzYpxvPJGmNHIcbdnsfxoNi8AArovv%2F6N17YWS4XhSYyQBNQYXxp06nlb&X-Amz-Signature=d100f8dae4a197739b1dded27f0d17b5d0553314b98de11b3686572fb73d2147&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L6JK3MJ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClkkJuBU3%2BtujSGtbGiA9zcL%2BIVqHROF6quGJC28czYAIhANX6kZDFzl%2BXnHqyy9ByjXFAxV1Uz%2BiNY0jJI02WF0uaKv8DCBAQABoMNjM3NDIzMTgzODA1IgxKYr2LoRwaYYZXFb0q3AMrOwyzqBLOg%2F4T%2BeusNnSp%2FKiJjrBGeV2gN4oVt1pff9SI4neYOwzTpkWnRfvmKhuHnLzJU7GVL%2FZzM0mPSxKX3yrUm4GKbixdggXwMDfQHzjpLJ9EjCNn5SIvtaI3UoZ5MU%2BJVXTQo4mWOnsy%2BDb2%2F5r7fO%2FmihVNdreDpgpskDjz3X42jjwM40YB1lvkywjuUUWvBt6xrCcHJCOt9b2Ih4LurcKyTQPWh6b9h4TCbu2CMA0jZ2RSh58goBAAf4mFDH0GnP0KnbN7QewZ4jvhyLjz2Fqnn1Zy53WjcbNSkb3q8xD%2Bsm1ab2cYZC8ociLTBjfy%2B3nz%2B7Mm5MZ3ewJ7DNsZtp%2FAaSyagZTSvcMEKSwZPGBiMADJH%2FNJ5dT2QYzTG57sTBYodo5TX8yiM9N73qu31ohBG9Vv26sa8L7W5L4eQ0vs7wCcNavzH3UzrJbuMK%2FGSsqKWE8PdTMazHVyz49Tnvq9Q57zQV%2FVuo4ExfrnBJF4%2FrcnlT5BBg7K12Q0ICy404GiwDdqYWr8%2BKD3Ck62TCyl6V7fcJ%2Fn4vKK5T2KXMzKB4vFhm%2BegYh5fxUnRxFaBROjtnv1z2UK5XxBYCTrV2TF6yuuX987FPvp90y256J2eEDyClB5rjDd2IG9BjqkAZEGzMggyN0uZs57j5ap21qVT0mrKp1bp6%2BU%2BsKEu%2B25Bdw36OQvV7YpC%2BkBsw3GlKJjk4LcUpNliH0JOKpZNxO%2BSiZ44vElau27KnU5ka71wvhpiR5utTKBIfl3uLINMlUn1XaMk2AbJ%2FQISy02OTjFB4yPRc%2BxUu1HzYpxvPJGmNHIcbdnsfxoNi8AArovv%2F6N17YWS4XhSYyQBNQYXxp06nlb&X-Amz-Signature=052c24c0084ab1831334231248d0a1458c36e74cc014616404c2945925450018&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L6JK3MJ%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClkkJuBU3%2BtujSGtbGiA9zcL%2BIVqHROF6quGJC28czYAIhANX6kZDFzl%2BXnHqyy9ByjXFAxV1Uz%2BiNY0jJI02WF0uaKv8DCBAQABoMNjM3NDIzMTgzODA1IgxKYr2LoRwaYYZXFb0q3AMrOwyzqBLOg%2F4T%2BeusNnSp%2FKiJjrBGeV2gN4oVt1pff9SI4neYOwzTpkWnRfvmKhuHnLzJU7GVL%2FZzM0mPSxKX3yrUm4GKbixdggXwMDfQHzjpLJ9EjCNn5SIvtaI3UoZ5MU%2BJVXTQo4mWOnsy%2BDb2%2F5r7fO%2FmihVNdreDpgpskDjz3X42jjwM40YB1lvkywjuUUWvBt6xrCcHJCOt9b2Ih4LurcKyTQPWh6b9h4TCbu2CMA0jZ2RSh58goBAAf4mFDH0GnP0KnbN7QewZ4jvhyLjz2Fqnn1Zy53WjcbNSkb3q8xD%2Bsm1ab2cYZC8ociLTBjfy%2B3nz%2B7Mm5MZ3ewJ7DNsZtp%2FAaSyagZTSvcMEKSwZPGBiMADJH%2FNJ5dT2QYzTG57sTBYodo5TX8yiM9N73qu31ohBG9Vv26sa8L7W5L4eQ0vs7wCcNavzH3UzrJbuMK%2FGSsqKWE8PdTMazHVyz49Tnvq9Q57zQV%2FVuo4ExfrnBJF4%2FrcnlT5BBg7K12Q0ICy404GiwDdqYWr8%2BKD3Ck62TCyl6V7fcJ%2Fn4vKK5T2KXMzKB4vFhm%2BegYh5fxUnRxFaBROjtnv1z2UK5XxBYCTrV2TF6yuuX987FPvp90y256J2eEDyClB5rjDd2IG9BjqkAZEGzMggyN0uZs57j5ap21qVT0mrKp1bp6%2BU%2BsKEu%2B25Bdw36OQvV7YpC%2BkBsw3GlKJjk4LcUpNliH0JOKpZNxO%2BSiZ44vElau27KnU5ka71wvhpiR5utTKBIfl3uLINMlUn1XaMk2AbJ%2FQISy02OTjFB4yPRc%2BxUu1HzYpxvPJGmNHIcbdnsfxoNi8AArovv%2F6N17YWS4XhSYyQBNQYXxp06nlb&X-Amz-Signature=be33fb77db7c64fe9ee6269eeaf434f259abc86b54d50789917f7d999194a3cc&X-Amz-SignedHeaders=host&x-id=GetObject)
