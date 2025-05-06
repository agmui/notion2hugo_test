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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OKZI32Y%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T004134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdjLxR7GWv4i90EpCuIShnmGfzl7ZU5JUUA1pbAEF%2BhwIhAO62Duh72ZjrDnDqHWVzIm%2F5ncS5zTT0VD%2Bnq%2Bn7QkE5Kv8DCDoQABoMNjM3NDIzMTgzODA1IgyQRp%2FrKqNMOpB2ywAq3AMzUMf8nvg2TB1tWs2fG7BIa%2B7Uy7nuLcqgvU%2BuwzeE9OToissF48MLf7UkE6tXvXO31VZepFVtkHLyqbYeELaJvxlLbdvxny7arFG7JKv18hwTnbGpW98a72mI7T4Ya6acWEt8jleVFp2UVhGlLEpmMI59GlmKh856K%2BfRbnzAt0fUy8jsR0JCRkjnOt1fAt9ss6eWsxoiNhjyhSHsoJg4YpXJr7xFMhNFGaP0wGMiu%2Bbk%2ByBTc95T9uJUUCRyXdNwv5pn7OXKBWbBSE2MvY8AJi7yAB%2FMm9ddfwzCyBFEsi2ziJVVm%2FHWNBcavKuBMqoNStHbcNaD3GzgFZnFLdUqq7jQRJekQcbVya7wxqM48dwaITjabhRfrcGJBIm6WGXDbGRvaiVJ8QMsSMKt3gj2omk7weVQetD9W0eeXWZFxG3eNnIZqPecphLrAKb%2BDk2F0scK7L74BEFXKkPbu%2BkySyrjEDLNL2p0cAveT9GnnlUvtSiX8YIt%2FFfhJNQpBtgCZG885iRbHPN8BSi2nGs06%2FKp6qjxyk6nXRdYVW2D4v2qpzkesaNcpBq2nwgKBUwtUrij5L0jWGc%2F5DT3uXZ2N4BHEv1YvYXCRPpwqAKeF0nefsg3MwhcSRI2LDD%2BsOXABjqkAemx7SBIu%2BuOlWC8ne%2B0zCfyUYmCy%2FLBhj7ykGHy3nwkUqPrDcRtxK%2FjwwuqdW1kpoEzh523gY1kRIcPcvvKtJ9zGFlNZQY9sz1Sddhg6%2BP6kQ9R9dL94m1QlwoDkcynfuWEY6rAViRF%2BKz7UiVwrjQ0jBSKIaj9a%2FPU6A3llQrnNWVRXwxwqvDOa31JAGwp5TEnMzmipgzNwqYTvNQNSPoOP6Rk&X-Amz-Signature=1066e62bab1b14a9b10a0b99fd93f98e175f6a35d961ea553017c49710dbc41b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OKZI32Y%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T004134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdjLxR7GWv4i90EpCuIShnmGfzl7ZU5JUUA1pbAEF%2BhwIhAO62Duh72ZjrDnDqHWVzIm%2F5ncS5zTT0VD%2Bnq%2Bn7QkE5Kv8DCDoQABoMNjM3NDIzMTgzODA1IgyQRp%2FrKqNMOpB2ywAq3AMzUMf8nvg2TB1tWs2fG7BIa%2B7Uy7nuLcqgvU%2BuwzeE9OToissF48MLf7UkE6tXvXO31VZepFVtkHLyqbYeELaJvxlLbdvxny7arFG7JKv18hwTnbGpW98a72mI7T4Ya6acWEt8jleVFp2UVhGlLEpmMI59GlmKh856K%2BfRbnzAt0fUy8jsR0JCRkjnOt1fAt9ss6eWsxoiNhjyhSHsoJg4YpXJr7xFMhNFGaP0wGMiu%2Bbk%2ByBTc95T9uJUUCRyXdNwv5pn7OXKBWbBSE2MvY8AJi7yAB%2FMm9ddfwzCyBFEsi2ziJVVm%2FHWNBcavKuBMqoNStHbcNaD3GzgFZnFLdUqq7jQRJekQcbVya7wxqM48dwaITjabhRfrcGJBIm6WGXDbGRvaiVJ8QMsSMKt3gj2omk7weVQetD9W0eeXWZFxG3eNnIZqPecphLrAKb%2BDk2F0scK7L74BEFXKkPbu%2BkySyrjEDLNL2p0cAveT9GnnlUvtSiX8YIt%2FFfhJNQpBtgCZG885iRbHPN8BSi2nGs06%2FKp6qjxyk6nXRdYVW2D4v2qpzkesaNcpBq2nwgKBUwtUrij5L0jWGc%2F5DT3uXZ2N4BHEv1YvYXCRPpwqAKeF0nefsg3MwhcSRI2LDD%2BsOXABjqkAemx7SBIu%2BuOlWC8ne%2B0zCfyUYmCy%2FLBhj7ykGHy3nwkUqPrDcRtxK%2FjwwuqdW1kpoEzh523gY1kRIcPcvvKtJ9zGFlNZQY9sz1Sddhg6%2BP6kQ9R9dL94m1QlwoDkcynfuWEY6rAViRF%2BKz7UiVwrjQ0jBSKIaj9a%2FPU6A3llQrnNWVRXwxwqvDOa31JAGwp5TEnMzmipgzNwqYTvNQNSPoOP6Rk&X-Amz-Signature=e9d89954f15b5fafe813d3127b1e890586df2bdc7a38e183e8f890ec524c4b6d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OKZI32Y%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T004134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdjLxR7GWv4i90EpCuIShnmGfzl7ZU5JUUA1pbAEF%2BhwIhAO62Duh72ZjrDnDqHWVzIm%2F5ncS5zTT0VD%2Bnq%2Bn7QkE5Kv8DCDoQABoMNjM3NDIzMTgzODA1IgyQRp%2FrKqNMOpB2ywAq3AMzUMf8nvg2TB1tWs2fG7BIa%2B7Uy7nuLcqgvU%2BuwzeE9OToissF48MLf7UkE6tXvXO31VZepFVtkHLyqbYeELaJvxlLbdvxny7arFG7JKv18hwTnbGpW98a72mI7T4Ya6acWEt8jleVFp2UVhGlLEpmMI59GlmKh856K%2BfRbnzAt0fUy8jsR0JCRkjnOt1fAt9ss6eWsxoiNhjyhSHsoJg4YpXJr7xFMhNFGaP0wGMiu%2Bbk%2ByBTc95T9uJUUCRyXdNwv5pn7OXKBWbBSE2MvY8AJi7yAB%2FMm9ddfwzCyBFEsi2ziJVVm%2FHWNBcavKuBMqoNStHbcNaD3GzgFZnFLdUqq7jQRJekQcbVya7wxqM48dwaITjabhRfrcGJBIm6WGXDbGRvaiVJ8QMsSMKt3gj2omk7weVQetD9W0eeXWZFxG3eNnIZqPecphLrAKb%2BDk2F0scK7L74BEFXKkPbu%2BkySyrjEDLNL2p0cAveT9GnnlUvtSiX8YIt%2FFfhJNQpBtgCZG885iRbHPN8BSi2nGs06%2FKp6qjxyk6nXRdYVW2D4v2qpzkesaNcpBq2nwgKBUwtUrij5L0jWGc%2F5DT3uXZ2N4BHEv1YvYXCRPpwqAKeF0nefsg3MwhcSRI2LDD%2BsOXABjqkAemx7SBIu%2BuOlWC8ne%2B0zCfyUYmCy%2FLBhj7ykGHy3nwkUqPrDcRtxK%2FjwwuqdW1kpoEzh523gY1kRIcPcvvKtJ9zGFlNZQY9sz1Sddhg6%2BP6kQ9R9dL94m1QlwoDkcynfuWEY6rAViRF%2BKz7UiVwrjQ0jBSKIaj9a%2FPU6A3llQrnNWVRXwxwqvDOa31JAGwp5TEnMzmipgzNwqYTvNQNSPoOP6Rk&X-Amz-Signature=2bcad797fcf17c067fe4d9d9e484026810382faf71208090589b27d47b44cc9b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OKZI32Y%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T004134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdjLxR7GWv4i90EpCuIShnmGfzl7ZU5JUUA1pbAEF%2BhwIhAO62Duh72ZjrDnDqHWVzIm%2F5ncS5zTT0VD%2Bnq%2Bn7QkE5Kv8DCDoQABoMNjM3NDIzMTgzODA1IgyQRp%2FrKqNMOpB2ywAq3AMzUMf8nvg2TB1tWs2fG7BIa%2B7Uy7nuLcqgvU%2BuwzeE9OToissF48MLf7UkE6tXvXO31VZepFVtkHLyqbYeELaJvxlLbdvxny7arFG7JKv18hwTnbGpW98a72mI7T4Ya6acWEt8jleVFp2UVhGlLEpmMI59GlmKh856K%2BfRbnzAt0fUy8jsR0JCRkjnOt1fAt9ss6eWsxoiNhjyhSHsoJg4YpXJr7xFMhNFGaP0wGMiu%2Bbk%2ByBTc95T9uJUUCRyXdNwv5pn7OXKBWbBSE2MvY8AJi7yAB%2FMm9ddfwzCyBFEsi2ziJVVm%2FHWNBcavKuBMqoNStHbcNaD3GzgFZnFLdUqq7jQRJekQcbVya7wxqM48dwaITjabhRfrcGJBIm6WGXDbGRvaiVJ8QMsSMKt3gj2omk7weVQetD9W0eeXWZFxG3eNnIZqPecphLrAKb%2BDk2F0scK7L74BEFXKkPbu%2BkySyrjEDLNL2p0cAveT9GnnlUvtSiX8YIt%2FFfhJNQpBtgCZG885iRbHPN8BSi2nGs06%2FKp6qjxyk6nXRdYVW2D4v2qpzkesaNcpBq2nwgKBUwtUrij5L0jWGc%2F5DT3uXZ2N4BHEv1YvYXCRPpwqAKeF0nefsg3MwhcSRI2LDD%2BsOXABjqkAemx7SBIu%2BuOlWC8ne%2B0zCfyUYmCy%2FLBhj7ykGHy3nwkUqPrDcRtxK%2FjwwuqdW1kpoEzh523gY1kRIcPcvvKtJ9zGFlNZQY9sz1Sddhg6%2BP6kQ9R9dL94m1QlwoDkcynfuWEY6rAViRF%2BKz7UiVwrjQ0jBSKIaj9a%2FPU6A3llQrnNWVRXwxwqvDOa31JAGwp5TEnMzmipgzNwqYTvNQNSPoOP6Rk&X-Amz-Signature=46c771da813e9fb8c9a3ec6d2b091f265836e17621b7de849773effdaf238118&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OKZI32Y%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T004134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdjLxR7GWv4i90EpCuIShnmGfzl7ZU5JUUA1pbAEF%2BhwIhAO62Duh72ZjrDnDqHWVzIm%2F5ncS5zTT0VD%2Bnq%2Bn7QkE5Kv8DCDoQABoMNjM3NDIzMTgzODA1IgyQRp%2FrKqNMOpB2ywAq3AMzUMf8nvg2TB1tWs2fG7BIa%2B7Uy7nuLcqgvU%2BuwzeE9OToissF48MLf7UkE6tXvXO31VZepFVtkHLyqbYeELaJvxlLbdvxny7arFG7JKv18hwTnbGpW98a72mI7T4Ya6acWEt8jleVFp2UVhGlLEpmMI59GlmKh856K%2BfRbnzAt0fUy8jsR0JCRkjnOt1fAt9ss6eWsxoiNhjyhSHsoJg4YpXJr7xFMhNFGaP0wGMiu%2Bbk%2ByBTc95T9uJUUCRyXdNwv5pn7OXKBWbBSE2MvY8AJi7yAB%2FMm9ddfwzCyBFEsi2ziJVVm%2FHWNBcavKuBMqoNStHbcNaD3GzgFZnFLdUqq7jQRJekQcbVya7wxqM48dwaITjabhRfrcGJBIm6WGXDbGRvaiVJ8QMsSMKt3gj2omk7weVQetD9W0eeXWZFxG3eNnIZqPecphLrAKb%2BDk2F0scK7L74BEFXKkPbu%2BkySyrjEDLNL2p0cAveT9GnnlUvtSiX8YIt%2FFfhJNQpBtgCZG885iRbHPN8BSi2nGs06%2FKp6qjxyk6nXRdYVW2D4v2qpzkesaNcpBq2nwgKBUwtUrij5L0jWGc%2F5DT3uXZ2N4BHEv1YvYXCRPpwqAKeF0nefsg3MwhcSRI2LDD%2BsOXABjqkAemx7SBIu%2BuOlWC8ne%2B0zCfyUYmCy%2FLBhj7ykGHy3nwkUqPrDcRtxK%2FjwwuqdW1kpoEzh523gY1kRIcPcvvKtJ9zGFlNZQY9sz1Sddhg6%2BP6kQ9R9dL94m1QlwoDkcynfuWEY6rAViRF%2BKz7UiVwrjQ0jBSKIaj9a%2FPU6A3llQrnNWVRXwxwqvDOa31JAGwp5TEnMzmipgzNwqYTvNQNSPoOP6Rk&X-Amz-Signature=d3633fe55001b787e4808bc130a678bb2a0693fc8cbfbda1d59fb9163aa9a9ab&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OKZI32Y%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T004134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdjLxR7GWv4i90EpCuIShnmGfzl7ZU5JUUA1pbAEF%2BhwIhAO62Duh72ZjrDnDqHWVzIm%2F5ncS5zTT0VD%2Bnq%2Bn7QkE5Kv8DCDoQABoMNjM3NDIzMTgzODA1IgyQRp%2FrKqNMOpB2ywAq3AMzUMf8nvg2TB1tWs2fG7BIa%2B7Uy7nuLcqgvU%2BuwzeE9OToissF48MLf7UkE6tXvXO31VZepFVtkHLyqbYeELaJvxlLbdvxny7arFG7JKv18hwTnbGpW98a72mI7T4Ya6acWEt8jleVFp2UVhGlLEpmMI59GlmKh856K%2BfRbnzAt0fUy8jsR0JCRkjnOt1fAt9ss6eWsxoiNhjyhSHsoJg4YpXJr7xFMhNFGaP0wGMiu%2Bbk%2ByBTc95T9uJUUCRyXdNwv5pn7OXKBWbBSE2MvY8AJi7yAB%2FMm9ddfwzCyBFEsi2ziJVVm%2FHWNBcavKuBMqoNStHbcNaD3GzgFZnFLdUqq7jQRJekQcbVya7wxqM48dwaITjabhRfrcGJBIm6WGXDbGRvaiVJ8QMsSMKt3gj2omk7weVQetD9W0eeXWZFxG3eNnIZqPecphLrAKb%2BDk2F0scK7L74BEFXKkPbu%2BkySyrjEDLNL2p0cAveT9GnnlUvtSiX8YIt%2FFfhJNQpBtgCZG885iRbHPN8BSi2nGs06%2FKp6qjxyk6nXRdYVW2D4v2qpzkesaNcpBq2nwgKBUwtUrij5L0jWGc%2F5DT3uXZ2N4BHEv1YvYXCRPpwqAKeF0nefsg3MwhcSRI2LDD%2BsOXABjqkAemx7SBIu%2BuOlWC8ne%2B0zCfyUYmCy%2FLBhj7ykGHy3nwkUqPrDcRtxK%2FjwwuqdW1kpoEzh523gY1kRIcPcvvKtJ9zGFlNZQY9sz1Sddhg6%2BP6kQ9R9dL94m1QlwoDkcynfuWEY6rAViRF%2BKz7UiVwrjQ0jBSKIaj9a%2FPU6A3llQrnNWVRXwxwqvDOa31JAGwp5TEnMzmipgzNwqYTvNQNSPoOP6Rk&X-Amz-Signature=adcf43c47323a5cb578229c97d2a76ddeed368d6c54e3c17d5b3508efff092dc&X-Amz-SignedHeaders=host&x-id=GetObject)
