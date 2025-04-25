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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTV3HMBC%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8GdK1GwxV1w8cWU4mnPooLPaouFa67iPmgktohpEUXAiAgmbpez6t4E1mULz9hoXRzwSZcP2hFQqG3%2BWZ8Gu2wICr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMJbS09mQNH0jQzWDCKtwDAB2VOYy81O7aqXlYNC70Hf87fhJjO2wEfvoOe24qXH7DoFwF9Dec1rD4ZsEA8ySx055oSyPUIhTvpbZSo4A73V3OYK0f9neI9d2mEAReRkEYBrY%2FEgqLrs7NRMD%2F%2Fo6Men1XYZxSsss3HYnaCjUj25UUat41MjrzC927EsALucouvTs0j3MJDB8aMaaxs4AWUp9hDzYH9GrY2%2Fkbr9nA%2BjKtcuHUO%2B4CzK7E94k2%2FMYOgH0s9LJoCEXfyC5DUeFxCzfETU%2FYf9Rmt%2B0PkMwl0xPoPmeua0sFZ2c%2F%2FgpxPK%2FZpS3ku19rT5n8maOOMrajpbGQ7A%2BSOeouaWel4gUFbhnqmfp7yh9hDyeuc5ZShKXZBjocEZUVT4NRqBocqq2j4ken7Ehe7FmXuorGwAHVrI6%2FApgY0FT5rkYOrPsCIJqk9A0yqAn9bSVZaLs0MJa9AeqAZTNXKpTFj68DhVFJ4Y7x5iZCEECgBNA27Ddm06J6JGY41%2BTRb%2FPqYhJVtSbEVkPhh1E8L3awzbyXk0s1ovnGeUYe166qirbEv8YZNIqRm9wd09LQcAYYZRU0E%2FyFhDj6i0KPvqOaqSSSrTrOJTnMIIik893cKhfRipVFhwHoN1%2BJMtEaXqdK%2B2Uw5KKwwAY6pgGasDys0kqNxQT9pgkQMzte9H%2Bj1ohUwJYmY%2FVyLrQ%2FD%2F6nxX7A4AmDFrvixb%2Bn7FvyWFVPrB1Q9xjcxh3AsS%2F9cd3y%2Fd0LwB5QnQ8%2B1y0mcvJLA%2F4tdtHONXKiQuwu%2BnFjCprBpnClDz7ev56rSEmfe3R50ICuzdwrxLLqE7nveQ%2B%2FU5qxQ3wSAeGdmrJbyl%2B0B3907RSCawFbCi3nWVnLum52404L&X-Amz-Signature=95a0fc24f63143a67c2ae0db974906ead408adab987d273e639382b26a1281b3&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTV3HMBC%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8GdK1GwxV1w8cWU4mnPooLPaouFa67iPmgktohpEUXAiAgmbpez6t4E1mULz9hoXRzwSZcP2hFQqG3%2BWZ8Gu2wICr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMJbS09mQNH0jQzWDCKtwDAB2VOYy81O7aqXlYNC70Hf87fhJjO2wEfvoOe24qXH7DoFwF9Dec1rD4ZsEA8ySx055oSyPUIhTvpbZSo4A73V3OYK0f9neI9d2mEAReRkEYBrY%2FEgqLrs7NRMD%2F%2Fo6Men1XYZxSsss3HYnaCjUj25UUat41MjrzC927EsALucouvTs0j3MJDB8aMaaxs4AWUp9hDzYH9GrY2%2Fkbr9nA%2BjKtcuHUO%2B4CzK7E94k2%2FMYOgH0s9LJoCEXfyC5DUeFxCzfETU%2FYf9Rmt%2B0PkMwl0xPoPmeua0sFZ2c%2F%2FgpxPK%2FZpS3ku19rT5n8maOOMrajpbGQ7A%2BSOeouaWel4gUFbhnqmfp7yh9hDyeuc5ZShKXZBjocEZUVT4NRqBocqq2j4ken7Ehe7FmXuorGwAHVrI6%2FApgY0FT5rkYOrPsCIJqk9A0yqAn9bSVZaLs0MJa9AeqAZTNXKpTFj68DhVFJ4Y7x5iZCEECgBNA27Ddm06J6JGY41%2BTRb%2FPqYhJVtSbEVkPhh1E8L3awzbyXk0s1ovnGeUYe166qirbEv8YZNIqRm9wd09LQcAYYZRU0E%2FyFhDj6i0KPvqOaqSSSrTrOJTnMIIik893cKhfRipVFhwHoN1%2BJMtEaXqdK%2B2Uw5KKwwAY6pgGasDys0kqNxQT9pgkQMzte9H%2Bj1ohUwJYmY%2FVyLrQ%2FD%2F6nxX7A4AmDFrvixb%2Bn7FvyWFVPrB1Q9xjcxh3AsS%2F9cd3y%2Fd0LwB5QnQ8%2B1y0mcvJLA%2F4tdtHONXKiQuwu%2BnFjCprBpnClDz7ev56rSEmfe3R50ICuzdwrxLLqE7nveQ%2B%2FU5qxQ3wSAeGdmrJbyl%2B0B3907RSCawFbCi3nWVnLum52404L&X-Amz-Signature=228ca585e9792e289171182684349b96379a1a6ee1d9105b8b81ae0e7f0d47f7&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTV3HMBC%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8GdK1GwxV1w8cWU4mnPooLPaouFa67iPmgktohpEUXAiAgmbpez6t4E1mULz9hoXRzwSZcP2hFQqG3%2BWZ8Gu2wICr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMJbS09mQNH0jQzWDCKtwDAB2VOYy81O7aqXlYNC70Hf87fhJjO2wEfvoOe24qXH7DoFwF9Dec1rD4ZsEA8ySx055oSyPUIhTvpbZSo4A73V3OYK0f9neI9d2mEAReRkEYBrY%2FEgqLrs7NRMD%2F%2Fo6Men1XYZxSsss3HYnaCjUj25UUat41MjrzC927EsALucouvTs0j3MJDB8aMaaxs4AWUp9hDzYH9GrY2%2Fkbr9nA%2BjKtcuHUO%2B4CzK7E94k2%2FMYOgH0s9LJoCEXfyC5DUeFxCzfETU%2FYf9Rmt%2B0PkMwl0xPoPmeua0sFZ2c%2F%2FgpxPK%2FZpS3ku19rT5n8maOOMrajpbGQ7A%2BSOeouaWel4gUFbhnqmfp7yh9hDyeuc5ZShKXZBjocEZUVT4NRqBocqq2j4ken7Ehe7FmXuorGwAHVrI6%2FApgY0FT5rkYOrPsCIJqk9A0yqAn9bSVZaLs0MJa9AeqAZTNXKpTFj68DhVFJ4Y7x5iZCEECgBNA27Ddm06J6JGY41%2BTRb%2FPqYhJVtSbEVkPhh1E8L3awzbyXk0s1ovnGeUYe166qirbEv8YZNIqRm9wd09LQcAYYZRU0E%2FyFhDj6i0KPvqOaqSSSrTrOJTnMIIik893cKhfRipVFhwHoN1%2BJMtEaXqdK%2B2Uw5KKwwAY6pgGasDys0kqNxQT9pgkQMzte9H%2Bj1ohUwJYmY%2FVyLrQ%2FD%2F6nxX7A4AmDFrvixb%2Bn7FvyWFVPrB1Q9xjcxh3AsS%2F9cd3y%2Fd0LwB5QnQ8%2B1y0mcvJLA%2F4tdtHONXKiQuwu%2BnFjCprBpnClDz7ev56rSEmfe3R50ICuzdwrxLLqE7nveQ%2B%2FU5qxQ3wSAeGdmrJbyl%2B0B3907RSCawFbCi3nWVnLum52404L&X-Amz-Signature=70246463ebb92565768c7dbb119ce5f974b8dc2d5ec888d5457d1a96e8187bad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTV3HMBC%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8GdK1GwxV1w8cWU4mnPooLPaouFa67iPmgktohpEUXAiAgmbpez6t4E1mULz9hoXRzwSZcP2hFQqG3%2BWZ8Gu2wICr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMJbS09mQNH0jQzWDCKtwDAB2VOYy81O7aqXlYNC70Hf87fhJjO2wEfvoOe24qXH7DoFwF9Dec1rD4ZsEA8ySx055oSyPUIhTvpbZSo4A73V3OYK0f9neI9d2mEAReRkEYBrY%2FEgqLrs7NRMD%2F%2Fo6Men1XYZxSsss3HYnaCjUj25UUat41MjrzC927EsALucouvTs0j3MJDB8aMaaxs4AWUp9hDzYH9GrY2%2Fkbr9nA%2BjKtcuHUO%2B4CzK7E94k2%2FMYOgH0s9LJoCEXfyC5DUeFxCzfETU%2FYf9Rmt%2B0PkMwl0xPoPmeua0sFZ2c%2F%2FgpxPK%2FZpS3ku19rT5n8maOOMrajpbGQ7A%2BSOeouaWel4gUFbhnqmfp7yh9hDyeuc5ZShKXZBjocEZUVT4NRqBocqq2j4ken7Ehe7FmXuorGwAHVrI6%2FApgY0FT5rkYOrPsCIJqk9A0yqAn9bSVZaLs0MJa9AeqAZTNXKpTFj68DhVFJ4Y7x5iZCEECgBNA27Ddm06J6JGY41%2BTRb%2FPqYhJVtSbEVkPhh1E8L3awzbyXk0s1ovnGeUYe166qirbEv8YZNIqRm9wd09LQcAYYZRU0E%2FyFhDj6i0KPvqOaqSSSrTrOJTnMIIik893cKhfRipVFhwHoN1%2BJMtEaXqdK%2B2Uw5KKwwAY6pgGasDys0kqNxQT9pgkQMzte9H%2Bj1ohUwJYmY%2FVyLrQ%2FD%2F6nxX7A4AmDFrvixb%2Bn7FvyWFVPrB1Q9xjcxh3AsS%2F9cd3y%2Fd0LwB5QnQ8%2B1y0mcvJLA%2F4tdtHONXKiQuwu%2BnFjCprBpnClDz7ev56rSEmfe3R50ICuzdwrxLLqE7nveQ%2B%2FU5qxQ3wSAeGdmrJbyl%2B0B3907RSCawFbCi3nWVnLum52404L&X-Amz-Signature=5c220acc36033f6703f2b8b7b85d7526d4de7237908ee050353ccf05e1f711bb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTV3HMBC%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8GdK1GwxV1w8cWU4mnPooLPaouFa67iPmgktohpEUXAiAgmbpez6t4E1mULz9hoXRzwSZcP2hFQqG3%2BWZ8Gu2wICr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMJbS09mQNH0jQzWDCKtwDAB2VOYy81O7aqXlYNC70Hf87fhJjO2wEfvoOe24qXH7DoFwF9Dec1rD4ZsEA8ySx055oSyPUIhTvpbZSo4A73V3OYK0f9neI9d2mEAReRkEYBrY%2FEgqLrs7NRMD%2F%2Fo6Men1XYZxSsss3HYnaCjUj25UUat41MjrzC927EsALucouvTs0j3MJDB8aMaaxs4AWUp9hDzYH9GrY2%2Fkbr9nA%2BjKtcuHUO%2B4CzK7E94k2%2FMYOgH0s9LJoCEXfyC5DUeFxCzfETU%2FYf9Rmt%2B0PkMwl0xPoPmeua0sFZ2c%2F%2FgpxPK%2FZpS3ku19rT5n8maOOMrajpbGQ7A%2BSOeouaWel4gUFbhnqmfp7yh9hDyeuc5ZShKXZBjocEZUVT4NRqBocqq2j4ken7Ehe7FmXuorGwAHVrI6%2FApgY0FT5rkYOrPsCIJqk9A0yqAn9bSVZaLs0MJa9AeqAZTNXKpTFj68DhVFJ4Y7x5iZCEECgBNA27Ddm06J6JGY41%2BTRb%2FPqYhJVtSbEVkPhh1E8L3awzbyXk0s1ovnGeUYe166qirbEv8YZNIqRm9wd09LQcAYYZRU0E%2FyFhDj6i0KPvqOaqSSSrTrOJTnMIIik893cKhfRipVFhwHoN1%2BJMtEaXqdK%2B2Uw5KKwwAY6pgGasDys0kqNxQT9pgkQMzte9H%2Bj1ohUwJYmY%2FVyLrQ%2FD%2F6nxX7A4AmDFrvixb%2Bn7FvyWFVPrB1Q9xjcxh3AsS%2F9cd3y%2Fd0LwB5QnQ8%2B1y0mcvJLA%2F4tdtHONXKiQuwu%2BnFjCprBpnClDz7ev56rSEmfe3R50ICuzdwrxLLqE7nveQ%2B%2FU5qxQ3wSAeGdmrJbyl%2B0B3907RSCawFbCi3nWVnLum52404L&X-Amz-Signature=83043640b26c26ef036a92e5f6419831e4a3d3721eb0674ec4d51f4f388d80c3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTV3HMBC%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8GdK1GwxV1w8cWU4mnPooLPaouFa67iPmgktohpEUXAiAgmbpez6t4E1mULz9hoXRzwSZcP2hFQqG3%2BWZ8Gu2wICr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMJbS09mQNH0jQzWDCKtwDAB2VOYy81O7aqXlYNC70Hf87fhJjO2wEfvoOe24qXH7DoFwF9Dec1rD4ZsEA8ySx055oSyPUIhTvpbZSo4A73V3OYK0f9neI9d2mEAReRkEYBrY%2FEgqLrs7NRMD%2F%2Fo6Men1XYZxSsss3HYnaCjUj25UUat41MjrzC927EsALucouvTs0j3MJDB8aMaaxs4AWUp9hDzYH9GrY2%2Fkbr9nA%2BjKtcuHUO%2B4CzK7E94k2%2FMYOgH0s9LJoCEXfyC5DUeFxCzfETU%2FYf9Rmt%2B0PkMwl0xPoPmeua0sFZ2c%2F%2FgpxPK%2FZpS3ku19rT5n8maOOMrajpbGQ7A%2BSOeouaWel4gUFbhnqmfp7yh9hDyeuc5ZShKXZBjocEZUVT4NRqBocqq2j4ken7Ehe7FmXuorGwAHVrI6%2FApgY0FT5rkYOrPsCIJqk9A0yqAn9bSVZaLs0MJa9AeqAZTNXKpTFj68DhVFJ4Y7x5iZCEECgBNA27Ddm06J6JGY41%2BTRb%2FPqYhJVtSbEVkPhh1E8L3awzbyXk0s1ovnGeUYe166qirbEv8YZNIqRm9wd09LQcAYYZRU0E%2FyFhDj6i0KPvqOaqSSSrTrOJTnMIIik893cKhfRipVFhwHoN1%2BJMtEaXqdK%2B2Uw5KKwwAY6pgGasDys0kqNxQT9pgkQMzte9H%2Bj1ohUwJYmY%2FVyLrQ%2FD%2F6nxX7A4AmDFrvixb%2Bn7FvyWFVPrB1Q9xjcxh3AsS%2F9cd3y%2Fd0LwB5QnQ8%2B1y0mcvJLA%2F4tdtHONXKiQuwu%2BnFjCprBpnClDz7ev56rSEmfe3R50ICuzdwrxLLqE7nveQ%2B%2FU5qxQ3wSAeGdmrJbyl%2B0B3907RSCawFbCi3nWVnLum52404L&X-Amz-Signature=7198d809c49c0d49b6483caed99d30b24f911088dbd3c6b91912e1669b8213a1&X-Amz-SignedHeaders=host&x-id=GetObject)
