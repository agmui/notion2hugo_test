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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU7V4RC4%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T161116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwsmT72Kr6RKaI6uhIOINEDOXDryD%2BdfWkpM39TCbEDwIhALpArDUxyPw4A7zp3t4qDs7gI5FhrRZFDLxZ%2BCvG8q2gKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrRyh1QrIZciTvonUq3APyVd%2Fhe0pUMhQwSOeCd6ipndeuqcr8m3ienv6sT41Z%2FtvVCuW0LOdRicOF0H1ZffgKrX6icXuBWkVmbDlVPHDxHCDiFf6pWf7xJWAyeQKXk0Ekdh0jQcv5AMc9MnE39ieCBuyqjShIAtt8Ca7l%2FahFkr0GvBHvNXm7%2BAYS%2BB1uwkdmZxHRNCYgGbFK%2Ff2RVPfyxZHJI7vy8vCPwNST6o6zR%2FCFWSthg7CbjT6eykhia%2B5VBuSvhsd7wM9FYSf1lWJQBJbZwn3suQcxyjp3pDip3BF8BeBTrbbcKpoOdvbkpjWX1%2B7AakeU%2FyXuq17IE7QNxFCM9qTieANqvqVZRHlmR7F%2B7oob3QaYJVhr%2BDBrwZIuG6r7osWjgLIFSmRXupxmPw3YcpZITftY96ruALopwlwGsT0hz67wneNhp4oyp3myLtYakyVQmKqkep01oTO%2FUldz29cTg%2FS341hlOPR%2FuEkOHdX9BEh0HJeAAx2b15LXOwLoHJy7R%2F7v2gEhGvvHwLFKpl8m%2BiYsmoIjM79VerovUuURnbhSyu4MXZg8kSMLD3WqSxOE5I2pHvfcqyTaL0AfwdUtTrvTaMuUftA1UPJpbOA77b%2BZoek7Zlkahx4hoCXJ9GBr3kWG1TDfqL%2FDBjqkAe6D2ylmniESMPmiqu%2BPJ%2FDboqJLPwbB%2Fg5ggIVNpkSbD2W2Zp9LNEwYfzV6iA7ISxlN7PmSaoxcEsTfoBxfosswIptdxYHvbkHYQx5r7aRmebyblZ4ufoHtP8vHk1CwtuIUTg0ZcJN0FCM8QYASuQ6lYkb%2Fx1ndcbKOSCWgvvlp8E%2FSfff74hGrGgNgXVxKS2qoMqH89GmBc9Xv46VjYj0icu5H&X-Amz-Signature=e70a4188b62b930d1ce84ef319b9eb6f5037f0bf7a20c7ce1605706a9163a20b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU7V4RC4%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T161116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwsmT72Kr6RKaI6uhIOINEDOXDryD%2BdfWkpM39TCbEDwIhALpArDUxyPw4A7zp3t4qDs7gI5FhrRZFDLxZ%2BCvG8q2gKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrRyh1QrIZciTvonUq3APyVd%2Fhe0pUMhQwSOeCd6ipndeuqcr8m3ienv6sT41Z%2FtvVCuW0LOdRicOF0H1ZffgKrX6icXuBWkVmbDlVPHDxHCDiFf6pWf7xJWAyeQKXk0Ekdh0jQcv5AMc9MnE39ieCBuyqjShIAtt8Ca7l%2FahFkr0GvBHvNXm7%2BAYS%2BB1uwkdmZxHRNCYgGbFK%2Ff2RVPfyxZHJI7vy8vCPwNST6o6zR%2FCFWSthg7CbjT6eykhia%2B5VBuSvhsd7wM9FYSf1lWJQBJbZwn3suQcxyjp3pDip3BF8BeBTrbbcKpoOdvbkpjWX1%2B7AakeU%2FyXuq17IE7QNxFCM9qTieANqvqVZRHlmR7F%2B7oob3QaYJVhr%2BDBrwZIuG6r7osWjgLIFSmRXupxmPw3YcpZITftY96ruALopwlwGsT0hz67wneNhp4oyp3myLtYakyVQmKqkep01oTO%2FUldz29cTg%2FS341hlOPR%2FuEkOHdX9BEh0HJeAAx2b15LXOwLoHJy7R%2F7v2gEhGvvHwLFKpl8m%2BiYsmoIjM79VerovUuURnbhSyu4MXZg8kSMLD3WqSxOE5I2pHvfcqyTaL0AfwdUtTrvTaMuUftA1UPJpbOA77b%2BZoek7Zlkahx4hoCXJ9GBr3kWG1TDfqL%2FDBjqkAe6D2ylmniESMPmiqu%2BPJ%2FDboqJLPwbB%2Fg5ggIVNpkSbD2W2Zp9LNEwYfzV6iA7ISxlN7PmSaoxcEsTfoBxfosswIptdxYHvbkHYQx5r7aRmebyblZ4ufoHtP8vHk1CwtuIUTg0ZcJN0FCM8QYASuQ6lYkb%2Fx1ndcbKOSCWgvvlp8E%2FSfff74hGrGgNgXVxKS2qoMqH89GmBc9Xv46VjYj0icu5H&X-Amz-Signature=0e8d1b4e71836552ddc5d2c2c99a494268de5be1a48a4c2079f8e206d60038b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU7V4RC4%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T161116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwsmT72Kr6RKaI6uhIOINEDOXDryD%2BdfWkpM39TCbEDwIhALpArDUxyPw4A7zp3t4qDs7gI5FhrRZFDLxZ%2BCvG8q2gKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrRyh1QrIZciTvonUq3APyVd%2Fhe0pUMhQwSOeCd6ipndeuqcr8m3ienv6sT41Z%2FtvVCuW0LOdRicOF0H1ZffgKrX6icXuBWkVmbDlVPHDxHCDiFf6pWf7xJWAyeQKXk0Ekdh0jQcv5AMc9MnE39ieCBuyqjShIAtt8Ca7l%2FahFkr0GvBHvNXm7%2BAYS%2BB1uwkdmZxHRNCYgGbFK%2Ff2RVPfyxZHJI7vy8vCPwNST6o6zR%2FCFWSthg7CbjT6eykhia%2B5VBuSvhsd7wM9FYSf1lWJQBJbZwn3suQcxyjp3pDip3BF8BeBTrbbcKpoOdvbkpjWX1%2B7AakeU%2FyXuq17IE7QNxFCM9qTieANqvqVZRHlmR7F%2B7oob3QaYJVhr%2BDBrwZIuG6r7osWjgLIFSmRXupxmPw3YcpZITftY96ruALopwlwGsT0hz67wneNhp4oyp3myLtYakyVQmKqkep01oTO%2FUldz29cTg%2FS341hlOPR%2FuEkOHdX9BEh0HJeAAx2b15LXOwLoHJy7R%2F7v2gEhGvvHwLFKpl8m%2BiYsmoIjM79VerovUuURnbhSyu4MXZg8kSMLD3WqSxOE5I2pHvfcqyTaL0AfwdUtTrvTaMuUftA1UPJpbOA77b%2BZoek7Zlkahx4hoCXJ9GBr3kWG1TDfqL%2FDBjqkAe6D2ylmniESMPmiqu%2BPJ%2FDboqJLPwbB%2Fg5ggIVNpkSbD2W2Zp9LNEwYfzV6iA7ISxlN7PmSaoxcEsTfoBxfosswIptdxYHvbkHYQx5r7aRmebyblZ4ufoHtP8vHk1CwtuIUTg0ZcJN0FCM8QYASuQ6lYkb%2Fx1ndcbKOSCWgvvlp8E%2FSfff74hGrGgNgXVxKS2qoMqH89GmBc9Xv46VjYj0icu5H&X-Amz-Signature=e504dc7bd53ecec6109ff6b11ddd3aa1e33a6d4a27d4b82a699609272fbc1d5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU7V4RC4%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T161116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwsmT72Kr6RKaI6uhIOINEDOXDryD%2BdfWkpM39TCbEDwIhALpArDUxyPw4A7zp3t4qDs7gI5FhrRZFDLxZ%2BCvG8q2gKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrRyh1QrIZciTvonUq3APyVd%2Fhe0pUMhQwSOeCd6ipndeuqcr8m3ienv6sT41Z%2FtvVCuW0LOdRicOF0H1ZffgKrX6icXuBWkVmbDlVPHDxHCDiFf6pWf7xJWAyeQKXk0Ekdh0jQcv5AMc9MnE39ieCBuyqjShIAtt8Ca7l%2FahFkr0GvBHvNXm7%2BAYS%2BB1uwkdmZxHRNCYgGbFK%2Ff2RVPfyxZHJI7vy8vCPwNST6o6zR%2FCFWSthg7CbjT6eykhia%2B5VBuSvhsd7wM9FYSf1lWJQBJbZwn3suQcxyjp3pDip3BF8BeBTrbbcKpoOdvbkpjWX1%2B7AakeU%2FyXuq17IE7QNxFCM9qTieANqvqVZRHlmR7F%2B7oob3QaYJVhr%2BDBrwZIuG6r7osWjgLIFSmRXupxmPw3YcpZITftY96ruALopwlwGsT0hz67wneNhp4oyp3myLtYakyVQmKqkep01oTO%2FUldz29cTg%2FS341hlOPR%2FuEkOHdX9BEh0HJeAAx2b15LXOwLoHJy7R%2F7v2gEhGvvHwLFKpl8m%2BiYsmoIjM79VerovUuURnbhSyu4MXZg8kSMLD3WqSxOE5I2pHvfcqyTaL0AfwdUtTrvTaMuUftA1UPJpbOA77b%2BZoek7Zlkahx4hoCXJ9GBr3kWG1TDfqL%2FDBjqkAe6D2ylmniESMPmiqu%2BPJ%2FDboqJLPwbB%2Fg5ggIVNpkSbD2W2Zp9LNEwYfzV6iA7ISxlN7PmSaoxcEsTfoBxfosswIptdxYHvbkHYQx5r7aRmebyblZ4ufoHtP8vHk1CwtuIUTg0ZcJN0FCM8QYASuQ6lYkb%2Fx1ndcbKOSCWgvvlp8E%2FSfff74hGrGgNgXVxKS2qoMqH89GmBc9Xv46VjYj0icu5H&X-Amz-Signature=2eaf86675162fbcfaf6b912c149692f8b3b65c49b4fcd40f6e424d1c5a4ed7fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU7V4RC4%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T161116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwsmT72Kr6RKaI6uhIOINEDOXDryD%2BdfWkpM39TCbEDwIhALpArDUxyPw4A7zp3t4qDs7gI5FhrRZFDLxZ%2BCvG8q2gKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrRyh1QrIZciTvonUq3APyVd%2Fhe0pUMhQwSOeCd6ipndeuqcr8m3ienv6sT41Z%2FtvVCuW0LOdRicOF0H1ZffgKrX6icXuBWkVmbDlVPHDxHCDiFf6pWf7xJWAyeQKXk0Ekdh0jQcv5AMc9MnE39ieCBuyqjShIAtt8Ca7l%2FahFkr0GvBHvNXm7%2BAYS%2BB1uwkdmZxHRNCYgGbFK%2Ff2RVPfyxZHJI7vy8vCPwNST6o6zR%2FCFWSthg7CbjT6eykhia%2B5VBuSvhsd7wM9FYSf1lWJQBJbZwn3suQcxyjp3pDip3BF8BeBTrbbcKpoOdvbkpjWX1%2B7AakeU%2FyXuq17IE7QNxFCM9qTieANqvqVZRHlmR7F%2B7oob3QaYJVhr%2BDBrwZIuG6r7osWjgLIFSmRXupxmPw3YcpZITftY96ruALopwlwGsT0hz67wneNhp4oyp3myLtYakyVQmKqkep01oTO%2FUldz29cTg%2FS341hlOPR%2FuEkOHdX9BEh0HJeAAx2b15LXOwLoHJy7R%2F7v2gEhGvvHwLFKpl8m%2BiYsmoIjM79VerovUuURnbhSyu4MXZg8kSMLD3WqSxOE5I2pHvfcqyTaL0AfwdUtTrvTaMuUftA1UPJpbOA77b%2BZoek7Zlkahx4hoCXJ9GBr3kWG1TDfqL%2FDBjqkAe6D2ylmniESMPmiqu%2BPJ%2FDboqJLPwbB%2Fg5ggIVNpkSbD2W2Zp9LNEwYfzV6iA7ISxlN7PmSaoxcEsTfoBxfosswIptdxYHvbkHYQx5r7aRmebyblZ4ufoHtP8vHk1CwtuIUTg0ZcJN0FCM8QYASuQ6lYkb%2Fx1ndcbKOSCWgvvlp8E%2FSfff74hGrGgNgXVxKS2qoMqH89GmBc9Xv46VjYj0icu5H&X-Amz-Signature=adca895ae11a126f535bf6a0efdaa351f27b1f8c6848e16936f48a38ffa02168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU7V4RC4%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T161116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwsmT72Kr6RKaI6uhIOINEDOXDryD%2BdfWkpM39TCbEDwIhALpArDUxyPw4A7zp3t4qDs7gI5FhrRZFDLxZ%2BCvG8q2gKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxrRyh1QrIZciTvonUq3APyVd%2Fhe0pUMhQwSOeCd6ipndeuqcr8m3ienv6sT41Z%2FtvVCuW0LOdRicOF0H1ZffgKrX6icXuBWkVmbDlVPHDxHCDiFf6pWf7xJWAyeQKXk0Ekdh0jQcv5AMc9MnE39ieCBuyqjShIAtt8Ca7l%2FahFkr0GvBHvNXm7%2BAYS%2BB1uwkdmZxHRNCYgGbFK%2Ff2RVPfyxZHJI7vy8vCPwNST6o6zR%2FCFWSthg7CbjT6eykhia%2B5VBuSvhsd7wM9FYSf1lWJQBJbZwn3suQcxyjp3pDip3BF8BeBTrbbcKpoOdvbkpjWX1%2B7AakeU%2FyXuq17IE7QNxFCM9qTieANqvqVZRHlmR7F%2B7oob3QaYJVhr%2BDBrwZIuG6r7osWjgLIFSmRXupxmPw3YcpZITftY96ruALopwlwGsT0hz67wneNhp4oyp3myLtYakyVQmKqkep01oTO%2FUldz29cTg%2FS341hlOPR%2FuEkOHdX9BEh0HJeAAx2b15LXOwLoHJy7R%2F7v2gEhGvvHwLFKpl8m%2BiYsmoIjM79VerovUuURnbhSyu4MXZg8kSMLD3WqSxOE5I2pHvfcqyTaL0AfwdUtTrvTaMuUftA1UPJpbOA77b%2BZoek7Zlkahx4hoCXJ9GBr3kWG1TDfqL%2FDBjqkAe6D2ylmniESMPmiqu%2BPJ%2FDboqJLPwbB%2Fg5ggIVNpkSbD2W2Zp9LNEwYfzV6iA7ISxlN7PmSaoxcEsTfoBxfosswIptdxYHvbkHYQx5r7aRmebyblZ4ufoHtP8vHk1CwtuIUTg0ZcJN0FCM8QYASuQ6lYkb%2Fx1ndcbKOSCWgvvlp8E%2FSfff74hGrGgNgXVxKS2qoMqH89GmBc9Xv46VjYj0icu5H&X-Amz-Signature=d6e07671325043ff86aa2736d5568131214119ece05651433a98a600a9704dde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
