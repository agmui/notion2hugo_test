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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657KBMDPH%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T110236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDx0wL02bA0yl3P2fHd%2F8tebtawORxuz7hIkSqyd9xvfQIhAIGEE1TUUtKxhlxXYhvhUuWBno4J9G0Z0Nota9QweawnKv8DCEAQABoMNjM3NDIzMTgzODA1Igw6yTKDX0BevALA0vkq3APHULpWfASxSJZzsI%2Bb3Ig3jIa7SYFc5vTjWpqaL5kFBLgHcIO7sWn%2BKKkiItR7%2F0dwzDotduFQ%2BduOSwIr34e8A6%2BD5%2Bx%2BvzysrIiq8S%2F7MVJOStmLtrLYdpKWbIToRYwB6JmVeaP77nOnaqpkkmPWTrJSzawNp2GcLohoKr8Hy1oq%2BikU0dJNkIPC%2BZFPiW681LJqir37NfYId4aVViawFR5GyGORysEefJB1Mby9wPa%2F5lHgd2zdU5MAidbZIBPZwqTPChADTnqq05%2BaRyK3WtW1N6%2FbYjV%2BgDIXYCxRuoadbf6L8qhZffzBZwYbVQt13J%2BrKpKMmG3qmjAHYj76UOjtgpKbs82A%2F0Mp2a2te5wIQBxZdYN3Css0xeakWu69BU1HdHZgwo61d5CZFxZA42eTXnoGaBoJm9X5wJtjVLpEoKH%2FVnf1maev%2F4DSkFXGPJAY0%2Biy6F%2BX%2BpWvwtiSAITbZxTKltSrb2O1t8XT4NMExmqcksb%2FIs26Kpazm3zkspvHQS%2BgCEhIRSGh7GbZz4RpG6UXjreNN1oB1tf9vqRfzrT4mSQ8I7z2Wiv6sD%2Bxh10PR9BrdpFz%2BqXGBt7o5KAMuVm%2F%2BuMs6qbPJs6Rm408xz8JxupSwZUHLjCJhLLABjqkAZAUieOyH%2B9U%2BnOE3Y3rt2BdT1sA0ynaQXRs%2FOfAbbAqMqb5EpWzTbDYQ6UXemR0XJioj8MJ1qfbjF7Yef8Dh4e2KNSROUBL2nsBsNjT1QRjcr%2F9n%2FGj5TQEM1pu9Nc9%2BPs69XRgJQOb4geaX5aCe%2FQiM78bOzQwAQF4wqELQ3JkOcbUJ8TUuc1QSEiu4Bm3ZEx564S6LVvtQqhuQfLGTscH4%2FGt&X-Amz-Signature=512c2c0e77f268589fa9957a4f7e57368f26b3087b3a5e009268fd8360d6051c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657KBMDPH%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T110236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDx0wL02bA0yl3P2fHd%2F8tebtawORxuz7hIkSqyd9xvfQIhAIGEE1TUUtKxhlxXYhvhUuWBno4J9G0Z0Nota9QweawnKv8DCEAQABoMNjM3NDIzMTgzODA1Igw6yTKDX0BevALA0vkq3APHULpWfASxSJZzsI%2Bb3Ig3jIa7SYFc5vTjWpqaL5kFBLgHcIO7sWn%2BKKkiItR7%2F0dwzDotduFQ%2BduOSwIr34e8A6%2BD5%2Bx%2BvzysrIiq8S%2F7MVJOStmLtrLYdpKWbIToRYwB6JmVeaP77nOnaqpkkmPWTrJSzawNp2GcLohoKr8Hy1oq%2BikU0dJNkIPC%2BZFPiW681LJqir37NfYId4aVViawFR5GyGORysEefJB1Mby9wPa%2F5lHgd2zdU5MAidbZIBPZwqTPChADTnqq05%2BaRyK3WtW1N6%2FbYjV%2BgDIXYCxRuoadbf6L8qhZffzBZwYbVQt13J%2BrKpKMmG3qmjAHYj76UOjtgpKbs82A%2F0Mp2a2te5wIQBxZdYN3Css0xeakWu69BU1HdHZgwo61d5CZFxZA42eTXnoGaBoJm9X5wJtjVLpEoKH%2FVnf1maev%2F4DSkFXGPJAY0%2Biy6F%2BX%2BpWvwtiSAITbZxTKltSrb2O1t8XT4NMExmqcksb%2FIs26Kpazm3zkspvHQS%2BgCEhIRSGh7GbZz4RpG6UXjreNN1oB1tf9vqRfzrT4mSQ8I7z2Wiv6sD%2Bxh10PR9BrdpFz%2BqXGBt7o5KAMuVm%2F%2BuMs6qbPJs6Rm408xz8JxupSwZUHLjCJhLLABjqkAZAUieOyH%2B9U%2BnOE3Y3rt2BdT1sA0ynaQXRs%2FOfAbbAqMqb5EpWzTbDYQ6UXemR0XJioj8MJ1qfbjF7Yef8Dh4e2KNSROUBL2nsBsNjT1QRjcr%2F9n%2FGj5TQEM1pu9Nc9%2BPs69XRgJQOb4geaX5aCe%2FQiM78bOzQwAQF4wqELQ3JkOcbUJ8TUuc1QSEiu4Bm3ZEx564S6LVvtQqhuQfLGTscH4%2FGt&X-Amz-Signature=201dacf007315b9f7a47c48fab773e3acfb771a2a22c79635e500cdb6ecbab78&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657KBMDPH%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T110236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDx0wL02bA0yl3P2fHd%2F8tebtawORxuz7hIkSqyd9xvfQIhAIGEE1TUUtKxhlxXYhvhUuWBno4J9G0Z0Nota9QweawnKv8DCEAQABoMNjM3NDIzMTgzODA1Igw6yTKDX0BevALA0vkq3APHULpWfASxSJZzsI%2Bb3Ig3jIa7SYFc5vTjWpqaL5kFBLgHcIO7sWn%2BKKkiItR7%2F0dwzDotduFQ%2BduOSwIr34e8A6%2BD5%2Bx%2BvzysrIiq8S%2F7MVJOStmLtrLYdpKWbIToRYwB6JmVeaP77nOnaqpkkmPWTrJSzawNp2GcLohoKr8Hy1oq%2BikU0dJNkIPC%2BZFPiW681LJqir37NfYId4aVViawFR5GyGORysEefJB1Mby9wPa%2F5lHgd2zdU5MAidbZIBPZwqTPChADTnqq05%2BaRyK3WtW1N6%2FbYjV%2BgDIXYCxRuoadbf6L8qhZffzBZwYbVQt13J%2BrKpKMmG3qmjAHYj76UOjtgpKbs82A%2F0Mp2a2te5wIQBxZdYN3Css0xeakWu69BU1HdHZgwo61d5CZFxZA42eTXnoGaBoJm9X5wJtjVLpEoKH%2FVnf1maev%2F4DSkFXGPJAY0%2Biy6F%2BX%2BpWvwtiSAITbZxTKltSrb2O1t8XT4NMExmqcksb%2FIs26Kpazm3zkspvHQS%2BgCEhIRSGh7GbZz4RpG6UXjreNN1oB1tf9vqRfzrT4mSQ8I7z2Wiv6sD%2Bxh10PR9BrdpFz%2BqXGBt7o5KAMuVm%2F%2BuMs6qbPJs6Rm408xz8JxupSwZUHLjCJhLLABjqkAZAUieOyH%2B9U%2BnOE3Y3rt2BdT1sA0ynaQXRs%2FOfAbbAqMqb5EpWzTbDYQ6UXemR0XJioj8MJ1qfbjF7Yef8Dh4e2KNSROUBL2nsBsNjT1QRjcr%2F9n%2FGj5TQEM1pu9Nc9%2BPs69XRgJQOb4geaX5aCe%2FQiM78bOzQwAQF4wqELQ3JkOcbUJ8TUuc1QSEiu4Bm3ZEx564S6LVvtQqhuQfLGTscH4%2FGt&X-Amz-Signature=95c0130e5fb9edcec6520a40850afae8b9f7c8dbbc204df69eab2edc92664ce2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657KBMDPH%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T110236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDx0wL02bA0yl3P2fHd%2F8tebtawORxuz7hIkSqyd9xvfQIhAIGEE1TUUtKxhlxXYhvhUuWBno4J9G0Z0Nota9QweawnKv8DCEAQABoMNjM3NDIzMTgzODA1Igw6yTKDX0BevALA0vkq3APHULpWfASxSJZzsI%2Bb3Ig3jIa7SYFc5vTjWpqaL5kFBLgHcIO7sWn%2BKKkiItR7%2F0dwzDotduFQ%2BduOSwIr34e8A6%2BD5%2Bx%2BvzysrIiq8S%2F7MVJOStmLtrLYdpKWbIToRYwB6JmVeaP77nOnaqpkkmPWTrJSzawNp2GcLohoKr8Hy1oq%2BikU0dJNkIPC%2BZFPiW681LJqir37NfYId4aVViawFR5GyGORysEefJB1Mby9wPa%2F5lHgd2zdU5MAidbZIBPZwqTPChADTnqq05%2BaRyK3WtW1N6%2FbYjV%2BgDIXYCxRuoadbf6L8qhZffzBZwYbVQt13J%2BrKpKMmG3qmjAHYj76UOjtgpKbs82A%2F0Mp2a2te5wIQBxZdYN3Css0xeakWu69BU1HdHZgwo61d5CZFxZA42eTXnoGaBoJm9X5wJtjVLpEoKH%2FVnf1maev%2F4DSkFXGPJAY0%2Biy6F%2BX%2BpWvwtiSAITbZxTKltSrb2O1t8XT4NMExmqcksb%2FIs26Kpazm3zkspvHQS%2BgCEhIRSGh7GbZz4RpG6UXjreNN1oB1tf9vqRfzrT4mSQ8I7z2Wiv6sD%2Bxh10PR9BrdpFz%2BqXGBt7o5KAMuVm%2F%2BuMs6qbPJs6Rm408xz8JxupSwZUHLjCJhLLABjqkAZAUieOyH%2B9U%2BnOE3Y3rt2BdT1sA0ynaQXRs%2FOfAbbAqMqb5EpWzTbDYQ6UXemR0XJioj8MJ1qfbjF7Yef8Dh4e2KNSROUBL2nsBsNjT1QRjcr%2F9n%2FGj5TQEM1pu9Nc9%2BPs69XRgJQOb4geaX5aCe%2FQiM78bOzQwAQF4wqELQ3JkOcbUJ8TUuc1QSEiu4Bm3ZEx564S6LVvtQqhuQfLGTscH4%2FGt&X-Amz-Signature=d33bb13504e16f79f3da9c97d7614b940f5d5de2697cee000c3848899638fbd1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657KBMDPH%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T110236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDx0wL02bA0yl3P2fHd%2F8tebtawORxuz7hIkSqyd9xvfQIhAIGEE1TUUtKxhlxXYhvhUuWBno4J9G0Z0Nota9QweawnKv8DCEAQABoMNjM3NDIzMTgzODA1Igw6yTKDX0BevALA0vkq3APHULpWfASxSJZzsI%2Bb3Ig3jIa7SYFc5vTjWpqaL5kFBLgHcIO7sWn%2BKKkiItR7%2F0dwzDotduFQ%2BduOSwIr34e8A6%2BD5%2Bx%2BvzysrIiq8S%2F7MVJOStmLtrLYdpKWbIToRYwB6JmVeaP77nOnaqpkkmPWTrJSzawNp2GcLohoKr8Hy1oq%2BikU0dJNkIPC%2BZFPiW681LJqir37NfYId4aVViawFR5GyGORysEefJB1Mby9wPa%2F5lHgd2zdU5MAidbZIBPZwqTPChADTnqq05%2BaRyK3WtW1N6%2FbYjV%2BgDIXYCxRuoadbf6L8qhZffzBZwYbVQt13J%2BrKpKMmG3qmjAHYj76UOjtgpKbs82A%2F0Mp2a2te5wIQBxZdYN3Css0xeakWu69BU1HdHZgwo61d5CZFxZA42eTXnoGaBoJm9X5wJtjVLpEoKH%2FVnf1maev%2F4DSkFXGPJAY0%2Biy6F%2BX%2BpWvwtiSAITbZxTKltSrb2O1t8XT4NMExmqcksb%2FIs26Kpazm3zkspvHQS%2BgCEhIRSGh7GbZz4RpG6UXjreNN1oB1tf9vqRfzrT4mSQ8I7z2Wiv6sD%2Bxh10PR9BrdpFz%2BqXGBt7o5KAMuVm%2F%2BuMs6qbPJs6Rm408xz8JxupSwZUHLjCJhLLABjqkAZAUieOyH%2B9U%2BnOE3Y3rt2BdT1sA0ynaQXRs%2FOfAbbAqMqb5EpWzTbDYQ6UXemR0XJioj8MJ1qfbjF7Yef8Dh4e2KNSROUBL2nsBsNjT1QRjcr%2F9n%2FGj5TQEM1pu9Nc9%2BPs69XRgJQOb4geaX5aCe%2FQiM78bOzQwAQF4wqELQ3JkOcbUJ8TUuc1QSEiu4Bm3ZEx564S6LVvtQqhuQfLGTscH4%2FGt&X-Amz-Signature=d7740f07760c4c653d8d03b04940d39f6ea62b6a5f897039cbce1a4e195c83f1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657KBMDPH%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T110236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDx0wL02bA0yl3P2fHd%2F8tebtawORxuz7hIkSqyd9xvfQIhAIGEE1TUUtKxhlxXYhvhUuWBno4J9G0Z0Nota9QweawnKv8DCEAQABoMNjM3NDIzMTgzODA1Igw6yTKDX0BevALA0vkq3APHULpWfASxSJZzsI%2Bb3Ig3jIa7SYFc5vTjWpqaL5kFBLgHcIO7sWn%2BKKkiItR7%2F0dwzDotduFQ%2BduOSwIr34e8A6%2BD5%2Bx%2BvzysrIiq8S%2F7MVJOStmLtrLYdpKWbIToRYwB6JmVeaP77nOnaqpkkmPWTrJSzawNp2GcLohoKr8Hy1oq%2BikU0dJNkIPC%2BZFPiW681LJqir37NfYId4aVViawFR5GyGORysEefJB1Mby9wPa%2F5lHgd2zdU5MAidbZIBPZwqTPChADTnqq05%2BaRyK3WtW1N6%2FbYjV%2BgDIXYCxRuoadbf6L8qhZffzBZwYbVQt13J%2BrKpKMmG3qmjAHYj76UOjtgpKbs82A%2F0Mp2a2te5wIQBxZdYN3Css0xeakWu69BU1HdHZgwo61d5CZFxZA42eTXnoGaBoJm9X5wJtjVLpEoKH%2FVnf1maev%2F4DSkFXGPJAY0%2Biy6F%2BX%2BpWvwtiSAITbZxTKltSrb2O1t8XT4NMExmqcksb%2FIs26Kpazm3zkspvHQS%2BgCEhIRSGh7GbZz4RpG6UXjreNN1oB1tf9vqRfzrT4mSQ8I7z2Wiv6sD%2Bxh10PR9BrdpFz%2BqXGBt7o5KAMuVm%2F%2BuMs6qbPJs6Rm408xz8JxupSwZUHLjCJhLLABjqkAZAUieOyH%2B9U%2BnOE3Y3rt2BdT1sA0ynaQXRs%2FOfAbbAqMqb5EpWzTbDYQ6UXemR0XJioj8MJ1qfbjF7Yef8Dh4e2KNSROUBL2nsBsNjT1QRjcr%2F9n%2FGj5TQEM1pu9Nc9%2BPs69XRgJQOb4geaX5aCe%2FQiM78bOzQwAQF4wqELQ3JkOcbUJ8TUuc1QSEiu4Bm3ZEx564S6LVvtQqhuQfLGTscH4%2FGt&X-Amz-Signature=5ac24168af1459544680d4d9dca1d4f7c73c2b180cd3d72ecd57bbe4d60971d0&X-Amz-SignedHeaders=host&x-id=GetObject)
