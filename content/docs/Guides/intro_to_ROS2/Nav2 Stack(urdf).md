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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZNN565S%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T170651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQCZWTLz1tEeptubhOuNbDXuqIsXvGs3tagthKtK8V8f3wIhAO2EsdVpba7uQECwzbUqIFSpWHTriFEXw3tcwtbaL8v6Kv8DCDEQABoMNjM3NDIzMTgzODA1Igw6Yo%2Bx6W2Q5Y41hd4q3APUHdzoHTfBG%2BOxoQkavc2%2B45xSRXFT23TbaMGF46UrSvN3rb24NiinW3JGeC3QLDVy5Q6FQvCHdE%2B%2B6%2BkmbLw7hcR12XfWErQ8dhjjudQ8SMmhVNX77mjI5KyuLghq859sSKwUIzfFwJciHDZ7j2LY1hY0e%2FJbQaH1uLeRd5jFceyBae9IxCP%2BNWbrjSwfCIm0vx4rnkFxX5zeH4ajgYb5uERvV37oKgmZwNVcBEe%2FIxUaGpCIAwyYKfENpfZ0XuTOJbpgEmRCsYn0DWwgBJ2PPNNVHyJ8lXfp%2FXKUqGe48ycahItS2MP6NhgavwjpqN%2Bj7ZFwmL%2BTXvF4kHkaTOPlR%2B7yYhv%2BstRrCJG7oHLvVWLucit0KyVQiZplH7tzS3nT6o7jTS8aKAPMs3esPTq4EM6xrjB0D2lQbcXtZozTAMQbbR%2FoYwnXxSudRFtf3oeH14FMHwVyyBVVCE1WnPyK7M5%2BasCIQmvTfMWwXh%2Fh9YXe%2FvNRkxTzxGFyRxle70i8jCTV%2FES%2F2tOGi77GM9W12576UsuS7TmNxmutAnQSOX5uY6bFmlYSNVBENdpjbsKdzILkfmvFpPR%2FYlFoGRKVuoy4g7Nx0pGgFYZhBqh1XsyrC8r9si6eJZ5zJDDqurbCBjqkAXFa4U2YH8IuvRpP1HknDyevczuoc5UiudqHUAYCAaRrajQpvKG1Sqbjy5M6ZA%2Fjd1eSw%2BPRMAEtFUU0XlQ70Vrp7uwth5W42oU11if0zZhq%2BjVEIN5h2SeXgGB7gS6e2%2BOi8CsTO1pQrov4xUe%2Fz%2FS5j5dL48NYovROqjUwzPHLyfPo9Tlz%2BuHn3bhliDUkJkLk6eYR%2FrwE8fCaRDT4yvPr5hNq&X-Amz-Signature=1ea1c3449ffb66c3770c2ab356e9bb1a5e4dce6b54d32880dddb3f9c97869c5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZNN565S%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T170651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQCZWTLz1tEeptubhOuNbDXuqIsXvGs3tagthKtK8V8f3wIhAO2EsdVpba7uQECwzbUqIFSpWHTriFEXw3tcwtbaL8v6Kv8DCDEQABoMNjM3NDIzMTgzODA1Igw6Yo%2Bx6W2Q5Y41hd4q3APUHdzoHTfBG%2BOxoQkavc2%2B45xSRXFT23TbaMGF46UrSvN3rb24NiinW3JGeC3QLDVy5Q6FQvCHdE%2B%2B6%2BkmbLw7hcR12XfWErQ8dhjjudQ8SMmhVNX77mjI5KyuLghq859sSKwUIzfFwJciHDZ7j2LY1hY0e%2FJbQaH1uLeRd5jFceyBae9IxCP%2BNWbrjSwfCIm0vx4rnkFxX5zeH4ajgYb5uERvV37oKgmZwNVcBEe%2FIxUaGpCIAwyYKfENpfZ0XuTOJbpgEmRCsYn0DWwgBJ2PPNNVHyJ8lXfp%2FXKUqGe48ycahItS2MP6NhgavwjpqN%2Bj7ZFwmL%2BTXvF4kHkaTOPlR%2B7yYhv%2BstRrCJG7oHLvVWLucit0KyVQiZplH7tzS3nT6o7jTS8aKAPMs3esPTq4EM6xrjB0D2lQbcXtZozTAMQbbR%2FoYwnXxSudRFtf3oeH14FMHwVyyBVVCE1WnPyK7M5%2BasCIQmvTfMWwXh%2Fh9YXe%2FvNRkxTzxGFyRxle70i8jCTV%2FES%2F2tOGi77GM9W12576UsuS7TmNxmutAnQSOX5uY6bFmlYSNVBENdpjbsKdzILkfmvFpPR%2FYlFoGRKVuoy4g7Nx0pGgFYZhBqh1XsyrC8r9si6eJZ5zJDDqurbCBjqkAXFa4U2YH8IuvRpP1HknDyevczuoc5UiudqHUAYCAaRrajQpvKG1Sqbjy5M6ZA%2Fjd1eSw%2BPRMAEtFUU0XlQ70Vrp7uwth5W42oU11if0zZhq%2BjVEIN5h2SeXgGB7gS6e2%2BOi8CsTO1pQrov4xUe%2Fz%2FS5j5dL48NYovROqjUwzPHLyfPo9Tlz%2BuHn3bhliDUkJkLk6eYR%2FrwE8fCaRDT4yvPr5hNq&X-Amz-Signature=fbb5f89361c2377d2493d549423c7bb4ba7bf593626b133b0d7c25b5df59c90d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZNN565S%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T170651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQCZWTLz1tEeptubhOuNbDXuqIsXvGs3tagthKtK8V8f3wIhAO2EsdVpba7uQECwzbUqIFSpWHTriFEXw3tcwtbaL8v6Kv8DCDEQABoMNjM3NDIzMTgzODA1Igw6Yo%2Bx6W2Q5Y41hd4q3APUHdzoHTfBG%2BOxoQkavc2%2B45xSRXFT23TbaMGF46UrSvN3rb24NiinW3JGeC3QLDVy5Q6FQvCHdE%2B%2B6%2BkmbLw7hcR12XfWErQ8dhjjudQ8SMmhVNX77mjI5KyuLghq859sSKwUIzfFwJciHDZ7j2LY1hY0e%2FJbQaH1uLeRd5jFceyBae9IxCP%2BNWbrjSwfCIm0vx4rnkFxX5zeH4ajgYb5uERvV37oKgmZwNVcBEe%2FIxUaGpCIAwyYKfENpfZ0XuTOJbpgEmRCsYn0DWwgBJ2PPNNVHyJ8lXfp%2FXKUqGe48ycahItS2MP6NhgavwjpqN%2Bj7ZFwmL%2BTXvF4kHkaTOPlR%2B7yYhv%2BstRrCJG7oHLvVWLucit0KyVQiZplH7tzS3nT6o7jTS8aKAPMs3esPTq4EM6xrjB0D2lQbcXtZozTAMQbbR%2FoYwnXxSudRFtf3oeH14FMHwVyyBVVCE1WnPyK7M5%2BasCIQmvTfMWwXh%2Fh9YXe%2FvNRkxTzxGFyRxle70i8jCTV%2FES%2F2tOGi77GM9W12576UsuS7TmNxmutAnQSOX5uY6bFmlYSNVBENdpjbsKdzILkfmvFpPR%2FYlFoGRKVuoy4g7Nx0pGgFYZhBqh1XsyrC8r9si6eJZ5zJDDqurbCBjqkAXFa4U2YH8IuvRpP1HknDyevczuoc5UiudqHUAYCAaRrajQpvKG1Sqbjy5M6ZA%2Fjd1eSw%2BPRMAEtFUU0XlQ70Vrp7uwth5W42oU11if0zZhq%2BjVEIN5h2SeXgGB7gS6e2%2BOi8CsTO1pQrov4xUe%2Fz%2FS5j5dL48NYovROqjUwzPHLyfPo9Tlz%2BuHn3bhliDUkJkLk6eYR%2FrwE8fCaRDT4yvPr5hNq&X-Amz-Signature=4f8dc33416dc5ff157c89a55408b9e13b6cc6576cff9383f7ee2672b10432f6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZNN565S%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T170651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQCZWTLz1tEeptubhOuNbDXuqIsXvGs3tagthKtK8V8f3wIhAO2EsdVpba7uQECwzbUqIFSpWHTriFEXw3tcwtbaL8v6Kv8DCDEQABoMNjM3NDIzMTgzODA1Igw6Yo%2Bx6W2Q5Y41hd4q3APUHdzoHTfBG%2BOxoQkavc2%2B45xSRXFT23TbaMGF46UrSvN3rb24NiinW3JGeC3QLDVy5Q6FQvCHdE%2B%2B6%2BkmbLw7hcR12XfWErQ8dhjjudQ8SMmhVNX77mjI5KyuLghq859sSKwUIzfFwJciHDZ7j2LY1hY0e%2FJbQaH1uLeRd5jFceyBae9IxCP%2BNWbrjSwfCIm0vx4rnkFxX5zeH4ajgYb5uERvV37oKgmZwNVcBEe%2FIxUaGpCIAwyYKfENpfZ0XuTOJbpgEmRCsYn0DWwgBJ2PPNNVHyJ8lXfp%2FXKUqGe48ycahItS2MP6NhgavwjpqN%2Bj7ZFwmL%2BTXvF4kHkaTOPlR%2B7yYhv%2BstRrCJG7oHLvVWLucit0KyVQiZplH7tzS3nT6o7jTS8aKAPMs3esPTq4EM6xrjB0D2lQbcXtZozTAMQbbR%2FoYwnXxSudRFtf3oeH14FMHwVyyBVVCE1WnPyK7M5%2BasCIQmvTfMWwXh%2Fh9YXe%2FvNRkxTzxGFyRxle70i8jCTV%2FES%2F2tOGi77GM9W12576UsuS7TmNxmutAnQSOX5uY6bFmlYSNVBENdpjbsKdzILkfmvFpPR%2FYlFoGRKVuoy4g7Nx0pGgFYZhBqh1XsyrC8r9si6eJZ5zJDDqurbCBjqkAXFa4U2YH8IuvRpP1HknDyevczuoc5UiudqHUAYCAaRrajQpvKG1Sqbjy5M6ZA%2Fjd1eSw%2BPRMAEtFUU0XlQ70Vrp7uwth5W42oU11if0zZhq%2BjVEIN5h2SeXgGB7gS6e2%2BOi8CsTO1pQrov4xUe%2Fz%2FS5j5dL48NYovROqjUwzPHLyfPo9Tlz%2BuHn3bhliDUkJkLk6eYR%2FrwE8fCaRDT4yvPr5hNq&X-Amz-Signature=7ca01b11af399e9118d86691dea23f417fe83800257ac76820a3320e7e74acca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZNN565S%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T170651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQCZWTLz1tEeptubhOuNbDXuqIsXvGs3tagthKtK8V8f3wIhAO2EsdVpba7uQECwzbUqIFSpWHTriFEXw3tcwtbaL8v6Kv8DCDEQABoMNjM3NDIzMTgzODA1Igw6Yo%2Bx6W2Q5Y41hd4q3APUHdzoHTfBG%2BOxoQkavc2%2B45xSRXFT23TbaMGF46UrSvN3rb24NiinW3JGeC3QLDVy5Q6FQvCHdE%2B%2B6%2BkmbLw7hcR12XfWErQ8dhjjudQ8SMmhVNX77mjI5KyuLghq859sSKwUIzfFwJciHDZ7j2LY1hY0e%2FJbQaH1uLeRd5jFceyBae9IxCP%2BNWbrjSwfCIm0vx4rnkFxX5zeH4ajgYb5uERvV37oKgmZwNVcBEe%2FIxUaGpCIAwyYKfENpfZ0XuTOJbpgEmRCsYn0DWwgBJ2PPNNVHyJ8lXfp%2FXKUqGe48ycahItS2MP6NhgavwjpqN%2Bj7ZFwmL%2BTXvF4kHkaTOPlR%2B7yYhv%2BstRrCJG7oHLvVWLucit0KyVQiZplH7tzS3nT6o7jTS8aKAPMs3esPTq4EM6xrjB0D2lQbcXtZozTAMQbbR%2FoYwnXxSudRFtf3oeH14FMHwVyyBVVCE1WnPyK7M5%2BasCIQmvTfMWwXh%2Fh9YXe%2FvNRkxTzxGFyRxle70i8jCTV%2FES%2F2tOGi77GM9W12576UsuS7TmNxmutAnQSOX5uY6bFmlYSNVBENdpjbsKdzILkfmvFpPR%2FYlFoGRKVuoy4g7Nx0pGgFYZhBqh1XsyrC8r9si6eJZ5zJDDqurbCBjqkAXFa4U2YH8IuvRpP1HknDyevczuoc5UiudqHUAYCAaRrajQpvKG1Sqbjy5M6ZA%2Fjd1eSw%2BPRMAEtFUU0XlQ70Vrp7uwth5W42oU11if0zZhq%2BjVEIN5h2SeXgGB7gS6e2%2BOi8CsTO1pQrov4xUe%2Fz%2FS5j5dL48NYovROqjUwzPHLyfPo9Tlz%2BuHn3bhliDUkJkLk6eYR%2FrwE8fCaRDT4yvPr5hNq&X-Amz-Signature=4c19c4e1f47af598bb3f6536ae6a3c6e838fa8eba62f6751f5813bdcc401975d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZNN565S%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T170651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQCZWTLz1tEeptubhOuNbDXuqIsXvGs3tagthKtK8V8f3wIhAO2EsdVpba7uQECwzbUqIFSpWHTriFEXw3tcwtbaL8v6Kv8DCDEQABoMNjM3NDIzMTgzODA1Igw6Yo%2Bx6W2Q5Y41hd4q3APUHdzoHTfBG%2BOxoQkavc2%2B45xSRXFT23TbaMGF46UrSvN3rb24NiinW3JGeC3QLDVy5Q6FQvCHdE%2B%2B6%2BkmbLw7hcR12XfWErQ8dhjjudQ8SMmhVNX77mjI5KyuLghq859sSKwUIzfFwJciHDZ7j2LY1hY0e%2FJbQaH1uLeRd5jFceyBae9IxCP%2BNWbrjSwfCIm0vx4rnkFxX5zeH4ajgYb5uERvV37oKgmZwNVcBEe%2FIxUaGpCIAwyYKfENpfZ0XuTOJbpgEmRCsYn0DWwgBJ2PPNNVHyJ8lXfp%2FXKUqGe48ycahItS2MP6NhgavwjpqN%2Bj7ZFwmL%2BTXvF4kHkaTOPlR%2B7yYhv%2BstRrCJG7oHLvVWLucit0KyVQiZplH7tzS3nT6o7jTS8aKAPMs3esPTq4EM6xrjB0D2lQbcXtZozTAMQbbR%2FoYwnXxSudRFtf3oeH14FMHwVyyBVVCE1WnPyK7M5%2BasCIQmvTfMWwXh%2Fh9YXe%2FvNRkxTzxGFyRxle70i8jCTV%2FES%2F2tOGi77GM9W12576UsuS7TmNxmutAnQSOX5uY6bFmlYSNVBENdpjbsKdzILkfmvFpPR%2FYlFoGRKVuoy4g7Nx0pGgFYZhBqh1XsyrC8r9si6eJZ5zJDDqurbCBjqkAXFa4U2YH8IuvRpP1HknDyevczuoc5UiudqHUAYCAaRrajQpvKG1Sqbjy5M6ZA%2Fjd1eSw%2BPRMAEtFUU0XlQ70Vrp7uwth5W42oU11if0zZhq%2BjVEIN5h2SeXgGB7gS6e2%2BOi8CsTO1pQrov4xUe%2Fz%2FS5j5dL48NYovROqjUwzPHLyfPo9Tlz%2BuHn3bhliDUkJkLk6eYR%2FrwE8fCaRDT4yvPr5hNq&X-Amz-Signature=ecc7d38e740ff75ce29991a7cf306b7096fb97fcb423461e7e743d53da250e20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
