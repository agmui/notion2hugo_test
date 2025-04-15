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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B4CDBY6%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWeR%2BoMJTQ1i2lUvSeST%2BXfLUSiC4Hfo%2FOAEkJN2YILQIhALsNJ%2FulzAK7Q%2FyaxH%2FrQ34EG3gFrr9ljvUyw1o638KvKv8DCDAQABoMNjM3NDIzMTgzODA1IgyziHPj8ISfd0Ygef0q3ANSJnde7Zsfc6TMHSL8vkukaLh242QpwOuHHOIgT%2FEeaFHkCTCBqcDDyHnywct%2Brmm%2B7194TYCCYP0DNw67zIZvnYy0mL5hLey3RuffUykDXV7b6b0%2Fu5CMBSS45pxqm0XBgqpQbqcUwmvpw7UwYH9Znq7MLXfcJoFS%2BwNhjsyfLut58djix5ex5kpG5PLyQYVlfinB%2FY1Zeoz6%2BPpNxMYXmL1pX%2Fz8NbXoE9aHWZBnhSclsS2kf2ORJF%2BKmWA9V4pnGLmwb%2BfLc2wzUcDhbn3zwT0K%2FgAKp8vs3GJGuGp%2BRiknZCjL%2FQ6AHmceBCofIZjXXAO5qRd3uonBuYdO8VRQOH11WyQzRyM7cvHC%2BGO8bpl5R5yKEE6e78cYB0KGmFRHnTFvIjPUnQipxwqv1tVGCPrzVK94zrEvhAMDziJcE%2B6nPuCAl6hxStAOH13bbLhzze7noA3N7PYfj57iZJXrlMYjtjczECpvKP2GZh8kjb%2FNyOTmcK%2F%2FSYd6rQaE27Kh7QVRYpjgG3fCjp1N7G2appJoeEML0GZ%2FAYFTXlEEfxe6P3sJ7BlxWFOKEATAMcn4QlEtUl0ddPEMqfKzBSx21lsulcc%2Fz1OxDstT1fRa4q4HTmNHHibyLQJthzCP3fm%2FBjqkATtN%2F2CL6F7KuyxYmPLpfUo1e4nz%2Fx6NutS3EHf7tnh%2BgqzDq4VPwew21gq8H0k6hrQIUftUr4ncT%2FK022D0rU68Y0W2wpBi8W2Ool%2FHkR1Kq6Fx4n1Ak%2BSEyhOrs3G3ud%2F4OX%2FZ9Axbh90ZopcnPTsvo7XMDb4DmIyJhnqwVfwmC9OO2Uigwaaq%2BL6VItIfempUWrToHRO17%2FTNTH2mNRuWyN%2F0&X-Amz-Signature=67bb0eaa84a0607a27ddb2407e00ecf3e3164a2d6ec69d92ad24f6fb90b6536e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B4CDBY6%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWeR%2BoMJTQ1i2lUvSeST%2BXfLUSiC4Hfo%2FOAEkJN2YILQIhALsNJ%2FulzAK7Q%2FyaxH%2FrQ34EG3gFrr9ljvUyw1o638KvKv8DCDAQABoMNjM3NDIzMTgzODA1IgyziHPj8ISfd0Ygef0q3ANSJnde7Zsfc6TMHSL8vkukaLh242QpwOuHHOIgT%2FEeaFHkCTCBqcDDyHnywct%2Brmm%2B7194TYCCYP0DNw67zIZvnYy0mL5hLey3RuffUykDXV7b6b0%2Fu5CMBSS45pxqm0XBgqpQbqcUwmvpw7UwYH9Znq7MLXfcJoFS%2BwNhjsyfLut58djix5ex5kpG5PLyQYVlfinB%2FY1Zeoz6%2BPpNxMYXmL1pX%2Fz8NbXoE9aHWZBnhSclsS2kf2ORJF%2BKmWA9V4pnGLmwb%2BfLc2wzUcDhbn3zwT0K%2FgAKp8vs3GJGuGp%2BRiknZCjL%2FQ6AHmceBCofIZjXXAO5qRd3uonBuYdO8VRQOH11WyQzRyM7cvHC%2BGO8bpl5R5yKEE6e78cYB0KGmFRHnTFvIjPUnQipxwqv1tVGCPrzVK94zrEvhAMDziJcE%2B6nPuCAl6hxStAOH13bbLhzze7noA3N7PYfj57iZJXrlMYjtjczECpvKP2GZh8kjb%2FNyOTmcK%2F%2FSYd6rQaE27Kh7QVRYpjgG3fCjp1N7G2appJoeEML0GZ%2FAYFTXlEEfxe6P3sJ7BlxWFOKEATAMcn4QlEtUl0ddPEMqfKzBSx21lsulcc%2Fz1OxDstT1fRa4q4HTmNHHibyLQJthzCP3fm%2FBjqkATtN%2F2CL6F7KuyxYmPLpfUo1e4nz%2Fx6NutS3EHf7tnh%2BgqzDq4VPwew21gq8H0k6hrQIUftUr4ncT%2FK022D0rU68Y0W2wpBi8W2Ool%2FHkR1Kq6Fx4n1Ak%2BSEyhOrs3G3ud%2F4OX%2FZ9Axbh90ZopcnPTsvo7XMDb4DmIyJhnqwVfwmC9OO2Uigwaaq%2BL6VItIfempUWrToHRO17%2FTNTH2mNRuWyN%2F0&X-Amz-Signature=40139674330af6c283e859f7c0bbfd4d11c09ea28900e089218d96b8c9f2a44f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B4CDBY6%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWeR%2BoMJTQ1i2lUvSeST%2BXfLUSiC4Hfo%2FOAEkJN2YILQIhALsNJ%2FulzAK7Q%2FyaxH%2FrQ34EG3gFrr9ljvUyw1o638KvKv8DCDAQABoMNjM3NDIzMTgzODA1IgyziHPj8ISfd0Ygef0q3ANSJnde7Zsfc6TMHSL8vkukaLh242QpwOuHHOIgT%2FEeaFHkCTCBqcDDyHnywct%2Brmm%2B7194TYCCYP0DNw67zIZvnYy0mL5hLey3RuffUykDXV7b6b0%2Fu5CMBSS45pxqm0XBgqpQbqcUwmvpw7UwYH9Znq7MLXfcJoFS%2BwNhjsyfLut58djix5ex5kpG5PLyQYVlfinB%2FY1Zeoz6%2BPpNxMYXmL1pX%2Fz8NbXoE9aHWZBnhSclsS2kf2ORJF%2BKmWA9V4pnGLmwb%2BfLc2wzUcDhbn3zwT0K%2FgAKp8vs3GJGuGp%2BRiknZCjL%2FQ6AHmceBCofIZjXXAO5qRd3uonBuYdO8VRQOH11WyQzRyM7cvHC%2BGO8bpl5R5yKEE6e78cYB0KGmFRHnTFvIjPUnQipxwqv1tVGCPrzVK94zrEvhAMDziJcE%2B6nPuCAl6hxStAOH13bbLhzze7noA3N7PYfj57iZJXrlMYjtjczECpvKP2GZh8kjb%2FNyOTmcK%2F%2FSYd6rQaE27Kh7QVRYpjgG3fCjp1N7G2appJoeEML0GZ%2FAYFTXlEEfxe6P3sJ7BlxWFOKEATAMcn4QlEtUl0ddPEMqfKzBSx21lsulcc%2Fz1OxDstT1fRa4q4HTmNHHibyLQJthzCP3fm%2FBjqkATtN%2F2CL6F7KuyxYmPLpfUo1e4nz%2Fx6NutS3EHf7tnh%2BgqzDq4VPwew21gq8H0k6hrQIUftUr4ncT%2FK022D0rU68Y0W2wpBi8W2Ool%2FHkR1Kq6Fx4n1Ak%2BSEyhOrs3G3ud%2F4OX%2FZ9Axbh90ZopcnPTsvo7XMDb4DmIyJhnqwVfwmC9OO2Uigwaaq%2BL6VItIfempUWrToHRO17%2FTNTH2mNRuWyN%2F0&X-Amz-Signature=3525781340d794e07c24f63540cb0ecb3ef44763137182f88572274984afde61&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B4CDBY6%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWeR%2BoMJTQ1i2lUvSeST%2BXfLUSiC4Hfo%2FOAEkJN2YILQIhALsNJ%2FulzAK7Q%2FyaxH%2FrQ34EG3gFrr9ljvUyw1o638KvKv8DCDAQABoMNjM3NDIzMTgzODA1IgyziHPj8ISfd0Ygef0q3ANSJnde7Zsfc6TMHSL8vkukaLh242QpwOuHHOIgT%2FEeaFHkCTCBqcDDyHnywct%2Brmm%2B7194TYCCYP0DNw67zIZvnYy0mL5hLey3RuffUykDXV7b6b0%2Fu5CMBSS45pxqm0XBgqpQbqcUwmvpw7UwYH9Znq7MLXfcJoFS%2BwNhjsyfLut58djix5ex5kpG5PLyQYVlfinB%2FY1Zeoz6%2BPpNxMYXmL1pX%2Fz8NbXoE9aHWZBnhSclsS2kf2ORJF%2BKmWA9V4pnGLmwb%2BfLc2wzUcDhbn3zwT0K%2FgAKp8vs3GJGuGp%2BRiknZCjL%2FQ6AHmceBCofIZjXXAO5qRd3uonBuYdO8VRQOH11WyQzRyM7cvHC%2BGO8bpl5R5yKEE6e78cYB0KGmFRHnTFvIjPUnQipxwqv1tVGCPrzVK94zrEvhAMDziJcE%2B6nPuCAl6hxStAOH13bbLhzze7noA3N7PYfj57iZJXrlMYjtjczECpvKP2GZh8kjb%2FNyOTmcK%2F%2FSYd6rQaE27Kh7QVRYpjgG3fCjp1N7G2appJoeEML0GZ%2FAYFTXlEEfxe6P3sJ7BlxWFOKEATAMcn4QlEtUl0ddPEMqfKzBSx21lsulcc%2Fz1OxDstT1fRa4q4HTmNHHibyLQJthzCP3fm%2FBjqkATtN%2F2CL6F7KuyxYmPLpfUo1e4nz%2Fx6NutS3EHf7tnh%2BgqzDq4VPwew21gq8H0k6hrQIUftUr4ncT%2FK022D0rU68Y0W2wpBi8W2Ool%2FHkR1Kq6Fx4n1Ak%2BSEyhOrs3G3ud%2F4OX%2FZ9Axbh90ZopcnPTsvo7XMDb4DmIyJhnqwVfwmC9OO2Uigwaaq%2BL6VItIfempUWrToHRO17%2FTNTH2mNRuWyN%2F0&X-Amz-Signature=0d2428f4daab8910707823a59435468f2c52185543b83d5c9c945ce3317f96c6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B4CDBY6%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWeR%2BoMJTQ1i2lUvSeST%2BXfLUSiC4Hfo%2FOAEkJN2YILQIhALsNJ%2FulzAK7Q%2FyaxH%2FrQ34EG3gFrr9ljvUyw1o638KvKv8DCDAQABoMNjM3NDIzMTgzODA1IgyziHPj8ISfd0Ygef0q3ANSJnde7Zsfc6TMHSL8vkukaLh242QpwOuHHOIgT%2FEeaFHkCTCBqcDDyHnywct%2Brmm%2B7194TYCCYP0DNw67zIZvnYy0mL5hLey3RuffUykDXV7b6b0%2Fu5CMBSS45pxqm0XBgqpQbqcUwmvpw7UwYH9Znq7MLXfcJoFS%2BwNhjsyfLut58djix5ex5kpG5PLyQYVlfinB%2FY1Zeoz6%2BPpNxMYXmL1pX%2Fz8NbXoE9aHWZBnhSclsS2kf2ORJF%2BKmWA9V4pnGLmwb%2BfLc2wzUcDhbn3zwT0K%2FgAKp8vs3GJGuGp%2BRiknZCjL%2FQ6AHmceBCofIZjXXAO5qRd3uonBuYdO8VRQOH11WyQzRyM7cvHC%2BGO8bpl5R5yKEE6e78cYB0KGmFRHnTFvIjPUnQipxwqv1tVGCPrzVK94zrEvhAMDziJcE%2B6nPuCAl6hxStAOH13bbLhzze7noA3N7PYfj57iZJXrlMYjtjczECpvKP2GZh8kjb%2FNyOTmcK%2F%2FSYd6rQaE27Kh7QVRYpjgG3fCjp1N7G2appJoeEML0GZ%2FAYFTXlEEfxe6P3sJ7BlxWFOKEATAMcn4QlEtUl0ddPEMqfKzBSx21lsulcc%2Fz1OxDstT1fRa4q4HTmNHHibyLQJthzCP3fm%2FBjqkATtN%2F2CL6F7KuyxYmPLpfUo1e4nz%2Fx6NutS3EHf7tnh%2BgqzDq4VPwew21gq8H0k6hrQIUftUr4ncT%2FK022D0rU68Y0W2wpBi8W2Ool%2FHkR1Kq6Fx4n1Ak%2BSEyhOrs3G3ud%2F4OX%2FZ9Axbh90ZopcnPTsvo7XMDb4DmIyJhnqwVfwmC9OO2Uigwaaq%2BL6VItIfempUWrToHRO17%2FTNTH2mNRuWyN%2F0&X-Amz-Signature=1e68bd619ff5291b865522f6e0698aa99d9700ca89978ea9c86d8a67d5bbd83d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B4CDBY6%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWeR%2BoMJTQ1i2lUvSeST%2BXfLUSiC4Hfo%2FOAEkJN2YILQIhALsNJ%2FulzAK7Q%2FyaxH%2FrQ34EG3gFrr9ljvUyw1o638KvKv8DCDAQABoMNjM3NDIzMTgzODA1IgyziHPj8ISfd0Ygef0q3ANSJnde7Zsfc6TMHSL8vkukaLh242QpwOuHHOIgT%2FEeaFHkCTCBqcDDyHnywct%2Brmm%2B7194TYCCYP0DNw67zIZvnYy0mL5hLey3RuffUykDXV7b6b0%2Fu5CMBSS45pxqm0XBgqpQbqcUwmvpw7UwYH9Znq7MLXfcJoFS%2BwNhjsyfLut58djix5ex5kpG5PLyQYVlfinB%2FY1Zeoz6%2BPpNxMYXmL1pX%2Fz8NbXoE9aHWZBnhSclsS2kf2ORJF%2BKmWA9V4pnGLmwb%2BfLc2wzUcDhbn3zwT0K%2FgAKp8vs3GJGuGp%2BRiknZCjL%2FQ6AHmceBCofIZjXXAO5qRd3uonBuYdO8VRQOH11WyQzRyM7cvHC%2BGO8bpl5R5yKEE6e78cYB0KGmFRHnTFvIjPUnQipxwqv1tVGCPrzVK94zrEvhAMDziJcE%2B6nPuCAl6hxStAOH13bbLhzze7noA3N7PYfj57iZJXrlMYjtjczECpvKP2GZh8kjb%2FNyOTmcK%2F%2FSYd6rQaE27Kh7QVRYpjgG3fCjp1N7G2appJoeEML0GZ%2FAYFTXlEEfxe6P3sJ7BlxWFOKEATAMcn4QlEtUl0ddPEMqfKzBSx21lsulcc%2Fz1OxDstT1fRa4q4HTmNHHibyLQJthzCP3fm%2FBjqkATtN%2F2CL6F7KuyxYmPLpfUo1e4nz%2Fx6NutS3EHf7tnh%2BgqzDq4VPwew21gq8H0k6hrQIUftUr4ncT%2FK022D0rU68Y0W2wpBi8W2Ool%2FHkR1Kq6Fx4n1Ak%2BSEyhOrs3G3ud%2F4OX%2FZ9Axbh90ZopcnPTsvo7XMDb4DmIyJhnqwVfwmC9OO2Uigwaaq%2BL6VItIfempUWrToHRO17%2FTNTH2mNRuWyN%2F0&X-Amz-Signature=94b62333df7a5f0ff5a80481295b2826375b39d5e9f66472633b016f19e7f1cd&X-Amz-SignedHeaders=host&x-id=GetObject)
