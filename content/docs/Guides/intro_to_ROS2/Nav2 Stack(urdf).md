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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGW2WTDC%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T121642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIBHq0TDfiTLlp4BWgINga1gdomBusUVzh5LN43v6sGiiAiEA13sgpg%2FKf6D6r3S%2BAFjltmfa%2FcemJNJTQ2EltDJjPLcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDN4zHpN7NzDM%2FiDg7CrcAxPMMnokTM%2F3Vv7msMkeenTZVMPo4WTzeP3PnYa9vC6KTJKhdKnsJOcFAF8KXaSzsxHZssWJHP0M2P2sJpvgUQT%2FQvMlHfgFzHo5sTJ2pMDkC7%2BGoLdZJhdFSEMl38NFgTZ4sF2D3TW3C%2FoDBWhBL89HQpJ%2FirbEcn%2BViAXpBX%2FCkNZmNpe6KMGPgjkqJC92448qpoOtA5w2dQAtxswL8F3lnZ8be%2F5AAs4YZUBagWD5sO%2BnXOWlnRQcewKjJsESjNDKoHWc1%2BMPVFjWg1NvKAsJRgxKpZ9irMD0UUs51m2RhZg6MhYNKrwOpU0m34BXJTITSW7Hnsxdrf1fPuUIcAnLCmHda998T1612i6NszOpuiivqhQWFeTJkq0w83RWQnrfXP0OPvS0ysd2Usf1x8%2B4qJgiv%2BvgbgM1Nugxfc2ccONDAXMhUDw5%2BNBqCnqbWlmyQSGzl51rHoZd574SFwiOgGz2OZvxJic4lPdQvht7jPWWz0lFg%2FPBTvsggPKAeraCMVv4vYWqjIcvQMj0zKwp0DmaYjXKPc1jyghy8jGUl3JJEbMXy3keoqdZtOhk8j9f9JKFPibZx2tLLHJi%2FthAuv0DH3qV%2B4xyXpGA9J1XxM9UYUCd6N1oq9deMLPirsMGOqUBEp%2FAl%2FaTYEFmmjK17IheVD85shUEARCvPKl7f6vRG8xaNm5i5AmECLpiYmKA%2Bn6XOMd4iOtGKtnLpBcU0ce2LKQoNM3PFaFjTv3Yl4QPDtM4CvNDCVYscePnW14qDYM5Jz8LU7ODSg2Yb3D%2F%2BJDXejGiDdOCz5iekyBWANCItqkWiH9cmUFeoooxZGMTzL5fmATq9GlePYyDfn95IT2xdR76QCSN&X-Amz-Signature=9ba7683d6b24163dd913d2760f9f347efb901b1bb8df1f6dad4d81731626e304&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGW2WTDC%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T121642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIBHq0TDfiTLlp4BWgINga1gdomBusUVzh5LN43v6sGiiAiEA13sgpg%2FKf6D6r3S%2BAFjltmfa%2FcemJNJTQ2EltDJjPLcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDN4zHpN7NzDM%2FiDg7CrcAxPMMnokTM%2F3Vv7msMkeenTZVMPo4WTzeP3PnYa9vC6KTJKhdKnsJOcFAF8KXaSzsxHZssWJHP0M2P2sJpvgUQT%2FQvMlHfgFzHo5sTJ2pMDkC7%2BGoLdZJhdFSEMl38NFgTZ4sF2D3TW3C%2FoDBWhBL89HQpJ%2FirbEcn%2BViAXpBX%2FCkNZmNpe6KMGPgjkqJC92448qpoOtA5w2dQAtxswL8F3lnZ8be%2F5AAs4YZUBagWD5sO%2BnXOWlnRQcewKjJsESjNDKoHWc1%2BMPVFjWg1NvKAsJRgxKpZ9irMD0UUs51m2RhZg6MhYNKrwOpU0m34BXJTITSW7Hnsxdrf1fPuUIcAnLCmHda998T1612i6NszOpuiivqhQWFeTJkq0w83RWQnrfXP0OPvS0ysd2Usf1x8%2B4qJgiv%2BvgbgM1Nugxfc2ccONDAXMhUDw5%2BNBqCnqbWlmyQSGzl51rHoZd574SFwiOgGz2OZvxJic4lPdQvht7jPWWz0lFg%2FPBTvsggPKAeraCMVv4vYWqjIcvQMj0zKwp0DmaYjXKPc1jyghy8jGUl3JJEbMXy3keoqdZtOhk8j9f9JKFPibZx2tLLHJi%2FthAuv0DH3qV%2B4xyXpGA9J1XxM9UYUCd6N1oq9deMLPirsMGOqUBEp%2FAl%2FaTYEFmmjK17IheVD85shUEARCvPKl7f6vRG8xaNm5i5AmECLpiYmKA%2Bn6XOMd4iOtGKtnLpBcU0ce2LKQoNM3PFaFjTv3Yl4QPDtM4CvNDCVYscePnW14qDYM5Jz8LU7ODSg2Yb3D%2F%2BJDXejGiDdOCz5iekyBWANCItqkWiH9cmUFeoooxZGMTzL5fmATq9GlePYyDfn95IT2xdR76QCSN&X-Amz-Signature=272380e0db8be1290cf7d2d89acfd2e3c790e490c98c388c8af83e69bab80acb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGW2WTDC%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T121642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIBHq0TDfiTLlp4BWgINga1gdomBusUVzh5LN43v6sGiiAiEA13sgpg%2FKf6D6r3S%2BAFjltmfa%2FcemJNJTQ2EltDJjPLcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDN4zHpN7NzDM%2FiDg7CrcAxPMMnokTM%2F3Vv7msMkeenTZVMPo4WTzeP3PnYa9vC6KTJKhdKnsJOcFAF8KXaSzsxHZssWJHP0M2P2sJpvgUQT%2FQvMlHfgFzHo5sTJ2pMDkC7%2BGoLdZJhdFSEMl38NFgTZ4sF2D3TW3C%2FoDBWhBL89HQpJ%2FirbEcn%2BViAXpBX%2FCkNZmNpe6KMGPgjkqJC92448qpoOtA5w2dQAtxswL8F3lnZ8be%2F5AAs4YZUBagWD5sO%2BnXOWlnRQcewKjJsESjNDKoHWc1%2BMPVFjWg1NvKAsJRgxKpZ9irMD0UUs51m2RhZg6MhYNKrwOpU0m34BXJTITSW7Hnsxdrf1fPuUIcAnLCmHda998T1612i6NszOpuiivqhQWFeTJkq0w83RWQnrfXP0OPvS0ysd2Usf1x8%2B4qJgiv%2BvgbgM1Nugxfc2ccONDAXMhUDw5%2BNBqCnqbWlmyQSGzl51rHoZd574SFwiOgGz2OZvxJic4lPdQvht7jPWWz0lFg%2FPBTvsggPKAeraCMVv4vYWqjIcvQMj0zKwp0DmaYjXKPc1jyghy8jGUl3JJEbMXy3keoqdZtOhk8j9f9JKFPibZx2tLLHJi%2FthAuv0DH3qV%2B4xyXpGA9J1XxM9UYUCd6N1oq9deMLPirsMGOqUBEp%2FAl%2FaTYEFmmjK17IheVD85shUEARCvPKl7f6vRG8xaNm5i5AmECLpiYmKA%2Bn6XOMd4iOtGKtnLpBcU0ce2LKQoNM3PFaFjTv3Yl4QPDtM4CvNDCVYscePnW14qDYM5Jz8LU7ODSg2Yb3D%2F%2BJDXejGiDdOCz5iekyBWANCItqkWiH9cmUFeoooxZGMTzL5fmATq9GlePYyDfn95IT2xdR76QCSN&X-Amz-Signature=e6c3eaa4683a558e55c116e38cbaaec0f07cc54801e99a13436eb6b1cc5216c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGW2WTDC%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T121642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIBHq0TDfiTLlp4BWgINga1gdomBusUVzh5LN43v6sGiiAiEA13sgpg%2FKf6D6r3S%2BAFjltmfa%2FcemJNJTQ2EltDJjPLcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDN4zHpN7NzDM%2FiDg7CrcAxPMMnokTM%2F3Vv7msMkeenTZVMPo4WTzeP3PnYa9vC6KTJKhdKnsJOcFAF8KXaSzsxHZssWJHP0M2P2sJpvgUQT%2FQvMlHfgFzHo5sTJ2pMDkC7%2BGoLdZJhdFSEMl38NFgTZ4sF2D3TW3C%2FoDBWhBL89HQpJ%2FirbEcn%2BViAXpBX%2FCkNZmNpe6KMGPgjkqJC92448qpoOtA5w2dQAtxswL8F3lnZ8be%2F5AAs4YZUBagWD5sO%2BnXOWlnRQcewKjJsESjNDKoHWc1%2BMPVFjWg1NvKAsJRgxKpZ9irMD0UUs51m2RhZg6MhYNKrwOpU0m34BXJTITSW7Hnsxdrf1fPuUIcAnLCmHda998T1612i6NszOpuiivqhQWFeTJkq0w83RWQnrfXP0OPvS0ysd2Usf1x8%2B4qJgiv%2BvgbgM1Nugxfc2ccONDAXMhUDw5%2BNBqCnqbWlmyQSGzl51rHoZd574SFwiOgGz2OZvxJic4lPdQvht7jPWWz0lFg%2FPBTvsggPKAeraCMVv4vYWqjIcvQMj0zKwp0DmaYjXKPc1jyghy8jGUl3JJEbMXy3keoqdZtOhk8j9f9JKFPibZx2tLLHJi%2FthAuv0DH3qV%2B4xyXpGA9J1XxM9UYUCd6N1oq9deMLPirsMGOqUBEp%2FAl%2FaTYEFmmjK17IheVD85shUEARCvPKl7f6vRG8xaNm5i5AmECLpiYmKA%2Bn6XOMd4iOtGKtnLpBcU0ce2LKQoNM3PFaFjTv3Yl4QPDtM4CvNDCVYscePnW14qDYM5Jz8LU7ODSg2Yb3D%2F%2BJDXejGiDdOCz5iekyBWANCItqkWiH9cmUFeoooxZGMTzL5fmATq9GlePYyDfn95IT2xdR76QCSN&X-Amz-Signature=000cb46c890c3f6dbcaa9c93515d19d3ad5a8793bc107d5a16f79e754095755f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGW2WTDC%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T121642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIBHq0TDfiTLlp4BWgINga1gdomBusUVzh5LN43v6sGiiAiEA13sgpg%2FKf6D6r3S%2BAFjltmfa%2FcemJNJTQ2EltDJjPLcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDN4zHpN7NzDM%2FiDg7CrcAxPMMnokTM%2F3Vv7msMkeenTZVMPo4WTzeP3PnYa9vC6KTJKhdKnsJOcFAF8KXaSzsxHZssWJHP0M2P2sJpvgUQT%2FQvMlHfgFzHo5sTJ2pMDkC7%2BGoLdZJhdFSEMl38NFgTZ4sF2D3TW3C%2FoDBWhBL89HQpJ%2FirbEcn%2BViAXpBX%2FCkNZmNpe6KMGPgjkqJC92448qpoOtA5w2dQAtxswL8F3lnZ8be%2F5AAs4YZUBagWD5sO%2BnXOWlnRQcewKjJsESjNDKoHWc1%2BMPVFjWg1NvKAsJRgxKpZ9irMD0UUs51m2RhZg6MhYNKrwOpU0m34BXJTITSW7Hnsxdrf1fPuUIcAnLCmHda998T1612i6NszOpuiivqhQWFeTJkq0w83RWQnrfXP0OPvS0ysd2Usf1x8%2B4qJgiv%2BvgbgM1Nugxfc2ccONDAXMhUDw5%2BNBqCnqbWlmyQSGzl51rHoZd574SFwiOgGz2OZvxJic4lPdQvht7jPWWz0lFg%2FPBTvsggPKAeraCMVv4vYWqjIcvQMj0zKwp0DmaYjXKPc1jyghy8jGUl3JJEbMXy3keoqdZtOhk8j9f9JKFPibZx2tLLHJi%2FthAuv0DH3qV%2B4xyXpGA9J1XxM9UYUCd6N1oq9deMLPirsMGOqUBEp%2FAl%2FaTYEFmmjK17IheVD85shUEARCvPKl7f6vRG8xaNm5i5AmECLpiYmKA%2Bn6XOMd4iOtGKtnLpBcU0ce2LKQoNM3PFaFjTv3Yl4QPDtM4CvNDCVYscePnW14qDYM5Jz8LU7ODSg2Yb3D%2F%2BJDXejGiDdOCz5iekyBWANCItqkWiH9cmUFeoooxZGMTzL5fmATq9GlePYyDfn95IT2xdR76QCSN&X-Amz-Signature=e52d4d680294fe5ac6a82c062b44db280de5703795d1bb18e4fa7928c32ce45e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGW2WTDC%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T121642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIBHq0TDfiTLlp4BWgINga1gdomBusUVzh5LN43v6sGiiAiEA13sgpg%2FKf6D6r3S%2BAFjltmfa%2FcemJNJTQ2EltDJjPLcq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDN4zHpN7NzDM%2FiDg7CrcAxPMMnokTM%2F3Vv7msMkeenTZVMPo4WTzeP3PnYa9vC6KTJKhdKnsJOcFAF8KXaSzsxHZssWJHP0M2P2sJpvgUQT%2FQvMlHfgFzHo5sTJ2pMDkC7%2BGoLdZJhdFSEMl38NFgTZ4sF2D3TW3C%2FoDBWhBL89HQpJ%2FirbEcn%2BViAXpBX%2FCkNZmNpe6KMGPgjkqJC92448qpoOtA5w2dQAtxswL8F3lnZ8be%2F5AAs4YZUBagWD5sO%2BnXOWlnRQcewKjJsESjNDKoHWc1%2BMPVFjWg1NvKAsJRgxKpZ9irMD0UUs51m2RhZg6MhYNKrwOpU0m34BXJTITSW7Hnsxdrf1fPuUIcAnLCmHda998T1612i6NszOpuiivqhQWFeTJkq0w83RWQnrfXP0OPvS0ysd2Usf1x8%2B4qJgiv%2BvgbgM1Nugxfc2ccONDAXMhUDw5%2BNBqCnqbWlmyQSGzl51rHoZd574SFwiOgGz2OZvxJic4lPdQvht7jPWWz0lFg%2FPBTvsggPKAeraCMVv4vYWqjIcvQMj0zKwp0DmaYjXKPc1jyghy8jGUl3JJEbMXy3keoqdZtOhk8j9f9JKFPibZx2tLLHJi%2FthAuv0DH3qV%2B4xyXpGA9J1XxM9UYUCd6N1oq9deMLPirsMGOqUBEp%2FAl%2FaTYEFmmjK17IheVD85shUEARCvPKl7f6vRG8xaNm5i5AmECLpiYmKA%2Bn6XOMd4iOtGKtnLpBcU0ce2LKQoNM3PFaFjTv3Yl4QPDtM4CvNDCVYscePnW14qDYM5Jz8LU7ODSg2Yb3D%2F%2BJDXejGiDdOCz5iekyBWANCItqkWiH9cmUFeoooxZGMTzL5fmATq9GlePYyDfn95IT2xdR76QCSN&X-Amz-Signature=3646a883235410cf618be5982acfdf26238f908c0e74ed74999409ddaffc4b17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
