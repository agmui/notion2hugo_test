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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYLNOD4E%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIEbaPbYkcquEXLHHZCGsb0nmBxDotJpZy%2FdoyvbRLBdyAiEA12zo2HM82AFetCMTqwnLHPJTua9ZdDomAkfh%2BIbdT34qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhL%2FFaTbasDWa2UlircA749UM0Lnb6iiFjgHCJSryPTitMlkWopSrP5yd1j3PP99N66Acf5WQ0I5f%2F00acMm%2FQVe0S4G7UqxHfMqf9Is%2BlmSvbtyZMWyfeRyTot0jWgrL6RY51j4Jn2GvwkLeaw%2B3YOnLpnTEjrT1eI0AToXkTwQXU%2FZ%2Bw2cYHoUtVDzbeFPXK1DB1Kpwvp9PB0esavhE0BPHk%2B7KaVnLuPQjgrLigBDfdqPH1c2OF6GCmJkAD%2BGkG1TUWhrUSy1YcElKIHvVPiMLLZ0WTii5esKETSDRbTQeBnDcE24BMFYTVfAJTRN4BIdIbcKPpaQJp11g0LWy1hDhIFmmO%2BgRw2k%2Ff9Qyizzh9AbpJTxe8%2BAlZBLuQTwMFLHVrC9mnd3TAm5ihG%2Bv3ElbqzRFjPTNCyU%2FPxhMN2u1a53h9iFV%2FBTjFKlDNZVINlfeNgYavMqfaEcBXMhOAPxtT%2BVXC05ww8vjyN4LDoBZlk9sI1EMZW6ACAjeLcW6y5kap2uqo7P2ZnqIXTbfIp9lcCmS53uCBckSQOZeAppdnBk1rKMUVGreHbOx614J8uzGIIf18RkD6RGc2hWs2tVaIAJDE5X1rp%2FTaSIJ655utaIKUN9YmT7MlWqHLHhCcU7uIeTpfVycmcMNyn88EGOqUBrPO03e57icrCht5FCKyiSIMfTB5hjUDU7JAbatFGGqqko3QQkbqV6IF%2BaZ2fsEy4DMplNGONjZqdqeBOH8U3HdMXEzyySld8TOKsgXQ%2FgvNyepkCBzhwy4%2BomhDK%2FTb9VFOdLLdKoj0N4Ng7s6WnwRU6dWUe2RARnLMYo9ZrvoeRG9H7oyI0uK5oAVDHMXh6H1p9rKOi32d6XTeqPj9KK2IrUNdY&X-Amz-Signature=292a98f0418e44aad2aaea08002c8412282aec5d0f83f24ede9f81d549b7b16b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYLNOD4E%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIEbaPbYkcquEXLHHZCGsb0nmBxDotJpZy%2FdoyvbRLBdyAiEA12zo2HM82AFetCMTqwnLHPJTua9ZdDomAkfh%2BIbdT34qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhL%2FFaTbasDWa2UlircA749UM0Lnb6iiFjgHCJSryPTitMlkWopSrP5yd1j3PP99N66Acf5WQ0I5f%2F00acMm%2FQVe0S4G7UqxHfMqf9Is%2BlmSvbtyZMWyfeRyTot0jWgrL6RY51j4Jn2GvwkLeaw%2B3YOnLpnTEjrT1eI0AToXkTwQXU%2FZ%2Bw2cYHoUtVDzbeFPXK1DB1Kpwvp9PB0esavhE0BPHk%2B7KaVnLuPQjgrLigBDfdqPH1c2OF6GCmJkAD%2BGkG1TUWhrUSy1YcElKIHvVPiMLLZ0WTii5esKETSDRbTQeBnDcE24BMFYTVfAJTRN4BIdIbcKPpaQJp11g0LWy1hDhIFmmO%2BgRw2k%2Ff9Qyizzh9AbpJTxe8%2BAlZBLuQTwMFLHVrC9mnd3TAm5ihG%2Bv3ElbqzRFjPTNCyU%2FPxhMN2u1a53h9iFV%2FBTjFKlDNZVINlfeNgYavMqfaEcBXMhOAPxtT%2BVXC05ww8vjyN4LDoBZlk9sI1EMZW6ACAjeLcW6y5kap2uqo7P2ZnqIXTbfIp9lcCmS53uCBckSQOZeAppdnBk1rKMUVGreHbOx614J8uzGIIf18RkD6RGc2hWs2tVaIAJDE5X1rp%2FTaSIJ655utaIKUN9YmT7MlWqHLHhCcU7uIeTpfVycmcMNyn88EGOqUBrPO03e57icrCht5FCKyiSIMfTB5hjUDU7JAbatFGGqqko3QQkbqV6IF%2BaZ2fsEy4DMplNGONjZqdqeBOH8U3HdMXEzyySld8TOKsgXQ%2FgvNyepkCBzhwy4%2BomhDK%2FTb9VFOdLLdKoj0N4Ng7s6WnwRU6dWUe2RARnLMYo9ZrvoeRG9H7oyI0uK5oAVDHMXh6H1p9rKOi32d6XTeqPj9KK2IrUNdY&X-Amz-Signature=f09b503716e39c3bfa0c209bdfc145ac8d19f23bdcd70196603d29126a5cfd7c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYLNOD4E%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIEbaPbYkcquEXLHHZCGsb0nmBxDotJpZy%2FdoyvbRLBdyAiEA12zo2HM82AFetCMTqwnLHPJTua9ZdDomAkfh%2BIbdT34qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhL%2FFaTbasDWa2UlircA749UM0Lnb6iiFjgHCJSryPTitMlkWopSrP5yd1j3PP99N66Acf5WQ0I5f%2F00acMm%2FQVe0S4G7UqxHfMqf9Is%2BlmSvbtyZMWyfeRyTot0jWgrL6RY51j4Jn2GvwkLeaw%2B3YOnLpnTEjrT1eI0AToXkTwQXU%2FZ%2Bw2cYHoUtVDzbeFPXK1DB1Kpwvp9PB0esavhE0BPHk%2B7KaVnLuPQjgrLigBDfdqPH1c2OF6GCmJkAD%2BGkG1TUWhrUSy1YcElKIHvVPiMLLZ0WTii5esKETSDRbTQeBnDcE24BMFYTVfAJTRN4BIdIbcKPpaQJp11g0LWy1hDhIFmmO%2BgRw2k%2Ff9Qyizzh9AbpJTxe8%2BAlZBLuQTwMFLHVrC9mnd3TAm5ihG%2Bv3ElbqzRFjPTNCyU%2FPxhMN2u1a53h9iFV%2FBTjFKlDNZVINlfeNgYavMqfaEcBXMhOAPxtT%2BVXC05ww8vjyN4LDoBZlk9sI1EMZW6ACAjeLcW6y5kap2uqo7P2ZnqIXTbfIp9lcCmS53uCBckSQOZeAppdnBk1rKMUVGreHbOx614J8uzGIIf18RkD6RGc2hWs2tVaIAJDE5X1rp%2FTaSIJ655utaIKUN9YmT7MlWqHLHhCcU7uIeTpfVycmcMNyn88EGOqUBrPO03e57icrCht5FCKyiSIMfTB5hjUDU7JAbatFGGqqko3QQkbqV6IF%2BaZ2fsEy4DMplNGONjZqdqeBOH8U3HdMXEzyySld8TOKsgXQ%2FgvNyepkCBzhwy4%2BomhDK%2FTb9VFOdLLdKoj0N4Ng7s6WnwRU6dWUe2RARnLMYo9ZrvoeRG9H7oyI0uK5oAVDHMXh6H1p9rKOi32d6XTeqPj9KK2IrUNdY&X-Amz-Signature=77e8e96ec399be49d0fe7e1482cb4742c90bcbc59e4a8fe8736efe78a9c88131&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYLNOD4E%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIEbaPbYkcquEXLHHZCGsb0nmBxDotJpZy%2FdoyvbRLBdyAiEA12zo2HM82AFetCMTqwnLHPJTua9ZdDomAkfh%2BIbdT34qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhL%2FFaTbasDWa2UlircA749UM0Lnb6iiFjgHCJSryPTitMlkWopSrP5yd1j3PP99N66Acf5WQ0I5f%2F00acMm%2FQVe0S4G7UqxHfMqf9Is%2BlmSvbtyZMWyfeRyTot0jWgrL6RY51j4Jn2GvwkLeaw%2B3YOnLpnTEjrT1eI0AToXkTwQXU%2FZ%2Bw2cYHoUtVDzbeFPXK1DB1Kpwvp9PB0esavhE0BPHk%2B7KaVnLuPQjgrLigBDfdqPH1c2OF6GCmJkAD%2BGkG1TUWhrUSy1YcElKIHvVPiMLLZ0WTii5esKETSDRbTQeBnDcE24BMFYTVfAJTRN4BIdIbcKPpaQJp11g0LWy1hDhIFmmO%2BgRw2k%2Ff9Qyizzh9AbpJTxe8%2BAlZBLuQTwMFLHVrC9mnd3TAm5ihG%2Bv3ElbqzRFjPTNCyU%2FPxhMN2u1a53h9iFV%2FBTjFKlDNZVINlfeNgYavMqfaEcBXMhOAPxtT%2BVXC05ww8vjyN4LDoBZlk9sI1EMZW6ACAjeLcW6y5kap2uqo7P2ZnqIXTbfIp9lcCmS53uCBckSQOZeAppdnBk1rKMUVGreHbOx614J8uzGIIf18RkD6RGc2hWs2tVaIAJDE5X1rp%2FTaSIJ655utaIKUN9YmT7MlWqHLHhCcU7uIeTpfVycmcMNyn88EGOqUBrPO03e57icrCht5FCKyiSIMfTB5hjUDU7JAbatFGGqqko3QQkbqV6IF%2BaZ2fsEy4DMplNGONjZqdqeBOH8U3HdMXEzyySld8TOKsgXQ%2FgvNyepkCBzhwy4%2BomhDK%2FTb9VFOdLLdKoj0N4Ng7s6WnwRU6dWUe2RARnLMYo9ZrvoeRG9H7oyI0uK5oAVDHMXh6H1p9rKOi32d6XTeqPj9KK2IrUNdY&X-Amz-Signature=25ec30440ea94fedd2eedb9359d2b9f5fe2b92dd82798b7d3a8ff766a8d875ac&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYLNOD4E%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIEbaPbYkcquEXLHHZCGsb0nmBxDotJpZy%2FdoyvbRLBdyAiEA12zo2HM82AFetCMTqwnLHPJTua9ZdDomAkfh%2BIbdT34qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhL%2FFaTbasDWa2UlircA749UM0Lnb6iiFjgHCJSryPTitMlkWopSrP5yd1j3PP99N66Acf5WQ0I5f%2F00acMm%2FQVe0S4G7UqxHfMqf9Is%2BlmSvbtyZMWyfeRyTot0jWgrL6RY51j4Jn2GvwkLeaw%2B3YOnLpnTEjrT1eI0AToXkTwQXU%2FZ%2Bw2cYHoUtVDzbeFPXK1DB1Kpwvp9PB0esavhE0BPHk%2B7KaVnLuPQjgrLigBDfdqPH1c2OF6GCmJkAD%2BGkG1TUWhrUSy1YcElKIHvVPiMLLZ0WTii5esKETSDRbTQeBnDcE24BMFYTVfAJTRN4BIdIbcKPpaQJp11g0LWy1hDhIFmmO%2BgRw2k%2Ff9Qyizzh9AbpJTxe8%2BAlZBLuQTwMFLHVrC9mnd3TAm5ihG%2Bv3ElbqzRFjPTNCyU%2FPxhMN2u1a53h9iFV%2FBTjFKlDNZVINlfeNgYavMqfaEcBXMhOAPxtT%2BVXC05ww8vjyN4LDoBZlk9sI1EMZW6ACAjeLcW6y5kap2uqo7P2ZnqIXTbfIp9lcCmS53uCBckSQOZeAppdnBk1rKMUVGreHbOx614J8uzGIIf18RkD6RGc2hWs2tVaIAJDE5X1rp%2FTaSIJ655utaIKUN9YmT7MlWqHLHhCcU7uIeTpfVycmcMNyn88EGOqUBrPO03e57icrCht5FCKyiSIMfTB5hjUDU7JAbatFGGqqko3QQkbqV6IF%2BaZ2fsEy4DMplNGONjZqdqeBOH8U3HdMXEzyySld8TOKsgXQ%2FgvNyepkCBzhwy4%2BomhDK%2FTb9VFOdLLdKoj0N4Ng7s6WnwRU6dWUe2RARnLMYo9ZrvoeRG9H7oyI0uK5oAVDHMXh6H1p9rKOi32d6XTeqPj9KK2IrUNdY&X-Amz-Signature=18907ac4ae3ab0db3bbab0fd410164befaa5b26e39fad4e1f5b238b05e7f899c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYLNOD4E%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIEbaPbYkcquEXLHHZCGsb0nmBxDotJpZy%2FdoyvbRLBdyAiEA12zo2HM82AFetCMTqwnLHPJTua9ZdDomAkfh%2BIbdT34qiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhL%2FFaTbasDWa2UlircA749UM0Lnb6iiFjgHCJSryPTitMlkWopSrP5yd1j3PP99N66Acf5WQ0I5f%2F00acMm%2FQVe0S4G7UqxHfMqf9Is%2BlmSvbtyZMWyfeRyTot0jWgrL6RY51j4Jn2GvwkLeaw%2B3YOnLpnTEjrT1eI0AToXkTwQXU%2FZ%2Bw2cYHoUtVDzbeFPXK1DB1Kpwvp9PB0esavhE0BPHk%2B7KaVnLuPQjgrLigBDfdqPH1c2OF6GCmJkAD%2BGkG1TUWhrUSy1YcElKIHvVPiMLLZ0WTii5esKETSDRbTQeBnDcE24BMFYTVfAJTRN4BIdIbcKPpaQJp11g0LWy1hDhIFmmO%2BgRw2k%2Ff9Qyizzh9AbpJTxe8%2BAlZBLuQTwMFLHVrC9mnd3TAm5ihG%2Bv3ElbqzRFjPTNCyU%2FPxhMN2u1a53h9iFV%2FBTjFKlDNZVINlfeNgYavMqfaEcBXMhOAPxtT%2BVXC05ww8vjyN4LDoBZlk9sI1EMZW6ACAjeLcW6y5kap2uqo7P2ZnqIXTbfIp9lcCmS53uCBckSQOZeAppdnBk1rKMUVGreHbOx614J8uzGIIf18RkD6RGc2hWs2tVaIAJDE5X1rp%2FTaSIJ655utaIKUN9YmT7MlWqHLHhCcU7uIeTpfVycmcMNyn88EGOqUBrPO03e57icrCht5FCKyiSIMfTB5hjUDU7JAbatFGGqqko3QQkbqV6IF%2BaZ2fsEy4DMplNGONjZqdqeBOH8U3HdMXEzyySld8TOKsgXQ%2FgvNyepkCBzhwy4%2BomhDK%2FTb9VFOdLLdKoj0N4Ng7s6WnwRU6dWUe2RARnLMYo9ZrvoeRG9H7oyI0uK5oAVDHMXh6H1p9rKOi32d6XTeqPj9KK2IrUNdY&X-Amz-Signature=00eea6035ec893d99ac05fd9c08cc13cf260b8acd170aab75f41146aaf90fede&X-Amz-SignedHeaders=host&x-id=GetObject)
