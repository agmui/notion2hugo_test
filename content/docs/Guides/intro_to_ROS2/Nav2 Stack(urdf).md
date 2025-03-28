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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4FMTDPJ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6AXgLqQFDwLsaa7DcRiJNbPHbE8r6zhF2dzJBnViIJgIhAKslZ9ncpmtYjK%2BzSvJm%2Fj4ouG%2BLKILHnD9%2BmUvezrw%2FKv8DCFgQABoMNjM3NDIzMTgzODA1Igxbnh4Gibl2byQQWlQq3AN6yAFj%2FXe1TU4qTDfodY5Rxea%2FF9LYxMyDKiadE4Bwn%2BdfZfrLd6%2FdjvGGcG7svwPNNivbZDswUEWJKfnDVpgXDl9TBtWdL9E8aKZruQ6wneXtOgbxGfHNc%2BmEONlYWBSczUeO7XrYU4qIRqFKhmeWM2v4c6z40Mk7MHQY1AWN4K1TH5tXD06zfm%2Bqh3%2BCb3cuBAlCTbIgmjuzDnTHveWnH%2FpNMU8d6ulkbppOjgTOHpZq24xUcVjNsfjQ96UPN%2FXZWHHlJvazZX8p3IJ6Vay1xCASS18u0440t0wo6ve3HJ5Wl%2Bn7jbA%2F6ZnWjV%2BM0I3Zk0UfL0g9mYHVv6m5%2F1wpieYY8h8BnRnisAcaQ8WKs4BT%2Fvui5TorgGY2hZh%2BePM47KiFlLzaoGlCz5jcd%2F90AwYkvLxenjG51DMwdVB5ne2uI4JPEOHVk7U0DhV34DTxaxh1Afggjj1TSM4ctAMmzk9LPiWGqNLeT%2FV9Gxs84qJYGr6w7XYZRu2BQAngaQxvG1a3YQao6L78AIOkWixX44MxleMr0LSpzHmuJWPBKzypdi%2FF1gVY0xu3gpD2qcDeoXor4c5rHGqYQr1c32g72Os20qU9mZZXiL7gLt3F1%2FHTw%2FUSU%2BriOLyd%2FDCNhpm%2FBjqkARmb7xBCdh0gBqR8LJQR1Uo6AWh9vhZRL5I9%2BI1ZRzOHVubXH%2FmaLpLnQ8ShZEeajH7RL79EPIfGTzVgm7Z8iAAXH0i2S28PMHioEXOxBA2uvuykDWe3HxFSWk9gE2lAey61cH4VAG07Ne3GiDuGLa0vjjWkEFcH5hUENSyHQs6tDW1v9wiUilqrgMbF6o0Q2VvlSOYvjX6WB9daYzuKb58%2BhDHu&X-Amz-Signature=511bd0561f118deee23502fba950bc67bbb8d9fd7ffd0f5f819bebb09444b53c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4FMTDPJ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6AXgLqQFDwLsaa7DcRiJNbPHbE8r6zhF2dzJBnViIJgIhAKslZ9ncpmtYjK%2BzSvJm%2Fj4ouG%2BLKILHnD9%2BmUvezrw%2FKv8DCFgQABoMNjM3NDIzMTgzODA1Igxbnh4Gibl2byQQWlQq3AN6yAFj%2FXe1TU4qTDfodY5Rxea%2FF9LYxMyDKiadE4Bwn%2BdfZfrLd6%2FdjvGGcG7svwPNNivbZDswUEWJKfnDVpgXDl9TBtWdL9E8aKZruQ6wneXtOgbxGfHNc%2BmEONlYWBSczUeO7XrYU4qIRqFKhmeWM2v4c6z40Mk7MHQY1AWN4K1TH5tXD06zfm%2Bqh3%2BCb3cuBAlCTbIgmjuzDnTHveWnH%2FpNMU8d6ulkbppOjgTOHpZq24xUcVjNsfjQ96UPN%2FXZWHHlJvazZX8p3IJ6Vay1xCASS18u0440t0wo6ve3HJ5Wl%2Bn7jbA%2F6ZnWjV%2BM0I3Zk0UfL0g9mYHVv6m5%2F1wpieYY8h8BnRnisAcaQ8WKs4BT%2Fvui5TorgGY2hZh%2BePM47KiFlLzaoGlCz5jcd%2F90AwYkvLxenjG51DMwdVB5ne2uI4JPEOHVk7U0DhV34DTxaxh1Afggjj1TSM4ctAMmzk9LPiWGqNLeT%2FV9Gxs84qJYGr6w7XYZRu2BQAngaQxvG1a3YQao6L78AIOkWixX44MxleMr0LSpzHmuJWPBKzypdi%2FF1gVY0xu3gpD2qcDeoXor4c5rHGqYQr1c32g72Os20qU9mZZXiL7gLt3F1%2FHTw%2FUSU%2BriOLyd%2FDCNhpm%2FBjqkARmb7xBCdh0gBqR8LJQR1Uo6AWh9vhZRL5I9%2BI1ZRzOHVubXH%2FmaLpLnQ8ShZEeajH7RL79EPIfGTzVgm7Z8iAAXH0i2S28PMHioEXOxBA2uvuykDWe3HxFSWk9gE2lAey61cH4VAG07Ne3GiDuGLa0vjjWkEFcH5hUENSyHQs6tDW1v9wiUilqrgMbF6o0Q2VvlSOYvjX6WB9daYzuKb58%2BhDHu&X-Amz-Signature=e5916b765d2192e243bd14ed276d2ab6444d80f24e704f37b0cab086040de03a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4FMTDPJ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6AXgLqQFDwLsaa7DcRiJNbPHbE8r6zhF2dzJBnViIJgIhAKslZ9ncpmtYjK%2BzSvJm%2Fj4ouG%2BLKILHnD9%2BmUvezrw%2FKv8DCFgQABoMNjM3NDIzMTgzODA1Igxbnh4Gibl2byQQWlQq3AN6yAFj%2FXe1TU4qTDfodY5Rxea%2FF9LYxMyDKiadE4Bwn%2BdfZfrLd6%2FdjvGGcG7svwPNNivbZDswUEWJKfnDVpgXDl9TBtWdL9E8aKZruQ6wneXtOgbxGfHNc%2BmEONlYWBSczUeO7XrYU4qIRqFKhmeWM2v4c6z40Mk7MHQY1AWN4K1TH5tXD06zfm%2Bqh3%2BCb3cuBAlCTbIgmjuzDnTHveWnH%2FpNMU8d6ulkbppOjgTOHpZq24xUcVjNsfjQ96UPN%2FXZWHHlJvazZX8p3IJ6Vay1xCASS18u0440t0wo6ve3HJ5Wl%2Bn7jbA%2F6ZnWjV%2BM0I3Zk0UfL0g9mYHVv6m5%2F1wpieYY8h8BnRnisAcaQ8WKs4BT%2Fvui5TorgGY2hZh%2BePM47KiFlLzaoGlCz5jcd%2F90AwYkvLxenjG51DMwdVB5ne2uI4JPEOHVk7U0DhV34DTxaxh1Afggjj1TSM4ctAMmzk9LPiWGqNLeT%2FV9Gxs84qJYGr6w7XYZRu2BQAngaQxvG1a3YQao6L78AIOkWixX44MxleMr0LSpzHmuJWPBKzypdi%2FF1gVY0xu3gpD2qcDeoXor4c5rHGqYQr1c32g72Os20qU9mZZXiL7gLt3F1%2FHTw%2FUSU%2BriOLyd%2FDCNhpm%2FBjqkARmb7xBCdh0gBqR8LJQR1Uo6AWh9vhZRL5I9%2BI1ZRzOHVubXH%2FmaLpLnQ8ShZEeajH7RL79EPIfGTzVgm7Z8iAAXH0i2S28PMHioEXOxBA2uvuykDWe3HxFSWk9gE2lAey61cH4VAG07Ne3GiDuGLa0vjjWkEFcH5hUENSyHQs6tDW1v9wiUilqrgMbF6o0Q2VvlSOYvjX6WB9daYzuKb58%2BhDHu&X-Amz-Signature=7f229014ed80a9faf417ad67f67a5de285183aaccb7a991747a5537003cfe04b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4FMTDPJ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6AXgLqQFDwLsaa7DcRiJNbPHbE8r6zhF2dzJBnViIJgIhAKslZ9ncpmtYjK%2BzSvJm%2Fj4ouG%2BLKILHnD9%2BmUvezrw%2FKv8DCFgQABoMNjM3NDIzMTgzODA1Igxbnh4Gibl2byQQWlQq3AN6yAFj%2FXe1TU4qTDfodY5Rxea%2FF9LYxMyDKiadE4Bwn%2BdfZfrLd6%2FdjvGGcG7svwPNNivbZDswUEWJKfnDVpgXDl9TBtWdL9E8aKZruQ6wneXtOgbxGfHNc%2BmEONlYWBSczUeO7XrYU4qIRqFKhmeWM2v4c6z40Mk7MHQY1AWN4K1TH5tXD06zfm%2Bqh3%2BCb3cuBAlCTbIgmjuzDnTHveWnH%2FpNMU8d6ulkbppOjgTOHpZq24xUcVjNsfjQ96UPN%2FXZWHHlJvazZX8p3IJ6Vay1xCASS18u0440t0wo6ve3HJ5Wl%2Bn7jbA%2F6ZnWjV%2BM0I3Zk0UfL0g9mYHVv6m5%2F1wpieYY8h8BnRnisAcaQ8WKs4BT%2Fvui5TorgGY2hZh%2BePM47KiFlLzaoGlCz5jcd%2F90AwYkvLxenjG51DMwdVB5ne2uI4JPEOHVk7U0DhV34DTxaxh1Afggjj1TSM4ctAMmzk9LPiWGqNLeT%2FV9Gxs84qJYGr6w7XYZRu2BQAngaQxvG1a3YQao6L78AIOkWixX44MxleMr0LSpzHmuJWPBKzypdi%2FF1gVY0xu3gpD2qcDeoXor4c5rHGqYQr1c32g72Os20qU9mZZXiL7gLt3F1%2FHTw%2FUSU%2BriOLyd%2FDCNhpm%2FBjqkARmb7xBCdh0gBqR8LJQR1Uo6AWh9vhZRL5I9%2BI1ZRzOHVubXH%2FmaLpLnQ8ShZEeajH7RL79EPIfGTzVgm7Z8iAAXH0i2S28PMHioEXOxBA2uvuykDWe3HxFSWk9gE2lAey61cH4VAG07Ne3GiDuGLa0vjjWkEFcH5hUENSyHQs6tDW1v9wiUilqrgMbF6o0Q2VvlSOYvjX6WB9daYzuKb58%2BhDHu&X-Amz-Signature=0a9e3bd2ca33907db32177fcfe40756a679afb4154406046d800f6afd5ed3e44&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4FMTDPJ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6AXgLqQFDwLsaa7DcRiJNbPHbE8r6zhF2dzJBnViIJgIhAKslZ9ncpmtYjK%2BzSvJm%2Fj4ouG%2BLKILHnD9%2BmUvezrw%2FKv8DCFgQABoMNjM3NDIzMTgzODA1Igxbnh4Gibl2byQQWlQq3AN6yAFj%2FXe1TU4qTDfodY5Rxea%2FF9LYxMyDKiadE4Bwn%2BdfZfrLd6%2FdjvGGcG7svwPNNivbZDswUEWJKfnDVpgXDl9TBtWdL9E8aKZruQ6wneXtOgbxGfHNc%2BmEONlYWBSczUeO7XrYU4qIRqFKhmeWM2v4c6z40Mk7MHQY1AWN4K1TH5tXD06zfm%2Bqh3%2BCb3cuBAlCTbIgmjuzDnTHveWnH%2FpNMU8d6ulkbppOjgTOHpZq24xUcVjNsfjQ96UPN%2FXZWHHlJvazZX8p3IJ6Vay1xCASS18u0440t0wo6ve3HJ5Wl%2Bn7jbA%2F6ZnWjV%2BM0I3Zk0UfL0g9mYHVv6m5%2F1wpieYY8h8BnRnisAcaQ8WKs4BT%2Fvui5TorgGY2hZh%2BePM47KiFlLzaoGlCz5jcd%2F90AwYkvLxenjG51DMwdVB5ne2uI4JPEOHVk7U0DhV34DTxaxh1Afggjj1TSM4ctAMmzk9LPiWGqNLeT%2FV9Gxs84qJYGr6w7XYZRu2BQAngaQxvG1a3YQao6L78AIOkWixX44MxleMr0LSpzHmuJWPBKzypdi%2FF1gVY0xu3gpD2qcDeoXor4c5rHGqYQr1c32g72Os20qU9mZZXiL7gLt3F1%2FHTw%2FUSU%2BriOLyd%2FDCNhpm%2FBjqkARmb7xBCdh0gBqR8LJQR1Uo6AWh9vhZRL5I9%2BI1ZRzOHVubXH%2FmaLpLnQ8ShZEeajH7RL79EPIfGTzVgm7Z8iAAXH0i2S28PMHioEXOxBA2uvuykDWe3HxFSWk9gE2lAey61cH4VAG07Ne3GiDuGLa0vjjWkEFcH5hUENSyHQs6tDW1v9wiUilqrgMbF6o0Q2VvlSOYvjX6WB9daYzuKb58%2BhDHu&X-Amz-Signature=28095d90067e460907d0451e9aee20bdda444b962ced72077e9b134086bab4ff&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4FMTDPJ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T070903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6AXgLqQFDwLsaa7DcRiJNbPHbE8r6zhF2dzJBnViIJgIhAKslZ9ncpmtYjK%2BzSvJm%2Fj4ouG%2BLKILHnD9%2BmUvezrw%2FKv8DCFgQABoMNjM3NDIzMTgzODA1Igxbnh4Gibl2byQQWlQq3AN6yAFj%2FXe1TU4qTDfodY5Rxea%2FF9LYxMyDKiadE4Bwn%2BdfZfrLd6%2FdjvGGcG7svwPNNivbZDswUEWJKfnDVpgXDl9TBtWdL9E8aKZruQ6wneXtOgbxGfHNc%2BmEONlYWBSczUeO7XrYU4qIRqFKhmeWM2v4c6z40Mk7MHQY1AWN4K1TH5tXD06zfm%2Bqh3%2BCb3cuBAlCTbIgmjuzDnTHveWnH%2FpNMU8d6ulkbppOjgTOHpZq24xUcVjNsfjQ96UPN%2FXZWHHlJvazZX8p3IJ6Vay1xCASS18u0440t0wo6ve3HJ5Wl%2Bn7jbA%2F6ZnWjV%2BM0I3Zk0UfL0g9mYHVv6m5%2F1wpieYY8h8BnRnisAcaQ8WKs4BT%2Fvui5TorgGY2hZh%2BePM47KiFlLzaoGlCz5jcd%2F90AwYkvLxenjG51DMwdVB5ne2uI4JPEOHVk7U0DhV34DTxaxh1Afggjj1TSM4ctAMmzk9LPiWGqNLeT%2FV9Gxs84qJYGr6w7XYZRu2BQAngaQxvG1a3YQao6L78AIOkWixX44MxleMr0LSpzHmuJWPBKzypdi%2FF1gVY0xu3gpD2qcDeoXor4c5rHGqYQr1c32g72Os20qU9mZZXiL7gLt3F1%2FHTw%2FUSU%2BriOLyd%2FDCNhpm%2FBjqkARmb7xBCdh0gBqR8LJQR1Uo6AWh9vhZRL5I9%2BI1ZRzOHVubXH%2FmaLpLnQ8ShZEeajH7RL79EPIfGTzVgm7Z8iAAXH0i2S28PMHioEXOxBA2uvuykDWe3HxFSWk9gE2lAey61cH4VAG07Ne3GiDuGLa0vjjWkEFcH5hUENSyHQs6tDW1v9wiUilqrgMbF6o0Q2VvlSOYvjX6WB9daYzuKb58%2BhDHu&X-Amz-Signature=e3c75f7249353416f9e4e79a24bb8e72a7ef69aabb468cccddfc5da5b2c3c8aa&X-Amz-SignedHeaders=host&x-id=GetObject)
