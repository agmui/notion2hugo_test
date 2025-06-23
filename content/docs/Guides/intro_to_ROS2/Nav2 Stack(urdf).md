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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3AKBTZX%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T140954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIGZ5PEgTK4jz7xBR9zWJLvmJIFXd0WSdht7AR%2FaMImIVAiEA6rMJq50NhNsMemSvk5oZipz9mu7MpfgvFBj71ptFH2Iq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDERRHvf6B92tYGNp9ircA12WlJcfUdvHZDZUvnmWw0MOhHmKajLSlcqCMee%2FMuVNAlIAKLjHp%2F2Fdu5g4EU%2FpfxCHY%2BSPmxBSytk10LZFC48EDBE89NX2Fec81E9YcE5n0oTnytV%2Fumd78Oc0jsT9egufgX7eJVFHgfAw9RXQ0weySjk8lhHERPznQMIn8MN5Jdpag6ss%2F7cptZFzXspY%2BRE62P5F6%2FyK50Ud%2FdPp1LPfIVCqUCxfPljbipAh4wlnFdv1EmerIfgJ3v5yu78WopuzTD0IMwOCJyqUFZdbDWG%2F4dwfsdzT1PSCoD6KvT5usEWQ%2FcHx4A6Rg5xOYtuuAa8A0f%2BjFMtWMWoXOEQJBxoccP7j92W35w3aYoeY7jd6nex0MQV4%2F80tl8bSlpug9Bd8fbfFIBbiij85lOEB7%2BfrgrzdKoKK%2B%2FhFqGLGY4tNIjhTeuf77Qyx385lrrdfCgWomEpTuVp%2BdU87vILPqNOy4coKgXcT3u%2BK%2FMOXaBWf9Kb3f9MH0Cg51w5rR%2BuiAM2ALesS%2FYY6wnMm4N0yA2Ekwpn6BQztpmaew2gKeopk9Nags0k3MCOtQvulUrKiypFH73jHIl6Hoie0PVJY21V3gdru2RHco%2BBhZ1isxlsyM59ezuILb62kqblMPSW5cIGOqUBekouG8O0HtdO6KtHscBaYeLlnEGI7iBZfjhKOgh2%2BIAnOrRpOnNL6R%2Bk2oFzAeaTXWZcf7RgCq%2BSDLxQw1H4kjEaYQJIPL%2Bi1bFgN1%2F88GCEp9d%2BlGNPBq5JuHo7dMWO5A27Byxr1cp8d9FkiD7BvXKpOCG76ZeeFLkKbRsHDZ82oZggVxQyz7DDA5bJoOqwL5%2FW9hkxhlTp6zu82%2Fo3Pxb0HAl%2F&X-Amz-Signature=e82b9f6a3d71da7117f829750d2ac8d908e926b0915407b140fcf18afdc35b9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3AKBTZX%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T140954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIGZ5PEgTK4jz7xBR9zWJLvmJIFXd0WSdht7AR%2FaMImIVAiEA6rMJq50NhNsMemSvk5oZipz9mu7MpfgvFBj71ptFH2Iq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDERRHvf6B92tYGNp9ircA12WlJcfUdvHZDZUvnmWw0MOhHmKajLSlcqCMee%2FMuVNAlIAKLjHp%2F2Fdu5g4EU%2FpfxCHY%2BSPmxBSytk10LZFC48EDBE89NX2Fec81E9YcE5n0oTnytV%2Fumd78Oc0jsT9egufgX7eJVFHgfAw9RXQ0weySjk8lhHERPznQMIn8MN5Jdpag6ss%2F7cptZFzXspY%2BRE62P5F6%2FyK50Ud%2FdPp1LPfIVCqUCxfPljbipAh4wlnFdv1EmerIfgJ3v5yu78WopuzTD0IMwOCJyqUFZdbDWG%2F4dwfsdzT1PSCoD6KvT5usEWQ%2FcHx4A6Rg5xOYtuuAa8A0f%2BjFMtWMWoXOEQJBxoccP7j92W35w3aYoeY7jd6nex0MQV4%2F80tl8bSlpug9Bd8fbfFIBbiij85lOEB7%2BfrgrzdKoKK%2B%2FhFqGLGY4tNIjhTeuf77Qyx385lrrdfCgWomEpTuVp%2BdU87vILPqNOy4coKgXcT3u%2BK%2FMOXaBWf9Kb3f9MH0Cg51w5rR%2BuiAM2ALesS%2FYY6wnMm4N0yA2Ekwpn6BQztpmaew2gKeopk9Nags0k3MCOtQvulUrKiypFH73jHIl6Hoie0PVJY21V3gdru2RHco%2BBhZ1isxlsyM59ezuILb62kqblMPSW5cIGOqUBekouG8O0HtdO6KtHscBaYeLlnEGI7iBZfjhKOgh2%2BIAnOrRpOnNL6R%2Bk2oFzAeaTXWZcf7RgCq%2BSDLxQw1H4kjEaYQJIPL%2Bi1bFgN1%2F88GCEp9d%2BlGNPBq5JuHo7dMWO5A27Byxr1cp8d9FkiD7BvXKpOCG76ZeeFLkKbRsHDZ82oZggVxQyz7DDA5bJoOqwL5%2FW9hkxhlTp6zu82%2Fo3Pxb0HAl%2F&X-Amz-Signature=2fcb668d3ea1a7b00c1192020df8819a92e342a10f6f74c5ae0a2cb6f91f35f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3AKBTZX%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T140954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIGZ5PEgTK4jz7xBR9zWJLvmJIFXd0WSdht7AR%2FaMImIVAiEA6rMJq50NhNsMemSvk5oZipz9mu7MpfgvFBj71ptFH2Iq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDERRHvf6B92tYGNp9ircA12WlJcfUdvHZDZUvnmWw0MOhHmKajLSlcqCMee%2FMuVNAlIAKLjHp%2F2Fdu5g4EU%2FpfxCHY%2BSPmxBSytk10LZFC48EDBE89NX2Fec81E9YcE5n0oTnytV%2Fumd78Oc0jsT9egufgX7eJVFHgfAw9RXQ0weySjk8lhHERPznQMIn8MN5Jdpag6ss%2F7cptZFzXspY%2BRE62P5F6%2FyK50Ud%2FdPp1LPfIVCqUCxfPljbipAh4wlnFdv1EmerIfgJ3v5yu78WopuzTD0IMwOCJyqUFZdbDWG%2F4dwfsdzT1PSCoD6KvT5usEWQ%2FcHx4A6Rg5xOYtuuAa8A0f%2BjFMtWMWoXOEQJBxoccP7j92W35w3aYoeY7jd6nex0MQV4%2F80tl8bSlpug9Bd8fbfFIBbiij85lOEB7%2BfrgrzdKoKK%2B%2FhFqGLGY4tNIjhTeuf77Qyx385lrrdfCgWomEpTuVp%2BdU87vILPqNOy4coKgXcT3u%2BK%2FMOXaBWf9Kb3f9MH0Cg51w5rR%2BuiAM2ALesS%2FYY6wnMm4N0yA2Ekwpn6BQztpmaew2gKeopk9Nags0k3MCOtQvulUrKiypFH73jHIl6Hoie0PVJY21V3gdru2RHco%2BBhZ1isxlsyM59ezuILb62kqblMPSW5cIGOqUBekouG8O0HtdO6KtHscBaYeLlnEGI7iBZfjhKOgh2%2BIAnOrRpOnNL6R%2Bk2oFzAeaTXWZcf7RgCq%2BSDLxQw1H4kjEaYQJIPL%2Bi1bFgN1%2F88GCEp9d%2BlGNPBq5JuHo7dMWO5A27Byxr1cp8d9FkiD7BvXKpOCG76ZeeFLkKbRsHDZ82oZggVxQyz7DDA5bJoOqwL5%2FW9hkxhlTp6zu82%2Fo3Pxb0HAl%2F&X-Amz-Signature=d22b88e1ef7d786a685b91c5ad48fe691fea41b4d59c90bf5876a0a8f6117572&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3AKBTZX%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T140954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIGZ5PEgTK4jz7xBR9zWJLvmJIFXd0WSdht7AR%2FaMImIVAiEA6rMJq50NhNsMemSvk5oZipz9mu7MpfgvFBj71ptFH2Iq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDERRHvf6B92tYGNp9ircA12WlJcfUdvHZDZUvnmWw0MOhHmKajLSlcqCMee%2FMuVNAlIAKLjHp%2F2Fdu5g4EU%2FpfxCHY%2BSPmxBSytk10LZFC48EDBE89NX2Fec81E9YcE5n0oTnytV%2Fumd78Oc0jsT9egufgX7eJVFHgfAw9RXQ0weySjk8lhHERPznQMIn8MN5Jdpag6ss%2F7cptZFzXspY%2BRE62P5F6%2FyK50Ud%2FdPp1LPfIVCqUCxfPljbipAh4wlnFdv1EmerIfgJ3v5yu78WopuzTD0IMwOCJyqUFZdbDWG%2F4dwfsdzT1PSCoD6KvT5usEWQ%2FcHx4A6Rg5xOYtuuAa8A0f%2BjFMtWMWoXOEQJBxoccP7j92W35w3aYoeY7jd6nex0MQV4%2F80tl8bSlpug9Bd8fbfFIBbiij85lOEB7%2BfrgrzdKoKK%2B%2FhFqGLGY4tNIjhTeuf77Qyx385lrrdfCgWomEpTuVp%2BdU87vILPqNOy4coKgXcT3u%2BK%2FMOXaBWf9Kb3f9MH0Cg51w5rR%2BuiAM2ALesS%2FYY6wnMm4N0yA2Ekwpn6BQztpmaew2gKeopk9Nags0k3MCOtQvulUrKiypFH73jHIl6Hoie0PVJY21V3gdru2RHco%2BBhZ1isxlsyM59ezuILb62kqblMPSW5cIGOqUBekouG8O0HtdO6KtHscBaYeLlnEGI7iBZfjhKOgh2%2BIAnOrRpOnNL6R%2Bk2oFzAeaTXWZcf7RgCq%2BSDLxQw1H4kjEaYQJIPL%2Bi1bFgN1%2F88GCEp9d%2BlGNPBq5JuHo7dMWO5A27Byxr1cp8d9FkiD7BvXKpOCG76ZeeFLkKbRsHDZ82oZggVxQyz7DDA5bJoOqwL5%2FW9hkxhlTp6zu82%2Fo3Pxb0HAl%2F&X-Amz-Signature=dd725d2119f2325fe298aeeb3ab8758c69a0d7573b94a1a672324791ed132361&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3AKBTZX%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T140954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIGZ5PEgTK4jz7xBR9zWJLvmJIFXd0WSdht7AR%2FaMImIVAiEA6rMJq50NhNsMemSvk5oZipz9mu7MpfgvFBj71ptFH2Iq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDERRHvf6B92tYGNp9ircA12WlJcfUdvHZDZUvnmWw0MOhHmKajLSlcqCMee%2FMuVNAlIAKLjHp%2F2Fdu5g4EU%2FpfxCHY%2BSPmxBSytk10LZFC48EDBE89NX2Fec81E9YcE5n0oTnytV%2Fumd78Oc0jsT9egufgX7eJVFHgfAw9RXQ0weySjk8lhHERPznQMIn8MN5Jdpag6ss%2F7cptZFzXspY%2BRE62P5F6%2FyK50Ud%2FdPp1LPfIVCqUCxfPljbipAh4wlnFdv1EmerIfgJ3v5yu78WopuzTD0IMwOCJyqUFZdbDWG%2F4dwfsdzT1PSCoD6KvT5usEWQ%2FcHx4A6Rg5xOYtuuAa8A0f%2BjFMtWMWoXOEQJBxoccP7j92W35w3aYoeY7jd6nex0MQV4%2F80tl8bSlpug9Bd8fbfFIBbiij85lOEB7%2BfrgrzdKoKK%2B%2FhFqGLGY4tNIjhTeuf77Qyx385lrrdfCgWomEpTuVp%2BdU87vILPqNOy4coKgXcT3u%2BK%2FMOXaBWf9Kb3f9MH0Cg51w5rR%2BuiAM2ALesS%2FYY6wnMm4N0yA2Ekwpn6BQztpmaew2gKeopk9Nags0k3MCOtQvulUrKiypFH73jHIl6Hoie0PVJY21V3gdru2RHco%2BBhZ1isxlsyM59ezuILb62kqblMPSW5cIGOqUBekouG8O0HtdO6KtHscBaYeLlnEGI7iBZfjhKOgh2%2BIAnOrRpOnNL6R%2Bk2oFzAeaTXWZcf7RgCq%2BSDLxQw1H4kjEaYQJIPL%2Bi1bFgN1%2F88GCEp9d%2BlGNPBq5JuHo7dMWO5A27Byxr1cp8d9FkiD7BvXKpOCG76ZeeFLkKbRsHDZ82oZggVxQyz7DDA5bJoOqwL5%2FW9hkxhlTp6zu82%2Fo3Pxb0HAl%2F&X-Amz-Signature=5ec48b8a209811596879fb2d62b886c9b25267317b2b3d4c437684c0869ae429&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3AKBTZX%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T140954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIGZ5PEgTK4jz7xBR9zWJLvmJIFXd0WSdht7AR%2FaMImIVAiEA6rMJq50NhNsMemSvk5oZipz9mu7MpfgvFBj71ptFH2Iq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDERRHvf6B92tYGNp9ircA12WlJcfUdvHZDZUvnmWw0MOhHmKajLSlcqCMee%2FMuVNAlIAKLjHp%2F2Fdu5g4EU%2FpfxCHY%2BSPmxBSytk10LZFC48EDBE89NX2Fec81E9YcE5n0oTnytV%2Fumd78Oc0jsT9egufgX7eJVFHgfAw9RXQ0weySjk8lhHERPznQMIn8MN5Jdpag6ss%2F7cptZFzXspY%2BRE62P5F6%2FyK50Ud%2FdPp1LPfIVCqUCxfPljbipAh4wlnFdv1EmerIfgJ3v5yu78WopuzTD0IMwOCJyqUFZdbDWG%2F4dwfsdzT1PSCoD6KvT5usEWQ%2FcHx4A6Rg5xOYtuuAa8A0f%2BjFMtWMWoXOEQJBxoccP7j92W35w3aYoeY7jd6nex0MQV4%2F80tl8bSlpug9Bd8fbfFIBbiij85lOEB7%2BfrgrzdKoKK%2B%2FhFqGLGY4tNIjhTeuf77Qyx385lrrdfCgWomEpTuVp%2BdU87vILPqNOy4coKgXcT3u%2BK%2FMOXaBWf9Kb3f9MH0Cg51w5rR%2BuiAM2ALesS%2FYY6wnMm4N0yA2Ekwpn6BQztpmaew2gKeopk9Nags0k3MCOtQvulUrKiypFH73jHIl6Hoie0PVJY21V3gdru2RHco%2BBhZ1isxlsyM59ezuILb62kqblMPSW5cIGOqUBekouG8O0HtdO6KtHscBaYeLlnEGI7iBZfjhKOgh2%2BIAnOrRpOnNL6R%2Bk2oFzAeaTXWZcf7RgCq%2BSDLxQw1H4kjEaYQJIPL%2Bi1bFgN1%2F88GCEp9d%2BlGNPBq5JuHo7dMWO5A27Byxr1cp8d9FkiD7BvXKpOCG76ZeeFLkKbRsHDZ82oZggVxQyz7DDA5bJoOqwL5%2FW9hkxhlTp6zu82%2Fo3Pxb0HAl%2F&X-Amz-Signature=30c88b5de42d7a856bd8f7000327701dd20e6aa69422e78c2820540ed3522f5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
