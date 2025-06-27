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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD6BHG2N%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T132336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDW3UkmVAu3Km%2Bsm%2Fv8eZ7pGExETRYQi80GPGN7A7TzXQIhANdUMDZNAQnZTAwaNRnMWNmymXaHRPs5iWeodr2s1V7KKv8DCHYQABoMNjM3NDIzMTgzODA1Igwv48pDzOBvEEoQ1eUq3AN%2F1d4233qF0owYfAQMsma2W0uCrEtgBSO79Jv4DstM%2FJn5dfiJRBGiBB6pAARI8%2BMJQef09qJ0nyw9FNFpPmQ7NXhc6xMV7fHkKFVQhv1Jh7lFf1cE56wUrg%2Bu12TWhES%2Fig7LC1iXC1RQjvaM%2F8QFYD%2FS4VSB3Q9tLHjSHypNfQqjpZcweSXBBRVetSFZvzADibcE6BnXrWH%2Fdro9RXZmQBeKL5kzPrKoJvoB46rc5G5TfvWFgPMRyAYxmhp323m1teyT5g%2Fpas8w9USDoeAznMSVGvKYBMWLaGU9%2BtVwb4GM4lAa%2BhsjOFPSY%2Fos3bL4RRardbyekbKyDXNm2rGnwqfoXNADH1vV1nfZbgPmtanzzpN8UHTA3Q5A9Bd72sPY2LoVUqCMyQBu4Gq30ymLipRlucgKjrA08PICuWxlU83Qh84gt3pEJpibVjqBvHffnLc6u%2FHP0cS5Pv3JuKA7zt1aw2B%2BQZk26ZbpZpQIqELqWiYHRlr%2FuwG%2FGR%2FqqQmBdHHyvP8n7JqxVDEH3eh3p1N%2BrMfL2Y%2By%2FJrJJJ3nrHlqXVJOsI3v8FO6AZ16ekJfHTaiEjVVuL8pZ0V7BhrEx4GUMIP%2FpbGUiQYh0Wx8f1gr3f6AB4z6C0xwXDDipvrCBjqkAZP1zMayQMI2ozYkORf8JAltQCsnyOYxfFBSk69FTeaxRHPGucUE4Bei2i54DnK4qi0Izd%2BHQQ3pEOBCmzjxXbKMByf%2B6Zeiw3w1lcJvQjJsGDAH3BoKxMvDPQzO0brfa6vpxWxpp3Ycffj918msmAcm6EyAPIpAOa4kS8v%2BarhCAK25XjTAODEluWTKk93rLa1YjR8hUl4pFt4yT%2FWMJ9D%2F2fy%2B&X-Amz-Signature=48204363a72f6bd4613746cfbe66313612c9674a5f910a3f154dff851493654f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD6BHG2N%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T132336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDW3UkmVAu3Km%2Bsm%2Fv8eZ7pGExETRYQi80GPGN7A7TzXQIhANdUMDZNAQnZTAwaNRnMWNmymXaHRPs5iWeodr2s1V7KKv8DCHYQABoMNjM3NDIzMTgzODA1Igwv48pDzOBvEEoQ1eUq3AN%2F1d4233qF0owYfAQMsma2W0uCrEtgBSO79Jv4DstM%2FJn5dfiJRBGiBB6pAARI8%2BMJQef09qJ0nyw9FNFpPmQ7NXhc6xMV7fHkKFVQhv1Jh7lFf1cE56wUrg%2Bu12TWhES%2Fig7LC1iXC1RQjvaM%2F8QFYD%2FS4VSB3Q9tLHjSHypNfQqjpZcweSXBBRVetSFZvzADibcE6BnXrWH%2Fdro9RXZmQBeKL5kzPrKoJvoB46rc5G5TfvWFgPMRyAYxmhp323m1teyT5g%2Fpas8w9USDoeAznMSVGvKYBMWLaGU9%2BtVwb4GM4lAa%2BhsjOFPSY%2Fos3bL4RRardbyekbKyDXNm2rGnwqfoXNADH1vV1nfZbgPmtanzzpN8UHTA3Q5A9Bd72sPY2LoVUqCMyQBu4Gq30ymLipRlucgKjrA08PICuWxlU83Qh84gt3pEJpibVjqBvHffnLc6u%2FHP0cS5Pv3JuKA7zt1aw2B%2BQZk26ZbpZpQIqELqWiYHRlr%2FuwG%2FGR%2FqqQmBdHHyvP8n7JqxVDEH3eh3p1N%2BrMfL2Y%2By%2FJrJJJ3nrHlqXVJOsI3v8FO6AZ16ekJfHTaiEjVVuL8pZ0V7BhrEx4GUMIP%2FpbGUiQYh0Wx8f1gr3f6AB4z6C0xwXDDipvrCBjqkAZP1zMayQMI2ozYkORf8JAltQCsnyOYxfFBSk69FTeaxRHPGucUE4Bei2i54DnK4qi0Izd%2BHQQ3pEOBCmzjxXbKMByf%2B6Zeiw3w1lcJvQjJsGDAH3BoKxMvDPQzO0brfa6vpxWxpp3Ycffj918msmAcm6EyAPIpAOa4kS8v%2BarhCAK25XjTAODEluWTKk93rLa1YjR8hUl4pFt4yT%2FWMJ9D%2F2fy%2B&X-Amz-Signature=acf9ff8142fec5d7058100a8d8d52b8da6a6f3f7016dcff2a475b468ba0b3986&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD6BHG2N%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T132336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDW3UkmVAu3Km%2Bsm%2Fv8eZ7pGExETRYQi80GPGN7A7TzXQIhANdUMDZNAQnZTAwaNRnMWNmymXaHRPs5iWeodr2s1V7KKv8DCHYQABoMNjM3NDIzMTgzODA1Igwv48pDzOBvEEoQ1eUq3AN%2F1d4233qF0owYfAQMsma2W0uCrEtgBSO79Jv4DstM%2FJn5dfiJRBGiBB6pAARI8%2BMJQef09qJ0nyw9FNFpPmQ7NXhc6xMV7fHkKFVQhv1Jh7lFf1cE56wUrg%2Bu12TWhES%2Fig7LC1iXC1RQjvaM%2F8QFYD%2FS4VSB3Q9tLHjSHypNfQqjpZcweSXBBRVetSFZvzADibcE6BnXrWH%2Fdro9RXZmQBeKL5kzPrKoJvoB46rc5G5TfvWFgPMRyAYxmhp323m1teyT5g%2Fpas8w9USDoeAznMSVGvKYBMWLaGU9%2BtVwb4GM4lAa%2BhsjOFPSY%2Fos3bL4RRardbyekbKyDXNm2rGnwqfoXNADH1vV1nfZbgPmtanzzpN8UHTA3Q5A9Bd72sPY2LoVUqCMyQBu4Gq30ymLipRlucgKjrA08PICuWxlU83Qh84gt3pEJpibVjqBvHffnLc6u%2FHP0cS5Pv3JuKA7zt1aw2B%2BQZk26ZbpZpQIqELqWiYHRlr%2FuwG%2FGR%2FqqQmBdHHyvP8n7JqxVDEH3eh3p1N%2BrMfL2Y%2By%2FJrJJJ3nrHlqXVJOsI3v8FO6AZ16ekJfHTaiEjVVuL8pZ0V7BhrEx4GUMIP%2FpbGUiQYh0Wx8f1gr3f6AB4z6C0xwXDDipvrCBjqkAZP1zMayQMI2ozYkORf8JAltQCsnyOYxfFBSk69FTeaxRHPGucUE4Bei2i54DnK4qi0Izd%2BHQQ3pEOBCmzjxXbKMByf%2B6Zeiw3w1lcJvQjJsGDAH3BoKxMvDPQzO0brfa6vpxWxpp3Ycffj918msmAcm6EyAPIpAOa4kS8v%2BarhCAK25XjTAODEluWTKk93rLa1YjR8hUl4pFt4yT%2FWMJ9D%2F2fy%2B&X-Amz-Signature=1a3417bf8fb562fca9187459ba3803bc6bc66db86d716cb2350999632ec4e5ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD6BHG2N%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T132336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDW3UkmVAu3Km%2Bsm%2Fv8eZ7pGExETRYQi80GPGN7A7TzXQIhANdUMDZNAQnZTAwaNRnMWNmymXaHRPs5iWeodr2s1V7KKv8DCHYQABoMNjM3NDIzMTgzODA1Igwv48pDzOBvEEoQ1eUq3AN%2F1d4233qF0owYfAQMsma2W0uCrEtgBSO79Jv4DstM%2FJn5dfiJRBGiBB6pAARI8%2BMJQef09qJ0nyw9FNFpPmQ7NXhc6xMV7fHkKFVQhv1Jh7lFf1cE56wUrg%2Bu12TWhES%2Fig7LC1iXC1RQjvaM%2F8QFYD%2FS4VSB3Q9tLHjSHypNfQqjpZcweSXBBRVetSFZvzADibcE6BnXrWH%2Fdro9RXZmQBeKL5kzPrKoJvoB46rc5G5TfvWFgPMRyAYxmhp323m1teyT5g%2Fpas8w9USDoeAznMSVGvKYBMWLaGU9%2BtVwb4GM4lAa%2BhsjOFPSY%2Fos3bL4RRardbyekbKyDXNm2rGnwqfoXNADH1vV1nfZbgPmtanzzpN8UHTA3Q5A9Bd72sPY2LoVUqCMyQBu4Gq30ymLipRlucgKjrA08PICuWxlU83Qh84gt3pEJpibVjqBvHffnLc6u%2FHP0cS5Pv3JuKA7zt1aw2B%2BQZk26ZbpZpQIqELqWiYHRlr%2FuwG%2FGR%2FqqQmBdHHyvP8n7JqxVDEH3eh3p1N%2BrMfL2Y%2By%2FJrJJJ3nrHlqXVJOsI3v8FO6AZ16ekJfHTaiEjVVuL8pZ0V7BhrEx4GUMIP%2FpbGUiQYh0Wx8f1gr3f6AB4z6C0xwXDDipvrCBjqkAZP1zMayQMI2ozYkORf8JAltQCsnyOYxfFBSk69FTeaxRHPGucUE4Bei2i54DnK4qi0Izd%2BHQQ3pEOBCmzjxXbKMByf%2B6Zeiw3w1lcJvQjJsGDAH3BoKxMvDPQzO0brfa6vpxWxpp3Ycffj918msmAcm6EyAPIpAOa4kS8v%2BarhCAK25XjTAODEluWTKk93rLa1YjR8hUl4pFt4yT%2FWMJ9D%2F2fy%2B&X-Amz-Signature=7b19a2285dc9aaf0ca1f007317657c0f67969265bf2e0d30e4fa17d2b1b498fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD6BHG2N%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T132336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDW3UkmVAu3Km%2Bsm%2Fv8eZ7pGExETRYQi80GPGN7A7TzXQIhANdUMDZNAQnZTAwaNRnMWNmymXaHRPs5iWeodr2s1V7KKv8DCHYQABoMNjM3NDIzMTgzODA1Igwv48pDzOBvEEoQ1eUq3AN%2F1d4233qF0owYfAQMsma2W0uCrEtgBSO79Jv4DstM%2FJn5dfiJRBGiBB6pAARI8%2BMJQef09qJ0nyw9FNFpPmQ7NXhc6xMV7fHkKFVQhv1Jh7lFf1cE56wUrg%2Bu12TWhES%2Fig7LC1iXC1RQjvaM%2F8QFYD%2FS4VSB3Q9tLHjSHypNfQqjpZcweSXBBRVetSFZvzADibcE6BnXrWH%2Fdro9RXZmQBeKL5kzPrKoJvoB46rc5G5TfvWFgPMRyAYxmhp323m1teyT5g%2Fpas8w9USDoeAznMSVGvKYBMWLaGU9%2BtVwb4GM4lAa%2BhsjOFPSY%2Fos3bL4RRardbyekbKyDXNm2rGnwqfoXNADH1vV1nfZbgPmtanzzpN8UHTA3Q5A9Bd72sPY2LoVUqCMyQBu4Gq30ymLipRlucgKjrA08PICuWxlU83Qh84gt3pEJpibVjqBvHffnLc6u%2FHP0cS5Pv3JuKA7zt1aw2B%2BQZk26ZbpZpQIqELqWiYHRlr%2FuwG%2FGR%2FqqQmBdHHyvP8n7JqxVDEH3eh3p1N%2BrMfL2Y%2By%2FJrJJJ3nrHlqXVJOsI3v8FO6AZ16ekJfHTaiEjVVuL8pZ0V7BhrEx4GUMIP%2FpbGUiQYh0Wx8f1gr3f6AB4z6C0xwXDDipvrCBjqkAZP1zMayQMI2ozYkORf8JAltQCsnyOYxfFBSk69FTeaxRHPGucUE4Bei2i54DnK4qi0Izd%2BHQQ3pEOBCmzjxXbKMByf%2B6Zeiw3w1lcJvQjJsGDAH3BoKxMvDPQzO0brfa6vpxWxpp3Ycffj918msmAcm6EyAPIpAOa4kS8v%2BarhCAK25XjTAODEluWTKk93rLa1YjR8hUl4pFt4yT%2FWMJ9D%2F2fy%2B&X-Amz-Signature=137fa0d7cbde3a70a7da7e60b39ced97ab969c0d887c9516f5acf715805d3632&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD6BHG2N%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T132336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDW3UkmVAu3Km%2Bsm%2Fv8eZ7pGExETRYQi80GPGN7A7TzXQIhANdUMDZNAQnZTAwaNRnMWNmymXaHRPs5iWeodr2s1V7KKv8DCHYQABoMNjM3NDIzMTgzODA1Igwv48pDzOBvEEoQ1eUq3AN%2F1d4233qF0owYfAQMsma2W0uCrEtgBSO79Jv4DstM%2FJn5dfiJRBGiBB6pAARI8%2BMJQef09qJ0nyw9FNFpPmQ7NXhc6xMV7fHkKFVQhv1Jh7lFf1cE56wUrg%2Bu12TWhES%2Fig7LC1iXC1RQjvaM%2F8QFYD%2FS4VSB3Q9tLHjSHypNfQqjpZcweSXBBRVetSFZvzADibcE6BnXrWH%2Fdro9RXZmQBeKL5kzPrKoJvoB46rc5G5TfvWFgPMRyAYxmhp323m1teyT5g%2Fpas8w9USDoeAznMSVGvKYBMWLaGU9%2BtVwb4GM4lAa%2BhsjOFPSY%2Fos3bL4RRardbyekbKyDXNm2rGnwqfoXNADH1vV1nfZbgPmtanzzpN8UHTA3Q5A9Bd72sPY2LoVUqCMyQBu4Gq30ymLipRlucgKjrA08PICuWxlU83Qh84gt3pEJpibVjqBvHffnLc6u%2FHP0cS5Pv3JuKA7zt1aw2B%2BQZk26ZbpZpQIqELqWiYHRlr%2FuwG%2FGR%2FqqQmBdHHyvP8n7JqxVDEH3eh3p1N%2BrMfL2Y%2By%2FJrJJJ3nrHlqXVJOsI3v8FO6AZ16ekJfHTaiEjVVuL8pZ0V7BhrEx4GUMIP%2FpbGUiQYh0Wx8f1gr3f6AB4z6C0xwXDDipvrCBjqkAZP1zMayQMI2ozYkORf8JAltQCsnyOYxfFBSk69FTeaxRHPGucUE4Bei2i54DnK4qi0Izd%2BHQQ3pEOBCmzjxXbKMByf%2B6Zeiw3w1lcJvQjJsGDAH3BoKxMvDPQzO0brfa6vpxWxpp3Ycffj918msmAcm6EyAPIpAOa4kS8v%2BarhCAK25XjTAODEluWTKk93rLa1YjR8hUl4pFt4yT%2FWMJ9D%2F2fy%2B&X-Amz-Signature=aae3b3d2c3babc160d44daf488ed919e6e7412a7555b28d2abad05f786954306&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
