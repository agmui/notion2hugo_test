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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WEQ4MMT%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T170130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPH8BG5ywlBf5Wo6ToEZZ27Dk8uNHtbNEpWmbIgh%2F3uAIhAO3GtILrl8a4LqcN%2F4GhaV4lcuSX470euMYoQtMnQHv5Kv8DCEoQABoMNjM3NDIzMTgzODA1IgxYx1r9EgmpXKDmde0q3APMGfICEWzO16BmB54fbliPZdg9%2B64yrj71EGMSa08Vc5d2Z0LXtsXiKieCdpRWxQrtGnfVqez3nvrZC%2F%2FJbb1TNirHus6X%2F9sIpJfXFHQa467R2NiQiq23z3RxU7FpPGKp3QfyYMfV%2FN6SLgGQ4UQ3YiYI98d5JQeixZFF7ulx%2BMabgDNJm7TOZ4pcxM94ypTV7osoCBWLQ7AdMSkOobtk%2BD%2BMfIWjtIKfEG5fAelo6x8gsiqS8Woy3i5jFHfc9o%2BKhdS6csA83crFYTkpwk0jLRb5hkwkLA8vqp%2FTZTz5fC99MpVIc19fFkzW6xN6MOyIdlzXNkklS1vp1n1golTXcMoPYfMSpowpn%2BtKTDHIIRGryzTzgzxWC9sg35rYGbqcAC4LZtKsuu8a1JxH4cG1TfEIvitOcOAhjcRbbc3RVw4EoqUALxYMMBjRkooRnXMXh%2BCLSfG9g%2BAYaIvF7H08kqWXfjqoXeYC%2BRyLvSse7%2BkulhZ5QOi2hgaytw6I7f6a1hmjbPoYlMaZD%2FYg7p8bOj4dn2H62XRcb7UTZQVqtD%2B4iDdtOCLqn8vBHDkr%2B5YPhl7mjnf83mzbJidaopX0FLkCO53djkNyB5nt317Zl643h8BLOKrLMlpxlTD8z53BBjqkAQEy2wL%2BopfR1DJFtxQrURcT2S2abDOZkttdrhZ5A%2B6nE79UR%2F7804g4NYqqr%2FIZQoLaWgQ2ZuTrZpIS423%2F1TpmJi6xrCwT2wauq%2Bop5oVZJFDLIVy60mnIH61Hvc8vKPQGb3SFcbtJHLzOyCLEIfuXzcngj4wxAwZVLcx2auMzF9uNqAVq9f8TqSKJOHtt8PUL4uKWwY5O0JnQf6cKl73TyY2u&X-Amz-Signature=8f891e6bd936cb471ea4ba8e6c65674f28c6b24652a055f513ee14a2bc71fb5d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WEQ4MMT%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T170130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPH8BG5ywlBf5Wo6ToEZZ27Dk8uNHtbNEpWmbIgh%2F3uAIhAO3GtILrl8a4LqcN%2F4GhaV4lcuSX470euMYoQtMnQHv5Kv8DCEoQABoMNjM3NDIzMTgzODA1IgxYx1r9EgmpXKDmde0q3APMGfICEWzO16BmB54fbliPZdg9%2B64yrj71EGMSa08Vc5d2Z0LXtsXiKieCdpRWxQrtGnfVqez3nvrZC%2F%2FJbb1TNirHus6X%2F9sIpJfXFHQa467R2NiQiq23z3RxU7FpPGKp3QfyYMfV%2FN6SLgGQ4UQ3YiYI98d5JQeixZFF7ulx%2BMabgDNJm7TOZ4pcxM94ypTV7osoCBWLQ7AdMSkOobtk%2BD%2BMfIWjtIKfEG5fAelo6x8gsiqS8Woy3i5jFHfc9o%2BKhdS6csA83crFYTkpwk0jLRb5hkwkLA8vqp%2FTZTz5fC99MpVIc19fFkzW6xN6MOyIdlzXNkklS1vp1n1golTXcMoPYfMSpowpn%2BtKTDHIIRGryzTzgzxWC9sg35rYGbqcAC4LZtKsuu8a1JxH4cG1TfEIvitOcOAhjcRbbc3RVw4EoqUALxYMMBjRkooRnXMXh%2BCLSfG9g%2BAYaIvF7H08kqWXfjqoXeYC%2BRyLvSse7%2BkulhZ5QOi2hgaytw6I7f6a1hmjbPoYlMaZD%2FYg7p8bOj4dn2H62XRcb7UTZQVqtD%2B4iDdtOCLqn8vBHDkr%2B5YPhl7mjnf83mzbJidaopX0FLkCO53djkNyB5nt317Zl643h8BLOKrLMlpxlTD8z53BBjqkAQEy2wL%2BopfR1DJFtxQrURcT2S2abDOZkttdrhZ5A%2B6nE79UR%2F7804g4NYqqr%2FIZQoLaWgQ2ZuTrZpIS423%2F1TpmJi6xrCwT2wauq%2Bop5oVZJFDLIVy60mnIH61Hvc8vKPQGb3SFcbtJHLzOyCLEIfuXzcngj4wxAwZVLcx2auMzF9uNqAVq9f8TqSKJOHtt8PUL4uKWwY5O0JnQf6cKl73TyY2u&X-Amz-Signature=e6661bd3198777a30b08d7bc3d6f68c6485629004a3bbfc4aef86786f0710098&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WEQ4MMT%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T170130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPH8BG5ywlBf5Wo6ToEZZ27Dk8uNHtbNEpWmbIgh%2F3uAIhAO3GtILrl8a4LqcN%2F4GhaV4lcuSX470euMYoQtMnQHv5Kv8DCEoQABoMNjM3NDIzMTgzODA1IgxYx1r9EgmpXKDmde0q3APMGfICEWzO16BmB54fbliPZdg9%2B64yrj71EGMSa08Vc5d2Z0LXtsXiKieCdpRWxQrtGnfVqez3nvrZC%2F%2FJbb1TNirHus6X%2F9sIpJfXFHQa467R2NiQiq23z3RxU7FpPGKp3QfyYMfV%2FN6SLgGQ4UQ3YiYI98d5JQeixZFF7ulx%2BMabgDNJm7TOZ4pcxM94ypTV7osoCBWLQ7AdMSkOobtk%2BD%2BMfIWjtIKfEG5fAelo6x8gsiqS8Woy3i5jFHfc9o%2BKhdS6csA83crFYTkpwk0jLRb5hkwkLA8vqp%2FTZTz5fC99MpVIc19fFkzW6xN6MOyIdlzXNkklS1vp1n1golTXcMoPYfMSpowpn%2BtKTDHIIRGryzTzgzxWC9sg35rYGbqcAC4LZtKsuu8a1JxH4cG1TfEIvitOcOAhjcRbbc3RVw4EoqUALxYMMBjRkooRnXMXh%2BCLSfG9g%2BAYaIvF7H08kqWXfjqoXeYC%2BRyLvSse7%2BkulhZ5QOi2hgaytw6I7f6a1hmjbPoYlMaZD%2FYg7p8bOj4dn2H62XRcb7UTZQVqtD%2B4iDdtOCLqn8vBHDkr%2B5YPhl7mjnf83mzbJidaopX0FLkCO53djkNyB5nt317Zl643h8BLOKrLMlpxlTD8z53BBjqkAQEy2wL%2BopfR1DJFtxQrURcT2S2abDOZkttdrhZ5A%2B6nE79UR%2F7804g4NYqqr%2FIZQoLaWgQ2ZuTrZpIS423%2F1TpmJi6xrCwT2wauq%2Bop5oVZJFDLIVy60mnIH61Hvc8vKPQGb3SFcbtJHLzOyCLEIfuXzcngj4wxAwZVLcx2auMzF9uNqAVq9f8TqSKJOHtt8PUL4uKWwY5O0JnQf6cKl73TyY2u&X-Amz-Signature=bf9bf51b23cbbcb264559018fac50a7159f28515cffaa1be9d0e1915ab955493&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WEQ4MMT%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T170130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPH8BG5ywlBf5Wo6ToEZZ27Dk8uNHtbNEpWmbIgh%2F3uAIhAO3GtILrl8a4LqcN%2F4GhaV4lcuSX470euMYoQtMnQHv5Kv8DCEoQABoMNjM3NDIzMTgzODA1IgxYx1r9EgmpXKDmde0q3APMGfICEWzO16BmB54fbliPZdg9%2B64yrj71EGMSa08Vc5d2Z0LXtsXiKieCdpRWxQrtGnfVqez3nvrZC%2F%2FJbb1TNirHus6X%2F9sIpJfXFHQa467R2NiQiq23z3RxU7FpPGKp3QfyYMfV%2FN6SLgGQ4UQ3YiYI98d5JQeixZFF7ulx%2BMabgDNJm7TOZ4pcxM94ypTV7osoCBWLQ7AdMSkOobtk%2BD%2BMfIWjtIKfEG5fAelo6x8gsiqS8Woy3i5jFHfc9o%2BKhdS6csA83crFYTkpwk0jLRb5hkwkLA8vqp%2FTZTz5fC99MpVIc19fFkzW6xN6MOyIdlzXNkklS1vp1n1golTXcMoPYfMSpowpn%2BtKTDHIIRGryzTzgzxWC9sg35rYGbqcAC4LZtKsuu8a1JxH4cG1TfEIvitOcOAhjcRbbc3RVw4EoqUALxYMMBjRkooRnXMXh%2BCLSfG9g%2BAYaIvF7H08kqWXfjqoXeYC%2BRyLvSse7%2BkulhZ5QOi2hgaytw6I7f6a1hmjbPoYlMaZD%2FYg7p8bOj4dn2H62XRcb7UTZQVqtD%2B4iDdtOCLqn8vBHDkr%2B5YPhl7mjnf83mzbJidaopX0FLkCO53djkNyB5nt317Zl643h8BLOKrLMlpxlTD8z53BBjqkAQEy2wL%2BopfR1DJFtxQrURcT2S2abDOZkttdrhZ5A%2B6nE79UR%2F7804g4NYqqr%2FIZQoLaWgQ2ZuTrZpIS423%2F1TpmJi6xrCwT2wauq%2Bop5oVZJFDLIVy60mnIH61Hvc8vKPQGb3SFcbtJHLzOyCLEIfuXzcngj4wxAwZVLcx2auMzF9uNqAVq9f8TqSKJOHtt8PUL4uKWwY5O0JnQf6cKl73TyY2u&X-Amz-Signature=3e735293e05785ebdc15ae6769a941151874eec0e3f0c295d900d03d6ed63f39&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WEQ4MMT%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T170130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPH8BG5ywlBf5Wo6ToEZZ27Dk8uNHtbNEpWmbIgh%2F3uAIhAO3GtILrl8a4LqcN%2F4GhaV4lcuSX470euMYoQtMnQHv5Kv8DCEoQABoMNjM3NDIzMTgzODA1IgxYx1r9EgmpXKDmde0q3APMGfICEWzO16BmB54fbliPZdg9%2B64yrj71EGMSa08Vc5d2Z0LXtsXiKieCdpRWxQrtGnfVqez3nvrZC%2F%2FJbb1TNirHus6X%2F9sIpJfXFHQa467R2NiQiq23z3RxU7FpPGKp3QfyYMfV%2FN6SLgGQ4UQ3YiYI98d5JQeixZFF7ulx%2BMabgDNJm7TOZ4pcxM94ypTV7osoCBWLQ7AdMSkOobtk%2BD%2BMfIWjtIKfEG5fAelo6x8gsiqS8Woy3i5jFHfc9o%2BKhdS6csA83crFYTkpwk0jLRb5hkwkLA8vqp%2FTZTz5fC99MpVIc19fFkzW6xN6MOyIdlzXNkklS1vp1n1golTXcMoPYfMSpowpn%2BtKTDHIIRGryzTzgzxWC9sg35rYGbqcAC4LZtKsuu8a1JxH4cG1TfEIvitOcOAhjcRbbc3RVw4EoqUALxYMMBjRkooRnXMXh%2BCLSfG9g%2BAYaIvF7H08kqWXfjqoXeYC%2BRyLvSse7%2BkulhZ5QOi2hgaytw6I7f6a1hmjbPoYlMaZD%2FYg7p8bOj4dn2H62XRcb7UTZQVqtD%2B4iDdtOCLqn8vBHDkr%2B5YPhl7mjnf83mzbJidaopX0FLkCO53djkNyB5nt317Zl643h8BLOKrLMlpxlTD8z53BBjqkAQEy2wL%2BopfR1DJFtxQrURcT2S2abDOZkttdrhZ5A%2B6nE79UR%2F7804g4NYqqr%2FIZQoLaWgQ2ZuTrZpIS423%2F1TpmJi6xrCwT2wauq%2Bop5oVZJFDLIVy60mnIH61Hvc8vKPQGb3SFcbtJHLzOyCLEIfuXzcngj4wxAwZVLcx2auMzF9uNqAVq9f8TqSKJOHtt8PUL4uKWwY5O0JnQf6cKl73TyY2u&X-Amz-Signature=ef340d879dfae8d775a1d6045ccd50e5daa2cc63535c4398776741e449e296fa&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WEQ4MMT%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T170130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPH8BG5ywlBf5Wo6ToEZZ27Dk8uNHtbNEpWmbIgh%2F3uAIhAO3GtILrl8a4LqcN%2F4GhaV4lcuSX470euMYoQtMnQHv5Kv8DCEoQABoMNjM3NDIzMTgzODA1IgxYx1r9EgmpXKDmde0q3APMGfICEWzO16BmB54fbliPZdg9%2B64yrj71EGMSa08Vc5d2Z0LXtsXiKieCdpRWxQrtGnfVqez3nvrZC%2F%2FJbb1TNirHus6X%2F9sIpJfXFHQa467R2NiQiq23z3RxU7FpPGKp3QfyYMfV%2FN6SLgGQ4UQ3YiYI98d5JQeixZFF7ulx%2BMabgDNJm7TOZ4pcxM94ypTV7osoCBWLQ7AdMSkOobtk%2BD%2BMfIWjtIKfEG5fAelo6x8gsiqS8Woy3i5jFHfc9o%2BKhdS6csA83crFYTkpwk0jLRb5hkwkLA8vqp%2FTZTz5fC99MpVIc19fFkzW6xN6MOyIdlzXNkklS1vp1n1golTXcMoPYfMSpowpn%2BtKTDHIIRGryzTzgzxWC9sg35rYGbqcAC4LZtKsuu8a1JxH4cG1TfEIvitOcOAhjcRbbc3RVw4EoqUALxYMMBjRkooRnXMXh%2BCLSfG9g%2BAYaIvF7H08kqWXfjqoXeYC%2BRyLvSse7%2BkulhZ5QOi2hgaytw6I7f6a1hmjbPoYlMaZD%2FYg7p8bOj4dn2H62XRcb7UTZQVqtD%2B4iDdtOCLqn8vBHDkr%2B5YPhl7mjnf83mzbJidaopX0FLkCO53djkNyB5nt317Zl643h8BLOKrLMlpxlTD8z53BBjqkAQEy2wL%2BopfR1DJFtxQrURcT2S2abDOZkttdrhZ5A%2B6nE79UR%2F7804g4NYqqr%2FIZQoLaWgQ2ZuTrZpIS423%2F1TpmJi6xrCwT2wauq%2Bop5oVZJFDLIVy60mnIH61Hvc8vKPQGb3SFcbtJHLzOyCLEIfuXzcngj4wxAwZVLcx2auMzF9uNqAVq9f8TqSKJOHtt8PUL4uKWwY5O0JnQf6cKl73TyY2u&X-Amz-Signature=e5a77ead7f49396148340df727e27a6ae680c1e1a23cb3b3d5fecd91421c8b65&X-Amz-SignedHeaders=host&x-id=GetObject)
