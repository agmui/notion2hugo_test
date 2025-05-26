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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WDHQFWD%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIA1FZ1jze2o1RqfhkiqtJ3heEUps2nDcB%2B41miBI1q2fAiEAixQGpQ%2Fy%2Bry2QI5%2BmZgFsyGXB9r94pPaFfyAHkYRWlsq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDMVmg1C0PWQMU%2BdJdircA1OM6bFZpGBt6J%2BDFoNIfByUMJPot1REjB7pkudnEm%2BnJ7XoXwBfM0TBs%2BqafWAdFGRmIbY9XisxgB5C8QB2GUbYaazeIzOM0fTkuZWl4kOyXOMbmZYNEc5R3AHaLVFuSElJI1A2QT3MFFd40f1scxIMbOfFetCbV94CNtwTahBKOERRcCrd8Lg5KdY%2F5WAKewOi7yL9MZwWAtRWXv4fprkJpL11RzCRRl5Rt182h1z8pIXsnmbNcAkd8psOjBCStpSmbXgw4YySIPNdMQ%2BO1AF6rnaXedffMpYKRuElOaPc6U9LXAZPBXYgZnFURn6xqBQUgH2OL2xKh66Vdr8d7gu9eagD98bKGYyk7QTdYqhlYW8cFN8Ezij8kfrGg7XUR%2Bl3QOKfiyNLtvbsJtSI%2FJGpXuReRAFvzK1kkkKfxakajCzy438X%2FMgw93KTtyxbAzzZdEo34r3K8iqVcXbQILicDqGshoFJwRRadvFiq3U8QdYCWEwrjE%2BiASazqI1BPR5YgsEn8oOrawpdvBODNZqGG1g207khbRAIGTKFyhJASfIqYAXY%2FwsppJ4N5fGsbU3OyRzCfQrmnk%2BtsWYlJVQs5xF5AwpltfTC54IoCi3csXmcYoLIOVkqMLGoMPLl0cEGOqUBFvP6rMd9Ji60p%2BMgVxDVd2rUttKQgp7OCJfcqAbfL3o3uj1HbtBkKwyOuHT%2Fmr5zbidBmL1%2FY03K5yz%2F9RLEpegJdn6s%2FEj%2BBPi%2FdhpDXfMzZAn7IP2%2BsyaWgxfpScVaoDwUexuf%2FlVUkYGh6NLg%2FNa1eHBhTZDFVlTiZLHqkp7Vxz%2FkE59AneAfHGckOiEPwquyEtqC%2BMMRgZApAznPsCGy%2FyOD&X-Amz-Signature=e8e6a0859fb161dd9489146c2ff755903cdc9aabc8a62c0c66d0fb0debb540ed&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WDHQFWD%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIA1FZ1jze2o1RqfhkiqtJ3heEUps2nDcB%2B41miBI1q2fAiEAixQGpQ%2Fy%2Bry2QI5%2BmZgFsyGXB9r94pPaFfyAHkYRWlsq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDMVmg1C0PWQMU%2BdJdircA1OM6bFZpGBt6J%2BDFoNIfByUMJPot1REjB7pkudnEm%2BnJ7XoXwBfM0TBs%2BqafWAdFGRmIbY9XisxgB5C8QB2GUbYaazeIzOM0fTkuZWl4kOyXOMbmZYNEc5R3AHaLVFuSElJI1A2QT3MFFd40f1scxIMbOfFetCbV94CNtwTahBKOERRcCrd8Lg5KdY%2F5WAKewOi7yL9MZwWAtRWXv4fprkJpL11RzCRRl5Rt182h1z8pIXsnmbNcAkd8psOjBCStpSmbXgw4YySIPNdMQ%2BO1AF6rnaXedffMpYKRuElOaPc6U9LXAZPBXYgZnFURn6xqBQUgH2OL2xKh66Vdr8d7gu9eagD98bKGYyk7QTdYqhlYW8cFN8Ezij8kfrGg7XUR%2Bl3QOKfiyNLtvbsJtSI%2FJGpXuReRAFvzK1kkkKfxakajCzy438X%2FMgw93KTtyxbAzzZdEo34r3K8iqVcXbQILicDqGshoFJwRRadvFiq3U8QdYCWEwrjE%2BiASazqI1BPR5YgsEn8oOrawpdvBODNZqGG1g207khbRAIGTKFyhJASfIqYAXY%2FwsppJ4N5fGsbU3OyRzCfQrmnk%2BtsWYlJVQs5xF5AwpltfTC54IoCi3csXmcYoLIOVkqMLGoMPLl0cEGOqUBFvP6rMd9Ji60p%2BMgVxDVd2rUttKQgp7OCJfcqAbfL3o3uj1HbtBkKwyOuHT%2Fmr5zbidBmL1%2FY03K5yz%2F9RLEpegJdn6s%2FEj%2BBPi%2FdhpDXfMzZAn7IP2%2BsyaWgxfpScVaoDwUexuf%2FlVUkYGh6NLg%2FNa1eHBhTZDFVlTiZLHqkp7Vxz%2FkE59AneAfHGckOiEPwquyEtqC%2BMMRgZApAznPsCGy%2FyOD&X-Amz-Signature=ef277e36722414b1f151f8fc5509961c1dfefc3df8be525b4a7ba8836f705d6b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WDHQFWD%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIA1FZ1jze2o1RqfhkiqtJ3heEUps2nDcB%2B41miBI1q2fAiEAixQGpQ%2Fy%2Bry2QI5%2BmZgFsyGXB9r94pPaFfyAHkYRWlsq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDMVmg1C0PWQMU%2BdJdircA1OM6bFZpGBt6J%2BDFoNIfByUMJPot1REjB7pkudnEm%2BnJ7XoXwBfM0TBs%2BqafWAdFGRmIbY9XisxgB5C8QB2GUbYaazeIzOM0fTkuZWl4kOyXOMbmZYNEc5R3AHaLVFuSElJI1A2QT3MFFd40f1scxIMbOfFetCbV94CNtwTahBKOERRcCrd8Lg5KdY%2F5WAKewOi7yL9MZwWAtRWXv4fprkJpL11RzCRRl5Rt182h1z8pIXsnmbNcAkd8psOjBCStpSmbXgw4YySIPNdMQ%2BO1AF6rnaXedffMpYKRuElOaPc6U9LXAZPBXYgZnFURn6xqBQUgH2OL2xKh66Vdr8d7gu9eagD98bKGYyk7QTdYqhlYW8cFN8Ezij8kfrGg7XUR%2Bl3QOKfiyNLtvbsJtSI%2FJGpXuReRAFvzK1kkkKfxakajCzy438X%2FMgw93KTtyxbAzzZdEo34r3K8iqVcXbQILicDqGshoFJwRRadvFiq3U8QdYCWEwrjE%2BiASazqI1BPR5YgsEn8oOrawpdvBODNZqGG1g207khbRAIGTKFyhJASfIqYAXY%2FwsppJ4N5fGsbU3OyRzCfQrmnk%2BtsWYlJVQs5xF5AwpltfTC54IoCi3csXmcYoLIOVkqMLGoMPLl0cEGOqUBFvP6rMd9Ji60p%2BMgVxDVd2rUttKQgp7OCJfcqAbfL3o3uj1HbtBkKwyOuHT%2Fmr5zbidBmL1%2FY03K5yz%2F9RLEpegJdn6s%2FEj%2BBPi%2FdhpDXfMzZAn7IP2%2BsyaWgxfpScVaoDwUexuf%2FlVUkYGh6NLg%2FNa1eHBhTZDFVlTiZLHqkp7Vxz%2FkE59AneAfHGckOiEPwquyEtqC%2BMMRgZApAznPsCGy%2FyOD&X-Amz-Signature=e6eb5a0ad7c0b3e0d0f0799515d6b33fb8eaed6901f3ccb54f443589f5b678c3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WDHQFWD%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIA1FZ1jze2o1RqfhkiqtJ3heEUps2nDcB%2B41miBI1q2fAiEAixQGpQ%2Fy%2Bry2QI5%2BmZgFsyGXB9r94pPaFfyAHkYRWlsq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDMVmg1C0PWQMU%2BdJdircA1OM6bFZpGBt6J%2BDFoNIfByUMJPot1REjB7pkudnEm%2BnJ7XoXwBfM0TBs%2BqafWAdFGRmIbY9XisxgB5C8QB2GUbYaazeIzOM0fTkuZWl4kOyXOMbmZYNEc5R3AHaLVFuSElJI1A2QT3MFFd40f1scxIMbOfFetCbV94CNtwTahBKOERRcCrd8Lg5KdY%2F5WAKewOi7yL9MZwWAtRWXv4fprkJpL11RzCRRl5Rt182h1z8pIXsnmbNcAkd8psOjBCStpSmbXgw4YySIPNdMQ%2BO1AF6rnaXedffMpYKRuElOaPc6U9LXAZPBXYgZnFURn6xqBQUgH2OL2xKh66Vdr8d7gu9eagD98bKGYyk7QTdYqhlYW8cFN8Ezij8kfrGg7XUR%2Bl3QOKfiyNLtvbsJtSI%2FJGpXuReRAFvzK1kkkKfxakajCzy438X%2FMgw93KTtyxbAzzZdEo34r3K8iqVcXbQILicDqGshoFJwRRadvFiq3U8QdYCWEwrjE%2BiASazqI1BPR5YgsEn8oOrawpdvBODNZqGG1g207khbRAIGTKFyhJASfIqYAXY%2FwsppJ4N5fGsbU3OyRzCfQrmnk%2BtsWYlJVQs5xF5AwpltfTC54IoCi3csXmcYoLIOVkqMLGoMPLl0cEGOqUBFvP6rMd9Ji60p%2BMgVxDVd2rUttKQgp7OCJfcqAbfL3o3uj1HbtBkKwyOuHT%2Fmr5zbidBmL1%2FY03K5yz%2F9RLEpegJdn6s%2FEj%2BBPi%2FdhpDXfMzZAn7IP2%2BsyaWgxfpScVaoDwUexuf%2FlVUkYGh6NLg%2FNa1eHBhTZDFVlTiZLHqkp7Vxz%2FkE59AneAfHGckOiEPwquyEtqC%2BMMRgZApAznPsCGy%2FyOD&X-Amz-Signature=501ab327eaa4a5610027e98871442f164fa40b5a453b8def4d76f8d23dddd5d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WDHQFWD%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIA1FZ1jze2o1RqfhkiqtJ3heEUps2nDcB%2B41miBI1q2fAiEAixQGpQ%2Fy%2Bry2QI5%2BmZgFsyGXB9r94pPaFfyAHkYRWlsq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDMVmg1C0PWQMU%2BdJdircA1OM6bFZpGBt6J%2BDFoNIfByUMJPot1REjB7pkudnEm%2BnJ7XoXwBfM0TBs%2BqafWAdFGRmIbY9XisxgB5C8QB2GUbYaazeIzOM0fTkuZWl4kOyXOMbmZYNEc5R3AHaLVFuSElJI1A2QT3MFFd40f1scxIMbOfFetCbV94CNtwTahBKOERRcCrd8Lg5KdY%2F5WAKewOi7yL9MZwWAtRWXv4fprkJpL11RzCRRl5Rt182h1z8pIXsnmbNcAkd8psOjBCStpSmbXgw4YySIPNdMQ%2BO1AF6rnaXedffMpYKRuElOaPc6U9LXAZPBXYgZnFURn6xqBQUgH2OL2xKh66Vdr8d7gu9eagD98bKGYyk7QTdYqhlYW8cFN8Ezij8kfrGg7XUR%2Bl3QOKfiyNLtvbsJtSI%2FJGpXuReRAFvzK1kkkKfxakajCzy438X%2FMgw93KTtyxbAzzZdEo34r3K8iqVcXbQILicDqGshoFJwRRadvFiq3U8QdYCWEwrjE%2BiASazqI1BPR5YgsEn8oOrawpdvBODNZqGG1g207khbRAIGTKFyhJASfIqYAXY%2FwsppJ4N5fGsbU3OyRzCfQrmnk%2BtsWYlJVQs5xF5AwpltfTC54IoCi3csXmcYoLIOVkqMLGoMPLl0cEGOqUBFvP6rMd9Ji60p%2BMgVxDVd2rUttKQgp7OCJfcqAbfL3o3uj1HbtBkKwyOuHT%2Fmr5zbidBmL1%2FY03K5yz%2F9RLEpegJdn6s%2FEj%2BBPi%2FdhpDXfMzZAn7IP2%2BsyaWgxfpScVaoDwUexuf%2FlVUkYGh6NLg%2FNa1eHBhTZDFVlTiZLHqkp7Vxz%2FkE59AneAfHGckOiEPwquyEtqC%2BMMRgZApAznPsCGy%2FyOD&X-Amz-Signature=fdaf29ae8029f748832131e2ca3fa295ca9acfc2be4587854edd5e014ed2b82f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WDHQFWD%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T140915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIA1FZ1jze2o1RqfhkiqtJ3heEUps2nDcB%2B41miBI1q2fAiEAixQGpQ%2Fy%2Bry2QI5%2BmZgFsyGXB9r94pPaFfyAHkYRWlsq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDMVmg1C0PWQMU%2BdJdircA1OM6bFZpGBt6J%2BDFoNIfByUMJPot1REjB7pkudnEm%2BnJ7XoXwBfM0TBs%2BqafWAdFGRmIbY9XisxgB5C8QB2GUbYaazeIzOM0fTkuZWl4kOyXOMbmZYNEc5R3AHaLVFuSElJI1A2QT3MFFd40f1scxIMbOfFetCbV94CNtwTahBKOERRcCrd8Lg5KdY%2F5WAKewOi7yL9MZwWAtRWXv4fprkJpL11RzCRRl5Rt182h1z8pIXsnmbNcAkd8psOjBCStpSmbXgw4YySIPNdMQ%2BO1AF6rnaXedffMpYKRuElOaPc6U9LXAZPBXYgZnFURn6xqBQUgH2OL2xKh66Vdr8d7gu9eagD98bKGYyk7QTdYqhlYW8cFN8Ezij8kfrGg7XUR%2Bl3QOKfiyNLtvbsJtSI%2FJGpXuReRAFvzK1kkkKfxakajCzy438X%2FMgw93KTtyxbAzzZdEo34r3K8iqVcXbQILicDqGshoFJwRRadvFiq3U8QdYCWEwrjE%2BiASazqI1BPR5YgsEn8oOrawpdvBODNZqGG1g207khbRAIGTKFyhJASfIqYAXY%2FwsppJ4N5fGsbU3OyRzCfQrmnk%2BtsWYlJVQs5xF5AwpltfTC54IoCi3csXmcYoLIOVkqMLGoMPLl0cEGOqUBFvP6rMd9Ji60p%2BMgVxDVd2rUttKQgp7OCJfcqAbfL3o3uj1HbtBkKwyOuHT%2Fmr5zbidBmL1%2FY03K5yz%2F9RLEpegJdn6s%2FEj%2BBPi%2FdhpDXfMzZAn7IP2%2BsyaWgxfpScVaoDwUexuf%2FlVUkYGh6NLg%2FNa1eHBhTZDFVlTiZLHqkp7Vxz%2FkE59AneAfHGckOiEPwquyEtqC%2BMMRgZApAznPsCGy%2FyOD&X-Amz-Signature=7946686537cfb41a8e75aeb045a180bbeb17ddafa87f2a8efabb3a59f9310666&X-Amz-SignedHeaders=host&x-id=GetObject)
