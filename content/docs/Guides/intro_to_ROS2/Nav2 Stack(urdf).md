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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ4GLBQO%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfKweRb8HPv8oiLfLPt33huNtfRctHaYc86cUcPdhM3gIgF41SvEBQD8C0pwnqcPyH3JNmFfj2T5Z%2Ff7bG9aa2mxMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDL89S0qaPhPdpVVg3SrcA2ZX4dDVIhgI2dhMyLp%2Fpx%2FsptNGKVrhZcHC9jcEao2a4XfJkaAxELK3mEr10K3MAZtTWFepmwhInvZE8VLrcsGtaGZpVtWaJa1KxCDBALFLzkPFjXfcFAcIIKeo7dNWBWSlJgVZj6MjYWQE1%2BgzFjR2kGpTJ3Tf4f9y5k35FGbrGzuhzf54KRAzzOY%2BVh%2FjxwuLfqi4pDkSsixf%2FWViow7B64Kq2onXZW6AQJCDyNcIv8CfIlvuzdtSosCnUKdq9DWOMUtrIoTBSTPDPigjS6kzZGV6iGBcxHrc90LfKhbdoposyVAOWeEEBsRPuZoj6eLhaQB6zqGxUnK11RilPtzaX1f7PTUBhpReo0LqJ%2FmC8xR5MK6bdhtVg3ZY3xKPIjKUnBDSseCHznpDOMunrG3OiH6B1upPSb2jt9RUlTkEEsr1N3sXvN72lZE5m6piZSTRgPsqVopIQECCfrijIZ%2FGZ875JvXaTt4uc7ckV6I0mZ%2BIpgGdq%2Bu3Pne8hFF%2FxheahvuBHCB3Fkwcfk3LF4bDxrrS3dSUbSwr6K4DAGswvy8kdgOwBJOej%2Flek7mzRp9Bu3E3oziws36lhsAgzYp5HHh85uLnd4DFpVUp0LmytWp8pnTFP0B3RVFYMNObrcAGOqUBXQtiUei55ejOxC4aMhfPPsB6LcTzx8xtWrAQAXjGZk5LJyHxa0WDW3mVAjrBQb5VIJetS1HtosBHRIME8Lm4BrLGyq2%2BX8HoUmF4NCmlvFgU%2FXlZeLbBak5%2BJ5NbZ4zYr7c4A5vEeEYpMRDilGM6uOFuxff8%2BCG9I42hSFVFCTVGcCRLUtBh3zuNUxqouvixPTZTGPvMf9hY4hPxQGH0xKmUhc3P&X-Amz-Signature=a6d69719443db01a3e67c388749086e0251d0dde5e672c8e7fd075c052f17e0b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ4GLBQO%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfKweRb8HPv8oiLfLPt33huNtfRctHaYc86cUcPdhM3gIgF41SvEBQD8C0pwnqcPyH3JNmFfj2T5Z%2Ff7bG9aa2mxMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDL89S0qaPhPdpVVg3SrcA2ZX4dDVIhgI2dhMyLp%2Fpx%2FsptNGKVrhZcHC9jcEao2a4XfJkaAxELK3mEr10K3MAZtTWFepmwhInvZE8VLrcsGtaGZpVtWaJa1KxCDBALFLzkPFjXfcFAcIIKeo7dNWBWSlJgVZj6MjYWQE1%2BgzFjR2kGpTJ3Tf4f9y5k35FGbrGzuhzf54KRAzzOY%2BVh%2FjxwuLfqi4pDkSsixf%2FWViow7B64Kq2onXZW6AQJCDyNcIv8CfIlvuzdtSosCnUKdq9DWOMUtrIoTBSTPDPigjS6kzZGV6iGBcxHrc90LfKhbdoposyVAOWeEEBsRPuZoj6eLhaQB6zqGxUnK11RilPtzaX1f7PTUBhpReo0LqJ%2FmC8xR5MK6bdhtVg3ZY3xKPIjKUnBDSseCHznpDOMunrG3OiH6B1upPSb2jt9RUlTkEEsr1N3sXvN72lZE5m6piZSTRgPsqVopIQECCfrijIZ%2FGZ875JvXaTt4uc7ckV6I0mZ%2BIpgGdq%2Bu3Pne8hFF%2FxheahvuBHCB3Fkwcfk3LF4bDxrrS3dSUbSwr6K4DAGswvy8kdgOwBJOej%2Flek7mzRp9Bu3E3oziws36lhsAgzYp5HHh85uLnd4DFpVUp0LmytWp8pnTFP0B3RVFYMNObrcAGOqUBXQtiUei55ejOxC4aMhfPPsB6LcTzx8xtWrAQAXjGZk5LJyHxa0WDW3mVAjrBQb5VIJetS1HtosBHRIME8Lm4BrLGyq2%2BX8HoUmF4NCmlvFgU%2FXlZeLbBak5%2BJ5NbZ4zYr7c4A5vEeEYpMRDilGM6uOFuxff8%2BCG9I42hSFVFCTVGcCRLUtBh3zuNUxqouvixPTZTGPvMf9hY4hPxQGH0xKmUhc3P&X-Amz-Signature=64a7c4f5f329e0af2dcfae81bdd963ca0e82e89ab2de74e33188c72f62e66433&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ4GLBQO%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfKweRb8HPv8oiLfLPt33huNtfRctHaYc86cUcPdhM3gIgF41SvEBQD8C0pwnqcPyH3JNmFfj2T5Z%2Ff7bG9aa2mxMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDL89S0qaPhPdpVVg3SrcA2ZX4dDVIhgI2dhMyLp%2Fpx%2FsptNGKVrhZcHC9jcEao2a4XfJkaAxELK3mEr10K3MAZtTWFepmwhInvZE8VLrcsGtaGZpVtWaJa1KxCDBALFLzkPFjXfcFAcIIKeo7dNWBWSlJgVZj6MjYWQE1%2BgzFjR2kGpTJ3Tf4f9y5k35FGbrGzuhzf54KRAzzOY%2BVh%2FjxwuLfqi4pDkSsixf%2FWViow7B64Kq2onXZW6AQJCDyNcIv8CfIlvuzdtSosCnUKdq9DWOMUtrIoTBSTPDPigjS6kzZGV6iGBcxHrc90LfKhbdoposyVAOWeEEBsRPuZoj6eLhaQB6zqGxUnK11RilPtzaX1f7PTUBhpReo0LqJ%2FmC8xR5MK6bdhtVg3ZY3xKPIjKUnBDSseCHznpDOMunrG3OiH6B1upPSb2jt9RUlTkEEsr1N3sXvN72lZE5m6piZSTRgPsqVopIQECCfrijIZ%2FGZ875JvXaTt4uc7ckV6I0mZ%2BIpgGdq%2Bu3Pne8hFF%2FxheahvuBHCB3Fkwcfk3LF4bDxrrS3dSUbSwr6K4DAGswvy8kdgOwBJOej%2Flek7mzRp9Bu3E3oziws36lhsAgzYp5HHh85uLnd4DFpVUp0LmytWp8pnTFP0B3RVFYMNObrcAGOqUBXQtiUei55ejOxC4aMhfPPsB6LcTzx8xtWrAQAXjGZk5LJyHxa0WDW3mVAjrBQb5VIJetS1HtosBHRIME8Lm4BrLGyq2%2BX8HoUmF4NCmlvFgU%2FXlZeLbBak5%2BJ5NbZ4zYr7c4A5vEeEYpMRDilGM6uOFuxff8%2BCG9I42hSFVFCTVGcCRLUtBh3zuNUxqouvixPTZTGPvMf9hY4hPxQGH0xKmUhc3P&X-Amz-Signature=9986c2325e938656db318f6b1cb29842f3efb6f1e9bd394385355777d6c77da2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ4GLBQO%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfKweRb8HPv8oiLfLPt33huNtfRctHaYc86cUcPdhM3gIgF41SvEBQD8C0pwnqcPyH3JNmFfj2T5Z%2Ff7bG9aa2mxMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDL89S0qaPhPdpVVg3SrcA2ZX4dDVIhgI2dhMyLp%2Fpx%2FsptNGKVrhZcHC9jcEao2a4XfJkaAxELK3mEr10K3MAZtTWFepmwhInvZE8VLrcsGtaGZpVtWaJa1KxCDBALFLzkPFjXfcFAcIIKeo7dNWBWSlJgVZj6MjYWQE1%2BgzFjR2kGpTJ3Tf4f9y5k35FGbrGzuhzf54KRAzzOY%2BVh%2FjxwuLfqi4pDkSsixf%2FWViow7B64Kq2onXZW6AQJCDyNcIv8CfIlvuzdtSosCnUKdq9DWOMUtrIoTBSTPDPigjS6kzZGV6iGBcxHrc90LfKhbdoposyVAOWeEEBsRPuZoj6eLhaQB6zqGxUnK11RilPtzaX1f7PTUBhpReo0LqJ%2FmC8xR5MK6bdhtVg3ZY3xKPIjKUnBDSseCHznpDOMunrG3OiH6B1upPSb2jt9RUlTkEEsr1N3sXvN72lZE5m6piZSTRgPsqVopIQECCfrijIZ%2FGZ875JvXaTt4uc7ckV6I0mZ%2BIpgGdq%2Bu3Pne8hFF%2FxheahvuBHCB3Fkwcfk3LF4bDxrrS3dSUbSwr6K4DAGswvy8kdgOwBJOej%2Flek7mzRp9Bu3E3oziws36lhsAgzYp5HHh85uLnd4DFpVUp0LmytWp8pnTFP0B3RVFYMNObrcAGOqUBXQtiUei55ejOxC4aMhfPPsB6LcTzx8xtWrAQAXjGZk5LJyHxa0WDW3mVAjrBQb5VIJetS1HtosBHRIME8Lm4BrLGyq2%2BX8HoUmF4NCmlvFgU%2FXlZeLbBak5%2BJ5NbZ4zYr7c4A5vEeEYpMRDilGM6uOFuxff8%2BCG9I42hSFVFCTVGcCRLUtBh3zuNUxqouvixPTZTGPvMf9hY4hPxQGH0xKmUhc3P&X-Amz-Signature=1081dc124e6f22a4b4d0aa8d31ec03f37a6f7e277754c2e350937723f842eb1f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ4GLBQO%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfKweRb8HPv8oiLfLPt33huNtfRctHaYc86cUcPdhM3gIgF41SvEBQD8C0pwnqcPyH3JNmFfj2T5Z%2Ff7bG9aa2mxMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDL89S0qaPhPdpVVg3SrcA2ZX4dDVIhgI2dhMyLp%2Fpx%2FsptNGKVrhZcHC9jcEao2a4XfJkaAxELK3mEr10K3MAZtTWFepmwhInvZE8VLrcsGtaGZpVtWaJa1KxCDBALFLzkPFjXfcFAcIIKeo7dNWBWSlJgVZj6MjYWQE1%2BgzFjR2kGpTJ3Tf4f9y5k35FGbrGzuhzf54KRAzzOY%2BVh%2FjxwuLfqi4pDkSsixf%2FWViow7B64Kq2onXZW6AQJCDyNcIv8CfIlvuzdtSosCnUKdq9DWOMUtrIoTBSTPDPigjS6kzZGV6iGBcxHrc90LfKhbdoposyVAOWeEEBsRPuZoj6eLhaQB6zqGxUnK11RilPtzaX1f7PTUBhpReo0LqJ%2FmC8xR5MK6bdhtVg3ZY3xKPIjKUnBDSseCHznpDOMunrG3OiH6B1upPSb2jt9RUlTkEEsr1N3sXvN72lZE5m6piZSTRgPsqVopIQECCfrijIZ%2FGZ875JvXaTt4uc7ckV6I0mZ%2BIpgGdq%2Bu3Pne8hFF%2FxheahvuBHCB3Fkwcfk3LF4bDxrrS3dSUbSwr6K4DAGswvy8kdgOwBJOej%2Flek7mzRp9Bu3E3oziws36lhsAgzYp5HHh85uLnd4DFpVUp0LmytWp8pnTFP0B3RVFYMNObrcAGOqUBXQtiUei55ejOxC4aMhfPPsB6LcTzx8xtWrAQAXjGZk5LJyHxa0WDW3mVAjrBQb5VIJetS1HtosBHRIME8Lm4BrLGyq2%2BX8HoUmF4NCmlvFgU%2FXlZeLbBak5%2BJ5NbZ4zYr7c4A5vEeEYpMRDilGM6uOFuxff8%2BCG9I42hSFVFCTVGcCRLUtBh3zuNUxqouvixPTZTGPvMf9hY4hPxQGH0xKmUhc3P&X-Amz-Signature=27508c2025a86cb87bbc40a8d0f6dfcd6b5e3873c28eb10b58f5f2c78db2217e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ4GLBQO%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfKweRb8HPv8oiLfLPt33huNtfRctHaYc86cUcPdhM3gIgF41SvEBQD8C0pwnqcPyH3JNmFfj2T5Z%2Ff7bG9aa2mxMq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDL89S0qaPhPdpVVg3SrcA2ZX4dDVIhgI2dhMyLp%2Fpx%2FsptNGKVrhZcHC9jcEao2a4XfJkaAxELK3mEr10K3MAZtTWFepmwhInvZE8VLrcsGtaGZpVtWaJa1KxCDBALFLzkPFjXfcFAcIIKeo7dNWBWSlJgVZj6MjYWQE1%2BgzFjR2kGpTJ3Tf4f9y5k35FGbrGzuhzf54KRAzzOY%2BVh%2FjxwuLfqi4pDkSsixf%2FWViow7B64Kq2onXZW6AQJCDyNcIv8CfIlvuzdtSosCnUKdq9DWOMUtrIoTBSTPDPigjS6kzZGV6iGBcxHrc90LfKhbdoposyVAOWeEEBsRPuZoj6eLhaQB6zqGxUnK11RilPtzaX1f7PTUBhpReo0LqJ%2FmC8xR5MK6bdhtVg3ZY3xKPIjKUnBDSseCHznpDOMunrG3OiH6B1upPSb2jt9RUlTkEEsr1N3sXvN72lZE5m6piZSTRgPsqVopIQECCfrijIZ%2FGZ875JvXaTt4uc7ckV6I0mZ%2BIpgGdq%2Bu3Pne8hFF%2FxheahvuBHCB3Fkwcfk3LF4bDxrrS3dSUbSwr6K4DAGswvy8kdgOwBJOej%2Flek7mzRp9Bu3E3oziws36lhsAgzYp5HHh85uLnd4DFpVUp0LmytWp8pnTFP0B3RVFYMNObrcAGOqUBXQtiUei55ejOxC4aMhfPPsB6LcTzx8xtWrAQAXjGZk5LJyHxa0WDW3mVAjrBQb5VIJetS1HtosBHRIME8Lm4BrLGyq2%2BX8HoUmF4NCmlvFgU%2FXlZeLbBak5%2BJ5NbZ4zYr7c4A5vEeEYpMRDilGM6uOFuxff8%2BCG9I42hSFVFCTVGcCRLUtBh3zuNUxqouvixPTZTGPvMf9hY4hPxQGH0xKmUhc3P&X-Amz-Signature=01a527642b73ee759d82c98d462c66b887da65716142964744dfe684e7c7a9a6&X-Amz-SignedHeaders=host&x-id=GetObject)
