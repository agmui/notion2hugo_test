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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7TALU7U%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T022517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIAdHWQ35OJA%2FyBr%2B1mw8TpCVmsxe%2F7dEzzaP6cN6ws5rAiEA%2BDkDSjrt2jhXoVYnGMGYlsL3RE6M%2BIAQqF2h11RcBBIq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDDN6BHc5WI%2FoJqjogircAw3ffozG410n38xGVhCbB%2F0pyDNlyg2N%2BdfPZGymb0vRbVcgn9QiOyIu3IMpv53R5EdJ5KDbYuf%2B0idnz1xXZanDtRWJTJM6cRiEFMcphlXI0M8Wmvk0hXIISLqvX4iCpCfF1YSj%2BuvPH%2BPUvLcsGI2M0R%2B9gC2Tz1lONpDD4llMX%2BBnQlLFf3aktESKyK0J2peqD1PFZJrgtwj%2F%2Be%2F3TpOnxX4wq5RdpNGdJXDCn2iMYfPg0jIhy23VjqIEc6%2FzaujUnLfUck1gU1ThfCDAO6Nbo9AddVdAzGH7NOC5JwV2ABTH3CK0TDWfu1U758%2F5KdcNTuDK9jrl3BQL1tiMbhFdaOSTd9AoFaunxf8vcfLYndXw%2F8FoLI59nq%2Fcd4geAZSbIFLZsfenVLzYUNdvAGSYZWovB2W5u9hem457oLv%2BLRxo7QKDqRLg0OC5C6Y8G0lz2ayfn7wIOeuMHSq8orOmj5Dg5a07auXJ4vaaRYqdMCAQ53pKSKKLZ9EZ3EyU8AEXCezppOZ5TWB9MINrg40nTGq8z%2B7eJ8F7rt%2B1WBHmXBqLAvd8xOOPgzX%2FMDJFKPdHv6Bt%2FSWGwWfximELxHXajUaHLnOigkioXcszM01gjVjaF5epCk%2F416%2B7MMSdlcEGOqUB28dr2%2ByMAa6pC6%2FuXg%2B6nMkqQkQ9Iv8BgSjKpq8uTH1zrxOACX5uDP11%2BqETGZ8hLENHVdB7SbihXI654X4oUuQ%2FBvp1kZEW7qo6leU%2Bf3c3gOARiqSAUwDG7KtRyboNNlZps75RcfYRAIZdexiC%2FfsduWvfsYBkn8nlVyv3wMDi%2FFgON3uBXLQ6BHV2nmBu0oIIqFxeBValHYXOxXH%2BuFnOZbZj&X-Amz-Signature=bf83f328a5a16c980740f92d2059abe9e23a11a7a4e3bce88ad9918270d4a204&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7TALU7U%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T022517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIAdHWQ35OJA%2FyBr%2B1mw8TpCVmsxe%2F7dEzzaP6cN6ws5rAiEA%2BDkDSjrt2jhXoVYnGMGYlsL3RE6M%2BIAQqF2h11RcBBIq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDDN6BHc5WI%2FoJqjogircAw3ffozG410n38xGVhCbB%2F0pyDNlyg2N%2BdfPZGymb0vRbVcgn9QiOyIu3IMpv53R5EdJ5KDbYuf%2B0idnz1xXZanDtRWJTJM6cRiEFMcphlXI0M8Wmvk0hXIISLqvX4iCpCfF1YSj%2BuvPH%2BPUvLcsGI2M0R%2B9gC2Tz1lONpDD4llMX%2BBnQlLFf3aktESKyK0J2peqD1PFZJrgtwj%2F%2Be%2F3TpOnxX4wq5RdpNGdJXDCn2iMYfPg0jIhy23VjqIEc6%2FzaujUnLfUck1gU1ThfCDAO6Nbo9AddVdAzGH7NOC5JwV2ABTH3CK0TDWfu1U758%2F5KdcNTuDK9jrl3BQL1tiMbhFdaOSTd9AoFaunxf8vcfLYndXw%2F8FoLI59nq%2Fcd4geAZSbIFLZsfenVLzYUNdvAGSYZWovB2W5u9hem457oLv%2BLRxo7QKDqRLg0OC5C6Y8G0lz2ayfn7wIOeuMHSq8orOmj5Dg5a07auXJ4vaaRYqdMCAQ53pKSKKLZ9EZ3EyU8AEXCezppOZ5TWB9MINrg40nTGq8z%2B7eJ8F7rt%2B1WBHmXBqLAvd8xOOPgzX%2FMDJFKPdHv6Bt%2FSWGwWfximELxHXajUaHLnOigkioXcszM01gjVjaF5epCk%2F416%2B7MMSdlcEGOqUB28dr2%2ByMAa6pC6%2FuXg%2B6nMkqQkQ9Iv8BgSjKpq8uTH1zrxOACX5uDP11%2BqETGZ8hLENHVdB7SbihXI654X4oUuQ%2FBvp1kZEW7qo6leU%2Bf3c3gOARiqSAUwDG7KtRyboNNlZps75RcfYRAIZdexiC%2FfsduWvfsYBkn8nlVyv3wMDi%2FFgON3uBXLQ6BHV2nmBu0oIIqFxeBValHYXOxXH%2BuFnOZbZj&X-Amz-Signature=151dcd42d95cd6c33ffe13b2d43b4bf1852c347f87bde104156d126a0538bc1d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7TALU7U%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T022517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIAdHWQ35OJA%2FyBr%2B1mw8TpCVmsxe%2F7dEzzaP6cN6ws5rAiEA%2BDkDSjrt2jhXoVYnGMGYlsL3RE6M%2BIAQqF2h11RcBBIq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDDN6BHc5WI%2FoJqjogircAw3ffozG410n38xGVhCbB%2F0pyDNlyg2N%2BdfPZGymb0vRbVcgn9QiOyIu3IMpv53R5EdJ5KDbYuf%2B0idnz1xXZanDtRWJTJM6cRiEFMcphlXI0M8Wmvk0hXIISLqvX4iCpCfF1YSj%2BuvPH%2BPUvLcsGI2M0R%2B9gC2Tz1lONpDD4llMX%2BBnQlLFf3aktESKyK0J2peqD1PFZJrgtwj%2F%2Be%2F3TpOnxX4wq5RdpNGdJXDCn2iMYfPg0jIhy23VjqIEc6%2FzaujUnLfUck1gU1ThfCDAO6Nbo9AddVdAzGH7NOC5JwV2ABTH3CK0TDWfu1U758%2F5KdcNTuDK9jrl3BQL1tiMbhFdaOSTd9AoFaunxf8vcfLYndXw%2F8FoLI59nq%2Fcd4geAZSbIFLZsfenVLzYUNdvAGSYZWovB2W5u9hem457oLv%2BLRxo7QKDqRLg0OC5C6Y8G0lz2ayfn7wIOeuMHSq8orOmj5Dg5a07auXJ4vaaRYqdMCAQ53pKSKKLZ9EZ3EyU8AEXCezppOZ5TWB9MINrg40nTGq8z%2B7eJ8F7rt%2B1WBHmXBqLAvd8xOOPgzX%2FMDJFKPdHv6Bt%2FSWGwWfximELxHXajUaHLnOigkioXcszM01gjVjaF5epCk%2F416%2B7MMSdlcEGOqUB28dr2%2ByMAa6pC6%2FuXg%2B6nMkqQkQ9Iv8BgSjKpq8uTH1zrxOACX5uDP11%2BqETGZ8hLENHVdB7SbihXI654X4oUuQ%2FBvp1kZEW7qo6leU%2Bf3c3gOARiqSAUwDG7KtRyboNNlZps75RcfYRAIZdexiC%2FfsduWvfsYBkn8nlVyv3wMDi%2FFgON3uBXLQ6BHV2nmBu0oIIqFxeBValHYXOxXH%2BuFnOZbZj&X-Amz-Signature=0a1824d55a43b4a6adf3e168fdd8ba2ca2f54f7c4376d203c3e23864daabadc0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7TALU7U%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T022517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIAdHWQ35OJA%2FyBr%2B1mw8TpCVmsxe%2F7dEzzaP6cN6ws5rAiEA%2BDkDSjrt2jhXoVYnGMGYlsL3RE6M%2BIAQqF2h11RcBBIq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDDN6BHc5WI%2FoJqjogircAw3ffozG410n38xGVhCbB%2F0pyDNlyg2N%2BdfPZGymb0vRbVcgn9QiOyIu3IMpv53R5EdJ5KDbYuf%2B0idnz1xXZanDtRWJTJM6cRiEFMcphlXI0M8Wmvk0hXIISLqvX4iCpCfF1YSj%2BuvPH%2BPUvLcsGI2M0R%2B9gC2Tz1lONpDD4llMX%2BBnQlLFf3aktESKyK0J2peqD1PFZJrgtwj%2F%2Be%2F3TpOnxX4wq5RdpNGdJXDCn2iMYfPg0jIhy23VjqIEc6%2FzaujUnLfUck1gU1ThfCDAO6Nbo9AddVdAzGH7NOC5JwV2ABTH3CK0TDWfu1U758%2F5KdcNTuDK9jrl3BQL1tiMbhFdaOSTd9AoFaunxf8vcfLYndXw%2F8FoLI59nq%2Fcd4geAZSbIFLZsfenVLzYUNdvAGSYZWovB2W5u9hem457oLv%2BLRxo7QKDqRLg0OC5C6Y8G0lz2ayfn7wIOeuMHSq8orOmj5Dg5a07auXJ4vaaRYqdMCAQ53pKSKKLZ9EZ3EyU8AEXCezppOZ5TWB9MINrg40nTGq8z%2B7eJ8F7rt%2B1WBHmXBqLAvd8xOOPgzX%2FMDJFKPdHv6Bt%2FSWGwWfximELxHXajUaHLnOigkioXcszM01gjVjaF5epCk%2F416%2B7MMSdlcEGOqUB28dr2%2ByMAa6pC6%2FuXg%2B6nMkqQkQ9Iv8BgSjKpq8uTH1zrxOACX5uDP11%2BqETGZ8hLENHVdB7SbihXI654X4oUuQ%2FBvp1kZEW7qo6leU%2Bf3c3gOARiqSAUwDG7KtRyboNNlZps75RcfYRAIZdexiC%2FfsduWvfsYBkn8nlVyv3wMDi%2FFgON3uBXLQ6BHV2nmBu0oIIqFxeBValHYXOxXH%2BuFnOZbZj&X-Amz-Signature=b8de10320775e5b026506dc79b64968a7797ef5029b298f3857957693b945b8c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7TALU7U%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T022517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIAdHWQ35OJA%2FyBr%2B1mw8TpCVmsxe%2F7dEzzaP6cN6ws5rAiEA%2BDkDSjrt2jhXoVYnGMGYlsL3RE6M%2BIAQqF2h11RcBBIq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDDN6BHc5WI%2FoJqjogircAw3ffozG410n38xGVhCbB%2F0pyDNlyg2N%2BdfPZGymb0vRbVcgn9QiOyIu3IMpv53R5EdJ5KDbYuf%2B0idnz1xXZanDtRWJTJM6cRiEFMcphlXI0M8Wmvk0hXIISLqvX4iCpCfF1YSj%2BuvPH%2BPUvLcsGI2M0R%2B9gC2Tz1lONpDD4llMX%2BBnQlLFf3aktESKyK0J2peqD1PFZJrgtwj%2F%2Be%2F3TpOnxX4wq5RdpNGdJXDCn2iMYfPg0jIhy23VjqIEc6%2FzaujUnLfUck1gU1ThfCDAO6Nbo9AddVdAzGH7NOC5JwV2ABTH3CK0TDWfu1U758%2F5KdcNTuDK9jrl3BQL1tiMbhFdaOSTd9AoFaunxf8vcfLYndXw%2F8FoLI59nq%2Fcd4geAZSbIFLZsfenVLzYUNdvAGSYZWovB2W5u9hem457oLv%2BLRxo7QKDqRLg0OC5C6Y8G0lz2ayfn7wIOeuMHSq8orOmj5Dg5a07auXJ4vaaRYqdMCAQ53pKSKKLZ9EZ3EyU8AEXCezppOZ5TWB9MINrg40nTGq8z%2B7eJ8F7rt%2B1WBHmXBqLAvd8xOOPgzX%2FMDJFKPdHv6Bt%2FSWGwWfximELxHXajUaHLnOigkioXcszM01gjVjaF5epCk%2F416%2B7MMSdlcEGOqUB28dr2%2ByMAa6pC6%2FuXg%2B6nMkqQkQ9Iv8BgSjKpq8uTH1zrxOACX5uDP11%2BqETGZ8hLENHVdB7SbihXI654X4oUuQ%2FBvp1kZEW7qo6leU%2Bf3c3gOARiqSAUwDG7KtRyboNNlZps75RcfYRAIZdexiC%2FfsduWvfsYBkn8nlVyv3wMDi%2FFgON3uBXLQ6BHV2nmBu0oIIqFxeBValHYXOxXH%2BuFnOZbZj&X-Amz-Signature=4b5c0492e6381ad505279ac282ba1686dcd17e36303bc1bbaab834d409125150&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7TALU7U%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T022517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIAdHWQ35OJA%2FyBr%2B1mw8TpCVmsxe%2F7dEzzaP6cN6ws5rAiEA%2BDkDSjrt2jhXoVYnGMGYlsL3RE6M%2BIAQqF2h11RcBBIq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDDN6BHc5WI%2FoJqjogircAw3ffozG410n38xGVhCbB%2F0pyDNlyg2N%2BdfPZGymb0vRbVcgn9QiOyIu3IMpv53R5EdJ5KDbYuf%2B0idnz1xXZanDtRWJTJM6cRiEFMcphlXI0M8Wmvk0hXIISLqvX4iCpCfF1YSj%2BuvPH%2BPUvLcsGI2M0R%2B9gC2Tz1lONpDD4llMX%2BBnQlLFf3aktESKyK0J2peqD1PFZJrgtwj%2F%2Be%2F3TpOnxX4wq5RdpNGdJXDCn2iMYfPg0jIhy23VjqIEc6%2FzaujUnLfUck1gU1ThfCDAO6Nbo9AddVdAzGH7NOC5JwV2ABTH3CK0TDWfu1U758%2F5KdcNTuDK9jrl3BQL1tiMbhFdaOSTd9AoFaunxf8vcfLYndXw%2F8FoLI59nq%2Fcd4geAZSbIFLZsfenVLzYUNdvAGSYZWovB2W5u9hem457oLv%2BLRxo7QKDqRLg0OC5C6Y8G0lz2ayfn7wIOeuMHSq8orOmj5Dg5a07auXJ4vaaRYqdMCAQ53pKSKKLZ9EZ3EyU8AEXCezppOZ5TWB9MINrg40nTGq8z%2B7eJ8F7rt%2B1WBHmXBqLAvd8xOOPgzX%2FMDJFKPdHv6Bt%2FSWGwWfximELxHXajUaHLnOigkioXcszM01gjVjaF5epCk%2F416%2B7MMSdlcEGOqUB28dr2%2ByMAa6pC6%2FuXg%2B6nMkqQkQ9Iv8BgSjKpq8uTH1zrxOACX5uDP11%2BqETGZ8hLENHVdB7SbihXI654X4oUuQ%2FBvp1kZEW7qo6leU%2Bf3c3gOARiqSAUwDG7KtRyboNNlZps75RcfYRAIZdexiC%2FfsduWvfsYBkn8nlVyv3wMDi%2FFgON3uBXLQ6BHV2nmBu0oIIqFxeBValHYXOxXH%2BuFnOZbZj&X-Amz-Signature=04fea73c1a8ee53f8aff676f806d1fef2df962f329cf6104fef28cd0f7967f89&X-Amz-SignedHeaders=host&x-id=GetObject)
