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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VBDFPWO%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T022249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHTB%2FB4avb4%2Fq%2BNYfj0ndjiX%2FFAsdpPPW6H163f2AH07AiBdbcX3W88ufMKmeY%2BPs%2BeZ1Nj1LlWs1KVk3VqLDoj9Jyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMcVVIGShwzrEnukOwKtwDw%2BfXxIhvXodHuM8k%2FBxjWnvg8j%2BAg%2BXdlnZIGPwRKYIYfs8qB%2BhArz3yneBPRe%2FlVwLwczoWFBvgPuXQ1uOEFwFzhryie8eiM41AlW34Z3pRc7SOERtDlqPW4zoewzM1u%2Bwh6Ne0U7jmrRpVZJzdhZsuX9TnA5HkU4Lbt2rIJBcFbhy1ooxkKAkAKcWqpC%2F4rnrPIlqvngluTYNhBoDXQ4YOhyIMHWOF6gH5DhQYFnxm400HnpO9Gt4I3AofQp1YnBtix3hM47144eXf5a74EeyMai5qKNxKQ520v6sbFLv2k0s%2Bd2WY0drTSRtwMrYkevCbNZ3mSRAj547CvZSujEWF1Wzxy8ru%2BDKAjf2Cu%2BUUJNLTsWi7H6z1VRpqYjwZ4LhMfNMFyUH55iVfSTgghZxofA86DQifs2mzS%2B6obWStYpBIaPhjNBr5IVRXpOznuinpBWtufFS4bylPGi1E0Qudu7e%2B%2F2JTZnP1t4kSQXOeg22CAyqUQgBxZrw3sTAPYlhGM%2BFLvOCRRHYxUIx0YoNGvUiT%2BAPgBX96%2B7HngBEUW1LSOOGQT3KbktnCci%2B%2Fgo%2F8lmPR%2Fo0rqY1dwuVoSFyeXZ4FrPVzwWk3otfYS4toiTo4xqCGPZ2n47Ew7enMvwY6pgF1hQNy6L6ZL690y1hTDfpYOYuR09ho9W%2BFZk5g3lkkPIYkDv6Mz33iLYqIZpoTSBGRf9wAr5v9Hf%2Frgx8S8k%2F5qld3vTKocTJzqpNUsa6N6UZCm9xVkDpsYHrefCYZ82naJmksoSuYcBGn8c8Jk9CgT9XQpgPfS6YtGyuybCIMX8ID4mA%2BAEkdFRk7gvH5ekseSQ4G7W53J2megVZRNc%2Fbwyl%2B7YhX&X-Amz-Signature=ab3e5a49c6102b691c521cf1b76a8a491e7ee3e7efb5113a4cbc956156fe8952&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VBDFPWO%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T022249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHTB%2FB4avb4%2Fq%2BNYfj0ndjiX%2FFAsdpPPW6H163f2AH07AiBdbcX3W88ufMKmeY%2BPs%2BeZ1Nj1LlWs1KVk3VqLDoj9Jyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMcVVIGShwzrEnukOwKtwDw%2BfXxIhvXodHuM8k%2FBxjWnvg8j%2BAg%2BXdlnZIGPwRKYIYfs8qB%2BhArz3yneBPRe%2FlVwLwczoWFBvgPuXQ1uOEFwFzhryie8eiM41AlW34Z3pRc7SOERtDlqPW4zoewzM1u%2Bwh6Ne0U7jmrRpVZJzdhZsuX9TnA5HkU4Lbt2rIJBcFbhy1ooxkKAkAKcWqpC%2F4rnrPIlqvngluTYNhBoDXQ4YOhyIMHWOF6gH5DhQYFnxm400HnpO9Gt4I3AofQp1YnBtix3hM47144eXf5a74EeyMai5qKNxKQ520v6sbFLv2k0s%2Bd2WY0drTSRtwMrYkevCbNZ3mSRAj547CvZSujEWF1Wzxy8ru%2BDKAjf2Cu%2BUUJNLTsWi7H6z1VRpqYjwZ4LhMfNMFyUH55iVfSTgghZxofA86DQifs2mzS%2B6obWStYpBIaPhjNBr5IVRXpOznuinpBWtufFS4bylPGi1E0Qudu7e%2B%2F2JTZnP1t4kSQXOeg22CAyqUQgBxZrw3sTAPYlhGM%2BFLvOCRRHYxUIx0YoNGvUiT%2BAPgBX96%2B7HngBEUW1LSOOGQT3KbktnCci%2B%2Fgo%2F8lmPR%2Fo0rqY1dwuVoSFyeXZ4FrPVzwWk3otfYS4toiTo4xqCGPZ2n47Ew7enMvwY6pgF1hQNy6L6ZL690y1hTDfpYOYuR09ho9W%2BFZk5g3lkkPIYkDv6Mz33iLYqIZpoTSBGRf9wAr5v9Hf%2Frgx8S8k%2F5qld3vTKocTJzqpNUsa6N6UZCm9xVkDpsYHrefCYZ82naJmksoSuYcBGn8c8Jk9CgT9XQpgPfS6YtGyuybCIMX8ID4mA%2BAEkdFRk7gvH5ekseSQ4G7W53J2megVZRNc%2Fbwyl%2B7YhX&X-Amz-Signature=de218af491c8825bb0d045ecb16176d3d0909b67ebc920fb53414eec025460ec&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VBDFPWO%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T022249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHTB%2FB4avb4%2Fq%2BNYfj0ndjiX%2FFAsdpPPW6H163f2AH07AiBdbcX3W88ufMKmeY%2BPs%2BeZ1Nj1LlWs1KVk3VqLDoj9Jyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMcVVIGShwzrEnukOwKtwDw%2BfXxIhvXodHuM8k%2FBxjWnvg8j%2BAg%2BXdlnZIGPwRKYIYfs8qB%2BhArz3yneBPRe%2FlVwLwczoWFBvgPuXQ1uOEFwFzhryie8eiM41AlW34Z3pRc7SOERtDlqPW4zoewzM1u%2Bwh6Ne0U7jmrRpVZJzdhZsuX9TnA5HkU4Lbt2rIJBcFbhy1ooxkKAkAKcWqpC%2F4rnrPIlqvngluTYNhBoDXQ4YOhyIMHWOF6gH5DhQYFnxm400HnpO9Gt4I3AofQp1YnBtix3hM47144eXf5a74EeyMai5qKNxKQ520v6sbFLv2k0s%2Bd2WY0drTSRtwMrYkevCbNZ3mSRAj547CvZSujEWF1Wzxy8ru%2BDKAjf2Cu%2BUUJNLTsWi7H6z1VRpqYjwZ4LhMfNMFyUH55iVfSTgghZxofA86DQifs2mzS%2B6obWStYpBIaPhjNBr5IVRXpOznuinpBWtufFS4bylPGi1E0Qudu7e%2B%2F2JTZnP1t4kSQXOeg22CAyqUQgBxZrw3sTAPYlhGM%2BFLvOCRRHYxUIx0YoNGvUiT%2BAPgBX96%2B7HngBEUW1LSOOGQT3KbktnCci%2B%2Fgo%2F8lmPR%2Fo0rqY1dwuVoSFyeXZ4FrPVzwWk3otfYS4toiTo4xqCGPZ2n47Ew7enMvwY6pgF1hQNy6L6ZL690y1hTDfpYOYuR09ho9W%2BFZk5g3lkkPIYkDv6Mz33iLYqIZpoTSBGRf9wAr5v9Hf%2Frgx8S8k%2F5qld3vTKocTJzqpNUsa6N6UZCm9xVkDpsYHrefCYZ82naJmksoSuYcBGn8c8Jk9CgT9XQpgPfS6YtGyuybCIMX8ID4mA%2BAEkdFRk7gvH5ekseSQ4G7W53J2megVZRNc%2Fbwyl%2B7YhX&X-Amz-Signature=8051a3859fce8b858b6a6e0742d64658952da77463f537688f9f84d38f6bae29&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VBDFPWO%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T022249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHTB%2FB4avb4%2Fq%2BNYfj0ndjiX%2FFAsdpPPW6H163f2AH07AiBdbcX3W88ufMKmeY%2BPs%2BeZ1Nj1LlWs1KVk3VqLDoj9Jyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMcVVIGShwzrEnukOwKtwDw%2BfXxIhvXodHuM8k%2FBxjWnvg8j%2BAg%2BXdlnZIGPwRKYIYfs8qB%2BhArz3yneBPRe%2FlVwLwczoWFBvgPuXQ1uOEFwFzhryie8eiM41AlW34Z3pRc7SOERtDlqPW4zoewzM1u%2Bwh6Ne0U7jmrRpVZJzdhZsuX9TnA5HkU4Lbt2rIJBcFbhy1ooxkKAkAKcWqpC%2F4rnrPIlqvngluTYNhBoDXQ4YOhyIMHWOF6gH5DhQYFnxm400HnpO9Gt4I3AofQp1YnBtix3hM47144eXf5a74EeyMai5qKNxKQ520v6sbFLv2k0s%2Bd2WY0drTSRtwMrYkevCbNZ3mSRAj547CvZSujEWF1Wzxy8ru%2BDKAjf2Cu%2BUUJNLTsWi7H6z1VRpqYjwZ4LhMfNMFyUH55iVfSTgghZxofA86DQifs2mzS%2B6obWStYpBIaPhjNBr5IVRXpOznuinpBWtufFS4bylPGi1E0Qudu7e%2B%2F2JTZnP1t4kSQXOeg22CAyqUQgBxZrw3sTAPYlhGM%2BFLvOCRRHYxUIx0YoNGvUiT%2BAPgBX96%2B7HngBEUW1LSOOGQT3KbktnCci%2B%2Fgo%2F8lmPR%2Fo0rqY1dwuVoSFyeXZ4FrPVzwWk3otfYS4toiTo4xqCGPZ2n47Ew7enMvwY6pgF1hQNy6L6ZL690y1hTDfpYOYuR09ho9W%2BFZk5g3lkkPIYkDv6Mz33iLYqIZpoTSBGRf9wAr5v9Hf%2Frgx8S8k%2F5qld3vTKocTJzqpNUsa6N6UZCm9xVkDpsYHrefCYZ82naJmksoSuYcBGn8c8Jk9CgT9XQpgPfS6YtGyuybCIMX8ID4mA%2BAEkdFRk7gvH5ekseSQ4G7W53J2megVZRNc%2Fbwyl%2B7YhX&X-Amz-Signature=96161330cb6ff635765816539f3c12f212ddf6c1c3fbb9482caaf2277b33dc92&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VBDFPWO%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T022249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHTB%2FB4avb4%2Fq%2BNYfj0ndjiX%2FFAsdpPPW6H163f2AH07AiBdbcX3W88ufMKmeY%2BPs%2BeZ1Nj1LlWs1KVk3VqLDoj9Jyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMcVVIGShwzrEnukOwKtwDw%2BfXxIhvXodHuM8k%2FBxjWnvg8j%2BAg%2BXdlnZIGPwRKYIYfs8qB%2BhArz3yneBPRe%2FlVwLwczoWFBvgPuXQ1uOEFwFzhryie8eiM41AlW34Z3pRc7SOERtDlqPW4zoewzM1u%2Bwh6Ne0U7jmrRpVZJzdhZsuX9TnA5HkU4Lbt2rIJBcFbhy1ooxkKAkAKcWqpC%2F4rnrPIlqvngluTYNhBoDXQ4YOhyIMHWOF6gH5DhQYFnxm400HnpO9Gt4I3AofQp1YnBtix3hM47144eXf5a74EeyMai5qKNxKQ520v6sbFLv2k0s%2Bd2WY0drTSRtwMrYkevCbNZ3mSRAj547CvZSujEWF1Wzxy8ru%2BDKAjf2Cu%2BUUJNLTsWi7H6z1VRpqYjwZ4LhMfNMFyUH55iVfSTgghZxofA86DQifs2mzS%2B6obWStYpBIaPhjNBr5IVRXpOznuinpBWtufFS4bylPGi1E0Qudu7e%2B%2F2JTZnP1t4kSQXOeg22CAyqUQgBxZrw3sTAPYlhGM%2BFLvOCRRHYxUIx0YoNGvUiT%2BAPgBX96%2B7HngBEUW1LSOOGQT3KbktnCci%2B%2Fgo%2F8lmPR%2Fo0rqY1dwuVoSFyeXZ4FrPVzwWk3otfYS4toiTo4xqCGPZ2n47Ew7enMvwY6pgF1hQNy6L6ZL690y1hTDfpYOYuR09ho9W%2BFZk5g3lkkPIYkDv6Mz33iLYqIZpoTSBGRf9wAr5v9Hf%2Frgx8S8k%2F5qld3vTKocTJzqpNUsa6N6UZCm9xVkDpsYHrefCYZ82naJmksoSuYcBGn8c8Jk9CgT9XQpgPfS6YtGyuybCIMX8ID4mA%2BAEkdFRk7gvH5ekseSQ4G7W53J2megVZRNc%2Fbwyl%2B7YhX&X-Amz-Signature=b334020d2ff2939a5e9415ff9575145912062039a01fac86c46d92c0f110f9c3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VBDFPWO%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T022249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHTB%2FB4avb4%2Fq%2BNYfj0ndjiX%2FFAsdpPPW6H163f2AH07AiBdbcX3W88ufMKmeY%2BPs%2BeZ1Nj1LlWs1KVk3VqLDoj9Jyr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMcVVIGShwzrEnukOwKtwDw%2BfXxIhvXodHuM8k%2FBxjWnvg8j%2BAg%2BXdlnZIGPwRKYIYfs8qB%2BhArz3yneBPRe%2FlVwLwczoWFBvgPuXQ1uOEFwFzhryie8eiM41AlW34Z3pRc7SOERtDlqPW4zoewzM1u%2Bwh6Ne0U7jmrRpVZJzdhZsuX9TnA5HkU4Lbt2rIJBcFbhy1ooxkKAkAKcWqpC%2F4rnrPIlqvngluTYNhBoDXQ4YOhyIMHWOF6gH5DhQYFnxm400HnpO9Gt4I3AofQp1YnBtix3hM47144eXf5a74EeyMai5qKNxKQ520v6sbFLv2k0s%2Bd2WY0drTSRtwMrYkevCbNZ3mSRAj547CvZSujEWF1Wzxy8ru%2BDKAjf2Cu%2BUUJNLTsWi7H6z1VRpqYjwZ4LhMfNMFyUH55iVfSTgghZxofA86DQifs2mzS%2B6obWStYpBIaPhjNBr5IVRXpOznuinpBWtufFS4bylPGi1E0Qudu7e%2B%2F2JTZnP1t4kSQXOeg22CAyqUQgBxZrw3sTAPYlhGM%2BFLvOCRRHYxUIx0YoNGvUiT%2BAPgBX96%2B7HngBEUW1LSOOGQT3KbktnCci%2B%2Fgo%2F8lmPR%2Fo0rqY1dwuVoSFyeXZ4FrPVzwWk3otfYS4toiTo4xqCGPZ2n47Ew7enMvwY6pgF1hQNy6L6ZL690y1hTDfpYOYuR09ho9W%2BFZk5g3lkkPIYkDv6Mz33iLYqIZpoTSBGRf9wAr5v9Hf%2Frgx8S8k%2F5qld3vTKocTJzqpNUsa6N6UZCm9xVkDpsYHrefCYZ82naJmksoSuYcBGn8c8Jk9CgT9XQpgPfS6YtGyuybCIMX8ID4mA%2BAEkdFRk7gvH5ekseSQ4G7W53J2megVZRNc%2Fbwyl%2B7YhX&X-Amz-Signature=ad9d0a012a50de789d5c2ded817664cc11f69562499e9696f9a80c344790a779&X-Amz-SignedHeaders=host&x-id=GetObject)
