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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HEW4OI6%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T041016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdxL2YJREOv%2BUYNsB4tzqqT%2BihC%2F8mdXUTJWROSo471AIhAPGvafj%2FGNgwIav4suQEImGTt3pDvc%2BKna8FjUw82SqbKv8DCCEQABoMNjM3NDIzMTgzODA1IgyMoMC5lzbTitr%2FUJ8q3AOfhNJvCWsOPIy3pijIzSDvMRyzGx4uD%2B9oI%2FmQMkO%2FCz76cveqbDolxh9e3E%2F62bTwOEh8UEtBn7u0Dko0FB2AMkHDLUhFNpZhhZGp8L9KY0eDkZAd%2BB2YeT57sJvhsaj5lO6L2Y7%2BgYB5PE9tO7JnsVdRCVSM2e37VMYj2Ml9e1JcmYyhcYh%2Fxfd0eepP8%2FAMvCYlMqzZgEygvZz78GTlU56FOonhO5kjRM%2BOKbQ2LYTgsIvCagDbmeWYNB6noMV3XjwSXUS1xIg5JnsE0jAmp0oP4osI3XSRp6OXbDrvQyWlWrHtIzn0ovioH6dMbG2Cx1A4w9MQqr9P%2B6YWrJAxiz5GK7HaRHSE2C2NH6VicRSUQEVAYPm0JkDqU6wSSTmmDTWK%2B11E8zCa1%2FaX69Cnu5FEMSLyBqMFtdpQVE0Spbe7%2FK%2Bjgkqg0MRYl%2FlcQHckZxpt4w%2FLSUGc1eJbDmAjChWnq3CBosAhreRKmK1Zg74D7P%2BcxbJNY46tRQI7N6cyLT8iJ4XzJyvPJr3rPNpj5DdTyi8v64tdKepVaMXt0%2FEVavba%2BjGRYNUtTpGguiMpQ5jOhwBZvrkZ1goOCJBp8tVn38GGK4UicCoW3KcxetlNdsk39R7pOq0eRjCi8e69BjqkAZR02xFIqZ3gEqmvKk%2FA8N%2Bzh13q%2FyExm7np69oDmy%2Bo2dv5P%2B6E4i0ikK3NS%2BUbIbQpFLN34zWlbjgzXHYUzn2RTOi8C%2Bw2q0L%2F2wSFL4lJZu%2B%2BF1nDylU3XRpWlOcwrxEAWw2%2FVV98uD%2BdUsQv9kVlxN1tF17PKrkZAroFq%2BgT6RvYlBWnHKXAdk4wjFzXvZw5VNJvmTodfn2wrMwqKZyhRRQu&X-Amz-Signature=28446996451ff5bab7812d19e45a7cf7544ca4972b2cd4c85646dae0850fc79d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HEW4OI6%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T041016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdxL2YJREOv%2BUYNsB4tzqqT%2BihC%2F8mdXUTJWROSo471AIhAPGvafj%2FGNgwIav4suQEImGTt3pDvc%2BKna8FjUw82SqbKv8DCCEQABoMNjM3NDIzMTgzODA1IgyMoMC5lzbTitr%2FUJ8q3AOfhNJvCWsOPIy3pijIzSDvMRyzGx4uD%2B9oI%2FmQMkO%2FCz76cveqbDolxh9e3E%2F62bTwOEh8UEtBn7u0Dko0FB2AMkHDLUhFNpZhhZGp8L9KY0eDkZAd%2BB2YeT57sJvhsaj5lO6L2Y7%2BgYB5PE9tO7JnsVdRCVSM2e37VMYj2Ml9e1JcmYyhcYh%2Fxfd0eepP8%2FAMvCYlMqzZgEygvZz78GTlU56FOonhO5kjRM%2BOKbQ2LYTgsIvCagDbmeWYNB6noMV3XjwSXUS1xIg5JnsE0jAmp0oP4osI3XSRp6OXbDrvQyWlWrHtIzn0ovioH6dMbG2Cx1A4w9MQqr9P%2B6YWrJAxiz5GK7HaRHSE2C2NH6VicRSUQEVAYPm0JkDqU6wSSTmmDTWK%2B11E8zCa1%2FaX69Cnu5FEMSLyBqMFtdpQVE0Spbe7%2FK%2Bjgkqg0MRYl%2FlcQHckZxpt4w%2FLSUGc1eJbDmAjChWnq3CBosAhreRKmK1Zg74D7P%2BcxbJNY46tRQI7N6cyLT8iJ4XzJyvPJr3rPNpj5DdTyi8v64tdKepVaMXt0%2FEVavba%2BjGRYNUtTpGguiMpQ5jOhwBZvrkZ1goOCJBp8tVn38GGK4UicCoW3KcxetlNdsk39R7pOq0eRjCi8e69BjqkAZR02xFIqZ3gEqmvKk%2FA8N%2Bzh13q%2FyExm7np69oDmy%2Bo2dv5P%2B6E4i0ikK3NS%2BUbIbQpFLN34zWlbjgzXHYUzn2RTOi8C%2Bw2q0L%2F2wSFL4lJZu%2B%2BF1nDylU3XRpWlOcwrxEAWw2%2FVV98uD%2BdUsQv9kVlxN1tF17PKrkZAroFq%2BgT6RvYlBWnHKXAdk4wjFzXvZw5VNJvmTodfn2wrMwqKZyhRRQu&X-Amz-Signature=6deebf17c71a5f64bc86993933d44be567d6d5bb29c3344a717db3f258caf6e0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HEW4OI6%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T041016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdxL2YJREOv%2BUYNsB4tzqqT%2BihC%2F8mdXUTJWROSo471AIhAPGvafj%2FGNgwIav4suQEImGTt3pDvc%2BKna8FjUw82SqbKv8DCCEQABoMNjM3NDIzMTgzODA1IgyMoMC5lzbTitr%2FUJ8q3AOfhNJvCWsOPIy3pijIzSDvMRyzGx4uD%2B9oI%2FmQMkO%2FCz76cveqbDolxh9e3E%2F62bTwOEh8UEtBn7u0Dko0FB2AMkHDLUhFNpZhhZGp8L9KY0eDkZAd%2BB2YeT57sJvhsaj5lO6L2Y7%2BgYB5PE9tO7JnsVdRCVSM2e37VMYj2Ml9e1JcmYyhcYh%2Fxfd0eepP8%2FAMvCYlMqzZgEygvZz78GTlU56FOonhO5kjRM%2BOKbQ2LYTgsIvCagDbmeWYNB6noMV3XjwSXUS1xIg5JnsE0jAmp0oP4osI3XSRp6OXbDrvQyWlWrHtIzn0ovioH6dMbG2Cx1A4w9MQqr9P%2B6YWrJAxiz5GK7HaRHSE2C2NH6VicRSUQEVAYPm0JkDqU6wSSTmmDTWK%2B11E8zCa1%2FaX69Cnu5FEMSLyBqMFtdpQVE0Spbe7%2FK%2Bjgkqg0MRYl%2FlcQHckZxpt4w%2FLSUGc1eJbDmAjChWnq3CBosAhreRKmK1Zg74D7P%2BcxbJNY46tRQI7N6cyLT8iJ4XzJyvPJr3rPNpj5DdTyi8v64tdKepVaMXt0%2FEVavba%2BjGRYNUtTpGguiMpQ5jOhwBZvrkZ1goOCJBp8tVn38GGK4UicCoW3KcxetlNdsk39R7pOq0eRjCi8e69BjqkAZR02xFIqZ3gEqmvKk%2FA8N%2Bzh13q%2FyExm7np69oDmy%2Bo2dv5P%2B6E4i0ikK3NS%2BUbIbQpFLN34zWlbjgzXHYUzn2RTOi8C%2Bw2q0L%2F2wSFL4lJZu%2B%2BF1nDylU3XRpWlOcwrxEAWw2%2FVV98uD%2BdUsQv9kVlxN1tF17PKrkZAroFq%2BgT6RvYlBWnHKXAdk4wjFzXvZw5VNJvmTodfn2wrMwqKZyhRRQu&X-Amz-Signature=520a01b4237da1074627e20a3e832e9f970ffe508122a01748605c925ab5c47e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HEW4OI6%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T041016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdxL2YJREOv%2BUYNsB4tzqqT%2BihC%2F8mdXUTJWROSo471AIhAPGvafj%2FGNgwIav4suQEImGTt3pDvc%2BKna8FjUw82SqbKv8DCCEQABoMNjM3NDIzMTgzODA1IgyMoMC5lzbTitr%2FUJ8q3AOfhNJvCWsOPIy3pijIzSDvMRyzGx4uD%2B9oI%2FmQMkO%2FCz76cveqbDolxh9e3E%2F62bTwOEh8UEtBn7u0Dko0FB2AMkHDLUhFNpZhhZGp8L9KY0eDkZAd%2BB2YeT57sJvhsaj5lO6L2Y7%2BgYB5PE9tO7JnsVdRCVSM2e37VMYj2Ml9e1JcmYyhcYh%2Fxfd0eepP8%2FAMvCYlMqzZgEygvZz78GTlU56FOonhO5kjRM%2BOKbQ2LYTgsIvCagDbmeWYNB6noMV3XjwSXUS1xIg5JnsE0jAmp0oP4osI3XSRp6OXbDrvQyWlWrHtIzn0ovioH6dMbG2Cx1A4w9MQqr9P%2B6YWrJAxiz5GK7HaRHSE2C2NH6VicRSUQEVAYPm0JkDqU6wSSTmmDTWK%2B11E8zCa1%2FaX69Cnu5FEMSLyBqMFtdpQVE0Spbe7%2FK%2Bjgkqg0MRYl%2FlcQHckZxpt4w%2FLSUGc1eJbDmAjChWnq3CBosAhreRKmK1Zg74D7P%2BcxbJNY46tRQI7N6cyLT8iJ4XzJyvPJr3rPNpj5DdTyi8v64tdKepVaMXt0%2FEVavba%2BjGRYNUtTpGguiMpQ5jOhwBZvrkZ1goOCJBp8tVn38GGK4UicCoW3KcxetlNdsk39R7pOq0eRjCi8e69BjqkAZR02xFIqZ3gEqmvKk%2FA8N%2Bzh13q%2FyExm7np69oDmy%2Bo2dv5P%2B6E4i0ikK3NS%2BUbIbQpFLN34zWlbjgzXHYUzn2RTOi8C%2Bw2q0L%2F2wSFL4lJZu%2B%2BF1nDylU3XRpWlOcwrxEAWw2%2FVV98uD%2BdUsQv9kVlxN1tF17PKrkZAroFq%2BgT6RvYlBWnHKXAdk4wjFzXvZw5VNJvmTodfn2wrMwqKZyhRRQu&X-Amz-Signature=fcf1e484a2556c47bdc7eabd657c3ea5434b92aaa70267cd285296cdb241875b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HEW4OI6%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T041016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdxL2YJREOv%2BUYNsB4tzqqT%2BihC%2F8mdXUTJWROSo471AIhAPGvafj%2FGNgwIav4suQEImGTt3pDvc%2BKna8FjUw82SqbKv8DCCEQABoMNjM3NDIzMTgzODA1IgyMoMC5lzbTitr%2FUJ8q3AOfhNJvCWsOPIy3pijIzSDvMRyzGx4uD%2B9oI%2FmQMkO%2FCz76cveqbDolxh9e3E%2F62bTwOEh8UEtBn7u0Dko0FB2AMkHDLUhFNpZhhZGp8L9KY0eDkZAd%2BB2YeT57sJvhsaj5lO6L2Y7%2BgYB5PE9tO7JnsVdRCVSM2e37VMYj2Ml9e1JcmYyhcYh%2Fxfd0eepP8%2FAMvCYlMqzZgEygvZz78GTlU56FOonhO5kjRM%2BOKbQ2LYTgsIvCagDbmeWYNB6noMV3XjwSXUS1xIg5JnsE0jAmp0oP4osI3XSRp6OXbDrvQyWlWrHtIzn0ovioH6dMbG2Cx1A4w9MQqr9P%2B6YWrJAxiz5GK7HaRHSE2C2NH6VicRSUQEVAYPm0JkDqU6wSSTmmDTWK%2B11E8zCa1%2FaX69Cnu5FEMSLyBqMFtdpQVE0Spbe7%2FK%2Bjgkqg0MRYl%2FlcQHckZxpt4w%2FLSUGc1eJbDmAjChWnq3CBosAhreRKmK1Zg74D7P%2BcxbJNY46tRQI7N6cyLT8iJ4XzJyvPJr3rPNpj5DdTyi8v64tdKepVaMXt0%2FEVavba%2BjGRYNUtTpGguiMpQ5jOhwBZvrkZ1goOCJBp8tVn38GGK4UicCoW3KcxetlNdsk39R7pOq0eRjCi8e69BjqkAZR02xFIqZ3gEqmvKk%2FA8N%2Bzh13q%2FyExm7np69oDmy%2Bo2dv5P%2B6E4i0ikK3NS%2BUbIbQpFLN34zWlbjgzXHYUzn2RTOi8C%2Bw2q0L%2F2wSFL4lJZu%2B%2BF1nDylU3XRpWlOcwrxEAWw2%2FVV98uD%2BdUsQv9kVlxN1tF17PKrkZAroFq%2BgT6RvYlBWnHKXAdk4wjFzXvZw5VNJvmTodfn2wrMwqKZyhRRQu&X-Amz-Signature=8f34a050337907c47f4c8c6fbcb144ba9a524cd69664869794f043663c1c57b3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HEW4OI6%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T041016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdxL2YJREOv%2BUYNsB4tzqqT%2BihC%2F8mdXUTJWROSo471AIhAPGvafj%2FGNgwIav4suQEImGTt3pDvc%2BKna8FjUw82SqbKv8DCCEQABoMNjM3NDIzMTgzODA1IgyMoMC5lzbTitr%2FUJ8q3AOfhNJvCWsOPIy3pijIzSDvMRyzGx4uD%2B9oI%2FmQMkO%2FCz76cveqbDolxh9e3E%2F62bTwOEh8UEtBn7u0Dko0FB2AMkHDLUhFNpZhhZGp8L9KY0eDkZAd%2BB2YeT57sJvhsaj5lO6L2Y7%2BgYB5PE9tO7JnsVdRCVSM2e37VMYj2Ml9e1JcmYyhcYh%2Fxfd0eepP8%2FAMvCYlMqzZgEygvZz78GTlU56FOonhO5kjRM%2BOKbQ2LYTgsIvCagDbmeWYNB6noMV3XjwSXUS1xIg5JnsE0jAmp0oP4osI3XSRp6OXbDrvQyWlWrHtIzn0ovioH6dMbG2Cx1A4w9MQqr9P%2B6YWrJAxiz5GK7HaRHSE2C2NH6VicRSUQEVAYPm0JkDqU6wSSTmmDTWK%2B11E8zCa1%2FaX69Cnu5FEMSLyBqMFtdpQVE0Spbe7%2FK%2Bjgkqg0MRYl%2FlcQHckZxpt4w%2FLSUGc1eJbDmAjChWnq3CBosAhreRKmK1Zg74D7P%2BcxbJNY46tRQI7N6cyLT8iJ4XzJyvPJr3rPNpj5DdTyi8v64tdKepVaMXt0%2FEVavba%2BjGRYNUtTpGguiMpQ5jOhwBZvrkZ1goOCJBp8tVn38GGK4UicCoW3KcxetlNdsk39R7pOq0eRjCi8e69BjqkAZR02xFIqZ3gEqmvKk%2FA8N%2Bzh13q%2FyExm7np69oDmy%2Bo2dv5P%2B6E4i0ikK3NS%2BUbIbQpFLN34zWlbjgzXHYUzn2RTOi8C%2Bw2q0L%2F2wSFL4lJZu%2B%2BF1nDylU3XRpWlOcwrxEAWw2%2FVV98uD%2BdUsQv9kVlxN1tF17PKrkZAroFq%2BgT6RvYlBWnHKXAdk4wjFzXvZw5VNJvmTodfn2wrMwqKZyhRRQu&X-Amz-Signature=b19ab8e47825580cbbe0d0fa92182050f03b251b0dc0a99c7254f8cea628c15f&X-Amz-SignedHeaders=host&x-id=GetObject)
