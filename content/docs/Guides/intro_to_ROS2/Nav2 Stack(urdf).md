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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7P433CY%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T140220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBX1X3ApxMU6a08%2BQcEAekvxmh8cfcF6RI5XPSdNdKKMAiEAh2klLNdEV62NRKijq%2BzQLGD7aqO7FJeRcCmA5syu5SAqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEAq3QiIpC5VcDGGPircA4tBuvJ36TD44hhNkMZ5AR0CCfwJjpgE5aUO5SZPRrnBFm%2BQpAEzdQIC6Vg7KHjDiCL6ukQdwduRDYUj9a4WDBtaFDbUfu04oiorozwdj2GxjvSXWEVf73CO8iGfHUs55r6LSYH6BRkb2clLl%2BeR3Jv5H%2BlGN7kCuKL5%2FYDOMl2jyidHurlLp2ln%2B%2BOf7MFOidk4738ukNPrUAP0sS0sWhyjr8rPr1jOHarwueMU9%2F56v1QgLFCBk2ljLuN0iAKM8iNt6%2BmbNysg9iapNsXOAMQeRg9JHNSmgmm1hONsvo50uq%2FVKj1T5TsQvS6NMXk7Q3ro00LqFmNDgEg7q5FLuBBMNXbNW4UPlqN%2B3afdUAe0rJ6MaO6dvpMnEH52jCfVcZqCeNLFjO0UBj8KnDm0NzMi8fO7FJhR5d75KA7sDXKOkBEdw5%2FA3reizkkmEtSmUy2qXmAekMZg5QcJNse2guJpHTk1ntkioKxRYS3au%2FNv%2BVg4Gz7SYKPrhOD8RpykI0AjADOxBp0r86BGroIEAXLHzApFyJ9SAnTCWhXRY%2F8%2F1rfp%2Fq8T6zhNIau4%2FVe3EIrjAixOXEc8Xea1RfVqlsVYHotsEvaL%2BHnZ%2B77Xq3TswZ6s1sL%2FfiNfXbSGMPnzkL4GOqUB2vCDuOl%2FF0ITpGDUSS8fhlEKXrJIXZv6X%2BDUM04FaAUIA6KJ%2BGGiIJRIWzMFlMgpexJ5D3IiGFsxQKkorrmLNp9AyXVZ%2BhTWI9bcSyL6LVymHYcbRBh8EFgVscDtGG6LoVILC7WF%2BN6BjXnafykAs%2FiMsW3rmCL4t1g9C9uWkBQ1yJx%2Bj2hgznUJyD2MKzJmBkedh2%2Fh8FEgCFXY8nSel9igktjF&X-Amz-Signature=afa71c6c282aae4c59c971300aaef846964502c808bb09f1cf0dd979d62d3c41&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7P433CY%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T140220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBX1X3ApxMU6a08%2BQcEAekvxmh8cfcF6RI5XPSdNdKKMAiEAh2klLNdEV62NRKijq%2BzQLGD7aqO7FJeRcCmA5syu5SAqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEAq3QiIpC5VcDGGPircA4tBuvJ36TD44hhNkMZ5AR0CCfwJjpgE5aUO5SZPRrnBFm%2BQpAEzdQIC6Vg7KHjDiCL6ukQdwduRDYUj9a4WDBtaFDbUfu04oiorozwdj2GxjvSXWEVf73CO8iGfHUs55r6LSYH6BRkb2clLl%2BeR3Jv5H%2BlGN7kCuKL5%2FYDOMl2jyidHurlLp2ln%2B%2BOf7MFOidk4738ukNPrUAP0sS0sWhyjr8rPr1jOHarwueMU9%2F56v1QgLFCBk2ljLuN0iAKM8iNt6%2BmbNysg9iapNsXOAMQeRg9JHNSmgmm1hONsvo50uq%2FVKj1T5TsQvS6NMXk7Q3ro00LqFmNDgEg7q5FLuBBMNXbNW4UPlqN%2B3afdUAe0rJ6MaO6dvpMnEH52jCfVcZqCeNLFjO0UBj8KnDm0NzMi8fO7FJhR5d75KA7sDXKOkBEdw5%2FA3reizkkmEtSmUy2qXmAekMZg5QcJNse2guJpHTk1ntkioKxRYS3au%2FNv%2BVg4Gz7SYKPrhOD8RpykI0AjADOxBp0r86BGroIEAXLHzApFyJ9SAnTCWhXRY%2F8%2F1rfp%2Fq8T6zhNIau4%2FVe3EIrjAixOXEc8Xea1RfVqlsVYHotsEvaL%2BHnZ%2B77Xq3TswZ6s1sL%2FfiNfXbSGMPnzkL4GOqUB2vCDuOl%2FF0ITpGDUSS8fhlEKXrJIXZv6X%2BDUM04FaAUIA6KJ%2BGGiIJRIWzMFlMgpexJ5D3IiGFsxQKkorrmLNp9AyXVZ%2BhTWI9bcSyL6LVymHYcbRBh8EFgVscDtGG6LoVILC7WF%2BN6BjXnafykAs%2FiMsW3rmCL4t1g9C9uWkBQ1yJx%2Bj2hgznUJyD2MKzJmBkedh2%2Fh8FEgCFXY8nSel9igktjF&X-Amz-Signature=ab394d0ffb5641de178a1e94299ae181ac1ea9aa6b0a3e3c3aa691bbec1696b3&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7P433CY%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T140220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBX1X3ApxMU6a08%2BQcEAekvxmh8cfcF6RI5XPSdNdKKMAiEAh2klLNdEV62NRKijq%2BzQLGD7aqO7FJeRcCmA5syu5SAqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEAq3QiIpC5VcDGGPircA4tBuvJ36TD44hhNkMZ5AR0CCfwJjpgE5aUO5SZPRrnBFm%2BQpAEzdQIC6Vg7KHjDiCL6ukQdwduRDYUj9a4WDBtaFDbUfu04oiorozwdj2GxjvSXWEVf73CO8iGfHUs55r6LSYH6BRkb2clLl%2BeR3Jv5H%2BlGN7kCuKL5%2FYDOMl2jyidHurlLp2ln%2B%2BOf7MFOidk4738ukNPrUAP0sS0sWhyjr8rPr1jOHarwueMU9%2F56v1QgLFCBk2ljLuN0iAKM8iNt6%2BmbNysg9iapNsXOAMQeRg9JHNSmgmm1hONsvo50uq%2FVKj1T5TsQvS6NMXk7Q3ro00LqFmNDgEg7q5FLuBBMNXbNW4UPlqN%2B3afdUAe0rJ6MaO6dvpMnEH52jCfVcZqCeNLFjO0UBj8KnDm0NzMi8fO7FJhR5d75KA7sDXKOkBEdw5%2FA3reizkkmEtSmUy2qXmAekMZg5QcJNse2guJpHTk1ntkioKxRYS3au%2FNv%2BVg4Gz7SYKPrhOD8RpykI0AjADOxBp0r86BGroIEAXLHzApFyJ9SAnTCWhXRY%2F8%2F1rfp%2Fq8T6zhNIau4%2FVe3EIrjAixOXEc8Xea1RfVqlsVYHotsEvaL%2BHnZ%2B77Xq3TswZ6s1sL%2FfiNfXbSGMPnzkL4GOqUB2vCDuOl%2FF0ITpGDUSS8fhlEKXrJIXZv6X%2BDUM04FaAUIA6KJ%2BGGiIJRIWzMFlMgpexJ5D3IiGFsxQKkorrmLNp9AyXVZ%2BhTWI9bcSyL6LVymHYcbRBh8EFgVscDtGG6LoVILC7WF%2BN6BjXnafykAs%2FiMsW3rmCL4t1g9C9uWkBQ1yJx%2Bj2hgznUJyD2MKzJmBkedh2%2Fh8FEgCFXY8nSel9igktjF&X-Amz-Signature=51b1a6470a9f399f6d0ce4a1d0ca95c8070e959ae1451a3823d5aa15c6d5164f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7P433CY%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T140220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBX1X3ApxMU6a08%2BQcEAekvxmh8cfcF6RI5XPSdNdKKMAiEAh2klLNdEV62NRKijq%2BzQLGD7aqO7FJeRcCmA5syu5SAqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEAq3QiIpC5VcDGGPircA4tBuvJ36TD44hhNkMZ5AR0CCfwJjpgE5aUO5SZPRrnBFm%2BQpAEzdQIC6Vg7KHjDiCL6ukQdwduRDYUj9a4WDBtaFDbUfu04oiorozwdj2GxjvSXWEVf73CO8iGfHUs55r6LSYH6BRkb2clLl%2BeR3Jv5H%2BlGN7kCuKL5%2FYDOMl2jyidHurlLp2ln%2B%2BOf7MFOidk4738ukNPrUAP0sS0sWhyjr8rPr1jOHarwueMU9%2F56v1QgLFCBk2ljLuN0iAKM8iNt6%2BmbNysg9iapNsXOAMQeRg9JHNSmgmm1hONsvo50uq%2FVKj1T5TsQvS6NMXk7Q3ro00LqFmNDgEg7q5FLuBBMNXbNW4UPlqN%2B3afdUAe0rJ6MaO6dvpMnEH52jCfVcZqCeNLFjO0UBj8KnDm0NzMi8fO7FJhR5d75KA7sDXKOkBEdw5%2FA3reizkkmEtSmUy2qXmAekMZg5QcJNse2guJpHTk1ntkioKxRYS3au%2FNv%2BVg4Gz7SYKPrhOD8RpykI0AjADOxBp0r86BGroIEAXLHzApFyJ9SAnTCWhXRY%2F8%2F1rfp%2Fq8T6zhNIau4%2FVe3EIrjAixOXEc8Xea1RfVqlsVYHotsEvaL%2BHnZ%2B77Xq3TswZ6s1sL%2FfiNfXbSGMPnzkL4GOqUB2vCDuOl%2FF0ITpGDUSS8fhlEKXrJIXZv6X%2BDUM04FaAUIA6KJ%2BGGiIJRIWzMFlMgpexJ5D3IiGFsxQKkorrmLNp9AyXVZ%2BhTWI9bcSyL6LVymHYcbRBh8EFgVscDtGG6LoVILC7WF%2BN6BjXnafykAs%2FiMsW3rmCL4t1g9C9uWkBQ1yJx%2Bj2hgznUJyD2MKzJmBkedh2%2Fh8FEgCFXY8nSel9igktjF&X-Amz-Signature=4fcaf25db21ea9e626cb277848019f37c9f890bbf6f0b76a38be7e613b96e68f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7P433CY%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T140220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBX1X3ApxMU6a08%2BQcEAekvxmh8cfcF6RI5XPSdNdKKMAiEAh2klLNdEV62NRKijq%2BzQLGD7aqO7FJeRcCmA5syu5SAqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEAq3QiIpC5VcDGGPircA4tBuvJ36TD44hhNkMZ5AR0CCfwJjpgE5aUO5SZPRrnBFm%2BQpAEzdQIC6Vg7KHjDiCL6ukQdwduRDYUj9a4WDBtaFDbUfu04oiorozwdj2GxjvSXWEVf73CO8iGfHUs55r6LSYH6BRkb2clLl%2BeR3Jv5H%2BlGN7kCuKL5%2FYDOMl2jyidHurlLp2ln%2B%2BOf7MFOidk4738ukNPrUAP0sS0sWhyjr8rPr1jOHarwueMU9%2F56v1QgLFCBk2ljLuN0iAKM8iNt6%2BmbNysg9iapNsXOAMQeRg9JHNSmgmm1hONsvo50uq%2FVKj1T5TsQvS6NMXk7Q3ro00LqFmNDgEg7q5FLuBBMNXbNW4UPlqN%2B3afdUAe0rJ6MaO6dvpMnEH52jCfVcZqCeNLFjO0UBj8KnDm0NzMi8fO7FJhR5d75KA7sDXKOkBEdw5%2FA3reizkkmEtSmUy2qXmAekMZg5QcJNse2guJpHTk1ntkioKxRYS3au%2FNv%2BVg4Gz7SYKPrhOD8RpykI0AjADOxBp0r86BGroIEAXLHzApFyJ9SAnTCWhXRY%2F8%2F1rfp%2Fq8T6zhNIau4%2FVe3EIrjAixOXEc8Xea1RfVqlsVYHotsEvaL%2BHnZ%2B77Xq3TswZ6s1sL%2FfiNfXbSGMPnzkL4GOqUB2vCDuOl%2FF0ITpGDUSS8fhlEKXrJIXZv6X%2BDUM04FaAUIA6KJ%2BGGiIJRIWzMFlMgpexJ5D3IiGFsxQKkorrmLNp9AyXVZ%2BhTWI9bcSyL6LVymHYcbRBh8EFgVscDtGG6LoVILC7WF%2BN6BjXnafykAs%2FiMsW3rmCL4t1g9C9uWkBQ1yJx%2Bj2hgznUJyD2MKzJmBkedh2%2Fh8FEgCFXY8nSel9igktjF&X-Amz-Signature=7dfa2e8ea506bcebba96f244d7752db81e5769323cf8180859846967f8d8a548&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7P433CY%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T140220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBX1X3ApxMU6a08%2BQcEAekvxmh8cfcF6RI5XPSdNdKKMAiEAh2klLNdEV62NRKijq%2BzQLGD7aqO7FJeRcCmA5syu5SAqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEAq3QiIpC5VcDGGPircA4tBuvJ36TD44hhNkMZ5AR0CCfwJjpgE5aUO5SZPRrnBFm%2BQpAEzdQIC6Vg7KHjDiCL6ukQdwduRDYUj9a4WDBtaFDbUfu04oiorozwdj2GxjvSXWEVf73CO8iGfHUs55r6LSYH6BRkb2clLl%2BeR3Jv5H%2BlGN7kCuKL5%2FYDOMl2jyidHurlLp2ln%2B%2BOf7MFOidk4738ukNPrUAP0sS0sWhyjr8rPr1jOHarwueMU9%2F56v1QgLFCBk2ljLuN0iAKM8iNt6%2BmbNysg9iapNsXOAMQeRg9JHNSmgmm1hONsvo50uq%2FVKj1T5TsQvS6NMXk7Q3ro00LqFmNDgEg7q5FLuBBMNXbNW4UPlqN%2B3afdUAe0rJ6MaO6dvpMnEH52jCfVcZqCeNLFjO0UBj8KnDm0NzMi8fO7FJhR5d75KA7sDXKOkBEdw5%2FA3reizkkmEtSmUy2qXmAekMZg5QcJNse2guJpHTk1ntkioKxRYS3au%2FNv%2BVg4Gz7SYKPrhOD8RpykI0AjADOxBp0r86BGroIEAXLHzApFyJ9SAnTCWhXRY%2F8%2F1rfp%2Fq8T6zhNIau4%2FVe3EIrjAixOXEc8Xea1RfVqlsVYHotsEvaL%2BHnZ%2B77Xq3TswZ6s1sL%2FfiNfXbSGMPnzkL4GOqUB2vCDuOl%2FF0ITpGDUSS8fhlEKXrJIXZv6X%2BDUM04FaAUIA6KJ%2BGGiIJRIWzMFlMgpexJ5D3IiGFsxQKkorrmLNp9AyXVZ%2BhTWI9bcSyL6LVymHYcbRBh8EFgVscDtGG6LoVILC7WF%2BN6BjXnafykAs%2FiMsW3rmCL4t1g9C9uWkBQ1yJx%2Bj2hgznUJyD2MKzJmBkedh2%2Fh8FEgCFXY8nSel9igktjF&X-Amz-Signature=2a1e7d1ec94f96334808e3ebd5a7f32889aa5d4acfe8412890ebc1665d07d7ec&X-Amz-SignedHeaders=host&x-id=GetObject)
