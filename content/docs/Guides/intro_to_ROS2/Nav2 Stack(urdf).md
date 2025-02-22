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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN3LHDB6%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T070622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh6ztBf7zrLA6mxqXbg3y1S8tONlNFx%2By3bAhz38nQYAIgWl6n0%2FkPPKfBISmImH4%2FePwiXBqnXXfGDnlAOxZi8UwqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFNOiwAbCc4Gapc6WircA3%2F8sBZBvOXTPgwaFFkuCy5WE8Vh61ddPiPISVlxW8C4lsnfDw60TNGcUxiM4l0NWLgPJxvWzA9%2FA4fcQfOWX7OwqQ%2BYg54Te9tOxjIk2JY7D58EwPjyi33bxxy%2BwcmYQPDkMV2dPpaNRpQJ1HEaKemPzB8BwOvqADj1Kn05yY%2FbQgOmnh3zRl%2FdtNY2EldhWohbxzEQkYAzVw%2FOpEjEzuc7NVaJsOSY%2Ffpma3rfy%2Fw5WvuewJSWskGH2samOsTqSVvemvp1iFqAvPtS3F%2B4zDnbgI%2Bn%2FWmC0YTANmkFwAAykxySppVXIBkYVPEPCm0RdqIGqFdkU47X0XGuh2jLW%2F%2BwvQGQq4RkOPPcRYw37KJFeH59nQtYER8%2Bs1sPjVLH7N%2FTSE9cdWOPcfa80bNpIb3pWhYmqOGfTXFr1HhwnplyueXhKE8LiSItDO2ahra3wV9gx0ogPDImv4M6enXw5yyC35xj5EbWxFSqyJiMaqDRBQIoYahMuG8FZ4zVB37agw7ntaG1xeJvNjDXg0he0dllqcpgwMEtPGNaSMZZKG6qyUTCe7FfIdfduIl3HHmi3BbI0Ulk54Y%2BhzRjCOJOnCtdaWNoMUOXGdDsMJ8ZD93HCFkNNFFgStIBz5bVMJHI5b0GOqUBPzTUjhBgE0U7Ie%2Bgj7%2FGHvkOHyVkv%2FQv%2FeIpdSvTaOd%2Ff403vWFFRVD5kGTvuhlyWGQeLMy8hwuj%2FUUUy7ka8P%2FtiyQzyT8lNxIKJTzmtFsXjoggYPDd7KObrLg6OL31%2Fqp%2B8ZcfJ%2BbJl%2B4DFrhKDgRPxBw25ajzaM2yGjVrYDnSq3o%2Bw0RoCxxjUIrZljkr0voP3S4Nf91uKdjuDQYdWtlcWDMs&X-Amz-Signature=37f531c2cd582a12a69f83be4cc7d12f90569ebe1e02248b36b935483c3491ea&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN3LHDB6%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T070622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh6ztBf7zrLA6mxqXbg3y1S8tONlNFx%2By3bAhz38nQYAIgWl6n0%2FkPPKfBISmImH4%2FePwiXBqnXXfGDnlAOxZi8UwqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFNOiwAbCc4Gapc6WircA3%2F8sBZBvOXTPgwaFFkuCy5WE8Vh61ddPiPISVlxW8C4lsnfDw60TNGcUxiM4l0NWLgPJxvWzA9%2FA4fcQfOWX7OwqQ%2BYg54Te9tOxjIk2JY7D58EwPjyi33bxxy%2BwcmYQPDkMV2dPpaNRpQJ1HEaKemPzB8BwOvqADj1Kn05yY%2FbQgOmnh3zRl%2FdtNY2EldhWohbxzEQkYAzVw%2FOpEjEzuc7NVaJsOSY%2Ffpma3rfy%2Fw5WvuewJSWskGH2samOsTqSVvemvp1iFqAvPtS3F%2B4zDnbgI%2Bn%2FWmC0YTANmkFwAAykxySppVXIBkYVPEPCm0RdqIGqFdkU47X0XGuh2jLW%2F%2BwvQGQq4RkOPPcRYw37KJFeH59nQtYER8%2Bs1sPjVLH7N%2FTSE9cdWOPcfa80bNpIb3pWhYmqOGfTXFr1HhwnplyueXhKE8LiSItDO2ahra3wV9gx0ogPDImv4M6enXw5yyC35xj5EbWxFSqyJiMaqDRBQIoYahMuG8FZ4zVB37agw7ntaG1xeJvNjDXg0he0dllqcpgwMEtPGNaSMZZKG6qyUTCe7FfIdfduIl3HHmi3BbI0Ulk54Y%2BhzRjCOJOnCtdaWNoMUOXGdDsMJ8ZD93HCFkNNFFgStIBz5bVMJHI5b0GOqUBPzTUjhBgE0U7Ie%2Bgj7%2FGHvkOHyVkv%2FQv%2FeIpdSvTaOd%2Ff403vWFFRVD5kGTvuhlyWGQeLMy8hwuj%2FUUUy7ka8P%2FtiyQzyT8lNxIKJTzmtFsXjoggYPDd7KObrLg6OL31%2Fqp%2B8ZcfJ%2BbJl%2B4DFrhKDgRPxBw25ajzaM2yGjVrYDnSq3o%2Bw0RoCxxjUIrZljkr0voP3S4Nf91uKdjuDQYdWtlcWDMs&X-Amz-Signature=b25846d3a99ddd12222fc71d405744f583c44f0dee27fa2f941a80d04c7c8d44&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN3LHDB6%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T070622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh6ztBf7zrLA6mxqXbg3y1S8tONlNFx%2By3bAhz38nQYAIgWl6n0%2FkPPKfBISmImH4%2FePwiXBqnXXfGDnlAOxZi8UwqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFNOiwAbCc4Gapc6WircA3%2F8sBZBvOXTPgwaFFkuCy5WE8Vh61ddPiPISVlxW8C4lsnfDw60TNGcUxiM4l0NWLgPJxvWzA9%2FA4fcQfOWX7OwqQ%2BYg54Te9tOxjIk2JY7D58EwPjyi33bxxy%2BwcmYQPDkMV2dPpaNRpQJ1HEaKemPzB8BwOvqADj1Kn05yY%2FbQgOmnh3zRl%2FdtNY2EldhWohbxzEQkYAzVw%2FOpEjEzuc7NVaJsOSY%2Ffpma3rfy%2Fw5WvuewJSWskGH2samOsTqSVvemvp1iFqAvPtS3F%2B4zDnbgI%2Bn%2FWmC0YTANmkFwAAykxySppVXIBkYVPEPCm0RdqIGqFdkU47X0XGuh2jLW%2F%2BwvQGQq4RkOPPcRYw37KJFeH59nQtYER8%2Bs1sPjVLH7N%2FTSE9cdWOPcfa80bNpIb3pWhYmqOGfTXFr1HhwnplyueXhKE8LiSItDO2ahra3wV9gx0ogPDImv4M6enXw5yyC35xj5EbWxFSqyJiMaqDRBQIoYahMuG8FZ4zVB37agw7ntaG1xeJvNjDXg0he0dllqcpgwMEtPGNaSMZZKG6qyUTCe7FfIdfduIl3HHmi3BbI0Ulk54Y%2BhzRjCOJOnCtdaWNoMUOXGdDsMJ8ZD93HCFkNNFFgStIBz5bVMJHI5b0GOqUBPzTUjhBgE0U7Ie%2Bgj7%2FGHvkOHyVkv%2FQv%2FeIpdSvTaOd%2Ff403vWFFRVD5kGTvuhlyWGQeLMy8hwuj%2FUUUy7ka8P%2FtiyQzyT8lNxIKJTzmtFsXjoggYPDd7KObrLg6OL31%2Fqp%2B8ZcfJ%2BbJl%2B4DFrhKDgRPxBw25ajzaM2yGjVrYDnSq3o%2Bw0RoCxxjUIrZljkr0voP3S4Nf91uKdjuDQYdWtlcWDMs&X-Amz-Signature=5ddc369b7d8af1204acdb06f4c845ee908295949065a7c216c1e9d825e8da225&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN3LHDB6%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T070622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh6ztBf7zrLA6mxqXbg3y1S8tONlNFx%2By3bAhz38nQYAIgWl6n0%2FkPPKfBISmImH4%2FePwiXBqnXXfGDnlAOxZi8UwqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFNOiwAbCc4Gapc6WircA3%2F8sBZBvOXTPgwaFFkuCy5WE8Vh61ddPiPISVlxW8C4lsnfDw60TNGcUxiM4l0NWLgPJxvWzA9%2FA4fcQfOWX7OwqQ%2BYg54Te9tOxjIk2JY7D58EwPjyi33bxxy%2BwcmYQPDkMV2dPpaNRpQJ1HEaKemPzB8BwOvqADj1Kn05yY%2FbQgOmnh3zRl%2FdtNY2EldhWohbxzEQkYAzVw%2FOpEjEzuc7NVaJsOSY%2Ffpma3rfy%2Fw5WvuewJSWskGH2samOsTqSVvemvp1iFqAvPtS3F%2B4zDnbgI%2Bn%2FWmC0YTANmkFwAAykxySppVXIBkYVPEPCm0RdqIGqFdkU47X0XGuh2jLW%2F%2BwvQGQq4RkOPPcRYw37KJFeH59nQtYER8%2Bs1sPjVLH7N%2FTSE9cdWOPcfa80bNpIb3pWhYmqOGfTXFr1HhwnplyueXhKE8LiSItDO2ahra3wV9gx0ogPDImv4M6enXw5yyC35xj5EbWxFSqyJiMaqDRBQIoYahMuG8FZ4zVB37agw7ntaG1xeJvNjDXg0he0dllqcpgwMEtPGNaSMZZKG6qyUTCe7FfIdfduIl3HHmi3BbI0Ulk54Y%2BhzRjCOJOnCtdaWNoMUOXGdDsMJ8ZD93HCFkNNFFgStIBz5bVMJHI5b0GOqUBPzTUjhBgE0U7Ie%2Bgj7%2FGHvkOHyVkv%2FQv%2FeIpdSvTaOd%2Ff403vWFFRVD5kGTvuhlyWGQeLMy8hwuj%2FUUUy7ka8P%2FtiyQzyT8lNxIKJTzmtFsXjoggYPDd7KObrLg6OL31%2Fqp%2B8ZcfJ%2BbJl%2B4DFrhKDgRPxBw25ajzaM2yGjVrYDnSq3o%2Bw0RoCxxjUIrZljkr0voP3S4Nf91uKdjuDQYdWtlcWDMs&X-Amz-Signature=aa847cd0f83a5f1e901dd9a37ef4343ea59f97a0ee0e24700970899a1f2b1222&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN3LHDB6%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T070622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh6ztBf7zrLA6mxqXbg3y1S8tONlNFx%2By3bAhz38nQYAIgWl6n0%2FkPPKfBISmImH4%2FePwiXBqnXXfGDnlAOxZi8UwqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFNOiwAbCc4Gapc6WircA3%2F8sBZBvOXTPgwaFFkuCy5WE8Vh61ddPiPISVlxW8C4lsnfDw60TNGcUxiM4l0NWLgPJxvWzA9%2FA4fcQfOWX7OwqQ%2BYg54Te9tOxjIk2JY7D58EwPjyi33bxxy%2BwcmYQPDkMV2dPpaNRpQJ1HEaKemPzB8BwOvqADj1Kn05yY%2FbQgOmnh3zRl%2FdtNY2EldhWohbxzEQkYAzVw%2FOpEjEzuc7NVaJsOSY%2Ffpma3rfy%2Fw5WvuewJSWskGH2samOsTqSVvemvp1iFqAvPtS3F%2B4zDnbgI%2Bn%2FWmC0YTANmkFwAAykxySppVXIBkYVPEPCm0RdqIGqFdkU47X0XGuh2jLW%2F%2BwvQGQq4RkOPPcRYw37KJFeH59nQtYER8%2Bs1sPjVLH7N%2FTSE9cdWOPcfa80bNpIb3pWhYmqOGfTXFr1HhwnplyueXhKE8LiSItDO2ahra3wV9gx0ogPDImv4M6enXw5yyC35xj5EbWxFSqyJiMaqDRBQIoYahMuG8FZ4zVB37agw7ntaG1xeJvNjDXg0he0dllqcpgwMEtPGNaSMZZKG6qyUTCe7FfIdfduIl3HHmi3BbI0Ulk54Y%2BhzRjCOJOnCtdaWNoMUOXGdDsMJ8ZD93HCFkNNFFgStIBz5bVMJHI5b0GOqUBPzTUjhBgE0U7Ie%2Bgj7%2FGHvkOHyVkv%2FQv%2FeIpdSvTaOd%2Ff403vWFFRVD5kGTvuhlyWGQeLMy8hwuj%2FUUUy7ka8P%2FtiyQzyT8lNxIKJTzmtFsXjoggYPDd7KObrLg6OL31%2Fqp%2B8ZcfJ%2BbJl%2B4DFrhKDgRPxBw25ajzaM2yGjVrYDnSq3o%2Bw0RoCxxjUIrZljkr0voP3S4Nf91uKdjuDQYdWtlcWDMs&X-Amz-Signature=ee3cbcf2f61cb51e6ddb136bf13ccfa2fc83f666bad8699c96243ee313f07ca3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SN3LHDB6%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T070622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDh6ztBf7zrLA6mxqXbg3y1S8tONlNFx%2By3bAhz38nQYAIgWl6n0%2FkPPKfBISmImH4%2FePwiXBqnXXfGDnlAOxZi8UwqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFNOiwAbCc4Gapc6WircA3%2F8sBZBvOXTPgwaFFkuCy5WE8Vh61ddPiPISVlxW8C4lsnfDw60TNGcUxiM4l0NWLgPJxvWzA9%2FA4fcQfOWX7OwqQ%2BYg54Te9tOxjIk2JY7D58EwPjyi33bxxy%2BwcmYQPDkMV2dPpaNRpQJ1HEaKemPzB8BwOvqADj1Kn05yY%2FbQgOmnh3zRl%2FdtNY2EldhWohbxzEQkYAzVw%2FOpEjEzuc7NVaJsOSY%2Ffpma3rfy%2Fw5WvuewJSWskGH2samOsTqSVvemvp1iFqAvPtS3F%2B4zDnbgI%2Bn%2FWmC0YTANmkFwAAykxySppVXIBkYVPEPCm0RdqIGqFdkU47X0XGuh2jLW%2F%2BwvQGQq4RkOPPcRYw37KJFeH59nQtYER8%2Bs1sPjVLH7N%2FTSE9cdWOPcfa80bNpIb3pWhYmqOGfTXFr1HhwnplyueXhKE8LiSItDO2ahra3wV9gx0ogPDImv4M6enXw5yyC35xj5EbWxFSqyJiMaqDRBQIoYahMuG8FZ4zVB37agw7ntaG1xeJvNjDXg0he0dllqcpgwMEtPGNaSMZZKG6qyUTCe7FfIdfduIl3HHmi3BbI0Ulk54Y%2BhzRjCOJOnCtdaWNoMUOXGdDsMJ8ZD93HCFkNNFFgStIBz5bVMJHI5b0GOqUBPzTUjhBgE0U7Ie%2Bgj7%2FGHvkOHyVkv%2FQv%2FeIpdSvTaOd%2Ff403vWFFRVD5kGTvuhlyWGQeLMy8hwuj%2FUUUy7ka8P%2FtiyQzyT8lNxIKJTzmtFsXjoggYPDd7KObrLg6OL31%2Fqp%2B8ZcfJ%2BbJl%2B4DFrhKDgRPxBw25ajzaM2yGjVrYDnSq3o%2Bw0RoCxxjUIrZljkr0voP3S4Nf91uKdjuDQYdWtlcWDMs&X-Amz-Signature=130538afebf4e8ebbc8c1f427aa7295875a32eea86aded051426268c4a323e44&X-Amz-SignedHeaders=host&x-id=GetObject)
