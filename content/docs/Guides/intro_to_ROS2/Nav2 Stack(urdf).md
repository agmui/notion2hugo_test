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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7K777Z5%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T003450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyGvNW5iHraotc1XVkqR6YjLy%2FbzCO28fQ1X3a0mlsiwIgXcDI%2BL8yLysCQ1NmS9YiPp6JqpQl4mYkMjzRDCXcwGsqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxKFOi5jkxToxQVRyrcA0l2dXv9le4ZYsmauYlxfsY%2BzbtkGc6GyC9bg0CUpxB%2FcWx7o8l6UdQGnxMgOrQPtvvy%2FWIshMTmCe4FsdltDHUTuhRotnYMP4XKy1CHfrBhXZQ8C%2BDT%2FJMo4TQX1aRp1KKVpeAID4P1p9w2YfOaXBOvKpZdhLpEYAs9LCS8Vxf2XvVcIALhPzjzT0oNzIbs044PQoV%2BON%2Bpi5uAdLjM1Pya4cQmNJ2y4zuidCv9w4nTG5C289mrop5Z8im2DfDQuCdlCR32GNAd%2FaiYYN4eYcqikZOB48RaNwx9Ibcubw9FnGDK6Q5tQabEeNjwLnOudUSpzJoaD5MQKWIcUKzZ%2BNOrP%2BVNGnqA7h3bvwPBkUDHn5FHH0LxjudBCrQ89kXSobqeHU760Pd4%2BFMZ4n7xsEYqpSu1ffrlts9w2j%2BwS%2FrafdTy%2BEsUzK87i53M9mfpDZD0GQSdM1eOLngJJOFlD9uKu0zxGAoz06Kfn6p%2BRw91G62Tx5GM4rFnAfo7WBoNARxSG8szbkd4V3Zu2qf3lkivzA25zJe1z%2F%2BFDKLBSDnj7ivgA4K839bv5dQ5axE6eTKef5NnN8IiVVoBm1OT03tZsAUK2SyGIUxQWo8N%2F6%2BFaZSsza2r3v0TYqbqMNLF6rwGOqUBa%2F%2BeKVrYMfOgOXMsJCnH1R8jd2wI5fswKycrZbOBo2999l4gFxN8Mxrg5XOUqJOM%2BgSWdZmzX4tS8MNerLVJQ5S45IpsK2%2Bs8Sh71fS7%2BmJgra5REmbYPZ%2FXvCU3jIvVaNpIBN0Uaj4nAYy76GGRijRu7%2Bkp%2FNxbg0hJUQK%2BCXWILuEmeZjAj9DR0jBDkbv8JQ0kwd9Vh%2FE8WJ5CX2tmM2lpPLy7&X-Amz-Signature=9c2a9db9f3da5ad50e3a58b89268d4567546b6e23b8b8c04467fec648b2d29f8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7K777Z5%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T003450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyGvNW5iHraotc1XVkqR6YjLy%2FbzCO28fQ1X3a0mlsiwIgXcDI%2BL8yLysCQ1NmS9YiPp6JqpQl4mYkMjzRDCXcwGsqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxKFOi5jkxToxQVRyrcA0l2dXv9le4ZYsmauYlxfsY%2BzbtkGc6GyC9bg0CUpxB%2FcWx7o8l6UdQGnxMgOrQPtvvy%2FWIshMTmCe4FsdltDHUTuhRotnYMP4XKy1CHfrBhXZQ8C%2BDT%2FJMo4TQX1aRp1KKVpeAID4P1p9w2YfOaXBOvKpZdhLpEYAs9LCS8Vxf2XvVcIALhPzjzT0oNzIbs044PQoV%2BON%2Bpi5uAdLjM1Pya4cQmNJ2y4zuidCv9w4nTG5C289mrop5Z8im2DfDQuCdlCR32GNAd%2FaiYYN4eYcqikZOB48RaNwx9Ibcubw9FnGDK6Q5tQabEeNjwLnOudUSpzJoaD5MQKWIcUKzZ%2BNOrP%2BVNGnqA7h3bvwPBkUDHn5FHH0LxjudBCrQ89kXSobqeHU760Pd4%2BFMZ4n7xsEYqpSu1ffrlts9w2j%2BwS%2FrafdTy%2BEsUzK87i53M9mfpDZD0GQSdM1eOLngJJOFlD9uKu0zxGAoz06Kfn6p%2BRw91G62Tx5GM4rFnAfo7WBoNARxSG8szbkd4V3Zu2qf3lkivzA25zJe1z%2F%2BFDKLBSDnj7ivgA4K839bv5dQ5axE6eTKef5NnN8IiVVoBm1OT03tZsAUK2SyGIUxQWo8N%2F6%2BFaZSsza2r3v0TYqbqMNLF6rwGOqUBa%2F%2BeKVrYMfOgOXMsJCnH1R8jd2wI5fswKycrZbOBo2999l4gFxN8Mxrg5XOUqJOM%2BgSWdZmzX4tS8MNerLVJQ5S45IpsK2%2Bs8Sh71fS7%2BmJgra5REmbYPZ%2FXvCU3jIvVaNpIBN0Uaj4nAYy76GGRijRu7%2Bkp%2FNxbg0hJUQK%2BCXWILuEmeZjAj9DR0jBDkbv8JQ0kwd9Vh%2FE8WJ5CX2tmM2lpPLy7&X-Amz-Signature=3bdca1a418d6d5e12a1c69108be6d6cabf781862ef0437fa9de25af712a6ca08&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7K777Z5%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T003450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyGvNW5iHraotc1XVkqR6YjLy%2FbzCO28fQ1X3a0mlsiwIgXcDI%2BL8yLysCQ1NmS9YiPp6JqpQl4mYkMjzRDCXcwGsqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxKFOi5jkxToxQVRyrcA0l2dXv9le4ZYsmauYlxfsY%2BzbtkGc6GyC9bg0CUpxB%2FcWx7o8l6UdQGnxMgOrQPtvvy%2FWIshMTmCe4FsdltDHUTuhRotnYMP4XKy1CHfrBhXZQ8C%2BDT%2FJMo4TQX1aRp1KKVpeAID4P1p9w2YfOaXBOvKpZdhLpEYAs9LCS8Vxf2XvVcIALhPzjzT0oNzIbs044PQoV%2BON%2Bpi5uAdLjM1Pya4cQmNJ2y4zuidCv9w4nTG5C289mrop5Z8im2DfDQuCdlCR32GNAd%2FaiYYN4eYcqikZOB48RaNwx9Ibcubw9FnGDK6Q5tQabEeNjwLnOudUSpzJoaD5MQKWIcUKzZ%2BNOrP%2BVNGnqA7h3bvwPBkUDHn5FHH0LxjudBCrQ89kXSobqeHU760Pd4%2BFMZ4n7xsEYqpSu1ffrlts9w2j%2BwS%2FrafdTy%2BEsUzK87i53M9mfpDZD0GQSdM1eOLngJJOFlD9uKu0zxGAoz06Kfn6p%2BRw91G62Tx5GM4rFnAfo7WBoNARxSG8szbkd4V3Zu2qf3lkivzA25zJe1z%2F%2BFDKLBSDnj7ivgA4K839bv5dQ5axE6eTKef5NnN8IiVVoBm1OT03tZsAUK2SyGIUxQWo8N%2F6%2BFaZSsza2r3v0TYqbqMNLF6rwGOqUBa%2F%2BeKVrYMfOgOXMsJCnH1R8jd2wI5fswKycrZbOBo2999l4gFxN8Mxrg5XOUqJOM%2BgSWdZmzX4tS8MNerLVJQ5S45IpsK2%2Bs8Sh71fS7%2BmJgra5REmbYPZ%2FXvCU3jIvVaNpIBN0Uaj4nAYy76GGRijRu7%2Bkp%2FNxbg0hJUQK%2BCXWILuEmeZjAj9DR0jBDkbv8JQ0kwd9Vh%2FE8WJ5CX2tmM2lpPLy7&X-Amz-Signature=54624f5ba85f08ff25a861bc63c8108c951bcf4979a84badc42d1867288ad4e1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7K777Z5%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T003450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyGvNW5iHraotc1XVkqR6YjLy%2FbzCO28fQ1X3a0mlsiwIgXcDI%2BL8yLysCQ1NmS9YiPp6JqpQl4mYkMjzRDCXcwGsqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxKFOi5jkxToxQVRyrcA0l2dXv9le4ZYsmauYlxfsY%2BzbtkGc6GyC9bg0CUpxB%2FcWx7o8l6UdQGnxMgOrQPtvvy%2FWIshMTmCe4FsdltDHUTuhRotnYMP4XKy1CHfrBhXZQ8C%2BDT%2FJMo4TQX1aRp1KKVpeAID4P1p9w2YfOaXBOvKpZdhLpEYAs9LCS8Vxf2XvVcIALhPzjzT0oNzIbs044PQoV%2BON%2Bpi5uAdLjM1Pya4cQmNJ2y4zuidCv9w4nTG5C289mrop5Z8im2DfDQuCdlCR32GNAd%2FaiYYN4eYcqikZOB48RaNwx9Ibcubw9FnGDK6Q5tQabEeNjwLnOudUSpzJoaD5MQKWIcUKzZ%2BNOrP%2BVNGnqA7h3bvwPBkUDHn5FHH0LxjudBCrQ89kXSobqeHU760Pd4%2BFMZ4n7xsEYqpSu1ffrlts9w2j%2BwS%2FrafdTy%2BEsUzK87i53M9mfpDZD0GQSdM1eOLngJJOFlD9uKu0zxGAoz06Kfn6p%2BRw91G62Tx5GM4rFnAfo7WBoNARxSG8szbkd4V3Zu2qf3lkivzA25zJe1z%2F%2BFDKLBSDnj7ivgA4K839bv5dQ5axE6eTKef5NnN8IiVVoBm1OT03tZsAUK2SyGIUxQWo8N%2F6%2BFaZSsza2r3v0TYqbqMNLF6rwGOqUBa%2F%2BeKVrYMfOgOXMsJCnH1R8jd2wI5fswKycrZbOBo2999l4gFxN8Mxrg5XOUqJOM%2BgSWdZmzX4tS8MNerLVJQ5S45IpsK2%2Bs8Sh71fS7%2BmJgra5REmbYPZ%2FXvCU3jIvVaNpIBN0Uaj4nAYy76GGRijRu7%2Bkp%2FNxbg0hJUQK%2BCXWILuEmeZjAj9DR0jBDkbv8JQ0kwd9Vh%2FE8WJ5CX2tmM2lpPLy7&X-Amz-Signature=7e08860a7ad3d758ddbfb3d95c338b44f05fdb809642a856628e39bbce5adbf3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7K777Z5%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T003450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyGvNW5iHraotc1XVkqR6YjLy%2FbzCO28fQ1X3a0mlsiwIgXcDI%2BL8yLysCQ1NmS9YiPp6JqpQl4mYkMjzRDCXcwGsqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxKFOi5jkxToxQVRyrcA0l2dXv9le4ZYsmauYlxfsY%2BzbtkGc6GyC9bg0CUpxB%2FcWx7o8l6UdQGnxMgOrQPtvvy%2FWIshMTmCe4FsdltDHUTuhRotnYMP4XKy1CHfrBhXZQ8C%2BDT%2FJMo4TQX1aRp1KKVpeAID4P1p9w2YfOaXBOvKpZdhLpEYAs9LCS8Vxf2XvVcIALhPzjzT0oNzIbs044PQoV%2BON%2Bpi5uAdLjM1Pya4cQmNJ2y4zuidCv9w4nTG5C289mrop5Z8im2DfDQuCdlCR32GNAd%2FaiYYN4eYcqikZOB48RaNwx9Ibcubw9FnGDK6Q5tQabEeNjwLnOudUSpzJoaD5MQKWIcUKzZ%2BNOrP%2BVNGnqA7h3bvwPBkUDHn5FHH0LxjudBCrQ89kXSobqeHU760Pd4%2BFMZ4n7xsEYqpSu1ffrlts9w2j%2BwS%2FrafdTy%2BEsUzK87i53M9mfpDZD0GQSdM1eOLngJJOFlD9uKu0zxGAoz06Kfn6p%2BRw91G62Tx5GM4rFnAfo7WBoNARxSG8szbkd4V3Zu2qf3lkivzA25zJe1z%2F%2BFDKLBSDnj7ivgA4K839bv5dQ5axE6eTKef5NnN8IiVVoBm1OT03tZsAUK2SyGIUxQWo8N%2F6%2BFaZSsza2r3v0TYqbqMNLF6rwGOqUBa%2F%2BeKVrYMfOgOXMsJCnH1R8jd2wI5fswKycrZbOBo2999l4gFxN8Mxrg5XOUqJOM%2BgSWdZmzX4tS8MNerLVJQ5S45IpsK2%2Bs8Sh71fS7%2BmJgra5REmbYPZ%2FXvCU3jIvVaNpIBN0Uaj4nAYy76GGRijRu7%2Bkp%2FNxbg0hJUQK%2BCXWILuEmeZjAj9DR0jBDkbv8JQ0kwd9Vh%2FE8WJ5CX2tmM2lpPLy7&X-Amz-Signature=436842c23cdb31139c08d46b7d0e934138face087322df927e044ab4331fe822&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7K777Z5%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T003450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyGvNW5iHraotc1XVkqR6YjLy%2FbzCO28fQ1X3a0mlsiwIgXcDI%2BL8yLysCQ1NmS9YiPp6JqpQl4mYkMjzRDCXcwGsqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDxKFOi5jkxToxQVRyrcA0l2dXv9le4ZYsmauYlxfsY%2BzbtkGc6GyC9bg0CUpxB%2FcWx7o8l6UdQGnxMgOrQPtvvy%2FWIshMTmCe4FsdltDHUTuhRotnYMP4XKy1CHfrBhXZQ8C%2BDT%2FJMo4TQX1aRp1KKVpeAID4P1p9w2YfOaXBOvKpZdhLpEYAs9LCS8Vxf2XvVcIALhPzjzT0oNzIbs044PQoV%2BON%2Bpi5uAdLjM1Pya4cQmNJ2y4zuidCv9w4nTG5C289mrop5Z8im2DfDQuCdlCR32GNAd%2FaiYYN4eYcqikZOB48RaNwx9Ibcubw9FnGDK6Q5tQabEeNjwLnOudUSpzJoaD5MQKWIcUKzZ%2BNOrP%2BVNGnqA7h3bvwPBkUDHn5FHH0LxjudBCrQ89kXSobqeHU760Pd4%2BFMZ4n7xsEYqpSu1ffrlts9w2j%2BwS%2FrafdTy%2BEsUzK87i53M9mfpDZD0GQSdM1eOLngJJOFlD9uKu0zxGAoz06Kfn6p%2BRw91G62Tx5GM4rFnAfo7WBoNARxSG8szbkd4V3Zu2qf3lkivzA25zJe1z%2F%2BFDKLBSDnj7ivgA4K839bv5dQ5axE6eTKef5NnN8IiVVoBm1OT03tZsAUK2SyGIUxQWo8N%2F6%2BFaZSsza2r3v0TYqbqMNLF6rwGOqUBa%2F%2BeKVrYMfOgOXMsJCnH1R8jd2wI5fswKycrZbOBo2999l4gFxN8Mxrg5XOUqJOM%2BgSWdZmzX4tS8MNerLVJQ5S45IpsK2%2Bs8Sh71fS7%2BmJgra5REmbYPZ%2FXvCU3jIvVaNpIBN0Uaj4nAYy76GGRijRu7%2Bkp%2FNxbg0hJUQK%2BCXWILuEmeZjAj9DR0jBDkbv8JQ0kwd9Vh%2FE8WJ5CX2tmM2lpPLy7&X-Amz-Signature=0a0c9793d04620690442eb2894a6a1fffc33e440a91b2243a7dcd3c1568cf4b9&X-Amz-SignedHeaders=host&x-id=GetObject)
