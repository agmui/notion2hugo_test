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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645GY5NBN%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T080903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1t6018aWe0QFlu4GCbfdlqGkxMH0ck0JIM%2Bplu%2B4%2FVQIhALNf5AaWG4bCz%2FL8olWmMVwtXK4hquCOh3bLv8PeHiqVKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FMHokFJOVJlYsXaUq3AN0PGzbk89u50Ns8h0JA3r3L8PZjrOgiUjzr0TwHk5Bt00otE1Yted%2FP4SaN5%2BAwRq7sqB55uRZ9GyL9dMxCBIe%2FtEw4vQ%2BP3xkeEcsw69nOpXa0IyfXUsxK%2F6v2F1nZkDhLaVJDgkV4xrewUKO%2F%2Fl%2FHsjAxVAb4ZSNi6IluQ%2FyaYXS0f0dGUF7jkPWi4UOAjwi88F8ZXiaIr4Ui37nNCNq4qyOnvoZQTdN8WZMV24i7g6QVgqEr2uOCbqjTZoxVewl3XaB1G%2BND%2FQB3yvz5UOZxvAtVaHzKtQ774nYz2qHpA8IkqA0qYyIbmbcLnxpcB0CpTtCz2hbOzbE9es7%2BZUsavo3jNNgsEVX2VMWK2J3bzIgg5anqSbbvdSkDIlWS5pNoSodCrNPlSzaENOP5FBs3SSDe%2BIf5eIm2XrRc6VM7yMXTtPsL39TbLmox7xPmr1Y3NsHgkej386KJqPzPWWbQxhNHx%2BmoiK5BA%2BRf4iVEdodiW3OnRxoJo6HcGk0Q7z5KYReHzwENnQsB8v3deRqOGbN6kn8hzqCbKq15znqDqub6n0OTrZAqB4yemqGb5tNfzcudhP%2BQD5a4lc0pTUTwYJqPojDXH6uiulyosJSC8L2Rumja5y5SBqQhzC%2Fv6C9BjqkAXSAW9fs7d7NGSVm0UaV9atSFiFbviCcib3zj3kH789AJTACmJ4l2ecpsdPkq2ERSDmkwhzfUl4KlTL0MzNCKdctkZqNjE4xUAMwAzSTfHP3j09y1sliVTVMTq4nEKySVotYO%2BYoqpoLYzWHxGX58JG6JjzAalzhvQRUxPeh%2FN%2FBTRrjGelZLiPanx9Oqc0R0lgD05u8So4AvHzogbnWU9HKfrZj&X-Amz-Signature=767b2be55a11f05f2c8ee1d2d789bd75662f053edcbda07577a50132b093e3c9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645GY5NBN%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T080903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1t6018aWe0QFlu4GCbfdlqGkxMH0ck0JIM%2Bplu%2B4%2FVQIhALNf5AaWG4bCz%2FL8olWmMVwtXK4hquCOh3bLv8PeHiqVKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FMHokFJOVJlYsXaUq3AN0PGzbk89u50Ns8h0JA3r3L8PZjrOgiUjzr0TwHk5Bt00otE1Yted%2FP4SaN5%2BAwRq7sqB55uRZ9GyL9dMxCBIe%2FtEw4vQ%2BP3xkeEcsw69nOpXa0IyfXUsxK%2F6v2F1nZkDhLaVJDgkV4xrewUKO%2F%2Fl%2FHsjAxVAb4ZSNi6IluQ%2FyaYXS0f0dGUF7jkPWi4UOAjwi88F8ZXiaIr4Ui37nNCNq4qyOnvoZQTdN8WZMV24i7g6QVgqEr2uOCbqjTZoxVewl3XaB1G%2BND%2FQB3yvz5UOZxvAtVaHzKtQ774nYz2qHpA8IkqA0qYyIbmbcLnxpcB0CpTtCz2hbOzbE9es7%2BZUsavo3jNNgsEVX2VMWK2J3bzIgg5anqSbbvdSkDIlWS5pNoSodCrNPlSzaENOP5FBs3SSDe%2BIf5eIm2XrRc6VM7yMXTtPsL39TbLmox7xPmr1Y3NsHgkej386KJqPzPWWbQxhNHx%2BmoiK5BA%2BRf4iVEdodiW3OnRxoJo6HcGk0Q7z5KYReHzwENnQsB8v3deRqOGbN6kn8hzqCbKq15znqDqub6n0OTrZAqB4yemqGb5tNfzcudhP%2BQD5a4lc0pTUTwYJqPojDXH6uiulyosJSC8L2Rumja5y5SBqQhzC%2Fv6C9BjqkAXSAW9fs7d7NGSVm0UaV9atSFiFbviCcib3zj3kH789AJTACmJ4l2ecpsdPkq2ERSDmkwhzfUl4KlTL0MzNCKdctkZqNjE4xUAMwAzSTfHP3j09y1sliVTVMTq4nEKySVotYO%2BYoqpoLYzWHxGX58JG6JjzAalzhvQRUxPeh%2FN%2FBTRrjGelZLiPanx9Oqc0R0lgD05u8So4AvHzogbnWU9HKfrZj&X-Amz-Signature=d8f46a83084c16328ef5e29f004d4e12e8a8374ef21f7c7b529dbaf038a01970&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645GY5NBN%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T080903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1t6018aWe0QFlu4GCbfdlqGkxMH0ck0JIM%2Bplu%2B4%2FVQIhALNf5AaWG4bCz%2FL8olWmMVwtXK4hquCOh3bLv8PeHiqVKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FMHokFJOVJlYsXaUq3AN0PGzbk89u50Ns8h0JA3r3L8PZjrOgiUjzr0TwHk5Bt00otE1Yted%2FP4SaN5%2BAwRq7sqB55uRZ9GyL9dMxCBIe%2FtEw4vQ%2BP3xkeEcsw69nOpXa0IyfXUsxK%2F6v2F1nZkDhLaVJDgkV4xrewUKO%2F%2Fl%2FHsjAxVAb4ZSNi6IluQ%2FyaYXS0f0dGUF7jkPWi4UOAjwi88F8ZXiaIr4Ui37nNCNq4qyOnvoZQTdN8WZMV24i7g6QVgqEr2uOCbqjTZoxVewl3XaB1G%2BND%2FQB3yvz5UOZxvAtVaHzKtQ774nYz2qHpA8IkqA0qYyIbmbcLnxpcB0CpTtCz2hbOzbE9es7%2BZUsavo3jNNgsEVX2VMWK2J3bzIgg5anqSbbvdSkDIlWS5pNoSodCrNPlSzaENOP5FBs3SSDe%2BIf5eIm2XrRc6VM7yMXTtPsL39TbLmox7xPmr1Y3NsHgkej386KJqPzPWWbQxhNHx%2BmoiK5BA%2BRf4iVEdodiW3OnRxoJo6HcGk0Q7z5KYReHzwENnQsB8v3deRqOGbN6kn8hzqCbKq15znqDqub6n0OTrZAqB4yemqGb5tNfzcudhP%2BQD5a4lc0pTUTwYJqPojDXH6uiulyosJSC8L2Rumja5y5SBqQhzC%2Fv6C9BjqkAXSAW9fs7d7NGSVm0UaV9atSFiFbviCcib3zj3kH789AJTACmJ4l2ecpsdPkq2ERSDmkwhzfUl4KlTL0MzNCKdctkZqNjE4xUAMwAzSTfHP3j09y1sliVTVMTq4nEKySVotYO%2BYoqpoLYzWHxGX58JG6JjzAalzhvQRUxPeh%2FN%2FBTRrjGelZLiPanx9Oqc0R0lgD05u8So4AvHzogbnWU9HKfrZj&X-Amz-Signature=8dac268fa1023925abe1888eaa0457e2dfd1fe558241fcdbff6b28fdc5d983bf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645GY5NBN%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T080903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1t6018aWe0QFlu4GCbfdlqGkxMH0ck0JIM%2Bplu%2B4%2FVQIhALNf5AaWG4bCz%2FL8olWmMVwtXK4hquCOh3bLv8PeHiqVKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FMHokFJOVJlYsXaUq3AN0PGzbk89u50Ns8h0JA3r3L8PZjrOgiUjzr0TwHk5Bt00otE1Yted%2FP4SaN5%2BAwRq7sqB55uRZ9GyL9dMxCBIe%2FtEw4vQ%2BP3xkeEcsw69nOpXa0IyfXUsxK%2F6v2F1nZkDhLaVJDgkV4xrewUKO%2F%2Fl%2FHsjAxVAb4ZSNi6IluQ%2FyaYXS0f0dGUF7jkPWi4UOAjwi88F8ZXiaIr4Ui37nNCNq4qyOnvoZQTdN8WZMV24i7g6QVgqEr2uOCbqjTZoxVewl3XaB1G%2BND%2FQB3yvz5UOZxvAtVaHzKtQ774nYz2qHpA8IkqA0qYyIbmbcLnxpcB0CpTtCz2hbOzbE9es7%2BZUsavo3jNNgsEVX2VMWK2J3bzIgg5anqSbbvdSkDIlWS5pNoSodCrNPlSzaENOP5FBs3SSDe%2BIf5eIm2XrRc6VM7yMXTtPsL39TbLmox7xPmr1Y3NsHgkej386KJqPzPWWbQxhNHx%2BmoiK5BA%2BRf4iVEdodiW3OnRxoJo6HcGk0Q7z5KYReHzwENnQsB8v3deRqOGbN6kn8hzqCbKq15znqDqub6n0OTrZAqB4yemqGb5tNfzcudhP%2BQD5a4lc0pTUTwYJqPojDXH6uiulyosJSC8L2Rumja5y5SBqQhzC%2Fv6C9BjqkAXSAW9fs7d7NGSVm0UaV9atSFiFbviCcib3zj3kH789AJTACmJ4l2ecpsdPkq2ERSDmkwhzfUl4KlTL0MzNCKdctkZqNjE4xUAMwAzSTfHP3j09y1sliVTVMTq4nEKySVotYO%2BYoqpoLYzWHxGX58JG6JjzAalzhvQRUxPeh%2FN%2FBTRrjGelZLiPanx9Oqc0R0lgD05u8So4AvHzogbnWU9HKfrZj&X-Amz-Signature=084bd3bad7d4cf3fa0a9e28dd0fda0eaaafa3e1af8bc8585f3ffa0e763196aa6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645GY5NBN%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T080903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1t6018aWe0QFlu4GCbfdlqGkxMH0ck0JIM%2Bplu%2B4%2FVQIhALNf5AaWG4bCz%2FL8olWmMVwtXK4hquCOh3bLv8PeHiqVKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FMHokFJOVJlYsXaUq3AN0PGzbk89u50Ns8h0JA3r3L8PZjrOgiUjzr0TwHk5Bt00otE1Yted%2FP4SaN5%2BAwRq7sqB55uRZ9GyL9dMxCBIe%2FtEw4vQ%2BP3xkeEcsw69nOpXa0IyfXUsxK%2F6v2F1nZkDhLaVJDgkV4xrewUKO%2F%2Fl%2FHsjAxVAb4ZSNi6IluQ%2FyaYXS0f0dGUF7jkPWi4UOAjwi88F8ZXiaIr4Ui37nNCNq4qyOnvoZQTdN8WZMV24i7g6QVgqEr2uOCbqjTZoxVewl3XaB1G%2BND%2FQB3yvz5UOZxvAtVaHzKtQ774nYz2qHpA8IkqA0qYyIbmbcLnxpcB0CpTtCz2hbOzbE9es7%2BZUsavo3jNNgsEVX2VMWK2J3bzIgg5anqSbbvdSkDIlWS5pNoSodCrNPlSzaENOP5FBs3SSDe%2BIf5eIm2XrRc6VM7yMXTtPsL39TbLmox7xPmr1Y3NsHgkej386KJqPzPWWbQxhNHx%2BmoiK5BA%2BRf4iVEdodiW3OnRxoJo6HcGk0Q7z5KYReHzwENnQsB8v3deRqOGbN6kn8hzqCbKq15znqDqub6n0OTrZAqB4yemqGb5tNfzcudhP%2BQD5a4lc0pTUTwYJqPojDXH6uiulyosJSC8L2Rumja5y5SBqQhzC%2Fv6C9BjqkAXSAW9fs7d7NGSVm0UaV9atSFiFbviCcib3zj3kH789AJTACmJ4l2ecpsdPkq2ERSDmkwhzfUl4KlTL0MzNCKdctkZqNjE4xUAMwAzSTfHP3j09y1sliVTVMTq4nEKySVotYO%2BYoqpoLYzWHxGX58JG6JjzAalzhvQRUxPeh%2FN%2FBTRrjGelZLiPanx9Oqc0R0lgD05u8So4AvHzogbnWU9HKfrZj&X-Amz-Signature=87be3562a9cd60b697b01a3eff78c253e8a1bb31cdf285036887dfde7bed5040&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645GY5NBN%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T080903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1t6018aWe0QFlu4GCbfdlqGkxMH0ck0JIM%2Bplu%2B4%2FVQIhALNf5AaWG4bCz%2FL8olWmMVwtXK4hquCOh3bLv8PeHiqVKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FMHokFJOVJlYsXaUq3AN0PGzbk89u50Ns8h0JA3r3L8PZjrOgiUjzr0TwHk5Bt00otE1Yted%2FP4SaN5%2BAwRq7sqB55uRZ9GyL9dMxCBIe%2FtEw4vQ%2BP3xkeEcsw69nOpXa0IyfXUsxK%2F6v2F1nZkDhLaVJDgkV4xrewUKO%2F%2Fl%2FHsjAxVAb4ZSNi6IluQ%2FyaYXS0f0dGUF7jkPWi4UOAjwi88F8ZXiaIr4Ui37nNCNq4qyOnvoZQTdN8WZMV24i7g6QVgqEr2uOCbqjTZoxVewl3XaB1G%2BND%2FQB3yvz5UOZxvAtVaHzKtQ774nYz2qHpA8IkqA0qYyIbmbcLnxpcB0CpTtCz2hbOzbE9es7%2BZUsavo3jNNgsEVX2VMWK2J3bzIgg5anqSbbvdSkDIlWS5pNoSodCrNPlSzaENOP5FBs3SSDe%2BIf5eIm2XrRc6VM7yMXTtPsL39TbLmox7xPmr1Y3NsHgkej386KJqPzPWWbQxhNHx%2BmoiK5BA%2BRf4iVEdodiW3OnRxoJo6HcGk0Q7z5KYReHzwENnQsB8v3deRqOGbN6kn8hzqCbKq15znqDqub6n0OTrZAqB4yemqGb5tNfzcudhP%2BQD5a4lc0pTUTwYJqPojDXH6uiulyosJSC8L2Rumja5y5SBqQhzC%2Fv6C9BjqkAXSAW9fs7d7NGSVm0UaV9atSFiFbviCcib3zj3kH789AJTACmJ4l2ecpsdPkq2ERSDmkwhzfUl4KlTL0MzNCKdctkZqNjE4xUAMwAzSTfHP3j09y1sliVTVMTq4nEKySVotYO%2BYoqpoLYzWHxGX58JG6JjzAalzhvQRUxPeh%2FN%2FBTRrjGelZLiPanx9Oqc0R0lgD05u8So4AvHzogbnWU9HKfrZj&X-Amz-Signature=3d79a391a4f878e777d6b29bdfc5c1a7bd97dbd4d68685b4563c2160b355c78f&X-Amz-SignedHeaders=host&x-id=GetObject)
