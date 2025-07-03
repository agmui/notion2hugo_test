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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YACFPAMI%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T081300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIG0b1bBTHy4sqpe1Zc1VhkCwRiS4KFzsmZRbmooLv7BjAiASzukDUlHjpEPQkmLcMmZPSiNZG320YWVQYPgQ19omhCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMK6UEKzqT0SrnViVlKtwDbQ0Uv5WTiwMqYunjNzqif5CjXmX3mPlWhfkLj2%2BQe2%2Bm5S%2FhiYx9YePUC%2FiOS1EjBw3aLi4R6NpjEPZKuqO1kENIz514bNWzRRDg78K15Bcb035f1iq%2BDgNMmeoztnIzwbj5kEK0LD4Ai0eh0rlUQz%2Flt%2FHDM9h9NsNJ2%2F3IgJSAY9DZNchdz0TrEanBDpFckx7hadCKVHZqbqal%2FfpokjQwPFPMX%2FqpHKBDm22Xr5wXGBb43TIXGPoEPBODeFqEbTNXl2eN5iJZbtn2ie%2FtElUPwhEy7wAcsxy5Lz%2Bnpyeg8AQYV%2BN8B8T4yrnlxxHndwF3x6vVtl7cpkJcQlIhFeqqEyBIpWrSPdR0nxySUgHma4zGUq%2BO11eqT4W2GtVOjh4EDqiMZGGcDxLP0TOSdMne7wB5qlXsb8CoMd0VIZNaQWs7KnlSbi6CjZ6YHk6AQ%2Bv4b1eNAloVouM%2BtL1czWJn%2FwPrqudZGOKkLe81q3r%2BvAKvZrCBBV8shIJfFzIaBbigKlBdhVaIWXmw3eNAoWL9zlKWj5fxwrblqWfM86KUzpV%2FPtD%2BYwXutFWGaetoqFnA6RrMGY2PTIolJjaj4AWGYEadznPjjpbMP2u8UsQb2sUQKeoYwE7xT7Aw896YwwY6pgEyI%2BYpG2n5pQ7llGJ0c1%2F7QHGCQ%2FPetvkLNMW8wAz0hUFw3sTkS2eGI9mRftYY%2B5F8SjBn%2F8I3li9LTqo5oCotNIH5dS05SiLME50iY4kWokUGQL0NSyEYhOe2qaLFk3HEduYqVRDglr7IJthipMGjmhuScR%2BVV6rN2E20HgVFnf%2Fk8zMs7WkuB%2BZYRUuhaRck45X29i870AViCYbtllZo3gVMPxWe&X-Amz-Signature=c050ca6d64454d5431451e96722532234bfc0365ccb3cbd4d8dae29aef7d9788&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YACFPAMI%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T081300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIG0b1bBTHy4sqpe1Zc1VhkCwRiS4KFzsmZRbmooLv7BjAiASzukDUlHjpEPQkmLcMmZPSiNZG320YWVQYPgQ19omhCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMK6UEKzqT0SrnViVlKtwDbQ0Uv5WTiwMqYunjNzqif5CjXmX3mPlWhfkLj2%2BQe2%2Bm5S%2FhiYx9YePUC%2FiOS1EjBw3aLi4R6NpjEPZKuqO1kENIz514bNWzRRDg78K15Bcb035f1iq%2BDgNMmeoztnIzwbj5kEK0LD4Ai0eh0rlUQz%2Flt%2FHDM9h9NsNJ2%2F3IgJSAY9DZNchdz0TrEanBDpFckx7hadCKVHZqbqal%2FfpokjQwPFPMX%2FqpHKBDm22Xr5wXGBb43TIXGPoEPBODeFqEbTNXl2eN5iJZbtn2ie%2FtElUPwhEy7wAcsxy5Lz%2Bnpyeg8AQYV%2BN8B8T4yrnlxxHndwF3x6vVtl7cpkJcQlIhFeqqEyBIpWrSPdR0nxySUgHma4zGUq%2BO11eqT4W2GtVOjh4EDqiMZGGcDxLP0TOSdMne7wB5qlXsb8CoMd0VIZNaQWs7KnlSbi6CjZ6YHk6AQ%2Bv4b1eNAloVouM%2BtL1czWJn%2FwPrqudZGOKkLe81q3r%2BvAKvZrCBBV8shIJfFzIaBbigKlBdhVaIWXmw3eNAoWL9zlKWj5fxwrblqWfM86KUzpV%2FPtD%2BYwXutFWGaetoqFnA6RrMGY2PTIolJjaj4AWGYEadznPjjpbMP2u8UsQb2sUQKeoYwE7xT7Aw896YwwY6pgEyI%2BYpG2n5pQ7llGJ0c1%2F7QHGCQ%2FPetvkLNMW8wAz0hUFw3sTkS2eGI9mRftYY%2B5F8SjBn%2F8I3li9LTqo5oCotNIH5dS05SiLME50iY4kWokUGQL0NSyEYhOe2qaLFk3HEduYqVRDglr7IJthipMGjmhuScR%2BVV6rN2E20HgVFnf%2Fk8zMs7WkuB%2BZYRUuhaRck45X29i870AViCYbtllZo3gVMPxWe&X-Amz-Signature=82871dc57bff78efc68ab997d2a7204109aefc9e1a9b5411a8e60bb00328d9f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YACFPAMI%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T081300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIG0b1bBTHy4sqpe1Zc1VhkCwRiS4KFzsmZRbmooLv7BjAiASzukDUlHjpEPQkmLcMmZPSiNZG320YWVQYPgQ19omhCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMK6UEKzqT0SrnViVlKtwDbQ0Uv5WTiwMqYunjNzqif5CjXmX3mPlWhfkLj2%2BQe2%2Bm5S%2FhiYx9YePUC%2FiOS1EjBw3aLi4R6NpjEPZKuqO1kENIz514bNWzRRDg78K15Bcb035f1iq%2BDgNMmeoztnIzwbj5kEK0LD4Ai0eh0rlUQz%2Flt%2FHDM9h9NsNJ2%2F3IgJSAY9DZNchdz0TrEanBDpFckx7hadCKVHZqbqal%2FfpokjQwPFPMX%2FqpHKBDm22Xr5wXGBb43TIXGPoEPBODeFqEbTNXl2eN5iJZbtn2ie%2FtElUPwhEy7wAcsxy5Lz%2Bnpyeg8AQYV%2BN8B8T4yrnlxxHndwF3x6vVtl7cpkJcQlIhFeqqEyBIpWrSPdR0nxySUgHma4zGUq%2BO11eqT4W2GtVOjh4EDqiMZGGcDxLP0TOSdMne7wB5qlXsb8CoMd0VIZNaQWs7KnlSbi6CjZ6YHk6AQ%2Bv4b1eNAloVouM%2BtL1czWJn%2FwPrqudZGOKkLe81q3r%2BvAKvZrCBBV8shIJfFzIaBbigKlBdhVaIWXmw3eNAoWL9zlKWj5fxwrblqWfM86KUzpV%2FPtD%2BYwXutFWGaetoqFnA6RrMGY2PTIolJjaj4AWGYEadznPjjpbMP2u8UsQb2sUQKeoYwE7xT7Aw896YwwY6pgEyI%2BYpG2n5pQ7llGJ0c1%2F7QHGCQ%2FPetvkLNMW8wAz0hUFw3sTkS2eGI9mRftYY%2B5F8SjBn%2F8I3li9LTqo5oCotNIH5dS05SiLME50iY4kWokUGQL0NSyEYhOe2qaLFk3HEduYqVRDglr7IJthipMGjmhuScR%2BVV6rN2E20HgVFnf%2Fk8zMs7WkuB%2BZYRUuhaRck45X29i870AViCYbtllZo3gVMPxWe&X-Amz-Signature=9900ade0548167dc5351ce58741ac8802fa49dc1161ca631708672a345750d21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YACFPAMI%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T081300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIG0b1bBTHy4sqpe1Zc1VhkCwRiS4KFzsmZRbmooLv7BjAiASzukDUlHjpEPQkmLcMmZPSiNZG320YWVQYPgQ19omhCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMK6UEKzqT0SrnViVlKtwDbQ0Uv5WTiwMqYunjNzqif5CjXmX3mPlWhfkLj2%2BQe2%2Bm5S%2FhiYx9YePUC%2FiOS1EjBw3aLi4R6NpjEPZKuqO1kENIz514bNWzRRDg78K15Bcb035f1iq%2BDgNMmeoztnIzwbj5kEK0LD4Ai0eh0rlUQz%2Flt%2FHDM9h9NsNJ2%2F3IgJSAY9DZNchdz0TrEanBDpFckx7hadCKVHZqbqal%2FfpokjQwPFPMX%2FqpHKBDm22Xr5wXGBb43TIXGPoEPBODeFqEbTNXl2eN5iJZbtn2ie%2FtElUPwhEy7wAcsxy5Lz%2Bnpyeg8AQYV%2BN8B8T4yrnlxxHndwF3x6vVtl7cpkJcQlIhFeqqEyBIpWrSPdR0nxySUgHma4zGUq%2BO11eqT4W2GtVOjh4EDqiMZGGcDxLP0TOSdMne7wB5qlXsb8CoMd0VIZNaQWs7KnlSbi6CjZ6YHk6AQ%2Bv4b1eNAloVouM%2BtL1czWJn%2FwPrqudZGOKkLe81q3r%2BvAKvZrCBBV8shIJfFzIaBbigKlBdhVaIWXmw3eNAoWL9zlKWj5fxwrblqWfM86KUzpV%2FPtD%2BYwXutFWGaetoqFnA6RrMGY2PTIolJjaj4AWGYEadznPjjpbMP2u8UsQb2sUQKeoYwE7xT7Aw896YwwY6pgEyI%2BYpG2n5pQ7llGJ0c1%2F7QHGCQ%2FPetvkLNMW8wAz0hUFw3sTkS2eGI9mRftYY%2B5F8SjBn%2F8I3li9LTqo5oCotNIH5dS05SiLME50iY4kWokUGQL0NSyEYhOe2qaLFk3HEduYqVRDglr7IJthipMGjmhuScR%2BVV6rN2E20HgVFnf%2Fk8zMs7WkuB%2BZYRUuhaRck45X29i870AViCYbtllZo3gVMPxWe&X-Amz-Signature=e9684323bb0bb54cc7d33f55e1dac3e9e0166f005e1b4aa74648d1a3dfcb3f37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YACFPAMI%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T081300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIG0b1bBTHy4sqpe1Zc1VhkCwRiS4KFzsmZRbmooLv7BjAiASzukDUlHjpEPQkmLcMmZPSiNZG320YWVQYPgQ19omhCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMK6UEKzqT0SrnViVlKtwDbQ0Uv5WTiwMqYunjNzqif5CjXmX3mPlWhfkLj2%2BQe2%2Bm5S%2FhiYx9YePUC%2FiOS1EjBw3aLi4R6NpjEPZKuqO1kENIz514bNWzRRDg78K15Bcb035f1iq%2BDgNMmeoztnIzwbj5kEK0LD4Ai0eh0rlUQz%2Flt%2FHDM9h9NsNJ2%2F3IgJSAY9DZNchdz0TrEanBDpFckx7hadCKVHZqbqal%2FfpokjQwPFPMX%2FqpHKBDm22Xr5wXGBb43TIXGPoEPBODeFqEbTNXl2eN5iJZbtn2ie%2FtElUPwhEy7wAcsxy5Lz%2Bnpyeg8AQYV%2BN8B8T4yrnlxxHndwF3x6vVtl7cpkJcQlIhFeqqEyBIpWrSPdR0nxySUgHma4zGUq%2BO11eqT4W2GtVOjh4EDqiMZGGcDxLP0TOSdMne7wB5qlXsb8CoMd0VIZNaQWs7KnlSbi6CjZ6YHk6AQ%2Bv4b1eNAloVouM%2BtL1czWJn%2FwPrqudZGOKkLe81q3r%2BvAKvZrCBBV8shIJfFzIaBbigKlBdhVaIWXmw3eNAoWL9zlKWj5fxwrblqWfM86KUzpV%2FPtD%2BYwXutFWGaetoqFnA6RrMGY2PTIolJjaj4AWGYEadznPjjpbMP2u8UsQb2sUQKeoYwE7xT7Aw896YwwY6pgEyI%2BYpG2n5pQ7llGJ0c1%2F7QHGCQ%2FPetvkLNMW8wAz0hUFw3sTkS2eGI9mRftYY%2B5F8SjBn%2F8I3li9LTqo5oCotNIH5dS05SiLME50iY4kWokUGQL0NSyEYhOe2qaLFk3HEduYqVRDglr7IJthipMGjmhuScR%2BVV6rN2E20HgVFnf%2Fk8zMs7WkuB%2BZYRUuhaRck45X29i870AViCYbtllZo3gVMPxWe&X-Amz-Signature=4344d6141cc874ec3c6623eac9d7f783cf922546308e6a6e5ef881f636e088a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YACFPAMI%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T081300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIG0b1bBTHy4sqpe1Zc1VhkCwRiS4KFzsmZRbmooLv7BjAiASzukDUlHjpEPQkmLcMmZPSiNZG320YWVQYPgQ19omhCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMK6UEKzqT0SrnViVlKtwDbQ0Uv5WTiwMqYunjNzqif5CjXmX3mPlWhfkLj2%2BQe2%2Bm5S%2FhiYx9YePUC%2FiOS1EjBw3aLi4R6NpjEPZKuqO1kENIz514bNWzRRDg78K15Bcb035f1iq%2BDgNMmeoztnIzwbj5kEK0LD4Ai0eh0rlUQz%2Flt%2FHDM9h9NsNJ2%2F3IgJSAY9DZNchdz0TrEanBDpFckx7hadCKVHZqbqal%2FfpokjQwPFPMX%2FqpHKBDm22Xr5wXGBb43TIXGPoEPBODeFqEbTNXl2eN5iJZbtn2ie%2FtElUPwhEy7wAcsxy5Lz%2Bnpyeg8AQYV%2BN8B8T4yrnlxxHndwF3x6vVtl7cpkJcQlIhFeqqEyBIpWrSPdR0nxySUgHma4zGUq%2BO11eqT4W2GtVOjh4EDqiMZGGcDxLP0TOSdMne7wB5qlXsb8CoMd0VIZNaQWs7KnlSbi6CjZ6YHk6AQ%2Bv4b1eNAloVouM%2BtL1czWJn%2FwPrqudZGOKkLe81q3r%2BvAKvZrCBBV8shIJfFzIaBbigKlBdhVaIWXmw3eNAoWL9zlKWj5fxwrblqWfM86KUzpV%2FPtD%2BYwXutFWGaetoqFnA6RrMGY2PTIolJjaj4AWGYEadznPjjpbMP2u8UsQb2sUQKeoYwE7xT7Aw896YwwY6pgEyI%2BYpG2n5pQ7llGJ0c1%2F7QHGCQ%2FPetvkLNMW8wAz0hUFw3sTkS2eGI9mRftYY%2B5F8SjBn%2F8I3li9LTqo5oCotNIH5dS05SiLME50iY4kWokUGQL0NSyEYhOe2qaLFk3HEduYqVRDglr7IJthipMGjmhuScR%2BVV6rN2E20HgVFnf%2Fk8zMs7WkuB%2BZYRUuhaRck45X29i870AViCYbtllZo3gVMPxWe&X-Amz-Signature=0d2825429a1ea2bfbe136264f673e5eec852431498386d58d01f6a2b29481635&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
