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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOMFE6WF%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGMPq6pPjc5VnTj406yzuXkwjEqqBHLrFDRXuZvPV5jAIgLbyyIjj6fR5neIYTXX8rcZ%2BlO39SA%2B1hK48QLf7u8R4qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPqbCjE68m%2FFpwQfJCrcA67qfbd2mhPPzLUKMSphebwXVObsBQMOmKR8kCskRJtidJcjuiunBunSQ33mXiqX%2FiktsUCHwJnP%2BlFDGQ%2B1ZRk3k5xfwJD5x5WxNfMVIAlPd9kWeI%2Bvx3%2B8cNly7KcieZXyg792LBkeQVOtxtB3hHkJ6sYshYgxheNNDBYCK3BvKDZNEvlCLEmSwB5qpTZzIOw6FJW3RfNyWS2UCQD6gFtDhG1340qbtoGWLQV7I79jMAGr5Jr8Fi0vKndNuQNB3l3BgVDePsNmkSOJgw4si0htpKoaOxN9ayJLbeV5Mh9paPwC1hSsMzyevjs4Sy7217ebB8h9ulm7sGou8OR5CkSEey9jdhUTStu1dmvfOvT1QQPh%2F%2FKuvDwUgdF%2BicNhu8t0bhE5WAPsbLpVoYNqilsc7dbti2nO1m%2B0N5e77sqd%2BgN3KALFPK4j9%2B%2FYsSKProZItstLN5vZZ8AV7Iko2kkn%2Faqt%2B6oxd7JdjUOGciI30IsK7yv21JFF76XwhL4H%2BbMZGNdpHAGaTAgqICMuxa3aZM4cbz0I5YEHrr8pADB0bh9tBc%2BIHATP9eZyjnZUiTwJFgcDFCgJZkJNrPL80jLAPDgplFZmryEpVeOdAa5yKgI%2B3kvS%2FMA1DRZ9MOL1zL4GOqUBhfO4SVhY87NtTOGADpTLPLmbtvrwCGfCKrcVpUZ0gJByv%2F69Gu4TkSIW6YLTEs9SGr5rE8gU%2BSGy4eeTAG6Tfgj4Ug7TjD3qT%2BmGEK7RfkxYdbYfIlE8EvUR1NDM8JXdm5kyofH30XFdihtE1zgr2xh5Q0nzoS2BKXZO0aNzZ69lfOXMX06qiyQ3xCNNCEU%2F46lrEdd1lO1AbR8IUuSxkpwXWs7n&X-Amz-Signature=523a02e8b8fbd2be5db45014bb91fbe43884ed5328c0fc2d7115a051d4434191&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOMFE6WF%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGMPq6pPjc5VnTj406yzuXkwjEqqBHLrFDRXuZvPV5jAIgLbyyIjj6fR5neIYTXX8rcZ%2BlO39SA%2B1hK48QLf7u8R4qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPqbCjE68m%2FFpwQfJCrcA67qfbd2mhPPzLUKMSphebwXVObsBQMOmKR8kCskRJtidJcjuiunBunSQ33mXiqX%2FiktsUCHwJnP%2BlFDGQ%2B1ZRk3k5xfwJD5x5WxNfMVIAlPd9kWeI%2Bvx3%2B8cNly7KcieZXyg792LBkeQVOtxtB3hHkJ6sYshYgxheNNDBYCK3BvKDZNEvlCLEmSwB5qpTZzIOw6FJW3RfNyWS2UCQD6gFtDhG1340qbtoGWLQV7I79jMAGr5Jr8Fi0vKndNuQNB3l3BgVDePsNmkSOJgw4si0htpKoaOxN9ayJLbeV5Mh9paPwC1hSsMzyevjs4Sy7217ebB8h9ulm7sGou8OR5CkSEey9jdhUTStu1dmvfOvT1QQPh%2F%2FKuvDwUgdF%2BicNhu8t0bhE5WAPsbLpVoYNqilsc7dbti2nO1m%2B0N5e77sqd%2BgN3KALFPK4j9%2B%2FYsSKProZItstLN5vZZ8AV7Iko2kkn%2Faqt%2B6oxd7JdjUOGciI30IsK7yv21JFF76XwhL4H%2BbMZGNdpHAGaTAgqICMuxa3aZM4cbz0I5YEHrr8pADB0bh9tBc%2BIHATP9eZyjnZUiTwJFgcDFCgJZkJNrPL80jLAPDgplFZmryEpVeOdAa5yKgI%2B3kvS%2FMA1DRZ9MOL1zL4GOqUBhfO4SVhY87NtTOGADpTLPLmbtvrwCGfCKrcVpUZ0gJByv%2F69Gu4TkSIW6YLTEs9SGr5rE8gU%2BSGy4eeTAG6Tfgj4Ug7TjD3qT%2BmGEK7RfkxYdbYfIlE8EvUR1NDM8JXdm5kyofH30XFdihtE1zgr2xh5Q0nzoS2BKXZO0aNzZ69lfOXMX06qiyQ3xCNNCEU%2F46lrEdd1lO1AbR8IUuSxkpwXWs7n&X-Amz-Signature=c51f08f86ef560942223a44aaa093de287ed7b92be8c3ce212f459e452779894&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOMFE6WF%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGMPq6pPjc5VnTj406yzuXkwjEqqBHLrFDRXuZvPV5jAIgLbyyIjj6fR5neIYTXX8rcZ%2BlO39SA%2B1hK48QLf7u8R4qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPqbCjE68m%2FFpwQfJCrcA67qfbd2mhPPzLUKMSphebwXVObsBQMOmKR8kCskRJtidJcjuiunBunSQ33mXiqX%2FiktsUCHwJnP%2BlFDGQ%2B1ZRk3k5xfwJD5x5WxNfMVIAlPd9kWeI%2Bvx3%2B8cNly7KcieZXyg792LBkeQVOtxtB3hHkJ6sYshYgxheNNDBYCK3BvKDZNEvlCLEmSwB5qpTZzIOw6FJW3RfNyWS2UCQD6gFtDhG1340qbtoGWLQV7I79jMAGr5Jr8Fi0vKndNuQNB3l3BgVDePsNmkSOJgw4si0htpKoaOxN9ayJLbeV5Mh9paPwC1hSsMzyevjs4Sy7217ebB8h9ulm7sGou8OR5CkSEey9jdhUTStu1dmvfOvT1QQPh%2F%2FKuvDwUgdF%2BicNhu8t0bhE5WAPsbLpVoYNqilsc7dbti2nO1m%2B0N5e77sqd%2BgN3KALFPK4j9%2B%2FYsSKProZItstLN5vZZ8AV7Iko2kkn%2Faqt%2B6oxd7JdjUOGciI30IsK7yv21JFF76XwhL4H%2BbMZGNdpHAGaTAgqICMuxa3aZM4cbz0I5YEHrr8pADB0bh9tBc%2BIHATP9eZyjnZUiTwJFgcDFCgJZkJNrPL80jLAPDgplFZmryEpVeOdAa5yKgI%2B3kvS%2FMA1DRZ9MOL1zL4GOqUBhfO4SVhY87NtTOGADpTLPLmbtvrwCGfCKrcVpUZ0gJByv%2F69Gu4TkSIW6YLTEs9SGr5rE8gU%2BSGy4eeTAG6Tfgj4Ug7TjD3qT%2BmGEK7RfkxYdbYfIlE8EvUR1NDM8JXdm5kyofH30XFdihtE1zgr2xh5Q0nzoS2BKXZO0aNzZ69lfOXMX06qiyQ3xCNNCEU%2F46lrEdd1lO1AbR8IUuSxkpwXWs7n&X-Amz-Signature=fe8ea50f1275c3f7f877e4061e65fbe8d92b1198c4da3382a70e1cbe76f31caa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOMFE6WF%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGMPq6pPjc5VnTj406yzuXkwjEqqBHLrFDRXuZvPV5jAIgLbyyIjj6fR5neIYTXX8rcZ%2BlO39SA%2B1hK48QLf7u8R4qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPqbCjE68m%2FFpwQfJCrcA67qfbd2mhPPzLUKMSphebwXVObsBQMOmKR8kCskRJtidJcjuiunBunSQ33mXiqX%2FiktsUCHwJnP%2BlFDGQ%2B1ZRk3k5xfwJD5x5WxNfMVIAlPd9kWeI%2Bvx3%2B8cNly7KcieZXyg792LBkeQVOtxtB3hHkJ6sYshYgxheNNDBYCK3BvKDZNEvlCLEmSwB5qpTZzIOw6FJW3RfNyWS2UCQD6gFtDhG1340qbtoGWLQV7I79jMAGr5Jr8Fi0vKndNuQNB3l3BgVDePsNmkSOJgw4si0htpKoaOxN9ayJLbeV5Mh9paPwC1hSsMzyevjs4Sy7217ebB8h9ulm7sGou8OR5CkSEey9jdhUTStu1dmvfOvT1QQPh%2F%2FKuvDwUgdF%2BicNhu8t0bhE5WAPsbLpVoYNqilsc7dbti2nO1m%2B0N5e77sqd%2BgN3KALFPK4j9%2B%2FYsSKProZItstLN5vZZ8AV7Iko2kkn%2Faqt%2B6oxd7JdjUOGciI30IsK7yv21JFF76XwhL4H%2BbMZGNdpHAGaTAgqICMuxa3aZM4cbz0I5YEHrr8pADB0bh9tBc%2BIHATP9eZyjnZUiTwJFgcDFCgJZkJNrPL80jLAPDgplFZmryEpVeOdAa5yKgI%2B3kvS%2FMA1DRZ9MOL1zL4GOqUBhfO4SVhY87NtTOGADpTLPLmbtvrwCGfCKrcVpUZ0gJByv%2F69Gu4TkSIW6YLTEs9SGr5rE8gU%2BSGy4eeTAG6Tfgj4Ug7TjD3qT%2BmGEK7RfkxYdbYfIlE8EvUR1NDM8JXdm5kyofH30XFdihtE1zgr2xh5Q0nzoS2BKXZO0aNzZ69lfOXMX06qiyQ3xCNNCEU%2F46lrEdd1lO1AbR8IUuSxkpwXWs7n&X-Amz-Signature=36ed4d4879fe8cc5f213f213ae33ea923eab6af8e306f15dacbbf26d337029fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOMFE6WF%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGMPq6pPjc5VnTj406yzuXkwjEqqBHLrFDRXuZvPV5jAIgLbyyIjj6fR5neIYTXX8rcZ%2BlO39SA%2B1hK48QLf7u8R4qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPqbCjE68m%2FFpwQfJCrcA67qfbd2mhPPzLUKMSphebwXVObsBQMOmKR8kCskRJtidJcjuiunBunSQ33mXiqX%2FiktsUCHwJnP%2BlFDGQ%2B1ZRk3k5xfwJD5x5WxNfMVIAlPd9kWeI%2Bvx3%2B8cNly7KcieZXyg792LBkeQVOtxtB3hHkJ6sYshYgxheNNDBYCK3BvKDZNEvlCLEmSwB5qpTZzIOw6FJW3RfNyWS2UCQD6gFtDhG1340qbtoGWLQV7I79jMAGr5Jr8Fi0vKndNuQNB3l3BgVDePsNmkSOJgw4si0htpKoaOxN9ayJLbeV5Mh9paPwC1hSsMzyevjs4Sy7217ebB8h9ulm7sGou8OR5CkSEey9jdhUTStu1dmvfOvT1QQPh%2F%2FKuvDwUgdF%2BicNhu8t0bhE5WAPsbLpVoYNqilsc7dbti2nO1m%2B0N5e77sqd%2BgN3KALFPK4j9%2B%2FYsSKProZItstLN5vZZ8AV7Iko2kkn%2Faqt%2B6oxd7JdjUOGciI30IsK7yv21JFF76XwhL4H%2BbMZGNdpHAGaTAgqICMuxa3aZM4cbz0I5YEHrr8pADB0bh9tBc%2BIHATP9eZyjnZUiTwJFgcDFCgJZkJNrPL80jLAPDgplFZmryEpVeOdAa5yKgI%2B3kvS%2FMA1DRZ9MOL1zL4GOqUBhfO4SVhY87NtTOGADpTLPLmbtvrwCGfCKrcVpUZ0gJByv%2F69Gu4TkSIW6YLTEs9SGr5rE8gU%2BSGy4eeTAG6Tfgj4Ug7TjD3qT%2BmGEK7RfkxYdbYfIlE8EvUR1NDM8JXdm5kyofH30XFdihtE1zgr2xh5Q0nzoS2BKXZO0aNzZ69lfOXMX06qiyQ3xCNNCEU%2F46lrEdd1lO1AbR8IUuSxkpwXWs7n&X-Amz-Signature=dd82f071c95e25d448b0852fd7dcd6fb575ef76ceb864f14bd4e563a0913b696&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOMFE6WF%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGMPq6pPjc5VnTj406yzuXkwjEqqBHLrFDRXuZvPV5jAIgLbyyIjj6fR5neIYTXX8rcZ%2BlO39SA%2B1hK48QLf7u8R4qiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPqbCjE68m%2FFpwQfJCrcA67qfbd2mhPPzLUKMSphebwXVObsBQMOmKR8kCskRJtidJcjuiunBunSQ33mXiqX%2FiktsUCHwJnP%2BlFDGQ%2B1ZRk3k5xfwJD5x5WxNfMVIAlPd9kWeI%2Bvx3%2B8cNly7KcieZXyg792LBkeQVOtxtB3hHkJ6sYshYgxheNNDBYCK3BvKDZNEvlCLEmSwB5qpTZzIOw6FJW3RfNyWS2UCQD6gFtDhG1340qbtoGWLQV7I79jMAGr5Jr8Fi0vKndNuQNB3l3BgVDePsNmkSOJgw4si0htpKoaOxN9ayJLbeV5Mh9paPwC1hSsMzyevjs4Sy7217ebB8h9ulm7sGou8OR5CkSEey9jdhUTStu1dmvfOvT1QQPh%2F%2FKuvDwUgdF%2BicNhu8t0bhE5WAPsbLpVoYNqilsc7dbti2nO1m%2B0N5e77sqd%2BgN3KALFPK4j9%2B%2FYsSKProZItstLN5vZZ8AV7Iko2kkn%2Faqt%2B6oxd7JdjUOGciI30IsK7yv21JFF76XwhL4H%2BbMZGNdpHAGaTAgqICMuxa3aZM4cbz0I5YEHrr8pADB0bh9tBc%2BIHATP9eZyjnZUiTwJFgcDFCgJZkJNrPL80jLAPDgplFZmryEpVeOdAa5yKgI%2B3kvS%2FMA1DRZ9MOL1zL4GOqUBhfO4SVhY87NtTOGADpTLPLmbtvrwCGfCKrcVpUZ0gJByv%2F69Gu4TkSIW6YLTEs9SGr5rE8gU%2BSGy4eeTAG6Tfgj4Ug7TjD3qT%2BmGEK7RfkxYdbYfIlE8EvUR1NDM8JXdm5kyofH30XFdihtE1zgr2xh5Q0nzoS2BKXZO0aNzZ69lfOXMX06qiyQ3xCNNCEU%2F46lrEdd1lO1AbR8IUuSxkpwXWs7n&X-Amz-Signature=781f2d4ee280b1319a4a6af8ef652baec81c745f0323414bd5829d1012c9a4d6&X-Amz-SignedHeaders=host&x-id=GetObject)
