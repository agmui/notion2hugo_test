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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOGUEDPK%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T032642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCICZqWJVot6lfMljwtIFG8M8gOwRL2ZNfP%2BTB8uD34M3NAiEA2ODfU5nelTyWFfW6QNBI2IozVmi6GdLdG34%2FL1EMypYqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7%2BzPddxk1B%2FZlLaCrcAzt%2Fsx2ecefQTAYjWQ75Rcz9BlJq8lBijsASI5EMJ%2BoAyP0%2BlTkbT%2F3TW7cMYMpj2YvjLVLp%2Fgwh4G4ZUvbAbuUOsh7DnxWoU1gCdLWynS8jrGmJaoturUD8iihcpYznmG9BdClcZ%2Bx0wXUXil9aUZ6tgyL1zP%2FuKZeLlsNi%2B6hHSXoJuEtTLRKNNfF83NSaNrNvK1apwbtCqVguQpqx1XyLGQUNHKF%2BZFDhdemfTW4XJxwcGibQxrX4qnMuewf2vy2Uk51vf%2FW%2FS2ahBKL%2FLjIpcUoQ%2BPm2cW6%2FiZ8uVgzhnQU9oTk%2Fmqlgv9N3fV%2BW5mkyZ1%2BCkDri5TGroI96zELAlhabsS910dI2Gqo0oEes2QC66AYkqd6eDXN0yu87G1FMYvY2tQbmTnpLQUXDCE3Dk2OfXEIJ4h1KKNeVftM%2BsK34XFjyM4k56VP0rOPKa02uYlcGInB9i5T2hNnwjVIlQOAHsdXRcOyMw95tT0XFZBf0eF6sTLSEK4UkLHWFgQQprANx0sdHzasoQC7HUBxBvid88KWIWpwX62N8IcUZJP69bfU4wLxfz6vlpaKQ6CgzMg6eeyUR8yDban7ej%2FhOmoCNAa2tfhsT9rIbO3bDh8xX4XGK2HXh0tuYMNLd3L8GOqUB%2Bjr4mZ%2FZTolmlkDtLET8kjVmp08gkgvUTVYSdGfqp732rNOwN6M63E65WxrAb2RwlA7sweRP2vck%2B7tQ9zmL%2BQqDcFXNsxo%2BGlmazpiECfZfXMT7pijmUg9CHg3iGWRZiwJcN%2BLn2jzKsgvDQj7XrbA6Ep%2Fz%2B4GPje4fLD0fedYybxwXF2FWyC7WCRtMhYLtPqGSBVzWUx7lF3D1IvAoJ2Uuxymm&X-Amz-Signature=75618dec493db44d16ea771fde38514d81ae2d7cf2a0bd58c2bf6bbedd0a7923&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOGUEDPK%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T032642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCICZqWJVot6lfMljwtIFG8M8gOwRL2ZNfP%2BTB8uD34M3NAiEA2ODfU5nelTyWFfW6QNBI2IozVmi6GdLdG34%2FL1EMypYqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7%2BzPddxk1B%2FZlLaCrcAzt%2Fsx2ecefQTAYjWQ75Rcz9BlJq8lBijsASI5EMJ%2BoAyP0%2BlTkbT%2F3TW7cMYMpj2YvjLVLp%2Fgwh4G4ZUvbAbuUOsh7DnxWoU1gCdLWynS8jrGmJaoturUD8iihcpYznmG9BdClcZ%2Bx0wXUXil9aUZ6tgyL1zP%2FuKZeLlsNi%2B6hHSXoJuEtTLRKNNfF83NSaNrNvK1apwbtCqVguQpqx1XyLGQUNHKF%2BZFDhdemfTW4XJxwcGibQxrX4qnMuewf2vy2Uk51vf%2FW%2FS2ahBKL%2FLjIpcUoQ%2BPm2cW6%2FiZ8uVgzhnQU9oTk%2Fmqlgv9N3fV%2BW5mkyZ1%2BCkDri5TGroI96zELAlhabsS910dI2Gqo0oEes2QC66AYkqd6eDXN0yu87G1FMYvY2tQbmTnpLQUXDCE3Dk2OfXEIJ4h1KKNeVftM%2BsK34XFjyM4k56VP0rOPKa02uYlcGInB9i5T2hNnwjVIlQOAHsdXRcOyMw95tT0XFZBf0eF6sTLSEK4UkLHWFgQQprANx0sdHzasoQC7HUBxBvid88KWIWpwX62N8IcUZJP69bfU4wLxfz6vlpaKQ6CgzMg6eeyUR8yDban7ej%2FhOmoCNAa2tfhsT9rIbO3bDh8xX4XGK2HXh0tuYMNLd3L8GOqUB%2Bjr4mZ%2FZTolmlkDtLET8kjVmp08gkgvUTVYSdGfqp732rNOwN6M63E65WxrAb2RwlA7sweRP2vck%2B7tQ9zmL%2BQqDcFXNsxo%2BGlmazpiECfZfXMT7pijmUg9CHg3iGWRZiwJcN%2BLn2jzKsgvDQj7XrbA6Ep%2Fz%2B4GPje4fLD0fedYybxwXF2FWyC7WCRtMhYLtPqGSBVzWUx7lF3D1IvAoJ2Uuxymm&X-Amz-Signature=784f5e163033012dae1dcb12e86742e202d99c45720924bd5352a6f600c1bcbb&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOGUEDPK%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T032642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCICZqWJVot6lfMljwtIFG8M8gOwRL2ZNfP%2BTB8uD34M3NAiEA2ODfU5nelTyWFfW6QNBI2IozVmi6GdLdG34%2FL1EMypYqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7%2BzPddxk1B%2FZlLaCrcAzt%2Fsx2ecefQTAYjWQ75Rcz9BlJq8lBijsASI5EMJ%2BoAyP0%2BlTkbT%2F3TW7cMYMpj2YvjLVLp%2Fgwh4G4ZUvbAbuUOsh7DnxWoU1gCdLWynS8jrGmJaoturUD8iihcpYznmG9BdClcZ%2Bx0wXUXil9aUZ6tgyL1zP%2FuKZeLlsNi%2B6hHSXoJuEtTLRKNNfF83NSaNrNvK1apwbtCqVguQpqx1XyLGQUNHKF%2BZFDhdemfTW4XJxwcGibQxrX4qnMuewf2vy2Uk51vf%2FW%2FS2ahBKL%2FLjIpcUoQ%2BPm2cW6%2FiZ8uVgzhnQU9oTk%2Fmqlgv9N3fV%2BW5mkyZ1%2BCkDri5TGroI96zELAlhabsS910dI2Gqo0oEes2QC66AYkqd6eDXN0yu87G1FMYvY2tQbmTnpLQUXDCE3Dk2OfXEIJ4h1KKNeVftM%2BsK34XFjyM4k56VP0rOPKa02uYlcGInB9i5T2hNnwjVIlQOAHsdXRcOyMw95tT0XFZBf0eF6sTLSEK4UkLHWFgQQprANx0sdHzasoQC7HUBxBvid88KWIWpwX62N8IcUZJP69bfU4wLxfz6vlpaKQ6CgzMg6eeyUR8yDban7ej%2FhOmoCNAa2tfhsT9rIbO3bDh8xX4XGK2HXh0tuYMNLd3L8GOqUB%2Bjr4mZ%2FZTolmlkDtLET8kjVmp08gkgvUTVYSdGfqp732rNOwN6M63E65WxrAb2RwlA7sweRP2vck%2B7tQ9zmL%2BQqDcFXNsxo%2BGlmazpiECfZfXMT7pijmUg9CHg3iGWRZiwJcN%2BLn2jzKsgvDQj7XrbA6Ep%2Fz%2B4GPje4fLD0fedYybxwXF2FWyC7WCRtMhYLtPqGSBVzWUx7lF3D1IvAoJ2Uuxymm&X-Amz-Signature=3d3bdbe190bdcdbb738e36a3c96d06405c243ed00bab3d00ad91baf1ebed3bec&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOGUEDPK%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T032642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCICZqWJVot6lfMljwtIFG8M8gOwRL2ZNfP%2BTB8uD34M3NAiEA2ODfU5nelTyWFfW6QNBI2IozVmi6GdLdG34%2FL1EMypYqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7%2BzPddxk1B%2FZlLaCrcAzt%2Fsx2ecefQTAYjWQ75Rcz9BlJq8lBijsASI5EMJ%2BoAyP0%2BlTkbT%2F3TW7cMYMpj2YvjLVLp%2Fgwh4G4ZUvbAbuUOsh7DnxWoU1gCdLWynS8jrGmJaoturUD8iihcpYznmG9BdClcZ%2Bx0wXUXil9aUZ6tgyL1zP%2FuKZeLlsNi%2B6hHSXoJuEtTLRKNNfF83NSaNrNvK1apwbtCqVguQpqx1XyLGQUNHKF%2BZFDhdemfTW4XJxwcGibQxrX4qnMuewf2vy2Uk51vf%2FW%2FS2ahBKL%2FLjIpcUoQ%2BPm2cW6%2FiZ8uVgzhnQU9oTk%2Fmqlgv9N3fV%2BW5mkyZ1%2BCkDri5TGroI96zELAlhabsS910dI2Gqo0oEes2QC66AYkqd6eDXN0yu87G1FMYvY2tQbmTnpLQUXDCE3Dk2OfXEIJ4h1KKNeVftM%2BsK34XFjyM4k56VP0rOPKa02uYlcGInB9i5T2hNnwjVIlQOAHsdXRcOyMw95tT0XFZBf0eF6sTLSEK4UkLHWFgQQprANx0sdHzasoQC7HUBxBvid88KWIWpwX62N8IcUZJP69bfU4wLxfz6vlpaKQ6CgzMg6eeyUR8yDban7ej%2FhOmoCNAa2tfhsT9rIbO3bDh8xX4XGK2HXh0tuYMNLd3L8GOqUB%2Bjr4mZ%2FZTolmlkDtLET8kjVmp08gkgvUTVYSdGfqp732rNOwN6M63E65WxrAb2RwlA7sweRP2vck%2B7tQ9zmL%2BQqDcFXNsxo%2BGlmazpiECfZfXMT7pijmUg9CHg3iGWRZiwJcN%2BLn2jzKsgvDQj7XrbA6Ep%2Fz%2B4GPje4fLD0fedYybxwXF2FWyC7WCRtMhYLtPqGSBVzWUx7lF3D1IvAoJ2Uuxymm&X-Amz-Signature=2a75374dcc42a2db725941e87845ca03cb656c90df6f8ca78ef04e6889d633ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOGUEDPK%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T032642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCICZqWJVot6lfMljwtIFG8M8gOwRL2ZNfP%2BTB8uD34M3NAiEA2ODfU5nelTyWFfW6QNBI2IozVmi6GdLdG34%2FL1EMypYqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7%2BzPddxk1B%2FZlLaCrcAzt%2Fsx2ecefQTAYjWQ75Rcz9BlJq8lBijsASI5EMJ%2BoAyP0%2BlTkbT%2F3TW7cMYMpj2YvjLVLp%2Fgwh4G4ZUvbAbuUOsh7DnxWoU1gCdLWynS8jrGmJaoturUD8iihcpYznmG9BdClcZ%2Bx0wXUXil9aUZ6tgyL1zP%2FuKZeLlsNi%2B6hHSXoJuEtTLRKNNfF83NSaNrNvK1apwbtCqVguQpqx1XyLGQUNHKF%2BZFDhdemfTW4XJxwcGibQxrX4qnMuewf2vy2Uk51vf%2FW%2FS2ahBKL%2FLjIpcUoQ%2BPm2cW6%2FiZ8uVgzhnQU9oTk%2Fmqlgv9N3fV%2BW5mkyZ1%2BCkDri5TGroI96zELAlhabsS910dI2Gqo0oEes2QC66AYkqd6eDXN0yu87G1FMYvY2tQbmTnpLQUXDCE3Dk2OfXEIJ4h1KKNeVftM%2BsK34XFjyM4k56VP0rOPKa02uYlcGInB9i5T2hNnwjVIlQOAHsdXRcOyMw95tT0XFZBf0eF6sTLSEK4UkLHWFgQQprANx0sdHzasoQC7HUBxBvid88KWIWpwX62N8IcUZJP69bfU4wLxfz6vlpaKQ6CgzMg6eeyUR8yDban7ej%2FhOmoCNAa2tfhsT9rIbO3bDh8xX4XGK2HXh0tuYMNLd3L8GOqUB%2Bjr4mZ%2FZTolmlkDtLET8kjVmp08gkgvUTVYSdGfqp732rNOwN6M63E65WxrAb2RwlA7sweRP2vck%2B7tQ9zmL%2BQqDcFXNsxo%2BGlmazpiECfZfXMT7pijmUg9CHg3iGWRZiwJcN%2BLn2jzKsgvDQj7XrbA6Ep%2Fz%2B4GPje4fLD0fedYybxwXF2FWyC7WCRtMhYLtPqGSBVzWUx7lF3D1IvAoJ2Uuxymm&X-Amz-Signature=a763fea3a15ac68e5686a31c5e4ec87e0cfbe390e5f1d687557bcb636e59a243&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOGUEDPK%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T032642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCICZqWJVot6lfMljwtIFG8M8gOwRL2ZNfP%2BTB8uD34M3NAiEA2ODfU5nelTyWFfW6QNBI2IozVmi6GdLdG34%2FL1EMypYqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7%2BzPddxk1B%2FZlLaCrcAzt%2Fsx2ecefQTAYjWQ75Rcz9BlJq8lBijsASI5EMJ%2BoAyP0%2BlTkbT%2F3TW7cMYMpj2YvjLVLp%2Fgwh4G4ZUvbAbuUOsh7DnxWoU1gCdLWynS8jrGmJaoturUD8iihcpYznmG9BdClcZ%2Bx0wXUXil9aUZ6tgyL1zP%2FuKZeLlsNi%2B6hHSXoJuEtTLRKNNfF83NSaNrNvK1apwbtCqVguQpqx1XyLGQUNHKF%2BZFDhdemfTW4XJxwcGibQxrX4qnMuewf2vy2Uk51vf%2FW%2FS2ahBKL%2FLjIpcUoQ%2BPm2cW6%2FiZ8uVgzhnQU9oTk%2Fmqlgv9N3fV%2BW5mkyZ1%2BCkDri5TGroI96zELAlhabsS910dI2Gqo0oEes2QC66AYkqd6eDXN0yu87G1FMYvY2tQbmTnpLQUXDCE3Dk2OfXEIJ4h1KKNeVftM%2BsK34XFjyM4k56VP0rOPKa02uYlcGInB9i5T2hNnwjVIlQOAHsdXRcOyMw95tT0XFZBf0eF6sTLSEK4UkLHWFgQQprANx0sdHzasoQC7HUBxBvid88KWIWpwX62N8IcUZJP69bfU4wLxfz6vlpaKQ6CgzMg6eeyUR8yDban7ej%2FhOmoCNAa2tfhsT9rIbO3bDh8xX4XGK2HXh0tuYMNLd3L8GOqUB%2Bjr4mZ%2FZTolmlkDtLET8kjVmp08gkgvUTVYSdGfqp732rNOwN6M63E65WxrAb2RwlA7sweRP2vck%2B7tQ9zmL%2BQqDcFXNsxo%2BGlmazpiECfZfXMT7pijmUg9CHg3iGWRZiwJcN%2BLn2jzKsgvDQj7XrbA6Ep%2Fz%2B4GPje4fLD0fedYybxwXF2FWyC7WCRtMhYLtPqGSBVzWUx7lF3D1IvAoJ2Uuxymm&X-Amz-Signature=78559e4c7859cfb8382f6cfed3fa4d36cda82bdbb8d577705ef5699134b88b11&X-Amz-SignedHeaders=host&x-id=GetObject)
