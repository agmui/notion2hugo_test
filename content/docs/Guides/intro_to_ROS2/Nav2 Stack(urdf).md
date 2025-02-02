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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEIRJUXJ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T003740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUTr0vafUcfxTbt7W27ElZTe48URg%2BQOIvQTALgMr2qAiAyntq7ClogJxJaak5FNqaZz9YQaN%2Bh1XS1eR5hM6APfCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B6caAeil%2FSnANgadKtwDkrFs2GIi%2B1uCdZijBr271AC8AIm8XSZ3Db2iSNld9MQymSfYTQUfsl0CtBreTCaPc4DDWBpC%2B87vHsPSmvofGla4s0Ns0M1VodIgYeeyMuAVCm5nAEZXB0A78WvunXWE6guPRZZrEd%2FxYy9WFfAbCuquX4xTbhje6gokH6LLGWRE6TpRNuRX1U2fh3obJ6nI7OXSNbW82hoLD42ZcyCqB5zi9HwqdQ4RZ83b8m2cg3hLNSV0eRH%2FtBGdNJxGw9fgsQTEF1dwc%2BGEXgyZR%2FOh2ZRfTJQx5LWK%2F7yNrWSYzYYwmCX9NqKMBTHnTw2yz4WXM5tI3Nndkwf8BqvnFx7xbiJ80eO%2FrbPAAXn3fCxBEjBDHxbyh1bNhAKUL3yByxZVzzCuF7cwP6bZr6V%2Bm7%2F0tYfEUdK5LHFmvZjyJPLJEzOJRWu6aIqQbbkBAWraQJUIBOm%2BqNn4voKdltWIuXKRrluZJt6ahQVa77p7Zw3%2FDl1OE7z27rQgmHwnauCTkbNJoQNB%2Bi5LbnqgitqEdaTbC0IvIMQrTFuEaVOzlcY%2BQLUhkWVDyhV%2FszhldSphBXfojJTpsvssEJDC1CWs59vXJhxYIc2L4FuEw1yfxgWe5ewfXw%2F3LSAatLsz2N0wo%2FP6vAY6pgHxDbL2nYm7TbLITdzPAy76%2FGZdvOQCXxgejhLQPnMNImeoWsMZXncAR%2BZJgrfP84asd%2B5cdDX55Ju3YfvT46C0R4%2FsqsNqHL7QGsjsZdTxz2sUXBH93NXR45q0Vb6b0CAOleF3tgUBb40hjbScTD4WMR39WaB8mI0juX1jh2%2Br5cO%2F7nirHgXttfCcRx%2FwAWNbtHiIdfTxVgUh7sRlk0jgoagVBTFK&X-Amz-Signature=3e3311e502f3865f749aa4b8649e12c55f840f96464406b39b266334814480f9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEIRJUXJ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T003740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUTr0vafUcfxTbt7W27ElZTe48URg%2BQOIvQTALgMr2qAiAyntq7ClogJxJaak5FNqaZz9YQaN%2Bh1XS1eR5hM6APfCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B6caAeil%2FSnANgadKtwDkrFs2GIi%2B1uCdZijBr271AC8AIm8XSZ3Db2iSNld9MQymSfYTQUfsl0CtBreTCaPc4DDWBpC%2B87vHsPSmvofGla4s0Ns0M1VodIgYeeyMuAVCm5nAEZXB0A78WvunXWE6guPRZZrEd%2FxYy9WFfAbCuquX4xTbhje6gokH6LLGWRE6TpRNuRX1U2fh3obJ6nI7OXSNbW82hoLD42ZcyCqB5zi9HwqdQ4RZ83b8m2cg3hLNSV0eRH%2FtBGdNJxGw9fgsQTEF1dwc%2BGEXgyZR%2FOh2ZRfTJQx5LWK%2F7yNrWSYzYYwmCX9NqKMBTHnTw2yz4WXM5tI3Nndkwf8BqvnFx7xbiJ80eO%2FrbPAAXn3fCxBEjBDHxbyh1bNhAKUL3yByxZVzzCuF7cwP6bZr6V%2Bm7%2F0tYfEUdK5LHFmvZjyJPLJEzOJRWu6aIqQbbkBAWraQJUIBOm%2BqNn4voKdltWIuXKRrluZJt6ahQVa77p7Zw3%2FDl1OE7z27rQgmHwnauCTkbNJoQNB%2Bi5LbnqgitqEdaTbC0IvIMQrTFuEaVOzlcY%2BQLUhkWVDyhV%2FszhldSphBXfojJTpsvssEJDC1CWs59vXJhxYIc2L4FuEw1yfxgWe5ewfXw%2F3LSAatLsz2N0wo%2FP6vAY6pgHxDbL2nYm7TbLITdzPAy76%2FGZdvOQCXxgejhLQPnMNImeoWsMZXncAR%2BZJgrfP84asd%2B5cdDX55Ju3YfvT46C0R4%2FsqsNqHL7QGsjsZdTxz2sUXBH93NXR45q0Vb6b0CAOleF3tgUBb40hjbScTD4WMR39WaB8mI0juX1jh2%2Br5cO%2F7nirHgXttfCcRx%2FwAWNbtHiIdfTxVgUh7sRlk0jgoagVBTFK&X-Amz-Signature=3f57f4a5dc293e32a918e17b04b577f5508ac6f012aaec09525919bb703df889&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEIRJUXJ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T003740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUTr0vafUcfxTbt7W27ElZTe48URg%2BQOIvQTALgMr2qAiAyntq7ClogJxJaak5FNqaZz9YQaN%2Bh1XS1eR5hM6APfCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B6caAeil%2FSnANgadKtwDkrFs2GIi%2B1uCdZijBr271AC8AIm8XSZ3Db2iSNld9MQymSfYTQUfsl0CtBreTCaPc4DDWBpC%2B87vHsPSmvofGla4s0Ns0M1VodIgYeeyMuAVCm5nAEZXB0A78WvunXWE6guPRZZrEd%2FxYy9WFfAbCuquX4xTbhje6gokH6LLGWRE6TpRNuRX1U2fh3obJ6nI7OXSNbW82hoLD42ZcyCqB5zi9HwqdQ4RZ83b8m2cg3hLNSV0eRH%2FtBGdNJxGw9fgsQTEF1dwc%2BGEXgyZR%2FOh2ZRfTJQx5LWK%2F7yNrWSYzYYwmCX9NqKMBTHnTw2yz4WXM5tI3Nndkwf8BqvnFx7xbiJ80eO%2FrbPAAXn3fCxBEjBDHxbyh1bNhAKUL3yByxZVzzCuF7cwP6bZr6V%2Bm7%2F0tYfEUdK5LHFmvZjyJPLJEzOJRWu6aIqQbbkBAWraQJUIBOm%2BqNn4voKdltWIuXKRrluZJt6ahQVa77p7Zw3%2FDl1OE7z27rQgmHwnauCTkbNJoQNB%2Bi5LbnqgitqEdaTbC0IvIMQrTFuEaVOzlcY%2BQLUhkWVDyhV%2FszhldSphBXfojJTpsvssEJDC1CWs59vXJhxYIc2L4FuEw1yfxgWe5ewfXw%2F3LSAatLsz2N0wo%2FP6vAY6pgHxDbL2nYm7TbLITdzPAy76%2FGZdvOQCXxgejhLQPnMNImeoWsMZXncAR%2BZJgrfP84asd%2B5cdDX55Ju3YfvT46C0R4%2FsqsNqHL7QGsjsZdTxz2sUXBH93NXR45q0Vb6b0CAOleF3tgUBb40hjbScTD4WMR39WaB8mI0juX1jh2%2Br5cO%2F7nirHgXttfCcRx%2FwAWNbtHiIdfTxVgUh7sRlk0jgoagVBTFK&X-Amz-Signature=a8095bc28b6f27d66218606b1aa9761a6c046839bf466c349a5e51e9152c3731&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEIRJUXJ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T003740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUTr0vafUcfxTbt7W27ElZTe48URg%2BQOIvQTALgMr2qAiAyntq7ClogJxJaak5FNqaZz9YQaN%2Bh1XS1eR5hM6APfCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B6caAeil%2FSnANgadKtwDkrFs2GIi%2B1uCdZijBr271AC8AIm8XSZ3Db2iSNld9MQymSfYTQUfsl0CtBreTCaPc4DDWBpC%2B87vHsPSmvofGla4s0Ns0M1VodIgYeeyMuAVCm5nAEZXB0A78WvunXWE6guPRZZrEd%2FxYy9WFfAbCuquX4xTbhje6gokH6LLGWRE6TpRNuRX1U2fh3obJ6nI7OXSNbW82hoLD42ZcyCqB5zi9HwqdQ4RZ83b8m2cg3hLNSV0eRH%2FtBGdNJxGw9fgsQTEF1dwc%2BGEXgyZR%2FOh2ZRfTJQx5LWK%2F7yNrWSYzYYwmCX9NqKMBTHnTw2yz4WXM5tI3Nndkwf8BqvnFx7xbiJ80eO%2FrbPAAXn3fCxBEjBDHxbyh1bNhAKUL3yByxZVzzCuF7cwP6bZr6V%2Bm7%2F0tYfEUdK5LHFmvZjyJPLJEzOJRWu6aIqQbbkBAWraQJUIBOm%2BqNn4voKdltWIuXKRrluZJt6ahQVa77p7Zw3%2FDl1OE7z27rQgmHwnauCTkbNJoQNB%2Bi5LbnqgitqEdaTbC0IvIMQrTFuEaVOzlcY%2BQLUhkWVDyhV%2FszhldSphBXfojJTpsvssEJDC1CWs59vXJhxYIc2L4FuEw1yfxgWe5ewfXw%2F3LSAatLsz2N0wo%2FP6vAY6pgHxDbL2nYm7TbLITdzPAy76%2FGZdvOQCXxgejhLQPnMNImeoWsMZXncAR%2BZJgrfP84asd%2B5cdDX55Ju3YfvT46C0R4%2FsqsNqHL7QGsjsZdTxz2sUXBH93NXR45q0Vb6b0CAOleF3tgUBb40hjbScTD4WMR39WaB8mI0juX1jh2%2Br5cO%2F7nirHgXttfCcRx%2FwAWNbtHiIdfTxVgUh7sRlk0jgoagVBTFK&X-Amz-Signature=51afd4b63b7c0ac727ca68c47d93d539c1d4cafef3e5416de992c202b9dc25dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEIRJUXJ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T003740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUTr0vafUcfxTbt7W27ElZTe48URg%2BQOIvQTALgMr2qAiAyntq7ClogJxJaak5FNqaZz9YQaN%2Bh1XS1eR5hM6APfCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B6caAeil%2FSnANgadKtwDkrFs2GIi%2B1uCdZijBr271AC8AIm8XSZ3Db2iSNld9MQymSfYTQUfsl0CtBreTCaPc4DDWBpC%2B87vHsPSmvofGla4s0Ns0M1VodIgYeeyMuAVCm5nAEZXB0A78WvunXWE6guPRZZrEd%2FxYy9WFfAbCuquX4xTbhje6gokH6LLGWRE6TpRNuRX1U2fh3obJ6nI7OXSNbW82hoLD42ZcyCqB5zi9HwqdQ4RZ83b8m2cg3hLNSV0eRH%2FtBGdNJxGw9fgsQTEF1dwc%2BGEXgyZR%2FOh2ZRfTJQx5LWK%2F7yNrWSYzYYwmCX9NqKMBTHnTw2yz4WXM5tI3Nndkwf8BqvnFx7xbiJ80eO%2FrbPAAXn3fCxBEjBDHxbyh1bNhAKUL3yByxZVzzCuF7cwP6bZr6V%2Bm7%2F0tYfEUdK5LHFmvZjyJPLJEzOJRWu6aIqQbbkBAWraQJUIBOm%2BqNn4voKdltWIuXKRrluZJt6ahQVa77p7Zw3%2FDl1OE7z27rQgmHwnauCTkbNJoQNB%2Bi5LbnqgitqEdaTbC0IvIMQrTFuEaVOzlcY%2BQLUhkWVDyhV%2FszhldSphBXfojJTpsvssEJDC1CWs59vXJhxYIc2L4FuEw1yfxgWe5ewfXw%2F3LSAatLsz2N0wo%2FP6vAY6pgHxDbL2nYm7TbLITdzPAy76%2FGZdvOQCXxgejhLQPnMNImeoWsMZXncAR%2BZJgrfP84asd%2B5cdDX55Ju3YfvT46C0R4%2FsqsNqHL7QGsjsZdTxz2sUXBH93NXR45q0Vb6b0CAOleF3tgUBb40hjbScTD4WMR39WaB8mI0juX1jh2%2Br5cO%2F7nirHgXttfCcRx%2FwAWNbtHiIdfTxVgUh7sRlk0jgoagVBTFK&X-Amz-Signature=e34268c1212d68f62629ceaab6cff7ac3d5a48a2d021a73473972bcfdf6e2c9c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEIRJUXJ%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T003740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICUTr0vafUcfxTbt7W27ElZTe48URg%2BQOIvQTALgMr2qAiAyntq7ClogJxJaak5FNqaZz9YQaN%2Bh1XS1eR5hM6APfCqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B6caAeil%2FSnANgadKtwDkrFs2GIi%2B1uCdZijBr271AC8AIm8XSZ3Db2iSNld9MQymSfYTQUfsl0CtBreTCaPc4DDWBpC%2B87vHsPSmvofGla4s0Ns0M1VodIgYeeyMuAVCm5nAEZXB0A78WvunXWE6guPRZZrEd%2FxYy9WFfAbCuquX4xTbhje6gokH6LLGWRE6TpRNuRX1U2fh3obJ6nI7OXSNbW82hoLD42ZcyCqB5zi9HwqdQ4RZ83b8m2cg3hLNSV0eRH%2FtBGdNJxGw9fgsQTEF1dwc%2BGEXgyZR%2FOh2ZRfTJQx5LWK%2F7yNrWSYzYYwmCX9NqKMBTHnTw2yz4WXM5tI3Nndkwf8BqvnFx7xbiJ80eO%2FrbPAAXn3fCxBEjBDHxbyh1bNhAKUL3yByxZVzzCuF7cwP6bZr6V%2Bm7%2F0tYfEUdK5LHFmvZjyJPLJEzOJRWu6aIqQbbkBAWraQJUIBOm%2BqNn4voKdltWIuXKRrluZJt6ahQVa77p7Zw3%2FDl1OE7z27rQgmHwnauCTkbNJoQNB%2Bi5LbnqgitqEdaTbC0IvIMQrTFuEaVOzlcY%2BQLUhkWVDyhV%2FszhldSphBXfojJTpsvssEJDC1CWs59vXJhxYIc2L4FuEw1yfxgWe5ewfXw%2F3LSAatLsz2N0wo%2FP6vAY6pgHxDbL2nYm7TbLITdzPAy76%2FGZdvOQCXxgejhLQPnMNImeoWsMZXncAR%2BZJgrfP84asd%2B5cdDX55Ju3YfvT46C0R4%2FsqsNqHL7QGsjsZdTxz2sUXBH93NXR45q0Vb6b0CAOleF3tgUBb40hjbScTD4WMR39WaB8mI0juX1jh2%2Br5cO%2F7nirHgXttfCcRx%2FwAWNbtHiIdfTxVgUh7sRlk0jgoagVBTFK&X-Amz-Signature=e596ddc9f3addf70177c9b1011241e2df315740dadf8315c75c148bb9e29afb8&X-Amz-SignedHeaders=host&x-id=GetObject)
