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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE6CHDXW%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T022846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHiE7%2FsPuErqdqpsfvMK5erFmedbMrhtdm5k82r%2Fa9YXAiEA%2B6gQVGwHZEdaFwyteKTBun1tSwelEkm%2FdKbZfBvaclsqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJgCKYwDJa0xbJMzmircA8gGf8jFTzYG%2F2qJICHbxeMjLxTB40DjZaiWJWyGmjMwjDWYbg4B3bwZm85wPOjjvFcnXouIiISat44QERCn8CAoGhBJUMn54JPXcJUclikg5iS2sQsuFJeKsZpG7Em1HGBnM%2F97eaxCOchq3Qx7ncRE%2BMOiwOv2KJPuhzdQqxTEXLlZsPJ8nvwicJBjvYPN2vRsZ5kffDeO1wpp5RFpsLRH11LQrl1apksHolMHhK3qiTqQrUv9kgHTC%2F29i8GXWguRBF0uHa04G44SXBDShMklp36QBIuJGsfd3N1FTxb1rBcm%2FME57oYDhT7zvee86c4h6PAn1l5%2BFrX8AF%2B6KZC65YNRGSSzGiP7x30%2B9nJAo1OLJhj7pXp5MsZcDmnntUhBcuQEK%2BK8sQyjAj4C%2F4DlurYRUzSpP3rvlcmQVpK3KYlnNIJDFGOkcPhMGFaMkNbAphTodppXjWJXzYbWHIbMex7%2BnhxgGPksNNSq479vmEv4jeCQpjwhOyFV34L1FWbFvQkW%2BelJ6MK9GtYsaRKC8UBkKWqAgfzM0vQkHidoP1GGzrSxRin43FS%2FiXnD6iUU8jN3lYrZoo8X27Pdnqd8A%2FhWKAqE7FKrVsCNKrDN%2BqB81rBaQxo0TasxMInLr8EGOqUB9wOcUklQAf6PULt%2BV4dfHr3GJaX3zPt88C31SqV1O8XA9nQJpnWNLRt5%2Fg0vxIEssgpVAWTF9P%2FUZR%2BaYc111cHtpfwqfqzjosN%2F4jUu4s9BDbAem8%2Fr2wfMFuEzN7ZIPD72hwqQZB1LHWcRoKIP%2Bg4pxR3yMIZKrzfqXszxw%2F19nUrbXACBhujvTEqsfuTqK6iutUBma53s4Fyw0MJT%2Byy7MYh%2F&X-Amz-Signature=1ef787cfc1d43948ec0746358cc07361488120a9b71a9521af8ddcad591d200b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE6CHDXW%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T022846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHiE7%2FsPuErqdqpsfvMK5erFmedbMrhtdm5k82r%2Fa9YXAiEA%2B6gQVGwHZEdaFwyteKTBun1tSwelEkm%2FdKbZfBvaclsqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJgCKYwDJa0xbJMzmircA8gGf8jFTzYG%2F2qJICHbxeMjLxTB40DjZaiWJWyGmjMwjDWYbg4B3bwZm85wPOjjvFcnXouIiISat44QERCn8CAoGhBJUMn54JPXcJUclikg5iS2sQsuFJeKsZpG7Em1HGBnM%2F97eaxCOchq3Qx7ncRE%2BMOiwOv2KJPuhzdQqxTEXLlZsPJ8nvwicJBjvYPN2vRsZ5kffDeO1wpp5RFpsLRH11LQrl1apksHolMHhK3qiTqQrUv9kgHTC%2F29i8GXWguRBF0uHa04G44SXBDShMklp36QBIuJGsfd3N1FTxb1rBcm%2FME57oYDhT7zvee86c4h6PAn1l5%2BFrX8AF%2B6KZC65YNRGSSzGiP7x30%2B9nJAo1OLJhj7pXp5MsZcDmnntUhBcuQEK%2BK8sQyjAj4C%2F4DlurYRUzSpP3rvlcmQVpK3KYlnNIJDFGOkcPhMGFaMkNbAphTodppXjWJXzYbWHIbMex7%2BnhxgGPksNNSq479vmEv4jeCQpjwhOyFV34L1FWbFvQkW%2BelJ6MK9GtYsaRKC8UBkKWqAgfzM0vQkHidoP1GGzrSxRin43FS%2FiXnD6iUU8jN3lYrZoo8X27Pdnqd8A%2FhWKAqE7FKrVsCNKrDN%2BqB81rBaQxo0TasxMInLr8EGOqUB9wOcUklQAf6PULt%2BV4dfHr3GJaX3zPt88C31SqV1O8XA9nQJpnWNLRt5%2Fg0vxIEssgpVAWTF9P%2FUZR%2BaYc111cHtpfwqfqzjosN%2F4jUu4s9BDbAem8%2Fr2wfMFuEzN7ZIPD72hwqQZB1LHWcRoKIP%2Bg4pxR3yMIZKrzfqXszxw%2F19nUrbXACBhujvTEqsfuTqK6iutUBma53s4Fyw0MJT%2Byy7MYh%2F&X-Amz-Signature=bab1f6fdab4b2cb9a854f5a014ed0d6c344688500f0f805e5f05cbcff70a429b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE6CHDXW%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T022846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHiE7%2FsPuErqdqpsfvMK5erFmedbMrhtdm5k82r%2Fa9YXAiEA%2B6gQVGwHZEdaFwyteKTBun1tSwelEkm%2FdKbZfBvaclsqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJgCKYwDJa0xbJMzmircA8gGf8jFTzYG%2F2qJICHbxeMjLxTB40DjZaiWJWyGmjMwjDWYbg4B3bwZm85wPOjjvFcnXouIiISat44QERCn8CAoGhBJUMn54JPXcJUclikg5iS2sQsuFJeKsZpG7Em1HGBnM%2F97eaxCOchq3Qx7ncRE%2BMOiwOv2KJPuhzdQqxTEXLlZsPJ8nvwicJBjvYPN2vRsZ5kffDeO1wpp5RFpsLRH11LQrl1apksHolMHhK3qiTqQrUv9kgHTC%2F29i8GXWguRBF0uHa04G44SXBDShMklp36QBIuJGsfd3N1FTxb1rBcm%2FME57oYDhT7zvee86c4h6PAn1l5%2BFrX8AF%2B6KZC65YNRGSSzGiP7x30%2B9nJAo1OLJhj7pXp5MsZcDmnntUhBcuQEK%2BK8sQyjAj4C%2F4DlurYRUzSpP3rvlcmQVpK3KYlnNIJDFGOkcPhMGFaMkNbAphTodppXjWJXzYbWHIbMex7%2BnhxgGPksNNSq479vmEv4jeCQpjwhOyFV34L1FWbFvQkW%2BelJ6MK9GtYsaRKC8UBkKWqAgfzM0vQkHidoP1GGzrSxRin43FS%2FiXnD6iUU8jN3lYrZoo8X27Pdnqd8A%2FhWKAqE7FKrVsCNKrDN%2BqB81rBaQxo0TasxMInLr8EGOqUB9wOcUklQAf6PULt%2BV4dfHr3GJaX3zPt88C31SqV1O8XA9nQJpnWNLRt5%2Fg0vxIEssgpVAWTF9P%2FUZR%2BaYc111cHtpfwqfqzjosN%2F4jUu4s9BDbAem8%2Fr2wfMFuEzN7ZIPD72hwqQZB1LHWcRoKIP%2Bg4pxR3yMIZKrzfqXszxw%2F19nUrbXACBhujvTEqsfuTqK6iutUBma53s4Fyw0MJT%2Byy7MYh%2F&X-Amz-Signature=be1e3e63fe897f93b94f456038a06f788fbbfa6bf5d20ea6d741865d5c5f76d7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE6CHDXW%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T022846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHiE7%2FsPuErqdqpsfvMK5erFmedbMrhtdm5k82r%2Fa9YXAiEA%2B6gQVGwHZEdaFwyteKTBun1tSwelEkm%2FdKbZfBvaclsqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJgCKYwDJa0xbJMzmircA8gGf8jFTzYG%2F2qJICHbxeMjLxTB40DjZaiWJWyGmjMwjDWYbg4B3bwZm85wPOjjvFcnXouIiISat44QERCn8CAoGhBJUMn54JPXcJUclikg5iS2sQsuFJeKsZpG7Em1HGBnM%2F97eaxCOchq3Qx7ncRE%2BMOiwOv2KJPuhzdQqxTEXLlZsPJ8nvwicJBjvYPN2vRsZ5kffDeO1wpp5RFpsLRH11LQrl1apksHolMHhK3qiTqQrUv9kgHTC%2F29i8GXWguRBF0uHa04G44SXBDShMklp36QBIuJGsfd3N1FTxb1rBcm%2FME57oYDhT7zvee86c4h6PAn1l5%2BFrX8AF%2B6KZC65YNRGSSzGiP7x30%2B9nJAo1OLJhj7pXp5MsZcDmnntUhBcuQEK%2BK8sQyjAj4C%2F4DlurYRUzSpP3rvlcmQVpK3KYlnNIJDFGOkcPhMGFaMkNbAphTodppXjWJXzYbWHIbMex7%2BnhxgGPksNNSq479vmEv4jeCQpjwhOyFV34L1FWbFvQkW%2BelJ6MK9GtYsaRKC8UBkKWqAgfzM0vQkHidoP1GGzrSxRin43FS%2FiXnD6iUU8jN3lYrZoo8X27Pdnqd8A%2FhWKAqE7FKrVsCNKrDN%2BqB81rBaQxo0TasxMInLr8EGOqUB9wOcUklQAf6PULt%2BV4dfHr3GJaX3zPt88C31SqV1O8XA9nQJpnWNLRt5%2Fg0vxIEssgpVAWTF9P%2FUZR%2BaYc111cHtpfwqfqzjosN%2F4jUu4s9BDbAem8%2Fr2wfMFuEzN7ZIPD72hwqQZB1LHWcRoKIP%2Bg4pxR3yMIZKrzfqXszxw%2F19nUrbXACBhujvTEqsfuTqK6iutUBma53s4Fyw0MJT%2Byy7MYh%2F&X-Amz-Signature=f172d2e9f68aff9d90f6f3bb96953804f8a750957382debe4b6a8afca40fe1c2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE6CHDXW%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T022846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHiE7%2FsPuErqdqpsfvMK5erFmedbMrhtdm5k82r%2Fa9YXAiEA%2B6gQVGwHZEdaFwyteKTBun1tSwelEkm%2FdKbZfBvaclsqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJgCKYwDJa0xbJMzmircA8gGf8jFTzYG%2F2qJICHbxeMjLxTB40DjZaiWJWyGmjMwjDWYbg4B3bwZm85wPOjjvFcnXouIiISat44QERCn8CAoGhBJUMn54JPXcJUclikg5iS2sQsuFJeKsZpG7Em1HGBnM%2F97eaxCOchq3Qx7ncRE%2BMOiwOv2KJPuhzdQqxTEXLlZsPJ8nvwicJBjvYPN2vRsZ5kffDeO1wpp5RFpsLRH11LQrl1apksHolMHhK3qiTqQrUv9kgHTC%2F29i8GXWguRBF0uHa04G44SXBDShMklp36QBIuJGsfd3N1FTxb1rBcm%2FME57oYDhT7zvee86c4h6PAn1l5%2BFrX8AF%2B6KZC65YNRGSSzGiP7x30%2B9nJAo1OLJhj7pXp5MsZcDmnntUhBcuQEK%2BK8sQyjAj4C%2F4DlurYRUzSpP3rvlcmQVpK3KYlnNIJDFGOkcPhMGFaMkNbAphTodppXjWJXzYbWHIbMex7%2BnhxgGPksNNSq479vmEv4jeCQpjwhOyFV34L1FWbFvQkW%2BelJ6MK9GtYsaRKC8UBkKWqAgfzM0vQkHidoP1GGzrSxRin43FS%2FiXnD6iUU8jN3lYrZoo8X27Pdnqd8A%2FhWKAqE7FKrVsCNKrDN%2BqB81rBaQxo0TasxMInLr8EGOqUB9wOcUklQAf6PULt%2BV4dfHr3GJaX3zPt88C31SqV1O8XA9nQJpnWNLRt5%2Fg0vxIEssgpVAWTF9P%2FUZR%2BaYc111cHtpfwqfqzjosN%2F4jUu4s9BDbAem8%2Fr2wfMFuEzN7ZIPD72hwqQZB1LHWcRoKIP%2Bg4pxR3yMIZKrzfqXszxw%2F19nUrbXACBhujvTEqsfuTqK6iutUBma53s4Fyw0MJT%2Byy7MYh%2F&X-Amz-Signature=d5a0ad10482d85962d62363385c7bdb4ded2d24b841d01ccb4383df1fb66f9c4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE6CHDXW%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T022846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHiE7%2FsPuErqdqpsfvMK5erFmedbMrhtdm5k82r%2Fa9YXAiEA%2B6gQVGwHZEdaFwyteKTBun1tSwelEkm%2FdKbZfBvaclsqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJgCKYwDJa0xbJMzmircA8gGf8jFTzYG%2F2qJICHbxeMjLxTB40DjZaiWJWyGmjMwjDWYbg4B3bwZm85wPOjjvFcnXouIiISat44QERCn8CAoGhBJUMn54JPXcJUclikg5iS2sQsuFJeKsZpG7Em1HGBnM%2F97eaxCOchq3Qx7ncRE%2BMOiwOv2KJPuhzdQqxTEXLlZsPJ8nvwicJBjvYPN2vRsZ5kffDeO1wpp5RFpsLRH11LQrl1apksHolMHhK3qiTqQrUv9kgHTC%2F29i8GXWguRBF0uHa04G44SXBDShMklp36QBIuJGsfd3N1FTxb1rBcm%2FME57oYDhT7zvee86c4h6PAn1l5%2BFrX8AF%2B6KZC65YNRGSSzGiP7x30%2B9nJAo1OLJhj7pXp5MsZcDmnntUhBcuQEK%2BK8sQyjAj4C%2F4DlurYRUzSpP3rvlcmQVpK3KYlnNIJDFGOkcPhMGFaMkNbAphTodppXjWJXzYbWHIbMex7%2BnhxgGPksNNSq479vmEv4jeCQpjwhOyFV34L1FWbFvQkW%2BelJ6MK9GtYsaRKC8UBkKWqAgfzM0vQkHidoP1GGzrSxRin43FS%2FiXnD6iUU8jN3lYrZoo8X27Pdnqd8A%2FhWKAqE7FKrVsCNKrDN%2BqB81rBaQxo0TasxMInLr8EGOqUB9wOcUklQAf6PULt%2BV4dfHr3GJaX3zPt88C31SqV1O8XA9nQJpnWNLRt5%2Fg0vxIEssgpVAWTF9P%2FUZR%2BaYc111cHtpfwqfqzjosN%2F4jUu4s9BDbAem8%2Fr2wfMFuEzN7ZIPD72hwqQZB1LHWcRoKIP%2Bg4pxR3yMIZKrzfqXszxw%2F19nUrbXACBhujvTEqsfuTqK6iutUBma53s4Fyw0MJT%2Byy7MYh%2F&X-Amz-Signature=2db966532fb7baa049ea86ead2c2cfed01b0930595ff34d478bc7a206374ab50&X-Amz-SignedHeaders=host&x-id=GetObject)
