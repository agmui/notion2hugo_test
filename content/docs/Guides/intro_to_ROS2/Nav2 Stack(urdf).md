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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRCL4VJW%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T121609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIizHCXlj8b%2FJTqcGsz2WPaCDgAwmvXm3KVi%2BE%2BQYjcAiA%2BkzwJKWnAB7bH8V%2BmH25aFDDerpdD17Noxqgvck0CHyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMJ7huc8q1yj%2FRindAKtwDrdrrLs18oEZRvsBi0gE3B1hgOfgYB3KbquHWBpMIIyYY84M5pTvQfKyCFbDZ6ma%2Br0g0hIOF3PgrEtBsRR5dO167BUGBqwa63XHP9eLIqRAABLGLyDAXG8AkldrBXdrdcwO8S8re2SIRqreOx5vWKuwaq6wnrMHxCAqdtixh67KYwn0cxJfndLFGxodyHIko49Sll6dlSXjvQd3iJRb6AVmfctNr1c5b1qdvwe3EJcMSBFwLi3kLQYxhv5uA7ZuJXopUMKzCtxXL20rtrht3i4CrC96KZ4pSCMefCrf%2B6ioyCZKYInqz3gr22llsiTi9qoe7g4n4%2FKqROf%2B4dPAOTDUHWWixHnMFT8SJk7fl%2F2P2cjk2v1EugXbuqFgYAFEtgqrgC1kVz3EKngLJ3L5VUyv%2BL9D8bmZxEzSD09sxkUAm92dbXUlDzTwHvYOOIj6J4vd2oH31KA7ehIadOwEao4rZ1HNC7%2B4caemKU6aKXkUp4W5YaGDgFurvYzJKmT%2BUB5iSFqKlXsx%2BnTVaJJgDealoMVHtdRP69mK4l%2FHdKLsGamcHijf8j%2FGJ9m9bl5TteZmuwXJ9vR9UPSpx3feTy2yZVhtuuh0ZicRJOjM0jXndidj8FfIspp5uJ3MwjOTbwQY6pgELfRSvqmanW5WrN2PI9jcMfKewdzyB1rXGPuaqQndZD06ChxbsiWqsV9L2T5B0Nwleq6OZgAPfd74dwvL0OZzMzmxGeXlEJU%2Ft1bAw4ZiKA2S9NjkkUSawxIo9KguKEvB8W%2FTfRaPdIiq%2FsPPa3wd83fjEZc7%2BKGtzmDnz81CD3wtqMlCY8vfa%2FnQwx14kYzHNRSZAvy6S67j7mahQl8xOKhGPOACn&X-Amz-Signature=8b056f88355577b0960e74f87ec45e34153b6fda1295719cebcced47c6d2244a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRCL4VJW%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T121609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIizHCXlj8b%2FJTqcGsz2WPaCDgAwmvXm3KVi%2BE%2BQYjcAiA%2BkzwJKWnAB7bH8V%2BmH25aFDDerpdD17Noxqgvck0CHyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMJ7huc8q1yj%2FRindAKtwDrdrrLs18oEZRvsBi0gE3B1hgOfgYB3KbquHWBpMIIyYY84M5pTvQfKyCFbDZ6ma%2Br0g0hIOF3PgrEtBsRR5dO167BUGBqwa63XHP9eLIqRAABLGLyDAXG8AkldrBXdrdcwO8S8re2SIRqreOx5vWKuwaq6wnrMHxCAqdtixh67KYwn0cxJfndLFGxodyHIko49Sll6dlSXjvQd3iJRb6AVmfctNr1c5b1qdvwe3EJcMSBFwLi3kLQYxhv5uA7ZuJXopUMKzCtxXL20rtrht3i4CrC96KZ4pSCMefCrf%2B6ioyCZKYInqz3gr22llsiTi9qoe7g4n4%2FKqROf%2B4dPAOTDUHWWixHnMFT8SJk7fl%2F2P2cjk2v1EugXbuqFgYAFEtgqrgC1kVz3EKngLJ3L5VUyv%2BL9D8bmZxEzSD09sxkUAm92dbXUlDzTwHvYOOIj6J4vd2oH31KA7ehIadOwEao4rZ1HNC7%2B4caemKU6aKXkUp4W5YaGDgFurvYzJKmT%2BUB5iSFqKlXsx%2BnTVaJJgDealoMVHtdRP69mK4l%2FHdKLsGamcHijf8j%2FGJ9m9bl5TteZmuwXJ9vR9UPSpx3feTy2yZVhtuuh0ZicRJOjM0jXndidj8FfIspp5uJ3MwjOTbwQY6pgELfRSvqmanW5WrN2PI9jcMfKewdzyB1rXGPuaqQndZD06ChxbsiWqsV9L2T5B0Nwleq6OZgAPfd74dwvL0OZzMzmxGeXlEJU%2Ft1bAw4ZiKA2S9NjkkUSawxIo9KguKEvB8W%2FTfRaPdIiq%2FsPPa3wd83fjEZc7%2BKGtzmDnz81CD3wtqMlCY8vfa%2FnQwx14kYzHNRSZAvy6S67j7mahQl8xOKhGPOACn&X-Amz-Signature=1437ea33044b05b4c5f3b15bba3b40e41b79dedb96a58c3ce41d8175542107b6&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRCL4VJW%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T121609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIizHCXlj8b%2FJTqcGsz2WPaCDgAwmvXm3KVi%2BE%2BQYjcAiA%2BkzwJKWnAB7bH8V%2BmH25aFDDerpdD17Noxqgvck0CHyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMJ7huc8q1yj%2FRindAKtwDrdrrLs18oEZRvsBi0gE3B1hgOfgYB3KbquHWBpMIIyYY84M5pTvQfKyCFbDZ6ma%2Br0g0hIOF3PgrEtBsRR5dO167BUGBqwa63XHP9eLIqRAABLGLyDAXG8AkldrBXdrdcwO8S8re2SIRqreOx5vWKuwaq6wnrMHxCAqdtixh67KYwn0cxJfndLFGxodyHIko49Sll6dlSXjvQd3iJRb6AVmfctNr1c5b1qdvwe3EJcMSBFwLi3kLQYxhv5uA7ZuJXopUMKzCtxXL20rtrht3i4CrC96KZ4pSCMefCrf%2B6ioyCZKYInqz3gr22llsiTi9qoe7g4n4%2FKqROf%2B4dPAOTDUHWWixHnMFT8SJk7fl%2F2P2cjk2v1EugXbuqFgYAFEtgqrgC1kVz3EKngLJ3L5VUyv%2BL9D8bmZxEzSD09sxkUAm92dbXUlDzTwHvYOOIj6J4vd2oH31KA7ehIadOwEao4rZ1HNC7%2B4caemKU6aKXkUp4W5YaGDgFurvYzJKmT%2BUB5iSFqKlXsx%2BnTVaJJgDealoMVHtdRP69mK4l%2FHdKLsGamcHijf8j%2FGJ9m9bl5TteZmuwXJ9vR9UPSpx3feTy2yZVhtuuh0ZicRJOjM0jXndidj8FfIspp5uJ3MwjOTbwQY6pgELfRSvqmanW5WrN2PI9jcMfKewdzyB1rXGPuaqQndZD06ChxbsiWqsV9L2T5B0Nwleq6OZgAPfd74dwvL0OZzMzmxGeXlEJU%2Ft1bAw4ZiKA2S9NjkkUSawxIo9KguKEvB8W%2FTfRaPdIiq%2FsPPa3wd83fjEZc7%2BKGtzmDnz81CD3wtqMlCY8vfa%2FnQwx14kYzHNRSZAvy6S67j7mahQl8xOKhGPOACn&X-Amz-Signature=eb59011e8f358b8b65827e728f6d47dbcc31fdcc876f57758059231a958d4a0d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRCL4VJW%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T121609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIizHCXlj8b%2FJTqcGsz2WPaCDgAwmvXm3KVi%2BE%2BQYjcAiA%2BkzwJKWnAB7bH8V%2BmH25aFDDerpdD17Noxqgvck0CHyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMJ7huc8q1yj%2FRindAKtwDrdrrLs18oEZRvsBi0gE3B1hgOfgYB3KbquHWBpMIIyYY84M5pTvQfKyCFbDZ6ma%2Br0g0hIOF3PgrEtBsRR5dO167BUGBqwa63XHP9eLIqRAABLGLyDAXG8AkldrBXdrdcwO8S8re2SIRqreOx5vWKuwaq6wnrMHxCAqdtixh67KYwn0cxJfndLFGxodyHIko49Sll6dlSXjvQd3iJRb6AVmfctNr1c5b1qdvwe3EJcMSBFwLi3kLQYxhv5uA7ZuJXopUMKzCtxXL20rtrht3i4CrC96KZ4pSCMefCrf%2B6ioyCZKYInqz3gr22llsiTi9qoe7g4n4%2FKqROf%2B4dPAOTDUHWWixHnMFT8SJk7fl%2F2P2cjk2v1EugXbuqFgYAFEtgqrgC1kVz3EKngLJ3L5VUyv%2BL9D8bmZxEzSD09sxkUAm92dbXUlDzTwHvYOOIj6J4vd2oH31KA7ehIadOwEao4rZ1HNC7%2B4caemKU6aKXkUp4W5YaGDgFurvYzJKmT%2BUB5iSFqKlXsx%2BnTVaJJgDealoMVHtdRP69mK4l%2FHdKLsGamcHijf8j%2FGJ9m9bl5TteZmuwXJ9vR9UPSpx3feTy2yZVhtuuh0ZicRJOjM0jXndidj8FfIspp5uJ3MwjOTbwQY6pgELfRSvqmanW5WrN2PI9jcMfKewdzyB1rXGPuaqQndZD06ChxbsiWqsV9L2T5B0Nwleq6OZgAPfd74dwvL0OZzMzmxGeXlEJU%2Ft1bAw4ZiKA2S9NjkkUSawxIo9KguKEvB8W%2FTfRaPdIiq%2FsPPa3wd83fjEZc7%2BKGtzmDnz81CD3wtqMlCY8vfa%2FnQwx14kYzHNRSZAvy6S67j7mahQl8xOKhGPOACn&X-Amz-Signature=7a5b2fc9fca83aec11241f85deac7889a51e119ad85e9fed50a8eb272ed47025&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRCL4VJW%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T121609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIizHCXlj8b%2FJTqcGsz2WPaCDgAwmvXm3KVi%2BE%2BQYjcAiA%2BkzwJKWnAB7bH8V%2BmH25aFDDerpdD17Noxqgvck0CHyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMJ7huc8q1yj%2FRindAKtwDrdrrLs18oEZRvsBi0gE3B1hgOfgYB3KbquHWBpMIIyYY84M5pTvQfKyCFbDZ6ma%2Br0g0hIOF3PgrEtBsRR5dO167BUGBqwa63XHP9eLIqRAABLGLyDAXG8AkldrBXdrdcwO8S8re2SIRqreOx5vWKuwaq6wnrMHxCAqdtixh67KYwn0cxJfndLFGxodyHIko49Sll6dlSXjvQd3iJRb6AVmfctNr1c5b1qdvwe3EJcMSBFwLi3kLQYxhv5uA7ZuJXopUMKzCtxXL20rtrht3i4CrC96KZ4pSCMefCrf%2B6ioyCZKYInqz3gr22llsiTi9qoe7g4n4%2FKqROf%2B4dPAOTDUHWWixHnMFT8SJk7fl%2F2P2cjk2v1EugXbuqFgYAFEtgqrgC1kVz3EKngLJ3L5VUyv%2BL9D8bmZxEzSD09sxkUAm92dbXUlDzTwHvYOOIj6J4vd2oH31KA7ehIadOwEao4rZ1HNC7%2B4caemKU6aKXkUp4W5YaGDgFurvYzJKmT%2BUB5iSFqKlXsx%2BnTVaJJgDealoMVHtdRP69mK4l%2FHdKLsGamcHijf8j%2FGJ9m9bl5TteZmuwXJ9vR9UPSpx3feTy2yZVhtuuh0ZicRJOjM0jXndidj8FfIspp5uJ3MwjOTbwQY6pgELfRSvqmanW5WrN2PI9jcMfKewdzyB1rXGPuaqQndZD06ChxbsiWqsV9L2T5B0Nwleq6OZgAPfd74dwvL0OZzMzmxGeXlEJU%2Ft1bAw4ZiKA2S9NjkkUSawxIo9KguKEvB8W%2FTfRaPdIiq%2FsPPa3wd83fjEZc7%2BKGtzmDnz81CD3wtqMlCY8vfa%2FnQwx14kYzHNRSZAvy6S67j7mahQl8xOKhGPOACn&X-Amz-Signature=4d11cd23864674c9b801894ef3affe56155197bdc7c95d59c1456151b6216db4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRCL4VJW%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T121609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIizHCXlj8b%2FJTqcGsz2WPaCDgAwmvXm3KVi%2BE%2BQYjcAiA%2BkzwJKWnAB7bH8V%2BmH25aFDDerpdD17Noxqgvck0CHyr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMJ7huc8q1yj%2FRindAKtwDrdrrLs18oEZRvsBi0gE3B1hgOfgYB3KbquHWBpMIIyYY84M5pTvQfKyCFbDZ6ma%2Br0g0hIOF3PgrEtBsRR5dO167BUGBqwa63XHP9eLIqRAABLGLyDAXG8AkldrBXdrdcwO8S8re2SIRqreOx5vWKuwaq6wnrMHxCAqdtixh67KYwn0cxJfndLFGxodyHIko49Sll6dlSXjvQd3iJRb6AVmfctNr1c5b1qdvwe3EJcMSBFwLi3kLQYxhv5uA7ZuJXopUMKzCtxXL20rtrht3i4CrC96KZ4pSCMefCrf%2B6ioyCZKYInqz3gr22llsiTi9qoe7g4n4%2FKqROf%2B4dPAOTDUHWWixHnMFT8SJk7fl%2F2P2cjk2v1EugXbuqFgYAFEtgqrgC1kVz3EKngLJ3L5VUyv%2BL9D8bmZxEzSD09sxkUAm92dbXUlDzTwHvYOOIj6J4vd2oH31KA7ehIadOwEao4rZ1HNC7%2B4caemKU6aKXkUp4W5YaGDgFurvYzJKmT%2BUB5iSFqKlXsx%2BnTVaJJgDealoMVHtdRP69mK4l%2FHdKLsGamcHijf8j%2FGJ9m9bl5TteZmuwXJ9vR9UPSpx3feTy2yZVhtuuh0ZicRJOjM0jXndidj8FfIspp5uJ3MwjOTbwQY6pgELfRSvqmanW5WrN2PI9jcMfKewdzyB1rXGPuaqQndZD06ChxbsiWqsV9L2T5B0Nwleq6OZgAPfd74dwvL0OZzMzmxGeXlEJU%2Ft1bAw4ZiKA2S9NjkkUSawxIo9KguKEvB8W%2FTfRaPdIiq%2FsPPa3wd83fjEZc7%2BKGtzmDnz81CD3wtqMlCY8vfa%2FnQwx14kYzHNRSZAvy6S67j7mahQl8xOKhGPOACn&X-Amz-Signature=072ef7f7e87f942f4eb94701cee0c068631ce92f369340a35cfcd08f64e30a4b&X-Amz-SignedHeaders=host&x-id=GetObject)
