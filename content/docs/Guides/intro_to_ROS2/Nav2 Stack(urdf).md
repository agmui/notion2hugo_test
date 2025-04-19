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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCEDQAVX%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T110208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2kRatb5Sa%2B1pO%2F%2BSXA1d82p1h5WtHMmwDorMhROEveAiEAlbfKtg0PIZ78PCT1u3b8orjljBaLe%2FjZx7o6PnOsaUgqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYmSYH6hBwFRl2U0CrcAzWbOpc%2BLJAm2e2n8zdbg1d1yPCyRkzYsytZTSpUDJeObDsVbJ4joCrkpROJzlc5mR1XkYu26Qa2KHhWv%2BCsokxaBjS0oGBajX3mOs82eOwSP8Odice%2Fu2Swl3KSpA1CP42%2BcDX7KKVWLkvEkfhhjDQSrIscnK9ypAtam000We%2Ff2SfePSOot5E0vFTIKMiwn6Po%2BhOAr7cuKUpVLXOXgv6Wy5bgv8eUGIT1R5nGoSaGm%2FpT6jQmH2BxtPP21qTHOzzdu9Yv2o3gbEH9zd6oAYNVu9RU3K5fHQzccQ04pKnpMhuFf%2FzRNeR%2F5LxNvMzC3e1W7duztCHGUmWAHHlxML0QouBfWDE2tAt11oDK5Y8wbAD6FzLpgpUq0VG0ziJUHcUn52uj0NA%2B7eT9UduTb%2BGG5fLDdTB0%2Fb7jTW3Z%2BK2PYERG97Ps4RXfaZlq05T%2FjHVVhgu6xxV%2Fa6%2BtSLl2mK%2F%2BowzujNE39Z9IPVE65PNHjnTwJ07F5oDQ%2FNHO56hZU6auJVQA9%2B5IF6rmo3GkjVytFBT19Cu%2BlQPnK1%2BFwNAP0Z0TNoIxY3TnGjqOgUURLhZv6%2FSS0Jcceim2ZNHzJpzKLMkC3Sxll0qlo5G81azWJTJuz%2F9Y4a36kuPQMOv7jMAGOqUBP6ZQ%2FkLkbsj2uzT1qJ%2BcYET4d31EXOjS%2BMKCqhE4u0g3N0jnS6wULzxN1E8x1t804nWVY4k7H4Xl5o%2FvezsU8AOuadFs%2Fx3I9rP24bBifs21b%2FulhaYKUY8uDJLCuVrKQlstApJYSykaQFFosunHlO%2FnynHsvA5htMGxFtX5owfpEyiSMINWxGRpMpPVGG%2B2sWBuRYJHJFYtiJ0eZei%2F2O0T8fJo&X-Amz-Signature=42e5610979f757097b35acdd5ab5b6ab06646b9c9c2a7e76d249a81156611888&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCEDQAVX%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T110209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2kRatb5Sa%2B1pO%2F%2BSXA1d82p1h5WtHMmwDorMhROEveAiEAlbfKtg0PIZ78PCT1u3b8orjljBaLe%2FjZx7o6PnOsaUgqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYmSYH6hBwFRl2U0CrcAzWbOpc%2BLJAm2e2n8zdbg1d1yPCyRkzYsytZTSpUDJeObDsVbJ4joCrkpROJzlc5mR1XkYu26Qa2KHhWv%2BCsokxaBjS0oGBajX3mOs82eOwSP8Odice%2Fu2Swl3KSpA1CP42%2BcDX7KKVWLkvEkfhhjDQSrIscnK9ypAtam000We%2Ff2SfePSOot5E0vFTIKMiwn6Po%2BhOAr7cuKUpVLXOXgv6Wy5bgv8eUGIT1R5nGoSaGm%2FpT6jQmH2BxtPP21qTHOzzdu9Yv2o3gbEH9zd6oAYNVu9RU3K5fHQzccQ04pKnpMhuFf%2FzRNeR%2F5LxNvMzC3e1W7duztCHGUmWAHHlxML0QouBfWDE2tAt11oDK5Y8wbAD6FzLpgpUq0VG0ziJUHcUn52uj0NA%2B7eT9UduTb%2BGG5fLDdTB0%2Fb7jTW3Z%2BK2PYERG97Ps4RXfaZlq05T%2FjHVVhgu6xxV%2Fa6%2BtSLl2mK%2F%2BowzujNE39Z9IPVE65PNHjnTwJ07F5oDQ%2FNHO56hZU6auJVQA9%2B5IF6rmo3GkjVytFBT19Cu%2BlQPnK1%2BFwNAP0Z0TNoIxY3TnGjqOgUURLhZv6%2FSS0Jcceim2ZNHzJpzKLMkC3Sxll0qlo5G81azWJTJuz%2F9Y4a36kuPQMOv7jMAGOqUBP6ZQ%2FkLkbsj2uzT1qJ%2BcYET4d31EXOjS%2BMKCqhE4u0g3N0jnS6wULzxN1E8x1t804nWVY4k7H4Xl5o%2FvezsU8AOuadFs%2Fx3I9rP24bBifs21b%2FulhaYKUY8uDJLCuVrKQlstApJYSykaQFFosunHlO%2FnynHsvA5htMGxFtX5owfpEyiSMINWxGRpMpPVGG%2B2sWBuRYJHJFYtiJ0eZei%2F2O0T8fJo&X-Amz-Signature=35a913fe9f47273960a07bf5bbb7822bec298c2a445c82c13eb4c601a202f070&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCEDQAVX%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T110209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2kRatb5Sa%2B1pO%2F%2BSXA1d82p1h5WtHMmwDorMhROEveAiEAlbfKtg0PIZ78PCT1u3b8orjljBaLe%2FjZx7o6PnOsaUgqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYmSYH6hBwFRl2U0CrcAzWbOpc%2BLJAm2e2n8zdbg1d1yPCyRkzYsytZTSpUDJeObDsVbJ4joCrkpROJzlc5mR1XkYu26Qa2KHhWv%2BCsokxaBjS0oGBajX3mOs82eOwSP8Odice%2Fu2Swl3KSpA1CP42%2BcDX7KKVWLkvEkfhhjDQSrIscnK9ypAtam000We%2Ff2SfePSOot5E0vFTIKMiwn6Po%2BhOAr7cuKUpVLXOXgv6Wy5bgv8eUGIT1R5nGoSaGm%2FpT6jQmH2BxtPP21qTHOzzdu9Yv2o3gbEH9zd6oAYNVu9RU3K5fHQzccQ04pKnpMhuFf%2FzRNeR%2F5LxNvMzC3e1W7duztCHGUmWAHHlxML0QouBfWDE2tAt11oDK5Y8wbAD6FzLpgpUq0VG0ziJUHcUn52uj0NA%2B7eT9UduTb%2BGG5fLDdTB0%2Fb7jTW3Z%2BK2PYERG97Ps4RXfaZlq05T%2FjHVVhgu6xxV%2Fa6%2BtSLl2mK%2F%2BowzujNE39Z9IPVE65PNHjnTwJ07F5oDQ%2FNHO56hZU6auJVQA9%2B5IF6rmo3GkjVytFBT19Cu%2BlQPnK1%2BFwNAP0Z0TNoIxY3TnGjqOgUURLhZv6%2FSS0Jcceim2ZNHzJpzKLMkC3Sxll0qlo5G81azWJTJuz%2F9Y4a36kuPQMOv7jMAGOqUBP6ZQ%2FkLkbsj2uzT1qJ%2BcYET4d31EXOjS%2BMKCqhE4u0g3N0jnS6wULzxN1E8x1t804nWVY4k7H4Xl5o%2FvezsU8AOuadFs%2Fx3I9rP24bBifs21b%2FulhaYKUY8uDJLCuVrKQlstApJYSykaQFFosunHlO%2FnynHsvA5htMGxFtX5owfpEyiSMINWxGRpMpPVGG%2B2sWBuRYJHJFYtiJ0eZei%2F2O0T8fJo&X-Amz-Signature=76269fa83fa930742cb710f9af5eb47f80394bd37da5e551e3137440ef54d564&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCEDQAVX%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T110209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2kRatb5Sa%2B1pO%2F%2BSXA1d82p1h5WtHMmwDorMhROEveAiEAlbfKtg0PIZ78PCT1u3b8orjljBaLe%2FjZx7o6PnOsaUgqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYmSYH6hBwFRl2U0CrcAzWbOpc%2BLJAm2e2n8zdbg1d1yPCyRkzYsytZTSpUDJeObDsVbJ4joCrkpROJzlc5mR1XkYu26Qa2KHhWv%2BCsokxaBjS0oGBajX3mOs82eOwSP8Odice%2Fu2Swl3KSpA1CP42%2BcDX7KKVWLkvEkfhhjDQSrIscnK9ypAtam000We%2Ff2SfePSOot5E0vFTIKMiwn6Po%2BhOAr7cuKUpVLXOXgv6Wy5bgv8eUGIT1R5nGoSaGm%2FpT6jQmH2BxtPP21qTHOzzdu9Yv2o3gbEH9zd6oAYNVu9RU3K5fHQzccQ04pKnpMhuFf%2FzRNeR%2F5LxNvMzC3e1W7duztCHGUmWAHHlxML0QouBfWDE2tAt11oDK5Y8wbAD6FzLpgpUq0VG0ziJUHcUn52uj0NA%2B7eT9UduTb%2BGG5fLDdTB0%2Fb7jTW3Z%2BK2PYERG97Ps4RXfaZlq05T%2FjHVVhgu6xxV%2Fa6%2BtSLl2mK%2F%2BowzujNE39Z9IPVE65PNHjnTwJ07F5oDQ%2FNHO56hZU6auJVQA9%2B5IF6rmo3GkjVytFBT19Cu%2BlQPnK1%2BFwNAP0Z0TNoIxY3TnGjqOgUURLhZv6%2FSS0Jcceim2ZNHzJpzKLMkC3Sxll0qlo5G81azWJTJuz%2F9Y4a36kuPQMOv7jMAGOqUBP6ZQ%2FkLkbsj2uzT1qJ%2BcYET4d31EXOjS%2BMKCqhE4u0g3N0jnS6wULzxN1E8x1t804nWVY4k7H4Xl5o%2FvezsU8AOuadFs%2Fx3I9rP24bBifs21b%2FulhaYKUY8uDJLCuVrKQlstApJYSykaQFFosunHlO%2FnynHsvA5htMGxFtX5owfpEyiSMINWxGRpMpPVGG%2B2sWBuRYJHJFYtiJ0eZei%2F2O0T8fJo&X-Amz-Signature=bbcab74da402c72e5ec39d90417f58fdfecea1b9a866b2d11f99d22d9e69bb72&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCEDQAVX%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T110208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2kRatb5Sa%2B1pO%2F%2BSXA1d82p1h5WtHMmwDorMhROEveAiEAlbfKtg0PIZ78PCT1u3b8orjljBaLe%2FjZx7o6PnOsaUgqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYmSYH6hBwFRl2U0CrcAzWbOpc%2BLJAm2e2n8zdbg1d1yPCyRkzYsytZTSpUDJeObDsVbJ4joCrkpROJzlc5mR1XkYu26Qa2KHhWv%2BCsokxaBjS0oGBajX3mOs82eOwSP8Odice%2Fu2Swl3KSpA1CP42%2BcDX7KKVWLkvEkfhhjDQSrIscnK9ypAtam000We%2Ff2SfePSOot5E0vFTIKMiwn6Po%2BhOAr7cuKUpVLXOXgv6Wy5bgv8eUGIT1R5nGoSaGm%2FpT6jQmH2BxtPP21qTHOzzdu9Yv2o3gbEH9zd6oAYNVu9RU3K5fHQzccQ04pKnpMhuFf%2FzRNeR%2F5LxNvMzC3e1W7duztCHGUmWAHHlxML0QouBfWDE2tAt11oDK5Y8wbAD6FzLpgpUq0VG0ziJUHcUn52uj0NA%2B7eT9UduTb%2BGG5fLDdTB0%2Fb7jTW3Z%2BK2PYERG97Ps4RXfaZlq05T%2FjHVVhgu6xxV%2Fa6%2BtSLl2mK%2F%2BowzujNE39Z9IPVE65PNHjnTwJ07F5oDQ%2FNHO56hZU6auJVQA9%2B5IF6rmo3GkjVytFBT19Cu%2BlQPnK1%2BFwNAP0Z0TNoIxY3TnGjqOgUURLhZv6%2FSS0Jcceim2ZNHzJpzKLMkC3Sxll0qlo5G81azWJTJuz%2F9Y4a36kuPQMOv7jMAGOqUBP6ZQ%2FkLkbsj2uzT1qJ%2BcYET4d31EXOjS%2BMKCqhE4u0g3N0jnS6wULzxN1E8x1t804nWVY4k7H4Xl5o%2FvezsU8AOuadFs%2Fx3I9rP24bBifs21b%2FulhaYKUY8uDJLCuVrKQlstApJYSykaQFFosunHlO%2FnynHsvA5htMGxFtX5owfpEyiSMINWxGRpMpPVGG%2B2sWBuRYJHJFYtiJ0eZei%2F2O0T8fJo&X-Amz-Signature=d49ad837fae70a66999ce084e1d6cb27070ce823f86027ba2b6d6f4a37452c22&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCEDQAVX%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T110208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2kRatb5Sa%2B1pO%2F%2BSXA1d82p1h5WtHMmwDorMhROEveAiEAlbfKtg0PIZ78PCT1u3b8orjljBaLe%2FjZx7o6PnOsaUgqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYmSYH6hBwFRl2U0CrcAzWbOpc%2BLJAm2e2n8zdbg1d1yPCyRkzYsytZTSpUDJeObDsVbJ4joCrkpROJzlc5mR1XkYu26Qa2KHhWv%2BCsokxaBjS0oGBajX3mOs82eOwSP8Odice%2Fu2Swl3KSpA1CP42%2BcDX7KKVWLkvEkfhhjDQSrIscnK9ypAtam000We%2Ff2SfePSOot5E0vFTIKMiwn6Po%2BhOAr7cuKUpVLXOXgv6Wy5bgv8eUGIT1R5nGoSaGm%2FpT6jQmH2BxtPP21qTHOzzdu9Yv2o3gbEH9zd6oAYNVu9RU3K5fHQzccQ04pKnpMhuFf%2FzRNeR%2F5LxNvMzC3e1W7duztCHGUmWAHHlxML0QouBfWDE2tAt11oDK5Y8wbAD6FzLpgpUq0VG0ziJUHcUn52uj0NA%2B7eT9UduTb%2BGG5fLDdTB0%2Fb7jTW3Z%2BK2PYERG97Ps4RXfaZlq05T%2FjHVVhgu6xxV%2Fa6%2BtSLl2mK%2F%2BowzujNE39Z9IPVE65PNHjnTwJ07F5oDQ%2FNHO56hZU6auJVQA9%2B5IF6rmo3GkjVytFBT19Cu%2BlQPnK1%2BFwNAP0Z0TNoIxY3TnGjqOgUURLhZv6%2FSS0Jcceim2ZNHzJpzKLMkC3Sxll0qlo5G81azWJTJuz%2F9Y4a36kuPQMOv7jMAGOqUBP6ZQ%2FkLkbsj2uzT1qJ%2BcYET4d31EXOjS%2BMKCqhE4u0g3N0jnS6wULzxN1E8x1t804nWVY4k7H4Xl5o%2FvezsU8AOuadFs%2Fx3I9rP24bBifs21b%2FulhaYKUY8uDJLCuVrKQlstApJYSykaQFFosunHlO%2FnynHsvA5htMGxFtX5owfpEyiSMINWxGRpMpPVGG%2B2sWBuRYJHJFYtiJ0eZei%2F2O0T8fJo&X-Amz-Signature=e04c400592fbe232debd1cd61715e88693f8da9933434ae5138d598d18dbd49c&X-Amz-SignedHeaders=host&x-id=GetObject)
