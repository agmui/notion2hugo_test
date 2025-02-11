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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUSMCZWQ%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T140120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB3H7CXnEtAYO2lSYTOJ%2BzeF9Tr1HfjXc04C%2BTyB2IVAIgPPskLaAVew%2FIadkb6O83SZY2lvUuGFkfbAL7TQcZ1C0qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJL0wFMCDqc1wjlhPCrcA7W9GZ6qyK9l54y7sfOhETwmVb%2B7O2sO6%2BL6to8pb1ng%2Fm7GwE4vXglSeFHb%2B8ttz6u9NEWc%2FFyS5Q1bBe1OUgwy1JOqObeVJVH8ETNaWuMuZN%2Bk5OONsqN23dH1L%2B7HQlIzC9Mj4lvQkCJCGalwingFKp9XIxzUlkMlMKHDZKQwDge%2FtA7PFOjBRRVMS1%2B7%2FuR0J7b5D%2BNZEdAMTgz5qSDOHLRhUnqNueapH4HNT8FPaTL9y2P63UBYmzTN2qlr373F9lugxUQVAjFV8j2ls48bepCvCJVLkDKCHJkDv6NByVMV0fZgAYy6hJ8wpC5KM6C1JxnjxeIIS2%2Fp2srb4aerZ61GInWBAQ7OKimHzS%2FJLFQoWMiV9HG5v%2FKZlWs%2BNFyQ9ILnDP7%2BqbRb%2BlLWVY8ms7YCcR%2BsKPKjVsaFFk01phc1ZbOu2CFaK%2BYE4jwVQsP6ENu3GaRyQICkVNZYQAqEn7cziF4UJG7bsWDFIZ20KQkXNz%2B8Pu5DQJeiCqQuXmgZV3jxjUGvw4XmxgjNv8tNkCqoVa6Q%2BCxppBu0QfAWgmpMUDxF2gQKgmFn0eehpHMn9L86l8A20PHEOj3aBkqTbf5%2BcohADNjoVoz8RVoJhA7voNpPcJvloJd0MLqlrb0GOqUBp%2BcFaPrZhCDMsuz1PVTg1qLsrSLHqBjpXm6leECtKst6So3iJDPUxc6jB8y0P0%2B1kh9iMDhi%2FyWisO7K0bqi3IkfR%2FWYpc%2FaH803%2Fp7WYx0%2BWkoUQ7Gg82gE4Ce2iU7uMeI%2FvENgBqigEuDjBaLUDyDs75k0v0VCsOH%2Bulm1n%2FR5EgFcZ3UV6VUBpHCdiHDKfK%2F4RhDqBwCFnuE%2FrL1%2FtOTPc0u%2F&X-Amz-Signature=b8af896499d16e4f4b07ac889acbaf937b67b8d6b9560956d72fbddec0c6fc67&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUSMCZWQ%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T140120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB3H7CXnEtAYO2lSYTOJ%2BzeF9Tr1HfjXc04C%2BTyB2IVAIgPPskLaAVew%2FIadkb6O83SZY2lvUuGFkfbAL7TQcZ1C0qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJL0wFMCDqc1wjlhPCrcA7W9GZ6qyK9l54y7sfOhETwmVb%2B7O2sO6%2BL6to8pb1ng%2Fm7GwE4vXglSeFHb%2B8ttz6u9NEWc%2FFyS5Q1bBe1OUgwy1JOqObeVJVH8ETNaWuMuZN%2Bk5OONsqN23dH1L%2B7HQlIzC9Mj4lvQkCJCGalwingFKp9XIxzUlkMlMKHDZKQwDge%2FtA7PFOjBRRVMS1%2B7%2FuR0J7b5D%2BNZEdAMTgz5qSDOHLRhUnqNueapH4HNT8FPaTL9y2P63UBYmzTN2qlr373F9lugxUQVAjFV8j2ls48bepCvCJVLkDKCHJkDv6NByVMV0fZgAYy6hJ8wpC5KM6C1JxnjxeIIS2%2Fp2srb4aerZ61GInWBAQ7OKimHzS%2FJLFQoWMiV9HG5v%2FKZlWs%2BNFyQ9ILnDP7%2BqbRb%2BlLWVY8ms7YCcR%2BsKPKjVsaFFk01phc1ZbOu2CFaK%2BYE4jwVQsP6ENu3GaRyQICkVNZYQAqEn7cziF4UJG7bsWDFIZ20KQkXNz%2B8Pu5DQJeiCqQuXmgZV3jxjUGvw4XmxgjNv8tNkCqoVa6Q%2BCxppBu0QfAWgmpMUDxF2gQKgmFn0eehpHMn9L86l8A20PHEOj3aBkqTbf5%2BcohADNjoVoz8RVoJhA7voNpPcJvloJd0MLqlrb0GOqUBp%2BcFaPrZhCDMsuz1PVTg1qLsrSLHqBjpXm6leECtKst6So3iJDPUxc6jB8y0P0%2B1kh9iMDhi%2FyWisO7K0bqi3IkfR%2FWYpc%2FaH803%2Fp7WYx0%2BWkoUQ7Gg82gE4Ce2iU7uMeI%2FvENgBqigEuDjBaLUDyDs75k0v0VCsOH%2Bulm1n%2FR5EgFcZ3UV6VUBpHCdiHDKfK%2F4RhDqBwCFnuE%2FrL1%2FtOTPc0u%2F&X-Amz-Signature=a9bc1ab1ae2c9955eefc6277a48b33a66de5990838ecf447cba8c32417b0e41d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUSMCZWQ%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T140120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB3H7CXnEtAYO2lSYTOJ%2BzeF9Tr1HfjXc04C%2BTyB2IVAIgPPskLaAVew%2FIadkb6O83SZY2lvUuGFkfbAL7TQcZ1C0qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJL0wFMCDqc1wjlhPCrcA7W9GZ6qyK9l54y7sfOhETwmVb%2B7O2sO6%2BL6to8pb1ng%2Fm7GwE4vXglSeFHb%2B8ttz6u9NEWc%2FFyS5Q1bBe1OUgwy1JOqObeVJVH8ETNaWuMuZN%2Bk5OONsqN23dH1L%2B7HQlIzC9Mj4lvQkCJCGalwingFKp9XIxzUlkMlMKHDZKQwDge%2FtA7PFOjBRRVMS1%2B7%2FuR0J7b5D%2BNZEdAMTgz5qSDOHLRhUnqNueapH4HNT8FPaTL9y2P63UBYmzTN2qlr373F9lugxUQVAjFV8j2ls48bepCvCJVLkDKCHJkDv6NByVMV0fZgAYy6hJ8wpC5KM6C1JxnjxeIIS2%2Fp2srb4aerZ61GInWBAQ7OKimHzS%2FJLFQoWMiV9HG5v%2FKZlWs%2BNFyQ9ILnDP7%2BqbRb%2BlLWVY8ms7YCcR%2BsKPKjVsaFFk01phc1ZbOu2CFaK%2BYE4jwVQsP6ENu3GaRyQICkVNZYQAqEn7cziF4UJG7bsWDFIZ20KQkXNz%2B8Pu5DQJeiCqQuXmgZV3jxjUGvw4XmxgjNv8tNkCqoVa6Q%2BCxppBu0QfAWgmpMUDxF2gQKgmFn0eehpHMn9L86l8A20PHEOj3aBkqTbf5%2BcohADNjoVoz8RVoJhA7voNpPcJvloJd0MLqlrb0GOqUBp%2BcFaPrZhCDMsuz1PVTg1qLsrSLHqBjpXm6leECtKst6So3iJDPUxc6jB8y0P0%2B1kh9iMDhi%2FyWisO7K0bqi3IkfR%2FWYpc%2FaH803%2Fp7WYx0%2BWkoUQ7Gg82gE4Ce2iU7uMeI%2FvENgBqigEuDjBaLUDyDs75k0v0VCsOH%2Bulm1n%2FR5EgFcZ3UV6VUBpHCdiHDKfK%2F4RhDqBwCFnuE%2FrL1%2FtOTPc0u%2F&X-Amz-Signature=7035363c58ad73a16bc5dbd196f89ac71fe53077fa6e992a8f7bdd6278e229d0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUSMCZWQ%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T140120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB3H7CXnEtAYO2lSYTOJ%2BzeF9Tr1HfjXc04C%2BTyB2IVAIgPPskLaAVew%2FIadkb6O83SZY2lvUuGFkfbAL7TQcZ1C0qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJL0wFMCDqc1wjlhPCrcA7W9GZ6qyK9l54y7sfOhETwmVb%2B7O2sO6%2BL6to8pb1ng%2Fm7GwE4vXglSeFHb%2B8ttz6u9NEWc%2FFyS5Q1bBe1OUgwy1JOqObeVJVH8ETNaWuMuZN%2Bk5OONsqN23dH1L%2B7HQlIzC9Mj4lvQkCJCGalwingFKp9XIxzUlkMlMKHDZKQwDge%2FtA7PFOjBRRVMS1%2B7%2FuR0J7b5D%2BNZEdAMTgz5qSDOHLRhUnqNueapH4HNT8FPaTL9y2P63UBYmzTN2qlr373F9lugxUQVAjFV8j2ls48bepCvCJVLkDKCHJkDv6NByVMV0fZgAYy6hJ8wpC5KM6C1JxnjxeIIS2%2Fp2srb4aerZ61GInWBAQ7OKimHzS%2FJLFQoWMiV9HG5v%2FKZlWs%2BNFyQ9ILnDP7%2BqbRb%2BlLWVY8ms7YCcR%2BsKPKjVsaFFk01phc1ZbOu2CFaK%2BYE4jwVQsP6ENu3GaRyQICkVNZYQAqEn7cziF4UJG7bsWDFIZ20KQkXNz%2B8Pu5DQJeiCqQuXmgZV3jxjUGvw4XmxgjNv8tNkCqoVa6Q%2BCxppBu0QfAWgmpMUDxF2gQKgmFn0eehpHMn9L86l8A20PHEOj3aBkqTbf5%2BcohADNjoVoz8RVoJhA7voNpPcJvloJd0MLqlrb0GOqUBp%2BcFaPrZhCDMsuz1PVTg1qLsrSLHqBjpXm6leECtKst6So3iJDPUxc6jB8y0P0%2B1kh9iMDhi%2FyWisO7K0bqi3IkfR%2FWYpc%2FaH803%2Fp7WYx0%2BWkoUQ7Gg82gE4Ce2iU7uMeI%2FvENgBqigEuDjBaLUDyDs75k0v0VCsOH%2Bulm1n%2FR5EgFcZ3UV6VUBpHCdiHDKfK%2F4RhDqBwCFnuE%2FrL1%2FtOTPc0u%2F&X-Amz-Signature=bf22102e5d84c46ec2f16bf21166f6e3c05724e5e2c39af010b6c6f87d7801b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUSMCZWQ%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T140120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB3H7CXnEtAYO2lSYTOJ%2BzeF9Tr1HfjXc04C%2BTyB2IVAIgPPskLaAVew%2FIadkb6O83SZY2lvUuGFkfbAL7TQcZ1C0qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJL0wFMCDqc1wjlhPCrcA7W9GZ6qyK9l54y7sfOhETwmVb%2B7O2sO6%2BL6to8pb1ng%2Fm7GwE4vXglSeFHb%2B8ttz6u9NEWc%2FFyS5Q1bBe1OUgwy1JOqObeVJVH8ETNaWuMuZN%2Bk5OONsqN23dH1L%2B7HQlIzC9Mj4lvQkCJCGalwingFKp9XIxzUlkMlMKHDZKQwDge%2FtA7PFOjBRRVMS1%2B7%2FuR0J7b5D%2BNZEdAMTgz5qSDOHLRhUnqNueapH4HNT8FPaTL9y2P63UBYmzTN2qlr373F9lugxUQVAjFV8j2ls48bepCvCJVLkDKCHJkDv6NByVMV0fZgAYy6hJ8wpC5KM6C1JxnjxeIIS2%2Fp2srb4aerZ61GInWBAQ7OKimHzS%2FJLFQoWMiV9HG5v%2FKZlWs%2BNFyQ9ILnDP7%2BqbRb%2BlLWVY8ms7YCcR%2BsKPKjVsaFFk01phc1ZbOu2CFaK%2BYE4jwVQsP6ENu3GaRyQICkVNZYQAqEn7cziF4UJG7bsWDFIZ20KQkXNz%2B8Pu5DQJeiCqQuXmgZV3jxjUGvw4XmxgjNv8tNkCqoVa6Q%2BCxppBu0QfAWgmpMUDxF2gQKgmFn0eehpHMn9L86l8A20PHEOj3aBkqTbf5%2BcohADNjoVoz8RVoJhA7voNpPcJvloJd0MLqlrb0GOqUBp%2BcFaPrZhCDMsuz1PVTg1qLsrSLHqBjpXm6leECtKst6So3iJDPUxc6jB8y0P0%2B1kh9iMDhi%2FyWisO7K0bqi3IkfR%2FWYpc%2FaH803%2Fp7WYx0%2BWkoUQ7Gg82gE4Ce2iU7uMeI%2FvENgBqigEuDjBaLUDyDs75k0v0VCsOH%2Bulm1n%2FR5EgFcZ3UV6VUBpHCdiHDKfK%2F4RhDqBwCFnuE%2FrL1%2FtOTPc0u%2F&X-Amz-Signature=3ecbb2c85d0f9d9e0bce50542466c6e4eff8e8005ea39ab60d4cac6af922e29f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUSMCZWQ%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T140120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCB3H7CXnEtAYO2lSYTOJ%2BzeF9Tr1HfjXc04C%2BTyB2IVAIgPPskLaAVew%2FIadkb6O83SZY2lvUuGFkfbAL7TQcZ1C0qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJL0wFMCDqc1wjlhPCrcA7W9GZ6qyK9l54y7sfOhETwmVb%2B7O2sO6%2BL6to8pb1ng%2Fm7GwE4vXglSeFHb%2B8ttz6u9NEWc%2FFyS5Q1bBe1OUgwy1JOqObeVJVH8ETNaWuMuZN%2Bk5OONsqN23dH1L%2B7HQlIzC9Mj4lvQkCJCGalwingFKp9XIxzUlkMlMKHDZKQwDge%2FtA7PFOjBRRVMS1%2B7%2FuR0J7b5D%2BNZEdAMTgz5qSDOHLRhUnqNueapH4HNT8FPaTL9y2P63UBYmzTN2qlr373F9lugxUQVAjFV8j2ls48bepCvCJVLkDKCHJkDv6NByVMV0fZgAYy6hJ8wpC5KM6C1JxnjxeIIS2%2Fp2srb4aerZ61GInWBAQ7OKimHzS%2FJLFQoWMiV9HG5v%2FKZlWs%2BNFyQ9ILnDP7%2BqbRb%2BlLWVY8ms7YCcR%2BsKPKjVsaFFk01phc1ZbOu2CFaK%2BYE4jwVQsP6ENu3GaRyQICkVNZYQAqEn7cziF4UJG7bsWDFIZ20KQkXNz%2B8Pu5DQJeiCqQuXmgZV3jxjUGvw4XmxgjNv8tNkCqoVa6Q%2BCxppBu0QfAWgmpMUDxF2gQKgmFn0eehpHMn9L86l8A20PHEOj3aBkqTbf5%2BcohADNjoVoz8RVoJhA7voNpPcJvloJd0MLqlrb0GOqUBp%2BcFaPrZhCDMsuz1PVTg1qLsrSLHqBjpXm6leECtKst6So3iJDPUxc6jB8y0P0%2B1kh9iMDhi%2FyWisO7K0bqi3IkfR%2FWYpc%2FaH803%2Fp7WYx0%2BWkoUQ7Gg82gE4Ce2iU7uMeI%2FvENgBqigEuDjBaLUDyDs75k0v0VCsOH%2Bulm1n%2FR5EgFcZ3UV6VUBpHCdiHDKfK%2F4RhDqBwCFnuE%2FrL1%2FtOTPc0u%2F&X-Amz-Signature=b1103ccbb644a19c47cf7c834ae6e9970ae7f3b03b11b7cdcc02f6bdf6851ade&X-Amz-SignedHeaders=host&x-id=GetObject)
