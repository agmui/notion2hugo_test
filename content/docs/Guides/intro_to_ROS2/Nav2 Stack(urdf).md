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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBW74BO7%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T170211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQcaEfHuyIzQCGKwwPWiva1M6DaBfK6JIs7D2%2F%2BhNW0AIhANTZs5CfV5JREegfIk2ZRpMwilMVE6bZ5IGrBEo1v5V2Kv8DCDEQABoMNjM3NDIzMTgzODA1Igzw4oXGDe6HVEAEt0Aq3AO5bhoFHI7FjJIg71Yy154GHojxDY8wZR%2BtR57N9gFkuaJxr89%2FlI66i4fAyHFURxFJ8scgkD4w7NZF9jPf1mTttGyUM9pAkp9O5vFhNKEbp95TckykTnxQFaWu1BUnlpJpqh6pSy6IETzbXQycKB9yHBGR%2FbT7zW775ssOe8mA5U%2F19fpOszITN3NNHF%2BoyQKRNtjyeLdJeiOeLb569xB05ALDbZAMJTekOmb9RPXACsgpyljePqcWMutDONFA8HnC0%2FssD1v%2FJHcxILi8MVZl024JjoBffOlKu45N4NV1XHDkHyHP176ZeGxw9fBg5ZK9KsfwePJoslvRaGpv4wqQJGvGFomyyAPWVaxdfbOevJuWf0LKiUIQBdUriPU0J0wRYDIikN3HCIi8lX8DwKmZDEZRcHLPBKbG7VB2REN6Fij%2B2JTeEZhIC0XUTXOaHIl5oG6jngtxb1FaALUli4ndtI6Yw9riSA%2Fr3y672GM4om8fXwHkPjRJG6pDhisxhDzPb0%2FahvpI%2BoFxPYmqazFEuIEXB0mkVX6VXpdmUhzRXvCEsCimNLqjXrGzcy%2BIi3ztnNr2XHJkL0kHLeQdNB6mhY8zPtCm8SOSPwxfnQQ9nCVtTTraEU62GQr7kDCu3tu%2BBjqkAdy4%2FOYcdrsL4NxouStvie9nzu3Lmy5P7AX2sD1%2Frw5VLvlLcoTRpJJHWVi9EMWgWYNXAUVdQbqQZA4oz73JSEgwKv0IQhHRVBFgjq2pxvowKQEZRkk8f7wLlpeNsadwC0YG%2FC2nifFYB3uIKyMdLf55bBZH1AZF0IknusL9uU3KwMoAMQ4tV037nl%2FfGDKO1nW%2FdAXVT2tqIYwvkysawNpxAIm9&X-Amz-Signature=4b7531d9b4f4d9e4b17f2ff736b46c047f3650c95394404e731b9ca633cfd558&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBW74BO7%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T170211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQcaEfHuyIzQCGKwwPWiva1M6DaBfK6JIs7D2%2F%2BhNW0AIhANTZs5CfV5JREegfIk2ZRpMwilMVE6bZ5IGrBEo1v5V2Kv8DCDEQABoMNjM3NDIzMTgzODA1Igzw4oXGDe6HVEAEt0Aq3AO5bhoFHI7FjJIg71Yy154GHojxDY8wZR%2BtR57N9gFkuaJxr89%2FlI66i4fAyHFURxFJ8scgkD4w7NZF9jPf1mTttGyUM9pAkp9O5vFhNKEbp95TckykTnxQFaWu1BUnlpJpqh6pSy6IETzbXQycKB9yHBGR%2FbT7zW775ssOe8mA5U%2F19fpOszITN3NNHF%2BoyQKRNtjyeLdJeiOeLb569xB05ALDbZAMJTekOmb9RPXACsgpyljePqcWMutDONFA8HnC0%2FssD1v%2FJHcxILi8MVZl024JjoBffOlKu45N4NV1XHDkHyHP176ZeGxw9fBg5ZK9KsfwePJoslvRaGpv4wqQJGvGFomyyAPWVaxdfbOevJuWf0LKiUIQBdUriPU0J0wRYDIikN3HCIi8lX8DwKmZDEZRcHLPBKbG7VB2REN6Fij%2B2JTeEZhIC0XUTXOaHIl5oG6jngtxb1FaALUli4ndtI6Yw9riSA%2Fr3y672GM4om8fXwHkPjRJG6pDhisxhDzPb0%2FahvpI%2BoFxPYmqazFEuIEXB0mkVX6VXpdmUhzRXvCEsCimNLqjXrGzcy%2BIi3ztnNr2XHJkL0kHLeQdNB6mhY8zPtCm8SOSPwxfnQQ9nCVtTTraEU62GQr7kDCu3tu%2BBjqkAdy4%2FOYcdrsL4NxouStvie9nzu3Lmy5P7AX2sD1%2Frw5VLvlLcoTRpJJHWVi9EMWgWYNXAUVdQbqQZA4oz73JSEgwKv0IQhHRVBFgjq2pxvowKQEZRkk8f7wLlpeNsadwC0YG%2FC2nifFYB3uIKyMdLf55bBZH1AZF0IknusL9uU3KwMoAMQ4tV037nl%2FfGDKO1nW%2FdAXVT2tqIYwvkysawNpxAIm9&X-Amz-Signature=dff8413ba0bf58d4201e0adb39b9552632fd40399ae2fa24a0d5dc6a13dae483&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBW74BO7%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T170211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQcaEfHuyIzQCGKwwPWiva1M6DaBfK6JIs7D2%2F%2BhNW0AIhANTZs5CfV5JREegfIk2ZRpMwilMVE6bZ5IGrBEo1v5V2Kv8DCDEQABoMNjM3NDIzMTgzODA1Igzw4oXGDe6HVEAEt0Aq3AO5bhoFHI7FjJIg71Yy154GHojxDY8wZR%2BtR57N9gFkuaJxr89%2FlI66i4fAyHFURxFJ8scgkD4w7NZF9jPf1mTttGyUM9pAkp9O5vFhNKEbp95TckykTnxQFaWu1BUnlpJpqh6pSy6IETzbXQycKB9yHBGR%2FbT7zW775ssOe8mA5U%2F19fpOszITN3NNHF%2BoyQKRNtjyeLdJeiOeLb569xB05ALDbZAMJTekOmb9RPXACsgpyljePqcWMutDONFA8HnC0%2FssD1v%2FJHcxILi8MVZl024JjoBffOlKu45N4NV1XHDkHyHP176ZeGxw9fBg5ZK9KsfwePJoslvRaGpv4wqQJGvGFomyyAPWVaxdfbOevJuWf0LKiUIQBdUriPU0J0wRYDIikN3HCIi8lX8DwKmZDEZRcHLPBKbG7VB2REN6Fij%2B2JTeEZhIC0XUTXOaHIl5oG6jngtxb1FaALUli4ndtI6Yw9riSA%2Fr3y672GM4om8fXwHkPjRJG6pDhisxhDzPb0%2FahvpI%2BoFxPYmqazFEuIEXB0mkVX6VXpdmUhzRXvCEsCimNLqjXrGzcy%2BIi3ztnNr2XHJkL0kHLeQdNB6mhY8zPtCm8SOSPwxfnQQ9nCVtTTraEU62GQr7kDCu3tu%2BBjqkAdy4%2FOYcdrsL4NxouStvie9nzu3Lmy5P7AX2sD1%2Frw5VLvlLcoTRpJJHWVi9EMWgWYNXAUVdQbqQZA4oz73JSEgwKv0IQhHRVBFgjq2pxvowKQEZRkk8f7wLlpeNsadwC0YG%2FC2nifFYB3uIKyMdLf55bBZH1AZF0IknusL9uU3KwMoAMQ4tV037nl%2FfGDKO1nW%2FdAXVT2tqIYwvkysawNpxAIm9&X-Amz-Signature=f6566d40b2e722ec2af0c27617b7bfb12107eb3ca977e7488afe661abfcd1f58&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBW74BO7%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T170211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQcaEfHuyIzQCGKwwPWiva1M6DaBfK6JIs7D2%2F%2BhNW0AIhANTZs5CfV5JREegfIk2ZRpMwilMVE6bZ5IGrBEo1v5V2Kv8DCDEQABoMNjM3NDIzMTgzODA1Igzw4oXGDe6HVEAEt0Aq3AO5bhoFHI7FjJIg71Yy154GHojxDY8wZR%2BtR57N9gFkuaJxr89%2FlI66i4fAyHFURxFJ8scgkD4w7NZF9jPf1mTttGyUM9pAkp9O5vFhNKEbp95TckykTnxQFaWu1BUnlpJpqh6pSy6IETzbXQycKB9yHBGR%2FbT7zW775ssOe8mA5U%2F19fpOszITN3NNHF%2BoyQKRNtjyeLdJeiOeLb569xB05ALDbZAMJTekOmb9RPXACsgpyljePqcWMutDONFA8HnC0%2FssD1v%2FJHcxILi8MVZl024JjoBffOlKu45N4NV1XHDkHyHP176ZeGxw9fBg5ZK9KsfwePJoslvRaGpv4wqQJGvGFomyyAPWVaxdfbOevJuWf0LKiUIQBdUriPU0J0wRYDIikN3HCIi8lX8DwKmZDEZRcHLPBKbG7VB2REN6Fij%2B2JTeEZhIC0XUTXOaHIl5oG6jngtxb1FaALUli4ndtI6Yw9riSA%2Fr3y672GM4om8fXwHkPjRJG6pDhisxhDzPb0%2FahvpI%2BoFxPYmqazFEuIEXB0mkVX6VXpdmUhzRXvCEsCimNLqjXrGzcy%2BIi3ztnNr2XHJkL0kHLeQdNB6mhY8zPtCm8SOSPwxfnQQ9nCVtTTraEU62GQr7kDCu3tu%2BBjqkAdy4%2FOYcdrsL4NxouStvie9nzu3Lmy5P7AX2sD1%2Frw5VLvlLcoTRpJJHWVi9EMWgWYNXAUVdQbqQZA4oz73JSEgwKv0IQhHRVBFgjq2pxvowKQEZRkk8f7wLlpeNsadwC0YG%2FC2nifFYB3uIKyMdLf55bBZH1AZF0IknusL9uU3KwMoAMQ4tV037nl%2FfGDKO1nW%2FdAXVT2tqIYwvkysawNpxAIm9&X-Amz-Signature=ce8a1e2f51e21573256e792305ba2bbd0c2fa753bda24b45bd9ba11bb4fd8015&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBW74BO7%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T170211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQcaEfHuyIzQCGKwwPWiva1M6DaBfK6JIs7D2%2F%2BhNW0AIhANTZs5CfV5JREegfIk2ZRpMwilMVE6bZ5IGrBEo1v5V2Kv8DCDEQABoMNjM3NDIzMTgzODA1Igzw4oXGDe6HVEAEt0Aq3AO5bhoFHI7FjJIg71Yy154GHojxDY8wZR%2BtR57N9gFkuaJxr89%2FlI66i4fAyHFURxFJ8scgkD4w7NZF9jPf1mTttGyUM9pAkp9O5vFhNKEbp95TckykTnxQFaWu1BUnlpJpqh6pSy6IETzbXQycKB9yHBGR%2FbT7zW775ssOe8mA5U%2F19fpOszITN3NNHF%2BoyQKRNtjyeLdJeiOeLb569xB05ALDbZAMJTekOmb9RPXACsgpyljePqcWMutDONFA8HnC0%2FssD1v%2FJHcxILi8MVZl024JjoBffOlKu45N4NV1XHDkHyHP176ZeGxw9fBg5ZK9KsfwePJoslvRaGpv4wqQJGvGFomyyAPWVaxdfbOevJuWf0LKiUIQBdUriPU0J0wRYDIikN3HCIi8lX8DwKmZDEZRcHLPBKbG7VB2REN6Fij%2B2JTeEZhIC0XUTXOaHIl5oG6jngtxb1FaALUli4ndtI6Yw9riSA%2Fr3y672GM4om8fXwHkPjRJG6pDhisxhDzPb0%2FahvpI%2BoFxPYmqazFEuIEXB0mkVX6VXpdmUhzRXvCEsCimNLqjXrGzcy%2BIi3ztnNr2XHJkL0kHLeQdNB6mhY8zPtCm8SOSPwxfnQQ9nCVtTTraEU62GQr7kDCu3tu%2BBjqkAdy4%2FOYcdrsL4NxouStvie9nzu3Lmy5P7AX2sD1%2Frw5VLvlLcoTRpJJHWVi9EMWgWYNXAUVdQbqQZA4oz73JSEgwKv0IQhHRVBFgjq2pxvowKQEZRkk8f7wLlpeNsadwC0YG%2FC2nifFYB3uIKyMdLf55bBZH1AZF0IknusL9uU3KwMoAMQ4tV037nl%2FfGDKO1nW%2FdAXVT2tqIYwvkysawNpxAIm9&X-Amz-Signature=660c34b1d6334f9fca7e5724c1852b70fe5bf44b64ba1858d558fc09363b3f58&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBW74BO7%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T170211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQcaEfHuyIzQCGKwwPWiva1M6DaBfK6JIs7D2%2F%2BhNW0AIhANTZs5CfV5JREegfIk2ZRpMwilMVE6bZ5IGrBEo1v5V2Kv8DCDEQABoMNjM3NDIzMTgzODA1Igzw4oXGDe6HVEAEt0Aq3AO5bhoFHI7FjJIg71Yy154GHojxDY8wZR%2BtR57N9gFkuaJxr89%2FlI66i4fAyHFURxFJ8scgkD4w7NZF9jPf1mTttGyUM9pAkp9O5vFhNKEbp95TckykTnxQFaWu1BUnlpJpqh6pSy6IETzbXQycKB9yHBGR%2FbT7zW775ssOe8mA5U%2F19fpOszITN3NNHF%2BoyQKRNtjyeLdJeiOeLb569xB05ALDbZAMJTekOmb9RPXACsgpyljePqcWMutDONFA8HnC0%2FssD1v%2FJHcxILi8MVZl024JjoBffOlKu45N4NV1XHDkHyHP176ZeGxw9fBg5ZK9KsfwePJoslvRaGpv4wqQJGvGFomyyAPWVaxdfbOevJuWf0LKiUIQBdUriPU0J0wRYDIikN3HCIi8lX8DwKmZDEZRcHLPBKbG7VB2REN6Fij%2B2JTeEZhIC0XUTXOaHIl5oG6jngtxb1FaALUli4ndtI6Yw9riSA%2Fr3y672GM4om8fXwHkPjRJG6pDhisxhDzPb0%2FahvpI%2BoFxPYmqazFEuIEXB0mkVX6VXpdmUhzRXvCEsCimNLqjXrGzcy%2BIi3ztnNr2XHJkL0kHLeQdNB6mhY8zPtCm8SOSPwxfnQQ9nCVtTTraEU62GQr7kDCu3tu%2BBjqkAdy4%2FOYcdrsL4NxouStvie9nzu3Lmy5P7AX2sD1%2Frw5VLvlLcoTRpJJHWVi9EMWgWYNXAUVdQbqQZA4oz73JSEgwKv0IQhHRVBFgjq2pxvowKQEZRkk8f7wLlpeNsadwC0YG%2FC2nifFYB3uIKyMdLf55bBZH1AZF0IknusL9uU3KwMoAMQ4tV037nl%2FfGDKO1nW%2FdAXVT2tqIYwvkysawNpxAIm9&X-Amz-Signature=ff8a06c0e96e2ea5f0b1426da3535f22dd487f04c90784899db4f51d45324256&X-Amz-SignedHeaders=host&x-id=GetObject)
