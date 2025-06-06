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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RYQHAJU%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T150802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbB71NVRneCOlrpSzXi8orMD7ZctfVz9dtbvEblUgGCAiEAyzHcHb6lec2SMmWa6cCHUrL%2BUPg4Nl4dc5jV%2BgMGWb8q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDKvhU3%2B6CUckfRh3fircA6HMccAxh43wjhGDiTBhGqmRvU97FXnlbpVvgImM7rmG28UGgylTlJAHGiUR3NgG9KKqx%2Beo0c9pJYzDbpkEtYDhGtV49K20E7hImGpEimnuwWhxeuBwjmZq0WOiMn%2BBAKvMnhuX9DpX14acCIDVfst3j12VOlzib%2FLeIg6c16Y0QRf5rrinbmi7Pus2TPWqWcyvqQwKCbx5NfZD2bDHdVLICxnElXNwiVqgeV2INrM6%2FDhq5aZhKXryceHouuDAc8TqLuslubcIVyP8eqySelxsh7s4dU%2FDwvzYB6jiQ7rHbgK9bHmJ3yHGjlB3urvT5KyUFo547tM88vTpfA5xme1TdUzrPYI03CxRR%2BC7K9gZcHdrQCWGHsmzIpyvKnkXBQ5Jc7Ha9QSrzPEJRxQ8GzhDCo22Jd2RbnYDv9t4TbHkmVmZeHY%2FV6Y%2FgvOuFn6YZ6dacZH%2FLtFVlCccSAzu73BH5oqfwq9AKEf2Rk3RPC7PoaYdhRqFSW%2BG4y7YXiRb3WeBHOUed6TpPxkxGi4Kk0ykUUI5g6JflDY7jaX%2B8zYh7GFKg1IXcxvRp75jtN%2BM0rO9cC1sUBjMeYK%2FdH2HY0EeqzHhEiF4p9n407VlCmjWurdj97hMBMJqn65dMLnwi8IGOqUBwMmJ%2BjgC29RzD0wcfEwh4RSh5xg3shL8ZBMjIB3r8f%2BqkwyoDxswCbqGWFCbOPsKWy%2BOaT4iadnMTQtkSsVBP%2BbqWyAc88vmriHuobwj1UmLIW%2BB4FoP0qsjXjCOP0R8WlJTUMcmglogVFype5%2BRyRrD0HhEufvBA3NAEQyK%2BsbFknJDzU1F0c4SiSqbtiE8OIVKvnTn2K%2BTg35SFVYfDSGVSum8&X-Amz-Signature=23579110d6e6f7fe5c0f19ab64e0d273e1983f948d5e18af9d2b35aad9f39623&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RYQHAJU%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T150802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbB71NVRneCOlrpSzXi8orMD7ZctfVz9dtbvEblUgGCAiEAyzHcHb6lec2SMmWa6cCHUrL%2BUPg4Nl4dc5jV%2BgMGWb8q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDKvhU3%2B6CUckfRh3fircA6HMccAxh43wjhGDiTBhGqmRvU97FXnlbpVvgImM7rmG28UGgylTlJAHGiUR3NgG9KKqx%2Beo0c9pJYzDbpkEtYDhGtV49K20E7hImGpEimnuwWhxeuBwjmZq0WOiMn%2BBAKvMnhuX9DpX14acCIDVfst3j12VOlzib%2FLeIg6c16Y0QRf5rrinbmi7Pus2TPWqWcyvqQwKCbx5NfZD2bDHdVLICxnElXNwiVqgeV2INrM6%2FDhq5aZhKXryceHouuDAc8TqLuslubcIVyP8eqySelxsh7s4dU%2FDwvzYB6jiQ7rHbgK9bHmJ3yHGjlB3urvT5KyUFo547tM88vTpfA5xme1TdUzrPYI03CxRR%2BC7K9gZcHdrQCWGHsmzIpyvKnkXBQ5Jc7Ha9QSrzPEJRxQ8GzhDCo22Jd2RbnYDv9t4TbHkmVmZeHY%2FV6Y%2FgvOuFn6YZ6dacZH%2FLtFVlCccSAzu73BH5oqfwq9AKEf2Rk3RPC7PoaYdhRqFSW%2BG4y7YXiRb3WeBHOUed6TpPxkxGi4Kk0ykUUI5g6JflDY7jaX%2B8zYh7GFKg1IXcxvRp75jtN%2BM0rO9cC1sUBjMeYK%2FdH2HY0EeqzHhEiF4p9n407VlCmjWurdj97hMBMJqn65dMLnwi8IGOqUBwMmJ%2BjgC29RzD0wcfEwh4RSh5xg3shL8ZBMjIB3r8f%2BqkwyoDxswCbqGWFCbOPsKWy%2BOaT4iadnMTQtkSsVBP%2BbqWyAc88vmriHuobwj1UmLIW%2BB4FoP0qsjXjCOP0R8WlJTUMcmglogVFype5%2BRyRrD0HhEufvBA3NAEQyK%2BsbFknJDzU1F0c4SiSqbtiE8OIVKvnTn2K%2BTg35SFVYfDSGVSum8&X-Amz-Signature=4936178fd53e9f52fcf493fe4048e921af5d8337277fc237cf99d3e40cad3a2e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RYQHAJU%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T150802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbB71NVRneCOlrpSzXi8orMD7ZctfVz9dtbvEblUgGCAiEAyzHcHb6lec2SMmWa6cCHUrL%2BUPg4Nl4dc5jV%2BgMGWb8q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDKvhU3%2B6CUckfRh3fircA6HMccAxh43wjhGDiTBhGqmRvU97FXnlbpVvgImM7rmG28UGgylTlJAHGiUR3NgG9KKqx%2Beo0c9pJYzDbpkEtYDhGtV49K20E7hImGpEimnuwWhxeuBwjmZq0WOiMn%2BBAKvMnhuX9DpX14acCIDVfst3j12VOlzib%2FLeIg6c16Y0QRf5rrinbmi7Pus2TPWqWcyvqQwKCbx5NfZD2bDHdVLICxnElXNwiVqgeV2INrM6%2FDhq5aZhKXryceHouuDAc8TqLuslubcIVyP8eqySelxsh7s4dU%2FDwvzYB6jiQ7rHbgK9bHmJ3yHGjlB3urvT5KyUFo547tM88vTpfA5xme1TdUzrPYI03CxRR%2BC7K9gZcHdrQCWGHsmzIpyvKnkXBQ5Jc7Ha9QSrzPEJRxQ8GzhDCo22Jd2RbnYDv9t4TbHkmVmZeHY%2FV6Y%2FgvOuFn6YZ6dacZH%2FLtFVlCccSAzu73BH5oqfwq9AKEf2Rk3RPC7PoaYdhRqFSW%2BG4y7YXiRb3WeBHOUed6TpPxkxGi4Kk0ykUUI5g6JflDY7jaX%2B8zYh7GFKg1IXcxvRp75jtN%2BM0rO9cC1sUBjMeYK%2FdH2HY0EeqzHhEiF4p9n407VlCmjWurdj97hMBMJqn65dMLnwi8IGOqUBwMmJ%2BjgC29RzD0wcfEwh4RSh5xg3shL8ZBMjIB3r8f%2BqkwyoDxswCbqGWFCbOPsKWy%2BOaT4iadnMTQtkSsVBP%2BbqWyAc88vmriHuobwj1UmLIW%2BB4FoP0qsjXjCOP0R8WlJTUMcmglogVFype5%2BRyRrD0HhEufvBA3NAEQyK%2BsbFknJDzU1F0c4SiSqbtiE8OIVKvnTn2K%2BTg35SFVYfDSGVSum8&X-Amz-Signature=a6845340184e04f80271a33aefbe9df15528b51aab2b0e936f0ca6b368081766&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RYQHAJU%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T150802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbB71NVRneCOlrpSzXi8orMD7ZctfVz9dtbvEblUgGCAiEAyzHcHb6lec2SMmWa6cCHUrL%2BUPg4Nl4dc5jV%2BgMGWb8q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDKvhU3%2B6CUckfRh3fircA6HMccAxh43wjhGDiTBhGqmRvU97FXnlbpVvgImM7rmG28UGgylTlJAHGiUR3NgG9KKqx%2Beo0c9pJYzDbpkEtYDhGtV49K20E7hImGpEimnuwWhxeuBwjmZq0WOiMn%2BBAKvMnhuX9DpX14acCIDVfst3j12VOlzib%2FLeIg6c16Y0QRf5rrinbmi7Pus2TPWqWcyvqQwKCbx5NfZD2bDHdVLICxnElXNwiVqgeV2INrM6%2FDhq5aZhKXryceHouuDAc8TqLuslubcIVyP8eqySelxsh7s4dU%2FDwvzYB6jiQ7rHbgK9bHmJ3yHGjlB3urvT5KyUFo547tM88vTpfA5xme1TdUzrPYI03CxRR%2BC7K9gZcHdrQCWGHsmzIpyvKnkXBQ5Jc7Ha9QSrzPEJRxQ8GzhDCo22Jd2RbnYDv9t4TbHkmVmZeHY%2FV6Y%2FgvOuFn6YZ6dacZH%2FLtFVlCccSAzu73BH5oqfwq9AKEf2Rk3RPC7PoaYdhRqFSW%2BG4y7YXiRb3WeBHOUed6TpPxkxGi4Kk0ykUUI5g6JflDY7jaX%2B8zYh7GFKg1IXcxvRp75jtN%2BM0rO9cC1sUBjMeYK%2FdH2HY0EeqzHhEiF4p9n407VlCmjWurdj97hMBMJqn65dMLnwi8IGOqUBwMmJ%2BjgC29RzD0wcfEwh4RSh5xg3shL8ZBMjIB3r8f%2BqkwyoDxswCbqGWFCbOPsKWy%2BOaT4iadnMTQtkSsVBP%2BbqWyAc88vmriHuobwj1UmLIW%2BB4FoP0qsjXjCOP0R8WlJTUMcmglogVFype5%2BRyRrD0HhEufvBA3NAEQyK%2BsbFknJDzU1F0c4SiSqbtiE8OIVKvnTn2K%2BTg35SFVYfDSGVSum8&X-Amz-Signature=b1de04deacac003be769b6fddb81feb0be2198264ff72333119c176b30605c60&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RYQHAJU%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T150802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbB71NVRneCOlrpSzXi8orMD7ZctfVz9dtbvEblUgGCAiEAyzHcHb6lec2SMmWa6cCHUrL%2BUPg4Nl4dc5jV%2BgMGWb8q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDKvhU3%2B6CUckfRh3fircA6HMccAxh43wjhGDiTBhGqmRvU97FXnlbpVvgImM7rmG28UGgylTlJAHGiUR3NgG9KKqx%2Beo0c9pJYzDbpkEtYDhGtV49K20E7hImGpEimnuwWhxeuBwjmZq0WOiMn%2BBAKvMnhuX9DpX14acCIDVfst3j12VOlzib%2FLeIg6c16Y0QRf5rrinbmi7Pus2TPWqWcyvqQwKCbx5NfZD2bDHdVLICxnElXNwiVqgeV2INrM6%2FDhq5aZhKXryceHouuDAc8TqLuslubcIVyP8eqySelxsh7s4dU%2FDwvzYB6jiQ7rHbgK9bHmJ3yHGjlB3urvT5KyUFo547tM88vTpfA5xme1TdUzrPYI03CxRR%2BC7K9gZcHdrQCWGHsmzIpyvKnkXBQ5Jc7Ha9QSrzPEJRxQ8GzhDCo22Jd2RbnYDv9t4TbHkmVmZeHY%2FV6Y%2FgvOuFn6YZ6dacZH%2FLtFVlCccSAzu73BH5oqfwq9AKEf2Rk3RPC7PoaYdhRqFSW%2BG4y7YXiRb3WeBHOUed6TpPxkxGi4Kk0ykUUI5g6JflDY7jaX%2B8zYh7GFKg1IXcxvRp75jtN%2BM0rO9cC1sUBjMeYK%2FdH2HY0EeqzHhEiF4p9n407VlCmjWurdj97hMBMJqn65dMLnwi8IGOqUBwMmJ%2BjgC29RzD0wcfEwh4RSh5xg3shL8ZBMjIB3r8f%2BqkwyoDxswCbqGWFCbOPsKWy%2BOaT4iadnMTQtkSsVBP%2BbqWyAc88vmriHuobwj1UmLIW%2BB4FoP0qsjXjCOP0R8WlJTUMcmglogVFype5%2BRyRrD0HhEufvBA3NAEQyK%2BsbFknJDzU1F0c4SiSqbtiE8OIVKvnTn2K%2BTg35SFVYfDSGVSum8&X-Amz-Signature=edaae4dbc1d9d83bc73048d17e218b57d1f42da33e338c91f49825c4e0bddc8d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RYQHAJU%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T150802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHbB71NVRneCOlrpSzXi8orMD7ZctfVz9dtbvEblUgGCAiEAyzHcHb6lec2SMmWa6cCHUrL%2BUPg4Nl4dc5jV%2BgMGWb8q%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDKvhU3%2B6CUckfRh3fircA6HMccAxh43wjhGDiTBhGqmRvU97FXnlbpVvgImM7rmG28UGgylTlJAHGiUR3NgG9KKqx%2Beo0c9pJYzDbpkEtYDhGtV49K20E7hImGpEimnuwWhxeuBwjmZq0WOiMn%2BBAKvMnhuX9DpX14acCIDVfst3j12VOlzib%2FLeIg6c16Y0QRf5rrinbmi7Pus2TPWqWcyvqQwKCbx5NfZD2bDHdVLICxnElXNwiVqgeV2INrM6%2FDhq5aZhKXryceHouuDAc8TqLuslubcIVyP8eqySelxsh7s4dU%2FDwvzYB6jiQ7rHbgK9bHmJ3yHGjlB3urvT5KyUFo547tM88vTpfA5xme1TdUzrPYI03CxRR%2BC7K9gZcHdrQCWGHsmzIpyvKnkXBQ5Jc7Ha9QSrzPEJRxQ8GzhDCo22Jd2RbnYDv9t4TbHkmVmZeHY%2FV6Y%2FgvOuFn6YZ6dacZH%2FLtFVlCccSAzu73BH5oqfwq9AKEf2Rk3RPC7PoaYdhRqFSW%2BG4y7YXiRb3WeBHOUed6TpPxkxGi4Kk0ykUUI5g6JflDY7jaX%2B8zYh7GFKg1IXcxvRp75jtN%2BM0rO9cC1sUBjMeYK%2FdH2HY0EeqzHhEiF4p9n407VlCmjWurdj97hMBMJqn65dMLnwi8IGOqUBwMmJ%2BjgC29RzD0wcfEwh4RSh5xg3shL8ZBMjIB3r8f%2BqkwyoDxswCbqGWFCbOPsKWy%2BOaT4iadnMTQtkSsVBP%2BbqWyAc88vmriHuobwj1UmLIW%2BB4FoP0qsjXjCOP0R8WlJTUMcmglogVFype5%2BRyRrD0HhEufvBA3NAEQyK%2BsbFknJDzU1F0c4SiSqbtiE8OIVKvnTn2K%2BTg35SFVYfDSGVSum8&X-Amz-Signature=d766faca5edd7088e4ae69a7316efd4f7809bd30d01957e0f0e78dfa6c94e3b4&X-Amz-SignedHeaders=host&x-id=GetObject)
