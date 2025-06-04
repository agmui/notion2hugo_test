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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M7XDGTU%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T181212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCR1g5TekILknXZ0LI2uaBhjTF3SEqzSRLF4Q2Sgnvc8gIhAOdNHSrcgRnMuq%2FSUBXNYcEcg0iEMqbDXZUTDeueiNsAKv8DCDMQABoMNjM3NDIzMTgzODA1IgxbI1G%2BNvs3SoL7U3Iq3AP7YPkp7SiZXkQ9w8veJKtbDPznq9%2Bn%2FZohklgsxo%2F08kCN4Sr%2FEGvZ0MAU%2BXDna3%2FqcmB77PC0rU7q8d%2BDyb%2BDuaMfC1Xqj2ZTsRluaXQt3JUUM3Hlcab3E%2F1jXI4COyJeamgZjjylAfSHlQ%2BPn7cZ9YxrtTwLC9O7Iv%2Bh9hkGkTmD2JLx%2Bq4zsAEtrxuXST%2FvdpcjuN6jl6V2uNn77v2aJZZWHOI0O5BVaHEgiqsEKyXvf5wz5Dg%2BF6aHuA19PGj4rSTVSBxtD5Ppxy9SJiiKV%2B1ORX0MYNG%2FhBfcn%2Fic7UtINRUkr%2BlfryGGpnea6Wk2%2FF7qYEUoXVdt8MBcHgtiUpv4dzmT15s8Hv1i9uTEiBmBv0iO7uCkhg3tMJWTJPzrinnfeNAr3EvwJOpUKPUQ6zIce6uOfLscSp7vilGj3TQ0o0J9IFFz%2FlOSBWEVztfYZhhVZbDJFedkVNUzJVoFYH8mUJCt6Su23D6wnsExAjggigpukhhKHvGgc%2Fc8kdxZPeQHIDe7zzGcJtU3u4xZqYQKpd%2BT2A6KACxZHSNdre9alNjcJFQdGnu6jK63RZ02%2BPHeEcbKmZSZdt43kZp5IJc8WXN5%2BTAEosA4fdxO6dWA9%2FyPH0K4RIuvWDCUh4LCBjqkAaetqmh3fNdGdCQO%2BFbDms0CaBoYte2oHe2fBXvEin7y5mR0oJ5%2F8SLMSGjLhqhyHXOFPrJ3U02CtnttFhmvITQBHv5Z3MmoA2yqTFfF9L3K2Nc%2BnJsNBM3Ep%2F6qRQO1KfuWkv9%2BYxwKfl%2FGS%2FLVGtDaqi%2B6HLzfa7ItCLldmmDyWRcg%2BrUDLYXmCp%2BC8YfyL8cOWxycqOEfA%2BPiYG2wsTBr%2Fzfw&X-Amz-Signature=4f618d952367133980b2dcf8816502b44fa8ae3dc299b418ac1613c2f2df23e9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M7XDGTU%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T181212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCR1g5TekILknXZ0LI2uaBhjTF3SEqzSRLF4Q2Sgnvc8gIhAOdNHSrcgRnMuq%2FSUBXNYcEcg0iEMqbDXZUTDeueiNsAKv8DCDMQABoMNjM3NDIzMTgzODA1IgxbI1G%2BNvs3SoL7U3Iq3AP7YPkp7SiZXkQ9w8veJKtbDPznq9%2Bn%2FZohklgsxo%2F08kCN4Sr%2FEGvZ0MAU%2BXDna3%2FqcmB77PC0rU7q8d%2BDyb%2BDuaMfC1Xqj2ZTsRluaXQt3JUUM3Hlcab3E%2F1jXI4COyJeamgZjjylAfSHlQ%2BPn7cZ9YxrtTwLC9O7Iv%2Bh9hkGkTmD2JLx%2Bq4zsAEtrxuXST%2FvdpcjuN6jl6V2uNn77v2aJZZWHOI0O5BVaHEgiqsEKyXvf5wz5Dg%2BF6aHuA19PGj4rSTVSBxtD5Ppxy9SJiiKV%2B1ORX0MYNG%2FhBfcn%2Fic7UtINRUkr%2BlfryGGpnea6Wk2%2FF7qYEUoXVdt8MBcHgtiUpv4dzmT15s8Hv1i9uTEiBmBv0iO7uCkhg3tMJWTJPzrinnfeNAr3EvwJOpUKPUQ6zIce6uOfLscSp7vilGj3TQ0o0J9IFFz%2FlOSBWEVztfYZhhVZbDJFedkVNUzJVoFYH8mUJCt6Su23D6wnsExAjggigpukhhKHvGgc%2Fc8kdxZPeQHIDe7zzGcJtU3u4xZqYQKpd%2BT2A6KACxZHSNdre9alNjcJFQdGnu6jK63RZ02%2BPHeEcbKmZSZdt43kZp5IJc8WXN5%2BTAEosA4fdxO6dWA9%2FyPH0K4RIuvWDCUh4LCBjqkAaetqmh3fNdGdCQO%2BFbDms0CaBoYte2oHe2fBXvEin7y5mR0oJ5%2F8SLMSGjLhqhyHXOFPrJ3U02CtnttFhmvITQBHv5Z3MmoA2yqTFfF9L3K2Nc%2BnJsNBM3Ep%2F6qRQO1KfuWkv9%2BYxwKfl%2FGS%2FLVGtDaqi%2B6HLzfa7ItCLldmmDyWRcg%2BrUDLYXmCp%2BC8YfyL8cOWxycqOEfA%2BPiYG2wsTBr%2Fzfw&X-Amz-Signature=35d387cded2b5d85e799244011a3c52a100486b9cb0feb2dcee0e01e577607c9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M7XDGTU%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T181212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCR1g5TekILknXZ0LI2uaBhjTF3SEqzSRLF4Q2Sgnvc8gIhAOdNHSrcgRnMuq%2FSUBXNYcEcg0iEMqbDXZUTDeueiNsAKv8DCDMQABoMNjM3NDIzMTgzODA1IgxbI1G%2BNvs3SoL7U3Iq3AP7YPkp7SiZXkQ9w8veJKtbDPznq9%2Bn%2FZohklgsxo%2F08kCN4Sr%2FEGvZ0MAU%2BXDna3%2FqcmB77PC0rU7q8d%2BDyb%2BDuaMfC1Xqj2ZTsRluaXQt3JUUM3Hlcab3E%2F1jXI4COyJeamgZjjylAfSHlQ%2BPn7cZ9YxrtTwLC9O7Iv%2Bh9hkGkTmD2JLx%2Bq4zsAEtrxuXST%2FvdpcjuN6jl6V2uNn77v2aJZZWHOI0O5BVaHEgiqsEKyXvf5wz5Dg%2BF6aHuA19PGj4rSTVSBxtD5Ppxy9SJiiKV%2B1ORX0MYNG%2FhBfcn%2Fic7UtINRUkr%2BlfryGGpnea6Wk2%2FF7qYEUoXVdt8MBcHgtiUpv4dzmT15s8Hv1i9uTEiBmBv0iO7uCkhg3tMJWTJPzrinnfeNAr3EvwJOpUKPUQ6zIce6uOfLscSp7vilGj3TQ0o0J9IFFz%2FlOSBWEVztfYZhhVZbDJFedkVNUzJVoFYH8mUJCt6Su23D6wnsExAjggigpukhhKHvGgc%2Fc8kdxZPeQHIDe7zzGcJtU3u4xZqYQKpd%2BT2A6KACxZHSNdre9alNjcJFQdGnu6jK63RZ02%2BPHeEcbKmZSZdt43kZp5IJc8WXN5%2BTAEosA4fdxO6dWA9%2FyPH0K4RIuvWDCUh4LCBjqkAaetqmh3fNdGdCQO%2BFbDms0CaBoYte2oHe2fBXvEin7y5mR0oJ5%2F8SLMSGjLhqhyHXOFPrJ3U02CtnttFhmvITQBHv5Z3MmoA2yqTFfF9L3K2Nc%2BnJsNBM3Ep%2F6qRQO1KfuWkv9%2BYxwKfl%2FGS%2FLVGtDaqi%2B6HLzfa7ItCLldmmDyWRcg%2BrUDLYXmCp%2BC8YfyL8cOWxycqOEfA%2BPiYG2wsTBr%2Fzfw&X-Amz-Signature=b7c681ff84d3221198055698263313bc6c0bcb1cb5b053e488b46ad7182eab28&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M7XDGTU%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T181212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCR1g5TekILknXZ0LI2uaBhjTF3SEqzSRLF4Q2Sgnvc8gIhAOdNHSrcgRnMuq%2FSUBXNYcEcg0iEMqbDXZUTDeueiNsAKv8DCDMQABoMNjM3NDIzMTgzODA1IgxbI1G%2BNvs3SoL7U3Iq3AP7YPkp7SiZXkQ9w8veJKtbDPznq9%2Bn%2FZohklgsxo%2F08kCN4Sr%2FEGvZ0MAU%2BXDna3%2FqcmB77PC0rU7q8d%2BDyb%2BDuaMfC1Xqj2ZTsRluaXQt3JUUM3Hlcab3E%2F1jXI4COyJeamgZjjylAfSHlQ%2BPn7cZ9YxrtTwLC9O7Iv%2Bh9hkGkTmD2JLx%2Bq4zsAEtrxuXST%2FvdpcjuN6jl6V2uNn77v2aJZZWHOI0O5BVaHEgiqsEKyXvf5wz5Dg%2BF6aHuA19PGj4rSTVSBxtD5Ppxy9SJiiKV%2B1ORX0MYNG%2FhBfcn%2Fic7UtINRUkr%2BlfryGGpnea6Wk2%2FF7qYEUoXVdt8MBcHgtiUpv4dzmT15s8Hv1i9uTEiBmBv0iO7uCkhg3tMJWTJPzrinnfeNAr3EvwJOpUKPUQ6zIce6uOfLscSp7vilGj3TQ0o0J9IFFz%2FlOSBWEVztfYZhhVZbDJFedkVNUzJVoFYH8mUJCt6Su23D6wnsExAjggigpukhhKHvGgc%2Fc8kdxZPeQHIDe7zzGcJtU3u4xZqYQKpd%2BT2A6KACxZHSNdre9alNjcJFQdGnu6jK63RZ02%2BPHeEcbKmZSZdt43kZp5IJc8WXN5%2BTAEosA4fdxO6dWA9%2FyPH0K4RIuvWDCUh4LCBjqkAaetqmh3fNdGdCQO%2BFbDms0CaBoYte2oHe2fBXvEin7y5mR0oJ5%2F8SLMSGjLhqhyHXOFPrJ3U02CtnttFhmvITQBHv5Z3MmoA2yqTFfF9L3K2Nc%2BnJsNBM3Ep%2F6qRQO1KfuWkv9%2BYxwKfl%2FGS%2FLVGtDaqi%2B6HLzfa7ItCLldmmDyWRcg%2BrUDLYXmCp%2BC8YfyL8cOWxycqOEfA%2BPiYG2wsTBr%2Fzfw&X-Amz-Signature=b00661884bbf3b7022dbb3554c16a435aff094971232a5f0561031ad57591ea0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M7XDGTU%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T181212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCR1g5TekILknXZ0LI2uaBhjTF3SEqzSRLF4Q2Sgnvc8gIhAOdNHSrcgRnMuq%2FSUBXNYcEcg0iEMqbDXZUTDeueiNsAKv8DCDMQABoMNjM3NDIzMTgzODA1IgxbI1G%2BNvs3SoL7U3Iq3AP7YPkp7SiZXkQ9w8veJKtbDPznq9%2Bn%2FZohklgsxo%2F08kCN4Sr%2FEGvZ0MAU%2BXDna3%2FqcmB77PC0rU7q8d%2BDyb%2BDuaMfC1Xqj2ZTsRluaXQt3JUUM3Hlcab3E%2F1jXI4COyJeamgZjjylAfSHlQ%2BPn7cZ9YxrtTwLC9O7Iv%2Bh9hkGkTmD2JLx%2Bq4zsAEtrxuXST%2FvdpcjuN6jl6V2uNn77v2aJZZWHOI0O5BVaHEgiqsEKyXvf5wz5Dg%2BF6aHuA19PGj4rSTVSBxtD5Ppxy9SJiiKV%2B1ORX0MYNG%2FhBfcn%2Fic7UtINRUkr%2BlfryGGpnea6Wk2%2FF7qYEUoXVdt8MBcHgtiUpv4dzmT15s8Hv1i9uTEiBmBv0iO7uCkhg3tMJWTJPzrinnfeNAr3EvwJOpUKPUQ6zIce6uOfLscSp7vilGj3TQ0o0J9IFFz%2FlOSBWEVztfYZhhVZbDJFedkVNUzJVoFYH8mUJCt6Su23D6wnsExAjggigpukhhKHvGgc%2Fc8kdxZPeQHIDe7zzGcJtU3u4xZqYQKpd%2BT2A6KACxZHSNdre9alNjcJFQdGnu6jK63RZ02%2BPHeEcbKmZSZdt43kZp5IJc8WXN5%2BTAEosA4fdxO6dWA9%2FyPH0K4RIuvWDCUh4LCBjqkAaetqmh3fNdGdCQO%2BFbDms0CaBoYte2oHe2fBXvEin7y5mR0oJ5%2F8SLMSGjLhqhyHXOFPrJ3U02CtnttFhmvITQBHv5Z3MmoA2yqTFfF9L3K2Nc%2BnJsNBM3Ep%2F6qRQO1KfuWkv9%2BYxwKfl%2FGS%2FLVGtDaqi%2B6HLzfa7ItCLldmmDyWRcg%2BrUDLYXmCp%2BC8YfyL8cOWxycqOEfA%2BPiYG2wsTBr%2Fzfw&X-Amz-Signature=5c282d0c973490207cc8554b9028ec4e0b70f891cd48ce7daa7c9ed2f06bd5ae&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M7XDGTU%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T181212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCR1g5TekILknXZ0LI2uaBhjTF3SEqzSRLF4Q2Sgnvc8gIhAOdNHSrcgRnMuq%2FSUBXNYcEcg0iEMqbDXZUTDeueiNsAKv8DCDMQABoMNjM3NDIzMTgzODA1IgxbI1G%2BNvs3SoL7U3Iq3AP7YPkp7SiZXkQ9w8veJKtbDPznq9%2Bn%2FZohklgsxo%2F08kCN4Sr%2FEGvZ0MAU%2BXDna3%2FqcmB77PC0rU7q8d%2BDyb%2BDuaMfC1Xqj2ZTsRluaXQt3JUUM3Hlcab3E%2F1jXI4COyJeamgZjjylAfSHlQ%2BPn7cZ9YxrtTwLC9O7Iv%2Bh9hkGkTmD2JLx%2Bq4zsAEtrxuXST%2FvdpcjuN6jl6V2uNn77v2aJZZWHOI0O5BVaHEgiqsEKyXvf5wz5Dg%2BF6aHuA19PGj4rSTVSBxtD5Ppxy9SJiiKV%2B1ORX0MYNG%2FhBfcn%2Fic7UtINRUkr%2BlfryGGpnea6Wk2%2FF7qYEUoXVdt8MBcHgtiUpv4dzmT15s8Hv1i9uTEiBmBv0iO7uCkhg3tMJWTJPzrinnfeNAr3EvwJOpUKPUQ6zIce6uOfLscSp7vilGj3TQ0o0J9IFFz%2FlOSBWEVztfYZhhVZbDJFedkVNUzJVoFYH8mUJCt6Su23D6wnsExAjggigpukhhKHvGgc%2Fc8kdxZPeQHIDe7zzGcJtU3u4xZqYQKpd%2BT2A6KACxZHSNdre9alNjcJFQdGnu6jK63RZ02%2BPHeEcbKmZSZdt43kZp5IJc8WXN5%2BTAEosA4fdxO6dWA9%2FyPH0K4RIuvWDCUh4LCBjqkAaetqmh3fNdGdCQO%2BFbDms0CaBoYte2oHe2fBXvEin7y5mR0oJ5%2F8SLMSGjLhqhyHXOFPrJ3U02CtnttFhmvITQBHv5Z3MmoA2yqTFfF9L3K2Nc%2BnJsNBM3Ep%2F6qRQO1KfuWkv9%2BYxwKfl%2FGS%2FLVGtDaqi%2B6HLzfa7ItCLldmmDyWRcg%2BrUDLYXmCp%2BC8YfyL8cOWxycqOEfA%2BPiYG2wsTBr%2Fzfw&X-Amz-Signature=baad1e3b377f529131e4022cc4dd6409fae029c42347da063c0b3127db842a45&X-Amz-SignedHeaders=host&x-id=GetObject)
