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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4TZR2AU%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T070720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCdbIk1q8IESJCPO3OwRiw30hZikYZ95i%2BTlwybJufbtgIgHtYWxDbXNDksx48OsKLQyaZ5FrkWn5yyH7cIXLgS9cQqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEMnQvPxG08g7LyDmSrcA8zfeYqLsLE7Dc4Nc%2B8t6l2MAnk0UglO8yWxRUolmCu90j8AWP08cG6TNmo1er3ozDh1Eq64Z3WNC9jzXZy3Li%2F0ilhBT3npfgz8wSlON4zTSlTppiMa4fwKBZgrBD3e0DPtd1sgCqrbsxgWlBFFykTT5I38rGYh1k3N%2BN0LpuSaaQPHInBEnUnRt9NGbe6b%2FPyoQ8OQPpl8xGLF2D0HTQLhnO6DInYOvmkoe8hmsuQJmn41OaQa%2Fm7A9olwl7C66inTGL9Edv56TvdJ7Au%2F32Q9ydPqulUbIVyUZ%2BSOs04vlNwYk6Ifs%2BhA%2FnCYY1RQn%2BGwAKhGO3Kz3OtCzKQOiMlV32LzgA6f2d5WE4SlH%2FliXFMI9nRrLNZbpDrHlocwWi%2BhMleN0AqfzgeKS4LswwGImT05DXmhKGcm%2BYRDyRsDxrHn8hvAa7tiGmWSPtpdDMi8WWDtfbd5fx360ZC9t03PdMabrxgZwtP0ehy71EZPkHXyoF%2FGGmdTRLDXkfdGmu15dGJdaxb9kTZOLrGiX9ZJ2IMSc26G%2FiW51Xp%2FHrKtl0YBlzq4C39vfgrK3NChDMTH6srwUoIMRJmKtnnLXj%2FrDydIJ43K77PiftPq9RJ5kSiTExMwiEXZGiS8MJ7j%2Fb4GOqUBLvxDLUU12HZ6eyDKigjL1tPD1dl%2F4AKOSrbrpUgGN2RGTJExal%2FzX8rwggBNzaCtYUmFV0hd5Ph6lYW3ExsSYIC%2FZmKmNcFirJbkIkGWqJ8KMATAm4RGAR8j%2BG73C5Y067MyTl4Dp8oyYrZ3BI0RXVvKNXqGFbk9CYNlLxu08U4YYO4yKbq0XUjNe9SyDbHEsxWLptokU0CrhNCSFaRRX3AlxalU&X-Amz-Signature=140140a2afd04b3eb6bc374adb562a75ff605b90317b4891682103bb9a269707&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4TZR2AU%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T070720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCdbIk1q8IESJCPO3OwRiw30hZikYZ95i%2BTlwybJufbtgIgHtYWxDbXNDksx48OsKLQyaZ5FrkWn5yyH7cIXLgS9cQqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEMnQvPxG08g7LyDmSrcA8zfeYqLsLE7Dc4Nc%2B8t6l2MAnk0UglO8yWxRUolmCu90j8AWP08cG6TNmo1er3ozDh1Eq64Z3WNC9jzXZy3Li%2F0ilhBT3npfgz8wSlON4zTSlTppiMa4fwKBZgrBD3e0DPtd1sgCqrbsxgWlBFFykTT5I38rGYh1k3N%2BN0LpuSaaQPHInBEnUnRt9NGbe6b%2FPyoQ8OQPpl8xGLF2D0HTQLhnO6DInYOvmkoe8hmsuQJmn41OaQa%2Fm7A9olwl7C66inTGL9Edv56TvdJ7Au%2F32Q9ydPqulUbIVyUZ%2BSOs04vlNwYk6Ifs%2BhA%2FnCYY1RQn%2BGwAKhGO3Kz3OtCzKQOiMlV32LzgA6f2d5WE4SlH%2FliXFMI9nRrLNZbpDrHlocwWi%2BhMleN0AqfzgeKS4LswwGImT05DXmhKGcm%2BYRDyRsDxrHn8hvAa7tiGmWSPtpdDMi8WWDtfbd5fx360ZC9t03PdMabrxgZwtP0ehy71EZPkHXyoF%2FGGmdTRLDXkfdGmu15dGJdaxb9kTZOLrGiX9ZJ2IMSc26G%2FiW51Xp%2FHrKtl0YBlzq4C39vfgrK3NChDMTH6srwUoIMRJmKtnnLXj%2FrDydIJ43K77PiftPq9RJ5kSiTExMwiEXZGiS8MJ7j%2Fb4GOqUBLvxDLUU12HZ6eyDKigjL1tPD1dl%2F4AKOSrbrpUgGN2RGTJExal%2FzX8rwggBNzaCtYUmFV0hd5Ph6lYW3ExsSYIC%2FZmKmNcFirJbkIkGWqJ8KMATAm4RGAR8j%2BG73C5Y067MyTl4Dp8oyYrZ3BI0RXVvKNXqGFbk9CYNlLxu08U4YYO4yKbq0XUjNe9SyDbHEsxWLptokU0CrhNCSFaRRX3AlxalU&X-Amz-Signature=cd11db09bb8b58f882c07091611acf486ca4487b105de087b4112e9771ead5e9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4TZR2AU%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T070720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCdbIk1q8IESJCPO3OwRiw30hZikYZ95i%2BTlwybJufbtgIgHtYWxDbXNDksx48OsKLQyaZ5FrkWn5yyH7cIXLgS9cQqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEMnQvPxG08g7LyDmSrcA8zfeYqLsLE7Dc4Nc%2B8t6l2MAnk0UglO8yWxRUolmCu90j8AWP08cG6TNmo1er3ozDh1Eq64Z3WNC9jzXZy3Li%2F0ilhBT3npfgz8wSlON4zTSlTppiMa4fwKBZgrBD3e0DPtd1sgCqrbsxgWlBFFykTT5I38rGYh1k3N%2BN0LpuSaaQPHInBEnUnRt9NGbe6b%2FPyoQ8OQPpl8xGLF2D0HTQLhnO6DInYOvmkoe8hmsuQJmn41OaQa%2Fm7A9olwl7C66inTGL9Edv56TvdJ7Au%2F32Q9ydPqulUbIVyUZ%2BSOs04vlNwYk6Ifs%2BhA%2FnCYY1RQn%2BGwAKhGO3Kz3OtCzKQOiMlV32LzgA6f2d5WE4SlH%2FliXFMI9nRrLNZbpDrHlocwWi%2BhMleN0AqfzgeKS4LswwGImT05DXmhKGcm%2BYRDyRsDxrHn8hvAa7tiGmWSPtpdDMi8WWDtfbd5fx360ZC9t03PdMabrxgZwtP0ehy71EZPkHXyoF%2FGGmdTRLDXkfdGmu15dGJdaxb9kTZOLrGiX9ZJ2IMSc26G%2FiW51Xp%2FHrKtl0YBlzq4C39vfgrK3NChDMTH6srwUoIMRJmKtnnLXj%2FrDydIJ43K77PiftPq9RJ5kSiTExMwiEXZGiS8MJ7j%2Fb4GOqUBLvxDLUU12HZ6eyDKigjL1tPD1dl%2F4AKOSrbrpUgGN2RGTJExal%2FzX8rwggBNzaCtYUmFV0hd5Ph6lYW3ExsSYIC%2FZmKmNcFirJbkIkGWqJ8KMATAm4RGAR8j%2BG73C5Y067MyTl4Dp8oyYrZ3BI0RXVvKNXqGFbk9CYNlLxu08U4YYO4yKbq0XUjNe9SyDbHEsxWLptokU0CrhNCSFaRRX3AlxalU&X-Amz-Signature=de5c2725e96764f96c4bf599cddb1caa162c57564fd21a010599a73ca6a35a9c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4TZR2AU%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T070720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCdbIk1q8IESJCPO3OwRiw30hZikYZ95i%2BTlwybJufbtgIgHtYWxDbXNDksx48OsKLQyaZ5FrkWn5yyH7cIXLgS9cQqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEMnQvPxG08g7LyDmSrcA8zfeYqLsLE7Dc4Nc%2B8t6l2MAnk0UglO8yWxRUolmCu90j8AWP08cG6TNmo1er3ozDh1Eq64Z3WNC9jzXZy3Li%2F0ilhBT3npfgz8wSlON4zTSlTppiMa4fwKBZgrBD3e0DPtd1sgCqrbsxgWlBFFykTT5I38rGYh1k3N%2BN0LpuSaaQPHInBEnUnRt9NGbe6b%2FPyoQ8OQPpl8xGLF2D0HTQLhnO6DInYOvmkoe8hmsuQJmn41OaQa%2Fm7A9olwl7C66inTGL9Edv56TvdJ7Au%2F32Q9ydPqulUbIVyUZ%2BSOs04vlNwYk6Ifs%2BhA%2FnCYY1RQn%2BGwAKhGO3Kz3OtCzKQOiMlV32LzgA6f2d5WE4SlH%2FliXFMI9nRrLNZbpDrHlocwWi%2BhMleN0AqfzgeKS4LswwGImT05DXmhKGcm%2BYRDyRsDxrHn8hvAa7tiGmWSPtpdDMi8WWDtfbd5fx360ZC9t03PdMabrxgZwtP0ehy71EZPkHXyoF%2FGGmdTRLDXkfdGmu15dGJdaxb9kTZOLrGiX9ZJ2IMSc26G%2FiW51Xp%2FHrKtl0YBlzq4C39vfgrK3NChDMTH6srwUoIMRJmKtnnLXj%2FrDydIJ43K77PiftPq9RJ5kSiTExMwiEXZGiS8MJ7j%2Fb4GOqUBLvxDLUU12HZ6eyDKigjL1tPD1dl%2F4AKOSrbrpUgGN2RGTJExal%2FzX8rwggBNzaCtYUmFV0hd5Ph6lYW3ExsSYIC%2FZmKmNcFirJbkIkGWqJ8KMATAm4RGAR8j%2BG73C5Y067MyTl4Dp8oyYrZ3BI0RXVvKNXqGFbk9CYNlLxu08U4YYO4yKbq0XUjNe9SyDbHEsxWLptokU0CrhNCSFaRRX3AlxalU&X-Amz-Signature=5af59b36bb5dbca6fd9b1b008493bd90a2b7ed512f3f0dac26f00073a9d34fe8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4TZR2AU%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T070720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCdbIk1q8IESJCPO3OwRiw30hZikYZ95i%2BTlwybJufbtgIgHtYWxDbXNDksx48OsKLQyaZ5FrkWn5yyH7cIXLgS9cQqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEMnQvPxG08g7LyDmSrcA8zfeYqLsLE7Dc4Nc%2B8t6l2MAnk0UglO8yWxRUolmCu90j8AWP08cG6TNmo1er3ozDh1Eq64Z3WNC9jzXZy3Li%2F0ilhBT3npfgz8wSlON4zTSlTppiMa4fwKBZgrBD3e0DPtd1sgCqrbsxgWlBFFykTT5I38rGYh1k3N%2BN0LpuSaaQPHInBEnUnRt9NGbe6b%2FPyoQ8OQPpl8xGLF2D0HTQLhnO6DInYOvmkoe8hmsuQJmn41OaQa%2Fm7A9olwl7C66inTGL9Edv56TvdJ7Au%2F32Q9ydPqulUbIVyUZ%2BSOs04vlNwYk6Ifs%2BhA%2FnCYY1RQn%2BGwAKhGO3Kz3OtCzKQOiMlV32LzgA6f2d5WE4SlH%2FliXFMI9nRrLNZbpDrHlocwWi%2BhMleN0AqfzgeKS4LswwGImT05DXmhKGcm%2BYRDyRsDxrHn8hvAa7tiGmWSPtpdDMi8WWDtfbd5fx360ZC9t03PdMabrxgZwtP0ehy71EZPkHXyoF%2FGGmdTRLDXkfdGmu15dGJdaxb9kTZOLrGiX9ZJ2IMSc26G%2FiW51Xp%2FHrKtl0YBlzq4C39vfgrK3NChDMTH6srwUoIMRJmKtnnLXj%2FrDydIJ43K77PiftPq9RJ5kSiTExMwiEXZGiS8MJ7j%2Fb4GOqUBLvxDLUU12HZ6eyDKigjL1tPD1dl%2F4AKOSrbrpUgGN2RGTJExal%2FzX8rwggBNzaCtYUmFV0hd5Ph6lYW3ExsSYIC%2FZmKmNcFirJbkIkGWqJ8KMATAm4RGAR8j%2BG73C5Y067MyTl4Dp8oyYrZ3BI0RXVvKNXqGFbk9CYNlLxu08U4YYO4yKbq0XUjNe9SyDbHEsxWLptokU0CrhNCSFaRRX3AlxalU&X-Amz-Signature=c7cb9f0ddb225ad6e911eee5422125cdd4237d7ce9a2f91f2fb29aba53c6f879&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4TZR2AU%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T070720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCdbIk1q8IESJCPO3OwRiw30hZikYZ95i%2BTlwybJufbtgIgHtYWxDbXNDksx48OsKLQyaZ5FrkWn5yyH7cIXLgS9cQqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEMnQvPxG08g7LyDmSrcA8zfeYqLsLE7Dc4Nc%2B8t6l2MAnk0UglO8yWxRUolmCu90j8AWP08cG6TNmo1er3ozDh1Eq64Z3WNC9jzXZy3Li%2F0ilhBT3npfgz8wSlON4zTSlTppiMa4fwKBZgrBD3e0DPtd1sgCqrbsxgWlBFFykTT5I38rGYh1k3N%2BN0LpuSaaQPHInBEnUnRt9NGbe6b%2FPyoQ8OQPpl8xGLF2D0HTQLhnO6DInYOvmkoe8hmsuQJmn41OaQa%2Fm7A9olwl7C66inTGL9Edv56TvdJ7Au%2F32Q9ydPqulUbIVyUZ%2BSOs04vlNwYk6Ifs%2BhA%2FnCYY1RQn%2BGwAKhGO3Kz3OtCzKQOiMlV32LzgA6f2d5WE4SlH%2FliXFMI9nRrLNZbpDrHlocwWi%2BhMleN0AqfzgeKS4LswwGImT05DXmhKGcm%2BYRDyRsDxrHn8hvAa7tiGmWSPtpdDMi8WWDtfbd5fx360ZC9t03PdMabrxgZwtP0ehy71EZPkHXyoF%2FGGmdTRLDXkfdGmu15dGJdaxb9kTZOLrGiX9ZJ2IMSc26G%2FiW51Xp%2FHrKtl0YBlzq4C39vfgrK3NChDMTH6srwUoIMRJmKtnnLXj%2FrDydIJ43K77PiftPq9RJ5kSiTExMwiEXZGiS8MJ7j%2Fb4GOqUBLvxDLUU12HZ6eyDKigjL1tPD1dl%2F4AKOSrbrpUgGN2RGTJExal%2FzX8rwggBNzaCtYUmFV0hd5Ph6lYW3ExsSYIC%2FZmKmNcFirJbkIkGWqJ8KMATAm4RGAR8j%2BG73C5Y067MyTl4Dp8oyYrZ3BI0RXVvKNXqGFbk9CYNlLxu08U4YYO4yKbq0XUjNe9SyDbHEsxWLptokU0CrhNCSFaRRX3AlxalU&X-Amz-Signature=98246febb0484868939c703ecae4ee0fa53e868ca820a5b4f9dccd64235d48f1&X-Amz-SignedHeaders=host&x-id=GetObject)
