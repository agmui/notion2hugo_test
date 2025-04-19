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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW6NQEFH%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIFUqsBAUgqVfDAekZnQGZJ9Sc8Jc%2FwBJuhxSCay081zDAiA4G9qfI9AKQUvh9rpGBTgUStEOyJl6COUIyHPXB25J9CqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDkI969EyYEsqSqsZKtwD9%2FBAmbOnFDtX9mCBXu1BB5y1n%2Fw6yIqD%2BkakqxRMzFJ4BVshdVC8XFwChLwSQGFGtKF6DHGdiJnZf9jmPxoa59hEsPXV5H09CiQPcI4gbbMYqcckkFv1HtWkRFZ%2B9qKNbAdqu91LHDNhLKy%2Bvlwou%2FbYxAd0SvQ9BSvOWzaRHSkflVbRbqNKYAW7KEBDJ0%2F9UwOYgYIoMEKInH0vQArtMlOVwUek8OFdnc1m2v16xA%2BPMeDMHE5lXT9kbOmP%2FTiaP7bPUkD8jel1STb9Bo3iXfDbqJVn%2FS1tGcs%2FgrL1OEi4SLxrYH1Egd6tSRNG1L1i5h08tUO1iVdreyJQNDy%2FbUUk3jChbW7HRdEn8SKiBJqDLtBtjncw1wazoo0qvPK4FxPPTUsZfzBUWv9C%2BJCj42XiT7wg8vs9BSmjsfCTSS4HAgR4w3JlDrITsI8%2BB8pF7N%2BRvTM4wz9qwWRpTPs5lbOCZJJXF%2FzfN8Yr1z2Do6O7wkFHgTum1RaDZ3HLjjEIMXTntZkfOZZqYuCy1jcn6tZQMx2kiNzVjqdAY9onzozFCtIxY56daCWSxDQiAwRVR437mkUNbmnk8SbRbhKkw4dSRhlUwn%2FUPMpkdaY9EL47WQuWaZaayQi3COkwi5%2BQwAY6pgFWFCdZ8X2bywkAoDIQxUa6Eb%2BAKvOsJKJDaOjcnjUI5tvbapFKJOnoHGnlYIlmSBlyDRnXj9FvFSJj%2BqhgjgPmbfZSfWTHVtJ62wsIMXHHDwDcWReyTHTUrN0aKtHqZ9SCTultUpBRPvKQWRnpOf6FYPKRkTpRlSoMinzm0fNnApF1vnmUIQl%2Fl3%2FZrCaa%2B5SlN8n79aqCjljJV0IwvdtFG4fiMmcD&X-Amz-Signature=7cc42725506a91865e7b2224b6a0eda4dd339e0037b67b7c2757126259bc1f18&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW6NQEFH%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIFUqsBAUgqVfDAekZnQGZJ9Sc8Jc%2FwBJuhxSCay081zDAiA4G9qfI9AKQUvh9rpGBTgUStEOyJl6COUIyHPXB25J9CqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDkI969EyYEsqSqsZKtwD9%2FBAmbOnFDtX9mCBXu1BB5y1n%2Fw6yIqD%2BkakqxRMzFJ4BVshdVC8XFwChLwSQGFGtKF6DHGdiJnZf9jmPxoa59hEsPXV5H09CiQPcI4gbbMYqcckkFv1HtWkRFZ%2B9qKNbAdqu91LHDNhLKy%2Bvlwou%2FbYxAd0SvQ9BSvOWzaRHSkflVbRbqNKYAW7KEBDJ0%2F9UwOYgYIoMEKInH0vQArtMlOVwUek8OFdnc1m2v16xA%2BPMeDMHE5lXT9kbOmP%2FTiaP7bPUkD8jel1STb9Bo3iXfDbqJVn%2FS1tGcs%2FgrL1OEi4SLxrYH1Egd6tSRNG1L1i5h08tUO1iVdreyJQNDy%2FbUUk3jChbW7HRdEn8SKiBJqDLtBtjncw1wazoo0qvPK4FxPPTUsZfzBUWv9C%2BJCj42XiT7wg8vs9BSmjsfCTSS4HAgR4w3JlDrITsI8%2BB8pF7N%2BRvTM4wz9qwWRpTPs5lbOCZJJXF%2FzfN8Yr1z2Do6O7wkFHgTum1RaDZ3HLjjEIMXTntZkfOZZqYuCy1jcn6tZQMx2kiNzVjqdAY9onzozFCtIxY56daCWSxDQiAwRVR437mkUNbmnk8SbRbhKkw4dSRhlUwn%2FUPMpkdaY9EL47WQuWaZaayQi3COkwi5%2BQwAY6pgFWFCdZ8X2bywkAoDIQxUa6Eb%2BAKvOsJKJDaOjcnjUI5tvbapFKJOnoHGnlYIlmSBlyDRnXj9FvFSJj%2BqhgjgPmbfZSfWTHVtJ62wsIMXHHDwDcWReyTHTUrN0aKtHqZ9SCTultUpBRPvKQWRnpOf6FYPKRkTpRlSoMinzm0fNnApF1vnmUIQl%2Fl3%2FZrCaa%2B5SlN8n79aqCjljJV0IwvdtFG4fiMmcD&X-Amz-Signature=3565cb94725d51059ea90c28e272af13074b53202ab63dc7539a26dbdfb86261&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW6NQEFH%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIFUqsBAUgqVfDAekZnQGZJ9Sc8Jc%2FwBJuhxSCay081zDAiA4G9qfI9AKQUvh9rpGBTgUStEOyJl6COUIyHPXB25J9CqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDkI969EyYEsqSqsZKtwD9%2FBAmbOnFDtX9mCBXu1BB5y1n%2Fw6yIqD%2BkakqxRMzFJ4BVshdVC8XFwChLwSQGFGtKF6DHGdiJnZf9jmPxoa59hEsPXV5H09CiQPcI4gbbMYqcckkFv1HtWkRFZ%2B9qKNbAdqu91LHDNhLKy%2Bvlwou%2FbYxAd0SvQ9BSvOWzaRHSkflVbRbqNKYAW7KEBDJ0%2F9UwOYgYIoMEKInH0vQArtMlOVwUek8OFdnc1m2v16xA%2BPMeDMHE5lXT9kbOmP%2FTiaP7bPUkD8jel1STb9Bo3iXfDbqJVn%2FS1tGcs%2FgrL1OEi4SLxrYH1Egd6tSRNG1L1i5h08tUO1iVdreyJQNDy%2FbUUk3jChbW7HRdEn8SKiBJqDLtBtjncw1wazoo0qvPK4FxPPTUsZfzBUWv9C%2BJCj42XiT7wg8vs9BSmjsfCTSS4HAgR4w3JlDrITsI8%2BB8pF7N%2BRvTM4wz9qwWRpTPs5lbOCZJJXF%2FzfN8Yr1z2Do6O7wkFHgTum1RaDZ3HLjjEIMXTntZkfOZZqYuCy1jcn6tZQMx2kiNzVjqdAY9onzozFCtIxY56daCWSxDQiAwRVR437mkUNbmnk8SbRbhKkw4dSRhlUwn%2FUPMpkdaY9EL47WQuWaZaayQi3COkwi5%2BQwAY6pgFWFCdZ8X2bywkAoDIQxUa6Eb%2BAKvOsJKJDaOjcnjUI5tvbapFKJOnoHGnlYIlmSBlyDRnXj9FvFSJj%2BqhgjgPmbfZSfWTHVtJ62wsIMXHHDwDcWReyTHTUrN0aKtHqZ9SCTultUpBRPvKQWRnpOf6FYPKRkTpRlSoMinzm0fNnApF1vnmUIQl%2Fl3%2FZrCaa%2B5SlN8n79aqCjljJV0IwvdtFG4fiMmcD&X-Amz-Signature=6cb8034978ac12c3a05ec47e3ed21eeaa75004d9cdcecb811cf41b85a79fb693&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW6NQEFH%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIFUqsBAUgqVfDAekZnQGZJ9Sc8Jc%2FwBJuhxSCay081zDAiA4G9qfI9AKQUvh9rpGBTgUStEOyJl6COUIyHPXB25J9CqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDkI969EyYEsqSqsZKtwD9%2FBAmbOnFDtX9mCBXu1BB5y1n%2Fw6yIqD%2BkakqxRMzFJ4BVshdVC8XFwChLwSQGFGtKF6DHGdiJnZf9jmPxoa59hEsPXV5H09CiQPcI4gbbMYqcckkFv1HtWkRFZ%2B9qKNbAdqu91LHDNhLKy%2Bvlwou%2FbYxAd0SvQ9BSvOWzaRHSkflVbRbqNKYAW7KEBDJ0%2F9UwOYgYIoMEKInH0vQArtMlOVwUek8OFdnc1m2v16xA%2BPMeDMHE5lXT9kbOmP%2FTiaP7bPUkD8jel1STb9Bo3iXfDbqJVn%2FS1tGcs%2FgrL1OEi4SLxrYH1Egd6tSRNG1L1i5h08tUO1iVdreyJQNDy%2FbUUk3jChbW7HRdEn8SKiBJqDLtBtjncw1wazoo0qvPK4FxPPTUsZfzBUWv9C%2BJCj42XiT7wg8vs9BSmjsfCTSS4HAgR4w3JlDrITsI8%2BB8pF7N%2BRvTM4wz9qwWRpTPs5lbOCZJJXF%2FzfN8Yr1z2Do6O7wkFHgTum1RaDZ3HLjjEIMXTntZkfOZZqYuCy1jcn6tZQMx2kiNzVjqdAY9onzozFCtIxY56daCWSxDQiAwRVR437mkUNbmnk8SbRbhKkw4dSRhlUwn%2FUPMpkdaY9EL47WQuWaZaayQi3COkwi5%2BQwAY6pgFWFCdZ8X2bywkAoDIQxUa6Eb%2BAKvOsJKJDaOjcnjUI5tvbapFKJOnoHGnlYIlmSBlyDRnXj9FvFSJj%2BqhgjgPmbfZSfWTHVtJ62wsIMXHHDwDcWReyTHTUrN0aKtHqZ9SCTultUpBRPvKQWRnpOf6FYPKRkTpRlSoMinzm0fNnApF1vnmUIQl%2Fl3%2FZrCaa%2B5SlN8n79aqCjljJV0IwvdtFG4fiMmcD&X-Amz-Signature=5434682a47f3f64002ba7a89b70e19380cd753f324af4147c42a925e709bd0ab&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW6NQEFH%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIFUqsBAUgqVfDAekZnQGZJ9Sc8Jc%2FwBJuhxSCay081zDAiA4G9qfI9AKQUvh9rpGBTgUStEOyJl6COUIyHPXB25J9CqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDkI969EyYEsqSqsZKtwD9%2FBAmbOnFDtX9mCBXu1BB5y1n%2Fw6yIqD%2BkakqxRMzFJ4BVshdVC8XFwChLwSQGFGtKF6DHGdiJnZf9jmPxoa59hEsPXV5H09CiQPcI4gbbMYqcckkFv1HtWkRFZ%2B9qKNbAdqu91LHDNhLKy%2Bvlwou%2FbYxAd0SvQ9BSvOWzaRHSkflVbRbqNKYAW7KEBDJ0%2F9UwOYgYIoMEKInH0vQArtMlOVwUek8OFdnc1m2v16xA%2BPMeDMHE5lXT9kbOmP%2FTiaP7bPUkD8jel1STb9Bo3iXfDbqJVn%2FS1tGcs%2FgrL1OEi4SLxrYH1Egd6tSRNG1L1i5h08tUO1iVdreyJQNDy%2FbUUk3jChbW7HRdEn8SKiBJqDLtBtjncw1wazoo0qvPK4FxPPTUsZfzBUWv9C%2BJCj42XiT7wg8vs9BSmjsfCTSS4HAgR4w3JlDrITsI8%2BB8pF7N%2BRvTM4wz9qwWRpTPs5lbOCZJJXF%2FzfN8Yr1z2Do6O7wkFHgTum1RaDZ3HLjjEIMXTntZkfOZZqYuCy1jcn6tZQMx2kiNzVjqdAY9onzozFCtIxY56daCWSxDQiAwRVR437mkUNbmnk8SbRbhKkw4dSRhlUwn%2FUPMpkdaY9EL47WQuWaZaayQi3COkwi5%2BQwAY6pgFWFCdZ8X2bywkAoDIQxUa6Eb%2BAKvOsJKJDaOjcnjUI5tvbapFKJOnoHGnlYIlmSBlyDRnXj9FvFSJj%2BqhgjgPmbfZSfWTHVtJ62wsIMXHHDwDcWReyTHTUrN0aKtHqZ9SCTultUpBRPvKQWRnpOf6FYPKRkTpRlSoMinzm0fNnApF1vnmUIQl%2Fl3%2FZrCaa%2B5SlN8n79aqCjljJV0IwvdtFG4fiMmcD&X-Amz-Signature=6bdca370c9f5aaab2da9603884f0fd33a6b78118e3ccc86d585138482bb47827&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VW6NQEFH%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T220724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIFUqsBAUgqVfDAekZnQGZJ9Sc8Jc%2FwBJuhxSCay081zDAiA4G9qfI9AKQUvh9rpGBTgUStEOyJl6COUIyHPXB25J9CqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDkI969EyYEsqSqsZKtwD9%2FBAmbOnFDtX9mCBXu1BB5y1n%2Fw6yIqD%2BkakqxRMzFJ4BVshdVC8XFwChLwSQGFGtKF6DHGdiJnZf9jmPxoa59hEsPXV5H09CiQPcI4gbbMYqcckkFv1HtWkRFZ%2B9qKNbAdqu91LHDNhLKy%2Bvlwou%2FbYxAd0SvQ9BSvOWzaRHSkflVbRbqNKYAW7KEBDJ0%2F9UwOYgYIoMEKInH0vQArtMlOVwUek8OFdnc1m2v16xA%2BPMeDMHE5lXT9kbOmP%2FTiaP7bPUkD8jel1STb9Bo3iXfDbqJVn%2FS1tGcs%2FgrL1OEi4SLxrYH1Egd6tSRNG1L1i5h08tUO1iVdreyJQNDy%2FbUUk3jChbW7HRdEn8SKiBJqDLtBtjncw1wazoo0qvPK4FxPPTUsZfzBUWv9C%2BJCj42XiT7wg8vs9BSmjsfCTSS4HAgR4w3JlDrITsI8%2BB8pF7N%2BRvTM4wz9qwWRpTPs5lbOCZJJXF%2FzfN8Yr1z2Do6O7wkFHgTum1RaDZ3HLjjEIMXTntZkfOZZqYuCy1jcn6tZQMx2kiNzVjqdAY9onzozFCtIxY56daCWSxDQiAwRVR437mkUNbmnk8SbRbhKkw4dSRhlUwn%2FUPMpkdaY9EL47WQuWaZaayQi3COkwi5%2BQwAY6pgFWFCdZ8X2bywkAoDIQxUa6Eb%2BAKvOsJKJDaOjcnjUI5tvbapFKJOnoHGnlYIlmSBlyDRnXj9FvFSJj%2BqhgjgPmbfZSfWTHVtJ62wsIMXHHDwDcWReyTHTUrN0aKtHqZ9SCTultUpBRPvKQWRnpOf6FYPKRkTpRlSoMinzm0fNnApF1vnmUIQl%2Fl3%2FZrCaa%2B5SlN8n79aqCjljJV0IwvdtFG4fiMmcD&X-Amz-Signature=aefb7968fa6e4e961bd28a3c098293b35008e1230e4ac3bb7412825232f20025&X-Amz-SignedHeaders=host&x-id=GetObject)
