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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGGHRFRO%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T121434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICW7FW4vzSsbrOCMyVSLk34oj0QdzgpymDzly2CLl5VQAiEA%2BYs%2BPBF7jQJxrsyi1cSVfhnTOB7MHV4EWZs6VGxxJW4q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDMD7YvkW1uOjz5AsFyrcAxISgsnGXo4Ql9VAZxwhQp3sxHdX9l%2Bc%2B6Ei9fdKDZbhk9%2BzdvdFDh6iZa5cbh2QVg%2BaK1cnjoHl7wNJ9k%2ByH6HoULyS%2BmJZehSJ0VGSyqNNf2zOKtUZTd4LsYAlI49K1BTlx%2BuS%2F0SEZet7co%2Fu90nUDVCtsQFE5HmJnNjL%2Fwt%2BQxyw8ZfrLynlI1LWarNyFLZEWY5tl6nUBweBEXsTgKprlBXkuX5WBQavE1pKX2as7XAIE0N9pWngDvJ6qvPQOFDXoCKLYG1j213ttYfiKXHzb%2B%2FSdVNDZ3Sy0LXczCx2UWyQIlcEay6twS9d%2BQ0JyPDEXW1T7Eh5M6gPIjBitQHM13K6i0T0%2BNtMg2c083hAQegANe9dTrke9QYdZLU5MoZdXCYIQ%2BijKYF6fBio%2FtLX5zkhTw2cm0Jhz%2FaI%2FyOecuNcbI9cr%2F7uxb3hiGISC231GabQicrpbLpNnYgPsIby2ctXZ4pxqLC9SF7%2Bq4WypnntP0I8eR%2BwMiLOeNpo2AazKMZ4WvYSu3cy0WRd0quLDgrBzMuSsWQrv0XLXLdyJjIYzbYKe1tMkQh%2BPVHsia0Ms32fzBtxOwIywV3w9rGiWDCnvilCdt5Hxa8ncOfyomzVvd5vfkslR4tuMNn0oL4GOqUBwl5DIJYuDbspfd0bHxcdJth8CKRyXKr%2BkkHsI435KSBZXIdHEY%2FcnQ4WgdVWKM9GA0Mz3eOUjgH72k3puiKMmf8EpG5sLcffrqOo1aaFRNJtN4ocjPFTpThOTQ08y1R5ufsgL4m2yWy8gq4Wbk%2B1UK1hQHpbn2a93RDmR3g0nToM5BRCocEe%2F7lMi5oX%2FBWKcKgzK3kiZR%2BEZKXPFO4yBVZne0mT&X-Amz-Signature=780a751c20f02555f55769ccaadd74fc39a06faa47fc14f0c4b702c4f23c390c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGGHRFRO%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T121434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICW7FW4vzSsbrOCMyVSLk34oj0QdzgpymDzly2CLl5VQAiEA%2BYs%2BPBF7jQJxrsyi1cSVfhnTOB7MHV4EWZs6VGxxJW4q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDMD7YvkW1uOjz5AsFyrcAxISgsnGXo4Ql9VAZxwhQp3sxHdX9l%2Bc%2B6Ei9fdKDZbhk9%2BzdvdFDh6iZa5cbh2QVg%2BaK1cnjoHl7wNJ9k%2ByH6HoULyS%2BmJZehSJ0VGSyqNNf2zOKtUZTd4LsYAlI49K1BTlx%2BuS%2F0SEZet7co%2Fu90nUDVCtsQFE5HmJnNjL%2Fwt%2BQxyw8ZfrLynlI1LWarNyFLZEWY5tl6nUBweBEXsTgKprlBXkuX5WBQavE1pKX2as7XAIE0N9pWngDvJ6qvPQOFDXoCKLYG1j213ttYfiKXHzb%2B%2FSdVNDZ3Sy0LXczCx2UWyQIlcEay6twS9d%2BQ0JyPDEXW1T7Eh5M6gPIjBitQHM13K6i0T0%2BNtMg2c083hAQegANe9dTrke9QYdZLU5MoZdXCYIQ%2BijKYF6fBio%2FtLX5zkhTw2cm0Jhz%2FaI%2FyOecuNcbI9cr%2F7uxb3hiGISC231GabQicrpbLpNnYgPsIby2ctXZ4pxqLC9SF7%2Bq4WypnntP0I8eR%2BwMiLOeNpo2AazKMZ4WvYSu3cy0WRd0quLDgrBzMuSsWQrv0XLXLdyJjIYzbYKe1tMkQh%2BPVHsia0Ms32fzBtxOwIywV3w9rGiWDCnvilCdt5Hxa8ncOfyomzVvd5vfkslR4tuMNn0oL4GOqUBwl5DIJYuDbspfd0bHxcdJth8CKRyXKr%2BkkHsI435KSBZXIdHEY%2FcnQ4WgdVWKM9GA0Mz3eOUjgH72k3puiKMmf8EpG5sLcffrqOo1aaFRNJtN4ocjPFTpThOTQ08y1R5ufsgL4m2yWy8gq4Wbk%2B1UK1hQHpbn2a93RDmR3g0nToM5BRCocEe%2F7lMi5oX%2FBWKcKgzK3kiZR%2BEZKXPFO4yBVZne0mT&X-Amz-Signature=1663bf884f719163b70c3e6466e3abc90b1abb69fac284fb865084c9c6c324da&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGGHRFRO%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T121434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICW7FW4vzSsbrOCMyVSLk34oj0QdzgpymDzly2CLl5VQAiEA%2BYs%2BPBF7jQJxrsyi1cSVfhnTOB7MHV4EWZs6VGxxJW4q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDMD7YvkW1uOjz5AsFyrcAxISgsnGXo4Ql9VAZxwhQp3sxHdX9l%2Bc%2B6Ei9fdKDZbhk9%2BzdvdFDh6iZa5cbh2QVg%2BaK1cnjoHl7wNJ9k%2ByH6HoULyS%2BmJZehSJ0VGSyqNNf2zOKtUZTd4LsYAlI49K1BTlx%2BuS%2F0SEZet7co%2Fu90nUDVCtsQFE5HmJnNjL%2Fwt%2BQxyw8ZfrLynlI1LWarNyFLZEWY5tl6nUBweBEXsTgKprlBXkuX5WBQavE1pKX2as7XAIE0N9pWngDvJ6qvPQOFDXoCKLYG1j213ttYfiKXHzb%2B%2FSdVNDZ3Sy0LXczCx2UWyQIlcEay6twS9d%2BQ0JyPDEXW1T7Eh5M6gPIjBitQHM13K6i0T0%2BNtMg2c083hAQegANe9dTrke9QYdZLU5MoZdXCYIQ%2BijKYF6fBio%2FtLX5zkhTw2cm0Jhz%2FaI%2FyOecuNcbI9cr%2F7uxb3hiGISC231GabQicrpbLpNnYgPsIby2ctXZ4pxqLC9SF7%2Bq4WypnntP0I8eR%2BwMiLOeNpo2AazKMZ4WvYSu3cy0WRd0quLDgrBzMuSsWQrv0XLXLdyJjIYzbYKe1tMkQh%2BPVHsia0Ms32fzBtxOwIywV3w9rGiWDCnvilCdt5Hxa8ncOfyomzVvd5vfkslR4tuMNn0oL4GOqUBwl5DIJYuDbspfd0bHxcdJth8CKRyXKr%2BkkHsI435KSBZXIdHEY%2FcnQ4WgdVWKM9GA0Mz3eOUjgH72k3puiKMmf8EpG5sLcffrqOo1aaFRNJtN4ocjPFTpThOTQ08y1R5ufsgL4m2yWy8gq4Wbk%2B1UK1hQHpbn2a93RDmR3g0nToM5BRCocEe%2F7lMi5oX%2FBWKcKgzK3kiZR%2BEZKXPFO4yBVZne0mT&X-Amz-Signature=09603c7dc73498beb67ace1729cd26a76e67001a13a3c4ea1c2684a682621f5b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGGHRFRO%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T121434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICW7FW4vzSsbrOCMyVSLk34oj0QdzgpymDzly2CLl5VQAiEA%2BYs%2BPBF7jQJxrsyi1cSVfhnTOB7MHV4EWZs6VGxxJW4q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDMD7YvkW1uOjz5AsFyrcAxISgsnGXo4Ql9VAZxwhQp3sxHdX9l%2Bc%2B6Ei9fdKDZbhk9%2BzdvdFDh6iZa5cbh2QVg%2BaK1cnjoHl7wNJ9k%2ByH6HoULyS%2BmJZehSJ0VGSyqNNf2zOKtUZTd4LsYAlI49K1BTlx%2BuS%2F0SEZet7co%2Fu90nUDVCtsQFE5HmJnNjL%2Fwt%2BQxyw8ZfrLynlI1LWarNyFLZEWY5tl6nUBweBEXsTgKprlBXkuX5WBQavE1pKX2as7XAIE0N9pWngDvJ6qvPQOFDXoCKLYG1j213ttYfiKXHzb%2B%2FSdVNDZ3Sy0LXczCx2UWyQIlcEay6twS9d%2BQ0JyPDEXW1T7Eh5M6gPIjBitQHM13K6i0T0%2BNtMg2c083hAQegANe9dTrke9QYdZLU5MoZdXCYIQ%2BijKYF6fBio%2FtLX5zkhTw2cm0Jhz%2FaI%2FyOecuNcbI9cr%2F7uxb3hiGISC231GabQicrpbLpNnYgPsIby2ctXZ4pxqLC9SF7%2Bq4WypnntP0I8eR%2BwMiLOeNpo2AazKMZ4WvYSu3cy0WRd0quLDgrBzMuSsWQrv0XLXLdyJjIYzbYKe1tMkQh%2BPVHsia0Ms32fzBtxOwIywV3w9rGiWDCnvilCdt5Hxa8ncOfyomzVvd5vfkslR4tuMNn0oL4GOqUBwl5DIJYuDbspfd0bHxcdJth8CKRyXKr%2BkkHsI435KSBZXIdHEY%2FcnQ4WgdVWKM9GA0Mz3eOUjgH72k3puiKMmf8EpG5sLcffrqOo1aaFRNJtN4ocjPFTpThOTQ08y1R5ufsgL4m2yWy8gq4Wbk%2B1UK1hQHpbn2a93RDmR3g0nToM5BRCocEe%2F7lMi5oX%2FBWKcKgzK3kiZR%2BEZKXPFO4yBVZne0mT&X-Amz-Signature=cbccf47f696494c00ee704e54e47330ae4b0876e49746ca266a58a293a04b4da&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGGHRFRO%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T121434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICW7FW4vzSsbrOCMyVSLk34oj0QdzgpymDzly2CLl5VQAiEA%2BYs%2BPBF7jQJxrsyi1cSVfhnTOB7MHV4EWZs6VGxxJW4q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDMD7YvkW1uOjz5AsFyrcAxISgsnGXo4Ql9VAZxwhQp3sxHdX9l%2Bc%2B6Ei9fdKDZbhk9%2BzdvdFDh6iZa5cbh2QVg%2BaK1cnjoHl7wNJ9k%2ByH6HoULyS%2BmJZehSJ0VGSyqNNf2zOKtUZTd4LsYAlI49K1BTlx%2BuS%2F0SEZet7co%2Fu90nUDVCtsQFE5HmJnNjL%2Fwt%2BQxyw8ZfrLynlI1LWarNyFLZEWY5tl6nUBweBEXsTgKprlBXkuX5WBQavE1pKX2as7XAIE0N9pWngDvJ6qvPQOFDXoCKLYG1j213ttYfiKXHzb%2B%2FSdVNDZ3Sy0LXczCx2UWyQIlcEay6twS9d%2BQ0JyPDEXW1T7Eh5M6gPIjBitQHM13K6i0T0%2BNtMg2c083hAQegANe9dTrke9QYdZLU5MoZdXCYIQ%2BijKYF6fBio%2FtLX5zkhTw2cm0Jhz%2FaI%2FyOecuNcbI9cr%2F7uxb3hiGISC231GabQicrpbLpNnYgPsIby2ctXZ4pxqLC9SF7%2Bq4WypnntP0I8eR%2BwMiLOeNpo2AazKMZ4WvYSu3cy0WRd0quLDgrBzMuSsWQrv0XLXLdyJjIYzbYKe1tMkQh%2BPVHsia0Ms32fzBtxOwIywV3w9rGiWDCnvilCdt5Hxa8ncOfyomzVvd5vfkslR4tuMNn0oL4GOqUBwl5DIJYuDbspfd0bHxcdJth8CKRyXKr%2BkkHsI435KSBZXIdHEY%2FcnQ4WgdVWKM9GA0Mz3eOUjgH72k3puiKMmf8EpG5sLcffrqOo1aaFRNJtN4ocjPFTpThOTQ08y1R5ufsgL4m2yWy8gq4Wbk%2B1UK1hQHpbn2a93RDmR3g0nToM5BRCocEe%2F7lMi5oX%2FBWKcKgzK3kiZR%2BEZKXPFO4yBVZne0mT&X-Amz-Signature=48ae08011493af17aa9b683b970bee09b85f7909152159b1fefe6fcd3884a8d6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGGHRFRO%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T121434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICW7FW4vzSsbrOCMyVSLk34oj0QdzgpymDzly2CLl5VQAiEA%2BYs%2BPBF7jQJxrsyi1cSVfhnTOB7MHV4EWZs6VGxxJW4q%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDMD7YvkW1uOjz5AsFyrcAxISgsnGXo4Ql9VAZxwhQp3sxHdX9l%2Bc%2B6Ei9fdKDZbhk9%2BzdvdFDh6iZa5cbh2QVg%2BaK1cnjoHl7wNJ9k%2ByH6HoULyS%2BmJZehSJ0VGSyqNNf2zOKtUZTd4LsYAlI49K1BTlx%2BuS%2F0SEZet7co%2Fu90nUDVCtsQFE5HmJnNjL%2Fwt%2BQxyw8ZfrLynlI1LWarNyFLZEWY5tl6nUBweBEXsTgKprlBXkuX5WBQavE1pKX2as7XAIE0N9pWngDvJ6qvPQOFDXoCKLYG1j213ttYfiKXHzb%2B%2FSdVNDZ3Sy0LXczCx2UWyQIlcEay6twS9d%2BQ0JyPDEXW1T7Eh5M6gPIjBitQHM13K6i0T0%2BNtMg2c083hAQegANe9dTrke9QYdZLU5MoZdXCYIQ%2BijKYF6fBio%2FtLX5zkhTw2cm0Jhz%2FaI%2FyOecuNcbI9cr%2F7uxb3hiGISC231GabQicrpbLpNnYgPsIby2ctXZ4pxqLC9SF7%2Bq4WypnntP0I8eR%2BwMiLOeNpo2AazKMZ4WvYSu3cy0WRd0quLDgrBzMuSsWQrv0XLXLdyJjIYzbYKe1tMkQh%2BPVHsia0Ms32fzBtxOwIywV3w9rGiWDCnvilCdt5Hxa8ncOfyomzVvd5vfkslR4tuMNn0oL4GOqUBwl5DIJYuDbspfd0bHxcdJth8CKRyXKr%2BkkHsI435KSBZXIdHEY%2FcnQ4WgdVWKM9GA0Mz3eOUjgH72k3puiKMmf8EpG5sLcffrqOo1aaFRNJtN4ocjPFTpThOTQ08y1R5ufsgL4m2yWy8gq4Wbk%2B1UK1hQHpbn2a93RDmR3g0nToM5BRCocEe%2F7lMi5oX%2FBWKcKgzK3kiZR%2BEZKXPFO4yBVZne0mT&X-Amz-Signature=8bde2bffc3c3e72953928469bfe3cd7d4bdeddad1757ce00723feb045d6e93de&X-Amz-SignedHeaders=host&x-id=GetObject)
