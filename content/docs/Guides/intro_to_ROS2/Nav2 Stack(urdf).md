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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AS5IPJ2%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkF%2B8vWZrZvgheQCZq%2BmgKtyxfNCaztGN%2Fqa9u2wJSIwIhAK60vvKxJVapyVjXw%2FpP5bv8ibaPoy5K47XlWnS1QtNPKv8DCDgQABoMNjM3NDIzMTgzODA1IgycoPJMcJqUnVWoqFAq3APNEtTXuQVFWbeoJfFMQUqYaXSviLFE%2Fdut%2FTj3An6WpMqPNxnR3AvBERLUGg0ZzrjEfajisSGkdPUcoGqqgFN7kwcKlWpzaoe%2B%2Fa%2BDKStvqoS2mwvwBf7W7HCoipUySEwXSTBPLmGJun7XxjOYqWhJDxreo2B2Hs48HRMVSYjgxHRClncIKCEppcjLKOhyuwhHYTOCDbiaCcbxD6eK3NCtz93s59xTVTQhpKtoco9FTpZCQfEwCnwGVO%2F7x8JGgwad9IQ4qkfdiDAG2HeePK1I0E2C711MwaM8dbPxbx5ZyemCrnb4kTMH9fZI65YbLjNyct9IWbM%2FR7EA1Q3bs%2F6MnXS2jJZQmOkFQY%2FhfTBtGyg09khAuuLW0FUcPRJL%2FNVXRLYLgsEMtClpJMG8ISu%2BGkZy6ykzjJTVhLSeKpOW8iRKxILccTHA8BLNRrA1oNK1EebtLjO2YFLmswv%2BJDZWlksEc%2BdNQBshLqrVU5sqwBVq3JZ6gB33x%2Bprbzq3fyeKFkhb286r1X1X%2BbPpu7JMNdz3ozI926vhTELx0obb8kDVKMcgJYLlVdGDc0DTNQw2uDGwKSoBNvXdYH1fGu5h6Hv5iVyHb8GqEiqwVjqHutc4D5v4zR8xmg2gljCFjpK%2FBjqkAadKVuFL34W5mrf5ierwegeHA0%2Ff%2BvKc30dEyhVPVT5LkUiEJm3%2FSQ0xRQ%2BAKgYL7IyOpFDuYIfO0t6LPufIHydl%2FBmk35rdoWtOXFkm32sYZMgLnF%2B2E93WGyhKWTPtUNrflZfPq9nmqk90t425iH5T4kNdeRuoBVxNHsIxRVUqrvPeTYfXAf%2Bwm3dzFefk%2FxjrnBAY7pAfLaSLG7aFk9uCltB6&X-Amz-Signature=9429bb2616a35f5e66111e416519f369f6bf6a44d650f4446d84aeef03224191&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AS5IPJ2%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkF%2B8vWZrZvgheQCZq%2BmgKtyxfNCaztGN%2Fqa9u2wJSIwIhAK60vvKxJVapyVjXw%2FpP5bv8ibaPoy5K47XlWnS1QtNPKv8DCDgQABoMNjM3NDIzMTgzODA1IgycoPJMcJqUnVWoqFAq3APNEtTXuQVFWbeoJfFMQUqYaXSviLFE%2Fdut%2FTj3An6WpMqPNxnR3AvBERLUGg0ZzrjEfajisSGkdPUcoGqqgFN7kwcKlWpzaoe%2B%2Fa%2BDKStvqoS2mwvwBf7W7HCoipUySEwXSTBPLmGJun7XxjOYqWhJDxreo2B2Hs48HRMVSYjgxHRClncIKCEppcjLKOhyuwhHYTOCDbiaCcbxD6eK3NCtz93s59xTVTQhpKtoco9FTpZCQfEwCnwGVO%2F7x8JGgwad9IQ4qkfdiDAG2HeePK1I0E2C711MwaM8dbPxbx5ZyemCrnb4kTMH9fZI65YbLjNyct9IWbM%2FR7EA1Q3bs%2F6MnXS2jJZQmOkFQY%2FhfTBtGyg09khAuuLW0FUcPRJL%2FNVXRLYLgsEMtClpJMG8ISu%2BGkZy6ykzjJTVhLSeKpOW8iRKxILccTHA8BLNRrA1oNK1EebtLjO2YFLmswv%2BJDZWlksEc%2BdNQBshLqrVU5sqwBVq3JZ6gB33x%2Bprbzq3fyeKFkhb286r1X1X%2BbPpu7JMNdz3ozI926vhTELx0obb8kDVKMcgJYLlVdGDc0DTNQw2uDGwKSoBNvXdYH1fGu5h6Hv5iVyHb8GqEiqwVjqHutc4D5v4zR8xmg2gljCFjpK%2FBjqkAadKVuFL34W5mrf5ierwegeHA0%2Ff%2BvKc30dEyhVPVT5LkUiEJm3%2FSQ0xRQ%2BAKgYL7IyOpFDuYIfO0t6LPufIHydl%2FBmk35rdoWtOXFkm32sYZMgLnF%2B2E93WGyhKWTPtUNrflZfPq9nmqk90t425iH5T4kNdeRuoBVxNHsIxRVUqrvPeTYfXAf%2Bwm3dzFefk%2FxjrnBAY7pAfLaSLG7aFk9uCltB6&X-Amz-Signature=8ac11e5bf90579ebc0d180e4c547955e8a2949ef5519711b780c705516d6c214&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AS5IPJ2%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkF%2B8vWZrZvgheQCZq%2BmgKtyxfNCaztGN%2Fqa9u2wJSIwIhAK60vvKxJVapyVjXw%2FpP5bv8ibaPoy5K47XlWnS1QtNPKv8DCDgQABoMNjM3NDIzMTgzODA1IgycoPJMcJqUnVWoqFAq3APNEtTXuQVFWbeoJfFMQUqYaXSviLFE%2Fdut%2FTj3An6WpMqPNxnR3AvBERLUGg0ZzrjEfajisSGkdPUcoGqqgFN7kwcKlWpzaoe%2B%2Fa%2BDKStvqoS2mwvwBf7W7HCoipUySEwXSTBPLmGJun7XxjOYqWhJDxreo2B2Hs48HRMVSYjgxHRClncIKCEppcjLKOhyuwhHYTOCDbiaCcbxD6eK3NCtz93s59xTVTQhpKtoco9FTpZCQfEwCnwGVO%2F7x8JGgwad9IQ4qkfdiDAG2HeePK1I0E2C711MwaM8dbPxbx5ZyemCrnb4kTMH9fZI65YbLjNyct9IWbM%2FR7EA1Q3bs%2F6MnXS2jJZQmOkFQY%2FhfTBtGyg09khAuuLW0FUcPRJL%2FNVXRLYLgsEMtClpJMG8ISu%2BGkZy6ykzjJTVhLSeKpOW8iRKxILccTHA8BLNRrA1oNK1EebtLjO2YFLmswv%2BJDZWlksEc%2BdNQBshLqrVU5sqwBVq3JZ6gB33x%2Bprbzq3fyeKFkhb286r1X1X%2BbPpu7JMNdz3ozI926vhTELx0obb8kDVKMcgJYLlVdGDc0DTNQw2uDGwKSoBNvXdYH1fGu5h6Hv5iVyHb8GqEiqwVjqHutc4D5v4zR8xmg2gljCFjpK%2FBjqkAadKVuFL34W5mrf5ierwegeHA0%2Ff%2BvKc30dEyhVPVT5LkUiEJm3%2FSQ0xRQ%2BAKgYL7IyOpFDuYIfO0t6LPufIHydl%2FBmk35rdoWtOXFkm32sYZMgLnF%2B2E93WGyhKWTPtUNrflZfPq9nmqk90t425iH5T4kNdeRuoBVxNHsIxRVUqrvPeTYfXAf%2Bwm3dzFefk%2FxjrnBAY7pAfLaSLG7aFk9uCltB6&X-Amz-Signature=7d0c9a3ed9a176fb38eabf0056e1e887d11fdca91591d8982c63f522ce5beb55&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AS5IPJ2%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkF%2B8vWZrZvgheQCZq%2BmgKtyxfNCaztGN%2Fqa9u2wJSIwIhAK60vvKxJVapyVjXw%2FpP5bv8ibaPoy5K47XlWnS1QtNPKv8DCDgQABoMNjM3NDIzMTgzODA1IgycoPJMcJqUnVWoqFAq3APNEtTXuQVFWbeoJfFMQUqYaXSviLFE%2Fdut%2FTj3An6WpMqPNxnR3AvBERLUGg0ZzrjEfajisSGkdPUcoGqqgFN7kwcKlWpzaoe%2B%2Fa%2BDKStvqoS2mwvwBf7W7HCoipUySEwXSTBPLmGJun7XxjOYqWhJDxreo2B2Hs48HRMVSYjgxHRClncIKCEppcjLKOhyuwhHYTOCDbiaCcbxD6eK3NCtz93s59xTVTQhpKtoco9FTpZCQfEwCnwGVO%2F7x8JGgwad9IQ4qkfdiDAG2HeePK1I0E2C711MwaM8dbPxbx5ZyemCrnb4kTMH9fZI65YbLjNyct9IWbM%2FR7EA1Q3bs%2F6MnXS2jJZQmOkFQY%2FhfTBtGyg09khAuuLW0FUcPRJL%2FNVXRLYLgsEMtClpJMG8ISu%2BGkZy6ykzjJTVhLSeKpOW8iRKxILccTHA8BLNRrA1oNK1EebtLjO2YFLmswv%2BJDZWlksEc%2BdNQBshLqrVU5sqwBVq3JZ6gB33x%2Bprbzq3fyeKFkhb286r1X1X%2BbPpu7JMNdz3ozI926vhTELx0obb8kDVKMcgJYLlVdGDc0DTNQw2uDGwKSoBNvXdYH1fGu5h6Hv5iVyHb8GqEiqwVjqHutc4D5v4zR8xmg2gljCFjpK%2FBjqkAadKVuFL34W5mrf5ierwegeHA0%2Ff%2BvKc30dEyhVPVT5LkUiEJm3%2FSQ0xRQ%2BAKgYL7IyOpFDuYIfO0t6LPufIHydl%2FBmk35rdoWtOXFkm32sYZMgLnF%2B2E93WGyhKWTPtUNrflZfPq9nmqk90t425iH5T4kNdeRuoBVxNHsIxRVUqrvPeTYfXAf%2Bwm3dzFefk%2FxjrnBAY7pAfLaSLG7aFk9uCltB6&X-Amz-Signature=4e8544c8821a753d656c4152e014c9c0932eb308181603fced7e22c0e6bf35fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AS5IPJ2%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkF%2B8vWZrZvgheQCZq%2BmgKtyxfNCaztGN%2Fqa9u2wJSIwIhAK60vvKxJVapyVjXw%2FpP5bv8ibaPoy5K47XlWnS1QtNPKv8DCDgQABoMNjM3NDIzMTgzODA1IgycoPJMcJqUnVWoqFAq3APNEtTXuQVFWbeoJfFMQUqYaXSviLFE%2Fdut%2FTj3An6WpMqPNxnR3AvBERLUGg0ZzrjEfajisSGkdPUcoGqqgFN7kwcKlWpzaoe%2B%2Fa%2BDKStvqoS2mwvwBf7W7HCoipUySEwXSTBPLmGJun7XxjOYqWhJDxreo2B2Hs48HRMVSYjgxHRClncIKCEppcjLKOhyuwhHYTOCDbiaCcbxD6eK3NCtz93s59xTVTQhpKtoco9FTpZCQfEwCnwGVO%2F7x8JGgwad9IQ4qkfdiDAG2HeePK1I0E2C711MwaM8dbPxbx5ZyemCrnb4kTMH9fZI65YbLjNyct9IWbM%2FR7EA1Q3bs%2F6MnXS2jJZQmOkFQY%2FhfTBtGyg09khAuuLW0FUcPRJL%2FNVXRLYLgsEMtClpJMG8ISu%2BGkZy6ykzjJTVhLSeKpOW8iRKxILccTHA8BLNRrA1oNK1EebtLjO2YFLmswv%2BJDZWlksEc%2BdNQBshLqrVU5sqwBVq3JZ6gB33x%2Bprbzq3fyeKFkhb286r1X1X%2BbPpu7JMNdz3ozI926vhTELx0obb8kDVKMcgJYLlVdGDc0DTNQw2uDGwKSoBNvXdYH1fGu5h6Hv5iVyHb8GqEiqwVjqHutc4D5v4zR8xmg2gljCFjpK%2FBjqkAadKVuFL34W5mrf5ierwegeHA0%2Ff%2BvKc30dEyhVPVT5LkUiEJm3%2FSQ0xRQ%2BAKgYL7IyOpFDuYIfO0t6LPufIHydl%2FBmk35rdoWtOXFkm32sYZMgLnF%2B2E93WGyhKWTPtUNrflZfPq9nmqk90t425iH5T4kNdeRuoBVxNHsIxRVUqrvPeTYfXAf%2Bwm3dzFefk%2FxjrnBAY7pAfLaSLG7aFk9uCltB6&X-Amz-Signature=3546759654aae5edb3ebb9cdc26e655d0aa78bd1db454ca1dc3e7ed0cb9e77eb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AS5IPJ2%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkF%2B8vWZrZvgheQCZq%2BmgKtyxfNCaztGN%2Fqa9u2wJSIwIhAK60vvKxJVapyVjXw%2FpP5bv8ibaPoy5K47XlWnS1QtNPKv8DCDgQABoMNjM3NDIzMTgzODA1IgycoPJMcJqUnVWoqFAq3APNEtTXuQVFWbeoJfFMQUqYaXSviLFE%2Fdut%2FTj3An6WpMqPNxnR3AvBERLUGg0ZzrjEfajisSGkdPUcoGqqgFN7kwcKlWpzaoe%2B%2Fa%2BDKStvqoS2mwvwBf7W7HCoipUySEwXSTBPLmGJun7XxjOYqWhJDxreo2B2Hs48HRMVSYjgxHRClncIKCEppcjLKOhyuwhHYTOCDbiaCcbxD6eK3NCtz93s59xTVTQhpKtoco9FTpZCQfEwCnwGVO%2F7x8JGgwad9IQ4qkfdiDAG2HeePK1I0E2C711MwaM8dbPxbx5ZyemCrnb4kTMH9fZI65YbLjNyct9IWbM%2FR7EA1Q3bs%2F6MnXS2jJZQmOkFQY%2FhfTBtGyg09khAuuLW0FUcPRJL%2FNVXRLYLgsEMtClpJMG8ISu%2BGkZy6ykzjJTVhLSeKpOW8iRKxILccTHA8BLNRrA1oNK1EebtLjO2YFLmswv%2BJDZWlksEc%2BdNQBshLqrVU5sqwBVq3JZ6gB33x%2Bprbzq3fyeKFkhb286r1X1X%2BbPpu7JMNdz3ozI926vhTELx0obb8kDVKMcgJYLlVdGDc0DTNQw2uDGwKSoBNvXdYH1fGu5h6Hv5iVyHb8GqEiqwVjqHutc4D5v4zR8xmg2gljCFjpK%2FBjqkAadKVuFL34W5mrf5ierwegeHA0%2Ff%2BvKc30dEyhVPVT5LkUiEJm3%2FSQ0xRQ%2BAKgYL7IyOpFDuYIfO0t6LPufIHydl%2FBmk35rdoWtOXFkm32sYZMgLnF%2B2E93WGyhKWTPtUNrflZfPq9nmqk90t425iH5T4kNdeRuoBVxNHsIxRVUqrvPeTYfXAf%2Bwm3dzFefk%2FxjrnBAY7pAfLaSLG7aFk9uCltB6&X-Amz-Signature=7fbe47457dc67ceb27c892e22880e6ab858bf3b34f89daef0c034e16d1bd3c2b&X-Amz-SignedHeaders=host&x-id=GetObject)
