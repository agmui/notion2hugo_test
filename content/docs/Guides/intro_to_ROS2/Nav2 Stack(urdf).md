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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNF7VSNI%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T170824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDPGM1Qxcu9%2B4zr8U2Hi%2FconGqHmHpJJ4uLBpX4bh7nigIgUvNN%2BC%2BQsJltr%2BA30PMODWgO5YCyycJatfF4mWneI%2BAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDAknR2B0yDQZqEEfXSrcA6S9jiqXt0SjjkrNnrXykwGNUz2mT4w8uB3FyKm%2Fz9zcjMcZvCMIorj7qXeyt%2FNzAJUh%2Fpcg37wR22LUWLE4XLe3rX64ieouYel3tEwFNgO29gRVgFSVyHS41u%2BBW2Xu%2FN1eAeW6en3pdSdlLlSLrAx9sZMmpkyCyl%2BapTt7P3lKJKtEunMUFvf6fSGPFl2itxl0RKBUVQte7SF0sUKtiUMmfJH2TLV6BuCcrv%2BPIzU6C9r3yKvdlgBfTxHmGvKXBIflO5qJW0EML1SveG2NjCp6sbkxDaIY5HP2bf6Wb8LgsOe5KAfwHTs8lUFymb92YHUgmas9cKlWXRX4igh9pxwib7si5E3BPrdoIpEHiG7eAeDdZZGZDUSGPjVMaHkffRNQjyTb4zFsfb8aehoIGZ0gWgltx1vJK4vyHuxXdAhFTbXKoM9a2dkNvb1Hv6qanvQcHBc9O%2BiUN2R%2FTDuwokjzq4JtjNLW9Xf8X0663xmbZyT6wG2iJfzdCZXW02%2Bx3M2xHC3unkbkMcKypdD%2BTxjAKhKl5uaAiPwdmX4lOgygaMSMKYnTBlXmzjk16vK%2F6HcmwR6XjB7dhZ6vc0AZ6nDNhuZjqeGwSyUQIzthnUF9Wvsz9%2FACGNxd%2BEK8MMvegcIGOqUBnrqgyprkrnbtmfd4Yatvoi7JCWSqsGScgH1aoTBok8psHGlRCOLGOUUopePPBn7Jkg3pm0fz9GvU0EtaDM03INaQXEP3P7b1ZdmIk0KwgNqfOWEZPo8pGznT87eRx9YQOzWElNas6WemYsY2sqcJiDHY95TJqtMeBqBOJjLFEPk68n8no%2FHrQK6z9AyGuc8MFEy5eITX3UFe%2FWaJv8b6Sb27B5FS&X-Amz-Signature=626ee41824b17236cf25c167b75e73c98dd9d47889501decac1411ada2521041&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNF7VSNI%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T170824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDPGM1Qxcu9%2B4zr8U2Hi%2FconGqHmHpJJ4uLBpX4bh7nigIgUvNN%2BC%2BQsJltr%2BA30PMODWgO5YCyycJatfF4mWneI%2BAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDAknR2B0yDQZqEEfXSrcA6S9jiqXt0SjjkrNnrXykwGNUz2mT4w8uB3FyKm%2Fz9zcjMcZvCMIorj7qXeyt%2FNzAJUh%2Fpcg37wR22LUWLE4XLe3rX64ieouYel3tEwFNgO29gRVgFSVyHS41u%2BBW2Xu%2FN1eAeW6en3pdSdlLlSLrAx9sZMmpkyCyl%2BapTt7P3lKJKtEunMUFvf6fSGPFl2itxl0RKBUVQte7SF0sUKtiUMmfJH2TLV6BuCcrv%2BPIzU6C9r3yKvdlgBfTxHmGvKXBIflO5qJW0EML1SveG2NjCp6sbkxDaIY5HP2bf6Wb8LgsOe5KAfwHTs8lUFymb92YHUgmas9cKlWXRX4igh9pxwib7si5E3BPrdoIpEHiG7eAeDdZZGZDUSGPjVMaHkffRNQjyTb4zFsfb8aehoIGZ0gWgltx1vJK4vyHuxXdAhFTbXKoM9a2dkNvb1Hv6qanvQcHBc9O%2BiUN2R%2FTDuwokjzq4JtjNLW9Xf8X0663xmbZyT6wG2iJfzdCZXW02%2Bx3M2xHC3unkbkMcKypdD%2BTxjAKhKl5uaAiPwdmX4lOgygaMSMKYnTBlXmzjk16vK%2F6HcmwR6XjB7dhZ6vc0AZ6nDNhuZjqeGwSyUQIzthnUF9Wvsz9%2FACGNxd%2BEK8MMvegcIGOqUBnrqgyprkrnbtmfd4Yatvoi7JCWSqsGScgH1aoTBok8psHGlRCOLGOUUopePPBn7Jkg3pm0fz9GvU0EtaDM03INaQXEP3P7b1ZdmIk0KwgNqfOWEZPo8pGznT87eRx9YQOzWElNas6WemYsY2sqcJiDHY95TJqtMeBqBOJjLFEPk68n8no%2FHrQK6z9AyGuc8MFEy5eITX3UFe%2FWaJv8b6Sb27B5FS&X-Amz-Signature=dba7bbfb145f53207a073d3803163934d780a55fbb28cbe9328d3b1da703bfc7&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNF7VSNI%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T170824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDPGM1Qxcu9%2B4zr8U2Hi%2FconGqHmHpJJ4uLBpX4bh7nigIgUvNN%2BC%2BQsJltr%2BA30PMODWgO5YCyycJatfF4mWneI%2BAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDAknR2B0yDQZqEEfXSrcA6S9jiqXt0SjjkrNnrXykwGNUz2mT4w8uB3FyKm%2Fz9zcjMcZvCMIorj7qXeyt%2FNzAJUh%2Fpcg37wR22LUWLE4XLe3rX64ieouYel3tEwFNgO29gRVgFSVyHS41u%2BBW2Xu%2FN1eAeW6en3pdSdlLlSLrAx9sZMmpkyCyl%2BapTt7P3lKJKtEunMUFvf6fSGPFl2itxl0RKBUVQte7SF0sUKtiUMmfJH2TLV6BuCcrv%2BPIzU6C9r3yKvdlgBfTxHmGvKXBIflO5qJW0EML1SveG2NjCp6sbkxDaIY5HP2bf6Wb8LgsOe5KAfwHTs8lUFymb92YHUgmas9cKlWXRX4igh9pxwib7si5E3BPrdoIpEHiG7eAeDdZZGZDUSGPjVMaHkffRNQjyTb4zFsfb8aehoIGZ0gWgltx1vJK4vyHuxXdAhFTbXKoM9a2dkNvb1Hv6qanvQcHBc9O%2BiUN2R%2FTDuwokjzq4JtjNLW9Xf8X0663xmbZyT6wG2iJfzdCZXW02%2Bx3M2xHC3unkbkMcKypdD%2BTxjAKhKl5uaAiPwdmX4lOgygaMSMKYnTBlXmzjk16vK%2F6HcmwR6XjB7dhZ6vc0AZ6nDNhuZjqeGwSyUQIzthnUF9Wvsz9%2FACGNxd%2BEK8MMvegcIGOqUBnrqgyprkrnbtmfd4Yatvoi7JCWSqsGScgH1aoTBok8psHGlRCOLGOUUopePPBn7Jkg3pm0fz9GvU0EtaDM03INaQXEP3P7b1ZdmIk0KwgNqfOWEZPo8pGznT87eRx9YQOzWElNas6WemYsY2sqcJiDHY95TJqtMeBqBOJjLFEPk68n8no%2FHrQK6z9AyGuc8MFEy5eITX3UFe%2FWaJv8b6Sb27B5FS&X-Amz-Signature=2086665cdf53ebd4b2a3df9a010c52d7aa8cf2cc7a8961d7b28e73882a7ea3a6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNF7VSNI%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T170824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDPGM1Qxcu9%2B4zr8U2Hi%2FconGqHmHpJJ4uLBpX4bh7nigIgUvNN%2BC%2BQsJltr%2BA30PMODWgO5YCyycJatfF4mWneI%2BAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDAknR2B0yDQZqEEfXSrcA6S9jiqXt0SjjkrNnrXykwGNUz2mT4w8uB3FyKm%2Fz9zcjMcZvCMIorj7qXeyt%2FNzAJUh%2Fpcg37wR22LUWLE4XLe3rX64ieouYel3tEwFNgO29gRVgFSVyHS41u%2BBW2Xu%2FN1eAeW6en3pdSdlLlSLrAx9sZMmpkyCyl%2BapTt7P3lKJKtEunMUFvf6fSGPFl2itxl0RKBUVQte7SF0sUKtiUMmfJH2TLV6BuCcrv%2BPIzU6C9r3yKvdlgBfTxHmGvKXBIflO5qJW0EML1SveG2NjCp6sbkxDaIY5HP2bf6Wb8LgsOe5KAfwHTs8lUFymb92YHUgmas9cKlWXRX4igh9pxwib7si5E3BPrdoIpEHiG7eAeDdZZGZDUSGPjVMaHkffRNQjyTb4zFsfb8aehoIGZ0gWgltx1vJK4vyHuxXdAhFTbXKoM9a2dkNvb1Hv6qanvQcHBc9O%2BiUN2R%2FTDuwokjzq4JtjNLW9Xf8X0663xmbZyT6wG2iJfzdCZXW02%2Bx3M2xHC3unkbkMcKypdD%2BTxjAKhKl5uaAiPwdmX4lOgygaMSMKYnTBlXmzjk16vK%2F6HcmwR6XjB7dhZ6vc0AZ6nDNhuZjqeGwSyUQIzthnUF9Wvsz9%2FACGNxd%2BEK8MMvegcIGOqUBnrqgyprkrnbtmfd4Yatvoi7JCWSqsGScgH1aoTBok8psHGlRCOLGOUUopePPBn7Jkg3pm0fz9GvU0EtaDM03INaQXEP3P7b1ZdmIk0KwgNqfOWEZPo8pGznT87eRx9YQOzWElNas6WemYsY2sqcJiDHY95TJqtMeBqBOJjLFEPk68n8no%2FHrQK6z9AyGuc8MFEy5eITX3UFe%2FWaJv8b6Sb27B5FS&X-Amz-Signature=6c8367378ae3608275b269cf257486cf725ade6b63740da47a6db5dc465fff0a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNF7VSNI%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T170824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDPGM1Qxcu9%2B4zr8U2Hi%2FconGqHmHpJJ4uLBpX4bh7nigIgUvNN%2BC%2BQsJltr%2BA30PMODWgO5YCyycJatfF4mWneI%2BAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDAknR2B0yDQZqEEfXSrcA6S9jiqXt0SjjkrNnrXykwGNUz2mT4w8uB3FyKm%2Fz9zcjMcZvCMIorj7qXeyt%2FNzAJUh%2Fpcg37wR22LUWLE4XLe3rX64ieouYel3tEwFNgO29gRVgFSVyHS41u%2BBW2Xu%2FN1eAeW6en3pdSdlLlSLrAx9sZMmpkyCyl%2BapTt7P3lKJKtEunMUFvf6fSGPFl2itxl0RKBUVQte7SF0sUKtiUMmfJH2TLV6BuCcrv%2BPIzU6C9r3yKvdlgBfTxHmGvKXBIflO5qJW0EML1SveG2NjCp6sbkxDaIY5HP2bf6Wb8LgsOe5KAfwHTs8lUFymb92YHUgmas9cKlWXRX4igh9pxwib7si5E3BPrdoIpEHiG7eAeDdZZGZDUSGPjVMaHkffRNQjyTb4zFsfb8aehoIGZ0gWgltx1vJK4vyHuxXdAhFTbXKoM9a2dkNvb1Hv6qanvQcHBc9O%2BiUN2R%2FTDuwokjzq4JtjNLW9Xf8X0663xmbZyT6wG2iJfzdCZXW02%2Bx3M2xHC3unkbkMcKypdD%2BTxjAKhKl5uaAiPwdmX4lOgygaMSMKYnTBlXmzjk16vK%2F6HcmwR6XjB7dhZ6vc0AZ6nDNhuZjqeGwSyUQIzthnUF9Wvsz9%2FACGNxd%2BEK8MMvegcIGOqUBnrqgyprkrnbtmfd4Yatvoi7JCWSqsGScgH1aoTBok8psHGlRCOLGOUUopePPBn7Jkg3pm0fz9GvU0EtaDM03INaQXEP3P7b1ZdmIk0KwgNqfOWEZPo8pGznT87eRx9YQOzWElNas6WemYsY2sqcJiDHY95TJqtMeBqBOJjLFEPk68n8no%2FHrQK6z9AyGuc8MFEy5eITX3UFe%2FWaJv8b6Sb27B5FS&X-Amz-Signature=0577c80447929b1157e2c9423777383017ca34727495574f50a2da3611ccc0f8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNF7VSNI%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T170824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDPGM1Qxcu9%2B4zr8U2Hi%2FconGqHmHpJJ4uLBpX4bh7nigIgUvNN%2BC%2BQsJltr%2BA30PMODWgO5YCyycJatfF4mWneI%2BAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDAknR2B0yDQZqEEfXSrcA6S9jiqXt0SjjkrNnrXykwGNUz2mT4w8uB3FyKm%2Fz9zcjMcZvCMIorj7qXeyt%2FNzAJUh%2Fpcg37wR22LUWLE4XLe3rX64ieouYel3tEwFNgO29gRVgFSVyHS41u%2BBW2Xu%2FN1eAeW6en3pdSdlLlSLrAx9sZMmpkyCyl%2BapTt7P3lKJKtEunMUFvf6fSGPFl2itxl0RKBUVQte7SF0sUKtiUMmfJH2TLV6BuCcrv%2BPIzU6C9r3yKvdlgBfTxHmGvKXBIflO5qJW0EML1SveG2NjCp6sbkxDaIY5HP2bf6Wb8LgsOe5KAfwHTs8lUFymb92YHUgmas9cKlWXRX4igh9pxwib7si5E3BPrdoIpEHiG7eAeDdZZGZDUSGPjVMaHkffRNQjyTb4zFsfb8aehoIGZ0gWgltx1vJK4vyHuxXdAhFTbXKoM9a2dkNvb1Hv6qanvQcHBc9O%2BiUN2R%2FTDuwokjzq4JtjNLW9Xf8X0663xmbZyT6wG2iJfzdCZXW02%2Bx3M2xHC3unkbkMcKypdD%2BTxjAKhKl5uaAiPwdmX4lOgygaMSMKYnTBlXmzjk16vK%2F6HcmwR6XjB7dhZ6vc0AZ6nDNhuZjqeGwSyUQIzthnUF9Wvsz9%2FACGNxd%2BEK8MMvegcIGOqUBnrqgyprkrnbtmfd4Yatvoi7JCWSqsGScgH1aoTBok8psHGlRCOLGOUUopePPBn7Jkg3pm0fz9GvU0EtaDM03INaQXEP3P7b1ZdmIk0KwgNqfOWEZPo8pGznT87eRx9YQOzWElNas6WemYsY2sqcJiDHY95TJqtMeBqBOJjLFEPk68n8no%2FHrQK6z9AyGuc8MFEy5eITX3UFe%2FWaJv8b6Sb27B5FS&X-Amz-Signature=27b4b21c5a2de48591e5b24ee45eaad41a6f412d4822127c5120e10fd283d43a&X-Amz-SignedHeaders=host&x-id=GetObject)
