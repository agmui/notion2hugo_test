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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSLG3J3U%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T110821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIFC4sNZm8laLlfbWfQu%2BK9CjTd2ZUCYjmf49ywAoqBY8AiEAgE84uIBJmhyWul7wmrHIzFsooQ6V012ulUpM1zwDfFIqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6US32e9ifWaS6w4yrcA6W8LPPFNwjilZjMihjV%2FYQGLxRBFpQbSdM8wWXnUh%2B9yOX6laHYQOhaGmcLGK4C3TAtDXQYgVr5TQ4cFAelJuS99c3OZwqkCRkNFILjiXUpDyBnlbGxfUgT%2FIyYKqy44zSn6vCGIN6xCPmxRRj%2BV%2BLPkLrz7WELyl7TAFsE3i8mxxQE8SIam2JPM7hl6rKhxw5wtdpal74K27gelqRq72LiheIdxgwYIeffiiQJWJUbF5lIPxvxsQDkw9WmcJUrXXbKCrjIMR%2BVnsETeNnGBNThxHGKPeu53zozapTZ9wHQlXepayx%2Fdgzk2LC69APie7atGHrR%2FPOsju0SKJE%2B8YlFRwAYu2pryjNa3pwwsYZvYsLgnKrvpnGzBjnj2QDRWkx%2BynqYqY%2BOGCkJpcDXcDZUCzTTTnNLufIOSxEZk3erwZNFkWeKCAQTp%2BMvPxS96QdIaJPLLHtrTScUh149ijR5PB6fn5Yi8HVYjMueY88B0eJHXc1RdzP%2BKM6s00ZvdvjvPsQX2ACPCEVoJPs4Vf4T3Tc%2FFsLRkcPGxKIfWR%2F9kM6ZDGQfp0MwHtXfPs5A5ztrjdmo59iUEtWzH%2BE5qBfs4Xqm65%2F4pTXUNiqeGOOXghl5AlDcCtJp5u5%2FMJ77u8EGOqUBKzNLHW7rUEOy1bR211i33f3WfL3P7Wkc85l59R0BHm%2BP6Yf8F0BQAK5NhUroPquPRzIIh8Fv2vxL1YSiCzBRDc9prohhveBa2Joa8CxCjvy4ZtFNj%2FNFAGMM03hR6blht9pxq0OcFtk92hIHXdo7%2FrbZUgOjhrUS0YgSm6mkCfAl%2B5XKOxGRyvyWJBw1dJRKzimFBx6%2BSDvaqsHPrxc8WU%2BCOF1u&X-Amz-Signature=37fca83bfb5ea84f185ece5a51b52441685baa3bd523461bc57c6566e533c36e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSLG3J3U%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T110821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIFC4sNZm8laLlfbWfQu%2BK9CjTd2ZUCYjmf49ywAoqBY8AiEAgE84uIBJmhyWul7wmrHIzFsooQ6V012ulUpM1zwDfFIqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6US32e9ifWaS6w4yrcA6W8LPPFNwjilZjMihjV%2FYQGLxRBFpQbSdM8wWXnUh%2B9yOX6laHYQOhaGmcLGK4C3TAtDXQYgVr5TQ4cFAelJuS99c3OZwqkCRkNFILjiXUpDyBnlbGxfUgT%2FIyYKqy44zSn6vCGIN6xCPmxRRj%2BV%2BLPkLrz7WELyl7TAFsE3i8mxxQE8SIam2JPM7hl6rKhxw5wtdpal74K27gelqRq72LiheIdxgwYIeffiiQJWJUbF5lIPxvxsQDkw9WmcJUrXXbKCrjIMR%2BVnsETeNnGBNThxHGKPeu53zozapTZ9wHQlXepayx%2Fdgzk2LC69APie7atGHrR%2FPOsju0SKJE%2B8YlFRwAYu2pryjNa3pwwsYZvYsLgnKrvpnGzBjnj2QDRWkx%2BynqYqY%2BOGCkJpcDXcDZUCzTTTnNLufIOSxEZk3erwZNFkWeKCAQTp%2BMvPxS96QdIaJPLLHtrTScUh149ijR5PB6fn5Yi8HVYjMueY88B0eJHXc1RdzP%2BKM6s00ZvdvjvPsQX2ACPCEVoJPs4Vf4T3Tc%2FFsLRkcPGxKIfWR%2F9kM6ZDGQfp0MwHtXfPs5A5ztrjdmo59iUEtWzH%2BE5qBfs4Xqm65%2F4pTXUNiqeGOOXghl5AlDcCtJp5u5%2FMJ77u8EGOqUBKzNLHW7rUEOy1bR211i33f3WfL3P7Wkc85l59R0BHm%2BP6Yf8F0BQAK5NhUroPquPRzIIh8Fv2vxL1YSiCzBRDc9prohhveBa2Joa8CxCjvy4ZtFNj%2FNFAGMM03hR6blht9pxq0OcFtk92hIHXdo7%2FrbZUgOjhrUS0YgSm6mkCfAl%2B5XKOxGRyvyWJBw1dJRKzimFBx6%2BSDvaqsHPrxc8WU%2BCOF1u&X-Amz-Signature=4b1f59c74eecd219e327fc33ab8b71371a163daafc9e62725925a2a62c67915c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSLG3J3U%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T110821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIFC4sNZm8laLlfbWfQu%2BK9CjTd2ZUCYjmf49ywAoqBY8AiEAgE84uIBJmhyWul7wmrHIzFsooQ6V012ulUpM1zwDfFIqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6US32e9ifWaS6w4yrcA6W8LPPFNwjilZjMihjV%2FYQGLxRBFpQbSdM8wWXnUh%2B9yOX6laHYQOhaGmcLGK4C3TAtDXQYgVr5TQ4cFAelJuS99c3OZwqkCRkNFILjiXUpDyBnlbGxfUgT%2FIyYKqy44zSn6vCGIN6xCPmxRRj%2BV%2BLPkLrz7WELyl7TAFsE3i8mxxQE8SIam2JPM7hl6rKhxw5wtdpal74K27gelqRq72LiheIdxgwYIeffiiQJWJUbF5lIPxvxsQDkw9WmcJUrXXbKCrjIMR%2BVnsETeNnGBNThxHGKPeu53zozapTZ9wHQlXepayx%2Fdgzk2LC69APie7atGHrR%2FPOsju0SKJE%2B8YlFRwAYu2pryjNa3pwwsYZvYsLgnKrvpnGzBjnj2QDRWkx%2BynqYqY%2BOGCkJpcDXcDZUCzTTTnNLufIOSxEZk3erwZNFkWeKCAQTp%2BMvPxS96QdIaJPLLHtrTScUh149ijR5PB6fn5Yi8HVYjMueY88B0eJHXc1RdzP%2BKM6s00ZvdvjvPsQX2ACPCEVoJPs4Vf4T3Tc%2FFsLRkcPGxKIfWR%2F9kM6ZDGQfp0MwHtXfPs5A5ztrjdmo59iUEtWzH%2BE5qBfs4Xqm65%2F4pTXUNiqeGOOXghl5AlDcCtJp5u5%2FMJ77u8EGOqUBKzNLHW7rUEOy1bR211i33f3WfL3P7Wkc85l59R0BHm%2BP6Yf8F0BQAK5NhUroPquPRzIIh8Fv2vxL1YSiCzBRDc9prohhveBa2Joa8CxCjvy4ZtFNj%2FNFAGMM03hR6blht9pxq0OcFtk92hIHXdo7%2FrbZUgOjhrUS0YgSm6mkCfAl%2B5XKOxGRyvyWJBw1dJRKzimFBx6%2BSDvaqsHPrxc8WU%2BCOF1u&X-Amz-Signature=7c5d242a9e06f0b88db50219f544392b1ca3a860180549f797ea600f114e47e0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSLG3J3U%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T110821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIFC4sNZm8laLlfbWfQu%2BK9CjTd2ZUCYjmf49ywAoqBY8AiEAgE84uIBJmhyWul7wmrHIzFsooQ6V012ulUpM1zwDfFIqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6US32e9ifWaS6w4yrcA6W8LPPFNwjilZjMihjV%2FYQGLxRBFpQbSdM8wWXnUh%2B9yOX6laHYQOhaGmcLGK4C3TAtDXQYgVr5TQ4cFAelJuS99c3OZwqkCRkNFILjiXUpDyBnlbGxfUgT%2FIyYKqy44zSn6vCGIN6xCPmxRRj%2BV%2BLPkLrz7WELyl7TAFsE3i8mxxQE8SIam2JPM7hl6rKhxw5wtdpal74K27gelqRq72LiheIdxgwYIeffiiQJWJUbF5lIPxvxsQDkw9WmcJUrXXbKCrjIMR%2BVnsETeNnGBNThxHGKPeu53zozapTZ9wHQlXepayx%2Fdgzk2LC69APie7atGHrR%2FPOsju0SKJE%2B8YlFRwAYu2pryjNa3pwwsYZvYsLgnKrvpnGzBjnj2QDRWkx%2BynqYqY%2BOGCkJpcDXcDZUCzTTTnNLufIOSxEZk3erwZNFkWeKCAQTp%2BMvPxS96QdIaJPLLHtrTScUh149ijR5PB6fn5Yi8HVYjMueY88B0eJHXc1RdzP%2BKM6s00ZvdvjvPsQX2ACPCEVoJPs4Vf4T3Tc%2FFsLRkcPGxKIfWR%2F9kM6ZDGQfp0MwHtXfPs5A5ztrjdmo59iUEtWzH%2BE5qBfs4Xqm65%2F4pTXUNiqeGOOXghl5AlDcCtJp5u5%2FMJ77u8EGOqUBKzNLHW7rUEOy1bR211i33f3WfL3P7Wkc85l59R0BHm%2BP6Yf8F0BQAK5NhUroPquPRzIIh8Fv2vxL1YSiCzBRDc9prohhveBa2Joa8CxCjvy4ZtFNj%2FNFAGMM03hR6blht9pxq0OcFtk92hIHXdo7%2FrbZUgOjhrUS0YgSm6mkCfAl%2B5XKOxGRyvyWJBw1dJRKzimFBx6%2BSDvaqsHPrxc8WU%2BCOF1u&X-Amz-Signature=db6bfbf011d62c64af9a8c0b05395d94cbcacbb702b941be99f315ae551574f0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSLG3J3U%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T110821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIFC4sNZm8laLlfbWfQu%2BK9CjTd2ZUCYjmf49ywAoqBY8AiEAgE84uIBJmhyWul7wmrHIzFsooQ6V012ulUpM1zwDfFIqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6US32e9ifWaS6w4yrcA6W8LPPFNwjilZjMihjV%2FYQGLxRBFpQbSdM8wWXnUh%2B9yOX6laHYQOhaGmcLGK4C3TAtDXQYgVr5TQ4cFAelJuS99c3OZwqkCRkNFILjiXUpDyBnlbGxfUgT%2FIyYKqy44zSn6vCGIN6xCPmxRRj%2BV%2BLPkLrz7WELyl7TAFsE3i8mxxQE8SIam2JPM7hl6rKhxw5wtdpal74K27gelqRq72LiheIdxgwYIeffiiQJWJUbF5lIPxvxsQDkw9WmcJUrXXbKCrjIMR%2BVnsETeNnGBNThxHGKPeu53zozapTZ9wHQlXepayx%2Fdgzk2LC69APie7atGHrR%2FPOsju0SKJE%2B8YlFRwAYu2pryjNa3pwwsYZvYsLgnKrvpnGzBjnj2QDRWkx%2BynqYqY%2BOGCkJpcDXcDZUCzTTTnNLufIOSxEZk3erwZNFkWeKCAQTp%2BMvPxS96QdIaJPLLHtrTScUh149ijR5PB6fn5Yi8HVYjMueY88B0eJHXc1RdzP%2BKM6s00ZvdvjvPsQX2ACPCEVoJPs4Vf4T3Tc%2FFsLRkcPGxKIfWR%2F9kM6ZDGQfp0MwHtXfPs5A5ztrjdmo59iUEtWzH%2BE5qBfs4Xqm65%2F4pTXUNiqeGOOXghl5AlDcCtJp5u5%2FMJ77u8EGOqUBKzNLHW7rUEOy1bR211i33f3WfL3P7Wkc85l59R0BHm%2BP6Yf8F0BQAK5NhUroPquPRzIIh8Fv2vxL1YSiCzBRDc9prohhveBa2Joa8CxCjvy4ZtFNj%2FNFAGMM03hR6blht9pxq0OcFtk92hIHXdo7%2FrbZUgOjhrUS0YgSm6mkCfAl%2B5XKOxGRyvyWJBw1dJRKzimFBx6%2BSDvaqsHPrxc8WU%2BCOF1u&X-Amz-Signature=4d431aef1e2f8c459dcf29fb8e9d9575c1202160bc40a71bc83187848e552c41&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSLG3J3U%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T110821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIFC4sNZm8laLlfbWfQu%2BK9CjTd2ZUCYjmf49ywAoqBY8AiEAgE84uIBJmhyWul7wmrHIzFsooQ6V012ulUpM1zwDfFIqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN6US32e9ifWaS6w4yrcA6W8LPPFNwjilZjMihjV%2FYQGLxRBFpQbSdM8wWXnUh%2B9yOX6laHYQOhaGmcLGK4C3TAtDXQYgVr5TQ4cFAelJuS99c3OZwqkCRkNFILjiXUpDyBnlbGxfUgT%2FIyYKqy44zSn6vCGIN6xCPmxRRj%2BV%2BLPkLrz7WELyl7TAFsE3i8mxxQE8SIam2JPM7hl6rKhxw5wtdpal74K27gelqRq72LiheIdxgwYIeffiiQJWJUbF5lIPxvxsQDkw9WmcJUrXXbKCrjIMR%2BVnsETeNnGBNThxHGKPeu53zozapTZ9wHQlXepayx%2Fdgzk2LC69APie7atGHrR%2FPOsju0SKJE%2B8YlFRwAYu2pryjNa3pwwsYZvYsLgnKrvpnGzBjnj2QDRWkx%2BynqYqY%2BOGCkJpcDXcDZUCzTTTnNLufIOSxEZk3erwZNFkWeKCAQTp%2BMvPxS96QdIaJPLLHtrTScUh149ijR5PB6fn5Yi8HVYjMueY88B0eJHXc1RdzP%2BKM6s00ZvdvjvPsQX2ACPCEVoJPs4Vf4T3Tc%2FFsLRkcPGxKIfWR%2F9kM6ZDGQfp0MwHtXfPs5A5ztrjdmo59iUEtWzH%2BE5qBfs4Xqm65%2F4pTXUNiqeGOOXghl5AlDcCtJp5u5%2FMJ77u8EGOqUBKzNLHW7rUEOy1bR211i33f3WfL3P7Wkc85l59R0BHm%2BP6Yf8F0BQAK5NhUroPquPRzIIh8Fv2vxL1YSiCzBRDc9prohhveBa2Joa8CxCjvy4ZtFNj%2FNFAGMM03hR6blht9pxq0OcFtk92hIHXdo7%2FrbZUgOjhrUS0YgSm6mkCfAl%2B5XKOxGRyvyWJBw1dJRKzimFBx6%2BSDvaqsHPrxc8WU%2BCOF1u&X-Amz-Signature=b749bcea18bc436e7440ec6756c3e16b047aa6e7e01c86e8d96f3bae9a2fe780&X-Amz-SignedHeaders=host&x-id=GetObject)
