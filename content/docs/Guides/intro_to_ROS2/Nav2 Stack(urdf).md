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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EN2LLVA%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCAqVBao3gdv%2BsZbx%2Btb3ohfut94zcM2n8Vn8UARIaUnQIgAS8PugULfkqETdCC10RaLfuFS0DSQDck%2Ffsofg0xn%2F0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAymQYvq4GLnd2RwByrcA84SBAgmXXLYeky5%2FTOtokYrq9owUvFMDchXhwpFOLekNa40i%2FdIr1k0oEKGGJo0p%2FvyuS44cJY%2B317USqwuiP2Fu50eijXm8aRYg7VClOSJ9F8ckJHoaDSpwH09v8bor%2FXcXcuOJdHKAer87eDljLE2u23P9mnbQny65gBIc%2FLhkWjPEr%2F6042GH2OPRFY5Z4JId8XOYbSKyLU9n%2FDScKNuaSZjPN83iLuzURsA8a11IYTl8wX86K5f0SWNxImupu85L4NIVrgidZMVaaBFF8hEwbTBXdjgwKmtulgXxOt6IgU0fxDRb5u4TQtcbJXiXHV%2F%2FckseHDfQcuYrePr2yfXsVblwMkPVAJFdkIPNTtn1dJdP0Qik0P%2BUHTUFv1IVbsbkwQolpgggyftBcw0GdwC%2BZOj5MyZyp87%2FtpBfvmFnh5u1oVO%2BLGpsYzAML3WJWeRv7YBr34WrJGoTnIBgVh%2Bkkv3jK329hJpdEN9FQ%2BKSM2aXfjXovQ4LXOR6KSf3aesSwZImoKIpUEZvNGAD7qGpLd%2BNqbR6RLoUyyA85PyIrPHoWSgpUnCGnd%2FTlAA%2BYF%2BehZeF7DQVcPfMYB3spB2syF59G%2Bsu1aifnqR2TTpxNDWQ29vcxnEN60aMKiWyMEGOqUBQxyki3HcK8mSeRrASfK%2Bk%2FoOaYwTgaM8Yj7GvVS10El012cNSfY%2Fo8Fny0XnioK2UeA8Fl%2FjH7zGjewR6QdZnkJ%2BmHYWyjC3Fw%2FUXvr3sZ77LQWju86jcuKAYa0DdldxNVDmNc1%2BlD7scol1YnRivptaLSzA7MyqmQhDLBvN%2FoeSN2eUDBg6oxEgy35c8QgMiNj%2BPQaT5TvujdIihw5y6Nro2S3F&X-Amz-Signature=35f5dc91dfbf62300a648b0e941308e29090b4324c01d70134c7db85c0d8d62f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EN2LLVA%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCAqVBao3gdv%2BsZbx%2Btb3ohfut94zcM2n8Vn8UARIaUnQIgAS8PugULfkqETdCC10RaLfuFS0DSQDck%2Ffsofg0xn%2F0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAymQYvq4GLnd2RwByrcA84SBAgmXXLYeky5%2FTOtokYrq9owUvFMDchXhwpFOLekNa40i%2FdIr1k0oEKGGJo0p%2FvyuS44cJY%2B317USqwuiP2Fu50eijXm8aRYg7VClOSJ9F8ckJHoaDSpwH09v8bor%2FXcXcuOJdHKAer87eDljLE2u23P9mnbQny65gBIc%2FLhkWjPEr%2F6042GH2OPRFY5Z4JId8XOYbSKyLU9n%2FDScKNuaSZjPN83iLuzURsA8a11IYTl8wX86K5f0SWNxImupu85L4NIVrgidZMVaaBFF8hEwbTBXdjgwKmtulgXxOt6IgU0fxDRb5u4TQtcbJXiXHV%2F%2FckseHDfQcuYrePr2yfXsVblwMkPVAJFdkIPNTtn1dJdP0Qik0P%2BUHTUFv1IVbsbkwQolpgggyftBcw0GdwC%2BZOj5MyZyp87%2FtpBfvmFnh5u1oVO%2BLGpsYzAML3WJWeRv7YBr34WrJGoTnIBgVh%2Bkkv3jK329hJpdEN9FQ%2BKSM2aXfjXovQ4LXOR6KSf3aesSwZImoKIpUEZvNGAD7qGpLd%2BNqbR6RLoUyyA85PyIrPHoWSgpUnCGnd%2FTlAA%2BYF%2BehZeF7DQVcPfMYB3spB2syF59G%2Bsu1aifnqR2TTpxNDWQ29vcxnEN60aMKiWyMEGOqUBQxyki3HcK8mSeRrASfK%2Bk%2FoOaYwTgaM8Yj7GvVS10El012cNSfY%2Fo8Fny0XnioK2UeA8Fl%2FjH7zGjewR6QdZnkJ%2BmHYWyjC3Fw%2FUXvr3sZ77LQWju86jcuKAYa0DdldxNVDmNc1%2BlD7scol1YnRivptaLSzA7MyqmQhDLBvN%2FoeSN2eUDBg6oxEgy35c8QgMiNj%2BPQaT5TvujdIihw5y6Nro2S3F&X-Amz-Signature=d9f8630f00270b2aeb052b30baf6c486e16598430a983fa9b402781b2a98c618&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EN2LLVA%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCAqVBao3gdv%2BsZbx%2Btb3ohfut94zcM2n8Vn8UARIaUnQIgAS8PugULfkqETdCC10RaLfuFS0DSQDck%2Ffsofg0xn%2F0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAymQYvq4GLnd2RwByrcA84SBAgmXXLYeky5%2FTOtokYrq9owUvFMDchXhwpFOLekNa40i%2FdIr1k0oEKGGJo0p%2FvyuS44cJY%2B317USqwuiP2Fu50eijXm8aRYg7VClOSJ9F8ckJHoaDSpwH09v8bor%2FXcXcuOJdHKAer87eDljLE2u23P9mnbQny65gBIc%2FLhkWjPEr%2F6042GH2OPRFY5Z4JId8XOYbSKyLU9n%2FDScKNuaSZjPN83iLuzURsA8a11IYTl8wX86K5f0SWNxImupu85L4NIVrgidZMVaaBFF8hEwbTBXdjgwKmtulgXxOt6IgU0fxDRb5u4TQtcbJXiXHV%2F%2FckseHDfQcuYrePr2yfXsVblwMkPVAJFdkIPNTtn1dJdP0Qik0P%2BUHTUFv1IVbsbkwQolpgggyftBcw0GdwC%2BZOj5MyZyp87%2FtpBfvmFnh5u1oVO%2BLGpsYzAML3WJWeRv7YBr34WrJGoTnIBgVh%2Bkkv3jK329hJpdEN9FQ%2BKSM2aXfjXovQ4LXOR6KSf3aesSwZImoKIpUEZvNGAD7qGpLd%2BNqbR6RLoUyyA85PyIrPHoWSgpUnCGnd%2FTlAA%2BYF%2BehZeF7DQVcPfMYB3spB2syF59G%2Bsu1aifnqR2TTpxNDWQ29vcxnEN60aMKiWyMEGOqUBQxyki3HcK8mSeRrASfK%2Bk%2FoOaYwTgaM8Yj7GvVS10El012cNSfY%2Fo8Fny0XnioK2UeA8Fl%2FjH7zGjewR6QdZnkJ%2BmHYWyjC3Fw%2FUXvr3sZ77LQWju86jcuKAYa0DdldxNVDmNc1%2BlD7scol1YnRivptaLSzA7MyqmQhDLBvN%2FoeSN2eUDBg6oxEgy35c8QgMiNj%2BPQaT5TvujdIihw5y6Nro2S3F&X-Amz-Signature=ed23696ebb622c49a72cc78bc3e56bfe7a752528549327aa3dc04a62018e52cd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EN2LLVA%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCAqVBao3gdv%2BsZbx%2Btb3ohfut94zcM2n8Vn8UARIaUnQIgAS8PugULfkqETdCC10RaLfuFS0DSQDck%2Ffsofg0xn%2F0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAymQYvq4GLnd2RwByrcA84SBAgmXXLYeky5%2FTOtokYrq9owUvFMDchXhwpFOLekNa40i%2FdIr1k0oEKGGJo0p%2FvyuS44cJY%2B317USqwuiP2Fu50eijXm8aRYg7VClOSJ9F8ckJHoaDSpwH09v8bor%2FXcXcuOJdHKAer87eDljLE2u23P9mnbQny65gBIc%2FLhkWjPEr%2F6042GH2OPRFY5Z4JId8XOYbSKyLU9n%2FDScKNuaSZjPN83iLuzURsA8a11IYTl8wX86K5f0SWNxImupu85L4NIVrgidZMVaaBFF8hEwbTBXdjgwKmtulgXxOt6IgU0fxDRb5u4TQtcbJXiXHV%2F%2FckseHDfQcuYrePr2yfXsVblwMkPVAJFdkIPNTtn1dJdP0Qik0P%2BUHTUFv1IVbsbkwQolpgggyftBcw0GdwC%2BZOj5MyZyp87%2FtpBfvmFnh5u1oVO%2BLGpsYzAML3WJWeRv7YBr34WrJGoTnIBgVh%2Bkkv3jK329hJpdEN9FQ%2BKSM2aXfjXovQ4LXOR6KSf3aesSwZImoKIpUEZvNGAD7qGpLd%2BNqbR6RLoUyyA85PyIrPHoWSgpUnCGnd%2FTlAA%2BYF%2BehZeF7DQVcPfMYB3spB2syF59G%2Bsu1aifnqR2TTpxNDWQ29vcxnEN60aMKiWyMEGOqUBQxyki3HcK8mSeRrASfK%2Bk%2FoOaYwTgaM8Yj7GvVS10El012cNSfY%2Fo8Fny0XnioK2UeA8Fl%2FjH7zGjewR6QdZnkJ%2BmHYWyjC3Fw%2FUXvr3sZ77LQWju86jcuKAYa0DdldxNVDmNc1%2BlD7scol1YnRivptaLSzA7MyqmQhDLBvN%2FoeSN2eUDBg6oxEgy35c8QgMiNj%2BPQaT5TvujdIihw5y6Nro2S3F&X-Amz-Signature=6f215aab91d70b27ef33e880043675a0110b37544ec50087922cb8e8c683bfd3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EN2LLVA%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCAqVBao3gdv%2BsZbx%2Btb3ohfut94zcM2n8Vn8UARIaUnQIgAS8PugULfkqETdCC10RaLfuFS0DSQDck%2Ffsofg0xn%2F0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAymQYvq4GLnd2RwByrcA84SBAgmXXLYeky5%2FTOtokYrq9owUvFMDchXhwpFOLekNa40i%2FdIr1k0oEKGGJo0p%2FvyuS44cJY%2B317USqwuiP2Fu50eijXm8aRYg7VClOSJ9F8ckJHoaDSpwH09v8bor%2FXcXcuOJdHKAer87eDljLE2u23P9mnbQny65gBIc%2FLhkWjPEr%2F6042GH2OPRFY5Z4JId8XOYbSKyLU9n%2FDScKNuaSZjPN83iLuzURsA8a11IYTl8wX86K5f0SWNxImupu85L4NIVrgidZMVaaBFF8hEwbTBXdjgwKmtulgXxOt6IgU0fxDRb5u4TQtcbJXiXHV%2F%2FckseHDfQcuYrePr2yfXsVblwMkPVAJFdkIPNTtn1dJdP0Qik0P%2BUHTUFv1IVbsbkwQolpgggyftBcw0GdwC%2BZOj5MyZyp87%2FtpBfvmFnh5u1oVO%2BLGpsYzAML3WJWeRv7YBr34WrJGoTnIBgVh%2Bkkv3jK329hJpdEN9FQ%2BKSM2aXfjXovQ4LXOR6KSf3aesSwZImoKIpUEZvNGAD7qGpLd%2BNqbR6RLoUyyA85PyIrPHoWSgpUnCGnd%2FTlAA%2BYF%2BehZeF7DQVcPfMYB3spB2syF59G%2Bsu1aifnqR2TTpxNDWQ29vcxnEN60aMKiWyMEGOqUBQxyki3HcK8mSeRrASfK%2Bk%2FoOaYwTgaM8Yj7GvVS10El012cNSfY%2Fo8Fny0XnioK2UeA8Fl%2FjH7zGjewR6QdZnkJ%2BmHYWyjC3Fw%2FUXvr3sZ77LQWju86jcuKAYa0DdldxNVDmNc1%2BlD7scol1YnRivptaLSzA7MyqmQhDLBvN%2FoeSN2eUDBg6oxEgy35c8QgMiNj%2BPQaT5TvujdIihw5y6Nro2S3F&X-Amz-Signature=eda77923dc7c50357b9b41840c76d05ad44bf6190f91ccf7f86961b581414e50&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EN2LLVA%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCAqVBao3gdv%2BsZbx%2Btb3ohfut94zcM2n8Vn8UARIaUnQIgAS8PugULfkqETdCC10RaLfuFS0DSQDck%2Ffsofg0xn%2F0q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDAymQYvq4GLnd2RwByrcA84SBAgmXXLYeky5%2FTOtokYrq9owUvFMDchXhwpFOLekNa40i%2FdIr1k0oEKGGJo0p%2FvyuS44cJY%2B317USqwuiP2Fu50eijXm8aRYg7VClOSJ9F8ckJHoaDSpwH09v8bor%2FXcXcuOJdHKAer87eDljLE2u23P9mnbQny65gBIc%2FLhkWjPEr%2F6042GH2OPRFY5Z4JId8XOYbSKyLU9n%2FDScKNuaSZjPN83iLuzURsA8a11IYTl8wX86K5f0SWNxImupu85L4NIVrgidZMVaaBFF8hEwbTBXdjgwKmtulgXxOt6IgU0fxDRb5u4TQtcbJXiXHV%2F%2FckseHDfQcuYrePr2yfXsVblwMkPVAJFdkIPNTtn1dJdP0Qik0P%2BUHTUFv1IVbsbkwQolpgggyftBcw0GdwC%2BZOj5MyZyp87%2FtpBfvmFnh5u1oVO%2BLGpsYzAML3WJWeRv7YBr34WrJGoTnIBgVh%2Bkkv3jK329hJpdEN9FQ%2BKSM2aXfjXovQ4LXOR6KSf3aesSwZImoKIpUEZvNGAD7qGpLd%2BNqbR6RLoUyyA85PyIrPHoWSgpUnCGnd%2FTlAA%2BYF%2BehZeF7DQVcPfMYB3spB2syF59G%2Bsu1aifnqR2TTpxNDWQ29vcxnEN60aMKiWyMEGOqUBQxyki3HcK8mSeRrASfK%2Bk%2FoOaYwTgaM8Yj7GvVS10El012cNSfY%2Fo8Fny0XnioK2UeA8Fl%2FjH7zGjewR6QdZnkJ%2BmHYWyjC3Fw%2FUXvr3sZ77LQWju86jcuKAYa0DdldxNVDmNc1%2BlD7scol1YnRivptaLSzA7MyqmQhDLBvN%2FoeSN2eUDBg6oxEgy35c8QgMiNj%2BPQaT5TvujdIihw5y6Nro2S3F&X-Amz-Signature=fc91b7ac4afbff4afd9909cb81438802223135ce5617b92846197c54d109d223&X-Amz-SignedHeaders=host&x-id=GetObject)
