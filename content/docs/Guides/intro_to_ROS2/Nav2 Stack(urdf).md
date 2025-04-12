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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE7QKG6X%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T180956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQD%2B%2BBQ6TielB0DmCXW75%2F4t%2FBvGchMTasjNiE4pdosNIwIgRtyHJkBf%2F6pQEJ1r28DJicSHuDo5xn%2BhS%2FdZRNNGgcsqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLnXmbTu51W%2BctkY0CrcA4TM3GlBz%2FNAA5RNSGHNl3%2F7cm4Dgk4YD7MspXN4TficSl%2B0fIU6Bi9zj8Cn%2BJNFENT7jVP%2FM8El%2Fb9YgJ6buX9E1EbYyWxbMBNRtpqvA7iSDq5ZUtpASdWsJF8YL4erX9UWfAv6jGgorKeLGSsA1%2BvuBE%2BwBseGmUkCF%2Bfch1Ig9UtjM6De%2BCLqzjNKkNaH1NLi%2FSmw1DU3%2BZgA2IYJ39aK8LzDM7Em5L84EoA9yvJvWzqhlq9ROzygbDI4epQOdm7cHSvXJFOcuMDIhS69WebAL94SoZIA2VfxpeZh8EeyGorwsLkKq3vgRRbO6QGuZB%2B02qMPM7Uwt8fsa%2FgbOc0%2BrN052jHgJZ0oyndo9G5KV9R22PDCrG9GZ4MuxLU9XaasFznv4yJbwP%2BpUJN1FpJRoJLyZLhfMdw2bD5dOEVwiHwXPIZU4S0%2BF0lzsiRWfwhORmH86DR%2FbLhTqreP%2F2NJf2VPVajQ96sLtCxBrS5ZNISsZqErlIpVMh6XPlA9nB%2FjMIbuGvQ%2FdRAkFqQd76s99YZ3plFVzdgkFxn7tXBTdmPb758aGNkb3YMq5%2BLs82%2FXT3%2FvvRI1ihmmwzZ2iAFyT4op8aw4OG7bGJuFGzFKWwZPnY6PfmJV44DnMOb66b8GOqUBC%2FhCKnxtozhGliYAyy%2Fsk4ZoDgfYPhpJUF13lTDJaOuVx6grpkYMIbFp8nDPTMj1b0GCVaE2r8vPH9v9xpWwUt6DuPEFcKBYpRo0NIqQ2%2FpwXHWMPjwDLrWTIXXY6u2R2OtiYraArxvnJackHx35eroE6nssdCGBPAzHUCapqU%2BxeS3b8cw2m7mR6tP7a1sJHkAV1YOfuRGZ%2FxDd9MNuFOA2gDTh&X-Amz-Signature=6d39f7528ac62617963ff1aa73347cde30a3008b4bca082791e6dab19277ccb7&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE7QKG6X%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T180956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQD%2B%2BBQ6TielB0DmCXW75%2F4t%2FBvGchMTasjNiE4pdosNIwIgRtyHJkBf%2F6pQEJ1r28DJicSHuDo5xn%2BhS%2FdZRNNGgcsqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLnXmbTu51W%2BctkY0CrcA4TM3GlBz%2FNAA5RNSGHNl3%2F7cm4Dgk4YD7MspXN4TficSl%2B0fIU6Bi9zj8Cn%2BJNFENT7jVP%2FM8El%2Fb9YgJ6buX9E1EbYyWxbMBNRtpqvA7iSDq5ZUtpASdWsJF8YL4erX9UWfAv6jGgorKeLGSsA1%2BvuBE%2BwBseGmUkCF%2Bfch1Ig9UtjM6De%2BCLqzjNKkNaH1NLi%2FSmw1DU3%2BZgA2IYJ39aK8LzDM7Em5L84EoA9yvJvWzqhlq9ROzygbDI4epQOdm7cHSvXJFOcuMDIhS69WebAL94SoZIA2VfxpeZh8EeyGorwsLkKq3vgRRbO6QGuZB%2B02qMPM7Uwt8fsa%2FgbOc0%2BrN052jHgJZ0oyndo9G5KV9R22PDCrG9GZ4MuxLU9XaasFznv4yJbwP%2BpUJN1FpJRoJLyZLhfMdw2bD5dOEVwiHwXPIZU4S0%2BF0lzsiRWfwhORmH86DR%2FbLhTqreP%2F2NJf2VPVajQ96sLtCxBrS5ZNISsZqErlIpVMh6XPlA9nB%2FjMIbuGvQ%2FdRAkFqQd76s99YZ3plFVzdgkFxn7tXBTdmPb758aGNkb3YMq5%2BLs82%2FXT3%2FvvRI1ihmmwzZ2iAFyT4op8aw4OG7bGJuFGzFKWwZPnY6PfmJV44DnMOb66b8GOqUBC%2FhCKnxtozhGliYAyy%2Fsk4ZoDgfYPhpJUF13lTDJaOuVx6grpkYMIbFp8nDPTMj1b0GCVaE2r8vPH9v9xpWwUt6DuPEFcKBYpRo0NIqQ2%2FpwXHWMPjwDLrWTIXXY6u2R2OtiYraArxvnJackHx35eroE6nssdCGBPAzHUCapqU%2BxeS3b8cw2m7mR6tP7a1sJHkAV1YOfuRGZ%2FxDd9MNuFOA2gDTh&X-Amz-Signature=a83ab3b70cdbf244d46a9ab97085a08161d2f85ac6cce6c7d491a256aac6108f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE7QKG6X%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T180956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQD%2B%2BBQ6TielB0DmCXW75%2F4t%2FBvGchMTasjNiE4pdosNIwIgRtyHJkBf%2F6pQEJ1r28DJicSHuDo5xn%2BhS%2FdZRNNGgcsqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLnXmbTu51W%2BctkY0CrcA4TM3GlBz%2FNAA5RNSGHNl3%2F7cm4Dgk4YD7MspXN4TficSl%2B0fIU6Bi9zj8Cn%2BJNFENT7jVP%2FM8El%2Fb9YgJ6buX9E1EbYyWxbMBNRtpqvA7iSDq5ZUtpASdWsJF8YL4erX9UWfAv6jGgorKeLGSsA1%2BvuBE%2BwBseGmUkCF%2Bfch1Ig9UtjM6De%2BCLqzjNKkNaH1NLi%2FSmw1DU3%2BZgA2IYJ39aK8LzDM7Em5L84EoA9yvJvWzqhlq9ROzygbDI4epQOdm7cHSvXJFOcuMDIhS69WebAL94SoZIA2VfxpeZh8EeyGorwsLkKq3vgRRbO6QGuZB%2B02qMPM7Uwt8fsa%2FgbOc0%2BrN052jHgJZ0oyndo9G5KV9R22PDCrG9GZ4MuxLU9XaasFznv4yJbwP%2BpUJN1FpJRoJLyZLhfMdw2bD5dOEVwiHwXPIZU4S0%2BF0lzsiRWfwhORmH86DR%2FbLhTqreP%2F2NJf2VPVajQ96sLtCxBrS5ZNISsZqErlIpVMh6XPlA9nB%2FjMIbuGvQ%2FdRAkFqQd76s99YZ3plFVzdgkFxn7tXBTdmPb758aGNkb3YMq5%2BLs82%2FXT3%2FvvRI1ihmmwzZ2iAFyT4op8aw4OG7bGJuFGzFKWwZPnY6PfmJV44DnMOb66b8GOqUBC%2FhCKnxtozhGliYAyy%2Fsk4ZoDgfYPhpJUF13lTDJaOuVx6grpkYMIbFp8nDPTMj1b0GCVaE2r8vPH9v9xpWwUt6DuPEFcKBYpRo0NIqQ2%2FpwXHWMPjwDLrWTIXXY6u2R2OtiYraArxvnJackHx35eroE6nssdCGBPAzHUCapqU%2BxeS3b8cw2m7mR6tP7a1sJHkAV1YOfuRGZ%2FxDd9MNuFOA2gDTh&X-Amz-Signature=9accdf08b59443643dce1b751305a201eb210c47f5e0a0a08a6dcbcf3ec9dc44&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE7QKG6X%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T180956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQD%2B%2BBQ6TielB0DmCXW75%2F4t%2FBvGchMTasjNiE4pdosNIwIgRtyHJkBf%2F6pQEJ1r28DJicSHuDo5xn%2BhS%2FdZRNNGgcsqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLnXmbTu51W%2BctkY0CrcA4TM3GlBz%2FNAA5RNSGHNl3%2F7cm4Dgk4YD7MspXN4TficSl%2B0fIU6Bi9zj8Cn%2BJNFENT7jVP%2FM8El%2Fb9YgJ6buX9E1EbYyWxbMBNRtpqvA7iSDq5ZUtpASdWsJF8YL4erX9UWfAv6jGgorKeLGSsA1%2BvuBE%2BwBseGmUkCF%2Bfch1Ig9UtjM6De%2BCLqzjNKkNaH1NLi%2FSmw1DU3%2BZgA2IYJ39aK8LzDM7Em5L84EoA9yvJvWzqhlq9ROzygbDI4epQOdm7cHSvXJFOcuMDIhS69WebAL94SoZIA2VfxpeZh8EeyGorwsLkKq3vgRRbO6QGuZB%2B02qMPM7Uwt8fsa%2FgbOc0%2BrN052jHgJZ0oyndo9G5KV9R22PDCrG9GZ4MuxLU9XaasFznv4yJbwP%2BpUJN1FpJRoJLyZLhfMdw2bD5dOEVwiHwXPIZU4S0%2BF0lzsiRWfwhORmH86DR%2FbLhTqreP%2F2NJf2VPVajQ96sLtCxBrS5ZNISsZqErlIpVMh6XPlA9nB%2FjMIbuGvQ%2FdRAkFqQd76s99YZ3plFVzdgkFxn7tXBTdmPb758aGNkb3YMq5%2BLs82%2FXT3%2FvvRI1ihmmwzZ2iAFyT4op8aw4OG7bGJuFGzFKWwZPnY6PfmJV44DnMOb66b8GOqUBC%2FhCKnxtozhGliYAyy%2Fsk4ZoDgfYPhpJUF13lTDJaOuVx6grpkYMIbFp8nDPTMj1b0GCVaE2r8vPH9v9xpWwUt6DuPEFcKBYpRo0NIqQ2%2FpwXHWMPjwDLrWTIXXY6u2R2OtiYraArxvnJackHx35eroE6nssdCGBPAzHUCapqU%2BxeS3b8cw2m7mR6tP7a1sJHkAV1YOfuRGZ%2FxDd9MNuFOA2gDTh&X-Amz-Signature=ae6e6ae61100a50f0149da5996b2d9123ad4d603663acae6364e07efb03715dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE7QKG6X%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T180956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQD%2B%2BBQ6TielB0DmCXW75%2F4t%2FBvGchMTasjNiE4pdosNIwIgRtyHJkBf%2F6pQEJ1r28DJicSHuDo5xn%2BhS%2FdZRNNGgcsqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLnXmbTu51W%2BctkY0CrcA4TM3GlBz%2FNAA5RNSGHNl3%2F7cm4Dgk4YD7MspXN4TficSl%2B0fIU6Bi9zj8Cn%2BJNFENT7jVP%2FM8El%2Fb9YgJ6buX9E1EbYyWxbMBNRtpqvA7iSDq5ZUtpASdWsJF8YL4erX9UWfAv6jGgorKeLGSsA1%2BvuBE%2BwBseGmUkCF%2Bfch1Ig9UtjM6De%2BCLqzjNKkNaH1NLi%2FSmw1DU3%2BZgA2IYJ39aK8LzDM7Em5L84EoA9yvJvWzqhlq9ROzygbDI4epQOdm7cHSvXJFOcuMDIhS69WebAL94SoZIA2VfxpeZh8EeyGorwsLkKq3vgRRbO6QGuZB%2B02qMPM7Uwt8fsa%2FgbOc0%2BrN052jHgJZ0oyndo9G5KV9R22PDCrG9GZ4MuxLU9XaasFznv4yJbwP%2BpUJN1FpJRoJLyZLhfMdw2bD5dOEVwiHwXPIZU4S0%2BF0lzsiRWfwhORmH86DR%2FbLhTqreP%2F2NJf2VPVajQ96sLtCxBrS5ZNISsZqErlIpVMh6XPlA9nB%2FjMIbuGvQ%2FdRAkFqQd76s99YZ3plFVzdgkFxn7tXBTdmPb758aGNkb3YMq5%2BLs82%2FXT3%2FvvRI1ihmmwzZ2iAFyT4op8aw4OG7bGJuFGzFKWwZPnY6PfmJV44DnMOb66b8GOqUBC%2FhCKnxtozhGliYAyy%2Fsk4ZoDgfYPhpJUF13lTDJaOuVx6grpkYMIbFp8nDPTMj1b0GCVaE2r8vPH9v9xpWwUt6DuPEFcKBYpRo0NIqQ2%2FpwXHWMPjwDLrWTIXXY6u2R2OtiYraArxvnJackHx35eroE6nssdCGBPAzHUCapqU%2BxeS3b8cw2m7mR6tP7a1sJHkAV1YOfuRGZ%2FxDd9MNuFOA2gDTh&X-Amz-Signature=d580788c8e16c1efc29f1254395cee682cb9f0f3eb48391adc06206ebd98b08d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE7QKG6X%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T180956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQD%2B%2BBQ6TielB0DmCXW75%2F4t%2FBvGchMTasjNiE4pdosNIwIgRtyHJkBf%2F6pQEJ1r28DJicSHuDo5xn%2BhS%2FdZRNNGgcsqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLnXmbTu51W%2BctkY0CrcA4TM3GlBz%2FNAA5RNSGHNl3%2F7cm4Dgk4YD7MspXN4TficSl%2B0fIU6Bi9zj8Cn%2BJNFENT7jVP%2FM8El%2Fb9YgJ6buX9E1EbYyWxbMBNRtpqvA7iSDq5ZUtpASdWsJF8YL4erX9UWfAv6jGgorKeLGSsA1%2BvuBE%2BwBseGmUkCF%2Bfch1Ig9UtjM6De%2BCLqzjNKkNaH1NLi%2FSmw1DU3%2BZgA2IYJ39aK8LzDM7Em5L84EoA9yvJvWzqhlq9ROzygbDI4epQOdm7cHSvXJFOcuMDIhS69WebAL94SoZIA2VfxpeZh8EeyGorwsLkKq3vgRRbO6QGuZB%2B02qMPM7Uwt8fsa%2FgbOc0%2BrN052jHgJZ0oyndo9G5KV9R22PDCrG9GZ4MuxLU9XaasFznv4yJbwP%2BpUJN1FpJRoJLyZLhfMdw2bD5dOEVwiHwXPIZU4S0%2BF0lzsiRWfwhORmH86DR%2FbLhTqreP%2F2NJf2VPVajQ96sLtCxBrS5ZNISsZqErlIpVMh6XPlA9nB%2FjMIbuGvQ%2FdRAkFqQd76s99YZ3plFVzdgkFxn7tXBTdmPb758aGNkb3YMq5%2BLs82%2FXT3%2FvvRI1ihmmwzZ2iAFyT4op8aw4OG7bGJuFGzFKWwZPnY6PfmJV44DnMOb66b8GOqUBC%2FhCKnxtozhGliYAyy%2Fsk4ZoDgfYPhpJUF13lTDJaOuVx6grpkYMIbFp8nDPTMj1b0GCVaE2r8vPH9v9xpWwUt6DuPEFcKBYpRo0NIqQ2%2FpwXHWMPjwDLrWTIXXY6u2R2OtiYraArxvnJackHx35eroE6nssdCGBPAzHUCapqU%2BxeS3b8cw2m7mR6tP7a1sJHkAV1YOfuRGZ%2FxDd9MNuFOA2gDTh&X-Amz-Signature=8d95fd7c93f5892e18a14230cdfd14c825a6f126ec935c410de224a33f3c1409&X-Amz-SignedHeaders=host&x-id=GetObject)
