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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWY6L5KE%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDM2inaVyXiFsK%2BY5gerSVTZQDVHp%2B16783zbtQE0z0wQIhAIBRzpyuk5vvxJOPQdsqBnXs0PhblBdAfWAH9blgflzEKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxlDu5kPYAJsdJudMsq3AO%2BDBKfELxL%2BfaSVigeAo4%2BJd9SI1tiWOTJBZSTmjtlfXEWDoq15xGQUzN4aUMW8hXdjuedq5RatbzM4Fzrf8fgio4Qsz54HD9bIOiK%2BCCawSoNniS7GjpZc%2BnTdgKpwcJQIqCcIDUegno1C%2BKVNiQqYQYibI4HVY473mirI5VOwgp%2B5mQT%2Bw%2BPgRaJpTWrdHHT657iG361HAZ2u%2BkgTvuPabTR9k%2BaKkKTZse8yGRWOOMfcD4eF72ght5YD8o4%2FkMXpknzEVuE94g3HaQFyv1%2BOiCfZdtO3%2B%2F2ggHlImQqEobtcthDRbALhzZOIPY9C3Nggz40ekwrQy5bc6iAvVcGqlA8EctsGG53UPJ9nMpO62VMVlW%2B%2BZzyGIycA6DNtiEJLgICsR6Xx83zL%2BuwQcVp8LEhkDrEzCeMqpTWz4Ax1ZPgyz6mxTr9o50e81Ovwfd332T9gI7ArS9EV9btn%2FBefQ9Sg2toHeumyoZEheXd6Gi0sgOmqCUpjxR5rJl4MdvMGsWgG9wmJYZIZh7oO%2F4UCReq%2BJ4qxzewiauoIQnqOeDacCXBi30HmQgffT64LhcuuS1AR7w9zi9V%2Fl7auWQ%2FLg0kw%2Fpn8BFt7t97wV9npVJraW8H5G5RM0ZovTDi88rCBjqkAXMtLPYL0g%2Fh972gbHGzuFory7%2F%2BLW6cKvAxrIj3sSh6N5BBBVmqSlgyE8TE1M8%2FJbbN4zWTrplrdViWSMscoBX8fWgHIYtsEG%2FU%2FM8TD9GHBa9s1xTXAveDR7oCpbbq7Oz9fvs5gUq8SXUJkZlxqTMmYtZ045vWO37jQL1dmE%2BwYPXq00haie8RQYz3L73eMCIFCaOqHiB2UXL4ESaLshGqXWDJ&X-Amz-Signature=f2723c924b26f69c2646de5334b2c1260e687559f893dfdbc7892a1820d67b75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWY6L5KE%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDM2inaVyXiFsK%2BY5gerSVTZQDVHp%2B16783zbtQE0z0wQIhAIBRzpyuk5vvxJOPQdsqBnXs0PhblBdAfWAH9blgflzEKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxlDu5kPYAJsdJudMsq3AO%2BDBKfELxL%2BfaSVigeAo4%2BJd9SI1tiWOTJBZSTmjtlfXEWDoq15xGQUzN4aUMW8hXdjuedq5RatbzM4Fzrf8fgio4Qsz54HD9bIOiK%2BCCawSoNniS7GjpZc%2BnTdgKpwcJQIqCcIDUegno1C%2BKVNiQqYQYibI4HVY473mirI5VOwgp%2B5mQT%2Bw%2BPgRaJpTWrdHHT657iG361HAZ2u%2BkgTvuPabTR9k%2BaKkKTZse8yGRWOOMfcD4eF72ght5YD8o4%2FkMXpknzEVuE94g3HaQFyv1%2BOiCfZdtO3%2B%2F2ggHlImQqEobtcthDRbALhzZOIPY9C3Nggz40ekwrQy5bc6iAvVcGqlA8EctsGG53UPJ9nMpO62VMVlW%2B%2BZzyGIycA6DNtiEJLgICsR6Xx83zL%2BuwQcVp8LEhkDrEzCeMqpTWz4Ax1ZPgyz6mxTr9o50e81Ovwfd332T9gI7ArS9EV9btn%2FBefQ9Sg2toHeumyoZEheXd6Gi0sgOmqCUpjxR5rJl4MdvMGsWgG9wmJYZIZh7oO%2F4UCReq%2BJ4qxzewiauoIQnqOeDacCXBi30HmQgffT64LhcuuS1AR7w9zi9V%2Fl7auWQ%2FLg0kw%2Fpn8BFt7t97wV9npVJraW8H5G5RM0ZovTDi88rCBjqkAXMtLPYL0g%2Fh972gbHGzuFory7%2F%2BLW6cKvAxrIj3sSh6N5BBBVmqSlgyE8TE1M8%2FJbbN4zWTrplrdViWSMscoBX8fWgHIYtsEG%2FU%2FM8TD9GHBa9s1xTXAveDR7oCpbbq7Oz9fvs5gUq8SXUJkZlxqTMmYtZ045vWO37jQL1dmE%2BwYPXq00haie8RQYz3L73eMCIFCaOqHiB2UXL4ESaLshGqXWDJ&X-Amz-Signature=12ed252c7b01251a1d61a1db07430955c4c560b9cd0a94b01b58a2a21ed337a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWY6L5KE%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDM2inaVyXiFsK%2BY5gerSVTZQDVHp%2B16783zbtQE0z0wQIhAIBRzpyuk5vvxJOPQdsqBnXs0PhblBdAfWAH9blgflzEKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxlDu5kPYAJsdJudMsq3AO%2BDBKfELxL%2BfaSVigeAo4%2BJd9SI1tiWOTJBZSTmjtlfXEWDoq15xGQUzN4aUMW8hXdjuedq5RatbzM4Fzrf8fgio4Qsz54HD9bIOiK%2BCCawSoNniS7GjpZc%2BnTdgKpwcJQIqCcIDUegno1C%2BKVNiQqYQYibI4HVY473mirI5VOwgp%2B5mQT%2Bw%2BPgRaJpTWrdHHT657iG361HAZ2u%2BkgTvuPabTR9k%2BaKkKTZse8yGRWOOMfcD4eF72ght5YD8o4%2FkMXpknzEVuE94g3HaQFyv1%2BOiCfZdtO3%2B%2F2ggHlImQqEobtcthDRbALhzZOIPY9C3Nggz40ekwrQy5bc6iAvVcGqlA8EctsGG53UPJ9nMpO62VMVlW%2B%2BZzyGIycA6DNtiEJLgICsR6Xx83zL%2BuwQcVp8LEhkDrEzCeMqpTWz4Ax1ZPgyz6mxTr9o50e81Ovwfd332T9gI7ArS9EV9btn%2FBefQ9Sg2toHeumyoZEheXd6Gi0sgOmqCUpjxR5rJl4MdvMGsWgG9wmJYZIZh7oO%2F4UCReq%2BJ4qxzewiauoIQnqOeDacCXBi30HmQgffT64LhcuuS1AR7w9zi9V%2Fl7auWQ%2FLg0kw%2Fpn8BFt7t97wV9npVJraW8H5G5RM0ZovTDi88rCBjqkAXMtLPYL0g%2Fh972gbHGzuFory7%2F%2BLW6cKvAxrIj3sSh6N5BBBVmqSlgyE8TE1M8%2FJbbN4zWTrplrdViWSMscoBX8fWgHIYtsEG%2FU%2FM8TD9GHBa9s1xTXAveDR7oCpbbq7Oz9fvs5gUq8SXUJkZlxqTMmYtZ045vWO37jQL1dmE%2BwYPXq00haie8RQYz3L73eMCIFCaOqHiB2UXL4ESaLshGqXWDJ&X-Amz-Signature=8b2c13dfd1d5bf44da49b85fcd958a68995d736fca89d7bcf58ccdfe93003bb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWY6L5KE%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDM2inaVyXiFsK%2BY5gerSVTZQDVHp%2B16783zbtQE0z0wQIhAIBRzpyuk5vvxJOPQdsqBnXs0PhblBdAfWAH9blgflzEKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxlDu5kPYAJsdJudMsq3AO%2BDBKfELxL%2BfaSVigeAo4%2BJd9SI1tiWOTJBZSTmjtlfXEWDoq15xGQUzN4aUMW8hXdjuedq5RatbzM4Fzrf8fgio4Qsz54HD9bIOiK%2BCCawSoNniS7GjpZc%2BnTdgKpwcJQIqCcIDUegno1C%2BKVNiQqYQYibI4HVY473mirI5VOwgp%2B5mQT%2Bw%2BPgRaJpTWrdHHT657iG361HAZ2u%2BkgTvuPabTR9k%2BaKkKTZse8yGRWOOMfcD4eF72ght5YD8o4%2FkMXpknzEVuE94g3HaQFyv1%2BOiCfZdtO3%2B%2F2ggHlImQqEobtcthDRbALhzZOIPY9C3Nggz40ekwrQy5bc6iAvVcGqlA8EctsGG53UPJ9nMpO62VMVlW%2B%2BZzyGIycA6DNtiEJLgICsR6Xx83zL%2BuwQcVp8LEhkDrEzCeMqpTWz4Ax1ZPgyz6mxTr9o50e81Ovwfd332T9gI7ArS9EV9btn%2FBefQ9Sg2toHeumyoZEheXd6Gi0sgOmqCUpjxR5rJl4MdvMGsWgG9wmJYZIZh7oO%2F4UCReq%2BJ4qxzewiauoIQnqOeDacCXBi30HmQgffT64LhcuuS1AR7w9zi9V%2Fl7auWQ%2FLg0kw%2Fpn8BFt7t97wV9npVJraW8H5G5RM0ZovTDi88rCBjqkAXMtLPYL0g%2Fh972gbHGzuFory7%2F%2BLW6cKvAxrIj3sSh6N5BBBVmqSlgyE8TE1M8%2FJbbN4zWTrplrdViWSMscoBX8fWgHIYtsEG%2FU%2FM8TD9GHBa9s1xTXAveDR7oCpbbq7Oz9fvs5gUq8SXUJkZlxqTMmYtZ045vWO37jQL1dmE%2BwYPXq00haie8RQYz3L73eMCIFCaOqHiB2UXL4ESaLshGqXWDJ&X-Amz-Signature=cf032713316683f73c99f77bde451985aa5b8d40bceaafb5094b8ad25b1ffee2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWY6L5KE%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDM2inaVyXiFsK%2BY5gerSVTZQDVHp%2B16783zbtQE0z0wQIhAIBRzpyuk5vvxJOPQdsqBnXs0PhblBdAfWAH9blgflzEKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxlDu5kPYAJsdJudMsq3AO%2BDBKfELxL%2BfaSVigeAo4%2BJd9SI1tiWOTJBZSTmjtlfXEWDoq15xGQUzN4aUMW8hXdjuedq5RatbzM4Fzrf8fgio4Qsz54HD9bIOiK%2BCCawSoNniS7GjpZc%2BnTdgKpwcJQIqCcIDUegno1C%2BKVNiQqYQYibI4HVY473mirI5VOwgp%2B5mQT%2Bw%2BPgRaJpTWrdHHT657iG361HAZ2u%2BkgTvuPabTR9k%2BaKkKTZse8yGRWOOMfcD4eF72ght5YD8o4%2FkMXpknzEVuE94g3HaQFyv1%2BOiCfZdtO3%2B%2F2ggHlImQqEobtcthDRbALhzZOIPY9C3Nggz40ekwrQy5bc6iAvVcGqlA8EctsGG53UPJ9nMpO62VMVlW%2B%2BZzyGIycA6DNtiEJLgICsR6Xx83zL%2BuwQcVp8LEhkDrEzCeMqpTWz4Ax1ZPgyz6mxTr9o50e81Ovwfd332T9gI7ArS9EV9btn%2FBefQ9Sg2toHeumyoZEheXd6Gi0sgOmqCUpjxR5rJl4MdvMGsWgG9wmJYZIZh7oO%2F4UCReq%2BJ4qxzewiauoIQnqOeDacCXBi30HmQgffT64LhcuuS1AR7w9zi9V%2Fl7auWQ%2FLg0kw%2Fpn8BFt7t97wV9npVJraW8H5G5RM0ZovTDi88rCBjqkAXMtLPYL0g%2Fh972gbHGzuFory7%2F%2BLW6cKvAxrIj3sSh6N5BBBVmqSlgyE8TE1M8%2FJbbN4zWTrplrdViWSMscoBX8fWgHIYtsEG%2FU%2FM8TD9GHBa9s1xTXAveDR7oCpbbq7Oz9fvs5gUq8SXUJkZlxqTMmYtZ045vWO37jQL1dmE%2BwYPXq00haie8RQYz3L73eMCIFCaOqHiB2UXL4ESaLshGqXWDJ&X-Amz-Signature=36520f0ca85133dd06fee92b33869d38d63f62327f81cb4e560815ba29e30754&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWY6L5KE%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDM2inaVyXiFsK%2BY5gerSVTZQDVHp%2B16783zbtQE0z0wQIhAIBRzpyuk5vvxJOPQdsqBnXs0PhblBdAfWAH9blgflzEKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxlDu5kPYAJsdJudMsq3AO%2BDBKfELxL%2BfaSVigeAo4%2BJd9SI1tiWOTJBZSTmjtlfXEWDoq15xGQUzN4aUMW8hXdjuedq5RatbzM4Fzrf8fgio4Qsz54HD9bIOiK%2BCCawSoNniS7GjpZc%2BnTdgKpwcJQIqCcIDUegno1C%2BKVNiQqYQYibI4HVY473mirI5VOwgp%2B5mQT%2Bw%2BPgRaJpTWrdHHT657iG361HAZ2u%2BkgTvuPabTR9k%2BaKkKTZse8yGRWOOMfcD4eF72ght5YD8o4%2FkMXpknzEVuE94g3HaQFyv1%2BOiCfZdtO3%2B%2F2ggHlImQqEobtcthDRbALhzZOIPY9C3Nggz40ekwrQy5bc6iAvVcGqlA8EctsGG53UPJ9nMpO62VMVlW%2B%2BZzyGIycA6DNtiEJLgICsR6Xx83zL%2BuwQcVp8LEhkDrEzCeMqpTWz4Ax1ZPgyz6mxTr9o50e81Ovwfd332T9gI7ArS9EV9btn%2FBefQ9Sg2toHeumyoZEheXd6Gi0sgOmqCUpjxR5rJl4MdvMGsWgG9wmJYZIZh7oO%2F4UCReq%2BJ4qxzewiauoIQnqOeDacCXBi30HmQgffT64LhcuuS1AR7w9zi9V%2Fl7auWQ%2FLg0kw%2Fpn8BFt7t97wV9npVJraW8H5G5RM0ZovTDi88rCBjqkAXMtLPYL0g%2Fh972gbHGzuFory7%2F%2BLW6cKvAxrIj3sSh6N5BBBVmqSlgyE8TE1M8%2FJbbN4zWTrplrdViWSMscoBX8fWgHIYtsEG%2FU%2FM8TD9GHBa9s1xTXAveDR7oCpbbq7Oz9fvs5gUq8SXUJkZlxqTMmYtZ045vWO37jQL1dmE%2BwYPXq00haie8RQYz3L73eMCIFCaOqHiB2UXL4ESaLshGqXWDJ&X-Amz-Signature=f83b5cacf9fb8fbbeff1eccd3c626aa0d8e10f820552abd1dea9e6ada3ffd989&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
