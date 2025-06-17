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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ID7DYKS%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T181322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmDJ3MatEzi6uQHoJMMKWS57OHkfVJHnFGPNqA1jdgvAiAQwqdgfQdULffC5dA3SqEfK3rusCV3p3E6Yd43rgsbZCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMKqD8ZBmgXkR8oqgqKtwDSzvtTmS15C3zxitkEpQfmwqfOg%2F8rAMrxrspbpbh%2F4xrXKxlkfTkhXFXLqG5YWu4l%2FXFZhbJ7n6yYa53eAqIvmOO6lw6Njpodba%2FIn%2FtmQdWARXAYQl6yciYSE88q2QFsXG3nxp8zwby6enZ3ma7GJCg4D7WU26LqsM7EC8C7rI%2ByO%2FvGe3QpdNnsq38euv7bxHVEqrCw9PxsPhWmjKptMMSvV2bPUd1NYGz6PCmMdF0d%2FdnK2qnDOsuWarxduMr0O2VbAWyk2g1hIqdIR1cyNjh8h8pdWS16c1buOQOqaK%2FAao%2FJQTeFF3rY5WX9weXtcSI7%2BGFk448fzq3ANmLNfAXZQoQGVxCtAT6TPoNFN9hJa3rZ252gXOcDVHgitbEdPqcvu4%2FgZ1tbaR2RyoWzRAELFCpHwJLj6oppvHoLGjHRRSPm0UQ8bjq1LEyg8oRItILeP6mYVGJxpVIRa%2BT3EnS9%2F%2FBPbMGfiatekv6QgdNPQ2KEsHbBrVOxqL4rwmRHPcWDXOJCD%2ByZKe%2FWMvn6ksUBnFOA7lNEzhFBP%2BDw3olwjD%2FqzO4AWP96gIFsgKrXNSbDElZD3R6N7t9e%2BYuEdKe5pYk1xeKAnxapvsUQs2p8nkJnmh%2FA8mVoYswiLXGwgY6pgExz%2FXr6%2BC0azcr1E5c1%2Bss8cswkX54LrnQrObo1L026O3En5n8usfwDCNdhCTY7JY1hmrR9j%2BtqofzQ4nRsd4W1gMpaE4oLh7w0e0cchPSLfDVSW9MM2eQj%2B2aFo5NrKq74Qm%2FG41klUwUNyHTIt%2BQIFNd74c7ornWJyUDKEy3zbnkWBkvOscwtS%2Fq85IBc9wuGYRu3ZE%2BSXmPwq8kTgorAuqYkiaW&X-Amz-Signature=7cb65447b155fda7b30d5a23ba7f8f4c693969746bf44ba42b0cb10c5072c587&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ID7DYKS%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T181322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmDJ3MatEzi6uQHoJMMKWS57OHkfVJHnFGPNqA1jdgvAiAQwqdgfQdULffC5dA3SqEfK3rusCV3p3E6Yd43rgsbZCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMKqD8ZBmgXkR8oqgqKtwDSzvtTmS15C3zxitkEpQfmwqfOg%2F8rAMrxrspbpbh%2F4xrXKxlkfTkhXFXLqG5YWu4l%2FXFZhbJ7n6yYa53eAqIvmOO6lw6Njpodba%2FIn%2FtmQdWARXAYQl6yciYSE88q2QFsXG3nxp8zwby6enZ3ma7GJCg4D7WU26LqsM7EC8C7rI%2ByO%2FvGe3QpdNnsq38euv7bxHVEqrCw9PxsPhWmjKptMMSvV2bPUd1NYGz6PCmMdF0d%2FdnK2qnDOsuWarxduMr0O2VbAWyk2g1hIqdIR1cyNjh8h8pdWS16c1buOQOqaK%2FAao%2FJQTeFF3rY5WX9weXtcSI7%2BGFk448fzq3ANmLNfAXZQoQGVxCtAT6TPoNFN9hJa3rZ252gXOcDVHgitbEdPqcvu4%2FgZ1tbaR2RyoWzRAELFCpHwJLj6oppvHoLGjHRRSPm0UQ8bjq1LEyg8oRItILeP6mYVGJxpVIRa%2BT3EnS9%2F%2FBPbMGfiatekv6QgdNPQ2KEsHbBrVOxqL4rwmRHPcWDXOJCD%2ByZKe%2FWMvn6ksUBnFOA7lNEzhFBP%2BDw3olwjD%2FqzO4AWP96gIFsgKrXNSbDElZD3R6N7t9e%2BYuEdKe5pYk1xeKAnxapvsUQs2p8nkJnmh%2FA8mVoYswiLXGwgY6pgExz%2FXr6%2BC0azcr1E5c1%2Bss8cswkX54LrnQrObo1L026O3En5n8usfwDCNdhCTY7JY1hmrR9j%2BtqofzQ4nRsd4W1gMpaE4oLh7w0e0cchPSLfDVSW9MM2eQj%2B2aFo5NrKq74Qm%2FG41klUwUNyHTIt%2BQIFNd74c7ornWJyUDKEy3zbnkWBkvOscwtS%2Fq85IBc9wuGYRu3ZE%2BSXmPwq8kTgorAuqYkiaW&X-Amz-Signature=b0ba2bfe42c590d35d301c80219f5de378849009bd546c14bf077b056418fddf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ID7DYKS%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T181322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmDJ3MatEzi6uQHoJMMKWS57OHkfVJHnFGPNqA1jdgvAiAQwqdgfQdULffC5dA3SqEfK3rusCV3p3E6Yd43rgsbZCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMKqD8ZBmgXkR8oqgqKtwDSzvtTmS15C3zxitkEpQfmwqfOg%2F8rAMrxrspbpbh%2F4xrXKxlkfTkhXFXLqG5YWu4l%2FXFZhbJ7n6yYa53eAqIvmOO6lw6Njpodba%2FIn%2FtmQdWARXAYQl6yciYSE88q2QFsXG3nxp8zwby6enZ3ma7GJCg4D7WU26LqsM7EC8C7rI%2ByO%2FvGe3QpdNnsq38euv7bxHVEqrCw9PxsPhWmjKptMMSvV2bPUd1NYGz6PCmMdF0d%2FdnK2qnDOsuWarxduMr0O2VbAWyk2g1hIqdIR1cyNjh8h8pdWS16c1buOQOqaK%2FAao%2FJQTeFF3rY5WX9weXtcSI7%2BGFk448fzq3ANmLNfAXZQoQGVxCtAT6TPoNFN9hJa3rZ252gXOcDVHgitbEdPqcvu4%2FgZ1tbaR2RyoWzRAELFCpHwJLj6oppvHoLGjHRRSPm0UQ8bjq1LEyg8oRItILeP6mYVGJxpVIRa%2BT3EnS9%2F%2FBPbMGfiatekv6QgdNPQ2KEsHbBrVOxqL4rwmRHPcWDXOJCD%2ByZKe%2FWMvn6ksUBnFOA7lNEzhFBP%2BDw3olwjD%2FqzO4AWP96gIFsgKrXNSbDElZD3R6N7t9e%2BYuEdKe5pYk1xeKAnxapvsUQs2p8nkJnmh%2FA8mVoYswiLXGwgY6pgExz%2FXr6%2BC0azcr1E5c1%2Bss8cswkX54LrnQrObo1L026O3En5n8usfwDCNdhCTY7JY1hmrR9j%2BtqofzQ4nRsd4W1gMpaE4oLh7w0e0cchPSLfDVSW9MM2eQj%2B2aFo5NrKq74Qm%2FG41klUwUNyHTIt%2BQIFNd74c7ornWJyUDKEy3zbnkWBkvOscwtS%2Fq85IBc9wuGYRu3ZE%2BSXmPwq8kTgorAuqYkiaW&X-Amz-Signature=1bab85774ef68e8f3ae56a2f2749e70e43666fdc65c55e31c40406eb368770bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ID7DYKS%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T181322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmDJ3MatEzi6uQHoJMMKWS57OHkfVJHnFGPNqA1jdgvAiAQwqdgfQdULffC5dA3SqEfK3rusCV3p3E6Yd43rgsbZCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMKqD8ZBmgXkR8oqgqKtwDSzvtTmS15C3zxitkEpQfmwqfOg%2F8rAMrxrspbpbh%2F4xrXKxlkfTkhXFXLqG5YWu4l%2FXFZhbJ7n6yYa53eAqIvmOO6lw6Njpodba%2FIn%2FtmQdWARXAYQl6yciYSE88q2QFsXG3nxp8zwby6enZ3ma7GJCg4D7WU26LqsM7EC8C7rI%2ByO%2FvGe3QpdNnsq38euv7bxHVEqrCw9PxsPhWmjKptMMSvV2bPUd1NYGz6PCmMdF0d%2FdnK2qnDOsuWarxduMr0O2VbAWyk2g1hIqdIR1cyNjh8h8pdWS16c1buOQOqaK%2FAao%2FJQTeFF3rY5WX9weXtcSI7%2BGFk448fzq3ANmLNfAXZQoQGVxCtAT6TPoNFN9hJa3rZ252gXOcDVHgitbEdPqcvu4%2FgZ1tbaR2RyoWzRAELFCpHwJLj6oppvHoLGjHRRSPm0UQ8bjq1LEyg8oRItILeP6mYVGJxpVIRa%2BT3EnS9%2F%2FBPbMGfiatekv6QgdNPQ2KEsHbBrVOxqL4rwmRHPcWDXOJCD%2ByZKe%2FWMvn6ksUBnFOA7lNEzhFBP%2BDw3olwjD%2FqzO4AWP96gIFsgKrXNSbDElZD3R6N7t9e%2BYuEdKe5pYk1xeKAnxapvsUQs2p8nkJnmh%2FA8mVoYswiLXGwgY6pgExz%2FXr6%2BC0azcr1E5c1%2Bss8cswkX54LrnQrObo1L026O3En5n8usfwDCNdhCTY7JY1hmrR9j%2BtqofzQ4nRsd4W1gMpaE4oLh7w0e0cchPSLfDVSW9MM2eQj%2B2aFo5NrKq74Qm%2FG41klUwUNyHTIt%2BQIFNd74c7ornWJyUDKEy3zbnkWBkvOscwtS%2Fq85IBc9wuGYRu3ZE%2BSXmPwq8kTgorAuqYkiaW&X-Amz-Signature=a733bd1969f008a187e3f6ce5ccd952b8fcb6e8e8328b8de5e39f1c29f19f661&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ID7DYKS%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T181322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmDJ3MatEzi6uQHoJMMKWS57OHkfVJHnFGPNqA1jdgvAiAQwqdgfQdULffC5dA3SqEfK3rusCV3p3E6Yd43rgsbZCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMKqD8ZBmgXkR8oqgqKtwDSzvtTmS15C3zxitkEpQfmwqfOg%2F8rAMrxrspbpbh%2F4xrXKxlkfTkhXFXLqG5YWu4l%2FXFZhbJ7n6yYa53eAqIvmOO6lw6Njpodba%2FIn%2FtmQdWARXAYQl6yciYSE88q2QFsXG3nxp8zwby6enZ3ma7GJCg4D7WU26LqsM7EC8C7rI%2ByO%2FvGe3QpdNnsq38euv7bxHVEqrCw9PxsPhWmjKptMMSvV2bPUd1NYGz6PCmMdF0d%2FdnK2qnDOsuWarxduMr0O2VbAWyk2g1hIqdIR1cyNjh8h8pdWS16c1buOQOqaK%2FAao%2FJQTeFF3rY5WX9weXtcSI7%2BGFk448fzq3ANmLNfAXZQoQGVxCtAT6TPoNFN9hJa3rZ252gXOcDVHgitbEdPqcvu4%2FgZ1tbaR2RyoWzRAELFCpHwJLj6oppvHoLGjHRRSPm0UQ8bjq1LEyg8oRItILeP6mYVGJxpVIRa%2BT3EnS9%2F%2FBPbMGfiatekv6QgdNPQ2KEsHbBrVOxqL4rwmRHPcWDXOJCD%2ByZKe%2FWMvn6ksUBnFOA7lNEzhFBP%2BDw3olwjD%2FqzO4AWP96gIFsgKrXNSbDElZD3R6N7t9e%2BYuEdKe5pYk1xeKAnxapvsUQs2p8nkJnmh%2FA8mVoYswiLXGwgY6pgExz%2FXr6%2BC0azcr1E5c1%2Bss8cswkX54LrnQrObo1L026O3En5n8usfwDCNdhCTY7JY1hmrR9j%2BtqofzQ4nRsd4W1gMpaE4oLh7w0e0cchPSLfDVSW9MM2eQj%2B2aFo5NrKq74Qm%2FG41klUwUNyHTIt%2BQIFNd74c7ornWJyUDKEy3zbnkWBkvOscwtS%2Fq85IBc9wuGYRu3ZE%2BSXmPwq8kTgorAuqYkiaW&X-Amz-Signature=c1575cb09378ed940c6c52263f5023a91137427fa661b3dd8eb203b160b0a503&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ID7DYKS%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T181322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDmDJ3MatEzi6uQHoJMMKWS57OHkfVJHnFGPNqA1jdgvAiAQwqdgfQdULffC5dA3SqEfK3rusCV3p3E6Yd43rgsbZCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMKqD8ZBmgXkR8oqgqKtwDSzvtTmS15C3zxitkEpQfmwqfOg%2F8rAMrxrspbpbh%2F4xrXKxlkfTkhXFXLqG5YWu4l%2FXFZhbJ7n6yYa53eAqIvmOO6lw6Njpodba%2FIn%2FtmQdWARXAYQl6yciYSE88q2QFsXG3nxp8zwby6enZ3ma7GJCg4D7WU26LqsM7EC8C7rI%2ByO%2FvGe3QpdNnsq38euv7bxHVEqrCw9PxsPhWmjKptMMSvV2bPUd1NYGz6PCmMdF0d%2FdnK2qnDOsuWarxduMr0O2VbAWyk2g1hIqdIR1cyNjh8h8pdWS16c1buOQOqaK%2FAao%2FJQTeFF3rY5WX9weXtcSI7%2BGFk448fzq3ANmLNfAXZQoQGVxCtAT6TPoNFN9hJa3rZ252gXOcDVHgitbEdPqcvu4%2FgZ1tbaR2RyoWzRAELFCpHwJLj6oppvHoLGjHRRSPm0UQ8bjq1LEyg8oRItILeP6mYVGJxpVIRa%2BT3EnS9%2F%2FBPbMGfiatekv6QgdNPQ2KEsHbBrVOxqL4rwmRHPcWDXOJCD%2ByZKe%2FWMvn6ksUBnFOA7lNEzhFBP%2BDw3olwjD%2FqzO4AWP96gIFsgKrXNSbDElZD3R6N7t9e%2BYuEdKe5pYk1xeKAnxapvsUQs2p8nkJnmh%2FA8mVoYswiLXGwgY6pgExz%2FXr6%2BC0azcr1E5c1%2Bss8cswkX54LrnQrObo1L026O3En5n8usfwDCNdhCTY7JY1hmrR9j%2BtqofzQ4nRsd4W1gMpaE4oLh7w0e0cchPSLfDVSW9MM2eQj%2B2aFo5NrKq74Qm%2FG41klUwUNyHTIt%2BQIFNd74c7ornWJyUDKEy3zbnkWBkvOscwtS%2Fq85IBc9wuGYRu3ZE%2BSXmPwq8kTgorAuqYkiaW&X-Amz-Signature=2febb3bee080752d3a3744782f11ab0f021fba0c62dddcfc7b6504ebeca228ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
