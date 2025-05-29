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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR35UUWI%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDi5jcpxXkhNNjF8PjsV2u20E6fMa7D4l2ajcfc8fxMDAiEArPQeg9J4EKqQAT%2B6EJaN8ILtlWf%2BwdKVqLRiBpfNmXgqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfV%2FP8qaAy4bAqfmyrcA7tbk5%2BEZ36rSGzHRnBYsEeycKbpYUwYLms%2FXAOEW1QOlupJocDgOhBEKah3F%2FSYZVtpKkFrC1uU0KF3EWcyizU4pmqnnMcg2EUYQYylTHK5x3L01d9RfXbmIJTSXCOyy3eVGspLBxP3D4VtEODPJiL5RI423Qb9jIt7kNyoVLjCilZB%2FHw986W8J9ZRXuG5kYkN%2Fjz6frinkRSvmjhotIF7Ils3mSqsnFjIkmEhgJlM9QiYfwSem15%2FxZQfnpW0VL93aYwpryiuc5jwgwDIcv1Kk3ypApZlqEh2B9r3TGmeR02uNSllQs5DyqYGF%2FijbdVL5r5tZE%2FqQpjOZLK2ML30qt3tmbqpvz21rWceij%2BqnUhqkhaTnSXNUUUQVrwGx4UphYk%2F6waUkHT%2FCdSWwGDCwsU%2F9JEsirhAWXQV4zpIMDIABbLNaZqRepZqJWNwiY9AaEcHWgxxLW3SGvP7etubbAEp6daxbxFvPXMEMlyaHJ4XRBCPWZZfxvhvnRyGvjtPilxur%2BjpoCO5AgvzsS3iVeODfLvQvi%2FEreznN2Hox%2F2ymwouBBn6MVf42lyxsVt8oAUJnA%2FnZUQI1mUOREYM%2BfoBGPV8dmrFGC26fWQFjDPeAt027pcV9K9DMOSy48EGOqUB1Z2MbajQmhBuJscXZ9LS0Q7d8NPrqzumvSFSmgm1b8noxQ1JGm%2BquMXWBH8unPPMs62ykoudpLs6nOwHm1FXN1Ju2FNb9e1xxfBE8qQZSQitf30%2Fc64j29DjXxnJNFia0fvqYuc9d4RJHGifJkKR0iBZqNJGgjyQ%2FwE%2Fml%2F8tSjFUuLbW8%2FkRFeTqnXEfe3Yd8Fz4aS%2FjCGbjyslU%2FfaVOjUELzF&X-Amz-Signature=392e06634fcf0a42e558fd4cd68c65b6b7bf6d3a03e2e2f8a8edb4f443798964&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR35UUWI%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDi5jcpxXkhNNjF8PjsV2u20E6fMa7D4l2ajcfc8fxMDAiEArPQeg9J4EKqQAT%2B6EJaN8ILtlWf%2BwdKVqLRiBpfNmXgqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfV%2FP8qaAy4bAqfmyrcA7tbk5%2BEZ36rSGzHRnBYsEeycKbpYUwYLms%2FXAOEW1QOlupJocDgOhBEKah3F%2FSYZVtpKkFrC1uU0KF3EWcyizU4pmqnnMcg2EUYQYylTHK5x3L01d9RfXbmIJTSXCOyy3eVGspLBxP3D4VtEODPJiL5RI423Qb9jIt7kNyoVLjCilZB%2FHw986W8J9ZRXuG5kYkN%2Fjz6frinkRSvmjhotIF7Ils3mSqsnFjIkmEhgJlM9QiYfwSem15%2FxZQfnpW0VL93aYwpryiuc5jwgwDIcv1Kk3ypApZlqEh2B9r3TGmeR02uNSllQs5DyqYGF%2FijbdVL5r5tZE%2FqQpjOZLK2ML30qt3tmbqpvz21rWceij%2BqnUhqkhaTnSXNUUUQVrwGx4UphYk%2F6waUkHT%2FCdSWwGDCwsU%2F9JEsirhAWXQV4zpIMDIABbLNaZqRepZqJWNwiY9AaEcHWgxxLW3SGvP7etubbAEp6daxbxFvPXMEMlyaHJ4XRBCPWZZfxvhvnRyGvjtPilxur%2BjpoCO5AgvzsS3iVeODfLvQvi%2FEreznN2Hox%2F2ymwouBBn6MVf42lyxsVt8oAUJnA%2FnZUQI1mUOREYM%2BfoBGPV8dmrFGC26fWQFjDPeAt027pcV9K9DMOSy48EGOqUB1Z2MbajQmhBuJscXZ9LS0Q7d8NPrqzumvSFSmgm1b8noxQ1JGm%2BquMXWBH8unPPMs62ykoudpLs6nOwHm1FXN1Ju2FNb9e1xxfBE8qQZSQitf30%2Fc64j29DjXxnJNFia0fvqYuc9d4RJHGifJkKR0iBZqNJGgjyQ%2FwE%2Fml%2F8tSjFUuLbW8%2FkRFeTqnXEfe3Yd8Fz4aS%2FjCGbjyslU%2FfaVOjUELzF&X-Amz-Signature=b1864bf6960e5e37f611dd66679ba1bed2616c194d8468dac8170132cc1cd20d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR35UUWI%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDi5jcpxXkhNNjF8PjsV2u20E6fMa7D4l2ajcfc8fxMDAiEArPQeg9J4EKqQAT%2B6EJaN8ILtlWf%2BwdKVqLRiBpfNmXgqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfV%2FP8qaAy4bAqfmyrcA7tbk5%2BEZ36rSGzHRnBYsEeycKbpYUwYLms%2FXAOEW1QOlupJocDgOhBEKah3F%2FSYZVtpKkFrC1uU0KF3EWcyizU4pmqnnMcg2EUYQYylTHK5x3L01d9RfXbmIJTSXCOyy3eVGspLBxP3D4VtEODPJiL5RI423Qb9jIt7kNyoVLjCilZB%2FHw986W8J9ZRXuG5kYkN%2Fjz6frinkRSvmjhotIF7Ils3mSqsnFjIkmEhgJlM9QiYfwSem15%2FxZQfnpW0VL93aYwpryiuc5jwgwDIcv1Kk3ypApZlqEh2B9r3TGmeR02uNSllQs5DyqYGF%2FijbdVL5r5tZE%2FqQpjOZLK2ML30qt3tmbqpvz21rWceij%2BqnUhqkhaTnSXNUUUQVrwGx4UphYk%2F6waUkHT%2FCdSWwGDCwsU%2F9JEsirhAWXQV4zpIMDIABbLNaZqRepZqJWNwiY9AaEcHWgxxLW3SGvP7etubbAEp6daxbxFvPXMEMlyaHJ4XRBCPWZZfxvhvnRyGvjtPilxur%2BjpoCO5AgvzsS3iVeODfLvQvi%2FEreznN2Hox%2F2ymwouBBn6MVf42lyxsVt8oAUJnA%2FnZUQI1mUOREYM%2BfoBGPV8dmrFGC26fWQFjDPeAt027pcV9K9DMOSy48EGOqUB1Z2MbajQmhBuJscXZ9LS0Q7d8NPrqzumvSFSmgm1b8noxQ1JGm%2BquMXWBH8unPPMs62ykoudpLs6nOwHm1FXN1Ju2FNb9e1xxfBE8qQZSQitf30%2Fc64j29DjXxnJNFia0fvqYuc9d4RJHGifJkKR0iBZqNJGgjyQ%2FwE%2Fml%2F8tSjFUuLbW8%2FkRFeTqnXEfe3Yd8Fz4aS%2FjCGbjyslU%2FfaVOjUELzF&X-Amz-Signature=b3d5ded5c8da4f525318e365312316bb8ab0d6b2a51f6656a749a8483b401701&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR35UUWI%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDi5jcpxXkhNNjF8PjsV2u20E6fMa7D4l2ajcfc8fxMDAiEArPQeg9J4EKqQAT%2B6EJaN8ILtlWf%2BwdKVqLRiBpfNmXgqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfV%2FP8qaAy4bAqfmyrcA7tbk5%2BEZ36rSGzHRnBYsEeycKbpYUwYLms%2FXAOEW1QOlupJocDgOhBEKah3F%2FSYZVtpKkFrC1uU0KF3EWcyizU4pmqnnMcg2EUYQYylTHK5x3L01d9RfXbmIJTSXCOyy3eVGspLBxP3D4VtEODPJiL5RI423Qb9jIt7kNyoVLjCilZB%2FHw986W8J9ZRXuG5kYkN%2Fjz6frinkRSvmjhotIF7Ils3mSqsnFjIkmEhgJlM9QiYfwSem15%2FxZQfnpW0VL93aYwpryiuc5jwgwDIcv1Kk3ypApZlqEh2B9r3TGmeR02uNSllQs5DyqYGF%2FijbdVL5r5tZE%2FqQpjOZLK2ML30qt3tmbqpvz21rWceij%2BqnUhqkhaTnSXNUUUQVrwGx4UphYk%2F6waUkHT%2FCdSWwGDCwsU%2F9JEsirhAWXQV4zpIMDIABbLNaZqRepZqJWNwiY9AaEcHWgxxLW3SGvP7etubbAEp6daxbxFvPXMEMlyaHJ4XRBCPWZZfxvhvnRyGvjtPilxur%2BjpoCO5AgvzsS3iVeODfLvQvi%2FEreznN2Hox%2F2ymwouBBn6MVf42lyxsVt8oAUJnA%2FnZUQI1mUOREYM%2BfoBGPV8dmrFGC26fWQFjDPeAt027pcV9K9DMOSy48EGOqUB1Z2MbajQmhBuJscXZ9LS0Q7d8NPrqzumvSFSmgm1b8noxQ1JGm%2BquMXWBH8unPPMs62ykoudpLs6nOwHm1FXN1Ju2FNb9e1xxfBE8qQZSQitf30%2Fc64j29DjXxnJNFia0fvqYuc9d4RJHGifJkKR0iBZqNJGgjyQ%2FwE%2Fml%2F8tSjFUuLbW8%2FkRFeTqnXEfe3Yd8Fz4aS%2FjCGbjyslU%2FfaVOjUELzF&X-Amz-Signature=bc615df718ab4924ba346b26870f3c71d0bf0c3511f8853bebe39f6d2549903b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR35UUWI%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDi5jcpxXkhNNjF8PjsV2u20E6fMa7D4l2ajcfc8fxMDAiEArPQeg9J4EKqQAT%2B6EJaN8ILtlWf%2BwdKVqLRiBpfNmXgqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfV%2FP8qaAy4bAqfmyrcA7tbk5%2BEZ36rSGzHRnBYsEeycKbpYUwYLms%2FXAOEW1QOlupJocDgOhBEKah3F%2FSYZVtpKkFrC1uU0KF3EWcyizU4pmqnnMcg2EUYQYylTHK5x3L01d9RfXbmIJTSXCOyy3eVGspLBxP3D4VtEODPJiL5RI423Qb9jIt7kNyoVLjCilZB%2FHw986W8J9ZRXuG5kYkN%2Fjz6frinkRSvmjhotIF7Ils3mSqsnFjIkmEhgJlM9QiYfwSem15%2FxZQfnpW0VL93aYwpryiuc5jwgwDIcv1Kk3ypApZlqEh2B9r3TGmeR02uNSllQs5DyqYGF%2FijbdVL5r5tZE%2FqQpjOZLK2ML30qt3tmbqpvz21rWceij%2BqnUhqkhaTnSXNUUUQVrwGx4UphYk%2F6waUkHT%2FCdSWwGDCwsU%2F9JEsirhAWXQV4zpIMDIABbLNaZqRepZqJWNwiY9AaEcHWgxxLW3SGvP7etubbAEp6daxbxFvPXMEMlyaHJ4XRBCPWZZfxvhvnRyGvjtPilxur%2BjpoCO5AgvzsS3iVeODfLvQvi%2FEreznN2Hox%2F2ymwouBBn6MVf42lyxsVt8oAUJnA%2FnZUQI1mUOREYM%2BfoBGPV8dmrFGC26fWQFjDPeAt027pcV9K9DMOSy48EGOqUB1Z2MbajQmhBuJscXZ9LS0Q7d8NPrqzumvSFSmgm1b8noxQ1JGm%2BquMXWBH8unPPMs62ykoudpLs6nOwHm1FXN1Ju2FNb9e1xxfBE8qQZSQitf30%2Fc64j29DjXxnJNFia0fvqYuc9d4RJHGifJkKR0iBZqNJGgjyQ%2FwE%2Fml%2F8tSjFUuLbW8%2FkRFeTqnXEfe3Yd8Fz4aS%2FjCGbjyslU%2FfaVOjUELzF&X-Amz-Signature=29589248f02fdde72eb5e0bd544a94f31dc9b300098a1fce8cf971ca5e09be23&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR35UUWI%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T230337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDi5jcpxXkhNNjF8PjsV2u20E6fMa7D4l2ajcfc8fxMDAiEArPQeg9J4EKqQAT%2B6EJaN8ILtlWf%2BwdKVqLRiBpfNmXgqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfV%2FP8qaAy4bAqfmyrcA7tbk5%2BEZ36rSGzHRnBYsEeycKbpYUwYLms%2FXAOEW1QOlupJocDgOhBEKah3F%2FSYZVtpKkFrC1uU0KF3EWcyizU4pmqnnMcg2EUYQYylTHK5x3L01d9RfXbmIJTSXCOyy3eVGspLBxP3D4VtEODPJiL5RI423Qb9jIt7kNyoVLjCilZB%2FHw986W8J9ZRXuG5kYkN%2Fjz6frinkRSvmjhotIF7Ils3mSqsnFjIkmEhgJlM9QiYfwSem15%2FxZQfnpW0VL93aYwpryiuc5jwgwDIcv1Kk3ypApZlqEh2B9r3TGmeR02uNSllQs5DyqYGF%2FijbdVL5r5tZE%2FqQpjOZLK2ML30qt3tmbqpvz21rWceij%2BqnUhqkhaTnSXNUUUQVrwGx4UphYk%2F6waUkHT%2FCdSWwGDCwsU%2F9JEsirhAWXQV4zpIMDIABbLNaZqRepZqJWNwiY9AaEcHWgxxLW3SGvP7etubbAEp6daxbxFvPXMEMlyaHJ4XRBCPWZZfxvhvnRyGvjtPilxur%2BjpoCO5AgvzsS3iVeODfLvQvi%2FEreznN2Hox%2F2ymwouBBn6MVf42lyxsVt8oAUJnA%2FnZUQI1mUOREYM%2BfoBGPV8dmrFGC26fWQFjDPeAt027pcV9K9DMOSy48EGOqUB1Z2MbajQmhBuJscXZ9LS0Q7d8NPrqzumvSFSmgm1b8noxQ1JGm%2BquMXWBH8unPPMs62ykoudpLs6nOwHm1FXN1Ju2FNb9e1xxfBE8qQZSQitf30%2Fc64j29DjXxnJNFia0fvqYuc9d4RJHGifJkKR0iBZqNJGgjyQ%2FwE%2Fml%2F8tSjFUuLbW8%2FkRFeTqnXEfe3Yd8Fz4aS%2FjCGbjyslU%2FfaVOjUELzF&X-Amz-Signature=c6ce91dbee1c092e80bad31fd07f8b0ed00510fc2b4cb4d7fd8f711dda2b9520&X-Amz-SignedHeaders=host&x-id=GetObject)
