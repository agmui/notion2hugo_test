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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX2KQ77J%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T061139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIDv5jdWhUWYABTxLkZ0jgroPBOjTzuuNMvlmsxylWv%2BPAiBVRD5Yeue73aDlUMVlOHmjirU6X9h3hvfX4IcH9Y%2F%2FGyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlgs2UkrSCwyeo%2Fg7KtwDqbTU20ku523U%2FbTlSaIr2CyLQarDMAhzts5i04IDghMHTxMF8VcdAo1YdvxJx9saODklXQragFyKmdgbdV2qFBXA03R6GxRsCGjR2rsH1d5u0gguIK9mR8sESjmh73tChJ%2BqAc0MnyVa5cibMvjdIePQCTGmI%2Bk9wFF4D0E4RTepGDCpUXvyXUGqdC%2Bct7iMCRLHE%2F01gRiKGs7BD%2FYrHHFtyvR%2B4KtAlG0cOobxMQ67ne%2BG7x%2BRCZDTjWUF0XAxUuYhhUFAAWO844EhLSe1OW1slvGek%2FTo%2B6la%2FORCFoWBKlx5XOCk7dlrV383cQ3coPcfYakMNC%2F55ELjxnacOCj1S%2Few27FI0TLIHR7KUdhcF3O6QbJI4Xg9zOGNrahrVEL6IWy6fPEbwb3INk25HeTgKPXdz9wcuI1TIYZv3zEnLv%2FzF3KEQvkdYb1gIxg9nlo4uv98501l33Th1oY8sYRNIV2fdMiO9DhzRbxotDAEwFJ4baG2FplPrlNnzgY7LXydSihiMRDGcSXGhqvBs4DluzorCeyGTFYdLScpITCKUITEJRcxNENIwb0%2B3J5XhS37Dj7ok%2F2y0P4K5pAxGIgLhBGSuP19gLIuZ2MA%2FHxgJjCEbsG5NGFWrlcwhJCFvgY6pgEsh1NBVUmeX3AKmIs8UwEAreo%2FZxxX6Y1QdNKzr8eMA0Uv0CIpkokPkn6vCMrztR6cQRuCVVwgKU%2FjRDcQrH%2BTqBJybRFIXTPRArX0E2YnZ2AA%2FT9Y5y6nbXrkzLW0K4Jw7iYYhnMnwCSB4ILTXRGOl56ELoaKDVUavJ6GL74y6FE5LRz2Enoe8IggKapkB5Rl%2FJ0zsIp%2FNWPy8t98Flsna1kSsP6I&X-Amz-Signature=6b3f2b266c7070d01d65c6ad2d041d9797b8434c26f748e45b64562e3178dee2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX2KQ77J%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T061139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIDv5jdWhUWYABTxLkZ0jgroPBOjTzuuNMvlmsxylWv%2BPAiBVRD5Yeue73aDlUMVlOHmjirU6X9h3hvfX4IcH9Y%2F%2FGyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlgs2UkrSCwyeo%2Fg7KtwDqbTU20ku523U%2FbTlSaIr2CyLQarDMAhzts5i04IDghMHTxMF8VcdAo1YdvxJx9saODklXQragFyKmdgbdV2qFBXA03R6GxRsCGjR2rsH1d5u0gguIK9mR8sESjmh73tChJ%2BqAc0MnyVa5cibMvjdIePQCTGmI%2Bk9wFF4D0E4RTepGDCpUXvyXUGqdC%2Bct7iMCRLHE%2F01gRiKGs7BD%2FYrHHFtyvR%2B4KtAlG0cOobxMQ67ne%2BG7x%2BRCZDTjWUF0XAxUuYhhUFAAWO844EhLSe1OW1slvGek%2FTo%2B6la%2FORCFoWBKlx5XOCk7dlrV383cQ3coPcfYakMNC%2F55ELjxnacOCj1S%2Few27FI0TLIHR7KUdhcF3O6QbJI4Xg9zOGNrahrVEL6IWy6fPEbwb3INk25HeTgKPXdz9wcuI1TIYZv3zEnLv%2FzF3KEQvkdYb1gIxg9nlo4uv98501l33Th1oY8sYRNIV2fdMiO9DhzRbxotDAEwFJ4baG2FplPrlNnzgY7LXydSihiMRDGcSXGhqvBs4DluzorCeyGTFYdLScpITCKUITEJRcxNENIwb0%2B3J5XhS37Dj7ok%2F2y0P4K5pAxGIgLhBGSuP19gLIuZ2MA%2FHxgJjCEbsG5NGFWrlcwhJCFvgY6pgEsh1NBVUmeX3AKmIs8UwEAreo%2FZxxX6Y1QdNKzr8eMA0Uv0CIpkokPkn6vCMrztR6cQRuCVVwgKU%2FjRDcQrH%2BTqBJybRFIXTPRArX0E2YnZ2AA%2FT9Y5y6nbXrkzLW0K4Jw7iYYhnMnwCSB4ILTXRGOl56ELoaKDVUavJ6GL74y6FE5LRz2Enoe8IggKapkB5Rl%2FJ0zsIp%2FNWPy8t98Flsna1kSsP6I&X-Amz-Signature=56b9608e11e28e2b958535b9a9c43a80a84ae9ca001e4c08166ebb3b60e79c9d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX2KQ77J%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T061140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIDv5jdWhUWYABTxLkZ0jgroPBOjTzuuNMvlmsxylWv%2BPAiBVRD5Yeue73aDlUMVlOHmjirU6X9h3hvfX4IcH9Y%2F%2FGyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlgs2UkrSCwyeo%2Fg7KtwDqbTU20ku523U%2FbTlSaIr2CyLQarDMAhzts5i04IDghMHTxMF8VcdAo1YdvxJx9saODklXQragFyKmdgbdV2qFBXA03R6GxRsCGjR2rsH1d5u0gguIK9mR8sESjmh73tChJ%2BqAc0MnyVa5cibMvjdIePQCTGmI%2Bk9wFF4D0E4RTepGDCpUXvyXUGqdC%2Bct7iMCRLHE%2F01gRiKGs7BD%2FYrHHFtyvR%2B4KtAlG0cOobxMQ67ne%2BG7x%2BRCZDTjWUF0XAxUuYhhUFAAWO844EhLSe1OW1slvGek%2FTo%2B6la%2FORCFoWBKlx5XOCk7dlrV383cQ3coPcfYakMNC%2F55ELjxnacOCj1S%2Few27FI0TLIHR7KUdhcF3O6QbJI4Xg9zOGNrahrVEL6IWy6fPEbwb3INk25HeTgKPXdz9wcuI1TIYZv3zEnLv%2FzF3KEQvkdYb1gIxg9nlo4uv98501l33Th1oY8sYRNIV2fdMiO9DhzRbxotDAEwFJ4baG2FplPrlNnzgY7LXydSihiMRDGcSXGhqvBs4DluzorCeyGTFYdLScpITCKUITEJRcxNENIwb0%2B3J5XhS37Dj7ok%2F2y0P4K5pAxGIgLhBGSuP19gLIuZ2MA%2FHxgJjCEbsG5NGFWrlcwhJCFvgY6pgEsh1NBVUmeX3AKmIs8UwEAreo%2FZxxX6Y1QdNKzr8eMA0Uv0CIpkokPkn6vCMrztR6cQRuCVVwgKU%2FjRDcQrH%2BTqBJybRFIXTPRArX0E2YnZ2AA%2FT9Y5y6nbXrkzLW0K4Jw7iYYhnMnwCSB4ILTXRGOl56ELoaKDVUavJ6GL74y6FE5LRz2Enoe8IggKapkB5Rl%2FJ0zsIp%2FNWPy8t98Flsna1kSsP6I&X-Amz-Signature=1d093108645f3374a64ba3493cc6d80beac479ee697d38da36ea3b3fd39934d8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX2KQ77J%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T061140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIDv5jdWhUWYABTxLkZ0jgroPBOjTzuuNMvlmsxylWv%2BPAiBVRD5Yeue73aDlUMVlOHmjirU6X9h3hvfX4IcH9Y%2F%2FGyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlgs2UkrSCwyeo%2Fg7KtwDqbTU20ku523U%2FbTlSaIr2CyLQarDMAhzts5i04IDghMHTxMF8VcdAo1YdvxJx9saODklXQragFyKmdgbdV2qFBXA03R6GxRsCGjR2rsH1d5u0gguIK9mR8sESjmh73tChJ%2BqAc0MnyVa5cibMvjdIePQCTGmI%2Bk9wFF4D0E4RTepGDCpUXvyXUGqdC%2Bct7iMCRLHE%2F01gRiKGs7BD%2FYrHHFtyvR%2B4KtAlG0cOobxMQ67ne%2BG7x%2BRCZDTjWUF0XAxUuYhhUFAAWO844EhLSe1OW1slvGek%2FTo%2B6la%2FORCFoWBKlx5XOCk7dlrV383cQ3coPcfYakMNC%2F55ELjxnacOCj1S%2Few27FI0TLIHR7KUdhcF3O6QbJI4Xg9zOGNrahrVEL6IWy6fPEbwb3INk25HeTgKPXdz9wcuI1TIYZv3zEnLv%2FzF3KEQvkdYb1gIxg9nlo4uv98501l33Th1oY8sYRNIV2fdMiO9DhzRbxotDAEwFJ4baG2FplPrlNnzgY7LXydSihiMRDGcSXGhqvBs4DluzorCeyGTFYdLScpITCKUITEJRcxNENIwb0%2B3J5XhS37Dj7ok%2F2y0P4K5pAxGIgLhBGSuP19gLIuZ2MA%2FHxgJjCEbsG5NGFWrlcwhJCFvgY6pgEsh1NBVUmeX3AKmIs8UwEAreo%2FZxxX6Y1QdNKzr8eMA0Uv0CIpkokPkn6vCMrztR6cQRuCVVwgKU%2FjRDcQrH%2BTqBJybRFIXTPRArX0E2YnZ2AA%2FT9Y5y6nbXrkzLW0K4Jw7iYYhnMnwCSB4ILTXRGOl56ELoaKDVUavJ6GL74y6FE5LRz2Enoe8IggKapkB5Rl%2FJ0zsIp%2FNWPy8t98Flsna1kSsP6I&X-Amz-Signature=b85be3e282be634cfd6c7a50857a058b0c799e3a229a4853278fd186aab69cb7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX2KQ77J%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T061140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIDv5jdWhUWYABTxLkZ0jgroPBOjTzuuNMvlmsxylWv%2BPAiBVRD5Yeue73aDlUMVlOHmjirU6X9h3hvfX4IcH9Y%2F%2FGyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlgs2UkrSCwyeo%2Fg7KtwDqbTU20ku523U%2FbTlSaIr2CyLQarDMAhzts5i04IDghMHTxMF8VcdAo1YdvxJx9saODklXQragFyKmdgbdV2qFBXA03R6GxRsCGjR2rsH1d5u0gguIK9mR8sESjmh73tChJ%2BqAc0MnyVa5cibMvjdIePQCTGmI%2Bk9wFF4D0E4RTepGDCpUXvyXUGqdC%2Bct7iMCRLHE%2F01gRiKGs7BD%2FYrHHFtyvR%2B4KtAlG0cOobxMQ67ne%2BG7x%2BRCZDTjWUF0XAxUuYhhUFAAWO844EhLSe1OW1slvGek%2FTo%2B6la%2FORCFoWBKlx5XOCk7dlrV383cQ3coPcfYakMNC%2F55ELjxnacOCj1S%2Few27FI0TLIHR7KUdhcF3O6QbJI4Xg9zOGNrahrVEL6IWy6fPEbwb3INk25HeTgKPXdz9wcuI1TIYZv3zEnLv%2FzF3KEQvkdYb1gIxg9nlo4uv98501l33Th1oY8sYRNIV2fdMiO9DhzRbxotDAEwFJ4baG2FplPrlNnzgY7LXydSihiMRDGcSXGhqvBs4DluzorCeyGTFYdLScpITCKUITEJRcxNENIwb0%2B3J5XhS37Dj7ok%2F2y0P4K5pAxGIgLhBGSuP19gLIuZ2MA%2FHxgJjCEbsG5NGFWrlcwhJCFvgY6pgEsh1NBVUmeX3AKmIs8UwEAreo%2FZxxX6Y1QdNKzr8eMA0Uv0CIpkokPkn6vCMrztR6cQRuCVVwgKU%2FjRDcQrH%2BTqBJybRFIXTPRArX0E2YnZ2AA%2FT9Y5y6nbXrkzLW0K4Jw7iYYhnMnwCSB4ILTXRGOl56ELoaKDVUavJ6GL74y6FE5LRz2Enoe8IggKapkB5Rl%2FJ0zsIp%2FNWPy8t98Flsna1kSsP6I&X-Amz-Signature=94e3cbaf889e10055c8ade660b417763641a611b7edc38b6c4dc96a93f3ef733&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZX2KQ77J%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T061139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIDv5jdWhUWYABTxLkZ0jgroPBOjTzuuNMvlmsxylWv%2BPAiBVRD5Yeue73aDlUMVlOHmjirU6X9h3hvfX4IcH9Y%2F%2FGyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlgs2UkrSCwyeo%2Fg7KtwDqbTU20ku523U%2FbTlSaIr2CyLQarDMAhzts5i04IDghMHTxMF8VcdAo1YdvxJx9saODklXQragFyKmdgbdV2qFBXA03R6GxRsCGjR2rsH1d5u0gguIK9mR8sESjmh73tChJ%2BqAc0MnyVa5cibMvjdIePQCTGmI%2Bk9wFF4D0E4RTepGDCpUXvyXUGqdC%2Bct7iMCRLHE%2F01gRiKGs7BD%2FYrHHFtyvR%2B4KtAlG0cOobxMQ67ne%2BG7x%2BRCZDTjWUF0XAxUuYhhUFAAWO844EhLSe1OW1slvGek%2FTo%2B6la%2FORCFoWBKlx5XOCk7dlrV383cQ3coPcfYakMNC%2F55ELjxnacOCj1S%2Few27FI0TLIHR7KUdhcF3O6QbJI4Xg9zOGNrahrVEL6IWy6fPEbwb3INk25HeTgKPXdz9wcuI1TIYZv3zEnLv%2FzF3KEQvkdYb1gIxg9nlo4uv98501l33Th1oY8sYRNIV2fdMiO9DhzRbxotDAEwFJ4baG2FplPrlNnzgY7LXydSihiMRDGcSXGhqvBs4DluzorCeyGTFYdLScpITCKUITEJRcxNENIwb0%2B3J5XhS37Dj7ok%2F2y0P4K5pAxGIgLhBGSuP19gLIuZ2MA%2FHxgJjCEbsG5NGFWrlcwhJCFvgY6pgEsh1NBVUmeX3AKmIs8UwEAreo%2FZxxX6Y1QdNKzr8eMA0Uv0CIpkokPkn6vCMrztR6cQRuCVVwgKU%2FjRDcQrH%2BTqBJybRFIXTPRArX0E2YnZ2AA%2FT9Y5y6nbXrkzLW0K4Jw7iYYhnMnwCSB4ILTXRGOl56ELoaKDVUavJ6GL74y6FE5LRz2Enoe8IggKapkB5Rl%2FJ0zsIp%2FNWPy8t98Flsna1kSsP6I&X-Amz-Signature=50739387890d568cd741386cb0b676edba1a5b3ca8e171b891ec335216677288&X-Amz-SignedHeaders=host&x-id=GetObject)
