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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LHAQ6YU%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T004436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIFKAEWzfEsbY%2BBraN%2BN4ct2MDFWxLrPoaSJISCRvrPETAiEAy%2Bg9H820KaXR99LA7vP5UKDDrh3%2FAkUuOvGkrhKYLtUqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtXv39fjDrU4LmhAircA6MEmJl36947EvdNZ9vxh4b003GhlSENdqmM7wtVSX8DestGkNW%2FOvq%2B4BJ%2FUXsKkuJhYdTh4xaaMBCBgz68%2BYndaZSFU5sVQjQpI9IJ8CX1nOh6keP%2FubQVeAtXBj7AzddvwP6m3u17fcJGt9YvxZExnJWFggSuRvOdD3iawf8kY0yJ4IcC7sPb5npK3vdepsTNYJhUCGoHQw1TdoyeU5ibF7rBcDEQg7t9bhp75tu%2FTF%2FfcUVsEj5vMjYgED4Lva8qw%2BQH%2F2tbzTMS%2B15ZMRxaJmh7273StUnXJ37dcgDVv6nw0mwfJheM%2FrAbaUjVVpaeUDnygnmy%2BzljNDLXrfvnctaGXJ%2FPR%2F8M6pdwXrQu924r5BKORVPe6INjSwNGQADBGbUGwHyVn7GYk4WsZZac2gmmYjwxm5uj7Kwy7ihb%2Btr3%2Bj%2B33zpqw5OX%2BZf%2FKvQXMqGHXIg6V6ZhDgHAPx9L%2FW9m1RbjvJqidmjewUWbFsRAr4u085C1KFG34Vx6%2FTYPx23E5b8%2BA05GBlWj0wnBgmqRUHo0KIhZHeB9eX5fKpq4UDoMhN4jq8oDmwlN%2BKm057eD5GrAvshp3RiY9vehndZySYsBq7iqDSyMJjdPJmw4nh0cc7Y%2B04swMMnS%2F8AGOqUBhwFAtbMpX7jgFsZ0E3Zxgz%2F5Kj4HDZLoEL92rY3%2FSvuFMbi2rCtaV64DtGs8Lohl4NXi1e0AAsKPwK6NceAh5EbPLbLnuKSl4YB6HPwy2WFhOVyedqX%2BtzFbuEdhHA58olgn5uTCLvHpljZyWxwmu37PyKyxjsRWWDNCLBfWRx0KJLDi3S%2F0azoT56JzLu2Q9Wvn3AL4afFuz8LdpDyFm5ycSPwU&X-Amz-Signature=82c7a91816746c7c59070f39221614b2b060a19322dadf790ee716271c252964&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LHAQ6YU%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T004436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIFKAEWzfEsbY%2BBraN%2BN4ct2MDFWxLrPoaSJISCRvrPETAiEAy%2Bg9H820KaXR99LA7vP5UKDDrh3%2FAkUuOvGkrhKYLtUqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtXv39fjDrU4LmhAircA6MEmJl36947EvdNZ9vxh4b003GhlSENdqmM7wtVSX8DestGkNW%2FOvq%2B4BJ%2FUXsKkuJhYdTh4xaaMBCBgz68%2BYndaZSFU5sVQjQpI9IJ8CX1nOh6keP%2FubQVeAtXBj7AzddvwP6m3u17fcJGt9YvxZExnJWFggSuRvOdD3iawf8kY0yJ4IcC7sPb5npK3vdepsTNYJhUCGoHQw1TdoyeU5ibF7rBcDEQg7t9bhp75tu%2FTF%2FfcUVsEj5vMjYgED4Lva8qw%2BQH%2F2tbzTMS%2B15ZMRxaJmh7273StUnXJ37dcgDVv6nw0mwfJheM%2FrAbaUjVVpaeUDnygnmy%2BzljNDLXrfvnctaGXJ%2FPR%2F8M6pdwXrQu924r5BKORVPe6INjSwNGQADBGbUGwHyVn7GYk4WsZZac2gmmYjwxm5uj7Kwy7ihb%2Btr3%2Bj%2B33zpqw5OX%2BZf%2FKvQXMqGHXIg6V6ZhDgHAPx9L%2FW9m1RbjvJqidmjewUWbFsRAr4u085C1KFG34Vx6%2FTYPx23E5b8%2BA05GBlWj0wnBgmqRUHo0KIhZHeB9eX5fKpq4UDoMhN4jq8oDmwlN%2BKm057eD5GrAvshp3RiY9vehndZySYsBq7iqDSyMJjdPJmw4nh0cc7Y%2B04swMMnS%2F8AGOqUBhwFAtbMpX7jgFsZ0E3Zxgz%2F5Kj4HDZLoEL92rY3%2FSvuFMbi2rCtaV64DtGs8Lohl4NXi1e0AAsKPwK6NceAh5EbPLbLnuKSl4YB6HPwy2WFhOVyedqX%2BtzFbuEdhHA58olgn5uTCLvHpljZyWxwmu37PyKyxjsRWWDNCLBfWRx0KJLDi3S%2F0azoT56JzLu2Q9Wvn3AL4afFuz8LdpDyFm5ycSPwU&X-Amz-Signature=c0db615d773485aa560d9ec4128ca3da06ae1db37c1419fe699cceaf6951f6ac&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LHAQ6YU%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T004436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIFKAEWzfEsbY%2BBraN%2BN4ct2MDFWxLrPoaSJISCRvrPETAiEAy%2Bg9H820KaXR99LA7vP5UKDDrh3%2FAkUuOvGkrhKYLtUqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtXv39fjDrU4LmhAircA6MEmJl36947EvdNZ9vxh4b003GhlSENdqmM7wtVSX8DestGkNW%2FOvq%2B4BJ%2FUXsKkuJhYdTh4xaaMBCBgz68%2BYndaZSFU5sVQjQpI9IJ8CX1nOh6keP%2FubQVeAtXBj7AzddvwP6m3u17fcJGt9YvxZExnJWFggSuRvOdD3iawf8kY0yJ4IcC7sPb5npK3vdepsTNYJhUCGoHQw1TdoyeU5ibF7rBcDEQg7t9bhp75tu%2FTF%2FfcUVsEj5vMjYgED4Lva8qw%2BQH%2F2tbzTMS%2B15ZMRxaJmh7273StUnXJ37dcgDVv6nw0mwfJheM%2FrAbaUjVVpaeUDnygnmy%2BzljNDLXrfvnctaGXJ%2FPR%2F8M6pdwXrQu924r5BKORVPe6INjSwNGQADBGbUGwHyVn7GYk4WsZZac2gmmYjwxm5uj7Kwy7ihb%2Btr3%2Bj%2B33zpqw5OX%2BZf%2FKvQXMqGHXIg6V6ZhDgHAPx9L%2FW9m1RbjvJqidmjewUWbFsRAr4u085C1KFG34Vx6%2FTYPx23E5b8%2BA05GBlWj0wnBgmqRUHo0KIhZHeB9eX5fKpq4UDoMhN4jq8oDmwlN%2BKm057eD5GrAvshp3RiY9vehndZySYsBq7iqDSyMJjdPJmw4nh0cc7Y%2B04swMMnS%2F8AGOqUBhwFAtbMpX7jgFsZ0E3Zxgz%2F5Kj4HDZLoEL92rY3%2FSvuFMbi2rCtaV64DtGs8Lohl4NXi1e0AAsKPwK6NceAh5EbPLbLnuKSl4YB6HPwy2WFhOVyedqX%2BtzFbuEdhHA58olgn5uTCLvHpljZyWxwmu37PyKyxjsRWWDNCLBfWRx0KJLDi3S%2F0azoT56JzLu2Q9Wvn3AL4afFuz8LdpDyFm5ycSPwU&X-Amz-Signature=5a45bdd8cc9f1874cf64d97559d0c690da04492f82e27d984f05f6d9cba30bc8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LHAQ6YU%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T004436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIFKAEWzfEsbY%2BBraN%2BN4ct2MDFWxLrPoaSJISCRvrPETAiEAy%2Bg9H820KaXR99LA7vP5UKDDrh3%2FAkUuOvGkrhKYLtUqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtXv39fjDrU4LmhAircA6MEmJl36947EvdNZ9vxh4b003GhlSENdqmM7wtVSX8DestGkNW%2FOvq%2B4BJ%2FUXsKkuJhYdTh4xaaMBCBgz68%2BYndaZSFU5sVQjQpI9IJ8CX1nOh6keP%2FubQVeAtXBj7AzddvwP6m3u17fcJGt9YvxZExnJWFggSuRvOdD3iawf8kY0yJ4IcC7sPb5npK3vdepsTNYJhUCGoHQw1TdoyeU5ibF7rBcDEQg7t9bhp75tu%2FTF%2FfcUVsEj5vMjYgED4Lva8qw%2BQH%2F2tbzTMS%2B15ZMRxaJmh7273StUnXJ37dcgDVv6nw0mwfJheM%2FrAbaUjVVpaeUDnygnmy%2BzljNDLXrfvnctaGXJ%2FPR%2F8M6pdwXrQu924r5BKORVPe6INjSwNGQADBGbUGwHyVn7GYk4WsZZac2gmmYjwxm5uj7Kwy7ihb%2Btr3%2Bj%2B33zpqw5OX%2BZf%2FKvQXMqGHXIg6V6ZhDgHAPx9L%2FW9m1RbjvJqidmjewUWbFsRAr4u085C1KFG34Vx6%2FTYPx23E5b8%2BA05GBlWj0wnBgmqRUHo0KIhZHeB9eX5fKpq4UDoMhN4jq8oDmwlN%2BKm057eD5GrAvshp3RiY9vehndZySYsBq7iqDSyMJjdPJmw4nh0cc7Y%2B04swMMnS%2F8AGOqUBhwFAtbMpX7jgFsZ0E3Zxgz%2F5Kj4HDZLoEL92rY3%2FSvuFMbi2rCtaV64DtGs8Lohl4NXi1e0AAsKPwK6NceAh5EbPLbLnuKSl4YB6HPwy2WFhOVyedqX%2BtzFbuEdhHA58olgn5uTCLvHpljZyWxwmu37PyKyxjsRWWDNCLBfWRx0KJLDi3S%2F0azoT56JzLu2Q9Wvn3AL4afFuz8LdpDyFm5ycSPwU&X-Amz-Signature=efd322d4f05d947e8b93277047e533d1a2aa5146cb2b8c9f752ca1888deab980&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LHAQ6YU%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T004436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIFKAEWzfEsbY%2BBraN%2BN4ct2MDFWxLrPoaSJISCRvrPETAiEAy%2Bg9H820KaXR99LA7vP5UKDDrh3%2FAkUuOvGkrhKYLtUqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtXv39fjDrU4LmhAircA6MEmJl36947EvdNZ9vxh4b003GhlSENdqmM7wtVSX8DestGkNW%2FOvq%2B4BJ%2FUXsKkuJhYdTh4xaaMBCBgz68%2BYndaZSFU5sVQjQpI9IJ8CX1nOh6keP%2FubQVeAtXBj7AzddvwP6m3u17fcJGt9YvxZExnJWFggSuRvOdD3iawf8kY0yJ4IcC7sPb5npK3vdepsTNYJhUCGoHQw1TdoyeU5ibF7rBcDEQg7t9bhp75tu%2FTF%2FfcUVsEj5vMjYgED4Lva8qw%2BQH%2F2tbzTMS%2B15ZMRxaJmh7273StUnXJ37dcgDVv6nw0mwfJheM%2FrAbaUjVVpaeUDnygnmy%2BzljNDLXrfvnctaGXJ%2FPR%2F8M6pdwXrQu924r5BKORVPe6INjSwNGQADBGbUGwHyVn7GYk4WsZZac2gmmYjwxm5uj7Kwy7ihb%2Btr3%2Bj%2B33zpqw5OX%2BZf%2FKvQXMqGHXIg6V6ZhDgHAPx9L%2FW9m1RbjvJqidmjewUWbFsRAr4u085C1KFG34Vx6%2FTYPx23E5b8%2BA05GBlWj0wnBgmqRUHo0KIhZHeB9eX5fKpq4UDoMhN4jq8oDmwlN%2BKm057eD5GrAvshp3RiY9vehndZySYsBq7iqDSyMJjdPJmw4nh0cc7Y%2B04swMMnS%2F8AGOqUBhwFAtbMpX7jgFsZ0E3Zxgz%2F5Kj4HDZLoEL92rY3%2FSvuFMbi2rCtaV64DtGs8Lohl4NXi1e0AAsKPwK6NceAh5EbPLbLnuKSl4YB6HPwy2WFhOVyedqX%2BtzFbuEdhHA58olgn5uTCLvHpljZyWxwmu37PyKyxjsRWWDNCLBfWRx0KJLDi3S%2F0azoT56JzLu2Q9Wvn3AL4afFuz8LdpDyFm5ycSPwU&X-Amz-Signature=810ba89a4a0dd9a276250e088b5bf893919604263fbd578f73dee8a89f4acde5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LHAQ6YU%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T004436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIFKAEWzfEsbY%2BBraN%2BN4ct2MDFWxLrPoaSJISCRvrPETAiEAy%2Bg9H820KaXR99LA7vP5UKDDrh3%2FAkUuOvGkrhKYLtUqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAtXv39fjDrU4LmhAircA6MEmJl36947EvdNZ9vxh4b003GhlSENdqmM7wtVSX8DestGkNW%2FOvq%2B4BJ%2FUXsKkuJhYdTh4xaaMBCBgz68%2BYndaZSFU5sVQjQpI9IJ8CX1nOh6keP%2FubQVeAtXBj7AzddvwP6m3u17fcJGt9YvxZExnJWFggSuRvOdD3iawf8kY0yJ4IcC7sPb5npK3vdepsTNYJhUCGoHQw1TdoyeU5ibF7rBcDEQg7t9bhp75tu%2FTF%2FfcUVsEj5vMjYgED4Lva8qw%2BQH%2F2tbzTMS%2B15ZMRxaJmh7273StUnXJ37dcgDVv6nw0mwfJheM%2FrAbaUjVVpaeUDnygnmy%2BzljNDLXrfvnctaGXJ%2FPR%2F8M6pdwXrQu924r5BKORVPe6INjSwNGQADBGbUGwHyVn7GYk4WsZZac2gmmYjwxm5uj7Kwy7ihb%2Btr3%2Bj%2B33zpqw5OX%2BZf%2FKvQXMqGHXIg6V6ZhDgHAPx9L%2FW9m1RbjvJqidmjewUWbFsRAr4u085C1KFG34Vx6%2FTYPx23E5b8%2BA05GBlWj0wnBgmqRUHo0KIhZHeB9eX5fKpq4UDoMhN4jq8oDmwlN%2BKm057eD5GrAvshp3RiY9vehndZySYsBq7iqDSyMJjdPJmw4nh0cc7Y%2B04swMMnS%2F8AGOqUBhwFAtbMpX7jgFsZ0E3Zxgz%2F5Kj4HDZLoEL92rY3%2FSvuFMbi2rCtaV64DtGs8Lohl4NXi1e0AAsKPwK6NceAh5EbPLbLnuKSl4YB6HPwy2WFhOVyedqX%2BtzFbuEdhHA58olgn5uTCLvHpljZyWxwmu37PyKyxjsRWWDNCLBfWRx0KJLDi3S%2F0azoT56JzLu2Q9Wvn3AL4afFuz8LdpDyFm5ycSPwU&X-Amz-Signature=2d93fe19368e2dd76e502caa458fc996a55dddbf5847a137671f1b46cd544017&X-Amz-SignedHeaders=host&x-id=GetObject)
