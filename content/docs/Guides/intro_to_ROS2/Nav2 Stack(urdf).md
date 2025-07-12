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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UOWFBZW%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX%2BmctnLoxxLQZ6kDDRieaydcS7%2Fy08wH8VvhVngQfZwIgXwhbdgZSGumcNUpYVyjGYKxRAMHHcHaEtzdRzqC2Sm4qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoxuFhODnRRfruVQyrcA1dKXFuHr2zFaaZgv3bCeGrqqHDzyz%2F4am5JBpCNFGMZGJ2Pz0PjJtuwif7hiuwR0B0bc5OFjHb7TtjJeeyVCLfM7O2%2FX0rS%2FLWSbXqWqjYdI4p%2BOIF00twkFX4JudDG25TSvFW%2FDSlgQ9B08Qvxh4qncEvOBlK3AA8XhVaT4ZeZGqK9d4oDOHWiH0w2k%2Bs6ilsgRQzS4PgjcWU69rprTNn7gHGrctzQt7FrqU0NTw%2BVNreQ8GWk3ifHuyCMwTSXG1GLcZL0YhKe3sDlWtxgh%2FW1eT1ajgwf0Ai21mTdSd29xDMKt6YwpRECLAXMcBb4%2BvdbJQkBssSdHTmZIVnBy%2Fy%2BEYqSNC8ukDvw3OWofuyzjhPrfTcM9s677JZTiXU6trM%2FYBoNWmpFNcDD4hmbGKCGGqq4LNtVqEI7uSojRQJOH2zrY4zeZQulyn6qrFFNDS9pUM%2FaNFFz5DGgkw2EEBDBQqeQ6EkbY8mldQwtFsOta5KegyEwDtI0RVtNHy3pzUxDOXjBKcrOnKeT8UmrzqVtdchDgV%2BJ%2ByQzUtJt6gdlusyDzV16BpT7h015%2BxE6QUPNrINGPvVHuJGP7rFgHSdJHH9dN7LKmD%2F%2BTPT7gUUzI6h8mGDERKhD5whRMOmty8MGOqUBUnwXTiWExyb2AfWWWh%2Bt3TUVs%2Fk%2BU8RwRZUrQmVWXtyFxcV1rubzMPDgrD%2Bjq4FMtlji8uozyQ6sfcy7va5aq%2FRfnmMYAqYBikwfGJn3EPNuT5O8xFsbLx4AP1yIw13PSDGh7d7d4iSmK%2BKfCdNt4BXX2peHYWcoO%2BhNZXmBAqbkyNtydadFRKKv5xjf5vyfpqqc0ICYd4g3VYCA1tY3v%2Bu2FXUF&X-Amz-Signature=ead93c8341b0376d134c19ad4910b7cb398a66f424c280d5ebc4d3af914f4e23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UOWFBZW%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX%2BmctnLoxxLQZ6kDDRieaydcS7%2Fy08wH8VvhVngQfZwIgXwhbdgZSGumcNUpYVyjGYKxRAMHHcHaEtzdRzqC2Sm4qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoxuFhODnRRfruVQyrcA1dKXFuHr2zFaaZgv3bCeGrqqHDzyz%2F4am5JBpCNFGMZGJ2Pz0PjJtuwif7hiuwR0B0bc5OFjHb7TtjJeeyVCLfM7O2%2FX0rS%2FLWSbXqWqjYdI4p%2BOIF00twkFX4JudDG25TSvFW%2FDSlgQ9B08Qvxh4qncEvOBlK3AA8XhVaT4ZeZGqK9d4oDOHWiH0w2k%2Bs6ilsgRQzS4PgjcWU69rprTNn7gHGrctzQt7FrqU0NTw%2BVNreQ8GWk3ifHuyCMwTSXG1GLcZL0YhKe3sDlWtxgh%2FW1eT1ajgwf0Ai21mTdSd29xDMKt6YwpRECLAXMcBb4%2BvdbJQkBssSdHTmZIVnBy%2Fy%2BEYqSNC8ukDvw3OWofuyzjhPrfTcM9s677JZTiXU6trM%2FYBoNWmpFNcDD4hmbGKCGGqq4LNtVqEI7uSojRQJOH2zrY4zeZQulyn6qrFFNDS9pUM%2FaNFFz5DGgkw2EEBDBQqeQ6EkbY8mldQwtFsOta5KegyEwDtI0RVtNHy3pzUxDOXjBKcrOnKeT8UmrzqVtdchDgV%2BJ%2ByQzUtJt6gdlusyDzV16BpT7h015%2BxE6QUPNrINGPvVHuJGP7rFgHSdJHH9dN7LKmD%2F%2BTPT7gUUzI6h8mGDERKhD5whRMOmty8MGOqUBUnwXTiWExyb2AfWWWh%2Bt3TUVs%2Fk%2BU8RwRZUrQmVWXtyFxcV1rubzMPDgrD%2Bjq4FMtlji8uozyQ6sfcy7va5aq%2FRfnmMYAqYBikwfGJn3EPNuT5O8xFsbLx4AP1yIw13PSDGh7d7d4iSmK%2BKfCdNt4BXX2peHYWcoO%2BhNZXmBAqbkyNtydadFRKKv5xjf5vyfpqqc0ICYd4g3VYCA1tY3v%2Bu2FXUF&X-Amz-Signature=27c7ce5c42866c4108370099ed1cc79a7a2303c8ddc5953f2b40e869743bd881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UOWFBZW%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX%2BmctnLoxxLQZ6kDDRieaydcS7%2Fy08wH8VvhVngQfZwIgXwhbdgZSGumcNUpYVyjGYKxRAMHHcHaEtzdRzqC2Sm4qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoxuFhODnRRfruVQyrcA1dKXFuHr2zFaaZgv3bCeGrqqHDzyz%2F4am5JBpCNFGMZGJ2Pz0PjJtuwif7hiuwR0B0bc5OFjHb7TtjJeeyVCLfM7O2%2FX0rS%2FLWSbXqWqjYdI4p%2BOIF00twkFX4JudDG25TSvFW%2FDSlgQ9B08Qvxh4qncEvOBlK3AA8XhVaT4ZeZGqK9d4oDOHWiH0w2k%2Bs6ilsgRQzS4PgjcWU69rprTNn7gHGrctzQt7FrqU0NTw%2BVNreQ8GWk3ifHuyCMwTSXG1GLcZL0YhKe3sDlWtxgh%2FW1eT1ajgwf0Ai21mTdSd29xDMKt6YwpRECLAXMcBb4%2BvdbJQkBssSdHTmZIVnBy%2Fy%2BEYqSNC8ukDvw3OWofuyzjhPrfTcM9s677JZTiXU6trM%2FYBoNWmpFNcDD4hmbGKCGGqq4LNtVqEI7uSojRQJOH2zrY4zeZQulyn6qrFFNDS9pUM%2FaNFFz5DGgkw2EEBDBQqeQ6EkbY8mldQwtFsOta5KegyEwDtI0RVtNHy3pzUxDOXjBKcrOnKeT8UmrzqVtdchDgV%2BJ%2ByQzUtJt6gdlusyDzV16BpT7h015%2BxE6QUPNrINGPvVHuJGP7rFgHSdJHH9dN7LKmD%2F%2BTPT7gUUzI6h8mGDERKhD5whRMOmty8MGOqUBUnwXTiWExyb2AfWWWh%2Bt3TUVs%2Fk%2BU8RwRZUrQmVWXtyFxcV1rubzMPDgrD%2Bjq4FMtlji8uozyQ6sfcy7va5aq%2FRfnmMYAqYBikwfGJn3EPNuT5O8xFsbLx4AP1yIw13PSDGh7d7d4iSmK%2BKfCdNt4BXX2peHYWcoO%2BhNZXmBAqbkyNtydadFRKKv5xjf5vyfpqqc0ICYd4g3VYCA1tY3v%2Bu2FXUF&X-Amz-Signature=cb0af482b38029ce4d371267522f43d5a7bc585137c23f343f7df6660ee82c50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UOWFBZW%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX%2BmctnLoxxLQZ6kDDRieaydcS7%2Fy08wH8VvhVngQfZwIgXwhbdgZSGumcNUpYVyjGYKxRAMHHcHaEtzdRzqC2Sm4qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoxuFhODnRRfruVQyrcA1dKXFuHr2zFaaZgv3bCeGrqqHDzyz%2F4am5JBpCNFGMZGJ2Pz0PjJtuwif7hiuwR0B0bc5OFjHb7TtjJeeyVCLfM7O2%2FX0rS%2FLWSbXqWqjYdI4p%2BOIF00twkFX4JudDG25TSvFW%2FDSlgQ9B08Qvxh4qncEvOBlK3AA8XhVaT4ZeZGqK9d4oDOHWiH0w2k%2Bs6ilsgRQzS4PgjcWU69rprTNn7gHGrctzQt7FrqU0NTw%2BVNreQ8GWk3ifHuyCMwTSXG1GLcZL0YhKe3sDlWtxgh%2FW1eT1ajgwf0Ai21mTdSd29xDMKt6YwpRECLAXMcBb4%2BvdbJQkBssSdHTmZIVnBy%2Fy%2BEYqSNC8ukDvw3OWofuyzjhPrfTcM9s677JZTiXU6trM%2FYBoNWmpFNcDD4hmbGKCGGqq4LNtVqEI7uSojRQJOH2zrY4zeZQulyn6qrFFNDS9pUM%2FaNFFz5DGgkw2EEBDBQqeQ6EkbY8mldQwtFsOta5KegyEwDtI0RVtNHy3pzUxDOXjBKcrOnKeT8UmrzqVtdchDgV%2BJ%2ByQzUtJt6gdlusyDzV16BpT7h015%2BxE6QUPNrINGPvVHuJGP7rFgHSdJHH9dN7LKmD%2F%2BTPT7gUUzI6h8mGDERKhD5whRMOmty8MGOqUBUnwXTiWExyb2AfWWWh%2Bt3TUVs%2Fk%2BU8RwRZUrQmVWXtyFxcV1rubzMPDgrD%2Bjq4FMtlji8uozyQ6sfcy7va5aq%2FRfnmMYAqYBikwfGJn3EPNuT5O8xFsbLx4AP1yIw13PSDGh7d7d4iSmK%2BKfCdNt4BXX2peHYWcoO%2BhNZXmBAqbkyNtydadFRKKv5xjf5vyfpqqc0ICYd4g3VYCA1tY3v%2Bu2FXUF&X-Amz-Signature=8cccda10ea4417a64b5f83a67c11ae7b824d2e387efbd52fb105099c2483cce3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UOWFBZW%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX%2BmctnLoxxLQZ6kDDRieaydcS7%2Fy08wH8VvhVngQfZwIgXwhbdgZSGumcNUpYVyjGYKxRAMHHcHaEtzdRzqC2Sm4qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoxuFhODnRRfruVQyrcA1dKXFuHr2zFaaZgv3bCeGrqqHDzyz%2F4am5JBpCNFGMZGJ2Pz0PjJtuwif7hiuwR0B0bc5OFjHb7TtjJeeyVCLfM7O2%2FX0rS%2FLWSbXqWqjYdI4p%2BOIF00twkFX4JudDG25TSvFW%2FDSlgQ9B08Qvxh4qncEvOBlK3AA8XhVaT4ZeZGqK9d4oDOHWiH0w2k%2Bs6ilsgRQzS4PgjcWU69rprTNn7gHGrctzQt7FrqU0NTw%2BVNreQ8GWk3ifHuyCMwTSXG1GLcZL0YhKe3sDlWtxgh%2FW1eT1ajgwf0Ai21mTdSd29xDMKt6YwpRECLAXMcBb4%2BvdbJQkBssSdHTmZIVnBy%2Fy%2BEYqSNC8ukDvw3OWofuyzjhPrfTcM9s677JZTiXU6trM%2FYBoNWmpFNcDD4hmbGKCGGqq4LNtVqEI7uSojRQJOH2zrY4zeZQulyn6qrFFNDS9pUM%2FaNFFz5DGgkw2EEBDBQqeQ6EkbY8mldQwtFsOta5KegyEwDtI0RVtNHy3pzUxDOXjBKcrOnKeT8UmrzqVtdchDgV%2BJ%2ByQzUtJt6gdlusyDzV16BpT7h015%2BxE6QUPNrINGPvVHuJGP7rFgHSdJHH9dN7LKmD%2F%2BTPT7gUUzI6h8mGDERKhD5whRMOmty8MGOqUBUnwXTiWExyb2AfWWWh%2Bt3TUVs%2Fk%2BU8RwRZUrQmVWXtyFxcV1rubzMPDgrD%2Bjq4FMtlji8uozyQ6sfcy7va5aq%2FRfnmMYAqYBikwfGJn3EPNuT5O8xFsbLx4AP1yIw13PSDGh7d7d4iSmK%2BKfCdNt4BXX2peHYWcoO%2BhNZXmBAqbkyNtydadFRKKv5xjf5vyfpqqc0ICYd4g3VYCA1tY3v%2Bu2FXUF&X-Amz-Signature=31df08599ab754e1f1557bfe3f964bbec150f689a439fa2bf3e3ee38e06d6913&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UOWFBZW%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T220826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX%2BmctnLoxxLQZ6kDDRieaydcS7%2Fy08wH8VvhVngQfZwIgXwhbdgZSGumcNUpYVyjGYKxRAMHHcHaEtzdRzqC2Sm4qiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoxuFhODnRRfruVQyrcA1dKXFuHr2zFaaZgv3bCeGrqqHDzyz%2F4am5JBpCNFGMZGJ2Pz0PjJtuwif7hiuwR0B0bc5OFjHb7TtjJeeyVCLfM7O2%2FX0rS%2FLWSbXqWqjYdI4p%2BOIF00twkFX4JudDG25TSvFW%2FDSlgQ9B08Qvxh4qncEvOBlK3AA8XhVaT4ZeZGqK9d4oDOHWiH0w2k%2Bs6ilsgRQzS4PgjcWU69rprTNn7gHGrctzQt7FrqU0NTw%2BVNreQ8GWk3ifHuyCMwTSXG1GLcZL0YhKe3sDlWtxgh%2FW1eT1ajgwf0Ai21mTdSd29xDMKt6YwpRECLAXMcBb4%2BvdbJQkBssSdHTmZIVnBy%2Fy%2BEYqSNC8ukDvw3OWofuyzjhPrfTcM9s677JZTiXU6trM%2FYBoNWmpFNcDD4hmbGKCGGqq4LNtVqEI7uSojRQJOH2zrY4zeZQulyn6qrFFNDS9pUM%2FaNFFz5DGgkw2EEBDBQqeQ6EkbY8mldQwtFsOta5KegyEwDtI0RVtNHy3pzUxDOXjBKcrOnKeT8UmrzqVtdchDgV%2BJ%2ByQzUtJt6gdlusyDzV16BpT7h015%2BxE6QUPNrINGPvVHuJGP7rFgHSdJHH9dN7LKmD%2F%2BTPT7gUUzI6h8mGDERKhD5whRMOmty8MGOqUBUnwXTiWExyb2AfWWWh%2Bt3TUVs%2Fk%2BU8RwRZUrQmVWXtyFxcV1rubzMPDgrD%2Bjq4FMtlji8uozyQ6sfcy7va5aq%2FRfnmMYAqYBikwfGJn3EPNuT5O8xFsbLx4AP1yIw13PSDGh7d7d4iSmK%2BKfCdNt4BXX2peHYWcoO%2BhNZXmBAqbkyNtydadFRKKv5xjf5vyfpqqc0ICYd4g3VYCA1tY3v%2Bu2FXUF&X-Amz-Signature=70e6eb60b1381ab2315b829d47a14da77e62936653b83e2b44099aa98779d616&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
