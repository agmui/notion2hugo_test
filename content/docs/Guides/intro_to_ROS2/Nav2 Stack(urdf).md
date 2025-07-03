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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PMKCQCM%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T051348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCID7OLkJSSzUnwR72VkVS6XH7Wt8QbZlW4Huh2x1TGwzJAiBfu5EKgOV%2BbrKbwC%2BFrSwy7SUo1sreLM1TatdMVNPCGyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrqw%2BsOVffUmJrkD8KtwDpURcmXPG8AYcWBQrDnjJKf%2FjHDfGgHts9%2B310zkxmaKNdncwsQz4fSSZJ%2FUVvwDVY0eo1fzv9jmPzb5RxKn5SCDpPff0Xxmf6ODcuINbkDwOAMq4LMnjxGWPMhgPK7Hi8V5yeNlerYmFPUqKi74qzoUA2I%2B2Ohg4M4dotXpHCQFOkvQIk2Z3zM1dejeRXjigPeUK0ep5SenPRP1%2FhIOE%2Bgt%2FpPyW3grOiL5EVTBnrU0%2BXHe1ZwfA3frX82n91D0Lrk%2BZzvNRHEgaZsI2fgP%2Frjn7VR5aLGvj3BtIR5YhcmINeD4eSultiQUlRVSobOdREOMt7MGvnozZBset3RyzgOYTQwNr6K2r7gP6VlHwYgzBClPnQ%2F2U42KQqOai5DhrRDtNrJx5SeVq4zOjRGvsNSqy3ShS9KfKXNh7LnzBIixgAx8WeDIp0snruHfNDpMNrcPepIAi65u5%2F567UnqTTbvjWoIX%2Fuqcw0GJ9H3eSkUdTbIqEKHxP8KvNFf0JALZebjPuKPz25kvGfbWV3CkBY7iMJon3dHlKtIQhKERB8PwVr9dwY4x12TJuHeLCwdPfi7yLBf1Y60RU43GZI3emrOW6ann6SNnUUjZKE1ofr18zFmsYUU7ITuH%2BZ4w54eYwwY6pgGKg5Lsn9MH%2FpoUV%2BRJZF5F%2FvJgeuyoEsitD1fQowawsesNffnqCn3%2FrfpixW0RrrrKbpUGzKi0kHzj1bMWcJg7pCaNR9s%2BRASLD3JambWPY1%2FkDHx92BH4Py3UfAPHC%2BLM%2Fmrj57y3TdDp0qd8ZjWZ0MC3mA4HFSlvG5WtOfgMPM3hxHJ4PI7yFrTnYqvVNH7rFlUmo6nX1BT2ojQWjVQcKgApjOTZ&X-Amz-Signature=7aadc2b11957784d8ece078e55b45cad6bf6a8655187a0475d1d9a65c294e3ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PMKCQCM%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T051348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCID7OLkJSSzUnwR72VkVS6XH7Wt8QbZlW4Huh2x1TGwzJAiBfu5EKgOV%2BbrKbwC%2BFrSwy7SUo1sreLM1TatdMVNPCGyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrqw%2BsOVffUmJrkD8KtwDpURcmXPG8AYcWBQrDnjJKf%2FjHDfGgHts9%2B310zkxmaKNdncwsQz4fSSZJ%2FUVvwDVY0eo1fzv9jmPzb5RxKn5SCDpPff0Xxmf6ODcuINbkDwOAMq4LMnjxGWPMhgPK7Hi8V5yeNlerYmFPUqKi74qzoUA2I%2B2Ohg4M4dotXpHCQFOkvQIk2Z3zM1dejeRXjigPeUK0ep5SenPRP1%2FhIOE%2Bgt%2FpPyW3grOiL5EVTBnrU0%2BXHe1ZwfA3frX82n91D0Lrk%2BZzvNRHEgaZsI2fgP%2Frjn7VR5aLGvj3BtIR5YhcmINeD4eSultiQUlRVSobOdREOMt7MGvnozZBset3RyzgOYTQwNr6K2r7gP6VlHwYgzBClPnQ%2F2U42KQqOai5DhrRDtNrJx5SeVq4zOjRGvsNSqy3ShS9KfKXNh7LnzBIixgAx8WeDIp0snruHfNDpMNrcPepIAi65u5%2F567UnqTTbvjWoIX%2Fuqcw0GJ9H3eSkUdTbIqEKHxP8KvNFf0JALZebjPuKPz25kvGfbWV3CkBY7iMJon3dHlKtIQhKERB8PwVr9dwY4x12TJuHeLCwdPfi7yLBf1Y60RU43GZI3emrOW6ann6SNnUUjZKE1ofr18zFmsYUU7ITuH%2BZ4w54eYwwY6pgGKg5Lsn9MH%2FpoUV%2BRJZF5F%2FvJgeuyoEsitD1fQowawsesNffnqCn3%2FrfpixW0RrrrKbpUGzKi0kHzj1bMWcJg7pCaNR9s%2BRASLD3JambWPY1%2FkDHx92BH4Py3UfAPHC%2BLM%2Fmrj57y3TdDp0qd8ZjWZ0MC3mA4HFSlvG5WtOfgMPM3hxHJ4PI7yFrTnYqvVNH7rFlUmo6nX1BT2ojQWjVQcKgApjOTZ&X-Amz-Signature=ad91146ffa7445ca9101c7d4afc707b45e148f8eeec4be7021ac87fcc2e1c65b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PMKCQCM%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T051348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCID7OLkJSSzUnwR72VkVS6XH7Wt8QbZlW4Huh2x1TGwzJAiBfu5EKgOV%2BbrKbwC%2BFrSwy7SUo1sreLM1TatdMVNPCGyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrqw%2BsOVffUmJrkD8KtwDpURcmXPG8AYcWBQrDnjJKf%2FjHDfGgHts9%2B310zkxmaKNdncwsQz4fSSZJ%2FUVvwDVY0eo1fzv9jmPzb5RxKn5SCDpPff0Xxmf6ODcuINbkDwOAMq4LMnjxGWPMhgPK7Hi8V5yeNlerYmFPUqKi74qzoUA2I%2B2Ohg4M4dotXpHCQFOkvQIk2Z3zM1dejeRXjigPeUK0ep5SenPRP1%2FhIOE%2Bgt%2FpPyW3grOiL5EVTBnrU0%2BXHe1ZwfA3frX82n91D0Lrk%2BZzvNRHEgaZsI2fgP%2Frjn7VR5aLGvj3BtIR5YhcmINeD4eSultiQUlRVSobOdREOMt7MGvnozZBset3RyzgOYTQwNr6K2r7gP6VlHwYgzBClPnQ%2F2U42KQqOai5DhrRDtNrJx5SeVq4zOjRGvsNSqy3ShS9KfKXNh7LnzBIixgAx8WeDIp0snruHfNDpMNrcPepIAi65u5%2F567UnqTTbvjWoIX%2Fuqcw0GJ9H3eSkUdTbIqEKHxP8KvNFf0JALZebjPuKPz25kvGfbWV3CkBY7iMJon3dHlKtIQhKERB8PwVr9dwY4x12TJuHeLCwdPfi7yLBf1Y60RU43GZI3emrOW6ann6SNnUUjZKE1ofr18zFmsYUU7ITuH%2BZ4w54eYwwY6pgGKg5Lsn9MH%2FpoUV%2BRJZF5F%2FvJgeuyoEsitD1fQowawsesNffnqCn3%2FrfpixW0RrrrKbpUGzKi0kHzj1bMWcJg7pCaNR9s%2BRASLD3JambWPY1%2FkDHx92BH4Py3UfAPHC%2BLM%2Fmrj57y3TdDp0qd8ZjWZ0MC3mA4HFSlvG5WtOfgMPM3hxHJ4PI7yFrTnYqvVNH7rFlUmo6nX1BT2ojQWjVQcKgApjOTZ&X-Amz-Signature=1f5ab0f12e5fb315c306916cf9314bacd257d46d062dbab16c22e1c92d7fc469&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PMKCQCM%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T051348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCID7OLkJSSzUnwR72VkVS6XH7Wt8QbZlW4Huh2x1TGwzJAiBfu5EKgOV%2BbrKbwC%2BFrSwy7SUo1sreLM1TatdMVNPCGyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrqw%2BsOVffUmJrkD8KtwDpURcmXPG8AYcWBQrDnjJKf%2FjHDfGgHts9%2B310zkxmaKNdncwsQz4fSSZJ%2FUVvwDVY0eo1fzv9jmPzb5RxKn5SCDpPff0Xxmf6ODcuINbkDwOAMq4LMnjxGWPMhgPK7Hi8V5yeNlerYmFPUqKi74qzoUA2I%2B2Ohg4M4dotXpHCQFOkvQIk2Z3zM1dejeRXjigPeUK0ep5SenPRP1%2FhIOE%2Bgt%2FpPyW3grOiL5EVTBnrU0%2BXHe1ZwfA3frX82n91D0Lrk%2BZzvNRHEgaZsI2fgP%2Frjn7VR5aLGvj3BtIR5YhcmINeD4eSultiQUlRVSobOdREOMt7MGvnozZBset3RyzgOYTQwNr6K2r7gP6VlHwYgzBClPnQ%2F2U42KQqOai5DhrRDtNrJx5SeVq4zOjRGvsNSqy3ShS9KfKXNh7LnzBIixgAx8WeDIp0snruHfNDpMNrcPepIAi65u5%2F567UnqTTbvjWoIX%2Fuqcw0GJ9H3eSkUdTbIqEKHxP8KvNFf0JALZebjPuKPz25kvGfbWV3CkBY7iMJon3dHlKtIQhKERB8PwVr9dwY4x12TJuHeLCwdPfi7yLBf1Y60RU43GZI3emrOW6ann6SNnUUjZKE1ofr18zFmsYUU7ITuH%2BZ4w54eYwwY6pgGKg5Lsn9MH%2FpoUV%2BRJZF5F%2FvJgeuyoEsitD1fQowawsesNffnqCn3%2FrfpixW0RrrrKbpUGzKi0kHzj1bMWcJg7pCaNR9s%2BRASLD3JambWPY1%2FkDHx92BH4Py3UfAPHC%2BLM%2Fmrj57y3TdDp0qd8ZjWZ0MC3mA4HFSlvG5WtOfgMPM3hxHJ4PI7yFrTnYqvVNH7rFlUmo6nX1BT2ojQWjVQcKgApjOTZ&X-Amz-Signature=5d53f784d2235efb4a7dd35c0de8387d55ecc0d1aa22c9dcb96617dc06167110&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PMKCQCM%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T051348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCID7OLkJSSzUnwR72VkVS6XH7Wt8QbZlW4Huh2x1TGwzJAiBfu5EKgOV%2BbrKbwC%2BFrSwy7SUo1sreLM1TatdMVNPCGyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrqw%2BsOVffUmJrkD8KtwDpURcmXPG8AYcWBQrDnjJKf%2FjHDfGgHts9%2B310zkxmaKNdncwsQz4fSSZJ%2FUVvwDVY0eo1fzv9jmPzb5RxKn5SCDpPff0Xxmf6ODcuINbkDwOAMq4LMnjxGWPMhgPK7Hi8V5yeNlerYmFPUqKi74qzoUA2I%2B2Ohg4M4dotXpHCQFOkvQIk2Z3zM1dejeRXjigPeUK0ep5SenPRP1%2FhIOE%2Bgt%2FpPyW3grOiL5EVTBnrU0%2BXHe1ZwfA3frX82n91D0Lrk%2BZzvNRHEgaZsI2fgP%2Frjn7VR5aLGvj3BtIR5YhcmINeD4eSultiQUlRVSobOdREOMt7MGvnozZBset3RyzgOYTQwNr6K2r7gP6VlHwYgzBClPnQ%2F2U42KQqOai5DhrRDtNrJx5SeVq4zOjRGvsNSqy3ShS9KfKXNh7LnzBIixgAx8WeDIp0snruHfNDpMNrcPepIAi65u5%2F567UnqTTbvjWoIX%2Fuqcw0GJ9H3eSkUdTbIqEKHxP8KvNFf0JALZebjPuKPz25kvGfbWV3CkBY7iMJon3dHlKtIQhKERB8PwVr9dwY4x12TJuHeLCwdPfi7yLBf1Y60RU43GZI3emrOW6ann6SNnUUjZKE1ofr18zFmsYUU7ITuH%2BZ4w54eYwwY6pgGKg5Lsn9MH%2FpoUV%2BRJZF5F%2FvJgeuyoEsitD1fQowawsesNffnqCn3%2FrfpixW0RrrrKbpUGzKi0kHzj1bMWcJg7pCaNR9s%2BRASLD3JambWPY1%2FkDHx92BH4Py3UfAPHC%2BLM%2Fmrj57y3TdDp0qd8ZjWZ0MC3mA4HFSlvG5WtOfgMPM3hxHJ4PI7yFrTnYqvVNH7rFlUmo6nX1BT2ojQWjVQcKgApjOTZ&X-Amz-Signature=85ea609a86d3287d1950cb13a3f4eee1de1224559ed404a41ca39d64ca5fc3de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PMKCQCM%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T051348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCID7OLkJSSzUnwR72VkVS6XH7Wt8QbZlW4Huh2x1TGwzJAiBfu5EKgOV%2BbrKbwC%2BFrSwy7SUo1sreLM1TatdMVNPCGyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrqw%2BsOVffUmJrkD8KtwDpURcmXPG8AYcWBQrDnjJKf%2FjHDfGgHts9%2B310zkxmaKNdncwsQz4fSSZJ%2FUVvwDVY0eo1fzv9jmPzb5RxKn5SCDpPff0Xxmf6ODcuINbkDwOAMq4LMnjxGWPMhgPK7Hi8V5yeNlerYmFPUqKi74qzoUA2I%2B2Ohg4M4dotXpHCQFOkvQIk2Z3zM1dejeRXjigPeUK0ep5SenPRP1%2FhIOE%2Bgt%2FpPyW3grOiL5EVTBnrU0%2BXHe1ZwfA3frX82n91D0Lrk%2BZzvNRHEgaZsI2fgP%2Frjn7VR5aLGvj3BtIR5YhcmINeD4eSultiQUlRVSobOdREOMt7MGvnozZBset3RyzgOYTQwNr6K2r7gP6VlHwYgzBClPnQ%2F2U42KQqOai5DhrRDtNrJx5SeVq4zOjRGvsNSqy3ShS9KfKXNh7LnzBIixgAx8WeDIp0snruHfNDpMNrcPepIAi65u5%2F567UnqTTbvjWoIX%2Fuqcw0GJ9H3eSkUdTbIqEKHxP8KvNFf0JALZebjPuKPz25kvGfbWV3CkBY7iMJon3dHlKtIQhKERB8PwVr9dwY4x12TJuHeLCwdPfi7yLBf1Y60RU43GZI3emrOW6ann6SNnUUjZKE1ofr18zFmsYUU7ITuH%2BZ4w54eYwwY6pgGKg5Lsn9MH%2FpoUV%2BRJZF5F%2FvJgeuyoEsitD1fQowawsesNffnqCn3%2FrfpixW0RrrrKbpUGzKi0kHzj1bMWcJg7pCaNR9s%2BRASLD3JambWPY1%2FkDHx92BH4Py3UfAPHC%2BLM%2Fmrj57y3TdDp0qd8ZjWZ0MC3mA4HFSlvG5WtOfgMPM3hxHJ4PI7yFrTnYqvVNH7rFlUmo6nX1BT2ojQWjVQcKgApjOTZ&X-Amz-Signature=178572907541638c098988dc63c4b4e1d13f2acb0559441d186ba9faf7f1934a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
