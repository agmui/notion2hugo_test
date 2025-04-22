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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQKMSLX3%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIAqRZKvx%2BUmfM%2FHOQnQQRCyTP%2Bxvb%2FhBHI0nsVB9TWGhAiEAgsaluikBHl%2FQxmIyr1dVN2MCiEZaVAOul19Xac7Gu38qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAXoQqqVpSOFAt6eyrcAzidNe5S5%2F1ZYvD7ZQn3HqOgEl9QxiwgyrxhDrvnAqwzUhfFAMOoOIbLr3A%2BJyWwZEHC8SqCI0lDsHz%2F2vNYmKahMgSL79K2QPf0zvdsHWKSQldhLUmwnPwp36rFOi4KWVGqH%2BKrHJUxME4uw0gC6mel6i7HHKocO563yYS%2BocLId73H8iSqOusGQL%2FUTP3q0h%2FawnOWaeGTfjlvgoEbNNY4PLniQVq%2Fqw2obiRA4W6vBVlJ69nOB0LkqtZVbm%2BIGFQd0hujyJrC73Git6%2Bke8JZgDJOjaT5o6HQu5%2BIYGQc%2BlpXPsDUFeQw%2FrZSCiGVN1MRe%2B72Y5QZ2teNVJ3blWeMHD69LaqJXl0fFr%2B%2B0MFkn3NBdOvEybSlAebcRzOdVLzhauXypjIwSPAcikMj7K%2BspF8EPwcD1SMdIfSv5SaLDOgrB6jv2EX62VIQtEpJUGlS9BNokBWXQXbibXJwm2F%2FmDHHSmkwo4NKnbcJZeiDO6zsFG%2F7nyghuA306vwZxhHcnQKxLbCCUhA4tSN1GUUwNzPZtCZb3%2F1Dms0ue1LxGBOKt3s0w%2F0vgpGZnaEKjzBNKCuhBY7EpPvCCvCBOLpTVsuBX5ySHR2fvAe%2BxQ4INv4ZEEfh0yLMjYCgMOrfnsAGOqUBPT85Bm53npb7Y0EeDIi5WSBcyUlqkfXsG20Q2jRJcV%2BlMehkFaHeLnIseamdeV1chVuYw4gKTndWub8N8jPR83x3ZqzlXn1oxt%2FXoVnhqWoFfJANMjgw4iE8JD0i9Ozwl9KJMF8E31dCUrJf1ycYhbwmQMiFKYzHWYvAXLTdxDYy60t%2FJtFnZL9TkZklJbfO%2FdkPO7X3PC8aDB0yt%2FBKGH2vO%2FeR&X-Amz-Signature=280898718e13c7a06bba09e741114718e552373827d9cf057c9c5785b65193e9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQKMSLX3%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIAqRZKvx%2BUmfM%2FHOQnQQRCyTP%2Bxvb%2FhBHI0nsVB9TWGhAiEAgsaluikBHl%2FQxmIyr1dVN2MCiEZaVAOul19Xac7Gu38qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAXoQqqVpSOFAt6eyrcAzidNe5S5%2F1ZYvD7ZQn3HqOgEl9QxiwgyrxhDrvnAqwzUhfFAMOoOIbLr3A%2BJyWwZEHC8SqCI0lDsHz%2F2vNYmKahMgSL79K2QPf0zvdsHWKSQldhLUmwnPwp36rFOi4KWVGqH%2BKrHJUxME4uw0gC6mel6i7HHKocO563yYS%2BocLId73H8iSqOusGQL%2FUTP3q0h%2FawnOWaeGTfjlvgoEbNNY4PLniQVq%2Fqw2obiRA4W6vBVlJ69nOB0LkqtZVbm%2BIGFQd0hujyJrC73Git6%2Bke8JZgDJOjaT5o6HQu5%2BIYGQc%2BlpXPsDUFeQw%2FrZSCiGVN1MRe%2B72Y5QZ2teNVJ3blWeMHD69LaqJXl0fFr%2B%2B0MFkn3NBdOvEybSlAebcRzOdVLzhauXypjIwSPAcikMj7K%2BspF8EPwcD1SMdIfSv5SaLDOgrB6jv2EX62VIQtEpJUGlS9BNokBWXQXbibXJwm2F%2FmDHHSmkwo4NKnbcJZeiDO6zsFG%2F7nyghuA306vwZxhHcnQKxLbCCUhA4tSN1GUUwNzPZtCZb3%2F1Dms0ue1LxGBOKt3s0w%2F0vgpGZnaEKjzBNKCuhBY7EpPvCCvCBOLpTVsuBX5ySHR2fvAe%2BxQ4INv4ZEEfh0yLMjYCgMOrfnsAGOqUBPT85Bm53npb7Y0EeDIi5WSBcyUlqkfXsG20Q2jRJcV%2BlMehkFaHeLnIseamdeV1chVuYw4gKTndWub8N8jPR83x3ZqzlXn1oxt%2FXoVnhqWoFfJANMjgw4iE8JD0i9Ozwl9KJMF8E31dCUrJf1ycYhbwmQMiFKYzHWYvAXLTdxDYy60t%2FJtFnZL9TkZklJbfO%2FdkPO7X3PC8aDB0yt%2FBKGH2vO%2FeR&X-Amz-Signature=aec996680c52186ccbcacc05fbb0934e7ddd4c68963f5c535dd8dd629b9d941d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQKMSLX3%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIAqRZKvx%2BUmfM%2FHOQnQQRCyTP%2Bxvb%2FhBHI0nsVB9TWGhAiEAgsaluikBHl%2FQxmIyr1dVN2MCiEZaVAOul19Xac7Gu38qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAXoQqqVpSOFAt6eyrcAzidNe5S5%2F1ZYvD7ZQn3HqOgEl9QxiwgyrxhDrvnAqwzUhfFAMOoOIbLr3A%2BJyWwZEHC8SqCI0lDsHz%2F2vNYmKahMgSL79K2QPf0zvdsHWKSQldhLUmwnPwp36rFOi4KWVGqH%2BKrHJUxME4uw0gC6mel6i7HHKocO563yYS%2BocLId73H8iSqOusGQL%2FUTP3q0h%2FawnOWaeGTfjlvgoEbNNY4PLniQVq%2Fqw2obiRA4W6vBVlJ69nOB0LkqtZVbm%2BIGFQd0hujyJrC73Git6%2Bke8JZgDJOjaT5o6HQu5%2BIYGQc%2BlpXPsDUFeQw%2FrZSCiGVN1MRe%2B72Y5QZ2teNVJ3blWeMHD69LaqJXl0fFr%2B%2B0MFkn3NBdOvEybSlAebcRzOdVLzhauXypjIwSPAcikMj7K%2BspF8EPwcD1SMdIfSv5SaLDOgrB6jv2EX62VIQtEpJUGlS9BNokBWXQXbibXJwm2F%2FmDHHSmkwo4NKnbcJZeiDO6zsFG%2F7nyghuA306vwZxhHcnQKxLbCCUhA4tSN1GUUwNzPZtCZb3%2F1Dms0ue1LxGBOKt3s0w%2F0vgpGZnaEKjzBNKCuhBY7EpPvCCvCBOLpTVsuBX5ySHR2fvAe%2BxQ4INv4ZEEfh0yLMjYCgMOrfnsAGOqUBPT85Bm53npb7Y0EeDIi5WSBcyUlqkfXsG20Q2jRJcV%2BlMehkFaHeLnIseamdeV1chVuYw4gKTndWub8N8jPR83x3ZqzlXn1oxt%2FXoVnhqWoFfJANMjgw4iE8JD0i9Ozwl9KJMF8E31dCUrJf1ycYhbwmQMiFKYzHWYvAXLTdxDYy60t%2FJtFnZL9TkZklJbfO%2FdkPO7X3PC8aDB0yt%2FBKGH2vO%2FeR&X-Amz-Signature=76e9d53ccfe868bc1399940017ac9cbfbc7f677b99ed4aafd93c47dbbb1272af&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQKMSLX3%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIAqRZKvx%2BUmfM%2FHOQnQQRCyTP%2Bxvb%2FhBHI0nsVB9TWGhAiEAgsaluikBHl%2FQxmIyr1dVN2MCiEZaVAOul19Xac7Gu38qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAXoQqqVpSOFAt6eyrcAzidNe5S5%2F1ZYvD7ZQn3HqOgEl9QxiwgyrxhDrvnAqwzUhfFAMOoOIbLr3A%2BJyWwZEHC8SqCI0lDsHz%2F2vNYmKahMgSL79K2QPf0zvdsHWKSQldhLUmwnPwp36rFOi4KWVGqH%2BKrHJUxME4uw0gC6mel6i7HHKocO563yYS%2BocLId73H8iSqOusGQL%2FUTP3q0h%2FawnOWaeGTfjlvgoEbNNY4PLniQVq%2Fqw2obiRA4W6vBVlJ69nOB0LkqtZVbm%2BIGFQd0hujyJrC73Git6%2Bke8JZgDJOjaT5o6HQu5%2BIYGQc%2BlpXPsDUFeQw%2FrZSCiGVN1MRe%2B72Y5QZ2teNVJ3blWeMHD69LaqJXl0fFr%2B%2B0MFkn3NBdOvEybSlAebcRzOdVLzhauXypjIwSPAcikMj7K%2BspF8EPwcD1SMdIfSv5SaLDOgrB6jv2EX62VIQtEpJUGlS9BNokBWXQXbibXJwm2F%2FmDHHSmkwo4NKnbcJZeiDO6zsFG%2F7nyghuA306vwZxhHcnQKxLbCCUhA4tSN1GUUwNzPZtCZb3%2F1Dms0ue1LxGBOKt3s0w%2F0vgpGZnaEKjzBNKCuhBY7EpPvCCvCBOLpTVsuBX5ySHR2fvAe%2BxQ4INv4ZEEfh0yLMjYCgMOrfnsAGOqUBPT85Bm53npb7Y0EeDIi5WSBcyUlqkfXsG20Q2jRJcV%2BlMehkFaHeLnIseamdeV1chVuYw4gKTndWub8N8jPR83x3ZqzlXn1oxt%2FXoVnhqWoFfJANMjgw4iE8JD0i9Ozwl9KJMF8E31dCUrJf1ycYhbwmQMiFKYzHWYvAXLTdxDYy60t%2FJtFnZL9TkZklJbfO%2FdkPO7X3PC8aDB0yt%2FBKGH2vO%2FeR&X-Amz-Signature=32d3dc1a47ddf9cd98d8cb96e637ed852bc1f5040013d9d5dfc13e5741e49524&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQKMSLX3%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIAqRZKvx%2BUmfM%2FHOQnQQRCyTP%2Bxvb%2FhBHI0nsVB9TWGhAiEAgsaluikBHl%2FQxmIyr1dVN2MCiEZaVAOul19Xac7Gu38qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAXoQqqVpSOFAt6eyrcAzidNe5S5%2F1ZYvD7ZQn3HqOgEl9QxiwgyrxhDrvnAqwzUhfFAMOoOIbLr3A%2BJyWwZEHC8SqCI0lDsHz%2F2vNYmKahMgSL79K2QPf0zvdsHWKSQldhLUmwnPwp36rFOi4KWVGqH%2BKrHJUxME4uw0gC6mel6i7HHKocO563yYS%2BocLId73H8iSqOusGQL%2FUTP3q0h%2FawnOWaeGTfjlvgoEbNNY4PLniQVq%2Fqw2obiRA4W6vBVlJ69nOB0LkqtZVbm%2BIGFQd0hujyJrC73Git6%2Bke8JZgDJOjaT5o6HQu5%2BIYGQc%2BlpXPsDUFeQw%2FrZSCiGVN1MRe%2B72Y5QZ2teNVJ3blWeMHD69LaqJXl0fFr%2B%2B0MFkn3NBdOvEybSlAebcRzOdVLzhauXypjIwSPAcikMj7K%2BspF8EPwcD1SMdIfSv5SaLDOgrB6jv2EX62VIQtEpJUGlS9BNokBWXQXbibXJwm2F%2FmDHHSmkwo4NKnbcJZeiDO6zsFG%2F7nyghuA306vwZxhHcnQKxLbCCUhA4tSN1GUUwNzPZtCZb3%2F1Dms0ue1LxGBOKt3s0w%2F0vgpGZnaEKjzBNKCuhBY7EpPvCCvCBOLpTVsuBX5ySHR2fvAe%2BxQ4INv4ZEEfh0yLMjYCgMOrfnsAGOqUBPT85Bm53npb7Y0EeDIi5WSBcyUlqkfXsG20Q2jRJcV%2BlMehkFaHeLnIseamdeV1chVuYw4gKTndWub8N8jPR83x3ZqzlXn1oxt%2FXoVnhqWoFfJANMjgw4iE8JD0i9Ozwl9KJMF8E31dCUrJf1ycYhbwmQMiFKYzHWYvAXLTdxDYy60t%2FJtFnZL9TkZklJbfO%2FdkPO7X3PC8aDB0yt%2FBKGH2vO%2FeR&X-Amz-Signature=29732c0b316f40bd03d0add5ccc0113e4e44ad880e7c68e39f56ceebe07a9a61&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQKMSLX3%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIAqRZKvx%2BUmfM%2FHOQnQQRCyTP%2Bxvb%2FhBHI0nsVB9TWGhAiEAgsaluikBHl%2FQxmIyr1dVN2MCiEZaVAOul19Xac7Gu38qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCAXoQqqVpSOFAt6eyrcAzidNe5S5%2F1ZYvD7ZQn3HqOgEl9QxiwgyrxhDrvnAqwzUhfFAMOoOIbLr3A%2BJyWwZEHC8SqCI0lDsHz%2F2vNYmKahMgSL79K2QPf0zvdsHWKSQldhLUmwnPwp36rFOi4KWVGqH%2BKrHJUxME4uw0gC6mel6i7HHKocO563yYS%2BocLId73H8iSqOusGQL%2FUTP3q0h%2FawnOWaeGTfjlvgoEbNNY4PLniQVq%2Fqw2obiRA4W6vBVlJ69nOB0LkqtZVbm%2BIGFQd0hujyJrC73Git6%2Bke8JZgDJOjaT5o6HQu5%2BIYGQc%2BlpXPsDUFeQw%2FrZSCiGVN1MRe%2B72Y5QZ2teNVJ3blWeMHD69LaqJXl0fFr%2B%2B0MFkn3NBdOvEybSlAebcRzOdVLzhauXypjIwSPAcikMj7K%2BspF8EPwcD1SMdIfSv5SaLDOgrB6jv2EX62VIQtEpJUGlS9BNokBWXQXbibXJwm2F%2FmDHHSmkwo4NKnbcJZeiDO6zsFG%2F7nyghuA306vwZxhHcnQKxLbCCUhA4tSN1GUUwNzPZtCZb3%2F1Dms0ue1LxGBOKt3s0w%2F0vgpGZnaEKjzBNKCuhBY7EpPvCCvCBOLpTVsuBX5ySHR2fvAe%2BxQ4INv4ZEEfh0yLMjYCgMOrfnsAGOqUBPT85Bm53npb7Y0EeDIi5WSBcyUlqkfXsG20Q2jRJcV%2BlMehkFaHeLnIseamdeV1chVuYw4gKTndWub8N8jPR83x3ZqzlXn1oxt%2FXoVnhqWoFfJANMjgw4iE8JD0i9Ozwl9KJMF8E31dCUrJf1ycYhbwmQMiFKYzHWYvAXLTdxDYy60t%2FJtFnZL9TkZklJbfO%2FdkPO7X3PC8aDB0yt%2FBKGH2vO%2FeR&X-Amz-Signature=585474567626641c7ba40069cc38924b3baeeaafd7b9929947d303016b8994d6&X-Amz-SignedHeaders=host&x-id=GetObject)
