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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653WSJAUL%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFxqa4LTUfjeh3JxbaMKf%2Fqt%2FMANnZrNGr7etsZLSu4AiBGuhjsIvLCLqt7i7E%2BS2BEtfovC7b658Df6aiupvdONSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMkgnzo34QFj3w4nfIKtwDh0f2liXGMNDYWlt6RB9OOpXQexHL4zUGMGULvOl%2FqXAqbMwsMXx%2F7%2FT00GamgIi4M%2FPKyqADYltpIM3zFzJSFkV%2BbYZyXeRsmEz7CxO1SrtfGCgA7%2BugSy1h1AlCS92PKKop3YJohmh1S2ePlfxs0myE0xXrGSXk1hG21S%2FDIwG6zaA0eOP%2FuS6%2FkKPIrAEFqSbcStpKI8NF4g3LAyBo0W7%2FjX7Kox5OqIuU25piWDBemcxM%2BZHjbkrMw0qeYjHPoyHilIz6m%2Bk9JLyLrwNJEo2ccy4yCsbc%2B0vMjIhMK54zDOIVCiuFAiVujKEgcJYmz2PxHAerAiM%2BcIbYYV0nNBuZQRPc8q%2BoqQOyITKdF5soSLRe3fayk1hcKGhx%2Bu3RF%2BpdDaq4KGWCpxe9AwFH1oNo8f8Bw0Sna81QNnTLG0AlLVwcdoYFiR%2FztJMvNjc1WApGi1SBrghUPiOpMLa1LrQhBhD5I3jFmOPE8o8FVAwc7DIodZKrJnU%2FBNY7BNTx0N3rlParge6EWKWN7TrvQZPBKX6HSI3eZ2ibH2Pbo3h4hHZwhU8omBqMPFvE3%2FT280vbh90WfcQbAumTQQ9dJseksq%2BU2fYseihnYbf09OwQowLJesvAHNjZNJEwr7%2FEwgY6pgGTbRBdV3X%2BAeOa7pq%2B13JRmikTNiGDgwRYvWMpOh%2BpAYqXTJCIw%2FtW8pNnDL9VT6AGQCn2oaLk0OasLSJJVaQm7nflqs1fFMN4N8c13po9y9EekWH%2B7U5QksYptLM6wX4BbTbJaj5dn3nTe%2B9m9hvVGxXXRatkwJvdrEVAdt%2BR0hVKqxIt%2B1HaVI2qi1RgJ36Vswy8C4ZZ2nH%2BVIfo79SMFYK6xyLh&X-Amz-Signature=37c8262b463463e2b4703020b03c564bb7fce5ab797a84ea2905312ca0e11956&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653WSJAUL%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFxqa4LTUfjeh3JxbaMKf%2Fqt%2FMANnZrNGr7etsZLSu4AiBGuhjsIvLCLqt7i7E%2BS2BEtfovC7b658Df6aiupvdONSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMkgnzo34QFj3w4nfIKtwDh0f2liXGMNDYWlt6RB9OOpXQexHL4zUGMGULvOl%2FqXAqbMwsMXx%2F7%2FT00GamgIi4M%2FPKyqADYltpIM3zFzJSFkV%2BbYZyXeRsmEz7CxO1SrtfGCgA7%2BugSy1h1AlCS92PKKop3YJohmh1S2ePlfxs0myE0xXrGSXk1hG21S%2FDIwG6zaA0eOP%2FuS6%2FkKPIrAEFqSbcStpKI8NF4g3LAyBo0W7%2FjX7Kox5OqIuU25piWDBemcxM%2BZHjbkrMw0qeYjHPoyHilIz6m%2Bk9JLyLrwNJEo2ccy4yCsbc%2B0vMjIhMK54zDOIVCiuFAiVujKEgcJYmz2PxHAerAiM%2BcIbYYV0nNBuZQRPc8q%2BoqQOyITKdF5soSLRe3fayk1hcKGhx%2Bu3RF%2BpdDaq4KGWCpxe9AwFH1oNo8f8Bw0Sna81QNnTLG0AlLVwcdoYFiR%2FztJMvNjc1WApGi1SBrghUPiOpMLa1LrQhBhD5I3jFmOPE8o8FVAwc7DIodZKrJnU%2FBNY7BNTx0N3rlParge6EWKWN7TrvQZPBKX6HSI3eZ2ibH2Pbo3h4hHZwhU8omBqMPFvE3%2FT280vbh90WfcQbAumTQQ9dJseksq%2BU2fYseihnYbf09OwQowLJesvAHNjZNJEwr7%2FEwgY6pgGTbRBdV3X%2BAeOa7pq%2B13JRmikTNiGDgwRYvWMpOh%2BpAYqXTJCIw%2FtW8pNnDL9VT6AGQCn2oaLk0OasLSJJVaQm7nflqs1fFMN4N8c13po9y9EekWH%2B7U5QksYptLM6wX4BbTbJaj5dn3nTe%2B9m9hvVGxXXRatkwJvdrEVAdt%2BR0hVKqxIt%2B1HaVI2qi1RgJ36Vswy8C4ZZ2nH%2BVIfo79SMFYK6xyLh&X-Amz-Signature=635040f99f0f0a076adc772a9e0e2a7d4440adf6cbcb3bcdca6eb3f7349f258a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653WSJAUL%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFxqa4LTUfjeh3JxbaMKf%2Fqt%2FMANnZrNGr7etsZLSu4AiBGuhjsIvLCLqt7i7E%2BS2BEtfovC7b658Df6aiupvdONSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMkgnzo34QFj3w4nfIKtwDh0f2liXGMNDYWlt6RB9OOpXQexHL4zUGMGULvOl%2FqXAqbMwsMXx%2F7%2FT00GamgIi4M%2FPKyqADYltpIM3zFzJSFkV%2BbYZyXeRsmEz7CxO1SrtfGCgA7%2BugSy1h1AlCS92PKKop3YJohmh1S2ePlfxs0myE0xXrGSXk1hG21S%2FDIwG6zaA0eOP%2FuS6%2FkKPIrAEFqSbcStpKI8NF4g3LAyBo0W7%2FjX7Kox5OqIuU25piWDBemcxM%2BZHjbkrMw0qeYjHPoyHilIz6m%2Bk9JLyLrwNJEo2ccy4yCsbc%2B0vMjIhMK54zDOIVCiuFAiVujKEgcJYmz2PxHAerAiM%2BcIbYYV0nNBuZQRPc8q%2BoqQOyITKdF5soSLRe3fayk1hcKGhx%2Bu3RF%2BpdDaq4KGWCpxe9AwFH1oNo8f8Bw0Sna81QNnTLG0AlLVwcdoYFiR%2FztJMvNjc1WApGi1SBrghUPiOpMLa1LrQhBhD5I3jFmOPE8o8FVAwc7DIodZKrJnU%2FBNY7BNTx0N3rlParge6EWKWN7TrvQZPBKX6HSI3eZ2ibH2Pbo3h4hHZwhU8omBqMPFvE3%2FT280vbh90WfcQbAumTQQ9dJseksq%2BU2fYseihnYbf09OwQowLJesvAHNjZNJEwr7%2FEwgY6pgGTbRBdV3X%2BAeOa7pq%2B13JRmikTNiGDgwRYvWMpOh%2BpAYqXTJCIw%2FtW8pNnDL9VT6AGQCn2oaLk0OasLSJJVaQm7nflqs1fFMN4N8c13po9y9EekWH%2B7U5QksYptLM6wX4BbTbJaj5dn3nTe%2B9m9hvVGxXXRatkwJvdrEVAdt%2BR0hVKqxIt%2B1HaVI2qi1RgJ36Vswy8C4ZZ2nH%2BVIfo79SMFYK6xyLh&X-Amz-Signature=35d6c651969dda0a3896c582d52b43a8394e2245b3a29e545fba39a284658b3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653WSJAUL%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFxqa4LTUfjeh3JxbaMKf%2Fqt%2FMANnZrNGr7etsZLSu4AiBGuhjsIvLCLqt7i7E%2BS2BEtfovC7b658Df6aiupvdONSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMkgnzo34QFj3w4nfIKtwDh0f2liXGMNDYWlt6RB9OOpXQexHL4zUGMGULvOl%2FqXAqbMwsMXx%2F7%2FT00GamgIi4M%2FPKyqADYltpIM3zFzJSFkV%2BbYZyXeRsmEz7CxO1SrtfGCgA7%2BugSy1h1AlCS92PKKop3YJohmh1S2ePlfxs0myE0xXrGSXk1hG21S%2FDIwG6zaA0eOP%2FuS6%2FkKPIrAEFqSbcStpKI8NF4g3LAyBo0W7%2FjX7Kox5OqIuU25piWDBemcxM%2BZHjbkrMw0qeYjHPoyHilIz6m%2Bk9JLyLrwNJEo2ccy4yCsbc%2B0vMjIhMK54zDOIVCiuFAiVujKEgcJYmz2PxHAerAiM%2BcIbYYV0nNBuZQRPc8q%2BoqQOyITKdF5soSLRe3fayk1hcKGhx%2Bu3RF%2BpdDaq4KGWCpxe9AwFH1oNo8f8Bw0Sna81QNnTLG0AlLVwcdoYFiR%2FztJMvNjc1WApGi1SBrghUPiOpMLa1LrQhBhD5I3jFmOPE8o8FVAwc7DIodZKrJnU%2FBNY7BNTx0N3rlParge6EWKWN7TrvQZPBKX6HSI3eZ2ibH2Pbo3h4hHZwhU8omBqMPFvE3%2FT280vbh90WfcQbAumTQQ9dJseksq%2BU2fYseihnYbf09OwQowLJesvAHNjZNJEwr7%2FEwgY6pgGTbRBdV3X%2BAeOa7pq%2B13JRmikTNiGDgwRYvWMpOh%2BpAYqXTJCIw%2FtW8pNnDL9VT6AGQCn2oaLk0OasLSJJVaQm7nflqs1fFMN4N8c13po9y9EekWH%2B7U5QksYptLM6wX4BbTbJaj5dn3nTe%2B9m9hvVGxXXRatkwJvdrEVAdt%2BR0hVKqxIt%2B1HaVI2qi1RgJ36Vswy8C4ZZ2nH%2BVIfo79SMFYK6xyLh&X-Amz-Signature=ea391d95c5e81e6417176da8c8b975ee3c06665c4f97d5e2866a3623d772543a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653WSJAUL%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFxqa4LTUfjeh3JxbaMKf%2Fqt%2FMANnZrNGr7etsZLSu4AiBGuhjsIvLCLqt7i7E%2BS2BEtfovC7b658Df6aiupvdONSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMkgnzo34QFj3w4nfIKtwDh0f2liXGMNDYWlt6RB9OOpXQexHL4zUGMGULvOl%2FqXAqbMwsMXx%2F7%2FT00GamgIi4M%2FPKyqADYltpIM3zFzJSFkV%2BbYZyXeRsmEz7CxO1SrtfGCgA7%2BugSy1h1AlCS92PKKop3YJohmh1S2ePlfxs0myE0xXrGSXk1hG21S%2FDIwG6zaA0eOP%2FuS6%2FkKPIrAEFqSbcStpKI8NF4g3LAyBo0W7%2FjX7Kox5OqIuU25piWDBemcxM%2BZHjbkrMw0qeYjHPoyHilIz6m%2Bk9JLyLrwNJEo2ccy4yCsbc%2B0vMjIhMK54zDOIVCiuFAiVujKEgcJYmz2PxHAerAiM%2BcIbYYV0nNBuZQRPc8q%2BoqQOyITKdF5soSLRe3fayk1hcKGhx%2Bu3RF%2BpdDaq4KGWCpxe9AwFH1oNo8f8Bw0Sna81QNnTLG0AlLVwcdoYFiR%2FztJMvNjc1WApGi1SBrghUPiOpMLa1LrQhBhD5I3jFmOPE8o8FVAwc7DIodZKrJnU%2FBNY7BNTx0N3rlParge6EWKWN7TrvQZPBKX6HSI3eZ2ibH2Pbo3h4hHZwhU8omBqMPFvE3%2FT280vbh90WfcQbAumTQQ9dJseksq%2BU2fYseihnYbf09OwQowLJesvAHNjZNJEwr7%2FEwgY6pgGTbRBdV3X%2BAeOa7pq%2B13JRmikTNiGDgwRYvWMpOh%2BpAYqXTJCIw%2FtW8pNnDL9VT6AGQCn2oaLk0OasLSJJVaQm7nflqs1fFMN4N8c13po9y9EekWH%2B7U5QksYptLM6wX4BbTbJaj5dn3nTe%2B9m9hvVGxXXRatkwJvdrEVAdt%2BR0hVKqxIt%2B1HaVI2qi1RgJ36Vswy8C4ZZ2nH%2BVIfo79SMFYK6xyLh&X-Amz-Signature=332af5329f1d46ef7f23d139388665c26eabf70393daf47a8e951d478ab11230&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653WSJAUL%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T081336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFxqa4LTUfjeh3JxbaMKf%2Fqt%2FMANnZrNGr7etsZLSu4AiBGuhjsIvLCLqt7i7E%2BS2BEtfovC7b658Df6aiupvdONSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMkgnzo34QFj3w4nfIKtwDh0f2liXGMNDYWlt6RB9OOpXQexHL4zUGMGULvOl%2FqXAqbMwsMXx%2F7%2FT00GamgIi4M%2FPKyqADYltpIM3zFzJSFkV%2BbYZyXeRsmEz7CxO1SrtfGCgA7%2BugSy1h1AlCS92PKKop3YJohmh1S2ePlfxs0myE0xXrGSXk1hG21S%2FDIwG6zaA0eOP%2FuS6%2FkKPIrAEFqSbcStpKI8NF4g3LAyBo0W7%2FjX7Kox5OqIuU25piWDBemcxM%2BZHjbkrMw0qeYjHPoyHilIz6m%2Bk9JLyLrwNJEo2ccy4yCsbc%2B0vMjIhMK54zDOIVCiuFAiVujKEgcJYmz2PxHAerAiM%2BcIbYYV0nNBuZQRPc8q%2BoqQOyITKdF5soSLRe3fayk1hcKGhx%2Bu3RF%2BpdDaq4KGWCpxe9AwFH1oNo8f8Bw0Sna81QNnTLG0AlLVwcdoYFiR%2FztJMvNjc1WApGi1SBrghUPiOpMLa1LrQhBhD5I3jFmOPE8o8FVAwc7DIodZKrJnU%2FBNY7BNTx0N3rlParge6EWKWN7TrvQZPBKX6HSI3eZ2ibH2Pbo3h4hHZwhU8omBqMPFvE3%2FT280vbh90WfcQbAumTQQ9dJseksq%2BU2fYseihnYbf09OwQowLJesvAHNjZNJEwr7%2FEwgY6pgGTbRBdV3X%2BAeOa7pq%2B13JRmikTNiGDgwRYvWMpOh%2BpAYqXTJCIw%2FtW8pNnDL9VT6AGQCn2oaLk0OasLSJJVaQm7nflqs1fFMN4N8c13po9y9EekWH%2B7U5QksYptLM6wX4BbTbJaj5dn3nTe%2B9m9hvVGxXXRatkwJvdrEVAdt%2BR0hVKqxIt%2B1HaVI2qi1RgJ36Vswy8C4ZZ2nH%2BVIfo79SMFYK6xyLh&X-Amz-Signature=88a6715ac08c65c0e77a3748ba27af3270ce978eb4fc0c7c771e4f4a4119b944&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
