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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646XAMAMM%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T090950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIEKB2mrwW5D3ht%2BOQu5QDJ%2F6hEOeaA6DHqdh%2Bm4xdoH6AiEAkEgL2kmJuV4lDUcNPUXL9YYBNQdzKCWU8VCI2A00ymsqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZSruNTgaOrYfoSdSrcA8FvnNQwhJcl83FjL2N8AGzyyWUv2LHNZQonLpGedIDrq%2FGpxmcgmKOkEzflAIdHQd%2FzJ7cUa2GnZsrJHbPpiWaLuPesrB2AVw1S0srSO7OzkV%2FvXD9wBBB7SG4YWU9LpGG4SBh4dPgeGrWg81N75xYBDFCVA%2Bq7bCvXkPvsDXTDJG4K%2F9Is0FNNqgQYJrjw1XuFtLJKkungdCzbgusY4n685ZtRPVWjfj1otBll20KAk6OFKBrDP%2BqPKWcIwHCN4Q%2FqqBmxqBX87hm1UkkP%2BfhCm%2FxPllXCA%2FaJHhVPBMQOvW%2FJDEPXg2%2FcjVeYerNRyVB8%2BTXCZ413%2FB6JyZ2UzwIkDK0EAUUBMSXvG4S3YQyfvHfPiAp4atbEtuIdPwxCbzjIg4zOkFS%2BMYAkTxYKNBD%2BMmyojtRsD0lJerQQqUeRfMu7pxDco2zyJE6Vax8340y79%2Befi5b%2B11WTlAsw2efegdDxbVMG6AwtZQc0x1AICJdxd8bfKW943dpmeHahYi1UDGYeHra1CTiwvJAAXXlY7he7v8pgY1FCqSEBOV24ijKT75fvUM%2BEFaYe6Q2Eh0LJKdyeNj%2Fd6cE2IF4CtBHvnfDytDwdHkUPhVKmWWkwKNzaGDFD%2FTpJe4UaMMzGu8EGOqUByPfJGCoq4KL9FGpqGVnsHsoHVK5cjT7dDEM7n7lKDytzYkY%2FebVcqD%2B6Dn4B5H72FUvGkIpPIxziPEXaQP75jcyTV5lrnHtLiC9erY7a0aqbRVNQ9d1edYe3tpANyj7atdIvepN7O4omixjRafKyZnGXs%2FF2oAG0d89ktm5XAsjnpfLIbdB3rZlX6RV7vqnht4HxgGw3rqktxcJhymcuMl9j4Amj&X-Amz-Signature=04e5501f3bf294d3a964152c5633a0be463a18afe0b0be8454d813bca712b58b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646XAMAMM%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T090950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIEKB2mrwW5D3ht%2BOQu5QDJ%2F6hEOeaA6DHqdh%2Bm4xdoH6AiEAkEgL2kmJuV4lDUcNPUXL9YYBNQdzKCWU8VCI2A00ymsqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZSruNTgaOrYfoSdSrcA8FvnNQwhJcl83FjL2N8AGzyyWUv2LHNZQonLpGedIDrq%2FGpxmcgmKOkEzflAIdHQd%2FzJ7cUa2GnZsrJHbPpiWaLuPesrB2AVw1S0srSO7OzkV%2FvXD9wBBB7SG4YWU9LpGG4SBh4dPgeGrWg81N75xYBDFCVA%2Bq7bCvXkPvsDXTDJG4K%2F9Is0FNNqgQYJrjw1XuFtLJKkungdCzbgusY4n685ZtRPVWjfj1otBll20KAk6OFKBrDP%2BqPKWcIwHCN4Q%2FqqBmxqBX87hm1UkkP%2BfhCm%2FxPllXCA%2FaJHhVPBMQOvW%2FJDEPXg2%2FcjVeYerNRyVB8%2BTXCZ413%2FB6JyZ2UzwIkDK0EAUUBMSXvG4S3YQyfvHfPiAp4atbEtuIdPwxCbzjIg4zOkFS%2BMYAkTxYKNBD%2BMmyojtRsD0lJerQQqUeRfMu7pxDco2zyJE6Vax8340y79%2Befi5b%2B11WTlAsw2efegdDxbVMG6AwtZQc0x1AICJdxd8bfKW943dpmeHahYi1UDGYeHra1CTiwvJAAXXlY7he7v8pgY1FCqSEBOV24ijKT75fvUM%2BEFaYe6Q2Eh0LJKdyeNj%2Fd6cE2IF4CtBHvnfDytDwdHkUPhVKmWWkwKNzaGDFD%2FTpJe4UaMMzGu8EGOqUByPfJGCoq4KL9FGpqGVnsHsoHVK5cjT7dDEM7n7lKDytzYkY%2FebVcqD%2B6Dn4B5H72FUvGkIpPIxziPEXaQP75jcyTV5lrnHtLiC9erY7a0aqbRVNQ9d1edYe3tpANyj7atdIvepN7O4omixjRafKyZnGXs%2FF2oAG0d89ktm5XAsjnpfLIbdB3rZlX6RV7vqnht4HxgGw3rqktxcJhymcuMl9j4Amj&X-Amz-Signature=165cc4a83ff58f8588f599b274aa1e17239453c9870e206e32f9c0571d6a2f7d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646XAMAMM%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T090950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIEKB2mrwW5D3ht%2BOQu5QDJ%2F6hEOeaA6DHqdh%2Bm4xdoH6AiEAkEgL2kmJuV4lDUcNPUXL9YYBNQdzKCWU8VCI2A00ymsqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZSruNTgaOrYfoSdSrcA8FvnNQwhJcl83FjL2N8AGzyyWUv2LHNZQonLpGedIDrq%2FGpxmcgmKOkEzflAIdHQd%2FzJ7cUa2GnZsrJHbPpiWaLuPesrB2AVw1S0srSO7OzkV%2FvXD9wBBB7SG4YWU9LpGG4SBh4dPgeGrWg81N75xYBDFCVA%2Bq7bCvXkPvsDXTDJG4K%2F9Is0FNNqgQYJrjw1XuFtLJKkungdCzbgusY4n685ZtRPVWjfj1otBll20KAk6OFKBrDP%2BqPKWcIwHCN4Q%2FqqBmxqBX87hm1UkkP%2BfhCm%2FxPllXCA%2FaJHhVPBMQOvW%2FJDEPXg2%2FcjVeYerNRyVB8%2BTXCZ413%2FB6JyZ2UzwIkDK0EAUUBMSXvG4S3YQyfvHfPiAp4atbEtuIdPwxCbzjIg4zOkFS%2BMYAkTxYKNBD%2BMmyojtRsD0lJerQQqUeRfMu7pxDco2zyJE6Vax8340y79%2Befi5b%2B11WTlAsw2efegdDxbVMG6AwtZQc0x1AICJdxd8bfKW943dpmeHahYi1UDGYeHra1CTiwvJAAXXlY7he7v8pgY1FCqSEBOV24ijKT75fvUM%2BEFaYe6Q2Eh0LJKdyeNj%2Fd6cE2IF4CtBHvnfDytDwdHkUPhVKmWWkwKNzaGDFD%2FTpJe4UaMMzGu8EGOqUByPfJGCoq4KL9FGpqGVnsHsoHVK5cjT7dDEM7n7lKDytzYkY%2FebVcqD%2B6Dn4B5H72FUvGkIpPIxziPEXaQP75jcyTV5lrnHtLiC9erY7a0aqbRVNQ9d1edYe3tpANyj7atdIvepN7O4omixjRafKyZnGXs%2FF2oAG0d89ktm5XAsjnpfLIbdB3rZlX6RV7vqnht4HxgGw3rqktxcJhymcuMl9j4Amj&X-Amz-Signature=f65c2faa3486eb65d33b0c076bebc831feaf63c86452fe0289a8336be2b58d24&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646XAMAMM%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T090950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIEKB2mrwW5D3ht%2BOQu5QDJ%2F6hEOeaA6DHqdh%2Bm4xdoH6AiEAkEgL2kmJuV4lDUcNPUXL9YYBNQdzKCWU8VCI2A00ymsqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZSruNTgaOrYfoSdSrcA8FvnNQwhJcl83FjL2N8AGzyyWUv2LHNZQonLpGedIDrq%2FGpxmcgmKOkEzflAIdHQd%2FzJ7cUa2GnZsrJHbPpiWaLuPesrB2AVw1S0srSO7OzkV%2FvXD9wBBB7SG4YWU9LpGG4SBh4dPgeGrWg81N75xYBDFCVA%2Bq7bCvXkPvsDXTDJG4K%2F9Is0FNNqgQYJrjw1XuFtLJKkungdCzbgusY4n685ZtRPVWjfj1otBll20KAk6OFKBrDP%2BqPKWcIwHCN4Q%2FqqBmxqBX87hm1UkkP%2BfhCm%2FxPllXCA%2FaJHhVPBMQOvW%2FJDEPXg2%2FcjVeYerNRyVB8%2BTXCZ413%2FB6JyZ2UzwIkDK0EAUUBMSXvG4S3YQyfvHfPiAp4atbEtuIdPwxCbzjIg4zOkFS%2BMYAkTxYKNBD%2BMmyojtRsD0lJerQQqUeRfMu7pxDco2zyJE6Vax8340y79%2Befi5b%2B11WTlAsw2efegdDxbVMG6AwtZQc0x1AICJdxd8bfKW943dpmeHahYi1UDGYeHra1CTiwvJAAXXlY7he7v8pgY1FCqSEBOV24ijKT75fvUM%2BEFaYe6Q2Eh0LJKdyeNj%2Fd6cE2IF4CtBHvnfDytDwdHkUPhVKmWWkwKNzaGDFD%2FTpJe4UaMMzGu8EGOqUByPfJGCoq4KL9FGpqGVnsHsoHVK5cjT7dDEM7n7lKDytzYkY%2FebVcqD%2B6Dn4B5H72FUvGkIpPIxziPEXaQP75jcyTV5lrnHtLiC9erY7a0aqbRVNQ9d1edYe3tpANyj7atdIvepN7O4omixjRafKyZnGXs%2FF2oAG0d89ktm5XAsjnpfLIbdB3rZlX6RV7vqnht4HxgGw3rqktxcJhymcuMl9j4Amj&X-Amz-Signature=bcb3a2f367bd391d9889325fe4b7205ec5f43f4d6e7164dc44368928b93ac2b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646XAMAMM%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T090950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIEKB2mrwW5D3ht%2BOQu5QDJ%2F6hEOeaA6DHqdh%2Bm4xdoH6AiEAkEgL2kmJuV4lDUcNPUXL9YYBNQdzKCWU8VCI2A00ymsqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZSruNTgaOrYfoSdSrcA8FvnNQwhJcl83FjL2N8AGzyyWUv2LHNZQonLpGedIDrq%2FGpxmcgmKOkEzflAIdHQd%2FzJ7cUa2GnZsrJHbPpiWaLuPesrB2AVw1S0srSO7OzkV%2FvXD9wBBB7SG4YWU9LpGG4SBh4dPgeGrWg81N75xYBDFCVA%2Bq7bCvXkPvsDXTDJG4K%2F9Is0FNNqgQYJrjw1XuFtLJKkungdCzbgusY4n685ZtRPVWjfj1otBll20KAk6OFKBrDP%2BqPKWcIwHCN4Q%2FqqBmxqBX87hm1UkkP%2BfhCm%2FxPllXCA%2FaJHhVPBMQOvW%2FJDEPXg2%2FcjVeYerNRyVB8%2BTXCZ413%2FB6JyZ2UzwIkDK0EAUUBMSXvG4S3YQyfvHfPiAp4atbEtuIdPwxCbzjIg4zOkFS%2BMYAkTxYKNBD%2BMmyojtRsD0lJerQQqUeRfMu7pxDco2zyJE6Vax8340y79%2Befi5b%2B11WTlAsw2efegdDxbVMG6AwtZQc0x1AICJdxd8bfKW943dpmeHahYi1UDGYeHra1CTiwvJAAXXlY7he7v8pgY1FCqSEBOV24ijKT75fvUM%2BEFaYe6Q2Eh0LJKdyeNj%2Fd6cE2IF4CtBHvnfDytDwdHkUPhVKmWWkwKNzaGDFD%2FTpJe4UaMMzGu8EGOqUByPfJGCoq4KL9FGpqGVnsHsoHVK5cjT7dDEM7n7lKDytzYkY%2FebVcqD%2B6Dn4B5H72FUvGkIpPIxziPEXaQP75jcyTV5lrnHtLiC9erY7a0aqbRVNQ9d1edYe3tpANyj7atdIvepN7O4omixjRafKyZnGXs%2FF2oAG0d89ktm5XAsjnpfLIbdB3rZlX6RV7vqnht4HxgGw3rqktxcJhymcuMl9j4Amj&X-Amz-Signature=0242b23d1c5ff205385e6e52eaa631bf52ef3117044b57aa464e73a502806939&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646XAMAMM%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T090950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIEKB2mrwW5D3ht%2BOQu5QDJ%2F6hEOeaA6DHqdh%2Bm4xdoH6AiEAkEgL2kmJuV4lDUcNPUXL9YYBNQdzKCWU8VCI2A00ymsqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZSruNTgaOrYfoSdSrcA8FvnNQwhJcl83FjL2N8AGzyyWUv2LHNZQonLpGedIDrq%2FGpxmcgmKOkEzflAIdHQd%2FzJ7cUa2GnZsrJHbPpiWaLuPesrB2AVw1S0srSO7OzkV%2FvXD9wBBB7SG4YWU9LpGG4SBh4dPgeGrWg81N75xYBDFCVA%2Bq7bCvXkPvsDXTDJG4K%2F9Is0FNNqgQYJrjw1XuFtLJKkungdCzbgusY4n685ZtRPVWjfj1otBll20KAk6OFKBrDP%2BqPKWcIwHCN4Q%2FqqBmxqBX87hm1UkkP%2BfhCm%2FxPllXCA%2FaJHhVPBMQOvW%2FJDEPXg2%2FcjVeYerNRyVB8%2BTXCZ413%2FB6JyZ2UzwIkDK0EAUUBMSXvG4S3YQyfvHfPiAp4atbEtuIdPwxCbzjIg4zOkFS%2BMYAkTxYKNBD%2BMmyojtRsD0lJerQQqUeRfMu7pxDco2zyJE6Vax8340y79%2Befi5b%2B11WTlAsw2efegdDxbVMG6AwtZQc0x1AICJdxd8bfKW943dpmeHahYi1UDGYeHra1CTiwvJAAXXlY7he7v8pgY1FCqSEBOV24ijKT75fvUM%2BEFaYe6Q2Eh0LJKdyeNj%2Fd6cE2IF4CtBHvnfDytDwdHkUPhVKmWWkwKNzaGDFD%2FTpJe4UaMMzGu8EGOqUByPfJGCoq4KL9FGpqGVnsHsoHVK5cjT7dDEM7n7lKDytzYkY%2FebVcqD%2B6Dn4B5H72FUvGkIpPIxziPEXaQP75jcyTV5lrnHtLiC9erY7a0aqbRVNQ9d1edYe3tpANyj7atdIvepN7O4omixjRafKyZnGXs%2FF2oAG0d89ktm5XAsjnpfLIbdB3rZlX6RV7vqnht4HxgGw3rqktxcJhymcuMl9j4Amj&X-Amz-Signature=3771b341f5ee2c46155449e59dfd0ceff855f9b7888765814feeb473ebbec412&X-Amz-SignedHeaders=host&x-id=GetObject)
