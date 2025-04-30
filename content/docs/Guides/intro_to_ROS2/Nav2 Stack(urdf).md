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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AAWM4EW%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCs6qgRICUZv57mJw5Lg0V59ArJ2inxBVjtK0mfB%2F%2F41AIhAJUcEadbIeLlhH2cn%2B7mgb2DH7aRE43GHBDRf9SdWQacKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWHAyMdK67D4DK%2Bakq3APq5ifxupLrJRvLKykEGeqTohUe8qZMBlaOd2amN%2FI2robT2bUGxeK3Gz3pjVVy7xqwWeFBV%2BI5x4kAJcAYRpz1Ye1IPM6gqYMKXJ4Yjv5FTiurnPakA0RoGFx1hwuxMzVuiaJl%2Fhyztp9mmo4LxefgmfHwwp4dBqppYK2YiHn%2FITXOadNrW24Cxknsjk3BKuK%2BfCaDg4btd%2FcVybEO%2FyadiYLsO2e6wdnNccR0EDdYvoIqhUKJqtHeJflZYGHRswfIAGjqosWip8MXLsFd%2FNHOQsal4EzY%2Frr%2BwvqKGXTlY%2FyKxAxVL8Zc7fYI745%2BVBuk1Ypqaa6n64Z7MI3BwQJsbbcHTGXiXb2iEHeqXtUIet%2BNzNervD9IW8RWeWZwc6vn0LOSTuOFumMhw1hNkgU8qkJ7k6cYl6jl0C2DfyCxzwAQwosrSK%2B4NSRwiFyXN6iKMpOTS4N%2FtKS0JNl6ViaBJvoV4o4u3OwokgoeXE75sGjl3tbJZETsoFBxXY7559mlcscWWemPNrK%2F2QhHD5ISSevxex4w7q3Obl8Zt5uLdhE2texJ4j53cdQ5c9CllZKw4OdhoIH1rWCNLLDx4YJnbgjOhTTPcYXBojA0miCSBZh1%2FSlaa%2FdFKoWRvDCuncnABjqkAXyPU6yrxSFtspkU81PD2JX4D6ZhSbbR7CJq%2Bvf9v92%2Bkp%2Fv9X%2BidwxbVxcWBk4u02GDZSrXuuujML5eALgEpDeJN4GemcPuKYcyTTQ3HY2s2%2F0GPT7XqYJUNPAVkRFEzZ7ISyz5wdN6sYDLmAKTOm6E60atp43zi4xGcDBL3VsIfB5yTMRab5H%2BptONEO5WqFW0gPrQL3nLWz%2BQZSs%2FvWqorUZB&X-Amz-Signature=3ade03cc5b03035737fe7b95f974d558547e37905ea59e29b86ff96035cb12d3&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AAWM4EW%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCs6qgRICUZv57mJw5Lg0V59ArJ2inxBVjtK0mfB%2F%2F41AIhAJUcEadbIeLlhH2cn%2B7mgb2DH7aRE43GHBDRf9SdWQacKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWHAyMdK67D4DK%2Bakq3APq5ifxupLrJRvLKykEGeqTohUe8qZMBlaOd2amN%2FI2robT2bUGxeK3Gz3pjVVy7xqwWeFBV%2BI5x4kAJcAYRpz1Ye1IPM6gqYMKXJ4Yjv5FTiurnPakA0RoGFx1hwuxMzVuiaJl%2Fhyztp9mmo4LxefgmfHwwp4dBqppYK2YiHn%2FITXOadNrW24Cxknsjk3BKuK%2BfCaDg4btd%2FcVybEO%2FyadiYLsO2e6wdnNccR0EDdYvoIqhUKJqtHeJflZYGHRswfIAGjqosWip8MXLsFd%2FNHOQsal4EzY%2Frr%2BwvqKGXTlY%2FyKxAxVL8Zc7fYI745%2BVBuk1Ypqaa6n64Z7MI3BwQJsbbcHTGXiXb2iEHeqXtUIet%2BNzNervD9IW8RWeWZwc6vn0LOSTuOFumMhw1hNkgU8qkJ7k6cYl6jl0C2DfyCxzwAQwosrSK%2B4NSRwiFyXN6iKMpOTS4N%2FtKS0JNl6ViaBJvoV4o4u3OwokgoeXE75sGjl3tbJZETsoFBxXY7559mlcscWWemPNrK%2F2QhHD5ISSevxex4w7q3Obl8Zt5uLdhE2texJ4j53cdQ5c9CllZKw4OdhoIH1rWCNLLDx4YJnbgjOhTTPcYXBojA0miCSBZh1%2FSlaa%2FdFKoWRvDCuncnABjqkAXyPU6yrxSFtspkU81PD2JX4D6ZhSbbR7CJq%2Bvf9v92%2Bkp%2Fv9X%2BidwxbVxcWBk4u02GDZSrXuuujML5eALgEpDeJN4GemcPuKYcyTTQ3HY2s2%2F0GPT7XqYJUNPAVkRFEzZ7ISyz5wdN6sYDLmAKTOm6E60atp43zi4xGcDBL3VsIfB5yTMRab5H%2BptONEO5WqFW0gPrQL3nLWz%2BQZSs%2FvWqorUZB&X-Amz-Signature=0ca0c92137afc7f330cda3ee057419b2f44679a79b3392053dfee98d7eb03999&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AAWM4EW%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCs6qgRICUZv57mJw5Lg0V59ArJ2inxBVjtK0mfB%2F%2F41AIhAJUcEadbIeLlhH2cn%2B7mgb2DH7aRE43GHBDRf9SdWQacKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWHAyMdK67D4DK%2Bakq3APq5ifxupLrJRvLKykEGeqTohUe8qZMBlaOd2amN%2FI2robT2bUGxeK3Gz3pjVVy7xqwWeFBV%2BI5x4kAJcAYRpz1Ye1IPM6gqYMKXJ4Yjv5FTiurnPakA0RoGFx1hwuxMzVuiaJl%2Fhyztp9mmo4LxefgmfHwwp4dBqppYK2YiHn%2FITXOadNrW24Cxknsjk3BKuK%2BfCaDg4btd%2FcVybEO%2FyadiYLsO2e6wdnNccR0EDdYvoIqhUKJqtHeJflZYGHRswfIAGjqosWip8MXLsFd%2FNHOQsal4EzY%2Frr%2BwvqKGXTlY%2FyKxAxVL8Zc7fYI745%2BVBuk1Ypqaa6n64Z7MI3BwQJsbbcHTGXiXb2iEHeqXtUIet%2BNzNervD9IW8RWeWZwc6vn0LOSTuOFumMhw1hNkgU8qkJ7k6cYl6jl0C2DfyCxzwAQwosrSK%2B4NSRwiFyXN6iKMpOTS4N%2FtKS0JNl6ViaBJvoV4o4u3OwokgoeXE75sGjl3tbJZETsoFBxXY7559mlcscWWemPNrK%2F2QhHD5ISSevxex4w7q3Obl8Zt5uLdhE2texJ4j53cdQ5c9CllZKw4OdhoIH1rWCNLLDx4YJnbgjOhTTPcYXBojA0miCSBZh1%2FSlaa%2FdFKoWRvDCuncnABjqkAXyPU6yrxSFtspkU81PD2JX4D6ZhSbbR7CJq%2Bvf9v92%2Bkp%2Fv9X%2BidwxbVxcWBk4u02GDZSrXuuujML5eALgEpDeJN4GemcPuKYcyTTQ3HY2s2%2F0GPT7XqYJUNPAVkRFEzZ7ISyz5wdN6sYDLmAKTOm6E60atp43zi4xGcDBL3VsIfB5yTMRab5H%2BptONEO5WqFW0gPrQL3nLWz%2BQZSs%2FvWqorUZB&X-Amz-Signature=f07371cc0a4a12c338bc63324d36f4b49979077c2c7a5aa87c8cc0340727f829&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AAWM4EW%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCs6qgRICUZv57mJw5Lg0V59ArJ2inxBVjtK0mfB%2F%2F41AIhAJUcEadbIeLlhH2cn%2B7mgb2DH7aRE43GHBDRf9SdWQacKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWHAyMdK67D4DK%2Bakq3APq5ifxupLrJRvLKykEGeqTohUe8qZMBlaOd2amN%2FI2robT2bUGxeK3Gz3pjVVy7xqwWeFBV%2BI5x4kAJcAYRpz1Ye1IPM6gqYMKXJ4Yjv5FTiurnPakA0RoGFx1hwuxMzVuiaJl%2Fhyztp9mmo4LxefgmfHwwp4dBqppYK2YiHn%2FITXOadNrW24Cxknsjk3BKuK%2BfCaDg4btd%2FcVybEO%2FyadiYLsO2e6wdnNccR0EDdYvoIqhUKJqtHeJflZYGHRswfIAGjqosWip8MXLsFd%2FNHOQsal4EzY%2Frr%2BwvqKGXTlY%2FyKxAxVL8Zc7fYI745%2BVBuk1Ypqaa6n64Z7MI3BwQJsbbcHTGXiXb2iEHeqXtUIet%2BNzNervD9IW8RWeWZwc6vn0LOSTuOFumMhw1hNkgU8qkJ7k6cYl6jl0C2DfyCxzwAQwosrSK%2B4NSRwiFyXN6iKMpOTS4N%2FtKS0JNl6ViaBJvoV4o4u3OwokgoeXE75sGjl3tbJZETsoFBxXY7559mlcscWWemPNrK%2F2QhHD5ISSevxex4w7q3Obl8Zt5uLdhE2texJ4j53cdQ5c9CllZKw4OdhoIH1rWCNLLDx4YJnbgjOhTTPcYXBojA0miCSBZh1%2FSlaa%2FdFKoWRvDCuncnABjqkAXyPU6yrxSFtspkU81PD2JX4D6ZhSbbR7CJq%2Bvf9v92%2Bkp%2Fv9X%2BidwxbVxcWBk4u02GDZSrXuuujML5eALgEpDeJN4GemcPuKYcyTTQ3HY2s2%2F0GPT7XqYJUNPAVkRFEzZ7ISyz5wdN6sYDLmAKTOm6E60atp43zi4xGcDBL3VsIfB5yTMRab5H%2BptONEO5WqFW0gPrQL3nLWz%2BQZSs%2FvWqorUZB&X-Amz-Signature=61f5d27382074118442583f26d8efac8fbf4f9b5c5d5a74aef68887008bf2549&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AAWM4EW%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCs6qgRICUZv57mJw5Lg0V59ArJ2inxBVjtK0mfB%2F%2F41AIhAJUcEadbIeLlhH2cn%2B7mgb2DH7aRE43GHBDRf9SdWQacKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWHAyMdK67D4DK%2Bakq3APq5ifxupLrJRvLKykEGeqTohUe8qZMBlaOd2amN%2FI2robT2bUGxeK3Gz3pjVVy7xqwWeFBV%2BI5x4kAJcAYRpz1Ye1IPM6gqYMKXJ4Yjv5FTiurnPakA0RoGFx1hwuxMzVuiaJl%2Fhyztp9mmo4LxefgmfHwwp4dBqppYK2YiHn%2FITXOadNrW24Cxknsjk3BKuK%2BfCaDg4btd%2FcVybEO%2FyadiYLsO2e6wdnNccR0EDdYvoIqhUKJqtHeJflZYGHRswfIAGjqosWip8MXLsFd%2FNHOQsal4EzY%2Frr%2BwvqKGXTlY%2FyKxAxVL8Zc7fYI745%2BVBuk1Ypqaa6n64Z7MI3BwQJsbbcHTGXiXb2iEHeqXtUIet%2BNzNervD9IW8RWeWZwc6vn0LOSTuOFumMhw1hNkgU8qkJ7k6cYl6jl0C2DfyCxzwAQwosrSK%2B4NSRwiFyXN6iKMpOTS4N%2FtKS0JNl6ViaBJvoV4o4u3OwokgoeXE75sGjl3tbJZETsoFBxXY7559mlcscWWemPNrK%2F2QhHD5ISSevxex4w7q3Obl8Zt5uLdhE2texJ4j53cdQ5c9CllZKw4OdhoIH1rWCNLLDx4YJnbgjOhTTPcYXBojA0miCSBZh1%2FSlaa%2FdFKoWRvDCuncnABjqkAXyPU6yrxSFtspkU81PD2JX4D6ZhSbbR7CJq%2Bvf9v92%2Bkp%2Fv9X%2BidwxbVxcWBk4u02GDZSrXuuujML5eALgEpDeJN4GemcPuKYcyTTQ3HY2s2%2F0GPT7XqYJUNPAVkRFEzZ7ISyz5wdN6sYDLmAKTOm6E60atp43zi4xGcDBL3VsIfB5yTMRab5H%2BptONEO5WqFW0gPrQL3nLWz%2BQZSs%2FvWqorUZB&X-Amz-Signature=9147e83fcdec3582e7cc29fa06a0331172560c40898ecb16331e507903d1342c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AAWM4EW%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T170744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCs6qgRICUZv57mJw5Lg0V59ArJ2inxBVjtK0mfB%2F%2F41AIhAJUcEadbIeLlhH2cn%2B7mgb2DH7aRE43GHBDRf9SdWQacKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWHAyMdK67D4DK%2Bakq3APq5ifxupLrJRvLKykEGeqTohUe8qZMBlaOd2amN%2FI2robT2bUGxeK3Gz3pjVVy7xqwWeFBV%2BI5x4kAJcAYRpz1Ye1IPM6gqYMKXJ4Yjv5FTiurnPakA0RoGFx1hwuxMzVuiaJl%2Fhyztp9mmo4LxefgmfHwwp4dBqppYK2YiHn%2FITXOadNrW24Cxknsjk3BKuK%2BfCaDg4btd%2FcVybEO%2FyadiYLsO2e6wdnNccR0EDdYvoIqhUKJqtHeJflZYGHRswfIAGjqosWip8MXLsFd%2FNHOQsal4EzY%2Frr%2BwvqKGXTlY%2FyKxAxVL8Zc7fYI745%2BVBuk1Ypqaa6n64Z7MI3BwQJsbbcHTGXiXb2iEHeqXtUIet%2BNzNervD9IW8RWeWZwc6vn0LOSTuOFumMhw1hNkgU8qkJ7k6cYl6jl0C2DfyCxzwAQwosrSK%2B4NSRwiFyXN6iKMpOTS4N%2FtKS0JNl6ViaBJvoV4o4u3OwokgoeXE75sGjl3tbJZETsoFBxXY7559mlcscWWemPNrK%2F2QhHD5ISSevxex4w7q3Obl8Zt5uLdhE2texJ4j53cdQ5c9CllZKw4OdhoIH1rWCNLLDx4YJnbgjOhTTPcYXBojA0miCSBZh1%2FSlaa%2FdFKoWRvDCuncnABjqkAXyPU6yrxSFtspkU81PD2JX4D6ZhSbbR7CJq%2Bvf9v92%2Bkp%2Fv9X%2BidwxbVxcWBk4u02GDZSrXuuujML5eALgEpDeJN4GemcPuKYcyTTQ3HY2s2%2F0GPT7XqYJUNPAVkRFEzZ7ISyz5wdN6sYDLmAKTOm6E60atp43zi4xGcDBL3VsIfB5yTMRab5H%2BptONEO5WqFW0gPrQL3nLWz%2BQZSs%2FvWqorUZB&X-Amz-Signature=65e3012a787ff913d5a2b324a428857d6a84887d07982f63ac1f950916c6006e&X-Amz-SignedHeaders=host&x-id=GetObject)
