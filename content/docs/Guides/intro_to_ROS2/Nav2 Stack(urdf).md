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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WX4JWEI%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDAOVMonLChFK5IoL0pWIHWAz9ajaBruiX27%2BIRWGmJlAiA6Tt4gQI8SaqmIl%2FSp91jwIdOu0BlV0mOgktc%2FdQPnSyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMLHpOeRDV7884Kmm%2FKtwDokqGIJ%2FIVzibaXQQr%2BeSU%2B%2BaotBEDWMWjbcccjP0tplg2j15FRDIC0d3TUTQkXU1xjLLAkSH7uwSuNxoWWR6%2FNX4JKKWdGr7JD3xqqy7xRRNb6VRRwDWqrdzrUZ5BXU7Rw1og4IR%2FeZl1Y4y9c%2FQehbO4zIoRkQ0uIXP%2F8Dnfihtv3hNIDAa%2FiDA9l9YznZGyFS3QOhYA%2FtzC4%2FXaQZNrWlxLvZh9KxSNg82EK9tYnhd5HUJu6cJ7zAfBOVqPlmKt5RpLaz1ocgxRKwCPwNIDuiYOgjzw5bgluorLaJjxA3tqUxtMim4RLH9VGxqeuF18P09x3XtuDR7IT5PI742LKBvS0MMHQg7jR5ovd55uYGtoUsNci6cN1NecaU9w%2B7lotOAvpxRfIb2A0rCMyANMNErJPAue8bqaMvzDWJh256cBPf08F0rGDf%2Bld5Xsq7gppfZ7nD7ccanpJ9YH2nprKG0fWiCYz577%2Bzj9MyWEh6uafGBrZltHZLaD6iSSW4nrYUvZqw0q%2BLUG3CmRGtGFhFUWmtm2akjdzn9ZuPyOw49ie7rEfwc5fvFSF7seDyY2Oce4WUF%2FMikhrP%2Bs%2BLMeWwg72oLJ9%2BwNAywQgALTmHZ%2FnHGDbKS8ymK6c0w2bGVvwY6pgHPrNYcDqvYvrb1yQNm8oKwJ0eLLBb8wAGAmSjcScwQ6usUn5rMnpnBY4DAHounD%2B4W2fUEOpxnb%2FDMo774J4DeSDz0Yl3lNx5PS9VtIq7l68UJMGsQHg9buVa8EsXOLVUd9Drwu6YfNFrNEuVbSjE19o00cJ3iWZQSavXFQCvm8Opf3U%2BbiQMFVWHTdB6sAy96uCLuPbZGAsx3OZ17oDsRRFl%2Fhvm0&X-Amz-Signature=fff95836f464fba943d5cd9250b26d950095ad40a14fb602d6413f04e313e3e7&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WX4JWEI%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDAOVMonLChFK5IoL0pWIHWAz9ajaBruiX27%2BIRWGmJlAiA6Tt4gQI8SaqmIl%2FSp91jwIdOu0BlV0mOgktc%2FdQPnSyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMLHpOeRDV7884Kmm%2FKtwDokqGIJ%2FIVzibaXQQr%2BeSU%2B%2BaotBEDWMWjbcccjP0tplg2j15FRDIC0d3TUTQkXU1xjLLAkSH7uwSuNxoWWR6%2FNX4JKKWdGr7JD3xqqy7xRRNb6VRRwDWqrdzrUZ5BXU7Rw1og4IR%2FeZl1Y4y9c%2FQehbO4zIoRkQ0uIXP%2F8Dnfihtv3hNIDAa%2FiDA9l9YznZGyFS3QOhYA%2FtzC4%2FXaQZNrWlxLvZh9KxSNg82EK9tYnhd5HUJu6cJ7zAfBOVqPlmKt5RpLaz1ocgxRKwCPwNIDuiYOgjzw5bgluorLaJjxA3tqUxtMim4RLH9VGxqeuF18P09x3XtuDR7IT5PI742LKBvS0MMHQg7jR5ovd55uYGtoUsNci6cN1NecaU9w%2B7lotOAvpxRfIb2A0rCMyANMNErJPAue8bqaMvzDWJh256cBPf08F0rGDf%2Bld5Xsq7gppfZ7nD7ccanpJ9YH2nprKG0fWiCYz577%2Bzj9MyWEh6uafGBrZltHZLaD6iSSW4nrYUvZqw0q%2BLUG3CmRGtGFhFUWmtm2akjdzn9ZuPyOw49ie7rEfwc5fvFSF7seDyY2Oce4WUF%2FMikhrP%2Bs%2BLMeWwg72oLJ9%2BwNAywQgALTmHZ%2FnHGDbKS8ymK6c0w2bGVvwY6pgHPrNYcDqvYvrb1yQNm8oKwJ0eLLBb8wAGAmSjcScwQ6usUn5rMnpnBY4DAHounD%2B4W2fUEOpxnb%2FDMo774J4DeSDz0Yl3lNx5PS9VtIq7l68UJMGsQHg9buVa8EsXOLVUd9Drwu6YfNFrNEuVbSjE19o00cJ3iWZQSavXFQCvm8Opf3U%2BbiQMFVWHTdB6sAy96uCLuPbZGAsx3OZ17oDsRRFl%2Fhvm0&X-Amz-Signature=76078ed23004157bce2cf0c4fc2ebe84a5771953cfb6fb819200d96d2d770140&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WX4JWEI%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDAOVMonLChFK5IoL0pWIHWAz9ajaBruiX27%2BIRWGmJlAiA6Tt4gQI8SaqmIl%2FSp91jwIdOu0BlV0mOgktc%2FdQPnSyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMLHpOeRDV7884Kmm%2FKtwDokqGIJ%2FIVzibaXQQr%2BeSU%2B%2BaotBEDWMWjbcccjP0tplg2j15FRDIC0d3TUTQkXU1xjLLAkSH7uwSuNxoWWR6%2FNX4JKKWdGr7JD3xqqy7xRRNb6VRRwDWqrdzrUZ5BXU7Rw1og4IR%2FeZl1Y4y9c%2FQehbO4zIoRkQ0uIXP%2F8Dnfihtv3hNIDAa%2FiDA9l9YznZGyFS3QOhYA%2FtzC4%2FXaQZNrWlxLvZh9KxSNg82EK9tYnhd5HUJu6cJ7zAfBOVqPlmKt5RpLaz1ocgxRKwCPwNIDuiYOgjzw5bgluorLaJjxA3tqUxtMim4RLH9VGxqeuF18P09x3XtuDR7IT5PI742LKBvS0MMHQg7jR5ovd55uYGtoUsNci6cN1NecaU9w%2B7lotOAvpxRfIb2A0rCMyANMNErJPAue8bqaMvzDWJh256cBPf08F0rGDf%2Bld5Xsq7gppfZ7nD7ccanpJ9YH2nprKG0fWiCYz577%2Bzj9MyWEh6uafGBrZltHZLaD6iSSW4nrYUvZqw0q%2BLUG3CmRGtGFhFUWmtm2akjdzn9ZuPyOw49ie7rEfwc5fvFSF7seDyY2Oce4WUF%2FMikhrP%2Bs%2BLMeWwg72oLJ9%2BwNAywQgALTmHZ%2FnHGDbKS8ymK6c0w2bGVvwY6pgHPrNYcDqvYvrb1yQNm8oKwJ0eLLBb8wAGAmSjcScwQ6usUn5rMnpnBY4DAHounD%2B4W2fUEOpxnb%2FDMo774J4DeSDz0Yl3lNx5PS9VtIq7l68UJMGsQHg9buVa8EsXOLVUd9Drwu6YfNFrNEuVbSjE19o00cJ3iWZQSavXFQCvm8Opf3U%2BbiQMFVWHTdB6sAy96uCLuPbZGAsx3OZ17oDsRRFl%2Fhvm0&X-Amz-Signature=e6113c3bf77a87aa804ddbb7fd389cc07b238b6ecfcf6e3a01399faa4c96fbad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WX4JWEI%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDAOVMonLChFK5IoL0pWIHWAz9ajaBruiX27%2BIRWGmJlAiA6Tt4gQI8SaqmIl%2FSp91jwIdOu0BlV0mOgktc%2FdQPnSyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMLHpOeRDV7884Kmm%2FKtwDokqGIJ%2FIVzibaXQQr%2BeSU%2B%2BaotBEDWMWjbcccjP0tplg2j15FRDIC0d3TUTQkXU1xjLLAkSH7uwSuNxoWWR6%2FNX4JKKWdGr7JD3xqqy7xRRNb6VRRwDWqrdzrUZ5BXU7Rw1og4IR%2FeZl1Y4y9c%2FQehbO4zIoRkQ0uIXP%2F8Dnfihtv3hNIDAa%2FiDA9l9YznZGyFS3QOhYA%2FtzC4%2FXaQZNrWlxLvZh9KxSNg82EK9tYnhd5HUJu6cJ7zAfBOVqPlmKt5RpLaz1ocgxRKwCPwNIDuiYOgjzw5bgluorLaJjxA3tqUxtMim4RLH9VGxqeuF18P09x3XtuDR7IT5PI742LKBvS0MMHQg7jR5ovd55uYGtoUsNci6cN1NecaU9w%2B7lotOAvpxRfIb2A0rCMyANMNErJPAue8bqaMvzDWJh256cBPf08F0rGDf%2Bld5Xsq7gppfZ7nD7ccanpJ9YH2nprKG0fWiCYz577%2Bzj9MyWEh6uafGBrZltHZLaD6iSSW4nrYUvZqw0q%2BLUG3CmRGtGFhFUWmtm2akjdzn9ZuPyOw49ie7rEfwc5fvFSF7seDyY2Oce4WUF%2FMikhrP%2Bs%2BLMeWwg72oLJ9%2BwNAywQgALTmHZ%2FnHGDbKS8ymK6c0w2bGVvwY6pgHPrNYcDqvYvrb1yQNm8oKwJ0eLLBb8wAGAmSjcScwQ6usUn5rMnpnBY4DAHounD%2B4W2fUEOpxnb%2FDMo774J4DeSDz0Yl3lNx5PS9VtIq7l68UJMGsQHg9buVa8EsXOLVUd9Drwu6YfNFrNEuVbSjE19o00cJ3iWZQSavXFQCvm8Opf3U%2BbiQMFVWHTdB6sAy96uCLuPbZGAsx3OZ17oDsRRFl%2Fhvm0&X-Amz-Signature=11033519824a02309de29a71d9ca5d66b57641d79b91004eb0bab827d5a8f665&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WX4JWEI%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDAOVMonLChFK5IoL0pWIHWAz9ajaBruiX27%2BIRWGmJlAiA6Tt4gQI8SaqmIl%2FSp91jwIdOu0BlV0mOgktc%2FdQPnSyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMLHpOeRDV7884Kmm%2FKtwDokqGIJ%2FIVzibaXQQr%2BeSU%2B%2BaotBEDWMWjbcccjP0tplg2j15FRDIC0d3TUTQkXU1xjLLAkSH7uwSuNxoWWR6%2FNX4JKKWdGr7JD3xqqy7xRRNb6VRRwDWqrdzrUZ5BXU7Rw1og4IR%2FeZl1Y4y9c%2FQehbO4zIoRkQ0uIXP%2F8Dnfihtv3hNIDAa%2FiDA9l9YznZGyFS3QOhYA%2FtzC4%2FXaQZNrWlxLvZh9KxSNg82EK9tYnhd5HUJu6cJ7zAfBOVqPlmKt5RpLaz1ocgxRKwCPwNIDuiYOgjzw5bgluorLaJjxA3tqUxtMim4RLH9VGxqeuF18P09x3XtuDR7IT5PI742LKBvS0MMHQg7jR5ovd55uYGtoUsNci6cN1NecaU9w%2B7lotOAvpxRfIb2A0rCMyANMNErJPAue8bqaMvzDWJh256cBPf08F0rGDf%2Bld5Xsq7gppfZ7nD7ccanpJ9YH2nprKG0fWiCYz577%2Bzj9MyWEh6uafGBrZltHZLaD6iSSW4nrYUvZqw0q%2BLUG3CmRGtGFhFUWmtm2akjdzn9ZuPyOw49ie7rEfwc5fvFSF7seDyY2Oce4WUF%2FMikhrP%2Bs%2BLMeWwg72oLJ9%2BwNAywQgALTmHZ%2FnHGDbKS8ymK6c0w2bGVvwY6pgHPrNYcDqvYvrb1yQNm8oKwJ0eLLBb8wAGAmSjcScwQ6usUn5rMnpnBY4DAHounD%2B4W2fUEOpxnb%2FDMo774J4DeSDz0Yl3lNx5PS9VtIq7l68UJMGsQHg9buVa8EsXOLVUd9Drwu6YfNFrNEuVbSjE19o00cJ3iWZQSavXFQCvm8Opf3U%2BbiQMFVWHTdB6sAy96uCLuPbZGAsx3OZ17oDsRRFl%2Fhvm0&X-Amz-Signature=5ad3da379d5b778cf60838b5faf7ea73609a1f1ef1c070f772df8a524e41cb7d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WX4JWEI%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T140845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDAOVMonLChFK5IoL0pWIHWAz9ajaBruiX27%2BIRWGmJlAiA6Tt4gQI8SaqmIl%2FSp91jwIdOu0BlV0mOgktc%2FdQPnSyr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIMLHpOeRDV7884Kmm%2FKtwDokqGIJ%2FIVzibaXQQr%2BeSU%2B%2BaotBEDWMWjbcccjP0tplg2j15FRDIC0d3TUTQkXU1xjLLAkSH7uwSuNxoWWR6%2FNX4JKKWdGr7JD3xqqy7xRRNb6VRRwDWqrdzrUZ5BXU7Rw1og4IR%2FeZl1Y4y9c%2FQehbO4zIoRkQ0uIXP%2F8Dnfihtv3hNIDAa%2FiDA9l9YznZGyFS3QOhYA%2FtzC4%2FXaQZNrWlxLvZh9KxSNg82EK9tYnhd5HUJu6cJ7zAfBOVqPlmKt5RpLaz1ocgxRKwCPwNIDuiYOgjzw5bgluorLaJjxA3tqUxtMim4RLH9VGxqeuF18P09x3XtuDR7IT5PI742LKBvS0MMHQg7jR5ovd55uYGtoUsNci6cN1NecaU9w%2B7lotOAvpxRfIb2A0rCMyANMNErJPAue8bqaMvzDWJh256cBPf08F0rGDf%2Bld5Xsq7gppfZ7nD7ccanpJ9YH2nprKG0fWiCYz577%2Bzj9MyWEh6uafGBrZltHZLaD6iSSW4nrYUvZqw0q%2BLUG3CmRGtGFhFUWmtm2akjdzn9ZuPyOw49ie7rEfwc5fvFSF7seDyY2Oce4WUF%2FMikhrP%2Bs%2BLMeWwg72oLJ9%2BwNAywQgALTmHZ%2FnHGDbKS8ymK6c0w2bGVvwY6pgHPrNYcDqvYvrb1yQNm8oKwJ0eLLBb8wAGAmSjcScwQ6usUn5rMnpnBY4DAHounD%2B4W2fUEOpxnb%2FDMo774J4DeSDz0Yl3lNx5PS9VtIq7l68UJMGsQHg9buVa8EsXOLVUd9Drwu6YfNFrNEuVbSjE19o00cJ3iWZQSavXFQCvm8Opf3U%2BbiQMFVWHTdB6sAy96uCLuPbZGAsx3OZ17oDsRRFl%2Fhvm0&X-Amz-Signature=6de01719c2ba26c92cc33aef5367b6cb8e554f477fc4cff8726e8bce39f855a1&X-Amz-SignedHeaders=host&x-id=GetObject)
