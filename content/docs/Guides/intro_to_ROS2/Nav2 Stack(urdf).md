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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBLU66YY%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T230353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC0dWVYd8ZJItlBOYryePGHVEG5p4bdOnT3xXD7ESVigAiEAj9J0zG94jF9zrjHuoz9WzTBj9Iki8hMMIv%2FuR2pchlUqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJveWJ9pcnIK1JxUHCrcA6%2BJVKRoO2koIW%2BF8VIfrFCEiPp%2BuhUzmr2pDRS6OgyPbGZWMz5tKfdaRwAGqMK8heVue77lCjNB44otJBlYlmxY3oaX4imDE7C528POnHwqk1JmOaUNyG%2BkO4wFPgg8D2LwEN%2BxzpkF8LOkHKCT2GGXv8UrXzJjrHppmMN2d2UldAKh444sTBh1fmFT5ffV1%2FOejeNpMiHrrFln5uXoeohHpLUMZDzZAUfmzyOb2xCZ0Yuuzit3skZHcLuDNvUL%2Fqu53l6a3YQVGgVuKQ0Z5v%2BazKpNDwndE4aInAFDiuV3UIvMDUkaBcP1SjBAmRW7ucXgCSFEK5%2FGmlJkA0HHQb6c%2BWmUqn6lh8Q3EgRy9np2YXnxLR%2BEAu5D9S4zmSVWHs70J540JcpohiKBCtljaL9pahb0BhwrS4YN8mWGfOTs1Xzmk7O%2FvPzkglZypurz7pbPxIqr4gfPtW3J5zCo%2FM4oTll%2BgEDKzuUukQ13ENjUnsNli4jYDLYBensbv2I%2FO6YdMZbS9J2E2j0GKtpepU0OJc%2B4DgngJrLEIBwz8BEeuAS5U3i2eWtkdUuJIUVxKo8%2F%2FxEiluXSV%2FM7GC2r86%2Fmh%2F9YZ%2BKTWw1mbkPFvaBQYl9JRe%2BJYSWHObBHMKOs6b0GOqUB46sQbKfVCEo%2FWToKiE5ZAm1hmvUFlaT%2F7cpx5APOuIgS6RuvB30cnMtsR8hNFe9DRIZd9aQhoRIIbJrp1Bxt%2FYfF3eKcbDh%2BMsEowuij0AxrrIAFqvOgTX5mJdyuqCS%2BN5DduoGj2cjWxXJkjnc6XeT4tJ4NhhsbBmq4yS15IzHbKYLnRUftuQzy0F0lD8y2HQcxfdqBQX8AP2I0nHIs5WWeIyFR&X-Amz-Signature=6a4bb15f8e47867fe5583097f0a96260c024d4c9764b43c4fd578e36114d0d14&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBLU66YY%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T230353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC0dWVYd8ZJItlBOYryePGHVEG5p4bdOnT3xXD7ESVigAiEAj9J0zG94jF9zrjHuoz9WzTBj9Iki8hMMIv%2FuR2pchlUqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJveWJ9pcnIK1JxUHCrcA6%2BJVKRoO2koIW%2BF8VIfrFCEiPp%2BuhUzmr2pDRS6OgyPbGZWMz5tKfdaRwAGqMK8heVue77lCjNB44otJBlYlmxY3oaX4imDE7C528POnHwqk1JmOaUNyG%2BkO4wFPgg8D2LwEN%2BxzpkF8LOkHKCT2GGXv8UrXzJjrHppmMN2d2UldAKh444sTBh1fmFT5ffV1%2FOejeNpMiHrrFln5uXoeohHpLUMZDzZAUfmzyOb2xCZ0Yuuzit3skZHcLuDNvUL%2Fqu53l6a3YQVGgVuKQ0Z5v%2BazKpNDwndE4aInAFDiuV3UIvMDUkaBcP1SjBAmRW7ucXgCSFEK5%2FGmlJkA0HHQb6c%2BWmUqn6lh8Q3EgRy9np2YXnxLR%2BEAu5D9S4zmSVWHs70J540JcpohiKBCtljaL9pahb0BhwrS4YN8mWGfOTs1Xzmk7O%2FvPzkglZypurz7pbPxIqr4gfPtW3J5zCo%2FM4oTll%2BgEDKzuUukQ13ENjUnsNli4jYDLYBensbv2I%2FO6YdMZbS9J2E2j0GKtpepU0OJc%2B4DgngJrLEIBwz8BEeuAS5U3i2eWtkdUuJIUVxKo8%2F%2FxEiluXSV%2FM7GC2r86%2Fmh%2F9YZ%2BKTWw1mbkPFvaBQYl9JRe%2BJYSWHObBHMKOs6b0GOqUB46sQbKfVCEo%2FWToKiE5ZAm1hmvUFlaT%2F7cpx5APOuIgS6RuvB30cnMtsR8hNFe9DRIZd9aQhoRIIbJrp1Bxt%2FYfF3eKcbDh%2BMsEowuij0AxrrIAFqvOgTX5mJdyuqCS%2BN5DduoGj2cjWxXJkjnc6XeT4tJ4NhhsbBmq4yS15IzHbKYLnRUftuQzy0F0lD8y2HQcxfdqBQX8AP2I0nHIs5WWeIyFR&X-Amz-Signature=fe64606b61e8c1c49fdda89d9380c7c76141a9d504ee944ff47ce03f827ef1a9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBLU66YY%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T230353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC0dWVYd8ZJItlBOYryePGHVEG5p4bdOnT3xXD7ESVigAiEAj9J0zG94jF9zrjHuoz9WzTBj9Iki8hMMIv%2FuR2pchlUqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJveWJ9pcnIK1JxUHCrcA6%2BJVKRoO2koIW%2BF8VIfrFCEiPp%2BuhUzmr2pDRS6OgyPbGZWMz5tKfdaRwAGqMK8heVue77lCjNB44otJBlYlmxY3oaX4imDE7C528POnHwqk1JmOaUNyG%2BkO4wFPgg8D2LwEN%2BxzpkF8LOkHKCT2GGXv8UrXzJjrHppmMN2d2UldAKh444sTBh1fmFT5ffV1%2FOejeNpMiHrrFln5uXoeohHpLUMZDzZAUfmzyOb2xCZ0Yuuzit3skZHcLuDNvUL%2Fqu53l6a3YQVGgVuKQ0Z5v%2BazKpNDwndE4aInAFDiuV3UIvMDUkaBcP1SjBAmRW7ucXgCSFEK5%2FGmlJkA0HHQb6c%2BWmUqn6lh8Q3EgRy9np2YXnxLR%2BEAu5D9S4zmSVWHs70J540JcpohiKBCtljaL9pahb0BhwrS4YN8mWGfOTs1Xzmk7O%2FvPzkglZypurz7pbPxIqr4gfPtW3J5zCo%2FM4oTll%2BgEDKzuUukQ13ENjUnsNli4jYDLYBensbv2I%2FO6YdMZbS9J2E2j0GKtpepU0OJc%2B4DgngJrLEIBwz8BEeuAS5U3i2eWtkdUuJIUVxKo8%2F%2FxEiluXSV%2FM7GC2r86%2Fmh%2F9YZ%2BKTWw1mbkPFvaBQYl9JRe%2BJYSWHObBHMKOs6b0GOqUB46sQbKfVCEo%2FWToKiE5ZAm1hmvUFlaT%2F7cpx5APOuIgS6RuvB30cnMtsR8hNFe9DRIZd9aQhoRIIbJrp1Bxt%2FYfF3eKcbDh%2BMsEowuij0AxrrIAFqvOgTX5mJdyuqCS%2BN5DduoGj2cjWxXJkjnc6XeT4tJ4NhhsbBmq4yS15IzHbKYLnRUftuQzy0F0lD8y2HQcxfdqBQX8AP2I0nHIs5WWeIyFR&X-Amz-Signature=999200d914bb29f32b9d9260bbf67dbe1984536cd52932714910535eb0186f3f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBLU66YY%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T230353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC0dWVYd8ZJItlBOYryePGHVEG5p4bdOnT3xXD7ESVigAiEAj9J0zG94jF9zrjHuoz9WzTBj9Iki8hMMIv%2FuR2pchlUqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJveWJ9pcnIK1JxUHCrcA6%2BJVKRoO2koIW%2BF8VIfrFCEiPp%2BuhUzmr2pDRS6OgyPbGZWMz5tKfdaRwAGqMK8heVue77lCjNB44otJBlYlmxY3oaX4imDE7C528POnHwqk1JmOaUNyG%2BkO4wFPgg8D2LwEN%2BxzpkF8LOkHKCT2GGXv8UrXzJjrHppmMN2d2UldAKh444sTBh1fmFT5ffV1%2FOejeNpMiHrrFln5uXoeohHpLUMZDzZAUfmzyOb2xCZ0Yuuzit3skZHcLuDNvUL%2Fqu53l6a3YQVGgVuKQ0Z5v%2BazKpNDwndE4aInAFDiuV3UIvMDUkaBcP1SjBAmRW7ucXgCSFEK5%2FGmlJkA0HHQb6c%2BWmUqn6lh8Q3EgRy9np2YXnxLR%2BEAu5D9S4zmSVWHs70J540JcpohiKBCtljaL9pahb0BhwrS4YN8mWGfOTs1Xzmk7O%2FvPzkglZypurz7pbPxIqr4gfPtW3J5zCo%2FM4oTll%2BgEDKzuUukQ13ENjUnsNli4jYDLYBensbv2I%2FO6YdMZbS9J2E2j0GKtpepU0OJc%2B4DgngJrLEIBwz8BEeuAS5U3i2eWtkdUuJIUVxKo8%2F%2FxEiluXSV%2FM7GC2r86%2Fmh%2F9YZ%2BKTWw1mbkPFvaBQYl9JRe%2BJYSWHObBHMKOs6b0GOqUB46sQbKfVCEo%2FWToKiE5ZAm1hmvUFlaT%2F7cpx5APOuIgS6RuvB30cnMtsR8hNFe9DRIZd9aQhoRIIbJrp1Bxt%2FYfF3eKcbDh%2BMsEowuij0AxrrIAFqvOgTX5mJdyuqCS%2BN5DduoGj2cjWxXJkjnc6XeT4tJ4NhhsbBmq4yS15IzHbKYLnRUftuQzy0F0lD8y2HQcxfdqBQX8AP2I0nHIs5WWeIyFR&X-Amz-Signature=35d6715d9ff40f20ba76551204ad583117c48c4f87c9e0a23055c4a78f33dc0a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBLU66YY%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T230353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC0dWVYd8ZJItlBOYryePGHVEG5p4bdOnT3xXD7ESVigAiEAj9J0zG94jF9zrjHuoz9WzTBj9Iki8hMMIv%2FuR2pchlUqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJveWJ9pcnIK1JxUHCrcA6%2BJVKRoO2koIW%2BF8VIfrFCEiPp%2BuhUzmr2pDRS6OgyPbGZWMz5tKfdaRwAGqMK8heVue77lCjNB44otJBlYlmxY3oaX4imDE7C528POnHwqk1JmOaUNyG%2BkO4wFPgg8D2LwEN%2BxzpkF8LOkHKCT2GGXv8UrXzJjrHppmMN2d2UldAKh444sTBh1fmFT5ffV1%2FOejeNpMiHrrFln5uXoeohHpLUMZDzZAUfmzyOb2xCZ0Yuuzit3skZHcLuDNvUL%2Fqu53l6a3YQVGgVuKQ0Z5v%2BazKpNDwndE4aInAFDiuV3UIvMDUkaBcP1SjBAmRW7ucXgCSFEK5%2FGmlJkA0HHQb6c%2BWmUqn6lh8Q3EgRy9np2YXnxLR%2BEAu5D9S4zmSVWHs70J540JcpohiKBCtljaL9pahb0BhwrS4YN8mWGfOTs1Xzmk7O%2FvPzkglZypurz7pbPxIqr4gfPtW3J5zCo%2FM4oTll%2BgEDKzuUukQ13ENjUnsNli4jYDLYBensbv2I%2FO6YdMZbS9J2E2j0GKtpepU0OJc%2B4DgngJrLEIBwz8BEeuAS5U3i2eWtkdUuJIUVxKo8%2F%2FxEiluXSV%2FM7GC2r86%2Fmh%2F9YZ%2BKTWw1mbkPFvaBQYl9JRe%2BJYSWHObBHMKOs6b0GOqUB46sQbKfVCEo%2FWToKiE5ZAm1hmvUFlaT%2F7cpx5APOuIgS6RuvB30cnMtsR8hNFe9DRIZd9aQhoRIIbJrp1Bxt%2FYfF3eKcbDh%2BMsEowuij0AxrrIAFqvOgTX5mJdyuqCS%2BN5DduoGj2cjWxXJkjnc6XeT4tJ4NhhsbBmq4yS15IzHbKYLnRUftuQzy0F0lD8y2HQcxfdqBQX8AP2I0nHIs5WWeIyFR&X-Amz-Signature=58b9d105334db9fb44b4a60a4af060c2a387438b90e482a3d927043ffeb42a0b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBLU66YY%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T230353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC0dWVYd8ZJItlBOYryePGHVEG5p4bdOnT3xXD7ESVigAiEAj9J0zG94jF9zrjHuoz9WzTBj9Iki8hMMIv%2FuR2pchlUqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJveWJ9pcnIK1JxUHCrcA6%2BJVKRoO2koIW%2BF8VIfrFCEiPp%2BuhUzmr2pDRS6OgyPbGZWMz5tKfdaRwAGqMK8heVue77lCjNB44otJBlYlmxY3oaX4imDE7C528POnHwqk1JmOaUNyG%2BkO4wFPgg8D2LwEN%2BxzpkF8LOkHKCT2GGXv8UrXzJjrHppmMN2d2UldAKh444sTBh1fmFT5ffV1%2FOejeNpMiHrrFln5uXoeohHpLUMZDzZAUfmzyOb2xCZ0Yuuzit3skZHcLuDNvUL%2Fqu53l6a3YQVGgVuKQ0Z5v%2BazKpNDwndE4aInAFDiuV3UIvMDUkaBcP1SjBAmRW7ucXgCSFEK5%2FGmlJkA0HHQb6c%2BWmUqn6lh8Q3EgRy9np2YXnxLR%2BEAu5D9S4zmSVWHs70J540JcpohiKBCtljaL9pahb0BhwrS4YN8mWGfOTs1Xzmk7O%2FvPzkglZypurz7pbPxIqr4gfPtW3J5zCo%2FM4oTll%2BgEDKzuUukQ13ENjUnsNli4jYDLYBensbv2I%2FO6YdMZbS9J2E2j0GKtpepU0OJc%2B4DgngJrLEIBwz8BEeuAS5U3i2eWtkdUuJIUVxKo8%2F%2FxEiluXSV%2FM7GC2r86%2Fmh%2F9YZ%2BKTWw1mbkPFvaBQYl9JRe%2BJYSWHObBHMKOs6b0GOqUB46sQbKfVCEo%2FWToKiE5ZAm1hmvUFlaT%2F7cpx5APOuIgS6RuvB30cnMtsR8hNFe9DRIZd9aQhoRIIbJrp1Bxt%2FYfF3eKcbDh%2BMsEowuij0AxrrIAFqvOgTX5mJdyuqCS%2BN5DduoGj2cjWxXJkjnc6XeT4tJ4NhhsbBmq4yS15IzHbKYLnRUftuQzy0F0lD8y2HQcxfdqBQX8AP2I0nHIs5WWeIyFR&X-Amz-Signature=ee49da33ea1ddb9c8b500ea11168d414bc3e5916845eff1c5b7be5c6ae934606&X-Amz-SignedHeaders=host&x-id=GetObject)
