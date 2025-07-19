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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDTSJ4K2%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T070923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICH1uCzZpbGeqSOTbPbmgOQ6AmuoGRoWbR52rufkIJo8AiBzFinIO%2FoPPLSwEPn9%2FfX6N%2BJqlt9LeK%2FHEFSbnYy9HCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlfIL5WdFPTWB5YH8KtwDQYG6V1F9ValfJNoM%2Be6rNTGJqoitO92W%2BagAmjctlNmtwCyUD1EMqzI3O2AyRmgPpyO4J%2FXOn%2BcZR5Ox36tclWpCixydkOlsAukwypZKAhKpYZo8XqNyL7hfk%2FXY5H1HDcloA80chWsyjJ8pG1J%2BgEgtvqQAXiCEu3cKpgTph%2FrPvcCHPcBmPr2%2FkBKsys2nZkzRoPSoKQyFCOcgUiNjyqYJ6M50mxY%2BgLjqhbwjTfq5cQn45Kbs6KAwPld9wwkd61BW0JSU23ipNuQYp%2BN1S%2BzAtv7tJMPTQyADuzqjG%2BGRbCsvK7PnXzj9YAJS66az3dfOTFEXIp%2BXbTPBQdTcUENdejF1zvIth6VHaOr5bFN3Chpztoo%2FOsxg133NBXVzY%2FuVpMeXnna5r9FhiVdb2Lsyiitzkg6a9wvk3kji%2FQZK53ycKfbocnIkoaDqumdCi3HdWbUbaH%2BkbJ3cxs6JxmX1IEAdwZiPolRttsjVHgeIzpoLHHaIPyhSszrTEn%2FtYZQsDrUvo4fCdeK4WBCp5Uy0ppDTUVjRCBvlXQ5LT3KRXqZu2jbzHLjClQXFZFM76KQnK8dc8Tzaa43hwv0HUwwwe65hjoRh0H3gxwxB0%2Fp%2FuhdrjwGoXdvkjFIwr8XswwY6pgFzQMH1G9rKYg91rWajtFUCDPbddcr8l2ErGK3lECQXa2pWG8Hv0qLya0MVcjZ3aza%2BqvPNfe6qkdV8Dy75VlKurcPLu05%2FlbEkLNtoWngkwlFZYjPnRTJlGGy80YKk8%2FEiA48JcRrc6sus1dxZf02HUOJL3KDL4BR908IYV8tDEH%2FvOz669dWI41HMdip9vDaQYfQQa%2BAv%2F2GaIsAJyz6hbZ4BC9m7&X-Amz-Signature=4f0c9c854dd5eb1557065ec24a70667a32911a1775296c6bc44289cee9bdf44a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDTSJ4K2%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T070923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICH1uCzZpbGeqSOTbPbmgOQ6AmuoGRoWbR52rufkIJo8AiBzFinIO%2FoPPLSwEPn9%2FfX6N%2BJqlt9LeK%2FHEFSbnYy9HCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlfIL5WdFPTWB5YH8KtwDQYG6V1F9ValfJNoM%2Be6rNTGJqoitO92W%2BagAmjctlNmtwCyUD1EMqzI3O2AyRmgPpyO4J%2FXOn%2BcZR5Ox36tclWpCixydkOlsAukwypZKAhKpYZo8XqNyL7hfk%2FXY5H1HDcloA80chWsyjJ8pG1J%2BgEgtvqQAXiCEu3cKpgTph%2FrPvcCHPcBmPr2%2FkBKsys2nZkzRoPSoKQyFCOcgUiNjyqYJ6M50mxY%2BgLjqhbwjTfq5cQn45Kbs6KAwPld9wwkd61BW0JSU23ipNuQYp%2BN1S%2BzAtv7tJMPTQyADuzqjG%2BGRbCsvK7PnXzj9YAJS66az3dfOTFEXIp%2BXbTPBQdTcUENdejF1zvIth6VHaOr5bFN3Chpztoo%2FOsxg133NBXVzY%2FuVpMeXnna5r9FhiVdb2Lsyiitzkg6a9wvk3kji%2FQZK53ycKfbocnIkoaDqumdCi3HdWbUbaH%2BkbJ3cxs6JxmX1IEAdwZiPolRttsjVHgeIzpoLHHaIPyhSszrTEn%2FtYZQsDrUvo4fCdeK4WBCp5Uy0ppDTUVjRCBvlXQ5LT3KRXqZu2jbzHLjClQXFZFM76KQnK8dc8Tzaa43hwv0HUwwwe65hjoRh0H3gxwxB0%2Fp%2FuhdrjwGoXdvkjFIwr8XswwY6pgFzQMH1G9rKYg91rWajtFUCDPbddcr8l2ErGK3lECQXa2pWG8Hv0qLya0MVcjZ3aza%2BqvPNfe6qkdV8Dy75VlKurcPLu05%2FlbEkLNtoWngkwlFZYjPnRTJlGGy80YKk8%2FEiA48JcRrc6sus1dxZf02HUOJL3KDL4BR908IYV8tDEH%2FvOz669dWI41HMdip9vDaQYfQQa%2BAv%2F2GaIsAJyz6hbZ4BC9m7&X-Amz-Signature=7148618b6ffa16db13389464e53b7b5c2b3e09f0d14ad0535f42b077655fc7f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDTSJ4K2%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T070923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICH1uCzZpbGeqSOTbPbmgOQ6AmuoGRoWbR52rufkIJo8AiBzFinIO%2FoPPLSwEPn9%2FfX6N%2BJqlt9LeK%2FHEFSbnYy9HCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlfIL5WdFPTWB5YH8KtwDQYG6V1F9ValfJNoM%2Be6rNTGJqoitO92W%2BagAmjctlNmtwCyUD1EMqzI3O2AyRmgPpyO4J%2FXOn%2BcZR5Ox36tclWpCixydkOlsAukwypZKAhKpYZo8XqNyL7hfk%2FXY5H1HDcloA80chWsyjJ8pG1J%2BgEgtvqQAXiCEu3cKpgTph%2FrPvcCHPcBmPr2%2FkBKsys2nZkzRoPSoKQyFCOcgUiNjyqYJ6M50mxY%2BgLjqhbwjTfq5cQn45Kbs6KAwPld9wwkd61BW0JSU23ipNuQYp%2BN1S%2BzAtv7tJMPTQyADuzqjG%2BGRbCsvK7PnXzj9YAJS66az3dfOTFEXIp%2BXbTPBQdTcUENdejF1zvIth6VHaOr5bFN3Chpztoo%2FOsxg133NBXVzY%2FuVpMeXnna5r9FhiVdb2Lsyiitzkg6a9wvk3kji%2FQZK53ycKfbocnIkoaDqumdCi3HdWbUbaH%2BkbJ3cxs6JxmX1IEAdwZiPolRttsjVHgeIzpoLHHaIPyhSszrTEn%2FtYZQsDrUvo4fCdeK4WBCp5Uy0ppDTUVjRCBvlXQ5LT3KRXqZu2jbzHLjClQXFZFM76KQnK8dc8Tzaa43hwv0HUwwwe65hjoRh0H3gxwxB0%2Fp%2FuhdrjwGoXdvkjFIwr8XswwY6pgFzQMH1G9rKYg91rWajtFUCDPbddcr8l2ErGK3lECQXa2pWG8Hv0qLya0MVcjZ3aza%2BqvPNfe6qkdV8Dy75VlKurcPLu05%2FlbEkLNtoWngkwlFZYjPnRTJlGGy80YKk8%2FEiA48JcRrc6sus1dxZf02HUOJL3KDL4BR908IYV8tDEH%2FvOz669dWI41HMdip9vDaQYfQQa%2BAv%2F2GaIsAJyz6hbZ4BC9m7&X-Amz-Signature=9b3c522231db655dcbaf7178f8620e85955bc2f7864b28851dc8cff3c823075a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDTSJ4K2%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T070923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICH1uCzZpbGeqSOTbPbmgOQ6AmuoGRoWbR52rufkIJo8AiBzFinIO%2FoPPLSwEPn9%2FfX6N%2BJqlt9LeK%2FHEFSbnYy9HCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlfIL5WdFPTWB5YH8KtwDQYG6V1F9ValfJNoM%2Be6rNTGJqoitO92W%2BagAmjctlNmtwCyUD1EMqzI3O2AyRmgPpyO4J%2FXOn%2BcZR5Ox36tclWpCixydkOlsAukwypZKAhKpYZo8XqNyL7hfk%2FXY5H1HDcloA80chWsyjJ8pG1J%2BgEgtvqQAXiCEu3cKpgTph%2FrPvcCHPcBmPr2%2FkBKsys2nZkzRoPSoKQyFCOcgUiNjyqYJ6M50mxY%2BgLjqhbwjTfq5cQn45Kbs6KAwPld9wwkd61BW0JSU23ipNuQYp%2BN1S%2BzAtv7tJMPTQyADuzqjG%2BGRbCsvK7PnXzj9YAJS66az3dfOTFEXIp%2BXbTPBQdTcUENdejF1zvIth6VHaOr5bFN3Chpztoo%2FOsxg133NBXVzY%2FuVpMeXnna5r9FhiVdb2Lsyiitzkg6a9wvk3kji%2FQZK53ycKfbocnIkoaDqumdCi3HdWbUbaH%2BkbJ3cxs6JxmX1IEAdwZiPolRttsjVHgeIzpoLHHaIPyhSszrTEn%2FtYZQsDrUvo4fCdeK4WBCp5Uy0ppDTUVjRCBvlXQ5LT3KRXqZu2jbzHLjClQXFZFM76KQnK8dc8Tzaa43hwv0HUwwwe65hjoRh0H3gxwxB0%2Fp%2FuhdrjwGoXdvkjFIwr8XswwY6pgFzQMH1G9rKYg91rWajtFUCDPbddcr8l2ErGK3lECQXa2pWG8Hv0qLya0MVcjZ3aza%2BqvPNfe6qkdV8Dy75VlKurcPLu05%2FlbEkLNtoWngkwlFZYjPnRTJlGGy80YKk8%2FEiA48JcRrc6sus1dxZf02HUOJL3KDL4BR908IYV8tDEH%2FvOz669dWI41HMdip9vDaQYfQQa%2BAv%2F2GaIsAJyz6hbZ4BC9m7&X-Amz-Signature=2a6d960274adfd34f0fe692df1e1bf48bc17d61cc57da8a795d767976c107d2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDTSJ4K2%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T070923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICH1uCzZpbGeqSOTbPbmgOQ6AmuoGRoWbR52rufkIJo8AiBzFinIO%2FoPPLSwEPn9%2FfX6N%2BJqlt9LeK%2FHEFSbnYy9HCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlfIL5WdFPTWB5YH8KtwDQYG6V1F9ValfJNoM%2Be6rNTGJqoitO92W%2BagAmjctlNmtwCyUD1EMqzI3O2AyRmgPpyO4J%2FXOn%2BcZR5Ox36tclWpCixydkOlsAukwypZKAhKpYZo8XqNyL7hfk%2FXY5H1HDcloA80chWsyjJ8pG1J%2BgEgtvqQAXiCEu3cKpgTph%2FrPvcCHPcBmPr2%2FkBKsys2nZkzRoPSoKQyFCOcgUiNjyqYJ6M50mxY%2BgLjqhbwjTfq5cQn45Kbs6KAwPld9wwkd61BW0JSU23ipNuQYp%2BN1S%2BzAtv7tJMPTQyADuzqjG%2BGRbCsvK7PnXzj9YAJS66az3dfOTFEXIp%2BXbTPBQdTcUENdejF1zvIth6VHaOr5bFN3Chpztoo%2FOsxg133NBXVzY%2FuVpMeXnna5r9FhiVdb2Lsyiitzkg6a9wvk3kji%2FQZK53ycKfbocnIkoaDqumdCi3HdWbUbaH%2BkbJ3cxs6JxmX1IEAdwZiPolRttsjVHgeIzpoLHHaIPyhSszrTEn%2FtYZQsDrUvo4fCdeK4WBCp5Uy0ppDTUVjRCBvlXQ5LT3KRXqZu2jbzHLjClQXFZFM76KQnK8dc8Tzaa43hwv0HUwwwe65hjoRh0H3gxwxB0%2Fp%2FuhdrjwGoXdvkjFIwr8XswwY6pgFzQMH1G9rKYg91rWajtFUCDPbddcr8l2ErGK3lECQXa2pWG8Hv0qLya0MVcjZ3aza%2BqvPNfe6qkdV8Dy75VlKurcPLu05%2FlbEkLNtoWngkwlFZYjPnRTJlGGy80YKk8%2FEiA48JcRrc6sus1dxZf02HUOJL3KDL4BR908IYV8tDEH%2FvOz669dWI41HMdip9vDaQYfQQa%2BAv%2F2GaIsAJyz6hbZ4BC9m7&X-Amz-Signature=5f0db60683e26f1aaa8e84dd5489954cfcec0227906c463dbb0f888fdc3676b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDTSJ4K2%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T070923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICH1uCzZpbGeqSOTbPbmgOQ6AmuoGRoWbR52rufkIJo8AiBzFinIO%2FoPPLSwEPn9%2FfX6N%2BJqlt9LeK%2FHEFSbnYy9HCqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlfIL5WdFPTWB5YH8KtwDQYG6V1F9ValfJNoM%2Be6rNTGJqoitO92W%2BagAmjctlNmtwCyUD1EMqzI3O2AyRmgPpyO4J%2FXOn%2BcZR5Ox36tclWpCixydkOlsAukwypZKAhKpYZo8XqNyL7hfk%2FXY5H1HDcloA80chWsyjJ8pG1J%2BgEgtvqQAXiCEu3cKpgTph%2FrPvcCHPcBmPr2%2FkBKsys2nZkzRoPSoKQyFCOcgUiNjyqYJ6M50mxY%2BgLjqhbwjTfq5cQn45Kbs6KAwPld9wwkd61BW0JSU23ipNuQYp%2BN1S%2BzAtv7tJMPTQyADuzqjG%2BGRbCsvK7PnXzj9YAJS66az3dfOTFEXIp%2BXbTPBQdTcUENdejF1zvIth6VHaOr5bFN3Chpztoo%2FOsxg133NBXVzY%2FuVpMeXnna5r9FhiVdb2Lsyiitzkg6a9wvk3kji%2FQZK53ycKfbocnIkoaDqumdCi3HdWbUbaH%2BkbJ3cxs6JxmX1IEAdwZiPolRttsjVHgeIzpoLHHaIPyhSszrTEn%2FtYZQsDrUvo4fCdeK4WBCp5Uy0ppDTUVjRCBvlXQ5LT3KRXqZu2jbzHLjClQXFZFM76KQnK8dc8Tzaa43hwv0HUwwwe65hjoRh0H3gxwxB0%2Fp%2FuhdrjwGoXdvkjFIwr8XswwY6pgFzQMH1G9rKYg91rWajtFUCDPbddcr8l2ErGK3lECQXa2pWG8Hv0qLya0MVcjZ3aza%2BqvPNfe6qkdV8Dy75VlKurcPLu05%2FlbEkLNtoWngkwlFZYjPnRTJlGGy80YKk8%2FEiA48JcRrc6sus1dxZf02HUOJL3KDL4BR908IYV8tDEH%2FvOz669dWI41HMdip9vDaQYfQQa%2BAv%2F2GaIsAJyz6hbZ4BC9m7&X-Amz-Signature=03f2933bfc7ae5d0cb2c904508728126840918d52960dd02f20915a68999007f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
