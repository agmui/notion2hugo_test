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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCXYLHXM%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuUusQ0aFFVZ%2Bokr5iiOggZ1KQcK6zDTk43wADFpfuTAIhAM9EfjbdTFUah2nZg2Gg0MJ6CiGHU7MoLXWW8I%2BNcvoRKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTOH%2F3cebgDM0AeHcq3ANBGH0fKuRTp208%2FO6YiKFa%2B9MYH1Wis4V5xWe50Sn9WTHXPuHHO3NY0VXtYrjV%2FthiR0HY3kbwBop9e2UVEbsEiGswzOFTywaNAjYlUcNK8WojCDoGSKSBbORFz%2BmkYKQIn9Lw3c0QIZgm78NfxodGKJFQ29aXD1Ao3ezMebenlOLrLD%2Fsp91ZXzl8eBBClDQSpz6cUYCWgF1obtYQUvue0Hr265qiAhivkl5pWGrM7rS6pchlH0UoPOsvF8FpF5HFIdYpqnIFsY06kyAa7SpTG1Lh2JMlI3pjsGjTP%2Bt1pNjFSqhBEpneSpc0YPg2Slh8NGjsXgATAasFj53klnWMLR%2FxGgi%2F6kQF7G6%2FTnTF5iKG5BlXxN29Hr80vj7%2F69YGimfH7WVaYfzYzVFM9yVAzY%2BlCM6O88z6dPHGFzYSnuHCaBO%2F3Zr1HQaMjodPFA30X8rxvmX%2Bcv2snrB%2FKrV7dbii3wTTxKO3DQHOhsablmdOi%2BXDdm1GOkZaC9OxyV09IyI5KATUnnXtGMJDaLq4Socre4iuFwPx%2FPR9PQgf2ooplqZLAoHWNp%2FMyENKE6NMhAnXRxu2ylF6Z1lti34OjoKSe4OfW8CJLD0faR328LXhgetM99KOdAbLmzDD%2Fd%2FBBjqkARf%2BcjDU0DYe1KTZujLmLImcLZmUB7Mtv2ruaUso5VwX68mt%2BzPx9AJSawKkTMHfNrBE0At8J8hsQqprcw6twqGTLLhIJtaM84yhukSXOBxTIZ3QF02DTO7kwEkoQITh6RZsznLeQYV3ua5ZIaZ5bDxszJz9IBp765X8KaAkleFPHVnKWd0n7tHqKZlYQEjeew%2Bpd42JHmSFESEtBN20QYIXEg1L&X-Amz-Signature=e9be9647523c9e7b293cd9baf2a5dcb3c4342424215095182097e25b7ad0c5fa&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCXYLHXM%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuUusQ0aFFVZ%2Bokr5iiOggZ1KQcK6zDTk43wADFpfuTAIhAM9EfjbdTFUah2nZg2Gg0MJ6CiGHU7MoLXWW8I%2BNcvoRKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTOH%2F3cebgDM0AeHcq3ANBGH0fKuRTp208%2FO6YiKFa%2B9MYH1Wis4V5xWe50Sn9WTHXPuHHO3NY0VXtYrjV%2FthiR0HY3kbwBop9e2UVEbsEiGswzOFTywaNAjYlUcNK8WojCDoGSKSBbORFz%2BmkYKQIn9Lw3c0QIZgm78NfxodGKJFQ29aXD1Ao3ezMebenlOLrLD%2Fsp91ZXzl8eBBClDQSpz6cUYCWgF1obtYQUvue0Hr265qiAhivkl5pWGrM7rS6pchlH0UoPOsvF8FpF5HFIdYpqnIFsY06kyAa7SpTG1Lh2JMlI3pjsGjTP%2Bt1pNjFSqhBEpneSpc0YPg2Slh8NGjsXgATAasFj53klnWMLR%2FxGgi%2F6kQF7G6%2FTnTF5iKG5BlXxN29Hr80vj7%2F69YGimfH7WVaYfzYzVFM9yVAzY%2BlCM6O88z6dPHGFzYSnuHCaBO%2F3Zr1HQaMjodPFA30X8rxvmX%2Bcv2snrB%2FKrV7dbii3wTTxKO3DQHOhsablmdOi%2BXDdm1GOkZaC9OxyV09IyI5KATUnnXtGMJDaLq4Socre4iuFwPx%2FPR9PQgf2ooplqZLAoHWNp%2FMyENKE6NMhAnXRxu2ylF6Z1lti34OjoKSe4OfW8CJLD0faR328LXhgetM99KOdAbLmzDD%2Fd%2FBBjqkARf%2BcjDU0DYe1KTZujLmLImcLZmUB7Mtv2ruaUso5VwX68mt%2BzPx9AJSawKkTMHfNrBE0At8J8hsQqprcw6twqGTLLhIJtaM84yhukSXOBxTIZ3QF02DTO7kwEkoQITh6RZsznLeQYV3ua5ZIaZ5bDxszJz9IBp765X8KaAkleFPHVnKWd0n7tHqKZlYQEjeew%2Bpd42JHmSFESEtBN20QYIXEg1L&X-Amz-Signature=a241c49cf37374a76dd65e14d99a5016fcf4d1f2d0398972c5116147cb38db11&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCXYLHXM%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuUusQ0aFFVZ%2Bokr5iiOggZ1KQcK6zDTk43wADFpfuTAIhAM9EfjbdTFUah2nZg2Gg0MJ6CiGHU7MoLXWW8I%2BNcvoRKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTOH%2F3cebgDM0AeHcq3ANBGH0fKuRTp208%2FO6YiKFa%2B9MYH1Wis4V5xWe50Sn9WTHXPuHHO3NY0VXtYrjV%2FthiR0HY3kbwBop9e2UVEbsEiGswzOFTywaNAjYlUcNK8WojCDoGSKSBbORFz%2BmkYKQIn9Lw3c0QIZgm78NfxodGKJFQ29aXD1Ao3ezMebenlOLrLD%2Fsp91ZXzl8eBBClDQSpz6cUYCWgF1obtYQUvue0Hr265qiAhivkl5pWGrM7rS6pchlH0UoPOsvF8FpF5HFIdYpqnIFsY06kyAa7SpTG1Lh2JMlI3pjsGjTP%2Bt1pNjFSqhBEpneSpc0YPg2Slh8NGjsXgATAasFj53klnWMLR%2FxGgi%2F6kQF7G6%2FTnTF5iKG5BlXxN29Hr80vj7%2F69YGimfH7WVaYfzYzVFM9yVAzY%2BlCM6O88z6dPHGFzYSnuHCaBO%2F3Zr1HQaMjodPFA30X8rxvmX%2Bcv2snrB%2FKrV7dbii3wTTxKO3DQHOhsablmdOi%2BXDdm1GOkZaC9OxyV09IyI5KATUnnXtGMJDaLq4Socre4iuFwPx%2FPR9PQgf2ooplqZLAoHWNp%2FMyENKE6NMhAnXRxu2ylF6Z1lti34OjoKSe4OfW8CJLD0faR328LXhgetM99KOdAbLmzDD%2Fd%2FBBjqkARf%2BcjDU0DYe1KTZujLmLImcLZmUB7Mtv2ruaUso5VwX68mt%2BzPx9AJSawKkTMHfNrBE0At8J8hsQqprcw6twqGTLLhIJtaM84yhukSXOBxTIZ3QF02DTO7kwEkoQITh6RZsznLeQYV3ua5ZIaZ5bDxszJz9IBp765X8KaAkleFPHVnKWd0n7tHqKZlYQEjeew%2Bpd42JHmSFESEtBN20QYIXEg1L&X-Amz-Signature=38f75732c06d4e163e28593f3f99276ddb7c99f448dfd69e3a0827e750f658a1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCXYLHXM%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuUusQ0aFFVZ%2Bokr5iiOggZ1KQcK6zDTk43wADFpfuTAIhAM9EfjbdTFUah2nZg2Gg0MJ6CiGHU7MoLXWW8I%2BNcvoRKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTOH%2F3cebgDM0AeHcq3ANBGH0fKuRTp208%2FO6YiKFa%2B9MYH1Wis4V5xWe50Sn9WTHXPuHHO3NY0VXtYrjV%2FthiR0HY3kbwBop9e2UVEbsEiGswzOFTywaNAjYlUcNK8WojCDoGSKSBbORFz%2BmkYKQIn9Lw3c0QIZgm78NfxodGKJFQ29aXD1Ao3ezMebenlOLrLD%2Fsp91ZXzl8eBBClDQSpz6cUYCWgF1obtYQUvue0Hr265qiAhivkl5pWGrM7rS6pchlH0UoPOsvF8FpF5HFIdYpqnIFsY06kyAa7SpTG1Lh2JMlI3pjsGjTP%2Bt1pNjFSqhBEpneSpc0YPg2Slh8NGjsXgATAasFj53klnWMLR%2FxGgi%2F6kQF7G6%2FTnTF5iKG5BlXxN29Hr80vj7%2F69YGimfH7WVaYfzYzVFM9yVAzY%2BlCM6O88z6dPHGFzYSnuHCaBO%2F3Zr1HQaMjodPFA30X8rxvmX%2Bcv2snrB%2FKrV7dbii3wTTxKO3DQHOhsablmdOi%2BXDdm1GOkZaC9OxyV09IyI5KATUnnXtGMJDaLq4Socre4iuFwPx%2FPR9PQgf2ooplqZLAoHWNp%2FMyENKE6NMhAnXRxu2ylF6Z1lti34OjoKSe4OfW8CJLD0faR328LXhgetM99KOdAbLmzDD%2Fd%2FBBjqkARf%2BcjDU0DYe1KTZujLmLImcLZmUB7Mtv2ruaUso5VwX68mt%2BzPx9AJSawKkTMHfNrBE0At8J8hsQqprcw6twqGTLLhIJtaM84yhukSXOBxTIZ3QF02DTO7kwEkoQITh6RZsznLeQYV3ua5ZIaZ5bDxszJz9IBp765X8KaAkleFPHVnKWd0n7tHqKZlYQEjeew%2Bpd42JHmSFESEtBN20QYIXEg1L&X-Amz-Signature=016351923b53531ea265048970bab24a765c3727ad95abe12b105c6425a79590&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCXYLHXM%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuUusQ0aFFVZ%2Bokr5iiOggZ1KQcK6zDTk43wADFpfuTAIhAM9EfjbdTFUah2nZg2Gg0MJ6CiGHU7MoLXWW8I%2BNcvoRKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTOH%2F3cebgDM0AeHcq3ANBGH0fKuRTp208%2FO6YiKFa%2B9MYH1Wis4V5xWe50Sn9WTHXPuHHO3NY0VXtYrjV%2FthiR0HY3kbwBop9e2UVEbsEiGswzOFTywaNAjYlUcNK8WojCDoGSKSBbORFz%2BmkYKQIn9Lw3c0QIZgm78NfxodGKJFQ29aXD1Ao3ezMebenlOLrLD%2Fsp91ZXzl8eBBClDQSpz6cUYCWgF1obtYQUvue0Hr265qiAhivkl5pWGrM7rS6pchlH0UoPOsvF8FpF5HFIdYpqnIFsY06kyAa7SpTG1Lh2JMlI3pjsGjTP%2Bt1pNjFSqhBEpneSpc0YPg2Slh8NGjsXgATAasFj53klnWMLR%2FxGgi%2F6kQF7G6%2FTnTF5iKG5BlXxN29Hr80vj7%2F69YGimfH7WVaYfzYzVFM9yVAzY%2BlCM6O88z6dPHGFzYSnuHCaBO%2F3Zr1HQaMjodPFA30X8rxvmX%2Bcv2snrB%2FKrV7dbii3wTTxKO3DQHOhsablmdOi%2BXDdm1GOkZaC9OxyV09IyI5KATUnnXtGMJDaLq4Socre4iuFwPx%2FPR9PQgf2ooplqZLAoHWNp%2FMyENKE6NMhAnXRxu2ylF6Z1lti34OjoKSe4OfW8CJLD0faR328LXhgetM99KOdAbLmzDD%2Fd%2FBBjqkARf%2BcjDU0DYe1KTZujLmLImcLZmUB7Mtv2ruaUso5VwX68mt%2BzPx9AJSawKkTMHfNrBE0At8J8hsQqprcw6twqGTLLhIJtaM84yhukSXOBxTIZ3QF02DTO7kwEkoQITh6RZsznLeQYV3ua5ZIaZ5bDxszJz9IBp765X8KaAkleFPHVnKWd0n7tHqKZlYQEjeew%2Bpd42JHmSFESEtBN20QYIXEg1L&X-Amz-Signature=64387f6252d52d67b2d67ecef9ccc0b90b559952797bf74b0e601d2d4f932c6d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCXYLHXM%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuUusQ0aFFVZ%2Bokr5iiOggZ1KQcK6zDTk43wADFpfuTAIhAM9EfjbdTFUah2nZg2Gg0MJ6CiGHU7MoLXWW8I%2BNcvoRKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTOH%2F3cebgDM0AeHcq3ANBGH0fKuRTp208%2FO6YiKFa%2B9MYH1Wis4V5xWe50Sn9WTHXPuHHO3NY0VXtYrjV%2FthiR0HY3kbwBop9e2UVEbsEiGswzOFTywaNAjYlUcNK8WojCDoGSKSBbORFz%2BmkYKQIn9Lw3c0QIZgm78NfxodGKJFQ29aXD1Ao3ezMebenlOLrLD%2Fsp91ZXzl8eBBClDQSpz6cUYCWgF1obtYQUvue0Hr265qiAhivkl5pWGrM7rS6pchlH0UoPOsvF8FpF5HFIdYpqnIFsY06kyAa7SpTG1Lh2JMlI3pjsGjTP%2Bt1pNjFSqhBEpneSpc0YPg2Slh8NGjsXgATAasFj53klnWMLR%2FxGgi%2F6kQF7G6%2FTnTF5iKG5BlXxN29Hr80vj7%2F69YGimfH7WVaYfzYzVFM9yVAzY%2BlCM6O88z6dPHGFzYSnuHCaBO%2F3Zr1HQaMjodPFA30X8rxvmX%2Bcv2snrB%2FKrV7dbii3wTTxKO3DQHOhsablmdOi%2BXDdm1GOkZaC9OxyV09IyI5KATUnnXtGMJDaLq4Socre4iuFwPx%2FPR9PQgf2ooplqZLAoHWNp%2FMyENKE6NMhAnXRxu2ylF6Z1lti34OjoKSe4OfW8CJLD0faR328LXhgetM99KOdAbLmzDD%2Fd%2FBBjqkARf%2BcjDU0DYe1KTZujLmLImcLZmUB7Mtv2ruaUso5VwX68mt%2BzPx9AJSawKkTMHfNrBE0At8J8hsQqprcw6twqGTLLhIJtaM84yhukSXOBxTIZ3QF02DTO7kwEkoQITh6RZsznLeQYV3ua5ZIaZ5bDxszJz9IBp765X8KaAkleFPHVnKWd0n7tHqKZlYQEjeew%2Bpd42JHmSFESEtBN20QYIXEg1L&X-Amz-Signature=f04e107c4acf65559939082ecb06c27fb4f1ddf05fce0995df1c13207a1b1132&X-Amz-SignedHeaders=host&x-id=GetObject)
