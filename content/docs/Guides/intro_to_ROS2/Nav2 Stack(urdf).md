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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ONTL25D%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T031425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOJog7RTv9qKYZQJ9iFk9Pt5u18FAN%2B6Aa%2FzdOyLzDqwIhAKIBQKkTNVvEJDmYGa%2FfPn%2BrAaa4SA6Lewl9QmtcocIDKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycgGgX5dwh0J1F5LYq3APeqKTU8KE7mSIIoWHcmuEfCDNpx1v01gEm2hmLHNk7PWZWFKWWBut5Vl%2BM5D6Yu4DzIXLTBf2AkoUsfpNYcnbRUhHWnTKUVeKY%2BMmmqAiVJ5VDmz%2B4adQJftgB%2FgxPctkuiGbvoPO9AlVX1q6cKhDYPwM3ReDdCZoSCXUc%2B5g8aLDs9YPoXq70Cp1SmWZP7XV2iP6g%2FXQAw8xRiPifKKnW8Ca9RMlowbbLVIARzb1Tp5OhY%2FDZh1aiW6iq61TUuEtZAJVtoileqHHq5W8cJNMIRMF6vVFFOdL3kv4whe9Pj7mq%2BXgRI%2Fq6BpvUgyQn1g%2FKR%2BD5W%2F24oIg7JwKOhRrc5zb0Buu567%2BqdiczXVMIs7%2BnVobselMqCEFviMOYad1SYGJkZ7Syw2dYKtAx2DegukT7k0EZuH4SIbUOp9iHmYEw2loqLedzg7vVZ8B9b4vgBKcr5NxxuUwTbS25ubeU82gqFwOW2dqBg%2B84y0MqTqlvmvDUsLMiuP8CRxh88usdhN%2Bq%2BvgrpuOC8dn4KVxrOxYfHSHsS1Lh3XTzFkKM1Yi2RzgcLnBf%2BO4Gm9Pu%2F1SgD7T3wRerm9gkfPuJS9XPUYs0xN0BupVV1JPl7kmWWqvhogawbg4HpthOETD1y9%2B9BjqkAQkDwG3Nrlli0CGv3NrHV7w1hgcSsJu50T4SdnzL1zRDCgHuHn2oInzstI8yoLSgKllxyh6543WTUzQaCJOUVfSou1SkQXVSG4dbAByQbBreUcKsb0mOg7cz3Jh5Ufr5Wae6qcgNiHsB8PI8QMLoH0P7U484cWVWw9kJCg2bxNoMq5SiWVz8UuDP96NE1C1Ebh2K%2FFoqJ27RHQ%2Fe201EkgoeIFkm&X-Amz-Signature=2c588d6136a5fe1d0301e4aa7d7335b6f6c5144fa4f0798107c58550f157c9c5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ONTL25D%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T031425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOJog7RTv9qKYZQJ9iFk9Pt5u18FAN%2B6Aa%2FzdOyLzDqwIhAKIBQKkTNVvEJDmYGa%2FfPn%2BrAaa4SA6Lewl9QmtcocIDKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycgGgX5dwh0J1F5LYq3APeqKTU8KE7mSIIoWHcmuEfCDNpx1v01gEm2hmLHNk7PWZWFKWWBut5Vl%2BM5D6Yu4DzIXLTBf2AkoUsfpNYcnbRUhHWnTKUVeKY%2BMmmqAiVJ5VDmz%2B4adQJftgB%2FgxPctkuiGbvoPO9AlVX1q6cKhDYPwM3ReDdCZoSCXUc%2B5g8aLDs9YPoXq70Cp1SmWZP7XV2iP6g%2FXQAw8xRiPifKKnW8Ca9RMlowbbLVIARzb1Tp5OhY%2FDZh1aiW6iq61TUuEtZAJVtoileqHHq5W8cJNMIRMF6vVFFOdL3kv4whe9Pj7mq%2BXgRI%2Fq6BpvUgyQn1g%2FKR%2BD5W%2F24oIg7JwKOhRrc5zb0Buu567%2BqdiczXVMIs7%2BnVobselMqCEFviMOYad1SYGJkZ7Syw2dYKtAx2DegukT7k0EZuH4SIbUOp9iHmYEw2loqLedzg7vVZ8B9b4vgBKcr5NxxuUwTbS25ubeU82gqFwOW2dqBg%2B84y0MqTqlvmvDUsLMiuP8CRxh88usdhN%2Bq%2BvgrpuOC8dn4KVxrOxYfHSHsS1Lh3XTzFkKM1Yi2RzgcLnBf%2BO4Gm9Pu%2F1SgD7T3wRerm9gkfPuJS9XPUYs0xN0BupVV1JPl7kmWWqvhogawbg4HpthOETD1y9%2B9BjqkAQkDwG3Nrlli0CGv3NrHV7w1hgcSsJu50T4SdnzL1zRDCgHuHn2oInzstI8yoLSgKllxyh6543WTUzQaCJOUVfSou1SkQXVSG4dbAByQbBreUcKsb0mOg7cz3Jh5Ufr5Wae6qcgNiHsB8PI8QMLoH0P7U484cWVWw9kJCg2bxNoMq5SiWVz8UuDP96NE1C1Ebh2K%2FFoqJ27RHQ%2Fe201EkgoeIFkm&X-Amz-Signature=8699404595741c828e6559b28164b05c26e1ad8803ac457e25810ff97693b176&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ONTL25D%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T031425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOJog7RTv9qKYZQJ9iFk9Pt5u18FAN%2B6Aa%2FzdOyLzDqwIhAKIBQKkTNVvEJDmYGa%2FfPn%2BrAaa4SA6Lewl9QmtcocIDKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycgGgX5dwh0J1F5LYq3APeqKTU8KE7mSIIoWHcmuEfCDNpx1v01gEm2hmLHNk7PWZWFKWWBut5Vl%2BM5D6Yu4DzIXLTBf2AkoUsfpNYcnbRUhHWnTKUVeKY%2BMmmqAiVJ5VDmz%2B4adQJftgB%2FgxPctkuiGbvoPO9AlVX1q6cKhDYPwM3ReDdCZoSCXUc%2B5g8aLDs9YPoXq70Cp1SmWZP7XV2iP6g%2FXQAw8xRiPifKKnW8Ca9RMlowbbLVIARzb1Tp5OhY%2FDZh1aiW6iq61TUuEtZAJVtoileqHHq5W8cJNMIRMF6vVFFOdL3kv4whe9Pj7mq%2BXgRI%2Fq6BpvUgyQn1g%2FKR%2BD5W%2F24oIg7JwKOhRrc5zb0Buu567%2BqdiczXVMIs7%2BnVobselMqCEFviMOYad1SYGJkZ7Syw2dYKtAx2DegukT7k0EZuH4SIbUOp9iHmYEw2loqLedzg7vVZ8B9b4vgBKcr5NxxuUwTbS25ubeU82gqFwOW2dqBg%2B84y0MqTqlvmvDUsLMiuP8CRxh88usdhN%2Bq%2BvgrpuOC8dn4KVxrOxYfHSHsS1Lh3XTzFkKM1Yi2RzgcLnBf%2BO4Gm9Pu%2F1SgD7T3wRerm9gkfPuJS9XPUYs0xN0BupVV1JPl7kmWWqvhogawbg4HpthOETD1y9%2B9BjqkAQkDwG3Nrlli0CGv3NrHV7w1hgcSsJu50T4SdnzL1zRDCgHuHn2oInzstI8yoLSgKllxyh6543WTUzQaCJOUVfSou1SkQXVSG4dbAByQbBreUcKsb0mOg7cz3Jh5Ufr5Wae6qcgNiHsB8PI8QMLoH0P7U484cWVWw9kJCg2bxNoMq5SiWVz8UuDP96NE1C1Ebh2K%2FFoqJ27RHQ%2Fe201EkgoeIFkm&X-Amz-Signature=81d1819417c87ebb2792e2348e9043d8c2e3943d867fa100796d91dcbe7fdd53&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ONTL25D%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T031425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOJog7RTv9qKYZQJ9iFk9Pt5u18FAN%2B6Aa%2FzdOyLzDqwIhAKIBQKkTNVvEJDmYGa%2FfPn%2BrAaa4SA6Lewl9QmtcocIDKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycgGgX5dwh0J1F5LYq3APeqKTU8KE7mSIIoWHcmuEfCDNpx1v01gEm2hmLHNk7PWZWFKWWBut5Vl%2BM5D6Yu4DzIXLTBf2AkoUsfpNYcnbRUhHWnTKUVeKY%2BMmmqAiVJ5VDmz%2B4adQJftgB%2FgxPctkuiGbvoPO9AlVX1q6cKhDYPwM3ReDdCZoSCXUc%2B5g8aLDs9YPoXq70Cp1SmWZP7XV2iP6g%2FXQAw8xRiPifKKnW8Ca9RMlowbbLVIARzb1Tp5OhY%2FDZh1aiW6iq61TUuEtZAJVtoileqHHq5W8cJNMIRMF6vVFFOdL3kv4whe9Pj7mq%2BXgRI%2Fq6BpvUgyQn1g%2FKR%2BD5W%2F24oIg7JwKOhRrc5zb0Buu567%2BqdiczXVMIs7%2BnVobselMqCEFviMOYad1SYGJkZ7Syw2dYKtAx2DegukT7k0EZuH4SIbUOp9iHmYEw2loqLedzg7vVZ8B9b4vgBKcr5NxxuUwTbS25ubeU82gqFwOW2dqBg%2B84y0MqTqlvmvDUsLMiuP8CRxh88usdhN%2Bq%2BvgrpuOC8dn4KVxrOxYfHSHsS1Lh3XTzFkKM1Yi2RzgcLnBf%2BO4Gm9Pu%2F1SgD7T3wRerm9gkfPuJS9XPUYs0xN0BupVV1JPl7kmWWqvhogawbg4HpthOETD1y9%2B9BjqkAQkDwG3Nrlli0CGv3NrHV7w1hgcSsJu50T4SdnzL1zRDCgHuHn2oInzstI8yoLSgKllxyh6543WTUzQaCJOUVfSou1SkQXVSG4dbAByQbBreUcKsb0mOg7cz3Jh5Ufr5Wae6qcgNiHsB8PI8QMLoH0P7U484cWVWw9kJCg2bxNoMq5SiWVz8UuDP96NE1C1Ebh2K%2FFoqJ27RHQ%2Fe201EkgoeIFkm&X-Amz-Signature=562f78f8168aa08092fd45aa7743262970dfc31e731ad3c50c09f01d4b9cf5b0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ONTL25D%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T031425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOJog7RTv9qKYZQJ9iFk9Pt5u18FAN%2B6Aa%2FzdOyLzDqwIhAKIBQKkTNVvEJDmYGa%2FfPn%2BrAaa4SA6Lewl9QmtcocIDKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycgGgX5dwh0J1F5LYq3APeqKTU8KE7mSIIoWHcmuEfCDNpx1v01gEm2hmLHNk7PWZWFKWWBut5Vl%2BM5D6Yu4DzIXLTBf2AkoUsfpNYcnbRUhHWnTKUVeKY%2BMmmqAiVJ5VDmz%2B4adQJftgB%2FgxPctkuiGbvoPO9AlVX1q6cKhDYPwM3ReDdCZoSCXUc%2B5g8aLDs9YPoXq70Cp1SmWZP7XV2iP6g%2FXQAw8xRiPifKKnW8Ca9RMlowbbLVIARzb1Tp5OhY%2FDZh1aiW6iq61TUuEtZAJVtoileqHHq5W8cJNMIRMF6vVFFOdL3kv4whe9Pj7mq%2BXgRI%2Fq6BpvUgyQn1g%2FKR%2BD5W%2F24oIg7JwKOhRrc5zb0Buu567%2BqdiczXVMIs7%2BnVobselMqCEFviMOYad1SYGJkZ7Syw2dYKtAx2DegukT7k0EZuH4SIbUOp9iHmYEw2loqLedzg7vVZ8B9b4vgBKcr5NxxuUwTbS25ubeU82gqFwOW2dqBg%2B84y0MqTqlvmvDUsLMiuP8CRxh88usdhN%2Bq%2BvgrpuOC8dn4KVxrOxYfHSHsS1Lh3XTzFkKM1Yi2RzgcLnBf%2BO4Gm9Pu%2F1SgD7T3wRerm9gkfPuJS9XPUYs0xN0BupVV1JPl7kmWWqvhogawbg4HpthOETD1y9%2B9BjqkAQkDwG3Nrlli0CGv3NrHV7w1hgcSsJu50T4SdnzL1zRDCgHuHn2oInzstI8yoLSgKllxyh6543WTUzQaCJOUVfSou1SkQXVSG4dbAByQbBreUcKsb0mOg7cz3Jh5Ufr5Wae6qcgNiHsB8PI8QMLoH0P7U484cWVWw9kJCg2bxNoMq5SiWVz8UuDP96NE1C1Ebh2K%2FFoqJ27RHQ%2Fe201EkgoeIFkm&X-Amz-Signature=ea6fb69518da08ca28acb4e611b0833c96659c26edfc826b16b43df2d44dada2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ONTL25D%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T031425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOJog7RTv9qKYZQJ9iFk9Pt5u18FAN%2B6Aa%2FzdOyLzDqwIhAKIBQKkTNVvEJDmYGa%2FfPn%2BrAaa4SA6Lewl9QmtcocIDKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycgGgX5dwh0J1F5LYq3APeqKTU8KE7mSIIoWHcmuEfCDNpx1v01gEm2hmLHNk7PWZWFKWWBut5Vl%2BM5D6Yu4DzIXLTBf2AkoUsfpNYcnbRUhHWnTKUVeKY%2BMmmqAiVJ5VDmz%2B4adQJftgB%2FgxPctkuiGbvoPO9AlVX1q6cKhDYPwM3ReDdCZoSCXUc%2B5g8aLDs9YPoXq70Cp1SmWZP7XV2iP6g%2FXQAw8xRiPifKKnW8Ca9RMlowbbLVIARzb1Tp5OhY%2FDZh1aiW6iq61TUuEtZAJVtoileqHHq5W8cJNMIRMF6vVFFOdL3kv4whe9Pj7mq%2BXgRI%2Fq6BpvUgyQn1g%2FKR%2BD5W%2F24oIg7JwKOhRrc5zb0Buu567%2BqdiczXVMIs7%2BnVobselMqCEFviMOYad1SYGJkZ7Syw2dYKtAx2DegukT7k0EZuH4SIbUOp9iHmYEw2loqLedzg7vVZ8B9b4vgBKcr5NxxuUwTbS25ubeU82gqFwOW2dqBg%2B84y0MqTqlvmvDUsLMiuP8CRxh88usdhN%2Bq%2BvgrpuOC8dn4KVxrOxYfHSHsS1Lh3XTzFkKM1Yi2RzgcLnBf%2BO4Gm9Pu%2F1SgD7T3wRerm9gkfPuJS9XPUYs0xN0BupVV1JPl7kmWWqvhogawbg4HpthOETD1y9%2B9BjqkAQkDwG3Nrlli0CGv3NrHV7w1hgcSsJu50T4SdnzL1zRDCgHuHn2oInzstI8yoLSgKllxyh6543WTUzQaCJOUVfSou1SkQXVSG4dbAByQbBreUcKsb0mOg7cz3Jh5Ufr5Wae6qcgNiHsB8PI8QMLoH0P7U484cWVWw9kJCg2bxNoMq5SiWVz8UuDP96NE1C1Ebh2K%2FFoqJ27RHQ%2Fe201EkgoeIFkm&X-Amz-Signature=40ac0d5e6c67e4db8f7d6b2b9e0b4100c3ab4139de545ebf3ada4cf4181da6b1&X-Amz-SignedHeaders=host&x-id=GetObject)
