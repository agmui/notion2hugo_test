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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MZBW3YV%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T131904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBy%2F2pykOHD79K3gehFWg%2B8oUzoSahOyzKIaCM6ycOivAiEAiobD03EXqAGLMSp9mzMUltXjfXPig4wRaVHse3ySnT8q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDIybpNWQ1svyDpJvESrcA1CE9gcHk2DK%2F%2BYuu74GjzmqQ0tiNPA%2F707w8EMIQ2WJB2Rk1Yey3WvuuRUvxHPXaGdXOeonCEUklzCDShuLFdXRmjzdCRIHC1McBpxMk7BqCb8ZrFCDB%2B4itP9IBl8Y5O1CtkHfwiMLeZwDLpZr%2Bc3freOyEm2ryLt2A%2BF4qeY%2Fo3U64jJpl3b56UKfV8JEoICX1RUzQNuiHrLVKlF%2B3UwPJpbolXHtreAfuFOLtK9AKsAydsNRgvDbh3XL5du%2BVtMCoV9CCaijeUr%2F%2BneHfvPP%2FWg426WixHGiGYbqBwfp3xu2j1Nyn819wtLZySApUs0yV6qS1%2FU9EJy4PCLLPeQTp774YqSuDDYU11NMRRFTWkrBNTPFfT6IwIQtZ%2F0Z6GtdEc0LTxWXWeXoKXo3nOiN4qVOL7AZuO%2FoZE37X2YexsVkVucuhACuFH6dFbAuCocJxWEde5HXT0xV%2BKrrw3TG39nHT2CCfNfPi8cIktp4C1KuBWacTzM6Hq%2BRCQv48ST6wBXZGB%2F9jtLN%2F6FFN9dwhDbSPw7k3iQaB2TlTuxbaFHpWrvJwx94t24fRCc9oWcySeAEzCC%2Fm6CKQLgwSm1FU57YV%2BVoKgpIZ69pe%2Biey4VqlrLo1Nap17pfMNWxv78GOqUBxhC3tfrUEZ%2BSt9gSSWLeaFgxEQAJ82xTaidnVtXRCGgtsj7nipgtn8bdpLEXRx3vMa1nLoGf0srbWSYjcWFcMnilCyfd8LWUbrhpKXZnF%2BkLuk6yeLmoPfLF9BvsFxKPwEgHNnyIo7lH%2Fa%2Fz41gA%2FVANPF1EfMKl6DAyQMfBffk5HIVAe08i4NvIF1G1mSFLyrEQTfbp2YB7WP3TVrrcthizgKmz&X-Amz-Signature=a056bff6982a7c93feccad0ced9ce2951e0b4d86541726dea6bc41a5da920b56&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MZBW3YV%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T131904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBy%2F2pykOHD79K3gehFWg%2B8oUzoSahOyzKIaCM6ycOivAiEAiobD03EXqAGLMSp9mzMUltXjfXPig4wRaVHse3ySnT8q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDIybpNWQ1svyDpJvESrcA1CE9gcHk2DK%2F%2BYuu74GjzmqQ0tiNPA%2F707w8EMIQ2WJB2Rk1Yey3WvuuRUvxHPXaGdXOeonCEUklzCDShuLFdXRmjzdCRIHC1McBpxMk7BqCb8ZrFCDB%2B4itP9IBl8Y5O1CtkHfwiMLeZwDLpZr%2Bc3freOyEm2ryLt2A%2BF4qeY%2Fo3U64jJpl3b56UKfV8JEoICX1RUzQNuiHrLVKlF%2B3UwPJpbolXHtreAfuFOLtK9AKsAydsNRgvDbh3XL5du%2BVtMCoV9CCaijeUr%2F%2BneHfvPP%2FWg426WixHGiGYbqBwfp3xu2j1Nyn819wtLZySApUs0yV6qS1%2FU9EJy4PCLLPeQTp774YqSuDDYU11NMRRFTWkrBNTPFfT6IwIQtZ%2F0Z6GtdEc0LTxWXWeXoKXo3nOiN4qVOL7AZuO%2FoZE37X2YexsVkVucuhACuFH6dFbAuCocJxWEde5HXT0xV%2BKrrw3TG39nHT2CCfNfPi8cIktp4C1KuBWacTzM6Hq%2BRCQv48ST6wBXZGB%2F9jtLN%2F6FFN9dwhDbSPw7k3iQaB2TlTuxbaFHpWrvJwx94t24fRCc9oWcySeAEzCC%2Fm6CKQLgwSm1FU57YV%2BVoKgpIZ69pe%2Biey4VqlrLo1Nap17pfMNWxv78GOqUBxhC3tfrUEZ%2BSt9gSSWLeaFgxEQAJ82xTaidnVtXRCGgtsj7nipgtn8bdpLEXRx3vMa1nLoGf0srbWSYjcWFcMnilCyfd8LWUbrhpKXZnF%2BkLuk6yeLmoPfLF9BvsFxKPwEgHNnyIo7lH%2Fa%2Fz41gA%2FVANPF1EfMKl6DAyQMfBffk5HIVAe08i4NvIF1G1mSFLyrEQTfbp2YB7WP3TVrrcthizgKmz&X-Amz-Signature=f27ea4448b95fb6e3ca6eec00c38a97b54de3082c33424d0e3071f9d229018c2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MZBW3YV%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T131904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBy%2F2pykOHD79K3gehFWg%2B8oUzoSahOyzKIaCM6ycOivAiEAiobD03EXqAGLMSp9mzMUltXjfXPig4wRaVHse3ySnT8q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDIybpNWQ1svyDpJvESrcA1CE9gcHk2DK%2F%2BYuu74GjzmqQ0tiNPA%2F707w8EMIQ2WJB2Rk1Yey3WvuuRUvxHPXaGdXOeonCEUklzCDShuLFdXRmjzdCRIHC1McBpxMk7BqCb8ZrFCDB%2B4itP9IBl8Y5O1CtkHfwiMLeZwDLpZr%2Bc3freOyEm2ryLt2A%2BF4qeY%2Fo3U64jJpl3b56UKfV8JEoICX1RUzQNuiHrLVKlF%2B3UwPJpbolXHtreAfuFOLtK9AKsAydsNRgvDbh3XL5du%2BVtMCoV9CCaijeUr%2F%2BneHfvPP%2FWg426WixHGiGYbqBwfp3xu2j1Nyn819wtLZySApUs0yV6qS1%2FU9EJy4PCLLPeQTp774YqSuDDYU11NMRRFTWkrBNTPFfT6IwIQtZ%2F0Z6GtdEc0LTxWXWeXoKXo3nOiN4qVOL7AZuO%2FoZE37X2YexsVkVucuhACuFH6dFbAuCocJxWEde5HXT0xV%2BKrrw3TG39nHT2CCfNfPi8cIktp4C1KuBWacTzM6Hq%2BRCQv48ST6wBXZGB%2F9jtLN%2F6FFN9dwhDbSPw7k3iQaB2TlTuxbaFHpWrvJwx94t24fRCc9oWcySeAEzCC%2Fm6CKQLgwSm1FU57YV%2BVoKgpIZ69pe%2Biey4VqlrLo1Nap17pfMNWxv78GOqUBxhC3tfrUEZ%2BSt9gSSWLeaFgxEQAJ82xTaidnVtXRCGgtsj7nipgtn8bdpLEXRx3vMa1nLoGf0srbWSYjcWFcMnilCyfd8LWUbrhpKXZnF%2BkLuk6yeLmoPfLF9BvsFxKPwEgHNnyIo7lH%2Fa%2Fz41gA%2FVANPF1EfMKl6DAyQMfBffk5HIVAe08i4NvIF1G1mSFLyrEQTfbp2YB7WP3TVrrcthizgKmz&X-Amz-Signature=6f0f5840a29404b19da6b8eafe804ed8ec80878df38231c32a60abd8086ab35b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MZBW3YV%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T131904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBy%2F2pykOHD79K3gehFWg%2B8oUzoSahOyzKIaCM6ycOivAiEAiobD03EXqAGLMSp9mzMUltXjfXPig4wRaVHse3ySnT8q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDIybpNWQ1svyDpJvESrcA1CE9gcHk2DK%2F%2BYuu74GjzmqQ0tiNPA%2F707w8EMIQ2WJB2Rk1Yey3WvuuRUvxHPXaGdXOeonCEUklzCDShuLFdXRmjzdCRIHC1McBpxMk7BqCb8ZrFCDB%2B4itP9IBl8Y5O1CtkHfwiMLeZwDLpZr%2Bc3freOyEm2ryLt2A%2BF4qeY%2Fo3U64jJpl3b56UKfV8JEoICX1RUzQNuiHrLVKlF%2B3UwPJpbolXHtreAfuFOLtK9AKsAydsNRgvDbh3XL5du%2BVtMCoV9CCaijeUr%2F%2BneHfvPP%2FWg426WixHGiGYbqBwfp3xu2j1Nyn819wtLZySApUs0yV6qS1%2FU9EJy4PCLLPeQTp774YqSuDDYU11NMRRFTWkrBNTPFfT6IwIQtZ%2F0Z6GtdEc0LTxWXWeXoKXo3nOiN4qVOL7AZuO%2FoZE37X2YexsVkVucuhACuFH6dFbAuCocJxWEde5HXT0xV%2BKrrw3TG39nHT2CCfNfPi8cIktp4C1KuBWacTzM6Hq%2BRCQv48ST6wBXZGB%2F9jtLN%2F6FFN9dwhDbSPw7k3iQaB2TlTuxbaFHpWrvJwx94t24fRCc9oWcySeAEzCC%2Fm6CKQLgwSm1FU57YV%2BVoKgpIZ69pe%2Biey4VqlrLo1Nap17pfMNWxv78GOqUBxhC3tfrUEZ%2BSt9gSSWLeaFgxEQAJ82xTaidnVtXRCGgtsj7nipgtn8bdpLEXRx3vMa1nLoGf0srbWSYjcWFcMnilCyfd8LWUbrhpKXZnF%2BkLuk6yeLmoPfLF9BvsFxKPwEgHNnyIo7lH%2Fa%2Fz41gA%2FVANPF1EfMKl6DAyQMfBffk5HIVAe08i4NvIF1G1mSFLyrEQTfbp2YB7WP3TVrrcthizgKmz&X-Amz-Signature=660a90bc133193e95d700f8a5e8ad52229c54e1c5568ac93fbba77ef4c7bbacb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MZBW3YV%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T131904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBy%2F2pykOHD79K3gehFWg%2B8oUzoSahOyzKIaCM6ycOivAiEAiobD03EXqAGLMSp9mzMUltXjfXPig4wRaVHse3ySnT8q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDIybpNWQ1svyDpJvESrcA1CE9gcHk2DK%2F%2BYuu74GjzmqQ0tiNPA%2F707w8EMIQ2WJB2Rk1Yey3WvuuRUvxHPXaGdXOeonCEUklzCDShuLFdXRmjzdCRIHC1McBpxMk7BqCb8ZrFCDB%2B4itP9IBl8Y5O1CtkHfwiMLeZwDLpZr%2Bc3freOyEm2ryLt2A%2BF4qeY%2Fo3U64jJpl3b56UKfV8JEoICX1RUzQNuiHrLVKlF%2B3UwPJpbolXHtreAfuFOLtK9AKsAydsNRgvDbh3XL5du%2BVtMCoV9CCaijeUr%2F%2BneHfvPP%2FWg426WixHGiGYbqBwfp3xu2j1Nyn819wtLZySApUs0yV6qS1%2FU9EJy4PCLLPeQTp774YqSuDDYU11NMRRFTWkrBNTPFfT6IwIQtZ%2F0Z6GtdEc0LTxWXWeXoKXo3nOiN4qVOL7AZuO%2FoZE37X2YexsVkVucuhACuFH6dFbAuCocJxWEde5HXT0xV%2BKrrw3TG39nHT2CCfNfPi8cIktp4C1KuBWacTzM6Hq%2BRCQv48ST6wBXZGB%2F9jtLN%2F6FFN9dwhDbSPw7k3iQaB2TlTuxbaFHpWrvJwx94t24fRCc9oWcySeAEzCC%2Fm6CKQLgwSm1FU57YV%2BVoKgpIZ69pe%2Biey4VqlrLo1Nap17pfMNWxv78GOqUBxhC3tfrUEZ%2BSt9gSSWLeaFgxEQAJ82xTaidnVtXRCGgtsj7nipgtn8bdpLEXRx3vMa1nLoGf0srbWSYjcWFcMnilCyfd8LWUbrhpKXZnF%2BkLuk6yeLmoPfLF9BvsFxKPwEgHNnyIo7lH%2Fa%2Fz41gA%2FVANPF1EfMKl6DAyQMfBffk5HIVAe08i4NvIF1G1mSFLyrEQTfbp2YB7WP3TVrrcthizgKmz&X-Amz-Signature=db1e6662e08836055e40d69e0403ecf5aad47e84858c551891a199e1128bb049&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MZBW3YV%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T131904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBy%2F2pykOHD79K3gehFWg%2B8oUzoSahOyzKIaCM6ycOivAiEAiobD03EXqAGLMSp9mzMUltXjfXPig4wRaVHse3ySnT8q%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDIybpNWQ1svyDpJvESrcA1CE9gcHk2DK%2F%2BYuu74GjzmqQ0tiNPA%2F707w8EMIQ2WJB2Rk1Yey3WvuuRUvxHPXaGdXOeonCEUklzCDShuLFdXRmjzdCRIHC1McBpxMk7BqCb8ZrFCDB%2B4itP9IBl8Y5O1CtkHfwiMLeZwDLpZr%2Bc3freOyEm2ryLt2A%2BF4qeY%2Fo3U64jJpl3b56UKfV8JEoICX1RUzQNuiHrLVKlF%2B3UwPJpbolXHtreAfuFOLtK9AKsAydsNRgvDbh3XL5du%2BVtMCoV9CCaijeUr%2F%2BneHfvPP%2FWg426WixHGiGYbqBwfp3xu2j1Nyn819wtLZySApUs0yV6qS1%2FU9EJy4PCLLPeQTp774YqSuDDYU11NMRRFTWkrBNTPFfT6IwIQtZ%2F0Z6GtdEc0LTxWXWeXoKXo3nOiN4qVOL7AZuO%2FoZE37X2YexsVkVucuhACuFH6dFbAuCocJxWEde5HXT0xV%2BKrrw3TG39nHT2CCfNfPi8cIktp4C1KuBWacTzM6Hq%2BRCQv48ST6wBXZGB%2F9jtLN%2F6FFN9dwhDbSPw7k3iQaB2TlTuxbaFHpWrvJwx94t24fRCc9oWcySeAEzCC%2Fm6CKQLgwSm1FU57YV%2BVoKgpIZ69pe%2Biey4VqlrLo1Nap17pfMNWxv78GOqUBxhC3tfrUEZ%2BSt9gSSWLeaFgxEQAJ82xTaidnVtXRCGgtsj7nipgtn8bdpLEXRx3vMa1nLoGf0srbWSYjcWFcMnilCyfd8LWUbrhpKXZnF%2BkLuk6yeLmoPfLF9BvsFxKPwEgHNnyIo7lH%2Fa%2Fz41gA%2FVANPF1EfMKl6DAyQMfBffk5HIVAe08i4NvIF1G1mSFLyrEQTfbp2YB7WP3TVrrcthizgKmz&X-Amz-Signature=77b02161ffa28066980043a8a62a7bc9227b63f63225bf307f60b7257f379d17&X-Amz-SignedHeaders=host&x-id=GetObject)
