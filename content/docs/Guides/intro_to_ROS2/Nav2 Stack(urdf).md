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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6YTZRAO%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIEhEqSCTTvoMWBCZLg6%2BnCACLi6cg4kNGStPK1A618XdAiAUJfWeXnHEcTEWUaIfd5iLHY5bT20oMft2DUoYbtrseyr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMdfPjdlePialWqSeSKtwDtG98VllVCQnYsg4PUrgbn%2F90joc6OGdyckPAgfvaNFochX3CVlmjvDQ5H7tpBYXX7pUAbxjceQ8MB2A7Tduo9qj5srOkNWNWWynt1sq3kg%2BsjiDjnj%2FRGlv2fcD2U4nDPj9IRYlz7P1wp3iiRZ4t3kp6z0nRRHO71F0bj5nXw%2FBwn0lQWhGz4ruoxrwEbuUd3bPNkAeQa%2BpxTXAVhnNBR%2BJZsRJ3vW0FwxKnWNrLWmtHesPpNjItuHmQVKyzBfIla6WH0%2Bs1HDztQ5zA0dy605jPm%2FbcUb%2BEEAVmFkzgia%2Bk4nhyBmlxpMZgY%2B7iMmaWtpE%2Ba7ng%2FuY4F%2FJUys9dB6T9uWR2Ywv%2BRClNEaHMLrY%2FzYYuE6sCQY0CoQe3vV%2B1u2pJznOFysNXeJHOe1OgNOuH4woHRzAMe9vvzlpTKJZxXqN%2Fr3xultpLv17GmO18n4FHxAxiB9hNWAcn9wjQQ22qgAKkMz8D%2Bc7FsjdT7W2KT6cF9zL3VcoSn3MwMUykO%2F82csi%2FB%2BuR2mIPd75AEfS9AkCYI0fNwE2P7%2FT86yRoznEQvHJytZN3u1VSJ73JsTdV%2FQ9wxGetjc%2FbimgsvjoZdxhZ2vB3hU046mX4tx3W%2FbxFDP1da4MJHecw5e3mwgY6pgGrWEUq1X9cWHQsgqtzrcTj9T4QlybOVZ1FI7ckGcsqG8ilHxOpsieYx043KwHjNYGalWjQcaAYxi6MKXJ5aN2BS66t%2FkK1BeYGF4TbZGUTxX%2FVBJcnIRLXQtIaaD8PT6VTgtK9ycm4RBUgkx1whmbLK595qFHm2S8kzwVL%2FFDPjZVppfKP5BIhBf9SrfNYQcA8RXDOqRtyJjHi3NHMFh4%2B9OGBlNTQ&X-Amz-Signature=3e0b93488b3b96ab65e6c38d39ce1124673b003072874caa40f05b25672361b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6YTZRAO%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIEhEqSCTTvoMWBCZLg6%2BnCACLi6cg4kNGStPK1A618XdAiAUJfWeXnHEcTEWUaIfd5iLHY5bT20oMft2DUoYbtrseyr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMdfPjdlePialWqSeSKtwDtG98VllVCQnYsg4PUrgbn%2F90joc6OGdyckPAgfvaNFochX3CVlmjvDQ5H7tpBYXX7pUAbxjceQ8MB2A7Tduo9qj5srOkNWNWWynt1sq3kg%2BsjiDjnj%2FRGlv2fcD2U4nDPj9IRYlz7P1wp3iiRZ4t3kp6z0nRRHO71F0bj5nXw%2FBwn0lQWhGz4ruoxrwEbuUd3bPNkAeQa%2BpxTXAVhnNBR%2BJZsRJ3vW0FwxKnWNrLWmtHesPpNjItuHmQVKyzBfIla6WH0%2Bs1HDztQ5zA0dy605jPm%2FbcUb%2BEEAVmFkzgia%2Bk4nhyBmlxpMZgY%2B7iMmaWtpE%2Ba7ng%2FuY4F%2FJUys9dB6T9uWR2Ywv%2BRClNEaHMLrY%2FzYYuE6sCQY0CoQe3vV%2B1u2pJznOFysNXeJHOe1OgNOuH4woHRzAMe9vvzlpTKJZxXqN%2Fr3xultpLv17GmO18n4FHxAxiB9hNWAcn9wjQQ22qgAKkMz8D%2Bc7FsjdT7W2KT6cF9zL3VcoSn3MwMUykO%2F82csi%2FB%2BuR2mIPd75AEfS9AkCYI0fNwE2P7%2FT86yRoznEQvHJytZN3u1VSJ73JsTdV%2FQ9wxGetjc%2FbimgsvjoZdxhZ2vB3hU046mX4tx3W%2FbxFDP1da4MJHecw5e3mwgY6pgGrWEUq1X9cWHQsgqtzrcTj9T4QlybOVZ1FI7ckGcsqG8ilHxOpsieYx043KwHjNYGalWjQcaAYxi6MKXJ5aN2BS66t%2FkK1BeYGF4TbZGUTxX%2FVBJcnIRLXQtIaaD8PT6VTgtK9ycm4RBUgkx1whmbLK595qFHm2S8kzwVL%2FFDPjZVppfKP5BIhBf9SrfNYQcA8RXDOqRtyJjHi3NHMFh4%2B9OGBlNTQ&X-Amz-Signature=c1f02b264e187c852e04a3898773cbc6e01780799823b6f97441e069a75a5fbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6YTZRAO%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIEhEqSCTTvoMWBCZLg6%2BnCACLi6cg4kNGStPK1A618XdAiAUJfWeXnHEcTEWUaIfd5iLHY5bT20oMft2DUoYbtrseyr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMdfPjdlePialWqSeSKtwDtG98VllVCQnYsg4PUrgbn%2F90joc6OGdyckPAgfvaNFochX3CVlmjvDQ5H7tpBYXX7pUAbxjceQ8MB2A7Tduo9qj5srOkNWNWWynt1sq3kg%2BsjiDjnj%2FRGlv2fcD2U4nDPj9IRYlz7P1wp3iiRZ4t3kp6z0nRRHO71F0bj5nXw%2FBwn0lQWhGz4ruoxrwEbuUd3bPNkAeQa%2BpxTXAVhnNBR%2BJZsRJ3vW0FwxKnWNrLWmtHesPpNjItuHmQVKyzBfIla6WH0%2Bs1HDztQ5zA0dy605jPm%2FbcUb%2BEEAVmFkzgia%2Bk4nhyBmlxpMZgY%2B7iMmaWtpE%2Ba7ng%2FuY4F%2FJUys9dB6T9uWR2Ywv%2BRClNEaHMLrY%2FzYYuE6sCQY0CoQe3vV%2B1u2pJznOFysNXeJHOe1OgNOuH4woHRzAMe9vvzlpTKJZxXqN%2Fr3xultpLv17GmO18n4FHxAxiB9hNWAcn9wjQQ22qgAKkMz8D%2Bc7FsjdT7W2KT6cF9zL3VcoSn3MwMUykO%2F82csi%2FB%2BuR2mIPd75AEfS9AkCYI0fNwE2P7%2FT86yRoznEQvHJytZN3u1VSJ73JsTdV%2FQ9wxGetjc%2FbimgsvjoZdxhZ2vB3hU046mX4tx3W%2FbxFDP1da4MJHecw5e3mwgY6pgGrWEUq1X9cWHQsgqtzrcTj9T4QlybOVZ1FI7ckGcsqG8ilHxOpsieYx043KwHjNYGalWjQcaAYxi6MKXJ5aN2BS66t%2FkK1BeYGF4TbZGUTxX%2FVBJcnIRLXQtIaaD8PT6VTgtK9ycm4RBUgkx1whmbLK595qFHm2S8kzwVL%2FFDPjZVppfKP5BIhBf9SrfNYQcA8RXDOqRtyJjHi3NHMFh4%2B9OGBlNTQ&X-Amz-Signature=8c790f5c17485f5471ed697d13302166d3a7ef9252b3c53ecd4cb6bc807363a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6YTZRAO%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIEhEqSCTTvoMWBCZLg6%2BnCACLi6cg4kNGStPK1A618XdAiAUJfWeXnHEcTEWUaIfd5iLHY5bT20oMft2DUoYbtrseyr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMdfPjdlePialWqSeSKtwDtG98VllVCQnYsg4PUrgbn%2F90joc6OGdyckPAgfvaNFochX3CVlmjvDQ5H7tpBYXX7pUAbxjceQ8MB2A7Tduo9qj5srOkNWNWWynt1sq3kg%2BsjiDjnj%2FRGlv2fcD2U4nDPj9IRYlz7P1wp3iiRZ4t3kp6z0nRRHO71F0bj5nXw%2FBwn0lQWhGz4ruoxrwEbuUd3bPNkAeQa%2BpxTXAVhnNBR%2BJZsRJ3vW0FwxKnWNrLWmtHesPpNjItuHmQVKyzBfIla6WH0%2Bs1HDztQ5zA0dy605jPm%2FbcUb%2BEEAVmFkzgia%2Bk4nhyBmlxpMZgY%2B7iMmaWtpE%2Ba7ng%2FuY4F%2FJUys9dB6T9uWR2Ywv%2BRClNEaHMLrY%2FzYYuE6sCQY0CoQe3vV%2B1u2pJznOFysNXeJHOe1OgNOuH4woHRzAMe9vvzlpTKJZxXqN%2Fr3xultpLv17GmO18n4FHxAxiB9hNWAcn9wjQQ22qgAKkMz8D%2Bc7FsjdT7W2KT6cF9zL3VcoSn3MwMUykO%2F82csi%2FB%2BuR2mIPd75AEfS9AkCYI0fNwE2P7%2FT86yRoznEQvHJytZN3u1VSJ73JsTdV%2FQ9wxGetjc%2FbimgsvjoZdxhZ2vB3hU046mX4tx3W%2FbxFDP1da4MJHecw5e3mwgY6pgGrWEUq1X9cWHQsgqtzrcTj9T4QlybOVZ1FI7ckGcsqG8ilHxOpsieYx043KwHjNYGalWjQcaAYxi6MKXJ5aN2BS66t%2FkK1BeYGF4TbZGUTxX%2FVBJcnIRLXQtIaaD8PT6VTgtK9ycm4RBUgkx1whmbLK595qFHm2S8kzwVL%2FFDPjZVppfKP5BIhBf9SrfNYQcA8RXDOqRtyJjHi3NHMFh4%2B9OGBlNTQ&X-Amz-Signature=4b504a10bf80d81e03179116f5633dc9a8b311dcfeba97dc8de374c06b72eb42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6YTZRAO%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIEhEqSCTTvoMWBCZLg6%2BnCACLi6cg4kNGStPK1A618XdAiAUJfWeXnHEcTEWUaIfd5iLHY5bT20oMft2DUoYbtrseyr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMdfPjdlePialWqSeSKtwDtG98VllVCQnYsg4PUrgbn%2F90joc6OGdyckPAgfvaNFochX3CVlmjvDQ5H7tpBYXX7pUAbxjceQ8MB2A7Tduo9qj5srOkNWNWWynt1sq3kg%2BsjiDjnj%2FRGlv2fcD2U4nDPj9IRYlz7P1wp3iiRZ4t3kp6z0nRRHO71F0bj5nXw%2FBwn0lQWhGz4ruoxrwEbuUd3bPNkAeQa%2BpxTXAVhnNBR%2BJZsRJ3vW0FwxKnWNrLWmtHesPpNjItuHmQVKyzBfIla6WH0%2Bs1HDztQ5zA0dy605jPm%2FbcUb%2BEEAVmFkzgia%2Bk4nhyBmlxpMZgY%2B7iMmaWtpE%2Ba7ng%2FuY4F%2FJUys9dB6T9uWR2Ywv%2BRClNEaHMLrY%2FzYYuE6sCQY0CoQe3vV%2B1u2pJznOFysNXeJHOe1OgNOuH4woHRzAMe9vvzlpTKJZxXqN%2Fr3xultpLv17GmO18n4FHxAxiB9hNWAcn9wjQQ22qgAKkMz8D%2Bc7FsjdT7W2KT6cF9zL3VcoSn3MwMUykO%2F82csi%2FB%2BuR2mIPd75AEfS9AkCYI0fNwE2P7%2FT86yRoznEQvHJytZN3u1VSJ73JsTdV%2FQ9wxGetjc%2FbimgsvjoZdxhZ2vB3hU046mX4tx3W%2FbxFDP1da4MJHecw5e3mwgY6pgGrWEUq1X9cWHQsgqtzrcTj9T4QlybOVZ1FI7ckGcsqG8ilHxOpsieYx043KwHjNYGalWjQcaAYxi6MKXJ5aN2BS66t%2FkK1BeYGF4TbZGUTxX%2FVBJcnIRLXQtIaaD8PT6VTgtK9ycm4RBUgkx1whmbLK595qFHm2S8kzwVL%2FFDPjZVppfKP5BIhBf9SrfNYQcA8RXDOqRtyJjHi3NHMFh4%2B9OGBlNTQ&X-Amz-Signature=aaba83ac65792edeb4c5e9ca9ac5b02f49d7bb4712cc854963d37beb82b1e832&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6YTZRAO%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T220836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIEhEqSCTTvoMWBCZLg6%2BnCACLi6cg4kNGStPK1A618XdAiAUJfWeXnHEcTEWUaIfd5iLHY5bT20oMft2DUoYbtrseyr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMdfPjdlePialWqSeSKtwDtG98VllVCQnYsg4PUrgbn%2F90joc6OGdyckPAgfvaNFochX3CVlmjvDQ5H7tpBYXX7pUAbxjceQ8MB2A7Tduo9qj5srOkNWNWWynt1sq3kg%2BsjiDjnj%2FRGlv2fcD2U4nDPj9IRYlz7P1wp3iiRZ4t3kp6z0nRRHO71F0bj5nXw%2FBwn0lQWhGz4ruoxrwEbuUd3bPNkAeQa%2BpxTXAVhnNBR%2BJZsRJ3vW0FwxKnWNrLWmtHesPpNjItuHmQVKyzBfIla6WH0%2Bs1HDztQ5zA0dy605jPm%2FbcUb%2BEEAVmFkzgia%2Bk4nhyBmlxpMZgY%2B7iMmaWtpE%2Ba7ng%2FuY4F%2FJUys9dB6T9uWR2Ywv%2BRClNEaHMLrY%2FzYYuE6sCQY0CoQe3vV%2B1u2pJznOFysNXeJHOe1OgNOuH4woHRzAMe9vvzlpTKJZxXqN%2Fr3xultpLv17GmO18n4FHxAxiB9hNWAcn9wjQQ22qgAKkMz8D%2Bc7FsjdT7W2KT6cF9zL3VcoSn3MwMUykO%2F82csi%2FB%2BuR2mIPd75AEfS9AkCYI0fNwE2P7%2FT86yRoznEQvHJytZN3u1VSJ73JsTdV%2FQ9wxGetjc%2FbimgsvjoZdxhZ2vB3hU046mX4tx3W%2FbxFDP1da4MJHecw5e3mwgY6pgGrWEUq1X9cWHQsgqtzrcTj9T4QlybOVZ1FI7ckGcsqG8ilHxOpsieYx043KwHjNYGalWjQcaAYxi6MKXJ5aN2BS66t%2FkK1BeYGF4TbZGUTxX%2FVBJcnIRLXQtIaaD8PT6VTgtK9ycm4RBUgkx1whmbLK595qFHm2S8kzwVL%2FFDPjZVppfKP5BIhBf9SrfNYQcA8RXDOqRtyJjHi3NHMFh4%2B9OGBlNTQ&X-Amz-Signature=a7d7a79cd6e8cd59fc92044cad62b3021a8614379d39c2d634f45f05b2ec85ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
