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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F3UFBX3%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T160733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQC0wGwqH0OTdC8mlGAcnD%2FocMAxpLZpjodurNTloMOJiAIhAMqkcKLJej8c2IfBVwjEhg2GzaxOBKROyyeRKDed5JukKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSyqNRZvcf6NfZl9Iq3AMFWFLwQO%2FguXqrtXI8vmSWe3GzU1zm9AFsxn5CMr1qJWurs591mZZLrOPAp89oYUk7a9a9I94HxOHciN4uW2BLkb%2BoEa93dMbYAEi8KFUGtXVPXNUF2GImprsgoVDgxbIHtKZi0ICnyqC7FHPTHHF2BYR9fwjKuZpgoO1v%2FESCb9lIMUalXyVKJb0Y6B6u%2F66%2BeESSzFYr1Q7GCy8Zj7cooqHvhwdGccPYSy5q26zSgYyei%2FWrALSUD8UApd5N4iXyitH4D44Z2Y%2B9pXLvLTml%2BMDKCs1GMcduc7etv0csSJfjRDwMFDgd7MvJkHpUUQPuC5fQmrkVtyQTyRNEg0DDaNShwHeJoZXIUvZNHLz3J%2BzWY7wG5XGq4crasqsKJ60T3%2BTkn7Y5xn8hXJkZBjj00G57w8ODzVDuN0ILF%2BDku%2BmwUOLTdsCMhGP5TQek2VLpg5UW6CHEktTAUnFmHSYH1TdkufwZjZaEj0ZLMC4aQ%2BhAAFAeBpVwfDmV9L5m9mzO542gLIOVxEZ%2B143jgk37HoWAxr%2FG4gVRZkT%2BpyWnTMynV3Iph2eXBXodG%2FMrQZuwD8wqi9mXW9TL%2Fcl8M3RSvz3prKUflHBghy2k5h6ybJ%2BDA9yUVr6n5LvfsjCXhp29BjqkAZetJoS%2B8i2r83KcG%2BlHu2eZ3iTSqkwErfdLfolGkrXcsoI%2Ftv%2FAwPkAD2vIkjYGBvmN7RjO0WyzKrUS20WnUeJ6%2FXT%2FWz2gYAqeVGXy%2Fq%2BL5cb6SnOQsnm2ZTRNnNzvXxambFQ7l1O%2BOKT0OMcSPvNEIgRwyjZxf%2Bkxzz8S0T8SeQ60AOPtijmvM2m%2FF8MEimxcDLwMSQ0H5ItzDSAxwKGkqJKO&X-Amz-Signature=e88a6946330dea0b9bc0d5c182e680db50bbc76d41cf9134157983a53f72f484&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F3UFBX3%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T160733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQC0wGwqH0OTdC8mlGAcnD%2FocMAxpLZpjodurNTloMOJiAIhAMqkcKLJej8c2IfBVwjEhg2GzaxOBKROyyeRKDed5JukKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSyqNRZvcf6NfZl9Iq3AMFWFLwQO%2FguXqrtXI8vmSWe3GzU1zm9AFsxn5CMr1qJWurs591mZZLrOPAp89oYUk7a9a9I94HxOHciN4uW2BLkb%2BoEa93dMbYAEi8KFUGtXVPXNUF2GImprsgoVDgxbIHtKZi0ICnyqC7FHPTHHF2BYR9fwjKuZpgoO1v%2FESCb9lIMUalXyVKJb0Y6B6u%2F66%2BeESSzFYr1Q7GCy8Zj7cooqHvhwdGccPYSy5q26zSgYyei%2FWrALSUD8UApd5N4iXyitH4D44Z2Y%2B9pXLvLTml%2BMDKCs1GMcduc7etv0csSJfjRDwMFDgd7MvJkHpUUQPuC5fQmrkVtyQTyRNEg0DDaNShwHeJoZXIUvZNHLz3J%2BzWY7wG5XGq4crasqsKJ60T3%2BTkn7Y5xn8hXJkZBjj00G57w8ODzVDuN0ILF%2BDku%2BmwUOLTdsCMhGP5TQek2VLpg5UW6CHEktTAUnFmHSYH1TdkufwZjZaEj0ZLMC4aQ%2BhAAFAeBpVwfDmV9L5m9mzO542gLIOVxEZ%2B143jgk37HoWAxr%2FG4gVRZkT%2BpyWnTMynV3Iph2eXBXodG%2FMrQZuwD8wqi9mXW9TL%2Fcl8M3RSvz3prKUflHBghy2k5h6ybJ%2BDA9yUVr6n5LvfsjCXhp29BjqkAZetJoS%2B8i2r83KcG%2BlHu2eZ3iTSqkwErfdLfolGkrXcsoI%2Ftv%2FAwPkAD2vIkjYGBvmN7RjO0WyzKrUS20WnUeJ6%2FXT%2FWz2gYAqeVGXy%2Fq%2BL5cb6SnOQsnm2ZTRNnNzvXxambFQ7l1O%2BOKT0OMcSPvNEIgRwyjZxf%2Bkxzz8S0T8SeQ60AOPtijmvM2m%2FF8MEimxcDLwMSQ0H5ItzDSAxwKGkqJKO&X-Amz-Signature=9194976e8414c820a289a47cc30830f51498ee1b020c988a8fdac83d8655574d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F3UFBX3%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T160733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQC0wGwqH0OTdC8mlGAcnD%2FocMAxpLZpjodurNTloMOJiAIhAMqkcKLJej8c2IfBVwjEhg2GzaxOBKROyyeRKDed5JukKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSyqNRZvcf6NfZl9Iq3AMFWFLwQO%2FguXqrtXI8vmSWe3GzU1zm9AFsxn5CMr1qJWurs591mZZLrOPAp89oYUk7a9a9I94HxOHciN4uW2BLkb%2BoEa93dMbYAEi8KFUGtXVPXNUF2GImprsgoVDgxbIHtKZi0ICnyqC7FHPTHHF2BYR9fwjKuZpgoO1v%2FESCb9lIMUalXyVKJb0Y6B6u%2F66%2BeESSzFYr1Q7GCy8Zj7cooqHvhwdGccPYSy5q26zSgYyei%2FWrALSUD8UApd5N4iXyitH4D44Z2Y%2B9pXLvLTml%2BMDKCs1GMcduc7etv0csSJfjRDwMFDgd7MvJkHpUUQPuC5fQmrkVtyQTyRNEg0DDaNShwHeJoZXIUvZNHLz3J%2BzWY7wG5XGq4crasqsKJ60T3%2BTkn7Y5xn8hXJkZBjj00G57w8ODzVDuN0ILF%2BDku%2BmwUOLTdsCMhGP5TQek2VLpg5UW6CHEktTAUnFmHSYH1TdkufwZjZaEj0ZLMC4aQ%2BhAAFAeBpVwfDmV9L5m9mzO542gLIOVxEZ%2B143jgk37HoWAxr%2FG4gVRZkT%2BpyWnTMynV3Iph2eXBXodG%2FMrQZuwD8wqi9mXW9TL%2Fcl8M3RSvz3prKUflHBghy2k5h6ybJ%2BDA9yUVr6n5LvfsjCXhp29BjqkAZetJoS%2B8i2r83KcG%2BlHu2eZ3iTSqkwErfdLfolGkrXcsoI%2Ftv%2FAwPkAD2vIkjYGBvmN7RjO0WyzKrUS20WnUeJ6%2FXT%2FWz2gYAqeVGXy%2Fq%2BL5cb6SnOQsnm2ZTRNnNzvXxambFQ7l1O%2BOKT0OMcSPvNEIgRwyjZxf%2Bkxzz8S0T8SeQ60AOPtijmvM2m%2FF8MEimxcDLwMSQ0H5ItzDSAxwKGkqJKO&X-Amz-Signature=21cb47bf295596e75d1d1aafa370e86d27ad9b07ce61762bfa20375949ec8d26&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F3UFBX3%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T160733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQC0wGwqH0OTdC8mlGAcnD%2FocMAxpLZpjodurNTloMOJiAIhAMqkcKLJej8c2IfBVwjEhg2GzaxOBKROyyeRKDed5JukKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSyqNRZvcf6NfZl9Iq3AMFWFLwQO%2FguXqrtXI8vmSWe3GzU1zm9AFsxn5CMr1qJWurs591mZZLrOPAp89oYUk7a9a9I94HxOHciN4uW2BLkb%2BoEa93dMbYAEi8KFUGtXVPXNUF2GImprsgoVDgxbIHtKZi0ICnyqC7FHPTHHF2BYR9fwjKuZpgoO1v%2FESCb9lIMUalXyVKJb0Y6B6u%2F66%2BeESSzFYr1Q7GCy8Zj7cooqHvhwdGccPYSy5q26zSgYyei%2FWrALSUD8UApd5N4iXyitH4D44Z2Y%2B9pXLvLTml%2BMDKCs1GMcduc7etv0csSJfjRDwMFDgd7MvJkHpUUQPuC5fQmrkVtyQTyRNEg0DDaNShwHeJoZXIUvZNHLz3J%2BzWY7wG5XGq4crasqsKJ60T3%2BTkn7Y5xn8hXJkZBjj00G57w8ODzVDuN0ILF%2BDku%2BmwUOLTdsCMhGP5TQek2VLpg5UW6CHEktTAUnFmHSYH1TdkufwZjZaEj0ZLMC4aQ%2BhAAFAeBpVwfDmV9L5m9mzO542gLIOVxEZ%2B143jgk37HoWAxr%2FG4gVRZkT%2BpyWnTMynV3Iph2eXBXodG%2FMrQZuwD8wqi9mXW9TL%2Fcl8M3RSvz3prKUflHBghy2k5h6ybJ%2BDA9yUVr6n5LvfsjCXhp29BjqkAZetJoS%2B8i2r83KcG%2BlHu2eZ3iTSqkwErfdLfolGkrXcsoI%2Ftv%2FAwPkAD2vIkjYGBvmN7RjO0WyzKrUS20WnUeJ6%2FXT%2FWz2gYAqeVGXy%2Fq%2BL5cb6SnOQsnm2ZTRNnNzvXxambFQ7l1O%2BOKT0OMcSPvNEIgRwyjZxf%2Bkxzz8S0T8SeQ60AOPtijmvM2m%2FF8MEimxcDLwMSQ0H5ItzDSAxwKGkqJKO&X-Amz-Signature=a25364e5f34dd01846c53fb57f3e349e95c4347e89c11c1198af02357f2070d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F3UFBX3%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T160733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQC0wGwqH0OTdC8mlGAcnD%2FocMAxpLZpjodurNTloMOJiAIhAMqkcKLJej8c2IfBVwjEhg2GzaxOBKROyyeRKDed5JukKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSyqNRZvcf6NfZl9Iq3AMFWFLwQO%2FguXqrtXI8vmSWe3GzU1zm9AFsxn5CMr1qJWurs591mZZLrOPAp89oYUk7a9a9I94HxOHciN4uW2BLkb%2BoEa93dMbYAEi8KFUGtXVPXNUF2GImprsgoVDgxbIHtKZi0ICnyqC7FHPTHHF2BYR9fwjKuZpgoO1v%2FESCb9lIMUalXyVKJb0Y6B6u%2F66%2BeESSzFYr1Q7GCy8Zj7cooqHvhwdGccPYSy5q26zSgYyei%2FWrALSUD8UApd5N4iXyitH4D44Z2Y%2B9pXLvLTml%2BMDKCs1GMcduc7etv0csSJfjRDwMFDgd7MvJkHpUUQPuC5fQmrkVtyQTyRNEg0DDaNShwHeJoZXIUvZNHLz3J%2BzWY7wG5XGq4crasqsKJ60T3%2BTkn7Y5xn8hXJkZBjj00G57w8ODzVDuN0ILF%2BDku%2BmwUOLTdsCMhGP5TQek2VLpg5UW6CHEktTAUnFmHSYH1TdkufwZjZaEj0ZLMC4aQ%2BhAAFAeBpVwfDmV9L5m9mzO542gLIOVxEZ%2B143jgk37HoWAxr%2FG4gVRZkT%2BpyWnTMynV3Iph2eXBXodG%2FMrQZuwD8wqi9mXW9TL%2Fcl8M3RSvz3prKUflHBghy2k5h6ybJ%2BDA9yUVr6n5LvfsjCXhp29BjqkAZetJoS%2B8i2r83KcG%2BlHu2eZ3iTSqkwErfdLfolGkrXcsoI%2Ftv%2FAwPkAD2vIkjYGBvmN7RjO0WyzKrUS20WnUeJ6%2FXT%2FWz2gYAqeVGXy%2Fq%2BL5cb6SnOQsnm2ZTRNnNzvXxambFQ7l1O%2BOKT0OMcSPvNEIgRwyjZxf%2Bkxzz8S0T8SeQ60AOPtijmvM2m%2FF8MEimxcDLwMSQ0H5ItzDSAxwKGkqJKO&X-Amz-Signature=949923e75953126ae9ceffb754dd0c091572d78bfcac264ed8c8d193b5c26c11&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665F3UFBX3%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T160733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQC0wGwqH0OTdC8mlGAcnD%2FocMAxpLZpjodurNTloMOJiAIhAMqkcKLJej8c2IfBVwjEhg2GzaxOBKROyyeRKDed5JukKogECI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSyqNRZvcf6NfZl9Iq3AMFWFLwQO%2FguXqrtXI8vmSWe3GzU1zm9AFsxn5CMr1qJWurs591mZZLrOPAp89oYUk7a9a9I94HxOHciN4uW2BLkb%2BoEa93dMbYAEi8KFUGtXVPXNUF2GImprsgoVDgxbIHtKZi0ICnyqC7FHPTHHF2BYR9fwjKuZpgoO1v%2FESCb9lIMUalXyVKJb0Y6B6u%2F66%2BeESSzFYr1Q7GCy8Zj7cooqHvhwdGccPYSy5q26zSgYyei%2FWrALSUD8UApd5N4iXyitH4D44Z2Y%2B9pXLvLTml%2BMDKCs1GMcduc7etv0csSJfjRDwMFDgd7MvJkHpUUQPuC5fQmrkVtyQTyRNEg0DDaNShwHeJoZXIUvZNHLz3J%2BzWY7wG5XGq4crasqsKJ60T3%2BTkn7Y5xn8hXJkZBjj00G57w8ODzVDuN0ILF%2BDku%2BmwUOLTdsCMhGP5TQek2VLpg5UW6CHEktTAUnFmHSYH1TdkufwZjZaEj0ZLMC4aQ%2BhAAFAeBpVwfDmV9L5m9mzO542gLIOVxEZ%2B143jgk37HoWAxr%2FG4gVRZkT%2BpyWnTMynV3Iph2eXBXodG%2FMrQZuwD8wqi9mXW9TL%2Fcl8M3RSvz3prKUflHBghy2k5h6ybJ%2BDA9yUVr6n5LvfsjCXhp29BjqkAZetJoS%2B8i2r83KcG%2BlHu2eZ3iTSqkwErfdLfolGkrXcsoI%2Ftv%2FAwPkAD2vIkjYGBvmN7RjO0WyzKrUS20WnUeJ6%2FXT%2FWz2gYAqeVGXy%2Fq%2BL5cb6SnOQsnm2ZTRNnNzvXxambFQ7l1O%2BOKT0OMcSPvNEIgRwyjZxf%2Bkxzz8S0T8SeQ60AOPtijmvM2m%2FF8MEimxcDLwMSQ0H5ItzDSAxwKGkqJKO&X-Amz-Signature=98f9229ccc0d3f7070bb8c6c1be070dc53ebd334ad95f218270d6eb0650dba0a&X-Amz-SignedHeaders=host&x-id=GetObject)
