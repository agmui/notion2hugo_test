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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJWNP3CO%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T034900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCID5q6n76PEdHQFolo6zRCTql5mu28K19raCSu3KQfAS8AiB0AHg0Ae0SiAT6oZDIU%2B4%2B9XRiPkn6xbcMPhR5b8yXvyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BpjAYOnUBaeronlGKtwDzpeCq2xXkKCKY847q1t%2FaNPVMoSK0VrW1R2RZTCT%2BGuVNoFSdH%2BJ2gklyOWkqORdE2uH1xXRddrnSJ%2BNlcP5zYOJT89JoZC1PXa43M2dG%2BcT3IuB4WIwrDnW835AQoSjA1t7k1H62YwC8kcrL%2FakEhS9kKHp0XbEH6gHERlSmajNhWSSHx2L01zREkesOJQNJGJnPR4ppuncv1jSKMo3c3N3qtDv16vHZ%2FBhVmfbGtFDiXFRtWkf2xMi%2BU%2Fnt6U3gKCptRguxeeNAyEwo5YaOA9ETkjTqC6OZNWwmk5Zy3CEbK1Pv20TqjQZ6KTdZZVyr4fY%2FH1JHmUurk2fquO609x%2FGP5xHUtBAigcA5%2BxmDjoBW%2B1PF0XgQO4pza8CxJMiA5HY48m%2F3kMagpCJyzIUG8xTEWifQ4wdC39XXc7M0FCE5cIVqefswC15dgbx9iugFdCyQyBTp26LuFadn3e1L9ldL7qF64I5pBZG4xkp%2FSuFO9zj4spwAoTxcGgGCoK0g0NS1ca0YZCFC8y61AGyH9UA3Cf9fXSF1OeHQnWrPd1SlKYcKibvQWgPiCO3alpzZysC93bZP5FPEUe%2Fnu2%2BgtPqr776r0IaO7BwJWmIGoVPg%2F1JnFPdrpf4mQwhpfjwgY6pgGHvA8y67F6ANjrZvpmG64u78Vrnn91tfle8Jtw6KV0BDX8L%2FTdo9ubPWIq4sAAKZBxQvupPE%2BX%2B6Y9MrDN%2BCF18VWWoa5R%2F9cGshYop8h%2FR4KzC7O3e2NrScqeGVg6PJzuBuQ0RYVlP24jCfg5%2BgWAY4omAKRi%2FW5UyooMQZ2QiY%2BKWc71VLxp2AWVXoa7D4HQN%2FzmgNjkoncjr6w7ZV3cUdZ8dDfP&X-Amz-Signature=2416de651a2ca537c1ce034efee8d1a16e8b65ac259d7054c399fed6e990594a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJWNP3CO%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T034900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCID5q6n76PEdHQFolo6zRCTql5mu28K19raCSu3KQfAS8AiB0AHg0Ae0SiAT6oZDIU%2B4%2B9XRiPkn6xbcMPhR5b8yXvyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BpjAYOnUBaeronlGKtwDzpeCq2xXkKCKY847q1t%2FaNPVMoSK0VrW1R2RZTCT%2BGuVNoFSdH%2BJ2gklyOWkqORdE2uH1xXRddrnSJ%2BNlcP5zYOJT89JoZC1PXa43M2dG%2BcT3IuB4WIwrDnW835AQoSjA1t7k1H62YwC8kcrL%2FakEhS9kKHp0XbEH6gHERlSmajNhWSSHx2L01zREkesOJQNJGJnPR4ppuncv1jSKMo3c3N3qtDv16vHZ%2FBhVmfbGtFDiXFRtWkf2xMi%2BU%2Fnt6U3gKCptRguxeeNAyEwo5YaOA9ETkjTqC6OZNWwmk5Zy3CEbK1Pv20TqjQZ6KTdZZVyr4fY%2FH1JHmUurk2fquO609x%2FGP5xHUtBAigcA5%2BxmDjoBW%2B1PF0XgQO4pza8CxJMiA5HY48m%2F3kMagpCJyzIUG8xTEWifQ4wdC39XXc7M0FCE5cIVqefswC15dgbx9iugFdCyQyBTp26LuFadn3e1L9ldL7qF64I5pBZG4xkp%2FSuFO9zj4spwAoTxcGgGCoK0g0NS1ca0YZCFC8y61AGyH9UA3Cf9fXSF1OeHQnWrPd1SlKYcKibvQWgPiCO3alpzZysC93bZP5FPEUe%2Fnu2%2BgtPqr776r0IaO7BwJWmIGoVPg%2F1JnFPdrpf4mQwhpfjwgY6pgGHvA8y67F6ANjrZvpmG64u78Vrnn91tfle8Jtw6KV0BDX8L%2FTdo9ubPWIq4sAAKZBxQvupPE%2BX%2B6Y9MrDN%2BCF18VWWoa5R%2F9cGshYop8h%2FR4KzC7O3e2NrScqeGVg6PJzuBuQ0RYVlP24jCfg5%2BgWAY4omAKRi%2FW5UyooMQZ2QiY%2BKWc71VLxp2AWVXoa7D4HQN%2FzmgNjkoncjr6w7ZV3cUdZ8dDfP&X-Amz-Signature=6fb93a593267b3c5914c663a9cd5f54ae66f81cccd552f8ce2991c746f317062&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJWNP3CO%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T034900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCID5q6n76PEdHQFolo6zRCTql5mu28K19raCSu3KQfAS8AiB0AHg0Ae0SiAT6oZDIU%2B4%2B9XRiPkn6xbcMPhR5b8yXvyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BpjAYOnUBaeronlGKtwDzpeCq2xXkKCKY847q1t%2FaNPVMoSK0VrW1R2RZTCT%2BGuVNoFSdH%2BJ2gklyOWkqORdE2uH1xXRddrnSJ%2BNlcP5zYOJT89JoZC1PXa43M2dG%2BcT3IuB4WIwrDnW835AQoSjA1t7k1H62YwC8kcrL%2FakEhS9kKHp0XbEH6gHERlSmajNhWSSHx2L01zREkesOJQNJGJnPR4ppuncv1jSKMo3c3N3qtDv16vHZ%2FBhVmfbGtFDiXFRtWkf2xMi%2BU%2Fnt6U3gKCptRguxeeNAyEwo5YaOA9ETkjTqC6OZNWwmk5Zy3CEbK1Pv20TqjQZ6KTdZZVyr4fY%2FH1JHmUurk2fquO609x%2FGP5xHUtBAigcA5%2BxmDjoBW%2B1PF0XgQO4pza8CxJMiA5HY48m%2F3kMagpCJyzIUG8xTEWifQ4wdC39XXc7M0FCE5cIVqefswC15dgbx9iugFdCyQyBTp26LuFadn3e1L9ldL7qF64I5pBZG4xkp%2FSuFO9zj4spwAoTxcGgGCoK0g0NS1ca0YZCFC8y61AGyH9UA3Cf9fXSF1OeHQnWrPd1SlKYcKibvQWgPiCO3alpzZysC93bZP5FPEUe%2Fnu2%2BgtPqr776r0IaO7BwJWmIGoVPg%2F1JnFPdrpf4mQwhpfjwgY6pgGHvA8y67F6ANjrZvpmG64u78Vrnn91tfle8Jtw6KV0BDX8L%2FTdo9ubPWIq4sAAKZBxQvupPE%2BX%2B6Y9MrDN%2BCF18VWWoa5R%2F9cGshYop8h%2FR4KzC7O3e2NrScqeGVg6PJzuBuQ0RYVlP24jCfg5%2BgWAY4omAKRi%2FW5UyooMQZ2QiY%2BKWc71VLxp2AWVXoa7D4HQN%2FzmgNjkoncjr6w7ZV3cUdZ8dDfP&X-Amz-Signature=0a380b733a21169bdd0f8031c1fd32b985bf5c5aee20f5007122e935328f673b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJWNP3CO%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T034900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCID5q6n76PEdHQFolo6zRCTql5mu28K19raCSu3KQfAS8AiB0AHg0Ae0SiAT6oZDIU%2B4%2B9XRiPkn6xbcMPhR5b8yXvyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BpjAYOnUBaeronlGKtwDzpeCq2xXkKCKY847q1t%2FaNPVMoSK0VrW1R2RZTCT%2BGuVNoFSdH%2BJ2gklyOWkqORdE2uH1xXRddrnSJ%2BNlcP5zYOJT89JoZC1PXa43M2dG%2BcT3IuB4WIwrDnW835AQoSjA1t7k1H62YwC8kcrL%2FakEhS9kKHp0XbEH6gHERlSmajNhWSSHx2L01zREkesOJQNJGJnPR4ppuncv1jSKMo3c3N3qtDv16vHZ%2FBhVmfbGtFDiXFRtWkf2xMi%2BU%2Fnt6U3gKCptRguxeeNAyEwo5YaOA9ETkjTqC6OZNWwmk5Zy3CEbK1Pv20TqjQZ6KTdZZVyr4fY%2FH1JHmUurk2fquO609x%2FGP5xHUtBAigcA5%2BxmDjoBW%2B1PF0XgQO4pza8CxJMiA5HY48m%2F3kMagpCJyzIUG8xTEWifQ4wdC39XXc7M0FCE5cIVqefswC15dgbx9iugFdCyQyBTp26LuFadn3e1L9ldL7qF64I5pBZG4xkp%2FSuFO9zj4spwAoTxcGgGCoK0g0NS1ca0YZCFC8y61AGyH9UA3Cf9fXSF1OeHQnWrPd1SlKYcKibvQWgPiCO3alpzZysC93bZP5FPEUe%2Fnu2%2BgtPqr776r0IaO7BwJWmIGoVPg%2F1JnFPdrpf4mQwhpfjwgY6pgGHvA8y67F6ANjrZvpmG64u78Vrnn91tfle8Jtw6KV0BDX8L%2FTdo9ubPWIq4sAAKZBxQvupPE%2BX%2B6Y9MrDN%2BCF18VWWoa5R%2F9cGshYop8h%2FR4KzC7O3e2NrScqeGVg6PJzuBuQ0RYVlP24jCfg5%2BgWAY4omAKRi%2FW5UyooMQZ2QiY%2BKWc71VLxp2AWVXoa7D4HQN%2FzmgNjkoncjr6w7ZV3cUdZ8dDfP&X-Amz-Signature=cd2ac2a7a2d961a323e46489c090b753d081449953f9805347a7d4fa0909e7c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJWNP3CO%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T034900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCID5q6n76PEdHQFolo6zRCTql5mu28K19raCSu3KQfAS8AiB0AHg0Ae0SiAT6oZDIU%2B4%2B9XRiPkn6xbcMPhR5b8yXvyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BpjAYOnUBaeronlGKtwDzpeCq2xXkKCKY847q1t%2FaNPVMoSK0VrW1R2RZTCT%2BGuVNoFSdH%2BJ2gklyOWkqORdE2uH1xXRddrnSJ%2BNlcP5zYOJT89JoZC1PXa43M2dG%2BcT3IuB4WIwrDnW835AQoSjA1t7k1H62YwC8kcrL%2FakEhS9kKHp0XbEH6gHERlSmajNhWSSHx2L01zREkesOJQNJGJnPR4ppuncv1jSKMo3c3N3qtDv16vHZ%2FBhVmfbGtFDiXFRtWkf2xMi%2BU%2Fnt6U3gKCptRguxeeNAyEwo5YaOA9ETkjTqC6OZNWwmk5Zy3CEbK1Pv20TqjQZ6KTdZZVyr4fY%2FH1JHmUurk2fquO609x%2FGP5xHUtBAigcA5%2BxmDjoBW%2B1PF0XgQO4pza8CxJMiA5HY48m%2F3kMagpCJyzIUG8xTEWifQ4wdC39XXc7M0FCE5cIVqefswC15dgbx9iugFdCyQyBTp26LuFadn3e1L9ldL7qF64I5pBZG4xkp%2FSuFO9zj4spwAoTxcGgGCoK0g0NS1ca0YZCFC8y61AGyH9UA3Cf9fXSF1OeHQnWrPd1SlKYcKibvQWgPiCO3alpzZysC93bZP5FPEUe%2Fnu2%2BgtPqr776r0IaO7BwJWmIGoVPg%2F1JnFPdrpf4mQwhpfjwgY6pgGHvA8y67F6ANjrZvpmG64u78Vrnn91tfle8Jtw6KV0BDX8L%2FTdo9ubPWIq4sAAKZBxQvupPE%2BX%2B6Y9MrDN%2BCF18VWWoa5R%2F9cGshYop8h%2FR4KzC7O3e2NrScqeGVg6PJzuBuQ0RYVlP24jCfg5%2BgWAY4omAKRi%2FW5UyooMQZ2QiY%2BKWc71VLxp2AWVXoa7D4HQN%2FzmgNjkoncjr6w7ZV3cUdZ8dDfP&X-Amz-Signature=788b2b44ccb21520c59f645c4525183ed936f3978f9011e90b1a819253d902a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJWNP3CO%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T034900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCID5q6n76PEdHQFolo6zRCTql5mu28K19raCSu3KQfAS8AiB0AHg0Ae0SiAT6oZDIU%2B4%2B9XRiPkn6xbcMPhR5b8yXvyqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BpjAYOnUBaeronlGKtwDzpeCq2xXkKCKY847q1t%2FaNPVMoSK0VrW1R2RZTCT%2BGuVNoFSdH%2BJ2gklyOWkqORdE2uH1xXRddrnSJ%2BNlcP5zYOJT89JoZC1PXa43M2dG%2BcT3IuB4WIwrDnW835AQoSjA1t7k1H62YwC8kcrL%2FakEhS9kKHp0XbEH6gHERlSmajNhWSSHx2L01zREkesOJQNJGJnPR4ppuncv1jSKMo3c3N3qtDv16vHZ%2FBhVmfbGtFDiXFRtWkf2xMi%2BU%2Fnt6U3gKCptRguxeeNAyEwo5YaOA9ETkjTqC6OZNWwmk5Zy3CEbK1Pv20TqjQZ6KTdZZVyr4fY%2FH1JHmUurk2fquO609x%2FGP5xHUtBAigcA5%2BxmDjoBW%2B1PF0XgQO4pza8CxJMiA5HY48m%2F3kMagpCJyzIUG8xTEWifQ4wdC39XXc7M0FCE5cIVqefswC15dgbx9iugFdCyQyBTp26LuFadn3e1L9ldL7qF64I5pBZG4xkp%2FSuFO9zj4spwAoTxcGgGCoK0g0NS1ca0YZCFC8y61AGyH9UA3Cf9fXSF1OeHQnWrPd1SlKYcKibvQWgPiCO3alpzZysC93bZP5FPEUe%2Fnu2%2BgtPqr776r0IaO7BwJWmIGoVPg%2F1JnFPdrpf4mQwhpfjwgY6pgGHvA8y67F6ANjrZvpmG64u78Vrnn91tfle8Jtw6KV0BDX8L%2FTdo9ubPWIq4sAAKZBxQvupPE%2BX%2B6Y9MrDN%2BCF18VWWoa5R%2F9cGshYop8h%2FR4KzC7O3e2NrScqeGVg6PJzuBuQ0RYVlP24jCfg5%2BgWAY4omAKRi%2FW5UyooMQZ2QiY%2BKWc71VLxp2AWVXoa7D4HQN%2FzmgNjkoncjr6w7ZV3cUdZ8dDfP&X-Amz-Signature=53ef331d656394587d9c2d624861c14ad97409acd2dfd4cf8318366539b031db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
