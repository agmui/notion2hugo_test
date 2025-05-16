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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EN4X45L%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T200949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIhcI4KjF3YWTz7MLz%2BYwuDFigwhDH6wN1%2FNOUS00zsAiBekEWMoYI9Sgznr87Th7G98gmKnvvNaNBucEH5ovXSyCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMtQ6CvwOU0HNKLE19KtwDgYl%2BLycCsbzAyIKZKebHbhOQbfMNtRQi1Eemm2FwalF5IGsFsCP79dwR3jKRaL%2FM0NzatBjfBADQKQpNUfAjp2MjtZrVM0URkgKFIIX6rrGTIUWd7Jsnr4lHw77dO3EcSSwPlRdgJZpauuwMuMZOQPNoahMaA5nMCaQWUEmMPUf9oSk5CywiYOuzZBsCQkAIEpLjO5pWC%2F0LgaogBaE4dMBc7pD0NqtsB76cdBAYauvWum5H9cT1A4lGr3EItee5Zn4u28z%2Bh0ATuILMASXd8BtW%2FsZENev8t8QaAxxKemsYptPEOO0MufbiTtv%2F3KLJoQXhc4jCXKRrWWzokmMvMXQKD25qV0t3Mknnigw9T%2FRuECLHtTSUtJCKdYTlNpMhmxw7eR2xfgtgSYNecHGBcDx1IsWUNVxuI0abm7hJzcjpjMgSN87hRjOhGFa4AiBnNtQxLXd5TFGz612ZWxHiA76ytB0tw0Pvq3cRWNM89vjuNlIxx%2FXB1bTft1qAHgbdFk2O6yN%2B0MlrYFOwUE0gQs1K9GxCiSVDpbRwb2wpMv%2B2S5Zp%2BZVcBCPb7pUUXq2Zb9%2BihQNAnpUiqkRbZO3skcd%2F4w8Jua7XDscecX0zyqJe6Cllursosv07RBMwk5CewQY6pgGB7nCMmmWc0Z7OW64O6G36w68IUf9rgcruDgW%2F1JqBCUdiyA9QTY36zc3%2BZcQxQeh%2FIIEbuUFrp%2BbJGJ8F0fjmWtVjKnSXatV3GtL68mUniA3PA%2FLfHSBukT9odMQ5W4PIDt1RQDsClRLUoMAKONhSNA0zEfIrCI1JOmPLJhZH4Rvx4D%2Fr2SwpptXVpNMciimbCLnOs%2BsVNpagJt0n0cJJvmhpZcJ3&X-Amz-Signature=006e3ffde05f17411d9f8ad5358dab3cf0fc63daca58100db0da3f1eaa64a771&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EN4X45L%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T200949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIhcI4KjF3YWTz7MLz%2BYwuDFigwhDH6wN1%2FNOUS00zsAiBekEWMoYI9Sgznr87Th7G98gmKnvvNaNBucEH5ovXSyCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMtQ6CvwOU0HNKLE19KtwDgYl%2BLycCsbzAyIKZKebHbhOQbfMNtRQi1Eemm2FwalF5IGsFsCP79dwR3jKRaL%2FM0NzatBjfBADQKQpNUfAjp2MjtZrVM0URkgKFIIX6rrGTIUWd7Jsnr4lHw77dO3EcSSwPlRdgJZpauuwMuMZOQPNoahMaA5nMCaQWUEmMPUf9oSk5CywiYOuzZBsCQkAIEpLjO5pWC%2F0LgaogBaE4dMBc7pD0NqtsB76cdBAYauvWum5H9cT1A4lGr3EItee5Zn4u28z%2Bh0ATuILMASXd8BtW%2FsZENev8t8QaAxxKemsYptPEOO0MufbiTtv%2F3KLJoQXhc4jCXKRrWWzokmMvMXQKD25qV0t3Mknnigw9T%2FRuECLHtTSUtJCKdYTlNpMhmxw7eR2xfgtgSYNecHGBcDx1IsWUNVxuI0abm7hJzcjpjMgSN87hRjOhGFa4AiBnNtQxLXd5TFGz612ZWxHiA76ytB0tw0Pvq3cRWNM89vjuNlIxx%2FXB1bTft1qAHgbdFk2O6yN%2B0MlrYFOwUE0gQs1K9GxCiSVDpbRwb2wpMv%2B2S5Zp%2BZVcBCPb7pUUXq2Zb9%2BihQNAnpUiqkRbZO3skcd%2F4w8Jua7XDscecX0zyqJe6Cllursosv07RBMwk5CewQY6pgGB7nCMmmWc0Z7OW64O6G36w68IUf9rgcruDgW%2F1JqBCUdiyA9QTY36zc3%2BZcQxQeh%2FIIEbuUFrp%2BbJGJ8F0fjmWtVjKnSXatV3GtL68mUniA3PA%2FLfHSBukT9odMQ5W4PIDt1RQDsClRLUoMAKONhSNA0zEfIrCI1JOmPLJhZH4Rvx4D%2Fr2SwpptXVpNMciimbCLnOs%2BsVNpagJt0n0cJJvmhpZcJ3&X-Amz-Signature=6888d186336af528592acb76df6de1a623549df4750d17c401caf40cd0a0fb90&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EN4X45L%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T200949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIhcI4KjF3YWTz7MLz%2BYwuDFigwhDH6wN1%2FNOUS00zsAiBekEWMoYI9Sgznr87Th7G98gmKnvvNaNBucEH5ovXSyCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMtQ6CvwOU0HNKLE19KtwDgYl%2BLycCsbzAyIKZKebHbhOQbfMNtRQi1Eemm2FwalF5IGsFsCP79dwR3jKRaL%2FM0NzatBjfBADQKQpNUfAjp2MjtZrVM0URkgKFIIX6rrGTIUWd7Jsnr4lHw77dO3EcSSwPlRdgJZpauuwMuMZOQPNoahMaA5nMCaQWUEmMPUf9oSk5CywiYOuzZBsCQkAIEpLjO5pWC%2F0LgaogBaE4dMBc7pD0NqtsB76cdBAYauvWum5H9cT1A4lGr3EItee5Zn4u28z%2Bh0ATuILMASXd8BtW%2FsZENev8t8QaAxxKemsYptPEOO0MufbiTtv%2F3KLJoQXhc4jCXKRrWWzokmMvMXQKD25qV0t3Mknnigw9T%2FRuECLHtTSUtJCKdYTlNpMhmxw7eR2xfgtgSYNecHGBcDx1IsWUNVxuI0abm7hJzcjpjMgSN87hRjOhGFa4AiBnNtQxLXd5TFGz612ZWxHiA76ytB0tw0Pvq3cRWNM89vjuNlIxx%2FXB1bTft1qAHgbdFk2O6yN%2B0MlrYFOwUE0gQs1K9GxCiSVDpbRwb2wpMv%2B2S5Zp%2BZVcBCPb7pUUXq2Zb9%2BihQNAnpUiqkRbZO3skcd%2F4w8Jua7XDscecX0zyqJe6Cllursosv07RBMwk5CewQY6pgGB7nCMmmWc0Z7OW64O6G36w68IUf9rgcruDgW%2F1JqBCUdiyA9QTY36zc3%2BZcQxQeh%2FIIEbuUFrp%2BbJGJ8F0fjmWtVjKnSXatV3GtL68mUniA3PA%2FLfHSBukT9odMQ5W4PIDt1RQDsClRLUoMAKONhSNA0zEfIrCI1JOmPLJhZH4Rvx4D%2Fr2SwpptXVpNMciimbCLnOs%2BsVNpagJt0n0cJJvmhpZcJ3&X-Amz-Signature=11d2a17d8bc9618f7cfd08958c00c41ce7d4bed2454b50876e2659515a9b3263&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EN4X45L%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T200949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIhcI4KjF3YWTz7MLz%2BYwuDFigwhDH6wN1%2FNOUS00zsAiBekEWMoYI9Sgznr87Th7G98gmKnvvNaNBucEH5ovXSyCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMtQ6CvwOU0HNKLE19KtwDgYl%2BLycCsbzAyIKZKebHbhOQbfMNtRQi1Eemm2FwalF5IGsFsCP79dwR3jKRaL%2FM0NzatBjfBADQKQpNUfAjp2MjtZrVM0URkgKFIIX6rrGTIUWd7Jsnr4lHw77dO3EcSSwPlRdgJZpauuwMuMZOQPNoahMaA5nMCaQWUEmMPUf9oSk5CywiYOuzZBsCQkAIEpLjO5pWC%2F0LgaogBaE4dMBc7pD0NqtsB76cdBAYauvWum5H9cT1A4lGr3EItee5Zn4u28z%2Bh0ATuILMASXd8BtW%2FsZENev8t8QaAxxKemsYptPEOO0MufbiTtv%2F3KLJoQXhc4jCXKRrWWzokmMvMXQKD25qV0t3Mknnigw9T%2FRuECLHtTSUtJCKdYTlNpMhmxw7eR2xfgtgSYNecHGBcDx1IsWUNVxuI0abm7hJzcjpjMgSN87hRjOhGFa4AiBnNtQxLXd5TFGz612ZWxHiA76ytB0tw0Pvq3cRWNM89vjuNlIxx%2FXB1bTft1qAHgbdFk2O6yN%2B0MlrYFOwUE0gQs1K9GxCiSVDpbRwb2wpMv%2B2S5Zp%2BZVcBCPb7pUUXq2Zb9%2BihQNAnpUiqkRbZO3skcd%2F4w8Jua7XDscecX0zyqJe6Cllursosv07RBMwk5CewQY6pgGB7nCMmmWc0Z7OW64O6G36w68IUf9rgcruDgW%2F1JqBCUdiyA9QTY36zc3%2BZcQxQeh%2FIIEbuUFrp%2BbJGJ8F0fjmWtVjKnSXatV3GtL68mUniA3PA%2FLfHSBukT9odMQ5W4PIDt1RQDsClRLUoMAKONhSNA0zEfIrCI1JOmPLJhZH4Rvx4D%2Fr2SwpptXVpNMciimbCLnOs%2BsVNpagJt0n0cJJvmhpZcJ3&X-Amz-Signature=a6a8fa54869392e0615d14ff809eb6ca1c2cd580ac544b6cef0c5fe455dbb7c2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EN4X45L%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T200949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIhcI4KjF3YWTz7MLz%2BYwuDFigwhDH6wN1%2FNOUS00zsAiBekEWMoYI9Sgznr87Th7G98gmKnvvNaNBucEH5ovXSyCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMtQ6CvwOU0HNKLE19KtwDgYl%2BLycCsbzAyIKZKebHbhOQbfMNtRQi1Eemm2FwalF5IGsFsCP79dwR3jKRaL%2FM0NzatBjfBADQKQpNUfAjp2MjtZrVM0URkgKFIIX6rrGTIUWd7Jsnr4lHw77dO3EcSSwPlRdgJZpauuwMuMZOQPNoahMaA5nMCaQWUEmMPUf9oSk5CywiYOuzZBsCQkAIEpLjO5pWC%2F0LgaogBaE4dMBc7pD0NqtsB76cdBAYauvWum5H9cT1A4lGr3EItee5Zn4u28z%2Bh0ATuILMASXd8BtW%2FsZENev8t8QaAxxKemsYptPEOO0MufbiTtv%2F3KLJoQXhc4jCXKRrWWzokmMvMXQKD25qV0t3Mknnigw9T%2FRuECLHtTSUtJCKdYTlNpMhmxw7eR2xfgtgSYNecHGBcDx1IsWUNVxuI0abm7hJzcjpjMgSN87hRjOhGFa4AiBnNtQxLXd5TFGz612ZWxHiA76ytB0tw0Pvq3cRWNM89vjuNlIxx%2FXB1bTft1qAHgbdFk2O6yN%2B0MlrYFOwUE0gQs1K9GxCiSVDpbRwb2wpMv%2B2S5Zp%2BZVcBCPb7pUUXq2Zb9%2BihQNAnpUiqkRbZO3skcd%2F4w8Jua7XDscecX0zyqJe6Cllursosv07RBMwk5CewQY6pgGB7nCMmmWc0Z7OW64O6G36w68IUf9rgcruDgW%2F1JqBCUdiyA9QTY36zc3%2BZcQxQeh%2FIIEbuUFrp%2BbJGJ8F0fjmWtVjKnSXatV3GtL68mUniA3PA%2FLfHSBukT9odMQ5W4PIDt1RQDsClRLUoMAKONhSNA0zEfIrCI1JOmPLJhZH4Rvx4D%2Fr2SwpptXVpNMciimbCLnOs%2BsVNpagJt0n0cJJvmhpZcJ3&X-Amz-Signature=0320de3e4c699434f7218ae2a4f811c778daf6fa9d6fe783e2630316f20635eb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EN4X45L%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T200949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIhcI4KjF3YWTz7MLz%2BYwuDFigwhDH6wN1%2FNOUS00zsAiBekEWMoYI9Sgznr87Th7G98gmKnvvNaNBucEH5ovXSyCr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMtQ6CvwOU0HNKLE19KtwDgYl%2BLycCsbzAyIKZKebHbhOQbfMNtRQi1Eemm2FwalF5IGsFsCP79dwR3jKRaL%2FM0NzatBjfBADQKQpNUfAjp2MjtZrVM0URkgKFIIX6rrGTIUWd7Jsnr4lHw77dO3EcSSwPlRdgJZpauuwMuMZOQPNoahMaA5nMCaQWUEmMPUf9oSk5CywiYOuzZBsCQkAIEpLjO5pWC%2F0LgaogBaE4dMBc7pD0NqtsB76cdBAYauvWum5H9cT1A4lGr3EItee5Zn4u28z%2Bh0ATuILMASXd8BtW%2FsZENev8t8QaAxxKemsYptPEOO0MufbiTtv%2F3KLJoQXhc4jCXKRrWWzokmMvMXQKD25qV0t3Mknnigw9T%2FRuECLHtTSUtJCKdYTlNpMhmxw7eR2xfgtgSYNecHGBcDx1IsWUNVxuI0abm7hJzcjpjMgSN87hRjOhGFa4AiBnNtQxLXd5TFGz612ZWxHiA76ytB0tw0Pvq3cRWNM89vjuNlIxx%2FXB1bTft1qAHgbdFk2O6yN%2B0MlrYFOwUE0gQs1K9GxCiSVDpbRwb2wpMv%2B2S5Zp%2BZVcBCPb7pUUXq2Zb9%2BihQNAnpUiqkRbZO3skcd%2F4w8Jua7XDscecX0zyqJe6Cllursosv07RBMwk5CewQY6pgGB7nCMmmWc0Z7OW64O6G36w68IUf9rgcruDgW%2F1JqBCUdiyA9QTY36zc3%2BZcQxQeh%2FIIEbuUFrp%2BbJGJ8F0fjmWtVjKnSXatV3GtL68mUniA3PA%2FLfHSBukT9odMQ5W4PIDt1RQDsClRLUoMAKONhSNA0zEfIrCI1JOmPLJhZH4Rvx4D%2Fr2SwpptXVpNMciimbCLnOs%2BsVNpagJt0n0cJJvmhpZcJ3&X-Amz-Signature=e2ffc4bbc602ec39bbf5cd4ecacea32b007f1a027be4c91774d6ad05fd587229&X-Amz-SignedHeaders=host&x-id=GetObject)
