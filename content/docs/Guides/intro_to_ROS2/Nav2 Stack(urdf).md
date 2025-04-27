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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHQSU2ZP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T070749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAM7IlnaiH3F1adVXLmRkXVFJ0DwuBCUa2h3AxVHktgXAiBQt6B7%2FTFvjfrO32Gn58TTe3qzbLT6bwFo1jid1EfbYyr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMsLKcFX6QcUEPtOtSKtwDON4g2vsVctLAhYul4EEiPleHfYjofhzYbBX5NjSsu9D3ifxZJZv1B1AQTEOCZkwxgzcH3IqvBI4AM44p7LVZ82ZGrDOdktnnu0GxytcP1aeeolGVIzHU03BwkRK7ix7MDDVlwA4rMdaVFGgxlfgxh01wOw1%2FbzKzXAHQNIfEvRJUgtSt7iKE3XH5ZYXdee1trXyiCkh%2FbdM3GDAE7NIUtDkuz1AKYBehfgOKgzI65cCTDjkXIBLvUG1RXokiOceK9Qyz32yvtUoUXKC7nkJRb5CaVhNOFns7zWft8Ytzxhipy1RklP61DMb30ONNcjgrFjEvybPbFk6L%2Bbijkb2rsuL%2B8wvcjzEEcY4Yx9pgt4wybVzdkfrqkdHjUt%2B63CQ%2BEWOTGMaeatms%2FT6RN%2F0rlO8IybkBqv0MuolDRf28YoORVyLlkZa1keQgP9ko%2BevRFvv4Sy10JMVLQdPsg%2FYuNLaMv39bDmLRgO66zkWeug7HSl9Ka1i9ceEKpLvN3RBU0%2BA%2BrsQGFzddC5Nu6ZspPUIVmPSq3vP7Ox1hKOFjQsZt0CwGrfC1Y9qFffsj88Qet%2FI00APJ9DZOgg9BXiqgUvyhr%2FZXdW%2FSLNCDUoIhax2HbRe%2FtcQcHVKMre4wxO22wAY6pgGXS1vlbtHZH4z6%2B3Y4rV4pBkrOzPu89g0DnM47RIRzvDR4n6Vkl%2B03tG6EJ1kgZa0gt%2F%2Bq3SfsB9DaQqLd6joyaLIv%2BHw0zmejR6RidZ4yPHzWlq06PDhwbQCCQjb8UIw7hF%2Bf2qwt0Zb42dPyBq0XntYYlgfIOO2iocxX7alJTxwMAIzvgjX69C2yJ8bVfFFW%2B4G2b9tmYKsK%2FqXw%2FaFPm7q%2BbNUn&X-Amz-Signature=869668de016fed3834a14ff5685c2be76591d9a11307a8586dd662f0dd75843b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHQSU2ZP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T070749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAM7IlnaiH3F1adVXLmRkXVFJ0DwuBCUa2h3AxVHktgXAiBQt6B7%2FTFvjfrO32Gn58TTe3qzbLT6bwFo1jid1EfbYyr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMsLKcFX6QcUEPtOtSKtwDON4g2vsVctLAhYul4EEiPleHfYjofhzYbBX5NjSsu9D3ifxZJZv1B1AQTEOCZkwxgzcH3IqvBI4AM44p7LVZ82ZGrDOdktnnu0GxytcP1aeeolGVIzHU03BwkRK7ix7MDDVlwA4rMdaVFGgxlfgxh01wOw1%2FbzKzXAHQNIfEvRJUgtSt7iKE3XH5ZYXdee1trXyiCkh%2FbdM3GDAE7NIUtDkuz1AKYBehfgOKgzI65cCTDjkXIBLvUG1RXokiOceK9Qyz32yvtUoUXKC7nkJRb5CaVhNOFns7zWft8Ytzxhipy1RklP61DMb30ONNcjgrFjEvybPbFk6L%2Bbijkb2rsuL%2B8wvcjzEEcY4Yx9pgt4wybVzdkfrqkdHjUt%2B63CQ%2BEWOTGMaeatms%2FT6RN%2F0rlO8IybkBqv0MuolDRf28YoORVyLlkZa1keQgP9ko%2BevRFvv4Sy10JMVLQdPsg%2FYuNLaMv39bDmLRgO66zkWeug7HSl9Ka1i9ceEKpLvN3RBU0%2BA%2BrsQGFzddC5Nu6ZspPUIVmPSq3vP7Ox1hKOFjQsZt0CwGrfC1Y9qFffsj88Qet%2FI00APJ9DZOgg9BXiqgUvyhr%2FZXdW%2FSLNCDUoIhax2HbRe%2FtcQcHVKMre4wxO22wAY6pgGXS1vlbtHZH4z6%2B3Y4rV4pBkrOzPu89g0DnM47RIRzvDR4n6Vkl%2B03tG6EJ1kgZa0gt%2F%2Bq3SfsB9DaQqLd6joyaLIv%2BHw0zmejR6RidZ4yPHzWlq06PDhwbQCCQjb8UIw7hF%2Bf2qwt0Zb42dPyBq0XntYYlgfIOO2iocxX7alJTxwMAIzvgjX69C2yJ8bVfFFW%2B4G2b9tmYKsK%2FqXw%2FaFPm7q%2BbNUn&X-Amz-Signature=cddc85a1f56e1fc682d0c691d983f3dd3c029424cfc328d20a4497949e17711b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHQSU2ZP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T070749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAM7IlnaiH3F1adVXLmRkXVFJ0DwuBCUa2h3AxVHktgXAiBQt6B7%2FTFvjfrO32Gn58TTe3qzbLT6bwFo1jid1EfbYyr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMsLKcFX6QcUEPtOtSKtwDON4g2vsVctLAhYul4EEiPleHfYjofhzYbBX5NjSsu9D3ifxZJZv1B1AQTEOCZkwxgzcH3IqvBI4AM44p7LVZ82ZGrDOdktnnu0GxytcP1aeeolGVIzHU03BwkRK7ix7MDDVlwA4rMdaVFGgxlfgxh01wOw1%2FbzKzXAHQNIfEvRJUgtSt7iKE3XH5ZYXdee1trXyiCkh%2FbdM3GDAE7NIUtDkuz1AKYBehfgOKgzI65cCTDjkXIBLvUG1RXokiOceK9Qyz32yvtUoUXKC7nkJRb5CaVhNOFns7zWft8Ytzxhipy1RklP61DMb30ONNcjgrFjEvybPbFk6L%2Bbijkb2rsuL%2B8wvcjzEEcY4Yx9pgt4wybVzdkfrqkdHjUt%2B63CQ%2BEWOTGMaeatms%2FT6RN%2F0rlO8IybkBqv0MuolDRf28YoORVyLlkZa1keQgP9ko%2BevRFvv4Sy10JMVLQdPsg%2FYuNLaMv39bDmLRgO66zkWeug7HSl9Ka1i9ceEKpLvN3RBU0%2BA%2BrsQGFzddC5Nu6ZspPUIVmPSq3vP7Ox1hKOFjQsZt0CwGrfC1Y9qFffsj88Qet%2FI00APJ9DZOgg9BXiqgUvyhr%2FZXdW%2FSLNCDUoIhax2HbRe%2FtcQcHVKMre4wxO22wAY6pgGXS1vlbtHZH4z6%2B3Y4rV4pBkrOzPu89g0DnM47RIRzvDR4n6Vkl%2B03tG6EJ1kgZa0gt%2F%2Bq3SfsB9DaQqLd6joyaLIv%2BHw0zmejR6RidZ4yPHzWlq06PDhwbQCCQjb8UIw7hF%2Bf2qwt0Zb42dPyBq0XntYYlgfIOO2iocxX7alJTxwMAIzvgjX69C2yJ8bVfFFW%2B4G2b9tmYKsK%2FqXw%2FaFPm7q%2BbNUn&X-Amz-Signature=2631b5e41ba831062855088c56bca0646fe618c5f4dcc50aa827885084b84297&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHQSU2ZP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T070749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAM7IlnaiH3F1adVXLmRkXVFJ0DwuBCUa2h3AxVHktgXAiBQt6B7%2FTFvjfrO32Gn58TTe3qzbLT6bwFo1jid1EfbYyr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMsLKcFX6QcUEPtOtSKtwDON4g2vsVctLAhYul4EEiPleHfYjofhzYbBX5NjSsu9D3ifxZJZv1B1AQTEOCZkwxgzcH3IqvBI4AM44p7LVZ82ZGrDOdktnnu0GxytcP1aeeolGVIzHU03BwkRK7ix7MDDVlwA4rMdaVFGgxlfgxh01wOw1%2FbzKzXAHQNIfEvRJUgtSt7iKE3XH5ZYXdee1trXyiCkh%2FbdM3GDAE7NIUtDkuz1AKYBehfgOKgzI65cCTDjkXIBLvUG1RXokiOceK9Qyz32yvtUoUXKC7nkJRb5CaVhNOFns7zWft8Ytzxhipy1RklP61DMb30ONNcjgrFjEvybPbFk6L%2Bbijkb2rsuL%2B8wvcjzEEcY4Yx9pgt4wybVzdkfrqkdHjUt%2B63CQ%2BEWOTGMaeatms%2FT6RN%2F0rlO8IybkBqv0MuolDRf28YoORVyLlkZa1keQgP9ko%2BevRFvv4Sy10JMVLQdPsg%2FYuNLaMv39bDmLRgO66zkWeug7HSl9Ka1i9ceEKpLvN3RBU0%2BA%2BrsQGFzddC5Nu6ZspPUIVmPSq3vP7Ox1hKOFjQsZt0CwGrfC1Y9qFffsj88Qet%2FI00APJ9DZOgg9BXiqgUvyhr%2FZXdW%2FSLNCDUoIhax2HbRe%2FtcQcHVKMre4wxO22wAY6pgGXS1vlbtHZH4z6%2B3Y4rV4pBkrOzPu89g0DnM47RIRzvDR4n6Vkl%2B03tG6EJ1kgZa0gt%2F%2Bq3SfsB9DaQqLd6joyaLIv%2BHw0zmejR6RidZ4yPHzWlq06PDhwbQCCQjb8UIw7hF%2Bf2qwt0Zb42dPyBq0XntYYlgfIOO2iocxX7alJTxwMAIzvgjX69C2yJ8bVfFFW%2B4G2b9tmYKsK%2FqXw%2FaFPm7q%2BbNUn&X-Amz-Signature=909226081828351b45887310f497d0e57eb0a0cc3959504f874ddd018d63a809&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHQSU2ZP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T070749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAM7IlnaiH3F1adVXLmRkXVFJ0DwuBCUa2h3AxVHktgXAiBQt6B7%2FTFvjfrO32Gn58TTe3qzbLT6bwFo1jid1EfbYyr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMsLKcFX6QcUEPtOtSKtwDON4g2vsVctLAhYul4EEiPleHfYjofhzYbBX5NjSsu9D3ifxZJZv1B1AQTEOCZkwxgzcH3IqvBI4AM44p7LVZ82ZGrDOdktnnu0GxytcP1aeeolGVIzHU03BwkRK7ix7MDDVlwA4rMdaVFGgxlfgxh01wOw1%2FbzKzXAHQNIfEvRJUgtSt7iKE3XH5ZYXdee1trXyiCkh%2FbdM3GDAE7NIUtDkuz1AKYBehfgOKgzI65cCTDjkXIBLvUG1RXokiOceK9Qyz32yvtUoUXKC7nkJRb5CaVhNOFns7zWft8Ytzxhipy1RklP61DMb30ONNcjgrFjEvybPbFk6L%2Bbijkb2rsuL%2B8wvcjzEEcY4Yx9pgt4wybVzdkfrqkdHjUt%2B63CQ%2BEWOTGMaeatms%2FT6RN%2F0rlO8IybkBqv0MuolDRf28YoORVyLlkZa1keQgP9ko%2BevRFvv4Sy10JMVLQdPsg%2FYuNLaMv39bDmLRgO66zkWeug7HSl9Ka1i9ceEKpLvN3RBU0%2BA%2BrsQGFzddC5Nu6ZspPUIVmPSq3vP7Ox1hKOFjQsZt0CwGrfC1Y9qFffsj88Qet%2FI00APJ9DZOgg9BXiqgUvyhr%2FZXdW%2FSLNCDUoIhax2HbRe%2FtcQcHVKMre4wxO22wAY6pgGXS1vlbtHZH4z6%2B3Y4rV4pBkrOzPu89g0DnM47RIRzvDR4n6Vkl%2B03tG6EJ1kgZa0gt%2F%2Bq3SfsB9DaQqLd6joyaLIv%2BHw0zmejR6RidZ4yPHzWlq06PDhwbQCCQjb8UIw7hF%2Bf2qwt0Zb42dPyBq0XntYYlgfIOO2iocxX7alJTxwMAIzvgjX69C2yJ8bVfFFW%2B4G2b9tmYKsK%2FqXw%2FaFPm7q%2BbNUn&X-Amz-Signature=7968bd8f99fb4e8da2ed40246d9decbce283095cd2a074a714b86d489332b5e4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHQSU2ZP%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T070749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAM7IlnaiH3F1adVXLmRkXVFJ0DwuBCUa2h3AxVHktgXAiBQt6B7%2FTFvjfrO32Gn58TTe3qzbLT6bwFo1jid1EfbYyr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMsLKcFX6QcUEPtOtSKtwDON4g2vsVctLAhYul4EEiPleHfYjofhzYbBX5NjSsu9D3ifxZJZv1B1AQTEOCZkwxgzcH3IqvBI4AM44p7LVZ82ZGrDOdktnnu0GxytcP1aeeolGVIzHU03BwkRK7ix7MDDVlwA4rMdaVFGgxlfgxh01wOw1%2FbzKzXAHQNIfEvRJUgtSt7iKE3XH5ZYXdee1trXyiCkh%2FbdM3GDAE7NIUtDkuz1AKYBehfgOKgzI65cCTDjkXIBLvUG1RXokiOceK9Qyz32yvtUoUXKC7nkJRb5CaVhNOFns7zWft8Ytzxhipy1RklP61DMb30ONNcjgrFjEvybPbFk6L%2Bbijkb2rsuL%2B8wvcjzEEcY4Yx9pgt4wybVzdkfrqkdHjUt%2B63CQ%2BEWOTGMaeatms%2FT6RN%2F0rlO8IybkBqv0MuolDRf28YoORVyLlkZa1keQgP9ko%2BevRFvv4Sy10JMVLQdPsg%2FYuNLaMv39bDmLRgO66zkWeug7HSl9Ka1i9ceEKpLvN3RBU0%2BA%2BrsQGFzddC5Nu6ZspPUIVmPSq3vP7Ox1hKOFjQsZt0CwGrfC1Y9qFffsj88Qet%2FI00APJ9DZOgg9BXiqgUvyhr%2FZXdW%2FSLNCDUoIhax2HbRe%2FtcQcHVKMre4wxO22wAY6pgGXS1vlbtHZH4z6%2B3Y4rV4pBkrOzPu89g0DnM47RIRzvDR4n6Vkl%2B03tG6EJ1kgZa0gt%2F%2Bq3SfsB9DaQqLd6joyaLIv%2BHw0zmejR6RidZ4yPHzWlq06PDhwbQCCQjb8UIw7hF%2Bf2qwt0Zb42dPyBq0XntYYlgfIOO2iocxX7alJTxwMAIzvgjX69C2yJ8bVfFFW%2B4G2b9tmYKsK%2FqXw%2FaFPm7q%2BbNUn&X-Amz-Signature=78e2e35172b1ae3b728e03f5b5946723ed1ecc18d53a2079d632946054935eb4&X-Amz-SignedHeaders=host&x-id=GetObject)
