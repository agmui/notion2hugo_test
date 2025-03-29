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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCSVJ2AS%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T080958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIFHtFd7sBFiBKq6CsbKHooQgPPEaPDIjWG36PB6bom5HAiA1%2Bdu%2F7JkZ0q3X7hu%2FIRtbbjfJWHNvmn%2BBOzQDFfm5PCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMJFmudvnk%2BuFONBvCKtwD5KMfqhH2fo0m3Iy9j67cGVoqJBKKF7QCcCcNJUsLhKi3W7qcXJwnIwcP%2BGvi0BSh74o4DGHRHTAs%2FKJu9bns9P5uV6CesuORNVOrZhkUWuXS3SLWSxi7pd0GMCgzXLgjDiRypCEZiTZTU9Ry9XIxreH8s92CpzHA63MGaalfrD9XmJ8dUEBDX8VdyvE9npAl3m6lm0EMj50XJA6Q5%2FG7HsrfTj0u6BBkC4LCJaMR66AJzsQ%2FO7vCglvLFD9%2Bbys5Pmwv2by61YvskE1tXF5R8n4muwAosVmECpX4%2BjDEwAuNObHpkL6mS1u9Qlf6w865sVcfGr2qtp6OMPxMwmgBi77%2B0fsXSXwziF4I3Bvfvg7zaylVtoLuyum6Ya3cj4tu2RiytrdY4kZ399H%2Bw4oyBQ%2FeYcpPBPy0z%2FiikWzqb%2BW0T%2FHEsgn6cnFbxTDT%2BA00%2Ffh4EKWdOGM3lspTVr6l5WvVNzQxWgrJyf6hQmZv7geqYXDPoJzOQcUpb0M%2BYIAp54g0eQSbFljGHNJ4XZT0pAILOw%2BNoVG6ltGbgCy%2Fa5vektkvmMuXZ8D26bQfLvPpQWX4HF78CxrwsdEZF%2BMw2p4OKHMPesQeuQSpbhrFEtDv50DRb4dWii2H7jcwqsWevwY6pgE%2FNKilLjc6Ci3UsgGesTyHdpQDFn3eLMqEZ9wTnA6n%2B%2FcHtxizoBWXTEuPIRQBk64JHMM65QoXl541FQrZG5%2F52osuSrmYuBm%2BR5rL4dE9ZkdYtS4j49nHeHfatbDjxmN0T4luRMh8G0PgPJ8AauDXOqDQsIOvnAKRB%2BElr6ZFEmAuoZuhmRVuNrzXgBq3B7R%2FcfRVWCAhFal5Ed5UhUCsgInqP7OZ&X-Amz-Signature=cf61b5aeddc694a2b3447dd49877d709354f8ed2dff7b694f473dfab06930fc2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCSVJ2AS%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T080958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIFHtFd7sBFiBKq6CsbKHooQgPPEaPDIjWG36PB6bom5HAiA1%2Bdu%2F7JkZ0q3X7hu%2FIRtbbjfJWHNvmn%2BBOzQDFfm5PCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMJFmudvnk%2BuFONBvCKtwD5KMfqhH2fo0m3Iy9j67cGVoqJBKKF7QCcCcNJUsLhKi3W7qcXJwnIwcP%2BGvi0BSh74o4DGHRHTAs%2FKJu9bns9P5uV6CesuORNVOrZhkUWuXS3SLWSxi7pd0GMCgzXLgjDiRypCEZiTZTU9Ry9XIxreH8s92CpzHA63MGaalfrD9XmJ8dUEBDX8VdyvE9npAl3m6lm0EMj50XJA6Q5%2FG7HsrfTj0u6BBkC4LCJaMR66AJzsQ%2FO7vCglvLFD9%2Bbys5Pmwv2by61YvskE1tXF5R8n4muwAosVmECpX4%2BjDEwAuNObHpkL6mS1u9Qlf6w865sVcfGr2qtp6OMPxMwmgBi77%2B0fsXSXwziF4I3Bvfvg7zaylVtoLuyum6Ya3cj4tu2RiytrdY4kZ399H%2Bw4oyBQ%2FeYcpPBPy0z%2FiikWzqb%2BW0T%2FHEsgn6cnFbxTDT%2BA00%2Ffh4EKWdOGM3lspTVr6l5WvVNzQxWgrJyf6hQmZv7geqYXDPoJzOQcUpb0M%2BYIAp54g0eQSbFljGHNJ4XZT0pAILOw%2BNoVG6ltGbgCy%2Fa5vektkvmMuXZ8D26bQfLvPpQWX4HF78CxrwsdEZF%2BMw2p4OKHMPesQeuQSpbhrFEtDv50DRb4dWii2H7jcwqsWevwY6pgE%2FNKilLjc6Ci3UsgGesTyHdpQDFn3eLMqEZ9wTnA6n%2B%2FcHtxizoBWXTEuPIRQBk64JHMM65QoXl541FQrZG5%2F52osuSrmYuBm%2BR5rL4dE9ZkdYtS4j49nHeHfatbDjxmN0T4luRMh8G0PgPJ8AauDXOqDQsIOvnAKRB%2BElr6ZFEmAuoZuhmRVuNrzXgBq3B7R%2FcfRVWCAhFal5Ed5UhUCsgInqP7OZ&X-Amz-Signature=78edb2a465eb6884690622781017400a6d45b63dfeaf19e8cc93a5dcd18d18b6&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCSVJ2AS%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T080958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIFHtFd7sBFiBKq6CsbKHooQgPPEaPDIjWG36PB6bom5HAiA1%2Bdu%2F7JkZ0q3X7hu%2FIRtbbjfJWHNvmn%2BBOzQDFfm5PCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMJFmudvnk%2BuFONBvCKtwD5KMfqhH2fo0m3Iy9j67cGVoqJBKKF7QCcCcNJUsLhKi3W7qcXJwnIwcP%2BGvi0BSh74o4DGHRHTAs%2FKJu9bns9P5uV6CesuORNVOrZhkUWuXS3SLWSxi7pd0GMCgzXLgjDiRypCEZiTZTU9Ry9XIxreH8s92CpzHA63MGaalfrD9XmJ8dUEBDX8VdyvE9npAl3m6lm0EMj50XJA6Q5%2FG7HsrfTj0u6BBkC4LCJaMR66AJzsQ%2FO7vCglvLFD9%2Bbys5Pmwv2by61YvskE1tXF5R8n4muwAosVmECpX4%2BjDEwAuNObHpkL6mS1u9Qlf6w865sVcfGr2qtp6OMPxMwmgBi77%2B0fsXSXwziF4I3Bvfvg7zaylVtoLuyum6Ya3cj4tu2RiytrdY4kZ399H%2Bw4oyBQ%2FeYcpPBPy0z%2FiikWzqb%2BW0T%2FHEsgn6cnFbxTDT%2BA00%2Ffh4EKWdOGM3lspTVr6l5WvVNzQxWgrJyf6hQmZv7geqYXDPoJzOQcUpb0M%2BYIAp54g0eQSbFljGHNJ4XZT0pAILOw%2BNoVG6ltGbgCy%2Fa5vektkvmMuXZ8D26bQfLvPpQWX4HF78CxrwsdEZF%2BMw2p4OKHMPesQeuQSpbhrFEtDv50DRb4dWii2H7jcwqsWevwY6pgE%2FNKilLjc6Ci3UsgGesTyHdpQDFn3eLMqEZ9wTnA6n%2B%2FcHtxizoBWXTEuPIRQBk64JHMM65QoXl541FQrZG5%2F52osuSrmYuBm%2BR5rL4dE9ZkdYtS4j49nHeHfatbDjxmN0T4luRMh8G0PgPJ8AauDXOqDQsIOvnAKRB%2BElr6ZFEmAuoZuhmRVuNrzXgBq3B7R%2FcfRVWCAhFal5Ed5UhUCsgInqP7OZ&X-Amz-Signature=8124d81f41338e7174af4f4f511e02fe5ad416880232c73504e60db3188f0fa2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCSVJ2AS%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T080958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIFHtFd7sBFiBKq6CsbKHooQgPPEaPDIjWG36PB6bom5HAiA1%2Bdu%2F7JkZ0q3X7hu%2FIRtbbjfJWHNvmn%2BBOzQDFfm5PCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMJFmudvnk%2BuFONBvCKtwD5KMfqhH2fo0m3Iy9j67cGVoqJBKKF7QCcCcNJUsLhKi3W7qcXJwnIwcP%2BGvi0BSh74o4DGHRHTAs%2FKJu9bns9P5uV6CesuORNVOrZhkUWuXS3SLWSxi7pd0GMCgzXLgjDiRypCEZiTZTU9Ry9XIxreH8s92CpzHA63MGaalfrD9XmJ8dUEBDX8VdyvE9npAl3m6lm0EMj50XJA6Q5%2FG7HsrfTj0u6BBkC4LCJaMR66AJzsQ%2FO7vCglvLFD9%2Bbys5Pmwv2by61YvskE1tXF5R8n4muwAosVmECpX4%2BjDEwAuNObHpkL6mS1u9Qlf6w865sVcfGr2qtp6OMPxMwmgBi77%2B0fsXSXwziF4I3Bvfvg7zaylVtoLuyum6Ya3cj4tu2RiytrdY4kZ399H%2Bw4oyBQ%2FeYcpPBPy0z%2FiikWzqb%2BW0T%2FHEsgn6cnFbxTDT%2BA00%2Ffh4EKWdOGM3lspTVr6l5WvVNzQxWgrJyf6hQmZv7geqYXDPoJzOQcUpb0M%2BYIAp54g0eQSbFljGHNJ4XZT0pAILOw%2BNoVG6ltGbgCy%2Fa5vektkvmMuXZ8D26bQfLvPpQWX4HF78CxrwsdEZF%2BMw2p4OKHMPesQeuQSpbhrFEtDv50DRb4dWii2H7jcwqsWevwY6pgE%2FNKilLjc6Ci3UsgGesTyHdpQDFn3eLMqEZ9wTnA6n%2B%2FcHtxizoBWXTEuPIRQBk64JHMM65QoXl541FQrZG5%2F52osuSrmYuBm%2BR5rL4dE9ZkdYtS4j49nHeHfatbDjxmN0T4luRMh8G0PgPJ8AauDXOqDQsIOvnAKRB%2BElr6ZFEmAuoZuhmRVuNrzXgBq3B7R%2FcfRVWCAhFal5Ed5UhUCsgInqP7OZ&X-Amz-Signature=fc2a84d68ca6db647cea05e6a2ccdcf0f5820439011b16dee86e4a25eeb58493&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCSVJ2AS%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T080958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIFHtFd7sBFiBKq6CsbKHooQgPPEaPDIjWG36PB6bom5HAiA1%2Bdu%2F7JkZ0q3X7hu%2FIRtbbjfJWHNvmn%2BBOzQDFfm5PCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMJFmudvnk%2BuFONBvCKtwD5KMfqhH2fo0m3Iy9j67cGVoqJBKKF7QCcCcNJUsLhKi3W7qcXJwnIwcP%2BGvi0BSh74o4DGHRHTAs%2FKJu9bns9P5uV6CesuORNVOrZhkUWuXS3SLWSxi7pd0GMCgzXLgjDiRypCEZiTZTU9Ry9XIxreH8s92CpzHA63MGaalfrD9XmJ8dUEBDX8VdyvE9npAl3m6lm0EMj50XJA6Q5%2FG7HsrfTj0u6BBkC4LCJaMR66AJzsQ%2FO7vCglvLFD9%2Bbys5Pmwv2by61YvskE1tXF5R8n4muwAosVmECpX4%2BjDEwAuNObHpkL6mS1u9Qlf6w865sVcfGr2qtp6OMPxMwmgBi77%2B0fsXSXwziF4I3Bvfvg7zaylVtoLuyum6Ya3cj4tu2RiytrdY4kZ399H%2Bw4oyBQ%2FeYcpPBPy0z%2FiikWzqb%2BW0T%2FHEsgn6cnFbxTDT%2BA00%2Ffh4EKWdOGM3lspTVr6l5WvVNzQxWgrJyf6hQmZv7geqYXDPoJzOQcUpb0M%2BYIAp54g0eQSbFljGHNJ4XZT0pAILOw%2BNoVG6ltGbgCy%2Fa5vektkvmMuXZ8D26bQfLvPpQWX4HF78CxrwsdEZF%2BMw2p4OKHMPesQeuQSpbhrFEtDv50DRb4dWii2H7jcwqsWevwY6pgE%2FNKilLjc6Ci3UsgGesTyHdpQDFn3eLMqEZ9wTnA6n%2B%2FcHtxizoBWXTEuPIRQBk64JHMM65QoXl541FQrZG5%2F52osuSrmYuBm%2BR5rL4dE9ZkdYtS4j49nHeHfatbDjxmN0T4luRMh8G0PgPJ8AauDXOqDQsIOvnAKRB%2BElr6ZFEmAuoZuhmRVuNrzXgBq3B7R%2FcfRVWCAhFal5Ed5UhUCsgInqP7OZ&X-Amz-Signature=7905f4848a7b3eb14ebcc8e01ba5e44d0e1b9fa7ede16200855f4a34d55f048d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCSVJ2AS%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T080958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIFHtFd7sBFiBKq6CsbKHooQgPPEaPDIjWG36PB6bom5HAiA1%2Bdu%2F7JkZ0q3X7hu%2FIRtbbjfJWHNvmn%2BBOzQDFfm5PCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMJFmudvnk%2BuFONBvCKtwD5KMfqhH2fo0m3Iy9j67cGVoqJBKKF7QCcCcNJUsLhKi3W7qcXJwnIwcP%2BGvi0BSh74o4DGHRHTAs%2FKJu9bns9P5uV6CesuORNVOrZhkUWuXS3SLWSxi7pd0GMCgzXLgjDiRypCEZiTZTU9Ry9XIxreH8s92CpzHA63MGaalfrD9XmJ8dUEBDX8VdyvE9npAl3m6lm0EMj50XJA6Q5%2FG7HsrfTj0u6BBkC4LCJaMR66AJzsQ%2FO7vCglvLFD9%2Bbys5Pmwv2by61YvskE1tXF5R8n4muwAosVmECpX4%2BjDEwAuNObHpkL6mS1u9Qlf6w865sVcfGr2qtp6OMPxMwmgBi77%2B0fsXSXwziF4I3Bvfvg7zaylVtoLuyum6Ya3cj4tu2RiytrdY4kZ399H%2Bw4oyBQ%2FeYcpPBPy0z%2FiikWzqb%2BW0T%2FHEsgn6cnFbxTDT%2BA00%2Ffh4EKWdOGM3lspTVr6l5WvVNzQxWgrJyf6hQmZv7geqYXDPoJzOQcUpb0M%2BYIAp54g0eQSbFljGHNJ4XZT0pAILOw%2BNoVG6ltGbgCy%2Fa5vektkvmMuXZ8D26bQfLvPpQWX4HF78CxrwsdEZF%2BMw2p4OKHMPesQeuQSpbhrFEtDv50DRb4dWii2H7jcwqsWevwY6pgE%2FNKilLjc6Ci3UsgGesTyHdpQDFn3eLMqEZ9wTnA6n%2B%2FcHtxizoBWXTEuPIRQBk64JHMM65QoXl541FQrZG5%2F52osuSrmYuBm%2BR5rL4dE9ZkdYtS4j49nHeHfatbDjxmN0T4luRMh8G0PgPJ8AauDXOqDQsIOvnAKRB%2BElr6ZFEmAuoZuhmRVuNrzXgBq3B7R%2FcfRVWCAhFal5Ed5UhUCsgInqP7OZ&X-Amz-Signature=9bc40c5b3664344427ef89dfdfb4b444cbbfcc1f62c25b7e5df00fc64af7c679&X-Amz-SignedHeaders=host&x-id=GetObject)
