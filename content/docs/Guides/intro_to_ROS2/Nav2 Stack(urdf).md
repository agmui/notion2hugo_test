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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHL4W2GD%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T131553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwG1ww%2FtxquJWnnvv6y%2FLBuWXMkp1smBdytUUVhHH2uwIhAI7txVwwL%2BpyfM%2FRm2cZKYvee4Scifqt5AvIXrTmoN9hKv8DCBYQABoMNjM3NDIzMTgzODA1IgwQmkc4txYmhREdE%2BUq3AN2gBT9gKUT7tK4IZFjv3ENjXCvWpGFANw%2BtwAU%2FqQdDgc25sh4vz42vDekOGYESUlrm8CqtC66T%2BIX2nfxcknSy4SiiUQ32UpTiQY7wUlV4zgEPknf6X2TZbv66P%2FRMPZm2lQf9vd%2FuDwy4Qe3cEdF5%2Fsg7XEG38mZJXVy5Q1wfpzgou4gZ1ArRiOfCAWO3wFohAOtfIphkww1q%2F7Am5MmfdFBqzCW9TDAcfQY8zp2zCeE4grtpr6yynxXcCXENts7L0tAexAd5STI1rMBxG2hjDHUvhjmysnw%2BLCQbZZzA7DxxRz8Z%2BKflRgy0m4nob9KbTHk6171%2FpCD4KU2ERQq1eOsKsTIYcHmNU6yFxvBhCPd9rZJ8XAcxTM%2BsfkUHyKBk7x%2BucZGoM4Mfh%2FSnoOV9wqYFfBr2qjWcqyjWswyV3vSxZSGg56nhs7pqwQbZnLwnIdY1ljCUAiDN4CeYcqxuJqTx7RCc6AnUg9oOlTJEHVT7e9NtyMfCq0cHXC8wuTsy0P3axaYZuBh85tNvmJMU7E3Hq%2BFL3F3lFw7HzfbUAn5nZBxpf111dTVyFXGTs%2FKN6YsbO5P9%2BQETO8Ic74o9KRuUt3jQVzWT7qpddZ415OYbKpUs8HmyWyX1TCN3re9BjqkAce%2FDcFASwIELCjg5leSoqAHfYoXAzv%2BHCtCnyQx82yX4Pi69VawWW5UB0HKS3jZAkxY4K9eyEbyBy1v341xKCJt22jDSlK1u8pZjouDApQnJwYvz6NzF03qgP4mntzELnVAfSsfk2gk6oVOKHOlnMpRrMTkcVyerbzXu4YBYZzRlSND%2BgDDp3Z3OAKNJCWg9F0SXowUEBWF3eVQa%2FYtwvi%2FB4mM&X-Amz-Signature=efe8088350f6afaeb29466b4ccf3b8139860d82232f19e0c0619cecaefd84fc0&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHL4W2GD%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T131553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwG1ww%2FtxquJWnnvv6y%2FLBuWXMkp1smBdytUUVhHH2uwIhAI7txVwwL%2BpyfM%2FRm2cZKYvee4Scifqt5AvIXrTmoN9hKv8DCBYQABoMNjM3NDIzMTgzODA1IgwQmkc4txYmhREdE%2BUq3AN2gBT9gKUT7tK4IZFjv3ENjXCvWpGFANw%2BtwAU%2FqQdDgc25sh4vz42vDekOGYESUlrm8CqtC66T%2BIX2nfxcknSy4SiiUQ32UpTiQY7wUlV4zgEPknf6X2TZbv66P%2FRMPZm2lQf9vd%2FuDwy4Qe3cEdF5%2Fsg7XEG38mZJXVy5Q1wfpzgou4gZ1ArRiOfCAWO3wFohAOtfIphkww1q%2F7Am5MmfdFBqzCW9TDAcfQY8zp2zCeE4grtpr6yynxXcCXENts7L0tAexAd5STI1rMBxG2hjDHUvhjmysnw%2BLCQbZZzA7DxxRz8Z%2BKflRgy0m4nob9KbTHk6171%2FpCD4KU2ERQq1eOsKsTIYcHmNU6yFxvBhCPd9rZJ8XAcxTM%2BsfkUHyKBk7x%2BucZGoM4Mfh%2FSnoOV9wqYFfBr2qjWcqyjWswyV3vSxZSGg56nhs7pqwQbZnLwnIdY1ljCUAiDN4CeYcqxuJqTx7RCc6AnUg9oOlTJEHVT7e9NtyMfCq0cHXC8wuTsy0P3axaYZuBh85tNvmJMU7E3Hq%2BFL3F3lFw7HzfbUAn5nZBxpf111dTVyFXGTs%2FKN6YsbO5P9%2BQETO8Ic74o9KRuUt3jQVzWT7qpddZ415OYbKpUs8HmyWyX1TCN3re9BjqkAce%2FDcFASwIELCjg5leSoqAHfYoXAzv%2BHCtCnyQx82yX4Pi69VawWW5UB0HKS3jZAkxY4K9eyEbyBy1v341xKCJt22jDSlK1u8pZjouDApQnJwYvz6NzF03qgP4mntzELnVAfSsfk2gk6oVOKHOlnMpRrMTkcVyerbzXu4YBYZzRlSND%2BgDDp3Z3OAKNJCWg9F0SXowUEBWF3eVQa%2FYtwvi%2FB4mM&X-Amz-Signature=ceceede6dd702d1393f73f9accce55beeb7b1497d0082f95b78b9720ca37902c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHL4W2GD%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T131553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwG1ww%2FtxquJWnnvv6y%2FLBuWXMkp1smBdytUUVhHH2uwIhAI7txVwwL%2BpyfM%2FRm2cZKYvee4Scifqt5AvIXrTmoN9hKv8DCBYQABoMNjM3NDIzMTgzODA1IgwQmkc4txYmhREdE%2BUq3AN2gBT9gKUT7tK4IZFjv3ENjXCvWpGFANw%2BtwAU%2FqQdDgc25sh4vz42vDekOGYESUlrm8CqtC66T%2BIX2nfxcknSy4SiiUQ32UpTiQY7wUlV4zgEPknf6X2TZbv66P%2FRMPZm2lQf9vd%2FuDwy4Qe3cEdF5%2Fsg7XEG38mZJXVy5Q1wfpzgou4gZ1ArRiOfCAWO3wFohAOtfIphkww1q%2F7Am5MmfdFBqzCW9TDAcfQY8zp2zCeE4grtpr6yynxXcCXENts7L0tAexAd5STI1rMBxG2hjDHUvhjmysnw%2BLCQbZZzA7DxxRz8Z%2BKflRgy0m4nob9KbTHk6171%2FpCD4KU2ERQq1eOsKsTIYcHmNU6yFxvBhCPd9rZJ8XAcxTM%2BsfkUHyKBk7x%2BucZGoM4Mfh%2FSnoOV9wqYFfBr2qjWcqyjWswyV3vSxZSGg56nhs7pqwQbZnLwnIdY1ljCUAiDN4CeYcqxuJqTx7RCc6AnUg9oOlTJEHVT7e9NtyMfCq0cHXC8wuTsy0P3axaYZuBh85tNvmJMU7E3Hq%2BFL3F3lFw7HzfbUAn5nZBxpf111dTVyFXGTs%2FKN6YsbO5P9%2BQETO8Ic74o9KRuUt3jQVzWT7qpddZ415OYbKpUs8HmyWyX1TCN3re9BjqkAce%2FDcFASwIELCjg5leSoqAHfYoXAzv%2BHCtCnyQx82yX4Pi69VawWW5UB0HKS3jZAkxY4K9eyEbyBy1v341xKCJt22jDSlK1u8pZjouDApQnJwYvz6NzF03qgP4mntzELnVAfSsfk2gk6oVOKHOlnMpRrMTkcVyerbzXu4YBYZzRlSND%2BgDDp3Z3OAKNJCWg9F0SXowUEBWF3eVQa%2FYtwvi%2FB4mM&X-Amz-Signature=5bf290c83a3d271d89e55a9fdc5ade8248a8a44b884d8d0428a8345425080696&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHL4W2GD%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T131553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwG1ww%2FtxquJWnnvv6y%2FLBuWXMkp1smBdytUUVhHH2uwIhAI7txVwwL%2BpyfM%2FRm2cZKYvee4Scifqt5AvIXrTmoN9hKv8DCBYQABoMNjM3NDIzMTgzODA1IgwQmkc4txYmhREdE%2BUq3AN2gBT9gKUT7tK4IZFjv3ENjXCvWpGFANw%2BtwAU%2FqQdDgc25sh4vz42vDekOGYESUlrm8CqtC66T%2BIX2nfxcknSy4SiiUQ32UpTiQY7wUlV4zgEPknf6X2TZbv66P%2FRMPZm2lQf9vd%2FuDwy4Qe3cEdF5%2Fsg7XEG38mZJXVy5Q1wfpzgou4gZ1ArRiOfCAWO3wFohAOtfIphkww1q%2F7Am5MmfdFBqzCW9TDAcfQY8zp2zCeE4grtpr6yynxXcCXENts7L0tAexAd5STI1rMBxG2hjDHUvhjmysnw%2BLCQbZZzA7DxxRz8Z%2BKflRgy0m4nob9KbTHk6171%2FpCD4KU2ERQq1eOsKsTIYcHmNU6yFxvBhCPd9rZJ8XAcxTM%2BsfkUHyKBk7x%2BucZGoM4Mfh%2FSnoOV9wqYFfBr2qjWcqyjWswyV3vSxZSGg56nhs7pqwQbZnLwnIdY1ljCUAiDN4CeYcqxuJqTx7RCc6AnUg9oOlTJEHVT7e9NtyMfCq0cHXC8wuTsy0P3axaYZuBh85tNvmJMU7E3Hq%2BFL3F3lFw7HzfbUAn5nZBxpf111dTVyFXGTs%2FKN6YsbO5P9%2BQETO8Ic74o9KRuUt3jQVzWT7qpddZ415OYbKpUs8HmyWyX1TCN3re9BjqkAce%2FDcFASwIELCjg5leSoqAHfYoXAzv%2BHCtCnyQx82yX4Pi69VawWW5UB0HKS3jZAkxY4K9eyEbyBy1v341xKCJt22jDSlK1u8pZjouDApQnJwYvz6NzF03qgP4mntzELnVAfSsfk2gk6oVOKHOlnMpRrMTkcVyerbzXu4YBYZzRlSND%2BgDDp3Z3OAKNJCWg9F0SXowUEBWF3eVQa%2FYtwvi%2FB4mM&X-Amz-Signature=7253b1a1bfbc6cbc07901d4757431fe8940b94c850239b638b0c579a69048d3b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHL4W2GD%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T131553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwG1ww%2FtxquJWnnvv6y%2FLBuWXMkp1smBdytUUVhHH2uwIhAI7txVwwL%2BpyfM%2FRm2cZKYvee4Scifqt5AvIXrTmoN9hKv8DCBYQABoMNjM3NDIzMTgzODA1IgwQmkc4txYmhREdE%2BUq3AN2gBT9gKUT7tK4IZFjv3ENjXCvWpGFANw%2BtwAU%2FqQdDgc25sh4vz42vDekOGYESUlrm8CqtC66T%2BIX2nfxcknSy4SiiUQ32UpTiQY7wUlV4zgEPknf6X2TZbv66P%2FRMPZm2lQf9vd%2FuDwy4Qe3cEdF5%2Fsg7XEG38mZJXVy5Q1wfpzgou4gZ1ArRiOfCAWO3wFohAOtfIphkww1q%2F7Am5MmfdFBqzCW9TDAcfQY8zp2zCeE4grtpr6yynxXcCXENts7L0tAexAd5STI1rMBxG2hjDHUvhjmysnw%2BLCQbZZzA7DxxRz8Z%2BKflRgy0m4nob9KbTHk6171%2FpCD4KU2ERQq1eOsKsTIYcHmNU6yFxvBhCPd9rZJ8XAcxTM%2BsfkUHyKBk7x%2BucZGoM4Mfh%2FSnoOV9wqYFfBr2qjWcqyjWswyV3vSxZSGg56nhs7pqwQbZnLwnIdY1ljCUAiDN4CeYcqxuJqTx7RCc6AnUg9oOlTJEHVT7e9NtyMfCq0cHXC8wuTsy0P3axaYZuBh85tNvmJMU7E3Hq%2BFL3F3lFw7HzfbUAn5nZBxpf111dTVyFXGTs%2FKN6YsbO5P9%2BQETO8Ic74o9KRuUt3jQVzWT7qpddZ415OYbKpUs8HmyWyX1TCN3re9BjqkAce%2FDcFASwIELCjg5leSoqAHfYoXAzv%2BHCtCnyQx82yX4Pi69VawWW5UB0HKS3jZAkxY4K9eyEbyBy1v341xKCJt22jDSlK1u8pZjouDApQnJwYvz6NzF03qgP4mntzELnVAfSsfk2gk6oVOKHOlnMpRrMTkcVyerbzXu4YBYZzRlSND%2BgDDp3Z3OAKNJCWg9F0SXowUEBWF3eVQa%2FYtwvi%2FB4mM&X-Amz-Signature=8429f6c07220c8fb6a5a6989f8ebf5765ddffc292780816e01a6adde4bb21cf5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHL4W2GD%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T131553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwG1ww%2FtxquJWnnvv6y%2FLBuWXMkp1smBdytUUVhHH2uwIhAI7txVwwL%2BpyfM%2FRm2cZKYvee4Scifqt5AvIXrTmoN9hKv8DCBYQABoMNjM3NDIzMTgzODA1IgwQmkc4txYmhREdE%2BUq3AN2gBT9gKUT7tK4IZFjv3ENjXCvWpGFANw%2BtwAU%2FqQdDgc25sh4vz42vDekOGYESUlrm8CqtC66T%2BIX2nfxcknSy4SiiUQ32UpTiQY7wUlV4zgEPknf6X2TZbv66P%2FRMPZm2lQf9vd%2FuDwy4Qe3cEdF5%2Fsg7XEG38mZJXVy5Q1wfpzgou4gZ1ArRiOfCAWO3wFohAOtfIphkww1q%2F7Am5MmfdFBqzCW9TDAcfQY8zp2zCeE4grtpr6yynxXcCXENts7L0tAexAd5STI1rMBxG2hjDHUvhjmysnw%2BLCQbZZzA7DxxRz8Z%2BKflRgy0m4nob9KbTHk6171%2FpCD4KU2ERQq1eOsKsTIYcHmNU6yFxvBhCPd9rZJ8XAcxTM%2BsfkUHyKBk7x%2BucZGoM4Mfh%2FSnoOV9wqYFfBr2qjWcqyjWswyV3vSxZSGg56nhs7pqwQbZnLwnIdY1ljCUAiDN4CeYcqxuJqTx7RCc6AnUg9oOlTJEHVT7e9NtyMfCq0cHXC8wuTsy0P3axaYZuBh85tNvmJMU7E3Hq%2BFL3F3lFw7HzfbUAn5nZBxpf111dTVyFXGTs%2FKN6YsbO5P9%2BQETO8Ic74o9KRuUt3jQVzWT7qpddZ415OYbKpUs8HmyWyX1TCN3re9BjqkAce%2FDcFASwIELCjg5leSoqAHfYoXAzv%2BHCtCnyQx82yX4Pi69VawWW5UB0HKS3jZAkxY4K9eyEbyBy1v341xKCJt22jDSlK1u8pZjouDApQnJwYvz6NzF03qgP4mntzELnVAfSsfk2gk6oVOKHOlnMpRrMTkcVyerbzXu4YBYZzRlSND%2BgDDp3Z3OAKNJCWg9F0SXowUEBWF3eVQa%2FYtwvi%2FB4mM&X-Amz-Signature=5076566b74a5a51873ee9399936b599443a2b251fac1fde527779b1322a32ca8&X-Amz-SignedHeaders=host&x-id=GetObject)
