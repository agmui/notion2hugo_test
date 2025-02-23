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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBS4TL5K%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T190210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3egWBAy5pGIHWAq9yh8vK5qSuM3GdovsgLNoVne2jeAIgGX2yNcTWDgRR57pgQ1ZxP%2FcDwEdGLFlxzB4STj7W0jsq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDBEwcDGS9gzAI2T8sCrcA%2BW8buYrdnxq2%2Bq571dJWOWwCXu%2Ft6hiiy1dAg6SoA8Bj49bKb9E1PnK3Zd%2FZn0IYfkDz9ORyRPlmuESgYFvVcl9HOONxx3icpZagyo7VUtjuLULthfAHUooxGV5%2BC3HjJEG3pWwv18cJkkvq4jdtf4M%2BAzbfY6ZBEHgdg%2F2Q0MSmlTmWo%2FRxrThEtHWwiEaykd7iZG9hK%2Fnq4%2BTxl1t5tCHmTYLZEwW1X%2BYLQ18nIyxp3gOiO7%2FYNefAaNXhlL8lqIqxyo3oczJqFNrGEsSlhp9zBFCAHMAAqJPgY6Ls8LMco0dnrrKtmd9pq3g4YSRwmBO4LxitnbnjsO%2BlbIGnvHBLxpKVUKIQrO5AiC1Guk4XR9BLIYqMjf60zcGk%2FFdaTNCzTob26OlD1alDZ0zxFcIicyftN%2FAqytrvpzjmnTRPLM0JhIUXUvldfmibdoSthimTCyl8aew7DWo%2FmMNWWQChCH3sb%2FphWxdRExE6ubm%2FiXPzCJssRZlPa9rr2hI%2FKP8Ge8ba4%2Bk8aioYj1xXH%2BjlngFqjEqhAhVfsg4qxShI07yPypkdKGgn6n2tHfAIn0CFL917QktwMS3K77elF06%2F9624lfYs662qAdSTQVP4JarMvI4A6kUybWUMJST7b0GOqUB3X%2BhenKykdpVeiqhXwRRn%2BvTG5DdoVUa4rHX4E3syyWUXqL3hJBGtL4GQPRsVDsDxwtUWRmHjnzpecS4T6yNoBsRGSPAszM1QHkzE92xiU2e%2BJ%2FdCA9WNSnvTKpBk0pmfiviF4Jo9OTRXkvdatwgP%2Fa3KfT9agsV2sy2A2wFWwRNMrEy86MOn64vLj6iIeR9gStuLVRADLOHNZ1ZE0IqF8Znywbg&X-Amz-Signature=ad22f71354bab29657d0e080b8011d2c6e3994d98b7ea84cf80bf5093854b53d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBS4TL5K%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T190210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3egWBAy5pGIHWAq9yh8vK5qSuM3GdovsgLNoVne2jeAIgGX2yNcTWDgRR57pgQ1ZxP%2FcDwEdGLFlxzB4STj7W0jsq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDBEwcDGS9gzAI2T8sCrcA%2BW8buYrdnxq2%2Bq571dJWOWwCXu%2Ft6hiiy1dAg6SoA8Bj49bKb9E1PnK3Zd%2FZn0IYfkDz9ORyRPlmuESgYFvVcl9HOONxx3icpZagyo7VUtjuLULthfAHUooxGV5%2BC3HjJEG3pWwv18cJkkvq4jdtf4M%2BAzbfY6ZBEHgdg%2F2Q0MSmlTmWo%2FRxrThEtHWwiEaykd7iZG9hK%2Fnq4%2BTxl1t5tCHmTYLZEwW1X%2BYLQ18nIyxp3gOiO7%2FYNefAaNXhlL8lqIqxyo3oczJqFNrGEsSlhp9zBFCAHMAAqJPgY6Ls8LMco0dnrrKtmd9pq3g4YSRwmBO4LxitnbnjsO%2BlbIGnvHBLxpKVUKIQrO5AiC1Guk4XR9BLIYqMjf60zcGk%2FFdaTNCzTob26OlD1alDZ0zxFcIicyftN%2FAqytrvpzjmnTRPLM0JhIUXUvldfmibdoSthimTCyl8aew7DWo%2FmMNWWQChCH3sb%2FphWxdRExE6ubm%2FiXPzCJssRZlPa9rr2hI%2FKP8Ge8ba4%2Bk8aioYj1xXH%2BjlngFqjEqhAhVfsg4qxShI07yPypkdKGgn6n2tHfAIn0CFL917QktwMS3K77elF06%2F9624lfYs662qAdSTQVP4JarMvI4A6kUybWUMJST7b0GOqUB3X%2BhenKykdpVeiqhXwRRn%2BvTG5DdoVUa4rHX4E3syyWUXqL3hJBGtL4GQPRsVDsDxwtUWRmHjnzpecS4T6yNoBsRGSPAszM1QHkzE92xiU2e%2BJ%2FdCA9WNSnvTKpBk0pmfiviF4Jo9OTRXkvdatwgP%2Fa3KfT9agsV2sy2A2wFWwRNMrEy86MOn64vLj6iIeR9gStuLVRADLOHNZ1ZE0IqF8Znywbg&X-Amz-Signature=fe28edfe62baffd1506b846c2213b273797359cc8c8026d526a29daadcd40627&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBS4TL5K%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T190210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3egWBAy5pGIHWAq9yh8vK5qSuM3GdovsgLNoVne2jeAIgGX2yNcTWDgRR57pgQ1ZxP%2FcDwEdGLFlxzB4STj7W0jsq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDBEwcDGS9gzAI2T8sCrcA%2BW8buYrdnxq2%2Bq571dJWOWwCXu%2Ft6hiiy1dAg6SoA8Bj49bKb9E1PnK3Zd%2FZn0IYfkDz9ORyRPlmuESgYFvVcl9HOONxx3icpZagyo7VUtjuLULthfAHUooxGV5%2BC3HjJEG3pWwv18cJkkvq4jdtf4M%2BAzbfY6ZBEHgdg%2F2Q0MSmlTmWo%2FRxrThEtHWwiEaykd7iZG9hK%2Fnq4%2BTxl1t5tCHmTYLZEwW1X%2BYLQ18nIyxp3gOiO7%2FYNefAaNXhlL8lqIqxyo3oczJqFNrGEsSlhp9zBFCAHMAAqJPgY6Ls8LMco0dnrrKtmd9pq3g4YSRwmBO4LxitnbnjsO%2BlbIGnvHBLxpKVUKIQrO5AiC1Guk4XR9BLIYqMjf60zcGk%2FFdaTNCzTob26OlD1alDZ0zxFcIicyftN%2FAqytrvpzjmnTRPLM0JhIUXUvldfmibdoSthimTCyl8aew7DWo%2FmMNWWQChCH3sb%2FphWxdRExE6ubm%2FiXPzCJssRZlPa9rr2hI%2FKP8Ge8ba4%2Bk8aioYj1xXH%2BjlngFqjEqhAhVfsg4qxShI07yPypkdKGgn6n2tHfAIn0CFL917QktwMS3K77elF06%2F9624lfYs662qAdSTQVP4JarMvI4A6kUybWUMJST7b0GOqUB3X%2BhenKykdpVeiqhXwRRn%2BvTG5DdoVUa4rHX4E3syyWUXqL3hJBGtL4GQPRsVDsDxwtUWRmHjnzpecS4T6yNoBsRGSPAszM1QHkzE92xiU2e%2BJ%2FdCA9WNSnvTKpBk0pmfiviF4Jo9OTRXkvdatwgP%2Fa3KfT9agsV2sy2A2wFWwRNMrEy86MOn64vLj6iIeR9gStuLVRADLOHNZ1ZE0IqF8Znywbg&X-Amz-Signature=b1955dae5494d177a969719482664712b3e1b9aa2cf7797c37c594cd4808ece1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBS4TL5K%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T190210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3egWBAy5pGIHWAq9yh8vK5qSuM3GdovsgLNoVne2jeAIgGX2yNcTWDgRR57pgQ1ZxP%2FcDwEdGLFlxzB4STj7W0jsq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDBEwcDGS9gzAI2T8sCrcA%2BW8buYrdnxq2%2Bq571dJWOWwCXu%2Ft6hiiy1dAg6SoA8Bj49bKb9E1PnK3Zd%2FZn0IYfkDz9ORyRPlmuESgYFvVcl9HOONxx3icpZagyo7VUtjuLULthfAHUooxGV5%2BC3HjJEG3pWwv18cJkkvq4jdtf4M%2BAzbfY6ZBEHgdg%2F2Q0MSmlTmWo%2FRxrThEtHWwiEaykd7iZG9hK%2Fnq4%2BTxl1t5tCHmTYLZEwW1X%2BYLQ18nIyxp3gOiO7%2FYNefAaNXhlL8lqIqxyo3oczJqFNrGEsSlhp9zBFCAHMAAqJPgY6Ls8LMco0dnrrKtmd9pq3g4YSRwmBO4LxitnbnjsO%2BlbIGnvHBLxpKVUKIQrO5AiC1Guk4XR9BLIYqMjf60zcGk%2FFdaTNCzTob26OlD1alDZ0zxFcIicyftN%2FAqytrvpzjmnTRPLM0JhIUXUvldfmibdoSthimTCyl8aew7DWo%2FmMNWWQChCH3sb%2FphWxdRExE6ubm%2FiXPzCJssRZlPa9rr2hI%2FKP8Ge8ba4%2Bk8aioYj1xXH%2BjlngFqjEqhAhVfsg4qxShI07yPypkdKGgn6n2tHfAIn0CFL917QktwMS3K77elF06%2F9624lfYs662qAdSTQVP4JarMvI4A6kUybWUMJST7b0GOqUB3X%2BhenKykdpVeiqhXwRRn%2BvTG5DdoVUa4rHX4E3syyWUXqL3hJBGtL4GQPRsVDsDxwtUWRmHjnzpecS4T6yNoBsRGSPAszM1QHkzE92xiU2e%2BJ%2FdCA9WNSnvTKpBk0pmfiviF4Jo9OTRXkvdatwgP%2Fa3KfT9agsV2sy2A2wFWwRNMrEy86MOn64vLj6iIeR9gStuLVRADLOHNZ1ZE0IqF8Znywbg&X-Amz-Signature=5f06fddf2b7a414e071a09a4eb38c3917dfd3fd5710bf0c309a73b4a028ba713&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBS4TL5K%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T190210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3egWBAy5pGIHWAq9yh8vK5qSuM3GdovsgLNoVne2jeAIgGX2yNcTWDgRR57pgQ1ZxP%2FcDwEdGLFlxzB4STj7W0jsq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDBEwcDGS9gzAI2T8sCrcA%2BW8buYrdnxq2%2Bq571dJWOWwCXu%2Ft6hiiy1dAg6SoA8Bj49bKb9E1PnK3Zd%2FZn0IYfkDz9ORyRPlmuESgYFvVcl9HOONxx3icpZagyo7VUtjuLULthfAHUooxGV5%2BC3HjJEG3pWwv18cJkkvq4jdtf4M%2BAzbfY6ZBEHgdg%2F2Q0MSmlTmWo%2FRxrThEtHWwiEaykd7iZG9hK%2Fnq4%2BTxl1t5tCHmTYLZEwW1X%2BYLQ18nIyxp3gOiO7%2FYNefAaNXhlL8lqIqxyo3oczJqFNrGEsSlhp9zBFCAHMAAqJPgY6Ls8LMco0dnrrKtmd9pq3g4YSRwmBO4LxitnbnjsO%2BlbIGnvHBLxpKVUKIQrO5AiC1Guk4XR9BLIYqMjf60zcGk%2FFdaTNCzTob26OlD1alDZ0zxFcIicyftN%2FAqytrvpzjmnTRPLM0JhIUXUvldfmibdoSthimTCyl8aew7DWo%2FmMNWWQChCH3sb%2FphWxdRExE6ubm%2FiXPzCJssRZlPa9rr2hI%2FKP8Ge8ba4%2Bk8aioYj1xXH%2BjlngFqjEqhAhVfsg4qxShI07yPypkdKGgn6n2tHfAIn0CFL917QktwMS3K77elF06%2F9624lfYs662qAdSTQVP4JarMvI4A6kUybWUMJST7b0GOqUB3X%2BhenKykdpVeiqhXwRRn%2BvTG5DdoVUa4rHX4E3syyWUXqL3hJBGtL4GQPRsVDsDxwtUWRmHjnzpecS4T6yNoBsRGSPAszM1QHkzE92xiU2e%2BJ%2FdCA9WNSnvTKpBk0pmfiviF4Jo9OTRXkvdatwgP%2Fa3KfT9agsV2sy2A2wFWwRNMrEy86MOn64vLj6iIeR9gStuLVRADLOHNZ1ZE0IqF8Znywbg&X-Amz-Signature=8a525a523f97120efe84c8e73def9a25da7fa88905d356c2897676b926067aac&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBS4TL5K%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T190210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3egWBAy5pGIHWAq9yh8vK5qSuM3GdovsgLNoVne2jeAIgGX2yNcTWDgRR57pgQ1ZxP%2FcDwEdGLFlxzB4STj7W0jsq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDBEwcDGS9gzAI2T8sCrcA%2BW8buYrdnxq2%2Bq571dJWOWwCXu%2Ft6hiiy1dAg6SoA8Bj49bKb9E1PnK3Zd%2FZn0IYfkDz9ORyRPlmuESgYFvVcl9HOONxx3icpZagyo7VUtjuLULthfAHUooxGV5%2BC3HjJEG3pWwv18cJkkvq4jdtf4M%2BAzbfY6ZBEHgdg%2F2Q0MSmlTmWo%2FRxrThEtHWwiEaykd7iZG9hK%2Fnq4%2BTxl1t5tCHmTYLZEwW1X%2BYLQ18nIyxp3gOiO7%2FYNefAaNXhlL8lqIqxyo3oczJqFNrGEsSlhp9zBFCAHMAAqJPgY6Ls8LMco0dnrrKtmd9pq3g4YSRwmBO4LxitnbnjsO%2BlbIGnvHBLxpKVUKIQrO5AiC1Guk4XR9BLIYqMjf60zcGk%2FFdaTNCzTob26OlD1alDZ0zxFcIicyftN%2FAqytrvpzjmnTRPLM0JhIUXUvldfmibdoSthimTCyl8aew7DWo%2FmMNWWQChCH3sb%2FphWxdRExE6ubm%2FiXPzCJssRZlPa9rr2hI%2FKP8Ge8ba4%2Bk8aioYj1xXH%2BjlngFqjEqhAhVfsg4qxShI07yPypkdKGgn6n2tHfAIn0CFL917QktwMS3K77elF06%2F9624lfYs662qAdSTQVP4JarMvI4A6kUybWUMJST7b0GOqUB3X%2BhenKykdpVeiqhXwRRn%2BvTG5DdoVUa4rHX4E3syyWUXqL3hJBGtL4GQPRsVDsDxwtUWRmHjnzpecS4T6yNoBsRGSPAszM1QHkzE92xiU2e%2BJ%2FdCA9WNSnvTKpBk0pmfiviF4Jo9OTRXkvdatwgP%2Fa3KfT9agsV2sy2A2wFWwRNMrEy86MOn64vLj6iIeR9gStuLVRADLOHNZ1ZE0IqF8Znywbg&X-Amz-Signature=c9d5fb360eba288d211dcfa8475a5e8d4f7e31c46cdea6a5e9e1697d2711a16c&X-Amz-SignedHeaders=host&x-id=GetObject)
