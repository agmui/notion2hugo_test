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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IW7H54B%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T081158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDLxSZ%2Bl%2FGJgI0BVVqc6q%2Bqapapt0ExWUAdxo4nHm%2BL5AIgQgqaesIWjxH5qQaaco8FfoN94eJmhsfBUSrgti9aKH8qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOtVmY2b91Vzc3nO8ircA%2BRQG08JWWw0ntjcWczGSVAqezVS2j%2FExm5liwf4PAfiWA1eaDXTHa1t09KlH1%2FCmAmu99lhoREx%2B6JpgyP4pj8OwH2OvWvB94o22vvlHHbP9dMmQvB5VJY5eManEDSp%2BdEhz2HhrZjndIUC6lzm7C97xoeGW%2BakQ2DQgMHCniN0NL6%2BJbu3Cwqfxn9bUmNV1Q%2BUvDBSntiL8%2FGXKXk68YskFq708XL9K2l39lnp1S%2F0y3Rz9lMdHas8aT1GF6FDbvGgfjMGgyiFuHyk5w39MS%2FEiJ0f6qdpp2tZhk1prDKSgKCuIVN9%2BHxoaNJkcImBhJMlRXeBL4Znruj1Boy%2F9RfmYgsDmYuPv39dyQSEJbsPOtdF8ThKKBzLklhCQTFSm%2F7zQ%2BLQzMXdD7opryIyYEszHvv7IkTSFKCAv3E4EtOjl6VwDtAX1YvjZUGg5%2BOuKjbOCDk5D%2B%2FqJ8inDBjmnXDCCQPb1As9eJD07o5atSu0qV%2B5cQIUepblPmd8K48eZ8%2BpGqfg2NGN%2F%2Foyemdcma0%2Bkg2NH%2FeSaTfYsxJqFSNJGdWyVwBMy2M94zhHXnMUToHwdQbB1gDviAmPKsvmxyGVBdWPuWZBypnICp6AtVWRWrO6VeSVnGAjQeyEMMT00cAGOqUBxz%2FxoqbUEfD6ZEsscKSaoOHNlVtGLuXNFdj8mrfLH4tBqfFAcccfZMHgKFM%2BQQI2NNNYLpUdKir6FvC4aFsjFQVI%2BNeMDnL7ZzTt%2F54R3POzFm7y2alYn7mRSU4Rpb3Y6sNcrf%2Btkmh4dtd2EqlJUEOxEDWV5E9Y1vNzzTzwdhFsF4eiZo1oxChoVfFsmYfP3hqZi6gYInW8zdcU7wrvvp8hu38M&X-Amz-Signature=606fa4314447c731307d6a92418778886bc2e83e5e864cb3607507e9da2965ba&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IW7H54B%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T081158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDLxSZ%2Bl%2FGJgI0BVVqc6q%2Bqapapt0ExWUAdxo4nHm%2BL5AIgQgqaesIWjxH5qQaaco8FfoN94eJmhsfBUSrgti9aKH8qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOtVmY2b91Vzc3nO8ircA%2BRQG08JWWw0ntjcWczGSVAqezVS2j%2FExm5liwf4PAfiWA1eaDXTHa1t09KlH1%2FCmAmu99lhoREx%2B6JpgyP4pj8OwH2OvWvB94o22vvlHHbP9dMmQvB5VJY5eManEDSp%2BdEhz2HhrZjndIUC6lzm7C97xoeGW%2BakQ2DQgMHCniN0NL6%2BJbu3Cwqfxn9bUmNV1Q%2BUvDBSntiL8%2FGXKXk68YskFq708XL9K2l39lnp1S%2F0y3Rz9lMdHas8aT1GF6FDbvGgfjMGgyiFuHyk5w39MS%2FEiJ0f6qdpp2tZhk1prDKSgKCuIVN9%2BHxoaNJkcImBhJMlRXeBL4Znruj1Boy%2F9RfmYgsDmYuPv39dyQSEJbsPOtdF8ThKKBzLklhCQTFSm%2F7zQ%2BLQzMXdD7opryIyYEszHvv7IkTSFKCAv3E4EtOjl6VwDtAX1YvjZUGg5%2BOuKjbOCDk5D%2B%2FqJ8inDBjmnXDCCQPb1As9eJD07o5atSu0qV%2B5cQIUepblPmd8K48eZ8%2BpGqfg2NGN%2F%2Foyemdcma0%2Bkg2NH%2FeSaTfYsxJqFSNJGdWyVwBMy2M94zhHXnMUToHwdQbB1gDviAmPKsvmxyGVBdWPuWZBypnICp6AtVWRWrO6VeSVnGAjQeyEMMT00cAGOqUBxz%2FxoqbUEfD6ZEsscKSaoOHNlVtGLuXNFdj8mrfLH4tBqfFAcccfZMHgKFM%2BQQI2NNNYLpUdKir6FvC4aFsjFQVI%2BNeMDnL7ZzTt%2F54R3POzFm7y2alYn7mRSU4Rpb3Y6sNcrf%2Btkmh4dtd2EqlJUEOxEDWV5E9Y1vNzzTzwdhFsF4eiZo1oxChoVfFsmYfP3hqZi6gYInW8zdcU7wrvvp8hu38M&X-Amz-Signature=eb6858f954f7e5f04fb6f5a4097e2458a4e72bbd02ca8aad0c142d430d18a56e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IW7H54B%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T081158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDLxSZ%2Bl%2FGJgI0BVVqc6q%2Bqapapt0ExWUAdxo4nHm%2BL5AIgQgqaesIWjxH5qQaaco8FfoN94eJmhsfBUSrgti9aKH8qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOtVmY2b91Vzc3nO8ircA%2BRQG08JWWw0ntjcWczGSVAqezVS2j%2FExm5liwf4PAfiWA1eaDXTHa1t09KlH1%2FCmAmu99lhoREx%2B6JpgyP4pj8OwH2OvWvB94o22vvlHHbP9dMmQvB5VJY5eManEDSp%2BdEhz2HhrZjndIUC6lzm7C97xoeGW%2BakQ2DQgMHCniN0NL6%2BJbu3Cwqfxn9bUmNV1Q%2BUvDBSntiL8%2FGXKXk68YskFq708XL9K2l39lnp1S%2F0y3Rz9lMdHas8aT1GF6FDbvGgfjMGgyiFuHyk5w39MS%2FEiJ0f6qdpp2tZhk1prDKSgKCuIVN9%2BHxoaNJkcImBhJMlRXeBL4Znruj1Boy%2F9RfmYgsDmYuPv39dyQSEJbsPOtdF8ThKKBzLklhCQTFSm%2F7zQ%2BLQzMXdD7opryIyYEszHvv7IkTSFKCAv3E4EtOjl6VwDtAX1YvjZUGg5%2BOuKjbOCDk5D%2B%2FqJ8inDBjmnXDCCQPb1As9eJD07o5atSu0qV%2B5cQIUepblPmd8K48eZ8%2BpGqfg2NGN%2F%2Foyemdcma0%2Bkg2NH%2FeSaTfYsxJqFSNJGdWyVwBMy2M94zhHXnMUToHwdQbB1gDviAmPKsvmxyGVBdWPuWZBypnICp6AtVWRWrO6VeSVnGAjQeyEMMT00cAGOqUBxz%2FxoqbUEfD6ZEsscKSaoOHNlVtGLuXNFdj8mrfLH4tBqfFAcccfZMHgKFM%2BQQI2NNNYLpUdKir6FvC4aFsjFQVI%2BNeMDnL7ZzTt%2F54R3POzFm7y2alYn7mRSU4Rpb3Y6sNcrf%2Btkmh4dtd2EqlJUEOxEDWV5E9Y1vNzzTzwdhFsF4eiZo1oxChoVfFsmYfP3hqZi6gYInW8zdcU7wrvvp8hu38M&X-Amz-Signature=f7e6eb8860046846ab146f5556f17790da984f8c35471c8dc9afdb6d0d1a0cb1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IW7H54B%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T081158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDLxSZ%2Bl%2FGJgI0BVVqc6q%2Bqapapt0ExWUAdxo4nHm%2BL5AIgQgqaesIWjxH5qQaaco8FfoN94eJmhsfBUSrgti9aKH8qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOtVmY2b91Vzc3nO8ircA%2BRQG08JWWw0ntjcWczGSVAqezVS2j%2FExm5liwf4PAfiWA1eaDXTHa1t09KlH1%2FCmAmu99lhoREx%2B6JpgyP4pj8OwH2OvWvB94o22vvlHHbP9dMmQvB5VJY5eManEDSp%2BdEhz2HhrZjndIUC6lzm7C97xoeGW%2BakQ2DQgMHCniN0NL6%2BJbu3Cwqfxn9bUmNV1Q%2BUvDBSntiL8%2FGXKXk68YskFq708XL9K2l39lnp1S%2F0y3Rz9lMdHas8aT1GF6FDbvGgfjMGgyiFuHyk5w39MS%2FEiJ0f6qdpp2tZhk1prDKSgKCuIVN9%2BHxoaNJkcImBhJMlRXeBL4Znruj1Boy%2F9RfmYgsDmYuPv39dyQSEJbsPOtdF8ThKKBzLklhCQTFSm%2F7zQ%2BLQzMXdD7opryIyYEszHvv7IkTSFKCAv3E4EtOjl6VwDtAX1YvjZUGg5%2BOuKjbOCDk5D%2B%2FqJ8inDBjmnXDCCQPb1As9eJD07o5atSu0qV%2B5cQIUepblPmd8K48eZ8%2BpGqfg2NGN%2F%2Foyemdcma0%2Bkg2NH%2FeSaTfYsxJqFSNJGdWyVwBMy2M94zhHXnMUToHwdQbB1gDviAmPKsvmxyGVBdWPuWZBypnICp6AtVWRWrO6VeSVnGAjQeyEMMT00cAGOqUBxz%2FxoqbUEfD6ZEsscKSaoOHNlVtGLuXNFdj8mrfLH4tBqfFAcccfZMHgKFM%2BQQI2NNNYLpUdKir6FvC4aFsjFQVI%2BNeMDnL7ZzTt%2F54R3POzFm7y2alYn7mRSU4Rpb3Y6sNcrf%2Btkmh4dtd2EqlJUEOxEDWV5E9Y1vNzzTzwdhFsF4eiZo1oxChoVfFsmYfP3hqZi6gYInW8zdcU7wrvvp8hu38M&X-Amz-Signature=d23b6583f8268e3cebacd146159314a7460f66fb1d3da79b8f27791d29780d15&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IW7H54B%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T081158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDLxSZ%2Bl%2FGJgI0BVVqc6q%2Bqapapt0ExWUAdxo4nHm%2BL5AIgQgqaesIWjxH5qQaaco8FfoN94eJmhsfBUSrgti9aKH8qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOtVmY2b91Vzc3nO8ircA%2BRQG08JWWw0ntjcWczGSVAqezVS2j%2FExm5liwf4PAfiWA1eaDXTHa1t09KlH1%2FCmAmu99lhoREx%2B6JpgyP4pj8OwH2OvWvB94o22vvlHHbP9dMmQvB5VJY5eManEDSp%2BdEhz2HhrZjndIUC6lzm7C97xoeGW%2BakQ2DQgMHCniN0NL6%2BJbu3Cwqfxn9bUmNV1Q%2BUvDBSntiL8%2FGXKXk68YskFq708XL9K2l39lnp1S%2F0y3Rz9lMdHas8aT1GF6FDbvGgfjMGgyiFuHyk5w39MS%2FEiJ0f6qdpp2tZhk1prDKSgKCuIVN9%2BHxoaNJkcImBhJMlRXeBL4Znruj1Boy%2F9RfmYgsDmYuPv39dyQSEJbsPOtdF8ThKKBzLklhCQTFSm%2F7zQ%2BLQzMXdD7opryIyYEszHvv7IkTSFKCAv3E4EtOjl6VwDtAX1YvjZUGg5%2BOuKjbOCDk5D%2B%2FqJ8inDBjmnXDCCQPb1As9eJD07o5atSu0qV%2B5cQIUepblPmd8K48eZ8%2BpGqfg2NGN%2F%2Foyemdcma0%2Bkg2NH%2FeSaTfYsxJqFSNJGdWyVwBMy2M94zhHXnMUToHwdQbB1gDviAmPKsvmxyGVBdWPuWZBypnICp6AtVWRWrO6VeSVnGAjQeyEMMT00cAGOqUBxz%2FxoqbUEfD6ZEsscKSaoOHNlVtGLuXNFdj8mrfLH4tBqfFAcccfZMHgKFM%2BQQI2NNNYLpUdKir6FvC4aFsjFQVI%2BNeMDnL7ZzTt%2F54R3POzFm7y2alYn7mRSU4Rpb3Y6sNcrf%2Btkmh4dtd2EqlJUEOxEDWV5E9Y1vNzzTzwdhFsF4eiZo1oxChoVfFsmYfP3hqZi6gYInW8zdcU7wrvvp8hu38M&X-Amz-Signature=f238b0e9b89188ee9fd6f634683624089747bf5222866514d54aeb3fdc1d281f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IW7H54B%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T081158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDLxSZ%2Bl%2FGJgI0BVVqc6q%2Bqapapt0ExWUAdxo4nHm%2BL5AIgQgqaesIWjxH5qQaaco8FfoN94eJmhsfBUSrgti9aKH8qiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOtVmY2b91Vzc3nO8ircA%2BRQG08JWWw0ntjcWczGSVAqezVS2j%2FExm5liwf4PAfiWA1eaDXTHa1t09KlH1%2FCmAmu99lhoREx%2B6JpgyP4pj8OwH2OvWvB94o22vvlHHbP9dMmQvB5VJY5eManEDSp%2BdEhz2HhrZjndIUC6lzm7C97xoeGW%2BakQ2DQgMHCniN0NL6%2BJbu3Cwqfxn9bUmNV1Q%2BUvDBSntiL8%2FGXKXk68YskFq708XL9K2l39lnp1S%2F0y3Rz9lMdHas8aT1GF6FDbvGgfjMGgyiFuHyk5w39MS%2FEiJ0f6qdpp2tZhk1prDKSgKCuIVN9%2BHxoaNJkcImBhJMlRXeBL4Znruj1Boy%2F9RfmYgsDmYuPv39dyQSEJbsPOtdF8ThKKBzLklhCQTFSm%2F7zQ%2BLQzMXdD7opryIyYEszHvv7IkTSFKCAv3E4EtOjl6VwDtAX1YvjZUGg5%2BOuKjbOCDk5D%2B%2FqJ8inDBjmnXDCCQPb1As9eJD07o5atSu0qV%2B5cQIUepblPmd8K48eZ8%2BpGqfg2NGN%2F%2Foyemdcma0%2Bkg2NH%2FeSaTfYsxJqFSNJGdWyVwBMy2M94zhHXnMUToHwdQbB1gDviAmPKsvmxyGVBdWPuWZBypnICp6AtVWRWrO6VeSVnGAjQeyEMMT00cAGOqUBxz%2FxoqbUEfD6ZEsscKSaoOHNlVtGLuXNFdj8mrfLH4tBqfFAcccfZMHgKFM%2BQQI2NNNYLpUdKir6FvC4aFsjFQVI%2BNeMDnL7ZzTt%2F54R3POzFm7y2alYn7mRSU4Rpb3Y6sNcrf%2Btkmh4dtd2EqlJUEOxEDWV5E9Y1vNzzTzwdhFsF4eiZo1oxChoVfFsmYfP3hqZi6gYInW8zdcU7wrvvp8hu38M&X-Amz-Signature=e306cdd0e763ead7aa31705daac5e3a0935aa0205d16fa5d2c780d79cd9c83e8&X-Amz-SignedHeaders=host&x-id=GetObject)
