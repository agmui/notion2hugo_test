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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X7IMR67%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T170113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIB4XIRfaSwDK9KZ1xkUThRC95GvCZhSMylZyZJ%2BNgUgWAiB97dX1F0BsQ0g0mfrf0WN%2FqWCic2JCECEOkmn4nweWjSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA4aB2j4SEhUHx8QcKtwDmPrgYw0tMljDfyjluexnfDxjvqYYptgqVuuqE30959sObeCpHlQhiWP2L%2FUbgVriYQWwXWVzuBu0VH2GIp9dKOOokUNwiYxwwkMNwgbzVScFKefJyHXCLz3fyLccpkUZux1znM%2BrInrRSS%2Fwidw7IUH5w62rF2BiS7Tx3dhdDXXH64Tl7PJoT%2BNThZtsWAFP8qog1F9uO6YpeGmiaWLdFE6S%2FG6LnhNJ0CLwRyClbJhzYlkK3NiAC%2FZMflBDJVIzzDv%2FIlUGtRyYEcqX1Fvf9kWG7%2BdBTCqJze5uurPy9Ygm11APum3rmyRvD6vrOsSUsPDISVin1ouHEXJkWPHFsS2Lz4aE6v%2BbpI4Devbb1DuGqL20gYSgI%2BKOIcYv%2FxXl69sF7I3qkrUvl10f2FXBxCjP4SeixS2x76oAoPv6z0pw%2BgjXOEWMu9Goc%2FeIxA3jgU3N5aSDVDKlSem6HVjMHUzCg8JI6qvjdNkyyHd2U%2BgVDONP%2FDqePt3SEchRcBiHtJX3JkjoH%2B6%2FWXtvm5lBrsTAP5nhLs%2FT%2Bo1it2o9E9iJg6UW3Qxpmz8pMIjONxyDhkK7Flr0nSCD9JEjCW1lYSVTy7EQNCaD04Kd3SFgU%2FkWeSrP7pdWKGYwXaQwl%2B6lvwY6pgGJyTfto6jz7D%2FJUcX53cAdTFQ3id9gWGWW13Mic8nwsewhMPFz%2BIJvHDDkkD3%2BABiVyxL7WNNNNv5KiDpzYuZ4IXPjBhlwUOmk6MCyVEzoNr5vC7zr5JqxDPvo8h7pYwf8dS3jQHXaoXW1uEXruWuzMtkYCLJZwkzBICI3LOkfPoRGq1cx679TSSzj6W%2F1kscekczEJuxLKz40PnGx%2F%2FBiJQ7vT7XS&X-Amz-Signature=ed978e812163a4869dcd8d97cca28b13fb83800964eedbf9e4f9f4a367938f33&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X7IMR67%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T170113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIB4XIRfaSwDK9KZ1xkUThRC95GvCZhSMylZyZJ%2BNgUgWAiB97dX1F0BsQ0g0mfrf0WN%2FqWCic2JCECEOkmn4nweWjSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA4aB2j4SEhUHx8QcKtwDmPrgYw0tMljDfyjluexnfDxjvqYYptgqVuuqE30959sObeCpHlQhiWP2L%2FUbgVriYQWwXWVzuBu0VH2GIp9dKOOokUNwiYxwwkMNwgbzVScFKefJyHXCLz3fyLccpkUZux1znM%2BrInrRSS%2Fwidw7IUH5w62rF2BiS7Tx3dhdDXXH64Tl7PJoT%2BNThZtsWAFP8qog1F9uO6YpeGmiaWLdFE6S%2FG6LnhNJ0CLwRyClbJhzYlkK3NiAC%2FZMflBDJVIzzDv%2FIlUGtRyYEcqX1Fvf9kWG7%2BdBTCqJze5uurPy9Ygm11APum3rmyRvD6vrOsSUsPDISVin1ouHEXJkWPHFsS2Lz4aE6v%2BbpI4Devbb1DuGqL20gYSgI%2BKOIcYv%2FxXl69sF7I3qkrUvl10f2FXBxCjP4SeixS2x76oAoPv6z0pw%2BgjXOEWMu9Goc%2FeIxA3jgU3N5aSDVDKlSem6HVjMHUzCg8JI6qvjdNkyyHd2U%2BgVDONP%2FDqePt3SEchRcBiHtJX3JkjoH%2B6%2FWXtvm5lBrsTAP5nhLs%2FT%2Bo1it2o9E9iJg6UW3Qxpmz8pMIjONxyDhkK7Flr0nSCD9JEjCW1lYSVTy7EQNCaD04Kd3SFgU%2FkWeSrP7pdWKGYwXaQwl%2B6lvwY6pgGJyTfto6jz7D%2FJUcX53cAdTFQ3id9gWGWW13Mic8nwsewhMPFz%2BIJvHDDkkD3%2BABiVyxL7WNNNNv5KiDpzYuZ4IXPjBhlwUOmk6MCyVEzoNr5vC7zr5JqxDPvo8h7pYwf8dS3jQHXaoXW1uEXruWuzMtkYCLJZwkzBICI3LOkfPoRGq1cx679TSSzj6W%2F1kscekczEJuxLKz40PnGx%2F%2FBiJQ7vT7XS&X-Amz-Signature=6f49e85b034dee3282fe9ee3c508dd2261d8283c09afce0a1c24bbe2029e880d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X7IMR67%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T170113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIB4XIRfaSwDK9KZ1xkUThRC95GvCZhSMylZyZJ%2BNgUgWAiB97dX1F0BsQ0g0mfrf0WN%2FqWCic2JCECEOkmn4nweWjSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA4aB2j4SEhUHx8QcKtwDmPrgYw0tMljDfyjluexnfDxjvqYYptgqVuuqE30959sObeCpHlQhiWP2L%2FUbgVriYQWwXWVzuBu0VH2GIp9dKOOokUNwiYxwwkMNwgbzVScFKefJyHXCLz3fyLccpkUZux1znM%2BrInrRSS%2Fwidw7IUH5w62rF2BiS7Tx3dhdDXXH64Tl7PJoT%2BNThZtsWAFP8qog1F9uO6YpeGmiaWLdFE6S%2FG6LnhNJ0CLwRyClbJhzYlkK3NiAC%2FZMflBDJVIzzDv%2FIlUGtRyYEcqX1Fvf9kWG7%2BdBTCqJze5uurPy9Ygm11APum3rmyRvD6vrOsSUsPDISVin1ouHEXJkWPHFsS2Lz4aE6v%2BbpI4Devbb1DuGqL20gYSgI%2BKOIcYv%2FxXl69sF7I3qkrUvl10f2FXBxCjP4SeixS2x76oAoPv6z0pw%2BgjXOEWMu9Goc%2FeIxA3jgU3N5aSDVDKlSem6HVjMHUzCg8JI6qvjdNkyyHd2U%2BgVDONP%2FDqePt3SEchRcBiHtJX3JkjoH%2B6%2FWXtvm5lBrsTAP5nhLs%2FT%2Bo1it2o9E9iJg6UW3Qxpmz8pMIjONxyDhkK7Flr0nSCD9JEjCW1lYSVTy7EQNCaD04Kd3SFgU%2FkWeSrP7pdWKGYwXaQwl%2B6lvwY6pgGJyTfto6jz7D%2FJUcX53cAdTFQ3id9gWGWW13Mic8nwsewhMPFz%2BIJvHDDkkD3%2BABiVyxL7WNNNNv5KiDpzYuZ4IXPjBhlwUOmk6MCyVEzoNr5vC7zr5JqxDPvo8h7pYwf8dS3jQHXaoXW1uEXruWuzMtkYCLJZwkzBICI3LOkfPoRGq1cx679TSSzj6W%2F1kscekczEJuxLKz40PnGx%2F%2FBiJQ7vT7XS&X-Amz-Signature=049da2e5288f41b8d46f4027c9a87e054b9392b067839b703f2b9eb8786ad634&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X7IMR67%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T170113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIB4XIRfaSwDK9KZ1xkUThRC95GvCZhSMylZyZJ%2BNgUgWAiB97dX1F0BsQ0g0mfrf0WN%2FqWCic2JCECEOkmn4nweWjSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA4aB2j4SEhUHx8QcKtwDmPrgYw0tMljDfyjluexnfDxjvqYYptgqVuuqE30959sObeCpHlQhiWP2L%2FUbgVriYQWwXWVzuBu0VH2GIp9dKOOokUNwiYxwwkMNwgbzVScFKefJyHXCLz3fyLccpkUZux1znM%2BrInrRSS%2Fwidw7IUH5w62rF2BiS7Tx3dhdDXXH64Tl7PJoT%2BNThZtsWAFP8qog1F9uO6YpeGmiaWLdFE6S%2FG6LnhNJ0CLwRyClbJhzYlkK3NiAC%2FZMflBDJVIzzDv%2FIlUGtRyYEcqX1Fvf9kWG7%2BdBTCqJze5uurPy9Ygm11APum3rmyRvD6vrOsSUsPDISVin1ouHEXJkWPHFsS2Lz4aE6v%2BbpI4Devbb1DuGqL20gYSgI%2BKOIcYv%2FxXl69sF7I3qkrUvl10f2FXBxCjP4SeixS2x76oAoPv6z0pw%2BgjXOEWMu9Goc%2FeIxA3jgU3N5aSDVDKlSem6HVjMHUzCg8JI6qvjdNkyyHd2U%2BgVDONP%2FDqePt3SEchRcBiHtJX3JkjoH%2B6%2FWXtvm5lBrsTAP5nhLs%2FT%2Bo1it2o9E9iJg6UW3Qxpmz8pMIjONxyDhkK7Flr0nSCD9JEjCW1lYSVTy7EQNCaD04Kd3SFgU%2FkWeSrP7pdWKGYwXaQwl%2B6lvwY6pgGJyTfto6jz7D%2FJUcX53cAdTFQ3id9gWGWW13Mic8nwsewhMPFz%2BIJvHDDkkD3%2BABiVyxL7WNNNNv5KiDpzYuZ4IXPjBhlwUOmk6MCyVEzoNr5vC7zr5JqxDPvo8h7pYwf8dS3jQHXaoXW1uEXruWuzMtkYCLJZwkzBICI3LOkfPoRGq1cx679TSSzj6W%2F1kscekczEJuxLKz40PnGx%2F%2FBiJQ7vT7XS&X-Amz-Signature=fa37f31dd3bea7aadaf94af0497ba18a41f04fbfbaa843ce08bfbd5e9879265a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X7IMR67%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T170113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIB4XIRfaSwDK9KZ1xkUThRC95GvCZhSMylZyZJ%2BNgUgWAiB97dX1F0BsQ0g0mfrf0WN%2FqWCic2JCECEOkmn4nweWjSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA4aB2j4SEhUHx8QcKtwDmPrgYw0tMljDfyjluexnfDxjvqYYptgqVuuqE30959sObeCpHlQhiWP2L%2FUbgVriYQWwXWVzuBu0VH2GIp9dKOOokUNwiYxwwkMNwgbzVScFKefJyHXCLz3fyLccpkUZux1znM%2BrInrRSS%2Fwidw7IUH5w62rF2BiS7Tx3dhdDXXH64Tl7PJoT%2BNThZtsWAFP8qog1F9uO6YpeGmiaWLdFE6S%2FG6LnhNJ0CLwRyClbJhzYlkK3NiAC%2FZMflBDJVIzzDv%2FIlUGtRyYEcqX1Fvf9kWG7%2BdBTCqJze5uurPy9Ygm11APum3rmyRvD6vrOsSUsPDISVin1ouHEXJkWPHFsS2Lz4aE6v%2BbpI4Devbb1DuGqL20gYSgI%2BKOIcYv%2FxXl69sF7I3qkrUvl10f2FXBxCjP4SeixS2x76oAoPv6z0pw%2BgjXOEWMu9Goc%2FeIxA3jgU3N5aSDVDKlSem6HVjMHUzCg8JI6qvjdNkyyHd2U%2BgVDONP%2FDqePt3SEchRcBiHtJX3JkjoH%2B6%2FWXtvm5lBrsTAP5nhLs%2FT%2Bo1it2o9E9iJg6UW3Qxpmz8pMIjONxyDhkK7Flr0nSCD9JEjCW1lYSVTy7EQNCaD04Kd3SFgU%2FkWeSrP7pdWKGYwXaQwl%2B6lvwY6pgGJyTfto6jz7D%2FJUcX53cAdTFQ3id9gWGWW13Mic8nwsewhMPFz%2BIJvHDDkkD3%2BABiVyxL7WNNNNv5KiDpzYuZ4IXPjBhlwUOmk6MCyVEzoNr5vC7zr5JqxDPvo8h7pYwf8dS3jQHXaoXW1uEXruWuzMtkYCLJZwkzBICI3LOkfPoRGq1cx679TSSzj6W%2F1kscekczEJuxLKz40PnGx%2F%2FBiJQ7vT7XS&X-Amz-Signature=45ad8a0a0d25a0d1ba40b61a1431bb7e879608b5401650c60869416bed13102c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666X7IMR67%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T170113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIB4XIRfaSwDK9KZ1xkUThRC95GvCZhSMylZyZJ%2BNgUgWAiB97dX1F0BsQ0g0mfrf0WN%2FqWCic2JCECEOkmn4nweWjSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMA4aB2j4SEhUHx8QcKtwDmPrgYw0tMljDfyjluexnfDxjvqYYptgqVuuqE30959sObeCpHlQhiWP2L%2FUbgVriYQWwXWVzuBu0VH2GIp9dKOOokUNwiYxwwkMNwgbzVScFKefJyHXCLz3fyLccpkUZux1znM%2BrInrRSS%2Fwidw7IUH5w62rF2BiS7Tx3dhdDXXH64Tl7PJoT%2BNThZtsWAFP8qog1F9uO6YpeGmiaWLdFE6S%2FG6LnhNJ0CLwRyClbJhzYlkK3NiAC%2FZMflBDJVIzzDv%2FIlUGtRyYEcqX1Fvf9kWG7%2BdBTCqJze5uurPy9Ygm11APum3rmyRvD6vrOsSUsPDISVin1ouHEXJkWPHFsS2Lz4aE6v%2BbpI4Devbb1DuGqL20gYSgI%2BKOIcYv%2FxXl69sF7I3qkrUvl10f2FXBxCjP4SeixS2x76oAoPv6z0pw%2BgjXOEWMu9Goc%2FeIxA3jgU3N5aSDVDKlSem6HVjMHUzCg8JI6qvjdNkyyHd2U%2BgVDONP%2FDqePt3SEchRcBiHtJX3JkjoH%2B6%2FWXtvm5lBrsTAP5nhLs%2FT%2Bo1it2o9E9iJg6UW3Qxpmz8pMIjONxyDhkK7Flr0nSCD9JEjCW1lYSVTy7EQNCaD04Kd3SFgU%2FkWeSrP7pdWKGYwXaQwl%2B6lvwY6pgGJyTfto6jz7D%2FJUcX53cAdTFQ3id9gWGWW13Mic8nwsewhMPFz%2BIJvHDDkkD3%2BABiVyxL7WNNNNv5KiDpzYuZ4IXPjBhlwUOmk6MCyVEzoNr5vC7zr5JqxDPvo8h7pYwf8dS3jQHXaoXW1uEXruWuzMtkYCLJZwkzBICI3LOkfPoRGq1cx679TSSzj6W%2F1kscekczEJuxLKz40PnGx%2F%2FBiJQ7vT7XS&X-Amz-Signature=2c2c6815085ca4448ee694f50e0eff407e43c30e4ca9e4d19c185c323723145b&X-Amz-SignedHeaders=host&x-id=GetObject)
