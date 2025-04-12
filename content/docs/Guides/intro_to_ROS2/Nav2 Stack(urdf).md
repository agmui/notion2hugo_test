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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JYWS2UO%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIAcpFGaZodWtTiHAUhw6mZQiu7NCXrtQUcp%2FaNXisfdgAiA7tItEHfTcuh1PShUEbrJL%2FJfavKLMVDpT2eWuSteXmiqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJJSJpCZyFPmQAeUVKtwD2EsmsPodRCfoZfyeNYxVS3QnSgykxjfzAX0D4vitlf3HMOJM8vtQjvxbWsEGiLU78Zmmz4%2F436xyPokt4TdzmEdZwzj%2BZRjGksz%2BvzPKjOsgVRvti%2BeG2VSvU8M7NOmfDwhgy1ca%2FIWgpXh85OU5Y2c5iY1ZIbhGBZg2xfdjmEMmVzJg8SHIUsSrjJw74bqVWa0ObTAfSAsMA4HsX66InqMErg%2FzK6kULIOWy%2B1P6DC0M6DcRv6nmZSN23S%2F40SQwxF9DXSBiJYKYhXELkZaTAw0rHR7ZMo1KCwLcwj3bneJrGS0ewQ6aVk9PdW91HhoHulI9BxrW11RKrLm59tiDQbWBBIoVltz8uTv%2FridfpRMp5yfKZZ0n%2BaWNc1ap0TsX7kgFW4FdBqaYnO4ht8tVbRTbOYa1b42gLCobkiP670zyFh8db%2FEBuBpVkTsiP0pmCcZGmSK9yIElXUSxvs5zyAWsOTPwg0riH8GspOlF0lXLofMXEZtuVGxxmW1uB1fnI4ReyWuyf42nZFvatc9dU53RcnTuii4tC8nZiBWsBSGxdX7WUqOJQT%2Bc1Xi19dhWNZ7KMQuS%2FpePKW782VsBQwheeCPeqo0vOZ6ew5vCPhP8yD5gU%2F9t4IPfu0w3c3pvwY6pgFaKWD2koGUxG6LYvphqSsUyJb6dk5bxoNT6BQHeaWYCEfAc3lLTo7XdSM2P%2F4WNCLYTK%2F0JBVX3siO%2FXuBaRjtCOM75KuuvMhIhlLVmip1IEWHdEZZpBU8WzqkalSnS%2FQOOZzwImyJfZvXCsAq%2FLELBo6QajRQtjQz%2Bxo9Xl9VdL5caOS2e2EebkDlimKn9jhKfUmf7nuLzA7NExH5XyVu9s02dEKT&X-Amz-Signature=7f50167cbafd2da62c63d3eaf6b101eca02b915b73740da03008a028a4ccedd9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JYWS2UO%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIAcpFGaZodWtTiHAUhw6mZQiu7NCXrtQUcp%2FaNXisfdgAiA7tItEHfTcuh1PShUEbrJL%2FJfavKLMVDpT2eWuSteXmiqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJJSJpCZyFPmQAeUVKtwD2EsmsPodRCfoZfyeNYxVS3QnSgykxjfzAX0D4vitlf3HMOJM8vtQjvxbWsEGiLU78Zmmz4%2F436xyPokt4TdzmEdZwzj%2BZRjGksz%2BvzPKjOsgVRvti%2BeG2VSvU8M7NOmfDwhgy1ca%2FIWgpXh85OU5Y2c5iY1ZIbhGBZg2xfdjmEMmVzJg8SHIUsSrjJw74bqVWa0ObTAfSAsMA4HsX66InqMErg%2FzK6kULIOWy%2B1P6DC0M6DcRv6nmZSN23S%2F40SQwxF9DXSBiJYKYhXELkZaTAw0rHR7ZMo1KCwLcwj3bneJrGS0ewQ6aVk9PdW91HhoHulI9BxrW11RKrLm59tiDQbWBBIoVltz8uTv%2FridfpRMp5yfKZZ0n%2BaWNc1ap0TsX7kgFW4FdBqaYnO4ht8tVbRTbOYa1b42gLCobkiP670zyFh8db%2FEBuBpVkTsiP0pmCcZGmSK9yIElXUSxvs5zyAWsOTPwg0riH8GspOlF0lXLofMXEZtuVGxxmW1uB1fnI4ReyWuyf42nZFvatc9dU53RcnTuii4tC8nZiBWsBSGxdX7WUqOJQT%2Bc1Xi19dhWNZ7KMQuS%2FpePKW782VsBQwheeCPeqo0vOZ6ew5vCPhP8yD5gU%2F9t4IPfu0w3c3pvwY6pgFaKWD2koGUxG6LYvphqSsUyJb6dk5bxoNT6BQHeaWYCEfAc3lLTo7XdSM2P%2F4WNCLYTK%2F0JBVX3siO%2FXuBaRjtCOM75KuuvMhIhlLVmip1IEWHdEZZpBU8WzqkalSnS%2FQOOZzwImyJfZvXCsAq%2FLELBo6QajRQtjQz%2Bxo9Xl9VdL5caOS2e2EebkDlimKn9jhKfUmf7nuLzA7NExH5XyVu9s02dEKT&X-Amz-Signature=abd50d8d36cfc6a15453eb8e1a8d144e5fd2ff47dae6697377ec27d878557a58&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JYWS2UO%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIAcpFGaZodWtTiHAUhw6mZQiu7NCXrtQUcp%2FaNXisfdgAiA7tItEHfTcuh1PShUEbrJL%2FJfavKLMVDpT2eWuSteXmiqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJJSJpCZyFPmQAeUVKtwD2EsmsPodRCfoZfyeNYxVS3QnSgykxjfzAX0D4vitlf3HMOJM8vtQjvxbWsEGiLU78Zmmz4%2F436xyPokt4TdzmEdZwzj%2BZRjGksz%2BvzPKjOsgVRvti%2BeG2VSvU8M7NOmfDwhgy1ca%2FIWgpXh85OU5Y2c5iY1ZIbhGBZg2xfdjmEMmVzJg8SHIUsSrjJw74bqVWa0ObTAfSAsMA4HsX66InqMErg%2FzK6kULIOWy%2B1P6DC0M6DcRv6nmZSN23S%2F40SQwxF9DXSBiJYKYhXELkZaTAw0rHR7ZMo1KCwLcwj3bneJrGS0ewQ6aVk9PdW91HhoHulI9BxrW11RKrLm59tiDQbWBBIoVltz8uTv%2FridfpRMp5yfKZZ0n%2BaWNc1ap0TsX7kgFW4FdBqaYnO4ht8tVbRTbOYa1b42gLCobkiP670zyFh8db%2FEBuBpVkTsiP0pmCcZGmSK9yIElXUSxvs5zyAWsOTPwg0riH8GspOlF0lXLofMXEZtuVGxxmW1uB1fnI4ReyWuyf42nZFvatc9dU53RcnTuii4tC8nZiBWsBSGxdX7WUqOJQT%2Bc1Xi19dhWNZ7KMQuS%2FpePKW782VsBQwheeCPeqo0vOZ6ew5vCPhP8yD5gU%2F9t4IPfu0w3c3pvwY6pgFaKWD2koGUxG6LYvphqSsUyJb6dk5bxoNT6BQHeaWYCEfAc3lLTo7XdSM2P%2F4WNCLYTK%2F0JBVX3siO%2FXuBaRjtCOM75KuuvMhIhlLVmip1IEWHdEZZpBU8WzqkalSnS%2FQOOZzwImyJfZvXCsAq%2FLELBo6QajRQtjQz%2Bxo9Xl9VdL5caOS2e2EebkDlimKn9jhKfUmf7nuLzA7NExH5XyVu9s02dEKT&X-Amz-Signature=fbf8bb39596f0695169c2df381188d95caf8e8eea30623e6d46144c63de67df9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JYWS2UO%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIAcpFGaZodWtTiHAUhw6mZQiu7NCXrtQUcp%2FaNXisfdgAiA7tItEHfTcuh1PShUEbrJL%2FJfavKLMVDpT2eWuSteXmiqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJJSJpCZyFPmQAeUVKtwD2EsmsPodRCfoZfyeNYxVS3QnSgykxjfzAX0D4vitlf3HMOJM8vtQjvxbWsEGiLU78Zmmz4%2F436xyPokt4TdzmEdZwzj%2BZRjGksz%2BvzPKjOsgVRvti%2BeG2VSvU8M7NOmfDwhgy1ca%2FIWgpXh85OU5Y2c5iY1ZIbhGBZg2xfdjmEMmVzJg8SHIUsSrjJw74bqVWa0ObTAfSAsMA4HsX66InqMErg%2FzK6kULIOWy%2B1P6DC0M6DcRv6nmZSN23S%2F40SQwxF9DXSBiJYKYhXELkZaTAw0rHR7ZMo1KCwLcwj3bneJrGS0ewQ6aVk9PdW91HhoHulI9BxrW11RKrLm59tiDQbWBBIoVltz8uTv%2FridfpRMp5yfKZZ0n%2BaWNc1ap0TsX7kgFW4FdBqaYnO4ht8tVbRTbOYa1b42gLCobkiP670zyFh8db%2FEBuBpVkTsiP0pmCcZGmSK9yIElXUSxvs5zyAWsOTPwg0riH8GspOlF0lXLofMXEZtuVGxxmW1uB1fnI4ReyWuyf42nZFvatc9dU53RcnTuii4tC8nZiBWsBSGxdX7WUqOJQT%2Bc1Xi19dhWNZ7KMQuS%2FpePKW782VsBQwheeCPeqo0vOZ6ew5vCPhP8yD5gU%2F9t4IPfu0w3c3pvwY6pgFaKWD2koGUxG6LYvphqSsUyJb6dk5bxoNT6BQHeaWYCEfAc3lLTo7XdSM2P%2F4WNCLYTK%2F0JBVX3siO%2FXuBaRjtCOM75KuuvMhIhlLVmip1IEWHdEZZpBU8WzqkalSnS%2FQOOZzwImyJfZvXCsAq%2FLELBo6QajRQtjQz%2Bxo9Xl9VdL5caOS2e2EebkDlimKn9jhKfUmf7nuLzA7NExH5XyVu9s02dEKT&X-Amz-Signature=21c7e149b4e05a3cffc0d95a828d8bbe508c387ea1e2eec301847738ee72324d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JYWS2UO%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIAcpFGaZodWtTiHAUhw6mZQiu7NCXrtQUcp%2FaNXisfdgAiA7tItEHfTcuh1PShUEbrJL%2FJfavKLMVDpT2eWuSteXmiqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJJSJpCZyFPmQAeUVKtwD2EsmsPodRCfoZfyeNYxVS3QnSgykxjfzAX0D4vitlf3HMOJM8vtQjvxbWsEGiLU78Zmmz4%2F436xyPokt4TdzmEdZwzj%2BZRjGksz%2BvzPKjOsgVRvti%2BeG2VSvU8M7NOmfDwhgy1ca%2FIWgpXh85OU5Y2c5iY1ZIbhGBZg2xfdjmEMmVzJg8SHIUsSrjJw74bqVWa0ObTAfSAsMA4HsX66InqMErg%2FzK6kULIOWy%2B1P6DC0M6DcRv6nmZSN23S%2F40SQwxF9DXSBiJYKYhXELkZaTAw0rHR7ZMo1KCwLcwj3bneJrGS0ewQ6aVk9PdW91HhoHulI9BxrW11RKrLm59tiDQbWBBIoVltz8uTv%2FridfpRMp5yfKZZ0n%2BaWNc1ap0TsX7kgFW4FdBqaYnO4ht8tVbRTbOYa1b42gLCobkiP670zyFh8db%2FEBuBpVkTsiP0pmCcZGmSK9yIElXUSxvs5zyAWsOTPwg0riH8GspOlF0lXLofMXEZtuVGxxmW1uB1fnI4ReyWuyf42nZFvatc9dU53RcnTuii4tC8nZiBWsBSGxdX7WUqOJQT%2Bc1Xi19dhWNZ7KMQuS%2FpePKW782VsBQwheeCPeqo0vOZ6ew5vCPhP8yD5gU%2F9t4IPfu0w3c3pvwY6pgFaKWD2koGUxG6LYvphqSsUyJb6dk5bxoNT6BQHeaWYCEfAc3lLTo7XdSM2P%2F4WNCLYTK%2F0JBVX3siO%2FXuBaRjtCOM75KuuvMhIhlLVmip1IEWHdEZZpBU8WzqkalSnS%2FQOOZzwImyJfZvXCsAq%2FLELBo6QajRQtjQz%2Bxo9Xl9VdL5caOS2e2EebkDlimKn9jhKfUmf7nuLzA7NExH5XyVu9s02dEKT&X-Amz-Signature=fee738152837a4a5d8f2970cc72e837d7decb6a3c12baf9102450d521d4f0a24&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JYWS2UO%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T140154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIAcpFGaZodWtTiHAUhw6mZQiu7NCXrtQUcp%2FaNXisfdgAiA7tItEHfTcuh1PShUEbrJL%2FJfavKLMVDpT2eWuSteXmiqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJJSJpCZyFPmQAeUVKtwD2EsmsPodRCfoZfyeNYxVS3QnSgykxjfzAX0D4vitlf3HMOJM8vtQjvxbWsEGiLU78Zmmz4%2F436xyPokt4TdzmEdZwzj%2BZRjGksz%2BvzPKjOsgVRvti%2BeG2VSvU8M7NOmfDwhgy1ca%2FIWgpXh85OU5Y2c5iY1ZIbhGBZg2xfdjmEMmVzJg8SHIUsSrjJw74bqVWa0ObTAfSAsMA4HsX66InqMErg%2FzK6kULIOWy%2B1P6DC0M6DcRv6nmZSN23S%2F40SQwxF9DXSBiJYKYhXELkZaTAw0rHR7ZMo1KCwLcwj3bneJrGS0ewQ6aVk9PdW91HhoHulI9BxrW11RKrLm59tiDQbWBBIoVltz8uTv%2FridfpRMp5yfKZZ0n%2BaWNc1ap0TsX7kgFW4FdBqaYnO4ht8tVbRTbOYa1b42gLCobkiP670zyFh8db%2FEBuBpVkTsiP0pmCcZGmSK9yIElXUSxvs5zyAWsOTPwg0riH8GspOlF0lXLofMXEZtuVGxxmW1uB1fnI4ReyWuyf42nZFvatc9dU53RcnTuii4tC8nZiBWsBSGxdX7WUqOJQT%2Bc1Xi19dhWNZ7KMQuS%2FpePKW782VsBQwheeCPeqo0vOZ6ew5vCPhP8yD5gU%2F9t4IPfu0w3c3pvwY6pgFaKWD2koGUxG6LYvphqSsUyJb6dk5bxoNT6BQHeaWYCEfAc3lLTo7XdSM2P%2F4WNCLYTK%2F0JBVX3siO%2FXuBaRjtCOM75KuuvMhIhlLVmip1IEWHdEZZpBU8WzqkalSnS%2FQOOZzwImyJfZvXCsAq%2FLELBo6QajRQtjQz%2Bxo9Xl9VdL5caOS2e2EebkDlimKn9jhKfUmf7nuLzA7NExH5XyVu9s02dEKT&X-Amz-Signature=13e25eb3f5d7bd72e406101a5afe7f38da4b33e11d5fef266bcc6cfd26b6a672&X-Amz-SignedHeaders=host&x-id=GetObject)
