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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUBCLO7U%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDOQ0QNNzujubzMaRcNjEX1U3QF1fHjTRbEAKShhp0baQIgMzzd%2FYb4Qz7XEjq0bW3qZPqXIGzSJcrO%2FnUr3og5aMMqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnLpmcYXwfFoOEI9SrcA81cNs2jaz0wA1MgE8JCUREzoiFJbWkqckr9xETCopIXFKNXQiGprYoDPn2qKtiG9Z89e6gPFOptjIRAUAAlB7XazaWC3QwcOpbx9aoPbp3ySTiBeTb2Bj0cI4qyVZbmi7m9Hpqn1p4hhHqA41KUmz%2F5FDBtHDOxzaahPqB71r%2B8n%2BFNP%2BXlDJJSCl1bv%2BPdPtGqWykC2w8RP1t2MZFCzccG0Ug7LJkNEihekTZlkzcB3FSJ2hTay1eX5jVZ%2FB89fh0cgfcICRwQUPVLgVlM6DpkbjEzBnmF8Kff1MlKsoBpLRXtDmpRxQ1PNCsYiBGsfTkqpVGdTDa11Do8ifa9Z1C8S97NDVZ27O91bme8Y0fJTQVhbUrT2NkgS7GnhArkjfHUNPkvpLqGSL0vxVNJ4fWXzHby6r1l03LFf%2BSwdQ%2BeXwpHdle%2BRyqjHb4krntP1qguuB0yN6Hr1d717B0XwbHAOS3QekXj4Nw8%2BnP9JTS16mBy88wylxkBgKTI2%2BNBm%2F3nxd65LeBmuvkRYEVTrcvJu3Zg%2Ffancvm63h9L%2Fdus42x%2Bl3uarJkBvBRBJhFrgBEvVF2Rh3dJhcAjRpNa%2Fmw1zMOQiYaFs5VvJt%2FUaJnc1M%2FumxcRSUYX%2BBkXMNzr3r8GOqUB8X4oQcVFyIahRKE57pFCbnfkoUTCb5GMl%2Ba6swiJ5jcZywThv2dDyeK9XycHES7%2FldwxQ2uyAwmSjlhwO2PpCCCSRMvLDP2dBxKdVq58SD5P%2Ff%2B4kztXR4qEmDh2IzRljAnOqFXWrlOjAUfcpqnHdlK1JVzb7PR5UO0Eo7%2FGY6gOE37WRJ9lwiIlz%2BediE6pgo1cAa4qonr%2FO%2FWYr6paf7RZO4Ml&X-Amz-Signature=269ea746e309e995c17ce7b43d92e83b4d621e0955226a473a49ba321199285c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUBCLO7U%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDOQ0QNNzujubzMaRcNjEX1U3QF1fHjTRbEAKShhp0baQIgMzzd%2FYb4Qz7XEjq0bW3qZPqXIGzSJcrO%2FnUr3og5aMMqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnLpmcYXwfFoOEI9SrcA81cNs2jaz0wA1MgE8JCUREzoiFJbWkqckr9xETCopIXFKNXQiGprYoDPn2qKtiG9Z89e6gPFOptjIRAUAAlB7XazaWC3QwcOpbx9aoPbp3ySTiBeTb2Bj0cI4qyVZbmi7m9Hpqn1p4hhHqA41KUmz%2F5FDBtHDOxzaahPqB71r%2B8n%2BFNP%2BXlDJJSCl1bv%2BPdPtGqWykC2w8RP1t2MZFCzccG0Ug7LJkNEihekTZlkzcB3FSJ2hTay1eX5jVZ%2FB89fh0cgfcICRwQUPVLgVlM6DpkbjEzBnmF8Kff1MlKsoBpLRXtDmpRxQ1PNCsYiBGsfTkqpVGdTDa11Do8ifa9Z1C8S97NDVZ27O91bme8Y0fJTQVhbUrT2NkgS7GnhArkjfHUNPkvpLqGSL0vxVNJ4fWXzHby6r1l03LFf%2BSwdQ%2BeXwpHdle%2BRyqjHb4krntP1qguuB0yN6Hr1d717B0XwbHAOS3QekXj4Nw8%2BnP9JTS16mBy88wylxkBgKTI2%2BNBm%2F3nxd65LeBmuvkRYEVTrcvJu3Zg%2Ffancvm63h9L%2Fdus42x%2Bl3uarJkBvBRBJhFrgBEvVF2Rh3dJhcAjRpNa%2Fmw1zMOQiYaFs5VvJt%2FUaJnc1M%2FumxcRSUYX%2BBkXMNzr3r8GOqUB8X4oQcVFyIahRKE57pFCbnfkoUTCb5GMl%2Ba6swiJ5jcZywThv2dDyeK9XycHES7%2FldwxQ2uyAwmSjlhwO2PpCCCSRMvLDP2dBxKdVq58SD5P%2Ff%2B4kztXR4qEmDh2IzRljAnOqFXWrlOjAUfcpqnHdlK1JVzb7PR5UO0Eo7%2FGY6gOE37WRJ9lwiIlz%2BediE6pgo1cAa4qonr%2FO%2FWYr6paf7RZO4Ml&X-Amz-Signature=d3e7e6e632ed78f6a6adc1a9dc7f4c94bbb77270bfe2ee59fd1426c69e86311c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUBCLO7U%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDOQ0QNNzujubzMaRcNjEX1U3QF1fHjTRbEAKShhp0baQIgMzzd%2FYb4Qz7XEjq0bW3qZPqXIGzSJcrO%2FnUr3og5aMMqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnLpmcYXwfFoOEI9SrcA81cNs2jaz0wA1MgE8JCUREzoiFJbWkqckr9xETCopIXFKNXQiGprYoDPn2qKtiG9Z89e6gPFOptjIRAUAAlB7XazaWC3QwcOpbx9aoPbp3ySTiBeTb2Bj0cI4qyVZbmi7m9Hpqn1p4hhHqA41KUmz%2F5FDBtHDOxzaahPqB71r%2B8n%2BFNP%2BXlDJJSCl1bv%2BPdPtGqWykC2w8RP1t2MZFCzccG0Ug7LJkNEihekTZlkzcB3FSJ2hTay1eX5jVZ%2FB89fh0cgfcICRwQUPVLgVlM6DpkbjEzBnmF8Kff1MlKsoBpLRXtDmpRxQ1PNCsYiBGsfTkqpVGdTDa11Do8ifa9Z1C8S97NDVZ27O91bme8Y0fJTQVhbUrT2NkgS7GnhArkjfHUNPkvpLqGSL0vxVNJ4fWXzHby6r1l03LFf%2BSwdQ%2BeXwpHdle%2BRyqjHb4krntP1qguuB0yN6Hr1d717B0XwbHAOS3QekXj4Nw8%2BnP9JTS16mBy88wylxkBgKTI2%2BNBm%2F3nxd65LeBmuvkRYEVTrcvJu3Zg%2Ffancvm63h9L%2Fdus42x%2Bl3uarJkBvBRBJhFrgBEvVF2Rh3dJhcAjRpNa%2Fmw1zMOQiYaFs5VvJt%2FUaJnc1M%2FumxcRSUYX%2BBkXMNzr3r8GOqUB8X4oQcVFyIahRKE57pFCbnfkoUTCb5GMl%2Ba6swiJ5jcZywThv2dDyeK9XycHES7%2FldwxQ2uyAwmSjlhwO2PpCCCSRMvLDP2dBxKdVq58SD5P%2Ff%2B4kztXR4qEmDh2IzRljAnOqFXWrlOjAUfcpqnHdlK1JVzb7PR5UO0Eo7%2FGY6gOE37WRJ9lwiIlz%2BediE6pgo1cAa4qonr%2FO%2FWYr6paf7RZO4Ml&X-Amz-Signature=1c2faca0d76db07a877751b472031e465ac78309470492902fa61359a17ccf50&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUBCLO7U%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDOQ0QNNzujubzMaRcNjEX1U3QF1fHjTRbEAKShhp0baQIgMzzd%2FYb4Qz7XEjq0bW3qZPqXIGzSJcrO%2FnUr3og5aMMqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnLpmcYXwfFoOEI9SrcA81cNs2jaz0wA1MgE8JCUREzoiFJbWkqckr9xETCopIXFKNXQiGprYoDPn2qKtiG9Z89e6gPFOptjIRAUAAlB7XazaWC3QwcOpbx9aoPbp3ySTiBeTb2Bj0cI4qyVZbmi7m9Hpqn1p4hhHqA41KUmz%2F5FDBtHDOxzaahPqB71r%2B8n%2BFNP%2BXlDJJSCl1bv%2BPdPtGqWykC2w8RP1t2MZFCzccG0Ug7LJkNEihekTZlkzcB3FSJ2hTay1eX5jVZ%2FB89fh0cgfcICRwQUPVLgVlM6DpkbjEzBnmF8Kff1MlKsoBpLRXtDmpRxQ1PNCsYiBGsfTkqpVGdTDa11Do8ifa9Z1C8S97NDVZ27O91bme8Y0fJTQVhbUrT2NkgS7GnhArkjfHUNPkvpLqGSL0vxVNJ4fWXzHby6r1l03LFf%2BSwdQ%2BeXwpHdle%2BRyqjHb4krntP1qguuB0yN6Hr1d717B0XwbHAOS3QekXj4Nw8%2BnP9JTS16mBy88wylxkBgKTI2%2BNBm%2F3nxd65LeBmuvkRYEVTrcvJu3Zg%2Ffancvm63h9L%2Fdus42x%2Bl3uarJkBvBRBJhFrgBEvVF2Rh3dJhcAjRpNa%2Fmw1zMOQiYaFs5VvJt%2FUaJnc1M%2FumxcRSUYX%2BBkXMNzr3r8GOqUB8X4oQcVFyIahRKE57pFCbnfkoUTCb5GMl%2Ba6swiJ5jcZywThv2dDyeK9XycHES7%2FldwxQ2uyAwmSjlhwO2PpCCCSRMvLDP2dBxKdVq58SD5P%2Ff%2B4kztXR4qEmDh2IzRljAnOqFXWrlOjAUfcpqnHdlK1JVzb7PR5UO0Eo7%2FGY6gOE37WRJ9lwiIlz%2BediE6pgo1cAa4qonr%2FO%2FWYr6paf7RZO4Ml&X-Amz-Signature=cda96625daa87c121794a7088d424a40cab5dc03a0c0164e379ad68192ca2370&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUBCLO7U%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDOQ0QNNzujubzMaRcNjEX1U3QF1fHjTRbEAKShhp0baQIgMzzd%2FYb4Qz7XEjq0bW3qZPqXIGzSJcrO%2FnUr3og5aMMqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnLpmcYXwfFoOEI9SrcA81cNs2jaz0wA1MgE8JCUREzoiFJbWkqckr9xETCopIXFKNXQiGprYoDPn2qKtiG9Z89e6gPFOptjIRAUAAlB7XazaWC3QwcOpbx9aoPbp3ySTiBeTb2Bj0cI4qyVZbmi7m9Hpqn1p4hhHqA41KUmz%2F5FDBtHDOxzaahPqB71r%2B8n%2BFNP%2BXlDJJSCl1bv%2BPdPtGqWykC2w8RP1t2MZFCzccG0Ug7LJkNEihekTZlkzcB3FSJ2hTay1eX5jVZ%2FB89fh0cgfcICRwQUPVLgVlM6DpkbjEzBnmF8Kff1MlKsoBpLRXtDmpRxQ1PNCsYiBGsfTkqpVGdTDa11Do8ifa9Z1C8S97NDVZ27O91bme8Y0fJTQVhbUrT2NkgS7GnhArkjfHUNPkvpLqGSL0vxVNJ4fWXzHby6r1l03LFf%2BSwdQ%2BeXwpHdle%2BRyqjHb4krntP1qguuB0yN6Hr1d717B0XwbHAOS3QekXj4Nw8%2BnP9JTS16mBy88wylxkBgKTI2%2BNBm%2F3nxd65LeBmuvkRYEVTrcvJu3Zg%2Ffancvm63h9L%2Fdus42x%2Bl3uarJkBvBRBJhFrgBEvVF2Rh3dJhcAjRpNa%2Fmw1zMOQiYaFs5VvJt%2FUaJnc1M%2FumxcRSUYX%2BBkXMNzr3r8GOqUB8X4oQcVFyIahRKE57pFCbnfkoUTCb5GMl%2Ba6swiJ5jcZywThv2dDyeK9XycHES7%2FldwxQ2uyAwmSjlhwO2PpCCCSRMvLDP2dBxKdVq58SD5P%2Ff%2B4kztXR4qEmDh2IzRljAnOqFXWrlOjAUfcpqnHdlK1JVzb7PR5UO0Eo7%2FGY6gOE37WRJ9lwiIlz%2BediE6pgo1cAa4qonr%2FO%2FWYr6paf7RZO4Ml&X-Amz-Signature=ef313d5b67db7841901113fffe78e0f0511fd99809896ac06f36f59e27458f9b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUBCLO7U%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T121501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDOQ0QNNzujubzMaRcNjEX1U3QF1fHjTRbEAKShhp0baQIgMzzd%2FYb4Qz7XEjq0bW3qZPqXIGzSJcrO%2FnUr3og5aMMqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAnLpmcYXwfFoOEI9SrcA81cNs2jaz0wA1MgE8JCUREzoiFJbWkqckr9xETCopIXFKNXQiGprYoDPn2qKtiG9Z89e6gPFOptjIRAUAAlB7XazaWC3QwcOpbx9aoPbp3ySTiBeTb2Bj0cI4qyVZbmi7m9Hpqn1p4hhHqA41KUmz%2F5FDBtHDOxzaahPqB71r%2B8n%2BFNP%2BXlDJJSCl1bv%2BPdPtGqWykC2w8RP1t2MZFCzccG0Ug7LJkNEihekTZlkzcB3FSJ2hTay1eX5jVZ%2FB89fh0cgfcICRwQUPVLgVlM6DpkbjEzBnmF8Kff1MlKsoBpLRXtDmpRxQ1PNCsYiBGsfTkqpVGdTDa11Do8ifa9Z1C8S97NDVZ27O91bme8Y0fJTQVhbUrT2NkgS7GnhArkjfHUNPkvpLqGSL0vxVNJ4fWXzHby6r1l03LFf%2BSwdQ%2BeXwpHdle%2BRyqjHb4krntP1qguuB0yN6Hr1d717B0XwbHAOS3QekXj4Nw8%2BnP9JTS16mBy88wylxkBgKTI2%2BNBm%2F3nxd65LeBmuvkRYEVTrcvJu3Zg%2Ffancvm63h9L%2Fdus42x%2Bl3uarJkBvBRBJhFrgBEvVF2Rh3dJhcAjRpNa%2Fmw1zMOQiYaFs5VvJt%2FUaJnc1M%2FumxcRSUYX%2BBkXMNzr3r8GOqUB8X4oQcVFyIahRKE57pFCbnfkoUTCb5GMl%2Ba6swiJ5jcZywThv2dDyeK9XycHES7%2FldwxQ2uyAwmSjlhwO2PpCCCSRMvLDP2dBxKdVq58SD5P%2Ff%2B4kztXR4qEmDh2IzRljAnOqFXWrlOjAUfcpqnHdlK1JVzb7PR5UO0Eo7%2FGY6gOE37WRJ9lwiIlz%2BediE6pgo1cAa4qonr%2FO%2FWYr6paf7RZO4Ml&X-Amz-Signature=359732295aaeb3defe052de582d6e80685434b1cfc2b8c2f4bf7ef52fdac5290&X-Amz-SignedHeaders=host&x-id=GetObject)
