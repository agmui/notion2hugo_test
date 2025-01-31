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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA7GXKEG%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPBqrnpP%2BWmi%2BXFfujcAhkHduTd3W1SAzivGn1sBeHVwIhAKO2lmXKeQqK8DvYSFTECSu1ijcair4BwCElsDaWkJOKKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyF%2FtWekXHfZnCr1rEq3ANXF36ILg0vXCcKG1WE5DSZ5T7kUjlBRHuzpjCc7g84dqFW86Tpz3WlHK1Crv5wba3Qa1H9e0r%2BMbyZJ9YngimnUtu237C8%2B8zL57KO0mPxdCCh5S5%2FdG7IDS5v61qKN8lpq0tt3bLrZU7MnOfRt4dzkuZRFQSaFOyGpAmCtiznkZTL%2BsQ9YX4zzdJiEop0uSFIl6%2Fee5K32Qov%2FRv%2Fs%2FaO572PGfG0hxDKr0ws%2FXvaaYiHb2S%2BlOc8LKiUk8s847n84esKGs9yizlW00bYp2jTAdtzjUdlg57y2gkORIMJrppRruJGqjgKGUpEfD8YSNuha2cc60n7rBanssSwNsJgUJg%2B7pDW5VeKzod0wgzShW4jcNG9xZtEEPVObzfJGDTALHtSAaF5DR4VSHo9pQxVR%2BobCguHJTPrD%2FDnQAD3AnlEu%2FYqC9eO733PWvyTxgvR5SJfkngppr1hpVfTtFBJMTCsbHn%2BO5WiDG%2BeKX2UkvhvkLOaukVSLjUPM4rIyD%2FaDw0lvvm2PJu0Jm3XvAz1io4dj5VTFTMIWJjuPW%2ByGjsMmKNIzyi%2B9JjDCIUBi0QdznfSKQXmV1w%2Futf%2BxgQWoMgeaTyBuk7J2pNEeSzuT40ElQbSTXa5KOF0%2FzCqpfS8BjqkAXcUPZqjtFSKqFzntLGavYi4fPZVhCYFXIuv%2FaYe6N1kmrAHCBxFvNzoWaJtLJ5frX13311lCkeHyEjs3NgFHXtew2%2FsYqziz8Xa9XY6qYR45vhLVXJ%2FV6hDVTi8MiebJj0pmSQ5CGNKDfhE8JYk7wB4%2FU9Xcuta30YlfHPytSL%2FMU5%2FCYszGbHWmrWJ875Ezr0viYsCmMg%2BMRYKmVcEkMAWiJ6O&X-Amz-Signature=6d28eaf9790575bcd384646789dd0332e3e154655e75deb8570097a5df37d274&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA7GXKEG%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPBqrnpP%2BWmi%2BXFfujcAhkHduTd3W1SAzivGn1sBeHVwIhAKO2lmXKeQqK8DvYSFTECSu1ijcair4BwCElsDaWkJOKKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyF%2FtWekXHfZnCr1rEq3ANXF36ILg0vXCcKG1WE5DSZ5T7kUjlBRHuzpjCc7g84dqFW86Tpz3WlHK1Crv5wba3Qa1H9e0r%2BMbyZJ9YngimnUtu237C8%2B8zL57KO0mPxdCCh5S5%2FdG7IDS5v61qKN8lpq0tt3bLrZU7MnOfRt4dzkuZRFQSaFOyGpAmCtiznkZTL%2BsQ9YX4zzdJiEop0uSFIl6%2Fee5K32Qov%2FRv%2Fs%2FaO572PGfG0hxDKr0ws%2FXvaaYiHb2S%2BlOc8LKiUk8s847n84esKGs9yizlW00bYp2jTAdtzjUdlg57y2gkORIMJrppRruJGqjgKGUpEfD8YSNuha2cc60n7rBanssSwNsJgUJg%2B7pDW5VeKzod0wgzShW4jcNG9xZtEEPVObzfJGDTALHtSAaF5DR4VSHo9pQxVR%2BobCguHJTPrD%2FDnQAD3AnlEu%2FYqC9eO733PWvyTxgvR5SJfkngppr1hpVfTtFBJMTCsbHn%2BO5WiDG%2BeKX2UkvhvkLOaukVSLjUPM4rIyD%2FaDw0lvvm2PJu0Jm3XvAz1io4dj5VTFTMIWJjuPW%2ByGjsMmKNIzyi%2B9JjDCIUBi0QdznfSKQXmV1w%2Futf%2BxgQWoMgeaTyBuk7J2pNEeSzuT40ElQbSTXa5KOF0%2FzCqpfS8BjqkAXcUPZqjtFSKqFzntLGavYi4fPZVhCYFXIuv%2FaYe6N1kmrAHCBxFvNzoWaJtLJ5frX13311lCkeHyEjs3NgFHXtew2%2FsYqziz8Xa9XY6qYR45vhLVXJ%2FV6hDVTi8MiebJj0pmSQ5CGNKDfhE8JYk7wB4%2FU9Xcuta30YlfHPytSL%2FMU5%2FCYszGbHWmrWJ875Ezr0viYsCmMg%2BMRYKmVcEkMAWiJ6O&X-Amz-Signature=ca0711794614d6dfa2103b618acee0956282d49340d265a437de42c65b05bb9a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA7GXKEG%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPBqrnpP%2BWmi%2BXFfujcAhkHduTd3W1SAzivGn1sBeHVwIhAKO2lmXKeQqK8DvYSFTECSu1ijcair4BwCElsDaWkJOKKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyF%2FtWekXHfZnCr1rEq3ANXF36ILg0vXCcKG1WE5DSZ5T7kUjlBRHuzpjCc7g84dqFW86Tpz3WlHK1Crv5wba3Qa1H9e0r%2BMbyZJ9YngimnUtu237C8%2B8zL57KO0mPxdCCh5S5%2FdG7IDS5v61qKN8lpq0tt3bLrZU7MnOfRt4dzkuZRFQSaFOyGpAmCtiznkZTL%2BsQ9YX4zzdJiEop0uSFIl6%2Fee5K32Qov%2FRv%2Fs%2FaO572PGfG0hxDKr0ws%2FXvaaYiHb2S%2BlOc8LKiUk8s847n84esKGs9yizlW00bYp2jTAdtzjUdlg57y2gkORIMJrppRruJGqjgKGUpEfD8YSNuha2cc60n7rBanssSwNsJgUJg%2B7pDW5VeKzod0wgzShW4jcNG9xZtEEPVObzfJGDTALHtSAaF5DR4VSHo9pQxVR%2BobCguHJTPrD%2FDnQAD3AnlEu%2FYqC9eO733PWvyTxgvR5SJfkngppr1hpVfTtFBJMTCsbHn%2BO5WiDG%2BeKX2UkvhvkLOaukVSLjUPM4rIyD%2FaDw0lvvm2PJu0Jm3XvAz1io4dj5VTFTMIWJjuPW%2ByGjsMmKNIzyi%2B9JjDCIUBi0QdznfSKQXmV1w%2Futf%2BxgQWoMgeaTyBuk7J2pNEeSzuT40ElQbSTXa5KOF0%2FzCqpfS8BjqkAXcUPZqjtFSKqFzntLGavYi4fPZVhCYFXIuv%2FaYe6N1kmrAHCBxFvNzoWaJtLJ5frX13311lCkeHyEjs3NgFHXtew2%2FsYqziz8Xa9XY6qYR45vhLVXJ%2FV6hDVTi8MiebJj0pmSQ5CGNKDfhE8JYk7wB4%2FU9Xcuta30YlfHPytSL%2FMU5%2FCYszGbHWmrWJ875Ezr0viYsCmMg%2BMRYKmVcEkMAWiJ6O&X-Amz-Signature=dc641145ad22f4a794e7e1e65cbb79c9914efdedd5ad21cbc8c508700f220129&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA7GXKEG%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPBqrnpP%2BWmi%2BXFfujcAhkHduTd3W1SAzivGn1sBeHVwIhAKO2lmXKeQqK8DvYSFTECSu1ijcair4BwCElsDaWkJOKKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyF%2FtWekXHfZnCr1rEq3ANXF36ILg0vXCcKG1WE5DSZ5T7kUjlBRHuzpjCc7g84dqFW86Tpz3WlHK1Crv5wba3Qa1H9e0r%2BMbyZJ9YngimnUtu237C8%2B8zL57KO0mPxdCCh5S5%2FdG7IDS5v61qKN8lpq0tt3bLrZU7MnOfRt4dzkuZRFQSaFOyGpAmCtiznkZTL%2BsQ9YX4zzdJiEop0uSFIl6%2Fee5K32Qov%2FRv%2Fs%2FaO572PGfG0hxDKr0ws%2FXvaaYiHb2S%2BlOc8LKiUk8s847n84esKGs9yizlW00bYp2jTAdtzjUdlg57y2gkORIMJrppRruJGqjgKGUpEfD8YSNuha2cc60n7rBanssSwNsJgUJg%2B7pDW5VeKzod0wgzShW4jcNG9xZtEEPVObzfJGDTALHtSAaF5DR4VSHo9pQxVR%2BobCguHJTPrD%2FDnQAD3AnlEu%2FYqC9eO733PWvyTxgvR5SJfkngppr1hpVfTtFBJMTCsbHn%2BO5WiDG%2BeKX2UkvhvkLOaukVSLjUPM4rIyD%2FaDw0lvvm2PJu0Jm3XvAz1io4dj5VTFTMIWJjuPW%2ByGjsMmKNIzyi%2B9JjDCIUBi0QdznfSKQXmV1w%2Futf%2BxgQWoMgeaTyBuk7J2pNEeSzuT40ElQbSTXa5KOF0%2FzCqpfS8BjqkAXcUPZqjtFSKqFzntLGavYi4fPZVhCYFXIuv%2FaYe6N1kmrAHCBxFvNzoWaJtLJ5frX13311lCkeHyEjs3NgFHXtew2%2FsYqziz8Xa9XY6qYR45vhLVXJ%2FV6hDVTi8MiebJj0pmSQ5CGNKDfhE8JYk7wB4%2FU9Xcuta30YlfHPytSL%2FMU5%2FCYszGbHWmrWJ875Ezr0viYsCmMg%2BMRYKmVcEkMAWiJ6O&X-Amz-Signature=340e33681a3c175ae803e03ef387fbdbf2886a0386e8119dac8cca3548d94e68&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA7GXKEG%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPBqrnpP%2BWmi%2BXFfujcAhkHduTd3W1SAzivGn1sBeHVwIhAKO2lmXKeQqK8DvYSFTECSu1ijcair4BwCElsDaWkJOKKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyF%2FtWekXHfZnCr1rEq3ANXF36ILg0vXCcKG1WE5DSZ5T7kUjlBRHuzpjCc7g84dqFW86Tpz3WlHK1Crv5wba3Qa1H9e0r%2BMbyZJ9YngimnUtu237C8%2B8zL57KO0mPxdCCh5S5%2FdG7IDS5v61qKN8lpq0tt3bLrZU7MnOfRt4dzkuZRFQSaFOyGpAmCtiznkZTL%2BsQ9YX4zzdJiEop0uSFIl6%2Fee5K32Qov%2FRv%2Fs%2FaO572PGfG0hxDKr0ws%2FXvaaYiHb2S%2BlOc8LKiUk8s847n84esKGs9yizlW00bYp2jTAdtzjUdlg57y2gkORIMJrppRruJGqjgKGUpEfD8YSNuha2cc60n7rBanssSwNsJgUJg%2B7pDW5VeKzod0wgzShW4jcNG9xZtEEPVObzfJGDTALHtSAaF5DR4VSHo9pQxVR%2BobCguHJTPrD%2FDnQAD3AnlEu%2FYqC9eO733PWvyTxgvR5SJfkngppr1hpVfTtFBJMTCsbHn%2BO5WiDG%2BeKX2UkvhvkLOaukVSLjUPM4rIyD%2FaDw0lvvm2PJu0Jm3XvAz1io4dj5VTFTMIWJjuPW%2ByGjsMmKNIzyi%2B9JjDCIUBi0QdznfSKQXmV1w%2Futf%2BxgQWoMgeaTyBuk7J2pNEeSzuT40ElQbSTXa5KOF0%2FzCqpfS8BjqkAXcUPZqjtFSKqFzntLGavYi4fPZVhCYFXIuv%2FaYe6N1kmrAHCBxFvNzoWaJtLJ5frX13311lCkeHyEjs3NgFHXtew2%2FsYqziz8Xa9XY6qYR45vhLVXJ%2FV6hDVTi8MiebJj0pmSQ5CGNKDfhE8JYk7wB4%2FU9Xcuta30YlfHPytSL%2FMU5%2FCYszGbHWmrWJ875Ezr0viYsCmMg%2BMRYKmVcEkMAWiJ6O&X-Amz-Signature=f360454a33e6638296cf446547feec4bc569fb9ac063ac0bc701ed136e8ed62e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA7GXKEG%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T190121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPBqrnpP%2BWmi%2BXFfujcAhkHduTd3W1SAzivGn1sBeHVwIhAKO2lmXKeQqK8DvYSFTECSu1ijcair4BwCElsDaWkJOKKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyF%2FtWekXHfZnCr1rEq3ANXF36ILg0vXCcKG1WE5DSZ5T7kUjlBRHuzpjCc7g84dqFW86Tpz3WlHK1Crv5wba3Qa1H9e0r%2BMbyZJ9YngimnUtu237C8%2B8zL57KO0mPxdCCh5S5%2FdG7IDS5v61qKN8lpq0tt3bLrZU7MnOfRt4dzkuZRFQSaFOyGpAmCtiznkZTL%2BsQ9YX4zzdJiEop0uSFIl6%2Fee5K32Qov%2FRv%2Fs%2FaO572PGfG0hxDKr0ws%2FXvaaYiHb2S%2BlOc8LKiUk8s847n84esKGs9yizlW00bYp2jTAdtzjUdlg57y2gkORIMJrppRruJGqjgKGUpEfD8YSNuha2cc60n7rBanssSwNsJgUJg%2B7pDW5VeKzod0wgzShW4jcNG9xZtEEPVObzfJGDTALHtSAaF5DR4VSHo9pQxVR%2BobCguHJTPrD%2FDnQAD3AnlEu%2FYqC9eO733PWvyTxgvR5SJfkngppr1hpVfTtFBJMTCsbHn%2BO5WiDG%2BeKX2UkvhvkLOaukVSLjUPM4rIyD%2FaDw0lvvm2PJu0Jm3XvAz1io4dj5VTFTMIWJjuPW%2ByGjsMmKNIzyi%2B9JjDCIUBi0QdznfSKQXmV1w%2Futf%2BxgQWoMgeaTyBuk7J2pNEeSzuT40ElQbSTXa5KOF0%2FzCqpfS8BjqkAXcUPZqjtFSKqFzntLGavYi4fPZVhCYFXIuv%2FaYe6N1kmrAHCBxFvNzoWaJtLJ5frX13311lCkeHyEjs3NgFHXtew2%2FsYqziz8Xa9XY6qYR45vhLVXJ%2FV6hDVTi8MiebJj0pmSQ5CGNKDfhE8JYk7wB4%2FU9Xcuta30YlfHPytSL%2FMU5%2FCYszGbHWmrWJ875Ezr0viYsCmMg%2BMRYKmVcEkMAWiJ6O&X-Amz-Signature=2d68d5e4507bbded1a6a2269faa457a4d0575242fadee68fdcef4476114faf70&X-Amz-SignedHeaders=host&x-id=GetObject)
