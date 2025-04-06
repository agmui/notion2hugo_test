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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RUIXFUR%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd28X7%2BV%2FAnp%2BDcldIcg%2BLgHDwlcyIh%2FRztLIdKIK90AIgeomqEBxPaWeytrmjFEMaWHAiUM33%2BGo%2FOn15jzucY90q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDEUtXQkA6BbYV6A1PyrcA2bpfyruPx3mCqlHvR%2BKpGNA3ArLhyiCp5DaM1%2F31%2BStcNB4i%2F5HrY113A96CWPliCet47hoUPOHPkjiZkAB1LJURTdZ9n2lvLFuCNrEGSbdZRKirxx8K2lLxHD5xSTxqgSY1H11draSHodxbS%2BJU8OnojJ2QBj1iJHJGbgu%2BlyIlnPbj5WiPVwgbaJaAYBqJt0N%2B3cP%2FVVcPFxDMC5qwQytNUNN5VVcHgjEsRkvF8eeWX%2B283CEPLPAc1kA4NwujmXXB8SjDXU1zB%2Biw3NRt3sBDpOA13FdaLvWRHotTLhdHWeWHkB%2B%2B%2Be8x1hGg6t9wOWCsmOyOlapn6kqorfjr%2B%2BZLqAzbu3R4FW3aEf04EZFyiLmaaKXH92p2ET7NnOOe2bB%2BDolhybB7M0i3YNxsgobIzInrLU4KLEMu%2FrEDbtSdefOW9cRCLCVjGVFHe6Odn3OqFo1uTYfL%2BV8khi2umWSHcfqB1Vn%2FWwYgDifkj7jYKw5FF7C7ndF%2BM9tigs0KaJ2%2FZ4b%2FbKZKknk0fKIhhUi7W93aSu8GcrpwiQ5v%2F2dY5diTTzgHloOVtc%2F4dkz%2BCuockwmhkCcLXAWIKF84ran6tPSCKCloEp9nCtySxIimn5bLL0QCDLCd22cMOGdy78GOqUBeM2BLm%2BtAF5oOV25vYhlo500JUBjR1e27k2D0KYWt4BuGEG9Fl3z8d2po02DZzvls2x1z4ggTQVvERyWU2X%2F%2BgsCaX52NncBdhsgZRulwOje7jDgjSUcQVb6M%2BIRAh7VKwdJZtr5e65pC9AdgjWWRTs2qx4FV1VC9a9Lv9MiBJ1%2Bd98ywWarXyTc%2BouBOW%2FmDhFieo7dqwRTDxi0HWtv7kELSokP&X-Amz-Signature=b463abc87df8cc3be08de34409eed663e595f3591617e98f957c0eb7caa6e7c7&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RUIXFUR%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd28X7%2BV%2FAnp%2BDcldIcg%2BLgHDwlcyIh%2FRztLIdKIK90AIgeomqEBxPaWeytrmjFEMaWHAiUM33%2BGo%2FOn15jzucY90q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDEUtXQkA6BbYV6A1PyrcA2bpfyruPx3mCqlHvR%2BKpGNA3ArLhyiCp5DaM1%2F31%2BStcNB4i%2F5HrY113A96CWPliCet47hoUPOHPkjiZkAB1LJURTdZ9n2lvLFuCNrEGSbdZRKirxx8K2lLxHD5xSTxqgSY1H11draSHodxbS%2BJU8OnojJ2QBj1iJHJGbgu%2BlyIlnPbj5WiPVwgbaJaAYBqJt0N%2B3cP%2FVVcPFxDMC5qwQytNUNN5VVcHgjEsRkvF8eeWX%2B283CEPLPAc1kA4NwujmXXB8SjDXU1zB%2Biw3NRt3sBDpOA13FdaLvWRHotTLhdHWeWHkB%2B%2B%2Be8x1hGg6t9wOWCsmOyOlapn6kqorfjr%2B%2BZLqAzbu3R4FW3aEf04EZFyiLmaaKXH92p2ET7NnOOe2bB%2BDolhybB7M0i3YNxsgobIzInrLU4KLEMu%2FrEDbtSdefOW9cRCLCVjGVFHe6Odn3OqFo1uTYfL%2BV8khi2umWSHcfqB1Vn%2FWwYgDifkj7jYKw5FF7C7ndF%2BM9tigs0KaJ2%2FZ4b%2FbKZKknk0fKIhhUi7W93aSu8GcrpwiQ5v%2F2dY5diTTzgHloOVtc%2F4dkz%2BCuockwmhkCcLXAWIKF84ran6tPSCKCloEp9nCtySxIimn5bLL0QCDLCd22cMOGdy78GOqUBeM2BLm%2BtAF5oOV25vYhlo500JUBjR1e27k2D0KYWt4BuGEG9Fl3z8d2po02DZzvls2x1z4ggTQVvERyWU2X%2F%2BgsCaX52NncBdhsgZRulwOje7jDgjSUcQVb6M%2BIRAh7VKwdJZtr5e65pC9AdgjWWRTs2qx4FV1VC9a9Lv9MiBJ1%2Bd98ywWarXyTc%2BouBOW%2FmDhFieo7dqwRTDxi0HWtv7kELSokP&X-Amz-Signature=0468aad42bc5e5e4405c25c6e4c0487bda2d01fd22364809f4b5280747de8bb3&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RUIXFUR%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd28X7%2BV%2FAnp%2BDcldIcg%2BLgHDwlcyIh%2FRztLIdKIK90AIgeomqEBxPaWeytrmjFEMaWHAiUM33%2BGo%2FOn15jzucY90q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDEUtXQkA6BbYV6A1PyrcA2bpfyruPx3mCqlHvR%2BKpGNA3ArLhyiCp5DaM1%2F31%2BStcNB4i%2F5HrY113A96CWPliCet47hoUPOHPkjiZkAB1LJURTdZ9n2lvLFuCNrEGSbdZRKirxx8K2lLxHD5xSTxqgSY1H11draSHodxbS%2BJU8OnojJ2QBj1iJHJGbgu%2BlyIlnPbj5WiPVwgbaJaAYBqJt0N%2B3cP%2FVVcPFxDMC5qwQytNUNN5VVcHgjEsRkvF8eeWX%2B283CEPLPAc1kA4NwujmXXB8SjDXU1zB%2Biw3NRt3sBDpOA13FdaLvWRHotTLhdHWeWHkB%2B%2B%2Be8x1hGg6t9wOWCsmOyOlapn6kqorfjr%2B%2BZLqAzbu3R4FW3aEf04EZFyiLmaaKXH92p2ET7NnOOe2bB%2BDolhybB7M0i3YNxsgobIzInrLU4KLEMu%2FrEDbtSdefOW9cRCLCVjGVFHe6Odn3OqFo1uTYfL%2BV8khi2umWSHcfqB1Vn%2FWwYgDifkj7jYKw5FF7C7ndF%2BM9tigs0KaJ2%2FZ4b%2FbKZKknk0fKIhhUi7W93aSu8GcrpwiQ5v%2F2dY5diTTzgHloOVtc%2F4dkz%2BCuockwmhkCcLXAWIKF84ran6tPSCKCloEp9nCtySxIimn5bLL0QCDLCd22cMOGdy78GOqUBeM2BLm%2BtAF5oOV25vYhlo500JUBjR1e27k2D0KYWt4BuGEG9Fl3z8d2po02DZzvls2x1z4ggTQVvERyWU2X%2F%2BgsCaX52NncBdhsgZRulwOje7jDgjSUcQVb6M%2BIRAh7VKwdJZtr5e65pC9AdgjWWRTs2qx4FV1VC9a9Lv9MiBJ1%2Bd98ywWarXyTc%2BouBOW%2FmDhFieo7dqwRTDxi0HWtv7kELSokP&X-Amz-Signature=7f5af7fc38beec1a524ee92da280bd96eb2256c0d9baa0c3024baf2c326689aa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RUIXFUR%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd28X7%2BV%2FAnp%2BDcldIcg%2BLgHDwlcyIh%2FRztLIdKIK90AIgeomqEBxPaWeytrmjFEMaWHAiUM33%2BGo%2FOn15jzucY90q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDEUtXQkA6BbYV6A1PyrcA2bpfyruPx3mCqlHvR%2BKpGNA3ArLhyiCp5DaM1%2F31%2BStcNB4i%2F5HrY113A96CWPliCet47hoUPOHPkjiZkAB1LJURTdZ9n2lvLFuCNrEGSbdZRKirxx8K2lLxHD5xSTxqgSY1H11draSHodxbS%2BJU8OnojJ2QBj1iJHJGbgu%2BlyIlnPbj5WiPVwgbaJaAYBqJt0N%2B3cP%2FVVcPFxDMC5qwQytNUNN5VVcHgjEsRkvF8eeWX%2B283CEPLPAc1kA4NwujmXXB8SjDXU1zB%2Biw3NRt3sBDpOA13FdaLvWRHotTLhdHWeWHkB%2B%2B%2Be8x1hGg6t9wOWCsmOyOlapn6kqorfjr%2B%2BZLqAzbu3R4FW3aEf04EZFyiLmaaKXH92p2ET7NnOOe2bB%2BDolhybB7M0i3YNxsgobIzInrLU4KLEMu%2FrEDbtSdefOW9cRCLCVjGVFHe6Odn3OqFo1uTYfL%2BV8khi2umWSHcfqB1Vn%2FWwYgDifkj7jYKw5FF7C7ndF%2BM9tigs0KaJ2%2FZ4b%2FbKZKknk0fKIhhUi7W93aSu8GcrpwiQ5v%2F2dY5diTTzgHloOVtc%2F4dkz%2BCuockwmhkCcLXAWIKF84ran6tPSCKCloEp9nCtySxIimn5bLL0QCDLCd22cMOGdy78GOqUBeM2BLm%2BtAF5oOV25vYhlo500JUBjR1e27k2D0KYWt4BuGEG9Fl3z8d2po02DZzvls2x1z4ggTQVvERyWU2X%2F%2BgsCaX52NncBdhsgZRulwOje7jDgjSUcQVb6M%2BIRAh7VKwdJZtr5e65pC9AdgjWWRTs2qx4FV1VC9a9Lv9MiBJ1%2Bd98ywWarXyTc%2BouBOW%2FmDhFieo7dqwRTDxi0HWtv7kELSokP&X-Amz-Signature=bfe02f263237fef4d0ca0a64d4930d69d31511543509cc74e9d6f67e5cf29b29&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RUIXFUR%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd28X7%2BV%2FAnp%2BDcldIcg%2BLgHDwlcyIh%2FRztLIdKIK90AIgeomqEBxPaWeytrmjFEMaWHAiUM33%2BGo%2FOn15jzucY90q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDEUtXQkA6BbYV6A1PyrcA2bpfyruPx3mCqlHvR%2BKpGNA3ArLhyiCp5DaM1%2F31%2BStcNB4i%2F5HrY113A96CWPliCet47hoUPOHPkjiZkAB1LJURTdZ9n2lvLFuCNrEGSbdZRKirxx8K2lLxHD5xSTxqgSY1H11draSHodxbS%2BJU8OnojJ2QBj1iJHJGbgu%2BlyIlnPbj5WiPVwgbaJaAYBqJt0N%2B3cP%2FVVcPFxDMC5qwQytNUNN5VVcHgjEsRkvF8eeWX%2B283CEPLPAc1kA4NwujmXXB8SjDXU1zB%2Biw3NRt3sBDpOA13FdaLvWRHotTLhdHWeWHkB%2B%2B%2Be8x1hGg6t9wOWCsmOyOlapn6kqorfjr%2B%2BZLqAzbu3R4FW3aEf04EZFyiLmaaKXH92p2ET7NnOOe2bB%2BDolhybB7M0i3YNxsgobIzInrLU4KLEMu%2FrEDbtSdefOW9cRCLCVjGVFHe6Odn3OqFo1uTYfL%2BV8khi2umWSHcfqB1Vn%2FWwYgDifkj7jYKw5FF7C7ndF%2BM9tigs0KaJ2%2FZ4b%2FbKZKknk0fKIhhUi7W93aSu8GcrpwiQ5v%2F2dY5diTTzgHloOVtc%2F4dkz%2BCuockwmhkCcLXAWIKF84ran6tPSCKCloEp9nCtySxIimn5bLL0QCDLCd22cMOGdy78GOqUBeM2BLm%2BtAF5oOV25vYhlo500JUBjR1e27k2D0KYWt4BuGEG9Fl3z8d2po02DZzvls2x1z4ggTQVvERyWU2X%2F%2BgsCaX52NncBdhsgZRulwOje7jDgjSUcQVb6M%2BIRAh7VKwdJZtr5e65pC9AdgjWWRTs2qx4FV1VC9a9Lv9MiBJ1%2Bd98ywWarXyTc%2BouBOW%2FmDhFieo7dqwRTDxi0HWtv7kELSokP&X-Amz-Signature=75c90a6e655ae5ab84cd2f70b06424854ecf0db8a51fed186503a58ca1eeea0c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RUIXFUR%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDd28X7%2BV%2FAnp%2BDcldIcg%2BLgHDwlcyIh%2FRztLIdKIK90AIgeomqEBxPaWeytrmjFEMaWHAiUM33%2BGo%2FOn15jzucY90q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDEUtXQkA6BbYV6A1PyrcA2bpfyruPx3mCqlHvR%2BKpGNA3ArLhyiCp5DaM1%2F31%2BStcNB4i%2F5HrY113A96CWPliCet47hoUPOHPkjiZkAB1LJURTdZ9n2lvLFuCNrEGSbdZRKirxx8K2lLxHD5xSTxqgSY1H11draSHodxbS%2BJU8OnojJ2QBj1iJHJGbgu%2BlyIlnPbj5WiPVwgbaJaAYBqJt0N%2B3cP%2FVVcPFxDMC5qwQytNUNN5VVcHgjEsRkvF8eeWX%2B283CEPLPAc1kA4NwujmXXB8SjDXU1zB%2Biw3NRt3sBDpOA13FdaLvWRHotTLhdHWeWHkB%2B%2B%2Be8x1hGg6t9wOWCsmOyOlapn6kqorfjr%2B%2BZLqAzbu3R4FW3aEf04EZFyiLmaaKXH92p2ET7NnOOe2bB%2BDolhybB7M0i3YNxsgobIzInrLU4KLEMu%2FrEDbtSdefOW9cRCLCVjGVFHe6Odn3OqFo1uTYfL%2BV8khi2umWSHcfqB1Vn%2FWwYgDifkj7jYKw5FF7C7ndF%2BM9tigs0KaJ2%2FZ4b%2FbKZKknk0fKIhhUi7W93aSu8GcrpwiQ5v%2F2dY5diTTzgHloOVtc%2F4dkz%2BCuockwmhkCcLXAWIKF84ran6tPSCKCloEp9nCtySxIimn5bLL0QCDLCd22cMOGdy78GOqUBeM2BLm%2BtAF5oOV25vYhlo500JUBjR1e27k2D0KYWt4BuGEG9Fl3z8d2po02DZzvls2x1z4ggTQVvERyWU2X%2F%2BgsCaX52NncBdhsgZRulwOje7jDgjSUcQVb6M%2BIRAh7VKwdJZtr5e65pC9AdgjWWRTs2qx4FV1VC9a9Lv9MiBJ1%2Bd98ywWarXyTc%2BouBOW%2FmDhFieo7dqwRTDxi0HWtv7kELSokP&X-Amz-Signature=225c9d5f63984cc034a86034e0c50dcd59fd0853d4a47226d7be33bf1af015fc&X-Amz-SignedHeaders=host&x-id=GetObject)
