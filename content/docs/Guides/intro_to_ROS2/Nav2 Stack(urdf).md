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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUTUZ754%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T220116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhGn13C0tzWUSRp26BFi2RV1S8AddVhx5MmzcP8MC3sAiEAh70d9yS9XuI11ZSizdab158zJWubaPBHItQSo3AoTKIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDD2SZNOKPTYPfIxvnCrcA%2F5FdmlzZ3524xHri0kDe8Ax2gCZx93KIHk1Oc5dXca%2FvDN8%2BaCCYu2YjuFn80eJH40dgcRlUzkY1P2muc1Rx2hlXnhaWT2ZmjA1FVn0%2FgMRVPRBQJDwX2o7LjwoU1lTCCIQJCmhxUL8gYKliPpGimn1onVCPpYLc4ZZpXm9an7JTYv0pAQKA0FIqP10r7YN%2F26ncliN8vjWIKhJELYyL%2Bg3GOitk6mDayTSCi7nuStKvAz%2FYtInJv3k5CBdXin8IaYbqMizDc0zi3eK1IBp6d%2BgvI20BMTIHKli4oRVOelPNtaiaGUI47qsxa7B2VFf7NSUwJB4KMflA6%2B9oqclGI%2B4M5s1ngJCdbL%2BiIjWYVmBHuz0d1llin0yCOZzbQ2%2FET0pxkeu80c%2F9cSJRmGd8RGWy38uZpV2wUn4DxQBj9Yw%2BcP243Nyqjbpbg0f3jJ7mUWueI%2B6rFIc8DWJwTzqMxzZn9AXS5imyJki5XAwuQ0Kgcoq4JnqmB7aqPi9WTOs%2FYNAKrSbvDIESwv8HTUDnhZ3ROG1SZVTBEHbU0HWn8msJxyUyKRAIIxJQk5mJg665K%2FFCBzHf1cMk8ujsy22kEKlYYStjusAoZVfHGzNiih5pgASdA1lYx%2BrQSwrMPHV870GOqUBfcJik%2BTpXjTcSTQzMVl4UFeLUgRWotWizzeqviv0vxBADNsCmjXLKlD2A3LfB4OJOLaQ56sLQwljPSLgDdr7LWXBxCL5yLWC9q2AvCLsOQZQN7PUFGVWp8p2KJKJlrJaaQMyFxX1rXHZ4I2NnziD1la9LJSV8C%2B7aUQMIwXf%2FnKBHm0PmBuf6SPUOfB5Ly7a9Fo1ZNWOOt3%2Br9QI1szZXpdJaSIv&X-Amz-Signature=faaa6b8ba3d5196dbea985f5c1fcff8effa461325bc07ca0657154a355be695e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUTUZ754%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T220116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhGn13C0tzWUSRp26BFi2RV1S8AddVhx5MmzcP8MC3sAiEAh70d9yS9XuI11ZSizdab158zJWubaPBHItQSo3AoTKIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDD2SZNOKPTYPfIxvnCrcA%2F5FdmlzZ3524xHri0kDe8Ax2gCZx93KIHk1Oc5dXca%2FvDN8%2BaCCYu2YjuFn80eJH40dgcRlUzkY1P2muc1Rx2hlXnhaWT2ZmjA1FVn0%2FgMRVPRBQJDwX2o7LjwoU1lTCCIQJCmhxUL8gYKliPpGimn1onVCPpYLc4ZZpXm9an7JTYv0pAQKA0FIqP10r7YN%2F26ncliN8vjWIKhJELYyL%2Bg3GOitk6mDayTSCi7nuStKvAz%2FYtInJv3k5CBdXin8IaYbqMizDc0zi3eK1IBp6d%2BgvI20BMTIHKli4oRVOelPNtaiaGUI47qsxa7B2VFf7NSUwJB4KMflA6%2B9oqclGI%2B4M5s1ngJCdbL%2BiIjWYVmBHuz0d1llin0yCOZzbQ2%2FET0pxkeu80c%2F9cSJRmGd8RGWy38uZpV2wUn4DxQBj9Yw%2BcP243Nyqjbpbg0f3jJ7mUWueI%2B6rFIc8DWJwTzqMxzZn9AXS5imyJki5XAwuQ0Kgcoq4JnqmB7aqPi9WTOs%2FYNAKrSbvDIESwv8HTUDnhZ3ROG1SZVTBEHbU0HWn8msJxyUyKRAIIxJQk5mJg665K%2FFCBzHf1cMk8ujsy22kEKlYYStjusAoZVfHGzNiih5pgASdA1lYx%2BrQSwrMPHV870GOqUBfcJik%2BTpXjTcSTQzMVl4UFeLUgRWotWizzeqviv0vxBADNsCmjXLKlD2A3LfB4OJOLaQ56sLQwljPSLgDdr7LWXBxCL5yLWC9q2AvCLsOQZQN7PUFGVWp8p2KJKJlrJaaQMyFxX1rXHZ4I2NnziD1la9LJSV8C%2B7aUQMIwXf%2FnKBHm0PmBuf6SPUOfB5Ly7a9Fo1ZNWOOt3%2Br9QI1szZXpdJaSIv&X-Amz-Signature=6214017053f34f4fa8724f0599163748f40a702acc8f880188134d73ae887a4a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUTUZ754%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T220116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhGn13C0tzWUSRp26BFi2RV1S8AddVhx5MmzcP8MC3sAiEAh70d9yS9XuI11ZSizdab158zJWubaPBHItQSo3AoTKIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDD2SZNOKPTYPfIxvnCrcA%2F5FdmlzZ3524xHri0kDe8Ax2gCZx93KIHk1Oc5dXca%2FvDN8%2BaCCYu2YjuFn80eJH40dgcRlUzkY1P2muc1Rx2hlXnhaWT2ZmjA1FVn0%2FgMRVPRBQJDwX2o7LjwoU1lTCCIQJCmhxUL8gYKliPpGimn1onVCPpYLc4ZZpXm9an7JTYv0pAQKA0FIqP10r7YN%2F26ncliN8vjWIKhJELYyL%2Bg3GOitk6mDayTSCi7nuStKvAz%2FYtInJv3k5CBdXin8IaYbqMizDc0zi3eK1IBp6d%2BgvI20BMTIHKli4oRVOelPNtaiaGUI47qsxa7B2VFf7NSUwJB4KMflA6%2B9oqclGI%2B4M5s1ngJCdbL%2BiIjWYVmBHuz0d1llin0yCOZzbQ2%2FET0pxkeu80c%2F9cSJRmGd8RGWy38uZpV2wUn4DxQBj9Yw%2BcP243Nyqjbpbg0f3jJ7mUWueI%2B6rFIc8DWJwTzqMxzZn9AXS5imyJki5XAwuQ0Kgcoq4JnqmB7aqPi9WTOs%2FYNAKrSbvDIESwv8HTUDnhZ3ROG1SZVTBEHbU0HWn8msJxyUyKRAIIxJQk5mJg665K%2FFCBzHf1cMk8ujsy22kEKlYYStjusAoZVfHGzNiih5pgASdA1lYx%2BrQSwrMPHV870GOqUBfcJik%2BTpXjTcSTQzMVl4UFeLUgRWotWizzeqviv0vxBADNsCmjXLKlD2A3LfB4OJOLaQ56sLQwljPSLgDdr7LWXBxCL5yLWC9q2AvCLsOQZQN7PUFGVWp8p2KJKJlrJaaQMyFxX1rXHZ4I2NnziD1la9LJSV8C%2B7aUQMIwXf%2FnKBHm0PmBuf6SPUOfB5Ly7a9Fo1ZNWOOt3%2Br9QI1szZXpdJaSIv&X-Amz-Signature=46e46725a4ed9460365568e7971611ba619e0c0dda9a99f5c083e2ee079762c1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUTUZ754%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T220116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhGn13C0tzWUSRp26BFi2RV1S8AddVhx5MmzcP8MC3sAiEAh70d9yS9XuI11ZSizdab158zJWubaPBHItQSo3AoTKIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDD2SZNOKPTYPfIxvnCrcA%2F5FdmlzZ3524xHri0kDe8Ax2gCZx93KIHk1Oc5dXca%2FvDN8%2BaCCYu2YjuFn80eJH40dgcRlUzkY1P2muc1Rx2hlXnhaWT2ZmjA1FVn0%2FgMRVPRBQJDwX2o7LjwoU1lTCCIQJCmhxUL8gYKliPpGimn1onVCPpYLc4ZZpXm9an7JTYv0pAQKA0FIqP10r7YN%2F26ncliN8vjWIKhJELYyL%2Bg3GOitk6mDayTSCi7nuStKvAz%2FYtInJv3k5CBdXin8IaYbqMizDc0zi3eK1IBp6d%2BgvI20BMTIHKli4oRVOelPNtaiaGUI47qsxa7B2VFf7NSUwJB4KMflA6%2B9oqclGI%2B4M5s1ngJCdbL%2BiIjWYVmBHuz0d1llin0yCOZzbQ2%2FET0pxkeu80c%2F9cSJRmGd8RGWy38uZpV2wUn4DxQBj9Yw%2BcP243Nyqjbpbg0f3jJ7mUWueI%2B6rFIc8DWJwTzqMxzZn9AXS5imyJki5XAwuQ0Kgcoq4JnqmB7aqPi9WTOs%2FYNAKrSbvDIESwv8HTUDnhZ3ROG1SZVTBEHbU0HWn8msJxyUyKRAIIxJQk5mJg665K%2FFCBzHf1cMk8ujsy22kEKlYYStjusAoZVfHGzNiih5pgASdA1lYx%2BrQSwrMPHV870GOqUBfcJik%2BTpXjTcSTQzMVl4UFeLUgRWotWizzeqviv0vxBADNsCmjXLKlD2A3LfB4OJOLaQ56sLQwljPSLgDdr7LWXBxCL5yLWC9q2AvCLsOQZQN7PUFGVWp8p2KJKJlrJaaQMyFxX1rXHZ4I2NnziD1la9LJSV8C%2B7aUQMIwXf%2FnKBHm0PmBuf6SPUOfB5Ly7a9Fo1ZNWOOt3%2Br9QI1szZXpdJaSIv&X-Amz-Signature=2ec7e0031acc28dfdc2ae18d4d5d294f02682b8e49dc940be36d69b1391c0e55&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUTUZ754%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T220116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhGn13C0tzWUSRp26BFi2RV1S8AddVhx5MmzcP8MC3sAiEAh70d9yS9XuI11ZSizdab158zJWubaPBHItQSo3AoTKIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDD2SZNOKPTYPfIxvnCrcA%2F5FdmlzZ3524xHri0kDe8Ax2gCZx93KIHk1Oc5dXca%2FvDN8%2BaCCYu2YjuFn80eJH40dgcRlUzkY1P2muc1Rx2hlXnhaWT2ZmjA1FVn0%2FgMRVPRBQJDwX2o7LjwoU1lTCCIQJCmhxUL8gYKliPpGimn1onVCPpYLc4ZZpXm9an7JTYv0pAQKA0FIqP10r7YN%2F26ncliN8vjWIKhJELYyL%2Bg3GOitk6mDayTSCi7nuStKvAz%2FYtInJv3k5CBdXin8IaYbqMizDc0zi3eK1IBp6d%2BgvI20BMTIHKli4oRVOelPNtaiaGUI47qsxa7B2VFf7NSUwJB4KMflA6%2B9oqclGI%2B4M5s1ngJCdbL%2BiIjWYVmBHuz0d1llin0yCOZzbQ2%2FET0pxkeu80c%2F9cSJRmGd8RGWy38uZpV2wUn4DxQBj9Yw%2BcP243Nyqjbpbg0f3jJ7mUWueI%2B6rFIc8DWJwTzqMxzZn9AXS5imyJki5XAwuQ0Kgcoq4JnqmB7aqPi9WTOs%2FYNAKrSbvDIESwv8HTUDnhZ3ROG1SZVTBEHbU0HWn8msJxyUyKRAIIxJQk5mJg665K%2FFCBzHf1cMk8ujsy22kEKlYYStjusAoZVfHGzNiih5pgASdA1lYx%2BrQSwrMPHV870GOqUBfcJik%2BTpXjTcSTQzMVl4UFeLUgRWotWizzeqviv0vxBADNsCmjXLKlD2A3LfB4OJOLaQ56sLQwljPSLgDdr7LWXBxCL5yLWC9q2AvCLsOQZQN7PUFGVWp8p2KJKJlrJaaQMyFxX1rXHZ4I2NnziD1la9LJSV8C%2B7aUQMIwXf%2FnKBHm0PmBuf6SPUOfB5Ly7a9Fo1ZNWOOt3%2Br9QI1szZXpdJaSIv&X-Amz-Signature=05ff81d90c796c9408d942df504c51bf8ea7c2aa6c3790040ce74c3f0716bce1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUTUZ754%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T220116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFhGn13C0tzWUSRp26BFi2RV1S8AddVhx5MmzcP8MC3sAiEAh70d9yS9XuI11ZSizdab158zJWubaPBHItQSo3AoTKIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDD2SZNOKPTYPfIxvnCrcA%2F5FdmlzZ3524xHri0kDe8Ax2gCZx93KIHk1Oc5dXca%2FvDN8%2BaCCYu2YjuFn80eJH40dgcRlUzkY1P2muc1Rx2hlXnhaWT2ZmjA1FVn0%2FgMRVPRBQJDwX2o7LjwoU1lTCCIQJCmhxUL8gYKliPpGimn1onVCPpYLc4ZZpXm9an7JTYv0pAQKA0FIqP10r7YN%2F26ncliN8vjWIKhJELYyL%2Bg3GOitk6mDayTSCi7nuStKvAz%2FYtInJv3k5CBdXin8IaYbqMizDc0zi3eK1IBp6d%2BgvI20BMTIHKli4oRVOelPNtaiaGUI47qsxa7B2VFf7NSUwJB4KMflA6%2B9oqclGI%2B4M5s1ngJCdbL%2BiIjWYVmBHuz0d1llin0yCOZzbQ2%2FET0pxkeu80c%2F9cSJRmGd8RGWy38uZpV2wUn4DxQBj9Yw%2BcP243Nyqjbpbg0f3jJ7mUWueI%2B6rFIc8DWJwTzqMxzZn9AXS5imyJki5XAwuQ0Kgcoq4JnqmB7aqPi9WTOs%2FYNAKrSbvDIESwv8HTUDnhZ3ROG1SZVTBEHbU0HWn8msJxyUyKRAIIxJQk5mJg665K%2FFCBzHf1cMk8ujsy22kEKlYYStjusAoZVfHGzNiih5pgASdA1lYx%2BrQSwrMPHV870GOqUBfcJik%2BTpXjTcSTQzMVl4UFeLUgRWotWizzeqviv0vxBADNsCmjXLKlD2A3LfB4OJOLaQ56sLQwljPSLgDdr7LWXBxCL5yLWC9q2AvCLsOQZQN7PUFGVWp8p2KJKJlrJaaQMyFxX1rXHZ4I2NnziD1la9LJSV8C%2B7aUQMIwXf%2FnKBHm0PmBuf6SPUOfB5Ly7a9Fo1ZNWOOt3%2Br9QI1szZXpdJaSIv&X-Amz-Signature=8bced0e62a748653741ad8c5c6cde1b5490832d714c9ec2736ab6700bdfc6e46&X-Amz-SignedHeaders=host&x-id=GetObject)
