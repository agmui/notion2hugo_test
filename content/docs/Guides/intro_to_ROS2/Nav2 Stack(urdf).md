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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MKRHEZF%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHdUMn%2FxQbicRSw0yX9KKV6LZvGjV%2BYKrtPRMCaWIKpPAiB1it0xYdA7diU%2BM3CXDK10hx8BKhTTNcT4CpmY%2Bze2BCqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeuzhXC8FaWjTmyexKtwDmHXON5xPtg1LsaUjXud9RY0HQ5mtZ8BID9z2a%2BvBh5F1D4UHA1vzx86yeik14iZYqN1503rCkmJ4Wg0B8qo79subZcxsdH96lKq2xHbOo8w9yJDLCwi772qUcvQRWEZU%2BsImM9GlUQxNqQ%2F%2F9vM4l7TCkNvsP0B61PUjt05D5A5q0rh2aUKJLedFreLDNjoKwRaYxJZgPDTxg8VS6x%2FzUTMwvrVvAYc4OJMX6a2MPmsMMIwWBj9ttbNYLWgqP8sn4DNMMQ4oApOpuQafILNjWHZ%2FsVetRhDobafy8SFq1zkUlC%2B7otRtfyHA4WJJ9yXD7yATkS31OIvnThnmOD8jctNFLsoIN6XwypU1KOIkm19LD%2Bt0pbFYbUGo0uQymboUvT%2FGKsoNyjnGaunTpbpD5bk4sknO5M74kBu6UbUwhj5DcbdW09QDaAZ%2F6mZVfrDehuc3usTU3bVln2fxirHCgMXxNZJLG30K3SOpfngk07P30uHdnbUoVzPEjPaBQ8KK4WHN%2F919GGvEFbSnfjLc7j%2Bb12tUoe3GLUH7qcNMx1H1JnVSv1Y0nffTf3Vvsf5HU8pOqi7OT3pkIDH%2Fg0E4xQQldf9u111xDcgoRmVUoU2EXHDRlefFDaA%2FmGAw8%2Fv0wwY6pgGbA%2BDiZKrpgv9rX8tqECJm7ossdNHSxoIKYkUvisxHv0MfWVn%2Fgq1H1L4oM0RDz6Vd%2BEwRL3wbAQeKxemONc6AelWcKJ7zAk5XGapezl5bcvEAR9Ks4ELeLL6eqRTMl9hRxOJKnDlW70fB58UgEBOOMR3gyOfdNiFRV%2BkuA4RCqgpmKXhHWmXzoaWSGQCG55dcKtL%2Bx%2F8hwtfV%2FdLzLhdFrjhFwmWQ&X-Amz-Signature=8ed1c792c3868b149f9220f0efd4ae1b481c482c06d16121e04bfd6d6bb2597d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MKRHEZF%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHdUMn%2FxQbicRSw0yX9KKV6LZvGjV%2BYKrtPRMCaWIKpPAiB1it0xYdA7diU%2BM3CXDK10hx8BKhTTNcT4CpmY%2Bze2BCqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeuzhXC8FaWjTmyexKtwDmHXON5xPtg1LsaUjXud9RY0HQ5mtZ8BID9z2a%2BvBh5F1D4UHA1vzx86yeik14iZYqN1503rCkmJ4Wg0B8qo79subZcxsdH96lKq2xHbOo8w9yJDLCwi772qUcvQRWEZU%2BsImM9GlUQxNqQ%2F%2F9vM4l7TCkNvsP0B61PUjt05D5A5q0rh2aUKJLedFreLDNjoKwRaYxJZgPDTxg8VS6x%2FzUTMwvrVvAYc4OJMX6a2MPmsMMIwWBj9ttbNYLWgqP8sn4DNMMQ4oApOpuQafILNjWHZ%2FsVetRhDobafy8SFq1zkUlC%2B7otRtfyHA4WJJ9yXD7yATkS31OIvnThnmOD8jctNFLsoIN6XwypU1KOIkm19LD%2Bt0pbFYbUGo0uQymboUvT%2FGKsoNyjnGaunTpbpD5bk4sknO5M74kBu6UbUwhj5DcbdW09QDaAZ%2F6mZVfrDehuc3usTU3bVln2fxirHCgMXxNZJLG30K3SOpfngk07P30uHdnbUoVzPEjPaBQ8KK4WHN%2F919GGvEFbSnfjLc7j%2Bb12tUoe3GLUH7qcNMx1H1JnVSv1Y0nffTf3Vvsf5HU8pOqi7OT3pkIDH%2Fg0E4xQQldf9u111xDcgoRmVUoU2EXHDRlefFDaA%2FmGAw8%2Fv0wwY6pgGbA%2BDiZKrpgv9rX8tqECJm7ossdNHSxoIKYkUvisxHv0MfWVn%2Fgq1H1L4oM0RDz6Vd%2BEwRL3wbAQeKxemONc6AelWcKJ7zAk5XGapezl5bcvEAR9Ks4ELeLL6eqRTMl9hRxOJKnDlW70fB58UgEBOOMR3gyOfdNiFRV%2BkuA4RCqgpmKXhHWmXzoaWSGQCG55dcKtL%2Bx%2F8hwtfV%2FdLzLhdFrjhFwmWQ&X-Amz-Signature=29f65baf4295ce121e95719d517f40766f8b4b02d2aaf6cee21380534646d482&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MKRHEZF%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHdUMn%2FxQbicRSw0yX9KKV6LZvGjV%2BYKrtPRMCaWIKpPAiB1it0xYdA7diU%2BM3CXDK10hx8BKhTTNcT4CpmY%2Bze2BCqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeuzhXC8FaWjTmyexKtwDmHXON5xPtg1LsaUjXud9RY0HQ5mtZ8BID9z2a%2BvBh5F1D4UHA1vzx86yeik14iZYqN1503rCkmJ4Wg0B8qo79subZcxsdH96lKq2xHbOo8w9yJDLCwi772qUcvQRWEZU%2BsImM9GlUQxNqQ%2F%2F9vM4l7TCkNvsP0B61PUjt05D5A5q0rh2aUKJLedFreLDNjoKwRaYxJZgPDTxg8VS6x%2FzUTMwvrVvAYc4OJMX6a2MPmsMMIwWBj9ttbNYLWgqP8sn4DNMMQ4oApOpuQafILNjWHZ%2FsVetRhDobafy8SFq1zkUlC%2B7otRtfyHA4WJJ9yXD7yATkS31OIvnThnmOD8jctNFLsoIN6XwypU1KOIkm19LD%2Bt0pbFYbUGo0uQymboUvT%2FGKsoNyjnGaunTpbpD5bk4sknO5M74kBu6UbUwhj5DcbdW09QDaAZ%2F6mZVfrDehuc3usTU3bVln2fxirHCgMXxNZJLG30K3SOpfngk07P30uHdnbUoVzPEjPaBQ8KK4WHN%2F919GGvEFbSnfjLc7j%2Bb12tUoe3GLUH7qcNMx1H1JnVSv1Y0nffTf3Vvsf5HU8pOqi7OT3pkIDH%2Fg0E4xQQldf9u111xDcgoRmVUoU2EXHDRlefFDaA%2FmGAw8%2Fv0wwY6pgGbA%2BDiZKrpgv9rX8tqECJm7ossdNHSxoIKYkUvisxHv0MfWVn%2Fgq1H1L4oM0RDz6Vd%2BEwRL3wbAQeKxemONc6AelWcKJ7zAk5XGapezl5bcvEAR9Ks4ELeLL6eqRTMl9hRxOJKnDlW70fB58UgEBOOMR3gyOfdNiFRV%2BkuA4RCqgpmKXhHWmXzoaWSGQCG55dcKtL%2Bx%2F8hwtfV%2FdLzLhdFrjhFwmWQ&X-Amz-Signature=0edd21ba862e718c7ec99ab836685f4eb98e26e1359ae294d8b14373e1f3d4cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MKRHEZF%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHdUMn%2FxQbicRSw0yX9KKV6LZvGjV%2BYKrtPRMCaWIKpPAiB1it0xYdA7diU%2BM3CXDK10hx8BKhTTNcT4CpmY%2Bze2BCqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeuzhXC8FaWjTmyexKtwDmHXON5xPtg1LsaUjXud9RY0HQ5mtZ8BID9z2a%2BvBh5F1D4UHA1vzx86yeik14iZYqN1503rCkmJ4Wg0B8qo79subZcxsdH96lKq2xHbOo8w9yJDLCwi772qUcvQRWEZU%2BsImM9GlUQxNqQ%2F%2F9vM4l7TCkNvsP0B61PUjt05D5A5q0rh2aUKJLedFreLDNjoKwRaYxJZgPDTxg8VS6x%2FzUTMwvrVvAYc4OJMX6a2MPmsMMIwWBj9ttbNYLWgqP8sn4DNMMQ4oApOpuQafILNjWHZ%2FsVetRhDobafy8SFq1zkUlC%2B7otRtfyHA4WJJ9yXD7yATkS31OIvnThnmOD8jctNFLsoIN6XwypU1KOIkm19LD%2Bt0pbFYbUGo0uQymboUvT%2FGKsoNyjnGaunTpbpD5bk4sknO5M74kBu6UbUwhj5DcbdW09QDaAZ%2F6mZVfrDehuc3usTU3bVln2fxirHCgMXxNZJLG30K3SOpfngk07P30uHdnbUoVzPEjPaBQ8KK4WHN%2F919GGvEFbSnfjLc7j%2Bb12tUoe3GLUH7qcNMx1H1JnVSv1Y0nffTf3Vvsf5HU8pOqi7OT3pkIDH%2Fg0E4xQQldf9u111xDcgoRmVUoU2EXHDRlefFDaA%2FmGAw8%2Fv0wwY6pgGbA%2BDiZKrpgv9rX8tqECJm7ossdNHSxoIKYkUvisxHv0MfWVn%2Fgq1H1L4oM0RDz6Vd%2BEwRL3wbAQeKxemONc6AelWcKJ7zAk5XGapezl5bcvEAR9Ks4ELeLL6eqRTMl9hRxOJKnDlW70fB58UgEBOOMR3gyOfdNiFRV%2BkuA4RCqgpmKXhHWmXzoaWSGQCG55dcKtL%2Bx%2F8hwtfV%2FdLzLhdFrjhFwmWQ&X-Amz-Signature=2c5d9adf1e7930ff246e33fc069340391b655ba2bf9478b9ad84370f2237653e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MKRHEZF%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHdUMn%2FxQbicRSw0yX9KKV6LZvGjV%2BYKrtPRMCaWIKpPAiB1it0xYdA7diU%2BM3CXDK10hx8BKhTTNcT4CpmY%2Bze2BCqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeuzhXC8FaWjTmyexKtwDmHXON5xPtg1LsaUjXud9RY0HQ5mtZ8BID9z2a%2BvBh5F1D4UHA1vzx86yeik14iZYqN1503rCkmJ4Wg0B8qo79subZcxsdH96lKq2xHbOo8w9yJDLCwi772qUcvQRWEZU%2BsImM9GlUQxNqQ%2F%2F9vM4l7TCkNvsP0B61PUjt05D5A5q0rh2aUKJLedFreLDNjoKwRaYxJZgPDTxg8VS6x%2FzUTMwvrVvAYc4OJMX6a2MPmsMMIwWBj9ttbNYLWgqP8sn4DNMMQ4oApOpuQafILNjWHZ%2FsVetRhDobafy8SFq1zkUlC%2B7otRtfyHA4WJJ9yXD7yATkS31OIvnThnmOD8jctNFLsoIN6XwypU1KOIkm19LD%2Bt0pbFYbUGo0uQymboUvT%2FGKsoNyjnGaunTpbpD5bk4sknO5M74kBu6UbUwhj5DcbdW09QDaAZ%2F6mZVfrDehuc3usTU3bVln2fxirHCgMXxNZJLG30K3SOpfngk07P30uHdnbUoVzPEjPaBQ8KK4WHN%2F919GGvEFbSnfjLc7j%2Bb12tUoe3GLUH7qcNMx1H1JnVSv1Y0nffTf3Vvsf5HU8pOqi7OT3pkIDH%2Fg0E4xQQldf9u111xDcgoRmVUoU2EXHDRlefFDaA%2FmGAw8%2Fv0wwY6pgGbA%2BDiZKrpgv9rX8tqECJm7ossdNHSxoIKYkUvisxHv0MfWVn%2Fgq1H1L4oM0RDz6Vd%2BEwRL3wbAQeKxemONc6AelWcKJ7zAk5XGapezl5bcvEAR9Ks4ELeLL6eqRTMl9hRxOJKnDlW70fB58UgEBOOMR3gyOfdNiFRV%2BkuA4RCqgpmKXhHWmXzoaWSGQCG55dcKtL%2Bx%2F8hwtfV%2FdLzLhdFrjhFwmWQ&X-Amz-Signature=2872d110138c291634fcaed6660c1124f7163c57c9e342cf51c38cb0a0abf231&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MKRHEZF%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHdUMn%2FxQbicRSw0yX9KKV6LZvGjV%2BYKrtPRMCaWIKpPAiB1it0xYdA7diU%2BM3CXDK10hx8BKhTTNcT4CpmY%2Bze2BCqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeuzhXC8FaWjTmyexKtwDmHXON5xPtg1LsaUjXud9RY0HQ5mtZ8BID9z2a%2BvBh5F1D4UHA1vzx86yeik14iZYqN1503rCkmJ4Wg0B8qo79subZcxsdH96lKq2xHbOo8w9yJDLCwi772qUcvQRWEZU%2BsImM9GlUQxNqQ%2F%2F9vM4l7TCkNvsP0B61PUjt05D5A5q0rh2aUKJLedFreLDNjoKwRaYxJZgPDTxg8VS6x%2FzUTMwvrVvAYc4OJMX6a2MPmsMMIwWBj9ttbNYLWgqP8sn4DNMMQ4oApOpuQafILNjWHZ%2FsVetRhDobafy8SFq1zkUlC%2B7otRtfyHA4WJJ9yXD7yATkS31OIvnThnmOD8jctNFLsoIN6XwypU1KOIkm19LD%2Bt0pbFYbUGo0uQymboUvT%2FGKsoNyjnGaunTpbpD5bk4sknO5M74kBu6UbUwhj5DcbdW09QDaAZ%2F6mZVfrDehuc3usTU3bVln2fxirHCgMXxNZJLG30K3SOpfngk07P30uHdnbUoVzPEjPaBQ8KK4WHN%2F919GGvEFbSnfjLc7j%2Bb12tUoe3GLUH7qcNMx1H1JnVSv1Y0nffTf3Vvsf5HU8pOqi7OT3pkIDH%2Fg0E4xQQldf9u111xDcgoRmVUoU2EXHDRlefFDaA%2FmGAw8%2Fv0wwY6pgGbA%2BDiZKrpgv9rX8tqECJm7ossdNHSxoIKYkUvisxHv0MfWVn%2Fgq1H1L4oM0RDz6Vd%2BEwRL3wbAQeKxemONc6AelWcKJ7zAk5XGapezl5bcvEAR9Ks4ELeLL6eqRTMl9hRxOJKnDlW70fB58UgEBOOMR3gyOfdNiFRV%2BkuA4RCqgpmKXhHWmXzoaWSGQCG55dcKtL%2Bx%2F8hwtfV%2FdLzLhdFrjhFwmWQ&X-Amz-Signature=2015db222b0ec125d15f6a35198253867e6e3c13a012fba6694dc9f717d257d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
