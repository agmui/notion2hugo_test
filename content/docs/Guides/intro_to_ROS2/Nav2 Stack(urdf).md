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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXRID6QR%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T090941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2ByP2rKAQUtBS%2B6rM21dubtl8cP68%2FZZm%2FqQ035FpFYAiAUwIu3BClSuMRYW16tCpwgETND46YaYq%2BAyIMuthnPUir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM%2FQOWrFEJFMim1WC%2FKtwDKqdxYwjXURZb4cqY%2FCGlslBK%2B43aqEcIwPdET94vWUEJexRyujzpV9iE2zUR%2FF1FE04w0pDP7YUXoEYJdYjf%2Fgo4f0TgOT8QVidgQqkJ%2Fk53KKhapIrePri2bmWmdeSnVujtzkOf7%2F6OJGYxlGkKvAKU0Zv8C8TIvQugl1%2BD6Vg%2ByT963xDDT%2BpI4omUHp2g8diRUVhE3nlkVRXSkKvRrTh8JcYlTsmVgVVd3JQ0gHH3dlI1bJ1bbqlJCjEdHK5Awl4%2F9rweK8BB7in%2Fm68UWtNGFJn9rSZU2YQpTO%2FpkqajqziZQwFI84FWusI1TjGj6sUtq0TSdXiMqNFnwjCv5EJmcRoKM62V0qwZ7L4IAUz3tLdeoov4XQrLwKIsidSRzuUZLccj%2Fz%2BXU9C%2B62HCE0Pq4%2Ft2etVVwTnnC%2FEzeE8C15ZoIFTZ069h6FC0VBOUHixcp89JFJJRxCFnwJnIeuctSJgf6xrfNqzMu%2B7CbYY07Z2xvZH738U6QFp%2Bhp%2BkX5NgVeRKURATSwtJ8ieTyp7hBDzL5bzpOy0%2B2%2ByKmspkfPtLH%2B%2FgNYRkpKviCDLC5t0N%2F1%2BmbIHoVk1vNHND%2B%2Bu2R0zw4XrwoXBpaTq5H1OE5ZqIvDkhkwr2jCkwxOvwvQY6pgFLPiaeeXX%2ByKwSz4qABxRkizDF2nkO0EbGlTiUeez8SZ5suOVIY3g%2FG2wDmBbpoHnQw4MhFryyy8d4oaht1usKjRfoTk2Yw16TvfrQYBFTED2jh1CVNk7CCasxj40LV1NwD7WtTlmJ6w2exYWfLV6JEvMTgMonPGAhF7YFEgKhQsenDNpgRsC3CrEuTUTzzKccfnxR6e8ixfv8LDyWw9hEuln49rYe&X-Amz-Signature=986e89d7f5dd9961b4de4d51cffebd59831567ccdd40bbc67d1ee0c42b49fe49&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXRID6QR%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T090941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2ByP2rKAQUtBS%2B6rM21dubtl8cP68%2FZZm%2FqQ035FpFYAiAUwIu3BClSuMRYW16tCpwgETND46YaYq%2BAyIMuthnPUir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM%2FQOWrFEJFMim1WC%2FKtwDKqdxYwjXURZb4cqY%2FCGlslBK%2B43aqEcIwPdET94vWUEJexRyujzpV9iE2zUR%2FF1FE04w0pDP7YUXoEYJdYjf%2Fgo4f0TgOT8QVidgQqkJ%2Fk53KKhapIrePri2bmWmdeSnVujtzkOf7%2F6OJGYxlGkKvAKU0Zv8C8TIvQugl1%2BD6Vg%2ByT963xDDT%2BpI4omUHp2g8diRUVhE3nlkVRXSkKvRrTh8JcYlTsmVgVVd3JQ0gHH3dlI1bJ1bbqlJCjEdHK5Awl4%2F9rweK8BB7in%2Fm68UWtNGFJn9rSZU2YQpTO%2FpkqajqziZQwFI84FWusI1TjGj6sUtq0TSdXiMqNFnwjCv5EJmcRoKM62V0qwZ7L4IAUz3tLdeoov4XQrLwKIsidSRzuUZLccj%2Fz%2BXU9C%2B62HCE0Pq4%2Ft2etVVwTnnC%2FEzeE8C15ZoIFTZ069h6FC0VBOUHixcp89JFJJRxCFnwJnIeuctSJgf6xrfNqzMu%2B7CbYY07Z2xvZH738U6QFp%2Bhp%2BkX5NgVeRKURATSwtJ8ieTyp7hBDzL5bzpOy0%2B2%2ByKmspkfPtLH%2B%2FgNYRkpKviCDLC5t0N%2F1%2BmbIHoVk1vNHND%2B%2Bu2R0zw4XrwoXBpaTq5H1OE5ZqIvDkhkwr2jCkwxOvwvQY6pgFLPiaeeXX%2ByKwSz4qABxRkizDF2nkO0EbGlTiUeez8SZ5suOVIY3g%2FG2wDmBbpoHnQw4MhFryyy8d4oaht1usKjRfoTk2Yw16TvfrQYBFTED2jh1CVNk7CCasxj40LV1NwD7WtTlmJ6w2exYWfLV6JEvMTgMonPGAhF7YFEgKhQsenDNpgRsC3CrEuTUTzzKccfnxR6e8ixfv8LDyWw9hEuln49rYe&X-Amz-Signature=7e99f837f0764ece194196b2e23b1d483a98ea831b1bfd7eed735392877eefab&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXRID6QR%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T090941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2ByP2rKAQUtBS%2B6rM21dubtl8cP68%2FZZm%2FqQ035FpFYAiAUwIu3BClSuMRYW16tCpwgETND46YaYq%2BAyIMuthnPUir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM%2FQOWrFEJFMim1WC%2FKtwDKqdxYwjXURZb4cqY%2FCGlslBK%2B43aqEcIwPdET94vWUEJexRyujzpV9iE2zUR%2FF1FE04w0pDP7YUXoEYJdYjf%2Fgo4f0TgOT8QVidgQqkJ%2Fk53KKhapIrePri2bmWmdeSnVujtzkOf7%2F6OJGYxlGkKvAKU0Zv8C8TIvQugl1%2BD6Vg%2ByT963xDDT%2BpI4omUHp2g8diRUVhE3nlkVRXSkKvRrTh8JcYlTsmVgVVd3JQ0gHH3dlI1bJ1bbqlJCjEdHK5Awl4%2F9rweK8BB7in%2Fm68UWtNGFJn9rSZU2YQpTO%2FpkqajqziZQwFI84FWusI1TjGj6sUtq0TSdXiMqNFnwjCv5EJmcRoKM62V0qwZ7L4IAUz3tLdeoov4XQrLwKIsidSRzuUZLccj%2Fz%2BXU9C%2B62HCE0Pq4%2Ft2etVVwTnnC%2FEzeE8C15ZoIFTZ069h6FC0VBOUHixcp89JFJJRxCFnwJnIeuctSJgf6xrfNqzMu%2B7CbYY07Z2xvZH738U6QFp%2Bhp%2BkX5NgVeRKURATSwtJ8ieTyp7hBDzL5bzpOy0%2B2%2ByKmspkfPtLH%2B%2FgNYRkpKviCDLC5t0N%2F1%2BmbIHoVk1vNHND%2B%2Bu2R0zw4XrwoXBpaTq5H1OE5ZqIvDkhkwr2jCkwxOvwvQY6pgFLPiaeeXX%2ByKwSz4qABxRkizDF2nkO0EbGlTiUeez8SZ5suOVIY3g%2FG2wDmBbpoHnQw4MhFryyy8d4oaht1usKjRfoTk2Yw16TvfrQYBFTED2jh1CVNk7CCasxj40LV1NwD7WtTlmJ6w2exYWfLV6JEvMTgMonPGAhF7YFEgKhQsenDNpgRsC3CrEuTUTzzKccfnxR6e8ixfv8LDyWw9hEuln49rYe&X-Amz-Signature=41392f673eb61e30bd34d6d73be5ecfb31738b9026f3423733d095590a62875f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXRID6QR%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T090942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2ByP2rKAQUtBS%2B6rM21dubtl8cP68%2FZZm%2FqQ035FpFYAiAUwIu3BClSuMRYW16tCpwgETND46YaYq%2BAyIMuthnPUir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM%2FQOWrFEJFMim1WC%2FKtwDKqdxYwjXURZb4cqY%2FCGlslBK%2B43aqEcIwPdET94vWUEJexRyujzpV9iE2zUR%2FF1FE04w0pDP7YUXoEYJdYjf%2Fgo4f0TgOT8QVidgQqkJ%2Fk53KKhapIrePri2bmWmdeSnVujtzkOf7%2F6OJGYxlGkKvAKU0Zv8C8TIvQugl1%2BD6Vg%2ByT963xDDT%2BpI4omUHp2g8diRUVhE3nlkVRXSkKvRrTh8JcYlTsmVgVVd3JQ0gHH3dlI1bJ1bbqlJCjEdHK5Awl4%2F9rweK8BB7in%2Fm68UWtNGFJn9rSZU2YQpTO%2FpkqajqziZQwFI84FWusI1TjGj6sUtq0TSdXiMqNFnwjCv5EJmcRoKM62V0qwZ7L4IAUz3tLdeoov4XQrLwKIsidSRzuUZLccj%2Fz%2BXU9C%2B62HCE0Pq4%2Ft2etVVwTnnC%2FEzeE8C15ZoIFTZ069h6FC0VBOUHixcp89JFJJRxCFnwJnIeuctSJgf6xrfNqzMu%2B7CbYY07Z2xvZH738U6QFp%2Bhp%2BkX5NgVeRKURATSwtJ8ieTyp7hBDzL5bzpOy0%2B2%2ByKmspkfPtLH%2B%2FgNYRkpKviCDLC5t0N%2F1%2BmbIHoVk1vNHND%2B%2Bu2R0zw4XrwoXBpaTq5H1OE5ZqIvDkhkwr2jCkwxOvwvQY6pgFLPiaeeXX%2ByKwSz4qABxRkizDF2nkO0EbGlTiUeez8SZ5suOVIY3g%2FG2wDmBbpoHnQw4MhFryyy8d4oaht1usKjRfoTk2Yw16TvfrQYBFTED2jh1CVNk7CCasxj40LV1NwD7WtTlmJ6w2exYWfLV6JEvMTgMonPGAhF7YFEgKhQsenDNpgRsC3CrEuTUTzzKccfnxR6e8ixfv8LDyWw9hEuln49rYe&X-Amz-Signature=8c9e7cc4d3844a11b6ec768e8ab834377d7baeb5ea988e79f46d0e1007baa503&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXRID6QR%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T090941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2ByP2rKAQUtBS%2B6rM21dubtl8cP68%2FZZm%2FqQ035FpFYAiAUwIu3BClSuMRYW16tCpwgETND46YaYq%2BAyIMuthnPUir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM%2FQOWrFEJFMim1WC%2FKtwDKqdxYwjXURZb4cqY%2FCGlslBK%2B43aqEcIwPdET94vWUEJexRyujzpV9iE2zUR%2FF1FE04w0pDP7YUXoEYJdYjf%2Fgo4f0TgOT8QVidgQqkJ%2Fk53KKhapIrePri2bmWmdeSnVujtzkOf7%2F6OJGYxlGkKvAKU0Zv8C8TIvQugl1%2BD6Vg%2ByT963xDDT%2BpI4omUHp2g8diRUVhE3nlkVRXSkKvRrTh8JcYlTsmVgVVd3JQ0gHH3dlI1bJ1bbqlJCjEdHK5Awl4%2F9rweK8BB7in%2Fm68UWtNGFJn9rSZU2YQpTO%2FpkqajqziZQwFI84FWusI1TjGj6sUtq0TSdXiMqNFnwjCv5EJmcRoKM62V0qwZ7L4IAUz3tLdeoov4XQrLwKIsidSRzuUZLccj%2Fz%2BXU9C%2B62HCE0Pq4%2Ft2etVVwTnnC%2FEzeE8C15ZoIFTZ069h6FC0VBOUHixcp89JFJJRxCFnwJnIeuctSJgf6xrfNqzMu%2B7CbYY07Z2xvZH738U6QFp%2Bhp%2BkX5NgVeRKURATSwtJ8ieTyp7hBDzL5bzpOy0%2B2%2ByKmspkfPtLH%2B%2FgNYRkpKviCDLC5t0N%2F1%2BmbIHoVk1vNHND%2B%2Bu2R0zw4XrwoXBpaTq5H1OE5ZqIvDkhkwr2jCkwxOvwvQY6pgFLPiaeeXX%2ByKwSz4qABxRkizDF2nkO0EbGlTiUeez8SZ5suOVIY3g%2FG2wDmBbpoHnQw4MhFryyy8d4oaht1usKjRfoTk2Yw16TvfrQYBFTED2jh1CVNk7CCasxj40LV1NwD7WtTlmJ6w2exYWfLV6JEvMTgMonPGAhF7YFEgKhQsenDNpgRsC3CrEuTUTzzKccfnxR6e8ixfv8LDyWw9hEuln49rYe&X-Amz-Signature=c1abc9db3e96a921bb4d8562229a6b95b059863afb701602bd2b9b71257cf62c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXRID6QR%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T090941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2ByP2rKAQUtBS%2B6rM21dubtl8cP68%2FZZm%2FqQ035FpFYAiAUwIu3BClSuMRYW16tCpwgETND46YaYq%2BAyIMuthnPUir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM%2FQOWrFEJFMim1WC%2FKtwDKqdxYwjXURZb4cqY%2FCGlslBK%2B43aqEcIwPdET94vWUEJexRyujzpV9iE2zUR%2FF1FE04w0pDP7YUXoEYJdYjf%2Fgo4f0TgOT8QVidgQqkJ%2Fk53KKhapIrePri2bmWmdeSnVujtzkOf7%2F6OJGYxlGkKvAKU0Zv8C8TIvQugl1%2BD6Vg%2ByT963xDDT%2BpI4omUHp2g8diRUVhE3nlkVRXSkKvRrTh8JcYlTsmVgVVd3JQ0gHH3dlI1bJ1bbqlJCjEdHK5Awl4%2F9rweK8BB7in%2Fm68UWtNGFJn9rSZU2YQpTO%2FpkqajqziZQwFI84FWusI1TjGj6sUtq0TSdXiMqNFnwjCv5EJmcRoKM62V0qwZ7L4IAUz3tLdeoov4XQrLwKIsidSRzuUZLccj%2Fz%2BXU9C%2B62HCE0Pq4%2Ft2etVVwTnnC%2FEzeE8C15ZoIFTZ069h6FC0VBOUHixcp89JFJJRxCFnwJnIeuctSJgf6xrfNqzMu%2B7CbYY07Z2xvZH738U6QFp%2Bhp%2BkX5NgVeRKURATSwtJ8ieTyp7hBDzL5bzpOy0%2B2%2ByKmspkfPtLH%2B%2FgNYRkpKviCDLC5t0N%2F1%2BmbIHoVk1vNHND%2B%2Bu2R0zw4XrwoXBpaTq5H1OE5ZqIvDkhkwr2jCkwxOvwvQY6pgFLPiaeeXX%2ByKwSz4qABxRkizDF2nkO0EbGlTiUeez8SZ5suOVIY3g%2FG2wDmBbpoHnQw4MhFryyy8d4oaht1usKjRfoTk2Yw16TvfrQYBFTED2jh1CVNk7CCasxj40LV1NwD7WtTlmJ6w2exYWfLV6JEvMTgMonPGAhF7YFEgKhQsenDNpgRsC3CrEuTUTzzKccfnxR6e8ixfv8LDyWw9hEuln49rYe&X-Amz-Signature=3ff87b0e7515e4289df75f12117c60dfad47a157300af3a37cdff3ec795dcfac&X-Amz-SignedHeaders=host&x-id=GetObject)
