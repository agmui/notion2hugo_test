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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JKGBXFW%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T230752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXy5G8imj%2FBVR1xebc4nI4j3Besp6mMPpJswWXbH3QwQIhAN6M7YoTHR9IX%2Fi5kT0UOIm7W8NIWob7FMl%2BF0Nzh2e0KogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7JWZP%2F7r2jIpasCEq3APyBqnRy%2BakrhsXyoOxcTcy5aSvHQMY3MWoErRf29NeqnHTG25DUtJ%2Fmfv91WgGtmQKJRYTg%2BVT7zFkV5zE1BBMFxwwiJkc5QeB0oakDvlPh7TePu6otYCm9k73Zo%2BoiEbmDHn%2F1fs7gjPxMxwuN2WCSU76i%2BHiOCEejLpHeolc8lO8jFEsT5DzEm3cOqjvPKjk8mjFV85LYZa2YmylaNZLHrufnf8fsyjUjZ2Ip0IeMAn2IHd0%2FsVvfSQW0W8o%2FfCrSPY%2Fy1evYGxwDL9FERyf2%2BQUK30wjcslOnKFchG09RZHzdEum2smGcyiPisMPjs%2BGnXT%2BSgB9xdaYIl1kK6e9jhp4xTcq7km4bKFMZg7zefq9hg7C%2BArxRxlqzEjLyf6wIJvjHRUYLsnvi6QdlVmdP3s0iInbr4qyhsMqwXSp5qesAtZVlMt9GbL2nmg67mOnq7xNcb4r2dKrcyiosjx8CQOZ4eu0bCC2OqBA6qxKOoyY6eZVjVnPdsApsSRPruplztG9d7%2BzUio07BYLUwi1dBVW5DYPPIV8dumWuF9bsXDoiDei59W0%2Bt%2BmC9RY7sN%2BktsATTt3SCtVDat0lZAWEOllUThDD8KSyL1GXAJerrhOUV1uFWs94q9KTDH9uO9BjqkASDAA0mXMgomxNsipOREfhJTM7LmuRRUfVQ4PBrce587ZNdU%2Bi2dLQi71Q5iGtjB6Wb72PvvJbfdRnB33rOtjZjqfmV%2FriZp%2FtylEBrj4bB9y2MB3vaPqNR7VNd1WOLGcXpJLUfKu1oNB8TDJ8teXCf6diV3JEo87ajtt6xjqbfeFPMXCnKsnIYiMXM35mD6SiRi7lBUKHKAH7l4jsI5zoFVYRIm&X-Amz-Signature=1316d858feb79da1b769017ff03d7f6223d1148948a9eea0d87f84bb12215d8a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JKGBXFW%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T230752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXy5G8imj%2FBVR1xebc4nI4j3Besp6mMPpJswWXbH3QwQIhAN6M7YoTHR9IX%2Fi5kT0UOIm7W8NIWob7FMl%2BF0Nzh2e0KogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7JWZP%2F7r2jIpasCEq3APyBqnRy%2BakrhsXyoOxcTcy5aSvHQMY3MWoErRf29NeqnHTG25DUtJ%2Fmfv91WgGtmQKJRYTg%2BVT7zFkV5zE1BBMFxwwiJkc5QeB0oakDvlPh7TePu6otYCm9k73Zo%2BoiEbmDHn%2F1fs7gjPxMxwuN2WCSU76i%2BHiOCEejLpHeolc8lO8jFEsT5DzEm3cOqjvPKjk8mjFV85LYZa2YmylaNZLHrufnf8fsyjUjZ2Ip0IeMAn2IHd0%2FsVvfSQW0W8o%2FfCrSPY%2Fy1evYGxwDL9FERyf2%2BQUK30wjcslOnKFchG09RZHzdEum2smGcyiPisMPjs%2BGnXT%2BSgB9xdaYIl1kK6e9jhp4xTcq7km4bKFMZg7zefq9hg7C%2BArxRxlqzEjLyf6wIJvjHRUYLsnvi6QdlVmdP3s0iInbr4qyhsMqwXSp5qesAtZVlMt9GbL2nmg67mOnq7xNcb4r2dKrcyiosjx8CQOZ4eu0bCC2OqBA6qxKOoyY6eZVjVnPdsApsSRPruplztG9d7%2BzUio07BYLUwi1dBVW5DYPPIV8dumWuF9bsXDoiDei59W0%2Bt%2BmC9RY7sN%2BktsATTt3SCtVDat0lZAWEOllUThDD8KSyL1GXAJerrhOUV1uFWs94q9KTDH9uO9BjqkASDAA0mXMgomxNsipOREfhJTM7LmuRRUfVQ4PBrce587ZNdU%2Bi2dLQi71Q5iGtjB6Wb72PvvJbfdRnB33rOtjZjqfmV%2FriZp%2FtylEBrj4bB9y2MB3vaPqNR7VNd1WOLGcXpJLUfKu1oNB8TDJ8teXCf6diV3JEo87ajtt6xjqbfeFPMXCnKsnIYiMXM35mD6SiRi7lBUKHKAH7l4jsI5zoFVYRIm&X-Amz-Signature=a9d6451c3ae42878582209a0b6dfafd54a7a55aa1762f0722c804afe9f096f81&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JKGBXFW%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T230752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXy5G8imj%2FBVR1xebc4nI4j3Besp6mMPpJswWXbH3QwQIhAN6M7YoTHR9IX%2Fi5kT0UOIm7W8NIWob7FMl%2BF0Nzh2e0KogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7JWZP%2F7r2jIpasCEq3APyBqnRy%2BakrhsXyoOxcTcy5aSvHQMY3MWoErRf29NeqnHTG25DUtJ%2Fmfv91WgGtmQKJRYTg%2BVT7zFkV5zE1BBMFxwwiJkc5QeB0oakDvlPh7TePu6otYCm9k73Zo%2BoiEbmDHn%2F1fs7gjPxMxwuN2WCSU76i%2BHiOCEejLpHeolc8lO8jFEsT5DzEm3cOqjvPKjk8mjFV85LYZa2YmylaNZLHrufnf8fsyjUjZ2Ip0IeMAn2IHd0%2FsVvfSQW0W8o%2FfCrSPY%2Fy1evYGxwDL9FERyf2%2BQUK30wjcslOnKFchG09RZHzdEum2smGcyiPisMPjs%2BGnXT%2BSgB9xdaYIl1kK6e9jhp4xTcq7km4bKFMZg7zefq9hg7C%2BArxRxlqzEjLyf6wIJvjHRUYLsnvi6QdlVmdP3s0iInbr4qyhsMqwXSp5qesAtZVlMt9GbL2nmg67mOnq7xNcb4r2dKrcyiosjx8CQOZ4eu0bCC2OqBA6qxKOoyY6eZVjVnPdsApsSRPruplztG9d7%2BzUio07BYLUwi1dBVW5DYPPIV8dumWuF9bsXDoiDei59W0%2Bt%2BmC9RY7sN%2BktsATTt3SCtVDat0lZAWEOllUThDD8KSyL1GXAJerrhOUV1uFWs94q9KTDH9uO9BjqkASDAA0mXMgomxNsipOREfhJTM7LmuRRUfVQ4PBrce587ZNdU%2Bi2dLQi71Q5iGtjB6Wb72PvvJbfdRnB33rOtjZjqfmV%2FriZp%2FtylEBrj4bB9y2MB3vaPqNR7VNd1WOLGcXpJLUfKu1oNB8TDJ8teXCf6diV3JEo87ajtt6xjqbfeFPMXCnKsnIYiMXM35mD6SiRi7lBUKHKAH7l4jsI5zoFVYRIm&X-Amz-Signature=2c3a973cdf56ca23dd53e6a2c415a2a59369c74f81126fab437e64f437f91777&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JKGBXFW%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T230752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXy5G8imj%2FBVR1xebc4nI4j3Besp6mMPpJswWXbH3QwQIhAN6M7YoTHR9IX%2Fi5kT0UOIm7W8NIWob7FMl%2BF0Nzh2e0KogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7JWZP%2F7r2jIpasCEq3APyBqnRy%2BakrhsXyoOxcTcy5aSvHQMY3MWoErRf29NeqnHTG25DUtJ%2Fmfv91WgGtmQKJRYTg%2BVT7zFkV5zE1BBMFxwwiJkc5QeB0oakDvlPh7TePu6otYCm9k73Zo%2BoiEbmDHn%2F1fs7gjPxMxwuN2WCSU76i%2BHiOCEejLpHeolc8lO8jFEsT5DzEm3cOqjvPKjk8mjFV85LYZa2YmylaNZLHrufnf8fsyjUjZ2Ip0IeMAn2IHd0%2FsVvfSQW0W8o%2FfCrSPY%2Fy1evYGxwDL9FERyf2%2BQUK30wjcslOnKFchG09RZHzdEum2smGcyiPisMPjs%2BGnXT%2BSgB9xdaYIl1kK6e9jhp4xTcq7km4bKFMZg7zefq9hg7C%2BArxRxlqzEjLyf6wIJvjHRUYLsnvi6QdlVmdP3s0iInbr4qyhsMqwXSp5qesAtZVlMt9GbL2nmg67mOnq7xNcb4r2dKrcyiosjx8CQOZ4eu0bCC2OqBA6qxKOoyY6eZVjVnPdsApsSRPruplztG9d7%2BzUio07BYLUwi1dBVW5DYPPIV8dumWuF9bsXDoiDei59W0%2Bt%2BmC9RY7sN%2BktsATTt3SCtVDat0lZAWEOllUThDD8KSyL1GXAJerrhOUV1uFWs94q9KTDH9uO9BjqkASDAA0mXMgomxNsipOREfhJTM7LmuRRUfVQ4PBrce587ZNdU%2Bi2dLQi71Q5iGtjB6Wb72PvvJbfdRnB33rOtjZjqfmV%2FriZp%2FtylEBrj4bB9y2MB3vaPqNR7VNd1WOLGcXpJLUfKu1oNB8TDJ8teXCf6diV3JEo87ajtt6xjqbfeFPMXCnKsnIYiMXM35mD6SiRi7lBUKHKAH7l4jsI5zoFVYRIm&X-Amz-Signature=a33a65e8f52531b973318ea76b68fcef1a940dd468cbd1865060476f5a5509d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JKGBXFW%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T230752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXy5G8imj%2FBVR1xebc4nI4j3Besp6mMPpJswWXbH3QwQIhAN6M7YoTHR9IX%2Fi5kT0UOIm7W8NIWob7FMl%2BF0Nzh2e0KogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7JWZP%2F7r2jIpasCEq3APyBqnRy%2BakrhsXyoOxcTcy5aSvHQMY3MWoErRf29NeqnHTG25DUtJ%2Fmfv91WgGtmQKJRYTg%2BVT7zFkV5zE1BBMFxwwiJkc5QeB0oakDvlPh7TePu6otYCm9k73Zo%2BoiEbmDHn%2F1fs7gjPxMxwuN2WCSU76i%2BHiOCEejLpHeolc8lO8jFEsT5DzEm3cOqjvPKjk8mjFV85LYZa2YmylaNZLHrufnf8fsyjUjZ2Ip0IeMAn2IHd0%2FsVvfSQW0W8o%2FfCrSPY%2Fy1evYGxwDL9FERyf2%2BQUK30wjcslOnKFchG09RZHzdEum2smGcyiPisMPjs%2BGnXT%2BSgB9xdaYIl1kK6e9jhp4xTcq7km4bKFMZg7zefq9hg7C%2BArxRxlqzEjLyf6wIJvjHRUYLsnvi6QdlVmdP3s0iInbr4qyhsMqwXSp5qesAtZVlMt9GbL2nmg67mOnq7xNcb4r2dKrcyiosjx8CQOZ4eu0bCC2OqBA6qxKOoyY6eZVjVnPdsApsSRPruplztG9d7%2BzUio07BYLUwi1dBVW5DYPPIV8dumWuF9bsXDoiDei59W0%2Bt%2BmC9RY7sN%2BktsATTt3SCtVDat0lZAWEOllUThDD8KSyL1GXAJerrhOUV1uFWs94q9KTDH9uO9BjqkASDAA0mXMgomxNsipOREfhJTM7LmuRRUfVQ4PBrce587ZNdU%2Bi2dLQi71Q5iGtjB6Wb72PvvJbfdRnB33rOtjZjqfmV%2FriZp%2FtylEBrj4bB9y2MB3vaPqNR7VNd1WOLGcXpJLUfKu1oNB8TDJ8teXCf6diV3JEo87ajtt6xjqbfeFPMXCnKsnIYiMXM35mD6SiRi7lBUKHKAH7l4jsI5zoFVYRIm&X-Amz-Signature=51cd8317206a29c421ef1dd385ec37dad6d1223e58091246e81cbdc3b4e3fb88&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JKGBXFW%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T230752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXy5G8imj%2FBVR1xebc4nI4j3Besp6mMPpJswWXbH3QwQIhAN6M7YoTHR9IX%2Fi5kT0UOIm7W8NIWob7FMl%2BF0Nzh2e0KogECN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7JWZP%2F7r2jIpasCEq3APyBqnRy%2BakrhsXyoOxcTcy5aSvHQMY3MWoErRf29NeqnHTG25DUtJ%2Fmfv91WgGtmQKJRYTg%2BVT7zFkV5zE1BBMFxwwiJkc5QeB0oakDvlPh7TePu6otYCm9k73Zo%2BoiEbmDHn%2F1fs7gjPxMxwuN2WCSU76i%2BHiOCEejLpHeolc8lO8jFEsT5DzEm3cOqjvPKjk8mjFV85LYZa2YmylaNZLHrufnf8fsyjUjZ2Ip0IeMAn2IHd0%2FsVvfSQW0W8o%2FfCrSPY%2Fy1evYGxwDL9FERyf2%2BQUK30wjcslOnKFchG09RZHzdEum2smGcyiPisMPjs%2BGnXT%2BSgB9xdaYIl1kK6e9jhp4xTcq7km4bKFMZg7zefq9hg7C%2BArxRxlqzEjLyf6wIJvjHRUYLsnvi6QdlVmdP3s0iInbr4qyhsMqwXSp5qesAtZVlMt9GbL2nmg67mOnq7xNcb4r2dKrcyiosjx8CQOZ4eu0bCC2OqBA6qxKOoyY6eZVjVnPdsApsSRPruplztG9d7%2BzUio07BYLUwi1dBVW5DYPPIV8dumWuF9bsXDoiDei59W0%2Bt%2BmC9RY7sN%2BktsATTt3SCtVDat0lZAWEOllUThDD8KSyL1GXAJerrhOUV1uFWs94q9KTDH9uO9BjqkASDAA0mXMgomxNsipOREfhJTM7LmuRRUfVQ4PBrce587ZNdU%2Bi2dLQi71Q5iGtjB6Wb72PvvJbfdRnB33rOtjZjqfmV%2FriZp%2FtylEBrj4bB9y2MB3vaPqNR7VNd1WOLGcXpJLUfKu1oNB8TDJ8teXCf6diV3JEo87ajtt6xjqbfeFPMXCnKsnIYiMXM35mD6SiRi7lBUKHKAH7l4jsI5zoFVYRIm&X-Amz-Signature=4eec54323923dcd5e6fa2f0aea1bc08c0cab3c8149ca9b9f076b0e07202a3ff6&X-Amz-SignedHeaders=host&x-id=GetObject)
