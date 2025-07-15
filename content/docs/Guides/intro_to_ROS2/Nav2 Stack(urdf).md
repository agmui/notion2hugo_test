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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RRPB37O%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T035350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIHNiqjfK9kY9TCzYmfCCe%2B5Hob%2BmdduCUeijljjK107PAiEAjcDC%2Fwd%2BPtrwDADKF82vdjjloHj9VWX9TSsuziDPOiAq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDF7kPe6sO02Zjryf5ircA5b5GA3Ekr1xBsFwJw79k4HmnFqAJho1poH0R5KEgs5RKNr0OFm5mUAV6X5FXM1ciJroEf21fXBopDawM1jSVnqetFGc84eK1GnQM4xb0Rl%2FGTe%2BePukeEX0FCtmR%2BeVLLgVXa0sbKmdkYheACcnae0Nsncp9Rc3ki%2F%2Bw2RqMx8ERIH2JlRYPt1D9VE%2BKg2TIzZUWexJesKG2iKHOaHjxeiq8Qr1fsidC7gqOYS0wswB5XZHBucQPBy0HY7rYD31JRr%2FlgIhnYhIUPTUB7mkcebA8BWzbZFGJMMIm65VmQp1v4YVSa5KZ6p87WZOIzG4Y63nOaUIlsAx4wWZuFh5FUe7pTITnIAEsG%2FYOhG%2FgSGcBtW9rEoh%2FQTp0ahB%2FpQXwY%2FjDEfXAZs1TZwZCXFps2la58ugXX3USPgC%2BXq38MCbP1uq6YzN74emoFTDJ695ZZ3nW9e5gbICS%2F8gz3S0equprvUS%2BBCOdBjGABQT1cYLwjgnNJEInvw%2BHeCnB19pnszNHG26%2F3Za%2Fgcfa%2F0sBhXQwOhkcJETg8WsAJC9CM0z4uo53O%2BhUCHg%2FamT6d2ipO%2FT9ZznanowCCcEhzmEsz%2Bokr6qMPuZb3AYexRLT%2FkrAT7gYW7FWzHWmoVEMJX91sMGOqUBotecXRjwre%2FnUoZTK%2BWogvJU8mat8%2B625ok%2FKpzE15vqxTSpl7s%2F2JXeBDwDPL1wmCBfkuc%2FGInmAThWikY5D8ebB36psl016n1zVq%2F874%2FuwyVNvHj5TA2pKXj5dzsYmVALe2RpqhaVIpzyKmeYET%2BVBYVx2fJEJXmZQhAc5Xq8B73CAh88lKQzMIsP5uZ5EvLvgH9maXkthklfCdxM3DJkedyp&X-Amz-Signature=9028c3782e507fcee74d5112ab92e14616e9a0ba86e16767a15c993f3dc8f8cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RRPB37O%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T035350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIHNiqjfK9kY9TCzYmfCCe%2B5Hob%2BmdduCUeijljjK107PAiEAjcDC%2Fwd%2BPtrwDADKF82vdjjloHj9VWX9TSsuziDPOiAq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDF7kPe6sO02Zjryf5ircA5b5GA3Ekr1xBsFwJw79k4HmnFqAJho1poH0R5KEgs5RKNr0OFm5mUAV6X5FXM1ciJroEf21fXBopDawM1jSVnqetFGc84eK1GnQM4xb0Rl%2FGTe%2BePukeEX0FCtmR%2BeVLLgVXa0sbKmdkYheACcnae0Nsncp9Rc3ki%2F%2Bw2RqMx8ERIH2JlRYPt1D9VE%2BKg2TIzZUWexJesKG2iKHOaHjxeiq8Qr1fsidC7gqOYS0wswB5XZHBucQPBy0HY7rYD31JRr%2FlgIhnYhIUPTUB7mkcebA8BWzbZFGJMMIm65VmQp1v4YVSa5KZ6p87WZOIzG4Y63nOaUIlsAx4wWZuFh5FUe7pTITnIAEsG%2FYOhG%2FgSGcBtW9rEoh%2FQTp0ahB%2FpQXwY%2FjDEfXAZs1TZwZCXFps2la58ugXX3USPgC%2BXq38MCbP1uq6YzN74emoFTDJ695ZZ3nW9e5gbICS%2F8gz3S0equprvUS%2BBCOdBjGABQT1cYLwjgnNJEInvw%2BHeCnB19pnszNHG26%2F3Za%2Fgcfa%2F0sBhXQwOhkcJETg8WsAJC9CM0z4uo53O%2BhUCHg%2FamT6d2ipO%2FT9ZznanowCCcEhzmEsz%2Bokr6qMPuZb3AYexRLT%2FkrAT7gYW7FWzHWmoVEMJX91sMGOqUBotecXRjwre%2FnUoZTK%2BWogvJU8mat8%2B625ok%2FKpzE15vqxTSpl7s%2F2JXeBDwDPL1wmCBfkuc%2FGInmAThWikY5D8ebB36psl016n1zVq%2F874%2FuwyVNvHj5TA2pKXj5dzsYmVALe2RpqhaVIpzyKmeYET%2BVBYVx2fJEJXmZQhAc5Xq8B73CAh88lKQzMIsP5uZ5EvLvgH9maXkthklfCdxM3DJkedyp&X-Amz-Signature=d0bd714c627dcce8f19619216f6197c6a154ccc56f8aac3ac56fbed9a35c939d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RRPB37O%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T035350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIHNiqjfK9kY9TCzYmfCCe%2B5Hob%2BmdduCUeijljjK107PAiEAjcDC%2Fwd%2BPtrwDADKF82vdjjloHj9VWX9TSsuziDPOiAq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDF7kPe6sO02Zjryf5ircA5b5GA3Ekr1xBsFwJw79k4HmnFqAJho1poH0R5KEgs5RKNr0OFm5mUAV6X5FXM1ciJroEf21fXBopDawM1jSVnqetFGc84eK1GnQM4xb0Rl%2FGTe%2BePukeEX0FCtmR%2BeVLLgVXa0sbKmdkYheACcnae0Nsncp9Rc3ki%2F%2Bw2RqMx8ERIH2JlRYPt1D9VE%2BKg2TIzZUWexJesKG2iKHOaHjxeiq8Qr1fsidC7gqOYS0wswB5XZHBucQPBy0HY7rYD31JRr%2FlgIhnYhIUPTUB7mkcebA8BWzbZFGJMMIm65VmQp1v4YVSa5KZ6p87WZOIzG4Y63nOaUIlsAx4wWZuFh5FUe7pTITnIAEsG%2FYOhG%2FgSGcBtW9rEoh%2FQTp0ahB%2FpQXwY%2FjDEfXAZs1TZwZCXFps2la58ugXX3USPgC%2BXq38MCbP1uq6YzN74emoFTDJ695ZZ3nW9e5gbICS%2F8gz3S0equprvUS%2BBCOdBjGABQT1cYLwjgnNJEInvw%2BHeCnB19pnszNHG26%2F3Za%2Fgcfa%2F0sBhXQwOhkcJETg8WsAJC9CM0z4uo53O%2BhUCHg%2FamT6d2ipO%2FT9ZznanowCCcEhzmEsz%2Bokr6qMPuZb3AYexRLT%2FkrAT7gYW7FWzHWmoVEMJX91sMGOqUBotecXRjwre%2FnUoZTK%2BWogvJU8mat8%2B625ok%2FKpzE15vqxTSpl7s%2F2JXeBDwDPL1wmCBfkuc%2FGInmAThWikY5D8ebB36psl016n1zVq%2F874%2FuwyVNvHj5TA2pKXj5dzsYmVALe2RpqhaVIpzyKmeYET%2BVBYVx2fJEJXmZQhAc5Xq8B73CAh88lKQzMIsP5uZ5EvLvgH9maXkthklfCdxM3DJkedyp&X-Amz-Signature=480058d2f47b1618b5b93f6e4f2390c82e1ecc02db936e0db02c6cced61f2753&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RRPB37O%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T035350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIHNiqjfK9kY9TCzYmfCCe%2B5Hob%2BmdduCUeijljjK107PAiEAjcDC%2Fwd%2BPtrwDADKF82vdjjloHj9VWX9TSsuziDPOiAq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDF7kPe6sO02Zjryf5ircA5b5GA3Ekr1xBsFwJw79k4HmnFqAJho1poH0R5KEgs5RKNr0OFm5mUAV6X5FXM1ciJroEf21fXBopDawM1jSVnqetFGc84eK1GnQM4xb0Rl%2FGTe%2BePukeEX0FCtmR%2BeVLLgVXa0sbKmdkYheACcnae0Nsncp9Rc3ki%2F%2Bw2RqMx8ERIH2JlRYPt1D9VE%2BKg2TIzZUWexJesKG2iKHOaHjxeiq8Qr1fsidC7gqOYS0wswB5XZHBucQPBy0HY7rYD31JRr%2FlgIhnYhIUPTUB7mkcebA8BWzbZFGJMMIm65VmQp1v4YVSa5KZ6p87WZOIzG4Y63nOaUIlsAx4wWZuFh5FUe7pTITnIAEsG%2FYOhG%2FgSGcBtW9rEoh%2FQTp0ahB%2FpQXwY%2FjDEfXAZs1TZwZCXFps2la58ugXX3USPgC%2BXq38MCbP1uq6YzN74emoFTDJ695ZZ3nW9e5gbICS%2F8gz3S0equprvUS%2BBCOdBjGABQT1cYLwjgnNJEInvw%2BHeCnB19pnszNHG26%2F3Za%2Fgcfa%2F0sBhXQwOhkcJETg8WsAJC9CM0z4uo53O%2BhUCHg%2FamT6d2ipO%2FT9ZznanowCCcEhzmEsz%2Bokr6qMPuZb3AYexRLT%2FkrAT7gYW7FWzHWmoVEMJX91sMGOqUBotecXRjwre%2FnUoZTK%2BWogvJU8mat8%2B625ok%2FKpzE15vqxTSpl7s%2F2JXeBDwDPL1wmCBfkuc%2FGInmAThWikY5D8ebB36psl016n1zVq%2F874%2FuwyVNvHj5TA2pKXj5dzsYmVALe2RpqhaVIpzyKmeYET%2BVBYVx2fJEJXmZQhAc5Xq8B73CAh88lKQzMIsP5uZ5EvLvgH9maXkthklfCdxM3DJkedyp&X-Amz-Signature=b4f355f87b20922fc568af142e536edbee569367c03955fa932f703e0a557397&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RRPB37O%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T035351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIHNiqjfK9kY9TCzYmfCCe%2B5Hob%2BmdduCUeijljjK107PAiEAjcDC%2Fwd%2BPtrwDADKF82vdjjloHj9VWX9TSsuziDPOiAq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDF7kPe6sO02Zjryf5ircA5b5GA3Ekr1xBsFwJw79k4HmnFqAJho1poH0R5KEgs5RKNr0OFm5mUAV6X5FXM1ciJroEf21fXBopDawM1jSVnqetFGc84eK1GnQM4xb0Rl%2FGTe%2BePukeEX0FCtmR%2BeVLLgVXa0sbKmdkYheACcnae0Nsncp9Rc3ki%2F%2Bw2RqMx8ERIH2JlRYPt1D9VE%2BKg2TIzZUWexJesKG2iKHOaHjxeiq8Qr1fsidC7gqOYS0wswB5XZHBucQPBy0HY7rYD31JRr%2FlgIhnYhIUPTUB7mkcebA8BWzbZFGJMMIm65VmQp1v4YVSa5KZ6p87WZOIzG4Y63nOaUIlsAx4wWZuFh5FUe7pTITnIAEsG%2FYOhG%2FgSGcBtW9rEoh%2FQTp0ahB%2FpQXwY%2FjDEfXAZs1TZwZCXFps2la58ugXX3USPgC%2BXq38MCbP1uq6YzN74emoFTDJ695ZZ3nW9e5gbICS%2F8gz3S0equprvUS%2BBCOdBjGABQT1cYLwjgnNJEInvw%2BHeCnB19pnszNHG26%2F3Za%2Fgcfa%2F0sBhXQwOhkcJETg8WsAJC9CM0z4uo53O%2BhUCHg%2FamT6d2ipO%2FT9ZznanowCCcEhzmEsz%2Bokr6qMPuZb3AYexRLT%2FkrAT7gYW7FWzHWmoVEMJX91sMGOqUBotecXRjwre%2FnUoZTK%2BWogvJU8mat8%2B625ok%2FKpzE15vqxTSpl7s%2F2JXeBDwDPL1wmCBfkuc%2FGInmAThWikY5D8ebB36psl016n1zVq%2F874%2FuwyVNvHj5TA2pKXj5dzsYmVALe2RpqhaVIpzyKmeYET%2BVBYVx2fJEJXmZQhAc5Xq8B73CAh88lKQzMIsP5uZ5EvLvgH9maXkthklfCdxM3DJkedyp&X-Amz-Signature=e7c676d0fb51b04f0071b4c211d09ee599904b68c7a0a850dc6bee3ccf5ec5fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RRPB37O%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T035351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIHNiqjfK9kY9TCzYmfCCe%2B5Hob%2BmdduCUeijljjK107PAiEAjcDC%2Fwd%2BPtrwDADKF82vdjjloHj9VWX9TSsuziDPOiAq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDF7kPe6sO02Zjryf5ircA5b5GA3Ekr1xBsFwJw79k4HmnFqAJho1poH0R5KEgs5RKNr0OFm5mUAV6X5FXM1ciJroEf21fXBopDawM1jSVnqetFGc84eK1GnQM4xb0Rl%2FGTe%2BePukeEX0FCtmR%2BeVLLgVXa0sbKmdkYheACcnae0Nsncp9Rc3ki%2F%2Bw2RqMx8ERIH2JlRYPt1D9VE%2BKg2TIzZUWexJesKG2iKHOaHjxeiq8Qr1fsidC7gqOYS0wswB5XZHBucQPBy0HY7rYD31JRr%2FlgIhnYhIUPTUB7mkcebA8BWzbZFGJMMIm65VmQp1v4YVSa5KZ6p87WZOIzG4Y63nOaUIlsAx4wWZuFh5FUe7pTITnIAEsG%2FYOhG%2FgSGcBtW9rEoh%2FQTp0ahB%2FpQXwY%2FjDEfXAZs1TZwZCXFps2la58ugXX3USPgC%2BXq38MCbP1uq6YzN74emoFTDJ695ZZ3nW9e5gbICS%2F8gz3S0equprvUS%2BBCOdBjGABQT1cYLwjgnNJEInvw%2BHeCnB19pnszNHG26%2F3Za%2Fgcfa%2F0sBhXQwOhkcJETg8WsAJC9CM0z4uo53O%2BhUCHg%2FamT6d2ipO%2FT9ZznanowCCcEhzmEsz%2Bokr6qMPuZb3AYexRLT%2FkrAT7gYW7FWzHWmoVEMJX91sMGOqUBotecXRjwre%2FnUoZTK%2BWogvJU8mat8%2B625ok%2FKpzE15vqxTSpl7s%2F2JXeBDwDPL1wmCBfkuc%2FGInmAThWikY5D8ebB36psl016n1zVq%2F874%2FuwyVNvHj5TA2pKXj5dzsYmVALe2RpqhaVIpzyKmeYET%2BVBYVx2fJEJXmZQhAc5Xq8B73CAh88lKQzMIsP5uZ5EvLvgH9maXkthklfCdxM3DJkedyp&X-Amz-Signature=acff46e26470f0faa5eaf3592d902631eec7d3699fe06873840b0f9489cbe37d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
