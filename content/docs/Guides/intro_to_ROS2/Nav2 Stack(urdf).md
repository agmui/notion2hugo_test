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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NTRS53S%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T131857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgRm6GnjbN7M1%2FKtJD9%2FHXgRvpyKh9sjrSvj1nzB9Y%2FAIhANh57VjrY6WpC6cHWIcJaeQ0YHxG1llqQkQYofGGK6K3Kv8DCEYQABoMNjM3NDIzMTgzODA1Igy1PaP6BHp6eK3YlV4q3APRl4qTxqNRLIe0g4Pf6trLiASzjtdSLC8fM9LRuxelF1xqUA005uok9CKm%2F6CEF1hLXYIWsvtOfK8HjyXwZDIRPentzf%2FJHfCo7HdOHRKrmZuoFVqUlG4yB3QMajpp7hTCFrd5IpJLXLKMgPE03jxGBLBO0teFPafnhdWf7KkvJolEW%2F%2Fy6S2u9Q294y9BJlqrbaBEcwFTfnwrIoG%2F06blqv5a3exxoDS%2FyXqwJ5iG8ZXDmskmg%2BKNoLiz9KEnMiVmhXwc8NgLCJ30o2OV21svZp6QEgyJ745AUmHYaT9H4jCz8EvY2nDgl2CbkX3Uxny8lMBf99SfsJUG6UrgkuYQXPuWHwH%2BpbfCye%2FM53cHj%2FdS8chUol1HmBScsHbRAvbKwkuE%2FXcmPOgNS5sOFoleKwHsZKJ5IIMp3oAfypTGggPJ%2BHgRz7e1WETqMKsnhGFsHdZQGJ6GJgMpKBCwnH%2FrHOKN1pdKUB7yydO2QZXhymUnrMVDOIbV6ERL9sBbppbX6IF%2BHIZuB1DudgdHr3XJAOCC6LWniTto39XQycuE5H%2BOCCanrHq7U2MyCpjVHuOYdO63naXXSx7tgRT0RVvO7DmUxZvhPAc0K5rRWu2QjUC5228Np5EsiodfEDCTlJW%2FBjqkAQbaI%2FlMPgkEspEZp4lC2VutractWyrAdrB61YYv0SIbCOJMmjSXhJS10FE1hXLulFWKAgV7TJ4fMNd9c4te2NYl%2B%2FesxTv68GHZ%2FHLowWdyi6knSfeSLcdXFTuizoX%2Fk5Max6kVjaoV6wctSRXdjlD%2FY1VXoE4pwCixUCdOziM0%2FNru6MVXwXWQONy3zZO4TLVhT21liqu2EzI7AhSYrU3%2Brpwu&X-Amz-Signature=11dba8f0259ef95fd9a49af5deed95a029e1b265ac94e0f9f69e43b6a3727692&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NTRS53S%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T131857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgRm6GnjbN7M1%2FKtJD9%2FHXgRvpyKh9sjrSvj1nzB9Y%2FAIhANh57VjrY6WpC6cHWIcJaeQ0YHxG1llqQkQYofGGK6K3Kv8DCEYQABoMNjM3NDIzMTgzODA1Igy1PaP6BHp6eK3YlV4q3APRl4qTxqNRLIe0g4Pf6trLiASzjtdSLC8fM9LRuxelF1xqUA005uok9CKm%2F6CEF1hLXYIWsvtOfK8HjyXwZDIRPentzf%2FJHfCo7HdOHRKrmZuoFVqUlG4yB3QMajpp7hTCFrd5IpJLXLKMgPE03jxGBLBO0teFPafnhdWf7KkvJolEW%2F%2Fy6S2u9Q294y9BJlqrbaBEcwFTfnwrIoG%2F06blqv5a3exxoDS%2FyXqwJ5iG8ZXDmskmg%2BKNoLiz9KEnMiVmhXwc8NgLCJ30o2OV21svZp6QEgyJ745AUmHYaT9H4jCz8EvY2nDgl2CbkX3Uxny8lMBf99SfsJUG6UrgkuYQXPuWHwH%2BpbfCye%2FM53cHj%2FdS8chUol1HmBScsHbRAvbKwkuE%2FXcmPOgNS5sOFoleKwHsZKJ5IIMp3oAfypTGggPJ%2BHgRz7e1WETqMKsnhGFsHdZQGJ6GJgMpKBCwnH%2FrHOKN1pdKUB7yydO2QZXhymUnrMVDOIbV6ERL9sBbppbX6IF%2BHIZuB1DudgdHr3XJAOCC6LWniTto39XQycuE5H%2BOCCanrHq7U2MyCpjVHuOYdO63naXXSx7tgRT0RVvO7DmUxZvhPAc0K5rRWu2QjUC5228Np5EsiodfEDCTlJW%2FBjqkAQbaI%2FlMPgkEspEZp4lC2VutractWyrAdrB61YYv0SIbCOJMmjSXhJS10FE1hXLulFWKAgV7TJ4fMNd9c4te2NYl%2B%2FesxTv68GHZ%2FHLowWdyi6knSfeSLcdXFTuizoX%2Fk5Max6kVjaoV6wctSRXdjlD%2FY1VXoE4pwCixUCdOziM0%2FNru6MVXwXWQONy3zZO4TLVhT21liqu2EzI7AhSYrU3%2Brpwu&X-Amz-Signature=b0ce03c3de911067b96b31afa24ca0e2864ded3d2b0f92cadd7bdaaa2e974f57&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NTRS53S%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T131857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgRm6GnjbN7M1%2FKtJD9%2FHXgRvpyKh9sjrSvj1nzB9Y%2FAIhANh57VjrY6WpC6cHWIcJaeQ0YHxG1llqQkQYofGGK6K3Kv8DCEYQABoMNjM3NDIzMTgzODA1Igy1PaP6BHp6eK3YlV4q3APRl4qTxqNRLIe0g4Pf6trLiASzjtdSLC8fM9LRuxelF1xqUA005uok9CKm%2F6CEF1hLXYIWsvtOfK8HjyXwZDIRPentzf%2FJHfCo7HdOHRKrmZuoFVqUlG4yB3QMajpp7hTCFrd5IpJLXLKMgPE03jxGBLBO0teFPafnhdWf7KkvJolEW%2F%2Fy6S2u9Q294y9BJlqrbaBEcwFTfnwrIoG%2F06blqv5a3exxoDS%2FyXqwJ5iG8ZXDmskmg%2BKNoLiz9KEnMiVmhXwc8NgLCJ30o2OV21svZp6QEgyJ745AUmHYaT9H4jCz8EvY2nDgl2CbkX3Uxny8lMBf99SfsJUG6UrgkuYQXPuWHwH%2BpbfCye%2FM53cHj%2FdS8chUol1HmBScsHbRAvbKwkuE%2FXcmPOgNS5sOFoleKwHsZKJ5IIMp3oAfypTGggPJ%2BHgRz7e1WETqMKsnhGFsHdZQGJ6GJgMpKBCwnH%2FrHOKN1pdKUB7yydO2QZXhymUnrMVDOIbV6ERL9sBbppbX6IF%2BHIZuB1DudgdHr3XJAOCC6LWniTto39XQycuE5H%2BOCCanrHq7U2MyCpjVHuOYdO63naXXSx7tgRT0RVvO7DmUxZvhPAc0K5rRWu2QjUC5228Np5EsiodfEDCTlJW%2FBjqkAQbaI%2FlMPgkEspEZp4lC2VutractWyrAdrB61YYv0SIbCOJMmjSXhJS10FE1hXLulFWKAgV7TJ4fMNd9c4te2NYl%2B%2FesxTv68GHZ%2FHLowWdyi6knSfeSLcdXFTuizoX%2Fk5Max6kVjaoV6wctSRXdjlD%2FY1VXoE4pwCixUCdOziM0%2FNru6MVXwXWQONy3zZO4TLVhT21liqu2EzI7AhSYrU3%2Brpwu&X-Amz-Signature=35656b402760cf5ae6c79899460627b25f457f01c91ab33c0e9bb365129656dc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NTRS53S%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T131857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgRm6GnjbN7M1%2FKtJD9%2FHXgRvpyKh9sjrSvj1nzB9Y%2FAIhANh57VjrY6WpC6cHWIcJaeQ0YHxG1llqQkQYofGGK6K3Kv8DCEYQABoMNjM3NDIzMTgzODA1Igy1PaP6BHp6eK3YlV4q3APRl4qTxqNRLIe0g4Pf6trLiASzjtdSLC8fM9LRuxelF1xqUA005uok9CKm%2F6CEF1hLXYIWsvtOfK8HjyXwZDIRPentzf%2FJHfCo7HdOHRKrmZuoFVqUlG4yB3QMajpp7hTCFrd5IpJLXLKMgPE03jxGBLBO0teFPafnhdWf7KkvJolEW%2F%2Fy6S2u9Q294y9BJlqrbaBEcwFTfnwrIoG%2F06blqv5a3exxoDS%2FyXqwJ5iG8ZXDmskmg%2BKNoLiz9KEnMiVmhXwc8NgLCJ30o2OV21svZp6QEgyJ745AUmHYaT9H4jCz8EvY2nDgl2CbkX3Uxny8lMBf99SfsJUG6UrgkuYQXPuWHwH%2BpbfCye%2FM53cHj%2FdS8chUol1HmBScsHbRAvbKwkuE%2FXcmPOgNS5sOFoleKwHsZKJ5IIMp3oAfypTGggPJ%2BHgRz7e1WETqMKsnhGFsHdZQGJ6GJgMpKBCwnH%2FrHOKN1pdKUB7yydO2QZXhymUnrMVDOIbV6ERL9sBbppbX6IF%2BHIZuB1DudgdHr3XJAOCC6LWniTto39XQycuE5H%2BOCCanrHq7U2MyCpjVHuOYdO63naXXSx7tgRT0RVvO7DmUxZvhPAc0K5rRWu2QjUC5228Np5EsiodfEDCTlJW%2FBjqkAQbaI%2FlMPgkEspEZp4lC2VutractWyrAdrB61YYv0SIbCOJMmjSXhJS10FE1hXLulFWKAgV7TJ4fMNd9c4te2NYl%2B%2FesxTv68GHZ%2FHLowWdyi6knSfeSLcdXFTuizoX%2Fk5Max6kVjaoV6wctSRXdjlD%2FY1VXoE4pwCixUCdOziM0%2FNru6MVXwXWQONy3zZO4TLVhT21liqu2EzI7AhSYrU3%2Brpwu&X-Amz-Signature=059ef8553917529c10afb5b2c181c984b8a659e77355f93807a3bfdb2a830a0a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NTRS53S%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T131857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgRm6GnjbN7M1%2FKtJD9%2FHXgRvpyKh9sjrSvj1nzB9Y%2FAIhANh57VjrY6WpC6cHWIcJaeQ0YHxG1llqQkQYofGGK6K3Kv8DCEYQABoMNjM3NDIzMTgzODA1Igy1PaP6BHp6eK3YlV4q3APRl4qTxqNRLIe0g4Pf6trLiASzjtdSLC8fM9LRuxelF1xqUA005uok9CKm%2F6CEF1hLXYIWsvtOfK8HjyXwZDIRPentzf%2FJHfCo7HdOHRKrmZuoFVqUlG4yB3QMajpp7hTCFrd5IpJLXLKMgPE03jxGBLBO0teFPafnhdWf7KkvJolEW%2F%2Fy6S2u9Q294y9BJlqrbaBEcwFTfnwrIoG%2F06blqv5a3exxoDS%2FyXqwJ5iG8ZXDmskmg%2BKNoLiz9KEnMiVmhXwc8NgLCJ30o2OV21svZp6QEgyJ745AUmHYaT9H4jCz8EvY2nDgl2CbkX3Uxny8lMBf99SfsJUG6UrgkuYQXPuWHwH%2BpbfCye%2FM53cHj%2FdS8chUol1HmBScsHbRAvbKwkuE%2FXcmPOgNS5sOFoleKwHsZKJ5IIMp3oAfypTGggPJ%2BHgRz7e1WETqMKsnhGFsHdZQGJ6GJgMpKBCwnH%2FrHOKN1pdKUB7yydO2QZXhymUnrMVDOIbV6ERL9sBbppbX6IF%2BHIZuB1DudgdHr3XJAOCC6LWniTto39XQycuE5H%2BOCCanrHq7U2MyCpjVHuOYdO63naXXSx7tgRT0RVvO7DmUxZvhPAc0K5rRWu2QjUC5228Np5EsiodfEDCTlJW%2FBjqkAQbaI%2FlMPgkEspEZp4lC2VutractWyrAdrB61YYv0SIbCOJMmjSXhJS10FE1hXLulFWKAgV7TJ4fMNd9c4te2NYl%2B%2FesxTv68GHZ%2FHLowWdyi6knSfeSLcdXFTuizoX%2Fk5Max6kVjaoV6wctSRXdjlD%2FY1VXoE4pwCixUCdOziM0%2FNru6MVXwXWQONy3zZO4TLVhT21liqu2EzI7AhSYrU3%2Brpwu&X-Amz-Signature=e330d0856c57c1ab1fb3bf0b6a37d51e730eb834c81da2784133a41c4e219df3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NTRS53S%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T131857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgRm6GnjbN7M1%2FKtJD9%2FHXgRvpyKh9sjrSvj1nzB9Y%2FAIhANh57VjrY6WpC6cHWIcJaeQ0YHxG1llqQkQYofGGK6K3Kv8DCEYQABoMNjM3NDIzMTgzODA1Igy1PaP6BHp6eK3YlV4q3APRl4qTxqNRLIe0g4Pf6trLiASzjtdSLC8fM9LRuxelF1xqUA005uok9CKm%2F6CEF1hLXYIWsvtOfK8HjyXwZDIRPentzf%2FJHfCo7HdOHRKrmZuoFVqUlG4yB3QMajpp7hTCFrd5IpJLXLKMgPE03jxGBLBO0teFPafnhdWf7KkvJolEW%2F%2Fy6S2u9Q294y9BJlqrbaBEcwFTfnwrIoG%2F06blqv5a3exxoDS%2FyXqwJ5iG8ZXDmskmg%2BKNoLiz9KEnMiVmhXwc8NgLCJ30o2OV21svZp6QEgyJ745AUmHYaT9H4jCz8EvY2nDgl2CbkX3Uxny8lMBf99SfsJUG6UrgkuYQXPuWHwH%2BpbfCye%2FM53cHj%2FdS8chUol1HmBScsHbRAvbKwkuE%2FXcmPOgNS5sOFoleKwHsZKJ5IIMp3oAfypTGggPJ%2BHgRz7e1WETqMKsnhGFsHdZQGJ6GJgMpKBCwnH%2FrHOKN1pdKUB7yydO2QZXhymUnrMVDOIbV6ERL9sBbppbX6IF%2BHIZuB1DudgdHr3XJAOCC6LWniTto39XQycuE5H%2BOCCanrHq7U2MyCpjVHuOYdO63naXXSx7tgRT0RVvO7DmUxZvhPAc0K5rRWu2QjUC5228Np5EsiodfEDCTlJW%2FBjqkAQbaI%2FlMPgkEspEZp4lC2VutractWyrAdrB61YYv0SIbCOJMmjSXhJS10FE1hXLulFWKAgV7TJ4fMNd9c4te2NYl%2B%2FesxTv68GHZ%2FHLowWdyi6knSfeSLcdXFTuizoX%2Fk5Max6kVjaoV6wctSRXdjlD%2FY1VXoE4pwCixUCdOziM0%2FNru6MVXwXWQONy3zZO4TLVhT21liqu2EzI7AhSYrU3%2Brpwu&X-Amz-Signature=3e7696680c4d54e4fa7e4893404bf1dc6794a15c50d8977b3e8cf2158bdb5fee&X-Amz-SignedHeaders=host&x-id=GetObject)
