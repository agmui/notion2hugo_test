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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KYIC65V%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T121633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIDc5h600mZFr0D6vdK8C0Fq6B2FYf%2ByZOywi2URzJlcuAiEArhWOj5xmBVRvi6s5bex5zAtq%2FqDTXupAvguFHjxIk7kq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDPTohqx%2BMNSzTekg1CrcA8OrdO9R%2Bhtwb8msVfWBdgnBT9IeRctj4enUaydBILWck3Z4eLlAYQVuPTF23Nz5hvlOhh2q6u1d5J7SAtEpe4l%2BdF9fhqD%2BULd4gWzmA%2BEt8ZikQ7Y5XfeJ0xCAYshRl24N1RhZYbFqMkNBkE%2FNospkkA93gENQW1ziPYJo8VLvm4CD%2Bc7h%2FHtTR%2BjmqsZs2XMvd8Zp7eDIftbV%2BugCKsLjf25noC0jJWzMeF1xqHfQH6JSklR0hiVNBpPrpL1LLwvRMP29X6WqJANBa%2FAwMq18gjr0yKIVW7zlQL55t5bKNlrAlpKnm2DBAlLSLAHtN1MZb1VCw%2B6wtYaVke84ME1rOMtoiJB9lPpqqWI3y3Ke%2FU6m8ysS1s%2B21ODy8lO%2FhQmQbdIzn%2BcqpNlNHJat08%2Bzcxx41B9eWIJ5qzA9tYmjZJfdWd90J2Oas6rBvxLjtQq%2F75QFRlUPBXpTLdZBc3cjbe14anC6qkc0ZZ7141fyLFRXgnc3nWiB5nmjGJv7MrlMpRHh6YJl7d9QjvK7zmGybWfHKCJfbAuDG0pyLgjlQdJEm177D8fe2v4UxowPd8y2EEVpZ3rjT12ObmSAhFMaDdo1lkrbYaweCxrS327areWVDq4cqH2gYHNGMJnz9MIGOqUB9vVT%2BKnUKTX5iP6Z2TV3EQnXFkprtTbNybKwX8GzbbcroV96PPqUcfLQTFMNQqyIZyShF0d6QVRPlxC2QFg8FvKSeAnHkiYzHgbOxih%2FLW5pL%2B0dRjYzYFJi0qahDSgM83UeduL5UecA99769oaxMVe0MQkPBRMoV9yie2OWiZRnsr%2B1e8Pw06eMEXJS2RZKNtEFlgiCMDz7si0NhWrMAEdmsyCZ&X-Amz-Signature=eba4aa5cf283ad9367c9e960518ccc68afb32e96521f8459360fa85b44544e64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KYIC65V%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T121633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIDc5h600mZFr0D6vdK8C0Fq6B2FYf%2ByZOywi2URzJlcuAiEArhWOj5xmBVRvi6s5bex5zAtq%2FqDTXupAvguFHjxIk7kq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDPTohqx%2BMNSzTekg1CrcA8OrdO9R%2Bhtwb8msVfWBdgnBT9IeRctj4enUaydBILWck3Z4eLlAYQVuPTF23Nz5hvlOhh2q6u1d5J7SAtEpe4l%2BdF9fhqD%2BULd4gWzmA%2BEt8ZikQ7Y5XfeJ0xCAYshRl24N1RhZYbFqMkNBkE%2FNospkkA93gENQW1ziPYJo8VLvm4CD%2Bc7h%2FHtTR%2BjmqsZs2XMvd8Zp7eDIftbV%2BugCKsLjf25noC0jJWzMeF1xqHfQH6JSklR0hiVNBpPrpL1LLwvRMP29X6WqJANBa%2FAwMq18gjr0yKIVW7zlQL55t5bKNlrAlpKnm2DBAlLSLAHtN1MZb1VCw%2B6wtYaVke84ME1rOMtoiJB9lPpqqWI3y3Ke%2FU6m8ysS1s%2B21ODy8lO%2FhQmQbdIzn%2BcqpNlNHJat08%2Bzcxx41B9eWIJ5qzA9tYmjZJfdWd90J2Oas6rBvxLjtQq%2F75QFRlUPBXpTLdZBc3cjbe14anC6qkc0ZZ7141fyLFRXgnc3nWiB5nmjGJv7MrlMpRHh6YJl7d9QjvK7zmGybWfHKCJfbAuDG0pyLgjlQdJEm177D8fe2v4UxowPd8y2EEVpZ3rjT12ObmSAhFMaDdo1lkrbYaweCxrS327areWVDq4cqH2gYHNGMJnz9MIGOqUB9vVT%2BKnUKTX5iP6Z2TV3EQnXFkprtTbNybKwX8GzbbcroV96PPqUcfLQTFMNQqyIZyShF0d6QVRPlxC2QFg8FvKSeAnHkiYzHgbOxih%2FLW5pL%2B0dRjYzYFJi0qahDSgM83UeduL5UecA99769oaxMVe0MQkPBRMoV9yie2OWiZRnsr%2B1e8Pw06eMEXJS2RZKNtEFlgiCMDz7si0NhWrMAEdmsyCZ&X-Amz-Signature=05f9a2d3d2909ed470d527edc71010d1fbeb810d72956daee68267da0b76574a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KYIC65V%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T121633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIDc5h600mZFr0D6vdK8C0Fq6B2FYf%2ByZOywi2URzJlcuAiEArhWOj5xmBVRvi6s5bex5zAtq%2FqDTXupAvguFHjxIk7kq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDPTohqx%2BMNSzTekg1CrcA8OrdO9R%2Bhtwb8msVfWBdgnBT9IeRctj4enUaydBILWck3Z4eLlAYQVuPTF23Nz5hvlOhh2q6u1d5J7SAtEpe4l%2BdF9fhqD%2BULd4gWzmA%2BEt8ZikQ7Y5XfeJ0xCAYshRl24N1RhZYbFqMkNBkE%2FNospkkA93gENQW1ziPYJo8VLvm4CD%2Bc7h%2FHtTR%2BjmqsZs2XMvd8Zp7eDIftbV%2BugCKsLjf25noC0jJWzMeF1xqHfQH6JSklR0hiVNBpPrpL1LLwvRMP29X6WqJANBa%2FAwMq18gjr0yKIVW7zlQL55t5bKNlrAlpKnm2DBAlLSLAHtN1MZb1VCw%2B6wtYaVke84ME1rOMtoiJB9lPpqqWI3y3Ke%2FU6m8ysS1s%2B21ODy8lO%2FhQmQbdIzn%2BcqpNlNHJat08%2Bzcxx41B9eWIJ5qzA9tYmjZJfdWd90J2Oas6rBvxLjtQq%2F75QFRlUPBXpTLdZBc3cjbe14anC6qkc0ZZ7141fyLFRXgnc3nWiB5nmjGJv7MrlMpRHh6YJl7d9QjvK7zmGybWfHKCJfbAuDG0pyLgjlQdJEm177D8fe2v4UxowPd8y2EEVpZ3rjT12ObmSAhFMaDdo1lkrbYaweCxrS327areWVDq4cqH2gYHNGMJnz9MIGOqUB9vVT%2BKnUKTX5iP6Z2TV3EQnXFkprtTbNybKwX8GzbbcroV96PPqUcfLQTFMNQqyIZyShF0d6QVRPlxC2QFg8FvKSeAnHkiYzHgbOxih%2FLW5pL%2B0dRjYzYFJi0qahDSgM83UeduL5UecA99769oaxMVe0MQkPBRMoV9yie2OWiZRnsr%2B1e8Pw06eMEXJS2RZKNtEFlgiCMDz7si0NhWrMAEdmsyCZ&X-Amz-Signature=71cafce5d757476daf1c27a8f40619a40987ab93a4ca2e07b359257980d9b183&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KYIC65V%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T121633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIDc5h600mZFr0D6vdK8C0Fq6B2FYf%2ByZOywi2URzJlcuAiEArhWOj5xmBVRvi6s5bex5zAtq%2FqDTXupAvguFHjxIk7kq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDPTohqx%2BMNSzTekg1CrcA8OrdO9R%2Bhtwb8msVfWBdgnBT9IeRctj4enUaydBILWck3Z4eLlAYQVuPTF23Nz5hvlOhh2q6u1d5J7SAtEpe4l%2BdF9fhqD%2BULd4gWzmA%2BEt8ZikQ7Y5XfeJ0xCAYshRl24N1RhZYbFqMkNBkE%2FNospkkA93gENQW1ziPYJo8VLvm4CD%2Bc7h%2FHtTR%2BjmqsZs2XMvd8Zp7eDIftbV%2BugCKsLjf25noC0jJWzMeF1xqHfQH6JSklR0hiVNBpPrpL1LLwvRMP29X6WqJANBa%2FAwMq18gjr0yKIVW7zlQL55t5bKNlrAlpKnm2DBAlLSLAHtN1MZb1VCw%2B6wtYaVke84ME1rOMtoiJB9lPpqqWI3y3Ke%2FU6m8ysS1s%2B21ODy8lO%2FhQmQbdIzn%2BcqpNlNHJat08%2Bzcxx41B9eWIJ5qzA9tYmjZJfdWd90J2Oas6rBvxLjtQq%2F75QFRlUPBXpTLdZBc3cjbe14anC6qkc0ZZ7141fyLFRXgnc3nWiB5nmjGJv7MrlMpRHh6YJl7d9QjvK7zmGybWfHKCJfbAuDG0pyLgjlQdJEm177D8fe2v4UxowPd8y2EEVpZ3rjT12ObmSAhFMaDdo1lkrbYaweCxrS327areWVDq4cqH2gYHNGMJnz9MIGOqUB9vVT%2BKnUKTX5iP6Z2TV3EQnXFkprtTbNybKwX8GzbbcroV96PPqUcfLQTFMNQqyIZyShF0d6QVRPlxC2QFg8FvKSeAnHkiYzHgbOxih%2FLW5pL%2B0dRjYzYFJi0qahDSgM83UeduL5UecA99769oaxMVe0MQkPBRMoV9yie2OWiZRnsr%2B1e8Pw06eMEXJS2RZKNtEFlgiCMDz7si0NhWrMAEdmsyCZ&X-Amz-Signature=f5b483850e59bd8dca8d142eba98fa20fdf7ba5cd4dc72862dd74afe7fc57a82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KYIC65V%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T121633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIDc5h600mZFr0D6vdK8C0Fq6B2FYf%2ByZOywi2URzJlcuAiEArhWOj5xmBVRvi6s5bex5zAtq%2FqDTXupAvguFHjxIk7kq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDPTohqx%2BMNSzTekg1CrcA8OrdO9R%2Bhtwb8msVfWBdgnBT9IeRctj4enUaydBILWck3Z4eLlAYQVuPTF23Nz5hvlOhh2q6u1d5J7SAtEpe4l%2BdF9fhqD%2BULd4gWzmA%2BEt8ZikQ7Y5XfeJ0xCAYshRl24N1RhZYbFqMkNBkE%2FNospkkA93gENQW1ziPYJo8VLvm4CD%2Bc7h%2FHtTR%2BjmqsZs2XMvd8Zp7eDIftbV%2BugCKsLjf25noC0jJWzMeF1xqHfQH6JSklR0hiVNBpPrpL1LLwvRMP29X6WqJANBa%2FAwMq18gjr0yKIVW7zlQL55t5bKNlrAlpKnm2DBAlLSLAHtN1MZb1VCw%2B6wtYaVke84ME1rOMtoiJB9lPpqqWI3y3Ke%2FU6m8ysS1s%2B21ODy8lO%2FhQmQbdIzn%2BcqpNlNHJat08%2Bzcxx41B9eWIJ5qzA9tYmjZJfdWd90J2Oas6rBvxLjtQq%2F75QFRlUPBXpTLdZBc3cjbe14anC6qkc0ZZ7141fyLFRXgnc3nWiB5nmjGJv7MrlMpRHh6YJl7d9QjvK7zmGybWfHKCJfbAuDG0pyLgjlQdJEm177D8fe2v4UxowPd8y2EEVpZ3rjT12ObmSAhFMaDdo1lkrbYaweCxrS327areWVDq4cqH2gYHNGMJnz9MIGOqUB9vVT%2BKnUKTX5iP6Z2TV3EQnXFkprtTbNybKwX8GzbbcroV96PPqUcfLQTFMNQqyIZyShF0d6QVRPlxC2QFg8FvKSeAnHkiYzHgbOxih%2FLW5pL%2B0dRjYzYFJi0qahDSgM83UeduL5UecA99769oaxMVe0MQkPBRMoV9yie2OWiZRnsr%2B1e8Pw06eMEXJS2RZKNtEFlgiCMDz7si0NhWrMAEdmsyCZ&X-Amz-Signature=725ba33644f32f4fd6bc8c9764b3ff81a2d3eb1073812aaa7d172111e973ad8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KYIC65V%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T121633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIDc5h600mZFr0D6vdK8C0Fq6B2FYf%2ByZOywi2URzJlcuAiEArhWOj5xmBVRvi6s5bex5zAtq%2FqDTXupAvguFHjxIk7kq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDPTohqx%2BMNSzTekg1CrcA8OrdO9R%2Bhtwb8msVfWBdgnBT9IeRctj4enUaydBILWck3Z4eLlAYQVuPTF23Nz5hvlOhh2q6u1d5J7SAtEpe4l%2BdF9fhqD%2BULd4gWzmA%2BEt8ZikQ7Y5XfeJ0xCAYshRl24N1RhZYbFqMkNBkE%2FNospkkA93gENQW1ziPYJo8VLvm4CD%2Bc7h%2FHtTR%2BjmqsZs2XMvd8Zp7eDIftbV%2BugCKsLjf25noC0jJWzMeF1xqHfQH6JSklR0hiVNBpPrpL1LLwvRMP29X6WqJANBa%2FAwMq18gjr0yKIVW7zlQL55t5bKNlrAlpKnm2DBAlLSLAHtN1MZb1VCw%2B6wtYaVke84ME1rOMtoiJB9lPpqqWI3y3Ke%2FU6m8ysS1s%2B21ODy8lO%2FhQmQbdIzn%2BcqpNlNHJat08%2Bzcxx41B9eWIJ5qzA9tYmjZJfdWd90J2Oas6rBvxLjtQq%2F75QFRlUPBXpTLdZBc3cjbe14anC6qkc0ZZ7141fyLFRXgnc3nWiB5nmjGJv7MrlMpRHh6YJl7d9QjvK7zmGybWfHKCJfbAuDG0pyLgjlQdJEm177D8fe2v4UxowPd8y2EEVpZ3rjT12ObmSAhFMaDdo1lkrbYaweCxrS327areWVDq4cqH2gYHNGMJnz9MIGOqUB9vVT%2BKnUKTX5iP6Z2TV3EQnXFkprtTbNybKwX8GzbbcroV96PPqUcfLQTFMNQqyIZyShF0d6QVRPlxC2QFg8FvKSeAnHkiYzHgbOxih%2FLW5pL%2B0dRjYzYFJi0qahDSgM83UeduL5UecA99769oaxMVe0MQkPBRMoV9yie2OWiZRnsr%2B1e8Pw06eMEXJS2RZKNtEFlgiCMDz7si0NhWrMAEdmsyCZ&X-Amz-Signature=07eeddfbf11a248cb73eee9ece5970ace1142e8ecc13f9646b0fa39b03733035&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
