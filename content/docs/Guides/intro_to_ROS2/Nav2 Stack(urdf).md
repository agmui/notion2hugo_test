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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G4QGYJB%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T070730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9vyYUcvWezIiJsxwvG0%2BcV2UrxK2jYRsAijushkr7CQIgTw5KgZyu2pBsDVPgcvJcLreutFdHNd%2B0Jzr9YA6NYSUq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDMK1gQbSvlsjQ6El8yrcA2utIPFkPx5njLvj5ztUJi2kBtlnTDMj2N6vPnqd15aHih1NCP%2FRnZJjTvG5ZzFAFpXFCZzcbU8AW%2FYuzqsLjGc%2BYz5Z8tVjPGllHFYSzuCbnXI%2Bq%2BwDS6LRNYFSkuTYK6vcieCIINGXniiiDLNRDZncuOVE3Akv0kkT6hdfAaV5ft%2Ff9o65344B%2B6DRnNafgw%2BmeIsY%2FKgIiIm01863XL9FmWLcQrjAjCaEnCwdGuvKTuO2DqVapBWj9CM6ltl9P6kdjwVaagV0LP%2FFtkQfyMUUUqqfcZ8ithPn47y8UliiE7x13ZTUGY6epVszgxArs1WZyErROnG3wvG96Yw3U7EdsnXUjB598fc05KKWpDUeL78R8UsSc%2FB%2BkFnlhtUbpdwOce7DVJF35CjKyimFo7iYwayPyQ8Zk7XH1dQEWB7tsqvhrKeHBhOBT%2BvhVM03GQrLYfxTGB8gVkBpsS8tQs8h5mwmuDwY29tYLMOtzy95dBgsNw8i5O2%2BDD02a065FaoPzDeyw1Ag1WjurXDYg5iSS3uwPSB%2FnecC7Y6H5LLkeEwDQL4JC0w6wFl8n4FtuznNdR8arE9oARZdAQHeKM%2BFYxPn%2FMMSrUozqa2goi%2B3KFSdB%2F%2FF%2B9MGeBfmMJ%2FAyL8GOqUBgKs%2FB9s6kErqnVWPNBn%2FkCtfpphxOW%2BTPYCKXc%2FY9hWeSJObzg8MFQAjheEl22C5KuSrL%2B%2F22AjeK7EaMFp5C4TqtJG9RhDWrkBjZDyesteXGlWxzHRVdWlI4%2BVxJoeKKzCcCRjxY11osg8g%2BMdYWxMX1DY%2F9mQyxaexoc8r80mOpDM98tybpM8qy%2FnrUcVrN8Zpp%2FhRwdXImmvXKG07JSstp9z%2F&X-Amz-Signature=f89d4cbce61614470325d3cdd10ef4761993ceb17d20722589f1900d5bf8f27c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G4QGYJB%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T070730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9vyYUcvWezIiJsxwvG0%2BcV2UrxK2jYRsAijushkr7CQIgTw5KgZyu2pBsDVPgcvJcLreutFdHNd%2B0Jzr9YA6NYSUq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDMK1gQbSvlsjQ6El8yrcA2utIPFkPx5njLvj5ztUJi2kBtlnTDMj2N6vPnqd15aHih1NCP%2FRnZJjTvG5ZzFAFpXFCZzcbU8AW%2FYuzqsLjGc%2BYz5Z8tVjPGllHFYSzuCbnXI%2Bq%2BwDS6LRNYFSkuTYK6vcieCIINGXniiiDLNRDZncuOVE3Akv0kkT6hdfAaV5ft%2Ff9o65344B%2B6DRnNafgw%2BmeIsY%2FKgIiIm01863XL9FmWLcQrjAjCaEnCwdGuvKTuO2DqVapBWj9CM6ltl9P6kdjwVaagV0LP%2FFtkQfyMUUUqqfcZ8ithPn47y8UliiE7x13ZTUGY6epVszgxArs1WZyErROnG3wvG96Yw3U7EdsnXUjB598fc05KKWpDUeL78R8UsSc%2FB%2BkFnlhtUbpdwOce7DVJF35CjKyimFo7iYwayPyQ8Zk7XH1dQEWB7tsqvhrKeHBhOBT%2BvhVM03GQrLYfxTGB8gVkBpsS8tQs8h5mwmuDwY29tYLMOtzy95dBgsNw8i5O2%2BDD02a065FaoPzDeyw1Ag1WjurXDYg5iSS3uwPSB%2FnecC7Y6H5LLkeEwDQL4JC0w6wFl8n4FtuznNdR8arE9oARZdAQHeKM%2BFYxPn%2FMMSrUozqa2goi%2B3KFSdB%2F%2FF%2B9MGeBfmMJ%2FAyL8GOqUBgKs%2FB9s6kErqnVWPNBn%2FkCtfpphxOW%2BTPYCKXc%2FY9hWeSJObzg8MFQAjheEl22C5KuSrL%2B%2F22AjeK7EaMFp5C4TqtJG9RhDWrkBjZDyesteXGlWxzHRVdWlI4%2BVxJoeKKzCcCRjxY11osg8g%2BMdYWxMX1DY%2F9mQyxaexoc8r80mOpDM98tybpM8qy%2FnrUcVrN8Zpp%2FhRwdXImmvXKG07JSstp9z%2F&X-Amz-Signature=c976992b2ac8b2a7c7efbd73b29e218f317418a17ccf9420a4c9d630b542886d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G4QGYJB%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T070730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9vyYUcvWezIiJsxwvG0%2BcV2UrxK2jYRsAijushkr7CQIgTw5KgZyu2pBsDVPgcvJcLreutFdHNd%2B0Jzr9YA6NYSUq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDMK1gQbSvlsjQ6El8yrcA2utIPFkPx5njLvj5ztUJi2kBtlnTDMj2N6vPnqd15aHih1NCP%2FRnZJjTvG5ZzFAFpXFCZzcbU8AW%2FYuzqsLjGc%2BYz5Z8tVjPGllHFYSzuCbnXI%2Bq%2BwDS6LRNYFSkuTYK6vcieCIINGXniiiDLNRDZncuOVE3Akv0kkT6hdfAaV5ft%2Ff9o65344B%2B6DRnNafgw%2BmeIsY%2FKgIiIm01863XL9FmWLcQrjAjCaEnCwdGuvKTuO2DqVapBWj9CM6ltl9P6kdjwVaagV0LP%2FFtkQfyMUUUqqfcZ8ithPn47y8UliiE7x13ZTUGY6epVszgxArs1WZyErROnG3wvG96Yw3U7EdsnXUjB598fc05KKWpDUeL78R8UsSc%2FB%2BkFnlhtUbpdwOce7DVJF35CjKyimFo7iYwayPyQ8Zk7XH1dQEWB7tsqvhrKeHBhOBT%2BvhVM03GQrLYfxTGB8gVkBpsS8tQs8h5mwmuDwY29tYLMOtzy95dBgsNw8i5O2%2BDD02a065FaoPzDeyw1Ag1WjurXDYg5iSS3uwPSB%2FnecC7Y6H5LLkeEwDQL4JC0w6wFl8n4FtuznNdR8arE9oARZdAQHeKM%2BFYxPn%2FMMSrUozqa2goi%2B3KFSdB%2F%2FF%2B9MGeBfmMJ%2FAyL8GOqUBgKs%2FB9s6kErqnVWPNBn%2FkCtfpphxOW%2BTPYCKXc%2FY9hWeSJObzg8MFQAjheEl22C5KuSrL%2B%2F22AjeK7EaMFp5C4TqtJG9RhDWrkBjZDyesteXGlWxzHRVdWlI4%2BVxJoeKKzCcCRjxY11osg8g%2BMdYWxMX1DY%2F9mQyxaexoc8r80mOpDM98tybpM8qy%2FnrUcVrN8Zpp%2FhRwdXImmvXKG07JSstp9z%2F&X-Amz-Signature=b76eae2af74e60e72c76c0e91dd5d550794ed862b6ee7b67f6ae0e12016c6142&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G4QGYJB%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T070730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9vyYUcvWezIiJsxwvG0%2BcV2UrxK2jYRsAijushkr7CQIgTw5KgZyu2pBsDVPgcvJcLreutFdHNd%2B0Jzr9YA6NYSUq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDMK1gQbSvlsjQ6El8yrcA2utIPFkPx5njLvj5ztUJi2kBtlnTDMj2N6vPnqd15aHih1NCP%2FRnZJjTvG5ZzFAFpXFCZzcbU8AW%2FYuzqsLjGc%2BYz5Z8tVjPGllHFYSzuCbnXI%2Bq%2BwDS6LRNYFSkuTYK6vcieCIINGXniiiDLNRDZncuOVE3Akv0kkT6hdfAaV5ft%2Ff9o65344B%2B6DRnNafgw%2BmeIsY%2FKgIiIm01863XL9FmWLcQrjAjCaEnCwdGuvKTuO2DqVapBWj9CM6ltl9P6kdjwVaagV0LP%2FFtkQfyMUUUqqfcZ8ithPn47y8UliiE7x13ZTUGY6epVszgxArs1WZyErROnG3wvG96Yw3U7EdsnXUjB598fc05KKWpDUeL78R8UsSc%2FB%2BkFnlhtUbpdwOce7DVJF35CjKyimFo7iYwayPyQ8Zk7XH1dQEWB7tsqvhrKeHBhOBT%2BvhVM03GQrLYfxTGB8gVkBpsS8tQs8h5mwmuDwY29tYLMOtzy95dBgsNw8i5O2%2BDD02a065FaoPzDeyw1Ag1WjurXDYg5iSS3uwPSB%2FnecC7Y6H5LLkeEwDQL4JC0w6wFl8n4FtuznNdR8arE9oARZdAQHeKM%2BFYxPn%2FMMSrUozqa2goi%2B3KFSdB%2F%2FF%2B9MGeBfmMJ%2FAyL8GOqUBgKs%2FB9s6kErqnVWPNBn%2FkCtfpphxOW%2BTPYCKXc%2FY9hWeSJObzg8MFQAjheEl22C5KuSrL%2B%2F22AjeK7EaMFp5C4TqtJG9RhDWrkBjZDyesteXGlWxzHRVdWlI4%2BVxJoeKKzCcCRjxY11osg8g%2BMdYWxMX1DY%2F9mQyxaexoc8r80mOpDM98tybpM8qy%2FnrUcVrN8Zpp%2FhRwdXImmvXKG07JSstp9z%2F&X-Amz-Signature=a6d20a294a9f64275fdc293e64fc23e222c6469ac6c308dc6cf5c0e5b43bb430&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G4QGYJB%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T070730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9vyYUcvWezIiJsxwvG0%2BcV2UrxK2jYRsAijushkr7CQIgTw5KgZyu2pBsDVPgcvJcLreutFdHNd%2B0Jzr9YA6NYSUq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDMK1gQbSvlsjQ6El8yrcA2utIPFkPx5njLvj5ztUJi2kBtlnTDMj2N6vPnqd15aHih1NCP%2FRnZJjTvG5ZzFAFpXFCZzcbU8AW%2FYuzqsLjGc%2BYz5Z8tVjPGllHFYSzuCbnXI%2Bq%2BwDS6LRNYFSkuTYK6vcieCIINGXniiiDLNRDZncuOVE3Akv0kkT6hdfAaV5ft%2Ff9o65344B%2B6DRnNafgw%2BmeIsY%2FKgIiIm01863XL9FmWLcQrjAjCaEnCwdGuvKTuO2DqVapBWj9CM6ltl9P6kdjwVaagV0LP%2FFtkQfyMUUUqqfcZ8ithPn47y8UliiE7x13ZTUGY6epVszgxArs1WZyErROnG3wvG96Yw3U7EdsnXUjB598fc05KKWpDUeL78R8UsSc%2FB%2BkFnlhtUbpdwOce7DVJF35CjKyimFo7iYwayPyQ8Zk7XH1dQEWB7tsqvhrKeHBhOBT%2BvhVM03GQrLYfxTGB8gVkBpsS8tQs8h5mwmuDwY29tYLMOtzy95dBgsNw8i5O2%2BDD02a065FaoPzDeyw1Ag1WjurXDYg5iSS3uwPSB%2FnecC7Y6H5LLkeEwDQL4JC0w6wFl8n4FtuznNdR8arE9oARZdAQHeKM%2BFYxPn%2FMMSrUozqa2goi%2B3KFSdB%2F%2FF%2B9MGeBfmMJ%2FAyL8GOqUBgKs%2FB9s6kErqnVWPNBn%2FkCtfpphxOW%2BTPYCKXc%2FY9hWeSJObzg8MFQAjheEl22C5KuSrL%2B%2F22AjeK7EaMFp5C4TqtJG9RhDWrkBjZDyesteXGlWxzHRVdWlI4%2BVxJoeKKzCcCRjxY11osg8g%2BMdYWxMX1DY%2F9mQyxaexoc8r80mOpDM98tybpM8qy%2FnrUcVrN8Zpp%2FhRwdXImmvXKG07JSstp9z%2F&X-Amz-Signature=0c98e881a50c6f42ff42b48e11f5558c4b4d7fd6236252bad2d62d187d17ef8f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663G4QGYJB%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T070730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9vyYUcvWezIiJsxwvG0%2BcV2UrxK2jYRsAijushkr7CQIgTw5KgZyu2pBsDVPgcvJcLreutFdHNd%2B0Jzr9YA6NYSUq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDMK1gQbSvlsjQ6El8yrcA2utIPFkPx5njLvj5ztUJi2kBtlnTDMj2N6vPnqd15aHih1NCP%2FRnZJjTvG5ZzFAFpXFCZzcbU8AW%2FYuzqsLjGc%2BYz5Z8tVjPGllHFYSzuCbnXI%2Bq%2BwDS6LRNYFSkuTYK6vcieCIINGXniiiDLNRDZncuOVE3Akv0kkT6hdfAaV5ft%2Ff9o65344B%2B6DRnNafgw%2BmeIsY%2FKgIiIm01863XL9FmWLcQrjAjCaEnCwdGuvKTuO2DqVapBWj9CM6ltl9P6kdjwVaagV0LP%2FFtkQfyMUUUqqfcZ8ithPn47y8UliiE7x13ZTUGY6epVszgxArs1WZyErROnG3wvG96Yw3U7EdsnXUjB598fc05KKWpDUeL78R8UsSc%2FB%2BkFnlhtUbpdwOce7DVJF35CjKyimFo7iYwayPyQ8Zk7XH1dQEWB7tsqvhrKeHBhOBT%2BvhVM03GQrLYfxTGB8gVkBpsS8tQs8h5mwmuDwY29tYLMOtzy95dBgsNw8i5O2%2BDD02a065FaoPzDeyw1Ag1WjurXDYg5iSS3uwPSB%2FnecC7Y6H5LLkeEwDQL4JC0w6wFl8n4FtuznNdR8arE9oARZdAQHeKM%2BFYxPn%2FMMSrUozqa2goi%2B3KFSdB%2F%2FF%2B9MGeBfmMJ%2FAyL8GOqUBgKs%2FB9s6kErqnVWPNBn%2FkCtfpphxOW%2BTPYCKXc%2FY9hWeSJObzg8MFQAjheEl22C5KuSrL%2B%2F22AjeK7EaMFp5C4TqtJG9RhDWrkBjZDyesteXGlWxzHRVdWlI4%2BVxJoeKKzCcCRjxY11osg8g%2BMdYWxMX1DY%2F9mQyxaexoc8r80mOpDM98tybpM8qy%2FnrUcVrN8Zpp%2FhRwdXImmvXKG07JSstp9z%2F&X-Amz-Signature=4a194b36a82f424f0b824c1d118e92d41e7cfb0b4bd888fb48ac768c4e0210b6&X-Amz-SignedHeaders=host&x-id=GetObject)
