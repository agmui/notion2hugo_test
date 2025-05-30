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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TROZ6LEV%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwU40R16U3hGJTFLOmCD8dyzF%2FZaVJomdgh0%2BZ%2FPtazAIhAN4zKjuOtjkpu3DcVKXuCW40nyTQLIsYFUDmCXwfvq5vKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykafrvvQ4whMorqckq3AOet%2Fmxzu%2B61aPZsY3O6mR%2Bo6N4L5m7wn1h0%2BWU1BsO3WkkjwtSOplGTa%2B33hPdidn2POo8kIExpZv9XX0gV2czOkZDwSQFnHSdRSaEXScSb6kQkgV7RVBUD78xzD2BSRyXEneVF5XK9enr0f97bVy%2BI82AYa9Nh%2Fy%2FcAFN7LZ1%2BBKjVngsXojqwaozjlXQc7zBdjvtf3HKlFErIFL3779dHAbMaZwG%2FnDFj06TxBIuBuC7SMV7MawmaLJes1lLVHXoif0OKRVeEFadEhuEhU5ADi7LM5pmRX9K0XGY5Nj%2Fh64MKFkrzjKBewKd4u4bD2j1RTyFabha8MyB4TDS7vTgTgwt3NERuUzMMVD%2FQui%2BXZrmj%2B%2FjXZ42vBe6B5ZrDYufUJQO%2F2m631E3U2pG%2BaB9JYJwRVP0v1ZQUDfKhXU7A%2FtYWq3dH2jht4aQr8qa80uuObMcdjT3tCz%2F3SR%2Bw9YXyHNLdjD%2FnWOkKqtTTjfH6oGquuKEi1RDQhZcCn2i9sZGhQXmUTmPQbcLCZEk0r3%2BjHlqum8YwK%2Fje7aDAk8dbcGJJ%2Fh7Ibivq9OrtzoWgj7MzHhZ%2FMZWdvFv0u3naD5WLZCY2vCvL8N3tVvskX67zU5hghcNgJ9NKBYSZjCO%2FefBBjqkAcZW%2FArjHKqBUtTdcscG%2Fq7mKK3W1ZT1IdVsbODRzdB6q8VNdbTH7SA2hSQ5UJa%2BPCC01J4KmB6Thz2mqc0lssJF5zFJJYhxfZwV97072%2FIXd1VVU3FfgCN2yzB68quttvpbrQmO4JkXtB%2FEtDiEQXszurpncLoNej%2FpRtqFJbybvsjNyu5LahWIf4KybLCZNeVWdng0rsqzyUqmADMo11S5pd%2BO&X-Amz-Signature=48763193331bbf424366ef50392cd983290eff461458eae662577d46a6fa0e81&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TROZ6LEV%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwU40R16U3hGJTFLOmCD8dyzF%2FZaVJomdgh0%2BZ%2FPtazAIhAN4zKjuOtjkpu3DcVKXuCW40nyTQLIsYFUDmCXwfvq5vKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykafrvvQ4whMorqckq3AOet%2Fmxzu%2B61aPZsY3O6mR%2Bo6N4L5m7wn1h0%2BWU1BsO3WkkjwtSOplGTa%2B33hPdidn2POo8kIExpZv9XX0gV2czOkZDwSQFnHSdRSaEXScSb6kQkgV7RVBUD78xzD2BSRyXEneVF5XK9enr0f97bVy%2BI82AYa9Nh%2Fy%2FcAFN7LZ1%2BBKjVngsXojqwaozjlXQc7zBdjvtf3HKlFErIFL3779dHAbMaZwG%2FnDFj06TxBIuBuC7SMV7MawmaLJes1lLVHXoif0OKRVeEFadEhuEhU5ADi7LM5pmRX9K0XGY5Nj%2Fh64MKFkrzjKBewKd4u4bD2j1RTyFabha8MyB4TDS7vTgTgwt3NERuUzMMVD%2FQui%2BXZrmj%2B%2FjXZ42vBe6B5ZrDYufUJQO%2F2m631E3U2pG%2BaB9JYJwRVP0v1ZQUDfKhXU7A%2FtYWq3dH2jht4aQr8qa80uuObMcdjT3tCz%2F3SR%2Bw9YXyHNLdjD%2FnWOkKqtTTjfH6oGquuKEi1RDQhZcCn2i9sZGhQXmUTmPQbcLCZEk0r3%2BjHlqum8YwK%2Fje7aDAk8dbcGJJ%2Fh7Ibivq9OrtzoWgj7MzHhZ%2FMZWdvFv0u3naD5WLZCY2vCvL8N3tVvskX67zU5hghcNgJ9NKBYSZjCO%2FefBBjqkAcZW%2FArjHKqBUtTdcscG%2Fq7mKK3W1ZT1IdVsbODRzdB6q8VNdbTH7SA2hSQ5UJa%2BPCC01J4KmB6Thz2mqc0lssJF5zFJJYhxfZwV97072%2FIXd1VVU3FfgCN2yzB68quttvpbrQmO4JkXtB%2FEtDiEQXszurpncLoNej%2FpRtqFJbybvsjNyu5LahWIf4KybLCZNeVWdng0rsqzyUqmADMo11S5pd%2BO&X-Amz-Signature=3b99bc8f4fd4050986667c22b664ee1a15493a98de0dfc28b4e7e6a920e27c00&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TROZ6LEV%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwU40R16U3hGJTFLOmCD8dyzF%2FZaVJomdgh0%2BZ%2FPtazAIhAN4zKjuOtjkpu3DcVKXuCW40nyTQLIsYFUDmCXwfvq5vKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykafrvvQ4whMorqckq3AOet%2Fmxzu%2B61aPZsY3O6mR%2Bo6N4L5m7wn1h0%2BWU1BsO3WkkjwtSOplGTa%2B33hPdidn2POo8kIExpZv9XX0gV2czOkZDwSQFnHSdRSaEXScSb6kQkgV7RVBUD78xzD2BSRyXEneVF5XK9enr0f97bVy%2BI82AYa9Nh%2Fy%2FcAFN7LZ1%2BBKjVngsXojqwaozjlXQc7zBdjvtf3HKlFErIFL3779dHAbMaZwG%2FnDFj06TxBIuBuC7SMV7MawmaLJes1lLVHXoif0OKRVeEFadEhuEhU5ADi7LM5pmRX9K0XGY5Nj%2Fh64MKFkrzjKBewKd4u4bD2j1RTyFabha8MyB4TDS7vTgTgwt3NERuUzMMVD%2FQui%2BXZrmj%2B%2FjXZ42vBe6B5ZrDYufUJQO%2F2m631E3U2pG%2BaB9JYJwRVP0v1ZQUDfKhXU7A%2FtYWq3dH2jht4aQr8qa80uuObMcdjT3tCz%2F3SR%2Bw9YXyHNLdjD%2FnWOkKqtTTjfH6oGquuKEi1RDQhZcCn2i9sZGhQXmUTmPQbcLCZEk0r3%2BjHlqum8YwK%2Fje7aDAk8dbcGJJ%2Fh7Ibivq9OrtzoWgj7MzHhZ%2FMZWdvFv0u3naD5WLZCY2vCvL8N3tVvskX67zU5hghcNgJ9NKBYSZjCO%2FefBBjqkAcZW%2FArjHKqBUtTdcscG%2Fq7mKK3W1ZT1IdVsbODRzdB6q8VNdbTH7SA2hSQ5UJa%2BPCC01J4KmB6Thz2mqc0lssJF5zFJJYhxfZwV97072%2FIXd1VVU3FfgCN2yzB68quttvpbrQmO4JkXtB%2FEtDiEQXszurpncLoNej%2FpRtqFJbybvsjNyu5LahWIf4KybLCZNeVWdng0rsqzyUqmADMo11S5pd%2BO&X-Amz-Signature=0611e1767c6c56edb7c7c48aaf16b4b80bb11a2f8d76de8a40d1df5fd820d838&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TROZ6LEV%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwU40R16U3hGJTFLOmCD8dyzF%2FZaVJomdgh0%2BZ%2FPtazAIhAN4zKjuOtjkpu3DcVKXuCW40nyTQLIsYFUDmCXwfvq5vKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykafrvvQ4whMorqckq3AOet%2Fmxzu%2B61aPZsY3O6mR%2Bo6N4L5m7wn1h0%2BWU1BsO3WkkjwtSOplGTa%2B33hPdidn2POo8kIExpZv9XX0gV2czOkZDwSQFnHSdRSaEXScSb6kQkgV7RVBUD78xzD2BSRyXEneVF5XK9enr0f97bVy%2BI82AYa9Nh%2Fy%2FcAFN7LZ1%2BBKjVngsXojqwaozjlXQc7zBdjvtf3HKlFErIFL3779dHAbMaZwG%2FnDFj06TxBIuBuC7SMV7MawmaLJes1lLVHXoif0OKRVeEFadEhuEhU5ADi7LM5pmRX9K0XGY5Nj%2Fh64MKFkrzjKBewKd4u4bD2j1RTyFabha8MyB4TDS7vTgTgwt3NERuUzMMVD%2FQui%2BXZrmj%2B%2FjXZ42vBe6B5ZrDYufUJQO%2F2m631E3U2pG%2BaB9JYJwRVP0v1ZQUDfKhXU7A%2FtYWq3dH2jht4aQr8qa80uuObMcdjT3tCz%2F3SR%2Bw9YXyHNLdjD%2FnWOkKqtTTjfH6oGquuKEi1RDQhZcCn2i9sZGhQXmUTmPQbcLCZEk0r3%2BjHlqum8YwK%2Fje7aDAk8dbcGJJ%2Fh7Ibivq9OrtzoWgj7MzHhZ%2FMZWdvFv0u3naD5WLZCY2vCvL8N3tVvskX67zU5hghcNgJ9NKBYSZjCO%2FefBBjqkAcZW%2FArjHKqBUtTdcscG%2Fq7mKK3W1ZT1IdVsbODRzdB6q8VNdbTH7SA2hSQ5UJa%2BPCC01J4KmB6Thz2mqc0lssJF5zFJJYhxfZwV97072%2FIXd1VVU3FfgCN2yzB68quttvpbrQmO4JkXtB%2FEtDiEQXszurpncLoNej%2FpRtqFJbybvsjNyu5LahWIf4KybLCZNeVWdng0rsqzyUqmADMo11S5pd%2BO&X-Amz-Signature=a1ff36e58a03e357c0803741093fb092ab4a79a63fbca9db66c1c0b835bb027d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TROZ6LEV%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwU40R16U3hGJTFLOmCD8dyzF%2FZaVJomdgh0%2BZ%2FPtazAIhAN4zKjuOtjkpu3DcVKXuCW40nyTQLIsYFUDmCXwfvq5vKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykafrvvQ4whMorqckq3AOet%2Fmxzu%2B61aPZsY3O6mR%2Bo6N4L5m7wn1h0%2BWU1BsO3WkkjwtSOplGTa%2B33hPdidn2POo8kIExpZv9XX0gV2czOkZDwSQFnHSdRSaEXScSb6kQkgV7RVBUD78xzD2BSRyXEneVF5XK9enr0f97bVy%2BI82AYa9Nh%2Fy%2FcAFN7LZ1%2BBKjVngsXojqwaozjlXQc7zBdjvtf3HKlFErIFL3779dHAbMaZwG%2FnDFj06TxBIuBuC7SMV7MawmaLJes1lLVHXoif0OKRVeEFadEhuEhU5ADi7LM5pmRX9K0XGY5Nj%2Fh64MKFkrzjKBewKd4u4bD2j1RTyFabha8MyB4TDS7vTgTgwt3NERuUzMMVD%2FQui%2BXZrmj%2B%2FjXZ42vBe6B5ZrDYufUJQO%2F2m631E3U2pG%2BaB9JYJwRVP0v1ZQUDfKhXU7A%2FtYWq3dH2jht4aQr8qa80uuObMcdjT3tCz%2F3SR%2Bw9YXyHNLdjD%2FnWOkKqtTTjfH6oGquuKEi1RDQhZcCn2i9sZGhQXmUTmPQbcLCZEk0r3%2BjHlqum8YwK%2Fje7aDAk8dbcGJJ%2Fh7Ibivq9OrtzoWgj7MzHhZ%2FMZWdvFv0u3naD5WLZCY2vCvL8N3tVvskX67zU5hghcNgJ9NKBYSZjCO%2FefBBjqkAcZW%2FArjHKqBUtTdcscG%2Fq7mKK3W1ZT1IdVsbODRzdB6q8VNdbTH7SA2hSQ5UJa%2BPCC01J4KmB6Thz2mqc0lssJF5zFJJYhxfZwV97072%2FIXd1VVU3FfgCN2yzB68quttvpbrQmO4JkXtB%2FEtDiEQXszurpncLoNej%2FpRtqFJbybvsjNyu5LahWIf4KybLCZNeVWdng0rsqzyUqmADMo11S5pd%2BO&X-Amz-Signature=0d8d4902b3dc2556745cb1268638d859b1e4bc6de227a74c4c6a6dea5852530a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TROZ6LEV%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwU40R16U3hGJTFLOmCD8dyzF%2FZaVJomdgh0%2BZ%2FPtazAIhAN4zKjuOtjkpu3DcVKXuCW40nyTQLIsYFUDmCXwfvq5vKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgykafrvvQ4whMorqckq3AOet%2Fmxzu%2B61aPZsY3O6mR%2Bo6N4L5m7wn1h0%2BWU1BsO3WkkjwtSOplGTa%2B33hPdidn2POo8kIExpZv9XX0gV2czOkZDwSQFnHSdRSaEXScSb6kQkgV7RVBUD78xzD2BSRyXEneVF5XK9enr0f97bVy%2BI82AYa9Nh%2Fy%2FcAFN7LZ1%2BBKjVngsXojqwaozjlXQc7zBdjvtf3HKlFErIFL3779dHAbMaZwG%2FnDFj06TxBIuBuC7SMV7MawmaLJes1lLVHXoif0OKRVeEFadEhuEhU5ADi7LM5pmRX9K0XGY5Nj%2Fh64MKFkrzjKBewKd4u4bD2j1RTyFabha8MyB4TDS7vTgTgwt3NERuUzMMVD%2FQui%2BXZrmj%2B%2FjXZ42vBe6B5ZrDYufUJQO%2F2m631E3U2pG%2BaB9JYJwRVP0v1ZQUDfKhXU7A%2FtYWq3dH2jht4aQr8qa80uuObMcdjT3tCz%2F3SR%2Bw9YXyHNLdjD%2FnWOkKqtTTjfH6oGquuKEi1RDQhZcCn2i9sZGhQXmUTmPQbcLCZEk0r3%2BjHlqum8YwK%2Fje7aDAk8dbcGJJ%2Fh7Ibivq9OrtzoWgj7MzHhZ%2FMZWdvFv0u3naD5WLZCY2vCvL8N3tVvskX67zU5hghcNgJ9NKBYSZjCO%2FefBBjqkAcZW%2FArjHKqBUtTdcscG%2Fq7mKK3W1ZT1IdVsbODRzdB6q8VNdbTH7SA2hSQ5UJa%2BPCC01J4KmB6Thz2mqc0lssJF5zFJJYhxfZwV97072%2FIXd1VVU3FfgCN2yzB68quttvpbrQmO4JkXtB%2FEtDiEQXszurpncLoNej%2FpRtqFJbybvsjNyu5LahWIf4KybLCZNeVWdng0rsqzyUqmADMo11S5pd%2BO&X-Amz-Signature=56789bb1b5a01ed44b6da9b5d34a915f619f64354182658900c514ac1083af0d&X-Amz-SignedHeaders=host&x-id=GetObject)
