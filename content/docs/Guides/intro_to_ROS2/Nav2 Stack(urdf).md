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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP5ACMEU%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T190216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAt26CHYq82PbTWPpm9hPZc4EarcjDBDPzHAtdWwbYWEAiEApoNxZ7q6Ih0DI8YGda%2FHrlUytnUSD%2Bc3AGcFK0Rv0V4qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5XWYbZXMp35mV5cSrcAwr3DvFUDesuixEHBp9iXulkBTH65Cy5Idrf5Ci7a%2FwdUIXZyK8wKLbivSeAbYPbThMywGgEJE0uu2R5vjXdENpBKkj1NHdib%2BpPAC80KioMNr%2BozSfkCS9%2BKBcVJt0ugIETgVdLd863ypKSateiqBrb3AZ6vMwrMLoX3C9JQmyjrCAUrVvK3AakNybYefEgBg1ygWhHiL%2BzXrFBVD8DQE6P5InNyUVlGUr%2FHqTFmMZMWZgAX3mN2tyKtP1lqR5%2B%2BGA0%2BS7QRJBcHUTvXZb0g214DRKFbNroo9gWYHIv0CEGjq3MFoxgJBZEUVOXmYAj%2FJGMS%2BDG2PMF6KSfXoCvERgOtquAW1fNsGEItnEy5MrrNEurlNz79kpk4o0qeyhj8HZG6S5MDaKplZUcKGXaehDPgqk1wUB6x9dkZVV7AafFntHoFeiIEJixTUChZz9CIm9ud%2FgaP8xNyKMPSowK7UajAnmElyp2vU4csa4QDRvS%2BkR8vNYRiPxJb3S%2BCCU%2Fgo%2Bg37gHJF1pt0nyh6Wqyqm07CF3tpqVgrrxevSvpU237VsUpuq8%2F%2FiE6uY8zHtwjB0v0vHcbw2ES1XZU%2FphzWptBlMIs%2BO6xUkicVKF41YcihUrYDbnrNhJ4ZPGMN2du78GOqUBQl4vSaSVyCZF0juaiHZVJEA8s4nwP%2FvkGaCWzLkiWTnX1JOP3RQ9ExA94aKyebWgT0bSMKHuIIO%2BjBVOJCAmu0dfk6K4eEFxl4GuI0EF7NCCT%2FcBpL1NfyRhtVQ%2BA1L5Qw0lw9FaTYoLxF2PQcG8q%2BRD4PfZ7TT%2BtJVT9j%2BuGzDrn4glv9TzNKVSeh2jkLO%2BVQVdfG8XYqRp7oPWIvx469HRgp%2Fm&X-Amz-Signature=241d0d77a65a609852b2e1299ac1f6206d80ccc816dc54902529d8c5ddb42745&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP5ACMEU%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T190216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAt26CHYq82PbTWPpm9hPZc4EarcjDBDPzHAtdWwbYWEAiEApoNxZ7q6Ih0DI8YGda%2FHrlUytnUSD%2Bc3AGcFK0Rv0V4qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5XWYbZXMp35mV5cSrcAwr3DvFUDesuixEHBp9iXulkBTH65Cy5Idrf5Ci7a%2FwdUIXZyK8wKLbivSeAbYPbThMywGgEJE0uu2R5vjXdENpBKkj1NHdib%2BpPAC80KioMNr%2BozSfkCS9%2BKBcVJt0ugIETgVdLd863ypKSateiqBrb3AZ6vMwrMLoX3C9JQmyjrCAUrVvK3AakNybYefEgBg1ygWhHiL%2BzXrFBVD8DQE6P5InNyUVlGUr%2FHqTFmMZMWZgAX3mN2tyKtP1lqR5%2B%2BGA0%2BS7QRJBcHUTvXZb0g214DRKFbNroo9gWYHIv0CEGjq3MFoxgJBZEUVOXmYAj%2FJGMS%2BDG2PMF6KSfXoCvERgOtquAW1fNsGEItnEy5MrrNEurlNz79kpk4o0qeyhj8HZG6S5MDaKplZUcKGXaehDPgqk1wUB6x9dkZVV7AafFntHoFeiIEJixTUChZz9CIm9ud%2FgaP8xNyKMPSowK7UajAnmElyp2vU4csa4QDRvS%2BkR8vNYRiPxJb3S%2BCCU%2Fgo%2Bg37gHJF1pt0nyh6Wqyqm07CF3tpqVgrrxevSvpU237VsUpuq8%2F%2FiE6uY8zHtwjB0v0vHcbw2ES1XZU%2FphzWptBlMIs%2BO6xUkicVKF41YcihUrYDbnrNhJ4ZPGMN2du78GOqUBQl4vSaSVyCZF0juaiHZVJEA8s4nwP%2FvkGaCWzLkiWTnX1JOP3RQ9ExA94aKyebWgT0bSMKHuIIO%2BjBVOJCAmu0dfk6K4eEFxl4GuI0EF7NCCT%2FcBpL1NfyRhtVQ%2BA1L5Qw0lw9FaTYoLxF2PQcG8q%2BRD4PfZ7TT%2BtJVT9j%2BuGzDrn4glv9TzNKVSeh2jkLO%2BVQVdfG8XYqRp7oPWIvx469HRgp%2Fm&X-Amz-Signature=290df206587d7c6516997f5d8ce7f200038d075f72c5547d89a5e1cd01aaf4dc&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP5ACMEU%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T190216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAt26CHYq82PbTWPpm9hPZc4EarcjDBDPzHAtdWwbYWEAiEApoNxZ7q6Ih0DI8YGda%2FHrlUytnUSD%2Bc3AGcFK0Rv0V4qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5XWYbZXMp35mV5cSrcAwr3DvFUDesuixEHBp9iXulkBTH65Cy5Idrf5Ci7a%2FwdUIXZyK8wKLbivSeAbYPbThMywGgEJE0uu2R5vjXdENpBKkj1NHdib%2BpPAC80KioMNr%2BozSfkCS9%2BKBcVJt0ugIETgVdLd863ypKSateiqBrb3AZ6vMwrMLoX3C9JQmyjrCAUrVvK3AakNybYefEgBg1ygWhHiL%2BzXrFBVD8DQE6P5InNyUVlGUr%2FHqTFmMZMWZgAX3mN2tyKtP1lqR5%2B%2BGA0%2BS7QRJBcHUTvXZb0g214DRKFbNroo9gWYHIv0CEGjq3MFoxgJBZEUVOXmYAj%2FJGMS%2BDG2PMF6KSfXoCvERgOtquAW1fNsGEItnEy5MrrNEurlNz79kpk4o0qeyhj8HZG6S5MDaKplZUcKGXaehDPgqk1wUB6x9dkZVV7AafFntHoFeiIEJixTUChZz9CIm9ud%2FgaP8xNyKMPSowK7UajAnmElyp2vU4csa4QDRvS%2BkR8vNYRiPxJb3S%2BCCU%2Fgo%2Bg37gHJF1pt0nyh6Wqyqm07CF3tpqVgrrxevSvpU237VsUpuq8%2F%2FiE6uY8zHtwjB0v0vHcbw2ES1XZU%2FphzWptBlMIs%2BO6xUkicVKF41YcihUrYDbnrNhJ4ZPGMN2du78GOqUBQl4vSaSVyCZF0juaiHZVJEA8s4nwP%2FvkGaCWzLkiWTnX1JOP3RQ9ExA94aKyebWgT0bSMKHuIIO%2BjBVOJCAmu0dfk6K4eEFxl4GuI0EF7NCCT%2FcBpL1NfyRhtVQ%2BA1L5Qw0lw9FaTYoLxF2PQcG8q%2BRD4PfZ7TT%2BtJVT9j%2BuGzDrn4glv9TzNKVSeh2jkLO%2BVQVdfG8XYqRp7oPWIvx469HRgp%2Fm&X-Amz-Signature=84f4d94083c8be95f0e50f00ed982f3301fa3cf3a9f72d18e0237508fc77686c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP5ACMEU%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T190217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAt26CHYq82PbTWPpm9hPZc4EarcjDBDPzHAtdWwbYWEAiEApoNxZ7q6Ih0DI8YGda%2FHrlUytnUSD%2Bc3AGcFK0Rv0V4qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5XWYbZXMp35mV5cSrcAwr3DvFUDesuixEHBp9iXulkBTH65Cy5Idrf5Ci7a%2FwdUIXZyK8wKLbivSeAbYPbThMywGgEJE0uu2R5vjXdENpBKkj1NHdib%2BpPAC80KioMNr%2BozSfkCS9%2BKBcVJt0ugIETgVdLd863ypKSateiqBrb3AZ6vMwrMLoX3C9JQmyjrCAUrVvK3AakNybYefEgBg1ygWhHiL%2BzXrFBVD8DQE6P5InNyUVlGUr%2FHqTFmMZMWZgAX3mN2tyKtP1lqR5%2B%2BGA0%2BS7QRJBcHUTvXZb0g214DRKFbNroo9gWYHIv0CEGjq3MFoxgJBZEUVOXmYAj%2FJGMS%2BDG2PMF6KSfXoCvERgOtquAW1fNsGEItnEy5MrrNEurlNz79kpk4o0qeyhj8HZG6S5MDaKplZUcKGXaehDPgqk1wUB6x9dkZVV7AafFntHoFeiIEJixTUChZz9CIm9ud%2FgaP8xNyKMPSowK7UajAnmElyp2vU4csa4QDRvS%2BkR8vNYRiPxJb3S%2BCCU%2Fgo%2Bg37gHJF1pt0nyh6Wqyqm07CF3tpqVgrrxevSvpU237VsUpuq8%2F%2FiE6uY8zHtwjB0v0vHcbw2ES1XZU%2FphzWptBlMIs%2BO6xUkicVKF41YcihUrYDbnrNhJ4ZPGMN2du78GOqUBQl4vSaSVyCZF0juaiHZVJEA8s4nwP%2FvkGaCWzLkiWTnX1JOP3RQ9ExA94aKyebWgT0bSMKHuIIO%2BjBVOJCAmu0dfk6K4eEFxl4GuI0EF7NCCT%2FcBpL1NfyRhtVQ%2BA1L5Qw0lw9FaTYoLxF2PQcG8q%2BRD4PfZ7TT%2BtJVT9j%2BuGzDrn4glv9TzNKVSeh2jkLO%2BVQVdfG8XYqRp7oPWIvx469HRgp%2Fm&X-Amz-Signature=c3262203b6c26bcfd5d74afa71959fa22a79d886a8f35fdb10f687bde2e310d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP5ACMEU%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T190217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAt26CHYq82PbTWPpm9hPZc4EarcjDBDPzHAtdWwbYWEAiEApoNxZ7q6Ih0DI8YGda%2FHrlUytnUSD%2Bc3AGcFK0Rv0V4qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5XWYbZXMp35mV5cSrcAwr3DvFUDesuixEHBp9iXulkBTH65Cy5Idrf5Ci7a%2FwdUIXZyK8wKLbivSeAbYPbThMywGgEJE0uu2R5vjXdENpBKkj1NHdib%2BpPAC80KioMNr%2BozSfkCS9%2BKBcVJt0ugIETgVdLd863ypKSateiqBrb3AZ6vMwrMLoX3C9JQmyjrCAUrVvK3AakNybYefEgBg1ygWhHiL%2BzXrFBVD8DQE6P5InNyUVlGUr%2FHqTFmMZMWZgAX3mN2tyKtP1lqR5%2B%2BGA0%2BS7QRJBcHUTvXZb0g214DRKFbNroo9gWYHIv0CEGjq3MFoxgJBZEUVOXmYAj%2FJGMS%2BDG2PMF6KSfXoCvERgOtquAW1fNsGEItnEy5MrrNEurlNz79kpk4o0qeyhj8HZG6S5MDaKplZUcKGXaehDPgqk1wUB6x9dkZVV7AafFntHoFeiIEJixTUChZz9CIm9ud%2FgaP8xNyKMPSowK7UajAnmElyp2vU4csa4QDRvS%2BkR8vNYRiPxJb3S%2BCCU%2Fgo%2Bg37gHJF1pt0nyh6Wqyqm07CF3tpqVgrrxevSvpU237VsUpuq8%2F%2FiE6uY8zHtwjB0v0vHcbw2ES1XZU%2FphzWptBlMIs%2BO6xUkicVKF41YcihUrYDbnrNhJ4ZPGMN2du78GOqUBQl4vSaSVyCZF0juaiHZVJEA8s4nwP%2FvkGaCWzLkiWTnX1JOP3RQ9ExA94aKyebWgT0bSMKHuIIO%2BjBVOJCAmu0dfk6K4eEFxl4GuI0EF7NCCT%2FcBpL1NfyRhtVQ%2BA1L5Qw0lw9FaTYoLxF2PQcG8q%2BRD4PfZ7TT%2BtJVT9j%2BuGzDrn4glv9TzNKVSeh2jkLO%2BVQVdfG8XYqRp7oPWIvx469HRgp%2Fm&X-Amz-Signature=551e482ee0c32c8ffb57ce6cfc897a3458956910bc8aa2573192a6d0e27174cb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP5ACMEU%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T190216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAt26CHYq82PbTWPpm9hPZc4EarcjDBDPzHAtdWwbYWEAiEApoNxZ7q6Ih0DI8YGda%2FHrlUytnUSD%2Bc3AGcFK0Rv0V4qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5XWYbZXMp35mV5cSrcAwr3DvFUDesuixEHBp9iXulkBTH65Cy5Idrf5Ci7a%2FwdUIXZyK8wKLbivSeAbYPbThMywGgEJE0uu2R5vjXdENpBKkj1NHdib%2BpPAC80KioMNr%2BozSfkCS9%2BKBcVJt0ugIETgVdLd863ypKSateiqBrb3AZ6vMwrMLoX3C9JQmyjrCAUrVvK3AakNybYefEgBg1ygWhHiL%2BzXrFBVD8DQE6P5InNyUVlGUr%2FHqTFmMZMWZgAX3mN2tyKtP1lqR5%2B%2BGA0%2BS7QRJBcHUTvXZb0g214DRKFbNroo9gWYHIv0CEGjq3MFoxgJBZEUVOXmYAj%2FJGMS%2BDG2PMF6KSfXoCvERgOtquAW1fNsGEItnEy5MrrNEurlNz79kpk4o0qeyhj8HZG6S5MDaKplZUcKGXaehDPgqk1wUB6x9dkZVV7AafFntHoFeiIEJixTUChZz9CIm9ud%2FgaP8xNyKMPSowK7UajAnmElyp2vU4csa4QDRvS%2BkR8vNYRiPxJb3S%2BCCU%2Fgo%2Bg37gHJF1pt0nyh6Wqyqm07CF3tpqVgrrxevSvpU237VsUpuq8%2F%2FiE6uY8zHtwjB0v0vHcbw2ES1XZU%2FphzWptBlMIs%2BO6xUkicVKF41YcihUrYDbnrNhJ4ZPGMN2du78GOqUBQl4vSaSVyCZF0juaiHZVJEA8s4nwP%2FvkGaCWzLkiWTnX1JOP3RQ9ExA94aKyebWgT0bSMKHuIIO%2BjBVOJCAmu0dfk6K4eEFxl4GuI0EF7NCCT%2FcBpL1NfyRhtVQ%2BA1L5Qw0lw9FaTYoLxF2PQcG8q%2BRD4PfZ7TT%2BtJVT9j%2BuGzDrn4glv9TzNKVSeh2jkLO%2BVQVdfG8XYqRp7oPWIvx469HRgp%2Fm&X-Amz-Signature=abc654bdfcaee6c7774cd144e9146bbf1c1c951ee32b07c0c0504f4c908babe3&X-Amz-SignedHeaders=host&x-id=GetObject)
