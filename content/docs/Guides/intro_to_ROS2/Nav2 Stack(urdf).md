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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466766UGQXZ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T170444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYaOOdjpmME5dhNtt4OEhzGvtoXxLt44DhD179eCMwHgIhAJWPwGbyEfLlkSS3qEWmTPQFvOQFzBAVlFMsNaa9LBb6KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIdDkArhvaU6dO4koq3APTSSFyMAS4KA3Y50FhwD%2FrKBFXpztkKtWxoaeTcdsANDKwLfCgUYKAWbG925lM3cGX4CdebkeOm2HeVKjSM5NYjoa5EcHxuWEr2SdPY8254NqAO7YqyzW7gGW6EMi7XvbBnC2xRnSqwah0ARYdUXfWsFVXqAHBr4%2FzzgltKDBaYFBLo8g9Mux3IDvj6sOYGce5aNibwqiDpEbci0QJLGuNpHII4xKVr5pJN8uwG9QnNi0QFTGMmurhSZrjVL660EbiB5fHZCU6kKiOREl%2B%2BVvECYl5EWENVkPGD5SsrFahn%2BrNVA6TDu3tieCIeHyT4sFx2und%2F4I5NaU%2Bk41KxYpgXi0gPJu%2Ft2u914a2HGHpmefjCLTUCJwQyGSZ3oDWruXzWUM01dpupnY3xvTAjhAeHKaOZQ8BfmyIGv5CEHA1Gp0Q6zcQ5sxM97bO2WVjtf24x9D9aMC3p6D6uWsCkLNwn5qSrrqQ9QUCGfoMngYmZ4iUxSSt21%2B3WtrM4J%2F527fkX161ZDTaJZCjjjQu2q26nifShHhTXJqq62F35BIXvMm2aqASZxvYFYc%2BEFh6WhFuqcksXPU4rKKX5dYv4E0O2DfJTskmDyQBiZ5TUYnYRN98QY4zW2DdzHbYZzC22e68BjqkATiPYVqdWVVdC4Ppz2MqtzPym5X6%2F06ef8tNzD5cVG2BmrS0YhbZCaTq3BcXPzBk9oauzlta7bLkpZvywTax%2BSHhmfWAqAPUAxXZrXAxJnv7DAf%2BXPgpwL6Tif6nnYfBG%2Bvf7fnnwRSRrSqydyMaxu3a91wbnnn%2F5m3xwzsbXRLgm%2FxUBi1vhdv%2B0h6z0utkFj%2B%2FT%2F3OSOYmQX%2FxXqUshghc8MgR&X-Amz-Signature=f31bf6e85dd062ca2aba284deab578d976a491dbe883de923b77e941b5da648b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466766UGQXZ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T170444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYaOOdjpmME5dhNtt4OEhzGvtoXxLt44DhD179eCMwHgIhAJWPwGbyEfLlkSS3qEWmTPQFvOQFzBAVlFMsNaa9LBb6KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIdDkArhvaU6dO4koq3APTSSFyMAS4KA3Y50FhwD%2FrKBFXpztkKtWxoaeTcdsANDKwLfCgUYKAWbG925lM3cGX4CdebkeOm2HeVKjSM5NYjoa5EcHxuWEr2SdPY8254NqAO7YqyzW7gGW6EMi7XvbBnC2xRnSqwah0ARYdUXfWsFVXqAHBr4%2FzzgltKDBaYFBLo8g9Mux3IDvj6sOYGce5aNibwqiDpEbci0QJLGuNpHII4xKVr5pJN8uwG9QnNi0QFTGMmurhSZrjVL660EbiB5fHZCU6kKiOREl%2B%2BVvECYl5EWENVkPGD5SsrFahn%2BrNVA6TDu3tieCIeHyT4sFx2und%2F4I5NaU%2Bk41KxYpgXi0gPJu%2Ft2u914a2HGHpmefjCLTUCJwQyGSZ3oDWruXzWUM01dpupnY3xvTAjhAeHKaOZQ8BfmyIGv5CEHA1Gp0Q6zcQ5sxM97bO2WVjtf24x9D9aMC3p6D6uWsCkLNwn5qSrrqQ9QUCGfoMngYmZ4iUxSSt21%2B3WtrM4J%2F527fkX161ZDTaJZCjjjQu2q26nifShHhTXJqq62F35BIXvMm2aqASZxvYFYc%2BEFh6WhFuqcksXPU4rKKX5dYv4E0O2DfJTskmDyQBiZ5TUYnYRN98QY4zW2DdzHbYZzC22e68BjqkATiPYVqdWVVdC4Ppz2MqtzPym5X6%2F06ef8tNzD5cVG2BmrS0YhbZCaTq3BcXPzBk9oauzlta7bLkpZvywTax%2BSHhmfWAqAPUAxXZrXAxJnv7DAf%2BXPgpwL6Tif6nnYfBG%2Bvf7fnnwRSRrSqydyMaxu3a91wbnnn%2F5m3xwzsbXRLgm%2FxUBi1vhdv%2B0h6z0utkFj%2B%2FT%2F3OSOYmQX%2FxXqUshghc8MgR&X-Amz-Signature=45295d872e91580b4dcfa1cac1474bd364ab0108599f51f5e9900d2b45c3dd31&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466766UGQXZ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T170444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYaOOdjpmME5dhNtt4OEhzGvtoXxLt44DhD179eCMwHgIhAJWPwGbyEfLlkSS3qEWmTPQFvOQFzBAVlFMsNaa9LBb6KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIdDkArhvaU6dO4koq3APTSSFyMAS4KA3Y50FhwD%2FrKBFXpztkKtWxoaeTcdsANDKwLfCgUYKAWbG925lM3cGX4CdebkeOm2HeVKjSM5NYjoa5EcHxuWEr2SdPY8254NqAO7YqyzW7gGW6EMi7XvbBnC2xRnSqwah0ARYdUXfWsFVXqAHBr4%2FzzgltKDBaYFBLo8g9Mux3IDvj6sOYGce5aNibwqiDpEbci0QJLGuNpHII4xKVr5pJN8uwG9QnNi0QFTGMmurhSZrjVL660EbiB5fHZCU6kKiOREl%2B%2BVvECYl5EWENVkPGD5SsrFahn%2BrNVA6TDu3tieCIeHyT4sFx2und%2F4I5NaU%2Bk41KxYpgXi0gPJu%2Ft2u914a2HGHpmefjCLTUCJwQyGSZ3oDWruXzWUM01dpupnY3xvTAjhAeHKaOZQ8BfmyIGv5CEHA1Gp0Q6zcQ5sxM97bO2WVjtf24x9D9aMC3p6D6uWsCkLNwn5qSrrqQ9QUCGfoMngYmZ4iUxSSt21%2B3WtrM4J%2F527fkX161ZDTaJZCjjjQu2q26nifShHhTXJqq62F35BIXvMm2aqASZxvYFYc%2BEFh6WhFuqcksXPU4rKKX5dYv4E0O2DfJTskmDyQBiZ5TUYnYRN98QY4zW2DdzHbYZzC22e68BjqkATiPYVqdWVVdC4Ppz2MqtzPym5X6%2F06ef8tNzD5cVG2BmrS0YhbZCaTq3BcXPzBk9oauzlta7bLkpZvywTax%2BSHhmfWAqAPUAxXZrXAxJnv7DAf%2BXPgpwL6Tif6nnYfBG%2Bvf7fnnwRSRrSqydyMaxu3a91wbnnn%2F5m3xwzsbXRLgm%2FxUBi1vhdv%2B0h6z0utkFj%2B%2FT%2F3OSOYmQX%2FxXqUshghc8MgR&X-Amz-Signature=7a750d425b4d0d34b7b8dd6c1de34ed9b12d0acbdd8e6cc3e34b63610190fa33&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466766UGQXZ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T170444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYaOOdjpmME5dhNtt4OEhzGvtoXxLt44DhD179eCMwHgIhAJWPwGbyEfLlkSS3qEWmTPQFvOQFzBAVlFMsNaa9LBb6KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIdDkArhvaU6dO4koq3APTSSFyMAS4KA3Y50FhwD%2FrKBFXpztkKtWxoaeTcdsANDKwLfCgUYKAWbG925lM3cGX4CdebkeOm2HeVKjSM5NYjoa5EcHxuWEr2SdPY8254NqAO7YqyzW7gGW6EMi7XvbBnC2xRnSqwah0ARYdUXfWsFVXqAHBr4%2FzzgltKDBaYFBLo8g9Mux3IDvj6sOYGce5aNibwqiDpEbci0QJLGuNpHII4xKVr5pJN8uwG9QnNi0QFTGMmurhSZrjVL660EbiB5fHZCU6kKiOREl%2B%2BVvECYl5EWENVkPGD5SsrFahn%2BrNVA6TDu3tieCIeHyT4sFx2und%2F4I5NaU%2Bk41KxYpgXi0gPJu%2Ft2u914a2HGHpmefjCLTUCJwQyGSZ3oDWruXzWUM01dpupnY3xvTAjhAeHKaOZQ8BfmyIGv5CEHA1Gp0Q6zcQ5sxM97bO2WVjtf24x9D9aMC3p6D6uWsCkLNwn5qSrrqQ9QUCGfoMngYmZ4iUxSSt21%2B3WtrM4J%2F527fkX161ZDTaJZCjjjQu2q26nifShHhTXJqq62F35BIXvMm2aqASZxvYFYc%2BEFh6WhFuqcksXPU4rKKX5dYv4E0O2DfJTskmDyQBiZ5TUYnYRN98QY4zW2DdzHbYZzC22e68BjqkATiPYVqdWVVdC4Ppz2MqtzPym5X6%2F06ef8tNzD5cVG2BmrS0YhbZCaTq3BcXPzBk9oauzlta7bLkpZvywTax%2BSHhmfWAqAPUAxXZrXAxJnv7DAf%2BXPgpwL6Tif6nnYfBG%2Bvf7fnnwRSRrSqydyMaxu3a91wbnnn%2F5m3xwzsbXRLgm%2FxUBi1vhdv%2B0h6z0utkFj%2B%2FT%2F3OSOYmQX%2FxXqUshghc8MgR&X-Amz-Signature=fad864dfad15ff55a81746747bdbe5e422f4f0987300fe44ed3cd2b6a15e75e8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466766UGQXZ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T170444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYaOOdjpmME5dhNtt4OEhzGvtoXxLt44DhD179eCMwHgIhAJWPwGbyEfLlkSS3qEWmTPQFvOQFzBAVlFMsNaa9LBb6KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIdDkArhvaU6dO4koq3APTSSFyMAS4KA3Y50FhwD%2FrKBFXpztkKtWxoaeTcdsANDKwLfCgUYKAWbG925lM3cGX4CdebkeOm2HeVKjSM5NYjoa5EcHxuWEr2SdPY8254NqAO7YqyzW7gGW6EMi7XvbBnC2xRnSqwah0ARYdUXfWsFVXqAHBr4%2FzzgltKDBaYFBLo8g9Mux3IDvj6sOYGce5aNibwqiDpEbci0QJLGuNpHII4xKVr5pJN8uwG9QnNi0QFTGMmurhSZrjVL660EbiB5fHZCU6kKiOREl%2B%2BVvECYl5EWENVkPGD5SsrFahn%2BrNVA6TDu3tieCIeHyT4sFx2und%2F4I5NaU%2Bk41KxYpgXi0gPJu%2Ft2u914a2HGHpmefjCLTUCJwQyGSZ3oDWruXzWUM01dpupnY3xvTAjhAeHKaOZQ8BfmyIGv5CEHA1Gp0Q6zcQ5sxM97bO2WVjtf24x9D9aMC3p6D6uWsCkLNwn5qSrrqQ9QUCGfoMngYmZ4iUxSSt21%2B3WtrM4J%2F527fkX161ZDTaJZCjjjQu2q26nifShHhTXJqq62F35BIXvMm2aqASZxvYFYc%2BEFh6WhFuqcksXPU4rKKX5dYv4E0O2DfJTskmDyQBiZ5TUYnYRN98QY4zW2DdzHbYZzC22e68BjqkATiPYVqdWVVdC4Ppz2MqtzPym5X6%2F06ef8tNzD5cVG2BmrS0YhbZCaTq3BcXPzBk9oauzlta7bLkpZvywTax%2BSHhmfWAqAPUAxXZrXAxJnv7DAf%2BXPgpwL6Tif6nnYfBG%2Bvf7fnnwRSRrSqydyMaxu3a91wbnnn%2F5m3xwzsbXRLgm%2FxUBi1vhdv%2B0h6z0utkFj%2B%2FT%2F3OSOYmQX%2FxXqUshghc8MgR&X-Amz-Signature=123e82885d2bbbbecf0eefe62e4e5c43251756e655117aa2c2ca691e0e5b2ff3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466766UGQXZ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T170444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYaOOdjpmME5dhNtt4OEhzGvtoXxLt44DhD179eCMwHgIhAJWPwGbyEfLlkSS3qEWmTPQFvOQFzBAVlFMsNaa9LBb6KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIdDkArhvaU6dO4koq3APTSSFyMAS4KA3Y50FhwD%2FrKBFXpztkKtWxoaeTcdsANDKwLfCgUYKAWbG925lM3cGX4CdebkeOm2HeVKjSM5NYjoa5EcHxuWEr2SdPY8254NqAO7YqyzW7gGW6EMi7XvbBnC2xRnSqwah0ARYdUXfWsFVXqAHBr4%2FzzgltKDBaYFBLo8g9Mux3IDvj6sOYGce5aNibwqiDpEbci0QJLGuNpHII4xKVr5pJN8uwG9QnNi0QFTGMmurhSZrjVL660EbiB5fHZCU6kKiOREl%2B%2BVvECYl5EWENVkPGD5SsrFahn%2BrNVA6TDu3tieCIeHyT4sFx2und%2F4I5NaU%2Bk41KxYpgXi0gPJu%2Ft2u914a2HGHpmefjCLTUCJwQyGSZ3oDWruXzWUM01dpupnY3xvTAjhAeHKaOZQ8BfmyIGv5CEHA1Gp0Q6zcQ5sxM97bO2WVjtf24x9D9aMC3p6D6uWsCkLNwn5qSrrqQ9QUCGfoMngYmZ4iUxSSt21%2B3WtrM4J%2F527fkX161ZDTaJZCjjjQu2q26nifShHhTXJqq62F35BIXvMm2aqASZxvYFYc%2BEFh6WhFuqcksXPU4rKKX5dYv4E0O2DfJTskmDyQBiZ5TUYnYRN98QY4zW2DdzHbYZzC22e68BjqkATiPYVqdWVVdC4Ppz2MqtzPym5X6%2F06ef8tNzD5cVG2BmrS0YhbZCaTq3BcXPzBk9oauzlta7bLkpZvywTax%2BSHhmfWAqAPUAxXZrXAxJnv7DAf%2BXPgpwL6Tif6nnYfBG%2Bvf7fnnwRSRrSqydyMaxu3a91wbnnn%2F5m3xwzsbXRLgm%2FxUBi1vhdv%2B0h6z0utkFj%2B%2FT%2F3OSOYmQX%2FxXqUshghc8MgR&X-Amz-Signature=38b9f89f6e9af0365a30b831be2849db527f74ef45a928e42d20a74bd9967cd6&X-Amz-SignedHeaders=host&x-id=GetObject)
