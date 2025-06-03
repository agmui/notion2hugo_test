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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B3OUD5Y%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIDJiMAKTQBPDn0N4F%2F1eYx%2B0hA3D%2Bax28eA3rzhoNtGhAiBAVLSvqoawnW6XQQxyvkmN5H3782di0f6JemRPmBrwVir%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMcLccDfjeStUlSY8IKtwDlzdzMc903bulOu6rppF7%2FYo4ZlZK04p6VJjwrzAmxLLo71r8%2BZ78c4sLCL2Qfo%2FzSVJmHLVkMdSX6GWhvN%2B%2BRZ3WQ2RtCBh5xMFKnWb4Jd2gS9c1z%2Bxc0yySbJ9LNAcsKiWEfB4BmmwAkG6iPy0zWjZwdcs%2FZbr1JyqF03jLtR2iWX%2B0z7K6ceifKJ9AY60CGKxCuqf1NIb43W4ao61kC4V7WMuYySvFqKqF7tKdj9e1CaXWMfsWf3ocD0DXHANsEEGT1oo1zn4upMpV006cyiPIQeFTDwVPcjqmGORNdUkNatHwsLNekbwGCb%2Bz1IPB5U9H0o7Pt%2BPDIgPoluuq5YZPCPjmFRD2gjAGl9s0IiNTk1nLafTK1aklnWTn5W9jIcrPIPUeBqT667V8%2FV1mcZ6b%2B0kTnvyLxy%2BOpGugP3RQy1PneiYkwhkJcAFVGSyvsBKcDXJFUn0lj1o9qIzBd%2FRPcAct2PczzDMQ3%2BYX1DuS08BjkEelGQM4RAT%2BuKB0PoA%2BUliwkjipMN48T52i121MFvE64hngHm5znZtSH76IXWlVKLQheuGjqWJP7yN8IZ7zjX5qKLixm11zUpcZFL6RAKW9cN1QuCnnXBzNZjwyuC2z8vZHggtFxlcw8vf9wQY6pgGy%2FG%2Fygw4KzEFWxhbZ931rkVrw2l3FXJJ4sw4NDCol764I5nYSheS302nHjOd9jEie1ZytgaFXV3CZ4q1wxkmg77imEB7tEy7mFgdCuL3kwoMiC09bbpvzm75xXxekcTr7BuyRLEMvo50sA6nh1whBxRrqHGa5VSzhBXILEoCJCeHROM83S5MGXbQf7PcMtc9IS%2BEKUIOnUSCCylfdH2ETaHJniWlS&X-Amz-Signature=184f0f90755f9fd5cf4c904a0cc0add9e07478f347d3f7833f4728939a5169ad&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B3OUD5Y%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIDJiMAKTQBPDn0N4F%2F1eYx%2B0hA3D%2Bax28eA3rzhoNtGhAiBAVLSvqoawnW6XQQxyvkmN5H3782di0f6JemRPmBrwVir%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMcLccDfjeStUlSY8IKtwDlzdzMc903bulOu6rppF7%2FYo4ZlZK04p6VJjwrzAmxLLo71r8%2BZ78c4sLCL2Qfo%2FzSVJmHLVkMdSX6GWhvN%2B%2BRZ3WQ2RtCBh5xMFKnWb4Jd2gS9c1z%2Bxc0yySbJ9LNAcsKiWEfB4BmmwAkG6iPy0zWjZwdcs%2FZbr1JyqF03jLtR2iWX%2B0z7K6ceifKJ9AY60CGKxCuqf1NIb43W4ao61kC4V7WMuYySvFqKqF7tKdj9e1CaXWMfsWf3ocD0DXHANsEEGT1oo1zn4upMpV006cyiPIQeFTDwVPcjqmGORNdUkNatHwsLNekbwGCb%2Bz1IPB5U9H0o7Pt%2BPDIgPoluuq5YZPCPjmFRD2gjAGl9s0IiNTk1nLafTK1aklnWTn5W9jIcrPIPUeBqT667V8%2FV1mcZ6b%2B0kTnvyLxy%2BOpGugP3RQy1PneiYkwhkJcAFVGSyvsBKcDXJFUn0lj1o9qIzBd%2FRPcAct2PczzDMQ3%2BYX1DuS08BjkEelGQM4RAT%2BuKB0PoA%2BUliwkjipMN48T52i121MFvE64hngHm5znZtSH76IXWlVKLQheuGjqWJP7yN8IZ7zjX5qKLixm11zUpcZFL6RAKW9cN1QuCnnXBzNZjwyuC2z8vZHggtFxlcw8vf9wQY6pgGy%2FG%2Fygw4KzEFWxhbZ931rkVrw2l3FXJJ4sw4NDCol764I5nYSheS302nHjOd9jEie1ZytgaFXV3CZ4q1wxkmg77imEB7tEy7mFgdCuL3kwoMiC09bbpvzm75xXxekcTr7BuyRLEMvo50sA6nh1whBxRrqHGa5VSzhBXILEoCJCeHROM83S5MGXbQf7PcMtc9IS%2BEKUIOnUSCCylfdH2ETaHJniWlS&X-Amz-Signature=7a9387f21ccf6305563ab2c67d223e875e026366b196be10b045187c7dc98b21&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B3OUD5Y%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIDJiMAKTQBPDn0N4F%2F1eYx%2B0hA3D%2Bax28eA3rzhoNtGhAiBAVLSvqoawnW6XQQxyvkmN5H3782di0f6JemRPmBrwVir%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMcLccDfjeStUlSY8IKtwDlzdzMc903bulOu6rppF7%2FYo4ZlZK04p6VJjwrzAmxLLo71r8%2BZ78c4sLCL2Qfo%2FzSVJmHLVkMdSX6GWhvN%2B%2BRZ3WQ2RtCBh5xMFKnWb4Jd2gS9c1z%2Bxc0yySbJ9LNAcsKiWEfB4BmmwAkG6iPy0zWjZwdcs%2FZbr1JyqF03jLtR2iWX%2B0z7K6ceifKJ9AY60CGKxCuqf1NIb43W4ao61kC4V7WMuYySvFqKqF7tKdj9e1CaXWMfsWf3ocD0DXHANsEEGT1oo1zn4upMpV006cyiPIQeFTDwVPcjqmGORNdUkNatHwsLNekbwGCb%2Bz1IPB5U9H0o7Pt%2BPDIgPoluuq5YZPCPjmFRD2gjAGl9s0IiNTk1nLafTK1aklnWTn5W9jIcrPIPUeBqT667V8%2FV1mcZ6b%2B0kTnvyLxy%2BOpGugP3RQy1PneiYkwhkJcAFVGSyvsBKcDXJFUn0lj1o9qIzBd%2FRPcAct2PczzDMQ3%2BYX1DuS08BjkEelGQM4RAT%2BuKB0PoA%2BUliwkjipMN48T52i121MFvE64hngHm5znZtSH76IXWlVKLQheuGjqWJP7yN8IZ7zjX5qKLixm11zUpcZFL6RAKW9cN1QuCnnXBzNZjwyuC2z8vZHggtFxlcw8vf9wQY6pgGy%2FG%2Fygw4KzEFWxhbZ931rkVrw2l3FXJJ4sw4NDCol764I5nYSheS302nHjOd9jEie1ZytgaFXV3CZ4q1wxkmg77imEB7tEy7mFgdCuL3kwoMiC09bbpvzm75xXxekcTr7BuyRLEMvo50sA6nh1whBxRrqHGa5VSzhBXILEoCJCeHROM83S5MGXbQf7PcMtc9IS%2BEKUIOnUSCCylfdH2ETaHJniWlS&X-Amz-Signature=341419fe81bde173a5c2f4a2156416784738462b3a6396f548e7bfa7e2ee062e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B3OUD5Y%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIDJiMAKTQBPDn0N4F%2F1eYx%2B0hA3D%2Bax28eA3rzhoNtGhAiBAVLSvqoawnW6XQQxyvkmN5H3782di0f6JemRPmBrwVir%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMcLccDfjeStUlSY8IKtwDlzdzMc903bulOu6rppF7%2FYo4ZlZK04p6VJjwrzAmxLLo71r8%2BZ78c4sLCL2Qfo%2FzSVJmHLVkMdSX6GWhvN%2B%2BRZ3WQ2RtCBh5xMFKnWb4Jd2gS9c1z%2Bxc0yySbJ9LNAcsKiWEfB4BmmwAkG6iPy0zWjZwdcs%2FZbr1JyqF03jLtR2iWX%2B0z7K6ceifKJ9AY60CGKxCuqf1NIb43W4ao61kC4V7WMuYySvFqKqF7tKdj9e1CaXWMfsWf3ocD0DXHANsEEGT1oo1zn4upMpV006cyiPIQeFTDwVPcjqmGORNdUkNatHwsLNekbwGCb%2Bz1IPB5U9H0o7Pt%2BPDIgPoluuq5YZPCPjmFRD2gjAGl9s0IiNTk1nLafTK1aklnWTn5W9jIcrPIPUeBqT667V8%2FV1mcZ6b%2B0kTnvyLxy%2BOpGugP3RQy1PneiYkwhkJcAFVGSyvsBKcDXJFUn0lj1o9qIzBd%2FRPcAct2PczzDMQ3%2BYX1DuS08BjkEelGQM4RAT%2BuKB0PoA%2BUliwkjipMN48T52i121MFvE64hngHm5znZtSH76IXWlVKLQheuGjqWJP7yN8IZ7zjX5qKLixm11zUpcZFL6RAKW9cN1QuCnnXBzNZjwyuC2z8vZHggtFxlcw8vf9wQY6pgGy%2FG%2Fygw4KzEFWxhbZ931rkVrw2l3FXJJ4sw4NDCol764I5nYSheS302nHjOd9jEie1ZytgaFXV3CZ4q1wxkmg77imEB7tEy7mFgdCuL3kwoMiC09bbpvzm75xXxekcTr7BuyRLEMvo50sA6nh1whBxRrqHGa5VSzhBXILEoCJCeHROM83S5MGXbQf7PcMtc9IS%2BEKUIOnUSCCylfdH2ETaHJniWlS&X-Amz-Signature=cd4ff74c72dc8a2ccfdd862c55d3ee67c1f91c0ceda6ee01951666ff6e2b129a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B3OUD5Y%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIDJiMAKTQBPDn0N4F%2F1eYx%2B0hA3D%2Bax28eA3rzhoNtGhAiBAVLSvqoawnW6XQQxyvkmN5H3782di0f6JemRPmBrwVir%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMcLccDfjeStUlSY8IKtwDlzdzMc903bulOu6rppF7%2FYo4ZlZK04p6VJjwrzAmxLLo71r8%2BZ78c4sLCL2Qfo%2FzSVJmHLVkMdSX6GWhvN%2B%2BRZ3WQ2RtCBh5xMFKnWb4Jd2gS9c1z%2Bxc0yySbJ9LNAcsKiWEfB4BmmwAkG6iPy0zWjZwdcs%2FZbr1JyqF03jLtR2iWX%2B0z7K6ceifKJ9AY60CGKxCuqf1NIb43W4ao61kC4V7WMuYySvFqKqF7tKdj9e1CaXWMfsWf3ocD0DXHANsEEGT1oo1zn4upMpV006cyiPIQeFTDwVPcjqmGORNdUkNatHwsLNekbwGCb%2Bz1IPB5U9H0o7Pt%2BPDIgPoluuq5YZPCPjmFRD2gjAGl9s0IiNTk1nLafTK1aklnWTn5W9jIcrPIPUeBqT667V8%2FV1mcZ6b%2B0kTnvyLxy%2BOpGugP3RQy1PneiYkwhkJcAFVGSyvsBKcDXJFUn0lj1o9qIzBd%2FRPcAct2PczzDMQ3%2BYX1DuS08BjkEelGQM4RAT%2BuKB0PoA%2BUliwkjipMN48T52i121MFvE64hngHm5znZtSH76IXWlVKLQheuGjqWJP7yN8IZ7zjX5qKLixm11zUpcZFL6RAKW9cN1QuCnnXBzNZjwyuC2z8vZHggtFxlcw8vf9wQY6pgGy%2FG%2Fygw4KzEFWxhbZ931rkVrw2l3FXJJ4sw4NDCol764I5nYSheS302nHjOd9jEie1ZytgaFXV3CZ4q1wxkmg77imEB7tEy7mFgdCuL3kwoMiC09bbpvzm75xXxekcTr7BuyRLEMvo50sA6nh1whBxRrqHGa5VSzhBXILEoCJCeHROM83S5MGXbQf7PcMtc9IS%2BEKUIOnUSCCylfdH2ETaHJniWlS&X-Amz-Signature=38f114fd894d210a623416132491250d9e8a7856a8cebe55fda0eca631695772&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662B3OUD5Y%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T230828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJGMEQCIDJiMAKTQBPDn0N4F%2F1eYx%2B0hA3D%2Bax28eA3rzhoNtGhAiBAVLSvqoawnW6XQQxyvkmN5H3782di0f6JemRPmBrwVir%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMcLccDfjeStUlSY8IKtwDlzdzMc903bulOu6rppF7%2FYo4ZlZK04p6VJjwrzAmxLLo71r8%2BZ78c4sLCL2Qfo%2FzSVJmHLVkMdSX6GWhvN%2B%2BRZ3WQ2RtCBh5xMFKnWb4Jd2gS9c1z%2Bxc0yySbJ9LNAcsKiWEfB4BmmwAkG6iPy0zWjZwdcs%2FZbr1JyqF03jLtR2iWX%2B0z7K6ceifKJ9AY60CGKxCuqf1NIb43W4ao61kC4V7WMuYySvFqKqF7tKdj9e1CaXWMfsWf3ocD0DXHANsEEGT1oo1zn4upMpV006cyiPIQeFTDwVPcjqmGORNdUkNatHwsLNekbwGCb%2Bz1IPB5U9H0o7Pt%2BPDIgPoluuq5YZPCPjmFRD2gjAGl9s0IiNTk1nLafTK1aklnWTn5W9jIcrPIPUeBqT667V8%2FV1mcZ6b%2B0kTnvyLxy%2BOpGugP3RQy1PneiYkwhkJcAFVGSyvsBKcDXJFUn0lj1o9qIzBd%2FRPcAct2PczzDMQ3%2BYX1DuS08BjkEelGQM4RAT%2BuKB0PoA%2BUliwkjipMN48T52i121MFvE64hngHm5znZtSH76IXWlVKLQheuGjqWJP7yN8IZ7zjX5qKLixm11zUpcZFL6RAKW9cN1QuCnnXBzNZjwyuC2z8vZHggtFxlcw8vf9wQY6pgGy%2FG%2Fygw4KzEFWxhbZ931rkVrw2l3FXJJ4sw4NDCol764I5nYSheS302nHjOd9jEie1ZytgaFXV3CZ4q1wxkmg77imEB7tEy7mFgdCuL3kwoMiC09bbpvzm75xXxekcTr7BuyRLEMvo50sA6nh1whBxRrqHGa5VSzhBXILEoCJCeHROM83S5MGXbQf7PcMtc9IS%2BEKUIOnUSCCylfdH2ETaHJniWlS&X-Amz-Signature=d726a69a9f632d418aa0d65e2e5816d3529c70a4b44a80c2ff862ca8847e3bac&X-Amz-SignedHeaders=host&x-id=GetObject)
