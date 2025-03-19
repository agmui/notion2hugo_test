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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622VGAE2Y%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIE1vU8kDvuq%2Fwt4%2FXV%2B1JY5zAeHnwjPQeD10kz2v066RAiAjtMHCIRDokoJIrMabK2Plvlgl8zQpIU5FBh7y%2BMfp4Sr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMiDEsx8Gz3Y9FegaBKtwDigL%2Ba1XvG4itOz0dMeIiodKOU%2BYkBXQKxS74Cze%2Fnup8GjYMwLHgAfhiEpH87jgDYBrJIdydqMBEW9Zh73jqn%2F2UDyM6QBwFIsuIxo4yrwU2Jq3n3ulPAzLChtJCbBr9pgRoziMquLBhXKHY%2BMyab5A0i6KZCS2hIFHtu0hi3ohRjHO4UoyzuRD8Cx%2BOdbolMqXkciw%2FQZUBtMVMLk7oGOPWigZLxzBCKH6wVVjpnxU3HjHKIcz6FjoY9I6k3p8dcrnKQW3yC%2BPB9vvkTWXHIyh%2BUgBGas7xxlEWCCJBgyhxWmtv0M7%2BTAZV90dZkYfugEovRspEyqaFhittldRdJokHvp3K05qrbVoaiqbbLck%2FK%2FUXcdO1eHMDZOFUEdfYHn0TdZUDKJ2qLPRJ7KG9lmxjF%2B%2FFYrHV5yFX%2Fn6cz%2BhadfqN2hz%2FLHAwI8jdf2Aq33j8ecMxKHiaH0gxqe4gMFd7w3PrPkwg0UoKg5T%2F%2F4SBP0r5VXbmQ4sXaBaAdp5Idud7lEzzZpdf%2FZdX09oKKkTzpTcNrHt02LGyhk8D0fzR%2F5N9eBmNJ5HeXJGm%2BeFGaI8Ilh0hxGIYCv6O%2BCpdw%2B0rJoNHl6h%2BZ4NKfvolHCoBRmd5lmLPJlafj6Uw5rzrvgY6pgGN4eXMEv%2BQgKY0pLRUJo%2BFYJ2tMRhkMrtVURZ7iOSxzt0wiSAcsV8rGtYrh4xtgZG0XMh87Ba4myZEIdD81YhbDEO4YyiFS3IX50Y0lGmRW51BKkPXw87Vk%2FhbytFLIGDVnLnFNa8E7L%2BBqf9CDlulbJxI7x8K%2FtJ7lp2ESeW2gjBAX1srnQFslnrM%2FkHU9UntMVhvZaGtGGWjyRtuPv5QgPY5hfSG&X-Amz-Signature=76b4dff7a72fee64ba3cf35621b2b4cd9b41f1bde8e139fdd31f96bf18ed4304&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622VGAE2Y%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIE1vU8kDvuq%2Fwt4%2FXV%2B1JY5zAeHnwjPQeD10kz2v066RAiAjtMHCIRDokoJIrMabK2Plvlgl8zQpIU5FBh7y%2BMfp4Sr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMiDEsx8Gz3Y9FegaBKtwDigL%2Ba1XvG4itOz0dMeIiodKOU%2BYkBXQKxS74Cze%2Fnup8GjYMwLHgAfhiEpH87jgDYBrJIdydqMBEW9Zh73jqn%2F2UDyM6QBwFIsuIxo4yrwU2Jq3n3ulPAzLChtJCbBr9pgRoziMquLBhXKHY%2BMyab5A0i6KZCS2hIFHtu0hi3ohRjHO4UoyzuRD8Cx%2BOdbolMqXkciw%2FQZUBtMVMLk7oGOPWigZLxzBCKH6wVVjpnxU3HjHKIcz6FjoY9I6k3p8dcrnKQW3yC%2BPB9vvkTWXHIyh%2BUgBGas7xxlEWCCJBgyhxWmtv0M7%2BTAZV90dZkYfugEovRspEyqaFhittldRdJokHvp3K05qrbVoaiqbbLck%2FK%2FUXcdO1eHMDZOFUEdfYHn0TdZUDKJ2qLPRJ7KG9lmxjF%2B%2FFYrHV5yFX%2Fn6cz%2BhadfqN2hz%2FLHAwI8jdf2Aq33j8ecMxKHiaH0gxqe4gMFd7w3PrPkwg0UoKg5T%2F%2F4SBP0r5VXbmQ4sXaBaAdp5Idud7lEzzZpdf%2FZdX09oKKkTzpTcNrHt02LGyhk8D0fzR%2F5N9eBmNJ5HeXJGm%2BeFGaI8Ilh0hxGIYCv6O%2BCpdw%2B0rJoNHl6h%2BZ4NKfvolHCoBRmd5lmLPJlafj6Uw5rzrvgY6pgGN4eXMEv%2BQgKY0pLRUJo%2BFYJ2tMRhkMrtVURZ7iOSxzt0wiSAcsV8rGtYrh4xtgZG0XMh87Ba4myZEIdD81YhbDEO4YyiFS3IX50Y0lGmRW51BKkPXw87Vk%2FhbytFLIGDVnLnFNa8E7L%2BBqf9CDlulbJxI7x8K%2FtJ7lp2ESeW2gjBAX1srnQFslnrM%2FkHU9UntMVhvZaGtGGWjyRtuPv5QgPY5hfSG&X-Amz-Signature=b32070eaae3fe0cb40d3ee324e931329071fa5f5007ef87e2894c06b0f60251d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622VGAE2Y%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T190118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIE1vU8kDvuq%2Fwt4%2FXV%2B1JY5zAeHnwjPQeD10kz2v066RAiAjtMHCIRDokoJIrMabK2Plvlgl8zQpIU5FBh7y%2BMfp4Sr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMiDEsx8Gz3Y9FegaBKtwDigL%2Ba1XvG4itOz0dMeIiodKOU%2BYkBXQKxS74Cze%2Fnup8GjYMwLHgAfhiEpH87jgDYBrJIdydqMBEW9Zh73jqn%2F2UDyM6QBwFIsuIxo4yrwU2Jq3n3ulPAzLChtJCbBr9pgRoziMquLBhXKHY%2BMyab5A0i6KZCS2hIFHtu0hi3ohRjHO4UoyzuRD8Cx%2BOdbolMqXkciw%2FQZUBtMVMLk7oGOPWigZLxzBCKH6wVVjpnxU3HjHKIcz6FjoY9I6k3p8dcrnKQW3yC%2BPB9vvkTWXHIyh%2BUgBGas7xxlEWCCJBgyhxWmtv0M7%2BTAZV90dZkYfugEovRspEyqaFhittldRdJokHvp3K05qrbVoaiqbbLck%2FK%2FUXcdO1eHMDZOFUEdfYHn0TdZUDKJ2qLPRJ7KG9lmxjF%2B%2FFYrHV5yFX%2Fn6cz%2BhadfqN2hz%2FLHAwI8jdf2Aq33j8ecMxKHiaH0gxqe4gMFd7w3PrPkwg0UoKg5T%2F%2F4SBP0r5VXbmQ4sXaBaAdp5Idud7lEzzZpdf%2FZdX09oKKkTzpTcNrHt02LGyhk8D0fzR%2F5N9eBmNJ5HeXJGm%2BeFGaI8Ilh0hxGIYCv6O%2BCpdw%2B0rJoNHl6h%2BZ4NKfvolHCoBRmd5lmLPJlafj6Uw5rzrvgY6pgGN4eXMEv%2BQgKY0pLRUJo%2BFYJ2tMRhkMrtVURZ7iOSxzt0wiSAcsV8rGtYrh4xtgZG0XMh87Ba4myZEIdD81YhbDEO4YyiFS3IX50Y0lGmRW51BKkPXw87Vk%2FhbytFLIGDVnLnFNa8E7L%2BBqf9CDlulbJxI7x8K%2FtJ7lp2ESeW2gjBAX1srnQFslnrM%2FkHU9UntMVhvZaGtGGWjyRtuPv5QgPY5hfSG&X-Amz-Signature=a21dd8287b21554f3824508febeeee9dbe7580082df8fcccc5d4ae1ef8c75564&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622VGAE2Y%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T190118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIE1vU8kDvuq%2Fwt4%2FXV%2B1JY5zAeHnwjPQeD10kz2v066RAiAjtMHCIRDokoJIrMabK2Plvlgl8zQpIU5FBh7y%2BMfp4Sr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMiDEsx8Gz3Y9FegaBKtwDigL%2Ba1XvG4itOz0dMeIiodKOU%2BYkBXQKxS74Cze%2Fnup8GjYMwLHgAfhiEpH87jgDYBrJIdydqMBEW9Zh73jqn%2F2UDyM6QBwFIsuIxo4yrwU2Jq3n3ulPAzLChtJCbBr9pgRoziMquLBhXKHY%2BMyab5A0i6KZCS2hIFHtu0hi3ohRjHO4UoyzuRD8Cx%2BOdbolMqXkciw%2FQZUBtMVMLk7oGOPWigZLxzBCKH6wVVjpnxU3HjHKIcz6FjoY9I6k3p8dcrnKQW3yC%2BPB9vvkTWXHIyh%2BUgBGas7xxlEWCCJBgyhxWmtv0M7%2BTAZV90dZkYfugEovRspEyqaFhittldRdJokHvp3K05qrbVoaiqbbLck%2FK%2FUXcdO1eHMDZOFUEdfYHn0TdZUDKJ2qLPRJ7KG9lmxjF%2B%2FFYrHV5yFX%2Fn6cz%2BhadfqN2hz%2FLHAwI8jdf2Aq33j8ecMxKHiaH0gxqe4gMFd7w3PrPkwg0UoKg5T%2F%2F4SBP0r5VXbmQ4sXaBaAdp5Idud7lEzzZpdf%2FZdX09oKKkTzpTcNrHt02LGyhk8D0fzR%2F5N9eBmNJ5HeXJGm%2BeFGaI8Ilh0hxGIYCv6O%2BCpdw%2B0rJoNHl6h%2BZ4NKfvolHCoBRmd5lmLPJlafj6Uw5rzrvgY6pgGN4eXMEv%2BQgKY0pLRUJo%2BFYJ2tMRhkMrtVURZ7iOSxzt0wiSAcsV8rGtYrh4xtgZG0XMh87Ba4myZEIdD81YhbDEO4YyiFS3IX50Y0lGmRW51BKkPXw87Vk%2FhbytFLIGDVnLnFNa8E7L%2BBqf9CDlulbJxI7x8K%2FtJ7lp2ESeW2gjBAX1srnQFslnrM%2FkHU9UntMVhvZaGtGGWjyRtuPv5QgPY5hfSG&X-Amz-Signature=87097efc0326845be216f701b46e318b43e39247f66f480651e0311afb76e762&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622VGAE2Y%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIE1vU8kDvuq%2Fwt4%2FXV%2B1JY5zAeHnwjPQeD10kz2v066RAiAjtMHCIRDokoJIrMabK2Plvlgl8zQpIU5FBh7y%2BMfp4Sr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMiDEsx8Gz3Y9FegaBKtwDigL%2Ba1XvG4itOz0dMeIiodKOU%2BYkBXQKxS74Cze%2Fnup8GjYMwLHgAfhiEpH87jgDYBrJIdydqMBEW9Zh73jqn%2F2UDyM6QBwFIsuIxo4yrwU2Jq3n3ulPAzLChtJCbBr9pgRoziMquLBhXKHY%2BMyab5A0i6KZCS2hIFHtu0hi3ohRjHO4UoyzuRD8Cx%2BOdbolMqXkciw%2FQZUBtMVMLk7oGOPWigZLxzBCKH6wVVjpnxU3HjHKIcz6FjoY9I6k3p8dcrnKQW3yC%2BPB9vvkTWXHIyh%2BUgBGas7xxlEWCCJBgyhxWmtv0M7%2BTAZV90dZkYfugEovRspEyqaFhittldRdJokHvp3K05qrbVoaiqbbLck%2FK%2FUXcdO1eHMDZOFUEdfYHn0TdZUDKJ2qLPRJ7KG9lmxjF%2B%2FFYrHV5yFX%2Fn6cz%2BhadfqN2hz%2FLHAwI8jdf2Aq33j8ecMxKHiaH0gxqe4gMFd7w3PrPkwg0UoKg5T%2F%2F4SBP0r5VXbmQ4sXaBaAdp5Idud7lEzzZpdf%2FZdX09oKKkTzpTcNrHt02LGyhk8D0fzR%2F5N9eBmNJ5HeXJGm%2BeFGaI8Ilh0hxGIYCv6O%2BCpdw%2B0rJoNHl6h%2BZ4NKfvolHCoBRmd5lmLPJlafj6Uw5rzrvgY6pgGN4eXMEv%2BQgKY0pLRUJo%2BFYJ2tMRhkMrtVURZ7iOSxzt0wiSAcsV8rGtYrh4xtgZG0XMh87Ba4myZEIdD81YhbDEO4YyiFS3IX50Y0lGmRW51BKkPXw87Vk%2FhbytFLIGDVnLnFNa8E7L%2BBqf9CDlulbJxI7x8K%2FtJ7lp2ESeW2gjBAX1srnQFslnrM%2FkHU9UntMVhvZaGtGGWjyRtuPv5QgPY5hfSG&X-Amz-Signature=7fb0e806060af190d33a6f4fcbfa787d80f670b73a475eea5fbf5448c0fe7b54&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622VGAE2Y%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T190117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIE1vU8kDvuq%2Fwt4%2FXV%2B1JY5zAeHnwjPQeD10kz2v066RAiAjtMHCIRDokoJIrMabK2Plvlgl8zQpIU5FBh7y%2BMfp4Sr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMiDEsx8Gz3Y9FegaBKtwDigL%2Ba1XvG4itOz0dMeIiodKOU%2BYkBXQKxS74Cze%2Fnup8GjYMwLHgAfhiEpH87jgDYBrJIdydqMBEW9Zh73jqn%2F2UDyM6QBwFIsuIxo4yrwU2Jq3n3ulPAzLChtJCbBr9pgRoziMquLBhXKHY%2BMyab5A0i6KZCS2hIFHtu0hi3ohRjHO4UoyzuRD8Cx%2BOdbolMqXkciw%2FQZUBtMVMLk7oGOPWigZLxzBCKH6wVVjpnxU3HjHKIcz6FjoY9I6k3p8dcrnKQW3yC%2BPB9vvkTWXHIyh%2BUgBGas7xxlEWCCJBgyhxWmtv0M7%2BTAZV90dZkYfugEovRspEyqaFhittldRdJokHvp3K05qrbVoaiqbbLck%2FK%2FUXcdO1eHMDZOFUEdfYHn0TdZUDKJ2qLPRJ7KG9lmxjF%2B%2FFYrHV5yFX%2Fn6cz%2BhadfqN2hz%2FLHAwI8jdf2Aq33j8ecMxKHiaH0gxqe4gMFd7w3PrPkwg0UoKg5T%2F%2F4SBP0r5VXbmQ4sXaBaAdp5Idud7lEzzZpdf%2FZdX09oKKkTzpTcNrHt02LGyhk8D0fzR%2F5N9eBmNJ5HeXJGm%2BeFGaI8Ilh0hxGIYCv6O%2BCpdw%2B0rJoNHl6h%2BZ4NKfvolHCoBRmd5lmLPJlafj6Uw5rzrvgY6pgGN4eXMEv%2BQgKY0pLRUJo%2BFYJ2tMRhkMrtVURZ7iOSxzt0wiSAcsV8rGtYrh4xtgZG0XMh87Ba4myZEIdD81YhbDEO4YyiFS3IX50Y0lGmRW51BKkPXw87Vk%2FhbytFLIGDVnLnFNa8E7L%2BBqf9CDlulbJxI7x8K%2FtJ7lp2ESeW2gjBAX1srnQFslnrM%2FkHU9UntMVhvZaGtGGWjyRtuPv5QgPY5hfSG&X-Amz-Signature=620e3872b03aec7eabf96fc64c5e1d78bab0b9fdf8cd9cd0331a8f1cd7745918&X-Amz-SignedHeaders=host&x-id=GetObject)
