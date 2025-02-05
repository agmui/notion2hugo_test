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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCJDM5IG%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T090906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIHi60%2F3KxYX7QzpAXLw5sjduLw%2BimBESzWIpm65p2%2FtbAiBdoosZgTV0h5r9Py5AmBlh7gIPMvKmBGB44M1yJQdogCr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMk6SVZPllmnzV7DnrKtwDYbFdva%2FMwe4LXr5HAF3NUU538yC8hsayVXmDhQU2ShFTZqmdNvvKGLj1qtW7F47jAc2L2x3kZN5RUgzuBpddcadgSLivCISBpDahHHezejr2g1vk%2BGWQgmTBvo7JwqV%2B9pdjpe9WYe9pQAJe5Z1aygyYzo8%2FGb%2BRz%2F9YdP6OcsH1EkIUWv4oBZM%2BNUv59tuTnzd6k1pEDGnqZaKS%2BI4fESfrr9LadDmpoE4%2B2Nyhs904MicgHhk%2ByiVbuXpeTUP35%2FBEOyZ5z6CTV%2BHYI5VpKcJ%2BTAl8be8aWTIWKrx8otZND1MFb6LI1FjXTMgQlpJ4YPBRzVv%2FJ9FFuzpG6nB4qfSTF8lL6HWR45%2Fms4Xf9ej2nWPEjDTDcwEyYpxNL8JM66UMBc%2Bt9mabZ%2BEeHwpYYIfG1qa4hf9fIfaaQNHyAW5u6%2FGxbX93sCEX1QMzoIlWWdM0dpAU7cABBGwOYLf0bAQMZ8YU3aEYBPwwyMBsSvIqfHemGzg47HJw3rz7ZyYq2sSU6wkBBl8lUs%2FhfVu171RHmdhMM1fUOEEq%2F6UTmmsaBnqSw5Omrj08IPU2awbZxTlgTy3hwwnxU3FHkDRms4fTxNve%2F3CekfeENK2mNTc5eeaAYAKZ8YIsOmowydCMvQY6pgEBWHt1QnMKVr3VmN%2FjhXbSbSgmZQpmmQ7q1EGeJP7o5ucfRAtxodIABgzaSD7hy5%2B2NuCvPpHIJUjpjSlyjek5wSRvzggyjUypzJtg4v9Z%2BnNGcZXpHql1tjG5tN0Q8BkOIu8y%2BGNc9JjtS0i1vyb2BEZKybD8ReFCgowIwBCzOFEIHguxaCy3toA6LFds46yfgP3RakPBleuSmzbFozCoDNb3p5ZI&X-Amz-Signature=5ab2a3cd71a7dd375a749dc8ced0c89da0a4af0ca6c9615232c7f717fb0e15d5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCJDM5IG%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T090906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIHi60%2F3KxYX7QzpAXLw5sjduLw%2BimBESzWIpm65p2%2FtbAiBdoosZgTV0h5r9Py5AmBlh7gIPMvKmBGB44M1yJQdogCr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMk6SVZPllmnzV7DnrKtwDYbFdva%2FMwe4LXr5HAF3NUU538yC8hsayVXmDhQU2ShFTZqmdNvvKGLj1qtW7F47jAc2L2x3kZN5RUgzuBpddcadgSLivCISBpDahHHezejr2g1vk%2BGWQgmTBvo7JwqV%2B9pdjpe9WYe9pQAJe5Z1aygyYzo8%2FGb%2BRz%2F9YdP6OcsH1EkIUWv4oBZM%2BNUv59tuTnzd6k1pEDGnqZaKS%2BI4fESfrr9LadDmpoE4%2B2Nyhs904MicgHhk%2ByiVbuXpeTUP35%2FBEOyZ5z6CTV%2BHYI5VpKcJ%2BTAl8be8aWTIWKrx8otZND1MFb6LI1FjXTMgQlpJ4YPBRzVv%2FJ9FFuzpG6nB4qfSTF8lL6HWR45%2Fms4Xf9ej2nWPEjDTDcwEyYpxNL8JM66UMBc%2Bt9mabZ%2BEeHwpYYIfG1qa4hf9fIfaaQNHyAW5u6%2FGxbX93sCEX1QMzoIlWWdM0dpAU7cABBGwOYLf0bAQMZ8YU3aEYBPwwyMBsSvIqfHemGzg47HJw3rz7ZyYq2sSU6wkBBl8lUs%2FhfVu171RHmdhMM1fUOEEq%2F6UTmmsaBnqSw5Omrj08IPU2awbZxTlgTy3hwwnxU3FHkDRms4fTxNve%2F3CekfeENK2mNTc5eeaAYAKZ8YIsOmowydCMvQY6pgEBWHt1QnMKVr3VmN%2FjhXbSbSgmZQpmmQ7q1EGeJP7o5ucfRAtxodIABgzaSD7hy5%2B2NuCvPpHIJUjpjSlyjek5wSRvzggyjUypzJtg4v9Z%2BnNGcZXpHql1tjG5tN0Q8BkOIu8y%2BGNc9JjtS0i1vyb2BEZKybD8ReFCgowIwBCzOFEIHguxaCy3toA6LFds46yfgP3RakPBleuSmzbFozCoDNb3p5ZI&X-Amz-Signature=988204a8acd7d78d19f15af64a69116b6214bda0143db8263a5465f946e53e49&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCJDM5IG%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T090906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIHi60%2F3KxYX7QzpAXLw5sjduLw%2BimBESzWIpm65p2%2FtbAiBdoosZgTV0h5r9Py5AmBlh7gIPMvKmBGB44M1yJQdogCr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMk6SVZPllmnzV7DnrKtwDYbFdva%2FMwe4LXr5HAF3NUU538yC8hsayVXmDhQU2ShFTZqmdNvvKGLj1qtW7F47jAc2L2x3kZN5RUgzuBpddcadgSLivCISBpDahHHezejr2g1vk%2BGWQgmTBvo7JwqV%2B9pdjpe9WYe9pQAJe5Z1aygyYzo8%2FGb%2BRz%2F9YdP6OcsH1EkIUWv4oBZM%2BNUv59tuTnzd6k1pEDGnqZaKS%2BI4fESfrr9LadDmpoE4%2B2Nyhs904MicgHhk%2ByiVbuXpeTUP35%2FBEOyZ5z6CTV%2BHYI5VpKcJ%2BTAl8be8aWTIWKrx8otZND1MFb6LI1FjXTMgQlpJ4YPBRzVv%2FJ9FFuzpG6nB4qfSTF8lL6HWR45%2Fms4Xf9ej2nWPEjDTDcwEyYpxNL8JM66UMBc%2Bt9mabZ%2BEeHwpYYIfG1qa4hf9fIfaaQNHyAW5u6%2FGxbX93sCEX1QMzoIlWWdM0dpAU7cABBGwOYLf0bAQMZ8YU3aEYBPwwyMBsSvIqfHemGzg47HJw3rz7ZyYq2sSU6wkBBl8lUs%2FhfVu171RHmdhMM1fUOEEq%2F6UTmmsaBnqSw5Omrj08IPU2awbZxTlgTy3hwwnxU3FHkDRms4fTxNve%2F3CekfeENK2mNTc5eeaAYAKZ8YIsOmowydCMvQY6pgEBWHt1QnMKVr3VmN%2FjhXbSbSgmZQpmmQ7q1EGeJP7o5ucfRAtxodIABgzaSD7hy5%2B2NuCvPpHIJUjpjSlyjek5wSRvzggyjUypzJtg4v9Z%2BnNGcZXpHql1tjG5tN0Q8BkOIu8y%2BGNc9JjtS0i1vyb2BEZKybD8ReFCgowIwBCzOFEIHguxaCy3toA6LFds46yfgP3RakPBleuSmzbFozCoDNb3p5ZI&X-Amz-Signature=6256d73d6959ddc56b981194c10888013a0fe0220f04859439541dd39873a32d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCJDM5IG%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T090906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIHi60%2F3KxYX7QzpAXLw5sjduLw%2BimBESzWIpm65p2%2FtbAiBdoosZgTV0h5r9Py5AmBlh7gIPMvKmBGB44M1yJQdogCr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMk6SVZPllmnzV7DnrKtwDYbFdva%2FMwe4LXr5HAF3NUU538yC8hsayVXmDhQU2ShFTZqmdNvvKGLj1qtW7F47jAc2L2x3kZN5RUgzuBpddcadgSLivCISBpDahHHezejr2g1vk%2BGWQgmTBvo7JwqV%2B9pdjpe9WYe9pQAJe5Z1aygyYzo8%2FGb%2BRz%2F9YdP6OcsH1EkIUWv4oBZM%2BNUv59tuTnzd6k1pEDGnqZaKS%2BI4fESfrr9LadDmpoE4%2B2Nyhs904MicgHhk%2ByiVbuXpeTUP35%2FBEOyZ5z6CTV%2BHYI5VpKcJ%2BTAl8be8aWTIWKrx8otZND1MFb6LI1FjXTMgQlpJ4YPBRzVv%2FJ9FFuzpG6nB4qfSTF8lL6HWR45%2Fms4Xf9ej2nWPEjDTDcwEyYpxNL8JM66UMBc%2Bt9mabZ%2BEeHwpYYIfG1qa4hf9fIfaaQNHyAW5u6%2FGxbX93sCEX1QMzoIlWWdM0dpAU7cABBGwOYLf0bAQMZ8YU3aEYBPwwyMBsSvIqfHemGzg47HJw3rz7ZyYq2sSU6wkBBl8lUs%2FhfVu171RHmdhMM1fUOEEq%2F6UTmmsaBnqSw5Omrj08IPU2awbZxTlgTy3hwwnxU3FHkDRms4fTxNve%2F3CekfeENK2mNTc5eeaAYAKZ8YIsOmowydCMvQY6pgEBWHt1QnMKVr3VmN%2FjhXbSbSgmZQpmmQ7q1EGeJP7o5ucfRAtxodIABgzaSD7hy5%2B2NuCvPpHIJUjpjSlyjek5wSRvzggyjUypzJtg4v9Z%2BnNGcZXpHql1tjG5tN0Q8BkOIu8y%2BGNc9JjtS0i1vyb2BEZKybD8ReFCgowIwBCzOFEIHguxaCy3toA6LFds46yfgP3RakPBleuSmzbFozCoDNb3p5ZI&X-Amz-Signature=3ccdf436719ca61026954ccf73e27ff8ba9d58d7c3de2d7eb16241338307543e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCJDM5IG%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T090906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIHi60%2F3KxYX7QzpAXLw5sjduLw%2BimBESzWIpm65p2%2FtbAiBdoosZgTV0h5r9Py5AmBlh7gIPMvKmBGB44M1yJQdogCr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMk6SVZPllmnzV7DnrKtwDYbFdva%2FMwe4LXr5HAF3NUU538yC8hsayVXmDhQU2ShFTZqmdNvvKGLj1qtW7F47jAc2L2x3kZN5RUgzuBpddcadgSLivCISBpDahHHezejr2g1vk%2BGWQgmTBvo7JwqV%2B9pdjpe9WYe9pQAJe5Z1aygyYzo8%2FGb%2BRz%2F9YdP6OcsH1EkIUWv4oBZM%2BNUv59tuTnzd6k1pEDGnqZaKS%2BI4fESfrr9LadDmpoE4%2B2Nyhs904MicgHhk%2ByiVbuXpeTUP35%2FBEOyZ5z6CTV%2BHYI5VpKcJ%2BTAl8be8aWTIWKrx8otZND1MFb6LI1FjXTMgQlpJ4YPBRzVv%2FJ9FFuzpG6nB4qfSTF8lL6HWR45%2Fms4Xf9ej2nWPEjDTDcwEyYpxNL8JM66UMBc%2Bt9mabZ%2BEeHwpYYIfG1qa4hf9fIfaaQNHyAW5u6%2FGxbX93sCEX1QMzoIlWWdM0dpAU7cABBGwOYLf0bAQMZ8YU3aEYBPwwyMBsSvIqfHemGzg47HJw3rz7ZyYq2sSU6wkBBl8lUs%2FhfVu171RHmdhMM1fUOEEq%2F6UTmmsaBnqSw5Omrj08IPU2awbZxTlgTy3hwwnxU3FHkDRms4fTxNve%2F3CekfeENK2mNTc5eeaAYAKZ8YIsOmowydCMvQY6pgEBWHt1QnMKVr3VmN%2FjhXbSbSgmZQpmmQ7q1EGeJP7o5ucfRAtxodIABgzaSD7hy5%2B2NuCvPpHIJUjpjSlyjek5wSRvzggyjUypzJtg4v9Z%2BnNGcZXpHql1tjG5tN0Q8BkOIu8y%2BGNc9JjtS0i1vyb2BEZKybD8ReFCgowIwBCzOFEIHguxaCy3toA6LFds46yfgP3RakPBleuSmzbFozCoDNb3p5ZI&X-Amz-Signature=477c9d75923b993690934c439a05024b783e7799560bcedd0fcefe14b750ca03&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCJDM5IG%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T090906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIHi60%2F3KxYX7QzpAXLw5sjduLw%2BimBESzWIpm65p2%2FtbAiBdoosZgTV0h5r9Py5AmBlh7gIPMvKmBGB44M1yJQdogCr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMk6SVZPllmnzV7DnrKtwDYbFdva%2FMwe4LXr5HAF3NUU538yC8hsayVXmDhQU2ShFTZqmdNvvKGLj1qtW7F47jAc2L2x3kZN5RUgzuBpddcadgSLivCISBpDahHHezejr2g1vk%2BGWQgmTBvo7JwqV%2B9pdjpe9WYe9pQAJe5Z1aygyYzo8%2FGb%2BRz%2F9YdP6OcsH1EkIUWv4oBZM%2BNUv59tuTnzd6k1pEDGnqZaKS%2BI4fESfrr9LadDmpoE4%2B2Nyhs904MicgHhk%2ByiVbuXpeTUP35%2FBEOyZ5z6CTV%2BHYI5VpKcJ%2BTAl8be8aWTIWKrx8otZND1MFb6LI1FjXTMgQlpJ4YPBRzVv%2FJ9FFuzpG6nB4qfSTF8lL6HWR45%2Fms4Xf9ej2nWPEjDTDcwEyYpxNL8JM66UMBc%2Bt9mabZ%2BEeHwpYYIfG1qa4hf9fIfaaQNHyAW5u6%2FGxbX93sCEX1QMzoIlWWdM0dpAU7cABBGwOYLf0bAQMZ8YU3aEYBPwwyMBsSvIqfHemGzg47HJw3rz7ZyYq2sSU6wkBBl8lUs%2FhfVu171RHmdhMM1fUOEEq%2F6UTmmsaBnqSw5Omrj08IPU2awbZxTlgTy3hwwnxU3FHkDRms4fTxNve%2F3CekfeENK2mNTc5eeaAYAKZ8YIsOmowydCMvQY6pgEBWHt1QnMKVr3VmN%2FjhXbSbSgmZQpmmQ7q1EGeJP7o5ucfRAtxodIABgzaSD7hy5%2B2NuCvPpHIJUjpjSlyjek5wSRvzggyjUypzJtg4v9Z%2BnNGcZXpHql1tjG5tN0Q8BkOIu8y%2BGNc9JjtS0i1vyb2BEZKybD8ReFCgowIwBCzOFEIHguxaCy3toA6LFds46yfgP3RakPBleuSmzbFozCoDNb3p5ZI&X-Amz-Signature=38fa10d4ce03eb99b711a5bd5808e413b80606a081edce0b0bf26bf94a17a148&X-Amz-SignedHeaders=host&x-id=GetObject)
