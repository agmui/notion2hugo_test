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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FMM6DBL%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T004335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBLynOT2fjQ4BWqkPuBoaqHz4tuJDw5H2aqnah07l7bEAiEAoyLvfTNbhSCAxa61xL4oGmfa%2FLSKTWUj1tw4N5%2FflYAq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDKhrvblusAwoJcHqcCrcA%2BC%2FHyNRoDx054xVXtY%2Fi4NYEJfrBRA4uNF%2FUKIgBAY%2FdtRGQ2bfyzE09cn%2BLBqr4IlenG5QkO1BSAvrU52axXDaF46oyCqQbAd2NzwVm4esTweVVHE8GVockFbGXnxRM0KpkomSzCmIJtaX3tMplXKRCSiYsf8TQmUW3LVPtKx3DSw9JYhKqyvxIAwCTXVQAID9WtG%2F1IId29JZS8oKtGMSdPUOHVQ%2BM0k4dMvuOhUJuTjf4NMAZJ%2BngTrDPuRmsu6BvrHhjjimCjQs0XWVWVeVWPSP75sOr%2FQf%2FjZ01VbTIBxpsafnVaEBhFetghf9E9yE8s9%2BYt0qZKA8r0%2FtckczqXrOGtIAqgqAcCoZwDRAHkdCAmQh2D5ERBoXnahQLr%2BBUzMAptFBPWWwDr90GI9VZjVVIQc1MMmx5oxAuUBpBfTFoxcmYjwhLBeVMZxgDzluRBbyLFWhnO3%2FyOltbbWae1z7FDFeHKoQXe%2BaArPUVSPkndUkPkIakZwf8iRz1OiFuVEqw2FjY5ACDhaz38IjtN9j2xKsh9EmCOrNsynNmljAiNp7T%2FIpH8khWvf4HuOLNkz5iKp9be%2Bg7xIC0qC37fey3mA0dNWdoVnXHi7e3KQgny8jYYYKJRH5MOu%2FtcAGOqUBTbBV8M3HvTvfIub3Jfw6q%2BZKIyJECXDg7BPDJ7Led%2FHxndc6AfvkPku77aObWYXNbHGzUSDHFsGj3r0%2FsLrjN16xi8zIFfODsb%2Bsq%2FQeN3siVPC2%2B5D6o1sqAA%2FB7ICMlOn5DEwJiWzt9fcOKufcccAX0EOP9xrXAUK8SmPKqBVZNwhzPF7lR5CB1CY6DPOwjP0pqi2xvrDmXj%2BUGp4udofP%2Fp5q&X-Amz-Signature=10dad97aadb73a5b488880781c9eec54d8fe9324d4db24ff9370e2d9186ea879&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FMM6DBL%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T004335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBLynOT2fjQ4BWqkPuBoaqHz4tuJDw5H2aqnah07l7bEAiEAoyLvfTNbhSCAxa61xL4oGmfa%2FLSKTWUj1tw4N5%2FflYAq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDKhrvblusAwoJcHqcCrcA%2BC%2FHyNRoDx054xVXtY%2Fi4NYEJfrBRA4uNF%2FUKIgBAY%2FdtRGQ2bfyzE09cn%2BLBqr4IlenG5QkO1BSAvrU52axXDaF46oyCqQbAd2NzwVm4esTweVVHE8GVockFbGXnxRM0KpkomSzCmIJtaX3tMplXKRCSiYsf8TQmUW3LVPtKx3DSw9JYhKqyvxIAwCTXVQAID9WtG%2F1IId29JZS8oKtGMSdPUOHVQ%2BM0k4dMvuOhUJuTjf4NMAZJ%2BngTrDPuRmsu6BvrHhjjimCjQs0XWVWVeVWPSP75sOr%2FQf%2FjZ01VbTIBxpsafnVaEBhFetghf9E9yE8s9%2BYt0qZKA8r0%2FtckczqXrOGtIAqgqAcCoZwDRAHkdCAmQh2D5ERBoXnahQLr%2BBUzMAptFBPWWwDr90GI9VZjVVIQc1MMmx5oxAuUBpBfTFoxcmYjwhLBeVMZxgDzluRBbyLFWhnO3%2FyOltbbWae1z7FDFeHKoQXe%2BaArPUVSPkndUkPkIakZwf8iRz1OiFuVEqw2FjY5ACDhaz38IjtN9j2xKsh9EmCOrNsynNmljAiNp7T%2FIpH8khWvf4HuOLNkz5iKp9be%2Bg7xIC0qC37fey3mA0dNWdoVnXHi7e3KQgny8jYYYKJRH5MOu%2FtcAGOqUBTbBV8M3HvTvfIub3Jfw6q%2BZKIyJECXDg7BPDJ7Led%2FHxndc6AfvkPku77aObWYXNbHGzUSDHFsGj3r0%2FsLrjN16xi8zIFfODsb%2Bsq%2FQeN3siVPC2%2B5D6o1sqAA%2FB7ICMlOn5DEwJiWzt9fcOKufcccAX0EOP9xrXAUK8SmPKqBVZNwhzPF7lR5CB1CY6DPOwjP0pqi2xvrDmXj%2BUGp4udofP%2Fp5q&X-Amz-Signature=af1864e094dcf92f5a904d52ee1c338dda584ae055aa4252c70fc3ab7ab47704&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FMM6DBL%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T004335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBLynOT2fjQ4BWqkPuBoaqHz4tuJDw5H2aqnah07l7bEAiEAoyLvfTNbhSCAxa61xL4oGmfa%2FLSKTWUj1tw4N5%2FflYAq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDKhrvblusAwoJcHqcCrcA%2BC%2FHyNRoDx054xVXtY%2Fi4NYEJfrBRA4uNF%2FUKIgBAY%2FdtRGQ2bfyzE09cn%2BLBqr4IlenG5QkO1BSAvrU52axXDaF46oyCqQbAd2NzwVm4esTweVVHE8GVockFbGXnxRM0KpkomSzCmIJtaX3tMplXKRCSiYsf8TQmUW3LVPtKx3DSw9JYhKqyvxIAwCTXVQAID9WtG%2F1IId29JZS8oKtGMSdPUOHVQ%2BM0k4dMvuOhUJuTjf4NMAZJ%2BngTrDPuRmsu6BvrHhjjimCjQs0XWVWVeVWPSP75sOr%2FQf%2FjZ01VbTIBxpsafnVaEBhFetghf9E9yE8s9%2BYt0qZKA8r0%2FtckczqXrOGtIAqgqAcCoZwDRAHkdCAmQh2D5ERBoXnahQLr%2BBUzMAptFBPWWwDr90GI9VZjVVIQc1MMmx5oxAuUBpBfTFoxcmYjwhLBeVMZxgDzluRBbyLFWhnO3%2FyOltbbWae1z7FDFeHKoQXe%2BaArPUVSPkndUkPkIakZwf8iRz1OiFuVEqw2FjY5ACDhaz38IjtN9j2xKsh9EmCOrNsynNmljAiNp7T%2FIpH8khWvf4HuOLNkz5iKp9be%2Bg7xIC0qC37fey3mA0dNWdoVnXHi7e3KQgny8jYYYKJRH5MOu%2FtcAGOqUBTbBV8M3HvTvfIub3Jfw6q%2BZKIyJECXDg7BPDJ7Led%2FHxndc6AfvkPku77aObWYXNbHGzUSDHFsGj3r0%2FsLrjN16xi8zIFfODsb%2Bsq%2FQeN3siVPC2%2B5D6o1sqAA%2FB7ICMlOn5DEwJiWzt9fcOKufcccAX0EOP9xrXAUK8SmPKqBVZNwhzPF7lR5CB1CY6DPOwjP0pqi2xvrDmXj%2BUGp4udofP%2Fp5q&X-Amz-Signature=c0f271e5ababa573baef2aaed54f669e52289780fccaa7866c52c58da55d7319&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FMM6DBL%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T004335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBLynOT2fjQ4BWqkPuBoaqHz4tuJDw5H2aqnah07l7bEAiEAoyLvfTNbhSCAxa61xL4oGmfa%2FLSKTWUj1tw4N5%2FflYAq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDKhrvblusAwoJcHqcCrcA%2BC%2FHyNRoDx054xVXtY%2Fi4NYEJfrBRA4uNF%2FUKIgBAY%2FdtRGQ2bfyzE09cn%2BLBqr4IlenG5QkO1BSAvrU52axXDaF46oyCqQbAd2NzwVm4esTweVVHE8GVockFbGXnxRM0KpkomSzCmIJtaX3tMplXKRCSiYsf8TQmUW3LVPtKx3DSw9JYhKqyvxIAwCTXVQAID9WtG%2F1IId29JZS8oKtGMSdPUOHVQ%2BM0k4dMvuOhUJuTjf4NMAZJ%2BngTrDPuRmsu6BvrHhjjimCjQs0XWVWVeVWPSP75sOr%2FQf%2FjZ01VbTIBxpsafnVaEBhFetghf9E9yE8s9%2BYt0qZKA8r0%2FtckczqXrOGtIAqgqAcCoZwDRAHkdCAmQh2D5ERBoXnahQLr%2BBUzMAptFBPWWwDr90GI9VZjVVIQc1MMmx5oxAuUBpBfTFoxcmYjwhLBeVMZxgDzluRBbyLFWhnO3%2FyOltbbWae1z7FDFeHKoQXe%2BaArPUVSPkndUkPkIakZwf8iRz1OiFuVEqw2FjY5ACDhaz38IjtN9j2xKsh9EmCOrNsynNmljAiNp7T%2FIpH8khWvf4HuOLNkz5iKp9be%2Bg7xIC0qC37fey3mA0dNWdoVnXHi7e3KQgny8jYYYKJRH5MOu%2FtcAGOqUBTbBV8M3HvTvfIub3Jfw6q%2BZKIyJECXDg7BPDJ7Led%2FHxndc6AfvkPku77aObWYXNbHGzUSDHFsGj3r0%2FsLrjN16xi8zIFfODsb%2Bsq%2FQeN3siVPC2%2B5D6o1sqAA%2FB7ICMlOn5DEwJiWzt9fcOKufcccAX0EOP9xrXAUK8SmPKqBVZNwhzPF7lR5CB1CY6DPOwjP0pqi2xvrDmXj%2BUGp4udofP%2Fp5q&X-Amz-Signature=1ef8e4bc30d537bf6d713d7b306a451f0f96e6abbc3ada97724200c4afd207bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FMM6DBL%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T004335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBLynOT2fjQ4BWqkPuBoaqHz4tuJDw5H2aqnah07l7bEAiEAoyLvfTNbhSCAxa61xL4oGmfa%2FLSKTWUj1tw4N5%2FflYAq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDKhrvblusAwoJcHqcCrcA%2BC%2FHyNRoDx054xVXtY%2Fi4NYEJfrBRA4uNF%2FUKIgBAY%2FdtRGQ2bfyzE09cn%2BLBqr4IlenG5QkO1BSAvrU52axXDaF46oyCqQbAd2NzwVm4esTweVVHE8GVockFbGXnxRM0KpkomSzCmIJtaX3tMplXKRCSiYsf8TQmUW3LVPtKx3DSw9JYhKqyvxIAwCTXVQAID9WtG%2F1IId29JZS8oKtGMSdPUOHVQ%2BM0k4dMvuOhUJuTjf4NMAZJ%2BngTrDPuRmsu6BvrHhjjimCjQs0XWVWVeVWPSP75sOr%2FQf%2FjZ01VbTIBxpsafnVaEBhFetghf9E9yE8s9%2BYt0qZKA8r0%2FtckczqXrOGtIAqgqAcCoZwDRAHkdCAmQh2D5ERBoXnahQLr%2BBUzMAptFBPWWwDr90GI9VZjVVIQc1MMmx5oxAuUBpBfTFoxcmYjwhLBeVMZxgDzluRBbyLFWhnO3%2FyOltbbWae1z7FDFeHKoQXe%2BaArPUVSPkndUkPkIakZwf8iRz1OiFuVEqw2FjY5ACDhaz38IjtN9j2xKsh9EmCOrNsynNmljAiNp7T%2FIpH8khWvf4HuOLNkz5iKp9be%2Bg7xIC0qC37fey3mA0dNWdoVnXHi7e3KQgny8jYYYKJRH5MOu%2FtcAGOqUBTbBV8M3HvTvfIub3Jfw6q%2BZKIyJECXDg7BPDJ7Led%2FHxndc6AfvkPku77aObWYXNbHGzUSDHFsGj3r0%2FsLrjN16xi8zIFfODsb%2Bsq%2FQeN3siVPC2%2B5D6o1sqAA%2FB7ICMlOn5DEwJiWzt9fcOKufcccAX0EOP9xrXAUK8SmPKqBVZNwhzPF7lR5CB1CY6DPOwjP0pqi2xvrDmXj%2BUGp4udofP%2Fp5q&X-Amz-Signature=f5abeee28d023a706bba1150e4326d6ab0cb90079ba3ed39bbce10015785c50f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FMM6DBL%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T004335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBLynOT2fjQ4BWqkPuBoaqHz4tuJDw5H2aqnah07l7bEAiEAoyLvfTNbhSCAxa61xL4oGmfa%2FLSKTWUj1tw4N5%2FflYAq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDKhrvblusAwoJcHqcCrcA%2BC%2FHyNRoDx054xVXtY%2Fi4NYEJfrBRA4uNF%2FUKIgBAY%2FdtRGQ2bfyzE09cn%2BLBqr4IlenG5QkO1BSAvrU52axXDaF46oyCqQbAd2NzwVm4esTweVVHE8GVockFbGXnxRM0KpkomSzCmIJtaX3tMplXKRCSiYsf8TQmUW3LVPtKx3DSw9JYhKqyvxIAwCTXVQAID9WtG%2F1IId29JZS8oKtGMSdPUOHVQ%2BM0k4dMvuOhUJuTjf4NMAZJ%2BngTrDPuRmsu6BvrHhjjimCjQs0XWVWVeVWPSP75sOr%2FQf%2FjZ01VbTIBxpsafnVaEBhFetghf9E9yE8s9%2BYt0qZKA8r0%2FtckczqXrOGtIAqgqAcCoZwDRAHkdCAmQh2D5ERBoXnahQLr%2BBUzMAptFBPWWwDr90GI9VZjVVIQc1MMmx5oxAuUBpBfTFoxcmYjwhLBeVMZxgDzluRBbyLFWhnO3%2FyOltbbWae1z7FDFeHKoQXe%2BaArPUVSPkndUkPkIakZwf8iRz1OiFuVEqw2FjY5ACDhaz38IjtN9j2xKsh9EmCOrNsynNmljAiNp7T%2FIpH8khWvf4HuOLNkz5iKp9be%2Bg7xIC0qC37fey3mA0dNWdoVnXHi7e3KQgny8jYYYKJRH5MOu%2FtcAGOqUBTbBV8M3HvTvfIub3Jfw6q%2BZKIyJECXDg7BPDJ7Led%2FHxndc6AfvkPku77aObWYXNbHGzUSDHFsGj3r0%2FsLrjN16xi8zIFfODsb%2Bsq%2FQeN3siVPC2%2B5D6o1sqAA%2FB7ICMlOn5DEwJiWzt9fcOKufcccAX0EOP9xrXAUK8SmPKqBVZNwhzPF7lR5CB1CY6DPOwjP0pqi2xvrDmXj%2BUGp4udofP%2Fp5q&X-Amz-Signature=c1aaa81712c1eadec9bd33846fc97327bc3b6e7ffb3718a58620066a1b18f310&X-Amz-SignedHeaders=host&x-id=GetObject)
