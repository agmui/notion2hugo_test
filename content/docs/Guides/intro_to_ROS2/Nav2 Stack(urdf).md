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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QHPMDXX%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T051111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAl8L1NkapMnXZ%2BpVi1vB9Bblqd%2BkNBNaovZaGzCzudHAiEA4nPYhM%2F10tblkV%2FebdbLgZz9trAEKCzODEQjEeoQhHIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAo%2BU9%2Ftm7g7k0XMircA0CbEfGhuEzheLmzFIVOv55sIfpPXqL7VNBX%2BLz8837BP1qjHUtDTEksioEm73Z9Lp9rGAJd9wSCQd%2Fwq%2BwSL95CFjuhBf1LJVALb7g6hgAdt01kTDgLuuLqXyxqvLckQ3%2FPRIh8jRbIEetJHRqVxiSDOUAynkPe81%2FVAN4mQM%2B3lP9KVPavZleXN2oaK%2FYPIJDScLMQvIaoppbE101nDEkv2aiVV7ppsWrwvSJhgldM%2FxyLDB89dZ90Adg2cermHWRUWrF%2BtF8OFOTsPJRYswxKX%2BmuRzbFphfGDT8EvJoInz6u94FtfYPi82Hx6Cs6vWoKz79MWfC15HpnKVk30W2zVLxtLZid5rSGrnmsne0hbxjuU61yeeG5l7OGlA7b0nOiSSHCmXkUr%2FYaxUFCB7XPRL%2Bco%2Fv2Tj6FQtsuRGefTeqc%2Fp%2FmjhG7ttd5zk7lkgXSk%2BSaJc1Ka92HKKbEXpT44J0RZZQhlt9K83D%2BFWfpuWQPNFqWzKI6UrdjNYal4hUO9%2BN%2FlKK6DkbnifxNwxRWR1g7UgIRWvYMWLwRotLgSSurZiAFvv9osUzjWY6L8301FZ3EpwjRoymeEhCWG1EIQzDFH24JCDH%2FqByohP2p2cTXC56BQnz4jq6yMKLvmMIGOqUBMwdPiT1cvRQVCtSydW1SSh0wv0WDoLzgiXvEALKOEOrGLSYOupvO3jBYpzoBrd6rWT2eunTcENWdsamonxhobqTov1T3VK001Esm6kINcrVUFUU47Qvl7IDP%2BI8VLQ97vEE7mO0HQiXd9KhSlFRMuK44v9sOcaNaULpDQkOhDJsqBfRNVDL%2BrozYAxOuMFqOSmAsyAS4QF%2BkdTkZbJxJ4bmdc%2B%2Bu&X-Amz-Signature=a70156de37cd1f2a18bfaa70c958194adfa409d83d860700a8eac3efad6da4cc&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QHPMDXX%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T051111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAl8L1NkapMnXZ%2BpVi1vB9Bblqd%2BkNBNaovZaGzCzudHAiEA4nPYhM%2F10tblkV%2FebdbLgZz9trAEKCzODEQjEeoQhHIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAo%2BU9%2Ftm7g7k0XMircA0CbEfGhuEzheLmzFIVOv55sIfpPXqL7VNBX%2BLz8837BP1qjHUtDTEksioEm73Z9Lp9rGAJd9wSCQd%2Fwq%2BwSL95CFjuhBf1LJVALb7g6hgAdt01kTDgLuuLqXyxqvLckQ3%2FPRIh8jRbIEetJHRqVxiSDOUAynkPe81%2FVAN4mQM%2B3lP9KVPavZleXN2oaK%2FYPIJDScLMQvIaoppbE101nDEkv2aiVV7ppsWrwvSJhgldM%2FxyLDB89dZ90Adg2cermHWRUWrF%2BtF8OFOTsPJRYswxKX%2BmuRzbFphfGDT8EvJoInz6u94FtfYPi82Hx6Cs6vWoKz79MWfC15HpnKVk30W2zVLxtLZid5rSGrnmsne0hbxjuU61yeeG5l7OGlA7b0nOiSSHCmXkUr%2FYaxUFCB7XPRL%2Bco%2Fv2Tj6FQtsuRGefTeqc%2Fp%2FmjhG7ttd5zk7lkgXSk%2BSaJc1Ka92HKKbEXpT44J0RZZQhlt9K83D%2BFWfpuWQPNFqWzKI6UrdjNYal4hUO9%2BN%2FlKK6DkbnifxNwxRWR1g7UgIRWvYMWLwRotLgSSurZiAFvv9osUzjWY6L8301FZ3EpwjRoymeEhCWG1EIQzDFH24JCDH%2FqByohP2p2cTXC56BQnz4jq6yMKLvmMIGOqUBMwdPiT1cvRQVCtSydW1SSh0wv0WDoLzgiXvEALKOEOrGLSYOupvO3jBYpzoBrd6rWT2eunTcENWdsamonxhobqTov1T3VK001Esm6kINcrVUFUU47Qvl7IDP%2BI8VLQ97vEE7mO0HQiXd9KhSlFRMuK44v9sOcaNaULpDQkOhDJsqBfRNVDL%2BrozYAxOuMFqOSmAsyAS4QF%2BkdTkZbJxJ4bmdc%2B%2Bu&X-Amz-Signature=ed594f0435b155911c2f12040d0d1266c515e0616bef8cb1961514b45c9960af&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QHPMDXX%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T051111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAl8L1NkapMnXZ%2BpVi1vB9Bblqd%2BkNBNaovZaGzCzudHAiEA4nPYhM%2F10tblkV%2FebdbLgZz9trAEKCzODEQjEeoQhHIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAo%2BU9%2Ftm7g7k0XMircA0CbEfGhuEzheLmzFIVOv55sIfpPXqL7VNBX%2BLz8837BP1qjHUtDTEksioEm73Z9Lp9rGAJd9wSCQd%2Fwq%2BwSL95CFjuhBf1LJVALb7g6hgAdt01kTDgLuuLqXyxqvLckQ3%2FPRIh8jRbIEetJHRqVxiSDOUAynkPe81%2FVAN4mQM%2B3lP9KVPavZleXN2oaK%2FYPIJDScLMQvIaoppbE101nDEkv2aiVV7ppsWrwvSJhgldM%2FxyLDB89dZ90Adg2cermHWRUWrF%2BtF8OFOTsPJRYswxKX%2BmuRzbFphfGDT8EvJoInz6u94FtfYPi82Hx6Cs6vWoKz79MWfC15HpnKVk30W2zVLxtLZid5rSGrnmsne0hbxjuU61yeeG5l7OGlA7b0nOiSSHCmXkUr%2FYaxUFCB7XPRL%2Bco%2Fv2Tj6FQtsuRGefTeqc%2Fp%2FmjhG7ttd5zk7lkgXSk%2BSaJc1Ka92HKKbEXpT44J0RZZQhlt9K83D%2BFWfpuWQPNFqWzKI6UrdjNYal4hUO9%2BN%2FlKK6DkbnifxNwxRWR1g7UgIRWvYMWLwRotLgSSurZiAFvv9osUzjWY6L8301FZ3EpwjRoymeEhCWG1EIQzDFH24JCDH%2FqByohP2p2cTXC56BQnz4jq6yMKLvmMIGOqUBMwdPiT1cvRQVCtSydW1SSh0wv0WDoLzgiXvEALKOEOrGLSYOupvO3jBYpzoBrd6rWT2eunTcENWdsamonxhobqTov1T3VK001Esm6kINcrVUFUU47Qvl7IDP%2BI8VLQ97vEE7mO0HQiXd9KhSlFRMuK44v9sOcaNaULpDQkOhDJsqBfRNVDL%2BrozYAxOuMFqOSmAsyAS4QF%2BkdTkZbJxJ4bmdc%2B%2Bu&X-Amz-Signature=bb2e96321a3e7c2702b5f1d4bdbda551e98445c4a1e2c688847b3947b15b8594&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QHPMDXX%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T051111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAl8L1NkapMnXZ%2BpVi1vB9Bblqd%2BkNBNaovZaGzCzudHAiEA4nPYhM%2F10tblkV%2FebdbLgZz9trAEKCzODEQjEeoQhHIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAo%2BU9%2Ftm7g7k0XMircA0CbEfGhuEzheLmzFIVOv55sIfpPXqL7VNBX%2BLz8837BP1qjHUtDTEksioEm73Z9Lp9rGAJd9wSCQd%2Fwq%2BwSL95CFjuhBf1LJVALb7g6hgAdt01kTDgLuuLqXyxqvLckQ3%2FPRIh8jRbIEetJHRqVxiSDOUAynkPe81%2FVAN4mQM%2B3lP9KVPavZleXN2oaK%2FYPIJDScLMQvIaoppbE101nDEkv2aiVV7ppsWrwvSJhgldM%2FxyLDB89dZ90Adg2cermHWRUWrF%2BtF8OFOTsPJRYswxKX%2BmuRzbFphfGDT8EvJoInz6u94FtfYPi82Hx6Cs6vWoKz79MWfC15HpnKVk30W2zVLxtLZid5rSGrnmsne0hbxjuU61yeeG5l7OGlA7b0nOiSSHCmXkUr%2FYaxUFCB7XPRL%2Bco%2Fv2Tj6FQtsuRGefTeqc%2Fp%2FmjhG7ttd5zk7lkgXSk%2BSaJc1Ka92HKKbEXpT44J0RZZQhlt9K83D%2BFWfpuWQPNFqWzKI6UrdjNYal4hUO9%2BN%2FlKK6DkbnifxNwxRWR1g7UgIRWvYMWLwRotLgSSurZiAFvv9osUzjWY6L8301FZ3EpwjRoymeEhCWG1EIQzDFH24JCDH%2FqByohP2p2cTXC56BQnz4jq6yMKLvmMIGOqUBMwdPiT1cvRQVCtSydW1SSh0wv0WDoLzgiXvEALKOEOrGLSYOupvO3jBYpzoBrd6rWT2eunTcENWdsamonxhobqTov1T3VK001Esm6kINcrVUFUU47Qvl7IDP%2BI8VLQ97vEE7mO0HQiXd9KhSlFRMuK44v9sOcaNaULpDQkOhDJsqBfRNVDL%2BrozYAxOuMFqOSmAsyAS4QF%2BkdTkZbJxJ4bmdc%2B%2Bu&X-Amz-Signature=9d7ab618213817f8f037ec5a071a12d7bc3b1b1be37bfc1813104661ef36c1ea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QHPMDXX%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T051111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAl8L1NkapMnXZ%2BpVi1vB9Bblqd%2BkNBNaovZaGzCzudHAiEA4nPYhM%2F10tblkV%2FebdbLgZz9trAEKCzODEQjEeoQhHIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAo%2BU9%2Ftm7g7k0XMircA0CbEfGhuEzheLmzFIVOv55sIfpPXqL7VNBX%2BLz8837BP1qjHUtDTEksioEm73Z9Lp9rGAJd9wSCQd%2Fwq%2BwSL95CFjuhBf1LJVALb7g6hgAdt01kTDgLuuLqXyxqvLckQ3%2FPRIh8jRbIEetJHRqVxiSDOUAynkPe81%2FVAN4mQM%2B3lP9KVPavZleXN2oaK%2FYPIJDScLMQvIaoppbE101nDEkv2aiVV7ppsWrwvSJhgldM%2FxyLDB89dZ90Adg2cermHWRUWrF%2BtF8OFOTsPJRYswxKX%2BmuRzbFphfGDT8EvJoInz6u94FtfYPi82Hx6Cs6vWoKz79MWfC15HpnKVk30W2zVLxtLZid5rSGrnmsne0hbxjuU61yeeG5l7OGlA7b0nOiSSHCmXkUr%2FYaxUFCB7XPRL%2Bco%2Fv2Tj6FQtsuRGefTeqc%2Fp%2FmjhG7ttd5zk7lkgXSk%2BSaJc1Ka92HKKbEXpT44J0RZZQhlt9K83D%2BFWfpuWQPNFqWzKI6UrdjNYal4hUO9%2BN%2FlKK6DkbnifxNwxRWR1g7UgIRWvYMWLwRotLgSSurZiAFvv9osUzjWY6L8301FZ3EpwjRoymeEhCWG1EIQzDFH24JCDH%2FqByohP2p2cTXC56BQnz4jq6yMKLvmMIGOqUBMwdPiT1cvRQVCtSydW1SSh0wv0WDoLzgiXvEALKOEOrGLSYOupvO3jBYpzoBrd6rWT2eunTcENWdsamonxhobqTov1T3VK001Esm6kINcrVUFUU47Qvl7IDP%2BI8VLQ97vEE7mO0HQiXd9KhSlFRMuK44v9sOcaNaULpDQkOhDJsqBfRNVDL%2BrozYAxOuMFqOSmAsyAS4QF%2BkdTkZbJxJ4bmdc%2B%2Bu&X-Amz-Signature=a15e3e975bec7bc3e25321e9d28d205f6d53f77276e5913cda1800f94ba26d11&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QHPMDXX%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T051111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAl8L1NkapMnXZ%2BpVi1vB9Bblqd%2BkNBNaovZaGzCzudHAiEA4nPYhM%2F10tblkV%2FebdbLgZz9trAEKCzODEQjEeoQhHIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAo%2BU9%2Ftm7g7k0XMircA0CbEfGhuEzheLmzFIVOv55sIfpPXqL7VNBX%2BLz8837BP1qjHUtDTEksioEm73Z9Lp9rGAJd9wSCQd%2Fwq%2BwSL95CFjuhBf1LJVALb7g6hgAdt01kTDgLuuLqXyxqvLckQ3%2FPRIh8jRbIEetJHRqVxiSDOUAynkPe81%2FVAN4mQM%2B3lP9KVPavZleXN2oaK%2FYPIJDScLMQvIaoppbE101nDEkv2aiVV7ppsWrwvSJhgldM%2FxyLDB89dZ90Adg2cermHWRUWrF%2BtF8OFOTsPJRYswxKX%2BmuRzbFphfGDT8EvJoInz6u94FtfYPi82Hx6Cs6vWoKz79MWfC15HpnKVk30W2zVLxtLZid5rSGrnmsne0hbxjuU61yeeG5l7OGlA7b0nOiSSHCmXkUr%2FYaxUFCB7XPRL%2Bco%2Fv2Tj6FQtsuRGefTeqc%2Fp%2FmjhG7ttd5zk7lkgXSk%2BSaJc1Ka92HKKbEXpT44J0RZZQhlt9K83D%2BFWfpuWQPNFqWzKI6UrdjNYal4hUO9%2BN%2FlKK6DkbnifxNwxRWR1g7UgIRWvYMWLwRotLgSSurZiAFvv9osUzjWY6L8301FZ3EpwjRoymeEhCWG1EIQzDFH24JCDH%2FqByohP2p2cTXC56BQnz4jq6yMKLvmMIGOqUBMwdPiT1cvRQVCtSydW1SSh0wv0WDoLzgiXvEALKOEOrGLSYOupvO3jBYpzoBrd6rWT2eunTcENWdsamonxhobqTov1T3VK001Esm6kINcrVUFUU47Qvl7IDP%2BI8VLQ97vEE7mO0HQiXd9KhSlFRMuK44v9sOcaNaULpDQkOhDJsqBfRNVDL%2BrozYAxOuMFqOSmAsyAS4QF%2BkdTkZbJxJ4bmdc%2B%2Bu&X-Amz-Signature=d5650853d5e802ca1840e0dfa59113d8c98d3121e7b1d3c335b16068fb47b2fd&X-Amz-SignedHeaders=host&x-id=GetObject)
