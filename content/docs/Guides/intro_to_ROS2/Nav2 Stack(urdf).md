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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XFFW2QL%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T081131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjYZiFUFxLsfJtyekrFJgyI4u6QyADNQfzx213r1tlPAIhAOyH5mMCsXx01s6xdywPncRxlIzvFJO5gduKKppEYyXCKv8DCBEQABoMNjM3NDIzMTgzODA1Igz%2FRi4ZgpkcNNPhIr4q3ANhAJZhyqVAcbuxc6Q6hn3lUfj%2B7WBFsuoF%2BE0EPMfnWVAXC8XjAjUmGBpMfN4u8bj0VX28F0Lk2tuMbBuOqEhTix6F%2Ber4cVV5tIzdt36yi3DLSQ6QRiUK2ptHUP44YYoIJJHmYKvmd0dlApnh9WYbi98Gzh0Li9opnvZ8lXLecgDMBLxaDqlO%2B%2BqoYRqrIki%2BKLWVrA3Nth1Jd8qmocxt1MwBy%2FLxhMoWozBq4qPJs15ZEtZ6bYOPbvtAcHVyyS97YVZnwSgdMBlEq5ChavHv7JvxEQBCYAgp4JHJEPpqDOr7PlebR9nCjGPgd7X4DkqyE0wKWbnnLTrW9KmPsWB32QD9Uik30YyD27z%2BHm6Xbxh31%2BZLQBKlXly7uUv7t3Vuo44MxcCsTXvqHB7bjciVBKp1LgPwdpX7rwy2d7EQy1QJfQKpT91Ze7vBQpRufy4DlxyToBbpKD55uEER7E93ihpBetMNGiTttjTFIAAJukWCTvo3b20Fp3rg56HoDS7RTvxN8duRNFoLHrOiRU2uWbwo7bptS%2BQKwAfjPzSuVptw3R2Q9sXF4Iyc%2F67%2FTfYsfZJlFP9kt2%2FqmgAaEQWQ6VRFuEIWRMGaQdq69xn%2FsMApQZQZVD1%2FQ25k1DD8jKC%2BBjqkAV3pVLMRPc%2BvHqVmxk8XfamX30lUYKmRbTRc5znBCkh5YwmAQ2DCf6beBv%2Fy6MSvA2hjxIpB0oXe%2BVCAlzAp0QmQq9zdmIj8sawj5e6zIaMqGfE2CY7xaLIZd8KEzR2SVWGim2viPWh9oH8PxZYQMafkcAphKAz5E4NrLK4b4q2aiOVeXppu0TS6NxNj4nfSq%2Fyl0wyPPGOLewnOEDjEluHqJ6u%2B&X-Amz-Signature=963474d8852d109e4c296d6993cfbc79d037939a57e56398f2a3ebda85bd2671&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XFFW2QL%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T081131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjYZiFUFxLsfJtyekrFJgyI4u6QyADNQfzx213r1tlPAIhAOyH5mMCsXx01s6xdywPncRxlIzvFJO5gduKKppEYyXCKv8DCBEQABoMNjM3NDIzMTgzODA1Igz%2FRi4ZgpkcNNPhIr4q3ANhAJZhyqVAcbuxc6Q6hn3lUfj%2B7WBFsuoF%2BE0EPMfnWVAXC8XjAjUmGBpMfN4u8bj0VX28F0Lk2tuMbBuOqEhTix6F%2Ber4cVV5tIzdt36yi3DLSQ6QRiUK2ptHUP44YYoIJJHmYKvmd0dlApnh9WYbi98Gzh0Li9opnvZ8lXLecgDMBLxaDqlO%2B%2BqoYRqrIki%2BKLWVrA3Nth1Jd8qmocxt1MwBy%2FLxhMoWozBq4qPJs15ZEtZ6bYOPbvtAcHVyyS97YVZnwSgdMBlEq5ChavHv7JvxEQBCYAgp4JHJEPpqDOr7PlebR9nCjGPgd7X4DkqyE0wKWbnnLTrW9KmPsWB32QD9Uik30YyD27z%2BHm6Xbxh31%2BZLQBKlXly7uUv7t3Vuo44MxcCsTXvqHB7bjciVBKp1LgPwdpX7rwy2d7EQy1QJfQKpT91Ze7vBQpRufy4DlxyToBbpKD55uEER7E93ihpBetMNGiTttjTFIAAJukWCTvo3b20Fp3rg56HoDS7RTvxN8duRNFoLHrOiRU2uWbwo7bptS%2BQKwAfjPzSuVptw3R2Q9sXF4Iyc%2F67%2FTfYsfZJlFP9kt2%2FqmgAaEQWQ6VRFuEIWRMGaQdq69xn%2FsMApQZQZVD1%2FQ25k1DD8jKC%2BBjqkAV3pVLMRPc%2BvHqVmxk8XfamX30lUYKmRbTRc5znBCkh5YwmAQ2DCf6beBv%2Fy6MSvA2hjxIpB0oXe%2BVCAlzAp0QmQq9zdmIj8sawj5e6zIaMqGfE2CY7xaLIZd8KEzR2SVWGim2viPWh9oH8PxZYQMafkcAphKAz5E4NrLK4b4q2aiOVeXppu0TS6NxNj4nfSq%2Fyl0wyPPGOLewnOEDjEluHqJ6u%2B&X-Amz-Signature=2a8fd2d0994099df657fc2ce985a0ea6c21048fb17e40621363fc7b3a44c58ed&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XFFW2QL%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T081131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjYZiFUFxLsfJtyekrFJgyI4u6QyADNQfzx213r1tlPAIhAOyH5mMCsXx01s6xdywPncRxlIzvFJO5gduKKppEYyXCKv8DCBEQABoMNjM3NDIzMTgzODA1Igz%2FRi4ZgpkcNNPhIr4q3ANhAJZhyqVAcbuxc6Q6hn3lUfj%2B7WBFsuoF%2BE0EPMfnWVAXC8XjAjUmGBpMfN4u8bj0VX28F0Lk2tuMbBuOqEhTix6F%2Ber4cVV5tIzdt36yi3DLSQ6QRiUK2ptHUP44YYoIJJHmYKvmd0dlApnh9WYbi98Gzh0Li9opnvZ8lXLecgDMBLxaDqlO%2B%2BqoYRqrIki%2BKLWVrA3Nth1Jd8qmocxt1MwBy%2FLxhMoWozBq4qPJs15ZEtZ6bYOPbvtAcHVyyS97YVZnwSgdMBlEq5ChavHv7JvxEQBCYAgp4JHJEPpqDOr7PlebR9nCjGPgd7X4DkqyE0wKWbnnLTrW9KmPsWB32QD9Uik30YyD27z%2BHm6Xbxh31%2BZLQBKlXly7uUv7t3Vuo44MxcCsTXvqHB7bjciVBKp1LgPwdpX7rwy2d7EQy1QJfQKpT91Ze7vBQpRufy4DlxyToBbpKD55uEER7E93ihpBetMNGiTttjTFIAAJukWCTvo3b20Fp3rg56HoDS7RTvxN8duRNFoLHrOiRU2uWbwo7bptS%2BQKwAfjPzSuVptw3R2Q9sXF4Iyc%2F67%2FTfYsfZJlFP9kt2%2FqmgAaEQWQ6VRFuEIWRMGaQdq69xn%2FsMApQZQZVD1%2FQ25k1DD8jKC%2BBjqkAV3pVLMRPc%2BvHqVmxk8XfamX30lUYKmRbTRc5znBCkh5YwmAQ2DCf6beBv%2Fy6MSvA2hjxIpB0oXe%2BVCAlzAp0QmQq9zdmIj8sawj5e6zIaMqGfE2CY7xaLIZd8KEzR2SVWGim2viPWh9oH8PxZYQMafkcAphKAz5E4NrLK4b4q2aiOVeXppu0TS6NxNj4nfSq%2Fyl0wyPPGOLewnOEDjEluHqJ6u%2B&X-Amz-Signature=8995c0dd5ddd413d766ad0dcdfceae2be99d277dad501e79e08444a6f2439505&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XFFW2QL%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T081131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjYZiFUFxLsfJtyekrFJgyI4u6QyADNQfzx213r1tlPAIhAOyH5mMCsXx01s6xdywPncRxlIzvFJO5gduKKppEYyXCKv8DCBEQABoMNjM3NDIzMTgzODA1Igz%2FRi4ZgpkcNNPhIr4q3ANhAJZhyqVAcbuxc6Q6hn3lUfj%2B7WBFsuoF%2BE0EPMfnWVAXC8XjAjUmGBpMfN4u8bj0VX28F0Lk2tuMbBuOqEhTix6F%2Ber4cVV5tIzdt36yi3DLSQ6QRiUK2ptHUP44YYoIJJHmYKvmd0dlApnh9WYbi98Gzh0Li9opnvZ8lXLecgDMBLxaDqlO%2B%2BqoYRqrIki%2BKLWVrA3Nth1Jd8qmocxt1MwBy%2FLxhMoWozBq4qPJs15ZEtZ6bYOPbvtAcHVyyS97YVZnwSgdMBlEq5ChavHv7JvxEQBCYAgp4JHJEPpqDOr7PlebR9nCjGPgd7X4DkqyE0wKWbnnLTrW9KmPsWB32QD9Uik30YyD27z%2BHm6Xbxh31%2BZLQBKlXly7uUv7t3Vuo44MxcCsTXvqHB7bjciVBKp1LgPwdpX7rwy2d7EQy1QJfQKpT91Ze7vBQpRufy4DlxyToBbpKD55uEER7E93ihpBetMNGiTttjTFIAAJukWCTvo3b20Fp3rg56HoDS7RTvxN8duRNFoLHrOiRU2uWbwo7bptS%2BQKwAfjPzSuVptw3R2Q9sXF4Iyc%2F67%2FTfYsfZJlFP9kt2%2FqmgAaEQWQ6VRFuEIWRMGaQdq69xn%2FsMApQZQZVD1%2FQ25k1DD8jKC%2BBjqkAV3pVLMRPc%2BvHqVmxk8XfamX30lUYKmRbTRc5znBCkh5YwmAQ2DCf6beBv%2Fy6MSvA2hjxIpB0oXe%2BVCAlzAp0QmQq9zdmIj8sawj5e6zIaMqGfE2CY7xaLIZd8KEzR2SVWGim2viPWh9oH8PxZYQMafkcAphKAz5E4NrLK4b4q2aiOVeXppu0TS6NxNj4nfSq%2Fyl0wyPPGOLewnOEDjEluHqJ6u%2B&X-Amz-Signature=37f8fc33e8a953bbec6ba3c9ad028c2c2eee64504548cc9461c87329b2855023&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XFFW2QL%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T081131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjYZiFUFxLsfJtyekrFJgyI4u6QyADNQfzx213r1tlPAIhAOyH5mMCsXx01s6xdywPncRxlIzvFJO5gduKKppEYyXCKv8DCBEQABoMNjM3NDIzMTgzODA1Igz%2FRi4ZgpkcNNPhIr4q3ANhAJZhyqVAcbuxc6Q6hn3lUfj%2B7WBFsuoF%2BE0EPMfnWVAXC8XjAjUmGBpMfN4u8bj0VX28F0Lk2tuMbBuOqEhTix6F%2Ber4cVV5tIzdt36yi3DLSQ6QRiUK2ptHUP44YYoIJJHmYKvmd0dlApnh9WYbi98Gzh0Li9opnvZ8lXLecgDMBLxaDqlO%2B%2BqoYRqrIki%2BKLWVrA3Nth1Jd8qmocxt1MwBy%2FLxhMoWozBq4qPJs15ZEtZ6bYOPbvtAcHVyyS97YVZnwSgdMBlEq5ChavHv7JvxEQBCYAgp4JHJEPpqDOr7PlebR9nCjGPgd7X4DkqyE0wKWbnnLTrW9KmPsWB32QD9Uik30YyD27z%2BHm6Xbxh31%2BZLQBKlXly7uUv7t3Vuo44MxcCsTXvqHB7bjciVBKp1LgPwdpX7rwy2d7EQy1QJfQKpT91Ze7vBQpRufy4DlxyToBbpKD55uEER7E93ihpBetMNGiTttjTFIAAJukWCTvo3b20Fp3rg56HoDS7RTvxN8duRNFoLHrOiRU2uWbwo7bptS%2BQKwAfjPzSuVptw3R2Q9sXF4Iyc%2F67%2FTfYsfZJlFP9kt2%2FqmgAaEQWQ6VRFuEIWRMGaQdq69xn%2FsMApQZQZVD1%2FQ25k1DD8jKC%2BBjqkAV3pVLMRPc%2BvHqVmxk8XfamX30lUYKmRbTRc5znBCkh5YwmAQ2DCf6beBv%2Fy6MSvA2hjxIpB0oXe%2BVCAlzAp0QmQq9zdmIj8sawj5e6zIaMqGfE2CY7xaLIZd8KEzR2SVWGim2viPWh9oH8PxZYQMafkcAphKAz5E4NrLK4b4q2aiOVeXppu0TS6NxNj4nfSq%2Fyl0wyPPGOLewnOEDjEluHqJ6u%2B&X-Amz-Signature=27849a22cde2b3ca5c4e4dbc1b088d497389b51dce2c82e01cabbac5ba662691&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XFFW2QL%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T081131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjYZiFUFxLsfJtyekrFJgyI4u6QyADNQfzx213r1tlPAIhAOyH5mMCsXx01s6xdywPncRxlIzvFJO5gduKKppEYyXCKv8DCBEQABoMNjM3NDIzMTgzODA1Igz%2FRi4ZgpkcNNPhIr4q3ANhAJZhyqVAcbuxc6Q6hn3lUfj%2B7WBFsuoF%2BE0EPMfnWVAXC8XjAjUmGBpMfN4u8bj0VX28F0Lk2tuMbBuOqEhTix6F%2Ber4cVV5tIzdt36yi3DLSQ6QRiUK2ptHUP44YYoIJJHmYKvmd0dlApnh9WYbi98Gzh0Li9opnvZ8lXLecgDMBLxaDqlO%2B%2BqoYRqrIki%2BKLWVrA3Nth1Jd8qmocxt1MwBy%2FLxhMoWozBq4qPJs15ZEtZ6bYOPbvtAcHVyyS97YVZnwSgdMBlEq5ChavHv7JvxEQBCYAgp4JHJEPpqDOr7PlebR9nCjGPgd7X4DkqyE0wKWbnnLTrW9KmPsWB32QD9Uik30YyD27z%2BHm6Xbxh31%2BZLQBKlXly7uUv7t3Vuo44MxcCsTXvqHB7bjciVBKp1LgPwdpX7rwy2d7EQy1QJfQKpT91Ze7vBQpRufy4DlxyToBbpKD55uEER7E93ihpBetMNGiTttjTFIAAJukWCTvo3b20Fp3rg56HoDS7RTvxN8duRNFoLHrOiRU2uWbwo7bptS%2BQKwAfjPzSuVptw3R2Q9sXF4Iyc%2F67%2FTfYsfZJlFP9kt2%2FqmgAaEQWQ6VRFuEIWRMGaQdq69xn%2FsMApQZQZVD1%2FQ25k1DD8jKC%2BBjqkAV3pVLMRPc%2BvHqVmxk8XfamX30lUYKmRbTRc5znBCkh5YwmAQ2DCf6beBv%2Fy6MSvA2hjxIpB0oXe%2BVCAlzAp0QmQq9zdmIj8sawj5e6zIaMqGfE2CY7xaLIZd8KEzR2SVWGim2viPWh9oH8PxZYQMafkcAphKAz5E4NrLK4b4q2aiOVeXppu0TS6NxNj4nfSq%2Fyl0wyPPGOLewnOEDjEluHqJ6u%2B&X-Amz-Signature=24c0dbeaf90d7947c3eef3ba6929b6be643af84ee2b295a0bc686d0837232927&X-Amz-SignedHeaders=host&x-id=GetObject)
