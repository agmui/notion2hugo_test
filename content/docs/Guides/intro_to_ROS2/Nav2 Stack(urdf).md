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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MNKAAYM%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T150921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCIXLVFYtwUkv3PhF1VttQhY6QCVoifaey3Zp4em%2FZLswIgS%2FbEDEpioiA6qnYTmGMvp4RvC9tnfB0wjvRdyGlseuMq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDJNcZGKYAP5loBncRCrcA%2BZ3nyD73byNex%2B0L4mtoHI8RYtQjA5fQg51jNQ9dmss24chNAuFVCHKeoTVtDH2bju4qScDtk140KxJj9k5%2FJnPpHsyQ2P1%2BEY1vsEhoNT0J0NPxxJGsrkDAGycAFE9Kc7rh%2BrBssp%2BihjFSH9aohJuS8053VQ6k%2FglRrIX%2FDSZcJsrhGq%2BGWuXDRVwjJ8biPYWkjBtCK4oO99rD0cLXW5U2L7gdCS5VArb%2FFugP%2FhvjTJszvUvVmnuDGqg599Pm68fclG8uCOXBNlSnn1TExwMumstniMDtksy4KbW0Rt9g7Qm1sW3SopElPsm%2F3Keaax%2Bm1%2FhKQ40yMd%2B2HtjYTjAW140wbiRzq8zi3FFHxjc8GXmKfxdRENko8GEmQhA0WtUi%2FyEdp4WYGQg3CR7i%2BeMTNWhfCXS6kiIlwu0hI%2Bv9zFwJq95Ob0mJ5raF%2Bv6MdBfFrvgQR8Ho9gEVX5mCYXquCVrIX%2FT7IdD1DruWUC1etSKbmmvwns7EQeoxWdc3egZpsxbunyZI5oTReCDaMdLaAchAr9wS09CzVAiSkdYoCS8ZteXzTqoLOTB9VD4WHr4XDMsLF74vFUbeHiuSOxP9PGU9ZAgbTzJDRMgJH2Ubsp8U9I59YEetRPxMIyc9cIGOqUB3FgT%2BuLdWv82pUB%2B8v0auHreJ6byMB4t1yWV2dwlx%2BOdWW99IMwqdSMeDhfH4FOfBjjIyTx%2Bib3AA%2FyU1Ss8gMnap%2Bb7xfDtCPRpuDnCI46zfBPyQWYOr3pLWu%2Fw3hKntYZf2ohEZjq%2FBAvQOFlh0PGsc94rMAD7R33W9zvYe0eb1AEkIc9hGKpqaTTX8i3yV9umwPaPo%2FLU1ayiHCe6tehlyYtr&X-Amz-Signature=fb2a70c5b7403c65c7287ab48f654dda4c4b0051f328552167ed957628bac565&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MNKAAYM%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T150921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCIXLVFYtwUkv3PhF1VttQhY6QCVoifaey3Zp4em%2FZLswIgS%2FbEDEpioiA6qnYTmGMvp4RvC9tnfB0wjvRdyGlseuMq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDJNcZGKYAP5loBncRCrcA%2BZ3nyD73byNex%2B0L4mtoHI8RYtQjA5fQg51jNQ9dmss24chNAuFVCHKeoTVtDH2bju4qScDtk140KxJj9k5%2FJnPpHsyQ2P1%2BEY1vsEhoNT0J0NPxxJGsrkDAGycAFE9Kc7rh%2BrBssp%2BihjFSH9aohJuS8053VQ6k%2FglRrIX%2FDSZcJsrhGq%2BGWuXDRVwjJ8biPYWkjBtCK4oO99rD0cLXW5U2L7gdCS5VArb%2FFugP%2FhvjTJszvUvVmnuDGqg599Pm68fclG8uCOXBNlSnn1TExwMumstniMDtksy4KbW0Rt9g7Qm1sW3SopElPsm%2F3Keaax%2Bm1%2FhKQ40yMd%2B2HtjYTjAW140wbiRzq8zi3FFHxjc8GXmKfxdRENko8GEmQhA0WtUi%2FyEdp4WYGQg3CR7i%2BeMTNWhfCXS6kiIlwu0hI%2Bv9zFwJq95Ob0mJ5raF%2Bv6MdBfFrvgQR8Ho9gEVX5mCYXquCVrIX%2FT7IdD1DruWUC1etSKbmmvwns7EQeoxWdc3egZpsxbunyZI5oTReCDaMdLaAchAr9wS09CzVAiSkdYoCS8ZteXzTqoLOTB9VD4WHr4XDMsLF74vFUbeHiuSOxP9PGU9ZAgbTzJDRMgJH2Ubsp8U9I59YEetRPxMIyc9cIGOqUB3FgT%2BuLdWv82pUB%2B8v0auHreJ6byMB4t1yWV2dwlx%2BOdWW99IMwqdSMeDhfH4FOfBjjIyTx%2Bib3AA%2FyU1Ss8gMnap%2Bb7xfDtCPRpuDnCI46zfBPyQWYOr3pLWu%2Fw3hKntYZf2ohEZjq%2FBAvQOFlh0PGsc94rMAD7R33W9zvYe0eb1AEkIc9hGKpqaTTX8i3yV9umwPaPo%2FLU1ayiHCe6tehlyYtr&X-Amz-Signature=f548cb97e3b32f65926802260fde521953d0c7a2372d542339eef5dabed04e61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MNKAAYM%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T150921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCIXLVFYtwUkv3PhF1VttQhY6QCVoifaey3Zp4em%2FZLswIgS%2FbEDEpioiA6qnYTmGMvp4RvC9tnfB0wjvRdyGlseuMq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDJNcZGKYAP5loBncRCrcA%2BZ3nyD73byNex%2B0L4mtoHI8RYtQjA5fQg51jNQ9dmss24chNAuFVCHKeoTVtDH2bju4qScDtk140KxJj9k5%2FJnPpHsyQ2P1%2BEY1vsEhoNT0J0NPxxJGsrkDAGycAFE9Kc7rh%2BrBssp%2BihjFSH9aohJuS8053VQ6k%2FglRrIX%2FDSZcJsrhGq%2BGWuXDRVwjJ8biPYWkjBtCK4oO99rD0cLXW5U2L7gdCS5VArb%2FFugP%2FhvjTJszvUvVmnuDGqg599Pm68fclG8uCOXBNlSnn1TExwMumstniMDtksy4KbW0Rt9g7Qm1sW3SopElPsm%2F3Keaax%2Bm1%2FhKQ40yMd%2B2HtjYTjAW140wbiRzq8zi3FFHxjc8GXmKfxdRENko8GEmQhA0WtUi%2FyEdp4WYGQg3CR7i%2BeMTNWhfCXS6kiIlwu0hI%2Bv9zFwJq95Ob0mJ5raF%2Bv6MdBfFrvgQR8Ho9gEVX5mCYXquCVrIX%2FT7IdD1DruWUC1etSKbmmvwns7EQeoxWdc3egZpsxbunyZI5oTReCDaMdLaAchAr9wS09CzVAiSkdYoCS8ZteXzTqoLOTB9VD4WHr4XDMsLF74vFUbeHiuSOxP9PGU9ZAgbTzJDRMgJH2Ubsp8U9I59YEetRPxMIyc9cIGOqUB3FgT%2BuLdWv82pUB%2B8v0auHreJ6byMB4t1yWV2dwlx%2BOdWW99IMwqdSMeDhfH4FOfBjjIyTx%2Bib3AA%2FyU1Ss8gMnap%2Bb7xfDtCPRpuDnCI46zfBPyQWYOr3pLWu%2Fw3hKntYZf2ohEZjq%2FBAvQOFlh0PGsc94rMAD7R33W9zvYe0eb1AEkIc9hGKpqaTTX8i3yV9umwPaPo%2FLU1ayiHCe6tehlyYtr&X-Amz-Signature=6a5bc1c174874bbcbccf9b4cb8c182fc850cc4469d8af36957eda791979546ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MNKAAYM%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T150921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCIXLVFYtwUkv3PhF1VttQhY6QCVoifaey3Zp4em%2FZLswIgS%2FbEDEpioiA6qnYTmGMvp4RvC9tnfB0wjvRdyGlseuMq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDJNcZGKYAP5loBncRCrcA%2BZ3nyD73byNex%2B0L4mtoHI8RYtQjA5fQg51jNQ9dmss24chNAuFVCHKeoTVtDH2bju4qScDtk140KxJj9k5%2FJnPpHsyQ2P1%2BEY1vsEhoNT0J0NPxxJGsrkDAGycAFE9Kc7rh%2BrBssp%2BihjFSH9aohJuS8053VQ6k%2FglRrIX%2FDSZcJsrhGq%2BGWuXDRVwjJ8biPYWkjBtCK4oO99rD0cLXW5U2L7gdCS5VArb%2FFugP%2FhvjTJszvUvVmnuDGqg599Pm68fclG8uCOXBNlSnn1TExwMumstniMDtksy4KbW0Rt9g7Qm1sW3SopElPsm%2F3Keaax%2Bm1%2FhKQ40yMd%2B2HtjYTjAW140wbiRzq8zi3FFHxjc8GXmKfxdRENko8GEmQhA0WtUi%2FyEdp4WYGQg3CR7i%2BeMTNWhfCXS6kiIlwu0hI%2Bv9zFwJq95Ob0mJ5raF%2Bv6MdBfFrvgQR8Ho9gEVX5mCYXquCVrIX%2FT7IdD1DruWUC1etSKbmmvwns7EQeoxWdc3egZpsxbunyZI5oTReCDaMdLaAchAr9wS09CzVAiSkdYoCS8ZteXzTqoLOTB9VD4WHr4XDMsLF74vFUbeHiuSOxP9PGU9ZAgbTzJDRMgJH2Ubsp8U9I59YEetRPxMIyc9cIGOqUB3FgT%2BuLdWv82pUB%2B8v0auHreJ6byMB4t1yWV2dwlx%2BOdWW99IMwqdSMeDhfH4FOfBjjIyTx%2Bib3AA%2FyU1Ss8gMnap%2Bb7xfDtCPRpuDnCI46zfBPyQWYOr3pLWu%2Fw3hKntYZf2ohEZjq%2FBAvQOFlh0PGsc94rMAD7R33W9zvYe0eb1AEkIc9hGKpqaTTX8i3yV9umwPaPo%2FLU1ayiHCe6tehlyYtr&X-Amz-Signature=ee32adccff0754dbafe36778d69115d6ca70b8dafa49f9d63a6363d9087a05b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MNKAAYM%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T150921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCIXLVFYtwUkv3PhF1VttQhY6QCVoifaey3Zp4em%2FZLswIgS%2FbEDEpioiA6qnYTmGMvp4RvC9tnfB0wjvRdyGlseuMq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDJNcZGKYAP5loBncRCrcA%2BZ3nyD73byNex%2B0L4mtoHI8RYtQjA5fQg51jNQ9dmss24chNAuFVCHKeoTVtDH2bju4qScDtk140KxJj9k5%2FJnPpHsyQ2P1%2BEY1vsEhoNT0J0NPxxJGsrkDAGycAFE9Kc7rh%2BrBssp%2BihjFSH9aohJuS8053VQ6k%2FglRrIX%2FDSZcJsrhGq%2BGWuXDRVwjJ8biPYWkjBtCK4oO99rD0cLXW5U2L7gdCS5VArb%2FFugP%2FhvjTJszvUvVmnuDGqg599Pm68fclG8uCOXBNlSnn1TExwMumstniMDtksy4KbW0Rt9g7Qm1sW3SopElPsm%2F3Keaax%2Bm1%2FhKQ40yMd%2B2HtjYTjAW140wbiRzq8zi3FFHxjc8GXmKfxdRENko8GEmQhA0WtUi%2FyEdp4WYGQg3CR7i%2BeMTNWhfCXS6kiIlwu0hI%2Bv9zFwJq95Ob0mJ5raF%2Bv6MdBfFrvgQR8Ho9gEVX5mCYXquCVrIX%2FT7IdD1DruWUC1etSKbmmvwns7EQeoxWdc3egZpsxbunyZI5oTReCDaMdLaAchAr9wS09CzVAiSkdYoCS8ZteXzTqoLOTB9VD4WHr4XDMsLF74vFUbeHiuSOxP9PGU9ZAgbTzJDRMgJH2Ubsp8U9I59YEetRPxMIyc9cIGOqUB3FgT%2BuLdWv82pUB%2B8v0auHreJ6byMB4t1yWV2dwlx%2BOdWW99IMwqdSMeDhfH4FOfBjjIyTx%2Bib3AA%2FyU1Ss8gMnap%2Bb7xfDtCPRpuDnCI46zfBPyQWYOr3pLWu%2Fw3hKntYZf2ohEZjq%2FBAvQOFlh0PGsc94rMAD7R33W9zvYe0eb1AEkIc9hGKpqaTTX8i3yV9umwPaPo%2FLU1ayiHCe6tehlyYtr&X-Amz-Signature=8698e6bfd37d5ac6dadc5e6d36b39efebc93126b257620979be7835d1892ec71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MNKAAYM%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T150921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCIXLVFYtwUkv3PhF1VttQhY6QCVoifaey3Zp4em%2FZLswIgS%2FbEDEpioiA6qnYTmGMvp4RvC9tnfB0wjvRdyGlseuMq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDJNcZGKYAP5loBncRCrcA%2BZ3nyD73byNex%2B0L4mtoHI8RYtQjA5fQg51jNQ9dmss24chNAuFVCHKeoTVtDH2bju4qScDtk140KxJj9k5%2FJnPpHsyQ2P1%2BEY1vsEhoNT0J0NPxxJGsrkDAGycAFE9Kc7rh%2BrBssp%2BihjFSH9aohJuS8053VQ6k%2FglRrIX%2FDSZcJsrhGq%2BGWuXDRVwjJ8biPYWkjBtCK4oO99rD0cLXW5U2L7gdCS5VArb%2FFugP%2FhvjTJszvUvVmnuDGqg599Pm68fclG8uCOXBNlSnn1TExwMumstniMDtksy4KbW0Rt9g7Qm1sW3SopElPsm%2F3Keaax%2Bm1%2FhKQ40yMd%2B2HtjYTjAW140wbiRzq8zi3FFHxjc8GXmKfxdRENko8GEmQhA0WtUi%2FyEdp4WYGQg3CR7i%2BeMTNWhfCXS6kiIlwu0hI%2Bv9zFwJq95Ob0mJ5raF%2Bv6MdBfFrvgQR8Ho9gEVX5mCYXquCVrIX%2FT7IdD1DruWUC1etSKbmmvwns7EQeoxWdc3egZpsxbunyZI5oTReCDaMdLaAchAr9wS09CzVAiSkdYoCS8ZteXzTqoLOTB9VD4WHr4XDMsLF74vFUbeHiuSOxP9PGU9ZAgbTzJDRMgJH2Ubsp8U9I59YEetRPxMIyc9cIGOqUB3FgT%2BuLdWv82pUB%2B8v0auHreJ6byMB4t1yWV2dwlx%2BOdWW99IMwqdSMeDhfH4FOfBjjIyTx%2Bib3AA%2FyU1Ss8gMnap%2Bb7xfDtCPRpuDnCI46zfBPyQWYOr3pLWu%2Fw3hKntYZf2ohEZjq%2FBAvQOFlh0PGsc94rMAD7R33W9zvYe0eb1AEkIc9hGKpqaTTX8i3yV9umwPaPo%2FLU1ayiHCe6tehlyYtr&X-Amz-Signature=5f6a0f9779697417ea18c9afaf4e072c84a461f824dd58b15574953134306327&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
