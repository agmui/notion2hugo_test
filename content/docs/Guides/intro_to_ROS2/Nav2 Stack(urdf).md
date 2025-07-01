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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR4IA5WR%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T005040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1RoeBHKYKDs6dVhXbX0KNU214mA39V%2Fynw2M4G8iZnAIgEsdfCEmr8mZtODZmx91A26kMXsntYdDidyxLfx9O5xsqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsuqZikXg0eWMzlNSrcA4Mxk6utA9Hwur72JBxmCCU4KaL3ciuAdnDx1jj%2FqBCqL0LiSgNwVSjoGTbaPrj56O49I6mYD3ONY2WnzZ7FebI6d7j4GiPuN70Vak4VmAvdVK9wlHNPr%2BpMnXP%2FfOGnc3tL247ky8ZLE66LDQ9ZiGaKZQSZOwgtNxWpUXohYlZ4%2B71bpkTMX8giTnsH6sBWnzQ1q7AuIk5NH8r6aoUP1uOHKmy85rD6%2FD%2BEiPetdX2jDySpcINroEo0uVetz43takXEjc9FhEMdca7QCcSrO%2FW%2Bzc00yInsSNoSjVUrIB9PT%2BMFAmJGFotuAbYiDO3bIhQPdEgWXnCze3o9fxjkmG3pkcTOS8R0faw%2Fhp71%2FTHco48mHRk2oYLzgaGgi%2BGBKOSN%2FcGCdw54bqnWfRmfpFYC%2BIsK8i%2F31DjdUK7%2FVNYIe8DohQEz06hp0GPmYb1s6JMkM8tqb%2BOjpzqdBQ8koiPwwpBHHZ4Rivc5Vti9D2CS1D4mFK1QghqEoAjswg7AVp3uKaJV889wTaWbUaIF0oROYTvaDqKcV78zUeaMDD71hAHYsuLRo21g0rqY3Rk%2Bz%2Bjw%2BgWmsizKKglqCt6AMyO%2Fq2wSnAVA2PiodJEFkE3p1QdeahxGK7PCepO6MNfMjMMGOqUBx7DB%2B%2BQm8nlI%2Ba%2FWhgEwcFbtG8yAkujNqHOuCEoF4Au8Evsm%2BX1d7E2uj95w%2Ft%2BPGKUpEetpG1b8L8JP3PGKVbg8I9nxKqsQvkC495HKc4dSWOjelW8kvAPosRx2M82QIKDGUzZRJo2ueMCdYEdwhFRgs8qE4s4FQAFtJUfadsdSivY0Gc2hpFSFetb%2Fq6Q0v7EnEmthIh%2FAESFzC%2BlJ3J6XHw03&X-Amz-Signature=4088ad939b94af22005005cbfaeec78ff918ff78a8be5d6bacf3dbb7a3d687da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR4IA5WR%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T005040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1RoeBHKYKDs6dVhXbX0KNU214mA39V%2Fynw2M4G8iZnAIgEsdfCEmr8mZtODZmx91A26kMXsntYdDidyxLfx9O5xsqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsuqZikXg0eWMzlNSrcA4Mxk6utA9Hwur72JBxmCCU4KaL3ciuAdnDx1jj%2FqBCqL0LiSgNwVSjoGTbaPrj56O49I6mYD3ONY2WnzZ7FebI6d7j4GiPuN70Vak4VmAvdVK9wlHNPr%2BpMnXP%2FfOGnc3tL247ky8ZLE66LDQ9ZiGaKZQSZOwgtNxWpUXohYlZ4%2B71bpkTMX8giTnsH6sBWnzQ1q7AuIk5NH8r6aoUP1uOHKmy85rD6%2FD%2BEiPetdX2jDySpcINroEo0uVetz43takXEjc9FhEMdca7QCcSrO%2FW%2Bzc00yInsSNoSjVUrIB9PT%2BMFAmJGFotuAbYiDO3bIhQPdEgWXnCze3o9fxjkmG3pkcTOS8R0faw%2Fhp71%2FTHco48mHRk2oYLzgaGgi%2BGBKOSN%2FcGCdw54bqnWfRmfpFYC%2BIsK8i%2F31DjdUK7%2FVNYIe8DohQEz06hp0GPmYb1s6JMkM8tqb%2BOjpzqdBQ8koiPwwpBHHZ4Rivc5Vti9D2CS1D4mFK1QghqEoAjswg7AVp3uKaJV889wTaWbUaIF0oROYTvaDqKcV78zUeaMDD71hAHYsuLRo21g0rqY3Rk%2Bz%2Bjw%2BgWmsizKKglqCt6AMyO%2Fq2wSnAVA2PiodJEFkE3p1QdeahxGK7PCepO6MNfMjMMGOqUBx7DB%2B%2BQm8nlI%2Ba%2FWhgEwcFbtG8yAkujNqHOuCEoF4Au8Evsm%2BX1d7E2uj95w%2Ft%2BPGKUpEetpG1b8L8JP3PGKVbg8I9nxKqsQvkC495HKc4dSWOjelW8kvAPosRx2M82QIKDGUzZRJo2ueMCdYEdwhFRgs8qE4s4FQAFtJUfadsdSivY0Gc2hpFSFetb%2Fq6Q0v7EnEmthIh%2FAESFzC%2BlJ3J6XHw03&X-Amz-Signature=fdbd5dc5537a13124d44019a9f4d7fd66a5071fefaf9e36ccc0087a359dbab72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR4IA5WR%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T005040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1RoeBHKYKDs6dVhXbX0KNU214mA39V%2Fynw2M4G8iZnAIgEsdfCEmr8mZtODZmx91A26kMXsntYdDidyxLfx9O5xsqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsuqZikXg0eWMzlNSrcA4Mxk6utA9Hwur72JBxmCCU4KaL3ciuAdnDx1jj%2FqBCqL0LiSgNwVSjoGTbaPrj56O49I6mYD3ONY2WnzZ7FebI6d7j4GiPuN70Vak4VmAvdVK9wlHNPr%2BpMnXP%2FfOGnc3tL247ky8ZLE66LDQ9ZiGaKZQSZOwgtNxWpUXohYlZ4%2B71bpkTMX8giTnsH6sBWnzQ1q7AuIk5NH8r6aoUP1uOHKmy85rD6%2FD%2BEiPetdX2jDySpcINroEo0uVetz43takXEjc9FhEMdca7QCcSrO%2FW%2Bzc00yInsSNoSjVUrIB9PT%2BMFAmJGFotuAbYiDO3bIhQPdEgWXnCze3o9fxjkmG3pkcTOS8R0faw%2Fhp71%2FTHco48mHRk2oYLzgaGgi%2BGBKOSN%2FcGCdw54bqnWfRmfpFYC%2BIsK8i%2F31DjdUK7%2FVNYIe8DohQEz06hp0GPmYb1s6JMkM8tqb%2BOjpzqdBQ8koiPwwpBHHZ4Rivc5Vti9D2CS1D4mFK1QghqEoAjswg7AVp3uKaJV889wTaWbUaIF0oROYTvaDqKcV78zUeaMDD71hAHYsuLRo21g0rqY3Rk%2Bz%2Bjw%2BgWmsizKKglqCt6AMyO%2Fq2wSnAVA2PiodJEFkE3p1QdeahxGK7PCepO6MNfMjMMGOqUBx7DB%2B%2BQm8nlI%2Ba%2FWhgEwcFbtG8yAkujNqHOuCEoF4Au8Evsm%2BX1d7E2uj95w%2Ft%2BPGKUpEetpG1b8L8JP3PGKVbg8I9nxKqsQvkC495HKc4dSWOjelW8kvAPosRx2M82QIKDGUzZRJo2ueMCdYEdwhFRgs8qE4s4FQAFtJUfadsdSivY0Gc2hpFSFetb%2Fq6Q0v7EnEmthIh%2FAESFzC%2BlJ3J6XHw03&X-Amz-Signature=ee3698b6503fd932762f36410d788485cfc10c67255c00d27d1799cdf424bb6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR4IA5WR%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T005040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1RoeBHKYKDs6dVhXbX0KNU214mA39V%2Fynw2M4G8iZnAIgEsdfCEmr8mZtODZmx91A26kMXsntYdDidyxLfx9O5xsqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsuqZikXg0eWMzlNSrcA4Mxk6utA9Hwur72JBxmCCU4KaL3ciuAdnDx1jj%2FqBCqL0LiSgNwVSjoGTbaPrj56O49I6mYD3ONY2WnzZ7FebI6d7j4GiPuN70Vak4VmAvdVK9wlHNPr%2BpMnXP%2FfOGnc3tL247ky8ZLE66LDQ9ZiGaKZQSZOwgtNxWpUXohYlZ4%2B71bpkTMX8giTnsH6sBWnzQ1q7AuIk5NH8r6aoUP1uOHKmy85rD6%2FD%2BEiPetdX2jDySpcINroEo0uVetz43takXEjc9FhEMdca7QCcSrO%2FW%2Bzc00yInsSNoSjVUrIB9PT%2BMFAmJGFotuAbYiDO3bIhQPdEgWXnCze3o9fxjkmG3pkcTOS8R0faw%2Fhp71%2FTHco48mHRk2oYLzgaGgi%2BGBKOSN%2FcGCdw54bqnWfRmfpFYC%2BIsK8i%2F31DjdUK7%2FVNYIe8DohQEz06hp0GPmYb1s6JMkM8tqb%2BOjpzqdBQ8koiPwwpBHHZ4Rivc5Vti9D2CS1D4mFK1QghqEoAjswg7AVp3uKaJV889wTaWbUaIF0oROYTvaDqKcV78zUeaMDD71hAHYsuLRo21g0rqY3Rk%2Bz%2Bjw%2BgWmsizKKglqCt6AMyO%2Fq2wSnAVA2PiodJEFkE3p1QdeahxGK7PCepO6MNfMjMMGOqUBx7DB%2B%2BQm8nlI%2Ba%2FWhgEwcFbtG8yAkujNqHOuCEoF4Au8Evsm%2BX1d7E2uj95w%2Ft%2BPGKUpEetpG1b8L8JP3PGKVbg8I9nxKqsQvkC495HKc4dSWOjelW8kvAPosRx2M82QIKDGUzZRJo2ueMCdYEdwhFRgs8qE4s4FQAFtJUfadsdSivY0Gc2hpFSFetb%2Fq6Q0v7EnEmthIh%2FAESFzC%2BlJ3J6XHw03&X-Amz-Signature=186b2b31e275707e8933bae2898fb736049a8c039c156a3b05fa573080945bbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR4IA5WR%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T005040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1RoeBHKYKDs6dVhXbX0KNU214mA39V%2Fynw2M4G8iZnAIgEsdfCEmr8mZtODZmx91A26kMXsntYdDidyxLfx9O5xsqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsuqZikXg0eWMzlNSrcA4Mxk6utA9Hwur72JBxmCCU4KaL3ciuAdnDx1jj%2FqBCqL0LiSgNwVSjoGTbaPrj56O49I6mYD3ONY2WnzZ7FebI6d7j4GiPuN70Vak4VmAvdVK9wlHNPr%2BpMnXP%2FfOGnc3tL247ky8ZLE66LDQ9ZiGaKZQSZOwgtNxWpUXohYlZ4%2B71bpkTMX8giTnsH6sBWnzQ1q7AuIk5NH8r6aoUP1uOHKmy85rD6%2FD%2BEiPetdX2jDySpcINroEo0uVetz43takXEjc9FhEMdca7QCcSrO%2FW%2Bzc00yInsSNoSjVUrIB9PT%2BMFAmJGFotuAbYiDO3bIhQPdEgWXnCze3o9fxjkmG3pkcTOS8R0faw%2Fhp71%2FTHco48mHRk2oYLzgaGgi%2BGBKOSN%2FcGCdw54bqnWfRmfpFYC%2BIsK8i%2F31DjdUK7%2FVNYIe8DohQEz06hp0GPmYb1s6JMkM8tqb%2BOjpzqdBQ8koiPwwpBHHZ4Rivc5Vti9D2CS1D4mFK1QghqEoAjswg7AVp3uKaJV889wTaWbUaIF0oROYTvaDqKcV78zUeaMDD71hAHYsuLRo21g0rqY3Rk%2Bz%2Bjw%2BgWmsizKKglqCt6AMyO%2Fq2wSnAVA2PiodJEFkE3p1QdeahxGK7PCepO6MNfMjMMGOqUBx7DB%2B%2BQm8nlI%2Ba%2FWhgEwcFbtG8yAkujNqHOuCEoF4Au8Evsm%2BX1d7E2uj95w%2Ft%2BPGKUpEetpG1b8L8JP3PGKVbg8I9nxKqsQvkC495HKc4dSWOjelW8kvAPosRx2M82QIKDGUzZRJo2ueMCdYEdwhFRgs8qE4s4FQAFtJUfadsdSivY0Gc2hpFSFetb%2Fq6Q0v7EnEmthIh%2FAESFzC%2BlJ3J6XHw03&X-Amz-Signature=b3a8cfdad1fb298edbc1c86e4b59b226309b388f857cda28fabfc206b8f2292d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR4IA5WR%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T005040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC1RoeBHKYKDs6dVhXbX0KNU214mA39V%2Fynw2M4G8iZnAIgEsdfCEmr8mZtODZmx91A26kMXsntYdDidyxLfx9O5xsqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsuqZikXg0eWMzlNSrcA4Mxk6utA9Hwur72JBxmCCU4KaL3ciuAdnDx1jj%2FqBCqL0LiSgNwVSjoGTbaPrj56O49I6mYD3ONY2WnzZ7FebI6d7j4GiPuN70Vak4VmAvdVK9wlHNPr%2BpMnXP%2FfOGnc3tL247ky8ZLE66LDQ9ZiGaKZQSZOwgtNxWpUXohYlZ4%2B71bpkTMX8giTnsH6sBWnzQ1q7AuIk5NH8r6aoUP1uOHKmy85rD6%2FD%2BEiPetdX2jDySpcINroEo0uVetz43takXEjc9FhEMdca7QCcSrO%2FW%2Bzc00yInsSNoSjVUrIB9PT%2BMFAmJGFotuAbYiDO3bIhQPdEgWXnCze3o9fxjkmG3pkcTOS8R0faw%2Fhp71%2FTHco48mHRk2oYLzgaGgi%2BGBKOSN%2FcGCdw54bqnWfRmfpFYC%2BIsK8i%2F31DjdUK7%2FVNYIe8DohQEz06hp0GPmYb1s6JMkM8tqb%2BOjpzqdBQ8koiPwwpBHHZ4Rivc5Vti9D2CS1D4mFK1QghqEoAjswg7AVp3uKaJV889wTaWbUaIF0oROYTvaDqKcV78zUeaMDD71hAHYsuLRo21g0rqY3Rk%2Bz%2Bjw%2BgWmsizKKglqCt6AMyO%2Fq2wSnAVA2PiodJEFkE3p1QdeahxGK7PCepO6MNfMjMMGOqUBx7DB%2B%2BQm8nlI%2Ba%2FWhgEwcFbtG8yAkujNqHOuCEoF4Au8Evsm%2BX1d7E2uj95w%2Ft%2BPGKUpEetpG1b8L8JP3PGKVbg8I9nxKqsQvkC495HKc4dSWOjelW8kvAPosRx2M82QIKDGUzZRJo2ueMCdYEdwhFRgs8qE4s4FQAFtJUfadsdSivY0Gc2hpFSFetb%2Fq6Q0v7EnEmthIh%2FAESFzC%2BlJ3J6XHw03&X-Amz-Signature=7bcbc7369842ba2bc1f8dc1b5b4dbe2fa05b783ae2c5f826e6737297a1c51327&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
