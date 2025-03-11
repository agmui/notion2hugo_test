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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBEPTL3I%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T081135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCX%2BLrH9kpUk%2FyU%2FaA0b0P4IU%2BgKuW%2Flqrj3GU1saRPKwIhAJFfvsK60OV6HELkFXbnPVpcJamz8I68QMjRP6EprpaqKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypntPjFLkkairNhlYq3AOlGGXbq7JULeuUdw%2BAkCY5mwuBjFVDVyBdmgnbOHFOIWxaZQ4bvWKlSlMPax3WK5e0gV33U7G60O%2BbPyNHTZXjRLFdFZFaHxcdfABeBszrM9BCHbbOvyitNmLbSTQoe0%2FR0sVXiYQlmbx5NxVWE520LDYUM%2F7SQL3GUyp9olZ2kvW9zdmOndC8FNtHTgSMTAEuy%2BXrVguqy2BB7pAc4ogOLYvq8nQf5f%2BHixcF90CaZ%2BvUun8%2BmeOZ5wE6dlyB0DBT2E2gbKzspdAMaS9ItdmSaFXxckRvE6rRvi90jr1ygtRX646HKfNpY1f46XvjR2ZtGlp5N4XlZqd48PKUmJoB5wyi3Fsyi76gNY3n40Bf7HRvIRIFH5yZH815FGvelH53f7EC4nP%2B387PR51jtbkYkHcvzhReX72FC0LRRHP38XgjFyKheB9k8vPBKtQE%2BR73SSzKTDeZXvStGkbbFsGJKWEzrXDYLoi%2FT0%2B9QhXcp11I43FligE%2FyFbMHzGXyWzc2pdnpTg6Pod9cIcl887V%2FAg8dfONdXEcR%2B8y8YTZJ3EdbLxCJcLwi%2BS4aeQ%2BTUFS5y1ptfl926Yi4XkeZ%2FdZQRU5PmzG7ZqEU650ogG6ZxBqyLgHGjyK9ilBCjDZ0b%2B%2BBjqkAf8fEv6g6UoKFBrjyg6LPsj9GFQc9nBYXiALw5kHY4jUPZTks52peDrED1UGtUI6%2BTy7L0kEWIzX22H2vt8pGCV%2B2%2F1ecLFrdHpj8x2atBHsf2CTE5ont%2FjIZuDiwdkzdrdqKNmKYeK8NaCJIYaJeB5GBp0WWHcokZZvXFG2tAYqvLoWlUzbDNsj%2F5rUiKuBGRuXEYpLKTNZTlSQCLGjTpdma%2B%2Fx&X-Amz-Signature=8c1849794d15868a192bfd662d54379da4a66ade7c1f98baa0aeffe2d40e5590&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBEPTL3I%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T081135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCX%2BLrH9kpUk%2FyU%2FaA0b0P4IU%2BgKuW%2Flqrj3GU1saRPKwIhAJFfvsK60OV6HELkFXbnPVpcJamz8I68QMjRP6EprpaqKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypntPjFLkkairNhlYq3AOlGGXbq7JULeuUdw%2BAkCY5mwuBjFVDVyBdmgnbOHFOIWxaZQ4bvWKlSlMPax3WK5e0gV33U7G60O%2BbPyNHTZXjRLFdFZFaHxcdfABeBszrM9BCHbbOvyitNmLbSTQoe0%2FR0sVXiYQlmbx5NxVWE520LDYUM%2F7SQL3GUyp9olZ2kvW9zdmOndC8FNtHTgSMTAEuy%2BXrVguqy2BB7pAc4ogOLYvq8nQf5f%2BHixcF90CaZ%2BvUun8%2BmeOZ5wE6dlyB0DBT2E2gbKzspdAMaS9ItdmSaFXxckRvE6rRvi90jr1ygtRX646HKfNpY1f46XvjR2ZtGlp5N4XlZqd48PKUmJoB5wyi3Fsyi76gNY3n40Bf7HRvIRIFH5yZH815FGvelH53f7EC4nP%2B387PR51jtbkYkHcvzhReX72FC0LRRHP38XgjFyKheB9k8vPBKtQE%2BR73SSzKTDeZXvStGkbbFsGJKWEzrXDYLoi%2FT0%2B9QhXcp11I43FligE%2FyFbMHzGXyWzc2pdnpTg6Pod9cIcl887V%2FAg8dfONdXEcR%2B8y8YTZJ3EdbLxCJcLwi%2BS4aeQ%2BTUFS5y1ptfl926Yi4XkeZ%2FdZQRU5PmzG7ZqEU650ogG6ZxBqyLgHGjyK9ilBCjDZ0b%2B%2BBjqkAf8fEv6g6UoKFBrjyg6LPsj9GFQc9nBYXiALw5kHY4jUPZTks52peDrED1UGtUI6%2BTy7L0kEWIzX22H2vt8pGCV%2B2%2F1ecLFrdHpj8x2atBHsf2CTE5ont%2FjIZuDiwdkzdrdqKNmKYeK8NaCJIYaJeB5GBp0WWHcokZZvXFG2tAYqvLoWlUzbDNsj%2F5rUiKuBGRuXEYpLKTNZTlSQCLGjTpdma%2B%2Fx&X-Amz-Signature=a5bd72b1b6e811f5a0cf2cc04d703ac073524a9ed1c2f1dc9301f915da7cf56e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBEPTL3I%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T081135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCX%2BLrH9kpUk%2FyU%2FaA0b0P4IU%2BgKuW%2Flqrj3GU1saRPKwIhAJFfvsK60OV6HELkFXbnPVpcJamz8I68QMjRP6EprpaqKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypntPjFLkkairNhlYq3AOlGGXbq7JULeuUdw%2BAkCY5mwuBjFVDVyBdmgnbOHFOIWxaZQ4bvWKlSlMPax3WK5e0gV33U7G60O%2BbPyNHTZXjRLFdFZFaHxcdfABeBszrM9BCHbbOvyitNmLbSTQoe0%2FR0sVXiYQlmbx5NxVWE520LDYUM%2F7SQL3GUyp9olZ2kvW9zdmOndC8FNtHTgSMTAEuy%2BXrVguqy2BB7pAc4ogOLYvq8nQf5f%2BHixcF90CaZ%2BvUun8%2BmeOZ5wE6dlyB0DBT2E2gbKzspdAMaS9ItdmSaFXxckRvE6rRvi90jr1ygtRX646HKfNpY1f46XvjR2ZtGlp5N4XlZqd48PKUmJoB5wyi3Fsyi76gNY3n40Bf7HRvIRIFH5yZH815FGvelH53f7EC4nP%2B387PR51jtbkYkHcvzhReX72FC0LRRHP38XgjFyKheB9k8vPBKtQE%2BR73SSzKTDeZXvStGkbbFsGJKWEzrXDYLoi%2FT0%2B9QhXcp11I43FligE%2FyFbMHzGXyWzc2pdnpTg6Pod9cIcl887V%2FAg8dfONdXEcR%2B8y8YTZJ3EdbLxCJcLwi%2BS4aeQ%2BTUFS5y1ptfl926Yi4XkeZ%2FdZQRU5PmzG7ZqEU650ogG6ZxBqyLgHGjyK9ilBCjDZ0b%2B%2BBjqkAf8fEv6g6UoKFBrjyg6LPsj9GFQc9nBYXiALw5kHY4jUPZTks52peDrED1UGtUI6%2BTy7L0kEWIzX22H2vt8pGCV%2B2%2F1ecLFrdHpj8x2atBHsf2CTE5ont%2FjIZuDiwdkzdrdqKNmKYeK8NaCJIYaJeB5GBp0WWHcokZZvXFG2tAYqvLoWlUzbDNsj%2F5rUiKuBGRuXEYpLKTNZTlSQCLGjTpdma%2B%2Fx&X-Amz-Signature=6bac06249aff7576b2a908f7edce6dc608f543cd853a531926cfb24ef922c924&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBEPTL3I%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T081135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCX%2BLrH9kpUk%2FyU%2FaA0b0P4IU%2BgKuW%2Flqrj3GU1saRPKwIhAJFfvsK60OV6HELkFXbnPVpcJamz8I68QMjRP6EprpaqKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypntPjFLkkairNhlYq3AOlGGXbq7JULeuUdw%2BAkCY5mwuBjFVDVyBdmgnbOHFOIWxaZQ4bvWKlSlMPax3WK5e0gV33U7G60O%2BbPyNHTZXjRLFdFZFaHxcdfABeBszrM9BCHbbOvyitNmLbSTQoe0%2FR0sVXiYQlmbx5NxVWE520LDYUM%2F7SQL3GUyp9olZ2kvW9zdmOndC8FNtHTgSMTAEuy%2BXrVguqy2BB7pAc4ogOLYvq8nQf5f%2BHixcF90CaZ%2BvUun8%2BmeOZ5wE6dlyB0DBT2E2gbKzspdAMaS9ItdmSaFXxckRvE6rRvi90jr1ygtRX646HKfNpY1f46XvjR2ZtGlp5N4XlZqd48PKUmJoB5wyi3Fsyi76gNY3n40Bf7HRvIRIFH5yZH815FGvelH53f7EC4nP%2B387PR51jtbkYkHcvzhReX72FC0LRRHP38XgjFyKheB9k8vPBKtQE%2BR73SSzKTDeZXvStGkbbFsGJKWEzrXDYLoi%2FT0%2B9QhXcp11I43FligE%2FyFbMHzGXyWzc2pdnpTg6Pod9cIcl887V%2FAg8dfONdXEcR%2B8y8YTZJ3EdbLxCJcLwi%2BS4aeQ%2BTUFS5y1ptfl926Yi4XkeZ%2FdZQRU5PmzG7ZqEU650ogG6ZxBqyLgHGjyK9ilBCjDZ0b%2B%2BBjqkAf8fEv6g6UoKFBrjyg6LPsj9GFQc9nBYXiALw5kHY4jUPZTks52peDrED1UGtUI6%2BTy7L0kEWIzX22H2vt8pGCV%2B2%2F1ecLFrdHpj8x2atBHsf2CTE5ont%2FjIZuDiwdkzdrdqKNmKYeK8NaCJIYaJeB5GBp0WWHcokZZvXFG2tAYqvLoWlUzbDNsj%2F5rUiKuBGRuXEYpLKTNZTlSQCLGjTpdma%2B%2Fx&X-Amz-Signature=b4046a77922f374bb96373fa9ea402ff6a1c0b388dbef6c87fae3ddacba3de17&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBEPTL3I%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T081135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCX%2BLrH9kpUk%2FyU%2FaA0b0P4IU%2BgKuW%2Flqrj3GU1saRPKwIhAJFfvsK60OV6HELkFXbnPVpcJamz8I68QMjRP6EprpaqKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypntPjFLkkairNhlYq3AOlGGXbq7JULeuUdw%2BAkCY5mwuBjFVDVyBdmgnbOHFOIWxaZQ4bvWKlSlMPax3WK5e0gV33U7G60O%2BbPyNHTZXjRLFdFZFaHxcdfABeBszrM9BCHbbOvyitNmLbSTQoe0%2FR0sVXiYQlmbx5NxVWE520LDYUM%2F7SQL3GUyp9olZ2kvW9zdmOndC8FNtHTgSMTAEuy%2BXrVguqy2BB7pAc4ogOLYvq8nQf5f%2BHixcF90CaZ%2BvUun8%2BmeOZ5wE6dlyB0DBT2E2gbKzspdAMaS9ItdmSaFXxckRvE6rRvi90jr1ygtRX646HKfNpY1f46XvjR2ZtGlp5N4XlZqd48PKUmJoB5wyi3Fsyi76gNY3n40Bf7HRvIRIFH5yZH815FGvelH53f7EC4nP%2B387PR51jtbkYkHcvzhReX72FC0LRRHP38XgjFyKheB9k8vPBKtQE%2BR73SSzKTDeZXvStGkbbFsGJKWEzrXDYLoi%2FT0%2B9QhXcp11I43FligE%2FyFbMHzGXyWzc2pdnpTg6Pod9cIcl887V%2FAg8dfONdXEcR%2B8y8YTZJ3EdbLxCJcLwi%2BS4aeQ%2BTUFS5y1ptfl926Yi4XkeZ%2FdZQRU5PmzG7ZqEU650ogG6ZxBqyLgHGjyK9ilBCjDZ0b%2B%2BBjqkAf8fEv6g6UoKFBrjyg6LPsj9GFQc9nBYXiALw5kHY4jUPZTks52peDrED1UGtUI6%2BTy7L0kEWIzX22H2vt8pGCV%2B2%2F1ecLFrdHpj8x2atBHsf2CTE5ont%2FjIZuDiwdkzdrdqKNmKYeK8NaCJIYaJeB5GBp0WWHcokZZvXFG2tAYqvLoWlUzbDNsj%2F5rUiKuBGRuXEYpLKTNZTlSQCLGjTpdma%2B%2Fx&X-Amz-Signature=96c39942043f70a9a8bec8d61ddd3535d4bf25efabccde84d8cb4c184fbb9a9a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBEPTL3I%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T081135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCX%2BLrH9kpUk%2FyU%2FaA0b0P4IU%2BgKuW%2Flqrj3GU1saRPKwIhAJFfvsK60OV6HELkFXbnPVpcJamz8I68QMjRP6EprpaqKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypntPjFLkkairNhlYq3AOlGGXbq7JULeuUdw%2BAkCY5mwuBjFVDVyBdmgnbOHFOIWxaZQ4bvWKlSlMPax3WK5e0gV33U7G60O%2BbPyNHTZXjRLFdFZFaHxcdfABeBszrM9BCHbbOvyitNmLbSTQoe0%2FR0sVXiYQlmbx5NxVWE520LDYUM%2F7SQL3GUyp9olZ2kvW9zdmOndC8FNtHTgSMTAEuy%2BXrVguqy2BB7pAc4ogOLYvq8nQf5f%2BHixcF90CaZ%2BvUun8%2BmeOZ5wE6dlyB0DBT2E2gbKzspdAMaS9ItdmSaFXxckRvE6rRvi90jr1ygtRX646HKfNpY1f46XvjR2ZtGlp5N4XlZqd48PKUmJoB5wyi3Fsyi76gNY3n40Bf7HRvIRIFH5yZH815FGvelH53f7EC4nP%2B387PR51jtbkYkHcvzhReX72FC0LRRHP38XgjFyKheB9k8vPBKtQE%2BR73SSzKTDeZXvStGkbbFsGJKWEzrXDYLoi%2FT0%2B9QhXcp11I43FligE%2FyFbMHzGXyWzc2pdnpTg6Pod9cIcl887V%2FAg8dfONdXEcR%2B8y8YTZJ3EdbLxCJcLwi%2BS4aeQ%2BTUFS5y1ptfl926Yi4XkeZ%2FdZQRU5PmzG7ZqEU650ogG6ZxBqyLgHGjyK9ilBCjDZ0b%2B%2BBjqkAf8fEv6g6UoKFBrjyg6LPsj9GFQc9nBYXiALw5kHY4jUPZTks52peDrED1UGtUI6%2BTy7L0kEWIzX22H2vt8pGCV%2B2%2F1ecLFrdHpj8x2atBHsf2CTE5ont%2FjIZuDiwdkzdrdqKNmKYeK8NaCJIYaJeB5GBp0WWHcokZZvXFG2tAYqvLoWlUzbDNsj%2F5rUiKuBGRuXEYpLKTNZTlSQCLGjTpdma%2B%2Fx&X-Amz-Signature=d740e43e829ed6b52f6a9c8e864d71ad9d52d3b68fa07d01a776041242daa220&X-Amz-SignedHeaders=host&x-id=GetObject)
