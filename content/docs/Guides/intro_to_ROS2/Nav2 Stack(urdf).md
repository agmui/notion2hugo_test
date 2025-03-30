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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I4E5JBY%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T004223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDjX%2B0dwcAwd%2BaFi%2Fex0xsqBmJ8EHoaltxOSQgBrWvK9QIhAMxlpVoOexgkDFN%2FL%2FtWszSdMAfgcPNMDkcNMjRuXmkpKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCkbLQApNTmOgIIuwq3AMn1re1NO7P4cw1ZW5RlYPQZ6G3nAksKuSDNyGCDGtTGf9DFsyr42XcNDx76gHGPiV%2BefyZC3Lc0eZvlH1RlDf5%2Bx0JnttjhoPY7JF%2Ft7OGCDu0LjIV0n6pwPqKvb2a4Qi01P9Dd9KStZ0%2BT%2B%2Ft6H1mdHrgH2CaDPF8Gi0833OC5e%2FVE94GS5LNbZrBwhqhz3UkO1E68tam8eHYW4gg628FeQuVZa8Wi5mwr4BK00vA85EqXYbLv8MmWqdHVVlL5qSVw1qE6fAooJ1N4nDFVEMddKck7QirUj%2BnTOks2KwGIOkVzCiwqiO1kAMqe%2BlfRv%2FZzrgoYU5IxEqhwIGG%2FfHztJXTjYNmJchrF6DmpR5%2FilR465XiFGDe7%2Fr62wOMqJ%2BM66K0DhNo4cuZ0F7afHUJLcjiaXuK1ggYJsIiN6uAVNPXbQbID07bkpCBQoj5LqxOX9q%2Bxbz2ij4tqeMDlSRCzhZco2o24xmAvoUj4C1XllHrf%2BLfEbCsd0yb4UaAuYEx5wgqJ53KL60NntzmoLQ5KjZ84qa0huH1vxshGXhGvRzcBPzTQVIpaa8v8Bh8qfwg64FihzTzedipFYnxyVjX610R5XXpS8QhR453S3CS%2BHPpE2yMFgh5LOOfvTDA%2FqG%2FBjqkAaG1QOIbcd6yXqyNdYG6ZD4ErDirSwuMGdoMQ5vHXVdBQahWij7Y6Cb5zsm3jbD0wR4AN4buAlukiml5UTAyRNE9q6048qK1Le%2BDdn3YZiM6ZBfQSwXJSgwVS7OwN%2B9pdHxGzXs02Xbcoe%2FZ2xJ4%2BR%2BGAjX9uPEW%2FOr0hGeCmfvMaYdjxcFDAQ3jySaVOoyGQTTb53OGzZE1uXU09pTbfyUHI4C4&X-Amz-Signature=140b6a2d088e6e2ce401324c096c90b4fa499ca21ac288e5e40ec6bed0ea4e62&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I4E5JBY%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T004223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDjX%2B0dwcAwd%2BaFi%2Fex0xsqBmJ8EHoaltxOSQgBrWvK9QIhAMxlpVoOexgkDFN%2FL%2FtWszSdMAfgcPNMDkcNMjRuXmkpKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCkbLQApNTmOgIIuwq3AMn1re1NO7P4cw1ZW5RlYPQZ6G3nAksKuSDNyGCDGtTGf9DFsyr42XcNDx76gHGPiV%2BefyZC3Lc0eZvlH1RlDf5%2Bx0JnttjhoPY7JF%2Ft7OGCDu0LjIV0n6pwPqKvb2a4Qi01P9Dd9KStZ0%2BT%2B%2Ft6H1mdHrgH2CaDPF8Gi0833OC5e%2FVE94GS5LNbZrBwhqhz3UkO1E68tam8eHYW4gg628FeQuVZa8Wi5mwr4BK00vA85EqXYbLv8MmWqdHVVlL5qSVw1qE6fAooJ1N4nDFVEMddKck7QirUj%2BnTOks2KwGIOkVzCiwqiO1kAMqe%2BlfRv%2FZzrgoYU5IxEqhwIGG%2FfHztJXTjYNmJchrF6DmpR5%2FilR465XiFGDe7%2Fr62wOMqJ%2BM66K0DhNo4cuZ0F7afHUJLcjiaXuK1ggYJsIiN6uAVNPXbQbID07bkpCBQoj5LqxOX9q%2Bxbz2ij4tqeMDlSRCzhZco2o24xmAvoUj4C1XllHrf%2BLfEbCsd0yb4UaAuYEx5wgqJ53KL60NntzmoLQ5KjZ84qa0huH1vxshGXhGvRzcBPzTQVIpaa8v8Bh8qfwg64FihzTzedipFYnxyVjX610R5XXpS8QhR453S3CS%2BHPpE2yMFgh5LOOfvTDA%2FqG%2FBjqkAaG1QOIbcd6yXqyNdYG6ZD4ErDirSwuMGdoMQ5vHXVdBQahWij7Y6Cb5zsm3jbD0wR4AN4buAlukiml5UTAyRNE9q6048qK1Le%2BDdn3YZiM6ZBfQSwXJSgwVS7OwN%2B9pdHxGzXs02Xbcoe%2FZ2xJ4%2BR%2BGAjX9uPEW%2FOr0hGeCmfvMaYdjxcFDAQ3jySaVOoyGQTTb53OGzZE1uXU09pTbfyUHI4C4&X-Amz-Signature=e19971ef9d1def5b6fb1174f66235893c1b615593d974157de96d5df9b1f729f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I4E5JBY%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T004223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDjX%2B0dwcAwd%2BaFi%2Fex0xsqBmJ8EHoaltxOSQgBrWvK9QIhAMxlpVoOexgkDFN%2FL%2FtWszSdMAfgcPNMDkcNMjRuXmkpKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCkbLQApNTmOgIIuwq3AMn1re1NO7P4cw1ZW5RlYPQZ6G3nAksKuSDNyGCDGtTGf9DFsyr42XcNDx76gHGPiV%2BefyZC3Lc0eZvlH1RlDf5%2Bx0JnttjhoPY7JF%2Ft7OGCDu0LjIV0n6pwPqKvb2a4Qi01P9Dd9KStZ0%2BT%2B%2Ft6H1mdHrgH2CaDPF8Gi0833OC5e%2FVE94GS5LNbZrBwhqhz3UkO1E68tam8eHYW4gg628FeQuVZa8Wi5mwr4BK00vA85EqXYbLv8MmWqdHVVlL5qSVw1qE6fAooJ1N4nDFVEMddKck7QirUj%2BnTOks2KwGIOkVzCiwqiO1kAMqe%2BlfRv%2FZzrgoYU5IxEqhwIGG%2FfHztJXTjYNmJchrF6DmpR5%2FilR465XiFGDe7%2Fr62wOMqJ%2BM66K0DhNo4cuZ0F7afHUJLcjiaXuK1ggYJsIiN6uAVNPXbQbID07bkpCBQoj5LqxOX9q%2Bxbz2ij4tqeMDlSRCzhZco2o24xmAvoUj4C1XllHrf%2BLfEbCsd0yb4UaAuYEx5wgqJ53KL60NntzmoLQ5KjZ84qa0huH1vxshGXhGvRzcBPzTQVIpaa8v8Bh8qfwg64FihzTzedipFYnxyVjX610R5XXpS8QhR453S3CS%2BHPpE2yMFgh5LOOfvTDA%2FqG%2FBjqkAaG1QOIbcd6yXqyNdYG6ZD4ErDirSwuMGdoMQ5vHXVdBQahWij7Y6Cb5zsm3jbD0wR4AN4buAlukiml5UTAyRNE9q6048qK1Le%2BDdn3YZiM6ZBfQSwXJSgwVS7OwN%2B9pdHxGzXs02Xbcoe%2FZ2xJ4%2BR%2BGAjX9uPEW%2FOr0hGeCmfvMaYdjxcFDAQ3jySaVOoyGQTTb53OGzZE1uXU09pTbfyUHI4C4&X-Amz-Signature=55a5bf408d6e2cc1094b886164ebe805165beb96ba983d31dd1072abbebb1dd1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I4E5JBY%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T004223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDjX%2B0dwcAwd%2BaFi%2Fex0xsqBmJ8EHoaltxOSQgBrWvK9QIhAMxlpVoOexgkDFN%2FL%2FtWszSdMAfgcPNMDkcNMjRuXmkpKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCkbLQApNTmOgIIuwq3AMn1re1NO7P4cw1ZW5RlYPQZ6G3nAksKuSDNyGCDGtTGf9DFsyr42XcNDx76gHGPiV%2BefyZC3Lc0eZvlH1RlDf5%2Bx0JnttjhoPY7JF%2Ft7OGCDu0LjIV0n6pwPqKvb2a4Qi01P9Dd9KStZ0%2BT%2B%2Ft6H1mdHrgH2CaDPF8Gi0833OC5e%2FVE94GS5LNbZrBwhqhz3UkO1E68tam8eHYW4gg628FeQuVZa8Wi5mwr4BK00vA85EqXYbLv8MmWqdHVVlL5qSVw1qE6fAooJ1N4nDFVEMddKck7QirUj%2BnTOks2KwGIOkVzCiwqiO1kAMqe%2BlfRv%2FZzrgoYU5IxEqhwIGG%2FfHztJXTjYNmJchrF6DmpR5%2FilR465XiFGDe7%2Fr62wOMqJ%2BM66K0DhNo4cuZ0F7afHUJLcjiaXuK1ggYJsIiN6uAVNPXbQbID07bkpCBQoj5LqxOX9q%2Bxbz2ij4tqeMDlSRCzhZco2o24xmAvoUj4C1XllHrf%2BLfEbCsd0yb4UaAuYEx5wgqJ53KL60NntzmoLQ5KjZ84qa0huH1vxshGXhGvRzcBPzTQVIpaa8v8Bh8qfwg64FihzTzedipFYnxyVjX610R5XXpS8QhR453S3CS%2BHPpE2yMFgh5LOOfvTDA%2FqG%2FBjqkAaG1QOIbcd6yXqyNdYG6ZD4ErDirSwuMGdoMQ5vHXVdBQahWij7Y6Cb5zsm3jbD0wR4AN4buAlukiml5UTAyRNE9q6048qK1Le%2BDdn3YZiM6ZBfQSwXJSgwVS7OwN%2B9pdHxGzXs02Xbcoe%2FZ2xJ4%2BR%2BGAjX9uPEW%2FOr0hGeCmfvMaYdjxcFDAQ3jySaVOoyGQTTb53OGzZE1uXU09pTbfyUHI4C4&X-Amz-Signature=36865f89fc5bde9c27bdbbec652eeb1c6edd8dddabc6c81d608ba6d80d9f8bb0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I4E5JBY%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T004223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDjX%2B0dwcAwd%2BaFi%2Fex0xsqBmJ8EHoaltxOSQgBrWvK9QIhAMxlpVoOexgkDFN%2FL%2FtWszSdMAfgcPNMDkcNMjRuXmkpKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCkbLQApNTmOgIIuwq3AMn1re1NO7P4cw1ZW5RlYPQZ6G3nAksKuSDNyGCDGtTGf9DFsyr42XcNDx76gHGPiV%2BefyZC3Lc0eZvlH1RlDf5%2Bx0JnttjhoPY7JF%2Ft7OGCDu0LjIV0n6pwPqKvb2a4Qi01P9Dd9KStZ0%2BT%2B%2Ft6H1mdHrgH2CaDPF8Gi0833OC5e%2FVE94GS5LNbZrBwhqhz3UkO1E68tam8eHYW4gg628FeQuVZa8Wi5mwr4BK00vA85EqXYbLv8MmWqdHVVlL5qSVw1qE6fAooJ1N4nDFVEMddKck7QirUj%2BnTOks2KwGIOkVzCiwqiO1kAMqe%2BlfRv%2FZzrgoYU5IxEqhwIGG%2FfHztJXTjYNmJchrF6DmpR5%2FilR465XiFGDe7%2Fr62wOMqJ%2BM66K0DhNo4cuZ0F7afHUJLcjiaXuK1ggYJsIiN6uAVNPXbQbID07bkpCBQoj5LqxOX9q%2Bxbz2ij4tqeMDlSRCzhZco2o24xmAvoUj4C1XllHrf%2BLfEbCsd0yb4UaAuYEx5wgqJ53KL60NntzmoLQ5KjZ84qa0huH1vxshGXhGvRzcBPzTQVIpaa8v8Bh8qfwg64FihzTzedipFYnxyVjX610R5XXpS8QhR453S3CS%2BHPpE2yMFgh5LOOfvTDA%2FqG%2FBjqkAaG1QOIbcd6yXqyNdYG6ZD4ErDirSwuMGdoMQ5vHXVdBQahWij7Y6Cb5zsm3jbD0wR4AN4buAlukiml5UTAyRNE9q6048qK1Le%2BDdn3YZiM6ZBfQSwXJSgwVS7OwN%2B9pdHxGzXs02Xbcoe%2FZ2xJ4%2BR%2BGAjX9uPEW%2FOr0hGeCmfvMaYdjxcFDAQ3jySaVOoyGQTTb53OGzZE1uXU09pTbfyUHI4C4&X-Amz-Signature=e70bb648673dd927f5ecd71952de130c5800e1a9eabb02a514c3810f859a5484&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I4E5JBY%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T004223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDjX%2B0dwcAwd%2BaFi%2Fex0xsqBmJ8EHoaltxOSQgBrWvK9QIhAMxlpVoOexgkDFN%2FL%2FtWszSdMAfgcPNMDkcNMjRuXmkpKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyCkbLQApNTmOgIIuwq3AMn1re1NO7P4cw1ZW5RlYPQZ6G3nAksKuSDNyGCDGtTGf9DFsyr42XcNDx76gHGPiV%2BefyZC3Lc0eZvlH1RlDf5%2Bx0JnttjhoPY7JF%2Ft7OGCDu0LjIV0n6pwPqKvb2a4Qi01P9Dd9KStZ0%2BT%2B%2Ft6H1mdHrgH2CaDPF8Gi0833OC5e%2FVE94GS5LNbZrBwhqhz3UkO1E68tam8eHYW4gg628FeQuVZa8Wi5mwr4BK00vA85EqXYbLv8MmWqdHVVlL5qSVw1qE6fAooJ1N4nDFVEMddKck7QirUj%2BnTOks2KwGIOkVzCiwqiO1kAMqe%2BlfRv%2FZzrgoYU5IxEqhwIGG%2FfHztJXTjYNmJchrF6DmpR5%2FilR465XiFGDe7%2Fr62wOMqJ%2BM66K0DhNo4cuZ0F7afHUJLcjiaXuK1ggYJsIiN6uAVNPXbQbID07bkpCBQoj5LqxOX9q%2Bxbz2ij4tqeMDlSRCzhZco2o24xmAvoUj4C1XllHrf%2BLfEbCsd0yb4UaAuYEx5wgqJ53KL60NntzmoLQ5KjZ84qa0huH1vxshGXhGvRzcBPzTQVIpaa8v8Bh8qfwg64FihzTzedipFYnxyVjX610R5XXpS8QhR453S3CS%2BHPpE2yMFgh5LOOfvTDA%2FqG%2FBjqkAaG1QOIbcd6yXqyNdYG6ZD4ErDirSwuMGdoMQ5vHXVdBQahWij7Y6Cb5zsm3jbD0wR4AN4buAlukiml5UTAyRNE9q6048qK1Le%2BDdn3YZiM6ZBfQSwXJSgwVS7OwN%2B9pdHxGzXs02Xbcoe%2FZ2xJ4%2BR%2BGAjX9uPEW%2FOr0hGeCmfvMaYdjxcFDAQ3jySaVOoyGQTTb53OGzZE1uXU09pTbfyUHI4C4&X-Amz-Signature=c30a3cd635ce9248d585d031d695fe7ea7012ee7bd2f8b644c00861de1def9ab&X-Amz-SignedHeaders=host&x-id=GetObject)
