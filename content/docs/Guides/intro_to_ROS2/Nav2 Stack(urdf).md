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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL2VCGWW%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T200954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeCHmntGClEv5lqYedqeXO1LjlVrS9tjM3Xw4djetOrAIhANeImNjmscJT0vFFGfeBMnKWcFZ2wYjCs9wr8UuHk0rtKv8DCHoQABoMNjM3NDIzMTgzODA1IgwZ6aN7pnLKYE%2B%2BNBQq3AOPJevlW1m2%2Bz3dso4V61WsMmPL9oniP2wNmgaSuiK4LmN1WqPjJFShvvF7ZUktaZgdJ6F66MzyGl%2FhGIsUbvbujQnr6lwpzjryDZaUT9d3pwsXzVy%2BR%2F2Wax%2FM1BhSMZjNK%2B1WhB8J3Hc7NkcvJ3GdwwwxuI5CKsmIXJdWwN%2B%2Fy1oBJn5viAukwl02lprD5%2F75isc%2FVNOItEWf5htqxndMbZMO%2B7j0YBzgT5SNV4r3E%2BNHKOuK9TLcos%2Fkh4dUSHsyphoiYoMYSQTed6ruwVRJbAYY8uUuNWYWjAHgLjhsXVYiVXUdFDeTCo3A7T8Rsfk6UpdYd1YqlDQmx0r14f8MDq421vLLFBax9qiim3UAd7YpG1FaLg0O9RCWtMR46InCMMQtzLe4zyin62MDlKpCdyqn9unieUbLS0Rt43MvbYUSBb5UHLI%2BjEdtcibHV0IS8wYg8KaIo2O7NRcgFumLBa10vPaj%2FkjgSm9HIepnzf%2BvFiyBzUeacMSSAHXIEHr8lwAj%2B5CQcXJV9ORf39YTVURvI3O9LW9NcuEkCY97xXMnOpGA4f6GoyyYH4axJzsRcF6wLWw0YhLxmNzzJy%2FfgLDhHzP0KCll%2B%2BUGQ%2BMvBv8tLPP5EsxLLulDgDDL%2BNzBBjqkAQiYI5xWQxp%2B5IRonXGHL65lIfsJznHjt5vxMVKUaYze0H6o7ZH0VWKBFcNY%2BZn%2F2oCEz3l96IxL4NQQHtaT7atbHOX56i%2BHfs6bbdNBQDpCGRhORJ3vn%2B8EnCBaqIhyCVDH7TzHsCVIqGoFV0QhJ9WzDoPRSd1ysFp8FkLuBPdBDmoBLYnu57US8Pu6G9OnOp1krMSt6ZV39rP4BoZsM5TLTBt0&X-Amz-Signature=be127dac0027fd8aaadb2c4470a2952ed0a3dcff6233ba327b0a4b94f4b19586&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL2VCGWW%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T200954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeCHmntGClEv5lqYedqeXO1LjlVrS9tjM3Xw4djetOrAIhANeImNjmscJT0vFFGfeBMnKWcFZ2wYjCs9wr8UuHk0rtKv8DCHoQABoMNjM3NDIzMTgzODA1IgwZ6aN7pnLKYE%2B%2BNBQq3AOPJevlW1m2%2Bz3dso4V61WsMmPL9oniP2wNmgaSuiK4LmN1WqPjJFShvvF7ZUktaZgdJ6F66MzyGl%2FhGIsUbvbujQnr6lwpzjryDZaUT9d3pwsXzVy%2BR%2F2Wax%2FM1BhSMZjNK%2B1WhB8J3Hc7NkcvJ3GdwwwxuI5CKsmIXJdWwN%2B%2Fy1oBJn5viAukwl02lprD5%2F75isc%2FVNOItEWf5htqxndMbZMO%2B7j0YBzgT5SNV4r3E%2BNHKOuK9TLcos%2Fkh4dUSHsyphoiYoMYSQTed6ruwVRJbAYY8uUuNWYWjAHgLjhsXVYiVXUdFDeTCo3A7T8Rsfk6UpdYd1YqlDQmx0r14f8MDq421vLLFBax9qiim3UAd7YpG1FaLg0O9RCWtMR46InCMMQtzLe4zyin62MDlKpCdyqn9unieUbLS0Rt43MvbYUSBb5UHLI%2BjEdtcibHV0IS8wYg8KaIo2O7NRcgFumLBa10vPaj%2FkjgSm9HIepnzf%2BvFiyBzUeacMSSAHXIEHr8lwAj%2B5CQcXJV9ORf39YTVURvI3O9LW9NcuEkCY97xXMnOpGA4f6GoyyYH4axJzsRcF6wLWw0YhLxmNzzJy%2FfgLDhHzP0KCll%2B%2BUGQ%2BMvBv8tLPP5EsxLLulDgDDL%2BNzBBjqkAQiYI5xWQxp%2B5IRonXGHL65lIfsJznHjt5vxMVKUaYze0H6o7ZH0VWKBFcNY%2BZn%2F2oCEz3l96IxL4NQQHtaT7atbHOX56i%2BHfs6bbdNBQDpCGRhORJ3vn%2B8EnCBaqIhyCVDH7TzHsCVIqGoFV0QhJ9WzDoPRSd1ysFp8FkLuBPdBDmoBLYnu57US8Pu6G9OnOp1krMSt6ZV39rP4BoZsM5TLTBt0&X-Amz-Signature=988330dbdb29b735db7085bb6a61e80260b8146771eab55200324ac2d65a53f8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL2VCGWW%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T200954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeCHmntGClEv5lqYedqeXO1LjlVrS9tjM3Xw4djetOrAIhANeImNjmscJT0vFFGfeBMnKWcFZ2wYjCs9wr8UuHk0rtKv8DCHoQABoMNjM3NDIzMTgzODA1IgwZ6aN7pnLKYE%2B%2BNBQq3AOPJevlW1m2%2Bz3dso4V61WsMmPL9oniP2wNmgaSuiK4LmN1WqPjJFShvvF7ZUktaZgdJ6F66MzyGl%2FhGIsUbvbujQnr6lwpzjryDZaUT9d3pwsXzVy%2BR%2F2Wax%2FM1BhSMZjNK%2B1WhB8J3Hc7NkcvJ3GdwwwxuI5CKsmIXJdWwN%2B%2Fy1oBJn5viAukwl02lprD5%2F75isc%2FVNOItEWf5htqxndMbZMO%2B7j0YBzgT5SNV4r3E%2BNHKOuK9TLcos%2Fkh4dUSHsyphoiYoMYSQTed6ruwVRJbAYY8uUuNWYWjAHgLjhsXVYiVXUdFDeTCo3A7T8Rsfk6UpdYd1YqlDQmx0r14f8MDq421vLLFBax9qiim3UAd7YpG1FaLg0O9RCWtMR46InCMMQtzLe4zyin62MDlKpCdyqn9unieUbLS0Rt43MvbYUSBb5UHLI%2BjEdtcibHV0IS8wYg8KaIo2O7NRcgFumLBa10vPaj%2FkjgSm9HIepnzf%2BvFiyBzUeacMSSAHXIEHr8lwAj%2B5CQcXJV9ORf39YTVURvI3O9LW9NcuEkCY97xXMnOpGA4f6GoyyYH4axJzsRcF6wLWw0YhLxmNzzJy%2FfgLDhHzP0KCll%2B%2BUGQ%2BMvBv8tLPP5EsxLLulDgDDL%2BNzBBjqkAQiYI5xWQxp%2B5IRonXGHL65lIfsJznHjt5vxMVKUaYze0H6o7ZH0VWKBFcNY%2BZn%2F2oCEz3l96IxL4NQQHtaT7atbHOX56i%2BHfs6bbdNBQDpCGRhORJ3vn%2B8EnCBaqIhyCVDH7TzHsCVIqGoFV0QhJ9WzDoPRSd1ysFp8FkLuBPdBDmoBLYnu57US8Pu6G9OnOp1krMSt6ZV39rP4BoZsM5TLTBt0&X-Amz-Signature=05bf843bfc98b678f00e10d2ec5f3c87c606a75ce8783ab881a330b2ad359c5b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL2VCGWW%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T200954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeCHmntGClEv5lqYedqeXO1LjlVrS9tjM3Xw4djetOrAIhANeImNjmscJT0vFFGfeBMnKWcFZ2wYjCs9wr8UuHk0rtKv8DCHoQABoMNjM3NDIzMTgzODA1IgwZ6aN7pnLKYE%2B%2BNBQq3AOPJevlW1m2%2Bz3dso4V61WsMmPL9oniP2wNmgaSuiK4LmN1WqPjJFShvvF7ZUktaZgdJ6F66MzyGl%2FhGIsUbvbujQnr6lwpzjryDZaUT9d3pwsXzVy%2BR%2F2Wax%2FM1BhSMZjNK%2B1WhB8J3Hc7NkcvJ3GdwwwxuI5CKsmIXJdWwN%2B%2Fy1oBJn5viAukwl02lprD5%2F75isc%2FVNOItEWf5htqxndMbZMO%2B7j0YBzgT5SNV4r3E%2BNHKOuK9TLcos%2Fkh4dUSHsyphoiYoMYSQTed6ruwVRJbAYY8uUuNWYWjAHgLjhsXVYiVXUdFDeTCo3A7T8Rsfk6UpdYd1YqlDQmx0r14f8MDq421vLLFBax9qiim3UAd7YpG1FaLg0O9RCWtMR46InCMMQtzLe4zyin62MDlKpCdyqn9unieUbLS0Rt43MvbYUSBb5UHLI%2BjEdtcibHV0IS8wYg8KaIo2O7NRcgFumLBa10vPaj%2FkjgSm9HIepnzf%2BvFiyBzUeacMSSAHXIEHr8lwAj%2B5CQcXJV9ORf39YTVURvI3O9LW9NcuEkCY97xXMnOpGA4f6GoyyYH4axJzsRcF6wLWw0YhLxmNzzJy%2FfgLDhHzP0KCll%2B%2BUGQ%2BMvBv8tLPP5EsxLLulDgDDL%2BNzBBjqkAQiYI5xWQxp%2B5IRonXGHL65lIfsJznHjt5vxMVKUaYze0H6o7ZH0VWKBFcNY%2BZn%2F2oCEz3l96IxL4NQQHtaT7atbHOX56i%2BHfs6bbdNBQDpCGRhORJ3vn%2B8EnCBaqIhyCVDH7TzHsCVIqGoFV0QhJ9WzDoPRSd1ysFp8FkLuBPdBDmoBLYnu57US8Pu6G9OnOp1krMSt6ZV39rP4BoZsM5TLTBt0&X-Amz-Signature=3fad95cd9aa86392b7d5b347ead9de85c9728e924847a3523deef5d6defed43e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL2VCGWW%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T200954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeCHmntGClEv5lqYedqeXO1LjlVrS9tjM3Xw4djetOrAIhANeImNjmscJT0vFFGfeBMnKWcFZ2wYjCs9wr8UuHk0rtKv8DCHoQABoMNjM3NDIzMTgzODA1IgwZ6aN7pnLKYE%2B%2BNBQq3AOPJevlW1m2%2Bz3dso4V61WsMmPL9oniP2wNmgaSuiK4LmN1WqPjJFShvvF7ZUktaZgdJ6F66MzyGl%2FhGIsUbvbujQnr6lwpzjryDZaUT9d3pwsXzVy%2BR%2F2Wax%2FM1BhSMZjNK%2B1WhB8J3Hc7NkcvJ3GdwwwxuI5CKsmIXJdWwN%2B%2Fy1oBJn5viAukwl02lprD5%2F75isc%2FVNOItEWf5htqxndMbZMO%2B7j0YBzgT5SNV4r3E%2BNHKOuK9TLcos%2Fkh4dUSHsyphoiYoMYSQTed6ruwVRJbAYY8uUuNWYWjAHgLjhsXVYiVXUdFDeTCo3A7T8Rsfk6UpdYd1YqlDQmx0r14f8MDq421vLLFBax9qiim3UAd7YpG1FaLg0O9RCWtMR46InCMMQtzLe4zyin62MDlKpCdyqn9unieUbLS0Rt43MvbYUSBb5UHLI%2BjEdtcibHV0IS8wYg8KaIo2O7NRcgFumLBa10vPaj%2FkjgSm9HIepnzf%2BvFiyBzUeacMSSAHXIEHr8lwAj%2B5CQcXJV9ORf39YTVURvI3O9LW9NcuEkCY97xXMnOpGA4f6GoyyYH4axJzsRcF6wLWw0YhLxmNzzJy%2FfgLDhHzP0KCll%2B%2BUGQ%2BMvBv8tLPP5EsxLLulDgDDL%2BNzBBjqkAQiYI5xWQxp%2B5IRonXGHL65lIfsJznHjt5vxMVKUaYze0H6o7ZH0VWKBFcNY%2BZn%2F2oCEz3l96IxL4NQQHtaT7atbHOX56i%2BHfs6bbdNBQDpCGRhORJ3vn%2B8EnCBaqIhyCVDH7TzHsCVIqGoFV0QhJ9WzDoPRSd1ysFp8FkLuBPdBDmoBLYnu57US8Pu6G9OnOp1krMSt6ZV39rP4BoZsM5TLTBt0&X-Amz-Signature=98e3e93d6aadce6b2774768d68d5bba1517dc46d62323558c22a7ee5a33c9b19&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL2VCGWW%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T200954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCeCHmntGClEv5lqYedqeXO1LjlVrS9tjM3Xw4djetOrAIhANeImNjmscJT0vFFGfeBMnKWcFZ2wYjCs9wr8UuHk0rtKv8DCHoQABoMNjM3NDIzMTgzODA1IgwZ6aN7pnLKYE%2B%2BNBQq3AOPJevlW1m2%2Bz3dso4V61WsMmPL9oniP2wNmgaSuiK4LmN1WqPjJFShvvF7ZUktaZgdJ6F66MzyGl%2FhGIsUbvbujQnr6lwpzjryDZaUT9d3pwsXzVy%2BR%2F2Wax%2FM1BhSMZjNK%2B1WhB8J3Hc7NkcvJ3GdwwwxuI5CKsmIXJdWwN%2B%2Fy1oBJn5viAukwl02lprD5%2F75isc%2FVNOItEWf5htqxndMbZMO%2B7j0YBzgT5SNV4r3E%2BNHKOuK9TLcos%2Fkh4dUSHsyphoiYoMYSQTed6ruwVRJbAYY8uUuNWYWjAHgLjhsXVYiVXUdFDeTCo3A7T8Rsfk6UpdYd1YqlDQmx0r14f8MDq421vLLFBax9qiim3UAd7YpG1FaLg0O9RCWtMR46InCMMQtzLe4zyin62MDlKpCdyqn9unieUbLS0Rt43MvbYUSBb5UHLI%2BjEdtcibHV0IS8wYg8KaIo2O7NRcgFumLBa10vPaj%2FkjgSm9HIepnzf%2BvFiyBzUeacMSSAHXIEHr8lwAj%2B5CQcXJV9ORf39YTVURvI3O9LW9NcuEkCY97xXMnOpGA4f6GoyyYH4axJzsRcF6wLWw0YhLxmNzzJy%2FfgLDhHzP0KCll%2B%2BUGQ%2BMvBv8tLPP5EsxLLulDgDDL%2BNzBBjqkAQiYI5xWQxp%2B5IRonXGHL65lIfsJznHjt5vxMVKUaYze0H6o7ZH0VWKBFcNY%2BZn%2F2oCEz3l96IxL4NQQHtaT7atbHOX56i%2BHfs6bbdNBQDpCGRhORJ3vn%2B8EnCBaqIhyCVDH7TzHsCVIqGoFV0QhJ9WzDoPRSd1ysFp8FkLuBPdBDmoBLYnu57US8Pu6G9OnOp1krMSt6ZV39rP4BoZsM5TLTBt0&X-Amz-Signature=206c32246f58427c68d79ed112353e4e36d4b3578f690032c3cf1fe02b01f75f&X-Amz-SignedHeaders=host&x-id=GetObject)
