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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LSQKIZA%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwDElATBfOQeSV72hGDwUgej0xeCnIvex9W6IloVTrIAiEA8LGqe1JwY1mtLo1PpSP4cjoljy7xqGhq%2BH9mrMMhtWEqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvX264TbRt3H4thQCrcA%2FsNxxqO1ZChM41KlOymXlUWO3z%2FhwDzshUe%2F7ZZ8rGwLHh8nQKIIwXzTVqGuUN01z94PZ9Q3wa8LhofAQOdnctfRwd%2BqfoAEOEjExp%2Bvg1X9hH%2FWIIy2zCSB%2BZzxYxrPvvIxj%2BACVdTRkVdM%2BUjS8WNWA1DAFE0D0xMZ5aGPhlReGe4oHKsreKIbg4AuhMSOPJrBWWUT8sHXmCywhXUtCv4iGxs0rpN%2FJuCcRm2u5QMZII%2FwAxrEwnzys9JPHgyLorjfO1bI2gbbcjXPjAiD5fX1JWtnq%2By2GOXnz%2FagqW%2BCyLelx43L1ZwZNksqngssWk94ONm8IZelTluJcDSbBYUjPHqXRrV8N0LcjWReHIwZa0izGxlANyc%2FPBsxgLo27tZINs6aQAl8A3gdC0T%2BCkG3K45dUjArgCyGeebCOmRDENIaa5dqMOn6toVWuitB2ID6itVAQ1uIJKsiXqwTyG5abEzrhx1OXapfGsT%2BYFatfxAyJ%2FHn6FKpssU01%2BSeEeWer8I6UMkuJ993Rm%2Bt11XFBdGA6NlOKasBbxWLvOsqi2WQRGoV3oFklt64OOiZshgqK523COhkyA8s7DM1FKuefWqPZA%2Fts81BzOIA3x%2FaxX5EYLOjgl%2BNsm2MJKcl74GOqUBFOeHETIeBJOX9g5vXd7a384Y2h%2BVAhj8fPAdTbyrB9LsS1ED%2B31EL4G%2BsfJZrr%2BmsjU3mGm6TsfP8tnS6wadCQi9ovsooXjdbwGvIsrDLdC58ABruq8CPIy8AQoQLs3Fvhh55vjwHMLKFxtUtAy8BA0bMhEjRBV0S%2FxoTbWcxpG6VkQWXPSwR33n2K0g4PUycD03108wzlXRUdSAB%2FdquZuNu4SI&X-Amz-Signature=b097dc1f2bd7f10be694aa8b0eb0d8678893662442d1e7b7465c1ee51286df42&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LSQKIZA%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwDElATBfOQeSV72hGDwUgej0xeCnIvex9W6IloVTrIAiEA8LGqe1JwY1mtLo1PpSP4cjoljy7xqGhq%2BH9mrMMhtWEqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvX264TbRt3H4thQCrcA%2FsNxxqO1ZChM41KlOymXlUWO3z%2FhwDzshUe%2F7ZZ8rGwLHh8nQKIIwXzTVqGuUN01z94PZ9Q3wa8LhofAQOdnctfRwd%2BqfoAEOEjExp%2Bvg1X9hH%2FWIIy2zCSB%2BZzxYxrPvvIxj%2BACVdTRkVdM%2BUjS8WNWA1DAFE0D0xMZ5aGPhlReGe4oHKsreKIbg4AuhMSOPJrBWWUT8sHXmCywhXUtCv4iGxs0rpN%2FJuCcRm2u5QMZII%2FwAxrEwnzys9JPHgyLorjfO1bI2gbbcjXPjAiD5fX1JWtnq%2By2GOXnz%2FagqW%2BCyLelx43L1ZwZNksqngssWk94ONm8IZelTluJcDSbBYUjPHqXRrV8N0LcjWReHIwZa0izGxlANyc%2FPBsxgLo27tZINs6aQAl8A3gdC0T%2BCkG3K45dUjArgCyGeebCOmRDENIaa5dqMOn6toVWuitB2ID6itVAQ1uIJKsiXqwTyG5abEzrhx1OXapfGsT%2BYFatfxAyJ%2FHn6FKpssU01%2BSeEeWer8I6UMkuJ993Rm%2Bt11XFBdGA6NlOKasBbxWLvOsqi2WQRGoV3oFklt64OOiZshgqK523COhkyA8s7DM1FKuefWqPZA%2Fts81BzOIA3x%2FaxX5EYLOjgl%2BNsm2MJKcl74GOqUBFOeHETIeBJOX9g5vXd7a384Y2h%2BVAhj8fPAdTbyrB9LsS1ED%2B31EL4G%2BsfJZrr%2BmsjU3mGm6TsfP8tnS6wadCQi9ovsooXjdbwGvIsrDLdC58ABruq8CPIy8AQoQLs3Fvhh55vjwHMLKFxtUtAy8BA0bMhEjRBV0S%2FxoTbWcxpG6VkQWXPSwR33n2K0g4PUycD03108wzlXRUdSAB%2FdquZuNu4SI&X-Amz-Signature=d3080732e7ebcd2b4f89c3624d64cb48be78bc54e7e7be3f3a831b4d95c13823&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LSQKIZA%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwDElATBfOQeSV72hGDwUgej0xeCnIvex9W6IloVTrIAiEA8LGqe1JwY1mtLo1PpSP4cjoljy7xqGhq%2BH9mrMMhtWEqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvX264TbRt3H4thQCrcA%2FsNxxqO1ZChM41KlOymXlUWO3z%2FhwDzshUe%2F7ZZ8rGwLHh8nQKIIwXzTVqGuUN01z94PZ9Q3wa8LhofAQOdnctfRwd%2BqfoAEOEjExp%2Bvg1X9hH%2FWIIy2zCSB%2BZzxYxrPvvIxj%2BACVdTRkVdM%2BUjS8WNWA1DAFE0D0xMZ5aGPhlReGe4oHKsreKIbg4AuhMSOPJrBWWUT8sHXmCywhXUtCv4iGxs0rpN%2FJuCcRm2u5QMZII%2FwAxrEwnzys9JPHgyLorjfO1bI2gbbcjXPjAiD5fX1JWtnq%2By2GOXnz%2FagqW%2BCyLelx43L1ZwZNksqngssWk94ONm8IZelTluJcDSbBYUjPHqXRrV8N0LcjWReHIwZa0izGxlANyc%2FPBsxgLo27tZINs6aQAl8A3gdC0T%2BCkG3K45dUjArgCyGeebCOmRDENIaa5dqMOn6toVWuitB2ID6itVAQ1uIJKsiXqwTyG5abEzrhx1OXapfGsT%2BYFatfxAyJ%2FHn6FKpssU01%2BSeEeWer8I6UMkuJ993Rm%2Bt11XFBdGA6NlOKasBbxWLvOsqi2WQRGoV3oFklt64OOiZshgqK523COhkyA8s7DM1FKuefWqPZA%2Fts81BzOIA3x%2FaxX5EYLOjgl%2BNsm2MJKcl74GOqUBFOeHETIeBJOX9g5vXd7a384Y2h%2BVAhj8fPAdTbyrB9LsS1ED%2B31EL4G%2BsfJZrr%2BmsjU3mGm6TsfP8tnS6wadCQi9ovsooXjdbwGvIsrDLdC58ABruq8CPIy8AQoQLs3Fvhh55vjwHMLKFxtUtAy8BA0bMhEjRBV0S%2FxoTbWcxpG6VkQWXPSwR33n2K0g4PUycD03108wzlXRUdSAB%2FdquZuNu4SI&X-Amz-Signature=6ae1f54a07d825a26a4dd40334b35f5e3efb9f84d3c6e746034a690b2daf6cb3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LSQKIZA%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwDElATBfOQeSV72hGDwUgej0xeCnIvex9W6IloVTrIAiEA8LGqe1JwY1mtLo1PpSP4cjoljy7xqGhq%2BH9mrMMhtWEqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvX264TbRt3H4thQCrcA%2FsNxxqO1ZChM41KlOymXlUWO3z%2FhwDzshUe%2F7ZZ8rGwLHh8nQKIIwXzTVqGuUN01z94PZ9Q3wa8LhofAQOdnctfRwd%2BqfoAEOEjExp%2Bvg1X9hH%2FWIIy2zCSB%2BZzxYxrPvvIxj%2BACVdTRkVdM%2BUjS8WNWA1DAFE0D0xMZ5aGPhlReGe4oHKsreKIbg4AuhMSOPJrBWWUT8sHXmCywhXUtCv4iGxs0rpN%2FJuCcRm2u5QMZII%2FwAxrEwnzys9JPHgyLorjfO1bI2gbbcjXPjAiD5fX1JWtnq%2By2GOXnz%2FagqW%2BCyLelx43L1ZwZNksqngssWk94ONm8IZelTluJcDSbBYUjPHqXRrV8N0LcjWReHIwZa0izGxlANyc%2FPBsxgLo27tZINs6aQAl8A3gdC0T%2BCkG3K45dUjArgCyGeebCOmRDENIaa5dqMOn6toVWuitB2ID6itVAQ1uIJKsiXqwTyG5abEzrhx1OXapfGsT%2BYFatfxAyJ%2FHn6FKpssU01%2BSeEeWer8I6UMkuJ993Rm%2Bt11XFBdGA6NlOKasBbxWLvOsqi2WQRGoV3oFklt64OOiZshgqK523COhkyA8s7DM1FKuefWqPZA%2Fts81BzOIA3x%2FaxX5EYLOjgl%2BNsm2MJKcl74GOqUBFOeHETIeBJOX9g5vXd7a384Y2h%2BVAhj8fPAdTbyrB9LsS1ED%2B31EL4G%2BsfJZrr%2BmsjU3mGm6TsfP8tnS6wadCQi9ovsooXjdbwGvIsrDLdC58ABruq8CPIy8AQoQLs3Fvhh55vjwHMLKFxtUtAy8BA0bMhEjRBV0S%2FxoTbWcxpG6VkQWXPSwR33n2K0g4PUycD03108wzlXRUdSAB%2FdquZuNu4SI&X-Amz-Signature=a83ec380f7dc3b5dd59b865bf6966321dfb2d5bfdbb8360101a9e11fdd6212b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LSQKIZA%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwDElATBfOQeSV72hGDwUgej0xeCnIvex9W6IloVTrIAiEA8LGqe1JwY1mtLo1PpSP4cjoljy7xqGhq%2BH9mrMMhtWEqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvX264TbRt3H4thQCrcA%2FsNxxqO1ZChM41KlOymXlUWO3z%2FhwDzshUe%2F7ZZ8rGwLHh8nQKIIwXzTVqGuUN01z94PZ9Q3wa8LhofAQOdnctfRwd%2BqfoAEOEjExp%2Bvg1X9hH%2FWIIy2zCSB%2BZzxYxrPvvIxj%2BACVdTRkVdM%2BUjS8WNWA1DAFE0D0xMZ5aGPhlReGe4oHKsreKIbg4AuhMSOPJrBWWUT8sHXmCywhXUtCv4iGxs0rpN%2FJuCcRm2u5QMZII%2FwAxrEwnzys9JPHgyLorjfO1bI2gbbcjXPjAiD5fX1JWtnq%2By2GOXnz%2FagqW%2BCyLelx43L1ZwZNksqngssWk94ONm8IZelTluJcDSbBYUjPHqXRrV8N0LcjWReHIwZa0izGxlANyc%2FPBsxgLo27tZINs6aQAl8A3gdC0T%2BCkG3K45dUjArgCyGeebCOmRDENIaa5dqMOn6toVWuitB2ID6itVAQ1uIJKsiXqwTyG5abEzrhx1OXapfGsT%2BYFatfxAyJ%2FHn6FKpssU01%2BSeEeWer8I6UMkuJ993Rm%2Bt11XFBdGA6NlOKasBbxWLvOsqi2WQRGoV3oFklt64OOiZshgqK523COhkyA8s7DM1FKuefWqPZA%2Fts81BzOIA3x%2FaxX5EYLOjgl%2BNsm2MJKcl74GOqUBFOeHETIeBJOX9g5vXd7a384Y2h%2BVAhj8fPAdTbyrB9LsS1ED%2B31EL4G%2BsfJZrr%2BmsjU3mGm6TsfP8tnS6wadCQi9ovsooXjdbwGvIsrDLdC58ABruq8CPIy8AQoQLs3Fvhh55vjwHMLKFxtUtAy8BA0bMhEjRBV0S%2FxoTbWcxpG6VkQWXPSwR33n2K0g4PUycD03108wzlXRUdSAB%2FdquZuNu4SI&X-Amz-Signature=ab4d2ee82215c11dc71cb180a528de7ded9a9df96340566644ac284fabde3dfa&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LSQKIZA%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwDElATBfOQeSV72hGDwUgej0xeCnIvex9W6IloVTrIAiEA8LGqe1JwY1mtLo1PpSP4cjoljy7xqGhq%2BH9mrMMhtWEqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDvX264TbRt3H4thQCrcA%2FsNxxqO1ZChM41KlOymXlUWO3z%2FhwDzshUe%2F7ZZ8rGwLHh8nQKIIwXzTVqGuUN01z94PZ9Q3wa8LhofAQOdnctfRwd%2BqfoAEOEjExp%2Bvg1X9hH%2FWIIy2zCSB%2BZzxYxrPvvIxj%2BACVdTRkVdM%2BUjS8WNWA1DAFE0D0xMZ5aGPhlReGe4oHKsreKIbg4AuhMSOPJrBWWUT8sHXmCywhXUtCv4iGxs0rpN%2FJuCcRm2u5QMZII%2FwAxrEwnzys9JPHgyLorjfO1bI2gbbcjXPjAiD5fX1JWtnq%2By2GOXnz%2FagqW%2BCyLelx43L1ZwZNksqngssWk94ONm8IZelTluJcDSbBYUjPHqXRrV8N0LcjWReHIwZa0izGxlANyc%2FPBsxgLo27tZINs6aQAl8A3gdC0T%2BCkG3K45dUjArgCyGeebCOmRDENIaa5dqMOn6toVWuitB2ID6itVAQ1uIJKsiXqwTyG5abEzrhx1OXapfGsT%2BYFatfxAyJ%2FHn6FKpssU01%2BSeEeWer8I6UMkuJ993Rm%2Bt11XFBdGA6NlOKasBbxWLvOsqi2WQRGoV3oFklt64OOiZshgqK523COhkyA8s7DM1FKuefWqPZA%2Fts81BzOIA3x%2FaxX5EYLOjgl%2BNsm2MJKcl74GOqUBFOeHETIeBJOX9g5vXd7a384Y2h%2BVAhj8fPAdTbyrB9LsS1ED%2B31EL4G%2BsfJZrr%2BmsjU3mGm6TsfP8tnS6wadCQi9ovsooXjdbwGvIsrDLdC58ABruq8CPIy8AQoQLs3Fvhh55vjwHMLKFxtUtAy8BA0bMhEjRBV0S%2FxoTbWcxpG6VkQWXPSwR33n2K0g4PUycD03108wzlXRUdSAB%2FdquZuNu4SI&X-Amz-Signature=079443882a465c0cceb0c182990471c8e0c570f7220686d83480d80ce929bd6c&X-Amz-SignedHeaders=host&x-id=GetObject)
